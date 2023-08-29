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
var B9=[0,0,370,60];var BG=[360,0,370,60];var EV=[0,0,370,710];var GS="Unknown animalType";
var Js=[58,10,120,50];var IL=[0,0,60,60];var OJ=[120,0,360,60];var PH="\u2015";var
N0=[0,0,240,60];var CJ=[0,0,40,60];var Fn=[100,0,130,60];var N1=[43,0,100,60];var
OK=[125,0,240,60];var KF=[0,0];var OL=[100,0];var Nc=[100,60];var OM=[0,60];var Sr=[
107,0];var T8=[240,0];var V8=[240,60];var V9=[107,60];var I_="%d.%m.%Y";var T9="Unhandled date unit: ";
var V_=[0,0,200,180];var V$=[36,0,200,30];var Y5=[0,30,160,60];var Ss="Text";var
Y6=[0,70,40,110];var Wa=[44,70,156,110];var T_=[160,70,200,110];var T$=[7,2,27,25
];var QS=[0,30,170,180];var Wb=[170,34,190,57];var ON=[0,0,40,40];var PJ=[0,40];
var Ua=[40,40];var Y7=[40,0];var Wc=[0,0,370,100];var Y8=[20,0,290,60];var Y9=[0
,60,370,100];var Wd="Cap";var We=[20,0,370,60];var St=[310,0,370,60];var Y_=[370
,0];var Y$=[370,60];var Abz="UpdateData is called for the base class ListItemBase. Please make "+
"sure this method is implemented by a derived class.";var Su=".";var AbA=[0,0,170
,150];var AbB=[0,59,170,90];var Za=[110,0,170,150];var Wf=[0,30];var Zb=[50,0,100
,150];var AeG=[0,0,40,150];var AeH=[0,0,370,240];var LV=[0,60,370,710];var AbC=[
0,60,370,120];var Lg=[0,120,370,180];var Ag3=[0,180,370,240];var Am4=[370,120];var
N2=[0,120];var Wg=[370,180];var Am5=[0,180];var Ag4=[370,240];var Ag5=[0,240];var
AbD=[0,0,50,60];var Zc=[50,0,100,60];var Av_=[100,10,370,50];var Av$="276000901234567";
var Awa="Unhandled temperature unit";var Awb=[110,0,260,60];var Aj8=[235,10,370,
50];var Awc="39.5";var AeI=[0,0,270,40];var Ari=[270,0];var OO=[270,40];var Sv=[
150,0,170,40];var Awd=[205,10,207,30];var Sw=[0,0,370,40];var Arj=[50,0,320,40];
var Awe=" ";var Awf=[135,23];var Awg=[135,0];var Am6=[100,0,370,60];var Awh="Error: Nullpointer Exception";
var Ark="Unknown Date Piecker Unit Index: ";
C.Background={_class:function(){return A.abj.Aj;},0:{FileName:"./res_index/DemonstratorBackground.png"
,Format:A.cC,NoOfFrames:1,FrameSize:[1000,740],FrameDelay:0,_this:null}};C.AKH={
_class:function(){return A.abj.Aj;},0:{FileName:"./res_index/DemonstratorButtonLeft.png"
,Format:A.cC,NoOfFrames:1,FrameSize:[40,40],FrameDelay:0,_this:null}};C.AKI={_class:
function(){return A.abj.Aj;},0:{FileName:"./res_index/DemonstratorButtonLeftPressed.png"
,Format:A.cC,NoOfFrames:1,FrameSize:[40,40],FrameDelay:0,_this:null}};C.AKJ={_class:
function(){return A.abj.Aj;},0:{FileName:"./res_index/DemonstratorButtonRight.png"
,Format:A.cC,NoOfFrames:1,FrameSize:[40,40],FrameDelay:0,_this:null}};C.AKK={_class:
function(){return A.abj.Aj;},0:{FileName:"./res_index/DemonstratorButtonRightPressed.png"
,Format:A.cC,NoOfFrames:1,FrameSize:[40,40],FrameDelay:0,_this:null}};C.ANH={_class:
function(){return A.abj.Aj;},0:{FileName:"./res_index/DemonstratorIconDatePicker.png"
,Format:A.cC,NoOfFrames:1,FrameSize:[20,23],FrameDelay:0,_this:null}};C.Filter={
_class:function(){return A.abj.Aj;},0:{FileName:"./res_index/DemonstratorFilter.png"
,Format:A.cC,NoOfFrames:1,FrameSize:[15,16],FrameDelay:0,_this:null}};C.APf={_class:
function(){return A.abj.Aj;},0:{FileName:"./res_index/DemonstratorMenuIcon.png",
Format:A.cC,NoOfFrames:1,FrameSize:[20,16],FrameDelay:0,_this:null}};C.Aip={_class:
function(){return A.abj.Aj;},0:{FileName:"./res_index/DemonstratorArrowRight.png"
,Format:A.cC,NoOfFrames:1,FrameSize:[17,16],FrameDelay:0,_this:null}};C.AKp={_class:
function(){return A.abj.Aj;},0:{FileName:"./res_index/DemonstratorArrowDown.png"
,Format:A.cC,NoOfFrames:1,FrameSize:[17,16],FrameDelay:0,_this:null}};C.AqQ={_class:
function(){return A.abj.Aj;},0:{FileName:"./res_index/DemonstratorScanIcon.png",
Format:A.jt,NoOfFrames:2,FrameSize:[37,37],FrameDelay:0,_this:null}};C.ASm={_class:
function(){return A.abj.Aj;},0:{FileName:"./res_index/DemonstratorTemperatureIcon.png"
,Format:A.cC,NoOfFrames:1,FrameSize:[17,37],FrameDelay:0,_this:null}};C.ASP={Ac7:
null,AW:null,AQ:null,Background:null,H1:null,AC:null,IG:null,Dg:null,K7:null,A4l:
null,A4I:0,Bf:function(aSize){A.abo.Menu.Bf.call(this,aSize);this.IG.G(A.aaS(this.
IG.M,this.AC.OB));this.IG.G([].concat(this.IG.M.slice(0,3),aSize[1]));},Ag:function(
Ae){var B;A.abo.Menu.Ag.call(this,Ae);var GY=((Ae&0x40)===0x40);if(GY&&(this.AC.
Ge<0))this.AC.GL(0);},NP:function(E){if(this.K7===E)return;this.K7=E;this.AC.NP(
E);},Bji:function(E){var B;if(this.A4l===E)return;if(!!this.Ac7){this.HD(this.Ac7
);this.Ac7=null;}if(!!E){this.Ac7=(C.Fk.isPrototypeOf(B=A._NewObject(E,0))?B:null
);this.Ac7.A6w([this,this.Ago]);this.Ac7.A6x([this,this.Agp]);this.Ac7.Bjn(null);
this.J(this.Ac7,0);this.AC.A6D((B=this.Ac7.M)[3]-B[1]);}else this.AC.A6D(0);this.
IG.G(A.aaS(this.IG.M,this.AC.OB));A.ow([this,this.E4],this);this.A4l=E;},G8:function(
H){var B;var FW=this.AC.GJ;var Z=(C.A9.isPrototypeOf(B=this.AC.Cc)?B:null);if(!Z
)return;Z.Yt(this.AW);Z.Cb(FW);Z.Yu(this.AQ);Z.G(A.aaN(Z.M,[(B=this.AC.M)[2]-B[0
],this.AC.GK]));},Yt:function(E){var B;if(this.AW===E)return;if(!!this.AW){A.zl([
this,this.Cb],this.AW,0);A.zn([this,this.AmX],[B=this.AW,B.Fy,B.FB],0);}this.AW=
E;if(!!E){A.y_([this,this.Cb],E,0);A.za([this,this.AmX],[E,E.Fy,E.FB],0);}A.ow([
this,this.Cb],this);A.ow([this,this.AmX],this);},Cb:function(H){if(!!this.AW){this.
AC.Jo(this.AW.Ci());this.AC.AaB(0,this.AC.AR-1);}else this.AC.Jo(0);if(this.A4I!==
this.AC.AR){this.AC.AzG(null,null);this.A4I=this.AC.AR;}A.ow([this,this.E4],this
);},Agp:function(H){var B;this.G(A.aaL(this.M,(B=this.AC.AMr())[3]-B[1]));},Ago:
function(H){this.G(A.aaL(this.M,180));},A5U:function(H){var Jw=(A.Core.BQ.isPrototypeOf(
H)?H:null);var FW=this.AC.Ge;if(Jw.CP===4)FW=FW-1;else if(Jw.CP===5)FW=FW+1;else
if((Jw.D4>=0x30)&&(Jw.D4<=0x39))A._GetAutoObject(A.abq.AiF).E6(Jw.D4);else if(Jw.
CP===45)A._GetAutoObject(A.abq.AiF).Delete();else Jw.Pb=true;if((FW<0)||(FW>=this.
AC.AR))return;this.AC.GL(FW);this.BuM(FW,true);},BuB:function(H){var Z=(C.A9.isPrototypeOf(
H)?H:null);this.AC.GL(Z.Ho);},BuM:function(GT,AbT){var B;if((GT<0)||(GT>=this.AC.
AR))return;var AM=this.AC.Api(GT,GT);var A7=this.AC.M;A7=A.aaS(A7,(B=this.AC.AMr(
))[3]-B[1]);A7=A.aaL(A7,(((B=this.AC.M)[3]-B[1])-((B=this.AC.AMr())[3]-B[1]))-((
B=this.AC.Be1())[3]-B[1]));var Ls=A.kz(AM,A7);if((!AbT&&!((Ls[0]>=Ls[2])||(Ls[1]>=
Ls[3])))||(AbT&&A.z9(Ls,AM)))return;var Bm=0;if(AM[3]>A7[3])Bm=AM[3]-A7[3];if(Bm>(
AM[1]-A7[1]))Bm=(AM[3]-A7[1])-this.AC.GK;this.AC.Gk(this.AC.Bn-Bm);},AmX:function(
H){this.AC.GL(-1);},E4:function(H){var B;this.IG.Mr(this.AC.GK*this.AC.AR);this.
IG.Mt(((B=this.AC.M)[3]-B[1])-this.AC.OB);this.IG.Ms(-this.AC.Bn);},_Init:function(
aArg){A.abo.Menu._Init.call(this,aArg);A.abh.AH._Init.call(this.Background={I:this
},0);A.Core.H1._Init.call(this.H1={I:this},0);A.Core.CI._Init.call(this.AC={I:this
},0);A.kh.As._Init.call(this.IG={I:this},0);A.Core.BQ._Init.call(this.Dg={I:this
},0);this.__proto__=C.ASP;this.G(B9);this.Background.AV(0x3);this.Background.G(B9
);this.H1.AV(0x3F);this.H1.G(B9);this.AC.AV(0x3F);this.AC.G(B9);this.AC.AdX(60);
this.AC.Jo(0);this.AC.NP(this.K7);this.IG.AV(0x3A);this.IG.G(BG);this.IG.L(0xFF808080
);this.J(this.Background,0);this.J(this.H1,0);this.J(this.AC,0);this.J(this.IG,0
);this.AC.El=[this,this.E4];this.AC.G8=[this,this.G8];this.AC.Avf(this.H1);this.
AQ=[this,this.BuB];this.Dg.BR=[this,this.A5U];this.Dg.DT=[this,this.A5U];},_Done:
function(){this.__proto__=A.abo.Menu;this.Background._Done();this.H1._Done();this.
AC._Done();this.IG._Done();this.Dg._Done();A.abo.Menu._Done.call(this);},_ReInit:
function(){A.abo.Menu._ReInit.call(this);this.Background._ReInit();this.H1._ReInit(
);this.AC._ReInit();this.IG._ReInit();this.Dg._ReInit();},_Mark:function(D){var B;
A.abo.Menu._Mark.call(this,D);if((B=this.Ac7)&&(B._cycle!=D))B._Mark(B._cycle=D);
if((B=this.AW)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.AQ)&&((B=B[0])._cycle
!=D))B._Mark(B._cycle=D);if((B=this.Background)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.H1)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AC)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.IG)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Dg)._cycle!=D)B._Mark(
B._cycle=D);},_className:"Demonstrator::VerticalMenu"};C.ARR={Gs:null,AH:null,CB:
null,Init:function(aArg){var B;A.za([this,this.Hr],[B=A._GetAutoObject(A.abq.Lz)
,B.A5y,B.A6N],0);A.ow([this,this.Hr],this);},Aa1:function(E){if(this.Gs===E)return;
if(!!this.Gs)this.HD(this.Gs);this.Gs=E;if(!!this.Gs)this.J(this.Gs,0);this.A_(E
);this.AgK(E,this.CB);this.Am();},Hr:function(H){var B;if(!!A._GetAutoObject(A.abq.
Lz).AqT)this.Aa1((C.AgO.isPrototypeOf(B=A._NewObject(A._GetAutoObject(A.abq.Lz).
AqT,0))?B:null));else this.Aa1(null);},_Init:function(aArg){A.Core.O._Init.call(
this,aArg);A.abh.AH._Init.call(this.AH={I:this},0);A.abh.CB._Init.call(this.CB={
I:this},0);this.__proto__=C.ARR;this.G(EV);this.AH.AV(0x3F);this.AH.G(EV);this.CB.
G(EV);this.CB.L(0xFF000000);this.J(this.AH,0);this.J(this.CB,0);this.Init(aArg);
},_Done:function(){this.__proto__=A.Core.O;this.AH._Done();this.CB._Done();A.Core.
O._Done.call(this);},_ReInit:function(){A.Core.O._ReInit.call(this);this.AH._ReInit(
);this.CB._ReInit();},_Mark:function(D){var B;A.Core.O._Mark.call(this,D);if((B=
this.Gs)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.AH)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.CB)._cycle!=D)B._Mark(B._cycle=D);},_className:"Demonstrator::SelectionArea"
};C.AJ_={Afq:0,Nm:0,Background:null,T:null,Ail:null,AcN:null,WU:null,AcO:null,Mc:
null,Lp:false,Kp:false,Ag:function(Ae){var B;C.A9.Ag.call(this,Ae);var FH=((Ae&0x10
)===0x10);var Fe=((Ae&0x20)===0x20);var GY=((Ae&0x40)===0x40);if(!FH){this.Background.
L(0xFFAAAAAA);this.T.L(0xFF888888);this.Mc.Ap(false);this.Mc.X(false);}else if(GY
){this.Background.L(A.iF.AY);this.T.L(A.iF.Bd);this.Mc.Ap(true);this.Mc.X(true);
}else if(Fe){this.Background.L(0xFFE6DED8);this.T.L(0xFF000000);this.Mc.Ap(true);
this.Mc.X(true);}else{this.Background.L(0xFFFFFFFF);this.T.L(0xFF000000);this.Mc.
Ap(false);this.Mc.X(false);}if(!this.Kp&&Fe)A._GetAutoObject(A.abq.Lz).M7(this.Afq
);this.Mc.Bjk(this.Nm>0);this.Mc.BjJ(this.Afq>0);this.Lp=FH;this.Kp=Fe;},Cb:function(
Ab){if(!this.AW){this.WU.At(A.zW(A.abi.Ado));this.AcN.L(A.iF.AeA);return;}this.Ho=
Ab;if(!!this.AW){this.Nm=this.AW.LB(Ab,26);this.Afq=this.AW.LB(Ab,22);var O5=this.
AW.CE(Ab,1);var AkM=this.AW.HT(Ab,11);var AkC=this.AW.IW(Ab,17);var Lw=this.AW.IW(
Ab,13);var H4=this.AW.AlR(Ab,14);this.T.R(O5.toFixed());var Ws=A._GetAutoObject(
A.Device.Helper).AJZ(Lw,AkM,AkC);switch(H4){case 0:this.WU.At(A.zW(A.abi.Ado));break;
case 1:this.WU.At(A.zW(A.abi.At2));break;case 2:this.WU.At(A.zW(A.abi.At5));break;
default:A.aa8("%s%e",GS,H4);}this.AcO.At(this.WU.Aj);this.AcN.L(A._GetAutoObject(
A.abk.Assessment).PW(Ws));this.Am();}},_Init:function(aArg){C.A9._Init.call(this
,aArg);A.abh.AH._Init.call(this.Background={I:this},0);A.kh.CQ._Init.call(this.T={
I:this},0);A.abh.Ak._Init.call(this.Ail={I:this},0);A.abh.Ak._Init.call(this.AcN={
I:this},0);A.abh.Ak._Init.call(this.WU={I:this},0);A.abh.Ak._Init.call(this.AcO={
I:this},0);C.Mc._Init.call(this.Mc={I:this},0);this.__proto__=C.AJ_;this.Background.
AV(0x3F);this.Background.G(B9);this.T.AV(0x3F);this.T.G(Js);this.T.R(A.z2(A.abg.
Hy));this.T.A1(0x11);this.T.L(0xFF000000);this.Ail.G(IL);this.Ail.L(A.iF.Text);this.
AcN.G(IL);this.AcN.L(A.iF.EY);this.WU.G(IL);this.AcO.G(IL);this.AcO.L(A.iF.Text);
this.AcO.Cs(1);this.Mc.AV(0x3);this.Mc.G(OJ);this.J(this.Background,0);this.J(this.
T,0);this.J(this.Ail,0);this.J(this.AcN,0);this.J(this.WU,0);this.J(this.AcO,0);
this.J(this.Mc,0);this.T.Aa(A.zW(A.eV.Av));this.T.BC(A.zW(A.eV.Az));this.T.C$(A.
zW(A.eV.Cw));this.Ail.At(A.zW(C.AE$));this.AcN.At(A.zW(C.AS7));this.WU.At(A.zW(A.
abi.Ado));this.AcO.At(A.zW(A.abi.Ado));},_Done:function(){this.__proto__=C.A9;this.
Background._Done();this.T._Done();this.Ail._Done();this.AcN._Done();this.WU._Done(
);this.AcO._Done();this.Mc._Done();C.A9._Done.call(this);},_ReInit:function(){C.
A9._ReInit.call(this);this.Background._ReInit();this.T._ReInit();this.Ail._ReInit(
);this.AcN._ReInit();this.WU._ReInit();this.AcO._ReInit();this.Mc._ReInit();},_Mark:
function(D){var B;C.A9._Mark.call(this,D);if((B=this.Background)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.T)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ail)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.AcN)._cycle!=D)B._Mark(B._cycle=D);if((B=this.WU
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AcO)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Mc)._cycle!=D)B._Mark(B._cycle=D);},_className:"Demonstrator::AnimalMenuItem"
};C.Mc={TK:null,VL:null,AjW:null,M_:null,NW:null,YJ:null,Abk:null,Aum:false,AvY:
false,C7:function(){this.Am();},Ag:function(Ae){var B;A.Core.O.Ag.call(this,Ae);
var GY=((Ae&0x40)===0x40);if(GY){this.M_.L(A.iF.Bd);this.NW.L(A.iF.Bd);}else{this.
M_.L(A.iF.Text);this.NW.L(A.iF.Text);}if(this.AvY){this.M_.R(A.z2(A.abg.BkC));if(
this.Aum){this.TK.At(A.zW(C.AEU));this.VL.At(A.zW(C.AEU));}else{this.TK.At(A.zW(
C.AqQ));this.VL.At(A.zW(C.AqQ));}}else if(this.Aum){this.TK.At(A.zW(C.AAD));this.
VL.At(A.zW(C.AAD));this.M_.R(PH);}var A0M=this.AvY||this.Aum;this.TK.X(A0M);this.
VL.X(A0M);this.M_.X(A0M);this.YJ.Ap(this.AvY);},BjJ:function(E){if(this.AvY===E)
return;this.AvY=E;this.Am();},Bjk:function(E){if(this.Aum===E)return;this.Aum=E;
this.Am();},_Init:function(aArg){A.Core.O._Init.call(this,aArg);A.abh.Ak._Init.call(
this.TK={I:this},0);A.abh.Ak._Init.call(this.VL={I:this},0);A.abh.Ak._Init.call(
this.AjW={I:this},0);A.kh.CQ._Init.call(this.M_={I:this},0);A.kh.CQ._Init.call(this.
NW={I:this},0);A.Core.Bh._Init.call(this.YJ={I:this},0);A.Core.Bh._Init.call(this.
Abk={I:this},0);this.__proto__=C.Mc;var B;this.G(N0);this.TK.AV(0x6);this.TK.G(CJ
);this.TK.L(A.iF.C0);this.TK.Cs(1);this.VL.AV(0x6);this.VL.G(CJ);this.VL.L(A.iF.
Text);this.AjW.AV(0xE);this.AjW.G(Fn);this.M_.AV(0x7);this.M_.G(N1);this.M_.A1(0x11
);this.M_.L(0xFF000000);this.NW.AV(0x3);this.NW.G(OK);this.NW.R(A.z2(A.abg.Temperature
));this.NW.A1(0x11);this.NW.L(0xFF000000);this.YJ.AV(0x3);this.YJ.Kz(KF);this.YJ.
Ky(OL);this.YJ.DN(Nc);this.YJ.D6(OM);this.Abk.AV(0x3);this.Abk.Kz(Sr);this.Abk.Ky(
T8);this.Abk.DN(V8);this.Abk.D6(V9);this.J(this.TK,0);this.J(this.VL,0);this.J(this.
AjW,0);this.J(this.M_,0);this.J(this.NW,0);this.J(this.YJ,0);this.J(this.Abk,0);
this.TK.At(A.zW(C.AqQ));this.VL.At(A.zW(C.AqQ));this.AjW.At(A.zW(C.ASm));this.M_.
Aa(A.zW(A.eV.Av));this.M_.BC(A.zW(A.eV.Az));this.M_.C$(A.zW(A.eV.Cw));this.NW.Aa(
A.zW(A.eV.Av));this.NW.BC(A.zW(A.eV.Az));this.NW.C$(A.zW(A.eV.Cw));this.YJ.K9=[B=
A._GetAutoObject(A.abq.Lz),B.Ba$];this.Abk.K9=[B=A._GetAutoObject(A.abq.Lz),B.BaW
];},_Done:function(){this.__proto__=A.Core.O;this.TK._Done();this.VL._Done();this.
AjW._Done();this.M_._Done();this.NW._Done();this.YJ._Done();this.Abk._Done();A.Core.
O._Done.call(this);},_ReInit:function(){A.Core.O._ReInit.call(this);this.TK._ReInit(
);this.VL._ReInit();this.AjW._ReInit();this.M_._ReInit();this.NW._ReInit();this.
YJ._ReInit();this.Abk._ReInit();this.NW.R(A.z2(A.abg.Temperature));this.M_.Aa(A.
zW(A.eV.Av));this.M_.BC(A.zW(A.eV.Az));this.M_.C$(A.zW(A.eV.Cw));this.NW.Aa(A.zW(
A.eV.Av));this.NW.BC(A.zW(A.eV.Az));this.NW.C$(A.zW(A.eV.Cw));this.C7();},_Mark:
function(D){var B;A.Core.O._Mark.call(this,D);if((B=this.TK)._cycle!=D)B._Mark(B.
_cycle=D);if((B=this.VL)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AjW)._cycle!=D
)B._Mark(B._cycle=D);if((B=this.M_)._cycle!=D)B._Mark(B._cycle=D);if((B=this.NW).
_cycle!=D)B._Mark(B._cycle=D);if((B=this.YJ)._cycle!=D)B._Mark(B._cycle=D);if((B=
this.Abk)._cycle!=D)B._Mark(B._cycle=D);},_className:"Demonstrator::AnimalItemAction"
};C.Xu={C7:function(){this.Am();},Ag:function(Ae){C.ApD.Ag.call(this,Ae);if(!this.
Text.String.length)this.Text.R(A.z2(A.abg.Filter));},A4P:function(H){var DX=(A.Core.
BQ.isPrototypeOf(H)?H:null);if(!!DX)A._GetAutoObject(A.abq.AiF).E6(DX.D4);},A4N:
function(H){A._GetAutoObject(A.abq.AiF).Delete();},_Init:function(aArg){C.ApD._Init.
call(this,aArg);this.__proto__=C.Xu;this.Ak.At(A.zW(C.Filter));},_ReInit:function(
){C.ApD._ReInit.call(this);this.C7();},_className:"Demonstrator::FilterView"};C.
Z_={Dh:null,Xn:null,RF:null,Xo:null,Iw:null,XL:null,AlE:null,Aq:null,OU:null,MU:
null,Z9:null,FM:0,At$:0,AD1:false,Ag:function(Ae){A.Core.O.Ag.call(this,Ae);this.
RF.R(this.Aq.Format(I_));if(this.AD1){this.RF.X(false);this.XL.X(false);this.Iw.
X(false);this.Xo.X(false);this.OU.Ap(true);this.OU.X(true);this.MU.Cs(2);this.MU.
AQM(2);this.MU.G(A.aaP(this.MU.M,this.OU.M[2]));}else{this.RF.X(true);this.XL.X(
true);this.Iw.X(true);this.Xo.X(true);this.OU.Ap(false);this.OU.X(false);this.MU.
Cs(3);this.MU.AQM(3);this.MU.G(A.aaP(this.MU.M,this.RF.M[2]));}},Bwj:function(H){
this.Bjq(!this.AD1);},Acp:function(H){var F;if(!!this.Dh)this.TA((F=this.Dh,F[1].
call(F[0])));},Aa6:function(E){if(A.z_(this.Dh,E))return;if(!!this.Dh)A.zn([this
,this.Acp],this.Dh,0);this.Dh=E;if(!!E)A.za([this,this.Acp],E,0);if(!!E)A.ow([this
,this.Acp],this);},TA:function(E){if(this.FM===E)return;this.FM=E;this.Aq.Initialize(
this.FM);this.Bxo(this);this.Am();},AhD:function(H){var B;var F;var BO=this.FM;var
Ah8=this.Z9.Dl(this.At$);this.AHb(Ah8);if(this.Aq.Year>2100)this.Aq.Initialize2(
2100,12,31,0,0,0);this.TA(((B=(this.Aq.JL()|0))<0)?B+0x100000000:B);if(this.FM!==
BO){if(!!this.Dh)(F=this.Dh,F[2].call(F[0],this.FM));A.aat(this.Dh,0);}},Ahq:function(
H){var B;var F;var BO=this.FM;var Ah8=this.Z9.Dl(this.At$);this.AIW(Ah8);if(this.
Aq.Year<2000)this.Aq.Initialize2(2000,1,1,0,0,0);this.TA(((B=(this.Aq.JL()|0))<0
)?B+0x100000000:B);if(this.FM!==BO){if(!!this.Dh)(F=this.Dh,F[2].call(F[0],this.
FM));A.aat(this.Dh,0);}},Bi2:function(E){if(this.At$===E)return;this.At$=E;},Bjq:
function(E){if(this.AD1===E)return;this.AD1=E;this.Am();},BwT:function(H){var B;
var F;var BO=this.FM;this.Aq.K$(this.OU.ACt());this.Aq.TD(this.OU.ACx());this.Aq.
Year=this.OU.Ap0();this.TA(((B=(this.Aq.JL()|0))<0)?B+0x100000000:B);if(this.FM!==
BO){if(!!this.Dh)(F=this.Dh,F[2].call(F[0],this.FM));A.aat(this.Dh,0);}},Bxo:function(
H){this.OU.K$(this.Aq.Gu);this.OU.TD(this.Aq.G6);this.OU.AjC(this.Aq.Year);},AHb:
function(Axc){var B;switch(Axc){case 0:if(this.Aq.Gu<this.Aq.Yq())this.Aq.K$(this.
Aq.Gu+1);else{this.Aq.K$(1);this.AHb(2);}break;case 1:if((this.Aq.Gu+7)<=this.Aq.
Yq())this.Aq.K$(this.Aq.Gu+7);else{this.Aq.K$((7-this.Aq.Yq())+this.Aq.Gu);this.
AHb(2);}break;case 2:if(this.Aq.G6<12)this.Aq.TD(this.Aq.G6+1);else{this.Aq.TD(1
);this.AHb(3);}break;case 3:this.Aq.Year++;break;default:throw new Error(T9+Axc.
toFixed());}},AIW:function(Axc){var B;switch(Axc){case 0:if(this.Aq.Gu>1)this.Aq.
K$(this.Aq.Gu-1);else{this.AIW(2);this.Aq.K$(this.Aq.Yq());}break;case 1:if((this.
Aq.Gu-7)>0)this.Aq.K$(this.Aq.Gu-7);else{this.AIW(2);this.Aq.K$(this.Aq.Yq()-(7-
this.Aq.Gu));}break;case 2:if(this.Aq.G6>1)this.Aq.TD(this.Aq.G6-1);else{this.Aq.
TD(12);this.AIW(3);}break;case 3:this.Aq.Year--;break;default:throw new Error(T9+
Axc.toFixed());}},Bg7:function(){return this.At$;},_Init:function(aArg){A.Core.O.
_Init.call(this,aArg);A.abh.Text._Init.call(this.Xn={I:this},0);A.abh.Text._Init.
call(this.RF={I:this},0);C.At0._Init.call(this.Xo={I:this},0);A.abx.Iw._Init.call(
this.Iw={I:this},0);C.At0._Init.call(this.XL={I:this},0);A.abh.Ak._Init.call(this.
AlE={I:this},0);A.Core.Bu._Init.call(this.Aq={I:this},0);C.ALi._Init.call(this.OU={
I:this},0);C.At0._Init.call(this.MU={I:this},0);C.Z9._Init.call(this.Z9={I:this}
,0);this.__proto__=C.Z_;this.G(V_);this.Xn.G(V$);this.Xn.A1(0x11);this.Xn.R(A.z2(
A.abg.Date));this.Xn.L(0xFF000000);this.RF.G(Y5);this.RF.A1(0x11);this.RF.R(Ss);
this.RF.L(0xFF000000);this.Xo.G(Y6);this.Xo.A6p(200);this.Iw.G(Wa);this.Iw.Au6(120
);this.Iw.GK=30;this.Iw.A59(A.iF.C0);this.Iw.Bh4(A.iF.C0);this.Iw.Bh8(A.iF.C0);this.
Iw.A5_(A.iF.Text);this.Iw.Bh9(A.iF.Text);this.Iw.Bh5(A.iF.AY);this.Iw.Bh_(A.iF.Bd
);this.Iw.Bh7(A.iF.AY);this.Iw.Bh6(A.iF.Text);this.XL.G(T_);this.XL.A6p(200);this.
AlE.G(T$);this.OU.G(QS);this.MU.G(Wb);this.MU.Cs(3);this.MU.AQM(3);this.MU.L(A.iF.
Text);this.J(this.Xn,0);this.J(this.RF,0);this.J(this.Xo,0);this.J(this.Iw,0);this.
J(this.XL,0);this.J(this.AlE,0);this.J(this.OU,0);this.J(this.MU,0);this.Xn.Aa(A.
zW(A.eV.Az));this.RF.Aa(A.zW(A.eV.Gw));this.Xo.AQ=[this,this.Ahq];this.Xo.Dz(A.zW(
C.AKH));this.Xo.AQN(A.zW(C.AKI));this.Iw.Ay([this,this.Bg7,this.Bi2]);this.Iw.Bid(
this.Z9);this.Iw.AQw(A.zW(A.eV.Az));this.Iw.A6n(A.zW(A.eV.Az));this.XL.AQ=[this,
this.AhD];this.XL.Dz(A.zW(C.AKJ));this.XL.AQN(A.zW(C.AKK));this.AlE.At(A.zW(C.ANH
));this.OU.Dn=[this,this.BwT];this.MU.AQ=[this,this.Bwj];this.MU.Dz(A.zW(A.abi.Alv
));this.MU.AQN(A.zW(A.abi.Alv));},_Done:function(){this.__proto__=A.Core.O;this.
Xn._Done();this.RF._Done();this.Xo._Done();this.Iw._Done();this.XL._Done();this.
AlE._Done();this.Aq._Done();this.OU._Done();this.MU._Done();this.Z9._Done();A.Core.
O._Done.call(this);},_ReInit:function(){A.Core.O._ReInit.call(this);this.Xn._ReInit(
);this.RF._ReInit();this.Xo._ReInit();this.Iw._ReInit();this.XL._ReInit();this.AlE.
_ReInit();this.Aq._ReInit();this.OU._ReInit();this.MU._ReInit();this.Z9._ReInit(
);this.Xn.R(A.z2(A.abg.Date));this.Xn.Aa(A.zW(A.eV.Az));this.RF.Aa(A.zW(A.eV.Gw)
);this.Iw.AQw(A.zW(A.eV.Az));this.Iw.A6n(A.zW(A.eV.Az));},_Mark:function(D){var B;
A.Core.O._Mark.call(this,D);if((B=this.Dh)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=
D);if((B=this.Xn)._cycle!=D)B._Mark(B._cycle=D);if((B=this.RF)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Xo)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Iw)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.XL)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AlE
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Aq)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.OU)._cycle!=D)B._Mark(B._cycle=D);if((B=this.MU)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Z9)._cycle!=D)B._Mark(B._cycle=D);},_className:"Demonstrator::DateSelector"
};C.At0={C4:null,Avz:null,ALv:null,AQ:null,Bj:null,Dg:null,CU:null,Hg:null,XG:null
,ANj:0,S$:0,ARn:0,AP:0xFFFFFFFF,AZb:false,Lp:false,Kp:false,P0:false,Ag:function(
Ae){var B;A.abo.AgG.Ag.call(this,Ae);var FH=((Ae&0x10)===0x10);var Fe=((Ae&0x20)===
0x20);var Fd=this.CU.Down&&this.CU.XO;if(!FH)this.Hg.At(this.ALv);else if(Fd){this.
Hg.At(this.Avz);this.Hg.Cs(this.ARn);}else{this.Hg.At(this.C4);this.Hg.Cs(this.S$
);}this.Hg.L(this.AP);this.Lp=FH;this.Kp=Fe;this.P0=Fd;},PY:function(H){this.Am(
);A.ow(this.AQ,this);},AhN:function(H){if(this.CU.Down)return;if(this.Dg.Abd)return;
this.Am();if(this.Bj.Bv){A.ow(this.AQ,this);this.Bj.Ap(false);}this.Bj.Ap(true);
},BaU:function(H){this.Am();},AyF:function(H){if(!this.CU.XO)return;if(this.CU.Nz
)return;if((this.XG.UQ<=0)||(this.CU.Jj<this.XG.UQ)){if(this.CU.Jj>=this.Bj.UQ)A.
ow(this.AQ,this);else this.Bj.Ap(true);}this.XG.Ap(false);},AyE:function(H){this.
XG.Ap(true);if(this.Bj.Bv){A.ow(this.AQ,this);this.Bj.Ap(false);}},Dz:function(E
){if(this.C4===E)return;this.C4=E;this.Am();},AQN:function(E){if(this.Avz===E)return;
this.Avz=E;this.Am();},AZ7:function(H){if(!this.CU.XO)return;if(this.CU.Nz)return;
if((this.ANj>=0)&&this.AZb){this.AZb=false;this.XG.Ap(true);A.ow(this.AQ,this);}
},A6p:function(E){if(this.ANj===E)return;this.ANj=E;this.XG.VH(E);},BvP:function(
H){this.AZb=true;},Cs:function(E){if(this.S$===E)return;this.S$=E;this.Am();},AQM:
function(E){if(this.ARn===E)return;this.ARn=E;this.Am();},L:function(E){if(this.
AP===E)return;this.AP=E;this.Am();},_Init:function(aArg){A.abo.AgG._Init.call(this
,aArg);A.Core.Timer._Init.call(this.Bj={I:this},0);A.Core.BQ._Init.call(this.Dg={
I:this},0);A.Core.Bh._Init.call(this.CU={I:this},0);A.abh.Ak._Init.call(this.Hg={
I:this},0);A.Core.Timer._Init.call(this.XG={I:this},0);this.__proto__=C.At0;this.
G(ON);this.Bj.Qz(0);this.Bj.VH(50);this.Dg.Filter=149;this.CU.AV(0x3F);this.CU.Kz(
PJ);this.CU.Ky(Ua);this.CU.DN(Y7);this.CU.D6(KF);this.CU.Aea=0xF;this.CU.ADf(100
);this.Hg.AV(0x3F);this.Hg.G(ON);this.Hg.A1(0x12);this.XG.Qz(0);this.J(this.CU,0
);this.J(this.Hg,0);this.Bj.M9=[this,this.PY];this.Dg.BR=[this,this.AhN];this.CU.
ACD=[this,this.BaU];this.CU.Auo=[this,this.BaU];this.CU.DT=[this,this.AZ7];this.
CU.K9=[this,this.AyF];this.CU.BR=[this,this.AyE];this.Hg.At(A.zW(A.abj.K0));this.
C4=A.zW(A.abj.K0);this.Avz=A.zW(A.abj.K0);this.ALv=A.zW(A.abj.K0);this.XG.M9=[this
,this.BvP];},_Done:function(){this.__proto__=A.abo.AgG;this.Bj._Done();this.Dg._Done(
);this.CU._Done();this.Hg._Done();this.XG._Done();A.abo.AgG._Done.call(this);},_ReInit:
function(){A.abo.AgG._ReInit.call(this);this.Bj._ReInit();this.Dg._ReInit();this.
CU._ReInit();this.Hg._ReInit();this.XG._ReInit();},_Mark:function(D){var B;A.abo.
AgG._Mark.call(this,D);if((B=this.C4)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.
Avz)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.ALv)&&(B._cycle!=D))B._Mark(B.
_cycle=D);if((B=this.AQ)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.Bj
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Dg)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.CU)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Hg)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.XG)._cycle!=D)B._Mark(B._cycle=D);},_className:"Demonstrator::IconButton"
};C.AKm={Ph:null,T:null,Adh:null,_Init:function(aArg){C.Fk._Init.call(this,aArg);
A.abh.AH._Init.call(this.Ph={I:this},0);A.abh.Text._Init.call(this.T={I:this},0);
C.Adh._Init.call(this.Adh={I:this},0);this.__proto__=C.AKm;this.G(Wc);this.Ph.AV(
0x1D);this.Ph.G(B9);this.Ph.L(0xFFE6E6E6);this.T.AV(0x1D);this.T.G(Y8);this.T.A1(
0x11);this.T.R(A.z2(A.abg.A1P));this.T.L(0xFF000000);this.Adh.G(Y9);this.J(this.
Ph,0);this.J(this.T,0);this.J(this.Adh,0);this.T.Aa(A.zW(A.eV.Av));},_Done:function(
){this.__proto__=C.Fk;this.Ph._Done();this.T._Done();this.Adh._Done();C.Fk._Done.
call(this);},_ReInit:function(){C.Fk._ReInit.call(this);this.Ph._ReInit();this.T.
_ReInit();this.Adh._ReInit();this.T.R(A.z2(A.abg.A1P));this.T.Aa(A.zW(A.eV.Av));
},_Mark:function(D){var B;C.Fk._Mark.call(this,D);if((B=this.Ph)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.T)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Adh)._cycle!=
D)B._Mark(B._cycle=D);},_className:"Demonstrator::AnimalsHeader"};C.As0={Ph:null
,T:null,AdJ:null,AdF:null,Bh:null,DE:Wd,Ajh:false,Ag:function(Ae){C.Fk.Ag.call(this
,Ae);if(this.Ajh){this.AdF.X(true);this.AdJ.X(false);}else{this.AdF.X(false);this.
AdJ.X(true);}},BwF:function(H){if(this.Ajh)A.ow(this.Ago,this);else A.ow(this.Agp
,this);this.ADi(!this.Ajh);},S:function(E){if(this.DE===E)return;this.DE=E;this.
T.R(E);},ADi:function(E){if(this.Ajh===E)return;this.Ajh=E;this.Am();},_Init:function(
aArg){C.Fk._Init.call(this,aArg);A.abh.AH._Init.call(this.Ph={I:this},0);A.abh.Text.
_Init.call(this.T={I:this},0);A.abh.Ak._Init.call(this.AdJ={I:this},0);A.abh.Ak.
_Init.call(this.AdF={I:this},0);A.Core.Bh._Init.call(this.Bh={I:this},0);this.__proto__=
C.As0;this.G(B9);this.Ph.AV(0x1D);this.Ph.G(B9);this.Ph.L(0xFFE6E6E6);this.T.AV(
0x1D);this.T.G(We);this.T.A1(0x11);this.T.R(Wd);this.T.L(0xFF000000);this.AdJ.G(
St);this.AdJ.X(false);this.AdF.AV(0x3A);this.AdF.G(St);this.Bh.Kz(KF);this.Bh.Ky(
Y_);this.Bh.DN(Y$);this.Bh.D6(OM);this.J(this.Ph,0);this.J(this.T,0);this.J(this.
AdJ,0);this.J(this.AdF,0);this.J(this.Bh,0);this.T.Aa(A.zW(A.eV.Av));this.AdJ.At(
A.zW(C.AKp));this.AdF.At(A.zW(C.Aip));this.Bh.K9=[this,this.BwF];},_Done:function(
){this.__proto__=C.Fk;this.Ph._Done();this.T._Done();this.AdJ._Done();this.AdF._Done(
);this.Bh._Done();C.Fk._Done.call(this);},_ReInit:function(){C.Fk._ReInit.call(this
);this.Ph._ReInit();this.T._ReInit();this.AdJ._ReInit();this.AdF._ReInit();this.
Bh._ReInit();this.T.Aa(A.zW(A.eV.Av));},_Mark:function(D){var B;C.Fk._Mark.call(
this,D);if((B=this.Ph)._cycle!=D)B._Mark(B._cycle=D);if((B=this.T)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.AdJ)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AdF)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.Bh)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Demonstrator::AccordionHeader"};C.A9={AW:null,AQ:null,CU:null,Ho:-1,Yt:function(
E){if(this.AW===E)return;this.AW=E;},Cb:function(Ab){A.aa8("%s",Abz);},Yu:function(
E){if(A.z$(this.AQ,E))return;this.AQ=E;},AyF:function(H){if(!this.CU.XO)return;if(
this.CU.Nz)return;A.ow(this.AQ,this);},_Init:function(aArg){A.Core.O._Init.call(
this,aArg);A.Core.Bh._Init.call(this.CU={I:this},0);this.__proto__=C.A9;this.G(B9
);this.CU.AV(0x3F);this.CU.Kz(OM);this.CU.Ky(Y$);this.CU.DN(Y_);this.CU.D6(KF);this.
CU.Aea=0xF;this.CU.ADf(100);this.J(this.CU,0);this.CU.K9=[this,this.AyF];},_Done:
function(){this.__proto__=A.Core.O;this.CU._Done();A.Core.O._Done.call(this);},_ReInit:
function(){A.Core.O._ReInit.call(this);this.CU._ReInit();},_Mark:function(D){var
B;A.Core.O._Mark.call(this,D);if((B=this.AW)&&(B._cycle!=D))B._Mark(B._cycle=D);
if((B=this.AQ)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.CU)._cycle!=
D)B._Mark(B._cycle=D);},_className:"Demonstrator::ListItem"};C.Fk={APM:null,Agp:
null,Ago:null,Bjn:function(E){if(A.z$(this.APM,E))return;this.APM=E;},A6x:function(
E){if(A.z$(this.Agp,E))return;this.Agp=E;},A6w:function(E){if(A.z$(this.Ago,E))return;
this.Ago=E;},_Init:function(aArg){A.Core.O._Init.call(this,aArg);this.__proto__=
C.Fk;this.G(B9);},_Mark:function(D){var B;A.Core.O._Mark.call(this,D);if((B=this.
APM)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.Agp)&&((B=B[0])._cycle
!=D))B._Mark(B._cycle=D);if((B=this.Ago)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=
D);},_className:"Demonstrator::ListHeader"};C.ALi={Dn:null,ZZ:null,V0:null,VZ:null
,VY:null,M3:null,M2:null,Kx:null,Lp:false,Kp:false,Bxv:false,Ag:function(Ae){var
B;A.abo.AgE.Ag.call(this,Ae);var FH=((Ae&0x10)===0x10);var Fe=((Ae&0x20)===0x20);
var A$Z=(this.VY.YO||this.VZ.YO)||this.V0.YO;if(A$Z)this.ZZ.L(A.iF.Text);else this.
ZZ.L(A.iF.Ba);this.Lp=FH;this.Kp=Fe;this.Bxv=A$Z;},AyA:function(H){this.Am();if((
!this.VY.YO&&!this.VZ.YO)&&!this.V0.YO){var Un=this.AH6(this.ACx(),this.Ap0());var
Ab7=this.ACt();this.Kx.Jo(Un);if(Ab7>Un)this.K$(Un);A.ow(this.Dn,this);}},A0l:function(
H){this.Am();},BhL:function(H){var B;var FW=this.M3.GJ;var Cy=(A.abh.Text.isPrototypeOf(
B=this.M3.Cc)?B:null);if(!Cy)return;Cy.R(A.aaq(FW+1900,4,10));Cy.Aa(A.zW(A.eV.Av
));Cy.L(A.iF.Text);Cy.A1(0x12);Cy.G(A.aaN(Cy.M,[(B=this.M3.M)[2]-B[0],this.M3.GK
]));},BhK:function(H){var B;var FW=this.M2.GJ;var Cy=(A.abh.Text.isPrototypeOf(B=
this.M2.Cc)?B:null);if(!Cy)return;Cy.R(A.aaq(FW+1,2,10)+Su);Cy.Aa(A.zW(A.eV.Av));
Cy.L(A.iF.Text);Cy.A1(0x12);Cy.G(A.aaN(Cy.M,[(B=this.M2.M)[2]-B[0],this.M2.GK]));
},BhI:function(H){var B;var FW=this.Kx.GJ;var Cy=(A.abh.Text.isPrototypeOf(B=this.
Kx.Cc)?B:null);if(!Cy)return;Cy.R(A.aaq(FW+1,2,10)+Su);Cy.Aa(A.zW(A.eV.Av));Cy.L(
A.iF.Text);Cy.A1(0x12);Cy.G(A.aaN(Cy.M,[(B=this.Kx.M)[2]-B[0],this.Kx.GK]));},Ap0:
function(){return 1900+((((-this.M3.Bn/this.M3.GK)|0)+2)%200);},AjC:function(E){
if(E<1900)E=1900;if(E>2100)E=2100;this.M3.Gk(((E-1900)-2)*-this.M3.GK);var Un=this.
AH6(this.ACx(),E);this.Kx.Jo(Un);if(this.ACt()>Un)this.K$(Un);},ACx:function(){return 1+((((-
this.M2.Bn/this.M2.GK)|0)+2)%12);},TD:function(E){if(E<1)E=1;if(E>12)E=12;this.M2.
Gk(((E-1)-2)*-this.M2.GK);var Un=this.AH6(E,this.Ap0());this.Kx.Jo(Un);if(this.ACt(
)>Un)this.K$(Un);},ACt:function(){return 1+((((-this.Kx.Bn/this.Kx.GK)|0)+2)%this.
Kx.AR);},K$:function(E){var Un=this.AH6(this.ACx(),this.Ap0());if(E<1)E=1;if(E>Un
)E=Un;this.Kx.Gk(((E-2)-1)*-this.Kx.GK);},AH6:function(AeR,AbX){if(AeR===2){if(!(
AbX%4)&&(!!(AbX%100)||!(AbX%400)))return 29;else return 28;}else if((((AeR===4)||(
AeR===6))||(AeR===9))||(AeR===11))return 30;else return 31;},_Init:function(aArg
){A.abo.AgE._Init.call(this,aArg);A.abh.CB._Init.call(this.ZZ={I:this},0);A.Core.
H1._Init.call(this.V0={I:this},0);A.Core.H1._Init.call(this.VZ={I:this},0);A.Core.
H1._Init.call(this.VY={I:this},0);A.Core.CI._Init.call(this.M3={I:this},0);A.Core.
CI._Init.call(this.M2={I:this},0);A.Core.CI._Init.call(this.Kx={I:this},0);this.
__proto__=C.ALi;this.G(AbA);this.ZZ.G(AbB);this.ZZ.NQ(3);this.ZZ.L(0xFFE1E1E1);this.
ZZ.X(true);this.V0.G(Za);this.V0.AQU(Wf);this.V0.AQy(0.2);this.VZ.G(Zb);this.VZ.
AQU(Wf);this.VZ.AQy(0.2);this.VY.G(AeG);this.VY.AQU(Wf);this.VY.AQy(0.2);this.M3.
G(Za);this.M3.AQu(true);this.M3.Gk(60);this.M3.AdX(30);this.M3.Jo(200);this.M2.G(
Zb);this.M2.AQu(true);this.M2.Gk(60);this.M2.AdX(30);this.M2.Jo(12);this.Kx.G(AeG
);this.Kx.AQu(true);this.Kx.Gk(60);this.Kx.AdX(30);this.Kx.Jo(31);this.J(this.ZZ
,0);this.J(this.V0,0);this.J(this.VZ,0);this.J(this.VY,0);this.J(this.M3,0);this.
J(this.M2,0);this.J(this.Kx,0);this.V0.Yp=[this,this.AyA];this.V0.R_=[this,this.
A0l];this.VZ.Yp=[this,this.AyA];this.VZ.R_=[this,this.A0l];this.VY.Yp=[this,this.
AyA];this.VY.R_=[this,this.A0l];this.M3.G8=[this,this.BhL];this.M3.Avf(this.V0);
this.M2.G8=[this,this.BhK];this.M2.Avf(this.VZ);this.Kx.G8=[this,this.BhI];this.
Kx.Avf(this.VY);},_Done:function(){this.__proto__=A.abo.AgE;this.ZZ._Done();this.
V0._Done();this.VZ._Done();this.VY._Done();this.M3._Done();this.M2._Done();this.
Kx._Done();A.abo.AgE._Done.call(this);},_ReInit:function(){A.abo.AgE._ReInit.call(
this);this.ZZ._ReInit();this.V0._ReInit();this.VZ._ReInit();this.VY._ReInit();this.
M3._ReInit();this.M2._ReInit();this.Kx._ReInit();},_Mark:function(D){var B;A.abo.
AgE._Mark.call(this,D);if((B=this.Dn)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);
if((B=this.ZZ)._cycle!=D)B._Mark(B._cycle=D);if((B=this.V0)._cycle!=D)B._Mark(B.
_cycle=D);if((B=this.VZ)._cycle!=D)B._Mark(B._cycle=D);if((B=this.VY)._cycle!=D)
B._Mark(B._cycle=D);if((B=this.M3)._cycle!=D)B._Mark(B._cycle=D);if((B=this.M2).
_cycle!=D)B._Mark(B._cycle=D);if((B=this.Kx)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Demonstrator::DatePicker"};C.AE$={_class:function(){return A.abj.Aj;},0:{FileName:
"./res_index/DemonstratorWhiteTile.png",Format:A.jt,NoOfFrames:1,FrameSize:[40,40
],FrameDelay:0,_this:null}};C.AS7={_class:function(){return A.abj.Aj;},0:{FileName:
"./res_index/DemonstratorWhiteTileSmall.png",Format:A.jt,NoOfFrames:1,FrameSize:[
40,40],FrameDelay:0,_this:null}};C.AgO={_Init:function(aArg){A.Core.O._Init.call(
this,aArg);this.__proto__=C.AgO;this.G(EV);},_className:"Demonstrator::SelectionAreaContent"
};C.AKf={Y:null,UH:null,SZ:null,Bw6:function(H){var B;this.SZ.G(A.aaL(this.SZ.M,((
B=this.M)[3]-B[1])-((B=this.UH.M)[3]-B[1])));},_Init:function(aArg){C.AgO._Init.
call(this,aArg);A.Core.Y._Init.call(this.Y={I:this},0);C.AJL._Init.call(this.UH={
I:this},0);C.ASP._Init.call(this.SZ={I:this},0);this.__proto__=C.AKf;this.Y.AV(0x3F
);this.Y.G(EV);this.Y.Kb(1);this.UH.G(AeH);this.UH.Ai(true);this.UH.ADi(true);this.
SZ.AV(0x3);this.SZ.G(LV);this.SZ.Ai(true);this.SZ.NP(C.AJ_);this.SZ.Bji(C.AKm);this.
J(this.Y,0);this.J(this.UH,0);this.J(this.SZ,0);this.A_(this.SZ);this.Y.El=[this
,this.Bw6];this.SZ.Yt(A._GetAutoObject(A.abq.As_));},_Done:function(){this.__proto__=
C.AgO;this.Y._Done();this.UH._Done();this.SZ._Done();C.AgO._Done.call(this);},_ReInit:
function(){C.AgO._ReInit.call(this);this.Y._ReInit();this.UH._ReInit();this.SZ._ReInit(
);},_Mark:function(D){var B;C.AgO._Mark.call(this,D);if((B=this.Y)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.UH)._cycle!=D)B._Mark(B._cycle=D);if((B=this.SZ)._cycle!=
D)B._Mark(B._cycle=D);},_className:"Demonstrator::AnimalSelectionActions"};C.UH={
_Init:function(aArg){C.As0._Init.call(this,aArg);this.__proto__=C.UH;this.S(A.z2(
A.abg.A2M));},_ReInit:function(){C.As0._ReInit.call(this);this.S(A.z2(A.abg.A2M)
);},_className:"Demonstrator::ActionsHeader"};C.AJL={Background:null,ZO:null,Aeq:
null,Aed:null,Aep:null,Ai$:null,Aja:null,Ajb:null,Ajc:null,Ajh:false,Agp:function(
H){var B;this.G(A.aaL(this.M,(B=this.ZO.M)[3]-B[1]));},Ago:function(H){this.G(A.
aaL(this.M,240));},ADi:function(E){if(this.Ajh===E)return;this.Ajh=E;this.ZO.ADi(
E);if(E)this.Agp(this);else this.Ago(this);},_Init:function(aArg){A.Core.O._Init.
call(this,aArg);A.abh.AH._Init.call(this.Background={I:this},0);C.UH._Init.call(
this.ZO={I:this},0);C.Aeq._Init.call(this.Aeq={I:this},0);C.Aed._Init.call(this.
Aed={I:this},0);C.Aep._Init.call(this.Aep={I:this},0);A.abh.DS._Init.call(this.Ai$={
I:this},0);A.abh.DS._Init.call(this.Aja={I:this},0);A.abh.DS._Init.call(this.Ajb={
I:this},0);A.abh.DS._Init.call(this.Ajc={I:this},0);this.__proto__=C.AJL;this.G(
AeH);this.Background.AV(0x3F);this.Background.G(AeH);this.ZO.AV(0x1D);this.ZO.G(
B9);this.Aeq.G(AbC);this.Aed.G(Lg);this.Aep.G(Ag3);this.Ai$.DN(Y$);this.Ai$.D6(OM
);this.Ai$.L(A.iF.Ba);this.Aja.DN(Am4);this.Aja.D6(N2);this.Aja.L(A.iF.Ba);this.
Ajb.DN(Wg);this.Ajb.D6(Am5);this.Ajb.L(A.iF.Ba);this.Ajc.DN(Ag4);this.Ajc.D6(Ag5
);this.Ajc.L(A.iF.Ba);this.J(this.Background,0);this.J(this.ZO,0);this.J(this.Aeq
,0);this.J(this.Aed,0);this.J(this.Aep,0);this.J(this.Ai$,0);this.J(this.Aja,0);
this.J(this.Ajb,0);this.J(this.Ajc,0);this.ZO.A6x([this,this.Agp]);this.ZO.A6w([
this,this.Ago]);},_Done:function(){this.__proto__=A.Core.O;this.Background._Done(
);this.ZO._Done();this.Aeq._Done();this.Aed._Done();this.Aep._Done();this.Ai$._Done(
);this.Aja._Done();this.Ajb._Done();this.Ajc._Done();A.Core.O._Done.call(this);}
,_ReInit:function(){A.Core.O._ReInit.call(this);this.Background._ReInit();this.ZO.
_ReInit();this.Aeq._ReInit();this.Aed._ReInit();this.Aep._ReInit();this.Ai$._ReInit(
);this.Aja._ReInit();this.Ajb._ReInit();this.Ajc._ReInit();},_Mark:function(D){var
B;A.Core.O._Mark.call(this,D);if((B=this.Background)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.ZO)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Aeq)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Aed)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Aep)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.Ai$)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
Aja)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ajb)._cycle!=D)B._Mark(B._cycle=D);
if((B=this.Ajc)._cycle!=D)B._Mark(B._cycle=D);},_className:"Demonstrator::ActionsMenu"
};C.Mb={Aay:null,Af_:null,Bh:null,DS:null,AhK:function(H){},AXs:function(s){this.
AhK(s);},_Init:function(aArg){A.Core.O._Init.call(this,aArg);A.abh.Ak._Init.call(
this.Aay={I:this},0);A.abh.Ak._Init.call(this.Af_={I:this},0);A.Core.Bh._Init.call(
this.Bh={I:this},0);A.abh.DS._Init.call(this.DS={I:this},0);this.__proto__=C.Mb;
this.G(B9);this.Aay.G(AbD);this.Aay.L(A.iF.Text);this.Af_.G(Zc);this.Af_.L(A.iF.
Text);this.Af_.Cs(0);this.Bh.Kz(KF);this.Bh.Ky(OL);this.Bh.DN(Nc);this.Bh.D6(OM);
this.DS.DN(Nc);this.DS.D6(OL);this.DS.L(A.iF.Ba);this.J(this.Aay,0);this.J(this.
Af_,0);this.J(this.Bh,0);this.J(this.DS,0);this.Aay.At(A.zW(A.abj.K0));this.Af_.
At(A.zW(A.abj.ARd));this.Bh.BR=[this,this.AXs];},_Done:function(){this.__proto__=
A.Core.O;this.Aay._Done();this.Af_._Done();this.Bh._Done();this.DS._Done();A.Core.
O._Done.call(this);},_ReInit:function(){A.Core.O._ReInit.call(this);this.Aay._ReInit(
);this.Af_._ReInit();this.Bh._ReInit();this.DS._ReInit();},_Mark:function(D){var
B;A.Core.O._Mark.call(this,D);if((B=this.Aay)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Af_)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Bh)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.DS)._cycle!=D)B._Mark(B._cycle=D);},_className:"Demonstrator::ActionsItem"
};C.Aed={Aex:null,AhK:function(H){var Afq=A.aa2(this.Aex.String,0,10);var Bxj=A.
_GetAutoObject(A.abq.Lz).Azc(Afq);if(Bxj){Afq=Afq+1;this.Aex.R(Afq.toFixed());}}
,_Init:function(aArg){C.Mb._Init.call(this,aArg);C.ApS._Init.call(this.Aex={I:this
},0);this.__proto__=C.Aed;this.Aex.G(Av_);this.Aex.R(Av$);this.Aex.L(A.iF.Text);
this.J(this.Aex,-1);this.Aay.At(A.zW(A.abi.Al0));},_Done:function(){this.__proto__=
C.Mb;this.Aex._Done();C.Mb._Done.call(this);},_ReInit:function(){C.Mb._ReInit.call(
this);this.Aex._ReInit();},_Mark:function(D){var B;C.Mb._Mark.call(this,D);if((B=
this.Aex)._cycle!=D)B._Mark(B._cycle=D);},_className:"Demonstrator::ScanAction"};
C.Aeq={TW:null,OD:null,A02:0,Init:function(aArg){var B;A.za([this,this.Bwp],[B=A.
_GetAutoObject(A.abq.Lz),B.AQa,B.AQO],0);A.za([this,this.AyI],[B=A._GetAutoObject(
A.Device.Device),B.ApY,B.ArK],0);A.ow([this,this.AyI],this);},Ag:function(Ae){C.
Mb.Ag.call(this,Ae);this.OD.X(!A._GetAutoObject(A.abq.Lz).AvA);},AhK:function(H){
var B;A._GetAutoObject(A.abq.Lz).BaW(this);},AyI:function(H){if(A._GetAutoObject(
A.Device.Device).TemperatureUnit!==this.A02){switch(A._GetAutoObject(A.Device.Device
).TemperatureUnit){case 0:this.OD.R(A.aap(A._GetAutoObject(A.abq.Lz).Aq6/100,0,1
));break;case 1:{var AsP=A._GetAutoObject(A.Device.Converter).ASq(A._GetAutoObject(
A.abq.Lz).Aq6/100,0,A._GetAutoObject(A.Device.Device).TemperatureUnit);this.OD.R(
A.aap(AsP,0,1));}break;default:A.aa8("%s%e",Awa,A._GetAutoObject(A.Device.Device
).TemperatureUnit);}this.A02=A._GetAutoObject(A.Device.Device).TemperatureUnit;}
},Bv_:function(H){var B;var AsO=A.aaZ(this.OD.String,0);AsO=A._GetAutoObject(A.Device.
Converter).ASq(AsO,A._GetAutoObject(A.Device.Device).TemperatureUnit,0);AsO*=100;
A._GetAutoObject(A.abq.Lz).A6S(Math.round(AsO)|0);},Bwp:function(H){this.Am();},
_Init:function(aArg){C.Mb._Init.call(this,aArg);A.abr.TW._Init.call(this.TW={I:this
},0);C.OD._Init.call(this.OD={I:this},0);this.__proto__=C.Aeq;var B;this.TW.G(Awb
);this.TW.A6t(A.z2(A.abg.A1W));this.OD.G(Aj8);this.OD.R(Awc);this.OD.L(A.iF.Text
);this.OD.Bie(true);this.A02=A._GetAutoObject(A.Device.Device).TemperatureUnit;this.
J(this.TW,0);this.J(this.OD,0);this.Aay.At(A.zW(A.abi.Aax));this.TW.Ay([B=A._GetAutoObject(
A.abq.Lz),B.AQa,B.AQO]);this.TW.OnSetAppearance(A._GetAutoObject(A.abz.Az$));this.
OD.Dn=[this,this.Bv_];this.Init(aArg);},_Done:function(){this.__proto__=C.Mb;this.
TW._Done();this.OD._Done();C.Mb._Done.call(this);},_ReInit:function(){C.Mb._ReInit.
call(this);this.TW._ReInit();this.OD._ReInit();this.TW.A6t(A.z2(A.abg.A1W));},_Mark:
function(D){var B;C.Mb._Mark.call(this,D);if((B=this.TW)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.OD)._cycle!=D)B._Mark(B._cycle=D);},_className:"Demonstrator::TemperatureAction"
};C.ApD={Q:null,CB:null,Bh:null,AfK:null,Al5:null,Al4:null,ApI:null,Text:null,Ha:
null,Ak:null,CT:null,ApH:null,ApJ:null,AnU:false,Bf:function(aSize){this.Ha.G(A.
aaN(this.Ha.M,aSize));this.CB.AvH(1);this.CB.Jk(0,40);this.CB.E5(0,aSize[0]-20,20
,12.5,12.5,-90,90,10);this.CB.E5(0,20,20,12.5,12.5,90,270,10);this.CB.UZ(0);},Ag:
function(Ae){var B;var F;A.Core.O.Ag.call(this,Ae);var GY=((Ae&0x40)===0x40);if(
GY){if(!!this.Q)this.Text.R((F=this.Q,F[1].call(F[0])));this.AfK.Ap(true);this.Ak.
X(false);}else{if(!!this.Q)this.Text.R((F=this.Q,F[1].call(F[0])));this.AfK.Ap(false
);this.CT.X(false);this.Ak.X(true);}this.AnU=GY;},AhK:function(H){var B;if(!((this.
U&0x80)===0x80))this.Ia().AKx(this);},A4P:function(H){},A88:function(s){this.A4P(
s);},Bf$:function(H){var B;var F;if(!this.Q||!(F=this.Q,F[1].call(F[0])).length)
this.CT.G(A.aaP(this.CT.M,A.zT(this.Text.M)[0]));else{this.CT.G(A.aaP(this.CT.M,
this.Text.AMt(0)[2]+2));this.CT.G(A.aaR(this.CT.M,this.Text.AMt(0)[1]));this.CT.
G(A.aaL(this.CT.M,(B=this.Text.AMt(0))[3]-B[1]));}this.Ak.G(A.aaP(this.Ak.M,this.
Text.M[0]-((B=this.Ak.M)[2]-B[0])));},A4N:function(H){},A87:function(s){this.A4N(
s);},Ay:function(E){if(A.z_(this.Q,E))return;if(!!this.Q)A.zn([this,this.OX],this.
Q,0);this.Q=E;if(!!E)A.za([this,this.OX],E,0);if(!!E)A.ow([this,this.OX],this);}
,OX:function(H){this.Am();},BhN:function(H){var B;if(((this.U&0x80)===0x80))this.
Ia().AAG(this);},Ba4:function(H){},_Init:function(aArg){A.Core.O._Init.call(this
,aArg);A.Graphics.Hj._Init.call(this.CB={I:this},0);A.Core.Bh._Init.call(this.Bh={
I:this},0);A.abm.UR._Init.call(this.AfK={I:this},0);A.Core.BQ._Init.call(this.Al5={
I:this},0);A.Core.BQ._Init.call(this.Al4={I:this},0);A.Core.BQ._Init.call(this.ApI={
I:this},0);A.abh.Text._Init.call(this.Text={I:this},0);A.abh.Ha._Init.call(this.
Ha={I:this},0);A.abh.Ak._Init.call(this.Ak={I:this},0);A.abh.AH._Init.call(this.
CT={I:this},0);A.Core.BQ._Init.call(this.ApH={I:this},0);A.Core.BQ._Init.call(this.
ApJ={I:this},0);this.__proto__=C.ApD;var B;this.G(AeI);this.Bh.AV(0x3F);this.Bh.
Kz(KF);this.Bh.Ky(Ari);this.Bh.DN(OO);this.Bh.D6(PJ);this.AfK.Fz(530);this.AfK.VI(
530);this.Al5.Filter=143;this.Al4.Filter=45;this.ApI.Filter=1;this.Text.AV(0x3F);
this.Text.G(AeI);this.Text.I0(true);this.Text.A1(0x12);this.Text.L(0xFFB3B3B3);this.
Ha.G(AeI);this.Ha.L(0xFFB3B3B3);this.Ha.NQ(1);this.Ak.G(Sv);this.CT.G(Awd);this.
CT.L(0xFFB3B3B3);this.CT.X(false);this.ApH.Filter=138;this.ApJ.Filter=137;this.J(
this.Bh,0);this.J(this.Text,0);this.J(this.Ha,0);this.J(this.Ak,0);this.J(this.CT
,0);this.Bh.K9=[this,this.AhK];this.AfK.Q=[B=this.CT,B.E$,B.X];this.Al5.BR=[this
,this.A88];this.Al5.DT=[this,this.A88];this.Al4.BR=[this,this.A87];this.Al4.DT=[
this,this.A87];this.ApI.BR=[this,this.BhN];this.Text.Qy([this,this.Bf$]);this.Text.
Aa(A.zW(A.eV.Az));this.Ha.Yv(this.CB);this.Ak.At(null);this.ApH.BR=[this,this.Ba4
];this.ApJ.BR=[this,this.Ba4];},_Done:function(){this.__proto__=A.Core.O;this.CB.
_Done();this.Bh._Done();this.AfK._Done();this.Al5._Done();this.Al4._Done();this.
ApI._Done();this.Text._Done();this.Ha._Done();this.Ak._Done();this.CT._Done();this.
ApH._Done();this.ApJ._Done();A.Core.O._Done.call(this);},_ReInit:function(){A.Core.
O._ReInit.call(this);this.CB._ReInit();this.Bh._ReInit();this.AfK._ReInit();this.
Al5._ReInit();this.Al4._ReInit();this.ApI._ReInit();this.Text._ReInit();this.Ha.
_ReInit();this.Ak._ReInit();this.CT._ReInit();this.ApH._ReInit();this.ApJ._ReInit(
);this.Text.Aa(A.zW(A.eV.Az));},_Mark:function(D){var B;A.Core.O._Mark.call(this
,D);if((B=this.Q)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.CB)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.Bh)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
AfK)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Al5)._cycle!=D)B._Mark(B._cycle=D);
if((B=this.Al4)._cycle!=D)B._Mark(B._cycle=D);if((B=this.ApI)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Text)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ha)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.Ak)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
CT)._cycle!=D)B._Mark(B._cycle=D);if((B=this.ApH)._cycle!=D)B._Mark(B._cycle=D);
if((B=this.ApJ)._cycle!=D)B._Mark(B._cycle=D);},_className:"Demonstrator::InputView"
};C.Adh={Background:null,Xu:null,_Init:function(aArg){A.Core.O._Init.call(this,aArg
);A.abh.AH._Init.call(this.Background={I:this},0);C.Xu._Init.call(this.Xu={I:this
},0);this.__proto__=C.Adh;var B;this.G(Sw);this.Background.G(Sw);this.Xu.AV(0x1D
);this.Xu.G(Arj);this.J(this.Background,0);this.J(this.Xu,0);this.Xu.Ay([B=A._GetAutoObject(
A.abq.AiF),B.A5v,B.ADy]);},_Done:function(){this.__proto__=A.Core.O;this.Background.
_Done();this.Xu._Done();A.Core.O._Done.call(this);},_ReInit:function(){A.Core.O.
_ReInit.call(this);this.Background._ReInit();this.Xu._ReInit();},_Mark:function(
D){var B;A.Core.O._Mark.call(this,D);if((B=this.Background)._cycle!=D)B._Mark(B.
_cycle=D);if((B=this.Xu)._cycle!=D)B._Mark(B._cycle=D);},_className:"Demonstrator::FilterRow"
};C.OD={Init:function(aArg){var B;A.za([this,this.AyI],[B=A._GetAutoObject(A.Device.
Device),B.ApY,B.ArK],0);A.ow([this,this.AyI],this);},Ag:function(Ae){var B;C.ApS.
Ag.call(this,Ae);var GY=((this.U&0x40)===0x40);if(!GY&&(this.String.length>0))this.
Text.R(((this.String+Awe)+A._GetAutoObject(A.abk.Temperature).AkI())+String.fromCharCode(
0x0A));else this.Text.R(this.String+String.fromCharCode(0x0A));if(this.Eh>this.String.
length)this.Eh=this.String.length;},AyI:function(H){this.Am();},_Init:function(aArg
){C.ApS._Init.call(this,aArg);this.__proto__=C.OD;this.Init(aArg);},_className:"Demonstrator::TemperatureInputView"
};C.ApS={B4:null,Dn:null,IO:null,Cm:null,AlB:null,RG:null,Kv:null,Bh:null,Text:null
,CT:null,Ao2:null,Aqz:null,CB:null,Ha:null,ApU:null,Apq:null,Apb:null,String:A.jm
,Eh:0,AP:0xFFB3B3B3,ALk:false,Ng:false,Bf:function(aSize){this.Ha.G(A.aaN(this.Ha.
M,aSize));this.CB.AvH(1);this.CB.Jk(0,40);this.CB.E5(0,aSize[0]-20,20,12.5,12.5,-
90,90,10);this.CB.E5(0,20,20,12.5,12.5,90,270,10);this.CB.UZ(0);},Ag:function(Ae
){var B;A.abo.I5.Ag.call(this,Ae);if(((Ae&0x40)===0x40))this.IO.Ap(true);else{this.
IO.Ap(false);this.CT.X(false);}},A1b:function(H){var B;var A7=this.Text.M;var Nn=
0;var Np=0;if(this.CT.Em[0]<A7[0])Nn=A7[0]-this.CT.Em[0];if(this.CT.Em[0]>A7[2])
Nn=A7[2]-this.CT.Em[0];if(this.CT.Em[1]<A7[1])Np=A7[1]-this.CT.Em[1];if(this.CT.
Ev[1]>A7[3])Np=A7[3]-this.CT.Ev[1];if(!!Nn||!!Np)this.Text.Gk(A.aak(this.Text.Bn
,[Nn,Np]));Nn=this.Text.Bn[0];Np=this.Text.Bn[1];var CY=[(B=this.Text.C9())[2]-B[
0],B[3]-B[1]];if(CY[0]<=((B=this.Text.M)[2]-B[0]))Nn=0;if(CY[1]<=((B=this.Text.M
)[3]-B[1]))Np=0;this.Text.Gk([Nn,Np]);},Alj:function(H){if(!this.B4)return;var A0J=
this.Text.AEH(this.Eh);var pos=this.Text.Aeb(A0J);this.CT.D6(A.aaj(pos,[0,this.B4.
Ascent]));this.CT.DN(A.aak(pos,[0,this.B4.Descent]));if(this.IO.Bv){this.IO.Ap(false
);this.IO.Ap(true);}if(this.Ng){A.ow([this,this.A1b],this);this.Ng=false;}},AyE:
function(H){if(!this.A3G(0x80))this.Ia().AKx(this);var Ez=this.Text.ARh(this.Bh.
HS);var Ut=this.Text.AmM(Ez);if(Ut!==this.Eh){this.Eh=Ut;A.ow([this,this.Alj],this
);this.Ng=true;}},Ayy:function(H){if(!this.B4)return;var Ez=this.Text.AEH(this.Eh
);if(this.Cm.CP===6){Ez=[Ez[0]-1,Ez[1]];if(this.Text.AmM(Ez)===this.Eh){Ez=[Ez[0
],Ez[1]-1];Ez=[this.Text.AA3(Ez[1]).length,Ez[1]];}}if(this.Cm.CP===7){Ez=[Ez[0]+
1,Ez[1]];if(this.Text.AmM(Ez)===this.Eh){Ez=[Ez[0],Ez[1]+1];Ez=[0,Ez[1]];}}var Ut=
this.Text.AmM(Ez);if(Ut!==this.Eh){this.Eh=Ut;A.ow([this,this.Alj],this);this.Ng=
true;}},BaO:function(H){if(!this.Eh)return;this.R(A.aa3(this.String,this.Eh-1,1)
);this.Eh=this.Eh-1;this.Ng=true;A.ow(this.Dn,this);},Ayz:function(H){if(this.Eh>=
this.String.length)return;this.R(A.aa3(this.String,this.Eh,1));this.Ng=true;A.ow(
this.Dn,this);},BaT:function(H){if(this.String.length>=15)return;var BuD=this.Kv.
D4;var AsM=String.fromCharCode(BuD);this.R(A.aaW(this.String,AsM,this.Eh));this.
Eh=this.Eh+AsM.length;this.Ng=true;A.ow(this.Dn,this);},R:function(E){if(this.String===
E)return;this.String=E;if(this.Eh>(E.length+1))this.Eh=E.length;this.Text.R(E+String.
fromCharCode(0x0A));this.Ng=true;this.Text.Gk(KF);},L:function(E){if(this.AP===E
)return;this.AP=E;this.Text.L(E);this.CT.L(E);this.Ha.L(E);},Ba5:function(H){if(
this.ALk===false)return;if(this.String.indexOf(String.fromCharCode(0x2E),0)>=0)return;
if(this.String.length>=15)return;this.R(A.aaW(this.String,Su,this.Eh));this.Eh=this.
Eh+1;this.Ng=true;A.ow(this.Dn,this);},Bie:function(E){if(this.ALk===E)return;this.
ALk=E;if(E===false){var BbI=this.String.indexOf(String.fromCharCode(0x2E),0);if(
BbI>=0)this.R(A.aaX(this.String,BbI));}this.Ng=true;this.Text.Gk(KF);},Bwg:function(
H){if(this.A3G(0x80))this.Ia().AAG(this);this.Am();},Bv5:function(H){var Ut=this.
String.length;if(Ut!==this.Eh){this.Eh=Ut;A.ow([this,this.Alj],this);this.Ng=true;
}},Bv9:function(H){if(!!this.Eh){this.Eh=0;A.ow([this,this.Alj],this);this.Ng=true;
}},_Init:function(aArg){A.abo.I5._Init.call(this,aArg);A.abm.UR._Init.call(this.
IO={I:this},0);A.Core.BQ._Init.call(this.Cm={I:this},0);A.Core.BQ._Init.call(this.
AlB={I:this},0);A.Core.BQ._Init.call(this.RG={I:this},0);A.Core.BQ._Init.call(this.
Kv={I:this},0);A.Core.Bh._Init.call(this.Bh={I:this},0);A.abh.Text._Init.call(this.
Text={I:this},0);A.abh.DS._Init.call(this.CT={I:this},0);A.Core.BQ._Init.call(this.
Ao2={I:this},0);A.Core.BQ._Init.call(this.Aqz={I:this},0);A.Graphics.Hj._Init.call(
this.CB={I:this},0);A.abh.Ha._Init.call(this.Ha={I:this},0);A.Core.BQ._Init.call(
this.ApU={I:this},0);A.Core.BQ._Init.call(this.Apq={I:this},0);A.Core.BQ._Init.call(
this.Apb={I:this},0);this.__proto__=C.ApS;var B;this.G(AeI);this.IO.BZ=false;this.
IO.Cv=true;this.IO.Fz(500);this.IO.VI(500);this.Cm.Filter=147;this.AlB.Filter=45;
this.RG.Filter=44;this.Kv.Filter=143;this.Bh.AV(0x3F);this.Bh.Kz(PJ);this.Bh.Ky(
OO);this.Bh.DN(Ari);this.Bh.D6(KF);this.Bh.ADf(3);this.Text.AV(0x3F);this.Text.G(
AeI);this.Text.KB(false);this.Text.A1(0x12);this.Text.R(A.jm);this.Text.L(0xFFB3B3B3
);this.CT.DN(Awf);this.CT.D6(Awg);this.CT.A64(2);this.CT.A63(2);this.CT.L(0xFFB3B3B3
);this.CT.X(false);this.Ao2.Filter=138;this.Aqz.Filter=137;this.Ha.G(AeI);this.Ha.
L(0xFFB3B3B3);this.Ha.NQ(1);this.ApU.Filter=1;this.Apq.Filter=41;this.Apb.Filter=
42;this.J(this.Bh,0);this.J(this.Text,0);this.J(this.CT,0);this.J(this.Ha,0);this.
IO.Q=[B=this.CT,B.E$,B.X];this.Cm.BR=[this,this.Ayy];this.Cm.DT=[this,this.Ayy];
this.AlB.BR=[this,this.BaO];this.AlB.DT=[this,this.BaO];this.RG.BR=[this,this.Ayz
];this.RG.DT=[this,this.Ayz];this.Kv.BR=[this,this.BaT];this.Kv.DT=[this,this.BaT
];this.Bh.BR=[this,this.AyE];this.Text.Qy([this,this.Alj]);this.Text.Aa(A.zW(A.eV.
Az));this.B4=A.zW(A.eV.Az);this.Ao2.BR=[this,this.Ba5];this.Aqz.BR=[this,this.Ba5
];this.Ha.Yv(this.CB);this.ApU.BR=[this,this.Bwg];this.Apq.BR=[this,this.Bv9];this.
Apb.BR=[this,this.Bv5];},_Done:function(){this.__proto__=A.abo.I5;this.IO._Done(
);this.Cm._Done();this.AlB._Done();this.RG._Done();this.Kv._Done();this.Bh._Done(
);this.Text._Done();this.CT._Done();this.Ao2._Done();this.Aqz._Done();this.CB._Done(
);this.Ha._Done();this.ApU._Done();this.Apq._Done();this.Apb._Done();A.abo.I5._Done.
call(this);},_ReInit:function(){A.abo.I5._ReInit.call(this);this.IO._ReInit();this.
Cm._ReInit();this.AlB._ReInit();this.RG._ReInit();this.Kv._ReInit();this.Bh._ReInit(
);this.Text._ReInit();this.CT._ReInit();this.Ao2._ReInit();this.Aqz._ReInit();this.
CB._ReInit();this.Ha._ReInit();this.ApU._ReInit();this.Apq._ReInit();this.Apb._ReInit(
);},_Mark:function(D){var B;A.abo.I5._Mark.call(this,D);if((B=this.B4)&&(B._cycle
!=D))B._Mark(B._cycle=D);if((B=this.Dn)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D
);if((B=this.IO)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Cm)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.AlB)._cycle!=D)B._Mark(B._cycle=D);if((B=this.RG)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.Kv)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Bh
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Text)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.CT)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ao2)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Aqz)._cycle!=D)B._Mark(B._cycle=D);if((B=this.CB)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Ha)._cycle!=D)B._Mark(B._cycle=D);if((B=this.ApU)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.Apq)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Apb
)._cycle!=D)B._Mark(B._cycle=D);},_className:"Demonstrator::NumberInput"};C.Aep={
LabelDataSync:null,AhK:function(H){var B;A.ow([B=A._GetAutoObject(A.abt.AqZ),B.BxB
],this);},_Init:function(aArg){C.Mb._Init.call(this,aArg);A.kh.CQ._Init.call(this.
LabelDataSync={I:this},0);this.__proto__=C.Aep;this.LabelDataSync.G(Am6);this.LabelDataSync.
R(A.z2(A.abg.A2C));this.LabelDataSync.L(A.iF.Text);this.J(this.LabelDataSync,0);
this.Aay.At(A.zW(C.ASh));this.LabelDataSync.Aa(A.zW(A.eV.Av));this.LabelDataSync.
BC(A.zW(A.eV.Az));},_Done:function(){this.__proto__=C.Mb;this.LabelDataSync._Done(
);C.Mb._Done.call(this);},_ReInit:function(){C.Mb._ReInit.call(this);this.LabelDataSync.
_ReInit();this.LabelDataSync.R(A.z2(A.abg.A2C));this.LabelDataSync.Aa(A.zW(A.eV.
Av));this.LabelDataSync.BC(A.zW(A.eV.Az));},_Mark:function(D){var B;C.Mb._Mark.call(
this,D);if((B=this.LabelDataSync)._cycle!=D)B._Mark(B._cycle=D);},_className:"Demonstrator::SyncAction"
};C.ASh={_class:function(){return A.abj.Aj;},0:{FileName:"./res_index/DemonstratorSyncIcon.png"
,Format:A.cC,NoOfFrames:1,FrameSize:[50,60],FrameDelay:0,_this:null}};C.Z9={TimespanDaysToString:
null,AA5:function(aIndex){if(this.AA0()>aIndex)return this.TimespanDaysToString.
Ca(aIndex);A.aa8("%s",Awh);return A.jm;},AA0:function(){return 4;},Dl:function(aIndex
){var Ah8=0;switch(aIndex){case 0:Ah8=0;break;case 1:Ah8=1;break;case 2:Ah8=2;break;
case 3:Ah8=3;break;default:throw new Error(Ark+aIndex.toFixed());}return Ah8;},_Init:
function(aArg){A.abx.AlD._Init.call(this,aArg);A.Device.TimespanDaysToString._Init.
call(this.TimespanDaysToString={I:this},0);this.__proto__=C.Z9;},_Done:function(
){this.__proto__=A.abx.AlD;this.TimespanDaysToString._Done();A.abx.AlD._Done.call(
this);},_ReInit:function(){A.abx.AlD._ReInit.call(this);this.TimespanDaysToString.
_ReInit();},_Mark:function(D){var B;A.abx.AlD._Mark.call(this,D);if((B=this.TimespanDaysToString
)._cycle!=D)B._Mark(B._cycle=D);},_className:"Demonstrator::DatePickerUnitDD"};C.
BA7={Gu:0,ASW:1,G6:2,Year:3};C.AAD={_class:function(){return A.abj.Aj;},0:{FileName:
"./res_index/DemonstratorEarTagIcon.png",Format:A.jt,NoOfFrames:2,FrameSize:[37,
37],FrameDelay:0,_this:null}};C.AEU={_class:function(){return A.abj.Aj;},0:{FileName:
"./res_index/DemonstratorTransponderEarTagIcon.png",Format:A.jt,NoOfFrames:2,FrameSize:[
37,37],FrameDelay:0,_this:null}};
C._Init=function(){C.ASP.__proto__=A.abo.Menu;C.ARR.__proto__=A.Core.O;C.AJ_.__proto__=
C.A9;C.Mc.__proto__=A.Core.O;C.Xu.__proto__=C.ApD;C.Z_.__proto__=A.Core.O;C.At0.
__proto__=A.abo.AgG;C.AKm.__proto__=C.Fk;C.As0.__proto__=C.Fk;C.A9.__proto__=A.Core.
O;C.Fk.__proto__=A.Core.O;C.ALi.__proto__=A.abo.AgE;C.AgO.__proto__=A.Core.O;C.AKf.
__proto__=C.AgO;C.UH.__proto__=C.As0;C.AJL.__proto__=A.Core.O;C.Mb.__proto__=A.Core.
O;C.Aed.__proto__=C.Mb;C.Aeq.__proto__=C.Mb;C.ApD.__proto__=A.Core.O;C.Adh.__proto__=
A.Core.O;C.OD.__proto__=C.ApS;C.ApS.__proto__=A.abo.I5;C.Aep.__proto__=C.Mb;C.Z9.
__proto__=A.abx.AlD;};C._ReInit=function(){};C.DB=function(D){var B;if((B=C.Background[
0]._this)&&(B._cycle!=D))B._Done(C.Background[0]._this=null);if((B=C.AKH[0]._this
)&&(B._cycle!=D))B._Done(C.AKH[0]._this=null);if((B=C.AKI[0]._this)&&(B._cycle!=
D))B._Done(C.AKI[0]._this=null);if((B=C.AKJ[0]._this)&&(B._cycle!=D))B._Done(C.AKJ[
0]._this=null);if((B=C.AKK[0]._this)&&(B._cycle!=D))B._Done(C.AKK[0]._this=null);
if((B=C.ANH[0]._this)&&(B._cycle!=D))B._Done(C.ANH[0]._this=null);if((B=C.Filter[
0]._this)&&(B._cycle!=D))B._Done(C.Filter[0]._this=null);if((B=C.APf[0]._this)&&(
B._cycle!=D))B._Done(C.APf[0]._this=null);if((B=C.Aip[0]._this)&&(B._cycle!=D))B.
_Done(C.Aip[0]._this=null);if((B=C.AKp[0]._this)&&(B._cycle!=D))B._Done(C.AKp[0].
_this=null);if((B=C.AqQ[0]._this)&&(B._cycle!=D))B._Done(C.AqQ[0]._this=null);if((
B=C.ASm[0]._this)&&(B._cycle!=D))B._Done(C.ASm[0]._this=null);if((B=C.AE$[0]._this
)&&(B._cycle!=D))B._Done(C.AE$[0]._this=null);if((B=C.AS7[0]._this)&&(B._cycle!=
D))B._Done(C.AS7[0]._this=null);if((B=C.ASh[0]._this)&&(B._cycle!=D))B._Done(C.ASh[
0]._this=null);if((B=C.AAD[0]._this)&&(B._cycle!=D))B._Done(C.AAD[0]._this=null);
if((B=C.AEU[0]._this)&&(B._cycle!=D))B._Done(C.AEU[0]._this=null);};return C;})(
);

/* VitalControl demonstration application, © Urban GmbH & Co.KG 2023 */