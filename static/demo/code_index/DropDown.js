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
* Version  : 12.05
* Profile  : WebGLDemonstrator
* Platform : Web.WebGL.RGBA8888
*
*******************************************************************************/

var index;if(!index)throw new Error("The application file '_project.js' isn't yet loaded!"
);if(index.abx)throw new Error("The unit file 'DropDown.js' included twice!");index.
abx=(function(){var A=index;var C={};
var B9="Text";var BG=[0,0,100,24];var EV=[0,0,100,1];var GS=[0,0];var Js=[0,0,100
,120];var IL=[100,0];var OJ=[100,120];var PH=[0,120];var N0=[90,0,100,60];var CJ=[
0,0,0,0];var Fn=[0,0,240,40];var N1=[240,0];var OK=[240,40];var KF=[0,40];var OL=[
210,0,240,40];var Nc=[0,0,240,50];var OM=[240,50];var Sr=[0,50];
C.AlD={AA5:function(aIndex){return A.jm;},AA0:function(){return 0;},_Init:function(
aArg){this.__proto__=C.AlD;A.hJ++;},_Done:function(){this.__proto__=null;A.hJ--;
},_ReInit:function(){},_Mark:function(D){var B;if((B=this.I)&&(B._cycle!=D))B._Mark(
B._cycle=D);},I:null,_cycle:0,_observers:null,_className:"DropDown::DDData"};C.AAp={
B4:null,Background:null,Text:null,Ba:null,T:B9,Lx:0xFF000000,A18:0xFF454545,A7V:
0,KC:0,J6:0x12,I1:A.vx,Bf:function(aSize){var B;A.Core.O.Bf.call(this,aSize);this.
Text.G([0,0,(B=this.M)[2]-B[0],B[3]-B[1]]);this.Text.G([].concat(this.Text.M[0]+
this.I1[0],this.Text.M.slice(1,4)));this.Text.G(A.aaQ(this.Text.M,this.Text.M[2]-
this.I1[2]));this.Text.G(A.aaS(this.Text.M,this.Text.M[1]+this.I1[1]));this.Text.
G([].concat(this.Text.M.slice(0,3),this.Text.M[3]-this.I1[3]));},Ag:function(Ae){
var B;A.Core.O.Ag.call(this,Ae);if(((Ae&0x20)===0x20)){this.Background.L(this.A18
);this.Text.L(this.A7V);}else{this.Background.L(this.Lx);this.Text.L(this.KC);}}
,BhZ:function(E){this.T=E;this.Text.R(E);},AaZ:function(E){this.Lx=E;this.Background.
L(E);},Aa:function(E){this.B4=E;this.Text.Aa(E);},A1:function(E){this.J6=E;this.
Text.A1(E);},HC:function(E){if(A.z9(this.I1,E))return;this.I1=E;},_Init:function(
aArg){A.Core.O._Init.call(this,aArg);A.abh.AH._Init.call(this.Background={I:this
},0);A.abh.Text._Init.call(this.Text={I:this},0);A.abh.AH._Init.call(this.Ba={I:
this},0);this.__proto__=C.AAp;this.G(BG);this.Background.AV(0x3F);this.Background.
G(BG);this.Background.L(0xBE000000);this.Text.AV(0x3F);this.Text.G(BG);this.Text.
R(B9);this.Text.L(0xFFFFFFFF);this.Ba.AV(0x1D);this.Ba.G(EV);this.Ba.L(0x9EFFFFFF
);this.J(this.Background,0);this.J(this.Text,0);this.J(this.Ba,0);this.Text.Aa(A.
zW(A.eV.Az));this.B4=A.zW(A.eV.Av);},_Done:function(){this.__proto__=A.Core.O;this.
Background._Done();this.Text._Done();this.Ba._Done();A.Core.O._Done.call(this);}
,_ReInit:function(){A.Core.O._ReInit.call(this);this.Background._ReInit();this.Text.
_ReInit();this.Ba._ReInit();},_Mark:function(D){var B;A.Core.O._Mark.call(this,D
);if((B=this.B4)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Background)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.Text)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
Ba)._cycle!=D)B._Mark(B._cycle=D);},_className:"DropDown::DDItem"};C.ALe={ACo:null
,A5V:null,CI:null,H1:null,Bh:null,IG:null,Ge:0,AR:0,GK:0,AaK:0,AAF:false,AZ7:function(
H){if(this.Bh.Jj>100){var FW=this.CI.A3w(this.Bh.HS);if(FW<0)return;this.CI.GL(FW
);this.CI.Hv(FW,true,null,null);}},Bwq:function(H){var B;if(!this.Bh.Nz){var FW=
this.CI.A3w(this.Bh.HS);if(FW<0)return;this.CI.GL(FW);this.CI.Hv(FW,true,null,null
);(B=this.ACo)?B[1].call(B[0],this):null;}},AyA:function(H){this.Bh.Ap(true);},Bjm:
function(E){if(A.z$(this.ACo,E))return;this.ACo=E;},GL:function(E){this.Ge=E;this.
CI.GL(E);},FS:function(){return this.CI.Ge;},Bv3:function(H){if(this.AAF){var GW=
A.aaj(this.Bh.HS,this.Bh.NH);if((GW[1]>8)||(GW[1]<-8)){this.Ia().ALn(this.H1,GS);
this.Bh.Ap(false);}}},Jo:function(E){this.AR=E;this.CI.Jo(E);},Bjo:function(E){this.
A5V=E;this.CI.G8=E;},AdX:function(E){this.GK=E;this.CI.AdX(E);},AP2:function(){return this.
CI.GK;},Bik:function(E){if(this.AAF===E)return;this.AAF=E;},ApW:function(){return this.
CI.AR;},Au6:function(E){if(this.AaK===E)return;this.AaK=E;},Bwx:function(H){},Aco:
function(H){var B;var UA=this.CI.M;var Ar0=this.CI.Api(0,this.CI.AR-1);var y1=(((
UA[1]-Ar0[1])*(UA[3]-UA[1]))/(Ar0[3]-Ar0[1]))|0;var y2=(((UA[3]-Ar0[1])*(UA[3]-UA[
1]))/(Ar0[3]-Ar0[1]))|0;if(y1<0)y1=0;if(y2>(UA[3]-UA[1]))y2=UA[3]-UA[1];this.IG.
G([UA[2]-10,y1+UA[1],UA[2],y2+UA[1]]);this.IG.X(this.AAF);},_Init:function(aArg){
A.Core.O._Init.call(this,aArg);A.Core.CI._Init.call(this.CI={I:this},0);A.Core.H1.
_Init.call(this.H1={I:this},0);A.Core.Bh._Init.call(this.Bh={I:this},0);A.abh.AH.
_Init.call(this.IG={I:this},0);this.__proto__=C.ALe;this.G(Js);this.CI.AV(0x3F);
this.CI.G(Js);this.CI.GL(0);this.CI.Jo(5);this.CI.NP(C.AAp);this.H1.AV(0x3F);this.
H1.G(Js);this.H1.AEx=false;this.H1.A7r=false;this.Bh.AV(0x3F);this.Bh.Kz(GS);this.
Bh.Ky(IL);this.Bh.DN(OJ);this.Bh.D6(PH);this.IG.G(N0);this.IG.L(0xFF000000);this.
J(this.CI,0);this.J(this.H1,0);this.J(this.Bh,0);this.J(this.IG,0);this.CI.El=[this
,this.Aco];this.CI.Avf(this.H1);this.H1.ADW=[this,this.Bwx];this.H1.Yp=[this,this.
AyA];this.Bh.APN=[this,this.Bv3];this.Bh.DT=[this,this.AZ7];this.Bh.K9=[this,this.
Bwq];},_Done:function(){this.__proto__=A.Core.O;this.CI._Done();this.H1._Done();
this.Bh._Done();this.IG._Done();A.Core.O._Done.call(this);},_ReInit:function(){A.
Core.O._ReInit.call(this);this.CI._ReInit();this.H1._ReInit();this.Bh._ReInit();
this.IG._ReInit();},_Mark:function(D){var B;A.Core.O._Mark.call(this,D);if((B=this.
ACo)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.A5V)&&((B=B[0])._cycle
!=D))B._Mark(B._cycle=D);if((B=this.CI)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
H1)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Bh)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.IG)._cycle!=D)B._Mark(B._cycle=D);},_className:"DropDown::DDItemList"};C.
Iw={Data:null,AC:null,AAS:null,AtM:null,AaJ:null,Q:null,AcU:null,JJ:null,Bh:null
,HB:null,AaA:null,AaK:100,GK:20,A_t:A.vx,A2s:0xFF252528,AKY:0xFF252528,AK3:0xFFF1EEEA
,A2t:0xFFFAFFFE,AK6:0xFFF8FDFF,AKZ:0xFF0008C1,AxG:0,AK7:0xFF7EFEFF,ALm:-1,AAe:0xFF000000
,BdF:0xFFFAFFFE,C7:function(){this.Bfn(this);},Init:function(aArg){this.A59(this.
A2s);this.AQw(this.AAS);this.A5_(this.A2t);},J9:function(CV,aClip,aOffset,Cd,aBlend
){A.Core.O.J9.call(this,CV,aClip,aOffset,Cd,aBlend);if(!A.z9(this.A_t,this.M)){this.
A_t=this.M;A.ow([this,this.BtX],this);}},Bf:function(aSize){var B;A.Core.O.Bf.call(
this,aSize);this.JJ.G([0,0,(B=this.M)[2]-B[0],B[3]-B[1]]);this.JJ.G([].concat(this.
JJ.M[0],this.JJ.M.slice(1,4)));this.JJ.G(A.aaQ(this.JJ.M,this.JJ.M[2]-((B=this.AaA.
M)[2]-B[0])));this.JJ.G(A.aaS(this.JJ.M,this.JJ.M[1]));this.JJ.G([].concat(this.
JJ.M.slice(0,3),this.JJ.M[3]));},Ay:function(E){if(A.z_(this.Q,E))return;if(!!this.
Q)A.zn([this,this.Dc],this.Q,0);this.Q=E;if(!!E)A.za([this,this.Dc],E,0);if(!!E)
A.ow([this,this.Dc],this);},Bid:function(E){if(this.Data===E)return;this.Data=E;
A.ow([this,this.Bb$],this);},BhJ:function(H){var B;if(!this.AC)return;var FW=this.
AC.CI.GJ;var Zx=(C.AAp.isPrototypeOf(B=this.AC.CI.Cc)?B:null);if(!!Zx){if(this.Data.
AA0()>FW){Zx.BhZ(this.Data.AA5(FW));Zx.AaZ(this.AKY);Zx.A18=this.AKZ;Zx.A7V=this.
AK7;Zx.Aa(this.AtM);Zx.KC=this.AK6;Zx.A1(0x12);Zx.Ba.L(this.AK3);Zx.HC(CJ);}Zx.G(
A.aaN(Zx.M,[(B=this.AC.CI.M)[2]-B[0],this.AC.CI.GK]));}},BvM:function(H){var F;if(
!!this.Q){(F=this.Q,F[2].call(F[0],this.AC.FS()));A.aat(this.Q,0);}A.ow([this,this.
A0U],this);},A0U:function(H){if(!this.AC){this.Bux(this);if(!this.AC)return;this.
HB.Cv=0;this.HB.BZ=this.AC.AaK;this.AC.Ap(true);}else{this.HB.Cv=this.AC.AaK;this.
HB.BZ=0;this.AC.Ap(false);}this.HB.Ap(true);this.AC.Bik(this.AaK<(this.AC.AP2()*
this.AC.ApW()));},Bux:function(H){var B;if(!this.Data)return;this.AaJ=A._NewObject(
C.ALU,0);this.AC=A._NewObject(C.ALe,0);this.AC.Bjo([this,this.BhJ]);this.AC.Bjm([
this,this.BvM]);this.AC.AdX(this.GK);this.AC.Jo(this.Data.AA0());this.AC.IG.L(this.
AAe);if(this.AaK>(this.AC.AP2()*this.AC.ApW()))this.Au6(this.AC.AP2()*this.AC.ApW(
));this.AC.Au6(this.AaK);this.AC.H1.FP=[0,this.AaK];this.AC.G(this.M);this.AC.Ap(
false);this.AC.GL(this.AxG);var Ip=this.Ia();if(!!Ip){this.AaJ.G([0,0,(B=Ip.M)[2
]-B[0],B[3]-B[1]]);this.AaJ.Asq=[this,this.A0U];this.AaJ.J(this.AC,0);Ip.J(this.
AaJ,0);Ip.QF(this.AaJ);Ip.AKx(this.AaJ);}},Au6:function(E){if(this.AaK===E)return;
this.AaK=E;if(this.ALm<0)this.ALm=E;},Ayx:function(H){var B;if(!this.AC||!this.Ia(
))return;var AG_=this.Bu5(this);this.AC.G([].concat(AG_[0],this.AC.M.slice(1,4))
);this.AC.G(A.aaQ(this.AC.M,AG_[2]));this.AC.G(A.aaS(this.AC.M,AG_[3]));this.AC.
G([].concat(this.AC.M.slice(0,3),AG_[3]+this.HB.A3));if((this.AC.M[3]>this.Ia().
M[3])&&(this.AC.M[3]!==((B=this.Ia().M)[3]-B[1])))this.AC.G([].concat(this.AC.M.
slice(0,3),this.Ia().M[3]));if((this.AC.M[1]<this.Ia().M[1])&&(this.AC.M[3]!==((
B=this.Ia().M)[3]-B[1])))this.AC.G(A.aaS(this.AC.M,this.Ia().M[1]));},Bb$:function(
H){this.JJ.R(this.Data.AA5(this.AxG));},AhM:function(H){if((!this.AC||!this.AaJ)||
!this.Ia())return;if(!this.AC.A4$()){this.Ia().AAG(this.AaJ);this.Ia().HD(this.AaJ
);this.AC=null;}},BtX:function(H){var B;if(!!this.AC&&(((this.M[0]!==this.AC.M[0
])||(this.M[2]!==this.AC.M[2]))||(this.M[3]!==this.AC.M[1])))this.AC.G([this.M[0
],this.M[3],this.M[2],this.M[3]+((B=this.AC.M)[3]-B[1])]);},AQw:function(E){this.
AAS=E;this.JJ.Aa(E);},A6n:function(E){if(this.AtM===E)return;this.AtM=E;},A59:function(
E){this.A2s=E;this.AcU.L(E);},Bh4:function(E){if(this.AKY===E)return;this.AKY=E;
},Bh8:function(E){if(this.AK3===E)return;this.AK3=E;},A5_:function(E){this.A2t=E;
this.JJ.L(E);},Bh9:function(E){if(this.AK6===E)return;this.AK6=E;},Bh5:function(
E){if(this.AKZ===E)return;this.AKZ=E;},Dc:function(H){var F;if(!!this.Q){this.AxG=(
F=this.Q,F[1].call(F[0]));if(!!this.AC)this.AC.GL(this.AxG);this.Bb$(this);}},Bu5:
function(Ans){var B;var B7=Ans;var AG9=Ans.M;var Axe=GS;while(!!B7){var Zn=B7.HM;
if(!B7.Ac&&(B7!==Ans)){B7.Bg(AG9);return A.aam([0,0,(B=Ans.M)[2]-B[0],B[3]-B[1]]
,Axe);}if(!!Zn){if(((B=Zn.Qf)[0]>=B[2])||(B[1]>=B[3])){A.vv(B7,0);A.vv(Zn,0);}Zn.
Qf=A.vS(Zn.Qf,AG9);}if(!((B7.U&0x1)===0x1))return A.aam([0,0,(B=Ans.M)[2]-B[0],B[
3]-B[1]],Axe);if(B7===Ans)AG9=A.kz(A.aam(AG9,B7.M.slice(0,2)),B7.M);Axe=A.aak(Axe
,B7.M.slice(0,2));B7=B7.Ac;}return A.aam([0,0,(B=Ans.M)[2]-B[0],B[3]-B[1]],Axe);
},Bh_:function(E){if(this.AK7===E)return;this.AK7=E;},Bfn:function(H){this.Au6(this.
ALm);if(!!this.AC&&!!this.AC.CI)this.AC.CI.AaB(0,this.AC.CI.AR);if(!!this.Data)this.
JJ.R(this.Data.AA5(this.AxG));},Bh7:function(E){if(this.AAe===E)return;this.AAe=
E;if(!!this.AC)this.AC.IG.L(this.AAe);},Bh6:function(E){this.BdF=E;this.AaA.L(E);
},_Init:function(aArg){A.Core.O._Init.call(this,aArg);A.abh.NG._Init.call(this.AcU={
I:this},0);A.abh.Text._Init.call(this.JJ={I:this},0);A.Core.Bh._Init.call(this.Bh={
I:this},0);A.abm.F_._Init.call(this.HB={I:this},0);A.abh.Ak._Init.call(this.AaA={
I:this},0);this.__proto__=C.Iw;this.G(Fn);this.AcU.AV(0x3F);this.AcU.G(Fn);this.
AcU.L(0xFF252528);this.JJ.AV(0x3F);this.JJ.G(Fn);this.JJ.R(A.jm);this.Bh.AV(0x3F
);this.Bh.Kz(GS);this.Bh.Ky(N1);this.Bh.DN(OK);this.Bh.D6(KF);this.HB.IF(1);this.
HB.Fz(250);this.AaA.AV(0x3A);this.AaA.G(OL);this.AaA.Cs(1);this.J(this.AcU,0);this.
J(this.JJ,0);this.J(this.Bh,0);this.J(this.AaA,0);this.AcU.At(A.zW(A.aby.AE$));this.
JJ.Aa(A.zW(A.eV.Av));this.Bh.K9=[this,this.A0U];this.HB.R4=[this,this.AhM];this.
HB.Agm=[this,this.Ayx];this.AAS=A.zW(A.eV.Av);this.AtM=A.zW(A.eV.Az);this.AaA.At(
A.zW(A.abj.APq));this.Init(aArg);},_Done:function(){this.__proto__=A.Core.O;this.
AcU._Done();this.JJ._Done();this.Bh._Done();this.HB._Done();this.AaA._Done();A.Core.
O._Done.call(this);},_ReInit:function(){A.Core.O._ReInit.call(this);this.AcU._ReInit(
);this.JJ._ReInit();this.Bh._ReInit();this.HB._ReInit();this.AaA._ReInit();this.
C7();},_Mark:function(D){var B;A.Core.O._Mark.call(this,D);if((B=this.Data)&&(B.
_cycle!=D))B._Mark(B._cycle=D);if((B=this.AC)&&(B._cycle!=D))B._Mark(B._cycle=D);
if((B=this.AAS)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.AtM)&&(B._cycle!=D
))B._Mark(B._cycle=D);if((B=this.AaJ)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.
Q)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.AcU)._cycle!=D)B._Mark(B.
_cycle=D);if((B=this.JJ)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Bh)._cycle!=D)
B._Mark(B._cycle=D);if((B=this.HB)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AaA).
_cycle!=D)B._Mark(B._cycle=D);},_className:"DropDown::DropDown"};C.ALU={Asq:null
,Bh:null,Bcv:function(H){var B;(B=this.Asq)?B[1].call(B[0],this):null;},_Init:function(
aArg){A.Core.O._Init.call(this,aArg);A.Core.Bh._Init.call(this.Bh={I:this},0);this.
__proto__=C.ALU;this.G(Nc);this.Bh.AV(0x3F);this.Bh.Kz(GS);this.Bh.Ky(N1);this.Bh.
DN(OM);this.Bh.D6(Sr);this.J(this.Bh,0);this.Bh.Auo=[this,this.Bcv];this.Bh.BR=[
this,this.Bcv];},_Done:function(){this.__proto__=A.Core.O;this.Bh._Done();A.Core.
O._Done.call(this);},_ReInit:function(){A.Core.O._ReInit.call(this);this.Bh._ReInit(
);},_Mark:function(D){var B;A.Core.O._Mark.call(this,D);if((B=this.Asq)&&((B=B[0
])._cycle!=D))B._Mark(B._cycle=D);if((B=this.Bh)._cycle!=D)B._Mark(B._cycle=D);}
,_className:"DropDown::EventCatcher"};
C._Init=function(){C.AAp.__proto__=A.Core.O;C.ALe.__proto__=A.Core.O;C.Iw.__proto__=
A.Core.O;C.ALU.__proto__=A.Core.O;};C._ReInit=function(){};C.DB=function(D){};return C;
})();

/* VitalControl demonstration application, © Urban GmbH & Co.KG 2023 */