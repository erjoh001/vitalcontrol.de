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
N1=[0,0,240,60];var CJ=[0,0,40,60];var Fn=[100,0,130,60];var LW=[43,0,100,60];var
OL=[125,0,240,60];var KH=[0,0];var OM=[100,0];var Ne=[100,60];var ON=[0,60];var Ss=[
107,0];var T$=[240,0];var Zf=[240,60];var Wb=[107,60];var IM="%d.%m.%Y";var Ua="Unhandled date unit: ";
var Zg=[0,0,200,180];var Wc=[36,0,200,30];var Zh=[0,30,160,60];var Ub="Text";var
Zi=[0,70,40,110];var Zj=[44,70,156,110];var Uc=[160,70,200,110];var Wd=[7,2,27,25
];var QV=[0,30,170,180];var Zk=[170,34,190,57];var OO=[0,0,40,40];var PK=[0,40];
var Ud=[40,40];var Zl=[40,0];var We=[0,0,370,100];var Zm=[20,0,290,60];var Zn=[0
,60,370,100];var Wf="Cap";var Wg=[20,0,370,60];var St=[310,0,370,60];var Zo=[370
,0];var Zp=[370,60];var AbO="UpdateData is called for the base class ListItemBase. Please make "+
"sure this method is implemented by a derived class.";var Su=".";var AbP=[0,0,170
,150];var AeO=[0,59,170,90];var Zq=[110,0,170,150];var Wh=[0,30];var Wi=[50,0,100
,150];var AeP=[0,0,40,150];var AeQ=[0,0,370,240];var JT=[0,60,370,710];var AeR=[
0,60,370,120];var Li=[0,120,370,180];var Ag_=[0,180,370,240];var Ane=[370,120];var
N2=[0,120];var Wj=[370,180];var Anf=[0,180];var Ag$=[370,240];var Aha=[0,240];var
AbQ=[0,0,50,60];var Ue=[50,0,100,60];var Ang=[100,10,370,50];var Anh="276000901234567";
var Awj="Unhandled temperature unit";var Awk=[110,0,260,60];var Akj=[235,10,370,
50];var Awl="39.5";var AeS=[0,0,270,40];var Arv=[270,0];var OP=[270,40];var Sv=[
150,0,170,40];var Awm=[205,10,207,30];var Sw=[0,0,370,40];var Arw=[50,0,320,40];
var Awn=" ";var Awo=[135,23];var Awp=[135,0];var Ani=[100,0,370,60];var Awq="Error: Nullpointer Exception";
var Arx="Unknown Date Piecker Unit Index: ";
C.Background={_class:function(){return A.abj.Aj;},0:{FileName:"./res_index/DemonstratorBackground.png"
,Format:A.cC,NoOfFrames:1,FrameSize:[1000,740],FrameDelay:0,_this:null}};C.AKT={
_class:function(){return A.abj.Aj;},0:{FileName:"./res_index/DemonstratorButtonLeft.png"
,Format:A.cC,NoOfFrames:1,FrameSize:[40,40],FrameDelay:0,_this:null}};C.AKU={_class:
function(){return A.abj.Aj;},0:{FileName:"./res_index/DemonstratorButtonLeftPressed.png"
,Format:A.cC,NoOfFrames:1,FrameSize:[40,40],FrameDelay:0,_this:null}};C.AKV={_class:
function(){return A.abj.Aj;},0:{FileName:"./res_index/DemonstratorButtonRight.png"
,Format:A.cC,NoOfFrames:1,FrameSize:[40,40],FrameDelay:0,_this:null}};C.AKW={_class:
function(){return A.abj.Aj;},0:{FileName:"./res_index/DemonstratorButtonRightPressed.png"
,Format:A.cC,NoOfFrames:1,FrameSize:[40,40],FrameDelay:0,_this:null}};C.ANT={_class:
function(){return A.abj.Aj;},0:{FileName:"./res_index/DemonstratorIconDatePicker.png"
,Format:A.cC,NoOfFrames:1,FrameSize:[20,23],FrameDelay:0,_this:null}};C.Filter={
_class:function(){return A.abj.Aj;},0:{FileName:"./res_index/DemonstratorFilter.png"
,Format:A.cC,NoOfFrames:1,FrameSize:[15,16],FrameDelay:0,_this:null}};C.APp={_class:
function(){return A.abj.Aj;},0:{FileName:"./res_index/DemonstratorMenuIcon.png",
Format:A.cC,NoOfFrames:1,FrameSize:[20,16],FrameDelay:0,_this:null}};C.AiB={_class:
function(){return A.abj.Aj;},0:{FileName:"./res_index/DemonstratorArrowRight.png"
,Format:A.cC,NoOfFrames:1,FrameSize:[17,16],FrameDelay:0,_this:null}};C.AKB={_class:
function(){return A.abj.Aj;},0:{FileName:"./res_index/DemonstratorArrowDown.png"
,Format:A.cC,NoOfFrames:1,FrameSize:[17,16],FrameDelay:0,_this:null}};C.Aq5={_class:
function(){return A.abj.Aj;},0:{FileName:"./res_index/DemonstratorScanIcon.png",
Format:A.jt,NoOfFrames:2,FrameSize:[37,37],FrameDelay:0,_this:null}};C.ASv={_class:
function(){return A.abj.Aj;},0:{FileName:"./res_index/DemonstratorTemperatureIcon.png"
,Format:A.cC,NoOfFrames:1,FrameSize:[17,37],FrameDelay:0,_this:null}};C.ASY={Adf:
null,AW:null,AQ:null,Background:null,H2:null,AC:null,IG:null,Dh:null,K9:null,A4Q:
null,A5b:0,Bf:function(aSize){A.abo.Menu.Bf.call(this,aSize);this.IG.G(A.aaS(this.
IG.M,this.AC.OC));this.IG.G([].concat(this.IG.M.slice(0,3),aSize[1]));},Ag:function(
Ae){var B;A.abo.Menu.Ag.call(this,Ae);var GZ=((Ae&0x40)===0x40);if(GZ&&(this.AC.
Ge<0))this.AC.GM(0);},NQ:function(E){if(this.K9===E)return;this.K9=E;this.AC.NQ(
E);},BjH:function(E){var B;if(this.A4Q===E)return;if(!!this.Adf){this.HH(this.Adf
);this.Adf=null;}if(!!E){this.Adf=(C.Fk.isPrototypeOf(B=A._NewObject(E,0))?B:null
);this.Adf.A6X([this,this.Agx]);this.Adf.A6Y([this,this.Agy]);this.Adf.BjM(null);
this.J(this.Adf,0);this.AC.A64((B=this.Adf.M)[3]-B[1]);}else this.AC.A64(0);this.
IG.G(A.aaS(this.IG.M,this.AC.OC));A.ow([this,this.E4],this);this.A4Q=E;},G8:function(
H){var B;var FW=this.AC.GK;var Z=(C.A_.isPrototypeOf(B=this.AC.Cd)?B:null);if(!Z
)return;Z.YD(this.AW);Z.Cc(FW);Z.YG(this.AQ);Z.G(A.aaN(Z.M,[(B=this.AC.M)[2]-B[0
],this.AC.GL]));},YD:function(E){var B;if(this.AW===E)return;if(!!this.AW){A.zl([
this,this.Cc],this.AW,0);A.zn([this,this.Am9],[B=this.AW,B.Fy,B.FD],0);}this.AW=
E;if(!!E){A.y_([this,this.Cc],E,0);A.za([this,this.Am9],[E,E.Fy,E.FD],0);}A.ow([
this,this.Cc],this);A.ow([this,this.Am9],this);},Cc:function(H){if(!!this.AW){this.
AC.Jp(this.AW.Cj());this.AC.AaQ(0,this.AC.AR-1);}else this.AC.Jp(0);if(this.A5b!==
this.AC.AR){this.AC.AzP(null,null);this.A5b=this.AC.AR;}A.ow([this,this.E4],this
);},Agy:function(H){var B;this.G(A.aaL(this.M,(B=this.AC.AMD())[3]-B[1]));},Agx:
function(H){this.G(A.aaL(this.M,180));},A6k:function(H){var Jx=(A.Core.BR.isPrototypeOf(
H)?H:null);var FW=this.AC.Ge;if(Jx.CP===4)FW=FW-1;else if(Jx.CP===5)FW=FW+1;else
if((Jx.D4>=0x30)&&(Jx.D4<=0x39))A._GetAutoObject(A.abq.AiR).E6(Jx.D4);else if(Jx.
CP===45)A._GetAutoObject(A.abq.AiR).Delete();else Jx.Pc=true;if((FW<0)||(FW>=this.
AC.AR))return;this.AC.GM(FW);this.Bu3(FW,true);},BuS:function(H){var Z=(C.A_.isPrototypeOf(
H)?H:null);this.AC.GM(Z.Hq);},Bu3:function(GU,Ab6){var B;if((GU<0)||(GU>=this.AC.
AR))return;var AM=this.AC.Apy(GU,GU);var A8=this.AC.M;A8=A.aaS(A8,(B=this.AC.AMD(
))[3]-B[1]);A8=A.aaL(A8,(((B=this.AC.M)[3]-B[1])-((B=this.AC.AMD())[3]-B[1]))-((
B=this.AC.Bfm())[3]-B[1]));var Lu=A.kz(AM,A8);if((!Ab6&&!((Lu[0]>=Lu[2])||(Lu[1]>=
Lu[3])))||(Ab6&&A.z9(Lu,AM)))return;var Bo=0;if(AM[3]>A8[3])Bo=AM[3]-A8[3];if(Bo>(
AM[1]-A8[1]))Bo=(AM[3]-A8[1])-this.AC.GL;this.AC.Gk(this.AC.Bp-Bo);},Am9:function(
H){this.AC.GM(-1);},E4:function(H){var B;this.IG.Ms(this.AC.GL*this.AC.AR);this.
IG.Mu(((B=this.AC.M)[3]-B[1])-this.AC.OC);this.IG.Mt(-this.AC.Bp);},_Init:function(
aArg){A.abo.Menu._Init.call(this,aArg);A.abh.AH._Init.call(this.Background={I:this
},0);A.Core.H2._Init.call(this.H2={I:this},0);A.Core.CI._Init.call(this.AC={I:this
},0);A.kh.As._Init.call(this.IG={I:this},0);A.Core.BR._Init.call(this.Dh={I:this
},0);this.__proto__=C.ASY;this.G(B$);this.Background.AV(0x3);this.Background.G(B$
);this.H2.AV(0x3F);this.H2.G(B$);this.AC.AV(0x3F);this.AC.G(B$);this.AC.Ad6(60);
this.AC.Jp(0);this.AC.NQ(this.K9);this.IG.AV(0x3A);this.IG.G(BH);this.IG.L(0xFF808080
);this.J(this.Background,0);this.J(this.H2,0);this.J(this.AC,0);this.J(this.IG,0
);this.AC.Ej=[this,this.E4];this.AC.G8=[this,this.G8];this.AC.Avq(this.H2);this.
AQ=[this,this.BuS];this.Dh.BS=[this,this.A6k];this.Dh.DV=[this,this.A6k];},_Done:
function(){this.__proto__=A.abo.Menu;this.Background._Done();this.H2._Done();this.
AC._Done();this.IG._Done();this.Dh._Done();A.abo.Menu._Done.call(this);},_ReInit:
function(){A.abo.Menu._ReInit.call(this);this.Background._ReInit();this.H2._ReInit(
);this.AC._ReInit();this.IG._ReInit();this.Dh._ReInit();},_Mark:function(D){var B;
A.abo.Menu._Mark.call(this,D);if((B=this.Adf)&&(B._cycle!=D))B._Mark(B._cycle=D);
if((B=this.AW)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.AQ)&&((B=B[0])._cycle
!=D))B._Mark(B._cycle=D);if((B=this.Background)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.H2)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AC)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.IG)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Dh)._cycle!=D)B._Mark(
B._cycle=D);},_className:"Demonstrator::VerticalMenu"};C.AR0={Gs:null,AH:null,CC:
null,Init:function(aArg){var B;A.za([this,this.Ht],[B=A._GetAutoObject(A.abq.LB)
,B.A50,B.A7b],0);A.ow([this,this.Ht],this);},Abf:function(E){if(this.Gs===E)return;
if(!!this.Gs)this.HH(this.Gs);this.Gs=E;if(!!this.Gs)this.J(this.Gs,0);this.A$(E
);this.AgR(E,this.CC);this.Am();},Ht:function(H){var B;if(!!A._GetAutoObject(A.abq.
LB).Aq8)this.Abf((C.AgV.isPrototypeOf(B=A._NewObject(A._GetAutoObject(A.abq.LB).
Aq8,0))?B:null));else this.Abf(null);},_Init:function(aArg){A.Core.O._Init.call(
this,aArg);A.abh.AH._Init.call(this.AH={I:this},0);A.abh.CC._Init.call(this.CC={
I:this},0);this.__proto__=C.AR0;this.G(EV);this.AH.AV(0x3F);this.AH.G(EV);this.CC.
G(EV);this.CC.L(0xFF000000);this.J(this.AH,0);this.J(this.CC,0);this.Init(aArg);
},_Done:function(){this.__proto__=A.Core.O;this.AH._Done();this.CC._Done();A.Core.
O._Done.call(this);},_ReInit:function(){A.Core.O._ReInit.call(this);this.AH._ReInit(
);this.CC._ReInit();},_Mark:function(D){var B;A.Core.O._Mark.call(this,D);if((B=
this.Gs)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.AH)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.CC)._cycle!=D)B._Mark(B._cycle=D);},_className:"Demonstrator::SelectionArea"
};C.AKk={Afz:0,Nq:0,Background:null,T:null,Aix:null,AcX:null,W2:null,AcY:null,Md:
null,Lr:false,Kq:false,Ag:function(Ae){var B;C.A_.Ag.call(this,Ae);var FJ=((Ae&0x10
)===0x10);var Fe=((Ae&0x20)===0x20);var GZ=((Ae&0x40)===0x40);if(!FJ){this.Background.
L(0xFFAAAAAA);this.T.L(0xFF888888);this.Md.Ap(false);this.Md.X(false);}else if(GZ
){this.Background.L(A.iF.AY);this.T.L(A.iF.Bd);this.Md.Ap(true);this.Md.X(true);
}else if(Fe){this.Background.L(0xFFE6DED8);this.T.L(0xFF000000);this.Md.Ap(true);
this.Md.X(true);}else{this.Background.L(0xFFFFFFFF);this.T.L(0xFF000000);this.Md.
Ap(false);this.Md.X(false);}if(!this.Kq&&Fe)A._GetAutoObject(A.abq.LB).M9(this.Afz
);this.Md.BjJ(this.Nq>0);this.Md.Bj8(this.Afz>0);this.Lr=FJ;this.Kq=Fe;},Cc:function(
Ab){if(!this.AW){this.W2.At(A.zW(A.abi.Ady));this.AcX.L(A.iF.AeI);return;}this.Hq=
Ab;if(!!this.AW){this.Nq=this.AW.LD(Ab,26);this.Afz=this.AW.LD(Ab,22);var O6=this.
AW.CE(Ab,1);var AkV=this.AW.HW(Ab,11);var AkM=this.AW.IX(Ab,17);var Ly=this.AW.IX(
Ab,13);var H5=this.AW.AlZ(Ab,14);this.T.R(O6.toFixed());var Ww=A._GetAutoObject(
A.Device.Helper).AJ$(Ly,AkV,AkM);switch(H5){case 0:this.W2.At(A.zW(A.abi.Ady));break;
case 1:this.W2.At(A.zW(A.abi.Aua));break;case 2:this.W2.At(A.zW(A.abi.Aud));break;
default:A.aa8("%s%e",GT,H5);}this.AcY.At(this.W2.Aj);this.AcX.L(A._GetAutoObject(
A.abk.Assessment).PY(Ww));this.Am();}},_Init:function(aArg){C.A_._Init.call(this
,aArg);A.abh.AH._Init.call(this.Background={I:this},0);A.kh.CR._Init.call(this.T={
I:this},0);A.abh.Ak._Init.call(this.Aix={I:this},0);A.abh.Ak._Init.call(this.AcX={
I:this},0);A.abh.Ak._Init.call(this.W2={I:this},0);A.abh.Ak._Init.call(this.AcY={
I:this},0);C.Md._Init.call(this.Md={I:this},0);this.__proto__=C.AKk;this.Background.
AV(0x3F);this.Background.G(B$);this.T.AV(0x3F);this.T.G(Jt);this.T.R(A.z2(A.abg.
HA));this.T.A2(0x11);this.T.L(0xFF000000);this.Aix.G(IL);this.Aix.L(A.iF.Text);this.
AcX.G(IL);this.AcX.L(A.iF.EY);this.W2.G(IL);this.AcY.G(IL);this.AcY.L(A.iF.Text);
this.AcY.Ct(1);this.Md.AV(0x3);this.Md.G(OK);this.J(this.Background,0);this.J(this.
T,0);this.J(this.Aix,0);this.J(this.AcX,0);this.J(this.W2,0);this.J(this.AcY,0);
this.J(this.Md,0);this.T.Aa(A.zW(A.eV.Aw));this.T.BD(A.zW(A.eV.AB));this.T.Db(A.
zW(A.eV.Cx));this.Aix.At(A.zW(C.AFk));this.AcX.At(A.zW(C.ATe));this.W2.At(A.zW(A.
abi.Ady));this.AcY.At(A.zW(A.abi.Ady));},_Done:function(){this.__proto__=C.A_;this.
Background._Done();this.T._Done();this.Aix._Done();this.AcX._Done();this.W2._Done(
);this.AcY._Done();this.Md._Done();C.A_._Done.call(this);},_ReInit:function(){C.
A_._ReInit.call(this);this.Background._ReInit();this.T._ReInit();this.Aix._ReInit(
);this.AcX._ReInit();this.W2._ReInit();this.AcY._ReInit();this.Md._ReInit();},_Mark:
function(D){var B;C.A_._Mark.call(this,D);if((B=this.Background)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.T)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Aix)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.AcX)._cycle!=D)B._Mark(B._cycle=D);if((B=this.W2
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AcY)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Md)._cycle!=D)B._Mark(B._cycle=D);},_className:"Demonstrator::AnimalMenuItem"
};C.Md={TN:null,VQ:null,Aj8:null,Na:null,NX:null,YV:null,Abz:null,Auw:false,Av9:
false,C3:function(){this.Am();},Ag:function(Ae){var B;A.Core.O.Ag.call(this,Ae);
var GZ=((Ae&0x40)===0x40);if(GZ){this.Na.L(A.iF.Bd);this.NX.L(A.iF.Bd);}else{this.
Na.L(A.iF.Text);this.NX.L(A.iF.Text);}if(this.Av9){this.Na.R(A.z2(A.abg.Bk1));if(
this.Auw){this.TN.At(A.zW(C.AE5));this.VQ.At(A.zW(C.AE5));}else{this.TN.At(A.zW(
C.Aq5));this.VQ.At(A.zW(C.Aq5));}}else if(this.Auw){this.TN.At(A.zW(C.AAM));this.
VQ.At(A.zW(C.AAM));this.Na.R(PJ);}var A1c=this.Av9||this.Auw;this.TN.X(A1c);this.
VQ.X(A1c);this.Na.X(A1c);this.YV.Ap(this.Av9);},Bj8:function(E){if(this.Av9===E)
return;this.Av9=E;this.Am();},BjJ:function(E){if(this.Auw===E)return;this.Auw=E;
this.Am();},_Init:function(aArg){A.Core.O._Init.call(this,aArg);A.abh.Ak._Init.call(
this.TN={I:this},0);A.abh.Ak._Init.call(this.VQ={I:this},0);A.abh.Ak._Init.call(
this.Aj8={I:this},0);A.kh.CR._Init.call(this.Na={I:this},0);A.kh.CR._Init.call(this.
NX={I:this},0);A.Core.Bh._Init.call(this.YV={I:this},0);A.Core.Bh._Init.call(this.
Abz={I:this},0);this.__proto__=C.Md;var B;this.G(N1);this.TN.AV(0x6);this.TN.G(CJ
);this.TN.L(A.iF.C1);this.TN.Ct(1);this.VQ.AV(0x6);this.VQ.G(CJ);this.VQ.L(A.iF.
Text);this.Aj8.AV(0xE);this.Aj8.G(Fn);this.Na.AV(0x7);this.Na.G(LW);this.Na.A2(0x11
);this.Na.L(0xFF000000);this.NX.AV(0x3);this.NX.G(OL);this.NX.R(A.z2(A.abg.Temperature
));this.NX.A2(0x11);this.NX.L(0xFF000000);this.YV.AV(0x3);this.YV.KB(KH);this.YV.
KA(OM);this.YV.DN(Ne);this.YV.D5(ON);this.Abz.AV(0x3);this.Abz.KB(Ss);this.Abz.KA(
T$);this.Abz.DN(Zf);this.Abz.D5(Wb);this.J(this.TN,0);this.J(this.VQ,0);this.J(this.
Aj8,0);this.J(this.Na,0);this.J(this.NX,0);this.J(this.YV,0);this.J(this.Abz,0);
this.TN.At(A.zW(C.Aq5));this.VQ.At(A.zW(C.Aq5));this.Aj8.At(A.zW(C.ASv));this.Na.
Aa(A.zW(A.eV.Aw));this.Na.BD(A.zW(A.eV.AB));this.Na.Db(A.zW(A.eV.Cx));this.NX.Aa(
A.zW(A.eV.Aw));this.NX.BD(A.zW(A.eV.AB));this.NX.Db(A.zW(A.eV.Cx));this.YV.K$=[B=
A._GetAutoObject(A.abq.LB),B.Bbu];this.Abz.K$=[B=A._GetAutoObject(A.abq.LB),B.Bbf
];},_Done:function(){this.__proto__=A.Core.O;this.TN._Done();this.VQ._Done();this.
Aj8._Done();this.Na._Done();this.NX._Done();this.YV._Done();this.Abz._Done();A.Core.
O._Done.call(this);},_ReInit:function(){A.Core.O._ReInit.call(this);this.TN._ReInit(
);this.VQ._ReInit();this.Aj8._ReInit();this.Na._ReInit();this.NX._ReInit();this.
YV._ReInit();this.Abz._ReInit();this.NX.R(A.z2(A.abg.Temperature));this.Na.Aa(A.
zW(A.eV.Aw));this.Na.BD(A.zW(A.eV.AB));this.Na.Db(A.zW(A.eV.Cx));this.NX.Aa(A.zW(
A.eV.Aw));this.NX.BD(A.zW(A.eV.AB));this.NX.Db(A.zW(A.eV.Cx));this.C3();},_Mark:
function(D){var B;A.Core.O._Mark.call(this,D);if((B=this.TN)._cycle!=D)B._Mark(B.
_cycle=D);if((B=this.VQ)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Aj8)._cycle!=D
)B._Mark(B._cycle=D);if((B=this.Na)._cycle!=D)B._Mark(B._cycle=D);if((B=this.NX).
_cycle!=D)B._Mark(B._cycle=D);if((B=this.YV)._cycle!=D)B._Mark(B._cycle=D);if((B=
this.Abz)._cycle!=D)B._Mark(B._cycle=D);},_className:"Demonstrator::AnimalItemAction"
};C.XC={C3:function(){this.Am();},Ag:function(Ae){C.ApS.Ag.call(this,Ae);if(!this.
Text.String.length)this.Text.R(A.z2(A.abg.Filter));},A5i:function(H){var DZ=(A.Core.
BR.isPrototypeOf(H)?H:null);if(!!DZ)A._GetAutoObject(A.abq.AiR).E6(DZ.D4);},A5g:
function(H){A._GetAutoObject(A.abq.AiR).Delete();},_Init:function(aArg){C.ApS._Init.
call(this,aArg);this.__proto__=C.XC;this.Ak.At(A.zW(C.Filter));},_ReInit:function(
){C.ApS._ReInit.call(this);this.C3();},_className:"Demonstrator::FilterView"};C.
Aan={Di:null,Xv:null,RG:null,Xw:null,Ix:null,XT:null,AlM:null,Aq:null,OV:null,MV:
null,Aam:null,FO:0,Auj:0,AD_:false,Ag:function(Ae){A.Core.O.Ag.call(this,Ae);this.
RG.R(this.Aq.Format(IM));if(this.AD_){this.RG.X(false);this.XT.X(false);this.Ix.
X(false);this.Xw.X(false);this.OV.Ap(true);this.OV.X(true);this.MV.Ct(2);this.MV.
AQX(2);this.MV.G(A.aaP(this.MV.M,this.OV.M[2]));}else{this.RG.X(true);this.XT.X(
true);this.Ix.X(true);this.Xw.X(true);this.OV.Ap(false);this.OV.X(false);this.MV.
Ct(3);this.MV.AQX(3);this.MV.G(A.aaP(this.MV.M,this.RG.M[2]));}},BwD:function(H){
this.BjP(!this.AD_);},AcA:function(H){var F;if(!!this.Di)this.TD((F=this.Di,F[1].
call(F[0])));},Abk:function(E){if(A.z_(this.Di,E))return;if(!!this.Di)A.zn([this
,this.AcA],this.Di,0);this.Di=E;if(!!E)A.za([this,this.AcA],E,0);if(!!E)A.ow([this
,this.AcA],this);},TD:function(E){if(this.FO===E)return;this.FO=E;this.Aq.Initialize(
this.FO);this.BxI(this);this.Am();},AhP:function(H){var B;var F;var BP=this.FO;var
Aii=this.Aam.C$(this.Auj);this.AHn(Aii);if(this.Aq.Year>2100)this.Aq.Initialize2(
2100,12,31,0,0,0);this.TD(((B=(this.Aq.JL()|0))<0)?B+0x100000000:B);if(this.FO!==
BP){if(!!this.Di)(F=this.Di,F[2].call(F[0],this.FO));A.aat(this.Di,0);}},AhB:function(
H){var B;var F;var BP=this.FO;var Aii=this.Aam.C$(this.Auj);this.AI8(Aii);if(this.
Aq.Year<2000)this.Aq.Initialize2(2000,1,1,0,0,0);this.TD(((B=(this.Aq.JL()|0))<0
)?B+0x100000000:B);if(this.FO!==BP){if(!!this.Di)(F=this.Di,F[2].call(F[0],this.
FO));A.aat(this.Di,0);}},Bjo:function(E){if(this.Auj===E)return;this.Auj=E;},BjP:
function(E){if(this.AD_===E)return;this.AD_=E;this.Am();},Bxb:function(H){var B;
var F;var BP=this.FO;this.Aq.Lb(this.OV.ACD());this.Aq.TG(this.OV.ACH());this.Aq.
Year=this.OV.Aqd();this.TD(((B=(this.Aq.JL()|0))<0)?B+0x100000000:B);if(this.FO!==
BP){if(!!this.Di)(F=this.Di,F[2].call(F[0],this.FO));A.aat(this.Di,0);}},BxI:function(
H){this.OV.Lb(this.Aq.Gu);this.OV.TG(this.Aq.G6);this.OV.AjP(this.Aq.Year);},AHn:
function(Axk){var B;switch(Axk){case 0:if(this.Aq.Gu<this.Aq.YA())this.Aq.Lb(this.
Aq.Gu+1);else{this.Aq.Lb(1);this.AHn(2);}break;case 1:if((this.Aq.Gu+7)<=this.Aq.
YA())this.Aq.Lb(this.Aq.Gu+7);else{this.Aq.Lb((7-this.Aq.YA())+this.Aq.Gu);this.
AHn(2);}break;case 2:if(this.Aq.G6<12)this.Aq.TG(this.Aq.G6+1);else{this.Aq.TG(1
);this.AHn(3);}break;case 3:this.Aq.Year++;break;default:throw new Error(Ua+Axk.
toFixed());}},AI8:function(Axk){var B;switch(Axk){case 0:if(this.Aq.Gu>1)this.Aq.
Lb(this.Aq.Gu-1);else{this.AI8(2);this.Aq.Lb(this.Aq.YA());}break;case 1:if((this.
Aq.Gu-7)>0)this.Aq.Lb(this.Aq.Gu-7);else{this.AI8(2);this.Aq.Lb(this.Aq.YA()-(7-
this.Aq.Gu));}break;case 2:if(this.Aq.G6>1)this.Aq.TG(this.Aq.G6-1);else{this.Aq.
TG(12);this.AI8(3);}break;case 3:this.Aq.Year--;break;default:throw new Error(Ua+
Axk.toFixed());}},Bhs:function(){return this.Auj;},_Init:function(aArg){A.Core.O.
_Init.call(this,aArg);A.abh.Text._Init.call(this.Xv={I:this},0);A.abh.Text._Init.
call(this.RG={I:this},0);C.At_._Init.call(this.Xw={I:this},0);A.abx.Ix._Init.call(
this.Ix={I:this},0);C.At_._Init.call(this.XT={I:this},0);A.abh.Ak._Init.call(this.
AlM={I:this},0);A.Core.Bu._Init.call(this.Aq={I:this},0);C.ALu._Init.call(this.OV={
I:this},0);C.At_._Init.call(this.MV={I:this},0);C.Aam._Init.call(this.Aam={I:this
},0);this.__proto__=C.Aan;this.G(Zg);this.Xv.G(Wc);this.Xv.A2(0x11);this.Xv.R(A.
z2(A.abg.Date));this.Xv.L(0xFF000000);this.RG.G(Zh);this.RG.A2(0x11);this.RG.R(Ub
);this.RG.L(0xFF000000);this.Xw.G(Zi);this.Xw.A6Q(200);this.Ix.G(Zj);this.Ix.Avf(
120);this.Ix.GL=30;this.Ix.A6z(A.iF.C1);this.Ix.Bip(A.iF.C1);this.Ix.Bit(A.iF.C1
);this.Ix.A6A(A.iF.Text);this.Ix.Biu(A.iF.Text);this.Ix.Biq(A.iF.AY);this.Ix.Biv(
A.iF.Bd);this.Ix.Bis(A.iF.AY);this.Ix.Bir(A.iF.Text);this.XT.G(Uc);this.XT.A6Q(200
);this.AlM.G(Wd);this.OV.G(QV);this.MV.G(Zk);this.MV.Ct(3);this.MV.AQX(3);this.MV.
L(A.iF.Text);this.J(this.Xv,0);this.J(this.RG,0);this.J(this.Xw,0);this.J(this.Ix
,0);this.J(this.XT,0);this.J(this.AlM,0);this.J(this.OV,0);this.J(this.MV,0);this.
Xv.Aa(A.zW(A.eV.AB));this.RG.Aa(A.zW(A.eV.Gw));this.Xw.AQ=[this,this.AhB];this.Xw.
DC(A.zW(C.AKT));this.Xw.AQY(A.zW(C.AKU));this.Ix.Au([this,this.Bhs,this.Bjo]);this.
Ix.BiA(this.Aam);this.Ix.AQH(A.zW(A.eV.AB));this.Ix.A6O(A.zW(A.eV.AB));this.XT.AQ=[
this,this.AhP];this.XT.DC(A.zW(C.AKV));this.XT.AQY(A.zW(C.AKW));this.AlM.At(A.zW(
C.ANT));this.OV.Dn=[this,this.Bxb];this.MV.AQ=[this,this.BwD];this.MV.DC(A.zW(A.
abi.AlD));this.MV.AQY(A.zW(A.abi.AlD));},_Done:function(){this.__proto__=A.Core.
O;this.Xv._Done();this.RG._Done();this.Xw._Done();this.Ix._Done();this.XT._Done(
);this.AlM._Done();this.Aq._Done();this.OV._Done();this.MV._Done();this.Aam._Done(
);A.Core.O._Done.call(this);},_ReInit:function(){A.Core.O._ReInit.call(this);this.
Xv._ReInit();this.RG._ReInit();this.Xw._ReInit();this.Ix._ReInit();this.XT._ReInit(
);this.AlM._ReInit();this.Aq._ReInit();this.OV._ReInit();this.MV._ReInit();this.
Aam._ReInit();this.Xv.R(A.z2(A.abg.Date));this.Xv.Aa(A.zW(A.eV.AB));this.RG.Aa(A.
zW(A.eV.Gw));this.Ix.AQH(A.zW(A.eV.AB));this.Ix.A6O(A.zW(A.eV.AB));},_Mark:function(
D){var B;A.Core.O._Mark.call(this,D);if((B=this.Di)&&((B=B[0])._cycle!=D))B._Mark(
B._cycle=D);if((B=this.Xv)._cycle!=D)B._Mark(B._cycle=D);if((B=this.RG)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.Xw)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ix
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.XT)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.AlM)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Aq)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.OV)._cycle!=D)B._Mark(B._cycle=D);if((B=this.MV)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Aam)._cycle!=D)B._Mark(B._cycle=D);},_className:"Demonstrator::DateSelector"
};C.At_={C5:null,AvK:null,ALH:null,AQ:null,Bj:null,Dh:null,CV:null,Hi:null,XO:null
,ANv:0,Tc:0,ARy:0,AP:0xFFFFFFFF,AZC:false,Lr:false,Kq:false,P1:false,Ag:function(
Ae){var B;A.abo.AgN.Ag.call(this,Ae);var FJ=((Ae&0x10)===0x10);var Fe=((Ae&0x20)===
0x20);var Fd=this.CV.Down&&this.CV.XW;if(!FJ)this.Hi.At(this.ALH);else if(Fd){this.
Hi.At(this.AvK);this.Hi.Ct(this.ARy);}else{this.Hi.At(this.C5);this.Hi.Ct(this.Tc
);}this.Hi.L(this.AP);this.Lr=FJ;this.Kq=Fe;this.P1=Fd;},P0:function(H){this.Am(
);A.ow(this.AQ,this);},AhZ:function(H){if(this.CV.Down)return;if(this.Dh.Abs)return;
this.Am();if(this.Bj.Bw){A.ow(this.AQ,this);this.Bj.Ap(false);}this.Bj.Ap(true);
},Bbd:function(H){this.Am();},AyO:function(H){if(!this.CV.XW)return;if(this.CV.NB
)return;if((this.XO.US<=0)||(this.CV.Jk<this.XO.US)){if(this.CV.Jk>=this.Bj.US)A.
ow(this.AQ,this);else this.Bj.Ap(true);}this.XO.Ap(false);},AyN:function(H){this.
XO.Ap(true);if(this.Bj.Bw){A.ow(this.AQ,this);this.Bj.Ap(false);}},DC:function(E
){if(this.C5===E)return;this.C5=E;this.Am();},AQY:function(E){if(this.AvK===E)return;
this.AvK=E;this.Am();},A0x:function(H){if(!this.CV.XW)return;if(this.CV.NB)return;
if((this.ANv>=0)&&this.AZC){this.AZC=false;this.XO.Ap(true);A.ow(this.AQ,this);}
},A6Q:function(E){if(this.ANv===E)return;this.ANv=E;this.XO.VL(E);},Bv9:function(
H){this.AZC=true;},Ct:function(E){if(this.Tc===E)return;this.Tc=E;this.Am();},AQX:
function(E){if(this.ARy===E)return;this.ARy=E;this.Am();},L:function(E){if(this.
AP===E)return;this.AP=E;this.Am();},_Init:function(aArg){A.abo.AgN._Init.call(this
,aArg);A.Core.Timer._Init.call(this.Bj={I:this},0);A.Core.BR._Init.call(this.Dh={
I:this},0);A.Core.Bh._Init.call(this.CV={I:this},0);A.abh.Ak._Init.call(this.Hi={
I:this},0);A.Core.Timer._Init.call(this.XO={I:this},0);this.__proto__=C.At_;this.
G(OO);this.Bj.QB(0);this.Bj.VL(50);this.Dh.Filter=149;this.CV.AV(0x3F);this.CV.KB(
PK);this.CV.KA(Ud);this.CV.DN(Zl);this.CV.D5(KH);this.CV.Aei=0xF;this.CV.ADp(100
);this.Hi.AV(0x3F);this.Hi.G(OO);this.Hi.A2(0x12);this.XO.QB(0);this.J(this.CV,0
);this.J(this.Hi,0);this.Bj.M$=[this,this.P0];this.Dh.BS=[this,this.AhZ];this.CV.
ACM=[this,this.Bbd];this.CV.Auy=[this,this.Bbd];this.CV.DV=[this,this.A0x];this.
CV.K$=[this,this.AyO];this.CV.BS=[this,this.AyN];this.Hi.At(A.zW(A.abj.K2));this.
C5=A.zW(A.abj.K2);this.AvK=A.zW(A.abj.K2);this.ALH=A.zW(A.abj.K2);this.XO.M$=[this
,this.Bv9];},_Done:function(){this.__proto__=A.abo.AgN;this.Bj._Done();this.Dh._Done(
);this.CV._Done();this.Hi._Done();this.XO._Done();A.abo.AgN._Done.call(this);},_ReInit:
function(){A.abo.AgN._ReInit.call(this);this.Bj._ReInit();this.Dh._ReInit();this.
CV._ReInit();this.Hi._ReInit();this.XO._ReInit();},_Mark:function(D){var B;A.abo.
AgN._Mark.call(this,D);if((B=this.C5)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.
AvK)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.ALH)&&(B._cycle!=D))B._Mark(B.
_cycle=D);if((B=this.AQ)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.Bj
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Dh)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.CV)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Hi)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.XO)._cycle!=D)B._Mark(B._cycle=D);},_className:"Demonstrator::IconButton"
};C.AKy={Pi:null,T:null,Adr:null,_Init:function(aArg){C.Fk._Init.call(this,aArg);
A.abh.AH._Init.call(this.Pi={I:this},0);A.abh.Text._Init.call(this.T={I:this},0);
C.Adr._Init.call(this.Adr={I:this},0);this.__proto__=C.AKy;this.G(We);this.Pi.AV(
0x1D);this.Pi.G(B$);this.Pi.L(0xFFE6E6E6);this.T.AV(0x1D);this.T.G(Zm);this.T.A2(
0x11);this.T.R(A.z2(A.abg.A2f));this.T.L(0xFF000000);this.Adr.G(Zn);this.J(this.
Pi,0);this.J(this.T,0);this.J(this.Adr,0);this.T.Aa(A.zW(A.eV.Aw));},_Done:function(
){this.__proto__=C.Fk;this.Pi._Done();this.T._Done();this.Adr._Done();C.Fk._Done.
call(this);},_ReInit:function(){C.Fk._ReInit.call(this);this.Pi._ReInit();this.T.
_ReInit();this.Adr._ReInit();this.T.R(A.z2(A.abg.A2f));this.T.Aa(A.zW(A.eV.Aw));
},_Mark:function(D){var B;C.Fk._Mark.call(this,D);if((B=this.Pi)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.T)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Adr)._cycle!=
D)B._Mark(B._cycle=D);},_className:"Demonstrator::AnimalsHeader"};C.As9={Pi:null
,T:null,AdT:null,AdP:null,Bh:null,DH:Wf,Ajt:false,Ag:function(Ae){C.Fk.Ag.call(this
,Ae);if(this.Ajt){this.AdP.X(true);this.AdT.X(false);}else{this.AdP.X(false);this.
AdT.X(true);}},BwZ:function(H){if(this.Ajt)A.ow(this.Agx,this);else A.ow(this.Agy
,this);this.ADs(!this.Ajt);},S:function(E){if(this.DH===E)return;this.DH=E;this.
T.R(E);},ADs:function(E){if(this.Ajt===E)return;this.Ajt=E;this.Am();},_Init:function(
aArg){C.Fk._Init.call(this,aArg);A.abh.AH._Init.call(this.Pi={I:this},0);A.abh.Text.
_Init.call(this.T={I:this},0);A.abh.Ak._Init.call(this.AdT={I:this},0);A.abh.Ak.
_Init.call(this.AdP={I:this},0);A.Core.Bh._Init.call(this.Bh={I:this},0);this.__proto__=
C.As9;this.G(B$);this.Pi.AV(0x1D);this.Pi.G(B$);this.Pi.L(0xFFE6E6E6);this.T.AV(
0x1D);this.T.G(Wg);this.T.A2(0x11);this.T.R(Wf);this.T.L(0xFF000000);this.AdT.G(
St);this.AdT.X(false);this.AdP.AV(0x3A);this.AdP.G(St);this.Bh.KB(KH);this.Bh.KA(
Zo);this.Bh.DN(Zp);this.Bh.D5(ON);this.J(this.Pi,0);this.J(this.T,0);this.J(this.
AdT,0);this.J(this.AdP,0);this.J(this.Bh,0);this.T.Aa(A.zW(A.eV.Aw));this.AdT.At(
A.zW(C.AKB));this.AdP.At(A.zW(C.AiB));this.Bh.K$=[this,this.BwZ];},_Done:function(
){this.__proto__=C.Fk;this.Pi._Done();this.T._Done();this.AdT._Done();this.AdP._Done(
);this.Bh._Done();C.Fk._Done.call(this);},_ReInit:function(){C.Fk._ReInit.call(this
);this.Pi._ReInit();this.T._ReInit();this.AdT._ReInit();this.AdP._ReInit();this.
Bh._ReInit();this.T.Aa(A.zW(A.eV.Aw));},_Mark:function(D){var B;C.Fk._Mark.call(
this,D);if((B=this.Pi)._cycle!=D)B._Mark(B._cycle=D);if((B=this.T)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.AdT)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AdP)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.Bh)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Demonstrator::AccordionHeader"};C.A_={AW:null,AQ:null,CV:null,Hq:-1,YD:function(
E){if(this.AW===E)return;this.AW=E;},Cc:function(Ab){A.aa8("%s",AbO);},YG:function(
E){if(A.z$(this.AQ,E))return;this.AQ=E;},AyO:function(H){if(!this.CV.XW)return;if(
this.CV.NB)return;A.ow(this.AQ,this);},_Init:function(aArg){A.Core.O._Init.call(
this,aArg);A.Core.Bh._Init.call(this.CV={I:this},0);this.__proto__=C.A_;this.G(B$
);this.CV.AV(0x3F);this.CV.KB(ON);this.CV.KA(Zp);this.CV.DN(Zo);this.CV.D5(KH);this.
CV.Aei=0xF;this.CV.ADp(100);this.J(this.CV,0);this.CV.K$=[this,this.AyO];},_Done:
function(){this.__proto__=A.Core.O;this.CV._Done();A.Core.O._Done.call(this);},_ReInit:
function(){A.Core.O._ReInit.call(this);this.CV._ReInit();},_Mark:function(D){var
B;A.Core.O._Mark.call(this,D);if((B=this.AW)&&(B._cycle!=D))B._Mark(B._cycle=D);
if((B=this.AQ)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.CV)._cycle!=
D)B._Mark(B._cycle=D);},_className:"Demonstrator::ListItem"};C.Fk={APW:null,Agy:
null,Agx:null,BjM:function(E){if(A.z$(this.APW,E))return;this.APW=E;},A6Y:function(
E){if(A.z$(this.Agy,E))return;this.Agy=E;},A6X:function(E){if(A.z$(this.Agx,E))return;
this.Agx=E;},_Init:function(aArg){A.Core.O._Init.call(this,aArg);this.__proto__=
C.Fk;this.G(B$);},_Mark:function(D){var B;A.Core.O._Mark.call(this,D);if((B=this.
APW)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.Agy)&&((B=B[0])._cycle
!=D))B._Mark(B._cycle=D);if((B=this.Agx)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=
D);},_className:"Demonstrator::ListHeader"};C.ALu={Dn:null,Aab:null,V5:null,V4:null
,V3:null,M5:null,M4:null,Ky:null,Lr:false,Kq:false,BxP:false,Ag:function(Ae){var
B;A.abo.AgL.Ag.call(this,Ae);var FJ=((Ae&0x10)===0x10);var Fe=((Ae&0x20)===0x20);
var Bai=(this.V3.Y0||this.V4.Y0)||this.V5.Y0;if(Bai)this.Aab.L(A.iF.Text);else this.
Aab.L(A.iF.Ba);this.Lr=FJ;this.Kq=Fe;this.BxP=Bai;},AyJ:function(H){this.Am();if((
!this.V3.Y0&&!this.V4.Y0)&&!this.V5.Y0){var Us=this.AIg(this.ACH(),this.Aqd());var
Ach=this.ACD();this.Ky.Jp(Us);if(Ach>Us)this.Lb(Us);A.ow(this.Dn,this);}},A0N:function(
H){this.Am();},Bh8:function(H){var B;var FW=this.M5.GK;var CA=(A.abh.Text.isPrototypeOf(
B=this.M5.Cd)?B:null);if(!CA)return;CA.R(A.aaq(FW+1900,4,10));CA.Aa(A.zW(A.eV.Aw
));CA.L(A.iF.Text);CA.A2(0x12);CA.G(A.aaN(CA.M,[(B=this.M5.M)[2]-B[0],this.M5.GL
]));},Bh7:function(H){var B;var FW=this.M4.GK;var CA=(A.abh.Text.isPrototypeOf(B=
this.M4.Cd)?B:null);if(!CA)return;CA.R(A.aaq(FW+1,2,10)+Su);CA.Aa(A.zW(A.eV.Aw));
CA.L(A.iF.Text);CA.A2(0x12);CA.G(A.aaN(CA.M,[(B=this.M4.M)[2]-B[0],this.M4.GL]));
},Bh5:function(H){var B;var FW=this.Ky.GK;var CA=(A.abh.Text.isPrototypeOf(B=this.
Ky.Cd)?B:null);if(!CA)return;CA.R(A.aaq(FW+1,2,10)+Su);CA.Aa(A.zW(A.eV.Aw));CA.L(
A.iF.Text);CA.A2(0x12);CA.G(A.aaN(CA.M,[(B=this.Ky.M)[2]-B[0],this.Ky.GL]));},Aqd:
function(){return 1900+((((-this.M5.Bp/this.M5.GL)|0)+2)%200);},AjP:function(E){
if(E<1900)E=1900;if(E>2100)E=2100;this.M5.Gk(((E-1900)-2)*-this.M5.GL);var Us=this.
AIg(this.ACH(),E);this.Ky.Jp(Us);if(this.ACD()>Us)this.Lb(Us);},ACH:function(){return 1+((((-
this.M4.Bp/this.M4.GL)|0)+2)%12);},TG:function(E){if(E<1)E=1;if(E>12)E=12;this.M4.
Gk(((E-1)-2)*-this.M4.GL);var Us=this.AIg(E,this.Aqd());this.Ky.Jp(Us);if(this.ACD(
)>Us)this.Lb(Us);},ACD:function(){return 1+((((-this.Ky.Bp/this.Ky.GL)|0)+2)%this.
Ky.AR);},Lb:function(E){var Us=this.AIg(this.ACH(),this.Aqd());if(E<1)E=1;if(E>Us
)E=Us;this.Ky.Gk(((E-2)-1)*-this.Ky.GL);},AIg:function(AeZ,Ab_){if(AeZ===2){if(!(
Ab_%4)&&(!!(Ab_%100)||!(Ab_%400)))return 29;else return 28;}else if((((AeZ===4)||(
AeZ===6))||(AeZ===9))||(AeZ===11))return 30;else return 31;},_Init:function(aArg
){A.abo.AgL._Init.call(this,aArg);A.abh.CC._Init.call(this.Aab={I:this},0);A.Core.
H2._Init.call(this.V5={I:this},0);A.Core.H2._Init.call(this.V4={I:this},0);A.Core.
H2._Init.call(this.V3={I:this},0);A.Core.CI._Init.call(this.M5={I:this},0);A.Core.
CI._Init.call(this.M4={I:this},0);A.Core.CI._Init.call(this.Ky={I:this},0);this.
__proto__=C.ALu;this.G(AbP);this.Aab.G(AeO);this.Aab.NR(3);this.Aab.L(0xFFE1E1E1
);this.Aab.X(true);this.V5.G(Zq);this.V5.AQ5(Wh);this.V5.AQJ(0.2);this.V4.G(Wi);
this.V4.AQ5(Wh);this.V4.AQJ(0.2);this.V3.G(AeP);this.V3.AQ5(Wh);this.V3.AQJ(0.2);
this.M5.G(Zq);this.M5.AQF(true);this.M5.Gk(60);this.M5.Ad6(30);this.M5.Jp(200);this.
M4.G(Wi);this.M4.AQF(true);this.M4.Gk(60);this.M4.Ad6(30);this.M4.Jp(12);this.Ky.
G(AeP);this.Ky.AQF(true);this.Ky.Gk(60);this.Ky.Ad6(30);this.Ky.Jp(31);this.J(this.
Aab,0);this.J(this.V5,0);this.J(this.V4,0);this.J(this.V3,0);this.J(this.M5,0);this.
J(this.M4,0);this.J(this.Ky,0);this.V5.Yz=[this,this.AyJ];this.V5.R$=[this,this.
A0N];this.V4.Yz=[this,this.AyJ];this.V4.R$=[this,this.A0N];this.V3.Yz=[this,this.
AyJ];this.V3.R$=[this,this.A0N];this.M5.G8=[this,this.Bh8];this.M5.Avq(this.V5);
this.M4.G8=[this,this.Bh7];this.M4.Avq(this.V4);this.Ky.G8=[this,this.Bh5];this.
Ky.Avq(this.V3);},_Done:function(){this.__proto__=A.abo.AgL;this.Aab._Done();this.
V5._Done();this.V4._Done();this.V3._Done();this.M5._Done();this.M4._Done();this.
Ky._Done();A.abo.AgL._Done.call(this);},_ReInit:function(){A.abo.AgL._ReInit.call(
this);this.Aab._ReInit();this.V5._ReInit();this.V4._ReInit();this.V3._ReInit();this.
M5._ReInit();this.M4._ReInit();this.Ky._ReInit();},_Mark:function(D){var B;A.abo.
AgL._Mark.call(this,D);if((B=this.Dn)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);
if((B=this.Aab)._cycle!=D)B._Mark(B._cycle=D);if((B=this.V5)._cycle!=D)B._Mark(B.
_cycle=D);if((B=this.V4)._cycle!=D)B._Mark(B._cycle=D);if((B=this.V3)._cycle!=D)
B._Mark(B._cycle=D);if((B=this.M5)._cycle!=D)B._Mark(B._cycle=D);if((B=this.M4).
_cycle!=D)B._Mark(B._cycle=D);if((B=this.Ky)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Demonstrator::DatePicker"};C.AFk={_class:function(){return A.abj.Aj;},0:{FileName:
"./res_index/DemonstratorWhiteTile.png",Format:A.jt,NoOfFrames:1,FrameSize:[40,40
],FrameDelay:0,_this:null}};C.ATe={_class:function(){return A.abj.Aj;},0:{FileName:
"./res_index/DemonstratorWhiteTileSmall.png",Format:A.jt,NoOfFrames:1,FrameSize:[
40,40],FrameDelay:0,_this:null}};C.AgV={_Init:function(aArg){A.Core.O._Init.call(
this,aArg);this.__proto__=C.AgV;this.G(EV);},_className:"Demonstrator::SelectionAreaContent"
};C.AKr={Y:null,UK:null,S2:null,Bxo:function(H){var B;this.S2.G(A.aaL(this.S2.M,((
B=this.M)[3]-B[1])-((B=this.UK.M)[3]-B[1])));},_Init:function(aArg){C.AgV._Init.
call(this,aArg);A.Core.Y._Init.call(this.Y={I:this},0);C.AJX._Init.call(this.UK={
I:this},0);C.ASY._Init.call(this.S2={I:this},0);this.__proto__=C.AKr;this.Y.AV(0x3F
);this.Y.G(EV);this.Y.Kc(1);this.UK.G(AeQ);this.UK.Ai(true);this.UK.ADs(true);this.
S2.AV(0x3);this.S2.G(JT);this.S2.Ai(true);this.S2.NQ(C.AKk);this.S2.BjH(C.AKy);this.
J(this.Y,0);this.J(this.UK,0);this.J(this.S2,0);this.A$(this.S2);this.Y.Ej=[this
,this.Bxo];this.S2.YD(A._GetAutoObject(A.abq.Ath));},_Done:function(){this.__proto__=
C.AgV;this.Y._Done();this.UK._Done();this.S2._Done();C.AgV._Done.call(this);},_ReInit:
function(){C.AgV._ReInit.call(this);this.Y._ReInit();this.UK._ReInit();this.S2._ReInit(
);},_Mark:function(D){var B;C.AgV._Mark.call(this,D);if((B=this.Y)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.UK)._cycle!=D)B._Mark(B._cycle=D);if((B=this.S2)._cycle!=
D)B._Mark(B._cycle=D);},_className:"Demonstrator::AnimalSelectionActions"};C.UK={
_Init:function(aArg){C.As9._Init.call(this,aArg);this.__proto__=C.UK;this.S(A.z2(
A.abg.A3d));},_ReInit:function(){C.As9._ReInit.call(this);this.S(A.z2(A.abg.A3d)
);},_className:"Demonstrator::ActionsHeader"};C.AJX={Background:null,Z2:null,Aey:
null,Ael:null,Aex:null,Ajl:null,Ajm:null,Ajn:null,Ajo:null,Ajt:false,Agy:function(
H){var B;this.G(A.aaL(this.M,(B=this.Z2.M)[3]-B[1]));},Agx:function(H){this.G(A.
aaL(this.M,240));},ADs:function(E){if(this.Ajt===E)return;this.Ajt=E;this.Z2.ADs(
E);if(E)this.Agy(this);else this.Agx(this);},_Init:function(aArg){A.Core.O._Init.
call(this,aArg);A.abh.AH._Init.call(this.Background={I:this},0);C.UK._Init.call(
this.Z2={I:this},0);C.Aey._Init.call(this.Aey={I:this},0);C.Ael._Init.call(this.
Ael={I:this},0);C.Aex._Init.call(this.Aex={I:this},0);A.abh.DU._Init.call(this.Ajl={
I:this},0);A.abh.DU._Init.call(this.Ajm={I:this},0);A.abh.DU._Init.call(this.Ajn={
I:this},0);A.abh.DU._Init.call(this.Ajo={I:this},0);this.__proto__=C.AJX;this.G(
AeQ);this.Background.AV(0x3F);this.Background.G(AeQ);this.Z2.AV(0x1D);this.Z2.G(
B$);this.Aey.G(AeR);this.Ael.G(Li);this.Aex.G(Ag_);this.Ajl.DN(Zp);this.Ajl.D5(ON
);this.Ajl.L(A.iF.Ba);this.Ajm.DN(Ane);this.Ajm.D5(N2);this.Ajm.L(A.iF.Ba);this.
Ajn.DN(Wj);this.Ajn.D5(Anf);this.Ajn.L(A.iF.Ba);this.Ajo.DN(Ag$);this.Ajo.D5(Aha
);this.Ajo.L(A.iF.Ba);this.J(this.Background,0);this.J(this.Z2,0);this.J(this.Aey
,0);this.J(this.Ael,0);this.J(this.Aex,0);this.J(this.Ajl,0);this.J(this.Ajm,0);
this.J(this.Ajn,0);this.J(this.Ajo,0);this.Z2.A6Y([this,this.Agy]);this.Z2.A6X([
this,this.Agx]);},_Done:function(){this.__proto__=A.Core.O;this.Background._Done(
);this.Z2._Done();this.Aey._Done();this.Ael._Done();this.Aex._Done();this.Ajl._Done(
);this.Ajm._Done();this.Ajn._Done();this.Ajo._Done();A.Core.O._Done.call(this);}
,_ReInit:function(){A.Core.O._ReInit.call(this);this.Background._ReInit();this.Z2.
_ReInit();this.Aey._ReInit();this.Ael._ReInit();this.Aex._ReInit();this.Ajl._ReInit(
);this.Ajm._ReInit();this.Ajn._ReInit();this.Ajo._ReInit();},_Mark:function(D){var
B;A.Core.O._Mark.call(this,D);if((B=this.Background)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Z2)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Aey)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Ael)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Aex)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.Ajl)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
Ajm)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ajn)._cycle!=D)B._Mark(B._cycle=D);
if((B=this.Ajo)._cycle!=D)B._Mark(B._cycle=D);},_className:"Demonstrator::ActionsMenu"
};C.Mc={AaN:null,Agh:null,Bh:null,DU:null,AhW:function(H){},AXS:function(s){this.
AhW(s);},_Init:function(aArg){A.Core.O._Init.call(this,aArg);A.abh.Ak._Init.call(
this.AaN={I:this},0);A.abh.Ak._Init.call(this.Agh={I:this},0);A.Core.Bh._Init.call(
this.Bh={I:this},0);A.abh.DU._Init.call(this.DU={I:this},0);this.__proto__=C.Mc;
this.G(B$);this.AaN.G(AbQ);this.AaN.L(A.iF.Text);this.Agh.G(Ue);this.Agh.L(A.iF.
Text);this.Agh.Ct(0);this.Bh.KB(KH);this.Bh.KA(OM);this.Bh.DN(Ne);this.Bh.D5(ON);
this.DU.DN(Ne);this.DU.D5(OM);this.DU.L(A.iF.Ba);this.J(this.AaN,0);this.J(this.
Agh,0);this.J(this.Bh,0);this.J(this.DU,0);this.AaN.At(A.zW(A.abj.K2));this.Agh.
At(A.zW(A.abj.ARo));this.Bh.BS=[this,this.AXS];},_Done:function(){this.__proto__=
A.Core.O;this.AaN._Done();this.Agh._Done();this.Bh._Done();this.DU._Done();A.Core.
O._Done.call(this);},_ReInit:function(){A.Core.O._ReInit.call(this);this.AaN._ReInit(
);this.Agh._ReInit();this.Bh._ReInit();this.DU._ReInit();},_Mark:function(D){var
B;A.Core.O._Mark.call(this,D);if((B=this.AaN)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Agh)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Bh)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.DU)._cycle!=D)B._Mark(B._cycle=D);},_className:"Demonstrator::ActionsItem"
};C.Ael={AeF:null,AhW:function(H){var Afz=A.aa2(this.AeF.String,0,10);var BxD=A.
_GetAutoObject(A.abq.LB).Azl(Afz);if(BxD){Afz=Afz+1;this.AeF.R(Afz.toFixed());}}
,_Init:function(aArg){C.Mc._Init.call(this,aArg);C.Ap7._Init.call(this.AeF={I:this
},0);this.__proto__=C.Ael;this.AeF.G(Ang);this.AeF.R(Anh);this.AeF.L(A.iF.Text);
this.J(this.AeF,-1);this.AaN.At(A.zW(A.abi.Al9));},_Done:function(){this.__proto__=
C.Mc;this.AeF._Done();C.Mc._Done.call(this);},_ReInit:function(){C.Mc._ReInit.call(
this);this.AeF._ReInit();},_Mark:function(D){var B;C.Mc._Mark.call(this,D);if((B=
this.AeF)._cycle!=D)B._Mark(B._cycle=D);},_className:"Demonstrator::ScanAction"};
C.Aey={TZ:null,OE:null,A1s:0,Init:function(aArg){var B;A.za([this,this.BwJ],[B=A.
_GetAutoObject(A.abq.LB),B.AQl,B.AQZ],0);A.za([this,this.AyR],[B=A._GetAutoObject(
A.Device.Device),B.Aqb,B.ArT],0);A.ow([this,this.AyR],this);},Ag:function(Ae){C.
Mc.Ag.call(this,Ae);this.OE.X(!A._GetAutoObject(A.abq.LB).AvL);},AhW:function(H){
var B;A._GetAutoObject(A.abq.LB).Bbf(this);},AyR:function(H){if(A._GetAutoObject(
A.Device.Device).TemperatureUnit!==this.A1s){switch(A._GetAutoObject(A.Device.Device
).TemperatureUnit){case 0:this.OE.R(A.aap(A._GetAutoObject(A.abq.LB).Arh/100,0,1
));break;case 1:{var AsY=A._GetAutoObject(A.Device.Converter).ASz(A._GetAutoObject(
A.abq.LB).Arh/100,0,A._GetAutoObject(A.Device.Device).TemperatureUnit);this.OE.R(
A.aap(AsY,0,1));}break;default:A.aa8("%s%e",Awj,A._GetAutoObject(A.Device.Device
).TemperatureUnit);}this.A1s=A._GetAutoObject(A.Device.Device).TemperatureUnit;}
},Bws:function(H){var B;var AsX=A.aaZ(this.OE.String,0);AsX=A._GetAutoObject(A.Device.
Converter).ASz(AsX,A._GetAutoObject(A.Device.Device).TemperatureUnit,0);AsX*=100;
A._GetAutoObject(A.abq.LB).A7g(Math.round(AsX)|0);},BwJ:function(H){this.Am();},
_Init:function(aArg){C.Mc._Init.call(this,aArg);A.abr.TZ._Init.call(this.TZ={I:this
},0);C.OE._Init.call(this.OE={I:this},0);this.__proto__=C.Aey;var B;this.TZ.G(Awk
);this.TZ.A6U(A.z2(A.abg.A2m));this.OE.G(Akj);this.OE.R(Awl);this.OE.L(A.iF.Text
);this.OE.BiC(true);this.A1s=A._GetAutoObject(A.Device.Device).TemperatureUnit;this.
J(this.TZ,0);this.J(this.OE,0);this.AaN.At(A.zW(A.abi.AaM));this.TZ.Au([B=A._GetAutoObject(
A.abq.LB),B.AQl,B.AQZ]);this.TZ.OnSetAppearance(A._GetAutoObject(A.abz.AAi));this.
OE.Dn=[this,this.Bws];this.Init(aArg);},_Done:function(){this.__proto__=C.Mc;this.
TZ._Done();this.OE._Done();C.Mc._Done.call(this);},_ReInit:function(){C.Mc._ReInit.
call(this);this.TZ._ReInit();this.OE._ReInit();this.TZ.A6U(A.z2(A.abg.A2m));},_Mark:
function(D){var B;C.Mc._Mark.call(this,D);if((B=this.TZ)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.OE)._cycle!=D)B._Mark(B._cycle=D);},_className:"Demonstrator::TemperatureAction"
};C.ApS={Q:null,CC:null,Bh:null,AfT:null,Amc:null,Amb:null,ApX:null,Text:null,Ha:
null,Ak:null,CT:null,ApW:null,ApY:null,An9:false,Bf:function(aSize){this.Ha.G(A.
aaN(this.Ha.M,aSize));this.CC.AvS(1);this.CC.Jl(0,40);this.CC.E5(0,aSize[0]-20,20
,12.5,12.5,-90,90,10);this.CC.E5(0,20,20,12.5,12.5,90,270,10);this.CC.U1(0);},Ag:
function(Ae){var B;var F;A.Core.O.Ag.call(this,Ae);var GZ=((Ae&0x40)===0x40);if(
GZ){if(!!this.Q)this.Text.R((F=this.Q,F[1].call(F[0])));this.AfT.Ap(true);this.Ak.
X(false);}else{if(!!this.Q)this.Text.R((F=this.Q,F[1].call(F[0])));this.AfT.Ap(false
);this.CT.X(false);this.Ak.X(true);}this.An9=GZ;},AhW:function(H){var B;if(!((this.
U&0x80)===0x80))this.Ib().AKJ(this);},A5i:function(H){},A9w:function(s){this.A5i(
s);},Bgw:function(H){var B;var F;if(!this.Q||!(F=this.Q,F[1].call(F[0])).length)
this.CT.G(A.aaP(this.CT.M,A.zT(this.Text.M)[0]));else{this.CT.G(A.aaP(this.CT.M,
this.Text.AMF(0)[2]+2));this.CT.G(A.aaR(this.CT.M,this.Text.AMF(0)[1]));this.CT.
G(A.aaL(this.CT.M,(B=this.Text.AMF(0))[3]-B[1]));}this.Ak.G(A.aaP(this.Ak.M,this.
Text.M[0]-((B=this.Ak.M)[2]-B[0])));},A5g:function(H){},A9v:function(s){this.A5g(
s);},Au:function(E){if(A.z_(this.Q,E))return;if(!!this.Q)A.zn([this,this.OY],this.
Q,0);this.Q=E;if(!!E)A.za([this,this.OY],E,0);if(!!E)A.ow([this,this.OY],this);}
,OY:function(H){this.Am();},Bh_:function(H){var B;if(((this.U&0x80)===0x80))this.
Ib().AAP(this);},Bbn:function(H){},_Init:function(aArg){A.Core.O._Init.call(this
,aArg);A.Graphics.Hl._Init.call(this.CC={I:this},0);A.Core.Bh._Init.call(this.Bh={
I:this},0);A.abm.UT._Init.call(this.AfT={I:this},0);A.Core.BR._Init.call(this.Amc={
I:this},0);A.Core.BR._Init.call(this.Amb={I:this},0);A.Core.BR._Init.call(this.ApX={
I:this},0);A.abh.Text._Init.call(this.Text={I:this},0);A.abh.Ha._Init.call(this.
Ha={I:this},0);A.abh.Ak._Init.call(this.Ak={I:this},0);A.abh.AH._Init.call(this.
CT={I:this},0);A.Core.BR._Init.call(this.ApW={I:this},0);A.Core.BR._Init.call(this.
ApY={I:this},0);this.__proto__=C.ApS;var B;this.G(AeS);this.Bh.AV(0x3F);this.Bh.
KB(KH);this.Bh.KA(Arv);this.Bh.DN(OP);this.Bh.D5(PK);this.AfT.FA(530);this.AfT.VM(
530);this.Amc.Filter=143;this.Amb.Filter=45;this.ApX.Filter=1;this.Text.AV(0x3F);
this.Text.G(AeS);this.Text.I2(true);this.Text.A2(0x12);this.Text.L(0xFFB3B3B3);this.
Ha.G(AeS);this.Ha.L(0xFFB3B3B3);this.Ha.NR(1);this.Ak.G(Sv);this.CT.G(Awm);this.
CT.L(0xFFB3B3B3);this.CT.X(false);this.ApW.Filter=138;this.ApY.Filter=137;this.J(
this.Bh,0);this.J(this.Text,0);this.J(this.Ha,0);this.J(this.Ak,0);this.J(this.CT
,0);this.Bh.K$=[this,this.AhW];this.AfT.Q=[B=this.CT,B.E$,B.X];this.Amc.BS=[this
,this.A9w];this.Amc.DV=[this,this.A9w];this.Amb.BS=[this,this.A9v];this.Amb.DV=[
this,this.A9v];this.ApX.BS=[this,this.Bh_];this.Text.QA([this,this.Bgw]);this.Text.
Aa(A.zW(A.eV.AB));this.Ha.YH(this.CC);this.Ak.At(null);this.ApW.BS=[this,this.Bbn
];this.ApY.BS=[this,this.Bbn];},_Done:function(){this.__proto__=A.Core.O;this.CC.
_Done();this.Bh._Done();this.AfT._Done();this.Amc._Done();this.Amb._Done();this.
ApX._Done();this.Text._Done();this.Ha._Done();this.Ak._Done();this.CT._Done();this.
ApW._Done();this.ApY._Done();A.Core.O._Done.call(this);},_ReInit:function(){A.Core.
O._ReInit.call(this);this.CC._ReInit();this.Bh._ReInit();this.AfT._ReInit();this.
Amc._ReInit();this.Amb._ReInit();this.ApX._ReInit();this.Text._ReInit();this.Ha.
_ReInit();this.Ak._ReInit();this.CT._ReInit();this.ApW._ReInit();this.ApY._ReInit(
);this.Text.Aa(A.zW(A.eV.AB));},_Mark:function(D){var B;A.Core.O._Mark.call(this
,D);if((B=this.Q)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.CC)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.Bh)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
AfT)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Amc)._cycle!=D)B._Mark(B._cycle=D);
if((B=this.Amb)._cycle!=D)B._Mark(B._cycle=D);if((B=this.ApX)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Text)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ha)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.Ak)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
CT)._cycle!=D)B._Mark(B._cycle=D);if((B=this.ApW)._cycle!=D)B._Mark(B._cycle=D);
if((B=this.ApY)._cycle!=D)B._Mark(B._cycle=D);},_className:"Demonstrator::InputView"
};C.Adr={Background:null,XC:null,_Init:function(aArg){A.Core.O._Init.call(this,aArg
);A.abh.AH._Init.call(this.Background={I:this},0);C.XC._Init.call(this.XC={I:this
},0);this.__proto__=C.Adr;var B;this.G(Sw);this.Background.G(Sw);this.XC.AV(0x1D
);this.XC.G(Arw);this.J(this.Background,0);this.J(this.XC,0);this.XC.Au([B=A._GetAutoObject(
A.abq.AiR),B.A5X,B.ADH]);},_Done:function(){this.__proto__=A.Core.O;this.Background.
_Done();this.XC._Done();A.Core.O._Done.call(this);},_ReInit:function(){A.Core.O.
_ReInit.call(this);this.Background._ReInit();this.XC._ReInit();},_Mark:function(
D){var B;A.Core.O._Mark.call(this,D);if((B=this.Background)._cycle!=D)B._Mark(B.
_cycle=D);if((B=this.XC)._cycle!=D)B._Mark(B._cycle=D);},_className:"Demonstrator::FilterRow"
};C.OE={Init:function(aArg){var B;A.za([this,this.AyR],[B=A._GetAutoObject(A.Device.
Device),B.Aqb,B.ArT],0);A.ow([this,this.AyR],this);},Ag:function(Ae){var B;C.Ap7.
Ag.call(this,Ae);var GZ=((this.U&0x40)===0x40);if(!GZ&&(this.String.length>0))this.
Text.R(((this.String+Awn)+A._GetAutoObject(A.abk.Temperature).AkR())+String.fromCharCode(
0x0A));else this.Text.R(this.String+String.fromCharCode(0x0A));if(this.Ef>this.String.
length)this.Ef=this.String.length;},AyR:function(H){this.Am();},_Init:function(aArg
){C.Ap7._Init.call(this,aArg);this.__proto__=C.OE;this.Init(aArg);},_className:"Demonstrator::TemperatureInputView"
};C.Ap7={B6:null,Dn:null,IP:null,Cp:null,AlJ:null,RH:null,Kw:null,Bh:null,Text:null
,CT:null,Aph:null,AqO:null,CC:null,Ha:null,Ap9:null,ApF:null,Apr:null,String:A.jm
,Ef:0,AP:0xFFB3B3B3,ALw:false,Nj:false,Bf:function(aSize){this.Ha.G(A.aaN(this.Ha.
M,aSize));this.CC.AvS(1);this.CC.Jl(0,40);this.CC.E5(0,aSize[0]-20,20,12.5,12.5,-
90,90,10);this.CC.E5(0,20,20,12.5,12.5,90,270,10);this.CC.U1(0);},Ag:function(Ae
){var B;A.abo.I7.Ag.call(this,Ae);if(((Ae&0x40)===0x40))this.IP.Ap(true);else{this.
IP.Ap(false);this.CT.X(false);}},A1D:function(H){var B;var A8=this.Text.M;var Nr=
0;var Ns=0;if(this.CT.Ek[0]<A8[0])Nr=A8[0]-this.CT.Ek[0];if(this.CT.Ek[0]>A8[2])
Nr=A8[2]-this.CT.Ek[0];if(this.CT.Ek[1]<A8[1])Ns=A8[1]-this.CT.Ek[1];if(this.CT.
Et[1]>A8[3])Ns=A8[3]-this.CT.Et[1];if(!!Nr||!!Ns)this.Text.Gk(A.aak(this.Text.Bp
,[Nr,Ns]));Nr=this.Text.Bp[0];Ns=this.Text.Bp[1];var CZ=[(B=this.Text.C_())[2]-B[
0],B[3]-B[1]];if(CZ[0]<=((B=this.Text.M)[2]-B[0]))Nr=0;if(CZ[1]<=((B=this.Text.M
)[3]-B[1]))Ns=0;this.Text.Gk([Nr,Ns]);},Alr:function(H){if(!this.B6)return;var A0$=
this.Text.AES(this.Ef);var pos=this.Text.Aej(A0$);this.CT.D5(A.aaj(pos,[0,this.B6.
Ascent]));this.CT.DN(A.aak(pos,[0,this.B6.Descent]));if(this.IP.Bw){this.IP.Ap(false
);this.IP.Ap(true);}if(this.Nj){A.ow([this,this.A1D],this);this.Nj=false;}},AyN:
function(H){if(!this.A3_(0x80))this.Ib().AKJ(this);var Ex=this.Text.ARs(this.Bh.
HV);var Ux=this.Text.AmW(Ex);if(Ux!==this.Ef){this.Ef=Ux;A.ow([this,this.Alr],this
);this.Nj=true;}},AyH:function(H){if(!this.B6)return;var Ex=this.Text.AES(this.Ef
);if(this.Cp.CP===6){Ex=[Ex[0]-1,Ex[1]];if(this.Text.AmW(Ex)===this.Ef){Ex=[Ex[0
],Ex[1]-1];Ex=[this.Text.AA$(Ex[1]).length,Ex[1]];}}if(this.Cp.CP===7){Ex=[Ex[0]+
1,Ex[1]];if(this.Text.AmW(Ex)===this.Ef){Ex=[Ex[0],Ex[1]+1];Ex=[0,Ex[1]];}}var Ux=
this.Text.AmW(Ex);if(Ux!==this.Ef){this.Ef=Ux;A.ow([this,this.Alr],this);this.Nj=
true;}},Ba9:function(H){if(!this.Ef)return;this.R(A.aa3(this.String,this.Ef-1,1)
);this.Ef=this.Ef-1;this.Nj=true;A.ow(this.Dn,this);},AyI:function(H){if(this.Ef>=
this.String.length)return;this.R(A.aa3(this.String,this.Ef,1));this.Nj=true;A.ow(
this.Dn,this);},Bbc:function(H){if(this.String.length>=15)return;var BuU=this.Kw.
D4;var AsV=String.fromCharCode(BuU);this.R(A.aaW(this.String,AsV,this.Ef));this.
Ef=this.Ef+AsV.length;this.Nj=true;A.ow(this.Dn,this);},R:function(E){if(this.String===
E)return;this.String=E;if(this.Ef>(E.length+1))this.Ef=E.length;this.Text.R(E+String.
fromCharCode(0x0A));this.Nj=true;this.Text.Gk(KH);},L:function(E){if(this.AP===E
)return;this.AP=E;this.Text.L(E);this.CT.L(E);this.Ha.L(E);},Bbo:function(H){if(
this.ALw===false)return;if(this.String.indexOf(String.fromCharCode(0x2E),0)>=0)return;
if(this.String.length>=15)return;this.R(A.aaW(this.String,Su,this.Ef));this.Ef=this.
Ef+1;this.Nj=true;A.ow(this.Dn,this);},BiC:function(E){if(this.ALw===E)return;this.
ALw=E;if(E===false){var Bb3=this.String.indexOf(String.fromCharCode(0x2E),0);if(
Bb3>=0)this.R(A.aaX(this.String,Bb3));}this.Nj=true;this.Text.Gk(KH);},BwA:function(
H){if(this.A3_(0x80))this.Ib().AAP(this);this.Am();},Bwn:function(H){var Ux=this.
String.length;if(Ux!==this.Ef){this.Ef=Ux;A.ow([this,this.Alr],this);this.Nj=true;
}},Bwr:function(H){if(!!this.Ef){this.Ef=0;A.ow([this,this.Alr],this);this.Nj=true;
}},_Init:function(aArg){A.abo.I7._Init.call(this,aArg);A.abm.UT._Init.call(this.
IP={I:this},0);A.Core.BR._Init.call(this.Cp={I:this},0);A.Core.BR._Init.call(this.
AlJ={I:this},0);A.Core.BR._Init.call(this.RH={I:this},0);A.Core.BR._Init.call(this.
Kw={I:this},0);A.Core.Bh._Init.call(this.Bh={I:this},0);A.abh.Text._Init.call(this.
Text={I:this},0);A.abh.DU._Init.call(this.CT={I:this},0);A.Core.BR._Init.call(this.
Aph={I:this},0);A.Core.BR._Init.call(this.AqO={I:this},0);A.Graphics.Hl._Init.call(
this.CC={I:this},0);A.abh.Ha._Init.call(this.Ha={I:this},0);A.Core.BR._Init.call(
this.Ap9={I:this},0);A.Core.BR._Init.call(this.ApF={I:this},0);A.Core.BR._Init.call(
this.Apr={I:this},0);this.__proto__=C.Ap7;var B;this.G(AeS);this.IP.B1=false;this.
IP.Cv=true;this.IP.FA(500);this.IP.VM(500);this.Cp.Filter=147;this.AlJ.Filter=45;
this.RH.Filter=44;this.Kw.Filter=143;this.Bh.AV(0x3F);this.Bh.KB(PK);this.Bh.KA(
OP);this.Bh.DN(Arv);this.Bh.D5(KH);this.Bh.ADp(3);this.Text.AV(0x3F);this.Text.G(
AeS);this.Text.KD(false);this.Text.A2(0x12);this.Text.R(A.jm);this.Text.L(0xFFB3B3B3
);this.CT.DN(Awo);this.CT.D5(Awp);this.CT.A7s(2);this.CT.A7r(2);this.CT.L(0xFFB3B3B3
);this.CT.X(false);this.Aph.Filter=138;this.AqO.Filter=137;this.Ha.G(AeS);this.Ha.
L(0xFFB3B3B3);this.Ha.NR(1);this.Ap9.Filter=1;this.ApF.Filter=41;this.Apr.Filter=
42;this.J(this.Bh,0);this.J(this.Text,0);this.J(this.CT,0);this.J(this.Ha,0);this.
IP.Q=[B=this.CT,B.E$,B.X];this.Cp.BS=[this,this.AyH];this.Cp.DV=[this,this.AyH];
this.AlJ.BS=[this,this.Ba9];this.AlJ.DV=[this,this.Ba9];this.RH.BS=[this,this.AyI
];this.RH.DV=[this,this.AyI];this.Kw.BS=[this,this.Bbc];this.Kw.DV=[this,this.Bbc
];this.Bh.BS=[this,this.AyN];this.Text.QA([this,this.Alr]);this.Text.Aa(A.zW(A.eV.
AB));this.B6=A.zW(A.eV.AB);this.Aph.BS=[this,this.Bbo];this.AqO.BS=[this,this.Bbo
];this.Ha.YH(this.CC);this.Ap9.BS=[this,this.BwA];this.ApF.BS=[this,this.Bwr];this.
Apr.BS=[this,this.Bwn];},_Done:function(){this.__proto__=A.abo.I7;this.IP._Done(
);this.Cp._Done();this.AlJ._Done();this.RH._Done();this.Kw._Done();this.Bh._Done(
);this.Text._Done();this.CT._Done();this.Aph._Done();this.AqO._Done();this.CC._Done(
);this.Ha._Done();this.Ap9._Done();this.ApF._Done();this.Apr._Done();A.abo.I7._Done.
call(this);},_ReInit:function(){A.abo.I7._ReInit.call(this);this.IP._ReInit();this.
Cp._ReInit();this.AlJ._ReInit();this.RH._ReInit();this.Kw._ReInit();this.Bh._ReInit(
);this.Text._ReInit();this.CT._ReInit();this.Aph._ReInit();this.AqO._ReInit();this.
CC._ReInit();this.Ha._ReInit();this.Ap9._ReInit();this.ApF._ReInit();this.Apr._ReInit(
);},_Mark:function(D){var B;A.abo.I7._Mark.call(this,D);if((B=this.B6)&&(B._cycle
!=D))B._Mark(B._cycle=D);if((B=this.Dn)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D
);if((B=this.IP)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Cp)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.AlJ)._cycle!=D)B._Mark(B._cycle=D);if((B=this.RH)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.Kw)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Bh
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Text)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.CT)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Aph)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.AqO)._cycle!=D)B._Mark(B._cycle=D);if((B=this.CC)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Ha)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ap9)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.ApF)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Apr
)._cycle!=D)B._Mark(B._cycle=D);},_className:"Demonstrator::NumberInput"};C.Aex={
LabelDataSync:null,AhW:function(H){var B;A.ow([B=A._GetAutoObject(A.abt.Arc),B.BxV
],this);},_Init:function(aArg){C.Mc._Init.call(this,aArg);A.kh.CR._Init.call(this.
LabelDataSync={I:this},0);this.__proto__=C.Aex;this.LabelDataSync.G(Ani);this.LabelDataSync.
R(A.z2(A.abg.A26));this.LabelDataSync.L(A.iF.Text);this.J(this.LabelDataSync,0);
this.AaN.At(A.zW(C.ASq));this.LabelDataSync.Aa(A.zW(A.eV.Aw));this.LabelDataSync.
BD(A.zW(A.eV.AB));},_Done:function(){this.__proto__=C.Mc;this.LabelDataSync._Done(
);C.Mc._Done.call(this);},_ReInit:function(){C.Mc._ReInit.call(this);this.LabelDataSync.
_ReInit();this.LabelDataSync.R(A.z2(A.abg.A26));this.LabelDataSync.Aa(A.zW(A.eV.
Aw));this.LabelDataSync.BD(A.zW(A.eV.AB));},_Mark:function(D){var B;C.Mc._Mark.call(
this,D);if((B=this.LabelDataSync)._cycle!=D)B._Mark(B._cycle=D);},_className:"Demonstrator::SyncAction"
};C.ASq={_class:function(){return A.abj.Aj;},0:{FileName:"./res_index/DemonstratorSyncIcon.png"
,Format:A.cC,NoOfFrames:1,FrameSize:[50,60],FrameDelay:0,_this:null}};C.Aam={TimespanDaysToString:
null,ABb:function(aIndex){if(this.AA8()>aIndex)return this.TimespanDaysToString.
B0(aIndex);A.aa8("%s",Awq);return A.jm;},AA8:function(){return 4;},C$:function(aIndex
){var Aii=0;switch(aIndex){case 0:Aii=0;break;case 1:Aii=1;break;case 2:Aii=2;break;
case 3:Aii=3;break;default:throw new Error(Arx+aIndex.toFixed());}return Aii;},_Init:
function(aArg){A.abx.AlL._Init.call(this,aArg);A.Device.TimespanDaysToString._Init.
call(this.TimespanDaysToString={I:this},0);this.__proto__=C.Aam;},_Done:function(
){this.__proto__=A.abx.AlL;this.TimespanDaysToString._Done();A.abx.AlL._Done.call(
this);},_ReInit:function(){A.abx.AlL._ReInit.call(this);this.TimespanDaysToString.
_ReInit();},_Mark:function(D){var B;A.abx.AlL._Mark.call(this,D);if((B=this.TimespanDaysToString
)._cycle!=D)B._Mark(B._cycle=D);},_className:"Demonstrator::DatePickerUnitDD"};C.
BBv={Gu:0,AS5:1,G6:2,Year:3};C.AAM={_class:function(){return A.abj.Aj;},0:{FileName:
"./res_index/DemonstratorEarTagIcon.png",Format:A.jt,NoOfFrames:2,FrameSize:[37,
37],FrameDelay:0,_this:null}};C.AE5={_class:function(){return A.abj.Aj;},0:{FileName:
"./res_index/DemonstratorTransponderEarTagIcon.png",Format:A.jt,NoOfFrames:2,FrameSize:[
37,37],FrameDelay:0,_this:null}};
C._Init=function(){C.ASY.__proto__=A.abo.Menu;C.AR0.__proto__=A.Core.O;C.AKk.__proto__=
C.A_;C.Md.__proto__=A.Core.O;C.XC.__proto__=C.ApS;C.Aan.__proto__=A.Core.O;C.At_.
__proto__=A.abo.AgN;C.AKy.__proto__=C.Fk;C.As9.__proto__=C.Fk;C.A_.__proto__=A.Core.
O;C.Fk.__proto__=A.Core.O;C.ALu.__proto__=A.abo.AgL;C.AgV.__proto__=A.Core.O;C.AKr.
__proto__=C.AgV;C.UK.__proto__=C.As9;C.AJX.__proto__=A.Core.O;C.Mc.__proto__=A.Core.
O;C.Ael.__proto__=C.Mc;C.Aey.__proto__=C.Mc;C.ApS.__proto__=A.Core.O;C.Adr.__proto__=
A.Core.O;C.OE.__proto__=C.Ap7;C.Ap7.__proto__=A.abo.I7;C.Aex.__proto__=C.Mc;C.Aam.
__proto__=A.abx.AlL;};C._ReInit=function(){};C.DE=function(D){var B;if((B=C.Background[
0]._this)&&(B._cycle!=D))B._Done(C.Background[0]._this=null);if((B=C.AKT[0]._this
)&&(B._cycle!=D))B._Done(C.AKT[0]._this=null);if((B=C.AKU[0]._this)&&(B._cycle!=
D))B._Done(C.AKU[0]._this=null);if((B=C.AKV[0]._this)&&(B._cycle!=D))B._Done(C.AKV[
0]._this=null);if((B=C.AKW[0]._this)&&(B._cycle!=D))B._Done(C.AKW[0]._this=null);
if((B=C.ANT[0]._this)&&(B._cycle!=D))B._Done(C.ANT[0]._this=null);if((B=C.Filter[
0]._this)&&(B._cycle!=D))B._Done(C.Filter[0]._this=null);if((B=C.APp[0]._this)&&(
B._cycle!=D))B._Done(C.APp[0]._this=null);if((B=C.AiB[0]._this)&&(B._cycle!=D))B.
_Done(C.AiB[0]._this=null);if((B=C.AKB[0]._this)&&(B._cycle!=D))B._Done(C.AKB[0].
_this=null);if((B=C.Aq5[0]._this)&&(B._cycle!=D))B._Done(C.Aq5[0]._this=null);if((
B=C.ASv[0]._this)&&(B._cycle!=D))B._Done(C.ASv[0]._this=null);if((B=C.AFk[0]._this
)&&(B._cycle!=D))B._Done(C.AFk[0]._this=null);if((B=C.ATe[0]._this)&&(B._cycle!=
D))B._Done(C.ATe[0]._this=null);if((B=C.ASq[0]._this)&&(B._cycle!=D))B._Done(C.ASq[
0]._this=null);if((B=C.AAM[0]._this)&&(B._cycle!=D))B._Done(C.AAM[0]._this=null);
if((B=C.AE5[0]._this)&&(B._cycle!=D))B._Done(C.AE5[0]._this=null);};return C;})(
);

/* VitalControl demonstration application, © Urban GmbH & Co.KG 2023 */