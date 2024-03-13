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
var IQ=[58,10,120,50];var Ip=[0,0,60,60];var O2=[120,0,360,60];var P1="\u2015";var
P2=[0,0,240,60];var CQ=[0,0,40,60];var E$=[100,0,130,60];var Lu=[43,0,100,60];var
P3=[125,0,240,60];var JZ=[0,0];var N_=[100,0];var P4=[100,60];var MF=[0,60];var S4=[
107,0];var UO=[240,0];var Z5=[240,60];var W1=[107,60];var Iq="%d.%m.%Y";var UP="Unhandled date unit: ";
var Z6=[0,0,200,180];var W2=[36,0,200,30];var Z7=[0,30,160,60];var W3="Text";var
Z8=[0,70,40,110];var Z9=[44,70,156,110];var UQ=[160,70,200,110];var W4=[7,2,27,25
];var P5=[0,30,170,180];var Z_=[170,34,190,57];var O3=[0,0,40,40];var Ri=[0,40];
var W5=[40,40];var W6=[40,0];var W7=[0,0,370,100];var W8=[20,0,290,60];var Z$=[0
,60,370,100];var W9="Cap";var W_=[20,0,370,60];var S5=[310,0,370,60];var UR=[370
,0];var US=[370,60];var AcN="UpdateData is called for the base class ListItemBase. Please make "+
"sure this method is implemented by a derived class.";var S6=".";var Aaa=[0,0,170
,150];var Afx=[0,59,170,90];var Aab=[110,0,170,150];var W$=[0,30];var Aac=[50,0,
100,150];var Aad=[0,0,40,150];var AhQ=[0,0,370,240];var J0=[0,60,370,710];var Aae=[
0,0,370,300];var Lv=[0,60,370,300];var AhR=[0,60,370,120];var Aog=[0,120,370,180
];var N$=[0,180,370,240];var Xa=[0,240,370,300];var Aoh=[370,120];var AhS=[0,120
];var AhT=[370,180];var AcO=[0,180];var UT=[370,240];var Aoi=[0,240];var Aoj=[370
,300];var Aok=[0,300];var Aol=[0,0,50,60];var Afy=[50,0,100,60];var Ala="Unhandled scan type";
var Ax0=[3,11,185,51];var Ax1=[50,0];var O4=[50,60];var Rj=[100,10,370,50];var Ax2=
"276000901234567";var UU=[3,10,57,50];var AsS=[3,11,55,50];var Ax3="Unhandled temperature unit";
var Ax4=[110,0,260,60];var Ax5=[235,10,370,50];var Aom="39.5";var Afz=[0,0,270,40
];var Aon=[270,0];var IR=[270,40];var Aoo=[150,0,170,40];var Xb=[205,10,207,30];
var Alb=[0,0,370,40];var AsT=[50,0,320,40];var AsU=" ";var AsV=[135,23];var AsW=[
135,0];var Alc=[100,0,370,60];var AsX="Error: Nullpointer Exception";var Ax6="Unknown Date Piecker Unit Index: ";
var Ax7="0";var Ax8="Unhandled scan type:";
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
null}};C.ARE={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/DemonstratorMenuIcon.png"
,Format:A._PIXEL_FORMAT_NATIVE,NoOfFrames:1,FrameSize:[20,16],FrameDelay:0,_this:
null}};C.Ajq={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/DemonstratorArrowRight.png"
,Format:A._PIXEL_FORMAT_NATIVE,NoOfFrames:1,FrameSize:[17,16],FrameDelay:0,_this:
null}};C.AMI={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/DemonstratorArrowDown.png"
,Format:A._PIXEL_FORMAT_NATIVE,NoOfFrames:1,FrameSize:[17,16],FrameDelay:0,_this:
null}};C.Asr={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/DemonstratorScanIcon.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:2,FrameSize:[37,37],FrameDelay:0,_this:
null}};C.AU1={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/DemonstratorTemperatureIcon.png"
,Format:A._PIXEL_FORMAT_NATIVE,NoOfFrames:1,FrameSize:[17,37],FrameDelay:0,_this:
null}};C.AVx={Aeb:null,AX:null,AR:null,Background:null,H7:null,AD:null,IN:null,Dm:
null,Lj:null,A7x:null,A7Z:0,Bk:function(aSize){A.acn.Menu.Bk.call(this,aSize);this.
IN.H(A.abP(this.IN.M,this.AD.OQ));this.IN.H([].concat(this.IN.M.slice(0,3),aSize[
1]));},Ai:function(Ae){var B;A.acn.Menu.Ai.call(this,Ae);var Iy=((Ae&0x40)===0x40
);if(Iy&&(this.AD.Go<0))this.AD.G2(0);},NZ:function(E){if(this.Lj===E)return;this.
Lj=E;this.AD.NZ(E);},BmS:function(E){var B;if(this.A7x===E)return;if(!!this.Aeb){
this.HN(this.Aeb);this.Aeb=null;}if(!!E){this.Aeb=(C.Fy.isPrototypeOf(B=A._NewObject(
E,0))?B:null);this.Aeb.A93([this,this.Aks]);this.Aeb.A94([this,this.Akt]);this.Aeb.
BmY(null);this.J(this.Aeb,0);this.AD.A9_((B=this.Aeb.M)[3]-B[1]);}else this.AD.A9_(
0);this.IN.H(A.abP(this.IN.M,this.AD.OQ));A.pe([this,this.Fe],this);this.A7x=E;}
,Hg:function(G){var B;var Gc=this.AD.G0;var Aa=(C.Ba.isPrototypeOf(B=this.AD.Ch)?
B:null);if(!Aa)return;Aa.Zs(this.AX);Aa.Ce(Gc);Aa.Zu(this.AR);Aa.H(A.abK(Aa.M,[(
B=this.AD.M)[2]-B[0],this.AD.GK]));},Zs:function(E){var B;if(this.AX===E)return;
if(!!this.AX){A.z9([this,this.Ce],this.AX,0);A.z$([this,this.An$],[B=this.AX,B.Fj
,B.Fn],0);}this.AX=E;if(!!E){A.zV([this,this.Ce],E,0);A.zX([this,this.An$],[E,E.
Fj,E.Fn],0);}A.pe([this,this.Ce],this);A.pe([this,this.An$],this);},Ce:function(
G){if(!!this.AX){this.AD.Ju(this.AX.Ca());this.AD.AbH(0,this.AD.AY-1);}else this.
AD.Ju(0);if(this.A7Z!==this.AD.AY){this.AD.ABC(null,null);this.A7Z=this.AD.AY;}A.
pe([this,this.Fe],this);},Akt:function(G){var B;this.H(A.abI(this.M,(B=this.AD.AOP(
))[3]-B[1]));},Aks:function(G){this.H(A.abI(this.M,180));},A9j:function(G){var Jy=(
A.Core.BN.isPrototypeOf(G)?G:null);var Gc=this.AD.Go;if(Jy.CO===4)Gc=Gc-1;else if(
Jy.CO===5)Gc=Gc+1;else if((Jy.DP>=0x30)&&(Jy.DP<=0x39))A._GetAutoObject(A.aco.AgF
).Ey(Jy.DP);else if(Jy.CO===45)A._GetAutoObject(A.aco.AgF).Delete();else Jy.NH=true;
if((Gc<0)||(Gc>=this.AD.AY))return;this.AD.G2(Gc);this.ByR(Gc,true);},ByG:function(
G){var Aa=(C.Ba.isPrototypeOf(G)?G:null);this.AD.G2(Aa.Hn);},ByR:function(G6,Ac0
){var B;if((G6<0)||(G6>=this.AD.AY))return;var Az=this.AD.AqS(G6,G6);var Bd=this.
AD.M;Bd=A.abP(Bd,(B=this.AD.AOP())[3]-B[1]);Bd=A.abI(Bd,(((B=this.AD.M)[3]-B[1])-((
B=this.AD.AOP())[3]-B[1]))-((B=this.AD.BiN())[3]-B[1]));var LN=A.lb(Az,Bd);if((!
Ac0&&!((LN[0]>=LN[2])||(LN[1]>=LN[3])))||(Ac0&&A.aaY(LN,Az)))return;var Bq=0;if(
Az[3]>Bd[3])Bq=Az[3]-Bd[3];if(Bq>(Az[1]-Bd[1]))Bq=(Az[3]-Bd[1])-this.AD.GK;this.
AD.F_(this.AD.Br-Bq);},An$:function(G){this.AD.G2(-1);},Fe:function(G){var B;this.
IN.Mu(this.AD.GK*this.AD.AY);this.IN.Mw(((B=this.AD.M)[3]-B[1])-this.AD.OQ);this.
IN.Mv(-this.AD.Br);},_Init:function(aArg){A.acn.Menu._Init.call(this,aArg);A.acg.
AL._Init.call(this.Background={I:this},0);A.Core.H7._Init.call(this.H7={I:this},
0);A.Core.CM._Init.call(this.AD={I:this},0);A.kR.Ay._Init.call(this.IN={I:this},
0);A.Core.BN._Init.call(this.Dm={I:this},0);this.__proto__=C.AVx;this.H(Cc);this.
Background.AZ(0x3);this.Background.H(Cc);this.H7.AZ(0x3F);this.H7.H(Cc);this.AD.
AZ(0x3F);this.AD.H(Cc);this.AD.Ae4(60);this.AD.Ju(0);this.AD.NZ(this.Lj);this.IN.
AZ(0x3A);this.IN.H(BF);this.IN.L(0xFF808080);this.J(this.Background,0);this.J(this.
H7,0);this.J(this.AD,0);this.J(this.IN,0);this.AD.El=[this,this.Fe];this.AD.Hg=[
this,this.Hg];this.AD.Aw2(this.H7);this.AR=[this,this.ByG];this.Dm.BO=[this,this.
A9j];this.Dm.D1=[this,this.A9j];},_Done:function(){this.__proto__=A.acn.Menu;this.
Background._Done();this.H7._Done();this.AD._Done();this.IN._Done();this.Dm._Done(
);A.acn.Menu._Done.call(this);},_ReInit:function(){A.acn.Menu._ReInit.call(this);
this.Background._ReInit();this.H7._ReInit();this.AD._ReInit();this.IN._ReInit();
this.Dm._ReInit();},_Mark:function(D){var B;A.acn.Menu._Mark.call(this,D);if((B=
this.Aeb)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.AX)&&(B._cycle!=D))B._Mark(
B._cycle=D);if((B=this.AR)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.
Background)._cycle!=D)B._Mark(B._cycle=D);if((B=this.H7)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.AD)._cycle!=D)B._Mark(B._cycle=D);if((B=this.IN)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Dm)._cycle!=D)B._Mark(B._cycle=D);},_className:"Demonstrator::VerticalMenu"
};C.AUt={GG:null,AL:null,BU:null,Init:function(aArg){var B;A.zX([this,this.GE],[
B=A._GetAutoObject(A.aco.Hq),B.A8Y,B.A_i],0);A.pe([this,this.GE],this);},Ab5:function(
E){if(this.GG===E)return;if(!!this.GG)this.HN(this.GG);this.GG=E;if(!!this.GG)this.
J(this.GG,0);this.Bb(E);this.Ahw(E,this.BU);this.An();},GE:function(G){var B;if(
!!A._GetAutoObject(A.aco.Hq).Asu)this.Ab5((C.AhC.isPrototypeOf(B=A._NewObject(A.
_GetAutoObject(A.aco.Hq).Asu,0))?B:null));else this.Ab5(null);},_Init:function(aArg
){A.Core.P._Init.call(this,aArg);A.acg.AL._Init.call(this.AL={I:this},0);A.acg.BU.
_Init.call(this.BU={I:this},0);this.__proto__=C.AUt;this.H(E4);this.AL.AZ(0x3F);
this.AL.H(E4);this.BU.H(E4);this.BU.L(0xFF000000);this.J(this.AL,0);this.J(this.
BU,0);this.Init(aArg);},_Done:function(){this.__proto__=A.Core.P;this.AL._Done();
this.BU._Done();A.Core.P._Done.call(this);},_ReInit:function(){A.Core.P._ReInit.
call(this);this.AL._ReInit();this.BU._ReInit();},_Mark:function(D){var B;A.Core.
P._Mark.call(this,D);if((B=this.GG)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.
AL)._cycle!=D)B._Mark(B._cycle=D);if((B=this.BU)._cycle!=D)B._Mark(B._cycle=D);}
,_className:"Demonstrator::SelectionArea"};C.AMr={ABj:0,Ka:0,Background:null,V:null
,Ajm:null,AdU:null,XQ:null,AdV:null,Mf:null,Md:0,LI:false,KE:false,CP:function(){
this.An();},Ai:function(Ae){var B;C.Ba.Ai.call(this,Ae);var G$=((Ae&0x10)===0x10
);var Fq=((Ae&0x20)===0x20);var Iy=((Ae&0x40)===0x40);if(!G$){this.Background.L(
0xFFAAAAAA);this.V.L(0xFF888888);this.Mf.Ar(false);this.Mf.Z(false);}else if(Iy){
this.Background.L(A.jb.AV);this.V.L(A.jb.Bm);this.Mf.Ar(true);this.Mf.Z(true);}else
if(Fq){this.Background.L(0xFFE6DED8);this.V.L(0xFF000000);this.Mf.Ar(true);this.
Mf.Z(true);}else{this.Background.L(0xFFFFFFFF);this.V.L(0xFF000000);this.Mf.Ar(false
);this.Mf.Z(false);}if(!this.KE&&Fq)A._GetAutoObject(A.aco.Hq).A_f(this.ABj);this.
Mf.BmU(this.Ka>0);this.Mf.Bnl(this.ABj>0);this.V.R(this.Md.toFixed());this.LI=G$;
this.KE=Fq;},Ce:function(Ad){if(!this.AX){this.XQ.Aw(A.aaL(A.ach.Aew));this.AdU.
L(A.jb.Afq);return;}this.Hn=Ad;if(!!this.AX){this.Ka=this.AX.KN(Ad,26);this.ABj=
this.AX.KN(Ad,22);this.Md=this.AX.CE(Ad,1);var AlN=this.AX.H1(Ad,11);var AlE=this.
AX.I2(Ad,17);var LQ=this.AX.I2(Ad,13);var H$=this.AX.AmU(Ad,14);var Xm=A._GetAutoObject(
A.Device.Helper).AMg(LQ,AlN,AlE);switch(H$){case 0:this.XQ.Aw(A.aaL(A.ach.Aew));
break;case 1:this.XQ.Aw(A.aaL(A.ach.AvC));break;case 2:this.XQ.Aw(A.aaL(A.ach.AvF
));break;default:A.ab5("%s%e",Hm,H$);}this.AdV.Aw(this.XQ.Al);this.AdU.L(A._GetAutoObject(
A.acj.Assessment).Qj(Xm));this.An();}},_Init:function(aArg){C.Ba._Init.call(this
,aArg);A.acg.AL._Init.call(this.Background={I:this},0);A.kR.CH._Init.call(this.V={
I:this},0);A.acg.Ap._Init.call(this.Ajm={I:this},0);A.acg.Ap._Init.call(this.AdU={
I:this},0);A.acg.Ap._Init.call(this.XQ={I:this},0);A.acg.Ap._Init.call(this.AdV={
I:this},0);C.Mf._Init.call(this.Mf={I:this},0);this.__proto__=C.AMr;this.Background.
AZ(0x3F);this.Background.H(Cc);this.V.AZ(0x3F);this.V.H(IQ);this.V.R(A.aaR(A.acf.
GJ));this.V.A6(0x11);this.V.L(0xFF000000);this.Ajm.H(Ip);this.Ajm.L(A.jb.Text);this.
AdU.H(Ip);this.AdU.L(A.jb.E1);this.XQ.H(Ip);this.AdV.H(Ip);this.AdV.L(A.jb.Text);
this.AdV.Cv(1);this.Mf.AZ(0x3);this.Mf.H(O2);this.J(this.Background,0);this.J(this.
V,0);this.J(this.Ajm,0);this.J(this.AdU,0);this.J(this.XQ,0);this.J(this.AdV,0);
this.J(this.Mf,0);this.V.S(A.aaL(A.fl.Af));this.V.A2(A.aaL(A.fl.Ak));this.V.Cu(A.
aaL(A.fl.Bh));this.Ajm.Aw(A.aaL(C.AHh));this.AdU.Aw(A.aaL(C.AVO));this.XQ.Aw(A.aaL(
A.ach.Aew));this.AdV.Aw(A.aaL(A.ach.Aew));},_Done:function(){this.__proto__=C.Ba;
this.Background._Done();this.V._Done();this.Ajm._Done();this.AdU._Done();this.XQ.
_Done();this.AdV._Done();this.Mf._Done();C.Ba._Done.call(this);},_ReInit:function(
){C.Ba._ReInit.call(this);this.Background._ReInit();this.V._ReInit();this.Ajm._ReInit(
);this.AdU._ReInit();this.XQ._ReInit();this.AdV._ReInit();this.Mf._ReInit();this.
V.R(A.aaR(A.acf.GJ));this.V.S(A.aaL(A.fl.Af));this.V.A2(A.aaL(A.fl.Ak));this.V.Cu(
A.aaL(A.fl.Bh));this.CP();},_Mark:function(D){var B;C.Ba._Mark.call(this,D);if((
B=this.Background)._cycle!=D)B._Mark(B._cycle=D);if((B=this.V)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Ajm)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AdU)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.XQ)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
AdV)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Mf)._cycle!=D)B._Mark(B._cycle=D);
},_className:"Demonstrator::AnimalMenuItem"};C.Mf={Uv:null,WG:null,AkY:null,Nj:null
,N7:null,ZH:null,Acz:null,Av0:false,AxM:false,CP:function(){this.An();},Ai:function(
Ae){var B;A.Core.P.Ai.call(this,Ae);var Iy=((Ae&0x40)===0x40);if(Iy){this.Nj.L(A.
jb.Bm);this.N7.L(A.jb.Bm);}else{this.Nj.L(A.jb.Text);this.N7.L(A.jb.Text);}if(this.
AxM){this.Nj.R(A.aaR(A.acf.Bog));if(this.Av0){this.Uv.Aw(A.aaL(C.AxN));this.WG.Aw(
A.aaL(C.AxN));}else{this.Uv.Aw(A.aaL(C.Asr));this.WG.Aw(A.aaL(C.Asr));}}else if(
this.Av0){this.Uv.Aw(A.aaL(C.ACy));this.WG.Aw(A.aaL(C.ACy));this.Nj.R(P1);}var A3U=
this.AxM||this.Av0;this.Uv.Z(A3U);this.WG.Z(A3U);this.Nj.Z(A3U);this.ZH.Ar(this.
AxM);},Bnl:function(E){if(this.AxM===E)return;this.AxM=E;this.An();},BmU:function(
E){if(this.Av0===E)return;this.Av0=E;this.An();},_Init:function(aArg){A.Core.P._Init.
call(this,aArg);A.acg.Ap._Init.call(this.Uv={I:this},0);A.acg.Ap._Init.call(this.
WG={I:this},0);A.acg.Ap._Init.call(this.AkY={I:this},0);A.kR.CH._Init.call(this.
Nj={I:this},0);A.kR.CH._Init.call(this.N7={I:this},0);A.Core.Bn._Init.call(this.
ZH={I:this},0);A.Core.Bn._Init.call(this.Acz={I:this},0);this.__proto__=C.Mf;var
B;this.H(P2);this.Uv.AZ(0x6);this.Uv.H(CQ);this.Uv.L(A.jb.CS);this.Uv.Cv(1);this.
WG.AZ(0x6);this.WG.H(CQ);this.WG.L(A.jb.Text);this.AkY.AZ(0xE);this.AkY.H(E$);this.
Nj.AZ(0x7);this.Nj.H(Lu);this.Nj.A6(0x11);this.Nj.L(0xFF000000);this.N7.AZ(0x3);
this.N7.H(P3);this.N7.R(A.aaR(A.acf.Temperature));this.N7.A6(0x11);this.N7.L(0xFF000000
);this.ZH.AZ(0x3);this.ZH.JR(JZ);this.ZH.Kr(N_);this.ZH.DC(P4);this.ZH.DL(MF);this.
Acz.AZ(0x3);this.Acz.JR(S4);this.Acz.Kr(UO);this.Acz.DC(Z5);this.Acz.DL(W1);this.
J(this.Uv,0);this.J(this.WG,0);this.J(this.AkY,0);this.J(this.Nj,0);this.J(this.
N7,0);this.J(this.ZH,0);this.J(this.Acz,0);this.Uv.Aw(A.aaL(C.Asr));this.WG.Aw(A.
aaL(C.Asr));this.AkY.Aw(A.aaL(C.AU1));this.Nj.S(A.aaL(A.fl.Af));this.Nj.A2(A.aaL(
A.fl.Ak));this.Nj.Cu(A.aaL(A.fl.Bh));this.N7.S(A.aaL(A.fl.Af));this.N7.A2(A.aaL(
A.fl.Ak));this.N7.Cu(A.aaL(A.fl.Bh));this.ZH.Ln=[B=A._GetAutoObject(A.aco.Hq),B.
BeR];this.Acz.Ln=[B=A._GetAutoObject(A.aco.Hq),B.BeC];},_Done:function(){this.__proto__=
A.Core.P;this.Uv._Done();this.WG._Done();this.AkY._Done();this.Nj._Done();this.N7.
_Done();this.ZH._Done();this.Acz._Done();A.Core.P._Done.call(this);},_ReInit:function(
){A.Core.P._ReInit.call(this);this.Uv._ReInit();this.WG._ReInit();this.AkY._ReInit(
);this.Nj._ReInit();this.N7._ReInit();this.ZH._ReInit();this.Acz._ReInit();this.
N7.R(A.aaR(A.acf.Temperature));this.Nj.S(A.aaL(A.fl.Af));this.Nj.A2(A.aaL(A.fl.Ak
));this.Nj.Cu(A.aaL(A.fl.Bh));this.N7.S(A.aaL(A.fl.Af));this.N7.A2(A.aaL(A.fl.Ak
));this.N7.Cu(A.aaL(A.fl.Bh));this.CP();},_Mark:function(D){var B;A.Core.P._Mark.
call(this,D);if((B=this.Uv)._cycle!=D)B._Mark(B._cycle=D);if((B=this.WG)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.AkY)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Nj
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.N7)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.ZH)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Acz)._cycle!=D)B._Mark(B._cycle=
D);},_className:"Demonstrator::AnimalItemAction"};C.Yq={CP:function(){this.An();
},Ai:function(Ae){C.Ara.Ai.call(this,Ae);if(!this.Text.String.length)this.Text.R(
A.aaR(A.acf.Filter));},A76:function(G){var D5=(A.Core.BN.isPrototypeOf(G)?G:null
);if(!!D5)A._GetAutoObject(A.aco.AgF).Ey(D5.DP);},A74:function(G){A._GetAutoObject(
A.aco.AgF).Delete();},_Init:function(aArg){C.Ara._Init.call(this,aArg);this.__proto__=
C.Yq;this.Ap.Aw(A.aaL(C.Filter));},_ReInit:function(){C.Ara._ReInit.call(this);this.
CP();},_className:"Demonstrator::FilterView"};C.Abf={Dj:null,Yj:null,R9:null,Yk:
null,DT:null,YD:null,AmG:null,Au:null,O9:null,M4:null,Abe:null,FU:0,AvM:0,AF6:false
,Ai:function(Ae){A.Core.P.Ai.call(this,Ae);this.R9.R(this.Au.Format(Iq));if(this.
AF6){this.R9.Z(false);this.YD.Z(false);this.DT.Z(false);this.Yk.Z(false);this.O9.
Ar(true);this.O9.Z(true);this.M4.Cv(2);this.M4.ATf(2);this.M4.H(A.abM(this.M4.M,
this.O9.M[2]));}else{this.R9.Z(true);this.YD.Z(true);this.DT.Z(true);this.Yk.Z(true
);this.O9.Ar(false);this.O9.Z(false);this.M4.Cv(3);this.M4.ATf(3);this.M4.H(A.abM(
this.M4.M,this.R9.M[2]));}},BAv:function(G){this.Bm1(!this.AF6);},Ady:function(G
){var F;if(!!this.Dj)this.Ui((F=this.Dj,F[1].call(F[0])));},Ab9:function(E){if(A.
aaZ(this.Dj,E))return;if(!!this.Dj)A.z$([this,this.Ady],this.Dj,0);this.Dj=E;if(
!!E)A.zX([this,this.Ady],E,0);if(!!E)A.pe([this,this.Ady],this);},Ui:function(E){
if(this.FU===E)return;this.FU=E;this.Au.Initialize(this.FU);this.BBA(this);this.
An();},AiD:function(G){var B;var F;var BR=this.FU;var Ai$=this.Abe.C4(this.AvM);
this.AJg(Ai$);if(this.Au.Year>2100)this.Au.Initialize2(2100,12,31,0,0,0);this.Ui(((
B=(this.Au.JO()|0))<0)?B+0x100000000:B);if(this.FU!==BR){if(!!this.Dj)(F=this.Dj
,F[2].call(F[0],this.FU));A.abo(this.Dj,0);}},Aio:function(G){var B;var F;var BR=
this.FU;var Ai$=this.Abe.C4(this.AvM);this.AK9(Ai$);if(this.Au.Year<2000)this.Au.
Initialize2(2000,1,1,0,0,0);this.Ui(((B=(this.Au.JO()|0))<0)?B+0x100000000:B);if(
this.FU!==BR){if(!!this.Dj)(F=this.Dj,F[2].call(F[0],this.FU));A.abo(this.Dj,0);
}},Bmx:function(E){if(this.AvM===E)return;this.AvM=E;},Bm1:function(E){if(this.AF6===
E)return;this.AF6=E;this.An();},BA6:function(G){var B;var F;var BR=this.FU;this.
Au.Lp(this.O9.AEu());this.Au.Um(this.O9.AEz());this.Au.Year=this.O9.Arz();this.Ui(((
B=(this.Au.JO()|0))<0)?B+0x100000000:B);if(this.FU!==BR){if(!!this.Dj)(F=this.Dj
,F[2].call(F[0],this.FU));A.abo(this.Dj,0);}},BBA:function(G){this.O9.Lp(this.Au.
GH);this.O9.Um(this.Au.He);this.O9.AkG(this.Au.Year);},AJg:function(AyZ){var B;switch(
AyZ){case 0:if(this.Au.GH<this.Au.Zp())this.Au.Lp(this.Au.GH+1);else{this.Au.Lp(
1);this.AJg(2);}break;case 1:if((this.Au.GH+7)<=this.Au.Zp())this.Au.Lp(this.Au.
GH+7);else{this.Au.Lp((7-this.Au.Zp())+this.Au.GH);this.AJg(2);}break;case 2:if(
this.Au.He<12)this.Au.Um(this.Au.He+1);else{this.Au.Um(1);this.AJg(3);}break;case
3:this.Au.Year++;break;default:throw new Error(UP+AyZ.toFixed());}},AK9:function(
AyZ){var B;switch(AyZ){case 0:if(this.Au.GH>1)this.Au.Lp(this.Au.GH-1);else{this.
AK9(2);this.Au.Lp(this.Au.Zp());}break;case 1:if((this.Au.GH-7)>0)this.Au.Lp(this.
Au.GH-7);else{this.AK9(2);this.Au.Lp(this.Au.Zp()-(7-this.Au.GH));}break;case 2:
if(this.Au.He>1)this.Au.Um(this.Au.He-1);else{this.Au.Um(12);this.AK9(3);}break;
case 3:this.Au.Year--;break;default:throw new Error(UP+AyZ.toFixed());}},BkG:function(
){return this.AvM;},_Init:function(aArg){A.Core.P._Init.call(this,aArg);A.acg.Text.
_Init.call(this.Yj={I:this},0);A.acg.Text._Init.call(this.R9={I:this},0);C.AvA._Init.
call(this.Yk={I:this},0);A.acq.DT._Init.call(this.DT={I:this},0);C.AvA._Init.call(
this.YD={I:this},0);A.acg.Ap._Init.call(this.AmG={I:this},0);A.Core.Bs._Init.call(
this.Au={I:this},0);C.ANF._Init.call(this.O9={I:this},0);C.AvA._Init.call(this.M4={
I:this},0);C.Abe._Init.call(this.Abe={I:this},0);this.__proto__=C.Abf;this.H(Z6);
this.Yj.H(W2);this.Yj.A6(0x11);this.Yj.R(A.aaR(A.acf.Date));this.Yj.L(0xFF000000
);this.R9.H(Z7);this.R9.A6(0x11);this.R9.R(W3);this.R9.L(0xFF000000);this.Yk.H(Z8
);this.Yk.A9U(200);this.DT.H(Z9);this.DT.ArU(120);this.DT.GK=30;this.DT.AST(A.jb.
CS);this.DT.A9x(A.jb.CS);this.DT.A9B(A.jb.CS);this.DT.ASU(A.jb.Text);this.DT.A9C(
A.jb.Text);this.DT.A9y(A.jb.AV);this.DT.A9D(A.jb.Bm);this.DT.A9A(A.jb.AV);this.DT.
A9z(A.jb.Text);this.YD.H(UQ);this.YD.A9U(200);this.AmG.H(W4);this.O9.H(P5);this.
M4.H(Z_);this.M4.Cv(3);this.M4.ATf(3);this.M4.L(A.jb.Text);this.J(this.Yj,0);this.
J(this.R9,0);this.J(this.Yk,0);this.J(this.DT,0);this.J(this.YD,0);this.J(this.AmG
,0);this.J(this.O9,0);this.J(this.M4,0);this.Yj.S(A.aaL(A.fl.Ak));this.R9.S(A.aaL(
A.fl.EK));this.Yk.AR=[this,this.Aio];this.Yk.DB(A.aaL(C.AM1));this.Yk.ATg(A.aaL(
C.AM2));this.DT.As([this,this.BkG,this.Bmx]);this.DT.A9J(this.Abe);this.DT.ArM(A.
aaL(A.fl.Ak));this.DT.AwG(A.aaL(A.fl.Ak));this.YD.AR=[this,this.AiD];this.YD.DB(
A.aaL(C.AM3));this.YD.ATg(A.aaL(C.AM4));this.AmG.Aw(A.aaL(C.AP5));this.O9.Di=[this
,this.BA6];this.M4.AR=[this,this.BAv];this.M4.DB(A.aaL(A.ach.Ajr));this.M4.ATg(A.
aaL(A.ach.Ajr));},_Done:function(){this.__proto__=A.Core.P;this.Yj._Done();this.
R9._Done();this.Yk._Done();this.DT._Done();this.YD._Done();this.AmG._Done();this.
Au._Done();this.O9._Done();this.M4._Done();this.Abe._Done();A.Core.P._Done.call(
this);},_ReInit:function(){A.Core.P._ReInit.call(this);this.Yj._ReInit();this.R9.
_ReInit();this.Yk._ReInit();this.DT._ReInit();this.YD._ReInit();this.AmG._ReInit(
);this.Au._ReInit();this.O9._ReInit();this.M4._ReInit();this.Abe._ReInit();this.
Yj.R(A.aaR(A.acf.Date));this.Yj.S(A.aaL(A.fl.Ak));this.R9.S(A.aaL(A.fl.EK));this.
DT.ArM(A.aaL(A.fl.Ak));this.DT.AwG(A.aaL(A.fl.Ak));},_Mark:function(D){var B;A.Core.
P._Mark.call(this,D);if((B=this.Dj)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((
B=this.Yj)._cycle!=D)B._Mark(B._cycle=D);if((B=this.R9)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Yk)._cycle!=D)B._Mark(B._cycle=D);if((B=this.DT)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.YD)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AmG)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.Au)._cycle!=D)B._Mark(B._cycle=D);if((B=this.O9
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.M4)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Abe)._cycle!=D)B._Mark(B._cycle=D);},_className:"Demonstrator::DateSelector"
};C.AvA={C8:null,Axl:null,ANV:null,AR:null,Bo:null,Dm:null,CR:null,Hs:null,Yx:null
,API:0,TO:0,ATY:0,AQ:0xFFFFFFFF,A19:false,LI:false,KE:false,Qn:false,Ai:function(
Ae){var B;A.acn.Ahs.Ai.call(this,Ae);var G$=((Ae&0x10)===0x10);var Fq=((Ae&0x20)===
0x20);var GA=this.CR.Down&&this.CR.YG;if(!G$)this.Hs.Aw(this.ANV);else if(GA){this.
Hs.Aw(this.Axl);this.Hs.Cv(this.ATY);}else{this.Hs.Aw(this.C8);this.Hs.Cv(this.TO
);}this.Hs.L(this.AQ);this.LI=G$;this.KE=Fq;this.Qn=GA;},Qm:function(G){this.An(
);A.pe(this.AR,this);},AiO:function(G){if(this.CR.Down)return;if(this.Dm.Acj)return;
this.An();if(this.Bo.Bw){A.pe(this.AR,this);this.Bo.Ar(false);}this.Bo.Ar(true);
},Bez:function(G){this.An();},AAC:function(G){if(!this.CR.YG)return;if(this.CR.NF
)return;if((this.Yx.VB<=0)||(this.CR.Jp<this.Yx.VB)){if(this.CR.Jp>=this.Bo.VB)A.
pe(this.AR,this);else this.Bo.Ar(true);}this.Yx.Ar(false);},AAB:function(G){this.
Yx.Ar(true);if(this.Bo.Bw){A.pe(this.AR,this);this.Bo.Ar(false);}},DB:function(E
){if(this.C8===E)return;this.C8=E;this.An();},ATg:function(E){if(this.Axl===E)return;
this.Axl=E;this.An();},A27:function(G){if(!this.CR.YG)return;if(this.CR.NF)return;
if((this.API>=0)&&this.A19){this.A19=false;this.Yx.Ar(true);A.pe(this.AR,this);}
},A9U:function(E){if(this.API===E)return;this.API=E;this.Yx.Wx(E);},Bz1:function(
G){this.A19=true;},Cv:function(E){if(this.TO===E)return;this.TO=E;this.An();},ATf:
function(E){if(this.ATY===E)return;this.ATY=E;this.An();},L:function(E){if(this.
AQ===E)return;this.AQ=E;this.An();},_Init:function(aArg){A.acn.Ahs._Init.call(this
,aArg);A.Core.Timer._Init.call(this.Bo={I:this},0);A.Core.BN._Init.call(this.Dm={
I:this},0);A.Core.Bn._Init.call(this.CR={I:this},0);A.acg.Ap._Init.call(this.Hs={
I:this},0);A.Core.Timer._Init.call(this.Yx={I:this},0);this.__proto__=C.AvA;this.
H(O3);this.Bo.PO(0);this.Bo.Wx(50);this.Dm.Filter=149;this.CR.AZ(0x3F);this.CR.JR(
Ri);this.CR.Kr(W5);this.CR.DC(W6);this.CR.DL(JZ);this.CR.Afc=0xF;this.CR.AFo(100
);this.Hs.AZ(0x3F);this.Hs.H(O3);this.Hs.A6(0x12);this.Yx.PO(0);this.J(this.CR,0
);this.J(this.Hs,0);this.Bo.Mx=[this,this.Qm];this.Dm.BO=[this,this.AiO];this.CR.
AEF=[this,this.Bez];this.CR.Av5=[this,this.Bez];this.CR.D1=[this,this.A27];this.
CR.Ln=[this,this.AAC];this.CR.BO=[this,this.AAB];this.Hs.Aw(A.aaL(A.aci.TJ));this.
C8=A.aaL(A.aci.TJ);this.Axl=A.aaL(A.aci.TJ);this.ANV=A.aaL(A.aci.TJ);this.Yx.Mx=[
this,this.Bz1];},_Done:function(){this.__proto__=A.acn.Ahs;this.Bo._Done();this.
Dm._Done();this.CR._Done();this.Hs._Done();this.Yx._Done();A.acn.Ahs._Done.call(
this);},_ReInit:function(){A.acn.Ahs._ReInit.call(this);this.Bo._ReInit();this.Dm.
_ReInit();this.CR._ReInit();this.Hs._ReInit();this.Yx._ReInit();},_Mark:function(
D){var B;A.acn.Ahs._Mark.call(this,D);if((B=this.C8)&&(B._cycle!=D))B._Mark(B._cycle=
D);if((B=this.Axl)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.ANV)&&(B._cycle
!=D))B._Mark(B._cycle=D);if((B=this.AR)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D
);if((B=this.Bo)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Dm)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.CR)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Hs)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.Yx)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Demonstrator::IconButton"};C.AMF={Pu:null,V:null,Aep:null,_Init:function(aArg){
C.Fy._Init.call(this,aArg);A.acg.AL._Init.call(this.Pu={I:this},0);A.acg.Text._Init.
call(this.V={I:this},0);C.Aep._Init.call(this.Aep={I:this},0);this.__proto__=C.AMF;
this.H(W7);this.Pu.AZ(0x1D);this.Pu.H(Cc);this.Pu.L(0xFFE6E6E6);this.V.AZ(0x1D);
this.V.H(W8);this.V.A6(0x11);this.V.R(A.aaR(A.acf.A4U));this.V.L(0xFF000000);this.
Aep.H(Z$);this.J(this.Pu,0);this.J(this.V,0);this.J(this.Aep,0);this.V.S(A.aaL(A.
fl.Af));},_Done:function(){this.__proto__=C.Fy;this.Pu._Done();this.V._Done();this.
Aep._Done();C.Fy._Done.call(this);},_ReInit:function(){C.Fy._ReInit.call(this);this.
Pu._ReInit();this.V._ReInit();this.Aep._ReInit();this.V.R(A.aaR(A.acf.A4U));this.
V.S(A.aaL(A.fl.Af));},_Mark:function(D){var B;C.Fy._Mark.call(this,D);if((B=this.
Pu)._cycle!=D)B._Mark(B._cycle=D);if((B=this.V)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Aep)._cycle!=D)B._Mark(B._cycle=D);},_className:"Demonstrator::AnimalsHeader"
};C.Auw={Pu:null,V:null,AeP:null,AeN:null,Bn:null,DK:W9,Ahe:false,Ai:function(Ae
){C.Fy.Ai.call(this,Ae);if(this.Ahe){this.AeN.Z(true);this.AeP.Z(false);}else{this.
AeN.Z(false);this.AeP.Z(true);}},BAR:function(G){if(this.Ahe)A.pe(this.Aks,this);
else A.pe(this.Akt,this);this.ArV(!this.Ahe);},T:function(E){if(this.DK===E)return;
this.DK=E;this.V.R(E);},ArV:function(E){if(this.Ahe===E)return;this.Ahe=E;this.An(
);},_Init:function(aArg){C.Fy._Init.call(this,aArg);A.acg.AL._Init.call(this.Pu={
I:this},0);A.acg.Text._Init.call(this.V={I:this},0);A.acg.Ap._Init.call(this.AeP={
I:this},0);A.acg.Ap._Init.call(this.AeN={I:this},0);A.Core.Bn._Init.call(this.Bn={
I:this},0);this.__proto__=C.Auw;this.H(Cc);this.Pu.AZ(0x1D);this.Pu.H(Cc);this.Pu.
L(0xFFE6E6E6);this.V.AZ(0x1D);this.V.H(W_);this.V.A6(0x11);this.V.R(W9);this.V.L(
0xFF000000);this.AeP.H(S5);this.AeP.Z(false);this.AeN.AZ(0x3A);this.AeN.H(S5);this.
Bn.JR(JZ);this.Bn.Kr(UR);this.Bn.DC(US);this.Bn.DL(MF);this.J(this.Pu,0);this.J(
this.V,0);this.J(this.AeP,0);this.J(this.AeN,0);this.J(this.Bn,0);this.V.S(A.aaL(
A.fl.Af));this.AeP.Aw(A.aaL(C.AMI));this.AeN.Aw(A.aaL(C.Ajq));this.Bn.Ln=[this,this.
BAR];},_Done:function(){this.__proto__=C.Fy;this.Pu._Done();this.V._Done();this.
AeP._Done();this.AeN._Done();this.Bn._Done();C.Fy._Done.call(this);},_ReInit:function(
){C.Fy._ReInit.call(this);this.Pu._ReInit();this.V._ReInit();this.AeP._ReInit();
this.AeN._ReInit();this.Bn._ReInit();this.V.S(A.aaL(A.fl.Af));},_Mark:function(D
){var B;C.Fy._Mark.call(this,D);if((B=this.Pu)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.V)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AeP)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.AeN)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Bn)._cycle!=D)B._Mark(
B._cycle=D);},_className:"Demonstrator::AccordionHeader"};C.Ba={AX:null,AR:null,
CR:null,Hn:-1,Zs:function(E){if(this.AX===E)return;this.AX=E;},Ce:function(Ad){A.
ab5("%s",AcN);},Zu:function(E){if(A.aa0(this.AR,E))return;this.AR=E;},AAC:function(
G){if(!this.CR.YG)return;if(this.CR.NF)return;A.pe(this.AR,this);},_Init:function(
aArg){A.Core.P._Init.call(this,aArg);A.Core.Bn._Init.call(this.CR={I:this},0);this.
__proto__=C.Ba;this.H(Cc);this.CR.AZ(0x3F);this.CR.JR(MF);this.CR.Kr(US);this.CR.
DC(UR);this.CR.DL(JZ);this.CR.Afc=0xF;this.CR.AFo(100);this.J(this.CR,0);this.CR.
Ln=[this,this.AAC];},_Done:function(){this.__proto__=A.Core.P;this.CR._Done();A.
Core.P._Done.call(this);},_ReInit:function(){A.Core.P._ReInit.call(this);this.CR.
_ReInit();},_Mark:function(D){var B;A.Core.P._Mark.call(this,D);if((B=this.AX)&&(
B._cycle!=D))B._Mark(B._cycle=D);if((B=this.AR)&&((B=B[0])._cycle!=D))B._Mark(B.
_cycle=D);if((B=this.CR)._cycle!=D)B._Mark(B._cycle=D);},_className:"Demonstrator::ListItem"
};C.Fy={AR$:null,Akt:null,Aks:null,BmY:function(E){if(A.aa0(this.AR$,E))return;this.
AR$=E;},A94:function(E){if(A.aa0(this.Akt,E))return;this.Akt=E;},A93:function(E){
if(A.aa0(this.Aks,E))return;this.Aks=E;},_Init:function(aArg){A.Core.P._Init.call(
this,aArg);this.__proto__=C.Fy;this.H(Cc);},_Mark:function(D){var B;A.Core.P._Mark.
call(this,D);if((B=this.AR$)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.
Akt)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.Aks)&&((B=B[0])._cycle
!=D))B._Mark(B._cycle=D);},_className:"Demonstrator::ListHeader"};C.ANF={Di:null
,Aa6:null,WT:null,WS:null,WR:null,Nb:null,Na:null,KQ:null,LI:false,KE:false,BBK:
false,Ai:function(Ae){var B;A.acn.Ahq.Ai.call(this,Ae);var G$=((Ae&0x10)===0x10);
var Fq=((Ae&0x20)===0x20);var BdA=(this.WR.ZM||this.WS.ZM)||this.WT.ZM;if(BdA)this.
Aa6.L(A.jb.Text);else this.Aa6.L(A.jb.Bc);this.LI=G$;this.KE=Fq;this.BBK=BdA;},AAx:
function(G){this.An();if((!this.WR.ZM&&!this.WS.ZM)&&!this.WT.ZM){var U9=this.AKb(
this.AEz(),this.Arz());var Ade=this.AEu();this.KQ.Ju(U9);if(Ade>U9)this.Lp(U9);A.
pe(this.Di,this);}},A3q:function(G){this.An();},Blk:function(G){var B;var Gc=this.
Nb.G0;var Cz=(A.acg.Text.isPrototypeOf(B=this.Nb.Ch)?B:null);if(!Cz)return;Cz.R(
A.abl(Gc+1900,4,10));Cz.S(A.aaL(A.fl.Af));Cz.L(A.jb.Text);Cz.A6(0x12);Cz.H(A.abK(
Cz.M,[(B=this.Nb.M)[2]-B[0],this.Nb.GK]));},Blj:function(G){var B;var Gc=this.Na.
G0;var Cz=(A.acg.Text.isPrototypeOf(B=this.Na.Ch)?B:null);if(!Cz)return;Cz.R(A.abl(
Gc+1,2,10)+S6);Cz.S(A.aaL(A.fl.Af));Cz.L(A.jb.Text);Cz.A6(0x12);Cz.H(A.abK(Cz.M,[(
B=this.Na.M)[2]-B[0],this.Na.GK]));},Blh:function(G){var B;var Gc=this.KQ.G0;var
Cz=(A.acg.Text.isPrototypeOf(B=this.KQ.Ch)?B:null);if(!Cz)return;Cz.R(A.abl(Gc+1
,2,10)+S6);Cz.S(A.aaL(A.fl.Af));Cz.L(A.jb.Text);Cz.A6(0x12);Cz.H(A.abK(Cz.M,[(B=
this.KQ.M)[2]-B[0],this.KQ.GK]));},Arz:function(){return 1900+((((-this.Nb.Br/this.
Nb.GK)|0)+2)%200);},AkG:function(E){if(E<1900)E=1900;if(E>2100)E=2100;this.Nb.F_(((
E-1900)-2)*-this.Nb.GK);var U9=this.AKb(this.AEz(),E);this.KQ.Ju(U9);if(this.AEu(
)>U9)this.Lp(U9);},AEz:function(){return 1+((((-this.Na.Br/this.Na.GK)|0)+2)%12);
},Um:function(E){if(E<1)E=1;if(E>12)E=12;this.Na.F_(((E-1)-2)*-this.Na.GK);var U9=
this.AKb(E,this.Arz());this.KQ.Ju(U9);if(this.AEu()>U9)this.Lp(U9);},AEu:function(
){return 1+((((-this.KQ.Br/this.KQ.GK)|0)+2)%this.KQ.AY);},Lp:function(E){var U9=
this.AKb(this.AEz(),this.Arz());if(E<1)E=1;if(E>U9)E=U9;this.KQ.F_(((E-2)-1)*-this.
KQ.GK);},AKb:function(AfG,Ac4){if(AfG===2){if(!(Ac4%4)&&(!!(Ac4%100)||!(Ac4%400)
))return 29;else return 28;}else if((((AfG===4)||(AfG===6))||(AfG===9))||(AfG===
11))return 30;else return 31;},_Init:function(aArg){A.acn.Ahq._Init.call(this,aArg
);A.acg.BU._Init.call(this.Aa6={I:this},0);A.Core.H7._Init.call(this.WT={I:this}
,0);A.Core.H7._Init.call(this.WS={I:this},0);A.Core.H7._Init.call(this.WR={I:this
},0);A.Core.CM._Init.call(this.Nb={I:this},0);A.Core.CM._Init.call(this.Na={I:this
},0);A.Core.CM._Init.call(this.KQ={I:this},0);this.__proto__=C.ANF;this.H(Aaa);this.
Aa6.H(Afx);this.Aa6.Nh(3);this.Aa6.L(0xFFE1E1E1);this.Aa6.Z(true);this.WT.H(Aab);
this.WT.ATt(W$);this.WT.AS0(0.2);this.WS.H(Aac);this.WS.ATt(W$);this.WS.AS0(0.2);
this.WR.H(Aad);this.WR.ATt(W$);this.WR.AS0(0.2);this.Nb.H(Aab);this.Nb.ASY(true);
this.Nb.F_(60);this.Nb.Ae4(30);this.Nb.Ju(200);this.Na.H(Aac);this.Na.ASY(true);
this.Na.F_(60);this.Na.Ae4(30);this.Na.Ju(12);this.KQ.H(Aad);this.KQ.ASY(true);this.
KQ.F_(60);this.KQ.Ae4(30);this.KQ.Ju(31);this.J(this.Aa6,0);this.J(this.WT,0);this.
J(this.WS,0);this.J(this.WR,0);this.J(this.Nb,0);this.J(this.Na,0);this.J(this.KQ
,0);this.WT.Zo=[this,this.AAx];this.WT.SB=[this,this.A3q];this.WS.Zo=[this,this.
AAx];this.WS.SB=[this,this.A3q];this.WR.Zo=[this,this.AAx];this.WR.SB=[this,this.
A3q];this.Nb.Hg=[this,this.Blk];this.Nb.Aw2(this.WT);this.Na.Hg=[this,this.Blj];
this.Na.Aw2(this.WS);this.KQ.Hg=[this,this.Blh];this.KQ.Aw2(this.WR);},_Done:function(
){this.__proto__=A.acn.Ahq;this.Aa6._Done();this.WT._Done();this.WS._Done();this.
WR._Done();this.Nb._Done();this.Na._Done();this.KQ._Done();A.acn.Ahq._Done.call(
this);},_ReInit:function(){A.acn.Ahq._ReInit.call(this);this.Aa6._ReInit();this.
WT._ReInit();this.WS._ReInit();this.WR._ReInit();this.Nb._ReInit();this.Na._ReInit(
);this.KQ._ReInit();},_Mark:function(D){var B;A.acn.Ahq._Mark.call(this,D);if((B=
this.Di)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.Aa6)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.WT)._cycle!=D)B._Mark(B._cycle=D);if((B=this.WS)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.WR)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Nb
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Na)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.KQ)._cycle!=D)B._Mark(B._cycle=D);},_className:"Demonstrator::DatePicker"
};C.AHh={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/DemonstratorWhiteTile.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[40,40],FrameDelay:0,_this:
null}};C.AVO={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/DemonstratorWhiteTileSmall.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[40,40],FrameDelay:0,_this:
null}};C.AhC={_Init:function(aArg){A.Core.P._Init.call(this,aArg);this.__proto__=
C.AhC;this.H(E4);},_className:"Demonstrator::SelectionAreaContent"};C.AMy={Y:null
,Vr:null,Ty:null,BBi:function(G){var B;this.Ty.H(A.abI(this.Ty.M,((B=this.M)[3]-
B[1])-((B=this.Vr.M)[3]-B[1])));},_Init:function(aArg){C.AhC._Init.call(this,aArg
);A.Core.Y._Init.call(this.Y={I:this},0);C.AL2._Init.call(this.Vr={I:this},0);C.
AVx._Init.call(this.Ty={I:this},0);this.__proto__=C.AMy;this.Y.AZ(0x3F);this.Y.H(
E4);this.Y.JP(1);this.Vr.H(AhQ);this.Vr.Aj(true);this.Vr.ArV(true);this.Ty.AZ(0x3
);this.Ty.H(J0);this.Ty.Aj(true);this.Ty.NZ(C.AMr);this.Ty.BmS(C.AMF);this.J(this.
Y,0);this.J(this.Vr,0);this.J(this.Ty,0);this.Bb(this.Ty);this.Y.El=[this,this.BBi
];this.Ty.Zs(A._GetAutoObject(A.aco.Aqh));},_Done:function(){this.__proto__=C.AhC;
this.Y._Done();this.Vr._Done();this.Ty._Done();C.AhC._Done.call(this);},_ReInit:
function(){C.AhC._ReInit.call(this);this.Y._ReInit();this.Vr._ReInit();this.Ty._ReInit(
);},_Mark:function(D){var B;C.AhC._Mark.call(this,D);if((B=this.Y)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Vr)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ty)._cycle!=
D)B._Mark(B._cycle=D);},_className:"Demonstrator::AnimalSelectionActions"};C.Vr={
_Init:function(aArg){C.Auw._Init.call(this,aArg);this.__proto__=C.Vr;this.T(A.aaR(
A.acf.A5M));},_ReInit:function(){C.Auw._ReInit.call(this);this.T(A.aaR(A.acf.A5M
));},_className:"Demonstrator::ActionsHeader"};C.AL2={Background:null,XO:null,Y:
null,Acy:null,Acn:null,ZG:null,Acx:null,Akb:null,Akc:null,Akd:null,Ake:null,Akf:
null,Ahe:false,Init:function(aArg){var B;A.zX([this,this.BeS],[B=A._GetAutoObject(
A.aco.Hq),B.AEB,B.AFB],0);A.pe([this,this.BeS],this);},Akt:function(G){this.ArV(
true);},Aks:function(G){this.ArV(false);},ArV:function(E){if(this.Ahe===E)return;
this.Ahe=E;this.XO.ArV(E);A.pe([this,this.Be3],this);},BeS:function(G){var BBr=A.
_GetAutoObject(A.aco.Hq).Ahx===2;A._GetAutoObject(A.Device.Helper).JW(this.ZG,BBr
);},Be3:function(G){var B;if(this.Ahe)this.H(A.abI(this.M,(B=this.XO.M)[3]-B[1])
);else this.H(A.abI(this.M,((B=this.XO.M)[3]-B[1])+((B=this.Y.Db(0x401))[3]-B[1]
)));},_Init:function(aArg){A.Core.P._Init.call(this,aArg);A.acg.AL._Init.call(this.
Background={I:this},0);C.Vr._Init.call(this.XO={I:this},0);A.Core.Y._Init.call(this.
Y={I:this},0);C.Acy._Init.call(this.Acy={I:this},0);C.Acn._Init.call(this.Acn={I:
this},0);C.ZG._Init.call(this.ZG={I:this},0);C.Acx._Init.call(this.Acx={I:this},
0);A.acg.C5._Init.call(this.Akb={I:this},0);A.acg.C5._Init.call(this.Akc={I:this
},0);A.acg.C5._Init.call(this.Akd={I:this},0);A.acg.C5._Init.call(this.Ake={I:this
},0);A.acg.C5._Init.call(this.Akf={I:this},0);this.__proto__=C.AL2;this.H(Aae);this.
Background.AZ(0x3F);this.Background.H(Aae);this.XO.AZ(0x1D);this.XO.H(Cc);this.Y.
H(Lv);this.Y.JP(1);this.Acy.H(AhR);this.Acy.Aj(true);this.Acn.H(Aog);this.Acn.Aj(
true);this.ZG.H(N$);this.ZG.Aj(true);this.Acx.H(Xa);this.Acx.Aj(true);this.Akb.DC(
US);this.Akb.DL(MF);this.Akb.L(A.jb.Bc);this.Akc.DC(Aoh);this.Akc.DL(AhS);this.Akc.
L(A.jb.Bc);this.Akd.DC(AhT);this.Akd.DL(AcO);this.Akd.L(A.jb.Bc);this.Ake.DC(UT);
this.Ake.DL(Aoi);this.Ake.L(A.jb.Bc);this.Akf.DC(Aoj);this.Akf.DL(Aok);this.Akf.
L(A.jb.Bc);this.J(this.Background,0);this.J(this.XO,0);this.J(this.Y,0);this.J(this.
Acy,0);this.J(this.Acn,0);this.J(this.ZG,0);this.J(this.Acx,0);this.J(this.Akb,0
);this.J(this.Akc,0);this.J(this.Akd,0);this.J(this.Ake,0);this.J(this.Akf,0);this.
XO.A94([this,this.Akt]);this.XO.A93([this,this.Aks]);this.Y.El=[this,this.Be3];this.
Init(aArg);},_Done:function(){this.__proto__=A.Core.P;this.Background._Done();this.
XO._Done();this.Y._Done();this.Acy._Done();this.Acn._Done();this.ZG._Done();this.
Acx._Done();this.Akb._Done();this.Akc._Done();this.Akd._Done();this.Ake._Done();
this.Akf._Done();A.Core.P._Done.call(this);},_ReInit:function(){A.Core.P._ReInit.
call(this);this.Background._ReInit();this.XO._ReInit();this.Y._ReInit();this.Acy.
_ReInit();this.Acn._ReInit();this.ZG._ReInit();this.Acx._ReInit();this.Akb._ReInit(
);this.Akc._ReInit();this.Akd._ReInit();this.Ake._ReInit();this.Akf._ReInit();},
_Mark:function(D){var B;A.Core.P._Mark.call(this,D);if((B=this.Background)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.XO)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
Y)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Acy)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Acn)._cycle!=D)B._Mark(B._cycle=D);if((B=this.ZG)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Acx)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Akb)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Akc)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Akd)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.Ake)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
Akf)._cycle!=D)B._Mark(B._cycle=D);},_className:"Demonstrator::ActionsMenu"};C.Jm={
YA:null,Ag2:null,Bn:null,C5:null,Af5:function(G){},A0p:function(s){this.Af5(s);}
,_Init:function(aArg){A.Core.P._Init.call(this,aArg);A.acg.Ap._Init.call(this.YA={
I:this},0);A.acg.Ap._Init.call(this.Ag2={I:this},0);A.Core.Bn._Init.call(this.Bn={
I:this},0);A.acg.C5._Init.call(this.C5={I:this},0);this.__proto__=C.Jm;this.H(Cc
);this.YA.H(Aol);this.YA.L(A.jb.Text);this.Ag2.H(Afy);this.Ag2.L(A.jb.Text);this.
Ag2.Cv(0);this.Bn.JR(JZ);this.Bn.Kr(N_);this.Bn.DC(P4);this.Bn.DL(MF);this.C5.DC(
P4);this.C5.DL(N_);this.C5.L(A.jb.Bc);this.J(this.YA,0);this.J(this.Ag2,0);this.
J(this.Bn,0);this.J(this.C5,0);this.YA.Aw(A.aaL(A.aci.TJ));this.Ag2.Aw(A.aaL(A.aci.
ATO));this.Bn.BO=[this,this.A0p];},_Done:function(){this.__proto__=A.Core.P;this.
YA._Done();this.Ag2._Done();this.Bn._Done();this.C5._Done();A.Core.P._Done.call(
this);},_ReInit:function(){A.Core.P._ReInit.call(this);this.YA._ReInit();this.Ag2.
_ReInit();this.Bn._ReInit();this.C5._ReInit();},_Mark:function(D){var B;A.Core.P.
_Mark.call(this,D);if((B=this.YA)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ag2).
_cycle!=D)B._Mark(B._cycle=D);if((B=this.Bn)._cycle!=D)B._Mark(B._cycle=D);if((B=
this.C5)._cycle!=D)B._Mark(B._cycle=D);},_className:"Demonstrator::ActionsItem"};
C.Acn={AGs:null,DT:null,Yz:null,BU:null,M8:null,Ahy:null,ANz:0,Init:function(aArg
){var B;A.zX([this,this.Be2],[B=A._GetAutoObject(A.aco.Hq),B.AEB,B.AFB],0);A.pe([
this,this.Be2],this);},Af5:function(G){var Iw=A.ab0(this.Yz.String,0,10);var If=
false;switch(A._GetAutoObject(A.aco.Hq).Ahx){case 2:If=A._GetAutoObject(A.aco.Hq
).BBH(Iw);break;case 0:case 1:If=A._GetAutoObject(A.aco.Hq).Bf1(Iw);break;default:
A.ab5("%s%e",Ala,A._GetAutoObject(A.aco.Hq).Ahx);}if(If){Iw=Iw+1;this.Yz.R(Iw.toFixed(
));}},Be2:function(G){var AJd=null;var AKt=0;switch(A._GetAutoObject(A.aco.Hq).Ahx
){case 2:{AJd=A.aaL(A.ach.Avx);AKt=276;}break;case 0:{AJd=A.aaL(A.ach.AjX);AKt=900;
}break;case 1:{AJd=A.aaL(C.AxN);AKt=276;}break;default:A.ab5("%s%e",Ala,A._GetAutoObject(
A.aco.Hq).Ahx);}this.Yz.R(((AKt*1000000000000)+(A.abY(this.Yz.String,0,10)%1000000000000
)).toFixed());this.YA.Aw(AJd);},BlJ:function(E){var F;if(this.ANz===E)return;this.
ANz=E;if(!!this.AGs)(F=this.AGs,F[2].call(F[0],E));},Bks:function(){return this.
ANz;},_Init:function(aArg){C.Jm._Init.call(this,aArg);A.acq.DT._Init.call(this.DT={
I:this},0);C.Ako._Init.call(this.Yz={I:this},0);A.acg.BU._Init.call(this.BU={I:this
},0);A.acg.Ap._Init.call(this.M8={I:this},0);C.Ahy._Init.call(this.Ahy={I:this},
0);this.__proto__=C.Acn;var B;this.DT.H(Ax0);this.DT.ArU(120);this.DT.GK=30;this.
DT.AST(A.jb.Re);this.DT.A9x(A.jb.CS);this.DT.A9B(A.jb.CS);this.DT.ASU(A.jb.Re);this.
DT.A9C(A.jb.Text);this.DT.A9y(A.jb.AV);this.DT.A9D(A.jb.Bm);this.DT.A9A(A.jb.AV);
this.DT.A9z(A.jb.Re);this.Bn.JR(Ax1);this.Bn.DL(O4);this.Yz.H(Rj);this.Yz.R(Ax2);
this.Yz.L(A.jb.Text);this.BU.H(UU);this.BU.Nh(2);this.BU.L(A.jb.Text);this.M8.H(
AsS);this.M8.L(A.jb.Text);this.M8.A6(0xC);this.M8.Cv(3);this.J(this.DT,-2);this.
J(this.Yz,-1);this.J(this.BU,0);this.J(this.M8,0);this.DT.As([this,this.Bks,this.
BlJ]);this.DT.A9J(this.Ahy);this.DT.ArM(A.aaL(A.fl.Bh));this.DT.AwG(A.aaL(A.fl.Bh
));this.M8.Aw(A.aaL(A.ach.Ajr));this.AGs=[B=A._GetAutoObject(A.aco.Hq),B.AEB,B.AFB
];this.Init(aArg);},_Done:function(){this.__proto__=C.Jm;this.DT._Done();this.Yz.
_Done();this.BU._Done();this.M8._Done();this.Ahy._Done();C.Jm._Done.call(this);}
,_ReInit:function(){C.Jm._ReInit.call(this);this.DT._ReInit();this.Yz._ReInit();
this.BU._ReInit();this.M8._ReInit();this.Ahy._ReInit();this.DT.ArM(A.aaL(A.fl.Bh
));this.DT.AwG(A.aaL(A.fl.Bh));},_Mark:function(D){var B;C.Jm._Mark.call(this,D);
if((B=this.AGs)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.DT)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.Yz)._cycle!=D)B._Mark(B._cycle=D);if((B=this.BU
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.M8)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Ahy)._cycle!=D)B._Mark(B._cycle=D);},_className:"Demonstrator::ScanIdAction"
};C.Acy={UF:null,OT:null,A4a:0,Init:function(aArg){var B;A.zX([this,this.BAB],[B=
A._GetAutoObject(A.aco.Hq),B.ASA,B.ATm],0);A.zX([this,this.AAF],[B=A._GetAutoObject(
A.Device.Device),B.Arw,B.Ath],0);A.pe([this,this.AAF],this);},Ai:function(Ae){C.
Jm.Ai.call(this,Ae);this.OT.Z(!A._GetAutoObject(A.aco.Hq).Axm);},Af5:function(G){
var B;A._GetAutoObject(A.aco.Hq).BeC(this);},AAF:function(G){if(A._GetAutoObject(
A.Device.Device).TemperatureUnit!==this.A4a){switch(A._GetAutoObject(A.Device.Device
).TemperatureUnit){case 0:this.OT.R(A.abk(A._GetAutoObject(A.aco.Hq).WO/100,0,1)
);break;case 1:{var Aul=A._GetAutoObject(A.Device.Converter).AU5(A._GetAutoObject(
A.aco.Hq).WO/100,0,A._GetAutoObject(A.Device.Device).TemperatureUnit);this.OT.R(
A.abk(Aul,0,1));}break;default:A.ab5("%s%e",Ax3,A._GetAutoObject(A.Device.Device
).TemperatureUnit);}this.A4a=A._GetAutoObject(A.Device.Device).TemperatureUnit;}
},BAk:function(G){var B;var Agi=A.abX(this.OT.String,0);Agi=A._GetAutoObject(A.Device.
Converter).AU5(Agi,A._GetAutoObject(A.Device.Device).TemperatureUnit,0);Agi*=100;
A._GetAutoObject(A.aco.Hq).AFI(Math.round(Agi)|0);},BAB:function(G){this.An();},
_Init:function(aArg){C.Jm._Init.call(this,aArg);A.acr.UF._Init.call(this.UF={I:this
},0);C.OT._Init.call(this.OT={I:this},0);this.__proto__=C.Acy;var B;this.UF.H(Ax4
);this.UF.A9Y(A.aaR(A.acf.A41));this.OT.H(Ax5);this.OT.R(Aom);this.OT.L(A.jb.Text
);this.OT.BlL(true);this.A4a=A._GetAutoObject(A.Device.Device).TemperatureUnit;this.
J(this.UF,0);this.J(this.OT,0);this.YA.Aw(A.aaL(A.ach.AbE));this.UF.As([B=A._GetAutoObject(
A.aco.Hq),B.ASA,B.ATm]);this.UF.OnSetAppearance(A._GetAutoObject(A.acx.AuS));this.
OT.Di=[this,this.BAk];this.Init(aArg);},_Done:function(){this.__proto__=C.Jm;this.
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
U&0x80)===0x80))this.Ij().AMS(this);},A76:function(G){},BaF:function(s){this.A76(
s);},BjS:function(G){var B;var F;if(!this.Q||!(F=this.Q,F[1].call(F[0])).length)
this.CX.H(A.abM(this.CX.M,A.aaI(this.Text.M)[0]));else{this.CX.H(A.abM(this.CX.M
,this.Text.AOQ(0)[2]+2));this.CX.H(A.abO(this.CX.M,this.Text.AOQ(0)[1]));this.CX.
H(A.abI(this.CX.M,(B=this.Text.AOQ(0))[3]-B[1]));}this.Ap.H(A.abM(this.Ap.M,this.
Text.M[0]-((B=this.Ap.M)[2]-B[0])));},A74:function(G){},BaE:function(s){this.A74(
s);},As:function(E){if(A.aaZ(this.Q,E))return;if(!!this.Q)A.z$([this,this.Kd],this.
Q,0);this.Q=E;if(!!E)A.zX([this,this.Kd],E,0);if(!!E)A.pe([this,this.Kd],this);}
,Kd:function(G){this.An();},Blm:function(G){var B;if(((this.U&0x80)===0x80))this.
Ij().ACB(this);},BeK:function(G){},_Init:function(aArg){A.Core.P._Init.call(this
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
,this.BaF];this.Am9.D1=[this,this.BaF];this.Am8.BO=[this,this.BaE];this.Am8.D1=[
this,this.BaE];this.Arf.BO=[this,this.Blm];this.Text.Q1([this,this.BjS]);this.Text.
S(A.aaL(A.fl.Ak));this.Hk.Zv(this.BU);this.Ap.Aw(null);this.Are.BO=[this,this.BeK
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
};C.Aep={Background:null,Yq:null,_Init:function(aArg){A.Core.P._Init.call(this,aArg
);A.acg.AL._Init.call(this.Background={I:this},0);C.Yq._Init.call(this.Yq={I:this
},0);this.__proto__=C.Aep;var B;this.H(Alb);this.Background.H(Alb);this.Yq.AZ(0x1D
);this.Yq.H(AsT);this.J(this.Background,0);this.J(this.Yq,0);this.Yq.As([B=A._GetAutoObject(
A.aco.AgF),B.A8V,B.AFD]);},_Done:function(){this.__proto__=A.Core.P;this.Background.
_Done();this.Yq._Done();A.Core.P._Done.call(this);},_ReInit:function(){A.Core.P.
_ReInit.call(this);this.Background._ReInit();this.Yq._ReInit();},_Mark:function(
D){var B;A.Core.P._Mark.call(this,D);if((B=this.Background)._cycle!=D)B._Mark(B.
_cycle=D);if((B=this.Yq)._cycle!=D)B._Mark(B._cycle=D);},_className:"Demonstrator::FilterRow"
};C.OT={Init:function(aArg){var B;A.zX([this,this.AAF],[B=A._GetAutoObject(A.Device.
Device),B.Arw,B.Ath],0);A.pe([this,this.AAF],this);},Ai:function(Ae){var B;C.Ako.
Ai.call(this,Ae);var Iy=((this.U&0x40)===0x40);if(!Iy&&(this.String.length>0))this.
Text.R(((this.String+AsU)+A._GetAutoObject(A.acj.Temperature).AlJ())+String.fromCharCode(
0x0A));else this.Text.R(this.String+String.fromCharCode(0x0A));if(this.D6>this.String.
length)this.D6=this.String.length;},AAF:function(G){this.An();},_Init:function(aArg
){C.Ako._Init.call(this,aArg);this.__proto__=C.OT;this.Init(aArg);},_className:"Demonstrator::TemperatureInputView"
};C.Ako={B6:null,Di:null,IS:null,Cr:null,AmD:null,R$:null,KL:null,Bn:null,Text:null
,CX:null,Aqw:null,Asc:null,BU:null,Hk:null,Ars:null,Aq0:null,AqJ:null,String:A.jV
,D6:0,AQ:0xFFB3B3B3,AvW:15,ANH:false,LA:false,Bk:function(aSize){this.Hk.H(A.abK(
this.Hk.M,aSize));this.BU.Axt(1);this.BU.Jq(0,40);this.BU.Ff(0,aSize[0]-20,20,12.5
,12.5,-90,90,10);this.BU.Ff(0,20,20,12.5,12.5,90,270,10);this.BU.VJ(0);},Ai:function(
Ae){var B;A.acn.I$.Ai.call(this,Ae);if(((Ae&0x40)===0x40))this.IS.Ar(true);else{
this.IS.Ar(false);this.CX.Z(false);}},A4k:function(G){var B;var Bd=this.Text.M;var
Nv=0;var Nw=0;if(this.CX.Er[0]<Bd[0])Nv=Bd[0]-this.CX.Er[0];if(this.CX.Er[0]>Bd[
2])Nv=Bd[2]-this.CX.Er[0];if(this.CX.Er[1]<Bd[1])Nw=Bd[1]-this.CX.Er[1];if(this.
CX.EC[1]>Bd[3])Nw=Bd[3]-this.CX.EC[1];if(!!Nv||!!Nw)this.Text.F_(A.abf(this.Text.
Br,[Nv,Nw]));Nv=this.Text.Br[0];Nw=this.Text.Br[1];var C3=[(B=this.Text.Db())[2]-
B[0],B[3]-B[1]];if(C3[0]<=((B=this.Text.M)[2]-B[0]))Nv=0;if(C3[1]<=((B=this.Text.
M)[3]-B[1]))Nw=0;this.Text.F_([Nv,Nw]);},Amj:function(G){if(!this.B6)return;var A3O=
this.Text.AGO(this.D6);var pos=this.Text.Afd(A3O);this.CX.DL(A.abe(pos,[0,this.B6.
Ascent]));this.CX.DC(A.abf(pos,[0,this.B6.Descent]));if(this.IS.Bw){this.IS.Ar(false
);this.IS.Ar(true);}if(this.LA){A.pe([this,this.A4k],this);this.LA=false;}},AAB:
function(G){if(!this.A6O(0x80))this.Ij().AMS(this);var EH=this.Text.ATS(this.Bn.
H0);var Vc=this.Text.AnT(EH);if(Vc!==this.D6){this.D6=Vc;A.pe([this,this.Amj],this
);this.LA=true;}},AAv:function(G){if(!this.B6)return;var EH=this.Text.AGO(this.D6
);if(this.Cr.CO===6){EH=[EH[0]-1,EH[1]];if(this.Text.AnT(EH)===this.D6){EH=[EH[0
],EH[1]-1];EH=[this.Text.ACZ(EH[1]).length,EH[1]];}}if(this.Cr.CO===7){EH=[EH[0]+
1,EH[1]];if(this.Text.AnT(EH)===this.D6){EH=[EH[0],EH[1]+1];EH=[0,EH[1]];}}var Vc=
this.Text.AnT(EH);if(Vc!==this.D6){this.D6=Vc;A.pe([this,this.Amj],this);this.LA=
true;}},Bet:function(G){if(!this.D6)return;this.R(A.ab1(this.String,this.D6-1,1)
);this.D6=this.D6-1;this.LA=true;A.pe(this.Di,this);},AAw:function(G){if(this.D6>=
this.String.length)return;this.R(A.ab1(this.String,this.D6,1));this.LA=true;A.pe(
this.Di,this);},Bey:function(G){if(this.String.length>=this.AvW)return;var ByI=this.
KL.DP;var Auj=String.fromCharCode(ByI);this.R(A.abU(this.String,Auj,this.D6));this.
D6=this.D6+Auj.length;this.LA=true;A.pe(this.Di,this);},R:function(E){if(this.String===
E)return;this.String=E;if(this.D6>(E.length+1))this.D6=E.length;this.Text.R(E+String.
fromCharCode(0x0A));this.LA=true;this.Text.F_(JZ);},L:function(E){if(this.AQ===E
)return;this.AQ=E;this.Text.L(E);this.CX.L(E);this.Hk.L(E);},S:function(E){if(this.
B6===E)return;this.B6=E;this.Text.S(E);this.LA=true;this.Text.F_(JZ);},BeL:function(
G){if(this.ANH===false)return;if(this.String.indexOf(String.fromCharCode(0x2E),0
)>=0)return;if(this.String.length>=this.AvW)return;this.R(A.abU(this.String,S6,this.
D6));this.D6=this.D6+1;this.LA=true;A.pe(this.Di,this);},Bbp:function(s){this.BeL(
s);},BlL:function(E){if(this.ANH===E)return;this.ANH=E;if(E===false){var Bfs=this.
String.indexOf(String.fromCharCode(0x2E),0);if(Bfs>=0)this.R(A.abV(this.String,Bfs
));}this.LA=true;this.Text.F_(JZ);},BmR:function(E){if(this.AvW===E)return;this.
AvW=E;this.R(A.abV(this.String,E));this.LA=true;this.Text.F_(JZ);},BAs:function(
G){if(this.A6O(0x80))this.Ij().ACB(this);this.An();},BAg:function(G){var Vc=this.
String.length;if(Vc!==this.D6){this.D6=Vc;A.pe([this,this.Amj],this);this.LA=true;
}},BAj:function(G){if(!!this.D6){this.D6=0;A.pe([this,this.Amj],this);this.LA=true;
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
IR);this.Bn.DC(Aon);this.Bn.DL(JZ);this.Bn.AFo(3);this.Text.AZ(0x3F);this.Text.H(
Afz);this.Text.KS(false);this.Text.A6(0x12);this.Text.R(A.jV);this.Text.L(0xFFB3B3B3
);this.CX.DC(AsV);this.CX.DL(AsW);this.CX.A_y(2);this.CX.A_x(2);this.CX.L(0xFFB3B3B3
);this.CX.Z(false);this.Aqw.Filter=138;this.Asc.Filter=137;this.Hk.H(Afz);this.Hk.
L(0xFFB3B3B3);this.Hk.Nh(1);this.Ars.Filter=1;this.Aq0.Filter=41;this.AqJ.Filter=
42;this.J(this.Bn,0);this.J(this.Text,0);this.J(this.CX,0);this.J(this.Hk,0);this.
IS.Q=[B=this.CX,B.Fk,B.Z];this.Cr.BO=[this,this.AAv];this.Cr.D1=[this,this.AAv];
this.AmD.BO=[this,this.Bet];this.AmD.D1=[this,this.Bet];this.R$.BO=[this,this.AAw
];this.R$.D1=[this,this.AAw];this.KL.BO=[this,this.Bey];this.KL.D1=[this,this.Bey
];this.Bn.BO=[this,this.AAB];this.Text.Q1([this,this.Amj]);this.Text.S(A.aaL(A.fl.
Ak));this.B6=A.aaL(A.fl.Ak);this.Aqw.BO=[this,this.Bbp];this.Asc.BO=[this,this.Bbp
];this.Hk.Zv(this.BU);this.Ars.BO=[this,this.BAs];this.Aq0.BO=[this,this.BAj];this.
AqJ.BO=[this,this.BAg];},_Done:function(){this.__proto__=A.acn.I$;this.IS._Done(
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
_className:"Demonstrator::NumberInput"};C.Acx={LabelDataSync:null,Af5:function(G
){var B;A.pe([B=A._GetAutoObject(A.acs.Acr),B.BBR],this);},_Init:function(aArg){
C.Jm._Init.call(this,aArg);A.kR.CH._Init.call(this.LabelDataSync={I:this},0);this.
__proto__=C.Acx;this.LabelDataSync.H(Alc);this.LabelDataSync.R(A.aaR(A.acf.A5C));
this.LabelDataSync.L(A.jb.Text);this.J(this.LabelDataSync,0);this.YA.Aw(A.aaL(C.
AUW));this.LabelDataSync.S(A.aaL(A.fl.Af));this.LabelDataSync.A2(A.aaL(A.fl.Ak));
},_Done:function(){this.__proto__=C.Jm;this.LabelDataSync._Done();C.Jm._Done.call(
this);},_ReInit:function(){C.Jm._ReInit.call(this);this.LabelDataSync._ReInit();
this.LabelDataSync.R(A.aaR(A.acf.A5C));this.LabelDataSync.S(A.aaL(A.fl.Af));this.
LabelDataSync.A2(A.aaL(A.fl.Ak));},_Mark:function(D){var B;C.Jm._Mark.call(this,
D);if((B=this.LabelDataSync)._cycle!=D)B._Mark(B._cycle=D);},_className:"Demonstrator::SyncAction"
};C.AUW={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/DemonstratorSyncIcon.png"
,Format:A._PIXEL_FORMAT_NATIVE,NoOfFrames:1,FrameSize:[50,60],FrameDelay:0,_this:
null}};C.Abe={TimespanDaysToString:null,Avp:function(aIndex){if(this.AqU()>aIndex
)return this.TimespanDaysToString.BI(aIndex);A.ab5("%s",AsX);return A.jV;},AqU:function(
){return 4;},C4:function(aIndex){var Ai$=0;switch(aIndex){case 0:Ai$=0;break;case
1:Ai$=1;break;case 2:Ai$=2;break;case 3:Ai$=3;break;default:throw new Error(Ax6+
aIndex.toFixed());}return Ai$;},_Init:function(aArg){A.acq.VK._Init.call(this,aArg
);A.Device.TimespanDaysToString._Init.call(this.TimespanDaysToString={I:this},0);
this.__proto__=C.Abe;},_Done:function(){this.__proto__=A.acq.VK;this.TimespanDaysToString.
_Done();A.acq.VK._Done.call(this);},_ReInit:function(){A.acq.VK._ReInit.call(this
);this.TimespanDaysToString._ReInit();},_Mark:function(D){var B;A.acq.VK._Mark.call(
this,D);if((B=this.TimespanDaysToString)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Demonstrator::DatePickerUnitDD"};C.BFD={GH:0,AVD:1,He:2,Year:3};C.ACy={_class:function(
){return A.aci.Al;},0:{FileName:"./res_index/DemonstratorEarTagIcon.png",Format:
A._PIXEL_FORMAT_ALPHA8,NoOfFrames:2,FrameSize:[37,37],FrameDelay:0,_this:null}};
C.AxN={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/DemonstratorTransponderEarTagIcon.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:2,FrameSize:[37,37],FrameDelay:0,_this:
null}};C.ZG={Aee:null,Init:function(aArg){var Au=A._NewObject(A.Core.Bs,0);Au.Initialize(
A._GetAutoObject(A.Device.Helper).Dv());var A1y=Au.Format(Iq);this.Aee.R(A1y);},
Af5:function(G){var B;var J5=this.Aee.String;var O;O=J5.indexOf(String.fromCharCode(
0x2E),0);while(O>=0){J5=A.ab1(J5,O,1);O=J5.indexOf(String.fromCharCode(0x2E),O);
}J5=J5+Ax7;J5=J5+A._GetAutoObject(A.acj.VA).ACU(J5).toFixed();var A1y=A._GetAutoObject(
A.Device.AnN).Bfh(J5);A._GetAutoObject(A.aco.Hq).BBI(((B=(A1y|0))<0)?B+0x100000000:
B);},_Init:function(aArg){C.Jm._Init.call(this,aArg);C.ANE._Init.call(this.Aee={
I:this},0);this.__proto__=C.ZG;this.Aee.H(Rj);this.Aee.L(A.jb.Text);this.Aee.BmR(
10);this.J(this.Aee,-1);this.YA.Aw(A.aaL(A.ach.Avx));this.Init(aArg);},_Done:function(
){this.__proto__=C.Jm;this.Aee._Done();C.Jm._Done.call(this);},_ReInit:function(
){C.Jm._ReInit.call(this);this.Aee._ReInit();},_Mark:function(D){var B;C.Jm._Mark.
call(this,D);if((B=this.Aee)._cycle!=D)B._Mark(B._cycle=D);},_className:"Demonstrator::ScanDateAction"
};C.Ahx={BFR:0,BFN:1,VA:2,LAST:3};C.Ahy={Ahz:null,Avp:function(aIndex){if(this.AqU(
)>aIndex)return this.Ahz.BI(aIndex);A.ab5("%s",AsX);return A.jV;},AqU:function(){
return 3;},_Init:function(aArg){A.acq.VK._Init.call(this,aArg);C.Ahz._Init.call(
this.Ahz={I:this},0);this.__proto__=C.Ahy;},_Done:function(){this.__proto__=A.acq.
VK;this.Ahz._Done();A.acq.VK._Done.call(this);},_ReInit:function(){A.acq.VK._ReInit.
call(this);this.Ahz._ReInit();},_Mark:function(D){var B;A.acq.VK._Mark.call(this
,D);if((B=this.Ahz)._cycle!=D)B._Mark(B._cycle=D);},_className:"Demonstrator::ScanTypeDD"
};C.Ahz={BI:function(A5){var BcM=A5;var AKZ=A.jV;switch(BcM){case 2:AKZ=A.aaR(A.
acf.VA);break;case 0:AKZ=A.aaR(A.acf.Transponder);break;case 1:AKZ=A.aaR(A.acf.Bh8
);break;default:throw new Error(Ax8+BcM.toFixed());}return AKZ;},_Init:function(
aArg){A.Device.EnumToString._Init.call(this,aArg);this.__proto__=C.Ahz;},_className:
"Demonstrator::ScanTypeToString"};C.ANE={BeL:function(G){var Bft=0;var O=this.String.
indexOf(String.fromCharCode(0x2E),0);while(O>=0){Bft++;O++;O=this.String.indexOf(
String.fromCharCode(0x2E),O);}if(Bft>=2)return;if(this.String.length>=this.AvW)return;
this.R(A.abU(this.String,S6,this.D6));this.D6=this.D6+1;this.LA=true;A.pe(this.Di
,this);},_Init:function(aArg){C.Ako._Init.call(this,aArg);this.__proto__=C.ANE;}
,_className:"Demonstrator::DateInput"};
C._Init=function(){C.AVx.__proto__=A.acn.Menu;C.AUt.__proto__=A.Core.P;C.AMr.__proto__=
C.Ba;C.Mf.__proto__=A.Core.P;C.Yq.__proto__=C.Ara;C.Abf.__proto__=A.Core.P;C.AvA.
__proto__=A.acn.Ahs;C.AMF.__proto__=C.Fy;C.Auw.__proto__=C.Fy;C.Ba.__proto__=A.Core.
P;C.Fy.__proto__=A.Core.P;C.ANF.__proto__=A.acn.Ahq;C.AhC.__proto__=A.Core.P;C.AMy.
__proto__=C.AhC;C.Vr.__proto__=C.Auw;C.AL2.__proto__=A.Core.P;C.Jm.__proto__=A.Core.
P;C.Acn.__proto__=C.Jm;C.Acy.__proto__=C.Jm;C.Ara.__proto__=A.Core.P;C.Aep.__proto__=
A.Core.P;C.OT.__proto__=C.Ako;C.Ako.__proto__=A.acn.I$;C.Acx.__proto__=C.Jm;C.Abe.
__proto__=A.acq.VK;C.ZG.__proto__=C.Jm;C.Ahy.__proto__=A.acq.VK;C.Ahz.__proto__=
A.Device.EnumToString;C.ANE.__proto__=C.Ako;};C._ReInit=function(){};C.DH=function(
D){var B;if((B=C.Background[0]._this)&&(B._cycle!=D))B._Done(C.Background[0]._this=
null);if((B=C.AM1[0]._this)&&(B._cycle!=D))B._Done(C.AM1[0]._this=null);if((B=C.
AM2[0]._this)&&(B._cycle!=D))B._Done(C.AM2[0]._this=null);if((B=C.AM3[0]._this)&&(
B._cycle!=D))B._Done(C.AM3[0]._this=null);if((B=C.AM4[0]._this)&&(B._cycle!=D))B.
_Done(C.AM4[0]._this=null);if((B=C.AP5[0]._this)&&(B._cycle!=D))B._Done(C.AP5[0].
_this=null);if((B=C.Filter[0]._this)&&(B._cycle!=D))B._Done(C.Filter[0]._this=null
);if((B=C.ARE[0]._this)&&(B._cycle!=D))B._Done(C.ARE[0]._this=null);if((B=C.Ajq[
0]._this)&&(B._cycle!=D))B._Done(C.Ajq[0]._this=null);if((B=C.AMI[0]._this)&&(B.
_cycle!=D))B._Done(C.AMI[0]._this=null);if((B=C.Asr[0]._this)&&(B._cycle!=D))B._Done(
C.Asr[0]._this=null);if((B=C.AU1[0]._this)&&(B._cycle!=D))B._Done(C.AU1[0]._this=
null);if((B=C.AHh[0]._this)&&(B._cycle!=D))B._Done(C.AHh[0]._this=null);if((B=C.
AVO[0]._this)&&(B._cycle!=D))B._Done(C.AVO[0]._this=null);if((B=C.AUW[0]._this)&&(
B._cycle!=D))B._Done(C.AUW[0]._this=null);if((B=C.ACy[0]._this)&&(B._cycle!=D))B.
_Done(C.ACy[0]._this=null);if((B=C.AxN[0]._this)&&(B._cycle!=D))B._Done(C.AxN[0].
_this=null);};return C;})();

/* VitalControl demonstration application, © Urban GmbH & Co.KG 2023 */