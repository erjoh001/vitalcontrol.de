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
var IQ=[58,10,120,50];var Ip=[0,0,60,60];var O1=[120,0,360,60];var P2="\u2015";var
P3=[0,0,240,60];var CQ=[0,0,40,60];var Fb=[100,0,130,60];var Lt=[43,0,100,60];var
P4=[125,0,240,60];var JY=[0,0];var N_=[100,0];var P5=[100,60];var ME=[0,60];var S5=[
107,0];var UP=[240,0];var Z4=[240,60];var W2=[107,60];var Iq="%d.%m.%Y";var UQ="Unhandled date unit: ";
var Z5=[0,0,200,180];var W3=[36,0,200,30];var Z6=[0,30,160,60];var W4="Text";var
Z7=[0,70,40,110];var Z8=[44,70,156,110];var UR=[160,70,200,110];var W5=[7,2,27,25
];var P6=[0,30,170,180];var Z9=[170,34,190,57];var O2=[0,0,40,40];var Ri=[0,40];
var W6=[40,40];var W7=[40,0];var W8=[0,0,370,100];var W9=[20,0,290,60];var Z_=[0
,60,370,100];var W_="Cap";var W$=[20,0,370,60];var S6=[310,0,370,60];var US=[370
,0];var UT=[370,60];var AcM="UpdateData is called for the base class ListItemBase. Please make "+
"sure this method is implemented by a derived class.";var S7=".";var Z$=[0,0,170
,150];var Afw=[0,59,170,90];var Aaa=[110,0,170,150];var Xa=[0,30];var Aab=[50,0,
100,150];var Aac=[0,0,40,150];var AhP=[0,0,370,240];var JZ=[0,60,370,710];var Aad=[
0,0,370,300];var Lu=[0,60,370,300];var AhQ=[0,60,370,120];var Aoc=[0,120,370,180
];var N$=[0,180,370,240];var Xb=[0,240,370,300];var Aod=[370,120];var AhR=[0,120
];var AhS=[370,180];var Rj=[0,180];var UU=[370,240];var Aoe=[0,240];var Aof=[370
,300];var Aog=[0,300];var Aoh=[0,0,50,60];var Afx=[50,0,100,60];var Ala="Unhandled scan type";
var Aoi=[3,11,253,51];var AxX=[50,0];var O3=[50,60];var Rk=[100,10,370,50];var AxY=
"276000901234567";var UV=[3,10,57,50];var AsU=[3,11,55,50];var AxZ="Unhandled temperature unit";
var Ax0=[110,0,260,60];var Ax1=[235,10,370,50];var Aoj="39.5";var Afy=[0,0,270,40
];var Aok=[270,0];var IR=[270,40];var Aol=[150,0,170,40];var Xc=[205,10,207,30];
var Aom=[0,0,370,40];var AsV=[50,0,320,40];var AsW=" ";var AsX=[135,23];var Aon=[
135,0];var Aoo=[100,0,370,60];var AsY="Error: Nullpointer Exception";var Ax2="Unknown Date Piecker Unit Index: ";
var Ax3="0";var Ax4="Unhandled scan type:";
C.Background={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/DemonstratorBackground.png"
,Format:A._PIXEL_FORMAT_NATIVE,NoOfFrames:1,FrameSize:[1000,740],FrameDelay:0,_this:
null}};C.AM2={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/DemonstratorButtonLeft.png"
,Format:A._PIXEL_FORMAT_NATIVE,NoOfFrames:1,FrameSize:[40,40],FrameDelay:0,_this:
null}};C.AM3={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/DemonstratorButtonLeftPressed.png"
,Format:A._PIXEL_FORMAT_NATIVE,NoOfFrames:1,FrameSize:[40,40],FrameDelay:0,_this:
null}};C.AM4={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/DemonstratorButtonRight.png"
,Format:A._PIXEL_FORMAT_NATIVE,NoOfFrames:1,FrameSize:[40,40],FrameDelay:0,_this:
null}};C.AM5={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/DemonstratorButtonRightPressed.png"
,Format:A._PIXEL_FORMAT_NATIVE,NoOfFrames:1,FrameSize:[40,40],FrameDelay:0,_this:
null}};C.AP6={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/DemonstratorIconDatePicker.png"
,Format:A._PIXEL_FORMAT_NATIVE,NoOfFrames:1,FrameSize:[20,23],FrameDelay:0,_this:
null}};C.Filter={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/DemonstratorFilter.png"
,Format:A._PIXEL_FORMAT_NATIVE,NoOfFrames:1,FrameSize:[15,16],FrameDelay:0,_this:
null}};C.ARF={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/DemonstratorMenuIcon.png"
,Format:A._PIXEL_FORMAT_NATIVE,NoOfFrames:1,FrameSize:[20,16],FrameDelay:0,_this:
null}};C.Ajq={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/DemonstratorArrowRight.png"
,Format:A._PIXEL_FORMAT_NATIVE,NoOfFrames:1,FrameSize:[17,16],FrameDelay:0,_this:
null}};C.AMJ={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/DemonstratorArrowDown.png"
,Format:A._PIXEL_FORMAT_NATIVE,NoOfFrames:1,FrameSize:[17,16],FrameDelay:0,_this:
null}};C.Ast={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/DemonstratorScanIcon.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:2,FrameSize:[37,37],FrameDelay:0,_this:
null}};C.AUZ={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/DemonstratorTemperatureIcon.png"
,Format:A._PIXEL_FORMAT_NATIVE,NoOfFrames:1,FrameSize:[17,37],FrameDelay:0,_this:
null}};C.AVv={Ad$:null,AX:null,AR:null,Background:null,H7:null,AD:null,IN:null,Dl:
null,Lh:null,A7p:null,A7R:0,Bk:function(aSize){A.acn.Menu.Bk.call(this,aSize);this.
IN.H(A.abP(this.IN.M,this.AD.OP));this.IN.H([].concat(this.IN.M.slice(0,3),aSize[
1]));},Ai:function(Ae){var B;A.acn.Menu.Ai.call(this,Ae);var Iy=((Ae&0x40)===0x40
);if(Iy&&(this.AD.Gp<0))this.AD.GO(0);},NZ:function(E){if(this.Lh===E)return;this.
Lh=E;this.AD.NZ(E);},BmG:function(E){var B;if(this.A7p===E)return;if(!!this.Ad$){
this.HN(this.Ad$);this.Ad$=null;}if(!!E){this.Ad$=(C.Fy.isPrototypeOf(B=A._NewObject(
E,0))?B:null);this.Ad$.A9T([this,this.Aks]);this.Ad$.A9U([this,this.Akt]);this.Ad$.
BmM(null);this.J(this.Ad$,0);this.AD.A90((B=this.Ad$.M)[3]-B[1]);}else this.AD.A90(
0);this.IN.H(A.abP(this.IN.M,this.AD.OP));A.pe([this,this.Fg],this);this.A7p=E;}
,Hg:function(G){var B;var Gd=this.AD.G1;var Aa=(C.Ba.isPrototypeOf(B=this.AD.Ci)?
B:null);if(!Aa)return;Aa.Zs(this.AX);Aa.Cf(Gd);Aa.Zu(this.AR);Aa.H(A.abK(Aa.M,[(
B=this.AD.M)[2]-B[0],this.AD.GK]));},Zs:function(E){var B;if(this.AX===E)return;
if(!!this.AX){A.z9([this,this.Cf],this.AX,0);A.z$([this,this.An7],[B=this.AX,B.Fk
,B.Fo],0);}this.AX=E;if(!!E){A.zV([this,this.Cf],E,0);A.zX([this,this.An7],[E,E.
Fk,E.Fo],0);}A.pe([this,this.Cf],this);A.pe([this,this.An7],this);},Cf:function(
G){if(!!this.AX){this.AD.Ju(this.AX.Ca());this.AD.AbF(0,this.AD.AY-1);}else this.
AD.Ju(0);if(this.A7R!==this.AD.AY){this.AD.ABA(null,null);this.A7R=this.AD.AY;}A.
pe([this,this.Fg],this);},Akt:function(G){var B;this.H(A.abI(this.M,(B=this.AD.AOQ(
))[3]-B[1]));},Aks:function(G){this.H(A.abI(this.M,180));},A8$:function(G){var Jy=(
A.Core.BM.isPrototypeOf(G)?G:null);var Gd=this.AD.Gp;if(Jy.CO===4)Gd=Gd-1;else if(
Jy.CO===5)Gd=Gd+1;else if((Jy.DQ>=0x30)&&(Jy.DQ<=0x39))A._GetAutoObject(A.aco.AgF
).Ez(Jy.DQ);else if(Jy.CO===45)A._GetAutoObject(A.aco.AgF).Delete();else Jy.NH=true;
if((Gd<0)||(Gd>=this.AD.AY))return;this.AD.GO(Gd);this.ByE(Gd,true);},Byt:function(
G){var Aa=(C.Ba.isPrototypeOf(G)?G:null);this.AD.GO(Aa.Hn);},ByE:function(G6,AcY
){var B;if((G6<0)||(G6>=this.AD.AY))return;var Az=this.AD.AqU(G6,G6);var Bd=this.
AD.M;Bd=A.abP(Bd,(B=this.AD.AOQ())[3]-B[1]);Bd=A.abI(Bd,(((B=this.AD.M)[3]-B[1])-((
B=this.AD.AOQ())[3]-B[1]))-((B=this.AD.BiE())[3]-B[1]));var LM=A.lb(Az,Bd);if((!
AcY&&!((LM[0]>=LM[2])||(LM[1]>=LM[3])))||(AcY&&A.aaY(LM,Az)))return;var Bq=0;if(
Az[3]>Bd[3])Bq=Az[3]-Bd[3];if(Bq>(Az[1]-Bd[1]))Bq=(Az[3]-Bd[1])-this.AD.GK;this.
AD.F$(this.AD.Br-Bq);},An7:function(G){this.AD.GO(-1);},Fg:function(G){var B;this.
IN.Mu(this.AD.GK*this.AD.AY);this.IN.Mw(((B=this.AD.M)[3]-B[1])-this.AD.OP);this.
IN.Mv(-this.AD.Br);},_Init:function(aArg){A.acn.Menu._Init.call(this,aArg);A.acg.
AK._Init.call(this.Background={I:this},0);A.Core.H7._Init.call(this.H7={I:this},
0);A.Core.CM._Init.call(this.AD={I:this},0);A.kR.Ay._Init.call(this.IN={I:this},
0);A.Core.BM._Init.call(this.Dl={I:this},0);this.__proto__=C.AVv;this.H(Cd);this.
Background.AZ(0x3);this.Background.H(Cd);this.H7.AZ(0x3F);this.H7.H(Cd);this.AD.
AZ(0x3F);this.AD.H(Cd);this.AD.Ae3(60);this.AD.Ju(0);this.AD.NZ(this.Lh);this.IN.
AZ(0x3A);this.IN.H(BF);this.IN.L(0xFF808080);this.J(this.Background,0);this.J(this.
H7,0);this.J(this.AD,0);this.J(this.IN,0);this.AD.El=[this,this.Fg];this.AD.Hg=[
this,this.Hg];this.AD.AwZ(this.H7);this.AR=[this,this.Byt];this.Dl.BN=[this,this.
A8$];this.Dl.D1=[this,this.A8$];},_Done:function(){this.__proto__=A.acn.Menu;this.
Background._Done();this.H7._Done();this.AD._Done();this.IN._Done();this.Dl._Done(
);A.acn.Menu._Done.call(this);},_ReInit:function(){A.acn.Menu._ReInit.call(this);
this.Background._ReInit();this.H7._ReInit();this.AD._ReInit();this.IN._ReInit();
this.Dl._ReInit();},_Mark:function(D){var B;A.acn.Menu._Mark.call(this,D);if((B=
this.Ad$)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.AX)&&(B._cycle!=D))B._Mark(
B._cycle=D);if((B=this.AR)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.
Background)._cycle!=D)B._Mark(B._cycle=D);if((B=this.H7)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.AD)._cycle!=D)B._Mark(B._cycle=D);if((B=this.IN)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Dl)._cycle!=D)B._Mark(B._cycle=D);},_className:"Demonstrator::VerticalMenu"
};C.AUr={GG:null,AK:null,BU:null,Init:function(aArg){var B;A.zX([this,this.GE],[
B=A._GetAutoObject(A.aco.Hq),B.A8O,B.A9_],0);A.pe([this,this.GE],this);},Ab3:function(
E){if(this.GG===E)return;if(!!this.GG)this.HN(this.GG);this.GG=E;if(!!this.GG)this.
J(this.GG,0);this.Bb(E);this.Ahv(E,this.BU);this.An();},GE:function(G){var B;if(
!!A._GetAutoObject(A.aco.Hq).Asw)this.Ab3((C.AhB.isPrototypeOf(B=A._NewObject(A.
_GetAutoObject(A.aco.Hq).Asw,0))?B:null));else this.Ab3(null);},_Init:function(aArg
){A.Core.P._Init.call(this,aArg);A.acg.AK._Init.call(this.AK={I:this},0);A.acg.BU.
_Init.call(this.BU={I:this},0);this.__proto__=C.AUr;this.H(E4);this.AK.AZ(0x3F);
this.AK.H(E4);this.BU.H(E4);this.BU.L(0xFF000000);this.J(this.AK,0);this.J(this.
BU,0);this.Init(aArg);},_Done:function(){this.__proto__=A.Core.P;this.AK._Done();
this.BU._Done();A.Core.P._Done.call(this);},_ReInit:function(){A.Core.P._ReInit.
call(this);this.AK._ReInit();this.BU._ReInit();},_Mark:function(D){var B;A.Core.
P._Mark.call(this,D);if((B=this.GG)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.
AK)._cycle!=D)B._Mark(B._cycle=D);if((B=this.BU)._cycle!=D)B._Mark(B._cycle=D);}
,_className:"Demonstrator::SelectionArea"};C.AMs={ABg:0,J$:0,Background:null,V:null
,Ajm:null,AdS:null,XQ:null,AdT:null,Mf:null,Md:0,LF:false,KD:false,CP:function(){
this.An();},Ai:function(Ae){var B;C.Ba.Ai.call(this,Ae);var G$=((Ae&0x10)===0x10
);var Fr=((Ae&0x20)===0x20);var Iy=((Ae&0x40)===0x40);if(!G$){this.Background.L(
0xFFAAAAAA);this.V.L(0xFF888888);this.Mf.Ar(false);this.Mf.Z(false);}else if(Iy){
this.Background.L(A.jb.AV);this.V.L(A.jb.Bm);this.Mf.Ar(true);this.Mf.Z(true);}else
if(Fr){this.Background.L(0xFFE6DED8);this.V.L(0xFF000000);this.Mf.Ar(true);this.
Mf.Z(true);}else{this.Background.L(0xFFFFFFFF);this.V.L(0xFF000000);this.Mf.Ar(false
);this.Mf.Z(false);}if(!this.KD&&Fr)A._GetAutoObject(A.aco.Hq).A97(this.ABg);this.
Mf.BmI(this.J$>0);this.Mf.Bm$(this.ABg>0);this.V.R(this.Md.toFixed());this.LF=G$;
this.KD=Fr;},Cf:function(Ad){if(!this.AX){this.XQ.Aw(A.aaL(A.ach.Aeu));this.AdS.
L(A.jb.Afp);return;}this.Hn=Ad;if(!!this.AX){this.J$=this.AX.KM(Ad,26);this.ABg=
this.AX.KM(Ad,22);this.Md=this.AX.CE(Ad,1);var AlM=this.AX.H1(Ad,11);var AlD=this.
AX.I2(Ad,17);var LP=this.AX.I2(Ad,13);var H$=this.AX.AmR(Ad,14);var Xn=A._GetAutoObject(
A.Device.Helper).AMh(LP,AlM,AlD);switch(H$){case 0:this.XQ.Aw(A.aaL(A.ach.Aeu));
break;case 1:this.XQ.Aw(A.aaL(A.ach.Avz));break;case 2:this.XQ.Aw(A.aaL(A.ach.AvC
));break;default:A.ab5("%s%e",Hm,H$);}this.AdT.Aw(this.XQ.Al);this.AdS.L(A._GetAutoObject(
A.acj.Assessment).Qk(Xn));this.An();}},_Init:function(aArg){C.Ba._Init.call(this
,aArg);A.acg.AK._Init.call(this.Background={I:this},0);A.kR.CH._Init.call(this.V={
I:this},0);A.acg.Ap._Init.call(this.Ajm={I:this},0);A.acg.Ap._Init.call(this.AdS={
I:this},0);A.acg.Ap._Init.call(this.XQ={I:this},0);A.acg.Ap._Init.call(this.AdT={
I:this},0);C.Mf._Init.call(this.Mf={I:this},0);this.__proto__=C.AMs;this.Background.
AZ(0x3F);this.Background.H(Cd);this.V.AZ(0x3F);this.V.H(IQ);this.V.R(A.aaR(A.acf.
GJ));this.V.A6(0x11);this.V.L(0xFF000000);this.Ajm.H(Ip);this.Ajm.L(A.jb.Text);this.
AdS.H(Ip);this.AdS.L(A.jb.E1);this.XQ.H(Ip);this.AdT.H(Ip);this.AdT.L(A.jb.Text);
this.AdT.Cv(1);this.Mf.AZ(0x3);this.Mf.H(O1);this.J(this.Background,0);this.J(this.
V,0);this.J(this.Ajm,0);this.J(this.AdS,0);this.J(this.XQ,0);this.J(this.AdT,0);
this.J(this.Mf,0);this.V.S(A.aaL(A.fl.Af));this.V.A2(A.aaL(A.fl.Ak));this.V.Cu(A.
aaL(A.fl.Bi));this.Ajm.Aw(A.aaL(C.AHg));this.AdS.Aw(A.aaL(C.AVM));this.XQ.Aw(A.aaL(
A.ach.Aeu));this.AdT.Aw(A.aaL(A.ach.Aeu));},_Done:function(){this.__proto__=C.Ba;
this.Background._Done();this.V._Done();this.Ajm._Done();this.AdS._Done();this.XQ.
_Done();this.AdT._Done();this.Mf._Done();C.Ba._Done.call(this);},_ReInit:function(
){C.Ba._ReInit.call(this);this.Background._ReInit();this.V._ReInit();this.Ajm._ReInit(
);this.AdS._ReInit();this.XQ._ReInit();this.AdT._ReInit();this.Mf._ReInit();this.
V.R(A.aaR(A.acf.GJ));this.V.S(A.aaL(A.fl.Af));this.V.A2(A.aaL(A.fl.Ak));this.V.Cu(
A.aaL(A.fl.Bi));this.CP();},_Mark:function(D){var B;C.Ba._Mark.call(this,D);if((
B=this.Background)._cycle!=D)B._Mark(B._cycle=D);if((B=this.V)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Ajm)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AdS)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.XQ)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
AdT)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Mf)._cycle!=D)B._Mark(B._cycle=D);
},_className:"Demonstrator::AnimalMenuItem"};C.Mf={Uv:null,WH:null,AkY:null,Ni:null
,N7:null,ZH:null,Acx:null,AvX:false,AxJ:false,CP:function(){this.An();},Ai:function(
Ae){var B;A.Core.P.Ai.call(this,Ae);var Iy=((Ae&0x40)===0x40);if(Iy){this.Ni.L(A.
jb.Bm);this.N7.L(A.jb.Bm);}else{this.Ni.L(A.jb.Text);this.N7.L(A.jb.Text);}if(this.
AxJ){this.Ni.R(A.aaR(A.acf.Bn9));if(this.AvX){this.Uv.Aw(A.aaL(C.AxK));this.WH.Aw(
A.aaL(C.AxK));}else{this.Uv.Aw(A.aaL(C.Ast));this.WH.Aw(A.aaL(C.Ast));}}else if(
this.AvX){this.Uv.Aw(A.aaL(C.ACw));this.WH.Aw(A.aaL(C.ACw));this.Ni.R(P2);}var A3O=
this.AxJ||this.AvX;this.Uv.Z(A3O);this.WH.Z(A3O);this.Ni.Z(A3O);this.ZH.Ar(this.
AxJ);},Bm$:function(E){if(this.AxJ===E)return;this.AxJ=E;this.An();},BmI:function(
E){if(this.AvX===E)return;this.AvX=E;this.An();},_Init:function(aArg){A.Core.P._Init.
call(this,aArg);A.acg.Ap._Init.call(this.Uv={I:this},0);A.acg.Ap._Init.call(this.
WH={I:this},0);A.acg.Ap._Init.call(this.AkY={I:this},0);A.kR.CH._Init.call(this.
Ni={I:this},0);A.kR.CH._Init.call(this.N7={I:this},0);A.Core.Bn._Init.call(this.
ZH={I:this},0);A.Core.Bn._Init.call(this.Acx={I:this},0);this.__proto__=C.Mf;var
B;this.H(P3);this.Uv.AZ(0x6);this.Uv.H(CQ);this.Uv.L(A.jb.CS);this.Uv.Cv(1);this.
WH.AZ(0x6);this.WH.H(CQ);this.WH.L(A.jb.Text);this.AkY.AZ(0xE);this.AkY.H(Fb);this.
Ni.AZ(0x7);this.Ni.H(Lt);this.Ni.A6(0x11);this.Ni.L(0xFF000000);this.N7.AZ(0x3);
this.N7.H(P4);this.N7.R(A.aaR(A.acf.Temperature));this.N7.A6(0x11);this.N7.L(0xFF000000
);this.ZH.AZ(0x3);this.ZH.JQ(JY);this.ZH.Kr(N_);this.ZH.DC(P5);this.ZH.DM(ME);this.
Acx.AZ(0x3);this.Acx.JQ(S5);this.Acx.Kr(UP);this.Acx.DC(Z4);this.Acx.DM(W2);this.
J(this.Uv,0);this.J(this.WH,0);this.J(this.AkY,0);this.J(this.Ni,0);this.J(this.
N7,0);this.J(this.ZH,0);this.J(this.Acx,0);this.Uv.Aw(A.aaL(C.Ast));this.WH.Aw(A.
aaL(C.Ast));this.AkY.Aw(A.aaL(C.AUZ));this.Ni.S(A.aaL(A.fl.Af));this.Ni.A2(A.aaL(
A.fl.Ak));this.Ni.Cu(A.aaL(A.fl.Bi));this.N7.S(A.aaL(A.fl.Af));this.N7.A2(A.aaL(
A.fl.Ak));this.N7.Cu(A.aaL(A.fl.Bi));this.ZH.Ll=[B=A._GetAutoObject(A.aco.Hq),B.
BeH];this.Acx.Ll=[B=A._GetAutoObject(A.aco.Hq),B.Bes];},_Done:function(){this.__proto__=
A.Core.P;this.Uv._Done();this.WH._Done();this.AkY._Done();this.Ni._Done();this.N7.
_Done();this.ZH._Done();this.Acx._Done();A.Core.P._Done.call(this);},_ReInit:function(
){A.Core.P._ReInit.call(this);this.Uv._ReInit();this.WH._ReInit();this.AkY._ReInit(
);this.Ni._ReInit();this.N7._ReInit();this.ZH._ReInit();this.Acx._ReInit();this.
N7.R(A.aaR(A.acf.Temperature));this.Ni.S(A.aaL(A.fl.Af));this.Ni.A2(A.aaL(A.fl.Ak
));this.Ni.Cu(A.aaL(A.fl.Bi));this.N7.S(A.aaL(A.fl.Af));this.N7.A2(A.aaL(A.fl.Ak
));this.N7.Cu(A.aaL(A.fl.Bi));this.CP();},_Mark:function(D){var B;A.Core.P._Mark.
call(this,D);if((B=this.Uv)._cycle!=D)B._Mark(B._cycle=D);if((B=this.WH)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.AkY)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ni
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.N7)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.ZH)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Acx)._cycle!=D)B._Mark(B._cycle=
D);},_className:"Demonstrator::AnimalItemAction"};C.Yq={CP:function(){this.An();
},Ai:function(Ae){C.Ard.Ai.call(this,Ae);if(!this.Text.String.length)this.Text.R(
A.aaR(A.acf.Filter));},A7Y:function(G){var D5=(A.Core.BM.isPrototypeOf(G)?G:null
);if(!!D5)A._GetAutoObject(A.aco.AgF).Ez(D5.DQ);},A7W:function(G){A._GetAutoObject(
A.aco.AgF).Delete();},_Init:function(aArg){C.Ard._Init.call(this,aArg);this.__proto__=
C.Yq;this.Ap.Aw(A.aaL(C.Filter));},_ReInit:function(){C.Ard._ReInit.call(this);this.
CP();},_className:"Demonstrator::FilterView"};C.Abd={Dj:null,Yj:null,R$:null,Yk:
null,DT:null,YD:null,AmD:null,Au:null,O9:null,M2:null,Abc:null,FV:0,AvJ:0,AF5:false
,Ai:function(Ae){A.Core.P.Ai.call(this,Ae);this.R$.R(this.Au.Format(Iq));if(this.
AF5){this.R$.Z(false);this.YD.Z(false);this.DT.Z(false);this.Yk.Z(false);this.O9.
Ar(true);this.O9.Z(true);this.M2.Cv(2);this.M2.ATg(2);this.M2.H(A.abM(this.M2.M,
this.O9.M[2]));}else{this.R$.Z(true);this.YD.Z(true);this.DT.Z(true);this.Yk.Z(true
);this.O9.Ar(false);this.O9.Z(false);this.M2.Cv(3);this.M2.ATg(3);this.M2.H(A.abM(
this.M2.M,this.R$.M[2]));}},BAi:function(G){this.BmP(!this.AF5);},Adu:function(G
){var F;if(!!this.Dj)this.Ui((F=this.Dj,F[1].call(F[0])));},Ab7:function(E){if(A.
aaZ(this.Dj,E))return;if(!!this.Dj)A.z$([this,this.Adu],this.Dj,0);this.Dj=E;if(
!!E)A.zX([this,this.Adu],E,0);if(!!E)A.pe([this,this.Adu],this);},Ui:function(E){
if(this.FV===E)return;this.FV=E;this.Au.Initialize(this.FV);this.BBm(this);this.
An();},AiD:function(G){var B;var F;var BQ=this.FV;var Ai$=this.Abc.C4(this.AvJ);
this.AJj(Ai$);if(this.Au.Year>2100)this.Au.Initialize2(2100,12,31,0,0,0);this.Ui(((
B=(this.Au.JN()|0))<0)?B+0x100000000:B);if(this.FV!==BQ){if(!!this.Dj)(F=this.Dj
,F[2].call(F[0],this.FV));A.abo(this.Dj,0);}},Aio:function(G){var B;var F;var BQ=
this.FV;var Ai$=this.Abc.C4(this.AvJ);this.AK_(Ai$);if(this.Au.Year<2000)this.Au.
Initialize2(2000,1,1,0,0,0);this.Ui(((B=(this.Au.JN()|0))<0)?B+0x100000000:B);if(
this.FV!==BQ){if(!!this.Dj)(F=this.Dj,F[2].call(F[0],this.FV));A.abo(this.Dj,0);
}},Bml:function(E){if(this.AvJ===E)return;this.AvJ=E;},BmP:function(E){if(this.AF5===
E)return;this.AF5=E;this.An();},BAS:function(G){var B;var F;var BQ=this.FV;this.
Au.Ln(this.O9.AEt());this.Au.Um(this.O9.AEy());this.Au.Year=this.O9.ArC();this.Ui(((
B=(this.Au.JN()|0))<0)?B+0x100000000:B);if(this.FV!==BQ){if(!!this.Dj)(F=this.Dj
,F[2].call(F[0],this.FV));A.abo(this.Dj,0);}},BBm:function(G){this.O9.Ln(this.Au.
GH);this.O9.Um(this.Au.He);this.O9.AkG(this.Au.Year);},AJj:function(AyV){var B;switch(
AyV){case 0:if(this.Au.GH<this.Au.Zo())this.Au.Ln(this.Au.GH+1);else{this.Au.Ln(
1);this.AJj(2);}break;case 1:if((this.Au.GH+7)<=this.Au.Zo())this.Au.Ln(this.Au.
GH+7);else{this.Au.Ln((7-this.Au.Zo())+this.Au.GH);this.AJj(2);}break;case 2:if(
this.Au.He<12)this.Au.Um(this.Au.He+1);else{this.Au.Um(1);this.AJj(3);}break;case
3:this.Au.Year++;break;default:throw new Error(UQ+AyV.toFixed());}},AK_:function(
AyV){var B;switch(AyV){case 0:if(this.Au.GH>1)this.Au.Ln(this.Au.GH-1);else{this.
AK_(2);this.Au.Ln(this.Au.Zo());}break;case 1:if((this.Au.GH-7)>0)this.Au.Ln(this.
Au.GH-7);else{this.AK_(2);this.Au.Ln(this.Au.Zo()-(7-this.Au.GH));}break;case 2:
if(this.Au.He>1)this.Au.Um(this.Au.He-1);else{this.Au.Um(12);this.AK_(3);}break;
case 3:this.Au.Year--;break;default:throw new Error(UQ+AyV.toFixed());}},Bku:function(
){return this.AvJ;},_Init:function(aArg){A.Core.P._Init.call(this,aArg);A.acg.Text.
_Init.call(this.Yj={I:this},0);A.acg.Text._Init.call(this.R$={I:this},0);C.Avx._Init.
call(this.Yk={I:this},0);A.acq.DT._Init.call(this.DT={I:this},0);C.Avx._Init.call(
this.YD={I:this},0);A.acg.Ap._Init.call(this.AmD={I:this},0);A.Core.Bs._Init.call(
this.Au={I:this},0);C.ANG._Init.call(this.O9={I:this},0);C.Avx._Init.call(this.M2={
I:this},0);C.Abc._Init.call(this.Abc={I:this},0);this.__proto__=C.Abd;this.H(Z5);
this.Yj.H(W3);this.Yj.A6(0x11);this.Yj.R(A.aaR(A.acf.Date));this.Yj.L(0xFF000000
);this.R$.H(Z6);this.R$.A6(0x11);this.R$.R(W4);this.R$.L(0xFF000000);this.Yk.H(Z7
);this.Yk.A9K(200);this.DT.H(Z8);this.DT.ArW(120);this.DT.GK=30;this.DT.ASU(A.jb.
CS);this.DT.A9n(A.jb.CS);this.DT.A9r(A.jb.CS);this.DT.ASV(A.jb.Text);this.DT.A9s(
A.jb.Text);this.DT.A9o(A.jb.AV);this.DT.A9t(A.jb.Bm);this.DT.A9q(A.jb.AV);this.DT.
A9p(A.jb.Text);this.YD.H(UR);this.YD.A9K(200);this.AmD.H(W5);this.O9.H(P6);this.
M2.H(Z9);this.M2.Cv(3);this.M2.ATg(3);this.M2.L(A.jb.Text);this.J(this.Yj,0);this.
J(this.R$,0);this.J(this.Yk,0);this.J(this.DT,0);this.J(this.YD,0);this.J(this.AmD
,0);this.J(this.O9,0);this.J(this.M2,0);this.Yj.S(A.aaL(A.fl.Ak));this.R$.S(A.aaL(
A.fl.EL));this.Yk.AR=[this,this.Aio];this.Yk.DB(A.aaL(C.AM2));this.Yk.ATh(A.aaL(
C.AM3));this.DT.As([this,this.Bku,this.Bml]);this.DT.A9z(this.Abc);this.DT.ArO(A.
aaL(A.fl.Ak));this.DT.AwD(A.aaL(A.fl.Ak));this.YD.AR=[this,this.AiD];this.YD.DB(
A.aaL(C.AM4));this.YD.ATh(A.aaL(C.AM5));this.AmD.Aw(A.aaL(C.AP6));this.O9.Di=[this
,this.BAS];this.M2.AR=[this,this.BAi];this.M2.DB(A.aaL(A.ach.Ajr));this.M2.ATh(A.
aaL(A.ach.Ajr));},_Done:function(){this.__proto__=A.Core.P;this.Yj._Done();this.
R$._Done();this.Yk._Done();this.DT._Done();this.YD._Done();this.AmD._Done();this.
Au._Done();this.O9._Done();this.M2._Done();this.Abc._Done();A.Core.P._Done.call(
this);},_ReInit:function(){A.Core.P._ReInit.call(this);this.Yj._ReInit();this.R$.
_ReInit();this.Yk._ReInit();this.DT._ReInit();this.YD._ReInit();this.AmD._ReInit(
);this.Au._ReInit();this.O9._ReInit();this.M2._ReInit();this.Abc._ReInit();this.
Yj.R(A.aaR(A.acf.Date));this.Yj.S(A.aaL(A.fl.Ak));this.R$.S(A.aaL(A.fl.EL));this.
DT.ArO(A.aaL(A.fl.Ak));this.DT.AwD(A.aaL(A.fl.Ak));},_Mark:function(D){var B;A.Core.
P._Mark.call(this,D);if((B=this.Dj)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((
B=this.Yj)._cycle!=D)B._Mark(B._cycle=D);if((B=this.R$)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Yk)._cycle!=D)B._Mark(B._cycle=D);if((B=this.DT)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.YD)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AmD)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.Au)._cycle!=D)B._Mark(B._cycle=D);if((B=this.O9
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.M2)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Abc)._cycle!=D)B._Mark(B._cycle=D);},_className:"Demonstrator::DateSelector"
};C.Avx={C8:null,Axi:null,ANW:null,AR:null,Bo:null,Dl:null,CR:null,Hs:null,Yx:null
,APJ:0,TO:0,ATX:0,AQ:0xFFFFFFFF,A15:false,LF:false,KD:false,Qo:false,Ai:function(
Ae){var B;A.acn.Ahr.Ai.call(this,Ae);var G$=((Ae&0x10)===0x10);var Fr=((Ae&0x20)===
0x20);var GA=this.CR.Down&&this.CR.YG;if(!G$)this.Hs.Aw(this.ANW);else if(GA){this.
Hs.Aw(this.Axi);this.Hs.Cv(this.ATX);}else{this.Hs.Aw(this.C8);this.Hs.Cv(this.TO
);}this.Hs.L(this.AQ);this.LF=G$;this.KD=Fr;this.Qo=GA;},Qn:function(G){this.An(
);A.pe(this.AR,this);},AiO:function(G){if(this.CR.Down)return;if(this.Dl.Ach)return;
this.An();if(this.Bo.Bw){A.pe(this.AR,this);this.Bo.Ar(false);}this.Bo.Ar(true);
},Bep:function(G){this.An();},AAy:function(G){if(!this.CR.YG)return;if(this.CR.NF
)return;if((this.Yx.VC<=0)||(this.CR.Jp<this.Yx.VC)){if(this.CR.Jp>=this.Bo.VC)A.
pe(this.AR,this);else this.Bo.Ar(true);}this.Yx.Ar(false);},AAx:function(G){this.
Yx.Ar(true);if(this.Bo.Bw){A.pe(this.AR,this);this.Bo.Ar(false);}},DB:function(E
){if(this.C8===E)return;this.C8=E;this.An();},ATh:function(E){if(this.Axi===E)return;
this.Axi=E;this.An();},A22:function(G){if(!this.CR.YG)return;if(this.CR.NF)return;
if((this.APJ>=0)&&this.A15){this.A15=false;this.Yx.Ar(true);A.pe(this.AR,this);}
},A9K:function(E){if(this.APJ===E)return;this.APJ=E;this.Yx.Wy(E);},BzO:function(
G){this.A15=true;},Cv:function(E){if(this.TO===E)return;this.TO=E;this.An();},ATg:
function(E){if(this.ATX===E)return;this.ATX=E;this.An();},L:function(E){if(this.
AQ===E)return;this.AQ=E;this.An();},_Init:function(aArg){A.acn.Ahr._Init.call(this
,aArg);A.Core.Timer._Init.call(this.Bo={I:this},0);A.Core.BM._Init.call(this.Dl={
I:this},0);A.Core.Bn._Init.call(this.CR={I:this},0);A.acg.Ap._Init.call(this.Hs={
I:this},0);A.Core.Timer._Init.call(this.Yx={I:this},0);this.__proto__=C.Avx;this.
H(O2);this.Bo.PO(0);this.Bo.Wy(50);this.Dl.Filter=149;this.CR.AZ(0x3F);this.CR.JQ(
Ri);this.CR.Kr(W6);this.CR.DC(W7);this.CR.DM(JY);this.CR.Afb=0xF;this.CR.AFn(100
);this.Hs.AZ(0x3F);this.Hs.H(O2);this.Hs.A6(0x12);this.Yx.PO(0);this.J(this.CR,0
);this.J(this.Hs,0);this.Bo.Mx=[this,this.Qn];this.Dl.BN=[this,this.AiO];this.CR.
AEE=[this,this.Bep];this.CR.Av2=[this,this.Bep];this.CR.D1=[this,this.A22];this.
CR.Ll=[this,this.AAy];this.CR.BN=[this,this.AAx];this.Hs.Aw(A.aaL(A.aci.TJ));this.
C8=A.aaL(A.aci.TJ);this.Axi=A.aaL(A.aci.TJ);this.ANW=A.aaL(A.aci.TJ);this.Yx.Mx=[
this,this.BzO];},_Done:function(){this.__proto__=A.acn.Ahr;this.Bo._Done();this.
Dl._Done();this.CR._Done();this.Hs._Done();this.Yx._Done();A.acn.Ahr._Done.call(
this);},_ReInit:function(){A.acn.Ahr._ReInit.call(this);this.Bo._ReInit();this.Dl.
_ReInit();this.CR._ReInit();this.Hs._ReInit();this.Yx._ReInit();},_Mark:function(
D){var B;A.acn.Ahr._Mark.call(this,D);if((B=this.C8)&&(B._cycle!=D))B._Mark(B._cycle=
D);if((B=this.Axi)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.ANW)&&(B._cycle
!=D))B._Mark(B._cycle=D);if((B=this.AR)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D
);if((B=this.Bo)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Dl)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.CR)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Hs)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.Yx)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Demonstrator::IconButton"};C.AMG={Pu:null,V:null,Aen:null,_Init:function(aArg){
C.Fy._Init.call(this,aArg);A.acg.AK._Init.call(this.Pu={I:this},0);A.acg.Text._Init.
call(this.V={I:this},0);C.Aen._Init.call(this.Aen={I:this},0);this.__proto__=C.AMG;
this.H(W8);this.Pu.AZ(0x1D);this.Pu.H(Cd);this.Pu.L(0xFFE6E6E6);this.V.AZ(0x1D);
this.V.H(W9);this.V.A6(0x11);this.V.R(A.aaR(A.acf.A4O));this.V.L(0xFF000000);this.
Aen.H(Z_);this.J(this.Pu,0);this.J(this.V,0);this.J(this.Aen,0);this.V.S(A.aaL(A.
fl.Af));},_Done:function(){this.__proto__=C.Fy;this.Pu._Done();this.V._Done();this.
Aen._Done();C.Fy._Done.call(this);},_ReInit:function(){C.Fy._ReInit.call(this);this.
Pu._ReInit();this.V._ReInit();this.Aen._ReInit();this.V.R(A.aaR(A.acf.A4O));this.
V.S(A.aaL(A.fl.Af));},_Mark:function(D){var B;C.Fy._Mark.call(this,D);if((B=this.
Pu)._cycle!=D)B._Mark(B._cycle=D);if((B=this.V)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Aen)._cycle!=D)B._Mark(B._cycle=D);},_className:"Demonstrator::AnimalsHeader"
};C.Auv={Pu:null,V:null,AeN:null,AeL:null,Bn:null,DK:W_,Ahe:false,Ai:function(Ae
){C.Fy.Ai.call(this,Ae);if(this.Ahe){this.AeL.Z(true);this.AeN.Z(false);}else{this.
AeL.Z(false);this.AeN.Z(true);}},BAE:function(G){if(this.Ahe)A.pe(this.Aks,this);
else A.pe(this.Akt,this);this.ArX(!this.Ahe);},T:function(E){if(this.DK===E)return;
this.DK=E;this.V.R(E);},ArX:function(E){if(this.Ahe===E)return;this.Ahe=E;this.An(
);},_Init:function(aArg){C.Fy._Init.call(this,aArg);A.acg.AK._Init.call(this.Pu={
I:this},0);A.acg.Text._Init.call(this.V={I:this},0);A.acg.Ap._Init.call(this.AeN={
I:this},0);A.acg.Ap._Init.call(this.AeL={I:this},0);A.Core.Bn._Init.call(this.Bn={
I:this},0);this.__proto__=C.Auv;this.H(Cd);this.Pu.AZ(0x1D);this.Pu.H(Cd);this.Pu.
L(0xFFE6E6E6);this.V.AZ(0x1D);this.V.H(W$);this.V.A6(0x11);this.V.R(W_);this.V.L(
0xFF000000);this.AeN.H(S6);this.AeN.Z(false);this.AeL.AZ(0x3A);this.AeL.H(S6);this.
Bn.JQ(JY);this.Bn.Kr(US);this.Bn.DC(UT);this.Bn.DM(ME);this.J(this.Pu,0);this.J(
this.V,0);this.J(this.AeN,0);this.J(this.AeL,0);this.J(this.Bn,0);this.V.S(A.aaL(
A.fl.Af));this.AeN.Aw(A.aaL(C.AMJ));this.AeL.Aw(A.aaL(C.Ajq));this.Bn.Ll=[this,this.
BAE];},_Done:function(){this.__proto__=C.Fy;this.Pu._Done();this.V._Done();this.
AeN._Done();this.AeL._Done();this.Bn._Done();C.Fy._Done.call(this);},_ReInit:function(
){C.Fy._ReInit.call(this);this.Pu._ReInit();this.V._ReInit();this.AeN._ReInit();
this.AeL._ReInit();this.Bn._ReInit();this.V.S(A.aaL(A.fl.Af));},_Mark:function(D
){var B;C.Fy._Mark.call(this,D);if((B=this.Pu)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.V)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AeN)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.AeL)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Bn)._cycle!=D)B._Mark(
B._cycle=D);},_className:"Demonstrator::AccordionHeader"};C.Ba={AX:null,AR:null,
CR:null,Hn:-1,Zs:function(E){if(this.AX===E)return;this.AX=E;},Cf:function(Ad){A.
ab5("%s",AcM);},Zu:function(E){if(A.aa0(this.AR,E))return;this.AR=E;},AAy:function(
G){if(!this.CR.YG)return;if(this.CR.NF)return;A.pe(this.AR,this);},_Init:function(
aArg){A.Core.P._Init.call(this,aArg);A.Core.Bn._Init.call(this.CR={I:this},0);this.
__proto__=C.Ba;this.H(Cd);this.CR.AZ(0x3F);this.CR.JQ(ME);this.CR.Kr(UT);this.CR.
DC(US);this.CR.DM(JY);this.CR.Afb=0xF;this.CR.AFn(100);this.J(this.CR,0);this.CR.
Ll=[this,this.AAy];},_Done:function(){this.__proto__=A.Core.P;this.CR._Done();A.
Core.P._Done.call(this);},_ReInit:function(){A.Core.P._ReInit.call(this);this.CR.
_ReInit();},_Mark:function(D){var B;A.Core.P._Mark.call(this,D);if((B=this.AX)&&(
B._cycle!=D))B._Mark(B._cycle=D);if((B=this.AR)&&((B=B[0])._cycle!=D))B._Mark(B.
_cycle=D);if((B=this.CR)._cycle!=D)B._Mark(B._cycle=D);},_className:"Demonstrator::ListItem"
};C.Fy={ASa:null,Akt:null,Aks:null,BmM:function(E){if(A.aa0(this.ASa,E))return;this.
ASa=E;},A9U:function(E){if(A.aa0(this.Akt,E))return;this.Akt=E;},A9T:function(E){
if(A.aa0(this.Aks,E))return;this.Aks=E;},_Init:function(aArg){A.Core.P._Init.call(
this,aArg);this.__proto__=C.Fy;this.H(Cd);},_Mark:function(D){var B;A.Core.P._Mark.
call(this,D);if((B=this.ASa)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.
Akt)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.Aks)&&((B=B[0])._cycle
!=D))B._Mark(B._cycle=D);},_className:"Demonstrator::ListHeader"};C.ANG={Di:null
,Aa4:null,WU:null,WT:null,WS:null,M$:null,M_:null,KP:null,LF:false,KD:false,BBw:
false,Ai:function(Ae){var B;A.acn.Ahp.Ai.call(this,Ae);var G$=((Ae&0x10)===0x10);
var Fr=((Ae&0x20)===0x20);var Bdp=(this.WS.ZM||this.WT.ZM)||this.WU.ZM;if(Bdp)this.
Aa4.L(A.jb.Text);else this.Aa4.L(A.jb.Bc);this.LF=G$;this.KD=Fr;this.BBw=Bdp;},AAt:
function(G){this.An();if((!this.WS.ZM&&!this.WT.ZM)&&!this.WU.ZM){var U_=this.AKd(
this.AEy(),this.ArC());var Ada=this.AEt();this.KP.Ju(U_);if(Ada>U_)this.Ln(U_);A.
pe(this.Di,this);}},A3l:function(G){this.An();},Bk_:function(G){var B;var Gd=this.
M$.G1;var Cz=(A.acg.Text.isPrototypeOf(B=this.M$.Ci)?B:null);if(!Cz)return;Cz.R(
A.abl(Gd+1900,4,10));Cz.S(A.aaL(A.fl.Af));Cz.L(A.jb.Text);Cz.A6(0x12);Cz.H(A.abK(
Cz.M,[(B=this.M$.M)[2]-B[0],this.M$.GK]));},Bk9:function(G){var B;var Gd=this.M_.
G1;var Cz=(A.acg.Text.isPrototypeOf(B=this.M_.Ci)?B:null);if(!Cz)return;Cz.R(A.abl(
Gd+1,2,10)+S7);Cz.S(A.aaL(A.fl.Af));Cz.L(A.jb.Text);Cz.A6(0x12);Cz.H(A.abK(Cz.M,[(
B=this.M_.M)[2]-B[0],this.M_.GK]));},Bk7:function(G){var B;var Gd=this.KP.G1;var
Cz=(A.acg.Text.isPrototypeOf(B=this.KP.Ci)?B:null);if(!Cz)return;Cz.R(A.abl(Gd+1
,2,10)+S7);Cz.S(A.aaL(A.fl.Af));Cz.L(A.jb.Text);Cz.A6(0x12);Cz.H(A.abK(Cz.M,[(B=
this.KP.M)[2]-B[0],this.KP.GK]));},ArC:function(){return 1900+((((-this.M$.Br/this.
M$.GK)|0)+2)%200);},AkG:function(E){if(E<1900)E=1900;if(E>2100)E=2100;this.M$.F$(((
E-1900)-2)*-this.M$.GK);var U_=this.AKd(this.AEy(),E);this.KP.Ju(U_);if(this.AEt(
)>U_)this.Ln(U_);},AEy:function(){return 1+((((-this.M_.Br/this.M_.GK)|0)+2)%12);
},Um:function(E){if(E<1)E=1;if(E>12)E=12;this.M_.F$(((E-1)-2)*-this.M_.GK);var U_=
this.AKd(E,this.ArC());this.KP.Ju(U_);if(this.AEt()>U_)this.Ln(U_);},AEt:function(
){return 1+((((-this.KP.Br/this.KP.GK)|0)+2)%this.KP.AY);},Ln:function(E){var U_=
this.AKd(this.AEy(),this.ArC());if(E<1)E=1;if(E>U_)E=U_;this.KP.F$(((E-2)-1)*-this.
KP.GK);},AKd:function(AfG,Ac2){if(AfG===2){if(!(Ac2%4)&&(!!(Ac2%100)||!(Ac2%400)
))return 29;else return 28;}else if((((AfG===4)||(AfG===6))||(AfG===9))||(AfG===
11))return 30;else return 31;},_Init:function(aArg){A.acn.Ahp._Init.call(this,aArg
);A.acg.BU._Init.call(this.Aa4={I:this},0);A.Core.H7._Init.call(this.WU={I:this}
,0);A.Core.H7._Init.call(this.WT={I:this},0);A.Core.H7._Init.call(this.WS={I:this
},0);A.Core.CM._Init.call(this.M$={I:this},0);A.Core.CM._Init.call(this.M_={I:this
},0);A.Core.CM._Init.call(this.KP={I:this},0);this.__proto__=C.ANG;this.H(Z$);this.
Aa4.H(Afw);this.Aa4.Nf(3);this.Aa4.L(0xFFE1E1E1);this.Aa4.Z(true);this.WU.H(Aaa);
this.WU.ATt(Xa);this.WU.AS1(0.2);this.WT.H(Aab);this.WT.ATt(Xa);this.WT.AS1(0.2);
this.WS.H(Aac);this.WS.ATt(Xa);this.WS.AS1(0.2);this.M$.H(Aaa);this.M$.ASZ(true);
this.M$.F$(60);this.M$.Ae3(30);this.M$.Ju(200);this.M_.H(Aab);this.M_.ASZ(true);
this.M_.F$(60);this.M_.Ae3(30);this.M_.Ju(12);this.KP.H(Aac);this.KP.ASZ(true);this.
KP.F$(60);this.KP.Ae3(30);this.KP.Ju(31);this.J(this.Aa4,0);this.J(this.WU,0);this.
J(this.WT,0);this.J(this.WS,0);this.J(this.M$,0);this.J(this.M_,0);this.J(this.KP
,0);this.WU.Zn=[this,this.AAt];this.WU.SE=[this,this.A3l];this.WT.Zn=[this,this.
AAt];this.WT.SE=[this,this.A3l];this.WS.Zn=[this,this.AAt];this.WS.SE=[this,this.
A3l];this.M$.Hg=[this,this.Bk_];this.M$.AwZ(this.WU);this.M_.Hg=[this,this.Bk9];
this.M_.AwZ(this.WT);this.KP.Hg=[this,this.Bk7];this.KP.AwZ(this.WS);},_Done:function(
){this.__proto__=A.acn.Ahp;this.Aa4._Done();this.WU._Done();this.WT._Done();this.
WS._Done();this.M$._Done();this.M_._Done();this.KP._Done();A.acn.Ahp._Done.call(
this);},_ReInit:function(){A.acn.Ahp._ReInit.call(this);this.Aa4._ReInit();this.
WU._ReInit();this.WT._ReInit();this.WS._ReInit();this.M$._ReInit();this.M_._ReInit(
);this.KP._ReInit();},_Mark:function(D){var B;A.acn.Ahp._Mark.call(this,D);if((B=
this.Di)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.Aa4)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.WU)._cycle!=D)B._Mark(B._cycle=D);if((B=this.WT)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.WS)._cycle!=D)B._Mark(B._cycle=D);if((B=this.M$
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.M_)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.KP)._cycle!=D)B._Mark(B._cycle=D);},_className:"Demonstrator::DatePicker"
};C.AHg={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/DemonstratorWhiteTile.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[40,40],FrameDelay:0,_this:
null}};C.AVM={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/DemonstratorWhiteTileSmall.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[40,40],FrameDelay:0,_this:
null}};C.AhB={_Init:function(aArg){A.Core.P._Init.call(this,aArg);this.__proto__=
C.AhB;this.H(E4);},_className:"Demonstrator::SelectionAreaContent"};C.AMz={Y:null
,Vs:null,Ty:null,BA7:function(G){var B;this.Ty.H(A.abI(this.Ty.M,((B=this.M)[3]-
B[1])-((B=this.Vs.M)[3]-B[1])));},_Init:function(aArg){C.AhB._Init.call(this,aArg
);A.Core.Y._Init.call(this.Y={I:this},0);C.AL3._Init.call(this.Vs={I:this},0);C.
AVv._Init.call(this.Ty={I:this},0);this.__proto__=C.AMz;this.Y.AZ(0x3F);this.Y.H(
E4);this.Y.JO(1);this.Vs.H(AhP);this.Vs.Aj(true);this.Vs.ArX(true);this.Ty.AZ(0x3
);this.Ty.H(JZ);this.Ty.Aj(true);this.Ty.NZ(C.AMs);this.Ty.BmG(C.AMG);this.J(this.
Y,0);this.J(this.Vs,0);this.J(this.Ty,0);this.Bb(this.Ty);this.Y.El=[this,this.BA7
];this.Ty.Zs(A._GetAutoObject(A.aco.Aqi));},_Done:function(){this.__proto__=C.AhB;
this.Y._Done();this.Vs._Done();this.Ty._Done();C.AhB._Done.call(this);},_ReInit:
function(){C.AhB._ReInit.call(this);this.Y._ReInit();this.Vs._ReInit();this.Ty._ReInit(
);},_Mark:function(D){var B;C.AhB._Mark.call(this,D);if((B=this.Y)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Vs)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ty)._cycle!=
D)B._Mark(B._cycle=D);},_className:"Demonstrator::AnimalSelectionActions"};C.Vs={
_Init:function(aArg){C.Auv._Init.call(this,aArg);this.__proto__=C.Vs;this.T(A.aaR(
A.acf.A5G));},_ReInit:function(){C.Auv._ReInit.call(this);this.T(A.aaR(A.acf.A5G
));},_className:"Demonstrator::ActionsHeader"};C.AL3={Background:null,XP:null,Y:
null,Acw:null,Acl:null,ZG:null,Acv:null,Akb:null,Akc:null,Akd:null,Ake:null,Akf:
null,Ahe:false,Init:function(aArg){var B;A.zX([this,this.BeI],[B=A._GetAutoObject(
A.aco.Hq),B.AEA,B.AFA],0);A.pe([this,this.BeI],this);},Akt:function(G){this.ArX(
true);},Aks:function(G){this.ArX(false);},ArX:function(E){if(this.Ahe===E)return;
this.Ahe=E;this.XP.ArX(E);A.pe([this,this.BeT],this);},BeI:function(G){var BBd=A.
_GetAutoObject(A.aco.Hq).Ahw===2;A._GetAutoObject(A.Device.Helper).JV(this.ZG,BBd
);},BeT:function(G){var B;if(this.Ahe)this.H(A.abI(this.M,(B=this.XP.M)[3]-B[1])
);else this.H(A.abI(this.M,((B=this.XP.M)[3]-B[1])+((B=this.Y.Db(0x401))[3]-B[1]
)));},_Init:function(aArg){A.Core.P._Init.call(this,aArg);A.acg.AK._Init.call(this.
Background={I:this},0);C.Vs._Init.call(this.XP={I:this},0);A.Core.Y._Init.call(this.
Y={I:this},0);C.Acw._Init.call(this.Acw={I:this},0);C.Acl._Init.call(this.Acl={I:
this},0);C.ZG._Init.call(this.ZG={I:this},0);C.Acv._Init.call(this.Acv={I:this},
0);A.acg.C5._Init.call(this.Akb={I:this},0);A.acg.C5._Init.call(this.Akc={I:this
},0);A.acg.C5._Init.call(this.Akd={I:this},0);A.acg.C5._Init.call(this.Ake={I:this
},0);A.acg.C5._Init.call(this.Akf={I:this},0);this.__proto__=C.AL3;this.H(Aad);this.
Background.AZ(0x3F);this.Background.H(Aad);this.XP.AZ(0x1D);this.XP.H(Cd);this.Y.
H(Lu);this.Y.JO(1);this.Acw.H(AhQ);this.Acw.Aj(true);this.Acl.H(Aoc);this.Acl.Aj(
true);this.ZG.H(N$);this.ZG.Aj(true);this.Acv.H(Xb);this.Acv.Aj(true);this.Akb.DC(
UT);this.Akb.DM(ME);this.Akb.L(A.jb.Bc);this.Akc.DC(Aod);this.Akc.DM(AhR);this.Akc.
L(A.jb.Bc);this.Akd.DC(AhS);this.Akd.DM(Rj);this.Akd.L(A.jb.Bc);this.Ake.DC(UU);
this.Ake.DM(Aoe);this.Ake.L(A.jb.Bc);this.Akf.DC(Aof);this.Akf.DM(Aog);this.Akf.
L(A.jb.Bc);this.J(this.Background,0);this.J(this.XP,0);this.J(this.Y,0);this.J(this.
Acw,0);this.J(this.Acl,0);this.J(this.ZG,0);this.J(this.Acv,0);this.J(this.Akb,0
);this.J(this.Akc,0);this.J(this.Akd,0);this.J(this.Ake,0);this.J(this.Akf,0);this.
XP.A9U([this,this.Akt]);this.XP.A9T([this,this.Aks]);this.Y.El=[this,this.BeT];this.
Init(aArg);},_Done:function(){this.__proto__=A.Core.P;this.Background._Done();this.
XP._Done();this.Y._Done();this.Acw._Done();this.Acl._Done();this.ZG._Done();this.
Acv._Done();this.Akb._Done();this.Akc._Done();this.Akd._Done();this.Ake._Done();
this.Akf._Done();A.Core.P._Done.call(this);},_ReInit:function(){A.Core.P._ReInit.
call(this);this.Background._ReInit();this.XP._ReInit();this.Y._ReInit();this.Acw.
_ReInit();this.Acl._ReInit();this.ZG._ReInit();this.Acv._ReInit();this.Akb._ReInit(
);this.Akc._ReInit();this.Akd._ReInit();this.Ake._ReInit();this.Akf._ReInit();},
_Mark:function(D){var B;A.Core.P._Mark.call(this,D);if((B=this.Background)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.XP)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
Y)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Acw)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Acl)._cycle!=D)B._Mark(B._cycle=D);if((B=this.ZG)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Acv)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Akb)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Akc)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Akd)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.Ake)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
Akf)._cycle!=D)B._Mark(B._cycle=D);},_className:"Demonstrator::ActionsMenu"};C.Jm={
YA:null,Ag2:null,Bn:null,C5:null,Af6:function(G){},A0l:function(s){this.Af6(s);}
,_Init:function(aArg){A.Core.P._Init.call(this,aArg);A.acg.Ap._Init.call(this.YA={
I:this},0);A.acg.Ap._Init.call(this.Ag2={I:this},0);A.Core.Bn._Init.call(this.Bn={
I:this},0);A.acg.C5._Init.call(this.C5={I:this},0);this.__proto__=C.Jm;this.H(Cd
);this.YA.H(Aoh);this.YA.L(A.jb.Text);this.Ag2.H(Afx);this.Ag2.L(A.jb.Text);this.
Ag2.Cv(0);this.Bn.JQ(JY);this.Bn.Kr(N_);this.Bn.DC(P5);this.Bn.DM(ME);this.C5.DC(
P5);this.C5.DM(N_);this.C5.L(A.jb.Bc);this.J(this.YA,0);this.J(this.Ag2,0);this.
J(this.Bn,0);this.J(this.C5,0);this.YA.Aw(A.aaL(A.aci.TJ));this.Ag2.Aw(A.aaL(A.aci.
ATN));this.Bn.BN=[this,this.A0l];},_Done:function(){this.__proto__=A.Core.P;this.
YA._Done();this.Ag2._Done();this.Bn._Done();this.C5._Done();A.Core.P._Done.call(
this);},_ReInit:function(){A.Core.P._ReInit.call(this);this.YA._ReInit();this.Ag2.
_ReInit();this.Bn._ReInit();this.C5._ReInit();},_Mark:function(D){var B;A.Core.P.
_Mark.call(this,D);if((B=this.YA)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ag2).
_cycle!=D)B._Mark(B._cycle=D);if((B=this.Bn)._cycle!=D)B._Mark(B._cycle=D);if((B=
this.C5)._cycle!=D)B._Mark(B._cycle=D);},_className:"Demonstrator::ActionsItem"};
C.Acl={AGr:null,DT:null,Yz:null,BU:null,M6:null,Ahx:null,ANA:0,Init:function(aArg
){var B;A.zX([this,this.BeS],[B=A._GetAutoObject(A.aco.Hq),B.AEA,B.AFA],0);A.pe([
this,this.BeS],this);},Af6:function(G){var Iw=A.ab0(this.Yz.String,0,10);var If=
false;switch(A._GetAutoObject(A.aco.Hq).Ahw){case 2:If=A._GetAutoObject(A.aco.Hq
).BBt(Iw);break;case 0:case 1:If=A._GetAutoObject(A.aco.Hq).BfR(Iw);break;default:
A.ab5("%s%e",Ala,A._GetAutoObject(A.aco.Hq).Ahw);}if(If){Iw=Iw+1;this.Yz.R(Iw.toFixed(
));}},BeS:function(G){var AJg=null;var AKu=0;switch(A._GetAutoObject(A.aco.Hq).Ahw
){case 2:{AJg=A.aaL(A.ach.Avu);AKu=276;}break;case 0:{AJg=A.aaL(A.ach.AjX);AKu=900;
}break;case 1:{AJg=A.aaL(C.AxK);AKu=276;}break;default:A.ab5("%s%e",Ala,A._GetAutoObject(
A.aco.Hq).Ahw);}this.Yz.R(((AKu*1000000000000)+(A.abY(this.Yz.String,0,10)%1000000000000
)).toFixed());this.YA.Aw(AJg);},Blx:function(E){var F;if(this.ANA===E)return;this.
ANA=E;if(!!this.AGr)(F=this.AGr,F[2].call(F[0],E));},Bkg:function(){return this.
ANA;},_Init:function(aArg){C.Jm._Init.call(this,aArg);A.acq.DT._Init.call(this.DT={
I:this},0);C.Ako._Init.call(this.Yz={I:this},0);A.acg.BU._Init.call(this.BU={I:this
},0);A.acg.Ap._Init.call(this.M6={I:this},0);C.Ahx._Init.call(this.Ahx={I:this},
0);this.__proto__=C.Acl;var B;this.DT.H(Aoi);this.DT.ArW(120);this.DT.GK=30;this.
DT.ASU(A.jb.Re);this.DT.A9n(A.jb.CS);this.DT.A9r(A.jb.CS);this.DT.ASV(A.jb.Re);this.
DT.A9s(A.jb.Text);this.DT.A9o(A.jb.AV);this.DT.A9t(A.jb.Bm);this.DT.A9q(A.jb.AV);
this.DT.A9p(A.jb.Re);this.Bn.JQ(AxX);this.Bn.DM(O3);this.Yz.H(Rk);this.Yz.R(AxY);
this.Yz.L(A.jb.Text);this.BU.H(UV);this.BU.Nf(2);this.BU.L(A.jb.Text);this.M6.H(
AsU);this.M6.L(A.jb.Text);this.M6.A6(0xC);this.M6.Cv(3);this.J(this.DT,-2);this.
J(this.Yz,-1);this.J(this.BU,0);this.J(this.M6,0);this.DT.As([this,this.Bkg,this.
Blx]);this.DT.A9z(this.Ahx);this.DT.ArO(A.aaL(A.fl.Bi));this.DT.AwD(A.aaL(A.fl.Bi
));this.M6.Aw(A.aaL(A.ach.Ajr));this.AGr=[B=A._GetAutoObject(A.aco.Hq),B.AEA,B.AFA
];this.Init(aArg);},_Done:function(){this.__proto__=C.Jm;this.DT._Done();this.Yz.
_Done();this.BU._Done();this.M6._Done();this.Ahx._Done();C.Jm._Done.call(this);}
,_ReInit:function(){C.Jm._ReInit.call(this);this.DT._ReInit();this.Yz._ReInit();
this.BU._ReInit();this.M6._ReInit();this.Ahx._ReInit();this.DT.ArO(A.aaL(A.fl.Bi
));this.DT.AwD(A.aaL(A.fl.Bi));},_Mark:function(D){var B;C.Jm._Mark.call(this,D);
if((B=this.AGr)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.DT)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.Yz)._cycle!=D)B._Mark(B._cycle=D);if((B=this.BU
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.M6)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Ahx)._cycle!=D)B._Mark(B._cycle=D);},_className:"Demonstrator::ScanIdAction"
};C.Acw={UG:null,OS:null,A36:0,Init:function(aArg){var B;A.zX([this,this.BAo],[B=
A._GetAutoObject(A.aco.Hq),B.ASB,B.ATm],0);A.zX([this,this.AAB],[B=A._GetAutoObject(
A.Device.Device),B.Arz,B.Atg],0);A.pe([this,this.AAB],this);},Ai:function(Ae){C.
Jm.Ai.call(this,Ae);this.OS.Z(!A._GetAutoObject(A.aco.Hq).Axj);},Af6:function(G){
var B;A._GetAutoObject(A.aco.Hq).Bes(this);},AAB:function(G){if(A._GetAutoObject(
A.Device.Device).TemperatureUnit!==this.A36){switch(A._GetAutoObject(A.Device.Device
).TemperatureUnit){case 0:this.OS.R(A.abk(A._GetAutoObject(A.aco.Hq).WQ/100,0,1)
);break;case 1:{var Auk=A._GetAutoObject(A.Device.Converter).AU3(A._GetAutoObject(
A.aco.Hq).WQ/100,0,A._GetAutoObject(A.Device.Device).TemperatureUnit);this.OS.R(
A.abk(Auk,0,1));}break;default:A.ab5("%s%e",AxZ,A._GetAutoObject(A.Device.Device
).TemperatureUnit);}this.A36=A._GetAutoObject(A.Device.Device).TemperatureUnit;}
},Bz9:function(G){var B;var Agj=A.abX(this.OS.String,0);Agj=A._GetAutoObject(A.Device.
Converter).AU3(Agj,A._GetAutoObject(A.Device.Device).TemperatureUnit,0);Agj*=100;
A._GetAutoObject(A.aco.Hq).AFH(Math.round(Agj)|0);},BAo:function(G){this.An();},
_Init:function(aArg){C.Jm._Init.call(this,aArg);A.acr.UG._Init.call(this.UG={I:this
},0);C.OS._Init.call(this.OS={I:this},0);this.__proto__=C.Acw;var B;this.UG.H(Ax0
);this.UG.A9O(A.aaR(A.acf.A4V));this.OS.H(Ax1);this.OS.R(Aoj);this.OS.L(A.jb.Text
);this.OS.Blz(true);this.A36=A._GetAutoObject(A.Device.Device).TemperatureUnit;this.
J(this.UG,0);this.J(this.OS,0);this.YA.Aw(A.aaL(A.ach.AbC));this.UG.As([B=A._GetAutoObject(
A.aco.Hq),B.ASB,B.ATm]);this.UG.OnSetAppearance(A._GetAutoObject(A.acx.AuQ));this.
OS.Di=[this,this.Bz9];this.Init(aArg);},_Done:function(){this.__proto__=C.Jm;this.
UG._Done();this.OS._Done();C.Jm._Done.call(this);},_ReInit:function(){C.Jm._ReInit.
call(this);this.UG._ReInit();this.OS._ReInit();this.UG.A9O(A.aaR(A.acf.A4V));},_Mark:
function(D){var B;C.Jm._Mark.call(this,D);if((B=this.UG)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.OS)._cycle!=D)B._Mark(B._cycle=D);},_className:"Demonstrator::TemperatureAction"
};C.Ard={Q:null,BU:null,Bn:null,AgD:null,Am5:null,Am4:null,Ari:null,Text:null,Hk:
null,Ap:null,CX:null,Arh:null,Arj:null,Api:false,Bk:function(aSize){this.Hk.H(A.
abK(this.Hk.M,aSize));this.BU.Axq(1);this.BU.Jq(0,40);this.BU.Fh(0,aSize[0]-20,20
,12.5,12.5,-90,90,10);this.BU.Fh(0,20,20,12.5,12.5,90,270,10);this.BU.VK(0);},Ai:
function(Ae){var B;var F;A.Core.P.Ai.call(this,Ae);var Iy=((Ae&0x40)===0x40);if(
Iy){if(!!this.Q)this.Text.R((F=this.Q,F[1].call(F[0])));this.AgD.Ar(true);this.Ap.
Z(false);}else{if(!!this.Q)this.Text.R((F=this.Q,F[1].call(F[0])));this.AgD.Ar(false
);this.CX.Z(false);this.Ap.Z(true);}this.Api=Iy;},Af6:function(G){var B;if(!((this.
U&0x80)===0x80))this.Ij().AMT(this);},A7Y:function(G){},Bav:function(s){this.A7Y(
s);},BjI:function(G){var B;var F;if(!this.Q||!(F=this.Q,F[1].call(F[0])).length)
this.CX.H(A.abM(this.CX.M,A.aaI(this.Text.M)[0]));else{this.CX.H(A.abM(this.CX.M
,this.Text.AOR(0)[2]+2));this.CX.H(A.abO(this.CX.M,this.Text.AOR(0)[1]));this.CX.
H(A.abI(this.CX.M,(B=this.Text.AOR(0))[3]-B[1]));}this.Ap.H(A.abM(this.Ap.M,this.
Text.M[0]-((B=this.Ap.M)[2]-B[0])));},A7W:function(G){},Bau:function(s){this.A7W(
s);},As:function(E){if(A.aaZ(this.Q,E))return;if(!!this.Q)A.z$([this,this.Kc],this.
Q,0);this.Q=E;if(!!E)A.zX([this,this.Kc],E,0);if(!!E)A.pe([this,this.Kc],this);}
,Kc:function(G){this.An();},Bla:function(G){var B;if(((this.U&0x80)===0x80))this.
Ij().ACz(this);},BeA:function(G){},_Init:function(aArg){A.Core.P._Init.call(this
,aArg);A.Graphics.Hv._Init.call(this.BU={I:this},0);A.Core.Bn._Init.call(this.Bn={
I:this},0);A.acl.TE._Init.call(this.AgD={I:this},0);A.Core.BM._Init.call(this.Am5={
I:this},0);A.Core.BM._Init.call(this.Am4={I:this},0);A.Core.BM._Init.call(this.Ari={
I:this},0);A.acg.Text._Init.call(this.Text={I:this},0);A.acg.Hk._Init.call(this.
Hk={I:this},0);A.acg.Ap._Init.call(this.Ap={I:this},0);A.acg.AK._Init.call(this.
CX={I:this},0);A.Core.BM._Init.call(this.Arh={I:this},0);A.Core.BM._Init.call(this.
Arj={I:this},0);this.__proto__=C.Ard;var B;this.H(Afy);this.Bn.AZ(0x3F);this.Bn.
JQ(JY);this.Bn.Kr(Aok);this.Bn.DC(IR);this.Bn.DM(Ri);this.AgD.Fm(530);this.AgD.Uk(
530);this.Am5.Filter=143;this.Am4.Filter=45;this.Ari.Filter=1;this.Text.AZ(0x3F);
this.Text.H(Afy);this.Text.I7(true);this.Text.A6(0x12);this.Text.L(0xFFB3B3B3);this.
Hk.H(Afy);this.Hk.L(0xFFB3B3B3);this.Hk.Nf(1);this.Ap.H(Aol);this.CX.H(Xc);this.
CX.L(0xFFB3B3B3);this.CX.Z(false);this.Arh.Filter=138;this.Arj.Filter=137;this.J(
this.Bn,0);this.J(this.Text,0);this.J(this.Hk,0);this.J(this.Ap,0);this.J(this.CX
,0);this.Bn.Ll=[this,this.Af6];this.AgD.Q=[B=this.CX,B.Fl,B.Z];this.Am5.BN=[this
,this.Bav];this.Am5.D1=[this,this.Bav];this.Am4.BN=[this,this.Bau];this.Am4.D1=[
this,this.Bau];this.Ari.BN=[this,this.Bla];this.Text.Q2([this,this.BjI]);this.Text.
S(A.aaL(A.fl.Ak));this.Hk.Zv(this.BU);this.Ap.Aw(null);this.Arh.BN=[this,this.BeA
];this.Arj.BN=[this,this.BeA];},_Done:function(){this.__proto__=A.Core.P;this.BU.
_Done();this.Bn._Done();this.AgD._Done();this.Am5._Done();this.Am4._Done();this.
Ari._Done();this.Text._Done();this.Hk._Done();this.Ap._Done();this.CX._Done();this.
Arh._Done();this.Arj._Done();A.Core.P._Done.call(this);},_ReInit:function(){A.Core.
P._ReInit.call(this);this.BU._ReInit();this.Bn._ReInit();this.AgD._ReInit();this.
Am5._ReInit();this.Am4._ReInit();this.Ari._ReInit();this.Text._ReInit();this.Hk.
_ReInit();this.Ap._ReInit();this.CX._ReInit();this.Arh._ReInit();this.Arj._ReInit(
);this.Text.S(A.aaL(A.fl.Ak));},_Mark:function(D){var B;A.Core.P._Mark.call(this
,D);if((B=this.Q)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.BU)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.Bn)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
AgD)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Am5)._cycle!=D)B._Mark(B._cycle=D);
if((B=this.Am4)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ari)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Text)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Hk)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.Ap)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
CX)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Arh)._cycle!=D)B._Mark(B._cycle=D);
if((B=this.Arj)._cycle!=D)B._Mark(B._cycle=D);},_className:"Demonstrator::InputView"
};C.Aen={Background:null,Yq:null,_Init:function(aArg){A.Core.P._Init.call(this,aArg
);A.acg.AK._Init.call(this.Background={I:this},0);C.Yq._Init.call(this.Yq={I:this
},0);this.__proto__=C.Aen;var B;this.H(Aom);this.Background.H(Aom);this.Yq.AZ(0x1D
);this.Yq.H(AsV);this.J(this.Background,0);this.J(this.Yq,0);this.Yq.As([B=A._GetAutoObject(
A.aco.AgF),B.A8L,B.AFC]);},_Done:function(){this.__proto__=A.Core.P;this.Background.
_Done();this.Yq._Done();A.Core.P._Done.call(this);},_ReInit:function(){A.Core.P.
_ReInit.call(this);this.Background._ReInit();this.Yq._ReInit();},_Mark:function(
D){var B;A.Core.P._Mark.call(this,D);if((B=this.Background)._cycle!=D)B._Mark(B.
_cycle=D);if((B=this.Yq)._cycle!=D)B._Mark(B._cycle=D);},_className:"Demonstrator::FilterRow"
};C.OS={Init:function(aArg){var B;A.zX([this,this.AAB],[B=A._GetAutoObject(A.Device.
Device),B.Arz,B.Atg],0);A.pe([this,this.AAB],this);},Ai:function(Ae){var B;C.Ako.
Ai.call(this,Ae);var Iy=((this.U&0x40)===0x40);if(!Iy&&(this.String.length>0))this.
Text.R(((this.String+AsW)+A._GetAutoObject(A.acj.Temperature).AlI())+String.fromCharCode(
0x0A));else this.Text.R(this.String+String.fromCharCode(0x0A));if(this.D6>this.String.
length)this.D6=this.String.length;},AAB:function(G){this.An();},_Init:function(aArg
){C.Ako._Init.call(this,aArg);this.__proto__=C.OS;this.Init(aArg);},_className:"Demonstrator::TemperatureInputView"
};C.Ako={B7:null,Di:null,IS:null,Cr:null,AmA:null,Sb:null,KK:null,Bn:null,Text:null
,CX:null,Aqy:null,Ase:null,BU:null,Hk:null,Arv:null,Aq3:null,AqL:null,String:A.jV
,D6:0,AQ:0xFFB3B3B3,AvT:15,ANI:false,Lz:false,Bk:function(aSize){this.Hk.H(A.abK(
this.Hk.M,aSize));this.BU.Axq(1);this.BU.Jq(0,40);this.BU.Fh(0,aSize[0]-20,20,12.5
,12.5,-90,90,10);this.BU.Fh(0,20,20,12.5,12.5,90,270,10);this.BU.VK(0);},Ai:function(
Ae){var B;A.acn.I$.Ai.call(this,Ae);if(((Ae&0x40)===0x40))this.IS.Ar(true);else{
this.IS.Ar(false);this.CX.Z(false);}},A4e:function(G){var B;var Bd=this.Text.M;var
Nu=0;var Nv=0;if(this.CX.Es[0]<Bd[0])Nu=Bd[0]-this.CX.Es[0];if(this.CX.Es[0]>Bd[
2])Nu=Bd[2]-this.CX.Es[0];if(this.CX.Es[1]<Bd[1])Nv=Bd[1]-this.CX.Es[1];if(this.
CX.ED[1]>Bd[3])Nv=Bd[3]-this.CX.ED[1];if(!!Nu||!!Nv)this.Text.F$(A.abf(this.Text.
Br,[Nu,Nv]));Nu=this.Text.Br[0];Nv=this.Text.Br[1];var C3=[(B=this.Text.Db())[2]-
B[0],B[3]-B[1]];if(C3[0]<=((B=this.Text.M)[2]-B[0]))Nu=0;if(C3[1]<=((B=this.Text.
M)[3]-B[1]))Nv=0;this.Text.F$([Nu,Nv]);},Ami:function(G){if(!this.B7)return;var A3I=
this.Text.AGN(this.D6);var pos=this.Text.Afc(A3I);this.CX.DM(A.abe(pos,[0,this.B7.
Ascent]));this.CX.DC(A.abf(pos,[0,this.B7.Descent]));if(this.IS.Bw){this.IS.Ar(false
);this.IS.Ar(true);}if(this.Lz){A.pe([this,this.A4e],this);this.Lz=false;}},AAx:
function(G){if(!this.A6G(0x80))this.Ij().AMT(this);var EI=this.Text.ATR(this.Bn.
H0);var Vd=this.Text.AnP(EI);if(Vd!==this.D6){this.D6=Vd;A.pe([this,this.Ami],this
);this.Lz=true;}},AAr:function(G){if(!this.B7)return;var EI=this.Text.AGN(this.D6
);if(this.Cr.CO===6){EI=[EI[0]-1,EI[1]];if(this.Text.AnP(EI)===this.D6){EI=[EI[0
],EI[1]-1];EI=[this.Text.ACY(EI[1]).length,EI[1]];}}if(this.Cr.CO===7){EI=[EI[0]+
1,EI[1]];if(this.Text.AnP(EI)===this.D6){EI=[EI[0],EI[1]+1];EI=[0,EI[1]];}}var Vd=
this.Text.AnP(EI);if(Vd!==this.D6){this.D6=Vd;A.pe([this,this.Ami],this);this.Lz=
true;}},Bej:function(G){if(!this.D6)return;this.R(A.ab1(this.String,this.D6-1,1)
);this.D6=this.D6-1;this.Lz=true;A.pe(this.Di,this);},AAs:function(G){if(this.D6>=
this.String.length)return;this.R(A.ab1(this.String,this.D6,1));this.Lz=true;A.pe(
this.Di,this);},Beo:function(G){if(this.String.length>=this.AvT)return;var Byv=this.
KK.DQ;var Aui=String.fromCharCode(Byv);this.R(A.abU(this.String,Aui,this.D6));this.
D6=this.D6+Aui.length;this.Lz=true;A.pe(this.Di,this);},R:function(E){if(this.String===
E)return;this.String=E;if(this.D6>(E.length+1))this.D6=E.length;this.Text.R(E+String.
fromCharCode(0x0A));this.Lz=true;this.Text.F$(JY);},L:function(E){if(this.AQ===E
)return;this.AQ=E;this.Text.L(E);this.CX.L(E);this.Hk.L(E);},S:function(E){if(this.
B7===E)return;this.B7=E;this.Text.S(E);this.Lz=true;this.Text.F$(JY);},BeB:function(
G){if(this.ANI===false)return;if(this.String.indexOf(String.fromCharCode(0x2E),0
)>=0)return;if(this.String.length>=this.AvT)return;this.R(A.abU(this.String,S7,this.
D6));this.D6=this.D6+1;this.Lz=true;A.pe(this.Di,this);},Bbe:function(s){this.BeB(
s);},Blz:function(E){if(this.ANI===E)return;this.ANI=E;if(E===false){var Bfi=this.
String.indexOf(String.fromCharCode(0x2E),0);if(Bfi>=0)this.R(A.abV(this.String,Bfi
));}this.Lz=true;this.Text.F$(JY);},BmF:function(E){if(this.AvT===E)return;this.
AvT=E;this.R(A.abV(this.String,E));this.Lz=true;this.Text.F$(JY);},BAf:function(
G){if(this.A6G(0x80))this.Ij().ACz(this);this.An();},Bz5:function(G){var Vd=this.
String.length;if(Vd!==this.D6){this.D6=Vd;A.pe([this,this.Ami],this);this.Lz=true;
}},Bz8:function(G){if(!!this.D6){this.D6=0;A.pe([this,this.Ami],this);this.Lz=true;
}},_Init:function(aArg){A.acn.I$._Init.call(this,aArg);A.acl.TE._Init.call(this.
IS={I:this},0);A.Core.BM._Init.call(this.Cr={I:this},0);A.Core.BM._Init.call(this.
AmA={I:this},0);A.Core.BM._Init.call(this.Sb={I:this},0);A.Core.BM._Init.call(this.
KK={I:this},0);A.Core.Bn._Init.call(this.Bn={I:this},0);A.acg.Text._Init.call(this.
Text={I:this},0);A.acg.C5._Init.call(this.CX={I:this},0);A.Core.BM._Init.call(this.
Aqy={I:this},0);A.Core.BM._Init.call(this.Ase={I:this},0);A.Graphics.Hv._Init.call(
this.BU={I:this},0);A.acg.Hk._Init.call(this.Hk={I:this},0);A.Core.BM._Init.call(
this.Arv={I:this},0);A.Core.BM._Init.call(this.Aq3={I:this},0);A.Core.BM._Init.call(
this.AqL={I:this},0);this.__proto__=C.Ako;var B;this.H(Afy);this.IS.B2=false;this.
IS.Cw=true;this.IS.Fm(500);this.IS.Uk(500);this.Cr.Filter=147;this.AmA.Filter=45;
this.Sb.Filter=44;this.KK.Filter=143;this.Bn.AZ(0x3F);this.Bn.JQ(Ri);this.Bn.Kr(
IR);this.Bn.DC(Aok);this.Bn.DM(JY);this.Bn.AFn(3);this.Text.AZ(0x3F);this.Text.H(
Afy);this.Text.KR(false);this.Text.A6(0x12);this.Text.R(A.jV);this.Text.L(0xFFB3B3B3
);this.CX.DC(AsX);this.CX.DM(Aon);this.CX.A_o(2);this.CX.A_n(2);this.CX.L(0xFFB3B3B3
);this.CX.Z(false);this.Aqy.Filter=138;this.Ase.Filter=137;this.Hk.H(Afy);this.Hk.
L(0xFFB3B3B3);this.Hk.Nf(1);this.Arv.Filter=1;this.Aq3.Filter=41;this.AqL.Filter=
42;this.J(this.Bn,0);this.J(this.Text,0);this.J(this.CX,0);this.J(this.Hk,0);this.
IS.Q=[B=this.CX,B.Fl,B.Z];this.Cr.BN=[this,this.AAr];this.Cr.D1=[this,this.AAr];
this.AmA.BN=[this,this.Bej];this.AmA.D1=[this,this.Bej];this.Sb.BN=[this,this.AAs
];this.Sb.D1=[this,this.AAs];this.KK.BN=[this,this.Beo];this.KK.D1=[this,this.Beo
];this.Bn.BN=[this,this.AAx];this.Text.Q2([this,this.Ami]);this.Text.S(A.aaL(A.fl.
Ak));this.B7=A.aaL(A.fl.Ak);this.Aqy.BN=[this,this.Bbe];this.Ase.BN=[this,this.Bbe
];this.Hk.Zv(this.BU);this.Arv.BN=[this,this.BAf];this.Aq3.BN=[this,this.Bz8];this.
AqL.BN=[this,this.Bz5];},_Done:function(){this.__proto__=A.acn.I$;this.IS._Done(
);this.Cr._Done();this.AmA._Done();this.Sb._Done();this.KK._Done();this.Bn._Done(
);this.Text._Done();this.CX._Done();this.Aqy._Done();this.Ase._Done();this.BU._Done(
);this.Hk._Done();this.Arv._Done();this.Aq3._Done();this.AqL._Done();A.acn.I$._Done.
call(this);},_ReInit:function(){A.acn.I$._ReInit.call(this);this.IS._ReInit();this.
Cr._ReInit();this.AmA._ReInit();this.Sb._ReInit();this.KK._ReInit();this.Bn._ReInit(
);this.Text._ReInit();this.CX._ReInit();this.Aqy._ReInit();this.Ase._ReInit();this.
BU._ReInit();this.Hk._ReInit();this.Arv._ReInit();this.Aq3._ReInit();this.AqL._ReInit(
);this.Text.S(A.aaL(A.fl.Ak));this.S(A.aaL(A.fl.Ak));},_Mark:function(D){var B;A.
acn.I$._Mark.call(this,D);if((B=this.B7)&&(B._cycle!=D))B._Mark(B._cycle=D);if((
B=this.Di)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.IS)._cycle!=D)B.
_Mark(B._cycle=D);if((B=this.Cr)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AmA)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.Sb)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
KK)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Bn)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Text)._cycle!=D)B._Mark(B._cycle=D);if((B=this.CX)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Aqy)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ase)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.BU)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Hk)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.Arv)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Aq3
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AqL)._cycle!=D)B._Mark(B._cycle=D);},
_className:"Demonstrator::NumberInput"};C.Acv={LabelDataSync:null,Af6:function(G
){var B;A.pe([B=A._GetAutoObject(A.acs.Acp),B.BBD],this);},_Init:function(aArg){
C.Jm._Init.call(this,aArg);A.kR.CH._Init.call(this.LabelDataSync={I:this},0);this.
__proto__=C.Acv;this.LabelDataSync.H(Aoo);this.LabelDataSync.R(A.aaR(A.acf.A5w));
this.LabelDataSync.L(A.jb.Text);this.J(this.LabelDataSync,0);this.YA.Aw(A.aaL(C.
AUU));this.LabelDataSync.S(A.aaL(A.fl.Af));this.LabelDataSync.A2(A.aaL(A.fl.Ak));
},_Done:function(){this.__proto__=C.Jm;this.LabelDataSync._Done();C.Jm._Done.call(
this);},_ReInit:function(){C.Jm._ReInit.call(this);this.LabelDataSync._ReInit();
this.LabelDataSync.R(A.aaR(A.acf.A5w));this.LabelDataSync.S(A.aaL(A.fl.Af));this.
LabelDataSync.A2(A.aaL(A.fl.Ak));},_Mark:function(D){var B;C.Jm._Mark.call(this,
D);if((B=this.LabelDataSync)._cycle!=D)B._Mark(B._cycle=D);},_className:"Demonstrator::SyncAction"
};C.AUU={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/DemonstratorSyncIcon.png"
,Format:A._PIXEL_FORMAT_NATIVE,NoOfFrames:1,FrameSize:[50,60],FrameDelay:0,_this:
null}};C.Abc={TimespanDaysToString:null,Avm:function(aIndex){if(this.AqW()>aIndex
)return this.TimespanDaysToString.BH(aIndex);A.ab5("%s",AsY);return A.jV;},AqW:function(
){return 4;},C4:function(aIndex){var Ai$=0;switch(aIndex){case 0:Ai$=0;break;case
1:Ai$=1;break;case 2:Ai$=2;break;case 3:Ai$=3;break;default:throw new Error(Ax2+
aIndex.toFixed());}return Ai$;},_Init:function(aArg){A.acq.VL._Init.call(this,aArg
);A.Device.TimespanDaysToString._Init.call(this.TimespanDaysToString={I:this},0);
this.__proto__=C.Abc;},_Done:function(){this.__proto__=A.acq.VL;this.TimespanDaysToString.
_Done();A.acq.VL._Done.call(this);},_ReInit:function(){A.acq.VL._ReInit.call(this
);this.TimespanDaysToString._ReInit();},_Mark:function(D){var B;A.acq.VL._Mark.call(
this,D);if((B=this.TimespanDaysToString)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Demonstrator::DatePickerUnitDD"};C.BFo={GH:0,AVB:1,He:2,Year:3};C.ACw={_class:function(
){return A.aci.Al;},0:{FileName:"./res_index/DemonstratorEarTagIcon.png",Format:
A._PIXEL_FORMAT_ALPHA8,NoOfFrames:2,FrameSize:[37,37],FrameDelay:0,_this:null}};
C.AxK={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/DemonstratorTransponderEarTagIcon.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:2,FrameSize:[37,37],FrameDelay:0,_this:
null}};C.ZG={Aec:null,Init:function(aArg){var Au=A._NewObject(A.Core.Bs,0);Au.Initialize(
A._GetAutoObject(A.Device.Helper).Dv());var A1u=Au.Format(Iq);this.Aec.R(A1u);},
Af6:function(G){var B;var J4=this.Aec.String;var O;O=J4.indexOf(String.fromCharCode(
0x2E),0);while(O>=0){J4=A.ab1(J4,O,1);O=J4.indexOf(String.fromCharCode(0x2E),O);
}J4=J4+Ax3;J4=J4+A._GetAutoObject(A.acj.VB).ACT(J4).toFixed();var A1u=A._GetAutoObject(
A.Device.AnJ).Be9(J4);A._GetAutoObject(A.aco.Hq).BBu(((B=(A1u|0))<0)?B+0x100000000:
B);},_Init:function(aArg){C.Jm._Init.call(this,aArg);C.ANF._Init.call(this.Aec={
I:this},0);this.__proto__=C.ZG;this.Aec.H(Rk);this.Aec.L(A.jb.Text);this.Aec.BmF(
10);this.J(this.Aec,-1);this.YA.Aw(A.aaL(A.ach.Avu));this.Init(aArg);},_Done:function(
){this.__proto__=C.Jm;this.Aec._Done();C.Jm._Done.call(this);},_ReInit:function(
){C.Jm._ReInit.call(this);this.Aec._ReInit();},_Mark:function(D){var B;C.Jm._Mark.
call(this,D);if((B=this.Aec)._cycle!=D)B._Mark(B._cycle=D);},_className:"Demonstrator::ScanDateAction"
};C.Ahw={BFC:0,BFy:1,VB:2,LAST:3};C.Ahx={Ahy:null,Avm:function(aIndex){if(this.AqW(
)>aIndex)return this.Ahy.BH(aIndex);A.ab5("%s",AsY);return A.jV;},AqW:function(){
return 3;},_Init:function(aArg){A.acq.VL._Init.call(this,aArg);C.Ahy._Init.call(
this.Ahy={I:this},0);this.__proto__=C.Ahx;},_Done:function(){this.__proto__=A.acq.
VL;this.Ahy._Done();A.acq.VL._Done.call(this);},_ReInit:function(){A.acq.VL._ReInit.
call(this);this.Ahy._ReInit();},_Mark:function(D){var B;A.acq.VL._Mark.call(this
,D);if((B=this.Ahy)._cycle!=D)B._Mark(B._cycle=D);},_className:"Demonstrator::ScanTypeDD"
};C.Ahy={BH:function(A5){var BcB=A5;var AK0=A.jV;switch(BcB){case 2:AK0=A.aaR(A.
acf.VB);break;case 0:AK0=A.aaR(A.acf.Transponder);break;case 1:AK0=A.aaR(A.acf.BhZ
);break;default:throw new Error(Ax4+BcB.toFixed());}return AK0;},_Init:function(
aArg){A.Device.EnumToString._Init.call(this,aArg);this.__proto__=C.Ahy;},_className:
"Demonstrator::ScanTypeToString"};C.ANF={BeB:function(G){var Bfj=0;var O=this.String.
indexOf(String.fromCharCode(0x2E),0);while(O>=0){Bfj++;O++;O=this.String.indexOf(
String.fromCharCode(0x2E),O);}if(Bfj>=2)return;if(this.String.length>=this.AvT)return;
this.R(A.abU(this.String,S7,this.D6));this.D6=this.D6+1;this.Lz=true;A.pe(this.Di
,this);},_Init:function(aArg){C.Ako._Init.call(this,aArg);this.__proto__=C.ANF;}
,_className:"Demonstrator::DateInput"};
C._Init=function(){C.AVv.__proto__=A.acn.Menu;C.AUr.__proto__=A.Core.P;C.AMs.__proto__=
C.Ba;C.Mf.__proto__=A.Core.P;C.Yq.__proto__=C.Ard;C.Abd.__proto__=A.Core.P;C.Avx.
__proto__=A.acn.Ahr;C.AMG.__proto__=C.Fy;C.Auv.__proto__=C.Fy;C.Ba.__proto__=A.Core.
P;C.Fy.__proto__=A.Core.P;C.ANG.__proto__=A.acn.Ahp;C.AhB.__proto__=A.Core.P;C.AMz.
__proto__=C.AhB;C.Vs.__proto__=C.Auv;C.AL3.__proto__=A.Core.P;C.Jm.__proto__=A.Core.
P;C.Acl.__proto__=C.Jm;C.Acw.__proto__=C.Jm;C.Ard.__proto__=A.Core.P;C.Aen.__proto__=
A.Core.P;C.OS.__proto__=C.Ako;C.Ako.__proto__=A.acn.I$;C.Acv.__proto__=C.Jm;C.Abc.
__proto__=A.acq.VL;C.ZG.__proto__=C.Jm;C.Ahx.__proto__=A.acq.VL;C.Ahy.__proto__=
A.Device.EnumToString;C.ANF.__proto__=C.Ako;};C._ReInit=function(){};C.DH=function(
D){var B;if((B=C.Background[0]._this)&&(B._cycle!=D))B._Done(C.Background[0]._this=
null);if((B=C.AM2[0]._this)&&(B._cycle!=D))B._Done(C.AM2[0]._this=null);if((B=C.
AM3[0]._this)&&(B._cycle!=D))B._Done(C.AM3[0]._this=null);if((B=C.AM4[0]._this)&&(
B._cycle!=D))B._Done(C.AM4[0]._this=null);if((B=C.AM5[0]._this)&&(B._cycle!=D))B.
_Done(C.AM5[0]._this=null);if((B=C.AP6[0]._this)&&(B._cycle!=D))B._Done(C.AP6[0].
_this=null);if((B=C.Filter[0]._this)&&(B._cycle!=D))B._Done(C.Filter[0]._this=null
);if((B=C.ARF[0]._this)&&(B._cycle!=D))B._Done(C.ARF[0]._this=null);if((B=C.Ajq[
0]._this)&&(B._cycle!=D))B._Done(C.Ajq[0]._this=null);if((B=C.AMJ[0]._this)&&(B.
_cycle!=D))B._Done(C.AMJ[0]._this=null);if((B=C.Ast[0]._this)&&(B._cycle!=D))B._Done(
C.Ast[0]._this=null);if((B=C.AUZ[0]._this)&&(B._cycle!=D))B._Done(C.AUZ[0]._this=
null);if((B=C.AHg[0]._this)&&(B._cycle!=D))B._Done(C.AHg[0]._this=null);if((B=C.
AVM[0]._this)&&(B._cycle!=D))B._Done(C.AVM[0]._this=null);if((B=C.AUU[0]._this)&&(
B._cycle!=D))B._Done(C.AUU[0]._this=null);if((B=C.ACw[0]._this)&&(B._cycle!=D))B.
_Done(C.ACw[0]._this=null);if((B=C.AxK[0]._this)&&(B._cycle!=D))B._Done(C.AxK[0].
_this=null);};return C;})();

/* VitalControl demonstration application, © Urban GmbH & Co.KG 2023 */