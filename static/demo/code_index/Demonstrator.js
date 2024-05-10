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
var IV=[58,10,120,50];var Is=[0,0,60,60];var O6=[120,0,360,60];var P_="\u2015";var
P$=[0,0,240,60];var CQ=[0,0,40,60];var Ff=[100,0,130,60];var L5=[43,0,100,60];var
Qa=[125,0,240,60];var J6=[0,0];var Od=[100,0];var Qb=[100,60];var ML=[0,60];var S$=[
107,0];var UW=[240,0];var Z5=[240,60];var W8=[107,60];var It="%d.%m.%Y";var UX="Unhandled date unit: ";
var Z6=[0,0,200,180];var W9=[36,0,200,30];var Z7=[0,30,160,60];var W_="Text";var
Z8=[0,70,40,110];var Z9=[44,70,156,110];var UY=[160,70,200,110];var W$=[7,2,27,25
];var O7=[0,30,170,180];var Z_=[170,34,190,57];var Oe=[0,0,40,40];var Rn=[0,40];
var Xa=[40,40];var Xb=[40,0];var Ta=[0,0,370,100];var Z$=[20,0,290,60];var Aaa=[
0,60,370,100];var Xc="Cap";var Xd=[20,0,370,60];var Tb=[310,0,370,60];var Tc=[370
,0];var Td=[370,60];var Aab="UpdateData is called for the base class ListItemBase. Please make "+
"sure this method is implemented by a derived class.";var Te=".";var Aac=[0,0,170
,150];var AfB=[0,59,170,90];var Aad=[110,0,170,150];var Xe=[0,30];var Aae=[50,0,
100,150];var Xf=[0,0,40,150];var AhX=[0,0,370,240];var K1=[0,60,370,710];var AcN=[
0,0,370,300];var Ly=[0,60,370,300];var AhY=[0,60,370,120];var Aoe=[0,120,370,180
];var Of=[0,180,370,240];var Xg=[0,240,370,300];var Aaf=[370,120];var AfC=[0,120
];var AhZ=[370,180];var AcO=[0,180];var UZ=[370,240];var Aof=[0,240];var Aog=[370
,300];var Aoh=[0,300];var Aoi=[0,0,50,60];var Alc=[50,0,100,60];var AsZ="Unhandled scan type";
var Ax9=[3,11,253,51];var Ax_=[50,0];var O8=[50,60];var Ro=[100,10,370,50];var Ax$=
"276000901234567";var U0=[3,10,57,50];var As0=[3,11,55,50];var Aya="Unhandled temperature unit";
var Ayb=[110,0,260,60];var Ayc=[235,10,370,50];var Aoj="39.5";var AfD=[0,0,270,40
];var Aok=[270,0];var IW=[270,40];var Aol=[150,0,170,40];var As1=[205,10,207,30];
var Xh=[0,0,370,40];var As2=[50,0,320,40];var As3=" ";var As4=[135,23];var Aom=[
135,0];var As5=[100,0,370,60];var Ald="Error: Nullpointer Exception";var Ayd="Unknown Date Piecker Unit Index: ";
var Aye="0";var Ayf="Unhandled scan type:";
C.Background={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/DemonstratorBackground.png"
,Format:A._PIXEL_FORMAT_NATIVE,NoOfFrames:1,FrameSize:[1000,740],FrameDelay:0,_this:
null}};C.AM_={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/DemonstratorButtonLeft.png"
,Format:A._PIXEL_FORMAT_NATIVE,NoOfFrames:1,FrameSize:[40,40],FrameDelay:0,_this:
null}};C.AM$={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/DemonstratorButtonLeftPressed.png"
,Format:A._PIXEL_FORMAT_NATIVE,NoOfFrames:1,FrameSize:[40,40],FrameDelay:0,_this:
null}};C.ANa={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/DemonstratorButtonRight.png"
,Format:A._PIXEL_FORMAT_NATIVE,NoOfFrames:1,FrameSize:[40,40],FrameDelay:0,_this:
null}};C.ANb={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/DemonstratorButtonRightPressed.png"
,Format:A._PIXEL_FORMAT_NATIVE,NoOfFrames:1,FrameSize:[40,40],FrameDelay:0,_this:
null}};C.AQe={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/DemonstratorIconDatePicker.png"
,Format:A._PIXEL_FORMAT_NATIVE,NoOfFrames:1,FrameSize:[20,23],FrameDelay:0,_this:
null}};C.Filter={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/DemonstratorFilter.png"
,Format:A._PIXEL_FORMAT_NATIVE,NoOfFrames:1,FrameSize:[15,16],FrameDelay:0,_this:
null}};C.ARZ={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/DemonstratorMenuIcon.png"
,Format:A._PIXEL_FORMAT_NATIVE,NoOfFrames:1,FrameSize:[20,16],FrameDelay:0,_this:
null}};C.Ajt={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/DemonstratorArrowRight.png"
,Format:A._PIXEL_FORMAT_NATIVE,NoOfFrames:1,FrameSize:[17,16],FrameDelay:0,_this:
null}};C.AMQ={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/DemonstratorArrowDown.png"
,Format:A._PIXEL_FORMAT_NATIVE,NoOfFrames:1,FrameSize:[17,16],FrameDelay:0,_this:
null}};C.Asx={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/DemonstratorScanIcon.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:2,FrameSize:[37,37],FrameDelay:0,_this:
null}};C.AVi={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/DemonstratorTemperatureIcon.png"
,Format:A._PIXEL_FORMAT_NATIVE,NoOfFrames:1,FrameSize:[17,37],FrameDelay:0,_this:
null}};C.AVR={Aee:null,AX:null,AR:null,Background:null,H_:null,AD:null,IS:null,Do:
null,Ll:null,A72:null,A8r:0,Bl:function(aSize){A.acn.Menu.Bl.call(this,aSize);this.
IS.H(A.abP(this.IS.M,this.AD.OU));this.IS.H([].concat(this.IS.M.slice(0,3),aSize[
1]));},Ai:function(Ae){var B;A.acn.Menu.Ai.call(this,Ae);var IC=((Ae&0x40)===0x40
);if(IC&&(this.AD.Gt<0))this.AD.GT(0);},N4:function(E){if(this.Ll===E)return;this.
Ll=E;this.AD.N4(E);},BnF:function(E){var B;if(this.A72===E)return;if(!!this.Aee){
this.HP(this.Aee);this.Aee=null;}if(!!E){this.Aee=(C.FE.isPrototypeOf(B=A._NewObject(
E,0))?B:null);this.Aee.A_w([this,this.Akt]);this.Aee.A_x([this,this.Aku]);this.Aee.
BnL(null);this.J(this.Aee,0);this.AD.A_D((B=this.Aee.M)[3]-B[1]);}else this.AD.A_D(
0);this.IS.H(A.abP(this.IS.M,this.AD.OU));A.pe([this,this.Fk],this);this.A72=E;}
,Hm:function(G){var B;var Gg=this.AD.G6;var Aa=(C.Ba.isPrototypeOf(B=this.AD.Cj)?
B:null);if(!Aa)return;Aa.Zs(this.AX);Aa.Ch(Gg);Aa.Zw(this.AR);Aa.H(A.abK(Aa.M,[(
B=this.AD.M)[2]-B[0],this.AD.GO]));},Zs:function(E){var B;if(this.AX===E)return;
if(!!this.AX){A.z9([this,this.Ch],this.AX,0);A.z$([this,this.An9],[B=this.AX,B.Fp
,B.Ft],0);}this.AX=E;if(!!E){A.zV([this,this.Ch],E,0);A.zX([this,this.An9],[E,E.
Fp,E.Ft],0);}A.pe([this,this.Ch],this);A.pe([this,this.An9],this);},Ch:function(
G){if(!!this.AX){this.AD.JA(this.AX.B_());this.AD.AbF(0,this.AD.AY-1);}else this.
AD.JA(0);if(this.A8r!==this.AD.AY){this.AD.ABO(null,null);this.A8r=this.AD.AY;}A.
pe([this,this.Fk],this);},Aku:function(G){var B;this.H(A.abI(this.M,(B=this.AD.AOW(
))[3]-B[1]));},Akt:function(G){this.H(A.abI(this.M,180));},A9N:function(G){var JE=(
A.Core.BK.isPrototypeOf(G)?G:null);var Gg=this.AD.Gt;if(JE.CO===4)Gg=Gg-1;else if(
JE.CO===5)Gg=Gg+1;else if((JE.DQ>=0x30)&&(JE.DQ<=0x39))A._GetAutoObject(A.aco.AgO
).Ez(JE.DQ);else if(JE.CO===45)A._GetAutoObject(A.aco.AgO).Delete();else JE.NM=true;
if((Gg<0)||(Gg>=this.AD.AY))return;this.AD.GT(Gg);this.Bzw(Gg,true);},Bzl:function(
G){var Aa=(C.Ba.isPrototypeOf(G)?G:null);this.AD.GT(Aa.Hs);},Bzw:function(Ha,Ac3
){var B;if((Ha<0)||(Ha>=this.AD.AY))return;var Az=this.AD.AqV(Ha,Ha);var Bd=this.
AD.M;Bd=A.abP(Bd,(B=this.AD.AOW())[3]-B[1]);Bd=A.abI(Bd,(((B=this.AD.M)[3]-B[1])-((
B=this.AD.AOW())[3]-B[1]))-((B=this.AD.BjA())[3]-B[1]));var LP=A.lb(Az,Bd);if((!
Ac3&&!((LP[0]>=LP[2])||(LP[1]>=LP[3])))||(Ac3&&A.aaY(LP,Az)))return;var Bq=0;if(
Az[3]>Bd[3])Bq=Az[3]-Bd[3];if(Bq>(Az[1]-Bd[1]))Bq=(Az[3]-Bd[1])-this.AD.GO;this.
AD.Gb(this.AD.Br-Bq);},An9:function(G){this.AD.GT(-1);},Fk:function(G){var B;this.
IS.MB(this.AD.GO*this.AD.AY);this.IS.MD(((B=this.AD.M)[3]-B[1])-this.AD.OU);this.
IS.MC(-this.AD.Br);},_Init:function(aArg){A.acn.Menu._Init.call(this,aArg);A.acg.
AL._Init.call(this.Background={I:this},0);A.Core.H_._Init.call(this.H_={I:this},
0);A.Core.CM._Init.call(this.AD={I:this},0);A.kR.Ay._Init.call(this.IS={I:this},
0);A.Core.BK._Init.call(this.Do={I:this},0);this.__proto__=C.AVR;this.H(Ce);this.
Background.A0(0x3);this.Background.H(Ce);this.H_.A0(0x3F);this.H_.H(Ce);this.AD.
A0(0x3F);this.AD.H(Ce);this.AD.Ae8(60);this.AD.JA(0);this.AD.N4(this.Ll);this.IS.
A0(0x3A);this.IS.H(BD);this.IS.L(0xFF808080);this.J(this.Background,0);this.J(this.
H_,0);this.J(this.AD,0);this.J(this.IS,0);this.AD.Em=[this,this.Fk];this.AD.Hm=[
this,this.Hm];this.AD.Aw_(this.H_);this.AR=[this,this.Bzl];this.Do.BL=[this,this.
A9N];this.Do.D1=[this,this.A9N];},_Done:function(){this.__proto__=A.acn.Menu;this.
Background._Done();this.H_._Done();this.AD._Done();this.IS._Done();this.Do._Done(
);A.acn.Menu._Done.call(this);},_ReInit:function(){A.acn.Menu._ReInit.call(this);
this.Background._ReInit();this.H_._ReInit();this.AD._ReInit();this.IS._ReInit();
this.Do._ReInit();},_Mark:function(D){var B;A.acn.Menu._Mark.call(this,D);if((B=
this.Aee)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.AX)&&(B._cycle!=D))B._Mark(
B._cycle=D);if((B=this.AR)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.
Background)._cycle!=D)B._Mark(B._cycle=D);if((B=this.H_)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.AD)._cycle!=D)B._Mark(B._cycle=D);if((B=this.IS)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Do)._cycle!=D)B._Mark(B._cycle=D);},_className:"Demonstrator::VerticalMenu"
};C.AUL={GK:null,AL:null,BU:null,Init:function(aArg){var B;A.zX([this,this.GH],[
B=A._GetAutoObject(A.aco.G1),B.A9q,B.A_O],0);A.pe([this,this.GH],this);},Ab3:function(
E){if(this.GK===E)return;if(!!this.GK)this.HP(this.GK);this.GK=E;if(!!this.GK)this.
J(this.GK,0);this.Bb(E);this.AhE(E,this.BU);this.Am();},GH:function(G){var B;if(
!!A._GetAutoObject(A.aco.G1).AsA)this.Ab3((C.AhK.isPrototypeOf(B=A._NewObject(A.
_GetAutoObject(A.aco.G1).AsA,0))?B:null));else this.Ab3(null);},_Init:function(aArg
){A.Core.P._Init.call(this,aArg);A.acg.AL._Init.call(this.AL={I:this},0);A.acg.BU.
_Init.call(this.BU={I:this},0);this.__proto__=C.AUL;this.H(E7);this.AL.A0(0x3F);
this.AL.H(E7);this.BU.H(E7);this.BU.L(0xFF000000);this.J(this.AL,0);this.J(this.
BU,0);this.Init(aArg);},_Done:function(){this.__proto__=A.Core.P;this.AL._Done();
this.BU._Done();A.Core.P._Done.call(this);},_ReInit:function(){A.Core.P._ReInit.
call(this);this.AL._ReInit();this.BU._ReInit();},_Mark:function(D){var B;A.Core.
P._Mark.call(this,D);if((B=this.GK)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.
AL)._cycle!=D)B._Mark(B._cycle=D);if((B=this.BU)._cycle!=D)B._Mark(B._cycle=D);}
,_className:"Demonstrator::SelectionArea"};C.AMz={ABt:0,Jp:0,Background:null,V:null
,Ajo:null,AdX:null,XR:null,AdY:null,Mm:null,Mj:0,LK:false,KJ:false,CP:function(){
this.Am();},Ai:function(Ae){var B;C.Ba.Ai.call(this,Ae);var Hf=((Ae&0x10)===0x10
);var Fw=((Ae&0x20)===0x20);var IC=((Ae&0x40)===0x40);if(!Hf){this.Background.L(
0xFFAAAAAA);this.V.L(0xFF888888);this.Mm.Ar(false);this.Mm.Z(false);}else if(IC){
this.Background.L(A.jb.AV);this.V.L(A.jb.Bm);this.Mm.Ar(true);this.Mm.Z(true);}else
if(Fw){this.Background.L(0xFFE6DED8);this.V.L(0xFF000000);this.Mm.Ar(true);this.
Mm.Z(true);}else{this.Background.L(0xFFFFFFFF);this.V.L(0xFF000000);this.Mm.Ar(false
);this.Mm.Z(false);}if(!this.KJ&&Fw)A._GetAutoObject(A.aco.G1).A_L(this.ABt);this.
Mm.BnH(this.Jp>0);this.Mm.Bn_(this.ABt>0);this.V.R(this.Mj.toFixed());this.LK=Hf;
this.KJ=Fw;},Ch:function(Ad){if(!this.AX){this.XR.Ax(A.aaL(A.ach.Aez));this.AdX.
L(A.jb.Afu);return;}this.Hs=Ad;if(!!this.AX){this.Jp=this.AX.KR(Ad,26);this.ABt=
this.AX.KR(Ad,22);this.Mj=this.AX.CF(Ad,1);var AlQ=this.AX.H3(Ad,11);var AlH=this.
AX.I8(Ad,17);var LT=this.AX.I8(Ad,13);var Ic=this.AX.AmW(Ad,14);var Xs=A._GetAutoObject(
A.Device.Helper).AMo(LT,AlQ,AlH);switch(Ic){case 0:this.XR.Ax(A.aaL(A.ach.Aez));
break;case 1:this.XR.Ax(A.aaL(A.ach.AvL));break;case 2:this.XR.Ax(A.aaL(A.ach.AvO
));break;default:A.ab5("%s%e",Hr,Ic);}this.AdY.Ax(this.XR.Al);this.AdX.L(A._GetAutoObject(
A.acj.Assessment).Qr(Xs));this.Am();}},_Init:function(aArg){C.Ba._Init.call(this
,aArg);A.acg.AL._Init.call(this.Background={I:this},0);A.kR.CG._Init.call(this.V={
I:this},0);A.acg.Ap._Init.call(this.Ajo={I:this},0);A.acg.Ap._Init.call(this.AdX={
I:this},0);A.acg.Ap._Init.call(this.XR={I:this},0);A.acg.Ap._Init.call(this.AdY={
I:this},0);C.Mm._Init.call(this.Mm={I:this},0);this.__proto__=C.AMz;this.Background.
A0(0x3F);this.Background.H(Ce);this.V.A0(0x3F);this.V.H(IV);this.V.R(A.aaR(A.acf.
GN));this.V.A6(0x11);this.V.L(0xFF000000);this.Ajo.H(Is);this.Ajo.L(A.jb.Text);this.
AdX.H(Is);this.AdX.L(A.jb.E1);this.XR.H(Is);this.AdY.H(Is);this.AdY.L(A.jb.Text);
this.AdY.Cv(1);this.Mm.A0(0x3);this.Mm.H(O6);this.J(this.Background,0);this.J(this.
V,0);this.J(this.Ajo,0);this.J(this.AdX,0);this.J(this.XR,0);this.J(this.AdY,0);
this.J(this.Mm,0);this.V.S(A.aaL(A.fl.Af));this.V.AZ(A.aaL(A.fl.Ak));this.V.Cr(A.
aaL(A.fl.Bh));this.Ajo.Ax(A.aaL(C.AHt));this.AdX.Ax(A.aaL(C.AV8));this.XR.Ax(A.aaL(
A.ach.Aez));this.AdY.Ax(A.aaL(A.ach.Aez));},_Done:function(){this.__proto__=C.Ba;
this.Background._Done();this.V._Done();this.Ajo._Done();this.AdX._Done();this.XR.
_Done();this.AdY._Done();this.Mm._Done();C.Ba._Done.call(this);},_ReInit:function(
){C.Ba._ReInit.call(this);this.Background._ReInit();this.V._ReInit();this.Ajo._ReInit(
);this.AdX._ReInit();this.XR._ReInit();this.AdY._ReInit();this.Mm._ReInit();this.
V.R(A.aaR(A.acf.GN));this.V.S(A.aaL(A.fl.Af));this.V.AZ(A.aaL(A.fl.Ak));this.V.Cr(
A.aaL(A.fl.Bh));this.CP();},_Mark:function(D){var B;C.Ba._Mark.call(this,D);if((
B=this.Background)._cycle!=D)B._Mark(B._cycle=D);if((B=this.V)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Ajo)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AdX)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.XR)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
AdY)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Mm)._cycle!=D)B._Mark(B._cycle=D);
},_className:"Demonstrator::AnimalMenuItem"};C.Mm={UC:null,WO:null,Ak0:null,Nr:null
,Oa:null,ZI:null,Acy:null,Av8:false,AxV:false,CP:function(){this.Am();},Ai:function(
Ae){var B;A.Core.P.Ai.call(this,Ae);var IC=((Ae&0x40)===0x40);if(IC){this.Nr.L(A.
jb.Bm);this.Oa.L(A.jb.Bm);}else{this.Nr.L(A.jb.Text);this.Oa.L(A.jb.Text);}if(this.
AxV){this.Nr.R(A.aaR(A.acf.Bo$));if(this.Av8){this.UC.Ax(A.aaL(C.AxW));this.WO.Ax(
A.aaL(C.AxW));}else{this.UC.Ax(A.aaL(C.Asx));this.WO.Ax(A.aaL(C.Asx));}}else if(
this.Av8){this.UC.Ax(A.aaL(C.ACK));this.WO.Ax(A.aaL(C.ACK));this.Nr.R(P_);}var A4p=
this.AxV||this.Av8;this.UC.Z(A4p);this.WO.Z(A4p);this.Nr.Z(A4p);this.ZI.Ar(this.
AxV);},Bn_:function(E){if(this.AxV===E)return;this.AxV=E;this.Am();},BnH:function(
E){if(this.Av8===E)return;this.Av8=E;this.Am();},_Init:function(aArg){A.Core.P._Init.
call(this,aArg);A.acg.Ap._Init.call(this.UC={I:this},0);A.acg.Ap._Init.call(this.
WO={I:this},0);A.acg.Ap._Init.call(this.Ak0={I:this},0);A.kR.CG._Init.call(this.
Nr={I:this},0);A.kR.CG._Init.call(this.Oa={I:this},0);A.Core.Bn._Init.call(this.
ZI={I:this},0);A.Core.Bn._Init.call(this.Acy={I:this},0);this.__proto__=C.Mm;var
B;this.H(P$);this.UC.A0(0x6);this.UC.H(CQ);this.UC.L(A.jb.CT);this.UC.Cv(1);this.
WO.A0(0x6);this.WO.H(CQ);this.WO.L(A.jb.Text);this.Ak0.A0(0xE);this.Ak0.H(Ff);this.
Nr.A0(0x7);this.Nr.H(L5);this.Nr.A6(0x11);this.Nr.L(0xFF000000);this.Oa.A0(0x3);
this.Oa.H(Qa);this.Oa.R(A.aaR(A.acf.Temperature));this.Oa.A6(0x11);this.Oa.L(0xFF000000
);this.ZI.A0(0x3);this.ZI.JY(J6);this.ZI.Ky(Od);this.ZI.DC(Qb);this.ZI.DM(ML);this.
Acy.A0(0x3);this.Acy.JY(S$);this.Acy.Ky(UW);this.Acy.DC(Z5);this.Acy.DM(W8);this.
J(this.UC,0);this.J(this.WO,0);this.J(this.Ak0,0);this.J(this.Nr,0);this.J(this.
Oa,0);this.J(this.ZI,0);this.J(this.Acy,0);this.UC.Ax(A.aaL(C.Asx));this.WO.Ax(A.
aaL(C.Asx));this.Ak0.Ax(A.aaL(C.AVi));this.Nr.S(A.aaL(A.fl.Af));this.Nr.AZ(A.aaL(
A.fl.Ak));this.Nr.Cr(A.aaL(A.fl.Bh));this.Oa.S(A.aaL(A.fl.Af));this.Oa.AZ(A.aaL(
A.fl.Ak));this.Oa.Cr(A.aaL(A.fl.Bh));this.ZI.Lq=[B=A._GetAutoObject(A.aco.G1),B.
Bfw];this.Acy.Lq=[B=A._GetAutoObject(A.aco.G1),B.Bfh];},_Done:function(){this.__proto__=
A.Core.P;this.UC._Done();this.WO._Done();this.Ak0._Done();this.Nr._Done();this.Oa.
_Done();this.ZI._Done();this.Acy._Done();A.Core.P._Done.call(this);},_ReInit:function(
){A.Core.P._ReInit.call(this);this.UC._ReInit();this.WO._ReInit();this.Ak0._ReInit(
);this.Nr._ReInit();this.Oa._ReInit();this.ZI._ReInit();this.Acy._ReInit();this.
Oa.R(A.aaR(A.acf.Temperature));this.Nr.S(A.aaL(A.fl.Af));this.Nr.AZ(A.aaL(A.fl.Ak
));this.Nr.Cr(A.aaL(A.fl.Bh));this.Oa.S(A.aaL(A.fl.Af));this.Oa.AZ(A.aaL(A.fl.Ak
));this.Oa.Cr(A.aaL(A.fl.Bh));this.CP();},_Mark:function(D){var B;A.Core.P._Mark.
call(this,D);if((B=this.UC)._cycle!=D)B._Mark(B._cycle=D);if((B=this.WO)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.Ak0)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Nr
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Oa)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.ZI)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Acy)._cycle!=D)B._Mark(B._cycle=
D);},_className:"Demonstrator::AnimalItemAction"};C.Yr={CP:function(){this.Am();
},Ai:function(Ae){C.Arf.Ai.call(this,Ae);if(!this.Text.String.length)this.Text.R(
A.aaR(A.acf.Filter));},A8y:function(G){var D5=(A.Core.BK.isPrototypeOf(G)?G:null
);if(!!D5)A._GetAutoObject(A.aco.AgO).Ez(D5.DQ);},A8w:function(G){A._GetAutoObject(
A.aco.AgO).Delete();},_Init:function(aArg){C.Arf._Init.call(this,aArg);this.__proto__=
C.Yr;this.Ap.Ax(A.aaL(C.Filter));},_ReInit:function(){C.Arf._ReInit.call(this);this.
CP();},_className:"Demonstrator::FilterView"};C.Abf={Dm:null,Yk:null,Sf:null,Yl:
null,DT:null,YF:null,AmI:null,Av:null,Pd:null,M9:null,Abe:null,FY:0,AvT:0,AGh:false
,Ai:function(Ae){A.Core.P.Ai.call(this,Ae);this.Sf.R(this.Av.Format(It));if(this.
AGh){this.Sf.Z(false);this.YF.Z(false);this.DT.Z(false);this.Yl.Z(false);this.Pd.
Ar(true);this.Pd.Z(true);this.M9.Cv(2);this.M9.ATA(2);this.M9.H(A.abM(this.M9.M,
this.Pd.M[2]));}else{this.Sf.Z(true);this.YF.Z(true);this.DT.Z(true);this.Yl.Z(true
);this.Pd.Ar(false);this.Pd.Z(false);this.M9.Cv(3);this.M9.ATA(3);this.M9.H(A.abM(
this.M9.M,this.Sf.M[2]));}},BBe:function(G){this.BnO(!this.AGh);},AdA:function(G
){var F;if(!!this.Dm)this.Ur((F=this.Dm,F[1].call(F[0])));},Ab7:function(E){if(A.
aaZ(this.Dm,E))return;if(!!this.Dm)A.z$([this,this.AdA],this.Dm,0);this.Dm=E;if(
!!E)A.zX([this,this.AdA],E,0);if(!!E)A.pe([this,this.AdA],this);},Ur:function(E){
if(this.FY===E)return;this.FY=E;this.Av.Initialize(this.FY);this.BCi(this);this.
Am();},AiH:function(G){var B;var F;var BO=this.FY;var Ajb=this.Abe.C7(this.AvT);
this.AJs(Ajb);if(this.Av.Year>2100)this.Av.Initialize2(2100,12,31,0,0,0);this.Ur(((
B=(this.Av.JV()|0))<0)?B+0x100000000:B);if(this.FY!==BO){if(!!this.Dm)(F=this.Dm
,F[2].call(F[0],this.FY));A.abo(this.Dm,0);}},Ait:function(G){var B;var F;var BO=
this.FY;var Ajb=this.Abe.C7(this.AvT);this.ALe(Ajb);if(this.Av.Year<2000)this.Av.
Initialize2(2000,1,1,0,0,0);this.Ur(((B=(this.Av.JV()|0))<0)?B+0x100000000:B);if(
this.FY!==BO){if(!!this.Dm)(F=this.Dm,F[2].call(F[0],this.FY));A.abo(this.Dm,0);
}},Bnk:function(E){if(this.AvT===E)return;this.AvT=E;},BnO:function(E){if(this.AGh===
E)return;this.AGh=E;this.Am();},BBQ:function(G){var B;var F;var BO=this.FY;this.
Av.Ls(this.Pd.AEH());this.Av.Uv(this.Pd.AEM());this.Av.Year=this.Pd.ArE();this.Ur(((
B=(this.Av.JV()|0))<0)?B+0x100000000:B);if(this.FY!==BO){if(!!this.Dm)(F=this.Dm
,F[2].call(F[0],this.FY));A.abo(this.Dm,0);}},BCi:function(G){this.Pd.Ls(this.Av.
GL);this.Pd.Uv(this.Av.Hk);this.Pd.AkH(this.Av.Year);},AJs:function(Ay8){var B;switch(
Ay8){case 0:if(this.Av.GL<this.Av.Zo())this.Av.Ls(this.Av.GL+1);else{this.Av.Ls(
1);this.AJs(2);}break;case 1:if((this.Av.GL+7)<=this.Av.Zo())this.Av.Ls(this.Av.
GL+7);else{this.Av.Ls((7-this.Av.Zo())+this.Av.GL);this.AJs(2);}break;case 2:if(
this.Av.Hk<12)this.Av.Uv(this.Av.Hk+1);else{this.Av.Uv(1);this.AJs(3);}break;case
3:this.Av.Year++;break;default:throw new Error(UX+Ay8.toFixed());}},ALe:function(
Ay8){var B;switch(Ay8){case 0:if(this.Av.GL>1)this.Av.Ls(this.Av.GL-1);else{this.
ALe(2);this.Av.Ls(this.Av.Zo());}break;case 1:if((this.Av.GL-7)>0)this.Av.Ls(this.
Av.GL-7);else{this.ALe(2);this.Av.Ls(this.Av.Zo()-(7-this.Av.GL));}break;case 2:
if(this.Av.Hk>1)this.Av.Uv(this.Av.Hk-1);else{this.Av.Uv(12);this.ALe(3);}break;
case 3:this.Av.Year--;break;default:throw new Error(UX+Ay8.toFixed());}},Blr:function(
){return this.AvT;},_Init:function(aArg){A.Core.P._Init.call(this,aArg);A.acg.Text.
_Init.call(this.Yk={I:this},0);A.acg.Text._Init.call(this.Sf={I:this},0);C.AvJ._Init.
call(this.Yl={I:this},0);A.acq.DT._Init.call(this.DT={I:this},0);C.AvJ._Init.call(
this.YF={I:this},0);A.acg.Ap._Init.call(this.AmI={I:this},0);A.Core.Bs._Init.call(
this.Av={I:this},0);C.ANO._Init.call(this.Pd={I:this},0);C.AvJ._Init.call(this.M9={
I:this},0);C.Abe._Init.call(this.Abe={I:this},0);this.__proto__=C.Abf;this.H(Z6);
this.Yk.H(W9);this.Yk.A6(0x11);this.Yk.R(A.aaR(A.acf.Date));this.Yk.L(0xFF000000
);this.Sf.H(Z7);this.Sf.A6(0x11);this.Sf.R(W_);this.Sf.L(0xFF000000);this.Yl.H(Z8
);this.Yl.A_n(200);this.DT.H(Z9);this.DT.ArY(120);this.DT.GO=30;this.DT.ATc(A.jb.
CT);this.DT.A91(A.jb.CT);this.DT.A95(A.jb.CT);this.DT.ATd(A.jb.Text);this.DT.A96(
A.jb.Text);this.DT.A92(A.jb.AV);this.DT.A97(A.jb.Bm);this.DT.A94(A.jb.AV);this.DT.
A93(A.jb.Text);this.YF.H(UY);this.YF.A_n(200);this.AmI.H(W$);this.Pd.H(O7);this.
M9.H(Z_);this.M9.Cv(3);this.M9.ATA(3);this.M9.L(A.jb.Text);this.J(this.Yk,0);this.
J(this.Sf,0);this.J(this.Yl,0);this.J(this.DT,0);this.J(this.YF,0);this.J(this.AmI
,0);this.J(this.Pd,0);this.J(this.M9,0);this.Yk.S(A.aaL(A.fl.Ak));this.Sf.S(A.aaL(
A.fl.EK));this.Yl.AR=[this,this.Ait];this.Yl.DB(A.aaL(C.AM_));this.Yl.ATB(A.aaL(
C.AM$));this.DT.Au([this,this.Blr,this.Bnk]);this.DT.A_b(this.Abe);this.DT.ArQ(A.
aaL(A.fl.Ak));this.DT.AwO(A.aaL(A.fl.Ak));this.YF.AR=[this,this.AiH];this.YF.DB(
A.aaL(C.ANa));this.YF.ATB(A.aaL(C.ANb));this.AmI.Ax(A.aaL(C.AQe));this.Pd.Dk=[this
,this.BBQ];this.M9.AR=[this,this.BBe];this.M9.DB(A.aaL(A.ach.Aju));this.M9.ATB(A.
aaL(A.ach.Aju));},_Done:function(){this.__proto__=A.Core.P;this.Yk._Done();this.
Sf._Done();this.Yl._Done();this.DT._Done();this.YF._Done();this.AmI._Done();this.
Av._Done();this.Pd._Done();this.M9._Done();this.Abe._Done();A.Core.P._Done.call(
this);},_ReInit:function(){A.Core.P._ReInit.call(this);this.Yk._ReInit();this.Sf.
_ReInit();this.Yl._ReInit();this.DT._ReInit();this.YF._ReInit();this.AmI._ReInit(
);this.Av._ReInit();this.Pd._ReInit();this.M9._ReInit();this.Abe._ReInit();this.
Yk.R(A.aaR(A.acf.Date));this.Yk.S(A.aaL(A.fl.Ak));this.Sf.S(A.aaL(A.fl.EK));this.
DT.ArQ(A.aaL(A.fl.Ak));this.DT.AwO(A.aaL(A.fl.Ak));},_Mark:function(D){var B;A.Core.
P._Mark.call(this,D);if((B=this.Dm)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((
B=this.Yk)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Sf)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Yl)._cycle!=D)B._Mark(B._cycle=D);if((B=this.DT)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.YF)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AmI)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.Av)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Pd
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.M9)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Abe)._cycle!=D)B._Mark(B._cycle=D);},_className:"Demonstrator::DateSelector"
};C.AvJ={C_:null,Axt:null,AN4:null,AR:null,Bo:null,Do:null,CS:null,Hw:null,Yy:null
,APP:0,TX:0,AUf:0,AQ:0xFFFFFFFF,A2B:false,LK:false,KJ:false,Qv:false,Ai:function(
Ae){var B;A.acn.AhA.Ai.call(this,Ae);var Hf=((Ae&0x10)===0x10);var Fw=((Ae&0x20)===
0x20);var GE=this.CS.Down&&this.CS.YI;if(!Hf)this.Hw.Ax(this.AN4);else if(GE){this.
Hw.Ax(this.Axt);this.Hw.Cv(this.AUf);}else{this.Hw.Ax(this.C_);this.Hw.Cv(this.TX
);}this.Hw.L(this.AQ);this.LK=Hf;this.KJ=Fw;this.Qv=GE;},Qu:function(G){this.Am(
);A.pe(this.AR,this);},AiR:function(G){if(this.CS.Down)return;if(this.Do.Aci)return;
this.Am();if(this.Bo.Bw){A.pe(this.AR,this);this.Bo.Ar(false);}this.Bo.Ar(true);
},Bfe:function(G){this.Am();},AAK:function(G){if(!this.CS.YI)return;if(this.CS.NK
)return;if((this.Yy.VH<=0)||(this.CS.Jv<this.Yy.VH)){if(this.CS.Jv>=this.Bo.VH)A.
pe(this.AR,this);else this.Bo.Ar(true);}this.Yy.Ar(false);},AAJ:function(G){this.
Yy.Ar(true);if(this.Bo.Bw){A.pe(this.AR,this);this.Bo.Ar(false);}},DB:function(E
){if(this.C_===E)return;this.C_=E;this.Am();},ATB:function(E){if(this.Axt===E)return;
this.Axt=E;this.Am();},A3B:function(G){if(!this.CS.YI)return;if(this.CS.NK)return;
if((this.APP>=0)&&this.A2B){this.A2B=false;this.Yy.Ar(true);A.pe(this.AR,this);}
},A_n:function(E){if(this.APP===E)return;this.APP=E;this.Yy.WG(E);},BAI:function(
G){this.A2B=true;},Cv:function(E){if(this.TX===E)return;this.TX=E;this.Am();},ATA:
function(E){if(this.AUf===E)return;this.AUf=E;this.Am();},L:function(E){if(this.
AQ===E)return;this.AQ=E;this.Am();},_Init:function(aArg){A.acn.AhA._Init.call(this
,aArg);A.Core.Timer._Init.call(this.Bo={I:this},0);A.Core.BK._Init.call(this.Do={
I:this},0);A.Core.Bn._Init.call(this.CS={I:this},0);A.acg.Ap._Init.call(this.Hw={
I:this},0);A.Core.Timer._Init.call(this.Yy={I:this},0);this.__proto__=C.AvJ;this.
H(Oe);this.Bo.PV(0);this.Bo.WG(50);this.Do.Filter=149;this.CS.A0(0x3F);this.CS.JY(
Rn);this.CS.Ky(Xa);this.CS.DC(Xb);this.CS.DM(J6);this.CS.Afg=0xF;this.CS.AFB(100
);this.Hw.A0(0x3F);this.Hw.H(Oe);this.Hw.A6(0x12);this.Yy.PV(0);this.J(this.CS,0
);this.J(this.Hw,0);this.Bo.ME=[this,this.Qu];this.Do.BL=[this,this.AiR];this.CS.
AES=[this,this.Bfe];this.CS.Awb=[this,this.Bfe];this.CS.D1=[this,this.A3B];this.
CS.Lq=[this,this.AAK];this.CS.BL=[this,this.AAJ];this.Hw.Ax(A.aaL(A.aci.TR));this.
C_=A.aaL(A.aci.TR);this.Axt=A.aaL(A.aci.TR);this.AN4=A.aaL(A.aci.TR);this.Yy.ME=[
this,this.BAI];},_Done:function(){this.__proto__=A.acn.AhA;this.Bo._Done();this.
Do._Done();this.CS._Done();this.Hw._Done();this.Yy._Done();A.acn.AhA._Done.call(
this);},_ReInit:function(){A.acn.AhA._ReInit.call(this);this.Bo._ReInit();this.Do.
_ReInit();this.CS._ReInit();this.Hw._ReInit();this.Yy._ReInit();},_Mark:function(
D){var B;A.acn.AhA._Mark.call(this,D);if((B=this.C_)&&(B._cycle!=D))B._Mark(B._cycle=
D);if((B=this.Axt)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.AN4)&&(B._cycle
!=D))B._Mark(B._cycle=D);if((B=this.AR)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D
);if((B=this.Bo)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Do)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.CS)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Hw)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.Yy)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Demonstrator::IconButton"};C.AMN={PA:null,V:null,Aes:null,_Init:function(aArg){
C.FE._Init.call(this,aArg);A.acg.AL._Init.call(this.PA={I:this},0);A.acg.Text._Init.
call(this.V={I:this},0);C.Aes._Init.call(this.Aes={I:this},0);this.__proto__=C.AMN;
this.H(Ta);this.PA.A0(0x1D);this.PA.H(Ce);this.PA.L(0xFFE6E6E6);this.V.A0(0x1D);
this.V.H(Z$);this.V.A6(0x11);this.V.R(A.aaR(A.acf.A5r));this.V.L(0xFF000000);this.
Aes.H(Aaa);this.J(this.PA,0);this.J(this.V,0);this.J(this.Aes,0);this.V.S(A.aaL(
A.fl.Af));},_Done:function(){this.__proto__=C.FE;this.PA._Done();this.V._Done();
this.Aes._Done();C.FE._Done.call(this);},_ReInit:function(){C.FE._ReInit.call(this
);this.PA._ReInit();this.V._ReInit();this.Aes._ReInit();this.V.R(A.aaR(A.acf.A5r
));this.V.S(A.aaL(A.fl.Af));},_Mark:function(D){var B;C.FE._Mark.call(this,D);if((
B=this.PA)._cycle!=D)B._Mark(B._cycle=D);if((B=this.V)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Aes)._cycle!=D)B._Mark(B._cycle=D);},_className:"Demonstrator::AnimalsHeader"
};C.AuG={PA:null,V:null,AeT:null,AeR:null,Bn:null,DK:Xc,Aho:false,Ai:function(Ae
){C.FE.Ai.call(this,Ae);if(this.Aho){this.AeR.Z(true);this.AeT.Z(false);}else{this.
AeR.Z(false);this.AeT.Z(true);}},BBC:function(G){if(this.Aho)A.pe(this.Akt,this);
else A.pe(this.Aku,this);this.ArZ(!this.Aho);},T:function(E){if(this.DK===E)return;
this.DK=E;this.V.R(E);},ArZ:function(E){if(this.Aho===E)return;this.Aho=E;this.Am(
);},_Init:function(aArg){C.FE._Init.call(this,aArg);A.acg.AL._Init.call(this.PA={
I:this},0);A.acg.Text._Init.call(this.V={I:this},0);A.acg.Ap._Init.call(this.AeT={
I:this},0);A.acg.Ap._Init.call(this.AeR={I:this},0);A.Core.Bn._Init.call(this.Bn={
I:this},0);this.__proto__=C.AuG;this.H(Ce);this.PA.A0(0x1D);this.PA.H(Ce);this.PA.
L(0xFFE6E6E6);this.V.A0(0x1D);this.V.H(Xd);this.V.A6(0x11);this.V.R(Xc);this.V.L(
0xFF000000);this.AeT.H(Tb);this.AeT.Z(false);this.AeR.A0(0x3A);this.AeR.H(Tb);this.
Bn.JY(J6);this.Bn.Ky(Tc);this.Bn.DC(Td);this.Bn.DM(ML);this.J(this.PA,0);this.J(
this.V,0);this.J(this.AeT,0);this.J(this.AeR,0);this.J(this.Bn,0);this.V.S(A.aaL(
A.fl.Af));this.AeT.Ax(A.aaL(C.AMQ));this.AeR.Ax(A.aaL(C.Ajt));this.Bn.Lq=[this,this.
BBC];},_Done:function(){this.__proto__=C.FE;this.PA._Done();this.V._Done();this.
AeT._Done();this.AeR._Done();this.Bn._Done();C.FE._Done.call(this);},_ReInit:function(
){C.FE._ReInit.call(this);this.PA._ReInit();this.V._ReInit();this.AeT._ReInit();
this.AeR._ReInit();this.Bn._ReInit();this.V.S(A.aaL(A.fl.Af));},_Mark:function(D
){var B;C.FE._Mark.call(this,D);if((B=this.PA)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.V)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AeT)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.AeR)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Bn)._cycle!=D)B._Mark(
B._cycle=D);},_className:"Demonstrator::AccordionHeader"};C.Ba={AX:null,AR:null,
CS:null,Hs:-1,Zs:function(E){if(this.AX===E)return;this.AX=E;},Ch:function(Ad){A.
ab5("%s",Aab);},Zw:function(E){if(A.aa0(this.AR,E))return;this.AR=E;},AAK:function(
G){if(!this.CS.YI)return;if(this.CS.NK)return;A.pe(this.AR,this);},_Init:function(
aArg){A.Core.P._Init.call(this,aArg);A.Core.Bn._Init.call(this.CS={I:this},0);this.
__proto__=C.Ba;this.H(Ce);this.CS.A0(0x3F);this.CS.JY(ML);this.CS.Ky(Td);this.CS.
DC(Tc);this.CS.DM(J6);this.CS.Afg=0xF;this.CS.AFB(100);this.J(this.CS,0);this.CS.
Lq=[this,this.AAK];},_Done:function(){this.__proto__=A.Core.P;this.CS._Done();A.
Core.P._Done.call(this);},_ReInit:function(){A.Core.P._ReInit.call(this);this.CS.
_ReInit();},_Mark:function(D){var B;A.Core.P._Mark.call(this,D);if((B=this.AX)&&(
B._cycle!=D))B._Mark(B._cycle=D);if((B=this.AR)&&((B=B[0])._cycle!=D))B._Mark(B.
_cycle=D);if((B=this.CS)._cycle!=D)B._Mark(B._cycle=D);},_className:"Demonstrator::ListItem"
};C.FE={ASu:null,Aku:null,Akt:null,BnL:function(E){if(A.aa0(this.ASu,E))return;this.
ASu=E;},A_x:function(E){if(A.aa0(this.Aku,E))return;this.Aku=E;},A_w:function(E){
if(A.aa0(this.Akt,E))return;this.Akt=E;},_Init:function(aArg){A.Core.P._Init.call(
this,aArg);this.__proto__=C.FE;this.H(Ce);},_Mark:function(D){var B;A.Core.P._Mark.
call(this,D);if((B=this.ASu)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.
Aku)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.Akt)&&((B=B[0])._cycle
!=D))B._Mark(B._cycle=D);},_className:"Demonstrator::ListHeader"};C.ANO={Dk:null
,Aa7:null,W0:null,WZ:null,WY:null,Nh:null,Ng:null,KT:null,LK:false,KJ:false,BCs:
false,Ai:function(Ae){var B;A.acn.Ahy.Ai.call(this,Ae);var Hf=((Ae&0x10)===0x10);
var Fw=((Ae&0x20)===0x20);var Bef=(this.WY.ZN||this.WZ.ZN)||this.W0.ZN;if(Bef)this.
Aa7.L(A.jb.Text);else this.Aa7.L(A.jb.Bc);this.LK=Hf;this.KJ=Fw;this.BCs=Bef;},AAF:
function(G){this.Am();if((!this.WY.ZN&&!this.WZ.ZN)&&!this.W0.ZN){var Vd=this.AKl(
this.AEM(),this.ArE());var Adf=this.AEH();this.KT.JA(Vd);if(Adf>Vd)this.Ls(Vd);A.
pe(this.Dk,this);}},A3W:function(G){this.Am();},Bl_:function(G){var B;var Gg=this.
Nh.G6;var CA=(A.acg.Text.isPrototypeOf(B=this.Nh.Cj)?B:null);if(!CA)return;CA.R(
A.abl(Gg+1900,4,10));CA.S(A.aaL(A.fl.Af));CA.L(A.jb.Text);CA.A6(0x12);CA.H(A.abK(
CA.M,[(B=this.Nh.M)[2]-B[0],this.Nh.GO]));},Bl9:function(G){var B;var Gg=this.Ng.
G6;var CA=(A.acg.Text.isPrototypeOf(B=this.Ng.Cj)?B:null);if(!CA)return;CA.R(A.abl(
Gg+1,2,10)+Te);CA.S(A.aaL(A.fl.Af));CA.L(A.jb.Text);CA.A6(0x12);CA.H(A.abK(CA.M,[(
B=this.Ng.M)[2]-B[0],this.Ng.GO]));},Bl7:function(G){var B;var Gg=this.KT.G6;var
CA=(A.acg.Text.isPrototypeOf(B=this.KT.Cj)?B:null);if(!CA)return;CA.R(A.abl(Gg+1
,2,10)+Te);CA.S(A.aaL(A.fl.Af));CA.L(A.jb.Text);CA.A6(0x12);CA.H(A.abK(CA.M,[(B=
this.KT.M)[2]-B[0],this.KT.GO]));},ArE:function(){return 1900+((((-this.Nh.Br/this.
Nh.GO)|0)+2)%200);},AkH:function(E){if(E<1900)E=1900;if(E>2100)E=2100;this.Nh.Gb(((
E-1900)-2)*-this.Nh.GO);var Vd=this.AKl(this.AEM(),E);this.KT.JA(Vd);if(this.AEH(
)>Vd)this.Ls(Vd);},AEM:function(){return 1+((((-this.Ng.Br/this.Ng.GO)|0)+2)%12);
},Uv:function(E){if(E<1)E=1;if(E>12)E=12;this.Ng.Gb(((E-1)-2)*-this.Ng.GO);var Vd=
this.AKl(E,this.ArE());this.KT.JA(Vd);if(this.AEH()>Vd)this.Ls(Vd);},AEH:function(
){return 1+((((-this.KT.Br/this.KT.GO)|0)+2)%this.KT.AY);},Ls:function(E){var Vd=
this.AKl(this.AEM(),this.ArE());if(E<1)E=1;if(E>Vd)E=Vd;this.KT.Gb(((E-2)-1)*-this.
KT.GO);},AKl:function(AfL,Ac7){if(AfL===2){if(!(Ac7%4)&&(!!(Ac7%100)||!(Ac7%400)
))return 29;else return 28;}else if((((AfL===4)||(AfL===6))||(AfL===9))||(AfL===
11))return 30;else return 31;},_Init:function(aArg){A.acn.Ahy._Init.call(this,aArg
);A.acg.BU._Init.call(this.Aa7={I:this},0);A.Core.H_._Init.call(this.W0={I:this}
,0);A.Core.H_._Init.call(this.WZ={I:this},0);A.Core.H_._Init.call(this.WY={I:this
},0);A.Core.CM._Init.call(this.Nh={I:this},0);A.Core.CM._Init.call(this.Ng={I:this
},0);A.Core.CM._Init.call(this.KT={I:this},0);this.__proto__=C.ANO;this.H(Aac);this.
Aa7.H(AfB);this.Aa7.Nn(3);this.Aa7.L(0xFFE1E1E1);this.Aa7.Z(true);this.W0.H(Aad);
this.W0.ATN(Xe);this.W0.ATj(0.2);this.WZ.H(Aae);this.WZ.ATN(Xe);this.WZ.ATj(0.2);
this.WY.H(Xf);this.WY.ATN(Xe);this.WY.ATj(0.2);this.Nh.H(Aad);this.Nh.ATh(true);
this.Nh.Gb(60);this.Nh.Ae8(30);this.Nh.JA(200);this.Ng.H(Aae);this.Ng.ATh(true);
this.Ng.Gb(60);this.Ng.Ae8(30);this.Ng.JA(12);this.KT.H(Xf);this.KT.ATh(true);this.
KT.Gb(60);this.KT.Ae8(30);this.KT.JA(31);this.J(this.Aa7,0);this.J(this.W0,0);this.
J(this.WZ,0);this.J(this.WY,0);this.J(this.Nh,0);this.J(this.Ng,0);this.J(this.KT
,0);this.W0.Zn=[this,this.AAF];this.W0.SL=[this,this.A3W];this.WZ.Zn=[this,this.
AAF];this.WZ.SL=[this,this.A3W];this.WY.Zn=[this,this.AAF];this.WY.SL=[this,this.
A3W];this.Nh.Hm=[this,this.Bl_];this.Nh.Aw_(this.W0);this.Ng.Hm=[this,this.Bl9];
this.Ng.Aw_(this.WZ);this.KT.Hm=[this,this.Bl7];this.KT.Aw_(this.WY);},_Done:function(
){this.__proto__=A.acn.Ahy;this.Aa7._Done();this.W0._Done();this.WZ._Done();this.
WY._Done();this.Nh._Done();this.Ng._Done();this.KT._Done();A.acn.Ahy._Done.call(
this);},_ReInit:function(){A.acn.Ahy._ReInit.call(this);this.Aa7._ReInit();this.
W0._ReInit();this.WZ._ReInit();this.WY._ReInit();this.Nh._ReInit();this.Ng._ReInit(
);this.KT._ReInit();},_Mark:function(D){var B;A.acn.Ahy._Mark.call(this,D);if((B=
this.Dk)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.Aa7)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.W0)._cycle!=D)B._Mark(B._cycle=D);if((B=this.WZ)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.WY)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Nh
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ng)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.KT)._cycle!=D)B._Mark(B._cycle=D);},_className:"Demonstrator::DatePicker"
};C.AHt={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/DemonstratorWhiteTile.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[40,40],FrameDelay:0,_this:
null}};C.AV8={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/DemonstratorWhiteTileSmall.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[40,40],FrameDelay:0,_this:
null}};C.AhK={_Init:function(aArg){A.Core.P._Init.call(this,aArg);this.__proto__=
C.AhK;this.H(E7);},_className:"Demonstrator::SelectionAreaContent"};C.AMG={Y:null
,Vx:null,TG:null,BB4:function(G){var B;this.TG.H(A.abI(this.TG.M,((B=this.M)[3]-
B[1])-((B=this.Vx.M)[3]-B[1])));},_Init:function(aArg){C.AhK._Init.call(this,aArg
);A.Core.Y._Init.call(this.Y={I:this},0);C.AL$._Init.call(this.Vx={I:this},0);C.
AVR._Init.call(this.TG={I:this},0);this.__proto__=C.AMG;this.Y.A0(0x3F);this.Y.H(
E7);this.Y.JW(1);this.Vx.H(AhX);this.Vx.Aj(true);this.Vx.ArZ(false);this.TG.A0(0x3
);this.TG.H(K1);this.TG.Aj(true);this.TG.N4(C.AMz);this.TG.BnF(C.AMN);this.J(this.
Y,0);this.J(this.Vx,0);this.J(this.TG,0);this.Bb(this.TG);this.Y.Em=[this,this.BB4
];this.TG.Zs(A._GetAutoObject(A.aco.Aqj));},_Done:function(){this.__proto__=C.AhK;
this.Y._Done();this.Vx._Done();this.TG._Done();C.AhK._Done.call(this);},_ReInit:
function(){C.AhK._ReInit.call(this);this.Y._ReInit();this.Vx._ReInit();this.TG._ReInit(
);},_Mark:function(D){var B;C.AhK._Mark.call(this,D);if((B=this.Y)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Vx)._cycle!=D)B._Mark(B._cycle=D);if((B=this.TG)._cycle!=
D)B._Mark(B._cycle=D);},_className:"Demonstrator::AnimalSelectionActions"};C.Vx={
_Init:function(aArg){C.AuG._Init.call(this,aArg);this.__proto__=C.Vx;this.T(A.aaR(
A.acf.A6j));},_ReInit:function(){C.AuG._ReInit.call(this);this.T(A.aaR(A.acf.A6j
));},_className:"Demonstrator::ActionsHeader"};C.AL$={Background:null,XQ:null,Y:
null,Acx:null,Acm:null,ZH:null,Acw:null,Akc:null,Akd:null,Ake:null,Akf:null,Akg:
null,Aho:false,Init:function(aArg){var B;A.zX([this,this.Bfx],[B=A._GetAutoObject(
A.aco.G1),B.AEO,B.Ar7],0);A.pe([this,this.Bfx],this);},Aku:function(G){this.ArZ(
true);},Akt:function(G){this.ArZ(false);},ArZ:function(E){if(this.Aho===E)return;
this.Aho=E;this.XQ.ArZ(E);A.pe([this,this.BfI],this);},Bfx:function(G){var BCa=A.
_GetAutoObject(A.aco.G1).AhF===2;A._GetAutoObject(A.Device.Helper).J3(this.ZH,BCa
);},BfI:function(G){var B;if(this.Aho)this.H(A.abI(this.M,(B=this.XQ.M)[3]-B[1])
);else this.H(A.abI(this.M,((B=this.XQ.M)[3]-B[1])+((B=this.Y.Dd(0x401))[3]-B[1]
)));},_Init:function(aArg){A.Core.P._Init.call(this,aArg);A.acg.AL._Init.call(this.
Background={I:this},0);C.Vx._Init.call(this.XQ={I:this},0);A.Core.Y._Init.call(this.
Y={I:this},0);C.Acx._Init.call(this.Acx={I:this},0);C.Acm._Init.call(this.Acm={I:
this},0);C.ZH._Init.call(this.ZH={I:this},0);C.Acw._Init.call(this.Acw={I:this},
0);A.acg.C8._Init.call(this.Akc={I:this},0);A.acg.C8._Init.call(this.Akd={I:this
},0);A.acg.C8._Init.call(this.Ake={I:this},0);A.acg.C8._Init.call(this.Akf={I:this
},0);A.acg.C8._Init.call(this.Akg={I:this},0);this.__proto__=C.AL$;this.H(AcN);this.
Background.A0(0x3F);this.Background.H(AcN);this.XQ.A0(0x1D);this.XQ.H(Ce);this.Y.
H(Ly);this.Y.JW(1);this.Acx.H(AhY);this.Acx.Aj(true);this.Acm.H(Aoe);this.Acm.Aj(
true);this.ZH.H(Of);this.ZH.Aj(true);this.Acw.H(Xg);this.Acw.Aj(true);this.Akc.DC(
Td);this.Akc.DM(ML);this.Akc.L(A.jb.Bc);this.Akd.DC(Aaf);this.Akd.DM(AfC);this.Akd.
L(A.jb.Bc);this.Ake.DC(AhZ);this.Ake.DM(AcO);this.Ake.L(A.jb.Bc);this.Akf.DC(UZ);
this.Akf.DM(Aof);this.Akf.L(A.jb.Bc);this.Akg.DC(Aog);this.Akg.DM(Aoh);this.Akg.
L(A.jb.Bc);this.J(this.Background,0);this.J(this.XQ,0);this.J(this.Y,0);this.J(this.
Acx,0);this.J(this.Acm,0);this.J(this.ZH,0);this.J(this.Acw,0);this.J(this.Akc,0
);this.J(this.Akd,0);this.J(this.Ake,0);this.J(this.Akf,0);this.J(this.Akg,0);this.
XQ.A_x([this,this.Aku]);this.XQ.A_w([this,this.Akt]);this.Y.Em=[this,this.BfI];this.
Init(aArg);},_Done:function(){this.__proto__=A.Core.P;this.Background._Done();this.
XQ._Done();this.Y._Done();this.Acx._Done();this.Acm._Done();this.ZH._Done();this.
Acw._Done();this.Akc._Done();this.Akd._Done();this.Ake._Done();this.Akf._Done();
this.Akg._Done();A.Core.P._Done.call(this);},_ReInit:function(){A.Core.P._ReInit.
call(this);this.Background._ReInit();this.XQ._ReInit();this.Y._ReInit();this.Acx.
_ReInit();this.Acm._ReInit();this.ZH._ReInit();this.Acw._ReInit();this.Akc._ReInit(
);this.Akd._ReInit();this.Ake._ReInit();this.Akf._ReInit();this.Akg._ReInit();},
_Mark:function(D){var B;A.Core.P._Mark.call(this,D);if((B=this.Background)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.XQ)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
Y)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Acx)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Acm)._cycle!=D)B._Mark(B._cycle=D);if((B=this.ZH)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Acw)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Akc)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Akd)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ake)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.Akf)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
Akg)._cycle!=D)B._Mark(B._cycle=D);},_className:"Demonstrator::ActionsMenu"};C.Js={
YC:null,Aha:null,Bn:null,C8:null,Af$:function(G){},A0S:function(s){this.Af$(s);}
,_Init:function(aArg){A.Core.P._Init.call(this,aArg);A.acg.Ap._Init.call(this.YC={
I:this},0);A.acg.Ap._Init.call(this.Aha={I:this},0);A.Core.Bn._Init.call(this.Bn={
I:this},0);A.acg.C8._Init.call(this.C8={I:this},0);this.__proto__=C.Js;this.H(Ce
);this.YC.H(Aoi);this.YC.L(A.jb.Text);this.Aha.H(Alc);this.Aha.L(A.jb.Text);this.
Aha.Cv(0);this.Bn.JY(J6);this.Bn.Ky(Od);this.Bn.DC(Qb);this.Bn.DM(ML);this.C8.DC(
Qb);this.C8.DM(Od);this.C8.L(A.jb.Bc);this.J(this.YC,0);this.J(this.Aha,0);this.
J(this.Bn,0);this.J(this.C8,0);this.YC.Ax(A.aaL(A.aci.TR));this.Aha.Ax(A.aaL(A.aci.
AT7));this.Bn.BL=[this,this.A0S];},_Done:function(){this.__proto__=A.Core.P;this.
YC._Done();this.Aha._Done();this.Bn._Done();this.C8._Done();A.Core.P._Done.call(
this);},_ReInit:function(){A.Core.P._ReInit.call(this);this.YC._ReInit();this.Aha.
_ReInit();this.Bn._ReInit();this.C8._ReInit();},_Mark:function(D){var B;A.Core.P.
_Mark.call(this,D);if((B=this.YC)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Aha).
_cycle!=D)B._Mark(B._cycle=D);if((B=this.Bn)._cycle!=D)B._Mark(B._cycle=D);if((B=
this.C8)._cycle!=D)B._Mark(B._cycle=D);},_className:"Demonstrator::ActionsItem"};
C.Acm={AGE:null,DT:null,YB:null,BU:null,Nc:null,AhG:null,ANI:0,Init:function(aArg
){var B;A.zX([this,this.BfH],[B=A._GetAutoObject(A.aco.G1),B.AEO,B.Ar7],0);A.pe([
this,this.BfH],this);},Af$:function(G){var IA=A.ab0(this.YB.String,0,10);var Ii=
false;switch(A._GetAutoObject(A.aco.G1).AhF){case 2:Ii=A._GetAutoObject(A.aco.G1
).BCp(IA);break;case 0:case 1:Ii=A._GetAutoObject(A.aco.G1).BgG(IA);break;default:
A.ab5("%s%e",AsZ,A._GetAutoObject(A.aco.G1).AhF);}if(Ii){IA=IA+1;this.YB.R(IA.toFixed(
));}},BfH:function(G){var AJp=null;var AKB=0;switch(A._GetAutoObject(A.aco.G1).AhF
){case 2:{AJp=A.aaL(A.ach.AvG);AKB=276;}break;case 0:{AJp=A.aaL(A.ach.AjY);AKB=900;
}break;case 1:{AJp=A.aaL(C.AxW);AKB=276;}break;default:A.ab5("%s%e",AsZ,A._GetAutoObject(
A.aco.G1).AhF);}this.YB.R(((AKB*1000000000000)+(A.abY(this.YB.String,0,10)%1000000000000
)).toFixed());this.YC.Ax(AJp);},Bmx:function(E){var F;if(this.ANI===E)return;this.
ANI=E;if(!!this.AGE)(F=this.AGE,F[2].call(F[0],E));},Bld:function(){return this.
ANI;},_Init:function(aArg){C.Js._Init.call(this,aArg);A.acq.DT._Init.call(this.DT={
I:this},0);C.Akp._Init.call(this.YB={I:this},0);A.acg.BU._Init.call(this.BU={I:this
},0);A.acg.Ap._Init.call(this.Nc={I:this},0);C.AhG._Init.call(this.AhG={I:this},
0);this.__proto__=C.Acm;var B;this.DT.H(Ax9);this.DT.ArY(120);this.DT.GO=30;this.
DT.ATc(A.jb.Ri);this.DT.A91(A.jb.CT);this.DT.A95(A.jb.CT);this.DT.ATd(A.jb.Ri);this.
DT.A96(A.jb.Text);this.DT.A92(A.jb.AV);this.DT.A97(A.jb.Bm);this.DT.A94(A.jb.AV);
this.DT.A93(A.jb.Ri);this.Bn.JY(Ax_);this.Bn.DM(O8);this.YB.H(Ro);this.YB.R(Ax$);
this.YB.L(A.jb.Text);this.BU.H(U0);this.BU.Nn(2);this.BU.L(A.jb.Text);this.Nc.H(
As0);this.Nc.L(A.jb.Text);this.Nc.A6(0xC);this.Nc.Cv(3);this.J(this.DT,-2);this.
J(this.YB,-1);this.J(this.BU,0);this.J(this.Nc,0);this.DT.Au([this,this.Bld,this.
Bmx]);this.DT.A_b(this.AhG);this.DT.ArQ(A.aaL(A.fl.Bh));this.DT.AwO(A.aaL(A.fl.Bh
));this.Nc.Ax(A.aaL(A.ach.Aju));this.AGE=[B=A._GetAutoObject(A.aco.G1),B.AEO,B.Ar7
];this.Init(aArg);},_Done:function(){this.__proto__=C.Js;this.DT._Done();this.YB.
_Done();this.BU._Done();this.Nc._Done();this.AhG._Done();C.Js._Done.call(this);}
,_ReInit:function(){C.Js._ReInit.call(this);this.DT._ReInit();this.YB._ReInit();
this.BU._ReInit();this.Nc._ReInit();this.AhG._ReInit();this.DT.ArQ(A.aaL(A.fl.Bh
));this.DT.AwO(A.aaL(A.fl.Bh));},_Mark:function(D){var B;C.Js._Mark.call(this,D);
if((B=this.AGE)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.DT)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.YB)._cycle!=D)B._Mark(B._cycle=D);if((B=this.BU
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Nc)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.AhG)._cycle!=D)B._Mark(B._cycle=D);},_className:"Demonstrator::ScanIdAction"
};C.Acx={UN:null,OX:null,A4J:0,Init:function(aArg){var B;A.zX([this,this.BBk],[B=
A._GetAutoObject(A.aco.G1),B.ASU,B.ATG],0);A.zX([this,this.AAN],[B=A._GetAutoObject(
A.Device.Device),B.ArB,B.Atq],0);A.pe([this,this.AAN],this);},Ai:function(Ae){C.
Js.Ai.call(this,Ae);this.OX.Z(!A._GetAutoObject(A.aco.G1).Axu);},Af$:function(G){
var B;A._GetAutoObject(A.aco.G1).Bfh(this);},AAN:function(G){if(A._GetAutoObject(
A.Device.Device).TemperatureUnit!==this.A4J){switch(A._GetAutoObject(A.Device.Device
).TemperatureUnit){case 0:this.OX.R(A.abk(A._GetAutoObject(A.aco.G1).WW/100,0,1)
);break;case 1:{var Auv=A._GetAutoObject(A.Device.Converter).AVm(A._GetAutoObject(
A.aco.G1).WW/100,0,A._GetAutoObject(A.Device.Device).TemperatureUnit);this.OX.R(
A.abk(Auv,0,1));}break;default:A.ab5("%s%e",Aya,A._GetAutoObject(A.Device.Device
).TemperatureUnit);}this.A4J=A._GetAutoObject(A.Device.Device).TemperatureUnit;}
},BA5:function(G){var B;var Agr=A.abX(this.OX.String,0);Agr=A._GetAutoObject(A.Device.
Converter).AVm(Agr,A._GetAutoObject(A.Device.Device).TemperatureUnit,0);Agr*=100;
A._GetAutoObject(A.aco.G1).AFV(Math.round(Agr)|0);},BBk:function(G){this.Am();},
_Init:function(aArg){C.Js._Init.call(this,aArg);A.acr.UN._Init.call(this.UN={I:this
},0);C.OX._Init.call(this.OX={I:this},0);this.__proto__=C.Acx;var B;this.UN.H(Ayb
);this.UN.A_r(A.aaR(A.acf.A5y));this.OX.H(Ayc);this.OX.R(Aoj);this.OX.L(A.jb.Text
);this.OX.Bmy(true);this.A4J=A._GetAutoObject(A.Device.Device).TemperatureUnit;this.
J(this.UN,0);this.J(this.OX,0);this.YC.Ax(A.aaL(A.ach.Ag7));this.UN.Au([B=A._GetAutoObject(
A.aco.G1),B.ASU,B.ATG]);this.UN.OnSetAppearance(A._GetAutoObject(A.acx.Au2));this.
OX.Dk=[this,this.BA5];this.Init(aArg);},_Done:function(){this.__proto__=C.Js;this.
UN._Done();this.OX._Done();C.Js._Done.call(this);},_ReInit:function(){C.Js._ReInit.
call(this);this.UN._ReInit();this.OX._ReInit();this.UN.A_r(A.aaR(A.acf.A5y));},_Mark:
function(D){var B;C.Js._Mark.call(this,D);if((B=this.UN)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.OX)._cycle!=D)B._Mark(B._cycle=D);},_className:"Demonstrator::TemperatureAction"
};C.Arf={Q:null,BU:null,Bn:null,AgL:null,Am9:null,Am8:null,Ark:null,Text:null,Hp:
null,Ap:null,CY:null,Arj:null,Arl:null,Apj:false,Bl:function(aSize){this.Hp.H(A.
abK(this.Hp.M,aSize));this.BU.AxB(1);this.BU.Jw(0,40);this.BU.Fl(0,aSize[0]-20,20
,12.5,12.5,-90,90,10);this.BU.Fl(0,20,20,12.5,12.5,90,270,10);this.BU.VP(0);},Ai:
function(Ae){var B;var F;A.Core.P.Ai.call(this,Ae);var IC=((Ae&0x40)===0x40);if(
IC){if(!!this.Q)this.Text.R((F=this.Q,F[1].call(F[0])));this.AgL.Ar(true);this.Ap.
Z(false);}else{if(!!this.Q)this.Text.R((F=this.Q,F[1].call(F[0])));this.AgL.Ar(false
);this.CY.Z(false);this.Ap.Z(true);}this.Apj=IC;},Af$:function(G){var B;if(!((this.
U&0x80)===0x80))this.Im().AM0(this);},A8y:function(G){},Bbe:function(s){this.A8y(
s);},BkE:function(G){var B;var F;if(!this.Q||!(F=this.Q,F[1].call(F[0])).length)
this.CY.H(A.abM(this.CY.M,A.aaI(this.Text.M)[0]));else{this.CY.H(A.abM(this.CY.M
,this.Text.AOX(0)[2]+2));this.CY.H(A.abO(this.CY.M,this.Text.AOX(0)[1]));this.CY.
H(A.abI(this.CY.M,(B=this.Text.AOX(0))[3]-B[1]));}this.Ap.H(A.abM(this.Ap.M,this.
Text.M[0]-((B=this.Ap.M)[2]-B[0])));},A8w:function(G){},Bbd:function(s){this.A8w(
s);},Au:function(E){if(A.aaZ(this.Q,E))return;if(!!this.Q)A.z$([this,this.ID],this.
Q,0);this.Q=E;if(!!E)A.zX([this,this.ID],E,0);if(!!E)A.pe([this,this.ID],this);}
,ID:function(G){this.Am();},Bma:function(G){var B;if(((this.U&0x80)===0x80))this.
Im().ACN(this);},Bfp:function(G){},_Init:function(aArg){A.Core.P._Init.call(this
,aArg);A.Graphics.Hz._Init.call(this.BU={I:this},0);A.Core.Bn._Init.call(this.Bn={
I:this},0);A.acl.TM._Init.call(this.AgL={I:this},0);A.Core.BK._Init.call(this.Am9={
I:this},0);A.Core.BK._Init.call(this.Am8={I:this},0);A.Core.BK._Init.call(this.Ark={
I:this},0);A.acg.Text._Init.call(this.Text={I:this},0);A.acg.Hp._Init.call(this.
Hp={I:this},0);A.acg.Ap._Init.call(this.Ap={I:this},0);A.acg.AL._Init.call(this.
CY={I:this},0);A.Core.BK._Init.call(this.Arj={I:this},0);A.Core.BK._Init.call(this.
Arl={I:this},0);this.__proto__=C.Arf;var B;this.H(AfD);this.Bn.A0(0x3F);this.Bn.
JY(J6);this.Bn.Ky(Aok);this.Bn.DC(IW);this.Bn.DM(Rn);this.AgL.Fr(530);this.AgL.Ut(
530);this.Am9.Filter=143;this.Am8.Filter=45;this.Ark.Filter=1;this.Text.A0(0x3F);
this.Text.H(AfD);this.Text.Jb(true);this.Text.A6(0x12);this.Text.L(0xFFB3B3B3);this.
Hp.H(AfD);this.Hp.L(0xFFB3B3B3);this.Hp.Nn(1);this.Ap.H(Aol);this.CY.H(As1);this.
CY.L(0xFFB3B3B3);this.CY.Z(false);this.Arj.Filter=138;this.Arl.Filter=137;this.J(
this.Bn,0);this.J(this.Text,0);this.J(this.Hp,0);this.J(this.Ap,0);this.J(this.CY
,0);this.Bn.Lq=[this,this.Af$];this.AgL.Q=[B=this.CY,B.Fq,B.Z];this.Am9.BL=[this
,this.Bbe];this.Am9.D1=[this,this.Bbe];this.Am8.BL=[this,this.Bbd];this.Am8.D1=[
this,this.Bbd];this.Ark.BL=[this,this.Bma];this.Text.Q7([this,this.BkE]);this.Text.
S(A.aaL(A.fl.Ak));this.Hp.Zx(this.BU);this.Ap.Ax(null);this.Arj.BL=[this,this.Bfp
];this.Arl.BL=[this,this.Bfp];},_Done:function(){this.__proto__=A.Core.P;this.BU.
_Done();this.Bn._Done();this.AgL._Done();this.Am9._Done();this.Am8._Done();this.
Ark._Done();this.Text._Done();this.Hp._Done();this.Ap._Done();this.CY._Done();this.
Arj._Done();this.Arl._Done();A.Core.P._Done.call(this);},_ReInit:function(){A.Core.
P._ReInit.call(this);this.BU._ReInit();this.Bn._ReInit();this.AgL._ReInit();this.
Am9._ReInit();this.Am8._ReInit();this.Ark._ReInit();this.Text._ReInit();this.Hp.
_ReInit();this.Ap._ReInit();this.CY._ReInit();this.Arj._ReInit();this.Arl._ReInit(
);this.Text.S(A.aaL(A.fl.Ak));},_Mark:function(D){var B;A.Core.P._Mark.call(this
,D);if((B=this.Q)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.BU)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.Bn)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
AgL)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Am9)._cycle!=D)B._Mark(B._cycle=D);
if((B=this.Am8)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ark)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Text)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Hp)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.Ap)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
CY)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Arj)._cycle!=D)B._Mark(B._cycle=D);
if((B=this.Arl)._cycle!=D)B._Mark(B._cycle=D);},_className:"Demonstrator::InputView"
};C.Aes={Background:null,Yr:null,_Init:function(aArg){A.Core.P._Init.call(this,aArg
);A.acg.AL._Init.call(this.Background={I:this},0);C.Yr._Init.call(this.Yr={I:this
},0);this.__proto__=C.Aes;var B;this.H(Xh);this.Background.H(Xh);this.Yr.A0(0x1D
);this.Yr.H(As2);this.J(this.Background,0);this.J(this.Yr,0);this.Yr.Au([B=A._GetAutoObject(
A.aco.AgO),B.A9n,B.AFQ]);},_Done:function(){this.__proto__=A.Core.P;this.Background.
_Done();this.Yr._Done();A.Core.P._Done.call(this);},_ReInit:function(){A.Core.P.
_ReInit.call(this);this.Background._ReInit();this.Yr._ReInit();},_Mark:function(
D){var B;A.Core.P._Mark.call(this,D);if((B=this.Background)._cycle!=D)B._Mark(B.
_cycle=D);if((B=this.Yr)._cycle!=D)B._Mark(B._cycle=D);},_className:"Demonstrator::FilterRow"
};C.OX={Init:function(aArg){var B;A.zX([this,this.AAN],[B=A._GetAutoObject(A.Device.
Device),B.ArB,B.Atq],0);A.pe([this,this.AAN],this);},Ai:function(Ae){var B;C.Akp.
Ai.call(this,Ae);var IC=((this.U&0x40)===0x40);if(!IC&&(this.String.length>0))this.
Text.R(((this.String+As3)+A._GetAutoObject(A.acj.Temperature).AlM())+String.fromCharCode(
0x0A));else this.Text.R(this.String+String.fromCharCode(0x0A));if(this.D6>this.String.
length)this.D6=this.String.length;},AAN:function(G){this.Am();},_Init:function(aArg
){C.Akp._Init.call(this,aArg);this.__proto__=C.OX;this.Init(aArg);},_className:"Demonstrator::TemperatureInputView"
};C.Akp={B7:null,Dk:null,IY:null,Cq:null,AmF:null,Sh:null,KP:null,Bn:null,Text:null
,CY:null,Aqz:null,Ash:null,BU:null,Hp:null,Arx:null,Aq4:null,AqM:null,String:A.jV
,D6:0,AQ:0xFFB3B3B3,Av3:15,ANQ:false,LC:false,Bl:function(aSize){this.Hp.H(A.abK(
this.Hp.M,aSize));this.BU.AxB(1);this.BU.Jw(0,40);this.BU.Fl(0,aSize[0]-20,20,12.5
,12.5,-90,90,10);this.BU.Fl(0,20,20,12.5,12.5,90,270,10);this.BU.VP(0);},Ai:function(
Ae){var B;A.acn.Jf.Ai.call(this,Ae);if(((Ae&0x40)===0x40))this.IY.Ar(true);else{
this.IY.Ar(false);this.CY.Z(false);}},A4T:function(G){var B;var Bd=this.Text.M;var
NA=0;var NB=0;if(this.CY.Et[0]<Bd[0])NA=Bd[0]-this.CY.Et[0];if(this.CY.Et[0]>Bd[
2])NA=Bd[2]-this.CY.Et[0];if(this.CY.Et[1]<Bd[1])NB=Bd[1]-this.CY.Et[1];if(this.
CY.ED[1]>Bd[3])NB=Bd[3]-this.CY.ED[1];if(!!NA||!!NB)this.Text.Gb(A.abf(this.Text.
Br,[NA,NB]));NA=this.Text.Br[0];NB=this.Text.Br[1];var C6=[(B=this.Text.Dd())[2]-
B[0],B[3]-B[1]];if(C6[0]<=((B=this.Text.M)[2]-B[0]))NA=0;if(C6[1]<=((B=this.Text.
M)[3]-B[1]))NB=0;this.Text.Gb([NA,NB]);},Amn:function(G){if(!this.B7)return;var A4j=
this.Text.AG0(this.D6);var pos=this.Text.Afh(A4j);this.CY.DM(A.abe(pos,[0,this.B7.
Ascent]));this.CY.DC(A.abf(pos,[0,this.B7.Descent]));if(this.IY.Bw){this.IY.Ar(false
);this.IY.Ar(true);}if(this.LC){A.pe([this,this.A4T],this);this.LC=false;}},AAJ:
function(G){if(!this.A7g(0x80))this.Im().AM0(this);var EH=this.Text.AT$(this.Bn.
H1);var Vi=this.Text.AnS(EH);if(Vi!==this.D6){this.D6=Vi;A.pe([this,this.Amn],this
);this.LC=true;}},AAD:function(G){if(!this.B7)return;var EH=this.Text.AG0(this.D6
);if(this.Cq.CO===6){EH=[EH[0]-1,EH[1]];if(this.Text.AnS(EH)===this.D6){EH=[EH[0
],EH[1]-1];EH=[this.Text.ADa(EH[1]).length,EH[1]];}}if(this.Cq.CO===7){EH=[EH[0]+
1,EH[1]];if(this.Text.AnS(EH)===this.D6){EH=[EH[0],EH[1]+1];EH=[0,EH[1]];}}var Vi=
this.Text.AnS(EH);if(Vi!==this.D6){this.D6=Vi;A.pe([this,this.Amn],this);this.LC=
true;}},Be_:function(G){if(!this.D6)return;this.R(A.ab1(this.String,this.D6-1,1)
);this.D6=this.D6-1;this.LC=true;A.pe(this.Dk,this);},AAE:function(G){if(this.D6>=
this.String.length)return;this.R(A.ab1(this.String,this.D6,1));this.LC=true;A.pe(
this.Dk,this);},Bfd:function(G){if(this.String.length>=this.Av3)return;var Bzn=this.
KP.DQ;var Aut=String.fromCharCode(Bzn);this.R(A.abU(this.String,Aut,this.D6));this.
D6=this.D6+Aut.length;this.LC=true;A.pe(this.Dk,this);},R:function(E){if(this.String===
E)return;this.String=E;if(this.D6>(E.length+1))this.D6=E.length;this.Text.R(E+String.
fromCharCode(0x0A));this.LC=true;this.Text.Gb(J6);},L:function(E){if(this.AQ===E
)return;this.AQ=E;this.Text.L(E);this.CY.L(E);this.Hp.L(E);},S:function(E){if(this.
B7===E)return;this.B7=E;this.Text.S(E);this.LC=true;this.Text.Gb(J6);},Bfq:function(
G){if(this.ANQ===false)return;if(this.String.indexOf(String.fromCharCode(0x2E),0
)>=0)return;if(this.String.length>=this.Av3)return;this.R(A.abU(this.String,Te,this.
D6));this.D6=this.D6+1;this.LC=true;A.pe(this.Dk,this);},Bb1:function(s){this.Bfq(
s);},Bmy:function(E){if(this.ANQ===E)return;this.ANQ=E;if(E===false){var Bf9=this.
String.indexOf(String.fromCharCode(0x2E),0);if(Bf9>=0)this.R(A.abV(this.String,Bf9
));}this.LC=true;this.Text.Gb(J6);},BnE:function(E){if(this.Av3===E)return;this.
Av3=E;this.R(A.abV(this.String,E));this.LC=true;this.Text.Gb(J6);},BBb:function(
G){if(this.A7g(0x80)){this.Im().ACN(this);this.Cs(0x10,0x0);}this.Am();},BA1:function(
G){var Vi=this.String.length;if(Vi!==this.D6){this.D6=Vi;A.pe([this,this.Amn],this
);this.LC=true;}},BA4:function(G){if(!!this.D6){this.D6=0;A.pe([this,this.Amn],this
);this.LC=true;}},_Init:function(aArg){A.acn.Jf._Init.call(this,aArg);A.acl.TM._Init.
call(this.IY={I:this},0);A.Core.BK._Init.call(this.Cq={I:this},0);A.Core.BK._Init.
call(this.AmF={I:this},0);A.Core.BK._Init.call(this.Sh={I:this},0);A.Core.BK._Init.
call(this.KP={I:this},0);A.Core.Bn._Init.call(this.Bn={I:this},0);A.acg.Text._Init.
call(this.Text={I:this},0);A.acg.C8._Init.call(this.CY={I:this},0);A.Core.BK._Init.
call(this.Aqz={I:this},0);A.Core.BK._Init.call(this.Ash={I:this},0);A.Graphics.Hz.
_Init.call(this.BU={I:this},0);A.acg.Hp._Init.call(this.Hp={I:this},0);A.Core.BK.
_Init.call(this.Arx={I:this},0);A.Core.BK._Init.call(this.Aq4={I:this},0);A.Core.
BK._Init.call(this.AqM={I:this},0);this.__proto__=C.Akp;var B;this.H(AfD);this.IY.
B3=false;this.IY.Cx=true;this.IY.Fr(500);this.IY.Ut(500);this.Cq.Filter=147;this.
AmF.Filter=45;this.Sh.Filter=44;this.KP.Filter=143;this.Bn.A0(0x3F);this.Bn.JY(Rn
);this.Bn.Ky(IW);this.Bn.DC(Aok);this.Bn.DM(J6);this.Bn.AFB(3);this.Text.A0(0x3F
);this.Text.H(AfD);this.Text.KU(false);this.Text.A6(0x12);this.Text.R(A.jV);this.
Text.L(0xFFB3B3B3);this.CY.DC(As4);this.CY.DM(Aom);this.CY.A_6(2);this.CY.A_5(2);
this.CY.L(0xFFB3B3B3);this.CY.Z(false);this.Aqz.Filter=138;this.Ash.Filter=137;this.
Hp.H(AfD);this.Hp.L(0xFFB3B3B3);this.Hp.Nn(1);this.Arx.Filter=1;this.Aq4.Filter=
41;this.AqM.Filter=42;this.J(this.Bn,0);this.J(this.Text,0);this.J(this.CY,0);this.
J(this.Hp,0);this.IY.Q=[B=this.CY,B.Fq,B.Z];this.Cq.BL=[this,this.AAD];this.Cq.D1=[
this,this.AAD];this.AmF.BL=[this,this.Be_];this.AmF.D1=[this,this.Be_];this.Sh.BL=[
this,this.AAE];this.Sh.D1=[this,this.AAE];this.KP.BL=[this,this.Bfd];this.KP.D1=[
this,this.Bfd];this.Bn.BL=[this,this.AAJ];this.Text.Q7([this,this.Amn]);this.Text.
S(A.aaL(A.fl.Ak));this.B7=A.aaL(A.fl.Ak);this.Aqz.BL=[this,this.Bb1];this.Ash.BL=[
this,this.Bb1];this.Hp.Zx(this.BU);this.Arx.BL=[this,this.BBb];this.Aq4.BL=[this
,this.BA4];this.AqM.BL=[this,this.BA1];},_Done:function(){this.__proto__=A.acn.Jf;
this.IY._Done();this.Cq._Done();this.AmF._Done();this.Sh._Done();this.KP._Done();
this.Bn._Done();this.Text._Done();this.CY._Done();this.Aqz._Done();this.Ash._Done(
);this.BU._Done();this.Hp._Done();this.Arx._Done();this.Aq4._Done();this.AqM._Done(
);A.acn.Jf._Done.call(this);},_ReInit:function(){A.acn.Jf._ReInit.call(this);this.
IY._ReInit();this.Cq._ReInit();this.AmF._ReInit();this.Sh._ReInit();this.KP._ReInit(
);this.Bn._ReInit();this.Text._ReInit();this.CY._ReInit();this.Aqz._ReInit();this.
Ash._ReInit();this.BU._ReInit();this.Hp._ReInit();this.Arx._ReInit();this.Aq4._ReInit(
);this.AqM._ReInit();this.Text.S(A.aaL(A.fl.Ak));this.S(A.aaL(A.fl.Ak));},_Mark:
function(D){var B;A.acn.Jf._Mark.call(this,D);if((B=this.B7)&&(B._cycle!=D))B._Mark(
B._cycle=D);if((B=this.Dk)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.
IY)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Cq)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.AmF)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Sh)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.KP)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Bn)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Text)._cycle!=D)B._Mark(B._cycle=D);if((B=this.CY)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.Aqz)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
Ash)._cycle!=D)B._Mark(B._cycle=D);if((B=this.BU)._cycle!=D)B._Mark(B._cycle=D);
if((B=this.Hp)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Arx)._cycle!=D)B._Mark(B.
_cycle=D);if((B=this.Aq4)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AqM)._cycle!=
D)B._Mark(B._cycle=D);},_className:"Demonstrator::NumberInput"};C.Acw={LabelDataSync:
null,Af$:function(G){var B;A.pe([B=A._GetAutoObject(A.acs.Acq),B.BCA],this);},_Init:
function(aArg){C.Js._Init.call(this,aArg);A.kR.CG._Init.call(this.LabelDataSync={
I:this},0);this.__proto__=C.Acw;this.LabelDataSync.H(As5);this.LabelDataSync.R(A.
aaR(A.acf.A5_));this.LabelDataSync.L(A.jb.Text);this.J(this.LabelDataSync,0);this.
YC.Ax(A.aaL(C.AVd));this.LabelDataSync.S(A.aaL(A.fl.Af));this.LabelDataSync.AZ(A.
aaL(A.fl.Ak));},_Done:function(){this.__proto__=C.Js;this.LabelDataSync._Done();
C.Js._Done.call(this);},_ReInit:function(){C.Js._ReInit.call(this);this.LabelDataSync.
_ReInit();this.LabelDataSync.R(A.aaR(A.acf.A5_));this.LabelDataSync.S(A.aaL(A.fl.
Af));this.LabelDataSync.AZ(A.aaL(A.fl.Ak));},_Mark:function(D){var B;C.Js._Mark.
call(this,D);if((B=this.LabelDataSync)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Demonstrator::SyncAction"};C.AVd={_class:function(){return A.aci.Al;},0:{FileName:
"./res_index/DemonstratorSyncIcon.png",Format:A._PIXEL_FORMAT_NATIVE,NoOfFrames:
1,FrameSize:[50,60],FrameDelay:0,_this:null}};C.Abe={TimespanDaysToString:null,Avz:
function(aIndex){if(this.AqX()>aIndex)return this.TimespanDaysToString.BS(aIndex
);A.ab5("%s",Ald);return A.jV;},AqX:function(){return 4;},C7:function(aIndex){var
Ajb=0;switch(aIndex){case 0:Ajb=0;break;case 1:Ajb=1;break;case 2:Ajb=2;break;case
3:Ajb=3;break;default:throw new Error(Ayd+aIndex.toFixed());}return Ajb;},_Init:
function(aArg){A.acq.VQ._Init.call(this,aArg);A.Device.TimespanDaysToString._Init.
call(this.TimespanDaysToString={I:this},0);this.__proto__=C.Abe;},_Done:function(
){this.__proto__=A.acq.VQ;this.TimespanDaysToString._Done();A.acq.VQ._Done.call(
this);},_ReInit:function(){A.acq.VQ._ReInit.call(this);this.TimespanDaysToString.
_ReInit();},_Mark:function(D){var B;A.acq.VQ._Mark.call(this,D);if((B=this.TimespanDaysToString
)._cycle!=D)B._Mark(B._cycle=D);},_className:"Demonstrator::DatePickerUnitDD"};C.
BGm={GL:0,AVX:1,Hk:2,Year:3};C.ACK={_class:function(){return A.aci.Al;},0:{FileName:
"./res_index/DemonstratorEarTagIcon.png",Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:
2,FrameSize:[37,37],FrameDelay:0,_this:null}};C.AxW={_class:function(){return A.
aci.Al;},0:{FileName:"./res_index/DemonstratorTransponderEarTagIcon.png",Format:
A._PIXEL_FORMAT_ALPHA8,NoOfFrames:2,FrameSize:[37,37],FrameDelay:0,_this:null}};
C.ZH={Aeh:null,Init:function(aArg){var Av=A._NewObject(A.Core.Bs,0);Av.Initialize(
A._GetAutoObject(A.Device.Helper).Dv());var A11=Av.Format(It);this.Aeh.R(A11);},
Af$:function(G){var B;var JF=this.Aeh.String;var O;O=JF.indexOf(String.fromCharCode(
0x2E),0);while(O>=0){JF=A.ab1(JF,O,1);O=JF.indexOf(String.fromCharCode(0x2E),O);
}JF=JF+Aye;JF=JF+A._GetAutoObject(A.acj.VG).AC7(JF).toFixed();var A11=A._GetAutoObject(
A.Device.AnM).BfY(JF);A._GetAutoObject(A.aco.G1).BCq(((B=(A11|0))<0)?B+0x100000000:
B);},_Init:function(aArg){C.Js._Init.call(this,aArg);C.ANN._Init.call(this.Aeh={
I:this},0);this.__proto__=C.ZH;this.Aeh.H(Ro);this.Aeh.L(A.jb.Text);this.Aeh.BnE(
10);this.J(this.Aeh,-1);this.YC.Ax(A.aaL(A.ach.AvG));this.Init(aArg);},_Done:function(
){this.__proto__=C.Js;this.Aeh._Done();C.Js._Done.call(this);},_ReInit:function(
){C.Js._ReInit.call(this);this.Aeh._ReInit();},_Mark:function(D){var B;C.Js._Mark.
call(this,D);if((B=this.Aeh)._cycle!=D)B._Mark(B._cycle=D);},_className:"Demonstrator::ScanDateAction"
};C.AhF={BGB:0,BGw:1,VG:2,LAST:3};C.AhG={AhH:null,Avz:function(aIndex){if(this.AqX(
)>aIndex)return this.AhH.BS(aIndex);A.ab5("%s",Ald);return A.jV;},AqX:function(){
return 3;},_Init:function(aArg){A.acq.VQ._Init.call(this,aArg);C.AhH._Init.call(
this.AhH={I:this},0);this.__proto__=C.AhG;},_Done:function(){this.__proto__=A.acq.
VQ;this.AhH._Done();A.acq.VQ._Done.call(this);},_ReInit:function(){A.acq.VQ._ReInit.
call(this);this.AhH._ReInit();},_Mark:function(D){var B;A.acq.VQ._Mark.call(this
,D);if((B=this.AhH)._cycle!=D)B._Mark(B._cycle=D);},_className:"Demonstrator::ScanTypeDD"
};C.AhH={BS:function(A9){var Bdq=A9;var AK7=A.jV;switch(Bdq){case 2:AK7=A.aaR(A.
acf.VG);break;case 0:AK7=A.aaR(A.acf.Transponder);break;case 1:AK7=A.aaR(A.acf.BiV
);break;default:throw new Error(Ayf+Bdq.toFixed());}return AK7;},_Init:function(
aArg){A.Device.EnumToString._Init.call(this,aArg);this.__proto__=C.AhH;},_className:
"Demonstrator::ScanTypeToString"};C.ANN={Bfq:function(G){var Bf_=0;var O=this.String.
indexOf(String.fromCharCode(0x2E),0);while(O>=0){Bf_++;O++;O=this.String.indexOf(
String.fromCharCode(0x2E),O);}if(Bf_>=2)return;if(this.String.length>=this.Av3)return;
this.R(A.abU(this.String,Te,this.D6));this.D6=this.D6+1;this.LC=true;A.pe(this.Dk
,this);},_Init:function(aArg){C.Akp._Init.call(this,aArg);this.__proto__=C.ANN;}
,_className:"Demonstrator::DateInput"};
C._Init=function(){C.AVR.__proto__=A.acn.Menu;C.AUL.__proto__=A.Core.P;C.AMz.__proto__=
C.Ba;C.Mm.__proto__=A.Core.P;C.Yr.__proto__=C.Arf;C.Abf.__proto__=A.Core.P;C.AvJ.
__proto__=A.acn.AhA;C.AMN.__proto__=C.FE;C.AuG.__proto__=C.FE;C.Ba.__proto__=A.Core.
P;C.FE.__proto__=A.Core.P;C.ANO.__proto__=A.acn.Ahy;C.AhK.__proto__=A.Core.P;C.AMG.
__proto__=C.AhK;C.Vx.__proto__=C.AuG;C.AL$.__proto__=A.Core.P;C.Js.__proto__=A.Core.
P;C.Acm.__proto__=C.Js;C.Acx.__proto__=C.Js;C.Arf.__proto__=A.Core.P;C.Aes.__proto__=
A.Core.P;C.OX.__proto__=C.Akp;C.Akp.__proto__=A.acn.Jf;C.Acw.__proto__=C.Js;C.Abe.
__proto__=A.acq.VQ;C.ZH.__proto__=C.Js;C.AhG.__proto__=A.acq.VQ;C.AhH.__proto__=
A.Device.EnumToString;C.ANN.__proto__=C.Akp;};C._ReInit=function(){};C.DH=function(
D){var B;if((B=C.Background[0]._this)&&(B._cycle!=D))B._Done(C.Background[0]._this=
null);if((B=C.AM_[0]._this)&&(B._cycle!=D))B._Done(C.AM_[0]._this=null);if((B=C.
AM$[0]._this)&&(B._cycle!=D))B._Done(C.AM$[0]._this=null);if((B=C.ANa[0]._this)&&(
B._cycle!=D))B._Done(C.ANa[0]._this=null);if((B=C.ANb[0]._this)&&(B._cycle!=D))B.
_Done(C.ANb[0]._this=null);if((B=C.AQe[0]._this)&&(B._cycle!=D))B._Done(C.AQe[0].
_this=null);if((B=C.Filter[0]._this)&&(B._cycle!=D))B._Done(C.Filter[0]._this=null
);if((B=C.ARZ[0]._this)&&(B._cycle!=D))B._Done(C.ARZ[0]._this=null);if((B=C.Ajt[
0]._this)&&(B._cycle!=D))B._Done(C.Ajt[0]._this=null);if((B=C.AMQ[0]._this)&&(B.
_cycle!=D))B._Done(C.AMQ[0]._this=null);if((B=C.Asx[0]._this)&&(B._cycle!=D))B._Done(
C.Asx[0]._this=null);if((B=C.AVi[0]._this)&&(B._cycle!=D))B._Done(C.AVi[0]._this=
null);if((B=C.AHt[0]._this)&&(B._cycle!=D))B._Done(C.AHt[0]._this=null);if((B=C.
AV8[0]._this)&&(B._cycle!=D))B._Done(C.AV8[0]._this=null);if((B=C.AVd[0]._this)&&(
B._cycle!=D))B._Done(C.AVd[0]._this=null);if((B=C.ACK[0]._this)&&(B._cycle!=D))B.
_Done(C.ACK[0]._this=null);if((B=C.AxW[0]._this)&&(B._cycle!=D))B._Done(C.AxW[0].
_this=null);};return C;})();

/* VitalControl demonstration application, © Urban GmbH & Co.KG 2023 */