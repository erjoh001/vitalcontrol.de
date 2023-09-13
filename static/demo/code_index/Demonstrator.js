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
var B_=[0,0,370,60];var BH=[360,0,370,60];var EV=[0,0,370,710];var GS="Unknown animalType";
var Jt=[58,10,120,50];var IL=[0,0,60,60];var OK=[120,0,360,60];var PJ="\u2015";var
N1=[0,0,240,60];var CJ=[0,0,40,60];var Fn=[100,0,130,60];var Nb=[43,0,100,60];var
OL=[125,0,240,60];var KH=[0,0];var OM=[100,0];var Nc=[100,60];var ON=[0,60];var Ss=[
107,0];var T9=[240,0];var Zc=[240,60];var Wa=[107,60];var I$="%d.%m.%Y";var T_="Unhandled date unit: ";
var Zd=[0,0,200,180];var Wb=[36,0,200,30];var Ze=[0,30,160,60];var T$="Text";var
Zf=[0,70,40,110];var Zg=[44,70,156,110];var Ua=[160,70,200,110];var Wc=[7,2,27,25
];var QT=[0,30,170,180];var Zh=[170,34,190,57];var OO=[0,0,40,40];var PK=[0,40];
var Ub=[40,40];var Zi=[40,0];var Wd=[0,0,370,100];var Zj=[20,0,290,60];var Zk=[0
,60,370,100];var We="Cap";var Wf=[20,0,370,60];var St=[310,0,370,60];var Zl=[370
,0];var Zm=[370,60];var AbO="UpdateData is called for the base class ListItemBase. Please make "+
"sure this method is implemented by a derived class.";var Su=".";var AbP=[0,0,170
,150];var AeN=[0,59,170,90];var Zn=[110,0,170,150];var Wg=[0,30];var Wh=[50,0,100
,150];var AeO=[0,0,40,150];var AeP=[0,0,370,240];var JT=[0,60,370,710];var AeQ=[
0,60,370,120];var Li=[0,120,370,180];var Ag$=[0,180,370,240];var Anf=[370,120];var
N2=[0,120];var Wi=[370,180];var Ang=[0,180];var Aha=[370,240];var Ahb=[0,240];var
AbQ=[0,0,50,60];var Uc=[50,0,100,60];var Anh=[100,10,370,50];var Ani="276000901234567";
var Awi="Unhandled temperature unit";var Awj=[110,0,260,60];var Akh=[235,10,370,
50];var Awk="39.5";var AeR=[0,0,270,40];var Arw=[270,0];var OP=[270,40];var Sv=[
150,0,170,40];var Awl=[205,10,207,30];var Sw=[0,0,370,40];var Arx=[50,0,320,40];
var Awm=" ";var Awn=[135,23];var Awo=[135,0];var Anj=[100,0,370,60];var Awp="Error: Nullpointer Exception";
var Ary="Unknown Date Piecker Unit Index: ";
C.Background={_class:function(){return A.abj.Aj;},0:{FileName:"./res_index/DemonstratorBackground.png"
,Format:A.cC,NoOfFrames:1,FrameSize:[1000,740],FrameDelay:0,_this:null}};C.AKX={
_class:function(){return A.abj.Aj;},0:{FileName:"./res_index/DemonstratorButtonLeft.png"
,Format:A.cC,NoOfFrames:1,FrameSize:[40,40],FrameDelay:0,_this:null}};C.AKY={_class:
function(){return A.abj.Aj;},0:{FileName:"./res_index/DemonstratorButtonLeftPressed.png"
,Format:A.cC,NoOfFrames:1,FrameSize:[40,40],FrameDelay:0,_this:null}};C.AKZ={_class:
function(){return A.abj.Aj;},0:{FileName:"./res_index/DemonstratorButtonRight.png"
,Format:A.cC,NoOfFrames:1,FrameSize:[40,40],FrameDelay:0,_this:null}};C.AK0={_class:
function(){return A.abj.Aj;},0:{FileName:"./res_index/DemonstratorButtonRightPressed.png"
,Format:A.cC,NoOfFrames:1,FrameSize:[40,40],FrameDelay:0,_this:null}};C.ANX={_class:
function(){return A.abj.Aj;},0:{FileName:"./res_index/DemonstratorIconDatePicker.png"
,Format:A.cC,NoOfFrames:1,FrameSize:[20,23],FrameDelay:0,_this:null}};C.Filter={
_class:function(){return A.abj.Aj;},0:{FileName:"./res_index/DemonstratorFilter.png"
,Format:A.cC,NoOfFrames:1,FrameSize:[15,16],FrameDelay:0,_this:null}};C.APt={_class:
function(){return A.abj.Aj;},0:{FileName:"./res_index/DemonstratorMenuIcon.png",
Format:A.cC,NoOfFrames:1,FrameSize:[20,16],FrameDelay:0,_this:null}};C.Aiz={_class:
function(){return A.abj.Aj;},0:{FileName:"./res_index/DemonstratorArrowRight.png"
,Format:A.cC,NoOfFrames:1,FrameSize:[17,16],FrameDelay:0,_this:null}};C.AKF={_class:
function(){return A.abj.Aj;},0:{FileName:"./res_index/DemonstratorArrowDown.png"
,Format:A.cC,NoOfFrames:1,FrameSize:[17,16],FrameDelay:0,_this:null}};C.Aq6={_class:
function(){return A.abj.Aj;},0:{FileName:"./res_index/DemonstratorScanIcon.png",
Format:A.jt,NoOfFrames:2,FrameSize:[37,37],FrameDelay:0,_this:null}};C.ASz={_class:
function(){return A.abj.Aj;},0:{FileName:"./res_index/DemonstratorTemperatureIcon.png"
,Format:A.cC,NoOfFrames:1,FrameSize:[17,37],FrameDelay:0,_this:null}};C.AS2={Ade:
null,AW:null,AQ:null,Background:null,H2:null,AC:null,IG:null,Dh:null,K9:null,A4O:
null,A4$:0,Bf:function(aSize){A.abo.Menu.Bf.call(this,aSize);this.IG.G(A.aaS(this.
IG.M,this.AC.OC));this.IG.G([].concat(this.IG.M.slice(0,3),aSize[1]));},Ag:function(
Ae){var B;A.abo.Menu.Ag.call(this,Ae);var GY=((Ae&0x40)===0x40);if(GY&&(this.AC.
Ge<0))this.AC.GL(0);},NQ:function(E){if(this.K9===E)return;this.K9=E;this.AC.NQ(
E);},BjD:function(E){var B;if(this.A4O===E)return;if(!!this.Ade){this.HG(this.Ade
);this.Ade=null;}if(!!E){this.Ade=(C.Fk.isPrototypeOf(B=A._NewObject(E,0))?B:null
);this.Ade.A6V([this,this.Agy]);this.Ade.A6W([this,this.Agz]);this.Ade.BjI(null);
this.J(this.Ade,0);this.AC.A62((B=this.Ade.M)[3]-B[1]);}else this.AC.A62(0);this.
IG.G(A.aaS(this.IG.M,this.AC.OC));A.ow([this,this.E4],this);this.A4O=E;},G7:function(
H){var B;var FW=this.AC.GJ;var Z=(C.A_.isPrototypeOf(B=this.AC.Cd)?B:null);if(!Z
)return;Z.YA(this.AW);Z.Cc(FW);Z.YD(this.AQ);Z.G(A.aaN(Z.M,[(B=this.AC.M)[2]-B[0
],this.AC.GK]));},YA:function(E){var B;if(this.AW===E)return;if(!!this.AW){A.zl([
this,this.Cc],this.AW,0);A.zn([this,this.Am_],[B=this.AW,B.Fy,B.FC],0);}this.AW=
E;if(!!E){A.y_([this,this.Cc],E,0);A.za([this,this.Am_],[E,E.Fy,E.FC],0);}A.ow([
this,this.Cc],this);A.ow([this,this.Am_],this);},Cc:function(H){if(!!this.AW){this.
AC.Jp(this.AW.Cj());this.AC.AaP(0,this.AC.AR-1);}else this.AC.Jp(0);if(this.A4$!==
this.AC.AR){this.AC.AzN(null,null);this.A4$=this.AC.AR;}A.ow([this,this.E4],this
);},Agz:function(H){var B;this.G(A.aaL(this.M,(B=this.AC.AMH())[3]-B[1]));},Agy:
function(H){this.G(A.aaL(this.M,180));},A6i:function(H){var Jx=(A.Core.BR.isPrototypeOf(
H)?H:null);var FW=this.AC.Ge;if(Jx.CP===4)FW=FW-1;else if(Jx.CP===5)FW=FW+1;else
if((Jx.D4>=0x30)&&(Jx.D4<=0x39))A._GetAutoObject(A.abq.AiP).E6(Jx.D4);else if(Jx.
CP===45)A._GetAutoObject(A.abq.AiP).Delete();else Jx.Pc=true;if((FW<0)||(FW>=this.
AC.AR))return;this.AC.GL(FW);this.Bu0(FW,true);},BuP:function(H){var Z=(C.A_.isPrototypeOf(
H)?H:null);this.AC.GL(Z.Hq);},Bu0:function(GT,Ab5){var B;if((GT<0)||(GT>=this.AC.
AR))return;var AM=this.AC.Apz(GT,GT);var A8=this.AC.M;A8=A.aaS(A8,(B=this.AC.AMH(
))[3]-B[1]);A8=A.aaL(A8,(((B=this.AC.M)[3]-B[1])-((B=this.AC.AMH())[3]-B[1]))-((
B=this.AC.Bfi())[3]-B[1]));var Lu=A.kz(AM,A8);if((!Ab5&&!((Lu[0]>=Lu[2])||(Lu[1]>=
Lu[3])))||(Ab5&&A.z9(Lu,AM)))return;var Bm=0;if(AM[3]>A8[3])Bm=AM[3]-A8[3];if(Bm>(
AM[1]-A8[1]))Bm=(AM[3]-A8[1])-this.AC.GK;this.AC.Gk(this.AC.Bo-Bm);},Am_:function(
H){this.AC.GL(-1);},E4:function(H){var B;this.IG.Mr(this.AC.GK*this.AC.AR);this.
IG.Mt(((B=this.AC.M)[3]-B[1])-this.AC.OC);this.IG.Ms(-this.AC.Bo);},_Init:function(
aArg){A.abo.Menu._Init.call(this,aArg);A.abh.AH._Init.call(this.Background={I:this
},0);A.Core.H2._Init.call(this.H2={I:this},0);A.Core.CI._Init.call(this.AC={I:this
},0);A.kh.As._Init.call(this.IG={I:this},0);A.Core.BR._Init.call(this.Dh={I:this
},0);this.__proto__=C.AS2;this.G(B_);this.Background.AV(0x3);this.Background.G(B_
);this.H2.AV(0x3F);this.H2.G(B_);this.AC.AV(0x3F);this.AC.G(B_);this.AC.Ad5(60);
this.AC.Jp(0);this.AC.NQ(this.K9);this.IG.AV(0x3A);this.IG.G(BH);this.IG.L(0xFF808080
);this.J(this.Background,0);this.J(this.H2,0);this.J(this.AC,0);this.J(this.IG,0
);this.AC.Ej=[this,this.E4];this.AC.G7=[this,this.G7];this.AC.Avp(this.H2);this.
AQ=[this,this.BuP];this.Dh.BS=[this,this.A6i];this.Dh.DU=[this,this.A6i];},_Done:
function(){this.__proto__=A.abo.Menu;this.Background._Done();this.H2._Done();this.
AC._Done();this.IG._Done();this.Dh._Done();A.abo.Menu._Done.call(this);},_ReInit:
function(){A.abo.Menu._ReInit.call(this);this.Background._ReInit();this.H2._ReInit(
);this.AC._ReInit();this.IG._ReInit();this.Dh._ReInit();},_Mark:function(D){var B;
A.abo.Menu._Mark.call(this,D);if((B=this.Ade)&&(B._cycle!=D))B._Mark(B._cycle=D);
if((B=this.AW)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.AQ)&&((B=B[0])._cycle
!=D))B._Mark(B._cycle=D);if((B=this.Background)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.H2)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AC)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.IG)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Dh)._cycle!=D)B._Mark(
B._cycle=D);},_className:"Demonstrator::VerticalMenu"};C.AR4={Gr:null,AH:null,CC:
null,Init:function(aArg){var B;A.za([this,this.Ht],[B=A._GetAutoObject(A.abq.LB)
,B.A5Y,B.A6$],0);A.ow([this,this.Ht],this);},Abe:function(E){if(this.Gr===E)return;
if(!!this.Gr)this.HG(this.Gr);this.Gr=E;if(!!this.Gr)this.J(this.Gr,0);this.A$(E
);this.AgS(E,this.CC);this.Am();},Ht:function(H){var B;if(!!A._GetAutoObject(A.abq.
LB).Aq9)this.Abe((C.AgW.isPrototypeOf(B=A._NewObject(A._GetAutoObject(A.abq.LB).
Aq9,0))?B:null));else this.Abe(null);},_Init:function(aArg){A.Core.O._Init.call(
this,aArg);A.abh.AH._Init.call(this.AH={I:this},0);A.abh.CC._Init.call(this.CC={
I:this},0);this.__proto__=C.AR4;this.G(EV);this.AH.AV(0x3F);this.AH.G(EV);this.CC.
G(EV);this.CC.L(0xFF000000);this.J(this.AH,0);this.J(this.CC,0);this.Init(aArg);
},_Done:function(){this.__proto__=A.Core.O;this.AH._Done();this.CC._Done();A.Core.
O._Done.call(this);},_ReInit:function(){A.Core.O._ReInit.call(this);this.AH._ReInit(
);this.CC._ReInit();},_Mark:function(D){var B;A.Core.O._Mark.call(this,D);if((B=
this.Gr)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.AH)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.CC)._cycle!=D)B._Mark(B._cycle=D);},_className:"Demonstrator::SelectionArea"
};C.AKo={AfA:0,Nn:0,Background:null,T:null,Aiv:null,AcW:null,WZ:null,AcX:null,Mc:
null,Lr:false,Kq:false,Ag:function(Ae){var B;C.A_.Ag.call(this,Ae);var FI=((Ae&0x10
)===0x10);var Fe=((Ae&0x20)===0x20);var GY=((Ae&0x40)===0x40);if(!FI){this.Background.
L(0xFFAAAAAA);this.T.L(0xFF888888);this.Mc.Ap(false);this.Mc.X(false);}else if(GY
){this.Background.L(A.iF.AY);this.T.L(A.iF.Bd);this.Mc.Ap(true);this.Mc.X(true);
}else if(Fe){this.Background.L(0xFFE6DED8);this.T.L(0xFF000000);this.Mc.Ap(true);
this.Mc.X(true);}else{this.Background.L(0xFFFFFFFF);this.T.L(0xFF000000);this.Mc.
Ap(false);this.Mc.X(false);}if(!this.Kq&&Fe)A._GetAutoObject(A.abq.LB).M6(this.AfA
);this.Mc.BjF(this.Nn>0);this.Mc.Bj4(this.AfA>0);this.Lr=FI;this.Kq=Fe;},Cc:function(
Ab){if(!this.AW){this.WZ.At(A.zW(A.abi.Adx));this.AcW.L(A.iF.AeH);return;}this.Hq=
Ab;if(!!this.AW){this.Nn=this.AW.LD(Ab,26);this.AfA=this.AW.LD(Ab,22);var O6=this.
AW.CE(Ab,1);var AkW=this.AW.HV(Ab,11);var AkN=this.AW.IW(Ab,17);var Ly=this.AW.IW(
Ab,13);var H5=this.AW.Al0(Ab,14);this.T.R(O6.toFixed());var Wu=A._GetAutoObject(
A.Device.Helper).AKd(Ly,AkW,AkN);switch(H5){case 0:this.WZ.At(A.zW(A.abi.Adx));break;
case 1:this.WZ.At(A.zW(A.abi.Aua));break;case 2:this.WZ.At(A.zW(A.abi.Aud));break;
default:A.aa8("%s%e",GS,H5);}this.AcX.At(this.WZ.Aj);this.AcW.L(A._GetAutoObject(
A.abk.Assessment).PX(Wu));this.Am();}},_Init:function(aArg){C.A_._Init.call(this
,aArg);A.abh.AH._Init.call(this.Background={I:this},0);A.kh.CR._Init.call(this.T={
I:this},0);A.abh.Ak._Init.call(this.Aiv={I:this},0);A.abh.Ak._Init.call(this.AcW={
I:this},0);A.abh.Ak._Init.call(this.WZ={I:this},0);A.abh.Ak._Init.call(this.AcX={
I:this},0);C.Mc._Init.call(this.Mc={I:this},0);this.__proto__=C.AKo;this.Background.
AV(0x3F);this.Background.G(B_);this.T.AV(0x3F);this.T.G(Jt);this.T.R(A.z2(A.abg.
HA));this.T.A2(0x11);this.T.L(0xFF000000);this.Aiv.G(IL);this.Aiv.L(A.iF.Text);this.
AcW.G(IL);this.AcW.L(A.iF.EY);this.WZ.G(IL);this.AcX.G(IL);this.AcX.L(A.iF.Text);
this.AcX.Ct(1);this.Mc.AV(0x3);this.Mc.G(OK);this.J(this.Background,0);this.J(this.
T,0);this.J(this.Aiv,0);this.J(this.AcW,0);this.J(this.WZ,0);this.J(this.AcX,0);
this.J(this.Mc,0);this.T.Aa(A.zW(A.eV.Aw));this.T.BD(A.zW(A.eV.AB));this.T.Db(A.
zW(A.eV.Cw));this.Aiv.At(A.zW(C.AFj));this.AcW.At(A.zW(C.ATi));this.WZ.At(A.zW(A.
abi.Adx));this.AcX.At(A.zW(A.abi.Adx));},_Done:function(){this.__proto__=C.A_;this.
Background._Done();this.T._Done();this.Aiv._Done();this.AcW._Done();this.WZ._Done(
);this.AcX._Done();this.Mc._Done();C.A_._Done.call(this);},_ReInit:function(){C.
A_._ReInit.call(this);this.Background._ReInit();this.T._ReInit();this.Aiv._ReInit(
);this.AcW._ReInit();this.WZ._ReInit();this.AcX._ReInit();this.Mc._ReInit();},_Mark:
function(D){var B;C.A_._Mark.call(this,D);if((B=this.Background)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.T)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Aiv)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.AcW)._cycle!=D)B._Mark(B._cycle=D);if((B=this.WZ
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AcX)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Mc)._cycle!=D)B._Mark(B._cycle=D);},_className:"Demonstrator::AnimalMenuItem"
};C.Mc={TL:null,VP:null,Aj6:null,M9:null,NX:null,YS:null,Abz:null,Auw:false,Av8:
false,C3:function(){this.Am();},Ag:function(Ae){var B;A.Core.O.Ag.call(this,Ae);
var GY=((Ae&0x40)===0x40);if(GY){this.M9.L(A.iF.Bd);this.NX.L(A.iF.Bd);}else{this.
M9.L(A.iF.Text);this.NX.L(A.iF.Text);}if(this.Av8){this.M9.R(A.z2(A.abg.BkW));if(
this.Auw){this.TL.At(A.zW(C.AE4));this.VP.At(A.zW(C.AE4));}else{this.TL.At(A.zW(
C.Aq6));this.VP.At(A.zW(C.Aq6));}}else if(this.Auw){this.TL.At(A.zW(C.AAK));this.
VP.At(A.zW(C.AAK));this.M9.R(PJ);}var A1a=this.Av8||this.Auw;this.TL.X(A1a);this.
VP.X(A1a);this.M9.X(A1a);this.YS.Ap(this.Av8);},Bj4:function(E){if(this.Av8===E)
return;this.Av8=E;this.Am();},BjF:function(E){if(this.Auw===E)return;this.Auw=E;
this.Am();},_Init:function(aArg){A.Core.O._Init.call(this,aArg);A.abh.Ak._Init.call(
this.TL={I:this},0);A.abh.Ak._Init.call(this.VP={I:this},0);A.abh.Ak._Init.call(
this.Aj6={I:this},0);A.kh.CR._Init.call(this.M9={I:this},0);A.kh.CR._Init.call(this.
NX={I:this},0);A.Core.Bh._Init.call(this.YS={I:this},0);A.Core.Bh._Init.call(this.
Abz={I:this},0);this.__proto__=C.Mc;var B;this.G(N1);this.TL.AV(0x6);this.TL.G(CJ
);this.TL.L(A.iF.C1);this.TL.Ct(1);this.VP.AV(0x6);this.VP.G(CJ);this.VP.L(A.iF.
Text);this.Aj6.AV(0xE);this.Aj6.G(Fn);this.M9.AV(0x7);this.M9.G(Nb);this.M9.A2(0x11
);this.M9.L(0xFF000000);this.NX.AV(0x3);this.NX.G(OL);this.NX.R(A.z2(A.abg.Temperature
));this.NX.A2(0x11);this.NX.L(0xFF000000);this.YS.AV(0x3);this.YS.KB(KH);this.YS.
KA(OM);this.YS.DN(Nc);this.YS.D5(ON);this.Abz.AV(0x3);this.Abz.KB(Ss);this.Abz.KA(
T9);this.Abz.DN(Zc);this.Abz.D5(Wa);this.J(this.TL,0);this.J(this.VP,0);this.J(this.
Aj6,0);this.J(this.M9,0);this.J(this.NX,0);this.J(this.YS,0);this.J(this.Abz,0);
this.TL.At(A.zW(C.Aq6));this.VP.At(A.zW(C.Aq6));this.Aj6.At(A.zW(C.ASz));this.M9.
Aa(A.zW(A.eV.Aw));this.M9.BD(A.zW(A.eV.AB));this.M9.Db(A.zW(A.eV.Cw));this.NX.Aa(
A.zW(A.eV.Aw));this.NX.BD(A.zW(A.eV.AB));this.NX.Db(A.zW(A.eV.Cw));this.YS.K$=[B=
A._GetAutoObject(A.abq.LB),B.Bbr];this.Abz.K$=[B=A._GetAutoObject(A.abq.LB),B.Bbc
];},_Done:function(){this.__proto__=A.Core.O;this.TL._Done();this.VP._Done();this.
Aj6._Done();this.M9._Done();this.NX._Done();this.YS._Done();this.Abz._Done();A.Core.
O._Done.call(this);},_ReInit:function(){A.Core.O._ReInit.call(this);this.TL._ReInit(
);this.VP._ReInit();this.Aj6._ReInit();this.M9._ReInit();this.NX._ReInit();this.
YS._ReInit();this.Abz._ReInit();this.NX.R(A.z2(A.abg.Temperature));this.M9.Aa(A.
zW(A.eV.Aw));this.M9.BD(A.zW(A.eV.AB));this.M9.Db(A.zW(A.eV.Cw));this.NX.Aa(A.zW(
A.eV.Aw));this.NX.BD(A.zW(A.eV.AB));this.NX.Db(A.zW(A.eV.Cw));this.C3();},_Mark:
function(D){var B;A.Core.O._Mark.call(this,D);if((B=this.TL)._cycle!=D)B._Mark(B.
_cycle=D);if((B=this.VP)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Aj6)._cycle!=D
)B._Mark(B._cycle=D);if((B=this.M9)._cycle!=D)B._Mark(B._cycle=D);if((B=this.NX).
_cycle!=D)B._Mark(B._cycle=D);if((B=this.YS)._cycle!=D)B._Mark(B._cycle=D);if((B=
this.Abz)._cycle!=D)B._Mark(B._cycle=D);},_className:"Demonstrator::AnimalItemAction"
};C.Xz={C3:function(){this.Am();},Ag:function(Ae){C.ApT.Ag.call(this,Ae);if(!this.
Text.String.length)this.Text.R(A.z2(A.abg.Filter));},A5g:function(H){var DY=(A.Core.
BR.isPrototypeOf(H)?H:null);if(!!DY)A._GetAutoObject(A.abq.AiP).E6(DY.D4);},A5e:
function(H){A._GetAutoObject(A.abq.AiP).Delete();},_Init:function(aArg){C.ApT._Init.
call(this,aArg);this.__proto__=C.Xz;this.Ak.At(A.zW(C.Filter));},_ReInit:function(
){C.ApT._ReInit.call(this);this.C3();},_className:"Demonstrator::FilterView"};C.
Aam={Di:null,Xs:null,RG:null,Xt:null,Ix:null,XQ:null,AlN:null,Aq:null,OV:null,MT:
null,Aal:null,FN:0,Auj:0,AD9:false,Ag:function(Ae){A.Core.O.Ag.call(this,Ae);this.
RG.R(this.Aq.Format(I$));if(this.AD9){this.RG.X(false);this.XQ.X(false);this.Ix.
X(false);this.Xt.X(false);this.OV.Ap(true);this.OV.X(true);this.MT.Ct(2);this.MT.
AQ1(2);this.MT.G(A.aaP(this.MT.M,this.OV.M[2]));}else{this.RG.X(true);this.XQ.X(
true);this.Ix.X(true);this.Xt.X(true);this.OV.Ap(false);this.OV.X(false);this.MT.
Ct(3);this.MT.AQ1(3);this.MT.G(A.aaP(this.MT.M,this.RG.M[2]));}},BwA:function(H){
this.BjL(!this.AD9);},Acz:function(H){var F;if(!!this.Di)this.TB((F=this.Di,F[1].
call(F[0])));},Abj:function(E){if(A.z_(this.Di,E))return;if(!!this.Di)A.zn([this
,this.Acz],this.Di,0);this.Di=E;if(!!E)A.za([this,this.Acz],E,0);if(!!E)A.ow([this
,this.Acz],this);},TB:function(E){if(this.FN===E)return;this.FN=E;this.Aq.Initialize(
this.FN);this.BxF(this);this.Am();},AhN:function(H){var B;var F;var BP=this.FN;var
Aig=this.Aal.C$(this.Auj);this.AHr(Aig);if(this.Aq.Year>2100)this.Aq.Initialize2(
2100,12,31,0,0,0);this.TB(((B=(this.Aq.JL()|0))<0)?B+0x100000000:B);if(this.FN!==
BP){if(!!this.Di)(F=this.Di,F[2].call(F[0],this.FN));A.aat(this.Di,0);}},Ahz:function(
H){var B;var F;var BP=this.FN;var Aig=this.Aal.C$(this.Auj);this.AJa(Aig);if(this.
Aq.Year<2000)this.Aq.Initialize2(2000,1,1,0,0,0);this.TB(((B=(this.Aq.JL()|0))<0
)?B+0x100000000:B);if(this.FN!==BP){if(!!this.Di)(F=this.Di,F[2].call(F[0],this.
FN));A.aat(this.Di,0);}},Bjk:function(E){if(this.Auj===E)return;this.Auj=E;},BjL:
function(E){if(this.AD9===E)return;this.AD9=E;this.Am();},Bw_:function(H){var B;
var F;var BP=this.FN;this.Aq.Lb(this.OV.ACB());this.Aq.TE(this.OV.ACF());this.Aq.
Year=this.OV.Aqe();this.TB(((B=(this.Aq.JL()|0))<0)?B+0x100000000:B);if(this.FN!==
BP){if(!!this.Di)(F=this.Di,F[2].call(F[0],this.FN));A.aat(this.Di,0);}},BxF:function(
H){this.OV.Lb(this.Aq.Gt);this.OV.TE(this.Aq.G5);this.OV.AjN(this.Aq.Year);},AHr:
function(Axh){var B;switch(Axh){case 0:if(this.Aq.Gt<this.Aq.Yx())this.Aq.Lb(this.
Aq.Gt+1);else{this.Aq.Lb(1);this.AHr(2);}break;case 1:if((this.Aq.Gt+7)<=this.Aq.
Yx())this.Aq.Lb(this.Aq.Gt+7);else{this.Aq.Lb((7-this.Aq.Yx())+this.Aq.Gt);this.
AHr(2);}break;case 2:if(this.Aq.G5<12)this.Aq.TE(this.Aq.G5+1);else{this.Aq.TE(1
);this.AHr(3);}break;case 3:this.Aq.Year++;break;default:throw new Error(T_+Axh.
toFixed());}},AJa:function(Axh){var B;switch(Axh){case 0:if(this.Aq.Gt>1)this.Aq.
Lb(this.Aq.Gt-1);else{this.AJa(2);this.Aq.Lb(this.Aq.Yx());}break;case 1:if((this.
Aq.Gt-7)>0)this.Aq.Lb(this.Aq.Gt-7);else{this.AJa(2);this.Aq.Lb(this.Aq.Yx()-(7-
this.Aq.Gt));}break;case 2:if(this.Aq.G5>1)this.Aq.TE(this.Aq.G5-1);else{this.Aq.
TE(12);this.AJa(3);}break;case 3:this.Aq.Year--;break;default:throw new Error(T_+
Axh.toFixed());}},Bho:function(){return this.Auj;},_Init:function(aArg){A.Core.O.
_Init.call(this,aArg);A.abh.Text._Init.call(this.Xs={I:this},0);A.abh.Text._Init.
call(this.RG={I:this},0);C.At_._Init.call(this.Xt={I:this},0);A.abx.Ix._Init.call(
this.Ix={I:this},0);C.At_._Init.call(this.XQ={I:this},0);A.abh.Ak._Init.call(this.
AlN={I:this},0);A.Core.Bu._Init.call(this.Aq={I:this},0);C.ALy._Init.call(this.OV={
I:this},0);C.At_._Init.call(this.MT={I:this},0);C.Aal._Init.call(this.Aal={I:this
},0);this.__proto__=C.Aam;this.G(Zd);this.Xs.G(Wb);this.Xs.A2(0x11);this.Xs.R(A.
z2(A.abg.Date));this.Xs.L(0xFF000000);this.RG.G(Ze);this.RG.A2(0x11);this.RG.R(T$
);this.RG.L(0xFF000000);this.Xt.G(Zf);this.Xt.A6O(200);this.Ix.G(Zg);this.Ix.Ave(
120);this.Ix.GK=30;this.Ix.A6x(A.iF.C1);this.Ix.Bil(A.iF.C1);this.Ix.Bip(A.iF.C1
);this.Ix.A6y(A.iF.Text);this.Ix.Biq(A.iF.Text);this.Ix.Bim(A.iF.AY);this.Ix.Bir(
A.iF.Bd);this.Ix.Bio(A.iF.AY);this.Ix.Bin(A.iF.Text);this.XQ.G(Ua);this.XQ.A6O(200
);this.AlN.G(Wc);this.OV.G(QT);this.MT.G(Zh);this.MT.Ct(3);this.MT.AQ1(3);this.MT.
L(A.iF.Text);this.J(this.Xs,0);this.J(this.RG,0);this.J(this.Xt,0);this.J(this.Ix
,0);this.J(this.XQ,0);this.J(this.AlN,0);this.J(this.OV,0);this.J(this.MT,0);this.
Xs.Aa(A.zW(A.eV.AB));this.RG.Aa(A.zW(A.eV.Gv));this.Xt.AQ=[this,this.Ahz];this.Xt.
DC(A.zW(C.AKX));this.Xt.AQ2(A.zW(C.AKY));this.Ix.Au([this,this.Bho,this.Bjk]);this.
Ix.Biw(this.Aal);this.Ix.AQL(A.zW(A.eV.AB));this.Ix.A6M(A.zW(A.eV.AB));this.XQ.AQ=[
this,this.AhN];this.XQ.DC(A.zW(C.AKZ));this.XQ.AQ2(A.zW(C.AK0));this.AlN.At(A.zW(
C.ANX));this.OV.Dn=[this,this.Bw_];this.MT.AQ=[this,this.BwA];this.MT.DC(A.zW(A.
abi.AlE));this.MT.AQ2(A.zW(A.abi.AlE));},_Done:function(){this.__proto__=A.Core.
O;this.Xs._Done();this.RG._Done();this.Xt._Done();this.Ix._Done();this.XQ._Done(
);this.AlN._Done();this.Aq._Done();this.OV._Done();this.MT._Done();this.Aal._Done(
);A.Core.O._Done.call(this);},_ReInit:function(){A.Core.O._ReInit.call(this);this.
Xs._ReInit();this.RG._ReInit();this.Xt._ReInit();this.Ix._ReInit();this.XQ._ReInit(
);this.AlN._ReInit();this.Aq._ReInit();this.OV._ReInit();this.MT._ReInit();this.
Aal._ReInit();this.Xs.R(A.z2(A.abg.Date));this.Xs.Aa(A.zW(A.eV.AB));this.RG.Aa(A.
zW(A.eV.Gv));this.Ix.AQL(A.zW(A.eV.AB));this.Ix.A6M(A.zW(A.eV.AB));},_Mark:function(
D){var B;A.Core.O._Mark.call(this,D);if((B=this.Di)&&((B=B[0])._cycle!=D))B._Mark(
B._cycle=D);if((B=this.Xs)._cycle!=D)B._Mark(B._cycle=D);if((B=this.RG)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.Xt)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ix
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.XQ)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.AlN)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Aq)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.OV)._cycle!=D)B._Mark(B._cycle=D);if((B=this.MT)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Aal)._cycle!=D)B._Mark(B._cycle=D);},_className:"Demonstrator::DateSelector"
};C.At_={C5:null,AvJ:null,ALL:null,AQ:null,Bj:null,Dh:null,CV:null,Hi:null,XL:null
,ANz:0,Ta:0,ARC:0,AP:0xFFFFFFFF,AZA:false,Lr:false,Kq:false,P0:false,Ag:function(
Ae){var B;A.abo.AgO.Ag.call(this,Ae);var FI=((Ae&0x10)===0x10);var Fe=((Ae&0x20)===
0x20);var Fd=this.CV.Down&&this.CV.XT;if(!FI)this.Hi.At(this.ALL);else if(Fd){this.
Hi.At(this.AvJ);this.Hi.Ct(this.ARC);}else{this.Hi.At(this.C5);this.Hi.Ct(this.Ta
);}this.Hi.L(this.AP);this.Lr=FI;this.Kq=Fe;this.P0=Fd;},PZ:function(H){this.Am(
);A.ow(this.AQ,this);},AhX:function(H){if(this.CV.Down)return;if(this.Dh.Abs)return;
this.Am();if(this.Bj.Bw){A.ow(this.AQ,this);this.Bj.Ap(false);}this.Bj.Ap(true);
},Bba:function(H){this.Am();},AyM:function(H){if(!this.CV.XT)return;if(this.CV.NA
)return;if((this.XL.US<=0)||(this.CV.Jk<this.XL.US)){if(this.CV.Jk>=this.Bj.US)A.
ow(this.AQ,this);else this.Bj.Ap(true);}this.XL.Ap(false);},AyL:function(H){this.
XL.Ap(true);if(this.Bj.Bw){A.ow(this.AQ,this);this.Bj.Ap(false);}},DC:function(E
){if(this.C5===E)return;this.C5=E;this.Am();},AQ2:function(E){if(this.AvJ===E)return;
this.AvJ=E;this.Am();},A0v:function(H){if(!this.CV.XT)return;if(this.CV.NA)return;
if((this.ANz>=0)&&this.AZA){this.AZA=false;this.XL.Ap(true);A.ow(this.AQ,this);}
},A6O:function(E){if(this.ANz===E)return;this.ANz=E;this.XL.VL(E);},Bv6:function(
H){this.AZA=true;},Ct:function(E){if(this.Ta===E)return;this.Ta=E;this.Am();},AQ1:
function(E){if(this.ARC===E)return;this.ARC=E;this.Am();},L:function(E){if(this.
AP===E)return;this.AP=E;this.Am();},_Init:function(aArg){A.abo.AgO._Init.call(this
,aArg);A.Core.Timer._Init.call(this.Bj={I:this},0);A.Core.BR._Init.call(this.Dh={
I:this},0);A.Core.Bh._Init.call(this.CV={I:this},0);A.abh.Ak._Init.call(this.Hi={
I:this},0);A.Core.Timer._Init.call(this.XL={I:this},0);this.__proto__=C.At_;this.
G(OO);this.Bj.Qz(0);this.Bj.VL(50);this.Dh.Filter=149;this.CV.AV(0x3F);this.CV.KB(
PK);this.CV.KA(Ub);this.CV.DN(Zi);this.CV.D5(KH);this.CV.Aeh=0xF;this.CV.ADo(100
);this.Hi.AV(0x3F);this.Hi.G(OO);this.Hi.A2(0x12);this.XL.Qz(0);this.J(this.CV,0
);this.J(this.Hi,0);this.Bj.M8=[this,this.PZ];this.Dh.BS=[this,this.AhX];this.CV.
ACL=[this,this.Bba];this.CV.Auy=[this,this.Bba];this.CV.DU=[this,this.A0v];this.
CV.K$=[this,this.AyM];this.CV.BS=[this,this.AyL];this.Hi.At(A.zW(A.abj.K2));this.
C5=A.zW(A.abj.K2);this.AvJ=A.zW(A.abj.K2);this.ALL=A.zW(A.abj.K2);this.XL.M8=[this
,this.Bv6];},_Done:function(){this.__proto__=A.abo.AgO;this.Bj._Done();this.Dh._Done(
);this.CV._Done();this.Hi._Done();this.XL._Done();A.abo.AgO._Done.call(this);},_ReInit:
function(){A.abo.AgO._ReInit.call(this);this.Bj._ReInit();this.Dh._ReInit();this.
CV._ReInit();this.Hi._ReInit();this.XL._ReInit();},_Mark:function(D){var B;A.abo.
AgO._Mark.call(this,D);if((B=this.C5)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.
AvJ)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.ALL)&&(B._cycle!=D))B._Mark(B.
_cycle=D);if((B=this.AQ)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.Bj
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Dh)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.CV)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Hi)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.XL)._cycle!=D)B._Mark(B._cycle=D);},_className:"Demonstrator::IconButton"
};C.AKC={Pi:null,T:null,Adq:null,_Init:function(aArg){C.Fk._Init.call(this,aArg);
A.abh.AH._Init.call(this.Pi={I:this},0);A.abh.Text._Init.call(this.T={I:this},0);
C.Adq._Init.call(this.Adq={I:this},0);this.__proto__=C.AKC;this.G(Wd);this.Pi.AV(
0x1D);this.Pi.G(B_);this.Pi.L(0xFFE6E6E6);this.T.AV(0x1D);this.T.G(Zj);this.T.A2(
0x11);this.T.R(A.z2(A.abg.A2d));this.T.L(0xFF000000);this.Adq.G(Zk);this.J(this.
Pi,0);this.J(this.T,0);this.J(this.Adq,0);this.T.Aa(A.zW(A.eV.Aw));},_Done:function(
){this.__proto__=C.Fk;this.Pi._Done();this.T._Done();this.Adq._Done();C.Fk._Done.
call(this);},_ReInit:function(){C.Fk._ReInit.call(this);this.Pi._ReInit();this.T.
_ReInit();this.Adq._ReInit();this.T.R(A.z2(A.abg.A2d));this.T.Aa(A.zW(A.eV.Aw));
},_Mark:function(D){var B;C.Fk._Mark.call(this,D);if((B=this.Pi)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.T)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Adq)._cycle!=
D)B._Mark(B._cycle=D);},_className:"Demonstrator::AnimalsHeader"};C.As9={Pi:null
,T:null,AdS:null,AdO:null,Bh:null,DH:We,Ajr:false,Ag:function(Ae){C.Fk.Ag.call(this
,Ae);if(this.Ajr){this.AdO.X(true);this.AdS.X(false);}else{this.AdO.X(false);this.
AdS.X(true);}},BwW:function(H){if(this.Ajr)A.ow(this.Agy,this);else A.ow(this.Agz
,this);this.ADr(!this.Ajr);},S:function(E){if(this.DH===E)return;this.DH=E;this.
T.R(E);},ADr:function(E){if(this.Ajr===E)return;this.Ajr=E;this.Am();},_Init:function(
aArg){C.Fk._Init.call(this,aArg);A.abh.AH._Init.call(this.Pi={I:this},0);A.abh.Text.
_Init.call(this.T={I:this},0);A.abh.Ak._Init.call(this.AdS={I:this},0);A.abh.Ak.
_Init.call(this.AdO={I:this},0);A.Core.Bh._Init.call(this.Bh={I:this},0);this.__proto__=
C.As9;this.G(B_);this.Pi.AV(0x1D);this.Pi.G(B_);this.Pi.L(0xFFE6E6E6);this.T.AV(
0x1D);this.T.G(Wf);this.T.A2(0x11);this.T.R(We);this.T.L(0xFF000000);this.AdS.G(
St);this.AdS.X(false);this.AdO.AV(0x3A);this.AdO.G(St);this.Bh.KB(KH);this.Bh.KA(
Zl);this.Bh.DN(Zm);this.Bh.D5(ON);this.J(this.Pi,0);this.J(this.T,0);this.J(this.
AdS,0);this.J(this.AdO,0);this.J(this.Bh,0);this.T.Aa(A.zW(A.eV.Aw));this.AdS.At(
A.zW(C.AKF));this.AdO.At(A.zW(C.Aiz));this.Bh.K$=[this,this.BwW];},_Done:function(
){this.__proto__=C.Fk;this.Pi._Done();this.T._Done();this.AdS._Done();this.AdO._Done(
);this.Bh._Done();C.Fk._Done.call(this);},_ReInit:function(){C.Fk._ReInit.call(this
);this.Pi._ReInit();this.T._ReInit();this.AdS._ReInit();this.AdO._ReInit();this.
Bh._ReInit();this.T.Aa(A.zW(A.eV.Aw));},_Mark:function(D){var B;C.Fk._Mark.call(
this,D);if((B=this.Pi)._cycle!=D)B._Mark(B._cycle=D);if((B=this.T)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.AdS)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AdO)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.Bh)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Demonstrator::AccordionHeader"};C.A_={AW:null,AQ:null,CV:null,Hq:-1,YA:function(
E){if(this.AW===E)return;this.AW=E;},Cc:function(Ab){A.aa8("%s",AbO);},YD:function(
E){if(A.z$(this.AQ,E))return;this.AQ=E;},AyM:function(H){if(!this.CV.XT)return;if(
this.CV.NA)return;A.ow(this.AQ,this);},_Init:function(aArg){A.Core.O._Init.call(
this,aArg);A.Core.Bh._Init.call(this.CV={I:this},0);this.__proto__=C.A_;this.G(B_
);this.CV.AV(0x3F);this.CV.KB(ON);this.CV.KA(Zm);this.CV.DN(Zl);this.CV.D5(KH);this.
CV.Aeh=0xF;this.CV.ADo(100);this.J(this.CV,0);this.CV.K$=[this,this.AyM];},_Done:
function(){this.__proto__=A.Core.O;this.CV._Done();A.Core.O._Done.call(this);},_ReInit:
function(){A.Core.O._ReInit.call(this);this.CV._ReInit();},_Mark:function(D){var
B;A.Core.O._Mark.call(this,D);if((B=this.AW)&&(B._cycle!=D))B._Mark(B._cycle=D);
if((B=this.AQ)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.CV)._cycle!=
D)B._Mark(B._cycle=D);},_className:"Demonstrator::ListItem"};C.Fk={AP0:null,Agz:
null,Agy:null,BjI:function(E){if(A.z$(this.AP0,E))return;this.AP0=E;},A6W:function(
E){if(A.z$(this.Agz,E))return;this.Agz=E;},A6V:function(E){if(A.z$(this.Agy,E))return;
this.Agy=E;},_Init:function(aArg){A.Core.O._Init.call(this,aArg);this.__proto__=
C.Fk;this.G(B_);},_Mark:function(D){var B;A.Core.O._Mark.call(this,D);if((B=this.
AP0)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.Agz)&&((B=B[0])._cycle
!=D))B._Mark(B._cycle=D);if((B=this.Agy)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=
D);},_className:"Demonstrator::ListHeader"};C.ALy={Dn:null,Aaa:null,V4:null,V3:null
,V2:null,M2:null,M1:null,Ky:null,Lr:false,Kq:false,BxM:false,Ag:function(Ae){var
B;A.abo.AgM.Ag.call(this,Ae);var FI=((Ae&0x10)===0x10);var Fe=((Ae&0x20)===0x20);
var Baf=(this.V2.YX||this.V3.YX)||this.V4.YX;if(Baf)this.Aaa.L(A.iF.Text);else this.
Aaa.L(A.iF.Ba);this.Lr=FI;this.Kq=Fe;this.BxM=Baf;},AyG:function(H){this.Am();if((
!this.V2.YX&&!this.V3.YX)&&!this.V4.YX){var Uq=this.AIk(this.ACF(),this.Aqe());var
Acg=this.ACB();this.Ky.Jp(Uq);if(Acg>Uq)this.Lb(Uq);A.ow(this.Dn,this);}},A0L:function(
H){this.Am();},Bh4:function(H){var B;var FW=this.M2.GJ;var Cz=(A.abh.Text.isPrototypeOf(
B=this.M2.Cd)?B:null);if(!Cz)return;Cz.R(A.aaq(FW+1900,4,10));Cz.Aa(A.zW(A.eV.Aw
));Cz.L(A.iF.Text);Cz.A2(0x12);Cz.G(A.aaN(Cz.M,[(B=this.M2.M)[2]-B[0],this.M2.GK
]));},Bh3:function(H){var B;var FW=this.M1.GJ;var Cz=(A.abh.Text.isPrototypeOf(B=
this.M1.Cd)?B:null);if(!Cz)return;Cz.R(A.aaq(FW+1,2,10)+Su);Cz.Aa(A.zW(A.eV.Aw));
Cz.L(A.iF.Text);Cz.A2(0x12);Cz.G(A.aaN(Cz.M,[(B=this.M1.M)[2]-B[0],this.M1.GK]));
},Bh1:function(H){var B;var FW=this.Ky.GJ;var Cz=(A.abh.Text.isPrototypeOf(B=this.
Ky.Cd)?B:null);if(!Cz)return;Cz.R(A.aaq(FW+1,2,10)+Su);Cz.Aa(A.zW(A.eV.Aw));Cz.L(
A.iF.Text);Cz.A2(0x12);Cz.G(A.aaN(Cz.M,[(B=this.Ky.M)[2]-B[0],this.Ky.GK]));},Aqe:
function(){return 1900+((((-this.M2.Bo/this.M2.GK)|0)+2)%200);},AjN:function(E){
if(E<1900)E=1900;if(E>2100)E=2100;this.M2.Gk(((E-1900)-2)*-this.M2.GK);var Uq=this.
AIk(this.ACF(),E);this.Ky.Jp(Uq);if(this.ACB()>Uq)this.Lb(Uq);},ACF:function(){return 1+((((-
this.M1.Bo/this.M1.GK)|0)+2)%12);},TE:function(E){if(E<1)E=1;if(E>12)E=12;this.M1.
Gk(((E-1)-2)*-this.M1.GK);var Uq=this.AIk(E,this.Aqe());this.Ky.Jp(Uq);if(this.ACB(
)>Uq)this.Lb(Uq);},ACB:function(){return 1+((((-this.Ky.Bo/this.Ky.GK)|0)+2)%this.
Ky.AR);},Lb:function(E){var Uq=this.AIk(this.ACF(),this.Aqe());if(E<1)E=1;if(E>Uq
)E=Uq;this.Ky.Gk(((E-2)-1)*-this.Ky.GK);},AIk:function(Ae0,Ab9){if(Ae0===2){if(!(
Ab9%4)&&(!!(Ab9%100)||!(Ab9%400)))return 29;else return 28;}else if((((Ae0===4)||(
Ae0===6))||(Ae0===9))||(Ae0===11))return 30;else return 31;},_Init:function(aArg
){A.abo.AgM._Init.call(this,aArg);A.abh.CC._Init.call(this.Aaa={I:this},0);A.Core.
H2._Init.call(this.V4={I:this},0);A.Core.H2._Init.call(this.V3={I:this},0);A.Core.
H2._Init.call(this.V2={I:this},0);A.Core.CI._Init.call(this.M2={I:this},0);A.Core.
CI._Init.call(this.M1={I:this},0);A.Core.CI._Init.call(this.Ky={I:this},0);this.
__proto__=C.ALy;this.G(AbP);this.Aaa.G(AeN);this.Aaa.NR(3);this.Aaa.L(0xFFE1E1E1
);this.Aaa.X(true);this.V4.G(Zn);this.V4.AQ9(Wg);this.V4.AQN(0.2);this.V3.G(Wh);
this.V3.AQ9(Wg);this.V3.AQN(0.2);this.V2.G(AeO);this.V2.AQ9(Wg);this.V2.AQN(0.2);
this.M2.G(Zn);this.M2.AQJ(true);this.M2.Gk(60);this.M2.Ad5(30);this.M2.Jp(200);this.
M1.G(Wh);this.M1.AQJ(true);this.M1.Gk(60);this.M1.Ad5(30);this.M1.Jp(12);this.Ky.
G(AeO);this.Ky.AQJ(true);this.Ky.Gk(60);this.Ky.Ad5(30);this.Ky.Jp(31);this.J(this.
Aaa,0);this.J(this.V4,0);this.J(this.V3,0);this.J(this.V2,0);this.J(this.M2,0);this.
J(this.M1,0);this.J(this.Ky,0);this.V4.Yw=[this,this.AyG];this.V4.R$=[this,this.
A0L];this.V3.Yw=[this,this.AyG];this.V3.R$=[this,this.A0L];this.V2.Yw=[this,this.
AyG];this.V2.R$=[this,this.A0L];this.M2.G7=[this,this.Bh4];this.M2.Avp(this.V4);
this.M1.G7=[this,this.Bh3];this.M1.Avp(this.V3);this.Ky.G7=[this,this.Bh1];this.
Ky.Avp(this.V2);},_Done:function(){this.__proto__=A.abo.AgM;this.Aaa._Done();this.
V4._Done();this.V3._Done();this.V2._Done();this.M2._Done();this.M1._Done();this.
Ky._Done();A.abo.AgM._Done.call(this);},_ReInit:function(){A.abo.AgM._ReInit.call(
this);this.Aaa._ReInit();this.V4._ReInit();this.V3._ReInit();this.V2._ReInit();this.
M2._ReInit();this.M1._ReInit();this.Ky._ReInit();},_Mark:function(D){var B;A.abo.
AgM._Mark.call(this,D);if((B=this.Dn)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);
if((B=this.Aaa)._cycle!=D)B._Mark(B._cycle=D);if((B=this.V4)._cycle!=D)B._Mark(B.
_cycle=D);if((B=this.V3)._cycle!=D)B._Mark(B._cycle=D);if((B=this.V2)._cycle!=D)
B._Mark(B._cycle=D);if((B=this.M2)._cycle!=D)B._Mark(B._cycle=D);if((B=this.M1).
_cycle!=D)B._Mark(B._cycle=D);if((B=this.Ky)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Demonstrator::DatePicker"};C.AFj={_class:function(){return A.abj.Aj;},0:{FileName:
"./res_index/DemonstratorWhiteTile.png",Format:A.jt,NoOfFrames:1,FrameSize:[40,40
],FrameDelay:0,_this:null}};C.ATi={_class:function(){return A.abj.Aj;},0:{FileName:
"./res_index/DemonstratorWhiteTileSmall.png",Format:A.jt,NoOfFrames:1,FrameSize:[
40,40],FrameDelay:0,_this:null}};C.AgW={_Init:function(aArg){A.Core.O._Init.call(
this,aArg);this.__proto__=C.AgW;this.G(EV);},_className:"Demonstrator::SelectionAreaContent"
};C.AKv={Y:null,UJ:null,S0:null,Bxl:function(H){var B;this.S0.G(A.aaL(this.S0.M,((
B=this.M)[3]-B[1])-((B=this.UJ.M)[3]-B[1])));},_Init:function(aArg){C.AgW._Init.
call(this,aArg);A.Core.Y._Init.call(this.Y={I:this},0);C.AJ1._Init.call(this.UJ={
I:this},0);C.AS2._Init.call(this.S0={I:this},0);this.__proto__=C.AKv;this.Y.AV(0x3F
);this.Y.G(EV);this.Y.Kc(1);this.UJ.G(AeP);this.UJ.Ai(true);this.UJ.ADr(true);this.
S0.AV(0x3);this.S0.G(JT);this.S0.Ai(true);this.S0.NQ(C.AKo);this.S0.BjD(C.AKC);this.
J(this.Y,0);this.J(this.UJ,0);this.J(this.S0,0);this.A$(this.S0);this.Y.Ej=[this
,this.Bxl];this.S0.YA(A._GetAutoObject(A.abq.Ath));},_Done:function(){this.__proto__=
C.AgW;this.Y._Done();this.UJ._Done();this.S0._Done();C.AgW._Done.call(this);},_ReInit:
function(){C.AgW._ReInit.call(this);this.Y._ReInit();this.UJ._ReInit();this.S0._ReInit(
);},_Mark:function(D){var B;C.AgW._Mark.call(this,D);if((B=this.Y)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.UJ)._cycle!=D)B._Mark(B._cycle=D);if((B=this.S0)._cycle!=
D)B._Mark(B._cycle=D);},_className:"Demonstrator::AnimalSelectionActions"};C.UJ={
_Init:function(aArg){C.As9._Init.call(this,aArg);this.__proto__=C.UJ;this.S(A.z2(
A.abg.A3b));},_ReInit:function(){C.As9._ReInit.call(this);this.S(A.z2(A.abg.A3b)
);},_className:"Demonstrator::ActionsHeader"};C.AJ1={Background:null,Z1:null,Aex:
null,Aek:null,Aew:null,Ajj:null,Ajk:null,Ajl:null,Ajm:null,Ajr:false,Agz:function(
H){var B;this.G(A.aaL(this.M,(B=this.Z1.M)[3]-B[1]));},Agy:function(H){this.G(A.
aaL(this.M,240));},ADr:function(E){if(this.Ajr===E)return;this.Ajr=E;this.Z1.ADr(
E);if(E)this.Agz(this);else this.Agy(this);},_Init:function(aArg){A.Core.O._Init.
call(this,aArg);A.abh.AH._Init.call(this.Background={I:this},0);C.UJ._Init.call(
this.Z1={I:this},0);C.Aex._Init.call(this.Aex={I:this},0);C.Aek._Init.call(this.
Aek={I:this},0);C.Aew._Init.call(this.Aew={I:this},0);A.abh.DT._Init.call(this.Ajj={
I:this},0);A.abh.DT._Init.call(this.Ajk={I:this},0);A.abh.DT._Init.call(this.Ajl={
I:this},0);A.abh.DT._Init.call(this.Ajm={I:this},0);this.__proto__=C.AJ1;this.G(
AeP);this.Background.AV(0x3F);this.Background.G(AeP);this.Z1.AV(0x1D);this.Z1.G(
B_);this.Aex.G(AeQ);this.Aek.G(Li);this.Aew.G(Ag$);this.Ajj.DN(Zm);this.Ajj.D5(ON
);this.Ajj.L(A.iF.Ba);this.Ajk.DN(Anf);this.Ajk.D5(N2);this.Ajk.L(A.iF.Ba);this.
Ajl.DN(Wi);this.Ajl.D5(Ang);this.Ajl.L(A.iF.Ba);this.Ajm.DN(Aha);this.Ajm.D5(Ahb
);this.Ajm.L(A.iF.Ba);this.J(this.Background,0);this.J(this.Z1,0);this.J(this.Aex
,0);this.J(this.Aek,0);this.J(this.Aew,0);this.J(this.Ajj,0);this.J(this.Ajk,0);
this.J(this.Ajl,0);this.J(this.Ajm,0);this.Z1.A6W([this,this.Agz]);this.Z1.A6V([
this,this.Agy]);},_Done:function(){this.__proto__=A.Core.O;this.Background._Done(
);this.Z1._Done();this.Aex._Done();this.Aek._Done();this.Aew._Done();this.Ajj._Done(
);this.Ajk._Done();this.Ajl._Done();this.Ajm._Done();A.Core.O._Done.call(this);}
,_ReInit:function(){A.Core.O._ReInit.call(this);this.Background._ReInit();this.Z1.
_ReInit();this.Aex._ReInit();this.Aek._ReInit();this.Aew._ReInit();this.Ajj._ReInit(
);this.Ajk._ReInit();this.Ajl._ReInit();this.Ajm._ReInit();},_Mark:function(D){var
B;A.Core.O._Mark.call(this,D);if((B=this.Background)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Z1)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Aex)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Aek)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Aew)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.Ajj)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
Ajk)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ajl)._cycle!=D)B._Mark(B._cycle=D);
if((B=this.Ajm)._cycle!=D)B._Mark(B._cycle=D);},_className:"Demonstrator::ActionsMenu"
};C.Mb={AaM:null,Agi:null,Bh:null,DT:null,AhU:function(H){},AXQ:function(s){this.
AhU(s);},_Init:function(aArg){A.Core.O._Init.call(this,aArg);A.abh.Ak._Init.call(
this.AaM={I:this},0);A.abh.Ak._Init.call(this.Agi={I:this},0);A.Core.Bh._Init.call(
this.Bh={I:this},0);A.abh.DT._Init.call(this.DT={I:this},0);this.__proto__=C.Mb;
this.G(B_);this.AaM.G(AbQ);this.AaM.L(A.iF.Text);this.Agi.G(Uc);this.Agi.L(A.iF.
Text);this.Agi.Ct(0);this.Bh.KB(KH);this.Bh.KA(OM);this.Bh.DN(Nc);this.Bh.D5(ON);
this.DT.DN(Nc);this.DT.D5(OM);this.DT.L(A.iF.Ba);this.J(this.AaM,0);this.J(this.
Agi,0);this.J(this.Bh,0);this.J(this.DT,0);this.AaM.At(A.zW(A.abj.K2));this.Agi.
At(A.zW(A.abj.ARs));this.Bh.BS=[this,this.AXQ];},_Done:function(){this.__proto__=
A.Core.O;this.AaM._Done();this.Agi._Done();this.Bh._Done();this.DT._Done();A.Core.
O._Done.call(this);},_ReInit:function(){A.Core.O._ReInit.call(this);this.AaM._ReInit(
);this.Agi._ReInit();this.Bh._ReInit();this.DT._ReInit();},_Mark:function(D){var
B;A.Core.O._Mark.call(this,D);if((B=this.AaM)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Agi)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Bh)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.DT)._cycle!=D)B._Mark(B._cycle=D);},_className:"Demonstrator::ActionsItem"
};C.Aek={AeE:null,AhU:function(H){var AfA=A.aa2(this.AeE.String,0,10);var BxA=A.
_GetAutoObject(A.abq.LB).Azj(AfA);if(BxA){AfA=AfA+1;this.AeE.R(AfA.toFixed());}}
,_Init:function(aArg){C.Mb._Init.call(this,aArg);C.Ap8._Init.call(this.AeE={I:this
},0);this.__proto__=C.Aek;this.AeE.G(Anh);this.AeE.R(Ani);this.AeE.L(A.iF.Text);
this.J(this.AeE,-1);this.AaM.At(A.zW(A.abi.Al_));},_Done:function(){this.__proto__=
C.Mb;this.AeE._Done();C.Mb._Done.call(this);},_ReInit:function(){C.Mb._ReInit.call(
this);this.AeE._ReInit();},_Mark:function(D){var B;C.Mb._Mark.call(this,D);if((B=
this.AeE)._cycle!=D)B._Mark(B._cycle=D);},_className:"Demonstrator::ScanAction"};
C.Aex={TX:null,OE:null,A1q:0,Init:function(aArg){var B;A.za([this,this.BwG],[B=A.
_GetAutoObject(A.abq.LB),B.AQp,B.AQ3],0);A.za([this,this.AyP],[B=A._GetAutoObject(
A.Device.Device),B.Aqc,B.ArU],0);A.ow([this,this.AyP],this);},Ag:function(Ae){C.
Mb.Ag.call(this,Ae);this.OE.X(!A._GetAutoObject(A.abq.LB).AvK);},AhU:function(H){
var B;A._GetAutoObject(A.abq.LB).Bbc(this);},AyP:function(H){if(A._GetAutoObject(
A.Device.Device).TemperatureUnit!==this.A1q){switch(A._GetAutoObject(A.Device.Device
).TemperatureUnit){case 0:this.OE.R(A.aap(A._GetAutoObject(A.abq.LB).Ari/100,0,1
));break;case 1:{var AsY=A._GetAutoObject(A.Device.Converter).ASD(A._GetAutoObject(
A.abq.LB).Ari/100,0,A._GetAutoObject(A.Device.Device).TemperatureUnit);this.OE.R(
A.aap(AsY,0,1));}break;default:A.aa8("%s%e",Awi,A._GetAutoObject(A.Device.Device
).TemperatureUnit);}this.A1q=A._GetAutoObject(A.Device.Device).TemperatureUnit;}
},Bwp:function(H){var B;var AsX=A.aaZ(this.OE.String,0);AsX=A._GetAutoObject(A.Device.
Converter).ASD(AsX,A._GetAutoObject(A.Device.Device).TemperatureUnit,0);AsX*=100;
A._GetAutoObject(A.abq.LB).A7e(Math.round(AsX)|0);},BwG:function(H){this.Am();},
_Init:function(aArg){C.Mb._Init.call(this,aArg);A.abr.TX._Init.call(this.TX={I:this
},0);C.OE._Init.call(this.OE={I:this},0);this.__proto__=C.Aex;var B;this.TX.G(Awj
);this.TX.A6S(A.z2(A.abg.A2k));this.OE.G(Akh);this.OE.R(Awk);this.OE.L(A.iF.Text
);this.OE.Biy(true);this.A1q=A._GetAutoObject(A.Device.Device).TemperatureUnit;this.
J(this.TX,0);this.J(this.OE,0);this.AaM.At(A.zW(A.abi.AaL));this.TX.Au([B=A._GetAutoObject(
A.abq.LB),B.AQp,B.AQ3]);this.TX.OnSetAppearance(A._GetAutoObject(A.abz.AAg));this.
OE.Dn=[this,this.Bwp];this.Init(aArg);},_Done:function(){this.__proto__=C.Mb;this.
TX._Done();this.OE._Done();C.Mb._Done.call(this);},_ReInit:function(){C.Mb._ReInit.
call(this);this.TX._ReInit();this.OE._ReInit();this.TX.A6S(A.z2(A.abg.A2k));},_Mark:
function(D){var B;C.Mb._Mark.call(this,D);if((B=this.TX)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.OE)._cycle!=D)B._Mark(B._cycle=D);},_className:"Demonstrator::TemperatureAction"
};C.ApT={Q:null,CC:null,Bh:null,AfU:null,Amd:null,Amc:null,ApY:null,Text:null,G$:
null,Ak:null,CT:null,ApX:null,ApZ:null,An_:false,Bf:function(aSize){this.G$.G(A.
aaN(this.G$.M,aSize));this.CC.AvR(1);this.CC.Jl(0,40);this.CC.E5(0,aSize[0]-20,20
,12.5,12.5,-90,90,10);this.CC.E5(0,20,20,12.5,12.5,90,270,10);this.CC.U1(0);},Ag:
function(Ae){var B;var F;A.Core.O.Ag.call(this,Ae);var GY=((Ae&0x40)===0x40);if(
GY){if(!!this.Q)this.Text.R((F=this.Q,F[1].call(F[0])));this.AfU.Ap(true);this.Ak.
X(false);}else{if(!!this.Q)this.Text.R((F=this.Q,F[1].call(F[0])));this.AfU.Ap(false
);this.CT.X(false);this.Ak.X(true);}this.An_=GY;},AhU:function(H){var B;if(!((this.
U&0x80)===0x80))this.Ib().AKN(this);},A5g:function(H){},A9t:function(s){this.A5g(
s);},Bgs:function(H){var B;var F;if(!this.Q||!(F=this.Q,F[1].call(F[0])).length)
this.CT.G(A.aaP(this.CT.M,A.zT(this.Text.M)[0]));else{this.CT.G(A.aaP(this.CT.M,
this.Text.AMJ(0)[2]+2));this.CT.G(A.aaR(this.CT.M,this.Text.AMJ(0)[1]));this.CT.
G(A.aaL(this.CT.M,(B=this.Text.AMJ(0))[3]-B[1]));}this.Ak.G(A.aaP(this.Ak.M,this.
Text.M[0]-((B=this.Ak.M)[2]-B[0])));},A5e:function(H){},A9s:function(s){this.A5e(
s);},Au:function(E){if(A.z_(this.Q,E))return;if(!!this.Q)A.zn([this,this.OY],this.
Q,0);this.Q=E;if(!!E)A.za([this,this.OY],E,0);if(!!E)A.ow([this,this.OY],this);}
,OY:function(H){this.Am();},Bh6:function(H){var B;if(((this.U&0x80)===0x80))this.
Ib().AAN(this);},Bbk:function(H){},_Init:function(aArg){A.Core.O._Init.call(this
,aArg);A.Graphics.Hl._Init.call(this.CC={I:this},0);A.Core.Bh._Init.call(this.Bh={
I:this},0);A.abm.UT._Init.call(this.AfU={I:this},0);A.Core.BR._Init.call(this.Amd={
I:this},0);A.Core.BR._Init.call(this.Amc={I:this},0);A.Core.BR._Init.call(this.ApY={
I:this},0);A.abh.Text._Init.call(this.Text={I:this},0);A.abh.G$._Init.call(this.
G$={I:this},0);A.abh.Ak._Init.call(this.Ak={I:this},0);A.abh.AH._Init.call(this.
CT={I:this},0);A.Core.BR._Init.call(this.ApX={I:this},0);A.Core.BR._Init.call(this.
ApZ={I:this},0);this.__proto__=C.ApT;var B;this.G(AeR);this.Bh.AV(0x3F);this.Bh.
KB(KH);this.Bh.KA(Arw);this.Bh.DN(OP);this.Bh.D5(PK);this.AfU.Fz(530);this.AfU.VM(
530);this.Amd.Filter=143;this.Amc.Filter=45;this.ApY.Filter=1;this.Text.AV(0x3F);
this.Text.G(AeR);this.Text.I1(true);this.Text.A2(0x12);this.Text.L(0xFFB3B3B3);this.
G$.G(AeR);this.G$.L(0xFFB3B3B3);this.G$.NR(1);this.Ak.G(Sv);this.CT.G(Awl);this.
CT.L(0xFFB3B3B3);this.CT.X(false);this.ApX.Filter=138;this.ApZ.Filter=137;this.J(
this.Bh,0);this.J(this.Text,0);this.J(this.G$,0);this.J(this.Ak,0);this.J(this.CT
,0);this.Bh.K$=[this,this.AhU];this.AfU.Q=[B=this.CT,B.E$,B.X];this.Amd.BS=[this
,this.A9t];this.Amd.DU=[this,this.A9t];this.Amc.BS=[this,this.A9s];this.Amc.DU=[
this,this.A9s];this.ApY.BS=[this,this.Bh6];this.Text.Qy([this,this.Bgs]);this.Text.
Aa(A.zW(A.eV.AB));this.G$.YE(this.CC);this.Ak.At(null);this.ApX.BS=[this,this.Bbk
];this.ApZ.BS=[this,this.Bbk];},_Done:function(){this.__proto__=A.Core.O;this.CC.
_Done();this.Bh._Done();this.AfU._Done();this.Amd._Done();this.Amc._Done();this.
ApY._Done();this.Text._Done();this.G$._Done();this.Ak._Done();this.CT._Done();this.
ApX._Done();this.ApZ._Done();A.Core.O._Done.call(this);},_ReInit:function(){A.Core.
O._ReInit.call(this);this.CC._ReInit();this.Bh._ReInit();this.AfU._ReInit();this.
Amd._ReInit();this.Amc._ReInit();this.ApY._ReInit();this.Text._ReInit();this.G$.
_ReInit();this.Ak._ReInit();this.CT._ReInit();this.ApX._ReInit();this.ApZ._ReInit(
);this.Text.Aa(A.zW(A.eV.AB));},_Mark:function(D){var B;A.Core.O._Mark.call(this
,D);if((B=this.Q)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.CC)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.Bh)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
AfU)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Amd)._cycle!=D)B._Mark(B._cycle=D);
if((B=this.Amc)._cycle!=D)B._Mark(B._cycle=D);if((B=this.ApY)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Text)._cycle!=D)B._Mark(B._cycle=D);if((B=this.G$)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.Ak)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
CT)._cycle!=D)B._Mark(B._cycle=D);if((B=this.ApX)._cycle!=D)B._Mark(B._cycle=D);
if((B=this.ApZ)._cycle!=D)B._Mark(B._cycle=D);},_className:"Demonstrator::InputView"
};C.Adq={Background:null,Xz:null,_Init:function(aArg){A.Core.O._Init.call(this,aArg
);A.abh.AH._Init.call(this.Background={I:this},0);C.Xz._Init.call(this.Xz={I:this
},0);this.__proto__=C.Adq;var B;this.G(Sw);this.Background.G(Sw);this.Xz.AV(0x1D
);this.Xz.G(Arx);this.J(this.Background,0);this.J(this.Xz,0);this.Xz.Au([B=A._GetAutoObject(
A.abq.AiP),B.A5V,B.ADG]);},_Done:function(){this.__proto__=A.Core.O;this.Background.
_Done();this.Xz._Done();A.Core.O._Done.call(this);},_ReInit:function(){A.Core.O.
_ReInit.call(this);this.Background._ReInit();this.Xz._ReInit();},_Mark:function(
D){var B;A.Core.O._Mark.call(this,D);if((B=this.Background)._cycle!=D)B._Mark(B.
_cycle=D);if((B=this.Xz)._cycle!=D)B._Mark(B._cycle=D);},_className:"Demonstrator::FilterRow"
};C.OE={Init:function(aArg){var B;A.za([this,this.AyP],[B=A._GetAutoObject(A.Device.
Device),B.Aqc,B.ArU],0);A.ow([this,this.AyP],this);},Ag:function(Ae){var B;C.Ap8.
Ag.call(this,Ae);var GY=((this.U&0x40)===0x40);if(!GY&&(this.String.length>0))this.
Text.R(((this.String+Awm)+A._GetAutoObject(A.abk.Temperature).AkS())+String.fromCharCode(
0x0A));else this.Text.R(this.String+String.fromCharCode(0x0A));if(this.Ef>this.String.
length)this.Ef=this.String.length;},AyP:function(H){this.Am();},_Init:function(aArg
){C.Ap8._Init.call(this,aArg);this.__proto__=C.OE;this.Init(aArg);},_className:"Demonstrator::TemperatureInputView"
};C.Ap8={B5:null,Dn:null,IO:null,Cp:null,AlK:null,RH:null,Kw:null,Bh:null,Text:null
,CT:null,Api:null,AqP:null,CC:null,G$:null,Ap_:null,ApG:null,Aps:null,String:A.jm
,Ef:0,AP:0xFFB3B3B3,ALA:false,Nh:false,Bf:function(aSize){this.G$.G(A.aaN(this.G$.
M,aSize));this.CC.AvR(1);this.CC.Jl(0,40);this.CC.E5(0,aSize[0]-20,20,12.5,12.5,-
90,90,10);this.CC.E5(0,20,20,12.5,12.5,90,270,10);this.CC.U1(0);},Ag:function(Ae
){var B;A.abo.I6.Ag.call(this,Ae);if(((Ae&0x40)===0x40))this.IO.Ap(true);else{this.
IO.Ap(false);this.CT.X(false);}},A1B:function(H){var B;var A8=this.Text.M;var Np=
0;var Nq=0;if(this.CT.Ek[0]<A8[0])Np=A8[0]-this.CT.Ek[0];if(this.CT.Ek[0]>A8[2])
Np=A8[2]-this.CT.Ek[0];if(this.CT.Ek[1]<A8[1])Nq=A8[1]-this.CT.Ek[1];if(this.CT.
Et[1]>A8[3])Nq=A8[3]-this.CT.Et[1];if(!!Np||!!Nq)this.Text.Gk(A.aak(this.Text.Bo
,[Np,Nq]));Np=this.Text.Bo[0];Nq=this.Text.Bo[1];var CZ=[(B=this.Text.C_())[2]-B[
0],B[3]-B[1]];if(CZ[0]<=((B=this.Text.M)[2]-B[0]))Np=0;if(CZ[1]<=((B=this.Text.M
)[3]-B[1]))Nq=0;this.Text.Gk([Np,Nq]);},Als:function(H){if(!this.B5)return;var A09=
this.Text.AER(this.Ef);var pos=this.Text.Aei(A09);this.CT.D5(A.aaj(pos,[0,this.B5.
Ascent]));this.CT.DN(A.aak(pos,[0,this.B5.Descent]));if(this.IO.Bw){this.IO.Ap(false
);this.IO.Ap(true);}if(this.Nh){A.ow([this,this.A1B],this);this.Nh=false;}},AyL:
function(H){if(!this.A38(0x80))this.Ib().AKN(this);var Ex=this.Text.ARw(this.Bh.
HU);var Uv=this.Text.AmX(Ex);if(Uv!==this.Ef){this.Ef=Uv;A.ow([this,this.Als],this
);this.Nh=true;}},AyE:function(H){if(!this.B5)return;var Ex=this.Text.AER(this.Ef
);if(this.Cp.CP===6){Ex=[Ex[0]-1,Ex[1]];if(this.Text.AmX(Ex)===this.Ef){Ex=[Ex[0
],Ex[1]-1];Ex=[this.Text.AA9(Ex[1]).length,Ex[1]];}}if(this.Cp.CP===7){Ex=[Ex[0]+
1,Ex[1]];if(this.Text.AmX(Ex)===this.Ef){Ex=[Ex[0],Ex[1]+1];Ex=[0,Ex[1]];}}var Uv=
this.Text.AmX(Ex);if(Uv!==this.Ef){this.Ef=Uv;A.ow([this,this.Als],this);this.Nh=
true;}},Ba6:function(H){if(!this.Ef)return;this.R(A.aa3(this.String,this.Ef-1,1)
);this.Ef=this.Ef-1;this.Nh=true;A.ow(this.Dn,this);},AyF:function(H){if(this.Ef>=
this.String.length)return;this.R(A.aa3(this.String,this.Ef,1));this.Nh=true;A.ow(
this.Dn,this);},Ba$:function(H){if(this.String.length>=15)return;var BuR=this.Kw.
D4;var AsV=String.fromCharCode(BuR);this.R(A.aaW(this.String,AsV,this.Ef));this.
Ef=this.Ef+AsV.length;this.Nh=true;A.ow(this.Dn,this);},R:function(E){if(this.String===
E)return;this.String=E;if(this.Ef>(E.length+1))this.Ef=E.length;this.Text.R(E+String.
fromCharCode(0x0A));this.Nh=true;this.Text.Gk(KH);},L:function(E){if(this.AP===E
)return;this.AP=E;this.Text.L(E);this.CT.L(E);this.G$.L(E);},Bbl:function(H){if(
this.ALA===false)return;if(this.String.indexOf(String.fromCharCode(0x2E),0)>=0)return;
if(this.String.length>=15)return;this.R(A.aaW(this.String,Su,this.Ef));this.Ef=this.
Ef+1;this.Nh=true;A.ow(this.Dn,this);},Biy:function(E){if(this.ALA===E)return;this.
ALA=E;if(E===false){var Bb0=this.String.indexOf(String.fromCharCode(0x2E),0);if(
Bb0>=0)this.R(A.aaX(this.String,Bb0));}this.Nh=true;this.Text.Gk(KH);},Bwx:function(
H){if(this.A38(0x80))this.Ib().AAN(this);this.Am();},Bwk:function(H){var Uv=this.
String.length;if(Uv!==this.Ef){this.Ef=Uv;A.ow([this,this.Als],this);this.Nh=true;
}},Bwo:function(H){if(!!this.Ef){this.Ef=0;A.ow([this,this.Als],this);this.Nh=true;
}},_Init:function(aArg){A.abo.I6._Init.call(this,aArg);A.abm.UT._Init.call(this.
IO={I:this},0);A.Core.BR._Init.call(this.Cp={I:this},0);A.Core.BR._Init.call(this.
AlK={I:this},0);A.Core.BR._Init.call(this.RH={I:this},0);A.Core.BR._Init.call(this.
Kw={I:this},0);A.Core.Bh._Init.call(this.Bh={I:this},0);A.abh.Text._Init.call(this.
Text={I:this},0);A.abh.DT._Init.call(this.CT={I:this},0);A.Core.BR._Init.call(this.
Api={I:this},0);A.Core.BR._Init.call(this.AqP={I:this},0);A.Graphics.Hl._Init.call(
this.CC={I:this},0);A.abh.G$._Init.call(this.G$={I:this},0);A.Core.BR._Init.call(
this.Ap_={I:this},0);A.Core.BR._Init.call(this.ApG={I:this},0);A.Core.BR._Init.call(
this.Aps={I:this},0);this.__proto__=C.Ap8;var B;this.G(AeR);this.IO.B0=false;this.
IO.Cv=true;this.IO.Fz(500);this.IO.VM(500);this.Cp.Filter=147;this.AlK.Filter=45;
this.RH.Filter=44;this.Kw.Filter=143;this.Bh.AV(0x3F);this.Bh.KB(PK);this.Bh.KA(
OP);this.Bh.DN(Arw);this.Bh.D5(KH);this.Bh.ADo(3);this.Text.AV(0x3F);this.Text.G(
AeR);this.Text.KD(false);this.Text.A2(0x12);this.Text.R(A.jm);this.Text.L(0xFFB3B3B3
);this.CT.DN(Awn);this.CT.D5(Awo);this.CT.A7q(2);this.CT.A7p(2);this.CT.L(0xFFB3B3B3
);this.CT.X(false);this.Api.Filter=138;this.AqP.Filter=137;this.G$.G(AeR);this.G$.
L(0xFFB3B3B3);this.G$.NR(1);this.Ap_.Filter=1;this.ApG.Filter=41;this.Aps.Filter=
42;this.J(this.Bh,0);this.J(this.Text,0);this.J(this.CT,0);this.J(this.G$,0);this.
IO.Q=[B=this.CT,B.E$,B.X];this.Cp.BS=[this,this.AyE];this.Cp.DU=[this,this.AyE];
this.AlK.BS=[this,this.Ba6];this.AlK.DU=[this,this.Ba6];this.RH.BS=[this,this.AyF
];this.RH.DU=[this,this.AyF];this.Kw.BS=[this,this.Ba$];this.Kw.DU=[this,this.Ba$
];this.Bh.BS=[this,this.AyL];this.Text.Qy([this,this.Als]);this.Text.Aa(A.zW(A.eV.
AB));this.B5=A.zW(A.eV.AB);this.Api.BS=[this,this.Bbl];this.AqP.BS=[this,this.Bbl
];this.G$.YE(this.CC);this.Ap_.BS=[this,this.Bwx];this.ApG.BS=[this,this.Bwo];this.
Aps.BS=[this,this.Bwk];},_Done:function(){this.__proto__=A.abo.I6;this.IO._Done(
);this.Cp._Done();this.AlK._Done();this.RH._Done();this.Kw._Done();this.Bh._Done(
);this.Text._Done();this.CT._Done();this.Api._Done();this.AqP._Done();this.CC._Done(
);this.G$._Done();this.Ap_._Done();this.ApG._Done();this.Aps._Done();A.abo.I6._Done.
call(this);},_ReInit:function(){A.abo.I6._ReInit.call(this);this.IO._ReInit();this.
Cp._ReInit();this.AlK._ReInit();this.RH._ReInit();this.Kw._ReInit();this.Bh._ReInit(
);this.Text._ReInit();this.CT._ReInit();this.Api._ReInit();this.AqP._ReInit();this.
CC._ReInit();this.G$._ReInit();this.Ap_._ReInit();this.ApG._ReInit();this.Aps._ReInit(
);},_Mark:function(D){var B;A.abo.I6._Mark.call(this,D);if((B=this.B5)&&(B._cycle
!=D))B._Mark(B._cycle=D);if((B=this.Dn)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D
);if((B=this.IO)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Cp)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.AlK)._cycle!=D)B._Mark(B._cycle=D);if((B=this.RH)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.Kw)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Bh
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Text)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.CT)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Api)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.AqP)._cycle!=D)B._Mark(B._cycle=D);if((B=this.CC)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.G$)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ap_)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.ApG)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Aps
)._cycle!=D)B._Mark(B._cycle=D);},_className:"Demonstrator::NumberInput"};C.Aew={
LabelDataSync:null,AhU:function(H){var B;A.ow([B=A._GetAutoObject(A.abt.Ard),B.BxS
],this);},_Init:function(aArg){C.Mb._Init.call(this,aArg);A.kh.CR._Init.call(this.
LabelDataSync={I:this},0);this.__proto__=C.Aew;this.LabelDataSync.G(Anj);this.LabelDataSync.
R(A.z2(A.abg.A24));this.LabelDataSync.L(A.iF.Text);this.J(this.LabelDataSync,0);
this.AaM.At(A.zW(C.ASu));this.LabelDataSync.Aa(A.zW(A.eV.Aw));this.LabelDataSync.
BD(A.zW(A.eV.AB));},_Done:function(){this.__proto__=C.Mb;this.LabelDataSync._Done(
);C.Mb._Done.call(this);},_ReInit:function(){C.Mb._ReInit.call(this);this.LabelDataSync.
_ReInit();this.LabelDataSync.R(A.z2(A.abg.A24));this.LabelDataSync.Aa(A.zW(A.eV.
Aw));this.LabelDataSync.BD(A.zW(A.eV.AB));},_Mark:function(D){var B;C.Mb._Mark.call(
this,D);if((B=this.LabelDataSync)._cycle!=D)B._Mark(B._cycle=D);},_className:"Demonstrator::SyncAction"
};C.ASu={_class:function(){return A.abj.Aj;},0:{FileName:"./res_index/DemonstratorSyncIcon.png"
,Format:A.cC,NoOfFrames:1,FrameSize:[50,60],FrameDelay:0,_this:null}};C.Aal={TimespanDaysToString:
null,AA$:function(aIndex){if(this.AA6()>aIndex)return this.TimespanDaysToString.
BZ(aIndex);A.aa8("%s",Awp);return A.jm;},AA6:function(){return 4;},C$:function(aIndex
){var Aig=0;switch(aIndex){case 0:Aig=0;break;case 1:Aig=1;break;case 2:Aig=2;break;
case 3:Aig=3;break;default:throw new Error(Ary+aIndex.toFixed());}return Aig;},_Init:
function(aArg){A.abx.AlM._Init.call(this,aArg);A.Device.TimespanDaysToString._Init.
call(this.TimespanDaysToString={I:this},0);this.__proto__=C.Aal;},_Done:function(
){this.__proto__=A.abx.AlM;this.TimespanDaysToString._Done();A.abx.AlM._Done.call(
this);},_ReInit:function(){A.abx.AlM._ReInit.call(this);this.TimespanDaysToString.
_ReInit();},_Mark:function(D){var B;A.abx.AlM._Mark.call(this,D);if((B=this.TimespanDaysToString
)._cycle!=D)B._Mark(B._cycle=D);},_className:"Demonstrator::DatePickerUnitDD"};C.
BBr={Gt:0,AS9:1,G5:2,Year:3};C.AAK={_class:function(){return A.abj.Aj;},0:{FileName:
"./res_index/DemonstratorEarTagIcon.png",Format:A.jt,NoOfFrames:2,FrameSize:[37,
37],FrameDelay:0,_this:null}};C.AE4={_class:function(){return A.abj.Aj;},0:{FileName:
"./res_index/DemonstratorTransponderEarTagIcon.png",Format:A.jt,NoOfFrames:2,FrameSize:[
37,37],FrameDelay:0,_this:null}};
C._Init=function(){C.AS2.__proto__=A.abo.Menu;C.AR4.__proto__=A.Core.O;C.AKo.__proto__=
C.A_;C.Mc.__proto__=A.Core.O;C.Xz.__proto__=C.ApT;C.Aam.__proto__=A.Core.O;C.At_.
__proto__=A.abo.AgO;C.AKC.__proto__=C.Fk;C.As9.__proto__=C.Fk;C.A_.__proto__=A.Core.
O;C.Fk.__proto__=A.Core.O;C.ALy.__proto__=A.abo.AgM;C.AgW.__proto__=A.Core.O;C.AKv.
__proto__=C.AgW;C.UJ.__proto__=C.As9;C.AJ1.__proto__=A.Core.O;C.Mb.__proto__=A.Core.
O;C.Aek.__proto__=C.Mb;C.Aex.__proto__=C.Mb;C.ApT.__proto__=A.Core.O;C.Adq.__proto__=
A.Core.O;C.OE.__proto__=C.Ap8;C.Ap8.__proto__=A.abo.I6;C.Aew.__proto__=C.Mb;C.Aal.
__proto__=A.abx.AlM;};C._ReInit=function(){};C.DE=function(D){var B;if((B=C.Background[
0]._this)&&(B._cycle!=D))B._Done(C.Background[0]._this=null);if((B=C.AKX[0]._this
)&&(B._cycle!=D))B._Done(C.AKX[0]._this=null);if((B=C.AKY[0]._this)&&(B._cycle!=
D))B._Done(C.AKY[0]._this=null);if((B=C.AKZ[0]._this)&&(B._cycle!=D))B._Done(C.AKZ[
0]._this=null);if((B=C.AK0[0]._this)&&(B._cycle!=D))B._Done(C.AK0[0]._this=null);
if((B=C.ANX[0]._this)&&(B._cycle!=D))B._Done(C.ANX[0]._this=null);if((B=C.Filter[
0]._this)&&(B._cycle!=D))B._Done(C.Filter[0]._this=null);if((B=C.APt[0]._this)&&(
B._cycle!=D))B._Done(C.APt[0]._this=null);if((B=C.Aiz[0]._this)&&(B._cycle!=D))B.
_Done(C.Aiz[0]._this=null);if((B=C.AKF[0]._this)&&(B._cycle!=D))B._Done(C.AKF[0].
_this=null);if((B=C.Aq6[0]._this)&&(B._cycle!=D))B._Done(C.Aq6[0]._this=null);if((
B=C.ASz[0]._this)&&(B._cycle!=D))B._Done(C.ASz[0]._this=null);if((B=C.AFj[0]._this
)&&(B._cycle!=D))B._Done(C.AFj[0]._this=null);if((B=C.ATi[0]._this)&&(B._cycle!=
D))B._Done(C.ATi[0]._this=null);if((B=C.ASu[0]._this)&&(B._cycle!=D))B._Done(C.ASu[
0]._this=null);if((B=C.AAK[0]._this)&&(B._cycle!=D))B._Done(C.AAK[0]._this=null);
if((B=C.AE4[0]._this)&&(B._cycle!=D))B._Done(C.AE4[0]._this=null);};return C;})(
);

/* VitalControl demonstration application, © Urban GmbH & Co.KG 2023 */