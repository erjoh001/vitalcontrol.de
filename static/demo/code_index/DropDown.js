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
);if(index.acq)throw new Error("The unit file 'DropDown.js' included twice!");index.
acq=(function(){var A=index;var C={};
var Ce="Text";var BD=[0,0,100,24];var E7=[0,0,100,1];var Hr=[0,0];var IV=[0,0,100
,120];var Is=[100,0];var O6=[100,120];var P_=[0,120];var P$=[90,0,100,60];var CQ=[
0,0,0,0];var Ff=[0,0,240,40];var L5=[240,0];var Qa=[240,40];var J6=[0,40];var Od=[
210,0,240,40];var Qb=[0,0,240,50];var ML=[240,50];var S$=[0,50];
C.VQ={Avz:function(aIndex){return A.jV;},AqX:function(){return 0;},_Init:function(
aArg){this.__proto__=C.VQ;A.h7++;},_Done:function(){this.__proto__=null;A.h7--;}
,_ReInit:function(){},_Mark:function(D){var B;if((B=this.I)&&(B._cycle!=D))B._Mark(
B._cycle=D);},I:null,_cycle:0,_observers:null,_className:"DropDown::DDData"};C.ACw={
B6:null,Background:null,Text:null,Bc:null,V:Ce,LU:0xFF000000,A5F:0xFF454545,A$4:
0,KV:0,Kl:0x12,Je:A.wg,Bl:function(aSize){var B;A.Core.P.Bl.call(this,aSize);this.
Text.H([0,0,(B=this.M)[2]-B[0],B[3]-B[1]]);this.Text.H([].concat(this.Text.M[0]+
this.Je[0],this.Text.M.slice(1,4)));this.Text.H(A.abN(this.Text.M,this.Text.M[2]-
this.Je[2]));this.Text.H(A.abP(this.Text.M,this.Text.M[1]+this.Je[1]));this.Text.
H([].concat(this.Text.M.slice(0,3),this.Text.M[3]-this.Je[3]));},Ai:function(Ae){
var B;A.Core.P.Ai.call(this,Ae);if(((Ae&0x20)===0x20)){this.Background.L(this.A5F
);this.Text.L(this.A$4);}else{this.Background.L(this.LU);this.Text.L(this.KV);}}
,Bmm:function(E){this.V=E;this.Text.R(E);},WF:function(E){this.LU=E;this.Background.
L(E);},S:function(E){this.B6=E;this.Text.S(E);},A6:function(E){this.Kl=E;this.Text.
A6(E);},Hn:function(E){if(A.aaY(this.Je,E))return;this.Je=E;},_Init:function(aArg
){A.Core.P._Init.call(this,aArg);A.acg.AL._Init.call(this.Background={I:this},0);
A.acg.Text._Init.call(this.Text={I:this},0);A.acg.AL._Init.call(this.Bc={I:this}
,0);this.__proto__=C.ACw;this.H(BD);this.Background.A0(0x3F);this.Background.H(BD
);this.Background.L(0xBE000000);this.Text.A0(0x3F);this.Text.H(BD);this.Text.R(Ce
);this.Text.L(0xFFFFFFFF);this.Bc.A0(0x1D);this.Bc.H(E7);this.Bc.L(0x9EFFFFFF);this.
J(this.Background,0);this.J(this.Text,0);this.J(this.Bc,0);this.Text.S(A.aaL(A.fl.
Ak));this.B6=A.aaL(A.fl.Af);},_Done:function(){this.__proto__=A.Core.P;this.Background.
_Done();this.Text._Done();this.Bc._Done();A.Core.P._Done.call(this);},_ReInit:function(
){A.Core.P._ReInit.call(this);this.Background._ReInit();this.Text._ReInit();this.
Bc._ReInit();this.Text.S(A.aaL(A.fl.Ak));this.S(A.aaL(A.fl.Af));},_Mark:function(
D){var B;A.Core.P._Mark.call(this,D);if((B=this.B6)&&(B._cycle!=D))B._Mark(B._cycle=
D);if((B=this.Background)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Text)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.Bc)._cycle!=D)B._Mark(B._cycle=D);},_className:
"DropDown::DDItem"};C.ANJ={AEA:null,A9O:null,CM:null,H_:null,Bn:null,BU:null,IS:
null,Gt:0,AY:0,GO:0,AbN:0,ACM:false,A3B:function(G){if(this.Bn.Jv>100){var Gg=this.
CM.A66(this.Bn.H1);if(Gg<0)return;this.CM.GT(Gg);this.CM.HI(Gg,true,null,null);}
},BBn:function(G){var B;if(!this.Bn.NK){var Gg=this.CM.A66(this.Bn.H1);if(Gg<0)return;
this.CM.GT(Gg);this.CM.HI(Gg,true,null,null);(B=this.AEA)?B[1].call(B[0],this):null;
}},AAF:function(G){this.Bn.Ar(true);},BnK:function(E){if(A.aa0(this.AEA,E))return;
this.AEA=E;},GT:function(E){this.Gt=E;this.CM.GT(E);},FN:function(){return this.
CM.Gt;},BAY:function(G){if(this.ACM){var Hc=A.abe(this.Bn.H1,this.Bn.NV);if((Hc[
1]>8)||(Hc[1]<-8)){this.Im().ANT(this.H_,Hr);this.Bn.Ar(false);}}},JA:function(E
){this.AY=E;this.CM.JA(E);},BnM:function(E){this.A9O=E;this.CM.Hm=E;},Ae8:function(
E){this.GO=E;this.CM.Ae8(E);},ASL:function(){return this.CM.GO;},BmE:function(E){
if(this.ACM===E)return;this.ACM=E;},Arz:function(){return this.CM.AY;},ArY:function(
E){if(this.AbN===E)return;this.AbN=E;},BBu:function(G){},Adz:function(G){var B;var
Vq=this.CM.M;var AtJ=this.CM.AqV(0,this.CM.AY-1);var y1=(((Vq[1]-AtJ[1])*(Vq[3]-
Vq[1]))/(AtJ[3]-AtJ[1]))|0;var y2=(((Vq[3]-AtJ[1])*(Vq[3]-Vq[1]))/(AtJ[3]-AtJ[1]
))|0;if(y1<0)y1=0;if(y2>(Vq[3]-Vq[1]))y2=Vq[3]-Vq[1];this.IS.H([Vq[2]-10,y1+Vq[1
],Vq[2],y2+Vq[1]]);this.IS.Z(this.ACM);},_Init:function(aArg){A.Core.P._Init.call(
this,aArg);A.Core.CM._Init.call(this.CM={I:this},0);A.Core.H_._Init.call(this.H_={
I:this},0);A.Core.Bn._Init.call(this.Bn={I:this},0);A.acg.BU._Init.call(this.BU={
I:this},0);A.acg.AL._Init.call(this.IS={I:this},0);this.__proto__=C.ANJ;this.H(IV
);this.CM.A0(0x3F);this.CM.H(IV);this.CM.GT(0);this.CM.JA(5);this.CM.N4(C.ACw);this.
H_.A0(0x3F);this.H_.H(IV);this.H_.AGU=false;this.H_.A$y=false;this.Bn.A0(0x3F);this.
Bn.JY(Hr);this.Bn.Ky(Is);this.Bn.DC(O6);this.Bn.DM(P_);this.BU.A0(0x3F);this.BU.
H(IV);this.BU.L(A.jb.Text);this.IS.H(P$);this.IS.L(0xFF000000);this.J(this.CM,0);
this.J(this.H_,0);this.J(this.Bn,0);this.J(this.BU,0);this.J(this.IS,0);this.CM.
Em=[this,this.Adz];this.CM.Aw_(this.H_);this.H_.AGc=[this,this.BBu];this.H_.Zn=[
this,this.AAF];this.Bn.ASw=[this,this.BAY];this.Bn.D1=[this,this.A3B];this.Bn.Lq=[
this,this.BBn];},_Done:function(){this.__proto__=A.Core.P;this.CM._Done();this.H_.
_Done();this.Bn._Done();this.BU._Done();this.IS._Done();A.Core.P._Done.call(this
);},_ReInit:function(){A.Core.P._ReInit.call(this);this.CM._ReInit();this.H_._ReInit(
);this.Bn._ReInit();this.BU._ReInit();this.IS._ReInit();},_Mark:function(D){var B;
A.Core.P._Mark.call(this,D);if((B=this.AEA)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=
D);if((B=this.A9O)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.CM)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.H_)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
Bn)._cycle!=D)B._Mark(B._cycle=D);if((B=this.BU)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.IS)._cycle!=D)B._Mark(B._cycle=D);},_className:"DropDown::DDItemList"};C.
DT={Data:null,AD:null,ACX:null,Avu:null,AbM:null,Q:null,Ad4:null,Jx:null,Bn:null
,HN:null,AbE:null,AbN:100,GO:20,BcK:A.wg,A52:0xFF252528,ANq:0xFF252528,ANv:0xFFF1EEEA
,A53:0xFFFAFFFE,ANy:0xFFF8FDFF,ANr:0xFF0008C1,AzD:0,ANz:0xFF7EFEFF,ANS:-1,ACm:0xFF000000
,Bh5:0xFFFAFFFE,Bh6:0,CP:function(){this.BjY(this);},Init:function(aArg){this.ATc(
this.A52);this.ArQ(this.ACX);this.ATd(this.A53);},Kq:function(CZ,aClip,aOffset,Ck
,aBlend){A.Core.P.Kq.call(this,CZ,aClip,aOffset,Ck,aBlend);if(!A.aaY(this.BcK,this.
M)){this.BcK=this.M;A.pe([this,this.ByE],this);}},Bl:function(aSize){var B;A.Core.
P.Bl.call(this,aSize);this.Jx.H([0,0,(B=this.M)[2]-B[0],B[3]-B[1]]);this.Jx.H([].
concat(this.Jx.M[0],this.Jx.M.slice(1,4)));this.Jx.H(A.abN(this.Jx.M,this.Jx.M[2
]-((B=this.AbE.M)[2]-B[0])));this.Jx.H(A.abP(this.Jx.M,this.Jx.M[1]));this.Jx.H([
].concat(this.Jx.M.slice(0,3),this.Jx.M[3]));},Au:function(E){if(A.aaZ(this.Q,E)
)return;if(!!this.Q)A.z$([this,this.C5],this.Q,0);this.Q=E;if(!!E)A.zX([this,this.
C5],E,0);if(!!E)A.pe([this,this.C5],this);},A_b:function(E){if(this.Data===E)return;
this.Data=E;A.pe([this,this.BgB],this);},Bl8:function(G){var B;if(!this.AD)return;
var Gg=this.AD.CM.G6;var AaB=(C.ACw.isPrototypeOf(B=this.AD.CM.Cj)?B:null);if(!!
AaB){if(this.Data.AqX()>Gg){AaB.Bmm(this.Data.Avz(Gg));AaB.WF(this.ANq);AaB.A5F=
this.ANr;AaB.A$4=this.ANz;AaB.S(this.Avu);AaB.KV=this.ANy;AaB.A6(0x12);AaB.Bc.L(
this.ANv);AaB.Hn(CQ);}AaB.H(A.abK(AaB.M,[(B=this.AD.CM.M)[2]-B[0],this.AD.CM.GO]
));}},BAF:function(G){var F;if(!!this.Q){(F=this.Q,F[2].call(F[0],this.AD.FN()));
A.abo(this.Q,0);}A.pe([this,this.A4z],this);},A4z:function(G){if(!this.AD){this.
Bzf(this);if(!this.AD)return;this.HN.Cx=0;this.HN.B2=this.AD.AbN;this.AD.Ar(true
);}else{this.HN.Cx=this.AD.AbN;this.HN.B2=0;this.AD.Ar(false);}this.HN.Ar(true);
this.AD.BmE(this.AbN<(this.AD.ASL()*this.AD.Arz()));},Bzf:function(G){var B;if(!
this.Data)return;this.AbM=A._NewObject(C.AOp,0);this.AD=A._NewObject(C.ANJ,0);this.
AD.BnM([this,this.Bl8]);this.AD.BnK([this,this.BAF]);this.AD.Ae8(this.GO);this.AD.
JA(this.Data.AqX());this.AD.IS.L(this.ACm);if(this.AbN>(this.AD.ASL()*this.AD.Arz(
)))this.ArY(this.AD.ASL()*this.AD.Arz());this.AD.ArY(this.AbN);this.AD.H_.F_=[0,
this.AbN];this.AD.H(this.M);this.AD.Ar(false);this.AD.GT(this.AzD);var IF=this.Im(
);if(!!IF){this.AbM.H([0,0,(B=IF.M)[2]-B[0],B[3]-B[1]]);this.AbM.At9=[this,this.
A4z];this.AbM.J(this.AD,0);IF.J(this.AbM,0);IF.ZF(this.AbM);IF.AM0(this.AbM);}},
ArY:function(E){if(this.AbN===E)return;this.AbN=E;if(this.ANS<0)this.ANS=E;},AAC:
function(G){var B;if(!this.AD||!this.Im())return;var AJo=this.BzR(this);this.AD.
H([].concat(AJo[0],this.AD.M.slice(1,4)));this.AD.H(A.abN(this.AD.M,AJo[2]));this.
AD.H(A.abP(this.AD.M,AJo[3]));this.AD.H([].concat(this.AD.M.slice(0,3),AJo[3]+this.
HN.A5));if((this.AD.M[3]>this.Im().M[3])&&(this.AD.M[3]!==((B=this.Im().M)[3]-B[
1])))this.AD.H([].concat(this.AD.M.slice(0,3),this.Im().M[3]));if((this.AD.M[1]<
this.Im().M[1])&&(this.AD.M[3]!==((B=this.Im().M)[3]-B[1])))this.AD.H(A.abP(this.
AD.M,this.Im().M[1]));},BgB:function(G){this.Jx.R(this.Data.Avz(this.AzD));},AiQ:
function(G){if((!this.AD||!this.AbM)||!this.Im())return;if(!this.AD.A8T()){this.
Im().ACN(this.AbM);this.Im().HP(this.AbM);this.AD=null;}},ByE:function(G){var B;
if(!!this.AD&&(((this.M[0]!==this.AD.M[0])||(this.M[2]!==this.AD.M[2]))||(this.M[
3]!==this.AD.M[1])))this.AD.H([this.M[0],this.M[3],this.M[2],this.M[3]+((B=this.
AD.M)[3]-B[1])]);},ArQ:function(E){this.ACX=E;this.Jx.S(E);},AwO:function(E){if(
this.Avu===E)return;this.Avu=E;},ATc:function(E){this.A52=E;this.Ad4.L(E);},A91:
function(E){if(this.ANq===E)return;this.ANq=E;},A95:function(E){if(this.ANv===E)
return;this.ANv=E;},ATd:function(E){this.A53=E;this.Jx.L(E);},A96:function(E){if(
this.ANy===E)return;this.ANy=E;},A92:function(E){if(this.ANr===E)return;this.ANr=
E;},C5:function(G){var F;if(!!this.Q){this.AzD=(F=this.Q,F[1].call(F[0]));if(!!this.
AD)this.AD.GT(this.AzD);this.BgB(this);}},BzR:function(AoR){var B;var B0=AoR;var
AJn=AoR.M;var Ay$=Hr;while(!!B0){var Aaq=B0.FG;if(!B0.Ab&&(B0!==AoR)){B0.Bj(AJn);
return A.abh([0,0,(B=AoR.M)[2]-B[0],B[3]-B[1]],Ay$);}if(!!Aaq){if(((B=Aaq.QO)[0]>=
B[2])||(B[1]>=B[3])){A.we(B0,0);A.we(Aaq,0);}Aaq.QO=A.wC(Aaq.QO,AJn);}if(!((B0.U&
0x1)===0x1))return A.abh([0,0,(B=AoR.M)[2]-B[0],B[3]-B[1]],Ay$);if(B0===AoR)AJn=
A.lb(A.abh(AJn,B0.M.slice(0,2)),B0.M);Ay$=A.abf(Ay$,B0.M.slice(0,2));B0=B0.Ab;}return A.
abh([0,0,(B=AoR.M)[2]-B[0],B[3]-B[1]],Ay$);},A97:function(E){if(this.ANz===E)return;
this.ANz=E;},BjY:function(G){this.ArY(this.ANS);if(!!this.AD&&!!this.AD.CM)this.
AD.CM.AbF(0,this.AD.CM.AY);if(!!this.Data)this.Jx.R(this.Data.Avz(this.AzD));},A94:
function(E){if(this.ACm===E)return;this.ACm=E;if(!!this.AD)this.AD.IS.L(this.ACm
);},A93:function(E){this.Bh5=E;this.AbE.L(E);},_Init:function(aArg){A.Core.P._Init.
call(this,aArg);A.acg.NU._Init.call(this.Ad4={I:this},0);A.acg.Text._Init.call(this.
Jx={I:this},0);A.Core.Bn._Init.call(this.Bn={I:this},0);A.acl.Gm._Init.call(this.
HN={I:this},0);A.acg.Ap._Init.call(this.AbE={I:this},0);this.__proto__=C.DT;this.
H(Ff);this.Ad4.A0(0x3F);this.Ad4.H(Ff);this.Ad4.L(0xFF252528);this.Jx.A0(0x3F);this.
Jx.H(Ff);this.Jx.R(A.jV);this.Bn.A0(0x3F);this.Bn.JY(Hr);this.Bn.Ky(L5);this.Bn.
DC(Qa);this.Bn.DM(J6);this.HN.HO(1);this.HN.Fr(250);this.AbE.A0(0x3A);this.AbE.H(
Od);this.AbE.Cv(1);this.Bh6=A.jb.Text;this.J(this.Ad4,0);this.J(this.Jx,0);this.
J(this.Bn,0);this.J(this.AbE,0);this.Ad4.Ax(A.aaL(A.acw.AHt));this.Jx.S(A.aaL(A.
fl.Af));this.Bn.Lq=[this,this.A4z];this.HN.SC=[this,this.AiQ];this.HN.Ahp=[this,
this.AAC];this.ACX=A.aaL(A.fl.Af);this.Avu=A.aaL(A.fl.Ak);this.AbE.Ax(A.aaL(A.aci.
AR_));this.Init(aArg);},_Done:function(){this.__proto__=A.Core.P;this.Ad4._Done(
);this.Jx._Done();this.Bn._Done();this.HN._Done();this.AbE._Done();A.Core.P._Done.
call(this);},_ReInit:function(){A.Core.P._ReInit.call(this);this.Ad4._ReInit();this.
Jx._ReInit();this.Bn._ReInit();this.HN._ReInit();this.AbE._ReInit();this.Jx.S(A.
aaL(A.fl.Af));this.ArQ(A.aaL(A.fl.Af));this.AwO(A.aaL(A.fl.Ak));this.CP();},_Mark:
function(D){var B;A.Core.P._Mark.call(this,D);if((B=this.Data)&&(B._cycle!=D))B.
_Mark(B._cycle=D);if((B=this.AD)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.ACX
)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Avu)&&(B._cycle!=D))B._Mark(B._cycle=
D);if((B=this.AbM)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Q)&&((B=B[0])._cycle
!=D))B._Mark(B._cycle=D);if((B=this.Ad4)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
Jx)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Bn)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.HN)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AbE)._cycle!=D)B._Mark(B._cycle=
D);},_className:"DropDown::DropDown"};C.AOp={At9:null,Bn:null,BgZ:function(G){var
B;(B=this.At9)?B[1].call(B[0],this):null;},_Init:function(aArg){A.Core.P._Init.call(
this,aArg);A.Core.Bn._Init.call(this.Bn={I:this},0);this.__proto__=C.AOp;this.H(
Qb);this.Bn.A0(0x3F);this.Bn.JY(Hr);this.Bn.Ky(L5);this.Bn.DC(ML);this.Bn.DM(S$);
this.J(this.Bn,0);this.Bn.Awb=[this,this.BgZ];this.Bn.BL=[this,this.BgZ];},_Done:
function(){this.__proto__=A.Core.P;this.Bn._Done();A.Core.P._Done.call(this);},_ReInit:
function(){A.Core.P._ReInit.call(this);this.Bn._ReInit();},_Mark:function(D){var
B;A.Core.P._Mark.call(this,D);if((B=this.At9)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=
D);if((B=this.Bn)._cycle!=D)B._Mark(B._cycle=D);},_className:"DropDown::EventCatcher"
};
C._Init=function(){C.ACw.__proto__=A.Core.P;C.ANJ.__proto__=A.Core.P;C.DT.__proto__=
A.Core.P;C.AOp.__proto__=A.Core.P;};C._ReInit=function(){};C.DH=function(D){};return C;
})();

/* VitalControl demonstration application, © Urban GmbH & Co.KG 2023 */