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
var Ce=[0,0,370,60];var BD=[360,0,370,60];var E7=[0,0,370,710];var Hr="Unknown animalType";
var IW=[58,10,120,50];var It=[0,0,60,60];var O6=[120,0,360,60];var P_="\u2015";var
P$=[0,0,240,60];var CR=[0,0,40,60];var Ff=[100,0,130,60];var L5=[43,0,100,60];var
Qa=[125,0,240,60];var J7=[0,0];var Od=[100,0];var Qb=[100,60];var ML=[0,60];var S$=[
107,0];var UW=[240,0];var Z6=[240,60];var W9=[107,60];var Iu="%d.%m.%Y";var UX="Unhandled date unit: ";
var Z7=[0,0,200,180];var UY=[36,0,200,30];var Z8=[0,30,160,60];var W_="Text";var
Z9=[0,70,40,110];var Z_=[44,70,156,110];var UZ=[160,70,200,110];var W$=[7,2,27,25
];var O7=[0,30,170,180];var Z$=[170,34,190,57];var Oe=[0,0,40,40];var Rn=[0,40];
var Xa=[40,40];var Xb=[40,0];var Ta=[0,0,370,100];var Xc=[20,0,290,60];var Aaa=[
0,60,370,100];var Xd="Cap";var Xe=[20,0,370,60];var Tb=[310,0,370,60];var Tc=[370
,0];var Td=[370,60];var Aab="UpdateData is called for the base class ListItemBase. Please make "+
"sure this method is implemented by a derived class.";var Te=".";var Aac=[0,0,170
,150];var AfB=[0,59,170,90];var Aad=[110,0,170,150];var Xf=[0,30];var Aae=[50,0,
100,150];var Xg=[0,0,40,150];var AhX=[0,0,370,240];var K1=[0,60,370,710];var AcN=[
0,0,370,300];var Ly=[0,60,370,300];var AhY=[0,60,370,120];var Aof=[0,120,370,180
];var Of=[0,180,370,240];var Xh=[0,240,370,300];var Aaf=[370,120];var AfC=[0,120
];var AhZ=[370,180];var AcO=[0,180];var U0=[370,240];var Aog=[0,240];var Aoh=[370
,300];var Aoi=[0,300];var Aoj=[0,0,50,60];var Alc=[50,0,100,60];var AsZ="Unhandled scan type";
var Ax8=[3,11,253,51];var Ax9=[50,0];var O8=[50,60];var Ro=[100,10,370,50];var Ax_=
"276000901234567";var U1=[3,10,57,50];var As0=[3,11,55,50];var Ax$="Unhandled temperature unit";
var Aya=[110,0,260,60];var Ayb=[235,10,370,50];var Aok="39.5";var AfD=[0,0,270,40
];var Aol=[270,0];var IX=[270,40];var Aom=[150,0,170,40];var As1=[205,10,207,30];
var Xi=[0,0,370,40];var As2=[50,0,320,40];var As3=" ";var As4=[135,23];var Aon=[
135,0];var As5=[100,0,370,60];var Ald="Error: Nullpointer Exception";var Ayc="Unknown Date Piecker Unit Index: ";
var Ayd="0";var Aye="Unhandled scan type:";
C.Background={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/DemonstratorBackground.png"
,Format:A._PIXEL_FORMAT_NATIVE,NoOfFrames:1,FrameSize:[1000,740],FrameDelay:0,_this:
null}};C.ANa={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/DemonstratorButtonLeft.png"
,Format:A._PIXEL_FORMAT_NATIVE,NoOfFrames:1,FrameSize:[40,40],FrameDelay:0,_this:
null}};C.ANb={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/DemonstratorButtonLeftPressed.png"
,Format:A._PIXEL_FORMAT_NATIVE,NoOfFrames:1,FrameSize:[40,40],FrameDelay:0,_this:
null}};C.ANc={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/DemonstratorButtonRight.png"
,Format:A._PIXEL_FORMAT_NATIVE,NoOfFrames:1,FrameSize:[40,40],FrameDelay:0,_this:
null}};C.ANd={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/DemonstratorButtonRightPressed.png"
,Format:A._PIXEL_FORMAT_NATIVE,NoOfFrames:1,FrameSize:[40,40],FrameDelay:0,_this:
null}};C.AQg={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/DemonstratorIconDatePicker.png"
,Format:A._PIXEL_FORMAT_NATIVE,NoOfFrames:1,FrameSize:[20,23],FrameDelay:0,_this:
null}};C.Filter={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/DemonstratorFilter.png"
,Format:A._PIXEL_FORMAT_NATIVE,NoOfFrames:1,FrameSize:[15,16],FrameDelay:0,_this:
null}};C.AR1={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/DemonstratorMenuIcon.png"
,Format:A._PIXEL_FORMAT_NATIVE,NoOfFrames:1,FrameSize:[20,16],FrameDelay:0,_this:
null}};C.Ajt={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/DemonstratorArrowRight.png"
,Format:A._PIXEL_FORMAT_NATIVE,NoOfFrames:1,FrameSize:[17,16],FrameDelay:0,_this:
null}};C.AMS={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/DemonstratorArrowDown.png"
,Format:A._PIXEL_FORMAT_NATIVE,NoOfFrames:1,FrameSize:[17,16],FrameDelay:0,_this:
null}};C.Asx={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/DemonstratorScanIcon.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:2,FrameSize:[37,37],FrameDelay:0,_this:
null}};C.AVk={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/DemonstratorTemperatureIcon.png"
,Format:A._PIXEL_FORMAT_NATIVE,NoOfFrames:1,FrameSize:[17,37],FrameDelay:0,_this:
null}};C.AVT={Aee:null,AX:null,AR:null,Background:null,H$:null,AD:null,IT:null,Do:
null,Ll:null,A74:null,A8t:0,Bl:function(aSize){A.acn.Menu.Bl.call(this,aSize);this.
IT.H(A.abP(this.IT.M,this.AD.OU));this.IT.H([].concat(this.IT.M.slice(0,3),aSize[
1]));},Ai:function(Ae){var B;A.acn.Menu.Ai.call(this,Ae);var ID=((Ae&0x40)===0x40
);if(ID&&(this.AD.Gt<0))this.AD.GT(0);},N4:function(E){if(this.Ll===E)return;this.
Ll=E;this.AD.N4(E);},BnH:function(E){var B;if(this.A74===E)return;if(!!this.Aee){
this.HP(this.Aee);this.Aee=null;}if(!!E){this.Aee=(C.FE.isPrototypeOf(B=A._NewObject(
E,0))?B:null);this.Aee.A_y([this,this.Akt]);this.Aee.A_z([this,this.Aku]);this.Aee.
BnN(null);this.J(this.Aee,0);this.AD.A_F((B=this.Aee.M)[3]-B[1]);}else this.AD.A_F(
0);this.IT.H(A.abP(this.IT.M,this.AD.OU));A.pe([this,this.Fk],this);this.A74=E;}
,Hm:function(G){var B;var Gg=this.AD.G6;var Aa=(C.Ba.isPrototypeOf(B=this.AD.Cj)?
B:null);if(!Aa)return;Aa.Zt(this.AX);Aa.Ch(Gg);Aa.Zx(this.AR);Aa.H(A.abK(Aa.M,[(
B=this.AD.M)[2]-B[0],this.AD.GO]));},Zt:function(E){var B;if(this.AX===E)return;
if(!!this.AX){A.z9([this,this.Ch],this.AX,0);A.z$([this,this.An_],[B=this.AX,B.Fp
,B.Ft],0);}this.AX=E;if(!!E){A.zV([this,this.Ch],E,0);A.zX([this,this.An_],[E,E.
Fp,E.Ft],0);}A.pe([this,this.Ch],this);A.pe([this,this.An_],this);},Ch:function(
G){if(!!this.AX){this.AD.JB(this.AX.B_());this.AD.AbF(0,this.AD.AY-1);}else this.
AD.JB(0);if(this.A8t!==this.AD.AY){this.AD.ABP(null,null);this.A8t=this.AD.AY;}A.
pe([this,this.Fk],this);},Aku:function(G){var B;this.H(A.abI(this.M,(B=this.AD.AOY(
))[3]-B[1]));},Akt:function(G){this.H(A.abI(this.M,180));},A9P:function(G){var JF=(
A.Core.BL.isPrototypeOf(G)?G:null);var Gg=this.AD.Gt;if(JF.CP===4)Gg=Gg-1;else if(
JF.CP===5)Gg=Gg+1;else if((JF.DQ>=0x30)&&(JF.DQ<=0x39))A._GetAutoObject(A.aco.AgO
).Ez(JF.DQ);else if(JF.CP===45)A._GetAutoObject(A.aco.AgO).Delete();else JF.NM=true;
if((Gg<0)||(Gg>=this.AD.AY))return;this.AD.GT(Gg);this.Bzw(Gg,true);},Bzl:function(
G){var Aa=(C.Ba.isPrototypeOf(G)?G:null);this.AD.GT(Aa.Hs);},Bzw:function(Ha,Ac3
){var B;if((Ha<0)||(Ha>=this.AD.AY))return;var Az=this.AD.AqV(Ha,Ha);var Bd=this.
AD.M;Bd=A.abP(Bd,(B=this.AD.AOY())[3]-B[1]);Bd=A.abI(Bd,(((B=this.AD.M)[3]-B[1])-((
B=this.AD.AOY())[3]-B[1]))-((B=this.AD.BjC())[3]-B[1]));var LP=A.lb(Az,Bd);if((!
Ac3&&!((LP[0]>=LP[2])||(LP[1]>=LP[3])))||(Ac3&&A.aaY(LP,Az)))return;var Bq=0;if(
Az[3]>Bd[3])Bq=Az[3]-Bd[3];if(Bq>(Az[1]-Bd[1]))Bq=(Az[3]-Bd[1])-this.AD.GO;this.
AD.Gb(this.AD.Br-Bq);},An_:function(G){this.AD.GT(-1);},Fk:function(G){var B;this.
IT.MB(this.AD.GO*this.AD.AY);this.IT.MD(((B=this.AD.M)[3]-B[1])-this.AD.OU);this.
IT.MC(-this.AD.Br);},_Init:function(aArg){A.acn.Menu._Init.call(this,aArg);A.acg.
AL._Init.call(this.Background={I:this},0);A.Core.H$._Init.call(this.H$={I:this},
0);A.Core.CM._Init.call(this.AD={I:this},0);A.kR.Ay._Init.call(this.IT={I:this},
0);A.Core.BL._Init.call(this.Do={I:this},0);this.__proto__=C.AVT;this.H(Ce);this.
Background.A0(0x3);this.Background.H(Ce);this.H$.A0(0x3F);this.H$.H(Ce);this.AD.
A0(0x3F);this.AD.H(Ce);this.AD.Ae8(60);this.AD.JB(0);this.AD.N4(this.Ll);this.IT.
A0(0x3A);this.IT.H(BD);this.IT.L(0xFF808080);this.J(this.Background,0);this.J(this.
H$,0);this.J(this.AD,0);this.J(this.IT,0);this.AD.Em=[this,this.Fk];this.AD.Hm=[
this,this.Hm];this.AD.Aw9(this.H$);this.AR=[this,this.Bzl];this.Do.BM=[this,this.
A9P];this.Do.D1=[this,this.A9P];},_Done:function(){this.__proto__=A.acn.Menu;this.
Background._Done();this.H$._Done();this.AD._Done();this.IT._Done();this.Do._Done(
);A.acn.Menu._Done.call(this);},_ReInit:function(){A.acn.Menu._ReInit.call(this);
this.Background._ReInit();this.H$._ReInit();this.AD._ReInit();this.IT._ReInit();
this.Do._ReInit();},_Mark:function(D){var B;A.acn.Menu._Mark.call(this,D);if((B=
this.Aee)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.AX)&&(B._cycle!=D))B._Mark(
B._cycle=D);if((B=this.AR)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.
Background)._cycle!=D)B._Mark(B._cycle=D);if((B=this.H$)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.AD)._cycle!=D)B._Mark(B._cycle=D);if((B=this.IT)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Do)._cycle!=D)B._Mark(B._cycle=D);},_className:"Demonstrator::VerticalMenu"
};C.AUN={GK:null,AL:null,BW:null,Init:function(aArg){var B;A.zX([this,this.GH],[
B=A._GetAutoObject(A.aco.G1),B.A9s,B.A_Q],0);A.pe([this,this.GH],this);},Ab3:function(
E){if(this.GK===E)return;if(!!this.GK)this.HP(this.GK);this.GK=E;if(!!this.GK)this.
J(this.GK,0);this.Bb(E);this.AhE(E,this.BW);this.Am();},GH:function(G){var B;if(
!!A._GetAutoObject(A.aco.G1).AsA)this.Ab3((C.AhK.isPrototypeOf(B=A._NewObject(A.
_GetAutoObject(A.aco.G1).AsA,0))?B:null));else this.Ab3(null);},_Init:function(aArg
){A.Core.P._Init.call(this,aArg);A.acg.AL._Init.call(this.AL={I:this},0);A.acg.BW.
_Init.call(this.BW={I:this},0);this.__proto__=C.AUN;this.H(E7);this.AL.A0(0x3F);
this.AL.H(E7);this.BW.H(E7);this.BW.L(0xFF000000);this.J(this.AL,0);this.J(this.
BW,0);this.Init(aArg);},_Done:function(){this.__proto__=A.Core.P;this.AL._Done();
this.BW._Done();A.Core.P._Done.call(this);},_ReInit:function(){A.Core.P._ReInit.
call(this);this.AL._ReInit();this.BW._ReInit();},_Mark:function(D){var B;A.Core.
P._Mark.call(this,D);if((B=this.GK)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.
AL)._cycle!=D)B._Mark(B._cycle=D);if((B=this.BW)._cycle!=D)B._Mark(B._cycle=D);}
,_className:"Demonstrator::SelectionArea"};C.AMB={ABu:0,Jq:0,Background:null,V:null
,Ajo:null,AdX:null,XS:null,AdY:null,Mm:null,Mj:0,LK:false,KJ:false,CQ:function(){
this.Am();},Ai:function(Ae){var B;C.Ba.Ai.call(this,Ae);var Hf=((Ae&0x10)===0x10
);var Fw=((Ae&0x20)===0x20);var ID=((Ae&0x40)===0x40);if(!Hf){this.Background.L(
0xFFAAAAAA);this.V.L(0xFF888888);this.Mm.Ar(false);this.Mm.Z(false);}else if(ID){
this.Background.L(A.jb.AV);this.V.L(A.jb.Bm);this.Mm.Ar(true);this.Mm.Z(true);}else
if(Fw){this.Background.L(0xFFE6DED8);this.V.L(0xFF000000);this.Mm.Ar(true);this.
Mm.Z(true);}else{this.Background.L(0xFFFFFFFF);this.V.L(0xFF000000);this.Mm.Ar(false
);this.Mm.Z(false);}if(!this.KJ&&Fw)A._GetAutoObject(A.aco.G1).A_N(this.ABu);this.
Mm.BnJ(this.Jq>0);this.Mm.Boa(this.ABu>0);this.V.R(this.Mj.toFixed());this.LK=Hf;
this.KJ=Fw;},Ch:function(Ad){if(!this.AX){this.XS.Ax(A.aaL(A.ach.Aez));this.AdX.
L(A.jb.Afu);return;}this.Hs=Ad;if(!!this.AX){this.Jq=this.AX.KR(Ad,26);this.ABu=
this.AX.KR(Ad,22);this.Mj=this.AX.CF(Ad,1);var AlR=this.AX.H4(Ad,11);var AlI=this.
AX.I9(Ad,17);var LT=this.AX.I9(Ad,13);var Ie=this.AX.AmX(Ad,14);var Xt=A._GetAutoObject(
A.Device.Helper).AMq(LT,AlR,AlI);switch(Ie){case 0:this.XS.Ax(A.aaL(A.ach.Aez));
break;case 1:this.XS.Ax(A.aaL(A.ach.AvK));break;case 2:this.XS.Ax(A.aaL(A.ach.AvN
));break;default:A.ab5("%s%e",Hr,Ie);}this.AdY.Ax(this.XS.Al);this.AdX.L(A._GetAutoObject(
A.acj.Assessment).Qr(Xt));this.Am();}},_Init:function(aArg){C.Ba._Init.call(this
,aArg);A.acg.AL._Init.call(this.Background={I:this},0);A.kR.CG._Init.call(this.V={
I:this},0);A.acg.Ap._Init.call(this.Ajo={I:this},0);A.acg.Ap._Init.call(this.AdX={
I:this},0);A.acg.Ap._Init.call(this.XS={I:this},0);A.acg.Ap._Init.call(this.AdY={
I:this},0);C.Mm._Init.call(this.Mm={I:this},0);this.__proto__=C.AMB;this.Background.
A0(0x3F);this.Background.H(Ce);this.V.A0(0x3F);this.V.H(IW);this.V.R(A.aaR(A.acf.
GN));this.V.A6(0x11);this.V.L(0xFF000000);this.Ajo.H(It);this.Ajo.L(A.jb.Text);this.
AdX.H(It);this.AdX.L(A.jb.E1);this.XS.H(It);this.AdY.H(It);this.AdY.L(A.jb.Text);
this.AdY.Cv(1);this.Mm.A0(0x3);this.Mm.H(O6);this.J(this.Background,0);this.J(this.
V,0);this.J(this.Ajo,0);this.J(this.AdX,0);this.J(this.XS,0);this.J(this.AdY,0);
this.J(this.Mm,0);this.V.S(A.aaL(A.fl.Af));this.V.AZ(A.aaL(A.fl.Ak));this.V.Cr(A.
aaL(A.fl.Bh));this.Ajo.Ax(A.aaL(C.AHu));this.AdX.Ax(A.aaL(C.AV_));this.XS.Ax(A.aaL(
A.ach.Aez));this.AdY.Ax(A.aaL(A.ach.Aez));},_Done:function(){this.__proto__=C.Ba;
this.Background._Done();this.V._Done();this.Ajo._Done();this.AdX._Done();this.XS.
_Done();this.AdY._Done();this.Mm._Done();C.Ba._Done.call(this);},_ReInit:function(
){C.Ba._ReInit.call(this);this.Background._ReInit();this.V._ReInit();this.Ajo._ReInit(
);this.AdX._ReInit();this.XS._ReInit();this.AdY._ReInit();this.Mm._ReInit();this.
V.R(A.aaR(A.acf.GN));this.V.S(A.aaL(A.fl.Af));this.V.AZ(A.aaL(A.fl.Ak));this.V.Cr(
A.aaL(A.fl.Bh));this.CQ();},_Mark:function(D){var B;C.Ba._Mark.call(this,D);if((
B=this.Background)._cycle!=D)B._Mark(B._cycle=D);if((B=this.V)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Ajo)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AdX)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.XS)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
AdY)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Mm)._cycle!=D)B._Mark(B._cycle=D);
},_className:"Demonstrator::AnimalMenuItem"};C.Mm={UC:null,WQ:null,Ak0:null,Nr:null
,Oa:null,ZJ:null,Acy:null,Av7:false,AxU:false,CQ:function(){this.Am();},Ai:function(
Ae){var B;A.Core.P.Ai.call(this,Ae);var ID=((Ae&0x40)===0x40);if(ID){this.Nr.L(A.
jb.Bm);this.Oa.L(A.jb.Bm);}else{this.Nr.L(A.jb.Text);this.Oa.L(A.jb.Text);}if(this.
AxU){this.Nr.R(A.aaR(A.acf.Bpb));if(this.Av7){this.UC.Ax(A.aaL(C.AxV));this.WQ.Ax(
A.aaL(C.AxV));}else{this.UC.Ax(A.aaL(C.Asx));this.WQ.Ax(A.aaL(C.Asx));}}else if(
this.Av7){this.UC.Ax(A.aaL(C.ACL));this.WQ.Ax(A.aaL(C.ACL));this.Nr.R(P_);}var A4r=
this.AxU||this.Av7;this.UC.Z(A4r);this.WQ.Z(A4r);this.Nr.Z(A4r);this.ZJ.Ar(this.
AxU);},Boa:function(E){if(this.AxU===E)return;this.AxU=E;this.Am();},BnJ:function(
E){if(this.Av7===E)return;this.Av7=E;this.Am();},_Init:function(aArg){A.Core.P._Init.
call(this,aArg);A.acg.Ap._Init.call(this.UC={I:this},0);A.acg.Ap._Init.call(this.
WQ={I:this},0);A.acg.Ap._Init.call(this.Ak0={I:this},0);A.kR.CG._Init.call(this.
Nr={I:this},0);A.kR.CG._Init.call(this.Oa={I:this},0);A.Core.Bn._Init.call(this.
ZJ={I:this},0);A.Core.Bn._Init.call(this.Acy={I:this},0);this.__proto__=C.Mm;var
B;this.H(P$);this.UC.A0(0x6);this.UC.H(CR);this.UC.L(A.jb.CU);this.UC.Cv(1);this.
WQ.A0(0x6);this.WQ.H(CR);this.WQ.L(A.jb.Text);this.Ak0.A0(0xE);this.Ak0.H(Ff);this.
Nr.A0(0x7);this.Nr.H(L5);this.Nr.A6(0x11);this.Nr.L(0xFF000000);this.Oa.A0(0x3);
this.Oa.H(Qa);this.Oa.R(A.aaR(A.acf.Temperature));this.Oa.A6(0x11);this.Oa.L(0xFF000000
);this.ZJ.A0(0x3);this.ZJ.JZ(J7);this.ZJ.Ky(Od);this.ZJ.DC(Qb);this.ZJ.DM(ML);this.
Acy.A0(0x3);this.Acy.JZ(S$);this.Acy.Ky(UW);this.Acy.DC(Z6);this.Acy.DM(W9);this.
J(this.UC,0);this.J(this.WQ,0);this.J(this.Ak0,0);this.J(this.Nr,0);this.J(this.
Oa,0);this.J(this.ZJ,0);this.J(this.Acy,0);this.UC.Ax(A.aaL(C.Asx));this.WQ.Ax(A.
aaL(C.Asx));this.Ak0.Ax(A.aaL(C.AVk));this.Nr.S(A.aaL(A.fl.Af));this.Nr.AZ(A.aaL(
A.fl.Ak));this.Nr.Cr(A.aaL(A.fl.Bh));this.Oa.S(A.aaL(A.fl.Af));this.Oa.AZ(A.aaL(
A.fl.Ak));this.Oa.Cr(A.aaL(A.fl.Bh));this.ZJ.Lq=[B=A._GetAutoObject(A.aco.G1),B.
Bfy];this.Acy.Lq=[B=A._GetAutoObject(A.aco.G1),B.Bfj];},_Done:function(){this.__proto__=
A.Core.P;this.UC._Done();this.WQ._Done();this.Ak0._Done();this.Nr._Done();this.Oa.
_Done();this.ZJ._Done();this.Acy._Done();A.Core.P._Done.call(this);},_ReInit:function(
){A.Core.P._ReInit.call(this);this.UC._ReInit();this.WQ._ReInit();this.Ak0._ReInit(
);this.Nr._ReInit();this.Oa._ReInit();this.ZJ._ReInit();this.Acy._ReInit();this.
Oa.R(A.aaR(A.acf.Temperature));this.Nr.S(A.aaL(A.fl.Af));this.Nr.AZ(A.aaL(A.fl.Ak
));this.Nr.Cr(A.aaL(A.fl.Bh));this.Oa.S(A.aaL(A.fl.Af));this.Oa.AZ(A.aaL(A.fl.Ak
));this.Oa.Cr(A.aaL(A.fl.Bh));this.CQ();},_Mark:function(D){var B;A.Core.P._Mark.
call(this,D);if((B=this.UC)._cycle!=D)B._Mark(B._cycle=D);if((B=this.WQ)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.Ak0)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Nr
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Oa)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.ZJ)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Acy)._cycle!=D)B._Mark(B._cycle=
D);},_className:"Demonstrator::AnimalItemAction"};C.Ys={CQ:function(){this.Am();
},Ai:function(Ae){C.Arf.Ai.call(this,Ae);if(!this.Text.String.length)this.Text.R(
A.aaR(A.acf.Filter));},A8A:function(G){var D5=(A.Core.BL.isPrototypeOf(G)?G:null
);if(!!D5)A._GetAutoObject(A.aco.AgO).Ez(D5.DQ);},A8y:function(G){A._GetAutoObject(
A.aco.AgO).Delete();},_Init:function(aArg){C.Arf._Init.call(this,aArg);this.__proto__=
C.Ys;this.Ap.Ax(A.aaL(C.Filter));},_ReInit:function(){C.Arf._ReInit.call(this);this.
CQ();},_className:"Demonstrator::FilterView"};C.Abf={Dm:null,Yl:null,Sf:null,Ym:
null,DT:null,YG:null,AmJ:null,Av:null,Pd:null,M9:null,Abe:null,FY:0,AvS:0,AGi:false
,Ai:function(Ae){A.Core.P.Ai.call(this,Ae);this.Sf.R(this.Av.Format(Iu));if(this.
AGi){this.Sf.Z(false);this.YG.Z(false);this.DT.Z(false);this.Ym.Z(false);this.Pd.
Ar(true);this.Pd.Z(true);this.M9.Cv(2);this.M9.ATC(2);this.M9.H(A.abM(this.M9.M,
this.Pd.M[2]));}else{this.Sf.Z(true);this.YG.Z(true);this.DT.Z(true);this.Ym.Z(true
);this.Pd.Ar(false);this.Pd.Z(false);this.M9.Cv(3);this.M9.ATC(3);this.M9.H(A.abM(
this.M9.M,this.Sf.M[2]));}},BBe:function(G){this.BnQ(!this.AGi);},AdA:function(G
){var F;if(!!this.Dm)this.Ur((F=this.Dm,F[1].call(F[0])));},Ab7:function(E){if(A.
aaZ(this.Dm,E))return;if(!!this.Dm)A.z$([this,this.AdA],this.Dm,0);this.Dm=E;if(
!!E)A.zX([this,this.AdA],E,0);if(!!E)A.pe([this,this.AdA],this);},Ur:function(E){
if(this.FY===E)return;this.FY=E;this.Av.Initialize(this.FY);this.BCi(this);this.
Am();},AiH:function(G){var B;var F;var BP=this.FY;var Ajb=this.Abe.C7(this.AvS);
this.AJu(Ajb);if(this.Av.Year>2100)this.Av.Initialize2(2100,12,31,0,0,0);this.Ur(((
B=(this.Av.JW()|0))<0)?B+0x100000000:B);if(this.FY!==BP){if(!!this.Dm)(F=this.Dm
,F[2].call(F[0],this.FY));A.abo(this.Dm,0);}},Ait:function(G){var B;var F;var BP=
this.FY;var Ajb=this.Abe.C7(this.AvS);this.ALg(Ajb);if(this.Av.Year<2000)this.Av.
Initialize2(2000,1,1,0,0,0);this.Ur(((B=(this.Av.JW()|0))<0)?B+0x100000000:B);if(
this.FY!==BP){if(!!this.Dm)(F=this.Dm,F[2].call(F[0],this.FY));A.abo(this.Dm,0);
}},Bnm:function(E){if(this.AvS===E)return;this.AvS=E;},BnQ:function(E){if(this.AGi===
E)return;this.AGi=E;this.Am();},BBQ:function(G){var B;var F;var BP=this.FY;this.
Av.Ls(this.Pd.AEI());this.Av.Uv(this.Pd.AEN());this.Av.Year=this.Pd.ArE();this.Ur(((
B=(this.Av.JW()|0))<0)?B+0x100000000:B);if(this.FY!==BP){if(!!this.Dm)(F=this.Dm
,F[2].call(F[0],this.FY));A.abo(this.Dm,0);}},BCi:function(G){this.Pd.Ls(this.Av.
GL);this.Pd.Uv(this.Av.Hk);this.Pd.AkH(this.Av.Year);},AJu:function(Ay9){var B;switch(
Ay9){case 0:if(this.Av.GL<this.Av.Zp())this.Av.Ls(this.Av.GL+1);else{this.Av.Ls(
1);this.AJu(2);}break;case 1:if((this.Av.GL+7)<=this.Av.Zp())this.Av.Ls(this.Av.
GL+7);else{this.Av.Ls((7-this.Av.Zp())+this.Av.GL);this.AJu(2);}break;case 2:if(
this.Av.Hk<12)this.Av.Uv(this.Av.Hk+1);else{this.Av.Uv(1);this.AJu(3);}break;case
3:this.Av.Year++;break;default:throw new Error(UX+Ay9.toFixed());}},ALg:function(
Ay9){var B;switch(Ay9){case 0:if(this.Av.GL>1)this.Av.Ls(this.Av.GL-1);else{this.
ALg(2);this.Av.Ls(this.Av.Zp());}break;case 1:if((this.Av.GL-7)>0)this.Av.Ls(this.
Av.GL-7);else{this.ALg(2);this.Av.Ls(this.Av.Zp()-(7-this.Av.GL));}break;case 2:
if(this.Av.Hk>1)this.Av.Uv(this.Av.Hk-1);else{this.Av.Uv(12);this.ALg(3);}break;
case 3:this.Av.Year--;break;default:throw new Error(UX+Ay9.toFixed());}},Blt:function(
){return this.AvS;},_Init:function(aArg){A.Core.P._Init.call(this,aArg);A.acg.Text.
_Init.call(this.Yl={I:this},0);A.acg.Text._Init.call(this.Sf={I:this},0);C.AvI._Init.
call(this.Ym={I:this},0);A.acq.DT._Init.call(this.DT={I:this},0);C.AvI._Init.call(
this.YG={I:this},0);A.acg.Ap._Init.call(this.AmJ={I:this},0);A.Core.Bs._Init.call(
this.Av={I:this},0);C.ANQ._Init.call(this.Pd={I:this},0);C.AvI._Init.call(this.M9={
I:this},0);C.Abe._Init.call(this.Abe={I:this},0);this.__proto__=C.Abf;this.H(Z7);
this.Yl.H(UY);this.Yl.A6(0x11);this.Yl.R(A.aaR(A.acf.Date));this.Yl.L(0xFF000000
);this.Sf.H(Z8);this.Sf.A6(0x11);this.Sf.R(W_);this.Sf.L(0xFF000000);this.Ym.H(Z9
);this.Ym.A_p(200);this.DT.H(Z_);this.DT.ArY(120);this.DT.GO=30;this.DT.ATe(A.jb.
CU);this.DT.A93(A.jb.CU);this.DT.A97(A.jb.CU);this.DT.ATf(A.jb.Text);this.DT.A98(
A.jb.Text);this.DT.A94(A.jb.AV);this.DT.A99(A.jb.Bm);this.DT.A96(A.jb.AV);this.DT.
A95(A.jb.Text);this.YG.H(UZ);this.YG.A_p(200);this.AmJ.H(W$);this.Pd.H(O7);this.
M9.H(Z$);this.M9.Cv(3);this.M9.ATC(3);this.M9.L(A.jb.Text);this.J(this.Yl,0);this.
J(this.Sf,0);this.J(this.Ym,0);this.J(this.DT,0);this.J(this.YG,0);this.J(this.AmJ
,0);this.J(this.Pd,0);this.J(this.M9,0);this.Yl.S(A.aaL(A.fl.Ak));this.Sf.S(A.aaL(
A.fl.EK));this.Ym.AR=[this,this.Ait];this.Ym.DB(A.aaL(C.ANa));this.Ym.ATD(A.aaL(
C.ANb));this.DT.Au([this,this.Blt,this.Bnm]);this.DT.A_d(this.Abe);this.DT.ArQ(A.
aaL(A.fl.Ak));this.DT.AwN(A.aaL(A.fl.Ak));this.YG.AR=[this,this.AiH];this.YG.DB(
A.aaL(C.ANc));this.YG.ATD(A.aaL(C.ANd));this.AmJ.Ax(A.aaL(C.AQg));this.Pd.Dk=[this
,this.BBQ];this.M9.AR=[this,this.BBe];this.M9.DB(A.aaL(A.ach.Aju));this.M9.ATD(A.
aaL(A.ach.Aju));},_Done:function(){this.__proto__=A.Core.P;this.Yl._Done();this.
Sf._Done();this.Ym._Done();this.DT._Done();this.YG._Done();this.AmJ._Done();this.
Av._Done();this.Pd._Done();this.M9._Done();this.Abe._Done();A.Core.P._Done.call(
this);},_ReInit:function(){A.Core.P._ReInit.call(this);this.Yl._ReInit();this.Sf.
_ReInit();this.Ym._ReInit();this.DT._ReInit();this.YG._ReInit();this.AmJ._ReInit(
);this.Av._ReInit();this.Pd._ReInit();this.M9._ReInit();this.Abe._ReInit();this.
Yl.R(A.aaR(A.acf.Date));this.Yl.S(A.aaL(A.fl.Ak));this.Sf.S(A.aaL(A.fl.EK));this.
DT.ArQ(A.aaL(A.fl.Ak));this.DT.AwN(A.aaL(A.fl.Ak));},_Mark:function(D){var B;A.Core.
P._Mark.call(this,D);if((B=this.Dm)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((
B=this.Yl)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Sf)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Ym)._cycle!=D)B._Mark(B._cycle=D);if((B=this.DT)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.YG)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AmJ)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.Av)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Pd
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.M9)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Abe)._cycle!=D)B._Mark(B._cycle=D);},_className:"Demonstrator::DateSelector"
};C.AvI={C_:null,Axs:null,AN6:null,AR:null,Bo:null,Do:null,CT:null,Hw:null,Yz:null
,APR:0,TX:0,AUh:0,AQ:0xFFFFFFFF,A2D:false,LK:false,KJ:false,Qv:false,Ai:function(
Ae){var B;A.acn.AhA.Ai.call(this,Ae);var Hf=((Ae&0x10)===0x10);var Fw=((Ae&0x20)===
0x20);var GE=this.CT.Down&&this.CT.YJ;if(!Hf)this.Hw.Ax(this.AN6);else if(GE){this.
Hw.Ax(this.Axs);this.Hw.Cv(this.AUh);}else{this.Hw.Ax(this.C_);this.Hw.Cv(this.TX
);}this.Hw.L(this.AQ);this.LK=Hf;this.KJ=Fw;this.Qv=GE;},Qu:function(G){this.Am(
);A.pe(this.AR,this);},AiR:function(G){if(this.CT.Down)return;if(this.Do.Aci)return;
this.Am();if(this.Bo.Bw){A.pe(this.AR,this);this.Bo.Ar(false);}this.Bo.Ar(true);
},Bfg:function(G){this.Am();},AAL:function(G){if(!this.CT.YJ)return;if(this.CT.NK
)return;if((this.Yz.VI<=0)||(this.CT.Jw<this.Yz.VI)){if(this.CT.Jw>=this.Bo.VI)A.
pe(this.AR,this);else this.Bo.Ar(true);}this.Yz.Ar(false);},AAK:function(G){this.
Yz.Ar(true);if(this.Bo.Bw){A.pe(this.AR,this);this.Bo.Ar(false);}},DB:function(E
){if(this.C_===E)return;this.C_=E;this.Am();},ATD:function(E){if(this.Axs===E)return;
this.Axs=E;this.Am();},A3D:function(G){if(!this.CT.YJ)return;if(this.CT.NK)return;
if((this.APR>=0)&&this.A2D){this.A2D=false;this.Yz.Ar(true);A.pe(this.AR,this);}
},A_p:function(E){if(this.APR===E)return;this.APR=E;this.Yz.WH(E);},BAI:function(
G){this.A2D=true;},Cv:function(E){if(this.TX===E)return;this.TX=E;this.Am();},ATC:
function(E){if(this.AUh===E)return;this.AUh=E;this.Am();},L:function(E){if(this.
AQ===E)return;this.AQ=E;this.Am();},_Init:function(aArg){A.acn.AhA._Init.call(this
,aArg);A.Core.Timer._Init.call(this.Bo={I:this},0);A.Core.BL._Init.call(this.Do={
I:this},0);A.Core.Bn._Init.call(this.CT={I:this},0);A.acg.Ap._Init.call(this.Hw={
I:this},0);A.Core.Timer._Init.call(this.Yz={I:this},0);this.__proto__=C.AvI;this.
H(Oe);this.Bo.PV(0);this.Bo.WH(50);this.Do.Filter=149;this.CT.A0(0x3F);this.CT.JZ(
Rn);this.CT.Ky(Xa);this.CT.DC(Xb);this.CT.DM(J7);this.CT.Afg=0xF;this.CT.AFC(100
);this.Hw.A0(0x3F);this.Hw.H(Oe);this.Hw.A6(0x12);this.Yz.PV(0);this.J(this.CT,0
);this.J(this.Hw,0);this.Bo.ME=[this,this.Qu];this.Do.BM=[this,this.AiR];this.CT.
AET=[this,this.Bfg];this.CT.Awa=[this,this.Bfg];this.CT.D1=[this,this.A3D];this.
CT.Lq=[this,this.AAL];this.CT.BM=[this,this.AAK];this.Hw.Ax(A.aaL(A.aci.TR));this.
C_=A.aaL(A.aci.TR);this.Axs=A.aaL(A.aci.TR);this.AN6=A.aaL(A.aci.TR);this.Yz.ME=[
this,this.BAI];},_Done:function(){this.__proto__=A.acn.AhA;this.Bo._Done();this.
Do._Done();this.CT._Done();this.Hw._Done();this.Yz._Done();A.acn.AhA._Done.call(
this);},_ReInit:function(){A.acn.AhA._ReInit.call(this);this.Bo._ReInit();this.Do.
_ReInit();this.CT._ReInit();this.Hw._ReInit();this.Yz._ReInit();},_Mark:function(
D){var B;A.acn.AhA._Mark.call(this,D);if((B=this.C_)&&(B._cycle!=D))B._Mark(B._cycle=
D);if((B=this.Axs)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.AN6)&&(B._cycle
!=D))B._Mark(B._cycle=D);if((B=this.AR)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D
);if((B=this.Bo)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Do)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.CT)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Hw)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.Yz)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Demonstrator::IconButton"};C.AMP={PA:null,V:null,Aes:null,_Init:function(aArg){
C.FE._Init.call(this,aArg);A.acg.AL._Init.call(this.PA={I:this},0);A.acg.Text._Init.
call(this.V={I:this},0);C.Aes._Init.call(this.Aes={I:this},0);this.__proto__=C.AMP;
this.H(Ta);this.PA.A0(0x1D);this.PA.H(Ce);this.PA.L(0xFFE6E6E6);this.V.A0(0x1D);
this.V.H(Xc);this.V.A6(0x11);this.V.R(A.aaR(A.acf.A5t));this.V.L(0xFF000000);this.
Aes.H(Aaa);this.J(this.PA,0);this.J(this.V,0);this.J(this.Aes,0);this.V.S(A.aaL(
A.fl.Af));},_Done:function(){this.__proto__=C.FE;this.PA._Done();this.V._Done();
this.Aes._Done();C.FE._Done.call(this);},_ReInit:function(){C.FE._ReInit.call(this
);this.PA._ReInit();this.V._ReInit();this.Aes._ReInit();this.V.R(A.aaR(A.acf.A5t
));this.V.S(A.aaL(A.fl.Af));},_Mark:function(D){var B;C.FE._Mark.call(this,D);if((
B=this.PA)._cycle!=D)B._Mark(B._cycle=D);if((B=this.V)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Aes)._cycle!=D)B._Mark(B._cycle=D);},_className:"Demonstrator::AnimalsHeader"
};C.AuF={PA:null,V:null,AeT:null,AeR:null,Bn:null,DK:Xd,Aho:false,Ai:function(Ae
){C.FE.Ai.call(this,Ae);if(this.Aho){this.AeR.Z(true);this.AeT.Z(false);}else{this.
AeR.Z(false);this.AeT.Z(true);}},BBC:function(G){if(this.Aho)A.pe(this.Akt,this);
else A.pe(this.Aku,this);this.ArZ(!this.Aho);},T:function(E){if(this.DK===E)return;
this.DK=E;this.V.R(E);},ArZ:function(E){if(this.Aho===E)return;this.Aho=E;this.Am(
);},_Init:function(aArg){C.FE._Init.call(this,aArg);A.acg.AL._Init.call(this.PA={
I:this},0);A.acg.Text._Init.call(this.V={I:this},0);A.acg.Ap._Init.call(this.AeT={
I:this},0);A.acg.Ap._Init.call(this.AeR={I:this},0);A.Core.Bn._Init.call(this.Bn={
I:this},0);this.__proto__=C.AuF;this.H(Ce);this.PA.A0(0x1D);this.PA.H(Ce);this.PA.
L(0xFFE6E6E6);this.V.A0(0x1D);this.V.H(Xe);this.V.A6(0x11);this.V.R(Xd);this.V.L(
0xFF000000);this.AeT.H(Tb);this.AeT.Z(false);this.AeR.A0(0x3A);this.AeR.H(Tb);this.
Bn.JZ(J7);this.Bn.Ky(Tc);this.Bn.DC(Td);this.Bn.DM(ML);this.J(this.PA,0);this.J(
this.V,0);this.J(this.AeT,0);this.J(this.AeR,0);this.J(this.Bn,0);this.V.S(A.aaL(
A.fl.Af));this.AeT.Ax(A.aaL(C.AMS));this.AeR.Ax(A.aaL(C.Ajt));this.Bn.Lq=[this,this.
BBC];},_Done:function(){this.__proto__=C.FE;this.PA._Done();this.V._Done();this.
AeT._Done();this.AeR._Done();this.Bn._Done();C.FE._Done.call(this);},_ReInit:function(
){C.FE._ReInit.call(this);this.PA._ReInit();this.V._ReInit();this.AeT._ReInit();
this.AeR._ReInit();this.Bn._ReInit();this.V.S(A.aaL(A.fl.Af));},_Mark:function(D
){var B;C.FE._Mark.call(this,D);if((B=this.PA)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.V)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AeT)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.AeR)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Bn)._cycle!=D)B._Mark(
B._cycle=D);},_className:"Demonstrator::AccordionHeader"};C.Ba={AX:null,AR:null,
CT:null,Hs:-1,Zt:function(E){if(this.AX===E)return;this.AX=E;},Ch:function(Ad){A.
ab5("%s",Aab);},Zx:function(E){if(A.aa0(this.AR,E))return;this.AR=E;},AAL:function(
G){if(!this.CT.YJ)return;if(this.CT.NK)return;A.pe(this.AR,this);},_Init:function(
aArg){A.Core.P._Init.call(this,aArg);A.Core.Bn._Init.call(this.CT={I:this},0);this.
__proto__=C.Ba;this.H(Ce);this.CT.A0(0x3F);this.CT.JZ(ML);this.CT.Ky(Td);this.CT.
DC(Tc);this.CT.DM(J7);this.CT.Afg=0xF;this.CT.AFC(100);this.J(this.CT,0);this.CT.
Lq=[this,this.AAL];},_Done:function(){this.__proto__=A.Core.P;this.CT._Done();A.
Core.P._Done.call(this);},_ReInit:function(){A.Core.P._ReInit.call(this);this.CT.
_ReInit();},_Mark:function(D){var B;A.Core.P._Mark.call(this,D);if((B=this.AX)&&(
B._cycle!=D))B._Mark(B._cycle=D);if((B=this.AR)&&((B=B[0])._cycle!=D))B._Mark(B.
_cycle=D);if((B=this.CT)._cycle!=D)B._Mark(B._cycle=D);},_className:"Demonstrator::ListItem"
};C.FE={ASw:null,Aku:null,Akt:null,BnN:function(E){if(A.aa0(this.ASw,E))return;this.
ASw=E;},A_z:function(E){if(A.aa0(this.Aku,E))return;this.Aku=E;},A_y:function(E){
if(A.aa0(this.Akt,E))return;this.Akt=E;},_Init:function(aArg){A.Core.P._Init.call(
this,aArg);this.__proto__=C.FE;this.H(Ce);},_Mark:function(D){var B;A.Core.P._Mark.
call(this,D);if((B=this.ASw)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.
Aku)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.Akt)&&((B=B[0])._cycle
!=D))B._Mark(B._cycle=D);},_className:"Demonstrator::ListHeader"};C.ANQ={Dk:null
,Aa7:null,W1:null,W0:null,WZ:null,Nh:null,Ng:null,KT:null,LK:false,KJ:false,BCs:
false,Ai:function(Ae){var B;A.acn.Ahy.Ai.call(this,Ae);var Hf=((Ae&0x10)===0x10);
var Fw=((Ae&0x20)===0x20);var Beh=(this.WZ.ZO||this.W0.ZO)||this.W1.ZO;if(Beh)this.
Aa7.L(A.jb.Text);else this.Aa7.L(A.jb.Bc);this.LK=Hf;this.KJ=Fw;this.BCs=Beh;},AAG:
function(G){this.Am();if((!this.WZ.ZO&&!this.W0.ZO)&&!this.W1.ZO){var Ve=this.AKn(
this.AEN(),this.ArE());var Adf=this.AEI();this.KT.JB(Ve);if(Adf>Ve)this.Ls(Ve);A.
pe(this.Dk,this);}},A3Y:function(G){this.Am();},Bma:function(G){var B;var Gg=this.
Nh.G6;var CA=(A.acg.Text.isPrototypeOf(B=this.Nh.Cj)?B:null);if(!CA)return;CA.R(
A.abl(Gg+1900,4,10));CA.S(A.aaL(A.fl.Af));CA.L(A.jb.Text);CA.A6(0x12);CA.H(A.abK(
CA.M,[(B=this.Nh.M)[2]-B[0],this.Nh.GO]));},Bl$:function(G){var B;var Gg=this.Ng.
G6;var CA=(A.acg.Text.isPrototypeOf(B=this.Ng.Cj)?B:null);if(!CA)return;CA.R(A.abl(
Gg+1,2,10)+Te);CA.S(A.aaL(A.fl.Af));CA.L(A.jb.Text);CA.A6(0x12);CA.H(A.abK(CA.M,[(
B=this.Ng.M)[2]-B[0],this.Ng.GO]));},Bl9:function(G){var B;var Gg=this.KT.G6;var
CA=(A.acg.Text.isPrototypeOf(B=this.KT.Cj)?B:null);if(!CA)return;CA.R(A.abl(Gg+1
,2,10)+Te);CA.S(A.aaL(A.fl.Af));CA.L(A.jb.Text);CA.A6(0x12);CA.H(A.abK(CA.M,[(B=
this.KT.M)[2]-B[0],this.KT.GO]));},ArE:function(){return 1900+((((-this.Nh.Br/this.
Nh.GO)|0)+2)%200);},AkH:function(E){if(E<1900)E=1900;if(E>2100)E=2100;this.Nh.Gb(((
E-1900)-2)*-this.Nh.GO);var Ve=this.AKn(this.AEN(),E);this.KT.JB(Ve);if(this.AEI(
)>Ve)this.Ls(Ve);},AEN:function(){return 1+((((-this.Ng.Br/this.Ng.GO)|0)+2)%12);
},Uv:function(E){if(E<1)E=1;if(E>12)E=12;this.Ng.Gb(((E-1)-2)*-this.Ng.GO);var Ve=
this.AKn(E,this.ArE());this.KT.JB(Ve);if(this.AEI()>Ve)this.Ls(Ve);},AEI:function(
){return 1+((((-this.KT.Br/this.KT.GO)|0)+2)%this.KT.AY);},Ls:function(E){var Ve=
this.AKn(this.AEN(),this.ArE());if(E<1)E=1;if(E>Ve)E=Ve;this.KT.Gb(((E-2)-1)*-this.
KT.GO);},AKn:function(AfL,Ac7){if(AfL===2){if(!(Ac7%4)&&(!!(Ac7%100)||!(Ac7%400)
))return 29;else return 28;}else if((((AfL===4)||(AfL===6))||(AfL===9))||(AfL===
11))return 30;else return 31;},_Init:function(aArg){A.acn.Ahy._Init.call(this,aArg
);A.acg.BW._Init.call(this.Aa7={I:this},0);A.Core.H$._Init.call(this.W1={I:this}
,0);A.Core.H$._Init.call(this.W0={I:this},0);A.Core.H$._Init.call(this.WZ={I:this
},0);A.Core.CM._Init.call(this.Nh={I:this},0);A.Core.CM._Init.call(this.Ng={I:this
},0);A.Core.CM._Init.call(this.KT={I:this},0);this.__proto__=C.ANQ;this.H(Aac);this.
Aa7.H(AfB);this.Aa7.Nn(3);this.Aa7.L(0xFFE1E1E1);this.Aa7.Z(true);this.W1.H(Aad);
this.W1.ATP(Xf);this.W1.ATl(0.2);this.W0.H(Aae);this.W0.ATP(Xf);this.W0.ATl(0.2);
this.WZ.H(Xg);this.WZ.ATP(Xf);this.WZ.ATl(0.2);this.Nh.H(Aad);this.Nh.ATj(true);
this.Nh.Gb(60);this.Nh.Ae8(30);this.Nh.JB(200);this.Ng.H(Aae);this.Ng.ATj(true);
this.Ng.Gb(60);this.Ng.Ae8(30);this.Ng.JB(12);this.KT.H(Xg);this.KT.ATj(true);this.
KT.Gb(60);this.KT.Ae8(30);this.KT.JB(31);this.J(this.Aa7,0);this.J(this.W1,0);this.
J(this.W0,0);this.J(this.WZ,0);this.J(this.Nh,0);this.J(this.Ng,0);this.J(this.KT
,0);this.W1.Zo=[this,this.AAG];this.W1.SL=[this,this.A3Y];this.W0.Zo=[this,this.
AAG];this.W0.SL=[this,this.A3Y];this.WZ.Zo=[this,this.AAG];this.WZ.SL=[this,this.
A3Y];this.Nh.Hm=[this,this.Bma];this.Nh.Aw9(this.W1);this.Ng.Hm=[this,this.Bl$];
this.Ng.Aw9(this.W0);this.KT.Hm=[this,this.Bl9];this.KT.Aw9(this.WZ);},_Done:function(
){this.__proto__=A.acn.Ahy;this.Aa7._Done();this.W1._Done();this.W0._Done();this.
WZ._Done();this.Nh._Done();this.Ng._Done();this.KT._Done();A.acn.Ahy._Done.call(
this);},_ReInit:function(){A.acn.Ahy._ReInit.call(this);this.Aa7._ReInit();this.
W1._ReInit();this.W0._ReInit();this.WZ._ReInit();this.Nh._ReInit();this.Ng._ReInit(
);this.KT._ReInit();},_Mark:function(D){var B;A.acn.Ahy._Mark.call(this,D);if((B=
this.Dk)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.Aa7)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.W1)._cycle!=D)B._Mark(B._cycle=D);if((B=this.W0)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.WZ)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Nh
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ng)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.KT)._cycle!=D)B._Mark(B._cycle=D);},_className:"Demonstrator::DatePicker"
};C.AHu={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/DemonstratorWhiteTile.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[40,40],FrameDelay:0,_this:
null}};C.AV_={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/DemonstratorWhiteTileSmall.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[40,40],FrameDelay:0,_this:
null}};C.AhK={_Init:function(aArg){A.Core.P._Init.call(this,aArg);this.__proto__=
C.AhK;this.H(E7);},_className:"Demonstrator::SelectionAreaContent"};C.AMI={Y:null
,Vy:null,TG:null,BB4:function(G){var B;this.TG.H(A.abI(this.TG.M,((B=this.M)[3]-
B[1])-((B=this.Vy.M)[3]-B[1])));},_Init:function(aArg){C.AhK._Init.call(this,aArg
);A.Core.Y._Init.call(this.Y={I:this},0);C.AMb._Init.call(this.Vy={I:this},0);C.
AVT._Init.call(this.TG={I:this},0);this.__proto__=C.AMI;this.Y.A0(0x3F);this.Y.H(
E7);this.Y.JX(1);this.Vy.H(AhX);this.Vy.Aj(true);this.Vy.ArZ(false);this.TG.A0(0x3
);this.TG.H(K1);this.TG.Aj(true);this.TG.N4(C.AMB);this.TG.BnH(C.AMP);this.J(this.
Y,0);this.J(this.Vy,0);this.J(this.TG,0);this.Bb(this.TG);this.Y.Em=[this,this.BB4
];this.TG.Zt(A._GetAutoObject(A.aco.Aqj));},_Done:function(){this.__proto__=C.AhK;
this.Y._Done();this.Vy._Done();this.TG._Done();C.AhK._Done.call(this);},_ReInit:
function(){C.AhK._ReInit.call(this);this.Y._ReInit();this.Vy._ReInit();this.TG._ReInit(
);},_Mark:function(D){var B;C.AhK._Mark.call(this,D);if((B=this.Y)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Vy)._cycle!=D)B._Mark(B._cycle=D);if((B=this.TG)._cycle!=
D)B._Mark(B._cycle=D);},_className:"Demonstrator::AnimalSelectionActions"};C.Vy={
_Init:function(aArg){C.AuF._Init.call(this,aArg);this.__proto__=C.Vy;this.T(A.aaR(
A.acf.A6l));},_ReInit:function(){C.AuF._ReInit.call(this);this.T(A.aaR(A.acf.A6l
));},_className:"Demonstrator::ActionsHeader"};C.AMb={Background:null,XR:null,Y:
null,Acx:null,Acm:null,ZI:null,Acw:null,Akc:null,Akd:null,Ake:null,Akf:null,Akg:
null,Aho:false,Init:function(aArg){var B;A.zX([this,this.Bfz],[B=A._GetAutoObject(
A.aco.G1),B.AEP,B.Ar7],0);A.pe([this,this.Bfz],this);},Aku:function(G){this.ArZ(
true);},Akt:function(G){this.ArZ(false);},ArZ:function(E){if(this.Aho===E)return;
this.Aho=E;this.XR.ArZ(E);A.pe([this,this.BfK],this);},Bfz:function(G){var BCa=A.
_GetAutoObject(A.aco.G1).AhF===2;A._GetAutoObject(A.Device.Helper).J4(this.ZI,BCa
);},BfK:function(G){var B;if(this.Aho)this.H(A.abI(this.M,(B=this.XR.M)[3]-B[1])
);else this.H(A.abI(this.M,((B=this.XR.M)[3]-B[1])+((B=this.Y.Dd(0x401))[3]-B[1]
)));},_Init:function(aArg){A.Core.P._Init.call(this,aArg);A.acg.AL._Init.call(this.
Background={I:this},0);C.Vy._Init.call(this.XR={I:this},0);A.Core.Y._Init.call(this.
Y={I:this},0);C.Acx._Init.call(this.Acx={I:this},0);C.Acm._Init.call(this.Acm={I:
this},0);C.ZI._Init.call(this.ZI={I:this},0);C.Acw._Init.call(this.Acw={I:this},
0);A.acg.C8._Init.call(this.Akc={I:this},0);A.acg.C8._Init.call(this.Akd={I:this
},0);A.acg.C8._Init.call(this.Ake={I:this},0);A.acg.C8._Init.call(this.Akf={I:this
},0);A.acg.C8._Init.call(this.Akg={I:this},0);this.__proto__=C.AMb;this.H(AcN);this.
Background.A0(0x3F);this.Background.H(AcN);this.XR.A0(0x1D);this.XR.H(Ce);this.Y.
H(Ly);this.Y.JX(1);this.Acx.H(AhY);this.Acx.Aj(true);this.Acm.H(Aof);this.Acm.Aj(
true);this.ZI.H(Of);this.ZI.Aj(true);this.Acw.H(Xh);this.Acw.Aj(true);this.Akc.DC(
Td);this.Akc.DM(ML);this.Akc.L(A.jb.Bc);this.Akd.DC(Aaf);this.Akd.DM(AfC);this.Akd.
L(A.jb.Bc);this.Ake.DC(AhZ);this.Ake.DM(AcO);this.Ake.L(A.jb.Bc);this.Akf.DC(U0);
this.Akf.DM(Aog);this.Akf.L(A.jb.Bc);this.Akg.DC(Aoh);this.Akg.DM(Aoi);this.Akg.
L(A.jb.Bc);this.J(this.Background,0);this.J(this.XR,0);this.J(this.Y,0);this.J(this.
Acx,0);this.J(this.Acm,0);this.J(this.ZI,0);this.J(this.Acw,0);this.J(this.Akc,0
);this.J(this.Akd,0);this.J(this.Ake,0);this.J(this.Akf,0);this.J(this.Akg,0);this.
XR.A_z([this,this.Aku]);this.XR.A_y([this,this.Akt]);this.Y.Em=[this,this.BfK];this.
Init(aArg);},_Done:function(){this.__proto__=A.Core.P;this.Background._Done();this.
XR._Done();this.Y._Done();this.Acx._Done();this.Acm._Done();this.ZI._Done();this.
Acw._Done();this.Akc._Done();this.Akd._Done();this.Ake._Done();this.Akf._Done();
this.Akg._Done();A.Core.P._Done.call(this);},_ReInit:function(){A.Core.P._ReInit.
call(this);this.Background._ReInit();this.XR._ReInit();this.Y._ReInit();this.Acx.
_ReInit();this.Acm._ReInit();this.ZI._ReInit();this.Acw._ReInit();this.Akc._ReInit(
);this.Akd._ReInit();this.Ake._ReInit();this.Akf._ReInit();this.Akg._ReInit();},
_Mark:function(D){var B;A.Core.P._Mark.call(this,D);if((B=this.Background)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.XR)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
Y)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Acx)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Acm)._cycle!=D)B._Mark(B._cycle=D);if((B=this.ZI)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Acw)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Akc)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Akd)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ake)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.Akf)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
Akg)._cycle!=D)B._Mark(B._cycle=D);},_className:"Demonstrator::ActionsMenu"};C.Jt={
YD:null,Aha:null,Bn:null,C8:null,Af$:function(G){},A0U:function(s){this.Af$(s);}
,_Init:function(aArg){A.Core.P._Init.call(this,aArg);A.acg.Ap._Init.call(this.YD={
I:this},0);A.acg.Ap._Init.call(this.Aha={I:this},0);A.Core.Bn._Init.call(this.Bn={
I:this},0);A.acg.C8._Init.call(this.C8={I:this},0);this.__proto__=C.Jt;this.H(Ce
);this.YD.H(Aoj);this.YD.L(A.jb.Text);this.Aha.H(Alc);this.Aha.L(A.jb.Text);this.
Aha.Cv(0);this.Bn.JZ(J7);this.Bn.Ky(Od);this.Bn.DC(Qb);this.Bn.DM(ML);this.C8.DC(
Qb);this.C8.DM(Od);this.C8.L(A.jb.Bc);this.J(this.YD,0);this.J(this.Aha,0);this.
J(this.Bn,0);this.J(this.C8,0);this.YD.Ax(A.aaL(A.aci.TR));this.Aha.Ax(A.aaL(A.aci.
AT9));this.Bn.BM=[this,this.A0U];},_Done:function(){this.__proto__=A.Core.P;this.
YD._Done();this.Aha._Done();this.Bn._Done();this.C8._Done();A.Core.P._Done.call(
this);},_ReInit:function(){A.Core.P._ReInit.call(this);this.YD._ReInit();this.Aha.
_ReInit();this.Bn._ReInit();this.C8._ReInit();},_Mark:function(D){var B;A.Core.P.
_Mark.call(this,D);if((B=this.YD)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Aha).
_cycle!=D)B._Mark(B._cycle=D);if((B=this.Bn)._cycle!=D)B._Mark(B._cycle=D);if((B=
this.C8)._cycle!=D)B._Mark(B._cycle=D);},_className:"Demonstrator::ActionsItem"};
C.Acm={AGF:null,DT:null,YC:null,BW:null,Nc:null,AhG:null,ANK:0,Init:function(aArg
){var B;A.zX([this,this.BfJ],[B=A._GetAutoObject(A.aco.G1),B.AEP,B.Ar7],0);A.pe([
this,this.BfJ],this);},Af$:function(G){var IB=A.ab0(this.YC.String,0,10);var Ij=
false;switch(A._GetAutoObject(A.aco.G1).AhF){case 2:Ij=A._GetAutoObject(A.aco.G1
).BCp(IB);break;case 0:case 1:Ij=A._GetAutoObject(A.aco.G1).BgI(IB);break;default:
A.ab5("%s%e",AsZ,A._GetAutoObject(A.aco.G1).AhF);}if(Ij){IB=IB+1;this.YC.R(IB.toFixed(
));}},BfJ:function(G){var AJr=null;var AKD=0;switch(A._GetAutoObject(A.aco.G1).AhF
){case 2:{AJr=A.aaL(A.ach.AvF);AKD=276;}break;case 0:{AJr=A.aaL(A.ach.AjY);AKD=900;
}break;case 1:{AJr=A.aaL(C.AxV);AKD=276;}break;default:A.ab5("%s%e",AsZ,A._GetAutoObject(
A.aco.G1).AhF);}this.YC.R(((AKD*1000000000000)+(A.abY(this.YC.String,0,10)%1000000000000
)).toFixed());this.YD.Ax(AJr);},Bmz:function(E){var F;if(this.ANK===E)return;this.
ANK=E;if(!!this.AGF)(F=this.AGF,F[2].call(F[0],E));},Blf:function(){return this.
ANK;},_Init:function(aArg){C.Jt._Init.call(this,aArg);A.acq.DT._Init.call(this.DT={
I:this},0);C.Akp._Init.call(this.YC={I:this},0);A.acg.BW._Init.call(this.BW={I:this
},0);A.acg.Ap._Init.call(this.Nc={I:this},0);C.AhG._Init.call(this.AhG={I:this},
0);this.__proto__=C.Acm;var B;this.DT.H(Ax8);this.DT.ArY(120);this.DT.GO=30;this.
DT.ATe(A.jb.Ri);this.DT.A93(A.jb.CU);this.DT.A97(A.jb.CU);this.DT.ATf(A.jb.Ri);this.
DT.A98(A.jb.Text);this.DT.A94(A.jb.AV);this.DT.A99(A.jb.Bm);this.DT.A96(A.jb.AV);
this.DT.A95(A.jb.Ri);this.Bn.JZ(Ax9);this.Bn.DM(O8);this.YC.H(Ro);this.YC.R(Ax_);
this.YC.L(A.jb.Text);this.BW.H(U1);this.BW.Nn(2);this.BW.L(A.jb.Text);this.Nc.H(
As0);this.Nc.L(A.jb.Text);this.Nc.A6(0xC);this.Nc.Cv(3);this.J(this.DT,-2);this.
J(this.YC,-1);this.J(this.BW,0);this.J(this.Nc,0);this.DT.Au([this,this.Blf,this.
Bmz]);this.DT.A_d(this.AhG);this.DT.ArQ(A.aaL(A.fl.Bh));this.DT.AwN(A.aaL(A.fl.Bh
));this.Nc.Ax(A.aaL(A.ach.Aju));this.AGF=[B=A._GetAutoObject(A.aco.G1),B.AEP,B.Ar7
];this.Init(aArg);},_Done:function(){this.__proto__=C.Jt;this.DT._Done();this.YC.
_Done();this.BW._Done();this.Nc._Done();this.AhG._Done();C.Jt._Done.call(this);}
,_ReInit:function(){C.Jt._ReInit.call(this);this.DT._ReInit();this.YC._ReInit();
this.BW._ReInit();this.Nc._ReInit();this.AhG._ReInit();this.DT.ArQ(A.aaL(A.fl.Bh
));this.DT.AwN(A.aaL(A.fl.Bh));},_Mark:function(D){var B;C.Jt._Mark.call(this,D);
if((B=this.AGF)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.DT)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.YC)._cycle!=D)B._Mark(B._cycle=D);if((B=this.BW
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Nc)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.AhG)._cycle!=D)B._Mark(B._cycle=D);},_className:"Demonstrator::ScanIdAction"
};C.Acx={UN:null,OX:null,A4L:0,Init:function(aArg){var B;A.zX([this,this.BBk],[B=
A._GetAutoObject(A.aco.G1),B.ASW,B.ATI],0);A.zX([this,this.AAO],[B=A._GetAutoObject(
A.Device.Device),B.ArB,B.Atp],0);A.pe([this,this.AAO],this);},Ai:function(Ae){C.
Jt.Ai.call(this,Ae);this.OX.Z(!A._GetAutoObject(A.aco.G1).Axt);},Af$:function(G){
var B;A._GetAutoObject(A.aco.G1).Bfj(this);},AAO:function(G){if(A._GetAutoObject(
A.Device.Device).TemperatureUnit!==this.A4L){switch(A._GetAutoObject(A.Device.Device
).TemperatureUnit){case 0:this.OX.R(A.abk(A._GetAutoObject(A.aco.G1).WX/100,0,1)
);break;case 1:{var Auu=A._GetAutoObject(A.Device.Converter).AVo(A._GetAutoObject(
A.aco.G1).WX/100,0,A._GetAutoObject(A.Device.Device).TemperatureUnit);this.OX.R(
A.abk(Auu,0,1));}break;default:A.ab5("%s%e",Ax$,A._GetAutoObject(A.Device.Device
).TemperatureUnit);}this.A4L=A._GetAutoObject(A.Device.Device).TemperatureUnit;}
},BA5:function(G){var B;var Agr=A.abX(this.OX.String,0);Agr=A._GetAutoObject(A.Device.
Converter).AVo(Agr,A._GetAutoObject(A.Device.Device).TemperatureUnit,0);Agr*=100;
A._GetAutoObject(A.aco.G1).AFW(Math.round(Agr)|0);},BBk:function(G){this.Am();},
_Init:function(aArg){C.Jt._Init.call(this,aArg);A.acr.UN._Init.call(this.UN={I:this
},0);C.OX._Init.call(this.OX={I:this},0);this.__proto__=C.Acx;var B;this.UN.H(Aya
);this.UN.A_t(A.aaR(A.acf.A5A));this.OX.H(Ayb);this.OX.R(Aok);this.OX.L(A.jb.Text
);this.OX.BmA(true);this.A4L=A._GetAutoObject(A.Device.Device).TemperatureUnit;this.
J(this.UN,0);this.J(this.OX,0);this.YD.Ax(A.aaL(A.ach.Ag7));this.UN.Au([B=A._GetAutoObject(
A.aco.G1),B.ASW,B.ATI]);this.UN.OnSetAppearance(A._GetAutoObject(A.acx.Au1));this.
OX.Dk=[this,this.BA5];this.Init(aArg);},_Done:function(){this.__proto__=C.Jt;this.
UN._Done();this.OX._Done();C.Jt._Done.call(this);},_ReInit:function(){C.Jt._ReInit.
call(this);this.UN._ReInit();this.OX._ReInit();this.UN.A_t(A.aaR(A.acf.A5A));},_Mark:
function(D){var B;C.Jt._Mark.call(this,D);if((B=this.UN)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.OX)._cycle!=D)B._Mark(B._cycle=D);},_className:"Demonstrator::TemperatureAction"
};C.Arf={Q:null,BW:null,Bn:null,AgL:null,Am_:null,Am9:null,Ark:null,Text:null,Hp:
null,Ap:null,CY:null,Arj:null,Arl:null,Apj:false,Bl:function(aSize){this.Hp.H(A.
abK(this.Hp.M,aSize));this.BW.AxA(1);this.BW.Jx(0,40);this.BW.Fl(0,aSize[0]-20,20
,12.5,12.5,-90,90,10);this.BW.Fl(0,20,20,12.5,12.5,90,270,10);this.BW.VQ(0);},Ai:
function(Ae){var B;var F;A.Core.P.Ai.call(this,Ae);var ID=((Ae&0x40)===0x40);if(
ID){if(!!this.Q)this.Text.R((F=this.Q,F[1].call(F[0])));this.AgL.Ar(true);this.Ap.
Z(false);}else{if(!!this.Q)this.Text.R((F=this.Q,F[1].call(F[0])));this.AgL.Ar(false
);this.CY.Z(false);this.Ap.Z(true);}this.Apj=ID;},Af$:function(G){var B;if(!((this.
U&0x80)===0x80))this.In().AM2(this);},A8A:function(G){},Bbg:function(s){this.A8A(
s);},BkG:function(G){var B;var F;if(!this.Q||!(F=this.Q,F[1].call(F[0])).length)
this.CY.H(A.abM(this.CY.M,A.aaI(this.Text.M)[0]));else{this.CY.H(A.abM(this.CY.M
,this.Text.AOZ(0)[2]+2));this.CY.H(A.abO(this.CY.M,this.Text.AOZ(0)[1]));this.CY.
H(A.abI(this.CY.M,(B=this.Text.AOZ(0))[3]-B[1]));}this.Ap.H(A.abM(this.Ap.M,this.
Text.M[0]-((B=this.Ap.M)[2]-B[0])));},A8y:function(G){},Bbf:function(s){this.A8y(
s);},Au:function(E){if(A.aaZ(this.Q,E))return;if(!!this.Q)A.z$([this,this.IE],this.
Q,0);this.Q=E;if(!!E)A.zX([this,this.IE],E,0);if(!!E)A.pe([this,this.IE],this);}
,IE:function(G){this.Am();},Bmc:function(G){var B;if(((this.U&0x80)===0x80))this.
In().ACO(this);},Bfr:function(G){},_Init:function(aArg){A.Core.P._Init.call(this
,aArg);A.Graphics.Hz._Init.call(this.BW={I:this},0);A.Core.Bn._Init.call(this.Bn={
I:this},0);A.acl.TM._Init.call(this.AgL={I:this},0);A.Core.BL._Init.call(this.Am_={
I:this},0);A.Core.BL._Init.call(this.Am9={I:this},0);A.Core.BL._Init.call(this.Ark={
I:this},0);A.acg.Text._Init.call(this.Text={I:this},0);A.acg.Hp._Init.call(this.
Hp={I:this},0);A.acg.Ap._Init.call(this.Ap={I:this},0);A.acg.AL._Init.call(this.
CY={I:this},0);A.Core.BL._Init.call(this.Arj={I:this},0);A.Core.BL._Init.call(this.
Arl={I:this},0);this.__proto__=C.Arf;var B;this.H(AfD);this.Bn.A0(0x3F);this.Bn.
JZ(J7);this.Bn.Ky(Aol);this.Bn.DC(IX);this.Bn.DM(Rn);this.AgL.Fr(530);this.AgL.Ut(
530);this.Am_.Filter=143;this.Am9.Filter=45;this.Ark.Filter=1;this.Text.A0(0x3F);
this.Text.H(AfD);this.Text.Jc(true);this.Text.A6(0x12);this.Text.L(0xFFB3B3B3);this.
Hp.H(AfD);this.Hp.L(0xFFB3B3B3);this.Hp.Nn(1);this.Ap.H(Aom);this.CY.H(As1);this.
CY.L(0xFFB3B3B3);this.CY.Z(false);this.Arj.Filter=138;this.Arl.Filter=137;this.J(
this.Bn,0);this.J(this.Text,0);this.J(this.Hp,0);this.J(this.Ap,0);this.J(this.CY
,0);this.Bn.Lq=[this,this.Af$];this.AgL.Q=[B=this.CY,B.Fq,B.Z];this.Am_.BM=[this
,this.Bbg];this.Am_.D1=[this,this.Bbg];this.Am9.BM=[this,this.Bbf];this.Am9.D1=[
this,this.Bbf];this.Ark.BM=[this,this.Bmc];this.Text.Q7([this,this.BkG]);this.Text.
S(A.aaL(A.fl.Ak));this.Hp.Zy(this.BW);this.Ap.Ax(null);this.Arj.BM=[this,this.Bfr
];this.Arl.BM=[this,this.Bfr];},_Done:function(){this.__proto__=A.Core.P;this.BW.
_Done();this.Bn._Done();this.AgL._Done();this.Am_._Done();this.Am9._Done();this.
Ark._Done();this.Text._Done();this.Hp._Done();this.Ap._Done();this.CY._Done();this.
Arj._Done();this.Arl._Done();A.Core.P._Done.call(this);},_ReInit:function(){A.Core.
P._ReInit.call(this);this.BW._ReInit();this.Bn._ReInit();this.AgL._ReInit();this.
Am_._ReInit();this.Am9._ReInit();this.Ark._ReInit();this.Text._ReInit();this.Hp.
_ReInit();this.Ap._ReInit();this.CY._ReInit();this.Arj._ReInit();this.Arl._ReInit(
);this.Text.S(A.aaL(A.fl.Ak));},_Mark:function(D){var B;A.Core.P._Mark.call(this
,D);if((B=this.Q)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.BW)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.Bn)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
AgL)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Am_)._cycle!=D)B._Mark(B._cycle=D);
if((B=this.Am9)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ark)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Text)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Hp)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.Ap)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
CY)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Arj)._cycle!=D)B._Mark(B._cycle=D);
if((B=this.Arl)._cycle!=D)B._Mark(B._cycle=D);},_className:"Demonstrator::InputView"
};C.Aes={Background:null,Ys:null,_Init:function(aArg){A.Core.P._Init.call(this,aArg
);A.acg.AL._Init.call(this.Background={I:this},0);C.Ys._Init.call(this.Ys={I:this
},0);this.__proto__=C.Aes;var B;this.H(Xi);this.Background.H(Xi);this.Ys.A0(0x1D
);this.Ys.H(As2);this.J(this.Background,0);this.J(this.Ys,0);this.Ys.Au([B=A._GetAutoObject(
A.aco.AgO),B.A9p,B.AFR]);},_Done:function(){this.__proto__=A.Core.P;this.Background.
_Done();this.Ys._Done();A.Core.P._Done.call(this);},_ReInit:function(){A.Core.P.
_ReInit.call(this);this.Background._ReInit();this.Ys._ReInit();},_Mark:function(
D){var B;A.Core.P._Mark.call(this,D);if((B=this.Background)._cycle!=D)B._Mark(B.
_cycle=D);if((B=this.Ys)._cycle!=D)B._Mark(B._cycle=D);},_className:"Demonstrator::FilterRow"
};C.OX={Init:function(aArg){var B;A.zX([this,this.AAO],[B=A._GetAutoObject(A.Device.
Device),B.ArB,B.Atp],0);A.pe([this,this.AAO],this);},Ai:function(Ae){var B;C.Akp.
Ai.call(this,Ae);var ID=((this.U&0x40)===0x40);if(!ID&&(this.String.length>0))this.
Text.R(((this.String+As3)+A._GetAutoObject(A.acj.Temperature).AlN())+String.fromCharCode(
0x0A));else this.Text.R(this.String+String.fromCharCode(0x0A));if(this.D6>this.String.
length)this.D6=this.String.length;},AAO:function(G){this.Am();},_Init:function(aArg
){C.Akp._Init.call(this,aArg);this.__proto__=C.OX;this.Init(aArg);},_className:"Demonstrator::TemperatureInputView"
};C.Akp={B7:null,Dk:null,IY:null,Cq:null,AmG:null,Sh:null,KP:null,Bn:null,Text:null
,CY:null,Aqz:null,Ash:null,BW:null,Hp:null,Arx:null,Aq4:null,AqM:null,String:A.jV
,D6:0,AQ:0xFFB3B3B3,Av2:15,ANS:false,LC:false,Bl:function(aSize){this.Hp.H(A.abK(
this.Hp.M,aSize));this.BW.AxA(1);this.BW.Jx(0,40);this.BW.Fl(0,aSize[0]-20,20,12.5
,12.5,-90,90,10);this.BW.Fl(0,20,20,12.5,12.5,90,270,10);this.BW.VQ(0);},Ai:function(
Ae){var B;A.acn.Jg.Ai.call(this,Ae);if(((Ae&0x40)===0x40))this.IY.Ar(true);else{
this.IY.Ar(false);this.CY.Z(false);}},A4V:function(G){var B;var Bd=this.Text.M;var
NA=0;var NB=0;if(this.CY.Et[0]<Bd[0])NA=Bd[0]-this.CY.Et[0];if(this.CY.Et[0]>Bd[
2])NA=Bd[2]-this.CY.Et[0];if(this.CY.Et[1]<Bd[1])NB=Bd[1]-this.CY.Et[1];if(this.
CY.ED[1]>Bd[3])NB=Bd[3]-this.CY.ED[1];if(!!NA||!!NB)this.Text.Gb(A.abf(this.Text.
Br,[NA,NB]));NA=this.Text.Br[0];NB=this.Text.Br[1];var C6=[(B=this.Text.Dd())[2]-
B[0],B[3]-B[1]];if(C6[0]<=((B=this.Text.M)[2]-B[0]))NA=0;if(C6[1]<=((B=this.Text.
M)[3]-B[1]))NB=0;this.Text.Gb([NA,NB]);},Amo:function(G){if(!this.B7)return;var A4l=
this.Text.AG1(this.D6);var pos=this.Text.Afh(A4l);this.CY.DM(A.abe(pos,[0,this.B7.
Ascent]));this.CY.DC(A.abf(pos,[0,this.B7.Descent]));if(this.IY.Bw){this.IY.Ar(false
);this.IY.Ar(true);}if(this.LC){A.pe([this,this.A4V],this);this.LC=false;}},AAK:
function(G){if(!this.A7i(0x80))this.In().AM2(this);var EH=this.Text.AUb(this.Bn.
H2);var Vj=this.Text.AnT(EH);if(Vj!==this.D6){this.D6=Vj;A.pe([this,this.Amo],this
);this.LC=true;}},AAE:function(G){if(!this.B7)return;var EH=this.Text.AG1(this.D6
);if(this.Cq.CP===6){EH=[EH[0]-1,EH[1]];if(this.Text.AnT(EH)===this.D6){EH=[EH[0
],EH[1]-1];EH=[this.Text.ADb(EH[1]).length,EH[1]];}}if(this.Cq.CP===7){EH=[EH[0]+
1,EH[1]];if(this.Text.AnT(EH)===this.D6){EH=[EH[0],EH[1]+1];EH=[0,EH[1]];}}var Vj=
this.Text.AnT(EH);if(Vj!==this.D6){this.D6=Vj;A.pe([this,this.Amo],this);this.LC=
true;}},Bfa:function(G){if(!this.D6)return;this.R(A.ab1(this.String,this.D6-1,1)
);this.D6=this.D6-1;this.LC=true;A.pe(this.Dk,this);},AAF:function(G){if(this.D6>=
this.String.length)return;this.R(A.ab1(this.String,this.D6,1));this.LC=true;A.pe(
this.Dk,this);},Bff:function(G){if(this.String.length>=this.Av2)return;var Bzn=this.
KP.DQ;var Aus=String.fromCharCode(Bzn);this.R(A.abU(this.String,Aus,this.D6));this.
D6=this.D6+Aus.length;this.LC=true;A.pe(this.Dk,this);},R:function(E){if(this.String===
E)return;this.String=E;if(this.D6>(E.length+1))this.D6=E.length;this.Text.R(E+String.
fromCharCode(0x0A));this.LC=true;this.Text.Gb(J7);},L:function(E){if(this.AQ===E
)return;this.AQ=E;this.Text.L(E);this.CY.L(E);this.Hp.L(E);},S:function(E){if(this.
B7===E)return;this.B7=E;this.Text.S(E);this.LC=true;this.Text.Gb(J7);},Bfs:function(
G){if(this.ANS===false)return;if(this.String.indexOf(String.fromCharCode(0x2E),0
)>=0)return;if(this.String.length>=this.Av2)return;this.R(A.abU(this.String,Te,this.
D6));this.D6=this.D6+1;this.LC=true;A.pe(this.Dk,this);},Bb3:function(s){this.Bfs(
s);},BmA:function(E){if(this.ANS===E)return;this.ANS=E;if(E===false){var Bf$=this.
String.indexOf(String.fromCharCode(0x2E),0);if(Bf$>=0)this.R(A.abV(this.String,Bf$
));}this.LC=true;this.Text.Gb(J7);},BnG:function(E){if(this.Av2===E)return;this.
Av2=E;this.R(A.abV(this.String,E));this.LC=true;this.Text.Gb(J7);},BBb:function(
G){if(this.A7i(0x80)){this.In().ACO(this);this.Cs(0x10,0x0);}this.Am();},BA1:function(
G){var Vj=this.String.length;if(Vj!==this.D6){this.D6=Vj;A.pe([this,this.Amo],this
);this.LC=true;}},BA4:function(G){if(!!this.D6){this.D6=0;A.pe([this,this.Amo],this
);this.LC=true;}},_Init:function(aArg){A.acn.Jg._Init.call(this,aArg);A.acl.TM._Init.
call(this.IY={I:this},0);A.Core.BL._Init.call(this.Cq={I:this},0);A.Core.BL._Init.
call(this.AmG={I:this},0);A.Core.BL._Init.call(this.Sh={I:this},0);A.Core.BL._Init.
call(this.KP={I:this},0);A.Core.Bn._Init.call(this.Bn={I:this},0);A.acg.Text._Init.
call(this.Text={I:this},0);A.acg.C8._Init.call(this.CY={I:this},0);A.Core.BL._Init.
call(this.Aqz={I:this},0);A.Core.BL._Init.call(this.Ash={I:this},0);A.Graphics.Hz.
_Init.call(this.BW={I:this},0);A.acg.Hp._Init.call(this.Hp={I:this},0);A.Core.BL.
_Init.call(this.Arx={I:this},0);A.Core.BL._Init.call(this.Aq4={I:this},0);A.Core.
BL._Init.call(this.AqM={I:this},0);this.__proto__=C.Akp;var B;this.H(AfD);this.IY.
B3=false;this.IY.Cx=true;this.IY.Fr(500);this.IY.Ut(500);this.Cq.Filter=147;this.
AmG.Filter=45;this.Sh.Filter=44;this.KP.Filter=143;this.Bn.A0(0x3F);this.Bn.JZ(Rn
);this.Bn.Ky(IX);this.Bn.DC(Aol);this.Bn.DM(J7);this.Bn.AFC(3);this.Text.A0(0x3F
);this.Text.H(AfD);this.Text.KU(false);this.Text.A6(0x12);this.Text.R(A.jV);this.
Text.L(0xFFB3B3B3);this.CY.DC(As4);this.CY.DM(Aon);this.CY.A_8(2);this.CY.A_7(2);
this.CY.L(0xFFB3B3B3);this.CY.Z(false);this.Aqz.Filter=138;this.Ash.Filter=137;this.
Hp.H(AfD);this.Hp.L(0xFFB3B3B3);this.Hp.Nn(1);this.Arx.Filter=1;this.Aq4.Filter=
41;this.AqM.Filter=42;this.J(this.Bn,0);this.J(this.Text,0);this.J(this.CY,0);this.
J(this.Hp,0);this.IY.Q=[B=this.CY,B.Fq,B.Z];this.Cq.BM=[this,this.AAE];this.Cq.D1=[
this,this.AAE];this.AmG.BM=[this,this.Bfa];this.AmG.D1=[this,this.Bfa];this.Sh.BM=[
this,this.AAF];this.Sh.D1=[this,this.AAF];this.KP.BM=[this,this.Bff];this.KP.D1=[
this,this.Bff];this.Bn.BM=[this,this.AAK];this.Text.Q7([this,this.Amo]);this.Text.
S(A.aaL(A.fl.Ak));this.B7=A.aaL(A.fl.Ak);this.Aqz.BM=[this,this.Bb3];this.Ash.BM=[
this,this.Bb3];this.Hp.Zy(this.BW);this.Arx.BM=[this,this.BBb];this.Aq4.BM=[this
,this.BA4];this.AqM.BM=[this,this.BA1];},_Done:function(){this.__proto__=A.acn.Jg;
this.IY._Done();this.Cq._Done();this.AmG._Done();this.Sh._Done();this.KP._Done();
this.Bn._Done();this.Text._Done();this.CY._Done();this.Aqz._Done();this.Ash._Done(
);this.BW._Done();this.Hp._Done();this.Arx._Done();this.Aq4._Done();this.AqM._Done(
);A.acn.Jg._Done.call(this);},_ReInit:function(){A.acn.Jg._ReInit.call(this);this.
IY._ReInit();this.Cq._ReInit();this.AmG._ReInit();this.Sh._ReInit();this.KP._ReInit(
);this.Bn._ReInit();this.Text._ReInit();this.CY._ReInit();this.Aqz._ReInit();this.
Ash._ReInit();this.BW._ReInit();this.Hp._ReInit();this.Arx._ReInit();this.Aq4._ReInit(
);this.AqM._ReInit();this.Text.S(A.aaL(A.fl.Ak));this.S(A.aaL(A.fl.Ak));},_Mark:
function(D){var B;A.acn.Jg._Mark.call(this,D);if((B=this.B7)&&(B._cycle!=D))B._Mark(
B._cycle=D);if((B=this.Dk)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.
IY)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Cq)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.AmG)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Sh)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.KP)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Bn)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Text)._cycle!=D)B._Mark(B._cycle=D);if((B=this.CY)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.Aqz)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
Ash)._cycle!=D)B._Mark(B._cycle=D);if((B=this.BW)._cycle!=D)B._Mark(B._cycle=D);
if((B=this.Hp)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Arx)._cycle!=D)B._Mark(B.
_cycle=D);if((B=this.Aq4)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AqM)._cycle!=
D)B._Mark(B._cycle=D);},_className:"Demonstrator::NumberInput"};C.Acw={LabelDataSync:
null,Af$:function(G){var B;A.pe([B=A._GetAutoObject(A.acs.Acq),B.BCA],this);},_Init:
function(aArg){C.Jt._Init.call(this,aArg);A.kR.CG._Init.call(this.LabelDataSync={
I:this},0);this.__proto__=C.Acw;this.LabelDataSync.H(As5);this.LabelDataSync.R(A.
aaR(A.acf.A6a));this.LabelDataSync.L(A.jb.Text);this.J(this.LabelDataSync,0);this.
YD.Ax(A.aaL(C.AVf));this.LabelDataSync.S(A.aaL(A.fl.Af));this.LabelDataSync.AZ(A.
aaL(A.fl.Ak));},_Done:function(){this.__proto__=C.Jt;this.LabelDataSync._Done();
C.Jt._Done.call(this);},_ReInit:function(){C.Jt._ReInit.call(this);this.LabelDataSync.
_ReInit();this.LabelDataSync.R(A.aaR(A.acf.A6a));this.LabelDataSync.S(A.aaL(A.fl.
Af));this.LabelDataSync.AZ(A.aaL(A.fl.Ak));},_Mark:function(D){var B;C.Jt._Mark.
call(this,D);if((B=this.LabelDataSync)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Demonstrator::SyncAction"};C.AVf={_class:function(){return A.aci.Al;},0:{FileName:
"./res_index/DemonstratorSyncIcon.png",Format:A._PIXEL_FORMAT_NATIVE,NoOfFrames:
1,FrameSize:[50,60],FrameDelay:0,_this:null}};C.Abe={TimespanDaysToString:null,Avy:
function(aIndex){if(this.AqX()>aIndex)return this.TimespanDaysToString.BT(aIndex
);A.ab5("%s",Ald);return A.jV;},AqX:function(){return 4;},C7:function(aIndex){var
Ajb=0;switch(aIndex){case 0:Ajb=0;break;case 1:Ajb=1;break;case 2:Ajb=2;break;case
3:Ajb=3;break;default:throw new Error(Ayc+aIndex.toFixed());}return Ajb;},_Init:
function(aArg){A.acq.VS._Init.call(this,aArg);A.Device.TimespanDaysToString._Init.
call(this.TimespanDaysToString={I:this},0);this.__proto__=C.Abe;},_Done:function(
){this.__proto__=A.acq.VS;this.TimespanDaysToString._Done();A.acq.VS._Done.call(
this);},_ReInit:function(){A.acq.VS._ReInit.call(this);this.TimespanDaysToString.
_ReInit();},_Mark:function(D){var B;A.acq.VS._Mark.call(this,D);if((B=this.TimespanDaysToString
)._cycle!=D)B._Mark(B._cycle=D);},_className:"Demonstrator::DatePickerUnitDD"};C.
BGm={GL:0,AVZ:1,Hk:2,Year:3};C.ACL={_class:function(){return A.aci.Al;},0:{FileName:
"./res_index/DemonstratorEarTagIcon.png",Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:
2,FrameSize:[37,37],FrameDelay:0,_this:null}};C.AxV={_class:function(){return A.
aci.Al;},0:{FileName:"./res_index/DemonstratorTransponderEarTagIcon.png",Format:
A._PIXEL_FORMAT_ALPHA8,NoOfFrames:2,FrameSize:[37,37],FrameDelay:0,_this:null}};
C.ZI={Aeh:null,Init:function(aArg){var Av=A._NewObject(A.Core.Bs,0);Av.Initialize(
A._GetAutoObject(A.Device.Helper).Dv());var A13=Av.Format(Iu);this.Aeh.R(A13);},
Af$:function(G){var B;var JG=this.Aeh.String;var O;O=JG.indexOf(String.fromCharCode(
0x2E),0);while(O>=0){JG=A.ab1(JG,O,1);O=JG.indexOf(String.fromCharCode(0x2E),O);
}JG=JG+Ayd;JG=JG+A._GetAutoObject(A.acj.VH).AC8(JG).toFixed();var A13=A._GetAutoObject(
A.Device.AnN).Bf0(JG);A._GetAutoObject(A.aco.G1).BCq(((B=(A13|0))<0)?B+0x100000000:
B);},_Init:function(aArg){C.Jt._Init.call(this,aArg);C.ANP._Init.call(this.Aeh={
I:this},0);this.__proto__=C.ZI;this.Aeh.H(Ro);this.Aeh.L(A.jb.Text);this.Aeh.BnG(
10);this.J(this.Aeh,-1);this.YD.Ax(A.aaL(A.ach.AvF));this.Init(aArg);},_Done:function(
){this.__proto__=C.Jt;this.Aeh._Done();C.Jt._Done.call(this);},_ReInit:function(
){C.Jt._ReInit.call(this);this.Aeh._ReInit();},_Mark:function(D){var B;C.Jt._Mark.
call(this,D);if((B=this.Aeh)._cycle!=D)B._Mark(B._cycle=D);},_className:"Demonstrator::ScanDateAction"
};C.AhF={BGB:0,BGw:1,VH:2,LAST:3};C.AhG={AhH:null,Avy:function(aIndex){if(this.AqX(
)>aIndex)return this.AhH.BT(aIndex);A.ab5("%s",Ald);return A.jV;},AqX:function(){
return 3;},_Init:function(aArg){A.acq.VS._Init.call(this,aArg);C.AhH._Init.call(
this.AhH={I:this},0);this.__proto__=C.AhG;},_Done:function(){this.__proto__=A.acq.
VS;this.AhH._Done();A.acq.VS._Done.call(this);},_ReInit:function(){A.acq.VS._ReInit.
call(this);this.AhH._ReInit();},_Mark:function(D){var B;A.acq.VS._Mark.call(this
,D);if((B=this.AhH)._cycle!=D)B._Mark(B._cycle=D);},_className:"Demonstrator::ScanTypeDD"
};C.AhH={BT:function(A9){var Bds=A9;var AK9=A.jV;switch(Bds){case 2:AK9=A.aaR(A.
acf.VH);break;case 0:AK9=A.aaR(A.acf.Transponder);break;case 1:AK9=A.aaR(A.acf.BiX
);break;default:throw new Error(Aye+Bds.toFixed());}return AK9;},_Init:function(
aArg){A.Device.EnumToString._Init.call(this,aArg);this.__proto__=C.AhH;},_className:
"Demonstrator::ScanTypeToString"};C.ANP={Bfs:function(G){var Bga=0;var O=this.String.
indexOf(String.fromCharCode(0x2E),0);while(O>=0){Bga++;O++;O=this.String.indexOf(
String.fromCharCode(0x2E),O);}if(Bga>=2)return;if(this.String.length>=this.Av2)return;
this.R(A.abU(this.String,Te,this.D6));this.D6=this.D6+1;this.LC=true;A.pe(this.Dk
,this);},_Init:function(aArg){C.Akp._Init.call(this,aArg);this.__proto__=C.ANP;}
,_className:"Demonstrator::DateInput"};
C._Init=function(){C.AVT.__proto__=A.acn.Menu;C.AUN.__proto__=A.Core.P;C.AMB.__proto__=
C.Ba;C.Mm.__proto__=A.Core.P;C.Ys.__proto__=C.Arf;C.Abf.__proto__=A.Core.P;C.AvI.
__proto__=A.acn.AhA;C.AMP.__proto__=C.FE;C.AuF.__proto__=C.FE;C.Ba.__proto__=A.Core.
P;C.FE.__proto__=A.Core.P;C.ANQ.__proto__=A.acn.Ahy;C.AhK.__proto__=A.Core.P;C.AMI.
__proto__=C.AhK;C.Vy.__proto__=C.AuF;C.AMb.__proto__=A.Core.P;C.Jt.__proto__=A.Core.
P;C.Acm.__proto__=C.Jt;C.Acx.__proto__=C.Jt;C.Arf.__proto__=A.Core.P;C.Aes.__proto__=
A.Core.P;C.OX.__proto__=C.Akp;C.Akp.__proto__=A.acn.Jg;C.Acw.__proto__=C.Jt;C.Abe.
__proto__=A.acq.VS;C.ZI.__proto__=C.Jt;C.AhG.__proto__=A.acq.VS;C.AhH.__proto__=
A.Device.EnumToString;C.ANP.__proto__=C.Akp;};C._ReInit=function(){};C.DH=function(
D){var B;if((B=C.Background[0]._this)&&(B._cycle!=D))B._Done(C.Background[0]._this=
null);if((B=C.ANa[0]._this)&&(B._cycle!=D))B._Done(C.ANa[0]._this=null);if((B=C.
ANb[0]._this)&&(B._cycle!=D))B._Done(C.ANb[0]._this=null);if((B=C.ANc[0]._this)&&(
B._cycle!=D))B._Done(C.ANc[0]._this=null);if((B=C.ANd[0]._this)&&(B._cycle!=D))B.
_Done(C.ANd[0]._this=null);if((B=C.AQg[0]._this)&&(B._cycle!=D))B._Done(C.AQg[0].
_this=null);if((B=C.Filter[0]._this)&&(B._cycle!=D))B._Done(C.Filter[0]._this=null
);if((B=C.AR1[0]._this)&&(B._cycle!=D))B._Done(C.AR1[0]._this=null);if((B=C.Ajt[
0]._this)&&(B._cycle!=D))B._Done(C.Ajt[0]._this=null);if((B=C.AMS[0]._this)&&(B.
_cycle!=D))B._Done(C.AMS[0]._this=null);if((B=C.Asx[0]._this)&&(B._cycle!=D))B._Done(
C.Asx[0]._this=null);if((B=C.AVk[0]._this)&&(B._cycle!=D))B._Done(C.AVk[0]._this=
null);if((B=C.AHu[0]._this)&&(B._cycle!=D))B._Done(C.AHu[0]._this=null);if((B=C.
AV_[0]._this)&&(B._cycle!=D))B._Done(C.AV_[0]._this=null);if((B=C.AVf[0]._this)&&(
B._cycle!=D))B._Done(C.AVf[0]._this=null);if((B=C.ACL[0]._this)&&(B._cycle!=D))B.
_Done(C.ACL[0]._this=null);if((B=C.AxV[0]._this)&&(B._cycle!=D))B._Done(C.AxV[0].
_this=null);};return C;})();

/* VitalControl demonstration application, © Urban GmbH & Co.KG 2023 */