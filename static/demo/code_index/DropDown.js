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
var B3="Text";var BI=[0,0,100,24];var EG=[0,0,100,1];var Gr=[0,0];var I4=[0,0,100
,120];var Ip=[100,0];var Oc=[100,120];var Pb=[0,120];var Nm=[90,0,100,60];var Cv=[
0,0,0,0];var FK=[0,0,240,40];var Od=[240,0];var Nn=[240,40];var Ka=[0,40];var Oe=[
210,0,240,40];var MB=[0,0,240,50];var Pc=[240,50];var RL=[0,50];
C.Akq={Azl:function(aIndex){return A.jm;},Azh:function(){return 0;},_Init:function(
aArg){this.__proto__=C.Akq;A.hJ++;},_Done:function(){this.__proto__=null;A.hJ--;
},_ReInit:function(){},_Mark:function(D){var B;if((B=this.I)&&(B._cycle!=D))B._Mark(
B._cycle=D);},I:null,_cycle:0,_observers:null,_className:"DropDown::DDData"};C.AyM={
Co:null,Background:null,Text:null,A7:null,T:B3,K3:0xFF000000,AZy:0xFF454545,A46:
0,J_:0,JF:0x12,IG:A.vx,Bh:function(aSize){var B;A.Core.O.Bh.call(this,aSize);this.
Text.G([0,0,(B=this.M)[2]-B[0],B[3]-B[1]]);this.Text.G([].concat(this.Text.M[0]+
this.IG[0],this.Text.M.slice(1,4)));this.Text.G(A.aaQ(this.Text.M,this.Text.M[2]-
this.IG[2]));this.Text.G(A.aaS(this.Text.M,this.Text.M[1]+this.IG[1]));this.Text.
G([].concat(this.Text.M.slice(0,3),this.Text.M[3]-this.IG[3]));},Ai:function(Ae){
var B;A.Core.O.Ai.call(this,Ae);if(((Ae&0x20)===0x20)){this.Background.L(this.AZy
);this.Text.L(this.A46);}else{this.Background.L(this.K3);this.Text.L(this.J_);}}
,BeQ:function(E){this.T=E;this.Text.R(E);},AcM:function(E){this.K3=E;this.Background.
L(E);},Y:function(E){this.Co=E;this.Text.Y(E);},A0:function(E){this.JF=E;this.Text.
A0(E);},HT:function(E){if(A.z9(this.IG,E))return;this.IG=E;},_Init:function(aArg
){A.Core.O._Init.call(this,aArg);A.abh.AH._Init.call(this.Background={I:this},0);
A.abh.Text._Init.call(this.Text={I:this},0);A.abh.AH._Init.call(this.A7={I:this}
,0);this.__proto__=C.AyM;this.G(BI);this.Background.AW(0x3F);this.Background.G(BI
);this.Background.L(0xBE000000);this.Text.AW(0x3F);this.Text.G(BI);this.Text.R(B3
);this.Text.L(0xFFFFFFFF);this.A7.AW(0x1D);this.A7.G(EG);this.A7.L(0x9EFFFFFF);this.
J(this.Background,0);this.J(this.Text,0);this.J(this.A7,0);this.Text.Y(A.zW(A.eV.
AB));this.Co=A.zW(A.eV.Au);},_Done:function(){this.__proto__=A.Core.O;this.Background.
_Done();this.Text._Done();this.A7._Done();A.Core.O._Done.call(this);},_ReInit:function(
){A.Core.O._ReInit.call(this);this.Background._ReInit();this.Text._ReInit();this.
A7._ReInit();},_Mark:function(D){var B;A.Core.O._Mark.call(this,D);if((B=this.Co
)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Background)._cycle!=D)B._Mark(B.
_cycle=D);if((B=this.Text)._cycle!=D)B._Mark(B._cycle=D);if((B=this.A7)._cycle!=
D)B._Mark(B._cycle=D);},_className:"DropDown::DDItem"};C.AJf={AAC:null,A29:null,
Cu:null,Hz:null,Bd:null,Ik:null,FJ:0,AM:0,Gj:0,ZN:0,Ay1:false,AXu:function(H){if(
this.Bd.IV>100){var Fw=this.Cu.A0Q(this.Bd.Ho);if(Fw<0)return;this.Cu.Gl(Fw);this.
Cu.IA(Fw,true,null,null);}},Bs8:function(H){var B;if(!this.Bd.MQ){var Fw=this.Cu.
A0Q(this.Bd.Ho);if(Fw<0)return;this.Cu.Gl(Fw);this.Cu.IA(Fw,true,null,null);(B=this.
AAC)?B[1].call(B[0],this):null;}},Aw2:function(H){this.Bd.An(true);},Bgd:function(
E){if(A.z$(this.AAC,E))return;this.AAC=E;},Gl:function(E){this.FJ=E;this.Cu.Gl(E
);},FH:function(){return this.Cu.FJ;},BsJ:function(H){if(this.Ay1){var Gt=A.aaj(
this.Bd.Ho,this.Bd.M0);if((Gt[1]>8)||(Gt[1]<-8)){this.HO().AJp(this.Hz,Gr);this.
Bd.An(false);}}},I0:function(E){this.AM=E;this.Cu.I0(E);},Bgf:function(E){this.A29=
E;this.Cu.GD=E;},AcT:function(E){this.Gj=E;this.Cu.AcT(E);},ANR:function(){return this.
Cu.Gj;},Bfc:function(E){if(this.Ay1===E)return;this.Ay1=E;},AoE:function(){return this.
Cu.AM;},Atz:function(E){if(this.ZN===E)return;this.ZN=E;},Btc:function(H){},Abh:
function(H){var B;var TK=this.Cu.M;var Aqw=this.Cu.An5(0,this.Cu.AM-1);var y1=(((
TK[1]-Aqw[1])*(TK[3]-TK[1]))/(Aqw[3]-Aqw[1]))|0;var y2=(((TK[3]-Aqw[1])*(TK[3]-TK[
1]))/(Aqw[3]-Aqw[1]))|0;if(y1<0)y1=0;if(y2>(TK[3]-TK[1]))y2=TK[3]-TK[1];this.Ik.
G([TK[2]-10,y1+TK[1],TK[2],y2+TK[1]]);this.Ik.W(this.Ay1);},_Init:function(aArg){
A.Core.O._Init.call(this,aArg);A.Core.Cu._Init.call(this.Cu={I:this},0);A.Core.Hz.
_Init.call(this.Hz={I:this},0);A.Core.Bd._Init.call(this.Bd={I:this},0);A.abh.AH.
_Init.call(this.Ik={I:this},0);this.__proto__=C.AJf;this.G(I4);this.Cu.AW(0x3F);
this.Cu.G(I4);this.Cu.Gl(0);this.Cu.I0(5);this.Cu.Nb(C.AyM);this.Hz.AW(0x3F);this.
Hz.G(I4);this.Hz.ACJ=false;this.Hz.A4B=false;this.Bd.AW(0x3F);this.Bd.J9(Gr);this.
Bd.J8(Ip);this.Bd.D$(Oc);this.Bd.Eg(Pb);this.Ik.G(Nm);this.Ik.L(0xFF000000);this.
J(this.Cu,0);this.J(this.Hz,0);this.J(this.Bd,0);this.J(this.Ik,0);this.Cu.Eu=[this
,this.Abh];this.Cu.AtL(this.Hz);this.Hz.AB5=[this,this.Btc];this.Hz.Xt=[this,this.
Aw2];this.Bd.AND=[this,this.BsJ];this.Bd.D_=[this,this.AXu];this.Bd.KD=[this,this.
Bs8];},_Done:function(){this.__proto__=A.Core.O;this.Cu._Done();this.Hz._Done();
this.Bd._Done();this.Ik._Done();A.Core.O._Done.call(this);},_ReInit:function(){A.
Core.O._ReInit.call(this);this.Cu._ReInit();this.Hz._ReInit();this.Bd._ReInit();
this.Ik._ReInit();},_Mark:function(D){var B;A.Core.O._Mark.call(this,D);if((B=this.
AAC)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.A29)&&((B=B[0])._cycle
!=D))B._Mark(B._cycle=D);if((B=this.Cu)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
Hz)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Bd)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Ik)._cycle!=D)B._Mark(B._cycle=D);},_className:"DropDown::DDItemList"};C.
Ib={Data:null,Av:null,Azb:null,Asg:null,ZM:null,Q:null,AbL:null,Jl:null,Bd:null,
Ha:null,ZD:null,ZN:100,Gj:20,A7r:A.vx,AZQ:0xFF252528,AIY:0xFF252528,AI3:0xFFF1EEEA
,AZR:0xFFFAFFFE,AI6:0xFFF8FDFF,AIZ:0xFF0008C1,Av$:0,AI7:0xFF7EFEFF,AJo:-1,AyC:0xFF000000
,Baw:0xFFFAFFFE,C3:function(){this.Bce(this);},Init:function(aArg){this.A3m(this.
AZQ);this.AOj(this.Azb);this.A3n(this.AZR);},JH:function(CJ,aClip,aOffset,B5,aBlend
){A.Core.O.JH.call(this,CJ,aClip,aOffset,B5,aBlend);if(!A.z9(this.A7r,this.M)){this.
A7r=this.M;A.ow([this,this.BqA],this);}},Bh:function(aSize){var B;A.Core.O.Bh.call(
this,aSize);this.Jl.G([0,0,(B=this.M)[2]-B[0],B[3]-B[1]]);this.Jl.G([].concat(this.
Jl.M[0],this.Jl.M.slice(1,4)));this.Jl.G(A.aaQ(this.Jl.M,this.Jl.M[2]-((B=this.ZD.
M)[2]-B[0])));this.Jl.G(A.aaS(this.Jl.M,this.Jl.M[1]));this.Jl.G([].concat(this.
Jl.M.slice(0,3),this.Jl.M[3]));},AF:function(E){if(A.z_(this.Q,E))return;if(!!this.
Q)A.zn([this,this.CY],this.Q,0);this.Q=E;if(!!E)A.za([this,this.CY],E,0);if(!!E)
A.ow([this,this.CY],this);},Be6:function(E){if(this.Data===E)return;this.Data=E;
A.ow([this,this.A_4],this);},BeB:function(H){var B;if(!this.Av)return;var Fw=this.
Av.Cu.ID;var YC=(C.AyM.isPrototypeOf(B=this.Av.Cu.B4)?B:null);if(!!YC){if(this.Data.
Azh()>Fw){YC.BeQ(this.Data.Azl(Fw));YC.AcM(this.AIY);YC.AZy=this.AIZ;YC.A46=this.
AI7;YC.Y(this.Asg);YC.J_=this.AI6;YC.A0(0x12);YC.A7.L(this.AI3);YC.HT(Cv);}YC.G(
A.aaN(YC.M,[(B=this.Av.Cu.M)[2]-B[0],this.Av.Cu.Gj]));}},Bss:function(H){var F;if(
!!this.Q){(F=this.Q,F[2].call(F[0],this.Av.FH()));A.aat(this.Q,0);}A.ow([this,this.
AYh],this);},AYh:function(H){if(!this.Av){this.Bq$(this);if(!this.Av)return;this.
Ha.Ch=0;this.Ha.BW=this.Av.ZN;this.Av.An(true);}else{this.Ha.Ch=this.Av.ZN;this.
Ha.BW=0;this.Av.An(false);}this.Ha.An(true);this.Av.Bfc(this.ZN<(this.Av.ANR()*this.
Av.AoE()));},Bq$:function(H){var B;if(!this.Data)return;this.ZM=A._NewObject(C.AJX
,0);this.Av=A._NewObject(C.AJf,0);this.Av.Bgf([this,this.BeB]);this.Av.Bgd([this
,this.Bss]);this.Av.AcT(this.Gj);this.Av.I0(this.Data.Azh());this.Av.Ik.L(this.AyC
);if(this.ZN>(this.Av.ANR()*this.Av.AoE()))this.Atz(this.Av.ANR()*this.Av.AoE());
this.Av.Atz(this.ZN);this.Av.Hz.Fp=[0,this.ZN];this.Av.G(this.M);this.Av.An(false
);this.Av.Gl(this.Av$);var H6=this.HO();if(!!H6){this.ZM.G([0,0,(B=H6.M)[2]-B[0]
,B[3]-B[1]]);this.ZM.AqZ=[this,this.AYh];this.ZM.J(this.Av,0);H6.J(this.ZM,0);H6.
SZ(this.ZM);H6.AIB(this.ZM);}},Atz:function(E){if(this.ZN===E)return;this.ZN=E;if(
this.AJo<0)this.AJo=E;},Aw1:function(H){var B;if(!this.Av||!this.HO())return;var
AFj=this.BrM(this);this.Av.G([].concat(AFj[0],this.Av.M.slice(1,4)));this.Av.G(A.
aaQ(this.Av.M,AFj[2]));this.Av.G(A.aaS(this.Av.M,AFj[3]));this.Av.G([].concat(this.
Av.M.slice(0,3),AFj[3]+this.Ha.AY));if((this.Av.M[3]>this.HO().M[3])&&(this.Av.M[
3]!==((B=this.HO().M)[3]-B[1])))this.Av.G([].concat(this.Av.M.slice(0,3),this.HO(
).M[3]));if((this.Av.M[1]<this.HO().M[1])&&(this.Av.M[3]!==((B=this.HO().M)[3]-B[
1])))this.Av.G(A.aaS(this.Av.M,this.HO().M[1]));},A_4:function(H){this.Jl.R(this.
Data.Azl(this.Av$));},Agy:function(H){if((!this.Av||!this.ZM)||!this.HO())return;
if(!this.Av.A2n()){this.HO().Ay2(this.ZM);this.HO().HW(this.ZM);this.Av=null;}},
BqA:function(H){var B;if(!!this.Av&&(((this.M[0]!==this.Av.M[0])||(this.M[2]!==this.
Av.M[2]))||(this.M[3]!==this.Av.M[1])))this.Av.G([this.M[0],this.M[3],this.M[2],
this.M[3]+((B=this.Av.M)[3]-B[1])]);},AOj:function(E){this.Azb=E;this.Jl.Y(E);},
A3B:function(E){if(this.Asg===E)return;this.Asg=E;},A3m:function(E){this.AZQ=E;this.
AbL.L(E);},BeV:function(E){if(this.AIY===E)return;this.AIY=E;},BeZ:function(E){if(
this.AI3===E)return;this.AI3=E;},A3n:function(E){this.AZR=E;this.Jl.L(E);},Be0:function(
E){if(this.AI6===E)return;this.AI6=E;},BeW:function(E){if(this.AIZ===E)return;this.
AIZ=E;},CY:function(H){var F;if(!!this.Q){this.Av$=(F=this.Q,F[1].call(F[0]));if(
!!this.Av)this.Av.Gl(this.Av$);this.A_4(this);}},BrM:function(Amg){var B;var BZ=
Amg;var AFi=Amg.M;var AvG=Gr;while(!!BZ){var Yq=BZ.Hi;if(!BZ.Aa&&(BZ!==Amg)){BZ.
Bc(AFi);return A.aam([0,0,(B=Amg.M)[2]-B[0],B[3]-B[1]],AvG);}if(!!Yq){if(((B=Yq.
PK)[0]>=B[2])||(B[1]>=B[3])){A.vv(BZ,0);A.vv(Yq,0);}Yq.PK=A.vS(Yq.PK,AFi);}if(!((
BZ.S&0x1)===0x1))return A.aam([0,0,(B=Amg.M)[2]-B[0],B[3]-B[1]],AvG);if(BZ===Amg
)AFi=A.kz(A.aam(AFi,BZ.M.slice(0,2)),BZ.M);AvG=A.aak(AvG,BZ.M.slice(0,2));BZ=BZ.
Aa;}return A.aam([0,0,(B=Amg.M)[2]-B[0],B[3]-B[1]],AvG);},Be1:function(E){if(this.
AI7===E)return;this.AI7=E;},Bce:function(H){this.Atz(this.AJo);if(!!this.Av&&!!this.
Av.Cu)this.Av.Cu.ZE(0,this.Av.Cu.AM);if(!!this.Data)this.Jl.R(this.Data.Azl(this.
Av$));},BeY:function(E){if(this.AyC===E)return;this.AyC=E;if(!!this.Av)this.Av.Ik.
L(this.AyC);},BeX:function(E){this.Baw=E;this.ZD.L(E);},_Init:function(aArg){A.Core.
O._Init.call(this,aArg);A.abh.MZ._Init.call(this.AbL={I:this},0);A.abh.Text._Init.
call(this.Jl={I:this},0);A.Core.Bd._Init.call(this.Bd={I:this},0);A.abm.FC._Init.
call(this.Ha={I:this},0);A.abh.Am._Init.call(this.ZD={I:this},0);this.__proto__=
C.Ib;this.G(FK);this.AbL.AW(0x3F);this.AbL.G(FK);this.AbL.L(0xFF252528);this.Jl.
AW(0x3F);this.Jl.G(FK);this.Jl.R(A.jm);this.Bd.AW(0x3F);this.Bd.J9(Gr);this.Bd.J8(
Od);this.Bd.D$(Nn);this.Bd.Eg(Ka);this.Ha.IF(1);this.Ha.FI(250);this.ZD.AW(0x3A);
this.ZD.G(Oe);this.ZD.Cc(1);this.J(this.AbL,0);this.J(this.Jl,0);this.J(this.Bd,
0);this.J(this.ZD,0);this.AbL.Ar(A.zW(A.aby.ADk));this.Jl.Y(A.zW(A.eV.Au));this.
Bd.KD=[this,this.AYh];this.Ha.Rm=[this,this.Agy];this.Ha.Afh=[this,this.Aw1];this.
Azb=A.zW(A.eV.Au);this.Asg=A.zW(A.eV.AB);this.ZD.Ar(A.zW(A.abj.ANj));this.Init(aArg
);},_Done:function(){this.__proto__=A.Core.O;this.AbL._Done();this.Jl._Done();this.
Bd._Done();this.Ha._Done();this.ZD._Done();A.Core.O._Done.call(this);},_ReInit:function(
){A.Core.O._ReInit.call(this);this.AbL._ReInit();this.Jl._ReInit();this.Bd._ReInit(
);this.Ha._ReInit();this.ZD._ReInit();this.C3();},_Mark:function(D){var B;A.Core.
O._Mark.call(this,D);if((B=this.Data)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.
Av)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Azb)&&(B._cycle!=D))B._Mark(B.
_cycle=D);if((B=this.Asg)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.ZM)&&(B.
_cycle!=D))B._Mark(B._cycle=D);if((B=this.Q)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=
D);if((B=this.AbL)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Jl)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Bd)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ha)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.ZD)._cycle!=D)B._Mark(B._cycle=D);},_className:
"DropDown::DropDown"};C.AJX={AqZ:null,Bd:null,A$o:function(H){var B;(B=this.AqZ)?
B[1].call(B[0],this):null;},_Init:function(aArg){A.Core.O._Init.call(this,aArg);
A.Core.Bd._Init.call(this.Bd={I:this},0);this.__proto__=C.AJX;this.G(MB);this.Bd.
AW(0x3F);this.Bd.J9(Gr);this.Bd.J8(Od);this.Bd.D$(Pc);this.Bd.Eg(RL);this.J(this.
Bd,0);this.Bd.AsW=[this,this.A$o];this.Bd.B1=[this,this.A$o];},_Done:function(){
this.__proto__=A.Core.O;this.Bd._Done();A.Core.O._Done.call(this);},_ReInit:function(
){A.Core.O._ReInit.call(this);this.Bd._ReInit();},_Mark:function(D){var B;A.Core.
O._Mark.call(this,D);if((B=this.AqZ)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((
B=this.Bd)._cycle!=D)B._Mark(B._cycle=D);},_className:"DropDown::EventCatcher"};
C._Init=function(){C.AyM.__proto__=A.Core.O;C.AJf.__proto__=A.Core.O;C.Ib.__proto__=
A.Core.O;C.AJX.__proto__=A.Core.O;};C._ReInit=function(){};C.Dn=function(D){};return C;
})();

/* VitalControl demonstration application, © Urban GmbH & Co.KG 2019 */