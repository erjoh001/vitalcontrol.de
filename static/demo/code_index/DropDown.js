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
var Cc="Text";var BF=[0,0,100,24];var E7=[0,0,100,1];var Hp=[0,0];var IS=[0,0,100
,120];var Ir=[100,0];var O1=[100,120];var P3=[0,120];var P4=[90,0,100,60];var CQ=[
0,0,0,0];var Fe=[0,0,240,40];var Lu=[240,0];var P5=[240,40];var JZ=[0,40];var N_=[
210,0,240,40];var P6=[0,0,240,50];var MG=[240,50];var S8=[0,50];
C.VO={Avo:function(aIndex){return A.jV;},AqZ:function(){return 0;},_Init:function(
aArg){this.__proto__=C.VO;A.h7++;},_Done:function(){this.__proto__=null;A.h7--;}
,_ReInit:function(){},_Mark:function(D){var B;if((B=this.I)&&(B._cycle!=D))B._Mark(
B._cycle=D);},I:null,_cycle:0,_observers:null,_className:"DropDown::DDData"};C.ACl={
B6:null,Background:null,Text:null,Bc:null,V:Cc,LS:0xFF000000,A46:0xFF454545,A$o:
0,KT:0,Kg:0x12,Ja:A.wg,Bl:function(aSize){var B;A.Core.P.Bl.call(this,aSize);this.
Text.H([0,0,(B=this.M)[2]-B[0],B[3]-B[1]]);this.Text.H([].concat(this.Text.M[0]+
this.Ja[0],this.Text.M.slice(1,4)));this.Text.H(A.abN(this.Text.M,this.Text.M[2]-
this.Ja[2]));this.Text.H(A.abP(this.Text.M,this.Text.M[1]+this.Ja[1]));this.Text.
H([].concat(this.Text.M.slice(0,3),this.Text.M[3]-this.Ja[3]));},Ai:function(Ae){
var B;A.Core.P.Ai.call(this,Ae);if(((Ae&0x20)===0x20)){this.Background.L(this.A46
);this.Text.L(this.A$o);}else{this.Background.L(this.LS);this.Text.L(this.KT);}}
,Blr:function(E){this.V=E;this.Text.R(E);},WA:function(E){this.LS=E;this.Background.
L(E);},S:function(E){this.B6=E;this.Text.S(E);},A6:function(E){this.Kg=E;this.Text.
A6(E);},Hl:function(E){if(A.aaY(this.Ja,E))return;this.Ja=E;},_Init:function(aArg
){A.Core.P._Init.call(this,aArg);A.acg.AK._Init.call(this.Background={I:this},0);
A.acg.Text._Init.call(this.Text={I:this},0);A.acg.AK._Init.call(this.Bc={I:this}
,0);this.__proto__=C.ACl;this.H(BF);this.Background.AZ(0x3F);this.Background.H(BF
);this.Background.L(0xBE000000);this.Text.AZ(0x3F);this.Text.H(BF);this.Text.R(Cc
);this.Text.L(0xFFFFFFFF);this.Bc.AZ(0x1D);this.Bc.H(E7);this.Bc.L(0x9EFFFFFF);this.
J(this.Background,0);this.J(this.Text,0);this.J(this.Bc,0);this.Text.S(A.aaL(A.fl.
Ak));this.B6=A.aaL(A.fl.Af);},_Done:function(){this.__proto__=A.Core.P;this.Background.
_Done();this.Text._Done();this.Bc._Done();A.Core.P._Done.call(this);},_ReInit:function(
){A.Core.P._ReInit.call(this);this.Background._ReInit();this.Text._ReInit();this.
Bc._ReInit();this.Text.S(A.aaL(A.fl.Ak));this.S(A.aaL(A.fl.Af));},_Mark:function(
D){var B;A.Core.P._Mark.call(this,D);if((B=this.B6)&&(B._cycle!=D))B._Mark(B._cycle=
D);if((B=this.Background)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Text)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.Bc)._cycle!=D)B._Mark(B._cycle=D);},_className:
"DropDown::DDItem"};C.ANx={AEn:null,A9f:null,CM:null,H9:null,Bn:null,BU:null,IP:
null,Gt:0,AY:0,GN:0,AbR:0,ACB:false,A26:function(G){if(this.Bn.Jr>100){var Gh=this.
CM.A6A(this.Bn.H2);if(Gh<0)return;this.CM.GS(Gh);this.CM.HI(Gh,true,null,null);}
},BAw:function(G){var B;if(!this.Bn.NF){var Gh=this.CM.A6A(this.Bn.H2);if(Gh<0)return;
this.CM.GS(Gh);this.CM.HI(Gh,true,null,null);(B=this.AEn)?B[1].call(B[0],this):null;
}},AAx:function(G){this.Bn.Ar(true);},BmQ:function(E){if(A.aa0(this.AEn,E))return;
this.AEn=E;},GS:function(E){this.Gt=E;this.CM.GS(E);},FK:function(){return this.
CM.Gt;},Bz_:function(G){if(this.ACB){var Ha=A.abe(this.Bn.H2,this.Bn.NQ);if((Ha[
1]>8)||(Ha[1]<-8)){this.Il().ANH(this.H9,Hp);this.Bn.Ar(false);}}},Jw:function(E
){this.AY=E;this.CM.Jw(E);},BmS:function(E){this.A9f=E;this.CM.Hk=E;},Ae6:function(
E){this.GN=E;this.CM.Ae6(E);},ASo:function(){return this.CM.GN;},BlK:function(E){
if(this.ACB===E)return;this.ACB=E;},ArA:function(){return this.CM.AY;},ArZ:function(
E){if(this.AbR===E)return;this.AbR=E;},BAD:function(G){},Adw:function(G){var B;var
Vo=this.CM.M;var AtB=this.CM.AqX(0,this.CM.AY-1);var y1=(((Vo[1]-AtB[1])*(Vo[3]-
Vo[1]))/(AtB[3]-AtB[1]))|0;var y2=(((Vo[3]-AtB[1])*(Vo[3]-Vo[1]))/(AtB[3]-AtB[1]
))|0;if(y1<0)y1=0;if(y2>(Vo[3]-Vo[1]))y2=Vo[3]-Vo[1];this.IP.H([Vo[2]-10,y1+Vo[1
],Vo[2],y2+Vo[1]]);this.IP.Z(this.ACB);},_Init:function(aArg){A.Core.P._Init.call(
this,aArg);A.Core.CM._Init.call(this.CM={I:this},0);A.Core.H9._Init.call(this.H9={
I:this},0);A.Core.Bn._Init.call(this.Bn={I:this},0);A.acg.BU._Init.call(this.BU={
I:this},0);A.acg.AK._Init.call(this.IP={I:this},0);this.__proto__=C.ANx;this.H(IS
);this.CM.AZ(0x3F);this.CM.H(IS);this.CM.GS(0);this.CM.Jw(5);this.CM.NZ(C.ACl);this.
H9.AZ(0x3F);this.H9.H(IS);this.H9.AGH=false;this.H9.A_V=false;this.Bn.AZ(0x3F);this.
Bn.JR(Hp);this.Bn.Ks(Ir);this.Bn.DC(O1);this.Bn.DM(P3);this.BU.AZ(0x3F);this.BU.
H(IS);this.BU.L(A.jb.Text);this.IP.H(P4);this.IP.L(0xFF000000);this.J(this.CM,0);
this.J(this.H9,0);this.J(this.Bn,0);this.J(this.BU,0);this.J(this.IP,0);this.CM.
El=[this,this.Adw];this.CM.Aw2(this.H9);this.H9.AF1=[this,this.BAD];this.H9.Zr=[
this,this.AAx];this.Bn.AR_=[this,this.Bz_];this.Bn.D1=[this,this.A26];this.Bn.Lm=[
this,this.BAw];},_Done:function(){this.__proto__=A.Core.P;this.CM._Done();this.H9.
_Done();this.Bn._Done();this.BU._Done();this.IP._Done();A.Core.P._Done.call(this
);},_ReInit:function(){A.Core.P._ReInit.call(this);this.CM._ReInit();this.H9._ReInit(
);this.Bn._ReInit();this.BU._ReInit();this.IP._ReInit();},_Mark:function(D){var B;
A.Core.P._Mark.call(this,D);if((B=this.AEn)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=
D);if((B=this.A9f)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.CM)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.H9)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
Bn)._cycle!=D)B._Mark(B._cycle=D);if((B=this.BU)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.IP)._cycle!=D)B._Mark(B._cycle=D);},_className:"DropDown::DDItemList"};C.
DT={Data:null,AD:null,ACM:null,Avj:null,AbQ:null,Q:null,Ad2:null,Jt:null,Bn:null
,HN:null,AbI:null,AbR:100,GN:20,Bb0:A.wg,A5r:0xFF252528,ANe:0xFF252528,ANj:0xFFF1EEEA
,A5s:0xFFFAFFFE,ANm:0xFFF8FDFF,ANf:0xFF0008C1,Azt:0,ANn:0xFF7EFEFF,ANG:-1,ACb:0xFF000000
,Bhj:0xFFFAFFFE,Bhk:0,CP:function(){this.Bi8(this);},Init:function(aArg){this.ASQ(
this.A5r);this.ArR(this.ACM);this.ASR(this.A5s);},Kl:function(CZ,aClip,aOffset,Ci
,aBlend){A.Core.P.Kl.call(this,CZ,aClip,aOffset,Ci,aBlend);if(!A.aaY(this.Bb0,this.
M)){this.Bb0=this.M;A.pe([this,this.BxQ],this);}},Bl:function(aSize){var B;A.Core.
P.Bl.call(this,aSize);this.Jt.H([0,0,(B=this.M)[2]-B[0],B[3]-B[1]]);this.Jt.H([].
concat(this.Jt.M[0],this.Jt.M.slice(1,4)));this.Jt.H(A.abN(this.Jt.M,this.Jt.M[2
]-((B=this.AbI.M)[2]-B[0])));this.Jt.H(A.abP(this.Jt.M,this.Jt.M[1]));this.Jt.H([
].concat(this.Jt.M.slice(0,3),this.Jt.M[3]));},As:function(E){if(A.aaZ(this.Q,E)
)return;if(!!this.Q)A.z$([this,this.C2],this.Q,0);this.Q=E;if(!!E)A.zX([this,this.
C2],E,0);if(!!E)A.pe([this,this.C2],this);},A9E:function(E){if(this.Data===E)return;
this.Data=E;A.pe([this,this.BfQ],this);},Blb:function(G){var B;if(!this.AD)return;
var Gh=this.AD.CM.G4;var AaF=(C.ACl.isPrototypeOf(B=this.AD.CM.Ch)?B:null);if(!!
AaF){if(this.Data.AqZ()>Gh){AaF.Blr(this.Data.Avo(Gh));AaF.WA(this.ANe);AaF.A46=
this.ANf;AaF.A$o=this.ANn;AaF.S(this.Avj);AaF.KT=this.ANm;AaF.A6(0x12);AaF.Bc.L(
this.ANj);AaF.Hl(CQ);}AaF.H(A.abK(AaF.M,[(B=this.AD.CM.M)[2]-B[0],this.AD.CM.GN]
));}},BzR:function(G){var F;if(!!this.Q){(F=this.Q,F[2].call(F[0],this.AD.FK()));
A.abo(this.Q,0);}A.pe([this,this.A32],this);},A32:function(G){if(!this.AD){this.
Byt(this);if(!this.AD)return;this.HN.Cx=0;this.HN.B2=this.AD.AbR;this.AD.Ar(true
);}else{this.HN.Cx=this.AD.AbR;this.HN.B2=0;this.AD.Ar(false);}this.HN.Ar(true);
this.AD.BlK(this.AbR<(this.AD.ASo()*this.AD.ArA()));},Byt:function(G){var B;if(!
this.Data)return;this.AbQ=A._NewObject(C.AOe,0);this.AD=A._NewObject(C.ANx,0);this.
AD.BmS([this,this.Blb]);this.AD.BmQ([this,this.BzR]);this.AD.Ae6(this.GN);this.AD.
Jw(this.Data.AqZ());this.AD.IP.L(this.ACb);if(this.AbR>(this.AD.ASo()*this.AD.ArA(
)))this.ArZ(this.AD.ASo()*this.AD.ArA());this.AD.ArZ(this.AbR);this.AD.H9.Ga=[0,
this.AbR];this.AD.H(this.M);this.AD.Ar(false);this.AD.GS(this.Azt);var IC=this.Il(
);if(!!IC){this.AbQ.H([0,0,(B=IC.M)[2]-B[0],B[3]-B[1]]);this.AbQ.At0=[this,this.
A32];this.AbQ.J(this.AD,0);IC.J(this.AbQ,0);IC.ZI(this.AbQ);IC.AMP(this.AbQ);}},
ArZ:function(E){if(this.AbR===E)return;this.AbR=E;if(this.ANG<0)this.ANG=E;},AAu:
function(G){var B;if(!this.AD||!this.Il())return;var AJd=this.By4(this);this.AD.
H([].concat(AJd[0],this.AD.M.slice(1,4)));this.AD.H(A.abN(this.AD.M,AJd[2]));this.
AD.H(A.abP(this.AD.M,AJd[3]));this.AD.H([].concat(this.AD.M.slice(0,3),AJd[3]+this.
HN.A4));if((this.AD.M[3]>this.Il().M[3])&&(this.AD.M[3]!==((B=this.Il().M)[3]-B[
1])))this.AD.H([].concat(this.AD.M.slice(0,3),this.Il().M[3]));if((this.AD.M[1]<
this.Il().M[1])&&(this.AD.M[3]!==((B=this.Il().M)[3]-B[1])))this.AD.H(A.abP(this.
AD.M,this.Il().M[1]));},BfQ:function(G){this.Jt.R(this.Data.Avo(this.Azt));},AiT:
function(G){if((!this.AD||!this.AbQ)||!this.Il())return;if(!this.AD.A8l()){this.
Il().ACC(this.AbQ);this.Il().HP(this.AbQ);this.AD=null;}},BxQ:function(G){var B;
if(!!this.AD&&(((this.M[0]!==this.AD.M[0])||(this.M[2]!==this.AD.M[2]))||(this.M[
3]!==this.AD.M[1])))this.AD.H([this.M[0],this.M[3],this.M[2],this.M[3]+((B=this.
AD.M)[3]-B[1])]);},ArR:function(E){this.ACM=E;this.Jt.S(E);},AwG:function(E){if(
this.Avj===E)return;this.Avj=E;},ASQ:function(E){this.A5r=E;this.Ad2.L(E);},A9s:
function(E){if(this.ANe===E)return;this.ANe=E;},A9w:function(E){if(this.ANj===E)
return;this.ANj=E;},ASR:function(E){this.A5s=E;this.Jt.L(E);},A9x:function(E){if(
this.ANm===E)return;this.ANm=E;},A9t:function(E){if(this.ANf===E)return;this.ANf=
E;},C2:function(G){var F;if(!!this.Q){this.Azt=(F=this.Q,F[1].call(F[0]));if(!!this.
AD)this.AD.GS(this.Azt);this.BfQ(this);}},By4:function(AoS){var B;var B0=AoS;var
AJc=AoS.M;var Ay1=Hp;while(!!B0){var Aau=B0.FD;if(!B0.Ab&&(B0!==AoS)){B0.Bj(AJc);
return A.abh([0,0,(B=AoS.M)[2]-B[0],B[3]-B[1]],Ay1);}if(!!Aau){if(((B=Aau.QK)[0]>=
B[2])||(B[1]>=B[3])){A.we(B0,0);A.we(Aau,0);}Aau.QK=A.wC(Aau.QK,AJc);}if(!((B0.U&
0x1)===0x1))return A.abh([0,0,(B=AoS.M)[2]-B[0],B[3]-B[1]],Ay1);if(B0===AoS)AJc=
A.lb(A.abh(AJc,B0.M.slice(0,2)),B0.M);Ay1=A.abf(Ay1,B0.M.slice(0,2));B0=B0.Ab;}return A.
abh([0,0,(B=AoS.M)[2]-B[0],B[3]-B[1]],Ay1);},A9y:function(E){if(this.ANn===E)return;
this.ANn=E;},Bi8:function(G){this.ArZ(this.ANG);if(!!this.AD&&!!this.AD.CM)this.
AD.CM.AbJ(0,this.AD.CM.AY);if(!!this.Data)this.Jt.R(this.Data.Avo(this.Azt));},A9v:
function(E){if(this.ACb===E)return;this.ACb=E;if(!!this.AD)this.AD.IP.L(this.ACb
);},A9u:function(E){this.Bhj=E;this.AbI.L(E);},_Init:function(aArg){A.Core.P._Init.
call(this,aArg);A.acg.NO._Init.call(this.Ad2={I:this},0);A.acg.Text._Init.call(this.
Jt={I:this},0);A.Core.Bn._Init.call(this.Bn={I:this},0);A.acl.Gm._Init.call(this.
HN={I:this},0);A.acg.Ap._Init.call(this.AbI={I:this},0);this.__proto__=C.DT;this.
H(Fe);this.Ad2.AZ(0x3F);this.Ad2.H(Fe);this.Ad2.L(0xFF252528);this.Jt.AZ(0x3F);this.
Jt.H(Fe);this.Jt.R(A.jV);this.Bn.AZ(0x3F);this.Bn.JR(Hp);this.Bn.Ks(Lu);this.Bn.
DC(P5);this.Bn.DM(JZ);this.HN.HO(1);this.HN.Fp(250);this.AbI.AZ(0x3A);this.AbI.H(
N_);this.AbI.Cw(1);this.Bhk=A.jb.Text;this.J(this.Ad2,0);this.J(this.Jt,0);this.
J(this.Bn,0);this.J(this.AbI,0);this.Ad2.Aw(A.aaL(A.acw.AHg));this.Jt.S(A.aaL(A.
fl.Af));this.Bn.Lm=[this,this.A32];this.HN.SB=[this,this.AiT];this.HN.Ahl=[this,
this.AAu];this.ACM=A.aaL(A.fl.Af);this.Avj=A.aaL(A.fl.Ak);this.AbI.Aw(A.aaL(A.aci.
ARM));this.Init(aArg);},_Done:function(){this.__proto__=A.Core.P;this.Ad2._Done(
);this.Jt._Done();this.Bn._Done();this.HN._Done();this.AbI._Done();A.Core.P._Done.
call(this);},_ReInit:function(){A.Core.P._ReInit.call(this);this.Ad2._ReInit();this.
Jt._ReInit();this.Bn._ReInit();this.HN._ReInit();this.AbI._ReInit();this.Jt.S(A.
aaL(A.fl.Af));this.ArR(A.aaL(A.fl.Af));this.AwG(A.aaL(A.fl.Ak));this.CP();},_Mark:
function(D){var B;A.Core.P._Mark.call(this,D);if((B=this.Data)&&(B._cycle!=D))B.
_Mark(B._cycle=D);if((B=this.AD)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.ACM
)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Avj)&&(B._cycle!=D))B._Mark(B._cycle=
D);if((B=this.AbQ)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Q)&&((B=B[0])._cycle
!=D))B._Mark(B._cycle=D);if((B=this.Ad2)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
Jt)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Bn)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.HN)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AbI)._cycle!=D)B._Mark(B._cycle=
D);},_className:"DropDown::DropDown"};C.AOe={At0:null,Bn:null,Bgb:function(G){var
B;(B=this.At0)?B[1].call(B[0],this):null;},_Init:function(aArg){A.Core.P._Init.call(
this,aArg);A.Core.Bn._Init.call(this.Bn={I:this},0);this.__proto__=C.AOe;this.H(
P6);this.Bn.AZ(0x3F);this.Bn.JR(Hp);this.Bn.Ks(Lu);this.Bn.DC(MG);this.Bn.DM(S8);
this.J(this.Bn,0);this.Bn.Av5=[this,this.Bgb];this.Bn.BN=[this,this.Bgb];},_Done:
function(){this.__proto__=A.Core.P;this.Bn._Done();A.Core.P._Done.call(this);},_ReInit:
function(){A.Core.P._ReInit.call(this);this.Bn._ReInit();},_Mark:function(D){var
B;A.Core.P._Mark.call(this,D);if((B=this.At0)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=
D);if((B=this.Bn)._cycle!=D)B._Mark(B._cycle=D);},_className:"DropDown::EventCatcher"
};
C._Init=function(){C.ACl.__proto__=A.Core.P;C.ANx.__proto__=A.Core.P;C.DT.__proto__=
A.Core.P;C.AOe.__proto__=A.Core.P;};C._ReInit=function(){};C.DH=function(D){};return C;
})();

/* VitalControl demonstration application, © Urban GmbH & Co.KG 2023 */