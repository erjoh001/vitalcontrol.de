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
var Cd=[0,0,370,60];var BF=[360,0,370,60];var E4=[0,0,370,710];var Hm="Unknown animalType";
var IQ=[58,10,120,50];var Ip=[0,0,60,60];var O1=[120,0,360,60];var P1="\u2015";var
P2=[0,0,240,60];var CQ=[0,0,40,60];var E$=[100,0,130,60];var Lu=[43,0,100,60];var
P3=[125,0,240,60];var JY=[0,0];var N_=[100,0];var P4=[100,60];var MF=[0,60];var S5=[
107,0];var UO=[240,0];var Z5=[240,60];var W1=[107,60];var Iq="%d.%m.%Y";var UP="Unhandled date unit: ";
var Z6=[0,0,200,180];var W2=[36,0,200,30];var Z7=[0,30,160,60];var W3="Text";var
Z8=[0,70,40,110];var Z9=[44,70,156,110];var UQ=[160,70,200,110];var W4=[7,2,27,25
];var P5=[0,30,170,180];var Z_=[170,34,190,57];var O2=[0,0,40,40];var Ri=[0,40];
var W5=[40,40];var W6=[40,0];var W7=[0,0,370,100];var W8=[20,0,290,60];var Z$=[0
,60,370,100];var W9="Cap";var W_=[20,0,370,60];var S6=[310,0,370,60];var UR=[370
,0];var US=[370,60];var AcL="UpdateData is called for the base class ListItemBase. Please make "+
"sure this method is implemented by a derived class.";var S7=".";var Aaa=[0,0,170
,150];var Afv=[0,59,170,90];var Aab=[110,0,170,150];var W$=[0,30];var Aac=[50,0,
100,150];var Aad=[0,0,40,150];var AhO=[0,0,370,240];var JZ=[0,60,370,710];var Aae=[
0,0,370,300];var Lv=[0,60,370,300];var AhP=[0,60,370,120];var Aob=[0,120,370,180
];var N$=[0,180,370,240];var Xa=[0,240,370,300];var Aoc=[370,120];var AhQ=[0,120
];var AhR=[370,180];var AcM=[0,180];var UT=[370,240];var Aod=[0,240];var Aoe=[370
,300];var Aof=[0,300];var Aog=[0,0,50,60];var Afw=[50,0,100,60];var Ak$="Unhandled scan type";
var AxW=[3,11,253,51];var AxX=[50,0];var O3=[50,60];var Rj=[100,10,370,50];var AxY=
"276000901234567";var UU=[3,10,57,50];var AsS=[3,11,55,50];var AxZ="Unhandled temperature unit";
var Ax0=[110,0,260,60];var Ax1=[235,10,370,50];var Aoh="39.5";var Afx=[0,0,270,40
];var Aoi=[270,0];var IR=[270,40];var Aoj=[150,0,170,40];var Xb=[205,10,207,30];
var Aok=[0,0,370,40];var AsT=[50,0,320,40];var AsU=" ";var AsV=[135,23];var Aol=[
135,0];var Aom=[100,0,370,60];var AsW="Error: Nullpointer Exception";var Ax2="Unknown Date Piecker Unit Index: ";
var Ax3="0";var Ax4="Unhandled scan type:";
C.Background={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/DemonstratorBackground.png"
,Format:A._PIXEL_FORMAT_NATIVE,NoOfFrames:1,FrameSize:[1000,740],FrameDelay:0,_this:
null}};C.AM1={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/DemonstratorButtonLeft.png"
,Format:A._PIXEL_FORMAT_NATIVE,NoOfFrames:1,FrameSize:[40,40],FrameDelay:0,_this:
null}};C.AM2={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/DemonstratorButtonLeftPressed.png"
,Format:A._PIXEL_FORMAT_NATIVE,NoOfFrames:1,FrameSize:[40,40],FrameDelay:0,_this:
null}};C.AM3={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/DemonstratorButtonRight.png"
,Format:A._PIXEL_FORMAT_NATIVE,NoOfFrames:1,FrameSize:[40,40],FrameDelay:0,_this:
null}};C.AM4={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/DemonstratorButtonRightPressed.png"
,Format:A._PIXEL_FORMAT_NATIVE,NoOfFrames:1,FrameSize:[40,40],FrameDelay:0,_this:
null}};C.AP5={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/DemonstratorIconDatePicker.png"
,Format:A._PIXEL_FORMAT_NATIVE,NoOfFrames:1,FrameSize:[20,23],FrameDelay:0,_this:
null}};C.Filter={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/DemonstratorFilter.png"
,Format:A._PIXEL_FORMAT_NATIVE,NoOfFrames:1,FrameSize:[15,16],FrameDelay:0,_this:
null}};C.ARE={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/DemonstratorMenuIcon.png"
,Format:A._PIXEL_FORMAT_NATIVE,NoOfFrames:1,FrameSize:[20,16],FrameDelay:0,_this:
null}};C.Ajp={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/DemonstratorArrowRight.png"
,Format:A._PIXEL_FORMAT_NATIVE,NoOfFrames:1,FrameSize:[17,16],FrameDelay:0,_this:
null}};C.AMI={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/DemonstratorArrowDown.png"
,Format:A._PIXEL_FORMAT_NATIVE,NoOfFrames:1,FrameSize:[17,16],FrameDelay:0,_this:
null}};C.Asr={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/DemonstratorScanIcon.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:2,FrameSize:[37,37],FrameDelay:0,_this:
null}};C.AUY={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/DemonstratorTemperatureIcon.png"
,Format:A._PIXEL_FORMAT_NATIVE,NoOfFrames:1,FrameSize:[17,37],FrameDelay:0,_this:
null}};C.AVu={Ad$:null,AX:null,AR:null,Background:null,H7:null,AD:null,IN:null,Dl:
null,Lj:null,A7q:null,A7S:0,Bk:function(aSize){A.acn.Menu.Bk.call(this,aSize);this.
IN.H(A.abP(this.IN.M,this.AD.OP));this.IN.H([].concat(this.IN.M.slice(0,3),aSize[
1]));},Ai:function(Ae){var B;A.acn.Menu.Ai.call(this,Ae);var Iy=((Ae&0x40)===0x40
);if(Iy&&(this.AD.Go<0))this.AD.G2(0);},NZ:function(E){if(this.Lj===E)return;this.
Lj=E;this.AD.NZ(E);},BmG:function(E){var B;if(this.A7q===E)return;if(!!this.Ad$){
this.HN(this.Ad$);this.Ad$=null;}if(!!E){this.Ad$=(C.Fx.isPrototypeOf(B=A._NewObject(
E,0))?B:null);this.Ad$.A9U([this,this.Akr]);this.Ad$.A9V([this,this.Aks]);this.Ad$.
BmM(null);this.J(this.Ad$,0);this.AD.A91((B=this.Ad$.M)[3]-B[1]);}else this.AD.A91(
0);this.IN.H(A.abP(this.IN.M,this.AD.OP));A.pe([this,this.Fe],this);this.A7q=E;}
,Hg:function(G){var B;var Gc=this.AD.G0;var Aa=(C.Ba.isPrototypeOf(B=this.AD.Ch)?
B:null);if(!Aa)return;Aa.Zs(this.AX);Aa.Cf(Gc);Aa.Zu(this.AR);Aa.H(A.abK(Aa.M,[(
B=this.AD.M)[2]-B[0],this.AD.GK]));},Zs:function(E){var B;if(this.AX===E)return;
if(!!this.AX){A.z9([this,this.Cf],this.AX,0);A.z$([this,this.An6],[B=this.AX,B.Fj
,B.Fn],0);}this.AX=E;if(!!E){A.zV([this,this.Cf],E,0);A.zX([this,this.An6],[E,E.
Fj,E.Fn],0);}A.pe([this,this.Cf],this);A.pe([this,this.An6],this);},Cf:function(
G){if(!!this.AX){this.AD.Ju(this.AX.Ca());this.AD.AbG(0,this.AD.AY-1);}else this.
AD.Ju(0);if(this.A7S!==this.AD.AY){this.AD.ABy(null,null);this.A7S=this.AD.AY;}A.
pe([this,this.Fe],this);},Aks:function(G){var B;this.H(A.abI(this.M,(B=this.AD.AOP(
))[3]-B[1]));},Akr:function(G){this.H(A.abI(this.M,180));},A9a:function(G){var Jy=(
A.Core.BM.isPrototypeOf(G)?G:null);var Gc=this.AD.Go;if(Jy.CO===4)Gc=Gc-1;else if(
Jy.CO===5)Gc=Gc+1;else if((Jy.DP>=0x30)&&(Jy.DP<=0x39))A._GetAutoObject(A.aco.AgD
).Ey(Jy.DP);else if(Jy.CO===45)A._GetAutoObject(A.aco.AgD).Delete();else Jy.NH=true;
if((Gc<0)||(Gc>=this.AD.AY))return;this.AD.G2(Gc);this.ByE(Gc,true);},Byt:function(
G){var Aa=(C.Ba.isPrototypeOf(G)?G:null);this.AD.G2(Aa.Hn);},ByE:function(G6,AcY
){var B;if((G6<0)||(G6>=this.AD.AY))return;var Az=this.AD.AqS(G6,G6);var Bd=this.
AD.M;Bd=A.abP(Bd,(B=this.AD.AOP())[3]-B[1]);Bd=A.abI(Bd,(((B=this.AD.M)[3]-B[1])-((
B=this.AD.AOP())[3]-B[1]))-((B=this.AD.BiF())[3]-B[1]));var LN=A.lb(Az,Bd);if((!
AcY&&!((LN[0]>=LN[2])||(LN[1]>=LN[3])))||(AcY&&A.aaY(LN,Az)))return;var Bq=0;if(
Az[3]>Bd[3])Bq=Az[3]-Bd[3];if(Bq>(Az[1]-Bd[1]))Bq=(Az[3]-Bd[1])-this.AD.GK;this.
AD.F_(this.AD.Br-Bq);},An6:function(G){this.AD.G2(-1);},Fe:function(G){var B;this.
IN.Mu(this.AD.GK*this.AD.AY);this.IN.Mw(((B=this.AD.M)[3]-B[1])-this.AD.OP);this.
IN.Mv(-this.AD.Br);},_Init:function(aArg){A.acn.Menu._Init.call(this,aArg);A.acg.
AK._Init.call(this.Background={I:this},0);A.Core.H7._Init.call(this.H7={I:this},
0);A.Core.CM._Init.call(this.AD={I:this},0);A.kR.Ay._Init.call(this.IN={I:this},
0);A.Core.BM._Init.call(this.Dl={I:this},0);this.__proto__=C.AVu;this.H(Cd);this.
Background.AZ(0x3);this.Background.H(Cd);this.H7.AZ(0x3F);this.H7.H(Cd);this.AD.
AZ(0x3F);this.AD.H(Cd);this.AD.Ae2(60);this.AD.Ju(0);this.AD.NZ(this.Lj);this.IN.
AZ(0x3A);this.IN.H(BF);this.IN.L(0xFF808080);this.J(this.Background,0);this.J(this.
H7,0);this.J(this.AD,0);this.J(this.IN,0);this.AD.El=[this,this.Fe];this.AD.Hg=[
this,this.Hg];this.AD.AwY(this.H7);this.AR=[this,this.Byt];this.Dl.BN=[this,this.
A9a];this.Dl.D1=[this,this.A9a];},_Done:function(){this.__proto__=A.acn.Menu;this.
Background._Done();this.H7._Done();this.AD._Done();this.IN._Done();this.Dl._Done(
);A.acn.Menu._Done.call(this);},_ReInit:function(){A.acn.Menu._ReInit.call(this);
this.Background._ReInit();this.H7._ReInit();this.AD._ReInit();this.IN._ReInit();
this.Dl._ReInit();},_Mark:function(D){var B;A.acn.Menu._Mark.call(this,D);if((B=
this.Ad$)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.AX)&&(B._cycle!=D))B._Mark(
B._cycle=D);if((B=this.AR)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.
Background)._cycle!=D)B._Mark(B._cycle=D);if((B=this.H7)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.AD)._cycle!=D)B._Mark(B._cycle=D);if((B=this.IN)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Dl)._cycle!=D)B._Mark(B._cycle=D);},_className:"Demonstrator::VerticalMenu"
};C.AUq={GG:null,AK:null,BU:null,Init:function(aArg){var B;A.zX([this,this.GE],[
B=A._GetAutoObject(A.aco.Hq),B.A8P,B.A9$],0);A.pe([this,this.GE],this);},Ab3:function(
E){if(this.GG===E)return;if(!!this.GG)this.HN(this.GG);this.GG=E;if(!!this.GG)this.
J(this.GG,0);this.Bb(E);this.Ahu(E,this.BU);this.An();},GE:function(G){var B;if(
!!A._GetAutoObject(A.aco.Hq).Asu)this.Ab3((C.AhA.isPrototypeOf(B=A._NewObject(A.
_GetAutoObject(A.aco.Hq).Asu,0))?B:null));else this.Ab3(null);},_Init:function(aArg
){A.Core.P._Init.call(this,aArg);A.acg.AK._Init.call(this.AK={I:this},0);A.acg.BU.
_Init.call(this.BU={I:this},0);this.__proto__=C.AUq;this.H(E4);this.AK.AZ(0x3F);
this.AK.H(E4);this.BU.H(E4);this.BU.L(0xFF000000);this.J(this.AK,0);this.J(this.
BU,0);this.Init(aArg);},_Done:function(){this.__proto__=A.Core.P;this.AK._Done();
this.BU._Done();A.Core.P._Done.call(this);},_ReInit:function(){A.Core.P._ReInit.
call(this);this.AK._ReInit();this.BU._ReInit();},_Mark:function(D){var B;A.Core.
P._Mark.call(this,D);if((B=this.GG)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.
AK)._cycle!=D)B._Mark(B._cycle=D);if((B=this.BU)._cycle!=D)B._Mark(B._cycle=D);}
,_className:"Demonstrator::SelectionArea"};C.AMr={ABe:0,J$:0,Background:null,V:null
,Ajl:null,AdS:null,XP:null,AdT:null,Mf:null,Md:0,LI:false,KE:false,CP:function(){
this.An();},Ai:function(Ae){var B;C.Ba.Ai.call(this,Ae);var G$=((Ae&0x10)===0x10
);var Fq=((Ae&0x20)===0x20);var Iy=((Ae&0x40)===0x40);if(!G$){this.Background.L(
0xFFAAAAAA);this.V.L(0xFF888888);this.Mf.Ar(false);this.Mf.Z(false);}else if(Iy){
this.Background.L(A.jb.AV);this.V.L(A.jb.Bm);this.Mf.Ar(true);this.Mf.Z(true);}else
if(Fq){this.Background.L(0xFFE6DED8);this.V.L(0xFF000000);this.Mf.Ar(true);this.
Mf.Z(true);}else{this.Background.L(0xFFFFFFFF);this.V.L(0xFF000000);this.Mf.Ar(false
);this.Mf.Z(false);}if(!this.KE&&Fq)A._GetAutoObject(A.aco.Hq).A98(this.ABe);this.
Mf.BmI(this.J$>0);this.Mf.Bm$(this.ABe>0);this.V.R(this.Md.toFixed());this.LI=G$;
this.KE=Fq;},Cf:function(Ad){if(!this.AX){this.XP.Aw(A.aaL(A.ach.Aeu));this.AdS.
L(A.jb.Afo);return;}this.Hn=Ad;if(!!this.AX){this.J$=this.AX.KN(Ad,26);this.ABe=
this.AX.KN(Ad,22);this.Md=this.AX.CE(Ad,1);var AlL=this.AX.H1(Ad,11);var AlC=this.
AX.I2(Ad,17);var LQ=this.AX.I2(Ad,13);var H$=this.AX.AmQ(Ad,14);var Xm=A._GetAutoObject(
A.Device.Helper).AMg(LQ,AlL,AlC);switch(H$){case 0:this.XP.Aw(A.aaL(A.ach.Aeu));
break;case 1:this.XP.Aw(A.aaL(A.ach.Avy));break;case 2:this.XP.Aw(A.aaL(A.ach.AvB
));break;default:A.ab5("%s%e",Hm,H$);}this.AdT.Aw(this.XP.Al);this.AdS.L(A._GetAutoObject(
A.acj.Assessment).Qj(Xm));this.An();}},_Init:function(aArg){C.Ba._Init.call(this
,aArg);A.acg.AK._Init.call(this.Background={I:this},0);A.kR.CH._Init.call(this.V={
I:this},0);A.acg.Ap._Init.call(this.Ajl={I:this},0);A.acg.Ap._Init.call(this.AdS={
I:this},0);A.acg.Ap._Init.call(this.XP={I:this},0);A.acg.Ap._Init.call(this.AdT={
I:this},0);C.Mf._Init.call(this.Mf={I:this},0);this.__proto__=C.AMr;this.Background.
AZ(0x3F);this.Background.H(Cd);this.V.AZ(0x3F);this.V.H(IQ);this.V.R(A.aaR(A.acf.
GJ));this.V.A6(0x11);this.V.L(0xFF000000);this.Ajl.H(Ip);this.Ajl.L(A.jb.Text);this.
AdS.H(Ip);this.AdS.L(A.jb.E1);this.XP.H(Ip);this.AdT.H(Ip);this.AdT.L(A.jb.Text);
this.AdT.Cv(1);this.Mf.AZ(0x3);this.Mf.H(O1);this.J(this.Background,0);this.J(this.
V,0);this.J(this.Ajl,0);this.J(this.AdS,0);this.J(this.XP,0);this.J(this.AdT,0);
this.J(this.Mf,0);this.V.S(A.aaL(A.fl.Af));this.V.A2(A.aaL(A.fl.Ak));this.V.Cu(A.
aaL(A.fl.Bh));this.Ajl.Aw(A.aaL(C.AHd));this.AdS.Aw(A.aaL(C.AVL));this.XP.Aw(A.aaL(
A.ach.Aeu));this.AdT.Aw(A.aaL(A.ach.Aeu));},_Done:function(){this.__proto__=C.Ba;
this.Background._Done();this.V._Done();this.Ajl._Done();this.AdS._Done();this.XP.
_Done();this.AdT._Done();this.Mf._Done();C.Ba._Done.call(this);},_ReInit:function(
){C.Ba._ReInit.call(this);this.Background._ReInit();this.V._ReInit();this.Ajl._ReInit(
);this.AdS._ReInit();this.XP._ReInit();this.AdT._ReInit();this.Mf._ReInit();this.
V.R(A.aaR(A.acf.GJ));this.V.S(A.aaL(A.fl.Af));this.V.A2(A.aaL(A.fl.Ak));this.V.Cu(
A.aaL(A.fl.Bh));this.CP();},_Mark:function(D){var B;C.Ba._Mark.call(this,D);if((
B=this.Background)._cycle!=D)B._Mark(B._cycle=D);if((B=this.V)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Ajl)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AdS)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.XP)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
AdT)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Mf)._cycle!=D)B._Mark(B._cycle=D);
},_className:"Demonstrator::AnimalMenuItem"};C.Mf={Uv:null,WG:null,AkX:null,Ni:null
,N7:null,ZH:null,Acx:null,AvW:false,AxI:false,CP:function(){this.An();},Ai:function(
Ae){var B;A.Core.P.Ai.call(this,Ae);var Iy=((Ae&0x40)===0x40);if(Iy){this.Ni.L(A.
jb.Bm);this.N7.L(A.jb.Bm);}else{this.Ni.L(A.jb.Text);this.N7.L(A.jb.Text);}if(this.
AxI){this.Ni.R(A.aaR(A.acf.Bn9));if(this.AvW){this.Uv.Aw(A.aaL(C.AxJ));this.WG.Aw(
A.aaL(C.AxJ));}else{this.Uv.Aw(A.aaL(C.Asr));this.WG.Aw(A.aaL(C.Asr));}}else if(
this.AvW){this.Uv.Aw(A.aaL(C.ACu));this.WG.Aw(A.aaL(C.ACu));this.Ni.R(P1);}var A3O=
this.AxI||this.AvW;this.Uv.Z(A3O);this.WG.Z(A3O);this.Ni.Z(A3O);this.ZH.Ar(this.
AxI);},Bm$:function(E){if(this.AxI===E)return;this.AxI=E;this.An();},BmI:function(
E){if(this.AvW===E)return;this.AvW=E;this.An();},_Init:function(aArg){A.Core.P._Init.
call(this,aArg);A.acg.Ap._Init.call(this.Uv={I:this},0);A.acg.Ap._Init.call(this.
WG={I:this},0);A.acg.Ap._Init.call(this.AkX={I:this},0);A.kR.CH._Init.call(this.
Ni={I:this},0);A.kR.CH._Init.call(this.N7={I:this},0);A.Core.Bn._Init.call(this.
ZH={I:this},0);A.Core.Bn._Init.call(this.Acx={I:this},0);this.__proto__=C.Mf;var
B;this.H(P2);this.Uv.AZ(0x6);this.Uv.H(CQ);this.Uv.L(A.jb.CS);this.Uv.Cv(1);this.
WG.AZ(0x6);this.WG.H(CQ);this.WG.L(A.jb.Text);this.AkX.AZ(0xE);this.AkX.H(E$);this.
Ni.AZ(0x7);this.Ni.H(Lu);this.Ni.A6(0x11);this.Ni.L(0xFF000000);this.N7.AZ(0x3);
this.N7.H(P3);this.N7.R(A.aaR(A.acf.Temperature));this.N7.A6(0x11);this.N7.L(0xFF000000
);this.ZH.AZ(0x3);this.ZH.JQ(JY);this.ZH.Kr(N_);this.ZH.DC(P4);this.ZH.DL(MF);this.
Acx.AZ(0x3);this.Acx.JQ(S5);this.Acx.Kr(UO);this.Acx.DC(Z5);this.Acx.DL(W1);this.
J(this.Uv,0);this.J(this.WG,0);this.J(this.AkX,0);this.J(this.Ni,0);this.J(this.
N7,0);this.J(this.ZH,0);this.J(this.Acx,0);this.Uv.Aw(A.aaL(C.Asr));this.WG.Aw(A.
aaL(C.Asr));this.AkX.Aw(A.aaL(C.AUY));this.Ni.S(A.aaL(A.fl.Af));this.Ni.A2(A.aaL(
A.fl.Ak));this.Ni.Cu(A.aaL(A.fl.Bh));this.N7.S(A.aaL(A.fl.Af));this.N7.A2(A.aaL(
A.fl.Ak));this.N7.Cu(A.aaL(A.fl.Bh));this.ZH.Ln=[B=A._GetAutoObject(A.aco.Hq),B.
BeI];this.Acx.Ln=[B=A._GetAutoObject(A.aco.Hq),B.Bet];},_Done:function(){this.__proto__=
A.Core.P;this.Uv._Done();this.WG._Done();this.AkX._Done();this.Ni._Done();this.N7.
_Done();this.ZH._Done();this.Acx._Done();A.Core.P._Done.call(this);},_ReInit:function(
){A.Core.P._ReInit.call(this);this.Uv._ReInit();this.WG._ReInit();this.AkX._ReInit(
);this.Ni._ReInit();this.N7._ReInit();this.ZH._ReInit();this.Acx._ReInit();this.
N7.R(A.aaR(A.acf.Temperature));this.Ni.S(A.aaL(A.fl.Af));this.Ni.A2(A.aaL(A.fl.Ak
));this.Ni.Cu(A.aaL(A.fl.Bh));this.N7.S(A.aaL(A.fl.Af));this.N7.A2(A.aaL(A.fl.Ak
));this.N7.Cu(A.aaL(A.fl.Bh));this.CP();},_Mark:function(D){var B;A.Core.P._Mark.
call(this,D);if((B=this.Uv)._cycle!=D)B._Mark(B._cycle=D);if((B=this.WG)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.AkX)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ni
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.N7)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.ZH)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Acx)._cycle!=D)B._Mark(B._cycle=
D);},_className:"Demonstrator::AnimalItemAction"};C.Yp={CP:function(){this.An();
},Ai:function(Ae){C.Arb.Ai.call(this,Ae);if(!this.Text.String.length)this.Text.R(
A.aaR(A.acf.Filter));},A7Z:function(G){var D5=(A.Core.BM.isPrototypeOf(G)?G:null
);if(!!D5)A._GetAutoObject(A.aco.AgD).Ey(D5.DP);},A7X:function(G){A._GetAutoObject(
A.aco.AgD).Delete();},_Init:function(aArg){C.Arb._Init.call(this,aArg);this.__proto__=
C.Yp;this.Ap.Aw(A.aaL(C.Filter));},_ReInit:function(){C.Arb._ReInit.call(this);this.
CP();},_className:"Demonstrator::FilterView"};C.Abe={Dj:null,Yi:null,R_:null,Yj:
null,DT:null,YC:null,AmC:null,Au:null,O9:null,M3:null,Abd:null,FU:0,AvI:0,AF2:false
,Ai:function(Ae){A.Core.P.Ai.call(this,Ae);this.R_.R(this.Au.Format(Iq));if(this.
AF2){this.R_.Z(false);this.YC.Z(false);this.DT.Z(false);this.Yj.Z(false);this.O9.
Ar(true);this.O9.Z(true);this.M3.Cv(2);this.M3.ATf(2);this.M3.H(A.abM(this.M3.M,
this.O9.M[2]));}else{this.R_.Z(true);this.YC.Z(true);this.DT.Z(true);this.Yj.Z(true
);this.O9.Ar(false);this.O9.Z(false);this.M3.Cv(3);this.M3.ATf(3);this.M3.H(A.abM(
this.M3.M,this.R_.M[2]));}},BAi:function(G){this.BmP(!this.AF2);},Adu:function(G
){var F;if(!!this.Dj)this.Ui((F=this.Dj,F[1].call(F[0])));},Ab7:function(E){if(A.
aaZ(this.Dj,E))return;if(!!this.Dj)A.z$([this,this.Adu],this.Dj,0);this.Dj=E;if(
!!E)A.zX([this,this.Adu],E,0);if(!!E)A.pe([this,this.Adu],this);},Ui:function(E){
if(this.FU===E)return;this.FU=E;this.Au.Initialize(this.FU);this.BBn(this);this.
An();},AiC:function(G){var B;var F;var BQ=this.FU;var Ai_=this.Abd.C4(this.AvI);
this.AJg(Ai_);if(this.Au.Year>2100)this.Au.Initialize2(2100,12,31,0,0,0);this.Ui(((
B=(this.Au.JN()|0))<0)?B+0x100000000:B);if(this.FU!==BQ){if(!!this.Dj)(F=this.Dj
,F[2].call(F[0],this.FU));A.abo(this.Dj,0);}},Ain:function(G){var B;var F;var BQ=
this.FU;var Ai_=this.Abd.C4(this.AvI);this.AK9(Ai_);if(this.Au.Year<2000)this.Au.
Initialize2(2000,1,1,0,0,0);this.Ui(((B=(this.Au.JN()|0))<0)?B+0x100000000:B);if(
this.FU!==BQ){if(!!this.Dj)(F=this.Dj,F[2].call(F[0],this.FU));A.abo(this.Dj,0);
}},Bml:function(E){if(this.AvI===E)return;this.AvI=E;},BmP:function(E){if(this.AF2===
E)return;this.AF2=E;this.An();},BAS:function(G){var B;var F;var BQ=this.FU;this.
Au.Lp(this.O9.AEq());this.Au.Um(this.O9.AEv());this.Au.Year=this.O9.ArA();this.Ui(((
B=(this.Au.JN()|0))<0)?B+0x100000000:B);if(this.FU!==BQ){if(!!this.Dj)(F=this.Dj
,F[2].call(F[0],this.FU));A.abo(this.Dj,0);}},BBn:function(G){this.O9.Lp(this.Au.
GH);this.O9.Um(this.Au.He);this.O9.AkF(this.Au.Year);},AJg:function(AyU){var B;switch(
AyU){case 0:if(this.Au.GH<this.Au.Zo())this.Au.Lp(this.Au.GH+1);else{this.Au.Lp(
1);this.AJg(2);}break;case 1:if((this.Au.GH+7)<=this.Au.Zo())this.Au.Lp(this.Au.
GH+7);else{this.Au.Lp((7-this.Au.Zo())+this.Au.GH);this.AJg(2);}break;case 2:if(
this.Au.He<12)this.Au.Um(this.Au.He+1);else{this.Au.Um(1);this.AJg(3);}break;case
3:this.Au.Year++;break;default:throw new Error(UP+AyU.toFixed());}},AK9:function(
AyU){var B;switch(AyU){case 0:if(this.Au.GH>1)this.Au.Lp(this.Au.GH-1);else{this.
AK9(2);this.Au.Lp(this.Au.Zo());}break;case 1:if((this.Au.GH-7)>0)this.Au.Lp(this.
Au.GH-7);else{this.AK9(2);this.Au.Lp(this.Au.Zo()-(7-this.Au.GH));}break;case 2:
if(this.Au.He>1)this.Au.Um(this.Au.He-1);else{this.Au.Um(12);this.AK9(3);}break;
case 3:this.Au.Year--;break;default:throw new Error(UP+AyU.toFixed());}},Bku:function(
){return this.AvI;},_Init:function(aArg){A.Core.P._Init.call(this,aArg);A.acg.Text.
_Init.call(this.Yi={I:this},0);A.acg.Text._Init.call(this.R_={I:this},0);C.Avw._Init.
call(this.Yj={I:this},0);A.acq.DT._Init.call(this.DT={I:this},0);C.Avw._Init.call(
this.YC={I:this},0);A.acg.Ap._Init.call(this.AmC={I:this},0);A.Core.Bs._Init.call(
this.Au={I:this},0);C.ANF._Init.call(this.O9={I:this},0);C.Avw._Init.call(this.M3={
I:this},0);C.Abd._Init.call(this.Abd={I:this},0);this.__proto__=C.Abe;this.H(Z6);
this.Yi.H(W2);this.Yi.A6(0x11);this.Yi.R(A.aaR(A.acf.Date));this.Yi.L(0xFF000000
);this.R_.H(Z7);this.R_.A6(0x11);this.R_.R(W3);this.R_.L(0xFF000000);this.Yj.H(Z8
);this.Yj.A9L(200);this.DT.H(Z9);this.DT.ArU(120);this.DT.GK=30;this.DT.AST(A.jb.
CS);this.DT.A9o(A.jb.CS);this.DT.A9s(A.jb.CS);this.DT.ASU(A.jb.Text);this.DT.A9t(
A.jb.Text);this.DT.A9p(A.jb.AV);this.DT.A9u(A.jb.Bm);this.DT.A9r(A.jb.AV);this.DT.
A9q(A.jb.Text);this.YC.H(UQ);this.YC.A9L(200);this.AmC.H(W4);this.O9.H(P5);this.
M3.H(Z_);this.M3.Cv(3);this.M3.ATf(3);this.M3.L(A.jb.Text);this.J(this.Yi,0);this.
J(this.R_,0);this.J(this.Yj,0);this.J(this.DT,0);this.J(this.YC,0);this.J(this.AmC
,0);this.J(this.O9,0);this.J(this.M3,0);this.Yi.S(A.aaL(A.fl.Ak));this.R_.S(A.aaL(
A.fl.EK));this.Yj.AR=[this,this.Ain];this.Yj.DB(A.aaL(C.AM1));this.Yj.ATg(A.aaL(
C.AM2));this.DT.As([this,this.Bku,this.Bml]);this.DT.A9A(this.Abd);this.DT.ArM(A.
aaL(A.fl.Ak));this.DT.AwC(A.aaL(A.fl.Ak));this.YC.AR=[this,this.AiC];this.YC.DB(
A.aaL(C.AM3));this.YC.ATg(A.aaL(C.AM4));this.AmC.Aw(A.aaL(C.AP5));this.O9.Di=[this
,this.BAS];this.M3.AR=[this,this.BAi];this.M3.DB(A.aaL(A.ach.Ajq));this.M3.ATg(A.
aaL(A.ach.Ajq));},_Done:function(){this.__proto__=A.Core.P;this.Yi._Done();this.
R_._Done();this.Yj._Done();this.DT._Done();this.YC._Done();this.AmC._Done();this.
Au._Done();this.O9._Done();this.M3._Done();this.Abd._Done();A.Core.P._Done.call(
this);},_ReInit:function(){A.Core.P._ReInit.call(this);this.Yi._ReInit();this.R_.
_ReInit();this.Yj._ReInit();this.DT._ReInit();this.YC._ReInit();this.AmC._ReInit(
);this.Au._ReInit();this.O9._ReInit();this.M3._ReInit();this.Abd._ReInit();this.
Yi.R(A.aaR(A.acf.Date));this.Yi.S(A.aaL(A.fl.Ak));this.R_.S(A.aaL(A.fl.EK));this.
DT.ArM(A.aaL(A.fl.Ak));this.DT.AwC(A.aaL(A.fl.Ak));},_Mark:function(D){var B;A.Core.
P._Mark.call(this,D);if((B=this.Dj)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((
B=this.Yi)._cycle!=D)B._Mark(B._cycle=D);if((B=this.R_)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Yj)._cycle!=D)B._Mark(B._cycle=D);if((B=this.DT)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.YC)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AmC)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.Au)._cycle!=D)B._Mark(B._cycle=D);if((B=this.O9
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.M3)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Abd)._cycle!=D)B._Mark(B._cycle=D);},_className:"Demonstrator::DateSelector"
};C.Avw={C8:null,Axh:null,ANV:null,AR:null,Bo:null,Dl:null,CR:null,Hs:null,Yw:null
,API:0,TO:0,ATW:0,AQ:0xFFFFFFFF,A14:false,LI:false,KE:false,Qn:false,Ai:function(
Ae){var B;A.acn.Ahq.Ai.call(this,Ae);var G$=((Ae&0x10)===0x10);var Fq=((Ae&0x20)===
0x20);var GA=this.CR.Down&&this.CR.YF;if(!G$)this.Hs.Aw(this.ANV);else if(GA){this.
Hs.Aw(this.Axh);this.Hs.Cv(this.ATW);}else{this.Hs.Aw(this.C8);this.Hs.Cv(this.TO
);}this.Hs.L(this.AQ);this.LI=G$;this.KE=Fq;this.Qn=GA;},Qm:function(G){this.An(
);A.pe(this.AR,this);},AiN:function(G){if(this.CR.Down)return;if(this.Dl.Ach)return;
this.An();if(this.Bo.Bw){A.pe(this.AR,this);this.Bo.Ar(false);}this.Bo.Ar(true);
},Beq:function(G){this.An();},AAx:function(G){if(!this.CR.YF)return;if(this.CR.NF
)return;if((this.Yw.VB<=0)||(this.CR.Jp<this.Yw.VB)){if(this.CR.Jp>=this.Bo.VB)A.
pe(this.AR,this);else this.Bo.Ar(true);}this.Yw.Ar(false);},AAw:function(G){this.
Yw.Ar(true);if(this.Bo.Bw){A.pe(this.AR,this);this.Bo.Ar(false);}},DB:function(E
){if(this.C8===E)return;this.C8=E;this.An();},ATg:function(E){if(this.Axh===E)return;
this.Axh=E;this.An();},A21:function(G){if(!this.CR.YF)return;if(this.CR.NF)return;
if((this.API>=0)&&this.A14){this.A14=false;this.Yw.Ar(true);A.pe(this.AR,this);}
},A9L:function(E){if(this.API===E)return;this.API=E;this.Yw.Wx(E);},BzO:function(
G){this.A14=true;},Cv:function(E){if(this.TO===E)return;this.TO=E;this.An();},ATf:
function(E){if(this.ATW===E)return;this.ATW=E;this.An();},L:function(E){if(this.
AQ===E)return;this.AQ=E;this.An();},_Init:function(aArg){A.acn.Ahq._Init.call(this
,aArg);A.Core.Timer._Init.call(this.Bo={I:this},0);A.Core.BM._Init.call(this.Dl={
I:this},0);A.Core.Bn._Init.call(this.CR={I:this},0);A.acg.Ap._Init.call(this.Hs={
I:this},0);A.Core.Timer._Init.call(this.Yw={I:this},0);this.__proto__=C.Avw;this.
H(O2);this.Bo.PO(0);this.Bo.Wx(50);this.Dl.Filter=149;this.CR.AZ(0x3F);this.CR.JQ(
Ri);this.CR.Kr(W5);this.CR.DC(W6);this.CR.DL(JY);this.CR.Afa=0xF;this.CR.AFk(100
);this.Hs.AZ(0x3F);this.Hs.H(O2);this.Hs.A6(0x12);this.Yw.PO(0);this.J(this.CR,0
);this.J(this.Hs,0);this.Bo.Mx=[this,this.Qm];this.Dl.BN=[this,this.AiN];this.CR.
AEB=[this,this.Beq];this.CR.Av1=[this,this.Beq];this.CR.D1=[this,this.A21];this.
CR.Ln=[this,this.AAx];this.CR.BN=[this,this.AAw];this.Hs.Aw(A.aaL(A.aci.TJ));this.
C8=A.aaL(A.aci.TJ);this.Axh=A.aaL(A.aci.TJ);this.ANV=A.aaL(A.aci.TJ);this.Yw.Mx=[
this,this.BzO];},_Done:function(){this.__proto__=A.acn.Ahq;this.Bo._Done();this.
Dl._Done();this.CR._Done();this.Hs._Done();this.Yw._Done();A.acn.Ahq._Done.call(
this);},_ReInit:function(){A.acn.Ahq._ReInit.call(this);this.Bo._ReInit();this.Dl.
_ReInit();this.CR._ReInit();this.Hs._ReInit();this.Yw._ReInit();},_Mark:function(
D){var B;A.acn.Ahq._Mark.call(this,D);if((B=this.C8)&&(B._cycle!=D))B._Mark(B._cycle=
D);if((B=this.Axh)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.ANV)&&(B._cycle
!=D))B._Mark(B._cycle=D);if((B=this.AR)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D
);if((B=this.Bo)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Dl)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.CR)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Hs)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.Yw)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Demonstrator::IconButton"};C.AMF={Pu:null,V:null,Aen:null,_Init:function(aArg){
C.Fx._Init.call(this,aArg);A.acg.AK._Init.call(this.Pu={I:this},0);A.acg.Text._Init.
call(this.V={I:this},0);C.Aen._Init.call(this.Aen={I:this},0);this.__proto__=C.AMF;
this.H(W7);this.Pu.AZ(0x1D);this.Pu.H(Cd);this.Pu.L(0xFFE6E6E6);this.V.AZ(0x1D);
this.V.H(W8);this.V.A6(0x11);this.V.R(A.aaR(A.acf.A4O));this.V.L(0xFF000000);this.
Aen.H(Z$);this.J(this.Pu,0);this.J(this.V,0);this.J(this.Aen,0);this.V.S(A.aaL(A.
fl.Af));},_Done:function(){this.__proto__=C.Fx;this.Pu._Done();this.V._Done();this.
Aen._Done();C.Fx._Done.call(this);},_ReInit:function(){C.Fx._ReInit.call(this);this.
Pu._ReInit();this.V._ReInit();this.Aen._ReInit();this.V.R(A.aaR(A.acf.A4O));this.
V.S(A.aaL(A.fl.Af));},_Mark:function(D){var B;C.Fx._Mark.call(this,D);if((B=this.
Pu)._cycle!=D)B._Mark(B._cycle=D);if((B=this.V)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Aen)._cycle!=D)B._Mark(B._cycle=D);},_className:"Demonstrator::AnimalsHeader"
};C.Aut={Pu:null,V:null,AeN:null,AeL:null,Bn:null,DK:W9,Ahc:false,Ai:function(Ae
){C.Fx.Ai.call(this,Ae);if(this.Ahc){this.AeL.Z(true);this.AeN.Z(false);}else{this.
AeL.Z(false);this.AeN.Z(true);}},BAE:function(G){if(this.Ahc)A.pe(this.Akr,this);
else A.pe(this.Aks,this);this.ArV(!this.Ahc);},T:function(E){if(this.DK===E)return;
this.DK=E;this.V.R(E);},ArV:function(E){if(this.Ahc===E)return;this.Ahc=E;this.An(
);},_Init:function(aArg){C.Fx._Init.call(this,aArg);A.acg.AK._Init.call(this.Pu={
I:this},0);A.acg.Text._Init.call(this.V={I:this},0);A.acg.Ap._Init.call(this.AeN={
I:this},0);A.acg.Ap._Init.call(this.AeL={I:this},0);A.Core.Bn._Init.call(this.Bn={
I:this},0);this.__proto__=C.Aut;this.H(Cd);this.Pu.AZ(0x1D);this.Pu.H(Cd);this.Pu.
L(0xFFE6E6E6);this.V.AZ(0x1D);this.V.H(W_);this.V.A6(0x11);this.V.R(W9);this.V.L(
0xFF000000);this.AeN.H(S6);this.AeN.Z(false);this.AeL.AZ(0x3A);this.AeL.H(S6);this.
Bn.JQ(JY);this.Bn.Kr(UR);this.Bn.DC(US);this.Bn.DL(MF);this.J(this.Pu,0);this.J(
this.V,0);this.J(this.AeN,0);this.J(this.AeL,0);this.J(this.Bn,0);this.V.S(A.aaL(
A.fl.Af));this.AeN.Aw(A.aaL(C.AMI));this.AeL.Aw(A.aaL(C.Ajp));this.Bn.Ln=[this,this.
BAE];},_Done:function(){this.__proto__=C.Fx;this.Pu._Done();this.V._Done();this.
AeN._Done();this.AeL._Done();this.Bn._Done();C.Fx._Done.call(this);},_ReInit:function(
){C.Fx._ReInit.call(this);this.Pu._ReInit();this.V._ReInit();this.AeN._ReInit();
this.AeL._ReInit();this.Bn._ReInit();this.V.S(A.aaL(A.fl.Af));},_Mark:function(D
){var B;C.Fx._Mark.call(this,D);if((B=this.Pu)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.V)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AeN)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.AeL)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Bn)._cycle!=D)B._Mark(
B._cycle=D);},_className:"Demonstrator::AccordionHeader"};C.Ba={AX:null,AR:null,
CR:null,Hn:-1,Zs:function(E){if(this.AX===E)return;this.AX=E;},Cf:function(Ad){A.
ab5("%s",AcL);},Zu:function(E){if(A.aa0(this.AR,E))return;this.AR=E;},AAx:function(
G){if(!this.CR.YF)return;if(this.CR.NF)return;A.pe(this.AR,this);},_Init:function(
aArg){A.Core.P._Init.call(this,aArg);A.Core.Bn._Init.call(this.CR={I:this},0);this.
__proto__=C.Ba;this.H(Cd);this.CR.AZ(0x3F);this.CR.JQ(MF);this.CR.Kr(US);this.CR.
DC(UR);this.CR.DL(JY);this.CR.Afa=0xF;this.CR.AFk(100);this.J(this.CR,0);this.CR.
Ln=[this,this.AAx];},_Done:function(){this.__proto__=A.Core.P;this.CR._Done();A.
Core.P._Done.call(this);},_ReInit:function(){A.Core.P._ReInit.call(this);this.CR.
_ReInit();},_Mark:function(D){var B;A.Core.P._Mark.call(this,D);if((B=this.AX)&&(
B._cycle!=D))B._Mark(B._cycle=D);if((B=this.AR)&&((B=B[0])._cycle!=D))B._Mark(B.
_cycle=D);if((B=this.CR)._cycle!=D)B._Mark(B._cycle=D);},_className:"Demonstrator::ListItem"
};C.Fx={AR$:null,Aks:null,Akr:null,BmM:function(E){if(A.aa0(this.AR$,E))return;this.
AR$=E;},A9V:function(E){if(A.aa0(this.Aks,E))return;this.Aks=E;},A9U:function(E){
if(A.aa0(this.Akr,E))return;this.Akr=E;},_Init:function(aArg){A.Core.P._Init.call(
this,aArg);this.__proto__=C.Fx;this.H(Cd);},_Mark:function(D){var B;A.Core.P._Mark.
call(this,D);if((B=this.AR$)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.
Aks)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.Akr)&&((B=B[0])._cycle
!=D))B._Mark(B._cycle=D);},_className:"Demonstrator::ListHeader"};C.ANF={Di:null
,Aa5:null,WT:null,WS:null,WR:null,Na:null,M$:null,KQ:null,LI:false,KE:false,BBx:
false,Ai:function(Ae){var B;A.acn.Aho.Ai.call(this,Ae);var G$=((Ae&0x10)===0x10);
var Fq=((Ae&0x20)===0x20);var Bdq=(this.WR.ZM||this.WS.ZM)||this.WT.ZM;if(Bdq)this.
Aa5.L(A.jb.Text);else this.Aa5.L(A.jb.Bc);this.LI=G$;this.KE=Fq;this.BBx=Bdq;},AAs:
function(G){this.An();if((!this.WR.ZM&&!this.WS.ZM)&&!this.WT.ZM){var U9=this.AKb(
this.AEv(),this.ArA());var Ada=this.AEq();this.KQ.Ju(U9);if(Ada>U9)this.Lp(U9);A.
pe(this.Di,this);}},A3k:function(G){this.An();},Bk_:function(G){var B;var Gc=this.
Na.G0;var Cz=(A.acg.Text.isPrototypeOf(B=this.Na.Ch)?B:null);if(!Cz)return;Cz.R(
A.abl(Gc+1900,4,10));Cz.S(A.aaL(A.fl.Af));Cz.L(A.jb.Text);Cz.A6(0x12);Cz.H(A.abK(
Cz.M,[(B=this.Na.M)[2]-B[0],this.Na.GK]));},Bk9:function(G){var B;var Gc=this.M$.
G0;var Cz=(A.acg.Text.isPrototypeOf(B=this.M$.Ch)?B:null);if(!Cz)return;Cz.R(A.abl(
Gc+1,2,10)+S7);Cz.S(A.aaL(A.fl.Af));Cz.L(A.jb.Text);Cz.A6(0x12);Cz.H(A.abK(Cz.M,[(
B=this.M$.M)[2]-B[0],this.M$.GK]));},Bk7:function(G){var B;var Gc=this.KQ.G0;var
Cz=(A.acg.Text.isPrototypeOf(B=this.KQ.Ch)?B:null);if(!Cz)return;Cz.R(A.abl(Gc+1
,2,10)+S7);Cz.S(A.aaL(A.fl.Af));Cz.L(A.jb.Text);Cz.A6(0x12);Cz.H(A.abK(Cz.M,[(B=
this.KQ.M)[2]-B[0],this.KQ.GK]));},ArA:function(){return 1900+((((-this.Na.Br/this.
Na.GK)|0)+2)%200);},AkF:function(E){if(E<1900)E=1900;if(E>2100)E=2100;this.Na.F_(((
E-1900)-2)*-this.Na.GK);var U9=this.AKb(this.AEv(),E);this.KQ.Ju(U9);if(this.AEq(
)>U9)this.Lp(U9);},AEv:function(){return 1+((((-this.M$.Br/this.M$.GK)|0)+2)%12);
},Um:function(E){if(E<1)E=1;if(E>12)E=12;this.M$.F_(((E-1)-2)*-this.M$.GK);var U9=
this.AKb(E,this.ArA());this.KQ.Ju(U9);if(this.AEq()>U9)this.Lp(U9);},AEq:function(
){return 1+((((-this.KQ.Br/this.KQ.GK)|0)+2)%this.KQ.AY);},Lp:function(E){var U9=
this.AKb(this.AEv(),this.ArA());if(E<1)E=1;if(E>U9)E=U9;this.KQ.F_(((E-2)-1)*-this.
KQ.GK);},AKb:function(AfF,Ac2){if(AfF===2){if(!(Ac2%4)&&(!!(Ac2%100)||!(Ac2%400)
))return 29;else return 28;}else if((((AfF===4)||(AfF===6))||(AfF===9))||(AfF===
11))return 30;else return 31;},_Init:function(aArg){A.acn.Aho._Init.call(this,aArg
);A.acg.BU._Init.call(this.Aa5={I:this},0);A.Core.H7._Init.call(this.WT={I:this}
,0);A.Core.H7._Init.call(this.WS={I:this},0);A.Core.H7._Init.call(this.WR={I:this
},0);A.Core.CM._Init.call(this.Na={I:this},0);A.Core.CM._Init.call(this.M$={I:this
},0);A.Core.CM._Init.call(this.KQ={I:this},0);this.__proto__=C.ANF;this.H(Aaa);this.
Aa5.H(Afv);this.Aa5.Ng(3);this.Aa5.L(0xFFE1E1E1);this.Aa5.Z(true);this.WT.H(Aab);
this.WT.ATs(W$);this.WT.AS0(0.2);this.WS.H(Aac);this.WS.ATs(W$);this.WS.AS0(0.2);
this.WR.H(Aad);this.WR.ATs(W$);this.WR.AS0(0.2);this.Na.H(Aab);this.Na.ASY(true);
this.Na.F_(60);this.Na.Ae2(30);this.Na.Ju(200);this.M$.H(Aac);this.M$.ASY(true);
this.M$.F_(60);this.M$.Ae2(30);this.M$.Ju(12);this.KQ.H(Aad);this.KQ.ASY(true);this.
KQ.F_(60);this.KQ.Ae2(30);this.KQ.Ju(31);this.J(this.Aa5,0);this.J(this.WT,0);this.
J(this.WS,0);this.J(this.WR,0);this.J(this.Na,0);this.J(this.M$,0);this.J(this.KQ
,0);this.WT.Zn=[this,this.AAs];this.WT.SC=[this,this.A3k];this.WS.Zn=[this,this.
AAs];this.WS.SC=[this,this.A3k];this.WR.Zn=[this,this.AAs];this.WR.SC=[this,this.
A3k];this.Na.Hg=[this,this.Bk_];this.Na.AwY(this.WT);this.M$.Hg=[this,this.Bk9];
this.M$.AwY(this.WS);this.KQ.Hg=[this,this.Bk7];this.KQ.AwY(this.WR);},_Done:function(
){this.__proto__=A.acn.Aho;this.Aa5._Done();this.WT._Done();this.WS._Done();this.
WR._Done();this.Na._Done();this.M$._Done();this.KQ._Done();A.acn.Aho._Done.call(
this);},_ReInit:function(){A.acn.Aho._ReInit.call(this);this.Aa5._ReInit();this.
WT._ReInit();this.WS._ReInit();this.WR._ReInit();this.Na._ReInit();this.M$._ReInit(
);this.KQ._ReInit();},_Mark:function(D){var B;A.acn.Aho._Mark.call(this,D);if((B=
this.Di)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.Aa5)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.WT)._cycle!=D)B._Mark(B._cycle=D);if((B=this.WS)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.WR)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Na
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.M$)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.KQ)._cycle!=D)B._Mark(B._cycle=D);},_className:"Demonstrator::DatePicker"
};C.AHd={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/DemonstratorWhiteTile.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[40,40],FrameDelay:0,_this:
null}};C.AVL={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/DemonstratorWhiteTileSmall.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[40,40],FrameDelay:0,_this:
null}};C.AhA={_Init:function(aArg){A.Core.P._Init.call(this,aArg);this.__proto__=
C.AhA;this.H(E4);},_className:"Demonstrator::SelectionAreaContent"};C.AMy={Y:null
,Vr:null,Ty:null,BA7:function(G){var B;this.Ty.H(A.abI(this.Ty.M,((B=this.M)[3]-
B[1])-((B=this.Vr.M)[3]-B[1])));},_Init:function(aArg){C.AhA._Init.call(this,aArg
);A.Core.Y._Init.call(this.Y={I:this},0);C.AL2._Init.call(this.Vr={I:this},0);C.
AVu._Init.call(this.Ty={I:this},0);this.__proto__=C.AMy;this.Y.AZ(0x3F);this.Y.H(
E4);this.Y.JO(1);this.Vr.H(AhO);this.Vr.Aj(true);this.Vr.ArV(true);this.Ty.AZ(0x3
);this.Ty.H(JZ);this.Ty.Aj(true);this.Ty.NZ(C.AMr);this.Ty.BmG(C.AMF);this.J(this.
Y,0);this.J(this.Vr,0);this.J(this.Ty,0);this.Bb(this.Ty);this.Y.El=[this,this.BA7
];this.Ty.Zs(A._GetAutoObject(A.aco.Aqg));},_Done:function(){this.__proto__=C.AhA;
this.Y._Done();this.Vr._Done();this.Ty._Done();C.AhA._Done.call(this);},_ReInit:
function(){C.AhA._ReInit.call(this);this.Y._ReInit();this.Vr._ReInit();this.Ty._ReInit(
);},_Mark:function(D){var B;C.AhA._Mark.call(this,D);if((B=this.Y)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Vr)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ty)._cycle!=
D)B._Mark(B._cycle=D);},_className:"Demonstrator::AnimalSelectionActions"};C.Vr={
_Init:function(aArg){C.Aut._Init.call(this,aArg);this.__proto__=C.Vr;this.T(A.aaR(
A.acf.A5G));},_ReInit:function(){C.Aut._ReInit.call(this);this.T(A.aaR(A.acf.A5G
));},_className:"Demonstrator::ActionsHeader"};C.AL2={Background:null,XO:null,Y:
null,Acw:null,Acl:null,ZG:null,Acv:null,Aka:null,Akb:null,Akc:null,Akd:null,Ake:
null,Ahc:false,Init:function(aArg){var B;A.zX([this,this.BeJ],[B=A._GetAutoObject(
A.aco.Hq),B.AEx,B.AFx],0);A.pe([this,this.BeJ],this);},Aks:function(G){this.ArV(
true);},Akr:function(G){this.ArV(false);},ArV:function(E){if(this.Ahc===E)return;
this.Ahc=E;this.XO.ArV(E);A.pe([this,this.BeU],this);},BeJ:function(G){var BBe=A.
_GetAutoObject(A.aco.Hq).Ahv===2;A._GetAutoObject(A.Device.Helper).JV(this.ZG,BBe
);},BeU:function(G){var B;if(this.Ahc)this.H(A.abI(this.M,(B=this.XO.M)[3]-B[1])
);else this.H(A.abI(this.M,((B=this.XO.M)[3]-B[1])+((B=this.Y.Db(0x401))[3]-B[1]
)));},_Init:function(aArg){A.Core.P._Init.call(this,aArg);A.acg.AK._Init.call(this.
Background={I:this},0);C.Vr._Init.call(this.XO={I:this},0);A.Core.Y._Init.call(this.
Y={I:this},0);C.Acw._Init.call(this.Acw={I:this},0);C.Acl._Init.call(this.Acl={I:
this},0);C.ZG._Init.call(this.ZG={I:this},0);C.Acv._Init.call(this.Acv={I:this},
0);A.acg.C5._Init.call(this.Aka={I:this},0);A.acg.C5._Init.call(this.Akb={I:this
},0);A.acg.C5._Init.call(this.Akc={I:this},0);A.acg.C5._Init.call(this.Akd={I:this
},0);A.acg.C5._Init.call(this.Ake={I:this},0);this.__proto__=C.AL2;this.H(Aae);this.
Background.AZ(0x3F);this.Background.H(Aae);this.XO.AZ(0x1D);this.XO.H(Cd);this.Y.
H(Lv);this.Y.JO(1);this.Acw.H(AhP);this.Acw.Aj(true);this.Acl.H(Aob);this.Acl.Aj(
true);this.ZG.H(N$);this.ZG.Aj(true);this.Acv.H(Xa);this.Acv.Aj(true);this.Aka.DC(
US);this.Aka.DL(MF);this.Aka.L(A.jb.Bc);this.Akb.DC(Aoc);this.Akb.DL(AhQ);this.Akb.
L(A.jb.Bc);this.Akc.DC(AhR);this.Akc.DL(AcM);this.Akc.L(A.jb.Bc);this.Akd.DC(UT);
this.Akd.DL(Aod);this.Akd.L(A.jb.Bc);this.Ake.DC(Aoe);this.Ake.DL(Aof);this.Ake.
L(A.jb.Bc);this.J(this.Background,0);this.J(this.XO,0);this.J(this.Y,0);this.J(this.
Acw,0);this.J(this.Acl,0);this.J(this.ZG,0);this.J(this.Acv,0);this.J(this.Aka,0
);this.J(this.Akb,0);this.J(this.Akc,0);this.J(this.Akd,0);this.J(this.Ake,0);this.
XO.A9V([this,this.Aks]);this.XO.A9U([this,this.Akr]);this.Y.El=[this,this.BeU];this.
Init(aArg);},_Done:function(){this.__proto__=A.Core.P;this.Background._Done();this.
XO._Done();this.Y._Done();this.Acw._Done();this.Acl._Done();this.ZG._Done();this.
Acv._Done();this.Aka._Done();this.Akb._Done();this.Akc._Done();this.Akd._Done();
this.Ake._Done();A.Core.P._Done.call(this);},_ReInit:function(){A.Core.P._ReInit.
call(this);this.Background._ReInit();this.XO._ReInit();this.Y._ReInit();this.Acw.
_ReInit();this.Acl._ReInit();this.ZG._ReInit();this.Acv._ReInit();this.Aka._ReInit(
);this.Akb._ReInit();this.Akc._ReInit();this.Akd._ReInit();this.Ake._ReInit();},
_Mark:function(D){var B;A.Core.P._Mark.call(this,D);if((B=this.Background)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.XO)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
Y)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Acw)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Acl)._cycle!=D)B._Mark(B._cycle=D);if((B=this.ZG)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Acv)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Aka)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Akb)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Akc)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.Akd)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
Ake)._cycle!=D)B._Mark(B._cycle=D);},_className:"Demonstrator::ActionsMenu"};C.Jm={
Yz:null,Ag0:null,Bn:null,C5:null,Af4:function(G){},A0k:function(s){this.Af4(s);}
,_Init:function(aArg){A.Core.P._Init.call(this,aArg);A.acg.Ap._Init.call(this.Yz={
I:this},0);A.acg.Ap._Init.call(this.Ag0={I:this},0);A.Core.Bn._Init.call(this.Bn={
I:this},0);A.acg.C5._Init.call(this.C5={I:this},0);this.__proto__=C.Jm;this.H(Cd
);this.Yz.H(Aog);this.Yz.L(A.jb.Text);this.Ag0.H(Afw);this.Ag0.L(A.jb.Text);this.
Ag0.Cv(0);this.Bn.JQ(JY);this.Bn.Kr(N_);this.Bn.DC(P4);this.Bn.DL(MF);this.C5.DC(
P4);this.C5.DL(N_);this.C5.L(A.jb.Bc);this.J(this.Yz,0);this.J(this.Ag0,0);this.
J(this.Bn,0);this.J(this.C5,0);this.Yz.Aw(A.aaL(A.aci.TJ));this.Ag0.Aw(A.aaL(A.aci.
ATM));this.Bn.BN=[this,this.A0k];},_Done:function(){this.__proto__=A.Core.P;this.
Yz._Done();this.Ag0._Done();this.Bn._Done();this.C5._Done();A.Core.P._Done.call(
this);},_ReInit:function(){A.Core.P._ReInit.call(this);this.Yz._ReInit();this.Ag0.
_ReInit();this.Bn._ReInit();this.C5._ReInit();},_Mark:function(D){var B;A.Core.P.
_Mark.call(this,D);if((B=this.Yz)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ag0).
_cycle!=D)B._Mark(B._cycle=D);if((B=this.Bn)._cycle!=D)B._Mark(B._cycle=D);if((B=
this.C5)._cycle!=D)B._Mark(B._cycle=D);},_className:"Demonstrator::ActionsItem"};
C.Acl={AGo:null,DT:null,Yy:null,BU:null,M7:null,Ahw:null,ANz:0,Init:function(aArg
){var B;A.zX([this,this.BeT],[B=A._GetAutoObject(A.aco.Hq),B.AEx,B.AFx],0);A.pe([
this,this.BeT],this);},Af4:function(G){var Iw=A.ab0(this.Yy.String,0,10);var If=
false;switch(A._GetAutoObject(A.aco.Hq).Ahv){case 2:If=A._GetAutoObject(A.aco.Hq
).BBu(Iw);break;case 0:case 1:If=A._GetAutoObject(A.aco.Hq).BfS(Iw);break;default:
A.ab5("%s%e",Ak$,A._GetAutoObject(A.aco.Hq).Ahv);}if(If){Iw=Iw+1;this.Yy.R(Iw.toFixed(
));}},BeT:function(G){var AJd=null;var AKt=0;switch(A._GetAutoObject(A.aco.Hq).Ahv
){case 2:{AJd=A.aaL(A.ach.Avt);AKt=276;}break;case 0:{AJd=A.aaL(A.ach.AjW);AKt=900;
}break;case 1:{AJd=A.aaL(C.AxJ);AKt=276;}break;default:A.ab5("%s%e",Ak$,A._GetAutoObject(
A.aco.Hq).Ahv);}this.Yy.R(((AKt*1000000000000)+(A.abY(this.Yy.String,0,10)%1000000000000
)).toFixed());this.Yz.Aw(AJd);},Blx:function(E){var F;if(this.ANz===E)return;this.
ANz=E;if(!!this.AGo)(F=this.AGo,F[2].call(F[0],E));},Bkg:function(){return this.
ANz;},_Init:function(aArg){C.Jm._Init.call(this,aArg);A.acq.DT._Init.call(this.DT={
I:this},0);C.Akn._Init.call(this.Yy={I:this},0);A.acg.BU._Init.call(this.BU={I:this
},0);A.acg.Ap._Init.call(this.M7={I:this},0);C.Ahw._Init.call(this.Ahw={I:this},
0);this.__proto__=C.Acl;var B;this.DT.H(AxW);this.DT.ArU(120);this.DT.GK=30;this.
DT.AST(A.jb.Re);this.DT.A9o(A.jb.CS);this.DT.A9s(A.jb.CS);this.DT.ASU(A.jb.Re);this.
DT.A9t(A.jb.Text);this.DT.A9p(A.jb.AV);this.DT.A9u(A.jb.Bm);this.DT.A9r(A.jb.AV);
this.DT.A9q(A.jb.Re);this.Bn.JQ(AxX);this.Bn.DL(O3);this.Yy.H(Rj);this.Yy.R(AxY);
this.Yy.L(A.jb.Text);this.BU.H(UU);this.BU.Ng(2);this.BU.L(A.jb.Text);this.M7.H(
AsS);this.M7.L(A.jb.Text);this.M7.A6(0xC);this.M7.Cv(3);this.J(this.DT,-2);this.
J(this.Yy,-1);this.J(this.BU,0);this.J(this.M7,0);this.DT.As([this,this.Bkg,this.
Blx]);this.DT.A9A(this.Ahw);this.DT.ArM(A.aaL(A.fl.Bh));this.DT.AwC(A.aaL(A.fl.Bh
));this.M7.Aw(A.aaL(A.ach.Ajq));this.AGo=[B=A._GetAutoObject(A.aco.Hq),B.AEx,B.AFx
];this.Init(aArg);},_Done:function(){this.__proto__=C.Jm;this.DT._Done();this.Yy.
_Done();this.BU._Done();this.M7._Done();this.Ahw._Done();C.Jm._Done.call(this);}
,_ReInit:function(){C.Jm._ReInit.call(this);this.DT._ReInit();this.Yy._ReInit();
this.BU._ReInit();this.M7._ReInit();this.Ahw._ReInit();this.DT.ArM(A.aaL(A.fl.Bh
));this.DT.AwC(A.aaL(A.fl.Bh));},_Mark:function(D){var B;C.Jm._Mark.call(this,D);
if((B=this.AGo)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.DT)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.Yy)._cycle!=D)B._Mark(B._cycle=D);if((B=this.BU
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.M7)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Ahw)._cycle!=D)B._Mark(B._cycle=D);},_className:"Demonstrator::ScanIdAction"
};C.Acw={UF:null,OS:null,A36:0,Init:function(aArg){var B;A.zX([this,this.BAo],[B=
A._GetAutoObject(A.aco.Hq),B.ASA,B.ATl],0);A.zX([this,this.AAA],[B=A._GetAutoObject(
A.Device.Device),B.Arx,B.Ate],0);A.pe([this,this.AAA],this);},Ai:function(Ae){C.
Jm.Ai.call(this,Ae);this.OS.Z(!A._GetAutoObject(A.aco.Hq).Axi);},Af4:function(G){
var B;A._GetAutoObject(A.aco.Hq).Bet(this);},AAA:function(G){if(A._GetAutoObject(
A.Device.Device).TemperatureUnit!==this.A36){switch(A._GetAutoObject(A.Device.Device
).TemperatureUnit){case 0:this.OS.R(A.abk(A._GetAutoObject(A.aco.Hq).WO/100,0,1)
);break;case 1:{var Aui=A._GetAutoObject(A.Device.Converter).AU2(A._GetAutoObject(
A.aco.Hq).WO/100,0,A._GetAutoObject(A.Device.Device).TemperatureUnit);this.OS.R(
A.abk(Aui,0,1));}break;default:A.ab5("%s%e",AxZ,A._GetAutoObject(A.Device.Device
).TemperatureUnit);}this.A36=A._GetAutoObject(A.Device.Device).TemperatureUnit;}
},Bz9:function(G){var B;var Agh=A.abX(this.OS.String,0);Agh=A._GetAutoObject(A.Device.
Converter).AU2(Agh,A._GetAutoObject(A.Device.Device).TemperatureUnit,0);Agh*=100;
A._GetAutoObject(A.aco.Hq).AFE(Math.round(Agh)|0);},BAo:function(G){this.An();},
_Init:function(aArg){C.Jm._Init.call(this,aArg);A.acr.UF._Init.call(this.UF={I:this
},0);C.OS._Init.call(this.OS={I:this},0);this.__proto__=C.Acw;var B;this.UF.H(Ax0
);this.UF.A9P(A.aaR(A.acf.A4V));this.OS.H(Ax1);this.OS.R(Aoh);this.OS.L(A.jb.Text
);this.OS.Blz(true);this.A36=A._GetAutoObject(A.Device.Device).TemperatureUnit;this.
J(this.UF,0);this.J(this.OS,0);this.Yz.Aw(A.aaL(A.ach.AbD));this.UF.As([B=A._GetAutoObject(
A.aco.Hq),B.ASA,B.ATl]);this.UF.OnSetAppearance(A._GetAutoObject(A.acx.AuO));this.
OS.Di=[this,this.Bz9];this.Init(aArg);},_Done:function(){this.__proto__=C.Jm;this.
UF._Done();this.OS._Done();C.Jm._Done.call(this);},_ReInit:function(){C.Jm._ReInit.
call(this);this.UF._ReInit();this.OS._ReInit();this.UF.A9P(A.aaR(A.acf.A4V));},_Mark:
function(D){var B;C.Jm._Mark.call(this,D);if((B=this.UF)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.OS)._cycle!=D)B._Mark(B._cycle=D);},_className:"Demonstrator::TemperatureAction"
};C.Arb={Q:null,BU:null,Bn:null,AgB:null,Am4:null,Am3:null,Arg:null,Text:null,Hk:
null,Ap:null,CX:null,Arf:null,Arh:null,Apg:false,Bk:function(aSize){this.Hk.H(A.
abK(this.Hk.M,aSize));this.BU.Axp(1);this.BU.Jq(0,40);this.BU.Ff(0,aSize[0]-20,20
,12.5,12.5,-90,90,10);this.BU.Ff(0,20,20,12.5,12.5,90,270,10);this.BU.VJ(0);},Ai:
function(Ae){var B;var F;A.Core.P.Ai.call(this,Ae);var Iy=((Ae&0x40)===0x40);if(
Iy){if(!!this.Q)this.Text.R((F=this.Q,F[1].call(F[0])));this.AgB.Ar(true);this.Ap.
Z(false);}else{if(!!this.Q)this.Text.R((F=this.Q,F[1].call(F[0])));this.AgB.Ar(false
);this.CX.Z(false);this.Ap.Z(true);}this.Apg=Iy;},Af4:function(G){var B;if(!((this.
U&0x80)===0x80))this.Ij().AMS(this);},A7Z:function(G){},Baw:function(s){this.A7Z(
s);},BjI:function(G){var B;var F;if(!this.Q||!(F=this.Q,F[1].call(F[0])).length)
this.CX.H(A.abM(this.CX.M,A.aaI(this.Text.M)[0]));else{this.CX.H(A.abM(this.CX.M
,this.Text.AOQ(0)[2]+2));this.CX.H(A.abO(this.CX.M,this.Text.AOQ(0)[1]));this.CX.
H(A.abI(this.CX.M,(B=this.Text.AOQ(0))[3]-B[1]));}this.Ap.H(A.abM(this.Ap.M,this.
Text.M[0]-((B=this.Ap.M)[2]-B[0])));},A7X:function(G){},Bav:function(s){this.A7X(
s);},As:function(E){if(A.aaZ(this.Q,E))return;if(!!this.Q)A.z$([this,this.Kc],this.
Q,0);this.Q=E;if(!!E)A.zX([this,this.Kc],E,0);if(!!E)A.pe([this,this.Kc],this);}
,Kc:function(G){this.An();},Bla:function(G){var B;if(((this.U&0x80)===0x80))this.
Ij().ACx(this);},BeB:function(G){},_Init:function(aArg){A.Core.P._Init.call(this
,aArg);A.Graphics.Hv._Init.call(this.BU={I:this},0);A.Core.Bn._Init.call(this.Bn={
I:this},0);A.acl.TE._Init.call(this.AgB={I:this},0);A.Core.BM._Init.call(this.Am4={
I:this},0);A.Core.BM._Init.call(this.Am3={I:this},0);A.Core.BM._Init.call(this.Arg={
I:this},0);A.acg.Text._Init.call(this.Text={I:this},0);A.acg.Hk._Init.call(this.
Hk={I:this},0);A.acg.Ap._Init.call(this.Ap={I:this},0);A.acg.AK._Init.call(this.
CX={I:this},0);A.Core.BM._Init.call(this.Arf={I:this},0);A.Core.BM._Init.call(this.
Arh={I:this},0);this.__proto__=C.Arb;var B;this.H(Afx);this.Bn.AZ(0x3F);this.Bn.
JQ(JY);this.Bn.Kr(Aoi);this.Bn.DC(IR);this.Bn.DL(Ri);this.AgB.Fl(530);this.AgB.Uk(
530);this.Am4.Filter=143;this.Am3.Filter=45;this.Arg.Filter=1;this.Text.AZ(0x3F);
this.Text.H(Afx);this.Text.I7(true);this.Text.A6(0x12);this.Text.L(0xFFB3B3B3);this.
Hk.H(Afx);this.Hk.L(0xFFB3B3B3);this.Hk.Ng(1);this.Ap.H(Aoj);this.CX.H(Xb);this.
CX.L(0xFFB3B3B3);this.CX.Z(false);this.Arf.Filter=138;this.Arh.Filter=137;this.J(
this.Bn,0);this.J(this.Text,0);this.J(this.Hk,0);this.J(this.Ap,0);this.J(this.CX
,0);this.Bn.Ln=[this,this.Af4];this.AgB.Q=[B=this.CX,B.Fk,B.Z];this.Am4.BN=[this
,this.Baw];this.Am4.D1=[this,this.Baw];this.Am3.BN=[this,this.Bav];this.Am3.D1=[
this,this.Bav];this.Arg.BN=[this,this.Bla];this.Text.Q1([this,this.BjI]);this.Text.
S(A.aaL(A.fl.Ak));this.Hk.Zv(this.BU);this.Ap.Aw(null);this.Arf.BN=[this,this.BeB
];this.Arh.BN=[this,this.BeB];},_Done:function(){this.__proto__=A.Core.P;this.BU.
_Done();this.Bn._Done();this.AgB._Done();this.Am4._Done();this.Am3._Done();this.
Arg._Done();this.Text._Done();this.Hk._Done();this.Ap._Done();this.CX._Done();this.
Arf._Done();this.Arh._Done();A.Core.P._Done.call(this);},_ReInit:function(){A.Core.
P._ReInit.call(this);this.BU._ReInit();this.Bn._ReInit();this.AgB._ReInit();this.
Am4._ReInit();this.Am3._ReInit();this.Arg._ReInit();this.Text._ReInit();this.Hk.
_ReInit();this.Ap._ReInit();this.CX._ReInit();this.Arf._ReInit();this.Arh._ReInit(
);this.Text.S(A.aaL(A.fl.Ak));},_Mark:function(D){var B;A.Core.P._Mark.call(this
,D);if((B=this.Q)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.BU)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.Bn)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
AgB)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Am4)._cycle!=D)B._Mark(B._cycle=D);
if((B=this.Am3)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Arg)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Text)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Hk)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.Ap)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
CX)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Arf)._cycle!=D)B._Mark(B._cycle=D);
if((B=this.Arh)._cycle!=D)B._Mark(B._cycle=D);},_className:"Demonstrator::InputView"
};C.Aen={Background:null,Yp:null,_Init:function(aArg){A.Core.P._Init.call(this,aArg
);A.acg.AK._Init.call(this.Background={I:this},0);C.Yp._Init.call(this.Yp={I:this
},0);this.__proto__=C.Aen;var B;this.H(Aok);this.Background.H(Aok);this.Yp.AZ(0x1D
);this.Yp.H(AsT);this.J(this.Background,0);this.J(this.Yp,0);this.Yp.As([B=A._GetAutoObject(
A.aco.AgD),B.A8M,B.AFz]);},_Done:function(){this.__proto__=A.Core.P;this.Background.
_Done();this.Yp._Done();A.Core.P._Done.call(this);},_ReInit:function(){A.Core.P.
_ReInit.call(this);this.Background._ReInit();this.Yp._ReInit();},_Mark:function(
D){var B;A.Core.P._Mark.call(this,D);if((B=this.Background)._cycle!=D)B._Mark(B.
_cycle=D);if((B=this.Yp)._cycle!=D)B._Mark(B._cycle=D);},_className:"Demonstrator::FilterRow"
};C.OS={Init:function(aArg){var B;A.zX([this,this.AAA],[B=A._GetAutoObject(A.Device.
Device),B.Arx,B.Ate],0);A.pe([this,this.AAA],this);},Ai:function(Ae){var B;C.Akn.
Ai.call(this,Ae);var Iy=((this.U&0x40)===0x40);if(!Iy&&(this.String.length>0))this.
Text.R(((this.String+AsU)+A._GetAutoObject(A.acj.Temperature).AlH())+String.fromCharCode(
0x0A));else this.Text.R(this.String+String.fromCharCode(0x0A));if(this.D6>this.String.
length)this.D6=this.String.length;},AAA:function(G){this.An();},_Init:function(aArg
){C.Akn._Init.call(this,aArg);this.__proto__=C.OS;this.Init(aArg);},_className:"Demonstrator::TemperatureInputView"
};C.Akn={B6:null,Di:null,IS:null,Cr:null,Amz:null,Sa:null,KL:null,Bn:null,Text:null
,CX:null,Aqw:null,Asc:null,BU:null,Hk:null,Art:null,Aq1:null,AqJ:null,String:A.jV
,D6:0,AQ:0xFFB3B3B3,AvS:15,ANH:false,LA:false,Bk:function(aSize){this.Hk.H(A.abK(
this.Hk.M,aSize));this.BU.Axp(1);this.BU.Jq(0,40);this.BU.Ff(0,aSize[0]-20,20,12.5
,12.5,-90,90,10);this.BU.Ff(0,20,20,12.5,12.5,90,270,10);this.BU.VJ(0);},Ai:function(
Ae){var B;A.acn.I$.Ai.call(this,Ae);if(((Ae&0x40)===0x40))this.IS.Ar(true);else{
this.IS.Ar(false);this.CX.Z(false);}},A4e:function(G){var B;var Bd=this.Text.M;var
Nu=0;var Nv=0;if(this.CX.Er[0]<Bd[0])Nu=Bd[0]-this.CX.Er[0];if(this.CX.Er[0]>Bd[
2])Nu=Bd[2]-this.CX.Er[0];if(this.CX.Er[1]<Bd[1])Nv=Bd[1]-this.CX.Er[1];if(this.
CX.EC[1]>Bd[3])Nv=Bd[3]-this.CX.EC[1];if(!!Nu||!!Nv)this.Text.F_(A.abf(this.Text.
Br,[Nu,Nv]));Nu=this.Text.Br[0];Nv=this.Text.Br[1];var C3=[(B=this.Text.Db())[2]-
B[0],B[3]-B[1]];if(C3[0]<=((B=this.Text.M)[2]-B[0]))Nu=0;if(C3[1]<=((B=this.Text.
M)[3]-B[1]))Nv=0;this.Text.F_([Nu,Nv]);},Amh:function(G){if(!this.B6)return;var A3I=
this.Text.AGK(this.D6);var pos=this.Text.Afb(A3I);this.CX.DL(A.abe(pos,[0,this.B6.
Ascent]));this.CX.DC(A.abf(pos,[0,this.B6.Descent]));if(this.IS.Bw){this.IS.Ar(false
);this.IS.Ar(true);}if(this.LA){A.pe([this,this.A4e],this);this.LA=false;}},AAw:
function(G){if(!this.A6H(0x80))this.Ij().AMS(this);var EH=this.Text.ATQ(this.Bn.
H0);var Vc=this.Text.AnO(EH);if(Vc!==this.D6){this.D6=Vc;A.pe([this,this.Amh],this
);this.LA=true;}},AAq:function(G){if(!this.B6)return;var EH=this.Text.AGK(this.D6
);if(this.Cr.CO===6){EH=[EH[0]-1,EH[1]];if(this.Text.AnO(EH)===this.D6){EH=[EH[0
],EH[1]-1];EH=[this.Text.ACV(EH[1]).length,EH[1]];}}if(this.Cr.CO===7){EH=[EH[0]+
1,EH[1]];if(this.Text.AnO(EH)===this.D6){EH=[EH[0],EH[1]+1];EH=[0,EH[1]];}}var Vc=
this.Text.AnO(EH);if(Vc!==this.D6){this.D6=Vc;A.pe([this,this.Amh],this);this.LA=
true;}},Bek:function(G){if(!this.D6)return;this.R(A.ab1(this.String,this.D6-1,1)
);this.D6=this.D6-1;this.LA=true;A.pe(this.Di,this);},AAr:function(G){if(this.D6>=
this.String.length)return;this.R(A.ab1(this.String,this.D6,1));this.LA=true;A.pe(
this.Di,this);},Bep:function(G){if(this.String.length>=this.AvS)return;var Byv=this.
KL.DP;var Aug=String.fromCharCode(Byv);this.R(A.abU(this.String,Aug,this.D6));this.
D6=this.D6+Aug.length;this.LA=true;A.pe(this.Di,this);},R:function(E){if(this.String===
E)return;this.String=E;if(this.D6>(E.length+1))this.D6=E.length;this.Text.R(E+String.
fromCharCode(0x0A));this.LA=true;this.Text.F_(JY);},L:function(E){if(this.AQ===E
)return;this.AQ=E;this.Text.L(E);this.CX.L(E);this.Hk.L(E);},S:function(E){if(this.
B6===E)return;this.B6=E;this.Text.S(E);this.LA=true;this.Text.F_(JY);},BeC:function(
G){if(this.ANH===false)return;if(this.String.indexOf(String.fromCharCode(0x2E),0
)>=0)return;if(this.String.length>=this.AvS)return;this.R(A.abU(this.String,S7,this.
D6));this.D6=this.D6+1;this.LA=true;A.pe(this.Di,this);},Bbf:function(s){this.BeC(
s);},Blz:function(E){if(this.ANH===E)return;this.ANH=E;if(E===false){var Bfj=this.
String.indexOf(String.fromCharCode(0x2E),0);if(Bfj>=0)this.R(A.abV(this.String,Bfj
));}this.LA=true;this.Text.F_(JY);},BmF:function(E){if(this.AvS===E)return;this.
AvS=E;this.R(A.abV(this.String,E));this.LA=true;this.Text.F_(JY);},BAf:function(
G){if(this.A6H(0x80))this.Ij().ACx(this);this.An();},Bz5:function(G){var Vc=this.
String.length;if(Vc!==this.D6){this.D6=Vc;A.pe([this,this.Amh],this);this.LA=true;
}},Bz8:function(G){if(!!this.D6){this.D6=0;A.pe([this,this.Amh],this);this.LA=true;
}},_Init:function(aArg){A.acn.I$._Init.call(this,aArg);A.acl.TE._Init.call(this.
IS={I:this},0);A.Core.BM._Init.call(this.Cr={I:this},0);A.Core.BM._Init.call(this.
Amz={I:this},0);A.Core.BM._Init.call(this.Sa={I:this},0);A.Core.BM._Init.call(this.
KL={I:this},0);A.Core.Bn._Init.call(this.Bn={I:this},0);A.acg.Text._Init.call(this.
Text={I:this},0);A.acg.C5._Init.call(this.CX={I:this},0);A.Core.BM._Init.call(this.
Aqw={I:this},0);A.Core.BM._Init.call(this.Asc={I:this},0);A.Graphics.Hv._Init.call(
this.BU={I:this},0);A.acg.Hk._Init.call(this.Hk={I:this},0);A.Core.BM._Init.call(
this.Art={I:this},0);A.Core.BM._Init.call(this.Aq1={I:this},0);A.Core.BM._Init.call(
this.AqJ={I:this},0);this.__proto__=C.Akn;var B;this.H(Afx);this.IS.B2=false;this.
IS.Cw=true;this.IS.Fl(500);this.IS.Uk(500);this.Cr.Filter=147;this.Amz.Filter=45;
this.Sa.Filter=44;this.KL.Filter=143;this.Bn.AZ(0x3F);this.Bn.JQ(Ri);this.Bn.Kr(
IR);this.Bn.DC(Aoi);this.Bn.DL(JY);this.Bn.AFk(3);this.Text.AZ(0x3F);this.Text.H(
Afx);this.Text.KS(false);this.Text.A6(0x12);this.Text.R(A.jV);this.Text.L(0xFFB3B3B3
);this.CX.DC(AsV);this.CX.DL(Aol);this.CX.A_p(2);this.CX.A_o(2);this.CX.L(0xFFB3B3B3
);this.CX.Z(false);this.Aqw.Filter=138;this.Asc.Filter=137;this.Hk.H(Afx);this.Hk.
L(0xFFB3B3B3);this.Hk.Ng(1);this.Art.Filter=1;this.Aq1.Filter=41;this.AqJ.Filter=
42;this.J(this.Bn,0);this.J(this.Text,0);this.J(this.CX,0);this.J(this.Hk,0);this.
IS.Q=[B=this.CX,B.Fk,B.Z];this.Cr.BN=[this,this.AAq];this.Cr.D1=[this,this.AAq];
this.Amz.BN=[this,this.Bek];this.Amz.D1=[this,this.Bek];this.Sa.BN=[this,this.AAr
];this.Sa.D1=[this,this.AAr];this.KL.BN=[this,this.Bep];this.KL.D1=[this,this.Bep
];this.Bn.BN=[this,this.AAw];this.Text.Q1([this,this.Amh]);this.Text.S(A.aaL(A.fl.
Ak));this.B6=A.aaL(A.fl.Ak);this.Aqw.BN=[this,this.Bbf];this.Asc.BN=[this,this.Bbf
];this.Hk.Zv(this.BU);this.Art.BN=[this,this.BAf];this.Aq1.BN=[this,this.Bz8];this.
AqJ.BN=[this,this.Bz5];},_Done:function(){this.__proto__=A.acn.I$;this.IS._Done(
);this.Cr._Done();this.Amz._Done();this.Sa._Done();this.KL._Done();this.Bn._Done(
);this.Text._Done();this.CX._Done();this.Aqw._Done();this.Asc._Done();this.BU._Done(
);this.Hk._Done();this.Art._Done();this.Aq1._Done();this.AqJ._Done();A.acn.I$._Done.
call(this);},_ReInit:function(){A.acn.I$._ReInit.call(this);this.IS._ReInit();this.
Cr._ReInit();this.Amz._ReInit();this.Sa._ReInit();this.KL._ReInit();this.Bn._ReInit(
);this.Text._ReInit();this.CX._ReInit();this.Aqw._ReInit();this.Asc._ReInit();this.
BU._ReInit();this.Hk._ReInit();this.Art._ReInit();this.Aq1._ReInit();this.AqJ._ReInit(
);this.Text.S(A.aaL(A.fl.Ak));this.S(A.aaL(A.fl.Ak));},_Mark:function(D){var B;A.
acn.I$._Mark.call(this,D);if((B=this.B6)&&(B._cycle!=D))B._Mark(B._cycle=D);if((
B=this.Di)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.IS)._cycle!=D)B.
_Mark(B._cycle=D);if((B=this.Cr)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Amz)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.Sa)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
KL)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Bn)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Text)._cycle!=D)B._Mark(B._cycle=D);if((B=this.CX)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Aqw)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Asc)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.BU)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Hk)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.Art)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Aq1
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AqJ)._cycle!=D)B._Mark(B._cycle=D);},
_className:"Demonstrator::NumberInput"};C.Acv={LabelDataSync:null,Af4:function(G
){var B;A.pe([B=A._GetAutoObject(A.acs.Acp),B.BBE],this);},_Init:function(aArg){
C.Jm._Init.call(this,aArg);A.kR.CH._Init.call(this.LabelDataSync={I:this},0);this.
__proto__=C.Acv;this.LabelDataSync.H(Aom);this.LabelDataSync.R(A.aaR(A.acf.A5w));
this.LabelDataSync.L(A.jb.Text);this.J(this.LabelDataSync,0);this.Yz.Aw(A.aaL(C.
AUT));this.LabelDataSync.S(A.aaL(A.fl.Af));this.LabelDataSync.A2(A.aaL(A.fl.Ak));
},_Done:function(){this.__proto__=C.Jm;this.LabelDataSync._Done();C.Jm._Done.call(
this);},_ReInit:function(){C.Jm._ReInit.call(this);this.LabelDataSync._ReInit();
this.LabelDataSync.R(A.aaR(A.acf.A5w));this.LabelDataSync.S(A.aaL(A.fl.Af));this.
LabelDataSync.A2(A.aaL(A.fl.Ak));},_Mark:function(D){var B;C.Jm._Mark.call(this,
D);if((B=this.LabelDataSync)._cycle!=D)B._Mark(B._cycle=D);},_className:"Demonstrator::SyncAction"
};C.AUT={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/DemonstratorSyncIcon.png"
,Format:A._PIXEL_FORMAT_NATIVE,NoOfFrames:1,FrameSize:[50,60],FrameDelay:0,_this:
null}};C.Abd={TimespanDaysToString:null,Avl:function(aIndex){if(this.AqU()>aIndex
)return this.TimespanDaysToString.BH(aIndex);A.ab5("%s",AsW);return A.jV;},AqU:function(
){return 4;},C4:function(aIndex){var Ai_=0;switch(aIndex){case 0:Ai_=0;break;case
1:Ai_=1;break;case 2:Ai_=2;break;case 3:Ai_=3;break;default:throw new Error(Ax2+
aIndex.toFixed());}return Ai_;},_Init:function(aArg){A.acq.VK._Init.call(this,aArg
);A.Device.TimespanDaysToString._Init.call(this.TimespanDaysToString={I:this},0);
this.__proto__=C.Abd;},_Done:function(){this.__proto__=A.acq.VK;this.TimespanDaysToString.
_Done();A.acq.VK._Done.call(this);},_ReInit:function(){A.acq.VK._ReInit.call(this
);this.TimespanDaysToString._ReInit();},_Mark:function(D){var B;A.acq.VK._Mark.call(
this,D);if((B=this.TimespanDaysToString)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Demonstrator::DatePickerUnitDD"};C.BFp={GH:0,AVA:1,He:2,Year:3};C.ACu={_class:function(
){return A.aci.Al;},0:{FileName:"./res_index/DemonstratorEarTagIcon.png",Format:
A._PIXEL_FORMAT_ALPHA8,NoOfFrames:2,FrameSize:[37,37],FrameDelay:0,_this:null}};
C.AxJ={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/DemonstratorTransponderEarTagIcon.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:2,FrameSize:[37,37],FrameDelay:0,_this:
null}};C.ZG={Aec:null,Init:function(aArg){var Au=A._NewObject(A.Core.Bs,0);Au.Initialize(
A._GetAutoObject(A.Device.Helper).Dv());var A1t=Au.Format(Iq);this.Aec.R(A1t);},
Af4:function(G){var B;var J4=this.Aec.String;var O;O=J4.indexOf(String.fromCharCode(
0x2E),0);while(O>=0){J4=A.ab1(J4,O,1);O=J4.indexOf(String.fromCharCode(0x2E),O);
}J4=J4+Ax3;J4=J4+A._GetAutoObject(A.acj.VA).ACQ(J4).toFixed();var A1t=A._GetAutoObject(
A.Device.AnI).Be_(J4);A._GetAutoObject(A.aco.Hq).BBv(((B=(A1t|0))<0)?B+0x100000000:
B);},_Init:function(aArg){C.Jm._Init.call(this,aArg);C.ANE._Init.call(this.Aec={
I:this},0);this.__proto__=C.ZG;this.Aec.H(Rj);this.Aec.L(A.jb.Text);this.Aec.BmF(
10);this.J(this.Aec,-1);this.Yz.Aw(A.aaL(A.ach.Avt));this.Init(aArg);},_Done:function(
){this.__proto__=C.Jm;this.Aec._Done();C.Jm._Done.call(this);},_ReInit:function(
){C.Jm._ReInit.call(this);this.Aec._ReInit();},_Mark:function(D){var B;C.Jm._Mark.
call(this,D);if((B=this.Aec)._cycle!=D)B._Mark(B._cycle=D);},_className:"Demonstrator::ScanDateAction"
};C.Ahv={BFD:0,BFz:1,VA:2,LAST:3};C.Ahw={Ahx:null,Avl:function(aIndex){if(this.AqU(
)>aIndex)return this.Ahx.BH(aIndex);A.ab5("%s",AsW);return A.jV;},AqU:function(){
return 3;},_Init:function(aArg){A.acq.VK._Init.call(this,aArg);C.Ahx._Init.call(
this.Ahx={I:this},0);this.__proto__=C.Ahw;},_Done:function(){this.__proto__=A.acq.
VK;this.Ahx._Done();A.acq.VK._Done.call(this);},_ReInit:function(){A.acq.VK._ReInit.
call(this);this.Ahx._ReInit();},_Mark:function(D){var B;A.acq.VK._Mark.call(this
,D);if((B=this.Ahx)._cycle!=D)B._Mark(B._cycle=D);},_className:"Demonstrator::ScanTypeDD"
};C.Ahx={BH:function(A5){var BcC=A5;var AKZ=A.jV;switch(BcC){case 2:AKZ=A.aaR(A.
acf.VA);break;case 0:AKZ=A.aaR(A.acf.Transponder);break;case 1:AKZ=A.aaR(A.acf.Bh0
);break;default:throw new Error(Ax4+BcC.toFixed());}return AKZ;},_Init:function(
aArg){A.Device.EnumToString._Init.call(this,aArg);this.__proto__=C.Ahx;},_className:
"Demonstrator::ScanTypeToString"};C.ANE={BeC:function(G){var Bfk=0;var O=this.String.
indexOf(String.fromCharCode(0x2E),0);while(O>=0){Bfk++;O++;O=this.String.indexOf(
String.fromCharCode(0x2E),O);}if(Bfk>=2)return;if(this.String.length>=this.AvS)return;
this.R(A.abU(this.String,S7,this.D6));this.D6=this.D6+1;this.LA=true;A.pe(this.Di
,this);},_Init:function(aArg){C.Akn._Init.call(this,aArg);this.__proto__=C.ANE;}
,_className:"Demonstrator::DateInput"};
C._Init=function(){C.AVu.__proto__=A.acn.Menu;C.AUq.__proto__=A.Core.P;C.AMr.__proto__=
C.Ba;C.Mf.__proto__=A.Core.P;C.Yp.__proto__=C.Arb;C.Abe.__proto__=A.Core.P;C.Avw.
__proto__=A.acn.Ahq;C.AMF.__proto__=C.Fx;C.Aut.__proto__=C.Fx;C.Ba.__proto__=A.Core.
P;C.Fx.__proto__=A.Core.P;C.ANF.__proto__=A.acn.Aho;C.AhA.__proto__=A.Core.P;C.AMy.
__proto__=C.AhA;C.Vr.__proto__=C.Aut;C.AL2.__proto__=A.Core.P;C.Jm.__proto__=A.Core.
P;C.Acl.__proto__=C.Jm;C.Acw.__proto__=C.Jm;C.Arb.__proto__=A.Core.P;C.Aen.__proto__=
A.Core.P;C.OS.__proto__=C.Akn;C.Akn.__proto__=A.acn.I$;C.Acv.__proto__=C.Jm;C.Abd.
__proto__=A.acq.VK;C.ZG.__proto__=C.Jm;C.Ahw.__proto__=A.acq.VK;C.Ahx.__proto__=
A.Device.EnumToString;C.ANE.__proto__=C.Akn;};C._ReInit=function(){};C.DH=function(
D){var B;if((B=C.Background[0]._this)&&(B._cycle!=D))B._Done(C.Background[0]._this=
null);if((B=C.AM1[0]._this)&&(B._cycle!=D))B._Done(C.AM1[0]._this=null);if((B=C.
AM2[0]._this)&&(B._cycle!=D))B._Done(C.AM2[0]._this=null);if((B=C.AM3[0]._this)&&(
B._cycle!=D))B._Done(C.AM3[0]._this=null);if((B=C.AM4[0]._this)&&(B._cycle!=D))B.
_Done(C.AM4[0]._this=null);if((B=C.AP5[0]._this)&&(B._cycle!=D))B._Done(C.AP5[0].
_this=null);if((B=C.Filter[0]._this)&&(B._cycle!=D))B._Done(C.Filter[0]._this=null
);if((B=C.ARE[0]._this)&&(B._cycle!=D))B._Done(C.ARE[0]._this=null);if((B=C.Ajp[
0]._this)&&(B._cycle!=D))B._Done(C.Ajp[0]._this=null);if((B=C.AMI[0]._this)&&(B.
_cycle!=D))B._Done(C.AMI[0]._this=null);if((B=C.Asr[0]._this)&&(B._cycle!=D))B._Done(
C.Asr[0]._this=null);if((B=C.AUY[0]._this)&&(B._cycle!=D))B._Done(C.AUY[0]._this=
null);if((B=C.AHd[0]._this)&&(B._cycle!=D))B._Done(C.AHd[0]._this=null);if((B=C.
AVL[0]._this)&&(B._cycle!=D))B._Done(C.AVL[0]._this=null);if((B=C.AUT[0]._this)&&(
B._cycle!=D))B._Done(C.AUT[0]._this=null);if((B=C.ACu[0]._this)&&(B._cycle!=D))B.
_Done(C.ACu[0]._this=null);if((B=C.AxJ[0]._this)&&(B._cycle!=D))B._Done(C.AxJ[0].
_this=null);};return C;})();

/* VitalControl demonstration application, © Urban GmbH & Co.KG 2023 */