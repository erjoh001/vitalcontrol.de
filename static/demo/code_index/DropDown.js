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
var Cc="Text";var BD=[0,0,100,24];var E7=[0,0,100,1];var Hq=[0,0];var IU=[0,0,100
,120];var Is=[100,0];var O2=[100,120];var P7=[0,120];var P8=[90,0,100,60];var CQ=[
0,0,0,0];var Ff=[0,0,240,40];var L1=[240,0];var P9=[240,40];var J2=[0,40];var N$=[
210,0,240,40];var P_=[0,0,240,50];var MH=[240,50];var S8=[0,50];
C.VN={Avp:function(aIndex){return A.jV;},AqT:function(){return 0;},_Init:function(
aArg){this.__proto__=C.VN;A.h7++;},_Done:function(){this.__proto__=null;A.h7--;}
,_ReInit:function(){},_Mark:function(D){var B;if((B=this.I)&&(B._cycle!=D))B._Mark(
B._cycle=D);},I:null,_cycle:0,_observers:null,_className:"DropDown::DDData"};C.ACn={
B6:null,Background:null,Text:null,Bc:null,V:Cc,LQ:0xFF000000,A5e:0xFF454545,A$z:
0,KS:0,Ki:0x12,Jc:A.wg,Bl:function(aSize){var B;A.Core.P.Bl.call(this,aSize);this.
Text.H([0,0,(B=this.M)[2]-B[0],B[3]-B[1]]);this.Text.H([].concat(this.Text.M[0]+
this.Jc[0],this.Text.M.slice(1,4)));this.Text.H(A.abN(this.Text.M,this.Text.M[2]-
this.Jc[2]));this.Text.H(A.abP(this.Text.M,this.Text.M[1]+this.Jc[1]));this.Text.
H([].concat(this.Text.M.slice(0,3),this.Text.M[3]-this.Jc[3]));},Ai:function(Ae){
var B;A.Core.P.Ai.call(this,Ae);if(((Ae&0x20)===0x20)){this.Background.L(this.A5e
);this.Text.L(this.A$z);}else{this.Background.L(this.LQ);this.Text.L(this.KS);}}
,BlO:function(E){this.V=E;this.Text.R(E);},Wy:function(E){this.LQ=E;this.Background.
L(E);},S:function(E){this.B6=E;this.Text.S(E);},A6:function(E){this.Ki=E;this.Text.
A6(E);},Hm:function(E){if(A.aaY(this.Jc,E))return;this.Jc=E;},_Init:function(aArg
){A.Core.P._Init.call(this,aArg);A.acg.AL._Init.call(this.Background={I:this},0);
A.acg.Text._Init.call(this.Text={I:this},0);A.acg.AL._Init.call(this.Bc={I:this}
,0);this.__proto__=C.ACn;this.H(BD);this.Background.AZ(0x3F);this.Background.H(BD
);this.Background.L(0xBE000000);this.Text.AZ(0x3F);this.Text.H(BD);this.Text.R(Cc
);this.Text.L(0xFFFFFFFF);this.Bc.AZ(0x1D);this.Bc.H(E7);this.Bc.L(0x9EFFFFFF);this.
J(this.Background,0);this.J(this.Text,0);this.J(this.Bc,0);this.Text.S(A.aaL(A.fl.
Ak));this.B6=A.aaL(A.fl.Af);},_Done:function(){this.__proto__=A.Core.P;this.Background.
_Done();this.Text._Done();this.Bc._Done();A.Core.P._Done.call(this);},_ReInit:function(
){A.Core.P._ReInit.call(this);this.Background._ReInit();this.Text._ReInit();this.
Bc._ReInit();this.Text.S(A.aaL(A.fl.Ak));this.S(A.aaL(A.fl.Af));},_Mark:function(
D){var B;A.Core.P._Mark.call(this,D);if((B=this.B6)&&(B._cycle!=D))B._Mark(B._cycle=
D);if((B=this.Background)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Text)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.Bc)._cycle!=D)B._Mark(B._cycle=D);},_className:
"DropDown::DDItem"};C.ANA={AEo:null,A9m:null,CM:null,H9:null,Bn:null,BU:null,IR:
null,Gs:0,AY:0,GO:0,AbK:0,ACD:false,A3d:function(G){if(this.Bn.Jt>100){var Gf=this.
CM.A6G(this.Bn.H0);if(Gf<0)return;this.CM.GT(Gf);this.CM.HH(Gf,true,null,null);}
},BAX:function(G){var B;if(!this.Bn.NF){var Gf=this.CM.A6G(this.Bn.H0);if(Gf<0)return;
this.CM.GT(Gf);this.CM.HH(Gf,true,null,null);(B=this.AEo)?B[1].call(B[0],this):null;
}},AAz:function(G){this.Bn.Ar(true);},Bna:function(E){if(A.aa0(this.AEo,E))return;
this.AEo=E;},GT:function(E){this.Gs=E;this.CM.GT(E);},FN:function(){return this.
CM.Gs;},BAx:function(G){if(this.ACD){var Hb=A.abe(this.Bn.H0,this.Bn.NR);if((Hb[
1]>8)||(Hb[1]<-8)){this.Im().ANK(this.H9,Hq);this.Bn.Ar(false);}}},Jy:function(E
){this.AY=E;this.CM.Jy(E);},Bnc:function(E){this.A9m=E;this.CM.Hl=E;},Ae6:function(
E){this.GO=E;this.CM.Ae6(E);},ASw:function(){return this.CM.GO;},Bl6:function(E){
if(this.ACD===E)return;this.ACD=E;},Arv:function(){return this.CM.AY;},ArU:function(
E){if(this.AbK===E)return;this.AbK=E;},BA5:function(G){},Adw:function(G){var B;var
Vn=this.CM.M;var Aty=this.CM.AqR(0,this.CM.AY-1);var y1=(((Vn[1]-Aty[1])*(Vn[3]-
Vn[1]))/(Aty[3]-Aty[1]))|0;var y2=(((Vn[3]-Aty[1])*(Vn[3]-Vn[1]))/(Aty[3]-Aty[1]
))|0;if(y1<0)y1=0;if(y2>(Vn[3]-Vn[1]))y2=Vn[3]-Vn[1];this.IR.H([Vn[2]-10,y1+Vn[1
],Vn[2],y2+Vn[1]]);this.IR.Z(this.ACD);},_Init:function(aArg){A.Core.P._Init.call(
this,aArg);A.Core.CM._Init.call(this.CM={I:this},0);A.Core.H9._Init.call(this.H9={
I:this},0);A.Core.Bn._Init.call(this.Bn={I:this},0);A.acg.BU._Init.call(this.BU={
I:this},0);A.acg.AL._Init.call(this.IR={I:this},0);this.__proto__=C.ANA;this.H(IU
);this.CM.AZ(0x3F);this.CM.H(IU);this.CM.GT(0);this.CM.Jy(5);this.CM.N0(C.ACn);this.
H9.AZ(0x3F);this.H9.H(IU);this.H9.AGI=false;this.H9.A_7=false;this.Bn.AZ(0x3F);this.
Bn.JU(Hq);this.Bn.Ku(Is);this.Bn.DC(O2);this.Bn.DM(P7);this.BU.AZ(0x3F);this.BU.
H(IU);this.BU.L(A.jb.Text);this.IR.H(P8);this.IR.L(0xFF000000);this.J(this.CM,0);
this.J(this.H9,0);this.J(this.Bn,0);this.J(this.BU,0);this.J(this.IR,0);this.CM.
El=[this,this.Adw];this.CM.Aw3(this.H9);this.H9.AF2=[this,this.BA5];this.H9.Zi=[
this,this.AAz];this.Bn.ASh=[this,this.BAx];this.Bn.D1=[this,this.A3d];this.Bn.Ln=[
this,this.BAX];},_Done:function(){this.__proto__=A.Core.P;this.CM._Done();this.H9.
_Done();this.Bn._Done();this.BU._Done();this.IR._Done();A.Core.P._Done.call(this
);},_ReInit:function(){A.Core.P._ReInit.call(this);this.CM._ReInit();this.H9._ReInit(
);this.Bn._ReInit();this.BU._ReInit();this.IR._ReInit();},_Mark:function(D){var B;
A.Core.P._Mark.call(this,D);if((B=this.AEo)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=
D);if((B=this.A9m)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.CM)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.H9)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
Bn)._cycle!=D)B._Mark(B._cycle=D);if((B=this.BU)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.IR)._cycle!=D)B._Mark(B._cycle=D);},_className:"DropDown::DDItemList"};C.
DT={Data:null,AD:null,ACO:null,Avk:null,AbJ:null,Q:null,Ad1:null,Jv:null,Bn:null
,HL:null,AbB:null,AbK:100,GO:20,Bcf:A.wg,A5B:0xFF252528,ANh:0xFF252528,ANm:0xFFF1EEEA
,A5C:0xFFFAFFFE,ANp:0xFFF8FDFF,ANi:0xFF0008C1,Azx:0,ANq:0xFF7EFEFF,ANJ:-1,ACd:0xFF000000
,Bhz:0xFFFAFFFE,BhA:0,CP:function(){this.Bjp(this);},Init:function(aArg){this.ASY(
this.A5B);this.ArM(this.ACO);this.ASZ(this.A5C);},Kn:function(CY,aClip,aOffset,Cj
,aBlend){A.Core.P.Kn.call(this,CY,aClip,aOffset,Cj,aBlend);if(!A.aaY(this.Bcf,this.
M)){this.Bcf=this.M;A.pe([this,this.Byf],this);}},Bl:function(aSize){var B;A.Core.
P.Bl.call(this,aSize);this.Jv.H([0,0,(B=this.M)[2]-B[0],B[3]-B[1]]);this.Jv.H([].
concat(this.Jv.M[0],this.Jv.M.slice(1,4)));this.Jv.H(A.abN(this.Jv.M,this.Jv.M[2
]-((B=this.AbB.M)[2]-B[0])));this.Jv.H(A.abP(this.Jv.M,this.Jv.M[1]));this.Jv.H([
].concat(this.Jv.M.slice(0,3),this.Jv.M[3]));},At:function(E){if(A.aaZ(this.Q,E)
)return;if(!!this.Q)A.z$([this,this.C3],this.Q,0);this.Q=E;if(!!E)A.zX([this,this.
C3],E,0);if(!!E)A.pe([this,this.C3],this);},A9L:function(E){if(this.Data===E)return;
this.Data=E;A.pe([this,this.Bf7],this);},Bly:function(G){var B;if(!this.AD)return;
var Gf=this.AD.CM.G5;var Aay=(C.ACn.isPrototypeOf(B=this.AD.CM.Ci)?B:null);if(!!
Aay){if(this.Data.AqT()>Gf){Aay.BlO(this.Data.Avp(Gf));Aay.Wy(this.ANh);Aay.A5e=
this.ANi;Aay.A$z=this.ANq;Aay.S(this.Avk);Aay.KS=this.ANp;Aay.A6(0x12);Aay.Bc.L(
this.ANm);Aay.Hm(CQ);}Aay.H(A.abK(Aay.M,[(B=this.AD.CM.M)[2]-B[0],this.AD.CM.GO]
));}},BAe:function(G){var F;if(!!this.Q){(F=this.Q,F[2].call(F[0],this.AD.FN()));
A.abo(this.Q,0);}A.pe([this,this.A4a],this);},A4a:function(G){if(!this.AD){this.
ByS(this);if(!this.AD)return;this.HL.Cx=0;this.HL.B2=this.AD.AbK;this.AD.Ar(true
);}else{this.HL.Cx=this.AD.AbK;this.HL.B2=0;this.AD.Ar(false);}this.HL.Ar(true);
this.AD.Bl6(this.AbK<(this.AD.ASw()*this.AD.Arv()));},ByS:function(G){var B;if(!
this.Data)return;this.AbJ=A._NewObject(C.AOh,0);this.AD=A._NewObject(C.ANA,0);this.
AD.Bnc([this,this.Bly]);this.AD.Bna([this,this.BAe]);this.AD.Ae6(this.GO);this.AD.
Jy(this.Data.AqT());this.AD.IR.L(this.ACd);if(this.AbK>(this.AD.ASw()*this.AD.Arv(
)))this.ArU(this.AD.ASw()*this.AD.Arv());this.AD.ArU(this.AbK);this.AD.H9.F_=[0,
this.AbK];this.AD.H(this.M);this.AD.Ar(false);this.AD.GT(this.Azx);var IE=this.Im(
);if(!!IE){this.AbJ.H([0,0,(B=IE.M)[2]-B[0],B[3]-B[1]]);this.AbJ.AtY=[this,this.
A4a];this.AbJ.J(this.AD,0);IE.J(this.AbJ,0);IE.ZB(this.AbJ);IE.AMR(this.AbJ);}},
ArU:function(E){if(this.AbK===E)return;this.AbK=E;if(this.ANJ<0)this.ANJ=E;},AAw:
function(G){var B;if(!this.AD||!this.Im())return;var AJd=this.Bzr(this);this.AD.
H([].concat(AJd[0],this.AD.M.slice(1,4)));this.AD.H(A.abN(this.AD.M,AJd[2]));this.
AD.H(A.abP(this.AD.M,AJd[3]));this.AD.H([].concat(this.AD.M.slice(0,3),AJd[3]+this.
HL.A5));if((this.AD.M[3]>this.Im().M[3])&&(this.AD.M[3]!==((B=this.Im().M)[3]-B[
1])))this.AD.H([].concat(this.AD.M.slice(0,3),this.Im().M[3]));if((this.AD.M[1]<
this.Im().M[1])&&(this.AD.M[3]!==((B=this.Im().M)[3]-B[1])))this.AD.H(A.abP(this.
AD.M,this.Im().M[1]));},Bf7:function(G){this.Jv.R(this.Data.Avp(this.Azx));},AiO:
function(G){if((!this.AD||!this.AbJ)||!this.Im())return;if(!this.AD.A8r()){this.
Im().ACE(this.AbJ);this.Im().HN(this.AbJ);this.AD=null;}},Byf:function(G){var B;
if(!!this.AD&&(((this.M[0]!==this.AD.M[0])||(this.M[2]!==this.AD.M[2]))||(this.M[
3]!==this.AD.M[1])))this.AD.H([this.M[0],this.M[3],this.M[2],this.M[3]+((B=this.
AD.M)[3]-B[1])]);},ArM:function(E){this.ACO=E;this.Jv.S(E);},AwH:function(E){if(
this.Avk===E)return;this.Avk=E;},ASY:function(E){this.A5B=E;this.Ad1.L(E);},A9z:
function(E){if(this.ANh===E)return;this.ANh=E;},A9D:function(E){if(this.ANm===E)
return;this.ANm=E;},ASZ:function(E){this.A5C=E;this.Jv.L(E);},A9E:function(E){if(
this.ANp===E)return;this.ANp=E;},A9A:function(E){if(this.ANi===E)return;this.ANi=
E;},C3:function(G){var F;if(!!this.Q){this.Azx=(F=this.Q,F[1].call(F[0]));if(!!this.
AD)this.AD.GT(this.Azx);this.Bf7(this);}},Bzr:function(AoN){var B;var B0=AoN;var
AJc=AoN.M;var Ay5=Hq;while(!!B0){var Aan=B0.FG;if(!B0.Ab&&(B0!==AoN)){B0.Bj(AJc);
return A.abh([0,0,(B=AoN.M)[2]-B[0],B[3]-B[1]],Ay5);}if(!!Aan){if(((B=Aan.QM)[0]>=
B[2])||(B[1]>=B[3])){A.we(B0,0);A.we(Aan,0);}Aan.QM=A.wC(Aan.QM,AJc);}if(!((B0.U&
0x1)===0x1))return A.abh([0,0,(B=AoN.M)[2]-B[0],B[3]-B[1]],Ay5);if(B0===AoN)AJc=
A.lb(A.abh(AJc,B0.M.slice(0,2)),B0.M);Ay5=A.abf(Ay5,B0.M.slice(0,2));B0=B0.Ab;}return A.
abh([0,0,(B=AoN.M)[2]-B[0],B[3]-B[1]],Ay5);},A9F:function(E){if(this.ANq===E)return;
this.ANq=E;},Bjp:function(G){this.ArU(this.ANJ);if(!!this.AD&&!!this.AD.CM)this.
AD.CM.AbC(0,this.AD.CM.AY);if(!!this.Data)this.Jv.R(this.Data.Avp(this.Azx));},A9C:
function(E){if(this.ACd===E)return;this.ACd=E;if(!!this.AD)this.AD.IR.L(this.ACd
);},A9B:function(E){this.Bhz=E;this.AbB.L(E);},_Init:function(aArg){A.Core.P._Init.
call(this,aArg);A.acg.NP._Init.call(this.Ad1={I:this},0);A.acg.Text._Init.call(this.
Jv={I:this},0);A.Core.Bn._Init.call(this.Bn={I:this},0);A.acl.Gl._Init.call(this.
HL={I:this},0);A.acg.Ap._Init.call(this.AbB={I:this},0);this.__proto__=C.DT;this.
H(Ff);this.Ad1.AZ(0x3F);this.Ad1.H(Ff);this.Ad1.L(0xFF252528);this.Jv.AZ(0x3F);this.
Jv.H(Ff);this.Jv.R(A.jV);this.Bn.AZ(0x3F);this.Bn.JU(Hq);this.Bn.Ku(L1);this.Bn.
DC(P9);this.Bn.DM(J2);this.HL.HM(1);this.HL.Fq(250);this.AbB.AZ(0x3A);this.AbB.H(
N$);this.AbB.Cw(1);this.BhA=A.jb.Text;this.J(this.Ad1,0);this.J(this.Jv,0);this.
J(this.Bn,0);this.J(this.AbB,0);this.Ad1.Ax(A.aaL(A.acw.AHh));this.Jv.S(A.aaL(A.
fl.Af));this.Bn.Ln=[this,this.A4a];this.HL.Sz=[this,this.AiO];this.HL.Ahl=[this,
this.AAw];this.ACO=A.aaL(A.fl.Af);this.Avk=A.aaL(A.fl.Ak);this.AbB.Ax(A.aaL(A.aci.
ARV));this.Init(aArg);},_Done:function(){this.__proto__=A.Core.P;this.Ad1._Done(
);this.Jv._Done();this.Bn._Done();this.HL._Done();this.AbB._Done();A.Core.P._Done.
call(this);},_ReInit:function(){A.Core.P._ReInit.call(this);this.Ad1._ReInit();this.
Jv._ReInit();this.Bn._ReInit();this.HL._ReInit();this.AbB._ReInit();this.Jv.S(A.
aaL(A.fl.Af));this.ArM(A.aaL(A.fl.Af));this.AwH(A.aaL(A.fl.Ak));this.CP();},_Mark:
function(D){var B;A.Core.P._Mark.call(this,D);if((B=this.Data)&&(B._cycle!=D))B.
_Mark(B._cycle=D);if((B=this.AD)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.ACO
)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Avk)&&(B._cycle!=D))B._Mark(B._cycle=
D);if((B=this.AbJ)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Q)&&((B=B[0])._cycle
!=D))B._Mark(B._cycle=D);if((B=this.Ad1)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
Jv)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Bn)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.HL)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AbB)._cycle!=D)B._Mark(B._cycle=
D);},_className:"DropDown::DropDown"};C.AOh={AtY:null,Bn:null,Bgt:function(G){var
B;(B=this.AtY)?B[1].call(B[0],this):null;},_Init:function(aArg){A.Core.P._Init.call(
this,aArg);A.Core.Bn._Init.call(this.Bn={I:this},0);this.__proto__=C.AOh;this.H(
P_);this.Bn.AZ(0x3F);this.Bn.JU(Hq);this.Bn.Ku(L1);this.Bn.DC(MH);this.Bn.DM(S8);
this.J(this.Bn,0);this.Bn.Av6=[this,this.Bgt];this.Bn.BL=[this,this.Bgt];},_Done:
function(){this.__proto__=A.Core.P;this.Bn._Done();A.Core.P._Done.call(this);},_ReInit:
function(){A.Core.P._ReInit.call(this);this.Bn._ReInit();},_Mark:function(D){var
B;A.Core.P._Mark.call(this,D);if((B=this.AtY)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=
D);if((B=this.Bn)._cycle!=D)B._Mark(B._cycle=D);},_className:"DropDown::EventCatcher"
};
C._Init=function(){C.ACn.__proto__=A.Core.P;C.ANA.__proto__=A.Core.P;C.DT.__proto__=
A.Core.P;C.AOh.__proto__=A.Core.P;};C._ReInit=function(){};C.DH=function(D){};return C;
})();

/* VitalControl demonstration application, © Urban GmbH & Co.KG 2023 */