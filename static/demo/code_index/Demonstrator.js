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
var Cc=[0,0,370,60];var BF=[360,0,370,60];var E7=[0,0,370,710];var Hp="Unknown animalType";
var IS=[58,10,120,50];var Ir=[0,0,60,60];var O1=[120,0,360,60];var P3="\u2015";var
P4=[0,0,240,60];var CQ=[0,0,40,60];var Fe=[100,0,130,60];var Lu=[43,0,100,60];var
P5=[125,0,240,60];var JZ=[0,0];var N_=[100,0];var P6=[100,60];var MG=[0,60];var S8=[
107,0];var US=[240,0];var Z8=[240,60];var W5=[107,60];var Is="%d.%m.%Y";var UT="Unhandled date unit: ";
var Z9=[0,0,200,180];var W6=[36,0,200,30];var Z_=[0,30,160,60];var W7="Text";var
Z$=[0,70,40,110];var Aaa=[44,70,156,110];var UU=[160,70,200,110];var W8=[7,2,27,
25];var P7=[0,30,170,180];var Aab=[170,34,190,57];var O2=[0,0,40,40];var Rl=[0,40
];var W9=[40,40];var W_=[40,0];var W$=[0,0,370,100];var Xa=[20,0,290,60];var Aac=[
0,60,370,100];var Xb="Cap";var Xc=[20,0,370,60];var S9=[310,0,370,60];var UV=[370
,0];var UW=[370,60];var AcQ="UpdateData is called for the base class ListItemBase. Please make "+
"sure this method is implemented by a derived class.";var S_=".";var Aad=[0,0,170
,150];var Afz=[0,59,170,90];var Aae=[110,0,170,150];var Xd=[0,30];var Aaf=[50,0,
100,150];var Aag=[0,0,40,150];var AhV=[0,0,370,240];var J0=[0,60,370,710];var Aah=[
0,0,370,300];var Lv=[0,60,370,300];var AhW=[0,60,370,120];var Aof=[0,120,370,180
];var N$=[0,180,370,240];var Xe=[0,240,370,300];var Aog=[370,120];var AhX=[0,120
];var AhY=[370,180];var Rm=[0,180];var UX=[370,240];var Aoh=[0,240];var Aoi=[370
,300];var Aoj=[0,300];var Aok=[0,0,50,60];var AfA=[50,0,100,60];var Ale="Unhandled scan type";
var Aol=[3,11,253,51];var Ax2=[50,0];var O3=[50,60];var Rn=[100,10,370,50];var Ax3=
"276000901234567";var UY=[3,10,57,50];var AsX=[3,11,55,50];var Ax4="Unhandled temperature unit";
var Ax5=[110,0,260,60];var Ax6=[235,10,370,50];var Aom="39.5";var AfB=[0,0,270,40
];var Aon=[270,0];var IT=[270,40];var Aoo=[150,0,170,40];var Xf=[205,10,207,30];
var Aop=[0,0,370,40];var AsY=[50,0,320,40];var AsZ=" ";var As0=[135,23];var Aoq=[
135,0];var Aor=[100,0,370,60];var As1="Error: Nullpointer Exception";var Ax7="Unknown Date Piecker Unit Index: ";
var Ax8="0";var Ax9="Unhandled scan type:";
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
null}};C.Ajv={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/DemonstratorArrowRight.png"
,Format:A._PIXEL_FORMAT_NATIVE,NoOfFrames:1,FrameSize:[17,16],FrameDelay:0,_this:
null}};C.AMF={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/DemonstratorArrowDown.png"
,Format:A._PIXEL_FORMAT_NATIVE,NoOfFrames:1,FrameSize:[17,16],FrameDelay:0,_this:
null}};C.Asw={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/DemonstratorScanIcon.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:2,FrameSize:[37,37],FrameDelay:0,_this:
null}};C.AUV={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/DemonstratorTemperatureIcon.png"
,Format:A._PIXEL_FORMAT_NATIVE,NoOfFrames:1,FrameSize:[17,37],FrameDelay:0,_this:
null}};C.AVr={Aec:null,AX:null,AR:null,Background:null,H9:null,AD:null,IP:null,Dl:
null,Li:null,A7u:null,A7W:0,Bl:function(aSize){A.acn.Menu.Bl.call(this,aSize);this.
IP.H(A.abP(this.IP.M,this.AD.OP));this.IP.H([].concat(this.IP.M.slice(0,3),aSize[
1]));},Ai:function(Ae){var B;A.acn.Menu.Ai.call(this,Ae);var IA=((Ae&0x40)===0x40
);if(IA&&(this.AD.Gt<0))this.AD.GS(0);},NZ:function(E){if(this.Li===E)return;this.
Li=E;this.AD.NZ(E);},BmL:function(E){var B;if(this.A7u===E)return;if(!!this.Aec){
this.HP(this.Aec);this.Aec=null;}if(!!E){this.Aec=(C.FB.isPrototypeOf(B=A._NewObject(
E,0))?B:null);this.Aec.A9Y([this,this.Akw]);this.Aec.A9Z([this,this.Akx]);this.Aec.
BmR(null);this.J(this.Aec,0);this.AD.A95((B=this.Aec.M)[3]-B[1]);}else this.AD.A95(
0);this.IP.H(A.abP(this.IP.M,this.AD.OP));A.pe([this,this.Fj],this);this.A7u=E;}
,Hk:function(G){var B;var Gh=this.AD.G4;var Aa=(C.Ba.isPrototypeOf(B=this.AD.Ch)?
B:null);if(!Aa)return;Aa.Zw(this.AX);Aa.Ce(Gh);Aa.Zy(this.AR);Aa.H(A.abK(Aa.M,[(
B=this.AD.M)[2]-B[0],this.AD.GN]));},Zw:function(E){var B;if(this.AX===E)return;
if(!!this.AX){A.z9([this,this.Ce],this.AX,0);A.z$([this,this.An_],[B=this.AX,B.Fn
,B.Fr],0);}this.AX=E;if(!!E){A.zV([this,this.Ce],E,0);A.zX([this,this.An_],[E,E.
Fn,E.Fr],0);}A.pe([this,this.Ce],this);A.pe([this,this.An_],this);},Ce:function(
G){if(!!this.AX){this.AD.Jw(this.AX.B$());this.AD.AbJ(0,this.AD.AY-1);}else this.
AD.Jw(0);if(this.A7W!==this.AD.AY){this.AD.ABE(null,null);this.A7W=this.AD.AY;}A.
pe([this,this.Fj],this);},Akx:function(G){var B;this.H(A.abI(this.M,(B=this.AD.AOM(
))[3]-B[1]));},Akw:function(G){this.H(A.abI(this.M,180));},A9e:function(G){var Jz=(
A.Core.BM.isPrototypeOf(G)?G:null);var Gh=this.AD.Gt;if(Jz.CO===4)Gh=Gh-1;else if(
Jz.CO===5)Gh=Gh+1;else if((Jz.DQ>=0x30)&&(Jz.DQ<=0x39))A._GetAutoObject(A.aco.AgL
).Ey(Jz.DQ);else if(Jz.CO===45)A._GetAutoObject(A.aco.AgL).Delete();else Jz.NH=true;
if((Gh<0)||(Gh>=this.AD.AY))return;this.AD.GS(Gh);this.ByJ(Gh,true);},Byy:function(
G){var Aa=(C.Ba.isPrototypeOf(G)?G:null);this.AD.GS(Aa.Hq);},ByJ:function(G_,Ac2
){var B;if((G_<0)||(G_>=this.AD.AY))return;var Az=this.AD.AqX(G_,G_);var Bd=this.
AD.M;Bd=A.abP(Bd,(B=this.AD.AOM())[3]-B[1]);Bd=A.abI(Bd,(((B=this.AD.M)[3]-B[1])-((
B=this.AD.AOM())[3]-B[1]))-((B=this.AD.BiJ())[3]-B[1]));var LN=A.lb(Az,Bd);if((!
Ac2&&!((LN[0]>=LN[2])||(LN[1]>=LN[3])))||(Ac2&&A.aaY(LN,Az)))return;var Bq=0;if(
Az[3]>Bd[3])Bq=Az[3]-Bd[3];if(Bq>(Az[1]-Bd[1]))Bq=(Az[3]-Bd[1])-this.AD.GN;this.
AD.Gd(this.AD.Br-Bq);},An_:function(G){this.AD.GS(-1);},Fj:function(G){var B;this.
IP.Mw(this.AD.GN*this.AD.AY);this.IP.My(((B=this.AD.M)[3]-B[1])-this.AD.OP);this.
IP.Mx(-this.AD.Br);},_Init:function(aArg){A.acn.Menu._Init.call(this,aArg);A.acg.
AK._Init.call(this.Background={I:this},0);A.Core.H9._Init.call(this.H9={I:this},
0);A.Core.CM._Init.call(this.AD={I:this},0);A.kR.Ay._Init.call(this.IP={I:this},
0);A.Core.BM._Init.call(this.Dl={I:this},0);this.__proto__=C.AVr;this.H(Cc);this.
Background.AZ(0x3);this.Background.H(Cc);this.H9.AZ(0x3F);this.H9.H(Cc);this.AD.
AZ(0x3F);this.AD.H(Cc);this.AD.Ae6(60);this.AD.Jw(0);this.AD.NZ(this.Li);this.IP.
AZ(0x3A);this.IP.H(BF);this.IP.L(0xFF808080);this.J(this.Background,0);this.J(this.
H9,0);this.J(this.AD,0);this.J(this.IP,0);this.AD.El=[this,this.Fj];this.AD.Hk=[
this,this.Hk];this.AD.Aw2(this.H9);this.AR=[this,this.Byy];this.Dl.BN=[this,this.
A9e];this.Dl.D1=[this,this.A9e];},_Done:function(){this.__proto__=A.acn.Menu;this.
Background._Done();this.H9._Done();this.AD._Done();this.IP._Done();this.Dl._Done(
);A.acn.Menu._Done.call(this);},_ReInit:function(){A.acn.Menu._ReInit.call(this);
this.Background._ReInit();this.H9._ReInit();this.AD._ReInit();this.IP._ReInit();
this.Dl._ReInit();},_Mark:function(D){var B;A.acn.Menu._Mark.call(this,D);if((B=
this.Aec)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.AX)&&(B._cycle!=D))B._Mark(
B._cycle=D);if((B=this.AR)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.
Background)._cycle!=D)B._Mark(B._cycle=D);if((B=this.H9)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.AD)._cycle!=D)B._Mark(B._cycle=D);if((B=this.IP)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Dl)._cycle!=D)B._Mark(B._cycle=D);},_className:"Demonstrator::VerticalMenu"
};C.AUn={GJ:null,AK:null,BU:null,Init:function(aArg){var B;A.zX([this,this.GH],[
B=A._GetAutoObject(A.aco.Ht),B.A8T,B.A_d],0);A.pe([this,this.GH],this);},Ab7:function(
E){if(this.GJ===E)return;if(!!this.GJ)this.HP(this.GJ);this.GJ=E;if(!!this.GJ)this.
J(this.GJ,0);this.Bb(E);this.AhB(E,this.BU);this.Am();},GH:function(G){var B;if(
!!A._GetAutoObject(A.aco.Ht).Asz)this.Ab7((C.AhH.isPrototypeOf(B=A._NewObject(A.
_GetAutoObject(A.aco.Ht).Asz,0))?B:null));else this.Ab7(null);},_Init:function(aArg
){A.Core.P._Init.call(this,aArg);A.acg.AK._Init.call(this.AK={I:this},0);A.acg.BU.
_Init.call(this.BU={I:this},0);this.__proto__=C.AUn;this.H(E7);this.AK.AZ(0x3F);
this.AK.H(E7);this.BU.H(E7);this.BU.L(0xFF000000);this.J(this.AK,0);this.J(this.
BU,0);this.Init(aArg);},_Done:function(){this.__proto__=A.Core.P;this.AK._Done();
this.BU._Done();A.Core.P._Done.call(this);},_ReInit:function(){A.Core.P._ReInit.
call(this);this.AK._ReInit();this.BU._ReInit();},_Mark:function(D){var B;A.Core.
P._Mark.call(this,D);if((B=this.GJ)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.
AK)._cycle!=D)B._Mark(B._cycle=D);if((B=this.BU)._cycle!=D)B._Mark(B._cycle=D);}
,_className:"Demonstrator::SelectionArea"};C.AMo={ABk:0,Ka:0,Background:null,V:null
,Ajr:null,AdV:null,XU:null,AdW:null,Mh:null,Mf:0,LI:false,KE:false,CP:function(){
this.Am();},Ai:function(Ae){var B;C.Ba.Ai.call(this,Ae);var Hd=((Ae&0x10)===0x10
);var Fu=((Ae&0x20)===0x20);var IA=((Ae&0x40)===0x40);if(!Hd){this.Background.L(
0xFFAAAAAA);this.V.L(0xFF888888);this.Mh.Ar(false);this.Mh.Z(false);}else if(IA){
this.Background.L(A.jb.AV);this.V.L(A.jb.Bm);this.Mh.Ar(true);this.Mh.Z(true);}else
if(Fu){this.Background.L(0xFFE6DED8);this.V.L(0xFF000000);this.Mh.Ar(true);this.
Mh.Z(true);}else{this.Background.L(0xFFFFFFFF);this.V.L(0xFF000000);this.Mh.Ar(false
);this.Mh.Z(false);}if(!this.KE&&Fu)A._GetAutoObject(A.aco.Ht).A_a(this.ABk);this.
Mh.BmN(this.Ka>0);this.Mh.Bne(this.ABk>0);this.V.R(this.Mf.toFixed());this.LI=Hd;
this.KE=Fu;},Ce:function(Ad){if(!this.AX){this.XU.Aw(A.aaL(A.ach.Aex));this.AdV.
L(A.jb.Afs);return;}this.Hq=Ad;if(!!this.AX){this.Ka=this.AX.KN(Ad,26);this.ABk=
this.AX.KN(Ad,22);this.Mf=this.AX.CF(Ad,1);var AlR=this.AX.H3(Ad,11);var AlI=this.
AX.I4(Ad,17);var LQ=this.AX.I4(Ad,13);var Ib=this.AX.AmW(Ad,14);var Xq=A._GetAutoObject(
A.Device.Helper).AMd(LQ,AlR,AlI);switch(Ib){case 0:this.XU.Aw(A.aaL(A.ach.Aex));
break;case 1:this.XU.Aw(A.aaL(A.ach.AvB));break;case 2:this.XU.Aw(A.aaL(A.ach.AvE
));break;default:A.ab5("%s%e",Hp,Ib);}this.AdW.Aw(this.XU.Al);this.AdV.L(A._GetAutoObject(
A.acj.Assessment).Ql(Xq));this.Am();}},_Init:function(aArg){C.Ba._Init.call(this
,aArg);A.acg.AK._Init.call(this.Background={I:this},0);A.kR.CH._Init.call(this.V={
I:this},0);A.acg.Ap._Init.call(this.Ajr={I:this},0);A.acg.Ap._Init.call(this.AdV={
I:this},0);A.acg.Ap._Init.call(this.XU={I:this},0);A.acg.Ap._Init.call(this.AdW={
I:this},0);C.Mh._Init.call(this.Mh={I:this},0);this.__proto__=C.AMo;this.Background.
AZ(0x3F);this.Background.H(Cc);this.V.AZ(0x3F);this.V.H(IS);this.V.R(A.aaR(A.acf.
GM));this.V.A6(0x11);this.V.L(0xFF000000);this.Ajr.H(Ir);this.Ajr.L(A.jb.Text);this.
AdV.H(Ir);this.AdV.L(A.jb.E4);this.XU.H(Ir);this.AdW.H(Ir);this.AdW.L(A.jb.Text);
this.AdW.Cw(1);this.Mh.AZ(0x3);this.Mh.H(O1);this.J(this.Background,0);this.J(this.
V,0);this.J(this.Ajr,0);this.J(this.AdV,0);this.J(this.XU,0);this.J(this.AdW,0);
this.J(this.Mh,0);this.V.S(A.aaL(A.fl.Af));this.V.A2(A.aaL(A.fl.Ak));this.V.Cv(A.
aaL(A.fl.Bi));this.Ajr.Aw(A.aaL(C.AHg));this.AdV.Aw(A.aaL(C.AVI));this.XU.Aw(A.aaL(
A.ach.Aex));this.AdW.Aw(A.aaL(A.ach.Aex));},_Done:function(){this.__proto__=C.Ba;
this.Background._Done();this.V._Done();this.Ajr._Done();this.AdV._Done();this.XU.
_Done();this.AdW._Done();this.Mh._Done();C.Ba._Done.call(this);},_ReInit:function(
){C.Ba._ReInit.call(this);this.Background._ReInit();this.V._ReInit();this.Ajr._ReInit(
);this.AdV._ReInit();this.XU._ReInit();this.AdW._ReInit();this.Mh._ReInit();this.
V.R(A.aaR(A.acf.GM));this.V.S(A.aaL(A.fl.Af));this.V.A2(A.aaL(A.fl.Ak));this.V.Cv(
A.aaL(A.fl.Bi));this.CP();},_Mark:function(D){var B;C.Ba._Mark.call(this,D);if((
B=this.Background)._cycle!=D)B._Mark(B._cycle=D);if((B=this.V)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Ajr)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AdV)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.XU)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
AdW)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Mh)._cycle!=D)B._Mark(B._cycle=D);
},_className:"Demonstrator::AnimalMenuItem"};C.Mh={Uy:null,WK:null,Ak2:null,Nj:null
,N7:null,ZL:null,AcB:null,Av0:false,AxO:false,CP:function(){this.Am();},Ai:function(
Ae){var B;A.Core.P.Ai.call(this,Ae);var IA=((Ae&0x40)===0x40);if(IA){this.Nj.L(A.
jb.Bm);this.N7.L(A.jb.Bm);}else{this.Nj.L(A.jb.Text);this.N7.L(A.jb.Text);}if(this.
AxO){this.Nj.R(A.aaR(A.acf.Boc));if(this.Av0){this.Uy.Aw(A.aaL(C.AxP));this.WK.Aw(
A.aaL(C.AxP));}else{this.Uy.Aw(A.aaL(C.Asw));this.WK.Aw(A.aaL(C.Asw));}}else if(
this.Av0){this.Uy.Aw(A.aaL(C.ACz));this.WK.Aw(A.aaL(C.ACz));this.Nj.R(P3);}var A3S=
this.AxO||this.Av0;this.Uy.Z(A3S);this.WK.Z(A3S);this.Nj.Z(A3S);this.ZL.Ar(this.
AxO);},Bne:function(E){if(this.AxO===E)return;this.AxO=E;this.Am();},BmN:function(
E){if(this.Av0===E)return;this.Av0=E;this.Am();},_Init:function(aArg){A.Core.P._Init.
call(this,aArg);A.acg.Ap._Init.call(this.Uy={I:this},0);A.acg.Ap._Init.call(this.
WK={I:this},0);A.acg.Ap._Init.call(this.Ak2={I:this},0);A.kR.CH._Init.call(this.
Nj={I:this},0);A.kR.CH._Init.call(this.N7={I:this},0);A.Core.Bn._Init.call(this.
ZL={I:this},0);A.Core.Bn._Init.call(this.AcB={I:this},0);this.__proto__=C.Mh;var
B;this.H(P4);this.Uy.AZ(0x6);this.Uy.H(CQ);this.Uy.L(A.jb.CS);this.Uy.Cw(1);this.
WK.AZ(0x6);this.WK.H(CQ);this.WK.L(A.jb.Text);this.Ak2.AZ(0xE);this.Ak2.H(Fe);this.
Nj.AZ(0x7);this.Nj.H(Lu);this.Nj.A6(0x11);this.Nj.L(0xFF000000);this.N7.AZ(0x3);
this.N7.H(P5);this.N7.R(A.aaR(A.acf.Temperature));this.N7.A6(0x11);this.N7.L(0xFF000000
);this.ZL.AZ(0x3);this.ZL.JR(JZ);this.ZL.Ks(N_);this.ZL.DC(P6);this.ZL.DM(MG);this.
AcB.AZ(0x3);this.AcB.JR(S8);this.AcB.Ks(US);this.AcB.DC(Z8);this.AcB.DM(W5);this.
J(this.Uy,0);this.J(this.WK,0);this.J(this.Ak2,0);this.J(this.Nj,0);this.J(this.
N7,0);this.J(this.ZL,0);this.J(this.AcB,0);this.Uy.Aw(A.aaL(C.Asw));this.WK.Aw(A.
aaL(C.Asw));this.Ak2.Aw(A.aaL(C.AUV));this.Nj.S(A.aaL(A.fl.Af));this.Nj.A2(A.aaL(
A.fl.Ak));this.Nj.Cv(A.aaL(A.fl.Bi));this.N7.S(A.aaL(A.fl.Af));this.N7.A2(A.aaL(
A.fl.Ak));this.N7.Cv(A.aaL(A.fl.Bi));this.ZL.Lm=[B=A._GetAutoObject(A.aco.Ht),B.
BeL];this.AcB.Lm=[B=A._GetAutoObject(A.aco.Ht),B.Bew];},_Done:function(){this.__proto__=
A.Core.P;this.Uy._Done();this.WK._Done();this.Ak2._Done();this.Nj._Done();this.N7.
_Done();this.ZL._Done();this.AcB._Done();A.Core.P._Done.call(this);},_ReInit:function(
){A.Core.P._ReInit.call(this);this.Uy._ReInit();this.WK._ReInit();this.Ak2._ReInit(
);this.Nj._ReInit();this.N7._ReInit();this.ZL._ReInit();this.AcB._ReInit();this.
N7.R(A.aaR(A.acf.Temperature));this.Nj.S(A.aaL(A.fl.Af));this.Nj.A2(A.aaL(A.fl.Ak
));this.Nj.Cv(A.aaL(A.fl.Bi));this.N7.S(A.aaL(A.fl.Af));this.N7.A2(A.aaL(A.fl.Ak
));this.N7.Cv(A.aaL(A.fl.Bi));this.CP();},_Mark:function(D){var B;A.Core.P._Mark.
call(this,D);if((B=this.Uy)._cycle!=D)B._Mark(B._cycle=D);if((B=this.WK)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.Ak2)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Nj
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.N7)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.ZL)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AcB)._cycle!=D)B._Mark(B._cycle=
D);},_className:"Demonstrator::AnimalItemAction"};C.Yu={CP:function(){this.Am();
},Ai:function(Ae){C.Arg.Ai.call(this,Ae);if(!this.Text.String.length)this.Text.R(
A.aaR(A.acf.Filter));},A73:function(G){var D5=(A.Core.BM.isPrototypeOf(G)?G:null
);if(!!D5)A._GetAutoObject(A.aco.AgL).Ey(D5.DQ);},A71:function(G){A._GetAutoObject(
A.aco.AgL).Delete();},_Init:function(aArg){C.Arg._Init.call(this,aArg);this.__proto__=
C.Yu;this.Ap.Aw(A.aaL(C.Filter));},_ReInit:function(){C.Arg._ReInit.call(this);this.
CP();},_className:"Demonstrator::FilterView"};C.Abh={Dj:null,Yn:null,Sd:null,Yo:
null,DT:null,YH:null,AmI:null,Au:null,O_:null,M3:null,Abg:null,FZ:0,AvL:0,AF6:false
,Ai:function(Ae){A.Core.P.Ai.call(this,Ae);this.Sd.R(this.Au.Format(Is));if(this.
AF6){this.Sd.Z(false);this.YH.Z(false);this.DT.Z(false);this.Yo.Z(false);this.O_.
Ar(true);this.O_.Z(true);this.M3.Cw(2);this.M3.ATc(2);this.M3.H(A.abM(this.M3.M,
this.O_.M[2]));}else{this.Sd.Z(true);this.YH.Z(true);this.DT.Z(true);this.Yo.Z(true
);this.O_.Ar(false);this.O_.Z(false);this.M3.Cw(3);this.M3.ATc(3);this.M3.H(A.abM(
this.M3.M,this.Sd.M[2]));}},BAp:function(G){this.BmU(!this.AF6);},Adx:function(G
){var F;if(!!this.Dj)this.Ul((F=this.Dj,F[1].call(F[0])));},Ab$:function(E){if(A.
aaZ(this.Dj,E))return;if(!!this.Dj)A.z$([this,this.Adx],this.Dj,0);this.Dj=E;if(
!!E)A.zX([this,this.Adx],E,0);if(!!E)A.pe([this,this.Adx],this);},Ul:function(E){
if(this.FZ===E)return;this.FZ=E;this.Au.Initialize(this.FZ);this.BBt(this);this.
Am();},AiJ:function(G){var B;var F;var BQ=this.FZ;var Aje=this.Abg.C4(this.AvL);
this.AJh(Aje);if(this.Au.Year>2100)this.Au.Initialize2(2100,12,31,0,0,0);this.Ul(((
B=(this.Au.JO()|0))<0)?B+0x100000000:B);if(this.FZ!==BQ){if(!!this.Dj)(F=this.Dj
,F[2].call(F[0],this.FZ));A.abo(this.Dj,0);}},Aiu:function(G){var B;var F;var BQ=
this.FZ;var Aje=this.Abg.C4(this.AvL);this.AK6(Aje);if(this.Au.Year<2000)this.Au.
Initialize2(2000,1,1,0,0,0);this.Ul(((B=(this.Au.JO()|0))<0)?B+0x100000000:B);if(
this.FZ!==BQ){if(!!this.Dj)(F=this.Dj,F[2].call(F[0],this.FZ));A.abo(this.Dj,0);
}},Bmq:function(E){if(this.AvL===E)return;this.AvL=E;},BmU:function(E){if(this.AF6===
E)return;this.AF6=E;this.Am();},BA0:function(G){var B;var F;var BQ=this.FZ;this.
Au.Lo(this.O_.AEu());this.Au.Uq(this.O_.AEz());this.Au.Year=this.O_.ArF();this.Ul(((
B=(this.Au.JO()|0))<0)?B+0x100000000:B);if(this.FZ!==BQ){if(!!this.Dj)(F=this.Dj
,F[2].call(F[0],this.FZ));A.abo(this.Dj,0);}},BBt:function(G){this.O_.Lo(this.Au.
GK);this.O_.Uq(this.Au.Hi);this.O_.AkK(this.Au.Year);},AJh:function(AyY){var B;switch(
AyY){case 0:if(this.Au.GK<this.Au.Zs())this.Au.Lo(this.Au.GK+1);else{this.Au.Lo(
1);this.AJh(2);}break;case 1:if((this.Au.GK+7)<=this.Au.Zs())this.Au.Lo(this.Au.
GK+7);else{this.Au.Lo((7-this.Au.Zs())+this.Au.GK);this.AJh(2);}break;case 2:if(
this.Au.Hi<12)this.Au.Uq(this.Au.Hi+1);else{this.Au.Uq(1);this.AJh(3);}break;case
3:this.Au.Year++;break;default:throw new Error(UT+AyY.toFixed());}},AK6:function(
AyY){var B;switch(AyY){case 0:if(this.Au.GK>1)this.Au.Lo(this.Au.GK-1);else{this.
AK6(2);this.Au.Lo(this.Au.Zs());}break;case 1:if((this.Au.GK-7)>0)this.Au.Lo(this.
Au.GK-7);else{this.AK6(2);this.Au.Lo(this.Au.Zs()-(7-this.Au.GK));}break;case 2:
if(this.Au.Hi>1)this.Au.Uq(this.Au.Hi-1);else{this.Au.Uq(12);this.AK6(3);}break;
case 3:this.Au.Year--;break;default:throw new Error(UT+AyY.toFixed());}},Bkz:function(
){return this.AvL;},_Init:function(aArg){A.Core.P._Init.call(this,aArg);A.acg.Text.
_Init.call(this.Yn={I:this},0);A.acg.Text._Init.call(this.Sd={I:this},0);C.Avz._Init.
call(this.Yo={I:this},0);A.acq.DT._Init.call(this.DT={I:this},0);C.Avz._Init.call(
this.YH={I:this},0);A.acg.Ap._Init.call(this.AmI={I:this},0);A.Core.Bs._Init.call(
this.Au={I:this},0);C.ANC._Init.call(this.O_={I:this},0);C.Avz._Init.call(this.M3={
I:this},0);C.Abg._Init.call(this.Abg={I:this},0);this.__proto__=C.Abh;this.H(Z9);
this.Yn.H(W6);this.Yn.A6(0x11);this.Yn.R(A.aaR(A.acf.Date));this.Yn.L(0xFF000000
);this.Sd.H(Z_);this.Sd.A6(0x11);this.Sd.R(W7);this.Sd.L(0xFF000000);this.Yo.H(Z$
);this.Yo.A9P(200);this.DT.H(Aaa);this.DT.ArZ(120);this.DT.GN=30;this.DT.ASQ(A.jb.
CS);this.DT.A9s(A.jb.CS);this.DT.A9w(A.jb.CS);this.DT.ASR(A.jb.Text);this.DT.A9x(
A.jb.Text);this.DT.A9t(A.jb.AV);this.DT.A9y(A.jb.Bm);this.DT.A9v(A.jb.AV);this.DT.
A9u(A.jb.Text);this.YH.H(UU);this.YH.A9P(200);this.AmI.H(W8);this.O_.H(P7);this.
M3.H(Aab);this.M3.Cw(3);this.M3.ATc(3);this.M3.L(A.jb.Text);this.J(this.Yn,0);this.
J(this.Sd,0);this.J(this.Yo,0);this.J(this.DT,0);this.J(this.YH,0);this.J(this.AmI
,0);this.J(this.O_,0);this.J(this.M3,0);this.Yn.S(A.aaL(A.fl.Ak));this.Sd.S(A.aaL(
A.fl.EK));this.Yo.AR=[this,this.Aiu];this.Yo.DB(A.aaL(C.AMY));this.Yo.ATd(A.aaL(
C.AMZ));this.DT.As([this,this.Bkz,this.Bmq]);this.DT.A9E(this.Abg);this.DT.ArR(A.
aaL(A.fl.Ak));this.DT.AwG(A.aaL(A.fl.Ak));this.YH.AR=[this,this.AiJ];this.YH.DB(
A.aaL(C.AM0));this.YH.ATd(A.aaL(C.AM1));this.AmI.Aw(A.aaL(C.AP2));this.O_.Di=[this
,this.BA0];this.M3.AR=[this,this.BAp];this.M3.DB(A.aaL(A.ach.Ajw));this.M3.ATd(A.
aaL(A.ach.Ajw));},_Done:function(){this.__proto__=A.Core.P;this.Yn._Done();this.
Sd._Done();this.Yo._Done();this.DT._Done();this.YH._Done();this.AmI._Done();this.
Au._Done();this.O_._Done();this.M3._Done();this.Abg._Done();A.Core.P._Done.call(
this);},_ReInit:function(){A.Core.P._ReInit.call(this);this.Yn._ReInit();this.Sd.
_ReInit();this.Yo._ReInit();this.DT._ReInit();this.YH._ReInit();this.AmI._ReInit(
);this.Au._ReInit();this.O_._ReInit();this.M3._ReInit();this.Abg._ReInit();this.
Yn.R(A.aaR(A.acf.Date));this.Yn.S(A.aaL(A.fl.Ak));this.Sd.S(A.aaL(A.fl.EK));this.
DT.ArR(A.aaL(A.fl.Ak));this.DT.AwG(A.aaL(A.fl.Ak));},_Mark:function(D){var B;A.Core.
P._Mark.call(this,D);if((B=this.Dj)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((
B=this.Yn)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Sd)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Yo)._cycle!=D)B._Mark(B._cycle=D);if((B=this.DT)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.YH)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AmI)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.Au)._cycle!=D)B._Mark(B._cycle=D);if((B=this.O_
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.M3)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Abg)._cycle!=D)B._Mark(B._cycle=D);},_className:"Demonstrator::DateSelector"
};C.Avz={C8:null,Axl:null,ANS:null,AR:null,Bo:null,Dl:null,CR:null,Hw:null,YB:null
,APF:0,TR:0,ATT:0,AQ:0xFFFFFFFF,A17:false,LI:false,KE:false,Qp:false,Ai:function(
Ae){var B;A.acn.Ahx.Ai.call(this,Ae);var Hd=((Ae&0x10)===0x10);var Fu=((Ae&0x20)===
0x20);var GE=this.CR.Down&&this.CR.YK;if(!Hd)this.Hw.Aw(this.ANS);else if(GE){this.
Hw.Aw(this.Axl);this.Hw.Cw(this.ATT);}else{this.Hw.Aw(this.C8);this.Hw.Cw(this.TR
);}this.Hw.L(this.AQ);this.LI=Hd;this.KE=Fu;this.Qp=GE;},Qo:function(G){this.Am(
);A.pe(this.AR,this);},AiU:function(G){if(this.CR.Down)return;if(this.Dl.Acl)return;
this.Am();if(this.Bo.Bw){A.pe(this.AR,this);this.Bo.Ar(false);}this.Bo.Ar(true);
},Bet:function(G){this.Am();},AAC:function(G){if(!this.CR.YK)return;if(this.CR.NF
)return;if((this.YB.VF<=0)||(this.CR.Jr<this.YB.VF)){if(this.CR.Jr>=this.Bo.VF)A.
pe(this.AR,this);else this.Bo.Ar(true);}this.YB.Ar(false);},AAB:function(G){this.
YB.Ar(true);if(this.Bo.Bw){A.pe(this.AR,this);this.Bo.Ar(false);}},DB:function(E
){if(this.C8===E)return;this.C8=E;this.Am();},ATd:function(E){if(this.Axl===E)return;
this.Axl=E;this.Am();},A26:function(G){if(!this.CR.YK)return;if(this.CR.NF)return;
if((this.APF>=0)&&this.A17){this.A17=false;this.YB.Ar(true);A.pe(this.AR,this);}
},A9P:function(E){if(this.APF===E)return;this.APF=E;this.YB.WC(E);},BzU:function(
G){this.A17=true;},Cw:function(E){if(this.TR===E)return;this.TR=E;this.Am();},ATc:
function(E){if(this.ATT===E)return;this.ATT=E;this.Am();},L:function(E){if(this.
AQ===E)return;this.AQ=E;this.Am();},_Init:function(aArg){A.acn.Ahx._Init.call(this
,aArg);A.Core.Timer._Init.call(this.Bo={I:this},0);A.Core.BM._Init.call(this.Dl={
I:this},0);A.Core.Bn._Init.call(this.CR={I:this},0);A.acg.Ap._Init.call(this.Hw={
I:this},0);A.Core.Timer._Init.call(this.YB={I:this},0);this.__proto__=C.Avz;this.
H(O2);this.Bo.PP(0);this.Bo.WC(50);this.Dl.Filter=149;this.CR.AZ(0x3F);this.CR.JR(
Rl);this.CR.Ks(W9);this.CR.DC(W_);this.CR.DM(JZ);this.CR.Afe=0xF;this.CR.AFo(100
);this.Hw.AZ(0x3F);this.Hw.H(O2);this.Hw.A6(0x12);this.YB.PP(0);this.J(this.CR,0
);this.J(this.Hw,0);this.Bo.Mz=[this,this.Qo];this.Dl.BN=[this,this.AiU];this.CR.
AEF=[this,this.Bet];this.CR.Av5=[this,this.Bet];this.CR.D1=[this,this.A26];this.
CR.Lm=[this,this.AAC];this.CR.BN=[this,this.AAB];this.Hw.Aw(A.aaL(A.aci.TM));this.
C8=A.aaL(A.aci.TM);this.Axl=A.aaL(A.aci.TM);this.ANS=A.aaL(A.aci.TM);this.YB.Mz=[
this,this.BzU];},_Done:function(){this.__proto__=A.acn.Ahx;this.Bo._Done();this.
Dl._Done();this.CR._Done();this.Hw._Done();this.YB._Done();A.acn.Ahx._Done.call(
this);},_ReInit:function(){A.acn.Ahx._ReInit.call(this);this.Bo._ReInit();this.Dl.
_ReInit();this.CR._ReInit();this.Hw._ReInit();this.YB._ReInit();},_Mark:function(
D){var B;A.acn.Ahx._Mark.call(this,D);if((B=this.C8)&&(B._cycle!=D))B._Mark(B._cycle=
D);if((B=this.Axl)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.ANS)&&(B._cycle
!=D))B._Mark(B._cycle=D);if((B=this.AR)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D
);if((B=this.Bo)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Dl)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.CR)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Hw)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.YB)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Demonstrator::IconButton"};C.AMC={Pv:null,V:null,Aeq:null,_Init:function(aArg){
C.FB._Init.call(this,aArg);A.acg.AK._Init.call(this.Pv={I:this},0);A.acg.Text._Init.
call(this.V={I:this},0);C.Aeq._Init.call(this.Aeq={I:this},0);this.__proto__=C.AMC;
this.H(W$);this.Pv.AZ(0x1D);this.Pv.H(Cc);this.Pv.L(0xFFE6E6E6);this.V.AZ(0x1D);
this.V.H(Xa);this.V.A6(0x11);this.V.R(A.aaR(A.acf.A4S));this.V.L(0xFF000000);this.
Aeq.H(Aac);this.J(this.Pv,0);this.J(this.V,0);this.J(this.Aeq,0);this.V.S(A.aaL(
A.fl.Af));},_Done:function(){this.__proto__=C.FB;this.Pv._Done();this.V._Done();
this.Aeq._Done();C.FB._Done.call(this);},_ReInit:function(){C.FB._ReInit.call(this
);this.Pv._ReInit();this.V._ReInit();this.Aeq._ReInit();this.V.R(A.aaR(A.acf.A4S
));this.V.S(A.aaL(A.fl.Af));},_Mark:function(D){var B;C.FB._Mark.call(this,D);if((
B=this.Pv)._cycle!=D)B._Mark(B._cycle=D);if((B=this.V)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Aeq)._cycle!=D)B._Mark(B._cycle=D);},_className:"Demonstrator::AnimalsHeader"
};C.Aux={Pv:null,V:null,AeQ:null,AeO:null,Bn:null,DK:Xb,Ahk:false,Ai:function(Ae
){C.FB.Ai.call(this,Ae);if(this.Ahk){this.AeO.Z(true);this.AeQ.Z(false);}else{this.
AeO.Z(false);this.AeQ.Z(true);}},BAL:function(G){if(this.Ahk)A.pe(this.Akw,this);
else A.pe(this.Akx,this);this.Ar0(!this.Ahk);},T:function(E){if(this.DK===E)return;
this.DK=E;this.V.R(E);},Ar0:function(E){if(this.Ahk===E)return;this.Ahk=E;this.Am(
);},_Init:function(aArg){C.FB._Init.call(this,aArg);A.acg.AK._Init.call(this.Pv={
I:this},0);A.acg.Text._Init.call(this.V={I:this},0);A.acg.Ap._Init.call(this.AeQ={
I:this},0);A.acg.Ap._Init.call(this.AeO={I:this},0);A.Core.Bn._Init.call(this.Bn={
I:this},0);this.__proto__=C.Aux;this.H(Cc);this.Pv.AZ(0x1D);this.Pv.H(Cc);this.Pv.
L(0xFFE6E6E6);this.V.AZ(0x1D);this.V.H(Xc);this.V.A6(0x11);this.V.R(Xb);this.V.L(
0xFF000000);this.AeQ.H(S9);this.AeQ.Z(false);this.AeO.AZ(0x3A);this.AeO.H(S9);this.
Bn.JR(JZ);this.Bn.Ks(UV);this.Bn.DC(UW);this.Bn.DM(MG);this.J(this.Pv,0);this.J(
this.V,0);this.J(this.AeQ,0);this.J(this.AeO,0);this.J(this.Bn,0);this.V.S(A.aaL(
A.fl.Af));this.AeQ.Aw(A.aaL(C.AMF));this.AeO.Aw(A.aaL(C.Ajv));this.Bn.Lm=[this,this.
BAL];},_Done:function(){this.__proto__=C.FB;this.Pv._Done();this.V._Done();this.
AeQ._Done();this.AeO._Done();this.Bn._Done();C.FB._Done.call(this);},_ReInit:function(
){C.FB._ReInit.call(this);this.Pv._ReInit();this.V._ReInit();this.AeQ._ReInit();
this.AeO._ReInit();this.Bn._ReInit();this.V.S(A.aaL(A.fl.Af));},_Mark:function(D
){var B;C.FB._Mark.call(this,D);if((B=this.Pv)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.V)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AeQ)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.AeO)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Bn)._cycle!=D)B._Mark(
B._cycle=D);},_className:"Demonstrator::AccordionHeader"};C.Ba={AX:null,AR:null,
CR:null,Hq:-1,Zw:function(E){if(this.AX===E)return;this.AX=E;},Ce:function(Ad){A.
ab5("%s",AcQ);},Zy:function(E){if(A.aa0(this.AR,E))return;this.AR=E;},AAC:function(
G){if(!this.CR.YK)return;if(this.CR.NF)return;A.pe(this.AR,this);},_Init:function(
aArg){A.Core.P._Init.call(this,aArg);A.Core.Bn._Init.call(this.CR={I:this},0);this.
__proto__=C.Ba;this.H(Cc);this.CR.AZ(0x3F);this.CR.JR(MG);this.CR.Ks(UW);this.CR.
DC(UV);this.CR.DM(JZ);this.CR.Afe=0xF;this.CR.AFo(100);this.J(this.CR,0);this.CR.
Lm=[this,this.AAC];},_Done:function(){this.__proto__=A.Core.P;this.CR._Done();A.
Core.P._Done.call(this);},_ReInit:function(){A.Core.P._ReInit.call(this);this.CR.
_ReInit();},_Mark:function(D){var B;A.Core.P._Mark.call(this,D);if((B=this.AX)&&(
B._cycle!=D))B._Mark(B._cycle=D);if((B=this.AR)&&((B=B[0])._cycle!=D))B._Mark(B.
_cycle=D);if((B=this.CR)._cycle!=D)B._Mark(B._cycle=D);},_className:"Demonstrator::ListItem"
};C.FB={AR8:null,Akx:null,Akw:null,BmR:function(E){if(A.aa0(this.AR8,E))return;this.
AR8=E;},A9Z:function(E){if(A.aa0(this.Akx,E))return;this.Akx=E;},A9Y:function(E){
if(A.aa0(this.Akw,E))return;this.Akw=E;},_Init:function(aArg){A.Core.P._Init.call(
this,aArg);this.__proto__=C.FB;this.H(Cc);},_Mark:function(D){var B;A.Core.P._Mark.
call(this,D);if((B=this.AR8)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.
Akx)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.Akw)&&((B=B[0])._cycle
!=D))B._Mark(B._cycle=D);},_className:"Demonstrator::ListHeader"};C.ANC={Di:null
,Aa8:null,WX:null,WW:null,WV:null,Na:null,M$:null,KQ:null,LI:false,KE:false,BBD:
false,Ai:function(Ae){var B;A.acn.Ahv.Ai.call(this,Ae);var Hd=((Ae&0x10)===0x10);
var Fu=((Ae&0x20)===0x20);var Bdt=(this.WV.ZQ||this.WW.ZQ)||this.WX.ZQ;if(Bdt)this.
Aa8.L(A.jb.Text);else this.Aa8.L(A.jb.Bc);this.LI=Hd;this.KE=Fu;this.BBD=Bdt;},AAx:
function(G){this.Am();if((!this.WV.ZQ&&!this.WW.ZQ)&&!this.WX.ZQ){var Vb=this.AKa(
this.AEz(),this.ArF());var Add=this.AEu();this.KQ.Jw(Vb);if(Add>Vb)this.Lo(Vb);A.
pe(this.Di,this);}},A3p:function(G){this.Am();},Bld:function(G){var B;var Gh=this.
Na.G4;var Cz=(A.acg.Text.isPrototypeOf(B=this.Na.Ch)?B:null);if(!Cz)return;Cz.R(
A.abl(Gh+1900,4,10));Cz.S(A.aaL(A.fl.Af));Cz.L(A.jb.Text);Cz.A6(0x12);Cz.H(A.abK(
Cz.M,[(B=this.Na.M)[2]-B[0],this.Na.GN]));},Blc:function(G){var B;var Gh=this.M$.
G4;var Cz=(A.acg.Text.isPrototypeOf(B=this.M$.Ch)?B:null);if(!Cz)return;Cz.R(A.abl(
Gh+1,2,10)+S_);Cz.S(A.aaL(A.fl.Af));Cz.L(A.jb.Text);Cz.A6(0x12);Cz.H(A.abK(Cz.M,[(
B=this.M$.M)[2]-B[0],this.M$.GN]));},Bla:function(G){var B;var Gh=this.KQ.G4;var
Cz=(A.acg.Text.isPrototypeOf(B=this.KQ.Ch)?B:null);if(!Cz)return;Cz.R(A.abl(Gh+1
,2,10)+S_);Cz.S(A.aaL(A.fl.Af));Cz.L(A.jb.Text);Cz.A6(0x12);Cz.H(A.abK(Cz.M,[(B=
this.KQ.M)[2]-B[0],this.KQ.GN]));},ArF:function(){return 1900+((((-this.Na.Br/this.
Na.GN)|0)+2)%200);},AkK:function(E){if(E<1900)E=1900;if(E>2100)E=2100;this.Na.Gd(((
E-1900)-2)*-this.Na.GN);var Vb=this.AKa(this.AEz(),E);this.KQ.Jw(Vb);if(this.AEu(
)>Vb)this.Lo(Vb);},AEz:function(){return 1+((((-this.M$.Br/this.M$.GN)|0)+2)%12);
},Uq:function(E){if(E<1)E=1;if(E>12)E=12;this.M$.Gd(((E-1)-2)*-this.M$.GN);var Vb=
this.AKa(E,this.ArF());this.KQ.Jw(Vb);if(this.AEu()>Vb)this.Lo(Vb);},AEu:function(
){return 1+((((-this.KQ.Br/this.KQ.GN)|0)+2)%this.KQ.AY);},Lo:function(E){var Vb=
this.AKa(this.AEz(),this.ArF());if(E<1)E=1;if(E>Vb)E=Vb;this.KQ.Gd(((E-2)-1)*-this.
KQ.GN);},AKa:function(AfJ,Ac6){if(AfJ===2){if(!(Ac6%4)&&(!!(Ac6%100)||!(Ac6%400)
))return 29;else return 28;}else if((((AfJ===4)||(AfJ===6))||(AfJ===9))||(AfJ===
11))return 30;else return 31;},_Init:function(aArg){A.acn.Ahv._Init.call(this,aArg
);A.acg.BU._Init.call(this.Aa8={I:this},0);A.Core.H9._Init.call(this.WX={I:this}
,0);A.Core.H9._Init.call(this.WW={I:this},0);A.Core.H9._Init.call(this.WV={I:this
},0);A.Core.CM._Init.call(this.Na={I:this},0);A.Core.CM._Init.call(this.M$={I:this
},0);A.Core.CM._Init.call(this.KQ={I:this},0);this.__proto__=C.ANC;this.H(Aad);this.
Aa8.H(Afz);this.Aa8.Ng(3);this.Aa8.L(0xFFE1E1E1);this.Aa8.Z(true);this.WX.H(Aae);
this.WX.ATp(Xd);this.WX.ASX(0.2);this.WW.H(Aaf);this.WW.ATp(Xd);this.WW.ASX(0.2);
this.WV.H(Aag);this.WV.ATp(Xd);this.WV.ASX(0.2);this.Na.H(Aae);this.Na.ASV(true);
this.Na.Gd(60);this.Na.Ae6(30);this.Na.Jw(200);this.M$.H(Aaf);this.M$.ASV(true);
this.M$.Gd(60);this.M$.Ae6(30);this.M$.Jw(12);this.KQ.H(Aag);this.KQ.ASV(true);this.
KQ.Gd(60);this.KQ.Ae6(30);this.KQ.Jw(31);this.J(this.Aa8,0);this.J(this.WX,0);this.
J(this.WW,0);this.J(this.WV,0);this.J(this.Na,0);this.J(this.M$,0);this.J(this.KQ
,0);this.WX.Zr=[this,this.AAx];this.WX.SJ=[this,this.A3p];this.WW.Zr=[this,this.
AAx];this.WW.SJ=[this,this.A3p];this.WV.Zr=[this,this.AAx];this.WV.SJ=[this,this.
A3p];this.Na.Hk=[this,this.Bld];this.Na.Aw2(this.WX);this.M$.Hk=[this,this.Blc];
this.M$.Aw2(this.WW);this.KQ.Hk=[this,this.Bla];this.KQ.Aw2(this.WV);},_Done:function(
){this.__proto__=A.acn.Ahv;this.Aa8._Done();this.WX._Done();this.WW._Done();this.
WV._Done();this.Na._Done();this.M$._Done();this.KQ._Done();A.acn.Ahv._Done.call(
this);},_ReInit:function(){A.acn.Ahv._ReInit.call(this);this.Aa8._ReInit();this.
WX._ReInit();this.WW._ReInit();this.WV._ReInit();this.Na._ReInit();this.M$._ReInit(
);this.KQ._ReInit();},_Mark:function(D){var B;A.acn.Ahv._Mark.call(this,D);if((B=
this.Di)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.Aa8)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.WX)._cycle!=D)B._Mark(B._cycle=D);if((B=this.WW)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.WV)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Na
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.M$)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.KQ)._cycle!=D)B._Mark(B._cycle=D);},_className:"Demonstrator::DatePicker"
};C.AHg={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/DemonstratorWhiteTile.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[40,40],FrameDelay:0,_this:
null}};C.AVI={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/DemonstratorWhiteTileSmall.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[40,40],FrameDelay:0,_this:
null}};C.AhH={_Init:function(aArg){A.Core.P._Init.call(this,aArg);this.__proto__=
C.AhH;this.H(E7);},_className:"Demonstrator::SelectionAreaContent"};C.AMv={Y:null
,Vv:null,TA:null,BBc:function(G){var B;this.TA.H(A.abI(this.TA.M,((B=this.M)[3]-
B[1])-((B=this.Vv.M)[3]-B[1])));},_Init:function(aArg){C.AhH._Init.call(this,aArg
);A.Core.Y._Init.call(this.Y={I:this},0);C.ALZ._Init.call(this.Vv={I:this},0);C.
AVr._Init.call(this.TA={I:this},0);this.__proto__=C.AMv;this.Y.AZ(0x3F);this.Y.H(
E7);this.Y.JP(1);this.Vv.H(AhV);this.Vv.Aj(true);this.Vv.Ar0(true);this.TA.AZ(0x3
);this.TA.H(J0);this.TA.Aj(true);this.TA.NZ(C.AMo);this.TA.BmL(C.AMC);this.J(this.
Y,0);this.J(this.Vv,0);this.J(this.TA,0);this.Bb(this.TA);this.Y.El=[this,this.BBc
];this.TA.Zw(A._GetAutoObject(A.aco.Aqk));},_Done:function(){this.__proto__=C.AhH;
this.Y._Done();this.Vv._Done();this.TA._Done();C.AhH._Done.call(this);},_ReInit:
function(){C.AhH._ReInit.call(this);this.Y._ReInit();this.Vv._ReInit();this.TA._ReInit(
);},_Mark:function(D){var B;C.AhH._Mark.call(this,D);if((B=this.Y)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Vv)._cycle!=D)B._Mark(B._cycle=D);if((B=this.TA)._cycle!=
D)B._Mark(B._cycle=D);},_className:"Demonstrator::AnimalSelectionActions"};C.Vv={
_Init:function(aArg){C.Aux._Init.call(this,aArg);this.__proto__=C.Vv;this.T(A.aaR(
A.acf.A5K));},_ReInit:function(){C.Aux._ReInit.call(this);this.T(A.aaR(A.acf.A5K
));},_className:"Demonstrator::ActionsHeader"};C.ALZ={Background:null,XT:null,Y:
null,AcA:null,Acp:null,ZK:null,Acz:null,Akf:null,Akg:null,Akh:null,Aki:null,Akj:
null,Ahk:false,Init:function(aArg){var B;A.zX([this,this.BeM],[B=A._GetAutoObject(
A.aco.Ht),B.AEB,B.AFB],0);A.pe([this,this.BeM],this);},Akx:function(G){this.Ar0(
true);},Akw:function(G){this.Ar0(false);},Ar0:function(E){if(this.Ahk===E)return;
this.Ahk=E;this.XT.Ar0(E);A.pe([this,this.BeX],this);},BeM:function(G){var BBk=A.
_GetAutoObject(A.aco.Ht).AhC===2;A._GetAutoObject(A.Device.Helper).JW(this.ZK,BBk
);},BeX:function(G){var B;if(this.Ahk)this.H(A.abI(this.M,(B=this.XT.M)[3]-B[1])
);else this.H(A.abI(this.M,((B=this.XT.M)[3]-B[1])+((B=this.Y.Db(0x401))[3]-B[1]
)));},_Init:function(aArg){A.Core.P._Init.call(this,aArg);A.acg.AK._Init.call(this.
Background={I:this},0);C.Vv._Init.call(this.XT={I:this},0);A.Core.Y._Init.call(this.
Y={I:this},0);C.AcA._Init.call(this.AcA={I:this},0);C.Acp._Init.call(this.Acp={I:
this},0);C.ZK._Init.call(this.ZK={I:this},0);C.Acz._Init.call(this.Acz={I:this},
0);A.acg.C5._Init.call(this.Akf={I:this},0);A.acg.C5._Init.call(this.Akg={I:this
},0);A.acg.C5._Init.call(this.Akh={I:this},0);A.acg.C5._Init.call(this.Aki={I:this
},0);A.acg.C5._Init.call(this.Akj={I:this},0);this.__proto__=C.ALZ;this.H(Aah);this.
Background.AZ(0x3F);this.Background.H(Aah);this.XT.AZ(0x1D);this.XT.H(Cc);this.Y.
H(Lv);this.Y.JP(1);this.AcA.H(AhW);this.AcA.Aj(true);this.Acp.H(Aof);this.Acp.Aj(
true);this.ZK.H(N$);this.ZK.Aj(true);this.Acz.H(Xe);this.Acz.Aj(true);this.Akf.DC(
UW);this.Akf.DM(MG);this.Akf.L(A.jb.Bc);this.Akg.DC(Aog);this.Akg.DM(AhX);this.Akg.
L(A.jb.Bc);this.Akh.DC(AhY);this.Akh.DM(Rm);this.Akh.L(A.jb.Bc);this.Aki.DC(UX);
this.Aki.DM(Aoh);this.Aki.L(A.jb.Bc);this.Akj.DC(Aoi);this.Akj.DM(Aoj);this.Akj.
L(A.jb.Bc);this.J(this.Background,0);this.J(this.XT,0);this.J(this.Y,0);this.J(this.
AcA,0);this.J(this.Acp,0);this.J(this.ZK,0);this.J(this.Acz,0);this.J(this.Akf,0
);this.J(this.Akg,0);this.J(this.Akh,0);this.J(this.Aki,0);this.J(this.Akj,0);this.
XT.A9Z([this,this.Akx]);this.XT.A9Y([this,this.Akw]);this.Y.El=[this,this.BeX];this.
Init(aArg);},_Done:function(){this.__proto__=A.Core.P;this.Background._Done();this.
XT._Done();this.Y._Done();this.AcA._Done();this.Acp._Done();this.ZK._Done();this.
Acz._Done();this.Akf._Done();this.Akg._Done();this.Akh._Done();this.Aki._Done();
this.Akj._Done();A.Core.P._Done.call(this);},_ReInit:function(){A.Core.P._ReInit.
call(this);this.Background._ReInit();this.XT._ReInit();this.Y._ReInit();this.AcA.
_ReInit();this.Acp._ReInit();this.ZK._ReInit();this.Acz._ReInit();this.Akf._ReInit(
);this.Akg._ReInit();this.Akh._ReInit();this.Aki._ReInit();this.Akj._ReInit();},
_Mark:function(D){var B;A.Core.P._Mark.call(this,D);if((B=this.Background)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.XT)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
Y)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AcA)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Acp)._cycle!=D)B._Mark(B._cycle=D);if((B=this.ZK)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Acz)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Akf)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Akg)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Akh)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.Aki)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
Akj)._cycle!=D)B._Mark(B._cycle=D);},_className:"Demonstrator::ActionsMenu"};C.Jo={
YE:null,Ag8:null,Bn:null,C5:null,Af9:function(G){},A0n:function(s){this.Af9(s);}
,_Init:function(aArg){A.Core.P._Init.call(this,aArg);A.acg.Ap._Init.call(this.YE={
I:this},0);A.acg.Ap._Init.call(this.Ag8={I:this},0);A.Core.Bn._Init.call(this.Bn={
I:this},0);A.acg.C5._Init.call(this.C5={I:this},0);this.__proto__=C.Jo;this.H(Cc
);this.YE.H(Aok);this.YE.L(A.jb.Text);this.Ag8.H(AfA);this.Ag8.L(A.jb.Text);this.
Ag8.Cw(0);this.Bn.JR(JZ);this.Bn.Ks(N_);this.Bn.DC(P6);this.Bn.DM(MG);this.C5.DC(
P6);this.C5.DM(N_);this.C5.L(A.jb.Bc);this.J(this.YE,0);this.J(this.Ag8,0);this.
J(this.Bn,0);this.J(this.C5,0);this.YE.Aw(A.aaL(A.aci.TM));this.Ag8.Aw(A.aaL(A.aci.
ATJ));this.Bn.BN=[this,this.A0n];},_Done:function(){this.__proto__=A.Core.P;this.
YE._Done();this.Ag8._Done();this.Bn._Done();this.C5._Done();A.Core.P._Done.call(
this);},_ReInit:function(){A.Core.P._ReInit.call(this);this.YE._ReInit();this.Ag8.
_ReInit();this.Bn._ReInit();this.C5._ReInit();},_Mark:function(D){var B;A.Core.P.
_Mark.call(this,D);if((B=this.YE)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ag8).
_cycle!=D)B._Mark(B._cycle=D);if((B=this.Bn)._cycle!=D)B._Mark(B._cycle=D);if((B=
this.C5)._cycle!=D)B._Mark(B._cycle=D);},_className:"Demonstrator::ActionsItem"};
C.Acp={AGr:null,DT:null,YD:null,BU:null,M7:null,AhD:null,ANw:0,Init:function(aArg
){var B;A.zX([this,this.BeW],[B=A._GetAutoObject(A.aco.Ht),B.AEB,B.AFB],0);A.pe([
this,this.BeW],this);},Af9:function(G){var Iy=A.ab0(this.YD.String,0,10);var Ih=
false;switch(A._GetAutoObject(A.aco.Ht).AhC){case 2:Ih=A._GetAutoObject(A.aco.Ht
).BBA(Iy);break;case 0:case 1:Ih=A._GetAutoObject(A.aco.Ht).BfV(Iy);break;default:
A.ab5("%s%e",Ale,A._GetAutoObject(A.aco.Ht).AhC);}if(Ih){Iy=Iy+1;this.YD.R(Iy.toFixed(
));}},BeW:function(G){var AJe=null;var AKq=0;switch(A._GetAutoObject(A.aco.Ht).AhC
){case 2:{AJe=A.aaL(A.ach.Avw);AKq=276;}break;case 0:{AJe=A.aaL(A.ach.Aj1);AKq=900;
}break;case 1:{AJe=A.aaL(C.AxP);AKq=276;}break;default:A.ab5("%s%e",Ale,A._GetAutoObject(
A.aco.Ht).AhC);}this.YD.R(((AKq*1000000000000)+(A.abY(this.YD.String,0,10)%1000000000000
)).toFixed());this.YE.Aw(AJe);},BlC:function(E){var F;if(this.ANw===E)return;this.
ANw=E;if(!!this.AGr)(F=this.AGr,F[2].call(F[0],E));},Bkl:function(){return this.
ANw;},_Init:function(aArg){C.Jo._Init.call(this,aArg);A.acq.DT._Init.call(this.DT={
I:this},0);C.Aks._Init.call(this.YD={I:this},0);A.acg.BU._Init.call(this.BU={I:this
},0);A.acg.Ap._Init.call(this.M7={I:this},0);C.AhD._Init.call(this.AhD={I:this},
0);this.__proto__=C.Acp;var B;this.DT.H(Aol);this.DT.ArZ(120);this.DT.GN=30;this.
DT.ASQ(A.jb.Rg);this.DT.A9s(A.jb.CS);this.DT.A9w(A.jb.CS);this.DT.ASR(A.jb.Rg);this.
DT.A9x(A.jb.Text);this.DT.A9t(A.jb.AV);this.DT.A9y(A.jb.Bm);this.DT.A9v(A.jb.AV);
this.DT.A9u(A.jb.Rg);this.Bn.JR(Ax2);this.Bn.DM(O3);this.YD.H(Rn);this.YD.R(Ax3);
this.YD.L(A.jb.Text);this.BU.H(UY);this.BU.Ng(2);this.BU.L(A.jb.Text);this.M7.H(
AsX);this.M7.L(A.jb.Text);this.M7.A6(0xC);this.M7.Cw(3);this.J(this.DT,-2);this.
J(this.YD,-1);this.J(this.BU,0);this.J(this.M7,0);this.DT.As([this,this.Bkl,this.
BlC]);this.DT.A9E(this.AhD);this.DT.ArR(A.aaL(A.fl.Bi));this.DT.AwG(A.aaL(A.fl.Bi
));this.M7.Aw(A.aaL(A.ach.Ajw));this.AGr=[B=A._GetAutoObject(A.aco.Ht),B.AEB,B.AFB
];this.Init(aArg);},_Done:function(){this.__proto__=C.Jo;this.DT._Done();this.YD.
_Done();this.BU._Done();this.M7._Done();this.AhD._Done();C.Jo._Done.call(this);}
,_ReInit:function(){C.Jo._ReInit.call(this);this.DT._ReInit();this.YD._ReInit();
this.BU._ReInit();this.M7._ReInit();this.AhD._ReInit();this.DT.ArR(A.aaL(A.fl.Bi
));this.DT.AwG(A.aaL(A.fl.Bi));},_Mark:function(D){var B;C.Jo._Mark.call(this,D);
if((B=this.AGr)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.DT)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.YD)._cycle!=D)B._Mark(B._cycle=D);if((B=this.BU
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.M7)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.AhD)._cycle!=D)B._Mark(B._cycle=D);},_className:"Demonstrator::ScanIdAction"
};C.AcA={UJ:null,OS:null,A3_:0,Init:function(aArg){var B;A.zX([this,this.BAv],[B=
A._GetAutoObject(A.aco.Ht),B.ASx,B.ATi],0);A.zX([this,this.AAF],[B=A._GetAutoObject(
A.Device.Device),B.ArC,B.Ati],0);A.pe([this,this.AAF],this);},Ai:function(Ae){C.
Jo.Ai.call(this,Ae);this.OS.Z(!A._GetAutoObject(A.aco.Ht).Axm);},Af9:function(G){
var B;A._GetAutoObject(A.aco.Ht).Bew(this);},AAF:function(G){if(A._GetAutoObject(
A.Device.Device).TemperatureUnit!==this.A3_){switch(A._GetAutoObject(A.Device.Device
).TemperatureUnit){case 0:this.OS.R(A.abk(A._GetAutoObject(A.aco.Ht).WT/100,0,1)
);break;case 1:{var Aum=A._GetAutoObject(A.Device.Converter).AUZ(A._GetAutoObject(
A.aco.Ht).WT/100,0,A._GetAutoObject(A.Device.Device).TemperatureUnit);this.OS.R(
A.abk(Aum,0,1));}break;default:A.ab5("%s%e",Ax4,A._GetAutoObject(A.Device.Device
).TemperatureUnit);}this.A3_=A._GetAutoObject(A.Device.Device).TemperatureUnit;}
},BAe:function(G){var B;var Ago=A.abX(this.OS.String,0);Ago=A._GetAutoObject(A.Device.
Converter).AUZ(Ago,A._GetAutoObject(A.Device.Device).TemperatureUnit,0);Ago*=100;
A._GetAutoObject(A.aco.Ht).AFI(Math.round(Ago)|0);},BAv:function(G){this.Am();},
_Init:function(aArg){C.Jo._Init.call(this,aArg);A.acr.UJ._Init.call(this.UJ={I:this
},0);C.OS._Init.call(this.OS={I:this},0);this.__proto__=C.AcA;var B;this.UJ.H(Ax5
);this.UJ.A9T(A.aaR(A.acf.A4Z));this.OS.H(Ax6);this.OS.R(Aom);this.OS.L(A.jb.Text
);this.OS.BlE(true);this.A3_=A._GetAutoObject(A.Device.Device).TemperatureUnit;this.
J(this.UJ,0);this.J(this.OS,0);this.YE.Aw(A.aaL(A.ach.AbG));this.UJ.As([B=A._GetAutoObject(
A.aco.Ht),B.ASx,B.ATi]);this.UJ.OnSetAppearance(A._GetAutoObject(A.acx.AuS));this.
OS.Di=[this,this.BAe];this.Init(aArg);},_Done:function(){this.__proto__=C.Jo;this.
UJ._Done();this.OS._Done();C.Jo._Done.call(this);},_ReInit:function(){C.Jo._ReInit.
call(this);this.UJ._ReInit();this.OS._ReInit();this.UJ.A9T(A.aaR(A.acf.A4Z));},_Mark:
function(D){var B;C.Jo._Mark.call(this,D);if((B=this.UJ)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.OS)._cycle!=D)B._Mark(B._cycle=D);},_className:"Demonstrator::TemperatureAction"
};C.Arg={Q:null,BU:null,Bn:null,AgI:null,Am_:null,Am9:null,Arl:null,Text:null,Hn:
null,Ap:null,CX:null,Ark:null,Arm:null,Apk:false,Bl:function(aSize){this.Hn.H(A.
abK(this.Hn.M,aSize));this.BU.Axu(1);this.BU.Js(0,40);this.BU.Fk(0,aSize[0]-20,20
,12.5,12.5,-90,90,10);this.BU.Fk(0,20,20,12.5,12.5,90,270,10);this.BU.VN(0);},Ai:
function(Ae){var B;var F;A.Core.P.Ai.call(this,Ae);var IA=((Ae&0x40)===0x40);if(
IA){if(!!this.Q)this.Text.R((F=this.Q,F[1].call(F[0])));this.AgI.Ar(true);this.Ap.
Z(false);}else{if(!!this.Q)this.Text.R((F=this.Q,F[1].call(F[0])));this.AgI.Ar(false
);this.CX.Z(false);this.Ap.Z(true);}this.Apk=IA;},Af9:function(G){var B;if(!((this.
U&0x80)===0x80))this.Il().AMP(this);},A73:function(G){},BaA:function(s){this.A73(
s);},BjN:function(G){var B;var F;if(!this.Q||!(F=this.Q,F[1].call(F[0])).length)
this.CX.H(A.abM(this.CX.M,A.aaI(this.Text.M)[0]));else{this.CX.H(A.abM(this.CX.M
,this.Text.AON(0)[2]+2));this.CX.H(A.abO(this.CX.M,this.Text.AON(0)[1]));this.CX.
H(A.abI(this.CX.M,(B=this.Text.AON(0))[3]-B[1]));}this.Ap.H(A.abM(this.Ap.M,this.
Text.M[0]-((B=this.Ap.M)[2]-B[0])));},A71:function(G){},Baz:function(s){this.A71(
s);},As:function(E){if(A.aaZ(this.Q,E))return;if(!!this.Q)A.z$([this,this.Kd],this.
Q,0);this.Q=E;if(!!E)A.zX([this,this.Kd],E,0);if(!!E)A.pe([this,this.Kd],this);}
,Kd:function(G){this.Am();},Blf:function(G){var B;if(((this.U&0x80)===0x80))this.
Il().ACC(this);},BeE:function(G){},_Init:function(aArg){A.Core.P._Init.call(this
,aArg);A.Graphics.Hz._Init.call(this.BU={I:this},0);A.Core.Bn._Init.call(this.Bn={
I:this},0);A.acl.TG._Init.call(this.AgI={I:this},0);A.Core.BM._Init.call(this.Am_={
I:this},0);A.Core.BM._Init.call(this.Am9={I:this},0);A.Core.BM._Init.call(this.Arl={
I:this},0);A.acg.Text._Init.call(this.Text={I:this},0);A.acg.Hn._Init.call(this.
Hn={I:this},0);A.acg.Ap._Init.call(this.Ap={I:this},0);A.acg.AK._Init.call(this.
CX={I:this},0);A.Core.BM._Init.call(this.Ark={I:this},0);A.Core.BM._Init.call(this.
Arm={I:this},0);this.__proto__=C.Arg;var B;this.H(AfB);this.Bn.AZ(0x3F);this.Bn.
JR(JZ);this.Bn.Ks(Aon);this.Bn.DC(IT);this.Bn.DM(Rl);this.AgI.Fp(530);this.AgI.Un(
530);this.Am_.Filter=143;this.Am9.Filter=45;this.Arl.Filter=1;this.Text.AZ(0x3F);
this.Text.H(AfB);this.Text.I9(true);this.Text.A6(0x12);this.Text.L(0xFFB3B3B3);this.
Hn.H(AfB);this.Hn.L(0xFFB3B3B3);this.Hn.Ng(1);this.Ap.H(Aoo);this.CX.H(Xf);this.
CX.L(0xFFB3B3B3);this.CX.Z(false);this.Ark.Filter=138;this.Arm.Filter=137;this.J(
this.Bn,0);this.J(this.Text,0);this.J(this.Hn,0);this.J(this.Ap,0);this.J(this.CX
,0);this.Bn.Lm=[this,this.Af9];this.AgI.Q=[B=this.CX,B.Fo,B.Z];this.Am_.BN=[this
,this.BaA];this.Am_.D1=[this,this.BaA];this.Am9.BN=[this,this.Baz];this.Am9.D1=[
this,this.Baz];this.Arl.BN=[this,this.Blf];this.Text.Q4([this,this.BjN]);this.Text.
S(A.aaL(A.fl.Ak));this.Hn.Zz(this.BU);this.Ap.Aw(null);this.Ark.BN=[this,this.BeE
];this.Arm.BN=[this,this.BeE];},_Done:function(){this.__proto__=A.Core.P;this.BU.
_Done();this.Bn._Done();this.AgI._Done();this.Am_._Done();this.Am9._Done();this.
Arl._Done();this.Text._Done();this.Hn._Done();this.Ap._Done();this.CX._Done();this.
Ark._Done();this.Arm._Done();A.Core.P._Done.call(this);},_ReInit:function(){A.Core.
P._ReInit.call(this);this.BU._ReInit();this.Bn._ReInit();this.AgI._ReInit();this.
Am_._ReInit();this.Am9._ReInit();this.Arl._ReInit();this.Text._ReInit();this.Hn.
_ReInit();this.Ap._ReInit();this.CX._ReInit();this.Ark._ReInit();this.Arm._ReInit(
);this.Text.S(A.aaL(A.fl.Ak));},_Mark:function(D){var B;A.Core.P._Mark.call(this
,D);if((B=this.Q)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.BU)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.Bn)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
AgI)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Am_)._cycle!=D)B._Mark(B._cycle=D);
if((B=this.Am9)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Arl)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Text)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Hn)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.Ap)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
CX)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ark)._cycle!=D)B._Mark(B._cycle=D);
if((B=this.Arm)._cycle!=D)B._Mark(B._cycle=D);},_className:"Demonstrator::InputView"
};C.Aeq={Background:null,Yu:null,_Init:function(aArg){A.Core.P._Init.call(this,aArg
);A.acg.AK._Init.call(this.Background={I:this},0);C.Yu._Init.call(this.Yu={I:this
},0);this.__proto__=C.Aeq;var B;this.H(Aop);this.Background.H(Aop);this.Yu.AZ(0x1D
);this.Yu.H(AsY);this.J(this.Background,0);this.J(this.Yu,0);this.Yu.As([B=A._GetAutoObject(
A.aco.AgL),B.A8Q,B.AFD]);},_Done:function(){this.__proto__=A.Core.P;this.Background.
_Done();this.Yu._Done();A.Core.P._Done.call(this);},_ReInit:function(){A.Core.P.
_ReInit.call(this);this.Background._ReInit();this.Yu._ReInit();},_Mark:function(
D){var B;A.Core.P._Mark.call(this,D);if((B=this.Background)._cycle!=D)B._Mark(B.
_cycle=D);if((B=this.Yu)._cycle!=D)B._Mark(B._cycle=D);},_className:"Demonstrator::FilterRow"
};C.OS={Init:function(aArg){var B;A.zX([this,this.AAF],[B=A._GetAutoObject(A.Device.
Device),B.ArC,B.Ati],0);A.pe([this,this.AAF],this);},Ai:function(Ae){var B;C.Aks.
Ai.call(this,Ae);var IA=((this.U&0x40)===0x40);if(!IA&&(this.String.length>0))this.
Text.R(((this.String+AsZ)+A._GetAutoObject(A.acj.Temperature).AlN())+String.fromCharCode(
0x0A));else this.Text.R(this.String+String.fromCharCode(0x0A));if(this.D6>this.String.
length)this.D6=this.String.length;},AAF:function(G){this.Am();},_Init:function(aArg
){C.Aks._Init.call(this,aArg);this.__proto__=C.OS;this.Init(aArg);},_className:"Demonstrator::TemperatureInputView"
};C.Aks={B6:null,Di:null,IU:null,Cr:null,AmF:null,Sf:null,KL:null,Bn:null,Text:null
,CX:null,AqA:null,Ash:null,BU:null,Hn:null,Ary:null,Aq6:null,AqN:null,String:A.jV
,D6:0,AQ:0xFFB3B3B3,AvV:15,ANE:false,LA:false,Bl:function(aSize){this.Hn.H(A.abK(
this.Hn.M,aSize));this.BU.Axu(1);this.BU.Js(0,40);this.BU.Fk(0,aSize[0]-20,20,12.5
,12.5,-90,90,10);this.BU.Fk(0,20,20,12.5,12.5,90,270,10);this.BU.VN(0);},Ai:function(
Ae){var B;A.acn.Jb.Ai.call(this,Ae);if(((Ae&0x40)===0x40))this.IU.Ar(true);else{
this.IU.Ar(false);this.CX.Z(false);}},A4i:function(G){var B;var Bd=this.Text.M;var
Nu=0;var Nv=0;if(this.CX.Es[0]<Bd[0])Nu=Bd[0]-this.CX.Es[0];if(this.CX.Es[0]>Bd[
2])Nu=Bd[2]-this.CX.Es[0];if(this.CX.Es[1]<Bd[1])Nv=Bd[1]-this.CX.Es[1];if(this.
CX.EC[1]>Bd[3])Nv=Bd[3]-this.CX.EC[1];if(!!Nu||!!Nv)this.Text.Gd(A.abf(this.Text.
Br,[Nu,Nv]));Nu=this.Text.Br[0];Nv=this.Text.Br[1];var C3=[(B=this.Text.Db())[2]-
B[0],B[3]-B[1]];if(C3[0]<=((B=this.Text.M)[2]-B[0]))Nu=0;if(C3[1]<=((B=this.Text.
M)[3]-B[1]))Nv=0;this.Text.Gd([Nu,Nv]);},Amn:function(G){if(!this.B6)return;var A3M=
this.Text.AGN(this.D6);var pos=this.Text.Aff(A3M);this.CX.DM(A.abe(pos,[0,this.B6.
Ascent]));this.CX.DC(A.abf(pos,[0,this.B6.Descent]));if(this.IU.Bw){this.IU.Ar(false
);this.IU.Ar(true);}if(this.LA){A.pe([this,this.A4i],this);this.LA=false;}},AAB:
function(G){if(!this.A6L(0x80))this.Il().AMP(this);var EH=this.Text.ATN(this.Bn.
H2);var Vg=this.Text.AnU(EH);if(Vg!==this.D6){this.D6=Vg;A.pe([this,this.Amn],this
);this.LA=true;}},AAv:function(G){if(!this.B6)return;var EH=this.Text.AGN(this.D6
);if(this.Cr.CO===6){EH=[EH[0]-1,EH[1]];if(this.Text.AnU(EH)===this.D6){EH=[EH[0
],EH[1]-1];EH=[this.Text.AC0(EH[1]).length,EH[1]];}}if(this.Cr.CO===7){EH=[EH[0]+
1,EH[1]];if(this.Text.AnU(EH)===this.D6){EH=[EH[0],EH[1]+1];EH=[0,EH[1]];}}var Vg=
this.Text.AnU(EH);if(Vg!==this.D6){this.D6=Vg;A.pe([this,this.Amn],this);this.LA=
true;}},Ben:function(G){if(!this.D6)return;this.R(A.ab1(this.String,this.D6-1,1)
);this.D6=this.D6-1;this.LA=true;A.pe(this.Di,this);},AAw:function(G){if(this.D6>=
this.String.length)return;this.R(A.ab1(this.String,this.D6,1));this.LA=true;A.pe(
this.Di,this);},Bes:function(G){if(this.String.length>=this.AvV)return;var ByA=this.
KL.DQ;var Auk=String.fromCharCode(ByA);this.R(A.abU(this.String,Auk,this.D6));this.
D6=this.D6+Auk.length;this.LA=true;A.pe(this.Di,this);},R:function(E){if(this.String===
E)return;this.String=E;if(this.D6>(E.length+1))this.D6=E.length;this.Text.R(E+String.
fromCharCode(0x0A));this.LA=true;this.Text.Gd(JZ);},L:function(E){if(this.AQ===E
)return;this.AQ=E;this.Text.L(E);this.CX.L(E);this.Hn.L(E);},S:function(E){if(this.
B6===E)return;this.B6=E;this.Text.S(E);this.LA=true;this.Text.Gd(JZ);},BeF:function(
G){if(this.ANE===false)return;if(this.String.indexOf(String.fromCharCode(0x2E),0
)>=0)return;if(this.String.length>=this.AvV)return;this.R(A.abU(this.String,S_,this.
D6));this.D6=this.D6+1;this.LA=true;A.pe(this.Di,this);},Bbi:function(s){this.BeF(
s);},BlE:function(E){if(this.ANE===E)return;this.ANE=E;if(E===false){var Bfm=this.
String.indexOf(String.fromCharCode(0x2E),0);if(Bfm>=0)this.R(A.abV(this.String,Bfm
));}this.LA=true;this.Text.Gd(JZ);},BmK:function(E){if(this.AvV===E)return;this.
AvV=E;this.R(A.abV(this.String,E));this.LA=true;this.Text.Gd(JZ);},BAm:function(
G){if(this.A6L(0x80)){this.Il().ACC(this);this.Cs(0x10,0x0);}this.Am();},BAa:function(
G){var Vg=this.String.length;if(Vg!==this.D6){this.D6=Vg;A.pe([this,this.Amn],this
);this.LA=true;}},BAd:function(G){if(!!this.D6){this.D6=0;A.pe([this,this.Amn],this
);this.LA=true;}},_Init:function(aArg){A.acn.Jb._Init.call(this,aArg);A.acl.TG._Init.
call(this.IU={I:this},0);A.Core.BM._Init.call(this.Cr={I:this},0);A.Core.BM._Init.
call(this.AmF={I:this},0);A.Core.BM._Init.call(this.Sf={I:this},0);A.Core.BM._Init.
call(this.KL={I:this},0);A.Core.Bn._Init.call(this.Bn={I:this},0);A.acg.Text._Init.
call(this.Text={I:this},0);A.acg.C5._Init.call(this.CX={I:this},0);A.Core.BM._Init.
call(this.AqA={I:this},0);A.Core.BM._Init.call(this.Ash={I:this},0);A.Graphics.Hz.
_Init.call(this.BU={I:this},0);A.acg.Hn._Init.call(this.Hn={I:this},0);A.Core.BM.
_Init.call(this.Ary={I:this},0);A.Core.BM._Init.call(this.Aq6={I:this},0);A.Core.
BM._Init.call(this.AqN={I:this},0);this.__proto__=C.Aks;var B;this.H(AfB);this.IU.
B2=false;this.IU.Cx=true;this.IU.Fp(500);this.IU.Un(500);this.Cr.Filter=147;this.
AmF.Filter=45;this.Sf.Filter=44;this.KL.Filter=143;this.Bn.AZ(0x3F);this.Bn.JR(Rl
);this.Bn.Ks(IT);this.Bn.DC(Aon);this.Bn.DM(JZ);this.Bn.AFo(3);this.Text.AZ(0x3F
);this.Text.H(AfB);this.Text.KS(false);this.Text.A6(0x12);this.Text.R(A.jV);this.
Text.L(0xFFB3B3B3);this.CX.DC(As0);this.CX.DM(Aoq);this.CX.A_t(2);this.CX.A_s(2);
this.CX.L(0xFFB3B3B3);this.CX.Z(false);this.AqA.Filter=138;this.Ash.Filter=137;this.
Hn.H(AfB);this.Hn.L(0xFFB3B3B3);this.Hn.Ng(1);this.Ary.Filter=1;this.Aq6.Filter=
41;this.AqN.Filter=42;this.J(this.Bn,0);this.J(this.Text,0);this.J(this.CX,0);this.
J(this.Hn,0);this.IU.Q=[B=this.CX,B.Fo,B.Z];this.Cr.BN=[this,this.AAv];this.Cr.D1=[
this,this.AAv];this.AmF.BN=[this,this.Ben];this.AmF.D1=[this,this.Ben];this.Sf.BN=[
this,this.AAw];this.Sf.D1=[this,this.AAw];this.KL.BN=[this,this.Bes];this.KL.D1=[
this,this.Bes];this.Bn.BN=[this,this.AAB];this.Text.Q4([this,this.Amn]);this.Text.
S(A.aaL(A.fl.Ak));this.B6=A.aaL(A.fl.Ak);this.AqA.BN=[this,this.Bbi];this.Ash.BN=[
this,this.Bbi];this.Hn.Zz(this.BU);this.Ary.BN=[this,this.BAm];this.Aq6.BN=[this
,this.BAd];this.AqN.BN=[this,this.BAa];},_Done:function(){this.__proto__=A.acn.Jb;
this.IU._Done();this.Cr._Done();this.AmF._Done();this.Sf._Done();this.KL._Done();
this.Bn._Done();this.Text._Done();this.CX._Done();this.AqA._Done();this.Ash._Done(
);this.BU._Done();this.Hn._Done();this.Ary._Done();this.Aq6._Done();this.AqN._Done(
);A.acn.Jb._Done.call(this);},_ReInit:function(){A.acn.Jb._ReInit.call(this);this.
IU._ReInit();this.Cr._ReInit();this.AmF._ReInit();this.Sf._ReInit();this.KL._ReInit(
);this.Bn._ReInit();this.Text._ReInit();this.CX._ReInit();this.AqA._ReInit();this.
Ash._ReInit();this.BU._ReInit();this.Hn._ReInit();this.Ary._ReInit();this.Aq6._ReInit(
);this.AqN._ReInit();this.Text.S(A.aaL(A.fl.Ak));this.S(A.aaL(A.fl.Ak));},_Mark:
function(D){var B;A.acn.Jb._Mark.call(this,D);if((B=this.B6)&&(B._cycle!=D))B._Mark(
B._cycle=D);if((B=this.Di)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.
IU)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Cr)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.AmF)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Sf)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.KL)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Bn)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Text)._cycle!=D)B._Mark(B._cycle=D);if((B=this.CX)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.AqA)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
Ash)._cycle!=D)B._Mark(B._cycle=D);if((B=this.BU)._cycle!=D)B._Mark(B._cycle=D);
if((B=this.Hn)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ary)._cycle!=D)B._Mark(B.
_cycle=D);if((B=this.Aq6)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AqN)._cycle!=
D)B._Mark(B._cycle=D);},_className:"Demonstrator::NumberInput"};C.Acz={LabelDataSync:
null,Af9:function(G){var B;A.pe([B=A._GetAutoObject(A.acs.Act),B.BBL],this);},_Init:
function(aArg){C.Jo._Init.call(this,aArg);A.kR.CH._Init.call(this.LabelDataSync={
I:this},0);this.__proto__=C.Acz;this.LabelDataSync.H(Aor);this.LabelDataSync.R(A.
aaR(A.acf.A5A));this.LabelDataSync.L(A.jb.Text);this.J(this.LabelDataSync,0);this.
YE.Aw(A.aaL(C.AUQ));this.LabelDataSync.S(A.aaL(A.fl.Af));this.LabelDataSync.A2(A.
aaL(A.fl.Ak));},_Done:function(){this.__proto__=C.Jo;this.LabelDataSync._Done();
C.Jo._Done.call(this);},_ReInit:function(){C.Jo._ReInit.call(this);this.LabelDataSync.
_ReInit();this.LabelDataSync.R(A.aaR(A.acf.A5A));this.LabelDataSync.S(A.aaL(A.fl.
Af));this.LabelDataSync.A2(A.aaL(A.fl.Ak));},_Mark:function(D){var B;C.Jo._Mark.
call(this,D);if((B=this.LabelDataSync)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Demonstrator::SyncAction"};C.AUQ={_class:function(){return A.aci.Al;},0:{FileName:
"./res_index/DemonstratorSyncIcon.png",Format:A._PIXEL_FORMAT_NATIVE,NoOfFrames:
1,FrameSize:[50,60],FrameDelay:0,_this:null}};C.Abg={TimespanDaysToString:null,Avo:
function(aIndex){if(this.AqZ()>aIndex)return this.TimespanDaysToString.BH(aIndex
);A.ab5("%s",As1);return A.jV;},AqZ:function(){return 4;},C4:function(aIndex){var
Aje=0;switch(aIndex){case 0:Aje=0;break;case 1:Aje=1;break;case 2:Aje=2;break;case
3:Aje=3;break;default:throw new Error(Ax7+aIndex.toFixed());}return Aje;},_Init:
function(aArg){A.acq.VO._Init.call(this,aArg);A.Device.TimespanDaysToString._Init.
call(this.TimespanDaysToString={I:this},0);this.__proto__=C.Abg;},_Done:function(
){this.__proto__=A.acq.VO;this.TimespanDaysToString._Done();A.acq.VO._Done.call(
this);},_ReInit:function(){A.acq.VO._ReInit.call(this);this.TimespanDaysToString.
_ReInit();},_Mark:function(D){var B;A.acq.VO._Mark.call(this,D);if((B=this.TimespanDaysToString
)._cycle!=D)B._Mark(B._cycle=D);},_className:"Demonstrator::DatePickerUnitDD"};C.
BFA={GK:0,AVx:1,Hi:2,Year:3};C.ACz={_class:function(){return A.aci.Al;},0:{FileName:
"./res_index/DemonstratorEarTagIcon.png",Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:
2,FrameSize:[37,37],FrameDelay:0,_this:null}};C.AxP={_class:function(){return A.
aci.Al;},0:{FileName:"./res_index/DemonstratorTransponderEarTagIcon.png",Format:
A._PIXEL_FORMAT_ALPHA8,NoOfFrames:2,FrameSize:[37,37],FrameDelay:0,_this:null}};
C.ZK={Aef:null,Init:function(aArg){var Au=A._NewObject(A.Core.Bs,0);Au.Initialize(
A._GetAutoObject(A.Device.Helper).Dq());var A1w=Au.Format(Is);this.Aef.R(A1w);},
Af9:function(G){var B;var J5=this.Aef.String;var O;O=J5.indexOf(String.fromCharCode(
0x2E),0);while(O>=0){J5=A.ab1(J5,O,1);O=J5.indexOf(String.fromCharCode(0x2E),O);
}J5=J5+Ax8;J5=J5+A._GetAutoObject(A.acj.VE).ACW(J5).toFixed();var A1w=A._GetAutoObject(
A.Device.AnN).Bfb(J5);A._GetAutoObject(A.aco.Ht).BBB(((B=(A1w|0))<0)?B+0x100000000:
B);},_Init:function(aArg){C.Jo._Init.call(this,aArg);C.ANB._Init.call(this.Aef={
I:this},0);this.__proto__=C.ZK;this.Aef.H(Rn);this.Aef.L(A.jb.Text);this.Aef.BmK(
10);this.J(this.Aef,-1);this.YE.Aw(A.aaL(A.ach.Avw));this.Init(aArg);},_Done:function(
){this.__proto__=C.Jo;this.Aef._Done();C.Jo._Done.call(this);},_ReInit:function(
){C.Jo._ReInit.call(this);this.Aef._ReInit();},_Mark:function(D){var B;C.Jo._Mark.
call(this,D);if((B=this.Aef)._cycle!=D)B._Mark(B._cycle=D);},_className:"Demonstrator::ScanDateAction"
};C.AhC={BFO:0,BFK:1,VE:2,LAST:3};C.AhD={AhE:null,Avo:function(aIndex){if(this.AqZ(
)>aIndex)return this.AhE.BH(aIndex);A.ab5("%s",As1);return A.jV;},AqZ:function(){
return 3;},_Init:function(aArg){A.acq.VO._Init.call(this,aArg);C.AhE._Init.call(
this.AhE={I:this},0);this.__proto__=C.AhD;},_Done:function(){this.__proto__=A.acq.
VO;this.AhE._Done();A.acq.VO._Done.call(this);},_ReInit:function(){A.acq.VO._ReInit.
call(this);this.AhE._ReInit();},_Mark:function(D){var B;A.acq.VO._Mark.call(this
,D);if((B=this.AhE)._cycle!=D)B._Mark(B._cycle=D);},_className:"Demonstrator::ScanTypeDD"
};C.AhE={BH:function(A5){var BcF=A5;var AKW=A.jV;switch(BcF){case 2:AKW=A.aaR(A.
acf.VE);break;case 0:AKW=A.aaR(A.acf.Transponder);break;case 1:AKW=A.aaR(A.acf.Bh4
);break;default:throw new Error(Ax9+BcF.toFixed());}return AKW;},_Init:function(
aArg){A.Device.EnumToString._Init.call(this,aArg);this.__proto__=C.AhE;},_className:
"Demonstrator::ScanTypeToString"};C.ANB={BeF:function(G){var Bfn=0;var O=this.String.
indexOf(String.fromCharCode(0x2E),0);while(O>=0){Bfn++;O++;O=this.String.indexOf(
String.fromCharCode(0x2E),O);}if(Bfn>=2)return;if(this.String.length>=this.AvV)return;
this.R(A.abU(this.String,S_,this.D6));this.D6=this.D6+1;this.LA=true;A.pe(this.Di
,this);},_Init:function(aArg){C.Aks._Init.call(this,aArg);this.__proto__=C.ANB;}
,_className:"Demonstrator::DateInput"};
C._Init=function(){C.AVr.__proto__=A.acn.Menu;C.AUn.__proto__=A.Core.P;C.AMo.__proto__=
C.Ba;C.Mh.__proto__=A.Core.P;C.Yu.__proto__=C.Arg;C.Abh.__proto__=A.Core.P;C.Avz.
__proto__=A.acn.Ahx;C.AMC.__proto__=C.FB;C.Aux.__proto__=C.FB;C.Ba.__proto__=A.Core.
P;C.FB.__proto__=A.Core.P;C.ANC.__proto__=A.acn.Ahv;C.AhH.__proto__=A.Core.P;C.AMv.
__proto__=C.AhH;C.Vv.__proto__=C.Aux;C.ALZ.__proto__=A.Core.P;C.Jo.__proto__=A.Core.
P;C.Acp.__proto__=C.Jo;C.AcA.__proto__=C.Jo;C.Arg.__proto__=A.Core.P;C.Aeq.__proto__=
A.Core.P;C.OS.__proto__=C.Aks;C.Aks.__proto__=A.acn.Jb;C.Acz.__proto__=C.Jo;C.Abg.
__proto__=A.acq.VO;C.ZK.__proto__=C.Jo;C.AhD.__proto__=A.acq.VO;C.AhE.__proto__=
A.Device.EnumToString;C.ANB.__proto__=C.Aks;};C._ReInit=function(){};C.DH=function(
D){var B;if((B=C.Background[0]._this)&&(B._cycle!=D))B._Done(C.Background[0]._this=
null);if((B=C.AMY[0]._this)&&(B._cycle!=D))B._Done(C.AMY[0]._this=null);if((B=C.
AMZ[0]._this)&&(B._cycle!=D))B._Done(C.AMZ[0]._this=null);if((B=C.AM0[0]._this)&&(
B._cycle!=D))B._Done(C.AM0[0]._this=null);if((B=C.AM1[0]._this)&&(B._cycle!=D))B.
_Done(C.AM1[0]._this=null);if((B=C.AP2[0]._this)&&(B._cycle!=D))B._Done(C.AP2[0].
_this=null);if((B=C.Filter[0]._this)&&(B._cycle!=D))B._Done(C.Filter[0]._this=null
);if((B=C.ARB[0]._this)&&(B._cycle!=D))B._Done(C.ARB[0]._this=null);if((B=C.Ajv[
0]._this)&&(B._cycle!=D))B._Done(C.Ajv[0]._this=null);if((B=C.AMF[0]._this)&&(B.
_cycle!=D))B._Done(C.AMF[0]._this=null);if((B=C.Asw[0]._this)&&(B._cycle!=D))B._Done(
C.Asw[0]._this=null);if((B=C.AUV[0]._this)&&(B._cycle!=D))B._Done(C.AUV[0]._this=
null);if((B=C.AHg[0]._this)&&(B._cycle!=D))B._Done(C.AHg[0]._this=null);if((B=C.
AVI[0]._this)&&(B._cycle!=D))B._Done(C.AVI[0]._this=null);if((B=C.AUQ[0]._this)&&(
B._cycle!=D))B._Done(C.AUQ[0]._this=null);if((B=C.ACz[0]._this)&&(B._cycle!=D))B.
_Done(C.ACz[0]._this=null);if((B=C.AxP[0]._this)&&(B._cycle!=D))B._Done(C.AxP[0].
_this=null);};return C;})();

/* VitalControl demonstration application, © Urban GmbH & Co.KG 2023 */