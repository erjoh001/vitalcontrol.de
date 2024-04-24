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
var Ce="Text";var BD=[0,0,100,24];var E7=[0,0,100,1];var Hr=[0,0];var IU=[0,0,100
,120];var Is=[100,0];var O4=[100,120];var P_=[0,120];var P$=[90,0,100,60];var CQ=[
0,0,0,0];var Ff=[0,0,240,40];var L3=[240,0];var Qa=[240,40];var J3=[0,40];var Oc=[
210,0,240,40];var Qb=[0,0,240,50];var MJ=[240,50];var Ta=[0,50];
C.VS={Avx:function(aIndex){return A.jV;},AqV:function(){return 0;},_Init:function(
aArg){this.__proto__=C.VS;A.h7++;},_Done:function(){this.__proto__=null;A.h7--;}
,_ReInit:function(){},_Mark:function(D){var B;if((B=this.I)&&(B._cycle!=D))B._Mark(
B._cycle=D);},I:null,_cycle:0,_observers:null,_className:"DropDown::DDData"};C.ACt={
B6:null,Background:null,Text:null,Bc:null,V:Ce,LS:0xFF000000,A5x:0xFF454545,A$W:
0,KT:0,Kj:0x12,Jc:A.wg,Bl:function(aSize){var B;A.Core.P.Bl.call(this,aSize);this.
Text.H([0,0,(B=this.M)[2]-B[0],B[3]-B[1]]);this.Text.H([].concat(this.Text.M[0]+
this.Jc[0],this.Text.M.slice(1,4)));this.Text.H(A.abN(this.Text.M,this.Text.M[2]-
this.Jc[2]));this.Text.H(A.abP(this.Text.M,this.Text.M[1]+this.Jc[1]));this.Text.
H([].concat(this.Text.M.slice(0,3),this.Text.M[3]-this.Jc[3]));},Ai:function(Ae){
var B;A.Core.P.Ai.call(this,Ae);if(((Ae&0x20)===0x20)){this.Background.L(this.A5x
);this.Text.L(this.A$W);}else{this.Background.L(this.LS);this.Text.L(this.KT);}}
,Bmd:function(E){this.V=E;this.Text.R(E);},WF:function(E){this.LS=E;this.Background.
L(E);},S:function(E){this.B6=E;this.Text.S(E);},A6:function(E){this.Kj=E;this.Text.
A6(E);},Hn:function(E){if(A.aaY(this.Jc,E))return;this.Jc=E;},_Init:function(aArg
){A.Core.P._Init.call(this,aArg);A.acg.AL._Init.call(this.Background={I:this},0);
A.acg.Text._Init.call(this.Text={I:this},0);A.acg.AL._Init.call(this.Bc={I:this}
,0);this.__proto__=C.ACt;this.H(BD);this.Background.A0(0x3F);this.Background.H(BD
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
"DropDown::DDItem"};C.ANG={AEx:null,A9G:null,CM:null,H_:null,Bn:null,BU:null,IR:
null,Gt:0,AY:0,GO:0,AbM:0,ACJ:false,A3t:function(G){if(this.Bn.Jt>100){var Gg=this.
CM.A6Y(this.Bn.H1);if(Gg<0)return;this.CM.GT(Gg);this.CM.HI(Gg,true,null,null);}
},BBl:function(G){var B;if(!this.Bn.NJ){var Gg=this.CM.A6Y(this.Bn.H1);if(Gg<0)return;
this.CM.GT(Gg);this.CM.HI(Gg,true,null,null);(B=this.AEx)?B[1].call(B[0],this):null;
}},AAC:function(G){this.Bn.Ar(true);},BnB:function(E){if(A.aa0(this.AEx,E))return;
this.AEx=E;},GT:function(E){this.Gt=E;this.CM.GT(E);},FN:function(){return this.
CM.Gt;},BAW:function(G){if(this.ACJ){var Hc=A.abe(this.Bn.H1,this.Bn.NU);if((Hc[
1]>8)||(Hc[1]<-8)){this.Im().ANQ(this.H_,Hr);this.Bn.Ar(false);}}},Jy:function(E
){this.AY=E;this.CM.Jy(E);},BnD:function(E){this.A9G=E;this.CM.Hm=E;},Ae8:function(
E){this.GO=E;this.CM.Ae8(E);},ASI:function(){return this.CM.GO;},Bmv:function(E){
if(this.ACJ===E)return;this.ACJ=E;},Arx:function(){return this.CM.AY;},ArW:function(
E){if(this.AbM===E)return;this.AbM=E;},BBs:function(G){},Adz:function(G){var B;var
Vr=this.CM.M;var AtH=this.CM.AqT(0,this.CM.AY-1);var y1=(((Vr[1]-AtH[1])*(Vr[3]-
Vr[1]))/(AtH[3]-AtH[1]))|0;var y2=(((Vr[3]-AtH[1])*(Vr[3]-Vr[1]))/(AtH[3]-AtH[1]
))|0;if(y1<0)y1=0;if(y2>(Vr[3]-Vr[1]))y2=Vr[3]-Vr[1];this.IR.H([Vr[2]-10,y1+Vr[1
],Vr[2],y2+Vr[1]]);this.IR.Z(this.ACJ);},_Init:function(aArg){A.Core.P._Init.call(
this,aArg);A.Core.CM._Init.call(this.CM={I:this},0);A.Core.H_._Init.call(this.H_={
I:this},0);A.Core.Bn._Init.call(this.Bn={I:this},0);A.acg.BU._Init.call(this.BU={
I:this},0);A.acg.AL._Init.call(this.IR={I:this},0);this.__proto__=C.ANG;this.H(IU
);this.CM.A0(0x3F);this.CM.H(IU);this.CM.GT(0);this.CM.Jy(5);this.CM.N3(C.ACt);this.
H_.A0(0x3F);this.H_.H(IU);this.H_.AGR=false;this.H_.A$q=false;this.Bn.A0(0x3F);this.
Bn.JV(Hr);this.Bn.Kw(Is);this.Bn.DC(O4);this.Bn.DM(P_);this.BU.A0(0x3F);this.BU.
H(IU);this.BU.L(A.jb.Text);this.IR.H(P$);this.IR.L(0xFF000000);this.J(this.CM,0);
this.J(this.H_,0);this.J(this.Bn,0);this.J(this.BU,0);this.J(this.IR,0);this.CM.
Em=[this,this.Adz];this.CM.Aw8(this.H_);this.H_.AF$=[this,this.BBs];this.H_.Zn=[
this,this.AAC];this.Bn.ASt=[this,this.BAW];this.Bn.D1=[this,this.A3t];this.Bn.Lo=[
this,this.BBl];},_Done:function(){this.__proto__=A.Core.P;this.CM._Done();this.H_.
_Done();this.Bn._Done();this.BU._Done();this.IR._Done();A.Core.P._Done.call(this
);},_ReInit:function(){A.Core.P._ReInit.call(this);this.CM._ReInit();this.H_._ReInit(
);this.Bn._ReInit();this.BU._ReInit();this.IR._ReInit();},_Mark:function(D){var B;
A.Core.P._Mark.call(this,D);if((B=this.AEx)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=
D);if((B=this.A9G)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.CM)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.H_)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
Bn)._cycle!=D)B._Mark(B._cycle=D);if((B=this.BU)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.IR)._cycle!=D)B._Mark(B._cycle=D);},_className:"DropDown::DDItemList"};C.
DT={Data:null,AD:null,ACU:null,Avs:null,AbL:null,Q:null,Ad4:null,Jv:null,Bn:null
,HN:null,AbD:null,AbM:100,GO:20,BcC:A.wg,A5U:0xFF252528,ANn:0xFF252528,ANs:0xFFF1EEEA
,A5V:0xFFFAFFFE,ANv:0xFFF8FDFF,ANo:0xFF0008C1,AzA:0,ANw:0xFF7EFEFF,ANP:-1,ACj:0xFF000000
,BhW:0xFFFAFFFE,BhX:0,CP:function(){this.BjP(this);},Init:function(aArg){this.AS$(
this.A5U);this.ArO(this.ACU);this.ATa(this.A5V);},Ko:function(CY,aClip,aOffset,Ck
,aBlend){A.Core.P.Ko.call(this,CY,aClip,aOffset,Ck,aBlend);if(!A.aaY(this.BcC,this.
M)){this.BcC=this.M;A.pe([this,this.ByC],this);}},Bl:function(aSize){var B;A.Core.
P.Bl.call(this,aSize);this.Jv.H([0,0,(B=this.M)[2]-B[0],B[3]-B[1]]);this.Jv.H([].
concat(this.Jv.M[0],this.Jv.M.slice(1,4)));this.Jv.H(A.abN(this.Jv.M,this.Jv.M[2
]-((B=this.AbD.M)[2]-B[0])));this.Jv.H(A.abP(this.Jv.M,this.Jv.M[1]));this.Jv.H([
].concat(this.Jv.M.slice(0,3),this.Jv.M[3]));},Au:function(E){if(A.aaZ(this.Q,E)
)return;if(!!this.Q)A.z$([this,this.C4],this.Q,0);this.Q=E;if(!!E)A.zX([this,this.
C4],E,0);if(!!E)A.pe([this,this.C4],this);},A95:function(E){if(this.Data===E)return;
this.Data=E;A.pe([this,this.Bgs],this);},BlZ:function(G){var B;if(!this.AD)return;
var Gg=this.AD.CM.G6;var AaA=(C.ACt.isPrototypeOf(B=this.AD.CM.Cj)?B:null);if(!!
AaA){if(this.Data.AqV()>Gg){AaA.Bmd(this.Data.Avx(Gg));AaA.WF(this.ANn);AaA.A5x=
this.ANo;AaA.A$W=this.ANw;AaA.S(this.Avs);AaA.KT=this.ANv;AaA.A6(0x12);AaA.Bc.L(
this.ANs);AaA.Hn(CQ);}AaA.H(A.abK(AaA.M,[(B=this.AD.CM.M)[2]-B[0],this.AD.CM.GO]
));}},BAD:function(G){var F;if(!!this.Q){(F=this.Q,F[2].call(F[0],this.AD.FN()));
A.abo(this.Q,0);}A.pe([this,this.A4r],this);},A4r:function(G){if(!this.AD){this.
Bzd(this);if(!this.AD)return;this.HN.Cx=0;this.HN.B2=this.AD.AbM;this.AD.Ar(true
);}else{this.HN.Cx=this.AD.AbM;this.HN.B2=0;this.AD.Ar(false);}this.HN.Ar(true);
this.AD.Bmv(this.AbM<(this.AD.ASI()*this.AD.Arx()));},Bzd:function(G){var B;if(!
this.Data)return;this.AbL=A._NewObject(C.AOm,0);this.AD=A._NewObject(C.ANG,0);this.
AD.BnD([this,this.BlZ]);this.AD.BnB([this,this.BAD]);this.AD.Ae8(this.GO);this.AD.
Jy(this.Data.AqV());this.AD.IR.L(this.ACj);if(this.AbM>(this.AD.ASI()*this.AD.Arx(
)))this.ArW(this.AD.ASI()*this.AD.Arx());this.AD.ArW(this.AbM);this.AD.H_.F_=[0,
this.AbM];this.AD.H(this.M);this.AD.Ar(false);this.AD.GT(this.AzA);var IE=this.Im(
);if(!!IE){this.AbL.H([0,0,(B=IE.M)[2]-B[0],B[3]-B[1]]);this.AbL.At7=[this,this.
A4r];this.AbL.J(this.AD,0);IE.J(this.AbL,0);IE.ZF(this.AbL);IE.AMX(this.AbL);}},
ArW:function(E){if(this.AbM===E)return;this.AbM=E;if(this.ANP<0)this.ANP=E;},AAz:
function(G){var B;if(!this.AD||!this.Im())return;var AJl=this.BzP(this);this.AD.
H([].concat(AJl[0],this.AD.M.slice(1,4)));this.AD.H(A.abN(this.AD.M,AJl[2]));this.
AD.H(A.abP(this.AD.M,AJl[3]));this.AD.H([].concat(this.AD.M.slice(0,3),AJl[3]+this.
HN.A5));if((this.AD.M[3]>this.Im().M[3])&&(this.AD.M[3]!==((B=this.Im().M)[3]-B[
1])))this.AD.H([].concat(this.AD.M.slice(0,3),this.Im().M[3]));if((this.AD.M[1]<
this.Im().M[1])&&(this.AD.M[3]!==((B=this.Im().M)[3]-B[1])))this.AD.H(A.abP(this.
AD.M,this.Im().M[1]));},Bgs:function(G){this.Jv.R(this.Data.Avx(this.AzA));},AiQ:
function(G){if((!this.AD||!this.AbL)||!this.Im())return;if(!this.AD.A8L()){this.
Im().ACK(this.AbL);this.Im().HP(this.AbL);this.AD=null;}},ByC:function(G){var B;
if(!!this.AD&&(((this.M[0]!==this.AD.M[0])||(this.M[2]!==this.AD.M[2]))||(this.M[
3]!==this.AD.M[1])))this.AD.H([this.M[0],this.M[3],this.M[2],this.M[3]+((B=this.
AD.M)[3]-B[1])]);},ArO:function(E){this.ACU=E;this.Jv.S(E);},AwM:function(E){if(
this.Avs===E)return;this.Avs=E;},AS$:function(E){this.A5U=E;this.Ad4.L(E);},A9T:
function(E){if(this.ANn===E)return;this.ANn=E;},A9X:function(E){if(this.ANs===E)
return;this.ANs=E;},ATa:function(E){this.A5V=E;this.Jv.L(E);},A9Y:function(E){if(
this.ANv===E)return;this.ANv=E;},A9U:function(E){if(this.ANo===E)return;this.ANo=
E;},C4:function(G){var F;if(!!this.Q){this.AzA=(F=this.Q,F[1].call(F[0]));if(!!this.
AD)this.AD.GT(this.AzA);this.Bgs(this);}},BzP:function(AoP){var B;var B0=AoP;var
AJk=AoP.M;var Ay8=Hr;while(!!B0){var Aap=B0.FG;if(!B0.Ab&&(B0!==AoP)){B0.Bj(AJk);
return A.abh([0,0,(B=AoP.M)[2]-B[0],B[3]-B[1]],Ay8);}if(!!Aap){if(((B=Aap.QO)[0]>=
B[2])||(B[1]>=B[3])){A.we(B0,0);A.we(Aap,0);}Aap.QO=A.wC(Aap.QO,AJk);}if(!((B0.U&
0x1)===0x1))return A.abh([0,0,(B=AoP.M)[2]-B[0],B[3]-B[1]],Ay8);if(B0===AoP)AJk=
A.lb(A.abh(AJk,B0.M.slice(0,2)),B0.M);Ay8=A.abf(Ay8,B0.M.slice(0,2));B0=B0.Ab;}return A.
abh([0,0,(B=AoP.M)[2]-B[0],B[3]-B[1]],Ay8);},A9Z:function(E){if(this.ANw===E)return;
this.ANw=E;},BjP:function(G){this.ArW(this.ANP);if(!!this.AD&&!!this.AD.CM)this.
AD.CM.AbE(0,this.AD.CM.AY);if(!!this.Data)this.Jv.R(this.Data.Avx(this.AzA));},A9W:
function(E){if(this.ACj===E)return;this.ACj=E;if(!!this.AD)this.AD.IR.L(this.ACj
);},A9V:function(E){this.BhW=E;this.AbD.L(E);},_Init:function(aArg){A.Core.P._Init.
call(this,aArg);A.acg.NT._Init.call(this.Ad4={I:this},0);A.acg.Text._Init.call(this.
Jv={I:this},0);A.Core.Bn._Init.call(this.Bn={I:this},0);A.acl.Gm._Init.call(this.
HN={I:this},0);A.acg.Ap._Init.call(this.AbD={I:this},0);this.__proto__=C.DT;this.
H(Ff);this.Ad4.A0(0x3F);this.Ad4.H(Ff);this.Ad4.L(0xFF252528);this.Jv.A0(0x3F);this.
Jv.H(Ff);this.Jv.R(A.jV);this.Bn.A0(0x3F);this.Bn.JV(Hr);this.Bn.Kw(L3);this.Bn.
DC(Qa);this.Bn.DM(J3);this.HN.HO(1);this.HN.Fr(250);this.AbD.A0(0x3A);this.AbD.H(
Oc);this.AbD.Cv(1);this.BhX=A.jb.Text;this.J(this.Ad4,0);this.J(this.Jv,0);this.
J(this.Bn,0);this.J(this.AbD,0);this.Ad4.Ax(A.aaL(A.acw.AHq));this.Jv.S(A.aaL(A.
fl.Af));this.Bn.Lo=[this,this.A4r];this.HN.SE=[this,this.AiQ];this.HN.Ahp=[this,
this.AAz];this.ACU=A.aaL(A.fl.Af);this.Avs=A.aaL(A.fl.Ak);this.AbD.Ax(A.aaL(A.aci.
AR7));this.Init(aArg);},_Done:function(){this.__proto__=A.Core.P;this.Ad4._Done(
);this.Jv._Done();this.Bn._Done();this.HN._Done();this.AbD._Done();A.Core.P._Done.
call(this);},_ReInit:function(){A.Core.P._ReInit.call(this);this.Ad4._ReInit();this.
Jv._ReInit();this.Bn._ReInit();this.HN._ReInit();this.AbD._ReInit();this.Jv.S(A.
aaL(A.fl.Af));this.ArO(A.aaL(A.fl.Af));this.AwM(A.aaL(A.fl.Ak));this.CP();},_Mark:
function(D){var B;A.Core.P._Mark.call(this,D);if((B=this.Data)&&(B._cycle!=D))B.
_Mark(B._cycle=D);if((B=this.AD)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.ACU
)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Avs)&&(B._cycle!=D))B._Mark(B._cycle=
D);if((B=this.AbL)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Q)&&((B=B[0])._cycle
!=D))B._Mark(B._cycle=D);if((B=this.Ad4)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
Jv)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Bn)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.HN)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AbD)._cycle!=D)B._Mark(B._cycle=
D);},_className:"DropDown::DropDown"};C.AOm={At7:null,Bn:null,BgQ:function(G){var
B;(B=this.At7)?B[1].call(B[0],this):null;},_Init:function(aArg){A.Core.P._Init.call(
this,aArg);A.Core.Bn._Init.call(this.Bn={I:this},0);this.__proto__=C.AOm;this.H(
Qb);this.Bn.A0(0x3F);this.Bn.JV(Hr);this.Bn.Kw(L3);this.Bn.DC(MJ);this.Bn.DM(Ta);
this.J(this.Bn,0);this.Bn.Av$=[this,this.BgQ];this.Bn.BL=[this,this.BgQ];},_Done:
function(){this.__proto__=A.Core.P;this.Bn._Done();A.Core.P._Done.call(this);},_ReInit:
function(){A.Core.P._ReInit.call(this);this.Bn._ReInit();},_Mark:function(D){var
B;A.Core.P._Mark.call(this,D);if((B=this.At7)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=
D);if((B=this.Bn)._cycle!=D)B._Mark(B._cycle=D);},_className:"DropDown::EventCatcher"
};
C._Init=function(){C.ACt.__proto__=A.Core.P;C.ANG.__proto__=A.Core.P;C.DT.__proto__=
A.Core.P;C.AOm.__proto__=A.Core.P;};C._ReInit=function(){};C.DH=function(D){};return C;
})();

/* VitalControl demonstration application, © Urban GmbH & Co.KG 2023 */