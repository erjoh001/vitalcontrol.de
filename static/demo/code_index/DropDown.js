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
var Cc="Text";var BD=[0,0,100,24];var E6=[0,0,100,1];var Hq=[0,0];var IT=[0,0,100
,120];var Is=[100,0];var O2=[100,120];var P7=[0,120];var P8=[90,0,100,60];var CQ=[
0,0,0,0];var Fe=[0,0,240,40];var L1=[240,0];var P9=[240,40];var J1=[0,40];var N$=[
210,0,240,40];var P_=[0,0,240,50];var MG=[240,50];var S9=[0,50];
C.VN={Avn:function(aIndex){return A.jV;},AqR:function(){return 0;},_Init:function(
aArg){this.__proto__=C.VN;A.h7++;},_Done:function(){this.__proto__=null;A.h7--;}
,_ReInit:function(){},_Mark:function(D){var B;if((B=this.I)&&(B._cycle!=D))B._Mark(
B._cycle=D);},I:null,_cycle:0,_observers:null,_className:"DropDown::DDData"};C.ACi={
B6:null,Background:null,Text:null,Bc:null,V:Cc,LQ:0xFF000000,A46:0xFF454545,A$p:
0,KS:0,Ki:0x12,Jb:A.wg,Bl:function(aSize){var B;A.Core.P.Bl.call(this,aSize);this.
Text.H([0,0,(B=this.M)[2]-B[0],B[3]-B[1]]);this.Text.H([].concat(this.Text.M[0]+
this.Jb[0],this.Text.M.slice(1,4)));this.Text.H(A.abN(this.Text.M,this.Text.M[2]-
this.Jb[2]));this.Text.H(A.abP(this.Text.M,this.Text.M[1]+this.Jb[1]));this.Text.
H([].concat(this.Text.M.slice(0,3),this.Text.M[3]-this.Jb[3]));},Ai:function(Ae){
var B;A.Core.P.Ai.call(this,Ae);if(((Ae&0x20)===0x20)){this.Background.L(this.A46
);this.Text.L(this.A$p);}else{this.Background.L(this.LQ);this.Text.L(this.KS);}}
,Blz:function(E){this.V=E;this.Text.R(E);},Wy:function(E){this.LQ=E;this.Background.
L(E);},S:function(E){this.B6=E;this.Text.S(E);},A6:function(E){this.Ki=E;this.Text.
A6(E);},Hm:function(E){if(A.aaY(this.Jb,E))return;this.Jb=E;},_Init:function(aArg
){A.Core.P._Init.call(this,aArg);A.acg.AK._Init.call(this.Background={I:this},0);
A.acg.Text._Init.call(this.Text={I:this},0);A.acg.AK._Init.call(this.Bc={I:this}
,0);this.__proto__=C.ACi;this.H(BD);this.Background.AZ(0x3F);this.Background.H(BD
);this.Background.L(0xBE000000);this.Text.AZ(0x3F);this.Text.H(BD);this.Text.R(Cc
);this.Text.L(0xFFFFFFFF);this.Bc.AZ(0x1D);this.Bc.H(E6);this.Bc.L(0x9EFFFFFF);this.
J(this.Background,0);this.J(this.Text,0);this.J(this.Bc,0);this.Text.S(A.aaL(A.fl.
Ak));this.B6=A.aaL(A.fl.Af);},_Done:function(){this.__proto__=A.Core.P;this.Background.
_Done();this.Text._Done();this.Bc._Done();A.Core.P._Done.call(this);},_ReInit:function(
){A.Core.P._ReInit.call(this);this.Background._ReInit();this.Text._ReInit();this.
Bc._ReInit();this.Text.S(A.aaL(A.fl.Ak));this.S(A.aaL(A.fl.Af));},_Mark:function(
D){var B;A.Core.P._Mark.call(this,D);if((B=this.B6)&&(B._cycle!=D))B._Mark(B._cycle=
D);if((B=this.Background)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Text)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.Bc)._cycle!=D)B._Mark(B._cycle=D);},_className:
"DropDown::DDItem"};C.ANx={AEl:null,A9d:null,CM:null,H9:null,Bn:null,BT:null,IQ:
null,Gr:0,AY:0,GN:0,AbK:0,ACy:false,A25:function(G){if(this.Bn.Js>100){var Ge=this.
CM.A6z(this.Bn.H0);if(Ge<0)return;this.CM.GS(Ge);this.CM.HH(Ge,true,null,null);}
},BAE:function(G){var B;if(!this.Bn.NF){var Ge=this.CM.A6z(this.Bn.H0);if(Ge<0)return;
this.CM.GS(Ge);this.CM.HH(Ge,true,null,null);(B=this.AEl)?B[1].call(B[0],this):null;
}},AAu:function(G){this.Bn.Ar(true);},BmX:function(E){if(A.aa0(this.AEl,E))return;
this.AEl=E;},GS:function(E){this.Gr=E;this.CM.GS(E);},FM:function(){return this.
CM.Gr;},BAe:function(G){if(this.ACy){var Hb=A.abe(this.Bn.H0,this.Bn.NR);if((Hb[
1]>8)||(Hb[1]<-8)){this.Im().ANH(this.H9,Hq);this.Bn.Ar(false);}}},Jx:function(E
){this.AY=E;this.CM.Jx(E);},BmZ:function(E){this.A9d=E;this.CM.Hl=E;},Ae6:function(
E){this.GN=E;this.CM.Ae6(E);},ASm:function(){return this.CM.GN;},BlR:function(E){
if(this.ACy===E)return;this.ACy=E;},Ars:function(){return this.CM.AY;},ArR:function(
E){if(this.AbK===E)return;this.AbK=E;},BAL:function(G){},Adw:function(G){var B;var
Vn=this.CM.M;var Aty=this.CM.AqP(0,this.CM.AY-1);var y1=(((Vn[1]-Aty[1])*(Vn[3]-
Vn[1]))/(Aty[3]-Aty[1]))|0;var y2=(((Vn[3]-Aty[1])*(Vn[3]-Vn[1]))/(Aty[3]-Aty[1]
))|0;if(y1<0)y1=0;if(y2>(Vn[3]-Vn[1]))y2=Vn[3]-Vn[1];this.IQ.H([Vn[2]-10,y1+Vn[1
],Vn[2],y2+Vn[1]]);this.IQ.Z(this.ACy);},_Init:function(aArg){A.Core.P._Init.call(
this,aArg);A.Core.CM._Init.call(this.CM={I:this},0);A.Core.H9._Init.call(this.H9={
I:this},0);A.Core.Bn._Init.call(this.Bn={I:this},0);A.acg.BT._Init.call(this.BT={
I:this},0);A.acg.AK._Init.call(this.IQ={I:this},0);this.__proto__=C.ANx;this.H(IT
);this.CM.AZ(0x3F);this.CM.H(IT);this.CM.GS(0);this.CM.Jx(5);this.CM.N0(C.ACi);this.
H9.AZ(0x3F);this.H9.H(IT);this.H9.AGE=false;this.H9.A_X=false;this.Bn.AZ(0x3F);this.
Bn.JT(Hq);this.Bn.Ku(Is);this.Bn.DC(O2);this.Bn.DM(P7);this.BT.AZ(0x3F);this.BT.
H(IT);this.BT.L(A.jb.Text);this.IQ.H(P8);this.IQ.L(0xFF000000);this.J(this.CM,0);
this.J(this.H9,0);this.J(this.Bn,0);this.J(this.BT,0);this.J(this.IQ,0);this.CM.
El=[this,this.Adw];this.CM.Aw1(this.H9);this.H9.AFX=[this,this.BAL];this.H9.Zi=[
this,this.AAu];this.Bn.AR9=[this,this.BAe];this.Bn.D1=[this,this.A25];this.Bn.Ln=[
this,this.BAE];},_Done:function(){this.__proto__=A.Core.P;this.CM._Done();this.H9.
_Done();this.Bn._Done();this.BT._Done();this.IQ._Done();A.Core.P._Done.call(this
);},_ReInit:function(){A.Core.P._ReInit.call(this);this.CM._ReInit();this.H9._ReInit(
);this.Bn._ReInit();this.BT._ReInit();this.IQ._ReInit();},_Mark:function(D){var B;
A.Core.P._Mark.call(this,D);if((B=this.AEl)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=
D);if((B=this.A9d)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.CM)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.H9)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
Bn)._cycle!=D)B._Mark(B._cycle=D);if((B=this.BT)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.IQ)._cycle!=D)B._Mark(B._cycle=D);},_className:"DropDown::DDItemList"};C.
DT={Data:null,AD:null,ACJ:null,Avi:null,AbJ:null,Q:null,Ad1:null,Ju:null,Bn:null
,HL:null,AbB:null,AbK:100,GN:20,Bb6:A.wg,A5r:0xFF252528,ANe:0xFF252528,ANj:0xFFF1EEEA
,A5s:0xFFFAFFFE,ANm:0xFFF8FDFF,ANf:0xFF0008C1,Azs:0,ANn:0xFF7EFEFF,ANG:-1,AB_:0xFF000000
,Bho:0xFFFAFFFE,Bhp:0,CP:function(){this.Bja(this);},Init:function(aArg){this.ASO(
this.A5r);this.ArJ(this.ACJ);this.ASP(this.A5s);},Kn:function(CY,aClip,aOffset,Cj
,aBlend){A.Core.P.Kn.call(this,CY,aClip,aOffset,Cj,aBlend);if(!A.aaY(this.Bb6,this.
M)){this.Bb6=this.M;A.pe([this,this.BxY],this);}},Bl:function(aSize){var B;A.Core.
P.Bl.call(this,aSize);this.Ju.H([0,0,(B=this.M)[2]-B[0],B[3]-B[1]]);this.Ju.H([].
concat(this.Ju.M[0],this.Ju.M.slice(1,4)));this.Ju.H(A.abN(this.Ju.M,this.Ju.M[2
]-((B=this.AbB.M)[2]-B[0])));this.Ju.H(A.abP(this.Ju.M,this.Ju.M[1]));this.Ju.H([
].concat(this.Ju.M.slice(0,3),this.Ju.M[3]));},At:function(E){if(A.aaZ(this.Q,E)
)return;if(!!this.Q)A.z$([this,this.C3],this.Q,0);this.Q=E;if(!!E)A.zX([this,this.
C3],E,0);if(!!E)A.pe([this,this.C3],this);},A9C:function(E){if(this.Data===E)return;
this.Data=E;A.pe([this,this.BfW],this);},Blj:function(G){var B;if(!this.AD)return;
var Ge=this.AD.CM.G5;var Aax=(C.ACi.isPrototypeOf(B=this.AD.CM.Ci)?B:null);if(!!
Aax){if(this.Data.AqR()>Ge){Aax.Blz(this.Data.Avn(Ge));Aax.Wy(this.ANe);Aax.A46=
this.ANf;Aax.A$p=this.ANn;Aax.S(this.Avi);Aax.KS=this.ANm;Aax.A6(0x12);Aax.Bc.L(
this.ANj);Aax.Hm(CQ);}Aax.H(A.abK(Aax.M,[(B=this.AD.CM.M)[2]-B[0],this.AD.CM.GN]
));}},BzX:function(G){var F;if(!!this.Q){(F=this.Q,F[2].call(F[0],this.AD.FM()));
A.abo(this.Q,0);}A.pe([this,this.A32],this);},A32:function(G){if(!this.AD){this.
Byz(this);if(!this.AD)return;this.HL.Cw=0;this.HL.B1=this.AD.AbK;this.AD.Ar(true
);}else{this.HL.Cw=this.AD.AbK;this.HL.B1=0;this.AD.Ar(false);}this.HL.Ar(true);
this.AD.BlR(this.AbK<(this.AD.ASm()*this.AD.Ars()));},Byz:function(G){var B;if(!
this.Data)return;this.AbJ=A._NewObject(C.AOe,0);this.AD=A._NewObject(C.ANx,0);this.
AD.BmZ([this,this.Blj]);this.AD.BmX([this,this.BzX]);this.AD.Ae6(this.GN);this.AD.
Jx(this.Data.AqR());this.AD.IQ.L(this.AB_);if(this.AbK>(this.AD.ASm()*this.AD.Ars(
)))this.ArR(this.AD.ASm()*this.AD.Ars());this.AD.ArR(this.AbK);this.AD.H9.F0=[0,
this.AbK];this.AD.H(this.M);this.AD.Ar(false);this.AD.GS(this.Azs);var ID=this.Im(
);if(!!ID){this.AbJ.H([0,0,(B=ID.M)[2]-B[0],B[3]-B[1]]);this.AbJ.AtY=[this,this.
A32];this.AbJ.J(this.AD,0);ID.J(this.AbJ,0);ID.ZB(this.AbJ);ID.AMP(this.AbJ);}},
ArR:function(E){if(this.AbK===E)return;this.AbK=E;if(this.ANG<0)this.ANG=E;},AAr:
function(G){var B;if(!this.AD||!this.Im())return;var AJa=this.By_(this);this.AD.
H([].concat(AJa[0],this.AD.M.slice(1,4)));this.AD.H(A.abN(this.AD.M,AJa[2]));this.
AD.H(A.abP(this.AD.M,AJa[3]));this.AD.H([].concat(this.AD.M.slice(0,3),AJa[3]+this.
HL.A4));if((this.AD.M[3]>this.Im().M[3])&&(this.AD.M[3]!==((B=this.Im().M)[3]-B[
1])))this.AD.H([].concat(this.AD.M.slice(0,3),this.Im().M[3]));if((this.AD.M[1]<
this.Im().M[1])&&(this.AD.M[3]!==((B=this.Im().M)[3]-B[1])))this.AD.H(A.abP(this.
AD.M,this.Im().M[1]));},BfW:function(G){this.Ju.R(this.Data.Avn(this.Azs));},AiN:
function(G){if((!this.AD||!this.AbJ)||!this.Im())return;if(!this.AD.A8j()){this.
Im().ACz(this.AbJ);this.Im().HN(this.AbJ);this.AD=null;}},BxY:function(G){var B;
if(!!this.AD&&(((this.M[0]!==this.AD.M[0])||(this.M[2]!==this.AD.M[2]))||(this.M[
3]!==this.AD.M[1])))this.AD.H([this.M[0],this.M[3],this.M[2],this.M[3]+((B=this.
AD.M)[3]-B[1])]);},ArJ:function(E){this.ACJ=E;this.Ju.S(E);},AwF:function(E){if(
this.Avi===E)return;this.Avi=E;},ASO:function(E){this.A5r=E;this.Ad1.L(E);},A9q:
function(E){if(this.ANe===E)return;this.ANe=E;},A9u:function(E){if(this.ANj===E)
return;this.ANj=E;},ASP:function(E){this.A5s=E;this.Ju.L(E);},A9v:function(E){if(
this.ANm===E)return;this.ANm=E;},A9r:function(E){if(this.ANf===E)return;this.ANf=
E;},C3:function(G){var F;if(!!this.Q){this.Azs=(F=this.Q,F[1].call(F[0]));if(!!this.
AD)this.AD.GS(this.Azs);this.BfW(this);}},By_:function(AoL){var B;var BZ=AoL;var
AI$=AoL.M;var Ay0=Hq;while(!!BZ){var Aam=BZ.FE;if(!BZ.Ab&&(BZ!==AoL)){BZ.Bj(AI$);
return A.abh([0,0,(B=AoL.M)[2]-B[0],B[3]-B[1]],Ay0);}if(!!Aam){if(((B=Aam.QM)[0]>=
B[2])||(B[1]>=B[3])){A.we(BZ,0);A.we(Aam,0);}Aam.QM=A.wC(Aam.QM,AI$);}if(!((BZ.U&
0x1)===0x1))return A.abh([0,0,(B=AoL.M)[2]-B[0],B[3]-B[1]],Ay0);if(BZ===AoL)AI$=
A.lb(A.abh(AI$,BZ.M.slice(0,2)),BZ.M);Ay0=A.abf(Ay0,BZ.M.slice(0,2));BZ=BZ.Ab;}return A.
abh([0,0,(B=AoL.M)[2]-B[0],B[3]-B[1]],Ay0);},A9w:function(E){if(this.ANn===E)return;
this.ANn=E;},Bja:function(G){this.ArR(this.ANG);if(!!this.AD&&!!this.AD.CM)this.
AD.CM.AbC(0,this.AD.CM.AY);if(!!this.Data)this.Ju.R(this.Data.Avn(this.Azs));},A9t:
function(E){if(this.AB_===E)return;this.AB_=E;if(!!this.AD)this.AD.IQ.L(this.AB_
);},A9s:function(E){this.Bho=E;this.AbB.L(E);},_Init:function(aArg){A.Core.P._Init.
call(this,aArg);A.acg.NP._Init.call(this.Ad1={I:this},0);A.acg.Text._Init.call(this.
Ju={I:this},0);A.Core.Bn._Init.call(this.Bn={I:this},0);A.acl.Gk._Init.call(this.
HL={I:this},0);A.acg.Ap._Init.call(this.AbB={I:this},0);this.__proto__=C.DT;this.
H(Fe);this.Ad1.AZ(0x3F);this.Ad1.H(Fe);this.Ad1.L(0xFF252528);this.Ju.AZ(0x3F);this.
Ju.H(Fe);this.Ju.R(A.jV);this.Bn.AZ(0x3F);this.Bn.JT(Hq);this.Bn.Ku(L1);this.Bn.
DC(P9);this.Bn.DM(J1);this.HL.HM(1);this.HL.Fp(250);this.AbB.AZ(0x3A);this.AbB.H(
N$);this.AbB.Cv(1);this.Bhp=A.jb.Text;this.J(this.Ad1,0);this.J(this.Ju,0);this.
J(this.Bn,0);this.J(this.AbB,0);this.Ad1.Ax(A.aaL(A.acw.AHd));this.Ju.S(A.aaL(A.
fl.Af));this.Bn.Ln=[this,this.A32];this.HL.SA=[this,this.AiN];this.HL.Ahk=[this,
this.AAr];this.ACJ=A.aaL(A.fl.Af);this.Avi=A.aaL(A.fl.Ak);this.AbB.Ax(A.aaL(A.aci.
ARL));this.Init(aArg);},_Done:function(){this.__proto__=A.Core.P;this.Ad1._Done(
);this.Ju._Done();this.Bn._Done();this.HL._Done();this.AbB._Done();A.Core.P._Done.
call(this);},_ReInit:function(){A.Core.P._ReInit.call(this);this.Ad1._ReInit();this.
Ju._ReInit();this.Bn._ReInit();this.HL._ReInit();this.AbB._ReInit();this.Ju.S(A.
aaL(A.fl.Af));this.ArJ(A.aaL(A.fl.Af));this.AwF(A.aaL(A.fl.Ak));this.CP();},_Mark:
function(D){var B;A.Core.P._Mark.call(this,D);if((B=this.Data)&&(B._cycle!=D))B.
_Mark(B._cycle=D);if((B=this.AD)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.ACJ
)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Avi)&&(B._cycle!=D))B._Mark(B._cycle=
D);if((B=this.AbJ)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Q)&&((B=B[0])._cycle
!=D))B._Mark(B._cycle=D);if((B=this.Ad1)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
Ju)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Bn)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.HL)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AbB)._cycle!=D)B._Mark(B._cycle=
D);},_className:"DropDown::DropDown"};C.AOe={AtY:null,Bn:null,Bgh:function(G){var
B;(B=this.AtY)?B[1].call(B[0],this):null;},_Init:function(aArg){A.Core.P._Init.call(
this,aArg);A.Core.Bn._Init.call(this.Bn={I:this},0);this.__proto__=C.AOe;this.H(
P_);this.Bn.AZ(0x3F);this.Bn.JT(Hq);this.Bn.Ku(L1);this.Bn.DC(MG);this.Bn.DM(S9);
this.J(this.Bn,0);this.Bn.Av4=[this,this.Bgh];this.Bn.BL=[this,this.Bgh];},_Done:
function(){this.__proto__=A.Core.P;this.Bn._Done();A.Core.P._Done.call(this);},_ReInit:
function(){A.Core.P._ReInit.call(this);this.Bn._ReInit();},_Mark:function(D){var
B;A.Core.P._Mark.call(this,D);if((B=this.AtY)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=
D);if((B=this.Bn)._cycle!=D)B._Mark(B._cycle=D);},_className:"DropDown::EventCatcher"
};
C._Init=function(){C.ACi.__proto__=A.Core.P;C.ANx.__proto__=A.Core.P;C.DT.__proto__=
A.Core.P;C.AOe.__proto__=A.Core.P;};C._ReInit=function(){};C.DH=function(D){};return C;
})();

/* VitalControl demonstration application, © Urban GmbH & Co.KG 2023 */