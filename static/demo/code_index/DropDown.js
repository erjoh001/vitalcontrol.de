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
var B9="Text";var BC=[0,0,100,24];var EW=[0,0,100,1];var He=[0,0];var I7=[0,0,100
,120];var IH=[100,0];var OM=[100,120];var PQ=[0,120];var PR=[90,0,100,60];var CO=[
0,0,0,0];var E4=[0,0,240,40];var Ln=[240,0];var PT=[240,40];var Ko=[0,40];var NY=[
210,0,240,40];var PU=[0,0,240,50];var Mw=[240,50];var SL=[0,50];
C.Ama={ABX:function(aIndex){return A.jV;},ABS:function(){return 0;},_Init:function(
aArg){this.__proto__=C.Ama;A.h7++;},_Done:function(){this.__proto__=null;A.h7--;
},_ReInit:function(){},_Mark:function(D){var B;if((B=this.I)&&(B._cycle!=D))B._Mark(
B._cycle=D);},I:null,_cycle:0,_observers:null,_className:"DropDown::DDData"};C.ABh={
B3:null,Background:null,Text:null,Bb:null,V:B9,LK:0xFF000000,A3D:0xFF454545,A9D:
0,KJ:0,J3:0x12,I0:A.wg,Bg:function(aSize){var B;A.Core.O.Bg.call(this,aSize);this.
Text.H([0,0,(B=this.M)[2]-B[0],B[3]-B[1]]);this.Text.H([].concat(this.Text.M[0]+
this.I0[0],this.Text.M.slice(1,4)));this.Text.H(A.abN(this.Text.M,this.Text.M[2]-
this.I0[2]));this.Text.H(A.abP(this.Text.M,this.Text.M[1]+this.I0[1]));this.Text.
H([].concat(this.Text.M.slice(0,3),this.Text.M[3]-this.I0[3]));},Ai:function(Ae){
var B;A.Core.O.Ai.call(this,Ae);if(((Ae&0x20)===0x20)){this.Background.L(this.A3D
);this.Text.L(this.A9D);}else{this.Background.L(this.LK);this.Text.L(this.KJ);}}
,Bjh:function(E){this.V=E;this.Text.R(E);},Abw:function(E){this.LK=E;this.Background.
L(E);},S:function(E){this.B3=E;this.Text.S(E);},A2:function(E){this.J3=E;this.Text.
A2(E);},HG:function(E){if(A.aaY(this.I0,E))return;this.I0=E;},_Init:function(aArg
){A.Core.O._Init.call(this,aArg);A.acg.AI._Init.call(this.Background={I:this},0);
A.acg.Text._Init.call(this.Text={I:this},0);A.acg.AI._Init.call(this.Bb={I:this}
,0);this.__proto__=C.ABh;this.H(BC);this.Background.AW(0x3F);this.Background.H(BC
);this.Background.L(0xBE000000);this.Text.AW(0x3F);this.Text.H(BC);this.Text.R(B9
);this.Text.L(0xFFFFFFFF);this.Bb.AW(0x1D);this.Bb.H(EW);this.Bb.L(0x9EFFFFFF);this.
J(this.Background,0);this.J(this.Text,0);this.J(this.Bb,0);this.Text.S(A.aaL(A.fl.
Ak));this.B3=A.aaL(A.fl.Ah);},_Done:function(){this.__proto__=A.Core.O;this.Background.
_Done();this.Text._Done();this.Bb._Done();A.Core.O._Done.call(this);},_ReInit:function(
){A.Core.O._ReInit.call(this);this.Background._ReInit();this.Text._ReInit();this.
Bb._ReInit();this.Text.S(A.aaL(A.fl.Ak));this.S(A.aaL(A.fl.Ah));},_Mark:function(
D){var B;A.Core.O._Mark.call(this,D);if((B=this.B3)&&(B._cycle!=D))B._Mark(B._cycle=
D);if((B=this.Background)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Text)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.Bb)._cycle!=D)B._Mark(B._cycle=D);},_className:
"DropDown::DDItem"};C.AMb={ADg:null,A7B:null,CG:null,H0:null,Bi:null,IE:null,Gd:
0,AV:0,GP:0,Abc:0,ABy:false,A1t:function(G){if(this.Bi.Jg>100){var FU=this.CG.A43(
this.Bi.HT);if(FU<0)return;this.CG.GS(FU);this.CG.Hx(FU,true,null,null);}},BxN:function(
G){var B;if(!this.Bi.Nw){var FU=this.CG.A43(this.Bi.HT);if(FU<0)return;this.CG.GS(
FU);this.CG.Hx(FU,true,null,null);(B=this.ADg)?B[1].call(B[0],this):null;}},Azw:
function(G){this.Bi.Ar(true);},BkJ:function(E){if(A.aa0(this.ADg,E))return;this.
ADg=E;},GS:function(E){this.Gd=E;this.CG.GS(E);},Fy:function(){return this.CG.Gd;
},Bxo:function(G){if(this.ABy){var GZ=A.abe(this.Bi.HT,this.Bi.NG);if((GZ[1]>8)||(
GZ[1]<-8)){this.Ib().AMk(this.H0,He);this.Bi.Ar(false);}}},Jm:function(E){this.AV=
E;this.CG.Jm(E);},BkL:function(E){this.A7B=E;this.CG.G$=E;},Aer:function(E){this.
GP=E;this.CG.Aer(E);},AQ3:function(){return this.CG.GP;},BjH:function(E){if(this.
ABy===E)return;this.ABy=E;},AqN:function(){return this.CG.AV;},AvZ:function(E){if(
this.Abc===E)return;this.Abc=E;},BxU:function(G){},AcY:function(G){var B;var UZ=
this.CG.M;var AsW=this.CG.Ap$(0,this.CG.AV-1);var y1=(((UZ[1]-AsW[1])*(UZ[3]-UZ[
1]))/(AsW[3]-AsW[1]))|0;var y2=(((UZ[3]-AsW[1])*(UZ[3]-UZ[1]))/(AsW[3]-AsW[1]))|
0;if(y1<0)y1=0;if(y2>(UZ[3]-UZ[1]))y2=UZ[3]-UZ[1];this.IE.H([UZ[2]-10,y1+UZ[1],UZ[
2],y2+UZ[1]]);this.IE.Y(this.ABy);},_Init:function(aArg){A.Core.O._Init.call(this
,aArg);A.Core.CG._Init.call(this.CG={I:this},0);A.Core.H0._Init.call(this.H0={I:
this},0);A.Core.Bi._Init.call(this.Bi={I:this},0);A.acg.AI._Init.call(this.IE={I:
this},0);this.__proto__=C.AMb;this.H(I7);this.CG.AW(0x3F);this.CG.H(I7);this.CG.
GS(0);this.CG.Jm(5);this.CG.NN(C.ABh);this.H0.AW(0x3F);this.H0.H(I7);this.H0.AFu=
false;this.H0.A8_=false;this.Bi.AW(0x3F);this.Bi.Ke(He);this.Bi.Kd(IH);this.Bi.DK(
OM);this.Bi.DY(PQ);this.IE.H(PR);this.IE.L(0xFF000000);this.J(this.CG,0);this.J(
this.H0,0);this.J(this.Bi,0);this.J(this.IE,0);this.CG.Ei=[this,this.AcY];this.CG.
Av$(this.H0);this.H0.AER=[this,this.BxU];this.H0.YR=[this,this.Azw];this.Bi.AQM=[
this,this.Bxo];this.Bi.DS=[this,this.A1t];this.Bi.Lg=[this,this.BxN];},_Done:function(
){this.__proto__=A.Core.O;this.CG._Done();this.H0._Done();this.Bi._Done();this.IE.
_Done();A.Core.O._Done.call(this);},_ReInit:function(){A.Core.O._ReInit.call(this
);this.CG._ReInit();this.H0._ReInit();this.Bi._ReInit();this.IE._ReInit();},_Mark:
function(D){var B;A.Core.O._Mark.call(this,D);if((B=this.ADg)&&((B=B[0])._cycle!=
D))B._Mark(B._cycle=D);if((B=this.A7B)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);
if((B=this.CG)._cycle!=D)B._Mark(B._cycle=D);if((B=this.H0)._cycle!=D)B._Mark(B.
_cycle=D);if((B=this.Bi)._cycle!=D)B._Mark(B._cycle=D);if((B=this.IE)._cycle!=D)
B._Mark(B._cycle=D);},_className:"DropDown::DDItemList"};C.Iw={Data:null,AD:null
,ABJ:null,AuI:null,Abb:null,Q:null,Adr:null,Jj:null,Bi:null,HC:null,Aa4:null,Abc:
100,GP:20,A$9:A.wg,A3Z:0xFF252528,ALV:0xFF252528,AL0:0xFFF1EEEA,A30:0xFFFAFFFE,AL3:
0xFFF8FDFF,ALW:0xFF0008C1,Ayu:0,AL4:0xFF7EFEFF,AMj:-1,AA9:0xFF000000,Bfb:0xFFFAFFFE
,CT:function(){this.BgU(this);},Init:function(aArg){this.A7P(this.A3Z);this.ADV(
this.ABJ);this.A7Q(this.A30);},J7:function(CU,aClip,aOffset,Ce,aBlend){A.Core.O.
J7.call(this,CU,aClip,aOffset,Ce,aBlend);if(!A.aaY(this.A$9,this.M)){this.A$9=this.
M;A.pe([this,this.Bvd],this);}},Bg:function(aSize){var B;A.Core.O.Bg.call(this,aSize
);this.Jj.H([0,0,(B=this.M)[2]-B[0],B[3]-B[1]]);this.Jj.H([].concat(this.Jj.M[0]
,this.Jj.M.slice(1,4)));this.Jj.H(A.abN(this.Jj.M,this.Jj.M[2]-((B=this.Aa4.M)[2
]-B[0])));this.Jj.H(A.abP(this.Jj.M,this.Jj.M[1]));this.Jj.H([].concat(this.Jj.M.
slice(0,3),this.Jj.M[3]));},Au:function(E){if(A.aaZ(this.Q,E))return;if(!!this.Q
)A.z$([this,this.Dc],this.Q,0);this.Q=E;if(!!E)A.zX([this,this.Dc],E,0);if(!!E)A.
pe([this,this.Dc],this);},Bjz:function(E){if(this.Data===E)return;this.Data=E;A.
pe([this,this.BdM],this);},Bi3:function(G){var B;if(!this.AD)return;var FU=this.
AD.CG.GN;var Z2=(C.ABh.isPrototypeOf(B=this.AD.CG.Cd)?B:null);if(!!Z2){if(this.Data.
ABS()>FU){Z2.Bjh(this.Data.ABX(FU));Z2.Abw(this.ALV);Z2.A3D=this.ALW;Z2.A9D=this.
AL4;Z2.S(this.AuI);Z2.KJ=this.AL3;Z2.A2(0x12);Z2.Bb.L(this.AL0);Z2.HG(CO);}Z2.H(
A.abK(Z2.M,[(B=this.AD.CG.M)[2]-B[0],this.AD.CG.GP]));}},Bw9:function(G){var F;if(
!!this.Q){(F=this.Q,F[2].call(F[0],this.AD.Fy()));A.abo(this.Q,0);}A.pe([this,this.
A2l],this);},A2l:function(G){if(!this.AD){this.BvP(this);if(!this.AD)return;this.
HC.Cq=0;this.HC.BY=this.AD.Abc;this.AD.Ar(true);}else{this.HC.Cq=this.AD.Abc;this.
HC.BY=0;this.AD.Ar(false);}this.HC.Ar(true);this.AD.BjH(this.Abc<(this.AD.AQ3()*
this.AD.AqN()));},BvP:function(G){var B;if(!this.Data)return;this.Abb=A._NewObject(
C.AMS,0);this.AD=A._NewObject(C.AMb,0);this.AD.BkL([this,this.Bi3]);this.AD.BkJ([
this,this.Bw9]);this.AD.Aer(this.GP);this.AD.Jm(this.Data.ABS());this.AD.IE.L(this.
AA9);if(this.Abc>(this.AD.AQ3()*this.AD.AqN()))this.AvZ(this.AD.AQ3()*this.AD.AqN(
));this.AD.AvZ(this.Abc);this.AD.H0.FO=[0,this.Abc];this.AD.H(this.M);this.AD.Ar(
false);this.AD.GS(this.Ayu);var Ir=this.Ib();if(!!Ir){this.Abb.H([0,0,(B=Ir.M)[2
]-B[0],B[3]-B[1]]);this.Abb.Atj=[this,this.A2l];this.Abb.J(this.AD,0);Ir.J(this.
Abb,0);Ir.Y5(this.Abb);Ir.ALu(this.Abb);}},AvZ:function(E){if(this.Abc===E)return;
this.Abc=E;if(this.AMj<0)this.AMj=E;},Azt:function(G){var B;if(!this.AD||!this.Ib(
))return;var AHZ=this.Bwo(this);this.AD.H([].concat(AHZ[0],this.AD.M.slice(1,4))
);this.AD.H(A.abN(this.AD.M,AHZ[2]));this.AD.H(A.abP(this.AD.M,AHZ[3]));this.AD.
H([].concat(this.AD.M.slice(0,3),AHZ[3]+this.HC.A4));if((this.AD.M[3]>this.Ib().
M[3])&&(this.AD.M[3]!==((B=this.Ib().M)[3]-B[1])))this.AD.H([].concat(this.AD.M.
slice(0,3),this.Ib().M[3]));if((this.AD.M[1]<this.Ib().M[1])&&(this.AD.M[3]!==((
B=this.Ib().M)[3]-B[1])))this.AD.H(A.abP(this.AD.M,this.Ib().M[1]));},BdM:function(
G){this.Jj.R(this.Data.ABX(this.Ayu));},Aif:function(G){if((!this.AD||!this.Abb)||
!this.Ib())return;if(!this.AD.A6R()){this.Ib().ABz(this.Abb);this.Ib().HH(this.Abb
);this.AD=null;}},Bvd:function(G){var B;if(!!this.AD&&(((this.M[0]!==this.AD.M[0
])||(this.M[2]!==this.AD.M[2]))||(this.M[3]!==this.AD.M[1])))this.AD.H([this.M[0
],this.M[3],this.M[2],this.M[3]+((B=this.AD.M)[3]-B[1])]);},ADV:function(E){this.
ABJ=E;this.Jj.S(E);},ARy:function(E){if(this.AuI===E)return;this.AuI=E;},A7P:function(
E){this.A3Z=E;this.Adr.L(E);},Bjm:function(E){if(this.ALV===E)return;this.ALV=E;
},Bjs:function(E){if(this.AL0===E)return;this.AL0=E;},A7Q:function(E){this.A30=E;
this.Jj.L(E);},Bjt:function(E){if(this.AL3===E)return;this.AL3=E;},Bjn:function(
E){if(this.ALW===E)return;this.ALW=E;},Dc:function(G){var F;if(!!this.Q){this.Ayu=(
F=this.Q,F[1].call(F[0]));if(!!this.AD)this.AD.GS(this.Ayu);this.BdM(this);}},Bwo:
function(Aob){var B;var BS=Aob;var AHY=Aob.M;var Ax2=He;while(!!BS){var ZR=BS.Fq;
if(!BS.Ab&&(BS!==Aob)){BS.Bd(AHY);return A.abh([0,0,(B=Aob.M)[2]-B[0],B[3]-B[1]]
,Ax2);}if(!!ZR){if(((B=ZR.Qv)[0]>=B[2])||(B[1]>=B[3])){A.we(BS,0);A.we(ZR,0);}ZR.
Qv=A.wC(ZR.Qv,AHY);}if(!((BS.T&0x1)===0x1))return A.abh([0,0,(B=Aob.M)[2]-B[0],B[
3]-B[1]],Ax2);if(BS===Aob)AHY=A.lb(A.abh(AHY,BS.M.slice(0,2)),BS.M);Ax2=A.abf(Ax2
,BS.M.slice(0,2));BS=BS.Ab;}return A.abh([0,0,(B=Aob.M)[2]-B[0],B[3]-B[1]],Ax2);
},Bju:function(E){if(this.AL4===E)return;this.AL4=E;},BgU:function(G){this.AvZ(this.
AMj);if(!!this.AD&&!!this.AD.CG)this.AD.CG.Aa5(0,this.AD.CG.AV);if(!!this.Data)this.
Jj.R(this.Data.ABX(this.Ayu));},Bjr:function(E){if(this.AA9===E)return;this.AA9=
E;if(!!this.AD)this.AD.IE.L(this.AA9);},Bjq:function(E){this.Bfb=E;this.Aa4.L(E);
},_Init:function(aArg){A.Core.O._Init.call(this,aArg);A.acg.NF._Init.call(this.Adr={
I:this},0);A.acg.Text._Init.call(this.Jj={I:this},0);A.Core.Bi._Init.call(this.Bi={
I:this},0);A.acl.FZ._Init.call(this.HC={I:this},0);A.acg.Am._Init.call(this.Aa4={
I:this},0);this.__proto__=C.Iw;this.H(E4);this.Adr.AW(0x3F);this.Adr.H(E4);this.
Adr.L(0xFF252528);this.Jj.AW(0x3F);this.Jj.H(E4);this.Jj.R(A.jV);this.Bi.AW(0x3F
);this.Bi.Ke(He);this.Bi.Kd(Ln);this.Bi.DK(PT);this.Bi.DY(Ko);this.HC.HF(1);this.
HC.Ff(250);this.Aa4.AW(0x3A);this.Aa4.H(NY);this.Aa4.Ct(1);this.J(this.Adr,0);this.
J(this.Jj,0);this.J(this.Bi,0);this.J(this.Aa4,0);this.Adr.Ax(A.aaL(A.acw.AF6));
this.Jj.S(A.aaL(A.fl.Ah));this.Bi.Lg=[this,this.A2l];this.HC.Se=[this,this.Aif];
this.HC.AgK=[this,this.Azt];this.ABJ=A.aaL(A.fl.Ah);this.AuI=A.aaL(A.fl.Ak);this.
Aa4.Ax(A.aaL(A.aci.AQn));this.Init(aArg);},_Done:function(){this.__proto__=A.Core.
O;this.Adr._Done();this.Jj._Done();this.Bi._Done();this.HC._Done();this.Aa4._Done(
);A.Core.O._Done.call(this);},_ReInit:function(){A.Core.O._ReInit.call(this);this.
Adr._ReInit();this.Jj._ReInit();this.Bi._ReInit();this.HC._ReInit();this.Aa4._ReInit(
);this.Jj.S(A.aaL(A.fl.Ah));this.ADV(A.aaL(A.fl.Ah));this.ARy(A.aaL(A.fl.Ak));this.
CT();},_Mark:function(D){var B;A.Core.O._Mark.call(this,D);if((B=this.Data)&&(B.
_cycle!=D))B._Mark(B._cycle=D);if((B=this.AD)&&(B._cycle!=D))B._Mark(B._cycle=D);
if((B=this.ABJ)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.AuI)&&(B._cycle!=D
))B._Mark(B._cycle=D);if((B=this.Abb)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.
Q)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.Adr)._cycle!=D)B._Mark(B.
_cycle=D);if((B=this.Jj)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Bi)._cycle!=D)
B._Mark(B._cycle=D);if((B=this.HC)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Aa4).
_cycle!=D)B._Mark(B._cycle=D);},_className:"DropDown::DropDown"};C.AMS={Atj:null
,Bi:null,Bd8:function(G){var B;(B=this.Atj)?B[1].call(B[0],this):null;},_Init:function(
aArg){A.Core.O._Init.call(this,aArg);A.Core.Bi._Init.call(this.Bi={I:this},0);this.
__proto__=C.AMS;this.H(PU);this.Bi.AW(0x3F);this.Bi.Ke(He);this.Bi.Kd(Ln);this.Bi.
DK(Mw);this.Bi.DY(SL);this.J(this.Bi,0);this.Bi.Avk=[this,this.Bd8];this.Bi.BK=[
this,this.Bd8];},_Done:function(){this.__proto__=A.Core.O;this.Bi._Done();A.Core.
O._Done.call(this);},_ReInit:function(){A.Core.O._ReInit.call(this);this.Bi._ReInit(
);},_Mark:function(D){var B;A.Core.O._Mark.call(this,D);if((B=this.Atj)&&((B=B[0
])._cycle!=D))B._Mark(B._cycle=D);if((B=this.Bi)._cycle!=D)B._Mark(B._cycle=D);}
,_className:"DropDown::EventCatcher"};
C._Init=function(){C.ABh.__proto__=A.Core.O;C.AMb.__proto__=A.Core.O;C.Iw.__proto__=
A.Core.O;C.AMS.__proto__=A.Core.O;};C._ReInit=function(){};C.DB=function(D){};return C;
})();

/* VitalControl demonstration application, © Urban GmbH & Co.KG 2023 */