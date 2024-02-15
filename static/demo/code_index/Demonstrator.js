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
var B9=[0,0,370,60];var BC=[360,0,370,60];var EW=[0,0,370,710];var He="Unknown animalType";
var I7=[58,10,120,50];var IH=[0,0,60,60];var OM=[120,0,360,60];var PQ="\u2015";var
PR=[0,0,240,60];var CO=[0,0,40,60];var E4=[100,0,130,60];var Ln=[43,0,100,60];var
PT=[125,0,240,60];var Ko=[0,0];var NY=[100,0];var PU=[100,60];var Mw=[0,60];var SL=[
107,0];var Uu=[240,0];var Zs=[240,60];var Ww=[107,60];var II="%d.%m.%Y";var Uv="Unhandled date unit: ";
var Zt=[0,0,200,180];var Wx=[36,0,200,30];var Zu=[0,30,160,60];var Uw="Text";var
Zv=[0,70,40,110];var Zw=[44,70,156,110];var Ux=[160,70,200,110];var Wy=[7,2,27,25
];var Q4=[0,30,170,180];var Zx=[170,34,190,57];var ON=[0,0,40,40];var PV=[0,40];
var Wz=[40,40];var WA=[40,0];var WC=[0,0,370,100];var Zy=[20,0,290,60];var Zz=[0
,60,370,100];var WD="Cap";var WE=[20,0,370,60];var SM=[310,0,370,60];var ZA=[370
,0];var ZB=[370,60];var Acf="UpdateData is called for the base class ListItemBase. Please make "+
"sure this method is implemented by a derived class.";var Uy=".";var ZC=[0,0,170
,150];var Ae2=[0,59,170,90];var ZD=[110,0,170,150];var WF=[0,30];var WG=[50,0,100
,150];var ZE=[0,0,40,150];var Ae3=[0,0,370,240];var JN=[0,60,370,710];var Ae4=[0
,60,370,120];var Lo=[0,120,370,180];var Ahk=[0,180,370,240];var AnJ=[370,120];var
NZ=[0,120];var WH=[370,180];var AnK=[0,180];var Ahl=[370,240];var Ahm=[0,240];var
Acg=[0,0,50,60];var Uz=[50,0,100,60];var AnL=[100,10,370,50];var AnM="276000901234567";
var Aw3="Unhandled temperature unit";var Aw4=[110,0,260,60];var AkG=[235,10,370,
50];var Aw5="39.5";var Ae5=[0,0,270,40];var Asa=[270,0];var OO=[270,40];var SN=[
150,0,170,40];var Aw6=[205,10,207,30];var SO=[0,0,370,40];var Asb=[50,0,320,40];
var Aw7=" ";var Aw8=[135,23];var Aw9=[135,0];var AnN=[100,0,370,60];var Aw_="Error: Nullpointer Exception";
var Asc="Unknown Date Piecker Unit Index: ";
C.Background={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/DemonstratorBackground.png"
,Format:A._PIXEL_FORMAT_NATIVE,NoOfFrames:1,FrameSize:[1000,740],FrameDelay:0,_this:
null}};C.ALD={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/DemonstratorButtonLeft.png"
,Format:A._PIXEL_FORMAT_NATIVE,NoOfFrames:1,FrameSize:[40,40],FrameDelay:0,_this:
null}};C.ALE={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/DemonstratorButtonLeftPressed.png"
,Format:A._PIXEL_FORMAT_NATIVE,NoOfFrames:1,FrameSize:[40,40],FrameDelay:0,_this:
null}};C.ALF={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/DemonstratorButtonRight.png"
,Format:A._PIXEL_FORMAT_NATIVE,NoOfFrames:1,FrameSize:[40,40],FrameDelay:0,_this:
null}};C.ALG={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/DemonstratorButtonRightPressed.png"
,Format:A._PIXEL_FORMAT_NATIVE,NoOfFrames:1,FrameSize:[40,40],FrameDelay:0,_this:
null}};C.AOG={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/DemonstratorIconDatePicker.png"
,Format:A._PIXEL_FORMAT_NATIVE,NoOfFrames:1,FrameSize:[20,23],FrameDelay:0,_this:
null}};C.Filter={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/DemonstratorFilter.png"
,Format:A._PIXEL_FORMAT_NATIVE,NoOfFrames:1,FrameSize:[15,16],FrameDelay:0,_this:
null}};C.AQc={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/DemonstratorMenuIcon.png"
,Format:A._PIXEL_FORMAT_NATIVE,NoOfFrames:1,FrameSize:[20,16],FrameDelay:0,_this:
null}};C.AiW={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/DemonstratorArrowRight.png"
,Format:A._PIXEL_FORMAT_NATIVE,NoOfFrames:1,FrameSize:[17,16],FrameDelay:0,_this:
null}};C.ALk={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/DemonstratorArrowDown.png"
,Format:A._PIXEL_FORMAT_NATIVE,NoOfFrames:1,FrameSize:[17,16],FrameDelay:0,_this:
null}};C.ArL={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/DemonstratorScanIcon.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:2,FrameSize:[37,37],FrameDelay:0,_this:
null}};C.ATn={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/DemonstratorTemperatureIcon.png"
,Format:A._PIXEL_FORMAT_NATIVE,NoOfFrames:1,FrameSize:[17,37],FrameDelay:0,_this:
null}};C.ATS={AdD:null,AX:null,AQ:null,Background:null,H0:null,AD:null,IE:null,Df:
null,Lc:null,A5Y:null,A6q:0,Bg:function(aSize){A.acn.Menu.Bg.call(this,aSize);this.
IE.H(A.abP(this.IE.M,this.AD.OB));this.IE.H([].concat(this.IE.M.slice(0,3),aSize[
1]));},Ai:function(Ae){var B;A.acn.Menu.Ai.call(this,Ae);var Ip=((Ae&0x40)===0x40
);if(Ip&&(this.AD.Gd<0))this.AD.GS(0);},NN:function(E){if(this.Lc===E)return;this.
Lc=E;this.AD.NN(E);},BkF:function(E){var B;if(this.A5Y===E)return;if(!!this.AdD){
this.HH(this.AdD);this.AdD=null;}if(!!E){this.AdD=(C.Fo.isPrototypeOf(B=A._NewObject(
E,0))?B:null);this.AdD.A8d([this,this.AgM]);this.AdD.A8e([this,this.AgN]);this.AdD.
BkK(null);this.J(this.AdD,0);this.AD.A8k((B=this.AdD.M)[3]-B[1]);}else this.AD.A8k(
0);this.IE.H(A.abP(this.IE.M,this.AD.OB));A.pe([this,this.E9],this);this.A5Y=E;}
,G$:function(G){var B;var FU=this.AD.GN;var Aa=(C.Ba.isPrototypeOf(B=this.AD.Cd)?
B:null);if(!Aa)return;Aa.YV(this.AX);Aa.Cc(FU);Aa.YW(this.AQ);Aa.H(A.abK(Aa.M,[(
B=this.AD.M)[2]-B[0],this.AD.GP]));},YV:function(E){var B;if(this.AX===E)return;
if(!!this.AX){A.z9([this,this.Cc],this.AX,0);A.z$([this,this.AnC],[B=this.AX,B.Fx
,B.FB],0);}this.AX=E;if(!!E){A.zV([this,this.Cc],E,0);A.zX([this,this.AnC],[E,E.
Fx,E.FB],0);}A.pe([this,this.Cc],this);A.pe([this,this.AnC],this);},Cc:function(
G){if(!!this.AX){this.AD.Jm(this.AX.Ch());this.AD.Aa5(0,this.AD.AV-1);}else this.
AD.Jm(0);if(this.A6q!==this.AD.AV){this.AD.AAA(null,null);this.A6q=this.AD.AV;}A.
pe([this,this.E9],this);},AgN:function(G){var B;this.H(A.abI(this.M,(B=this.AD.ANq(
))[3]-B[1]));},AgM:function(G){this.H(A.abI(this.M,180));},A7A:function(G){var Jq=(
A.Core.BJ.isPrototypeOf(G)?G:null);var FU=this.AD.Gd;if(Jq.CI===4)FU=FU-1;else if(
Jq.CI===5)FU=FU+1;else if((Jq.DI>=0x30)&&(Jq.DI<=0x39))A._GetAutoObject(A.acp.Af$
).E$(Jq.DI);else if(Jq.CI===45)A._GetAutoObject(A.acp.Af$).Delete();else Jq.Ny=true;
if((FU<0)||(FU>=this.AD.AV))return;this.AD.GS(FU);this.Bv5(FU,true);},BvU:function(
G){var Aa=(C.Ba.isPrototypeOf(G)?G:null);this.AD.GS(Aa.Hr);},Bv5:function(GX,Act
){var B;if((GX<0)||(GX>=this.AD.AV))return;var Aw=this.AD.Ap$(GX,GX);var A_=this.
AD.M;A_=A.abP(A_,(B=this.AD.ANq())[3]-B[1]);A_=A.abI(A_,(((B=this.AD.M)[3]-B[1])-((
B=this.AD.ANq())[3]-B[1]))-((B=this.AD.Bgw())[3]-B[1]));var LD=A.lb(Aw,A_);if((!
Act&&!((LD[0]>=LD[2])||(LD[1]>=LD[3])))||(Act&&A.aaY(LD,Aw)))return;var Bo=0;if(
Aw[3]>A_[3])Bo=Aw[3]-A_[3];if(Bo>(Aw[1]-A_[1]))Bo=(Aw[3]-A_[1])-this.AD.GP;this.
AD.Gc(this.AD.Bp-Bo);},AnC:function(G){this.AD.GS(-1);},E9:function(G){var B;this.
IE.Mm(this.AD.GP*this.AD.AV);this.IE.Mo(((B=this.AD.M)[3]-B[1])-this.AD.OB);this.
IE.Mn(-this.AD.Bp);},_Init:function(aArg){A.acn.Menu._Init.call(this,aArg);A.acg.
AI._Init.call(this.Background={I:this},0);A.Core.H0._Init.call(this.H0={I:this},
0);A.Core.CG._Init.call(this.AD={I:this},0);A.kR.Av._Init.call(this.IE={I:this},
0);A.Core.BJ._Init.call(this.Df={I:this},0);this.__proto__=C.ATS;this.H(B9);this.
Background.AW(0x3);this.Background.H(B9);this.H0.AW(0x3F);this.H0.H(B9);this.AD.
AW(0x3F);this.AD.H(B9);this.AD.Aer(60);this.AD.Jm(0);this.AD.NN(this.Lc);this.IE.
AW(0x3A);this.IE.H(BC);this.IE.L(0xFF808080);this.J(this.Background,0);this.J(this.
H0,0);this.J(this.AD,0);this.J(this.IE,0);this.AD.Ei=[this,this.E9];this.AD.G$=[
this,this.G$];this.AD.Av$(this.H0);this.AQ=[this,this.BvU];this.Df.BK=[this,this.
A7A];this.Df.DS=[this,this.A7A];},_Done:function(){this.__proto__=A.acn.Menu;this.
Background._Done();this.H0._Done();this.AD._Done();this.IE._Done();this.Df._Done(
);A.acn.Menu._Done.call(this);},_ReInit:function(){A.acn.Menu._ReInit.call(this);
this.Background._ReInit();this.H0._ReInit();this.AD._ReInit();this.IE._ReInit();
this.Df._ReInit();},_Mark:function(D){var B;A.acn.Menu._Mark.call(this,D);if((B=
this.AdD)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.AX)&&(B._cycle!=D))B._Mark(
B._cycle=D);if((B=this.AQ)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.
Background)._cycle!=D)B._Mark(B._cycle=D);if((B=this.H0)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.AD)._cycle!=D)B._Mark(B._cycle=D);if((B=this.IE)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Df)._cycle!=D)B._Mark(B._cycle=D);},_className:"Demonstrator::VerticalMenu"
};C.ASS={Gx:null,AI:null,Cz:null,Init:function(aArg){var B;A.zX([this,this.Hu],[
B=A._GetAutoObject(A.acp.K5),B.A7e,B.A8t],0);A.pe([this,this.Hu],this);},Aby:function(
E){if(this.Gx===E)return;if(!!this.Gx)this.HH(this.Gx);this.Gx=E;if(!!this.Gx)this.
J(this.Gx,0);this.A8(E);this.Ag5(E,this.Cz);this.An();},Hu:function(G){var B;if(
!!A._GetAutoObject(A.acp.K5).ArO)this.Aby((C.Ag8.isPrototypeOf(B=A._NewObject(A.
_GetAutoObject(A.acp.K5).ArO,0))?B:null));else this.Aby(null);},_Init:function(aArg
){A.Core.O._Init.call(this,aArg);A.acg.AI._Init.call(this.AI={I:this},0);A.acg.Cz.
_Init.call(this.Cz={I:this},0);this.__proto__=C.ASS;this.H(EW);this.AI.AW(0x3F);
this.AI.H(EW);this.Cz.H(EW);this.Cz.L(0xFF000000);this.J(this.AI,0);this.J(this.
Cz,0);this.Init(aArg);},_Done:function(){this.__proto__=A.Core.O;this.AI._Done();
this.Cz._Done();A.Core.O._Done.call(this);},_ReInit:function(){A.Core.O._ReInit.
call(this);this.AI._ReInit();this.Cz._ReInit();},_Mark:function(D){var B;A.Core.
O._Mark.call(this,D);if((B=this.Gx)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.
AI)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Cz)._cycle!=D)B._Mark(B._cycle=D);}
,_className:"Demonstrator::SelectionArea"};C.AK5={AfP:0,ML:0,Background:null,V:null
,AiS:null,Adl:null,Xn:null,Adm:null,L$:null,Oe:0,Ly:false,Kv:false,CT:function(){
this.An();},Ai:function(Ae){var B;C.Ba.Ai.call(this,Ae);var G2=((Ae&0x10)===0x10
);var Fi=((Ae&0x20)===0x20);var Ip=((Ae&0x40)===0x40);if(!G2){this.Background.L(
0xFFAAAAAA);this.V.L(0xFF888888);this.L$.Ar(false);this.L$.Y(false);}else if(Ip){
this.Background.L(A.jb.AR);this.V.L(A.jb.Bh);this.L$.Ar(true);this.L$.Y(true);}else
if(Fi){this.Background.L(0xFFE6DED8);this.V.L(0xFF000000);this.L$.Ar(true);this.
L$.Y(true);}else{this.Background.L(0xFFFFFFFF);this.V.L(0xFF000000);this.L$.Ar(false
);this.L$.Y(false);}if(!this.Kv&&Fi)A._GetAutoObject(A.acp.K5).M9(this.AfP);this.
L$.BkH(this.ML>0);this.L$.Bk6(this.AfP>0);this.V.R(this.Oe.toFixed());this.Ly=G2;
this.Kv=Fi;},Cc:function(Ac){if(!this.AX){this.Xn.Ax(A.aaL(A.ach.AdX));this.Adl.
L(A.jb.AeV);return;}this.Hr=Ac;if(!!this.AX){this.ML=this.AX.LL(Ac,26);this.AfP=
this.AX.LL(Ac,22);this.Oe=this.AX.CA(Ac,1);var Alg=this.AX.HU(Ac,11);var Ak9=this.
AX.IU(Ac,17);var LJ=this.AX.IU(Ac,13);var H5=this.AX.Amp(Ac,14);var WW=A._GetAutoObject(
A.Device.Helper).AKU(LJ,Alg,Ak9);switch(H5){case 0:this.Xn.Ax(A.aaL(A.ach.AdX));
break;case 1:this.Xn.Ax(A.aaL(A.ach.AuY));break;case 2:this.Xn.Ax(A.aaL(A.ach.Au1
));break;default:A.ab5("%s%e",He,H5);}this.Adm.Ax(this.Xn.Al);this.Adl.L(A._GetAutoObject(
A.acj.Assessment).P9(WW));this.An();}},_Init:function(aArg){C.Ba._Init.call(this
,aArg);A.acg.AI._Init.call(this.Background={I:this},0);A.kR.CP._Init.call(this.V={
I:this},0);A.acg.Am._Init.call(this.AiS={I:this},0);A.acg.Am._Init.call(this.Adl={
I:this},0);A.acg.Am._Init.call(this.Xn={I:this},0);A.acg.Am._Init.call(this.Adm={
I:this},0);C.L$._Init.call(this.L$={I:this},0);this.__proto__=C.AK5;this.Background.
AW(0x3F);this.Background.H(B9);this.V.AW(0x3F);this.V.H(I7);this.V.R(A.aaR(A.acf.
GB));this.V.A2(0x11);this.V.L(0xFF000000);this.AiS.H(IH);this.AiS.L(A.jb.Text);this.
Adl.H(IH);this.Adl.L(A.jb.EU);this.Xn.H(IH);this.Adm.H(IH);this.Adm.L(A.jb.Text);
this.Adm.Ct(1);this.L$.AW(0x3);this.L$.H(OM);this.J(this.Background,0);this.J(this.
V,0);this.J(this.AiS,0);this.J(this.Adl,0);this.J(this.Xn,0);this.J(this.Adm,0);
this.J(this.L$,0);this.V.S(A.aaL(A.fl.Ah));this.V.A5(A.aaL(A.fl.Ak));this.V.CC(A.
aaL(A.fl.By));this.AiS.Ax(A.aaL(C.AF6));this.Adl.Ax(A.aaL(C.AT_));this.Xn.Ax(A.aaL(
A.ach.AdX));this.Adm.Ax(A.aaL(A.ach.AdX));},_Done:function(){this.__proto__=C.Ba;
this.Background._Done();this.V._Done();this.AiS._Done();this.Adl._Done();this.Xn.
_Done();this.Adm._Done();this.L$._Done();C.Ba._Done.call(this);},_ReInit:function(
){C.Ba._ReInit.call(this);this.Background._ReInit();this.V._ReInit();this.AiS._ReInit(
);this.Adl._ReInit();this.Xn._ReInit();this.Adm._ReInit();this.L$._ReInit();this.
V.R(A.aaR(A.acf.GB));this.V.S(A.aaL(A.fl.Ah));this.V.A5(A.aaL(A.fl.Ak));this.V.CC(
A.aaL(A.fl.By));this.CT();},_Mark:function(D){var B;C.Ba._Mark.call(this,D);if((
B=this.Background)._cycle!=D)B._Mark(B._cycle=D);if((B=this.V)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.AiS)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Adl)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.Xn)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
Adm)._cycle!=D)B._Mark(B._cycle=D);if((B=this.L$)._cycle!=D)B._Mark(B._cycle=D);
},_className:"Demonstrator::AnimalMenuItem"};C.L$={Ua:null,We:null,Aks:null,M$:null
,NU:null,Y7:null,Ab1:null,Avh:false,AwR:false,CT:function(){this.An();},Ai:function(
Ae){var B;A.Core.O.Ai.call(this,Ae);var Ip=((Ae&0x40)===0x40);if(Ip){this.M$.L(A.
jb.Bh);this.NU.L(A.jb.Bh);}else{this.M$.L(A.jb.Text);this.NU.L(A.jb.Text);}if(this.
AwR){this.M$.R(A.aaR(A.acf.BlY));if(this.Avh){this.Ua.Ax(A.aaL(C.AFN));this.We.Ax(
A.aaL(C.AFN));}else{this.Ua.Ax(A.aaL(C.ArL));this.We.Ax(A.aaL(C.ArL));}}else if(
this.Avh){this.Ua.Ax(A.aaL(C.ABw));this.We.Ax(A.aaL(C.ABw));this.M$.R(PQ);}var A2d=
this.AwR||this.Avh;this.Ua.Y(A2d);this.We.Y(A2d);this.M$.Y(A2d);this.Y7.Ar(this.
AwR);},Bk6:function(E){if(this.AwR===E)return;this.AwR=E;this.An();},BkH:function(
E){if(this.Avh===E)return;this.Avh=E;this.An();},_Init:function(aArg){A.Core.O._Init.
call(this,aArg);A.acg.Am._Init.call(this.Ua={I:this},0);A.acg.Am._Init.call(this.
We={I:this},0);A.acg.Am._Init.call(this.Aks={I:this},0);A.kR.CP._Init.call(this.
M$={I:this},0);A.kR.CP._Init.call(this.NU={I:this},0);A.Core.Bi._Init.call(this.
Y7={I:this},0);A.Core.Bi._Init.call(this.Ab1={I:this},0);this.__proto__=C.L$;var
B;this.H(PR);this.Ua.AW(0x6);this.Ua.H(CO);this.Ua.L(A.jb.C0);this.Ua.Ct(1);this.
We.AW(0x6);this.We.H(CO);this.We.L(A.jb.Text);this.Aks.AW(0xE);this.Aks.H(E4);this.
M$.AW(0x7);this.M$.H(Ln);this.M$.A2(0x11);this.M$.L(0xFF000000);this.NU.AW(0x3);
this.NU.H(PT);this.NU.R(A.aaR(A.acf.Temperature));this.NU.A2(0x11);this.NU.L(0xFF000000
);this.Y7.AW(0x3);this.Y7.Ke(Ko);this.Y7.Kd(NY);this.Y7.DK(PU);this.Y7.DY(Mw);this.
Ab1.AW(0x3);this.Ab1.Ke(SL);this.Ab1.Kd(Uu);this.Ab1.DK(Zs);this.Ab1.DY(Ww);this.
J(this.Ua,0);this.J(this.We,0);this.J(this.Aks,0);this.J(this.M$,0);this.J(this.
NU,0);this.J(this.Y7,0);this.J(this.Ab1,0);this.Ua.Ax(A.aaL(C.ArL));this.We.Ax(A.
aaL(C.ArL));this.Aks.Ax(A.aaL(C.ATn));this.M$.S(A.aaL(A.fl.Ah));this.M$.A5(A.aaL(
A.fl.Ak));this.M$.CC(A.aaL(A.fl.By));this.NU.S(A.aaL(A.fl.Ah));this.NU.A5(A.aaL(
A.fl.Ak));this.NU.CC(A.aaL(A.fl.By));this.Y7.Lg=[B=A._GetAutoObject(A.acp.K5),B.
BcM];this.Ab1.Lg=[B=A._GetAutoObject(A.acp.K5),B.Bcx];},_Done:function(){this.__proto__=
A.Core.O;this.Ua._Done();this.We._Done();this.Aks._Done();this.M$._Done();this.NU.
_Done();this.Y7._Done();this.Ab1._Done();A.Core.O._Done.call(this);},_ReInit:function(
){A.Core.O._ReInit.call(this);this.Ua._ReInit();this.We._ReInit();this.Aks._ReInit(
);this.M$._ReInit();this.NU._ReInit();this.Y7._ReInit();this.Ab1._ReInit();this.
NU.R(A.aaR(A.acf.Temperature));this.M$.S(A.aaL(A.fl.Ah));this.M$.A5(A.aaL(A.fl.Ak
));this.M$.CC(A.aaL(A.fl.By));this.NU.S(A.aaL(A.fl.Ah));this.NU.A5(A.aaL(A.fl.Ak
));this.NU.CC(A.aaL(A.fl.By));this.CT();},_Mark:function(D){var B;A.Core.O._Mark.
call(this,D);if((B=this.Ua)._cycle!=D)B._Mark(B._cycle=D);if((B=this.We)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.Aks)._cycle!=D)B._Mark(B._cycle=D);if((B=this.M$
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.NU)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Y7)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ab1)._cycle!=D)B._Mark(B._cycle=
D);},_className:"Demonstrator::AnimalItemAction"};C.XZ={CT:function(){this.An();
},Ai:function(Ae){C.Aqs.Ai.call(this,Ae);if(!this.Text.String.length)this.Text.R(
A.aaR(A.acf.Filter));},A6x:function(G){var DW=(A.Core.BJ.isPrototypeOf(G)?G:null
);if(!!DW)A._GetAutoObject(A.acp.Af$).E$(DW.DI);},A6v:function(G){A._GetAutoObject(
A.acp.Af$).Delete();},_Init:function(aArg){C.Aqs._Init.call(this,aArg);this.__proto__=
C.XZ;this.Am.Ax(A.aaL(C.Filter));},_ReInit:function(){C.Aqs._ReInit.call(this);this.
CT();},_className:"Demonstrator::FilterView"};C.AaD={Dg:null,XS:null,RR:null,XT:
null,Iw:null,X_:null,Amb:null,At:null,OU:null,MV:null,AaC:null,FK:0,Au8:0,AEW:false
,Ai:function(Ae){A.Core.O.Ai.call(this,Ae);this.RR.R(this.At.Format(II));if(this.
AEW){this.RR.Y(false);this.X_.Y(false);this.Iw.Y(false);this.XT.Y(false);this.OU.
Ar(true);this.OU.Y(true);this.MV.Ct(2);this.MV.ARP(2);this.MV.H(A.abM(this.MV.M,
this.OU.M[2]));}else{this.RR.Y(true);this.X_.Y(true);this.Iw.Y(true);this.XT.Y(true
);this.OU.Ar(false);this.OU.Y(false);this.MV.Ct(3);this.MV.ARP(3);this.MV.H(A.abM(
this.MV.M,this.RR.M[2]));}},BxG:function(G){this.BkN(!this.AEW);},AcZ:function(G
){var F;if(!!this.Dg)this.TZ((F=this.Dg,F[1].call(F[0])));},AbC:function(E){if(A.
aaZ(this.Dg,E))return;if(!!this.Dg)A.z$([this,this.AcZ],this.Dg,0);this.Dg=E;if(
!!E)A.zX([this,this.AcZ],E,0);if(!!E)A.pe([this,this.AcZ],this);},TZ:function(E){
if(this.FK===E)return;this.FK=E;this.At.Initialize(this.FK);this.ByJ(this);this.
An();},Ah6:function(G){var B;var F;var BN=this.FK;var AiC=this.AaC.C9(this.Au8);
this.AH2(AiC);if(this.At.Year>2100)this.At.Initialize2(2100,12,31,0,0,0);this.TZ(((
B=(this.At.JF()|0))<0)?B+0x100000000:B);if(this.FK!==BN){if(!!this.Dg)(F=this.Dg
,F[2].call(F[0],this.FK));A.abo(this.Dg,0);}},AhR:function(G){var B;var F;var BN=
this.FK;var AiC=this.AaC.C9(this.Au8);this.AJO(AiC);if(this.At.Year<2000)this.At.
Initialize2(2000,1,1,0,0,0);this.TZ(((B=(this.At.JF()|0))<0)?B+0x100000000:B);if(
this.FK!==BN){if(!!this.Dg)(F=this.Dg,F[2].call(F[0],this.FK));A.abo(this.Dg,0);
}},Bkn:function(E){if(this.Au8===E)return;this.Au8=E;},BkN:function(E){if(this.AEW===
E)return;this.AEW=E;this.An();},Bye:function(G){var B;var F;var BN=this.FK;this.
At.Li(this.OU.ADm());this.At.T3(this.OU.ADr());this.At.Year=this.OU.AqR();this.TZ(((
B=(this.At.JF()|0))<0)?B+0x100000000:B);if(this.FK!==BN){if(!!this.Dg)(F=this.Dg
,F[2].call(F[0],this.FK));A.abo(this.Dg,0);}},ByJ:function(G){this.OU.Li(this.At.
Gz);this.OU.T3(this.At.G9);this.OU.Aka(this.At.Year);},AH2:function(Ax0){var B;switch(
Ax0){case 0:if(this.At.Gz<this.At.YS())this.At.Li(this.At.Gz+1);else{this.At.Li(
1);this.AH2(2);}break;case 1:if((this.At.Gz+7)<=this.At.YS())this.At.Li(this.At.
Gz+7);else{this.At.Li((7-this.At.YS())+this.At.Gz);this.AH2(2);}break;case 2:if(
this.At.G9<12)this.At.T3(this.At.G9+1);else{this.At.T3(1);this.AH2(3);}break;case
3:this.At.Year++;break;default:throw new Error(Uv+Ax0.toFixed());}},AJO:function(
Ax0){var B;switch(Ax0){case 0:if(this.At.Gz>1)this.At.Li(this.At.Gz-1);else{this.
AJO(2);this.At.Li(this.At.YS());}break;case 1:if((this.At.Gz-7)>0)this.At.Li(this.
At.Gz-7);else{this.AJO(2);this.At.Li(this.At.YS()-(7-this.At.Gz));}break;case 2:
if(this.At.G9>1)this.At.T3(this.At.G9-1);else{this.At.T3(12);this.AJO(3);}break;
case 3:this.At.Year--;break;default:throw new Error(Uv+Ax0.toFixed());}},Biq:function(
){return this.Au8;},_Init:function(aArg){A.Core.O._Init.call(this,aArg);A.acg.Text.
_Init.call(this.XS={I:this},0);A.acg.Text._Init.call(this.RR={I:this},0);C.AuW._Init.
call(this.XT={I:this},0);A.acv.Iw._Init.call(this.Iw={I:this},0);C.AuW._Init.call(
this.X_={I:this},0);A.acg.Am._Init.call(this.Amb={I:this},0);A.Core.Bt._Init.call(
this.At={I:this},0);C.AMf._Init.call(this.OU={I:this},0);C.AuW._Init.call(this.MV={
I:this},0);C.AaC._Init.call(this.AaC={I:this},0);this.__proto__=C.AaD;this.H(Zt);
this.XS.H(Wx);this.XS.A2(0x11);this.XS.R(A.aaR(A.acf.Date));this.XS.L(0xFF000000
);this.RR.H(Zu);this.RR.A2(0x11);this.RR.R(Uw);this.RR.L(0xFF000000);this.XT.H(Zv
);this.XT.A76(200);this.Iw.H(Zw);this.Iw.AvZ(120);this.Iw.GP=30;this.Iw.A7P(A.jb.
C0);this.Iw.Bjm(A.jb.C0);this.Iw.Bjs(A.jb.C0);this.Iw.A7Q(A.jb.Text);this.Iw.Bjt(
A.jb.Text);this.Iw.Bjn(A.jb.AR);this.Iw.Bju(A.jb.Bh);this.Iw.Bjr(A.jb.AR);this.Iw.
Bjq(A.jb.Text);this.X_.H(Ux);this.X_.A76(200);this.Amb.H(Wy);this.OU.H(Q4);this.
MV.H(Zx);this.MV.Ct(3);this.MV.ARP(3);this.MV.L(A.jb.Text);this.J(this.XS,0);this.
J(this.RR,0);this.J(this.XT,0);this.J(this.Iw,0);this.J(this.X_,0);this.J(this.Amb
,0);this.J(this.OU,0);this.J(this.MV,0);this.XS.S(A.aaL(A.fl.Ak));this.RR.S(A.aaL(
A.fl.Ez));this.XT.AQ=[this,this.AhR];this.XT.Dz(A.aaL(C.ALD));this.XT.ARQ(A.aaL(
C.ALE));this.Iw.Au([this,this.Biq,this.Bkn]);this.Iw.Bjz(this.AaC);this.Iw.ADV(A.
aaL(A.fl.Ak));this.Iw.ARy(A.aaL(A.fl.Ak));this.X_.AQ=[this,this.Ah6];this.X_.Dz(
A.aaL(C.ALF));this.X_.ARQ(A.aaL(C.ALG));this.Amb.Ax(A.aaL(C.AOG));this.OU.Dj=[this
,this.Bye];this.MV.AQ=[this,this.BxG];this.MV.Dz(A.aaL(A.ach.Al3));this.MV.ARQ(A.
aaL(A.ach.Al3));},_Done:function(){this.__proto__=A.Core.O;this.XS._Done();this.
RR._Done();this.XT._Done();this.Iw._Done();this.X_._Done();this.Amb._Done();this.
At._Done();this.OU._Done();this.MV._Done();this.AaC._Done();A.Core.O._Done.call(
this);},_ReInit:function(){A.Core.O._ReInit.call(this);this.XS._ReInit();this.RR.
_ReInit();this.XT._ReInit();this.Iw._ReInit();this.X_._ReInit();this.Amb._ReInit(
);this.At._ReInit();this.OU._ReInit();this.MV._ReInit();this.AaC._ReInit();this.
XS.R(A.aaR(A.acf.Date));this.XS.S(A.aaL(A.fl.Ak));this.RR.S(A.aaL(A.fl.Ez));this.
Iw.ADV(A.aaL(A.fl.Ak));this.Iw.ARy(A.aaL(A.fl.Ak));},_Mark:function(D){var B;A.Core.
O._Mark.call(this,D);if((B=this.Dg)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((
B=this.XS)._cycle!=D)B._Mark(B._cycle=D);if((B=this.RR)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.XT)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Iw)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.X_)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Amb)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.At)._cycle!=D)B._Mark(B._cycle=D);if((B=this.OU
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.MV)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.AaC)._cycle!=D)B._Mark(B._cycle=D);},_className:"Demonstrator::DateSelector"
};C.AuW={C5:null,Aws:null,AMt:null,AQ:null,Bk:null,Df:null,CN:null,Hk:null,X6:null
,AOi:0,Tx:0,ASq:0,AP:0xFFFFFFFF,A0w:false,Ly:false,Kv:false,Qb:false,Ai:function(
Ae){var B;A.acn.Ag1.Ai.call(this,Ae);var G2=((Ae&0x10)===0x10);var Fi=((Ae&0x20)===
0x20);var Gq=this.CN.Down&&this.CN.Yb;if(!G2)this.Hk.Ax(this.AMt);else if(Gq){this.
Hk.Ax(this.Aws);this.Hk.Ct(this.ASq);}else{this.Hk.Ax(this.C5);this.Hk.Ct(this.Tx
);}this.Hk.L(this.AP);this.Ly=G2;this.Kv=Fi;this.Qb=Gq;},Qa:function(G){this.An(
);A.pe(this.AQ,this);},Aig:function(G){if(this.CN.Down)return;if(this.Df.AbO)return;
this.An();if(this.Bk.Bv){A.pe(this.AQ,this);this.Bk.Ar(false);}this.Bk.Ar(true);
},Bcv:function(G){this.An();},AzB:function(G){if(!this.CN.Yb)return;if(this.CN.Nw
)return;if((this.X6.Vb<=0)||(this.CN.Jg<this.X6.Vb)){if(this.CN.Jg>=this.Bk.Vb)A.
pe(this.AQ,this);else this.Bk.Ar(true);}this.X6.Ar(false);},AzA:function(G){this.
X6.Ar(true);if(this.Bk.Bv){A.pe(this.AQ,this);this.Bk.Ar(false);}},Dz:function(E
){if(this.C5===E)return;this.C5=E;this.An();},ARQ:function(E){if(this.Aws===E)return;
this.Aws=E;this.An();},A1t:function(G){if(!this.CN.Yb)return;if(this.CN.Nw)return;
if((this.AOi>=0)&&this.A0w){this.A0w=false;this.X6.Ar(true);A.pe(this.AQ,this);}
},A76:function(E){if(this.AOi===E)return;this.AOi=E;this.X6.V8(E);},Bxa:function(
G){this.A0w=true;},Ct:function(E){if(this.Tx===E)return;this.Tx=E;this.An();},ARP:
function(E){if(this.ASq===E)return;this.ASq=E;this.An();},L:function(E){if(this.
AP===E)return;this.AP=E;this.An();},_Init:function(aArg){A.acn.Ag1._Init.call(this
,aArg);A.Core.Timer._Init.call(this.Bk={I:this},0);A.Core.BJ._Init.call(this.Df={
I:this},0);A.Core.Bi._Init.call(this.CN={I:this},0);A.acg.Am._Init.call(this.Hk={
I:this},0);A.Core.Timer._Init.call(this.X6={I:this},0);this.__proto__=C.AuW;this.
H(ON);this.Bk.PC(0);this.Bk.V8(50);this.Df.Filter=149;this.CN.AW(0x3F);this.CN.Ke(
PV);this.CN.Kd(Wz);this.CN.DK(WA);this.CN.DY(Ko);this.CN.AeC=0xF;this.CN.AEc(100
);this.Hk.AW(0x3F);this.Hk.H(ON);this.Hk.A2(0x12);this.X6.PC(0);this.J(this.CN,0
);this.J(this.Hk,0);this.Bk.Mp=[this,this.Qa];this.Df.BK=[this,this.Aig];this.CN.
ADw=[this,this.Bcv];this.CN.Avk=[this,this.Bcv];this.CN.DS=[this,this.A1t];this.
CN.Lg=[this,this.AzB];this.CN.BK=[this,this.AzA];this.Hk.Ax(A.aaL(A.aci.Ts));this.
C5=A.aaL(A.aci.Ts);this.Aws=A.aaL(A.aci.Ts);this.AMt=A.aaL(A.aci.Ts);this.X6.Mp=[
this,this.Bxa];},_Done:function(){this.__proto__=A.acn.Ag1;this.Bk._Done();this.
Df._Done();this.CN._Done();this.Hk._Done();this.X6._Done();A.acn.Ag1._Done.call(
this);},_ReInit:function(){A.acn.Ag1._ReInit.call(this);this.Bk._ReInit();this.Df.
_ReInit();this.CN._ReInit();this.Hk._ReInit();this.X6._ReInit();},_Mark:function(
D){var B;A.acn.Ag1._Mark.call(this,D);if((B=this.C5)&&(B._cycle!=D))B._Mark(B._cycle=
D);if((B=this.Aws)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.AMt)&&(B._cycle
!=D))B._Mark(B._cycle=D);if((B=this.AQ)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D
);if((B=this.Bk)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Df)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.CN)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Hk)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.X6)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Demonstrator::IconButton"};C.ALh={Pi:null,V:null,AdR:null,_Init:function(aArg){
C.Fo._Init.call(this,aArg);A.acg.AI._Init.call(this.Pi={I:this},0);A.acg.Text._Init.
call(this.V={I:this},0);C.AdR._Init.call(this.AdR={I:this},0);this.__proto__=C.ALh;
this.H(WC);this.Pi.AW(0x1D);this.Pi.H(B9);this.Pi.L(0xFFE6E6E6);this.V.AW(0x1D);
this.V.H(Zy);this.V.A2(0x11);this.V.R(A.aaR(A.acf.A3d));this.V.L(0xFF000000);this.
AdR.H(Zz);this.J(this.Pi,0);this.J(this.V,0);this.J(this.AdR,0);this.V.S(A.aaL(A.
fl.Ah));},_Done:function(){this.__proto__=C.Fo;this.Pi._Done();this.V._Done();this.
AdR._Done();C.Fo._Done.call(this);},_ReInit:function(){C.Fo._ReInit.call(this);this.
Pi._ReInit();this.V._ReInit();this.AdR._ReInit();this.V.R(A.aaR(A.acf.A3d));this.
V.S(A.aaL(A.fl.Ah));},_Mark:function(D){var B;C.Fo._Mark.call(this,D);if((B=this.
Pi)._cycle!=D)B._Mark(B._cycle=D);if((B=this.V)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.AdR)._cycle!=D)B._Mark(B._cycle=D);},_className:"Demonstrator::AnimalsHeader"
};C.AtS={Pi:null,V:null,Aee:null,Aec:null,Bi:null,DE:WD,AjP:false,Ai:function(Ae
){C.Fo.Ai.call(this,Ae);if(this.AjP){this.Aec.Y(true);this.Aee.Y(false);}else{this.
Aec.Y(false);this.Aee.Y(true);}},Bx2:function(G){if(this.AjP)A.pe(this.AgM,this);
else A.pe(this.AgN,this);this.AEf(!this.AjP);},U:function(E){if(this.DE===E)return;
this.DE=E;this.V.R(E);},AEf:function(E){if(this.AjP===E)return;this.AjP=E;this.An(
);},_Init:function(aArg){C.Fo._Init.call(this,aArg);A.acg.AI._Init.call(this.Pi={
I:this},0);A.acg.Text._Init.call(this.V={I:this},0);A.acg.Am._Init.call(this.Aee={
I:this},0);A.acg.Am._Init.call(this.Aec={I:this},0);A.Core.Bi._Init.call(this.Bi={
I:this},0);this.__proto__=C.AtS;this.H(B9);this.Pi.AW(0x1D);this.Pi.H(B9);this.Pi.
L(0xFFE6E6E6);this.V.AW(0x1D);this.V.H(WE);this.V.A2(0x11);this.V.R(WD);this.V.L(
0xFF000000);this.Aee.H(SM);this.Aee.Y(false);this.Aec.AW(0x3A);this.Aec.H(SM);this.
Bi.Ke(Ko);this.Bi.Kd(ZA);this.Bi.DK(ZB);this.Bi.DY(Mw);this.J(this.Pi,0);this.J(
this.V,0);this.J(this.Aee,0);this.J(this.Aec,0);this.J(this.Bi,0);this.V.S(A.aaL(
A.fl.Ah));this.Aee.Ax(A.aaL(C.ALk));this.Aec.Ax(A.aaL(C.AiW));this.Bi.Lg=[this,this.
Bx2];},_Done:function(){this.__proto__=C.Fo;this.Pi._Done();this.V._Done();this.
Aee._Done();this.Aec._Done();this.Bi._Done();C.Fo._Done.call(this);},_ReInit:function(
){C.Fo._ReInit.call(this);this.Pi._ReInit();this.V._ReInit();this.Aee._ReInit();
this.Aec._ReInit();this.Bi._ReInit();this.V.S(A.aaL(A.fl.Ah));},_Mark:function(D
){var B;C.Fo._Mark.call(this,D);if((B=this.Pi)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.V)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Aee)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Aec)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Bi)._cycle!=D)B._Mark(
B._cycle=D);},_className:"Demonstrator::AccordionHeader"};C.Ba={AX:null,AQ:null,
CN:null,Hr:-1,YV:function(E){if(this.AX===E)return;this.AX=E;},Cc:function(Ac){A.
ab5("%s",Acf);},YW:function(E){if(A.aa0(this.AQ,E))return;this.AQ=E;},AzB:function(
G){if(!this.CN.Yb)return;if(this.CN.Nw)return;A.pe(this.AQ,this);},_Init:function(
aArg){A.Core.O._Init.call(this,aArg);A.Core.Bi._Init.call(this.CN={I:this},0);this.
__proto__=C.Ba;this.H(B9);this.CN.AW(0x3F);this.CN.Ke(Mw);this.CN.Kd(ZB);this.CN.
DK(ZA);this.CN.DY(Ko);this.CN.AeC=0xF;this.CN.AEc(100);this.J(this.CN,0);this.CN.
Lg=[this,this.AzB];},_Done:function(){this.__proto__=A.Core.O;this.CN._Done();A.
Core.O._Done.call(this);},_ReInit:function(){A.Core.O._ReInit.call(this);this.CN.
_ReInit();},_Mark:function(D){var B;A.Core.O._Mark.call(this,D);if((B=this.AX)&&(
B._cycle!=D))B._Mark(B._cycle=D);if((B=this.AQ)&&((B=B[0])._cycle!=D))B._Mark(B.
_cycle=D);if((B=this.CN)._cycle!=D)B._Mark(B._cycle=D);},_className:"Demonstrator::ListItem"
};C.Fo={AQK:null,AgN:null,AgM:null,BkK:function(E){if(A.aa0(this.AQK,E))return;this.
AQK=E;},A8e:function(E){if(A.aa0(this.AgN,E))return;this.AgN=E;},A8d:function(E){
if(A.aa0(this.AgM,E))return;this.AgM=E;},_Init:function(aArg){A.Core.O._Init.call(
this,aArg);this.__proto__=C.Fo;this.H(B9);},_Mark:function(D){var B;A.Core.O._Mark.
call(this,D);if((B=this.AQK)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.
AgN)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.AgM)&&((B=B[0])._cycle
!=D))B._Mark(B._cycle=D);},_className:"Demonstrator::ListHeader"};C.AMf={Dj:null
,Aas:null,Wo:null,Wn:null,Wm:null,M5:null,M4:null,KF:null,Ly:false,Kv:false,ByQ:
false,Ai:function(Ae){var B;A.acn.AgZ.Ai.call(this,Ae);var G2=((Ae&0x10)===0x10);
var Fi=((Ae&0x20)===0x20);var Bbz=(this.Wm.Za||this.Wn.Za)||this.Wo.Za;if(Bbz)this.
Aas.L(A.jb.Text);else this.Aas.L(A.jb.Bb);this.Ly=G2;this.Kv=Fi;this.ByQ=Bbz;},Azw:
function(G){this.An();if((!this.Wm.Za&&!this.Wn.Za)&&!this.Wo.Za){var UN=this.AIW(
this.ADr(),this.AqR());var AcG=this.ADm();this.KF.Jm(UN);if(AcG>UN)this.Li(UN);A.
pe(this.Dj,this);}},A1L:function(G){this.An();},Bi5:function(G){var B;var FU=this.
M5.GN;var Cx=(A.acg.Text.isPrototypeOf(B=this.M5.Cd)?B:null);if(!Cx)return;Cx.R(
A.abl(FU+1900,4,10));Cx.S(A.aaL(A.fl.Ah));Cx.L(A.jb.Text);Cx.A2(0x12);Cx.H(A.abK(
Cx.M,[(B=this.M5.M)[2]-B[0],this.M5.GP]));},Bi4:function(G){var B;var FU=this.M4.
GN;var Cx=(A.acg.Text.isPrototypeOf(B=this.M4.Cd)?B:null);if(!Cx)return;Cx.R(A.abl(
FU+1,2,10)+Uy);Cx.S(A.aaL(A.fl.Ah));Cx.L(A.jb.Text);Cx.A2(0x12);Cx.H(A.abK(Cx.M,[(
B=this.M4.M)[2]-B[0],this.M4.GP]));},Bi2:function(G){var B;var FU=this.KF.GN;var
Cx=(A.acg.Text.isPrototypeOf(B=this.KF.Cd)?B:null);if(!Cx)return;Cx.R(A.abl(FU+1
,2,10)+Uy);Cx.S(A.aaL(A.fl.Ah));Cx.L(A.jb.Text);Cx.A2(0x12);Cx.H(A.abK(Cx.M,[(B=
this.KF.M)[2]-B[0],this.KF.GP]));},AqR:function(){return 1900+((((-this.M5.Bp/this.
M5.GP)|0)+2)%200);},Aka:function(E){if(E<1900)E=1900;if(E>2100)E=2100;this.M5.Gc(((
E-1900)-2)*-this.M5.GP);var UN=this.AIW(this.ADr(),E);this.KF.Jm(UN);if(this.ADm(
)>UN)this.Li(UN);},ADr:function(){return 1+((((-this.M4.Bp/this.M4.GP)|0)+2)%12);
},T3:function(E){if(E<1)E=1;if(E>12)E=12;this.M4.Gc(((E-1)-2)*-this.M4.GP);var UN=
this.AIW(E,this.AqR());this.KF.Jm(UN);if(this.ADm()>UN)this.Li(UN);},ADm:function(
){return 1+((((-this.KF.Bp/this.KF.GP)|0)+2)%this.KF.AV);},Li:function(E){var UN=
this.AIW(this.ADr(),this.AqR());if(E<1)E=1;if(E>UN)E=UN;this.KF.Gc(((E-2)-1)*-this.
KF.GP);},AIW:function(Afc,Acx){if(Afc===2){if(!(Acx%4)&&(!!(Acx%100)||!(Acx%400)
))return 29;else return 28;}else if((((Afc===4)||(Afc===6))||(Afc===9))||(Afc===
11))return 30;else return 31;},_Init:function(aArg){A.acn.AgZ._Init.call(this,aArg
);A.acg.Cz._Init.call(this.Aas={I:this},0);A.Core.H0._Init.call(this.Wo={I:this}
,0);A.Core.H0._Init.call(this.Wn={I:this},0);A.Core.H0._Init.call(this.Wm={I:this
},0);A.Core.CG._Init.call(this.M5={I:this},0);A.Core.CG._Init.call(this.M4={I:this
},0);A.Core.CG._Init.call(this.KF={I:this},0);this.__proto__=C.AMf;this.H(ZC);this.
Aas.H(Ae2);this.Aas.NO(3);this.Aas.L(0xFFE1E1E1);this.Aas.Y(true);this.Wo.H(ZD);
this.Wo.ARX(WF);this.Wo.ARz(0.2);this.Wn.H(WG);this.Wn.ARX(WF);this.Wn.ARz(0.2);
this.Wm.H(ZE);this.Wm.ARX(WF);this.Wm.ARz(0.2);this.M5.H(ZD);this.M5.ARw(true);this.
M5.Gc(60);this.M5.Aer(30);this.M5.Jm(200);this.M4.H(WG);this.M4.ARw(true);this.M4.
Gc(60);this.M4.Aer(30);this.M4.Jm(12);this.KF.H(ZE);this.KF.ARw(true);this.KF.Gc(
60);this.KF.Aer(30);this.KF.Jm(31);this.J(this.Aas,0);this.J(this.Wo,0);this.J(this.
Wn,0);this.J(this.Wm,0);this.J(this.M5,0);this.J(this.M4,0);this.J(this.KF,0);this.
Wo.YR=[this,this.Azw];this.Wo.Sk=[this,this.A1L];this.Wn.YR=[this,this.Azw];this.
Wn.Sk=[this,this.A1L];this.Wm.YR=[this,this.Azw];this.Wm.Sk=[this,this.A1L];this.
M5.G$=[this,this.Bi5];this.M5.Av$(this.Wo);this.M4.G$=[this,this.Bi4];this.M4.Av$(
this.Wn);this.KF.G$=[this,this.Bi2];this.KF.Av$(this.Wm);},_Done:function(){this.
__proto__=A.acn.AgZ;this.Aas._Done();this.Wo._Done();this.Wn._Done();this.Wm._Done(
);this.M5._Done();this.M4._Done();this.KF._Done();A.acn.AgZ._Done.call(this);},_ReInit:
function(){A.acn.AgZ._ReInit.call(this);this.Aas._ReInit();this.Wo._ReInit();this.
Wn._ReInit();this.Wm._ReInit();this.M5._ReInit();this.M4._ReInit();this.KF._ReInit(
);},_Mark:function(D){var B;A.acn.AgZ._Mark.call(this,D);if((B=this.Dj)&&((B=B[0
])._cycle!=D))B._Mark(B._cycle=D);if((B=this.Aas)._cycle!=D)B._Mark(B._cycle=D);
if((B=this.Wo)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Wn)._cycle!=D)B._Mark(B.
_cycle=D);if((B=this.Wm)._cycle!=D)B._Mark(B._cycle=D);if((B=this.M5)._cycle!=D)
B._Mark(B._cycle=D);if((B=this.M4)._cycle!=D)B._Mark(B._cycle=D);if((B=this.KF).
_cycle!=D)B._Mark(B._cycle=D);},_className:"Demonstrator::DatePicker"};C.AF6={_class:
function(){return A.aci.Al;},0:{FileName:"./res_index/DemonstratorWhiteTile.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[40,40],FrameDelay:0,_this:
null}};C.AT_={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/DemonstratorWhiteTileSmall.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[40,40],FrameDelay:0,_this:
null}};C.Ag8={_Init:function(aArg){A.Core.O._Init.call(this,aArg);this.__proto__=
C.Ag8;this.H(EW);},_className:"Demonstrator::SelectionAreaContent"};C.ALa={Z:null
,U5:null,Th:null,Bys:function(G){var B;this.Th.H(A.abI(this.Th.M,((B=this.M)[3]-
B[1])-((B=this.U5.M)[3]-B[1])));},_Init:function(aArg){C.Ag8._Init.call(this,aArg
);A.Core.Z._Init.call(this.Z={I:this},0);C.AKG._Init.call(this.U5={I:this},0);C.
ATS._Init.call(this.Th={I:this},0);this.__proto__=C.ALa;this.Z.AW(0x3F);this.Z.H(
EW);this.Z.Kb(1);this.U5.H(Ae3);this.U5.Aj(true);this.U5.AEf(true);this.Th.AW(0x3
);this.Th.H(JN);this.Th.Aj(true);this.Th.NN(C.AK5);this.Th.BkF(C.ALh);this.J(this.
Z,0);this.J(this.U5,0);this.J(this.Th,0);this.A8(this.Th);this.Z.Ei=[this,this.Bys
];this.Th.YV(A._GetAutoObject(A.acp.ApF));},_Done:function(){this.__proto__=C.Ag8;
this.Z._Done();this.U5._Done();this.Th._Done();C.Ag8._Done.call(this);},_ReInit:
function(){C.Ag8._ReInit.call(this);this.Z._ReInit();this.U5._ReInit();this.Th._ReInit(
);},_Mark:function(D){var B;C.Ag8._Mark.call(this,D);if((B=this.Z)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.U5)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Th)._cycle!=
D)B._Mark(B._cycle=D);},_className:"Demonstrator::AnimalSelectionActions"};C.U5={
_Init:function(aArg){C.AtS._Init.call(this,aArg);this.__proto__=C.U5;this.U(A.aaR(
A.acf.A4h));},_ReInit:function(){C.AtS._ReInit.call(this);this.U(A.aaR(A.acf.A4h
));},_className:"Demonstrator::ActionsHeader"};C.AKG={Background:null,Aag:null,AeP:
null,AeG:null,AeO:null,AjH:null,AjI:null,AjJ:null,AjK:null,AjP:false,AgN:function(
G){var B;this.H(A.abI(this.M,(B=this.Aag.M)[3]-B[1]));},AgM:function(G){this.H(A.
abI(this.M,240));},AEf:function(E){if(this.AjP===E)return;this.AjP=E;this.Aag.AEf(
E);if(E)this.AgN(this);else this.AgM(this);},_Init:function(aArg){A.Core.O._Init.
call(this,aArg);A.acg.AI._Init.call(this.Background={I:this},0);C.U5._Init.call(
this.Aag={I:this},0);C.AeP._Init.call(this.AeP={I:this},0);C.AeG._Init.call(this.
AeG={I:this},0);C.AeO._Init.call(this.AeO={I:this},0);A.acg.DR._Init.call(this.AjH={
I:this},0);A.acg.DR._Init.call(this.AjI={I:this},0);A.acg.DR._Init.call(this.AjJ={
I:this},0);A.acg.DR._Init.call(this.AjK={I:this},0);this.__proto__=C.AKG;this.H(
Ae3);this.Background.AW(0x3F);this.Background.H(Ae3);this.Aag.AW(0x1D);this.Aag.
H(B9);this.AeP.H(Ae4);this.AeG.H(Lo);this.AeO.H(Ahk);this.AjH.DK(ZB);this.AjH.DY(
Mw);this.AjH.L(A.jb.Bb);this.AjI.DK(AnJ);this.AjI.DY(NZ);this.AjI.L(A.jb.Bb);this.
AjJ.DK(WH);this.AjJ.DY(AnK);this.AjJ.L(A.jb.Bb);this.AjK.DK(Ahl);this.AjK.DY(Ahm
);this.AjK.L(A.jb.Bb);this.J(this.Background,0);this.J(this.Aag,0);this.J(this.AeP
,0);this.J(this.AeG,0);this.J(this.AeO,0);this.J(this.AjH,0);this.J(this.AjI,0);
this.J(this.AjJ,0);this.J(this.AjK,0);this.Aag.A8e([this,this.AgN]);this.Aag.A8d([
this,this.AgM]);},_Done:function(){this.__proto__=A.Core.O;this.Background._Done(
);this.Aag._Done();this.AeP._Done();this.AeG._Done();this.AeO._Done();this.AjH._Done(
);this.AjI._Done();this.AjJ._Done();this.AjK._Done();A.Core.O._Done.call(this);}
,_ReInit:function(){A.Core.O._ReInit.call(this);this.Background._ReInit();this.Aag.
_ReInit();this.AeP._ReInit();this.AeG._ReInit();this.AeO._ReInit();this.AjH._ReInit(
);this.AjI._ReInit();this.AjJ._ReInit();this.AjK._ReInit();},_Mark:function(D){var
B;A.Core.O._Mark.call(this,D);if((B=this.Background)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Aag)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AeP)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.AeG)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AeO)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.AjH)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
AjI)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AjJ)._cycle!=D)B._Mark(B._cycle=D);
if((B=this.AjK)._cycle!=D)B._Mark(B._cycle=D);},_className:"Demonstrator::ActionsMenu"
};C.L_={Aa2:null,Agw:null,Bi:null,DR:null,Aic:function(G){},AYO:function(s){this.
Aic(s);},_Init:function(aArg){A.Core.O._Init.call(this,aArg);A.acg.Am._Init.call(
this.Aa2={I:this},0);A.acg.Am._Init.call(this.Agw={I:this},0);A.Core.Bi._Init.call(
this.Bi={I:this},0);A.acg.DR._Init.call(this.DR={I:this},0);this.__proto__=C.L_;
this.H(B9);this.Aa2.H(Acg);this.Aa2.L(A.jb.Text);this.Agw.H(Uz);this.Agw.L(A.jb.
Text);this.Agw.Ct(0);this.Bi.Ke(Ko);this.Bi.Kd(NY);this.Bi.DK(PU);this.Bi.DY(Mw);
this.DR.DK(PU);this.DR.DY(NY);this.DR.L(A.jb.Bb);this.J(this.Aa2,0);this.J(this.
Agw,0);this.J(this.Bi,0);this.J(this.DR,0);this.Aa2.Ax(A.aaL(A.aci.Ts));this.Agw.
Ax(A.aaL(A.aci.ASg));this.Bi.BK=[this,this.AYO];},_Done:function(){this.__proto__=
A.Core.O;this.Aa2._Done();this.Agw._Done();this.Bi._Done();this.DR._Done();A.Core.
O._Done.call(this);},_ReInit:function(){A.Core.O._ReInit.call(this);this.Aa2._ReInit(
);this.Agw._ReInit();this.Bi._ReInit();this.DR._ReInit();},_Mark:function(D){var
B;A.Core.O._Mark.call(this,D);if((B=this.Aa2)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Agw)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Bi)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.DR)._cycle!=D)B._Mark(B._cycle=D);},_className:"Demonstrator::ActionsItem"
};C.AeG={AeT:null,Aic:function(G){var AfP=A.ab0(this.AeT.String,0,10);var ByE=A.
_GetAutoObject(A.acp.K5).Az9(AfP);if(ByE){AfP=AfP+1;this.AeT.R(AfP.toFixed());}}
,_Init:function(aArg){C.L_._Init.call(this,aArg);C.AqJ._Init.call(this.AeT={I:this
},0);this.__proto__=C.AeG;this.AeT.H(AnL);this.AeT.R(AnM);this.AeT.L(A.jb.Text);
this.J(this.AeT,-1);this.Aa2.Ax(A.aaL(A.ach.Amy));},_Done:function(){this.__proto__=
C.L_;this.AeT._Done();C.L_._Done.call(this);},_ReInit:function(){C.L_._ReInit.call(
this);this.AeT._ReInit();},_Mark:function(D){var B;C.L_._Mark.call(this,D);if((B=
this.AeT)._cycle!=D)B._Mark(B._cycle=D);},_className:"Demonstrator::ScanAction"};
C.AeP={Uk:null,OE:null,A2t:0,Init:function(aArg){var B;A.zX([this,this.BxM],[B=A.
_GetAutoObject(A.acp.K5),B.ARb,B.ARR],0);A.zX([this,this.AzE],[B=A._GetAutoObject(
A.Device.Device),B.AqP,B.AsF],0);A.pe([this,this.AzE],this);},Ai:function(Ae){C.
L_.Ai.call(this,Ae);this.OE.Y(!A._GetAutoObject(A.acp.K5).Awt);},Aic:function(G){
var B;A._GetAutoObject(A.acp.K5).Bcx(this);},AzE:function(G){if(A._GetAutoObject(
A.Device.Device).TemperatureUnit!==this.A2t){switch(A._GetAutoObject(A.Device.Device
).TemperatureUnit){case 0:this.OE.R(A.abk(A._GetAutoObject(A.acp.K5).ArY/100,0,1
));break;case 1:{var AtI=A._GetAutoObject(A.Device.Converter).ATr(A._GetAutoObject(
A.acp.K5).ArY/100,0,A._GetAutoObject(A.Device.Device).TemperatureUnit);this.OE.R(
A.abk(AtI,0,1));}break;default:A.ab5("%s%e",Aw3,A._GetAutoObject(A.Device.Device
).TemperatureUnit);}this.A2t=A._GetAutoObject(A.Device.Device).TemperatureUnit;}
},Bxv:function(G){var B;var AtH=A.abX(this.OE.String,0);AtH=A._GetAutoObject(A.Device.
Converter).ATr(AtH,A._GetAutoObject(A.Device.Device).TemperatureUnit,0);AtH*=100;
A._GetAutoObject(A.acp.K5).A8x(Math.round(AtH)|0);},BxM:function(G){this.An();},
_Init:function(aArg){C.L_._Init.call(this,aArg);A.acq.Uk._Init.call(this.Uk={I:this
},0);C.OE._Init.call(this.OE={I:this},0);this.__proto__=C.AeP;var B;this.Uk.H(Aw4
);this.Uk.A7_(A.aaR(A.acf.A3k));this.OE.H(AkG);this.OE.R(Aw5);this.OE.L(A.jb.Text
);this.OE.BjB(true);this.A2t=A._GetAutoObject(A.Device.Device).TemperatureUnit;this.
J(this.Uk,0);this.J(this.OE,0);this.Aa2.Ax(A.aaL(A.ach.Aa1));this.Uk.Au([B=A._GetAutoObject(
A.acp.K5),B.ARb,B.ARR]);this.Uk.OnSetAppearance(A._GetAutoObject(A.acx.Aub));this.
OE.Dj=[this,this.Bxv];this.Init(aArg);},_Done:function(){this.__proto__=C.L_;this.
Uk._Done();this.OE._Done();C.L_._Done.call(this);},_ReInit:function(){C.L_._ReInit.
call(this);this.Uk._ReInit();this.OE._ReInit();this.Uk.A7_(A.aaR(A.acf.A3k));},_Mark:
function(D){var B;C.L_._Mark.call(this,D);if((B=this.Uk)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.OE)._cycle!=D)B._Mark(B._cycle=D);},_className:"Demonstrator::TemperatureAction"
};C.Aqs={Q:null,Cz:null,Bi:null,Af9:null,AmD:null,AmC:null,Aqx:null,Text:null,Hc:
null,Am:null,CR:null,Aqw:null,Aqy:null,AoF:false,Bg:function(aSize){this.Hc.H(A.
abK(this.Hc.M,aSize));this.Cz.Awz(1);this.Cz.Jh(0,40);this.Cz.E_(0,aSize[0]-20,20
,12.5,12.5,-90,90,10);this.Cz.E_(0,20,20,12.5,12.5,90,270,10);this.Cz.Vj(0);},Ai:
function(Ae){var B;var F;A.Core.O.Ai.call(this,Ae);var Ip=((Ae&0x40)===0x40);if(
Ip){if(!!this.Q)this.Text.R((F=this.Q,F[1].call(F[0])));this.Af9.Ar(true);this.Am.
Y(false);}else{if(!!this.Q)this.Text.R((F=this.Q,F[1].call(F[0])));this.Af9.Ar(false
);this.CR.Y(false);this.Am.Y(true);}this.AoF=Ip;},Aic:function(G){var B;if(!((this.
T&0x80)===0x80))this.Ib().ALu(this);},A6x:function(G){},A_N:function(s){this.A6x(
s);},BhC:function(G){var B;var F;if(!this.Q||!(F=this.Q,F[1].call(F[0])).length)
this.CR.H(A.abM(this.CR.M,A.aaI(this.Text.M)[0]));else{this.CR.H(A.abM(this.CR.M
,this.Text.ANs(0)[2]+2));this.CR.H(A.abO(this.CR.M,this.Text.ANs(0)[1]));this.CR.
H(A.abI(this.CR.M,(B=this.Text.ANs(0))[3]-B[1]));}this.Am.H(A.abM(this.Am.M,this.
Text.M[0]-((B=this.Am.M)[2]-B[0])));},A6v:function(G){},A_M:function(s){this.A6v(
s);},Au:function(E){if(A.aaZ(this.Q,E))return;if(!!this.Q)A.z$([this,this.OX],this.
Q,0);this.Q=E;if(!!E)A.zX([this,this.OX],E,0);if(!!E)A.pe([this,this.OX],this);}
,OX:function(G){this.An();},Bi7:function(G){var B;if(((this.T&0x80)===0x80))this.
Ib().ABz(this);},BcF:function(G){},_Init:function(aArg){A.Core.O._Init.call(this
,aArg);A.Graphics.Hn._Init.call(this.Cz={I:this},0);A.Core.Bi._Init.call(this.Bi={
I:this},0);A.acl.Tn._Init.call(this.Af9={I:this},0);A.Core.BJ._Init.call(this.AmD={
I:this},0);A.Core.BJ._Init.call(this.AmC={I:this},0);A.Core.BJ._Init.call(this.Aqx={
I:this},0);A.acg.Text._Init.call(this.Text={I:this},0);A.acg.Hc._Init.call(this.
Hc={I:this},0);A.acg.Am._Init.call(this.Am={I:this},0);A.acg.AI._Init.call(this.
CR={I:this},0);A.Core.BJ._Init.call(this.Aqw={I:this},0);A.Core.BJ._Init.call(this.
Aqy={I:this},0);this.__proto__=C.Aqs;var B;this.H(Ae5);this.Bi.AW(0x3F);this.Bi.
Ke(Ko);this.Bi.Kd(Asa);this.Bi.DK(OO);this.Bi.DY(PV);this.Af9.Ff(530);this.Af9.T1(
530);this.AmD.Filter=143;this.AmC.Filter=45;this.Aqx.Filter=1;this.Text.AW(0x3F);
this.Text.H(Ae5);this.Text.IZ(true);this.Text.A2(0x12);this.Text.L(0xFFB3B3B3);this.
Hc.H(Ae5);this.Hc.L(0xFFB3B3B3);this.Hc.NO(1);this.Am.H(SN);this.CR.H(Aw6);this.
CR.L(0xFFB3B3B3);this.CR.Y(false);this.Aqw.Filter=138;this.Aqy.Filter=137;this.J(
this.Bi,0);this.J(this.Text,0);this.J(this.Hc,0);this.J(this.Am,0);this.J(this.CR
,0);this.Bi.Lg=[this,this.Aic];this.Af9.Q=[B=this.CR,B.Fe,B.Y];this.AmD.BK=[this
,this.A_N];this.AmD.DS=[this,this.A_N];this.AmC.BK=[this,this.A_M];this.AmC.DS=[
this,this.A_M];this.Aqx.BK=[this,this.Bi7];this.Text.QN([this,this.BhC]);this.Text.
S(A.aaL(A.fl.Ak));this.Hc.YX(this.Cz);this.Am.Ax(null);this.Aqw.BK=[this,this.BcF
];this.Aqy.BK=[this,this.BcF];},_Done:function(){this.__proto__=A.Core.O;this.Cz.
_Done();this.Bi._Done();this.Af9._Done();this.AmD._Done();this.AmC._Done();this.
Aqx._Done();this.Text._Done();this.Hc._Done();this.Am._Done();this.CR._Done();this.
Aqw._Done();this.Aqy._Done();A.Core.O._Done.call(this);},_ReInit:function(){A.Core.
O._ReInit.call(this);this.Cz._ReInit();this.Bi._ReInit();this.Af9._ReInit();this.
AmD._ReInit();this.AmC._ReInit();this.Aqx._ReInit();this.Text._ReInit();this.Hc.
_ReInit();this.Am._ReInit();this.CR._ReInit();this.Aqw._ReInit();this.Aqy._ReInit(
);this.Text.S(A.aaL(A.fl.Ak));},_Mark:function(D){var B;A.Core.O._Mark.call(this
,D);if((B=this.Q)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.Cz)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.Bi)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
Af9)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AmD)._cycle!=D)B._Mark(B._cycle=D);
if((B=this.AmC)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Aqx)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Text)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Hc)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.Am)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
CR)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Aqw)._cycle!=D)B._Mark(B._cycle=D);
if((B=this.Aqy)._cycle!=D)B._Mark(B._cycle=D);},_className:"Demonstrator::InputView"
};C.AdR={Background:null,XZ:null,_Init:function(aArg){A.Core.O._Init.call(this,aArg
);A.acg.AI._Init.call(this.Background={I:this},0);C.XZ._Init.call(this.XZ={I:this
},0);this.__proto__=C.AdR;var B;this.H(SO);this.Background.H(SO);this.XZ.AW(0x1D
);this.XZ.H(Asb);this.J(this.Background,0);this.J(this.XZ,0);this.XZ.Au([B=A._GetAutoObject(
A.acp.Af$),B.A7b,B.AEu]);},_Done:function(){this.__proto__=A.Core.O;this.Background.
_Done();this.XZ._Done();A.Core.O._Done.call(this);},_ReInit:function(){A.Core.O.
_ReInit.call(this);this.Background._ReInit();this.XZ._ReInit();},_Mark:function(
D){var B;A.Core.O._Mark.call(this,D);if((B=this.Background)._cycle!=D)B._Mark(B.
_cycle=D);if((B=this.XZ)._cycle!=D)B._Mark(B._cycle=D);},_className:"Demonstrator::FilterRow"
};C.OE={Init:function(aArg){var B;A.zX([this,this.AzE],[B=A._GetAutoObject(A.Device.
Device),B.AqP,B.AsF],0);A.pe([this,this.AzE],this);},Ai:function(Ae){var B;C.AqJ.
Ai.call(this,Ae);var Ip=((this.T&0x40)===0x40);if(!Ip&&(this.String.length>0))this.
Text.R(((this.String+Aw7)+A._GetAutoObject(A.acj.Temperature).Alc())+String.fromCharCode(
0x0A));else this.Text.R(this.String+String.fromCharCode(0x0A));if(this.Ed>this.String.
length)this.Ed=this.String.length;},AzE:function(G){this.An();},_Init:function(aArg
){C.AqJ._Init.call(this,aArg);this.__proto__=C.OE;this.Init(aArg);},_className:"Demonstrator::TemperatureInputView"
};C.AqJ={B3:null,Dj:null,IL:null,Cl:null,Al_:null,RT:null,KC:null,Bi:null,Text:null
,CR:null,ApS:null,Art:null,Cz:null,Hc:null,AqL:null,Aqg:null,Ap3:null,String:A.jV
,Ed:0,AP:0xFFB3B3B3,AMh:false,ME:false,Bg:function(aSize){this.Hc.H(A.abK(this.Hc.
M,aSize));this.Cz.Awz(1);this.Cz.Jh(0,40);this.Cz.E_(0,aSize[0]-20,20,12.5,12.5,-
90,90,10);this.Cz.E_(0,20,20,12.5,12.5,90,270,10);this.Cz.Vj(0);},Ai:function(Ae
){var B;A.acn.I2.Ai.call(this,Ae);if(((Ae&0x40)===0x40))this.IL.Ar(true);else{this.
IL.Ar(false);this.CR.Y(false);}},A2E:function(G){var B;var A_=this.Text.M;var Nl=
0;var Nm=0;if(this.CR.Ej[0]<A_[0])Nl=A_[0]-this.CR.Ej[0];if(this.CR.Ej[0]>A_[2])
Nl=A_[2]-this.CR.Ej[0];if(this.CR.Ej[1]<A_[1])Nm=A_[1]-this.CR.Ej[1];if(this.CR.
Et[1]>A_[3])Nm=A_[3]-this.CR.Et[1];if(!!Nl||!!Nm)this.Text.Gc(A.abf(this.Text.Bp
,[Nl,Nm]));Nl=this.Text.Bp[0];Nm=this.Text.Bp[1];var CY=[(B=this.Text.Da())[2]-B[
0],B[3]-B[1]];if(CY[0]<=((B=this.Text.M)[2]-B[0]))Nl=0;if(CY[1]<=((B=this.Text.M
)[3]-B[1]))Nm=0;this.Text.Gc([Nl,Nm]);},AlP:function(G){if(!this.B3)return;var A1_=
this.Text.AFA(this.Ed);var pos=this.Text.AeD(A1_);this.CR.DY(A.abe(pos,[0,this.B3.
Ascent]));this.CR.DK(A.abf(pos,[0,this.B3.Descent]));if(this.IL.Bv){this.IL.Ar(false
);this.IL.Ar(true);}if(this.ME){A.pe([this,this.A2E],this);this.ME=false;}},AzA:
function(G){if(!this.A5c(0x80))this.Ib().ALu(this);var Ew=this.Text.ASk(this.Bi.
HT);var US=this.Text.Anm(Ew);if(US!==this.Ed){this.Ed=US;A.pe([this,this.AlP],this
);this.ME=true;}},Azu:function(G){if(!this.B3)return;var Ew=this.Text.AFA(this.Ed
);if(this.Cl.CI===6){Ew=[Ew[0]-1,Ew[1]];if(this.Text.Anm(Ew)===this.Ed){Ew=[Ew[0
],Ew[1]-1];Ew=[this.Text.ABV(Ew[1]).length,Ew[1]];}}if(this.Cl.CI===7){Ew=[Ew[0]+
1,Ew[1]];if(this.Text.Anm(Ew)===this.Ed){Ew=[Ew[0],Ew[1]+1];Ew=[0,Ew[1]];}}var US=
this.Text.Anm(Ew);if(US!==this.Ed){this.Ed=US;A.pe([this,this.AlP],this);this.ME=
true;}},Bcp:function(G){if(!this.Ed)return;this.R(A.ab1(this.String,this.Ed-1,1)
);this.Ed=this.Ed-1;this.ME=true;A.pe(this.Dj,this);},Azv:function(G){if(this.Ed>=
this.String.length)return;this.R(A.ab1(this.String,this.Ed,1));this.ME=true;A.pe(
this.Dj,this);},Bcu:function(G){if(this.String.length>=15)return;var BvW=this.KC.
DI;var AtF=String.fromCharCode(BvW);this.R(A.abU(this.String,AtF,this.Ed));this.
Ed=this.Ed+AtF.length;this.ME=true;A.pe(this.Dj,this);},R:function(E){if(this.String===
E)return;this.String=E;if(this.Ed>(E.length+1))this.Ed=E.length;this.Text.R(E+String.
fromCharCode(0x0A));this.ME=true;this.Text.Gc(Ko);},L:function(E){if(this.AP===E
)return;this.AP=E;this.Text.L(E);this.CR.L(E);this.Hc.L(E);},S:function(E){if(this.
B3===E)return;this.B3=E;this.Text.S(E);this.ME=true;this.Text.Gc(Ko);},BcG:function(
G){if(this.AMh===false)return;if(this.String.indexOf(String.fromCharCode(0x2E),0
)>=0)return;if(this.String.length>=15)return;this.R(A.abU(this.String,Uy,this.Ed
));this.Ed=this.Ed+1;this.ME=true;A.pe(this.Dj,this);},BjB:function(E){if(this.AMh===
E)return;this.AMh=E;if(E===false){var Bdj=this.String.indexOf(String.fromCharCode(
0x2E),0);if(Bdj>=0)this.R(A.abV(this.String,Bdj));}this.ME=true;this.Text.Gc(Ko);
},BxD:function(G){if(this.A5c(0x80))this.Ib().ABz(this);this.An();},Bxq:function(
G){var US=this.String.length;if(US!==this.Ed){this.Ed=US;A.pe([this,this.AlP],this
);this.ME=true;}},Bxu:function(G){if(!!this.Ed){this.Ed=0;A.pe([this,this.AlP],this
);this.ME=true;}},_Init:function(aArg){A.acn.I2._Init.call(this,aArg);A.acl.Tn._Init.
call(this.IL={I:this},0);A.Core.BJ._Init.call(this.Cl={I:this},0);A.Core.BJ._Init.
call(this.Al_={I:this},0);A.Core.BJ._Init.call(this.RT={I:this},0);A.Core.BJ._Init.
call(this.KC={I:this},0);A.Core.Bi._Init.call(this.Bi={I:this},0);A.acg.Text._Init.
call(this.Text={I:this},0);A.acg.DR._Init.call(this.CR={I:this},0);A.Core.BJ._Init.
call(this.ApS={I:this},0);A.Core.BJ._Init.call(this.Art={I:this},0);A.Graphics.Hn.
_Init.call(this.Cz={I:this},0);A.acg.Hc._Init.call(this.Hc={I:this},0);A.Core.BJ.
_Init.call(this.AqL={I:this},0);A.Core.BJ._Init.call(this.Aqg={I:this},0);A.Core.
BJ._Init.call(this.Ap3={I:this},0);this.__proto__=C.AqJ;var B;this.H(Ae5);this.IL.
BY=false;this.IL.Cq=true;this.IL.Ff(500);this.IL.T1(500);this.Cl.Filter=147;this.
Al_.Filter=45;this.RT.Filter=44;this.KC.Filter=143;this.Bi.AW(0x3F);this.Bi.Ke(PV
);this.Bi.Kd(OO);this.Bi.DK(Asa);this.Bi.DY(Ko);this.Bi.AEc(3);this.Text.AW(0x3F
);this.Text.H(Ae5);this.Text.KI(false);this.Text.A2(0x12);this.Text.R(A.jV);this.
Text.L(0xFFB3B3B3);this.CR.DK(Aw8);this.CR.DY(Aw9);this.CR.A8J(2);this.CR.A8I(2);
this.CR.L(0xFFB3B3B3);this.CR.Y(false);this.ApS.Filter=138;this.Art.Filter=137;this.
Hc.H(Ae5);this.Hc.L(0xFFB3B3B3);this.Hc.NO(1);this.AqL.Filter=1;this.Aqg.Filter=
41;this.Ap3.Filter=42;this.J(this.Bi,0);this.J(this.Text,0);this.J(this.CR,0);this.
J(this.Hc,0);this.IL.Q=[B=this.CR,B.Fe,B.Y];this.Cl.BK=[this,this.Azu];this.Cl.DS=[
this,this.Azu];this.Al_.BK=[this,this.Bcp];this.Al_.DS=[this,this.Bcp];this.RT.BK=[
this,this.Azv];this.RT.DS=[this,this.Azv];this.KC.BK=[this,this.Bcu];this.KC.DS=[
this,this.Bcu];this.Bi.BK=[this,this.AzA];this.Text.QN([this,this.AlP]);this.Text.
S(A.aaL(A.fl.Ak));this.B3=A.aaL(A.fl.Ak);this.ApS.BK=[this,this.BcG];this.Art.BK=[
this,this.BcG];this.Hc.YX(this.Cz);this.AqL.BK=[this,this.BxD];this.Aqg.BK=[this
,this.Bxu];this.Ap3.BK=[this,this.Bxq];},_Done:function(){this.__proto__=A.acn.I2;
this.IL._Done();this.Cl._Done();this.Al_._Done();this.RT._Done();this.KC._Done();
this.Bi._Done();this.Text._Done();this.CR._Done();this.ApS._Done();this.Art._Done(
);this.Cz._Done();this.Hc._Done();this.AqL._Done();this.Aqg._Done();this.Ap3._Done(
);A.acn.I2._Done.call(this);},_ReInit:function(){A.acn.I2._ReInit.call(this);this.
IL._ReInit();this.Cl._ReInit();this.Al_._ReInit();this.RT._ReInit();this.KC._ReInit(
);this.Bi._ReInit();this.Text._ReInit();this.CR._ReInit();this.ApS._ReInit();this.
Art._ReInit();this.Cz._ReInit();this.Hc._ReInit();this.AqL._ReInit();this.Aqg._ReInit(
);this.Ap3._ReInit();this.Text.S(A.aaL(A.fl.Ak));this.S(A.aaL(A.fl.Ak));},_Mark:
function(D){var B;A.acn.I2._Mark.call(this,D);if((B=this.B3)&&(B._cycle!=D))B._Mark(
B._cycle=D);if((B=this.Dj)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.
IL)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Cl)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Al_)._cycle!=D)B._Mark(B._cycle=D);if((B=this.RT)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.KC)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Bi)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Text)._cycle!=D)B._Mark(B._cycle=D);if((B=this.CR)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.ApS)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
Art)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Cz)._cycle!=D)B._Mark(B._cycle=D);
if((B=this.Hc)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AqL)._cycle!=D)B._Mark(B.
_cycle=D);if((B=this.Aqg)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ap3)._cycle!=
D)B._Mark(B._cycle=D);},_className:"Demonstrator::NumberInput"};C.AeO={LabelDataSync:
null,Aic:function(G){var B;A.pe([B=A._GetAutoObject(A.acr.AbV),B.ByW],this);},_Init:
function(aArg){C.L_._Init.call(this,aArg);A.kR.CP._Init.call(this.LabelDataSync={
I:this},0);this.__proto__=C.AeO;this.LabelDataSync.H(AnN);this.LabelDataSync.R(A.
aaR(A.acf.A39));this.LabelDataSync.L(A.jb.Text);this.J(this.LabelDataSync,0);this.
Aa2.Ax(A.aaL(C.ATi));this.LabelDataSync.S(A.aaL(A.fl.Ah));this.LabelDataSync.A5(
A.aaL(A.fl.Ak));},_Done:function(){this.__proto__=C.L_;this.LabelDataSync._Done(
);C.L_._Done.call(this);},_ReInit:function(){C.L_._ReInit.call(this);this.LabelDataSync.
_ReInit();this.LabelDataSync.R(A.aaR(A.acf.A39));this.LabelDataSync.S(A.aaL(A.fl.
Ah));this.LabelDataSync.A5(A.aaL(A.fl.Ak));},_Mark:function(D){var B;C.L_._Mark.
call(this,D);if((B=this.LabelDataSync)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Demonstrator::SyncAction"};C.ATi={_class:function(){return A.aci.Al;},0:{FileName:
"./res_index/DemonstratorSyncIcon.png",Format:A._PIXEL_FORMAT_NATIVE,NoOfFrames:
1,FrameSize:[50,60],FrameDelay:0,_this:null}};C.AaC={TimespanDaysToString:null,ABX:
function(aIndex){if(this.ABS()>aIndex)return this.TimespanDaysToString.BX(aIndex
);A.ab5("%s",Aw_);return A.jV;},ABS:function(){return 4;},C9:function(aIndex){var
AiC=0;switch(aIndex){case 0:AiC=0;break;case 1:AiC=1;break;case 2:AiC=2;break;case
3:AiC=3;break;default:throw new Error(Asc+aIndex.toFixed());}return AiC;},_Init:
function(aArg){A.acv.Ama._Init.call(this,aArg);A.Device.TimespanDaysToString._Init.
call(this.TimespanDaysToString={I:this},0);this.__proto__=C.AaC;},_Done:function(
){this.__proto__=A.acv.Ama;this.TimespanDaysToString._Done();A.acv.Ama._Done.call(
this);},_ReInit:function(){A.acv.Ama._ReInit.call(this);this.TimespanDaysToString.
_ReInit();},_Mark:function(D){var B;A.acv.Ama._Mark.call(this,D);if((B=this.TimespanDaysToString
)._cycle!=D)B._Mark(B._cycle=D);},_className:"Demonstrator::DatePickerUnitDD"};C.
BCC={Gz:0,ATZ:1,G9:2,Year:3};C.ABw={_class:function(){return A.aci.Al;},0:{FileName:
"./res_index/DemonstratorEarTagIcon.png",Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:
2,FrameSize:[37,37],FrameDelay:0,_this:null}};C.AFN={_class:function(){return A.
aci.Al;},0:{FileName:"./res_index/DemonstratorTransponderEarTagIcon.png",Format:
A._PIXEL_FORMAT_ALPHA8,NoOfFrames:2,FrameSize:[37,37],FrameDelay:0,_this:null}};
C._Init=function(){C.ATS.__proto__=A.acn.Menu;C.ASS.__proto__=A.Core.O;C.AK5.__proto__=
C.Ba;C.L$.__proto__=A.Core.O;C.XZ.__proto__=C.Aqs;C.AaD.__proto__=A.Core.O;C.AuW.
__proto__=A.acn.Ag1;C.ALh.__proto__=C.Fo;C.AtS.__proto__=C.Fo;C.Ba.__proto__=A.Core.
O;C.Fo.__proto__=A.Core.O;C.AMf.__proto__=A.acn.AgZ;C.Ag8.__proto__=A.Core.O;C.ALa.
__proto__=C.Ag8;C.U5.__proto__=C.AtS;C.AKG.__proto__=A.Core.O;C.L_.__proto__=A.Core.
O;C.AeG.__proto__=C.L_;C.AeP.__proto__=C.L_;C.Aqs.__proto__=A.Core.O;C.AdR.__proto__=
A.Core.O;C.OE.__proto__=C.AqJ;C.AqJ.__proto__=A.acn.I2;C.AeO.__proto__=C.L_;C.AaC.
__proto__=A.acv.Ama;};C._ReInit=function(){};C.DB=function(D){var B;if((B=C.Background[
0]._this)&&(B._cycle!=D))B._Done(C.Background[0]._this=null);if((B=C.ALD[0]._this
)&&(B._cycle!=D))B._Done(C.ALD[0]._this=null);if((B=C.ALE[0]._this)&&(B._cycle!=
D))B._Done(C.ALE[0]._this=null);if((B=C.ALF[0]._this)&&(B._cycle!=D))B._Done(C.ALF[
0]._this=null);if((B=C.ALG[0]._this)&&(B._cycle!=D))B._Done(C.ALG[0]._this=null);
if((B=C.AOG[0]._this)&&(B._cycle!=D))B._Done(C.AOG[0]._this=null);if((B=C.Filter[
0]._this)&&(B._cycle!=D))B._Done(C.Filter[0]._this=null);if((B=C.AQc[0]._this)&&(
B._cycle!=D))B._Done(C.AQc[0]._this=null);if((B=C.AiW[0]._this)&&(B._cycle!=D))B.
_Done(C.AiW[0]._this=null);if((B=C.ALk[0]._this)&&(B._cycle!=D))B._Done(C.ALk[0].
_this=null);if((B=C.ArL[0]._this)&&(B._cycle!=D))B._Done(C.ArL[0]._this=null);if((
B=C.ATn[0]._this)&&(B._cycle!=D))B._Done(C.ATn[0]._this=null);if((B=C.AF6[0]._this
)&&(B._cycle!=D))B._Done(C.AF6[0]._this=null);if((B=C.AT_[0]._this)&&(B._cycle!=
D))B._Done(C.AT_[0]._this=null);if((B=C.ATi[0]._this)&&(B._cycle!=D))B._Done(C.ATi[
0]._this=null);if((B=C.ABw[0]._this)&&(B._cycle!=D))B._Done(C.ABw[0]._this=null);
if((B=C.AFN[0]._this)&&(B._cycle!=D))B._Done(C.AFN[0]._this=null);};return C;})(
);

/* VitalControl demonstration application, © Urban GmbH & Co.KG 2023 */