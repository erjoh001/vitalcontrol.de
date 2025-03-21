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
,120];var Iw=[100,0];var O$=[100,120];var Qb=[0,120];var Qc=[90,0,100,60];var CR=[
0,0,0,0];var Fe=[0,0,240,40];var L9=[240,0];var Qd=[240,40];var J9=[0,40];var Oh=[
210,0,240,40];var Qe=[0,0,240,50];var MQ=[240,50];var Te=[0,50];
C.VZ={AvB:function(aIndex){return A.jV;},Aq3:function(){return 0;},_Init:function(
aArg){this.__proto__=C.VZ;A.h7++;},_Done:function(){this.__proto__=null;A.h7--;}
,_ReInit:function(){},_Mark:function(D){var B;if((B=this.I)&&(B._cycle!=D))B._Mark(
B._cycle=D);},I:null,_cycle:0,_observers:null,_className:"DropDown::DDData"};C.ACH={
B7:null,Background:null,Text:null,Bc:null,V:Cf,LX:0xFF000000,A5R:0xFF454545,Baf:
0,KY:0,Kn:0x12,Jh:A.wg,Bl:function(aSize){var B;A.Core.P.Bl.call(this,aSize);this.
Text.H([0,0,(B=this.M)[2]-B[0],B[3]-B[1]]);this.Text.H([].concat(this.Text.M[0]+
this.Jh[0],this.Text.M.slice(1,4)));this.Text.H(A.abN(this.Text.M,this.Text.M[2]-
this.Jh[2]));this.Text.H(A.abP(this.Text.M,this.Text.M[1]+this.Jh[1]));this.Text.
H([].concat(this.Text.M.slice(0,3),this.Text.M[3]-this.Jh[3]));},Ai:function(Ae){
var B;A.Core.P.Ai.call(this,Ae);if(((Ae&0x20)===0x20)){this.Background.L(this.A5R
);this.Text.L(this.Baf);}else{this.Background.L(this.LX);this.Text.L(this.KY);}}
,Bmy:function(E){this.V=E;this.Text.R(E);},WN:function(E){this.LX=E;this.Background.
L(E);},S:function(E){this.B7=E;this.Text.S(E);},A6:function(E){this.Kn=E;this.Text.
A6(E);},Hp:function(E){if(A.aaY(this.Jh,E))return;this.Jh=E;},_Init:function(aArg
){A.Core.P._Init.call(this,aArg);A.acg.AL._Init.call(this.Background={I:this},0);
A.acg.Text._Init.call(this.Text={I:this},0);A.acg.AL._Init.call(this.Bc={I:this}
,0);this.__proto__=C.ACH;this.H(BD);this.Background.A1(0x3F);this.Background.H(BD
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
"DropDown::DDItem"};C.ANQ={AEL:null,A91:null,CM:null,Ic:null,Bn:null,BW:null,IX:
null,Gu:0,AZ:0,GO:0,AbU:0,ACX:false,A3N:function(G){if(this.Bn.Jy>100){var Gh=this.
CM.A7g(this.Bn.H5);if(Gh<0)return;this.CM.GU(Gh);this.CM.HK(Gh,true,null,null);}
},BBw:function(G){var B;if(!this.Bn.NQ){var Gh=this.CM.A7g(this.Bn.H5);if(Gh<0)return;
this.CM.GU(Gh);this.CM.HK(Gh,true,null,null);(B=this.AEL)?B[1].call(B[0],this):null;
}},AAP:function(G){this.Bn.As(true);},BnU:function(E){if(A.aa0(this.AEL,E))return;
this.AEL=E;},GU:function(E){this.Gu=E;this.CM.GU(E);},FO:function(){return this.
CM.Gu;},BA8:function(G){if(this.ACX){var Hd=A.abe(this.Bn.H5,this.Bn.NZ);if((Hd[
1]>8)||(Hd[1]<-8)){this.Iq().AN0(this.Ic,Hs);this.Bn.As(false);}}},JD:function(E
){this.AZ=E;this.CM.JD(E);},BnW:function(E){this.A91=E;this.CM.Ho=E;},Ae9:function(
E){this.GO=E;this.CM.Ae9(E);},AST:function(){return this.CM.GO;},BmO:function(E){
if(this.ACX===E)return;this.ACX=E;},ArG:function(){return this.CM.AZ;},Ar4:function(
E){if(this.AbU===E)return;this.AbU=E;},BBD:function(G){},AdA:function(G){var B;var
Vx=this.CM.M;var AtM=this.CM.Aq1(0,this.CM.AZ-1);var y1=(((Vx[1]-AtM[1])*(Vx[3]-
Vx[1]))/(AtM[3]-AtM[1]))|0;var y2=(((Vx[3]-AtM[1])*(Vx[3]-Vx[1]))/(AtM[3]-AtM[1]
))|0;if(y1<0)y1=0;if(y2>(Vx[3]-Vx[1]))y2=Vx[3]-Vx[1];this.IX.H([Vx[2]-10,y1+Vx[1
],Vx[2],y2+Vx[1]]);this.IX.Z(this.ACX);},_Init:function(aArg){A.Core.P._Init.call(
this,aArg);A.Core.CM._Init.call(this.CM={I:this},0);A.Core.Ic._Init.call(this.Ic={
I:this},0);A.Core.Bn._Init.call(this.Bn={I:this},0);A.acg.BW._Init.call(this.BW={
I:this},0);A.acg.AL._Init.call(this.IX={I:this},0);this.__proto__=C.ANQ;this.H(I0
);this.CM.A1(0x3F);this.CM.H(I0);this.CM.GU(0);this.CM.JD(5);this.CM.N8(C.ACH);this.
Ic.A1(0x3F);this.Ic.H(I0);this.Ic.AG2=false;this.Ic.A$K=false;this.Bn.A1(0x3F);this.
Bn.J1(Hs);this.Bn.KA(Iw);this.Bn.DD(O$);this.Bn.DN(Qb);this.BW.A1(0x3F);this.BW.
H(I0);this.BW.L(A.jb.Text);this.IX.H(Qc);this.IX.L(0xFF000000);this.J(this.CM,0);
this.J(this.Ic,0);this.J(this.Bn,0);this.J(this.BW,0);this.J(this.IX,0);this.CM.
Em=[this,this.AdA];this.CM.Axb(this.Ic);this.Ic.AGl=[this,this.BBD];this.Ic.Zt=[
this,this.AAP];this.Bn.ASE=[this,this.BA8];this.Bn.D1=[this,this.A3N];this.Bn.Lt=[
this,this.BBw];},_Done:function(){this.__proto__=A.Core.P;this.CM._Done();this.Ic.
_Done();this.Bn._Done();this.BW._Done();this.IX._Done();A.Core.P._Done.call(this
);},_ReInit:function(){A.Core.P._ReInit.call(this);this.CM._ReInit();this.Ic._ReInit(
);this.Bn._ReInit();this.BW._ReInit();this.IX._ReInit();},_Mark:function(D){var B;
A.Core.P._Mark.call(this,D);if((B=this.AEL)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=
D);if((B=this.A91)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.CM)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.Ic)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
Bn)._cycle!=D)B._Mark(B._cycle=D);if((B=this.BW)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.IX)._cycle!=D)B._Mark(B._cycle=D);},_className:"DropDown::DDItemList"};C.
DT={Data:null,AD:null,AC8:null,Avw:null,AbT:null,Q:null,Ad5:null,JA:null,Bn:null
,HP:null,AbL:null,AbU:100,GO:20,BcW:A.wg,A6c:0xFF252528,ANx:0xFF252528,ANC:0xFFF1EEEA
,A6d:0xFFFAFFFE,ANF:0xFFF8FDFF,ANy:0xFF0008C1,AzN:0,ANG:0xFF7EFEFF,ANZ:-1,ACx:0xFF000000
,Bif:0xFFFAFFFE,Big:0,CQ:function(){this.Bj_(this);},Init:function(aArg){this.ATk(
this.A6c);this.ArW(this.AC8);this.ATl(this.A6d);},Ks:function(C0,aClip,aOffset,Ck
,aBlend){A.Core.P.Ks.call(this,C0,aClip,aOffset,Ck,aBlend);if(!A.aaY(this.BcW,this.
M)){this.BcW=this.M;A.pe([this,this.ByN],this);}},Bl:function(aSize){var B;A.Core.
P.Bl.call(this,aSize);this.JA.H([0,0,(B=this.M)[2]-B[0],B[3]-B[1]]);this.JA.H([].
concat(this.JA.M[0],this.JA.M.slice(1,4)));this.JA.H(A.abN(this.JA.M,this.JA.M[2
]-((B=this.AbL.M)[2]-B[0])));this.JA.H(A.abP(this.JA.M,this.JA.M[1]));this.JA.H([
].concat(this.JA.M.slice(0,3),this.JA.M[3]));},Au:function(E){if(A.aaZ(this.Q,E)
)return;if(!!this.Q)A.z$([this,this.C5],this.Q,0);this.Q=E;if(!!E)A.zX([this,this.
C5],E,0);if(!!E)A.pe([this,this.C5],this);},A_p:function(E){if(this.Data===E)return;
this.Data=E;A.pe([this,this.BgN],this);},Bmh:function(G){var B;if(!this.AD)return;
var Gh=this.AD.CM.G8;var AaJ=(C.ACH.isPrototypeOf(B=this.AD.CM.Cj)?B:null);if(!!
AaJ){if(this.Data.Aq3()>Gh){AaJ.Bmy(this.Data.AvB(Gh));AaJ.WN(this.ANx);AaJ.A5R=
this.ANy;AaJ.Baf=this.ANG;AaJ.S(this.Avw);AaJ.KY=this.ANF;AaJ.A6(0x12);AaJ.Bc.L(
this.ANC);AaJ.Hp(CR);}AaJ.H(A.abK(AaJ.M,[(B=this.AD.CM.M)[2]-B[0],this.AD.CM.GO]
));}},BAO:function(G){var F;if(!!this.Q){(F=this.Q,F[2].call(F[0],this.AD.FO()));
A.abo(this.Q,0);}A.pe([this,this.A4L],this);},A4L:function(G){if(!this.AD){this.
Bzo(this);if(!this.AD)return;this.HP.Cx=0;this.HP.B3=this.AD.AbU;this.AD.As(true
);}else{this.HP.Cx=this.AD.AbU;this.HP.B3=0;this.AD.As(false);}this.HP.As(true);
this.AD.BmO(this.AbU<(this.AD.AST()*this.AD.ArG()));},Bzo:function(G){var B;if(!
this.Data)return;this.AbT=A._NewObject(C.AOw,0);this.AD=A._NewObject(C.ANQ,0);this.
AD.BnW([this,this.Bmh]);this.AD.BnU([this,this.BAO]);this.AD.Ae9(this.GO);this.AD.
JD(this.Data.Aq3());this.AD.IX.L(this.ACx);if(this.AbU>(this.AD.AST()*this.AD.ArG(
)))this.Ar4(this.AD.AST()*this.AD.ArG());this.AD.Ar4(this.AbU);this.AD.Ic.F$=[0,
this.AbU];this.AD.H(this.M);this.AD.As(false);this.AD.GU(this.AzN);var II=this.Iq(
);if(!!II){this.AbT.H([0,0,(B=II.M)[2]-B[0],B[3]-B[1]]);this.AbT.Aua=[this,this.
A4L];this.AbT.J(this.AD,0);II.J(this.AbT,0);II.ZL(this.AbT);II.AM7(this.AbT);}},
Ar4:function(E){if(this.AbU===E)return;this.AbU=E;if(this.ANZ<0)this.ANZ=E;},AAL:
function(G){var B;if(!this.AD||!this.Iq())return;var AJv=this.Bz0(this);this.AD.
H([].concat(AJv[0],this.AD.M.slice(1,4)));this.AD.H(A.abN(this.AD.M,AJv[2]));this.
AD.H(A.abP(this.AD.M,AJv[3]));this.AD.H([].concat(this.AD.M.slice(0,3),AJv[3]+this.
HP.A5));if((this.AD.M[3]>this.Iq().M[3])&&(this.AD.M[3]!==((B=this.Iq().M)[3]-B[
1])))this.AD.H([].concat(this.AD.M.slice(0,3),this.Iq().M[3]));if((this.AD.M[1]<
this.Iq().M[1])&&(this.AD.M[3]!==((B=this.Iq().M)[3]-B[1])))this.AD.H(A.abP(this.
AD.M,this.Iq().M[1]));},BgN:function(G){this.JA.R(this.Data.AvB(this.AzN));},AiR:
function(G){if((!this.AD||!this.AbT)||!this.Iq())return;if(!this.AD.A86()){this.
Iq().ACY(this.AbT);this.Iq().HR(this.AbT);this.AD=null;}},ByN:function(G){var B;
if(!!this.AD&&(((this.M[0]!==this.AD.M[0])||(this.M[2]!==this.AD.M[2]))||(this.M[
3]!==this.AD.M[1])))this.AD.H([this.M[0],this.M[3],this.M[2],this.M[3]+((B=this.
AD.M)[3]-B[1])]);},ArW:function(E){this.AC8=E;this.JA.S(E);},AwR:function(E){if(
this.Avw===E)return;this.Avw=E;},ATk:function(E){this.A6c=E;this.Ad5.L(E);},A_c:
function(E){if(this.ANx===E)return;this.ANx=E;},A_h:function(E){if(this.ANC===E)
return;this.ANC=E;},ATl:function(E){this.A6d=E;this.JA.L(E);},A_i:function(E){if(
this.ANF===E)return;this.ANF=E;},A_d:function(E){if(this.ANy===E)return;this.ANy=
E;},C5:function(G){var F;if(!!this.Q){this.AzN=(F=this.Q,F[1].call(F[0]));if(!!this.
AD)this.AD.GU(this.AzN);this.BgN(this);}},Bz0:function(AoU){var B;var B1=AoU;var
AJu=AoU.M;var Azj=Hs;while(!!B1){var Aay=B1.FG;if(!B1.Ab&&(B1!==AoU)){B1.Bj(AJu);
return A.abh([0,0,(B=AoU.M)[2]-B[0],B[3]-B[1]],Azj);}if(!!Aay){if(((B=Aay.QQ)[0]>=
B[2])||(B[1]>=B[3])){A.we(B1,0);A.we(Aay,0);}Aay.QQ=A.wC(Aay.QQ,AJu);}if(!((B1.U&
0x1)===0x1))return A.abh([0,0,(B=AoU.M)[2]-B[0],B[3]-B[1]],Azj);if(B1===AoU)AJu=
A.lb(A.abh(AJu,B1.M.slice(0,2)),B1.M);Azj=A.abf(Azj,B1.M.slice(0,2));B1=B1.Ab;}return A.
abh([0,0,(B=AoU.M)[2]-B[0],B[3]-B[1]],Azj);},A_j:function(E){if(this.ANG===E)return;
this.ANG=E;},Bj_:function(G){this.Ar4(this.ANZ);if(!!this.AD&&!!this.AD.CM)this.
AD.CM.AbM(0,this.AD.CM.AZ);if(!!this.Data)this.JA.R(this.Data.AvB(this.AzN));},A_g:
function(E){if(this.ACx===E)return;this.ACx=E;if(!!this.AD)this.AD.IX.L(this.ACx
);},A_f:function(E){this.Bif=E;this.AbL.L(E);},_Init:function(aArg){A.Core.P._Init.
call(this,aArg);A.acg.NY._Init.call(this.Ad5={I:this},0);A.acg.Text._Init.call(this.
JA={I:this},0);A.Core.Bn._Init.call(this.Bn={I:this},0);A.acl.Gn._Init.call(this.
HP={I:this},0);A.acg.Ap._Init.call(this.AbL={I:this},0);this.__proto__=C.DT;this.
H(Fe);this.Ad5.A1(0x3F);this.Ad5.H(Fe);this.Ad5.L(0xFF252528);this.JA.A1(0x3F);this.
JA.H(Fe);this.JA.R(A.jV);this.Bn.A1(0x3F);this.Bn.J1(Hs);this.Bn.KA(L9);this.Bn.
DD(Qd);this.Bn.DN(J9);this.HP.HQ(1);this.HP.Fq(250);this.AbL.A1(0x3A);this.AbL.H(
Oh);this.AbL.Cw(1);this.Big=A.jb.Text;this.J(this.Ad5,0);this.J(this.JA,0);this.
J(this.Bn,0);this.J(this.AbL,0);this.Ad5.Ax(A.aaL(A.acw.AHC));this.JA.S(A.aaL(A.
fl.Af));this.Bn.Lt=[this,this.A4L];this.HP.SI=[this,this.AiR];this.HP.Ahq=[this,
this.AAL];this.AC8=A.aaL(A.fl.Af);this.Avw=A.aaL(A.fl.Ak);this.AbL.Ax(A.aaL(A.aci.
ASh));this.Init(aArg);},_Done:function(){this.__proto__=A.Core.P;this.Ad5._Done(
);this.JA._Done();this.Bn._Done();this.HP._Done();this.AbL._Done();A.Core.P._Done.
call(this);},_ReInit:function(){A.Core.P._ReInit.call(this);this.Ad5._ReInit();this.
JA._ReInit();this.Bn._ReInit();this.HP._ReInit();this.AbL._ReInit();this.JA.S(A.
aaL(A.fl.Af));this.ArW(A.aaL(A.fl.Af));this.AwR(A.aaL(A.fl.Ak));this.CQ();},_Mark:
function(D){var B;A.Core.P._Mark.call(this,D);if((B=this.Data)&&(B._cycle!=D))B.
_Mark(B._cycle=D);if((B=this.AD)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.AC8
)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Avw)&&(B._cycle!=D))B._Mark(B._cycle=
D);if((B=this.AbT)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Q)&&((B=B[0])._cycle
!=D))B._Mark(B._cycle=D);if((B=this.Ad5)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
JA)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Bn)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.HP)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AbL)._cycle!=D)B._Mark(B._cycle=
D);},_className:"DropDown::DropDown"};C.AOw={Aua:null,Bn:null,Bg$:function(G){var
B;(B=this.Aua)?B[1].call(B[0],this):null;},_Init:function(aArg){A.Core.P._Init.call(
this,aArg);A.Core.Bn._Init.call(this.Bn={I:this},0);this.__proto__=C.AOw;this.H(
Qe);this.Bn.A1(0x3F);this.Bn.J1(Hs);this.Bn.KA(L9);this.Bn.DD(MQ);this.Bn.DN(Te);
this.J(this.Bn,0);this.Bn.Awd=[this,this.Bg$];this.Bn.BG=[this,this.Bg$];},_Done:
function(){this.__proto__=A.Core.P;this.Bn._Done();A.Core.P._Done.call(this);},_ReInit:
function(){A.Core.P._ReInit.call(this);this.Bn._ReInit();},_Mark:function(D){var
B;A.Core.P._Mark.call(this,D);if((B=this.Aua)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=
D);if((B=this.Bn)._cycle!=D)B._Mark(B._cycle=D);},_className:"DropDown::EventCatcher"
};
C._Init=function(){C.ACH.__proto__=A.Core.P;C.ANQ.__proto__=A.Core.P;C.DT.__proto__=
A.Core.P;C.AOw.__proto__=A.Core.P;};C._ReInit=function(){};C.DI=function(D){};return C;
})();

/* VitalControl demonstration application, © Urban GmbH & Co.KG 2025 */