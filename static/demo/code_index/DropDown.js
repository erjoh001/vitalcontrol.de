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
C.AlM={AA$:function(aIndex){return A.jm;},AA6:function(){return 0;},_Init:function(
aArg){this.__proto__=C.AlM;A.hJ++;},_Done:function(){this.__proto__=null;A.hJ--;
},_ReInit:function(){},_Mark:function(D){var B;if((B=this.I)&&(B._cycle!=D))B._Mark(
B._cycle=D);},I:null,_cycle:0,_observers:null,_className:"DropDown::DDData"};C.AAw={
B5:null,Background:null,Text:null,Ba:null,T:B_,Lz:0xFF000000,A2y:0xFF454545,A8j:
0,KE:0,J7:0x12,I2:A.vx,Bf:function(aSize){var B;A.Core.O.Bf.call(this,aSize);this.
Text.G([0,0,(B=this.M)[2]-B[0],B[3]-B[1]]);this.Text.G([].concat(this.Text.M[0]+
this.I2[0],this.Text.M.slice(1,4)));this.Text.G(A.aaQ(this.Text.M,this.Text.M[2]-
this.I2[2]));this.Text.G(A.aaS(this.Text.M,this.Text.M[1]+this.I2[1]));this.Text.
G([].concat(this.Text.M.slice(0,3),this.Text.M[3]-this.I2[3]));},Ag:function(Ae){
var B;A.Core.O.Ag.call(this,Ae);if(((Ae&0x20)===0x20)){this.Background.L(this.A2y
);this.Text.L(this.A8j);}else{this.Background.L(this.Lz);this.Text.L(this.KE);}}
,Bii:function(E){this.T=E;this.Text.R(E);},Abc:function(E){this.Lz=E;this.Background.
L(E);},Aa:function(E){this.B5=E;this.Text.Aa(E);},A2:function(E){this.J7=E;this.
Text.A2(E);},HF:function(E){if(A.z9(this.I2,E))return;this.I2=E;},_Init:function(
aArg){A.Core.O._Init.call(this,aArg);A.abh.AH._Init.call(this.Background={I:this
},0);A.abh.Text._Init.call(this.Text={I:this},0);A.abh.AH._Init.call(this.Ba={I:
this},0);this.__proto__=C.AAw;this.G(BH);this.Background.AV(0x3F);this.Background.
G(BH);this.Background.L(0xBE000000);this.Text.AV(0x3F);this.Text.G(BH);this.Text.
R(B_);this.Text.L(0xFFFFFFFF);this.Ba.AV(0x1D);this.Ba.G(EV);this.Ba.L(0x9EFFFFFF
);this.J(this.Background,0);this.J(this.Text,0);this.J(this.Ba,0);this.Text.Aa(A.
zW(A.eV.AB));this.B5=A.zW(A.eV.Aw);},_Done:function(){this.__proto__=A.Core.O;this.
Background._Done();this.Text._Done();this.Ba._Done();A.Core.O._Done.call(this);}
,_ReInit:function(){A.Core.O._ReInit.call(this);this.Background._ReInit();this.Text.
_ReInit();this.Ba._ReInit();},_Mark:function(D){var B;A.Core.O._Mark.call(this,D
);if((B=this.B5)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Background)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.Text)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
Ba)._cycle!=D)B._Mark(B._cycle=D);},_className:"DropDown::DDItem"};C.ALu={ACv:null
,A6l:null,CI:null,H2:null,Bh:null,IG:null,Ge:0,AR:0,GK:0,AaY:0,AAM:false,A0x:function(
H){if(this.Bh.Jk>100){var FW=this.CI.A30(this.Bh.HU);if(FW<0)return;this.CI.GL(FW
);this.CI.Hx(FW,true,null,null);}},BwG:function(H){var B;if(!this.Bh.NA){var FW=
this.CI.A30(this.Bh.HU);if(FW<0)return;this.CI.GL(FW);this.CI.Hx(FW,true,null,null
);(B=this.ACv)?B[1].call(B[0],this):null;}},AyG:function(H){this.Bh.Ap(true);},BjJ:
function(E){if(A.z$(this.ACv,E))return;this.ACv=E;},GL:function(E){this.Ge=E;this.
CI.GL(E);},FT:function(){return this.CI.Ge;},Bwh:function(H){if(this.AAM){var GW=
A.aaj(this.Bh.HU,this.Bh.NI);if((GW[1]>8)||(GW[1]<-8)){this.Ib().ALD(this.H2,GS);
this.Bh.Ap(false);}}},Jp:function(E){this.AR=E;this.CI.Jp(E);},BjL:function(E){this.
A6l=E;this.CI.G7=E;},Ad5:function(E){this.GK=E;this.CI.Ad5(E);},AQf:function(){return this.
CI.GK;},BiG:function(E){if(this.AAM===E)return;this.AAM=E;},Aqa:function(){return this.
CI.AR;},Ave:function(E){if(this.AaY===E)return;this.AaY=E;},BwN:function(H){},Acy:
function(H){var B;var UC=this.CI.M;var Ar_=this.CI.Apz(0,this.CI.AR-1);var y1=(((
UC[1]-Ar_[1])*(UC[3]-UC[1]))/(Ar_[3]-Ar_[1]))|0;var y2=(((UC[3]-Ar_[1])*(UC[3]-UC[
1]))/(Ar_[3]-Ar_[1]))|0;if(y1<0)y1=0;if(y2>(UC[3]-UC[1]))y2=UC[3]-UC[1];this.IG.
G([UC[2]-10,y1+UC[1],UC[2],y2+UC[1]]);this.IG.X(this.AAM);},_Init:function(aArg){
A.Core.O._Init.call(this,aArg);A.Core.CI._Init.call(this.CI={I:this},0);A.Core.H2.
_Init.call(this.H2={I:this},0);A.Core.Bh._Init.call(this.Bh={I:this},0);A.abh.AH.
_Init.call(this.IG={I:this},0);this.__proto__=C.ALu;this.G(Jt);this.CI.AV(0x3F);
this.CI.G(Jt);this.CI.GL(0);this.CI.Jp(5);this.CI.NQ(C.AAw);this.H2.AV(0x3F);this.
H2.G(Jt);this.H2.AEH=false;this.H2.A7R=false;this.Bh.AV(0x3F);this.Bh.KB(GS);this.
Bh.KA(IL);this.Bh.DN(OK);this.Bh.D5(PJ);this.IG.G(N1);this.IG.L(0xFF000000);this.
J(this.CI,0);this.J(this.H2,0);this.J(this.Bh,0);this.J(this.IG,0);this.CI.Ej=[this
,this.Acy];this.CI.Avp(this.H2);this.H2.AD4=[this,this.BwN];this.H2.Yw=[this,this.
AyG];this.Bh.AP1=[this,this.Bwh];this.Bh.DU=[this,this.A0x];this.Bh.K$=[this,this.
BwG];},_Done:function(){this.__proto__=A.Core.O;this.CI._Done();this.H2._Done();
this.Bh._Done();this.IG._Done();A.Core.O._Done.call(this);},_ReInit:function(){A.
Core.O._ReInit.call(this);this.CI._ReInit();this.H2._ReInit();this.Bh._ReInit();
this.IG._ReInit();},_Mark:function(D){var B;A.Core.O._Mark.call(this,D);if((B=this.
ACv)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.A6l)&&((B=B[0])._cycle
!=D))B._Mark(B._cycle=D);if((B=this.CI)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
H2)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Bh)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.IG)._cycle!=D)B._Mark(B._cycle=D);},_className:"DropDown::DDItemList"};C.
Ix={Data:null,AC:null,AAY:null,AtW:null,AaX:null,Q:null,Ac3:null,JJ:null,Bh:null
,HD:null,AaO:null,AaY:100,GK:20,A_Q:A.vx,A2V:0xFF252528,ALc:0xFF252528,ALh:0xFFF1EEEA
,A2W:0xFFFAFFFE,ALk:0xFFF8FDFF,ALd:0xFF0008C1,AxL:0,ALl:0xFF7EFEFF,ALC:-1,AAl:0xFF000000
,BdZ:0xFFFAFFFE,C3:function(){this.BfJ(this);},Init:function(aArg){this.A6z(this.
A2V);this.AQL(this.AAY);this.A6A(this.A2W);},J_:function(CW,aClip,aOffset,Ce,aBlend
){A.Core.O.J_.call(this,CW,aClip,aOffset,Ce,aBlend);if(!A.z9(this.A_Q,this.M)){this.
A_Q=this.M;A.ow([this,this.Bt8],this);}},Bf:function(aSize){var B;A.Core.O.Bf.call(
this,aSize);this.JJ.G([0,0,(B=this.M)[2]-B[0],B[3]-B[1]]);this.JJ.G([].concat(this.
JJ.M[0],this.JJ.M.slice(1,4)));this.JJ.G(A.aaQ(this.JJ.M,this.JJ.M[2]-((B=this.AaO.
M)[2]-B[0])));this.JJ.G(A.aaS(this.JJ.M,this.JJ.M[1]));this.JJ.G([].concat(this.
JJ.M.slice(0,3),this.JJ.M[3]));},Au:function(E){if(A.z_(this.Q,E))return;if(!!this.
Q)A.zn([this,this.Dd],this.Q,0);this.Q=E;if(!!E)A.za([this,this.Dd],E,0);if(!!E)
A.ow([this,this.Dd],this);},Biy:function(E){if(this.Data===E)return;this.Data=E;
A.ow([this,this.Bct],this);},Bh4:function(H){var B;if(!this.AC)return;var FW=this.
AC.CI.GJ;var ZJ=(C.AAw.isPrototypeOf(B=this.AC.CI.Cd)?B:null);if(!!ZJ){if(this.Data.
AA6()>FW){ZJ.Bii(this.Data.AA$(FW));ZJ.Abc(this.ALc);ZJ.A2y=this.ALd;ZJ.A8j=this.
ALl;ZJ.Aa(this.AtW);ZJ.KE=this.ALk;ZJ.A2(0x12);ZJ.Ba.L(this.ALh);ZJ.HF(CJ);}ZJ.G(
A.aaN(ZJ.M,[(B=this.AC.CI.M)[2]-B[0],this.AC.CI.GK]));}},Bv2:function(H){var F;if(
!!this.Q){(F=this.Q,F[2].call(F[0],this.AC.FT()));A.aat(this.Q,0);}A.ow([this,this.
A1k],this);},A1k:function(H){if(!this.AC){this.BuJ(this);if(!this.AC)return;this.
HD.Cv=0;this.HD.B0=this.AC.AaY;this.AC.Ap(true);}else{this.HD.Cv=this.AC.AaY;this.
HD.B0=0;this.AC.Ap(false);}this.HD.Ap(true);this.AC.BiG(this.AaY<(this.AC.AQf()*
this.AC.Aqa()));},BuJ:function(H){var B;if(!this.Data)return;this.AaX=A._NewObject(
C.AL_,0);this.AC=A._NewObject(C.ALu,0);this.AC.BjL([this,this.Bh4]);this.AC.BjJ([
this,this.Bv2]);this.AC.Ad5(this.GK);this.AC.Jp(this.Data.AA6());this.AC.IG.L(this.
AAl);if(this.AaY>(this.AC.AQf()*this.AC.Aqa()))this.Ave(this.AC.AQf()*this.AC.Aqa(
));this.AC.Ave(this.AaY);this.AC.H2.FQ=[0,this.AaY];this.AC.G(this.M);this.AC.Ap(
false);this.AC.GL(this.AxL);var Iq=this.Ib();if(!!Iq){this.AaX.G([0,0,(B=Iq.M)[2
]-B[0],B[3]-B[1]]);this.AaX.AsA=[this,this.A1k];this.AaX.J(this.AC,0);Iq.J(this.
AaX,0);Iq.QG(this.AaX);Iq.AKN(this.AaX);}},Ave:function(E){if(this.AaY===E)return;
this.AaY=E;if(this.ALC<0)this.ALC=E;},AyD:function(H){var B;if(!this.AC||!this.Ib(
))return;var AHo=this.Bvi(this);this.AC.G([].concat(AHo[0],this.AC.M.slice(1,4))
);this.AC.G(A.aaQ(this.AC.M,AHo[2]));this.AC.G(A.aaS(this.AC.M,AHo[3]));this.AC.
G([].concat(this.AC.M.slice(0,3),AHo[3]+this.HD.A4));if((this.AC.M[3]>this.Ib().
M[3])&&(this.AC.M[3]!==((B=this.Ib().M)[3]-B[1])))this.AC.G([].concat(this.AC.M.
slice(0,3),this.Ib().M[3]));if((this.AC.M[1]<this.Ib().M[1])&&(this.AC.M[3]!==((
B=this.Ib().M)[3]-B[1])))this.AC.G(A.aaS(this.AC.M,this.Ib().M[1]));},Bct:function(
H){this.JJ.R(this.Data.AA$(this.AxL));},AhW:function(H){if((!this.AC||!this.AaX)||
!this.Ib())return;if(!this.AC.A5C()){this.Ib().AAN(this.AaX);this.Ib().HG(this.AaX
);this.AC=null;}},Bt8:function(H){var B;if(!!this.AC&&(((this.M[0]!==this.AC.M[0
])||(this.M[2]!==this.AC.M[2]))||(this.M[3]!==this.AC.M[1])))this.AC.G([this.M[0
],this.M[3],this.M[2],this.M[3]+((B=this.AC.M)[3]-B[1])]);},AQL:function(E){this.
AAY=E;this.JJ.Aa(E);},A6O:function(E){if(this.AtW===E)return;this.AtW=E;},A6z:function(
E){this.A2V=E;this.Ac3.L(E);},Bin:function(E){if(this.ALc===E)return;this.ALc=E;
},Bir:function(E){if(this.ALh===E)return;this.ALh=E;},A6A:function(E){this.A2W=E;
this.JJ.L(E);},Bis:function(E){if(this.ALk===E)return;this.ALk=E;},Bio:function(
E){if(this.ALd===E)return;this.ALd=E;},Dd:function(H){var F;if(!!this.Q){this.AxL=(
F=this.Q,F[1].call(F[0]));if(!!this.AC)this.AC.GL(this.AxL);this.Bct(this);}},Bvi:
function(AnI){var B;var B8=AnI;var AHn=AnI.M;var Axj=GS;while(!!B8){var Zz=B8.HO;
if(!B8.Ac&&(B8!==AnI)){B8.Bg(AHn);return A.aam([0,0,(B=AnI.M)[2]-B[0],B[3]-B[1]]
,Axj);}if(!!Zz){if(((B=Zz.Qf)[0]>=B[2])||(B[1]>=B[3])){A.vv(B8,0);A.vv(Zz,0);}Zz.
Qf=A.vS(Zz.Qf,AHn);}if(!((B8.U&0x1)===0x1))return A.aam([0,0,(B=AnI.M)[2]-B[0],B[
3]-B[1]],Axj);if(B8===AnI)AHn=A.kz(A.aam(AHn,B8.M.slice(0,2)),B8.M);Axj=A.aak(Axj
,B8.M.slice(0,2));B8=B8.Ac;}return A.aam([0,0,(B=AnI.M)[2]-B[0],B[3]-B[1]],Axj);
},Bit:function(E){if(this.ALl===E)return;this.ALl=E;},BfJ:function(H){this.Ave(this.
ALC);if(!!this.AC&&!!this.AC.CI)this.AC.CI.AaP(0,this.AC.CI.AR);if(!!this.Data)this.
JJ.R(this.Data.AA$(this.AxL));},Biq:function(E){if(this.AAl===E)return;this.AAl=
E;if(!!this.AC)this.AC.IG.L(this.AAl);},Bip:function(E){this.BdZ=E;this.AaO.L(E);
},_Init:function(aArg){A.Core.O._Init.call(this,aArg);A.abh.NH._Init.call(this.Ac3={
I:this},0);A.abh.Text._Init.call(this.JJ={I:this},0);A.Core.Bh._Init.call(this.Bh={
I:this},0);A.abm.F_._Init.call(this.HD={I:this},0);A.abh.Ak._Init.call(this.AaO={
I:this},0);this.__proto__=C.Ix;this.G(Fn);this.Ac3.AV(0x3F);this.Ac3.G(Fn);this.
Ac3.L(0xFF252528);this.JJ.AV(0x3F);this.JJ.G(Fn);this.JJ.R(A.jm);this.Bh.AV(0x3F
);this.Bh.KB(GS);this.Bh.KA(Nb);this.Bh.DN(OL);this.Bh.D5(KH);this.HD.IF(1);this.
HD.Fz(250);this.AaO.AV(0x3A);this.AaO.G(OM);this.AaO.Ct(1);this.J(this.Ac3,0);this.
J(this.JJ,0);this.J(this.Bh,0);this.J(this.AaO,0);this.Ac3.At(A.zW(A.aby.AFj));this.
JJ.Aa(A.zW(A.eV.Aw));this.Bh.K$=[this,this.A1k];this.HD.R5=[this,this.AhW];this.
HD.Agw=[this,this.AyD];this.AAY=A.zW(A.eV.Aw);this.AtW=A.zW(A.eV.AB);this.AaO.At(
A.zW(A.abj.APE));this.Init(aArg);},_Done:function(){this.__proto__=A.Core.O;this.
Ac3._Done();this.JJ._Done();this.Bh._Done();this.HD._Done();this.AaO._Done();A.Core.
O._Done.call(this);},_ReInit:function(){A.Core.O._ReInit.call(this);this.Ac3._ReInit(
);this.JJ._ReInit();this.Bh._ReInit();this.HD._ReInit();this.AaO._ReInit();this.
C3();},_Mark:function(D){var B;A.Core.O._Mark.call(this,D);if((B=this.Data)&&(B.
_cycle!=D))B._Mark(B._cycle=D);if((B=this.AC)&&(B._cycle!=D))B._Mark(B._cycle=D);
if((B=this.AAY)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.AtW)&&(B._cycle!=D
))B._Mark(B._cycle=D);if((B=this.AaX)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.
Q)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.Ac3)._cycle!=D)B._Mark(B.
_cycle=D);if((B=this.JJ)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Bh)._cycle!=D)
B._Mark(B._cycle=D);if((B=this.HD)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AaO).
_cycle!=D)B._Mark(B._cycle=D);},_className:"DropDown::DropDown"};C.AL_={AsA:null
,Bh:null,BcP:function(H){var B;(B=this.AsA)?B[1].call(B[0],this):null;},_Init:function(
aArg){A.Core.O._Init.call(this,aArg);A.Core.Bh._Init.call(this.Bh={I:this},0);this.
__proto__=C.AL_;this.G(Nc);this.Bh.AV(0x3F);this.Bh.KB(GS);this.Bh.KA(Nb);this.Bh.
DN(ON);this.Bh.D5(Ss);this.J(this.Bh,0);this.Bh.Auy=[this,this.BcP];this.Bh.BS=[
this,this.BcP];},_Done:function(){this.__proto__=A.Core.O;this.Bh._Done();A.Core.
O._Done.call(this);},_ReInit:function(){A.Core.O._ReInit.call(this);this.Bh._ReInit(
);},_Mark:function(D){var B;A.Core.O._Mark.call(this,D);if((B=this.AsA)&&((B=B[0
])._cycle!=D))B._Mark(B._cycle=D);if((B=this.Bh)._cycle!=D)B._Mark(B._cycle=D);}
,_className:"DropDown::EventCatcher"};
C._Init=function(){C.AAw.__proto__=A.Core.O;C.ALu.__proto__=A.Core.O;C.Ix.__proto__=
A.Core.O;C.AL_.__proto__=A.Core.O;};C._ReInit=function(){};C.DE=function(D){};return C;
})();

/* VitalControl demonstration application, © Urban GmbH & Co.KG 2023 */