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
var Cd="Text";var BF=[0,0,100,24];var E4=[0,0,100,1];var Hm=[0,0];var IQ=[0,0,100
,120];var Ip=[100,0];var O1=[100,120];var P2=[0,120];var P3=[90,0,100,60];var CQ=[
0,0,0,0];var Fb=[0,0,240,40];var Lt=[240,0];var P4=[240,40];var JY=[0,40];var N_=[
210,0,240,40];var P5=[0,0,240,50];var ME=[240,50];var S5=[0,50];
C.VL={Avm:function(aIndex){return A.jV;},AqW:function(){return 0;},_Init:function(
aArg){this.__proto__=C.VL;A.h7++;},_Done:function(){this.__proto__=null;A.h7--;}
,_ReInit:function(){},_Mark:function(D){var B;if((B=this.I)&&(B._cycle!=D))B._Mark(
B._cycle=D);},I:null,_cycle:0,_observers:null,_className:"DropDown::DDData"};C.ACh={
B7:null,Background:null,Text:null,Bc:null,V:Cd,LQ:0xFF000000,A42:0xFF454545,A$j:
0,KS:0,Kf:0x12,I_:A.wg,Bk:function(aSize){var B;A.Core.P.Bk.call(this,aSize);this.
Text.H([0,0,(B=this.M)[2]-B[0],B[3]-B[1]]);this.Text.H([].concat(this.Text.M[0]+
this.I_[0],this.Text.M.slice(1,4)));this.Text.H(A.abN(this.Text.M,this.Text.M[2]-
this.I_[2]));this.Text.H(A.abP(this.Text.M,this.Text.M[1]+this.I_[1]));this.Text.
H([].concat(this.Text.M.slice(0,3),this.Text.M[3]-this.I_[3]));},Ai:function(Ae){
var B;A.Core.P.Ai.call(this,Ae);if(((Ae&0x20)===0x20)){this.Background.L(this.A42
);this.Text.L(this.A$j);}else{this.Background.L(this.LQ);this.Text.L(this.KS);}}
,Blm:function(E){this.V=E;this.Text.R(E);},Wx:function(E){this.LQ=E;this.Background.
L(E);},S:function(E){this.B7=E;this.Text.S(E);},A6:function(E){this.Kf=E;this.Text.
A6(E);},Hh:function(E){if(A.aaY(this.I_,E))return;this.I_=E;},_Init:function(aArg
){A.Core.P._Init.call(this,aArg);A.acg.AK._Init.call(this.Background={I:this},0);
A.acg.Text._Init.call(this.Text={I:this},0);A.acg.AK._Init.call(this.Bc={I:this}
,0);this.__proto__=C.ACh;this.H(BF);this.Background.AZ(0x3F);this.Background.H(BF
);this.Background.L(0xBE000000);this.Text.AZ(0x3F);this.Text.H(BF);this.Text.R(Cd
);this.Text.L(0xFFFFFFFF);this.Bc.AZ(0x1D);this.Bc.H(E4);this.Bc.L(0x9EFFFFFF);this.
J(this.Background,0);this.J(this.Text,0);this.J(this.Bc,0);this.Text.S(A.aaL(A.fl.
Ak));this.B7=A.aaL(A.fl.Af);},_Done:function(){this.__proto__=A.Core.P;this.Background.
_Done();this.Text._Done();this.Bc._Done();A.Core.P._Done.call(this);},_ReInit:function(
){A.Core.P._ReInit.call(this);this.Background._ReInit();this.Text._ReInit();this.
Bc._ReInit();this.Text.S(A.aaL(A.fl.Ak));this.S(A.aaL(A.fl.Af));},_Mark:function(
D){var B;A.Core.P._Mark.call(this,D);if((B=this.B7)&&(B._cycle!=D))B._Mark(B._cycle=
D);if((B=this.Background)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Text)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.Bc)._cycle!=D)B._Mark(B._cycle=D);},_className:
"DropDown::DDItem"};C.ANB={AEm:null,A9a:null,CM:null,H7:null,Bn:null,BU:null,IN:
null,Gp:0,AY:0,GK:0,AbN:0,ACy:false,A22:function(G){if(this.Bn.Jp>100){var Gd=this.
CM.A6w(this.Bn.H0);if(Gd<0)return;this.CM.GO(Gd);this.CM.HD(Gd,true,null,null);}
},BAp:function(G){var B;if(!this.Bn.NF){var Gd=this.CM.A6w(this.Bn.H0);if(Gd<0)return;
this.CM.GO(Gd);this.CM.HD(Gd,true,null,null);(B=this.AEm)?B[1].call(B[0],this):null;
}},AAt:function(G){this.Bn.Ar(true);},BmL:function(E){if(A.aa0(this.AEm,E))return;
this.AEm=E;},GO:function(E){this.Gp=E;this.CM.GO(E);},FH:function(){return this.
CM.Gp;},Bz3:function(G){if(this.ACy){var G8=A.abe(this.Bn.H0,this.Bn.NQ);if((G8[
1]>8)||(G8[1]<-8)){this.Ij().ANL(this.H7,Hm);this.Bn.Ar(false);}}},Ju:function(E
){this.AY=E;this.CM.Ju(E);},BmN:function(E){this.A9a=E;this.CM.Hg=E;},Ae3:function(
E){this.GK=E;this.CM.Ae3(E);},ASs:function(){return this.CM.GK;},BlF:function(E){
if(this.ACy===E)return;this.ACy=E;},Arx:function(){return this.CM.AY;},ArW:function(
E){if(this.AbN===E)return;this.AbN=E;},BAw:function(G){},Adt:function(G){var B;var
Vl=this.CM.M;var Atz=this.CM.AqU(0,this.CM.AY-1);var y1=(((Vl[1]-Atz[1])*(Vl[3]-
Vl[1]))/(Atz[3]-Atz[1]))|0;var y2=(((Vl[3]-Atz[1])*(Vl[3]-Vl[1]))/(Atz[3]-Atz[1]
))|0;if(y1<0)y1=0;if(y2>(Vl[3]-Vl[1]))y2=Vl[3]-Vl[1];this.IN.H([Vl[2]-10,y1+Vl[1
],Vl[2],y2+Vl[1]]);this.IN.Z(this.ACy);},_Init:function(aArg){A.Core.P._Init.call(
this,aArg);A.Core.CM._Init.call(this.CM={I:this},0);A.Core.H7._Init.call(this.H7={
I:this},0);A.Core.Bn._Init.call(this.Bn={I:this},0);A.acg.BU._Init.call(this.BU={
I:this},0);A.acg.AK._Init.call(this.IN={I:this},0);this.__proto__=C.ANB;this.H(IQ
);this.CM.AZ(0x3F);this.CM.H(IQ);this.CM.GO(0);this.CM.Ju(5);this.CM.NZ(C.ACh);this.
H7.AZ(0x3F);this.H7.H(IQ);this.H7.AGH=false;this.H7.A_Q=false;this.Bn.AZ(0x3F);this.
Bn.JQ(Hm);this.Bn.Kr(Ip);this.Bn.DC(O1);this.Bn.DM(P2);this.BU.AZ(0x3F);this.BU.
H(IQ);this.BU.L(A.jb.Text);this.IN.H(P3);this.IN.L(0xFF000000);this.J(this.CM,0);
this.J(this.H7,0);this.J(this.Bn,0);this.J(this.BU,0);this.J(this.IN,0);this.CM.
El=[this,this.Adt];this.CM.AwZ(this.H7);this.H7.AF0=[this,this.BAw];this.H7.Zn=[
this,this.AAt];this.Bn.ASc=[this,this.Bz3];this.Bn.D1=[this,this.A22];this.Bn.Ll=[
this,this.BAp];},_Done:function(){this.__proto__=A.Core.P;this.CM._Done();this.H7.
_Done();this.Bn._Done();this.BU._Done();this.IN._Done();A.Core.P._Done.call(this
);},_ReInit:function(){A.Core.P._ReInit.call(this);this.CM._ReInit();this.H7._ReInit(
);this.Bn._ReInit();this.BU._ReInit();this.IN._ReInit();},_Mark:function(D){var B;
A.Core.P._Mark.call(this,D);if((B=this.AEm)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=
D);if((B=this.A9a)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.CM)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.H7)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
Bn)._cycle!=D)B._Mark(B._cycle=D);if((B=this.BU)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.IN)._cycle!=D)B._Mark(B._cycle=D);},_className:"DropDown::DDItemList"};C.
DT={Data:null,AD:null,ACJ:null,Avi:null,AbM:null,Q:null,AdZ:null,Jr:null,Bn:null
,HK:null,AbE:null,AbN:100,GK:20,BbW:A.wg,A5n:0xFF252528,ANi:0xFF252528,ANn:0xFFF1EEEA
,A5o:0xFFFAFFFE,ANq:0xFFF8FDFF,ANj:0xFF0008C1,Azq:0,ANr:0xFF7EFEFF,ANK:-1,AB9:0xFF000000
,Bhe:0xFFFAFFFE,Bhf:0,CP:function(){this.Bi3(this);},Init:function(aArg){this.ASU(
this.A5n);this.ArO(this.ACJ);this.ASV(this.A5o);},Kk:function(CZ,aClip,aOffset,Cj
,aBlend){A.Core.P.Kk.call(this,CZ,aClip,aOffset,Cj,aBlend);if(!A.aaY(this.BbW,this.
M)){this.BbW=this.M;A.pe([this,this.BxL],this);}},Bk:function(aSize){var B;A.Core.
P.Bk.call(this,aSize);this.Jr.H([0,0,(B=this.M)[2]-B[0],B[3]-B[1]]);this.Jr.H([].
concat(this.Jr.M[0],this.Jr.M.slice(1,4)));this.Jr.H(A.abN(this.Jr.M,this.Jr.M[2
]-((B=this.AbE.M)[2]-B[0])));this.Jr.H(A.abP(this.Jr.M,this.Jr.M[1]));this.Jr.H([
].concat(this.Jr.M.slice(0,3),this.Jr.M[3]));},As:function(E){if(A.aaZ(this.Q,E)
)return;if(!!this.Q)A.z$([this,this.C2],this.Q,0);this.Q=E;if(!!E)A.zX([this,this.
C2],E,0);if(!!E)A.pe([this,this.C2],this);},A9z:function(E){if(this.Data===E)return;
this.Data=E;A.pe([this,this.BfM],this);},Bk8:function(G){var B;if(!this.AD)return;
var Gd=this.AD.CM.G1;var AaB=(C.ACh.isPrototypeOf(B=this.AD.CM.Ci)?B:null);if(!!
AaB){if(this.Data.AqW()>Gd){AaB.Blm(this.Data.Avm(Gd));AaB.Wx(this.ANi);AaB.A42=
this.ANj;AaB.A$j=this.ANr;AaB.S(this.Avi);AaB.KS=this.ANq;AaB.A6(0x12);AaB.Bc.L(
this.ANn);AaB.Hh(CQ);}AaB.H(A.abK(AaB.M,[(B=this.AD.CM.M)[2]-B[0],this.AD.CM.GK]
));}},BzL:function(G){var F;if(!!this.Q){(F=this.Q,F[2].call(F[0],this.AD.FH()));
A.abo(this.Q,0);}A.pe([this,this.A3Y],this);},A3Y:function(G){if(!this.AD){this.
Byo(this);if(!this.AD)return;this.HK.Cw=0;this.HK.B2=this.AD.AbN;this.AD.Ar(true
);}else{this.HK.Cw=this.AD.AbN;this.HK.B2=0;this.AD.Ar(false);}this.HK.Ar(true);
this.AD.BlF(this.AbN<(this.AD.ASs()*this.AD.Arx()));},Byo:function(G){var B;if(!
this.Data)return;this.AbM=A._NewObject(C.AOi,0);this.AD=A._NewObject(C.ANB,0);this.
AD.BmN([this,this.Bk8]);this.AD.BmL([this,this.BzL]);this.AD.Ae3(this.GK);this.AD.
Ju(this.Data.AqW());this.AD.IN.L(this.AB9);if(this.AbN>(this.AD.ASs()*this.AD.Arx(
)))this.ArW(this.AD.ASs()*this.AD.Arx());this.AD.ArW(this.AbN);this.AD.H7.FZ=[0,
this.AbN];this.AD.H(this.M);this.AD.Ar(false);this.AD.GO(this.Azq);var IA=this.Ij(
);if(!!IA){this.AbM.H([0,0,(B=IA.M)[2]-B[0],B[3]-B[1]]);this.AbM.AtY=[this,this.
A3Y];this.AbM.J(this.AD,0);IA.J(this.AbM,0);IA.ZE(this.AbM);IA.AMT(this.AbM);}},
ArW:function(E){if(this.AbN===E)return;this.AbN=E;if(this.ANK<0)this.ANK=E;},AAq:
function(G){var B;if(!this.AD||!this.Ij())return;var AJf=this.ByZ(this);this.AD.
H([].concat(AJf[0],this.AD.M.slice(1,4)));this.AD.H(A.abN(this.AD.M,AJf[2]));this.
AD.H(A.abP(this.AD.M,AJf[3]));this.AD.H([].concat(this.AD.M.slice(0,3),AJf[3]+this.
HK.A4));if((this.AD.M[3]>this.Ij().M[3])&&(this.AD.M[3]!==((B=this.Ij().M)[3]-B[
1])))this.AD.H([].concat(this.AD.M.slice(0,3),this.Ij().M[3]));if((this.AD.M[1]<
this.Ij().M[1])&&(this.AD.M[3]!==((B=this.Ij().M)[3]-B[1])))this.AD.H(A.abP(this.
AD.M,this.Ij().M[1]));},BfM:function(G){this.Jr.R(this.Data.Avm(this.Azq));},AiN:
function(G){if((!this.AD||!this.AbM)||!this.Ij())return;if(!this.AD.A8g()){this.
Ij().ACz(this.AbM);this.Ij().HN(this.AbM);this.AD=null;}},BxL:function(G){var B;
if(!!this.AD&&(((this.M[0]!==this.AD.M[0])||(this.M[2]!==this.AD.M[2]))||(this.M[
3]!==this.AD.M[1])))this.AD.H([this.M[0],this.M[3],this.M[2],this.M[3]+((B=this.
AD.M)[3]-B[1])]);},ArO:function(E){this.ACJ=E;this.Jr.S(E);},AwD:function(E){if(
this.Avi===E)return;this.Avi=E;},ASU:function(E){this.A5n=E;this.AdZ.L(E);},A9n:
function(E){if(this.ANi===E)return;this.ANi=E;},A9r:function(E){if(this.ANn===E)
return;this.ANn=E;},ASV:function(E){this.A5o=E;this.Jr.L(E);},A9s:function(E){if(
this.ANq===E)return;this.ANq=E;},A9o:function(E){if(this.ANj===E)return;this.ANj=
E;},C2:function(G){var F;if(!!this.Q){this.Azq=(F=this.Q,F[1].call(F[0]));if(!!this.
AD)this.AD.GO(this.Azq);this.BfM(this);}},ByZ:function(AoQ){var B;var B0=AoQ;var
AJe=AoQ.M;var AyY=Hm;while(!!B0){var Aaq=B0.FA;if(!B0.Ab&&(B0!==AoQ)){B0.Bj(AJe);
return A.abh([0,0,(B=AoQ.M)[2]-B[0],B[3]-B[1]],AyY);}if(!!Aaq){if(((B=Aaq.QJ)[0]>=
B[2])||(B[1]>=B[3])){A.we(B0,0);A.we(Aaq,0);}Aaq.QJ=A.wC(Aaq.QJ,AJe);}if(!((B0.U&
0x1)===0x1))return A.abh([0,0,(B=AoQ.M)[2]-B[0],B[3]-B[1]],AyY);if(B0===AoQ)AJe=
A.lb(A.abh(AJe,B0.M.slice(0,2)),B0.M);AyY=A.abf(AyY,B0.M.slice(0,2));B0=B0.Ab;}return A.
abh([0,0,(B=AoQ.M)[2]-B[0],B[3]-B[1]],AyY);},A9t:function(E){if(this.ANr===E)return;
this.ANr=E;},Bi3:function(G){this.ArW(this.ANK);if(!!this.AD&&!!this.AD.CM)this.
AD.CM.AbF(0,this.AD.CM.AY);if(!!this.Data)this.Jr.R(this.Data.Avm(this.Azq));},A9q:
function(E){if(this.AB9===E)return;this.AB9=E;if(!!this.AD)this.AD.IN.L(this.AB9
);},A9p:function(E){this.Bhe=E;this.AbE.L(E);},_Init:function(aArg){A.Core.P._Init.
call(this,aArg);A.acg.NO._Init.call(this.AdZ={I:this},0);A.acg.Text._Init.call(this.
Jr={I:this},0);A.Core.Bn._Init.call(this.Bn={I:this},0);A.acl.Gi._Init.call(this.
HK={I:this},0);A.acg.Ap._Init.call(this.AbE={I:this},0);this.__proto__=C.DT;this.
H(Fb);this.AdZ.AZ(0x3F);this.AdZ.H(Fb);this.AdZ.L(0xFF252528);this.Jr.AZ(0x3F);this.
Jr.H(Fb);this.Jr.R(A.jV);this.Bn.AZ(0x3F);this.Bn.JQ(Hm);this.Bn.Kr(Lt);this.Bn.
DC(P4);this.Bn.DM(JY);this.HK.HM(1);this.HK.Fm(250);this.AbE.AZ(0x3A);this.AbE.H(
N_);this.AbE.Cv(1);this.Bhf=A.jb.Text;this.J(this.AdZ,0);this.J(this.Jr,0);this.
J(this.Bn,0);this.J(this.AbE,0);this.AdZ.Aw(A.aaL(A.acw.AHg));this.Jr.S(A.aaL(A.
fl.Af));this.Bn.Ll=[this,this.A3Y];this.HK.Sx=[this,this.AiN];this.HK.Ahf=[this,
this.AAq];this.ACJ=A.aaL(A.fl.Af);this.Avi=A.aaL(A.fl.Ak);this.AbE.Aw(A.aaL(A.aci.
ARQ));this.Init(aArg);},_Done:function(){this.__proto__=A.Core.P;this.AdZ._Done(
);this.Jr._Done();this.Bn._Done();this.HK._Done();this.AbE._Done();A.Core.P._Done.
call(this);},_ReInit:function(){A.Core.P._ReInit.call(this);this.AdZ._ReInit();this.
Jr._ReInit();this.Bn._ReInit();this.HK._ReInit();this.AbE._ReInit();this.Jr.S(A.
aaL(A.fl.Af));this.ArO(A.aaL(A.fl.Af));this.AwD(A.aaL(A.fl.Ak));this.CP();},_Mark:
function(D){var B;A.Core.P._Mark.call(this,D);if((B=this.Data)&&(B._cycle!=D))B.
_Mark(B._cycle=D);if((B=this.AD)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.ACJ
)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Avi)&&(B._cycle!=D))B._Mark(B._cycle=
D);if((B=this.AbM)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Q)&&((B=B[0])._cycle
!=D))B._Mark(B._cycle=D);if((B=this.AdZ)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
Jr)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Bn)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.HK)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AbE)._cycle!=D)B._Mark(B._cycle=
D);},_className:"DropDown::DropDown"};C.AOi={AtY:null,Bn:null,Bf9:function(G){var
B;(B=this.AtY)?B[1].call(B[0],this):null;},_Init:function(aArg){A.Core.P._Init.call(
this,aArg);A.Core.Bn._Init.call(this.Bn={I:this},0);this.__proto__=C.AOi;this.H(
P5);this.Bn.AZ(0x3F);this.Bn.JQ(Hm);this.Bn.Kr(Lt);this.Bn.DC(ME);this.Bn.DM(S5);
this.J(this.Bn,0);this.Bn.Av2=[this,this.Bf9];this.Bn.BN=[this,this.Bf9];},_Done:
function(){this.__proto__=A.Core.P;this.Bn._Done();A.Core.P._Done.call(this);},_ReInit:
function(){A.Core.P._ReInit.call(this);this.Bn._ReInit();},_Mark:function(D){var
B;A.Core.P._Mark.call(this,D);if((B=this.AtY)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=
D);if((B=this.Bn)._cycle!=D)B._Mark(B._cycle=D);},_className:"DropDown::EventCatcher"
};
C._Init=function(){C.ACh.__proto__=A.Core.P;C.ANB.__proto__=A.Core.P;C.DT.__proto__=
A.Core.P;C.AOi.__proto__=A.Core.P;};C._ReInit=function(){};C.DH=function(D){};return C;
})();

/* VitalControl demonstration application, © Urban GmbH & Co.KG 2023 */