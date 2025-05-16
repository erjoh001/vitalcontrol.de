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
);if(index.acr)throw new Error("The unit file 'DropDown.js' included twice!");index.
acr=(function(){var A=index;var C={};
var Cf="Text";var BD=[0,0,100,24];var E8=[0,0,100,1];var Hs=[0,0];var I0=[0,0,100
,120];var Iw=[100,0];var O$=[100,120];var Qc=[0,120];var Qd=[90,0,100,60];var CR=[
0,0,0,0];var Ff=[0,0,240,40];var L9=[240,0];var Qe=[240,40];var J9=[0,40];var Oh=[
210,0,240,40];var Qf=[0,0,240,50];var MR=[240,50];var Tf=[0,50];
C.V0={AvC:function(aIndex){return A.jV;},Aq4:function(){return 0;},_Init:function(
aArg){this.__proto__=C.V0;A.h7++;},_Done:function(){this.__proto__=null;A.h7--;}
,_ReInit:function(){},_Mark:function(D){var B;if((B=this.I)&&(B._cycle!=D))B._Mark(
B._cycle=D);},I:null,_cycle:0,_observers:null,_className:"DropDown::DDData"};C.ACJ={
B7:null,Background:null,Text:null,Bc:null,V:Cf,LX:0xFF000000,A5T:0xFF454545,Bah:
0,KX:0,Kn:0x12,Jh:A.wg,Bl:function(aSize){var B;A.Core.P.Bl.call(this,aSize);this.
Text.H([0,0,(B=this.M)[2]-B[0],B[3]-B[1]]);this.Text.H([].concat(this.Text.M[0]+
this.Jh[0],this.Text.M.slice(1,4)));this.Text.H(A.abN(this.Text.M,this.Text.M[2]-
this.Jh[2]));this.Text.H(A.abP(this.Text.M,this.Text.M[1]+this.Jh[1]));this.Text.
H([].concat(this.Text.M.slice(0,3),this.Text.M[3]-this.Jh[3]));},Ai:function(Ae){
var B;A.Core.P.Ai.call(this,Ae);if(((Ae&0x20)===0x20)){this.Background.L(this.A5T
);this.Text.L(this.Bah);}else{this.Background.L(this.LX);this.Text.L(this.KX);}}
,BmB:function(E){this.V=E;this.Text.R(E);},WO:function(E){this.LX=E;this.Background.
L(E);},S:function(E){this.B7=E;this.Text.S(E);},A6:function(E){this.Kn=E;this.Text.
A6(E);},Ho:function(E){if(A.aaY(this.Jh,E))return;this.Jh=E;},_Init:function(aArg
){A.Core.P._Init.call(this,aArg);A.acg.AL._Init.call(this.Background={I:this},0);
A.acg.Text._Init.call(this.Text={I:this},0);A.acg.AL._Init.call(this.Bc={I:this}
,0);this.__proto__=C.ACJ;this.H(BD);this.Background.A1(0x3F);this.Background.H(BD
);this.Background.L(0xBE000000);this.Text.A1(0x3F);this.Text.H(BD);this.Text.R(Cf
);this.Text.L(0xFFFFFFFF);this.Bc.A1(0x1D);this.Bc.H(E8);this.Bc.L(0x9EFFFFFF);this.
J(this.Background,0);this.J(this.Text,0);this.J(this.Bc,0);this.Text.S(A.aaL(A.fl.
Ak));this.B7=A.aaL(A.fl.Af);},_Done:function(){this.__proto__=A.Core.P;this.Background.
_Done();this.Text._Done();this.Bc._Done();A.Core.P._Done.call(this);},_ReInit:function(
){A.Core.P._ReInit.call(this);this.Background._ReInit();this.Text._ReInit();this.
Bc._ReInit();this.Text.S(A.aaL(A.fl.Ak));this.S(A.aaL(A.fl.Af));},_Mark:function(
D){var B;A.Core.P._Mark.call(this,D);if((B=this.B7)&&(B._cycle!=D))B._Mark(B._cycle=
D);if((B=this.Background)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Text)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.Bc)._cycle!=D)B._Mark(B._cycle=D);},_className:
"DropDown::DDItem"};C.ANS={AEN:null,A93:null,CM:null,Ic:null,Bn:null,BW:null,IX:
null,Gu:0,A0:0,GP:0,AbW:0,ACZ:false,A3P:function(G){if(this.Bn.Jy>100){var Gh=this.
CM.A7i(this.Bn.H5);if(Gh<0)return;this.CM.GW(Gh);this.CM.HK(Gh,true,null,null);}
},BBA:function(G){var B;if(!this.Bn.NQ){var Gh=this.CM.A7i(this.Bn.H5);if(Gh<0)return;
this.CM.GW(Gh);this.CM.HK(Gh,true,null,null);(B=this.AEN)?B[1].call(B[0],this):null;
}},AAR:function(G){this.Bn.As(true);},BnX:function(E){if(A.aa0(this.AEN,E))return;
this.AEN=E;},GW:function(E){this.Gu=E;this.CM.GW(E);},FO:function(){return this.
CM.Gu;},BBa:function(G){if(this.ACZ){var Hc=A.abe(this.Bn.H5,this.Bn.NZ);if((Hc[
1]>8)||(Hc[1]<-8)){this.Iq().AN2(this.Ic,Hs);this.Bn.As(false);}}},JD:function(E
){this.A0=E;this.CM.JD(E);},BnZ:function(E){this.A93=E;this.CM.Hn=E;},Ae$:function(
E){this.GP=E;this.CM.Ae$(E);},ASV:function(){return this.CM.GP;},BmR:function(E){
if(this.ACZ===E)return;this.ACZ=E;},ArH:function(){return this.CM.A0;},Ar5:function(
E){if(this.AbW===E)return;this.AbW=E;},BBH:function(G){},AdC:function(G){var B;var
Vy=this.CM.M;var AtN=this.CM.Aq2(0,this.CM.A0-1);var y1=(((Vy[1]-AtN[1])*(Vy[3]-
Vy[1]))/(AtN[3]-AtN[1]))|0;var y2=(((Vy[3]-AtN[1])*(Vy[3]-Vy[1]))/(AtN[3]-AtN[1]
))|0;if(y1<0)y1=0;if(y2>(Vy[3]-Vy[1]))y2=Vy[3]-Vy[1];this.IX.H([Vy[2]-10,y1+Vy[1
],Vy[2],y2+Vy[1]]);this.IX.Z(this.ACZ);},_Init:function(aArg){A.Core.P._Init.call(
this,aArg);A.Core.CM._Init.call(this.CM={I:this},0);A.Core.Ic._Init.call(this.Ic={
I:this},0);A.Core.Bn._Init.call(this.Bn={I:this},0);A.acg.BW._Init.call(this.BW={
I:this},0);A.acg.AL._Init.call(this.IX={I:this},0);this.__proto__=C.ANS;this.H(I0
);this.CM.A1(0x3F);this.CM.H(I0);this.CM.GW(0);this.CM.JD(5);this.CM.N8(C.ACJ);this.
Ic.A1(0x3F);this.Ic.H(I0);this.Ic.AG4=false;this.Ic.A$M=false;this.Bn.A1(0x3F);this.
Bn.J1(Hs);this.Bn.KA(Iw);this.Bn.DD(O$);this.Bn.DN(Qc);this.BW.A1(0x3F);this.BW.
H(I0);this.BW.L(A.jb.Text);this.IX.H(Qd);this.IX.L(0xFF000000);this.J(this.CM,0);
this.J(this.Ic,0);this.J(this.Bn,0);this.J(this.BW,0);this.J(this.IX,0);this.CM.
Em=[this,this.AdC];this.CM.Axc(this.Ic);this.Ic.AGn=[this,this.BBH];this.Ic.Zt=[
this,this.AAR];this.Bn.ASG=[this,this.BBa];this.Bn.D1=[this,this.A3P];this.Bn.Ls=[
this,this.BBA];},_Done:function(){this.__proto__=A.Core.P;this.CM._Done();this.Ic.
_Done();this.Bn._Done();this.BW._Done();this.IX._Done();A.Core.P._Done.call(this
);},_ReInit:function(){A.Core.P._ReInit.call(this);this.CM._ReInit();this.Ic._ReInit(
);this.Bn._ReInit();this.BW._ReInit();this.IX._ReInit();},_Mark:function(D){var B;
A.Core.P._Mark.call(this,D);if((B=this.AEN)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=
D);if((B=this.A93)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.CM)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.Ic)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
Bn)._cycle!=D)B._Mark(B._cycle=D);if((B=this.BW)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.IX)._cycle!=D)B._Mark(B._cycle=D);},_className:"DropDown::DDItemList"};C.
DT={Data:null,AD:null,AC_:null,Avx:null,AbV:null,Q:null,Ad7:null,JA:null,Bn:null
,HP:null,AbN:null,AbW:100,GP:20,BcY:A.wg,A6e:0xFF252528,ANz:0xFF252528,ANE:0xFFF1EEEA
,A6f:0xFFFAFFFE,ANH:0xFFF8FDFF,ANA:0xFF0008C1,AzO:0,ANI:0xFF7EFEFF,AN1:-1,ACz:0xFF000000
,Bii:0xFFFAFFFE,Bij:0,CQ:function(){this.Bkb(this);},Init:function(aArg){this.ATm(
this.A6e);this.ArX(this.AC_);this.ATn(this.A6f);},Ks:function(C0,aClip,aOffset,Ck
,aBlend){A.Core.P.Ks.call(this,C0,aClip,aOffset,Ck,aBlend);if(!A.aaY(this.BcY,this.
M)){this.BcY=this.M;A.pe([this,this.ByR],this);}},Bl:function(aSize){var B;A.Core.
P.Bl.call(this,aSize);this.JA.H([0,0,(B=this.M)[2]-B[0],B[3]-B[1]]);this.JA.H([].
concat(this.JA.M[0],this.JA.M.slice(1,4)));this.JA.H(A.abN(this.JA.M,this.JA.M[2
]-((B=this.AbN.M)[2]-B[0])));this.JA.H(A.abP(this.JA.M,this.JA.M[1]));this.JA.H([
].concat(this.JA.M.slice(0,3),this.JA.M[3]));},Au:function(E){if(A.aaZ(this.Q,E)
)return;if(!!this.Q)A.z$([this,this.C5],this.Q,0);this.Q=E;if(!!E)A.zX([this,this.
C5],E,0);if(!!E)A.pe([this,this.C5],this);},A_r:function(E){if(this.Data===E)return;
this.Data=E;A.pe([this,this.BgP],this);},Bmk:function(G){var B;if(!this.AD)return;
var Gh=this.AD.CM.G7;var AaJ=(C.ACJ.isPrototypeOf(B=this.AD.CM.Cj)?B:null);if(!!
AaJ){if(this.Data.Aq4()>Gh){AaJ.BmB(this.Data.AvC(Gh));AaJ.WO(this.ANz);AaJ.A5T=
this.ANA;AaJ.Bah=this.ANI;AaJ.S(this.Avx);AaJ.KX=this.ANH;AaJ.A6(0x12);AaJ.Bc.L(
this.ANE);AaJ.Ho(CR);}AaJ.H(A.abK(AaJ.M,[(B=this.AD.CM.M)[2]-B[0],this.AD.CM.GP]
));}},BAS:function(G){var F;if(!!this.Q){(F=this.Q,F[2].call(F[0],this.AD.FO()));
A.abo(this.Q,0);}A.pe([this,this.A4N],this);},A4N:function(G){if(!this.AD){this.
Bzs(this);if(!this.AD)return;this.HP.Cx=0;this.HP.B3=this.AD.AbW;this.AD.As(true
);}else{this.HP.Cx=this.AD.AbW;this.HP.B3=0;this.AD.As(false);}this.HP.As(true);
this.AD.BmR(this.AbW<(this.AD.ASV()*this.AD.ArH()));},Bzs:function(G){var B;if(!
this.Data)return;this.AbV=A._NewObject(C.AOy,0);this.AD=A._NewObject(C.ANS,0);this.
AD.BnZ([this,this.Bmk]);this.AD.BnX([this,this.BAS]);this.AD.Ae$(this.GP);this.AD.
JD(this.Data.Aq4());this.AD.IX.L(this.ACz);if(this.AbW>(this.AD.ASV()*this.AD.ArH(
)))this.Ar5(this.AD.ASV()*this.AD.ArH());this.AD.Ar5(this.AbW);this.AD.Ic.F$=[0,
this.AbW];this.AD.H(this.M);this.AD.As(false);this.AD.GW(this.AzO);var II=this.Iq(
);if(!!II){this.AbV.H([0,0,(B=II.M)[2]-B[0],B[3]-B[1]]);this.AbV.Aub=[this,this.
A4N];this.AbV.J(this.AD,0);II.J(this.AbV,0);II.ZL(this.AbV);II.AM9(this.AbV);}},
Ar5:function(E){if(this.AbW===E)return;this.AbW=E;if(this.AN1<0)this.AN1=E;},AAN:
function(G){var B;if(!this.AD||!this.Iq())return;var AJx=this.Bz4(this);this.AD.
H([].concat(AJx[0],this.AD.M.slice(1,4)));this.AD.H(A.abN(this.AD.M,AJx[2]));this.
AD.H(A.abP(this.AD.M,AJx[3]));this.AD.H([].concat(this.AD.M.slice(0,3),AJx[3]+this.
HP.A5));if((this.AD.M[3]>this.Iq().M[3])&&(this.AD.M[3]!==((B=this.Iq().M)[3]-B[
1])))this.AD.H([].concat(this.AD.M.slice(0,3),this.Iq().M[3]));if((this.AD.M[1]<
this.Iq().M[1])&&(this.AD.M[3]!==((B=this.Iq().M)[3]-B[1])))this.AD.H(A.abP(this.
AD.M,this.Iq().M[1]));},BgP:function(G){this.JA.R(this.Data.AvC(this.AzO));},AiS:
function(G){if((!this.AD||!this.AbV)||!this.Iq())return;if(!this.AD.A88()){this.
Iq().AC0(this.AbV);this.Iq().HR(this.AbV);this.AD=null;}},ByR:function(G){var B;
if(!!this.AD&&(((this.M[0]!==this.AD.M[0])||(this.M[2]!==this.AD.M[2]))||(this.M[
3]!==this.AD.M[1])))this.AD.H([this.M[0],this.M[3],this.M[2],this.M[3]+((B=this.
AD.M)[3]-B[1])]);},ArX:function(E){this.AC_=E;this.JA.S(E);},AwS:function(E){if(
this.Avx===E)return;this.Avx=E;},ATm:function(E){this.A6e=E;this.Ad7.L(E);},A_e:
function(E){if(this.ANz===E)return;this.ANz=E;},A_j:function(E){if(this.ANE===E)
return;this.ANE=E;},ATn:function(E){this.A6f=E;this.JA.L(E);},A_k:function(E){if(
this.ANH===E)return;this.ANH=E;},A_f:function(E){if(this.ANA===E)return;this.ANA=
E;},C5:function(G){var F;if(!!this.Q){this.AzO=(F=this.Q,F[1].call(F[0]));if(!!this.
AD)this.AD.GW(this.AzO);this.BgP(this);}},Bz4:function(AoV){var B;var B1=AoV;var
AJw=AoV.M;var Azk=Hs;while(!!B1){var Aay=B1.FG;if(!B1.Ab&&(B1!==AoV)){B1.Bj(AJw);
return A.abh([0,0,(B=AoV.M)[2]-B[0],B[3]-B[1]],Azk);}if(!!Aay){if(((B=Aay.QR)[0]>=
B[2])||(B[1]>=B[3])){A.we(B1,0);A.we(Aay,0);}Aay.QR=A.wC(Aay.QR,AJw);}if(!((B1.U&
0x1)===0x1))return A.abh([0,0,(B=AoV.M)[2]-B[0],B[3]-B[1]],Azk);if(B1===AoV)AJw=
A.lb(A.abh(AJw,B1.M.slice(0,2)),B1.M);Azk=A.abf(Azk,B1.M.slice(0,2));B1=B1.Ab;}return A.
abh([0,0,(B=AoV.M)[2]-B[0],B[3]-B[1]],Azk);},A_l:function(E){if(this.ANI===E)return;
this.ANI=E;},Bkb:function(G){this.Ar5(this.AN1);if(!!this.AD&&!!this.AD.CM)this.
AD.CM.AbO(0,this.AD.CM.A0);if(!!this.Data)this.JA.R(this.Data.AvC(this.AzO));},A_i:
function(E){if(this.ACz===E)return;this.ACz=E;if(!!this.AD)this.AD.IX.L(this.ACz
);},A_h:function(E){this.Bii=E;this.AbN.L(E);},_Init:function(aArg){A.Core.P._Init.
call(this,aArg);A.acg.NY._Init.call(this.Ad7={I:this},0);A.acg.Text._Init.call(this.
JA={I:this},0);A.Core.Bn._Init.call(this.Bn={I:this},0);A.acl.Gn._Init.call(this.
HP={I:this},0);A.acg.Ap._Init.call(this.AbN={I:this},0);this.__proto__=C.DT;this.
H(Ff);this.Ad7.A1(0x3F);this.Ad7.H(Ff);this.Ad7.L(0xFF252528);this.JA.A1(0x3F);this.
JA.H(Ff);this.JA.R(A.jV);this.Bn.A1(0x3F);this.Bn.J1(Hs);this.Bn.KA(L9);this.Bn.
DD(Qe);this.Bn.DN(J9);this.HP.HQ(1);this.HP.Fr(250);this.AbN.A1(0x3A);this.AbN.H(
Oh);this.AbN.Cw(1);this.Bij=A.jb.Text;this.J(this.Ad7,0);this.J(this.JA,0);this.
J(this.Bn,0);this.J(this.AbN,0);this.Ad7.Ax(A.aaL(A.acw.AHE));this.JA.S(A.aaL(A.
fl.Af));this.Bn.Ls=[this,this.A4N];this.HP.SJ=[this,this.AiS];this.HP.Ahr=[this,
this.AAN];this.AC_=A.aaL(A.fl.Af);this.Avx=A.aaL(A.fl.Ak);this.AbN.Ax(A.aaL(A.aci.
ASj));this.Init(aArg);},_Done:function(){this.__proto__=A.Core.P;this.Ad7._Done(
);this.JA._Done();this.Bn._Done();this.HP._Done();this.AbN._Done();A.Core.P._Done.
call(this);},_ReInit:function(){A.Core.P._ReInit.call(this);this.Ad7._ReInit();this.
JA._ReInit();this.Bn._ReInit();this.HP._ReInit();this.AbN._ReInit();this.JA.S(A.
aaL(A.fl.Af));this.ArX(A.aaL(A.fl.Af));this.AwS(A.aaL(A.fl.Ak));this.CQ();},_Mark:
function(D){var B;A.Core.P._Mark.call(this,D);if((B=this.Data)&&(B._cycle!=D))B.
_Mark(B._cycle=D);if((B=this.AD)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.AC_
)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Avx)&&(B._cycle!=D))B._Mark(B._cycle=
D);if((B=this.AbV)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Q)&&((B=B[0])._cycle
!=D))B._Mark(B._cycle=D);if((B=this.Ad7)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
JA)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Bn)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.HP)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AbN)._cycle!=D)B._Mark(B._cycle=
D);},_className:"DropDown::DropDown"};C.AOy={Aub:null,Bn:null,Bhb:function(G){var
B;(B=this.Aub)?B[1].call(B[0],this):null;},_Init:function(aArg){A.Core.P._Init.call(
this,aArg);A.Core.Bn._Init.call(this.Bn={I:this},0);this.__proto__=C.AOy;this.H(
Qf);this.Bn.A1(0x3F);this.Bn.J1(Hs);this.Bn.KA(L9);this.Bn.DD(MR);this.Bn.DN(Tf);
this.J(this.Bn,0);this.Bn.Awe=[this,this.Bhb];this.Bn.BG=[this,this.Bhb];},_Done:
function(){this.__proto__=A.Core.P;this.Bn._Done();A.Core.P._Done.call(this);},_ReInit:
function(){A.Core.P._ReInit.call(this);this.Bn._ReInit();},_Mark:function(D){var
B;A.Core.P._Mark.call(this,D);if((B=this.Aub)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=
D);if((B=this.Bn)._cycle!=D)B._Mark(B._cycle=D);},_className:"DropDown::EventCatcher"
};
C._Init=function(){C.ACJ.__proto__=A.Core.P;C.ANS.__proto__=A.Core.P;C.DT.__proto__=
A.Core.P;C.AOy.__proto__=A.Core.P;};C._ReInit=function(){};C.DI=function(D){};return C;
})();

/* VitalControl demonstration application, © Urban GmbH & Co.KG 2025 */