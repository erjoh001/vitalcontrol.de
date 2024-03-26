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
var Cc=[0,0,370,60];var BD=[360,0,370,60];var E6=[0,0,370,710];var Hp="Unknown animalType";
var IS=[58,10,120,50];var Ir=[0,0,60,60];var O1=[120,0,360,60];var P3="\u2015";var
P4=[0,0,240,60];var CQ=[0,0,40,60];var Fe=[100,0,130,60];var L1=[43,0,100,60];var
P5=[125,0,240,60];var J0=[0,0];var N_=[100,0];var P6=[100,60];var MG=[0,60];var S6=[
107,0];var UN=[240,0];var Z0=[240,60];var WY=[107,60];var Is="%d.%m.%Y";var UO="Unhandled date unit: ";
var Z1=[0,0,200,180];var WZ=[36,0,200,30];var Z2=[0,30,160,60];var W0="Text";var
Z3=[0,70,40,110];var Z4=[44,70,156,110];var UP=[160,70,200,110];var W1=[7,2,27,25
];var P7=[0,30,170,180];var Z5=[170,34,190,57];var O2=[0,0,40,40];var Rj=[0,40];
var W2=[40,40];var W3=[40,0];var W4=[0,0,370,100];var W5=[20,0,290,60];var Z6=[0
,60,370,100];var W6="Cap";var W7=[20,0,370,60];var S7=[310,0,370,60];var UQ=[370
,0];var UR=[370,60];var AcH="UpdateData is called for the base class ListItemBase. Please make "+
"sure this method is implemented by a derived class.";var S8=".";var Z7=[0,0,170
,150];var Afw=[0,59,170,90];var Z8=[110,0,170,150];var W8=[0,30];var Z9=[50,0,100
,150];var Z_=[0,0,40,150];var Afx=[0,0,370,240];var KX=[0,60,370,710];var AcI=[0
,0,370,300];var Lu=[0,60,370,300];var AhS=[0,60,370,120];var An7=[0,120,370,180];
var N$=[0,180,370,240];var W9=[0,240,370,300];var An8=[370,120];var US=[0,120];var
AhT=[370,180];var AcJ=[0,180];var UT=[370,240];var An9=[0,240];var An_=[370,300];
var An$=[0,300];var Aoa=[0,0,50,60];var Afy=[50,0,100,60];var AsN="Unhandled scan type";
var AxV=[3,11,253,51];var AxW=[50,0];var O3=[50,60];var Rk=[100,10,370,50];var AxX=
"276000901234567";var UU=[3,10,57,50];var AsO=[3,11,55,50];var AxY="Unhandled temperature unit";
var AxZ=[110,0,260,60];var Ax0=[235,10,370,50];var Aob="39.5";var Afz=[0,0,270,40
];var Aoc=[270,0];var IT=[270,40];var Aod=[150,0,170,40];var W_=[205,10,207,30];
var Aoe=[0,0,370,40];var AsP=[50,0,320,40];var AsQ=" ";var AsR=[135,23];var Aof=[
135,0];var Aog=[100,0,370,60];var AsS="Error: Nullpointer Exception";var Ax1="Unknown Date Piecker Unit Index: ";
var Ax2="0";var Ax3="Unhandled scan type:";
C.Background={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/DemonstratorBackground.png"
,Format:A._PIXEL_FORMAT_NATIVE,NoOfFrames:1,FrameSize:[1000,740],FrameDelay:0,_this:
null}};C.AMU={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/DemonstratorButtonLeft.png"
,Format:A._PIXEL_FORMAT_NATIVE,NoOfFrames:1,FrameSize:[40,40],FrameDelay:0,_this:
null}};C.AMV={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/DemonstratorButtonLeftPressed.png"
,Format:A._PIXEL_FORMAT_NATIVE,NoOfFrames:1,FrameSize:[40,40],FrameDelay:0,_this:
null}};C.AMW={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/DemonstratorButtonRight.png"
,Format:A._PIXEL_FORMAT_NATIVE,NoOfFrames:1,FrameSize:[40,40],FrameDelay:0,_this:
null}};C.AMX={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/DemonstratorButtonRightPressed.png"
,Format:A._PIXEL_FORMAT_NATIVE,NoOfFrames:1,FrameSize:[40,40],FrameDelay:0,_this:
null}};C.APY={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/DemonstratorIconDatePicker.png"
,Format:A._PIXEL_FORMAT_NATIVE,NoOfFrames:1,FrameSize:[20,23],FrameDelay:0,_this:
null}};C.Filter={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/DemonstratorFilter.png"
,Format:A._PIXEL_FORMAT_NATIVE,NoOfFrames:1,FrameSize:[15,16],FrameDelay:0,_this:
null}};C.ARx={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/DemonstratorMenuIcon.png"
,Format:A._PIXEL_FORMAT_NATIVE,NoOfFrames:1,FrameSize:[20,16],FrameDelay:0,_this:
null}};C.Ajm={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/DemonstratorArrowRight.png"
,Format:A._PIXEL_FORMAT_NATIVE,NoOfFrames:1,FrameSize:[17,16],FrameDelay:0,_this:
null}};C.AMB={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/DemonstratorArrowDown.png"
,Format:A._PIXEL_FORMAT_NATIVE,NoOfFrames:1,FrameSize:[17,16],FrameDelay:0,_this:
null}};C.Asm={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/DemonstratorScanIcon.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:2,FrameSize:[37,37],FrameDelay:0,_this:
null}};C.AUP={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/DemonstratorTemperatureIcon.png"
,Format:A._PIXEL_FORMAT_NATIVE,NoOfFrames:1,FrameSize:[17,37],FrameDelay:0,_this:
null}};C.AVl={Ad_:null,AX:null,AR:null,Background:null,H9:null,AD:null,IP:null,Dm:
null,Lh:null,A7i:null,A7K:0,Bl:function(aSize){A.acn.Menu.Bl.call(this,aSize);this.
IP.H(A.abP(this.IP.M,this.AD.OP));this.IP.H([].concat(this.IP.M.slice(0,3),aSize[
1]));},Ai:function(Ae){var B;A.acn.Menu.Ai.call(this,Ae);var IA=((Ae&0x40)===0x40
);if(IA&&(this.AD.Gs<0))this.AD.GS(0);},NZ:function(E){if(this.Lh===E)return;this.
Lh=E;this.AD.NZ(E);},Bmw:function(E){var B;if(this.A7i===E)return;if(!!this.Ad_){
this.HN(this.Ad_);this.Ad_=null;}if(!!E){this.Ad_=(C.FB.isPrototypeOf(B=A._NewObject(
E,0))?B:null);this.Ad_.A9M([this,this.Akm]);this.Ad_.A9N([this,this.Akn]);this.Ad_.
BmC(null);this.J(this.Ad_,0);this.AD.A9T((B=this.Ad_.M)[3]-B[1]);}else this.AD.A9T(
0);this.IP.H(A.abP(this.IP.M,this.AD.OP));A.pe([this,this.Fj],this);this.A7i=E;}
,Hk:function(G){var B;var Gf=this.AD.G4;var Aa=(C.Ba.isPrototypeOf(B=this.AD.Ch)?
B:null);if(!Aa)return;Aa.Zm(this.AX);Aa.Ce(Gf);Aa.Zq(this.AR);Aa.H(A.abK(Aa.M,[(
B=this.AD.M)[2]-B[0],this.AD.GN]));},Zm:function(E){var B;if(this.AX===E)return;
if(!!this.AX){A.z9([this,this.Ce],this.AX,0);A.z$([this,this.An0],[B=this.AX,B.Fn
,B.Fr],0);}this.AX=E;if(!!E){A.zV([this,this.Ce],E,0);A.zX([this,this.An0],[E,E.
Fn,E.Fr],0);}A.pe([this,this.Ce],this);A.pe([this,this.An0],this);},Ce:function(
G){if(!!this.AX){this.AD.Jw(this.AX.B9());this.AD.AbA(0,this.AD.AY-1);}else this.
AD.Jw(0);if(this.A7K!==this.AD.AY){this.AD.ABA(null,null);this.A7K=this.AD.AY;}A.
pe([this,this.Fj],this);},Akn:function(G){var B;this.H(A.abI(this.M,(B=this.AD.AOI(
))[3]-B[1]));},Akm:function(G){this.H(A.abI(this.M,180));},A84:function(G){var JA=(
A.Core.BK.isPrototypeOf(G)?G:null);var Gf=this.AD.Gs;if(JA.CO===4)Gf=Gf-1;else if(
JA.CO===5)Gf=Gf+1;else if((JA.DQ>=0x30)&&(JA.DQ<=0x39))A._GetAutoObject(A.aco.AgI
).Ey(JA.DQ);else if(JA.CO===45)A._GetAutoObject(A.aco.AgI).Delete();else JA.NH=true;
if((Gf<0)||(Gf>=this.AD.AY))return;this.AD.GS(Gf);this.Bys(Gf,true);},Byh:function(
G){var Aa=(C.Ba.isPrototypeOf(G)?G:null);this.AD.GS(Aa.Hq);},Bys:function(G_,AcX
){var B;if((G_<0)||(G_>=this.AD.AY))return;var Az=this.AD.AqM(G_,G_);var Bd=this.
AD.M;Bd=A.abP(Bd,(B=this.AD.AOI())[3]-B[1]);Bd=A.abI(Bd,(((B=this.AD.M)[3]-B[1])-((
B=this.AD.AOI())[3]-B[1]))-((B=this.AD.Biw())[3]-B[1]));var LM=A.lb(Az,Bd);if((!
AcX&&!((LM[0]>=LM[2])||(LM[1]>=LM[3])))||(AcX&&A.aaY(LM,Az)))return;var Bq=0;if(
Az[3]>Bd[3])Bq=Az[3]-Bd[3];if(Bq>(Az[1]-Bd[1]))Bq=(Az[3]-Bd[1])-this.AD.GN;this.
AD.Gb(this.AD.Br-Bq);},An0:function(G){this.AD.GS(-1);},Fj:function(G){var B;this.
IP.Mw(this.AD.GN*this.AD.AY);this.IP.My(((B=this.AD.M)[3]-B[1])-this.AD.OP);this.
IP.Mx(-this.AD.Br);},_Init:function(aArg){A.acn.Menu._Init.call(this,aArg);A.acg.
AK._Init.call(this.Background={I:this},0);A.Core.H9._Init.call(this.H9={I:this},
0);A.Core.CM._Init.call(this.AD={I:this},0);A.kR.Ay._Init.call(this.IP={I:this},
0);A.Core.BK._Init.call(this.Dm={I:this},0);this.__proto__=C.AVl;this.H(Cc);this.
Background.AZ(0x3);this.Background.H(Cc);this.H9.AZ(0x3F);this.H9.H(Cc);this.AD.
AZ(0x3F);this.AD.H(Cc);this.AD.Ae3(60);this.AD.Jw(0);this.AD.NZ(this.Lh);this.IP.
AZ(0x3A);this.IP.H(BD);this.IP.L(0xFF808080);this.J(this.Background,0);this.J(this.
H9,0);this.J(this.AD,0);this.J(this.IP,0);this.AD.El=[this,this.Fj];this.AD.Hk=[
this,this.Hk];this.AD.AwW(this.H9);this.AR=[this,this.Byh];this.Dm.BL=[this,this.
A84];this.Dm.D1=[this,this.A84];},_Done:function(){this.__proto__=A.acn.Menu;this.
Background._Done();this.H9._Done();this.AD._Done();this.IP._Done();this.Dm._Done(
);A.acn.Menu._Done.call(this);},_ReInit:function(){A.acn.Menu._ReInit.call(this);
this.Background._ReInit();this.H9._ReInit();this.AD._ReInit();this.IP._ReInit();
this.Dm._ReInit();},_Mark:function(D){var B;A.acn.Menu._Mark.call(this,D);if((B=
this.Ad_)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.AX)&&(B._cycle!=D))B._Mark(
B._cycle=D);if((B=this.AR)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.
Background)._cycle!=D)B._Mark(B._cycle=D);if((B=this.H9)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.AD)._cycle!=D)B._Mark(B._cycle=D);if((B=this.IP)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Dm)._cycle!=D)B._Mark(B._cycle=D);},_className:"Demonstrator::VerticalMenu"
};C.AUh={GJ:null,AK:null,BU:null,Init:function(aArg){var B;A.zX([this,this.GH],[
B=A._GetAutoObject(A.aco.Ht),B.A8H,B.A93],0);A.pe([this,this.GH],this);},AbY:function(
E){if(this.GJ===E)return;if(!!this.GJ)this.HN(this.GJ);this.GJ=E;if(!!this.GJ)this.
J(this.GJ,0);this.Bb(E);this.Ahy(E,this.BU);this.Am();},GH:function(G){var B;if(
!!A._GetAutoObject(A.aco.Ht).Asp)this.AbY((C.AhE.isPrototypeOf(B=A._NewObject(A.
_GetAutoObject(A.aco.Ht).Asp,0))?B:null));else this.AbY(null);},_Init:function(aArg
){A.Core.P._Init.call(this,aArg);A.acg.AK._Init.call(this.AK={I:this},0);A.acg.BU.
_Init.call(this.BU={I:this},0);this.__proto__=C.AUh;this.H(E6);this.AK.AZ(0x3F);
this.AK.H(E6);this.BU.H(E6);this.BU.L(0xFF000000);this.J(this.AK,0);this.J(this.
BU,0);this.Init(aArg);},_Done:function(){this.__proto__=A.Core.P;this.AK._Done();
this.BU._Done();A.Core.P._Done.call(this);},_ReInit:function(){A.Core.P._ReInit.
call(this);this.AK._ReInit();this.BU._ReInit();},_Mark:function(D){var B;A.Core.
P._Mark.call(this,D);if((B=this.GJ)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.
AK)._cycle!=D)B._Mark(B._cycle=D);if((B=this.BU)._cycle!=D)B._Mark(B._cycle=D);}
,_className:"Demonstrator::SelectionArea"};C.AMk={ABg:0,Ka:0,Background:null,V:null
,Aji:null,AdR:null,XK:null,AdS:null,Mh:null,Mf:0,LF:false,KD:false,CP:function(){
this.Am();},Ai:function(Ae){var B;C.Ba.Ai.call(this,Ae);var Hd=((Ae&0x10)===0x10
);var Fu=((Ae&0x20)===0x20);var IA=((Ae&0x40)===0x40);if(!Hd){this.Background.L(
0xFFAAAAAA);this.V.L(0xFF888888);this.Mh.Ar(false);this.Mh.Z(false);}else if(IA){
this.Background.L(A.jb.AV);this.V.L(A.jb.Bm);this.Mh.Ar(true);this.Mh.Z(true);}else
if(Fu){this.Background.L(0xFFE6DED8);this.V.L(0xFF000000);this.Mh.Ar(true);this.
Mh.Z(true);}else{this.Background.L(0xFFFFFFFF);this.V.L(0xFF000000);this.Mh.Ar(false
);this.Mh.Z(false);}if(!this.KD&&Fu)A._GetAutoObject(A.aco.Ht).A90(this.ABg);this.
Mh.Bmy(this.Ka>0);this.Mh.Bm1(this.ABg>0);this.V.R(this.Mf.toFixed());this.LF=Hd;
this.KD=Fu;},Ce:function(Ad){if(!this.AX){this.XK.Aw(A.aaL(A.ach.Aet));this.AdR.
L(A.jb.Afp);return;}this.Hq=Ad;if(!!this.AX){this.Ka=this.AX.KM(Ad,26);this.ABg=
this.AX.KM(Ad,22);this.Mf=this.AX.CF(Ad,1);var AlG=this.AX.H2(Ad,11);var Alx=this.
AX.I4(Ad,17);var LP=this.AX.I4(Ad,13);var Ib=this.AX.AmN(Ad,14);var Xj=A._GetAutoObject(
A.Device.Helper).AL$(LP,AlG,Alx);switch(Ib){case 0:this.XK.Aw(A.aaL(A.ach.Aet));
break;case 1:this.XK.Aw(A.aaL(A.ach.Avv));break;case 2:this.XK.Aw(A.aaL(A.ach.Avy
));break;default:A.ab5("%s%e",Hp,Ib);}this.AdS.Aw(this.XK.Al);this.AdR.L(A._GetAutoObject(
A.acj.Assessment).Ql(Xj));this.Am();}},_Init:function(aArg){C.Ba._Init.call(this
,aArg);A.acg.AK._Init.call(this.Background={I:this},0);A.kR.CH._Init.call(this.V={
I:this},0);A.acg.Ap._Init.call(this.Aji={I:this},0);A.acg.Ap._Init.call(this.AdR={
I:this},0);A.acg.Ap._Init.call(this.XK={I:this},0);A.acg.Ap._Init.call(this.AdS={
I:this},0);C.Mh._Init.call(this.Mh={I:this},0);this.__proto__=C.AMk;this.Background.
AZ(0x3F);this.Background.H(Cc);this.V.AZ(0x3F);this.V.H(IS);this.V.R(A.aaR(A.acf.
GM));this.V.A5(0x11);this.V.L(0xFF000000);this.Aji.H(Ir);this.Aji.L(A.jb.Text);this.
AdR.H(Ir);this.AdR.L(A.jb.E1);this.XK.H(Ir);this.AdS.H(Ir);this.AdS.L(A.jb.Text);
this.AdS.Cu(1);this.Mh.AZ(0x3);this.Mh.H(O1);this.J(this.Background,0);this.J(this.
V,0);this.J(this.Aji,0);this.J(this.AdR,0);this.J(this.XK,0);this.J(this.AdS,0);
this.J(this.Mh,0);this.V.S(A.aaL(A.fl.Af));this.V.A2(A.aaL(A.fl.Ak));this.V.Ct(A.
aaL(A.fl.Bi));this.Aji.Aw(A.aaL(C.AHc));this.AdR.Aw(A.aaL(C.AVC));this.XK.Aw(A.aaL(
A.ach.Aet));this.AdS.Aw(A.aaL(A.ach.Aet));},_Done:function(){this.__proto__=C.Ba;
this.Background._Done();this.V._Done();this.Aji._Done();this.AdR._Done();this.XK.
_Done();this.AdS._Done();this.Mh._Done();C.Ba._Done.call(this);},_ReInit:function(
){C.Ba._ReInit.call(this);this.Background._ReInit();this.V._ReInit();this.Aji._ReInit(
);this.AdR._ReInit();this.XK._ReInit();this.AdS._ReInit();this.Mh._ReInit();this.
V.R(A.aaR(A.acf.GM));this.V.S(A.aaL(A.fl.Af));this.V.A2(A.aaL(A.fl.Ak));this.V.Ct(
A.aaL(A.fl.Bi));this.CP();},_Mark:function(D){var B;C.Ba._Mark.call(this,D);if((
B=this.Background)._cycle!=D)B._Mark(B._cycle=D);if((B=this.V)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Aji)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AdR)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.XK)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
AdS)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Mh)._cycle!=D)B._Mark(B._cycle=D);
},_className:"Demonstrator::AnimalMenuItem"};C.Mh={Ut:null,WD:null,AkT:null,Nj:null
,N7:null,ZD:null,Acs:null,AvU:false,AxH:false,CP:function(){this.Am();},Ai:function(
Ae){var B;A.Core.P.Ai.call(this,Ae);var IA=((Ae&0x40)===0x40);if(IA){this.Nj.L(A.
jb.Bm);this.N7.L(A.jb.Bm);}else{this.Nj.L(A.jb.Text);this.N7.L(A.jb.Text);}if(this.
AxH){this.Nj.R(A.aaR(A.acf.BnZ));if(this.AvU){this.Ut.Aw(A.aaL(C.AxI));this.WD.Aw(
A.aaL(C.AxI));}else{this.Ut.Aw(A.aaL(C.Asm));this.WD.Aw(A.aaL(C.Asm));}}else if(
this.AvU){this.Ut.Aw(A.aaL(C.ACv));this.WD.Aw(A.aaL(C.ACv));this.Nj.R(P3);}var A3H=
this.AxH||this.AvU;this.Ut.Z(A3H);this.WD.Z(A3H);this.Nj.Z(A3H);this.ZD.Ar(this.
AxH);},Bm1:function(E){if(this.AxH===E)return;this.AxH=E;this.Am();},Bmy:function(
E){if(this.AvU===E)return;this.AvU=E;this.Am();},_Init:function(aArg){A.Core.P._Init.
call(this,aArg);A.acg.Ap._Init.call(this.Ut={I:this},0);A.acg.Ap._Init.call(this.
WD={I:this},0);A.acg.Ap._Init.call(this.AkT={I:this},0);A.kR.CH._Init.call(this.
Nj={I:this},0);A.kR.CH._Init.call(this.N7={I:this},0);A.Core.Bn._Init.call(this.
ZD={I:this},0);A.Core.Bn._Init.call(this.Acs={I:this},0);this.__proto__=C.Mh;var
B;this.H(P4);this.Ut.AZ(0x6);this.Ut.H(CQ);this.Ut.L(A.jb.CS);this.Ut.Cu(1);this.
WD.AZ(0x6);this.WD.H(CQ);this.WD.L(A.jb.Text);this.AkT.AZ(0xE);this.AkT.H(Fe);this.
Nj.AZ(0x7);this.Nj.H(L1);this.Nj.A5(0x11);this.Nj.L(0xFF000000);this.N7.AZ(0x3);
this.N7.H(P5);this.N7.R(A.aaR(A.acf.Temperature));this.N7.A5(0x11);this.N7.L(0xFF000000
);this.ZD.AZ(0x3);this.ZD.JS(J0);this.ZD.Ks(N_);this.ZD.DC(P6);this.ZD.DM(MG);this.
Acs.AZ(0x3);this.Acs.JS(S6);this.Acs.Ks(UN);this.Acs.DC(Z0);this.Acs.DM(WY);this.
J(this.Ut,0);this.J(this.WD,0);this.J(this.AkT,0);this.J(this.Nj,0);this.J(this.
N7,0);this.J(this.ZD,0);this.J(this.Acs,0);this.Ut.Aw(A.aaL(C.Asm));this.WD.Aw(A.
aaL(C.Asm));this.AkT.Aw(A.aaL(C.AUP));this.Nj.S(A.aaL(A.fl.Af));this.Nj.A2(A.aaL(
A.fl.Ak));this.Nj.Ct(A.aaL(A.fl.Bi));this.N7.S(A.aaL(A.fl.Af));this.N7.A2(A.aaL(
A.fl.Ak));this.N7.Ct(A.aaL(A.fl.Bi));this.ZD.Lm=[B=A._GetAutoObject(A.aco.Ht),B.
Bez];this.Acs.Lm=[B=A._GetAutoObject(A.aco.Ht),B.Bek];},_Done:function(){this.__proto__=
A.Core.P;this.Ut._Done();this.WD._Done();this.AkT._Done();this.Nj._Done();this.N7.
_Done();this.ZD._Done();this.Acs._Done();A.Core.P._Done.call(this);},_ReInit:function(
){A.Core.P._ReInit.call(this);this.Ut._ReInit();this.WD._ReInit();this.AkT._ReInit(
);this.Nj._ReInit();this.N7._ReInit();this.ZD._ReInit();this.Acs._ReInit();this.
N7.R(A.aaR(A.acf.Temperature));this.Nj.S(A.aaL(A.fl.Af));this.Nj.A2(A.aaL(A.fl.Ak
));this.Nj.Ct(A.aaL(A.fl.Bi));this.N7.S(A.aaL(A.fl.Af));this.N7.A2(A.aaL(A.fl.Ak
));this.N7.Ct(A.aaL(A.fl.Bi));this.CP();},_Mark:function(D){var B;A.Core.P._Mark.
call(this,D);if((B=this.Ut)._cycle!=D)B._Mark(B._cycle=D);if((B=this.WD)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.AkT)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Nj
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.N7)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.ZD)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Acs)._cycle!=D)B._Mark(B._cycle=
D);},_className:"Demonstrator::AnimalItemAction"};C.Yk={CP:function(){this.Am();
},Ai:function(Ae){C.Aq7.Ai.call(this,Ae);if(!this.Text.String.length)this.Text.R(
A.aaR(A.acf.Filter));},A7R:function(G){var D5=(A.Core.BK.isPrototypeOf(G)?G:null
);if(!!D5)A._GetAutoObject(A.aco.AgI).Ey(D5.DQ);},A7P:function(G){A._GetAutoObject(
A.aco.AgI).Delete();},_Init:function(aArg){C.Aq7._Init.call(this,aArg);this.__proto__=
C.Yk;this.Ap.Aw(A.aaL(C.Filter));},_ReInit:function(){C.Aq7._ReInit.call(this);this.
CP();},_className:"Demonstrator::FilterView"};C.Aa$={Dk:null,Yd:null,Sa:null,Ye:
null,DT:null,Yy:null,Amz:null,Au:null,O9:null,M3:null,Aa_:null,FY:0,AvF:0,AF1:false
,Ai:function(Ae){A.Core.P.Ai.call(this,Ae);this.Sa.R(this.Au.Format(Is));if(this.
AF1){this.Sa.Z(false);this.Yy.Z(false);this.DT.Z(false);this.Ye.Z(false);this.O9.
Ar(true);this.O9.Z(true);this.M3.Cu(2);this.M3.AS9(2);this.M3.H(A.abM(this.M3.M,
this.O9.M[2]));}else{this.Sa.Z(true);this.Yy.Z(true);this.DT.Z(true);this.Ye.Z(true
);this.O9.Ar(false);this.O9.Z(false);this.M3.Cu(3);this.M3.AS9(3);this.M3.H(A.abM(
this.M3.M,this.Sa.M[2]));}},Bz_:function(G){this.BmF(!this.AF1);},Adu:function(G
){var F;if(!!this.Dk)this.Ug((F=this.Dk,F[1].call(F[0])));},Ab2:function(E){if(A.
aaZ(this.Dk,E))return;if(!!this.Dk)A.z$([this,this.Adu],this.Dk,0);this.Dk=E;if(
!!E)A.zX([this,this.Adu],E,0);if(!!E)A.pe([this,this.Adu],this);},Ug:function(E){
if(this.FY===E)return;this.FY=E;this.Au.Initialize(this.FY);this.BBc(this);this.
Am();},AiB:function(G){var B;var F;var BO=this.FY;var Ai7=this.Aa_.C7(this.AvF);
this.AJe(Ai7);if(this.Au.Year>2100)this.Au.Initialize2(2100,12,31,0,0,0);this.Ug(((
B=(this.Au.JP()|0))<0)?B+0x100000000:B);if(this.FY!==BO){if(!!this.Dk)(F=this.Dk
,F[2].call(F[0],this.FY));A.abo(this.Dk,0);}},Ain:function(G){var B;var F;var BO=
this.FY;var Ai7=this.Aa_.C7(this.AvF);this.AK2(Ai7);if(this.Au.Year<2000)this.Au.
Initialize2(2000,1,1,0,0,0);this.Ug(((B=(this.Au.JP()|0))<0)?B+0x100000000:B);if(
this.FY!==BO){if(!!this.Dk)(F=this.Dk,F[2].call(F[0],this.FY));A.abo(this.Dk,0);
}},Bmb:function(E){if(this.AvF===E)return;this.AvF=E;},BmF:function(E){if(this.AF1===
E)return;this.AF1=E;this.Am();},BAI:function(G){var B;var F;var BO=this.FY;this.
Au.Lo(this.O9.AEq());this.Au.Uk(this.O9.AEv());this.Au.Year=this.O9.Aru();this.Ug(((
B=(this.Au.JP()|0))<0)?B+0x100000000:B);if(this.FY!==BO){if(!!this.Dk)(F=this.Dk
,F[2].call(F[0],this.FY));A.abo(this.Dk,0);}},BBc:function(G){this.O9.Lo(this.Au.
GK);this.O9.Uk(this.Au.Hi);this.O9.AkA(this.Au.Year);},AJe:function(AyV){var B;switch(
AyV){case 0:if(this.Au.GK<this.Au.Zi())this.Au.Lo(this.Au.GK+1);else{this.Au.Lo(
1);this.AJe(2);}break;case 1:if((this.Au.GK+7)<=this.Au.Zi())this.Au.Lo(this.Au.
GK+7);else{this.Au.Lo((7-this.Au.Zi())+this.Au.GK);this.AJe(2);}break;case 2:if(
this.Au.Hi<12)this.Au.Uk(this.Au.Hi+1);else{this.Au.Uk(1);this.AJe(3);}break;case
3:this.Au.Year++;break;default:throw new Error(UO+AyV.toFixed());}},AK2:function(
AyV){var B;switch(AyV){case 0:if(this.Au.GK>1)this.Au.Lo(this.Au.GK-1);else{this.
AK2(2);this.Au.Lo(this.Au.Zi());}break;case 1:if((this.Au.GK-7)>0)this.Au.Lo(this.
Au.GK-7);else{this.AK2(2);this.Au.Lo(this.Au.Zi()-(7-this.Au.GK));}break;case 2:
if(this.Au.Hi>1)this.Au.Uk(this.Au.Hi-1);else{this.Au.Uk(12);this.AK2(3);}break;
case 3:this.Au.Year--;break;default:throw new Error(UO+AyV.toFixed());}},Bkl:function(
){return this.AvF;},_Init:function(aArg){A.Core.P._Init.call(this,aArg);A.acg.Text.
_Init.call(this.Yd={I:this},0);A.acg.Text._Init.call(this.Sa={I:this},0);C.Avt._Init.
call(this.Ye={I:this},0);A.acq.DT._Init.call(this.DT={I:this},0);C.Avt._Init.call(
this.Yy={I:this},0);A.acg.Ap._Init.call(this.Amz={I:this},0);A.Core.Bs._Init.call(
this.Au={I:this},0);C.ANy._Init.call(this.O9={I:this},0);C.Avt._Init.call(this.M3={
I:this},0);C.Aa_._Init.call(this.Aa_={I:this},0);this.__proto__=C.Aa$;this.H(Z1);
this.Yd.H(WZ);this.Yd.A5(0x11);this.Yd.R(A.aaR(A.acf.Date));this.Yd.L(0xFF000000
);this.Sa.H(Z2);this.Sa.A5(0x11);this.Sa.R(W0);this.Sa.L(0xFF000000);this.Ye.H(Z3
);this.Ye.A9D(200);this.DT.H(Z4);this.DT.ArO(120);this.DT.GN=30;this.DT.ASL(A.jb.
CS);this.DT.A9g(A.jb.CS);this.DT.A9k(A.jb.CS);this.DT.ASM(A.jb.Text);this.DT.A9l(
A.jb.Text);this.DT.A9h(A.jb.AV);this.DT.A9m(A.jb.Bm);this.DT.A9j(A.jb.AV);this.DT.
A9i(A.jb.Text);this.Yy.H(UP);this.Yy.A9D(200);this.Amz.H(W1);this.O9.H(P7);this.
M3.H(Z5);this.M3.Cu(3);this.M3.AS9(3);this.M3.L(A.jb.Text);this.J(this.Yd,0);this.
J(this.Sa,0);this.J(this.Ye,0);this.J(this.DT,0);this.J(this.Yy,0);this.J(this.Amz
,0);this.J(this.O9,0);this.J(this.M3,0);this.Yd.S(A.aaL(A.fl.Ak));this.Sa.S(A.aaL(
A.fl.EK));this.Ye.AR=[this,this.Ain];this.Ye.DB(A.aaL(C.AMU));this.Ye.AS_(A.aaL(
C.AMV));this.DT.At([this,this.Bkl,this.Bmb]);this.DT.A9s(this.Aa_);this.DT.ArG(A.
aaL(A.fl.Ak));this.DT.AwA(A.aaL(A.fl.Ak));this.Yy.AR=[this,this.AiB];this.Yy.DB(
A.aaL(C.AMW));this.Yy.AS_(A.aaL(C.AMX));this.Amz.Aw(A.aaL(C.APY));this.O9.Di=[this
,this.BAI];this.M3.AR=[this,this.Bz_];this.M3.DB(A.aaL(A.ach.Ajn));this.M3.AS_(A.
aaL(A.ach.Ajn));},_Done:function(){this.__proto__=A.Core.P;this.Yd._Done();this.
Sa._Done();this.Ye._Done();this.DT._Done();this.Yy._Done();this.Amz._Done();this.
Au._Done();this.O9._Done();this.M3._Done();this.Aa_._Done();A.Core.P._Done.call(
this);},_ReInit:function(){A.Core.P._ReInit.call(this);this.Yd._ReInit();this.Sa.
_ReInit();this.Ye._ReInit();this.DT._ReInit();this.Yy._ReInit();this.Amz._ReInit(
);this.Au._ReInit();this.O9._ReInit();this.M3._ReInit();this.Aa_._ReInit();this.
Yd.R(A.aaR(A.acf.Date));this.Yd.S(A.aaL(A.fl.Ak));this.Sa.S(A.aaL(A.fl.EK));this.
DT.ArG(A.aaL(A.fl.Ak));this.DT.AwA(A.aaL(A.fl.Ak));},_Mark:function(D){var B;A.Core.
P._Mark.call(this,D);if((B=this.Dk)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((
B=this.Yd)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Sa)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Ye)._cycle!=D)B._Mark(B._cycle=D);if((B=this.DT)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Yy)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Amz)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.Au)._cycle!=D)B._Mark(B._cycle=D);if((B=this.O9
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.M3)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Aa_)._cycle!=D)B._Mark(B._cycle=D);},_className:"Demonstrator::DateSelector"
};C.Avt={C8:null,Axf:null,ANO:null,AR:null,Bo:null,Dm:null,CR:null,Hv:null,Yr:null
,APB:0,TM:0,ATO:0,AQ:0xFFFFFFFF,A1V:false,LF:false,KD:false,Qp:false,Ai:function(
Ae){var B;A.acn.Ahu.Ai.call(this,Ae);var Hd=((Ae&0x10)===0x10);var Fu=((Ae&0x20)===
0x20);var GE=this.CR.Down&&this.CR.YB;if(!Hd)this.Hv.Aw(this.ANO);else if(GE){this.
Hv.Aw(this.Axf);this.Hv.Cu(this.ATO);}else{this.Hv.Aw(this.C8);this.Hv.Cu(this.TM
);}this.Hv.L(this.AQ);this.LF=Hd;this.KD=Fu;this.Qp=GE;},Qo:function(G){this.Am(
);A.pe(this.AR,this);},AiL:function(G){if(this.CR.Down)return;if(this.Dm.Acc)return;
this.Am();if(this.Bo.Bw){A.pe(this.AR,this);this.Bo.Ar(false);}this.Bo.Ar(true);
},Beh:function(G){this.Am();},AAy:function(G){if(!this.CR.YB)return;if(this.CR.NF
)return;if((this.Yr.VB<=0)||(this.CR.Jr<this.Yr.VB)){if(this.CR.Jr>=this.Bo.VB)A.
pe(this.AR,this);else this.Bo.Ar(true);}this.Yr.Ar(false);},AAx:function(G){this.
Yr.Ar(true);if(this.Bo.Bw){A.pe(this.AR,this);this.Bo.Ar(false);}},DB:function(E
){if(this.C8===E)return;this.C8=E;this.Am();},AS_:function(E){if(this.Axf===E)return;
this.Axf=E;this.Am();},A2U:function(G){if(!this.CR.YB)return;if(this.CR.NF)return;
if((this.APB>=0)&&this.A1V){this.A1V=false;this.Yr.Ar(true);A.pe(this.AR,this);}
},A9D:function(E){if(this.APB===E)return;this.APB=E;this.Yr.Ww(E);},BzD:function(
G){this.A1V=true;},Cu:function(E){if(this.TM===E)return;this.TM=E;this.Am();},AS9:
function(E){if(this.ATO===E)return;this.ATO=E;this.Am();},L:function(E){if(this.
AQ===E)return;this.AQ=E;this.Am();},_Init:function(aArg){A.acn.Ahu._Init.call(this
,aArg);A.Core.Timer._Init.call(this.Bo={I:this},0);A.Core.BK._Init.call(this.Dm={
I:this},0);A.Core.Bn._Init.call(this.CR={I:this},0);A.acg.Ap._Init.call(this.Hv={
I:this},0);A.Core.Timer._Init.call(this.Yr={I:this},0);this.__proto__=C.Avt;this.
H(O2);this.Bo.PP(0);this.Bo.Ww(50);this.Dm.Filter=149;this.CR.AZ(0x3F);this.CR.JS(
Rj);this.CR.Ks(W2);this.CR.DC(W3);this.CR.DM(J0);this.CR.Afb=0xF;this.CR.AFj(100
);this.Hv.AZ(0x3F);this.Hv.H(O2);this.Hv.A5(0x12);this.Yr.PP(0);this.J(this.CR,0
);this.J(this.Hv,0);this.Bo.Mz=[this,this.Qo];this.Dm.BL=[this,this.AiL];this.CR.
AEB=[this,this.Beh];this.CR.AvZ=[this,this.Beh];this.CR.D1=[this,this.A2U];this.
CR.Lm=[this,this.AAy];this.CR.BL=[this,this.AAx];this.Hv.Aw(A.aaL(A.aci.TH));this.
C8=A.aaL(A.aci.TH);this.Axf=A.aaL(A.aci.TH);this.ANO=A.aaL(A.aci.TH);this.Yr.Mz=[
this,this.BzD];},_Done:function(){this.__proto__=A.acn.Ahu;this.Bo._Done();this.
Dm._Done();this.CR._Done();this.Hv._Done();this.Yr._Done();A.acn.Ahu._Done.call(
this);},_ReInit:function(){A.acn.Ahu._ReInit.call(this);this.Bo._ReInit();this.Dm.
_ReInit();this.CR._ReInit();this.Hv._ReInit();this.Yr._ReInit();},_Mark:function(
D){var B;A.acn.Ahu._Mark.call(this,D);if((B=this.C8)&&(B._cycle!=D))B._Mark(B._cycle=
D);if((B=this.Axf)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.ANO)&&(B._cycle
!=D))B._Mark(B._cycle=D);if((B=this.AR)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D
);if((B=this.Bo)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Dm)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.CR)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Hv)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.Yr)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Demonstrator::IconButton"};C.AMy={Pv:null,V:null,Aem:null,_Init:function(aArg){
C.FB._Init.call(this,aArg);A.acg.AK._Init.call(this.Pv={I:this},0);A.acg.Text._Init.
call(this.V={I:this},0);C.Aem._Init.call(this.Aem={I:this},0);this.__proto__=C.AMy;
this.H(W4);this.Pv.AZ(0x1D);this.Pv.H(Cc);this.Pv.L(0xFFE6E6E6);this.V.AZ(0x1D);
this.V.H(W5);this.V.A5(0x11);this.V.R(A.aaR(A.acf.A4H));this.V.L(0xFF000000);this.
Aem.H(Z6);this.J(this.Pv,0);this.J(this.V,0);this.J(this.Aem,0);this.V.S(A.aaL(A.
fl.Af));},_Done:function(){this.__proto__=C.FB;this.Pv._Done();this.V._Done();this.
Aem._Done();C.FB._Done.call(this);},_ReInit:function(){C.FB._ReInit.call(this);this.
Pv._ReInit();this.V._ReInit();this.Aem._ReInit();this.V.R(A.aaR(A.acf.A4H));this.
V.S(A.aaL(A.fl.Af));},_Mark:function(D){var B;C.FB._Mark.call(this,D);if((B=this.
Pv)._cycle!=D)B._Mark(B._cycle=D);if((B=this.V)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Aem)._cycle!=D)B._Mark(B._cycle=D);},_className:"Demonstrator::AnimalsHeader"
};C.Auq={Pv:null,V:null,AeN:null,AeL:null,Bn:null,DK:W6,Ahh:false,Ai:function(Ae
){C.FB.Ai.call(this,Ae);if(this.Ahh){this.AeL.Z(true);this.AeN.Z(false);}else{this.
AeL.Z(false);this.AeN.Z(true);}},BAu:function(G){if(this.Ahh)A.pe(this.Akm,this);
else A.pe(this.Akn,this);this.ArP(!this.Ahh);},T:function(E){if(this.DK===E)return;
this.DK=E;this.V.R(E);},ArP:function(E){if(this.Ahh===E)return;this.Ahh=E;this.Am(
);},_Init:function(aArg){C.FB._Init.call(this,aArg);A.acg.AK._Init.call(this.Pv={
I:this},0);A.acg.Text._Init.call(this.V={I:this},0);A.acg.Ap._Init.call(this.AeN={
I:this},0);A.acg.Ap._Init.call(this.AeL={I:this},0);A.Core.Bn._Init.call(this.Bn={
I:this},0);this.__proto__=C.Auq;this.H(Cc);this.Pv.AZ(0x1D);this.Pv.H(Cc);this.Pv.
L(0xFFE6E6E6);this.V.AZ(0x1D);this.V.H(W7);this.V.A5(0x11);this.V.R(W6);this.V.L(
0xFF000000);this.AeN.H(S7);this.AeN.Z(false);this.AeL.AZ(0x3A);this.AeL.H(S7);this.
Bn.JS(J0);this.Bn.Ks(UQ);this.Bn.DC(UR);this.Bn.DM(MG);this.J(this.Pv,0);this.J(
this.V,0);this.J(this.AeN,0);this.J(this.AeL,0);this.J(this.Bn,0);this.V.S(A.aaL(
A.fl.Af));this.AeN.Aw(A.aaL(C.AMB));this.AeL.Aw(A.aaL(C.Ajm));this.Bn.Lm=[this,this.
BAu];},_Done:function(){this.__proto__=C.FB;this.Pv._Done();this.V._Done();this.
AeN._Done();this.AeL._Done();this.Bn._Done();C.FB._Done.call(this);},_ReInit:function(
){C.FB._ReInit.call(this);this.Pv._ReInit();this.V._ReInit();this.AeN._ReInit();
this.AeL._ReInit();this.Bn._ReInit();this.V.S(A.aaL(A.fl.Af));},_Mark:function(D
){var B;C.FB._Mark.call(this,D);if((B=this.Pv)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.V)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AeN)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.AeL)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Bn)._cycle!=D)B._Mark(
B._cycle=D);},_className:"Demonstrator::AccordionHeader"};C.Ba={AX:null,AR:null,
CR:null,Hq:-1,Zm:function(E){if(this.AX===E)return;this.AX=E;},Ce:function(Ad){A.
ab5("%s",AcH);},Zq:function(E){if(A.aa0(this.AR,E))return;this.AR=E;},AAy:function(
G){if(!this.CR.YB)return;if(this.CR.NF)return;A.pe(this.AR,this);},_Init:function(
aArg){A.Core.P._Init.call(this,aArg);A.Core.Bn._Init.call(this.CR={I:this},0);this.
__proto__=C.Ba;this.H(Cc);this.CR.AZ(0x3F);this.CR.JS(MG);this.CR.Ks(UR);this.CR.
DC(UQ);this.CR.DM(J0);this.CR.Afb=0xF;this.CR.AFj(100);this.J(this.CR,0);this.CR.
Lm=[this,this.AAy];},_Done:function(){this.__proto__=A.Core.P;this.CR._Done();A.
Core.P._Done.call(this);},_ReInit:function(){A.Core.P._ReInit.call(this);this.CR.
_ReInit();},_Mark:function(D){var B;A.Core.P._Mark.call(this,D);if((B=this.AX)&&(
B._cycle!=D))B._Mark(B._cycle=D);if((B=this.AR)&&((B=B[0])._cycle!=D))B._Mark(B.
_cycle=D);if((B=this.CR)._cycle!=D)B._Mark(B._cycle=D);},_className:"Demonstrator::ListItem"
};C.FB={AR4:null,Akn:null,Akm:null,BmC:function(E){if(A.aa0(this.AR4,E))return;this.
AR4=E;},A9N:function(E){if(A.aa0(this.Akn,E))return;this.Akn=E;},A9M:function(E){
if(A.aa0(this.Akm,E))return;this.Akm=E;},_Init:function(aArg){A.Core.P._Init.call(
this,aArg);this.__proto__=C.FB;this.H(Cc);},_Mark:function(D){var B;A.Core.P._Mark.
call(this,D);if((B=this.AR4)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.
Akn)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.Akm)&&((B=B[0])._cycle
!=D))B._Mark(B._cycle=D);},_className:"Demonstrator::ListHeader"};C.ANy={Di:null
,Aa1:null,WQ:null,WO:null,WN:null,Na:null,M$:null,KP:null,LF:false,KD:false,BBm:
false,Ai:function(Ae){var B;A.acn.Ahs.Ai.call(this,Ae);var Hd=((Ae&0x10)===0x10);
var Fu=((Ae&0x20)===0x20);var Bdh=(this.WN.ZI||this.WO.ZI)||this.WQ.ZI;if(Bdh)this.
Aa1.L(A.jb.Text);else this.Aa1.L(A.jb.Bc);this.LF=Hd;this.KD=Fu;this.BBm=Bdh;},AAt:
function(G){this.Am();if((!this.WN.ZI&&!this.WO.ZI)&&!this.WQ.ZI){var U9=this.AJ8(
this.AEv(),this.Aru());var Ac$=this.AEq();this.KP.Jw(U9);if(Ac$>U9)this.Lo(U9);A.
pe(this.Di,this);}},A3d:function(G){this.Am();},Bk1:function(G){var B;var Gf=this.
Na.G4;var Cz=(A.acg.Text.isPrototypeOf(B=this.Na.Ch)?B:null);if(!Cz)return;Cz.R(
A.abl(Gf+1900,4,10));Cz.S(A.aaL(A.fl.Af));Cz.L(A.jb.Text);Cz.A5(0x12);Cz.H(A.abK(
Cz.M,[(B=this.Na.M)[2]-B[0],this.Na.GN]));},Bk0:function(G){var B;var Gf=this.M$.
G4;var Cz=(A.acg.Text.isPrototypeOf(B=this.M$.Ch)?B:null);if(!Cz)return;Cz.R(A.abl(
Gf+1,2,10)+S8);Cz.S(A.aaL(A.fl.Af));Cz.L(A.jb.Text);Cz.A5(0x12);Cz.H(A.abK(Cz.M,[(
B=this.M$.M)[2]-B[0],this.M$.GN]));},BkY:function(G){var B;var Gf=this.KP.G4;var
Cz=(A.acg.Text.isPrototypeOf(B=this.KP.Ch)?B:null);if(!Cz)return;Cz.R(A.abl(Gf+1
,2,10)+S8);Cz.S(A.aaL(A.fl.Af));Cz.L(A.jb.Text);Cz.A5(0x12);Cz.H(A.abK(Cz.M,[(B=
this.KP.M)[2]-B[0],this.KP.GN]));},Aru:function(){return 1900+((((-this.Na.Br/this.
Na.GN)|0)+2)%200);},AkA:function(E){if(E<1900)E=1900;if(E>2100)E=2100;this.Na.Gb(((
E-1900)-2)*-this.Na.GN);var U9=this.AJ8(this.AEv(),E);this.KP.Jw(U9);if(this.AEq(
)>U9)this.Lo(U9);},AEv:function(){return 1+((((-this.M$.Br/this.M$.GN)|0)+2)%12);
},Uk:function(E){if(E<1)E=1;if(E>12)E=12;this.M$.Gb(((E-1)-2)*-this.M$.GN);var U9=
this.AJ8(E,this.Aru());this.KP.Jw(U9);if(this.AEq()>U9)this.Lo(U9);},AEq:function(
){return 1+((((-this.KP.Br/this.KP.GN)|0)+2)%this.KP.AY);},Lo:function(E){var U9=
this.AJ8(this.AEv(),this.Aru());if(E<1)E=1;if(E>U9)E=U9;this.KP.Gb(((E-2)-1)*-this.
KP.GN);},AJ8:function(AfG,Ac1){if(AfG===2){if(!(Ac1%4)&&(!!(Ac1%100)||!(Ac1%400)
))return 29;else return 28;}else if((((AfG===4)||(AfG===6))||(AfG===9))||(AfG===
11))return 30;else return 31;},_Init:function(aArg){A.acn.Ahs._Init.call(this,aArg
);A.acg.BU._Init.call(this.Aa1={I:this},0);A.Core.H9._Init.call(this.WQ={I:this}
,0);A.Core.H9._Init.call(this.WO={I:this},0);A.Core.H9._Init.call(this.WN={I:this
},0);A.Core.CM._Init.call(this.Na={I:this},0);A.Core.CM._Init.call(this.M$={I:this
},0);A.Core.CM._Init.call(this.KP={I:this},0);this.__proto__=C.ANy;this.H(Z7);this.
Aa1.H(Afw);this.Aa1.Ng(3);this.Aa1.L(0xFFE1E1E1);this.Aa1.Z(true);this.WQ.H(Z8);
this.WQ.ATk(W8);this.WQ.ASS(0.2);this.WO.H(Z9);this.WO.ATk(W8);this.WO.ASS(0.2);
this.WN.H(Z_);this.WN.ATk(W8);this.WN.ASS(0.2);this.Na.H(Z8);this.Na.ASQ(true);this.
Na.Gb(60);this.Na.Ae3(30);this.Na.Jw(200);this.M$.H(Z9);this.M$.ASQ(true);this.M$.
Gb(60);this.M$.Ae3(30);this.M$.Jw(12);this.KP.H(Z_);this.KP.ASQ(true);this.KP.Gb(
60);this.KP.Ae3(30);this.KP.Jw(31);this.J(this.Aa1,0);this.J(this.WQ,0);this.J(this.
WO,0);this.J(this.WN,0);this.J(this.Na,0);this.J(this.M$,0);this.J(this.KP,0);this.
WQ.Zh=[this,this.AAt];this.WQ.SG=[this,this.A3d];this.WO.Zh=[this,this.AAt];this.
WO.SG=[this,this.A3d];this.WN.Zh=[this,this.AAt];this.WN.SG=[this,this.A3d];this.
Na.Hk=[this,this.Bk1];this.Na.AwW(this.WQ);this.M$.Hk=[this,this.Bk0];this.M$.AwW(
this.WO);this.KP.Hk=[this,this.BkY];this.KP.AwW(this.WN);},_Done:function(){this.
__proto__=A.acn.Ahs;this.Aa1._Done();this.WQ._Done();this.WO._Done();this.WN._Done(
);this.Na._Done();this.M$._Done();this.KP._Done();A.acn.Ahs._Done.call(this);},_ReInit:
function(){A.acn.Ahs._ReInit.call(this);this.Aa1._ReInit();this.WQ._ReInit();this.
WO._ReInit();this.WN._ReInit();this.Na._ReInit();this.M$._ReInit();this.KP._ReInit(
);},_Mark:function(D){var B;A.acn.Ahs._Mark.call(this,D);if((B=this.Di)&&((B=B[0
])._cycle!=D))B._Mark(B._cycle=D);if((B=this.Aa1)._cycle!=D)B._Mark(B._cycle=D);
if((B=this.WQ)._cycle!=D)B._Mark(B._cycle=D);if((B=this.WO)._cycle!=D)B._Mark(B.
_cycle=D);if((B=this.WN)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Na)._cycle!=D)
B._Mark(B._cycle=D);if((B=this.M$)._cycle!=D)B._Mark(B._cycle=D);if((B=this.KP).
_cycle!=D)B._Mark(B._cycle=D);},_className:"Demonstrator::DatePicker"};C.AHc={_class:
function(){return A.aci.Al;},0:{FileName:"./res_index/DemonstratorWhiteTile.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[40,40],FrameDelay:0,_this:
null}};C.AVC={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/DemonstratorWhiteTileSmall.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[40,40],FrameDelay:0,_this:
null}};C.AhE={_Init:function(aArg){A.Core.P._Init.call(this,aArg);this.__proto__=
C.AhE;this.H(E6);},_className:"Demonstrator::SelectionAreaContent"};C.AMr={Y:null
,Vr:null,Tw:null,BAW:function(G){var B;this.Tw.H(A.abI(this.Tw.M,((B=this.M)[3]-
B[1])-((B=this.Vr.M)[3]-B[1])));},_Init:function(aArg){C.AhE._Init.call(this,aArg
);A.Core.Y._Init.call(this.Y={I:this},0);C.ALV._Init.call(this.Vr={I:this},0);C.
AVl._Init.call(this.Tw={I:this},0);this.__proto__=C.AMr;this.Y.AZ(0x3F);this.Y.H(
E6);this.Y.JQ(1);this.Vr.H(Afx);this.Vr.Aj(true);this.Vr.ArP(true);this.Tw.AZ(0x3
);this.Tw.H(KX);this.Tw.Aj(true);this.Tw.NZ(C.AMk);this.Tw.Bmw(C.AMy);this.J(this.
Y,0);this.J(this.Vr,0);this.J(this.Tw,0);this.Bb(this.Tw);this.Y.El=[this,this.BAW
];this.Tw.Zm(A._GetAutoObject(A.aco.Aqa));},_Done:function(){this.__proto__=C.AhE;
this.Y._Done();this.Vr._Done();this.Tw._Done();C.AhE._Done.call(this);},_ReInit:
function(){C.AhE._ReInit.call(this);this.Y._ReInit();this.Vr._ReInit();this.Tw._ReInit(
);},_Mark:function(D){var B;C.AhE._Mark.call(this,D);if((B=this.Y)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Vr)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Tw)._cycle!=
D)B._Mark(B._cycle=D);},_className:"Demonstrator::AnimalSelectionActions"};C.Vr={
_Init:function(aArg){C.Auq._Init.call(this,aArg);this.__proto__=C.Vr;this.T(A.aaR(
A.acf.A5y));},_ReInit:function(){C.Auq._ReInit.call(this);this.T(A.aaR(A.acf.A5y
));},_className:"Demonstrator::ActionsHeader"};C.ALV={Background:null,XJ:null,Y:
null,Acr:null,Acg:null,ZC:null,Acq:null,Aj7:null,Aj8:null,Aj9:null,Aj_:null,Aj$:
null,Ahh:false,Init:function(aArg){var B;A.zX([this,this.BeA],[B=A._GetAutoObject(
A.aco.Ht),B.AEx,B.AFw],0);A.pe([this,this.BeA],this);},Akn:function(G){this.ArP(
true);},Akm:function(G){this.ArP(false);},ArP:function(E){if(this.Ahh===E)return;
this.Ahh=E;this.XJ.ArP(E);A.pe([this,this.BeL],this);},BeA:function(G){var BA5=A.
_GetAutoObject(A.aco.Ht).Ahz===2;A._GetAutoObject(A.Device.Helper).JX(this.ZC,BA5
);},BeL:function(G){var B;if(this.Ahh)this.H(A.abI(this.M,(B=this.XJ.M)[3]-B[1])
);else this.H(A.abI(this.M,((B=this.XJ.M)[3]-B[1])+((B=this.Y.Db(0x401))[3]-B[1]
)));},_Init:function(aArg){A.Core.P._Init.call(this,aArg);A.acg.AK._Init.call(this.
Background={I:this},0);C.Vr._Init.call(this.XJ={I:this},0);A.Core.Y._Init.call(this.
Y={I:this},0);C.Acr._Init.call(this.Acr={I:this},0);C.Acg._Init.call(this.Acg={I:
this},0);C.ZC._Init.call(this.ZC={I:this},0);C.Acq._Init.call(this.Acq={I:this},
0);A.acg.C4._Init.call(this.Aj7={I:this},0);A.acg.C4._Init.call(this.Aj8={I:this
},0);A.acg.C4._Init.call(this.Aj9={I:this},0);A.acg.C4._Init.call(this.Aj_={I:this
},0);A.acg.C4._Init.call(this.Aj$={I:this},0);this.__proto__=C.ALV;this.H(AcI);this.
Background.AZ(0x3F);this.Background.H(AcI);this.XJ.AZ(0x1D);this.XJ.H(Cc);this.Y.
H(Lu);this.Y.JQ(1);this.Acr.H(AhS);this.Acr.Aj(true);this.Acg.H(An7);this.Acg.Aj(
true);this.ZC.H(N$);this.ZC.Aj(true);this.Acq.H(W9);this.Acq.Aj(true);this.Aj7.DC(
UR);this.Aj7.DM(MG);this.Aj7.L(A.jb.Bc);this.Aj8.DC(An8);this.Aj8.DM(US);this.Aj8.
L(A.jb.Bc);this.Aj9.DC(AhT);this.Aj9.DM(AcJ);this.Aj9.L(A.jb.Bc);this.Aj_.DC(UT);
this.Aj_.DM(An9);this.Aj_.L(A.jb.Bc);this.Aj$.DC(An_);this.Aj$.DM(An$);this.Aj$.
L(A.jb.Bc);this.J(this.Background,0);this.J(this.XJ,0);this.J(this.Y,0);this.J(this.
Acr,0);this.J(this.Acg,0);this.J(this.ZC,0);this.J(this.Acq,0);this.J(this.Aj7,0
);this.J(this.Aj8,0);this.J(this.Aj9,0);this.J(this.Aj_,0);this.J(this.Aj$,0);this.
XJ.A9N([this,this.Akn]);this.XJ.A9M([this,this.Akm]);this.Y.El=[this,this.BeL];this.
Init(aArg);},_Done:function(){this.__proto__=A.Core.P;this.Background._Done();this.
XJ._Done();this.Y._Done();this.Acr._Done();this.Acg._Done();this.ZC._Done();this.
Acq._Done();this.Aj7._Done();this.Aj8._Done();this.Aj9._Done();this.Aj_._Done();
this.Aj$._Done();A.Core.P._Done.call(this);},_ReInit:function(){A.Core.P._ReInit.
call(this);this.Background._ReInit();this.XJ._ReInit();this.Y._ReInit();this.Acr.
_ReInit();this.Acg._ReInit();this.ZC._ReInit();this.Acq._ReInit();this.Aj7._ReInit(
);this.Aj8._ReInit();this.Aj9._ReInit();this.Aj_._ReInit();this.Aj$._ReInit();},
_Mark:function(D){var B;A.Core.P._Mark.call(this,D);if((B=this.Background)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.XJ)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
Y)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Acr)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Acg)._cycle!=D)B._Mark(B._cycle=D);if((B=this.ZC)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Acq)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Aj7)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Aj8)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Aj9)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.Aj_)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
Aj$)._cycle!=D)B._Mark(B._cycle=D);},_className:"Demonstrator::ActionsMenu"};C.Jo={
Yv:null,Ag5:null,Bn:null,C4:null,Af6:function(G){},A0b:function(s){this.Af6(s);}
,_Init:function(aArg){A.Core.P._Init.call(this,aArg);A.acg.Ap._Init.call(this.Yv={
I:this},0);A.acg.Ap._Init.call(this.Ag5={I:this},0);A.Core.Bn._Init.call(this.Bn={
I:this},0);A.acg.C4._Init.call(this.C4={I:this},0);this.__proto__=C.Jo;this.H(Cc
);this.Yv.H(Aoa);this.Yv.L(A.jb.Text);this.Ag5.H(Afy);this.Ag5.L(A.jb.Text);this.
Ag5.Cu(0);this.Bn.JS(J0);this.Bn.Ks(N_);this.Bn.DC(P6);this.Bn.DM(MG);this.C4.DC(
P6);this.C4.DM(N_);this.C4.L(A.jb.Bc);this.J(this.Yv,0);this.J(this.Ag5,0);this.
J(this.Bn,0);this.J(this.C4,0);this.Yv.Aw(A.aaL(A.aci.TH));this.Ag5.Aw(A.aaL(A.aci.
ATE));this.Bn.BL=[this,this.A0b];},_Done:function(){this.__proto__=A.Core.P;this.
Yv._Done();this.Ag5._Done();this.Bn._Done();this.C4._Done();A.Core.P._Done.call(
this);},_ReInit:function(){A.Core.P._ReInit.call(this);this.Yv._ReInit();this.Ag5.
_ReInit();this.Bn._ReInit();this.C4._ReInit();},_Mark:function(D){var B;A.Core.P.
_Mark.call(this,D);if((B=this.Yv)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ag5).
_cycle!=D)B._Mark(B._cycle=D);if((B=this.Bn)._cycle!=D)B._Mark(B._cycle=D);if((B=
this.C4)._cycle!=D)B._Mark(B._cycle=D);},_className:"Demonstrator::ActionsItem"};
C.Acg={AGn:null,DT:null,Yu:null,BU:null,M7:null,AhA:null,ANs:0,Init:function(aArg
){var B;A.zX([this,this.BeK],[B=A._GetAutoObject(A.aco.Ht),B.AEx,B.AFw],0);A.pe([
this,this.BeK],this);},Af6:function(G){var Iy=A.ab0(this.Yu.String,0,10);var Ih=
false;switch(A._GetAutoObject(A.aco.Ht).Ahz){case 2:Ih=A._GetAutoObject(A.aco.Ht
).BBj(Iy);break;case 0:case 1:Ih=A._GetAutoObject(A.aco.Ht).BfJ(Iy);break;default:
A.ab5("%s%e",AsN,A._GetAutoObject(A.aco.Ht).Ahz);}if(Ih){Iy=Iy+1;this.Yu.R(Iy.toFixed(
));}},BeK:function(G){var AJb=null;var AKm=0;switch(A._GetAutoObject(A.aco.Ht).Ahz
){case 2:{AJb=A.aaL(A.ach.Avq);AKm=276;}break;case 0:{AJb=A.aaL(A.ach.AjR);AKm=900;
}break;case 1:{AJb=A.aaL(C.AxI);AKm=276;}break;default:A.ab5("%s%e",AsN,A._GetAutoObject(
A.aco.Ht).Ahz);}this.Yu.R(((AKm*1000000000000)+(A.abY(this.Yu.String,0,10)%1000000000000
)).toFixed());this.Yv.Aw(AJb);},Blo:function(E){var F;if(this.ANs===E)return;this.
ANs=E;if(!!this.AGn)(F=this.AGn,F[2].call(F[0],E));},Bj9:function(){return this.
ANs;},_Init:function(aArg){C.Jo._Init.call(this,aArg);A.acq.DT._Init.call(this.DT={
I:this},0);C.Aki._Init.call(this.Yu={I:this},0);A.acg.BU._Init.call(this.BU={I:this
},0);A.acg.Ap._Init.call(this.M7={I:this},0);C.AhA._Init.call(this.AhA={I:this},
0);this.__proto__=C.Acg;var B;this.DT.H(AxV);this.DT.ArO(120);this.DT.GN=30;this.
DT.ASL(A.jb.Re);this.DT.A9g(A.jb.CS);this.DT.A9k(A.jb.CS);this.DT.ASM(A.jb.Re);this.
DT.A9l(A.jb.Text);this.DT.A9h(A.jb.AV);this.DT.A9m(A.jb.Bm);this.DT.A9j(A.jb.AV);
this.DT.A9i(A.jb.Re);this.Bn.JS(AxW);this.Bn.DM(O3);this.Yu.H(Rk);this.Yu.R(AxX);
this.Yu.L(A.jb.Text);this.BU.H(UU);this.BU.Ng(2);this.BU.L(A.jb.Text);this.M7.H(
AsO);this.M7.L(A.jb.Text);this.M7.A5(0xC);this.M7.Cu(3);this.J(this.DT,-2);this.
J(this.Yu,-1);this.J(this.BU,0);this.J(this.M7,0);this.DT.At([this,this.Bj9,this.
Blo]);this.DT.A9s(this.AhA);this.DT.ArG(A.aaL(A.fl.Bi));this.DT.AwA(A.aaL(A.fl.Bi
));this.M7.Aw(A.aaL(A.ach.Ajn));this.AGn=[B=A._GetAutoObject(A.aco.Ht),B.AEx,B.AFw
];this.Init(aArg);},_Done:function(){this.__proto__=C.Jo;this.DT._Done();this.Yu.
_Done();this.BU._Done();this.M7._Done();this.AhA._Done();C.Jo._Done.call(this);}
,_ReInit:function(){C.Jo._ReInit.call(this);this.DT._ReInit();this.Yu._ReInit();
this.BU._ReInit();this.M7._ReInit();this.AhA._ReInit();this.DT.ArG(A.aaL(A.fl.Bi
));this.DT.AwA(A.aaL(A.fl.Bi));},_Mark:function(D){var B;C.Jo._Mark.call(this,D);
if((B=this.AGn)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.DT)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.Yu)._cycle!=D)B._Mark(B._cycle=D);if((B=this.BU
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.M7)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.AhA)._cycle!=D)B._Mark(B._cycle=D);},_className:"Demonstrator::ScanIdAction"
};C.Acr={UE:null,OS:null,A3Z:0,Init:function(aArg){var B;A.zX([this,this.BAe],[B=
A._GetAutoObject(A.aco.Ht),B.ASs,B.ATd],0);A.zX([this,this.AAB],[B=A._GetAutoObject(
A.Device.Device),B.Arr,B.Ata],0);A.pe([this,this.AAB],this);},Ai:function(Ae){C.
Jo.Ai.call(this,Ae);this.OS.Z(!A._GetAutoObject(A.aco.Ht).Axg);},Af6:function(G){
var B;A._GetAutoObject(A.aco.Ht).Bek(this);},AAB:function(G){if(A._GetAutoObject(
A.Device.Device).TemperatureUnit!==this.A3Z){switch(A._GetAutoObject(A.Device.Device
).TemperatureUnit){case 0:this.OS.R(A.abk(A._GetAutoObject(A.aco.Ht).WK/100,0,1)
);break;case 1:{var Auf=A._GetAutoObject(A.Device.Converter).AUT(A._GetAutoObject(
A.aco.Ht).WK/100,0,A._GetAutoObject(A.Device.Device).TemperatureUnit);this.OS.R(
A.abk(Auf,0,1));}break;default:A.ab5("%s%e",AxY,A._GetAutoObject(A.Device.Device
).TemperatureUnit);}this.A3Z=A._GetAutoObject(A.Device.Device).TemperatureUnit;}
},BzZ:function(G){var B;var Agl=A.abX(this.OS.String,0);Agl=A._GetAutoObject(A.Device.
Converter).AUT(Agl,A._GetAutoObject(A.Device.Device).TemperatureUnit,0);Agl*=100;
A._GetAutoObject(A.aco.Ht).AFD(Math.round(Agl)|0);},BAe:function(G){this.Am();},
_Init:function(aArg){C.Jo._Init.call(this,aArg);A.acr.UE._Init.call(this.UE={I:this
},0);C.OS._Init.call(this.OS={I:this},0);this.__proto__=C.Acr;var B;this.UE.H(AxZ
);this.UE.A9H(A.aaR(A.acf.A4O));this.OS.H(Ax0);this.OS.R(Aob);this.OS.L(A.jb.Text
);this.OS.Blp(true);this.A3Z=A._GetAutoObject(A.Device.Device).TemperatureUnit;this.
J(this.UE,0);this.J(this.OS,0);this.Yv.Aw(A.aaL(A.ach.Abx));this.UE.At([B=A._GetAutoObject(
A.aco.Ht),B.ASs,B.ATd]);this.UE.OnSetAppearance(A._GetAutoObject(A.acx.AuL));this.
OS.Di=[this,this.BzZ];this.Init(aArg);},_Done:function(){this.__proto__=C.Jo;this.
UE._Done();this.OS._Done();C.Jo._Done.call(this);},_ReInit:function(){C.Jo._ReInit.
call(this);this.UE._ReInit();this.OS._ReInit();this.UE.A9H(A.aaR(A.acf.A4O));},_Mark:
function(D){var B;C.Jo._Mark.call(this,D);if((B=this.UE)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.OS)._cycle!=D)B._Mark(B._cycle=D);},_className:"Demonstrator::TemperatureAction"
};C.Aq7={Q:null,BU:null,Bn:null,AgF:null,Am1:null,Am0:null,Ara:null,Text:null,Hn:
null,Ap:null,CW:null,Aq$:null,Arb:null,Apa:false,Bl:function(aSize){this.Hn.H(A.
abK(this.Hn.M,aSize));this.BU.Axn(1);this.BU.Js(0,40);this.BU.Fk(0,aSize[0]-20,20
,12.5,12.5,-90,90,10);this.BU.Fk(0,20,20,12.5,12.5,90,270,10);this.BU.VJ(0);},Ai:
function(Ae){var B;var F;A.Core.P.Ai.call(this,Ae);var IA=((Ae&0x40)===0x40);if(
IA){if(!!this.Q)this.Text.R((F=this.Q,F[1].call(F[0])));this.AgF.Ar(true);this.Ap.
Z(false);}else{if(!!this.Q)this.Text.R((F=this.Q,F[1].call(F[0])));this.AgF.Ar(false
);this.CW.Z(false);this.Ap.Z(true);}this.Apa=IA;},Af6:function(G){var B;if(!((this.
U&0x80)===0x80))this.Il().AML(this);},A7R:function(G){},Bao:function(s){this.A7R(
s);},Bjz:function(G){var B;var F;if(!this.Q||!(F=this.Q,F[1].call(F[0])).length)
this.CW.H(A.abM(this.CW.M,A.aaI(this.Text.M)[0]));else{this.CW.H(A.abM(this.CW.M
,this.Text.AOJ(0)[2]+2));this.CW.H(A.abO(this.CW.M,this.Text.AOJ(0)[1]));this.CW.
H(A.abI(this.CW.M,(B=this.Text.AOJ(0))[3]-B[1]));}this.Ap.H(A.abM(this.Ap.M,this.
Text.M[0]-((B=this.Ap.M)[2]-B[0])));},A7P:function(G){},Ban:function(s){this.A7P(
s);},At:function(E){if(A.aaZ(this.Q,E))return;if(!!this.Q)A.z$([this,this.Kd],this.
Q,0);this.Q=E;if(!!E)A.zX([this,this.Kd],E,0);if(!!E)A.pe([this,this.Kd],this);}
,Kd:function(G){this.Am();},Bk3:function(G){var B;if(((this.U&0x80)===0x80))this.
Il().ACy(this);},Bes:function(G){},_Init:function(aArg){A.Core.P._Init.call(this
,aArg);A.Graphics.Hy._Init.call(this.BU={I:this},0);A.Core.Bn._Init.call(this.Bn={
I:this},0);A.acl.TC._Init.call(this.AgF={I:this},0);A.Core.BK._Init.call(this.Am1={
I:this},0);A.Core.BK._Init.call(this.Am0={I:this},0);A.Core.BK._Init.call(this.Ara={
I:this},0);A.acg.Text._Init.call(this.Text={I:this},0);A.acg.Hn._Init.call(this.
Hn={I:this},0);A.acg.Ap._Init.call(this.Ap={I:this},0);A.acg.AK._Init.call(this.
CW={I:this},0);A.Core.BK._Init.call(this.Aq$={I:this},0);A.Core.BK._Init.call(this.
Arb={I:this},0);this.__proto__=C.Aq7;var B;this.H(Afz);this.Bn.AZ(0x3F);this.Bn.
JS(J0);this.Bn.Ks(Aoc);this.Bn.DC(IT);this.Bn.DM(Rj);this.AgF.Fp(530);this.AgF.Ui(
530);this.Am1.Filter=143;this.Am0.Filter=45;this.Ara.Filter=1;this.Text.AZ(0x3F);
this.Text.H(Afz);this.Text.I9(true);this.Text.A5(0x12);this.Text.L(0xFFB3B3B3);this.
Hn.H(Afz);this.Hn.L(0xFFB3B3B3);this.Hn.Ng(1);this.Ap.H(Aod);this.CW.H(W_);this.
CW.L(0xFFB3B3B3);this.CW.Z(false);this.Aq$.Filter=138;this.Arb.Filter=137;this.J(
this.Bn,0);this.J(this.Text,0);this.J(this.Hn,0);this.J(this.Ap,0);this.J(this.CW
,0);this.Bn.Lm=[this,this.Af6];this.AgF.Q=[B=this.CW,B.Fo,B.Z];this.Am1.BL=[this
,this.Bao];this.Am1.D1=[this,this.Bao];this.Am0.BL=[this,this.Ban];this.Am0.D1=[
this,this.Ban];this.Ara.BL=[this,this.Bk3];this.Text.Q3([this,this.Bjz]);this.Text.
S(A.aaL(A.fl.Ak));this.Hn.Zr(this.BU);this.Ap.Aw(null);this.Aq$.BL=[this,this.Bes
];this.Arb.BL=[this,this.Bes];},_Done:function(){this.__proto__=A.Core.P;this.BU.
_Done();this.Bn._Done();this.AgF._Done();this.Am1._Done();this.Am0._Done();this.
Ara._Done();this.Text._Done();this.Hn._Done();this.Ap._Done();this.CW._Done();this.
Aq$._Done();this.Arb._Done();A.Core.P._Done.call(this);},_ReInit:function(){A.Core.
P._ReInit.call(this);this.BU._ReInit();this.Bn._ReInit();this.AgF._ReInit();this.
Am1._ReInit();this.Am0._ReInit();this.Ara._ReInit();this.Text._ReInit();this.Hn.
_ReInit();this.Ap._ReInit();this.CW._ReInit();this.Aq$._ReInit();this.Arb._ReInit(
);this.Text.S(A.aaL(A.fl.Ak));},_Mark:function(D){var B;A.Core.P._Mark.call(this
,D);if((B=this.Q)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.BU)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.Bn)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
AgF)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Am1)._cycle!=D)B._Mark(B._cycle=D);
if((B=this.Am0)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ara)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Text)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Hn)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.Ap)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
CW)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Aq$)._cycle!=D)B._Mark(B._cycle=D);
if((B=this.Arb)._cycle!=D)B._Mark(B._cycle=D);},_className:"Demonstrator::InputView"
};C.Aem={Background:null,Yk:null,_Init:function(aArg){A.Core.P._Init.call(this,aArg
);A.acg.AK._Init.call(this.Background={I:this},0);C.Yk._Init.call(this.Yk={I:this
},0);this.__proto__=C.Aem;var B;this.H(Aoe);this.Background.H(Aoe);this.Yk.AZ(0x1D
);this.Yk.H(AsP);this.J(this.Background,0);this.J(this.Yk,0);this.Yk.At([B=A._GetAutoObject(
A.aco.AgI),B.A8E,B.AFy]);},_Done:function(){this.__proto__=A.Core.P;this.Background.
_Done();this.Yk._Done();A.Core.P._Done.call(this);},_ReInit:function(){A.Core.P.
_ReInit.call(this);this.Background._ReInit();this.Yk._ReInit();},_Mark:function(
D){var B;A.Core.P._Mark.call(this,D);if((B=this.Background)._cycle!=D)B._Mark(B.
_cycle=D);if((B=this.Yk)._cycle!=D)B._Mark(B._cycle=D);},_className:"Demonstrator::FilterRow"
};C.OS={Init:function(aArg){var B;A.zX([this,this.AAB],[B=A._GetAutoObject(A.Device.
Device),B.Arr,B.Ata],0);A.pe([this,this.AAB],this);},Ai:function(Ae){var B;C.Aki.
Ai.call(this,Ae);var IA=((this.U&0x40)===0x40);if(!IA&&(this.String.length>0))this.
Text.R(((this.String+AsQ)+A._GetAutoObject(A.acj.Temperature).AlC())+String.fromCharCode(
0x0A));else this.Text.R(this.String+String.fromCharCode(0x0A));if(this.D6>this.String.
length)this.D6=this.String.length;},AAB:function(G){this.Am();},_Init:function(aArg
){C.Aki._Init.call(this,aArg);this.__proto__=C.OS;this.Init(aArg);},_className:"Demonstrator::TemperatureInputView"
};C.Aki={B6:null,Di:null,IU:null,Cq:null,Amw:null,Sc:null,KK:null,Bn:null,Text:null
,CW:null,Aqq:null,Ar8:null,BU:null,Hn:null,Arn:null,AqV:null,AqD:null,String:A.jV
,D6:0,AQ:0xFFB3B3B3,AvP:15,ANA:false,Lz:false,Bl:function(aSize){this.Hn.H(A.abK(
this.Hn.M,aSize));this.BU.Axn(1);this.BU.Js(0,40);this.BU.Fk(0,aSize[0]-20,20,12.5
,12.5,-90,90,10);this.BU.Fk(0,20,20,12.5,12.5,90,270,10);this.BU.VJ(0);},Ai:function(
Ae){var B;A.acn.Jb.Ai.call(this,Ae);if(((Ae&0x40)===0x40))this.IU.Ar(true);else{
this.IU.Ar(false);this.CW.Z(false);}},A39:function(G){var B;var Bd=this.Text.M;var
Nu=0;var Nv=0;if(this.CW.Es[0]<Bd[0])Nu=Bd[0]-this.CW.Es[0];if(this.CW.Es[0]>Bd[
2])Nu=Bd[2]-this.CW.Es[0];if(this.CW.Es[1]<Bd[1])Nv=Bd[1]-this.CW.Es[1];if(this.
CW.EC[1]>Bd[3])Nv=Bd[3]-this.CW.EC[1];if(!!Nu||!!Nv)this.Text.Gb(A.abf(this.Text.
Br,[Nu,Nv]));Nu=this.Text.Br[0];Nv=this.Text.Br[1];var C3=[(B=this.Text.Db())[2]-
B[0],B[3]-B[1]];if(C3[0]<=((B=this.Text.M)[2]-B[0]))Nu=0;if(C3[1]<=((B=this.Text.
M)[3]-B[1]))Nv=0;this.Text.Gb([Nu,Nv]);},Ame:function(G){if(!this.B6)return;var A3B=
this.Text.AGJ(this.D6);var pos=this.Text.Afc(A3B);this.CW.DM(A.abe(pos,[0,this.B6.
Ascent]));this.CW.DC(A.abf(pos,[0,this.B6.Descent]));if(this.IU.Bw){this.IU.Ar(false
);this.IU.Ar(true);}if(this.Lz){A.pe([this,this.A39],this);this.Lz=false;}},AAx:
function(G){if(!this.A6z(0x80))this.Il().AML(this);var EH=this.Text.ATI(this.Bn.
H0);var Vc=this.Text.AnK(EH);if(Vc!==this.D6){this.D6=Vc;A.pe([this,this.Ame],this
);this.Lz=true;}},AAr:function(G){if(!this.B6)return;var EH=this.Text.AGJ(this.D6
);if(this.Cq.CO===6){EH=[EH[0]-1,EH[1]];if(this.Text.AnK(EH)===this.D6){EH=[EH[0
],EH[1]-1];EH=[this.Text.ACW(EH[1]).length,EH[1]];}}if(this.Cq.CO===7){EH=[EH[0]+
1,EH[1]];if(this.Text.AnK(EH)===this.D6){EH=[EH[0],EH[1]+1];EH=[0,EH[1]];}}var Vc=
this.Text.AnK(EH);if(Vc!==this.D6){this.D6=Vc;A.pe([this,this.Ame],this);this.Lz=
true;}},Beb:function(G){if(!this.D6)return;this.R(A.ab1(this.String,this.D6-1,1)
);this.D6=this.D6-1;this.Lz=true;A.pe(this.Di,this);},AAs:function(G){if(this.D6>=
this.String.length)return;this.R(A.ab1(this.String,this.D6,1));this.Lz=true;A.pe(
this.Di,this);},Beg:function(G){if(this.String.length>=this.AvP)return;var Byj=this.
KK.DQ;var Aud=String.fromCharCode(Byj);this.R(A.abU(this.String,Aud,this.D6));this.
D6=this.D6+Aud.length;this.Lz=true;A.pe(this.Di,this);},R:function(E){if(this.String===
E)return;this.String=E;if(this.D6>(E.length+1))this.D6=E.length;this.Text.R(E+String.
fromCharCode(0x0A));this.Lz=true;this.Text.Gb(J0);},L:function(E){if(this.AQ===E
)return;this.AQ=E;this.Text.L(E);this.CW.L(E);this.Hn.L(E);},S:function(E){if(this.
B6===E)return;this.B6=E;this.Text.S(E);this.Lz=true;this.Text.Gb(J0);},Bet:function(
G){if(this.ANA===false)return;if(this.String.indexOf(String.fromCharCode(0x2E),0
)>=0)return;if(this.String.length>=this.AvP)return;this.R(A.abU(this.String,S8,this.
D6));this.D6=this.D6+1;this.Lz=true;A.pe(this.Di,this);},Ba8:function(s){this.Bet(
s);},Blp:function(E){if(this.ANA===E)return;this.ANA=E;if(E===false){var Bfa=this.
String.indexOf(String.fromCharCode(0x2E),0);if(Bfa>=0)this.R(A.abV(this.String,Bfa
));}this.Lz=true;this.Text.Gb(J0);},Bmv:function(E){if(this.AvP===E)return;this.
AvP=E;this.R(A.abV(this.String,E));this.Lz=true;this.Text.Gb(J0);},Bz7:function(
G){if(this.A6z(0x80)){this.Il().ACy(this);this.Cr(0x10,0x0);}this.Am();},BzV:function(
G){var Vc=this.String.length;if(Vc!==this.D6){this.D6=Vc;A.pe([this,this.Ame],this
);this.Lz=true;}},BzY:function(G){if(!!this.D6){this.D6=0;A.pe([this,this.Ame],this
);this.Lz=true;}},_Init:function(aArg){A.acn.Jb._Init.call(this,aArg);A.acl.TC._Init.
call(this.IU={I:this},0);A.Core.BK._Init.call(this.Cq={I:this},0);A.Core.BK._Init.
call(this.Amw={I:this},0);A.Core.BK._Init.call(this.Sc={I:this},0);A.Core.BK._Init.
call(this.KK={I:this},0);A.Core.Bn._Init.call(this.Bn={I:this},0);A.acg.Text._Init.
call(this.Text={I:this},0);A.acg.C4._Init.call(this.CW={I:this},0);A.Core.BK._Init.
call(this.Aqq={I:this},0);A.Core.BK._Init.call(this.Ar8={I:this},0);A.Graphics.Hy.
_Init.call(this.BU={I:this},0);A.acg.Hn._Init.call(this.Hn={I:this},0);A.Core.BK.
_Init.call(this.Arn={I:this},0);A.Core.BK._Init.call(this.AqV={I:this},0);A.Core.
BK._Init.call(this.AqD={I:this},0);this.__proto__=C.Aki;var B;this.H(Afz);this.IU.
B2=false;this.IU.Cw=true;this.IU.Fp(500);this.IU.Ui(500);this.Cq.Filter=147;this.
Amw.Filter=45;this.Sc.Filter=44;this.KK.Filter=143;this.Bn.AZ(0x3F);this.Bn.JS(Rj
);this.Bn.Ks(IT);this.Bn.DC(Aoc);this.Bn.DM(J0);this.Bn.AFj(3);this.Text.AZ(0x3F
);this.Text.H(Afz);this.Text.KQ(false);this.Text.A5(0x12);this.Text.R(A.jV);this.
Text.L(0xFFB3B3B3);this.CW.DC(AsR);this.CW.DM(Aof);this.CW.A_h(2);this.CW.A_g(2);
this.CW.L(0xFFB3B3B3);this.CW.Z(false);this.Aqq.Filter=138;this.Ar8.Filter=137;this.
Hn.H(Afz);this.Hn.L(0xFFB3B3B3);this.Hn.Ng(1);this.Arn.Filter=1;this.AqV.Filter=
41;this.AqD.Filter=42;this.J(this.Bn,0);this.J(this.Text,0);this.J(this.CW,0);this.
J(this.Hn,0);this.IU.Q=[B=this.CW,B.Fo,B.Z];this.Cq.BL=[this,this.AAr];this.Cq.D1=[
this,this.AAr];this.Amw.BL=[this,this.Beb];this.Amw.D1=[this,this.Beb];this.Sc.BL=[
this,this.AAs];this.Sc.D1=[this,this.AAs];this.KK.BL=[this,this.Beg];this.KK.D1=[
this,this.Beg];this.Bn.BL=[this,this.AAx];this.Text.Q3([this,this.Ame]);this.Text.
S(A.aaL(A.fl.Ak));this.B6=A.aaL(A.fl.Ak);this.Aqq.BL=[this,this.Ba8];this.Ar8.BL=[
this,this.Ba8];this.Hn.Zr(this.BU);this.Arn.BL=[this,this.Bz7];this.AqV.BL=[this
,this.BzY];this.AqD.BL=[this,this.BzV];},_Done:function(){this.__proto__=A.acn.Jb;
this.IU._Done();this.Cq._Done();this.Amw._Done();this.Sc._Done();this.KK._Done();
this.Bn._Done();this.Text._Done();this.CW._Done();this.Aqq._Done();this.Ar8._Done(
);this.BU._Done();this.Hn._Done();this.Arn._Done();this.AqV._Done();this.AqD._Done(
);A.acn.Jb._Done.call(this);},_ReInit:function(){A.acn.Jb._ReInit.call(this);this.
IU._ReInit();this.Cq._ReInit();this.Amw._ReInit();this.Sc._ReInit();this.KK._ReInit(
);this.Bn._ReInit();this.Text._ReInit();this.CW._ReInit();this.Aqq._ReInit();this.
Ar8._ReInit();this.BU._ReInit();this.Hn._ReInit();this.Arn._ReInit();this.AqV._ReInit(
);this.AqD._ReInit();this.Text.S(A.aaL(A.fl.Ak));this.S(A.aaL(A.fl.Ak));},_Mark:
function(D){var B;A.acn.Jb._Mark.call(this,D);if((B=this.B6)&&(B._cycle!=D))B._Mark(
B._cycle=D);if((B=this.Di)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.
IU)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Cq)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Amw)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Sc)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.KK)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Bn)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Text)._cycle!=D)B._Mark(B._cycle=D);if((B=this.CW)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.Aqq)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
Ar8)._cycle!=D)B._Mark(B._cycle=D);if((B=this.BU)._cycle!=D)B._Mark(B._cycle=D);
if((B=this.Hn)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Arn)._cycle!=D)B._Mark(B.
_cycle=D);if((B=this.AqV)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AqD)._cycle!=
D)B._Mark(B._cycle=D);},_className:"Demonstrator::NumberInput"};C.Acq={LabelDataSync:
null,Af6:function(G){var B;A.pe([B=A._GetAutoObject(A.acs.Ack),B.BBu],this);},_Init:
function(aArg){C.Jo._Init.call(this,aArg);A.kR.CH._Init.call(this.LabelDataSync={
I:this},0);this.__proto__=C.Acq;this.LabelDataSync.H(Aog);this.LabelDataSync.R(A.
aaR(A.acf.A5o));this.LabelDataSync.L(A.jb.Text);this.J(this.LabelDataSync,0);this.
Yv.Aw(A.aaL(C.AUK));this.LabelDataSync.S(A.aaL(A.fl.Af));this.LabelDataSync.A2(A.
aaL(A.fl.Ak));},_Done:function(){this.__proto__=C.Jo;this.LabelDataSync._Done();
C.Jo._Done.call(this);},_ReInit:function(){C.Jo._ReInit.call(this);this.LabelDataSync.
_ReInit();this.LabelDataSync.R(A.aaR(A.acf.A5o));this.LabelDataSync.S(A.aaL(A.fl.
Af));this.LabelDataSync.A2(A.aaL(A.fl.Ak));},_Mark:function(D){var B;C.Jo._Mark.
call(this,D);if((B=this.LabelDataSync)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Demonstrator::SyncAction"};C.AUK={_class:function(){return A.aci.Al;},0:{FileName:
"./res_index/DemonstratorSyncIcon.png",Format:A._PIXEL_FORMAT_NATIVE,NoOfFrames:
1,FrameSize:[50,60],FrameDelay:0,_this:null}};C.Aa_={TimespanDaysToString:null,Avi:
function(aIndex){if(this.AqO()>aIndex)return this.TimespanDaysToString.BS(aIndex
);A.ab5("%s",AsS);return A.jV;},AqO:function(){return 4;},C7:function(aIndex){var
Ai7=0;switch(aIndex){case 0:Ai7=0;break;case 1:Ai7=1;break;case 2:Ai7=2;break;case
3:Ai7=3;break;default:throw new Error(Ax1+aIndex.toFixed());}return Ai7;},_Init:
function(aArg){A.acq.VK._Init.call(this,aArg);A.Device.TimespanDaysToString._Init.
call(this.TimespanDaysToString={I:this},0);this.__proto__=C.Aa_;},_Done:function(
){this.__proto__=A.acq.VK;this.TimespanDaysToString._Done();A.acq.VK._Done.call(
this);},_ReInit:function(){A.acq.VK._ReInit.call(this);this.TimespanDaysToString.
_ReInit();},_Mark:function(D){var B;A.acq.VK._Mark.call(this,D);if((B=this.TimespanDaysToString
)._cycle!=D)B._Mark(B._cycle=D);},_className:"Demonstrator::DatePickerUnitDD"};C.
BFg={GK:0,AVr:1,Hi:2,Year:3};C.ACv={_class:function(){return A.aci.Al;},0:{FileName:
"./res_index/DemonstratorEarTagIcon.png",Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:
2,FrameSize:[37,37],FrameDelay:0,_this:null}};C.AxI={_class:function(){return A.
aci.Al;},0:{FileName:"./res_index/DemonstratorTransponderEarTagIcon.png",Format:
A._PIXEL_FORMAT_ALPHA8,NoOfFrames:2,FrameSize:[37,37],FrameDelay:0,_this:null}};
C.ZC={Aeb:null,Init:function(aArg){var Au=A._NewObject(A.Core.Bs,0);Au.Initialize(
A._GetAutoObject(A.Device.Helper).Du());var A1j=Au.Format(Is);this.Aeb.R(A1j);},
Af6:function(G){var B;var J5=this.Aeb.String;var O;O=J5.indexOf(String.fromCharCode(
0x2E),0);while(O>=0){J5=A.ab1(J5,O,1);O=J5.indexOf(String.fromCharCode(0x2E),O);
}J5=J5+Ax2;J5=J5+A._GetAutoObject(A.acj.VA).ACS(J5).toFixed();var A1j=A._GetAutoObject(
A.Device.AnE).Be1(J5);A._GetAutoObject(A.aco.Ht).BBk(((B=(A1j|0))<0)?B+0x100000000:
B);},_Init:function(aArg){C.Jo._Init.call(this,aArg);C.ANx._Init.call(this.Aeb={
I:this},0);this.__proto__=C.ZC;this.Aeb.H(Rk);this.Aeb.L(A.jb.Text);this.Aeb.Bmv(
10);this.J(this.Aeb,-1);this.Yv.Aw(A.aaL(A.ach.Avq));this.Init(aArg);},_Done:function(
){this.__proto__=C.Jo;this.Aeb._Done();C.Jo._Done.call(this);},_ReInit:function(
){C.Jo._ReInit.call(this);this.Aeb._ReInit();},_Mark:function(D){var B;C.Jo._Mark.
call(this,D);if((B=this.Aeb)._cycle!=D)B._Mark(B._cycle=D);},_className:"Demonstrator::ScanDateAction"
};C.Ahz={BFu:0,BFq:1,VA:2,LAST:3};C.AhA={AhB:null,Avi:function(aIndex){if(this.AqO(
)>aIndex)return this.AhB.BS(aIndex);A.ab5("%s",AsS);return A.jV;},AqO:function(){
return 3;},_Init:function(aArg){A.acq.VK._Init.call(this,aArg);C.AhB._Init.call(
this.AhB={I:this},0);this.__proto__=C.AhA;},_Done:function(){this.__proto__=A.acq.
VK;this.AhB._Done();A.acq.VK._Done.call(this);},_ReInit:function(){A.acq.VK._ReInit.
call(this);this.AhB._ReInit();},_Mark:function(D){var B;A.acq.VK._Mark.call(this
,D);if((B=this.AhB)._cycle!=D)B._Mark(B._cycle=D);},_className:"Demonstrator::ScanTypeDD"
};C.AhB={BS:function(A7){var Bct=A7;var AKS=A.jV;switch(Bct){case 2:AKS=A.aaR(A.
acf.VA);break;case 0:AKS=A.aaR(A.acf.Transponder);break;case 1:AKS=A.aaR(A.acf.BhR
);break;default:throw new Error(Ax3+Bct.toFixed());}return AKS;},_Init:function(
aArg){A.Device.EnumToString._Init.call(this,aArg);this.__proto__=C.AhB;},_className:
"Demonstrator::ScanTypeToString"};C.ANx={Bet:function(G){var Bfb=0;var O=this.String.
indexOf(String.fromCharCode(0x2E),0);while(O>=0){Bfb++;O++;O=this.String.indexOf(
String.fromCharCode(0x2E),O);}if(Bfb>=2)return;if(this.String.length>=this.AvP)return;
this.R(A.abU(this.String,S8,this.D6));this.D6=this.D6+1;this.Lz=true;A.pe(this.Di
,this);},_Init:function(aArg){C.Aki._Init.call(this,aArg);this.__proto__=C.ANx;}
,_className:"Demonstrator::DateInput"};
C._Init=function(){C.AVl.__proto__=A.acn.Menu;C.AUh.__proto__=A.Core.P;C.AMk.__proto__=
C.Ba;C.Mh.__proto__=A.Core.P;C.Yk.__proto__=C.Aq7;C.Aa$.__proto__=A.Core.P;C.Avt.
__proto__=A.acn.Ahu;C.AMy.__proto__=C.FB;C.Auq.__proto__=C.FB;C.Ba.__proto__=A.Core.
P;C.FB.__proto__=A.Core.P;C.ANy.__proto__=A.acn.Ahs;C.AhE.__proto__=A.Core.P;C.AMr.
__proto__=C.AhE;C.Vr.__proto__=C.Auq;C.ALV.__proto__=A.Core.P;C.Jo.__proto__=A.Core.
P;C.Acg.__proto__=C.Jo;C.Acr.__proto__=C.Jo;C.Aq7.__proto__=A.Core.P;C.Aem.__proto__=
A.Core.P;C.OS.__proto__=C.Aki;C.Aki.__proto__=A.acn.Jb;C.Acq.__proto__=C.Jo;C.Aa_.
__proto__=A.acq.VK;C.ZC.__proto__=C.Jo;C.AhA.__proto__=A.acq.VK;C.AhB.__proto__=
A.Device.EnumToString;C.ANx.__proto__=C.Aki;};C._ReInit=function(){};C.DH=function(
D){var B;if((B=C.Background[0]._this)&&(B._cycle!=D))B._Done(C.Background[0]._this=
null);if((B=C.AMU[0]._this)&&(B._cycle!=D))B._Done(C.AMU[0]._this=null);if((B=C.
AMV[0]._this)&&(B._cycle!=D))B._Done(C.AMV[0]._this=null);if((B=C.AMW[0]._this)&&(
B._cycle!=D))B._Done(C.AMW[0]._this=null);if((B=C.AMX[0]._this)&&(B._cycle!=D))B.
_Done(C.AMX[0]._this=null);if((B=C.APY[0]._this)&&(B._cycle!=D))B._Done(C.APY[0].
_this=null);if((B=C.Filter[0]._this)&&(B._cycle!=D))B._Done(C.Filter[0]._this=null
);if((B=C.ARx[0]._this)&&(B._cycle!=D))B._Done(C.ARx[0]._this=null);if((B=C.Ajm[
0]._this)&&(B._cycle!=D))B._Done(C.Ajm[0]._this=null);if((B=C.AMB[0]._this)&&(B.
_cycle!=D))B._Done(C.AMB[0]._this=null);if((B=C.Asm[0]._this)&&(B._cycle!=D))B._Done(
C.Asm[0]._this=null);if((B=C.AUP[0]._this)&&(B._cycle!=D))B._Done(C.AUP[0]._this=
null);if((B=C.AHc[0]._this)&&(B._cycle!=D))B._Done(C.AHc[0]._this=null);if((B=C.
AVC[0]._this)&&(B._cycle!=D))B._Done(C.AVC[0]._this=null);if((B=C.AUK[0]._this)&&(
B._cycle!=D))B._Done(C.AUK[0]._this=null);if((B=C.ACv[0]._this)&&(B._cycle!=D))B.
_Done(C.ACv[0]._this=null);if((B=C.AxI[0]._this)&&(B._cycle!=D))B._Done(C.AxI[0].
_this=null);};return C;})();

/* VitalControl demonstration application, © Urban GmbH & Co.KG 2023 */