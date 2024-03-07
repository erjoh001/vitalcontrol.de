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
* Version  : 13.02
* Profile  : WebGLDemonstrator
* Platform : Web.WebGL.RGBA8888
*
*******************************************************************************/

var index;if(!index)throw new Error("The application file '_project.js' isn't yet loaded!"
);if(index.acw)throw new Error("The unit file 'Demonstrator.js' included twice!"
);index.acw=(function(){var A=index;var C={};
var Cc=[0,0,370,60];var BF=[360,0,370,60];var EY=[0,0,370,710];var Hi="Unknown animalType";
var I7=[58,10,120,50];var Ik=[0,0,60,60];var O0=[120,0,360,60];var PZ="\u2015";var
P0=[0,0,240,60];var CO=[0,0,40,60];var E7=[100,0,130,60];var Ls=[43,0,100,60];var
P1=[125,0,240,60];var Ks=[0,0];var N$=[100,0];var P2=[100,60];var ME=[0,60];var SY=[
107,0];var UJ=[240,0];var ZM=[240,60];var WN=[107,60];var IJ="%d.%m.%Y";var UK="Unhandled date unit: ";
var ZN=[0,0,200,180];var WO=[36,0,200,30];var ZO=[0,30,160,60];var WQ="Text";var
ZP=[0,70,40,110];var ZQ=[44,70,156,110];var UL=[160,70,200,110];var WR=[7,2,27,25
];var Rd=[0,30,170,180];var ZR=[170,34,190,57];var O1=[0,0,40,40];var Re=[0,40];
var WS=[40,40];var WT=[40,0];var WU=[0,0,370,100];var WV=[20,0,290,60];var ZS=[0
,60,370,100];var WW="Cap";var WX=[20,0,370,60];var SZ=[310,0,370,60];var ZT=[370
,0];var ZU=[370,60];var Acu="UpdateData is called for the base class ListItemBase. Please make "+
"sure this method is implemented by a derived class.";var UM=".";var ZV=[0,0,170
,150];var Afk=[0,59,170,90];var ZW=[110,0,170,150];var WY=[0,30];var ZX=[50,0,100
,150];var ZY=[0,0,40,150];var Afl=[0,0,370,240];var JR=[0,60,370,710];var Acv=[0
,60,370,120];var Lt=[0,120,370,180];var AhF=[0,180,370,240];var AnY=[370,120];var
Oa=[0,120];var WZ=[370,180];var AnZ=[0,180];var AhG=[370,240];var AhH=[0,240];var
Acw=[0,0,50,60];var UN=[50,0,100,60];var An0=[100,10,370,50];var An1="276000901234567";
var An2="Unhandled temperature unit";var An3=[110,0,260,60];var Afm=[235,10,370,
50];var An4="39.5";var Afn=[0,0,270,40];var Asq=[270,0];var Ob=[270,40];var S0=[
150,0,170,40];var Axx=[205,10,207,30];var S1=[0,0,370,40];var Asr=[50,0,320,40];
var Axy=" ";var Axz=[135,23];var AxA=[135,0];var An5=[100,0,370,60];var AxB="Error: Nullpointer Exception";
var Ass="Unknown Date Piecker Unit Index: ";
C.Background={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/DemonstratorBackground.png"
,Format:A._PIXEL_FORMAT_NATIVE,NoOfFrames:1,FrameSize:[1000,740],FrameDelay:0,_this:
null}};C.AMx={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/DemonstratorButtonLeft.png"
,Format:A._PIXEL_FORMAT_NATIVE,NoOfFrames:1,FrameSize:[40,40],FrameDelay:0,_this:
null}};C.AMy={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/DemonstratorButtonLeftPressed.png"
,Format:A._PIXEL_FORMAT_NATIVE,NoOfFrames:1,FrameSize:[40,40],FrameDelay:0,_this:
null}};C.AMz={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/DemonstratorButtonRight.png"
,Format:A._PIXEL_FORMAT_NATIVE,NoOfFrames:1,FrameSize:[40,40],FrameDelay:0,_this:
null}};C.AMA={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/DemonstratorButtonRightPressed.png"
,Format:A._PIXEL_FORMAT_NATIVE,NoOfFrames:1,FrameSize:[40,40],FrameDelay:0,_this:
null}};C.APD={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/DemonstratorIconDatePicker.png"
,Format:A._PIXEL_FORMAT_NATIVE,NoOfFrames:1,FrameSize:[20,23],FrameDelay:0,_this:
null}};C.Filter={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/DemonstratorFilter.png"
,Format:A._PIXEL_FORMAT_NATIVE,NoOfFrames:1,FrameSize:[15,16],FrameDelay:0,_this:
null}};C.ARb={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/DemonstratorMenuIcon.png"
,Format:A._PIXEL_FORMAT_NATIVE,NoOfFrames:1,FrameSize:[20,16],FrameDelay:0,_this:
null}};C.Ajf={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/DemonstratorArrowRight.png"
,Format:A._PIXEL_FORMAT_NATIVE,NoOfFrames:1,FrameSize:[17,16],FrameDelay:0,_this:
null}};C.AMe={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/DemonstratorArrowDown.png"
,Format:A._PIXEL_FORMAT_NATIVE,NoOfFrames:1,FrameSize:[17,16],FrameDelay:0,_this:
null}};C.Ar2={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/DemonstratorScanIcon.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:2,FrameSize:[37,37],FrameDelay:0,_this:
null}};C.AUx={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/DemonstratorTemperatureIcon.png"
,Format:A._PIXEL_FORMAT_NATIVE,NoOfFrames:1,FrameSize:[17,37],FrameDelay:0,_this:
null}};C.AU2={AdV:null,AX:null,AR:null,Background:null,H3:null,AD:null,IG:null,Dj:
null,Lh:null,A7j:null,A7M:0,Bj:function(aSize){A.acn.Menu.Bj.call(this,aSize);this.
IG.H(A.abP(this.IG.M,this.AD.OO));this.IG.H([].concat(this.IG.M.slice(0,3),aSize[
1]));},Ai:function(Ae){var B;A.acn.Menu.Ai.call(this,Ae);var Ir=((Ae&0x40)===0x40
);if(Ir&&(this.AD.Gk<0))this.AD.GZ(0);},NV:function(E){if(this.Lh===E)return;this.
Lh=E;this.AD.NV(E);},Bml:function(E){var B;if(this.A7j===E)return;if(!!this.AdV){
this.HJ(this.AdV);this.AdV=null;}if(!!E){this.AdV=(C.Ft.isPrototypeOf(B=A._NewObject(
E,0))?B:null);this.AdV.A9K([this,this.Ag7]);this.AdV.A9L([this,this.Ag8]);this.AdV.
Bmr(null);this.J(this.AdV,0);this.AD.A9R((B=this.AdV.M)[3]-B[1]);}else this.AD.A9R(
0);this.IG.H(A.abP(this.IG.M,this.AD.OO));A.pe([this,this.Fa],this);this.A7j=E;}
,Hd:function(G){var B;var FZ=this.AD.GW;var Aa=(C.Ba.isPrototypeOf(B=this.AD.Cg)?
B:null);if(!Aa)return;Aa.Za(this.AX);Aa.Ce(FZ);Aa.Zb(this.AR);Aa.H(A.abK(Aa.M,[(
B=this.AD.M)[2]-B[0],this.AD.GY]));},Za:function(E){var B;if(this.AX===E)return;
if(!!this.AX){A.z9([this,this.Ce],this.AX,0);A.z$([this,this.AnR],[B=this.AX,B.Fg
,B.Fk],0);}this.AX=E;if(!!E){A.zV([this,this.Ce],E,0);A.zX([this,this.AnR],[E,E.
Fg,E.Fk],0);}A.pe([this,this.Ce],this);A.pe([this,this.AnR],this);},Ce:function(
G){if(!!this.AX){this.AD.Jm(this.AX.Cd());this.AD.Abp(0,this.AD.AY-1);}else this.
AD.Jm(0);if(this.A7M!==this.AD.AY){this.AD.AA9(null,null);this.A7M=this.AD.AY;}A.
pe([this,this.Fa],this);},Ag8:function(G){var B;this.H(A.abI(this.M,(B=this.AD.AOm(
))[3]-B[1]));},Ag7:function(G){this.H(A.abI(this.M,180));},A88:function(G){var Jq=(
A.Core.BL.isPrototypeOf(G)?G:null);var FZ=this.AD.Gk;if(Jq.CN===4)FZ=FZ-1;else if(
Jq.CN===5)FZ=FZ+1;else if((Jq.DM>=0x30)&&(Jq.DM<=0x39))A._GetAutoObject(A.acp.Agu
).E1(Jq.DM);else if(Jq.CN===45)A._GetAutoObject(A.acp.Agu).Delete();else Jq.NC=true;
if((FZ<0)||(FZ>=this.AD.AY))return;this.AD.GZ(FZ);this.Bx9(FZ,true);},BxY:function(
G){var Aa=(C.Ba.isPrototypeOf(G)?G:null);this.AD.GZ(Aa.Hj);},Bx9:function(G3,AcK
){var B;if((G3<0)||(G3>=this.AD.AY))return;var Az=this.AD.Aqv(G3,G3);var Bd=this.
AD.M;Bd=A.abP(Bd,(B=this.AD.AOm())[3]-B[1]);Bd=A.abI(Bd,(((B=this.AD.M)[3]-B[1])-((
B=this.AD.AOm())[3]-B[1]))-((B=this.AD.Bid())[3]-B[1]));var LK=A.lb(Az,Bd);if((!
AcK&&!((LK[0]>=LK[2])||(LK[1]>=LK[3])))||(AcK&&A.aaY(LK,Az)))return;var Br=0;if(
Az[3]>Bd[3])Br=Az[3]-Bd[3];if(Br>(Az[1]-Bd[1]))Br=(Az[3]-Bd[1])-this.AD.GY;this.
AD.Gj(this.AD.Bt-Br);},AnR:function(G){this.AD.GZ(-1);},Fa:function(G){var B;this.
IG.Ms(this.AD.GY*this.AD.AY);this.IG.Mu(((B=this.AD.M)[3]-B[1])-this.AD.OO);this.
IG.Mt(-this.AD.Bt);},_Init:function(aArg){A.acn.Menu._Init.call(this,aArg);A.acg.
AL._Init.call(this.Background={I:this},0);A.Core.H3._Init.call(this.H3={I:this},
0);A.Core.CL._Init.call(this.AD={I:this},0);A.kR.Ay._Init.call(this.IG={I:this},
0);A.Core.BL._Init.call(this.Dj={I:this},0);this.__proto__=C.AU2;this.H(Cc);this.
Background.A3(0x3);this.Background.H(Cc);this.H3.A3(0x3F);this.H3.H(Cc);this.AD.
A3(0x3F);this.AD.H(Cc);this.AD.AeN(60);this.AD.Jm(0);this.AD.NV(this.Lh);this.IG.
A3(0x3A);this.IG.H(BF);this.IG.L(0xFF808080);this.J(this.Background,0);this.J(this.
H3,0);this.J(this.AD,0);this.J(this.IG,0);this.AD.En=[this,this.Fa];this.AD.Hd=[
this,this.Hd];this.AD.AwB(this.H3);this.AR=[this,this.BxY];this.Dj.BM=[this,this.
A88];this.Dj.DX=[this,this.A88];},_Done:function(){this.__proto__=A.acn.Menu;this.
Background._Done();this.H3._Done();this.AD._Done();this.IG._Done();this.Dj._Done(
);A.acn.Menu._Done.call(this);},_ReInit:function(){A.acn.Menu._ReInit.call(this);
this.Background._ReInit();this.H3._ReInit();this.AD._ReInit();this.IG._ReInit();
this.Dj._ReInit();},_Mark:function(D){var B;A.acn.Menu._Mark.call(this,D);if((B=
this.AdV)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.AX)&&(B._cycle!=D))B._Mark(
B._cycle=D);if((B=this.AR)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.
Background)._cycle!=D)B._Mark(B._cycle=D);if((B=this.H3)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.AD)._cycle!=D)B._Mark(B._cycle=D);if((B=this.IG)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Dj)._cycle!=D)B._Mark(B._cycle=D);},_className:"Demonstrator::VerticalMenu"
};C.AT1={GC:null,AL:null,CC:null,Init:function(aArg){var B;A.zX([this,this.Gz],[
B=A._GetAutoObject(A.acp.K_),B.A8L,B.A90],0);A.pe([this,this.Gz],this);},AbP:function(
E){if(this.GC===E)return;if(!!this.GC)this.HJ(this.GC);this.GC=E;if(!!this.GC)this.
J(this.GC,0);this.Bb(E);this.Ahn(E,this.CC);this.An();},Gz:function(G){var B;if(
!!A._GetAutoObject(A.acp.K_).Ar5)this.AbP((C.Ahq.isPrototypeOf(B=A._NewObject(A.
_GetAutoObject(A.acp.K_).Ar5,0))?B:null));else this.AbP(null);},_Init:function(aArg
){A.Core.O._Init.call(this,aArg);A.acg.AL._Init.call(this.AL={I:this},0);A.acg.CC.
_Init.call(this.CC={I:this},0);this.__proto__=C.AT1;this.H(EY);this.AL.A3(0x3F);
this.AL.H(EY);this.CC.H(EY);this.CC.L(0xFF000000);this.J(this.AL,0);this.J(this.
CC,0);this.Init(aArg);},_Done:function(){this.__proto__=A.Core.O;this.AL._Done();
this.CC._Done();A.Core.O._Done.call(this);},_ReInit:function(){A.Core.O._ReInit.
call(this);this.AL._ReInit();this.CC._ReInit();},_Mark:function(D){var B;A.Core.
O._Mark.call(this,D);if((B=this.GC)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.
AL)._cycle!=D)B._Mark(B._cycle=D);if((B=this.CC)._cycle!=D)B._Mark(B._cycle=D);}
,_className:"Demonstrator::SelectionArea"};C.ALZ={Af_:0,Kz:0,Background:null,V:null
,Ajb:null,AdC:null,XC:null,AdD:null,Md:null,Ma:0,LD:false,KA:false,CS:function(){
this.An();},Ai:function(Ae){var B;C.Ba.Ai.call(this,Ae);var G8=((Ae&0x10)===0x10
);var Fn=((Ae&0x20)===0x20);var Ir=((Ae&0x40)===0x40);if(!G8){this.Background.L(
0xFFAAAAAA);this.V.L(0xFF888888);this.Md.Ar(false);this.Md.Y(false);}else if(Ir){
this.Background.L(A.jb.AW);this.V.L(A.jb.Bm);this.Md.Ar(true);this.Md.Y(true);}else
if(Fn){this.Background.L(0xFFE6DED8);this.V.L(0xFF000000);this.Md.Ar(true);this.
Md.Y(true);}else{this.Background.L(0xFFFFFFFF);this.V.L(0xFF000000);this.Md.Ar(false
);this.Md.Y(false);}if(!this.KA&&Fn)A._GetAutoObject(A.acp.K_).NX(this.Af_);this.
Md.Bmn(this.Kz>0);this.Md.BmQ(this.Af_>0);this.V.R(this.Ma.toFixed());this.LD=G8;
this.KA=Fn;},Ce:function(Ad){if(!this.AX){this.XC.Ax(A.aaL(A.ach.Aed));this.AdC.
L(A.jb.Afd);return;}this.Hj=Ad;if(!!this.AX){this.Kz=this.AX.KJ(Ad,26);this.Af_=
this.AX.KJ(Ad,22);this.Ma=this.AX.CE(Ad,1);var Als=this.AX.HX(Ad,11);var Alj=this.
AX.IU(Ad,17);var LN=this.AX.IU(Ad,13);var H7=this.AX.AmC(Ad,14);var W$=A._GetAutoObject(
A.Device.Helper).ALO(LN,Als,Alj);switch(H7){case 0:this.XC.Ax(A.aaL(A.ach.Aed));
break;case 1:this.XC.Ax(A.aaL(A.ach.Avd));break;case 2:this.XC.Ax(A.aaL(A.ach.Avg
));break;default:A.ab5("%s%e",Hi,H7);}this.AdD.Ax(this.XC.Al);this.AdC.L(A._GetAutoObject(
A.acj.Assessment).Qg(W$));this.An();}},_Init:function(aArg){C.Ba._Init.call(this
,aArg);A.acg.AL._Init.call(this.Background={I:this},0);A.kR.CG._Init.call(this.V={
I:this},0);A.acg.Am._Init.call(this.Ajb={I:this},0);A.acg.Am._Init.call(this.AdC={
I:this},0);A.acg.Am._Init.call(this.XC={I:this},0);A.acg.Am._Init.call(this.AdD={
I:this},0);C.Md._Init.call(this.Md={I:this},0);this.__proto__=C.ALZ;this.Background.
A3(0x3F);this.Background.H(Cc);this.V.A3(0x3F);this.V.H(I7);this.V.R(A.aaR(A.acf.
GF));this.V.A7(0x11);this.V.L(0xFF000000);this.Ajb.H(Ik);this.Ajb.L(A.jb.Text);this.
AdC.H(Ik);this.AdC.L(A.jb.EV);this.XC.H(Ik);this.AdD.H(Ik);this.AdD.L(A.jb.Text);
this.AdD.Cx(1);this.Md.A3(0x3);this.Md.H(O0);this.J(this.Background,0);this.J(this.
V,0);this.J(this.Ajb,0);this.J(this.AdC,0);this.J(this.XC,0);this.J(this.AdD,0);
this.J(this.Md,0);this.V.S(A.aaL(A.fl.Af));this.V.A2(A.aaL(A.fl.Ak));this.V.Cs(A.
aaL(A.fl.Bk));this.Ajb.Ax(A.aaL(C.AGS));this.AdC.Ax(A.aaL(C.AVi));this.XC.Ax(A.aaL(
A.ach.Aed));this.AdD.Ax(A.aaL(A.ach.Aed));},_Done:function(){this.__proto__=C.Ba;
this.Background._Done();this.V._Done();this.Ajb._Done();this.AdC._Done();this.XC.
_Done();this.AdD._Done();this.Md._Done();C.Ba._Done.call(this);},_ReInit:function(
){C.Ba._ReInit.call(this);this.Background._ReInit();this.V._ReInit();this.Ajb._ReInit(
);this.AdC._ReInit();this.XC._ReInit();this.AdD._ReInit();this.Md._ReInit();this.
V.R(A.aaR(A.acf.GF));this.V.S(A.aaL(A.fl.Af));this.V.A2(A.aaL(A.fl.Ak));this.V.Cs(
A.aaL(A.fl.Bk));this.CS();},_Mark:function(D){var B;C.Ba._Mark.call(this,D);if((
B=this.Background)._cycle!=D)B._Mark(B._cycle=D);if((B=this.V)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Ajb)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AdC)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.XC)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
AdD)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Md)._cycle!=D)B._Mark(B._cycle=D);
},_className:"Demonstrator::AnimalMenuItem"};C.Md={Uq:null,Ws:null,AkH:null,Nd:null
,N7:null,Zn:null,Acg:null,Avz:false,Axk:false,CS:function(){this.An();},Ai:function(
Ae){var B;A.Core.O.Ai.call(this,Ae);var Ir=((Ae&0x40)===0x40);if(Ir){this.Nd.L(A.
jb.Bm);this.N7.L(A.jb.Bm);}else{this.Nd.L(A.jb.Text);this.N7.L(A.jb.Text);}if(this.
Axk){this.Nd.R(A.aaR(A.acf.BnK));if(this.Avz){this.Uq.Ax(A.aaL(C.AGz));this.Ws.Ax(
A.aaL(C.AGz));}else{this.Uq.Ax(A.aaL(C.Ar2));this.Ws.Ax(A.aaL(C.Ar2));}}else if(
this.Avz){this.Uq.Ax(A.aaL(C.AB8));this.Ws.Ax(A.aaL(C.AB8));this.Nd.R(PZ);}var A3w=
this.Axk||this.Avz;this.Uq.Y(A3w);this.Ws.Y(A3w);this.Nd.Y(A3w);this.Zn.Ar(this.
Axk);},BmQ:function(E){if(this.Axk===E)return;this.Axk=E;this.An();},Bmn:function(
E){if(this.Avz===E)return;this.Avz=E;this.An();},_Init:function(aArg){A.Core.O._Init.
call(this,aArg);A.acg.Am._Init.call(this.Uq={I:this},0);A.acg.Am._Init.call(this.
Ws={I:this},0);A.acg.Am._Init.call(this.AkH={I:this},0);A.kR.CG._Init.call(this.
Nd={I:this},0);A.kR.CG._Init.call(this.N7={I:this},0);A.Core.Bn._Init.call(this.
Zn={I:this},0);A.Core.Bn._Init.call(this.Acg={I:this},0);this.__proto__=C.Md;var
B;this.H(P0);this.Uq.A3(0x6);this.Uq.H(CO);this.Uq.L(A.jb.C2);this.Uq.Cx(1);this.
Ws.A3(0x6);this.Ws.H(CO);this.Ws.L(A.jb.Text);this.AkH.A3(0xE);this.AkH.H(E7);this.
Nd.A3(0x7);this.Nd.H(Ls);this.Nd.A7(0x11);this.Nd.L(0xFF000000);this.N7.A3(0x3);
this.N7.H(P1);this.N7.R(A.aaR(A.acf.Temperature));this.N7.A7(0x11);this.N7.L(0xFF000000
);this.Zn.A3(0x3);this.Zn.Kj(Ks);this.Zn.Ki(N$);this.Zn.DI(P2);this.Zn.DY(ME);this.
Acg.A3(0x3);this.Acg.Kj(SY);this.Acg.Ki(UJ);this.Acg.DI(ZM);this.Acg.DY(WN);this.
J(this.Uq,0);this.J(this.Ws,0);this.J(this.AkH,0);this.J(this.Nd,0);this.J(this.
N7,0);this.J(this.Zn,0);this.J(this.Acg,0);this.Uq.Ax(A.aaL(C.Ar2));this.Ws.Ax(A.
aaL(C.Ar2));this.AkH.Ax(A.aaL(C.AUx));this.Nd.S(A.aaL(A.fl.Af));this.Nd.A2(A.aaL(
A.fl.Ak));this.Nd.Cs(A.aaL(A.fl.Bk));this.N7.S(A.aaL(A.fl.Af));this.N7.A2(A.aaL(
A.fl.Ak));this.N7.Cs(A.aaL(A.fl.Bk));this.Zn.Ll=[B=A._GetAutoObject(A.acp.K_),B.
Bet];this.Acg.Ll=[B=A._GetAutoObject(A.acp.K_),B.Bee];},_Done:function(){this.__proto__=
A.Core.O;this.Uq._Done();this.Ws._Done();this.AkH._Done();this.Nd._Done();this.N7.
_Done();this.Zn._Done();this.Acg._Done();A.Core.O._Done.call(this);},_ReInit:function(
){A.Core.O._ReInit.call(this);this.Uq._ReInit();this.Ws._ReInit();this.AkH._ReInit(
);this.Nd._ReInit();this.N7._ReInit();this.Zn._ReInit();this.Acg._ReInit();this.
N7.R(A.aaR(A.acf.Temperature));this.Nd.S(A.aaL(A.fl.Af));this.Nd.A2(A.aaL(A.fl.Ak
));this.Nd.Cs(A.aaL(A.fl.Bk));this.N7.S(A.aaL(A.fl.Af));this.N7.A2(A.aaL(A.fl.Ak
));this.N7.Cs(A.aaL(A.fl.Bk));this.CS();},_Mark:function(D){var B;A.Core.O._Mark.
call(this,D);if((B=this.Uq)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ws)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.AkH)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Nd
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.N7)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Zn)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Acg)._cycle!=D)B._Mark(B._cycle=
D);},_className:"Demonstrator::AnimalItemAction"};C.Yc={CS:function(){this.An();
},Ai:function(Ae){C.AqO.Ai.call(this,Ae);if(!this.Text.String.length)this.Text.R(
A.aaR(A.acf.Filter));},A7T:function(G){var D1=(A.Core.BL.isPrototypeOf(G)?G:null
);if(!!D1)A._GetAutoObject(A.acp.Agu).E1(D1.DM);},A7R:function(G){A._GetAutoObject(
A.acp.Agu).Delete();},_Init:function(aArg){C.AqO._Init.call(this,aArg);this.__proto__=
C.Yc;this.Am.Ax(A.aaL(C.Filter));},_ReInit:function(){C.AqO._ReInit.call(this);this.
CS();},_className:"Demonstrator::FilterView"};C.AaY={Dh:null,X7:null,R5:null,X8:
null,Iy:null,Yn:null,Amo:null,Av:null,O7:null,M3:null,AaX:null,FQ:0,Avn:0,AFG:false
,Ai:function(Ae){A.Core.O.Ai.call(this,Ae);this.R5.R(this.Av.Format(IJ));if(this.
AFG){this.R5.Y(false);this.Yn.Y(false);this.Iy.Y(false);this.X8.Y(false);this.O7.
Ar(true);this.O7.Y(true);this.M3.Cx(2);this.M3.ASM(2);this.M3.H(A.abM(this.M3.M,
this.O7.M[2]));}else{this.R5.Y(true);this.Yn.Y(true);this.Iy.Y(true);this.X8.Y(true
);this.O7.Ar(false);this.O7.Y(false);this.M3.Cx(3);this.M3.ASM(3);this.M3.H(A.abM(
this.M3.M,this.R5.M[2]));}},BzO:function(G){this.Bmu(!this.AFG);},Adg:function(G
){var F;if(!!this.Dh)this.Uc((F=this.Dh,F[1].call(F[0])));},AbT:function(E){if(A.
aaZ(this.Dh,E))return;if(!!this.Dh)A.z$([this,this.Adg],this.Dh,0);this.Dh=E;if(
!!E)A.zX([this,this.Adg],E,0);if(!!E)A.pe([this,this.Adg],this);},Uc:function(E){
if(this.FQ===E)return;this.FQ=E;this.Av.Initialize(this.FQ);this.BAS(this);this.
An();},Aiq:function(G){var B;var F;var BQ=this.FQ;var AiZ=this.AaX.C7(this.Avn);
this.AIO(AiZ);if(this.Av.Year>2100)this.Av.Initialize2(2100,12,31,0,0,0);this.Uc(((
B=(this.Av.JI()|0))<0)?B+0x100000000:B);if(this.FQ!==BQ){if(!!this.Dh)(F=this.Dh
,F[2].call(F[0],this.FQ));A.abo(this.Dh,0);}},Aib:function(G){var B;var F;var BQ=
this.FQ;var AiZ=this.AaX.C7(this.Avn);this.AKD(AiZ);if(this.Av.Year<2000)this.Av.
Initialize2(2000,1,1,0,0,0);this.Uc(((B=(this.Av.JI()|0))<0)?B+0x100000000:B);if(
this.FQ!==BQ){if(!!this.Dh)(F=this.Dh,F[2].call(F[0],this.FQ));A.abo(this.Dh,0);
}},Bl4:function(E){if(this.Avn===E)return;this.Avn=E;},Bmu:function(E){if(this.AFG===
E)return;this.AFG=E;this.An();},BAm:function(G){var B;var F;var BQ=this.FQ;this.
Av.Ln(this.O7.AD5());this.Av.Ug(this.O7.AD_());this.Av.Year=this.O7.Arb();this.Uc(((
B=(this.Av.JI()|0))<0)?B+0x100000000:B);if(this.FQ!==BQ){if(!!this.Dh)(F=this.Dh
,F[2].call(F[0],this.FQ));A.abo(this.Dh,0);}},BAS:function(G){this.O7.Ln(this.Av.
GD);this.O7.Ug(this.Av.Hb);this.O7.Akp(this.Av.Year);},AIO:function(Ayw){var B;switch(
Ayw){case 0:if(this.Av.GD<this.Av.Y9())this.Av.Ln(this.Av.GD+1);else{this.Av.Ln(
1);this.AIO(2);}break;case 1:if((this.Av.GD+7)<=this.Av.Y9())this.Av.Ln(this.Av.
GD+7);else{this.Av.Ln((7-this.Av.Y9())+this.Av.GD);this.AIO(2);}break;case 2:if(
this.Av.Hb<12)this.Av.Ug(this.Av.Hb+1);else{this.Av.Ug(1);this.AIO(3);}break;case
3:this.Av.Year++;break;default:throw new Error(UK+Ayw.toFixed());}},AKD:function(
Ayw){var B;switch(Ayw){case 0:if(this.Av.GD>1)this.Av.Ln(this.Av.GD-1);else{this.
AKD(2);this.Av.Ln(this.Av.Y9());}break;case 1:if((this.Av.GD-7)>0)this.Av.Ln(this.
Av.GD-7);else{this.AKD(2);this.Av.Ln(this.Av.Y9()-(7-this.Av.GD));}break;case 2:
if(this.Av.Hb>1)this.Av.Ug(this.Av.Hb-1);else{this.Av.Ug(12);this.AKD(3);}break;
case 3:this.Av.Year--;break;default:throw new Error(UK+Ayw.toFixed());}},Bj7:function(
){return this.Avn;},_Init:function(aArg){A.Core.O._Init.call(this,aArg);A.acg.Text.
_Init.call(this.X7={I:this},0);A.acg.Text._Init.call(this.R5={I:this},0);C.Avb._Init.
call(this.X8={I:this},0);A.acv.Iy._Init.call(this.Iy={I:this},0);C.Avb._Init.call(
this.Yn={I:this},0);A.acg.Am._Init.call(this.Amo={I:this},0);A.Core.Bw._Init.call(
this.Av={I:this},0);C.AM$._Init.call(this.O7={I:this},0);C.Avb._Init.call(this.M3={
I:this},0);C.AaX._Init.call(this.AaX={I:this},0);this.__proto__=C.AaY;this.H(ZN);
this.X7.H(WO);this.X7.A7(0x11);this.X7.R(A.aaR(A.acf.Date));this.X7.L(0xFF000000
);this.R5.H(ZO);this.R5.A7(0x11);this.R5.R(WQ);this.R5.L(0xFF000000);this.X8.H(ZP
);this.X8.A9B(200);this.Iy.H(ZQ);this.Iy.Awl(120);this.Iy.GY=30;this.Iy.A9k(A.jb.
C2);this.Iy.Bk3(A.jb.C2);this.Iy.Bk9(A.jb.C2);this.Iy.A9l(A.jb.Text);this.Iy.Bk_(
A.jb.Text);this.Iy.Bk4(A.jb.AW);this.Iy.Bk$(A.jb.Bm);this.Iy.Bk8(A.jb.AW);this.Iy.
Bk7(A.jb.Text);this.Yn.H(UL);this.Yn.A9B(200);this.Amo.H(WR);this.O7.H(Rd);this.
M3.H(ZR);this.M3.Cx(3);this.M3.ASM(3);this.M3.L(A.jb.Text);this.J(this.X7,0);this.
J(this.R5,0);this.J(this.X8,0);this.J(this.Iy,0);this.J(this.Yn,0);this.J(this.Amo
,0);this.J(this.O7,0);this.J(this.M3,0);this.X7.S(A.aaL(A.fl.Ak));this.R5.S(A.aaL(
A.fl.EF));this.X8.AR=[this,this.Aib];this.X8.DD(A.aaL(C.AMx));this.X8.ASN(A.aaL(
C.AMy));this.Iy.As([this,this.Bj7,this.Bl4]);this.Iy.Ble(this.AaX);this.Iy.AEF(A.
aaL(A.fl.Ak));this.Iy.ASu(A.aaL(A.fl.Ak));this.Yn.AR=[this,this.Aiq];this.Yn.DD(
A.aaL(C.AMz));this.Yn.ASN(A.aaL(C.AMA));this.Amo.Ax(A.aaL(C.APD));this.O7.Dk=[this
,this.BAm];this.M3.AR=[this,this.BzO];this.M3.DD(A.aaL(A.ach.Amc));this.M3.ASN(A.
aaL(A.ach.Amc));},_Done:function(){this.__proto__=A.Core.O;this.X7._Done();this.
R5._Done();this.X8._Done();this.Iy._Done();this.Yn._Done();this.Amo._Done();this.
Av._Done();this.O7._Done();this.M3._Done();this.AaX._Done();A.Core.O._Done.call(
this);},_ReInit:function(){A.Core.O._ReInit.call(this);this.X7._ReInit();this.R5.
_ReInit();this.X8._ReInit();this.Iy._ReInit();this.Yn._ReInit();this.Amo._ReInit(
);this.Av._ReInit();this.O7._ReInit();this.M3._ReInit();this.AaX._ReInit();this.
X7.R(A.aaR(A.acf.Date));this.X7.S(A.aaL(A.fl.Ak));this.R5.S(A.aaL(A.fl.EF));this.
Iy.AEF(A.aaL(A.fl.Ak));this.Iy.ASu(A.aaL(A.fl.Ak));},_Mark:function(D){var B;A.Core.
O._Mark.call(this,D);if((B=this.Dh)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((
B=this.X7)._cycle!=D)B._Mark(B._cycle=D);if((B=this.R5)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.X8)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Iy)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Yn)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Amo)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.Av)._cycle!=D)B._Mark(B._cycle=D);if((B=this.O7
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.M3)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.AaX)._cycle!=D)B._Mark(B._cycle=D);},_className:"Demonstrator::DateSelector"
};C.Avb={C8:null,AwV:null,ANq:null,AR:null,Bo:null,Dj:null,CR:null,Ho:null,Yj:null
,APg:0,TK:0,ATt:0,AQ:0xFFFFFFFF,A1L:false,LD:false,KA:false,Qk:false,Ai:function(
Ae){var B;A.acn.Ahj.Ai.call(this,Ae);var G8=((Ae&0x10)===0x10);var Fn=((Ae&0x20)===
0x20);var Gw=this.CR.Down&&this.CR.Yq;if(!G8)this.Ho.Ax(this.ANq);else if(Gw){this.
Ho.Ax(this.AwV);this.Ho.Cx(this.ATt);}else{this.Ho.Ax(this.C8);this.Ho.Cx(this.TK
);}this.Ho.L(this.AQ);this.LD=G8;this.KA=Fn;this.Qk=Gw;},Qj:function(G){this.An(
);A.pe(this.AR,this);},AiC:function(G){if(this.CR.Down)return;if(this.Dj.Ab5)return;
this.An();if(this.Bo.By){A.pe(this.AR,this);this.Bo.Ar(false);}this.Bo.Ar(true);
},Beb:function(G){this.An();},Az_:function(G){if(!this.CR.Yq)return;if(this.CR.NA
)return;if((this.Yj.Vp<=0)||(this.CR.Jg<this.Yj.Vp)){if(this.CR.Jg>=this.Bo.Vp)A.
pe(this.AR,this);else this.Bo.Ar(true);}this.Yj.Ar(false);},Az9:function(G){this.
Yj.Ar(true);if(this.Bo.By){A.pe(this.AR,this);this.Bo.Ar(false);}},DD:function(E
){if(this.C8===E)return;this.C8=E;this.An();},ASN:function(E){if(this.AwV===E)return;
this.AwV=E;this.An();},A2J:function(G){if(!this.CR.Yq)return;if(this.CR.NA)return;
if((this.APg>=0)&&this.A1L){this.A1L=false;this.Yj.Ar(true);A.pe(this.AR,this);}
},A9B:function(E){if(this.APg===E)return;this.APg=E;this.Yj.Wk(E);},Bzh:function(
G){this.A1L=true;},Cx:function(E){if(this.TK===E)return;this.TK=E;this.An();},ASM:
function(E){if(this.ATt===E)return;this.ATt=E;this.An();},L:function(E){if(this.
AQ===E)return;this.AQ=E;this.An();},_Init:function(aArg){A.acn.Ahj._Init.call(this
,aArg);A.Core.Timer._Init.call(this.Bo={I:this},0);A.Core.BL._Init.call(this.Dj={
I:this},0);A.Core.Bn._Init.call(this.CR={I:this},0);A.acg.Am._Init.call(this.Ho={
I:this},0);A.Core.Timer._Init.call(this.Yj={I:this},0);this.__proto__=C.Avb;this.
H(O1);this.Bo.PN(0);this.Bo.Wk(50);this.Dj.Filter=149;this.CR.A3(0x3F);this.CR.Kj(
Re);this.CR.Ki(WS);this.CR.DI(WT);this.CR.DY(Ks);this.CR.AeX=0xF;this.CR.AEZ(100
);this.Ho.A3(0x3F);this.Ho.H(O1);this.Ho.A7(0x12);this.Yj.PN(0);this.J(this.CR,0
);this.J(this.Ho,0);this.Bo.Mv=[this,this.Qj];this.Dj.BM=[this,this.AiC];this.CR.
AEd=[this,this.Beb];this.CR.AvE=[this,this.Beb];this.CR.DX=[this,this.A2J];this.
CR.Ll=[this,this.Az_];this.CR.BM=[this,this.Az9];this.Ho.Ax(A.aaL(A.aci.TE));this.
C8=A.aaL(A.aci.TE);this.AwV=A.aaL(A.aci.TE);this.ANq=A.aaL(A.aci.TE);this.Yj.Mv=[
this,this.Bzh];},_Done:function(){this.__proto__=A.acn.Ahj;this.Bo._Done();this.
Dj._Done();this.CR._Done();this.Ho._Done();this.Yj._Done();A.acn.Ahj._Done.call(
this);},_ReInit:function(){A.acn.Ahj._ReInit.call(this);this.Bo._ReInit();this.Dj.
_ReInit();this.CR._ReInit();this.Ho._ReInit();this.Yj._ReInit();},_Mark:function(
D){var B;A.acn.Ahj._Mark.call(this,D);if((B=this.C8)&&(B._cycle!=D))B._Mark(B._cycle=
D);if((B=this.AwV)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.ANq)&&(B._cycle
!=D))B._Mark(B._cycle=D);if((B=this.AR)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D
);if((B=this.Bo)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Dj)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.CR)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ho)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.Yj)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Demonstrator::IconButton"};C.AMb={Pt:null,V:null,Ad8:null,_Init:function(aArg){
C.Ft._Init.call(this,aArg);A.acg.AL._Init.call(this.Pt={I:this},0);A.acg.Text._Init.
call(this.V={I:this},0);C.Ad8._Init.call(this.Ad8={I:this},0);this.__proto__=C.AMb;
this.H(WU);this.Pt.A3(0x1D);this.Pt.H(Cc);this.Pt.L(0xFFE6E6E6);this.V.A3(0x1D);
this.V.H(WV);this.V.A7(0x11);this.V.R(A.aaR(A.acf.A4w));this.V.L(0xFF000000);this.
Ad8.H(ZS);this.J(this.Pt,0);this.J(this.V,0);this.J(this.Ad8,0);this.V.S(A.aaL(A.
fl.Af));},_Done:function(){this.__proto__=C.Ft;this.Pt._Done();this.V._Done();this.
Ad8._Done();C.Ft._Done.call(this);},_ReInit:function(){C.Ft._ReInit.call(this);this.
Pt._ReInit();this.V._ReInit();this.Ad8._ReInit();this.V.R(A.aaR(A.acf.A4w));this.
V.S(A.aaL(A.fl.Af));},_Mark:function(D){var B;C.Ft._Mark.call(this,D);if((B=this.
Pt)._cycle!=D)B._Mark(B._cycle=D);if((B=this.V)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Ad8)._cycle!=D)B._Mark(B._cycle=D);},_className:"Demonstrator::AnimalsHeader"
};C.At_={Pt:null,V:null,Aew:null,Aeu:null,Bn:null,DH:WW,Aj6:false,Ai:function(Ae
){C.Ft.Ai.call(this,Ae);if(this.Aj6){this.Aeu.Y(true);this.Aew.Y(false);}else{this.
Aeu.Y(false);this.Aew.Y(true);}},Bz_:function(G){if(this.Aj6)A.pe(this.Ag7,this);
else A.pe(this.Ag8,this);this.AE2(!this.Aj6);},T:function(E){if(this.DH===E)return;
this.DH=E;this.V.R(E);},AE2:function(E){if(this.Aj6===E)return;this.Aj6=E;this.An(
);},_Init:function(aArg){C.Ft._Init.call(this,aArg);A.acg.AL._Init.call(this.Pt={
I:this},0);A.acg.Text._Init.call(this.V={I:this},0);A.acg.Am._Init.call(this.Aew={
I:this},0);A.acg.Am._Init.call(this.Aeu={I:this},0);A.Core.Bn._Init.call(this.Bn={
I:this},0);this.__proto__=C.At_;this.H(Cc);this.Pt.A3(0x1D);this.Pt.H(Cc);this.Pt.
L(0xFFE6E6E6);this.V.A3(0x1D);this.V.H(WX);this.V.A7(0x11);this.V.R(WW);this.V.L(
0xFF000000);this.Aew.H(SZ);this.Aew.Y(false);this.Aeu.A3(0x3A);this.Aeu.H(SZ);this.
Bn.Kj(Ks);this.Bn.Ki(ZT);this.Bn.DI(ZU);this.Bn.DY(ME);this.J(this.Pt,0);this.J(
this.V,0);this.J(this.Aew,0);this.J(this.Aeu,0);this.J(this.Bn,0);this.V.S(A.aaL(
A.fl.Af));this.Aew.Ax(A.aaL(C.AMe));this.Aeu.Ax(A.aaL(C.Ajf));this.Bn.Ll=[this,this.
Bz_];},_Done:function(){this.__proto__=C.Ft;this.Pt._Done();this.V._Done();this.
Aew._Done();this.Aeu._Done();this.Bn._Done();C.Ft._Done.call(this);},_ReInit:function(
){C.Ft._ReInit.call(this);this.Pt._ReInit();this.V._ReInit();this.Aew._ReInit();
this.Aeu._ReInit();this.Bn._ReInit();this.V.S(A.aaL(A.fl.Af));},_Mark:function(D
){var B;C.Ft._Mark.call(this,D);if((B=this.Pt)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.V)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Aew)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Aeu)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Bn)._cycle!=D)B._Mark(
B._cycle=D);},_className:"Demonstrator::AccordionHeader"};C.Ba={AX:null,AR:null,
CR:null,Hj:-1,Za:function(E){if(this.AX===E)return;this.AX=E;},Ce:function(Ad){A.
ab5("%s",Acu);},Zb:function(E){if(A.aa0(this.AR,E))return;this.AR=E;},Az_:function(
G){if(!this.CR.Yq)return;if(this.CR.NA)return;A.pe(this.AR,this);},_Init:function(
aArg){A.Core.O._Init.call(this,aArg);A.Core.Bn._Init.call(this.CR={I:this},0);this.
__proto__=C.Ba;this.H(Cc);this.CR.A3(0x3F);this.CR.Kj(ME);this.CR.Ki(ZU);this.CR.
DI(ZT);this.CR.DY(Ks);this.CR.AeX=0xF;this.CR.AEZ(100);this.J(this.CR,0);this.CR.
Ll=[this,this.Az_];},_Done:function(){this.__proto__=A.Core.O;this.CR._Done();A.
Core.O._Done.call(this);},_ReInit:function(){A.Core.O._ReInit.call(this);this.CR.
_ReInit();},_Mark:function(D){var B;A.Core.O._Mark.call(this,D);if((B=this.AX)&&(
B._cycle!=D))B._Mark(B._cycle=D);if((B=this.AR)&&((B=B[0])._cycle!=D))B._Mark(B.
_cycle=D);if((B=this.CR)._cycle!=D)B._Mark(B._cycle=D);},_className:"Demonstrator::ListItem"
};C.Ft={ARI:null,Ag8:null,Ag7:null,Bmr:function(E){if(A.aa0(this.ARI,E))return;this.
ARI=E;},A9L:function(E){if(A.aa0(this.Ag8,E))return;this.Ag8=E;},A9K:function(E){
if(A.aa0(this.Ag7,E))return;this.Ag7=E;},_Init:function(aArg){A.Core.O._Init.call(
this,aArg);this.__proto__=C.Ft;this.H(Cc);},_Mark:function(D){var B;A.Core.O._Mark.
call(this,D);if((B=this.ARI)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.
Ag8)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.Ag7)&&((B=B[0])._cycle
!=D))B._Mark(B._cycle=D);},_className:"Demonstrator::ListHeader"};C.AM$={Dk:null
,AaN:null,WE:null,WD:null,WC:null,M$:null,M_:null,KM:null,LD:false,KA:false,BA1:
false,Ai:function(Ae){var B;A.acn.Ahh.Ai.call(this,Ae);var G8=((Ae&0x10)===0x10);
var Fn=((Ae&0x20)===0x20);var Bdc=(this.WC.Zs||this.WD.Zs)||this.WE.Zs;if(Bdc)this.
AaN.L(A.jb.Text);else this.AaN.L(A.jb.Bc);this.LD=G8;this.KA=Fn;this.BA1=Bdc;},Az5:
function(G){this.An();if((!this.WC.Zs&&!this.WD.Zs)&&!this.WE.Zs){var UZ=this.AJJ(
this.AD_(),this.Arb());var AcZ=this.AD5();this.KM.Jm(UZ);if(AcZ>UZ)this.Ln(UZ);A.
pe(this.Dk,this);}},A24:function(G){this.An();},BkK:function(G){var B;var FZ=this.
M$.GW;var Cy=(A.acg.Text.isPrototypeOf(B=this.M$.Cg)?B:null);if(!Cy)return;Cy.R(
A.abl(FZ+1900,4,10));Cy.S(A.aaL(A.fl.Af));Cy.L(A.jb.Text);Cy.A7(0x12);Cy.H(A.abK(
Cy.M,[(B=this.M$.M)[2]-B[0],this.M$.GY]));},BkJ:function(G){var B;var FZ=this.M_.
GW;var Cy=(A.acg.Text.isPrototypeOf(B=this.M_.Cg)?B:null);if(!Cy)return;Cy.R(A.abl(
FZ+1,2,10)+UM);Cy.S(A.aaL(A.fl.Af));Cy.L(A.jb.Text);Cy.A7(0x12);Cy.H(A.abK(Cy.M,[(
B=this.M_.M)[2]-B[0],this.M_.GY]));},BkH:function(G){var B;var FZ=this.KM.GW;var
Cy=(A.acg.Text.isPrototypeOf(B=this.KM.Cg)?B:null);if(!Cy)return;Cy.R(A.abl(FZ+1
,2,10)+UM);Cy.S(A.aaL(A.fl.Af));Cy.L(A.jb.Text);Cy.A7(0x12);Cy.H(A.abK(Cy.M,[(B=
this.KM.M)[2]-B[0],this.KM.GY]));},Arb:function(){return 1900+((((-this.M$.Bt/this.
M$.GY)|0)+2)%200);},Akp:function(E){if(E<1900)E=1900;if(E>2100)E=2100;this.M$.Gj(((
E-1900)-2)*-this.M$.GY);var UZ=this.AJJ(this.AD_(),E);this.KM.Jm(UZ);if(this.AD5(
)>UZ)this.Ln(UZ);},AD_:function(){return 1+((((-this.M_.Bt/this.M_.GY)|0)+2)%12);
},Ug:function(E){if(E<1)E=1;if(E>12)E=12;this.M_.Gj(((E-1)-2)*-this.M_.GY);var UZ=
this.AJJ(E,this.Arb());this.KM.Jm(UZ);if(this.AD5()>UZ)this.Ln(UZ);},AD5:function(
){return 1+((((-this.KM.Bt/this.KM.GY)|0)+2)%this.KM.AY);},Ln:function(E){var UZ=
this.AJJ(this.AD_(),this.Arb());if(E<1)E=1;if(E>UZ)E=UZ;this.KM.Gj(((E-2)-1)*-this.
KM.GY);},AJJ:function(Afu,AcO){if(Afu===2){if(!(AcO%4)&&(!!(AcO%100)||!(AcO%400)
))return 29;else return 28;}else if((((Afu===4)||(Afu===6))||(Afu===9))||(Afu===
11))return 30;else return 31;},_Init:function(aArg){A.acn.Ahh._Init.call(this,aArg
);A.acg.CC._Init.call(this.AaN={I:this},0);A.Core.H3._Init.call(this.WE={I:this}
,0);A.Core.H3._Init.call(this.WD={I:this},0);A.Core.H3._Init.call(this.WC={I:this
},0);A.Core.CL._Init.call(this.M$={I:this},0);A.Core.CL._Init.call(this.M_={I:this
},0);A.Core.CL._Init.call(this.KM={I:this},0);this.__proto__=C.AM$;this.H(ZV);this.
AaN.H(Afk);this.AaN.NY(3);this.AaN.L(0xFFE1E1E1);this.AaN.Y(true);this.WE.H(ZW);
this.WE.AS0(WY);this.WE.ASv(0.2);this.WD.H(ZX);this.WD.AS0(WY);this.WD.ASv(0.2);
this.WC.H(ZY);this.WC.AS0(WY);this.WC.ASv(0.2);this.M$.H(ZW);this.M$.ASs(true);this.
M$.Gj(60);this.M$.AeN(30);this.M$.Jm(200);this.M_.H(ZX);this.M_.ASs(true);this.M_.
Gj(60);this.M_.AeN(30);this.M_.Jm(12);this.KM.H(ZY);this.KM.ASs(true);this.KM.Gj(
60);this.KM.AeN(30);this.KM.Jm(31);this.J(this.AaN,0);this.J(this.WE,0);this.J(this.
WD,0);this.J(this.WC,0);this.J(this.M$,0);this.J(this.M_,0);this.J(this.KM,0);this.
WE.Y8=[this,this.Az5];this.WE.Sw=[this,this.A24];this.WD.Y8=[this,this.Az5];this.
WD.Sw=[this,this.A24];this.WC.Y8=[this,this.Az5];this.WC.Sw=[this,this.A24];this.
M$.Hd=[this,this.BkK];this.M$.AwB(this.WE);this.M_.Hd=[this,this.BkJ];this.M_.AwB(
this.WD);this.KM.Hd=[this,this.BkH];this.KM.AwB(this.WC);},_Done:function(){this.
__proto__=A.acn.Ahh;this.AaN._Done();this.WE._Done();this.WD._Done();this.WC._Done(
);this.M$._Done();this.M_._Done();this.KM._Done();A.acn.Ahh._Done.call(this);},_ReInit:
function(){A.acn.Ahh._ReInit.call(this);this.AaN._ReInit();this.WE._ReInit();this.
WD._ReInit();this.WC._ReInit();this.M$._ReInit();this.M_._ReInit();this.KM._ReInit(
);},_Mark:function(D){var B;A.acn.Ahh._Mark.call(this,D);if((B=this.Dk)&&((B=B[0
])._cycle!=D))B._Mark(B._cycle=D);if((B=this.AaN)._cycle!=D)B._Mark(B._cycle=D);
if((B=this.WE)._cycle!=D)B._Mark(B._cycle=D);if((B=this.WD)._cycle!=D)B._Mark(B.
_cycle=D);if((B=this.WC)._cycle!=D)B._Mark(B._cycle=D);if((B=this.M$)._cycle!=D)
B._Mark(B._cycle=D);if((B=this.M_)._cycle!=D)B._Mark(B._cycle=D);if((B=this.KM).
_cycle!=D)B._Mark(B._cycle=D);},_className:"Demonstrator::DatePicker"};C.AGS={_class:
function(){return A.aci.Al;},0:{FileName:"./res_index/DemonstratorWhiteTile.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[40,40],FrameDelay:0,_this:
null}};C.AVi={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/DemonstratorWhiteTileSmall.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[40,40],FrameDelay:0,_this:
null}};C.Ahq={_Init:function(aArg){A.Core.O._Init.call(this,aArg);this.__proto__=
C.Ahq;this.H(EY);},_className:"Demonstrator::SelectionAreaContent"};C.AL6={Z:null
,Vg:null,Tt:null,BAA:function(G){var B;this.Tt.H(A.abI(this.Tt.M,((B=this.M)[3]-
B[1])-((B=this.Vg.M)[3]-B[1])));},_Init:function(aArg){C.Ahq._Init.call(this,aArg
);A.Core.Z._Init.call(this.Z={I:this},0);C.ALx._Init.call(this.Vg={I:this},0);C.
AU2._Init.call(this.Tt={I:this},0);this.__proto__=C.AL6;this.Z.A3(0x3F);this.Z.H(
EY);this.Z.Kg(1);this.Vg.H(Afl);this.Vg.Aj(true);this.Vg.AE2(true);this.Tt.A3(0x3
);this.Tt.H(JR);this.Tt.Aj(true);this.Tt.NV(C.ALZ);this.Tt.Bml(C.AMb);this.J(this.
Z,0);this.J(this.Vg,0);this.J(this.Tt,0);this.Bb(this.Tt);this.Z.En=[this,this.BAA
];this.Tt.Za(A._GetAutoObject(A.acp.ApZ));},_Done:function(){this.__proto__=C.Ahq;
this.Z._Done();this.Vg._Done();this.Tt._Done();C.Ahq._Done.call(this);},_ReInit:
function(){C.Ahq._ReInit.call(this);this.Z._ReInit();this.Vg._ReInit();this.Tt._ReInit(
);},_Mark:function(D){var B;C.Ahq._Mark.call(this,D);if((B=this.Z)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Vg)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Tt)._cycle!=
D)B._Mark(B._cycle=D);},_className:"Demonstrator::AnimalSelectionActions"};C.Vg={
_Init:function(aArg){C.At_._Init.call(this,aArg);this.__proto__=C.Vg;this.T(A.aaR(
A.acf.A5z));},_ReInit:function(){C.At_._ReInit.call(this);this.T(A.aaR(A.acf.A5z
));},_className:"Demonstrator::ActionsHeader"};C.ALx={Background:null,AaB:null,Ae9:
null,Ae1:null,Ae8:null,AjY:null,AjZ:null,Aj0:null,Aj1:null,Aj6:false,Ag8:function(
G){var B;this.H(A.abI(this.M,(B=this.AaB.M)[3]-B[1]));},Ag7:function(G){this.H(A.
abI(this.M,240));},AE2:function(E){if(this.Aj6===E)return;this.Aj6=E;this.AaB.AE2(
E);if(E)this.Ag8(this);else this.Ag7(this);},_Init:function(aArg){A.Core.O._Init.
call(this,aArg);A.acg.AL._Init.call(this.Background={I:this},0);C.Vg._Init.call(
this.AaB={I:this},0);C.Ae9._Init.call(this.Ae9={I:this},0);C.Ae1._Init.call(this.
Ae1={I:this},0);C.Ae8._Init.call(this.Ae8={I:this},0);A.acg.DR._Init.call(this.AjY={
I:this},0);A.acg.DR._Init.call(this.AjZ={I:this},0);A.acg.DR._Init.call(this.Aj0={
I:this},0);A.acg.DR._Init.call(this.Aj1={I:this},0);this.__proto__=C.ALx;this.H(
Afl);this.Background.A3(0x3F);this.Background.H(Afl);this.AaB.A3(0x1D);this.AaB.
H(Cc);this.Ae9.H(Acv);this.Ae1.H(Lt);this.Ae8.H(AhF);this.AjY.DI(ZU);this.AjY.DY(
ME);this.AjY.L(A.jb.Bc);this.AjZ.DI(AnY);this.AjZ.DY(Oa);this.AjZ.L(A.jb.Bc);this.
Aj0.DI(WZ);this.Aj0.DY(AnZ);this.Aj0.L(A.jb.Bc);this.Aj1.DI(AhG);this.Aj1.DY(AhH
);this.Aj1.L(A.jb.Bc);this.J(this.Background,0);this.J(this.AaB,0);this.J(this.Ae9
,0);this.J(this.Ae1,0);this.J(this.Ae8,0);this.J(this.AjY,0);this.J(this.AjZ,0);
this.J(this.Aj0,0);this.J(this.Aj1,0);this.AaB.A9L([this,this.Ag8]);this.AaB.A9K([
this,this.Ag7]);},_Done:function(){this.__proto__=A.Core.O;this.Background._Done(
);this.AaB._Done();this.Ae9._Done();this.Ae1._Done();this.Ae8._Done();this.AjY._Done(
);this.AjZ._Done();this.Aj0._Done();this.Aj1._Done();A.Core.O._Done.call(this);}
,_ReInit:function(){A.Core.O._ReInit.call(this);this.Background._ReInit();this.AaB.
_ReInit();this.Ae9._ReInit();this.Ae1._ReInit();this.Ae8._ReInit();this.AjY._ReInit(
);this.AjZ._ReInit();this.Aj0._ReInit();this.Aj1._ReInit();},_Mark:function(D){var
B;A.Core.O._Mark.call(this,D);if((B=this.Background)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.AaB)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ae9)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Ae1)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ae8)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.AjY)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
AjZ)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Aj0)._cycle!=D)B._Mark(B._cycle=D);
if((B=this.Aj1)._cycle!=D)B._Mark(B._cycle=D);},_className:"Demonstrator::ActionsMenu"
};C.Mc={Abm:null,AgS:null,Bn:null,DR:null,Aiy:function(G){},AZ3:function(s){this.
Aiy(s);},_Init:function(aArg){A.Core.O._Init.call(this,aArg);A.acg.Am._Init.call(
this.Abm={I:this},0);A.acg.Am._Init.call(this.AgS={I:this},0);A.Core.Bn._Init.call(
this.Bn={I:this},0);A.acg.DR._Init.call(this.DR={I:this},0);this.__proto__=C.Mc;
this.H(Cc);this.Abm.H(Acw);this.Abm.L(A.jb.Text);this.AgS.H(UN);this.AgS.L(A.jb.
Text);this.AgS.Cx(0);this.Bn.Kj(Ks);this.Bn.Ki(N$);this.Bn.DI(P2);this.Bn.DY(ME);
this.DR.DI(P2);this.DR.DY(N$);this.DR.L(A.jb.Bc);this.J(this.Abm,0);this.J(this.
AgS,0);this.J(this.Bn,0);this.J(this.DR,0);this.Abm.Ax(A.aaL(A.aci.TE));this.AgS.
Ax(A.aaL(A.aci.ATj));this.Bn.BM=[this,this.AZ3];},_Done:function(){this.__proto__=
A.Core.O;this.Abm._Done();this.AgS._Done();this.Bn._Done();this.DR._Done();A.Core.
O._Done.call(this);},_ReInit:function(){A.Core.O._ReInit.call(this);this.Abm._ReInit(
);this.AgS._ReInit();this.Bn._ReInit();this.DR._ReInit();},_Mark:function(D){var
B;A.Core.O._Mark.call(this,D);if((B=this.Abm)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.AgS)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Bn)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.DR)._cycle!=D)B._Mark(B._cycle=D);},_className:"Demonstrator::ActionsItem"
};C.Ae1={Afb:null,Aiy:function(G){var Af_=A.ab0(this.Afb.String,0,10);var BAL=A.
_GetAutoObject(A.acp.K_).AAG(Af_);if(BAL){Af_=Af_+1;this.Afb.R(Af_.toFixed());}}
,_Init:function(aArg){C.Mc._Init.call(this,aArg);C.Aq5._Init.call(this.Afb={I:this
},0);this.__proto__=C.Ae1;this.Afb.H(An0);this.Afb.R(An1);this.Afb.L(A.jb.Text);
this.J(this.Afb,-1);this.Abm.Ax(A.aaL(A.ach.AmM));},_Done:function(){this.__proto__=
C.Mc;this.Afb._Done();C.Mc._Done.call(this);},_ReInit:function(){C.Mc._ReInit.call(
this);this.Afb._ReInit();},_Mark:function(D){var B;C.Mc._Mark.call(this,D);if((B=
this.Afb)._cycle!=D)B._Mark(B._cycle=D);},_className:"Demonstrator::ScanAction"};
C.Ae9={UA:null,OR:null,A3O:0,Init:function(aArg){var B;A.zX([this,this.BzU],[B=A.
_GetAutoObject(A.acp.K_),B.AR9,B.AST],0);A.zX([this,this.AAb],[B=A._GetAutoObject(
A.Device.Device),B.Aq$,B.AsU],0);A.pe([this,this.AAb],this);},Ai:function(Ae){C.
Mc.Ai.call(this,Ae);this.OR.Y(!A._GetAutoObject(A.acp.K_).AwW);},Aiy:function(G){
var B;A._GetAutoObject(A.acp.K_).Bee(this);},AAb:function(G){if(A._GetAutoObject(
A.Device.Device).TemperatureUnit!==this.A3O){switch(A._GetAutoObject(A.Device.Device
).TemperatureUnit){case 0:this.OR.R(A.abk(A._GetAutoObject(A.acp.K_).Wz/100,0,1)
);break;case 1:{var AtZ=A._GetAutoObject(A.Device.Converter).AUB(A._GetAutoObject(
A.acp.K_).Wz/100,0,A._GetAutoObject(A.Device.Device).TemperatureUnit);this.OR.R(
A.abk(AtZ,0,1));}break;default:A.ab5("%s%e",An2,A._GetAutoObject(A.Device.Device
).TemperatureUnit);}this.A3O=A._GetAutoObject(A.Device.Device).TemperatureUnit;}
},BzD:function(G){var B;var Af8=A.abX(this.OR.String,0);Af8=A._GetAutoObject(A.Device.
Converter).AUB(Af8,A._GetAutoObject(A.Device.Device).TemperatureUnit,0);Af8*=100;
A._GetAutoObject(A.acp.K_).AFi(Math.round(Af8)|0);},BzU:function(G){this.An();},
_Init:function(aArg){C.Mc._Init.call(this,aArg);A.acq.UA._Init.call(this.UA={I:this
},0);C.OR._Init.call(this.OR={I:this},0);this.__proto__=C.Ae9;var B;this.UA.H(An3
);this.UA.A9F(A.aaR(A.acf.A4D));this.OR.H(Afm);this.OR.R(An4);this.OR.L(A.jb.Text
);this.OR.Blg(true);this.A3O=A._GetAutoObject(A.Device.Device).TemperatureUnit;this.
J(this.UA,0);this.J(this.OR,0);this.Abm.Ax(A.aaL(A.ach.Abl));this.UA.As([B=A._GetAutoObject(
A.acp.K_),B.AR9,B.AST]);this.UA.OnSetAppearance(A._GetAutoObject(A.acx.Auu));this.
OR.Dk=[this,this.BzD];this.Init(aArg);},_Done:function(){this.__proto__=C.Mc;this.
UA._Done();this.OR._Done();C.Mc._Done.call(this);},_ReInit:function(){C.Mc._ReInit.
call(this);this.UA._ReInit();this.OR._ReInit();this.UA.A9F(A.aaR(A.acf.A4D));},_Mark:
function(D){var B;C.Mc._Mark.call(this,D);if((B=this.UA)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.OR)._cycle!=D)B._Mark(B._cycle=D);},_className:"Demonstrator::TemperatureAction"
};C.AqO={Q:null,CC:null,Bn:null,Ags:null,AmR:null,AmQ:null,AqT:null,Text:null,Hg:
null,Am:null,CW:null,AqS:null,AqU:null,AoZ:false,Bj:function(aSize){this.Hg.H(A.
abK(this.Hg.M,aSize));this.CC.Aw3(1);this.CC.Jh(0,40);this.CC.Fb(0,aSize[0]-20,20
,12.5,12.5,-90,90,10);this.CC.Fb(0,20,20,12.5,12.5,90,270,10);this.CC.Vx(0);},Ai:
function(Ae){var B;var F;A.Core.O.Ai.call(this,Ae);var Ir=((Ae&0x40)===0x40);if(
Ir){if(!!this.Q)this.Text.R((F=this.Q,F[1].call(F[0])));this.Ags.Ar(true);this.Am.
Y(false);}else{if(!!this.Q)this.Text.R((F=this.Q,F[1].call(F[0])));this.Ags.Ar(false
);this.CW.Y(false);this.Am.Y(true);}this.AoZ=Ir;},Aiy:function(G){var B;if(!((this.
U&0x80)===0x80))this.Ie().AMo(this);},A7T:function(G){},Bak:function(s){this.A7T(
s);},Bji:function(G){var B;var F;if(!this.Q||!(F=this.Q,F[1].call(F[0])).length)
this.CW.H(A.abM(this.CW.M,A.aaI(this.Text.M)[0]));else{this.CW.H(A.abM(this.CW.M
,this.Text.AOo(0)[2]+2));this.CW.H(A.abO(this.CW.M,this.Text.AOo(0)[1]));this.CW.
H(A.abI(this.CW.M,(B=this.Text.AOo(0))[3]-B[1]));}this.Am.H(A.abM(this.Am.M,this.
Text.M[0]-((B=this.Am.M)[2]-B[0])));},A7R:function(G){},Baj:function(s){this.A7R(
s);},As:function(E){if(A.aaZ(this.Q,E))return;if(!!this.Q)A.z$([this,this.J5],this.
Q,0);this.Q=E;if(!!E)A.zX([this,this.J5],E,0);if(!!E)A.pe([this,this.J5],this);}
,J5:function(G){this.An();},BkM:function(G){var B;if(((this.U&0x80)===0x80))this.
Ie().AB$(this);},Bem:function(G){},_Init:function(aArg){A.Core.O._Init.call(this
,aArg);A.Graphics.Hs._Init.call(this.CC={I:this},0);A.Core.Bn._Init.call(this.Bn={
I:this},0);A.acl.Tz._Init.call(this.Ags={I:this},0);A.Core.BL._Init.call(this.AmR={
I:this},0);A.Core.BL._Init.call(this.AmQ={I:this},0);A.Core.BL._Init.call(this.AqT={
I:this},0);A.acg.Text._Init.call(this.Text={I:this},0);A.acg.Hg._Init.call(this.
Hg={I:this},0);A.acg.Am._Init.call(this.Am={I:this},0);A.acg.AL._Init.call(this.
CW={I:this},0);A.Core.BL._Init.call(this.AqS={I:this},0);A.Core.BL._Init.call(this.
AqU={I:this},0);this.__proto__=C.AqO;var B;this.H(Afn);this.Bn.A3(0x3F);this.Bn.
Kj(Ks);this.Bn.Ki(Asq);this.Bn.DI(Ob);this.Bn.DY(Re);this.Ags.Fi(530);this.Ags.Ue(
530);this.AmR.Filter=143;this.AmQ.Filter=45;this.AqT.Filter=1;this.Text.A3(0x3F);
this.Text.H(Afn);this.Text.IZ(true);this.Text.A7(0x12);this.Text.L(0xFFB3B3B3);this.
Hg.H(Afn);this.Hg.L(0xFFB3B3B3);this.Hg.NY(1);this.Am.H(S0);this.CW.H(Axx);this.
CW.L(0xFFB3B3B3);this.CW.Y(false);this.AqS.Filter=138;this.AqU.Filter=137;this.J(
this.Bn,0);this.J(this.Text,0);this.J(this.Hg,0);this.J(this.Am,0);this.J(this.CW
,0);this.Bn.Ll=[this,this.Aiy];this.Ags.Q=[B=this.CW,B.Fh,B.Y];this.AmR.BM=[this
,this.Bak];this.AmR.DX=[this,this.Bak];this.AmQ.BM=[this,this.Baj];this.AmQ.DX=[
this,this.Baj];this.AqT.BM=[this,this.BkM];this.Text.QZ([this,this.Bji]);this.Text.
S(A.aaL(A.fl.Ak));this.Hg.Zc(this.CC);this.Am.Ax(null);this.AqS.BM=[this,this.Bem
];this.AqU.BM=[this,this.Bem];},_Done:function(){this.__proto__=A.Core.O;this.CC.
_Done();this.Bn._Done();this.Ags._Done();this.AmR._Done();this.AmQ._Done();this.
AqT._Done();this.Text._Done();this.Hg._Done();this.Am._Done();this.CW._Done();this.
AqS._Done();this.AqU._Done();A.Core.O._Done.call(this);},_ReInit:function(){A.Core.
O._ReInit.call(this);this.CC._ReInit();this.Bn._ReInit();this.Ags._ReInit();this.
AmR._ReInit();this.AmQ._ReInit();this.AqT._ReInit();this.Text._ReInit();this.Hg.
_ReInit();this.Am._ReInit();this.CW._ReInit();this.AqS._ReInit();this.AqU._ReInit(
);this.Text.S(A.aaL(A.fl.Ak));},_Mark:function(D){var B;A.Core.O._Mark.call(this
,D);if((B=this.Q)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.CC)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.Bn)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
Ags)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AmR)._cycle!=D)B._Mark(B._cycle=D);
if((B=this.AmQ)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AqT)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Text)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Hg)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.Am)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
CW)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AqS)._cycle!=D)B._Mark(B._cycle=D);
if((B=this.AqU)._cycle!=D)B._Mark(B._cycle=D);},_className:"Demonstrator::InputView"
};C.Ad8={Background:null,Yc:null,_Init:function(aArg){A.Core.O._Init.call(this,aArg
);A.acg.AL._Init.call(this.Background={I:this},0);C.Yc._Init.call(this.Yc={I:this
},0);this.__proto__=C.Ad8;var B;this.H(S1);this.Background.H(S1);this.Yc.A3(0x1D
);this.Yc.H(Asr);this.J(this.Background,0);this.J(this.Yc,0);this.Yc.As([B=A._GetAutoObject(
A.acp.Agu),B.A8I,B.AFd]);},_Done:function(){this.__proto__=A.Core.O;this.Background.
_Done();this.Yc._Done();A.Core.O._Done.call(this);},_ReInit:function(){A.Core.O.
_ReInit.call(this);this.Background._ReInit();this.Yc._ReInit();},_Mark:function(
D){var B;A.Core.O._Mark.call(this,D);if((B=this.Background)._cycle!=D)B._Mark(B.
_cycle=D);if((B=this.Yc)._cycle!=D)B._Mark(B._cycle=D);},_className:"Demonstrator::FilterRow"
};C.OR={Init:function(aArg){var B;A.zX([this,this.AAb],[B=A._GetAutoObject(A.Device.
Device),B.Aq$,B.AsU],0);A.pe([this,this.AAb],this);},Ai:function(Ae){var B;C.Aq5.
Ai.call(this,Ae);var Ir=((this.U&0x40)===0x40);if(!Ir&&(this.String.length>0))this.
Text.R(((this.String+Axy)+A._GetAutoObject(A.acj.Temperature).Alo())+String.fromCharCode(
0x0A));else this.Text.R(this.String+String.fromCharCode(0x0A));if(this.Ei>this.String.
length)this.Ei=this.String.length;},AAb:function(G){this.An();},_Init:function(aArg
){C.Aq5._Init.call(this,aArg);this.__proto__=C.OR;this.Init(aArg);},_className:"Demonstrator::TemperatureInputView"
};C.Aq5={B7:null,Dk:null,IK:null,Co:null,Amk:null,R7:null,KH:null,Bn:null,Text:null
,CW:null,Aqa:null,ArN:null,CC:null,Hg:null,Aq7:null,AqC:null,Aqm:null,String:A.jV
,Ei:0,AQ:0xFFB3B3B3,ANb:false,MM:false,Bj:function(aSize){this.Hg.H(A.abK(this.Hg.
M,aSize));this.CC.Aw3(1);this.CC.Jh(0,40);this.CC.Fb(0,aSize[0]-20,20,12.5,12.5,-
90,90,10);this.CC.Fb(0,20,20,12.5,12.5,90,270,10);this.CC.Vx(0);},Ai:function(Ae
){var B;A.acn.I2.Ai.call(this,Ae);if(((Ae&0x40)===0x40))this.IK.Ar(true);else{this.
IK.Ar(false);this.CW.Y(false);}},A3Z:function(G){var B;var Bd=this.Text.M;var Np=
0;var Nq=0;if(this.CW.Eo[0]<Bd[0])Np=Bd[0]-this.CW.Eo[0];if(this.CW.Eo[0]>Bd[2])
Np=Bd[2]-this.CW.Eo[0];if(this.CW.Eo[1]<Bd[1])Nq=Bd[1]-this.CW.Eo[1];if(this.CW.
Ex[1]>Bd[3])Nq=Bd[3]-this.CW.Ex[1];if(!!Np||!!Nq)this.Text.Gj(A.abf(this.Text.Bt
,[Np,Nq]));Np=this.Text.Bt[0];Nq=this.Text.Bt[1];var C4=[(B=this.Text.Df())[2]-B[
0],B[3]-B[1]];if(C4[0]<=((B=this.Text.M)[2]-B[0]))Np=0;if(C4[1]<=((B=this.Text.M
)[3]-B[1]))Nq=0;this.Text.Gj([Np,Nq]);},Al0:function(G){if(!this.B7)return;var A3q=
this.Text.AGm(this.Ei);var pos=this.Text.AeY(A3q);this.CW.DY(A.abe(pos,[0,this.B7.
Ascent]));this.CW.DI(A.abf(pos,[0,this.B7.Descent]));if(this.IK.By){this.IK.Ar(false
);this.IK.Ar(true);}if(this.MM){A.pe([this,this.A3Z],this);this.MM=false;}},Az9:
function(G){if(!this.A6A(0x80))this.Ie().AMo(this);var EC=this.Text.ATn(this.Bn.
HW);var U4=this.Text.Anz(EC);if(U4!==this.Ei){this.Ei=U4;A.pe([this,this.Al0],this
);this.MM=true;}},Az3:function(G){if(!this.B7)return;var EC=this.Text.AGm(this.Ei
);if(this.Co.CN===6){EC=[EC[0]-1,EC[1]];if(this.Text.Anz(EC)===this.Ei){EC=[EC[0
],EC[1]-1];EC=[this.Text.ACw(EC[1]).length,EC[1]];}}if(this.Co.CN===7){EC=[EC[0]+
1,EC[1]];if(this.Text.Anz(EC)===this.Ei){EC=[EC[0],EC[1]+1];EC=[0,EC[1]];}}var U4=
this.Text.Anz(EC);if(U4!==this.Ei){this.Ei=U4;A.pe([this,this.Al0],this);this.MM=
true;}},Bd7:function(G){if(!this.Ei)return;this.R(A.ab1(this.String,this.Ei-1,1)
);this.Ei=this.Ei-1;this.MM=true;A.pe(this.Dk,this);},Az4:function(G){if(this.Ei>=
this.String.length)return;this.R(A.ab1(this.String,this.Ei,1));this.MM=true;A.pe(
this.Dk,this);},Bea:function(G){if(this.String.length>=15)return;var Bx0=this.KH.
DM;var AtX=String.fromCharCode(Bx0);this.R(A.abU(this.String,AtX,this.Ei));this.
Ei=this.Ei+AtX.length;this.MM=true;A.pe(this.Dk,this);},R:function(E){if(this.String===
E)return;this.String=E;if(this.Ei>(E.length+1))this.Ei=E.length;this.Text.R(E+String.
fromCharCode(0x0A));this.MM=true;this.Text.Gj(Ks);},L:function(E){if(this.AQ===E
)return;this.AQ=E;this.Text.L(E);this.CW.L(E);this.Hg.L(E);},S:function(E){if(this.
B7===E)return;this.B7=E;this.Text.S(E);this.MM=true;this.Text.Gj(Ks);},Ben:function(
G){if(this.ANb===false)return;if(this.String.indexOf(String.fromCharCode(0x2E),0
)>=0)return;if(this.String.length>=15)return;this.R(A.abU(this.String,UM,this.Ei
));this.Ei=this.Ei+1;this.MM=true;A.pe(this.Dk,this);},Blg:function(E){if(this.ANb===
E)return;this.ANb=E;if(E===false){var Be1=this.String.indexOf(String.fromCharCode(
0x2E),0);if(Be1>=0)this.R(A.abV(this.String,Be1));}this.MM=true;this.Text.Gj(Ks);
},BzL:function(G){if(this.A6A(0x80))this.Ie().AB$(this);this.An();},Bzy:function(
G){var U4=this.String.length;if(U4!==this.Ei){this.Ei=U4;A.pe([this,this.Al0],this
);this.MM=true;}},BzC:function(G){if(!!this.Ei){this.Ei=0;A.pe([this,this.Al0],this
);this.MM=true;}},_Init:function(aArg){A.acn.I2._Init.call(this,aArg);A.acl.Tz._Init.
call(this.IK={I:this},0);A.Core.BL._Init.call(this.Co={I:this},0);A.Core.BL._Init.
call(this.Amk={I:this},0);A.Core.BL._Init.call(this.R7={I:this},0);A.Core.BL._Init.
call(this.KH={I:this},0);A.Core.Bn._Init.call(this.Bn={I:this},0);A.acg.Text._Init.
call(this.Text={I:this},0);A.acg.DR._Init.call(this.CW={I:this},0);A.Core.BL._Init.
call(this.Aqa={I:this},0);A.Core.BL._Init.call(this.ArN={I:this},0);A.Graphics.Hs.
_Init.call(this.CC={I:this},0);A.acg.Hg._Init.call(this.Hg={I:this},0);A.Core.BL.
_Init.call(this.Aq7={I:this},0);A.Core.BL._Init.call(this.AqC={I:this},0);A.Core.
BL._Init.call(this.Aqm={I:this},0);this.__proto__=C.Aq5;var B;this.H(Afn);this.IK.
B3=false;this.IK.Cu=true;this.IK.Fi(500);this.IK.Ue(500);this.Co.Filter=147;this.
Amk.Filter=45;this.R7.Filter=44;this.KH.Filter=143;this.Bn.A3(0x3F);this.Bn.Kj(Re
);this.Bn.Ki(Ob);this.Bn.DI(Asq);this.Bn.DY(Ks);this.Bn.AEZ(3);this.Text.A3(0x3F
);this.Text.H(Afn);this.Text.KP(false);this.Text.A7(0x12);this.Text.R(A.jV);this.
Text.L(0xFFB3B3B3);this.CW.DI(Axz);this.CW.DY(AxA);this.CW.A_e(2);this.CW.A_d(2);
this.CW.L(0xFFB3B3B3);this.CW.Y(false);this.Aqa.Filter=138;this.ArN.Filter=137;this.
Hg.H(Afn);this.Hg.L(0xFFB3B3B3);this.Hg.NY(1);this.Aq7.Filter=1;this.AqC.Filter=
41;this.Aqm.Filter=42;this.J(this.Bn,0);this.J(this.Text,0);this.J(this.CW,0);this.
J(this.Hg,0);this.IK.Q=[B=this.CW,B.Fh,B.Y];this.Co.BM=[this,this.Az3];this.Co.DX=[
this,this.Az3];this.Amk.BM=[this,this.Bd7];this.Amk.DX=[this,this.Bd7];this.R7.BM=[
this,this.Az4];this.R7.DX=[this,this.Az4];this.KH.BM=[this,this.Bea];this.KH.DX=[
this,this.Bea];this.Bn.BM=[this,this.Az9];this.Text.QZ([this,this.Al0]);this.Text.
S(A.aaL(A.fl.Ak));this.B7=A.aaL(A.fl.Ak);this.Aqa.BM=[this,this.Ben];this.ArN.BM=[
this,this.Ben];this.Hg.Zc(this.CC);this.Aq7.BM=[this,this.BzL];this.AqC.BM=[this
,this.BzC];this.Aqm.BM=[this,this.Bzy];},_Done:function(){this.__proto__=A.acn.I2;
this.IK._Done();this.Co._Done();this.Amk._Done();this.R7._Done();this.KH._Done();
this.Bn._Done();this.Text._Done();this.CW._Done();this.Aqa._Done();this.ArN._Done(
);this.CC._Done();this.Hg._Done();this.Aq7._Done();this.AqC._Done();this.Aqm._Done(
);A.acn.I2._Done.call(this);},_ReInit:function(){A.acn.I2._ReInit.call(this);this.
IK._ReInit();this.Co._ReInit();this.Amk._ReInit();this.R7._ReInit();this.KH._ReInit(
);this.Bn._ReInit();this.Text._ReInit();this.CW._ReInit();this.Aqa._ReInit();this.
ArN._ReInit();this.CC._ReInit();this.Hg._ReInit();this.Aq7._ReInit();this.AqC._ReInit(
);this.Aqm._ReInit();this.Text.S(A.aaL(A.fl.Ak));this.S(A.aaL(A.fl.Ak));},_Mark:
function(D){var B;A.acn.I2._Mark.call(this,D);if((B=this.B7)&&(B._cycle!=D))B._Mark(
B._cycle=D);if((B=this.Dk)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.
IK)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Co)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Amk)._cycle!=D)B._Mark(B._cycle=D);if((B=this.R7)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.KH)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Bn)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Text)._cycle!=D)B._Mark(B._cycle=D);if((B=this.CW)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.Aqa)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
ArN)._cycle!=D)B._Mark(B._cycle=D);if((B=this.CC)._cycle!=D)B._Mark(B._cycle=D);
if((B=this.Hg)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Aq7)._cycle!=D)B._Mark(B.
_cycle=D);if((B=this.AqC)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Aqm)._cycle!=
D)B._Mark(B._cycle=D);},_className:"Demonstrator::NumberInput"};C.Ae8={LabelDataSync:
null,Aiy:function(G){var B;A.pe([B=A._GetAutoObject(A.acr.Aca),B.BA8],this);},_Init:
function(aArg){C.Mc._Init.call(this,aArg);A.kR.CG._Init.call(this.LabelDataSync={
I:this},0);this.__proto__=C.Ae8;this.LabelDataSync.H(An5);this.LabelDataSync.R(A.
aaR(A.acf.A5p));this.LabelDataSync.L(A.jb.Text);this.J(this.LabelDataSync,0);this.
Abm.Ax(A.aaL(C.AUs));this.LabelDataSync.S(A.aaL(A.fl.Af));this.LabelDataSync.A2(
A.aaL(A.fl.Ak));},_Done:function(){this.__proto__=C.Mc;this.LabelDataSync._Done(
);C.Mc._Done.call(this);},_ReInit:function(){C.Mc._ReInit.call(this);this.LabelDataSync.
_ReInit();this.LabelDataSync.R(A.aaR(A.acf.A5p));this.LabelDataSync.S(A.aaL(A.fl.
Af));this.LabelDataSync.A2(A.aaL(A.fl.Ak));},_Mark:function(D){var B;C.Mc._Mark.
call(this,D);if((B=this.LabelDataSync)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Demonstrator::SyncAction"};C.AUs={_class:function(){return A.aci.Al;},0:{FileName:
"./res_index/DemonstratorSyncIcon.png",Format:A._PIXEL_FORMAT_NATIVE,NoOfFrames:
1,FrameSize:[50,60],FrameDelay:0,_this:null}};C.AaX={TimespanDaysToString:null,ACy:
function(aIndex){if(this.ACs()>aIndex)return this.TimespanDaysToString.BS(aIndex
);A.ab5("%s",AxB);return A.jV;},ACs:function(){return 4;},C7:function(aIndex){var
AiZ=0;switch(aIndex){case 0:AiZ=0;break;case 1:AiZ=1;break;case 2:AiZ=2;break;case
3:AiZ=3;break;default:throw new Error(Ass+aIndex.toFixed());}return AiZ;},_Init:
function(aArg){A.acv.Amm._Init.call(this,aArg);A.Device.TimespanDaysToString._Init.
call(this.TimespanDaysToString={I:this},0);this.__proto__=C.AaX;},_Done:function(
){this.__proto__=A.acv.Amm;this.TimespanDaysToString._Done();A.acv.Amm._Done.call(
this);},_ReInit:function(){A.acv.Amm._ReInit.call(this);this.TimespanDaysToString.
_ReInit();},_Mark:function(D){var B;A.acv.Amm._Mark.call(this,D);if((B=this.TimespanDaysToString
)._cycle!=D)B._Mark(B._cycle=D);},_className:"Demonstrator::DatePickerUnitDD"};C.
BET={GD:0,AU9:1,Hb:2,Year:3};C.AB8={_class:function(){return A.aci.Al;},0:{FileName:
"./res_index/DemonstratorEarTagIcon.png",Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:
2,FrameSize:[37,37],FrameDelay:0,_this:null}};C.AGz={_class:function(){return A.
aci.Al;},0:{FileName:"./res_index/DemonstratorTransponderEarTagIcon.png",Format:
A._PIXEL_FORMAT_ALPHA8,NoOfFrames:2,FrameSize:[37,37],FrameDelay:0,_this:null}};
C._Init=function(){C.AU2.__proto__=A.acn.Menu;C.AT1.__proto__=A.Core.O;C.ALZ.__proto__=
C.Ba;C.Md.__proto__=A.Core.O;C.Yc.__proto__=C.AqO;C.AaY.__proto__=A.Core.O;C.Avb.
__proto__=A.acn.Ahj;C.AMb.__proto__=C.Ft;C.At_.__proto__=C.Ft;C.Ba.__proto__=A.Core.
O;C.Ft.__proto__=A.Core.O;C.AM$.__proto__=A.acn.Ahh;C.Ahq.__proto__=A.Core.O;C.AL6.
__proto__=C.Ahq;C.Vg.__proto__=C.At_;C.ALx.__proto__=A.Core.O;C.Mc.__proto__=A.Core.
O;C.Ae1.__proto__=C.Mc;C.Ae9.__proto__=C.Mc;C.AqO.__proto__=A.Core.O;C.Ad8.__proto__=
A.Core.O;C.OR.__proto__=C.Aq5;C.Aq5.__proto__=A.acn.I2;C.Ae8.__proto__=C.Mc;C.AaX.
__proto__=A.acv.Amm;};C._ReInit=function(){};C.DE=function(D){var B;if((B=C.Background[
0]._this)&&(B._cycle!=D))B._Done(C.Background[0]._this=null);if((B=C.AMx[0]._this
)&&(B._cycle!=D))B._Done(C.AMx[0]._this=null);if((B=C.AMy[0]._this)&&(B._cycle!=
D))B._Done(C.AMy[0]._this=null);if((B=C.AMz[0]._this)&&(B._cycle!=D))B._Done(C.AMz[
0]._this=null);if((B=C.AMA[0]._this)&&(B._cycle!=D))B._Done(C.AMA[0]._this=null);
if((B=C.APD[0]._this)&&(B._cycle!=D))B._Done(C.APD[0]._this=null);if((B=C.Filter[
0]._this)&&(B._cycle!=D))B._Done(C.Filter[0]._this=null);if((B=C.ARb[0]._this)&&(
B._cycle!=D))B._Done(C.ARb[0]._this=null);if((B=C.Ajf[0]._this)&&(B._cycle!=D))B.
_Done(C.Ajf[0]._this=null);if((B=C.AMe[0]._this)&&(B._cycle!=D))B._Done(C.AMe[0].
_this=null);if((B=C.Ar2[0]._this)&&(B._cycle!=D))B._Done(C.Ar2[0]._this=null);if((
B=C.AUx[0]._this)&&(B._cycle!=D))B._Done(C.AUx[0]._this=null);if((B=C.AGS[0]._this
)&&(B._cycle!=D))B._Done(C.AGS[0]._this=null);if((B=C.AVi[0]._this)&&(B._cycle!=
D))B._Done(C.AVi[0]._this=null);if((B=C.AUs[0]._this)&&(B._cycle!=D))B._Done(C.AUs[
0]._this=null);if((B=C.AB8[0]._this)&&(B._cycle!=D))B._Done(C.AB8[0]._this=null);
if((B=C.AGz[0]._this)&&(B._cycle!=D))B._Done(C.AGz[0]._this=null);};return C;})(
);

/* VitalControl demonstration application, © Urban GmbH & Co.KG 2023 */