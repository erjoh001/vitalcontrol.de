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
var B9="Text";var BC=[0,0,100,24];var EU=[0,0,100,1];var Hc=[0,0];var I7=[0,0,100
,120];var II=[100,0];var OH=[100,120];var PM=[0,120];var PN=[90,0,100,60];var CI=[
0,0,0,0];var E2=[0,0,240,40];var Li=[240,0];var PO=[240,40];var Km=[0,40];var NV=[
210,0,240,40];var PP=[0,0,240,50];var Mt=[240,50];var SF=[0,50];
C.AlZ={ABv:function(aIndex){return A.jV;},ABq:function(){return 0;},_Init:function(
aArg){this.__proto__=C.AlZ;A.h7++;},_Done:function(){this.__proto__=null;A.h7--;
},_ReInit:function(){},_Mark:function(D){var B;if((B=this.I)&&(B._cycle!=D))B._Mark(
B._cycle=D);},I:null,_cycle:0,_observers:null,_className:"DropDown::DDData"};C.AAS={
B3:null,Background:null,Text:null,Bb:null,V:B9,LD:0xFF000000,A2Z:0xFF454545,A8Y:
0,KG:0,J1:0x12,I0:A.wg,Bg:function(aSize){var B;A.Core.O.Bg.call(this,aSize);this.
Text.G([0,0,(B=this.M)[2]-B[0],B[3]-B[1]]);this.Text.G([].concat(this.Text.M[0]+
this.I0[0],this.Text.M.slice(1,4)));this.Text.G(A.abN(this.Text.M,this.Text.M[2]-
this.I0[2]));this.Text.G(A.abP(this.Text.M,this.Text.M[1]+this.I0[1]));this.Text.
G([].concat(this.Text.M.slice(0,3),this.Text.M[3]-this.I0[3]));},Ai:function(Ae){
var B;A.Core.O.Ai.call(this,Ae);if(((Ae&0x20)===0x20)){this.Background.L(this.A2Z
);this.Text.L(this.A8Y);}else{this.Background.L(this.LD);this.Text.L(this.KG);}}
,BiB:function(E){this.V=E;this.Text.Q(E);},Abo:function(E){this.LD=E;this.Background.
L(E);},S:function(E){this.B3=E;this.Text.S(E);},A2:function(E){this.J1=E;this.Text.
A2(E);},HF:function(E){if(A.aaY(this.I0,E))return;this.I0=E;},_Init:function(aArg
){A.Core.O._Init.call(this,aArg);A.acg.AI._Init.call(this.Background={I:this},0);
A.acg.Text._Init.call(this.Text={I:this},0);A.acg.AI._Init.call(this.Bb={I:this}
,0);this.__proto__=C.AAS;this.G(BC);this.Background.AV(0x3F);this.Background.G(BC
);this.Background.L(0xBE000000);this.Text.AV(0x3F);this.Text.G(BC);this.Text.Q(B9
);this.Text.L(0xFFFFFFFF);this.Bb.AV(0x1D);this.Bb.G(EU);this.Bb.L(0x9EFFFFFF);this.
J(this.Background,0);this.J(this.Text,0);this.J(this.Bb,0);this.Text.S(A.aaL(A.fl.
Ak));this.B3=A.aaL(A.fl.Ah);},_Done:function(){this.__proto__=A.Core.O;this.Background.
_Done();this.Text._Done();this.Bb._Done();A.Core.O._Done.call(this);},_ReInit:function(
){A.Core.O._ReInit.call(this);this.Background._ReInit();this.Text._ReInit();this.
Bb._ReInit();this.Text.S(A.aaL(A.fl.Ak));this.S(A.aaL(A.fl.Ah));},_Mark:function(
D){var B;A.Core.O._Mark.call(this,D);if((B=this.B3)&&(B._cycle!=D))B._Mark(B._cycle=
D);if((B=this.Background)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Text)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.Bb)._cycle!=D)B._Mark(B._cycle=D);},_className:
"DropDown::DDItem"};C.ALF={ACQ:null,A6W:null,CF:null,HZ:null,Bi:null,IE:null,Gb:
0,AR:0,GP:0,Aa7:0,AA9:false,A0S:function(H){if(this.Bi.Jg>100){var FS=this.CF.A4o(
this.Bi.HS);if(FS<0)return;this.CF.GQ(FS);this.CF.Hx(FS,true,null,null);}},BwX:function(
H){var B;if(!this.Bi.Nt){var FS=this.CF.A4o(this.Bi.HS);if(FS<0)return;this.CF.GQ(
FS);this.CF.Hx(FS,true,null,null);(B=this.ACQ)?B[1].call(B[0],this):null;}},Ay9:
function(H){this.Bi.Ar(true);},Bj1:function(E){if(A.aa0(this.ACQ,E))return;this.
ACQ=E;},GQ:function(E){this.Gb=E;this.CF.GQ(E);},Fx:function(){return this.CF.Gb;
},Bwy:function(H){if(this.AA9){var GY=A.abe(this.Bi.HS,this.Bi.NB);if((GY[1]>8)||(
GY[1]<-8)){this.Ia().ALO(this.HZ,Hc);this.Bi.Ar(false);}}},Jm:function(E){this.AR=
E;this.CF.Jm(E);},Bj3:function(E){this.A6W=E;this.CF.G8=E;},Aeg:function(E){this.
GP=E;this.CF.Aeg(E);},AQt:function(){return this.CF.GP;},BiZ:function(E){if(this.
AA9===E)return;this.AA9=E;},Aqy:function(){return this.CF.AR;},AvC:function(E){if(
this.Aa7===E)return;this.Aa7=E;},Bw4:function(H){},AcQ:function(H){var B;var UQ=
this.CF.M;var Asx=this.CF.ApW(0,this.CF.AR-1);var y1=(((UQ[1]-Asx[1])*(UQ[3]-UQ[
1]))/(Asx[3]-Asx[1]))|0;var y2=(((UQ[3]-Asx[1])*(UQ[3]-UQ[1]))/(Asx[3]-Asx[1]))|
0;if(y1<0)y1=0;if(y2>(UQ[3]-UQ[1]))y2=UQ[3]-UQ[1];this.IE.G([UQ[2]-10,y1+UQ[1],UQ[
2],y2+UQ[1]]);this.IE.Y(this.AA9);},_Init:function(aArg){A.Core.O._Init.call(this
,aArg);A.Core.CF._Init.call(this.CF={I:this},0);A.Core.HZ._Init.call(this.HZ={I:
this},0);A.Core.Bi._Init.call(this.Bi={I:this},0);A.acg.AI._Init.call(this.IE={I:
this},0);this.__proto__=C.ALF;this.G(I7);this.CF.AV(0x3F);this.CF.G(I7);this.CF.
GQ(0);this.CF.Jm(5);this.CF.NI(C.AAS);this.HZ.AV(0x3F);this.HZ.G(I7);this.HZ.AE3=
false;this.HZ.A8t=false;this.Bi.AV(0x3F);this.Bi.Kc(Hc);this.Bi.Kb(II);this.Bi.DJ(
OH);this.Bi.DX(PM);this.IE.G(PN);this.IE.L(0xFF000000);this.J(this.CF,0);this.J(
this.HZ,0);this.J(this.Bi,0);this.J(this.IE,0);this.CF.Eh=[this,this.AcQ];this.CF.
AvN(this.HZ);this.HZ.AEo=[this,this.Bw4];this.HZ.YK=[this,this.Ay9];this.Bi.AQd=[
this,this.Bwy];this.Bi.DR=[this,this.A0S];this.Bi.Lb=[this,this.BwX];},_Done:function(
){this.__proto__=A.Core.O;this.CF._Done();this.HZ._Done();this.Bi._Done();this.IE.
_Done();A.Core.O._Done.call(this);},_ReInit:function(){A.Core.O._ReInit.call(this
);this.CF._ReInit();this.HZ._ReInit();this.Bi._ReInit();this.IE._ReInit();},_Mark:
function(D){var B;A.Core.O._Mark.call(this,D);if((B=this.ACQ)&&((B=B[0])._cycle!=
D))B._Mark(B._cycle=D);if((B=this.A6W)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);
if((B=this.CF)._cycle!=D)B._Mark(B._cycle=D);if((B=this.HZ)._cycle!=D)B._Mark(B.
_cycle=D);if((B=this.Bi)._cycle!=D)B._Mark(B._cycle=D);if((B=this.IE)._cycle!=D)
B._Mark(B._cycle=D);},_className:"DropDown::DDItemList"};C.Iv={Data:null,AD:null
,ABi:null,Auk:null,Aa6:null,R:null,Adj:null,Jj:null,Bi:null,HC:null,AaX:null,Aa7:
100,GP:20,A$t:A.wg,A3j:0xFF252528,ALn:0xFF252528,ALs:0xFFF1EEEA,A3k:0xFFFAFFFE,ALv:
0xFFF8FDFF,ALo:0xFF0008C1,Ax_:0,ALw:0xFF7EFEFF,ALN:-1,AAI:0xFF000000,Bev:0xFFFAFFFE
,C1:function(){this.Bgc(this);},Init:function(aArg){this.A6_(this.A3j);this.ADs(
this.ABi);this.A6$(this.A3k);},J5:function(CT,aClip,aOffset,Cb,aBlend){A.Core.O.
J5.call(this,CT,aClip,aOffset,Cb,aBlend);if(!A.aaY(this.A$t,this.M)){this.A$t=this.
M;A.pe([this,this.Bun],this);}},Bg:function(aSize){var B;A.Core.O.Bg.call(this,aSize
);this.Jj.G([0,0,(B=this.M)[2]-B[0],B[3]-B[1]]);this.Jj.G([].concat(this.Jj.M[0]
,this.Jj.M.slice(1,4)));this.Jj.G(A.abN(this.Jj.M,this.Jj.M[2]-((B=this.AaX.M)[2
]-B[0])));this.Jj.G(A.abP(this.Jj.M,this.Jj.M[1]));this.Jj.G([].concat(this.Jj.M.
slice(0,3),this.Jj.M[3]));},Ax:function(E){if(A.aaZ(this.R,E))return;if(!!this.R
)A.z$([this,this.Db],this.R,0);this.R=E;if(!!E)A.zX([this,this.Db],E,0);if(!!E)A.
pe([this,this.Db],this);},BiR:function(E){if(this.Data===E)return;this.Data=E;A.
pe([this,this.Bc8],this);},Bil:function(H){var B;if(!this.AD)return;var FS=this.
AD.CF.GN;var ZV=(C.AAS.isPrototypeOf(B=this.AD.CF.Ca)?B:null);if(!!ZV){if(this.Data.
ABq()>FS){ZV.BiB(this.Data.ABv(FS));ZV.Abo(this.ALn);ZV.A2Z=this.ALo;ZV.A8Y=this.
ALw;ZV.S(this.Auk);ZV.KG=this.ALv;ZV.A2(0x12);ZV.Bb.L(this.ALs);ZV.HF(CI);}ZV.G(
A.abK(ZV.M,[(B=this.AD.CF.M)[2]-B[0],this.AD.CF.GP]));}},Bwh:function(H){var F;if(
!!this.R){(F=this.R,F[2].call(F[0],this.AD.Fx()));A.abo(this.R,0);}A.pe([this,this.
A1F],this);},A1F:function(H){if(!this.AD){this.Bu0(this);if(!this.AD)return;this.
HC.Ct=0;this.HC.B1=this.AD.Aa7;this.AD.Ar(true);}else{this.HC.Ct=this.AD.Aa7;this.
HC.B1=0;this.AD.Ar(false);}this.HC.Ar(true);this.AD.BiZ(this.Aa7<(this.AD.AQt()*
this.AD.Aqy()));},Bu0:function(H){var B;if(!this.Data)return;this.Aa6=A._NewObject(
C.AMk,0);this.AD=A._NewObject(C.ALF,0);this.AD.Bj3([this,this.Bil]);this.AD.Bj1([
this,this.Bwh]);this.AD.Aeg(this.GP);this.AD.Jm(this.Data.ABq());this.AD.IE.L(this.
AAI);if(this.Aa7>(this.AD.AQt()*this.AD.Aqy()))this.AvC(this.AD.AQt()*this.AD.Aqy(
));this.AD.AvC(this.Aa7);this.AD.HZ.FN=[0,this.Aa7];this.AD.G(this.M);this.AD.Ar(
false);this.AD.GQ(this.Ax_);var Iq=this.Ia();if(!!Iq){this.Aa6.G([0,0,(B=Iq.M)[2
]-B[0],B[3]-B[1]]);this.Aa6.AsW=[this,this.A1F];this.Aa6.J(this.AD,0);Iq.J(this.
Aa6,0);Iq.Y0(this.Aa6);Iq.AKY(this.Aa6);}},AvC:function(E){if(this.Aa7===E)return;
this.Aa7=E;if(this.ALN<0)this.ALN=E;},Ay6:function(H){var B;if(!this.AD||!this.Ia(
))return;var AHy=this.Bvz(this);this.AD.G([].concat(AHy[0],this.AD.M.slice(1,4))
);this.AD.G(A.abN(this.AD.M,AHy[2]));this.AD.G(A.abP(this.AD.M,AHy[3]));this.AD.
G([].concat(this.AD.M.slice(0,3),AHy[3]+this.HC.A4));if((this.AD.M[3]>this.Ia().
M[3])&&(this.AD.M[3]!==((B=this.Ia().M)[3]-B[1])))this.AD.G([].concat(this.AD.M.
slice(0,3),this.Ia().M[3]));if((this.AD.M[1]<this.Ia().M[1])&&(this.AD.M[3]!==((
B=this.Ia().M)[3]-B[1])))this.AD.G(A.abP(this.AD.M,this.Ia().M[1]));},Bc8:function(
H){this.Jj.Q(this.Data.ABv(this.Ax_));},Ah8:function(H){if((!this.AD||!this.Aa6)||
!this.Ia())return;if(!this.AD.A6b()){this.Ia().AA_(this.Aa6);this.Ia().HG(this.Aa6
);this.AD=null;}},Bun:function(H){var B;if(!!this.AD&&(((this.M[0]!==this.AD.M[0
])||(this.M[2]!==this.AD.M[2]))||(this.M[3]!==this.AD.M[1])))this.AD.G([this.M[0
],this.M[3],this.M[2],this.M[3]+((B=this.AD.M)[3]-B[1])]);},ADs:function(E){this.
ABi=E;this.Jj.S(E);},AQZ:function(E){if(this.Auk===E)return;this.Auk=E;},A6_:function(
E){this.A3j=E;this.Adj.L(E);},BiG:function(E){if(this.ALn===E)return;this.ALn=E;
},BiK:function(E){if(this.ALs===E)return;this.ALs=E;},A6$:function(E){this.A3k=E;
this.Jj.L(E);},BiL:function(E){if(this.ALv===E)return;this.ALv=E;},BiH:function(
E){if(this.ALo===E)return;this.ALo=E;},Db:function(H){var F;if(!!this.R){this.Ax_=(
F=this.R,F[1].call(F[0]));if(!!this.AD)this.AD.GQ(this.Ax_);this.Bc8(this);}},Bvz:
function(An2){var B;var BS=An2;var AHx=An2.M;var AxH=Hc;while(!!BS){var ZL=BS.Fp;
if(!BS.Ab&&(BS!==An2)){BS.Bd(AHx);return A.abh([0,0,(B=An2.M)[2]-B[0],B[3]-B[1]]
,AxH);}if(!!ZL){if(((B=ZL.Qq)[0]>=B[2])||(B[1]>=B[3])){A.we(BS,0);A.we(ZL,0);}ZL.
Qq=A.wC(ZL.Qq,AHx);}if(!((BS.T&0x1)===0x1))return A.abh([0,0,(B=An2.M)[2]-B[0],B[
3]-B[1]],AxH);if(BS===An2)AHx=A.lb(A.abh(AHx,BS.M.slice(0,2)),BS.M);AxH=A.abf(AxH
,BS.M.slice(0,2));BS=BS.Ab;}return A.abh([0,0,(B=An2.M)[2]-B[0],B[3]-B[1]],AxH);
},BiM:function(E){if(this.ALw===E)return;this.ALw=E;},Bgc:function(H){this.AvC(this.
ALN);if(!!this.AD&&!!this.AD.CF)this.AD.CF.AaY(0,this.AD.CF.AR);if(!!this.Data)this.
Jj.Q(this.Data.ABv(this.Ax_));},BiJ:function(E){if(this.AAI===E)return;this.AAI=
E;if(!!this.AD)this.AD.IE.L(this.AAI);},BiI:function(E){this.Bev=E;this.AaX.L(E);
},_Init:function(aArg){A.Core.O._Init.call(this,aArg);A.acg.NA._Init.call(this.Adj={
I:this},0);A.acg.Text._Init.call(this.Jj={I:this},0);A.Core.Bi._Init.call(this.Bi={
I:this},0);A.acl.FX._Init.call(this.HC={I:this},0);A.acg.Am._Init.call(this.AaX={
I:this},0);this.__proto__=C.Iv;this.G(E2);this.Adj.AV(0x3F);this.Adj.G(E2);this.
Adj.L(0xFF252528);this.Jj.AV(0x3F);this.Jj.G(E2);this.Jj.Q(A.jV);this.Bi.AV(0x3F
);this.Bi.Kc(Hc);this.Bi.Kb(Li);this.Bi.DJ(PO);this.Bi.DX(Km);this.HC.ID(1);this.
HC.Fy(250);this.AaX.AV(0x3A);this.AaX.G(NV);this.AaX.Cr(1);this.J(this.Adj,0);this.
J(this.Jj,0);this.J(this.Bi,0);this.J(this.AaX,0);this.Adj.Aw(A.aaL(A.acw.AFE));
this.Jj.S(A.aaL(A.fl.Ah));this.Bi.Lb=[this,this.A1F];this.HC.Sa=[this,this.Ah8];
this.HC.Agz=[this,this.Ay6];this.ABi=A.aaL(A.fl.Ah);this.Auk=A.aaL(A.fl.Ak);this.
AaX.Aw(A.aaL(A.aci.APR));this.Init(aArg);},_Done:function(){this.__proto__=A.Core.
O;this.Adj._Done();this.Jj._Done();this.Bi._Done();this.HC._Done();this.AaX._Done(
);A.Core.O._Done.call(this);},_ReInit:function(){A.Core.O._ReInit.call(this);this.
Adj._ReInit();this.Jj._ReInit();this.Bi._ReInit();this.HC._ReInit();this.AaX._ReInit(
);this.Jj.S(A.aaL(A.fl.Ah));this.ADs(A.aaL(A.fl.Ah));this.AQZ(A.aaL(A.fl.Ak));this.
C1();},_Mark:function(D){var B;A.Core.O._Mark.call(this,D);if((B=this.Data)&&(B.
_cycle!=D))B._Mark(B._cycle=D);if((B=this.AD)&&(B._cycle!=D))B._Mark(B._cycle=D);
if((B=this.ABi)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Auk)&&(B._cycle!=D
))B._Mark(B._cycle=D);if((B=this.Aa6)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.
R)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.Adj)._cycle!=D)B._Mark(B.
_cycle=D);if((B=this.Jj)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Bi)._cycle!=D)
B._Mark(B._cycle=D);if((B=this.HC)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AaX).
_cycle!=D)B._Mark(B._cycle=D);},_className:"DropDown::DropDown"};C.AMk={AsW:null
,Bi:null,Bds:function(H){var B;(B=this.AsW)?B[1].call(B[0],this):null;},_Init:function(
aArg){A.Core.O._Init.call(this,aArg);A.Core.Bi._Init.call(this.Bi={I:this},0);this.
__proto__=C.AMk;this.G(PP);this.Bi.AV(0x3F);this.Bi.Kc(Hc);this.Bi.Kb(Li);this.Bi.
DJ(Mt);this.Bi.DX(SF);this.J(this.Bi,0);this.Bi.AuY=[this,this.Bds];this.Bi.BP=[
this,this.Bds];},_Done:function(){this.__proto__=A.Core.O;this.Bi._Done();A.Core.
O._Done.call(this);},_ReInit:function(){A.Core.O._ReInit.call(this);this.Bi._ReInit(
);},_Mark:function(D){var B;A.Core.O._Mark.call(this,D);if((B=this.AsW)&&((B=B[0
])._cycle!=D))B._Mark(B._cycle=D);if((B=this.Bi)._cycle!=D)B._Mark(B._cycle=D);}
,_className:"DropDown::EventCatcher"};
C._Init=function(){C.AAS.__proto__=A.Core.O;C.ALF.__proto__=A.Core.O;C.Iv.__proto__=
A.Core.O;C.AMk.__proto__=A.Core.O;};C._ReInit=function(){};C.Dz=function(D){};return C;
})();

/* VitalControl demonstration application, © Urban GmbH & Co.KG 2023 */