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
);if(index.acv)throw new Error("The unit file 'DropDown.js' included twice!");index.
acv=(function(){var A=index;var C={};
var Cc="Text";var BF=[0,0,100,24];var EY=[0,0,100,1];var Hi=[0,0];var I7=[0,0,100
,120];var Ik=[100,0];var O0=[100,120];var PZ=[0,120];var P0=[90,0,100,60];var CO=[
0,0,0,0];var E7=[0,0,240,40];var Ls=[240,0];var P1=[240,40];var Ks=[0,40];var N$=[
210,0,240,40];var P2=[0,0,240,50];var ME=[240,50];var SY=[0,50];
C.Amm={ACy:function(aIndex){return A.jV;},ACs:function(){return 0;},_Init:function(
aArg){this.__proto__=C.Amm;A.h7++;},_Done:function(){this.__proto__=null;A.h7--;
},_ReInit:function(){},_Mark:function(D){var B;if((B=this.I)&&(B._cycle!=D))B._Mark(
B._cycle=D);},I:null,_cycle:0,_observers:null,_className:"DropDown::DDData"};C.ABS={
B7:null,Background:null,Text:null,Bc:null,V:Cc,LO:0xFF000000,A4W:0xFF454545,A_$:
0,KQ:0,J8:0x12,I0:A.wg,Bj:function(aSize){var B;A.Core.O.Bj.call(this,aSize);this.
Text.H([0,0,(B=this.M)[2]-B[0],B[3]-B[1]]);this.Text.H([].concat(this.Text.M[0]+
this.I0[0],this.Text.M.slice(1,4)));this.Text.H(A.abN(this.Text.M,this.Text.M[2]-
this.I0[2]));this.Text.H(A.abP(this.Text.M,this.Text.M[1]+this.I0[1]));this.Text.
H([].concat(this.Text.M.slice(0,3),this.Text.M[3]-this.I0[3]));},Ai:function(Ae){
var B;A.Core.O.Ai.call(this,Ae);if(((Ae&0x20)===0x20)){this.Background.L(this.A4W
);this.Text.L(this.A_$);}else{this.Background.L(this.LO);this.Text.L(this.KQ);}}
,BkY:function(E){this.V=E;this.Text.R(E);},Wj:function(E){this.LO=E;this.Background.
L(E);},S:function(E){this.B7=E;this.Text.S(E);},A7:function(E){this.J8=E;this.Text.
A7(E);},Hq:function(E){if(A.aaY(this.I0,E))return;this.I0=E;},_Init:function(aArg
){A.Core.O._Init.call(this,aArg);A.acg.AL._Init.call(this.Background={I:this},0);
A.acg.Text._Init.call(this.Text={I:this},0);A.acg.AL._Init.call(this.Bc={I:this}
,0);this.__proto__=C.ABS;this.H(BF);this.Background.A3(0x3F);this.Background.H(BF
);this.Background.L(0xBE000000);this.Text.A3(0x3F);this.Text.H(BF);this.Text.R(Cc
);this.Text.L(0xFFFFFFFF);this.Bc.A3(0x1D);this.Bc.H(EY);this.Bc.L(0x9EFFFFFF);this.
J(this.Background,0);this.J(this.Text,0);this.J(this.Bc,0);this.Text.S(A.aaL(A.fl.
Ak));this.B7=A.aaL(A.fl.Af);},_Done:function(){this.__proto__=A.Core.O;this.Background.
_Done();this.Text._Done();this.Bc._Done();A.Core.O._Done.call(this);},_ReInit:function(
){A.Core.O._ReInit.call(this);this.Background._ReInit();this.Text._ReInit();this.
Bc._ReInit();this.Text.S(A.aaL(A.fl.Ak));this.S(A.aaL(A.fl.Af));},_Mark:function(
D){var B;A.Core.O._Mark.call(this,D);if((B=this.B7)&&(B._cycle!=D))B._Mark(B._cycle=
D);if((B=this.Background)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Text)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.Bc)._cycle!=D)B._Mark(B._cycle=D);},_className:
"DropDown::DDItem"};C.AM7={ADY:null,A89:null,CL:null,H3:null,Bn:null,IG:null,Gk:
0,AY:0,GY:0,Abx:0,AB_:false,A2J:function(G){if(this.Bn.Jg>100){var FZ=this.CL.A6p(
this.Bn.HW);if(FZ<0)return;this.CL.GZ(FZ);this.CL.HA(FZ,true,null,null);}},BzV:function(
G){var B;if(!this.Bn.NA){var FZ=this.CL.A6p(this.Bn.HW);if(FZ<0)return;this.CL.GZ(
FZ);this.CL.HA(FZ,true,null,null);(B=this.ADY)?B[1].call(B[0],this):null;}},Az5:
function(G){this.Bn.Ar(true);},Bmq:function(E){if(A.aa0(this.ADY,E))return;this.
ADY=E;},GZ:function(E){this.Gk=E;this.CL.GZ(E);},FE:function(){return this.CL.Gk;
},Bzw:function(G){if(this.AB_){var G5=A.abe(this.Bn.HW,this.Bn.NL);if((G5[1]>8)||(
G5[1]<-8)){this.Ie().ANf(this.H3,Hi);this.Bn.Ar(false);}}},Jm:function(E){this.AY=
E;this.CL.Jm(E);},Bms:function(E){this.A89=E;this.CL.Hd=E;},AeN:function(E){this.
GY=E;this.CL.AeN(E);},AR0:function(){return this.CL.GY;},Blm:function(E){if(this.
AB_===E)return;this.AB_=E;},Aq9:function(){return this.CL.AY;},Awl:function(E){if(
this.Abx===E)return;this.Abx=E;},Bz2:function(G){},Adf:function(G){var B;var Va=
this.CL.M;var Atb=this.CL.Aqv(0,this.CL.AY-1);var y1=(((Va[1]-Atb[1])*(Va[3]-Va[
1]))/(Atb[3]-Atb[1]))|0;var y2=(((Va[3]-Atb[1])*(Va[3]-Va[1]))/(Atb[3]-Atb[1]))|
0;if(y1<0)y1=0;if(y2>(Va[3]-Va[1]))y2=Va[3]-Va[1];this.IG.H([Va[2]-10,y1+Va[1],Va[
2],y2+Va[1]]);this.IG.Y(this.AB_);},_Init:function(aArg){A.Core.O._Init.call(this
,aArg);A.Core.CL._Init.call(this.CL={I:this},0);A.Core.H3._Init.call(this.H3={I:
this},0);A.Core.Bn._Init.call(this.Bn={I:this},0);A.acg.AL._Init.call(this.IG={I:
this},0);this.__proto__=C.AM7;this.H(I7);this.CL.A3(0x3F);this.CL.H(I7);this.CL.
GZ(0);this.CL.Jm(5);this.CL.NV(C.ABS);this.H3.A3(0x3F);this.H3.H(I7);this.H3.AGg=
false;this.H3.A_G=false;this.Bn.A3(0x3F);this.Bn.Kj(Hi);this.Bn.Ki(Ik);this.Bn.DI(
O0);this.Bn.DY(PZ);this.IG.H(P0);this.IG.L(0xFF000000);this.J(this.CL,0);this.J(
this.H3,0);this.J(this.Bn,0);this.J(this.IG,0);this.CL.En=[this,this.Adf];this.CL.
AwB(this.H3);this.H3.AFB=[this,this.Bz2];this.H3.Y8=[this,this.Az5];this.Bn.ARK=[
this,this.Bzw];this.Bn.DX=[this,this.A2J];this.Bn.Ll=[this,this.BzV];},_Done:function(
){this.__proto__=A.Core.O;this.CL._Done();this.H3._Done();this.Bn._Done();this.IG.
_Done();A.Core.O._Done.call(this);},_ReInit:function(){A.Core.O._ReInit.call(this
);this.CL._ReInit();this.H3._ReInit();this.Bn._ReInit();this.IG._ReInit();},_Mark:
function(D){var B;A.Core.O._Mark.call(this,D);if((B=this.ADY)&&((B=B[0])._cycle!=
D))B._Mark(B._cycle=D);if((B=this.A89)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);
if((B=this.CL)._cycle!=D)B._Mark(B._cycle=D);if((B=this.H3)._cycle!=D)B._Mark(B.
_cycle=D);if((B=this.Bn)._cycle!=D)B._Mark(B._cycle=D);if((B=this.IG)._cycle!=D)
B._Mark(B._cycle=D);},_className:"DropDown::DDItemList"};C.Iy={Data:null,AD:null
,ACj:null,AuZ:null,Abw:null,Q:null,AdJ:null,Jj:null,Bn:null,HG:null,Abo:null,Abx:
100,GY:20,BbL:A.wg,A5g:0xFF252528,AMO:0xFF252528,AMT:0xFFF1EEEA,A5h:0xFFFAFFFE,AMW:
0xFFF8FDFF,AMP:0xFF0008C1,Ay2:0,AMX:0xFF7EFEFF,ANe:-1,ABI:0xFF000000,BgU:0xFFFAFFFE
,CS:function(){this.BiC(this);},Init:function(aArg){this.A9k(this.A5g);this.AEF(
this.ACj);this.A9l(this.A5h);},Ka:function(CZ,aClip,aOffset,Ch,aBlend){A.Core.O.
Ka.call(this,CZ,aClip,aOffset,Ch,aBlend);if(!A.aaY(this.BbL,this.M)){this.BbL=this.
M;A.pe([this,this.Bxe],this);}},Bj:function(aSize){var B;A.Core.O.Bj.call(this,aSize
);this.Jj.H([0,0,(B=this.M)[2]-B[0],B[3]-B[1]]);this.Jj.H([].concat(this.Jj.M[0]
,this.Jj.M.slice(1,4)));this.Jj.H(A.abN(this.Jj.M,this.Jj.M[2]-((B=this.Abo.M)[2
]-B[0])));this.Jj.H(A.abP(this.Jj.M,this.Jj.M[1]));this.Jj.H([].concat(this.Jj.M.
slice(0,3),this.Jj.M[3]));},As:function(E){if(A.aaZ(this.Q,E))return;if(!!this.Q
)A.z$([this,this.C3],this.Q,0);this.Q=E;if(!!E)A.zX([this,this.C3],E,0);if(!!E)A.
pe([this,this.C3],this);},Ble:function(E){if(this.Data===E)return;this.Data=E;A.
pe([this,this.Bfs],this);},BkI:function(G){var B;if(!this.AD)return;var FZ=this.
AD.CL.GW;var Aak=(C.ABS.isPrototypeOf(B=this.AD.CL.Cg)?B:null);if(!!Aak){if(this.
Data.ACs()>FZ){Aak.BkY(this.Data.ACy(FZ));Aak.Wj(this.AMO);Aak.A4W=this.AMP;Aak.
A_$=this.AMX;Aak.S(this.AuZ);Aak.KQ=this.AMW;Aak.A7(0x12);Aak.Bc.L(this.AMT);Aak.
Hq(CO);}Aak.H(A.abK(Aak.M,[(B=this.AD.CL.M)[2]-B[0],this.AD.CL.GY]));}},Bze:function(
G){var F;if(!!this.Q){(F=this.Q,F[2].call(F[0],this.AD.FE()));A.abo(this.Q,0);}A.
pe([this,this.A3G],this);},A3G:function(G){if(!this.AD){this.BxT(this);if(!this.
AD)return;this.HG.Cu=0;this.HG.B3=this.AD.Abx;this.AD.Ar(true);}else{this.HG.Cu=
this.AD.Abx;this.HG.B3=0;this.AD.Ar(false);}this.HG.Ar(true);this.AD.Blm(this.Abx<(
this.AD.AR0()*this.AD.Aq9()));},BxT:function(G){var B;if(!this.Data)return;this.
Abw=A._NewObject(C.ANP,0);this.AD=A._NewObject(C.AM7,0);this.AD.Bms([this,this.BkI
]);this.AD.Bmq([this,this.Bze]);this.AD.AeN(this.GY);this.AD.Jm(this.Data.ACs());
this.AD.IG.L(this.ABI);if(this.Abx>(this.AD.AR0()*this.AD.Aq9()))this.Awl(this.AD.
AR0()*this.AD.Aq9());this.AD.Awl(this.Abx);this.AD.H3.FU=[0,this.Abx];this.AD.H(
this.M);this.AD.Ar(false);this.AD.GZ(this.Ay2);var It=this.Ie();if(!!It){this.Abw.
H([0,0,(B=It.M)[2]-B[0],B[3]-B[1]]);this.Abw.AtA=[this,this.A3G];this.Abw.J(this.
AD,0);It.J(this.Abw,0);It.Zl(this.Abw);It.AMo(this.Abw);}},Awl:function(E){if(this.
Abx===E)return;this.Abx=E;if(this.ANe<0)this.ANe=E;},Az2:function(G){var B;if(!this.
AD||!this.Ie())return;var AIL=this.Bys(this);this.AD.H([].concat(AIL[0],this.AD.
M.slice(1,4)));this.AD.H(A.abN(this.AD.M,AIL[2]));this.AD.H(A.abP(this.AD.M,AIL[
3]));this.AD.H([].concat(this.AD.M.slice(0,3),AIL[3]+this.HG.A5));if((this.AD.M[
3]>this.Ie().M[3])&&(this.AD.M[3]!==((B=this.Ie().M)[3]-B[1])))this.AD.H([].concat(
this.AD.M.slice(0,3),this.Ie().M[3]));if((this.AD.M[1]<this.Ie().M[1])&&(this.AD.
M[3]!==((B=this.Ie().M)[3]-B[1])))this.AD.H(A.abP(this.AD.M,this.Ie().M[1]));},Bfs:
function(G){this.Jj.R(this.Data.ACy(this.Ay2));},AiB:function(G){if((!this.AD||!
this.Abw)||!this.Ie())return;if(!this.AD.A8c()){this.Ie().AB$(this.Abw);this.Ie(
).HJ(this.Abw);this.AD=null;}},Bxe:function(G){var B;if(!!this.AD&&(((this.M[0]!==
this.AD.M[0])||(this.M[2]!==this.AD.M[2]))||(this.M[3]!==this.AD.M[1])))this.AD.
H([this.M[0],this.M[3],this.M[2],this.M[3]+((B=this.AD.M)[3]-B[1])]);},AEF:function(
E){this.ACj=E;this.Jj.S(E);},ASu:function(E){if(this.AuZ===E)return;this.AuZ=E;}
,A9k:function(E){this.A5g=E;this.AdJ.L(E);},Bk3:function(E){if(this.AMO===E)return;
this.AMO=E;},Bk9:function(E){if(this.AMT===E)return;this.AMT=E;},A9l:function(E){
this.A5h=E;this.Jj.L(E);},Bk_:function(E){if(this.AMW===E)return;this.AMW=E;},Bk4:
function(E){if(this.AMP===E)return;this.AMP=E;},C3:function(G){var F;if(!!this.Q
){this.Ay2=(F=this.Q,F[1].call(F[0]));if(!!this.AD)this.AD.GZ(this.Ay2);this.Bfs(
this);}},Bys:function(Aou){var B;var B0=Aou;var AIK=Aou.M;var Ayy=Hi;while(!!B0){
var Z$=B0.Fv;if(!B0.Ab&&(B0!==Aou)){B0.Bg(AIK);return A.abh([0,0,(B=Aou.M)[2]-B[
0],B[3]-B[1]],Ayy);}if(!!Z$){if(((B=Z$.QF)[0]>=B[2])||(B[1]>=B[3])){A.we(B0,0);A.
we(Z$,0);}Z$.QF=A.wC(Z$.QF,AIK);}if(!((B0.U&0x1)===0x1))return A.abh([0,0,(B=Aou.
M)[2]-B[0],B[3]-B[1]],Ayy);if(B0===Aou)AIK=A.lb(A.abh(AIK,B0.M.slice(0,2)),B0.M);
Ayy=A.abf(Ayy,B0.M.slice(0,2));B0=B0.Ab;}return A.abh([0,0,(B=Aou.M)[2]-B[0],B[3
]-B[1]],Ayy);},Bk$:function(E){if(this.AMX===E)return;this.AMX=E;},BiC:function(
G){this.Awl(this.ANe);if(!!this.AD&&!!this.AD.CL)this.AD.CL.Abp(0,this.AD.CL.AY);
if(!!this.Data)this.Jj.R(this.Data.ACy(this.Ay2));},Bk8:function(E){if(this.ABI===
E)return;this.ABI=E;if(!!this.AD)this.AD.IG.L(this.ABI);},Bk7:function(E){this.BgU=
E;this.Abo.L(E);},_Init:function(aArg){A.Core.O._Init.call(this,aArg);A.acg.NJ._Init.
call(this.AdJ={I:this},0);A.acg.Text._Init.call(this.Jj={I:this},0);A.Core.Bn._Init.
call(this.Bn={I:this},0);A.acl.Gc._Init.call(this.HG={I:this},0);A.acg.Am._Init.
call(this.Abo={I:this},0);this.__proto__=C.Iy;this.H(E7);this.AdJ.A3(0x3F);this.
AdJ.H(E7);this.AdJ.L(0xFF252528);this.Jj.A3(0x3F);this.Jj.H(E7);this.Jj.R(A.jV);
this.Bn.A3(0x3F);this.Bn.Kj(Hi);this.Bn.Ki(Ls);this.Bn.DI(P1);this.Bn.DY(Ks);this.
HG.HI(1);this.HG.Fi(250);this.Abo.A3(0x3A);this.Abo.H(N$);this.Abo.Cx(1);this.J(
this.AdJ,0);this.J(this.Jj,0);this.J(this.Bn,0);this.J(this.Abo,0);this.AdJ.Ax(A.
aaL(A.acw.AGS));this.Jj.S(A.aaL(A.fl.Af));this.Bn.Ll=[this,this.A3G];this.HG.Sr=[
this,this.AiB];this.HG.Ag6=[this,this.Az2];this.ACj=A.aaL(A.fl.Af);this.AuZ=A.aaL(
A.fl.Ak);this.Abo.Ax(A.aaL(A.aci.ARm));this.Init(aArg);},_Done:function(){this.__proto__=
A.Core.O;this.AdJ._Done();this.Jj._Done();this.Bn._Done();this.HG._Done();this.Abo.
_Done();A.Core.O._Done.call(this);},_ReInit:function(){A.Core.O._ReInit.call(this
);this.AdJ._ReInit();this.Jj._ReInit();this.Bn._ReInit();this.HG._ReInit();this.
Abo._ReInit();this.Jj.S(A.aaL(A.fl.Af));this.AEF(A.aaL(A.fl.Af));this.ASu(A.aaL(
A.fl.Ak));this.CS();},_Mark:function(D){var B;A.Core.O._Mark.call(this,D);if((B=
this.Data)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.AD)&&(B._cycle!=D))B._Mark(
B._cycle=D);if((B=this.ACj)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.AuZ)&&(
B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Abw)&&(B._cycle!=D))B._Mark(B._cycle=
D);if((B=this.Q)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.AdJ)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.Jj)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
Bn)._cycle!=D)B._Mark(B._cycle=D);if((B=this.HG)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Abo)._cycle!=D)B._Mark(B._cycle=D);},_className:"DropDown::DropDown"};C.ANP={
AtA:null,Bn:null,BfL:function(G){var B;(B=this.AtA)?B[1].call(B[0],this):null;},
_Init:function(aArg){A.Core.O._Init.call(this,aArg);A.Core.Bn._Init.call(this.Bn={
I:this},0);this.__proto__=C.ANP;this.H(P2);this.Bn.A3(0x3F);this.Bn.Kj(Hi);this.
Bn.Ki(Ls);this.Bn.DI(ME);this.Bn.DY(SY);this.J(this.Bn,0);this.Bn.AvE=[this,this.
BfL];this.Bn.BM=[this,this.BfL];},_Done:function(){this.__proto__=A.Core.O;this.
Bn._Done();A.Core.O._Done.call(this);},_ReInit:function(){A.Core.O._ReInit.call(
this);this.Bn._ReInit();},_Mark:function(D){var B;A.Core.O._Mark.call(this,D);if((
B=this.AtA)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.Bn)._cycle!=D)B.
_Mark(B._cycle=D);},_className:"DropDown::EventCatcher"};
C._Init=function(){C.ABS.__proto__=A.Core.O;C.AM7.__proto__=A.Core.O;C.Iy.__proto__=
A.Core.O;C.ANP.__proto__=A.Core.O;};C._ReInit=function(){};C.DE=function(D){};return C;
})();

/* VitalControl demonstration application, © Urban GmbH & Co.KG 2023 */