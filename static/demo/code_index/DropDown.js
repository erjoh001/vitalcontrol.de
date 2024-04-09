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
var Ce="Text";var BD=[0,0,100,24];var E6=[0,0,100,1];var Hr=[0,0];var IU=[0,0,100
,120];var Is=[100,0];var O4=[100,120];var P_=[0,120];var P$=[90,0,100,60];var CQ=[
0,0,0,0];var Ff=[0,0,240,40];var L3=[240,0];var Qa=[240,40];var J3=[0,40];var Ob=[
210,0,240,40];var Qb=[0,0,240,50];var MJ=[240,50];var S_=[0,50];
C.VP={Avx:function(aIndex){return A.jV;},AqV:function(){return 0;},_Init:function(
aArg){this.__proto__=C.VP;A.h7++;},_Done:function(){this.__proto__=null;A.h7--;}
,_ReInit:function(){},_Mark:function(D){var B;if((B=this.I)&&(B._cycle!=D))B._Mark(
B._cycle=D);},I:null,_cycle:0,_observers:null,_className:"DropDown::DDData"};C.ACs={
B6:null,Background:null,Text:null,Bc:null,V:Ce,LS:0xFF000000,A5x:0xFF454545,A$U:
0,KT:0,Kj:0x12,Jc:A.wg,Bl:function(aSize){var B;A.Core.P.Bl.call(this,aSize);this.
Text.H([0,0,(B=this.M)[2]-B[0],B[3]-B[1]]);this.Text.H([].concat(this.Text.M[0]+
this.Jc[0],this.Text.M.slice(1,4)));this.Text.H(A.abN(this.Text.M,this.Text.M[2]-
this.Jc[2]));this.Text.H(A.abP(this.Text.M,this.Text.M[1]+this.Jc[1]));this.Text.
H([].concat(this.Text.M.slice(0,3),this.Text.M[3]-this.Jc[3]));},Ai:function(Ae){
var B;A.Core.P.Ai.call(this,Ae);if(((Ae&0x20)===0x20)){this.Background.L(this.A5x
);this.Text.L(this.A$U);}else{this.Background.L(this.LS);this.Text.L(this.KT);}}
,Bmd:function(E){this.V=E;this.Text.R(E);},WC:function(E){this.LS=E;this.Background.
L(E);},S:function(E){this.B6=E;this.Text.S(E);},A6:function(E){this.Kj=E;this.Text.
A6(E);},Hn:function(E){if(A.aaY(this.Jc,E))return;this.Jc=E;},_Init:function(aArg
){A.Core.P._Init.call(this,aArg);A.acg.AL._Init.call(this.Background={I:this},0);
A.acg.Text._Init.call(this.Text={I:this},0);A.acg.AL._Init.call(this.Bc={I:this}
,0);this.__proto__=C.ACs;this.H(BD);this.Background.AZ(0x3F);this.Background.H(BD
);this.Background.L(0xBE000000);this.Text.AZ(0x3F);this.Text.H(BD);this.Text.R(Ce
);this.Text.L(0xFFFFFFFF);this.Bc.AZ(0x1D);this.Bc.H(E6);this.Bc.L(0x9EFFFFFF);this.
J(this.Background,0);this.J(this.Text,0);this.J(this.Bc,0);this.Text.S(A.aaL(A.fl.
Ak));this.B6=A.aaL(A.fl.Af);},_Done:function(){this.__proto__=A.Core.P;this.Background.
_Done();this.Text._Done();this.Bc._Done();A.Core.P._Done.call(this);},_ReInit:function(
){A.Core.P._ReInit.call(this);this.Background._ReInit();this.Text._ReInit();this.
Bc._ReInit();this.Text.S(A.aaL(A.fl.Ak));this.S(A.aaL(A.fl.Af));},_Mark:function(
D){var B;A.Core.P._Mark.call(this,D);if((B=this.B6)&&(B._cycle!=D))B._Mark(B._cycle=
D);if((B=this.Background)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Text)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.Bc)._cycle!=D)B._Mark(B._cycle=D);},_className:
"DropDown::DDItem"};C.ANH={AEw:null,A9E:null,CM:null,H9:null,Bn:null,BU:null,IR:
null,Gt:0,AY:0,GO:0,AbL:0,ACI:false,A3u:function(G){if(this.Bn.Jt>100){var Gg=this.
CM.A6X(this.Bn.H0);if(Gg<0)return;this.CM.GT(Gg);this.CM.HI(Gg,true,null,null);}
},BBl:function(G){var B;if(!this.Bn.NJ){var Gg=this.CM.A6X(this.Bn.H0);if(Gg<0)return;
this.CM.GT(Gg);this.CM.HI(Gg,true,null,null);(B=this.AEw)?B[1].call(B[0],this):null;
}},AAC:function(G){this.Bn.Ar(true);},BnB:function(E){if(A.aa0(this.AEw,E))return;
this.AEw=E;},GT:function(E){this.Gt=E;this.CM.GT(E);},FN:function(){return this.
CM.Gt;},BAW:function(G){if(this.ACI){var Hc=A.abe(this.Bn.H0,this.Bn.NU);if((Hc[
1]>8)||(Hc[1]<-8)){this.Im().ANR(this.H9,Hr);this.Bn.Ar(false);}}},Jy:function(E
){this.AY=E;this.CM.Jy(E);},BnD:function(E){this.A9E=E;this.CM.Hm=E;},Ae8:function(
E){this.GO=E;this.CM.Ae8(E);},ASJ:function(){return this.CM.GO;},Bmv:function(E){
if(this.ACI===E)return;this.ACI=E;},Arx:function(){return this.CM.AY;},ArW:function(
E){if(this.AbL===E)return;this.AbL=E;},BBs:function(G){},Adz:function(G){var B;var
Vp=this.CM.M;var AtH=this.CM.AqT(0,this.CM.AY-1);var y1=(((Vp[1]-AtH[1])*(Vp[3]-
Vp[1]))/(AtH[3]-AtH[1]))|0;var y2=(((Vp[3]-AtH[1])*(Vp[3]-Vp[1]))/(AtH[3]-AtH[1]
))|0;if(y1<0)y1=0;if(y2>(Vp[3]-Vp[1]))y2=Vp[3]-Vp[1];this.IR.H([Vp[2]-10,y1+Vp[1
],Vp[2],y2+Vp[1]]);this.IR.Z(this.ACI);},_Init:function(aArg){A.Core.P._Init.call(
this,aArg);A.Core.CM._Init.call(this.CM={I:this},0);A.Core.H9._Init.call(this.H9={
I:this},0);A.Core.Bn._Init.call(this.Bn={I:this},0);A.acg.BU._Init.call(this.BU={
I:this},0);A.acg.AL._Init.call(this.IR={I:this},0);this.__proto__=C.ANH;this.H(IU
);this.CM.AZ(0x3F);this.CM.H(IU);this.CM.GT(0);this.CM.Jy(5);this.CM.N2(C.ACs);this.
H9.AZ(0x3F);this.H9.H(IU);this.H9.AGQ=false;this.H9.A$o=false;this.Bn.AZ(0x3F);this.
Bn.JV(Hr);this.Bn.Kv(Is);this.Bn.DC(O4);this.Bn.DM(P_);this.BU.AZ(0x3F);this.BU.
H(IU);this.BU.L(A.jb.Text);this.IR.H(P$);this.IR.L(0xFF000000);this.J(this.CM,0);
this.J(this.H9,0);this.J(this.Bn,0);this.J(this.BU,0);this.J(this.IR,0);this.CM.
Em=[this,this.Adz];this.CM.Aw8(this.H9);this.H9.AF_=[this,this.BBs];this.H9.Zl=[
this,this.AAC];this.Bn.ASu=[this,this.BAW];this.Bn.D1=[this,this.A3u];this.Bn.Lo=[
this,this.BBl];},_Done:function(){this.__proto__=A.Core.P;this.CM._Done();this.H9.
_Done();this.Bn._Done();this.BU._Done();this.IR._Done();A.Core.P._Done.call(this
);},_ReInit:function(){A.Core.P._ReInit.call(this);this.CM._ReInit();this.H9._ReInit(
);this.Bn._ReInit();this.BU._ReInit();this.IR._ReInit();},_Mark:function(D){var B;
A.Core.P._Mark.call(this,D);if((B=this.AEw)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=
D);if((B=this.A9E)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.CM)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.H9)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
Bn)._cycle!=D)B._Mark(B._cycle=D);if((B=this.BU)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.IR)._cycle!=D)B._Mark(B._cycle=D);},_className:"DropDown::DDItemList"};C.
DT={Data:null,AD:null,ACT:null,Avs:null,AbK:null,Q:null,Ad4:null,Jv:null,Bn:null
,HM:null,AbC:null,AbL:100,GO:20,BcA:A.wg,A5U:0xFF252528,ANo:0xFF252528,ANt:0xFFF1EEEA
,A5V:0xFFFAFFFE,ANw:0xFFF8FDFF,ANp:0xFF0008C1,AzA:0,ANx:0xFF7EFEFF,ANQ:-1,ACi:0xFF000000
,BhU:0xFFFAFFFE,BhV:0,CP:function(){this.BjP(this);},Init:function(aArg){this.ATa(
this.A5U);this.ArO(this.ACT);this.ATb(this.A5V);},Ko:function(CY,aClip,aOffset,Ck
,aBlend){A.Core.P.Ko.call(this,CY,aClip,aOffset,Ck,aBlend);if(!A.aaY(this.BcA,this.
M)){this.BcA=this.M;A.pe([this,this.ByC],this);}},Bl:function(aSize){var B;A.Core.
P.Bl.call(this,aSize);this.Jv.H([0,0,(B=this.M)[2]-B[0],B[3]-B[1]]);this.Jv.H([].
concat(this.Jv.M[0],this.Jv.M.slice(1,4)));this.Jv.H(A.abN(this.Jv.M,this.Jv.M[2
]-((B=this.AbC.M)[2]-B[0])));this.Jv.H(A.abP(this.Jv.M,this.Jv.M[1]));this.Jv.H([
].concat(this.Jv.M.slice(0,3),this.Jv.M[3]));},Au:function(E){if(A.aaZ(this.Q,E)
)return;if(!!this.Q)A.z$([this,this.C4],this.Q,0);this.Q=E;if(!!E)A.zX([this,this.
C4],E,0);if(!!E)A.pe([this,this.C4],this);},A93:function(E){if(this.Data===E)return;
this.Data=E;A.pe([this,this.Bgq],this);},BlZ:function(G){var B;if(!this.AD)return;
var Gg=this.AD.CM.G6;var Aay=(C.ACs.isPrototypeOf(B=this.AD.CM.Cj)?B:null);if(!!
Aay){if(this.Data.AqV()>Gg){Aay.Bmd(this.Data.Avx(Gg));Aay.WC(this.ANo);Aay.A5x=
this.ANp;Aay.A$U=this.ANx;Aay.S(this.Avs);Aay.KT=this.ANw;Aay.A6(0x12);Aay.Bc.L(
this.ANt);Aay.Hn(CQ);}Aay.H(A.abK(Aay.M,[(B=this.AD.CM.M)[2]-B[0],this.AD.CM.GO]
));}},BAD:function(G){var F;if(!!this.Q){(F=this.Q,F[2].call(F[0],this.AD.FN()));
A.abo(this.Q,0);}A.pe([this,this.A4s],this);},A4s:function(G){if(!this.AD){this.
Bzd(this);if(!this.AD)return;this.HM.Cx=0;this.HM.B2=this.AD.AbL;this.AD.Ar(true
);}else{this.HM.Cx=this.AD.AbL;this.HM.B2=0;this.AD.Ar(false);}this.HM.Ar(true);
this.AD.Bmv(this.AbL<(this.AD.ASJ()*this.AD.Arx()));},Bzd:function(G){var B;if(!
this.Data)return;this.AbK=A._NewObject(C.AOn,0);this.AD=A._NewObject(C.ANH,0);this.
AD.BnD([this,this.BlZ]);this.AD.BnB([this,this.BAD]);this.AD.Ae8(this.GO);this.AD.
Jy(this.Data.AqV());this.AD.IR.L(this.ACi);if(this.AbL>(this.AD.ASJ()*this.AD.Arx(
)))this.ArW(this.AD.ASJ()*this.AD.Arx());this.AD.ArW(this.AbL);this.AD.H9.F_=[0,
this.AbL];this.AD.H(this.M);this.AD.Ar(false);this.AD.GT(this.AzA);var IE=this.Im(
);if(!!IE){this.AbK.H([0,0,(B=IE.M)[2]-B[0],B[3]-B[1]]);this.AbK.At7=[this,this.
A4s];this.AbK.J(this.AD,0);IE.J(this.AbK,0);IE.ZD(this.AbK);IE.AMY(this.AbK);}},
ArW:function(E){if(this.AbL===E)return;this.AbL=E;if(this.ANQ<0)this.ANQ=E;},AAz:
function(G){var B;if(!this.AD||!this.Im())return;var AJk=this.BzP(this);this.AD.
H([].concat(AJk[0],this.AD.M.slice(1,4)));this.AD.H(A.abN(this.AD.M,AJk[2]));this.
AD.H(A.abP(this.AD.M,AJk[3]));this.AD.H([].concat(this.AD.M.slice(0,3),AJk[3]+this.
HM.A5));if((this.AD.M[3]>this.Im().M[3])&&(this.AD.M[3]!==((B=this.Im().M)[3]-B[
1])))this.AD.H([].concat(this.AD.M.slice(0,3),this.Im().M[3]));if((this.AD.M[1]<
this.Im().M[1])&&(this.AD.M[3]!==((B=this.Im().M)[3]-B[1])))this.AD.H(A.abP(this.
AD.M,this.Im().M[1]));},Bgq:function(G){this.Jv.R(this.Data.Avx(this.AzA));},AiQ:
function(G){if((!this.AD||!this.AbK)||!this.Im())return;if(!this.AD.A8J()){this.
Im().ACJ(this.AbK);this.Im().HO(this.AbK);this.AD=null;}},ByC:function(G){var B;
if(!!this.AD&&(((this.M[0]!==this.AD.M[0])||(this.M[2]!==this.AD.M[2]))||(this.M[
3]!==this.AD.M[1])))this.AD.H([this.M[0],this.M[3],this.M[2],this.M[3]+((B=this.
AD.M)[3]-B[1])]);},ArO:function(E){this.ACT=E;this.Jv.S(E);},AwM:function(E){if(
this.Avs===E)return;this.Avs=E;},ATa:function(E){this.A5U=E;this.Ad4.L(E);},A9R:
function(E){if(this.ANo===E)return;this.ANo=E;},A9V:function(E){if(this.ANt===E)
return;this.ANt=E;},ATb:function(E){this.A5V=E;this.Jv.L(E);},A9W:function(E){if(
this.ANw===E)return;this.ANw=E;},A9S:function(E){if(this.ANp===E)return;this.ANp=
E;},C4:function(G){var F;if(!!this.Q){this.AzA=(F=this.Q,F[1].call(F[0]));if(!!this.
AD)this.AD.GT(this.AzA);this.Bgq(this);}},BzP:function(AoP){var B;var B0=AoP;var
AJj=AoP.M;var Ay8=Hr;while(!!B0){var Aan=B0.FG;if(!B0.Ab&&(B0!==AoP)){B0.Bj(AJj);
return A.abh([0,0,(B=AoP.M)[2]-B[0],B[3]-B[1]],Ay8);}if(!!Aan){if(((B=Aan.QO)[0]>=
B[2])||(B[1]>=B[3])){A.we(B0,0);A.we(Aan,0);}Aan.QO=A.wC(Aan.QO,AJj);}if(!((B0.U&
0x1)===0x1))return A.abh([0,0,(B=AoP.M)[2]-B[0],B[3]-B[1]],Ay8);if(B0===AoP)AJj=
A.lb(A.abh(AJj,B0.M.slice(0,2)),B0.M);Ay8=A.abf(Ay8,B0.M.slice(0,2));B0=B0.Ab;}return A.
abh([0,0,(B=AoP.M)[2]-B[0],B[3]-B[1]],Ay8);},A9X:function(E){if(this.ANx===E)return;
this.ANx=E;},BjP:function(G){this.ArW(this.ANQ);if(!!this.AD&&!!this.AD.CM)this.
AD.CM.AbD(0,this.AD.CM.AY);if(!!this.Data)this.Jv.R(this.Data.Avx(this.AzA));},A9U:
function(E){if(this.ACi===E)return;this.ACi=E;if(!!this.AD)this.AD.IR.L(this.ACi
);},A9T:function(E){this.BhU=E;this.AbC.L(E);},_Init:function(aArg){A.Core.P._Init.
call(this,aArg);A.acg.NT._Init.call(this.Ad4={I:this},0);A.acg.Text._Init.call(this.
Jv={I:this},0);A.Core.Bn._Init.call(this.Bn={I:this},0);A.acl.Gm._Init.call(this.
HM={I:this},0);A.acg.Ap._Init.call(this.AbC={I:this},0);this.__proto__=C.DT;this.
H(Ff);this.Ad4.AZ(0x3F);this.Ad4.H(Ff);this.Ad4.L(0xFF252528);this.Jv.AZ(0x3F);this.
Jv.H(Ff);this.Jv.R(A.jV);this.Bn.AZ(0x3F);this.Bn.JV(Hr);this.Bn.Kv(L3);this.Bn.
DC(Qa);this.Bn.DM(J3);this.HM.HN(1);this.HM.Fr(250);this.AbC.AZ(0x3A);this.AbC.H(
Ob);this.AbC.Cv(1);this.BhV=A.jb.Text;this.J(this.Ad4,0);this.J(this.Jv,0);this.
J(this.Bn,0);this.J(this.AbC,0);this.Ad4.Ax(A.aaL(A.acw.AHp));this.Jv.S(A.aaL(A.
fl.Af));this.Bn.Lo=[this,this.A4s];this.HM.SB=[this,this.AiQ];this.HM.Ahp=[this,
this.AAz];this.ACT=A.aaL(A.fl.Af);this.Avs=A.aaL(A.fl.Ak);this.AbC.Ax(A.aaL(A.aci.
AR8));this.Init(aArg);},_Done:function(){this.__proto__=A.Core.P;this.Ad4._Done(
);this.Jv._Done();this.Bn._Done();this.HM._Done();this.AbC._Done();A.Core.P._Done.
call(this);},_ReInit:function(){A.Core.P._ReInit.call(this);this.Ad4._ReInit();this.
Jv._ReInit();this.Bn._ReInit();this.HM._ReInit();this.AbC._ReInit();this.Jv.S(A.
aaL(A.fl.Af));this.ArO(A.aaL(A.fl.Af));this.AwM(A.aaL(A.fl.Ak));this.CP();},_Mark:
function(D){var B;A.Core.P._Mark.call(this,D);if((B=this.Data)&&(B._cycle!=D))B.
_Mark(B._cycle=D);if((B=this.AD)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.ACT
)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Avs)&&(B._cycle!=D))B._Mark(B._cycle=
D);if((B=this.AbK)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Q)&&((B=B[0])._cycle
!=D))B._Mark(B._cycle=D);if((B=this.Ad4)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
Jv)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Bn)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.HM)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AbC)._cycle!=D)B._Mark(B._cycle=
D);},_className:"DropDown::DropDown"};C.AOn={At7:null,Bn:null,BgO:function(G){var
B;(B=this.At7)?B[1].call(B[0],this):null;},_Init:function(aArg){A.Core.P._Init.call(
this,aArg);A.Core.Bn._Init.call(this.Bn={I:this},0);this.__proto__=C.AOn;this.H(
Qb);this.Bn.AZ(0x3F);this.Bn.JV(Hr);this.Bn.Kv(L3);this.Bn.DC(MJ);this.Bn.DM(S_);
this.J(this.Bn,0);this.Bn.Av$=[this,this.BgO];this.Bn.BL=[this,this.BgO];},_Done:
function(){this.__proto__=A.Core.P;this.Bn._Done();A.Core.P._Done.call(this);},_ReInit:
function(){A.Core.P._ReInit.call(this);this.Bn._ReInit();},_Mark:function(D){var
B;A.Core.P._Mark.call(this,D);if((B=this.At7)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=
D);if((B=this.Bn)._cycle!=D)B._Mark(B._cycle=D);},_className:"DropDown::EventCatcher"
};
C._Init=function(){C.ACs.__proto__=A.Core.P;C.ANH.__proto__=A.Core.P;C.DT.__proto__=
A.Core.P;C.AOn.__proto__=A.Core.P;};C._ReInit=function(){};C.DH=function(D){};return C;
})();

/* VitalControl demonstration application, © Urban GmbH & Co.KG 2023 */