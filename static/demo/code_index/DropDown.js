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
var Ce="Text";var BD=[0,0,100,24];var E7=[0,0,100,1];var Hr=[0,0];var IW=[0,0,100
,120];var It=[100,0];var O6=[100,120];var P_=[0,120];var P$=[90,0,100,60];var CR=[
0,0,0,0];var Ff=[0,0,240,40];var L5=[240,0];var Qa=[240,40];var J7=[0,40];var Od=[
210,0,240,40];var Qb=[0,0,240,50];var ML=[240,50];var S$=[0,50];
C.VS={Avy:function(aIndex){return A.jV;},AqX:function(){return 0;},_Init:function(
aArg){this.__proto__=C.VS;A.h7++;},_Done:function(){this.__proto__=null;A.h7--;}
,_ReInit:function(){},_Mark:function(D){var B;if((B=this.I)&&(B._cycle!=D))B._Mark(
B._cycle=D);},I:null,_cycle:0,_observers:null,_className:"DropDown::DDData"};C.ACx={
B7:null,Background:null,Text:null,Bc:null,V:Ce,LU:0xFF000000,A5H:0xFF454545,A$6:
0,KV:0,Kl:0x12,Jf:A.wg,Bl:function(aSize){var B;A.Core.P.Bl.call(this,aSize);this.
Text.H([0,0,(B=this.M)[2]-B[0],B[3]-B[1]]);this.Text.H([].concat(this.Text.M[0]+
this.Jf[0],this.Text.M.slice(1,4)));this.Text.H(A.abN(this.Text.M,this.Text.M[2]-
this.Jf[2]));this.Text.H(A.abP(this.Text.M,this.Text.M[1]+this.Jf[1]));this.Text.
H([].concat(this.Text.M.slice(0,3),this.Text.M[3]-this.Jf[3]));},Ai:function(Ae){
var B;A.Core.P.Ai.call(this,Ae);if(((Ae&0x20)===0x20)){this.Background.L(this.A5H
);this.Text.L(this.A$6);}else{this.Background.L(this.LU);this.Text.L(this.KV);}}
,Bmo:function(E){this.V=E;this.Text.R(E);},WG:function(E){this.LU=E;this.Background.
L(E);},S:function(E){this.B7=E;this.Text.S(E);},A6:function(E){this.Kl=E;this.Text.
A6(E);},Hn:function(E){if(A.aaY(this.Jf,E))return;this.Jf=E;},_Init:function(aArg
){A.Core.P._Init.call(this,aArg);A.acg.AL._Init.call(this.Background={I:this},0);
A.acg.Text._Init.call(this.Text={I:this},0);A.acg.AL._Init.call(this.Bc={I:this}
,0);this.__proto__=C.ACx;this.H(BD);this.Background.A0(0x3F);this.Background.H(BD
);this.Background.L(0xBE000000);this.Text.A0(0x3F);this.Text.H(BD);this.Text.R(Ce
);this.Text.L(0xFFFFFFFF);this.Bc.A0(0x1D);this.Bc.H(E7);this.Bc.L(0x9EFFFFFF);this.
J(this.Background,0);this.J(this.Text,0);this.J(this.Bc,0);this.Text.S(A.aaL(A.fl.
Ak));this.B7=A.aaL(A.fl.Af);},_Done:function(){this.__proto__=A.Core.P;this.Background.
_Done();this.Text._Done();this.Bc._Done();A.Core.P._Done.call(this);},_ReInit:function(
){A.Core.P._ReInit.call(this);this.Background._ReInit();this.Text._ReInit();this.
Bc._ReInit();this.Text.S(A.aaL(A.fl.Ak));this.S(A.aaL(A.fl.Af));},_Mark:function(
D){var B;A.Core.P._Mark.call(this,D);if((B=this.B7)&&(B._cycle!=D))B._Mark(B._cycle=
D);if((B=this.Background)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Text)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.Bc)._cycle!=D)B._Mark(B._cycle=D);},_className:
"DropDown::DDItem"};C.ANL={AEB:null,A9Q:null,CM:null,H$:null,Bn:null,BW:null,IT:
null,Gt:0,AY:0,GO:0,AbN:0,ACN:false,A3D:function(G){if(this.Bn.Jw>100){var Gg=this.
CM.A68(this.Bn.H2);if(Gg<0)return;this.CM.GT(Gg);this.CM.HI(Gg,true,null,null);}
},BBn:function(G){var B;if(!this.Bn.NK){var Gg=this.CM.A68(this.Bn.H2);if(Gg<0)return;
this.CM.GT(Gg);this.CM.HI(Gg,true,null,null);(B=this.AEB)?B[1].call(B[0],this):null;
}},AAG:function(G){this.Bn.Ar(true);},BnM:function(E){if(A.aa0(this.AEB,E))return;
this.AEB=E;},GT:function(E){this.Gt=E;this.CM.GT(E);},FN:function(){return this.
CM.Gt;},BAY:function(G){if(this.ACN){var Hc=A.abe(this.Bn.H2,this.Bn.NV);if((Hc[
1]>8)||(Hc[1]<-8)){this.In().ANV(this.H$,Hr);this.Bn.Ar(false);}}},JB:function(E
){this.AY=E;this.CM.JB(E);},BnO:function(E){this.A9Q=E;this.CM.Hm=E;},Ae8:function(
E){this.GO=E;this.CM.Ae8(E);},ASN:function(){return this.CM.GO;},BmG:function(E){
if(this.ACN===E)return;this.ACN=E;},Arz:function(){return this.CM.AY;},ArY:function(
E){if(this.AbN===E)return;this.AbN=E;},BBu:function(G){},Adz:function(G){var B;var
Vr=this.CM.M;var AtI=this.CM.AqV(0,this.CM.AY-1);var y1=(((Vr[1]-AtI[1])*(Vr[3]-
Vr[1]))/(AtI[3]-AtI[1]))|0;var y2=(((Vr[3]-AtI[1])*(Vr[3]-Vr[1]))/(AtI[3]-AtI[1]
))|0;if(y1<0)y1=0;if(y2>(Vr[3]-Vr[1]))y2=Vr[3]-Vr[1];this.IT.H([Vr[2]-10,y1+Vr[1
],Vr[2],y2+Vr[1]]);this.IT.Z(this.ACN);},_Init:function(aArg){A.Core.P._Init.call(
this,aArg);A.Core.CM._Init.call(this.CM={I:this},0);A.Core.H$._Init.call(this.H$={
I:this},0);A.Core.Bn._Init.call(this.Bn={I:this},0);A.acg.BW._Init.call(this.BW={
I:this},0);A.acg.AL._Init.call(this.IT={I:this},0);this.__proto__=C.ANL;this.H(IW
);this.CM.A0(0x3F);this.CM.H(IW);this.CM.GT(0);this.CM.JB(5);this.CM.N4(C.ACx);this.
H$.A0(0x3F);this.H$.H(IW);this.H$.AGV=false;this.H$.A$A=false;this.Bn.A0(0x3F);this.
Bn.JZ(Hr);this.Bn.Ky(It);this.Bn.DC(O6);this.Bn.DM(P_);this.BW.A0(0x3F);this.BW.
H(IW);this.BW.L(A.jb.Text);this.IT.H(P$);this.IT.L(0xFF000000);this.J(this.CM,0);
this.J(this.H$,0);this.J(this.Bn,0);this.J(this.BW,0);this.J(this.IT,0);this.CM.
Em=[this,this.Adz];this.CM.Aw9(this.H$);this.H$.AGd=[this,this.BBu];this.H$.Zo=[
this,this.AAG];this.Bn.ASy=[this,this.BAY];this.Bn.D1=[this,this.A3D];this.Bn.Lq=[
this,this.BBn];},_Done:function(){this.__proto__=A.Core.P;this.CM._Done();this.H$.
_Done();this.Bn._Done();this.BW._Done();this.IT._Done();A.Core.P._Done.call(this
);},_ReInit:function(){A.Core.P._ReInit.call(this);this.CM._ReInit();this.H$._ReInit(
);this.Bn._ReInit();this.BW._ReInit();this.IT._ReInit();},_Mark:function(D){var B;
A.Core.P._Mark.call(this,D);if((B=this.AEB)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=
D);if((B=this.A9Q)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.CM)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.H$)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
Bn)._cycle!=D)B._Mark(B._cycle=D);if((B=this.BW)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.IT)._cycle!=D)B._Mark(B._cycle=D);},_className:"DropDown::DDItemList"};C.
DT={Data:null,AD:null,ACY:null,Avt:null,AbM:null,Q:null,Ad4:null,Jy:null,Bn:null
,HN:null,AbE:null,AbN:100,GO:20,BcM:A.wg,A54:0xFF252528,ANs:0xFF252528,ANx:0xFFF1EEEA
,A55:0xFFFAFFFE,ANA:0xFFF8FDFF,ANt:0xFF0008C1,AzE:0,ANB:0xFF7EFEFF,ANU:-1,ACn:0xFF000000
,Bh7:0xFFFAFFFE,Bh8:0,CQ:function(){this.Bj0(this);},Init:function(aArg){this.ATe(
this.A54);this.ArQ(this.ACY);this.ATf(this.A55);},Kq:function(CZ,aClip,aOffset,Ck
,aBlend){A.Core.P.Kq.call(this,CZ,aClip,aOffset,Ck,aBlend);if(!A.aaY(this.BcM,this.
M)){this.BcM=this.M;A.pe([this,this.ByE],this);}},Bl:function(aSize){var B;A.Core.
P.Bl.call(this,aSize);this.Jy.H([0,0,(B=this.M)[2]-B[0],B[3]-B[1]]);this.Jy.H([].
concat(this.Jy.M[0],this.Jy.M.slice(1,4)));this.Jy.H(A.abN(this.Jy.M,this.Jy.M[2
]-((B=this.AbE.M)[2]-B[0])));this.Jy.H(A.abP(this.Jy.M,this.Jy.M[1]));this.Jy.H([
].concat(this.Jy.M.slice(0,3),this.Jy.M[3]));},Au:function(E){if(A.aaZ(this.Q,E)
)return;if(!!this.Q)A.z$([this,this.C5],this.Q,0);this.Q=E;if(!!E)A.zX([this,this.
C5],E,0);if(!!E)A.pe([this,this.C5],this);},A_d:function(E){if(this.Data===E)return;
this.Data=E;A.pe([this,this.BgD],this);},Bl_:function(G){var B;if(!this.AD)return;
var Gg=this.AD.CM.G6;var AaB=(C.ACx.isPrototypeOf(B=this.AD.CM.Cj)?B:null);if(!!
AaB){if(this.Data.AqX()>Gg){AaB.Bmo(this.Data.Avy(Gg));AaB.WG(this.ANs);AaB.A5H=
this.ANt;AaB.A$6=this.ANB;AaB.S(this.Avt);AaB.KV=this.ANA;AaB.A6(0x12);AaB.Bc.L(
this.ANx);AaB.Hn(CR);}AaB.H(A.abK(AaB.M,[(B=this.AD.CM.M)[2]-B[0],this.AD.CM.GO]
));}},BAF:function(G){var F;if(!!this.Q){(F=this.Q,F[2].call(F[0],this.AD.FN()));
A.abo(this.Q,0);}A.pe([this,this.A4B],this);},A4B:function(G){if(!this.AD){this.
Bzf(this);if(!this.AD)return;this.HN.Cx=0;this.HN.B3=this.AD.AbN;this.AD.Ar(true
);}else{this.HN.Cx=this.AD.AbN;this.HN.B3=0;this.AD.Ar(false);}this.HN.Ar(true);
this.AD.BmG(this.AbN<(this.AD.ASN()*this.AD.Arz()));},Bzf:function(G){var B;if(!
this.Data)return;this.AbM=A._NewObject(C.AOr,0);this.AD=A._NewObject(C.ANL,0);this.
AD.BnO([this,this.Bl_]);this.AD.BnM([this,this.BAF]);this.AD.Ae8(this.GO);this.AD.
JB(this.Data.AqX());this.AD.IT.L(this.ACn);if(this.AbN>(this.AD.ASN()*this.AD.Arz(
)))this.ArY(this.AD.ASN()*this.AD.Arz());this.AD.ArY(this.AbN);this.AD.H$.F_=[0,
this.AbN];this.AD.H(this.M);this.AD.Ar(false);this.AD.GT(this.AzE);var IG=this.In(
);if(!!IG){this.AbM.H([0,0,(B=IG.M)[2]-B[0],B[3]-B[1]]);this.AbM.At8=[this,this.
A4B];this.AbM.J(this.AD,0);IG.J(this.AbM,0);IG.ZG(this.AbM);IG.AM2(this.AbM);}},
ArY:function(E){if(this.AbN===E)return;this.AbN=E;if(this.ANU<0)this.ANU=E;},AAD:
function(G){var B;if(!this.AD||!this.In())return;var AJq=this.BzR(this);this.AD.
H([].concat(AJq[0],this.AD.M.slice(1,4)));this.AD.H(A.abN(this.AD.M,AJq[2]));this.
AD.H(A.abP(this.AD.M,AJq[3]));this.AD.H([].concat(this.AD.M.slice(0,3),AJq[3]+this.
HN.A5));if((this.AD.M[3]>this.In().M[3])&&(this.AD.M[3]!==((B=this.In().M)[3]-B[
1])))this.AD.H([].concat(this.AD.M.slice(0,3),this.In().M[3]));if((this.AD.M[1]<
this.In().M[1])&&(this.AD.M[3]!==((B=this.In().M)[3]-B[1])))this.AD.H(A.abP(this.
AD.M,this.In().M[1]));},BgD:function(G){this.Jy.R(this.Data.Avy(this.AzE));},AiQ:
function(G){if((!this.AD||!this.AbM)||!this.In())return;if(!this.AD.A8V()){this.
In().ACO(this.AbM);this.In().HP(this.AbM);this.AD=null;}},ByE:function(G){var B;
if(!!this.AD&&(((this.M[0]!==this.AD.M[0])||(this.M[2]!==this.AD.M[2]))||(this.M[
3]!==this.AD.M[1])))this.AD.H([this.M[0],this.M[3],this.M[2],this.M[3]+((B=this.
AD.M)[3]-B[1])]);},ArQ:function(E){this.ACY=E;this.Jy.S(E);},AwN:function(E){if(
this.Avt===E)return;this.Avt=E;},ATe:function(E){this.A54=E;this.Ad4.L(E);},A93:
function(E){if(this.ANs===E)return;this.ANs=E;},A97:function(E){if(this.ANx===E)
return;this.ANx=E;},ATf:function(E){this.A55=E;this.Jy.L(E);},A98:function(E){if(
this.ANA===E)return;this.ANA=E;},A94:function(E){if(this.ANt===E)return;this.ANt=
E;},C5:function(G){var F;if(!!this.Q){this.AzE=(F=this.Q,F[1].call(F[0]));if(!!this.
AD)this.AD.GT(this.AzE);this.BgD(this);}},BzR:function(AoR){var B;var B1=AoR;var
AJp=AoR.M;var Aza=Hr;while(!!B1){var Aaq=B1.FG;if(!B1.Ab&&(B1!==AoR)){B1.Bj(AJp);
return A.abh([0,0,(B=AoR.M)[2]-B[0],B[3]-B[1]],Aza);}if(!!Aaq){if(((B=Aaq.QO)[0]>=
B[2])||(B[1]>=B[3])){A.we(B1,0);A.we(Aaq,0);}Aaq.QO=A.wC(Aaq.QO,AJp);}if(!((B1.U&
0x1)===0x1))return A.abh([0,0,(B=AoR.M)[2]-B[0],B[3]-B[1]],Aza);if(B1===AoR)AJp=
A.lb(A.abh(AJp,B1.M.slice(0,2)),B1.M);Aza=A.abf(Aza,B1.M.slice(0,2));B1=B1.Ab;}return A.
abh([0,0,(B=AoR.M)[2]-B[0],B[3]-B[1]],Aza);},A99:function(E){if(this.ANB===E)return;
this.ANB=E;},Bj0:function(G){this.ArY(this.ANU);if(!!this.AD&&!!this.AD.CM)this.
AD.CM.AbF(0,this.AD.CM.AY);if(!!this.Data)this.Jy.R(this.Data.Avy(this.AzE));},A96:
function(E){if(this.ACn===E)return;this.ACn=E;if(!!this.AD)this.AD.IT.L(this.ACn
);},A95:function(E){this.Bh7=E;this.AbE.L(E);},_Init:function(aArg){A.Core.P._Init.
call(this,aArg);A.acg.NU._Init.call(this.Ad4={I:this},0);A.acg.Text._Init.call(this.
Jy={I:this},0);A.Core.Bn._Init.call(this.Bn={I:this},0);A.acl.Gm._Init.call(this.
HN={I:this},0);A.acg.Ap._Init.call(this.AbE={I:this},0);this.__proto__=C.DT;this.
H(Ff);this.Ad4.A0(0x3F);this.Ad4.H(Ff);this.Ad4.L(0xFF252528);this.Jy.A0(0x3F);this.
Jy.H(Ff);this.Jy.R(A.jV);this.Bn.A0(0x3F);this.Bn.JZ(Hr);this.Bn.Ky(L5);this.Bn.
DC(Qa);this.Bn.DM(J7);this.HN.HO(1);this.HN.Fr(250);this.AbE.A0(0x3A);this.AbE.H(
Od);this.AbE.Cv(1);this.Bh8=A.jb.Text;this.J(this.Ad4,0);this.J(this.Jy,0);this.
J(this.Bn,0);this.J(this.AbE,0);this.Ad4.Ax(A.aaL(A.acw.AHu));this.Jy.S(A.aaL(A.
fl.Af));this.Bn.Lq=[this,this.A4B];this.HN.SC=[this,this.AiQ];this.HN.Ahp=[this,
this.AAD];this.ACY=A.aaL(A.fl.Af);this.Avt=A.aaL(A.fl.Ak);this.AbE.Ax(A.aaL(A.aci.
ASa));this.Init(aArg);},_Done:function(){this.__proto__=A.Core.P;this.Ad4._Done(
);this.Jy._Done();this.Bn._Done();this.HN._Done();this.AbE._Done();A.Core.P._Done.
call(this);},_ReInit:function(){A.Core.P._ReInit.call(this);this.Ad4._ReInit();this.
Jy._ReInit();this.Bn._ReInit();this.HN._ReInit();this.AbE._ReInit();this.Jy.S(A.
aaL(A.fl.Af));this.ArQ(A.aaL(A.fl.Af));this.AwN(A.aaL(A.fl.Ak));this.CQ();},_Mark:
function(D){var B;A.Core.P._Mark.call(this,D);if((B=this.Data)&&(B._cycle!=D))B.
_Mark(B._cycle=D);if((B=this.AD)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.ACY
)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Avt)&&(B._cycle!=D))B._Mark(B._cycle=
D);if((B=this.AbM)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Q)&&((B=B[0])._cycle
!=D))B._Mark(B._cycle=D);if((B=this.Ad4)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
Jy)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Bn)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.HN)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AbE)._cycle!=D)B._Mark(B._cycle=
D);},_className:"DropDown::DropDown"};C.AOr={At8:null,Bn:null,Bg1:function(G){var
B;(B=this.At8)?B[1].call(B[0],this):null;},_Init:function(aArg){A.Core.P._Init.call(
this,aArg);A.Core.Bn._Init.call(this.Bn={I:this},0);this.__proto__=C.AOr;this.H(
Qb);this.Bn.A0(0x3F);this.Bn.JZ(Hr);this.Bn.Ky(L5);this.Bn.DC(ML);this.Bn.DM(S$);
this.J(this.Bn,0);this.Bn.Awa=[this,this.Bg1];this.Bn.BM=[this,this.Bg1];},_Done:
function(){this.__proto__=A.Core.P;this.Bn._Done();A.Core.P._Done.call(this);},_ReInit:
function(){A.Core.P._ReInit.call(this);this.Bn._ReInit();},_Mark:function(D){var
B;A.Core.P._Mark.call(this,D);if((B=this.At8)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=
D);if((B=this.Bn)._cycle!=D)B._Mark(B._cycle=D);},_className:"DropDown::EventCatcher"
};
C._Init=function(){C.ACx.__proto__=A.Core.P;C.ANL.__proto__=A.Core.P;C.DT.__proto__=
A.Core.P;C.AOr.__proto__=A.Core.P;};C._ReInit=function(){};C.DH=function(D){};return C;
})();

/* VitalControl demonstration application, © Urban GmbH & Co.KG 2023 */