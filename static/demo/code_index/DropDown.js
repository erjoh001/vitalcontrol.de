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
);if(index.acq)throw new Error("The unit file 'DropDown.js' included twice!");index.
acq=(function(){var A=index;var C={};
var Cc="Text";var BF=[0,0,100,24];var E4=[0,0,100,1];var Hm=[0,0];var IQ=[0,0,100
,120];var Iq=[100,0];var O2=[100,120];var P1=[0,120];var P2=[90,0,100,60];var CQ=[
0,0,0,0];var E$=[0,0,240,40];var Lu=[240,0];var P3=[240,40];var JZ=[0,40];var N_=[
210,0,240,40];var P4=[0,0,240,50];var MF=[240,50];var S4=[0,50];
C.VK={Avp:function(aIndex){return A.jV;},AqU:function(){return 0;},_Init:function(
aArg){this.__proto__=C.VK;A.h7++;},_Done:function(){this.__proto__=null;A.h7--;}
,_ReInit:function(){},_Mark:function(D){var B;if((B=this.I)&&(B._cycle!=D))B._Mark(
B._cycle=D);},I:null,_cycle:0,_observers:null,_className:"DropDown::DDData"};C.ACi={
B6:null,Background:null,Text:null,Bc:null,V:Cc,LS:0xFF000000,A48:0xFF454545,A$t:
0,KT:0,Kg:0x12,I_:A.wg,Bk:function(aSize){var B;A.Core.P.Bk.call(this,aSize);this.
Text.H([0,0,(B=this.M)[2]-B[0],B[3]-B[1]]);this.Text.H([].concat(this.Text.M[0]+
this.I_[0],this.Text.M.slice(1,4)));this.Text.H(A.abN(this.Text.M,this.Text.M[2]-
this.I_[2]));this.Text.H(A.abP(this.Text.M,this.Text.M[1]+this.I_[1]));this.Text.
H([].concat(this.Text.M.slice(0,3),this.Text.M[3]-this.I_[3]));},Ai:function(Ae){
var B;A.Core.P.Ai.call(this,Ae);if(((Ae&0x20)===0x20)){this.Background.L(this.A48
);this.Text.L(this.A$t);}else{this.Background.L(this.LS);this.Text.L(this.KT);}}
,Blw:function(E){this.V=E;this.Text.R(E);},Ww:function(E){this.LS=E;this.Background.
L(E);},S:function(E){this.B6=E;this.Text.S(E);},A6:function(E){this.Kg=E;this.Text.
A6(E);},Hh:function(E){if(A.aaY(this.I_,E))return;this.I_=E;},_Init:function(aArg
){A.Core.P._Init.call(this,aArg);A.acg.AL._Init.call(this.Background={I:this},0);
A.acg.Text._Init.call(this.Text={I:this},0);A.acg.AL._Init.call(this.Bc={I:this}
,0);this.__proto__=C.ACi;this.H(BF);this.Background.AZ(0x3F);this.Background.H(BF
);this.Background.L(0xBE000000);this.Text.AZ(0x3F);this.Text.H(BF);this.Text.R(Cc
);this.Text.L(0xFFFFFFFF);this.Bc.AZ(0x1D);this.Bc.H(E4);this.Bc.L(0x9EFFFFFF);this.
J(this.Background,0);this.J(this.Text,0);this.J(this.Bc,0);this.Text.S(A.aaL(A.fl.
Ak));this.B6=A.aaL(A.fl.Af);},_Done:function(){this.__proto__=A.Core.P;this.Background.
_Done();this.Text._Done();this.Bc._Done();A.Core.P._Done.call(this);},_ReInit:function(
){A.Core.P._ReInit.call(this);this.Background._ReInit();this.Text._ReInit();this.
Bc._ReInit();this.Text.S(A.aaL(A.fl.Ak));this.S(A.aaL(A.fl.Af));},_Mark:function(
D){var B;A.Core.P._Mark.call(this,D);if((B=this.B6)&&(B._cycle!=D))B._Mark(B._cycle=
D);if((B=this.Background)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Text)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.Bc)._cycle!=D)B._Mark(B._cycle=D);},_className:
"DropDown::DDItem"};C.ANx={AEm:null,A9k:null,CM:null,H7:null,Bn:null,BU:null,IN:
null,Go:0,AY:0,GK:0,AbO:0,ACz:false,A26:function(G){if(this.Bn.Jp>100){var Gc=this.
CM.A6D(this.Bn.H0);if(Gc<0)return;this.CM.G2(Gc);this.CM.HD(Gc,true,null,null);}
},BAz:function(G){var B;if(!this.Bn.NF){var Gc=this.CM.A6D(this.Bn.H0);if(Gc<0)return;
this.CM.G2(Gc);this.CM.HD(Gc,true,null,null);(B=this.AEm)?B[1].call(B[0],this):null;
}},AAw:function(G){this.Bn.Ar(true);},BmV:function(E){if(A.aa0(this.AEm,E))return;
this.AEm=E;},G2:function(E){this.Go=E;this.CM.G2(E);},FH:function(){return this.
CM.Go;},BAb:function(G){if(this.ACz){var G8=A.abe(this.Bn.H0,this.Bn.NQ);if((G8[
1]>8)||(G8[1]<-8)){this.Ik().ANH(this.H7,Hm);this.Bn.Ar(false);}}},Ju:function(E
){this.AY=E;this.CM.Ju(E);},BmX:function(E){this.A9k=E;this.CM.Hg=E;},Ae4:function(
E){this.GK=E;this.CM.Ae4(E);},ASo:function(){return this.CM.GK;},BlP:function(E){
if(this.ACz===E)return;this.ACz=E;},Aru:function(){return this.CM.AY;},ArU:function(
E){if(this.AbO===E)return;this.AbO=E;},BAG:function(G){},Adw:function(G){var B;var
Vk=this.CM.M;var AtA=this.CM.AqS(0,this.CM.AY-1);var y1=(((Vk[1]-AtA[1])*(Vk[3]-
Vk[1]))/(AtA[3]-AtA[1]))|0;var y2=(((Vk[3]-AtA[1])*(Vk[3]-Vk[1]))/(AtA[3]-AtA[1]
))|0;if(y1<0)y1=0;if(y2>(Vk[3]-Vk[1]))y2=Vk[3]-Vk[1];this.IN.H([Vk[2]-10,y1+Vk[1
],Vk[2],y2+Vk[1]]);this.IN.Z(this.ACz);},_Init:function(aArg){A.Core.P._Init.call(
this,aArg);A.Core.CM._Init.call(this.CM={I:this},0);A.Core.H7._Init.call(this.H7={
I:this},0);A.Core.Bn._Init.call(this.Bn={I:this},0);A.acg.BU._Init.call(this.BU={
I:this},0);A.acg.AL._Init.call(this.IN={I:this},0);this.__proto__=C.ANx;this.H(IQ
);this.CM.AZ(0x3F);this.CM.H(IQ);this.CM.G2(0);this.CM.Ju(5);this.CM.NZ(C.ACi);this.
H7.AZ(0x3F);this.H7.H(IQ);this.H7.AGH=false;this.H7.A_0=false;this.Bn.AZ(0x3F);this.
Bn.JR(Hm);this.Bn.Kr(Iq);this.Bn.DC(O2);this.Bn.DL(P1);this.BU.AZ(0x3F);this.BU.
H(IQ);this.BU.L(A.jb.Text);this.IN.H(P2);this.IN.L(0xFF000000);this.J(this.CM,0);
this.J(this.H7,0);this.J(this.Bn,0);this.J(this.BU,0);this.J(this.IN,0);this.CM.
El=[this,this.Adw];this.CM.Aw2(this.H7);this.H7.AF0=[this,this.BAG];this.H7.Zn=[
this,this.AAw];this.Bn.AR_=[this,this.BAb];this.Bn.D0=[this,this.A26];this.Bn.Ln=[
this,this.BAz];},_Done:function(){this.__proto__=A.Core.P;this.CM._Done();this.H7.
_Done();this.Bn._Done();this.BU._Done();this.IN._Done();A.Core.P._Done.call(this
);},_ReInit:function(){A.Core.P._ReInit.call(this);this.CM._ReInit();this.H7._ReInit(
);this.Bn._ReInit();this.BU._ReInit();this.IN._ReInit();},_Mark:function(D){var B;
A.Core.P._Mark.call(this,D);if((B=this.AEm)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=
D);if((B=this.A9k)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.CM)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.H7)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
Bn)._cycle!=D)B._Mark(B._cycle=D);if((B=this.BU)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.IN)._cycle!=D)B._Mark(B._cycle=D);},_className:"DropDown::DDItemList"};C.
DT={Data:null,AD:null,ACK:null,Avk:null,AbN:null,Q:null,Ad0:null,Jr:null,Bn:null
,HK:null,AbF:null,AbO:100,GK:20,Bb8:A.wg,A5t:0xFF252528,ANe:0xFF252528,ANj:0xFFF1EEEA
,A5u:0xFFFAFFFE,ANm:0xFFF8FDFF,ANf:0xFF0008C1,Azt:0,ANn:0xFF7EFEFF,ANG:-1,AB_:0xFF000000
,Bhp:0xFFFAFFFE,Bhq:0,CP:function(){this.Bi_(this);},Init:function(aArg){this.ASQ(
this.A5t);this.ArM(this.ACK);this.ASR(this.A5u);},Kk:function(CZ,aClip,aOffset,Ci
,aBlend){A.Core.P.Kk.call(this,CZ,aClip,aOffset,Ci,aBlend);if(!A.aaY(this.Bb8,this.
M)){this.Bb8=this.M;A.pe([this,this.BxV],this);}},Bk:function(aSize){var B;A.Core.
P.Bk.call(this,aSize);this.Jr.H([0,0,(B=this.M)[2]-B[0],B[3]-B[1]]);this.Jr.H([].
concat(this.Jr.M[0],this.Jr.M.slice(1,4)));this.Jr.H(A.abN(this.Jr.M,this.Jr.M[2
]-((B=this.AbF.M)[2]-B[0])));this.Jr.H(A.abP(this.Jr.M,this.Jr.M[1]));this.Jr.H([
].concat(this.Jr.M.slice(0,3),this.Jr.M[3]));},As:function(E){if(A.aaZ(this.Q,E)
)return;if(!!this.Q)A.z$([this,this.C2],this.Q,0);this.Q=E;if(!!E)A.zX([this,this.
C2],E,0);if(!!E)A.pe([this,this.C2],this);},A9J:function(E){if(this.Data===E)return;
this.Data=E;A.pe([this,this.BfW],this);},Blg:function(G){var B;if(!this.AD)return;
var Gc=this.AD.CM.G0;var AaC=(C.ACi.isPrototypeOf(B=this.AD.CM.Ch)?B:null);if(!!
AaC){if(this.Data.AqU()>Gc){AaC.Blw(this.Data.Avp(Gc));AaC.Ww(this.ANe);AaC.A48=
this.ANf;AaC.A$t=this.ANn;AaC.S(this.Avk);AaC.KT=this.ANm;AaC.A6(0x12);AaC.Bc.L(
this.ANj);AaC.Hh(CQ);}AaC.H(A.abK(AaC.M,[(B=this.AD.CM.M)[2]-B[0],this.AD.CM.GK]
));}},BzV:function(G){var F;if(!!this.Q){(F=this.Q,F[2].call(F[0],this.AD.FH()));
A.abo(this.Q,0);}A.pe([this,this.A34],this);},A34:function(G){if(!this.AD){this.
Byy(this);if(!this.AD)return;this.HK.Cw=0;this.HK.B2=this.AD.AbO;this.AD.Ar(true
);}else{this.HK.Cw=this.AD.AbO;this.HK.B2=0;this.AD.Ar(false);}this.HK.Ar(true);
this.AD.BlP(this.AbO<(this.AD.ASo()*this.AD.Aru()));},Byy:function(G){var B;if(!
this.Data)return;this.AbN=A._NewObject(C.AOe,0);this.AD=A._NewObject(C.ANx,0);this.
AD.BmX([this,this.Blg]);this.AD.BmV([this,this.BzV]);this.AD.Ae4(this.GK);this.AD.
Ju(this.Data.AqU());this.AD.IN.L(this.AB_);if(this.AbO>(this.AD.ASo()*this.AD.Aru(
)))this.ArU(this.AD.ASo()*this.AD.Aru());this.AD.ArU(this.AbO);this.AD.H7.FY=[0,
this.AbO];this.AD.H(this.M);this.AD.Ar(false);this.AD.G2(this.Azt);var IA=this.Ik(
);if(!!IA){this.AbN.H([0,0,(B=IA.M)[2]-B[0],B[3]-B[1]]);this.AbN.AtZ=[this,this.
A34];this.AbN.J(this.AD,0);IA.J(this.AbN,0);IA.ZD(this.AbN);IA.AMP(this.AbN);}},
ArU:function(E){if(this.AbO===E)return;this.AbO=E;if(this.ANG<0)this.ANG=E;},AAt:
function(G){var B;if(!this.AD||!this.Ik())return;var AJc=this.By9(this);this.AD.
H([].concat(AJc[0],this.AD.M.slice(1,4)));this.AD.H(A.abN(this.AD.M,AJc[2]));this.
AD.H(A.abP(this.AD.M,AJc[3]));this.AD.H([].concat(this.AD.M.slice(0,3),AJc[3]+this.
HK.A4));if((this.AD.M[3]>this.Ik().M[3])&&(this.AD.M[3]!==((B=this.Ik().M)[3]-B[
1])))this.AD.H([].concat(this.AD.M.slice(0,3),this.Ik().M[3]));if((this.AD.M[1]<
this.Ik().M[1])&&(this.AD.M[3]!==((B=this.Ik().M)[3]-B[1])))this.AD.H(A.abP(this.
AD.M,this.Ik().M[1]));},BfW:function(G){this.Jr.R(this.Data.Avp(this.Azt));},AiN:
function(G){if((!this.AD||!this.AbN)||!this.Ik())return;if(!this.AD.A8p()){this.
Ik().ACA(this.AbN);this.Ik().HN(this.AbN);this.AD=null;}},BxV:function(G){var B;
if(!!this.AD&&(((this.M[0]!==this.AD.M[0])||(this.M[2]!==this.AD.M[2]))||(this.M[
3]!==this.AD.M[1])))this.AD.H([this.M[0],this.M[3],this.M[2],this.M[3]+((B=this.
AD.M)[3]-B[1])]);},ArM:function(E){this.ACK=E;this.Jr.S(E);},AwG:function(E){if(
this.Avk===E)return;this.Avk=E;},ASQ:function(E){this.A5t=E;this.Ad0.L(E);},A9x:
function(E){if(this.ANe===E)return;this.ANe=E;},A9B:function(E){if(this.ANj===E)
return;this.ANj=E;},ASR:function(E){this.A5u=E;this.Jr.L(E);},A9C:function(E){if(
this.ANm===E)return;this.ANm=E;},A9y:function(E){if(this.ANf===E)return;this.ANf=
E;},C2:function(G){var F;if(!!this.Q){this.Azt=(F=this.Q,F[1].call(F[0]));if(!!this.
AD)this.AD.G2(this.Azt);this.BfW(this);}},By9:function(AoP){var B;var B0=AoP;var
AJb=AoP.M;var Ay1=Hm;while(!!B0){var Aar=B0.FA;if(!B0.Ab&&(B0!==AoP)){B0.Bi(AJb);
return A.abh([0,0,(B=AoP.M)[2]-B[0],B[3]-B[1]],Ay1);}if(!!Aar){if(((B=Aar.QI)[0]>=
B[2])||(B[1]>=B[3])){A.we(B0,0);A.we(Aar,0);}Aar.QI=A.wC(Aar.QI,AJb);}if(!((B0.U&
0x1)===0x1))return A.abh([0,0,(B=AoP.M)[2]-B[0],B[3]-B[1]],Ay1);if(B0===AoP)AJb=
A.lb(A.abh(AJb,B0.M.slice(0,2)),B0.M);Ay1=A.abf(Ay1,B0.M.slice(0,2));B0=B0.Ab;}return A.
abh([0,0,(B=AoP.M)[2]-B[0],B[3]-B[1]],Ay1);},A9D:function(E){if(this.ANn===E)return;
this.ANn=E;},Bi_:function(G){this.ArU(this.ANG);if(!!this.AD&&!!this.AD.CM)this.
AD.CM.AbG(0,this.AD.CM.AY);if(!!this.Data)this.Jr.R(this.Data.Avp(this.Azt));},A9A:
function(E){if(this.AB_===E)return;this.AB_=E;if(!!this.AD)this.AD.IN.L(this.AB_
);},A9z:function(E){this.Bhp=E;this.AbF.L(E);},_Init:function(aArg){A.Core.P._Init.
call(this,aArg);A.acg.NO._Init.call(this.Ad0={I:this},0);A.acg.Text._Init.call(this.
Jr={I:this},0);A.Core.Bn._Init.call(this.Bn={I:this},0);A.acl.Gh._Init.call(this.
HK={I:this},0);A.acg.Ap._Init.call(this.AbF={I:this},0);this.__proto__=C.DT;this.
H(E$);this.Ad0.AZ(0x3F);this.Ad0.H(E$);this.Ad0.L(0xFF252528);this.Jr.AZ(0x3F);this.
Jr.H(E$);this.Jr.R(A.jV);this.Bn.AZ(0x3F);this.Bn.JR(Hm);this.Bn.Kr(Lu);this.Bn.
DC(P3);this.Bn.DL(JZ);this.HK.HM(1);this.HK.Fl(250);this.AbF.AZ(0x3A);this.AbF.H(
N_);this.AbF.Cv(1);this.Bhq=A.jb.Text;this.J(this.Ad0,0);this.J(this.Jr,0);this.
J(this.Bn,0);this.J(this.AbF,0);this.Ad0.Aw(A.aaL(A.acw.AHh));this.Jr.S(A.aaL(A.
fl.Af));this.Bn.Ln=[this,this.A34];this.HK.Sv=[this,this.AiN];this.HK.Ahf=[this,
this.AAt];this.ACK=A.aaL(A.fl.Af);this.Avk=A.aaL(A.fl.Ak);this.AbF.Aw(A.aaL(A.aci.
ARM));this.Init(aArg);},_Done:function(){this.__proto__=A.Core.P;this.Ad0._Done(
);this.Jr._Done();this.Bn._Done();this.HK._Done();this.AbF._Done();A.Core.P._Done.
call(this);},_ReInit:function(){A.Core.P._ReInit.call(this);this.Ad0._ReInit();this.
Jr._ReInit();this.Bn._ReInit();this.HK._ReInit();this.AbF._ReInit();this.Jr.S(A.
aaL(A.fl.Af));this.ArM(A.aaL(A.fl.Af));this.AwG(A.aaL(A.fl.Ak));this.CP();},_Mark:
function(D){var B;A.Core.P._Mark.call(this,D);if((B=this.Data)&&(B._cycle!=D))B.
_Mark(B._cycle=D);if((B=this.AD)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.ACK
)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Avk)&&(B._cycle!=D))B._Mark(B._cycle=
D);if((B=this.AbN)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Q)&&((B=B[0])._cycle
!=D))B._Mark(B._cycle=D);if((B=this.Ad0)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
Jr)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Bn)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.HK)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AbF)._cycle!=D)B._Mark(B._cycle=
D);},_className:"DropDown::DropDown"};C.AOe={AtZ:null,Bn:null,Bgh:function(G){var
B;(B=this.AtZ)?B[1].call(B[0],this):null;},_Init:function(aArg){A.Core.P._Init.call(
this,aArg);A.Core.Bn._Init.call(this.Bn={I:this},0);this.__proto__=C.AOe;this.H(
P4);this.Bn.AZ(0x3F);this.Bn.JR(Hm);this.Bn.Kr(Lu);this.Bn.DC(MF);this.Bn.DL(S4);
this.J(this.Bn,0);this.Bn.Av5=[this,this.Bgh];this.Bn.BO=[this,this.Bgh];},_Done:
function(){this.__proto__=A.Core.P;this.Bn._Done();A.Core.P._Done.call(this);},_ReInit:
function(){A.Core.P._ReInit.call(this);this.Bn._ReInit();},_Mark:function(D){var
B;A.Core.P._Mark.call(this,D);if((B=this.AtZ)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=
D);if((B=this.Bn)._cycle!=D)B._Mark(B._cycle=D);},_className:"DropDown::EventCatcher"
};
C._Init=function(){C.ACi.__proto__=A.Core.P;C.ANx.__proto__=A.Core.P;C.DT.__proto__=
A.Core.P;C.AOe.__proto__=A.Core.P;};C._ReInit=function(){};C.DH=function(D){};return C;
})();

/* VitalControl demonstration application, © Urban GmbH & Co.KG 2023 */