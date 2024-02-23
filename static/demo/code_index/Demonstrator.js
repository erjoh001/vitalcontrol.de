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
* Version  : 13.00
* Profile  : WebGLDemonstrator
* Platform : Web.WebGL.RGBA8888
*
*******************************************************************************/

var index;if(!index)throw new Error("The application file '_project.js' isn't yet loaded!"
);if(index.acw)throw new Error("The unit file 'Demonstrator.js' included twice!"
);index.acw=(function(){var A=index;var C={};
var Ca=[0,0,370,60];var BD=[360,0,370,60];var EW=[0,0,370,710];var Hh="Unknown animalType";
var I8=[58,10,120,50];var IJ=[0,0,60,60];var OT=[120,0,360,60];var PV="\u2015";var
PW=[0,0,240,60];var CM=[0,0,40,60];var E4=[100,0,130,60];var Lp=[43,0,100,60];var
PX=[125,0,240,60];var Kq=[0,0];var N6=[100,0];var PY=[100,60];var MC=[0,60];var SV=[
107,0];var UE=[240,0];var ZD=[240,60];var WG=[107,60];var IK="%d.%m.%Y";var UF="Unhandled date unit: ";
var ZE=[0,0,200,180];var WH=[36,0,200,30];var ZF=[0,30,160,60];var WI="Text";var
ZG=[0,70,40,110];var ZH=[44,70,156,110];var UG=[160,70,200,110];var WJ=[7,2,27,25
];var Q9=[0,30,170,180];var ZI=[170,34,190,57];var OU=[0,0,40,40];var Q_=[0,40];
var WK=[40,40];var WM=[40,0];var WN=[0,0,370,100];var WO=[20,0,290,60];var ZJ=[0
,60,370,100];var WQ="Cap";var WR=[20,0,370,60];var SW=[310,0,370,60];var ZK=[370
,0];var ZL=[370,60];var Acp="UpdateData is called for the base class ListItemBase. Please make "+
"sure this method is implemented by a derived class.";var UH=".";var ZM=[0,0,170
,150];var Afb=[0,59,170,90];var ZN=[110,0,170,150];var WS=[0,30];var ZO=[50,0,100
,150];var ZP=[0,0,40,150];var Afc=[0,0,370,240];var JQ=[0,60,370,710];var Acq=[0
,60,370,120];var Lq=[0,120,370,180];var Ahw=[0,180,370,240];var AnO=[370,120];var
N7=[0,120];var WT=[370,180];var AnP=[0,180];var Ahx=[370,240];var Ahy=[0,240];var
Acr=[0,0,50,60];var UI=[50,0,100,60];var AnQ=[100,10,370,50];var AnR="276000901234567";
var AnS="Unhandled temperature unit";var AnT=[110,0,260,60];var Afd=[235,10,370,
50];var AnU="39.5";var Afe=[0,0,270,40];var Ash=[270,0];var OV=[270,40];var SX=[
150,0,170,40];var Axl=[205,10,207,30];var SY=[0,0,370,40];var Asi=[50,0,320,40];
var Axm=" ";var Axn=[135,23];var Axo=[135,0];var AnV=[100,0,370,60];var Axp="Error: Nullpointer Exception";
var Asj="Unknown Date Piecker Unit Index: ";
C.Background={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/DemonstratorBackground.png"
,Format:A._PIXEL_FORMAT_NATIVE,NoOfFrames:1,FrameSize:[1000,740],FrameDelay:0,_this:
null}};C.AMd={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/DemonstratorButtonLeft.png"
,Format:A._PIXEL_FORMAT_NATIVE,NoOfFrames:1,FrameSize:[40,40],FrameDelay:0,_this:
null}};C.AMe={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/DemonstratorButtonLeftPressed.png"
,Format:A._PIXEL_FORMAT_NATIVE,NoOfFrames:1,FrameSize:[40,40],FrameDelay:0,_this:
null}};C.AMf={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/DemonstratorButtonRight.png"
,Format:A._PIXEL_FORMAT_NATIVE,NoOfFrames:1,FrameSize:[40,40],FrameDelay:0,_this:
null}};C.AMg={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/DemonstratorButtonRightPressed.png"
,Format:A._PIXEL_FORMAT_NATIVE,NoOfFrames:1,FrameSize:[40,40],FrameDelay:0,_this:
null}};C.APl={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/DemonstratorIconDatePicker.png"
,Format:A._PIXEL_FORMAT_NATIVE,NoOfFrames:1,FrameSize:[20,23],FrameDelay:0,_this:
null}};C.Filter={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/DemonstratorFilter.png"
,Format:A._PIXEL_FORMAT_NATIVE,NoOfFrames:1,FrameSize:[15,16],FrameDelay:0,_this:
null}};C.AQT={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/DemonstratorMenuIcon.png"
,Format:A._PIXEL_FORMAT_NATIVE,NoOfFrames:1,FrameSize:[20,16],FrameDelay:0,_this:
null}};C.Ai6={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/DemonstratorArrowRight.png"
,Format:A._PIXEL_FORMAT_NATIVE,NoOfFrames:1,FrameSize:[17,16],FrameDelay:0,_this:
null}};C.ALW={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/DemonstratorArrowDown.png"
,Format:A._PIXEL_FORMAT_NATIVE,NoOfFrames:1,FrameSize:[17,16],FrameDelay:0,_this:
null}};C.ArS={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/DemonstratorScanIcon.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:2,FrameSize:[37,37],FrameDelay:0,_this:
null}};C.AT4={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/DemonstratorTemperatureIcon.png"
,Format:A._PIXEL_FORMAT_NATIVE,NoOfFrames:1,FrameSize:[17,37],FrameDelay:0,_this:
null}};C.AUx={AdO:null,AY:null,AN:null,Background:null,H2:null,AD:null,IG:null,Dg:
null,Le:null,A6F:null,A68:0,Bg:function(aSize){A.acn.Menu.Bg.call(this,aSize);this.
IG.H(A.abP(this.IG.M,this.AD.OI));this.IG.H([].concat(this.IG.M.slice(0,3),aSize[
1]));},Ai:function(Ae){var B;A.acn.Menu.Ai.call(this,Ae);var Ir=((Ae&0x40)===0x40
);if(Ir&&(this.AD.Gi<0))this.AD.GX(0);},NS:function(E){if(this.Le===E)return;this.
Le=E;this.AD.NS(E);},Blu:function(E){var B;if(this.A6F===E)return;if(!!this.AdO){
this.HI(this.AdO);this.AdO=null;}if(!!E){this.AdO=(C.Fo.isPrototypeOf(B=A._NewObject(
E,0))?B:null);this.AdO.A8X([this,this.AgY]);this.AdO.A8Y([this,this.AgZ]);this.AdO.
Blz(null);this.J(this.AdO,0);this.AD.A84((B=this.AdO.M)[3]-B[1]);}else this.AD.A84(
0);this.IG.H(A.abP(this.IG.M,this.AD.OI));A.pe([this,this.E9],this);this.A6F=E;}
,Hc:function(G){var B;var FW=this.AD.GT;var Aa=(C.Bb.isPrototypeOf(B=this.AD.Cf)?
B:null);if(!Aa)return;Aa.Y6(this.AY);Aa.Ce(FW);Aa.Y7(this.AN);Aa.H(A.abK(Aa.M,[(
B=this.AD.M)[2]-B[0],this.AD.GW]));},Y6:function(E){var B;if(this.AY===E)return;
if(!!this.AY){A.z9([this,this.Ce],this.AY,0);A.z$([this,this.AnH],[B=this.AY,B.Fz
,B.FD],0);}this.AY=E;if(!!E){A.zV([this,this.Ce],E,0);A.zX([this,this.AnH],[E,E.
Fz,E.FD],0);}A.pe([this,this.Ce],this);A.pe([this,this.AnH],this);},Ce:function(
G){if(!!this.AY){this.AD.Jn(this.AY.Cb());this.AD.Abg(0,this.AD.AV-1);}else this.
AD.Jn(0);if(this.A68!==this.AD.AV){this.AD.AAY(null,null);this.A68=this.AD.AV;}A.
pe([this,this.E9],this);},AgZ:function(G){var B;this.H(A.abI(this.M,(B=this.AD.AN5(
))[3]-B[1]));},AgY:function(G){this.H(A.abI(this.M,180));},A8i:function(G){var Jr=(
A.Core.BK.isPrototypeOf(G)?G:null);var FW=this.AD.Gi;if(Jr.CL===4)FW=FW-1;else if(
Jr.CL===5)FW=FW+1;else if((Jr.DJ>=0x30)&&(Jr.DJ<=0x39))A._GetAutoObject(A.acp.Agk
).E$(Jr.DJ);else if(Jr.CL===45)A._GetAutoObject(A.acp.Agk).Delete();else Jr.NC=true;
if((FW<0)||(FW>=this.AD.AV))return;this.AD.GX(FW);this.Bw_(FW,true);},BwZ:function(
G){var Aa=(C.Bb.isPrototypeOf(G)?G:null);this.AD.GX(Aa.Hu);},Bw_:function(G1,AcF
){var B;if((G1<0)||(G1>=this.AD.AV))return;var Ax=this.AD.Aqj(G1,G1);var A_=this.
AD.M;A_=A.abP(A_,(B=this.AD.AN5())[3]-B[1]);A_=A.abI(A_,(((B=this.AD.M)[3]-B[1])-((
B=this.AD.AN5())[3]-B[1]))-((B=this.AD.Bhl())[3]-B[1]));var LF=A.lb(Ax,A_);if((!
AcF&&!((LF[0]>=LF[2])||(LF[1]>=LF[3])))||(AcF&&A.aaY(LF,Ax)))return;var Bo=0;if(
Ax[3]>A_[3])Bo=Ax[3]-A_[3];if(Bo>(Ax[1]-A_[1]))Bo=(Ax[3]-A_[1])-this.AD.GW;this.
AD.Gh(this.AD.Bq-Bo);},AnH:function(G){this.AD.GX(-1);},E9:function(G){var B;this.
IG.Mq(this.AD.GW*this.AD.AV);this.IG.Ms(((B=this.AD.M)[3]-B[1])-this.AD.OI);this.
IG.Mr(-this.AD.Bq);},_Init:function(aArg){A.acn.Menu._Init.call(this,aArg);A.acg.
AJ._Init.call(this.Background={I:this},0);A.Core.H2._Init.call(this.H2={I:this},
0);A.Core.CJ._Init.call(this.AD={I:this},0);A.kR.Aw._Init.call(this.IG={I:this},
0);A.Core.BK._Init.call(this.Dg={I:this},0);this.__proto__=C.AUx;this.H(Ca);this.
Background.AX(0x3);this.Background.H(Ca);this.H2.AX(0x3F);this.H2.H(Ca);this.AD.
AX(0x3F);this.AD.H(Ca);this.AD.AeD(60);this.AD.Jn(0);this.AD.NS(this.Le);this.IG.
AX(0x3A);this.IG.H(BD);this.IG.L(0xFF808080);this.J(this.Background,0);this.J(this.
H2,0);this.J(this.AD,0);this.J(this.IG,0);this.AD.Ej=[this,this.E9];this.AD.Hc=[
this,this.Hc];this.AD.Awm(this.H2);this.AN=[this,this.BwZ];this.Dg.BL=[this,this.
A8i];this.Dg.DS=[this,this.A8i];},_Done:function(){this.__proto__=A.acn.Menu;this.
Background._Done();this.H2._Done();this.AD._Done();this.IG._Done();this.Dg._Done(
);A.acn.Menu._Done.call(this);},_ReInit:function(){A.acn.Menu._ReInit.call(this);
this.Background._ReInit();this.H2._ReInit();this.AD._ReInit();this.IG._ReInit();
this.Dg._ReInit();},_Mark:function(D){var B;A.acn.Menu._Mark.call(this,D);if((B=
this.AdO)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.AY)&&(B._cycle!=D))B._Mark(
B._cycle=D);if((B=this.AN)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.
Background)._cycle!=D)B._Mark(B._cycle=D);if((B=this.H2)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.AD)._cycle!=D)B._Mark(B._cycle=D);if((B=this.IG)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Dg)._cycle!=D)B._Mark(B._cycle=D);},_className:"Demonstrator::VerticalMenu"
};C.ATw={Gz:null,AJ:null,CA:null,Init:function(aArg){var B;A.zX([this,this.Gw],[
B=A._GetAutoObject(A.acp.K7),B.A7X,B.A9b],0);A.pe([this,this.Gw],this);},AbI:function(
E){if(this.Gz===E)return;if(!!this.Gz)this.HI(this.Gz);this.Gz=E;if(!!this.Gz)this.
J(this.Gz,0);this.A8(E);this.Ahe(E,this.CA);this.Am();},Gw:function(G){var B;if(
!!A._GetAutoObject(A.acp.K7).ArV)this.AbI((C.Ahh.isPrototypeOf(B=A._NewObject(A.
_GetAutoObject(A.acp.K7).ArV,0))?B:null));else this.AbI(null);},_Init:function(aArg
){A.Core.O._Init.call(this,aArg);A.acg.AJ._Init.call(this.AJ={I:this},0);A.acg.CA.
_Init.call(this.CA={I:this},0);this.__proto__=C.ATw;this.H(EW);this.AJ.AX(0x3F);
this.AJ.H(EW);this.CA.H(EW);this.CA.L(0xFF000000);this.J(this.AJ,0);this.J(this.
CA,0);this.Init(aArg);},_Done:function(){this.__proto__=A.Core.O;this.AJ._Done();
this.CA._Done();A.Core.O._Done.call(this);},_ReInit:function(){A.Core.O._ReInit.
call(this);this.AJ._ReInit();this.CA._ReInit();},_Mark:function(D){var B;A.Core.
O._Mark.call(this,D);if((B=this.Gz)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.
AJ)._cycle!=D)B._Mark(B._cycle=D);if((B=this.CA)._cycle!=D)B._Mark(B._cycle=D);}
,_className:"Demonstrator::SelectionArea"};C.ALF={AfZ:0,MR:0,Background:null,V:null
,Ai2:null,Adw:null,Xx:null,Adx:null,Mb:null,On:0,LA:false,Kx:false,CU:function(){
this.Am();},Ai:function(Ae){var B;C.Bb.Ai.call(this,Ae);var G6=((Ae&0x10)===0x10
);var Fh=((Ae&0x20)===0x20);var Ir=((Ae&0x40)===0x40);if(!G6){this.Background.L(
0xFFAAAAAA);this.V.L(0xFF888888);this.Mb.Ar(false);this.Mb.Y(false);}else if(Ir){
this.Background.L(A.jb.AR);this.V.L(A.jb.Bi);this.Mb.Ar(true);this.Mb.Y(true);}else
if(Fh){this.Background.L(0xFFE6DED8);this.V.L(0xFF000000);this.Mb.Ar(true);this.
Mb.Y(true);}else{this.Background.L(0xFFFFFFFF);this.V.L(0xFF000000);this.Mb.Ar(false
);this.Mb.Y(false);}if(!this.Kx&&Fh)A._GetAutoObject(A.acp.K7).NU(this.AfZ);this.
Mb.Blw(this.MR>0);this.Mb.BlX(this.AfZ>0);this.V.R(this.On.toFixed());this.LA=G6;
this.Kx=Fh;},Ce:function(Ac){if(!this.AY){this.Xx.Ay(A.aaL(A.ach.Ad8));this.Adw.
L(A.jb.Ae6);return;}this.Hu=Ac;if(!!this.AY){this.MR=this.AY.LM(Ac,26);this.AfZ=
this.AY.LM(Ac,22);this.On=this.AY.CD(Ac,1);var All=this.AY.HW(Ac,11);var Alc=this.
AY.IV(Ac,17);var LK=this.AY.IV(Ac,13);var H8=this.AY.Amu(Ac,14);var W5=A._GetAutoObject(
A.Device.Helper).ALu(LK,All,Alc);switch(H8){case 0:this.Xx.Ay(A.aaL(A.ach.Ad8));
break;case 1:this.Xx.Ay(A.aaL(A.ach.Au4));break;case 2:this.Xx.Ay(A.aaL(A.ach.Au7
));break;default:A.ab5("%s%e",Hh,H8);}this.Adx.Ay(this.Xx.Al);this.Adw.L(A._GetAutoObject(
A.acj.Assessment).Qd(W5));this.Am();}},_Init:function(aArg){C.Bb._Init.call(this
,aArg);A.acg.AJ._Init.call(this.Background={I:this},0);A.kR.CP._Init.call(this.V={
I:this},0);A.acg.An._Init.call(this.Ai2={I:this},0);A.acg.An._Init.call(this.Adw={
I:this},0);A.acg.An._Init.call(this.Xx={I:this},0);A.acg.An._Init.call(this.Adx={
I:this},0);C.Mb._Init.call(this.Mb={I:this},0);this.__proto__=C.ALF;this.Background.
AX(0x3F);this.Background.H(Ca);this.V.AX(0x3F);this.V.H(I8);this.V.R(A.aaR(A.acf.
GD));this.V.A3(0x11);this.V.L(0xFF000000);this.Ai2.H(IJ);this.Ai2.L(A.jb.Text);this.
Adw.H(IJ);this.Adw.L(A.jb.ET);this.Xx.H(IJ);this.Adx.H(IJ);this.Adx.L(A.jb.Text);
this.Adx.Cv(1);this.Mb.AX(0x3);this.Mb.H(OT);this.J(this.Background,0);this.J(this.
V,0);this.J(this.Ai2,0);this.J(this.Adw,0);this.J(this.Xx,0);this.J(this.Adx,0);
this.J(this.Mb,0);this.V.S(A.aaL(A.fl.Ah));this.V.A7(A.aaL(A.fl.Ak));this.V.CB(A.
aaL(A.fl.By));this.Ai2.Ay(A.aaL(C.AGx));this.Adw.Ay(A.aaL(C.AUP));this.Xx.Ay(A.aaL(
A.ach.Ad8));this.Adx.Ay(A.aaL(A.ach.Ad8));},_Done:function(){this.__proto__=C.Bb;
this.Background._Done();this.V._Done();this.Ai2._Done();this.Adw._Done();this.Xx.
_Done();this.Adx._Done();this.Mb._Done();C.Bb._Done.call(this);},_ReInit:function(
){C.Bb._ReInit.call(this);this.Background._ReInit();this.V._ReInit();this.Ai2._ReInit(
);this.Adw._ReInit();this.Xx._ReInit();this.Adx._ReInit();this.Mb._ReInit();this.
V.R(A.aaR(A.acf.GD));this.V.S(A.aaL(A.fl.Ah));this.V.A7(A.aaL(A.fl.Ak));this.V.CB(
A.aaL(A.fl.By));this.CU();},_Mark:function(D){var B;C.Bb._Mark.call(this,D);if((
B=this.Background)._cycle!=D)B._Mark(B._cycle=D);if((B=this.V)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Ai2)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Adw)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.Xx)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
Adx)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Mb)._cycle!=D)B._Mark(B._cycle=D);
},_className:"Demonstrator::AnimalMenuItem"};C.Mb={Uk:null,Wn:null,AkA:null,Nd:null
,N2:null,Zg:null,Ab$:null,Avo:false,Aw_:false,CU:function(){this.Am();},Ai:function(
Ae){var B;A.Core.O.Ai.call(this,Ae);var Ir=((Ae&0x40)===0x40);if(Ir){this.Nd.L(A.
jb.Bi);this.N2.L(A.jb.Bi);}else{this.Nd.L(A.jb.Text);this.N2.L(A.jb.Text);}if(this.
Aw_){this.Nd.R(A.aaR(A.acf.BmR));if(this.Avo){this.Uk.Ay(A.aaL(C.AGe));this.Wn.Ay(
A.aaL(C.AGe));}else{this.Uk.Ay(A.aaL(C.ArS));this.Wn.Ay(A.aaL(C.ArS));}}else if(
this.Avo){this.Uk.Ay(A.aaL(C.ABV));this.Wn.Ay(A.aaL(C.ABV));this.Nd.R(PV);}var A2T=
this.Aw_||this.Avo;this.Uk.Y(A2T);this.Wn.Y(A2T);this.Nd.Y(A2T);this.Zg.Ar(this.
Aw_);},BlX:function(E){if(this.Aw_===E)return;this.Aw_=E;this.Am();},Blw:function(
E){if(this.Avo===E)return;this.Avo=E;this.Am();},_Init:function(aArg){A.Core.O._Init.
call(this,aArg);A.acg.An._Init.call(this.Uk={I:this},0);A.acg.An._Init.call(this.
Wn={I:this},0);A.acg.An._Init.call(this.AkA={I:this},0);A.kR.CP._Init.call(this.
Nd={I:this},0);A.kR.CP._Init.call(this.N2={I:this},0);A.Core.Bj._Init.call(this.
Zg={I:this},0);A.Core.Bj._Init.call(this.Ab$={I:this},0);this.__proto__=C.Mb;var
B;this.H(PW);this.Uk.AX(0x6);this.Uk.H(CM);this.Uk.L(A.jb.C1);this.Uk.Cv(1);this.
Wn.AX(0x6);this.Wn.H(CM);this.Wn.L(A.jb.Text);this.AkA.AX(0xE);this.AkA.H(E4);this.
Nd.AX(0x7);this.Nd.H(Lp);this.Nd.A3(0x11);this.Nd.L(0xFF000000);this.N2.AX(0x3);
this.N2.H(PX);this.N2.R(A.aaR(A.acf.Temperature));this.N2.A3(0x11);this.N2.L(0xFF000000
);this.Zg.AX(0x3);this.Zg.Kg(Kq);this.Zg.Kf(N6);this.Zg.DM(PY);this.Zg.DY(MC);this.
Ab$.AX(0x3);this.Ab$.Kg(SV);this.Ab$.Kf(UE);this.Ab$.DM(ZD);this.Ab$.DY(WG);this.
J(this.Uk,0);this.J(this.Wn,0);this.J(this.AkA,0);this.J(this.Nd,0);this.J(this.
N2,0);this.J(this.Zg,0);this.J(this.Ab$,0);this.Uk.Ay(A.aaL(C.ArS));this.Wn.Ay(A.
aaL(C.ArS));this.AkA.Ay(A.aaL(C.AT4));this.Nd.S(A.aaL(A.fl.Ah));this.Nd.A7(A.aaL(
A.fl.Ak));this.Nd.CB(A.aaL(A.fl.By));this.N2.S(A.aaL(A.fl.Ah));this.N2.A7(A.aaL(
A.fl.Ak));this.N2.CB(A.aaL(A.fl.By));this.Zg.Li=[B=A._GetAutoObject(A.acp.K7),B.
BdD];this.Ab$.Li=[B=A._GetAutoObject(A.acp.K7),B.Bdo];},_Done:function(){this.__proto__=
A.Core.O;this.Uk._Done();this.Wn._Done();this.AkA._Done();this.Nd._Done();this.N2.
_Done();this.Zg._Done();this.Ab$._Done();A.Core.O._Done.call(this);},_ReInit:function(
){A.Core.O._ReInit.call(this);this.Uk._ReInit();this.Wn._ReInit();this.AkA._ReInit(
);this.Nd._ReInit();this.N2._ReInit();this.Zg._ReInit();this.Ab$._ReInit();this.
N2.R(A.aaR(A.acf.Temperature));this.Nd.S(A.aaL(A.fl.Ah));this.Nd.A7(A.aaL(A.fl.Ak
));this.Nd.CB(A.aaL(A.fl.By));this.N2.S(A.aaL(A.fl.Ah));this.N2.A7(A.aaL(A.fl.Ak
));this.N2.CB(A.aaL(A.fl.By));this.CU();},_Mark:function(D){var B;A.Core.O._Mark.
call(this,D);if((B=this.Uk)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Wn)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.AkA)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Nd
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.N2)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Zg)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ab$)._cycle!=D)B._Mark(B._cycle=
D);},_className:"Demonstrator::AnimalItemAction"};C.X9={CU:function(){this.Am();
},Ai:function(Ae){C.AqC.Ai.call(this,Ae);if(!this.Text.String.length)this.Text.R(
A.aaR(A.acf.Filter));},A7d:function(G){var DW=(A.Core.BK.isPrototypeOf(G)?G:null
);if(!!DW)A._GetAutoObject(A.acp.Agk).E$(DW.DJ);},A7b:function(G){A._GetAutoObject(
A.acp.Agk).Delete();},_Init:function(aArg){C.AqC._Init.call(this,aArg);this.__proto__=
C.X9;this.An.Ay(A.aaL(C.Filter));},_ReInit:function(){C.AqC._ReInit.call(this);this.
CU();},_className:"Demonstrator::FilterView"};C.AaQ={Dh:null,X2:null,RZ:null,X3:
null,Iy:null,Yh:null,Amg:null,Au:null,O1:null,M2:null,AaP:null,FN:0,Avc:0,AFl:false
,Ai:function(Ae){A.Core.O.Ai.call(this,Ae);this.RZ.R(this.Au.Format(IK));if(this.
AFl){this.RZ.Y(false);this.Yh.Y(false);this.Iy.Y(false);this.X3.Y(false);this.O1.
Ar(true);this.O1.Y(true);this.M2.Cv(2);this.M2.ASs(2);this.M2.H(A.abM(this.M2.M,
this.O1.M[2]));}else{this.RZ.Y(true);this.Yh.Y(true);this.Iy.Y(true);this.X3.Y(true
);this.O1.Ar(false);this.O1.Y(false);this.M2.Cv(3);this.M2.ASs(3);this.M2.H(A.abM(
this.M2.M,this.RZ.M[2]));}},ByN:function(G){this.BlC(!this.AFl);},Ada:function(G
){var F;if(!!this.Dh)this.T9((F=this.Dh,F[1].call(F[0])));},AbM:function(E){if(A.
aaZ(this.Dh,E))return;if(!!this.Dh)A.z$([this,this.Ada],this.Dh,0);this.Dh=E;if(
!!E)A.zX([this,this.Ada],E,0);if(!!E)A.pe([this,this.Ada],this);},T9:function(E){
if(this.FN===E)return;this.FN=E;this.Au.Initialize(this.FN);this.BzR(this);this.
Am();},Aig:function(G){var B;var F;var BO=this.FN;var AiO=this.AaP.C5(this.Avc);
this.AIw(AiO);if(this.Au.Year>2100)this.Au.Initialize2(2100,12,31,0,0,0);this.T9(((
B=(this.Au.JI()|0))<0)?B+0x100000000:B);if(this.FN!==BO){if(!!this.Dh)(F=this.Dh
,F[2].call(F[0],this.FN));A.abo(this.Dh,0);}},Ah4:function(G){var B;var F;var BO=
this.FN;var AiO=this.AaP.C5(this.Avc);this.AKk(AiO);if(this.Au.Year<2000)this.Au.
Initialize2(2000,1,1,0,0,0);this.T9(((B=(this.Au.JI()|0))<0)?B+0x100000000:B);if(
this.FN!==BO){if(!!this.Dh)(F=this.Dh,F[2].call(F[0],this.FN));A.abo(this.Dh,0);
}},Blc:function(E){if(this.Avc===E)return;this.Avc=E;},BlC:function(E){if(this.AFl===
E)return;this.AFl=E;this.Am();},Bzm:function(G){var B;var F;var BO=this.FN;this.
Au.Lk(this.O1.ADN());this.Au.Ub(this.O1.ADS());this.Au.Year=this.O1.Aq1();this.T9(((
B=(this.Au.JI()|0))<0)?B+0x100000000:B);if(this.FN!==BO){if(!!this.Dh)(F=this.Dh
,F[2].call(F[0],this.FN));A.abo(this.Dh,0);}},BzR:function(G){this.O1.Lk(this.Au.
GB);this.O1.Ub(this.Au.Ha);this.O1.Aki(this.Au.Year);},AIw:function(Ayk){var B;switch(
Ayk){case 0:if(this.Au.GB<this.Au.Y3())this.Au.Lk(this.Au.GB+1);else{this.Au.Lk(
1);this.AIw(2);}break;case 1:if((this.Au.GB+7)<=this.Au.Y3())this.Au.Lk(this.Au.
GB+7);else{this.Au.Lk((7-this.Au.Y3())+this.Au.GB);this.AIw(2);}break;case 2:if(
this.Au.Ha<12)this.Au.Ub(this.Au.Ha+1);else{this.Au.Ub(1);this.AIw(3);}break;case
3:this.Au.Year++;break;default:throw new Error(UF+Ayk.toFixed());}},AKk:function(
Ayk){var B;switch(Ayk){case 0:if(this.Au.GB>1)this.Au.Lk(this.Au.GB-1);else{this.
AKk(2);this.Au.Lk(this.Au.Y3());}break;case 1:if((this.Au.GB-7)>0)this.Au.Lk(this.
Au.GB-7);else{this.AKk(2);this.Au.Lk(this.Au.Y3()-(7-this.Au.GB));}break;case 2:
if(this.Au.Ha>1)this.Au.Ub(this.Au.Ha-1);else{this.Au.Ub(12);this.AKk(3);}break;
case 3:this.Au.Year--;break;default:throw new Error(UF+Ayk.toFixed());}},Bjf:function(
){return this.Avc;},_Init:function(aArg){A.Core.O._Init.call(this,aArg);A.acg.Text.
_Init.call(this.X2={I:this},0);A.acg.Text._Init.call(this.RZ={I:this},0);C.Au2._Init.
call(this.X3={I:this},0);A.acv.Iy._Init.call(this.Iy={I:this},0);C.Au2._Init.call(
this.Yh={I:this},0);A.acg.An._Init.call(this.Amg={I:this},0);A.Core.Bt._Init.call(
this.Au={I:this},0);C.AMS._Init.call(this.O1={I:this},0);C.Au2._Init.call(this.M2={
I:this},0);C.AaP._Init.call(this.AaP={I:this},0);this.__proto__=C.AaQ;this.H(ZE);
this.X2.H(WH);this.X2.A3(0x11);this.X2.R(A.aaR(A.acf.Date));this.X2.L(0xFF000000
);this.RZ.H(ZF);this.RZ.A3(0x11);this.RZ.R(WI);this.RZ.L(0xFF000000);this.X3.H(ZG
);this.X3.A8O(200);this.Iy.H(ZH);this.Iy.Av9(120);this.Iy.GW=30;this.Iy.A8x(A.jb.
C1);this.Iy.Bkb(A.jb.C1);this.Iy.Bkh(A.jb.C1);this.Iy.A8y(A.jb.Text);this.Iy.Bki(
A.jb.Text);this.Iy.Bkc(A.jb.AR);this.Iy.Bkj(A.jb.Bi);this.Iy.Bkg(A.jb.AR);this.Iy.
Bkf(A.jb.Text);this.Yh.H(UG);this.Yh.A8O(200);this.Amg.H(WJ);this.O1.H(Q9);this.
M2.H(ZI);this.M2.Cv(3);this.M2.ASs(3);this.M2.L(A.jb.Text);this.J(this.X2,0);this.
J(this.RZ,0);this.J(this.X3,0);this.J(this.Iy,0);this.J(this.Yh,0);this.J(this.Amg
,0);this.J(this.O1,0);this.J(this.M2,0);this.X2.S(A.aaL(A.fl.Ak));this.RZ.S(A.aaL(
A.fl.EA));this.X3.AN=[this,this.Ah4];this.X3.Dy(A.aaL(C.AMd));this.X3.ASt(A.aaL(
C.AMe));this.Iy.At([this,this.Bjf,this.Blc]);this.Iy.Bko(this.AaP);this.Iy.AEm(A.
aaL(A.fl.Ak));this.Iy.ASb(A.aaL(A.fl.Ak));this.Yh.AN=[this,this.Aig];this.Yh.Dy(
A.aaL(C.AMf));this.Yh.ASt(A.aaL(C.AMg));this.Amg.Ay(A.aaL(C.APl));this.O1.Dk=[this
,this.Bzm];this.M2.AN=[this,this.ByN];this.M2.Dy(A.aaL(A.ach.Al8));this.M2.ASt(A.
aaL(A.ach.Al8));},_Done:function(){this.__proto__=A.Core.O;this.X2._Done();this.
RZ._Done();this.X3._Done();this.Iy._Done();this.Yh._Done();this.Amg._Done();this.
Au._Done();this.O1._Done();this.M2._Done();this.AaP._Done();A.Core.O._Done.call(
this);},_ReInit:function(){A.Core.O._ReInit.call(this);this.X2._ReInit();this.RZ.
_ReInit();this.X3._ReInit();this.Iy._ReInit();this.Yh._ReInit();this.Amg._ReInit(
);this.Au._ReInit();this.O1._ReInit();this.M2._ReInit();this.AaP._ReInit();this.
X2.R(A.aaR(A.acf.Date));this.X2.S(A.aaL(A.fl.Ak));this.RZ.S(A.aaL(A.fl.EA));this.
Iy.AEm(A.aaL(A.fl.Ak));this.Iy.ASb(A.aaL(A.fl.Ak));},_Mark:function(D){var B;A.Core.
O._Mark.call(this,D);if((B=this.Dh)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((
B=this.X2)._cycle!=D)B._Mark(B._cycle=D);if((B=this.RZ)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.X3)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Iy)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Yh)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Amg)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.Au)._cycle!=D)B._Mark(B._cycle=D);if((B=this.O1
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.M2)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.AaP)._cycle!=D)B._Mark(B._cycle=D);},_className:"Demonstrator::DateSelector"
};C.Au2={C6:null,AwG:null,AM9:null,AN:null,Bl:null,Dg:null,CQ:null,Hm:null,Yd:null
,AOZ:0,TG:0,AS6:0,AQ:0xFFFFFFFF,A0_:false,LA:false,Kx:false,Qh:false,Ai:function(
Ae){var B;A.acn.Aha.Ai.call(this,Ae);var G6=((Ae&0x10)===0x10);var Fh=((Ae&0x20)===
0x20);var Gt=this.CQ.Down&&this.CQ.Yk;if(!G6)this.Hm.Ay(this.AM9);else if(Gt){this.
Hm.Ay(this.AwG);this.Hm.Cv(this.AS6);}else{this.Hm.Ay(this.C6);this.Hm.Cv(this.TG
);}this.Hm.L(this.AQ);this.LA=G6;this.Kx=Fh;this.Qh=Gt;},Qg:function(G){this.Am(
);A.pe(this.AN,this);},Ais:function(G){if(this.CQ.Down)return;if(this.Dg.AbY)return;
this.Am();if(this.Bl.Bv){A.pe(this.AN,this);this.Bl.Ar(false);}this.Bl.Ar(true);
},Bdl:function(G){this.Am();},AzY:function(G){if(!this.CQ.Yk)return;if(this.CQ.NA
)return;if((this.Yd.Vj<=0)||(this.CQ.Jh<this.Yd.Vj)){if(this.CQ.Jh>=this.Bl.Vj)A.
pe(this.AN,this);else this.Bl.Ar(true);}this.Yd.Ar(false);},AzX:function(G){this.
Yd.Ar(true);if(this.Bl.Bv){A.pe(this.AN,this);this.Bl.Ar(false);}},Dy:function(E
){if(this.C6===E)return;this.C6=E;this.Am();},ASt:function(E){if(this.AwG===E)return;
this.AwG=E;this.Am();},A17:function(G){if(!this.CQ.Yk)return;if(this.CQ.NA)return;
if((this.AOZ>=0)&&this.A0_){this.A0_=false;this.Yd.Ar(true);A.pe(this.AN,this);}
},A8O:function(E){if(this.AOZ===E)return;this.AOZ=E;this.Yd.Wf(E);},Byg:function(
G){this.A0_=true;},Cv:function(E){if(this.TG===E)return;this.TG=E;this.Am();},ASs:
function(E){if(this.AS6===E)return;this.AS6=E;this.Am();},L:function(E){if(this.
AQ===E)return;this.AQ=E;this.Am();},_Init:function(aArg){A.acn.Aha._Init.call(this
,aArg);A.Core.Timer._Init.call(this.Bl={I:this},0);A.Core.BK._Init.call(this.Dg={
I:this},0);A.Core.Bj._Init.call(this.CQ={I:this},0);A.acg.An._Init.call(this.Hm={
I:this},0);A.Core.Timer._Init.call(this.Yd={I:this},0);this.__proto__=C.Au2;this.
H(OU);this.Bl.PJ(0);this.Bl.Wf(50);this.Dg.Filter=149;this.CQ.AX(0x3F);this.CQ.Kg(
Q_);this.CQ.Kf(WK);this.CQ.DM(WM);this.CQ.DY(Kq);this.CQ.AeO=0xF;this.CQ.AEF(100
);this.Hm.AX(0x3F);this.Hm.H(OU);this.Hm.A3(0x12);this.Yd.PJ(0);this.J(this.CQ,0
);this.J(this.Hm,0);this.Bl.Mt=[this,this.Qg];this.Dg.BL=[this,this.Ais];this.CQ.
ADX=[this,this.Bdl];this.CQ.Avt=[this,this.Bdl];this.CQ.DS=[this,this.A17];this.
CQ.Li=[this,this.AzY];this.CQ.BL=[this,this.AzX];this.Hm.Ay(A.aaL(A.aci.TB));this.
C6=A.aaL(A.aci.TB);this.AwG=A.aaL(A.aci.TB);this.AM9=A.aaL(A.aci.TB);this.Yd.Mt=[
this,this.Byg];},_Done:function(){this.__proto__=A.acn.Aha;this.Bl._Done();this.
Dg._Done();this.CQ._Done();this.Hm._Done();this.Yd._Done();A.acn.Aha._Done.call(
this);},_ReInit:function(){A.acn.Aha._ReInit.call(this);this.Bl._ReInit();this.Dg.
_ReInit();this.CQ._ReInit();this.Hm._ReInit();this.Yd._ReInit();},_Mark:function(
D){var B;A.acn.Aha._Mark.call(this,D);if((B=this.C6)&&(B._cycle!=D))B._Mark(B._cycle=
D);if((B=this.AwG)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.AM9)&&(B._cycle
!=D))B._Mark(B._cycle=D);if((B=this.AN)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D
);if((B=this.Bl)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Dg)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.CQ)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Hm)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.Yd)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Demonstrator::IconButton"};C.ALT={Pp:null,V:null,Ad2:null,_Init:function(aArg){
C.Fo._Init.call(this,aArg);A.acg.AJ._Init.call(this.Pp={I:this},0);A.acg.Text._Init.
call(this.V={I:this},0);C.Ad2._Init.call(this.Ad2={I:this},0);this.__proto__=C.ALT;
this.H(WN);this.Pp.AX(0x1D);this.Pp.H(Ca);this.Pp.L(0xFFE6E6E6);this.V.AX(0x1D);
this.V.H(WO);this.V.A3(0x11);this.V.R(A.aaR(A.acf.A3U));this.V.L(0xFF000000);this.
Ad2.H(ZJ);this.J(this.Pp,0);this.J(this.V,0);this.J(this.Ad2,0);this.V.S(A.aaL(A.
fl.Ah));},_Done:function(){this.__proto__=C.Fo;this.Pp._Done();this.V._Done();this.
Ad2._Done();C.Fo._Done.call(this);},_ReInit:function(){C.Fo._ReInit.call(this);this.
Pp._ReInit();this.V._ReInit();this.Ad2._ReInit();this.V.R(A.aaR(A.acf.A3U));this.
V.S(A.aaL(A.fl.Ah));},_Mark:function(D){var B;C.Fo._Mark.call(this,D);if((B=this.
Pp)._cycle!=D)B._Mark(B._cycle=D);if((B=this.V)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Ad2)._cycle!=D)B._Mark(B._cycle=D);},_className:"Demonstrator::AnimalsHeader"
};C.AtY={Pp:null,V:null,Aep:null,Aen:null,Bj:null,DD:WQ,AjY:false,Ai:function(Ae
){C.Fo.Ai.call(this,Ae);if(this.AjY){this.Aen.Y(true);this.Aep.Y(false);}else{this.
Aen.Y(false);this.Aep.Y(true);}},By9:function(G){if(this.AjY)A.pe(this.AgY,this);
else A.pe(this.AgZ,this);this.AEI(!this.AjY);},U:function(E){if(this.DD===E)return;
this.DD=E;this.V.R(E);},AEI:function(E){if(this.AjY===E)return;this.AjY=E;this.Am(
);},_Init:function(aArg){C.Fo._Init.call(this,aArg);A.acg.AJ._Init.call(this.Pp={
I:this},0);A.acg.Text._Init.call(this.V={I:this},0);A.acg.An._Init.call(this.Aep={
I:this},0);A.acg.An._Init.call(this.Aen={I:this},0);A.Core.Bj._Init.call(this.Bj={
I:this},0);this.__proto__=C.AtY;this.H(Ca);this.Pp.AX(0x1D);this.Pp.H(Ca);this.Pp.
L(0xFFE6E6E6);this.V.AX(0x1D);this.V.H(WR);this.V.A3(0x11);this.V.R(WQ);this.V.L(
0xFF000000);this.Aep.H(SW);this.Aep.Y(false);this.Aen.AX(0x3A);this.Aen.H(SW);this.
Bj.Kg(Kq);this.Bj.Kf(ZK);this.Bj.DM(ZL);this.Bj.DY(MC);this.J(this.Pp,0);this.J(
this.V,0);this.J(this.Aep,0);this.J(this.Aen,0);this.J(this.Bj,0);this.V.S(A.aaL(
A.fl.Ah));this.Aep.Ay(A.aaL(C.ALW));this.Aen.Ay(A.aaL(C.Ai6));this.Bj.Li=[this,this.
By9];},_Done:function(){this.__proto__=C.Fo;this.Pp._Done();this.V._Done();this.
Aep._Done();this.Aen._Done();this.Bj._Done();C.Fo._Done.call(this);},_ReInit:function(
){C.Fo._ReInit.call(this);this.Pp._ReInit();this.V._ReInit();this.Aep._ReInit();
this.Aen._ReInit();this.Bj._ReInit();this.V.S(A.aaL(A.fl.Ah));},_Mark:function(D
){var B;C.Fo._Mark.call(this,D);if((B=this.Pp)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.V)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Aep)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Aen)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Bj)._cycle!=D)B._Mark(
B._cycle=D);},_className:"Demonstrator::AccordionHeader"};C.Bb={AY:null,AN:null,
CQ:null,Hu:-1,Y6:function(E){if(this.AY===E)return;this.AY=E;},Ce:function(Ac){A.
ab5("%s",Acp);},Y7:function(E){if(A.aa0(this.AN,E))return;this.AN=E;},AzY:function(
G){if(!this.CQ.Yk)return;if(this.CQ.NA)return;A.pe(this.AN,this);},_Init:function(
aArg){A.Core.O._Init.call(this,aArg);A.Core.Bj._Init.call(this.CQ={I:this},0);this.
__proto__=C.Bb;this.H(Ca);this.CQ.AX(0x3F);this.CQ.Kg(MC);this.CQ.Kf(ZL);this.CQ.
DM(ZK);this.CQ.DY(Kq);this.CQ.AeO=0xF;this.CQ.AEF(100);this.J(this.CQ,0);this.CQ.
Li=[this,this.AzY];},_Done:function(){this.__proto__=A.Core.O;this.CQ._Done();A.
Core.O._Done.call(this);},_ReInit:function(){A.Core.O._ReInit.call(this);this.CQ.
_ReInit();},_Mark:function(D){var B;A.Core.O._Mark.call(this,D);if((B=this.AY)&&(
B._cycle!=D))B._Mark(B._cycle=D);if((B=this.AN)&&((B=B[0])._cycle!=D))B._Mark(B.
_cycle=D);if((B=this.CQ)._cycle!=D)B._Mark(B._cycle=D);},_className:"Demonstrator::ListItem"
};C.Fo={ARo:null,AgZ:null,AgY:null,Blz:function(E){if(A.aa0(this.ARo,E))return;this.
ARo=E;},A8Y:function(E){if(A.aa0(this.AgZ,E))return;this.AgZ=E;},A8X:function(E){
if(A.aa0(this.AgY,E))return;this.AgY=E;},_Init:function(aArg){A.Core.O._Init.call(
this,aArg);this.__proto__=C.Fo;this.H(Ca);},_Mark:function(D){var B;A.Core.O._Mark.
call(this,D);if((B=this.ARo)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.
AgZ)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.AgY)&&((B=B[0])._cycle
!=D))B._Mark(B._cycle=D);},_className:"Demonstrator::ListHeader"};C.AMS={Dk:null
,AaF:null,Wx:null,Ww:null,Wv:null,M_:null,M9:null,KI:null,LA:false,Kx:false,BzZ:
false,Ai:function(Ae){var B;A.acn.Ag_.Ai.call(this,Ae);var G6=((Ae&0x10)===0x10);
var Fh=((Ae&0x20)===0x20);var Bcp=(this.Wv.Zl||this.Ww.Zl)||this.Wx.Zl;if(Bcp)this.
AaF.L(A.jb.Text);else this.AaF.L(A.jb.Bc);this.LA=G6;this.Kx=Fh;this.BzZ=Bcp;},AzT:
function(G){this.Am();if((!this.Wv.Zl&&!this.Ww.Zl)&&!this.Wx.Zl){var UT=this.AJr(
this.ADS(),this.Aq1());var AcS=this.ADN();this.KI.Jn(UT);if(AcS>UT)this.Lk(UT);A.
pe(this.Dk,this);}},A2o:function(G){this.Am();},BjU:function(G){var B;var FW=this.
M_.GT;var Cy=(A.acg.Text.isPrototypeOf(B=this.M_.Cf)?B:null);if(!Cy)return;Cy.R(
A.abl(FW+1900,4,10));Cy.S(A.aaL(A.fl.Ah));Cy.L(A.jb.Text);Cy.A3(0x12);Cy.H(A.abK(
Cy.M,[(B=this.M_.M)[2]-B[0],this.M_.GW]));},BjT:function(G){var B;var FW=this.M9.
GT;var Cy=(A.acg.Text.isPrototypeOf(B=this.M9.Cf)?B:null);if(!Cy)return;Cy.R(A.abl(
FW+1,2,10)+UH);Cy.S(A.aaL(A.fl.Ah));Cy.L(A.jb.Text);Cy.A3(0x12);Cy.H(A.abK(Cy.M,[(
B=this.M9.M)[2]-B[0],this.M9.GW]));},BjR:function(G){var B;var FW=this.KI.GT;var
Cy=(A.acg.Text.isPrototypeOf(B=this.KI.Cf)?B:null);if(!Cy)return;Cy.R(A.abl(FW+1
,2,10)+UH);Cy.S(A.aaL(A.fl.Ah));Cy.L(A.jb.Text);Cy.A3(0x12);Cy.H(A.abK(Cy.M,[(B=
this.KI.M)[2]-B[0],this.KI.GW]));},Aq1:function(){return 1900+((((-this.M_.Bq/this.
M_.GW)|0)+2)%200);},Aki:function(E){if(E<1900)E=1900;if(E>2100)E=2100;this.M_.Gh(((
E-1900)-2)*-this.M_.GW);var UT=this.AJr(this.ADS(),E);this.KI.Jn(UT);if(this.ADN(
)>UT)this.Lk(UT);},ADS:function(){return 1+((((-this.M9.Bq/this.M9.GW)|0)+2)%12);
},Ub:function(E){if(E<1)E=1;if(E>12)E=12;this.M9.Gh(((E-1)-2)*-this.M9.GW);var UT=
this.AJr(E,this.Aq1());this.KI.Jn(UT);if(this.ADN()>UT)this.Lk(UT);},ADN:function(
){return 1+((((-this.KI.Bq/this.KI.GW)|0)+2)%this.KI.AV);},Lk:function(E){var UT=
this.AJr(this.ADS(),this.Aq1());if(E<1)E=1;if(E>UT)E=UT;this.KI.Gh(((E-2)-1)*-this.
KI.GW);},AJr:function(Afl,AcJ){if(Afl===2){if(!(AcJ%4)&&(!!(AcJ%100)||!(AcJ%400)
))return 29;else return 28;}else if((((Afl===4)||(Afl===6))||(Afl===9))||(Afl===
11))return 30;else return 31;},_Init:function(aArg){A.acn.Ag_._Init.call(this,aArg
);A.acg.CA._Init.call(this.AaF={I:this},0);A.Core.H2._Init.call(this.Wx={I:this}
,0);A.Core.H2._Init.call(this.Ww={I:this},0);A.Core.H2._Init.call(this.Wv={I:this
},0);A.Core.CJ._Init.call(this.M_={I:this},0);A.Core.CJ._Init.call(this.M9={I:this
},0);A.Core.CJ._Init.call(this.KI={I:this},0);this.__proto__=C.AMS;this.H(ZM);this.
AaF.H(Afb);this.AaF.NV(3);this.AaF.L(0xFFE1E1E1);this.AaF.Y(true);this.Wx.H(ZN);
this.Wx.ASB(WS);this.Wx.ASc(0.2);this.Ww.H(ZO);this.Ww.ASB(WS);this.Ww.ASc(0.2);
this.Wv.H(ZP);this.Wv.ASB(WS);this.Wv.ASc(0.2);this.M_.H(ZN);this.M_.AR$(true);this.
M_.Gh(60);this.M_.AeD(30);this.M_.Jn(200);this.M9.H(ZO);this.M9.AR$(true);this.M9.
Gh(60);this.M9.AeD(30);this.M9.Jn(12);this.KI.H(ZP);this.KI.AR$(true);this.KI.Gh(
60);this.KI.AeD(30);this.KI.Jn(31);this.J(this.AaF,0);this.J(this.Wx,0);this.J(this.
Ww,0);this.J(this.Wv,0);this.J(this.M_,0);this.J(this.M9,0);this.J(this.KI,0);this.
Wx.Y2=[this,this.AzT];this.Wx.Ss=[this,this.A2o];this.Ww.Y2=[this,this.AzT];this.
Ww.Ss=[this,this.A2o];this.Wv.Y2=[this,this.AzT];this.Wv.Ss=[this,this.A2o];this.
M_.Hc=[this,this.BjU];this.M_.Awm(this.Wx);this.M9.Hc=[this,this.BjT];this.M9.Awm(
this.Ww);this.KI.Hc=[this,this.BjR];this.KI.Awm(this.Wv);},_Done:function(){this.
__proto__=A.acn.Ag_;this.AaF._Done();this.Wx._Done();this.Ww._Done();this.Wv._Done(
);this.M_._Done();this.M9._Done();this.KI._Done();A.acn.Ag_._Done.call(this);},_ReInit:
function(){A.acn.Ag_._ReInit.call(this);this.AaF._ReInit();this.Wx._ReInit();this.
Ww._ReInit();this.Wv._ReInit();this.M_._ReInit();this.M9._ReInit();this.KI._ReInit(
);},_Mark:function(D){var B;A.acn.Ag_._Mark.call(this,D);if((B=this.Dk)&&((B=B[0
])._cycle!=D))B._Mark(B._cycle=D);if((B=this.AaF)._cycle!=D)B._Mark(B._cycle=D);
if((B=this.Wx)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ww)._cycle!=D)B._Mark(B.
_cycle=D);if((B=this.Wv)._cycle!=D)B._Mark(B._cycle=D);if((B=this.M_)._cycle!=D)
B._Mark(B._cycle=D);if((B=this.M9)._cycle!=D)B._Mark(B._cycle=D);if((B=this.KI).
_cycle!=D)B._Mark(B._cycle=D);},_className:"Demonstrator::DatePicker"};C.AGx={_class:
function(){return A.aci.Al;},0:{FileName:"./res_index/DemonstratorWhiteTile.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[40,40],FrameDelay:0,_this:
null}};C.AUP={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/DemonstratorWhiteTileSmall.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[40,40],FrameDelay:0,_this:
null}};C.Ahh={_Init:function(aArg){A.Core.O._Init.call(this,aArg);this.__proto__=
C.Ahh;this.H(EW);},_className:"Demonstrator::SelectionAreaContent"};C.ALM={Z:null
,Va:null,Tq:null,BzA:function(G){var B;this.Tq.H(A.abI(this.Tq.M,((B=this.M)[3]-
B[1])-((B=this.Va.M)[3]-B[1])));},_Init:function(aArg){C.Ahh._Init.call(this,aArg
);A.Core.Z._Init.call(this.Z={I:this},0);C.ALd._Init.call(this.Va={I:this},0);C.
AUx._Init.call(this.Tq={I:this},0);this.__proto__=C.ALM;this.Z.AX(0x3F);this.Z.H(
EW);this.Z.Kd(1);this.Va.H(Afc);this.Va.Aj(true);this.Va.AEI(true);this.Tq.AX(0x3
);this.Tq.H(JQ);this.Tq.Aj(true);this.Tq.NS(C.ALF);this.Tq.Blu(C.ALT);this.J(this.
Z,0);this.J(this.Va,0);this.J(this.Tq,0);this.A8(this.Tq);this.Z.Ej=[this,this.BzA
];this.Tq.Y6(A._GetAutoObject(A.acp.ApO));},_Done:function(){this.__proto__=C.Ahh;
this.Z._Done();this.Va._Done();this.Tq._Done();C.Ahh._Done.call(this);},_ReInit:
function(){C.Ahh._ReInit.call(this);this.Z._ReInit();this.Va._ReInit();this.Tq._ReInit(
);},_Mark:function(D){var B;C.Ahh._Mark.call(this,D);if((B=this.Z)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Va)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Tq)._cycle!=
D)B._Mark(B._cycle=D);},_className:"Demonstrator::AnimalSelectionActions"};C.Va={
_Init:function(aArg){C.AtY._Init.call(this,aArg);this.__proto__=C.Va;this.U(A.aaR(
A.acf.A4X));},_ReInit:function(){C.AtY._ReInit.call(this);this.U(A.aaR(A.acf.A4X
));},_className:"Demonstrator::ActionsHeader"};C.ALd={Background:null,Aat:null,Ae0:
null,AeS:null,AeZ:null,AjQ:null,AjR:null,AjS:null,AjT:null,AjY:false,AgZ:function(
G){var B;this.H(A.abI(this.M,(B=this.Aat.M)[3]-B[1]));},AgY:function(G){this.H(A.
abI(this.M,240));},AEI:function(E){if(this.AjY===E)return;this.AjY=E;this.Aat.AEI(
E);if(E)this.AgZ(this);else this.AgY(this);},_Init:function(aArg){A.Core.O._Init.
call(this,aArg);A.acg.AJ._Init.call(this.Background={I:this},0);C.Va._Init.call(
this.Aat={I:this},0);C.Ae0._Init.call(this.Ae0={I:this},0);C.AeS._Init.call(this.
AeS={I:this},0);C.AeZ._Init.call(this.AeZ={I:this},0);A.acg.DR._Init.call(this.AjQ={
I:this},0);A.acg.DR._Init.call(this.AjR={I:this},0);A.acg.DR._Init.call(this.AjS={
I:this},0);A.acg.DR._Init.call(this.AjT={I:this},0);this.__proto__=C.ALd;this.H(
Afc);this.Background.AX(0x3F);this.Background.H(Afc);this.Aat.AX(0x1D);this.Aat.
H(Ca);this.Ae0.H(Acq);this.AeS.H(Lq);this.AeZ.H(Ahw);this.AjQ.DM(ZL);this.AjQ.DY(
MC);this.AjQ.L(A.jb.Bc);this.AjR.DM(AnO);this.AjR.DY(N7);this.AjR.L(A.jb.Bc);this.
AjS.DM(WT);this.AjS.DY(AnP);this.AjS.L(A.jb.Bc);this.AjT.DM(Ahx);this.AjT.DY(Ahy
);this.AjT.L(A.jb.Bc);this.J(this.Background,0);this.J(this.Aat,0);this.J(this.Ae0
,0);this.J(this.AeS,0);this.J(this.AeZ,0);this.J(this.AjQ,0);this.J(this.AjR,0);
this.J(this.AjS,0);this.J(this.AjT,0);this.Aat.A8Y([this,this.AgZ]);this.Aat.A8X([
this,this.AgY]);},_Done:function(){this.__proto__=A.Core.O;this.Background._Done(
);this.Aat._Done();this.Ae0._Done();this.AeS._Done();this.AeZ._Done();this.AjQ._Done(
);this.AjR._Done();this.AjS._Done();this.AjT._Done();A.Core.O._Done.call(this);}
,_ReInit:function(){A.Core.O._ReInit.call(this);this.Background._ReInit();this.Aat.
_ReInit();this.Ae0._ReInit();this.AeS._ReInit();this.AeZ._ReInit();this.AjQ._ReInit(
);this.AjR._ReInit();this.AjS._ReInit();this.AjT._ReInit();},_Mark:function(D){var
B;A.Core.O._Mark.call(this,D);if((B=this.Background)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Aat)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ae0)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.AeS)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AeZ)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.AjQ)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
AjR)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AjS)._cycle!=D)B._Mark(B._cycle=D);
if((B=this.AjT)._cycle!=D)B._Mark(B._cycle=D);},_className:"Demonstrator::ActionsMenu"
};C.Ma={Abd:null,AgI:null,Bj:null,DR:null,Aio:function(G){},AZr:function(s){this.
Aio(s);},_Init:function(aArg){A.Core.O._Init.call(this,aArg);A.acg.An._Init.call(
this.Abd={I:this},0);A.acg.An._Init.call(this.AgI={I:this},0);A.Core.Bj._Init.call(
this.Bj={I:this},0);A.acg.DR._Init.call(this.DR={I:this},0);this.__proto__=C.Ma;
this.H(Ca);this.Abd.H(Acr);this.Abd.L(A.jb.Text);this.AgI.H(UI);this.AgI.L(A.jb.
Text);this.AgI.Cv(0);this.Bj.Kg(Kq);this.Bj.Kf(N6);this.Bj.DM(PY);this.Bj.DY(MC);
this.DR.DM(PY);this.DR.DY(N6);this.DR.L(A.jb.Bc);this.J(this.Abd,0);this.J(this.
AgI,0);this.J(this.Bj,0);this.J(this.DR,0);this.Abd.Ay(A.aaL(A.aci.TB));this.AgI.
Ay(A.aaL(A.aci.ASW));this.Bj.BL=[this,this.AZr];},_Done:function(){this.__proto__=
A.Core.O;this.Abd._Done();this.AgI._Done();this.Bj._Done();this.DR._Done();A.Core.
O._Done.call(this);},_ReInit:function(){A.Core.O._ReInit.call(this);this.Abd._ReInit(
);this.AgI._ReInit();this.Bj._ReInit();this.DR._ReInit();},_Mark:function(D){var
B;A.Core.O._Mark.call(this,D);if((B=this.Abd)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.AgI)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Bj)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.DR)._cycle!=D)B._Mark(B._cycle=D);},_className:"Demonstrator::ActionsItem"
};C.AeS={Ae4:null,Aio:function(G){var AfZ=A.ab0(this.Ae4.String,0,10);var BzL=A.
_GetAutoObject(A.acp.K7).AAv(AfZ);if(BzL){AfZ=AfZ+1;this.Ae4.R(AfZ.toFixed());}}
,_Init:function(aArg){C.Ma._Init.call(this,aArg);C.AqT._Init.call(this.Ae4={I:this
},0);this.__proto__=C.AeS;this.Ae4.H(AnQ);this.Ae4.R(AnR);this.Ae4.L(A.jb.Text);
this.J(this.Ae4,-1);this.Abd.Ay(A.aaL(A.ach.AmD));},_Done:function(){this.__proto__=
C.Ma;this.Ae4._Done();C.Ma._Done.call(this);},_ReInit:function(){C.Ma._ReInit.call(
this);this.Ae4._ReInit();},_Mark:function(D){var B;C.Ma._Mark.call(this,D);if((B=
this.Ae4)._cycle!=D)B._Mark(B._cycle=D);},_className:"Demonstrator::ScanAction"};
C.Ae0={Uv:null,OL:null,A2_:0,Init:function(aArg){var B;A.zX([this,this.ByT],[B=A.
_GetAutoObject(A.acp.K7),B.ARQ,B.ASu],0);A.zX([this,this.Az1],[B=A._GetAutoObject(
A.Device.Device),B.AqZ,B.AsI],0);A.pe([this,this.Az1],this);},Ai:function(Ae){C.
Ma.Ai.call(this,Ae);this.OL.Y(!A._GetAutoObject(A.acp.K7).AwH);},Aio:function(G){
var B;A._GetAutoObject(A.acp.K7).Bdo(this);},Az1:function(G){if(A._GetAutoObject(
A.Device.Device).TemperatureUnit!==this.A2_){switch(A._GetAutoObject(A.Device.Device
).TemperatureUnit){case 0:this.OL.R(A.abk(A._GetAutoObject(A.acp.K7).Ar5/100,0,1
));break;case 1:{var AtN=A._GetAutoObject(A.Device.Converter).AT8(A._GetAutoObject(
A.acp.K7).Ar5/100,0,A._GetAutoObject(A.Device.Device).TemperatureUnit);this.OL.R(
A.abk(AtN,0,1));}break;default:A.ab5("%s%e",AnS,A._GetAutoObject(A.Device.Device
).TemperatureUnit);}this.A2_=A._GetAutoObject(A.Device.Device).TemperatureUnit;}
},ByC:function(G){var B;var AtM=A.abX(this.OL.String,0);AtM=A._GetAutoObject(A.Device.
Converter).AT8(AtM,A._GetAutoObject(A.Device.Device).TemperatureUnit,0);AtM*=100;
A._GetAutoObject(A.acp.K7).A9f(Math.round(AtM)|0);},ByT:function(G){this.Am();},
_Init:function(aArg){C.Ma._Init.call(this,aArg);A.acq.Uv._Init.call(this.Uv={I:this
},0);C.OL._Init.call(this.OL={I:this},0);this.__proto__=C.Ae0;var B;this.Uv.H(AnT
);this.Uv.A8S(A.aaR(A.acf.A31));this.OL.H(Afd);this.OL.R(AnU);this.OL.L(A.jb.Text
);this.OL.Bkq(true);this.A2_=A._GetAutoObject(A.Device.Device).TemperatureUnit;this.
J(this.Uv,0);this.J(this.OL,0);this.Abd.Ay(A.aaL(A.ach.Abc));this.Uv.At([B=A._GetAutoObject(
A.acp.K7),B.ARQ,B.ASu]);this.Uv.OnSetAppearance(A._GetAutoObject(A.acx.Aui));this.
OL.Dk=[this,this.ByC];this.Init(aArg);},_Done:function(){this.__proto__=C.Ma;this.
Uv._Done();this.OL._Done();C.Ma._Done.call(this);},_ReInit:function(){C.Ma._ReInit.
call(this);this.Uv._ReInit();this.OL._ReInit();this.Uv.A8S(A.aaR(A.acf.A31));},_Mark:
function(D){var B;C.Ma._Mark.call(this,D);if((B=this.Uv)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.OL)._cycle!=D)B._Mark(B._cycle=D);},_className:"Demonstrator::TemperatureAction"
};C.AqC={Q:null,CA:null,Bj:null,Agi:null,AmI:null,AmH:null,AqH:null,Text:null,Hf:
null,An:null,CS:null,AqG:null,AqI:null,AoQ:false,Bg:function(aSize){this.Hf.H(A.
abK(this.Hf.M,aSize));this.CA.AwR(1);this.CA.Ji(0,40);this.CA.E_(0,aSize[0]-20,20
,12.5,12.5,-90,90,10);this.CA.E_(0,20,20,12.5,12.5,90,270,10);this.CA.Vr(0);},Ai:
function(Ae){var B;var F;A.Core.O.Ai.call(this,Ae);var Ir=((Ae&0x40)===0x40);if(
Ir){if(!!this.Q)this.Text.R((F=this.Q,F[1].call(F[0])));this.Agi.Ar(true);this.An.
Y(false);}else{if(!!this.Q)this.Text.R((F=this.Q,F[1].call(F[0])));this.Agi.Ar(false
);this.CS.Y(false);this.An.Y(true);}this.AoQ=Ir;},Aio:function(G){var B;if(!((this.
T&0x80)===0x80))this.If().AL6(this);},A7d:function(G){},A$B:function(s){this.A7d(
s);},Biq:function(G){var B;var F;if(!this.Q||!(F=this.Q,F[1].call(F[0])).length)
this.CS.H(A.abM(this.CS.M,A.aaI(this.Text.M)[0]));else{this.CS.H(A.abM(this.CS.M
,this.Text.AN7(0)[2]+2));this.CS.H(A.abO(this.CS.M,this.Text.AN7(0)[1]));this.CS.
H(A.abI(this.CS.M,(B=this.Text.AN7(0))[3]-B[1]));}this.An.H(A.abM(this.An.M,this.
Text.M[0]-((B=this.An.M)[2]-B[0])));},A7b:function(G){},A$A:function(s){this.A7b(
s);},At:function(E){if(A.aaZ(this.Q,E))return;if(!!this.Q)A.z$([this,this.L6],this.
Q,0);this.Q=E;if(!!E)A.zX([this,this.L6],E,0);if(!!E)A.pe([this,this.L6],this);}
,L6:function(G){this.Am();},BjW:function(G){var B;if(((this.T&0x80)===0x80))this.
If().ABY(this);},Bdw:function(G){},_Init:function(aArg){A.Core.O._Init.call(this
,aArg);A.Graphics.Hp._Init.call(this.CA={I:this},0);A.Core.Bj._Init.call(this.Bj={
I:this},0);A.acl.Tw._Init.call(this.Agi={I:this},0);A.Core.BK._Init.call(this.AmI={
I:this},0);A.Core.BK._Init.call(this.AmH={I:this},0);A.Core.BK._Init.call(this.AqH={
I:this},0);A.acg.Text._Init.call(this.Text={I:this},0);A.acg.Hf._Init.call(this.
Hf={I:this},0);A.acg.An._Init.call(this.An={I:this},0);A.acg.AJ._Init.call(this.
CS={I:this},0);A.Core.BK._Init.call(this.AqG={I:this},0);A.Core.BK._Init.call(this.
AqI={I:this},0);this.__proto__=C.AqC;var B;this.H(Afe);this.Bj.AX(0x3F);this.Bj.
Kg(Kq);this.Bj.Kf(Ash);this.Bj.DM(OV);this.Bj.DY(Q_);this.Agi.Fe(530);this.Agi.T$(
530);this.AmI.Filter=143;this.AmH.Filter=45;this.AqH.Filter=1;this.Text.AX(0x3F);
this.Text.H(Afe);this.Text.I0(true);this.Text.A3(0x12);this.Text.L(0xFFB3B3B3);this.
Hf.H(Afe);this.Hf.L(0xFFB3B3B3);this.Hf.NV(1);this.An.H(SX);this.CS.H(Axl);this.
CS.L(0xFFB3B3B3);this.CS.Y(false);this.AqG.Filter=138;this.AqI.Filter=137;this.J(
this.Bj,0);this.J(this.Text,0);this.J(this.Hf,0);this.J(this.An,0);this.J(this.CS
,0);this.Bj.Li=[this,this.Aio];this.Agi.Q=[B=this.CS,B.Fd,B.Y];this.AmI.BL=[this
,this.A$B];this.AmI.DS=[this,this.A$B];this.AmH.BL=[this,this.A$A];this.AmH.DS=[
this,this.A$A];this.AqH.BL=[this,this.BjW];this.Text.QT([this,this.Biq]);this.Text.
S(A.aaL(A.fl.Ak));this.Hf.Y8(this.CA);this.An.Ay(null);this.AqG.BL=[this,this.Bdw
];this.AqI.BL=[this,this.Bdw];},_Done:function(){this.__proto__=A.Core.O;this.CA.
_Done();this.Bj._Done();this.Agi._Done();this.AmI._Done();this.AmH._Done();this.
AqH._Done();this.Text._Done();this.Hf._Done();this.An._Done();this.CS._Done();this.
AqG._Done();this.AqI._Done();A.Core.O._Done.call(this);},_ReInit:function(){A.Core.
O._ReInit.call(this);this.CA._ReInit();this.Bj._ReInit();this.Agi._ReInit();this.
AmI._ReInit();this.AmH._ReInit();this.AqH._ReInit();this.Text._ReInit();this.Hf.
_ReInit();this.An._ReInit();this.CS._ReInit();this.AqG._ReInit();this.AqI._ReInit(
);this.Text.S(A.aaL(A.fl.Ak));},_Mark:function(D){var B;A.Core.O._Mark.call(this
,D);if((B=this.Q)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.CA)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.Bj)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
Agi)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AmI)._cycle!=D)B._Mark(B._cycle=D);
if((B=this.AmH)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AqH)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Text)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Hf)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.An)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
CS)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AqG)._cycle!=D)B._Mark(B._cycle=D);
if((B=this.AqI)._cycle!=D)B._Mark(B._cycle=D);},_className:"Demonstrator::InputView"
};C.Ad2={Background:null,X9:null,_Init:function(aArg){A.Core.O._Init.call(this,aArg
);A.acg.AJ._Init.call(this.Background={I:this},0);C.X9._Init.call(this.X9={I:this
},0);this.__proto__=C.Ad2;var B;this.H(SY);this.Background.H(SY);this.X9.AX(0x1D
);this.X9.H(Asi);this.J(this.Background,0);this.J(this.X9,0);this.X9.At([B=A._GetAutoObject(
A.acp.Agk),B.A7U,B.AEV]);},_Done:function(){this.__proto__=A.Core.O;this.Background.
_Done();this.X9._Done();A.Core.O._Done.call(this);},_ReInit:function(){A.Core.O.
_ReInit.call(this);this.Background._ReInit();this.X9._ReInit();},_Mark:function(
D){var B;A.Core.O._Mark.call(this,D);if((B=this.Background)._cycle!=D)B._Mark(B.
_cycle=D);if((B=this.X9)._cycle!=D)B._Mark(B._cycle=D);},_className:"Demonstrator::FilterRow"
};C.OL={Init:function(aArg){var B;A.zX([this,this.Az1],[B=A._GetAutoObject(A.Device.
Device),B.AqZ,B.AsI],0);A.pe([this,this.Az1],this);},Ai:function(Ae){var B;C.AqT.
Ai.call(this,Ae);var Ir=((this.T&0x40)===0x40);if(!Ir&&(this.String.length>0))this.
Text.R(((this.String+Axm)+A._GetAutoObject(A.acj.Temperature).Alh())+String.fromCharCode(
0x0A));else this.Text.R(this.String+String.fromCharCode(0x0A));if(this.Ef>this.String.
length)this.Ef=this.String.length;},Az1:function(G){this.Am();},_Init:function(aArg
){C.AqT._Init.call(this,aArg);this.__proto__=C.OL;this.Init(aArg);},_className:"Demonstrator::TemperatureInputView"
};C.AqT={B4:null,Dk:null,IL:null,Cm:null,Amd:null,R1:null,KE:null,Bj:null,Text:null
,CS:null,Ap1:null,ArB:null,CA:null,Hf:null,AqV:null,Aqq:null,Aqb:null,String:A.jV
,Ef:0,AQ:0xFFB3B3B3,AMU:false,MK:false,Bg:function(aSize){this.Hf.H(A.abK(this.Hf.
M,aSize));this.CA.AwR(1);this.CA.Ji(0,40);this.CA.E_(0,aSize[0]-20,20,12.5,12.5,-
90,90,10);this.CA.E_(0,20,20,12.5,12.5,90,270,10);this.CA.Vr(0);},Ai:function(Ae
){var B;A.acn.I3.Ai.call(this,Ae);if(((Ae&0x40)===0x40))this.IL.Ar(true);else{this.
IL.Ar(false);this.CS.Y(false);}},A3k:function(G){var B;var A_=this.Text.M;var Np=
0;var Nq=0;if(this.CS.Ek[0]<A_[0])Np=A_[0]-this.CS.Ek[0];if(this.CS.Ek[0]>A_[2])
Np=A_[2]-this.CS.Ek[0];if(this.CS.Ek[1]<A_[1])Nq=A_[1]-this.CS.Ek[1];if(this.CS.
Ev[1]>A_[3])Nq=A_[3]-this.CS.Ev[1];if(!!Np||!!Nq)this.Text.Gh(A.abf(this.Text.Bq
,[Np,Nq]));Np=this.Text.Bq[0];Nq=this.Text.Bq[1];var C0=[(B=this.Text.Db())[2]-B[
0],B[3]-B[1]];if(C0[0]<=((B=this.Text.M)[2]-B[0]))Np=0;if(C0[1]<=((B=this.Text.M
)[3]-B[1]))Nq=0;this.Text.Gh([Np,Nq]);},AlT:function(G){if(!this.B4)return;var A2N=
this.Text.AF3(this.Ef);var pos=this.Text.AeP(A2N);this.CS.DY(A.abe(pos,[0,this.B4.
Ascent]));this.CS.DM(A.abf(pos,[0,this.B4.Descent]));if(this.IL.Bv){this.IL.Ar(false
);this.IL.Ar(true);}if(this.MK){A.pe([this,this.A3k],this);this.MK=false;}},AzX:
function(G){if(!this.A5W(0x80))this.If().AL6(this);var Ey=this.Text.AS0(this.Bj.
HV);var UY=this.Text.Anq(Ey);if(UY!==this.Ef){this.Ef=UY;A.pe([this,this.AlT],this
);this.MK=true;}},AzR:function(G){if(!this.B4)return;var Ey=this.Text.AF3(this.Ef
);if(this.Cm.CL===6){Ey=[Ey[0]-1,Ey[1]];if(this.Text.Anq(Ey)===this.Ef){Ey=[Ey[0
],Ey[1]-1];Ey=[this.Text.ACj(Ey[1]).length,Ey[1]];}}if(this.Cm.CL===7){Ey=[Ey[0]+
1,Ey[1]];if(this.Text.Anq(Ey)===this.Ef){Ey=[Ey[0],Ey[1]+1];Ey=[0,Ey[1]];}}var UY=
this.Text.Anq(Ey);if(UY!==this.Ef){this.Ef=UY;A.pe([this,this.AlT],this);this.MK=
true;}},Bdf:function(G){if(!this.Ef)return;this.R(A.ab1(this.String,this.Ef-1,1)
);this.Ef=this.Ef-1;this.MK=true;A.pe(this.Dk,this);},AzS:function(G){if(this.Ef>=
this.String.length)return;this.R(A.ab1(this.String,this.Ef,1));this.MK=true;A.pe(
this.Dk,this);},Bdk:function(G){if(this.String.length>=15)return;var Bw1=this.KE.
DJ;var AtK=String.fromCharCode(Bw1);this.R(A.abU(this.String,AtK,this.Ef));this.
Ef=this.Ef+AtK.length;this.MK=true;A.pe(this.Dk,this);},R:function(E){if(this.String===
E)return;this.String=E;if(this.Ef>(E.length+1))this.Ef=E.length;this.Text.R(E+String.
fromCharCode(0x0A));this.MK=true;this.Text.Gh(Kq);},L:function(E){if(this.AQ===E
)return;this.AQ=E;this.Text.L(E);this.CS.L(E);this.Hf.L(E);},S:function(E){if(this.
B4===E)return;this.B4=E;this.Text.S(E);this.MK=true;this.Text.Gh(Kq);},Bdx:function(
G){if(this.AMU===false)return;if(this.String.indexOf(String.fromCharCode(0x2E),0
)>=0)return;if(this.String.length>=15)return;this.R(A.abU(this.String,UH,this.Ef
));this.Ef=this.Ef+1;this.MK=true;A.pe(this.Dk,this);},Bkq:function(E){if(this.AMU===
E)return;this.AMU=E;if(E===false){var Bea=this.String.indexOf(String.fromCharCode(
0x2E),0);if(Bea>=0)this.R(A.abV(this.String,Bea));}this.MK=true;this.Text.Gh(Kq);
},ByK:function(G){if(this.A5W(0x80))this.If().ABY(this);this.Am();},Byx:function(
G){var UY=this.String.length;if(UY!==this.Ef){this.Ef=UY;A.pe([this,this.AlT],this
);this.MK=true;}},ByB:function(G){if(!!this.Ef){this.Ef=0;A.pe([this,this.AlT],this
);this.MK=true;}},_Init:function(aArg){A.acn.I3._Init.call(this,aArg);A.acl.Tw._Init.
call(this.IL={I:this},0);A.Core.BK._Init.call(this.Cm={I:this},0);A.Core.BK._Init.
call(this.Amd={I:this},0);A.Core.BK._Init.call(this.R1={I:this},0);A.Core.BK._Init.
call(this.KE={I:this},0);A.Core.Bj._Init.call(this.Bj={I:this},0);A.acg.Text._Init.
call(this.Text={I:this},0);A.acg.DR._Init.call(this.CS={I:this},0);A.Core.BK._Init.
call(this.Ap1={I:this},0);A.Core.BK._Init.call(this.ArB={I:this},0);A.Graphics.Hp.
_Init.call(this.CA={I:this},0);A.acg.Hf._Init.call(this.Hf={I:this},0);A.Core.BK.
_Init.call(this.AqV={I:this},0);A.Core.BK._Init.call(this.Aqq={I:this},0);A.Core.
BK._Init.call(this.Aqb={I:this},0);this.__proto__=C.AqT;var B;this.H(Afe);this.IL.
B0=false;this.IL.Cs=true;this.IL.Fe(500);this.IL.T$(500);this.Cm.Filter=147;this.
Amd.Filter=45;this.R1.Filter=44;this.KE.Filter=143;this.Bj.AX(0x3F);this.Bj.Kg(Q_
);this.Bj.Kf(OV);this.Bj.DM(Ash);this.Bj.DY(Kq);this.Bj.AEF(3);this.Text.AX(0x3F
);this.Text.H(Afe);this.Text.KL(false);this.Text.A3(0x12);this.Text.R(A.jV);this.
Text.L(0xFFB3B3B3);this.CS.DM(Axn);this.CS.DY(Axo);this.CS.A9s(2);this.CS.A9r(2);
this.CS.L(0xFFB3B3B3);this.CS.Y(false);this.Ap1.Filter=138;this.ArB.Filter=137;this.
Hf.H(Afe);this.Hf.L(0xFFB3B3B3);this.Hf.NV(1);this.AqV.Filter=1;this.Aqq.Filter=
41;this.Aqb.Filter=42;this.J(this.Bj,0);this.J(this.Text,0);this.J(this.CS,0);this.
J(this.Hf,0);this.IL.Q=[B=this.CS,B.Fd,B.Y];this.Cm.BL=[this,this.AzR];this.Cm.DS=[
this,this.AzR];this.Amd.BL=[this,this.Bdf];this.Amd.DS=[this,this.Bdf];this.R1.BL=[
this,this.AzS];this.R1.DS=[this,this.AzS];this.KE.BL=[this,this.Bdk];this.KE.DS=[
this,this.Bdk];this.Bj.BL=[this,this.AzX];this.Text.QT([this,this.AlT]);this.Text.
S(A.aaL(A.fl.Ak));this.B4=A.aaL(A.fl.Ak);this.Ap1.BL=[this,this.Bdx];this.ArB.BL=[
this,this.Bdx];this.Hf.Y8(this.CA);this.AqV.BL=[this,this.ByK];this.Aqq.BL=[this
,this.ByB];this.Aqb.BL=[this,this.Byx];},_Done:function(){this.__proto__=A.acn.I3;
this.IL._Done();this.Cm._Done();this.Amd._Done();this.R1._Done();this.KE._Done();
this.Bj._Done();this.Text._Done();this.CS._Done();this.Ap1._Done();this.ArB._Done(
);this.CA._Done();this.Hf._Done();this.AqV._Done();this.Aqq._Done();this.Aqb._Done(
);A.acn.I3._Done.call(this);},_ReInit:function(){A.acn.I3._ReInit.call(this);this.
IL._ReInit();this.Cm._ReInit();this.Amd._ReInit();this.R1._ReInit();this.KE._ReInit(
);this.Bj._ReInit();this.Text._ReInit();this.CS._ReInit();this.Ap1._ReInit();this.
ArB._ReInit();this.CA._ReInit();this.Hf._ReInit();this.AqV._ReInit();this.Aqq._ReInit(
);this.Aqb._ReInit();this.Text.S(A.aaL(A.fl.Ak));this.S(A.aaL(A.fl.Ak));},_Mark:
function(D){var B;A.acn.I3._Mark.call(this,D);if((B=this.B4)&&(B._cycle!=D))B._Mark(
B._cycle=D);if((B=this.Dk)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.
IL)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Cm)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Amd)._cycle!=D)B._Mark(B._cycle=D);if((B=this.R1)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.KE)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Bj)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Text)._cycle!=D)B._Mark(B._cycle=D);if((B=this.CS)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.Ap1)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
ArB)._cycle!=D)B._Mark(B._cycle=D);if((B=this.CA)._cycle!=D)B._Mark(B._cycle=D);
if((B=this.Hf)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AqV)._cycle!=D)B._Mark(B.
_cycle=D);if((B=this.Aqq)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Aqb)._cycle!=
D)B._Mark(B._cycle=D);},_className:"Demonstrator::NumberInput"};C.AeZ={LabelDataSync:
null,Aio:function(G){var B;A.pe([B=A._GetAutoObject(A.acr.Ab5),B.Bz6],this);},_Init:
function(aArg){C.Ma._Init.call(this,aArg);A.kR.CP._Init.call(this.LabelDataSync={
I:this},0);this.__proto__=C.AeZ;this.LabelDataSync.H(AnV);this.LabelDataSync.R(A.
aaR(A.acf.A4N));this.LabelDataSync.L(A.jb.Text);this.J(this.LabelDataSync,0);this.
Abd.Ay(A.aaL(C.ATZ));this.LabelDataSync.S(A.aaL(A.fl.Ah));this.LabelDataSync.A7(
A.aaL(A.fl.Ak));},_Done:function(){this.__proto__=C.Ma;this.LabelDataSync._Done(
);C.Ma._Done.call(this);},_ReInit:function(){C.Ma._ReInit.call(this);this.LabelDataSync.
_ReInit();this.LabelDataSync.R(A.aaR(A.acf.A4N));this.LabelDataSync.S(A.aaL(A.fl.
Ah));this.LabelDataSync.A7(A.aaL(A.fl.Ak));},_Mark:function(D){var B;C.Ma._Mark.
call(this,D);if((B=this.LabelDataSync)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Demonstrator::SyncAction"};C.ATZ={_class:function(){return A.aci.Al;},0:{FileName:
"./res_index/DemonstratorSyncIcon.png",Format:A._PIXEL_FORMAT_NATIVE,NoOfFrames:
1,FrameSize:[50,60],FrameDelay:0,_this:null}};C.AaP={TimespanDaysToString:null,ACl:
function(aIndex){if(this.ACf()>aIndex)return this.TimespanDaysToString.BP(aIndex
);A.ab5("%s",Axp);return A.jV;},ACf:function(){return 4;},C5:function(aIndex){var
AiO=0;switch(aIndex){case 0:AiO=0;break;case 1:AiO=1;break;case 2:AiO=2;break;case
3:AiO=3;break;default:throw new Error(Asj+aIndex.toFixed());}return AiO;},_Init:
function(aArg){A.acv.Amf._Init.call(this,aArg);A.Device.TimespanDaysToString._Init.
call(this.TimespanDaysToString={I:this},0);this.__proto__=C.AaP;},_Done:function(
){this.__proto__=A.acv.Amf;this.TimespanDaysToString._Done();A.acv.Amf._Done.call(
this);},_ReInit:function(){A.acv.Amf._ReInit.call(this);this.TimespanDaysToString.
_ReInit();},_Mark:function(D){var B;A.acv.Amf._Mark.call(this,D);if((B=this.TimespanDaysToString
)._cycle!=D)B._Mark(B._cycle=D);},_className:"Demonstrator::DatePickerUnitDD"};C.
BDR={GB:0,AUE:1,Ha:2,Year:3};C.ABV={_class:function(){return A.aci.Al;},0:{FileName:
"./res_index/DemonstratorEarTagIcon.png",Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:
2,FrameSize:[37,37],FrameDelay:0,_this:null}};C.AGe={_class:function(){return A.
aci.Al;},0:{FileName:"./res_index/DemonstratorTransponderEarTagIcon.png",Format:
A._PIXEL_FORMAT_ALPHA8,NoOfFrames:2,FrameSize:[37,37],FrameDelay:0,_this:null}};
C._Init=function(){C.AUx.__proto__=A.acn.Menu;C.ATw.__proto__=A.Core.O;C.ALF.__proto__=
C.Bb;C.Mb.__proto__=A.Core.O;C.X9.__proto__=C.AqC;C.AaQ.__proto__=A.Core.O;C.Au2.
__proto__=A.acn.Aha;C.ALT.__proto__=C.Fo;C.AtY.__proto__=C.Fo;C.Bb.__proto__=A.Core.
O;C.Fo.__proto__=A.Core.O;C.AMS.__proto__=A.acn.Ag_;C.Ahh.__proto__=A.Core.O;C.ALM.
__proto__=C.Ahh;C.Va.__proto__=C.AtY;C.ALd.__proto__=A.Core.O;C.Ma.__proto__=A.Core.
O;C.AeS.__proto__=C.Ma;C.Ae0.__proto__=C.Ma;C.AqC.__proto__=A.Core.O;C.Ad2.__proto__=
A.Core.O;C.OL.__proto__=C.AqT;C.AqT.__proto__=A.acn.I3;C.AeZ.__proto__=C.Ma;C.AaP.
__proto__=A.acv.Amf;};C._ReInit=function(){};C.Dz=function(D){var B;if((B=C.Background[
0]._this)&&(B._cycle!=D))B._Done(C.Background[0]._this=null);if((B=C.AMd[0]._this
)&&(B._cycle!=D))B._Done(C.AMd[0]._this=null);if((B=C.AMe[0]._this)&&(B._cycle!=
D))B._Done(C.AMe[0]._this=null);if((B=C.AMf[0]._this)&&(B._cycle!=D))B._Done(C.AMf[
0]._this=null);if((B=C.AMg[0]._this)&&(B._cycle!=D))B._Done(C.AMg[0]._this=null);
if((B=C.APl[0]._this)&&(B._cycle!=D))B._Done(C.APl[0]._this=null);if((B=C.Filter[
0]._this)&&(B._cycle!=D))B._Done(C.Filter[0]._this=null);if((B=C.AQT[0]._this)&&(
B._cycle!=D))B._Done(C.AQT[0]._this=null);if((B=C.Ai6[0]._this)&&(B._cycle!=D))B.
_Done(C.Ai6[0]._this=null);if((B=C.ALW[0]._this)&&(B._cycle!=D))B._Done(C.ALW[0].
_this=null);if((B=C.ArS[0]._this)&&(B._cycle!=D))B._Done(C.ArS[0]._this=null);if((
B=C.AT4[0]._this)&&(B._cycle!=D))B._Done(C.AT4[0]._this=null);if((B=C.AGx[0]._this
)&&(B._cycle!=D))B._Done(C.AGx[0]._this=null);if((B=C.AUP[0]._this)&&(B._cycle!=
D))B._Done(C.AUP[0]._this=null);if((B=C.ATZ[0]._this)&&(B._cycle!=D))B._Done(C.ATZ[
0]._this=null);if((B=C.ABV[0]._this)&&(B._cycle!=D))B._Done(C.ABV[0]._this=null);
if((B=C.AGe[0]._this)&&(B._cycle!=D))B._Done(C.AGe[0]._this=null);};return C;})(
);

/* VitalControl demonstration application, © Urban GmbH & Co.KG 2023 */