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
var Ca="Text";var BC=[0,0,100,24];var EW=[0,0,100,1];var Hh=[0,0];var I8=[0,0,100
,120];var IJ=[100,0];var OW=[100,120];var PW=[0,120];var PX=[90,0,100,60];var CL=[
0,0,0,0];var E4=[0,0,240,40];var Lq=[240,0];var PY=[240,40];var Ks=[0,40];var N8=[
210,0,240,40];var PZ=[0,0,240,50];var MB=[240,50];var ST=[0,50];
C.Amg={ACj:function(aIndex){return A.jV;},ACd:function(){return 0;},_Init:function(
aArg){this.__proto__=C.Amg;A.h7++;},_Done:function(){this.__proto__=null;A.h7--;
},_ReInit:function(){},_Mark:function(D){var B;if((B=this.I)&&(B._cycle!=D))B._Mark(
B._cycle=D);},I:null,_cycle:0,_observers:null,_className:"DropDown::DDData"};C.ABD={
B5:null,Background:null,Text:null,Bd:null,V:Ca,LM:0xFF000000,A4z:0xFF454545,A_M:
0,KN:0,J6:0x12,I1:A.wg,Bh:function(aSize){var B;A.Core.O.Bh.call(this,aSize);this.
Text.H([0,0,(B=this.M)[2]-B[0],B[3]-B[1]]);this.Text.H([].concat(this.Text.M[0]+
this.I1[0],this.Text.M.slice(1,4)));this.Text.H(A.abN(this.Text.M,this.Text.M[2]-
this.I1[2]));this.Text.H(A.abP(this.Text.M,this.Text.M[1]+this.I1[1]));this.Text.
H([].concat(this.Text.M.slice(0,3),this.Text.M[3]-this.I1[3]));},Ai:function(Ae){
var B;A.Core.O.Ai.call(this,Ae);if(((Ae&0x20)===0x20)){this.Background.L(this.A4z
);this.Text.L(this.A_M);}else{this.Background.L(this.LM);this.Text.L(this.KN);}}
,Bky:function(E){this.V=E;this.Text.R(E);},AbH:function(E){this.LM=E;this.Background.
L(E);},S:function(E){this.B5=E;this.Text.S(E);},A4:function(E){this.J6=E;this.Text.
A4(E);},HH:function(E){if(A.aaY(this.I1,E))return;this.I1=E;},_Init:function(aArg
){A.Core.O._Init.call(this,aArg);A.acg.AJ._Init.call(this.Background={I:this},0);
A.acg.Text._Init.call(this.Text={I:this},0);A.acg.AJ._Init.call(this.Bd={I:this}
,0);this.__proto__=C.ABD;this.H(BC);this.Background.AY(0x3F);this.Background.H(BC
);this.Background.L(0xBE000000);this.Text.AY(0x3F);this.Text.H(BC);this.Text.R(Ca
);this.Text.L(0xFFFFFFFF);this.Bd.AY(0x1D);this.Bd.H(EW);this.Bd.L(0x9EFFFFFF);this.
J(this.Background,0);this.J(this.Text,0);this.J(this.Bd,0);this.Text.S(A.aaL(A.fl.
Ak));this.B5=A.aaL(A.fl.Ah);},_Done:function(){this.__proto__=A.Core.O;this.Background.
_Done();this.Text._Done();this.Bd._Done();A.Core.O._Done.call(this);},_ReInit:function(
){A.Core.O._ReInit.call(this);this.Background._ReInit();this.Text._ReInit();this.
Bd._ReInit();this.Text.S(A.aaL(A.fl.Ak));this.S(A.aaL(A.fl.Ah));},_Mark:function(
D){var B;A.Core.O._Mark.call(this,D);if((B=this.B5)&&(B._cycle!=D))B._Mark(B._cycle=
D);if((B=this.Background)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Text)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.Bd)._cycle!=D)B._Mark(B._cycle=D);},_className:
"DropDown::DDItem"};C.AMX={ADK:null,A8K:null,CI:null,H2:null,Bk:null,IG:null,Gi:
0,AV:0,GW:0,Abq:0,ABV:false,A2m:function(G){if(this.Bk.Jh>100){var FW=this.CI.A52(
this.Bk.HV);if(FW<0)return;this.CI.GX(FW);this.CI.Hy(FW,true,null,null);}},Bzl:function(
G){var B;if(!this.Bk.Nz){var FW=this.CI.A52(this.Bk.HV);if(FW<0)return;this.CI.GX(
FW);this.CI.Hy(FW,true,null,null);(B=this.ADK)?B[1].call(B[0],this):null;}},AzQ:
function(G){this.Bk.Ar(true);},Bl1:function(E){if(A.aa0(this.ADK,E))return;this.
ADK=E;},GX:function(E){this.Gi=E;this.CI.GX(E);},FA:function(){return this.CI.Gi;
},ByY:function(G){if(this.ABV){var G3=A.abe(this.Bk.HV,this.Bk.NK);if((G3[1]>8)||(
G3[1]<-8)){this.If().AM7(this.H2,Hh);this.Bk.Ar(false);}}},Jn:function(E){this.AV=
E;this.CI.Jn(E);},Bl3:function(E){this.A8K=E;this.CI.Hc=E;},AeH:function(E){this.
GW=E;this.CI.AeH(E);},ARO:function(){return this.CI.GW;},BkY:function(E){if(this.
ABV===E)return;this.ABV=E;},Aq2:function(){return this.CI.AV;},Av_:function(E){if(
this.Abq===E)return;this.Abq=E;},Bzs:function(G){},Adb:function(G){var B;var U5=
this.CI.M;var As1=this.CI.Aqo(0,this.CI.AV-1);var y1=(((U5[1]-As1[1])*(U5[3]-U5[
1]))/(As1[3]-As1[1]))|0;var y2=(((U5[3]-As1[1])*(U5[3]-U5[1]))/(As1[3]-As1[1]))|
0;if(y1<0)y1=0;if(y2>(U5[3]-U5[1]))y2=U5[3]-U5[1];this.IG.H([U5[2]-10,y1+U5[1],U5[
2],y2+U5[1]]);this.IG.Y(this.ABV);},_Init:function(aArg){A.Core.O._Init.call(this
,aArg);A.Core.CI._Init.call(this.CI={I:this},0);A.Core.H2._Init.call(this.H2={I:
this},0);A.Core.Bk._Init.call(this.Bk={I:this},0);A.acg.AJ._Init.call(this.IG={I:
this},0);this.__proto__=C.AMX;this.H(I8);this.CI.AY(0x3F);this.CI.H(I8);this.CI.
GX(0);this.CI.Jn(5);this.CI.NU(C.ABD);this.H2.AY(0x3F);this.H2.H(I8);this.H2.AF4=
false;this.H2.A_h=false;this.Bk.AY(0x3F);this.Bk.Ki(Hh);this.Bk.Kh(IJ);this.Bk.DM(
OW);this.Bk.DY(PW);this.IG.H(PX);this.IG.L(0xFF000000);this.J(this.CI,0);this.J(
this.H2,0);this.J(this.Bk,0);this.J(this.IG,0);this.CI.Ej=[this,this.Adb];this.CI.
Awn(this.H2);this.H2.AFn=[this,this.Bzs];this.H2.Y2=[this,this.AzQ];this.Bk.ARy=[
this,this.ByY];this.Bk.DS=[this,this.A2m];this.Bk.Lj=[this,this.Bzl];},_Done:function(
){this.__proto__=A.Core.O;this.CI._Done();this.H2._Done();this.Bk._Done();this.IG.
_Done();A.Core.O._Done.call(this);},_ReInit:function(){A.Core.O._ReInit.call(this
);this.CI._ReInit();this.H2._ReInit();this.Bk._ReInit();this.IG._ReInit();},_Mark:
function(D){var B;A.Core.O._Mark.call(this,D);if((B=this.ADK)&&((B=B[0])._cycle!=
D))B._Mark(B._cycle=D);if((B=this.A8K)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);
if((B=this.CI)._cycle!=D)B._Mark(B._cycle=D);if((B=this.H2)._cycle!=D)B._Mark(B.
_cycle=D);if((B=this.Bk)._cycle!=D)B._Mark(B._cycle=D);if((B=this.IG)._cycle!=D)
B._Mark(B._cycle=D);},_className:"DropDown::DDItemList"};C.Iy={Data:null,AD:null
,AB6:null,AuO:null,Abp:null,Q:null,AdF:null,Jk:null,Bk:null,HD:null,Abg:null,Abq:
100,GW:20,Bbn:A.wg,A4V:0xFF252528,AME:0xFF252528,AMJ:0xFFF1EEEA,A4W:0xFFFAFFFE,AMM:
0xFFF8FDFF,AMF:0xFF0008C1,AyN:0,AMN:0xFF7EFEFF,AM6:-1,ABt:0xFF000000,Bgu:0xFFFAFFFE
,CT:function(){this.Bic(this);},Init:function(aArg){this.A8Y(this.A4V);this.AEq(
this.AB6);this.A8Z(this.A4W);},J_:function(CU,aClip,aOffset,Cf,aBlend){A.Core.O.
J_.call(this,CU,aClip,aOffset,Cf,aBlend);if(!A.aaY(this.Bbn,this.M)){this.Bbn=this.
M;A.pe([this,this.BwH],this);}},Bh:function(aSize){var B;A.Core.O.Bh.call(this,aSize
);this.Jk.H([0,0,(B=this.M)[2]-B[0],B[3]-B[1]]);this.Jk.H([].concat(this.Jk.M[0]
,this.Jk.M.slice(1,4)));this.Jk.H(A.abN(this.Jk.M,this.Jk.M[2]-((B=this.Abg.M)[2
]-B[0])));this.Jk.H(A.abP(this.Jk.M,this.Jk.M[1]));this.Jk.H([].concat(this.Jk.M.
slice(0,3),this.Jk.M[3]));},At:function(E){if(A.aaZ(this.Q,E))return;if(!!this.Q
)A.z$([this,this.De],this.Q,0);this.Q=E;if(!!E)A.zX([this,this.De],E,0);if(!!E)A.
pe([this,this.De],this);},BkQ:function(E){if(this.Data===E)return;this.Data=E;A.
pe([this,this.Be4],this);},Bki:function(G){var B;if(!this.AD)return;var FW=this.
AD.CI.GT;var Aad=(C.ABD.isPrototypeOf(B=this.AD.CI.Ce)?B:null);if(!!Aad){if(this.
Data.ACd()>FW){Aad.Bky(this.Data.ACj(FW));Aad.AbH(this.AME);Aad.A4z=this.AMF;Aad.
A_M=this.AMN;Aad.S(this.AuO);Aad.KN=this.AMM;Aad.A4(0x12);Aad.Bd.L(this.AMJ);Aad.
HH(CL);}Aad.H(A.abK(Aad.M,[(B=this.AD.CI.M)[2]-B[0],this.AD.CI.GW]));}},ByG:function(
G){var F;if(!!this.Q){(F=this.Q,F[2].call(F[0],this.AD.FA()));A.abo(this.Q,0);}A.
pe([this,this.A3j],this);},A3j:function(G){if(!this.AD){this.Bxj(this);if(!this.
AD)return;this.HD.Cr=0;this.HD.B1=this.AD.Abq;this.AD.Ar(true);}else{this.HD.Cr=
this.AD.Abq;this.HD.B1=0;this.AD.Ar(false);}this.HD.Ar(true);this.AD.BkY(this.Abq<(
this.AD.ARO()*this.AD.Aq2()));},Bxj:function(G){var B;if(!this.Data)return;this.
Abp=A._NewObject(C.ANF,0);this.AD=A._NewObject(C.AMX,0);this.AD.Bl3([this,this.Bki
]);this.AD.Bl1([this,this.ByG]);this.AD.AeH(this.GW);this.AD.Jn(this.Data.ACd());
this.AD.IG.L(this.ABt);if(this.Abq>(this.AD.ARO()*this.AD.Aq2()))this.Av_(this.AD.
ARO()*this.AD.Aq2());this.AD.Av_(this.Abq);this.AD.H2.FQ=[0,this.Abq];this.AD.H(
this.M);this.AD.Ar(false);this.AD.GX(this.AyN);var It=this.If();if(!!It){this.Abp.
H([0,0,(B=It.M)[2]-B[0],B[3]-B[1]]);this.Abp.Ato=[this,this.A3j];this.Abp.J(this.
AD,0);It.J(this.Abp,0);It.Zf(this.Abp);It.AMe(this.Abp);}},Av_:function(E){if(this.
Abq===E)return;this.Abq=E;if(this.AM6<0)this.AM6=E;},AzN:function(G){var B;if(!this.
AD||!this.If())return;var AID=this.BxU(this);this.AD.H([].concat(AID[0],this.AD.
M.slice(1,4)));this.AD.H(A.abN(this.AD.M,AID[2]));this.AD.H(A.abP(this.AD.M,AID[
3]));this.AD.H([].concat(this.AD.M.slice(0,3),AID[3]+this.HD.A7));if((this.AD.M[
3]>this.If().M[3])&&(this.AD.M[3]!==((B=this.If().M)[3]-B[1])))this.AD.H([].concat(
this.AD.M.slice(0,3),this.If().M[3]));if((this.AD.M[1]<this.If().M[1])&&(this.AD.
M[3]!==((B=this.If().M)[3]-B[1])))this.AD.H(A.abP(this.AD.M,this.If().M[1]));},Be4:
function(G){this.Jk.R(this.Data.ACj(this.AyN));},Aiv:function(G){if((!this.AD||!
this.Abp)||!this.If())return;if(!this.AD.A7P()){this.If().ABW(this.Abp);this.If(
).HI(this.Abp);this.AD=null;}},BwH:function(G){var B;if(!!this.AD&&(((this.M[0]!==
this.AD.M[0])||(this.M[2]!==this.AD.M[2]))||(this.M[3]!==this.AD.M[1])))this.AD.
H([this.M[0],this.M[3],this.M[2],this.M[3]+((B=this.AD.M)[3]-B[1])]);},AEq:function(
E){this.AB6=E;this.Jk.S(E);},ASi:function(E){if(this.AuO===E)return;this.AuO=E;}
,A8Y:function(E){this.A4V=E;this.AdF.L(E);},BkD:function(E){if(this.AME===E)return;
this.AME=E;},BkJ:function(E){if(this.AMJ===E)return;this.AMJ=E;},A8Z:function(E){
this.A4W=E;this.Jk.L(E);},BkK:function(E){if(this.AMM===E)return;this.AMM=E;},BkE:
function(E){if(this.AMF===E)return;this.AMF=E;},De:function(G){var F;if(!!this.Q
){this.AyN=(F=this.Q,F[1].call(F[0]));if(!!this.AD)this.AD.GX(this.AyN);this.Be4(
this);}},BxU:function(Aoo){var B;var BY=Aoo;var AIC=Aoo.M;var Ayj=Hh;while(!!BY){
var Z4=BY.Fp;if(!BY.Ab&&(BY!==Aoo)){BY.Be(AIC);return A.abh([0,0,(B=Aoo.M)[2]-B[
0],B[3]-B[1]],Ayj);}if(!!Z4){if(((B=Z4.QA)[0]>=B[2])||(B[1]>=B[3])){A.we(BY,0);A.
we(Z4,0);}Z4.QA=A.wC(Z4.QA,AIC);}if(!((BY.T&0x1)===0x1))return A.abh([0,0,(B=Aoo.
M)[2]-B[0],B[3]-B[1]],Ayj);if(BY===Aoo)AIC=A.lb(A.abh(AIC,BY.M.slice(0,2)),BY.M);
Ayj=A.abf(Ayj,BY.M.slice(0,2));BY=BY.Ab;}return A.abh([0,0,(B=Aoo.M)[2]-B[0],B[3
]-B[1]],Ayj);},BkL:function(E){if(this.AMN===E)return;this.AMN=E;},Bic:function(
G){this.Av_(this.AM6);if(!!this.AD&&!!this.AD.CI)this.AD.CI.Abh(0,this.AD.CI.AV);
if(!!this.Data)this.Jk.R(this.Data.ACj(this.AyN));},BkI:function(E){if(this.ABt===
E)return;this.ABt=E;if(!!this.AD)this.AD.IG.L(this.ABt);},BkH:function(E){this.Bgu=
E;this.Abg.L(E);},_Init:function(aArg){A.Core.O._Init.call(this,aArg);A.acg.NI._Init.
call(this.AdF={I:this},0);A.acg.Text._Init.call(this.Jk={I:this},0);A.Core.Bk._Init.
call(this.Bk={I:this},0);A.acl.Ga._Init.call(this.HD={I:this},0);A.acg.An._Init.
call(this.Abg={I:this},0);this.__proto__=C.Iy;this.H(E4);this.AdF.AY(0x3F);this.
AdF.H(E4);this.AdF.L(0xFF252528);this.Jk.AY(0x3F);this.Jk.H(E4);this.Jk.R(A.jV);
this.Bk.AY(0x3F);this.Bk.Ki(Hh);this.Bk.Kh(Lq);this.Bk.DM(PY);this.Bk.DY(Ks);this.
HD.HG(1);this.HD.Fe(250);this.Abg.AY(0x3A);this.Abg.H(N8);this.Abg.Cu(1);this.J(
this.AdF,0);this.J(this.Jk,0);this.J(this.Bk,0);this.J(this.Abg,0);this.AdF.Ax(A.
aaL(A.acw.AGE));this.Jk.S(A.aaL(A.fl.Ah));this.Bk.Lj=[this,this.A3j];this.HD.Sl=[
this,this.Aiv];this.HD.AgZ=[this,this.AzN];this.AB6=A.aaL(A.fl.Ah);this.AuO=A.aaL(
A.fl.Ak);this.Abg.Ax(A.aaL(A.aci.ARa));this.Init(aArg);},_Done:function(){this.__proto__=
A.Core.O;this.AdF._Done();this.Jk._Done();this.Bk._Done();this.HD._Done();this.Abg.
_Done();A.Core.O._Done.call(this);},_ReInit:function(){A.Core.O._ReInit.call(this
);this.AdF._ReInit();this.Jk._ReInit();this.Bk._ReInit();this.HD._ReInit();this.
Abg._ReInit();this.Jk.S(A.aaL(A.fl.Ah));this.AEq(A.aaL(A.fl.Ah));this.ASi(A.aaL(
A.fl.Ak));this.CT();},_Mark:function(D){var B;A.Core.O._Mark.call(this,D);if((B=
this.Data)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.AD)&&(B._cycle!=D))B._Mark(
B._cycle=D);if((B=this.AB6)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.AuO)&&(
B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Abp)&&(B._cycle!=D))B._Mark(B._cycle=
D);if((B=this.Q)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.AdF)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.Jk)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
Bk)._cycle!=D)B._Mark(B._cycle=D);if((B=this.HD)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Abg)._cycle!=D)B._Mark(B._cycle=D);},_className:"DropDown::DropDown"};C.ANF={
Ato:null,Bk:null,Bfl:function(G){var B;(B=this.Ato)?B[1].call(B[0],this):null;},
_Init:function(aArg){A.Core.O._Init.call(this,aArg);A.Core.Bk._Init.call(this.Bk={
I:this},0);this.__proto__=C.ANF;this.H(PZ);this.Bk.AY(0x3F);this.Bk.Ki(Hh);this.
Bk.Kh(Lq);this.Bk.DM(MB);this.Bk.DY(ST);this.J(this.Bk,0);this.Bk.Avt=[this,this.
Bfl];this.Bk.BK=[this,this.Bfl];},_Done:function(){this.__proto__=A.Core.O;this.
Bk._Done();A.Core.O._Done.call(this);},_ReInit:function(){A.Core.O._ReInit.call(
this);this.Bk._ReInit();},_Mark:function(D){var B;A.Core.O._Mark.call(this,D);if((
B=this.Ato)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.Bk)._cycle!=D)B.
_Mark(B._cycle=D);},_className:"DropDown::EventCatcher"};
C._Init=function(){C.ABD.__proto__=A.Core.O;C.AMX.__proto__=A.Core.O;C.Iy.__proto__=
A.Core.O;C.ANF.__proto__=A.Core.O;};C._ReInit=function(){};C.DB=function(D){};return C;
})();

/* VitalControl demonstration application, © Urban GmbH & Co.KG 2023 */