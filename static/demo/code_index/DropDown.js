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
var Cc="Text";var BF=[0,0,100,24];var EZ=[0,0,100,1];var Hj=[0,0];var I$=[0,0,100
,120];var Io=[100,0];var OZ=[100,120];var P0=[0,120];var P1=[90,0,100,60];var CO=[
0,0,0,0];var E8=[0,0,240,40];var Lt=[240,0];var P2=[240,40];var JX=[0,40];var N$=[
210,0,240,40];var P3=[0,0,240,50];var MF=[240,50];var S2=[0,50];
C.VC={Avh:function(aIndex){return A.jV;},AqH:function(){return 0;},_Init:function(
aArg){this.__proto__=C.VC;A.h7++;},_Done:function(){this.__proto__=null;A.h7--;}
,_ReInit:function(){},_Mark:function(D){var B;if((B=this.I)&&(B._cycle!=D))B._Mark(
B._cycle=D);},I:null,_cycle:0,_observers:null,_className:"DropDown::DDData"};C.ACa={
B7:null,Background:null,Text:null,Bc:null,V:Cc,LQ:0xFF000000,A5c:0xFF454545,A$z:
0,KS:0,Kc:0x12,I4:A.wg,Bk:function(aSize){var B;A.Core.O.Bk.call(this,aSize);this.
Text.H([0,0,(B=this.M)[2]-B[0],B[3]-B[1]]);this.Text.H([].concat(this.Text.M[0]+
this.I4[0],this.Text.M.slice(1,4)));this.Text.H(A.abN(this.Text.M,this.Text.M[2]-
this.I4[2]));this.Text.H(A.abP(this.Text.M,this.Text.M[1]+this.I4[1]));this.Text.
H([].concat(this.Text.M.slice(0,3),this.Text.M[3]-this.I4[3]));},Ai:function(Ae){
var B;A.Core.O.Ai.call(this,Ae);if(((Ae&0x20)===0x20)){this.Background.L(this.A5c
);this.Text.L(this.A$z);}else{this.Background.L(this.LQ);this.Text.L(this.KS);}}
,Blx:function(E){this.V=E;this.Text.R(E);},Wo:function(E){this.LQ=E;this.Background.
L(E);},S:function(E){this.B7=E;this.Text.S(E);},A8:function(E){this.Kc=E;this.Text.
A8(E);},Hs:function(E){if(A.aaY(this.I4,E))return;this.I4=E;},_Init:function(aArg
){A.Core.O._Init.call(this,aArg);A.acg.AL._Init.call(this.Background={I:this},0);
A.acg.Text._Init.call(this.Text={I:this},0);A.acg.AL._Init.call(this.Bc={I:this}
,0);this.__proto__=C.ACa;this.H(BF);this.Background.A3(0x3F);this.Background.H(BF
);this.Background.L(0xBE000000);this.Text.A3(0x3F);this.Text.H(BF);this.Text.R(Cc
);this.Text.L(0xFFFFFFFF);this.Bc.A3(0x1D);this.Bc.H(EZ);this.Bc.L(0x9EFFFFFF);this.
J(this.Background,0);this.J(this.Text,0);this.J(this.Bc,0);this.Text.S(A.aaL(A.fl.
Ak));this.B7=A.aaL(A.fl.Af);},_Done:function(){this.__proto__=A.Core.O;this.Background.
_Done();this.Text._Done();this.Bc._Done();A.Core.O._Done.call(this);},_ReInit:function(
){A.Core.O._ReInit.call(this);this.Background._ReInit();this.Text._ReInit();this.
Bc._ReInit();this.Text.S(A.aaL(A.fl.Ak));this.S(A.aaL(A.fl.Af));},_Mark:function(
D){var B;A.Core.O._Mark.call(this,D);if((B=this.B7)&&(B._cycle!=D))B._Mark(B._cycle=
D);if((B=this.Background)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Text)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.Bc)._cycle!=D)B._Mark(B._cycle=D);},_className:
"DropDown::DDItem"};C.ANm={AEe:null,A9q:null,CL:null,H5:null,Bn:null,IK:null,Gl:
0,AY:0,GH:0,AbD:0,ACs:false,A20:function(G){if(this.Bn.Jl>100){var F_=this.CL.A6I(
this.Bn.HY);if(F_<0)return;this.CL.G0(F_);this.CL.HC(F_,true,null,null);}},BAp:function(
G){var B;if(!this.Bn.NC){var F_=this.CL.A6I(this.Bn.HY);if(F_<0)return;this.CL.G0(
F_);this.CL.HC(F_,true,null,null);(B=this.AEe)?B[1].call(B[0],this):null;}},AAn:
function(G){this.Bn.Ar(true);},BmV:function(E){if(A.aa0(this.AEe,E))return;this.
AEe=E;},G0:function(E){this.Gl=E;this.CL.G0(E);},FF:function(){return this.CL.Gl;
},Bz2:function(G){if(this.ACs){var G6=A.abe(this.Bn.HY,this.Bn.NN);if((G6[1]>8)||(
G6[1]<-8)){this.Ii().ANx(this.H5,Hj);this.Bn.Ar(false);}}},Jr:function(E){this.AY=
E;this.CL.Jr(E);},BmX:function(E){this.A9q=E;this.CL.He=E;},AeW:function(E){this.
GH=E;this.CL.AeW(E);},ASf:function(){return this.CL.GH;},BlQ:function(E){if(this.
ACs===E)return;this.ACs=E;},Arh:function(){return this.CL.AY;},ArH:function(E){if(
this.AbD===E)return;this.AbD=E;},BAw:function(G){},Adm:function(G){var B;var Ve=
this.CL.M;var Atq=this.CL.AqF(0,this.CL.AY-1);var y1=(((Ve[1]-Atq[1])*(Ve[3]-Ve[
1]))/(Atq[3]-Atq[1]))|0;var y2=(((Ve[3]-Atq[1])*(Ve[3]-Ve[1]))/(Atq[3]-Atq[1]))|
0;if(y1<0)y1=0;if(y2>(Ve[3]-Ve[1]))y2=Ve[3]-Ve[1];this.IK.H([Ve[2]-10,y1+Ve[1],Ve[
2],y2+Ve[1]]);this.IK.Z(this.ACs);},_Init:function(aArg){A.Core.O._Init.call(this
,aArg);A.Core.CL._Init.call(this.CL={I:this},0);A.Core.H5._Init.call(this.H5={I:
this},0);A.Core.Bn._Init.call(this.Bn={I:this},0);A.acg.AL._Init.call(this.IK={I:
this},0);this.__proto__=C.ANm;this.H(I$);this.CL.A3(0x3F);this.CL.H(I$);this.CL.
G0(0);this.CL.Jr(5);this.CL.NX(C.ACa);this.H5.A3(0x3F);this.H5.H(I$);this.H5.AGA=
false;this.H5.A_6=false;this.Bn.A3(0x3F);this.Bn.JQ(Hj);this.Bn.Kn(Io);this.Bn.DE(
OZ);this.Bn.DR(P0);this.IK.H(P1);this.IK.L(0xFF000000);this.J(this.CL,0);this.J(
this.H5,0);this.J(this.Bn,0);this.J(this.IK,0);this.CL.Ej=[this,this.Adm];this.CL.
AwT(this.H5);this.H5.AFT=[this,this.BAw];this.H5.Ze=[this,this.AAn];this.Bn.AR1=[
this,this.Bz2];this.Bn.DZ=[this,this.A20];this.Bn.Lm=[this,this.BAp];},_Done:function(
){this.__proto__=A.Core.O;this.CL._Done();this.H5._Done();this.Bn._Done();this.IK.
_Done();A.Core.O._Done.call(this);},_ReInit:function(){A.Core.O._ReInit.call(this
);this.CL._ReInit();this.H5._ReInit();this.Bn._ReInit();this.IK._ReInit();},_Mark:
function(D){var B;A.Core.O._Mark.call(this,D);if((B=this.AEe)&&((B=B[0])._cycle!=
D))B._Mark(B._cycle=D);if((B=this.A9q)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);
if((B=this.CL)._cycle!=D)B._Mark(B._cycle=D);if((B=this.H5)._cycle!=D)B._Mark(B.
_cycle=D);if((B=this.Bn)._cycle!=D)B._Mark(B._cycle=D);if((B=this.IK)._cycle!=D)
B._Mark(B._cycle=D);},_className:"DropDown::DDItemList"};C.DT={Data:null,AD:null
,ACD:null,Avc:null,AbC:null,Q:null,AdQ:null,Jo:null,Bn:null,HI:null,Abu:null,AbD:
100,GH:20,Bca:A.wg,A5z:0xFF252528,AM4:0xFF252528,AM9:0xFFF1EEEA,A5A:0xFFFAFFFE,ANa:
0xFFF8FDFF,AM5:0xFF0008C1,Azk:0,ANb:0xFF7EFEFF,ANw:-1,AB2:0xFF000000,Bhr:0xFFFAFFFE
,CS:function(){this.Bi$(this);},Init:function(aArg){this.ASG(this.A5z);this.Arz(
this.ACD);this.ASH(this.A5A);},Kg:function(C0,aClip,aOffset,Ci,aBlend){A.Core.O.
Kg.call(this,C0,aClip,aOffset,Ci,aBlend);if(!A.aaY(this.Bca,this.M)){this.Bca=this.
M;A.pe([this,this.BxK],this);}},Bk:function(aSize){var B;A.Core.O.Bk.call(this,aSize
);this.Jo.H([0,0,(B=this.M)[2]-B[0],B[3]-B[1]]);this.Jo.H([].concat(this.Jo.M[0]
,this.Jo.M.slice(1,4)));this.Jo.H(A.abN(this.Jo.M,this.Jo.M[2]-((B=this.Abu.M)[2
]-B[0])));this.Jo.H(A.abP(this.Jo.M,this.Jo.M[1]));this.Jo.H([].concat(this.Jo.M.
slice(0,3),this.Jo.M[3]));},As:function(E){if(A.aaZ(this.Q,E))return;if(!!this.Q
)A.z$([this,this.C3],this.Q,0);this.Q=E;if(!!E)A.zX([this,this.C3],E,0);if(!!E)A.
pe([this,this.C3],this);},A9P:function(E){if(this.Data===E)return;this.Data=E;A.
pe([this,this.BfZ],this);},Blh:function(G){var B;if(!this.AD)return;var F_=this.
AD.CL.GY;var Aas=(C.ACa.isPrototypeOf(B=this.AD.CL.Ch)?B:null);if(!!Aas){if(this.
Data.AqH()>F_){Aas.Blx(this.Data.Avh(F_));Aas.Wo(this.AM4);Aas.A5c=this.AM5;Aas.
A$z=this.ANb;Aas.S(this.Avc);Aas.KS=this.ANa;Aas.A8(0x12);Aas.Bc.L(this.AM9);Aas.
Hs(CO);}Aas.H(A.abK(Aas.M,[(B=this.AD.CL.M)[2]-B[0],this.AD.CL.GH]));}},BzK:function(
G){var F;if(!!this.Q){(F=this.Q,F[2].call(F[0],this.AD.FF()));A.abo(this.Q,0);}A.
pe([this,this.A3Y],this);},A3Y:function(G){if(!this.AD){this.Byn(this);if(!this.
AD)return;this.HI.Cw=0;this.HI.B3=this.AD.AbD;this.AD.Ar(true);}else{this.HI.Cw=
this.AD.AbD;this.HI.B3=0;this.AD.Ar(false);}this.HI.Ar(true);this.AD.BlQ(this.AbD<(
this.AD.ASf()*this.AD.Arh()));},Byn:function(G){var B;if(!this.Data)return;this.
AbC=A._NewObject(C.AN7,0);this.AD=A._NewObject(C.ANm,0);this.AD.BmX([this,this.Blh
]);this.AD.BmV([this,this.BzK]);this.AD.AeW(this.GH);this.AD.Jr(this.Data.AqH());
this.AD.IK.L(this.AB2);if(this.AbD>(this.AD.ASf()*this.AD.Arh()))this.ArH(this.AD.
ASf()*this.AD.Arh());this.AD.ArH(this.AbD);this.AD.H5.FV=[0,this.AbD];this.AD.H(
this.M);this.AD.Ar(false);this.AD.G0(this.Azk);var Iy=this.Ii();if(!!Iy){this.AbC.
H([0,0,(B=Iy.M)[2]-B[0],B[3]-B[1]]);this.AbC.AtP=[this,this.A3Y];this.AbC.J(this.
AD,0);Iy.J(this.AbC,0);Iy.Zt(this.AbC);Iy.AME(this.AbC);}},ArH:function(E){if(this.
AbD===E)return;this.AbD=E;if(this.ANw<0)this.ANw=E;},AAk:function(G){var B;if(!this.
AD||!this.Ii())return;var AI1=this.ByY(this);this.AD.H([].concat(AI1[0],this.AD.
M.slice(1,4)));this.AD.H(A.abN(this.AD.M,AI1[2]));this.AD.H(A.abP(this.AD.M,AI1[
3]));this.AD.H([].concat(this.AD.M.slice(0,3),AI1[3]+this.HI.A5));if((this.AD.M[
3]>this.Ii().M[3])&&(this.AD.M[3]!==((B=this.Ii().M)[3]-B[1])))this.AD.H([].concat(
this.AD.M.slice(0,3),this.Ii().M[3]));if((this.AD.M[1]<this.Ii().M[1])&&(this.AD.
M[3]!==((B=this.Ii().M)[3]-B[1])))this.AD.H(A.abP(this.AD.M,this.Ii().M[1]));},BfZ:
function(G){this.Jo.R(this.Data.Avh(this.Azk));},AiF:function(G){if((!this.AD||!
this.AbC)||!this.Ii())return;if(!this.AD.A8v()){this.Ii().ACt(this.AbC);this.Ii(
).HL(this.AbC);this.AD=null;}},BxK:function(G){var B;if(!!this.AD&&(((this.M[0]!==
this.AD.M[0])||(this.M[2]!==this.AD.M[2]))||(this.M[3]!==this.AD.M[1])))this.AD.
H([this.M[0],this.M[3],this.M[2],this.M[3]+((B=this.AD.M)[3]-B[1])]);},Arz:function(
E){this.ACD=E;this.Jo.S(E);},Awx:function(E){if(this.Avc===E)return;this.Avc=E;}
,ASG:function(E){this.A5z=E;this.AdQ.L(E);},A9D:function(E){if(this.AM4===E)return;
this.AM4=E;},A9H:function(E){if(this.AM9===E)return;this.AM9=E;},ASH:function(E){
this.A5A=E;this.Jo.L(E);},A9I:function(E){if(this.ANa===E)return;this.ANa=E;},A9E:
function(E){if(this.AM5===E)return;this.AM5=E;},C3:function(G){var F;if(!!this.Q
){this.Azk=(F=this.Q,F[1].call(F[0]));if(!!this.AD)this.AD.G0(this.Azk);this.BfZ(
this);}},ByY:function(AoF){var B;var B0=AoF;var AI0=AoF.M;var AyS=Hj;while(!!B0){
var Aah=B0.Fw;if(!B0.Ab&&(B0!==AoF)){B0.Bg(AI0);return A.abh([0,0,(B=AoF.M)[2]-B[
0],B[3]-B[1]],AyS);}if(!!Aah){if(((B=Aah.QG)[0]>=B[2])||(B[1]>=B[3])){A.we(B0,0);
A.we(Aah,0);}Aah.QG=A.wC(Aah.QG,AI0);}if(!((B0.U&0x1)===0x1))return A.abh([0,0,(
B=AoF.M)[2]-B[0],B[3]-B[1]],AyS);if(B0===AoF)AI0=A.lb(A.abh(AI0,B0.M.slice(0,2))
,B0.M);AyS=A.abf(AyS,B0.M.slice(0,2));B0=B0.Ab;}return A.abh([0,0,(B=AoF.M)[2]-B[
0],B[3]-B[1]],AyS);},A9J:function(E){if(this.ANb===E)return;this.ANb=E;},Bi$:function(
G){this.ArH(this.ANw);if(!!this.AD&&!!this.AD.CL)this.AD.CL.Abv(0,this.AD.CL.AY);
if(!!this.Data)this.Jo.R(this.Data.Avh(this.Azk));},A9G:function(E){if(this.AB2===
E)return;this.AB2=E;if(!!this.AD)this.AD.IK.L(this.AB2);},A9F:function(E){this.Bhr=
E;this.Abu.L(E);},_Init:function(aArg){A.Core.O._Init.call(this,aArg);A.acg.NL._Init.
call(this.AdQ={I:this},0);A.acg.Text._Init.call(this.Jo={I:this},0);A.Core.Bn._Init.
call(this.Bn={I:this},0);A.acl.Ge._Init.call(this.HI={I:this},0);A.acg.Am._Init.
call(this.Abu={I:this},0);this.__proto__=C.DT;this.H(E8);this.AdQ.A3(0x3F);this.
AdQ.H(E8);this.AdQ.L(0xFF252528);this.Jo.A3(0x3F);this.Jo.H(E8);this.Jo.R(A.jV);
this.Bn.A3(0x3F);this.Bn.JQ(Hj);this.Bn.Kn(Lt);this.Bn.DE(P2);this.Bn.DR(JX);this.
HI.HK(1);this.HI.Fj(250);this.Abu.A3(0x3A);this.Abu.H(N$);this.Abu.Cu(1);this.J(
this.AdQ,0);this.J(this.Jo,0);this.J(this.Bn,0);this.J(this.Abu,0);this.AdQ.Aw(A.
aaL(A.acw.AHa));this.Jo.S(A.aaL(A.fl.Af));this.Bn.Lm=[this,this.A3Y];this.HI.Su=[
this,this.AiF];this.HI.Ag_=[this,this.AAk];this.ACD=A.aaL(A.fl.Af);this.Avc=A.aaL(
A.fl.Ak);this.Abu.Aw(A.aaL(A.aci.ARD));this.Init(aArg);},_Done:function(){this.__proto__=
A.Core.O;this.AdQ._Done();this.Jo._Done();this.Bn._Done();this.HI._Done();this.Abu.
_Done();A.Core.O._Done.call(this);},_ReInit:function(){A.Core.O._ReInit.call(this
);this.AdQ._ReInit();this.Jo._ReInit();this.Bn._ReInit();this.HI._ReInit();this.
Abu._ReInit();this.Jo.S(A.aaL(A.fl.Af));this.Arz(A.aaL(A.fl.Af));this.Awx(A.aaL(
A.fl.Ak));this.CS();},_Mark:function(D){var B;A.Core.O._Mark.call(this,D);if((B=
this.Data)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.AD)&&(B._cycle!=D))B._Mark(
B._cycle=D);if((B=this.ACD)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Avc)&&(
B._cycle!=D))B._Mark(B._cycle=D);if((B=this.AbC)&&(B._cycle!=D))B._Mark(B._cycle=
D);if((B=this.Q)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.AdQ)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.Jo)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
Bn)._cycle!=D)B._Mark(B._cycle=D);if((B=this.HI)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Abu)._cycle!=D)B._Mark(B._cycle=D);},_className:"DropDown::DropDown"};C.AN7={
AtP:null,Bn:null,Bgi:function(G){var B;(B=this.AtP)?B[1].call(B[0],this):null;},
_Init:function(aArg){A.Core.O._Init.call(this,aArg);A.Core.Bn._Init.call(this.Bn={
I:this},0);this.__proto__=C.AN7;this.H(P3);this.Bn.A3(0x3F);this.Bn.JQ(Hj);this.
Bn.Kn(Lt);this.Bn.DE(MF);this.Bn.DR(S2);this.J(this.Bn,0);this.Bn.AvW=[this,this.
Bgi];this.Bn.BM=[this,this.Bgi];},_Done:function(){this.__proto__=A.Core.O;this.
Bn._Done();A.Core.O._Done.call(this);},_ReInit:function(){A.Core.O._ReInit.call(
this);this.Bn._ReInit();},_Mark:function(D){var B;A.Core.O._Mark.call(this,D);if((
B=this.AtP)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.Bn)._cycle!=D)B.
_Mark(B._cycle=D);},_className:"DropDown::EventCatcher"};
C._Init=function(){C.ACa.__proto__=A.Core.O;C.ANm.__proto__=A.Core.O;C.DT.__proto__=
A.Core.O;C.AN7.__proto__=A.Core.O;};C._ReInit=function(){};C.DF=function(D){};return C;
})();

/* VitalControl demonstration application, © Urban GmbH & Co.KG 2023 */