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
* Version  : 13.03
* Profile  : WebGLDemonstrator
* Platform : Web.WebGL.RGBA8888
*
*******************************************************************************/

var index;if(!index)throw new Error("The application file '_project.js' isn't yet loaded!"
);if(index.acw)throw new Error("The unit file 'Demonstrator.js' included twice!"
);index.acw=(function(){var A=index;var C={};
var Cf=[0,0,370,60];var BD=[360,0,370,60];var E8=[0,0,370,710];var Hs="Unknown animalType";
var I0=[58,10,120,50];var Iw=[0,0,60,60];var O$=[120,0,360,60];var Qc="\u2015";var
Qd=[0,0,240,60];var CR=[0,0,40,60];var Ff=[100,0,130,60];var L9=[43,0,100,60];var
Qe=[125,0,240,60];var J9=[0,0];var Oh=[100,0];var Qf=[100,60];var MR=[0,60];var Tf=[
107,0];var U1=[240,0];var Aab=[240,60];var Xf=[107,60];var Ix="%d.%m.%Y";var U2=
"Unhandled date unit: ";var Aac=[0,0,200,180];var U3=[36,0,200,30];var Aad=[0,30
,160,60];var Xg="Text";var Aae=[0,70,40,110];var Aaf=[44,70,156,110];var U4=[160
,70,200,110];var Xh=[7,2,27,25];var Pa=[0,30,170,180];var Aag=[170,34,190,57];var
Oi=[0,0,40,40];var Rq=[0,40];var Xi=[40,40];var Xj=[40,0];var Tg=[0,0,370,100];var
Xk=[20,0,290,60];var Aah=[0,60,370,100];var Xl="Cap";var Xm=[20,0,370,60];var Th=[
310,0,370,60];var Ti=[370,0];var Tj=[370,60];var Aai="UpdateData is called for the base class ListItemBase. Please make "+
"sure this method is implemented by a derived class.";var Tk=".";var Aaj=[0,0,170
,150];var AfG=[0,59,170,90];var Aak=[110,0,170,150];var Xn=[0,30];var Aal=[50,0,
100,150];var Xo=[0,0,40,150];var AhY=[0,0,370,240];var K3=[0,60,370,710];var AcS=[
0,0,370,300];var LB=[0,60,370,300];var AhZ=[0,60,370,120];var Aoj=[0,120,370,180
];var Oj=[0,180,370,240];var Xp=[0,240,370,300];var Aam=[370,120];var AfH=[0,120
];var Ah0=[370,180];var AcT=[0,180];var U5=[370,240];var Aok=[0,240];var Aol=[370
,300];var Aom=[0,300];var Aon=[0,0,50,60];var Ale=[50,0,100,60];var As6="Unhandled scan type";
var Ayc=[3,11,253,51];var Ayd=[57,0];var Pb=[57,60];var Rr=[100,10,370,50];var Aye=
"276000901234567";var U6=[3,10,57,50];var As7=[3,11,55,50];var Ayf="Unhandled temperature unit";
var Ayg=[110,0,260,60];var Alf=[235,10,370,50];var Ayh="39.5";var AfI=[0,0,270,40
];var Aoo=[270,0];var I1=[270,40];var Aop=[150,0,170,40];var As8=[205,10,207,30];
var Xq=[0,0,370,40];var As9=[50,0,320,40];var As_=" ";var As$=[135,23];var Aoq=[
135,0];var Ata=[100,0,370,60];var Alg="Error: Nullpointer Exception";var Ayi="Unknown Date Piecker Unit Index: ";
var Ayj="0";var Ayk="Unhandled scan type:";
C.Background={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/DemonstratorBackground.png"
,Format:A._PIXEL_FORMAT_NATIVE,NoOfFrames:1,FrameSize:[1000,740],FrameDelay:0,_this:
null}};C.ANh={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/DemonstratorButtonLeft.png"
,Format:A._PIXEL_FORMAT_NATIVE,NoOfFrames:1,FrameSize:[40,40],FrameDelay:0,_this:
null}};C.ANi={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/DemonstratorButtonLeftPressed.png"
,Format:A._PIXEL_FORMAT_NATIVE,NoOfFrames:1,FrameSize:[40,40],FrameDelay:0,_this:
null}};C.ANj={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/DemonstratorButtonRight.png"
,Format:A._PIXEL_FORMAT_NATIVE,NoOfFrames:1,FrameSize:[40,40],FrameDelay:0,_this:
null}};C.ANk={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/DemonstratorButtonRightPressed.png"
,Format:A._PIXEL_FORMAT_NATIVE,NoOfFrames:1,FrameSize:[40,40],FrameDelay:0,_this:
null}};C.AQn={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/DemonstratorIconDatePicker.png"
,Format:A._PIXEL_FORMAT_NATIVE,NoOfFrames:1,FrameSize:[20,23],FrameDelay:0,_this:
null}};C.Filter={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/DemonstratorFilter.png"
,Format:A._PIXEL_FORMAT_NATIVE,NoOfFrames:1,FrameSize:[15,16],FrameDelay:0,_this:
null}};C.AR_={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/DemonstratorMenuIcon.png"
,Format:A._PIXEL_FORMAT_NATIVE,NoOfFrames:1,FrameSize:[20,16],FrameDelay:0,_this:
null}};C.Ajv={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/DemonstratorArrowRight.png"
,Format:A._PIXEL_FORMAT_NATIVE,NoOfFrames:1,FrameSize:[17,16],FrameDelay:0,_this:
null}};C.AM0={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/DemonstratorArrowDown.png"
,Format:A._PIXEL_FORMAT_NATIVE,NoOfFrames:1,FrameSize:[17,16],FrameDelay:0,_this:
null}};C.AsE={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/DemonstratorScanIcon.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:2,FrameSize:[37,37],FrameDelay:0,_this:
null}};C.AVx={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/DemonstratorTemperatureIcon.png"
,Format:A._PIXEL_FORMAT_NATIVE,NoOfFrames:1,FrameSize:[17,37],FrameDelay:0,_this:
null}};C.AV6={Aeh:null,AX:null,AR:null,Background:null,Ic:null,AD:null,IX:null,Do:
null,Ln:null,A8e:null,A8F:0,Bl:function(aSize){A.acn.Menu.Bl.call(this,aSize);this.
IX.H(A.abP(this.IX.M,this.AD.OY));this.IX.H([].concat(this.IX.M.slice(0,3),aSize[
1]));},Ai:function(Ae){var B;A.acn.Menu.Ai.call(this,Ae);var IG=((Ae&0x40)===0x40
);if(IG&&(this.AD.Gu<0))this.AD.GW(0);},N8:function(E){if(this.Ln===E)return;this.
Ln=E;this.AD.N8(E);},BnS:function(E){var B;if(this.A8e===E)return;if(!!this.Aeh){
this.HR(this.Aeh);this.Aeh=null;}if(!!E){this.Aeh=(C.FE.isPrototypeOf(B=A._NewObject(
E,0))?B:null);this.Aeh.A_N([this,this.Aku]);this.Aeh.A_O([this,this.Akv]);this.Aeh.
BnY(null);this.J(this.Aeh,0);this.AD.A_U((B=this.Aeh.M)[3]-B[1]);}else this.AD.A_U(
0);this.IX.H(A.abP(this.IX.M,this.AD.OY));A.pe([this,this.Fk],this);this.A8e=E;}
,Hn:function(G){var B;var Gh=this.AD.G7;var Aa=(C.Ba.isPrototypeOf(B=this.AD.Cj)?
B:null);if(!Aa)return;Aa.Zy(this.AX);Aa.Ch(Gh);Aa.ZC(this.AR);Aa.H(A.abK(Aa.M,[(
B=this.AD.M)[2]-B[0],this.AD.GP]));},Zy:function(E){var B;if(this.AX===E)return;
if(!!this.AX){A.z9([this,this.Ch],this.AX,0);A.z$([this,this.Aoc],[B=this.AX,B.Fp
,B.Ft],0);}this.AX=E;if(!!E){A.zV([this,this.Ch],E,0);A.zX([this,this.Aoc],[E,E.
Fp,E.Ft],0);}A.pe([this,this.Ch],this);A.pe([this,this.Aoc],this);},Ch:function(
G){if(!!this.AX){this.AD.JD(this.AX.B8());this.AD.AbO(0,this.AD.A0-1);}else this.
AD.JD(0);if(this.A8F!==this.AD.A0){this.AD.AB0(null,null);this.A8F=this.AD.A0;}A.
pe([this,this.Fk],this);},Akv:function(G){var B;this.H(A.abI(this.M,(B=this.AD.AO5(
))[3]-B[1]));},Aku:function(G){this.H(A.abI(this.M,180));},A92:function(G){var JH=(
A.Core.BF.isPrototypeOf(G)?G:null);var Gh=this.AD.Gu;if(JH.CP===4)Gh=Gh-1;else if(
JH.CP===5)Gh=Gh+1;else if((JH.Dy>=0x30)&&(JH.Dy<=0x39))A._GetAutoObject(A.aco.AgR
).Ez(JH.Dy);else if(JH.CP===45)A._GetAutoObject(A.aco.AgR).Delete();else JH.Mx=true;
if((Gh<0)||(Gh>=this.AD.A0))return;this.AD.GW(Gh);this.BzJ(Gh,true);},Bzy:function(
G){var Aa=(C.Ba.isPrototypeOf(G)?G:null);this.AD.GW(Aa.Ht);},BzJ:function(Ha,Ac6
){var B;if((Ha<0)||(Ha>=this.AD.A0))return;var Az=this.AD.Aq2(Ha,Ha);var Be=this.
AD.M;Be=A.abP(Be,(B=this.AD.AO5())[3]-B[1]);Be=A.abI(Be,(((B=this.AD.M)[3]-B[1])-((
B=this.AD.AO5())[3]-B[1]))-((B=this.AD.BjP())[3]-B[1]));var LT=A.lb(Az,Be);if((!
Ac6&&!((LT[0]>=LT[2])||(LT[1]>=LT[3])))||(Ac6&&A.aaY(LT,Az)))return;var Bq=0;if(
Az[3]>Be[3])Bq=Az[3]-Be[3];if(Bq>(Az[1]-Be[1]))Bq=(Az[3]-Be[1])-this.AD.GP;this.
AD.Gc(this.AD.Br-Bq);},Aoc:function(G){this.AD.GW(-1);},Fk:function(G){var B;this.
IX.MH(this.AD.GP*this.AD.A0);this.IX.MJ(((B=this.AD.M)[3]-B[1])-this.AD.OY);this.
IX.MI(-this.AD.Br);},_Init:function(aArg){A.acn.Menu._Init.call(this,aArg);A.acg.
AL._Init.call(this.Background={I:this},0);A.Core.Ic._Init.call(this.Ic={I:this},
0);A.Core.CM._Init.call(this.AD={I:this},0);A.kR.Ay._Init.call(this.IX={I:this},
0);A.Core.BF._Init.call(this.Do={I:this},0);this.__proto__=C.AV6;this.H(Cf);this.
Background.A1(0x3);this.Background.H(Cf);this.Ic.A1(0x3F);this.Ic.H(Cf);this.AD.
A1(0x3F);this.AD.H(Cf);this.AD.Ae$(60);this.AD.JD(0);this.AD.N8(this.Ln);this.IX.
A1(0x3A);this.IX.H(BD);this.IX.L(0xFF808080);this.J(this.Background,0);this.J(this.
Ic,0);this.J(this.AD,0);this.J(this.IX,0);this.AD.Em=[this,this.Fk];this.AD.Hn=[
this,this.Hn];this.AD.Axc(this.Ic);this.AR=[this,this.Bzy];this.Do.BG=[this,this.
A92];this.Do.D1=[this,this.A92];},_Done:function(){this.__proto__=A.acn.Menu;this.
Background._Done();this.Ic._Done();this.AD._Done();this.IX._Done();this.Do._Done(
);A.acn.Menu._Done.call(this);},_ReInit:function(){A.acn.Menu._ReInit.call(this);
this.Background._ReInit();this.Ic._ReInit();this.AD._ReInit();this.IX._ReInit();
this.Do._ReInit();},_Mark:function(D){var B;A.acn.Menu._Mark.call(this,D);if((B=
this.Aeh)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.AX)&&(B._cycle!=D))B._Mark(
B._cycle=D);if((B=this.AR)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.
Background)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ic)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.AD)._cycle!=D)B._Mark(B._cycle=D);if((B=this.IX)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Do)._cycle!=D)B._Mark(B._cycle=D);},_className:"Demonstrator::VerticalMenu"
};C.AU0={GK:null,AL:null,BW:null,Init:function(aArg){var B;A.zX([this,this.GH],[
B=A._GetAutoObject(A.aco.GM),B.A9F,B.A_4],0);A.pe([this,this.GH],this);},Ab$:function(
E){if(this.GK===E)return;if(!!this.GK)this.HR(this.GK);this.GK=E;if(!!this.GK)this.
J(this.GK,0);this.Bb(E);this.AhG(E,this.BW);this.Am();},GH:function(G){var B;if(
!!A._GetAutoObject(A.aco.GM).AsH)this.Ab$((C.AhL.isPrototypeOf(B=A._NewObject(A.
_GetAutoObject(A.aco.GM).AsH,0))?B:null));else this.Ab$(null);},_Init:function(aArg
){A.Core.P._Init.call(this,aArg);A.acg.AL._Init.call(this.AL={I:this},0);A.acg.BW.
_Init.call(this.BW={I:this},0);this.__proto__=C.AU0;this.H(E8);this.AL.A1(0x3F);
this.AL.H(E8);this.BW.H(E8);this.BW.L(0xFF000000);this.J(this.AL,0);this.J(this.
BW,0);this.Init(aArg);},_Done:function(){this.__proto__=A.Core.P;this.AL._Done();
this.BW._Done();A.Core.P._Done.call(this);},_ReInit:function(){A.Core.P._ReInit.
call(this);this.AL._ReInit();this.BW._ReInit();},_Mark:function(D){var B;A.Core.
P._Mark.call(this,D);if((B=this.GK)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.
AL)._cycle!=D)B._Mark(B._cycle=D);if((B=this.BW)._cycle!=D)B._Mark(B._cycle=D);}
,_className:"Demonstrator::SelectionArea"};C.AMJ={ABF:0,Js:0,Background:null,V:null
,Ajq:null,Ad0:null,XY:null,Ad1:null,Mr:null,Mn:0,LN:false,KM:false,CQ:function(){
this.Am();},Ai:function(Ae){var B;C.Ba.Ai.call(this,Ae);var Hf=((Ae&0x10)===0x10
);var Fw=((Ae&0x20)===0x20);var IG=((Ae&0x40)===0x40);if(!Hf){this.Background.L(
0xFFAAAAAA);this.V.L(0xFF888888);this.Mr.As(false);this.Mr.Z(false);}else if(IG){
this.Background.L(A.jb.AV);this.V.L(A.jb.Bm);this.Mr.As(true);this.Mr.Z(true);}else
if(Fw){this.Background.L(0xFFE6DED8);this.V.L(0xFF000000);this.Mr.As(true);this.
Mr.Z(true);}else{this.Background.L(0xFFFFFFFF);this.V.L(0xFF000000);this.Mr.As(false
);this.Mr.Z(false);}if(!this.KM&&Fw)A._GetAutoObject(A.aco.GM).A_1(this.ABF);this.
Mr.BnU(this.Js>0);this.Mr.Bom(this.ABF>0);this.V.R(this.Mn.toFixed());this.LN=Hf;
this.KM=Fw;},Ch:function(Ad){if(!this.AX){this.XY.Ax(A.aaL(A.ach.AeD));this.Ad0.
L(A.jb.Afz);return;}this.Ht=Ad;if(!!this.AX){this.Js=this.AX.KT(Ad,26);this.ABF=
this.AX.KT(Ad,22);this.Mn=this.AX.CG(Ad,1);var AlV=this.AX.H7(Ad,11);var AlM=this.
AX.Ja(Ad,17);var LW=this.AX.Ja(Ad,13);var Ih=this.AX.Am1(Ad,14);var Xy=A._GetAutoObject(
A.Device.Helper).AMy(LW,AlV,AlM);switch(Ih){case 0:this.XY.Ax(A.aaL(A.ach.AeD));
break;case 1:this.XY.Ax(A.aaL(A.ach.AvN));break;case 2:this.XY.Ax(A.aaL(A.ach.AvQ
));break;default:A.ab5("%s%e",Hs,Ih);}this.Ad1.Ax(this.XY.Al);this.Ad0.L(A._GetAutoObject(
A.acj.Assessment).Qv(Xy));this.Am();}},_Init:function(aArg){C.Ba._Init.call(this
,aArg);A.acg.AL._Init.call(this.Background={I:this},0);A.kR.CF._Init.call(this.V={
I:this},0);A.acg.Ap._Init.call(this.Ajq={I:this},0);A.acg.Ap._Init.call(this.Ad0={
I:this},0);A.acg.Ap._Init.call(this.XY={I:this},0);A.acg.Ap._Init.call(this.Ad1={
I:this},0);C.Mr._Init.call(this.Mr={I:this},0);this.__proto__=C.AMJ;this.Background.
A1(0x3F);this.Background.H(Cf);this.V.A1(0x3F);this.V.H(I0);this.V.R(A.aaR(A.acf.
GO));this.V.A6(0x11);this.V.L(0xFF000000);this.Ajq.H(Iw);this.Ajq.L(A.jb.Text);this.
Ad0.H(Iw);this.Ad0.L(A.jb.E1);this.XY.H(Iw);this.Ad1.H(Iw);this.Ad1.L(A.jb.Text);
this.Ad1.Cw(1);this.Mr.A1(0x3);this.Mr.H(O$);this.J(this.Background,0);this.J(this.
V,0);this.J(this.Ajq,0);this.J(this.Ad0,0);this.J(this.XY,0);this.J(this.Ad1,0);
this.J(this.Mr,0);this.V.S(A.aaL(A.fl.Af));this.V.AY(A.aaL(A.fl.Ak));this.V.Cm(A.
aaL(A.fl.Bh));this.Ajq.Ax(A.aaL(C.AHE));this.Ad0.Ax(A.aaL(C.AWl));this.XY.Ax(A.aaL(
A.ach.AeD));this.Ad1.Ax(A.aaL(A.ach.AeD));},_Done:function(){this.__proto__=C.Ba;
this.Background._Done();this.V._Done();this.Ajq._Done();this.Ad0._Done();this.XY.
_Done();this.Ad1._Done();this.Mr._Done();C.Ba._Done.call(this);},_ReInit:function(
){C.Ba._ReInit.call(this);this.Background._ReInit();this.V._ReInit();this.Ajq._ReInit(
);this.Ad0._ReInit();this.XY._ReInit();this.Ad1._ReInit();this.Mr._ReInit();this.
V.R(A.aaR(A.acf.GO));this.V.S(A.aaL(A.fl.Af));this.V.AY(A.aaL(A.fl.Ak));this.V.Cm(
A.aaL(A.fl.Bh));this.CQ();},_Mark:function(D){var B;C.Ba._Mark.call(this,D);if((
B=this.Background)._cycle!=D)B._Mark(B._cycle=D);if((B=this.V)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Ajq)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ad0)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.XY)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
Ad1)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Mr)._cycle!=D)B._Mark(B._cycle=D);
},_className:"Demonstrator::AnimalMenuItem"};C.Mr={UH:null,WX:null,Ak2:null,Nx:null
,Oe:null,ZP:null,AcE:null,Av_:false,Ax0:false,CQ:function(){this.Am();},Ai:function(
Ae){var B;A.Core.P.Ai.call(this,Ae);var IG=((Ae&0x40)===0x40);if(IG){this.Nx.L(A.
jb.Bm);this.Oe.L(A.jb.Bm);}else{this.Nx.L(A.jb.Text);this.Oe.L(A.jb.Text);}if(this.
Ax0){this.Nx.R(A.aaR(A.acf.Bpn));if(this.Av_){this.UH.Ax(A.aaL(C.Ax1));this.WX.Ax(
A.aaL(C.Ax1));}else{this.UH.Ax(A.aaL(C.AsE));this.WX.Ax(A.aaL(C.AsE));}}else if(
this.Av_){this.UH.Ax(A.aaL(C.ACX));this.WX.Ax(A.aaL(C.ACX));this.Nx.R(Qc);}var A4D=
this.Ax0||this.Av_;this.UH.Z(A4D);this.WX.Z(A4D);this.Nx.Z(A4D);this.ZP.As(this.
Ax0);},Bom:function(E){if(this.Ax0===E)return;this.Ax0=E;this.Am();},BnU:function(
E){if(this.Av_===E)return;this.Av_=E;this.Am();},_Init:function(aArg){A.Core.P._Init.
call(this,aArg);A.acg.Ap._Init.call(this.UH={I:this},0);A.acg.Ap._Init.call(this.
WX={I:this},0);A.acg.Ap._Init.call(this.Ak2={I:this},0);A.kR.CF._Init.call(this.
Nx={I:this},0);A.kR.CF._Init.call(this.Oe={I:this},0);A.Core.Bn._Init.call(this.
ZP={I:this},0);A.Core.Bn._Init.call(this.AcE={I:this},0);this.__proto__=C.Mr;var
B;this.H(Qd);this.UH.A1(0x6);this.UH.H(CR);this.UH.L(A.jb.CU);this.UH.Cw(1);this.
WX.A1(0x6);this.WX.H(CR);this.WX.L(A.jb.Text);this.Ak2.A1(0xE);this.Ak2.H(Ff);this.
Nx.A1(0x7);this.Nx.H(L9);this.Nx.A6(0x11);this.Nx.L(0xFF000000);this.Oe.A1(0x3);
this.Oe.H(Qe);this.Oe.R(A.aaR(A.acf.Temperature));this.Oe.A6(0x11);this.Oe.L(0xFF000000
);this.ZP.A1(0x3);this.ZP.J1(J9);this.ZP.KA(Oh);this.ZP.DD(Qf);this.ZP.DN(MR);this.
AcE.A1(0x3);this.AcE.J1(Tf);this.AcE.KA(U1);this.AcE.DD(Aab);this.AcE.DN(Xf);this.
J(this.UH,0);this.J(this.WX,0);this.J(this.Ak2,0);this.J(this.Nx,0);this.J(this.
Oe,0);this.J(this.ZP,0);this.J(this.AcE,0);this.UH.Ax(A.aaL(C.AsE));this.WX.Ax(A.
aaL(C.AsE));this.Ak2.Ax(A.aaL(C.AVx));this.Nx.S(A.aaL(A.fl.Af));this.Nx.AY(A.aaL(
A.fl.Ak));this.Nx.Cm(A.aaL(A.fl.Bh));this.Oe.S(A.aaL(A.fl.Af));this.Oe.AY(A.aaL(
A.fl.Ak));this.Oe.Cm(A.aaL(A.fl.Bh));this.ZP.Ls=[B=A._GetAutoObject(A.aco.GM),B.
BfK];this.AcE.Ls=[B=A._GetAutoObject(A.aco.GM),B.Bfv];},_Done:function(){this.__proto__=
A.Core.P;this.UH._Done();this.WX._Done();this.Ak2._Done();this.Nx._Done();this.Oe.
_Done();this.ZP._Done();this.AcE._Done();A.Core.P._Done.call(this);},_ReInit:function(
){A.Core.P._ReInit.call(this);this.UH._ReInit();this.WX._ReInit();this.Ak2._ReInit(
);this.Nx._ReInit();this.Oe._ReInit();this.ZP._ReInit();this.AcE._ReInit();this.
Oe.R(A.aaR(A.acf.Temperature));this.Nx.S(A.aaL(A.fl.Af));this.Nx.AY(A.aaL(A.fl.Ak
));this.Nx.Cm(A.aaL(A.fl.Bh));this.Oe.S(A.aaL(A.fl.Af));this.Oe.AY(A.aaL(A.fl.Ak
));this.Oe.Cm(A.aaL(A.fl.Bh));this.CQ();},_Mark:function(D){var B;A.Core.P._Mark.
call(this,D);if((B=this.UH)._cycle!=D)B._Mark(B._cycle=D);if((B=this.WX)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.Ak2)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Nx
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Oe)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.ZP)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AcE)._cycle!=D)B._Mark(B._cycle=
D);},_className:"Demonstrator::AnimalItemAction"};C.Yz={CQ:function(){this.Am();
},Ai:function(Ae){C.Arn.Ai.call(this,Ae);if(!this.Text.String.length)this.Text.R(
A.aaR(A.acf.Filter));},A8M:function(G){var D5=(A.Core.BF.isPrototypeOf(G)?G:null
);if(!!D5)A._GetAutoObject(A.aco.AgR).Ez(D5.Dy);},A8K:function(G){A._GetAutoObject(
A.aco.AgR).Delete();},_Init:function(aArg){C.Arn._Init.call(this,aArg);this.__proto__=
C.Yz;this.Ap.Ax(A.aaL(C.Filter));},_ReInit:function(){C.Arn._ReInit.call(this);this.
CQ();},_className:"Demonstrator::FilterView"};C.Abo={Dm:null,Ys:null,Sj:null,Yt:
null,DT:null,YN:null,AmN:null,Av:null,Pi:null,Nd:null,Abn:null,FZ:0,AvV:0,AGs:false
,Ai:function(Ae){A.Core.P.Ai.call(this,Ae);this.Sj.R(this.Av.Format(Ix));if(this.
AGs){this.Sj.Z(false);this.YN.Z(false);this.DT.Z(false);this.Yt.Z(false);this.Pi.
As(true);this.Pi.Z(true);this.Nd.Cw(2);this.Nd.ATL(2);this.Nd.H(A.abM(this.Nd.M,
this.Pi.M[2]));}else{this.Sj.Z(true);this.YN.Z(true);this.DT.Z(true);this.Yt.Z(true
);this.Pi.As(false);this.Pi.Z(false);this.Nd.Cw(3);this.Nd.ATL(3);this.Nd.H(A.abM(
this.Nd.M,this.Sj.M[2]));}},BBr:function(G){this.Bn1(!this.AGs);},AdD:function(G
){var F;if(!!this.Dm)this.Uw((F=this.Dm,F[1].call(F[0])));},Acd:function(E){if(A.
aaZ(this.Dm,E))return;if(!!this.Dm)A.z$([this,this.AdD],this.Dm,0);this.Dm=E;if(
!!E)A.zX([this,this.AdD],E,0);if(!!E)A.pe([this,this.AdD],this);},Uw:function(E){
if(this.FZ===E)return;this.FZ=E;this.Av.Initialize(this.FZ);this.BCv(this);this.
Am();},AiJ:function(G){var B;var F;var BP=this.FZ;var Ajd=this.Abn.C7(this.AvV);
this.AJB(Ajd);if(this.Av.Year>2100)this.Av.Initialize2(2100,12,31,0,0,0);this.Uw(((
B=(this.Av.JY()|0))<0)?B+0x100000000:B);if(this.FZ!==BP){if(!!this.Dm)(F=this.Dm
,F[2].call(F[0],this.FZ));A.abo(this.Dm,0);}},Aiv:function(G){var B;var F;var BP=
this.FZ;var Ajd=this.Abn.C7(this.AvV);this.ALo(Ajd);if(this.Av.Year<2000)this.Av.
Initialize2(2000,1,1,0,0,0);this.Uw(((B=(this.Av.JY()|0))<0)?B+0x100000000:B);if(
this.FZ!==BP){if(!!this.Dm)(F=this.Dm,F[2].call(F[0],this.FZ));A.abo(this.Dm,0);
}},Bnx:function(E){if(this.AvV===E)return;this.AvV=E;},Bn1:function(E){if(this.AGs===
E)return;this.AGs=E;this.Am();},BB3:function(G){var B;var F;var BP=this.FZ;this.
Av.Lu(this.Pi.AEU());this.Av.UA(this.Pi.AEZ());this.Av.Year=this.Pi.ArM();this.Uw(((
B=(this.Av.JY()|0))<0)?B+0x100000000:B);if(this.FZ!==BP){if(!!this.Dm)(F=this.Dm
,F[2].call(F[0],this.FZ));A.abo(this.Dm,0);}},BCv:function(G){this.Pi.Lu(this.Av.
GL);this.Pi.UA(this.Av.Hl);this.Pi.AkI(this.Av.Year);},AJB:function(Azh){var B;switch(
Azh){case 0:if(this.Av.GL<this.Av.Zu())this.Av.Lu(this.Av.GL+1);else{this.Av.Lu(
1);this.AJB(2);}break;case 1:if((this.Av.GL+7)<=this.Av.Zu())this.Av.Lu(this.Av.
GL+7);else{this.Av.Lu((7-this.Av.Zu())+this.Av.GL);this.AJB(2);}break;case 2:if(
this.Av.Hl<12)this.Av.UA(this.Av.Hl+1);else{this.Av.UA(1);this.AJB(3);}break;case
3:this.Av.Year++;break;default:throw new Error(U2+Azh.toFixed());}},ALo:function(
Azh){var B;switch(Azh){case 0:if(this.Av.GL>1)this.Av.Lu(this.Av.GL-1);else{this.
ALo(2);this.Av.Lu(this.Av.Zu());}break;case 1:if((this.Av.GL-7)>0)this.Av.Lu(this.
Av.GL-7);else{this.ALo(2);this.Av.Lu(this.Av.Zu()-(7-this.Av.GL));}break;case 2:
if(this.Av.Hl>1)this.Av.UA(this.Av.Hl-1);else{this.Av.UA(12);this.ALo(3);}break;
case 3:this.Av.Year--;break;default:throw new Error(U2+Azh.toFixed());}},BlF:function(
){return this.AvV;},_Init:function(aArg){A.Core.P._Init.call(this,aArg);A.acg.Text.
_Init.call(this.Ys={I:this},0);A.acg.Text._Init.call(this.Sj={I:this},0);C.AvL._Init.
call(this.Yt={I:this},0);A.acr.DT._Init.call(this.DT={I:this},0);C.AvL._Init.call(
this.YN={I:this},0);A.acg.Ap._Init.call(this.AmN={I:this},0);A.Core.Bs._Init.call(
this.Av={I:this},0);C.ANX._Init.call(this.Pi={I:this},0);C.AvL._Init.call(this.Nd={
I:this},0);C.Abn._Init.call(this.Abn={I:this},0);this.__proto__=C.Abo;this.H(Aac
);this.Ys.H(U3);this.Ys.A6(0x11);this.Ys.R(A.aaR(A.acf.Date));this.Ys.L(0xFF000000
);this.Sj.H(Aad);this.Sj.A6(0x11);this.Sj.R(Xg);this.Sj.L(0xFF000000);this.Yt.H(
Aae);this.Yt.A_D(200);this.DT.H(Aaf);this.DT.Ar5(120);this.DT.GP=30;this.DT.ATm(
A.jb.CU);this.DT.A_e(A.jb.CU);this.DT.A_j(A.jb.CU);this.DT.ATn(A.jb.Text);this.DT.
A_k(A.jb.Text);this.DT.A_f(A.jb.AV);this.DT.A_l(A.jb.Bm);this.DT.A_i(A.jb.AV);this.
DT.A_h(A.jb.Text);this.YN.H(U4);this.YN.A_D(200);this.AmN.H(Xh);this.Pi.H(Pa);this.
Nd.H(Aag);this.Nd.Cw(3);this.Nd.ATL(3);this.Nd.L(A.jb.Text);this.J(this.Ys,0);this.
J(this.Sj,0);this.J(this.Yt,0);this.J(this.DT,0);this.J(this.YN,0);this.J(this.AmN
,0);this.J(this.Pi,0);this.J(this.Nd,0);this.Ys.S(A.aaL(A.fl.Ak));this.Sj.S(A.aaL(
A.fl.EK));this.Yt.AR=[this,this.Aiv];this.Yt.DC(A.aaL(C.ANh));this.Yt.ATM(A.aaL(
C.ANi));this.DT.Au([this,this.BlF,this.Bnx]);this.DT.A_r(this.Abn);this.DT.ArX(A.
aaL(A.fl.Ak));this.DT.AwS(A.aaL(A.fl.Ak));this.YN.AR=[this,this.AiJ];this.YN.DC(
A.aaL(C.ANj));this.YN.ATM(A.aaL(C.ANk));this.AmN.Ax(A.aaL(C.AQn));this.Pi.Dk=[this
,this.BB3];this.Nd.AR=[this,this.BBr];this.Nd.DC(A.aaL(A.ach.Ajw));this.Nd.ATM(A.
aaL(A.ach.Ajw));},_Done:function(){this.__proto__=A.Core.P;this.Ys._Done();this.
Sj._Done();this.Yt._Done();this.DT._Done();this.YN._Done();this.AmN._Done();this.
Av._Done();this.Pi._Done();this.Nd._Done();this.Abn._Done();A.Core.P._Done.call(
this);},_ReInit:function(){A.Core.P._ReInit.call(this);this.Ys._ReInit();this.Sj.
_ReInit();this.Yt._ReInit();this.DT._ReInit();this.YN._ReInit();this.AmN._ReInit(
);this.Av._ReInit();this.Pi._ReInit();this.Nd._ReInit();this.Abn._ReInit();this.
Ys.R(A.aaR(A.acf.Date));this.Ys.S(A.aaL(A.fl.Ak));this.Sj.S(A.aaL(A.fl.EK));this.
DT.ArX(A.aaL(A.fl.Ak));this.DT.AwS(A.aaL(A.fl.Ak));},_Mark:function(D){var B;A.Core.
P._Mark.call(this,D);if((B=this.Dm)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((
B=this.Ys)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Sj)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Yt)._cycle!=D)B._Mark(B._cycle=D);if((B=this.DT)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.YN)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AmN)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.Av)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Pi
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Nd)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Abn)._cycle!=D)B._Mark(B._cycle=D);},_className:"Demonstrator::DateSelector"
};C.AvL={C_:null,Axy:null,AOb:null,AR:null,Bo:null,Do:null,CT:null,Hx:null,YG:null
,APY:0,T1:0,AUt:0,AQ:0xFFFFFFFF,A2Q:false,LN:false,KM:false,Qz:false,Ai:function(
Ae){var B;A.acn.AhC.Ai.call(this,Ae);var Hf=((Ae&0x10)===0x10);var Fw=((Ae&0x20)===
0x20);var GE=this.CT.Down&&this.CT.YQ;if(!Hf)this.Hx.Ax(this.AOb);else if(GE){this.
Hx.Ax(this.Axy);this.Hx.Cw(this.AUt);}else{this.Hx.Ax(this.C_);this.Hx.Cw(this.T1
);}this.Hx.L(this.AQ);this.LN=Hf;this.KM=Fw;this.Qz=GE;},Qy:function(G){this.Am(
);A.pe(this.AR,this);},AiT:function(G){if(this.CT.Down)return;if(this.Do.Acq)return;
this.Am();if(this.Bo.Bw){A.pe(this.AR,this);this.Bo.As(false);}this.Bo.As(true);
},Bfs:function(G){this.Am();},AAW:function(G){if(!this.CT.YQ)return;if(this.CT.NQ
)return;if((this.YG.VP<=0)||(this.CT.Jy<this.YG.VP)){if(this.CT.Jy>=this.Bo.VP)A.
pe(this.AR,this);else this.Bo.As(true);}this.YG.As(false);},AAV:function(G){this.
YG.As(true);if(this.Bo.Bw){A.pe(this.AR,this);this.Bo.As(false);}},DC:function(E
){if(this.C_===E)return;this.C_=E;this.Am();},ATM:function(E){if(this.Axy===E)return;
this.Axy=E;this.Am();},A3P:function(G){if(!this.CT.YQ)return;if(this.CT.NQ)return;
if((this.APY>=0)&&this.A2Q){this.A2Q=false;this.YG.As(true);A.pe(this.AR,this);}
},A_D:function(E){if(this.APY===E)return;this.APY=E;this.YG.WQ(E);},BAV:function(
G){this.A2Q=true;},Cw:function(E){if(this.T1===E)return;this.T1=E;this.Am();},ATL:
function(E){if(this.AUt===E)return;this.AUt=E;this.Am();},L:function(E){if(this.
AQ===E)return;this.AQ=E;this.Am();},_Init:function(aArg){A.acn.AhC._Init.call(this
,aArg);A.Core.Timer._Init.call(this.Bo={I:this},0);A.Core.BF._Init.call(this.Do={
I:this},0);A.Core.Bn._Init.call(this.CT={I:this},0);A.acg.Ap._Init.call(this.Hx={
I:this},0);A.Core.Timer._Init.call(this.YG={I:this},0);this.__proto__=C.AvL;this.
H(Oi);this.Bo.P0(0);this.Bo.WQ(50);this.Do.Filter=149;this.CT.A1(0x3F);this.CT.J1(
Rq);this.CT.KA(Xi);this.CT.DD(Xj);this.CT.DN(J9);this.CT.Afj=0xF;this.CT.AFN(100
);this.Hx.A1(0x3F);this.Hx.H(Oi);this.Hx.A6(0x12);this.YG.P0(0);this.J(this.CT,0
);this.J(this.Hx,0);this.Bo.MK=[this,this.Qy];this.Do.BG=[this,this.AiT];this.CT.
AE5=[this,this.Bfs];this.CT.Awe=[this,this.Bfs];this.CT.D1=[this,this.A3P];this.
CT.Ls=[this,this.AAW];this.CT.BG=[this,this.AAV];this.Hx.Ax(A.aaL(A.aci.TX));this.
C_=A.aaL(A.aci.TX);this.Axy=A.aaL(A.aci.TX);this.AOb=A.aaL(A.aci.TX);this.YG.MK=[
this,this.BAV];},_Done:function(){this.__proto__=A.acn.AhC;this.Bo._Done();this.
Do._Done();this.CT._Done();this.Hx._Done();this.YG._Done();A.acn.AhC._Done.call(
this);},_ReInit:function(){A.acn.AhC._ReInit.call(this);this.Bo._ReInit();this.Do.
_ReInit();this.CT._ReInit();this.Hx._ReInit();this.YG._ReInit();},_Mark:function(
D){var B;A.acn.AhC._Mark.call(this,D);if((B=this.C_)&&(B._cycle!=D))B._Mark(B._cycle=
D);if((B=this.Axy)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.AOb)&&(B._cycle
!=D))B._Mark(B._cycle=D);if((B=this.AR)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D
);if((B=this.Bo)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Do)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.CT)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Hx)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.YG)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Demonstrator::IconButton"};C.AMX={PF:null,V:null,Aev:null,_Init:function(aArg){
C.FE._Init.call(this,aArg);A.acg.AL._Init.call(this.PF={I:this},0);A.acg.Text._Init.
call(this.V={I:this},0);C.Aev._Init.call(this.Aev={I:this},0);this.__proto__=C.AMX;
this.H(Tg);this.PF.A1(0x1D);this.PF.H(Cf);this.PF.L(0xFFE6E6E6);this.V.A1(0x1D);
this.V.H(Xk);this.V.A6(0x11);this.V.R(A.aaR(A.acf.A5F));this.V.L(0xFF000000);this.
Aev.H(Aah);this.J(this.PF,0);this.J(this.V,0);this.J(this.Aev,0);this.V.S(A.aaL(
A.fl.Af));},_Done:function(){this.__proto__=C.FE;this.PF._Done();this.V._Done();
this.Aev._Done();C.FE._Done.call(this);},_ReInit:function(){C.FE._ReInit.call(this
);this.PF._ReInit();this.V._ReInit();this.Aev._ReInit();this.V.R(A.aaR(A.acf.A5F
));this.V.S(A.aaL(A.fl.Af));},_Mark:function(D){var B;C.FE._Mark.call(this,D);if((
B=this.PF)._cycle!=D)B._Mark(B._cycle=D);if((B=this.V)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Aev)._cycle!=D)B._Mark(B._cycle=D);},_className:"Demonstrator::AnimalsHeader"
};C.AuK={PF:null,V:null,AeX:null,AeV:null,Bn:null,DL:Xl,Ahq:false,Ai:function(Ae
){C.FE.Ai.call(this,Ae);if(this.Ahq){this.AeV.Z(true);this.AeX.Z(false);}else{this.
AeV.Z(false);this.AeX.Z(true);}},BBP:function(G){if(this.Ahq)A.pe(this.Aku,this);
else A.pe(this.Akv,this);this.Ar6(!this.Ahq);},T:function(E){if(this.DL===E)return;
this.DL=E;this.V.R(E);},Ar6:function(E){if(this.Ahq===E)return;this.Ahq=E;this.Am(
);},_Init:function(aArg){C.FE._Init.call(this,aArg);A.acg.AL._Init.call(this.PF={
I:this},0);A.acg.Text._Init.call(this.V={I:this},0);A.acg.Ap._Init.call(this.AeX={
I:this},0);A.acg.Ap._Init.call(this.AeV={I:this},0);A.Core.Bn._Init.call(this.Bn={
I:this},0);this.__proto__=C.AuK;this.H(Cf);this.PF.A1(0x1D);this.PF.H(Cf);this.PF.
L(0xFFE6E6E6);this.V.A1(0x1D);this.V.H(Xm);this.V.A6(0x11);this.V.R(Xl);this.V.L(
0xFF000000);this.AeX.H(Th);this.AeX.Z(false);this.AeV.A1(0x3A);this.AeV.H(Th);this.
Bn.J1(J9);this.Bn.KA(Ti);this.Bn.DD(Tj);this.Bn.DN(MR);this.J(this.PF,0);this.J(
this.V,0);this.J(this.AeX,0);this.J(this.AeV,0);this.J(this.Bn,0);this.V.S(A.aaL(
A.fl.Af));this.AeX.Ax(A.aaL(C.AM0));this.AeV.Ax(A.aaL(C.Ajv));this.Bn.Ls=[this,this.
BBP];},_Done:function(){this.__proto__=C.FE;this.PF._Done();this.V._Done();this.
AeX._Done();this.AeV._Done();this.Bn._Done();C.FE._Done.call(this);},_ReInit:function(
){C.FE._ReInit.call(this);this.PF._ReInit();this.V._ReInit();this.AeX._ReInit();
this.AeV._ReInit();this.Bn._ReInit();this.V.S(A.aaL(A.fl.Af));},_Mark:function(D
){var B;C.FE._Mark.call(this,D);if((B=this.PF)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.V)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AeX)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.AeV)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Bn)._cycle!=D)B._Mark(
B._cycle=D);},_className:"Demonstrator::AccordionHeader"};C.Ba={AX:null,AR:null,
CT:null,Ht:-1,Zy:function(E){if(this.AX===E)return;this.AX=E;},Ch:function(Ad){A.
ab5("%s",Aai);},ZC:function(E){if(A.aa0(this.AR,E))return;this.AR=E;},AAW:function(
G){if(!this.CT.YQ)return;if(this.CT.NQ)return;A.pe(this.AR,this);},_Init:function(
aArg){A.Core.P._Init.call(this,aArg);A.Core.Bn._Init.call(this.CT={I:this},0);this.
__proto__=C.Ba;this.H(Cf);this.CT.A1(0x3F);this.CT.J1(MR);this.CT.KA(Tj);this.CT.
DD(Ti);this.CT.DN(J9);this.CT.Afj=0xF;this.CT.AFN(100);this.J(this.CT,0);this.CT.
Ls=[this,this.AAW];},_Done:function(){this.__proto__=A.Core.P;this.CT._Done();A.
Core.P._Done.call(this);},_ReInit:function(){A.Core.P._ReInit.call(this);this.CT.
_ReInit();},_Mark:function(D){var B;A.Core.P._Mark.call(this,D);if((B=this.AX)&&(
B._cycle!=D))B._Mark(B._cycle=D);if((B=this.AR)&&((B=B[0])._cycle!=D))B._Mark(B.
_cycle=D);if((B=this.CT)._cycle!=D)B._Mark(B._cycle=D);},_className:"Demonstrator::ListItem"
};C.FE={ASF:null,Akv:null,Aku:null,BnY:function(E){if(A.aa0(this.ASF,E))return;this.
ASF=E;},A_O:function(E){if(A.aa0(this.Akv,E))return;this.Akv=E;},A_N:function(E){
if(A.aa0(this.Aku,E))return;this.Aku=E;},_Init:function(aArg){A.Core.P._Init.call(
this,aArg);this.__proto__=C.FE;this.H(Cf);},_Mark:function(D){var B;A.Core.P._Mark.
call(this,D);if((B=this.ASF)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.
Akv)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.Aku)&&((B=B[0])._cycle
!=D))B._Mark(B._cycle=D);},_className:"Demonstrator::ListHeader"};C.ANX={Dk:null
,Abe:null,W9:null,W8:null,W7:null,Nn:null,Nm:null,KW:null,LN:false,KM:false,BCF:
false,Ai:function(Ae){var B;A.acn.AhA.Ai.call(this,Ae);var Hf=((Ae&0x10)===0x10);
var Fw=((Ae&0x20)===0x20);var Bet=(this.W7.ZU||this.W8.ZU)||this.W9.ZU;if(Bet)this.
Abe.L(A.jb.Text);else this.Abe.L(A.jb.Bc);this.LN=Hf;this.KM=Fw;this.BCF=Bet;},AAR:
function(G){this.Am();if((!this.W7.ZU&&!this.W8.ZU)&&!this.W9.ZU){var Vl=this.AKu(
this.AEZ(),this.ArM());var Adi=this.AEU();this.KW.JD(Vl);if(Adi>Vl)this.Lu(Vl);A.
pe(this.Dk,this);}},A3_:function(G){this.Am();},Bmm:function(G){var B;var Gh=this.
Nn.G7;var CA=(A.acg.Text.isPrototypeOf(B=this.Nn.Cj)?B:null);if(!CA)return;CA.R(
A.abl(Gh+1900,4,10));CA.S(A.aaL(A.fl.Af));CA.L(A.jb.Text);CA.A6(0x12);CA.H(A.abK(
CA.M,[(B=this.Nn.M)[2]-B[0],this.Nn.GP]));},Bml:function(G){var B;var Gh=this.Nm.
G7;var CA=(A.acg.Text.isPrototypeOf(B=this.Nm.Cj)?B:null);if(!CA)return;CA.R(A.abl(
Gh+1,2,10)+Tk);CA.S(A.aaL(A.fl.Af));CA.L(A.jb.Text);CA.A6(0x12);CA.H(A.abK(CA.M,[(
B=this.Nm.M)[2]-B[0],this.Nm.GP]));},Bmj:function(G){var B;var Gh=this.KW.G7;var
CA=(A.acg.Text.isPrototypeOf(B=this.KW.Cj)?B:null);if(!CA)return;CA.R(A.abl(Gh+1
,2,10)+Tk);CA.S(A.aaL(A.fl.Af));CA.L(A.jb.Text);CA.A6(0x12);CA.H(A.abK(CA.M,[(B=
this.KW.M)[2]-B[0],this.KW.GP]));},ArM:function(){return 1900+((((-this.Nn.Br/this.
Nn.GP)|0)+2)%200);},AkI:function(E){if(E<1900)E=1900;if(E>2100)E=2100;this.Nn.Gc(((
E-1900)-2)*-this.Nn.GP);var Vl=this.AKu(this.AEZ(),E);this.KW.JD(Vl);if(this.AEU(
)>Vl)this.Lu(Vl);},AEZ:function(){return 1+((((-this.Nm.Br/this.Nm.GP)|0)+2)%12);
},UA:function(E){if(E<1)E=1;if(E>12)E=12;this.Nm.Gc(((E-1)-2)*-this.Nm.GP);var Vl=
this.AKu(E,this.ArM());this.KW.JD(Vl);if(this.AEU()>Vl)this.Lu(Vl);},AEU:function(
){return 1+((((-this.KW.Br/this.KW.GP)|0)+2)%this.KW.A0);},Lu:function(E){var Vl=
this.AKu(this.AEZ(),this.ArM());if(E<1)E=1;if(E>Vl)E=Vl;this.KW.Gc(((E-2)-1)*-this.
KW.GP);},AKu:function(AfQ,Ac_){if(AfQ===2){if(!(Ac_%4)&&(!!(Ac_%100)||!(Ac_%400)
))return 29;else return 28;}else if((((AfQ===4)||(AfQ===6))||(AfQ===9))||(AfQ===
11))return 30;else return 31;},_Init:function(aArg){A.acn.AhA._Init.call(this,aArg
);A.acg.BW._Init.call(this.Abe={I:this},0);A.Core.Ic._Init.call(this.W9={I:this}
,0);A.Core.Ic._Init.call(this.W8={I:this},0);A.Core.Ic._Init.call(this.W7={I:this
},0);A.Core.CM._Init.call(this.Nn={I:this},0);A.Core.CM._Init.call(this.Nm={I:this
},0);A.Core.CM._Init.call(this.KW={I:this},0);this.__proto__=C.ANX;this.H(Aaj);this.
Abe.H(AfG);this.Abe.Nu(3);this.Abe.L(0xFFE1E1E1);this.Abe.Z(true);this.W9.H(Aak);
this.W9.ATZ(Xn);this.W9.ATu(0.2);this.W8.H(Aal);this.W8.ATZ(Xn);this.W8.ATu(0.2);
this.W7.H(Xo);this.W7.ATZ(Xn);this.W7.ATu(0.2);this.Nn.H(Aak);this.Nn.ATs(true);
this.Nn.Gc(60);this.Nn.Ae$(30);this.Nn.JD(200);this.Nm.H(Aal);this.Nm.ATs(true);
this.Nm.Gc(60);this.Nm.Ae$(30);this.Nm.JD(12);this.KW.H(Xo);this.KW.ATs(true);this.
KW.Gc(60);this.KW.Ae$(30);this.KW.JD(31);this.J(this.Abe,0);this.J(this.W9,0);this.
J(this.W8,0);this.J(this.W7,0);this.J(this.Nn,0);this.J(this.Nm,0);this.J(this.KW
,0);this.W9.Zt=[this,this.AAR];this.W9.SR=[this,this.A3_];this.W8.Zt=[this,this.
AAR];this.W8.SR=[this,this.A3_];this.W7.Zt=[this,this.AAR];this.W7.SR=[this,this.
A3_];this.Nn.Hn=[this,this.Bmm];this.Nn.Axc(this.W9);this.Nm.Hn=[this,this.Bml];
this.Nm.Axc(this.W8);this.KW.Hn=[this,this.Bmj];this.KW.Axc(this.W7);},_Done:function(
){this.__proto__=A.acn.AhA;this.Abe._Done();this.W9._Done();this.W8._Done();this.
W7._Done();this.Nn._Done();this.Nm._Done();this.KW._Done();A.acn.AhA._Done.call(
this);},_ReInit:function(){A.acn.AhA._ReInit.call(this);this.Abe._ReInit();this.
W9._ReInit();this.W8._ReInit();this.W7._ReInit();this.Nn._ReInit();this.Nm._ReInit(
);this.KW._ReInit();},_Mark:function(D){var B;A.acn.AhA._Mark.call(this,D);if((B=
this.Dk)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.Abe)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.W9)._cycle!=D)B._Mark(B._cycle=D);if((B=this.W8)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.W7)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Nn
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Nm)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.KW)._cycle!=D)B._Mark(B._cycle=D);},_className:"Demonstrator::DatePicker"
};C.AHE={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/DemonstratorWhiteTile.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[40,40],FrameDelay:0,_this:
null}};C.AWl={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/DemonstratorWhiteTileSmall.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[40,40],FrameDelay:0,_this:
null}};C.AhL={_Init:function(aArg){A.Core.P._Init.call(this,aArg);this.__proto__=
C.AhL;this.H(E8);},_className:"Demonstrator::SelectionAreaContent"};C.AMQ={Y:null
,VF:null,TL:null,BCf:function(G){var B;this.TL.H(A.abI(this.TL.M,((B=this.M)[3]-
B[1])-((B=this.VF.M)[3]-B[1])));},_Init:function(aArg){C.AhL._Init.call(this,aArg
);A.Core.Y._Init.call(this.Y={I:this},0);C.AMj._Init.call(this.VF={I:this},0);C.
AV6._Init.call(this.TL={I:this},0);this.__proto__=C.AMQ;this.Y.A1(0x3F);this.Y.H(
E8);this.Y.JZ(1);this.VF.H(AhY);this.VF.Aj(true);this.VF.Ar6(false);this.TL.A1(0x3
);this.TL.H(K3);this.TL.Aj(true);this.TL.N8(C.AMJ);this.TL.BnS(C.AMX);this.J(this.
Y,0);this.J(this.VF,0);this.J(this.TL,0);this.Bb(this.TL);this.Y.Em=[this,this.BCf
];this.TL.Zy(A._GetAutoObject(A.aco.Aqo));},_Done:function(){this.__proto__=C.AhL;
this.Y._Done();this.VF._Done();this.TL._Done();C.AhL._Done.call(this);},_ReInit:
function(){C.AhL._ReInit.call(this);this.Y._ReInit();this.VF._ReInit();this.TL._ReInit(
);},_Mark:function(D){var B;C.AhL._Mark.call(this,D);if((B=this.Y)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.VF)._cycle!=D)B._Mark(B._cycle=D);if((B=this.TL)._cycle!=
D)B._Mark(B._cycle=D);},_className:"Demonstrator::AnimalSelectionActions"};C.VF={
_Init:function(aArg){C.AuK._Init.call(this,aArg);this.__proto__=C.VF;this.T(A.aaR(
A.acf.A6x));},_ReInit:function(){C.AuK._ReInit.call(this);this.T(A.aaR(A.acf.A6x
));},_className:"Demonstrator::ActionsHeader"};C.AMj={Background:null,XX:null,Y:
null,AcD:null,ZO:null,ZN:null,AcC:null,Akd:null,Ake:null,Akf:null,Akg:null,Akh:null
,Ahq:false,Init:function(aArg){var B;A.zX([this,this.AKU],[B=A._GetAutoObject(A.
aco.GM),B.AE1,B.Asc],0);A.pe([this,this.AKU],this);},Akv:function(G){this.Ar6(true
);},Aku:function(G){this.Ar6(false);},Ar6:function(E){if(this.Ahq===E)return;this.
Ahq=E;this.XX.Ar6(E);A.pe([this,this.BfU],this);},AKU:function(G){var BCn=A._GetAutoObject(
A.aco.GM).Afn===2;A._GetAutoObject(A.Device.Helper).J6(this.ZN,BCn);},BfU:function(
G){var B;if(this.Ahq)this.H(A.abI(this.M,(B=this.XX.M)[3]-B[1]));else this.H(A.abI(
this.M,((B=this.XX.M)[3]-B[1])+((B=this.Y.Dd(0x401))[3]-B[1])));},_Init:function(
aArg){A.Core.P._Init.call(this,aArg);A.acg.AL._Init.call(this.Background={I:this
},0);C.VF._Init.call(this.XX={I:this},0);A.Core.Y._Init.call(this.Y={I:this},0);
C.AcD._Init.call(this.AcD={I:this},0);C.ZO._Init.call(this.ZO={I:this},0);C.ZN._Init.
call(this.ZN={I:this},0);C.AcC._Init.call(this.AcC={I:this},0);A.acg.C8._Init.call(
this.Akd={I:this},0);A.acg.C8._Init.call(this.Ake={I:this},0);A.acg.C8._Init.call(
this.Akf={I:this},0);A.acg.C8._Init.call(this.Akg={I:this},0);A.acg.C8._Init.call(
this.Akh={I:this},0);this.__proto__=C.AMj;var B;this.H(AcS);this.Background.A1(0x3F
);this.Background.H(AcS);this.XX.A1(0x1D);this.XX.H(Cf);this.Y.H(LB);this.Y.JZ(1
);this.AcD.H(AhZ);this.AcD.Aj(true);this.ZO.H(Aoj);this.ZO.Aj(true);this.ZN.H(Oj
);this.ZN.Aj(true);this.AcC.H(Xp);this.AcC.Aj(true);this.Akd.DD(Tj);this.Akd.DN(
MR);this.Akd.L(A.jb.Bc);this.Ake.DD(Aam);this.Ake.DN(AfH);this.Ake.L(A.jb.Bc);this.
Akf.DD(Ah0);this.Akf.DN(AcT);this.Akf.L(A.jb.Bc);this.Akg.DD(U5);this.Akg.DN(Aok
);this.Akg.L(A.jb.Bc);this.Akh.DD(Aol);this.Akh.DN(Aom);this.Akh.L(A.jb.Bc);this.
J(this.Background,0);this.J(this.XX,0);this.J(this.Y,0);this.J(this.AcD,0);this.
J(this.ZO,0);this.J(this.ZN,0);this.J(this.AcC,0);this.J(this.Akd,0);this.J(this.
Ake,0);this.J(this.Akf,0);this.J(this.Akg,0);this.J(this.Akh,0);this.XX.A_O([this
,this.Akv]);this.XX.A_N([this,this.Aku]);this.Y.Em=[this,this.BfU];this.ZO.Bob([
B=A._GetAutoObject(A.aco.GM),B.AE1,B.Asc]);this.Init(aArg);},_Done:function(){this.
__proto__=A.Core.P;this.Background._Done();this.XX._Done();this.Y._Done();this.AcD.
_Done();this.ZO._Done();this.ZN._Done();this.AcC._Done();this.Akd._Done();this.Ake.
_Done();this.Akf._Done();this.Akg._Done();this.Akh._Done();A.Core.P._Done.call(this
);},_ReInit:function(){A.Core.P._ReInit.call(this);this.Background._ReInit();this.
XX._ReInit();this.Y._ReInit();this.AcD._ReInit();this.ZO._ReInit();this.ZN._ReInit(
);this.AcC._ReInit();this.Akd._ReInit();this.Ake._ReInit();this.Akf._ReInit();this.
Akg._ReInit();this.Akh._ReInit();},_Mark:function(D){var B;A.Core.P._Mark.call(this
,D);if((B=this.Background)._cycle!=D)B._Mark(B._cycle=D);if((B=this.XX)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.Y)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AcD
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.ZO)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.ZN)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AcC)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Akd)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ake)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Akf)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Akg)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.Akh)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Demonstrator::ActionsMenu"};C.Jv={YK:null,Ahc:null,Bn:null,C8:null,Agd:function(
G){},A07:function(s){this.Agd(s);},_Init:function(aArg){A.Core.P._Init.call(this
,aArg);A.acg.Ap._Init.call(this.YK={I:this},0);A.acg.Ap._Init.call(this.Ahc={I:this
},0);A.Core.Bn._Init.call(this.Bn={I:this},0);A.acg.C8._Init.call(this.C8={I:this
},0);this.__proto__=C.Jv;this.H(Cf);this.YK.H(Aon);this.YK.L(A.jb.Text);this.Ahc.
H(Ale);this.Ahc.L(A.jb.Text);this.Ahc.Cw(0);this.Bn.J1(J9);this.Bn.KA(Oh);this.Bn.
DD(Qf);this.Bn.DN(MR);this.C8.DD(Qf);this.C8.DN(Oh);this.C8.L(A.jb.Bc);this.J(this.
YK,0);this.J(this.Ahc,0);this.J(this.Bn,0);this.J(this.C8,0);this.YK.Ax(A.aaL(A.
aci.TX));this.Ahc.Ax(A.aaL(A.aci.AUj));this.Bn.BG=[this,this.A07];},_Done:function(
){this.__proto__=A.Core.P;this.YK._Done();this.Ahc._Done();this.Bn._Done();this.
C8._Done();A.Core.P._Done.call(this);},_ReInit:function(){A.Core.P._ReInit.call(
this);this.YK._ReInit();this.Ahc._ReInit();this.Bn._ReInit();this.C8._ReInit();}
,_Mark:function(D){var B;A.Core.P._Mark.call(this,D);if((B=this.YK)._cycle!=D)B.
_Mark(B._cycle=D);if((B=this.Ahc)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Bn)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.C8)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Demonstrator::ActionsItem"};C.ZO={Afo:null,DT:null,YJ:null,BW:null,Ni:null,AhH:
null,ANR:0,Init:function(aArg){A.pe([this,this.Hg],this);},Agd:function(G){var IE=
A.ab0(this.YJ.String,0,10);var Im=false;switch(A._GetAutoObject(A.aco.GM).Afn){case
2:if(A._GetAutoObject(A.acq.W1).ACe)Im=A._GetAutoObject(A.aco.GM).BCC(IE);break;
case 0:case 1:Im=A._GetAutoObject(A.aco.GM).BgU(IE);break;default:A.ab5("%s%e",As6
,A._GetAutoObject(A.aco.GM).Afn);}if(Im){IE=IE+1;this.YJ.R(IE.toFixed());}},BBV:
function(G){var AJy=null;var AKK=0;switch(A._GetAutoObject(A.aco.GM).Afn){case 2:{
AJy=A.aaL(A.ach.Ard);AKK=276;}break;case 0:{AJy=A.aaL(A.ach.AjZ);AKK=900;}break;
case 1:{AJy=A.aaL(C.Ax1);AKK=276;}break;default:A.ab5("%s%e",As6,A._GetAutoObject(
A.aco.GM).Afn);}this.YJ.R(((AKK*1000000000000)+(A.abY(this.YJ.String,0,10)%1000000000000
)).toFixed());this.YK.Ax(AJy);},Hg:function(G){var F;if(!!this.Afo)this.ATo((F=this.
Afo,F[1].call(F[0])));A.pe([this,this.BBV],this);A.we(this,0);},Bob:function(E){
if(A.aaZ(this.Afo,E))return;if(!!this.Afo)A.z$([this,this.Hg],this.Afo,0);this.Afo=
E;if(!!E)A.zX([this,this.Hg],this.Afo,0);if(!!E)A.pe([this,this.Hg],this);},ATo:
function(E){var F;if(this.ANR===E)return;this.ANR=E;if(!!this.Afo)(F=this.Afo,F[
2].call(F[0],E));A.abo([this,this.A86,this.ATo],0);},A86:function(){return this.
ANR;},_Init:function(aArg){C.Jv._Init.call(this,aArg);A.acr.DT._Init.call(this.DT={
I:this},0);C.Akq._Init.call(this.YJ={I:this},0);A.acg.BW._Init.call(this.BW={I:this
},0);A.acg.Ap._Init.call(this.Ni={I:this},0);C.AhH._Init.call(this.AhH={I:this},
0);this.__proto__=C.ZO;this.DT.H(Ayc);this.DT.Ar5(120);this.DT.GP=30;this.DT.ATm(
A.jb.Rl);this.DT.A_e(A.jb.CU);this.DT.A_j(A.jb.CU);this.DT.ATn(A.jb.Rl);this.DT.
A_k(A.jb.Text);this.DT.A_f(A.jb.AV);this.DT.A_l(A.jb.Bm);this.DT.A_i(A.jb.AV);this.
DT.A_h(A.jb.Rl);this.Bn.J1(Ayd);this.Bn.DN(Pb);this.YJ.H(Rr);this.YJ.R(Aye);this.
YJ.L(A.jb.Text);this.BW.H(U6);this.BW.Nu(2);this.BW.L(A.jb.Text);this.Ni.H(As7);
this.Ni.L(A.jb.Text);this.Ni.A6(0xC);this.Ni.Cw(3);this.J(this.DT,-2);this.J(this.
YJ,-1);this.J(this.BW,0);this.J(this.Ni,0);this.DT.Au([this,this.A86,this.ATo]);
this.DT.A_r(this.AhH);this.DT.ArX(A.aaL(A.fl.Bh));this.DT.AwS(A.aaL(A.fl.Bh));this.
Ni.Ax(A.aaL(A.ach.Ajw));this.Init(aArg);},_Done:function(){this.__proto__=C.Jv;this.
DT._Done();this.YJ._Done();this.BW._Done();this.Ni._Done();this.AhH._Done();C.Jv.
_Done.call(this);},_ReInit:function(){C.Jv._ReInit.call(this);this.DT._ReInit();
this.YJ._ReInit();this.BW._ReInit();this.Ni._ReInit();this.AhH._ReInit();this.DT.
ArX(A.aaL(A.fl.Bh));this.DT.AwS(A.aaL(A.fl.Bh));},_Mark:function(D){var B;C.Jv._Mark.
call(this,D);if((B=this.Afo)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.
DT)._cycle!=D)B._Mark(B._cycle=D);if((B=this.YJ)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.BW)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ni)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.AhH)._cycle!=D)B._Mark(B._cycle=D);},_className:"Demonstrator::ScanIdAction"
};C.AcD={US:null,O2:null,A4X:0,Init:function(aArg){var B;A.zX([this,this.BBx],[B=
A._GetAutoObject(A.aco.GM),B.AS4,B.ATS],0);A.zX([this,this.AAZ],[B=A._GetAutoObject(
A.Device.Device),B.ArJ,B.Atv],0);A.pe([this,this.AAZ],this);},Ai:function(Ae){C.
Jv.Ai.call(this,Ae);this.O2.Z(!A._GetAutoObject(A.aco.GM).Axz);},Agd:function(G){
var B;A._GetAutoObject(A.aco.GM).Bfv(this);},AAZ:function(G){if(A._GetAutoObject(
A.Device.Device).TemperatureUnit!==this.A4X){switch(A._GetAutoObject(A.Device.Device
).TemperatureUnit){case 0:this.O2.R(A.abk(A._GetAutoObject(A.aco.GM).W5/100,0,1)
);break;case 1:{var Auz=A._GetAutoObject(A.Device.Converter).AVB(A._GetAutoObject(
A.aco.GM).W5/100,0,A._GetAutoObject(A.Device.Device).TemperatureUnit);this.O2.R(
A.abk(Auz,0,1));}break;default:A.ab5("%s%e",Ayf,A._GetAutoObject(A.Device.Device
).TemperatureUnit);}this.A4X=A._GetAutoObject(A.Device.Device).TemperatureUnit;}
},BBg:function(G){var B;var Agu=A.abX(this.O2.String,0);Agu=A._GetAutoObject(A.Device.
Converter).AVB(Agu,A._GetAutoObject(A.Device.Device).TemperatureUnit,0);Agu*=100;
A._GetAutoObject(A.aco.GM).AF7(Math.round(Agu)|0);},BBx:function(G){this.Am();},
_Init:function(aArg){C.Jv._Init.call(this,aArg);A.acs.US._Init.call(this.US={I:this
},0);C.O2._Init.call(this.O2={I:this},0);this.__proto__=C.AcD;var B;this.US.H(Ayg
);this.US.A_H(A.aaR(A.acf.A5M));this.O2.H(Alf);this.O2.R(Ayh);this.O2.L(A.jb.Text
);this.O2.BmL(true);this.A4X=A._GetAutoObject(A.Device.Device).TemperatureUnit;this.
J(this.US,0);this.J(this.O2,0);this.YK.Ax(A.aaL(A.ach.Ag9));this.US.Au([B=A._GetAutoObject(
A.aco.GM),B.AS4,B.ATS]);this.US.OnSetAppearance(A._GetAutoObject(A.acx.Au5));this.
O2.Dk=[this,this.BBg];this.Init(aArg);},_Done:function(){this.__proto__=C.Jv;this.
US._Done();this.O2._Done();C.Jv._Done.call(this);},_ReInit:function(){C.Jv._ReInit.
call(this);this.US._ReInit();this.O2._ReInit();this.US.A_H(A.aaR(A.acf.A5M));},_Mark:
function(D){var B;C.Jv._Mark.call(this,D);if((B=this.US)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.O2)._cycle!=D)B._Mark(B._cycle=D);},_className:"Demonstrator::TemperatureAction"
};C.Arn={Q:null,BW:null,Bn:null,AgO:null,Anc:null,Anb:null,Ars:null,Text:null,Hq:
null,Ap:null,CY:null,Arr:null,Art:null,Apn:false,Bl:function(aSize){this.Hq.H(A.
abK(this.Hq.M,aSize));this.BW.AxG(1);this.BW.Jz(0,40);this.BW.Fl(0,aSize[0]-20,20
,12.5,12.5,-90,90,10);this.BW.Fl(0,20,20,12.5,12.5,90,270,10);this.BW.VZ(0);},Ai:
function(Ae){var B;var F;A.Core.P.Ai.call(this,Ae);var IG=((Ae&0x40)===0x40);if(
IG){if(!!this.Q)this.Text.R((F=this.Q,F[1].call(F[0])));this.AgO.As(true);this.Ap.
Z(false);}else{if(!!this.Q)this.Text.R((F=this.Q,F[1].call(F[0])));this.AgO.As(false
);this.CY.Z(false);this.Ap.Z(true);}this.Apn=IG;},Agd:function(G){var B;if(!((this.
U&0x80)===0x80))this.Iq().AM9(this);},A8M:function(G){},Bbs:function(s){this.A8M(
s);},BkT:function(G){var B;var F;if(!this.Q||!(F=this.Q,F[1].call(F[0])).length)
this.CY.H(A.abM(this.CY.M,A.aaI(this.Text.M)[0]));else{this.CY.H(A.abM(this.CY.M
,this.Text.AO6(0)[2]+2));this.CY.H(A.abO(this.CY.M,this.Text.AO6(0)[1]));this.CY.
H(A.abI(this.CY.M,(B=this.Text.AO6(0))[3]-B[1]));}this.Ap.H(A.abM(this.Ap.M,this.
Text.M[0]-((B=this.Ap.M)[2]-B[0])));},A8K:function(G){},Bbr:function(s){this.A8K(
s);},Au:function(E){if(A.aaZ(this.Q,E))return;if(!!this.Q)A.z$([this,this.Hg],this.
Q,0);this.Q=E;if(!!E)A.zX([this,this.Hg],E,0);if(!!E)A.pe([this,this.Hg],this);}
,Hg:function(G){this.Am();},Bmo:function(G){var B;if(((this.U&0x80)===0x80))this.
Iq().AC0(this);},BfD:function(G){},_Init:function(aArg){A.Core.P._Init.call(this
,aArg);A.Graphics.HA._Init.call(this.BW={I:this},0);A.Core.Bn._Init.call(this.Bn={
I:this},0);A.acl.TR._Init.call(this.AgO={I:this},0);A.Core.BF._Init.call(this.Anc={
I:this},0);A.Core.BF._Init.call(this.Anb={I:this},0);A.Core.BF._Init.call(this.Ars={
I:this},0);A.acg.Text._Init.call(this.Text={I:this},0);A.acg.Hq._Init.call(this.
Hq={I:this},0);A.acg.Ap._Init.call(this.Ap={I:this},0);A.acg.AL._Init.call(this.
CY={I:this},0);A.Core.BF._Init.call(this.Arr={I:this},0);A.Core.BF._Init.call(this.
Art={I:this},0);this.__proto__=C.Arn;var B;this.H(AfI);this.Bn.A1(0x3F);this.Bn.
J1(J9);this.Bn.KA(Aoo);this.Bn.DD(I1);this.Bn.DN(Rq);this.AgO.Fr(530);this.AgO.Uy(
530);this.Anc.Filter=143;this.Anb.Filter=45;this.Ars.Filter=1;this.Text.A1(0x3F);
this.Text.H(AfI);this.Text.Je(true);this.Text.A6(0x12);this.Text.L(0xFFB3B3B3);this.
Hq.H(AfI);this.Hq.L(0xFFB3B3B3);this.Hq.Nu(1);this.Ap.H(Aop);this.CY.H(As8);this.
CY.L(0xFFB3B3B3);this.CY.Z(false);this.Arr.Filter=138;this.Art.Filter=137;this.J(
this.Bn,0);this.J(this.Text,0);this.J(this.Hq,0);this.J(this.Ap,0);this.J(this.CY
,0);this.Bn.Ls=[this,this.Agd];this.AgO.Q=[B=this.CY,B.Fq,B.Z];this.Anc.BG=[this
,this.Bbs];this.Anc.D1=[this,this.Bbs];this.Anb.BG=[this,this.Bbr];this.Anb.D1=[
this,this.Bbr];this.Ars.BG=[this,this.Bmo];this.Text.Q_([this,this.BkT]);this.Text.
S(A.aaL(A.fl.Ak));this.Hq.ZD(this.BW);this.Ap.Ax(null);this.Arr.BG=[this,this.BfD
];this.Art.BG=[this,this.BfD];},_Done:function(){this.__proto__=A.Core.P;this.BW.
_Done();this.Bn._Done();this.AgO._Done();this.Anc._Done();this.Anb._Done();this.
Ars._Done();this.Text._Done();this.Hq._Done();this.Ap._Done();this.CY._Done();this.
Arr._Done();this.Art._Done();A.Core.P._Done.call(this);},_ReInit:function(){A.Core.
P._ReInit.call(this);this.BW._ReInit();this.Bn._ReInit();this.AgO._ReInit();this.
Anc._ReInit();this.Anb._ReInit();this.Ars._ReInit();this.Text._ReInit();this.Hq.
_ReInit();this.Ap._ReInit();this.CY._ReInit();this.Arr._ReInit();this.Art._ReInit(
);this.Text.S(A.aaL(A.fl.Ak));},_Mark:function(D){var B;A.Core.P._Mark.call(this
,D);if((B=this.Q)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.BW)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.Bn)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
AgO)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Anc)._cycle!=D)B._Mark(B._cycle=D);
if((B=this.Anb)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ars)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Text)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Hq)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.Ap)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
CY)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Arr)._cycle!=D)B._Mark(B._cycle=D);
if((B=this.Art)._cycle!=D)B._Mark(B._cycle=D);},_className:"Demonstrator::InputView"
};C.Aev={Background:null,Yz:null,_Init:function(aArg){A.Core.P._Init.call(this,aArg
);A.acg.AL._Init.call(this.Background={I:this},0);C.Yz._Init.call(this.Yz={I:this
},0);this.__proto__=C.Aev;var B;this.H(Xq);this.Background.H(Xq);this.Yz.A1(0x1D
);this.Yz.H(As9);this.J(this.Background,0);this.J(this.Yz,0);this.Yz.Au([B=A._GetAutoObject(
A.aco.AgR),B.A9C,B.AF2]);},_Done:function(){this.__proto__=A.Core.P;this.Background.
_Done();this.Yz._Done();A.Core.P._Done.call(this);},_ReInit:function(){A.Core.P.
_ReInit.call(this);this.Background._ReInit();this.Yz._ReInit();},_Mark:function(
D){var B;A.Core.P._Mark.call(this,D);if((B=this.Background)._cycle!=D)B._Mark(B.
_cycle=D);if((B=this.Yz)._cycle!=D)B._Mark(B._cycle=D);},_className:"Demonstrator::FilterRow"
};C.O2={Init:function(aArg){var B;A.zX([this,this.AAZ],[B=A._GetAutoObject(A.Device.
Device),B.ArJ,B.Atv],0);A.pe([this,this.AAZ],this);},Ai:function(Ae){var B;C.Akq.
Ai.call(this,Ae);var IG=((this.U&0x40)===0x40);if(!IG&&(this.String.length>0))this.
Text.R(((this.String+As_)+A._GetAutoObject(A.acj.Temperature).AlR())+String.fromCharCode(
0x0A));else this.Text.R(this.String+String.fromCharCode(0x0A));if(this.D6>this.String.
length)this.D6=this.String.length;},AAZ:function(G){this.Am();},_Init:function(aArg
){C.Akq._Init.call(this,aArg);this.__proto__=C.O2;this.Init(aArg);},_className:"Demonstrator::TemperatureInputView"
};C.Akq={B7:null,Dk:null,I2:null,Cr:null,AmK:null,Sl:null,HI:null,Bn:null,Text:null
,CY:null,AqG:null,Aso:null,BW:null,Hq:null,ArF:null,Aq$:null,AqT:null,String:A.jV
,D6:0,AQ:0xFFB3B3B3,Av5:15,ANZ:false,LF:false,Bl:function(aSize){this.Hq.H(A.abK(
this.Hq.M,aSize));this.BW.AxG(1);this.BW.Jz(0,40);this.BW.Fl(0,aSize[0]-20,20,12.5
,12.5,-90,90,10);this.BW.Fl(0,20,20,12.5,12.5,90,270,10);this.BW.VZ(0);},Ai:function(
Ae){var B;A.acn.Ji.Ai.call(this,Ae);if(((Ae&0x40)===0x40))this.I2.As(true);else{
this.I2.As(false);this.CY.Z(false);}},A47:function(G){var B;var Be=this.Text.M;var
NG=0;var NH=0;if(this.CY.Et[0]<Be[0])NG=Be[0]-this.CY.Et[0];if(this.CY.Et[0]>Be[
2])NG=Be[2]-this.CY.Et[0];if(this.CY.Et[1]<Be[1])NH=Be[1]-this.CY.Et[1];if(this.
CY.ED[1]>Be[3])NH=Be[3]-this.CY.ED[1];if(!!NG||!!NH)this.Text.Gc(A.abf(this.Text.
Br,[NG,NH]));NG=this.Text.Br[0];NH=this.Text.Br[1];var C6=[(B=this.Text.Dd())[2]-
B[0],B[3]-B[1]];if(C6[0]<=((B=this.Text.M)[2]-B[0]))NG=0;if(C6[1]<=((B=this.Text.
M)[3]-B[1]))NH=0;this.Text.Gc([NG,NH]);},Ams:function(G){if(!this.B7)return;var A4x=
this.Text.AG_(this.D6);var pos=this.Text.Afk(A4x);this.CY.DN(A.abe(pos,[0,this.B7.
Ascent]));this.CY.DD(A.abf(pos,[0,this.B7.Descent]));if(this.I2.Bw){this.I2.As(false
);this.I2.As(true);}if(this.LF){A.pe([this,this.A47],this);this.LF=false;}},AAV:
function(G){if(!this.A7u(0x80))this.Iq().AM9(this);var EH=this.Text.AUn(this.Bn.
H5);var Vq=this.Text.AnX(EH);if(Vq!==this.D6){this.D6=Vq;A.pe([this,this.Ams],this
);this.LF=true;}},AAO:function(G){if(!this.B7)return;var EH=this.Text.AG_(this.D6
);if(this.Cr.CP===6){EH=[EH[0]-1,EH[1]];if(this.Text.AnX(EH)===this.D6){EH=[EH[0
],EH[1]-1];EH=[this.Text.ADn(EH[1]).length,EH[1]];}}if(this.Cr.CP===7){EH=[EH[0]+
1,EH[1]];if(this.Text.AnX(EH)===this.D6){EH=[EH[0],EH[1]+1];EH=[0,EH[1]];}}var Vq=
this.Text.AnX(EH);if(Vq!==this.D6){this.D6=Vq;A.pe([this,this.Ams],this);this.LF=
true;}},Bfm:function(G){if(!this.D6)return;this.R(A.ab1(this.String,this.D6-1,1)
);this.D6=this.D6-1;this.LF=true;A.pe(this.Dk,this);},AAP:function(G){if(this.D6>=
this.String.length)return;this.R(A.ab1(this.String,this.D6,1));this.LF=true;A.pe(
this.Dk,this);},Bfr:function(G){if(this.String.length>=this.Av5)return;var BzA=this.
HI.Dy;var Aux=String.fromCharCode(BzA);this.R(A.abU(this.String,Aux,this.D6));this.
D6=this.D6+Aux.length;this.LF=true;A.pe(this.Dk,this);},R:function(E){if(this.String===
E)return;this.String=E;if(this.D6>(E.length+1))this.D6=E.length;this.Text.R(E+String.
fromCharCode(0x0A));this.LF=true;this.Text.Gc(J9);},L:function(E){if(this.AQ===E
)return;this.AQ=E;this.Text.L(E);this.CY.L(E);this.Hq.L(E);},S:function(E){if(this.
B7===E)return;this.B7=E;this.Text.S(E);this.LF=true;this.Text.Gc(J9);},BfE:function(
G){if(this.ANZ===false)return;if(this.String.indexOf(String.fromCharCode(0x2E),0
)>=0)return;if(this.String.length>=this.Av5)return;this.R(A.abU(this.String,Tk,this.
D6));this.D6=this.D6+1;this.LF=true;A.pe(this.Dk,this);},Bcd:function(s){this.BfE(
s);},BmL:function(E){if(this.ANZ===E)return;this.ANZ=E;if(E===false){var Bgl=this.
String.indexOf(String.fromCharCode(0x2E),0);if(Bgl>=0)this.R(A.abV(this.String,Bgl
));}this.LF=true;this.Text.Gc(J9);},BnR:function(E){if(this.Av5===E)return;this.
Av5=E;this.R(A.abV(this.String,E));this.LF=true;this.Text.Gc(J9);},BBo:function(
G){if(this.A7u(0x80)){this.Iq().AC0(this);this.Cs(0x10,0x0);}this.Am();},BBc:function(
G){var Vq=this.String.length;if(Vq!==this.D6){this.D6=Vq;A.pe([this,this.Ams],this
);this.LF=true;}},BBf:function(G){if(!!this.D6){this.D6=0;A.pe([this,this.Ams],this
);this.LF=true;}},_Init:function(aArg){A.acn.Ji._Init.call(this,aArg);A.acl.TR._Init.
call(this.I2={I:this},0);A.Core.BF._Init.call(this.Cr={I:this},0);A.Core.BF._Init.
call(this.AmK={I:this},0);A.Core.BF._Init.call(this.Sl={I:this},0);A.Core.BF._Init.
call(this.HI={I:this},0);A.Core.Bn._Init.call(this.Bn={I:this},0);A.acg.Text._Init.
call(this.Text={I:this},0);A.acg.C8._Init.call(this.CY={I:this},0);A.Core.BF._Init.
call(this.AqG={I:this},0);A.Core.BF._Init.call(this.Aso={I:this},0);A.Graphics.HA.
_Init.call(this.BW={I:this},0);A.acg.Hq._Init.call(this.Hq={I:this},0);A.Core.BF.
_Init.call(this.ArF={I:this},0);A.Core.BF._Init.call(this.Aq$={I:this},0);A.Core.
BF._Init.call(this.AqT={I:this},0);this.__proto__=C.Akq;var B;this.H(AfI);this.I2.
B3=false;this.I2.Cx=true;this.I2.Fr(500);this.I2.Uy(500);this.Cr.Filter=147;this.
AmK.Filter=45;this.Sl.Filter=44;this.HI.Filter=143;this.Bn.A1(0x3F);this.Bn.J1(Rq
);this.Bn.KA(I1);this.Bn.DD(Aoo);this.Bn.DN(J9);this.Bn.AFN(3);this.Text.A1(0x3F
);this.Text.H(AfI);this.Text.Lv(false);this.Text.A6(0x12);this.Text.R(A.jV);this.
Text.L(0xFFB3B3B3);this.CY.DD(As$);this.CY.DN(Aoq);this.CY.A$i(2);this.CY.A$h(2);
this.CY.L(0xFFB3B3B3);this.CY.Z(false);this.AqG.Filter=138;this.Aso.Filter=137;this.
Hq.H(AfI);this.Hq.L(0xFFB3B3B3);this.Hq.Nu(1);this.ArF.Filter=1;this.Aq$.Filter=
41;this.AqT.Filter=42;this.J(this.Bn,0);this.J(this.Text,0);this.J(this.CY,0);this.
J(this.Hq,0);this.I2.Q=[B=this.CY,B.Fq,B.Z];this.Cr.BG=[this,this.AAO];this.Cr.D1=[
this,this.AAO];this.AmK.BG=[this,this.Bfm];this.AmK.D1=[this,this.Bfm];this.Sl.BG=[
this,this.AAP];this.Sl.D1=[this,this.AAP];this.HI.BG=[this,this.Bfr];this.HI.D1=[
this,this.Bfr];this.Bn.BG=[this,this.AAV];this.Text.Q_([this,this.Ams]);this.Text.
S(A.aaL(A.fl.Ak));this.B7=A.aaL(A.fl.Ak);this.AqG.BG=[this,this.Bcd];this.Aso.BG=[
this,this.Bcd];this.Hq.ZD(this.BW);this.ArF.BG=[this,this.BBo];this.Aq$.BG=[this
,this.BBf];this.AqT.BG=[this,this.BBc];},_Done:function(){this.__proto__=A.acn.Ji;
this.I2._Done();this.Cr._Done();this.AmK._Done();this.Sl._Done();this.HI._Done();
this.Bn._Done();this.Text._Done();this.CY._Done();this.AqG._Done();this.Aso._Done(
);this.BW._Done();this.Hq._Done();this.ArF._Done();this.Aq$._Done();this.AqT._Done(
);A.acn.Ji._Done.call(this);},_ReInit:function(){A.acn.Ji._ReInit.call(this);this.
I2._ReInit();this.Cr._ReInit();this.AmK._ReInit();this.Sl._ReInit();this.HI._ReInit(
);this.Bn._ReInit();this.Text._ReInit();this.CY._ReInit();this.AqG._ReInit();this.
Aso._ReInit();this.BW._ReInit();this.Hq._ReInit();this.ArF._ReInit();this.Aq$._ReInit(
);this.AqT._ReInit();this.Text.S(A.aaL(A.fl.Ak));this.S(A.aaL(A.fl.Ak));},_Mark:
function(D){var B;A.acn.Ji._Mark.call(this,D);if((B=this.B7)&&(B._cycle!=D))B._Mark(
B._cycle=D);if((B=this.Dk)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.
I2)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Cr)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.AmK)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Sl)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.HI)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Bn)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Text)._cycle!=D)B._Mark(B._cycle=D);if((B=this.CY)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.AqG)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
Aso)._cycle!=D)B._Mark(B._cycle=D);if((B=this.BW)._cycle!=D)B._Mark(B._cycle=D);
if((B=this.Hq)._cycle!=D)B._Mark(B._cycle=D);if((B=this.ArF)._cycle!=D)B._Mark(B.
_cycle=D);if((B=this.Aq$)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AqT)._cycle!=
D)B._Mark(B._cycle=D);},_className:"Demonstrator::NumberInput"};C.AcC={LabelDataSync:
null,Agd:function(G){var B;A.pe([B=A._GetAutoObject(A.acq.W1),B.BCN],this);},_Init:
function(aArg){C.Jv._Init.call(this,aArg);A.kR.CF._Init.call(this.LabelDataSync={
I:this},0);this.__proto__=C.AcC;this.LabelDataSync.H(Ata);this.LabelDataSync.R(A.
aaR(A.acf.A6m));this.LabelDataSync.L(A.jb.Text);this.J(this.LabelDataSync,0);this.
YK.Ax(A.aaL(C.AVs));this.LabelDataSync.S(A.aaL(A.fl.Af));this.LabelDataSync.AY(A.
aaL(A.fl.Ak));},_Done:function(){this.__proto__=C.Jv;this.LabelDataSync._Done();
C.Jv._Done.call(this);},_ReInit:function(){C.Jv._ReInit.call(this);this.LabelDataSync.
_ReInit();this.LabelDataSync.R(A.aaR(A.acf.A6m));this.LabelDataSync.S(A.aaL(A.fl.
Af));this.LabelDataSync.AY(A.aaL(A.fl.Ak));},_Mark:function(D){var B;C.Jv._Mark.
call(this,D);if((B=this.LabelDataSync)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Demonstrator::SyncAction"};C.AVs={_class:function(){return A.aci.Al;},0:{FileName:
"./res_index/DemonstratorSyncIcon.png",Format:A._PIXEL_FORMAT_NATIVE,NoOfFrames:
1,FrameSize:[50,60],FrameDelay:0,_this:null}};C.Abn={TimespanDaysToString:null,AvC:
function(aIndex){if(this.Aq4()>aIndex)return this.TimespanDaysToString.BT(aIndex
);A.ab5("%s",Alg);return A.jV;},Aq4:function(){return 4;},C7:function(aIndex){var
Ajd=0;switch(aIndex){case 0:Ajd=0;break;case 1:Ajd=1;break;case 2:Ajd=2;break;case
3:Ajd=3;break;default:throw new Error(Ayi+aIndex.toFixed());}return Ajd;},_Init:
function(aArg){A.acr.V0._Init.call(this,aArg);A.Device.TimespanDaysToString._Init.
call(this.TimespanDaysToString={I:this},0);this.__proto__=C.Abn;},_Done:function(
){this.__proto__=A.acr.V0;this.TimespanDaysToString._Done();A.acr.V0._Done.call(
this);},_ReInit:function(){A.acr.V0._ReInit.call(this);this.TimespanDaysToString.
_ReInit();},_Mark:function(D){var B;A.acr.V0._Mark.call(this,D);if((B=this.TimespanDaysToString
)._cycle!=D)B._Mark(B._cycle=D);},_className:"Demonstrator::DatePickerUnitDD"};C.
BGz={GL:0,AWa:1,Hl:2,Year:3};C.ACX={_class:function(){return A.aci.Al;},0:{FileName:
"./res_index/DemonstratorEarTagIcon.png",Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:
2,FrameSize:[37,37],FrameDelay:0,_this:null}};C.Ax1={_class:function(){return A.
aci.Al;},0:{FileName:"./res_index/DemonstratorTransponderEarTagIcon.png",Format:
A._PIXEL_FORMAT_ALPHA8,NoOfFrames:2,FrameSize:[37,37],FrameDelay:0,_this:null}};
C.ZN={Aek:null,Init:function(aArg){var Av=A._NewObject(A.Core.Bs,0);Av.Initialize(
A._GetAutoObject(A.Device.Helper).Dv());var A2e=Av.Format(Ix);this.Aek.R(A2e);},
Agd:function(G){var B;var JI=this.Aek.String;var O;O=JI.indexOf(String.fromCharCode(
0x2E),0);while(O>=0){JI=A.ab1(JI,O,1);O=JI.indexOf(String.fromCharCode(0x2E),O);
}JI=JI+Ayj;JI=JI+A._GetAutoObject(A.acj.VO).ADi(JI).toFixed();var A2e=A._GetAutoObject(
A.Device.AkL).Bf$(JI);A._GetAutoObject(A.aco.GM).BCD(((B=(A2e|0))<0)?B+0x100000000:
B);},_Init:function(aArg){C.Jv._Init.call(this,aArg);C.ANW._Init.call(this.Aek={
I:this},0);this.__proto__=C.ZN;this.Aek.H(Rr);this.Aek.L(A.jb.Text);this.Aek.BnR(
10);this.J(this.Aek,-1);this.YK.Ax(A.aaL(A.ach.Ard));this.Init(aArg);},_Done:function(
){this.__proto__=C.Jv;this.Aek._Done();C.Jv._Done.call(this);},_ReInit:function(
){C.Jv._ReInit.call(this);this.Aek._ReInit();},_Mark:function(D){var B;C.Jv._Mark.
call(this,D);if((B=this.Aek)._cycle!=D)B._Mark(B._cycle=D);},_className:"Demonstrator::ScanDateAction"
};C.Afn={BGO:0,BGK:1,VO:2,LAST:3};C.AhH={AhI:null,AvC:function(aIndex){if(this.Aq4(
)>aIndex)return this.AhI.BT(aIndex);A.ab5("%s",Alg);return A.jV;},Aq4:function(){
return 3;},_Init:function(aArg){A.acr.V0._Init.call(this,aArg);C.AhI._Init.call(
this.AhI={I:this},0);this.__proto__=C.AhH;},_Done:function(){this.__proto__=A.acr.
V0;this.AhI._Done();A.acr.V0._Done.call(this);},_ReInit:function(){A.acr.V0._ReInit.
call(this);this.AhI._ReInit();},_Mark:function(D){var B;A.acr.V0._Mark.call(this
,D);if((B=this.AhI)._cycle!=D)B._Mark(B._cycle=D);},_className:"Demonstrator::ScanTypeDD"
};C.AhI={BT:function(A9){var BdE=A9;var ALf=A.jV;switch(BdE){case 2:ALf=A.aaR(A.
acf.VO);break;case 0:ALf=A.aaR(A.acf.Transponder);break;case 1:ALf=A.aaR(A.acf.Bi_
);break;default:throw new Error(Ayk+BdE.toFixed());}return ALf;},_Init:function(
aArg){A.Device.EnumToString._Init.call(this,aArg);this.__proto__=C.AhI;},_className:
"Demonstrator::ScanTypeToString"};C.ANW={BfE:function(G){var Bgm=0;var O=this.String.
indexOf(String.fromCharCode(0x2E),0);while(O>=0){Bgm++;O++;O=this.String.indexOf(
String.fromCharCode(0x2E),O);}if(Bgm>=2)return;if(this.String.length>=this.Av5)return;
this.R(A.abU(this.String,Tk,this.D6));this.D6=this.D6+1;this.LF=true;A.pe(this.Dk
,this);},_Init:function(aArg){C.Akq._Init.call(this,aArg);this.__proto__=C.ANW;}
,_className:"Demonstrator::DateInput"};
C._Init=function(){C.AV6.__proto__=A.acn.Menu;C.AU0.__proto__=A.Core.P;C.AMJ.__proto__=
C.Ba;C.Mr.__proto__=A.Core.P;C.Yz.__proto__=C.Arn;C.Abo.__proto__=A.Core.P;C.AvL.
__proto__=A.acn.AhC;C.AMX.__proto__=C.FE;C.AuK.__proto__=C.FE;C.Ba.__proto__=A.Core.
P;C.FE.__proto__=A.Core.P;C.ANX.__proto__=A.acn.AhA;C.AhL.__proto__=A.Core.P;C.AMQ.
__proto__=C.AhL;C.VF.__proto__=C.AuK;C.AMj.__proto__=A.Core.P;C.Jv.__proto__=A.Core.
P;C.ZO.__proto__=C.Jv;C.AcD.__proto__=C.Jv;C.Arn.__proto__=A.Core.P;C.Aev.__proto__=
A.Core.P;C.O2.__proto__=C.Akq;C.Akq.__proto__=A.acn.Ji;C.AcC.__proto__=C.Jv;C.Abn.
__proto__=A.acr.V0;C.ZN.__proto__=C.Jv;C.AhH.__proto__=A.acr.V0;C.AhI.__proto__=
A.Device.EnumToString;C.ANW.__proto__=C.Akq;};C._ReInit=function(){};C.DI=function(
D){var B;if((B=C.Background[0]._this)&&(B._cycle!=D))B._Done(C.Background[0]._this=
null);if((B=C.ANh[0]._this)&&(B._cycle!=D))B._Done(C.ANh[0]._this=null);if((B=C.
ANi[0]._this)&&(B._cycle!=D))B._Done(C.ANi[0]._this=null);if((B=C.ANj[0]._this)&&(
B._cycle!=D))B._Done(C.ANj[0]._this=null);if((B=C.ANk[0]._this)&&(B._cycle!=D))B.
_Done(C.ANk[0]._this=null);if((B=C.AQn[0]._this)&&(B._cycle!=D))B._Done(C.AQn[0].
_this=null);if((B=C.Filter[0]._this)&&(B._cycle!=D))B._Done(C.Filter[0]._this=null
);if((B=C.AR_[0]._this)&&(B._cycle!=D))B._Done(C.AR_[0]._this=null);if((B=C.Ajv[
0]._this)&&(B._cycle!=D))B._Done(C.Ajv[0]._this=null);if((B=C.AM0[0]._this)&&(B.
_cycle!=D))B._Done(C.AM0[0]._this=null);if((B=C.AsE[0]._this)&&(B._cycle!=D))B._Done(
C.AsE[0]._this=null);if((B=C.AVx[0]._this)&&(B._cycle!=D))B._Done(C.AVx[0]._this=
null);if((B=C.AHE[0]._this)&&(B._cycle!=D))B._Done(C.AHE[0]._this=null);if((B=C.
AWl[0]._this)&&(B._cycle!=D))B._Done(C.AWl[0]._this=null);if((B=C.AVs[0]._this)&&(
B._cycle!=D))B._Done(C.AVs[0]._this=null);if((B=C.ACX[0]._this)&&(B._cycle!=D))B.
_Done(C.ACX[0]._this=null);if((B=C.Ax1[0]._this)&&(B._cycle!=D))B._Done(C.Ax1[0].
_this=null);};return C;})();

/* VitalControl demonstration application, © Urban GmbH & Co.KG 2025 */