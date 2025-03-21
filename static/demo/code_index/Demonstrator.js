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
var I0=[58,10,120,50];var Iw=[0,0,60,60];var O$=[120,0,360,60];var Qb="\u2015";var
Qc=[0,0,240,60];var CR=[0,0,40,60];var Fe=[100,0,130,60];var L9=[43,0,100,60];var
Qd=[125,0,240,60];var J9=[0,0];var Oh=[100,0];var Qe=[100,60];var MQ=[0,60];var Te=[
107,0];var U0=[240,0];var Aab=[240,60];var Xe=[107,60];var Ix="%d.%m.%Y";var U1=
"Unhandled date unit: ";var Aac=[0,0,200,180];var U2=[36,0,200,30];var Aad=[0,30
,160,60];var Xf="Text";var Aae=[0,70,40,110];var Aaf=[44,70,156,110];var U3=[160
,70,200,110];var Xg=[7,2,27,25];var Pa=[0,30,170,180];var Aag=[170,34,190,57];var
Oi=[0,0,40,40];var Rp=[0,40];var Xh=[40,40];var Xi=[40,0];var Tf=[0,0,370,100];var
Xj=[20,0,290,60];var Aah=[0,60,370,100];var Xk="Cap";var Xl=[20,0,370,60];var Tg=[
310,0,370,60];var Th=[370,0];var Ti=[370,60];var Aai="UpdateData is called for the base class ListItemBase. Please make "+
"sure this method is implemented by a derived class.";var Tj=".";var Aaj=[0,0,170
,150];var AfE=[0,59,170,90];var Aak=[110,0,170,150];var Xm=[0,30];var Aal=[50,0,
100,150];var Xn=[0,0,40,150];var AhX=[0,0,370,240];var K4=[0,60,370,710];var AcQ=[
0,0,370,300];var LB=[0,60,370,300];var AhY=[0,60,370,120];var Aoi=[0,120,370,180
];var Oj=[0,180,370,240];var Xo=[0,240,370,300];var Aam=[370,120];var AfF=[0,120
];var AhZ=[370,180];var AcR=[0,180];var U4=[370,240];var Aoj=[0,240];var Aok=[370
,300];var Aol=[0,300];var Aom=[0,0,50,60];var Ald=[50,0,100,60];var As5="Unhandled scan type";
var Ayb=[3,11,253,51];var Ayc=[57,0];var Pb=[57,60];var Rq=[100,10,370,50];var Ayd=
"276000901234567";var U5=[3,10,57,50];var As6=[3,11,55,50];var Aye="Unhandled temperature unit";
var Ayf=[110,0,260,60];var Ale=[235,10,370,50];var Ayg="39.5";var AfG=[0,0,270,40
];var Aon=[270,0];var I1=[270,40];var Aoo=[150,0,170,40];var As7=[205,10,207,30];
var Xp=[0,0,370,40];var As8=[50,0,320,40];var As9=" ";var As_=[135,23];var Aop=[
135,0];var As$=[100,0,370,60];var Alf="Error: Nullpointer Exception";var Ayh="Unknown Date Piecker Unit Index: ";
var Ayi="0";var Ayj="Unhandled scan type:";
C.Background={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/DemonstratorBackground.png"
,Format:A._PIXEL_FORMAT_NATIVE,NoOfFrames:1,FrameSize:[1000,740],FrameDelay:0,_this:
null}};C.ANf={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/DemonstratorButtonLeft.png"
,Format:A._PIXEL_FORMAT_NATIVE,NoOfFrames:1,FrameSize:[40,40],FrameDelay:0,_this:
null}};C.ANg={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/DemonstratorButtonLeftPressed.png"
,Format:A._PIXEL_FORMAT_NATIVE,NoOfFrames:1,FrameSize:[40,40],FrameDelay:0,_this:
null}};C.ANh={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/DemonstratorButtonRight.png"
,Format:A._PIXEL_FORMAT_NATIVE,NoOfFrames:1,FrameSize:[40,40],FrameDelay:0,_this:
null}};C.ANi={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/DemonstratorButtonRightPressed.png"
,Format:A._PIXEL_FORMAT_NATIVE,NoOfFrames:1,FrameSize:[40,40],FrameDelay:0,_this:
null}};C.AQl={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/DemonstratorIconDatePicker.png"
,Format:A._PIXEL_FORMAT_NATIVE,NoOfFrames:1,FrameSize:[20,23],FrameDelay:0,_this:
null}};C.Filter={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/DemonstratorFilter.png"
,Format:A._PIXEL_FORMAT_NATIVE,NoOfFrames:1,FrameSize:[15,16],FrameDelay:0,_this:
null}};C.AR8={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/DemonstratorMenuIcon.png"
,Format:A._PIXEL_FORMAT_NATIVE,NoOfFrames:1,FrameSize:[20,16],FrameDelay:0,_this:
null}};C.Aju={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/DemonstratorArrowRight.png"
,Format:A._PIXEL_FORMAT_NATIVE,NoOfFrames:1,FrameSize:[17,16],FrameDelay:0,_this:
null}};C.AMY={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/DemonstratorArrowDown.png"
,Format:A._PIXEL_FORMAT_NATIVE,NoOfFrames:1,FrameSize:[17,16],FrameDelay:0,_this:
null}};C.AsD={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/DemonstratorScanIcon.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:2,FrameSize:[37,37],FrameDelay:0,_this:
null}};C.AVv={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/DemonstratorTemperatureIcon.png"
,Format:A._PIXEL_FORMAT_NATIVE,NoOfFrames:1,FrameSize:[17,37],FrameDelay:0,_this:
null}};C.AV4={Aef:null,AX:null,AR:null,Background:null,Ic:null,AD:null,IX:null,Do:
null,Lo:null,A8c:null,A8D:0,Bl:function(aSize){A.acn.Menu.Bl.call(this,aSize);this.
IX.H(A.abP(this.IX.M,this.AD.OY));this.IX.H([].concat(this.IX.M.slice(0,3),aSize[
1]));},Ai:function(Ae){var B;A.acn.Menu.Ai.call(this,Ae);var IG=((Ae&0x40)===0x40
);if(IG&&(this.AD.Gu<0))this.AD.GU(0);},N8:function(E){if(this.Lo===E)return;this.
Lo=E;this.AD.N8(E);},BnP:function(E){var B;if(this.A8c===E)return;if(!!this.Aef){
this.HR(this.Aef);this.Aef=null;}if(!!E){this.Aef=(C.FE.isPrototypeOf(B=A._NewObject(
E,0))?B:null);this.Aef.A_L([this,this.Akt]);this.Aef.A_M([this,this.Aku]);this.Aef.
BnV(null);this.J(this.Aef,0);this.AD.A_S((B=this.Aef.M)[3]-B[1]);}else this.AD.A_S(
0);this.IX.H(A.abP(this.IX.M,this.AD.OY));A.pe([this,this.Fj],this);this.A8c=E;}
,Ho:function(G){var B;var Gh=this.AD.G8;var Aa=(C.Ba.isPrototypeOf(B=this.AD.Cj)?
B:null);if(!Aa)return;Aa.Zy(this.AX);Aa.Ch(Gh);Aa.ZC(this.AR);Aa.H(A.abK(Aa.M,[(
B=this.AD.M)[2]-B[0],this.AD.GO]));},Zy:function(E){var B;if(this.AX===E)return;
if(!!this.AX){A.z9([this,this.Ch],this.AX,0);A.z$([this,this.Aob],[B=this.AX,B.Fo
,B.Fs],0);}this.AX=E;if(!!E){A.zV([this,this.Ch],E,0);A.zX([this,this.Aob],[E,E.
Fo,E.Fs],0);}A.pe([this,this.Ch],this);A.pe([this,this.Aob],this);},Ch:function(
G){if(!!this.AX){this.AD.JD(this.AX.B_());this.AD.AbM(0,this.AD.AZ-1);}else this.
AD.JD(0);if(this.A8D!==this.AD.AZ){this.AD.ABY(null,null);this.A8D=this.AD.AZ;}A.
pe([this,this.Fj],this);},Aku:function(G){var B;this.H(A.abI(this.M,(B=this.AD.AO3(
))[3]-B[1]));},Akt:function(G){this.H(A.abI(this.M,180));},A90:function(G){var JH=(
A.Core.BF.isPrototypeOf(G)?G:null);var Gh=this.AD.Gu;if(JH.CP===4)Gh=Gh-1;else if(
JH.CP===5)Gh=Gh+1;else if((JH.Dy>=0x30)&&(JH.Dy<=0x39))A._GetAutoObject(A.aco.AgQ
).Ez(JH.Dy);else if(JH.CP===45)A._GetAutoObject(A.aco.AgQ).Delete();else JH.Mw=true;
if((Gh<0)||(Gh>=this.AD.AZ))return;this.AD.GU(Gh);this.BzF(Gh,true);},Bzu:function(
G){var Aa=(C.Ba.isPrototypeOf(G)?G:null);this.AD.GU(Aa.Ht);},BzF:function(Hb,Ac4
){var B;if((Hb<0)||(Hb>=this.AD.AZ))return;var Az=this.AD.Aq1(Hb,Hb);var Be=this.
AD.M;Be=A.abP(Be,(B=this.AD.AO3())[3]-B[1]);Be=A.abI(Be,(((B=this.AD.M)[3]-B[1])-((
B=this.AD.AO3())[3]-B[1]))-((B=this.AD.BjM())[3]-B[1]));var LT=A.lb(Az,Be);if((!
Ac4&&!((LT[0]>=LT[2])||(LT[1]>=LT[3])))||(Ac4&&A.aaY(LT,Az)))return;var Bq=0;if(
Az[3]>Be[3])Bq=Az[3]-Be[3];if(Bq>(Az[1]-Be[1]))Bq=(Az[3]-Be[1])-this.AD.GO;this.
AD.Gc(this.AD.Br-Bq);},Aob:function(G){this.AD.GU(-1);},Fj:function(G){var B;this.
IX.MG(this.AD.GO*this.AD.AZ);this.IX.MI(((B=this.AD.M)[3]-B[1])-this.AD.OY);this.
IX.MH(-this.AD.Br);},_Init:function(aArg){A.acn.Menu._Init.call(this,aArg);A.acg.
AL._Init.call(this.Background={I:this},0);A.Core.Ic._Init.call(this.Ic={I:this},
0);A.Core.CM._Init.call(this.AD={I:this},0);A.kR.Ay._Init.call(this.IX={I:this},
0);A.Core.BF._Init.call(this.Do={I:this},0);this.__proto__=C.AV4;this.H(Cf);this.
Background.A1(0x3);this.Background.H(Cf);this.Ic.A1(0x3F);this.Ic.H(Cf);this.AD.
A1(0x3F);this.AD.H(Cf);this.AD.Ae9(60);this.AD.JD(0);this.AD.N8(this.Lo);this.IX.
A1(0x3A);this.IX.H(BD);this.IX.L(0xFF808080);this.J(this.Background,0);this.J(this.
Ic,0);this.J(this.AD,0);this.J(this.IX,0);this.AD.Em=[this,this.Fj];this.AD.Ho=[
this,this.Ho];this.AD.Axb(this.Ic);this.AR=[this,this.Bzu];this.Do.BG=[this,this.
A90];this.Do.D1=[this,this.A90];},_Done:function(){this.__proto__=A.acn.Menu;this.
Background._Done();this.Ic._Done();this.AD._Done();this.IX._Done();this.Do._Done(
);A.acn.Menu._Done.call(this);},_ReInit:function(){A.acn.Menu._ReInit.call(this);
this.Background._ReInit();this.Ic._ReInit();this.AD._ReInit();this.IX._ReInit();
this.Do._ReInit();},_Mark:function(D){var B;A.acn.Menu._Mark.call(this,D);if((B=
this.Aef)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.AX)&&(B._cycle!=D))B._Mark(
B._cycle=D);if((B=this.AR)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.
Background)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ic)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.AD)._cycle!=D)B._Mark(B._cycle=D);if((B=this.IX)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Do)._cycle!=D)B._Mark(B._cycle=D);},_className:"Demonstrator::VerticalMenu"
};C.AUY={GK:null,AL:null,BW:null,Init:function(aArg){var B;A.zX([this,this.GH],[
B=A._GetAutoObject(A.aco.GM),B.A9D,B.A_2],0);A.pe([this,this.GH],this);},Ab9:function(
E){if(this.GK===E)return;if(!!this.GK)this.HR(this.GK);this.GK=E;if(!!this.GK)this.
J(this.GK,0);this.Bb(E);this.AhF(E,this.BW);this.Am();},GH:function(G){var B;if(
!!A._GetAutoObject(A.aco.GM).AsG)this.Ab9((C.AhK.isPrototypeOf(B=A._NewObject(A.
_GetAutoObject(A.aco.GM).AsG,0))?B:null));else this.Ab9(null);},_Init:function(aArg
){A.Core.P._Init.call(this,aArg);A.acg.AL._Init.call(this.AL={I:this},0);A.acg.BW.
_Init.call(this.BW={I:this},0);this.__proto__=C.AUY;this.H(E8);this.AL.A1(0x3F);
this.AL.H(E8);this.BW.H(E8);this.BW.L(0xFF000000);this.J(this.AL,0);this.J(this.
BW,0);this.Init(aArg);},_Done:function(){this.__proto__=A.Core.P;this.AL._Done();
this.BW._Done();A.Core.P._Done.call(this);},_ReInit:function(){A.Core.P._ReInit.
call(this);this.AL._ReInit();this.BW._ReInit();},_Mark:function(D){var B;A.Core.
P._Mark.call(this,D);if((B=this.GK)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.
AL)._cycle!=D)B._Mark(B._cycle=D);if((B=this.BW)._cycle!=D)B._Mark(B._cycle=D);}
,_className:"Demonstrator::SelectionArea"};C.AMH={ABD:0,Js:0,Background:null,V:null
,Ajp:null,AdY:null,XX:null,AdZ:null,Mq:null,Mn:0,LN:false,KM:false,CQ:function(){
this.Am();},Ai:function(Ae){var B;C.Ba.Ai.call(this,Ae);var Hg=((Ae&0x10)===0x10
);var Fv=((Ae&0x20)===0x20);var IG=((Ae&0x40)===0x40);if(!Hg){this.Background.L(
0xFFAAAAAA);this.V.L(0xFF888888);this.Mq.As(false);this.Mq.Z(false);}else if(IG){
this.Background.L(A.jb.AV);this.V.L(A.jb.Bm);this.Mq.As(true);this.Mq.Z(true);}else
if(Fv){this.Background.L(0xFFE6DED8);this.V.L(0xFF000000);this.Mq.As(true);this.
Mq.Z(true);}else{this.Background.L(0xFFFFFFFF);this.V.L(0xFF000000);this.Mq.As(false
);this.Mq.Z(false);}if(!this.KM&&Fv)A._GetAutoObject(A.aco.GM).A_Z(this.ABD);this.
Mq.BnR(this.Js>0);this.Mq.Boj(this.ABD>0);this.V.R(this.Mn.toFixed());this.LN=Hg;
this.KM=Fv;},Ch:function(Ad){if(!this.AX){this.XX.Ax(A.aaL(A.ach.AeB));this.AdY.
L(A.jb.Afx);return;}this.Ht=Ad;if(!!this.AX){this.Js=this.AX.KT(Ad,26);this.ABD=
this.AX.KT(Ad,22);this.Mn=this.AX.CC(Ad,1);var AlU=this.AX.H7(Ad,11);var AlL=this.
AX.Ja(Ad,17);var LW=this.AX.Ja(Ad,13);var Ih=this.AX.Am0(Ad,14);var Xx=A._GetAutoObject(
A.Device.Helper).AMw(LW,AlU,AlL);switch(Ih){case 0:this.XX.Ax(A.aaL(A.ach.AeB));
break;case 1:this.XX.Ax(A.aaL(A.ach.AvM));break;case 2:this.XX.Ax(A.aaL(A.ach.AvP
));break;default:A.ab5("%s%e",Hs,Ih);}this.AdZ.Ax(this.XX.Al);this.AdY.L(A._GetAutoObject(
A.acj.Assessment).Qu(Xx));this.Am();}},_Init:function(aArg){C.Ba._Init.call(this
,aArg);A.acg.AL._Init.call(this.Background={I:this},0);A.kR.CG._Init.call(this.V={
I:this},0);A.acg.Ap._Init.call(this.Ajp={I:this},0);A.acg.Ap._Init.call(this.AdY={
I:this},0);A.acg.Ap._Init.call(this.XX={I:this},0);A.acg.Ap._Init.call(this.AdZ={
I:this},0);C.Mq._Init.call(this.Mq={I:this},0);this.__proto__=C.AMH;this.Background.
A1(0x3F);this.Background.H(Cf);this.V.A1(0x3F);this.V.H(I0);this.V.R(A.aaR(A.acf.
GN));this.V.A6(0x11);this.V.L(0xFF000000);this.Ajp.H(Iw);this.Ajp.L(A.jb.Text);this.
AdY.H(Iw);this.AdY.L(A.jb.E1);this.XX.H(Iw);this.AdZ.H(Iw);this.AdZ.L(A.jb.Text);
this.AdZ.Cw(1);this.Mq.A1(0x3);this.Mq.H(O$);this.J(this.Background,0);this.J(this.
V,0);this.J(this.Ajp,0);this.J(this.AdY,0);this.J(this.XX,0);this.J(this.AdZ,0);
this.J(this.Mq,0);this.V.S(A.aaL(A.fl.Af));this.V.A0(A.aaL(A.fl.Ak));this.V.Cr(A.
aaL(A.fl.Bh));this.Ajp.Ax(A.aaL(C.AHC));this.AdY.Ax(A.aaL(C.AWj));this.XX.Ax(A.aaL(
A.ach.AeB));this.AdZ.Ax(A.aaL(A.ach.AeB));},_Done:function(){this.__proto__=C.Ba;
this.Background._Done();this.V._Done();this.Ajp._Done();this.AdY._Done();this.XX.
_Done();this.AdZ._Done();this.Mq._Done();C.Ba._Done.call(this);},_ReInit:function(
){C.Ba._ReInit.call(this);this.Background._ReInit();this.V._ReInit();this.Ajp._ReInit(
);this.AdY._ReInit();this.XX._ReInit();this.AdZ._ReInit();this.Mq._ReInit();this.
V.R(A.aaR(A.acf.GN));this.V.S(A.aaL(A.fl.Af));this.V.A0(A.aaL(A.fl.Ak));this.V.Cr(
A.aaL(A.fl.Bh));this.CQ();},_Mark:function(D){var B;C.Ba._Mark.call(this,D);if((
B=this.Background)._cycle!=D)B._Mark(B._cycle=D);if((B=this.V)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Ajp)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AdY)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.XX)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
AdZ)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Mq)._cycle!=D)B._Mark(B._cycle=D);
},_className:"Demonstrator::AnimalMenuItem"};C.Mq={UG:null,WW:null,Ak1:null,Nx:null
,Oe:null,ZP:null,AcC:null,Av9:false,AxZ:false,CQ:function(){this.Am();},Ai:function(
Ae){var B;A.Core.P.Ai.call(this,Ae);var IG=((Ae&0x40)===0x40);if(IG){this.Nx.L(A.
jb.Bm);this.Oe.L(A.jb.Bm);}else{this.Nx.L(A.jb.Text);this.Oe.L(A.jb.Text);}if(this.
AxZ){this.Nx.R(A.aaR(A.acf.Bpk));if(this.Av9){this.UG.Ax(A.aaL(C.Ax0));this.WW.Ax(
A.aaL(C.Ax0));}else{this.UG.Ax(A.aaL(C.AsD));this.WW.Ax(A.aaL(C.AsD));}}else if(
this.Av9){this.UG.Ax(A.aaL(C.ACV));this.WW.Ax(A.aaL(C.ACV));this.Nx.R(Qb);}var A4B=
this.AxZ||this.Av9;this.UG.Z(A4B);this.WW.Z(A4B);this.Nx.Z(A4B);this.ZP.As(this.
AxZ);},Boj:function(E){if(this.AxZ===E)return;this.AxZ=E;this.Am();},BnR:function(
E){if(this.Av9===E)return;this.Av9=E;this.Am();},_Init:function(aArg){A.Core.P._Init.
call(this,aArg);A.acg.Ap._Init.call(this.UG={I:this},0);A.acg.Ap._Init.call(this.
WW={I:this},0);A.acg.Ap._Init.call(this.Ak1={I:this},0);A.kR.CG._Init.call(this.
Nx={I:this},0);A.kR.CG._Init.call(this.Oe={I:this},0);A.Core.Bn._Init.call(this.
ZP={I:this},0);A.Core.Bn._Init.call(this.AcC={I:this},0);this.__proto__=C.Mq;var
B;this.H(Qc);this.UG.A1(0x6);this.UG.H(CR);this.UG.L(A.jb.CU);this.UG.Cw(1);this.
WW.A1(0x6);this.WW.H(CR);this.WW.L(A.jb.Text);this.Ak1.A1(0xE);this.Ak1.H(Fe);this.
Nx.A1(0x7);this.Nx.H(L9);this.Nx.A6(0x11);this.Nx.L(0xFF000000);this.Oe.A1(0x3);
this.Oe.H(Qd);this.Oe.R(A.aaR(A.acf.Temperature));this.Oe.A6(0x11);this.Oe.L(0xFF000000
);this.ZP.A1(0x3);this.ZP.J1(J9);this.ZP.KA(Oh);this.ZP.DD(Qe);this.ZP.DN(MQ);this.
AcC.A1(0x3);this.AcC.J1(Te);this.AcC.KA(U0);this.AcC.DD(Aab);this.AcC.DN(Xe);this.
J(this.UG,0);this.J(this.WW,0);this.J(this.Ak1,0);this.J(this.Nx,0);this.J(this.
Oe,0);this.J(this.ZP,0);this.J(this.AcC,0);this.UG.Ax(A.aaL(C.AsD));this.WW.Ax(A.
aaL(C.AsD));this.Ak1.Ax(A.aaL(C.AVv));this.Nx.S(A.aaL(A.fl.Af));this.Nx.A0(A.aaL(
A.fl.Ak));this.Nx.Cr(A.aaL(A.fl.Bh));this.Oe.S(A.aaL(A.fl.Af));this.Oe.A0(A.aaL(
A.fl.Ak));this.Oe.Cr(A.aaL(A.fl.Bh));this.ZP.Lt=[B=A._GetAutoObject(A.aco.GM),B.
BfI];this.AcC.Lt=[B=A._GetAutoObject(A.aco.GM),B.Bft];},_Done:function(){this.__proto__=
A.Core.P;this.UG._Done();this.WW._Done();this.Ak1._Done();this.Nx._Done();this.Oe.
_Done();this.ZP._Done();this.AcC._Done();A.Core.P._Done.call(this);},_ReInit:function(
){A.Core.P._ReInit.call(this);this.UG._ReInit();this.WW._ReInit();this.Ak1._ReInit(
);this.Nx._ReInit();this.Oe._ReInit();this.ZP._ReInit();this.AcC._ReInit();this.
Oe.R(A.aaR(A.acf.Temperature));this.Nx.S(A.aaL(A.fl.Af));this.Nx.A0(A.aaL(A.fl.Ak
));this.Nx.Cr(A.aaL(A.fl.Bh));this.Oe.S(A.aaL(A.fl.Af));this.Oe.A0(A.aaL(A.fl.Ak
));this.Oe.Cr(A.aaL(A.fl.Bh));this.CQ();},_Mark:function(D){var B;A.Core.P._Mark.
call(this,D);if((B=this.UG)._cycle!=D)B._Mark(B._cycle=D);if((B=this.WW)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.Ak1)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Nx
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Oe)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.ZP)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AcC)._cycle!=D)B._Mark(B._cycle=
D);},_className:"Demonstrator::AnimalItemAction"};C.Yy={CQ:function(){this.Am();
},Ai:function(Ae){C.Arm.Ai.call(this,Ae);if(!this.Text.String.length)this.Text.R(
A.aaR(A.acf.Filter));},A8K:function(G){var D5=(A.Core.BF.isPrototypeOf(G)?G:null
);if(!!D5)A._GetAutoObject(A.aco.AgQ).Ez(D5.Dy);},A8I:function(G){A._GetAutoObject(
A.aco.AgQ).Delete();},_Init:function(aArg){C.Arm._Init.call(this,aArg);this.__proto__=
C.Yy;this.Ap.Ax(A.aaL(C.Filter));},_ReInit:function(){C.Arm._ReInit.call(this);this.
CQ();},_className:"Demonstrator::FilterView"};C.Abn={Dm:null,Yr:null,Sj:null,Ys:
null,DT:null,YM:null,AmM:null,Av:null,Pi:null,Nd:null,Abm:null,FZ:0,AvU:0,AGq:false
,Ai:function(Ae){A.Core.P.Ai.call(this,Ae);this.Sj.R(this.Av.Format(Ix));if(this.
AGq){this.Sj.Z(false);this.YM.Z(false);this.DT.Z(false);this.Ys.Z(false);this.Pi.
As(true);this.Pi.Z(true);this.Nd.Cw(2);this.Nd.ATJ(2);this.Nd.H(A.abM(this.Nd.M,
this.Pi.M[2]));}else{this.Sj.Z(true);this.YM.Z(true);this.DT.Z(true);this.Ys.Z(true
);this.Pi.As(false);this.Pi.Z(false);this.Nd.Cw(3);this.Nd.ATJ(3);this.Nd.H(A.abM(
this.Nd.M,this.Sj.M[2]));}},BBn:function(G){this.BnY(!this.AGq);},AdB:function(G
){var F;if(!!this.Dm)this.Uv((F=this.Dm,F[1].call(F[0])));},Acb:function(E){if(A.
aaZ(this.Dm,E))return;if(!!this.Dm)A.z$([this,this.AdB],this.Dm,0);this.Dm=E;if(
!!E)A.zX([this,this.AdB],E,0);if(!!E)A.pe([this,this.AdB],this);},Uv:function(E){
if(this.FZ===E)return;this.FZ=E;this.Av.Initialize(this.FZ);this.BCr(this);this.
Am();},AiI:function(G){var B;var F;var BP=this.FZ;var Ajc=this.Abm.C7(this.AvU);
this.AJz(Ajc);if(this.Av.Year>2100)this.Av.Initialize2(2100,12,31,0,0,0);this.Uv(((
B=(this.Av.JY()|0))<0)?B+0x100000000:B);if(this.FZ!==BP){if(!!this.Dm)(F=this.Dm
,F[2].call(F[0],this.FZ));A.abo(this.Dm,0);}},Aiu:function(G){var B;var F;var BP=
this.FZ;var Ajc=this.Abm.C7(this.AvU);this.ALm(Ajc);if(this.Av.Year<2000)this.Av.
Initialize2(2000,1,1,0,0,0);this.Uv(((B=(this.Av.JY()|0))<0)?B+0x100000000:B);if(
this.FZ!==BP){if(!!this.Dm)(F=this.Dm,F[2].call(F[0],this.FZ));A.abo(this.Dm,0);
}},Bnu:function(E){if(this.AvU===E)return;this.AvU=E;},BnY:function(E){if(this.AGq===
E)return;this.AGq=E;this.Am();},BBZ:function(G){var B;var F;var BP=this.FZ;this.
Av.Lv(this.Pi.AES());this.Av.Uz(this.Pi.AEX());this.Av.Year=this.Pi.ArL();this.Uv(((
B=(this.Av.JY()|0))<0)?B+0x100000000:B);if(this.FZ!==BP){if(!!this.Dm)(F=this.Dm
,F[2].call(F[0],this.FZ));A.abo(this.Dm,0);}},BCr:function(G){this.Pi.Lv(this.Av.
GL);this.Pi.Uz(this.Av.Hm);this.Pi.AkH(this.Av.Year);},AJz:function(Azg){var B;switch(
Azg){case 0:if(this.Av.GL<this.Av.Zu())this.Av.Lv(this.Av.GL+1);else{this.Av.Lv(
1);this.AJz(2);}break;case 1:if((this.Av.GL+7)<=this.Av.Zu())this.Av.Lv(this.Av.
GL+7);else{this.Av.Lv((7-this.Av.Zu())+this.Av.GL);this.AJz(2);}break;case 2:if(
this.Av.Hm<12)this.Av.Uz(this.Av.Hm+1);else{this.Av.Uz(1);this.AJz(3);}break;case
3:this.Av.Year++;break;default:throw new Error(U1+Azg.toFixed());}},ALm:function(
Azg){var B;switch(Azg){case 0:if(this.Av.GL>1)this.Av.Lv(this.Av.GL-1);else{this.
ALm(2);this.Av.Lv(this.Av.Zu());}break;case 1:if((this.Av.GL-7)>0)this.Av.Lv(this.
Av.GL-7);else{this.ALm(2);this.Av.Lv(this.Av.Zu()-(7-this.Av.GL));}break;case 2:
if(this.Av.Hm>1)this.Av.Uz(this.Av.Hm-1);else{this.Av.Uz(12);this.ALm(3);}break;
case 3:this.Av.Year--;break;default:throw new Error(U1+Azg.toFixed());}},BlC:function(
){return this.AvU;},_Init:function(aArg){A.Core.P._Init.call(this,aArg);A.acg.Text.
_Init.call(this.Yr={I:this},0);A.acg.Text._Init.call(this.Sj={I:this},0);C.AvK._Init.
call(this.Ys={I:this},0);A.acr.DT._Init.call(this.DT={I:this},0);C.AvK._Init.call(
this.YM={I:this},0);A.acg.Ap._Init.call(this.AmM={I:this},0);A.Core.Bs._Init.call(
this.Av={I:this},0);C.ANV._Init.call(this.Pi={I:this},0);C.AvK._Init.call(this.Nd={
I:this},0);C.Abm._Init.call(this.Abm={I:this},0);this.__proto__=C.Abn;this.H(Aac
);this.Yr.H(U2);this.Yr.A6(0x11);this.Yr.R(A.aaR(A.acf.Date));this.Yr.L(0xFF000000
);this.Sj.H(Aad);this.Sj.A6(0x11);this.Sj.R(Xf);this.Sj.L(0xFF000000);this.Ys.H(
Aae);this.Ys.A_B(200);this.DT.H(Aaf);this.DT.Ar4(120);this.DT.GO=30;this.DT.ATk(
A.jb.CU);this.DT.A_c(A.jb.CU);this.DT.A_h(A.jb.CU);this.DT.ATl(A.jb.Text);this.DT.
A_i(A.jb.Text);this.DT.A_d(A.jb.AV);this.DT.A_j(A.jb.Bm);this.DT.A_g(A.jb.AV);this.
DT.A_f(A.jb.Text);this.YM.H(U3);this.YM.A_B(200);this.AmM.H(Xg);this.Pi.H(Pa);this.
Nd.H(Aag);this.Nd.Cw(3);this.Nd.ATJ(3);this.Nd.L(A.jb.Text);this.J(this.Yr,0);this.
J(this.Sj,0);this.J(this.Ys,0);this.J(this.DT,0);this.J(this.YM,0);this.J(this.AmM
,0);this.J(this.Pi,0);this.J(this.Nd,0);this.Yr.S(A.aaL(A.fl.Ak));this.Sj.S(A.aaL(
A.fl.EK));this.Ys.AR=[this,this.Aiu];this.Ys.DC(A.aaL(C.ANf));this.Ys.ATK(A.aaL(
C.ANg));this.DT.Au([this,this.BlC,this.Bnu]);this.DT.A_p(this.Abm);this.DT.ArW(A.
aaL(A.fl.Ak));this.DT.AwR(A.aaL(A.fl.Ak));this.YM.AR=[this,this.AiI];this.YM.DC(
A.aaL(C.ANh));this.YM.ATK(A.aaL(C.ANi));this.AmM.Ax(A.aaL(C.AQl));this.Pi.Dk=[this
,this.BBZ];this.Nd.AR=[this,this.BBn];this.Nd.DC(A.aaL(A.ach.Ajv));this.Nd.ATK(A.
aaL(A.ach.Ajv));},_Done:function(){this.__proto__=A.Core.P;this.Yr._Done();this.
Sj._Done();this.Ys._Done();this.DT._Done();this.YM._Done();this.AmM._Done();this.
Av._Done();this.Pi._Done();this.Nd._Done();this.Abm._Done();A.Core.P._Done.call(
this);},_ReInit:function(){A.Core.P._ReInit.call(this);this.Yr._ReInit();this.Sj.
_ReInit();this.Ys._ReInit();this.DT._ReInit();this.YM._ReInit();this.AmM._ReInit(
);this.Av._ReInit();this.Pi._ReInit();this.Nd._ReInit();this.Abm._ReInit();this.
Yr.R(A.aaR(A.acf.Date));this.Yr.S(A.aaL(A.fl.Ak));this.Sj.S(A.aaL(A.fl.EK));this.
DT.ArW(A.aaL(A.fl.Ak));this.DT.AwR(A.aaL(A.fl.Ak));},_Mark:function(D){var B;A.Core.
P._Mark.call(this,D);if((B=this.Dm)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((
B=this.Yr)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Sj)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Ys)._cycle!=D)B._Mark(B._cycle=D);if((B=this.DT)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.YM)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AmM)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.Av)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Pi
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Nd)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Abm)._cycle!=D)B._Mark(B._cycle=D);},_className:"Demonstrator::DateSelector"
};C.AvK={C_:null,Axx:null,AN$:null,AR:null,Bo:null,Do:null,CT:null,Hx:null,YF:null
,APW:0,T0:0,AUr:0,AQ:0xFFFFFFFF,A2O:false,LN:false,KM:false,Qy:false,Ai:function(
Ae){var B;A.acn.AhB.Ai.call(this,Ae);var Hg=((Ae&0x10)===0x10);var Fv=((Ae&0x20)===
0x20);var GE=this.CT.Down&&this.CT.YP;if(!Hg)this.Hx.Ax(this.AN$);else if(GE){this.
Hx.Ax(this.Axx);this.Hx.Cw(this.AUr);}else{this.Hx.Ax(this.C_);this.Hx.Cw(this.T0
);}this.Hx.L(this.AQ);this.LN=Hg;this.KM=Fv;this.Qy=GE;},Qx:function(G){this.Am(
);A.pe(this.AR,this);},AiS:function(G){if(this.CT.Down)return;if(this.Do.Aco)return;
this.Am();if(this.Bo.Bw){A.pe(this.AR,this);this.Bo.As(false);}this.Bo.As(true);
},Bfq:function(G){this.Am();},AAU:function(G){if(!this.CT.YP)return;if(this.CT.NQ
)return;if((this.YF.VO<=0)||(this.CT.Jy<this.YF.VO)){if(this.CT.Jy>=this.Bo.VO)A.
pe(this.AR,this);else this.Bo.As(true);}this.YF.As(false);},AAT:function(G){this.
YF.As(true);if(this.Bo.Bw){A.pe(this.AR,this);this.Bo.As(false);}},DC:function(E
){if(this.C_===E)return;this.C_=E;this.Am();},ATK:function(E){if(this.Axx===E)return;
this.Axx=E;this.Am();},A3N:function(G){if(!this.CT.YP)return;if(this.CT.NQ)return;
if((this.APW>=0)&&this.A2O){this.A2O=false;this.YF.As(true);A.pe(this.AR,this);}
},A_B:function(E){if(this.APW===E)return;this.APW=E;this.YF.WO(E);},BAR:function(
G){this.A2O=true;},Cw:function(E){if(this.T0===E)return;this.T0=E;this.Am();},ATJ:
function(E){if(this.AUr===E)return;this.AUr=E;this.Am();},L:function(E){if(this.
AQ===E)return;this.AQ=E;this.Am();},_Init:function(aArg){A.acn.AhB._Init.call(this
,aArg);A.Core.Timer._Init.call(this.Bo={I:this},0);A.Core.BF._Init.call(this.Do={
I:this},0);A.Core.Bn._Init.call(this.CT={I:this},0);A.acg.Ap._Init.call(this.Hx={
I:this},0);A.Core.Timer._Init.call(this.YF={I:this},0);this.__proto__=C.AvK;this.
H(Oi);this.Bo.PZ(0);this.Bo.WO(50);this.Do.Filter=149;this.CT.A1(0x3F);this.CT.J1(
Rp);this.CT.KA(Xh);this.CT.DD(Xi);this.CT.DN(J9);this.CT.Afh=0xF;this.CT.AFL(100
);this.Hx.A1(0x3F);this.Hx.H(Oi);this.Hx.A6(0x12);this.YF.PZ(0);this.J(this.CT,0
);this.J(this.Hx,0);this.Bo.MJ=[this,this.Qx];this.Do.BG=[this,this.AiS];this.CT.
AE3=[this,this.Bfq];this.CT.Awd=[this,this.Bfq];this.CT.D1=[this,this.A3N];this.
CT.Lt=[this,this.AAU];this.CT.BG=[this,this.AAT];this.Hx.Ax(A.aaL(A.aci.TW));this.
C_=A.aaL(A.aci.TW);this.Axx=A.aaL(A.aci.TW);this.AN$=A.aaL(A.aci.TW);this.YF.MJ=[
this,this.BAR];},_Done:function(){this.__proto__=A.acn.AhB;this.Bo._Done();this.
Do._Done();this.CT._Done();this.Hx._Done();this.YF._Done();A.acn.AhB._Done.call(
this);},_ReInit:function(){A.acn.AhB._ReInit.call(this);this.Bo._ReInit();this.Do.
_ReInit();this.CT._ReInit();this.Hx._ReInit();this.YF._ReInit();},_Mark:function(
D){var B;A.acn.AhB._Mark.call(this,D);if((B=this.C_)&&(B._cycle!=D))B._Mark(B._cycle=
D);if((B=this.Axx)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.AN$)&&(B._cycle
!=D))B._Mark(B._cycle=D);if((B=this.AR)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D
);if((B=this.Bo)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Do)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.CT)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Hx)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.YF)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Demonstrator::IconButton"};C.AMV={PE:null,V:null,Aet:null,_Init:function(aArg){
C.FE._Init.call(this,aArg);A.acg.AL._Init.call(this.PE={I:this},0);A.acg.Text._Init.
call(this.V={I:this},0);C.Aet._Init.call(this.Aet={I:this},0);this.__proto__=C.AMV;
this.H(Tf);this.PE.A1(0x1D);this.PE.H(Cf);this.PE.L(0xFFE6E6E6);this.V.A1(0x1D);
this.V.H(Xj);this.V.A6(0x11);this.V.R(A.aaR(A.acf.A5D));this.V.L(0xFF000000);this.
Aet.H(Aah);this.J(this.PE,0);this.J(this.V,0);this.J(this.Aet,0);this.V.S(A.aaL(
A.fl.Af));},_Done:function(){this.__proto__=C.FE;this.PE._Done();this.V._Done();
this.Aet._Done();C.FE._Done.call(this);},_ReInit:function(){C.FE._ReInit.call(this
);this.PE._ReInit();this.V._ReInit();this.Aet._ReInit();this.V.R(A.aaR(A.acf.A5D
));this.V.S(A.aaL(A.fl.Af));},_Mark:function(D){var B;C.FE._Mark.call(this,D);if((
B=this.PE)._cycle!=D)B._Mark(B._cycle=D);if((B=this.V)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Aet)._cycle!=D)B._Mark(B._cycle=D);},_className:"Demonstrator::AnimalsHeader"
};C.AuJ={PE:null,V:null,AeV:null,AeT:null,Bn:null,DL:Xk,Ahp:false,Ai:function(Ae
){C.FE.Ai.call(this,Ae);if(this.Ahp){this.AeT.Z(true);this.AeV.Z(false);}else{this.
AeT.Z(false);this.AeV.Z(true);}},BBL:function(G){if(this.Ahp)A.pe(this.Akt,this);
else A.pe(this.Aku,this);this.Ar5(!this.Ahp);},T:function(E){if(this.DL===E)return;
this.DL=E;this.V.R(E);},Ar5:function(E){if(this.Ahp===E)return;this.Ahp=E;this.Am(
);},_Init:function(aArg){C.FE._Init.call(this,aArg);A.acg.AL._Init.call(this.PE={
I:this},0);A.acg.Text._Init.call(this.V={I:this},0);A.acg.Ap._Init.call(this.AeV={
I:this},0);A.acg.Ap._Init.call(this.AeT={I:this},0);A.Core.Bn._Init.call(this.Bn={
I:this},0);this.__proto__=C.AuJ;this.H(Cf);this.PE.A1(0x1D);this.PE.H(Cf);this.PE.
L(0xFFE6E6E6);this.V.A1(0x1D);this.V.H(Xl);this.V.A6(0x11);this.V.R(Xk);this.V.L(
0xFF000000);this.AeV.H(Tg);this.AeV.Z(false);this.AeT.A1(0x3A);this.AeT.H(Tg);this.
Bn.J1(J9);this.Bn.KA(Th);this.Bn.DD(Ti);this.Bn.DN(MQ);this.J(this.PE,0);this.J(
this.V,0);this.J(this.AeV,0);this.J(this.AeT,0);this.J(this.Bn,0);this.V.S(A.aaL(
A.fl.Af));this.AeV.Ax(A.aaL(C.AMY));this.AeT.Ax(A.aaL(C.Aju));this.Bn.Lt=[this,this.
BBL];},_Done:function(){this.__proto__=C.FE;this.PE._Done();this.V._Done();this.
AeV._Done();this.AeT._Done();this.Bn._Done();C.FE._Done.call(this);},_ReInit:function(
){C.FE._ReInit.call(this);this.PE._ReInit();this.V._ReInit();this.AeV._ReInit();
this.AeT._ReInit();this.Bn._ReInit();this.V.S(A.aaL(A.fl.Af));},_Mark:function(D
){var B;C.FE._Mark.call(this,D);if((B=this.PE)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.V)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AeV)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.AeT)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Bn)._cycle!=D)B._Mark(
B._cycle=D);},_className:"Demonstrator::AccordionHeader"};C.Ba={AX:null,AR:null,
CT:null,Ht:-1,Zy:function(E){if(this.AX===E)return;this.AX=E;},Ch:function(Ad){A.
ab5("%s",Aai);},ZC:function(E){if(A.aa0(this.AR,E))return;this.AR=E;},AAU:function(
G){if(!this.CT.YP)return;if(this.CT.NQ)return;A.pe(this.AR,this);},_Init:function(
aArg){A.Core.P._Init.call(this,aArg);A.Core.Bn._Init.call(this.CT={I:this},0);this.
__proto__=C.Ba;this.H(Cf);this.CT.A1(0x3F);this.CT.J1(MQ);this.CT.KA(Ti);this.CT.
DD(Th);this.CT.DN(J9);this.CT.Afh=0xF;this.CT.AFL(100);this.J(this.CT,0);this.CT.
Lt=[this,this.AAU];},_Done:function(){this.__proto__=A.Core.P;this.CT._Done();A.
Core.P._Done.call(this);},_ReInit:function(){A.Core.P._ReInit.call(this);this.CT.
_ReInit();},_Mark:function(D){var B;A.Core.P._Mark.call(this,D);if((B=this.AX)&&(
B._cycle!=D))B._Mark(B._cycle=D);if((B=this.AR)&&((B=B[0])._cycle!=D))B._Mark(B.
_cycle=D);if((B=this.CT)._cycle!=D)B._Mark(B._cycle=D);},_className:"Demonstrator::ListItem"
};C.FE={ASD:null,Aku:null,Akt:null,BnV:function(E){if(A.aa0(this.ASD,E))return;this.
ASD=E;},A_M:function(E){if(A.aa0(this.Aku,E))return;this.Aku=E;},A_L:function(E){
if(A.aa0(this.Akt,E))return;this.Akt=E;},_Init:function(aArg){A.Core.P._Init.call(
this,aArg);this.__proto__=C.FE;this.H(Cf);},_Mark:function(D){var B;A.Core.P._Mark.
call(this,D);if((B=this.ASD)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.
Aku)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.Akt)&&((B=B[0])._cycle
!=D))B._Mark(B._cycle=D);},_className:"Demonstrator::ListHeader"};C.ANV={Dk:null
,Abd:null,W8:null,W7:null,W6:null,Nn:null,Nm:null,KW:null,LN:false,KM:false,BCB:
false,Ai:function(Ae){var B;A.acn.Ahz.Ai.call(this,Ae);var Hg=((Ae&0x10)===0x10);
var Fv=((Ae&0x20)===0x20);var Ber=(this.W6.ZU||this.W7.ZU)||this.W8.ZU;if(Ber)this.
Abd.L(A.jb.Text);else this.Abd.L(A.jb.Bc);this.LN=Hg;this.KM=Fv;this.BCB=Ber;},AAP:
function(G){this.Am();if((!this.W6.ZU&&!this.W7.ZU)&&!this.W8.ZU){var Vk=this.AKs(
this.AEX(),this.ArL());var Adg=this.AES();this.KW.JD(Vk);if(Adg>Vk)this.Lv(Vk);A.
pe(this.Dk,this);}},A38:function(G){this.Am();},Bmj:function(G){var B;var Gh=this.
Nn.G8;var CA=(A.acg.Text.isPrototypeOf(B=this.Nn.Cj)?B:null);if(!CA)return;CA.R(
A.abl(Gh+1900,4,10));CA.S(A.aaL(A.fl.Af));CA.L(A.jb.Text);CA.A6(0x12);CA.H(A.abK(
CA.M,[(B=this.Nn.M)[2]-B[0],this.Nn.GO]));},Bmi:function(G){var B;var Gh=this.Nm.
G8;var CA=(A.acg.Text.isPrototypeOf(B=this.Nm.Cj)?B:null);if(!CA)return;CA.R(A.abl(
Gh+1,2,10)+Tj);CA.S(A.aaL(A.fl.Af));CA.L(A.jb.Text);CA.A6(0x12);CA.H(A.abK(CA.M,[(
B=this.Nm.M)[2]-B[0],this.Nm.GO]));},Bmg:function(G){var B;var Gh=this.KW.G8;var
CA=(A.acg.Text.isPrototypeOf(B=this.KW.Cj)?B:null);if(!CA)return;CA.R(A.abl(Gh+1
,2,10)+Tj);CA.S(A.aaL(A.fl.Af));CA.L(A.jb.Text);CA.A6(0x12);CA.H(A.abK(CA.M,[(B=
this.KW.M)[2]-B[0],this.KW.GO]));},ArL:function(){return 1900+((((-this.Nn.Br/this.
Nn.GO)|0)+2)%200);},AkH:function(E){if(E<1900)E=1900;if(E>2100)E=2100;this.Nn.Gc(((
E-1900)-2)*-this.Nn.GO);var Vk=this.AKs(this.AEX(),E);this.KW.JD(Vk);if(this.AES(
)>Vk)this.Lv(Vk);},AEX:function(){return 1+((((-this.Nm.Br/this.Nm.GO)|0)+2)%12);
},Uz:function(E){if(E<1)E=1;if(E>12)E=12;this.Nm.Gc(((E-1)-2)*-this.Nm.GO);var Vk=
this.AKs(E,this.ArL());this.KW.JD(Vk);if(this.AES()>Vk)this.Lv(Vk);},AES:function(
){return 1+((((-this.KW.Br/this.KW.GO)|0)+2)%this.KW.AZ);},Lv:function(E){var Vk=
this.AKs(this.AEX(),this.ArL());if(E<1)E=1;if(E>Vk)E=Vk;this.KW.Gc(((E-2)-1)*-this.
KW.GO);},AKs:function(AfO,Ac8){if(AfO===2){if(!(Ac8%4)&&(!!(Ac8%100)||!(Ac8%400)
))return 29;else return 28;}else if((((AfO===4)||(AfO===6))||(AfO===9))||(AfO===
11))return 30;else return 31;},_Init:function(aArg){A.acn.Ahz._Init.call(this,aArg
);A.acg.BW._Init.call(this.Abd={I:this},0);A.Core.Ic._Init.call(this.W8={I:this}
,0);A.Core.Ic._Init.call(this.W7={I:this},0);A.Core.Ic._Init.call(this.W6={I:this
},0);A.Core.CM._Init.call(this.Nn={I:this},0);A.Core.CM._Init.call(this.Nm={I:this
},0);A.Core.CM._Init.call(this.KW={I:this},0);this.__proto__=C.ANV;this.H(Aaj);this.
Abd.H(AfE);this.Abd.Nu(3);this.Abd.L(0xFFE1E1E1);this.Abd.Z(true);this.W8.H(Aak);
this.W8.ATX(Xm);this.W8.ATs(0.2);this.W7.H(Aal);this.W7.ATX(Xm);this.W7.ATs(0.2);
this.W6.H(Xn);this.W6.ATX(Xm);this.W6.ATs(0.2);this.Nn.H(Aak);this.Nn.ATq(true);
this.Nn.Gc(60);this.Nn.Ae9(30);this.Nn.JD(200);this.Nm.H(Aal);this.Nm.ATq(true);
this.Nm.Gc(60);this.Nm.Ae9(30);this.Nm.JD(12);this.KW.H(Xn);this.KW.ATq(true);this.
KW.Gc(60);this.KW.Ae9(30);this.KW.JD(31);this.J(this.Abd,0);this.J(this.W8,0);this.
J(this.W7,0);this.J(this.W6,0);this.J(this.Nn,0);this.J(this.Nm,0);this.J(this.KW
,0);this.W8.Zt=[this,this.AAP];this.W8.SQ=[this,this.A38];this.W7.Zt=[this,this.
AAP];this.W7.SQ=[this,this.A38];this.W6.Zt=[this,this.AAP];this.W6.SQ=[this,this.
A38];this.Nn.Ho=[this,this.Bmj];this.Nn.Axb(this.W8);this.Nm.Ho=[this,this.Bmi];
this.Nm.Axb(this.W7);this.KW.Ho=[this,this.Bmg];this.KW.Axb(this.W6);},_Done:function(
){this.__proto__=A.acn.Ahz;this.Abd._Done();this.W8._Done();this.W7._Done();this.
W6._Done();this.Nn._Done();this.Nm._Done();this.KW._Done();A.acn.Ahz._Done.call(
this);},_ReInit:function(){A.acn.Ahz._ReInit.call(this);this.Abd._ReInit();this.
W8._ReInit();this.W7._ReInit();this.W6._ReInit();this.Nn._ReInit();this.Nm._ReInit(
);this.KW._ReInit();},_Mark:function(D){var B;A.acn.Ahz._Mark.call(this,D);if((B=
this.Dk)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.Abd)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.W8)._cycle!=D)B._Mark(B._cycle=D);if((B=this.W7)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.W6)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Nn
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Nm)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.KW)._cycle!=D)B._Mark(B._cycle=D);},_className:"Demonstrator::DatePicker"
};C.AHC={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/DemonstratorWhiteTile.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[40,40],FrameDelay:0,_this:
null}};C.AWj={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/DemonstratorWhiteTileSmall.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[40,40],FrameDelay:0,_this:
null}};C.AhK={_Init:function(aArg){A.Core.P._Init.call(this,aArg);this.__proto__=
C.AhK;this.H(E8);},_className:"Demonstrator::SelectionAreaContent"};C.AMO={Y:null
,VE:null,TK:null,BCb:function(G){var B;this.TK.H(A.abI(this.TK.M,((B=this.M)[3]-
B[1])-((B=this.VE.M)[3]-B[1])));},_Init:function(aArg){C.AhK._Init.call(this,aArg
);A.Core.Y._Init.call(this.Y={I:this},0);C.AMh._Init.call(this.VE={I:this},0);C.
AV4._Init.call(this.TK={I:this},0);this.__proto__=C.AMO;this.Y.A1(0x3F);this.Y.H(
E8);this.Y.JZ(1);this.VE.H(AhX);this.VE.Aj(true);this.VE.Ar5(false);this.TK.A1(0x3
);this.TK.H(K4);this.TK.Aj(true);this.TK.N8(C.AMH);this.TK.BnP(C.AMV);this.J(this.
Y,0);this.J(this.VE,0);this.J(this.TK,0);this.Bb(this.TK);this.Y.Em=[this,this.BCb
];this.TK.Zy(A._GetAutoObject(A.aco.Aqn));},_Done:function(){this.__proto__=C.AhK;
this.Y._Done();this.VE._Done();this.TK._Done();C.AhK._Done.call(this);},_ReInit:
function(){C.AhK._ReInit.call(this);this.Y._ReInit();this.VE._ReInit();this.TK._ReInit(
);},_Mark:function(D){var B;C.AhK._Mark.call(this,D);if((B=this.Y)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.VE)._cycle!=D)B._Mark(B._cycle=D);if((B=this.TK)._cycle!=
D)B._Mark(B._cycle=D);},_className:"Demonstrator::AnimalSelectionActions"};C.VE={
_Init:function(aArg){C.AuJ._Init.call(this,aArg);this.__proto__=C.VE;this.T(A.aaR(
A.acf.A6v));},_ReInit:function(){C.AuJ._ReInit.call(this);this.T(A.aaR(A.acf.A6v
));},_className:"Demonstrator::ActionsHeader"};C.AMh={Background:null,XW:null,Y:
null,AcB:null,ZO:null,ZN:null,AcA:null,Akc:null,Akd:null,Ake:null,Akf:null,Akg:null
,Ahp:false,Init:function(aArg){var B;A.zX([this,this.AKS],[B=A._GetAutoObject(A.
aco.GM),B.AEZ,B.Asb],0);A.pe([this,this.AKS],this);},Aku:function(G){this.Ar5(true
);},Akt:function(G){this.Ar5(false);},Ar5:function(E){if(this.Ahp===E)return;this.
Ahp=E;this.XW.Ar5(E);A.pe([this,this.BfS],this);},AKS:function(G){var BCj=A._GetAutoObject(
A.aco.GM).Afl===2;A._GetAutoObject(A.Device.Helper).J6(this.ZN,BCj);},BfS:function(
G){var B;if(this.Ahp)this.H(A.abI(this.M,(B=this.XW.M)[3]-B[1]));else this.H(A.abI(
this.M,((B=this.XW.M)[3]-B[1])+((B=this.Y.Dd(0x401))[3]-B[1])));},_Init:function(
aArg){A.Core.P._Init.call(this,aArg);A.acg.AL._Init.call(this.Background={I:this
},0);C.VE._Init.call(this.XW={I:this},0);A.Core.Y._Init.call(this.Y={I:this},0);
C.AcB._Init.call(this.AcB={I:this},0);C.ZO._Init.call(this.ZO={I:this},0);C.ZN._Init.
call(this.ZN={I:this},0);C.AcA._Init.call(this.AcA={I:this},0);A.acg.C8._Init.call(
this.Akc={I:this},0);A.acg.C8._Init.call(this.Akd={I:this},0);A.acg.C8._Init.call(
this.Ake={I:this},0);A.acg.C8._Init.call(this.Akf={I:this},0);A.acg.C8._Init.call(
this.Akg={I:this},0);this.__proto__=C.AMh;var B;this.H(AcQ);this.Background.A1(0x3F
);this.Background.H(AcQ);this.XW.A1(0x1D);this.XW.H(Cf);this.Y.H(LB);this.Y.JZ(1
);this.AcB.H(AhY);this.AcB.Aj(true);this.ZO.H(Aoi);this.ZO.Aj(true);this.ZN.H(Oj
);this.ZN.Aj(true);this.AcA.H(Xo);this.AcA.Aj(true);this.Akc.DD(Ti);this.Akc.DN(
MQ);this.Akc.L(A.jb.Bc);this.Akd.DD(Aam);this.Akd.DN(AfF);this.Akd.L(A.jb.Bc);this.
Ake.DD(AhZ);this.Ake.DN(AcR);this.Ake.L(A.jb.Bc);this.Akf.DD(U4);this.Akf.DN(Aoj
);this.Akf.L(A.jb.Bc);this.Akg.DD(Aok);this.Akg.DN(Aol);this.Akg.L(A.jb.Bc);this.
J(this.Background,0);this.J(this.XW,0);this.J(this.Y,0);this.J(this.AcB,0);this.
J(this.ZO,0);this.J(this.ZN,0);this.J(this.AcA,0);this.J(this.Akc,0);this.J(this.
Akd,0);this.J(this.Ake,0);this.J(this.Akf,0);this.J(this.Akg,0);this.XW.A_M([this
,this.Aku]);this.XW.A_L([this,this.Akt]);this.Y.Em=[this,this.BfS];this.ZO.Bn_([
B=A._GetAutoObject(A.aco.GM),B.AEZ,B.Asb]);this.Init(aArg);},_Done:function(){this.
__proto__=A.Core.P;this.Background._Done();this.XW._Done();this.Y._Done();this.AcB.
_Done();this.ZO._Done();this.ZN._Done();this.AcA._Done();this.Akc._Done();this.Akd.
_Done();this.Ake._Done();this.Akf._Done();this.Akg._Done();A.Core.P._Done.call(this
);},_ReInit:function(){A.Core.P._ReInit.call(this);this.Background._ReInit();this.
XW._ReInit();this.Y._ReInit();this.AcB._ReInit();this.ZO._ReInit();this.ZN._ReInit(
);this.AcA._ReInit();this.Akc._ReInit();this.Akd._ReInit();this.Ake._ReInit();this.
Akf._ReInit();this.Akg._ReInit();},_Mark:function(D){var B;A.Core.P._Mark.call(this
,D);if((B=this.Background)._cycle!=D)B._Mark(B._cycle=D);if((B=this.XW)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.Y)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AcB
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.ZO)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.ZN)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AcA)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Akc)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Akd)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Ake)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Akf)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.Akg)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Demonstrator::ActionsMenu"};C.Jv={YJ:null,Ahb:null,Bn:null,C8:null,Agb:function(
G){},A05:function(s){this.Agb(s);},_Init:function(aArg){A.Core.P._Init.call(this
,aArg);A.acg.Ap._Init.call(this.YJ={I:this},0);A.acg.Ap._Init.call(this.Ahb={I:this
},0);A.Core.Bn._Init.call(this.Bn={I:this},0);A.acg.C8._Init.call(this.C8={I:this
},0);this.__proto__=C.Jv;this.H(Cf);this.YJ.H(Aom);this.YJ.L(A.jb.Text);this.Ahb.
H(Ald);this.Ahb.L(A.jb.Text);this.Ahb.Cw(0);this.Bn.J1(J9);this.Bn.KA(Oh);this.Bn.
DD(Qe);this.Bn.DN(MQ);this.C8.DD(Qe);this.C8.DN(Oh);this.C8.L(A.jb.Bc);this.J(this.
YJ,0);this.J(this.Ahb,0);this.J(this.Bn,0);this.J(this.C8,0);this.YJ.Ax(A.aaL(A.
aci.TW));this.Ahb.Ax(A.aaL(A.aci.AUh));this.Bn.BG=[this,this.A05];},_Done:function(
){this.__proto__=A.Core.P;this.YJ._Done();this.Ahb._Done();this.Bn._Done();this.
C8._Done();A.Core.P._Done.call(this);},_ReInit:function(){A.Core.P._ReInit.call(
this);this.YJ._ReInit();this.Ahb._ReInit();this.Bn._ReInit();this.C8._ReInit();}
,_Mark:function(D){var B;A.Core.P._Mark.call(this,D);if((B=this.YJ)._cycle!=D)B.
_Mark(B._cycle=D);if((B=this.Ahb)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Bn)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.C8)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Demonstrator::ActionsItem"};C.ZO={Afm:null,DT:null,YI:null,BW:null,Ni:null,AhG:
null,ANP:0,Init:function(aArg){A.pe([this,this.Hh],this);},Agb:function(G){var IE=
A.ab0(this.YI.String,0,10);var Im=false;switch(A._GetAutoObject(A.aco.GM).Afl){case
2:if(A._GetAutoObject(A.acq.W0).ACc)Im=A._GetAutoObject(A.aco.GM).BCy(IE);break;
case 0:case 1:Im=A._GetAutoObject(A.aco.GM).BgS(IE);break;default:A.ab5("%s%e",As5
,A._GetAutoObject(A.aco.GM).Afl);}if(Im){IE=IE+1;this.YI.R(IE.toFixed());}},BBR:
function(G){var AJw=null;var AKI=0;switch(A._GetAutoObject(A.aco.GM).Afl){case 2:{
AJw=A.aaL(A.ach.Arc);AKI=276;}break;case 0:{AJw=A.aaL(A.ach.AjY);AKI=900;}break;
case 1:{AJw=A.aaL(C.Ax0);AKI=276;}break;default:A.ab5("%s%e",As5,A._GetAutoObject(
A.aco.GM).Afl);}this.YI.R(((AKI*1000000000000)+(A.abY(this.YI.String,0,10)%1000000000000
)).toFixed());this.YJ.Ax(AJw);},Hh:function(G){var F;if(!!this.Afm)this.ATm((F=this.
Afm,F[1].call(F[0])));A.pe([this,this.BBR],this);A.we(this,0);},Bn_:function(E){
if(A.aaZ(this.Afm,E))return;if(!!this.Afm)A.z$([this,this.Hh],this.Afm,0);this.Afm=
E;if(!!E)A.zX([this,this.Hh],this.Afm,0);if(!!E)A.pe([this,this.Hh],this);},ATm:
function(E){var F;if(this.ANP===E)return;this.ANP=E;if(!!this.Afm)(F=this.Afm,F[
2].call(F[0],E));A.abo([this,this.A84,this.ATm],0);},A84:function(){return this.
ANP;},_Init:function(aArg){C.Jv._Init.call(this,aArg);A.acr.DT._Init.call(this.DT={
I:this},0);C.Akp._Init.call(this.YI={I:this},0);A.acg.BW._Init.call(this.BW={I:this
},0);A.acg.Ap._Init.call(this.Ni={I:this},0);C.AhG._Init.call(this.AhG={I:this},
0);this.__proto__=C.ZO;this.DT.H(Ayb);this.DT.Ar4(120);this.DT.GO=30;this.DT.ATk(
A.jb.Rk);this.DT.A_c(A.jb.CU);this.DT.A_h(A.jb.CU);this.DT.ATl(A.jb.Rk);this.DT.
A_i(A.jb.Text);this.DT.A_d(A.jb.AV);this.DT.A_j(A.jb.Bm);this.DT.A_g(A.jb.AV);this.
DT.A_f(A.jb.Rk);this.Bn.J1(Ayc);this.Bn.DN(Pb);this.YI.H(Rq);this.YI.R(Ayd);this.
YI.L(A.jb.Text);this.BW.H(U5);this.BW.Nu(2);this.BW.L(A.jb.Text);this.Ni.H(As6);
this.Ni.L(A.jb.Text);this.Ni.A6(0xC);this.Ni.Cw(3);this.J(this.DT,-2);this.J(this.
YI,-1);this.J(this.BW,0);this.J(this.Ni,0);this.DT.Au([this,this.A84,this.ATm]);
this.DT.A_p(this.AhG);this.DT.ArW(A.aaL(A.fl.Bh));this.DT.AwR(A.aaL(A.fl.Bh));this.
Ni.Ax(A.aaL(A.ach.Ajv));this.Init(aArg);},_Done:function(){this.__proto__=C.Jv;this.
DT._Done();this.YI._Done();this.BW._Done();this.Ni._Done();this.AhG._Done();C.Jv.
_Done.call(this);},_ReInit:function(){C.Jv._ReInit.call(this);this.DT._ReInit();
this.YI._ReInit();this.BW._ReInit();this.Ni._ReInit();this.AhG._ReInit();this.DT.
ArW(A.aaL(A.fl.Bh));this.DT.AwR(A.aaL(A.fl.Bh));},_Mark:function(D){var B;C.Jv._Mark.
call(this,D);if((B=this.Afm)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.
DT)._cycle!=D)B._Mark(B._cycle=D);if((B=this.YI)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.BW)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ni)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.AhG)._cycle!=D)B._Mark(B._cycle=D);},_className:"Demonstrator::ScanIdAction"
};C.AcB={UR:null,O2:null,A4V:0,Init:function(aArg){var B;A.zX([this,this.BBt],[B=
A._GetAutoObject(A.aco.GM),B.AS2,B.ATQ],0);A.zX([this,this.AAX],[B=A._GetAutoObject(
A.Device.Device),B.ArI,B.Atu],0);A.pe([this,this.AAX],this);},Ai:function(Ae){C.
Jv.Ai.call(this,Ae);this.O2.Z(!A._GetAutoObject(A.aco.GM).Axy);},Agb:function(G){
var B;A._GetAutoObject(A.aco.GM).Bft(this);},AAX:function(G){if(A._GetAutoObject(
A.Device.Device).TemperatureUnit!==this.A4V){switch(A._GetAutoObject(A.Device.Device
).TemperatureUnit){case 0:this.O2.R(A.abk(A._GetAutoObject(A.aco.GM).W4/100,0,1)
);break;case 1:{var Auy=A._GetAutoObject(A.Device.Converter).AVz(A._GetAutoObject(
A.aco.GM).W4/100,0,A._GetAutoObject(A.Device.Device).TemperatureUnit);this.O2.R(
A.abk(Auy,0,1));}break;default:A.ab5("%s%e",Aye,A._GetAutoObject(A.Device.Device
).TemperatureUnit);}this.A4V=A._GetAutoObject(A.Device.Device).TemperatureUnit;}
},BBc:function(G){var B;var Agt=A.abX(this.O2.String,0);Agt=A._GetAutoObject(A.Device.
Converter).AVz(Agt,A._GetAutoObject(A.Device.Device).TemperatureUnit,0);Agt*=100;
A._GetAutoObject(A.aco.GM).AF5(Math.round(Agt)|0);},BBt:function(G){this.Am();},
_Init:function(aArg){C.Jv._Init.call(this,aArg);A.acs.UR._Init.call(this.UR={I:this
},0);C.O2._Init.call(this.O2={I:this},0);this.__proto__=C.AcB;var B;this.UR.H(Ayf
);this.UR.A_F(A.aaR(A.acf.A5K));this.O2.H(Ale);this.O2.R(Ayg);this.O2.L(A.jb.Text
);this.O2.BmI(true);this.A4V=A._GetAutoObject(A.Device.Device).TemperatureUnit;this.
J(this.UR,0);this.J(this.O2,0);this.YJ.Ax(A.aaL(A.ach.Ag8));this.UR.Au([B=A._GetAutoObject(
A.aco.GM),B.AS2,B.ATQ]);this.UR.OnSetAppearance(A._GetAutoObject(A.acx.Au4));this.
O2.Dk=[this,this.BBc];this.Init(aArg);},_Done:function(){this.__proto__=C.Jv;this.
UR._Done();this.O2._Done();C.Jv._Done.call(this);},_ReInit:function(){C.Jv._ReInit.
call(this);this.UR._ReInit();this.O2._ReInit();this.UR.A_F(A.aaR(A.acf.A5K));},_Mark:
function(D){var B;C.Jv._Mark.call(this,D);if((B=this.UR)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.O2)._cycle!=D)B._Mark(B._cycle=D);},_className:"Demonstrator::TemperatureAction"
};C.Arm={Q:null,BW:null,Bn:null,AgN:null,Anb:null,Ana:null,Arr:null,Text:null,Hq:
null,Ap:null,CY:null,Arq:null,Ars:null,Apm:false,Bl:function(aSize){this.Hq.H(A.
abK(this.Hq.M,aSize));this.BW.AxF(1);this.BW.Jz(0,40);this.BW.Fk(0,aSize[0]-20,20
,12.5,12.5,-90,90,10);this.BW.Fk(0,20,20,12.5,12.5,90,270,10);this.BW.VY(0);},Ai:
function(Ae){var B;var F;A.Core.P.Ai.call(this,Ae);var IG=((Ae&0x40)===0x40);if(
IG){if(!!this.Q)this.Text.R((F=this.Q,F[1].call(F[0])));this.AgN.As(true);this.Ap.
Z(false);}else{if(!!this.Q)this.Text.R((F=this.Q,F[1].call(F[0])));this.AgN.As(false
);this.CY.Z(false);this.Ap.Z(true);}this.Apm=IG;},Agb:function(G){var B;if(!((this.
U&0x80)===0x80))this.Iq().AM7(this);},A8K:function(G){},Bbq:function(s){this.A8K(
s);},BkQ:function(G){var B;var F;if(!this.Q||!(F=this.Q,F[1].call(F[0])).length)
this.CY.H(A.abM(this.CY.M,A.aaI(this.Text.M)[0]));else{this.CY.H(A.abM(this.CY.M
,this.Text.AO4(0)[2]+2));this.CY.H(A.abO(this.CY.M,this.Text.AO4(0)[1]));this.CY.
H(A.abI(this.CY.M,(B=this.Text.AO4(0))[3]-B[1]));}this.Ap.H(A.abM(this.Ap.M,this.
Text.M[0]-((B=this.Ap.M)[2]-B[0])));},A8I:function(G){},Bbp:function(s){this.A8I(
s);},Au:function(E){if(A.aaZ(this.Q,E))return;if(!!this.Q)A.z$([this,this.Hh],this.
Q,0);this.Q=E;if(!!E)A.zX([this,this.Hh],E,0);if(!!E)A.pe([this,this.Hh],this);}
,Hh:function(G){this.Am();},Bml:function(G){var B;if(((this.U&0x80)===0x80))this.
Iq().ACY(this);},BfB:function(G){},_Init:function(aArg){A.Core.P._Init.call(this
,aArg);A.Graphics.HA._Init.call(this.BW={I:this},0);A.Core.Bn._Init.call(this.Bn={
I:this},0);A.acl.TQ._Init.call(this.AgN={I:this},0);A.Core.BF._Init.call(this.Anb={
I:this},0);A.Core.BF._Init.call(this.Ana={I:this},0);A.Core.BF._Init.call(this.Arr={
I:this},0);A.acg.Text._Init.call(this.Text={I:this},0);A.acg.Hq._Init.call(this.
Hq={I:this},0);A.acg.Ap._Init.call(this.Ap={I:this},0);A.acg.AL._Init.call(this.
CY={I:this},0);A.Core.BF._Init.call(this.Arq={I:this},0);A.Core.BF._Init.call(this.
Ars={I:this},0);this.__proto__=C.Arm;var B;this.H(AfG);this.Bn.A1(0x3F);this.Bn.
J1(J9);this.Bn.KA(Aon);this.Bn.DD(I1);this.Bn.DN(Rp);this.AgN.Fq(530);this.AgN.Ux(
530);this.Anb.Filter=143;this.Ana.Filter=45;this.Arr.Filter=1;this.Text.A1(0x3F);
this.Text.H(AfG);this.Text.Je(true);this.Text.A6(0x12);this.Text.L(0xFFB3B3B3);this.
Hq.H(AfG);this.Hq.L(0xFFB3B3B3);this.Hq.Nu(1);this.Ap.H(Aoo);this.CY.H(As7);this.
CY.L(0xFFB3B3B3);this.CY.Z(false);this.Arq.Filter=138;this.Ars.Filter=137;this.J(
this.Bn,0);this.J(this.Text,0);this.J(this.Hq,0);this.J(this.Ap,0);this.J(this.CY
,0);this.Bn.Lt=[this,this.Agb];this.AgN.Q=[B=this.CY,B.Fp,B.Z];this.Anb.BG=[this
,this.Bbq];this.Anb.D1=[this,this.Bbq];this.Ana.BG=[this,this.Bbp];this.Ana.D1=[
this,this.Bbp];this.Arr.BG=[this,this.Bml];this.Text.Q9([this,this.BkQ]);this.Text.
S(A.aaL(A.fl.Ak));this.Hq.ZD(this.BW);this.Ap.Ax(null);this.Arq.BG=[this,this.BfB
];this.Ars.BG=[this,this.BfB];},_Done:function(){this.__proto__=A.Core.P;this.BW.
_Done();this.Bn._Done();this.AgN._Done();this.Anb._Done();this.Ana._Done();this.
Arr._Done();this.Text._Done();this.Hq._Done();this.Ap._Done();this.CY._Done();this.
Arq._Done();this.Ars._Done();A.Core.P._Done.call(this);},_ReInit:function(){A.Core.
P._ReInit.call(this);this.BW._ReInit();this.Bn._ReInit();this.AgN._ReInit();this.
Anb._ReInit();this.Ana._ReInit();this.Arr._ReInit();this.Text._ReInit();this.Hq.
_ReInit();this.Ap._ReInit();this.CY._ReInit();this.Arq._ReInit();this.Ars._ReInit(
);this.Text.S(A.aaL(A.fl.Ak));},_Mark:function(D){var B;A.Core.P._Mark.call(this
,D);if((B=this.Q)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.BW)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.Bn)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
AgN)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Anb)._cycle!=D)B._Mark(B._cycle=D);
if((B=this.Ana)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Arr)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Text)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Hq)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.Ap)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
CY)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Arq)._cycle!=D)B._Mark(B._cycle=D);
if((B=this.Ars)._cycle!=D)B._Mark(B._cycle=D);},_className:"Demonstrator::InputView"
};C.Aet={Background:null,Yy:null,_Init:function(aArg){A.Core.P._Init.call(this,aArg
);A.acg.AL._Init.call(this.Background={I:this},0);C.Yy._Init.call(this.Yy={I:this
},0);this.__proto__=C.Aet;var B;this.H(Xp);this.Background.H(Xp);this.Yy.A1(0x1D
);this.Yy.H(As8);this.J(this.Background,0);this.J(this.Yy,0);this.Yy.Au([B=A._GetAutoObject(
A.aco.AgQ),B.A9A,B.AF0]);},_Done:function(){this.__proto__=A.Core.P;this.Background.
_Done();this.Yy._Done();A.Core.P._Done.call(this);},_ReInit:function(){A.Core.P.
_ReInit.call(this);this.Background._ReInit();this.Yy._ReInit();},_Mark:function(
D){var B;A.Core.P._Mark.call(this,D);if((B=this.Background)._cycle!=D)B._Mark(B.
_cycle=D);if((B=this.Yy)._cycle!=D)B._Mark(B._cycle=D);},_className:"Demonstrator::FilterRow"
};C.O2={Init:function(aArg){var B;A.zX([this,this.AAX],[B=A._GetAutoObject(A.Device.
Device),B.ArI,B.Atu],0);A.pe([this,this.AAX],this);},Ai:function(Ae){var B;C.Akp.
Ai.call(this,Ae);var IG=((this.U&0x40)===0x40);if(!IG&&(this.String.length>0))this.
Text.R(((this.String+As9)+A._GetAutoObject(A.acj.Temperature).AlQ())+String.fromCharCode(
0x0A));else this.Text.R(this.String+String.fromCharCode(0x0A));if(this.D6>this.String.
length)this.D6=this.String.length;},AAX:function(G){this.Am();},_Init:function(aArg
){C.Akp._Init.call(this,aArg);this.__proto__=C.O2;this.Init(aArg);},_className:"Demonstrator::TemperatureInputView"
};C.Akp={B7:null,Dk:null,I2:null,Cq:null,AmJ:null,Sl:null,HI:null,Bn:null,Text:null
,CY:null,AqF:null,Asn:null,BW:null,Hq:null,ArE:null,Aq_:null,AqS:null,String:A.jV
,D6:0,AQ:0xFFB3B3B3,Av4:15,ANX:false,LF:false,Bl:function(aSize){this.Hq.H(A.abK(
this.Hq.M,aSize));this.BW.AxF(1);this.BW.Jz(0,40);this.BW.Fk(0,aSize[0]-20,20,12.5
,12.5,-90,90,10);this.BW.Fk(0,20,20,12.5,12.5,90,270,10);this.BW.VY(0);},Ai:function(
Ae){var B;A.acn.Ji.Ai.call(this,Ae);if(((Ae&0x40)===0x40))this.I2.As(true);else{
this.I2.As(false);this.CY.Z(false);}},A45:function(G){var B;var Be=this.Text.M;var
NG=0;var NH=0;if(this.CY.Et[0]<Be[0])NG=Be[0]-this.CY.Et[0];if(this.CY.Et[0]>Be[
2])NG=Be[2]-this.CY.Et[0];if(this.CY.Et[1]<Be[1])NH=Be[1]-this.CY.Et[1];if(this.
CY.ED[1]>Be[3])NH=Be[3]-this.CY.ED[1];if(!!NG||!!NH)this.Text.Gc(A.abf(this.Text.
Br,[NG,NH]));NG=this.Text.Br[0];NH=this.Text.Br[1];var C6=[(B=this.Text.Dd())[2]-
B[0],B[3]-B[1]];if(C6[0]<=((B=this.Text.M)[2]-B[0]))NG=0;if(C6[1]<=((B=this.Text.
M)[3]-B[1]))NH=0;this.Text.Gc([NG,NH]);},Amr:function(G){if(!this.B7)return;var A4v=
this.Text.AG8(this.D6);var pos=this.Text.Afi(A4v);this.CY.DN(A.abe(pos,[0,this.B7.
Ascent]));this.CY.DD(A.abf(pos,[0,this.B7.Descent]));if(this.I2.Bw){this.I2.As(false
);this.I2.As(true);}if(this.LF){A.pe([this,this.A45],this);this.LF=false;}},AAT:
function(G){if(!this.A7s(0x80))this.Iq().AM7(this);var EH=this.Text.AUl(this.Bn.
H5);var Vp=this.Text.AnW(EH);if(Vp!==this.D6){this.D6=Vp;A.pe([this,this.Amr],this
);this.LF=true;}},AAM:function(G){if(!this.B7)return;var EH=this.Text.AG8(this.D6
);if(this.Cq.CP===6){EH=[EH[0]-1,EH[1]];if(this.Text.AnW(EH)===this.D6){EH=[EH[0
],EH[1]-1];EH=[this.Text.ADl(EH[1]).length,EH[1]];}}if(this.Cq.CP===7){EH=[EH[0]+
1,EH[1]];if(this.Text.AnW(EH)===this.D6){EH=[EH[0],EH[1]+1];EH=[0,EH[1]];}}var Vp=
this.Text.AnW(EH);if(Vp!==this.D6){this.D6=Vp;A.pe([this,this.Amr],this);this.LF=
true;}},Bfk:function(G){if(!this.D6)return;this.R(A.ab1(this.String,this.D6-1,1)
);this.D6=this.D6-1;this.LF=true;A.pe(this.Dk,this);},AAN:function(G){if(this.D6>=
this.String.length)return;this.R(A.ab1(this.String,this.D6,1));this.LF=true;A.pe(
this.Dk,this);},Bfp:function(G){if(this.String.length>=this.Av4)return;var Bzw=this.
HI.Dy;var Auw=String.fromCharCode(Bzw);this.R(A.abU(this.String,Auw,this.D6));this.
D6=this.D6+Auw.length;this.LF=true;A.pe(this.Dk,this);},R:function(E){if(this.String===
E)return;this.String=E;if(this.D6>(E.length+1))this.D6=E.length;this.Text.R(E+String.
fromCharCode(0x0A));this.LF=true;this.Text.Gc(J9);},L:function(E){if(this.AQ===E
)return;this.AQ=E;this.Text.L(E);this.CY.L(E);this.Hq.L(E);},S:function(E){if(this.
B7===E)return;this.B7=E;this.Text.S(E);this.LF=true;this.Text.Gc(J9);},BfC:function(
G){if(this.ANX===false)return;if(this.String.indexOf(String.fromCharCode(0x2E),0
)>=0)return;if(this.String.length>=this.Av4)return;this.R(A.abU(this.String,Tj,this.
D6));this.D6=this.D6+1;this.LF=true;A.pe(this.Dk,this);},Bcb:function(s){this.BfC(
s);},BmI:function(E){if(this.ANX===E)return;this.ANX=E;if(E===false){var Bgj=this.
String.indexOf(String.fromCharCode(0x2E),0);if(Bgj>=0)this.R(A.abV(this.String,Bgj
));}this.LF=true;this.Text.Gc(J9);},BnO:function(E){if(this.Av4===E)return;this.
Av4=E;this.R(A.abV(this.String,E));this.LF=true;this.Text.Gc(J9);},BBk:function(
G){if(this.A7s(0x80)){this.Iq().ACY(this);this.Cs(0x10,0x0);}this.Am();},BA_:function(
G){var Vp=this.String.length;if(Vp!==this.D6){this.D6=Vp;A.pe([this,this.Amr],this
);this.LF=true;}},BBb:function(G){if(!!this.D6){this.D6=0;A.pe([this,this.Amr],this
);this.LF=true;}},_Init:function(aArg){A.acn.Ji._Init.call(this,aArg);A.acl.TQ._Init.
call(this.I2={I:this},0);A.Core.BF._Init.call(this.Cq={I:this},0);A.Core.BF._Init.
call(this.AmJ={I:this},0);A.Core.BF._Init.call(this.Sl={I:this},0);A.Core.BF._Init.
call(this.HI={I:this},0);A.Core.Bn._Init.call(this.Bn={I:this},0);A.acg.Text._Init.
call(this.Text={I:this},0);A.acg.C8._Init.call(this.CY={I:this},0);A.Core.BF._Init.
call(this.AqF={I:this},0);A.Core.BF._Init.call(this.Asn={I:this},0);A.Graphics.HA.
_Init.call(this.BW={I:this},0);A.acg.Hq._Init.call(this.Hq={I:this},0);A.Core.BF.
_Init.call(this.ArE={I:this},0);A.Core.BF._Init.call(this.Aq_={I:this},0);A.Core.
BF._Init.call(this.AqS={I:this},0);this.__proto__=C.Akp;var B;this.H(AfG);this.I2.
B3=false;this.I2.Cx=true;this.I2.Fq(500);this.I2.Ux(500);this.Cq.Filter=147;this.
AmJ.Filter=45;this.Sl.Filter=44;this.HI.Filter=143;this.Bn.A1(0x3F);this.Bn.J1(Rp
);this.Bn.KA(I1);this.Bn.DD(Aon);this.Bn.DN(J9);this.Bn.AFL(3);this.Text.A1(0x3F
);this.Text.H(AfG);this.Text.KX(false);this.Text.A6(0x12);this.Text.R(A.jV);this.
Text.L(0xFFB3B3B3);this.CY.DD(As_);this.CY.DN(Aop);this.CY.A$g(2);this.CY.A$f(2);
this.CY.L(0xFFB3B3B3);this.CY.Z(false);this.AqF.Filter=138;this.Asn.Filter=137;this.
Hq.H(AfG);this.Hq.L(0xFFB3B3B3);this.Hq.Nu(1);this.ArE.Filter=1;this.Aq_.Filter=
41;this.AqS.Filter=42;this.J(this.Bn,0);this.J(this.Text,0);this.J(this.CY,0);this.
J(this.Hq,0);this.I2.Q=[B=this.CY,B.Fp,B.Z];this.Cq.BG=[this,this.AAM];this.Cq.D1=[
this,this.AAM];this.AmJ.BG=[this,this.Bfk];this.AmJ.D1=[this,this.Bfk];this.Sl.BG=[
this,this.AAN];this.Sl.D1=[this,this.AAN];this.HI.BG=[this,this.Bfp];this.HI.D1=[
this,this.Bfp];this.Bn.BG=[this,this.AAT];this.Text.Q9([this,this.Amr]);this.Text.
S(A.aaL(A.fl.Ak));this.B7=A.aaL(A.fl.Ak);this.AqF.BG=[this,this.Bcb];this.Asn.BG=[
this,this.Bcb];this.Hq.ZD(this.BW);this.ArE.BG=[this,this.BBk];this.Aq_.BG=[this
,this.BBb];this.AqS.BG=[this,this.BA_];},_Done:function(){this.__proto__=A.acn.Ji;
this.I2._Done();this.Cq._Done();this.AmJ._Done();this.Sl._Done();this.HI._Done();
this.Bn._Done();this.Text._Done();this.CY._Done();this.AqF._Done();this.Asn._Done(
);this.BW._Done();this.Hq._Done();this.ArE._Done();this.Aq_._Done();this.AqS._Done(
);A.acn.Ji._Done.call(this);},_ReInit:function(){A.acn.Ji._ReInit.call(this);this.
I2._ReInit();this.Cq._ReInit();this.AmJ._ReInit();this.Sl._ReInit();this.HI._ReInit(
);this.Bn._ReInit();this.Text._ReInit();this.CY._ReInit();this.AqF._ReInit();this.
Asn._ReInit();this.BW._ReInit();this.Hq._ReInit();this.ArE._ReInit();this.Aq_._ReInit(
);this.AqS._ReInit();this.Text.S(A.aaL(A.fl.Ak));this.S(A.aaL(A.fl.Ak));},_Mark:
function(D){var B;A.acn.Ji._Mark.call(this,D);if((B=this.B7)&&(B._cycle!=D))B._Mark(
B._cycle=D);if((B=this.Dk)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.
I2)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Cq)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.AmJ)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Sl)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.HI)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Bn)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Text)._cycle!=D)B._Mark(B._cycle=D);if((B=this.CY)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.AqF)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
Asn)._cycle!=D)B._Mark(B._cycle=D);if((B=this.BW)._cycle!=D)B._Mark(B._cycle=D);
if((B=this.Hq)._cycle!=D)B._Mark(B._cycle=D);if((B=this.ArE)._cycle!=D)B._Mark(B.
_cycle=D);if((B=this.Aq_)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AqS)._cycle!=
D)B._Mark(B._cycle=D);},_className:"Demonstrator::NumberInput"};C.AcA={LabelDataSync:
null,Agb:function(G){var B;A.pe([B=A._GetAutoObject(A.acq.W0),B.BCJ],this);},_Init:
function(aArg){C.Jv._Init.call(this,aArg);A.kR.CG._Init.call(this.LabelDataSync={
I:this},0);this.__proto__=C.AcA;this.LabelDataSync.H(As$);this.LabelDataSync.R(A.
aaR(A.acf.A6k));this.LabelDataSync.L(A.jb.Text);this.J(this.LabelDataSync,0);this.
YJ.Ax(A.aaL(C.AVq));this.LabelDataSync.S(A.aaL(A.fl.Af));this.LabelDataSync.A0(A.
aaL(A.fl.Ak));},_Done:function(){this.__proto__=C.Jv;this.LabelDataSync._Done();
C.Jv._Done.call(this);},_ReInit:function(){C.Jv._ReInit.call(this);this.LabelDataSync.
_ReInit();this.LabelDataSync.R(A.aaR(A.acf.A6k));this.LabelDataSync.S(A.aaL(A.fl.
Af));this.LabelDataSync.A0(A.aaL(A.fl.Ak));},_Mark:function(D){var B;C.Jv._Mark.
call(this,D);if((B=this.LabelDataSync)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Demonstrator::SyncAction"};C.AVq={_class:function(){return A.aci.Al;},0:{FileName:
"./res_index/DemonstratorSyncIcon.png",Format:A._PIXEL_FORMAT_NATIVE,NoOfFrames:
1,FrameSize:[50,60],FrameDelay:0,_this:null}};C.Abm={TimespanDaysToString:null,AvB:
function(aIndex){if(this.Aq3()>aIndex)return this.TimespanDaysToString.BT(aIndex
);A.ab5("%s",Alf);return A.jV;},Aq3:function(){return 4;},C7:function(aIndex){var
Ajc=0;switch(aIndex){case 0:Ajc=0;break;case 1:Ajc=1;break;case 2:Ajc=2;break;case
3:Ajc=3;break;default:throw new Error(Ayh+aIndex.toFixed());}return Ajc;},_Init:
function(aArg){A.acr.VZ._Init.call(this,aArg);A.Device.TimespanDaysToString._Init.
call(this.TimespanDaysToString={I:this},0);this.__proto__=C.Abm;},_Done:function(
){this.__proto__=A.acr.VZ;this.TimespanDaysToString._Done();A.acr.VZ._Done.call(
this);},_ReInit:function(){A.acr.VZ._ReInit.call(this);this.TimespanDaysToString.
_ReInit();},_Mark:function(D){var B;A.acr.VZ._Mark.call(this,D);if((B=this.TimespanDaysToString
)._cycle!=D)B._Mark(B._cycle=D);},_className:"Demonstrator::DatePickerUnitDD"};C.
BGv={GL:0,AV_:1,Hm:2,Year:3};C.ACV={_class:function(){return A.aci.Al;},0:{FileName:
"./res_index/DemonstratorEarTagIcon.png",Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:
2,FrameSize:[37,37],FrameDelay:0,_this:null}};C.Ax0={_class:function(){return A.
aci.Al;},0:{FileName:"./res_index/DemonstratorTransponderEarTagIcon.png",Format:
A._PIXEL_FORMAT_ALPHA8,NoOfFrames:2,FrameSize:[37,37],FrameDelay:0,_this:null}};
C.ZN={Aei:null,Init:function(aArg){var Av=A._NewObject(A.Core.Bs,0);Av.Initialize(
A._GetAutoObject(A.Device.Helper).Dv());var A2c=Av.Format(Ix);this.Aei.R(A2c);},
Agb:function(G){var B;var JI=this.Aei.String;var O;O=JI.indexOf(String.fromCharCode(
0x2E),0);while(O>=0){JI=A.ab1(JI,O,1);O=JI.indexOf(String.fromCharCode(0x2E),O);
}JI=JI+Ayi;JI=JI+A._GetAutoObject(A.acj.VN).ADg(JI).toFixed();var A2c=A._GetAutoObject(
A.Device.AkK).Bf9(JI);A._GetAutoObject(A.aco.GM).BCz(((B=(A2c|0))<0)?B+0x100000000:
B);},_Init:function(aArg){C.Jv._Init.call(this,aArg);C.ANU._Init.call(this.Aei={
I:this},0);this.__proto__=C.ZN;this.Aei.H(Rq);this.Aei.L(A.jb.Text);this.Aei.BnO(
10);this.J(this.Aei,-1);this.YJ.Ax(A.aaL(A.ach.Arc));this.Init(aArg);},_Done:function(
){this.__proto__=C.Jv;this.Aei._Done();C.Jv._Done.call(this);},_ReInit:function(
){C.Jv._ReInit.call(this);this.Aei._ReInit();},_Mark:function(D){var B;C.Jv._Mark.
call(this,D);if((B=this.Aei)._cycle!=D)B._Mark(B._cycle=D);},_className:"Demonstrator::ScanDateAction"
};C.Afl={BGK:0,BGG:1,VN:2,LAST:3};C.AhG={AhH:null,AvB:function(aIndex){if(this.Aq3(
)>aIndex)return this.AhH.BT(aIndex);A.ab5("%s",Alf);return A.jV;},Aq3:function(){
return 3;},_Init:function(aArg){A.acr.VZ._Init.call(this,aArg);C.AhH._Init.call(
this.AhH={I:this},0);this.__proto__=C.AhG;},_Done:function(){this.__proto__=A.acr.
VZ;this.AhH._Done();A.acr.VZ._Done.call(this);},_ReInit:function(){A.acr.VZ._ReInit.
call(this);this.AhH._ReInit();},_Mark:function(D){var B;A.acr.VZ._Mark.call(this
,D);if((B=this.AhH)._cycle!=D)B._Mark(B._cycle=D);},_className:"Demonstrator::ScanTypeDD"
};C.AhH={BT:function(A9){var BdC=A9;var ALd=A.jV;switch(BdC){case 2:ALd=A.aaR(A.
acf.VN);break;case 0:ALd=A.aaR(A.acf.Transponder);break;case 1:ALd=A.aaR(A.acf.Bi7
);break;default:throw new Error(Ayj+BdC.toFixed());}return ALd;},_Init:function(
aArg){A.Device.EnumToString._Init.call(this,aArg);this.__proto__=C.AhH;},_className:
"Demonstrator::ScanTypeToString"};C.ANU={BfC:function(G){var Bgk=0;var O=this.String.
indexOf(String.fromCharCode(0x2E),0);while(O>=0){Bgk++;O++;O=this.String.indexOf(
String.fromCharCode(0x2E),O);}if(Bgk>=2)return;if(this.String.length>=this.Av4)return;
this.R(A.abU(this.String,Tj,this.D6));this.D6=this.D6+1;this.LF=true;A.pe(this.Dk
,this);},_Init:function(aArg){C.Akp._Init.call(this,aArg);this.__proto__=C.ANU;}
,_className:"Demonstrator::DateInput"};
C._Init=function(){C.AV4.__proto__=A.acn.Menu;C.AUY.__proto__=A.Core.P;C.AMH.__proto__=
C.Ba;C.Mq.__proto__=A.Core.P;C.Yy.__proto__=C.Arm;C.Abn.__proto__=A.Core.P;C.AvK.
__proto__=A.acn.AhB;C.AMV.__proto__=C.FE;C.AuJ.__proto__=C.FE;C.Ba.__proto__=A.Core.
P;C.FE.__proto__=A.Core.P;C.ANV.__proto__=A.acn.Ahz;C.AhK.__proto__=A.Core.P;C.AMO.
__proto__=C.AhK;C.VE.__proto__=C.AuJ;C.AMh.__proto__=A.Core.P;C.Jv.__proto__=A.Core.
P;C.ZO.__proto__=C.Jv;C.AcB.__proto__=C.Jv;C.Arm.__proto__=A.Core.P;C.Aet.__proto__=
A.Core.P;C.O2.__proto__=C.Akp;C.Akp.__proto__=A.acn.Ji;C.AcA.__proto__=C.Jv;C.Abm.
__proto__=A.acr.VZ;C.ZN.__proto__=C.Jv;C.AhG.__proto__=A.acr.VZ;C.AhH.__proto__=
A.Device.EnumToString;C.ANU.__proto__=C.Akp;};C._ReInit=function(){};C.DI=function(
D){var B;if((B=C.Background[0]._this)&&(B._cycle!=D))B._Done(C.Background[0]._this=
null);if((B=C.ANf[0]._this)&&(B._cycle!=D))B._Done(C.ANf[0]._this=null);if((B=C.
ANg[0]._this)&&(B._cycle!=D))B._Done(C.ANg[0]._this=null);if((B=C.ANh[0]._this)&&(
B._cycle!=D))B._Done(C.ANh[0]._this=null);if((B=C.ANi[0]._this)&&(B._cycle!=D))B.
_Done(C.ANi[0]._this=null);if((B=C.AQl[0]._this)&&(B._cycle!=D))B._Done(C.AQl[0].
_this=null);if((B=C.Filter[0]._this)&&(B._cycle!=D))B._Done(C.Filter[0]._this=null
);if((B=C.AR8[0]._this)&&(B._cycle!=D))B._Done(C.AR8[0]._this=null);if((B=C.Aju[
0]._this)&&(B._cycle!=D))B._Done(C.Aju[0]._this=null);if((B=C.AMY[0]._this)&&(B.
_cycle!=D))B._Done(C.AMY[0]._this=null);if((B=C.AsD[0]._this)&&(B._cycle!=D))B._Done(
C.AsD[0]._this=null);if((B=C.AVv[0]._this)&&(B._cycle!=D))B._Done(C.AVv[0]._this=
null);if((B=C.AHC[0]._this)&&(B._cycle!=D))B._Done(C.AHC[0]._this=null);if((B=C.
AWj[0]._this)&&(B._cycle!=D))B._Done(C.AWj[0]._this=null);if((B=C.AVq[0]._this)&&(
B._cycle!=D))B._Done(C.AVq[0]._this=null);if((B=C.ACV[0]._this)&&(B._cycle!=D))B.
_Done(C.ACV[0]._this=null);if((B=C.Ax0[0]._this)&&(B._cycle!=D))B._Done(C.Ax0[0].
_this=null);};return C;})();

/* VitalControl demonstration application, © Urban GmbH & Co.KG 2025 */