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
var B_="Text";var BH=[0,0,100,24];var EV=[0,0,100,1];var GS=[0,0];var Jt=[0,0,100
,120];var IL=[100,0];var OK=[100,120];var PJ=[0,120];var N1=[90,0,100,60];var CJ=[
0,0,0,0];var Fn=[0,0,240,40];var Nb=[240,0];var OL=[240,40];var KH=[0,40];var OM=[
210,0,240,40];var Nc=[0,0,240,50];var ON=[240,50];var Ss=[0,50];
C.AlK={ABa:function(aIndex){return A.jm;},AA7:function(){return 0;},_Init:function(
aArg){this.__proto__=C.AlK;A.hJ++;},_Done:function(){this.__proto__=null;A.hJ--;
},_ReInit:function(){},_Mark:function(D){var B;if((B=this.I)&&(B._cycle!=D))B._Mark(
B._cycle=D);},I:null,_cycle:0,_observers:null,_className:"DropDown::DDData"};C.AAx={
B5:null,Background:null,Text:null,Ba:null,T:B_,Lz:0xFF000000,A2r:0xFF454545,A8b:
0,KE:0,J7:0x12,I2:A.vx,Bf:function(aSize){var B;A.Core.O.Bf.call(this,aSize);this.
Text.G([0,0,(B=this.M)[2]-B[0],B[3]-B[1]]);this.Text.G([].concat(this.Text.M[0]+
this.I2[0],this.Text.M.slice(1,4)));this.Text.G(A.aaQ(this.Text.M,this.Text.M[2]-
this.I2[2]));this.Text.G(A.aaS(this.Text.M,this.Text.M[1]+this.I2[1]));this.Text.
G([].concat(this.Text.M.slice(0,3),this.Text.M[3]-this.I2[3]));},Ag:function(Ae){
var B;A.Core.O.Ag.call(this,Ae);if(((Ae&0x20)===0x20)){this.Background.L(this.A2r
);this.Text.L(this.A8b);}else{this.Background.L(this.Lz);this.Text.L(this.KE);}}
,Bic:function(E){this.T=E;this.Text.R(E);},Abc:function(E){this.Lz=E;this.Background.
L(E);},Aa:function(E){this.B5=E;this.Text.Aa(E);},A2:function(E){this.J7=E;this.
Text.A2(E);},HF:function(E){if(A.z9(this.I2,E))return;this.I2=E;},_Init:function(
aArg){A.Core.O._Init.call(this,aArg);A.abh.AH._Init.call(this.Background={I:this
},0);A.abh.Text._Init.call(this.Text={I:this},0);A.abh.AH._Init.call(this.Ba={I:
this},0);this.__proto__=C.AAx;this.G(BH);this.Background.AV(0x3F);this.Background.
G(BH);this.Background.L(0xBE000000);this.Text.AV(0x3F);this.Text.G(BH);this.Text.
R(B_);this.Text.L(0xFFFFFFFF);this.Ba.AV(0x1D);this.Ba.G(EV);this.Ba.L(0x9EFFFFFF
);this.J(this.Background,0);this.J(this.Text,0);this.J(this.Ba,0);this.Text.Aa(A.
zW(A.eV.AB));this.B5=A.zW(A.eV.Aw);},_Done:function(){this.__proto__=A.Core.O;this.
Background._Done();this.Text._Done();this.Ba._Done();A.Core.O._Done.call(this);}
,_ReInit:function(){A.Core.O._ReInit.call(this);this.Background._ReInit();this.Text.
_ReInit();this.Ba._ReInit();},_Mark:function(D){var B;A.Core.O._Mark.call(this,D
);if((B=this.B5)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Background)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.Text)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
Ba)._cycle!=D)B._Mark(B._cycle=D);},_className:"DropDown::DDItem"};C.ALv={ACw:null
,A6d:null,CI:null,H2:null,Bh:null,IG:null,Ge:0,AR:0,GK:0,AaY:0,AAN:false,A0q:function(
H){if(this.Bh.Jk>100){var FW=this.CI.A3T(this.Bh.HU);if(FW<0)return;this.CI.GL(FW
);this.CI.Hx(FW,true,null,null);}},BwG:function(H){var B;if(!this.Bh.NA){var FW=
this.CI.A3T(this.Bh.HU);if(FW<0)return;this.CI.GL(FW);this.CI.Hx(FW,true,null,null
);(B=this.ACw)?B[1].call(B[0],this):null;}},AyH:function(H){this.Bh.Ap(true);},BjD:
function(E){if(A.z$(this.ACw,E))return;this.ACw=E;},GL:function(E){this.Ge=E;this.
CI.GL(E);},FT:function(){return this.CI.Ge;},Bwh:function(H){if(this.AAN){var GW=
A.aaj(this.Bh.HU,this.Bh.NI);if((GW[1]>8)||(GW[1]<-8)){this.Ib().ALE(this.H2,GS);
this.Bh.Ap(false);}}},Jp:function(E){this.AR=E;this.CI.Jp(E);},BjF:function(E){this.
A6d=E;this.CI.G7=E;},Ad5:function(E){this.GK=E;this.CI.Ad5(E);},AQg:function(){return this.
CI.GK;},BiA:function(E){if(this.AAN===E)return;this.AAN=E;},Ap9:function(){return this.
CI.AR;},Avf:function(E){if(this.AaY===E)return;this.AaY=E;},BwN:function(H){},Acz:
function(H){var B;var UC=this.CI.M;var Ar$=this.CI.Apv(0,this.CI.AR-1);var y1=(((
UC[1]-Ar$[1])*(UC[3]-UC[1]))/(Ar$[3]-Ar$[1]))|0;var y2=(((UC[3]-Ar$[1])*(UC[3]-UC[
1]))/(Ar$[3]-Ar$[1]))|0;if(y1<0)y1=0;if(y2>(UC[3]-UC[1]))y2=UC[3]-UC[1];this.IG.
G([UC[2]-10,y1+UC[1],UC[2],y2+UC[1]]);this.IG.X(this.AAN);},_Init:function(aArg){
A.Core.O._Init.call(this,aArg);A.Core.CI._Init.call(this.CI={I:this},0);A.Core.H2.
_Init.call(this.H2={I:this},0);A.Core.Bh._Init.call(this.Bh={I:this},0);A.abh.AH.
_Init.call(this.IG={I:this},0);this.__proto__=C.ALv;this.G(Jt);this.CI.AV(0x3F);
this.CI.G(Jt);this.CI.GL(0);this.CI.Jp(5);this.CI.NQ(C.AAx);this.H2.AV(0x3F);this.
H2.G(Jt);this.H2.AEH=false;this.H2.A7J=false;this.Bh.AV(0x3F);this.Bh.KB(GS);this.
Bh.KA(IL);this.Bh.DN(OK);this.Bh.D5(PJ);this.IG.G(N1);this.IG.L(0xFF000000);this.
J(this.CI,0);this.J(this.H2,0);this.J(this.Bh,0);this.J(this.IG,0);this.CI.Ej=[this
,this.Acz];this.CI.Avq(this.H2);this.H2.AD5=[this,this.BwN];this.H2.YA=[this,this.
AyH];this.Bh.AP2=[this,this.Bwh];this.Bh.DU=[this,this.A0q];this.Bh.K$=[this,this.
BwG];},_Done:function(){this.__proto__=A.Core.O;this.CI._Done();this.H2._Done();
this.Bh._Done();this.IG._Done();A.Core.O._Done.call(this);},_ReInit:function(){A.
Core.O._ReInit.call(this);this.CI._ReInit();this.H2._ReInit();this.Bh._ReInit();
this.IG._ReInit();},_Mark:function(D){var B;A.Core.O._Mark.call(this,D);if((B=this.
ACw)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.A6d)&&((B=B[0])._cycle
!=D))B._Mark(B._cycle=D);if((B=this.CI)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
H2)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Bh)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.IG)._cycle!=D)B._Mark(B._cycle=D);},_className:"DropDown::DDItemList"};C.
Ix={Data:null,AC:null,AAZ:null,AtX:null,AaX:null,Q:null,Ac4:null,JJ:null,Bh:null
,HD:null,AaO:null,AaY:100,GK:20,A_J:A.vx,A2O:0xFF252528,ALd:0xFF252528,ALi:0xFFF1EEEA
,A2P:0xFFFAFFFE,ALl:0xFFF8FDFF,ALe:0xFF0008C1,AxM:0,ALm:0xFF7EFEFF,ALD:-1,AAm:0xFF000000
,BdS:0xFFFAFFFE,C8:function(){this.BfC(this);},Init:function(aArg){this.A6r(this.
A2O);this.AQM(this.AAZ);this.A6s(this.A2P);},J_:function(CW,aClip,aOffset,Ce,aBlend
){A.Core.O.J_.call(this,CW,aClip,aOffset,Ce,aBlend);if(!A.z9(this.A_J,this.M)){this.
A_J=this.M;A.ow([this,this.Bt8],this);}},Bf:function(aSize){var B;A.Core.O.Bf.call(
this,aSize);this.JJ.G([0,0,(B=this.M)[2]-B[0],B[3]-B[1]]);this.JJ.G([].concat(this.
JJ.M[0],this.JJ.M.slice(1,4)));this.JJ.G(A.aaQ(this.JJ.M,this.JJ.M[2]-((B=this.AaO.
M)[2]-B[0])));this.JJ.G(A.aaS(this.JJ.M,this.JJ.M[1]));this.JJ.G([].concat(this.
JJ.M.slice(0,3),this.JJ.M[3]));},Au:function(E){if(A.z_(this.Q,E))return;if(!!this.
Q)A.zn([this,this.Dd],this.Q,0);this.Q=E;if(!!E)A.za([this,this.Dd],E,0);if(!!E)
A.ow([this,this.Dd],this);},Bis:function(E){if(this.Data===E)return;this.Data=E;
A.ow([this,this.Bcm],this);},BhY:function(H){var B;if(!this.AC)return;var FW=this.
AC.CI.GJ;var ZJ=(C.AAx.isPrototypeOf(B=this.AC.CI.Cd)?B:null);if(!!ZJ){if(this.Data.
AA7()>FW){ZJ.Bic(this.Data.ABa(FW));ZJ.Abc(this.ALd);ZJ.A2r=this.ALe;ZJ.A8b=this.
ALm;ZJ.Aa(this.AtX);ZJ.KE=this.ALl;ZJ.A2(0x12);ZJ.Ba.L(this.ALi);ZJ.HF(CJ);}ZJ.G(
A.aaN(ZJ.M,[(B=this.AC.CI.M)[2]-B[0],this.AC.CI.GK]));}},Bv2:function(H){var F;if(
!!this.Q){(F=this.Q,F[2].call(F[0],this.AC.FT()));A.aat(this.Q,0);}A.ow([this,this.
A1d],this);},A1d:function(H){if(!this.AC){this.BuJ(this);if(!this.AC)return;this.
HD.Cv=0;this.HD.B0=this.AC.AaY;this.AC.Ap(true);}else{this.HD.Cv=this.AC.AaY;this.
HD.B0=0;this.AC.Ap(false);}this.HD.Ap(true);this.AC.BiA(this.AaY<(this.AC.AQg()*
this.AC.Ap9()));},BuJ:function(H){var B;if(!this.Data)return;this.AaX=A._NewObject(
C.AL$,0);this.AC=A._NewObject(C.ALv,0);this.AC.BjF([this,this.BhY]);this.AC.BjD([
this,this.Bv2]);this.AC.Ad5(this.GK);this.AC.Jp(this.Data.AA7());this.AC.IG.L(this.
AAm);if(this.AaY>(this.AC.AQg()*this.AC.Ap9()))this.Avf(this.AC.AQg()*this.AC.Ap9(
));this.AC.Avf(this.AaY);this.AC.H2.FQ=[0,this.AaY];this.AC.G(this.M);this.AC.Ap(
false);this.AC.GL(this.AxM);var Iq=this.Ib();if(!!Iq){this.AaX.G([0,0,(B=Iq.M)[2
]-B[0],B[3]-B[1]]);this.AaX.AsB=[this,this.A1d];this.AaX.J(this.AC,0);Iq.J(this.
AaX,0);Iq.QG(this.AaX);Iq.AKO(this.AaX);}},Avf:function(E){if(this.AaY===E)return;
this.AaY=E;if(this.ALD<0)this.ALD=E;},AyE:function(H){var B;if(!this.AC||!this.Ib(
))return;var AHp=this.Bvi(this);this.AC.G([].concat(AHp[0],this.AC.M.slice(1,4))
);this.AC.G(A.aaQ(this.AC.M,AHp[2]));this.AC.G(A.aaS(this.AC.M,AHp[3]));this.AC.
G([].concat(this.AC.M.slice(0,3),AHp[3]+this.HD.A4));if((this.AC.M[3]>this.Ib().
M[3])&&(this.AC.M[3]!==((B=this.Ib().M)[3]-B[1])))this.AC.G([].concat(this.AC.M.
slice(0,3),this.Ib().M[3]));if((this.AC.M[1]<this.Ib().M[1])&&(this.AC.M[3]!==((
B=this.Ib().M)[3]-B[1])))this.AC.G(A.aaS(this.AC.M,this.Ib().M[1]));},Bcm:function(
H){this.JJ.R(this.Data.ABa(this.AxM));},AhW:function(H){if((!this.AC||!this.AaX)||
!this.Ib())return;if(!this.AC.A5u()){this.Ib().AAO(this.AaX);this.Ib().HG(this.AaX
);this.AC=null;}},Bt8:function(H){var B;if(!!this.AC&&(((this.M[0]!==this.AC.M[0
])||(this.M[2]!==this.AC.M[2]))||(this.M[3]!==this.AC.M[1])))this.AC.G([this.M[0
],this.M[3],this.M[2],this.M[3]+((B=this.AC.M)[3]-B[1])]);},AQM:function(E){this.
AAZ=E;this.JJ.Aa(E);},A6G:function(E){if(this.AtX===E)return;this.AtX=E;},A6r:function(
E){this.A2O=E;this.Ac4.L(E);},Bih:function(E){if(this.ALd===E)return;this.ALd=E;
},Bil:function(E){if(this.ALi===E)return;this.ALi=E;},A6s:function(E){this.A2P=E;
this.JJ.L(E);},Bim:function(E){if(this.ALl===E)return;this.ALl=E;},Bii:function(
E){if(this.ALe===E)return;this.ALe=E;},Dd:function(H){var F;if(!!this.Q){this.AxM=(
F=this.Q,F[1].call(F[0]));if(!!this.AC)this.AC.GL(this.AxM);this.Bcm(this);}},Bvi:
function(AnE){var B;var B8=AnE;var AHo=AnE.M;var Axk=GS;while(!!B8){var Zz=B8.HO;
if(!B8.Ac&&(B8!==AnE)){B8.Bg(AHo);return A.aam([0,0,(B=AnE.M)[2]-B[0],B[3]-B[1]]
,Axk);}if(!!Zz){if(((B=Zz.Qf)[0]>=B[2])||(B[1]>=B[3])){A.vv(B8,0);A.vv(Zz,0);}Zz.
Qf=A.vS(Zz.Qf,AHo);}if(!((B8.U&0x1)===0x1))return A.aam([0,0,(B=AnE.M)[2]-B[0],B[
3]-B[1]],Axk);if(B8===AnE)AHo=A.kz(A.aam(AHo,B8.M.slice(0,2)),B8.M);Axk=A.aak(Axk
,B8.M.slice(0,2));B8=B8.Ac;}return A.aam([0,0,(B=AnE.M)[2]-B[0],B[3]-B[1]],Axk);
},Bin:function(E){if(this.ALm===E)return;this.ALm=E;},BfC:function(H){this.Avf(this.
ALD);if(!!this.AC&&!!this.AC.CI)this.AC.CI.AaP(0,this.AC.CI.AR);if(!!this.Data)this.
JJ.R(this.Data.ABa(this.AxM));},Bik:function(E){if(this.AAm===E)return;this.AAm=
E;if(!!this.AC)this.AC.IG.L(this.AAm);},Bij:function(E){this.BdS=E;this.AaO.L(E);
},_Init:function(aArg){A.Core.O._Init.call(this,aArg);A.abh.NH._Init.call(this.Ac4={
I:this},0);A.abh.Text._Init.call(this.JJ={I:this},0);A.Core.Bh._Init.call(this.Bh={
I:this},0);A.abm.F_._Init.call(this.HD={I:this},0);A.abh.Ak._Init.call(this.AaO={
I:this},0);this.__proto__=C.Ix;this.G(Fn);this.Ac4.AV(0x3F);this.Ac4.G(Fn);this.
Ac4.L(0xFF252528);this.JJ.AV(0x3F);this.JJ.G(Fn);this.JJ.R(A.jm);this.Bh.AV(0x3F
);this.Bh.KB(GS);this.Bh.KA(Nb);this.Bh.DN(OL);this.Bh.D5(KH);this.HD.IF(1);this.
HD.Fz(250);this.AaO.AV(0x3A);this.AaO.G(OM);this.AaO.Ct(1);this.J(this.Ac4,0);this.
J(this.JJ,0);this.J(this.Bh,0);this.J(this.AaO,0);this.Ac4.At(A.zW(A.aby.AFj));this.
JJ.Aa(A.zW(A.eV.Aw));this.Bh.K$=[this,this.A1d];this.HD.R5=[this,this.AhW];this.
HD.Agv=[this,this.AyE];this.AAZ=A.zW(A.eV.Aw);this.AtX=A.zW(A.eV.AB);this.AaO.At(
A.zW(A.abj.APF));this.Init(aArg);},_Done:function(){this.__proto__=A.Core.O;this.
Ac4._Done();this.JJ._Done();this.Bh._Done();this.HD._Done();this.AaO._Done();A.Core.
O._Done.call(this);},_ReInit:function(){A.Core.O._ReInit.call(this);this.Ac4._ReInit(
);this.JJ._ReInit();this.Bh._ReInit();this.HD._ReInit();this.AaO._ReInit();this.
C8();},_Mark:function(D){var B;A.Core.O._Mark.call(this,D);if((B=this.Data)&&(B.
_cycle!=D))B._Mark(B._cycle=D);if((B=this.AC)&&(B._cycle!=D))B._Mark(B._cycle=D);
if((B=this.AAZ)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.AtX)&&(B._cycle!=D
))B._Mark(B._cycle=D);if((B=this.AaX)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.
Q)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.Ac4)._cycle!=D)B._Mark(B.
_cycle=D);if((B=this.JJ)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Bh)._cycle!=D)
B._Mark(B._cycle=D);if((B=this.HD)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AaO).
_cycle!=D)B._Mark(B._cycle=D);},_className:"DropDown::DropDown"};C.AL$={AsB:null
,Bh:null,BcI:function(H){var B;(B=this.AsB)?B[1].call(B[0],this):null;},_Init:function(
aArg){A.Core.O._Init.call(this,aArg);A.Core.Bh._Init.call(this.Bh={I:this},0);this.
__proto__=C.AL$;this.G(Nc);this.Bh.AV(0x3F);this.Bh.KB(GS);this.Bh.KA(Nb);this.Bh.
DN(ON);this.Bh.D5(Ss);this.J(this.Bh,0);this.Bh.Auz=[this,this.BcI];this.Bh.BS=[
this,this.BcI];},_Done:function(){this.__proto__=A.Core.O;this.Bh._Done();A.Core.
O._Done.call(this);},_ReInit:function(){A.Core.O._ReInit.call(this);this.Bh._ReInit(
);},_Mark:function(D){var B;A.Core.O._Mark.call(this,D);if((B=this.AsB)&&((B=B[0
])._cycle!=D))B._Mark(B._cycle=D);if((B=this.Bh)._cycle!=D)B._Mark(B._cycle=D);}
,_className:"DropDown::EventCatcher"};
C._Init=function(){C.AAx.__proto__=A.Core.O;C.ALv.__proto__=A.Core.O;C.Ix.__proto__=
A.Core.O;C.AL$.__proto__=A.Core.O;};C._ReInit=function(){};C.DE=function(D){};return C;
})();

/* VitalControl demonstration application, © Urban GmbH & Co.KG 2023 */