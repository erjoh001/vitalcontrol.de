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
var B$="Text";var BH=[0,0,100,24];var EV=[0,0,100,1];var GT=[0,0];var Jt=[0,0,100
,120];var IL=[100,0];var OK=[100,120];var PJ=[0,120];var N1=[90,0,100,60];var CJ=[
0,0,0,0];var Fn=[0,0,240,40];var Nd=[240,0];var OL=[240,40];var KH=[0,40];var OM=[
210,0,240,40];var Ne=[0,0,240,50];var ON=[240,50];var Ss=[0,50];
C.AlN={ABa:function(aIndex){return A.jm;},AA7:function(){return 0;},_Init:function(
aArg){this.__proto__=C.AlN;A.hJ++;},_Done:function(){this.__proto__=null;A.hJ--;
},_ReInit:function(){},_Mark:function(D){var B;if((B=this.I)&&(B._cycle!=D))B._Mark(
B._cycle=D);},I:null,_cycle:0,_observers:null,_className:"DropDown::DDData"};C.AAx={
B6:null,Background:null,Text:null,Ba:null,T:B$,Lz:0xFF000000,A2y:0xFF454545,A8j:
0,KE:0,J7:0x12,I3:A.vx,Bf:function(aSize){var B;A.Core.O.Bf.call(this,aSize);this.
Text.G([0,0,(B=this.M)[2]-B[0],B[3]-B[1]]);this.Text.G([].concat(this.Text.M[0]+
this.I3[0],this.Text.M.slice(1,4)));this.Text.G(A.aaQ(this.Text.M,this.Text.M[2]-
this.I3[2]));this.Text.G(A.aaS(this.Text.M,this.Text.M[1]+this.I3[1]));this.Text.
G([].concat(this.Text.M.slice(0,3),this.Text.M[3]-this.I3[3]));},Ag:function(Ae){
var B;A.Core.O.Ag.call(this,Ae);if(((Ae&0x20)===0x20)){this.Background.L(this.A2y
);this.Text.L(this.A8j);}else{this.Background.L(this.Lz);this.Text.L(this.KE);}}
,Bij:function(E){this.T=E;this.Text.R(E);},Abd:function(E){this.Lz=E;this.Background.
L(E);},Aa:function(E){this.B6=E;this.Text.Aa(E);},A2:function(E){this.J7=E;this.
Text.A2(E);},HG:function(E){if(A.z9(this.I3,E))return;this.I3=E;},_Init:function(
aArg){A.Core.O._Init.call(this,aArg);A.abh.AH._Init.call(this.Background={I:this
},0);A.abh.Text._Init.call(this.Text={I:this},0);A.abh.AH._Init.call(this.Ba={I:
this},0);this.__proto__=C.AAx;this.G(BH);this.Background.AV(0x3F);this.Background.
G(BH);this.Background.L(0xBE000000);this.Text.AV(0x3F);this.Text.G(BH);this.Text.
R(B$);this.Text.L(0xFFFFFFFF);this.Ba.AV(0x1D);this.Ba.G(EV);this.Ba.L(0x9EFFFFFF
);this.J(this.Background,0);this.J(this.Text,0);this.J(this.Ba,0);this.Text.Aa(A.
zW(A.eV.AB));this.B6=A.zW(A.eV.Aw);},_Done:function(){this.__proto__=A.Core.O;this.
Background._Done();this.Text._Done();this.Ba._Done();A.Core.O._Done.call(this);}
,_ReInit:function(){A.Core.O._ReInit.call(this);this.Background._ReInit();this.Text.
_ReInit();this.Ba._ReInit();},_Mark:function(D){var B;A.Core.O._Mark.call(this,D
);if((B=this.B6)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Background)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.Text)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
Ba)._cycle!=D)B._Mark(B._cycle=D);},_className:"DropDown::DDItem"};C.ALr={ACw:null
,A6l:null,CI:null,H2:null,Bh:null,IG:null,Ge:0,AR:0,GL:0,AaZ:0,AAN:false,A0x:function(
H){if(this.Bh.Jk>100){var FW=this.CI.A30(this.Bh.HV);if(FW<0)return;this.CI.GM(FW
);this.CI.Hx(FW,true,null,null);}},BwK:function(H){var B;if(!this.Bh.NB){var FW=
this.CI.A30(this.Bh.HV);if(FW<0)return;this.CI.GM(FW);this.CI.Hx(FW,true,null,null
);(B=this.ACw)?B[1].call(B[0],this):null;}},AyI:function(H){this.Bh.Ap(true);},BjK:
function(E){if(A.z$(this.ACw,E))return;this.ACw=E;},GM:function(E){this.Ge=E;this.
CI.GM(E);},Fz:function(){return this.CI.Ge;},Bwl:function(H){if(this.AAN){var GX=
A.aaj(this.Bh.HV,this.Bh.NJ);if((GX[1]>8)||(GX[1]<-8)){this.Ib().ALA(this.H2,GT);
this.Bh.Ap(false);}}},Jp:function(E){this.AR=E;this.CI.Jp(E);},BjM:function(E){this.
A6l=E;this.CI.G8=E;},Ad5:function(E){this.GL=E;this.CI.Ad5(E);},AQc:function(){return this.
CI.GL;},BiH:function(E){if(this.AAN===E)return;this.AAN=E;},Aqa:function(){return this.
CI.AR;},Avh:function(E){if(this.AaZ===E)return;this.AaZ=E;},BwR:function(H){},Acy:
function(H){var B;var UE=this.CI.M;var Ar$=this.CI.Apz(0,this.CI.AR-1);var y1=(((
UE[1]-Ar$[1])*(UE[3]-UE[1]))/(Ar$[3]-Ar$[1]))|0;var y2=(((UE[3]-Ar$[1])*(UE[3]-UE[
1]))/(Ar$[3]-Ar$[1]))|0;if(y1<0)y1=0;if(y2>(UE[3]-UE[1]))y2=UE[3]-UE[1];this.IG.
G([UE[2]-10,y1+UE[1],UE[2],y2+UE[1]]);this.IG.X(this.AAN);},_Init:function(aArg){
A.Core.O._Init.call(this,aArg);A.Core.CI._Init.call(this.CI={I:this},0);A.Core.H2.
_Init.call(this.H2={I:this},0);A.Core.Bh._Init.call(this.Bh={I:this},0);A.abh.AH.
_Init.call(this.IG={I:this},0);this.__proto__=C.ALr;this.G(Jt);this.CI.AV(0x3F);
this.CI.G(Jt);this.CI.GM(0);this.CI.Jp(5);this.CI.NQ(C.AAx);this.H2.AV(0x3F);this.
H2.G(Jt);this.H2.AEH=false;this.H2.A7R=false;this.Bh.AV(0x3F);this.Bh.KB(GT);this.
Bh.KA(IL);this.Bh.DN(OK);this.Bh.D5(PJ);this.IG.G(N1);this.IG.L(0xFF000000);this.
J(this.CI,0);this.J(this.H2,0);this.J(this.Bh,0);this.J(this.IG,0);this.CI.Ej=[this
,this.Acy];this.CI.Avs(this.H2);this.H2.AD4=[this,this.BwR];this.H2.Yy=[this,this.
AyI];this.Bh.APY=[this,this.Bwl];this.Bh.DV=[this,this.A0x];this.Bh.K$=[this,this.
BwK];},_Done:function(){this.__proto__=A.Core.O;this.CI._Done();this.H2._Done();
this.Bh._Done();this.IG._Done();A.Core.O._Done.call(this);},_ReInit:function(){A.
Core.O._ReInit.call(this);this.CI._ReInit();this.H2._ReInit();this.Bh._ReInit();
this.IG._ReInit();},_Mark:function(D){var B;A.Core.O._Mark.call(this,D);if((B=this.
ACw)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.A6l)&&((B=B[0])._cycle
!=D))B._Mark(B._cycle=D);if((B=this.CI)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
H2)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Bh)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.IG)._cycle!=D)B._Mark(B._cycle=D);},_className:"DropDown::DDItemList"};C.
Ix={Data:null,AC:null,AAZ:null,AtY:null,AaY:null,Q:null,Ac3:null,JJ:null,Bh:null
,HD:null,AaP:null,AaZ:100,GL:20,A_Q:A.vx,A2V:0xFF252528,AK$:0xFF252528,ALe:0xFFF1EEEA
,A2W:0xFFFAFFFE,ALh:0xFFF8FDFF,ALa:0xFF0008C1,AxN:0,ALi:0xFF7EFEFF,ALz:-1,AAm:0xFF000000
,BdZ:0xFFFAFFFE,C3:function(){this.BfK(this);},Init:function(aArg){this.A6z(this.
A2V);this.AQI(this.AAZ);this.A6A(this.A2W);},J_:function(CW,aClip,aOffset,Ce,aBlend
){A.Core.O.J_.call(this,CW,aClip,aOffset,Ce,aBlend);if(!A.z9(this.A_Q,this.M)){this.
A_Q=this.M;A.ow([this,this.Bua],this);}},Bf:function(aSize){var B;A.Core.O.Bf.call(
this,aSize);this.JJ.G([0,0,(B=this.M)[2]-B[0],B[3]-B[1]]);this.JJ.G([].concat(this.
JJ.M[0],this.JJ.M.slice(1,4)));this.JJ.G(A.aaQ(this.JJ.M,this.JJ.M[2]-((B=this.AaP.
M)[2]-B[0])));this.JJ.G(A.aaS(this.JJ.M,this.JJ.M[1]));this.JJ.G([].concat(this.
JJ.M.slice(0,3),this.JJ.M[3]));},Au:function(E){if(A.z_(this.Q,E))return;if(!!this.
Q)A.zn([this,this.Dd],this.Q,0);this.Q=E;if(!!E)A.za([this,this.Dd],E,0);if(!!E)
A.ow([this,this.Dd],this);},Biz:function(E){if(this.Data===E)return;this.Data=E;
A.ow([this,this.Bct],this);},Bh5:function(H){var B;if(!this.AC)return;var FW=this.
AC.CI.GK;var ZL=(C.AAx.isPrototypeOf(B=this.AC.CI.Cd)?B:null);if(!!ZL){if(this.Data.
AA7()>FW){ZL.Bij(this.Data.ABa(FW));ZL.Abd(this.AK$);ZL.A2y=this.ALa;ZL.A8j=this.
ALi;ZL.Aa(this.AtY);ZL.KE=this.ALh;ZL.A2(0x12);ZL.Ba.L(this.ALe);ZL.HG(CJ);}ZL.G(
A.aaN(ZL.M,[(B=this.AC.CI.M)[2]-B[0],this.AC.CI.GL]));}},Bv6:function(H){var F;if(
!!this.Q){(F=this.Q,F[2].call(F[0],this.AC.Fz()));A.aat(this.Q,0);}A.ow([this,this.
A1k],this);},A1k:function(H){if(!this.AC){this.BuN(this);if(!this.AC)return;this.
HD.Cv=0;this.HD.B1=this.AC.AaZ;this.AC.Ap(true);}else{this.HD.Cv=this.AC.AaZ;this.
HD.B1=0;this.AC.Ap(false);}this.HD.Ap(true);this.AC.BiH(this.AaZ<(this.AC.AQc()*
this.AC.Aqa()));},BuN:function(H){var B;if(!this.Data)return;this.AaY=A._NewObject(
C.AL7,0);this.AC=A._NewObject(C.ALr,0);this.AC.BjM([this,this.Bh5]);this.AC.BjK([
this,this.Bv6]);this.AC.Ad5(this.GL);this.AC.Jp(this.Data.AA7());this.AC.IG.L(this.
AAm);if(this.AaZ>(this.AC.AQc()*this.AC.Aqa()))this.Avh(this.AC.AQc()*this.AC.Aqa(
));this.AC.Avh(this.AaZ);this.AC.H2.FS=[0,this.AaZ];this.AC.G(this.M);this.AC.Ap(
false);this.AC.GM(this.AxN);var Iq=this.Ib();if(!!Iq){this.AaY.G([0,0,(B=Iq.M)[2
]-B[0],B[3]-B[1]]);this.AaY.AsB=[this,this.A1k];this.AaY.J(this.AC,0);Iq.J(this.
AaY,0);Iq.QI(this.AaY);Iq.AKK(this.AaY);}},Avh:function(E){if(this.AaZ===E)return;
this.AaZ=E;if(this.ALz<0)this.ALz=E;},AyF:function(H){var B;if(!this.AC||!this.Ib(
))return;var AHl=this.Bvm(this);this.AC.G([].concat(AHl[0],this.AC.M.slice(1,4))
);this.AC.G(A.aaQ(this.AC.M,AHl[2]));this.AC.G(A.aaS(this.AC.M,AHl[3]));this.AC.
G([].concat(this.AC.M.slice(0,3),AHl[3]+this.HD.A4));if((this.AC.M[3]>this.Ib().
M[3])&&(this.AC.M[3]!==((B=this.Ib().M)[3]-B[1])))this.AC.G([].concat(this.AC.M.
slice(0,3),this.Ib().M[3]));if((this.AC.M[1]<this.Ib().M[1])&&(this.AC.M[3]!==((
B=this.Ib().M)[3]-B[1])))this.AC.G(A.aaS(this.AC.M,this.Ib().M[1]));},Bct:function(
H){this.JJ.R(this.Data.ABa(this.AxN));},AhX:function(H){if((!this.AC||!this.AaY)||
!this.Ib())return;if(!this.AC.A5C()){this.Ib().AAO(this.AaY);this.Ib().HH(this.AaY
);this.AC=null;}},Bua:function(H){var B;if(!!this.AC&&(((this.M[0]!==this.AC.M[0
])||(this.M[2]!==this.AC.M[2]))||(this.M[3]!==this.AC.M[1])))this.AC.G([this.M[0
],this.M[3],this.M[2],this.M[3]+((B=this.AC.M)[3]-B[1])]);},AQI:function(E){this.
AAZ=E;this.JJ.Aa(E);},A6O:function(E){if(this.AtY===E)return;this.AtY=E;},A6z:function(
E){this.A2V=E;this.Ac3.L(E);},Bio:function(E){if(this.AK$===E)return;this.AK$=E;
},Bis:function(E){if(this.ALe===E)return;this.ALe=E;},A6A:function(E){this.A2W=E;
this.JJ.L(E);},Bit:function(E){if(this.ALh===E)return;this.ALh=E;},Bip:function(
E){if(this.ALa===E)return;this.ALa=E;},Dd:function(H){var F;if(!!this.Q){this.AxN=(
F=this.Q,F[1].call(F[0]));if(!!this.AC)this.AC.GM(this.AxN);this.Bct(this);}},Bvm:
function(AnI){var B;var B9=AnI;var AHk=AnI.M;var Axl=GT;while(!!B9){var ZB=B9.HP;
if(!B9.Ac&&(B9!==AnI)){B9.Bg(AHk);return A.aam([0,0,(B=AnI.M)[2]-B[0],B[3]-B[1]]
,Axl);}if(!!ZB){if(((B=ZB.Qh)[0]>=B[2])||(B[1]>=B[3])){A.vv(B9,0);A.vv(ZB,0);}ZB.
Qh=A.vS(ZB.Qh,AHk);}if(!((B9.U&0x1)===0x1))return A.aam([0,0,(B=AnI.M)[2]-B[0],B[
3]-B[1]],Axl);if(B9===AnI)AHk=A.kz(A.aam(AHk,B9.M.slice(0,2)),B9.M);Axl=A.aak(Axl
,B9.M.slice(0,2));B9=B9.Ac;}return A.aam([0,0,(B=AnI.M)[2]-B[0],B[3]-B[1]],Axl);
},Biu:function(E){if(this.ALi===E)return;this.ALi=E;},BfK:function(H){this.Avh(this.
ALz);if(!!this.AC&&!!this.AC.CI)this.AC.CI.AaQ(0,this.AC.CI.AR);if(!!this.Data)this.
JJ.R(this.Data.ABa(this.AxN));},Bir:function(E){if(this.AAm===E)return;this.AAm=
E;if(!!this.AC)this.AC.IG.L(this.AAm);},Biq:function(E){this.BdZ=E;this.AaP.L(E);
},_Init:function(aArg){A.Core.O._Init.call(this,aArg);A.abh.NI._Init.call(this.Ac3={
I:this},0);A.abh.Text._Init.call(this.JJ={I:this},0);A.Core.Bh._Init.call(this.Bh={
I:this},0);A.abm.F_._Init.call(this.HD={I:this},0);A.abh.Ak._Init.call(this.AaP={
I:this},0);this.__proto__=C.Ix;this.G(Fn);this.Ac3.AV(0x3F);this.Ac3.G(Fn);this.
Ac3.L(0xFF252528);this.JJ.AV(0x3F);this.JJ.G(Fn);this.JJ.R(A.jm);this.Bh.AV(0x3F
);this.Bh.KB(GT);this.Bh.KA(Nd);this.Bh.DN(OL);this.Bh.D5(KH);this.HD.IF(1);this.
HD.FA(250);this.AaP.AV(0x3A);this.AaP.G(OM);this.AaP.Ct(1);this.J(this.Ac3,0);this.
J(this.JJ,0);this.J(this.Bh,0);this.J(this.AaP,0);this.Ac3.At(A.zW(A.aby.AFj));this.
JJ.Aa(A.zW(A.eV.Aw));this.Bh.K$=[this,this.A1k];this.HD.R5=[this,this.AhX];this.
HD.Agw=[this,this.AyF];this.AAZ=A.zW(A.eV.Aw);this.AtY=A.zW(A.eV.AB);this.AaP.At(
A.zW(A.abj.APB));this.Init(aArg);},_Done:function(){this.__proto__=A.Core.O;this.
Ac3._Done();this.JJ._Done();this.Bh._Done();this.HD._Done();this.AaP._Done();A.Core.
O._Done.call(this);},_ReInit:function(){A.Core.O._ReInit.call(this);this.Ac3._ReInit(
);this.JJ._ReInit();this.Bh._ReInit();this.HD._ReInit();this.AaP._ReInit();this.
C3();},_Mark:function(D){var B;A.Core.O._Mark.call(this,D);if((B=this.Data)&&(B.
_cycle!=D))B._Mark(B._cycle=D);if((B=this.AC)&&(B._cycle!=D))B._Mark(B._cycle=D);
if((B=this.AAZ)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.AtY)&&(B._cycle!=D
))B._Mark(B._cycle=D);if((B=this.AaY)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.
Q)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.Ac3)._cycle!=D)B._Mark(B.
_cycle=D);if((B=this.JJ)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Bh)._cycle!=D)
B._Mark(B._cycle=D);if((B=this.HD)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AaP).
_cycle!=D)B._Mark(B._cycle=D);},_className:"DropDown::DropDown"};C.AL7={AsB:null
,Bh:null,BcP:function(H){var B;(B=this.AsB)?B[1].call(B[0],this):null;},_Init:function(
aArg){A.Core.O._Init.call(this,aArg);A.Core.Bh._Init.call(this.Bh={I:this},0);this.
__proto__=C.AL7;this.G(Ne);this.Bh.AV(0x3F);this.Bh.KB(GT);this.Bh.KA(Nd);this.Bh.
DN(ON);this.Bh.D5(Ss);this.J(this.Bh,0);this.Bh.AuA=[this,this.BcP];this.Bh.BS=[
this,this.BcP];},_Done:function(){this.__proto__=A.Core.O;this.Bh._Done();A.Core.
O._Done.call(this);},_ReInit:function(){A.Core.O._ReInit.call(this);this.Bh._ReInit(
);},_Mark:function(D){var B;A.Core.O._Mark.call(this,D);if((B=this.AsB)&&((B=B[0
])._cycle!=D))B._Mark(B._cycle=D);if((B=this.Bh)._cycle!=D)B._Mark(B._cycle=D);}
,_className:"DropDown::EventCatcher"};
C._Init=function(){C.AAx.__proto__=A.Core.O;C.ALr.__proto__=A.Core.O;C.Ix.__proto__=
A.Core.O;C.AL7.__proto__=A.Core.O;};C._ReInit=function(){};C.DE=function(D){};return C;
})();

/* VitalControl demonstration application, © Urban GmbH & Co.KG 2023 */