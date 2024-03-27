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
var Cc=[0,0,370,60];var BD=[360,0,370,60];var E6=[0,0,370,710];var Hq="Unknown animalType";
var IT=[58,10,120,50];var Is=[0,0,60,60];var O2=[120,0,360,60];var P7="\u2015";var
P8=[0,0,240,60];var CQ=[0,0,40,60];var Fe=[100,0,130,60];var L1=[43,0,100,60];var
P9=[125,0,240,60];var J1=[0,0];var N$=[100,0];var P_=[100,60];var MG=[0,60];var S9=[
107,0];var UQ=[240,0];var Z1=[240,60];var W1=[107,60];var It="%d.%m.%Y";var UR="Unhandled date unit: ";
var Z2=[0,0,200,180];var W2=[36,0,200,30];var Z3=[0,30,160,60];var W3="Text";var
Z4=[0,70,40,110];var Z5=[44,70,156,110];var US=[160,70,200,110];var W4=[7,2,27,25
];var O3=[0,30,170,180];var Z6=[170,34,190,57];var O4=[0,0,40,40];var Rl=[0,40];
var W5=[40,40];var W6=[40,0];var UT=[0,0,370,100];var Z7=[20,0,290,60];var Z8=[0
,60,370,100];var W7="Cap";var W8=[20,0,370,60];var S_=[310,0,370,60];var UU=[370
,0];var UV=[370,60];var AcK="UpdateData is called for the base class ListItemBase. Please make "+
"sure this method is implemented by a derived class.";var S$=".";var Z9=[0,0,170
,150];var Afz=[0,59,170,90];var Z_=[110,0,170,150];var W9=[0,30];var Z$=[50,0,100
,150];var W_=[0,0,40,150];var AhS=[0,0,370,240];var KY=[0,60,370,710];var AcL=[0
,0,370,300];var Lv=[0,60,370,300];var AhT=[0,60,370,120];var An$=[0,120,370,180];
var Oa=[0,180,370,240];var W$=[0,240,370,300];var Aaa=[370,120];var AhU=[0,120];
var AhV=[370,180];var AcM=[0,180];var UW=[370,240];var Aoa=[0,240];var Aob=[370,
300];var Aoc=[0,300];var Aod=[0,0,50,60];var Ak_=[50,0,100,60];var AsT="Unhandled scan type";
var Ax0=[3,11,253,51];var Ax1=[50,0];var O5=[50,60];var Rm=[100,10,370,50];var Ax2=
"276000901234567";var UX=[3,10,57,50];var AsU=[3,11,55,50];var Ax3="Unhandled temperature unit";
var Ax4=[110,0,260,60];var Ax5=[235,10,370,50];var Aoe="39.5";var AfA=[0,0,270,40
];var Aof=[270,0];var IU=[270,40];var Aog=[150,0,170,40];var Xa=[205,10,207,30];
var Aoh=[0,0,370,40];var AsV=[50,0,320,40];var AsW=" ";var AsX=[135,23];var Aoi=[
135,0];var Aoj=[100,0,370,60];var AsY="Error: Nullpointer Exception";var Ax6="Unknown Date Piecker Unit Index: ";
var Ax7="0";var Ax8="Unhandled scan type:";
C.Background={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/DemonstratorBackground.png"
,Format:A._PIXEL_FORMAT_NATIVE,NoOfFrames:1,FrameSize:[1000,740],FrameDelay:0,_this:
null}};C.AMY={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/DemonstratorButtonLeft.png"
,Format:A._PIXEL_FORMAT_NATIVE,NoOfFrames:1,FrameSize:[40,40],FrameDelay:0,_this:
null}};C.AMZ={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/DemonstratorButtonLeftPressed.png"
,Format:A._PIXEL_FORMAT_NATIVE,NoOfFrames:1,FrameSize:[40,40],FrameDelay:0,_this:
null}};C.AM0={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/DemonstratorButtonRight.png"
,Format:A._PIXEL_FORMAT_NATIVE,NoOfFrames:1,FrameSize:[40,40],FrameDelay:0,_this:
null}};C.AM1={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/DemonstratorButtonRightPressed.png"
,Format:A._PIXEL_FORMAT_NATIVE,NoOfFrames:1,FrameSize:[40,40],FrameDelay:0,_this:
null}};C.AP1={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/DemonstratorIconDatePicker.png"
,Format:A._PIXEL_FORMAT_NATIVE,NoOfFrames:1,FrameSize:[20,23],FrameDelay:0,_this:
null}};C.Filter={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/DemonstratorFilter.png"
,Format:A._PIXEL_FORMAT_NATIVE,NoOfFrames:1,FrameSize:[15,16],FrameDelay:0,_this:
null}};C.ARA={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/DemonstratorMenuIcon.png"
,Format:A._PIXEL_FORMAT_NATIVE,NoOfFrames:1,FrameSize:[20,16],FrameDelay:0,_this:
null}};C.Ajp={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/DemonstratorArrowRight.png"
,Format:A._PIXEL_FORMAT_NATIVE,NoOfFrames:1,FrameSize:[17,16],FrameDelay:0,_this:
null}};C.AMF={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/DemonstratorArrowDown.png"
,Format:A._PIXEL_FORMAT_NATIVE,NoOfFrames:1,FrameSize:[17,16],FrameDelay:0,_this:
null}};C.Asr={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/DemonstratorScanIcon.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:2,FrameSize:[37,37],FrameDelay:0,_this:
null}};C.AUS={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/DemonstratorTemperatureIcon.png"
,Format:A._PIXEL_FORMAT_NATIVE,NoOfFrames:1,FrameSize:[17,37],FrameDelay:0,_this:
null}};C.AVo={Aeb:null,AX:null,AR:null,Background:null,H9:null,AD:null,IQ:null,Dn:
null,Li:null,A7t:null,A7U:0,Bl:function(aSize){A.acn.Menu.Bl.call(this,aSize);this.
IQ.H(A.abP(this.IQ.M,this.AD.OQ));this.IQ.H([].concat(this.IQ.M.slice(0,3),aSize[
1]));},Ai:function(Ae){var B;A.acn.Menu.Ai.call(this,Ae);var IB=((Ae&0x40)===0x40
);if(IB&&(this.AD.Gr<0))this.AD.GS(0);},N0:function(E){if(this.Li===E)return;this.
Li=E;this.AD.N0(E);},BmS:function(E){var B;if(this.A7t===E)return;if(!!this.Aeb){
this.HN(this.Aeb);this.Aeb=null;}if(!!E){this.Aeb=(C.FB.isPrototypeOf(B=A._NewObject(
E,0))?B:null);this.Aeb.A9W([this,this.Akp]);this.Aeb.A9X([this,this.Akq]);this.Aeb.
BmY(null);this.J(this.Aeb,0);this.AD.A93((B=this.Aeb.M)[3]-B[1]);}else this.AD.A93(
0);this.IQ.H(A.abP(this.IQ.M,this.AD.OQ));A.pe([this,this.Fj],this);this.A7t=E;}
,Hl:function(G){var B;var Ge=this.AD.G5;var Aa=(C.Ba.isPrototypeOf(B=this.AD.Ci)?
B:null);if(!Aa)return;Aa.Zn(this.AX);Aa.Cf(Ge);Aa.Zr(this.AR);Aa.H(A.abK(Aa.M,[(
B=this.AD.M)[2]-B[0],this.AD.GN]));},Zn:function(E){var B;if(this.AX===E)return;
if(!!this.AX){A.z9([this,this.Cf],this.AX,0);A.z$([this,this.An4],[B=this.AX,B.Fn
,B.Fr],0);}this.AX=E;if(!!E){A.zV([this,this.Cf],E,0);A.zX([this,this.An4],[E,E.
Fn,E.Fr],0);}A.pe([this,this.Cf],this);A.pe([this,this.An4],this);},Cf:function(
G){if(!!this.AX){this.AD.Jx(this.AX.B9());this.AD.AbC(0,this.AD.AY-1);}else this.
AD.Jx(0);if(this.A7U!==this.AD.AY){this.AD.ABB(null,null);this.A7U=this.AD.AY;}A.
pe([this,this.Fj],this);},Akq:function(G){var B;this.H(A.abI(this.M,(B=this.AD.AOL(
))[3]-B[1]));},Akp:function(G){this.H(A.abI(this.M,180));},A9c:function(G){var JB=(
A.Core.BK.isPrototypeOf(G)?G:null);var Ge=this.AD.Gr;if(JB.CO===4)Ge=Ge-1;else if(
JB.CO===5)Ge=Ge+1;else if((JB.DQ>=0x30)&&(JB.DQ<=0x39))A._GetAutoObject(A.aco.AgK
).Ey(JB.DQ);else if(JB.CO===45)A._GetAutoObject(A.aco.AgK).Delete();else JB.NH=true;
if((Ge<0)||(Ge>=this.AD.AY))return;this.AD.GS(Ge);this.ByP(Ge,true);},ByE:function(
G){var Aa=(C.Ba.isPrototypeOf(G)?G:null);this.AD.GS(Aa.Hr);},ByP:function(G$,Ac0
){var B;if((G$<0)||(G$>=this.AD.AY))return;var Az=this.AD.AqP(G$,G$);var Bd=this.
AD.M;Bd=A.abP(Bd,(B=this.AD.AOL())[3]-B[1]);Bd=A.abI(Bd,(((B=this.AD.M)[3]-B[1])-((
B=this.AD.AOL())[3]-B[1]))-((B=this.AD.BiN())[3]-B[1]));var LM=A.lb(Az,Bd);if((!
Ac0&&!((LM[0]>=LM[2])||(LM[1]>=LM[3])))||(Ac0&&A.aaY(LM,Az)))return;var Bq=0;if(
Az[3]>Bd[3])Bq=Az[3]-Bd[3];if(Bq>(Az[1]-Bd[1]))Bq=(Az[3]-Bd[1])-this.AD.GN;this.
AD.Ga(this.AD.Br-Bq);},An4:function(G){this.AD.GS(-1);},Fj:function(G){var B;this.
IQ.Mw(this.AD.GN*this.AD.AY);this.IQ.My(((B=this.AD.M)[3]-B[1])-this.AD.OQ);this.
IQ.Mx(-this.AD.Br);},_Init:function(aArg){A.acn.Menu._Init.call(this,aArg);A.acg.
AK._Init.call(this.Background={I:this},0);A.Core.H9._Init.call(this.H9={I:this},
0);A.Core.CM._Init.call(this.AD={I:this},0);A.kR.Ay._Init.call(this.IQ={I:this},
0);A.Core.BK._Init.call(this.Dn={I:this},0);this.__proto__=C.AVo;this.H(Cc);this.
Background.AZ(0x3);this.Background.H(Cc);this.H9.AZ(0x3F);this.H9.H(Cc);this.AD.
AZ(0x3F);this.AD.H(Cc);this.AD.Ae6(60);this.AD.Jx(0);this.AD.N0(this.Li);this.IQ.
AZ(0x3A);this.IQ.H(BD);this.IQ.L(0xFF808080);this.J(this.Background,0);this.J(this.
H9,0);this.J(this.AD,0);this.J(this.IQ,0);this.AD.El=[this,this.Fj];this.AD.Hl=[
this,this.Hl];this.AD.Aw1(this.H9);this.AR=[this,this.ByE];this.Dn.BL=[this,this.
A9c];this.Dn.D1=[this,this.A9c];},_Done:function(){this.__proto__=A.acn.Menu;this.
Background._Done();this.H9._Done();this.AD._Done();this.IQ._Done();this.Dn._Done(
);A.acn.Menu._Done.call(this);},_ReInit:function(){A.acn.Menu._ReInit.call(this);
this.Background._ReInit();this.H9._ReInit();this.AD._ReInit();this.IQ._ReInit();
this.Dn._ReInit();},_Mark:function(D){var B;A.acn.Menu._Mark.call(this,D);if((B=
this.Aeb)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.AX)&&(B._cycle!=D))B._Mark(
B._cycle=D);if((B=this.AR)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.
Background)._cycle!=D)B._Mark(B._cycle=D);if((B=this.H9)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.AD)._cycle!=D)B._Mark(B._cycle=D);if((B=this.IQ)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Dn)._cycle!=D)B._Mark(B._cycle=D);},_className:"Demonstrator::VerticalMenu"
};C.AUk={GJ:null,AK:null,BT:null,Init:function(aArg){var B;A.zX([this,this.GH],[
B=A._GetAutoObject(A.aco.G0),B.A8R,B.A_c],0);A.pe([this,this.GH],this);},Ab0:function(
E){if(this.GJ===E)return;if(!!this.GJ)this.HN(this.GJ);this.GJ=E;if(!!this.GJ)this.
J(this.GJ,0);this.Bb(E);this.Ahz(E,this.BT);this.Am();},GH:function(G){var B;if(
!!A._GetAutoObject(A.aco.G0).Asu)this.Ab0((C.AhF.isPrototypeOf(B=A._NewObject(A.
_GetAutoObject(A.aco.G0).Asu,0))?B:null));else this.Ab0(null);},_Init:function(aArg
){A.Core.P._Init.call(this,aArg);A.acg.AK._Init.call(this.AK={I:this},0);A.acg.BT.
_Init.call(this.BT={I:this},0);this.__proto__=C.AUk;this.H(E6);this.AK.AZ(0x3F);
this.AK.H(E6);this.BT.H(E6);this.BT.L(0xFF000000);this.J(this.AK,0);this.J(this.
BT,0);this.Init(aArg);},_Done:function(){this.__proto__=A.Core.P;this.AK._Done();
this.BT._Done();A.Core.P._Done.call(this);},_ReInit:function(){A.Core.P._ReInit.
call(this);this.AK._ReInit();this.BT._ReInit();},_Mark:function(D){var B;A.Core.
P._Mark.call(this,D);if((B=this.GJ)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.
AK)._cycle!=D)B._Mark(B._cycle=D);if((B=this.BT)._cycle!=D)B._Mark(B._cycle=D);}
,_className:"Demonstrator::SelectionArea"};C.AMo={ABh:0,Kc:0,Background:null,V:null
,Ajl:null,AdU:null,XL:null,AdV:null,Mh:null,Mf:0,LF:false,KF:false,CP:function(){
this.Am();},Ai:function(Ae){var B;C.Ba.Ai.call(this,Ae);var He=((Ae&0x10)===0x10
);var Fu=((Ae&0x20)===0x20);var IB=((Ae&0x40)===0x40);if(!He){this.Background.L(
0xFFAAAAAA);this.V.L(0xFF888888);this.Mh.Ar(false);this.Mh.Z(false);}else if(IB){
this.Background.L(A.jb.AV);this.V.L(A.jb.Bm);this.Mh.Ar(true);this.Mh.Z(true);}else
if(Fu){this.Background.L(0xFFE6DED8);this.V.L(0xFF000000);this.Mh.Ar(true);this.
Mh.Z(true);}else{this.Background.L(0xFFFFFFFF);this.V.L(0xFF000000);this.Mh.Ar(false
);this.Mh.Z(false);}if(!this.KF&&Fu)A._GetAutoObject(A.aco.G0).A9$(this.ABh);this.
Mh.BmU(this.Kc>0);this.Mh.Bnl(this.ABh>0);this.V.R(this.Mf.toFixed());this.LF=He;
this.KF=Fu;},Cf:function(Ad){if(!this.AX){this.XL.Ax(A.aaL(A.ach.Aew));this.AdU.
L(A.jb.Afs);return;}this.Hr=Ad;if(!!this.AX){this.Kc=this.AX.KN(Ad,26);this.ABh=
this.AX.KN(Ad,22);this.Mf=this.AX.CF(Ad,1);var AlK=this.AX.H2(Ad,11);var AlB=this.
AX.I5(Ad,17);var LP=this.AX.I5(Ad,13);var Ib=this.AX.AmQ(Ad,14);var Xl=A._GetAutoObject(
A.Device.Helper).AMd(LP,AlK,AlB);switch(Ib){case 0:this.XL.Ax(A.aaL(A.ach.Aew));
break;case 1:this.XL.Ax(A.aaL(A.ach.AvA));break;case 2:this.XL.Ax(A.aaL(A.ach.AvD
));break;default:A.ab5("%s%e",Hq,Ib);}this.AdV.Ax(this.XL.Al);this.AdU.L(A._GetAutoObject(
A.acj.Assessment).Qo(Xl));this.Am();}},_Init:function(aArg){C.Ba._Init.call(this
,aArg);A.acg.AK._Init.call(this.Background={I:this},0);A.kR.CH._Init.call(this.V={
I:this},0);A.acg.Ap._Init.call(this.Ajl={I:this},0);A.acg.Ap._Init.call(this.AdU={
I:this},0);A.acg.Ap._Init.call(this.XL={I:this},0);A.acg.Ap._Init.call(this.AdV={
I:this},0);C.Mh._Init.call(this.Mh={I:this},0);this.__proto__=C.AMo;this.Background.
AZ(0x3F);this.Background.H(Cc);this.V.AZ(0x3F);this.V.H(IT);this.V.R(A.aaR(A.acf.
GM));this.V.A6(0x11);this.V.L(0xFF000000);this.Ajl.H(Is);this.Ajl.L(A.jb.Text);this.
AdU.H(Is);this.AdU.L(A.jb.E1);this.XL.H(Is);this.AdV.H(Is);this.AdV.L(A.jb.Text);
this.AdV.Cv(1);this.Mh.AZ(0x3);this.Mh.H(O2);this.J(this.Background,0);this.J(this.
V,0);this.J(this.Ajl,0);this.J(this.AdU,0);this.J(this.XL,0);this.J(this.AdV,0);
this.J(this.Mh,0);this.V.S(A.aaL(A.fl.Af));this.V.A2(A.aaL(A.fl.Ak));this.V.Cu(A.
aaL(A.fl.Bh));this.Ajl.Ax(A.aaL(C.AHd));this.AdU.Ax(A.aaL(C.AVF));this.XL.Ax(A.aaL(
A.ach.Aew));this.AdV.Ax(A.aaL(A.ach.Aew));},_Done:function(){this.__proto__=C.Ba;
this.Background._Done();this.V._Done();this.Ajl._Done();this.AdU._Done();this.XL.
_Done();this.AdV._Done();this.Mh._Done();C.Ba._Done.call(this);},_ReInit:function(
){C.Ba._ReInit.call(this);this.Background._ReInit();this.V._ReInit();this.Ajl._ReInit(
);this.AdU._ReInit();this.XL._ReInit();this.AdV._ReInit();this.Mh._ReInit();this.
V.R(A.aaR(A.acf.GM));this.V.S(A.aaL(A.fl.Af));this.V.A2(A.aaL(A.fl.Ak));this.V.Cu(
A.aaL(A.fl.Bh));this.CP();},_Mark:function(D){var B;C.Ba._Mark.call(this,D);if((
B=this.Background)._cycle!=D)B._Mark(B._cycle=D);if((B=this.V)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Ajl)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AdU)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.XL)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
AdV)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Mh)._cycle!=D)B._Mark(B._cycle=D);
},_className:"Demonstrator::AnimalMenuItem"};C.Mh={Uw:null,WG:null,AkW:null,Nj:null
,N8:null,ZE:null,Acv:null,AvZ:false,AxM:false,CP:function(){this.Am();},Ai:function(
Ae){var B;A.Core.P.Ai.call(this,Ae);var IB=((Ae&0x40)===0x40);if(IB){this.Nj.L(A.
jb.Bm);this.N8.L(A.jb.Bm);}else{this.Nj.L(A.jb.Text);this.N8.L(A.jb.Text);}if(this.
AxM){this.Nj.R(A.aaR(A.acf.Bol));if(this.AvZ){this.Uw.Ax(A.aaL(C.AxN));this.WG.Ax(
A.aaL(C.AxN));}else{this.Uw.Ax(A.aaL(C.Asr));this.WG.Ax(A.aaL(C.Asr));}}else if(
this.AvZ){this.Uw.Ax(A.aaL(C.ACw));this.WG.Ax(A.aaL(C.ACw));this.Nj.R(P7);}var A3S=
this.AxM||this.AvZ;this.Uw.Z(A3S);this.WG.Z(A3S);this.Nj.Z(A3S);this.ZE.Ar(this.
AxM);},Bnl:function(E){if(this.AxM===E)return;this.AxM=E;this.Am();},BmU:function(
E){if(this.AvZ===E)return;this.AvZ=E;this.Am();},_Init:function(aArg){A.Core.P._Init.
call(this,aArg);A.acg.Ap._Init.call(this.Uw={I:this},0);A.acg.Ap._Init.call(this.
WG={I:this},0);A.acg.Ap._Init.call(this.AkW={I:this},0);A.kR.CH._Init.call(this.
Nj={I:this},0);A.kR.CH._Init.call(this.N8={I:this},0);A.Core.Bn._Init.call(this.
ZE={I:this},0);A.Core.Bn._Init.call(this.Acv={I:this},0);this.__proto__=C.Mh;var
B;this.H(P8);this.Uw.AZ(0x6);this.Uw.H(CQ);this.Uw.L(A.jb.CS);this.Uw.Cv(1);this.
WG.AZ(0x6);this.WG.H(CQ);this.WG.L(A.jb.Text);this.AkW.AZ(0xE);this.AkW.H(Fe);this.
Nj.AZ(0x7);this.Nj.H(L1);this.Nj.A6(0x11);this.Nj.L(0xFF000000);this.N8.AZ(0x3);
this.N8.H(P9);this.N8.R(A.aaR(A.acf.Temperature));this.N8.A6(0x11);this.N8.L(0xFF000000
);this.ZE.AZ(0x3);this.ZE.JT(J1);this.ZE.Ku(N$);this.ZE.DC(P_);this.ZE.DM(MG);this.
Acv.AZ(0x3);this.Acv.JT(S9);this.Acv.Ku(UQ);this.Acv.DC(Z1);this.Acv.DM(W1);this.
J(this.Uw,0);this.J(this.WG,0);this.J(this.AkW,0);this.J(this.Nj,0);this.J(this.
N8,0);this.J(this.ZE,0);this.J(this.Acv,0);this.Uw.Ax(A.aaL(C.Asr));this.WG.Ax(A.
aaL(C.Asr));this.AkW.Ax(A.aaL(C.AUS));this.Nj.S(A.aaL(A.fl.Af));this.Nj.A2(A.aaL(
A.fl.Ak));this.Nj.Cu(A.aaL(A.fl.Bh));this.N8.S(A.aaL(A.fl.Af));this.N8.A2(A.aaL(
A.fl.Ak));this.N8.Cu(A.aaL(A.fl.Bh));this.ZE.Ln=[B=A._GetAutoObject(A.aco.G0),B.
BeR];this.Acv.Ln=[B=A._GetAutoObject(A.aco.G0),B.BeC];},_Done:function(){this.__proto__=
A.Core.P;this.Uw._Done();this.WG._Done();this.AkW._Done();this.Nj._Done();this.N8.
_Done();this.ZE._Done();this.Acv._Done();A.Core.P._Done.call(this);},_ReInit:function(
){A.Core.P._ReInit.call(this);this.Uw._ReInit();this.WG._ReInit();this.AkW._ReInit(
);this.Nj._ReInit();this.N8._ReInit();this.ZE._ReInit();this.Acv._ReInit();this.
N8.R(A.aaR(A.acf.Temperature));this.Nj.S(A.aaL(A.fl.Af));this.Nj.A2(A.aaL(A.fl.Ak
));this.Nj.Cu(A.aaL(A.fl.Bh));this.N8.S(A.aaL(A.fl.Af));this.N8.A2(A.aaL(A.fl.Ak
));this.N8.Cu(A.aaL(A.fl.Bh));this.CP();},_Mark:function(D){var B;A.Core.P._Mark.
call(this,D);if((B=this.Uw)._cycle!=D)B._Mark(B._cycle=D);if((B=this.WG)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.AkW)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Nj
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.N8)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.ZE)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Acv)._cycle!=D)B._Mark(B._cycle=
D);},_className:"Demonstrator::AnimalItemAction"};C.Yl={CP:function(){this.Am();
},Ai:function(Ae){C.Aq_.Ai.call(this,Ae);if(!this.Text.String.length)this.Text.R(
A.aaR(A.acf.Filter));},A71:function(G){var D5=(A.Core.BK.isPrototypeOf(G)?G:null
);if(!!D5)A._GetAutoObject(A.aco.AgK).Ey(D5.DQ);},A7Z:function(G){A._GetAutoObject(
A.aco.AgK).Delete();},_Init:function(aArg){C.Aq_._Init.call(this,aArg);this.__proto__=
C.Yl;this.Ap.Ax(A.aaL(C.Filter));},_ReInit:function(){C.Aq_._ReInit.call(this);this.
CP();},_className:"Demonstrator::FilterView"};C.Abb={Dl:null,Ye:null,Sc:null,Yf:
null,DT:null,Yz:null,AmC:null,Au:null,O$:null,M3:null,Aba:null,FX:0,AvK:0,AF2:false
,Ai:function(Ae){A.Core.P.Ai.call(this,Ae);this.Sc.R(this.Au.Format(It));if(this.
AF2){this.Sc.Z(false);this.Yz.Z(false);this.DT.Z(false);this.Yf.Z(false);this.O$.
Ar(true);this.O$.Z(true);this.M3.Cv(2);this.M3.ATa(2);this.M3.H(A.abM(this.M3.M,
this.O$.M[2]));}else{this.Sc.Z(true);this.Yz.Z(true);this.DT.Z(true);this.Yf.Z(true
);this.O$.Ar(false);this.O$.Z(false);this.M3.Cv(3);this.M3.ATa(3);this.M3.H(A.abM(
this.M3.M,this.Sc.M[2]));}},BAv:function(G){this.Bm1(!this.AF2);},Adx:function(G
){var F;if(!!this.Dl)this.Uk((F=this.Dl,F[1].call(F[0])));},Ab4:function(E){if(A.
aaZ(this.Dl,E))return;if(!!this.Dl)A.z$([this,this.Adx],this.Dl,0);this.Dl=E;if(
!!E)A.zX([this,this.Adx],E,0);if(!!E)A.pe([this,this.Adx],this);},Uk:function(E){
if(this.FX===E)return;this.FX=E;this.Au.Initialize(this.FX);this.BBB(this);this.
Am();},AiE:function(G){var B;var F;var BO=this.FX;var Ai_=this.Aba.C7(this.AvK);
this.AJe(Ai_);if(this.Au.Year>2100)this.Au.Initialize2(2100,12,31,0,0,0);this.Uk(((
B=(this.Au.JQ()|0))<0)?B+0x100000000:B);if(this.FX!==BO){if(!!this.Dl)(F=this.Dl
,F[2].call(F[0],this.FX));A.abo(this.Dl,0);}},Aiq:function(G){var B;var F;var BO=
this.FX;var Ai_=this.Aba.C7(this.AvK);this.AK4(Ai_);if(this.Au.Year<2000)this.Au.
Initialize2(2000,1,1,0,0,0);this.Uk(((B=(this.Au.JQ()|0))<0)?B+0x100000000:B);if(
this.FX!==BO){if(!!this.Dl)(F=this.Dl,F[2].call(F[0],this.FX));A.abo(this.Dl,0);
}},Bmx:function(E){if(this.AvK===E)return;this.AvK=E;},Bm1:function(E){if(this.AF2===
E)return;this.AF2=E;this.Am();},BA8:function(G){var B;var F;var BO=this.FX;this.
Au.Lp(this.O$.AEs());this.Au.Uo(this.O$.AEx());this.Au.Year=this.O$.Arx();this.Uk(((
B=(this.Au.JQ()|0))<0)?B+0x100000000:B);if(this.FX!==BO){if(!!this.Dl)(F=this.Dl
,F[2].call(F[0],this.FX));A.abo(this.Dl,0);}},BBB:function(G){this.O$.Lp(this.Au.
GK);this.O$.Uo(this.Au.Hj);this.O$.AkD(this.Au.Year);},AJe:function(AyX){var B;switch(
AyX){case 0:if(this.Au.GK<this.Au.Zj())this.Au.Lp(this.Au.GK+1);else{this.Au.Lp(
1);this.AJe(2);}break;case 1:if((this.Au.GK+7)<=this.Au.Zj())this.Au.Lp(this.Au.
GK+7);else{this.Au.Lp((7-this.Au.Zj())+this.Au.GK);this.AJe(2);}break;case 2:if(
this.Au.Hj<12)this.Au.Uo(this.Au.Hj+1);else{this.Au.Uo(1);this.AJe(3);}break;case
3:this.Au.Year++;break;default:throw new Error(UR+AyX.toFixed());}},AK4:function(
AyX){var B;switch(AyX){case 0:if(this.Au.GK>1)this.Au.Lp(this.Au.GK-1);else{this.
AK4(2);this.Au.Lp(this.Au.Zj());}break;case 1:if((this.Au.GK-7)>0)this.Au.Lp(this.
Au.GK-7);else{this.AK4(2);this.Au.Lp(this.Au.Zj()-(7-this.Au.GK));}break;case 2:
if(this.Au.Hj>1)this.Au.Uo(this.Au.Hj-1);else{this.Au.Uo(12);this.AK4(3);}break;
case 3:this.Au.Year--;break;default:throw new Error(UR+AyX.toFixed());}},BkE:function(
){return this.AvK;},_Init:function(aArg){A.Core.P._Init.call(this,aArg);A.acg.Text.
_Init.call(this.Ye={I:this},0);A.acg.Text._Init.call(this.Sc={I:this},0);C.Avy._Init.
call(this.Yf={I:this},0);A.acq.DT._Init.call(this.DT={I:this},0);C.Avy._Init.call(
this.Yz={I:this},0);A.acg.Ap._Init.call(this.AmC={I:this},0);A.Core.Bs._Init.call(
this.Au={I:this},0);C.ANC._Init.call(this.O$={I:this},0);C.Avy._Init.call(this.M3={
I:this},0);C.Aba._Init.call(this.Aba={I:this},0);this.__proto__=C.Abb;this.H(Z2);
this.Ye.H(W2);this.Ye.A6(0x11);this.Ye.R(A.aaR(A.acf.Date));this.Ye.L(0xFF000000
);this.Sc.H(Z3);this.Sc.A6(0x11);this.Sc.R(W3);this.Sc.L(0xFF000000);this.Yf.H(Z4
);this.Yf.A9N(200);this.DT.H(Z5);this.DT.ArR(120);this.DT.GN=30;this.DT.ASO(A.jb.
CS);this.DT.A9q(A.jb.CS);this.DT.A9u(A.jb.CS);this.DT.ASP(A.jb.Text);this.DT.A9v(
A.jb.Text);this.DT.A9r(A.jb.AV);this.DT.A9w(A.jb.Bm);this.DT.A9t(A.jb.AV);this.DT.
A9s(A.jb.Text);this.Yz.H(US);this.Yz.A9N(200);this.AmC.H(W4);this.O$.H(O3);this.
M3.H(Z6);this.M3.Cv(3);this.M3.ATa(3);this.M3.L(A.jb.Text);this.J(this.Ye,0);this.
J(this.Sc,0);this.J(this.Yf,0);this.J(this.DT,0);this.J(this.Yz,0);this.J(this.AmC
,0);this.J(this.O$,0);this.J(this.M3,0);this.Ye.S(A.aaL(A.fl.Ak));this.Sc.S(A.aaL(
A.fl.EK));this.Yf.AR=[this,this.Aiq];this.Yf.DB(A.aaL(C.AMY));this.Yf.ATb(A.aaL(
C.AMZ));this.DT.At([this,this.BkE,this.Bmx]);this.DT.A9C(this.Aba);this.DT.ArJ(A.
aaL(A.fl.Ak));this.DT.AwF(A.aaL(A.fl.Ak));this.Yz.AR=[this,this.AiE];this.Yz.DB(
A.aaL(C.AM0));this.Yz.ATb(A.aaL(C.AM1));this.AmC.Ax(A.aaL(C.AP1));this.O$.Di=[this
,this.BA8];this.M3.AR=[this,this.BAv];this.M3.DB(A.aaL(A.ach.Ajq));this.M3.ATb(A.
aaL(A.ach.Ajq));},_Done:function(){this.__proto__=A.Core.P;this.Ye._Done();this.
Sc._Done();this.Yf._Done();this.DT._Done();this.Yz._Done();this.AmC._Done();this.
Au._Done();this.O$._Done();this.M3._Done();this.Aba._Done();A.Core.P._Done.call(
this);},_ReInit:function(){A.Core.P._ReInit.call(this);this.Ye._ReInit();this.Sc.
_ReInit();this.Yf._ReInit();this.DT._ReInit();this.Yz._ReInit();this.AmC._ReInit(
);this.Au._ReInit();this.O$._ReInit();this.M3._ReInit();this.Aba._ReInit();this.
Ye.R(A.aaR(A.acf.Date));this.Ye.S(A.aaL(A.fl.Ak));this.Sc.S(A.aaL(A.fl.EK));this.
DT.ArJ(A.aaL(A.fl.Ak));this.DT.AwF(A.aaL(A.fl.Ak));},_Mark:function(D){var B;A.Core.
P._Mark.call(this,D);if((B=this.Dl)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((
B=this.Ye)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Sc)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Yf)._cycle!=D)B._Mark(B._cycle=D);if((B=this.DT)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Yz)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AmC)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.Au)._cycle!=D)B._Mark(B._cycle=D);if((B=this.O$
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.M3)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Aba)._cycle!=D)B._Mark(B._cycle=D);},_className:"Demonstrator::DateSelector"
};C.Avy={C8:null,Axk:null,ANS:null,AR:null,Bo:null,Dn:null,CR:null,Hv:null,Ys:null
,APE:0,TQ:0,ATR:0,AQ:0xFFFFFFFF,A15:false,LF:false,KF:false,Qs:false,Ai:function(
Ae){var B;A.acn.Ahv.Ai.call(this,Ae);var He=((Ae&0x10)===0x10);var Fu=((Ae&0x20)===
0x20);var GE=this.CR.Down&&this.CR.YC;if(!He)this.Hv.Ax(this.ANS);else if(GE){this.
Hv.Ax(this.Axk);this.Hv.Cv(this.ATR);}else{this.Hv.Ax(this.C8);this.Hv.Cv(this.TQ
);}this.Hv.L(this.AQ);this.LF=He;this.KF=Fu;this.Qs=GE;},Qr:function(G){this.Am(
);A.pe(this.AR,this);},AiO:function(G){if(this.CR.Down)return;if(this.Dn.Acf)return;
this.Am();if(this.Bo.Bw){A.pe(this.AR,this);this.Bo.Ar(false);}this.Bo.Ar(true);
},Bez:function(G){this.Am();},AAz:function(G){if(!this.CR.YC)return;if(this.CR.NF
)return;if((this.Ys.VE<=0)||(this.CR.Js<this.Ys.VE)){if(this.CR.Js>=this.Bo.VE)A.
pe(this.AR,this);else this.Bo.Ar(true);}this.Ys.Ar(false);},AAy:function(G){this.
Ys.Ar(true);if(this.Bo.Bw){A.pe(this.AR,this);this.Bo.Ar(false);}},DB:function(E
){if(this.C8===E)return;this.C8=E;this.Am();},ATb:function(E){if(this.Axk===E)return;
this.Axk=E;this.Am();},A25:function(G){if(!this.CR.YC)return;if(this.CR.NF)return;
if((this.APE>=0)&&this.A15){this.A15=false;this.Ys.Ar(true);A.pe(this.AR,this);}
},A9N:function(E){if(this.APE===E)return;this.APE=E;this.Ys.Wz(E);},Bz0:function(
G){this.A15=true;},Cv:function(E){if(this.TQ===E)return;this.TQ=E;this.Am();},ATa:
function(E){if(this.ATR===E)return;this.ATR=E;this.Am();},L:function(E){if(this.
AQ===E)return;this.AQ=E;this.Am();},_Init:function(aArg){A.acn.Ahv._Init.call(this
,aArg);A.Core.Timer._Init.call(this.Bo={I:this},0);A.Core.BK._Init.call(this.Dn={
I:this},0);A.Core.Bn._Init.call(this.CR={I:this},0);A.acg.Ap._Init.call(this.Hv={
I:this},0);A.Core.Timer._Init.call(this.Ys={I:this},0);this.__proto__=C.Avy;this.
H(O4);this.Bo.PR(0);this.Bo.Wz(50);this.Dn.Filter=149;this.CR.AZ(0x3F);this.CR.JT(
Rl);this.CR.Ku(W5);this.CR.DC(W6);this.CR.DM(J1);this.CR.Afe=0xF;this.CR.AFl(100
);this.Hv.AZ(0x3F);this.Hv.H(O4);this.Hv.A6(0x12);this.Ys.PR(0);this.J(this.CR,0
);this.J(this.Hv,0);this.Bo.Mz=[this,this.Qr];this.Dn.BL=[this,this.AiO];this.CR.
AED=[this,this.Bez];this.CR.Av4=[this,this.Bez];this.CR.D1=[this,this.A25];this.
CR.Ln=[this,this.AAz];this.CR.BL=[this,this.AAy];this.Hv.Ax(A.aaL(A.aci.TL));this.
C8=A.aaL(A.aci.TL);this.Axk=A.aaL(A.aci.TL);this.ANS=A.aaL(A.aci.TL);this.Ys.Mz=[
this,this.Bz0];},_Done:function(){this.__proto__=A.acn.Ahv;this.Bo._Done();this.
Dn._Done();this.CR._Done();this.Hv._Done();this.Ys._Done();A.acn.Ahv._Done.call(
this);},_ReInit:function(){A.acn.Ahv._ReInit.call(this);this.Bo._ReInit();this.Dn.
_ReInit();this.CR._ReInit();this.Hv._ReInit();this.Ys._ReInit();},_Mark:function(
D){var B;A.acn.Ahv._Mark.call(this,D);if((B=this.C8)&&(B._cycle!=D))B._Mark(B._cycle=
D);if((B=this.Axk)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.ANS)&&(B._cycle
!=D))B._Mark(B._cycle=D);if((B=this.AR)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D
);if((B=this.Bo)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Dn)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.CR)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Hv)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.Ys)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Demonstrator::IconButton"};C.AMC={Px:null,V:null,Aep:null,_Init:function(aArg){
C.FB._Init.call(this,aArg);A.acg.AK._Init.call(this.Px={I:this},0);A.acg.Text._Init.
call(this.V={I:this},0);C.Aep._Init.call(this.Aep={I:this},0);this.__proto__=C.AMC;
this.H(UT);this.Px.AZ(0x1D);this.Px.H(Cc);this.Px.L(0xFFE6E6E6);this.V.AZ(0x1D);
this.V.H(Z7);this.V.A6(0x11);this.V.R(A.aaR(A.acf.A4S));this.V.L(0xFF000000);this.
Aep.H(Z8);this.J(this.Px,0);this.J(this.V,0);this.J(this.Aep,0);this.V.S(A.aaL(A.
fl.Af));},_Done:function(){this.__proto__=C.FB;this.Px._Done();this.V._Done();this.
Aep._Done();C.FB._Done.call(this);},_ReInit:function(){C.FB._ReInit.call(this);this.
Px._ReInit();this.V._ReInit();this.Aep._ReInit();this.V.R(A.aaR(A.acf.A4S));this.
V.S(A.aaL(A.fl.Af));},_Mark:function(D){var B;C.FB._Mark.call(this,D);if((B=this.
Px)._cycle!=D)B._Mark(B._cycle=D);if((B=this.V)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Aep)._cycle!=D)B._Mark(B._cycle=D);},_className:"Demonstrator::AnimalsHeader"
};C.Auv={Px:null,V:null,AeQ:null,AeO:null,Bn:null,DK:W7,Ahj:false,Ai:function(Ae
){C.FB.Ai.call(this,Ae);if(this.Ahj){this.AeO.Z(true);this.AeQ.Z(false);}else{this.
AeO.Z(false);this.AeQ.Z(true);}},BAT:function(G){if(this.Ahj)A.pe(this.Akp,this);
else A.pe(this.Akq,this);this.ArS(!this.Ahj);},T:function(E){if(this.DK===E)return;
this.DK=E;this.V.R(E);},ArS:function(E){if(this.Ahj===E)return;this.Ahj=E;this.Am(
);},_Init:function(aArg){C.FB._Init.call(this,aArg);A.acg.AK._Init.call(this.Px={
I:this},0);A.acg.Text._Init.call(this.V={I:this},0);A.acg.Ap._Init.call(this.AeQ={
I:this},0);A.acg.Ap._Init.call(this.AeO={I:this},0);A.Core.Bn._Init.call(this.Bn={
I:this},0);this.__proto__=C.Auv;this.H(Cc);this.Px.AZ(0x1D);this.Px.H(Cc);this.Px.
L(0xFFE6E6E6);this.V.AZ(0x1D);this.V.H(W8);this.V.A6(0x11);this.V.R(W7);this.V.L(
0xFF000000);this.AeQ.H(S_);this.AeQ.Z(false);this.AeO.AZ(0x3A);this.AeO.H(S_);this.
Bn.JT(J1);this.Bn.Ku(UU);this.Bn.DC(UV);this.Bn.DM(MG);this.J(this.Px,0);this.J(
this.V,0);this.J(this.AeQ,0);this.J(this.AeO,0);this.J(this.Bn,0);this.V.S(A.aaL(
A.fl.Af));this.AeQ.Ax(A.aaL(C.AMF));this.AeO.Ax(A.aaL(C.Ajp));this.Bn.Ln=[this,this.
BAT];},_Done:function(){this.__proto__=C.FB;this.Px._Done();this.V._Done();this.
AeQ._Done();this.AeO._Done();this.Bn._Done();C.FB._Done.call(this);},_ReInit:function(
){C.FB._ReInit.call(this);this.Px._ReInit();this.V._ReInit();this.AeQ._ReInit();
this.AeO._ReInit();this.Bn._ReInit();this.V.S(A.aaL(A.fl.Af));},_Mark:function(D
){var B;C.FB._Mark.call(this,D);if((B=this.Px)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.V)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AeQ)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.AeO)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Bn)._cycle!=D)B._Mark(
B._cycle=D);},_className:"Demonstrator::AccordionHeader"};C.Ba={AX:null,AR:null,
CR:null,Hr:-1,Zn:function(E){if(this.AX===E)return;this.AX=E;},Cf:function(Ad){A.
ab5("%s",AcK);},Zr:function(E){if(A.aa0(this.AR,E))return;this.AR=E;},AAz:function(
G){if(!this.CR.YC)return;if(this.CR.NF)return;A.pe(this.AR,this);},_Init:function(
aArg){A.Core.P._Init.call(this,aArg);A.Core.Bn._Init.call(this.CR={I:this},0);this.
__proto__=C.Ba;this.H(Cc);this.CR.AZ(0x3F);this.CR.JT(MG);this.CR.Ku(UV);this.CR.
DC(UU);this.CR.DM(J1);this.CR.Afe=0xF;this.CR.AFl(100);this.J(this.CR,0);this.CR.
Ln=[this,this.AAz];},_Done:function(){this.__proto__=A.Core.P;this.CR._Done();A.
Core.P._Done.call(this);},_ReInit:function(){A.Core.P._ReInit.call(this);this.CR.
_ReInit();},_Mark:function(D){var B;A.Core.P._Mark.call(this,D);if((B=this.AX)&&(
B._cycle!=D))B._Mark(B._cycle=D);if((B=this.AR)&&((B=B[0])._cycle!=D))B._Mark(B.
_cycle=D);if((B=this.CR)._cycle!=D)B._Mark(B._cycle=D);},_className:"Demonstrator::ListItem"
};C.FB={AR7:null,Akq:null,Akp:null,BmY:function(E){if(A.aa0(this.AR7,E))return;this.
AR7=E;},A9X:function(E){if(A.aa0(this.Akq,E))return;this.Akq=E;},A9W:function(E){
if(A.aa0(this.Akp,E))return;this.Akp=E;},_Init:function(aArg){A.Core.P._Init.call(
this,aArg);this.__proto__=C.FB;this.H(Cc);},_Mark:function(D){var B;A.Core.P._Mark.
call(this,D);if((B=this.AR7)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.
Akq)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.Akp)&&((B=B[0])._cycle
!=D))B._Mark(B._cycle=D);},_className:"Demonstrator::ListHeader"};C.ANC={Di:null
,Aa3:null,WT:null,WS:null,WR:null,Na:null,M$:null,KQ:null,LF:false,KF:false,BBL:
false,Ai:function(Ae){var B;A.acn.Aht.Ai.call(this,Ae);var He=((Ae&0x10)===0x10);
var Fu=((Ae&0x20)===0x20);var BdA=(this.WR.ZJ||this.WS.ZJ)||this.WT.ZJ;if(BdA)this.
Aa3.L(A.jb.Text);else this.Aa3.L(A.jb.Bc);this.LF=He;this.KF=Fu;this.BBL=BdA;},AAu:
function(G){this.Am();if((!this.WR.ZJ&&!this.WS.ZJ)&&!this.WT.ZJ){var Va=this.AJ9(
this.AEx(),this.Arx());var Adc=this.AEs();this.KQ.Jx(Va);if(Adc>Va)this.Lp(Va);A.
pe(this.Di,this);}},A3o:function(G){this.Am();},Bll:function(G){var B;var Ge=this.
Na.G5;var Cz=(A.acg.Text.isPrototypeOf(B=this.Na.Ci)?B:null);if(!Cz)return;Cz.R(
A.abl(Ge+1900,4,10));Cz.S(A.aaL(A.fl.Af));Cz.L(A.jb.Text);Cz.A6(0x12);Cz.H(A.abK(
Cz.M,[(B=this.Na.M)[2]-B[0],this.Na.GN]));},Blk:function(G){var B;var Ge=this.M$.
G5;var Cz=(A.acg.Text.isPrototypeOf(B=this.M$.Ci)?B:null);if(!Cz)return;Cz.R(A.abl(
Ge+1,2,10)+S$);Cz.S(A.aaL(A.fl.Af));Cz.L(A.jb.Text);Cz.A6(0x12);Cz.H(A.abK(Cz.M,[(
B=this.M$.M)[2]-B[0],this.M$.GN]));},Bli:function(G){var B;var Ge=this.KQ.G5;var
Cz=(A.acg.Text.isPrototypeOf(B=this.KQ.Ci)?B:null);if(!Cz)return;Cz.R(A.abl(Ge+1
,2,10)+S$);Cz.S(A.aaL(A.fl.Af));Cz.L(A.jb.Text);Cz.A6(0x12);Cz.H(A.abK(Cz.M,[(B=
this.KQ.M)[2]-B[0],this.KQ.GN]));},Arx:function(){return 1900+((((-this.Na.Br/this.
Na.GN)|0)+2)%200);},AkD:function(E){if(E<1900)E=1900;if(E>2100)E=2100;this.Na.Ga(((
E-1900)-2)*-this.Na.GN);var Va=this.AJ9(this.AEx(),E);this.KQ.Jx(Va);if(this.AEs(
)>Va)this.Lp(Va);},AEx:function(){return 1+((((-this.M$.Br/this.M$.GN)|0)+2)%12);
},Uo:function(E){if(E<1)E=1;if(E>12)E=12;this.M$.Ga(((E-1)-2)*-this.M$.GN);var Va=
this.AJ9(E,this.Arx());this.KQ.Jx(Va);if(this.AEs()>Va)this.Lp(Va);},AEs:function(
){return 1+((((-this.KQ.Br/this.KQ.GN)|0)+2)%this.KQ.AY);},Lp:function(E){var Va=
this.AJ9(this.AEx(),this.Arx());if(E<1)E=1;if(E>Va)E=Va;this.KQ.Ga(((E-2)-1)*-this.
KQ.GN);},AJ9:function(AfH,Ac4){if(AfH===2){if(!(Ac4%4)&&(!!(Ac4%100)||!(Ac4%400)
))return 29;else return 28;}else if((((AfH===4)||(AfH===6))||(AfH===9))||(AfH===
11))return 30;else return 31;},_Init:function(aArg){A.acn.Aht._Init.call(this,aArg
);A.acg.BT._Init.call(this.Aa3={I:this},0);A.Core.H9._Init.call(this.WT={I:this}
,0);A.Core.H9._Init.call(this.WS={I:this},0);A.Core.H9._Init.call(this.WR={I:this
},0);A.Core.CM._Init.call(this.Na={I:this},0);A.Core.CM._Init.call(this.M$={I:this
},0);A.Core.CM._Init.call(this.KQ={I:this},0);this.__proto__=C.ANC;this.H(Z9);this.
Aa3.H(Afz);this.Aa3.Ng(3);this.Aa3.L(0xFFE1E1E1);this.Aa3.Z(true);this.WT.H(Z_);
this.WT.ATn(W9);this.WT.ASV(0.2);this.WS.H(Z$);this.WS.ATn(W9);this.WS.ASV(0.2);
this.WR.H(W_);this.WR.ATn(W9);this.WR.ASV(0.2);this.Na.H(Z_);this.Na.AST(true);this.
Na.Ga(60);this.Na.Ae6(30);this.Na.Jx(200);this.M$.H(Z$);this.M$.AST(true);this.M$.
Ga(60);this.M$.Ae6(30);this.M$.Jx(12);this.KQ.H(W_);this.KQ.AST(true);this.KQ.Ga(
60);this.KQ.Ae6(30);this.KQ.Jx(31);this.J(this.Aa3,0);this.J(this.WT,0);this.J(this.
WS,0);this.J(this.WR,0);this.J(this.Na,0);this.J(this.M$,0);this.J(this.KQ,0);this.
WT.Zi=[this,this.AAu];this.WT.SJ=[this,this.A3o];this.WS.Zi=[this,this.AAu];this.
WS.SJ=[this,this.A3o];this.WR.Zi=[this,this.AAu];this.WR.SJ=[this,this.A3o];this.
Na.Hl=[this,this.Bll];this.Na.Aw1(this.WT);this.M$.Hl=[this,this.Blk];this.M$.Aw1(
this.WS);this.KQ.Hl=[this,this.Bli];this.KQ.Aw1(this.WR);},_Done:function(){this.
__proto__=A.acn.Aht;this.Aa3._Done();this.WT._Done();this.WS._Done();this.WR._Done(
);this.Na._Done();this.M$._Done();this.KQ._Done();A.acn.Aht._Done.call(this);},_ReInit:
function(){A.acn.Aht._ReInit.call(this);this.Aa3._ReInit();this.WT._ReInit();this.
WS._ReInit();this.WR._ReInit();this.Na._ReInit();this.M$._ReInit();this.KQ._ReInit(
);},_Mark:function(D){var B;A.acn.Aht._Mark.call(this,D);if((B=this.Di)&&((B=B[0
])._cycle!=D))B._Mark(B._cycle=D);if((B=this.Aa3)._cycle!=D)B._Mark(B._cycle=D);
if((B=this.WT)._cycle!=D)B._Mark(B._cycle=D);if((B=this.WS)._cycle!=D)B._Mark(B.
_cycle=D);if((B=this.WR)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Na)._cycle!=D)
B._Mark(B._cycle=D);if((B=this.M$)._cycle!=D)B._Mark(B._cycle=D);if((B=this.KQ).
_cycle!=D)B._Mark(B._cycle=D);},_className:"Demonstrator::DatePicker"};C.AHd={_class:
function(){return A.aci.Al;},0:{FileName:"./res_index/DemonstratorWhiteTile.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[40,40],FrameDelay:0,_this:
null}};C.AVF={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/DemonstratorWhiteTileSmall.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[40,40],FrameDelay:0,_this:
null}};C.AhF={_Init:function(aArg){A.Core.P._Init.call(this,aArg);this.__proto__=
C.AhF;this.H(E6);},_className:"Demonstrator::SelectionAreaContent"};C.AMv={Y:null
,Vu:null,TA:null,BBk:function(G){var B;this.TA.H(A.abI(this.TA.M,((B=this.M)[3]-
B[1])-((B=this.Vu.M)[3]-B[1])));},_Init:function(aArg){C.AhF._Init.call(this,aArg
);A.Core.Y._Init.call(this.Y={I:this},0);C.ALZ._Init.call(this.Vu={I:this},0);C.
AVo._Init.call(this.TA={I:this},0);this.__proto__=C.AMv;this.Y.AZ(0x3F);this.Y.H(
E6);this.Y.JR(1);this.Vu.H(AhS);this.Vu.Aj(true);this.Vu.ArS(true);this.TA.AZ(0x3
);this.TA.H(KY);this.TA.Aj(true);this.TA.N0(C.AMo);this.TA.BmS(C.AMC);this.J(this.
Y,0);this.J(this.Vu,0);this.J(this.TA,0);this.Bb(this.TA);this.Y.El=[this,this.BBk
];this.TA.Zn(A._GetAutoObject(A.aco.Aqd));},_Done:function(){this.__proto__=C.AhF;
this.Y._Done();this.Vu._Done();this.TA._Done();C.AhF._Done.call(this);},_ReInit:
function(){C.AhF._ReInit.call(this);this.Y._ReInit();this.Vu._ReInit();this.TA._ReInit(
);},_Mark:function(D){var B;C.AhF._Mark.call(this,D);if((B=this.Y)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Vu)._cycle!=D)B._Mark(B._cycle=D);if((B=this.TA)._cycle!=
D)B._Mark(B._cycle=D);},_className:"Demonstrator::AnimalSelectionActions"};C.Vu={
_Init:function(aArg){C.Auv._Init.call(this,aArg);this.__proto__=C.Vu;this.T(A.aaR(
A.acf.A5J));},_ReInit:function(){C.Auv._ReInit.call(this);this.T(A.aaR(A.acf.A5J
));},_className:"Demonstrator::ActionsHeader"};C.ALZ={Background:null,XK:null,Y:
null,Acu:null,Acj:null,ZD:null,Act:null,Aj_:null,Aj$:null,Aka:null,Akb:null,Akc:
null,Ahj:false,Init:function(aArg){var B;A.zX([this,this.BeS],[B=A._GetAutoObject(
A.aco.G0),B.AEz,B.Ar0],0);A.pe([this,this.BeS],this);},Akq:function(G){this.ArS(
true);},Akp:function(G){this.ArS(false);},ArS:function(E){if(this.Ahj===E)return;
this.Ahj=E;this.XK.ArS(E);A.pe([this,this.Be3],this);},BeS:function(G){var BBs=A.
_GetAutoObject(A.aco.G0).AhA===2;A._GetAutoObject(A.Device.Helper).JY(this.ZD,BBs
);},Be3:function(G){var B;if(this.Ahj)this.H(A.abI(this.M,(B=this.XK.M)[3]-B[1])
);else this.H(A.abI(this.M,((B=this.XK.M)[3]-B[1])+((B=this.Y.Db(0x401))[3]-B[1]
)));},_Init:function(aArg){A.Core.P._Init.call(this,aArg);A.acg.AK._Init.call(this.
Background={I:this},0);C.Vu._Init.call(this.XK={I:this},0);A.Core.Y._Init.call(this.
Y={I:this},0);C.Acu._Init.call(this.Acu={I:this},0);C.Acj._Init.call(this.Acj={I:
this},0);C.ZD._Init.call(this.ZD={I:this},0);C.Act._Init.call(this.Act={I:this},
0);A.acg.C5._Init.call(this.Aj_={I:this},0);A.acg.C5._Init.call(this.Aj$={I:this
},0);A.acg.C5._Init.call(this.Aka={I:this},0);A.acg.C5._Init.call(this.Akb={I:this
},0);A.acg.C5._Init.call(this.Akc={I:this},0);this.__proto__=C.ALZ;this.H(AcL);this.
Background.AZ(0x3F);this.Background.H(AcL);this.XK.AZ(0x1D);this.XK.H(Cc);this.Y.
H(Lv);this.Y.JR(1);this.Acu.H(AhT);this.Acu.Aj(true);this.Acj.H(An$);this.Acj.Aj(
true);this.ZD.H(Oa);this.ZD.Aj(true);this.Act.H(W$);this.Act.Aj(true);this.Aj_.DC(
UV);this.Aj_.DM(MG);this.Aj_.L(A.jb.Bc);this.Aj$.DC(Aaa);this.Aj$.DM(AhU);this.Aj$.
L(A.jb.Bc);this.Aka.DC(AhV);this.Aka.DM(AcM);this.Aka.L(A.jb.Bc);this.Akb.DC(UW);
this.Akb.DM(Aoa);this.Akb.L(A.jb.Bc);this.Akc.DC(Aob);this.Akc.DM(Aoc);this.Akc.
L(A.jb.Bc);this.J(this.Background,0);this.J(this.XK,0);this.J(this.Y,0);this.J(this.
Acu,0);this.J(this.Acj,0);this.J(this.ZD,0);this.J(this.Act,0);this.J(this.Aj_,0
);this.J(this.Aj$,0);this.J(this.Aka,0);this.J(this.Akb,0);this.J(this.Akc,0);this.
XK.A9X([this,this.Akq]);this.XK.A9W([this,this.Akp]);this.Y.El=[this,this.Be3];this.
Init(aArg);},_Done:function(){this.__proto__=A.Core.P;this.Background._Done();this.
XK._Done();this.Y._Done();this.Acu._Done();this.Acj._Done();this.ZD._Done();this.
Act._Done();this.Aj_._Done();this.Aj$._Done();this.Aka._Done();this.Akb._Done();
this.Akc._Done();A.Core.P._Done.call(this);},_ReInit:function(){A.Core.P._ReInit.
call(this);this.Background._ReInit();this.XK._ReInit();this.Y._ReInit();this.Acu.
_ReInit();this.Acj._ReInit();this.ZD._ReInit();this.Act._ReInit();this.Aj_._ReInit(
);this.Aj$._ReInit();this.Aka._ReInit();this.Akb._ReInit();this.Akc._ReInit();},
_Mark:function(D){var B;A.Core.P._Mark.call(this,D);if((B=this.Background)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.XK)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
Y)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Acu)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Acj)._cycle!=D)B._Mark(B._cycle=D);if((B=this.ZD)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Act)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Aj_)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Aj$)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Aka)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.Akb)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
Akc)._cycle!=D)B._Mark(B._cycle=D);},_className:"Demonstrator::ActionsMenu"};C.Jp={
Yw:null,Ag7:null,Bn:null,C5:null,Af7:function(G){},A0k:function(s){this.Af7(s);}
,_Init:function(aArg){A.Core.P._Init.call(this,aArg);A.acg.Ap._Init.call(this.Yw={
I:this},0);A.acg.Ap._Init.call(this.Ag7={I:this},0);A.Core.Bn._Init.call(this.Bn={
I:this},0);A.acg.C5._Init.call(this.C5={I:this},0);this.__proto__=C.Jp;this.H(Cc
);this.Yw.H(Aod);this.Yw.L(A.jb.Text);this.Ag7.H(Ak_);this.Ag7.L(A.jb.Text);this.
Ag7.Cv(0);this.Bn.JT(J1);this.Bn.Ku(N$);this.Bn.DC(P_);this.Bn.DM(MG);this.C5.DC(
P_);this.C5.DM(N$);this.C5.L(A.jb.Bc);this.J(this.Yw,0);this.J(this.Ag7,0);this.
J(this.Bn,0);this.J(this.C5,0);this.Yw.Ax(A.aaL(A.aci.TL));this.Ag7.Ax(A.aaL(A.aci.
ATH));this.Bn.BL=[this,this.A0k];},_Done:function(){this.__proto__=A.Core.P;this.
Yw._Done();this.Ag7._Done();this.Bn._Done();this.C5._Done();A.Core.P._Done.call(
this);},_ReInit:function(){A.Core.P._ReInit.call(this);this.Yw._ReInit();this.Ag7.
_ReInit();this.Bn._ReInit();this.C5._ReInit();},_Mark:function(D){var B;A.Core.P.
_Mark.call(this,D);if((B=this.Yw)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ag7).
_cycle!=D)B._Mark(B._cycle=D);if((B=this.Bn)._cycle!=D)B._Mark(B._cycle=D);if((B=
this.C5)._cycle!=D)B._Mark(B._cycle=D);},_className:"Demonstrator::ActionsItem"};
C.Acj={AGo:null,DT:null,Yv:null,BT:null,M7:null,AhB:null,ANw:0,Init:function(aArg
){var B;A.zX([this,this.Be2],[B=A._GetAutoObject(A.aco.G0),B.AEz,B.Ar0],0);A.pe([
this,this.Be2],this);},Af7:function(G){var Iz=A.ab0(this.Yv.String,0,10);var Ih=
false;switch(A._GetAutoObject(A.aco.G0).AhA){case 2:Ih=A._GetAutoObject(A.aco.G0
).BBI(Iz);break;case 0:case 1:Ih=A._GetAutoObject(A.aco.G0).Bf1(Iz);break;default:
A.ab5("%s%e",AsT,A._GetAutoObject(A.aco.G0).AhA);}if(Ih){Iz=Iz+1;this.Yv.R(Iz.toFixed(
));}},Be2:function(G){var AJb=null;var AKn=0;switch(A._GetAutoObject(A.aco.G0).AhA
){case 2:{AJb=A.aaL(A.ach.Avv);AKn=276;}break;case 0:{AJb=A.aaL(A.ach.AjU);AKn=900;
}break;case 1:{AJb=A.aaL(C.AxN);AKn=276;}break;default:A.ab5("%s%e",AsT,A._GetAutoObject(
A.aco.G0).AhA);}this.Yv.R(((AKn*1000000000000)+(A.abY(this.Yv.String,0,10)%1000000000000
)).toFixed());this.Yw.Ax(AJb);},BlK:function(E){var F;if(this.ANw===E)return;this.
ANw=E;if(!!this.AGo)(F=this.AGo,F[2].call(F[0],E));},Bkq:function(){return this.
ANw;},_Init:function(aArg){C.Jp._Init.call(this,aArg);A.acq.DT._Init.call(this.DT={
I:this},0);C.Akl._Init.call(this.Yv={I:this},0);A.acg.BT._Init.call(this.BT={I:this
},0);A.acg.Ap._Init.call(this.M7={I:this},0);C.AhB._Init.call(this.AhB={I:this},
0);this.__proto__=C.Acj;var B;this.DT.H(Ax0);this.DT.ArR(120);this.DT.GN=30;this.
DT.ASO(A.jb.Rg);this.DT.A9q(A.jb.CS);this.DT.A9u(A.jb.CS);this.DT.ASP(A.jb.Rg);this.
DT.A9v(A.jb.Text);this.DT.A9r(A.jb.AV);this.DT.A9w(A.jb.Bm);this.DT.A9t(A.jb.AV);
this.DT.A9s(A.jb.Rg);this.Bn.JT(Ax1);this.Bn.DM(O5);this.Yv.H(Rm);this.Yv.R(Ax2);
this.Yv.L(A.jb.Text);this.BT.H(UX);this.BT.Ng(2);this.BT.L(A.jb.Text);this.M7.H(
AsU);this.M7.L(A.jb.Text);this.M7.A6(0xC);this.M7.Cv(3);this.J(this.DT,-2);this.
J(this.Yv,-1);this.J(this.BT,0);this.J(this.M7,0);this.DT.At([this,this.Bkq,this.
BlK]);this.DT.A9C(this.AhB);this.DT.ArJ(A.aaL(A.fl.Bh));this.DT.AwF(A.aaL(A.fl.Bh
));this.M7.Ax(A.aaL(A.ach.Ajq));this.AGo=[B=A._GetAutoObject(A.aco.G0),B.AEz,B.Ar0
];this.Init(aArg);},_Done:function(){this.__proto__=C.Jp;this.DT._Done();this.Yv.
_Done();this.BT._Done();this.M7._Done();this.AhB._Done();C.Jp._Done.call(this);}
,_ReInit:function(){C.Jp._ReInit.call(this);this.DT._ReInit();this.Yv._ReInit();
this.BT._ReInit();this.M7._ReInit();this.AhB._ReInit();this.DT.ArJ(A.aaL(A.fl.Bh
));this.DT.AwF(A.aaL(A.fl.Bh));},_Mark:function(D){var B;C.Jp._Mark.call(this,D);
if((B=this.AGo)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.DT)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.Yv)._cycle!=D)B._Mark(B._cycle=D);if((B=this.BT
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.M7)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.AhB)._cycle!=D)B._Mark(B._cycle=D);},_className:"Demonstrator::ScanIdAction"
};C.Acu={UH:null,OT:null,A3_:0,Init:function(aArg){var B;A.zX([this,this.BAB],[B=
A._GetAutoObject(A.aco.G0),B.ASv,B.ATg],0);A.zX([this,this.AAC],[B=A._GetAutoObject(
A.Device.Device),B.Aru,B.Atf],0);A.pe([this,this.AAC],this);},Ai:function(Ae){C.
Jp.Ai.call(this,Ae);this.OT.Z(!A._GetAutoObject(A.aco.G0).Axl);},Af7:function(G){
var B;A._GetAutoObject(A.aco.G0).BeC(this);},AAC:function(G){if(A._GetAutoObject(
A.Device.Device).TemperatureUnit!==this.A3_){switch(A._GetAutoObject(A.Device.Device
).TemperatureUnit){case 0:this.OT.R(A.abk(A._GetAutoObject(A.aco.G0).WO/100,0,1)
);break;case 1:{var Auk=A._GetAutoObject(A.Device.Converter).AUW(A._GetAutoObject(
A.aco.G0).WO/100,0,A._GetAutoObject(A.Device.Device).TemperatureUnit);this.OT.R(
A.abk(Auk,0,1));}break;default:A.ab5("%s%e",Ax3,A._GetAutoObject(A.Device.Device
).TemperatureUnit);}this.A3_=A._GetAutoObject(A.Device.Device).TemperatureUnit;}
},BAk:function(G){var B;var Agn=A.abX(this.OT.String,0);Agn=A._GetAutoObject(A.Device.
Converter).AUW(Agn,A._GetAutoObject(A.Device.Device).TemperatureUnit,0);Agn*=100;
A._GetAutoObject(A.aco.G0).AFE(Math.round(Agn)|0);},BAB:function(G){this.Am();},
_Init:function(aArg){C.Jp._Init.call(this,aArg);A.acr.UH._Init.call(this.UH={I:this
},0);C.OT._Init.call(this.OT={I:this},0);this.__proto__=C.Acu;var B;this.UH.H(Ax4
);this.UH.A9R(A.aaR(A.acf.A4Z));this.OT.H(Ax5);this.OT.R(Aoe);this.OT.L(A.jb.Text
);this.OT.BlL(true);this.A3_=A._GetAutoObject(A.Device.Device).TemperatureUnit;this.
J(this.UH,0);this.J(this.OT,0);this.Yw.Ax(A.aaL(A.ach.Abz));this.UH.At([B=A._GetAutoObject(
A.aco.G0),B.ASv,B.ATg]);this.UH.OnSetAppearance(A._GetAutoObject(A.acx.AuQ));this.
OT.Di=[this,this.BAk];this.Init(aArg);},_Done:function(){this.__proto__=C.Jp;this.
UH._Done();this.OT._Done();C.Jp._Done.call(this);},_ReInit:function(){C.Jp._ReInit.
call(this);this.UH._ReInit();this.OT._ReInit();this.UH.A9R(A.aaR(A.acf.A4Z));},_Mark:
function(D){var B;C.Jp._Mark.call(this,D);if((B=this.UH)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.OT)._cycle!=D)B._Mark(B._cycle=D);},_className:"Demonstrator::TemperatureAction"
};C.Aq_={Q:null,BT:null,Bn:null,AgH:null,Am4:null,Am3:null,Ard:null,Text:null,Ho:
null,Ap:null,CX:null,Arc:null,Are:null,Apd:false,Bl:function(aSize){this.Ho.H(A.
abK(this.Ho.M,aSize));this.BT.Axs(1);this.BT.Jt(0,40);this.BT.Fk(0,aSize[0]-20,20
,12.5,12.5,-90,90,10);this.BT.Fk(0,20,20,12.5,12.5,90,270,10);this.BT.VM(0);},Ai:
function(Ae){var B;var F;A.Core.P.Ai.call(this,Ae);var IB=((Ae&0x40)===0x40);if(
IB){if(!!this.Q)this.Text.R((F=this.Q,F[1].call(F[0])));this.AgH.Ar(true);this.Ap.
Z(false);}else{if(!!this.Q)this.Text.R((F=this.Q,F[1].call(F[0])));this.AgH.Ar(false
);this.CX.Z(false);this.Ap.Z(true);}this.Apd=IB;},Af7:function(G){var B;if(!((this.
U&0x80)===0x80))this.Im().AMP(this);},A71:function(G){},BaC:function(s){this.A71(
s);},BjS:function(G){var B;var F;if(!this.Q||!(F=this.Q,F[1].call(F[0])).length)
this.CX.H(A.abM(this.CX.M,A.aaI(this.Text.M)[0]));else{this.CX.H(A.abM(this.CX.M
,this.Text.AOM(0)[2]+2));this.CX.H(A.abO(this.CX.M,this.Text.AOM(0)[1]));this.CX.
H(A.abI(this.CX.M,(B=this.Text.AOM(0))[3]-B[1]));}this.Ap.H(A.abM(this.Ap.M,this.
Text.M[0]-((B=this.Ap.M)[2]-B[0])));},A7Z:function(G){},BaB:function(s){this.A7Z(
s);},At:function(E){if(A.aaZ(this.Q,E))return;if(!!this.Q)A.z$([this,this.Kf],this.
Q,0);this.Q=E;if(!!E)A.zX([this,this.Kf],E,0);if(!!E)A.pe([this,this.Kf],this);}
,Kf:function(G){this.Am();},Bln:function(G){var B;if(((this.U&0x80)===0x80))this.
Im().ACz(this);},BeK:function(G){},_Init:function(aArg){A.Core.P._Init.call(this
,aArg);A.Graphics.Hy._Init.call(this.BT={I:this},0);A.Core.Bn._Init.call(this.Bn={
I:this},0);A.acl.TG._Init.call(this.AgH={I:this},0);A.Core.BK._Init.call(this.Am4={
I:this},0);A.Core.BK._Init.call(this.Am3={I:this},0);A.Core.BK._Init.call(this.Ard={
I:this},0);A.acg.Text._Init.call(this.Text={I:this},0);A.acg.Ho._Init.call(this.
Ho={I:this},0);A.acg.Ap._Init.call(this.Ap={I:this},0);A.acg.AK._Init.call(this.
CX={I:this},0);A.Core.BK._Init.call(this.Arc={I:this},0);A.Core.BK._Init.call(this.
Are={I:this},0);this.__proto__=C.Aq_;var B;this.H(AfA);this.Bn.AZ(0x3F);this.Bn.
JT(J1);this.Bn.Ku(Aof);this.Bn.DC(IU);this.Bn.DM(Rl);this.AgH.Fp(530);this.AgH.Um(
530);this.Am4.Filter=143;this.Am3.Filter=45;this.Ard.Filter=1;this.Text.AZ(0x3F);
this.Text.H(AfA);this.Text.I_(true);this.Text.A6(0x12);this.Text.L(0xFFB3B3B3);this.
Ho.H(AfA);this.Ho.L(0xFFB3B3B3);this.Ho.Ng(1);this.Ap.H(Aog);this.CX.H(Xa);this.
CX.L(0xFFB3B3B3);this.CX.Z(false);this.Arc.Filter=138;this.Are.Filter=137;this.J(
this.Bn,0);this.J(this.Text,0);this.J(this.Ho,0);this.J(this.Ap,0);this.J(this.CX
,0);this.Bn.Ln=[this,this.Af7];this.AgH.Q=[B=this.CX,B.Fo,B.Z];this.Am4.BL=[this
,this.BaC];this.Am4.D1=[this,this.BaC];this.Am3.BL=[this,this.BaB];this.Am3.D1=[
this,this.BaB];this.Ard.BL=[this,this.Bln];this.Text.Q5([this,this.BjS]);this.Text.
S(A.aaL(A.fl.Ak));this.Ho.Zs(this.BT);this.Ap.Ax(null);this.Arc.BL=[this,this.BeK
];this.Are.BL=[this,this.BeK];},_Done:function(){this.__proto__=A.Core.P;this.BT.
_Done();this.Bn._Done();this.AgH._Done();this.Am4._Done();this.Am3._Done();this.
Ard._Done();this.Text._Done();this.Ho._Done();this.Ap._Done();this.CX._Done();this.
Arc._Done();this.Are._Done();A.Core.P._Done.call(this);},_ReInit:function(){A.Core.
P._ReInit.call(this);this.BT._ReInit();this.Bn._ReInit();this.AgH._ReInit();this.
Am4._ReInit();this.Am3._ReInit();this.Ard._ReInit();this.Text._ReInit();this.Ho.
_ReInit();this.Ap._ReInit();this.CX._ReInit();this.Arc._ReInit();this.Are._ReInit(
);this.Text.S(A.aaL(A.fl.Ak));},_Mark:function(D){var B;A.Core.P._Mark.call(this
,D);if((B=this.Q)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.BT)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.Bn)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
AgH)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Am4)._cycle!=D)B._Mark(B._cycle=D);
if((B=this.Am3)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ard)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Text)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ho)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.Ap)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
CX)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Arc)._cycle!=D)B._Mark(B._cycle=D);
if((B=this.Are)._cycle!=D)B._Mark(B._cycle=D);},_className:"Demonstrator::InputView"
};C.Aep={Background:null,Yl:null,_Init:function(aArg){A.Core.P._Init.call(this,aArg
);A.acg.AK._Init.call(this.Background={I:this},0);C.Yl._Init.call(this.Yl={I:this
},0);this.__proto__=C.Aep;var B;this.H(Aoh);this.Background.H(Aoh);this.Yl.AZ(0x1D
);this.Yl.H(AsV);this.J(this.Background,0);this.J(this.Yl,0);this.Yl.At([B=A._GetAutoObject(
A.aco.AgK),B.A8O,B.AFz]);},_Done:function(){this.__proto__=A.Core.P;this.Background.
_Done();this.Yl._Done();A.Core.P._Done.call(this);},_ReInit:function(){A.Core.P.
_ReInit.call(this);this.Background._ReInit();this.Yl._ReInit();},_Mark:function(
D){var B;A.Core.P._Mark.call(this,D);if((B=this.Background)._cycle!=D)B._Mark(B.
_cycle=D);if((B=this.Yl)._cycle!=D)B._Mark(B._cycle=D);},_className:"Demonstrator::FilterRow"
};C.OT={Init:function(aArg){var B;A.zX([this,this.AAC],[B=A._GetAutoObject(A.Device.
Device),B.Aru,B.Atf],0);A.pe([this,this.AAC],this);},Ai:function(Ae){var B;C.Akl.
Ai.call(this,Ae);var IB=((this.U&0x40)===0x40);if(!IB&&(this.String.length>0))this.
Text.R(((this.String+AsW)+A._GetAutoObject(A.acj.Temperature).AlG())+String.fromCharCode(
0x0A));else this.Text.R(this.String+String.fromCharCode(0x0A));if(this.D6>this.String.
length)this.D6=this.String.length;},AAC:function(G){this.Am();},_Init:function(aArg
){C.Akl._Init.call(this,aArg);this.__proto__=C.OT;this.Init(aArg);},_className:"Demonstrator::TemperatureInputView"
};C.Akl={B6:null,Di:null,IV:null,Cq:null,Amz:null,Se:null,KL:null,Bn:null,Text:null
,CX:null,Aqt:null,Asa:null,BT:null,Ho:null,Arq:null,AqY:null,AqG:null,String:A.jV
,D6:0,AQ:0xFFB3B3B3,AvU:15,ANE:false,Lz:false,Bl:function(aSize){this.Ho.H(A.abK(
this.Ho.M,aSize));this.BT.Axs(1);this.BT.Jt(0,40);this.BT.Fk(0,aSize[0]-20,20,12.5
,12.5,-90,90,10);this.BT.Fk(0,20,20,12.5,12.5,90,270,10);this.BT.VM(0);},Ai:function(
Ae){var B;A.acn.Jc.Ai.call(this,Ae);if(((Ae&0x40)===0x40))this.IV.Ar(true);else{
this.IV.Ar(false);this.CX.Z(false);}},A4i:function(G){var B;var Bd=this.Text.M;var
Nu=0;var Nv=0;if(this.CX.Es[0]<Bd[0])Nu=Bd[0]-this.CX.Es[0];if(this.CX.Es[0]>Bd[
2])Nu=Bd[2]-this.CX.Es[0];if(this.CX.Es[1]<Bd[1])Nv=Bd[1]-this.CX.Es[1];if(this.
CX.EC[1]>Bd[3])Nv=Bd[3]-this.CX.EC[1];if(!!Nu||!!Nv)this.Text.Ga(A.abf(this.Text.
Br,[Nu,Nv]));Nu=this.Text.Br[0];Nv=this.Text.Br[1];var C4=[(B=this.Text.Db())[2]-
B[0],B[3]-B[1]];if(C4[0]<=((B=this.Text.M)[2]-B[0]))Nu=0;if(C4[1]<=((B=this.Text.
M)[3]-B[1]))Nv=0;this.Text.Ga([Nu,Nv]);},Amh:function(G){if(!this.B6)return;var A3M=
this.Text.AGK(this.D6);var pos=this.Text.Aff(A3M);this.CX.DM(A.abe(pos,[0,this.B6.
Ascent]));this.CX.DC(A.abf(pos,[0,this.B6.Descent]));if(this.IV.Bw){this.IV.Ar(false
);this.IV.Ar(true);}if(this.Lz){A.pe([this,this.A4i],this);this.Lz=false;}},AAy:
function(G){if(!this.A6K(0x80))this.Im().AMP(this);var EH=this.Text.ATL(this.Bn.
H0);var Vf=this.Text.AnN(EH);if(Vf!==this.D6){this.D6=Vf;A.pe([this,this.Amh],this
);this.Lz=true;}},AAs:function(G){if(!this.B6)return;var EH=this.Text.AGK(this.D6
);if(this.Cq.CO===6){EH=[EH[0]-1,EH[1]];if(this.Text.AnN(EH)===this.D6){EH=[EH[0
],EH[1]-1];EH=[this.Text.ACX(EH[1]).length,EH[1]];}}if(this.Cq.CO===7){EH=[EH[0]+
1,EH[1]];if(this.Text.AnN(EH)===this.D6){EH=[EH[0],EH[1]+1];EH=[0,EH[1]];}}var Vf=
this.Text.AnN(EH);if(Vf!==this.D6){this.D6=Vf;A.pe([this,this.Amh],this);this.Lz=
true;}},Bet:function(G){if(!this.D6)return;this.R(A.ab1(this.String,this.D6-1,1)
);this.D6=this.D6-1;this.Lz=true;A.pe(this.Di,this);},AAt:function(G){if(this.D6>=
this.String.length)return;this.R(A.ab1(this.String,this.D6,1));this.Lz=true;A.pe(
this.Di,this);},Bey:function(G){if(this.String.length>=this.AvU)return;var ByG=this.
KL.DQ;var Aui=String.fromCharCode(ByG);this.R(A.abU(this.String,Aui,this.D6));this.
D6=this.D6+Aui.length;this.Lz=true;A.pe(this.Di,this);},R:function(E){if(this.String===
E)return;this.String=E;if(this.D6>(E.length+1))this.D6=E.length;this.Text.R(E+String.
fromCharCode(0x0A));this.Lz=true;this.Text.Ga(J1);},L:function(E){if(this.AQ===E
)return;this.AQ=E;this.Text.L(E);this.CX.L(E);this.Ho.L(E);},S:function(E){if(this.
B6===E)return;this.B6=E;this.Text.S(E);this.Lz=true;this.Text.Ga(J1);},BeL:function(
G){if(this.ANE===false)return;if(this.String.indexOf(String.fromCharCode(0x2E),0
)>=0)return;if(this.String.length>=this.AvU)return;this.R(A.abU(this.String,S$,this.
D6));this.D6=this.D6+1;this.Lz=true;A.pe(this.Di,this);},Bbl:function(s){this.BeL(
s);},BlL:function(E){if(this.ANE===E)return;this.ANE=E;if(E===false){var Bfs=this.
String.indexOf(String.fromCharCode(0x2E),0);if(Bfs>=0)this.R(A.abV(this.String,Bfs
));}this.Lz=true;this.Text.Ga(J1);},BmR:function(E){if(this.AvU===E)return;this.
AvU=E;this.R(A.abV(this.String,E));this.Lz=true;this.Text.Ga(J1);},BAs:function(
G){if(this.A6K(0x80)){this.Im().ACz(this);this.Cr(0x10,0x0);}this.Am();},BAg:function(
G){var Vf=this.String.length;if(Vf!==this.D6){this.D6=Vf;A.pe([this,this.Amh],this
);this.Lz=true;}},BAj:function(G){if(!!this.D6){this.D6=0;A.pe([this,this.Amh],this
);this.Lz=true;}},_Init:function(aArg){A.acn.Jc._Init.call(this,aArg);A.acl.TG._Init.
call(this.IV={I:this},0);A.Core.BK._Init.call(this.Cq={I:this},0);A.Core.BK._Init.
call(this.Amz={I:this},0);A.Core.BK._Init.call(this.Se={I:this},0);A.Core.BK._Init.
call(this.KL={I:this},0);A.Core.Bn._Init.call(this.Bn={I:this},0);A.acg.Text._Init.
call(this.Text={I:this},0);A.acg.C5._Init.call(this.CX={I:this},0);A.Core.BK._Init.
call(this.Aqt={I:this},0);A.Core.BK._Init.call(this.Asa={I:this},0);A.Graphics.Hy.
_Init.call(this.BT={I:this},0);A.acg.Ho._Init.call(this.Ho={I:this},0);A.Core.BK.
_Init.call(this.Arq={I:this},0);A.Core.BK._Init.call(this.AqY={I:this},0);A.Core.
BK._Init.call(this.AqG={I:this},0);this.__proto__=C.Akl;var B;this.H(AfA);this.IV.
B1=false;this.IV.Cw=true;this.IV.Fp(500);this.IV.Um(500);this.Cq.Filter=147;this.
Amz.Filter=45;this.Se.Filter=44;this.KL.Filter=143;this.Bn.AZ(0x3F);this.Bn.JT(Rl
);this.Bn.Ku(IU);this.Bn.DC(Aof);this.Bn.DM(J1);this.Bn.AFl(3);this.Text.AZ(0x3F
);this.Text.H(AfA);this.Text.KR(false);this.Text.A6(0x12);this.Text.R(A.jV);this.
Text.L(0xFFB3B3B3);this.CX.DC(AsX);this.CX.DM(Aoi);this.CX.A_u(2);this.CX.A_t(2);
this.CX.L(0xFFB3B3B3);this.CX.Z(false);this.Aqt.Filter=138;this.Asa.Filter=137;this.
Ho.H(AfA);this.Ho.L(0xFFB3B3B3);this.Ho.Ng(1);this.Arq.Filter=1;this.AqY.Filter=
41;this.AqG.Filter=42;this.J(this.Bn,0);this.J(this.Text,0);this.J(this.CX,0);this.
J(this.Ho,0);this.IV.Q=[B=this.CX,B.Fo,B.Z];this.Cq.BL=[this,this.AAs];this.Cq.D1=[
this,this.AAs];this.Amz.BL=[this,this.Bet];this.Amz.D1=[this,this.Bet];this.Se.BL=[
this,this.AAt];this.Se.D1=[this,this.AAt];this.KL.BL=[this,this.Bey];this.KL.D1=[
this,this.Bey];this.Bn.BL=[this,this.AAy];this.Text.Q5([this,this.Amh]);this.Text.
S(A.aaL(A.fl.Ak));this.B6=A.aaL(A.fl.Ak);this.Aqt.BL=[this,this.Bbl];this.Asa.BL=[
this,this.Bbl];this.Ho.Zs(this.BT);this.Arq.BL=[this,this.BAs];this.AqY.BL=[this
,this.BAj];this.AqG.BL=[this,this.BAg];},_Done:function(){this.__proto__=A.acn.Jc;
this.IV._Done();this.Cq._Done();this.Amz._Done();this.Se._Done();this.KL._Done();
this.Bn._Done();this.Text._Done();this.CX._Done();this.Aqt._Done();this.Asa._Done(
);this.BT._Done();this.Ho._Done();this.Arq._Done();this.AqY._Done();this.AqG._Done(
);A.acn.Jc._Done.call(this);},_ReInit:function(){A.acn.Jc._ReInit.call(this);this.
IV._ReInit();this.Cq._ReInit();this.Amz._ReInit();this.Se._ReInit();this.KL._ReInit(
);this.Bn._ReInit();this.Text._ReInit();this.CX._ReInit();this.Aqt._ReInit();this.
Asa._ReInit();this.BT._ReInit();this.Ho._ReInit();this.Arq._ReInit();this.AqY._ReInit(
);this.AqG._ReInit();this.Text.S(A.aaL(A.fl.Ak));this.S(A.aaL(A.fl.Ak));},_Mark:
function(D){var B;A.acn.Jc._Mark.call(this,D);if((B=this.B6)&&(B._cycle!=D))B._Mark(
B._cycle=D);if((B=this.Di)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.
IV)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Cq)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Amz)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Se)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.KL)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Bn)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Text)._cycle!=D)B._Mark(B._cycle=D);if((B=this.CX)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.Aqt)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
Asa)._cycle!=D)B._Mark(B._cycle=D);if((B=this.BT)._cycle!=D)B._Mark(B._cycle=D);
if((B=this.Ho)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Arq)._cycle!=D)B._Mark(B.
_cycle=D);if((B=this.AqY)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AqG)._cycle!=
D)B._Mark(B._cycle=D);},_className:"Demonstrator::NumberInput"};C.Act={LabelDataSync:
null,Af7:function(G){var B;A.pe([B=A._GetAutoObject(A.acs.Acn),B.BBT],this);},_Init:
function(aArg){C.Jp._Init.call(this,aArg);A.kR.CH._Init.call(this.LabelDataSync={
I:this},0);this.__proto__=C.Act;this.LabelDataSync.H(Aoj);this.LabelDataSync.R(A.
aaR(A.acf.A5z));this.LabelDataSync.L(A.jb.Text);this.J(this.LabelDataSync,0);this.
Yw.Ax(A.aaL(C.AUN));this.LabelDataSync.S(A.aaL(A.fl.Af));this.LabelDataSync.A2(A.
aaL(A.fl.Ak));},_Done:function(){this.__proto__=C.Jp;this.LabelDataSync._Done();
C.Jp._Done.call(this);},_ReInit:function(){C.Jp._ReInit.call(this);this.LabelDataSync.
_ReInit();this.LabelDataSync.R(A.aaR(A.acf.A5z));this.LabelDataSync.S(A.aaL(A.fl.
Af));this.LabelDataSync.A2(A.aaL(A.fl.Ak));},_Mark:function(D){var B;C.Jp._Mark.
call(this,D);if((B=this.LabelDataSync)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Demonstrator::SyncAction"};C.AUN={_class:function(){return A.aci.Al;},0:{FileName:
"./res_index/DemonstratorSyncIcon.png",Format:A._PIXEL_FORMAT_NATIVE,NoOfFrames:
1,FrameSize:[50,60],FrameDelay:0,_this:null}};C.Aba={TimespanDaysToString:null,Avn:
function(aIndex){if(this.AqR()>aIndex)return this.TimespanDaysToString.BR(aIndex
);A.ab5("%s",AsY);return A.jV;},AqR:function(){return 4;},C7:function(aIndex){var
Ai_=0;switch(aIndex){case 0:Ai_=0;break;case 1:Ai_=1;break;case 2:Ai_=2;break;case
3:Ai_=3;break;default:throw new Error(Ax6+aIndex.toFixed());}return Ai_;},_Init:
function(aArg){A.acq.VN._Init.call(this,aArg);A.Device.TimespanDaysToString._Init.
call(this.TimespanDaysToString={I:this},0);this.__proto__=C.Aba;},_Done:function(
){this.__proto__=A.acq.VN;this.TimespanDaysToString._Done();A.acq.VN._Done.call(
this);},_ReInit:function(){A.acq.VN._ReInit.call(this);this.TimespanDaysToString.
_ReInit();},_Mark:function(D){var B;A.acq.VN._Mark.call(this,D);if((B=this.TimespanDaysToString
)._cycle!=D)B._Mark(B._cycle=D);},_className:"Demonstrator::DatePickerUnitDD"};C.
BFF={GK:0,AVu:1,Hj:2,Year:3};C.ACw={_class:function(){return A.aci.Al;},0:{FileName:
"./res_index/DemonstratorEarTagIcon.png",Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:
2,FrameSize:[37,37],FrameDelay:0,_this:null}};C.AxN={_class:function(){return A.
aci.Al;},0:{FileName:"./res_index/DemonstratorTransponderEarTagIcon.png",Format:
A._PIXEL_FORMAT_ALPHA8,NoOfFrames:2,FrameSize:[37,37],FrameDelay:0,_this:null}};
C.ZD={Aee:null,Init:function(aArg){var Au=A._NewObject(A.Core.Bs,0);Au.Initialize(
A._GetAutoObject(A.Device.Helper).Dv());var A1t=Au.Format(It);this.Aee.R(A1t);},
Af7:function(G){var B;var J7=this.Aee.String;var O;O=J7.indexOf(String.fromCharCode(
0x2E),0);while(O>=0){J7=A.ab1(J7,O,1);O=J7.indexOf(String.fromCharCode(0x2E),O);
}J7=J7+Ax7;J7=J7+A._GetAutoObject(A.acj.VD).ACT(J7).toFixed();var A1t=A._GetAutoObject(
A.Device.AnH).Bfh(J7);A._GetAutoObject(A.aco.G0).BBJ(((B=(A1t|0))<0)?B+0x100000000:
B);},_Init:function(aArg){C.Jp._Init.call(this,aArg);C.ANB._Init.call(this.Aee={
I:this},0);this.__proto__=C.ZD;this.Aee.H(Rm);this.Aee.L(A.jb.Text);this.Aee.BmR(
10);this.J(this.Aee,-1);this.Yw.Ax(A.aaL(A.ach.Avv));this.Init(aArg);},_Done:function(
){this.__proto__=C.Jp;this.Aee._Done();C.Jp._Done.call(this);},_ReInit:function(
){C.Jp._ReInit.call(this);this.Aee._ReInit();},_Mark:function(D){var B;C.Jp._Mark.
call(this,D);if((B=this.Aee)._cycle!=D)B._Mark(B._cycle=D);},_className:"Demonstrator::ScanDateAction"
};C.AhA={BFT:0,BFP:1,VD:2,LAST:3};C.AhB={AhC:null,Avn:function(aIndex){if(this.AqR(
)>aIndex)return this.AhC.BR(aIndex);A.ab5("%s",AsY);return A.jV;},AqR:function(){
return 3;},_Init:function(aArg){A.acq.VN._Init.call(this,aArg);C.AhC._Init.call(
this.AhC={I:this},0);this.__proto__=C.AhB;},_Done:function(){this.__proto__=A.acq.
VN;this.AhC._Done();A.acq.VN._Done.call(this);},_ReInit:function(){A.acq.VN._ReInit.
call(this);this.AhC._ReInit();},_Mark:function(D){var B;A.acq.VN._Mark.call(this
,D);if((B=this.AhC)._cycle!=D)B._Mark(B._cycle=D);},_className:"Demonstrator::ScanTypeDD"
};C.AhC={BR:function(A7){var BcM=A7;var AKU=A.jV;switch(BcM){case 2:AKU=A.aaR(A.
acf.VD);break;case 0:AKU=A.aaR(A.acf.Transponder);break;case 1:AKU=A.aaR(A.acf.Bh8
);break;default:throw new Error(Ax8+BcM.toFixed());}return AKU;},_Init:function(
aArg){A.Device.EnumToString._Init.call(this,aArg);this.__proto__=C.AhC;},_className:
"Demonstrator::ScanTypeToString"};C.ANB={BeL:function(G){var Bft=0;var O=this.String.
indexOf(String.fromCharCode(0x2E),0);while(O>=0){Bft++;O++;O=this.String.indexOf(
String.fromCharCode(0x2E),O);}if(Bft>=2)return;if(this.String.length>=this.AvU)return;
this.R(A.abU(this.String,S$,this.D6));this.D6=this.D6+1;this.Lz=true;A.pe(this.Di
,this);},_Init:function(aArg){C.Akl._Init.call(this,aArg);this.__proto__=C.ANB;}
,_className:"Demonstrator::DateInput"};
C._Init=function(){C.AVo.__proto__=A.acn.Menu;C.AUk.__proto__=A.Core.P;C.AMo.__proto__=
C.Ba;C.Mh.__proto__=A.Core.P;C.Yl.__proto__=C.Aq_;C.Abb.__proto__=A.Core.P;C.Avy.
__proto__=A.acn.Ahv;C.AMC.__proto__=C.FB;C.Auv.__proto__=C.FB;C.Ba.__proto__=A.Core.
P;C.FB.__proto__=A.Core.P;C.ANC.__proto__=A.acn.Aht;C.AhF.__proto__=A.Core.P;C.AMv.
__proto__=C.AhF;C.Vu.__proto__=C.Auv;C.ALZ.__proto__=A.Core.P;C.Jp.__proto__=A.Core.
P;C.Acj.__proto__=C.Jp;C.Acu.__proto__=C.Jp;C.Aq_.__proto__=A.Core.P;C.Aep.__proto__=
A.Core.P;C.OT.__proto__=C.Akl;C.Akl.__proto__=A.acn.Jc;C.Act.__proto__=C.Jp;C.Aba.
__proto__=A.acq.VN;C.ZD.__proto__=C.Jp;C.AhB.__proto__=A.acq.VN;C.AhC.__proto__=
A.Device.EnumToString;C.ANB.__proto__=C.Akl;};C._ReInit=function(){};C.DH=function(
D){var B;if((B=C.Background[0]._this)&&(B._cycle!=D))B._Done(C.Background[0]._this=
null);if((B=C.AMY[0]._this)&&(B._cycle!=D))B._Done(C.AMY[0]._this=null);if((B=C.
AMZ[0]._this)&&(B._cycle!=D))B._Done(C.AMZ[0]._this=null);if((B=C.AM0[0]._this)&&(
B._cycle!=D))B._Done(C.AM0[0]._this=null);if((B=C.AM1[0]._this)&&(B._cycle!=D))B.
_Done(C.AM1[0]._this=null);if((B=C.AP1[0]._this)&&(B._cycle!=D))B._Done(C.AP1[0].
_this=null);if((B=C.Filter[0]._this)&&(B._cycle!=D))B._Done(C.Filter[0]._this=null
);if((B=C.ARA[0]._this)&&(B._cycle!=D))B._Done(C.ARA[0]._this=null);if((B=C.Ajp[
0]._this)&&(B._cycle!=D))B._Done(C.Ajp[0]._this=null);if((B=C.AMF[0]._this)&&(B.
_cycle!=D))B._Done(C.AMF[0]._this=null);if((B=C.Asr[0]._this)&&(B._cycle!=D))B._Done(
C.Asr[0]._this=null);if((B=C.AUS[0]._this)&&(B._cycle!=D))B._Done(C.AUS[0]._this=
null);if((B=C.AHd[0]._this)&&(B._cycle!=D))B._Done(C.AHd[0]._this=null);if((B=C.
AVF[0]._this)&&(B._cycle!=D))B._Done(C.AVF[0]._this=null);if((B=C.AUN[0]._this)&&(
B._cycle!=D))B._Done(C.AUN[0]._this=null);if((B=C.ACw[0]._this)&&(B._cycle!=D))B.
_Done(C.ACw[0]._this=null);if((B=C.AxN[0]._this)&&(B._cycle!=D))B._Done(C.AxN[0].
_this=null);};return C;})();

/* VitalControl demonstration application, © Urban GmbH & Co.KG 2023 */