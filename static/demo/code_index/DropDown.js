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
* Version  : 13.00
* Profile  : WebGLDemonstrator
* Platform : Web.WebGL.RGBA8888
*
*******************************************************************************/

var index;if(!index)throw new Error("The application file '_project.js' isn't yet loaded!"
);if(index.acv)throw new Error("The unit file 'DropDown.js' included twice!");index.
acv=(function(){var A=index;var C={};
var Ca="Text";var BD=[0,0,100,24];var EW=[0,0,100,1];var Hh=[0,0];var I8=[0,0,100
,120];var IJ=[100,0];var OT=[100,120];var PV=[0,120];var PW=[90,0,100,60];var CM=[
0,0,0,0];var E4=[0,0,240,40];var Lp=[240,0];var PX=[240,40];var Kq=[0,40];var N6=[
210,0,240,40];var PY=[0,0,240,50];var MC=[240,50];var SV=[0,50];
C.Amf={ACl:function(aIndex){return A.jV;},ACf:function(){return 0;},_Init:function(
aArg){this.__proto__=C.Amf;A.h7++;},_Done:function(){this.__proto__=null;A.h7--;
},_ReInit:function(){},_Mark:function(D){var B;if((B=this.I)&&(B._cycle!=D))B._Mark(
B._cycle=D);},I:null,_cycle:0,_observers:null,_className:"DropDown::DDData"};C.ABF={
B4:null,Background:null,Text:null,Bc:null,V:Ca,LL:0xFF000000,A4i:0xFF454545,A_n:
0,KM:0,J5:0x12,I1:A.wg,Bg:function(aSize){var B;A.Core.O.Bg.call(this,aSize);this.
Text.H([0,0,(B=this.M)[2]-B[0],B[3]-B[1]]);this.Text.H([].concat(this.Text.M[0]+
this.I1[0],this.Text.M.slice(1,4)));this.Text.H(A.abN(this.Text.M,this.Text.M[2]-
this.I1[2]));this.Text.H(A.abP(this.Text.M,this.Text.M[1]+this.I1[1]));this.Text.
H([].concat(this.Text.M.slice(0,3),this.Text.M[3]-this.I1[3]));},Ai:function(Ae){
var B;A.Core.O.Ai.call(this,Ae);if(((Ae&0x20)===0x20)){this.Background.L(this.A4i
);this.Text.L(this.A_n);}else{this.Background.L(this.LL);this.Text.L(this.KM);}}
,Bj8:function(E){this.V=E;this.Text.R(E);},AbG:function(E){this.LL=E;this.Background.
L(E);},S:function(E){this.B4=E;this.Text.S(E);},A3:function(E){this.J5=E;this.Text.
A3(E);},HH:function(E){if(A.aaY(this.I1,E))return;this.I1=E;},_Init:function(aArg
){A.Core.O._Init.call(this,aArg);A.acg.AJ._Init.call(this.Background={I:this},0);
A.acg.Text._Init.call(this.Text={I:this},0);A.acg.AJ._Init.call(this.Bc={I:this}
,0);this.__proto__=C.ABF;this.H(BD);this.Background.AX(0x3F);this.Background.H(BD
);this.Background.L(0xBE000000);this.Text.AX(0x3F);this.Text.H(BD);this.Text.R(Ca
);this.Text.L(0xFFFFFFFF);this.Bc.AX(0x1D);this.Bc.H(EW);this.Bc.L(0x9EFFFFFF);this.
J(this.Background,0);this.J(this.Text,0);this.J(this.Bc,0);this.Text.S(A.aaL(A.fl.
Ak));this.B4=A.aaL(A.fl.Ah);},_Done:function(){this.__proto__=A.Core.O;this.Background.
_Done();this.Text._Done();this.Bc._Done();A.Core.O._Done.call(this);},_ReInit:function(
){A.Core.O._ReInit.call(this);this.Background._ReInit();this.Text._ReInit();this.
Bc._ReInit();this.Text.S(A.aaL(A.fl.Ak));this.S(A.aaL(A.fl.Ah));},_Mark:function(
D){var B;A.Core.O._Mark.call(this,D);if((B=this.B4)&&(B._cycle!=D))B._Mark(B._cycle=
D);if((B=this.Background)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Text)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.Bc)._cycle!=D)B._Mark(B._cycle=D);},_className:
"DropDown::DDItem"};C.AMO={ADH:null,A8j:null,CJ:null,H2:null,Bj:null,IG:null,Gi:
0,AV:0,GW:0,Abp:0,ABX:false,A17:function(G){if(this.Bj.Jh>100){var FW=this.CJ.A5L(
this.Bj.HV);if(FW<0)return;this.CJ.GX(FW);this.CJ.Hy(FW,true,null,null);}},ByU:function(
G){var B;if(!this.Bj.NA){var FW=this.CJ.A5L(this.Bj.HV);if(FW<0)return;this.CJ.GX(
FW);this.CJ.Hy(FW,true,null,null);(B=this.ADH)?B[1].call(B[0],this):null;}},AzT:
function(G){this.Bj.Ar(true);},Bly:function(E){if(A.aa0(this.ADH,E))return;this.
ADH=E;},GX:function(E){this.Gi=E;this.CJ.GX(E);},FA:function(){return this.CJ.Gi;
},Byv:function(G){if(this.ABX){var G3=A.abe(this.Bj.HV,this.Bj.NK);if((G3[1]>8)||(
G3[1]<-8)){this.If().AMY(this.H2,Hh);this.Bj.Ar(false);}}},Jn:function(E){this.AV=
E;this.CJ.Jn(E);},BlA:function(E){this.A8j=E;this.CJ.Hc=E;},AeD:function(E){this.
GW=E;this.CJ.AeD(E);},ARH:function(){return this.CJ.GW;},Bkw:function(E){if(this.
ABX===E)return;this.ABX=E;},AqX:function(){return this.CJ.AV;},Av9:function(E){if(
this.Abp===E)return;this.Abp=E;},By1:function(G){},Ac$:function(G){var B;var U6=
this.CJ.M;var As0=this.CJ.Aqj(0,this.CJ.AV-1);var y1=(((U6[1]-As0[1])*(U6[3]-U6[
1]))/(As0[3]-As0[1]))|0;var y2=(((U6[3]-As0[1])*(U6[3]-U6[1]))/(As0[3]-As0[1]))|
0;if(y1<0)y1=0;if(y2>(U6[3]-U6[1]))y2=U6[3]-U6[1];this.IG.H([U6[2]-10,y1+U6[1],U6[
2],y2+U6[1]]);this.IG.Y(this.ABX);},_Init:function(aArg){A.Core.O._Init.call(this
,aArg);A.Core.CJ._Init.call(this.CJ={I:this},0);A.Core.H2._Init.call(this.H2={I:
this},0);A.Core.Bj._Init.call(this.Bj={I:this},0);A.acg.AJ._Init.call(this.IG={I:
this},0);this.__proto__=C.AMO;this.H(I8);this.CJ.AX(0x3F);this.CJ.H(I8);this.CJ.
GX(0);this.CJ.Jn(5);this.CJ.NS(C.ABF);this.H2.AX(0x3F);this.H2.H(I8);this.H2.AFX=
false;this.H2.A9T=false;this.Bj.AX(0x3F);this.Bj.Kg(Hh);this.Bj.Kf(IJ);this.Bj.DM(
OT);this.Bj.DY(PV);this.IG.H(PW);this.IG.L(0xFF000000);this.J(this.CJ,0);this.J(
this.H2,0);this.J(this.Bj,0);this.J(this.IG,0);this.CJ.Ej=[this,this.Ac$];this.CJ.
Awm(this.H2);this.H2.AFg=[this,this.By1];this.H2.Y2=[this,this.AzT];this.Bj.ARq=[
this,this.Byv];this.Bj.DS=[this,this.A17];this.Bj.Li=[this,this.ByU];},_Done:function(
){this.__proto__=A.Core.O;this.CJ._Done();this.H2._Done();this.Bj._Done();this.IG.
_Done();A.Core.O._Done.call(this);},_ReInit:function(){A.Core.O._ReInit.call(this
);this.CJ._ReInit();this.H2._ReInit();this.Bj._ReInit();this.IG._ReInit();},_Mark:
function(D){var B;A.Core.O._Mark.call(this,D);if((B=this.ADH)&&((B=B[0])._cycle!=
D))B._Mark(B._cycle=D);if((B=this.A8j)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);
if((B=this.CJ)._cycle!=D)B._Mark(B._cycle=D);if((B=this.H2)._cycle!=D)B._Mark(B.
_cycle=D);if((B=this.Bj)._cycle!=D)B._Mark(B._cycle=D);if((B=this.IG)._cycle!=D)
B._Mark(B._cycle=D);},_className:"DropDown::DDItemList"};C.Iy={Data:null,AD:null
,AB8:null,AuO:null,Abo:null,Q:null,AdC:null,Jk:null,Bj:null,HD:null,Abf:null,Abp:
100,GW:20,BaY:A.wg,A4E:0xFF252528,AMv:0xFF252528,AMA:0xFFF1EEEA,A4F:0xFFFAFFFE,AMD:
0xFFF8FDFF,AMw:0xFF0008C1,AyQ:0,AME:0xFF7EFEFF,AMX:-1,ABv:0xFF000000,Bf2:0xFFFAFFFE
,CU:function(){this.BhK(this);},Init:function(aArg){this.A8x(this.A4E);this.AEm(
this.AB8);this.A8y(this.A4F);},J9:function(CV,aClip,aOffset,Cg,aBlend){A.Core.O.
J9.call(this,CV,aClip,aOffset,Cg,aBlend);if(!A.aaY(this.BaY,this.M)){this.BaY=this.
M;A.pe([this,this.Bwg],this);}},Bg:function(aSize){var B;A.Core.O.Bg.call(this,aSize
);this.Jk.H([0,0,(B=this.M)[2]-B[0],B[3]-B[1]]);this.Jk.H([].concat(this.Jk.M[0]
,this.Jk.M.slice(1,4)));this.Jk.H(A.abN(this.Jk.M,this.Jk.M[2]-((B=this.Abf.M)[2
]-B[0])));this.Jk.H(A.abP(this.Jk.M,this.Jk.M[1]));this.Jk.H([].concat(this.Jk.M.
slice(0,3),this.Jk.M[3]));},At:function(E){if(A.aaZ(this.Q,E))return;if(!!this.Q
)A.z$([this,this.De],this.Q,0);this.Q=E;if(!!E)A.zX([this,this.De],E,0);if(!!E)A.
pe([this,this.De],this);},Bko:function(E){if(this.Data===E)return;this.Data=E;A.
pe([this,this.BeC],this);},BjS:function(G){var B;if(!this.AD)return;var FW=this.
AD.CJ.GT;var Aac=(C.ABF.isPrototypeOf(B=this.AD.CJ.Cf)?B:null);if(!!Aac){if(this.
Data.ACf()>FW){Aac.Bj8(this.Data.ACl(FW));Aac.AbG(this.AMv);Aac.A4i=this.AMw;Aac.
A_n=this.AME;Aac.S(this.AuO);Aac.KM=this.AMD;Aac.A3(0x12);Aac.Bc.L(this.AMA);Aac.
HH(CM);}Aac.H(A.abK(Aac.M,[(B=this.AD.CJ.M)[2]-B[0],this.AD.CJ.GW]));}},Byd:function(
G){var F;if(!!this.Q){(F=this.Q,F[2].call(F[0],this.AD.FA()));A.abo(this.Q,0);}A.
pe([this,this.A22],this);},A22:function(G){if(!this.AD){this.BwU(this);if(!this.
AD)return;this.HD.Cs=0;this.HD.B0=this.AD.Abp;this.AD.Ar(true);}else{this.HD.Cs=
this.AD.Abp;this.HD.B0=0;this.AD.Ar(false);}this.HD.Ar(true);this.AD.Bkw(this.Abp<(
this.AD.ARH()*this.AD.AqX()));},BwU:function(G){var B;if(!this.Data)return;this.
Abo=A._NewObject(C.ANw,0);this.AD=A._NewObject(C.AMO,0);this.AD.BlA([this,this.BjS
]);this.AD.Bly([this,this.Byd]);this.AD.AeD(this.GW);this.AD.Jn(this.Data.ACf());
this.AD.IG.L(this.ABv);if(this.Abp>(this.AD.ARH()*this.AD.AqX()))this.Av9(this.AD.
ARH()*this.AD.AqX());this.AD.Av9(this.Abp);this.AD.H2.FQ=[0,this.Abp];this.AD.H(
this.M);this.AD.Ar(false);this.AD.GX(this.AyQ);var It=this.If();if(!!It){this.Abo.
H([0,0,(B=It.M)[2]-B[0],B[3]-B[1]]);this.Abo.Atn=[this,this.A22];this.Abo.J(this.
AD,0);It.J(this.Abo,0);It.Ze(this.Abo);It.AL6(this.Abo);}},Av9:function(E){if(this.
Abp===E)return;this.Abp=E;if(this.AMX<0)this.AMX=E;},AzQ:function(G){var B;if(!this.
AD||!this.If())return;var AIt=this.Bxt(this);this.AD.H([].concat(AIt[0],this.AD.
M.slice(1,4)));this.AD.H(A.abN(this.AD.M,AIt[2]));this.AD.H(A.abP(this.AD.M,AIt[
3]));this.AD.H([].concat(this.AD.M.slice(0,3),AIt[3]+this.HD.A6));if((this.AD.M[
3]>this.If().M[3])&&(this.AD.M[3]!==((B=this.If().M)[3]-B[1])))this.AD.H([].concat(
this.AD.M.slice(0,3),this.If().M[3]));if((this.AD.M[1]<this.If().M[1])&&(this.AD.
M[3]!==((B=this.If().M)[3]-B[1])))this.AD.H(A.abP(this.AD.M,this.If().M[1]));},BeC:
function(G){this.Jk.R(this.Data.ACl(this.AyQ));},Air:function(G){if((!this.AD||!
this.Abo)||!this.If())return;if(!this.AD.A7x()){this.If().ABY(this.Abo);this.If(
).HI(this.Abo);this.AD=null;}},Bwg:function(G){var B;if(!!this.AD&&(((this.M[0]!==
this.AD.M[0])||(this.M[2]!==this.AD.M[2]))||(this.M[3]!==this.AD.M[1])))this.AD.
H([this.M[0],this.M[3],this.M[2],this.M[3]+((B=this.AD.M)[3]-B[1])]);},AEm:function(
E){this.AB8=E;this.Jk.S(E);},ASb:function(E){if(this.AuO===E)return;this.AuO=E;}
,A8x:function(E){this.A4E=E;this.AdC.L(E);},Bkb:function(E){if(this.AMv===E)return;
this.AMv=E;},Bkh:function(E){if(this.AMA===E)return;this.AMA=E;},A8y:function(E){
this.A4F=E;this.Jk.L(E);},Bki:function(E){if(this.AMD===E)return;this.AMD=E;},Bkc:
function(E){if(this.AMw===E)return;this.AMw=E;},De:function(G){var F;if(!!this.Q
){this.AyQ=(F=this.Q,F[1].call(F[0]));if(!!this.AD)this.AD.GX(this.AyQ);this.BeC(
this);}},Bxt:function(Aom){var B;var BX=Aom;var AIs=Aom.M;var Aym=Hh;while(!!BX){
var Z3=BX.Fq;if(!BX.Ab&&(BX!==Aom)){BX.Bd(AIs);return A.abh([0,0,(B=Aom.M)[2]-B[
0],B[3]-B[1]],Aym);}if(!!Z3){if(((B=Z3.QB)[0]>=B[2])||(B[1]>=B[3])){A.we(BX,0);A.
we(Z3,0);}Z3.QB=A.wC(Z3.QB,AIs);}if(!((BX.T&0x1)===0x1))return A.abh([0,0,(B=Aom.
M)[2]-B[0],B[3]-B[1]],Aym);if(BX===Aom)AIs=A.lb(A.abh(AIs,BX.M.slice(0,2)),BX.M);
Aym=A.abf(Aym,BX.M.slice(0,2));BX=BX.Ab;}return A.abh([0,0,(B=Aom.M)[2]-B[0],B[3
]-B[1]],Aym);},Bkj:function(E){if(this.AME===E)return;this.AME=E;},BhK:function(
G){this.Av9(this.AMX);if(!!this.AD&&!!this.AD.CJ)this.AD.CJ.Abg(0,this.AD.CJ.AV);
if(!!this.Data)this.Jk.R(this.Data.ACl(this.AyQ));},Bkg:function(E){if(this.ABv===
E)return;this.ABv=E;if(!!this.AD)this.AD.IG.L(this.ABv);},Bkf:function(E){this.Bf2=
E;this.Abf.L(E);},_Init:function(aArg){A.Core.O._Init.call(this,aArg);A.acg.NJ._Init.
call(this.AdC={I:this},0);A.acg.Text._Init.call(this.Jk={I:this},0);A.Core.Bj._Init.
call(this.Bj={I:this},0);A.acl.Ga._Init.call(this.HD={I:this},0);A.acg.An._Init.
call(this.Abf={I:this},0);this.__proto__=C.Iy;this.H(E4);this.AdC.AX(0x3F);this.
AdC.H(E4);this.AdC.L(0xFF252528);this.Jk.AX(0x3F);this.Jk.H(E4);this.Jk.R(A.jV);
this.Bj.AX(0x3F);this.Bj.Kg(Hh);this.Bj.Kf(Lp);this.Bj.DM(PX);this.Bj.DY(Kq);this.
HD.HG(1);this.HD.Fe(250);this.Abf.AX(0x3A);this.Abf.H(N6);this.Abf.Cv(1);this.J(
this.AdC,0);this.J(this.Jk,0);this.J(this.Bj,0);this.J(this.Abf,0);this.AdC.Ay(A.
aaL(A.acw.AGx));this.Jk.S(A.aaL(A.fl.Ah));this.Bj.Li=[this,this.A22];this.HD.Sm=[
this,this.Air];this.HD.AgW=[this,this.AzQ];this.AB8=A.aaL(A.fl.Ah);this.AuO=A.aaL(
A.fl.Ak);this.Abf.Ay(A.aaL(A.aci.AQ4));this.Init(aArg);},_Done:function(){this.__proto__=
A.Core.O;this.AdC._Done();this.Jk._Done();this.Bj._Done();this.HD._Done();this.Abf.
_Done();A.Core.O._Done.call(this);},_ReInit:function(){A.Core.O._ReInit.call(this
);this.AdC._ReInit();this.Jk._ReInit();this.Bj._ReInit();this.HD._ReInit();this.
Abf._ReInit();this.Jk.S(A.aaL(A.fl.Ah));this.AEm(A.aaL(A.fl.Ah));this.ASb(A.aaL(
A.fl.Ak));this.CU();},_Mark:function(D){var B;A.Core.O._Mark.call(this,D);if((B=
this.Data)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.AD)&&(B._cycle!=D))B._Mark(
B._cycle=D);if((B=this.AB8)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.AuO)&&(
B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Abo)&&(B._cycle!=D))B._Mark(B._cycle=
D);if((B=this.Q)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.AdC)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.Jk)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
Bj)._cycle!=D)B._Mark(B._cycle=D);if((B=this.HD)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Abf)._cycle!=D)B._Mark(B._cycle=D);},_className:"DropDown::DropDown"};C.ANw={
Atn:null,Bj:null,BeV:function(G){var B;(B=this.Atn)?B[1].call(B[0],this):null;},
_Init:function(aArg){A.Core.O._Init.call(this,aArg);A.Core.Bj._Init.call(this.Bj={
I:this},0);this.__proto__=C.ANw;this.H(PY);this.Bj.AX(0x3F);this.Bj.Kg(Hh);this.
Bj.Kf(Lp);this.Bj.DM(MC);this.Bj.DY(SV);this.J(this.Bj,0);this.Bj.Avt=[this,this.
BeV];this.Bj.BL=[this,this.BeV];},_Done:function(){this.__proto__=A.Core.O;this.
Bj._Done();A.Core.O._Done.call(this);},_ReInit:function(){A.Core.O._ReInit.call(
this);this.Bj._ReInit();},_Mark:function(D){var B;A.Core.O._Mark.call(this,D);if((
B=this.Atn)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.Bj)._cycle!=D)B.
_Mark(B._cycle=D);},_className:"DropDown::EventCatcher"};
C._Init=function(){C.ABF.__proto__=A.Core.O;C.AMO.__proto__=A.Core.O;C.Iy.__proto__=
A.Core.O;C.ANw.__proto__=A.Core.O;};C._ReInit=function(){};C.Dz=function(D){};return C;
})();

/* VitalControl demonstration application, © Urban GmbH & Co.KG 2023 */