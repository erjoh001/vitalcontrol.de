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
* Version  : 12.05
* Profile  : WebGLDemonstrator
* Platform : Web.WebGL.RGBA8888
*
*******************************************************************************/

var index;if(!index)throw new Error("The application file '_project.js' isn't yet loaded!"
);if(index.aby)throw new Error("The unit file 'Demonstrator.js' included twice!"
);index.aby=(function(){var A=index;var C={};
var B$=[0,0,370,60];var BH=[360,0,370,60];var EV=[0,0,370,710];var GT="Unknown animalType";
var Jt=[58,10,120,50];var IL=[0,0,60,60];var OK=[120,0,360,60];var PJ="\u2015";var
N1=[0,0,240,60];var CJ=[0,0,40,60];var Fn=[100,0,130,60];var Nd=[43,0,100,60];var
OL=[125,0,240,60];var KH=[0,0];var OM=[100,0];var Ne=[100,60];var ON=[0,60];var Ss=[
107,0];var T$=[240,0];var Ze=[240,60];var Wb=[107,60];var IM="%d.%m.%Y";var Ua="Unhandled date unit: ";
var Zf=[0,0,200,180];var Wc=[36,0,200,30];var Zg=[0,30,160,60];var Ub="Text";var
Zh=[0,70,40,110];var Zi=[44,70,156,110];var Uc=[160,70,200,110];var Wd=[7,2,27,25
];var QV=[0,30,170,180];var Zj=[170,34,190,57];var OO=[0,0,40,40];var PK=[0,40];
var Ud=[40,40];var Zk=[40,0];var We=[0,0,370,100];var Zl=[20,0,290,60];var Zm=[0
,60,370,100];var Wf="Cap";var Wg=[20,0,370,60];var St=[310,0,370,60];var Zn=[370
,0];var Zo=[370,60];var AbO="UpdateData is called for the base class ListItemBase. Please make "+
"sure this method is implemented by a derived class.";var Su=".";var AbP=[0,0,170
,150];var AeN=[0,59,170,90];var Zp=[110,0,170,150];var Wh=[0,30];var Wi=[50,0,100
,150];var AeO=[0,0,40,150];var AeP=[0,0,370,240];var JT=[0,60,370,710];var AeQ=[
0,60,370,120];var Li=[0,120,370,180];var Ag$=[0,180,370,240];var Ang=[370,120];var
N2=[0,120];var Wj=[370,180];var Anh=[0,180];var Aha=[370,240];var Ahb=[0,240];var
AbQ=[0,0,50,60];var Ue=[50,0,100,60];var Ani=[100,10,370,50];var Anj="276000901234567";
var Awl="Unhandled temperature unit";var Awm=[110,0,260,60];var Aki=[235,10,370,
50];var Awn="39.5";var AeR=[0,0,270,40];var Arw=[270,0];var OP=[270,40];var Sv=[
150,0,170,40];var Awo=[205,10,207,30];var Sw=[0,0,370,40];var Arx=[50,0,320,40];
var Awp=" ";var Awq=[135,23];var Awr=[135,0];var Ank=[100,0,370,60];var Aws="Error: Nullpointer Exception";
var Ary="Unknown Date Piecker Unit Index: ";
C.Background={_class:function(){return A.abj.Aj;},0:{FileName:"./res_index/DemonstratorBackground.png"
,Format:A.cC,NoOfFrames:1,FrameSize:[1000,740],FrameDelay:0,_this:null}};C.AKU={
_class:function(){return A.abj.Aj;},0:{FileName:"./res_index/DemonstratorButtonLeft.png"
,Format:A.cC,NoOfFrames:1,FrameSize:[40,40],FrameDelay:0,_this:null}};C.AKV={_class:
function(){return A.abj.Aj;},0:{FileName:"./res_index/DemonstratorButtonLeftPressed.png"
,Format:A.cC,NoOfFrames:1,FrameSize:[40,40],FrameDelay:0,_this:null}};C.AKW={_class:
function(){return A.abj.Aj;},0:{FileName:"./res_index/DemonstratorButtonRight.png"
,Format:A.cC,NoOfFrames:1,FrameSize:[40,40],FrameDelay:0,_this:null}};C.AKX={_class:
function(){return A.abj.Aj;},0:{FileName:"./res_index/DemonstratorButtonRightPressed.png"
,Format:A.cC,NoOfFrames:1,FrameSize:[40,40],FrameDelay:0,_this:null}};C.ANU={_class:
function(){return A.abj.Aj;},0:{FileName:"./res_index/DemonstratorIconDatePicker.png"
,Format:A.cC,NoOfFrames:1,FrameSize:[20,23],FrameDelay:0,_this:null}};C.Filter={
_class:function(){return A.abj.Aj;},0:{FileName:"./res_index/DemonstratorFilter.png"
,Format:A.cC,NoOfFrames:1,FrameSize:[15,16],FrameDelay:0,_this:null}};C.APq={_class:
function(){return A.abj.Aj;},0:{FileName:"./res_index/DemonstratorMenuIcon.png",
Format:A.cC,NoOfFrames:1,FrameSize:[20,16],FrameDelay:0,_this:null}};C.AiA={_class:
function(){return A.abj.Aj;},0:{FileName:"./res_index/DemonstratorArrowRight.png"
,Format:A.cC,NoOfFrames:1,FrameSize:[17,16],FrameDelay:0,_this:null}};C.AKC={_class:
function(){return A.abj.Aj;},0:{FileName:"./res_index/DemonstratorArrowDown.png"
,Format:A.cC,NoOfFrames:1,FrameSize:[17,16],FrameDelay:0,_this:null}};C.Aq6={_class:
function(){return A.abj.Aj;},0:{FileName:"./res_index/DemonstratorScanIcon.png",
Format:A.jt,NoOfFrames:2,FrameSize:[37,37],FrameDelay:0,_this:null}};C.ASw={_class:
function(){return A.abj.Aj;},0:{FileName:"./res_index/DemonstratorTemperatureIcon.png"
,Format:A.cC,NoOfFrames:1,FrameSize:[17,37],FrameDelay:0,_this:null}};C.ASZ={Ade:
null,AW:null,AQ:null,Background:null,H2:null,AC:null,IG:null,Dh:null,K9:null,A4Q:
null,A5b:0,Bf:function(aSize){A.abo.Menu.Bf.call(this,aSize);this.IG.G(A.aaS(this.
IG.M,this.AC.OC));this.IG.G([].concat(this.IG.M.slice(0,3),aSize[1]));},Ag:function(
Ae){var B;A.abo.Menu.Ag.call(this,Ae);var GZ=((Ae&0x40)===0x40);if(GZ&&(this.AC.
Ge<0))this.AC.GM(0);},NQ:function(E){if(this.K9===E)return;this.K9=E;this.AC.NQ(
E);},BjG:function(E){var B;if(this.A4Q===E)return;if(!!this.Ade){this.HH(this.Ade
);this.Ade=null;}if(!!E){this.Ade=(C.Fk.isPrototypeOf(B=A._NewObject(E,0))?B:null
);this.Ade.A6X([this,this.Agy]);this.Ade.A6Y([this,this.Agz]);this.Ade.BjL(null);
this.J(this.Ade,0);this.AC.A64((B=this.Ade.M)[3]-B[1]);}else this.AC.A64(0);this.
IG.G(A.aaS(this.IG.M,this.AC.OC));A.ow([this,this.E4],this);this.A4Q=E;},G8:function(
H){var B;var FW=this.AC.GK;var Z=(C.A_.isPrototypeOf(B=this.AC.Cd)?B:null);if(!Z
)return;Z.YC(this.AW);Z.Cc(FW);Z.YF(this.AQ);Z.G(A.aaN(Z.M,[(B=this.AC.M)[2]-B[0
],this.AC.GL]));},YC:function(E){var B;if(this.AW===E)return;if(!!this.AW){A.zl([
this,this.Cc],this.AW,0);A.zn([this,this.Am$],[B=this.AW,B.Fy,B.FD],0);}this.AW=
E;if(!!E){A.y_([this,this.Cc],E,0);A.za([this,this.Am$],[E,E.Fy,E.FD],0);}A.ow([
this,this.Cc],this);A.ow([this,this.Am$],this);},Cc:function(H){if(!!this.AW){this.
AC.Jp(this.AW.Cj());this.AC.AaQ(0,this.AC.AR-1);}else this.AC.Jp(0);if(this.A5b!==
this.AC.AR){this.AC.AzO(null,null);this.A5b=this.AC.AR;}A.ow([this,this.E4],this
);},Agz:function(H){var B;this.G(A.aaL(this.M,(B=this.AC.AME())[3]-B[1]));},Agy:
function(H){this.G(A.aaL(this.M,180));},A6k:function(H){var Jx=(A.Core.BR.isPrototypeOf(
H)?H:null);var FW=this.AC.Ge;if(Jx.CP===4)FW=FW-1;else if(Jx.CP===5)FW=FW+1;else
if((Jx.D4>=0x30)&&(Jx.D4<=0x39))A._GetAutoObject(A.abq.AiQ).E6(Jx.D4);else if(Jx.
CP===45)A._GetAutoObject(A.abq.AiQ).Delete();else Jx.Pc=true;if((FW<0)||(FW>=this.
AC.AR))return;this.AC.GM(FW);this.Bu3(FW,true);},BuS:function(H){var Z=(C.A_.isPrototypeOf(
H)?H:null);this.AC.GM(Z.Hq);},Bu3:function(GU,Ab5){var B;if((GU<0)||(GU>=this.AC.
AR))return;var AM=this.AC.Apz(GU,GU);var A8=this.AC.M;A8=A.aaS(A8,(B=this.AC.AME(
))[3]-B[1]);A8=A.aaL(A8,(((B=this.AC.M)[3]-B[1])-((B=this.AC.AME())[3]-B[1]))-((
B=this.AC.Bfl())[3]-B[1]));var Lu=A.kz(AM,A8);if((!Ab5&&!((Lu[0]>=Lu[2])||(Lu[1]>=
Lu[3])))||(Ab5&&A.z9(Lu,AM)))return;var Bo=0;if(AM[3]>A8[3])Bo=AM[3]-A8[3];if(Bo>(
AM[1]-A8[1]))Bo=(AM[3]-A8[1])-this.AC.GL;this.AC.Gk(this.AC.Bp-Bo);},Am$:function(
H){this.AC.GM(-1);},E4:function(H){var B;this.IG.Mr(this.AC.GL*this.AC.AR);this.
IG.Mt(((B=this.AC.M)[3]-B[1])-this.AC.OC);this.IG.Ms(-this.AC.Bp);},_Init:function(
aArg){A.abo.Menu._Init.call(this,aArg);A.abh.AH._Init.call(this.Background={I:this
},0);A.Core.H2._Init.call(this.H2={I:this},0);A.Core.CI._Init.call(this.AC={I:this
},0);A.kh.As._Init.call(this.IG={I:this},0);A.Core.BR._Init.call(this.Dh={I:this
},0);this.__proto__=C.ASZ;this.G(B$);this.Background.AV(0x3);this.Background.G(B$
);this.H2.AV(0x3F);this.H2.G(B$);this.AC.AV(0x3F);this.AC.G(B$);this.AC.Ad5(60);
this.AC.Jp(0);this.AC.NQ(this.K9);this.IG.AV(0x3A);this.IG.G(BH);this.IG.L(0xFF808080
);this.J(this.Background,0);this.J(this.H2,0);this.J(this.AC,0);this.J(this.IG,0
);this.AC.Ej=[this,this.E4];this.AC.G8=[this,this.G8];this.AC.Avs(this.H2);this.
AQ=[this,this.BuS];this.Dh.BS=[this,this.A6k];this.Dh.DV=[this,this.A6k];},_Done:
function(){this.__proto__=A.abo.Menu;this.Background._Done();this.H2._Done();this.
AC._Done();this.IG._Done();this.Dh._Done();A.abo.Menu._Done.call(this);},_ReInit:
function(){A.abo.Menu._ReInit.call(this);this.Background._ReInit();this.H2._ReInit(
);this.AC._ReInit();this.IG._ReInit();this.Dh._ReInit();},_Mark:function(D){var B;
A.abo.Menu._Mark.call(this,D);if((B=this.Ade)&&(B._cycle!=D))B._Mark(B._cycle=D);
if((B=this.AW)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.AQ)&&((B=B[0])._cycle
!=D))B._Mark(B._cycle=D);if((B=this.Background)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.H2)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AC)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.IG)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Dh)._cycle!=D)B._Mark(
B._cycle=D);},_className:"Demonstrator::VerticalMenu"};C.AR1={Gs:null,AH:null,CC:
null,Init:function(aArg){var B;A.za([this,this.Ht],[B=A._GetAutoObject(A.abq.LB)
,B.A50,B.A7b],0);A.ow([this,this.Ht],this);},Abf:function(E){if(this.Gs===E)return;
if(!!this.Gs)this.HH(this.Gs);this.Gs=E;if(!!this.Gs)this.J(this.Gs,0);this.A$(E
);this.AgS(E,this.CC);this.Am();},Ht:function(H){var B;if(!!A._GetAutoObject(A.abq.
LB).Aq9)this.Abf((C.AgW.isPrototypeOf(B=A._NewObject(A._GetAutoObject(A.abq.LB).
Aq9,0))?B:null));else this.Abf(null);},_Init:function(aArg){A.Core.O._Init.call(
this,aArg);A.abh.AH._Init.call(this.AH={I:this},0);A.abh.CC._Init.call(this.CC={
I:this},0);this.__proto__=C.AR1;this.G(EV);this.AH.AV(0x3F);this.AH.G(EV);this.CC.
G(EV);this.CC.L(0xFF000000);this.J(this.AH,0);this.J(this.CC,0);this.Init(aArg);
},_Done:function(){this.__proto__=A.Core.O;this.AH._Done();this.CC._Done();A.Core.
O._Done.call(this);},_ReInit:function(){A.Core.O._ReInit.call(this);this.AH._ReInit(
);this.CC._ReInit();},_Mark:function(D){var B;A.Core.O._Mark.call(this,D);if((B=
this.Gs)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.AH)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.CC)._cycle!=D)B._Mark(B._cycle=D);},_className:"Demonstrator::SelectionArea"
};C.AKl={AfA:0,Nq:0,Background:null,T:null,Aiw:null,AcW:null,W1:null,AcX:null,Mc:
null,Lr:false,Kq:false,Ag:function(Ae){var B;C.A_.Ag.call(this,Ae);var FJ=((Ae&0x10
)===0x10);var Fe=((Ae&0x20)===0x20);var GZ=((Ae&0x40)===0x40);if(!FJ){this.Background.
L(0xFFAAAAAA);this.T.L(0xFF888888);this.Mc.Ap(false);this.Mc.X(false);}else if(GZ
){this.Background.L(A.iF.AY);this.T.L(A.iF.Bd);this.Mc.Ap(true);this.Mc.X(true);
}else if(Fe){this.Background.L(0xFFE6DED8);this.T.L(0xFF000000);this.Mc.Ap(true);
this.Mc.X(true);}else{this.Background.L(0xFFFFFFFF);this.T.L(0xFF000000);this.Mc.
Ap(false);this.Mc.X(false);}if(!this.Kq&&Fe)A._GetAutoObject(A.abq.LB).M8(this.AfA
);this.Mc.BjI(this.Nq>0);this.Mc.Bj7(this.AfA>0);this.Lr=FJ;this.Kq=Fe;},Cc:function(
Ab){if(!this.AW){this.W1.At(A.zW(A.abi.Adx));this.AcW.L(A.iF.AeH);return;}this.Hq=
Ab;if(!!this.AW){this.Nq=this.AW.LD(Ab,26);this.AfA=this.AW.LD(Ab,22);var O6=this.
AW.CE(Ab,1);var AkX=this.AW.HW(Ab,11);var AkO=this.AW.IX(Ab,17);var Ly=this.AW.IX(
Ab,13);var H5=this.AW.Al1(Ab,14);this.T.R(O6.toFixed());var Wv=A._GetAutoObject(
A.Device.Helper).AKa(Ly,AkX,AkO);switch(H5){case 0:this.W1.At(A.zW(A.abi.Adx));break;
case 1:this.W1.At(A.zW(A.abi.Auc));break;case 2:this.W1.At(A.zW(A.abi.Auf));break;
default:A.aa8("%s%e",GT,H5);}this.AcX.At(this.W1.Aj);this.AcW.L(A._GetAutoObject(
A.abk.Assessment).PY(Wv));this.Am();}},_Init:function(aArg){C.A_._Init.call(this
,aArg);A.abh.AH._Init.call(this.Background={I:this},0);A.kh.CR._Init.call(this.T={
I:this},0);A.abh.Ak._Init.call(this.Aiw={I:this},0);A.abh.Ak._Init.call(this.AcW={
I:this},0);A.abh.Ak._Init.call(this.W1={I:this},0);A.abh.Ak._Init.call(this.AcX={
I:this},0);C.Mc._Init.call(this.Mc={I:this},0);this.__proto__=C.AKl;this.Background.
AV(0x3F);this.Background.G(B$);this.T.AV(0x3F);this.T.G(Jt);this.T.R(A.z2(A.abg.
HA));this.T.A2(0x11);this.T.L(0xFF000000);this.Aiw.G(IL);this.Aiw.L(A.iF.Text);this.
AcW.G(IL);this.AcW.L(A.iF.EY);this.W1.G(IL);this.AcX.G(IL);this.AcX.L(A.iF.Text);
this.AcX.Ct(1);this.Mc.AV(0x3);this.Mc.G(OK);this.J(this.Background,0);this.J(this.
T,0);this.J(this.Aiw,0);this.J(this.AcW,0);this.J(this.W1,0);this.J(this.AcX,0);
this.J(this.Mc,0);this.T.Aa(A.zW(A.eV.Aw));this.T.BD(A.zW(A.eV.AB));this.T.Db(A.
zW(A.eV.Cx));this.Aiw.At(A.zW(C.AFj));this.AcW.At(A.zW(C.ATf));this.W1.At(A.zW(A.
abi.Adx));this.AcX.At(A.zW(A.abi.Adx));},_Done:function(){this.__proto__=C.A_;this.
Background._Done();this.T._Done();this.Aiw._Done();this.AcW._Done();this.W1._Done(
);this.AcX._Done();this.Mc._Done();C.A_._Done.call(this);},_ReInit:function(){C.
A_._ReInit.call(this);this.Background._ReInit();this.T._ReInit();this.Aiw._ReInit(
);this.AcW._ReInit();this.W1._ReInit();this.AcX._ReInit();this.Mc._ReInit();},_Mark:
function(D){var B;C.A_._Mark.call(this,D);if((B=this.Background)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.T)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Aiw)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.AcW)._cycle!=D)B._Mark(B._cycle=D);if((B=this.W1
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AcX)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Mc)._cycle!=D)B._Mark(B._cycle=D);},_className:"Demonstrator::AnimalMenuItem"
};C.Mc={TN:null,VQ:null,Aj7:null,M$:null,NX:null,YU:null,Abz:null,Auy:false,Av$:
false,C3:function(){this.Am();},Ag:function(Ae){var B;A.Core.O.Ag.call(this,Ae);
var GZ=((Ae&0x40)===0x40);if(GZ){this.M$.L(A.iF.Bd);this.NX.L(A.iF.Bd);}else{this.
M$.L(A.iF.Text);this.NX.L(A.iF.Text);}if(this.Av$){this.M$.R(A.z2(A.abg.Bk0));if(
this.Auy){this.TN.At(A.zW(C.AE4));this.VQ.At(A.zW(C.AE4));}else{this.TN.At(A.zW(
C.Aq6));this.VQ.At(A.zW(C.Aq6));}}else if(this.Auy){this.TN.At(A.zW(C.AAL));this.
VQ.At(A.zW(C.AAL));this.M$.R(PJ);}var A1c=this.Av$||this.Auy;this.TN.X(A1c);this.
VQ.X(A1c);this.M$.X(A1c);this.YU.Ap(this.Av$);},Bj7:function(E){if(this.Av$===E)
return;this.Av$=E;this.Am();},BjI:function(E){if(this.Auy===E)return;this.Auy=E;
this.Am();},_Init:function(aArg){A.Core.O._Init.call(this,aArg);A.abh.Ak._Init.call(
this.TN={I:this},0);A.abh.Ak._Init.call(this.VQ={I:this},0);A.abh.Ak._Init.call(
this.Aj7={I:this},0);A.kh.CR._Init.call(this.M$={I:this},0);A.kh.CR._Init.call(this.
NX={I:this},0);A.Core.Bh._Init.call(this.YU={I:this},0);A.Core.Bh._Init.call(this.
Abz={I:this},0);this.__proto__=C.Mc;var B;this.G(N1);this.TN.AV(0x6);this.TN.G(CJ
);this.TN.L(A.iF.C1);this.TN.Ct(1);this.VQ.AV(0x6);this.VQ.G(CJ);this.VQ.L(A.iF.
Text);this.Aj7.AV(0xE);this.Aj7.G(Fn);this.M$.AV(0x7);this.M$.G(Nd);this.M$.A2(0x11
);this.M$.L(0xFF000000);this.NX.AV(0x3);this.NX.G(OL);this.NX.R(A.z2(A.abg.Temperature
));this.NX.A2(0x11);this.NX.L(0xFF000000);this.YU.AV(0x3);this.YU.KB(KH);this.YU.
KA(OM);this.YU.DN(Ne);this.YU.D5(ON);this.Abz.AV(0x3);this.Abz.KB(Ss);this.Abz.KA(
T$);this.Abz.DN(Ze);this.Abz.D5(Wb);this.J(this.TN,0);this.J(this.VQ,0);this.J(this.
Aj7,0);this.J(this.M$,0);this.J(this.NX,0);this.J(this.YU,0);this.J(this.Abz,0);
this.TN.At(A.zW(C.Aq6));this.VQ.At(A.zW(C.Aq6));this.Aj7.At(A.zW(C.ASw));this.M$.
Aa(A.zW(A.eV.Aw));this.M$.BD(A.zW(A.eV.AB));this.M$.Db(A.zW(A.eV.Cx));this.NX.Aa(
A.zW(A.eV.Aw));this.NX.BD(A.zW(A.eV.AB));this.NX.Db(A.zW(A.eV.Cx));this.YU.K$=[B=
A._GetAutoObject(A.abq.LB),B.Bbt];this.Abz.K$=[B=A._GetAutoObject(A.abq.LB),B.Bbe
];},_Done:function(){this.__proto__=A.Core.O;this.TN._Done();this.VQ._Done();this.
Aj7._Done();this.M$._Done();this.NX._Done();this.YU._Done();this.Abz._Done();A.Core.
O._Done.call(this);},_ReInit:function(){A.Core.O._ReInit.call(this);this.TN._ReInit(
);this.VQ._ReInit();this.Aj7._ReInit();this.M$._ReInit();this.NX._ReInit();this.
YU._ReInit();this.Abz._ReInit();this.NX.R(A.z2(A.abg.Temperature));this.M$.Aa(A.
zW(A.eV.Aw));this.M$.BD(A.zW(A.eV.AB));this.M$.Db(A.zW(A.eV.Cx));this.NX.Aa(A.zW(
A.eV.Aw));this.NX.BD(A.zW(A.eV.AB));this.NX.Db(A.zW(A.eV.Cx));this.C3();},_Mark:
function(D){var B;A.Core.O._Mark.call(this,D);if((B=this.TN)._cycle!=D)B._Mark(B.
_cycle=D);if((B=this.VQ)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Aj7)._cycle!=D
)B._Mark(B._cycle=D);if((B=this.M$)._cycle!=D)B._Mark(B._cycle=D);if((B=this.NX).
_cycle!=D)B._Mark(B._cycle=D);if((B=this.YU)._cycle!=D)B._Mark(B._cycle=D);if((B=
this.Abz)._cycle!=D)B._Mark(B._cycle=D);},_className:"Demonstrator::AnimalItemAction"
};C.XB={C3:function(){this.Am();},Ag:function(Ae){C.ApT.Ag.call(this,Ae);if(!this.
Text.String.length)this.Text.R(A.z2(A.abg.Filter));},A5i:function(H){var DZ=(A.Core.
BR.isPrototypeOf(H)?H:null);if(!!DZ)A._GetAutoObject(A.abq.AiQ).E6(DZ.D4);},A5g:
function(H){A._GetAutoObject(A.abq.AiQ).Delete();},_Init:function(aArg){C.ApT._Init.
call(this,aArg);this.__proto__=C.XB;this.Ak.At(A.zW(C.Filter));},_ReInit:function(
){C.ApT._ReInit.call(this);this.C3();},_className:"Demonstrator::FilterView"};C.
Aan={Di:null,Xu:null,RG:null,Xv:null,Ix:null,XS:null,AlO:null,Aq:null,OV:null,MU:
null,Aam:null,FO:0,Aul:0,AD9:false,Ag:function(Ae){A.Core.O.Ag.call(this,Ae);this.
RG.R(this.Aq.Format(IM));if(this.AD9){this.RG.X(false);this.XS.X(false);this.Ix.
X(false);this.Xv.X(false);this.OV.Ap(true);this.OV.X(true);this.MU.Ct(2);this.MU.
AQY(2);this.MU.G(A.aaP(this.MU.M,this.OV.M[2]));}else{this.RG.X(true);this.XS.X(
true);this.Ix.X(true);this.Xv.X(true);this.OV.Ap(false);this.OV.X(false);this.MU.
Ct(3);this.MU.AQY(3);this.MU.G(A.aaP(this.MU.M,this.RG.M[2]));}},BwD:function(H){
this.BjO(!this.AD9);},Acz:function(H){var F;if(!!this.Di)this.TD((F=this.Di,F[1].
call(F[0])));},Abk:function(E){if(A.z_(this.Di,E))return;if(!!this.Di)A.zn([this
,this.Acz],this.Di,0);this.Di=E;if(!!E)A.za([this,this.Acz],E,0);if(!!E)A.ow([this
,this.Acz],this);},TD:function(E){if(this.FO===E)return;this.FO=E;this.Aq.Initialize(
this.FO);this.BxI(this);this.Am();},AhO:function(H){var B;var F;var BP=this.FO;var
Aih=this.Aam.C$(this.Aul);this.AHo(Aih);if(this.Aq.Year>2100)this.Aq.Initialize2(
2100,12,31,0,0,0);this.TD(((B=(this.Aq.JL()|0))<0)?B+0x100000000:B);if(this.FO!==
BP){if(!!this.Di)(F=this.Di,F[2].call(F[0],this.FO));A.aat(this.Di,0);}},AhA:function(
H){var B;var F;var BP=this.FO;var Aih=this.Aam.C$(this.Aul);this.AI9(Aih);if(this.
Aq.Year<2000)this.Aq.Initialize2(2000,1,1,0,0,0);this.TD(((B=(this.Aq.JL()|0))<0
)?B+0x100000000:B);if(this.FO!==BP){if(!!this.Di)(F=this.Di,F[2].call(F[0],this.
FO));A.aat(this.Di,0);}},Bjn:function(E){if(this.Aul===E)return;this.Aul=E;},BjO:
function(E){if(this.AD9===E)return;this.AD9=E;this.Am();},Bxb:function(H){var B;
var F;var BP=this.FO;this.Aq.Lb(this.OV.ACC());this.Aq.TG(this.OV.ACG());this.Aq.
Year=this.OV.Aqe();this.TD(((B=(this.Aq.JL()|0))<0)?B+0x100000000:B);if(this.FO!==
BP){if(!!this.Di)(F=this.Di,F[2].call(F[0],this.FO));A.aat(this.Di,0);}},BxI:function(
H){this.OV.Lb(this.Aq.Gu);this.OV.TG(this.Aq.G6);this.OV.AjO(this.Aq.Year);},AHo:
function(Axj){var B;switch(Axj){case 0:if(this.Aq.Gu<this.Aq.Yz())this.Aq.Lb(this.
Aq.Gu+1);else{this.Aq.Lb(1);this.AHo(2);}break;case 1:if((this.Aq.Gu+7)<=this.Aq.
Yz())this.Aq.Lb(this.Aq.Gu+7);else{this.Aq.Lb((7-this.Aq.Yz())+this.Aq.Gu);this.
AHo(2);}break;case 2:if(this.Aq.G6<12)this.Aq.TG(this.Aq.G6+1);else{this.Aq.TG(1
);this.AHo(3);}break;case 3:this.Aq.Year++;break;default:throw new Error(Ua+Axj.
toFixed());}},AI9:function(Axj){var B;switch(Axj){case 0:if(this.Aq.Gu>1)this.Aq.
Lb(this.Aq.Gu-1);else{this.AI9(2);this.Aq.Lb(this.Aq.Yz());}break;case 1:if((this.
Aq.Gu-7)>0)this.Aq.Lb(this.Aq.Gu-7);else{this.AI9(2);this.Aq.Lb(this.Aq.Yz()-(7-
this.Aq.Gu));}break;case 2:if(this.Aq.G6>1)this.Aq.TG(this.Aq.G6-1);else{this.Aq.
TG(12);this.AI9(3);}break;case 3:this.Aq.Year--;break;default:throw new Error(Ua+
Axj.toFixed());}},Bhr:function(){return this.Aul;},_Init:function(aArg){A.Core.O.
_Init.call(this,aArg);A.abh.Text._Init.call(this.Xu={I:this},0);A.abh.Text._Init.
call(this.RG={I:this},0);C.Aua._Init.call(this.Xv={I:this},0);A.abx.Ix._Init.call(
this.Ix={I:this},0);C.Aua._Init.call(this.XS={I:this},0);A.abh.Ak._Init.call(this.
AlO={I:this},0);A.Core.Bu._Init.call(this.Aq={I:this},0);C.ALv._Init.call(this.OV={
I:this},0);C.Aua._Init.call(this.MU={I:this},0);C.Aam._Init.call(this.Aam={I:this
},0);this.__proto__=C.Aan;this.G(Zf);this.Xu.G(Wc);this.Xu.A2(0x11);this.Xu.R(A.
z2(A.abg.Date));this.Xu.L(0xFF000000);this.RG.G(Zg);this.RG.A2(0x11);this.RG.R(Ub
);this.RG.L(0xFF000000);this.Xv.G(Zh);this.Xv.A6Q(200);this.Ix.G(Zi);this.Ix.Avh(
120);this.Ix.GL=30;this.Ix.A6z(A.iF.C1);this.Ix.Bio(A.iF.C1);this.Ix.Bis(A.iF.C1
);this.Ix.A6A(A.iF.Text);this.Ix.Bit(A.iF.Text);this.Ix.Bip(A.iF.AY);this.Ix.Biu(
A.iF.Bd);this.Ix.Bir(A.iF.AY);this.Ix.Biq(A.iF.Text);this.XS.G(Uc);this.XS.A6Q(200
);this.AlO.G(Wd);this.OV.G(QV);this.MU.G(Zj);this.MU.Ct(3);this.MU.AQY(3);this.MU.
L(A.iF.Text);this.J(this.Xu,0);this.J(this.RG,0);this.J(this.Xv,0);this.J(this.Ix
,0);this.J(this.XS,0);this.J(this.AlO,0);this.J(this.OV,0);this.J(this.MU,0);this.
Xu.Aa(A.zW(A.eV.AB));this.RG.Aa(A.zW(A.eV.Gw));this.Xv.AQ=[this,this.AhA];this.Xv.
DC(A.zW(C.AKU));this.Xv.AQZ(A.zW(C.AKV));this.Ix.Au([this,this.Bhr,this.Bjn]);this.
Ix.Biz(this.Aam);this.Ix.AQI(A.zW(A.eV.AB));this.Ix.A6O(A.zW(A.eV.AB));this.XS.AQ=[
this,this.AhO];this.XS.DC(A.zW(C.AKW));this.XS.AQZ(A.zW(C.AKX));this.AlO.At(A.zW(
C.ANU));this.OV.Dn=[this,this.Bxb];this.MU.AQ=[this,this.BwD];this.MU.DC(A.zW(A.
abi.AlF));this.MU.AQZ(A.zW(A.abi.AlF));},_Done:function(){this.__proto__=A.Core.
O;this.Xu._Done();this.RG._Done();this.Xv._Done();this.Ix._Done();this.XS._Done(
);this.AlO._Done();this.Aq._Done();this.OV._Done();this.MU._Done();this.Aam._Done(
);A.Core.O._Done.call(this);},_ReInit:function(){A.Core.O._ReInit.call(this);this.
Xu._ReInit();this.RG._ReInit();this.Xv._ReInit();this.Ix._ReInit();this.XS._ReInit(
);this.AlO._ReInit();this.Aq._ReInit();this.OV._ReInit();this.MU._ReInit();this.
Aam._ReInit();this.Xu.R(A.z2(A.abg.Date));this.Xu.Aa(A.zW(A.eV.AB));this.RG.Aa(A.
zW(A.eV.Gw));this.Ix.AQI(A.zW(A.eV.AB));this.Ix.A6O(A.zW(A.eV.AB));},_Mark:function(
D){var B;A.Core.O._Mark.call(this,D);if((B=this.Di)&&((B=B[0])._cycle!=D))B._Mark(
B._cycle=D);if((B=this.Xu)._cycle!=D)B._Mark(B._cycle=D);if((B=this.RG)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.Xv)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ix
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.XS)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.AlO)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Aq)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.OV)._cycle!=D)B._Mark(B._cycle=D);if((B=this.MU)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Aam)._cycle!=D)B._Mark(B._cycle=D);},_className:"Demonstrator::DateSelector"
};C.Aua={C5:null,AvM:null,ALI:null,AQ:null,Bj:null,Dh:null,CV:null,Hi:null,XN:null
,ANw:0,Tc:0,ARz:0,AP:0xFFFFFFFF,AZC:false,Lr:false,Kq:false,P1:false,Ag:function(
Ae){var B;A.abo.AgO.Ag.call(this,Ae);var FJ=((Ae&0x10)===0x10);var Fe=((Ae&0x20)===
0x20);var Fd=this.CV.Down&&this.CV.XV;if(!FJ)this.Hi.At(this.ALI);else if(Fd){this.
Hi.At(this.AvM);this.Hi.Ct(this.ARz);}else{this.Hi.At(this.C5);this.Hi.Ct(this.Tc
);}this.Hi.L(this.AP);this.Lr=FJ;this.Kq=Fe;this.P1=Fd;},P0:function(H){this.Am(
);A.ow(this.AQ,this);},AhY:function(H){if(this.CV.Down)return;if(this.Dh.Abs)return;
this.Am();if(this.Bj.Bw){A.ow(this.AQ,this);this.Bj.Ap(false);}this.Bj.Ap(true);
},Bbc:function(H){this.Am();},AyN:function(H){if(!this.CV.XV)return;if(this.CV.NB
)return;if((this.XN.US<=0)||(this.CV.Jk<this.XN.US)){if(this.CV.Jk>=this.Bj.US)A.
ow(this.AQ,this);else this.Bj.Ap(true);}this.XN.Ap(false);},AyM:function(H){this.
XN.Ap(true);if(this.Bj.Bw){A.ow(this.AQ,this);this.Bj.Ap(false);}},DC:function(E
){if(this.C5===E)return;this.C5=E;this.Am();},AQZ:function(E){if(this.AvM===E)return;
this.AvM=E;this.Am();},A0x:function(H){if(!this.CV.XV)return;if(this.CV.NB)return;
if((this.ANw>=0)&&this.AZC){this.AZC=false;this.XN.Ap(true);A.ow(this.AQ,this);}
},A6Q:function(E){if(this.ANw===E)return;this.ANw=E;this.XN.VL(E);},Bv9:function(
H){this.AZC=true;},Ct:function(E){if(this.Tc===E)return;this.Tc=E;this.Am();},AQY:
function(E){if(this.ARz===E)return;this.ARz=E;this.Am();},L:function(E){if(this.
AP===E)return;this.AP=E;this.Am();},_Init:function(aArg){A.abo.AgO._Init.call(this
,aArg);A.Core.Timer._Init.call(this.Bj={I:this},0);A.Core.BR._Init.call(this.Dh={
I:this},0);A.Core.Bh._Init.call(this.CV={I:this},0);A.abh.Ak._Init.call(this.Hi={
I:this},0);A.Core.Timer._Init.call(this.XN={I:this},0);this.__proto__=C.Aua;this.
G(OO);this.Bj.QB(0);this.Bj.VL(50);this.Dh.Filter=149;this.CV.AV(0x3F);this.CV.KB(
PK);this.CV.KA(Ud);this.CV.DN(Zk);this.CV.D5(KH);this.CV.Aeh=0xF;this.CV.ADo(100
);this.Hi.AV(0x3F);this.Hi.G(OO);this.Hi.A2(0x12);this.XN.QB(0);this.J(this.CV,0
);this.J(this.Hi,0);this.Bj.M_=[this,this.P0];this.Dh.BS=[this,this.AhY];this.CV.
ACL=[this,this.Bbc];this.CV.AuA=[this,this.Bbc];this.CV.DV=[this,this.A0x];this.
CV.K$=[this,this.AyN];this.CV.BS=[this,this.AyM];this.Hi.At(A.zW(A.abj.K2));this.
C5=A.zW(A.abj.K2);this.AvM=A.zW(A.abj.K2);this.ALI=A.zW(A.abj.K2);this.XN.M_=[this
,this.Bv9];},_Done:function(){this.__proto__=A.abo.AgO;this.Bj._Done();this.Dh._Done(
);this.CV._Done();this.Hi._Done();this.XN._Done();A.abo.AgO._Done.call(this);},_ReInit:
function(){A.abo.AgO._ReInit.call(this);this.Bj._ReInit();this.Dh._ReInit();this.
CV._ReInit();this.Hi._ReInit();this.XN._ReInit();},_Mark:function(D){var B;A.abo.
AgO._Mark.call(this,D);if((B=this.C5)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.
AvM)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.ALI)&&(B._cycle!=D))B._Mark(B.
_cycle=D);if((B=this.AQ)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.Bj
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Dh)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.CV)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Hi)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.XN)._cycle!=D)B._Mark(B._cycle=D);},_className:"Demonstrator::IconButton"
};C.AKz={Pi:null,T:null,Adq:null,_Init:function(aArg){C.Fk._Init.call(this,aArg);
A.abh.AH._Init.call(this.Pi={I:this},0);A.abh.Text._Init.call(this.T={I:this},0);
C.Adq._Init.call(this.Adq={I:this},0);this.__proto__=C.AKz;this.G(We);this.Pi.AV(
0x1D);this.Pi.G(B$);this.Pi.L(0xFFE6E6E6);this.T.AV(0x1D);this.T.G(Zl);this.T.A2(
0x11);this.T.R(A.z2(A.abg.A2f));this.T.L(0xFF000000);this.Adq.G(Zm);this.J(this.
Pi,0);this.J(this.T,0);this.J(this.Adq,0);this.T.Aa(A.zW(A.eV.Aw));},_Done:function(
){this.__proto__=C.Fk;this.Pi._Done();this.T._Done();this.Adq._Done();C.Fk._Done.
call(this);},_ReInit:function(){C.Fk._ReInit.call(this);this.Pi._ReInit();this.T.
_ReInit();this.Adq._ReInit();this.T.R(A.z2(A.abg.A2f));this.T.Aa(A.zW(A.eV.Aw));
},_Mark:function(D){var B;C.Fk._Mark.call(this,D);if((B=this.Pi)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.T)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Adq)._cycle!=
D)B._Mark(B._cycle=D);},_className:"Demonstrator::AnimalsHeader"};C.As$={Pi:null
,T:null,AdS:null,AdO:null,Bh:null,DH:Wf,Ajs:false,Ag:function(Ae){C.Fk.Ag.call(this
,Ae);if(this.Ajs){this.AdO.X(true);this.AdS.X(false);}else{this.AdO.X(false);this.
AdS.X(true);}},BwZ:function(H){if(this.Ajs)A.ow(this.Agy,this);else A.ow(this.Agz
,this);this.ADr(!this.Ajs);},S:function(E){if(this.DH===E)return;this.DH=E;this.
T.R(E);},ADr:function(E){if(this.Ajs===E)return;this.Ajs=E;this.Am();},_Init:function(
aArg){C.Fk._Init.call(this,aArg);A.abh.AH._Init.call(this.Pi={I:this},0);A.abh.Text.
_Init.call(this.T={I:this},0);A.abh.Ak._Init.call(this.AdS={I:this},0);A.abh.Ak.
_Init.call(this.AdO={I:this},0);A.Core.Bh._Init.call(this.Bh={I:this},0);this.__proto__=
C.As$;this.G(B$);this.Pi.AV(0x1D);this.Pi.G(B$);this.Pi.L(0xFFE6E6E6);this.T.AV(
0x1D);this.T.G(Wg);this.T.A2(0x11);this.T.R(Wf);this.T.L(0xFF000000);this.AdS.G(
St);this.AdS.X(false);this.AdO.AV(0x3A);this.AdO.G(St);this.Bh.KB(KH);this.Bh.KA(
Zn);this.Bh.DN(Zo);this.Bh.D5(ON);this.J(this.Pi,0);this.J(this.T,0);this.J(this.
AdS,0);this.J(this.AdO,0);this.J(this.Bh,0);this.T.Aa(A.zW(A.eV.Aw));this.AdS.At(
A.zW(C.AKC));this.AdO.At(A.zW(C.AiA));this.Bh.K$=[this,this.BwZ];},_Done:function(
){this.__proto__=C.Fk;this.Pi._Done();this.T._Done();this.AdS._Done();this.AdO._Done(
);this.Bh._Done();C.Fk._Done.call(this);},_ReInit:function(){C.Fk._ReInit.call(this
);this.Pi._ReInit();this.T._ReInit();this.AdS._ReInit();this.AdO._ReInit();this.
Bh._ReInit();this.T.Aa(A.zW(A.eV.Aw));},_Mark:function(D){var B;C.Fk._Mark.call(
this,D);if((B=this.Pi)._cycle!=D)B._Mark(B._cycle=D);if((B=this.T)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.AdS)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AdO)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.Bh)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Demonstrator::AccordionHeader"};C.A_={AW:null,AQ:null,CV:null,Hq:-1,YC:function(
E){if(this.AW===E)return;this.AW=E;},Cc:function(Ab){A.aa8("%s",AbO);},YF:function(
E){if(A.z$(this.AQ,E))return;this.AQ=E;},AyN:function(H){if(!this.CV.XV)return;if(
this.CV.NB)return;A.ow(this.AQ,this);},_Init:function(aArg){A.Core.O._Init.call(
this,aArg);A.Core.Bh._Init.call(this.CV={I:this},0);this.__proto__=C.A_;this.G(B$
);this.CV.AV(0x3F);this.CV.KB(ON);this.CV.KA(Zo);this.CV.DN(Zn);this.CV.D5(KH);this.
CV.Aeh=0xF;this.CV.ADo(100);this.J(this.CV,0);this.CV.K$=[this,this.AyN];},_Done:
function(){this.__proto__=A.Core.O;this.CV._Done();A.Core.O._Done.call(this);},_ReInit:
function(){A.Core.O._ReInit.call(this);this.CV._ReInit();},_Mark:function(D){var
B;A.Core.O._Mark.call(this,D);if((B=this.AW)&&(B._cycle!=D))B._Mark(B._cycle=D);
if((B=this.AQ)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.CV)._cycle!=
D)B._Mark(B._cycle=D);},_className:"Demonstrator::ListItem"};C.Fk={APX:null,Agz:
null,Agy:null,BjL:function(E){if(A.z$(this.APX,E))return;this.APX=E;},A6Y:function(
E){if(A.z$(this.Agz,E))return;this.Agz=E;},A6X:function(E){if(A.z$(this.Agy,E))return;
this.Agy=E;},_Init:function(aArg){A.Core.O._Init.call(this,aArg);this.__proto__=
C.Fk;this.G(B$);},_Mark:function(D){var B;A.Core.O._Mark.call(this,D);if((B=this.
APX)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.Agz)&&((B=B[0])._cycle
!=D))B._Mark(B._cycle=D);if((B=this.Agy)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=
D);},_className:"Demonstrator::ListHeader"};C.ALv={Dn:null,Aab:null,V5:null,V4:null
,V3:null,M4:null,M3:null,Ky:null,Lr:false,Kq:false,BxP:false,Ag:function(Ae){var
B;A.abo.AgM.Ag.call(this,Ae);var FJ=((Ae&0x10)===0x10);var Fe=((Ae&0x20)===0x20);
var Bah=(this.V3.YZ||this.V4.YZ)||this.V5.YZ;if(Bah)this.Aab.L(A.iF.Text);else this.
Aab.L(A.iF.Ba);this.Lr=FJ;this.Kq=Fe;this.BxP=Bah;},AyI:function(H){this.Am();if((
!this.V3.YZ&&!this.V4.YZ)&&!this.V5.YZ){var Us=this.AIh(this.ACG(),this.Aqe());var
Acg=this.ACC();this.Ky.Jp(Us);if(Acg>Us)this.Lb(Us);A.ow(this.Dn,this);}},A0N:function(
H){this.Am();},Bh7:function(H){var B;var FW=this.M4.GK;var CA=(A.abh.Text.isPrototypeOf(
B=this.M4.Cd)?B:null);if(!CA)return;CA.R(A.aaq(FW+1900,4,10));CA.Aa(A.zW(A.eV.Aw
));CA.L(A.iF.Text);CA.A2(0x12);CA.G(A.aaN(CA.M,[(B=this.M4.M)[2]-B[0],this.M4.GL
]));},Bh6:function(H){var B;var FW=this.M3.GK;var CA=(A.abh.Text.isPrototypeOf(B=
this.M3.Cd)?B:null);if(!CA)return;CA.R(A.aaq(FW+1,2,10)+Su);CA.Aa(A.zW(A.eV.Aw));
CA.L(A.iF.Text);CA.A2(0x12);CA.G(A.aaN(CA.M,[(B=this.M3.M)[2]-B[0],this.M3.GL]));
},Bh4:function(H){var B;var FW=this.Ky.GK;var CA=(A.abh.Text.isPrototypeOf(B=this.
Ky.Cd)?B:null);if(!CA)return;CA.R(A.aaq(FW+1,2,10)+Su);CA.Aa(A.zW(A.eV.Aw));CA.L(
A.iF.Text);CA.A2(0x12);CA.G(A.aaN(CA.M,[(B=this.Ky.M)[2]-B[0],this.Ky.GL]));},Aqe:
function(){return 1900+((((-this.M4.Bp/this.M4.GL)|0)+2)%200);},AjO:function(E){
if(E<1900)E=1900;if(E>2100)E=2100;this.M4.Gk(((E-1900)-2)*-this.M4.GL);var Us=this.
AIh(this.ACG(),E);this.Ky.Jp(Us);if(this.ACC()>Us)this.Lb(Us);},ACG:function(){return 1+((((-
this.M3.Bp/this.M3.GL)|0)+2)%12);},TG:function(E){if(E<1)E=1;if(E>12)E=12;this.M3.
Gk(((E-1)-2)*-this.M3.GL);var Us=this.AIh(E,this.Aqe());this.Ky.Jp(Us);if(this.ACC(
)>Us)this.Lb(Us);},ACC:function(){return 1+((((-this.Ky.Bp/this.Ky.GL)|0)+2)%this.
Ky.AR);},Lb:function(E){var Us=this.AIh(this.ACG(),this.Aqe());if(E<1)E=1;if(E>Us
)E=Us;this.Ky.Gk(((E-2)-1)*-this.Ky.GL);},AIh:function(Ae0,Ab9){if(Ae0===2){if(!(
Ab9%4)&&(!!(Ab9%100)||!(Ab9%400)))return 29;else return 28;}else if((((Ae0===4)||(
Ae0===6))||(Ae0===9))||(Ae0===11))return 30;else return 31;},_Init:function(aArg
){A.abo.AgM._Init.call(this,aArg);A.abh.CC._Init.call(this.Aab={I:this},0);A.Core.
H2._Init.call(this.V5={I:this},0);A.Core.H2._Init.call(this.V4={I:this},0);A.Core.
H2._Init.call(this.V3={I:this},0);A.Core.CI._Init.call(this.M4={I:this},0);A.Core.
CI._Init.call(this.M3={I:this},0);A.Core.CI._Init.call(this.Ky={I:this},0);this.
__proto__=C.ALv;this.G(AbP);this.Aab.G(AeN);this.Aab.NR(3);this.Aab.L(0xFFE1E1E1
);this.Aab.X(true);this.V5.G(Zp);this.V5.AQ6(Wh);this.V5.AQK(0.2);this.V4.G(Wi);
this.V4.AQ6(Wh);this.V4.AQK(0.2);this.V3.G(AeO);this.V3.AQ6(Wh);this.V3.AQK(0.2);
this.M4.G(Zp);this.M4.AQG(true);this.M4.Gk(60);this.M4.Ad5(30);this.M4.Jp(200);this.
M3.G(Wi);this.M3.AQG(true);this.M3.Gk(60);this.M3.Ad5(30);this.M3.Jp(12);this.Ky.
G(AeO);this.Ky.AQG(true);this.Ky.Gk(60);this.Ky.Ad5(30);this.Ky.Jp(31);this.J(this.
Aab,0);this.J(this.V5,0);this.J(this.V4,0);this.J(this.V3,0);this.J(this.M4,0);this.
J(this.M3,0);this.J(this.Ky,0);this.V5.Yy=[this,this.AyI];this.V5.R$=[this,this.
A0N];this.V4.Yy=[this,this.AyI];this.V4.R$=[this,this.A0N];this.V3.Yy=[this,this.
AyI];this.V3.R$=[this,this.A0N];this.M4.G8=[this,this.Bh7];this.M4.Avs(this.V5);
this.M3.G8=[this,this.Bh6];this.M3.Avs(this.V4);this.Ky.G8=[this,this.Bh4];this.
Ky.Avs(this.V3);},_Done:function(){this.__proto__=A.abo.AgM;this.Aab._Done();this.
V5._Done();this.V4._Done();this.V3._Done();this.M4._Done();this.M3._Done();this.
Ky._Done();A.abo.AgM._Done.call(this);},_ReInit:function(){A.abo.AgM._ReInit.call(
this);this.Aab._ReInit();this.V5._ReInit();this.V4._ReInit();this.V3._ReInit();this.
M4._ReInit();this.M3._ReInit();this.Ky._ReInit();},_Mark:function(D){var B;A.abo.
AgM._Mark.call(this,D);if((B=this.Dn)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);
if((B=this.Aab)._cycle!=D)B._Mark(B._cycle=D);if((B=this.V5)._cycle!=D)B._Mark(B.
_cycle=D);if((B=this.V4)._cycle!=D)B._Mark(B._cycle=D);if((B=this.V3)._cycle!=D)
B._Mark(B._cycle=D);if((B=this.M4)._cycle!=D)B._Mark(B._cycle=D);if((B=this.M3).
_cycle!=D)B._Mark(B._cycle=D);if((B=this.Ky)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Demonstrator::DatePicker"};C.AFj={_class:function(){return A.abj.Aj;},0:{FileName:
"./res_index/DemonstratorWhiteTile.png",Format:A.jt,NoOfFrames:1,FrameSize:[40,40
],FrameDelay:0,_this:null}};C.ATf={_class:function(){return A.abj.Aj;},0:{FileName:
"./res_index/DemonstratorWhiteTileSmall.png",Format:A.jt,NoOfFrames:1,FrameSize:[
40,40],FrameDelay:0,_this:null}};C.AgW={_Init:function(aArg){A.Core.O._Init.call(
this,aArg);this.__proto__=C.AgW;this.G(EV);},_className:"Demonstrator::SelectionAreaContent"
};C.AKs={Y:null,UK:null,S2:null,Bxo:function(H){var B;this.S2.G(A.aaL(this.S2.M,((
B=this.M)[3]-B[1])-((B=this.UK.M)[3]-B[1])));},_Init:function(aArg){C.AgW._Init.
call(this,aArg);A.Core.Y._Init.call(this.Y={I:this},0);C.AJY._Init.call(this.UK={
I:this},0);C.ASZ._Init.call(this.S2={I:this},0);this.__proto__=C.AKs;this.Y.AV(0x3F
);this.Y.G(EV);this.Y.Kc(1);this.UK.G(AeP);this.UK.Ai(true);this.UK.ADr(true);this.
S2.AV(0x3);this.S2.G(JT);this.S2.Ai(true);this.S2.NQ(C.AKl);this.S2.BjG(C.AKz);this.
J(this.Y,0);this.J(this.UK,0);this.J(this.S2,0);this.A$(this.S2);this.Y.Ej=[this
,this.Bxo];this.S2.YC(A._GetAutoObject(A.abq.Atj));},_Done:function(){this.__proto__=
C.AgW;this.Y._Done();this.UK._Done();this.S2._Done();C.AgW._Done.call(this);},_ReInit:
function(){C.AgW._ReInit.call(this);this.Y._ReInit();this.UK._ReInit();this.S2._ReInit(
);},_Mark:function(D){var B;C.AgW._Mark.call(this,D);if((B=this.Y)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.UK)._cycle!=D)B._Mark(B._cycle=D);if((B=this.S2)._cycle!=
D)B._Mark(B._cycle=D);},_className:"Demonstrator::AnimalSelectionActions"};C.UK={
_Init:function(aArg){C.As$._Init.call(this,aArg);this.__proto__=C.UK;this.S(A.z2(
A.abg.A3d));},_ReInit:function(){C.As$._ReInit.call(this);this.S(A.z2(A.abg.A3d)
);},_className:"Demonstrator::ActionsHeader"};C.AJY={Background:null,Z2:null,Aex:
null,Aek:null,Aew:null,Ajk:null,Ajl:null,Ajm:null,Ajn:null,Ajs:false,Agz:function(
H){var B;this.G(A.aaL(this.M,(B=this.Z2.M)[3]-B[1]));},Agy:function(H){this.G(A.
aaL(this.M,240));},ADr:function(E){if(this.Ajs===E)return;this.Ajs=E;this.Z2.ADr(
E);if(E)this.Agz(this);else this.Agy(this);},_Init:function(aArg){A.Core.O._Init.
call(this,aArg);A.abh.AH._Init.call(this.Background={I:this},0);C.UK._Init.call(
this.Z2={I:this},0);C.Aex._Init.call(this.Aex={I:this},0);C.Aek._Init.call(this.
Aek={I:this},0);C.Aew._Init.call(this.Aew={I:this},0);A.abh.DU._Init.call(this.Ajk={
I:this},0);A.abh.DU._Init.call(this.Ajl={I:this},0);A.abh.DU._Init.call(this.Ajm={
I:this},0);A.abh.DU._Init.call(this.Ajn={I:this},0);this.__proto__=C.AJY;this.G(
AeP);this.Background.AV(0x3F);this.Background.G(AeP);this.Z2.AV(0x1D);this.Z2.G(
B$);this.Aex.G(AeQ);this.Aek.G(Li);this.Aew.G(Ag$);this.Ajk.DN(Zo);this.Ajk.D5(ON
);this.Ajk.L(A.iF.Ba);this.Ajl.DN(Ang);this.Ajl.D5(N2);this.Ajl.L(A.iF.Ba);this.
Ajm.DN(Wj);this.Ajm.D5(Anh);this.Ajm.L(A.iF.Ba);this.Ajn.DN(Aha);this.Ajn.D5(Ahb
);this.Ajn.L(A.iF.Ba);this.J(this.Background,0);this.J(this.Z2,0);this.J(this.Aex
,0);this.J(this.Aek,0);this.J(this.Aew,0);this.J(this.Ajk,0);this.J(this.Ajl,0);
this.J(this.Ajm,0);this.J(this.Ajn,0);this.Z2.A6Y([this,this.Agz]);this.Z2.A6X([
this,this.Agy]);},_Done:function(){this.__proto__=A.Core.O;this.Background._Done(
);this.Z2._Done();this.Aex._Done();this.Aek._Done();this.Aew._Done();this.Ajk._Done(
);this.Ajl._Done();this.Ajm._Done();this.Ajn._Done();A.Core.O._Done.call(this);}
,_ReInit:function(){A.Core.O._ReInit.call(this);this.Background._ReInit();this.Z2.
_ReInit();this.Aex._ReInit();this.Aek._ReInit();this.Aew._ReInit();this.Ajk._ReInit(
);this.Ajl._ReInit();this.Ajm._ReInit();this.Ajn._ReInit();},_Mark:function(D){var
B;A.Core.O._Mark.call(this,D);if((B=this.Background)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Z2)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Aex)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Aek)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Aew)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.Ajk)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
Ajl)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ajm)._cycle!=D)B._Mark(B._cycle=D);
if((B=this.Ajn)._cycle!=D)B._Mark(B._cycle=D);},_className:"Demonstrator::ActionsMenu"
};C.Mb={AaN:null,Agi:null,Bh:null,DU:null,AhV:function(H){},AXS:function(s){this.
AhV(s);},_Init:function(aArg){A.Core.O._Init.call(this,aArg);A.abh.Ak._Init.call(
this.AaN={I:this},0);A.abh.Ak._Init.call(this.Agi={I:this},0);A.Core.Bh._Init.call(
this.Bh={I:this},0);A.abh.DU._Init.call(this.DU={I:this},0);this.__proto__=C.Mb;
this.G(B$);this.AaN.G(AbQ);this.AaN.L(A.iF.Text);this.Agi.G(Ue);this.Agi.L(A.iF.
Text);this.Agi.Ct(0);this.Bh.KB(KH);this.Bh.KA(OM);this.Bh.DN(Ne);this.Bh.D5(ON);
this.DU.DN(Ne);this.DU.D5(OM);this.DU.L(A.iF.Ba);this.J(this.AaN,0);this.J(this.
Agi,0);this.J(this.Bh,0);this.J(this.DU,0);this.AaN.At(A.zW(A.abj.K2));this.Agi.
At(A.zW(A.abj.ARp));this.Bh.BS=[this,this.AXS];},_Done:function(){this.__proto__=
A.Core.O;this.AaN._Done();this.Agi._Done();this.Bh._Done();this.DU._Done();A.Core.
O._Done.call(this);},_ReInit:function(){A.Core.O._ReInit.call(this);this.AaN._ReInit(
);this.Agi._ReInit();this.Bh._ReInit();this.DU._ReInit();},_Mark:function(D){var
B;A.Core.O._Mark.call(this,D);if((B=this.AaN)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Agi)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Bh)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.DU)._cycle!=D)B._Mark(B._cycle=D);},_className:"Demonstrator::ActionsItem"
};C.Aek={AeE:null,AhV:function(H){var AfA=A.aa2(this.AeE.String,0,10);var BxD=A.
_GetAutoObject(A.abq.LB).Azk(AfA);if(BxD){AfA=AfA+1;this.AeE.R(AfA.toFixed());}}
,_Init:function(aArg){C.Mb._Init.call(this,aArg);C.Ap8._Init.call(this.AeE={I:this
},0);this.__proto__=C.Aek;this.AeE.G(Ani);this.AeE.R(Anj);this.AeE.L(A.iF.Text);
this.J(this.AeE,-1);this.AaN.At(A.zW(A.abi.Al$));},_Done:function(){this.__proto__=
C.Mb;this.AeE._Done();C.Mb._Done.call(this);},_ReInit:function(){C.Mb._ReInit.call(
this);this.AeE._ReInit();},_Mark:function(D){var B;C.Mb._Mark.call(this,D);if((B=
this.AeE)._cycle!=D)B._Mark(B._cycle=D);},_className:"Demonstrator::ScanAction"};
C.Aex={TZ:null,OE:null,A1s:0,Init:function(aArg){var B;A.za([this,this.BwJ],[B=A.
_GetAutoObject(A.abq.LB),B.AQm,B.AQ0],0);A.za([this,this.AyQ],[B=A._GetAutoObject(
A.Device.Device),B.Aqc,B.ArV],0);A.ow([this,this.AyQ],this);},Ag:function(Ae){C.
Mb.Ag.call(this,Ae);this.OE.X(!A._GetAutoObject(A.abq.LB).AvN);},AhV:function(H){
var B;A._GetAutoObject(A.abq.LB).Bbe(this);},AyQ:function(H){if(A._GetAutoObject(
A.Device.Device).TemperatureUnit!==this.A1s){switch(A._GetAutoObject(A.Device.Device
).TemperatureUnit){case 0:this.OE.R(A.aap(A._GetAutoObject(A.abq.LB).Ari/100,0,1
));break;case 1:{var As0=A._GetAutoObject(A.Device.Converter).ASA(A._GetAutoObject(
A.abq.LB).Ari/100,0,A._GetAutoObject(A.Device.Device).TemperatureUnit);this.OE.R(
A.aap(As0,0,1));}break;default:A.aa8("%s%e",Awl,A._GetAutoObject(A.Device.Device
).TemperatureUnit);}this.A1s=A._GetAutoObject(A.Device.Device).TemperatureUnit;}
},Bws:function(H){var B;var AsZ=A.aaZ(this.OE.String,0);AsZ=A._GetAutoObject(A.Device.
Converter).ASA(AsZ,A._GetAutoObject(A.Device.Device).TemperatureUnit,0);AsZ*=100;
A._GetAutoObject(A.abq.LB).A7g(Math.round(AsZ)|0);},BwJ:function(H){this.Am();},
_Init:function(aArg){C.Mb._Init.call(this,aArg);A.abr.TZ._Init.call(this.TZ={I:this
},0);C.OE._Init.call(this.OE={I:this},0);this.__proto__=C.Aex;var B;this.TZ.G(Awm
);this.TZ.A6U(A.z2(A.abg.A2m));this.OE.G(Aki);this.OE.R(Awn);this.OE.L(A.iF.Text
);this.OE.BiB(true);this.A1s=A._GetAutoObject(A.Device.Device).TemperatureUnit;this.
J(this.TZ,0);this.J(this.OE,0);this.AaN.At(A.zW(A.abi.AaM));this.TZ.Au([B=A._GetAutoObject(
A.abq.LB),B.AQm,B.AQ0]);this.TZ.OnSetAppearance(A._GetAutoObject(A.abz.AAh));this.
OE.Dn=[this,this.Bws];this.Init(aArg);},_Done:function(){this.__proto__=C.Mb;this.
TZ._Done();this.OE._Done();C.Mb._Done.call(this);},_ReInit:function(){C.Mb._ReInit.
call(this);this.TZ._ReInit();this.OE._ReInit();this.TZ.A6U(A.z2(A.abg.A2m));},_Mark:
function(D){var B;C.Mb._Mark.call(this,D);if((B=this.TZ)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.OE)._cycle!=D)B._Mark(B._cycle=D);},_className:"Demonstrator::TemperatureAction"
};C.ApT={Q:null,CC:null,Bh:null,AfU:null,Ame:null,Amd:null,ApY:null,Text:null,Ha:
null,Ak:null,CT:null,ApX:null,ApZ:null,An_:false,Bf:function(aSize){this.Ha.G(A.
aaN(this.Ha.M,aSize));this.CC.AvU(1);this.CC.Jl(0,40);this.CC.E5(0,aSize[0]-20,20
,12.5,12.5,-90,90,10);this.CC.E5(0,20,20,12.5,12.5,90,270,10);this.CC.U1(0);},Ag:
function(Ae){var B;var F;A.Core.O.Ag.call(this,Ae);var GZ=((Ae&0x40)===0x40);if(
GZ){if(!!this.Q)this.Text.R((F=this.Q,F[1].call(F[0])));this.AfU.Ap(true);this.Ak.
X(false);}else{if(!!this.Q)this.Text.R((F=this.Q,F[1].call(F[0])));this.AfU.Ap(false
);this.CT.X(false);this.Ak.X(true);}this.An_=GZ;},AhV:function(H){var B;if(!((this.
U&0x80)===0x80))this.Ib().AKK(this);},A5i:function(H){},A9v:function(s){this.A5i(
s);},Bgv:function(H){var B;var F;if(!this.Q||!(F=this.Q,F[1].call(F[0])).length)
this.CT.G(A.aaP(this.CT.M,A.zT(this.Text.M)[0]));else{this.CT.G(A.aaP(this.CT.M,
this.Text.AMG(0)[2]+2));this.CT.G(A.aaR(this.CT.M,this.Text.AMG(0)[1]));this.CT.
G(A.aaL(this.CT.M,(B=this.Text.AMG(0))[3]-B[1]));}this.Ak.G(A.aaP(this.Ak.M,this.
Text.M[0]-((B=this.Ak.M)[2]-B[0])));},A5g:function(H){},A9u:function(s){this.A5g(
s);},Au:function(E){if(A.z_(this.Q,E))return;if(!!this.Q)A.zn([this,this.OY],this.
Q,0);this.Q=E;if(!!E)A.za([this,this.OY],E,0);if(!!E)A.ow([this,this.OY],this);}
,OY:function(H){this.Am();},Bh9:function(H){var B;if(((this.U&0x80)===0x80))this.
Ib().AAO(this);},Bbm:function(H){},_Init:function(aArg){A.Core.O._Init.call(this
,aArg);A.Graphics.Hl._Init.call(this.CC={I:this},0);A.Core.Bh._Init.call(this.Bh={
I:this},0);A.abm.UT._Init.call(this.AfU={I:this},0);A.Core.BR._Init.call(this.Ame={
I:this},0);A.Core.BR._Init.call(this.Amd={I:this},0);A.Core.BR._Init.call(this.ApY={
I:this},0);A.abh.Text._Init.call(this.Text={I:this},0);A.abh.Ha._Init.call(this.
Ha={I:this},0);A.abh.Ak._Init.call(this.Ak={I:this},0);A.abh.AH._Init.call(this.
CT={I:this},0);A.Core.BR._Init.call(this.ApX={I:this},0);A.Core.BR._Init.call(this.
ApZ={I:this},0);this.__proto__=C.ApT;var B;this.G(AeR);this.Bh.AV(0x3F);this.Bh.
KB(KH);this.Bh.KA(Arw);this.Bh.DN(OP);this.Bh.D5(PK);this.AfU.FA(530);this.AfU.VM(
530);this.Ame.Filter=143;this.Amd.Filter=45;this.ApY.Filter=1;this.Text.AV(0x3F);
this.Text.G(AeR);this.Text.I2(true);this.Text.A2(0x12);this.Text.L(0xFFB3B3B3);this.
Ha.G(AeR);this.Ha.L(0xFFB3B3B3);this.Ha.NR(1);this.Ak.G(Sv);this.CT.G(Awo);this.
CT.L(0xFFB3B3B3);this.CT.X(false);this.ApX.Filter=138;this.ApZ.Filter=137;this.J(
this.Bh,0);this.J(this.Text,0);this.J(this.Ha,0);this.J(this.Ak,0);this.J(this.CT
,0);this.Bh.K$=[this,this.AhV];this.AfU.Q=[B=this.CT,B.E$,B.X];this.Ame.BS=[this
,this.A9v];this.Ame.DV=[this,this.A9v];this.Amd.BS=[this,this.A9u];this.Amd.DV=[
this,this.A9u];this.ApY.BS=[this,this.Bh9];this.Text.QA([this,this.Bgv]);this.Text.
Aa(A.zW(A.eV.AB));this.Ha.YG(this.CC);this.Ak.At(null);this.ApX.BS=[this,this.Bbm
];this.ApZ.BS=[this,this.Bbm];},_Done:function(){this.__proto__=A.Core.O;this.CC.
_Done();this.Bh._Done();this.AfU._Done();this.Ame._Done();this.Amd._Done();this.
ApY._Done();this.Text._Done();this.Ha._Done();this.Ak._Done();this.CT._Done();this.
ApX._Done();this.ApZ._Done();A.Core.O._Done.call(this);},_ReInit:function(){A.Core.
O._ReInit.call(this);this.CC._ReInit();this.Bh._ReInit();this.AfU._ReInit();this.
Ame._ReInit();this.Amd._ReInit();this.ApY._ReInit();this.Text._ReInit();this.Ha.
_ReInit();this.Ak._ReInit();this.CT._ReInit();this.ApX._ReInit();this.ApZ._ReInit(
);this.Text.Aa(A.zW(A.eV.AB));},_Mark:function(D){var B;A.Core.O._Mark.call(this
,D);if((B=this.Q)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.CC)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.Bh)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
AfU)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ame)._cycle!=D)B._Mark(B._cycle=D);
if((B=this.Amd)._cycle!=D)B._Mark(B._cycle=D);if((B=this.ApY)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Text)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ha)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.Ak)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
CT)._cycle!=D)B._Mark(B._cycle=D);if((B=this.ApX)._cycle!=D)B._Mark(B._cycle=D);
if((B=this.ApZ)._cycle!=D)B._Mark(B._cycle=D);},_className:"Demonstrator::InputView"
};C.Adq={Background:null,XB:null,_Init:function(aArg){A.Core.O._Init.call(this,aArg
);A.abh.AH._Init.call(this.Background={I:this},0);C.XB._Init.call(this.XB={I:this
},0);this.__proto__=C.Adq;var B;this.G(Sw);this.Background.G(Sw);this.XB.AV(0x1D
);this.XB.G(Arx);this.J(this.Background,0);this.J(this.XB,0);this.XB.Au([B=A._GetAutoObject(
A.abq.AiQ),B.A5X,B.ADG]);},_Done:function(){this.__proto__=A.Core.O;this.Background.
_Done();this.XB._Done();A.Core.O._Done.call(this);},_ReInit:function(){A.Core.O.
_ReInit.call(this);this.Background._ReInit();this.XB._ReInit();},_Mark:function(
D){var B;A.Core.O._Mark.call(this,D);if((B=this.Background)._cycle!=D)B._Mark(B.
_cycle=D);if((B=this.XB)._cycle!=D)B._Mark(B._cycle=D);},_className:"Demonstrator::FilterRow"
};C.OE={Init:function(aArg){var B;A.za([this,this.AyQ],[B=A._GetAutoObject(A.Device.
Device),B.Aqc,B.ArV],0);A.ow([this,this.AyQ],this);},Ag:function(Ae){var B;C.Ap8.
Ag.call(this,Ae);var GZ=((this.U&0x40)===0x40);if(!GZ&&(this.String.length>0))this.
Text.R(((this.String+Awp)+A._GetAutoObject(A.abk.Temperature).AkT())+String.fromCharCode(
0x0A));else this.Text.R(this.String+String.fromCharCode(0x0A));if(this.Ef>this.String.
length)this.Ef=this.String.length;},AyQ:function(H){this.Am();},_Init:function(aArg
){C.Ap8._Init.call(this,aArg);this.__proto__=C.OE;this.Init(aArg);},_className:"Demonstrator::TemperatureInputView"
};C.Ap8={B6:null,Dn:null,IP:null,Cp:null,AlL:null,RH:null,Kw:null,Bh:null,Text:null
,CT:null,Api:null,AqP:null,CC:null,Ha:null,Ap_:null,ApG:null,Aps:null,String:A.jm
,Ef:0,AP:0xFFB3B3B3,ALx:false,Nj:false,Bf:function(aSize){this.Ha.G(A.aaN(this.Ha.
M,aSize));this.CC.AvU(1);this.CC.Jl(0,40);this.CC.E5(0,aSize[0]-20,20,12.5,12.5,-
90,90,10);this.CC.E5(0,20,20,12.5,12.5,90,270,10);this.CC.U1(0);},Ag:function(Ae
){var B;A.abo.I7.Ag.call(this,Ae);if(((Ae&0x40)===0x40))this.IP.Ap(true);else{this.
IP.Ap(false);this.CT.X(false);}},A1D:function(H){var B;var A8=this.Text.M;var Nr=
0;var Ns=0;if(this.CT.Ek[0]<A8[0])Nr=A8[0]-this.CT.Ek[0];if(this.CT.Ek[0]>A8[2])
Nr=A8[2]-this.CT.Ek[0];if(this.CT.Ek[1]<A8[1])Ns=A8[1]-this.CT.Ek[1];if(this.CT.
Et[1]>A8[3])Ns=A8[3]-this.CT.Et[1];if(!!Nr||!!Ns)this.Text.Gk(A.aak(this.Text.Bp
,[Nr,Ns]));Nr=this.Text.Bp[0];Ns=this.Text.Bp[1];var CZ=[(B=this.Text.C_())[2]-B[
0],B[3]-B[1]];if(CZ[0]<=((B=this.Text.M)[2]-B[0]))Nr=0;if(CZ[1]<=((B=this.Text.M
)[3]-B[1]))Ns=0;this.Text.Gk([Nr,Ns]);},Alt:function(H){if(!this.B6)return;var A0$=
this.Text.AER(this.Ef);var pos=this.Text.Aei(A0$);this.CT.D5(A.aaj(pos,[0,this.B6.
Ascent]));this.CT.DN(A.aak(pos,[0,this.B6.Descent]));if(this.IP.Bw){this.IP.Ap(false
);this.IP.Ap(true);}if(this.Nj){A.ow([this,this.A1D],this);this.Nj=false;}},AyM:
function(H){if(!this.A3_(0x80))this.Ib().AKK(this);var Ex=this.Text.ARt(this.Bh.
HV);var Ux=this.Text.AmY(Ex);if(Ux!==this.Ef){this.Ef=Ux;A.ow([this,this.Alt],this
);this.Nj=true;}},AyG:function(H){if(!this.B6)return;var Ex=this.Text.AER(this.Ef
);if(this.Cp.CP===6){Ex=[Ex[0]-1,Ex[1]];if(this.Text.AmY(Ex)===this.Ef){Ex=[Ex[0
],Ex[1]-1];Ex=[this.Text.AA_(Ex[1]).length,Ex[1]];}}if(this.Cp.CP===7){Ex=[Ex[0]+
1,Ex[1]];if(this.Text.AmY(Ex)===this.Ef){Ex=[Ex[0],Ex[1]+1];Ex=[0,Ex[1]];}}var Ux=
this.Text.AmY(Ex);if(Ux!==this.Ef){this.Ef=Ux;A.ow([this,this.Alt],this);this.Nj=
true;}},Ba8:function(H){if(!this.Ef)return;this.R(A.aa3(this.String,this.Ef-1,1)
);this.Ef=this.Ef-1;this.Nj=true;A.ow(this.Dn,this);},AyH:function(H){if(this.Ef>=
this.String.length)return;this.R(A.aa3(this.String,this.Ef,1));this.Nj=true;A.ow(
this.Dn,this);},Bbb:function(H){if(this.String.length>=15)return;var BuU=this.Kw.
D4;var AsX=String.fromCharCode(BuU);this.R(A.aaW(this.String,AsX,this.Ef));this.
Ef=this.Ef+AsX.length;this.Nj=true;A.ow(this.Dn,this);},R:function(E){if(this.String===
E)return;this.String=E;if(this.Ef>(E.length+1))this.Ef=E.length;this.Text.R(E+String.
fromCharCode(0x0A));this.Nj=true;this.Text.Gk(KH);},L:function(E){if(this.AP===E
)return;this.AP=E;this.Text.L(E);this.CT.L(E);this.Ha.L(E);},Bbn:function(H){if(
this.ALx===false)return;if(this.String.indexOf(String.fromCharCode(0x2E),0)>=0)return;
if(this.String.length>=15)return;this.R(A.aaW(this.String,Su,this.Ef));this.Ef=this.
Ef+1;this.Nj=true;A.ow(this.Dn,this);},BiB:function(E){if(this.ALx===E)return;this.
ALx=E;if(E===false){var Bb2=this.String.indexOf(String.fromCharCode(0x2E),0);if(
Bb2>=0)this.R(A.aaX(this.String,Bb2));}this.Nj=true;this.Text.Gk(KH);},BwA:function(
H){if(this.A3_(0x80))this.Ib().AAO(this);this.Am();},Bwn:function(H){var Ux=this.
String.length;if(Ux!==this.Ef){this.Ef=Ux;A.ow([this,this.Alt],this);this.Nj=true;
}},Bwr:function(H){if(!!this.Ef){this.Ef=0;A.ow([this,this.Alt],this);this.Nj=true;
}},_Init:function(aArg){A.abo.I7._Init.call(this,aArg);A.abm.UT._Init.call(this.
IP={I:this},0);A.Core.BR._Init.call(this.Cp={I:this},0);A.Core.BR._Init.call(this.
AlL={I:this},0);A.Core.BR._Init.call(this.RH={I:this},0);A.Core.BR._Init.call(this.
Kw={I:this},0);A.Core.Bh._Init.call(this.Bh={I:this},0);A.abh.Text._Init.call(this.
Text={I:this},0);A.abh.DU._Init.call(this.CT={I:this},0);A.Core.BR._Init.call(this.
Api={I:this},0);A.Core.BR._Init.call(this.AqP={I:this},0);A.Graphics.Hl._Init.call(
this.CC={I:this},0);A.abh.Ha._Init.call(this.Ha={I:this},0);A.Core.BR._Init.call(
this.Ap_={I:this},0);A.Core.BR._Init.call(this.ApG={I:this},0);A.Core.BR._Init.call(
this.Aps={I:this},0);this.__proto__=C.Ap8;var B;this.G(AeR);this.IP.B1=false;this.
IP.Cv=true;this.IP.FA(500);this.IP.VM(500);this.Cp.Filter=147;this.AlL.Filter=45;
this.RH.Filter=44;this.Kw.Filter=143;this.Bh.AV(0x3F);this.Bh.KB(PK);this.Bh.KA(
OP);this.Bh.DN(Arw);this.Bh.D5(KH);this.Bh.ADo(3);this.Text.AV(0x3F);this.Text.G(
AeR);this.Text.KD(false);this.Text.A2(0x12);this.Text.R(A.jm);this.Text.L(0xFFB3B3B3
);this.CT.DN(Awq);this.CT.D5(Awr);this.CT.A7s(2);this.CT.A7r(2);this.CT.L(0xFFB3B3B3
);this.CT.X(false);this.Api.Filter=138;this.AqP.Filter=137;this.Ha.G(AeR);this.Ha.
L(0xFFB3B3B3);this.Ha.NR(1);this.Ap_.Filter=1;this.ApG.Filter=41;this.Aps.Filter=
42;this.J(this.Bh,0);this.J(this.Text,0);this.J(this.CT,0);this.J(this.Ha,0);this.
IP.Q=[B=this.CT,B.E$,B.X];this.Cp.BS=[this,this.AyG];this.Cp.DV=[this,this.AyG];
this.AlL.BS=[this,this.Ba8];this.AlL.DV=[this,this.Ba8];this.RH.BS=[this,this.AyH
];this.RH.DV=[this,this.AyH];this.Kw.BS=[this,this.Bbb];this.Kw.DV=[this,this.Bbb
];this.Bh.BS=[this,this.AyM];this.Text.QA([this,this.Alt]);this.Text.Aa(A.zW(A.eV.
AB));this.B6=A.zW(A.eV.AB);this.Api.BS=[this,this.Bbn];this.AqP.BS=[this,this.Bbn
];this.Ha.YG(this.CC);this.Ap_.BS=[this,this.BwA];this.ApG.BS=[this,this.Bwr];this.
Aps.BS=[this,this.Bwn];},_Done:function(){this.__proto__=A.abo.I7;this.IP._Done(
);this.Cp._Done();this.AlL._Done();this.RH._Done();this.Kw._Done();this.Bh._Done(
);this.Text._Done();this.CT._Done();this.Api._Done();this.AqP._Done();this.CC._Done(
);this.Ha._Done();this.Ap_._Done();this.ApG._Done();this.Aps._Done();A.abo.I7._Done.
call(this);},_ReInit:function(){A.abo.I7._ReInit.call(this);this.IP._ReInit();this.
Cp._ReInit();this.AlL._ReInit();this.RH._ReInit();this.Kw._ReInit();this.Bh._ReInit(
);this.Text._ReInit();this.CT._ReInit();this.Api._ReInit();this.AqP._ReInit();this.
CC._ReInit();this.Ha._ReInit();this.Ap_._ReInit();this.ApG._ReInit();this.Aps._ReInit(
);},_Mark:function(D){var B;A.abo.I7._Mark.call(this,D);if((B=this.B6)&&(B._cycle
!=D))B._Mark(B._cycle=D);if((B=this.Dn)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D
);if((B=this.IP)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Cp)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.AlL)._cycle!=D)B._Mark(B._cycle=D);if((B=this.RH)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.Kw)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Bh
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Text)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.CT)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Api)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.AqP)._cycle!=D)B._Mark(B._cycle=D);if((B=this.CC)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Ha)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ap_)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.ApG)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Aps
)._cycle!=D)B._Mark(B._cycle=D);},_className:"Demonstrator::NumberInput"};C.Aew={
LabelDataSync:null,AhV:function(H){var B;A.ow([B=A._GetAutoObject(A.abt.Ard),B.BxV
],this);},_Init:function(aArg){C.Mb._Init.call(this,aArg);A.kh.CR._Init.call(this.
LabelDataSync={I:this},0);this.__proto__=C.Aew;this.LabelDataSync.G(Ank);this.LabelDataSync.
R(A.z2(A.abg.A26));this.LabelDataSync.L(A.iF.Text);this.J(this.LabelDataSync,0);
this.AaN.At(A.zW(C.ASr));this.LabelDataSync.Aa(A.zW(A.eV.Aw));this.LabelDataSync.
BD(A.zW(A.eV.AB));},_Done:function(){this.__proto__=C.Mb;this.LabelDataSync._Done(
);C.Mb._Done.call(this);},_ReInit:function(){C.Mb._ReInit.call(this);this.LabelDataSync.
_ReInit();this.LabelDataSync.R(A.z2(A.abg.A26));this.LabelDataSync.Aa(A.zW(A.eV.
Aw));this.LabelDataSync.BD(A.zW(A.eV.AB));},_Mark:function(D){var B;C.Mb._Mark.call(
this,D);if((B=this.LabelDataSync)._cycle!=D)B._Mark(B._cycle=D);},_className:"Demonstrator::SyncAction"
};C.ASr={_class:function(){return A.abj.Aj;},0:{FileName:"./res_index/DemonstratorSyncIcon.png"
,Format:A.cC,NoOfFrames:1,FrameSize:[50,60],FrameDelay:0,_this:null}};C.Aam={TimespanDaysToString:
null,ABa:function(aIndex){if(this.AA7()>aIndex)return this.TimespanDaysToString.
B0(aIndex);A.aa8("%s",Aws);return A.jm;},AA7:function(){return 4;},C$:function(aIndex
){var Aih=0;switch(aIndex){case 0:Aih=0;break;case 1:Aih=1;break;case 2:Aih=2;break;
case 3:Aih=3;break;default:throw new Error(Ary+aIndex.toFixed());}return Aih;},_Init:
function(aArg){A.abx.AlN._Init.call(this,aArg);A.Device.TimespanDaysToString._Init.
call(this.TimespanDaysToString={I:this},0);this.__proto__=C.Aam;},_Done:function(
){this.__proto__=A.abx.AlN;this.TimespanDaysToString._Done();A.abx.AlN._Done.call(
this);},_ReInit:function(){A.abx.AlN._ReInit.call(this);this.TimespanDaysToString.
_ReInit();},_Mark:function(D){var B;A.abx.AlN._Mark.call(this,D);if((B=this.TimespanDaysToString
)._cycle!=D)B._Mark(B._cycle=D);},_className:"Demonstrator::DatePickerUnitDD"};C.
BBv={Gu:0,AS6:1,G6:2,Year:3};C.AAL={_class:function(){return A.abj.Aj;},0:{FileName:
"./res_index/DemonstratorEarTagIcon.png",Format:A.jt,NoOfFrames:2,FrameSize:[37,
37],FrameDelay:0,_this:null}};C.AE4={_class:function(){return A.abj.Aj;},0:{FileName:
"./res_index/DemonstratorTransponderEarTagIcon.png",Format:A.jt,NoOfFrames:2,FrameSize:[
37,37],FrameDelay:0,_this:null}};
C._Init=function(){C.ASZ.__proto__=A.abo.Menu;C.AR1.__proto__=A.Core.O;C.AKl.__proto__=
C.A_;C.Mc.__proto__=A.Core.O;C.XB.__proto__=C.ApT;C.Aan.__proto__=A.Core.O;C.Aua.
__proto__=A.abo.AgO;C.AKz.__proto__=C.Fk;C.As$.__proto__=C.Fk;C.A_.__proto__=A.Core.
O;C.Fk.__proto__=A.Core.O;C.ALv.__proto__=A.abo.AgM;C.AgW.__proto__=A.Core.O;C.AKs.
__proto__=C.AgW;C.UK.__proto__=C.As$;C.AJY.__proto__=A.Core.O;C.Mb.__proto__=A.Core.
O;C.Aek.__proto__=C.Mb;C.Aex.__proto__=C.Mb;C.ApT.__proto__=A.Core.O;C.Adq.__proto__=
A.Core.O;C.OE.__proto__=C.Ap8;C.Ap8.__proto__=A.abo.I7;C.Aew.__proto__=C.Mb;C.Aam.
__proto__=A.abx.AlN;};C._ReInit=function(){};C.DE=function(D){var B;if((B=C.Background[
0]._this)&&(B._cycle!=D))B._Done(C.Background[0]._this=null);if((B=C.AKU[0]._this
)&&(B._cycle!=D))B._Done(C.AKU[0]._this=null);if((B=C.AKV[0]._this)&&(B._cycle!=
D))B._Done(C.AKV[0]._this=null);if((B=C.AKW[0]._this)&&(B._cycle!=D))B._Done(C.AKW[
0]._this=null);if((B=C.AKX[0]._this)&&(B._cycle!=D))B._Done(C.AKX[0]._this=null);
if((B=C.ANU[0]._this)&&(B._cycle!=D))B._Done(C.ANU[0]._this=null);if((B=C.Filter[
0]._this)&&(B._cycle!=D))B._Done(C.Filter[0]._this=null);if((B=C.APq[0]._this)&&(
B._cycle!=D))B._Done(C.APq[0]._this=null);if((B=C.AiA[0]._this)&&(B._cycle!=D))B.
_Done(C.AiA[0]._this=null);if((B=C.AKC[0]._this)&&(B._cycle!=D))B._Done(C.AKC[0].
_this=null);if((B=C.Aq6[0]._this)&&(B._cycle!=D))B._Done(C.Aq6[0]._this=null);if((
B=C.ASw[0]._this)&&(B._cycle!=D))B._Done(C.ASw[0]._this=null);if((B=C.AFj[0]._this
)&&(B._cycle!=D))B._Done(C.AFj[0]._this=null);if((B=C.ATf[0]._this)&&(B._cycle!=
D))B._Done(C.ATf[0]._this=null);if((B=C.ASr[0]._this)&&(B._cycle!=D))B._Done(C.ASr[
0]._this=null);if((B=C.AAL[0]._this)&&(B._cycle!=D))B._Done(C.AAL[0]._this=null);
if((B=C.AE4[0]._this)&&(B._cycle!=D))B._Done(C.AE4[0]._this=null);};return C;})(
);

/* VitalControl demonstration application, © Urban GmbH & Co.KG 2023 */