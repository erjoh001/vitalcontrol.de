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
var Cc=[0,0,370,60];var BD=[360,0,370,60];var E7=[0,0,370,710];var Hq="Unknown animalType";
var IU=[58,10,120,50];var Is=[0,0,60,60];var O2=[120,0,360,60];var P7="\u2015";var
P8=[0,0,240,60];var CQ=[0,0,40,60];var Ff=[100,0,130,60];var L1=[43,0,100,60];var
P9=[125,0,240,60];var J2=[0,0];var N$=[100,0];var P_=[100,60];var MH=[0,60];var S8=[
107,0];var UQ=[240,0];var Z1=[240,60];var W1=[107,60];var It="%d.%m.%Y";var UR="Unhandled date unit: ";
var Z2=[0,0,200,180];var W2=[36,0,200,30];var Z3=[0,30,160,60];var W3="Text";var
Z4=[0,70,40,110];var Z5=[44,70,156,110];var US=[160,70,200,110];var W4=[7,2,27,25
];var O3=[0,30,170,180];var Z6=[170,34,190,57];var O4=[0,0,40,40];var Rl=[0,40];
var W5=[40,40];var W6=[40,0];var UT=[0,0,370,100];var Z7=[20,0,290,60];var Z8=[0
,60,370,100];var W7="Cap";var W8=[20,0,370,60];var S9=[310,0,370,60];var UU=[370
,0];var UV=[370,60];var AcK="UpdateData is called for the base class ListItemBase. Please make "+
"sure this method is implemented by a derived class.";var S_=".";var Z9=[0,0,170
,150];var Afz=[0,59,170,90];var Z_=[110,0,170,150];var W9=[0,30];var Z$=[50,0,100
,150];var W_=[0,0,40,150];var AhT=[0,0,370,240];var KY=[0,60,370,710];var AcL=[0
,0,370,300];var Lv=[0,60,370,300];var AhU=[0,60,370,120];var Aob=[0,120,370,180];
var Oa=[0,180,370,240];var W$=[0,240,370,300];var Aaa=[370,120];var AhV=[0,120];
var AhW=[370,180];var AcM=[0,180];var UW=[370,240];var Aoc=[0,240];var Aod=[370,
300];var Aoe=[0,300];var Aof=[0,0,50,60];var Ak$=[50,0,100,60];var AsV="Unhandled scan type";
var Ax2=[3,11,253,51];var Ax3=[50,0];var O5=[50,60];var Rm=[100,10,370,50];var Ax4=
"276000901234567";var UX=[3,10,57,50];var AsW=[3,11,55,50];var Ax5="Unhandled temperature unit";
var Ax6=[110,0,260,60];var Ax7=[235,10,370,50];var Aog="39.5";var AfA=[0,0,270,40
];var Aoh=[270,0];var IV=[270,40];var Aoi=[150,0,170,40];var Xa=[205,10,207,30];
var Aoj=[0,0,370,40];var AsX=[50,0,320,40];var AsY=" ";var AsZ=[135,23];var Aok=[
135,0];var Aol=[100,0,370,60];var As0="Error: Nullpointer Exception";var Ax8="Unknown Date Piecker Unit Index: ";
var Ax9="0";var Ax_="Unhandled scan type:";
C.Background={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/DemonstratorBackground.png"
,Format:A._PIXEL_FORMAT_NATIVE,NoOfFrames:1,FrameSize:[1000,740],FrameDelay:0,_this:
null}};C.AM1={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/DemonstratorButtonLeft.png"
,Format:A._PIXEL_FORMAT_NATIVE,NoOfFrames:1,FrameSize:[40,40],FrameDelay:0,_this:
null}};C.AM2={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/DemonstratorButtonLeftPressed.png"
,Format:A._PIXEL_FORMAT_NATIVE,NoOfFrames:1,FrameSize:[40,40],FrameDelay:0,_this:
null}};C.AM3={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/DemonstratorButtonRight.png"
,Format:A._PIXEL_FORMAT_NATIVE,NoOfFrames:1,FrameSize:[40,40],FrameDelay:0,_this:
null}};C.AM4={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/DemonstratorButtonRightPressed.png"
,Format:A._PIXEL_FORMAT_NATIVE,NoOfFrames:1,FrameSize:[40,40],FrameDelay:0,_this:
null}};C.AP5={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/DemonstratorIconDatePicker.png"
,Format:A._PIXEL_FORMAT_NATIVE,NoOfFrames:1,FrameSize:[20,23],FrameDelay:0,_this:
null}};C.Filter={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/DemonstratorFilter.png"
,Format:A._PIXEL_FORMAT_NATIVE,NoOfFrames:1,FrameSize:[15,16],FrameDelay:0,_this:
null}};C.ARK={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/DemonstratorMenuIcon.png"
,Format:A._PIXEL_FORMAT_NATIVE,NoOfFrames:1,FrameSize:[20,16],FrameDelay:0,_this:
null}};C.Ajq={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/DemonstratorArrowRight.png"
,Format:A._PIXEL_FORMAT_NATIVE,NoOfFrames:1,FrameSize:[17,16],FrameDelay:0,_this:
null}};C.AMH={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/DemonstratorArrowDown.png"
,Format:A._PIXEL_FORMAT_NATIVE,NoOfFrames:1,FrameSize:[17,16],FrameDelay:0,_this:
null}};C.Ast={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/DemonstratorScanIcon.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:2,FrameSize:[37,37],FrameDelay:0,_this:
null}};C.AU3={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/DemonstratorTemperatureIcon.png"
,Format:A._PIXEL_FORMAT_NATIVE,NoOfFrames:1,FrameSize:[17,37],FrameDelay:0,_this:
null}};C.AVz={Aeb:null,AX:null,AR:null,Background:null,H9:null,AD:null,IR:null,Dn:
null,Li:null,A7A:null,A71:0,Bl:function(aSize){A.acn.Menu.Bl.call(this,aSize);this.
IR.H(A.abP(this.IR.M,this.AD.OQ));this.IR.H([].concat(this.IR.M.slice(0,3),aSize[
1]));},Ai:function(Ae){var B;A.acn.Menu.Ai.call(this,Ae);var IB=((Ae&0x40)===0x40
);if(IB&&(this.AD.Gs<0))this.AD.GT(0);},N0:function(E){if(this.Li===E)return;this.
Li=E;this.AD.N0(E);},Bm7:function(E){var B;if(this.A7A===E)return;if(!!this.Aeb){
this.HN(this.Aeb);this.Aeb=null;}if(!!E){this.Aeb=(C.FD.isPrototypeOf(B=A._NewObject(
E,0))?B:null);this.Aeb.A96([this,this.Akq]);this.Aeb.A97([this,this.Akr]);this.Aeb.
Bnb(null);this.J(this.Aeb,0);this.AD.A_b((B=this.Aeb.M)[3]-B[1]);}else this.AD.A_b(
0);this.IR.H(A.abP(this.IR.M,this.AD.OQ));A.pe([this,this.Fk],this);this.A7A=E;}
,Hl:function(G){var B;var Gf=this.AD.G5;var Aa=(C.Ba.isPrototypeOf(B=this.AD.Ci)?
B:null);if(!Aa)return;Aa.Zn(this.AX);Aa.Cf(Gf);Aa.Zr(this.AR);Aa.H(A.abK(Aa.M,[(
B=this.AD.M)[2]-B[0],this.AD.GO]));},Zn:function(E){var B;if(this.AX===E)return;
if(!!this.AX){A.z9([this,this.Cf],this.AX,0);A.z$([this,this.An6],[B=this.AX,B.Fo
,B.Fs],0);}this.AX=E;if(!!E){A.zV([this,this.Cf],E,0);A.zX([this,this.An6],[E,E.
Fo,E.Fs],0);}A.pe([this,this.Cf],this);A.pe([this,this.An6],this);},Cf:function(
G){if(!!this.AX){this.AD.Jy(this.AX.B9());this.AD.AbC(0,this.AD.AY-1);}else this.
AD.Jy(0);if(this.A71!==this.AD.AY){this.AD.ABG(null,null);this.A71=this.AD.AY;}A.
pe([this,this.Fk],this);},Akr:function(G){var B;this.H(A.abI(this.M,(B=this.AD.AOO(
))[3]-B[1]));},Akq:function(G){this.H(A.abI(this.M,180));},A9l:function(G){var JC=(
A.Core.BK.isPrototypeOf(G)?G:null);var Gf=this.AD.Gs;if(JC.CO===4)Gf=Gf-1;else if(
JC.CO===5)Gf=Gf+1;else if((JC.DQ>=0x30)&&(JC.DQ<=0x39))A._GetAutoObject(A.aco.AgK
).Ey(JC.DQ);else if(JC.CO===45)A._GetAutoObject(A.aco.AgK).Delete();else JC.NH=true;
if((Gf<0)||(Gf>=this.AD.AY))return;this.AD.GT(Gf);this.By8(Gf,true);},ByX:function(
G){var Aa=(C.Ba.isPrototypeOf(G)?G:null);this.AD.GT(Aa.Hr);},By8:function(G$,Ac0
){var B;if((G$<0)||(G$>=this.AD.AY))return;var Az=this.AD.AqR(G$,G$);var Bd=this.
AD.M;Bd=A.abP(Bd,(B=this.AD.AOO())[3]-B[1]);Bd=A.abI(Bd,(((B=this.AD.M)[3]-B[1])-((
B=this.AD.AOO())[3]-B[1]))-((B=this.AD.Bi2())[3]-B[1]));var LM=A.lb(Az,Bd);if((!
Ac0&&!((LM[0]>=LM[2])||(LM[1]>=LM[3])))||(Ac0&&A.aaY(LM,Az)))return;var Bq=0;if(
Az[3]>Bd[3])Bq=Az[3]-Bd[3];if(Bq>(Az[1]-Bd[1]))Bq=(Az[3]-Bd[1])-this.AD.GO;this.
AD.Gb(this.AD.Br-Bq);},An6:function(G){this.AD.GT(-1);},Fk:function(G){var B;this.
IR.Mx(this.AD.GO*this.AD.AY);this.IR.Mz(((B=this.AD.M)[3]-B[1])-this.AD.OQ);this.
IR.My(-this.AD.Br);},_Init:function(aArg){A.acn.Menu._Init.call(this,aArg);A.acg.
AL._Init.call(this.Background={I:this},0);A.Core.H9._Init.call(this.H9={I:this},
0);A.Core.CM._Init.call(this.AD={I:this},0);A.kR.Ay._Init.call(this.IR={I:this},
0);A.Core.BK._Init.call(this.Dn={I:this},0);this.__proto__=C.AVz;this.H(Cc);this.
Background.AZ(0x3);this.Background.H(Cc);this.H9.AZ(0x3F);this.H9.H(Cc);this.AD.
AZ(0x3F);this.AD.H(Cc);this.AD.Ae6(60);this.AD.Jy(0);this.AD.N0(this.Li);this.IR.
AZ(0x3A);this.IR.H(BD);this.IR.L(0xFF808080);this.J(this.Background,0);this.J(this.
H9,0);this.J(this.AD,0);this.J(this.IR,0);this.AD.El=[this,this.Fk];this.AD.Hl=[
this,this.Hl];this.AD.Aw3(this.H9);this.AR=[this,this.ByX];this.Dn.BL=[this,this.
A9l];this.Dn.D1=[this,this.A9l];},_Done:function(){this.__proto__=A.acn.Menu;this.
Background._Done();this.H9._Done();this.AD._Done();this.IR._Done();this.Dn._Done(
);A.acn.Menu._Done.call(this);},_ReInit:function(){A.acn.Menu._ReInit.call(this);
this.Background._ReInit();this.H9._ReInit();this.AD._ReInit();this.IR._ReInit();
this.Dn._ReInit();},_Mark:function(D){var B;A.acn.Menu._Mark.call(this,D);if((B=
this.Aeb)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.AX)&&(B._cycle!=D))B._Mark(
B._cycle=D);if((B=this.AR)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.
Background)._cycle!=D)B._Mark(B._cycle=D);if((B=this.H9)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.AD)._cycle!=D)B._Mark(B._cycle=D);if((B=this.IR)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Dn)._cycle!=D)B._Mark(B._cycle=D);},_className:"Demonstrator::VerticalMenu"
};C.AUv={GK:null,AL:null,BU:null,Init:function(aArg){var B;A.zX([this,this.GH],[
B=A._GetAutoObject(A.aco.G0),B.A80,B.A_m],0);A.pe([this,this.GH],this);},Ab0:function(
E){if(this.GK===E)return;if(!!this.GK)this.HN(this.GK);this.GK=E;if(!!this.GK)this.
J(this.GK,0);this.Bb(E);this.AhA(E,this.BU);this.Am();},GH:function(G){var B;if(
!!A._GetAutoObject(A.aco.G0).Asw)this.Ab0((C.AhG.isPrototypeOf(B=A._NewObject(A.
_GetAutoObject(A.aco.G0).Asw,0))?B:null));else this.Ab0(null);},_Init:function(aArg
){A.Core.P._Init.call(this,aArg);A.acg.AL._Init.call(this.AL={I:this},0);A.acg.BU.
_Init.call(this.BU={I:this},0);this.__proto__=C.AUv;this.H(E7);this.AL.AZ(0x3F);
this.AL.H(E7);this.BU.H(E7);this.BU.L(0xFF000000);this.J(this.AL,0);this.J(this.
BU,0);this.Init(aArg);},_Done:function(){this.__proto__=A.Core.P;this.AL._Done();
this.BU._Done();A.Core.P._Done.call(this);},_ReInit:function(){A.Core.P._ReInit.
call(this);this.AL._ReInit();this.BU._ReInit();},_Mark:function(D){var B;A.Core.
P._Mark.call(this,D);if((B=this.GK)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.
AL)._cycle!=D)B._Mark(B._cycle=D);if((B=this.BU)._cycle!=D)B._Mark(B._cycle=D);}
,_className:"Demonstrator::SelectionArea"};C.AMq={ABm:0,Kd:0,Background:null,V:null
,Ajm:null,AdU:null,XL:null,AdV:null,Mi:null,Mf:0,LF:false,KF:false,CP:function(){
this.Am();},Ai:function(Ae){var B;C.Ba.Ai.call(this,Ae);var He=((Ae&0x10)===0x10
);var Fv=((Ae&0x20)===0x20);var IB=((Ae&0x40)===0x40);if(!He){this.Background.L(
0xFFAAAAAA);this.V.L(0xFF888888);this.Mi.Ar(false);this.Mi.Z(false);}else if(IB){
this.Background.L(A.jb.AV);this.V.L(A.jb.Bm);this.Mi.Ar(true);this.Mi.Z(true);}else
if(Fv){this.Background.L(0xFFE6DED8);this.V.L(0xFF000000);this.Mi.Ar(true);this.
Mi.Z(true);}else{this.Background.L(0xFFFFFFFF);this.V.L(0xFF000000);this.Mi.Ar(false
);this.Mi.Z(false);}if(!this.KF&&Fv)A._GetAutoObject(A.aco.G0).A_j(this.ABm);this.
Mi.Bm9(this.Kd>0);this.Mi.BnA(this.ABm>0);this.V.R(this.Mf.toFixed());this.LF=He;
this.KF=Fv;},Cf:function(Ad){if(!this.AX){this.XL.Ax(A.aaL(A.ach.Aew));this.AdU.
L(A.jb.Afs);return;}this.Hr=Ad;if(!!this.AX){this.Kd=this.AX.KN(Ad,26);this.ABm=
this.AX.KN(Ad,22);this.Mf=this.AX.CF(Ad,1);var AlN=this.AX.H2(Ad,11);var AlE=this.
AX.I6(Ad,17);var LP=this.AX.I6(Ad,13);var Ib=this.AX.AmT(Ad,14);var Xl=A._GetAutoObject(
A.Device.Helper).AMf(LP,AlN,AlE);switch(Ib){case 0:this.XL.Ax(A.aaL(A.ach.Aew));
break;case 1:this.XL.Ax(A.aaL(A.ach.AvC));break;case 2:this.XL.Ax(A.aaL(A.ach.AvF
));break;default:A.ab5("%s%e",Hq,Ib);}this.AdV.Ax(this.XL.Al);this.AdU.L(A._GetAutoObject(
A.acj.Assessment).Qo(Xl));this.Am();}},_Init:function(aArg){C.Ba._Init.call(this
,aArg);A.acg.AL._Init.call(this.Background={I:this},0);A.kR.CH._Init.call(this.V={
I:this},0);A.acg.Ap._Init.call(this.Ajm={I:this},0);A.acg.Ap._Init.call(this.AdU={
I:this},0);A.acg.Ap._Init.call(this.XL={I:this},0);A.acg.Ap._Init.call(this.AdV={
I:this},0);C.Mi._Init.call(this.Mi={I:this},0);this.__proto__=C.AMq;this.Background.
AZ(0x3F);this.Background.H(Cc);this.V.AZ(0x3F);this.V.H(IU);this.V.R(A.aaR(A.acf.
GN));this.V.A6(0x11);this.V.L(0xFF000000);this.Ajm.H(Is);this.Ajm.L(A.jb.Text);this.
AdU.H(Is);this.AdU.L(A.jb.E1);this.XL.H(Is);this.AdV.H(Is);this.AdV.L(A.jb.Text);
this.AdV.Cw(1);this.Mi.AZ(0x3);this.Mi.H(O2);this.J(this.Background,0);this.J(this.
V,0);this.J(this.Ajm,0);this.J(this.AdU,0);this.J(this.XL,0);this.J(this.AdV,0);
this.J(this.Mi,0);this.V.S(A.aaL(A.fl.Af));this.V.A2(A.aaL(A.fl.Ak));this.V.Cv(A.
aaL(A.fl.Bh));this.Ajm.Ax(A.aaL(C.AHh));this.AdU.Ax(A.aaL(C.AVQ));this.XL.Ax(A.aaL(
A.ach.Aew));this.AdV.Ax(A.aaL(A.ach.Aew));},_Done:function(){this.__proto__=C.Ba;
this.Background._Done();this.V._Done();this.Ajm._Done();this.AdU._Done();this.XL.
_Done();this.AdV._Done();this.Mi._Done();C.Ba._Done.call(this);},_ReInit:function(
){C.Ba._ReInit.call(this);this.Background._ReInit();this.V._ReInit();this.Ajm._ReInit(
);this.AdU._ReInit();this.XL._ReInit();this.AdV._ReInit();this.Mi._ReInit();this.
V.R(A.aaR(A.acf.GN));this.V.S(A.aaL(A.fl.Af));this.V.A2(A.aaL(A.fl.Ak));this.V.Cv(
A.aaL(A.fl.Bh));this.CP();},_Mark:function(D){var B;C.Ba._Mark.call(this,D);if((
B=this.Background)._cycle!=D)B._Mark(B._cycle=D);if((B=this.V)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Ajm)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AdU)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.XL)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
AdV)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Mi)._cycle!=D)B._Mark(B._cycle=D);
},_className:"Demonstrator::AnimalMenuItem"};C.Mi={Uw:null,WG:null,AkX:null,Nk:null
,N8:null,ZE:null,Acv:null,Av1:false,AxO:false,CP:function(){this.Am();},Ai:function(
Ae){var B;A.Core.P.Ai.call(this,Ae);var IB=((Ae&0x40)===0x40);if(IB){this.Nk.L(A.
jb.Bm);this.N8.L(A.jb.Bm);}else{this.Nk.L(A.jb.Text);this.N8.L(A.jb.Text);}if(this.
AxO){this.Nk.R(A.aaR(A.acf.BoB));if(this.Av1){this.Uw.Ax(A.aaL(C.AxP));this.WG.Ax(
A.aaL(C.AxP));}else{this.Uw.Ax(A.aaL(C.Ast));this.WG.Ax(A.aaL(C.Ast));}}else if(
this.Av1){this.Uw.Ax(A.aaL(C.ACB));this.WG.Ax(A.aaL(C.ACB));this.Nk.R(P7);}var A32=
this.AxO||this.Av1;this.Uw.Z(A32);this.WG.Z(A32);this.Nk.Z(A32);this.ZE.Ar(this.
AxO);},BnA:function(E){if(this.AxO===E)return;this.AxO=E;this.Am();},Bm9:function(
E){if(this.Av1===E)return;this.Av1=E;this.Am();},_Init:function(aArg){A.Core.P._Init.
call(this,aArg);A.acg.Ap._Init.call(this.Uw={I:this},0);A.acg.Ap._Init.call(this.
WG={I:this},0);A.acg.Ap._Init.call(this.AkX={I:this},0);A.kR.CH._Init.call(this.
Nk={I:this},0);A.kR.CH._Init.call(this.N8={I:this},0);A.Core.Bn._Init.call(this.
ZE={I:this},0);A.Core.Bn._Init.call(this.Acv={I:this},0);this.__proto__=C.Mi;var
B;this.H(P8);this.Uw.AZ(0x6);this.Uw.H(CQ);this.Uw.L(A.jb.CS);this.Uw.Cw(1);this.
WG.AZ(0x6);this.WG.H(CQ);this.WG.L(A.jb.Text);this.AkX.AZ(0xE);this.AkX.H(Ff);this.
Nk.AZ(0x7);this.Nk.H(L1);this.Nk.A6(0x11);this.Nk.L(0xFF000000);this.N8.AZ(0x3);
this.N8.H(P9);this.N8.R(A.aaR(A.acf.Temperature));this.N8.A6(0x11);this.N8.L(0xFF000000
);this.ZE.AZ(0x3);this.ZE.JU(J2);this.ZE.Ku(N$);this.ZE.DC(P_);this.ZE.DM(MH);this.
Acv.AZ(0x3);this.Acv.JU(S8);this.Acv.Ku(UQ);this.Acv.DC(Z1);this.Acv.DM(W1);this.
J(this.Uw,0);this.J(this.WG,0);this.J(this.AkX,0);this.J(this.Nk,0);this.J(this.
N8,0);this.J(this.ZE,0);this.J(this.Acv,0);this.Uw.Ax(A.aaL(C.Ast));this.WG.Ax(A.
aaL(C.Ast));this.AkX.Ax(A.aaL(C.AU3));this.Nk.S(A.aaL(A.fl.Af));this.Nk.A2(A.aaL(
A.fl.Ak));this.Nk.Cv(A.aaL(A.fl.Bh));this.N8.S(A.aaL(A.fl.Af));this.N8.A2(A.aaL(
A.fl.Ak));this.N8.Cv(A.aaL(A.fl.Bh));this.ZE.Ln=[B=A._GetAutoObject(A.aco.G0),B.
Be2];this.Acv.Ln=[B=A._GetAutoObject(A.aco.G0),B.BeN];},_Done:function(){this.__proto__=
A.Core.P;this.Uw._Done();this.WG._Done();this.AkX._Done();this.Nk._Done();this.N8.
_Done();this.ZE._Done();this.Acv._Done();A.Core.P._Done.call(this);},_ReInit:function(
){A.Core.P._ReInit.call(this);this.Uw._ReInit();this.WG._ReInit();this.AkX._ReInit(
);this.Nk._ReInit();this.N8._ReInit();this.ZE._ReInit();this.Acv._ReInit();this.
N8.R(A.aaR(A.acf.Temperature));this.Nk.S(A.aaL(A.fl.Af));this.Nk.A2(A.aaL(A.fl.Ak
));this.Nk.Cv(A.aaL(A.fl.Bh));this.N8.S(A.aaL(A.fl.Af));this.N8.A2(A.aaL(A.fl.Ak
));this.N8.Cv(A.aaL(A.fl.Bh));this.CP();},_Mark:function(D){var B;A.Core.P._Mark.
call(this,D);if((B=this.Uw)._cycle!=D)B._Mark(B._cycle=D);if((B=this.WG)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.AkX)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Nk
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.N8)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.ZE)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Acv)._cycle!=D)B._Mark(B._cycle=
D);},_className:"Demonstrator::AnimalItemAction"};C.Yl={CP:function(){this.Am();
},Ai:function(Ae){C.Arb.Ai.call(this,Ae);if(!this.Text.String.length)this.Text.R(
A.aaR(A.acf.Filter));},A78:function(G){var D5=(A.Core.BK.isPrototypeOf(G)?G:null
);if(!!D5)A._GetAutoObject(A.aco.AgK).Ey(D5.DQ);},A76:function(G){A._GetAutoObject(
A.aco.AgK).Delete();},_Init:function(aArg){C.Arb._Init.call(this,aArg);this.__proto__=
C.Yl;this.Ap.Ax(A.aaL(C.Filter));},_ReInit:function(){C.Arb._ReInit.call(this);this.
CP();},_className:"Demonstrator::FilterView"};C.Abc={Dl:null,Ye:null,Sb:null,Yf:
null,DT:null,Yz:null,AmF:null,Au:null,O$:null,M4:null,Abb:null,FY:0,AvM:0,AF7:false
,Ai:function(Ae){A.Core.P.Ai.call(this,Ae);this.Sb.R(this.Au.Format(It));if(this.
AF7){this.Sb.Z(false);this.Yz.Z(false);this.DT.Z(false);this.Yf.Z(false);this.O$.
Ar(true);this.O$.Z(true);this.M4.Cw(2);this.M4.ATk(2);this.M4.H(A.abM(this.M4.M,
this.O$.M[2]));}else{this.Sb.Z(true);this.Yz.Z(true);this.DT.Z(true);this.Yf.Z(true
);this.O$.Ar(false);this.O$.Z(false);this.M4.Cw(3);this.M4.ATk(3);this.M4.H(A.abM(
this.M4.M,this.Sb.M[2]));}},BAO:function(G){this.Bne(!this.AF7);},Adx:function(G
){var F;if(!!this.Dl)this.Uk((F=this.Dl,F[1].call(F[0])));},Ab4:function(E){if(A.
aaZ(this.Dl,E))return;if(!!this.Dl)A.z$([this,this.Adx],this.Dl,0);this.Dl=E;if(
!!E)A.zX([this,this.Adx],E,0);if(!!E)A.pe([this,this.Adx],this);},Uk:function(E){
if(this.FY===E)return;this.FY=E;this.Au.Initialize(this.FY);this.BBU(this);this.
Am();},AiF:function(G){var B;var F;var BO=this.FY;var Ai$=this.Abb.C7(this.AvM);
this.AJh(Ai$);if(this.Au.Year>2100)this.Au.Initialize2(2100,12,31,0,0,0);this.Uk(((
B=(this.Au.JR()|0))<0)?B+0x100000000:B);if(this.FY!==BO){if(!!this.Dl)(F=this.Dl
,F[2].call(F[0],this.FY));A.abo(this.Dl,0);}},Air:function(G){var B;var F;var BO=
this.FY;var Ai$=this.Abb.C7(this.AvM);this.AK7(Ai$);if(this.Au.Year<2000)this.Au.
Initialize2(2000,1,1,0,0,0);this.Uk(((B=(this.Au.JR()|0))<0)?B+0x100000000:B);if(
this.FY!==BO){if(!!this.Dl)(F=this.Dl,F[2].call(F[0],this.FY));A.abo(this.Dl,0);
}},BmM:function(E){if(this.AvM===E)return;this.AvM=E;},Bne:function(E){if(this.AF7===
E)return;this.AF7=E;this.Am();},BBp:function(G){var B;var F;var BO=this.FY;this.
Au.Lp(this.O$.AEv());this.Au.Uo(this.O$.AEA());this.Au.Year=this.O$.ArA();this.Uk(((
B=(this.Au.JR()|0))<0)?B+0x100000000:B);if(this.FY!==BO){if(!!this.Dl)(F=this.Dl
,F[2].call(F[0],this.FY));A.abo(this.Dl,0);}},BBU:function(G){this.O$.Lp(this.Au.
GL);this.O$.Uo(this.Au.Hj);this.O$.AkE(this.Au.Year);},AJh:function(Ay2){var B;switch(
Ay2){case 0:if(this.Au.GL<this.Au.Zj())this.Au.Lp(this.Au.GL+1);else{this.Au.Lp(
1);this.AJh(2);}break;case 1:if((this.Au.GL+7)<=this.Au.Zj())this.Au.Lp(this.Au.
GL+7);else{this.Au.Lp((7-this.Au.Zj())+this.Au.GL);this.AJh(2);}break;case 2:if(
this.Au.Hj<12)this.Au.Uo(this.Au.Hj+1);else{this.Au.Uo(1);this.AJh(3);}break;case
3:this.Au.Year++;break;default:throw new Error(UR+Ay2.toFixed());}},AK7:function(
Ay2){var B;switch(Ay2){case 0:if(this.Au.GL>1)this.Au.Lp(this.Au.GL-1);else{this.
AK7(2);this.Au.Lp(this.Au.Zj());}break;case 1:if((this.Au.GL-7)>0)this.Au.Lp(this.
Au.GL-7);else{this.AK7(2);this.Au.Lp(this.Au.Zj()-(7-this.Au.GL));}break;case 2:
if(this.Au.Hj>1)this.Au.Uo(this.Au.Hj-1);else{this.Au.Uo(12);this.AK7(3);}break;
case 3:this.Au.Year--;break;default:throw new Error(UR+Ay2.toFixed());}},BkT:function(
){return this.AvM;},_Init:function(aArg){A.Core.P._Init.call(this,aArg);A.acg.Text.
_Init.call(this.Ye={I:this},0);A.acg.Text._Init.call(this.Sb={I:this},0);C.AvA._Init.
call(this.Yf={I:this},0);A.acq.DT._Init.call(this.DT={I:this},0);C.AvA._Init.call(
this.Yz={I:this},0);A.acg.Ap._Init.call(this.AmF={I:this},0);A.Core.Bs._Init.call(
this.Au={I:this},0);C.ANF._Init.call(this.O$={I:this},0);C.AvA._Init.call(this.M4={
I:this},0);C.Abb._Init.call(this.Abb={I:this},0);this.__proto__=C.Abc;this.H(Z2);
this.Ye.H(W2);this.Ye.A6(0x11);this.Ye.R(A.aaR(A.acf.Date));this.Ye.L(0xFF000000
);this.Sb.H(Z3);this.Sb.A6(0x11);this.Sb.R(W3);this.Sb.L(0xFF000000);this.Yf.H(Z4
);this.Yf.A9X(200);this.DT.H(Z5);this.DT.ArU(120);this.DT.GO=30;this.DT.ASY(A.jb.
CS);this.DT.A9z(A.jb.CS);this.DT.A9D(A.jb.CS);this.DT.ASZ(A.jb.Text);this.DT.A9E(
A.jb.Text);this.DT.A9A(A.jb.AV);this.DT.A9F(A.jb.Bm);this.DT.A9C(A.jb.AV);this.DT.
A9B(A.jb.Text);this.Yz.H(US);this.Yz.A9X(200);this.AmF.H(W4);this.O$.H(O3);this.
M4.H(Z6);this.M4.Cw(3);this.M4.ATk(3);this.M4.L(A.jb.Text);this.J(this.Ye,0);this.
J(this.Sb,0);this.J(this.Yf,0);this.J(this.DT,0);this.J(this.Yz,0);this.J(this.AmF
,0);this.J(this.O$,0);this.J(this.M4,0);this.Ye.S(A.aaL(A.fl.Ak));this.Sb.S(A.aaL(
A.fl.EK));this.Yf.AR=[this,this.Air];this.Yf.DB(A.aaL(C.AM1));this.Yf.ATl(A.aaL(
C.AM2));this.DT.At([this,this.BkT,this.BmM]);this.DT.A9L(this.Abb);this.DT.ArM(A.
aaL(A.fl.Ak));this.DT.AwH(A.aaL(A.fl.Ak));this.Yz.AR=[this,this.AiF];this.Yz.DB(
A.aaL(C.AM3));this.Yz.ATl(A.aaL(C.AM4));this.AmF.Ax(A.aaL(C.AP5));this.O$.Di=[this
,this.BBp];this.M4.AR=[this,this.BAO];this.M4.DB(A.aaL(A.ach.Ajr));this.M4.ATl(A.
aaL(A.ach.Ajr));},_Done:function(){this.__proto__=A.Core.P;this.Ye._Done();this.
Sb._Done();this.Yf._Done();this.DT._Done();this.Yz._Done();this.AmF._Done();this.
Au._Done();this.O$._Done();this.M4._Done();this.Abb._Done();A.Core.P._Done.call(
this);},_ReInit:function(){A.Core.P._ReInit.call(this);this.Ye._ReInit();this.Sb.
_ReInit();this.Yf._ReInit();this.DT._ReInit();this.Yz._ReInit();this.AmF._ReInit(
);this.Au._ReInit();this.O$._ReInit();this.M4._ReInit();this.Abb._ReInit();this.
Ye.R(A.aaR(A.acf.Date));this.Ye.S(A.aaL(A.fl.Ak));this.Sb.S(A.aaL(A.fl.EK));this.
DT.ArM(A.aaL(A.fl.Ak));this.DT.AwH(A.aaL(A.fl.Ak));},_Mark:function(D){var B;A.Core.
P._Mark.call(this,D);if((B=this.Dl)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((
B=this.Ye)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Sb)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Yf)._cycle!=D)B._Mark(B._cycle=D);if((B=this.DT)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Yz)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AmF)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.Au)._cycle!=D)B._Mark(B._cycle=D);if((B=this.O$
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.M4)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Abb)._cycle!=D)B._Mark(B._cycle=D);},_className:"Demonstrator::DateSelector"
};C.AvA={C8:null,Axm:null,ANV:null,AR:null,Bo:null,Dn:null,CR:null,Hv:null,Ys:null
,APH:0,TQ:0,AT1:0,AQ:0xFFFFFFFF,A2d:false,LF:false,KF:false,Qs:false,Ai:function(
Ae){var B;A.acn.Ahw.Ai.call(this,Ae);var He=((Ae&0x10)===0x10);var Fv=((Ae&0x20)===
0x20);var GE=this.CR.Down&&this.CR.YC;if(!He)this.Hv.Ax(this.ANV);else if(GE){this.
Hv.Ax(this.Axm);this.Hv.Cw(this.AT1);}else{this.Hv.Ax(this.C8);this.Hv.Cw(this.TQ
);}this.Hv.L(this.AQ);this.LF=He;this.KF=Fv;this.Qs=GE;},Qr:function(G){this.Am(
);A.pe(this.AR,this);},AiP:function(G){if(this.CR.Down)return;if(this.Dn.Acf)return;
this.Am();if(this.Bo.Bw){A.pe(this.AR,this);this.Bo.Ar(false);}this.Bo.Ar(true);
},BeK:function(G){this.Am();},AAE:function(G){if(!this.CR.YC)return;if(this.CR.NF
)return;if((this.Ys.VE<=0)||(this.CR.Jt<this.Ys.VE)){if(this.CR.Jt>=this.Bo.VE)A.
pe(this.AR,this);else this.Bo.Ar(true);}this.Ys.Ar(false);},AAD:function(G){this.
Ys.Ar(true);if(this.Bo.Bw){A.pe(this.AR,this);this.Bo.Ar(false);}},DB:function(E
){if(this.C8===E)return;this.C8=E;this.Am();},ATl:function(E){if(this.Axm===E)return;
this.Axm=E;this.Am();},A3d:function(G){if(!this.CR.YC)return;if(this.CR.NF)return;
if((this.APH>=0)&&this.A2d){this.A2d=false;this.Ys.Ar(true);A.pe(this.AR,this);}
},A9X:function(E){if(this.APH===E)return;this.APH=E;this.Ys.Wz(E);},BAh:function(
G){this.A2d=true;},Cw:function(E){if(this.TQ===E)return;this.TQ=E;this.Am();},ATk:
function(E){if(this.AT1===E)return;this.AT1=E;this.Am();},L:function(E){if(this.
AQ===E)return;this.AQ=E;this.Am();},_Init:function(aArg){A.acn.Ahw._Init.call(this
,aArg);A.Core.Timer._Init.call(this.Bo={I:this},0);A.Core.BK._Init.call(this.Dn={
I:this},0);A.Core.Bn._Init.call(this.CR={I:this},0);A.acg.Ap._Init.call(this.Hv={
I:this},0);A.Core.Timer._Init.call(this.Ys={I:this},0);this.__proto__=C.AvA;this.
H(O4);this.Bo.PR(0);this.Bo.Wz(50);this.Dn.Filter=149;this.CR.AZ(0x3F);this.CR.JU(
Rl);this.CR.Ku(W5);this.CR.DC(W6);this.CR.DM(J2);this.CR.Afe=0xF;this.CR.AFp(100
);this.Hv.AZ(0x3F);this.Hv.H(O4);this.Hv.A6(0x12);this.Ys.PR(0);this.J(this.CR,0
);this.J(this.Hv,0);this.Bo.MB=[this,this.Qr];this.Dn.BL=[this,this.AiP];this.CR.
AEG=[this,this.BeK];this.CR.Av6=[this,this.BeK];this.CR.D1=[this,this.A3d];this.
CR.Ln=[this,this.AAE];this.CR.BL=[this,this.AAD];this.Hv.Ax(A.aaL(A.aci.TK));this.
C8=A.aaL(A.aci.TK);this.Axm=A.aaL(A.aci.TK);this.ANV=A.aaL(A.aci.TK);this.Ys.MB=[
this,this.BAh];},_Done:function(){this.__proto__=A.acn.Ahw;this.Bo._Done();this.
Dn._Done();this.CR._Done();this.Hv._Done();this.Ys._Done();A.acn.Ahw._Done.call(
this);},_ReInit:function(){A.acn.Ahw._ReInit.call(this);this.Bo._ReInit();this.Dn.
_ReInit();this.CR._ReInit();this.Hv._ReInit();this.Ys._ReInit();},_Mark:function(
D){var B;A.acn.Ahw._Mark.call(this,D);if((B=this.C8)&&(B._cycle!=D))B._Mark(B._cycle=
D);if((B=this.Axm)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.ANV)&&(B._cycle
!=D))B._Mark(B._cycle=D);if((B=this.AR)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D
);if((B=this.Bo)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Dn)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.CR)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Hv)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.Ys)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Demonstrator::IconButton"};C.AME={Px:null,V:null,Aep:null,_Init:function(aArg){
C.FD._Init.call(this,aArg);A.acg.AL._Init.call(this.Px={I:this},0);A.acg.Text._Init.
call(this.V={I:this},0);C.Aep._Init.call(this.Aep={I:this},0);this.__proto__=C.AME;
this.H(UT);this.Px.AZ(0x1D);this.Px.H(Cc);this.Px.L(0xFFE6E6E6);this.V.AZ(0x1D);
this.V.H(Z7);this.V.A6(0x11);this.V.R(A.aaR(A.acf.A42));this.V.L(0xFF000000);this.
Aep.H(Z8);this.J(this.Px,0);this.J(this.V,0);this.J(this.Aep,0);this.V.S(A.aaL(A.
fl.Af));},_Done:function(){this.__proto__=C.FD;this.Px._Done();this.V._Done();this.
Aep._Done();C.FD._Done.call(this);},_ReInit:function(){C.FD._ReInit.call(this);this.
Px._ReInit();this.V._ReInit();this.Aep._ReInit();this.V.R(A.aaR(A.acf.A42));this.
V.S(A.aaL(A.fl.Af));},_Mark:function(D){var B;C.FD._Mark.call(this,D);if((B=this.
Px)._cycle!=D)B._Mark(B._cycle=D);if((B=this.V)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Aep)._cycle!=D)B._Mark(B._cycle=D);},_className:"Demonstrator::AnimalsHeader"
};C.Auv={Px:null,V:null,AeQ:null,AeO:null,Bn:null,DK:W7,Ahk:false,Ai:function(Ae
){C.FD.Ai.call(this,Ae);if(this.Ahk){this.AeO.Z(true);this.AeQ.Z(false);}else{this.
AeO.Z(false);this.AeQ.Z(true);}},BBb:function(G){if(this.Ahk)A.pe(this.Akq,this);
else A.pe(this.Akr,this);this.ArV(!this.Ahk);},T:function(E){if(this.DK===E)return;
this.DK=E;this.V.R(E);},ArV:function(E){if(this.Ahk===E)return;this.Ahk=E;this.Am(
);},_Init:function(aArg){C.FD._Init.call(this,aArg);A.acg.AL._Init.call(this.Px={
I:this},0);A.acg.Text._Init.call(this.V={I:this},0);A.acg.Ap._Init.call(this.AeQ={
I:this},0);A.acg.Ap._Init.call(this.AeO={I:this},0);A.Core.Bn._Init.call(this.Bn={
I:this},0);this.__proto__=C.Auv;this.H(Cc);this.Px.AZ(0x1D);this.Px.H(Cc);this.Px.
L(0xFFE6E6E6);this.V.AZ(0x1D);this.V.H(W8);this.V.A6(0x11);this.V.R(W7);this.V.L(
0xFF000000);this.AeQ.H(S9);this.AeQ.Z(false);this.AeO.AZ(0x3A);this.AeO.H(S9);this.
Bn.JU(J2);this.Bn.Ku(UU);this.Bn.DC(UV);this.Bn.DM(MH);this.J(this.Px,0);this.J(
this.V,0);this.J(this.AeQ,0);this.J(this.AeO,0);this.J(this.Bn,0);this.V.S(A.aaL(
A.fl.Af));this.AeQ.Ax(A.aaL(C.AMH));this.AeO.Ax(A.aaL(C.Ajq));this.Bn.Ln=[this,this.
BBb];},_Done:function(){this.__proto__=C.FD;this.Px._Done();this.V._Done();this.
AeQ._Done();this.AeO._Done();this.Bn._Done();C.FD._Done.call(this);},_ReInit:function(
){C.FD._ReInit.call(this);this.Px._ReInit();this.V._ReInit();this.AeQ._ReInit();
this.AeO._ReInit();this.Bn._ReInit();this.V.S(A.aaL(A.fl.Af));},_Mark:function(D
){var B;C.FD._Mark.call(this,D);if((B=this.Px)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.V)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AeQ)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.AeO)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Bn)._cycle!=D)B._Mark(
B._cycle=D);},_className:"Demonstrator::AccordionHeader"};C.Ba={AX:null,AR:null,
CR:null,Hr:-1,Zn:function(E){if(this.AX===E)return;this.AX=E;},Cf:function(Ad){A.
ab5("%s",AcK);},Zr:function(E){if(A.aa0(this.AR,E))return;this.AR=E;},AAE:function(
G){if(!this.CR.YC)return;if(this.CR.NF)return;A.pe(this.AR,this);},_Init:function(
aArg){A.Core.P._Init.call(this,aArg);A.Core.Bn._Init.call(this.CR={I:this},0);this.
__proto__=C.Ba;this.H(Cc);this.CR.AZ(0x3F);this.CR.JU(MH);this.CR.Ku(UV);this.CR.
DC(UU);this.CR.DM(J2);this.CR.Afe=0xF;this.CR.AFp(100);this.J(this.CR,0);this.CR.
Ln=[this,this.AAE];},_Done:function(){this.__proto__=A.Core.P;this.CR._Done();A.
Core.P._Done.call(this);},_ReInit:function(){A.Core.P._ReInit.call(this);this.CR.
_ReInit();},_Mark:function(D){var B;A.Core.P._Mark.call(this,D);if((B=this.AX)&&(
B._cycle!=D))B._Mark(B._cycle=D);if((B=this.AR)&&((B=B[0])._cycle!=D))B._Mark(B.
_cycle=D);if((B=this.CR)._cycle!=D)B._Mark(B._cycle=D);},_className:"Demonstrator::ListItem"
};C.FD={ASf:null,Akr:null,Akq:null,Bnb:function(E){if(A.aa0(this.ASf,E))return;this.
ASf=E;},A97:function(E){if(A.aa0(this.Akr,E))return;this.Akr=E;},A96:function(E){
if(A.aa0(this.Akq,E))return;this.Akq=E;},_Init:function(aArg){A.Core.P._Init.call(
this,aArg);this.__proto__=C.FD;this.H(Cc);},_Mark:function(D){var B;A.Core.P._Mark.
call(this,D);if((B=this.ASf)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.
Akr)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.Akq)&&((B=B[0])._cycle
!=D))B._Mark(B._cycle=D);},_className:"Demonstrator::ListHeader"};C.ANF={Di:null
,Aa4:null,WT:null,WS:null,WR:null,Nb:null,Na:null,KQ:null,LF:false,KF:false,BB4:
false,Ai:function(Ae){var B;A.acn.Ahu.Ai.call(this,Ae);var He=((Ae&0x10)===0x10);
var Fv=((Ae&0x20)===0x20);var BdL=(this.WR.ZJ||this.WS.ZJ)||this.WT.ZJ;if(BdL)this.
Aa4.L(A.jb.Text);else this.Aa4.L(A.jb.Bc);this.LF=He;this.KF=Fv;this.BB4=BdL;},AAz:
function(G){this.Am();if((!this.WR.ZJ&&!this.WS.ZJ)&&!this.WT.ZJ){var Va=this.AKa(
this.AEA(),this.ArA());var Adc=this.AEv();this.KQ.Jy(Va);if(Adc>Va)this.Lp(Va);A.
pe(this.Di,this);}},A3y:function(G){this.Am();},BlA:function(G){var B;var Gf=this.
Nb.G5;var CA=(A.acg.Text.isPrototypeOf(B=this.Nb.Ci)?B:null);if(!CA)return;CA.R(
A.abl(Gf+1900,4,10));CA.S(A.aaL(A.fl.Af));CA.L(A.jb.Text);CA.A6(0x12);CA.H(A.abK(
CA.M,[(B=this.Nb.M)[2]-B[0],this.Nb.GO]));},Blz:function(G){var B;var Gf=this.Na.
G5;var CA=(A.acg.Text.isPrototypeOf(B=this.Na.Ci)?B:null);if(!CA)return;CA.R(A.abl(
Gf+1,2,10)+S_);CA.S(A.aaL(A.fl.Af));CA.L(A.jb.Text);CA.A6(0x12);CA.H(A.abK(CA.M,[(
B=this.Na.M)[2]-B[0],this.Na.GO]));},Blx:function(G){var B;var Gf=this.KQ.G5;var
CA=(A.acg.Text.isPrototypeOf(B=this.KQ.Ci)?B:null);if(!CA)return;CA.R(A.abl(Gf+1
,2,10)+S_);CA.S(A.aaL(A.fl.Af));CA.L(A.jb.Text);CA.A6(0x12);CA.H(A.abK(CA.M,[(B=
this.KQ.M)[2]-B[0],this.KQ.GO]));},ArA:function(){return 1900+((((-this.Nb.Br/this.
Nb.GO)|0)+2)%200);},AkE:function(E){if(E<1900)E=1900;if(E>2100)E=2100;this.Nb.Gb(((
E-1900)-2)*-this.Nb.GO);var Va=this.AKa(this.AEA(),E);this.KQ.Jy(Va);if(this.AEv(
)>Va)this.Lp(Va);},AEA:function(){return 1+((((-this.Na.Br/this.Na.GO)|0)+2)%12);
},Uo:function(E){if(E<1)E=1;if(E>12)E=12;this.Na.Gb(((E-1)-2)*-this.Na.GO);var Va=
this.AKa(E,this.ArA());this.KQ.Jy(Va);if(this.AEv()>Va)this.Lp(Va);},AEv:function(
){return 1+((((-this.KQ.Br/this.KQ.GO)|0)+2)%this.KQ.AY);},Lp:function(E){var Va=
this.AKa(this.AEA(),this.ArA());if(E<1)E=1;if(E>Va)E=Va;this.KQ.Gb(((E-2)-1)*-this.
KQ.GO);},AKa:function(AfH,Ac4){if(AfH===2){if(!(Ac4%4)&&(!!(Ac4%100)||!(Ac4%400)
))return 29;else return 28;}else if((((AfH===4)||(AfH===6))||(AfH===9))||(AfH===
11))return 30;else return 31;},_Init:function(aArg){A.acn.Ahu._Init.call(this,aArg
);A.acg.BU._Init.call(this.Aa4={I:this},0);A.Core.H9._Init.call(this.WT={I:this}
,0);A.Core.H9._Init.call(this.WS={I:this},0);A.Core.H9._Init.call(this.WR={I:this
},0);A.Core.CM._Init.call(this.Nb={I:this},0);A.Core.CM._Init.call(this.Na={I:this
},0);A.Core.CM._Init.call(this.KQ={I:this},0);this.__proto__=C.ANF;this.H(Z9);this.
Aa4.H(Afz);this.Aa4.Nh(3);this.Aa4.L(0xFFE1E1E1);this.Aa4.Z(true);this.WT.H(Z_);
this.WT.ATx(W9);this.WT.AS5(0.2);this.WS.H(Z$);this.WS.ATx(W9);this.WS.AS5(0.2);
this.WR.H(W_);this.WR.ATx(W9);this.WR.AS5(0.2);this.Nb.H(Z_);this.Nb.AS3(true);this.
Nb.Gb(60);this.Nb.Ae6(30);this.Nb.Jy(200);this.Na.H(Z$);this.Na.AS3(true);this.Na.
Gb(60);this.Na.Ae6(30);this.Na.Jy(12);this.KQ.H(W_);this.KQ.AS3(true);this.KQ.Gb(
60);this.KQ.Ae6(30);this.KQ.Jy(31);this.J(this.Aa4,0);this.J(this.WT,0);this.J(this.
WS,0);this.J(this.WR,0);this.J(this.Nb,0);this.J(this.Na,0);this.J(this.KQ,0);this.
WT.Zi=[this,this.AAz];this.WT.SI=[this,this.A3y];this.WS.Zi=[this,this.AAz];this.
WS.SI=[this,this.A3y];this.WR.Zi=[this,this.AAz];this.WR.SI=[this,this.A3y];this.
Nb.Hl=[this,this.BlA];this.Nb.Aw3(this.WT);this.Na.Hl=[this,this.Blz];this.Na.Aw3(
this.WS);this.KQ.Hl=[this,this.Blx];this.KQ.Aw3(this.WR);},_Done:function(){this.
__proto__=A.acn.Ahu;this.Aa4._Done();this.WT._Done();this.WS._Done();this.WR._Done(
);this.Nb._Done();this.Na._Done();this.KQ._Done();A.acn.Ahu._Done.call(this);},_ReInit:
function(){A.acn.Ahu._ReInit.call(this);this.Aa4._ReInit();this.WT._ReInit();this.
WS._ReInit();this.WR._ReInit();this.Nb._ReInit();this.Na._ReInit();this.KQ._ReInit(
);},_Mark:function(D){var B;A.acn.Ahu._Mark.call(this,D);if((B=this.Di)&&((B=B[0
])._cycle!=D))B._Mark(B._cycle=D);if((B=this.Aa4)._cycle!=D)B._Mark(B._cycle=D);
if((B=this.WT)._cycle!=D)B._Mark(B._cycle=D);if((B=this.WS)._cycle!=D)B._Mark(B.
_cycle=D);if((B=this.WR)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Nb)._cycle!=D)
B._Mark(B._cycle=D);if((B=this.Na)._cycle!=D)B._Mark(B._cycle=D);if((B=this.KQ).
_cycle!=D)B._Mark(B._cycle=D);},_className:"Demonstrator::DatePicker"};C.AHh={_class:
function(){return A.aci.Al;},0:{FileName:"./res_index/DemonstratorWhiteTile.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[40,40],FrameDelay:0,_this:
null}};C.AVQ={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/DemonstratorWhiteTileSmall.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[40,40],FrameDelay:0,_this:
null}};C.AhG={_Init:function(aArg){A.Core.P._Init.call(this,aArg);this.__proto__=
C.AhG;this.H(E7);},_className:"Demonstrator::SelectionAreaContent"};C.AMx={Y:null
,Vu:null,Tz:null,BBD:function(G){var B;this.Tz.H(A.abI(this.Tz.M,((B=this.M)[3]-
B[1])-((B=this.Vu.M)[3]-B[1])));},_Init:function(aArg){C.AhG._Init.call(this,aArg
);A.Core.Y._Init.call(this.Y={I:this},0);C.AL2._Init.call(this.Vu={I:this},0);C.
AVz._Init.call(this.Tz={I:this},0);this.__proto__=C.AMx;this.Y.AZ(0x3F);this.Y.H(
E7);this.Y.JS(1);this.Vu.H(AhT);this.Vu.Aj(true);this.Vu.ArV(true);this.Tz.AZ(0x3
);this.Tz.H(KY);this.Tz.Aj(true);this.Tz.N0(C.AMq);this.Tz.Bm7(C.AME);this.J(this.
Y,0);this.J(this.Vu,0);this.J(this.Tz,0);this.Bb(this.Tz);this.Y.El=[this,this.BBD
];this.Tz.Zn(A._GetAutoObject(A.aco.Aqf));},_Done:function(){this.__proto__=C.AhG;
this.Y._Done();this.Vu._Done();this.Tz._Done();C.AhG._Done.call(this);},_ReInit:
function(){C.AhG._ReInit.call(this);this.Y._ReInit();this.Vu._ReInit();this.Tz._ReInit(
);},_Mark:function(D){var B;C.AhG._Mark.call(this,D);if((B=this.Y)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Vu)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Tz)._cycle!=
D)B._Mark(B._cycle=D);},_className:"Demonstrator::AnimalSelectionActions"};C.Vu={
_Init:function(aArg){C.Auv._Init.call(this,aArg);this.__proto__=C.Vu;this.T(A.aaR(
A.acf.A5U));},_ReInit:function(){C.Auv._ReInit.call(this);this.T(A.aaR(A.acf.A5U
));},_className:"Demonstrator::ActionsHeader"};C.AL2={Background:null,XK:null,Y:
null,Acu:null,Acj:null,ZD:null,Act:null,Aj$:null,Aka:null,Akb:null,Akc:null,Akd:
null,Ahk:false,Init:function(aArg){var B;A.zX([this,this.Be3],[B=A._GetAutoObject(
A.aco.G0),B.AEC,B.Ar3],0);A.pe([this,this.Be3],this);},Akr:function(G){this.ArV(
true);},Akq:function(G){this.ArV(false);},ArV:function(E){if(this.Ahk===E)return;
this.Ahk=E;this.XK.ArV(E);A.pe([this,this.Bfc],this);},Be3:function(G){var BBL=A.
_GetAutoObject(A.aco.G0).AhB===2;A._GetAutoObject(A.Device.Helper).JZ(this.ZD,BBL
);},Bfc:function(G){var B;if(this.Ahk)this.H(A.abI(this.M,(B=this.XK.M)[3]-B[1])
);else this.H(A.abI(this.M,((B=this.XK.M)[3]-B[1])+((B=this.Y.Db(0x401))[3]-B[1]
)));},_Init:function(aArg){A.Core.P._Init.call(this,aArg);A.acg.AL._Init.call(this.
Background={I:this},0);C.Vu._Init.call(this.XK={I:this},0);A.Core.Y._Init.call(this.
Y={I:this},0);C.Acu._Init.call(this.Acu={I:this},0);C.Acj._Init.call(this.Acj={I:
this},0);C.ZD._Init.call(this.ZD={I:this},0);C.Act._Init.call(this.Act={I:this},
0);A.acg.C5._Init.call(this.Aj$={I:this},0);A.acg.C5._Init.call(this.Aka={I:this
},0);A.acg.C5._Init.call(this.Akb={I:this},0);A.acg.C5._Init.call(this.Akc={I:this
},0);A.acg.C5._Init.call(this.Akd={I:this},0);this.__proto__=C.AL2;this.H(AcL);this.
Background.AZ(0x3F);this.Background.H(AcL);this.XK.AZ(0x1D);this.XK.H(Cc);this.Y.
H(Lv);this.Y.JS(1);this.Acu.H(AhU);this.Acu.Aj(true);this.Acj.H(Aob);this.Acj.Aj(
true);this.ZD.H(Oa);this.ZD.Aj(true);this.Act.H(W$);this.Act.Aj(true);this.Aj$.DC(
UV);this.Aj$.DM(MH);this.Aj$.L(A.jb.Bc);this.Aka.DC(Aaa);this.Aka.DM(AhV);this.Aka.
L(A.jb.Bc);this.Akb.DC(AhW);this.Akb.DM(AcM);this.Akb.L(A.jb.Bc);this.Akc.DC(UW);
this.Akc.DM(Aoc);this.Akc.L(A.jb.Bc);this.Akd.DC(Aod);this.Akd.DM(Aoe);this.Akd.
L(A.jb.Bc);this.J(this.Background,0);this.J(this.XK,0);this.J(this.Y,0);this.J(this.
Acu,0);this.J(this.Acj,0);this.J(this.ZD,0);this.J(this.Act,0);this.J(this.Aj$,0
);this.J(this.Aka,0);this.J(this.Akb,0);this.J(this.Akc,0);this.J(this.Akd,0);this.
XK.A97([this,this.Akr]);this.XK.A96([this,this.Akq]);this.Y.El=[this,this.Bfc];this.
Init(aArg);},_Done:function(){this.__proto__=A.Core.P;this.Background._Done();this.
XK._Done();this.Y._Done();this.Acu._Done();this.Acj._Done();this.ZD._Done();this.
Act._Done();this.Aj$._Done();this.Aka._Done();this.Akb._Done();this.Akc._Done();
this.Akd._Done();A.Core.P._Done.call(this);},_ReInit:function(){A.Core.P._ReInit.
call(this);this.Background._ReInit();this.XK._ReInit();this.Y._ReInit();this.Acu.
_ReInit();this.Acj._ReInit();this.ZD._ReInit();this.Act._ReInit();this.Aj$._ReInit(
);this.Aka._ReInit();this.Akb._ReInit();this.Akc._ReInit();this.Akd._ReInit();},
_Mark:function(D){var B;A.Core.P._Mark.call(this,D);if((B=this.Background)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.XK)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
Y)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Acu)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Acj)._cycle!=D)B._Mark(B._cycle=D);if((B=this.ZD)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Act)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Aj$)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Aka)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Akb)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.Akc)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
Akd)._cycle!=D)B._Mark(B._cycle=D);},_className:"Demonstrator::ActionsMenu"};C.Jq={
Yw:null,Ag8:null,Bn:null,C5:null,Af7:function(G){},A0u:function(s){this.Af7(s);}
,_Init:function(aArg){A.Core.P._Init.call(this,aArg);A.acg.Ap._Init.call(this.Yw={
I:this},0);A.acg.Ap._Init.call(this.Ag8={I:this},0);A.Core.Bn._Init.call(this.Bn={
I:this},0);A.acg.C5._Init.call(this.C5={I:this},0);this.__proto__=C.Jq;this.H(Cc
);this.Yw.H(Aof);this.Yw.L(A.jb.Text);this.Ag8.H(Ak$);this.Ag8.L(A.jb.Text);this.
Ag8.Cw(0);this.Bn.JU(J2);this.Bn.Ku(N$);this.Bn.DC(P_);this.Bn.DM(MH);this.C5.DC(
P_);this.C5.DM(N$);this.C5.L(A.jb.Bc);this.J(this.Yw,0);this.J(this.Ag8,0);this.
J(this.Bn,0);this.J(this.C5,0);this.Yw.Ax(A.aaL(A.aci.TK));this.Ag8.Ax(A.aaL(A.aci.
ATR));this.Bn.BL=[this,this.A0u];},_Done:function(){this.__proto__=A.Core.P;this.
Yw._Done();this.Ag8._Done();this.Bn._Done();this.C5._Done();A.Core.P._Done.call(
this);},_ReInit:function(){A.Core.P._ReInit.call(this);this.Yw._ReInit();this.Ag8.
_ReInit();this.Bn._ReInit();this.C5._ReInit();},_Mark:function(D){var B;A.Core.P.
_Mark.call(this,D);if((B=this.Yw)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ag8).
_cycle!=D)B._Mark(B._cycle=D);if((B=this.Bn)._cycle!=D)B._Mark(B._cycle=D);if((B=
this.C5)._cycle!=D)B._Mark(B._cycle=D);},_className:"Demonstrator::ActionsItem"};
C.Acj={AGs:null,DT:null,Yv:null,BU:null,M8:null,AhC:null,ANz:0,Init:function(aArg
){var B;A.zX([this,this.Bfb],[B=A._GetAutoObject(A.aco.G0),B.AEC,B.Ar3],0);A.pe([
this,this.Bfb],this);},Af7:function(G){var Iz=A.ab0(this.Yv.String,0,10);var Ih=
false;switch(A._GetAutoObject(A.aco.G0).AhB){case 2:Ih=A._GetAutoObject(A.aco.G0
).BB1(Iz);break;case 0:case 1:Ih=A._GetAutoObject(A.aco.G0).Bga(Iz);break;default:
A.ab5("%s%e",AsV,A._GetAutoObject(A.aco.G0).AhB);}if(Ih){Iz=Iz+1;this.Yv.R(Iz.toFixed(
));}},Bfb:function(G){var AJe=null;var AKq=0;switch(A._GetAutoObject(A.aco.G0).AhB
){case 2:{AJe=A.aaL(A.ach.Avx);AKq=276;}break;case 0:{AJe=A.aaL(A.ach.AjV);AKq=900;
}break;case 1:{AJe=A.aaL(C.AxP);AKq=276;}break;default:A.ab5("%s%e",AsV,A._GetAutoObject(
A.aco.G0).AhB);}this.Yv.R(((AKq*1000000000000)+(A.abY(this.Yv.String,0,10)%1000000000000
)).toFixed());this.Yw.Ax(AJe);},BlZ:function(E){var F;if(this.ANz===E)return;this.
ANz=E;if(!!this.AGs)(F=this.AGs,F[2].call(F[0],E));},BkF:function(){return this.
ANz;},_Init:function(aArg){C.Jq._Init.call(this,aArg);A.acq.DT._Init.call(this.DT={
I:this},0);C.Akm._Init.call(this.Yv={I:this},0);A.acg.BU._Init.call(this.BU={I:this
},0);A.acg.Ap._Init.call(this.M8={I:this},0);C.AhC._Init.call(this.AhC={I:this},
0);this.__proto__=C.Acj;var B;this.DT.H(Ax2);this.DT.ArU(120);this.DT.GO=30;this.
DT.ASY(A.jb.Rg);this.DT.A9z(A.jb.CS);this.DT.A9D(A.jb.CS);this.DT.ASZ(A.jb.Rg);this.
DT.A9E(A.jb.Text);this.DT.A9A(A.jb.AV);this.DT.A9F(A.jb.Bm);this.DT.A9C(A.jb.AV);
this.DT.A9B(A.jb.Rg);this.Bn.JU(Ax3);this.Bn.DM(O5);this.Yv.H(Rm);this.Yv.R(Ax4);
this.Yv.L(A.jb.Text);this.BU.H(UX);this.BU.Nh(2);this.BU.L(A.jb.Text);this.M8.H(
AsW);this.M8.L(A.jb.Text);this.M8.A6(0xC);this.M8.Cw(3);this.J(this.DT,-2);this.
J(this.Yv,-1);this.J(this.BU,0);this.J(this.M8,0);this.DT.At([this,this.BkF,this.
BlZ]);this.DT.A9L(this.AhC);this.DT.ArM(A.aaL(A.fl.Bh));this.DT.AwH(A.aaL(A.fl.Bh
));this.M8.Ax(A.aaL(A.ach.Ajr));this.AGs=[B=A._GetAutoObject(A.aco.G0),B.AEC,B.Ar3
];this.Init(aArg);},_Done:function(){this.__proto__=C.Jq;this.DT._Done();this.Yv.
_Done();this.BU._Done();this.M8._Done();this.AhC._Done();C.Jq._Done.call(this);}
,_ReInit:function(){C.Jq._ReInit.call(this);this.DT._ReInit();this.Yv._ReInit();
this.BU._ReInit();this.M8._ReInit();this.AhC._ReInit();this.DT.ArM(A.aaL(A.fl.Bh
));this.DT.AwH(A.aaL(A.fl.Bh));},_Mark:function(D){var B;C.Jq._Mark.call(this,D);
if((B=this.AGs)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.DT)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.Yv)._cycle!=D)B._Mark(B._cycle=D);if((B=this.BU
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.M8)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.AhC)._cycle!=D)B._Mark(B._cycle=D);},_className:"Demonstrator::ScanIdAction"
};C.Acu={UH:null,OT:null,A4i:0,Init:function(aArg){var B;A.zX([this,this.BAU],[B=
A._GetAutoObject(A.aco.G0),B.ASF,B.ATq],0);A.zX([this,this.AAH],[B=A._GetAutoObject(
A.Device.Device),B.Arx,B.Atf],0);A.pe([this,this.AAH],this);},Ai:function(Ae){C.
Jq.Ai.call(this,Ae);this.OT.Z(!A._GetAutoObject(A.aco.G0).Axn);},Af7:function(G){
var B;A._GetAutoObject(A.aco.G0).BeN(this);},AAH:function(G){if(A._GetAutoObject(
A.Device.Device).TemperatureUnit!==this.A4i){switch(A._GetAutoObject(A.Device.Device
).TemperatureUnit){case 0:this.OT.R(A.abk(A._GetAutoObject(A.aco.G0).WO/100,0,1)
);break;case 1:{var Auk=A._GetAutoObject(A.Device.Converter).AU7(A._GetAutoObject(
A.aco.G0).WO/100,0,A._GetAutoObject(A.Device.Device).TemperatureUnit);this.OT.R(
A.abk(Auk,0,1));}break;default:A.ab5("%s%e",Ax5,A._GetAutoObject(A.Device.Device
).TemperatureUnit);}this.A4i=A._GetAutoObject(A.Device.Device).TemperatureUnit;}
},BAD:function(G){var B;var Agn=A.abX(this.OT.String,0);Agn=A._GetAutoObject(A.Device.
Converter).AU7(Agn,A._GetAutoObject(A.Device.Device).TemperatureUnit,0);Agn*=100;
A._GetAutoObject(A.aco.G0).AFJ(Math.round(Agn)|0);},BAU:function(G){this.Am();},
_Init:function(aArg){C.Jq._Init.call(this,aArg);A.acr.UH._Init.call(this.UH={I:this
},0);C.OT._Init.call(this.OT={I:this},0);this.__proto__=C.Acu;var B;this.UH.H(Ax6
);this.UH.A91(A.aaR(A.acf.A49));this.OT.H(Ax7);this.OT.R(Aog);this.OT.L(A.jb.Text
);this.OT.Bl0(true);this.A4i=A._GetAutoObject(A.Device.Device).TemperatureUnit;this.
J(this.UH,0);this.J(this.OT,0);this.Yw.Ax(A.aaL(A.ach.Ag3));this.UH.At([B=A._GetAutoObject(
A.aco.G0),B.ASF,B.ATq]);this.UH.OnSetAppearance(A._GetAutoObject(A.acx.AuS));this.
OT.Di=[this,this.BAD];this.Init(aArg);},_Done:function(){this.__proto__=C.Jq;this.
UH._Done();this.OT._Done();C.Jq._Done.call(this);},_ReInit:function(){C.Jq._ReInit.
call(this);this.UH._ReInit();this.OT._ReInit();this.UH.A91(A.aaR(A.acf.A49));},_Mark:
function(D){var B;C.Jq._Mark.call(this,D);if((B=this.UH)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.OT)._cycle!=D)B._Mark(B._cycle=D);},_className:"Demonstrator::TemperatureAction"
};C.Arb={Q:null,BU:null,Bn:null,AgH:null,Am6:null,Am5:null,Arg:null,Text:null,Ho:
null,Ap:null,CX:null,Arf:null,Arh:null,Apf:false,Bl:function(aSize){this.Ho.H(A.
abK(this.Ho.M,aSize));this.BU.Axu(1);this.BU.Ju(0,40);this.BU.Fl(0,aSize[0]-20,20
,12.5,12.5,-90,90,10);this.BU.Fl(0,20,20,12.5,12.5,90,270,10);this.BU.VM(0);},Ai:
function(Ae){var B;var F;A.Core.P.Ai.call(this,Ae);var IB=((Ae&0x40)===0x40);if(
IB){if(!!this.Q)this.Text.R((F=this.Q,F[1].call(F[0])));this.AgH.Ar(true);this.Ap.
Z(false);}else{if(!!this.Q)this.Text.R((F=this.Q,F[1].call(F[0])));this.AgH.Ar(false
);this.CX.Z(false);this.Ap.Z(true);}this.Apf=IB;},Af7:function(G){var B;if(!((this.
U&0x80)===0x80))this.Im().AMR(this);},A78:function(G){},BaL:function(s){this.A78(
s);},Bj7:function(G){var B;var F;if(!this.Q||!(F=this.Q,F[1].call(F[0])).length)
this.CX.H(A.abM(this.CX.M,A.aaI(this.Text.M)[0]));else{this.CX.H(A.abM(this.CX.M
,this.Text.AOP(0)[2]+2));this.CX.H(A.abO(this.CX.M,this.Text.AOP(0)[1]));this.CX.
H(A.abI(this.CX.M,(B=this.Text.AOP(0))[3]-B[1]));}this.Ap.H(A.abM(this.Ap.M,this.
Text.M[0]-((B=this.Ap.M)[2]-B[0])));},A76:function(G){},BaK:function(s){this.A76(
s);},At:function(E){if(A.aaZ(this.Q,E))return;if(!!this.Q)A.z$([this,this.IC],this.
Q,0);this.Q=E;if(!!E)A.zX([this,this.IC],E,0);if(!!E)A.pe([this,this.IC],this);}
,IC:function(G){this.Am();},BlC:function(G){var B;if(((this.U&0x80)===0x80))this.
Im().ACE(this);},BeV:function(G){},_Init:function(aArg){A.Core.P._Init.call(this
,aArg);A.Graphics.Hy._Init.call(this.BU={I:this},0);A.Core.Bn._Init.call(this.Bn={
I:this},0);A.acl.TF._Init.call(this.AgH={I:this},0);A.Core.BK._Init.call(this.Am6={
I:this},0);A.Core.BK._Init.call(this.Am5={I:this},0);A.Core.BK._Init.call(this.Arg={
I:this},0);A.acg.Text._Init.call(this.Text={I:this},0);A.acg.Ho._Init.call(this.
Ho={I:this},0);A.acg.Ap._Init.call(this.Ap={I:this},0);A.acg.AL._Init.call(this.
CX={I:this},0);A.Core.BK._Init.call(this.Arf={I:this},0);A.Core.BK._Init.call(this.
Arh={I:this},0);this.__proto__=C.Arb;var B;this.H(AfA);this.Bn.AZ(0x3F);this.Bn.
JU(J2);this.Bn.Ku(Aoh);this.Bn.DC(IV);this.Bn.DM(Rl);this.AgH.Fq(530);this.AgH.Um(
530);this.Am6.Filter=143;this.Am5.Filter=45;this.Arg.Filter=1;this.Text.AZ(0x3F);
this.Text.H(AfA);this.Text.I$(true);this.Text.A6(0x12);this.Text.L(0xFFB3B3B3);this.
Ho.H(AfA);this.Ho.L(0xFFB3B3B3);this.Ho.Nh(1);this.Ap.H(Aoi);this.CX.H(Xa);this.
CX.L(0xFFB3B3B3);this.CX.Z(false);this.Arf.Filter=138;this.Arh.Filter=137;this.J(
this.Bn,0);this.J(this.Text,0);this.J(this.Ho,0);this.J(this.Ap,0);this.J(this.CX
,0);this.Bn.Ln=[this,this.Af7];this.AgH.Q=[B=this.CX,B.Fp,B.Z];this.Am6.BL=[this
,this.BaL];this.Am6.D1=[this,this.BaL];this.Am5.BL=[this,this.BaK];this.Am5.D1=[
this,this.BaK];this.Arg.BL=[this,this.BlC];this.Text.Q5([this,this.Bj7]);this.Text.
S(A.aaL(A.fl.Ak));this.Ho.Zs(this.BU);this.Ap.Ax(null);this.Arf.BL=[this,this.BeV
];this.Arh.BL=[this,this.BeV];},_Done:function(){this.__proto__=A.Core.P;this.BU.
_Done();this.Bn._Done();this.AgH._Done();this.Am6._Done();this.Am5._Done();this.
Arg._Done();this.Text._Done();this.Ho._Done();this.Ap._Done();this.CX._Done();this.
Arf._Done();this.Arh._Done();A.Core.P._Done.call(this);},_ReInit:function(){A.Core.
P._ReInit.call(this);this.BU._ReInit();this.Bn._ReInit();this.AgH._ReInit();this.
Am6._ReInit();this.Am5._ReInit();this.Arg._ReInit();this.Text._ReInit();this.Ho.
_ReInit();this.Ap._ReInit();this.CX._ReInit();this.Arf._ReInit();this.Arh._ReInit(
);this.Text.S(A.aaL(A.fl.Ak));},_Mark:function(D){var B;A.Core.P._Mark.call(this
,D);if((B=this.Q)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.BU)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.Bn)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
AgH)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Am6)._cycle!=D)B._Mark(B._cycle=D);
if((B=this.Am5)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Arg)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Text)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ho)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.Ap)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
CX)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Arf)._cycle!=D)B._Mark(B._cycle=D);
if((B=this.Arh)._cycle!=D)B._Mark(B._cycle=D);},_className:"Demonstrator::InputView"
};C.Aep={Background:null,Yl:null,_Init:function(aArg){A.Core.P._Init.call(this,aArg
);A.acg.AL._Init.call(this.Background={I:this},0);C.Yl._Init.call(this.Yl={I:this
},0);this.__proto__=C.Aep;var B;this.H(Aoj);this.Background.H(Aoj);this.Yl.AZ(0x1D
);this.Yl.H(AsX);this.J(this.Background,0);this.J(this.Yl,0);this.Yl.At([B=A._GetAutoObject(
A.aco.AgK),B.A8X,B.AFE]);},_Done:function(){this.__proto__=A.Core.P;this.Background.
_Done();this.Yl._Done();A.Core.P._Done.call(this);},_ReInit:function(){A.Core.P.
_ReInit.call(this);this.Background._ReInit();this.Yl._ReInit();},_Mark:function(
D){var B;A.Core.P._Mark.call(this,D);if((B=this.Background)._cycle!=D)B._Mark(B.
_cycle=D);if((B=this.Yl)._cycle!=D)B._Mark(B._cycle=D);},_className:"Demonstrator::FilterRow"
};C.OT={Init:function(aArg){var B;A.zX([this,this.AAH],[B=A._GetAutoObject(A.Device.
Device),B.Arx,B.Atf],0);A.pe([this,this.AAH],this);},Ai:function(Ae){var B;C.Akm.
Ai.call(this,Ae);var IB=((this.U&0x40)===0x40);if(!IB&&(this.String.length>0))this.
Text.R(((this.String+AsY)+A._GetAutoObject(A.acj.Temperature).AlJ())+String.fromCharCode(
0x0A));else this.Text.R(this.String+String.fromCharCode(0x0A));if(this.D6>this.String.
length)this.D6=this.String.length;},AAH:function(G){this.Am();},_Init:function(aArg
){C.Akm._Init.call(this,aArg);this.__proto__=C.OT;this.Init(aArg);},_className:"Demonstrator::TemperatureInputView"
};C.Akm={B6:null,Di:null,IW:null,Cq:null,AmC:null,Sd:null,KL:null,Bn:null,Text:null
,CX:null,Aqv:null,Asd:null,BU:null,Ho:null,Art:null,Aq0:null,AqI:null,String:A.jV
,D6:0,AQ:0xFFB3B3B3,AvW:15,ANH:false,Lz:false,Bl:function(aSize){this.Ho.H(A.abK(
this.Ho.M,aSize));this.BU.Axu(1);this.BU.Ju(0,40);this.BU.Fl(0,aSize[0]-20,20,12.5
,12.5,-90,90,10);this.BU.Fl(0,20,20,12.5,12.5,90,270,10);this.BU.VM(0);},Ai:function(
Ae){var B;A.acn.Jd.Ai.call(this,Ae);if(((Ae&0x40)===0x40))this.IW.Ar(true);else{
this.IW.Ar(false);this.CX.Z(false);}},A4s:function(G){var B;var Bd=this.Text.M;var
Nv=0;var Nw=0;if(this.CX.Es[0]<Bd[0])Nv=Bd[0]-this.CX.Es[0];if(this.CX.Es[0]>Bd[
2])Nv=Bd[2]-this.CX.Es[0];if(this.CX.Es[1]<Bd[1])Nw=Bd[1]-this.CX.Es[1];if(this.
CX.EC[1]>Bd[3])Nw=Bd[3]-this.CX.EC[1];if(!!Nv||!!Nw)this.Text.Gb(A.abf(this.Text.
Br,[Nv,Nw]));Nv=this.Text.Br[0];Nw=this.Text.Br[1];var C4=[(B=this.Text.Db())[2]-
B[0],B[3]-B[1]];if(C4[0]<=((B=this.Text.M)[2]-B[0]))Nv=0;if(C4[1]<=((B=this.Text.
M)[3]-B[1]))Nw=0;this.Text.Gb([Nv,Nw]);},Amk:function(G){if(!this.B6)return;var A3W=
this.Text.AGO(this.D6);var pos=this.Text.Aff(A3W);this.CX.DM(A.abe(pos,[0,this.B6.
Ascent]));this.CX.DC(A.abf(pos,[0,this.B6.Descent]));if(this.IW.Bw){this.IW.Ar(false
);this.IW.Ar(true);}if(this.Lz){A.pe([this,this.A4s],this);this.Lz=false;}},AAD:
function(G){if(!this.A6R(0x80))this.Im().AMR(this);var EH=this.Text.ATV(this.Bn.
H0);var Vf=this.Text.AnP(EH);if(Vf!==this.D6){this.D6=Vf;A.pe([this,this.Amk],this
);this.Lz=true;}},AAx:function(G){if(!this.B6)return;var EH=this.Text.AGO(this.D6
);if(this.Cq.CO===6){EH=[EH[0]-1,EH[1]];if(this.Text.AnP(EH)===this.D6){EH=[EH[0
],EH[1]-1];EH=[this.Text.AC2(EH[1]).length,EH[1]];}}if(this.Cq.CO===7){EH=[EH[0]+
1,EH[1]];if(this.Text.AnP(EH)===this.D6){EH=[EH[0],EH[1]+1];EH=[0,EH[1]];}}var Vf=
this.Text.AnP(EH);if(Vf!==this.D6){this.D6=Vf;A.pe([this,this.Amk],this);this.Lz=
true;}},BeE:function(G){if(!this.D6)return;this.R(A.ab1(this.String,this.D6-1,1)
);this.D6=this.D6-1;this.Lz=true;A.pe(this.Di,this);},AAy:function(G){if(this.D6>=
this.String.length)return;this.R(A.ab1(this.String,this.D6,1));this.Lz=true;A.pe(
this.Di,this);},BeJ:function(G){if(this.String.length>=this.AvW)return;var ByZ=this.
KL.DQ;var Aui=String.fromCharCode(ByZ);this.R(A.abU(this.String,Aui,this.D6));this.
D6=this.D6+Aui.length;this.Lz=true;A.pe(this.Di,this);},R:function(E){if(this.String===
E)return;this.String=E;if(this.D6>(E.length+1))this.D6=E.length;this.Text.R(E+String.
fromCharCode(0x0A));this.Lz=true;this.Text.Gb(J2);},L:function(E){if(this.AQ===E
)return;this.AQ=E;this.Text.L(E);this.CX.L(E);this.Ho.L(E);},S:function(E){if(this.
B6===E)return;this.B6=E;this.Text.S(E);this.Lz=true;this.Text.Gb(J2);},BeW:function(
G){if(this.ANH===false)return;if(this.String.indexOf(String.fromCharCode(0x2E),0
)>=0)return;if(this.String.length>=this.AvW)return;this.R(A.abU(this.String,S_,this.
D6));this.D6=this.D6+1;this.Lz=true;A.pe(this.Di,this);},Bbw:function(s){this.BeW(
s);},Bl0:function(E){if(this.ANH===E)return;this.ANH=E;if(E===false){var BfD=this.
String.indexOf(String.fromCharCode(0x2E),0);if(BfD>=0)this.R(A.abV(this.String,BfD
));}this.Lz=true;this.Text.Gb(J2);},Bm6:function(E){if(this.AvW===E)return;this.
AvW=E;this.R(A.abV(this.String,E));this.Lz=true;this.Text.Gb(J2);},BAL:function(
G){if(this.A6R(0x80)){this.Im().ACE(this);this.Cr(0x10,0x0);}this.Am();},BAz:function(
G){var Vf=this.String.length;if(Vf!==this.D6){this.D6=Vf;A.pe([this,this.Amk],this
);this.Lz=true;}},BAC:function(G){if(!!this.D6){this.D6=0;A.pe([this,this.Amk],this
);this.Lz=true;}},_Init:function(aArg){A.acn.Jd._Init.call(this,aArg);A.acl.TF._Init.
call(this.IW={I:this},0);A.Core.BK._Init.call(this.Cq={I:this},0);A.Core.BK._Init.
call(this.AmC={I:this},0);A.Core.BK._Init.call(this.Sd={I:this},0);A.Core.BK._Init.
call(this.KL={I:this},0);A.Core.Bn._Init.call(this.Bn={I:this},0);A.acg.Text._Init.
call(this.Text={I:this},0);A.acg.C5._Init.call(this.CX={I:this},0);A.Core.BK._Init.
call(this.Aqv={I:this},0);A.Core.BK._Init.call(this.Asd={I:this},0);A.Graphics.Hy.
_Init.call(this.BU={I:this},0);A.acg.Ho._Init.call(this.Ho={I:this},0);A.Core.BK.
_Init.call(this.Art={I:this},0);A.Core.BK._Init.call(this.Aq0={I:this},0);A.Core.
BK._Init.call(this.AqI={I:this},0);this.__proto__=C.Akm;var B;this.H(AfA);this.IW.
B2=false;this.IW.Cx=true;this.IW.Fq(500);this.IW.Um(500);this.Cq.Filter=147;this.
AmC.Filter=45;this.Sd.Filter=44;this.KL.Filter=143;this.Bn.AZ(0x3F);this.Bn.JU(Rl
);this.Bn.Ku(IV);this.Bn.DC(Aoh);this.Bn.DM(J2);this.Bn.AFp(3);this.Text.AZ(0x3F
);this.Text.H(AfA);this.Text.KR(false);this.Text.A6(0x12);this.Text.R(A.jV);this.
Text.L(0xFFB3B3B3);this.CX.DC(AsZ);this.CX.DM(Aok);this.CX.A_E(2);this.CX.A_D(2);
this.CX.L(0xFFB3B3B3);this.CX.Z(false);this.Aqv.Filter=138;this.Asd.Filter=137;this.
Ho.H(AfA);this.Ho.L(0xFFB3B3B3);this.Ho.Nh(1);this.Art.Filter=1;this.Aq0.Filter=
41;this.AqI.Filter=42;this.J(this.Bn,0);this.J(this.Text,0);this.J(this.CX,0);this.
J(this.Ho,0);this.IW.Q=[B=this.CX,B.Fp,B.Z];this.Cq.BL=[this,this.AAx];this.Cq.D1=[
this,this.AAx];this.AmC.BL=[this,this.BeE];this.AmC.D1=[this,this.BeE];this.Sd.BL=[
this,this.AAy];this.Sd.D1=[this,this.AAy];this.KL.BL=[this,this.BeJ];this.KL.D1=[
this,this.BeJ];this.Bn.BL=[this,this.AAD];this.Text.Q5([this,this.Amk]);this.Text.
S(A.aaL(A.fl.Ak));this.B6=A.aaL(A.fl.Ak);this.Aqv.BL=[this,this.Bbw];this.Asd.BL=[
this,this.Bbw];this.Ho.Zs(this.BU);this.Art.BL=[this,this.BAL];this.Aq0.BL=[this
,this.BAC];this.AqI.BL=[this,this.BAz];},_Done:function(){this.__proto__=A.acn.Jd;
this.IW._Done();this.Cq._Done();this.AmC._Done();this.Sd._Done();this.KL._Done();
this.Bn._Done();this.Text._Done();this.CX._Done();this.Aqv._Done();this.Asd._Done(
);this.BU._Done();this.Ho._Done();this.Art._Done();this.Aq0._Done();this.AqI._Done(
);A.acn.Jd._Done.call(this);},_ReInit:function(){A.acn.Jd._ReInit.call(this);this.
IW._ReInit();this.Cq._ReInit();this.AmC._ReInit();this.Sd._ReInit();this.KL._ReInit(
);this.Bn._ReInit();this.Text._ReInit();this.CX._ReInit();this.Aqv._ReInit();this.
Asd._ReInit();this.BU._ReInit();this.Ho._ReInit();this.Art._ReInit();this.Aq0._ReInit(
);this.AqI._ReInit();this.Text.S(A.aaL(A.fl.Ak));this.S(A.aaL(A.fl.Ak));},_Mark:
function(D){var B;A.acn.Jd._Mark.call(this,D);if((B=this.B6)&&(B._cycle!=D))B._Mark(
B._cycle=D);if((B=this.Di)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.
IW)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Cq)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.AmC)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Sd)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.KL)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Bn)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Text)._cycle!=D)B._Mark(B._cycle=D);if((B=this.CX)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.Aqv)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
Asd)._cycle!=D)B._Mark(B._cycle=D);if((B=this.BU)._cycle!=D)B._Mark(B._cycle=D);
if((B=this.Ho)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Art)._cycle!=D)B._Mark(B.
_cycle=D);if((B=this.Aq0)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AqI)._cycle!=
D)B._Mark(B._cycle=D);},_className:"Demonstrator::NumberInput"};C.Act={LabelDataSync:
null,Af7:function(G){var B;A.pe([B=A._GetAutoObject(A.acs.Acn),B.BCa],this);},_Init:
function(aArg){C.Jq._Init.call(this,aArg);A.kR.CH._Init.call(this.LabelDataSync={
I:this},0);this.__proto__=C.Act;this.LabelDataSync.H(Aol);this.LabelDataSync.R(A.
aaR(A.acf.A5J));this.LabelDataSync.L(A.jb.Text);this.J(this.LabelDataSync,0);this.
Yw.Ax(A.aaL(C.AUY));this.LabelDataSync.S(A.aaL(A.fl.Af));this.LabelDataSync.A2(A.
aaL(A.fl.Ak));},_Done:function(){this.__proto__=C.Jq;this.LabelDataSync._Done();
C.Jq._Done.call(this);},_ReInit:function(){C.Jq._ReInit.call(this);this.LabelDataSync.
_ReInit();this.LabelDataSync.R(A.aaR(A.acf.A5J));this.LabelDataSync.S(A.aaL(A.fl.
Af));this.LabelDataSync.A2(A.aaL(A.fl.Ak));},_Mark:function(D){var B;C.Jq._Mark.
call(this,D);if((B=this.LabelDataSync)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Demonstrator::SyncAction"};C.AUY={_class:function(){return A.aci.Al;},0:{FileName:
"./res_index/DemonstratorSyncIcon.png",Format:A._PIXEL_FORMAT_NATIVE,NoOfFrames:
1,FrameSize:[50,60],FrameDelay:0,_this:null}};C.Abb={TimespanDaysToString:null,Avp:
function(aIndex){if(this.AqT()>aIndex)return this.TimespanDaysToString.BS(aIndex
);A.ab5("%s",As0);return A.jV;},AqT:function(){return 4;},C7:function(aIndex){var
Ai$=0;switch(aIndex){case 0:Ai$=0;break;case 1:Ai$=1;break;case 2:Ai$=2;break;case
3:Ai$=3;break;default:throw new Error(Ax8+aIndex.toFixed());}return Ai$;},_Init:
function(aArg){A.acq.VN._Init.call(this,aArg);A.Device.TimespanDaysToString._Init.
call(this.TimespanDaysToString={I:this},0);this.__proto__=C.Abb;},_Done:function(
){this.__proto__=A.acq.VN;this.TimespanDaysToString._Done();A.acq.VN._Done.call(
this);},_ReInit:function(){A.acq.VN._ReInit.call(this);this.TimespanDaysToString.
_ReInit();},_Mark:function(D){var B;A.acq.VN._Mark.call(this,D);if((B=this.TimespanDaysToString
)._cycle!=D)B._Mark(B._cycle=D);},_className:"Demonstrator::DatePickerUnitDD"};C.
BFY={GL:0,AVF:1,Hj:2,Year:3};C.ACB={_class:function(){return A.aci.Al;},0:{FileName:
"./res_index/DemonstratorEarTagIcon.png",Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:
2,FrameSize:[37,37],FrameDelay:0,_this:null}};C.AxP={_class:function(){return A.
aci.Al;},0:{FileName:"./res_index/DemonstratorTransponderEarTagIcon.png",Format:
A._PIXEL_FORMAT_ALPHA8,NoOfFrames:2,FrameSize:[37,37],FrameDelay:0,_this:null}};
C.ZD={Aee:null,Init:function(aArg){var Au=A._NewObject(A.Core.Bs,0);Au.Initialize(
A._GetAutoObject(A.Device.Helper).Dv());var A1D=Au.Format(It);this.Aee.R(A1D);},
Af7:function(G){var B;var J8=this.Aee.String;var O;O=J8.indexOf(String.fromCharCode(
0x2E),0);while(O>=0){J8=A.ab1(J8,O,1);O=J8.indexOf(String.fromCharCode(0x2E),O);
}J8=J8+Ax9;J8=J8+A._GetAutoObject(A.acj.VD).ACY(J8).toFixed();var A1D=A._GetAutoObject(
A.Device.AnJ).Bfs(J8);A._GetAutoObject(A.aco.G0).BB2(((B=(A1D|0))<0)?B+0x100000000:
B);},_Init:function(aArg){C.Jq._Init.call(this,aArg);C.ANE._Init.call(this.Aee={
I:this},0);this.__proto__=C.ZD;this.Aee.H(Rm);this.Aee.L(A.jb.Text);this.Aee.Bm6(
10);this.J(this.Aee,-1);this.Yw.Ax(A.aaL(A.ach.Avx));this.Init(aArg);},_Done:function(
){this.__proto__=C.Jq;this.Aee._Done();C.Jq._Done.call(this);},_ReInit:function(
){C.Jq._ReInit.call(this);this.Aee._ReInit();},_Mark:function(D){var B;C.Jq._Mark.
call(this,D);if((B=this.Aee)._cycle!=D)B._Mark(B._cycle=D);},_className:"Demonstrator::ScanDateAction"
};C.AhB={BGa:0,BF8:1,VD:2,LAST:3};C.AhC={AhD:null,Avp:function(aIndex){if(this.AqT(
)>aIndex)return this.AhD.BS(aIndex);A.ab5("%s",As0);return A.jV;},AqT:function(){
return 3;},_Init:function(aArg){A.acq.VN._Init.call(this,aArg);C.AhD._Init.call(
this.AhD={I:this},0);this.__proto__=C.AhC;},_Done:function(){this.__proto__=A.acq.
VN;this.AhD._Done();A.acq.VN._Done.call(this);},_ReInit:function(){A.acq.VN._ReInit.
call(this);this.AhD._ReInit();},_Mark:function(D){var B;A.acq.VN._Mark.call(this
,D);if((B=this.AhD)._cycle!=D)B._Mark(B._cycle=D);},_className:"Demonstrator::ScanTypeDD"
};C.AhD={BS:function(A7){var BcX=A7;var AKX=A.jV;switch(BcX){case 2:AKX=A.aaR(A.
acf.VD);break;case 0:AKX=A.aaR(A.acf.Transponder);break;case 1:AKX=A.aaR(A.acf.Bil
);break;default:throw new Error(Ax_+BcX.toFixed());}return AKX;},_Init:function(
aArg){A.Device.EnumToString._Init.call(this,aArg);this.__proto__=C.AhD;},_className:
"Demonstrator::ScanTypeToString"};C.ANE={BeW:function(G){var BfE=0;var O=this.String.
indexOf(String.fromCharCode(0x2E),0);while(O>=0){BfE++;O++;O=this.String.indexOf(
String.fromCharCode(0x2E),O);}if(BfE>=2)return;if(this.String.length>=this.AvW)return;
this.R(A.abU(this.String,S_,this.D6));this.D6=this.D6+1;this.Lz=true;A.pe(this.Di
,this);},_Init:function(aArg){C.Akm._Init.call(this,aArg);this.__proto__=C.ANE;}
,_className:"Demonstrator::DateInput"};
C._Init=function(){C.AVz.__proto__=A.acn.Menu;C.AUv.__proto__=A.Core.P;C.AMq.__proto__=
C.Ba;C.Mi.__proto__=A.Core.P;C.Yl.__proto__=C.Arb;C.Abc.__proto__=A.Core.P;C.AvA.
__proto__=A.acn.Ahw;C.AME.__proto__=C.FD;C.Auv.__proto__=C.FD;C.Ba.__proto__=A.Core.
P;C.FD.__proto__=A.Core.P;C.ANF.__proto__=A.acn.Ahu;C.AhG.__proto__=A.Core.P;C.AMx.
__proto__=C.AhG;C.Vu.__proto__=C.Auv;C.AL2.__proto__=A.Core.P;C.Jq.__proto__=A.Core.
P;C.Acj.__proto__=C.Jq;C.Acu.__proto__=C.Jq;C.Arb.__proto__=A.Core.P;C.Aep.__proto__=
A.Core.P;C.OT.__proto__=C.Akm;C.Akm.__proto__=A.acn.Jd;C.Act.__proto__=C.Jq;C.Abb.
__proto__=A.acq.VN;C.ZD.__proto__=C.Jq;C.AhC.__proto__=A.acq.VN;C.AhD.__proto__=
A.Device.EnumToString;C.ANE.__proto__=C.Akm;};C._ReInit=function(){};C.DH=function(
D){var B;if((B=C.Background[0]._this)&&(B._cycle!=D))B._Done(C.Background[0]._this=
null);if((B=C.AM1[0]._this)&&(B._cycle!=D))B._Done(C.AM1[0]._this=null);if((B=C.
AM2[0]._this)&&(B._cycle!=D))B._Done(C.AM2[0]._this=null);if((B=C.AM3[0]._this)&&(
B._cycle!=D))B._Done(C.AM3[0]._this=null);if((B=C.AM4[0]._this)&&(B._cycle!=D))B.
_Done(C.AM4[0]._this=null);if((B=C.AP5[0]._this)&&(B._cycle!=D))B._Done(C.AP5[0].
_this=null);if((B=C.Filter[0]._this)&&(B._cycle!=D))B._Done(C.Filter[0]._this=null
);if((B=C.ARK[0]._this)&&(B._cycle!=D))B._Done(C.ARK[0]._this=null);if((B=C.Ajq[
0]._this)&&(B._cycle!=D))B._Done(C.Ajq[0]._this=null);if((B=C.AMH[0]._this)&&(B.
_cycle!=D))B._Done(C.AMH[0]._this=null);if((B=C.Ast[0]._this)&&(B._cycle!=D))B._Done(
C.Ast[0]._this=null);if((B=C.AU3[0]._this)&&(B._cycle!=D))B._Done(C.AU3[0]._this=
null);if((B=C.AHh[0]._this)&&(B._cycle!=D))B._Done(C.AHh[0]._this=null);if((B=C.
AVQ[0]._this)&&(B._cycle!=D))B._Done(C.AVQ[0]._this=null);if((B=C.AUY[0]._this)&&(
B._cycle!=D))B._Done(C.AUY[0]._this=null);if((B=C.ACB[0]._this)&&(B._cycle!=D))B.
_Done(C.ACB[0]._this=null);if((B=C.AxP[0]._this)&&(B._cycle!=D))B._Done(C.AxP[0].
_this=null);};return C;})();

/* VitalControl demonstration application, © Urban GmbH & Co.KG 2023 */