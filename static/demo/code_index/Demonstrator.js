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
107,0];var T_=[240,0];var Wa=[240,60];var Wb=[107,60];var I$="%d.%m.%Y";var T$="Unhandled date unit: ";
var Wc=[0,0,200,180];var Wd=[36,0,200,30];var Zg=[0,30,160,60];var St="Text";var
Zh=[0,70,40,110];var We=[44,70,156,110];var Ua=[160,70,200,110];var Wf=[7,2,27,25
];var QT=[0,30,170,180];var Wg=[170,34,190,57];var OO=[0,0,40,40];var PK=[0,40];
var Ub=[40,40];var Zi=[40,0];var Wh=[0,0,370,100];var Zj=[20,0,290,60];var Zk=[0
,60,370,100];var Wi="Cap";var Wj=[20,0,370,60];var Su=[310,0,370,60];var Zl=[370
,0];var Zm=[370,60];var AbO="UpdateData is called for the base class ListItemBase. Please make "+
"sure this method is implemented by a derived class.";var Sv=".";var AbP=[0,0,170
,150];var AeN=[0,59,170,90];var Zn=[110,0,170,150];var Wk=[0,30];var Wl=[50,0,100
,150];var AeO=[0,0,40,150];var AeP=[0,0,370,240];var JT=[0,60,370,710];var AbQ=[
0,60,370,120];var Li=[0,120,370,180];var Ag$=[0,180,370,240];var Anc=[370,120];var
N2=[0,120];var Wm=[370,180];var And=[0,180];var Aha=[370,240];var Ahb=[0,240];var
AbR=[0,0,50,60];var Uc=[50,0,100,60];var Ane=[100,10,370,50];var Anf="276000901234567";
var Awj="Unhandled temperature unit";var Awk=[110,0,260,60];var Akh=[235,10,370,
50];var Awl="39.5";var AeQ=[0,0,270,40];var Art=[270,0];var OP=[270,40];var Sw=[
150,0,170,40];var Awm=[205,10,207,30];var Sx=[0,0,370,40];var Aru=[50,0,320,40];
var Awn=" ";var Awo=[135,23];var Awp=[135,0];var Ang=[100,0,370,60];var Awq="Error: Nullpointer Exception";
var Arv="Unknown Date Piecker Unit Index: ";
C.Background={_class:function(){return A.abj.Aj;},0:{FileName:"./res_index/DemonstratorBackground.png"
,Format:A.cC,NoOfFrames:1,FrameSize:[1000,740],FrameDelay:0,_this:null}};C.AKY={
_class:function(){return A.abj.Aj;},0:{FileName:"./res_index/DemonstratorButtonLeft.png"
,Format:A.cC,NoOfFrames:1,FrameSize:[40,40],FrameDelay:0,_this:null}};C.AKZ={_class:
function(){return A.abj.Aj;},0:{FileName:"./res_index/DemonstratorButtonLeftPressed.png"
,Format:A.cC,NoOfFrames:1,FrameSize:[40,40],FrameDelay:0,_this:null}};C.AK0={_class:
function(){return A.abj.Aj;},0:{FileName:"./res_index/DemonstratorButtonRight.png"
,Format:A.cC,NoOfFrames:1,FrameSize:[40,40],FrameDelay:0,_this:null}};C.AK1={_class:
function(){return A.abj.Aj;},0:{FileName:"./res_index/DemonstratorButtonRightPressed.png"
,Format:A.cC,NoOfFrames:1,FrameSize:[40,40],FrameDelay:0,_this:null}};C.ANY={_class:
function(){return A.abj.Aj;},0:{FileName:"./res_index/DemonstratorIconDatePicker.png"
,Format:A.cC,NoOfFrames:1,FrameSize:[20,23],FrameDelay:0,_this:null}};C.Filter={
_class:function(){return A.abj.Aj;},0:{FileName:"./res_index/DemonstratorFilter.png"
,Format:A.cC,NoOfFrames:1,FrameSize:[15,16],FrameDelay:0,_this:null}};C.APu={_class:
function(){return A.abj.Aj;},0:{FileName:"./res_index/DemonstratorMenuIcon.png",
Format:A.cC,NoOfFrames:1,FrameSize:[20,16],FrameDelay:0,_this:null}};C.Aiz={_class:
function(){return A.abj.Aj;},0:{FileName:"./res_index/DemonstratorArrowRight.png"
,Format:A.cC,NoOfFrames:1,FrameSize:[17,16],FrameDelay:0,_this:null}};C.AKG={_class:
function(){return A.abj.Aj;},0:{FileName:"./res_index/DemonstratorArrowDown.png"
,Format:A.cC,NoOfFrames:1,FrameSize:[17,16],FrameDelay:0,_this:null}};C.Aq3={_class:
function(){return A.abj.Aj;},0:{FileName:"./res_index/DemonstratorScanIcon.png",
Format:A.jt,NoOfFrames:2,FrameSize:[37,37],FrameDelay:0,_this:null}};C.ASB={_class:
function(){return A.abj.Aj;},0:{FileName:"./res_index/DemonstratorTemperatureIcon.png"
,Format:A.cC,NoOfFrames:1,FrameSize:[17,37],FrameDelay:0,_this:null}};C.AS4={Adf:
null,AW:null,AQ:null,Background:null,H2:null,AC:null,IG:null,Dh:null,K9:null,A4I:
null,A45:0,Bf:function(aSize){A.abo.Menu.Bf.call(this,aSize);this.IG.G(A.aaS(this.
IG.M,this.AC.OC));this.IG.G([].concat(this.IG.M.slice(0,3),aSize[1]));},Ag:function(
Ae){var B;A.abo.Menu.Ag.call(this,Ae);var GY=((Ae&0x40)===0x40);if(GY&&(this.AC.
Ge<0))this.AC.GL(0);},NQ:function(E){if(this.K9===E)return;this.K9=E;this.AC.NQ(
E);},Bjz:function(E){var B;if(this.A4I===E)return;if(!!this.Adf){this.HG(this.Adf
);this.Adf=null;}if(!!E){this.Adf=(C.Fk.isPrototypeOf(B=A._NewObject(E,0))?B:null
);this.Adf.A6P([this,this.Agx]);this.Adf.A6Q([this,this.Agy]);this.Adf.BjE(null);
this.J(this.Adf,0);this.AC.A6W((B=this.Adf.M)[3]-B[1]);}else this.AC.A6W(0);this.
IG.G(A.aaS(this.IG.M,this.AC.OC));A.ow([this,this.E4],this);this.A4I=E;},G7:function(
H){var B;var FW=this.AC.GJ;var Z=(C.A_.isPrototypeOf(B=this.AC.Cd)?B:null);if(!Z
)return;Z.YE(this.AW);Z.Cc(FW);Z.YH(this.AQ);Z.G(A.aaN(Z.M,[(B=this.AC.M)[2]-B[0
],this.AC.GK]));},YE:function(E){var B;if(this.AW===E)return;if(!!this.AW){A.zl([
this,this.Cc],this.AW,0);A.zn([this,this.Am7],[B=this.AW,B.Fy,B.FC],0);}this.AW=
E;if(!!E){A.y_([this,this.Cc],E,0);A.za([this,this.Am7],[E,E.Fy,E.FC],0);}A.ow([
this,this.Cc],this);A.ow([this,this.Am7],this);},Cc:function(H){if(!!this.AW){this.
AC.Jp(this.AW.Cj());this.AC.AaP(0,this.AC.AR-1);}else this.AC.Jp(0);if(this.A45!==
this.AC.AR){this.AC.AzO(null,null);this.A45=this.AC.AR;}A.ow([this,this.E4],this
);},Agy:function(H){var B;this.G(A.aaL(this.M,(B=this.AC.AMI())[3]-B[1]));},Agx:
function(H){this.G(A.aaL(this.M,180));},A6c:function(H){var Jx=(A.Core.BR.isPrototypeOf(
H)?H:null);var FW=this.AC.Ge;if(Jx.CP===4)FW=FW-1;else if(Jx.CP===5)FW=FW+1;else
if((Jx.D4>=0x30)&&(Jx.D4<=0x39))A._GetAutoObject(A.abq.AiP).E6(Jx.D4);else if(Jx.
CP===45)A._GetAutoObject(A.abq.AiP).Delete();else Jx.Pc=true;if((FW<0)||(FW>=this.
AC.AR))return;this.AC.GL(FW);this.BuZ(FW,true);},BuO:function(H){var Z=(C.A_.isPrototypeOf(
H)?H:null);this.AC.GL(Z.Hq);},BuZ:function(GT,Ab6){var B;if((GT<0)||(GT>=this.AC.
AR))return;var AM=this.AC.Apv(GT,GT);var A8=this.AC.M;A8=A.aaS(A8,(B=this.AC.AMI(
))[3]-B[1]);A8=A.aaL(A8,(((B=this.AC.M)[3]-B[1])-((B=this.AC.AMI())[3]-B[1]))-((
B=this.AC.Bfd())[3]-B[1]));var Lu=A.kz(AM,A8);if((!Ab6&&!((Lu[0]>=Lu[2])||(Lu[1]>=
Lu[3])))||(Ab6&&A.z9(Lu,AM)))return;var Bm=0;if(AM[3]>A8[3])Bm=AM[3]-A8[3];if(Bm>(
AM[1]-A8[1]))Bm=(AM[3]-A8[1])-this.AC.GK;this.AC.Gj(this.AC.Bn-Bm);},Am7:function(
H){this.AC.GL(-1);},E4:function(H){var B;this.IG.Mr(this.AC.GK*this.AC.AR);this.
IG.Mt(((B=this.AC.M)[3]-B[1])-this.AC.OC);this.IG.Ms(-this.AC.Bn);},_Init:function(
aArg){A.abo.Menu._Init.call(this,aArg);A.abh.AH._Init.call(this.Background={I:this
},0);A.Core.H2._Init.call(this.H2={I:this},0);A.Core.CI._Init.call(this.AC={I:this
},0);A.kh.As._Init.call(this.IG={I:this},0);A.Core.BR._Init.call(this.Dh={I:this
},0);this.__proto__=C.AS4;this.G(B_);this.Background.AV(0x3);this.Background.G(B_
);this.H2.AV(0x3F);this.H2.G(B_);this.AC.AV(0x3F);this.AC.G(B_);this.AC.Ad5(60);
this.AC.Jp(0);this.AC.NQ(this.K9);this.IG.AV(0x3A);this.IG.G(BH);this.IG.L(0xFF808080
);this.J(this.Background,0);this.J(this.H2,0);this.J(this.AC,0);this.J(this.IG,0
);this.AC.Ej=[this,this.E4];this.AC.G7=[this,this.G7];this.AC.Avq(this.H2);this.
AQ=[this,this.BuO];this.Dh.BS=[this,this.A6c];this.Dh.DU=[this,this.A6c];},_Done:
function(){this.__proto__=A.abo.Menu;this.Background._Done();this.H2._Done();this.
AC._Done();this.IG._Done();this.Dh._Done();A.abo.Menu._Done.call(this);},_ReInit:
function(){A.abo.Menu._ReInit.call(this);this.Background._ReInit();this.H2._ReInit(
);this.AC._ReInit();this.IG._ReInit();this.Dh._ReInit();},_Mark:function(D){var B;
A.abo.Menu._Mark.call(this,D);if((B=this.Adf)&&(B._cycle!=D))B._Mark(B._cycle=D);
if((B=this.AW)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.AQ)&&((B=B[0])._cycle
!=D))B._Mark(B._cycle=D);if((B=this.Background)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.H2)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AC)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.IG)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Dh)._cycle!=D)B._Mark(
B._cycle=D);},_className:"Demonstrator::VerticalMenu"};C.AR6={Gr:null,AH:null,CC:
null,Init:function(aArg){var B;A.za([this,this.Ht],[B=A._GetAutoObject(A.abq.LB)
,B.A5S,B.A65],0);A.ow([this,this.Ht],this);},Abe:function(E){if(this.Gr===E)return;
if(!!this.Gr)this.HG(this.Gr);this.Gr=E;if(!!this.Gr)this.J(this.Gr,0);this.A$(E
);this.AgS(E,this.CC);this.Am();},Ht:function(H){var B;if(!!A._GetAutoObject(A.abq.
LB).Aq6)this.Abe((C.AgW.isPrototypeOf(B=A._NewObject(A._GetAutoObject(A.abq.LB).
Aq6,0))?B:null));else this.Abe(null);},_Init:function(aArg){A.Core.O._Init.call(
this,aArg);A.abh.AH._Init.call(this.AH={I:this},0);A.abh.CC._Init.call(this.CC={
I:this},0);this.__proto__=C.AR6;this.G(EV);this.AH.AV(0x3F);this.AH.G(EV);this.CC.
G(EV);this.CC.L(0xFF000000);this.J(this.AH,0);this.J(this.CC,0);this.Init(aArg);
},_Done:function(){this.__proto__=A.Core.O;this.AH._Done();this.CC._Done();A.Core.
O._Done.call(this);},_ReInit:function(){A.Core.O._ReInit.call(this);this.AH._ReInit(
);this.CC._ReInit();},_Mark:function(D){var B;A.Core.O._Mark.call(this,D);if((B=
this.Gr)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.AH)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.CC)._cycle!=D)B._Mark(B._cycle=D);},_className:"Demonstrator::SelectionArea"
};C.AKp={Afz:0,Nn:0,Background:null,T:null,Aiv:null,AcX:null,W3:null,AcY:null,Mc:
null,Lr:false,Kq:false,Ag:function(Ae){var B;C.A_.Ag.call(this,Ae);var FI=((Ae&0x10
)===0x10);var Fe=((Ae&0x20)===0x20);var GY=((Ae&0x40)===0x40);if(!FI){this.Background.
L(0xFFAAAAAA);this.T.L(0xFF888888);this.Mc.Ap(false);this.Mc.X(false);}else if(GY
){this.Background.L(A.iF.AY);this.T.L(A.iF.Bd);this.Mc.Ap(true);this.Mc.X(true);
}else if(Fe){this.Background.L(0xFFE6DED8);this.T.L(0xFF000000);this.Mc.Ap(true);
this.Mc.X(true);}else{this.Background.L(0xFFFFFFFF);this.T.L(0xFF000000);this.Mc.
Ap(false);this.Mc.X(false);}if(!this.Kq&&Fe)A._GetAutoObject(A.abq.LB).M6(this.Afz
);this.Mc.BjB(this.Nn>0);this.Mc.Bj0(this.Afz>0);this.Lr=FI;this.Kq=Fe;},Cc:function(
Ab){if(!this.AW){this.W3.At(A.zW(A.abi.Ady));this.AcX.L(A.iF.AeH);return;}this.Hq=
Ab;if(!!this.AW){this.Nn=this.AW.LD(Ab,26);this.Afz=this.AW.LD(Ab,22);var O6=this.
AW.CE(Ab,1);var AkU=this.AW.HV(Ab,11);var AkL=this.AW.IW(Ab,17);var Ly=this.AW.IW(
Ab,13);var H5=this.AW.AlY(Ab,14);this.T.R(O6.toFixed());var Wy=A._GetAutoObject(
A.Device.Helper).AKe(Ly,AkU,AkL);switch(H5){case 0:this.W3.At(A.zW(A.abi.Ady));break;
case 1:this.W3.At(A.zW(A.abi.Aub));break;case 2:this.W3.At(A.zW(A.abi.Aue));break;
default:A.aa8("%s%e",GS,H5);}this.AcY.At(this.W3.Aj);this.AcX.L(A._GetAutoObject(
A.abk.Assessment).PX(Wy));this.Am();}},_Init:function(aArg){C.A_._Init.call(this
,aArg);A.abh.AH._Init.call(this.Background={I:this},0);A.kh.CR._Init.call(this.T={
I:this},0);A.abh.Ak._Init.call(this.Aiv={I:this},0);A.abh.Ak._Init.call(this.AcX={
I:this},0);A.abh.Ak._Init.call(this.W3={I:this},0);A.abh.Ak._Init.call(this.AcY={
I:this},0);C.Mc._Init.call(this.Mc={I:this},0);this.__proto__=C.AKp;this.Background.
AV(0x3F);this.Background.G(B_);this.T.AV(0x3F);this.T.G(Jt);this.T.R(A.z2(A.abg.
HA));this.T.A2(0x11);this.T.L(0xFF000000);this.Aiv.G(IL);this.Aiv.L(A.iF.Text);this.
AcX.G(IL);this.AcX.L(A.iF.EY);this.W3.G(IL);this.AcY.G(IL);this.AcY.L(A.iF.Text);
this.AcY.Ct(1);this.Mc.AV(0x3);this.Mc.G(OK);this.J(this.Background,0);this.J(this.
T,0);this.J(this.Aiv,0);this.J(this.AcX,0);this.J(this.W3,0);this.J(this.AcY,0);
this.J(this.Mc,0);this.T.Aa(A.zW(A.eV.Aw));this.T.BD(A.zW(A.eV.AB));this.T.Db(A.
zW(A.eV.Cw));this.Aiv.At(A.zW(C.AFj));this.AcX.At(A.zW(C.ATk));this.W3.At(A.zW(A.
abi.Ady));this.AcY.At(A.zW(A.abi.Ady));},_Done:function(){this.__proto__=C.A_;this.
Background._Done();this.T._Done();this.Aiv._Done();this.AcX._Done();this.W3._Done(
);this.AcY._Done();this.Mc._Done();C.A_._Done.call(this);},_ReInit:function(){C.
A_._ReInit.call(this);this.Background._ReInit();this.T._ReInit();this.Aiv._ReInit(
);this.AcX._ReInit();this.W3._ReInit();this.AcY._ReInit();this.Mc._ReInit();},_Mark:
function(D){var B;C.A_._Mark.call(this,D);if((B=this.Background)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.T)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Aiv)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.AcX)._cycle!=D)B._Mark(B._cycle=D);if((B=this.W3
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AcY)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Mc)._cycle!=D)B._Mark(B._cycle=D);},_className:"Demonstrator::AnimalMenuItem"
};C.Mc={TM:null,VP:null,Aj6:null,M9:null,NX:null,YW:null,Abz:null,Aux:false,Av9:
false,C8:function(){this.Am();},Ag:function(Ae){var B;A.Core.O.Ag.call(this,Ae);
var GY=((Ae&0x40)===0x40);if(GY){this.M9.L(A.iF.Bd);this.NX.L(A.iF.Bd);}else{this.
M9.L(A.iF.Text);this.NX.L(A.iF.Text);}if(this.Av9){this.M9.R(A.z2(A.abg.BkS));if(
this.Aux){this.TM.At(A.zW(C.AE4));this.VP.At(A.zW(C.AE4));}else{this.TM.At(A.zW(
C.Aq3));this.VP.At(A.zW(C.Aq3));}}else if(this.Aux){this.TM.At(A.zW(C.AAL));this.
VP.At(A.zW(C.AAL));this.M9.R(PJ);}var A07=this.Av9||this.Aux;this.TM.X(A07);this.
VP.X(A07);this.M9.X(A07);this.YW.Ap(this.Av9);},Bj0:function(E){if(this.Av9===E)
return;this.Av9=E;this.Am();},BjB:function(E){if(this.Aux===E)return;this.Aux=E;
this.Am();},_Init:function(aArg){A.Core.O._Init.call(this,aArg);A.abh.Ak._Init.call(
this.TM={I:this},0);A.abh.Ak._Init.call(this.VP={I:this},0);A.abh.Ak._Init.call(
this.Aj6={I:this},0);A.kh.CR._Init.call(this.M9={I:this},0);A.kh.CR._Init.call(this.
NX={I:this},0);A.Core.Bh._Init.call(this.YW={I:this},0);A.Core.Bh._Init.call(this.
Abz={I:this},0);this.__proto__=C.Mc;var B;this.G(N1);this.TM.AV(0x6);this.TM.G(CJ
);this.TM.L(A.iF.C1);this.TM.Ct(1);this.VP.AV(0x6);this.VP.G(CJ);this.VP.L(A.iF.
Text);this.Aj6.AV(0xE);this.Aj6.G(Fn);this.M9.AV(0x7);this.M9.G(Nb);this.M9.A2(0x11
);this.M9.L(0xFF000000);this.NX.AV(0x3);this.NX.G(OL);this.NX.R(A.z2(A.abg.Temperature
));this.NX.A2(0x11);this.NX.L(0xFF000000);this.YW.AV(0x3);this.YW.KB(KH);this.YW.
KA(OM);this.YW.DN(Nc);this.YW.D5(ON);this.Abz.AV(0x3);this.Abz.KB(Ss);this.Abz.KA(
T_);this.Abz.DN(Wa);this.Abz.D5(Wb);this.J(this.TM,0);this.J(this.VP,0);this.J(this.
Aj6,0);this.J(this.M9,0);this.J(this.NX,0);this.J(this.YW,0);this.J(this.Abz,0);
this.TM.At(A.zW(C.Aq3));this.VP.At(A.zW(C.Aq3));this.Aj6.At(A.zW(C.ASB));this.M9.
Aa(A.zW(A.eV.Aw));this.M9.BD(A.zW(A.eV.AB));this.M9.Db(A.zW(A.eV.Cw));this.NX.Aa(
A.zW(A.eV.Aw));this.NX.BD(A.zW(A.eV.AB));this.NX.Db(A.zW(A.eV.Cw));this.YW.K$=[B=
A._GetAutoObject(A.abq.LB),B.Bbm];this.Abz.K$=[B=A._GetAutoObject(A.abq.LB),B.Ba9
];},_Done:function(){this.__proto__=A.Core.O;this.TM._Done();this.VP._Done();this.
Aj6._Done();this.M9._Done();this.NX._Done();this.YW._Done();this.Abz._Done();A.Core.
O._Done.call(this);},_ReInit:function(){A.Core.O._ReInit.call(this);this.TM._ReInit(
);this.VP._ReInit();this.Aj6._ReInit();this.M9._ReInit();this.NX._ReInit();this.
YW._ReInit();this.Abz._ReInit();this.NX.R(A.z2(A.abg.Temperature));this.M9.Aa(A.
zW(A.eV.Aw));this.M9.BD(A.zW(A.eV.AB));this.M9.Db(A.zW(A.eV.Cw));this.NX.Aa(A.zW(
A.eV.Aw));this.NX.BD(A.zW(A.eV.AB));this.NX.Db(A.zW(A.eV.Cw));this.C8();},_Mark:
function(D){var B;A.Core.O._Mark.call(this,D);if((B=this.TM)._cycle!=D)B._Mark(B.
_cycle=D);if((B=this.VP)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Aj6)._cycle!=D
)B._Mark(B._cycle=D);if((B=this.M9)._cycle!=D)B._Mark(B._cycle=D);if((B=this.NX).
_cycle!=D)B._Mark(B._cycle=D);if((B=this.YW)._cycle!=D)B._Mark(B._cycle=D);if((B=
this.Abz)._cycle!=D)B._Mark(B._cycle=D);},_className:"Demonstrator::AnimalItemAction"
};C.XD={C8:function(){this.Am();},Ag:function(Ae){C.ApQ.Ag.call(this,Ae);if(!this.
Text.String.length)this.Text.R(A.z2(A.abg.Filter));},A5a:function(H){var DY=(A.Core.
BR.isPrototypeOf(H)?H:null);if(!!DY)A._GetAutoObject(A.abq.AiP).E6(DY.D4);},A4_:
function(H){A._GetAutoObject(A.abq.AiP).Delete();},_Init:function(aArg){C.ApQ._Init.
call(this,aArg);this.__proto__=C.XD;this.Ak.At(A.zW(C.Filter));},_ReInit:function(
){C.ApQ._ReInit.call(this);this.C8();},_className:"Demonstrator::FilterView"};C.
Aam={Di:null,Xw:null,RG:null,Xx:null,Ix:null,XU:null,AlL:null,Aq:null,OV:null,MT:
null,Aal:null,FN:0,Auk:0,AD_:false,Ag:function(Ae){A.Core.O.Ag.call(this,Ae);this.
RG.R(this.Aq.Format(I$));if(this.AD_){this.RG.X(false);this.XU.X(false);this.Ix.
X(false);this.Xx.X(false);this.OV.Ap(true);this.OV.X(true);this.MT.Ct(2);this.MT.
AQ2(2);this.MT.G(A.aaP(this.MT.M,this.OV.M[2]));}else{this.RG.X(true);this.XU.X(
true);this.Ix.X(true);this.Xx.X(true);this.OV.Ap(false);this.OV.X(false);this.MT.
Ct(3);this.MT.AQ2(3);this.MT.G(A.aaP(this.MT.M,this.RG.M[2]));}},Bwz:function(H){
this.BjH(!this.AD_);},AcA:function(H){var F;if(!!this.Di)this.TC((F=this.Di,F[1].
call(F[0])));},Abj:function(E){if(A.z_(this.Di,E))return;if(!!this.Di)A.zn([this
,this.AcA],this.Di,0);this.Di=E;if(!!E)A.za([this,this.AcA],E,0);if(!!E)A.ow([this
,this.AcA],this);},TC:function(E){if(this.FN===E)return;this.FN=E;this.Aq.Initialize(
this.FN);this.BxE(this);this.Am();},AhN:function(H){var B;var F;var BP=this.FN;var
Aig=this.Aal.C$(this.Auk);this.AHs(Aig);if(this.Aq.Year>2100)this.Aq.Initialize2(
2100,12,31,0,0,0);this.TC(((B=(this.Aq.JL()|0))<0)?B+0x100000000:B);if(this.FN!==
BP){if(!!this.Di)(F=this.Di,F[2].call(F[0],this.FN));A.aat(this.Di,0);}},Ahz:function(
H){var B;var F;var BP=this.FN;var Aig=this.Aal.C$(this.Auk);this.AJb(Aig);if(this.
Aq.Year<2000)this.Aq.Initialize2(2000,1,1,0,0,0);this.TC(((B=(this.Aq.JL()|0))<0
)?B+0x100000000:B);if(this.FN!==BP){if(!!this.Di)(F=this.Di,F[2].call(F[0],this.
FN));A.aat(this.Di,0);}},Bjg:function(E){if(this.Auk===E)return;this.Auk=E;},BjH:
function(E){if(this.AD_===E)return;this.AD_=E;this.Am();},Bw9:function(H){var B;
var F;var BP=this.FN;this.Aq.Lb(this.OV.ACC());this.Aq.TF(this.OV.ACG());this.Aq.
Year=this.OV.Aqb();this.TC(((B=(this.Aq.JL()|0))<0)?B+0x100000000:B);if(this.FN!==
BP){if(!!this.Di)(F=this.Di,F[2].call(F[0],this.FN));A.aat(this.Di,0);}},BxE:function(
H){this.OV.Lb(this.Aq.Gt);this.OV.TF(this.Aq.G5);this.OV.AjN(this.Aq.Year);},AHs:
function(Axi){var B;switch(Axi){case 0:if(this.Aq.Gt<this.Aq.YB())this.Aq.Lb(this.
Aq.Gt+1);else{this.Aq.Lb(1);this.AHs(2);}break;case 1:if((this.Aq.Gt+7)<=this.Aq.
YB())this.Aq.Lb(this.Aq.Gt+7);else{this.Aq.Lb((7-this.Aq.YB())+this.Aq.Gt);this.
AHs(2);}break;case 2:if(this.Aq.G5<12)this.Aq.TF(this.Aq.G5+1);else{this.Aq.TF(1
);this.AHs(3);}break;case 3:this.Aq.Year++;break;default:throw new Error(T$+Axi.
toFixed());}},AJb:function(Axi){var B;switch(Axi){case 0:if(this.Aq.Gt>1)this.Aq.
Lb(this.Aq.Gt-1);else{this.AJb(2);this.Aq.Lb(this.Aq.YB());}break;case 1:if((this.
Aq.Gt-7)>0)this.Aq.Lb(this.Aq.Gt-7);else{this.AJb(2);this.Aq.Lb(this.Aq.YB()-(7-
this.Aq.Gt));}break;case 2:if(this.Aq.G5>1)this.Aq.TF(this.Aq.G5-1);else{this.Aq.
TF(12);this.AJb(3);}break;case 3:this.Aq.Year--;break;default:throw new Error(T$+
Axi.toFixed());}},Bhk:function(){return this.Auk;},_Init:function(aArg){A.Core.O.
_Init.call(this,aArg);A.abh.Text._Init.call(this.Xw={I:this},0);A.abh.Text._Init.
call(this.RG={I:this},0);C.At$._Init.call(this.Xx={I:this},0);A.abx.Ix._Init.call(
this.Ix={I:this},0);C.At$._Init.call(this.XU={I:this},0);A.abh.Ak._Init.call(this.
AlL={I:this},0);A.Core.Bu._Init.call(this.Aq={I:this},0);C.ALz._Init.call(this.OV={
I:this},0);C.At$._Init.call(this.MT={I:this},0);C.Aal._Init.call(this.Aal={I:this
},0);this.__proto__=C.Aam;this.G(Wc);this.Xw.G(Wd);this.Xw.A2(0x11);this.Xw.R(A.
z2(A.abg.Date));this.Xw.L(0xFF000000);this.RG.G(Zg);this.RG.A2(0x11);this.RG.R(St
);this.RG.L(0xFF000000);this.Xx.G(Zh);this.Xx.A6I(200);this.Ix.G(We);this.Ix.Avf(
120);this.Ix.GK=30;this.Ix.A6r(A.iF.C1);this.Ix.Bih(A.iF.C1);this.Ix.Bil(A.iF.C1
);this.Ix.A6s(A.iF.Text);this.Ix.Bim(A.iF.Text);this.Ix.Bii(A.iF.AY);this.Ix.Bin(
A.iF.Bd);this.Ix.Bik(A.iF.AY);this.Ix.Bij(A.iF.Text);this.XU.G(Ua);this.XU.A6I(200
);this.AlL.G(Wf);this.OV.G(QT);this.MT.G(Wg);this.MT.Ct(3);this.MT.AQ2(3);this.MT.
L(A.iF.Text);this.J(this.Xw,0);this.J(this.RG,0);this.J(this.Xx,0);this.J(this.Ix
,0);this.J(this.XU,0);this.J(this.AlL,0);this.J(this.OV,0);this.J(this.MT,0);this.
Xw.Aa(A.zW(A.eV.AB));this.RG.Aa(A.zW(A.eV.Gv));this.Xx.AQ=[this,this.Ahz];this.Xx.
DC(A.zW(C.AKY));this.Xx.AQ3(A.zW(C.AKZ));this.Ix.Au([this,this.Bhk,this.Bjg]);this.
Ix.Bis(this.Aal);this.Ix.AQM(A.zW(A.eV.AB));this.Ix.A6G(A.zW(A.eV.AB));this.XU.AQ=[
this,this.AhN];this.XU.DC(A.zW(C.AK0));this.XU.AQ3(A.zW(C.AK1));this.AlL.At(A.zW(
C.ANY));this.OV.Dn=[this,this.Bw9];this.MT.AQ=[this,this.Bwz];this.MT.DC(A.zW(A.
abi.AlC));this.MT.AQ3(A.zW(A.abi.AlC));},_Done:function(){this.__proto__=A.Core.
O;this.Xw._Done();this.RG._Done();this.Xx._Done();this.Ix._Done();this.XU._Done(
);this.AlL._Done();this.Aq._Done();this.OV._Done();this.MT._Done();this.Aal._Done(
);A.Core.O._Done.call(this);},_ReInit:function(){A.Core.O._ReInit.call(this);this.
Xw._ReInit();this.RG._ReInit();this.Xx._ReInit();this.Ix._ReInit();this.XU._ReInit(
);this.AlL._ReInit();this.Aq._ReInit();this.OV._ReInit();this.MT._ReInit();this.
Aal._ReInit();this.Xw.R(A.z2(A.abg.Date));this.Xw.Aa(A.zW(A.eV.AB));this.RG.Aa(A.
zW(A.eV.Gv));this.Ix.AQM(A.zW(A.eV.AB));this.Ix.A6G(A.zW(A.eV.AB));},_Mark:function(
D){var B;A.Core.O._Mark.call(this,D);if((B=this.Di)&&((B=B[0])._cycle!=D))B._Mark(
B._cycle=D);if((B=this.Xw)._cycle!=D)B._Mark(B._cycle=D);if((B=this.RG)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.Xx)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ix
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.XU)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.AlL)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Aq)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.OV)._cycle!=D)B._Mark(B._cycle=D);if((B=this.MT)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Aal)._cycle!=D)B._Mark(B._cycle=D);},_className:"Demonstrator::DateSelector"
};C.At$={C4:null,AvK:null,ALM:null,AQ:null,Bj:null,Dh:null,CV:null,Hi:null,XP:null
,ANA:0,Tb:0,ARD:0,AP:0xFFFFFFFF,AZv:false,Lr:false,Kq:false,P0:false,Ag:function(
Ae){var B;A.abo.AgO.Ag.call(this,Ae);var FI=((Ae&0x10)===0x10);var Fe=((Ae&0x20)===
0x20);var Fd=this.CV.Down&&this.CV.XX;if(!FI)this.Hi.At(this.ALM);else if(Fd){this.
Hi.At(this.AvK);this.Hi.Ct(this.ARD);}else{this.Hi.At(this.C4);this.Hi.Ct(this.Tb
);}this.Hi.L(this.AP);this.Lr=FI;this.Kq=Fe;this.P0=Fd;},PZ:function(H){this.Am(
);A.ow(this.AQ,this);},AhX:function(H){if(this.CV.Down)return;if(this.Dh.Abs)return;
this.Am();if(this.Bj.Bw){A.ow(this.AQ,this);this.Bj.Ap(false);}this.Bj.Ap(true);
},Ba7:function(H){this.Am();},AyN:function(H){if(!this.CV.XX)return;if(this.CV.NA
)return;if((this.XP.US<=0)||(this.CV.Jk<this.XP.US)){if(this.CV.Jk>=this.Bj.US)A.
ow(this.AQ,this);else this.Bj.Ap(true);}this.XP.Ap(false);},AyM:function(H){this.
XP.Ap(true);if(this.Bj.Bw){A.ow(this.AQ,this);this.Bj.Ap(false);}},DC:function(E
){if(this.C4===E)return;this.C4=E;this.Am();},AQ3:function(E){if(this.AvK===E)return;
this.AvK=E;this.Am();},A0q:function(H){if(!this.CV.XX)return;if(this.CV.NA)return;
if((this.ANA>=0)&&this.AZv){this.AZv=false;this.XP.Ap(true);A.ow(this.AQ,this);}
},A6I:function(E){if(this.ANA===E)return;this.ANA=E;this.XP.VL(E);},Bv5:function(
H){this.AZv=true;},Ct:function(E){if(this.Tb===E)return;this.Tb=E;this.Am();},AQ2:
function(E){if(this.ARD===E)return;this.ARD=E;this.Am();},L:function(E){if(this.
AP===E)return;this.AP=E;this.Am();},_Init:function(aArg){A.abo.AgO._Init.call(this
,aArg);A.Core.Timer._Init.call(this.Bj={I:this},0);A.Core.BR._Init.call(this.Dh={
I:this},0);A.Core.Bh._Init.call(this.CV={I:this},0);A.abh.Ak._Init.call(this.Hi={
I:this},0);A.Core.Timer._Init.call(this.XP={I:this},0);this.__proto__=C.At$;this.
G(OO);this.Bj.Qz(0);this.Bj.VL(50);this.Dh.Filter=149;this.CV.AV(0x3F);this.CV.KB(
PK);this.CV.KA(Ub);this.CV.DN(Zi);this.CV.D5(KH);this.CV.Aeh=0xF;this.CV.ADp(100
);this.Hi.AV(0x3F);this.Hi.G(OO);this.Hi.A2(0x12);this.XP.Qz(0);this.J(this.CV,0
);this.J(this.Hi,0);this.Bj.M8=[this,this.PZ];this.Dh.BS=[this,this.AhX];this.CV.
ACM=[this,this.Ba7];this.CV.Auz=[this,this.Ba7];this.CV.DU=[this,this.A0q];this.
CV.K$=[this,this.AyN];this.CV.BS=[this,this.AyM];this.Hi.At(A.zW(A.abj.K2));this.
C4=A.zW(A.abj.K2);this.AvK=A.zW(A.abj.K2);this.ALM=A.zW(A.abj.K2);this.XP.M8=[this
,this.Bv5];},_Done:function(){this.__proto__=A.abo.AgO;this.Bj._Done();this.Dh._Done(
);this.CV._Done();this.Hi._Done();this.XP._Done();A.abo.AgO._Done.call(this);},_ReInit:
function(){A.abo.AgO._ReInit.call(this);this.Bj._ReInit();this.Dh._ReInit();this.
CV._ReInit();this.Hi._ReInit();this.XP._ReInit();},_Mark:function(D){var B;A.abo.
AgO._Mark.call(this,D);if((B=this.C4)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.
AvK)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.ALM)&&(B._cycle!=D))B._Mark(B.
_cycle=D);if((B=this.AQ)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.Bj
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Dh)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.CV)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Hi)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.XP)._cycle!=D)B._Mark(B._cycle=D);},_className:"Demonstrator::IconButton"
};C.AKD={Pi:null,T:null,Adr:null,_Init:function(aArg){C.Fk._Init.call(this,aArg);
A.abh.AH._Init.call(this.Pi={I:this},0);A.abh.Text._Init.call(this.T={I:this},0);
C.Adr._Init.call(this.Adr={I:this},0);this.__proto__=C.AKD;this.G(Wh);this.Pi.AV(
0x1D);this.Pi.G(B_);this.Pi.L(0xFFE6E6E6);this.T.AV(0x1D);this.T.G(Zj);this.T.A2(
0x11);this.T.R(A.z2(A.abg.A1_));this.T.L(0xFF000000);this.Adr.G(Zk);this.J(this.
Pi,0);this.J(this.T,0);this.J(this.Adr,0);this.T.Aa(A.zW(A.eV.Aw));},_Done:function(
){this.__proto__=C.Fk;this.Pi._Done();this.T._Done();this.Adr._Done();C.Fk._Done.
call(this);},_ReInit:function(){C.Fk._ReInit.call(this);this.Pi._ReInit();this.T.
_ReInit();this.Adr._ReInit();this.T.R(A.z2(A.abg.A1_));this.T.Aa(A.zW(A.eV.Aw));
},_Mark:function(D){var B;C.Fk._Mark.call(this,D);if((B=this.Pi)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.T)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Adr)._cycle!=
D)B._Mark(B._cycle=D);},_className:"Demonstrator::AnimalsHeader"};C.As_={Pi:null
,T:null,AdT:null,AdP:null,Bh:null,DH:Wi,Ajr:false,Ag:function(Ae){C.Fk.Ag.call(this
,Ae);if(this.Ajr){this.AdP.X(true);this.AdT.X(false);}else{this.AdP.X(false);this.
AdT.X(true);}},BwV:function(H){if(this.Ajr)A.ow(this.Agx,this);else A.ow(this.Agy
,this);this.ADs(!this.Ajr);},S:function(E){if(this.DH===E)return;this.DH=E;this.
T.R(E);},ADs:function(E){if(this.Ajr===E)return;this.Ajr=E;this.Am();},_Init:function(
aArg){C.Fk._Init.call(this,aArg);A.abh.AH._Init.call(this.Pi={I:this},0);A.abh.Text.
_Init.call(this.T={I:this},0);A.abh.Ak._Init.call(this.AdT={I:this},0);A.abh.Ak.
_Init.call(this.AdP={I:this},0);A.Core.Bh._Init.call(this.Bh={I:this},0);this.__proto__=
C.As_;this.G(B_);this.Pi.AV(0x1D);this.Pi.G(B_);this.Pi.L(0xFFE6E6E6);this.T.AV(
0x1D);this.T.G(Wj);this.T.A2(0x11);this.T.R(Wi);this.T.L(0xFF000000);this.AdT.G(
Su);this.AdT.X(false);this.AdP.AV(0x3A);this.AdP.G(Su);this.Bh.KB(KH);this.Bh.KA(
Zl);this.Bh.DN(Zm);this.Bh.D5(ON);this.J(this.Pi,0);this.J(this.T,0);this.J(this.
AdT,0);this.J(this.AdP,0);this.J(this.Bh,0);this.T.Aa(A.zW(A.eV.Aw));this.AdT.At(
A.zW(C.AKG));this.AdP.At(A.zW(C.Aiz));this.Bh.K$=[this,this.BwV];},_Done:function(
){this.__proto__=C.Fk;this.Pi._Done();this.T._Done();this.AdT._Done();this.AdP._Done(
);this.Bh._Done();C.Fk._Done.call(this);},_ReInit:function(){C.Fk._ReInit.call(this
);this.Pi._ReInit();this.T._ReInit();this.AdT._ReInit();this.AdP._ReInit();this.
Bh._ReInit();this.T.Aa(A.zW(A.eV.Aw));},_Mark:function(D){var B;C.Fk._Mark.call(
this,D);if((B=this.Pi)._cycle!=D)B._Mark(B._cycle=D);if((B=this.T)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.AdT)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AdP)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.Bh)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Demonstrator::AccordionHeader"};C.A_={AW:null,AQ:null,CV:null,Hq:-1,YE:function(
E){if(this.AW===E)return;this.AW=E;},Cc:function(Ab){A.aa8("%s",AbO);},YH:function(
E){if(A.z$(this.AQ,E))return;this.AQ=E;},AyN:function(H){if(!this.CV.XX)return;if(
this.CV.NA)return;A.ow(this.AQ,this);},_Init:function(aArg){A.Core.O._Init.call(
this,aArg);A.Core.Bh._Init.call(this.CV={I:this},0);this.__proto__=C.A_;this.G(B_
);this.CV.AV(0x3F);this.CV.KB(ON);this.CV.KA(Zm);this.CV.DN(Zl);this.CV.D5(KH);this.
CV.Aeh=0xF;this.CV.ADp(100);this.J(this.CV,0);this.CV.K$=[this,this.AyN];},_Done:
function(){this.__proto__=A.Core.O;this.CV._Done();A.Core.O._Done.call(this);},_ReInit:
function(){A.Core.O._ReInit.call(this);this.CV._ReInit();},_Mark:function(D){var
B;A.Core.O._Mark.call(this,D);if((B=this.AW)&&(B._cycle!=D))B._Mark(B._cycle=D);
if((B=this.AQ)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.CV)._cycle!=
D)B._Mark(B._cycle=D);},_className:"Demonstrator::ListItem"};C.Fk={AP1:null,Agy:
null,Agx:null,BjE:function(E){if(A.z$(this.AP1,E))return;this.AP1=E;},A6Q:function(
E){if(A.z$(this.Agy,E))return;this.Agy=E;},A6P:function(E){if(A.z$(this.Agx,E))return;
this.Agx=E;},_Init:function(aArg){A.Core.O._Init.call(this,aArg);this.__proto__=
C.Fk;this.G(B_);},_Mark:function(D){var B;A.Core.O._Mark.call(this,D);if((B=this.
AP1)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.Agy)&&((B=B[0])._cycle
!=D))B._Mark(B._cycle=D);if((B=this.Agx)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=
D);},_className:"Demonstrator::ListHeader"};C.ALz={Dn:null,Aaa:null,V4:null,V3:null
,V2:null,M2:null,M1:null,Ky:null,Lr:false,Kq:false,BxL:false,Ag:function(Ae){var
B;A.abo.AgM.Ag.call(this,Ae);var FI=((Ae&0x10)===0x10);var Fe=((Ae&0x20)===0x20);
var Baa=(this.V2.Y1||this.V3.Y1)||this.V4.Y1;if(Baa)this.Aaa.L(A.iF.Text);else this.
Aaa.L(A.iF.Ba);this.Lr=FI;this.Kq=Fe;this.BxL=Baa;},AyH:function(H){this.Am();if((
!this.V2.Y1&&!this.V3.Y1)&&!this.V4.Y1){var Uq=this.AIl(this.ACG(),this.Aqb());var
Ach=this.ACC();this.Ky.Jp(Uq);if(Ach>Uq)this.Lb(Uq);A.ow(this.Dn,this);}},A0G:function(
H){this.Am();},Bh0:function(H){var B;var FW=this.M2.GJ;var Cz=(A.abh.Text.isPrototypeOf(
B=this.M2.Cd)?B:null);if(!Cz)return;Cz.R(A.aaq(FW+1900,4,10));Cz.Aa(A.zW(A.eV.Aw
));Cz.L(A.iF.Text);Cz.A2(0x12);Cz.G(A.aaN(Cz.M,[(B=this.M2.M)[2]-B[0],this.M2.GK
]));},BhZ:function(H){var B;var FW=this.M1.GJ;var Cz=(A.abh.Text.isPrototypeOf(B=
this.M1.Cd)?B:null);if(!Cz)return;Cz.R(A.aaq(FW+1,2,10)+Sv);Cz.Aa(A.zW(A.eV.Aw));
Cz.L(A.iF.Text);Cz.A2(0x12);Cz.G(A.aaN(Cz.M,[(B=this.M1.M)[2]-B[0],this.M1.GK]));
},BhX:function(H){var B;var FW=this.Ky.GJ;var Cz=(A.abh.Text.isPrototypeOf(B=this.
Ky.Cd)?B:null);if(!Cz)return;Cz.R(A.aaq(FW+1,2,10)+Sv);Cz.Aa(A.zW(A.eV.Aw));Cz.L(
A.iF.Text);Cz.A2(0x12);Cz.G(A.aaN(Cz.M,[(B=this.Ky.M)[2]-B[0],this.Ky.GK]));},Aqb:
function(){return 1900+((((-this.M2.Bn/this.M2.GK)|0)+2)%200);},AjN:function(E){
if(E<1900)E=1900;if(E>2100)E=2100;this.M2.Gj(((E-1900)-2)*-this.M2.GK);var Uq=this.
AIl(this.ACG(),E);this.Ky.Jp(Uq);if(this.ACC()>Uq)this.Lb(Uq);},ACG:function(){return 1+((((-
this.M1.Bn/this.M1.GK)|0)+2)%12);},TF:function(E){if(E<1)E=1;if(E>12)E=12;this.M1.
Gj(((E-1)-2)*-this.M1.GK);var Uq=this.AIl(E,this.Aqb());this.Ky.Jp(Uq);if(this.ACC(
)>Uq)this.Lb(Uq);},ACC:function(){return 1+((((-this.Ky.Bn/this.Ky.GK)|0)+2)%this.
Ky.AR);},Lb:function(E){var Uq=this.AIl(this.ACG(),this.Aqb());if(E<1)E=1;if(E>Uq
)E=Uq;this.Ky.Gj(((E-2)-1)*-this.Ky.GK);},AIl:function(AeZ,Ab_){if(AeZ===2){if(!(
Ab_%4)&&(!!(Ab_%100)||!(Ab_%400)))return 29;else return 28;}else if((((AeZ===4)||(
AeZ===6))||(AeZ===9))||(AeZ===11))return 30;else return 31;},_Init:function(aArg
){A.abo.AgM._Init.call(this,aArg);A.abh.CC._Init.call(this.Aaa={I:this},0);A.Core.
H2._Init.call(this.V4={I:this},0);A.Core.H2._Init.call(this.V3={I:this},0);A.Core.
H2._Init.call(this.V2={I:this},0);A.Core.CI._Init.call(this.M2={I:this},0);A.Core.
CI._Init.call(this.M1={I:this},0);A.Core.CI._Init.call(this.Ky={I:this},0);this.
__proto__=C.ALz;this.G(AbP);this.Aaa.G(AeN);this.Aaa.NR(3);this.Aaa.L(0xFFE1E1E1
);this.Aaa.X(true);this.V4.G(Zn);this.V4.AQ_(Wk);this.V4.AQO(0.2);this.V3.G(Wl);
this.V3.AQ_(Wk);this.V3.AQO(0.2);this.V2.G(AeO);this.V2.AQ_(Wk);this.V2.AQO(0.2);
this.M2.G(Zn);this.M2.AQK(true);this.M2.Gj(60);this.M2.Ad5(30);this.M2.Jp(200);this.
M1.G(Wl);this.M1.AQK(true);this.M1.Gj(60);this.M1.Ad5(30);this.M1.Jp(12);this.Ky.
G(AeO);this.Ky.AQK(true);this.Ky.Gj(60);this.Ky.Ad5(30);this.Ky.Jp(31);this.J(this.
Aaa,0);this.J(this.V4,0);this.J(this.V3,0);this.J(this.V2,0);this.J(this.M2,0);this.
J(this.M1,0);this.J(this.Ky,0);this.V4.YA=[this,this.AyH];this.V4.R$=[this,this.
A0G];this.V3.YA=[this,this.AyH];this.V3.R$=[this,this.A0G];this.V2.YA=[this,this.
AyH];this.V2.R$=[this,this.A0G];this.M2.G7=[this,this.Bh0];this.M2.Avq(this.V4);
this.M1.G7=[this,this.BhZ];this.M1.Avq(this.V3);this.Ky.G7=[this,this.BhX];this.
Ky.Avq(this.V2);},_Done:function(){this.__proto__=A.abo.AgM;this.Aaa._Done();this.
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
],FrameDelay:0,_this:null}};C.ATk={_class:function(){return A.abj.Aj;},0:{FileName:
"./res_index/DemonstratorWhiteTileSmall.png",Format:A.jt,NoOfFrames:1,FrameSize:[
40,40],FrameDelay:0,_this:null}};C.AgW={_Init:function(aArg){A.Core.O._Init.call(
this,aArg);this.__proto__=C.AgW;this.G(EV);},_className:"Demonstrator::SelectionAreaContent"
};C.AKw={Y:null,UJ:null,S1:null,Bxk:function(H){var B;this.S1.G(A.aaL(this.S1.M,((
B=this.M)[3]-B[1])-((B=this.UJ.M)[3]-B[1])));},_Init:function(aArg){C.AgW._Init.
call(this,aArg);A.Core.Y._Init.call(this.Y={I:this},0);C.AJ2._Init.call(this.UJ={
I:this},0);C.AS4._Init.call(this.S1={I:this},0);this.__proto__=C.AKw;this.Y.AV(0x3F
);this.Y.G(EV);this.Y.Kc(1);this.UJ.G(AeP);this.UJ.Ai(true);this.UJ.ADs(true);this.
S1.AV(0x3);this.S1.G(JT);this.S1.Ai(true);this.S1.NQ(C.AKp);this.S1.Bjz(C.AKD);this.
J(this.Y,0);this.J(this.UJ,0);this.J(this.S1,0);this.A$(this.S1);this.Y.Ej=[this
,this.Bxk];this.S1.YE(A._GetAutoObject(A.abq.Ati));},_Done:function(){this.__proto__=
C.AgW;this.Y._Done();this.UJ._Done();this.S1._Done();C.AgW._Done.call(this);},_ReInit:
function(){C.AgW._ReInit.call(this);this.Y._ReInit();this.UJ._ReInit();this.S1._ReInit(
);},_Mark:function(D){var B;C.AgW._Mark.call(this,D);if((B=this.Y)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.UJ)._cycle!=D)B._Mark(B._cycle=D);if((B=this.S1)._cycle!=
D)B._Mark(B._cycle=D);},_className:"Demonstrator::AnimalSelectionActions"};C.UJ={
_Init:function(aArg){C.As_._Init.call(this,aArg);this.__proto__=C.UJ;this.S(A.z2(
A.abg.A28));},_ReInit:function(){C.As_._ReInit.call(this);this.S(A.z2(A.abg.A28)
);},_className:"Demonstrator::ActionsHeader"};C.AJ2={Background:null,Z1:null,Aex:
null,Aek:null,Aew:null,Ajj:null,Ajk:null,Ajl:null,Ajm:null,Ajr:false,Agy:function(
H){var B;this.G(A.aaL(this.M,(B=this.Z1.M)[3]-B[1]));},Agx:function(H){this.G(A.
aaL(this.M,240));},ADs:function(E){if(this.Ajr===E)return;this.Ajr=E;this.Z1.ADs(
E);if(E)this.Agy(this);else this.Agx(this);},_Init:function(aArg){A.Core.O._Init.
call(this,aArg);A.abh.AH._Init.call(this.Background={I:this},0);C.UJ._Init.call(
this.Z1={I:this},0);C.Aex._Init.call(this.Aex={I:this},0);C.Aek._Init.call(this.
Aek={I:this},0);C.Aew._Init.call(this.Aew={I:this},0);A.abh.DT._Init.call(this.Ajj={
I:this},0);A.abh.DT._Init.call(this.Ajk={I:this},0);A.abh.DT._Init.call(this.Ajl={
I:this},0);A.abh.DT._Init.call(this.Ajm={I:this},0);this.__proto__=C.AJ2;this.G(
AeP);this.Background.AV(0x3F);this.Background.G(AeP);this.Z1.AV(0x1D);this.Z1.G(
B_);this.Aex.G(AbQ);this.Aek.G(Li);this.Aew.G(Ag$);this.Ajj.DN(Zm);this.Ajj.D5(ON
);this.Ajj.L(A.iF.Ba);this.Ajk.DN(Anc);this.Ajk.D5(N2);this.Ajk.L(A.iF.Ba);this.
Ajl.DN(Wm);this.Ajl.D5(And);this.Ajl.L(A.iF.Ba);this.Ajm.DN(Aha);this.Ajm.D5(Ahb
);this.Ajm.L(A.iF.Ba);this.J(this.Background,0);this.J(this.Z1,0);this.J(this.Aex
,0);this.J(this.Aek,0);this.J(this.Aew,0);this.J(this.Ajj,0);this.J(this.Ajk,0);
this.J(this.Ajl,0);this.J(this.Ajm,0);this.Z1.A6Q([this,this.Agy]);this.Z1.A6P([
this,this.Agx]);},_Done:function(){this.__proto__=A.Core.O;this.Background._Done(
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
};C.Mb={AaM:null,Agh:null,Bh:null,DT:null,AhU:function(H){},AXL:function(s){this.
AhU(s);},_Init:function(aArg){A.Core.O._Init.call(this,aArg);A.abh.Ak._Init.call(
this.AaM={I:this},0);A.abh.Ak._Init.call(this.Agh={I:this},0);A.Core.Bh._Init.call(
this.Bh={I:this},0);A.abh.DT._Init.call(this.DT={I:this},0);this.__proto__=C.Mb;
this.G(B_);this.AaM.G(AbR);this.AaM.L(A.iF.Text);this.Agh.G(Uc);this.Agh.L(A.iF.
Text);this.Agh.Ct(0);this.Bh.KB(KH);this.Bh.KA(OM);this.Bh.DN(Nc);this.Bh.D5(ON);
this.DT.DN(Nc);this.DT.D5(OM);this.DT.L(A.iF.Ba);this.J(this.AaM,0);this.J(this.
Agh,0);this.J(this.Bh,0);this.J(this.DT,0);this.AaM.At(A.zW(A.abj.K2));this.Agh.
At(A.zW(A.abj.ARt));this.Bh.BS=[this,this.AXL];},_Done:function(){this.__proto__=
A.Core.O;this.AaM._Done();this.Agh._Done();this.Bh._Done();this.DT._Done();A.Core.
O._Done.call(this);},_ReInit:function(){A.Core.O._ReInit.call(this);this.AaM._ReInit(
);this.Agh._ReInit();this.Bh._ReInit();this.DT._ReInit();},_Mark:function(D){var
B;A.Core.O._Mark.call(this,D);if((B=this.AaM)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Agh)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Bh)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.DT)._cycle!=D)B._Mark(B._cycle=D);},_className:"Demonstrator::ActionsItem"
};C.Aek={AeE:null,AhU:function(H){var Afz=A.aa2(this.AeE.String,0,10);var Bxz=A.
_GetAutoObject(A.abq.LB).Azk(Afz);if(Bxz){Afz=Afz+1;this.AeE.R(Afz.toFixed());}}
,_Init:function(aArg){C.Mb._Init.call(this,aArg);C.Ap5._Init.call(this.AeE={I:this
},0);this.__proto__=C.Aek;this.AeE.G(Ane);this.AeE.R(Anf);this.AeE.L(A.iF.Text);
this.J(this.AeE,-1);this.AaM.At(A.zW(A.abi.Al7));},_Done:function(){this.__proto__=
C.Mb;this.AeE._Done();C.Mb._Done.call(this);},_ReInit:function(){C.Mb._ReInit.call(
this);this.AeE._ReInit();},_Mark:function(D){var B;C.Mb._Mark.call(this,D);if((B=
this.AeE)._cycle!=D)B._Mark(B._cycle=D);},_className:"Demonstrator::ScanAction"};
C.Aex={TY:null,OE:null,A1l:0,Init:function(aArg){var B;A.za([this,this.BwF],[B=A.
_GetAutoObject(A.abq.LB),B.AQq,B.AQ4],0);A.za([this,this.AyQ],[B=A._GetAutoObject(
A.Device.Device),B.Ap$,B.ArV],0);A.ow([this,this.AyQ],this);},Ag:function(Ae){C.
Mb.Ag.call(this,Ae);this.OE.X(!A._GetAutoObject(A.abq.LB).AvL);},AhU:function(H){
var B;A._GetAutoObject(A.abq.LB).Ba9(this);},AyQ:function(H){if(A._GetAutoObject(
A.Device.Device).TemperatureUnit!==this.A1l){switch(A._GetAutoObject(A.Device.Device
).TemperatureUnit){case 0:this.OE.R(A.aap(A._GetAutoObject(A.abq.LB).Arf/100,0,1
));break;case 1:{var AsZ=A._GetAutoObject(A.Device.Converter).ASF(A._GetAutoObject(
A.abq.LB).Arf/100,0,A._GetAutoObject(A.Device.Device).TemperatureUnit);this.OE.R(
A.aap(AsZ,0,1));}break;default:A.aa8("%s%e",Awj,A._GetAutoObject(A.Device.Device
).TemperatureUnit);}this.A1l=A._GetAutoObject(A.Device.Device).TemperatureUnit;}
},Bwo:function(H){var B;var AsY=A.aaZ(this.OE.String,0);AsY=A._GetAutoObject(A.Device.
Converter).ASF(AsY,A._GetAutoObject(A.Device.Device).TemperatureUnit,0);AsY*=100;
A._GetAutoObject(A.abq.LB).A6_(Math.round(AsY)|0);},BwF:function(H){this.Am();},
_Init:function(aArg){C.Mb._Init.call(this,aArg);A.abr.TY._Init.call(this.TY={I:this
},0);C.OE._Init.call(this.OE={I:this},0);this.__proto__=C.Aex;var B;this.TY.G(Awk
);this.TY.A6M(A.z2(A.abg.A2f));this.OE.G(Akh);this.OE.R(Awl);this.OE.L(A.iF.Text
);this.OE.Biu(true);this.A1l=A._GetAutoObject(A.Device.Device).TemperatureUnit;this.
J(this.TY,0);this.J(this.OE,0);this.AaM.At(A.zW(A.abi.AaL));this.TY.Au([B=A._GetAutoObject(
A.abq.LB),B.AQq,B.AQ4]);this.TY.OnSetAppearance(A._GetAutoObject(A.abz.AAh));this.
OE.Dn=[this,this.Bwo];this.Init(aArg);},_Done:function(){this.__proto__=C.Mb;this.
TY._Done();this.OE._Done();C.Mb._Done.call(this);},_ReInit:function(){C.Mb._ReInit.
call(this);this.TY._ReInit();this.OE._ReInit();this.TY.A6M(A.z2(A.abg.A2f));},_Mark:
function(D){var B;C.Mb._Mark.call(this,D);if((B=this.TY)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.OE)._cycle!=D)B._Mark(B._cycle=D);},_className:"Demonstrator::TemperatureAction"
};C.ApQ={Q:null,CC:null,Bh:null,AfT:null,Ama:null,Al$:null,ApV:null,Text:null,G$:
null,Ak:null,CT:null,ApU:null,ApW:null,An6:false,Bf:function(aSize){this.G$.G(A.
aaN(this.G$.M,aSize));this.CC.AvS(1);this.CC.Jl(0,40);this.CC.E5(0,aSize[0]-20,20
,12.5,12.5,-90,90,10);this.CC.E5(0,20,20,12.5,12.5,90,270,10);this.CC.U1(0);},Ag:
function(Ae){var B;var F;A.Core.O.Ag.call(this,Ae);var GY=((Ae&0x40)===0x40);if(
GY){if(!!this.Q)this.Text.R((F=this.Q,F[1].call(F[0])));this.AfT.Ap(true);this.Ak.
X(false);}else{if(!!this.Q)this.Text.R((F=this.Q,F[1].call(F[0])));this.AfT.Ap(false
);this.CT.X(false);this.Ak.X(true);}this.An6=GY;},AhU:function(H){var B;if(!((this.
U&0x80)===0x80))this.Ib().AKO(this);},A5a:function(H){},A9o:function(s){this.A5a(
s);},Bgo:function(H){var B;var F;if(!this.Q||!(F=this.Q,F[1].call(F[0])).length)
this.CT.G(A.aaP(this.CT.M,A.zT(this.Text.M)[0]));else{this.CT.G(A.aaP(this.CT.M,
this.Text.AMK(0)[2]+2));this.CT.G(A.aaR(this.CT.M,this.Text.AMK(0)[1]));this.CT.
G(A.aaL(this.CT.M,(B=this.Text.AMK(0))[3]-B[1]));}this.Ak.G(A.aaP(this.Ak.M,this.
Text.M[0]-((B=this.Ak.M)[2]-B[0])));},A4_:function(H){},A9n:function(s){this.A4_(
s);},Au:function(E){if(A.z_(this.Q,E))return;if(!!this.Q)A.zn([this,this.OY],this.
Q,0);this.Q=E;if(!!E)A.za([this,this.OY],E,0);if(!!E)A.ow([this,this.OY],this);}
,OY:function(H){this.Am();},Bh2:function(H){var B;if(((this.U&0x80)===0x80))this.
Ib().AAO(this);},Bbf:function(H){},_Init:function(aArg){A.Core.O._Init.call(this
,aArg);A.Graphics.Hl._Init.call(this.CC={I:this},0);A.Core.Bh._Init.call(this.Bh={
I:this},0);A.abm.UT._Init.call(this.AfT={I:this},0);A.Core.BR._Init.call(this.Ama={
I:this},0);A.Core.BR._Init.call(this.Al$={I:this},0);A.Core.BR._Init.call(this.ApV={
I:this},0);A.abh.Text._Init.call(this.Text={I:this},0);A.abh.G$._Init.call(this.
G$={I:this},0);A.abh.Ak._Init.call(this.Ak={I:this},0);A.abh.AH._Init.call(this.
CT={I:this},0);A.Core.BR._Init.call(this.ApU={I:this},0);A.Core.BR._Init.call(this.
ApW={I:this},0);this.__proto__=C.ApQ;var B;this.G(AeQ);this.Bh.AV(0x3F);this.Bh.
KB(KH);this.Bh.KA(Art);this.Bh.DN(OP);this.Bh.D5(PK);this.AfT.Fz(530);this.AfT.VM(
530);this.Ama.Filter=143;this.Al$.Filter=45;this.ApV.Filter=1;this.Text.AV(0x3F);
this.Text.G(AeQ);this.Text.I1(true);this.Text.A2(0x12);this.Text.L(0xFFB3B3B3);this.
G$.G(AeQ);this.G$.L(0xFFB3B3B3);this.G$.NR(1);this.Ak.G(Sw);this.CT.G(Awm);this.
CT.L(0xFFB3B3B3);this.CT.X(false);this.ApU.Filter=138;this.ApW.Filter=137;this.J(
this.Bh,0);this.J(this.Text,0);this.J(this.G$,0);this.J(this.Ak,0);this.J(this.CT
,0);this.Bh.K$=[this,this.AhU];this.AfT.Q=[B=this.CT,B.E$,B.X];this.Ama.BS=[this
,this.A9o];this.Ama.DU=[this,this.A9o];this.Al$.BS=[this,this.A9n];this.Al$.DU=[
this,this.A9n];this.ApV.BS=[this,this.Bh2];this.Text.Qy([this,this.Bgo]);this.Text.
Aa(A.zW(A.eV.AB));this.G$.YI(this.CC);this.Ak.At(null);this.ApU.BS=[this,this.Bbf
];this.ApW.BS=[this,this.Bbf];},_Done:function(){this.__proto__=A.Core.O;this.CC.
_Done();this.Bh._Done();this.AfT._Done();this.Ama._Done();this.Al$._Done();this.
ApV._Done();this.Text._Done();this.G$._Done();this.Ak._Done();this.CT._Done();this.
ApU._Done();this.ApW._Done();A.Core.O._Done.call(this);},_ReInit:function(){A.Core.
O._ReInit.call(this);this.CC._ReInit();this.Bh._ReInit();this.AfT._ReInit();this.
Ama._ReInit();this.Al$._ReInit();this.ApV._ReInit();this.Text._ReInit();this.G$.
_ReInit();this.Ak._ReInit();this.CT._ReInit();this.ApU._ReInit();this.ApW._ReInit(
);this.Text.Aa(A.zW(A.eV.AB));},_Mark:function(D){var B;A.Core.O._Mark.call(this
,D);if((B=this.Q)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.CC)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.Bh)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
AfT)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ama)._cycle!=D)B._Mark(B._cycle=D);
if((B=this.Al$)._cycle!=D)B._Mark(B._cycle=D);if((B=this.ApV)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Text)._cycle!=D)B._Mark(B._cycle=D);if((B=this.G$)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.Ak)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
CT)._cycle!=D)B._Mark(B._cycle=D);if((B=this.ApU)._cycle!=D)B._Mark(B._cycle=D);
if((B=this.ApW)._cycle!=D)B._Mark(B._cycle=D);},_className:"Demonstrator::InputView"
};C.Adr={Background:null,XD:null,_Init:function(aArg){A.Core.O._Init.call(this,aArg
);A.abh.AH._Init.call(this.Background={I:this},0);C.XD._Init.call(this.XD={I:this
},0);this.__proto__=C.Adr;var B;this.G(Sx);this.Background.G(Sx);this.XD.AV(0x1D
);this.XD.G(Aru);this.J(this.Background,0);this.J(this.XD,0);this.XD.Au([B=A._GetAutoObject(
A.abq.AiP),B.A5P,B.ADH]);},_Done:function(){this.__proto__=A.Core.O;this.Background.
_Done();this.XD._Done();A.Core.O._Done.call(this);},_ReInit:function(){A.Core.O.
_ReInit.call(this);this.Background._ReInit();this.XD._ReInit();},_Mark:function(
D){var B;A.Core.O._Mark.call(this,D);if((B=this.Background)._cycle!=D)B._Mark(B.
_cycle=D);if((B=this.XD)._cycle!=D)B._Mark(B._cycle=D);},_className:"Demonstrator::FilterRow"
};C.OE={Init:function(aArg){var B;A.za([this,this.AyQ],[B=A._GetAutoObject(A.Device.
Device),B.Ap$,B.ArV],0);A.ow([this,this.AyQ],this);},Ag:function(Ae){var B;C.Ap5.
Ag.call(this,Ae);var GY=((this.U&0x40)===0x40);if(!GY&&(this.String.length>0))this.
Text.R(((this.String+Awn)+A._GetAutoObject(A.abk.Temperature).AkQ())+String.fromCharCode(
0x0A));else this.Text.R(this.String+String.fromCharCode(0x0A));if(this.Ef>this.String.
length)this.Ef=this.String.length;},AyQ:function(H){this.Am();},_Init:function(aArg
){C.Ap5._Init.call(this,aArg);this.__proto__=C.OE;this.Init(aArg);},_className:"Demonstrator::TemperatureInputView"
};C.Ap5={B5:null,Dn:null,IO:null,Cp:null,AlI:null,RH:null,Kw:null,Bh:null,Text:null
,CT:null,Ape:null,AqM:null,CC:null,G$:null,Ap7:null,ApD:null,Apo:null,String:A.jm
,Ef:0,AP:0xFFB3B3B3,ALB:false,Nh:false,Bf:function(aSize){this.G$.G(A.aaN(this.G$.
M,aSize));this.CC.AvS(1);this.CC.Jl(0,40);this.CC.E5(0,aSize[0]-20,20,12.5,12.5,-
90,90,10);this.CC.E5(0,20,20,12.5,12.5,90,270,10);this.CC.U1(0);},Ag:function(Ae
){var B;A.abo.I6.Ag.call(this,Ae);if(((Ae&0x40)===0x40))this.IO.Ap(true);else{this.
IO.Ap(false);this.CT.X(false);}},A1w:function(H){var B;var A8=this.Text.M;var Np=
0;var Nq=0;if(this.CT.Ek[0]<A8[0])Np=A8[0]-this.CT.Ek[0];if(this.CT.Ek[0]>A8[2])
Np=A8[2]-this.CT.Ek[0];if(this.CT.Ek[1]<A8[1])Nq=A8[1]-this.CT.Ek[1];if(this.CT.
Et[1]>A8[3])Nq=A8[3]-this.CT.Et[1];if(!!Np||!!Nq)this.Text.Gj(A.aak(this.Text.Bn
,[Np,Nq]));Np=this.Text.Bn[0];Nq=this.Text.Bn[1];var CZ=[(B=this.Text.C_())[2]-B[
0],B[3]-B[1]];if(CZ[0]<=((B=this.Text.M)[2]-B[0]))Np=0;if(CZ[1]<=((B=this.Text.M
)[3]-B[1]))Nq=0;this.Text.Gj([Np,Nq]);},Alq:function(H){if(!this.B5)return;var A04=
this.Text.AER(this.Ef);var pos=this.Text.Aei(A04);this.CT.D5(A.aaj(pos,[0,this.B5.
Ascent]));this.CT.DN(A.aak(pos,[0,this.B5.Descent]));if(this.IO.Bw){this.IO.Ap(false
);this.IO.Ap(true);}if(this.Nh){A.ow([this,this.A1w],this);this.Nh=false;}},AyM:
function(H){if(!this.A33(0x80))this.Ib().AKO(this);var Ex=this.Text.ARx(this.Bh.
HU);var Uv=this.Text.AmU(Ex);if(Uv!==this.Ef){this.Ef=Uv;A.ow([this,this.Alq],this
);this.Nh=true;}},AyF:function(H){if(!this.B5)return;var Ex=this.Text.AER(this.Ef
);if(this.Cp.CP===6){Ex=[Ex[0]-1,Ex[1]];if(this.Text.AmU(Ex)===this.Ef){Ex=[Ex[0
],Ex[1]-1];Ex=[this.Text.AA_(Ex[1]).length,Ex[1]];}}if(this.Cp.CP===7){Ex=[Ex[0]+
1,Ex[1]];if(this.Text.AmU(Ex)===this.Ef){Ex=[Ex[0],Ex[1]+1];Ex=[0,Ex[1]];}}var Uv=
this.Text.AmU(Ex);if(Uv!==this.Ef){this.Ef=Uv;A.ow([this,this.Alq],this);this.Nh=
true;}},Ba1:function(H){if(!this.Ef)return;this.R(A.aa3(this.String,this.Ef-1,1)
);this.Ef=this.Ef-1;this.Nh=true;A.ow(this.Dn,this);},AyG:function(H){if(this.Ef>=
this.String.length)return;this.R(A.aa3(this.String,this.Ef,1));this.Nh=true;A.ow(
this.Dn,this);},Ba6:function(H){if(this.String.length>=15)return;var BuQ=this.Kw.
D4;var AsW=String.fromCharCode(BuQ);this.R(A.aaW(this.String,AsW,this.Ef));this.
Ef=this.Ef+AsW.length;this.Nh=true;A.ow(this.Dn,this);},R:function(E){if(this.String===
E)return;this.String=E;if(this.Ef>(E.length+1))this.Ef=E.length;this.Text.R(E+String.
fromCharCode(0x0A));this.Nh=true;this.Text.Gj(KH);},L:function(E){if(this.AP===E
)return;this.AP=E;this.Text.L(E);this.CT.L(E);this.G$.L(E);},Bbg:function(H){if(
this.ALB===false)return;if(this.String.indexOf(String.fromCharCode(0x2E),0)>=0)return;
if(this.String.length>=15)return;this.R(A.aaW(this.String,Sv,this.Ef));this.Ef=this.
Ef+1;this.Nh=true;A.ow(this.Dn,this);},Biu:function(E){if(this.ALB===E)return;this.
ALB=E;if(E===false){var BbV=this.String.indexOf(String.fromCharCode(0x2E),0);if(
BbV>=0)this.R(A.aaX(this.String,BbV));}this.Nh=true;this.Text.Gj(KH);},Bww:function(
H){if(this.A33(0x80))this.Ib().AAO(this);this.Am();},Bwj:function(H){var Uv=this.
String.length;if(Uv!==this.Ef){this.Ef=Uv;A.ow([this,this.Alq],this);this.Nh=true;
}},Bwn:function(H){if(!!this.Ef){this.Ef=0;A.ow([this,this.Alq],this);this.Nh=true;
}},_Init:function(aArg){A.abo.I6._Init.call(this,aArg);A.abm.UT._Init.call(this.
IO={I:this},0);A.Core.BR._Init.call(this.Cp={I:this},0);A.Core.BR._Init.call(this.
AlI={I:this},0);A.Core.BR._Init.call(this.RH={I:this},0);A.Core.BR._Init.call(this.
Kw={I:this},0);A.Core.Bh._Init.call(this.Bh={I:this},0);A.abh.Text._Init.call(this.
Text={I:this},0);A.abh.DT._Init.call(this.CT={I:this},0);A.Core.BR._Init.call(this.
Ape={I:this},0);A.Core.BR._Init.call(this.AqM={I:this},0);A.Graphics.Hl._Init.call(
this.CC={I:this},0);A.abh.G$._Init.call(this.G$={I:this},0);A.Core.BR._Init.call(
this.Ap7={I:this},0);A.Core.BR._Init.call(this.ApD={I:this},0);A.Core.BR._Init.call(
this.Apo={I:this},0);this.__proto__=C.Ap5;var B;this.G(AeQ);this.IO.B0=false;this.
IO.Cv=true;this.IO.Fz(500);this.IO.VM(500);this.Cp.Filter=147;this.AlI.Filter=45;
this.RH.Filter=44;this.Kw.Filter=143;this.Bh.AV(0x3F);this.Bh.KB(PK);this.Bh.KA(
OP);this.Bh.DN(Art);this.Bh.D5(KH);this.Bh.ADp(3);this.Text.AV(0x3F);this.Text.G(
AeQ);this.Text.KD(false);this.Text.A2(0x12);this.Text.R(A.jm);this.Text.L(0xFFB3B3B3
);this.CT.DN(Awo);this.CT.D5(Awp);this.CT.A7k(2);this.CT.A7j(2);this.CT.L(0xFFB3B3B3
);this.CT.X(false);this.Ape.Filter=138;this.AqM.Filter=137;this.G$.G(AeQ);this.G$.
L(0xFFB3B3B3);this.G$.NR(1);this.Ap7.Filter=1;this.ApD.Filter=41;this.Apo.Filter=
42;this.J(this.Bh,0);this.J(this.Text,0);this.J(this.CT,0);this.J(this.G$,0);this.
IO.Q=[B=this.CT,B.E$,B.X];this.Cp.BS=[this,this.AyF];this.Cp.DU=[this,this.AyF];
this.AlI.BS=[this,this.Ba1];this.AlI.DU=[this,this.Ba1];this.RH.BS=[this,this.AyG
];this.RH.DU=[this,this.AyG];this.Kw.BS=[this,this.Ba6];this.Kw.DU=[this,this.Ba6
];this.Bh.BS=[this,this.AyM];this.Text.Qy([this,this.Alq]);this.Text.Aa(A.zW(A.eV.
AB));this.B5=A.zW(A.eV.AB);this.Ape.BS=[this,this.Bbg];this.AqM.BS=[this,this.Bbg
];this.G$.YI(this.CC);this.Ap7.BS=[this,this.Bww];this.ApD.BS=[this,this.Bwn];this.
Apo.BS=[this,this.Bwj];},_Done:function(){this.__proto__=A.abo.I6;this.IO._Done(
);this.Cp._Done();this.AlI._Done();this.RH._Done();this.Kw._Done();this.Bh._Done(
);this.Text._Done();this.CT._Done();this.Ape._Done();this.AqM._Done();this.CC._Done(
);this.G$._Done();this.Ap7._Done();this.ApD._Done();this.Apo._Done();A.abo.I6._Done.
call(this);},_ReInit:function(){A.abo.I6._ReInit.call(this);this.IO._ReInit();this.
Cp._ReInit();this.AlI._ReInit();this.RH._ReInit();this.Kw._ReInit();this.Bh._ReInit(
);this.Text._ReInit();this.CT._ReInit();this.Ape._ReInit();this.AqM._ReInit();this.
CC._ReInit();this.G$._ReInit();this.Ap7._ReInit();this.ApD._ReInit();this.Apo._ReInit(
);},_Mark:function(D){var B;A.abo.I6._Mark.call(this,D);if((B=this.B5)&&(B._cycle
!=D))B._Mark(B._cycle=D);if((B=this.Dn)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D
);if((B=this.IO)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Cp)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.AlI)._cycle!=D)B._Mark(B._cycle=D);if((B=this.RH)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.Kw)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Bh
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Text)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.CT)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ape)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.AqM)._cycle!=D)B._Mark(B._cycle=D);if((B=this.CC)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.G$)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ap7)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.ApD)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Apo
)._cycle!=D)B._Mark(B._cycle=D);},_className:"Demonstrator::NumberInput"};C.Aew={
LabelDataSync:null,AhU:function(H){var B;A.ow([B=A._GetAutoObject(A.abt.Ara),B.BxR
],this);},_Init:function(aArg){C.Mb._Init.call(this,aArg);A.kh.CR._Init.call(this.
LabelDataSync={I:this},0);this.__proto__=C.Aew;this.LabelDataSync.G(Ang);this.LabelDataSync.
R(A.z2(A.abg.A2Z));this.LabelDataSync.L(A.iF.Text);this.J(this.LabelDataSync,0);
this.AaM.At(A.zW(C.ASw));this.LabelDataSync.Aa(A.zW(A.eV.Aw));this.LabelDataSync.
BD(A.zW(A.eV.AB));},_Done:function(){this.__proto__=C.Mb;this.LabelDataSync._Done(
);C.Mb._Done.call(this);},_ReInit:function(){C.Mb._ReInit.call(this);this.LabelDataSync.
_ReInit();this.LabelDataSync.R(A.z2(A.abg.A2Z));this.LabelDataSync.Aa(A.zW(A.eV.
Aw));this.LabelDataSync.BD(A.zW(A.eV.AB));},_Mark:function(D){var B;C.Mb._Mark.call(
this,D);if((B=this.LabelDataSync)._cycle!=D)B._Mark(B._cycle=D);},_className:"Demonstrator::SyncAction"
};C.ASw={_class:function(){return A.abj.Aj;},0:{FileName:"./res_index/DemonstratorSyncIcon.png"
,Format:A.cC,NoOfFrames:1,FrameSize:[50,60],FrameDelay:0,_this:null}};C.Aal={TimespanDaysToString:
null,ABa:function(aIndex){if(this.AA7()>aIndex)return this.TimespanDaysToString.
BZ(aIndex);A.aa8("%s",Awq);return A.jm;},AA7:function(){return 4;},C$:function(aIndex
){var Aig=0;switch(aIndex){case 0:Aig=0;break;case 1:Aig=1;break;case 2:Aig=2;break;
case 3:Aig=3;break;default:throw new Error(Arv+aIndex.toFixed());}return Aig;},_Init:
function(aArg){A.abx.AlK._Init.call(this,aArg);A.Device.TimespanDaysToString._Init.
call(this.TimespanDaysToString={I:this},0);this.__proto__=C.Aal;},_Done:function(
){this.__proto__=A.abx.AlK;this.TimespanDaysToString._Done();A.abx.AlK._Done.call(
this);},_ReInit:function(){A.abx.AlK._ReInit.call(this);this.TimespanDaysToString.
_ReInit();},_Mark:function(D){var B;A.abx.AlK._Mark.call(this,D);if((B=this.TimespanDaysToString
)._cycle!=D)B._Mark(B._cycle=D);},_className:"Demonstrator::DatePickerUnitDD"};C.
BBp={Gt:0,AS$:1,G5:2,Year:3};C.AAL={_class:function(){return A.abj.Aj;},0:{FileName:
"./res_index/DemonstratorEarTagIcon.png",Format:A.jt,NoOfFrames:2,FrameSize:[37,
37],FrameDelay:0,_this:null}};C.AE4={_class:function(){return A.abj.Aj;},0:{FileName:
"./res_index/DemonstratorTransponderEarTagIcon.png",Format:A.jt,NoOfFrames:2,FrameSize:[
37,37],FrameDelay:0,_this:null}};
C._Init=function(){C.AS4.__proto__=A.abo.Menu;C.AR6.__proto__=A.Core.O;C.AKp.__proto__=
C.A_;C.Mc.__proto__=A.Core.O;C.XD.__proto__=C.ApQ;C.Aam.__proto__=A.Core.O;C.At$.
__proto__=A.abo.AgO;C.AKD.__proto__=C.Fk;C.As_.__proto__=C.Fk;C.A_.__proto__=A.Core.
O;C.Fk.__proto__=A.Core.O;C.ALz.__proto__=A.abo.AgM;C.AgW.__proto__=A.Core.O;C.AKw.
__proto__=C.AgW;C.UJ.__proto__=C.As_;C.AJ2.__proto__=A.Core.O;C.Mb.__proto__=A.Core.
O;C.Aek.__proto__=C.Mb;C.Aex.__proto__=C.Mb;C.ApQ.__proto__=A.Core.O;C.Adr.__proto__=
A.Core.O;C.OE.__proto__=C.Ap5;C.Ap5.__proto__=A.abo.I6;C.Aew.__proto__=C.Mb;C.Aal.
__proto__=A.abx.AlK;};C._ReInit=function(){};C.DE=function(D){var B;if((B=C.Background[
0]._this)&&(B._cycle!=D))B._Done(C.Background[0]._this=null);if((B=C.AKY[0]._this
)&&(B._cycle!=D))B._Done(C.AKY[0]._this=null);if((B=C.AKZ[0]._this)&&(B._cycle!=
D))B._Done(C.AKZ[0]._this=null);if((B=C.AK0[0]._this)&&(B._cycle!=D))B._Done(C.AK0[
0]._this=null);if((B=C.AK1[0]._this)&&(B._cycle!=D))B._Done(C.AK1[0]._this=null);
if((B=C.ANY[0]._this)&&(B._cycle!=D))B._Done(C.ANY[0]._this=null);if((B=C.Filter[
0]._this)&&(B._cycle!=D))B._Done(C.Filter[0]._this=null);if((B=C.APu[0]._this)&&(
B._cycle!=D))B._Done(C.APu[0]._this=null);if((B=C.Aiz[0]._this)&&(B._cycle!=D))B.
_Done(C.Aiz[0]._this=null);if((B=C.AKG[0]._this)&&(B._cycle!=D))B._Done(C.AKG[0].
_this=null);if((B=C.Aq3[0]._this)&&(B._cycle!=D))B._Done(C.Aq3[0]._this=null);if((
B=C.ASB[0]._this)&&(B._cycle!=D))B._Done(C.ASB[0]._this=null);if((B=C.AFj[0]._this
)&&(B._cycle!=D))B._Done(C.AFj[0]._this=null);if((B=C.ATk[0]._this)&&(B._cycle!=
D))B._Done(C.ATk[0]._this=null);if((B=C.ASw[0]._this)&&(B._cycle!=D))B._Done(C.ASw[
0]._this=null);if((B=C.AAL[0]._this)&&(B._cycle!=D))B._Done(C.AAL[0]._this=null);
if((B=C.AE4[0]._this)&&(B._cycle!=D))B._Done(C.AE4[0]._this=null);};return C;})(
);

/* VitalControl demonstration application, © Urban GmbH & Co.KG 2023 */