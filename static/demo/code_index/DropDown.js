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
var Cc="Text";var BD=[0,0,100,24];var E6=[0,0,100,1];var Hp=[0,0];var IS=[0,0,100
,120];var Ir=[100,0];var O1=[100,120];var P3=[0,120];var P4=[90,0,100,60];var CQ=[
0,0,0,0];var Fe=[0,0,240,40];var L1=[240,0];var P5=[240,40];var J0=[0,40];var N_=[
210,0,240,40];var P6=[0,0,240,50];var MG=[240,50];var S6=[0,50];
C.VK={Avi:function(aIndex){return A.jV;},AqO:function(){return 0;},_Init:function(
aArg){this.__proto__=C.VK;A.h7++;},_Done:function(){this.__proto__=null;A.h7--;}
,_ReInit:function(){},_Mark:function(D){var B;if((B=this.I)&&(B._cycle!=D))B._Mark(
B._cycle=D);},I:null,_cycle:0,_observers:null,_className:"DropDown::DDData"};C.ACh={
B6:null,Background:null,Text:null,Bc:null,V:Cc,LQ:0xFF000000,A4V:0xFF454545,A$c:
0,KR:0,Kg:0x12,Ja:A.wg,Bl:function(aSize){var B;A.Core.P.Bl.call(this,aSize);this.
Text.H([0,0,(B=this.M)[2]-B[0],B[3]-B[1]]);this.Text.H([].concat(this.Text.M[0]+
this.Ja[0],this.Text.M.slice(1,4)));this.Text.H(A.abN(this.Text.M,this.Text.M[2]-
this.Ja[2]));this.Text.H(A.abP(this.Text.M,this.Text.M[1]+this.Ja[1]));this.Text.
H([].concat(this.Text.M.slice(0,3),this.Text.M[3]-this.Ja[3]));},Ai:function(Ae){
var B;A.Core.P.Ai.call(this,Ae);if(((Ae&0x20)===0x20)){this.Background.L(this.A4V
);this.Text.L(this.A$c);}else{this.Background.L(this.LQ);this.Text.L(this.KR);}}
,Bld:function(E){this.V=E;this.Text.R(E);},Wv:function(E){this.LQ=E;this.Background.
L(E);},S:function(E){this.B6=E;this.Text.S(E);},A5:function(E){this.Kg=E;this.Text.
A5(E);},Hl:function(E){if(A.aaY(this.Ja,E))return;this.Ja=E;},_Init:function(aArg
){A.Core.P._Init.call(this,aArg);A.acg.AK._Init.call(this.Background={I:this},0);
A.acg.Text._Init.call(this.Text={I:this},0);A.acg.AK._Init.call(this.Bc={I:this}
,0);this.__proto__=C.ACh;this.H(BD);this.Background.AZ(0x3F);this.Background.H(BD
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
"DropDown::DDItem"};C.ANt={AEj:null,A85:null,CM:null,H9:null,Bn:null,BU:null,IP:
null,Gs:0,AY:0,GN:0,AbI:0,ACx:false,A2U:function(G){if(this.Bn.Jr>100){var Gf=this.
CM.A6o(this.Bn.H0);if(Gf<0)return;this.CM.GS(Gf);this.CM.HH(Gf,true,null,null);}
},BAf:function(G){var B;if(!this.Bn.NF){var Gf=this.CM.A6o(this.Bn.H0);if(Gf<0)return;
this.CM.GS(Gf);this.CM.HH(Gf,true,null,null);(B=this.AEj)?B[1].call(B[0],this):null;
}},AAt:function(G){this.Bn.Ar(true);},BmB:function(E){if(A.aa0(this.AEj,E))return;
this.AEj=E;},GS:function(E){this.Gs=E;this.CM.GS(E);},FK:function(){return this.
CM.Gs;},BzT:function(G){if(this.ACx){var Ha=A.abe(this.Bn.H0,this.Bn.NQ);if((Ha[
1]>8)||(Ha[1]<-8)){this.Il().AND(this.H9,Hp);this.Bn.Ar(false);}}},Jw:function(E
){this.AY=E;this.CM.Jw(E);},BmD:function(E){this.A85=E;this.CM.Hk=E;},Ae3:function(
E){this.GN=E;this.CM.Ae3(E);},ASj:function(){return this.CM.GN;},Blv:function(E){
if(this.ACx===E)return;this.ACx=E;},Arp:function(){return this.CM.AY;},ArO:function(
E){if(this.AbI===E)return;this.AbI=E;},BAm:function(G){},Adt:function(G){var B;var
Vk=this.CM.M;var Att=this.CM.AqM(0,this.CM.AY-1);var y1=(((Vk[1]-Att[1])*(Vk[3]-
Vk[1]))/(Att[3]-Att[1]))|0;var y2=(((Vk[3]-Att[1])*(Vk[3]-Vk[1]))/(Att[3]-Att[1]
))|0;if(y1<0)y1=0;if(y2>(Vk[3]-Vk[1]))y2=Vk[3]-Vk[1];this.IP.H([Vk[2]-10,y1+Vk[1
],Vk[2],y2+Vk[1]]);this.IP.Z(this.ACx);},_Init:function(aArg){A.Core.P._Init.call(
this,aArg);A.Core.CM._Init.call(this.CM={I:this},0);A.Core.H9._Init.call(this.H9={
I:this},0);A.Core.Bn._Init.call(this.Bn={I:this},0);A.acg.BU._Init.call(this.BU={
I:this},0);A.acg.AK._Init.call(this.IP={I:this},0);this.__proto__=C.ANt;this.H(IS
);this.CM.AZ(0x3F);this.CM.H(IS);this.CM.GS(0);this.CM.Jw(5);this.CM.NZ(C.ACh);this.
H9.AZ(0x3F);this.H9.H(IS);this.H9.AGD=false;this.H9.A_J=false;this.Bn.AZ(0x3F);this.
Bn.JS(Hp);this.Bn.Ks(Ir);this.Bn.DC(O1);this.Bn.DM(P3);this.BU.AZ(0x3F);this.BU.
H(IS);this.BU.L(A.jb.Text);this.IP.H(P4);this.IP.L(0xFF000000);this.J(this.CM,0);
this.J(this.H9,0);this.J(this.Bn,0);this.J(this.BU,0);this.J(this.IP,0);this.CM.
El=[this,this.Adt];this.CM.AwW(this.H9);this.H9.AFW=[this,this.BAm];this.H9.Zh=[
this,this.AAt];this.Bn.AR6=[this,this.BzT];this.Bn.D1=[this,this.A2U];this.Bn.Lm=[
this,this.BAf];},_Done:function(){this.__proto__=A.Core.P;this.CM._Done();this.H9.
_Done();this.Bn._Done();this.BU._Done();this.IP._Done();A.Core.P._Done.call(this
);},_ReInit:function(){A.Core.P._ReInit.call(this);this.CM._ReInit();this.H9._ReInit(
);this.Bn._ReInit();this.BU._ReInit();this.IP._ReInit();},_Mark:function(D){var B;
A.Core.P._Mark.call(this,D);if((B=this.AEj)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=
D);if((B=this.A85)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.CM)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.H9)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
Bn)._cycle!=D)B._Mark(B._cycle=D);if((B=this.BU)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.IP)._cycle!=D)B._Mark(B._cycle=D);},_className:"DropDown::DDItemList"};C.
DT={Data:null,AD:null,ACI:null,Avd:null,AbH:null,Q:null,AdY:null,Jt:null,Bn:null
,HL:null,Abz:null,AbI:100,GN:20,BbO:A.wg,A5g:0xFF252528,ANa:0xFF252528,ANf:0xFFF1EEEA
,A5h:0xFFFAFFFE,ANi:0xFFF8FDFF,ANb:0xFF0008C1,Azr:0,ANj:0xFF7EFEFF,ANC:-1,AB9:0xFF000000
,Bg9:0xFFFAFFFE,Bg_:0,CP:function(){this.BiU(this);},Init:function(aArg){this.ASL(
this.A5g);this.ArG(this.ACI);this.ASM(this.A5h);},Kl:function(CY,aClip,aOffset,Ci
,aBlend){A.Core.P.Kl.call(this,CY,aClip,aOffset,Ci,aBlend);if(!A.aaY(this.BbO,this.
M)){this.BbO=this.M;A.pe([this,this.BxB],this);}},Bl:function(aSize){var B;A.Core.
P.Bl.call(this,aSize);this.Jt.H([0,0,(B=this.M)[2]-B[0],B[3]-B[1]]);this.Jt.H([].
concat(this.Jt.M[0],this.Jt.M.slice(1,4)));this.Jt.H(A.abN(this.Jt.M,this.Jt.M[2
]-((B=this.Abz.M)[2]-B[0])));this.Jt.H(A.abP(this.Jt.M,this.Jt.M[1]));this.Jt.H([
].concat(this.Jt.M.slice(0,3),this.Jt.M[3]));},At:function(E){if(A.aaZ(this.Q,E)
)return;if(!!this.Q)A.z$([this,this.C2],this.Q,0);this.Q=E;if(!!E)A.zX([this,this.
C2],E,0);if(!!E)A.pe([this,this.C2],this);},A9s:function(E){if(this.Data===E)return;
this.Data=E;A.pe([this,this.BfE],this);},BkZ:function(G){var B;if(!this.AD)return;
var Gf=this.AD.CM.G4;var Aaw=(C.ACh.isPrototypeOf(B=this.AD.CM.Ch)?B:null);if(!!
Aaw){if(this.Data.AqO()>Gf){Aaw.Bld(this.Data.Avi(Gf));Aaw.Wv(this.ANa);Aaw.A4V=
this.ANb;Aaw.A$c=this.ANj;Aaw.S(this.Avd);Aaw.KR=this.ANi;Aaw.A5(0x12);Aaw.Bc.L(
this.ANf);Aaw.Hl(CQ);}Aaw.H(A.abK(Aaw.M,[(B=this.AD.CM.M)[2]-B[0],this.AD.CM.GN]
));}},BzA:function(G){var F;if(!!this.Q){(F=this.Q,F[2].call(F[0],this.AD.FK()));
A.abo(this.Q,0);}A.pe([this,this.A3R],this);},A3R:function(G){if(!this.AD){this.
Byc(this);if(!this.AD)return;this.HL.Cw=0;this.HL.B2=this.AD.AbI;this.AD.Ar(true
);}else{this.HL.Cw=this.AD.AbI;this.HL.B2=0;this.AD.Ar(false);}this.HL.Ar(true);
this.AD.Blv(this.AbI<(this.AD.ASj()*this.AD.Arp()));},Byc:function(G){var B;if(!
this.Data)return;this.AbH=A._NewObject(C.AOa,0);this.AD=A._NewObject(C.ANt,0);this.
AD.BmD([this,this.BkZ]);this.AD.BmB([this,this.BzA]);this.AD.Ae3(this.GN);this.AD.
Jw(this.Data.AqO());this.AD.IP.L(this.AB9);if(this.AbI>(this.AD.ASj()*this.AD.Arp(
)))this.ArO(this.AD.ASj()*this.AD.Arp());this.AD.ArO(this.AbI);this.AD.H9.F_=[0,
this.AbI];this.AD.H(this.M);this.AD.Ar(false);this.AD.GS(this.Azr);var IC=this.Il(
);if(!!IC){this.AbH.H([0,0,(B=IC.M)[2]-B[0],B[3]-B[1]]);this.AbH.AtT=[this,this.
A3R];this.AbH.J(this.AD,0);IC.J(this.AbH,0);IC.ZA(this.AbH);IC.AML(this.AbH);}},
ArO:function(E){if(this.AbI===E)return;this.AbI=E;if(this.ANC<0)this.ANC=E;},AAq:
function(G){var B;if(!this.AD||!this.Il())return;var AJa=this.ByN(this);this.AD.
H([].concat(AJa[0],this.AD.M.slice(1,4)));this.AD.H(A.abN(this.AD.M,AJa[2]));this.
AD.H(A.abP(this.AD.M,AJa[3]));this.AD.H([].concat(this.AD.M.slice(0,3),AJa[3]+this.
HL.A4));if((this.AD.M[3]>this.Il().M[3])&&(this.AD.M[3]!==((B=this.Il().M)[3]-B[
1])))this.AD.H([].concat(this.AD.M.slice(0,3),this.Il().M[3]));if((this.AD.M[1]<
this.Il().M[1])&&(this.AD.M[3]!==((B=this.Il().M)[3]-B[1])))this.AD.H(A.abP(this.
AD.M,this.Il().M[1]));},BfE:function(G){this.Jt.R(this.Data.Avi(this.Azr));},AiK:
function(G){if((!this.AD||!this.AbH)||!this.Il())return;if(!this.AD.A7$()){this.
Il().ACy(this.AbH);this.Il().HN(this.AbH);this.AD=null;}},BxB:function(G){var B;
if(!!this.AD&&(((this.M[0]!==this.AD.M[0])||(this.M[2]!==this.AD.M[2]))||(this.M[
3]!==this.AD.M[1])))this.AD.H([this.M[0],this.M[3],this.M[2],this.M[3]+((B=this.
AD.M)[3]-B[1])]);},ArG:function(E){this.ACI=E;this.Jt.S(E);},AwA:function(E){if(
this.Avd===E)return;this.Avd=E;},ASL:function(E){this.A5g=E;this.AdY.L(E);},A9g:
function(E){if(this.ANa===E)return;this.ANa=E;},A9k:function(E){if(this.ANf===E)
return;this.ANf=E;},ASM:function(E){this.A5h=E;this.Jt.L(E);},A9l:function(E){if(
this.ANi===E)return;this.ANi=E;},A9h:function(E){if(this.ANb===E)return;this.ANb=
E;},C2:function(G){var F;if(!!this.Q){this.Azr=(F=this.Q,F[1].call(F[0]));if(!!this.
AD)this.AD.GS(this.Azr);this.BfE(this);}},ByN:function(AoI){var B;var B0=AoI;var
AI$=AoI.M;var AyY=Hp;while(!!B0){var Aal=B0.FD;if(!B0.Ab&&(B0!==AoI)){B0.Bj(AI$);
return A.abh([0,0,(B=AoI.M)[2]-B[0],B[3]-B[1]],AyY);}if(!!Aal){if(((B=Aal.QK)[0]>=
B[2])||(B[1]>=B[3])){A.we(B0,0);A.we(Aal,0);}Aal.QK=A.wC(Aal.QK,AI$);}if(!((B0.U&
0x1)===0x1))return A.abh([0,0,(B=AoI.M)[2]-B[0],B[3]-B[1]],AyY);if(B0===AoI)AI$=
A.lb(A.abh(AI$,B0.M.slice(0,2)),B0.M);AyY=A.abf(AyY,B0.M.slice(0,2));B0=B0.Ab;}return A.
abh([0,0,(B=AoI.M)[2]-B[0],B[3]-B[1]],AyY);},A9m:function(E){if(this.ANj===E)return;
this.ANj=E;},BiU:function(G){this.ArO(this.ANC);if(!!this.AD&&!!this.AD.CM)this.
AD.CM.AbA(0,this.AD.CM.AY);if(!!this.Data)this.Jt.R(this.Data.Avi(this.Azr));},A9j:
function(E){if(this.AB9===E)return;this.AB9=E;if(!!this.AD)this.AD.IP.L(this.AB9
);},A9i:function(E){this.Bg9=E;this.Abz.L(E);},_Init:function(aArg){A.Core.P._Init.
call(this,aArg);A.acg.NO._Init.call(this.AdY={I:this},0);A.acg.Text._Init.call(this.
Jt={I:this},0);A.Core.Bn._Init.call(this.Bn={I:this},0);A.acl.Gl._Init.call(this.
HL={I:this},0);A.acg.Ap._Init.call(this.Abz={I:this},0);this.__proto__=C.DT;this.
H(Fe);this.AdY.AZ(0x3F);this.AdY.H(Fe);this.AdY.L(0xFF252528);this.Jt.AZ(0x3F);this.
Jt.H(Fe);this.Jt.R(A.jV);this.Bn.AZ(0x3F);this.Bn.JS(Hp);this.Bn.Ks(L1);this.Bn.
DC(P5);this.Bn.DM(J0);this.HL.HM(1);this.HL.Fp(250);this.Abz.AZ(0x3A);this.Abz.H(
N_);this.Abz.Cu(1);this.Bg_=A.jb.Text;this.J(this.AdY,0);this.J(this.Jt,0);this.
J(this.Bn,0);this.J(this.Abz,0);this.AdY.Aw(A.aaL(A.acw.AHc));this.Jt.S(A.aaL(A.
fl.Af));this.Bn.Lm=[this,this.A3R];this.HL.Sy=[this,this.AiK];this.HL.Ahi=[this,
this.AAq];this.ACI=A.aaL(A.fl.Af);this.Avd=A.aaL(A.fl.Ak);this.Abz.Aw(A.aaL(A.aci.
ARI));this.Init(aArg);},_Done:function(){this.__proto__=A.Core.P;this.AdY._Done(
);this.Jt._Done();this.Bn._Done();this.HL._Done();this.Abz._Done();A.Core.P._Done.
call(this);},_ReInit:function(){A.Core.P._ReInit.call(this);this.AdY._ReInit();this.
Jt._ReInit();this.Bn._ReInit();this.HL._ReInit();this.Abz._ReInit();this.Jt.S(A.
aaL(A.fl.Af));this.ArG(A.aaL(A.fl.Af));this.AwA(A.aaL(A.fl.Ak));this.CP();},_Mark:
function(D){var B;A.Core.P._Mark.call(this,D);if((B=this.Data)&&(B._cycle!=D))B.
_Mark(B._cycle=D);if((B=this.AD)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.ACI
)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Avd)&&(B._cycle!=D))B._Mark(B._cycle=
D);if((B=this.AbH)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Q)&&((B=B[0])._cycle
!=D))B._Mark(B._cycle=D);if((B=this.AdY)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
Jt)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Bn)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.HL)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Abz)._cycle!=D)B._Mark(B._cycle=
D);},_className:"DropDown::DropDown"};C.AOa={AtT:null,Bn:null,Bf1:function(G){var
B;(B=this.AtT)?B[1].call(B[0],this):null;},_Init:function(aArg){A.Core.P._Init.call(
this,aArg);A.Core.Bn._Init.call(this.Bn={I:this},0);this.__proto__=C.AOa;this.H(
P6);this.Bn.AZ(0x3F);this.Bn.JS(Hp);this.Bn.Ks(L1);this.Bn.DC(MG);this.Bn.DM(S6);
this.J(this.Bn,0);this.Bn.AvZ=[this,this.Bf1];this.Bn.BL=[this,this.Bf1];},_Done:
function(){this.__proto__=A.Core.P;this.Bn._Done();A.Core.P._Done.call(this);},_ReInit:
function(){A.Core.P._ReInit.call(this);this.Bn._ReInit();},_Mark:function(D){var
B;A.Core.P._Mark.call(this,D);if((B=this.AtT)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=
D);if((B=this.Bn)._cycle!=D)B._Mark(B._cycle=D);},_className:"DropDown::EventCatcher"
};
C._Init=function(){C.ACh.__proto__=A.Core.P;C.ANt.__proto__=A.Core.P;C.DT.__proto__=
A.Core.P;C.AOa.__proto__=A.Core.P;};C._ReInit=function(){};C.DH=function(D){};return C;
})();

/* VitalControl demonstration application, © Urban GmbH & Co.KG 2023 */