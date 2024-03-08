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
var Cc=[0,0,370,60];var BF=[360,0,370,60];var EZ=[0,0,370,710];var Hj="Unknown animalType";
var I$=[58,10,120,50];var Io=[0,0,60,60];var OZ=[120,0,360,60];var P0="\u2015";var
P1=[0,0,240,60];var CO=[0,0,40,60];var E8=[100,0,130,60];var Lt=[43,0,100,60];var
P2=[125,0,240,60];var JX=[0,0];var N$=[100,0];var P3=[100,60];var MF=[0,60];var S2=[
107,0];var UM=[240,0];var ZU=[240,60];var WT=[107,60];var Ip="%d.%m.%Y";var UN="Unhandled date unit: ";
var ZV=[0,0,200,180];var WU=[36,0,200,30];var ZW=[0,30,160,60];var WV="Text";var
ZX=[0,70,40,110];var ZY=[44,70,156,110];var UO=[160,70,200,110];var WW=[7,2,27,25
];var Rf=[0,30,170,180];var ZZ=[170,34,190,57];var O0=[0,0,40,40];var Rg=[0,40];
var WX=[40,40];var WY=[40,0];var WZ=[0,0,370,100];var W0=[20,0,290,60];var Z0=[0
,60,370,100];var W1="Cap";var W2=[20,0,370,60];var S3=[310,0,370,60];var UP=[370
,0];var Z1=[370,60];var AcD="UpdateData is called for the base class ListItemBase. Please make "+
"sure this method is implemented by a derived class.";var S4=".";var Z2=[0,0,170
,150];var Afp=[0,59,170,90];var Z3=[110,0,170,150];var W3=[0,30];var Z4=[50,0,100
,150];var Z5=[0,0,40,150];var Ak0=[0,0,370,240];var JY=[0,60,370,710];var Z6=[0,
0,370,300];var Lu=[0,60,370,300];var AhK=[0,60,370,120];var An8=[0,120,370,180];
var Oa=[0,180,370,240];var W4=[0,240,370,300];var An9=[370,120];var AhL=[0,120];
var AhM=[370,180];var AcE=[0,180];var UQ=[370,240];var An_=[0,240];var An$=[370,
300];var Aoa=[0,300];var Aob=[0,0,50,60];var Afq=[50,0,100,60];var Ak1="Unhandled scan type";
var AxP=[3,11,115,51];var AxQ=[50,0];var O1=[50,60];var Rh=[100,10,370,50];var AxR=
"276000901234567";var UR=[3,10,57,50];var AsD=[3,11,55,50];var AxS="Unhandled temperature unit";
var AxT=[110,0,260,60];var AxU=[235,10,370,50];var Aoc="39.5";var Afr=[0,0,270,40
];var Aod=[270,0];var IN=[270,40];var Aoe=[150,0,170,40];var W5=[205,10,207,30];
var Ak2=[0,0,370,40];var AsE=[50,0,320,40];var AsF=" ";var AsG=[135,23];var AsH=[
135,0];var Ak3=[100,0,370,60];var AsI="Error: Nullpointer Exception";var AxV="Unknown Date Piecker Unit Index: ";
var AxW="Unhandled scan type:";
C.Background={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/DemonstratorBackground.png"
,Format:A._PIXEL_FORMAT_NATIVE,NoOfFrames:1,FrameSize:[1000,740],FrameDelay:0,_this:
null}};C.AMN={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/DemonstratorButtonLeft.png"
,Format:A._PIXEL_FORMAT_NATIVE,NoOfFrames:1,FrameSize:[40,40],FrameDelay:0,_this:
null}};C.AMO={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/DemonstratorButtonLeftPressed.png"
,Format:A._PIXEL_FORMAT_NATIVE,NoOfFrames:1,FrameSize:[40,40],FrameDelay:0,_this:
null}};C.AMP={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/DemonstratorButtonRight.png"
,Format:A._PIXEL_FORMAT_NATIVE,NoOfFrames:1,FrameSize:[40,40],FrameDelay:0,_this:
null}};C.AMQ={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/DemonstratorButtonRightPressed.png"
,Format:A._PIXEL_FORMAT_NATIVE,NoOfFrames:1,FrameSize:[40,40],FrameDelay:0,_this:
null}};C.APU={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/DemonstratorIconDatePicker.png"
,Format:A._PIXEL_FORMAT_NATIVE,NoOfFrames:1,FrameSize:[20,23],FrameDelay:0,_this:
null}};C.Filter={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/DemonstratorFilter.png"
,Format:A._PIXEL_FORMAT_NATIVE,NoOfFrames:1,FrameSize:[15,16],FrameDelay:0,_this:
null}};C.ARs={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/DemonstratorMenuIcon.png"
,Format:A._PIXEL_FORMAT_NATIVE,NoOfFrames:1,FrameSize:[20,16],FrameDelay:0,_this:
null}};C.Ajj={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/DemonstratorArrowRight.png"
,Format:A._PIXEL_FORMAT_NATIVE,NoOfFrames:1,FrameSize:[17,16],FrameDelay:0,_this:
null}};C.AMu={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/DemonstratorArrowDown.png"
,Format:A._PIXEL_FORMAT_NATIVE,NoOfFrames:1,FrameSize:[17,16],FrameDelay:0,_this:
null}};C.Asd={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/DemonstratorScanIcon.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:2,FrameSize:[37,37],FrameDelay:0,_this:
null}};C.AUP={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/DemonstratorTemperatureIcon.png"
,Format:A._PIXEL_FORMAT_NATIVE,NoOfFrames:1,FrameSize:[17,37],FrameDelay:0,_this:
null}};C.AVi={Ad2:null,AX:null,AR:null,Background:null,H5:null,AD:null,IK:null,Dk:
null,Li:null,A7C:null,A75:0,Bk:function(aSize){A.acn.Menu.Bk.call(this,aSize);this.
IK.H(A.abP(this.IK.M,this.AD.ON));this.IK.H([].concat(this.IK.M.slice(0,3),aSize[
1]));},Ai:function(Ae){var B;A.acn.Menu.Ai.call(this,Ae);var Iw=((Ae&0x40)===0x40
);if(Iw&&(this.AD.Gl<0))this.AD.G0(0);},NX:function(E){if(this.Li===E)return;this.
Li=E;this.AD.NX(E);},BmQ:function(E){var B;if(this.A7C===E)return;if(!!this.Ad2){
this.HL(this.Ad2);this.Ad2=null;}if(!!E){this.Ad2=(C.Fu.isPrototypeOf(B=A._NewObject(
E,0))?B:null);this.Ad2.A99([this,this.Aki]);this.Ad2.A9_([this,this.Akj]);this.Ad2.
BmW(null);this.J(this.Ad2,0);this.AD.A_e((B=this.Ad2.M)[3]-B[1]);}else this.AD.A_e(
0);this.IK.H(A.abP(this.IK.M,this.AD.ON));A.pe([this,this.Fb],this);this.A7C=E;}
,He:function(G){var B;var F_=this.AD.GY;var Aa=(C.Ba.isPrototypeOf(B=this.AD.Ch)?
B:null);if(!Aa)return;Aa.Zi(this.AX);Aa.Ce(F_);Aa.Zj(this.AR);Aa.H(A.abK(Aa.M,[(
B=this.AD.M)[2]-B[0],this.AD.GH]));},Zi:function(E){var B;if(this.AX===E)return;
if(!!this.AX){A.z9([this,this.Ce],this.AX,0);A.z$([this,this.An1],[B=this.AX,B.Fh
,B.Fl],0);}this.AX=E;if(!!E){A.zV([this,this.Ce],E,0);A.zX([this,this.An1],[E,E.
Fh,E.Fl],0);}A.pe([this,this.Ce],this);A.pe([this,this.An1],this);},Ce:function(
G){if(!!this.AX){this.AD.Jr(this.AX.Cd());this.AD.Abv(0,this.AD.AY-1);}else this.
AD.Jr(0);if(this.A75!==this.AD.AY){this.AD.ABr(null,null);this.A75=this.AD.AY;}A.
pe([this,this.Fb],this);},Akj:function(G){var B;this.H(A.abI(this.M,(B=this.AD.AOE(
))[3]-B[1]));},Aki:function(G){this.H(A.abI(this.M,180));},A9p:function(G){var Jv=(
A.Core.BL.isPrototypeOf(G)?G:null);var F_=this.AD.Gl;if(Jv.CN===4)F_=F_-1;else if(
Jv.CN===5)F_=F_+1;else if((Jv.DM>=0x30)&&(Jv.DM<=0x39))A._GetAutoObject(A.aco.Agy
).E2(Jv.DM);else if(Jv.CN===45)A._GetAutoObject(A.aco.Agy).Delete();else Jv.NE=true;
if((F_<0)||(F_>=this.AD.AY))return;this.AD.G0(F_);this.ByD(F_,true);},Bys:function(
G){var Aa=(C.Ba.isPrototypeOf(G)?G:null);this.AD.G0(Aa.Hk);},ByD:function(G4,AcR
){var B;if((G4<0)||(G4>=this.AD.AY))return;var Az=this.AD.AqF(G4,G4);var Bd=this.
AD.M;Bd=A.abP(Bd,(B=this.AD.AOE())[3]-B[1]);Bd=A.abI(Bd,(((B=this.AD.M)[3]-B[1])-((
B=this.AD.AOE())[3]-B[1]))-((B=this.AD.BiM())[3]-B[1]));var LM=A.lb(Az,Bd);if((!
AcR&&!((LM[0]>=LM[2])||(LM[1]>=LM[3])))||(AcR&&A.aaY(LM,Az)))return;var Br=0;if(
Az[3]>Bd[3])Br=Az[3]-Bd[3];if(Br>(Az[1]-Bd[1]))Br=(Az[3]-Bd[1])-this.AD.GH;this.
AD.FX(this.AD.Bt-Br);},An1:function(G){this.AD.G0(-1);},Fb:function(G){var B;this.
IK.Mu(this.AD.GH*this.AD.AY);this.IK.Mw(((B=this.AD.M)[3]-B[1])-this.AD.ON);this.
IK.Mv(-this.AD.Bt);},_Init:function(aArg){A.acn.Menu._Init.call(this,aArg);A.acg.
AL._Init.call(this.Background={I:this},0);A.Core.H5._Init.call(this.H5={I:this},
0);A.Core.CL._Init.call(this.AD={I:this},0);A.kR.Ay._Init.call(this.IK={I:this},
0);A.Core.BL._Init.call(this.Dk={I:this},0);this.__proto__=C.AVi;this.H(Cc);this.
Background.A3(0x3);this.Background.H(Cc);this.H5.A3(0x3F);this.H5.H(Cc);this.AD.
A3(0x3F);this.AD.H(Cc);this.AD.AeW(60);this.AD.Jr(0);this.AD.NX(this.Li);this.IK.
A3(0x3A);this.IK.H(BF);this.IK.L(0xFF808080);this.J(this.Background,0);this.J(this.
H5,0);this.J(this.AD,0);this.J(this.IK,0);this.AD.Ej=[this,this.Fb];this.AD.He=[
this,this.He];this.AD.AwT(this.H5);this.AR=[this,this.Bys];this.Dk.BM=[this,this.
A9p];this.Dk.DZ=[this,this.A9p];},_Done:function(){this.__proto__=A.acn.Menu;this.
Background._Done();this.H5._Done();this.AD._Done();this.IK._Done();this.Dk._Done(
);A.acn.Menu._Done.call(this);},_ReInit:function(){A.acn.Menu._ReInit.call(this);
this.Background._ReInit();this.H5._ReInit();this.AD._ReInit();this.IK._ReInit();
this.Dk._ReInit();},_Mark:function(D){var B;A.acn.Menu._Mark.call(this,D);if((B=
this.Ad2)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.AX)&&(B._cycle!=D))B._Mark(
B._cycle=D);if((B=this.AR)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.
Background)._cycle!=D)B._Mark(B._cycle=D);if((B=this.H5)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.AD)._cycle!=D)B._Mark(B._cycle=D);if((B=this.IK)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Dk)._cycle!=D)B._Mark(B._cycle=D);},_className:"Demonstrator::VerticalMenu"
};C.AUh={GD:null,AL:null,Cf:null,Init:function(aArg){var B;A.zX([this,this.GA],[
B=A._GetAutoObject(A.aco.Hn),B.A84,B.A_o],0);A.pe([this,this.GA],this);},AbV:function(
E){if(this.GD===E)return;if(!!this.GD)this.HL(this.GD);this.GD=E;if(!!this.GD)this.
J(this.GD,0);this.Bb(E);this.Ahp(E,this.Cf);this.An();},GA:function(G){var B;if(
!!A._GetAutoObject(A.aco.Hn).Asg)this.AbV((C.Ahv.isPrototypeOf(B=A._NewObject(A.
_GetAutoObject(A.aco.Hn).Asg,0))?B:null));else this.AbV(null);},_Init:function(aArg
){A.Core.O._Init.call(this,aArg);A.acg.AL._Init.call(this.AL={I:this},0);A.acg.Cf.
_Init.call(this.Cf={I:this},0);this.__proto__=C.AUh;this.H(EZ);this.AL.A3(0x3F);
this.AL.H(EZ);this.Cf.H(EZ);this.Cf.L(0xFF000000);this.J(this.AL,0);this.J(this.
Cf,0);this.Init(aArg);},_Done:function(){this.__proto__=A.Core.O;this.AL._Done();
this.Cf._Done();A.Core.O._Done.call(this);},_ReInit:function(){A.Core.O._ReInit.
call(this);this.AL._ReInit();this.Cf._ReInit();},_Mark:function(D){var B;A.Core.
O._Mark.call(this,D);if((B=this.GD)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.
AL)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Cf)._cycle!=D)B._Mark(B._cycle=D);}
,_className:"Demonstrator::SelectionArea"};C.AMd={AA_:0,KB:0,Background:null,V:null
,Ajf:null,AdJ:null,XJ:null,AdK:null,Mf:null,Md:0,LF:false,KC:false,CS:function(){
this.An();},Ai:function(Ae){var B;C.Ba.Ai.call(this,Ae);var G9=((Ae&0x10)===0x10
);var Fo=((Ae&0x20)===0x20);var Iw=((Ae&0x40)===0x40);if(!G9){this.Background.L(
0xFFAAAAAA);this.V.L(0xFF888888);this.Mf.Ar(false);this.Mf.Z(false);}else if(Iw){
this.Background.L(A.jb.AV);this.V.L(A.jb.Bm);this.Mf.Ar(true);this.Mf.Z(true);}else
if(Fo){this.Background.L(0xFFE6DED8);this.V.L(0xFF000000);this.Mf.Ar(true);this.
Mf.Z(true);}else{this.Background.L(0xFFFFFFFF);this.V.L(0xFF000000);this.Mf.Ar(false
);this.Mf.Z(false);}if(!this.KC&&Fo)A._GetAutoObject(A.aco.Hn).A_l(this.AA_);this.
Mf.BmS(this.KB>0);this.Mf.Bnj(this.AA_>0);this.V.R(this.Md.toFixed());this.LF=G9;
this.KC=Fo;},Ce:function(Ad){if(!this.AX){this.XJ.Aw(A.aaL(A.ach.Ael));this.AdJ.
L(A.jb.Afi);return;}this.Hk=Ad;if(!!this.AX){this.KB=this.AX.KL(Ad,26);this.AA_=
this.AX.KL(Ad,22);this.Md=this.AX.CE(Ad,1);var AlD=this.AX.HZ(Ad,11);var Alu=this.
AX.IY(Ad,17);var LP=this.AX.IY(Ad,13);var H9=this.AX.AmL(Ad,14);var Xf=A._GetAutoObject(
A.Device.Helper).AL4(LP,AlD,Alu);switch(H9){case 0:this.XJ.Aw(A.aaL(A.ach.Ael));
break;case 1:this.XJ.Aw(A.aaL(A.ach.Avu));break;case 2:this.XJ.Aw(A.aaL(A.ach.Avx
));break;default:A.ab5("%s%e",Hj,H9);}this.AdK.Aw(this.XJ.Al);this.AdJ.L(A._GetAutoObject(
A.acj.Assessment).Qh(Xf));this.An();}},_Init:function(aArg){C.Ba._Init.call(this
,aArg);A.acg.AL._Init.call(this.Background={I:this},0);A.kR.CG._Init.call(this.V={
I:this},0);A.acg.Am._Init.call(this.Ajf={I:this},0);A.acg.Am._Init.call(this.AdJ={
I:this},0);A.acg.Am._Init.call(this.XJ={I:this},0);A.acg.Am._Init.call(this.AdK={
I:this},0);C.Mf._Init.call(this.Mf={I:this},0);this.__proto__=C.AMd;this.Background.
A3(0x3F);this.Background.H(Cc);this.V.A3(0x3F);this.V.H(I$);this.V.R(A.aaR(A.acf.
GG));this.V.A8(0x11);this.V.L(0xFF000000);this.Ajf.H(Io);this.Ajf.L(A.jb.Text);this.
AdJ.H(Io);this.AdJ.L(A.jb.EW);this.XJ.H(Io);this.AdK.H(Io);this.AdK.L(A.jb.Text);
this.AdK.Cu(1);this.Mf.A3(0x3);this.Mf.H(OZ);this.J(this.Background,0);this.J(this.
V,0);this.J(this.Ajf,0);this.J(this.AdJ,0);this.J(this.XJ,0);this.J(this.AdK,0);
this.J(this.Mf,0);this.V.S(A.aaL(A.fl.Af));this.V.A2(A.aaL(A.fl.Ak));this.V.Ct(A.
aaL(A.fl.Bi));this.Ajf.Aw(A.aaL(C.AHa));this.AdJ.Aw(A.aaL(C.AVA));this.XJ.Aw(A.aaL(
A.ach.Ael));this.AdK.Aw(A.aaL(A.ach.Ael));},_Done:function(){this.__proto__=C.Ba;
this.Background._Done();this.V._Done();this.Ajf._Done();this.AdJ._Done();this.XJ.
_Done();this.AdK._Done();this.Mf._Done();C.Ba._Done.call(this);},_ReInit:function(
){C.Ba._ReInit.call(this);this.Background._ReInit();this.V._ReInit();this.Ajf._ReInit(
);this.AdJ._ReInit();this.XJ._ReInit();this.AdK._ReInit();this.Mf._ReInit();this.
V.R(A.aaR(A.acf.GG));this.V.S(A.aaL(A.fl.Af));this.V.A2(A.aaL(A.fl.Ak));this.V.Ct(
A.aaL(A.fl.Bi));this.CS();},_Mark:function(D){var B;C.Ba._Mark.call(this,D);if((
B=this.Background)._cycle!=D)B._Mark(B._cycle=D);if((B=this.V)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Ajf)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AdJ)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.XJ)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
AdK)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Mf)._cycle!=D)B._Mark(B._cycle=D);
},_className:"Demonstrator::AnimalMenuItem"};C.Mf={Ut:null,Wx:null,AkO:null,Nf:null
,N7:null,Zw:null,Acp:null,AvR:false,AxC:false,CS:function(){this.An();},Ai:function(
Ae){var B;A.Core.O.Ai.call(this,Ae);var Iw=((Ae&0x40)===0x40);if(Iw){this.Nf.L(A.
jb.Bm);this.N7.L(A.jb.Bm);}else{this.Nf.L(A.jb.Text);this.N7.L(A.jb.Text);}if(this.
AxC){this.Nf.R(A.aaR(A.acf.Bod));if(this.AvR){this.Ut.Aw(A.aaL(C.AGT));this.Wx.Aw(
A.aaL(C.AGT));}else{this.Ut.Aw(A.aaL(C.Asd));this.Wx.Aw(A.aaL(C.Asd));}}else if(
this.AvR){this.Ut.Aw(A.aaL(C.ACq));this.Wx.Aw(A.aaL(C.ACq));this.Nf.R(P0);}var A3N=
this.AxC||this.AvR;this.Ut.Z(A3N);this.Wx.Z(A3N);this.Nf.Z(A3N);this.Zw.Ar(this.
AxC);},Bnj:function(E){if(this.AxC===E)return;this.AxC=E;this.An();},BmS:function(
E){if(this.AvR===E)return;this.AvR=E;this.An();},_Init:function(aArg){A.Core.O._Init.
call(this,aArg);A.acg.Am._Init.call(this.Ut={I:this},0);A.acg.Am._Init.call(this.
Wx={I:this},0);A.acg.Am._Init.call(this.AkO={I:this},0);A.kR.CG._Init.call(this.
Nf={I:this},0);A.kR.CG._Init.call(this.N7={I:this},0);A.Core.Bn._Init.call(this.
Zw={I:this},0);A.Core.Bn._Init.call(this.Acp={I:this},0);this.__proto__=C.Mf;var
B;this.H(P1);this.Ut.A3(0x6);this.Ut.H(CO);this.Ut.L(A.jb.CU);this.Ut.Cu(1);this.
Wx.A3(0x6);this.Wx.H(CO);this.Wx.L(A.jb.Text);this.AkO.A3(0xE);this.AkO.H(E8);this.
Nf.A3(0x7);this.Nf.H(Lt);this.Nf.A8(0x11);this.Nf.L(0xFF000000);this.N7.A3(0x3);
this.N7.H(P2);this.N7.R(A.aaR(A.acf.Temperature));this.N7.A8(0x11);this.N7.L(0xFF000000
);this.Zw.A3(0x3);this.Zw.JQ(JX);this.Zw.Kn(N$);this.Zw.DE(P3);this.Zw.DR(MF);this.
Acp.A3(0x3);this.Acp.JQ(S2);this.Acp.Kn(UM);this.Acp.DE(ZU);this.Acp.DR(WT);this.
J(this.Ut,0);this.J(this.Wx,0);this.J(this.AkO,0);this.J(this.Nf,0);this.J(this.
N7,0);this.J(this.Zw,0);this.J(this.Acp,0);this.Ut.Aw(A.aaL(C.Asd));this.Wx.Aw(A.
aaL(C.Asd));this.AkO.Aw(A.aaL(C.AUP));this.Nf.S(A.aaL(A.fl.Af));this.Nf.A2(A.aaL(
A.fl.Ak));this.Nf.Ct(A.aaL(A.fl.Bi));this.N7.S(A.aaL(A.fl.Af));this.N7.A2(A.aaL(
A.fl.Ak));this.N7.Ct(A.aaL(A.fl.Bi));this.Zw.Lm=[B=A._GetAutoObject(A.aco.Hn),B.
BeV];this.Acp.Lm=[B=A._GetAutoObject(A.aco.Hn),B.BeG];},_Done:function(){this.__proto__=
A.Core.O;this.Ut._Done();this.Wx._Done();this.AkO._Done();this.Nf._Done();this.N7.
_Done();this.Zw._Done();this.Acp._Done();A.Core.O._Done.call(this);},_ReInit:function(
){A.Core.O._ReInit.call(this);this.Ut._ReInit();this.Wx._ReInit();this.AkO._ReInit(
);this.Nf._ReInit();this.N7._ReInit();this.Zw._ReInit();this.Acp._ReInit();this.
N7.R(A.aaR(A.acf.Temperature));this.Nf.S(A.aaL(A.fl.Af));this.Nf.A2(A.aaL(A.fl.Ak
));this.Nf.Ct(A.aaL(A.fl.Bi));this.N7.S(A.aaL(A.fl.Af));this.N7.A2(A.aaL(A.fl.Ak
));this.N7.Ct(A.aaL(A.fl.Bi));this.CS();},_Mark:function(D){var B;A.Core.O._Mark.
call(this,D);if((B=this.Ut)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Wx)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.AkO)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Nf
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.N7)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Zw)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Acp)._cycle!=D)B._Mark(B._cycle=
D);},_className:"Demonstrator::AnimalItemAction"};C.Yj={CS:function(){this.An();
},Ai:function(Ae){C.AqZ.Ai.call(this,Ae);if(!this.Text.String.length)this.Text.R(
A.aaR(A.acf.Filter));},A8a:function(G){var D2=(A.Core.BL.isPrototypeOf(G)?G:null
);if(!!D2)A._GetAutoObject(A.aco.Agy).E2(D2.DM);},A7_:function(G){A._GetAutoObject(
A.aco.Agy).Delete();},_Init:function(aArg){C.AqZ._Init.call(this,aArg);this.__proto__=
C.Yj;this.Am.Aw(A.aaL(C.Filter));},_ReInit:function(){C.AqZ._ReInit.call(this);this.
CS();},_className:"Demonstrator::FilterView"};C.Aa5={Di:null,Yc:null,R8:null,Yd:
null,DT:null,Yv:null,Amx:null,Au:null,O7:null,M3:null,Aa4:null,FS:0,AvE:0,AFY:false
,Ai:function(Ae){A.Core.O.Ai.call(this,Ae);this.R8.R(this.Au.Format(Ip));if(this.
AFY){this.R8.Z(false);this.Yv.Z(false);this.DT.Z(false);this.Yd.Z(false);this.O7.
Ar(true);this.O7.Z(true);this.M3.Cu(2);this.M3.AS4(2);this.M3.H(A.abM(this.M3.M,
this.O7.M[2]));}else{this.R8.Z(true);this.Yv.Z(true);this.DT.Z(true);this.Yd.Z(true
);this.O7.Ar(false);this.O7.Z(false);this.M3.Cu(3);this.M3.AS4(3);this.M3.H(A.abM(
this.M3.M,this.R8.M[2]));}},BAi:function(G){this.BmZ(!this.AFY);},Adn:function(G
){var F;if(!!this.Di)this.Uf((F=this.Di,F[1].call(F[0])));},AbZ:function(E){if(A.
aaZ(this.Di,E))return;if(!!this.Di)A.z$([this,this.Adn],this.Di,0);this.Di=E;if(
!!E)A.zX([this,this.Adn],E,0);if(!!E)A.pe([this,this.Adn],this);},Uf:function(E){
if(this.FS===E)return;this.FS=E;this.Au.Initialize(this.FS);this.BBm(this);this.
An();},Aiv:function(G){var B;var F;var BR=this.FS;var Ai3=this.Aa4.C7(this.AvE);
this.AI4(Ai3);if(this.Au.Year>2100)this.Au.Initialize2(2100,12,31,0,0,0);this.Uf(((
B=(this.Au.JM()|0))<0)?B+0x100000000:B);if(this.FS!==BR){if(!!this.Di)(F=this.Di
,F[2].call(F[0],this.FS));A.abo(this.Di,0);}},Aig:function(G){var B;var F;var BR=
this.FS;var Ai3=this.Aa4.C7(this.AvE);this.AKT(Ai3);if(this.Au.Year<2000)this.Au.
Initialize2(2000,1,1,0,0,0);this.Uf(((B=(this.Au.JM()|0))<0)?B+0x100000000:B);if(
this.FS!==BR){if(!!this.Di)(F=this.Di,F[2].call(F[0],this.FS));A.abo(this.Di,0);
}},Bmw:function(E){if(this.AvE===E)return;this.AvE=E;},BmZ:function(E){if(this.AFY===
E)return;this.AFY=E;this.An();},BAR:function(G){var B;var F;var BR=this.FS;this.
Au.Lo(this.O7.AEl());this.Au.Uj(this.O7.AEq());this.Au.Year=this.O7.Arm();this.Uf(((
B=(this.Au.JM()|0))<0)?B+0x100000000:B);if(this.FS!==BR){if(!!this.Di)(F=this.Di
,F[2].call(F[0],this.FS));A.abo(this.Di,0);}},BBm:function(G){this.O7.Lo(this.Au.
GE);this.O7.Uj(this.Au.Hc);this.O7.Akw(this.Au.Year);},AI4:function(AyQ){var B;switch(
AyQ){case 0:if(this.Au.GE<this.Au.Zf())this.Au.Lo(this.Au.GE+1);else{this.Au.Lo(
1);this.AI4(2);}break;case 1:if((this.Au.GE+7)<=this.Au.Zf())this.Au.Lo(this.Au.
GE+7);else{this.Au.Lo((7-this.Au.Zf())+this.Au.GE);this.AI4(2);}break;case 2:if(
this.Au.Hc<12)this.Au.Uj(this.Au.Hc+1);else{this.Au.Uj(1);this.AI4(3);}break;case
3:this.Au.Year++;break;default:throw new Error(UN+AyQ.toFixed());}},AKT:function(
AyQ){var B;switch(AyQ){case 0:if(this.Au.GE>1)this.Au.Lo(this.Au.GE-1);else{this.
AKT(2);this.Au.Lo(this.Au.Zf());}break;case 1:if((this.Au.GE-7)>0)this.Au.Lo(this.
Au.GE-7);else{this.AKT(2);this.Au.Lo(this.Au.Zf()-(7-this.Au.GE));}break;case 2:
if(this.Au.Hc>1)this.Au.Uj(this.Au.Hc-1);else{this.Au.Uj(12);this.AKT(3);}break;
case 3:this.Au.Year--;break;default:throw new Error(UN+AyQ.toFixed());}},BkF:function(
){return this.AvE;},_Init:function(aArg){A.Core.O._Init.call(this,aArg);A.acg.Text.
_Init.call(this.Yc={I:this},0);A.acg.Text._Init.call(this.R8={I:this},0);C.Avs._Init.
call(this.Yd={I:this},0);A.acq.DT._Init.call(this.DT={I:this},0);C.Avs._Init.call(
this.Yv={I:this},0);A.acg.Am._Init.call(this.Amx={I:this},0);A.Core.Bu._Init.call(
this.Au={I:this},0);C.ANr._Init.call(this.O7={I:this},0);C.Avs._Init.call(this.M3={
I:this},0);C.Aa4._Init.call(this.Aa4={I:this},0);this.__proto__=C.Aa5;this.H(ZV);
this.Yc.H(WU);this.Yc.A8(0x11);this.Yc.R(A.aaR(A.acf.Date));this.Yc.L(0xFF000000
);this.R8.H(ZW);this.R8.A8(0x11);this.R8.R(WV);this.R8.L(0xFF000000);this.Yd.H(ZX
);this.Yd.A90(200);this.DT.H(ZY);this.DT.ArH(120);this.DT.GH=30;this.DT.ASG(A.jb.
CU);this.DT.A9D(A.jb.CU);this.DT.A9H(A.jb.CU);this.DT.ASH(A.jb.Text);this.DT.A9I(
A.jb.Text);this.DT.A9E(A.jb.AV);this.DT.A9J(A.jb.Bm);this.DT.A9G(A.jb.AV);this.DT.
A9F(A.jb.Text);this.Yv.H(UO);this.Yv.A90(200);this.Amx.H(WW);this.O7.H(Rf);this.
M3.H(ZZ);this.M3.Cu(3);this.M3.AS4(3);this.M3.L(A.jb.Text);this.J(this.Yc,0);this.
J(this.R8,0);this.J(this.Yd,0);this.J(this.DT,0);this.J(this.Yv,0);this.J(this.Amx
,0);this.J(this.O7,0);this.J(this.M3,0);this.Yc.S(A.aaL(A.fl.Ak));this.R8.S(A.aaL(
A.fl.EG));this.Yd.AR=[this,this.Aig];this.Yd.DD(A.aaL(C.AMN));this.Yd.AS5(A.aaL(
C.AMO));this.DT.As([this,this.BkF,this.Bmw]);this.DT.A9P(this.Aa4);this.DT.Arz(A.
aaL(A.fl.Ak));this.DT.Awx(A.aaL(A.fl.Ak));this.Yv.AR=[this,this.Aiv];this.Yv.DD(
A.aaL(C.AMP));this.Yv.AS5(A.aaL(C.AMQ));this.Amx.Aw(A.aaL(C.APU));this.O7.Dh=[this
,this.BAR];this.M3.AR=[this,this.BAi];this.M3.DD(A.aaL(A.ach.Ajk));this.M3.AS5(A.
aaL(A.ach.Ajk));},_Done:function(){this.__proto__=A.Core.O;this.Yc._Done();this.
R8._Done();this.Yd._Done();this.DT._Done();this.Yv._Done();this.Amx._Done();this.
Au._Done();this.O7._Done();this.M3._Done();this.Aa4._Done();A.Core.O._Done.call(
this);},_ReInit:function(){A.Core.O._ReInit.call(this);this.Yc._ReInit();this.R8.
_ReInit();this.Yd._ReInit();this.DT._ReInit();this.Yv._ReInit();this.Amx._ReInit(
);this.Au._ReInit();this.O7._ReInit();this.M3._ReInit();this.Aa4._ReInit();this.
Yc.R(A.aaR(A.acf.Date));this.Yc.S(A.aaL(A.fl.Ak));this.R8.S(A.aaL(A.fl.EG));this.
DT.Arz(A.aaL(A.fl.Ak));this.DT.Awx(A.aaL(A.fl.Ak));},_Mark:function(D){var B;A.Core.
O._Mark.call(this,D);if((B=this.Di)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((
B=this.Yc)._cycle!=D)B._Mark(B._cycle=D);if((B=this.R8)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Yd)._cycle!=D)B._Mark(B._cycle=D);if((B=this.DT)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Yv)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Amx)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.Au)._cycle!=D)B._Mark(B._cycle=D);if((B=this.O7
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.M3)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Aa4)._cycle!=D)B._Mark(B._cycle=D);},_className:"Demonstrator::DateSelector"
};C.Avs={C8:null,Axb:null,ANI:null,AR:null,Bo:null,Dk:null,CR:null,Hq:null,Yq:null
,APy:0,TN:0,ATL:0,AQ:0xFFFFFFFF,A12:false,LF:false,KC:false,Ql:false,Ai:function(
Ae){var B;A.acn.Ahl.Ai.call(this,Ae);var G9=((Ae&0x10)===0x10);var Fo=((Ae&0x20)===
0x20);var Gx=this.CR.Down&&this.CR.Yy;if(!G9)this.Hq.Aw(this.ANI);else if(Gx){this.
Hq.Aw(this.Axb);this.Hq.Cu(this.ATL);}else{this.Hq.Aw(this.C8);this.Hq.Cu(this.TN
);}this.Hq.L(this.AQ);this.LF=G9;this.KC=Fo;this.Ql=Gx;},Qk:function(G){this.An(
);A.pe(this.AR,this);},AiG:function(G){if(this.CR.Down)return;if(this.Dk.Ab$)return;
this.An();if(this.Bo.By){A.pe(this.AR,this);this.Bo.Ar(false);}this.Bo.Ar(true);
},BeD:function(G){this.An();},AAs:function(G){if(!this.CR.Yy)return;if(this.CR.NC
)return;if((this.Yq.Vt<=0)||(this.CR.Jl<this.Yq.Vt)){if(this.CR.Jl>=this.Bo.Vt)A.
pe(this.AR,this);else this.Bo.Ar(true);}this.Yq.Ar(false);},AAr:function(G){this.
Yq.Ar(true);if(this.Bo.By){A.pe(this.AR,this);this.Bo.Ar(false);}},DD:function(E
){if(this.C8===E)return;this.C8=E;this.An();},AS5:function(E){if(this.Axb===E)return;
this.Axb=E;this.An();},A20:function(G){if(!this.CR.Yy)return;if(this.CR.NC)return;
if((this.APy>=0)&&this.A12){this.A12=false;this.Yq.Ar(true);A.pe(this.AR,this);}
},A90:function(E){if(this.APy===E)return;this.APy=E;this.Yq.Wp(E);},BzN:function(
G){this.A12=true;},Cu:function(E){if(this.TN===E)return;this.TN=E;this.An();},AS4:
function(E){if(this.ATL===E)return;this.ATL=E;this.An();},L:function(E){if(this.
AQ===E)return;this.AQ=E;this.An();},_Init:function(aArg){A.acn.Ahl._Init.call(this
,aArg);A.Core.Timer._Init.call(this.Bo={I:this},0);A.Core.BL._Init.call(this.Dk={
I:this},0);A.Core.Bn._Init.call(this.CR={I:this},0);A.acg.Am._Init.call(this.Hq={
I:this},0);A.Core.Timer._Init.call(this.Yq={I:this},0);this.__proto__=C.Avs;this.
H(O0);this.Bo.PO(0);this.Bo.Wp(50);this.Dk.Filter=149;this.CR.A3(0x3F);this.CR.JQ(
Rg);this.CR.Kn(WX);this.CR.DE(WY);this.CR.DR(JX);this.CR.Ae6=0xF;this.CR.AFf(100
);this.Hq.A3(0x3F);this.Hq.H(O0);this.Hq.A8(0x12);this.Yq.PO(0);this.J(this.CR,0
);this.J(this.Hq,0);this.Bo.Mx=[this,this.Qk];this.Dk.BM=[this,this.AiG];this.CR.
AEw=[this,this.BeD];this.CR.AvW=[this,this.BeD];this.CR.DZ=[this,this.A20];this.
CR.Lm=[this,this.AAs];this.CR.BM=[this,this.AAr];this.Hq.Aw(A.aaL(A.aci.TH));this.
C8=A.aaL(A.aci.TH);this.Axb=A.aaL(A.aci.TH);this.ANI=A.aaL(A.aci.TH);this.Yq.Mx=[
this,this.BzN];},_Done:function(){this.__proto__=A.acn.Ahl;this.Bo._Done();this.
Dk._Done();this.CR._Done();this.Hq._Done();this.Yq._Done();A.acn.Ahl._Done.call(
this);},_ReInit:function(){A.acn.Ahl._ReInit.call(this);this.Bo._ReInit();this.Dk.
_ReInit();this.CR._ReInit();this.Hq._ReInit();this.Yq._ReInit();},_Mark:function(
D){var B;A.acn.Ahl._Mark.call(this,D);if((B=this.C8)&&(B._cycle!=D))B._Mark(B._cycle=
D);if((B=this.Axb)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.ANI)&&(B._cycle
!=D))B._Mark(B._cycle=D);if((B=this.AR)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D
);if((B=this.Bo)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Dk)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.CR)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Hq)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.Yq)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Demonstrator::IconButton"};C.AMr={Pu:null,V:null,Aee:null,_Init:function(aArg){
C.Fu._Init.call(this,aArg);A.acg.AL._Init.call(this.Pu={I:this},0);A.acg.Text._Init.
call(this.V={I:this},0);C.Aee._Init.call(this.Aee={I:this},0);this.__proto__=C.AMr;
this.H(WZ);this.Pu.A3(0x1D);this.Pu.H(Cc);this.Pu.L(0xFFE6E6E6);this.V.A3(0x1D);
this.V.H(W0);this.V.A8(0x11);this.V.R(A.aaR(A.acf.A4O));this.V.L(0xFF000000);this.
Aee.H(Z0);this.J(this.Pu,0);this.J(this.V,0);this.J(this.Aee,0);this.V.S(A.aaL(A.
fl.Af));},_Done:function(){this.__proto__=C.Fu;this.Pu._Done();this.V._Done();this.
Aee._Done();C.Fu._Done.call(this);},_ReInit:function(){C.Fu._ReInit.call(this);this.
Pu._ReInit();this.V._ReInit();this.Aee._ReInit();this.V.R(A.aaR(A.acf.A4O));this.
V.S(A.aaL(A.fl.Af));},_Mark:function(D){var B;C.Fu._Mark.call(this,D);if((B=this.
Pu)._cycle!=D)B._Mark(B._cycle=D);if((B=this.V)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Aee)._cycle!=D)B._Mark(B._cycle=D);},_className:"Demonstrator::AnimalsHeader"
};C.Aun={Pu:null,V:null,AeF:null,AeD:null,Bn:null,DI:W1,Ag9:false,Ai:function(Ae
){C.Fu.Ai.call(this,Ae);if(this.Ag9){this.AeD.Z(true);this.AeF.Z(false);}else{this.
AeD.Z(false);this.AeF.Z(true);}},BAE:function(G){if(this.Ag9)A.pe(this.Aki,this);
else A.pe(this.Akj,this);this.ArI(!this.Ag9);},T:function(E){if(this.DI===E)return;
this.DI=E;this.V.R(E);},ArI:function(E){if(this.Ag9===E)return;this.Ag9=E;this.An(
);},_Init:function(aArg){C.Fu._Init.call(this,aArg);A.acg.AL._Init.call(this.Pu={
I:this},0);A.acg.Text._Init.call(this.V={I:this},0);A.acg.Am._Init.call(this.AeF={
I:this},0);A.acg.Am._Init.call(this.AeD={I:this},0);A.Core.Bn._Init.call(this.Bn={
I:this},0);this.__proto__=C.Aun;this.H(Cc);this.Pu.A3(0x1D);this.Pu.H(Cc);this.Pu.
L(0xFFE6E6E6);this.V.A3(0x1D);this.V.H(W2);this.V.A8(0x11);this.V.R(W1);this.V.L(
0xFF000000);this.AeF.H(S3);this.AeF.Z(false);this.AeD.A3(0x3A);this.AeD.H(S3);this.
Bn.JQ(JX);this.Bn.Kn(UP);this.Bn.DE(Z1);this.Bn.DR(MF);this.J(this.Pu,0);this.J(
this.V,0);this.J(this.AeF,0);this.J(this.AeD,0);this.J(this.Bn,0);this.V.S(A.aaL(
A.fl.Af));this.AeF.Aw(A.aaL(C.AMu));this.AeD.Aw(A.aaL(C.Ajj));this.Bn.Lm=[this,this.
BAE];},_Done:function(){this.__proto__=C.Fu;this.Pu._Done();this.V._Done();this.
AeF._Done();this.AeD._Done();this.Bn._Done();C.Fu._Done.call(this);},_ReInit:function(
){C.Fu._ReInit.call(this);this.Pu._ReInit();this.V._ReInit();this.AeF._ReInit();
this.AeD._ReInit();this.Bn._ReInit();this.V.S(A.aaL(A.fl.Af));},_Mark:function(D
){var B;C.Fu._Mark.call(this,D);if((B=this.Pu)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.V)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AeF)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.AeD)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Bn)._cycle!=D)B._Mark(
B._cycle=D);},_className:"Demonstrator::AccordionHeader"};C.Ba={AX:null,AR:null,
CR:null,Hk:-1,Zi:function(E){if(this.AX===E)return;this.AX=E;},Ce:function(Ad){A.
ab5("%s",AcD);},Zj:function(E){if(A.aa0(this.AR,E))return;this.AR=E;},AAs:function(
G){if(!this.CR.Yy)return;if(this.CR.NC)return;A.pe(this.AR,this);},_Init:function(
aArg){A.Core.O._Init.call(this,aArg);A.Core.Bn._Init.call(this.CR={I:this},0);this.
__proto__=C.Ba;this.H(Cc);this.CR.A3(0x3F);this.CR.JQ(MF);this.CR.Kn(Z1);this.CR.
DE(UP);this.CR.DR(JX);this.CR.Ae6=0xF;this.CR.AFf(100);this.J(this.CR,0);this.CR.
Lm=[this,this.AAs];},_Done:function(){this.__proto__=A.Core.O;this.CR._Done();A.
Core.O._Done.call(this);},_ReInit:function(){A.Core.O._ReInit.call(this);this.CR.
_ReInit();},_Mark:function(D){var B;A.Core.O._Mark.call(this,D);if((B=this.AX)&&(
B._cycle!=D))B._Mark(B._cycle=D);if((B=this.AR)&&((B=B[0])._cycle!=D))B._Mark(B.
_cycle=D);if((B=this.CR)._cycle!=D)B._Mark(B._cycle=D);},_className:"Demonstrator::ListItem"
};C.Fu={ARZ:null,Akj:null,Aki:null,BmW:function(E){if(A.aa0(this.ARZ,E))return;this.
ARZ=E;},A9_:function(E){if(A.aa0(this.Akj,E))return;this.Akj=E;},A99:function(E){
if(A.aa0(this.Aki,E))return;this.Aki=E;},_Init:function(aArg){A.Core.O._Init.call(
this,aArg);this.__proto__=C.Fu;this.H(Cc);},_Mark:function(D){var B;A.Core.O._Mark.
call(this,D);if((B=this.ARZ)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.
Akj)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.Aki)&&((B=B[0])._cycle
!=D))B._Mark(B._cycle=D);},_className:"Demonstrator::ListHeader"};C.ANr={Dh:null
,AaU:null,WJ:null,WI:null,WH:null,Na:null,M$:null,KO:null,LF:false,KC:false,BBw:
false,Ai:function(Ae){var B;A.acn.Ahj.Ai.call(this,Ae);var G9=((Ae&0x10)===0x10);
var Fo=((Ae&0x20)===0x20);var BdE=(this.WH.ZB||this.WI.ZB)||this.WJ.ZB;if(BdE)this.
AaU.L(A.jb.Text);else this.AaU.L(A.jb.Bc);this.LF=G9;this.KC=Fo;this.BBw=BdE;},AAn:
function(G){this.An();if((!this.WH.ZB&&!this.WI.ZB)&&!this.WJ.ZB){var U3=this.AJZ(
this.AEq(),this.Arm());var Ac6=this.AEl();this.KO.Jr(U3);if(Ac6>U3)this.Lo(U3);A.
pe(this.Dh,this);}},A3j:function(G){this.An();},Blj:function(G){var B;var F_=this.
Na.GY;var Cz=(A.acg.Text.isPrototypeOf(B=this.Na.Ch)?B:null);if(!Cz)return;Cz.R(
A.abl(F_+1900,4,10));Cz.S(A.aaL(A.fl.Af));Cz.L(A.jb.Text);Cz.A8(0x12);Cz.H(A.abK(
Cz.M,[(B=this.Na.M)[2]-B[0],this.Na.GH]));},Bli:function(G){var B;var F_=this.M$.
GY;var Cz=(A.acg.Text.isPrototypeOf(B=this.M$.Ch)?B:null);if(!Cz)return;Cz.R(A.abl(
F_+1,2,10)+S4);Cz.S(A.aaL(A.fl.Af));Cz.L(A.jb.Text);Cz.A8(0x12);Cz.H(A.abK(Cz.M,[(
B=this.M$.M)[2]-B[0],this.M$.GH]));},Blg:function(G){var B;var F_=this.KO.GY;var
Cz=(A.acg.Text.isPrototypeOf(B=this.KO.Ch)?B:null);if(!Cz)return;Cz.R(A.abl(F_+1
,2,10)+S4);Cz.S(A.aaL(A.fl.Af));Cz.L(A.jb.Text);Cz.A8(0x12);Cz.H(A.abK(Cz.M,[(B=
this.KO.M)[2]-B[0],this.KO.GH]));},Arm:function(){return 1900+((((-this.Na.Bt/this.
Na.GH)|0)+2)%200);},Akw:function(E){if(E<1900)E=1900;if(E>2100)E=2100;this.Na.FX(((
E-1900)-2)*-this.Na.GH);var U3=this.AJZ(this.AEq(),E);this.KO.Jr(U3);if(this.AEl(
)>U3)this.Lo(U3);},AEq:function(){return 1+((((-this.M$.Bt/this.M$.GH)|0)+2)%12);
},Uj:function(E){if(E<1)E=1;if(E>12)E=12;this.M$.FX(((E-1)-2)*-this.M$.GH);var U3=
this.AJZ(E,this.Arm());this.KO.Jr(U3);if(this.AEl()>U3)this.Lo(U3);},AEl:function(
){return 1+((((-this.KO.Bt/this.KO.GH)|0)+2)%this.KO.AY);},Lo:function(E){var U3=
this.AJZ(this.AEq(),this.Arm());if(E<1)E=1;if(E>U3)E=U3;this.KO.FX(((E-2)-1)*-this.
KO.GH);},AJZ:function(Afy,AcV){if(Afy===2){if(!(AcV%4)&&(!!(AcV%100)||!(AcV%400)
))return 29;else return 28;}else if((((Afy===4)||(Afy===6))||(Afy===9))||(Afy===
11))return 30;else return 31;},_Init:function(aArg){A.acn.Ahj._Init.call(this,aArg
);A.acg.Cf._Init.call(this.AaU={I:this},0);A.Core.H5._Init.call(this.WJ={I:this}
,0);A.Core.H5._Init.call(this.WI={I:this},0);A.Core.H5._Init.call(this.WH={I:this
},0);A.Core.CL._Init.call(this.Na={I:this},0);A.Core.CL._Init.call(this.M$={I:this
},0);A.Core.CL._Init.call(this.KO={I:this},0);this.__proto__=C.ANr;this.H(Z2);this.
AaU.H(Afp);this.AaU.Ne(3);this.AaU.L(0xFFE1E1E1);this.AaU.Z(true);this.WJ.H(Z3);
this.WJ.ATg(W3);this.WJ.ASN(0.2);this.WI.H(Z4);this.WI.ATg(W3);this.WI.ASN(0.2);
this.WH.H(Z5);this.WH.ATg(W3);this.WH.ASN(0.2);this.Na.H(Z3);this.Na.ASL(true);this.
Na.FX(60);this.Na.AeW(30);this.Na.Jr(200);this.M$.H(Z4);this.M$.ASL(true);this.M$.
FX(60);this.M$.AeW(30);this.M$.Jr(12);this.KO.H(Z5);this.KO.ASL(true);this.KO.FX(
60);this.KO.AeW(30);this.KO.Jr(31);this.J(this.AaU,0);this.J(this.WJ,0);this.J(this.
WI,0);this.J(this.WH,0);this.J(this.Na,0);this.J(this.M$,0);this.J(this.KO,0);this.
WJ.Ze=[this,this.AAn];this.WJ.Sz=[this,this.A3j];this.WI.Ze=[this,this.AAn];this.
WI.Sz=[this,this.A3j];this.WH.Ze=[this,this.AAn];this.WH.Sz=[this,this.A3j];this.
Na.He=[this,this.Blj];this.Na.AwT(this.WJ);this.M$.He=[this,this.Bli];this.M$.AwT(
this.WI);this.KO.He=[this,this.Blg];this.KO.AwT(this.WH);},_Done:function(){this.
__proto__=A.acn.Ahj;this.AaU._Done();this.WJ._Done();this.WI._Done();this.WH._Done(
);this.Na._Done();this.M$._Done();this.KO._Done();A.acn.Ahj._Done.call(this);},_ReInit:
function(){A.acn.Ahj._ReInit.call(this);this.AaU._ReInit();this.WJ._ReInit();this.
WI._ReInit();this.WH._ReInit();this.Na._ReInit();this.M$._ReInit();this.KO._ReInit(
);},_Mark:function(D){var B;A.acn.Ahj._Mark.call(this,D);if((B=this.Dh)&&((B=B[0
])._cycle!=D))B._Mark(B._cycle=D);if((B=this.AaU)._cycle!=D)B._Mark(B._cycle=D);
if((B=this.WJ)._cycle!=D)B._Mark(B._cycle=D);if((B=this.WI)._cycle!=D)B._Mark(B.
_cycle=D);if((B=this.WH)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Na)._cycle!=D)
B._Mark(B._cycle=D);if((B=this.M$)._cycle!=D)B._Mark(B._cycle=D);if((B=this.KO).
_cycle!=D)B._Mark(B._cycle=D);},_className:"Demonstrator::DatePicker"};C.AHa={_class:
function(){return A.aci.Al;},0:{FileName:"./res_index/DemonstratorWhiteTile.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[40,40],FrameDelay:0,_this:
null}};C.AVA={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/DemonstratorWhiteTileSmall.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[40,40],FrameDelay:0,_this:
null}};C.Ahv={_Init:function(aArg){A.Core.O._Init.call(this,aArg);this.__proto__=
C.Ahv;this.H(EZ);},_className:"Demonstrator::SelectionAreaContent"};C.AMk={Y:null
,Vk:null,Tw:null,BA6:function(G){var B;this.Tw.H(A.abI(this.Tw.M,((B=this.M)[3]-
B[1])-((B=this.Vk.M)[3]-B[1])));},_Init:function(aArg){C.Ahv._Init.call(this,aArg
);A.Core.Y._Init.call(this.Y={I:this},0);C.ALN._Init.call(this.Vk={I:this},0);C.
AVi._Init.call(this.Tw={I:this},0);this.__proto__=C.AMk;this.Y.A3(0x3F);this.Y.H(
EZ);this.Y.JN(1);this.Vk.H(Ak0);this.Vk.Aj(true);this.Vk.ArI(true);this.Tw.A3(0x3
);this.Tw.H(JY);this.Tw.Aj(true);this.Tw.NX(C.AMd);this.Tw.BmQ(C.AMr);this.J(this.
Y,0);this.J(this.Vk,0);this.J(this.Tw,0);this.Bb(this.Tw);this.Y.Ej=[this,this.BA6
];this.Tw.Zi(A._GetAutoObject(A.aco.Ap9));},_Done:function(){this.__proto__=C.Ahv;
this.Y._Done();this.Vk._Done();this.Tw._Done();C.Ahv._Done.call(this);},_ReInit:
function(){C.Ahv._ReInit.call(this);this.Y._ReInit();this.Vk._ReInit();this.Tw._ReInit(
);},_Mark:function(D){var B;C.Ahv._Mark.call(this,D);if((B=this.Y)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Vk)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Tw)._cycle!=
D)B._Mark(B._cycle=D);},_className:"Demonstrator::AnimalSelectionActions"};C.Vk={
_Init:function(aArg){C.Aun._Init.call(this,aArg);this.__proto__=C.Vk;this.T(A.aaR(
A.acf.A5S));},_ReInit:function(){C.Aun._ReInit.call(this);this.T(A.aaR(A.acf.A5S
));},_className:"Demonstrator::ActionsHeader"};C.ALN={Background:null,XH:null,Y:
null,Aco:null,Acd:null,Zv:null,Acn:null,Aj3:null,Aj4:null,Aj5:null,Aj6:null,Aj7:
null,Ag9:false,Init:function(aArg){var B;A.zX([this,this.BeW],[B=A._GetAutoObject(
A.aco.Hn),B.AEs,B.AFt],0);A.pe([this,this.BeW],this);},Akj:function(G){this.ArI(
true);},Aki:function(G){this.ArI(false);},ArI:function(E){if(this.Ag9===E)return;
this.Ag9=E;this.XH.ArI(E);A.pe([this,this.Be6],this);},BeW:function(G){var BBd=A.
_GetAutoObject(A.aco.Hn).Ahq===1;A._GetAutoObject(A.Device.Helper).L0(this.Zv,BBd
);},Be6:function(G){var B;if(this.Ag9)this.H(A.abI(this.M,(B=this.XH.M)[3]-B[1])
);else this.H(A.abI(this.M,((B=this.XH.M)[3]-B[1])+((B=this.Y.Da(0x401))[3]-B[1]
)));},_Init:function(aArg){A.Core.O._Init.call(this,aArg);A.acg.AL._Init.call(this.
Background={I:this},0);C.Vk._Init.call(this.XH={I:this},0);A.Core.Y._Init.call(this.
Y={I:this},0);C.Aco._Init.call(this.Aco={I:this},0);C.Acd._Init.call(this.Acd={I:
this},0);C.Zv._Init.call(this.Zv={I:this},0);C.Acn._Init.call(this.Acn={I:this},
0);A.acg.DQ._Init.call(this.Aj3={I:this},0);A.acg.DQ._Init.call(this.Aj4={I:this
},0);A.acg.DQ._Init.call(this.Aj5={I:this},0);A.acg.DQ._Init.call(this.Aj6={I:this
},0);A.acg.DQ._Init.call(this.Aj7={I:this},0);this.__proto__=C.ALN;this.H(Z6);this.
Background.A3(0x3F);this.Background.H(Z6);this.XH.A3(0x1D);this.XH.H(Cc);this.Y.
H(Lu);this.Y.JN(1);this.Aco.H(AhK);this.Aco.Aj(true);this.Acd.H(An8);this.Acd.Aj(
true);this.Zv.H(Oa);this.Zv.Aj(true);this.Acn.H(W4);this.Acn.Aj(true);this.Aj3.DE(
Z1);this.Aj3.DR(MF);this.Aj3.L(A.jb.Bc);this.Aj4.DE(An9);this.Aj4.DR(AhL);this.Aj4.
L(A.jb.Bc);this.Aj5.DE(AhM);this.Aj5.DR(AcE);this.Aj5.L(A.jb.Bc);this.Aj6.DE(UQ);
this.Aj6.DR(An_);this.Aj6.L(A.jb.Bc);this.Aj7.DE(An$);this.Aj7.DR(Aoa);this.Aj7.
L(A.jb.Bc);this.J(this.Background,0);this.J(this.XH,0);this.J(this.Y,0);this.J(this.
Aco,0);this.J(this.Acd,0);this.J(this.Zv,0);this.J(this.Acn,0);this.J(this.Aj3,0
);this.J(this.Aj4,0);this.J(this.Aj5,0);this.J(this.Aj6,0);this.J(this.Aj7,0);this.
XH.A9_([this,this.Akj]);this.XH.A99([this,this.Aki]);this.Y.Ej=[this,this.Be6];this.
Init(aArg);},_Done:function(){this.__proto__=A.Core.O;this.Background._Done();this.
XH._Done();this.Y._Done();this.Aco._Done();this.Acd._Done();this.Zv._Done();this.
Acn._Done();this.Aj3._Done();this.Aj4._Done();this.Aj5._Done();this.Aj6._Done();
this.Aj7._Done();A.Core.O._Done.call(this);},_ReInit:function(){A.Core.O._ReInit.
call(this);this.Background._ReInit();this.XH._ReInit();this.Y._ReInit();this.Aco.
_ReInit();this.Acd._ReInit();this.Zv._ReInit();this.Acn._ReInit();this.Aj3._ReInit(
);this.Aj4._ReInit();this.Aj5._ReInit();this.Aj6._ReInit();this.Aj7._ReInit();},
_Mark:function(D){var B;A.Core.O._Mark.call(this,D);if((B=this.Background)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.XH)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
Y)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Aco)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Acd)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Zv)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Acn)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Aj3)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Aj4)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Aj5)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.Aj6)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
Aj7)._cycle!=D)B._Mark(B._cycle=D);},_className:"Demonstrator::ActionsMenu"};C.Ji={
Ys:null,AgV:null,Bn:null,DQ:null,AfX:function(G){},A0g:function(s){this.AfX(s);}
,_Init:function(aArg){A.Core.O._Init.call(this,aArg);A.acg.Am._Init.call(this.Ys={
I:this},0);A.acg.Am._Init.call(this.AgV={I:this},0);A.Core.Bn._Init.call(this.Bn={
I:this},0);A.acg.DQ._Init.call(this.DQ={I:this},0);this.__proto__=C.Ji;this.H(Cc
);this.Ys.H(Aob);this.Ys.L(A.jb.Text);this.AgV.H(Afq);this.AgV.L(A.jb.Text);this.
AgV.Cu(0);this.Bn.JQ(JX);this.Bn.Kn(N$);this.Bn.DE(P3);this.Bn.DR(MF);this.DQ.DE(
P3);this.DQ.DR(N$);this.DQ.L(A.jb.Bc);this.J(this.Ys,0);this.J(this.AgV,0);this.
J(this.Bn,0);this.J(this.DQ,0);this.Ys.Aw(A.aaL(A.aci.TH));this.AgV.Aw(A.aaL(A.aci.
ATB));this.Bn.BM=[this,this.A0g];},_Done:function(){this.__proto__=A.Core.O;this.
Ys._Done();this.AgV._Done();this.Bn._Done();this.DQ._Done();A.Core.O._Done.call(
this);},_ReInit:function(){A.Core.O._ReInit.call(this);this.Ys._ReInit();this.AgV.
_ReInit();this.Bn._ReInit();this.DQ._ReInit();},_Mark:function(D){var B;A.Core.O.
_Mark.call(this,D);if((B=this.Ys)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AgV).
_cycle!=D)B._Mark(B._cycle=D);if((B=this.Bn)._cycle!=D)B._Mark(B._cycle=D);if((B=
this.DQ)._cycle!=D)B._Mark(B._cycle=D);},_className:"Demonstrator::ActionsItem"};
C.Acd={AGk:null,DT:null,Aep:null,Cf:null,M7:null,Ahr:null,ANl:0,Init:function(aArg
){var B;A.zX([this,this.Be5],[B=A._GetAutoObject(A.aco.Hn),B.AEs,B.AFt],0);A.pe([
this,this.Be5],this);},AfX:function(G){var Ia=A.ab0(this.Aep.String,0,10);var Ie=
false;switch(A._GetAutoObject(A.aco.Hn).Ahq){case 1:Ie=A._GetAutoObject(A.aco.Hn
).BBt(Ia);break;case 0:Ie=A._GetAutoObject(A.aco.Hn).Bf4(Ia);break;default:A.ab5(
"%s%e",Ak1,A._GetAutoObject(A.aco.Hn).Ahq);}if(Ie){Ia=Ia+1;this.Aep.R(Ia.toFixed(
));}},Be5:function(G){var A0X=null;switch(A._GetAutoObject(A.aco.Hn).Ahq){case 1:
A0X=A.aaL(A.ach.Avp);break;case 0:A0X=A.aaL(A.ach.AmV);break;default:A.ab5("%s%e"
,Ak1,A._GetAutoObject(A.aco.Hn).Ahq);}this.Ys.Aw(A0X);},BlI:function(E){var F;if(
this.ANl===E)return;this.ANl=E;if(!!this.AGk)(F=this.AGk,F[2].call(F[0],E));},Bkr:
function(){return this.ANl;},_Init:function(aArg){C.Ji._Init.call(this,aArg);A.acq.
DT._Init.call(this.DT={I:this},0);C.Ake._Init.call(this.Aep={I:this},0);A.acg.Cf.
_Init.call(this.Cf={I:this},0);A.acg.Am._Init.call(this.M7={I:this},0);C.Ahr._Init.
call(this.Ahr={I:this},0);this.__proto__=C.Acd;var B;this.DT.H(AxP);this.DT.ArH(
120);this.DT.GH=30;this.DT.ASG(A.jb.ST);this.DT.A9D(A.jb.CU);this.DT.A9H(A.jb.CU
);this.DT.ASH(A.jb.ST);this.DT.A9I(A.jb.Text);this.DT.A9E(A.jb.AV);this.DT.A9J(A.
jb.Bm);this.DT.A9G(A.jb.AV);this.DT.A9F(A.jb.ST);this.Bn.JQ(AxQ);this.Bn.DR(O1);
this.Aep.H(Rh);this.Aep.R(AxR);this.Aep.L(A.jb.Text);this.Cf.H(UR);this.Cf.Ne(2);
this.Cf.L(A.jb.Text);this.M7.H(AsD);this.M7.L(A.jb.Text);this.M7.A8(0xC);this.M7.
Cu(3);this.J(this.DT,-2);this.J(this.Aep,-1);this.J(this.Cf,0);this.J(this.M7,0);
this.DT.As([this,this.Bkr,this.BlI]);this.DT.A9P(this.Ahr);this.DT.Arz(A.aaL(A.fl.
Bi));this.DT.Awx(A.aaL(A.fl.Bi));this.M7.Aw(A.aaL(A.ach.Ajk));this.AGk=[B=A._GetAutoObject(
A.aco.Hn),B.AEs,B.AFt];this.Init(aArg);},_Done:function(){this.__proto__=C.Ji;this.
DT._Done();this.Aep._Done();this.Cf._Done();this.M7._Done();this.Ahr._Done();C.Ji.
_Done.call(this);},_ReInit:function(){C.Ji._ReInit.call(this);this.DT._ReInit();
this.Aep._ReInit();this.Cf._ReInit();this.M7._ReInit();this.Ahr._ReInit();this.DT.
Arz(A.aaL(A.fl.Bi));this.DT.Awx(A.aaL(A.fl.Bi));},_Mark:function(D){var B;C.Ji._Mark.
call(this,D);if((B=this.AGk)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.
DT)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Aep)._cycle!=D)B._Mark(B._cycle=D);
if((B=this.Cf)._cycle!=D)B._Mark(B._cycle=D);if((B=this.M7)._cycle!=D)B._Mark(B.
_cycle=D);if((B=this.Ahr)._cycle!=D)B._Mark(B._cycle=D);},_className:"Demonstrator::ScanIdAction"
};C.Aco={UD:null,OQ:null,A36:0,Init:function(aArg){var B;A.zX([this,this.BAo],[B=
A._GetAutoObject(A.aco.Hn),B.ASo,B.AS$],0);A.zX([this,this.AAv],[B=A._GetAutoObject(
A.Device.Device),B.Arj,B.As9],0);A.pe([this,this.AAv],this);},Ai:function(Ae){C.
Ji.Ai.call(this,Ae);this.OQ.Z(!A._GetAutoObject(A.aco.Hn).Axc);},AfX:function(G){
var B;A._GetAutoObject(A.aco.Hn).BeG(this);},AAv:function(G){if(A._GetAutoObject(
A.Device.Device).TemperatureUnit!==this.A36){switch(A._GetAutoObject(A.Device.Device
).TemperatureUnit){case 0:this.OQ.R(A.abk(A._GetAutoObject(A.aco.Hn).WF/100,0,1)
);break;case 1:{var Auc=A._GetAutoObject(A.Device.Converter).AUT(A._GetAutoObject(
A.aco.Hn).WF/100,0,A._GetAutoObject(A.Device.Device).TemperatureUnit);this.OQ.R(
A.abk(Auc,0,1));}break;default:A.ab5("%s%e",AxS,A._GetAutoObject(A.Device.Device
).TemperatureUnit);}this.A36=A._GetAutoObject(A.Device.Device).TemperatureUnit;}
},Bz9:function(G){var B;var Agb=A.abX(this.OQ.String,0);Agb=A._GetAutoObject(A.Device.
Converter).AUT(Agb,A._GetAutoObject(A.Device.Device).TemperatureUnit,0);Agb*=100;
A._GetAutoObject(A.aco.Hn).AFA(Math.round(Agb)|0);},BAo:function(G){this.An();},
_Init:function(aArg){C.Ji._Init.call(this,aArg);A.acr.UD._Init.call(this.UD={I:this
},0);C.OQ._Init.call(this.OQ={I:this},0);this.__proto__=C.Aco;var B;this.UD.H(AxT
);this.UD.A94(A.aaR(A.acf.A4V));this.OQ.H(AxU);this.OQ.R(Aoc);this.OQ.L(A.jb.Text
);this.OQ.BlK(true);this.A36=A._GetAutoObject(A.Device.Device).TemperatureUnit;this.
J(this.UD,0);this.J(this.OQ,0);this.Ys.Aw(A.aaL(A.ach.Abs));this.UD.As([B=A._GetAutoObject(
A.aco.Hn),B.ASo,B.AS$]);this.UD.OnSetAppearance(A._GetAutoObject(A.acx.AuJ));this.
OQ.Dh=[this,this.Bz9];this.Init(aArg);},_Done:function(){this.__proto__=C.Ji;this.
UD._Done();this.OQ._Done();C.Ji._Done.call(this);},_ReInit:function(){C.Ji._ReInit.
call(this);this.UD._ReInit();this.OQ._ReInit();this.UD.A94(A.aaR(A.acf.A4V));},_Mark:
function(D){var B;C.Ji._Mark.call(this,D);if((B=this.UD)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.OQ)._cycle!=D)B._Mark(B._cycle=D);},_className:"Demonstrator::TemperatureAction"
};C.AqZ={Q:null,Cf:null,Bn:null,Agw:null,Am0:null,AmZ:null,Aq4:null,Text:null,Hh:
null,Am:null,CX:null,Aq3:null,Aq5:null,Ao9:false,Bk:function(aSize){this.Hh.H(A.
abK(this.Hh.M,aSize));this.Cf.Axj(1);this.Cf.Jm(0,40);this.Cf.Fc(0,aSize[0]-20,20
,12.5,12.5,-90,90,10);this.Cf.Fc(0,20,20,12.5,12.5,90,270,10);this.Cf.VB(0);},Ai:
function(Ae){var B;var F;A.Core.O.Ai.call(this,Ae);var Iw=((Ae&0x40)===0x40);if(
Iw){if(!!this.Q)this.Text.R((F=this.Q,F[1].call(F[0])));this.Agw.Ar(true);this.Am.
Z(false);}else{if(!!this.Q)this.Text.R((F=this.Q,F[1].call(F[0])));this.Agw.Ar(false
);this.CX.Z(false);this.Am.Z(true);}this.Ao9=Iw;},AfX:function(G){var B;if(!((this.
U&0x80)===0x80))this.Ii().AME(this);},A8a:function(G){},BaK:function(s){this.A8a(
s);},BjR:function(G){var B;var F;if(!this.Q||!(F=this.Q,F[1].call(F[0])).length)
this.CX.H(A.abM(this.CX.M,A.aaI(this.Text.M)[0]));else{this.CX.H(A.abM(this.CX.M
,this.Text.AOG(0)[2]+2));this.CX.H(A.abO(this.CX.M,this.Text.AOG(0)[1]));this.CX.
H(A.abI(this.CX.M,(B=this.Text.AOG(0))[3]-B[1]));}this.Am.H(A.abM(this.Am.M,this.
Text.M[0]-((B=this.Am.M)[2]-B[0])));},A7_:function(G){},BaJ:function(s){this.A7_(
s);},As:function(E){if(A.aaZ(this.Q,E))return;if(!!this.Q)A.z$([this,this.J$],this.
Q,0);this.Q=E;if(!!E)A.zX([this,this.J$],E,0);if(!!E)A.pe([this,this.J$],this);}
,J$:function(G){this.An();},Bll:function(G){var B;if(((this.U&0x80)===0x80))this.
Ii().ACt(this);},BeO:function(G){},_Init:function(aArg){A.Core.O._Init.call(this
,aArg);A.Graphics.Hu._Init.call(this.Cf={I:this},0);A.Core.Bn._Init.call(this.Bn={
I:this},0);A.acl.TC._Init.call(this.Agw={I:this},0);A.Core.BL._Init.call(this.Am0={
I:this},0);A.Core.BL._Init.call(this.AmZ={I:this},0);A.Core.BL._Init.call(this.Aq4={
I:this},0);A.acg.Text._Init.call(this.Text={I:this},0);A.acg.Hh._Init.call(this.
Hh={I:this},0);A.acg.Am._Init.call(this.Am={I:this},0);A.acg.AL._Init.call(this.
CX={I:this},0);A.Core.BL._Init.call(this.Aq3={I:this},0);A.Core.BL._Init.call(this.
Aq5={I:this},0);this.__proto__=C.AqZ;var B;this.H(Afr);this.Bn.A3(0x3F);this.Bn.
JQ(JX);this.Bn.Kn(Aod);this.Bn.DE(IN);this.Bn.DR(Rg);this.Agw.Fj(530);this.Agw.Uh(
530);this.Am0.Filter=143;this.AmZ.Filter=45;this.Aq4.Filter=1;this.Text.A3(0x3F);
this.Text.H(Afr);this.Text.I3(true);this.Text.A8(0x12);this.Text.L(0xFFB3B3B3);this.
Hh.H(Afr);this.Hh.L(0xFFB3B3B3);this.Hh.Ne(1);this.Am.H(Aoe);this.CX.H(W5);this.
CX.L(0xFFB3B3B3);this.CX.Z(false);this.Aq3.Filter=138;this.Aq5.Filter=137;this.J(
this.Bn,0);this.J(this.Text,0);this.J(this.Hh,0);this.J(this.Am,0);this.J(this.CX
,0);this.Bn.Lm=[this,this.AfX];this.Agw.Q=[B=this.CX,B.Fi,B.Z];this.Am0.BM=[this
,this.BaK];this.Am0.DZ=[this,this.BaK];this.AmZ.BM=[this,this.BaJ];this.AmZ.DZ=[
this,this.BaJ];this.Aq4.BM=[this,this.Bll];this.Text.Q0([this,this.BjR]);this.Text.
S(A.aaL(A.fl.Ak));this.Hh.Zk(this.Cf);this.Am.Aw(null);this.Aq3.BM=[this,this.BeO
];this.Aq5.BM=[this,this.BeO];},_Done:function(){this.__proto__=A.Core.O;this.Cf.
_Done();this.Bn._Done();this.Agw._Done();this.Am0._Done();this.AmZ._Done();this.
Aq4._Done();this.Text._Done();this.Hh._Done();this.Am._Done();this.CX._Done();this.
Aq3._Done();this.Aq5._Done();A.Core.O._Done.call(this);},_ReInit:function(){A.Core.
O._ReInit.call(this);this.Cf._ReInit();this.Bn._ReInit();this.Agw._ReInit();this.
Am0._ReInit();this.AmZ._ReInit();this.Aq4._ReInit();this.Text._ReInit();this.Hh.
_ReInit();this.Am._ReInit();this.CX._ReInit();this.Aq3._ReInit();this.Aq5._ReInit(
);this.Text.S(A.aaL(A.fl.Ak));},_Mark:function(D){var B;A.Core.O._Mark.call(this
,D);if((B=this.Q)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.Cf)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.Bn)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
Agw)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Am0)._cycle!=D)B._Mark(B._cycle=D);
if((B=this.AmZ)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Aq4)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Text)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Hh)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.Am)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
CX)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Aq3)._cycle!=D)B._Mark(B._cycle=D);
if((B=this.Aq5)._cycle!=D)B._Mark(B._cycle=D);},_className:"Demonstrator::InputView"
};C.Aee={Background:null,Yj:null,_Init:function(aArg){A.Core.O._Init.call(this,aArg
);A.acg.AL._Init.call(this.Background={I:this},0);C.Yj._Init.call(this.Yj={I:this
},0);this.__proto__=C.Aee;var B;this.H(Ak2);this.Background.H(Ak2);this.Yj.A3(0x1D
);this.Yj.H(AsE);this.J(this.Background,0);this.J(this.Yj,0);this.Yj.As([B=A._GetAutoObject(
A.aco.Agy),B.A81,B.AFv]);},_Done:function(){this.__proto__=A.Core.O;this.Background.
_Done();this.Yj._Done();A.Core.O._Done.call(this);},_ReInit:function(){A.Core.O.
_ReInit.call(this);this.Background._ReInit();this.Yj._ReInit();},_Mark:function(
D){var B;A.Core.O._Mark.call(this,D);if((B=this.Background)._cycle!=D)B._Mark(B.
_cycle=D);if((B=this.Yj)._cycle!=D)B._Mark(B._cycle=D);},_className:"Demonstrator::FilterRow"
};C.OQ={Init:function(aArg){var B;A.zX([this,this.AAv],[B=A._GetAutoObject(A.Device.
Device),B.Arj,B.As9],0);A.pe([this,this.AAv],this);},Ai:function(Ae){var B;C.Ake.
Ai.call(this,Ae);var Iw=((this.U&0x40)===0x40);if(!Iw&&(this.String.length>0))this.
Text.R(((this.String+AsF)+A._GetAutoObject(A.acj.Temperature).Alz())+String.fromCharCode(
0x0A));else this.Text.R(this.String+String.fromCharCode(0x0A));if(this.D4>this.String.
length)this.D4=this.String.length;},AAv:function(G){this.An();},_Init:function(aArg
){C.Ake._Init.call(this,aArg);this.__proto__=C.OQ;this.Init(aArg);},_className:"Demonstrator::TemperatureInputView"
};C.Ake={B7:null,Dh:null,IO:null,Cp:null,Amu:null,R_:null,KJ:null,Bn:null,Text:null
,CX:null,Aqk:null,Ar0:null,Cf:null,Hh:null,Arf:null,AqN:null,Aqw:null,String:A.jV
,D4:0,AQ:0xFFB3B3B3,AvO:15,ANt:false,Lz:false,Bk:function(aSize){this.Hh.H(A.abK(
this.Hh.M,aSize));this.Cf.Axj(1);this.Cf.Jm(0,40);this.Cf.Fc(0,aSize[0]-20,20,12.5
,12.5,-90,90,10);this.Cf.Fc(0,20,20,12.5,12.5,90,270,10);this.Cf.VB(0);},Ai:function(
Ae){var B;A.acn.I6.Ai.call(this,Ae);if(((Ae&0x40)===0x40))this.IO.Ar(true);else{
this.IO.Ar(false);this.CX.Z(false);}},A4f:function(G){var B;var Bd=this.Text.M;var
Nr=0;var Ns=0;if(this.CX.Ep[0]<Bd[0])Nr=Bd[0]-this.CX.Ep[0];if(this.CX.Ep[0]>Bd[
2])Nr=Bd[2]-this.CX.Ep[0];if(this.CX.Ep[1]<Bd[1])Ns=Bd[1]-this.CX.Ep[1];if(this.
CX.Ey[1]>Bd[3])Ns=Bd[3]-this.CX.Ey[1];if(!!Nr||!!Ns)this.Text.FX(A.abf(this.Text.
Bt,[Nr,Ns]));Nr=this.Text.Bt[0];Ns=this.Text.Bt[1];var C4=[(B=this.Text.Da())[2]-
B[0],B[3]-B[1]];if(C4[0]<=((B=this.Text.M)[2]-B[0]))Nr=0;if(C4[1]<=((B=this.Text.
M)[3]-B[1]))Ns=0;this.Text.FX([Nr,Ns]);},Al$:function(G){if(!this.B7)return;var A3H=
this.Text.AGG(this.D4);var pos=this.Text.Ae7(A3H);this.CX.DR(A.abe(pos,[0,this.B7.
Ascent]));this.CX.DE(A.abf(pos,[0,this.B7.Descent]));if(this.IO.By){this.IO.Ar(false
);this.IO.Ar(true);}if(this.Lz){A.pe([this,this.A4f],this);this.Lz=false;}},AAr:
function(G){if(!this.A6T(0x80))this.Ii().AME(this);var ED=this.Text.ATF(this.Bn.
HY);var U8=this.Text.AnJ(ED);if(U8!==this.D4){this.D4=U8;A.pe([this,this.Al$],this
);this.Lz=true;}},AAl:function(G){if(!this.B7)return;var ED=this.Text.AGG(this.D4
);if(this.Cp.CN===6){ED=[ED[0]-1,ED[1]];if(this.Text.AnJ(ED)===this.D4){ED=[ED[0
],ED[1]-1];ED=[this.Text.ACP(ED[1]).length,ED[1]];}}if(this.Cp.CN===7){ED=[ED[0]+
1,ED[1]];if(this.Text.AnJ(ED)===this.D4){ED=[ED[0],ED[1]+1];ED=[0,ED[1]];}}var U8=
this.Text.AnJ(ED);if(U8!==this.D4){this.D4=U8;A.pe([this,this.Al$],this);this.Lz=
true;}},Bex:function(G){if(!this.D4)return;this.R(A.ab1(this.String,this.D4-1,1)
);this.D4=this.D4-1;this.Lz=true;A.pe(this.Dh,this);},AAm:function(G){if(this.D4>=
this.String.length)return;this.R(A.ab1(this.String,this.D4,1));this.Lz=true;A.pe(
this.Dh,this);},BeC:function(G){if(this.String.length>=this.AvO)return;var Byu=this.
KJ.DM;var Aua=String.fromCharCode(Byu);this.R(A.abU(this.String,Aua,this.D4));this.
D4=this.D4+Aua.length;this.Lz=true;A.pe(this.Dh,this);},R:function(E){if(this.String===
E)return;this.String=E;if(this.D4>(E.length+1))this.D4=E.length;this.Text.R(E+String.
fromCharCode(0x0A));this.Lz=true;this.Text.FX(JX);},L:function(E){if(this.AQ===E
)return;this.AQ=E;this.Text.L(E);this.CX.L(E);this.Hh.L(E);},S:function(E){if(this.
B7===E)return;this.B7=E;this.Text.S(E);this.Lz=true;this.Text.FX(JX);},BeP:function(
G){if(this.ANt===false)return;if(this.String.indexOf(String.fromCharCode(0x2E),0
)>=0)return;if(this.String.length>=this.AvO)return;this.R(A.abU(this.String,S4,this.
D4));this.D4=this.D4+1;this.Lz=true;A.pe(this.Dh,this);},Bbs:function(s){this.BeP(
s);},BlK:function(E){if(this.ANt===E)return;this.ANt=E;if(E===false){var Bfv=this.
String.indexOf(String.fromCharCode(0x2E),0);if(Bfv>=0)this.R(A.abV(this.String,Bfv
));}this.Lz=true;this.Text.FX(JX);},BmP:function(E){if(this.AvO===E)return;this.
AvO=E;this.R(A.abV(this.String,E));this.Lz=true;this.Text.FX(JX);},BAf:function(
G){if(this.A6T(0x80))this.Ii().ACt(this);this.An();},Bz4:function(G){var U8=this.
String.length;if(U8!==this.D4){this.D4=U8;A.pe([this,this.Al$],this);this.Lz=true;
}},Bz8:function(G){if(!!this.D4){this.D4=0;A.pe([this,this.Al$],this);this.Lz=true;
}},_Init:function(aArg){A.acn.I6._Init.call(this,aArg);A.acl.TC._Init.call(this.
IO={I:this},0);A.Core.BL._Init.call(this.Cp={I:this},0);A.Core.BL._Init.call(this.
Amu={I:this},0);A.Core.BL._Init.call(this.R_={I:this},0);A.Core.BL._Init.call(this.
KJ={I:this},0);A.Core.Bn._Init.call(this.Bn={I:this},0);A.acg.Text._Init.call(this.
Text={I:this},0);A.acg.DQ._Init.call(this.CX={I:this},0);A.Core.BL._Init.call(this.
Aqk={I:this},0);A.Core.BL._Init.call(this.Ar0={I:this},0);A.Graphics.Hu._Init.call(
this.Cf={I:this},0);A.acg.Hh._Init.call(this.Hh={I:this},0);A.Core.BL._Init.call(
this.Arf={I:this},0);A.Core.BL._Init.call(this.AqN={I:this},0);A.Core.BL._Init.call(
this.Aqw={I:this},0);this.__proto__=C.Ake;var B;this.H(Afr);this.IO.B3=false;this.
IO.Cw=true;this.IO.Fj(500);this.IO.Uh(500);this.Cp.Filter=147;this.Amu.Filter=45;
this.R_.Filter=44;this.KJ.Filter=143;this.Bn.A3(0x3F);this.Bn.JQ(Rg);this.Bn.Kn(
IN);this.Bn.DE(Aod);this.Bn.DR(JX);this.Bn.AFf(3);this.Text.A3(0x3F);this.Text.H(
Afr);this.Text.KR(false);this.Text.A8(0x12);this.Text.R(A.jV);this.Text.L(0xFFB3B3B3
);this.CX.DE(AsG);this.CX.DR(AsH);this.CX.A_E(2);this.CX.A_D(2);this.CX.L(0xFFB3B3B3
);this.CX.Z(false);this.Aqk.Filter=138;this.Ar0.Filter=137;this.Hh.H(Afr);this.Hh.
L(0xFFB3B3B3);this.Hh.Ne(1);this.Arf.Filter=1;this.AqN.Filter=41;this.Aqw.Filter=
42;this.J(this.Bn,0);this.J(this.Text,0);this.J(this.CX,0);this.J(this.Hh,0);this.
IO.Q=[B=this.CX,B.Fi,B.Z];this.Cp.BM=[this,this.AAl];this.Cp.DZ=[this,this.AAl];
this.Amu.BM=[this,this.Bex];this.Amu.DZ=[this,this.Bex];this.R_.BM=[this,this.AAm
];this.R_.DZ=[this,this.AAm];this.KJ.BM=[this,this.BeC];this.KJ.DZ=[this,this.BeC
];this.Bn.BM=[this,this.AAr];this.Text.Q0([this,this.Al$]);this.Text.S(A.aaL(A.fl.
Ak));this.B7=A.aaL(A.fl.Ak);this.Aqk.BM=[this,this.Bbs];this.Ar0.BM=[this,this.Bbs
];this.Hh.Zk(this.Cf);this.Arf.BM=[this,this.BAf];this.AqN.BM=[this,this.Bz8];this.
Aqw.BM=[this,this.Bz4];},_Done:function(){this.__proto__=A.acn.I6;this.IO._Done(
);this.Cp._Done();this.Amu._Done();this.R_._Done();this.KJ._Done();this.Bn._Done(
);this.Text._Done();this.CX._Done();this.Aqk._Done();this.Ar0._Done();this.Cf._Done(
);this.Hh._Done();this.Arf._Done();this.AqN._Done();this.Aqw._Done();A.acn.I6._Done.
call(this);},_ReInit:function(){A.acn.I6._ReInit.call(this);this.IO._ReInit();this.
Cp._ReInit();this.Amu._ReInit();this.R_._ReInit();this.KJ._ReInit();this.Bn._ReInit(
);this.Text._ReInit();this.CX._ReInit();this.Aqk._ReInit();this.Ar0._ReInit();this.
Cf._ReInit();this.Hh._ReInit();this.Arf._ReInit();this.AqN._ReInit();this.Aqw._ReInit(
);this.Text.S(A.aaL(A.fl.Ak));this.S(A.aaL(A.fl.Ak));},_Mark:function(D){var B;A.
acn.I6._Mark.call(this,D);if((B=this.B7)&&(B._cycle!=D))B._Mark(B._cycle=D);if((
B=this.Dh)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.IO)._cycle!=D)B.
_Mark(B._cycle=D);if((B=this.Cp)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Amu)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.R_)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
KJ)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Bn)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Text)._cycle!=D)B._Mark(B._cycle=D);if((B=this.CX)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Aqk)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ar0)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Cf)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Hh)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.Arf)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AqN
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Aqw)._cycle!=D)B._Mark(B._cycle=D);},
_className:"Demonstrator::NumberInput"};C.Acn={LabelDataSync:null,AfX:function(G
){var B;A.pe([B=A._GetAutoObject(A.acs.Ach),B.BBD],this);},_Init:function(aArg){
C.Ji._Init.call(this,aArg);A.kR.CG._Init.call(this.LabelDataSync={I:this},0);this.
__proto__=C.Acn;this.LabelDataSync.H(Ak3);this.LabelDataSync.R(A.aaR(A.acf.A5I));
this.LabelDataSync.L(A.jb.Text);this.J(this.LabelDataSync,0);this.Ys.Aw(A.aaL(C.
AUK));this.LabelDataSync.S(A.aaL(A.fl.Af));this.LabelDataSync.A2(A.aaL(A.fl.Ak));
},_Done:function(){this.__proto__=C.Ji;this.LabelDataSync._Done();C.Ji._Done.call(
this);},_ReInit:function(){C.Ji._ReInit.call(this);this.LabelDataSync._ReInit();
this.LabelDataSync.R(A.aaR(A.acf.A5I));this.LabelDataSync.S(A.aaL(A.fl.Af));this.
LabelDataSync.A2(A.aaL(A.fl.Ak));},_Mark:function(D){var B;C.Ji._Mark.call(this,
D);if((B=this.LabelDataSync)._cycle!=D)B._Mark(B._cycle=D);},_className:"Demonstrator::SyncAction"
};C.AUK={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/DemonstratorSyncIcon.png"
,Format:A._PIXEL_FORMAT_NATIVE,NoOfFrames:1,FrameSize:[50,60],FrameDelay:0,_this:
null}};C.Aa4={TimespanDaysToString:null,Avh:function(aIndex){if(this.AqH()>aIndex
)return this.TimespanDaysToString.BO(aIndex);A.ab5("%s",AsI);return A.jV;},AqH:function(
){return 4;},C7:function(aIndex){var Ai3=0;switch(aIndex){case 0:Ai3=0;break;case
1:Ai3=1;break;case 2:Ai3=2;break;case 3:Ai3=3;break;default:throw new Error(AxV+
aIndex.toFixed());}return Ai3;},_Init:function(aArg){A.acq.VC._Init.call(this,aArg
);A.Device.TimespanDaysToString._Init.call(this.TimespanDaysToString={I:this},0);
this.__proto__=C.Aa4;},_Done:function(){this.__proto__=A.acq.VC;this.TimespanDaysToString.
_Done();A.acq.VC._Done.call(this);},_ReInit:function(){A.acq.VC._ReInit.call(this
);this.TimespanDaysToString._ReInit();},_Mark:function(D){var B;A.acq.VC._Mark.call(
this,D);if((B=this.TimespanDaysToString)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Demonstrator::DatePickerUnitDD"};C.BFo={GE:0,AVp:1,Hc:2,Year:3};C.ACq={_class:function(
){return A.aci.Al;},0:{FileName:"./res_index/DemonstratorEarTagIcon.png",Format:
A._PIXEL_FORMAT_ALPHA8,NoOfFrames:2,FrameSize:[37,37],FrameDelay:0,_this:null}};
C.AGT={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/DemonstratorTransponderEarTagIcon.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:2,FrameSize:[37,37],FrameDelay:0,_this:
null}};C.Zv={Ad5:null,Init:function(aArg){var Au=A._NewObject(A.Core.Bu,0);Au.Initialize(
A._GetAutoObject(A.Device.Helper).Ds());var A1r=Au.Format(Ip);this.Ad5.R(A1r);},
AfX:function(G){var B;var O8=this.Ad5.String;var P;P=O8.indexOf(String.fromCharCode(
0x2E),0);while(P>=0){O8=A.ab1(O8,P,1);P=O8.indexOf(String.fromCharCode(0x2E),P);
}var A1r=A._GetAutoObject(A.Device.AnD).Bfk(O8);A._GetAutoObject(A.aco.Hn).BBu(((
B=(A1r|0))<0)?B+0x100000000:B);},_Init:function(aArg){C.Ji._Init.call(this,aArg);
C.ANq._Init.call(this.Ad5={I:this},0);this.__proto__=C.Zv;this.Ad5.H(Rh);this.Ad5.
L(A.jb.Text);this.Ad5.BmP(10);this.J(this.Ad5,-1);this.Ys.Aw(A.aaL(A.ach.Avp));this.
Init(aArg);},_Done:function(){this.__proto__=C.Ji;this.Ad5._Done();C.Ji._Done.call(
this);},_ReInit:function(){C.Ji._ReInit.call(this);this.Ad5._ReInit();},_Mark:function(
D){var B;C.Ji._Mark.call(this,D);if((B=this.Ad5)._cycle!=D)B._Mark(B._cycle=D);}
,_className:"Demonstrator::ScanDateAction"};C.Ahq={Transponder:0,A5d:1,LAST:2};C.
Ahr={Ahs:null,Avh:function(aIndex){if(this.AqH()>aIndex)return this.Ahs.BO(aIndex
);A.ab5("%s",AsI);return A.jV;},AqH:function(){return 2;},_Init:function(aArg){A.
acq.VC._Init.call(this,aArg);C.Ahs._Init.call(this.Ahs={I:this},0);this.__proto__=
C.Ahr;},_Done:function(){this.__proto__=A.acq.VC;this.Ahs._Done();A.acq.VC._Done.
call(this);},_ReInit:function(){A.acq.VC._ReInit.call(this);this.Ahs._ReInit();}
,_Mark:function(D){var B;A.acq.VC._Mark.call(this,D);if((B=this.Ahs)._cycle!=D)B.
_Mark(B._cycle=D);},_className:"Demonstrator::ScanTypeDD"};C.Ahs={BO:function(A6
){var BcQ=A6;var A3O=A.jV;switch(BcQ){case 1:A3O=A.aaR(A.acf.A5d);break;case 0:A3O=
A.aaR(A.acf.Transponder);break;default:throw new Error(AxW+BcQ.toFixed());}return A3O;
},_Init:function(aArg){A.Device.EnumToString._Init.call(this,aArg);this.__proto__=
C.Ahs;},_className:"Demonstrator::ScanTypeToString"};C.ANq={BeP:function(G){var Bfw=
0;var P=this.String.indexOf(String.fromCharCode(0x2E),0);while(P>=0){Bfw++;P++;P=
this.String.indexOf(String.fromCharCode(0x2E),P);}if(Bfw>=2)return;if(this.String.
length>=this.AvO)return;this.R(A.abU(this.String,S4,this.D4));this.D4=this.D4+1;
this.Lz=true;A.pe(this.Dh,this);},_Init:function(aArg){C.Ake._Init.call(this,aArg
);this.__proto__=C.ANq;},_className:"Demonstrator::DateInput"};
C._Init=function(){C.AVi.__proto__=A.acn.Menu;C.AUh.__proto__=A.Core.O;C.AMd.__proto__=
C.Ba;C.Mf.__proto__=A.Core.O;C.Yj.__proto__=C.AqZ;C.Aa5.__proto__=A.Core.O;C.Avs.
__proto__=A.acn.Ahl;C.AMr.__proto__=C.Fu;C.Aun.__proto__=C.Fu;C.Ba.__proto__=A.Core.
O;C.Fu.__proto__=A.Core.O;C.ANr.__proto__=A.acn.Ahj;C.Ahv.__proto__=A.Core.O;C.AMk.
__proto__=C.Ahv;C.Vk.__proto__=C.Aun;C.ALN.__proto__=A.Core.O;C.Ji.__proto__=A.Core.
O;C.Acd.__proto__=C.Ji;C.Aco.__proto__=C.Ji;C.AqZ.__proto__=A.Core.O;C.Aee.__proto__=
A.Core.O;C.OQ.__proto__=C.Ake;C.Ake.__proto__=A.acn.I6;C.Acn.__proto__=C.Ji;C.Aa4.
__proto__=A.acq.VC;C.Zv.__proto__=C.Ji;C.Ahr.__proto__=A.acq.VC;C.Ahs.__proto__=
A.Device.EnumToString;C.ANq.__proto__=C.Ake;};C._ReInit=function(){};C.DF=function(
D){var B;if((B=C.Background[0]._this)&&(B._cycle!=D))B._Done(C.Background[0]._this=
null);if((B=C.AMN[0]._this)&&(B._cycle!=D))B._Done(C.AMN[0]._this=null);if((B=C.
AMO[0]._this)&&(B._cycle!=D))B._Done(C.AMO[0]._this=null);if((B=C.AMP[0]._this)&&(
B._cycle!=D))B._Done(C.AMP[0]._this=null);if((B=C.AMQ[0]._this)&&(B._cycle!=D))B.
_Done(C.AMQ[0]._this=null);if((B=C.APU[0]._this)&&(B._cycle!=D))B._Done(C.APU[0].
_this=null);if((B=C.Filter[0]._this)&&(B._cycle!=D))B._Done(C.Filter[0]._this=null
);if((B=C.ARs[0]._this)&&(B._cycle!=D))B._Done(C.ARs[0]._this=null);if((B=C.Ajj[
0]._this)&&(B._cycle!=D))B._Done(C.Ajj[0]._this=null);if((B=C.AMu[0]._this)&&(B.
_cycle!=D))B._Done(C.AMu[0]._this=null);if((B=C.Asd[0]._this)&&(B._cycle!=D))B._Done(
C.Asd[0]._this=null);if((B=C.AUP[0]._this)&&(B._cycle!=D))B._Done(C.AUP[0]._this=
null);if((B=C.AHa[0]._this)&&(B._cycle!=D))B._Done(C.AHa[0]._this=null);if((B=C.
AVA[0]._this)&&(B._cycle!=D))B._Done(C.AVA[0]._this=null);if((B=C.AUK[0]._this)&&(
B._cycle!=D))B._Done(C.AUK[0]._this=null);if((B=C.ACq[0]._this)&&(B._cycle!=D))B.
_Done(C.ACq[0]._this=null);if((B=C.AGT[0]._this)&&(B._cycle!=D))B._Done(C.AGT[0].
_this=null);};return C;})();

/* VitalControl demonstration application, © Urban GmbH & Co.KG 2023 */