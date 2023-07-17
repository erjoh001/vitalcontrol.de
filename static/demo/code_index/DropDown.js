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
var B4="Text";var BI=[0,0,100,24];var EH=[0,0,100,1];var Gv=[0,0];var I5=[0,0,100
,120];var Iq=[100,0];var Oe=[100,120];var Pc=[0,120];var Nq=[90,0,100,60];var Cw=[
0,0,0,0];var FN=[0,0,240,40];var Of=[240,0];var Nr=[240,40];var Kc=[0,40];var Og=[
210,0,240,40];var ME=[0,0,240,50];var Pd=[240,50];var RO=[0,50];
C.Akw={Azr:function(aIndex){return A.jm;},Azn:function(){return 0;},_Init:function(
aArg){this.__proto__=C.Akw;A.hJ++;},_Done:function(){this.__proto__=null;A.hJ--;
},_ReInit:function(){},_Mark:function(D){var B;if((B=this.I)&&(B._cycle!=D))B._Mark(
B._cycle=D);},I:null,_cycle:0,_observers:null,_className:"DropDown::DDData"};C.AyR={
Cp:null,Background:null,Text:null,A7:null,T:B4,K3:0xFF000000,AZH:0xFF454545,A5g:
0,Ka:0,JH:0x12,IH:A.vx,Bh:function(aSize){var B;A.Core.O.Bh.call(this,aSize);this.
Text.G([0,0,(B=this.M)[2]-B[0],B[3]-B[1]]);this.Text.G([].concat(this.Text.M[0]+
this.IH[0],this.Text.M.slice(1,4)));this.Text.G(A.aaQ(this.Text.M,this.Text.M[2]-
this.IH[2]));this.Text.G(A.aaS(this.Text.M,this.Text.M[1]+this.IH[1]));this.Text.
G([].concat(this.Text.M.slice(0,3),this.Text.M[3]-this.IH[3]));},Ah:function(Ae){
var B;A.Core.O.Ah.call(this,Ae);if(((Ae&0x20)===0x20)){this.Background.L(this.AZH
);this.Text.L(this.A5g);}else{this.Background.L(this.K3);this.Text.L(this.Ka);}}
,Be6:function(E){this.T=E;this.Text.R(E);},AcT:function(E){this.K3=E;this.Background.
L(E);},Y:function(E){this.Cp=E;this.Text.Y(E);},A0:function(E){this.JH=E;this.Text.
A0(E);},HV:function(E){if(A.z9(this.IH,E))return;this.IH=E;},_Init:function(aArg
){A.Core.O._Init.call(this,aArg);A.abh.AH._Init.call(this.Background={I:this},0);
A.abh.Text._Init.call(this.Text={I:this},0);A.abh.AH._Init.call(this.A7={I:this}
,0);this.__proto__=C.AyR;this.G(BI);this.Background.AW(0x3F);this.Background.G(BI
);this.Background.L(0xBE000000);this.Text.AW(0x3F);this.Text.G(BI);this.Text.R(B4
);this.Text.L(0xFFFFFFFF);this.A7.AW(0x1D);this.A7.G(EH);this.A7.L(0x9EFFFFFF);this.
J(this.Background,0);this.J(this.Text,0);this.J(this.A7,0);this.Text.Y(A.zW(A.eV.
Az));this.Cp=A.zW(A.eV.Au);},_Done:function(){this.__proto__=A.Core.O;this.Background.
_Done();this.Text._Done();this.A7._Done();A.Core.O._Done.call(this);},_ReInit:function(
){A.Core.O._ReInit.call(this);this.Background._ReInit();this.Text._ReInit();this.
A7._ReInit();},_Mark:function(D){var B;A.Core.O._Mark.call(this,D);if((B=this.Cp
)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Background)._cycle!=D)B._Mark(B.
_cycle=D);if((B=this.Text)._cycle!=D)B._Mark(B._cycle=D);if((B=this.A7)._cycle!=
D)B._Mark(B._cycle=D);},_className:"DropDown::DDItem"};C.AJl={AAJ:null,A3i:null,
Cv:null,HC:null,Bd:null,Il:null,FM:0,AN:0,Gn:0,ZU:0,Ay6:false,AXD:function(H){if(
this.Bd.IW>100){var Fy=this.Cv.A0Z(this.Bd.Hr);if(Fy<0)return;this.Cv.Gp(Fy);this.
Cv.IB(Fy,true,null,null);}},Btu:function(H){var B;if(!this.Bd.MT){var Fy=this.Cv.
A0Z(this.Bd.Hr);if(Fy<0)return;this.Cv.Gp(Fy);this.Cv.IB(Fy,true,null,null);(B=this.
AAJ)?B[1].call(B[0],this):null;}},Aw7:function(H){this.Bd.An(true);},Bgu:function(
E){if(A.z$(this.AAJ,E))return;this.AAJ=E;},Gp:function(E){this.FM=E;this.Cv.Gp(E
);},FJ:function(){return this.Cv.FM;},Bs7:function(H){if(this.Ay6){var Gx=A.aaj(
this.Bd.Hr,this.Bd.M3);if((Gx[1]>8)||(Gx[1]<-8)){this.HQ().AJv(this.HC,Gv);this.
Bd.An(false);}}},I1:function(E){this.AN=E;this.Cv.I1(E);},Bgw:function(E){this.A3i=
E;this.Cv.GH=E;},Ac0:function(E){this.Gn=E;this.Cv.Ac0(E);},ANY:function(){return this.
Cv.Gn;},Bfs:function(E){if(this.Ay6===E)return;this.Ay6=E;},AoI:function(){return this.
Cv.AN;},AtE:function(E){if(this.ZU===E)return;this.ZU=E;},BtB:function(H){},Abp:
function(H){var B;var TP=this.Cv.M;var AqB=this.Cv.An9(0,this.Cv.AN-1);var y1=(((
TP[1]-AqB[1])*(TP[3]-TP[1]))/(AqB[3]-AqB[1]))|0;var y2=(((TP[3]-AqB[1])*(TP[3]-TP[
1]))/(AqB[3]-AqB[1]))|0;if(y1<0)y1=0;if(y2>(TP[3]-TP[1]))y2=TP[3]-TP[1];this.Il.
G([TP[2]-10,y1+TP[1],TP[2],y2+TP[1]]);this.Il.W(this.Ay6);},_Init:function(aArg){
A.Core.O._Init.call(this,aArg);A.Core.Cv._Init.call(this.Cv={I:this},0);A.Core.HC.
_Init.call(this.HC={I:this},0);A.Core.Bd._Init.call(this.Bd={I:this},0);A.abh.AH.
_Init.call(this.Il={I:this},0);this.__proto__=C.AJl;this.G(I5);this.Cv.AW(0x3F);
this.Cv.G(I5);this.Cv.Gp(0);this.Cv.I1(5);this.Cv.Ne(C.AyR);this.HC.AW(0x3F);this.
HC.G(I5);this.HC.ACR=false;this.HC.A4N=false;this.Bd.AW(0x3F);this.Bd.J$(Gv);this.
Bd.J_(Iq);this.Bd.DL(Oe);this.Bd.D5(Pc);this.Il.G(Nq);this.Il.L(0xFF000000);this.
J(this.Cv,0);this.J(this.HC,0);this.J(this.Bd,0);this.J(this.Il,0);this.Cv.Eu=[this
,this.Abp];this.Cv.AtQ(this.HC);this.HC.ACb=[this,this.BtB];this.HC.Xz=[this,this.
Aw7];this.Bd.ANK=[this,this.Bs7];this.Bd.Ea=[this,this.AXD];this.Bd.KF=[this,this.
Btu];},_Done:function(){this.__proto__=A.Core.O;this.Cv._Done();this.HC._Done();
this.Bd._Done();this.Il._Done();A.Core.O._Done.call(this);},_ReInit:function(){A.
Core.O._ReInit.call(this);this.Cv._ReInit();this.HC._ReInit();this.Bd._ReInit();
this.Il._ReInit();},_Mark:function(D){var B;A.Core.O._Mark.call(this,D);if((B=this.
AAJ)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.A3i)&&((B=B[0])._cycle
!=D))B._Mark(B._cycle=D);if((B=this.Cv)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
HC)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Bd)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Il)._cycle!=D)B._Mark(B._cycle=D);},_className:"DropDown::DDItemList"};C.
Ic={Data:null,Av:null,Azh:null,Asl:null,ZT:null,Q:null,AbT:null,Jn:null,Bd:null,
Hd:null,ZK:null,ZU:100,Gn:20,A7H:A.vx,AZZ:0xFF252528,AI4:0xFF252528,AI9:0xFFF1EEEA
,AZ0:0xFFFAFFFE,AJa:0xFFF8FDFF,AI5:0xFF0008C1,Awe:0,AJb:0xFF7EFEFF,AJu:-1,AyH:0xFF000000
,BaM:0xFFFAFFFE,C6:function(){this.Bcu(this);},Init:function(aArg){this.A3x(this.
AZZ);this.AOq(this.Azh);this.A3y(this.AZ0);},JJ:function(CL,aClip,aOffset,B6,aBlend
){A.Core.O.JJ.call(this,CL,aClip,aOffset,B6,aBlend);if(!A.z9(this.A7H,this.M)){this.
A7H=this.M;A.ow([this,this.BqX],this);}},Bh:function(aSize){var B;A.Core.O.Bh.call(
this,aSize);this.Jn.G([0,0,(B=this.M)[2]-B[0],B[3]-B[1]]);this.Jn.G([].concat(this.
Jn.M[0],this.Jn.M.slice(1,4)));this.Jn.G(A.aaQ(this.Jn.M,this.Jn.M[2]-((B=this.ZK.
M)[2]-B[0])));this.Jn.G(A.aaS(this.Jn.M,this.Jn.M[1]));this.Jn.G([].concat(this.
Jn.M.slice(0,3),this.Jn.M[3]));},AD:function(E){if(A.z_(this.Q,E))return;if(!!this.
Q)A.zn([this,this.C1],this.Q,0);this.Q=E;if(!!E)A.za([this,this.C1],E,0);if(!!E)
A.ow([this,this.C1],this);},Bfk:function(E){if(this.Data===E)return;this.Data=E;
A.ow([this,this.A$i],this);},BeR:function(H){var B;if(!this.Av)return;var Fy=this.
Av.Cv.IE;var YI=(C.AyR.isPrototypeOf(B=this.Av.Cv.B5)?B:null);if(!!YI){if(this.Data.
Azn()>Fy){YI.Be6(this.Data.Azr(Fy));YI.AcT(this.AI4);YI.AZH=this.AI5;YI.A5g=this.
AJb;YI.Y(this.Asl);YI.Ka=this.AJa;YI.A0(0x12);YI.A7.L(this.AI9);YI.HV(Cw);}YI.G(
A.aaN(YI.M,[(B=this.Av.Cv.M)[2]-B[0],this.Av.Cv.Gn]));}},BsP:function(H){var F;if(
!!this.Q){(F=this.Q,F[2].call(F[0],this.Av.FJ()));A.aat(this.Q,0);}A.ow([this,this.
AYq],this);},AYq:function(H){if(!this.Av){this.Brw(this);if(!this.Av)return;this.
Hd.Ci=0;this.Hd.BX=this.Av.ZU;this.Av.An(true);}else{this.Hd.Ci=this.Av.ZU;this.
Hd.BX=0;this.Av.An(false);}this.Hd.An(true);this.Av.Bfs(this.ZU<(this.Av.ANY()*this.
Av.AoI()));},Brw:function(H){var B;if(!this.Data)return;this.ZT=A._NewObject(C.AJ3
,0);this.Av=A._NewObject(C.AJl,0);this.Av.Bgw([this,this.BeR]);this.Av.Bgu([this
,this.BsP]);this.Av.Ac0(this.Gn);this.Av.I1(this.Data.Azn());this.Av.Il.L(this.AyH
);if(this.ZU>(this.Av.ANY()*this.Av.AoI()))this.AtE(this.Av.ANY()*this.Av.AoI());
this.Av.AtE(this.ZU);this.Av.HC.Fr=[0,this.ZU];this.Av.G(this.M);this.Av.An(false
);this.Av.Gp(this.Awe);var H7=this.HQ();if(!!H7){this.ZT.G([0,0,(B=H7.M)[2]-B[0]
,B[3]-B[1]]);this.ZT.Aq4=[this,this.AYq];this.ZT.J(this.Av,0);H7.J(this.ZT,0);H7.
S4(this.ZT);H7.AIH(this.ZT);}},AtE:function(E){if(this.ZU===E)return;this.ZU=E;if(
this.AJu<0)this.AJu=E;},Aw6:function(H){var B;if(!this.Av||!this.HQ())return;var
AFp=this.Br9(this);this.Av.G([].concat(AFp[0],this.Av.M.slice(1,4)));this.Av.G(A.
aaQ(this.Av.M,AFp[2]));this.Av.G(A.aaS(this.Av.M,AFp[3]));this.Av.G([].concat(this.
Av.M.slice(0,3),AFp[3]+this.Hd.AY));if((this.Av.M[3]>this.HQ().M[3])&&(this.Av.M[
3]!==((B=this.HQ().M)[3]-B[1])))this.Av.G([].concat(this.Av.M.slice(0,3),this.HQ(
).M[3]));if((this.Av.M[1]<this.HQ().M[1])&&(this.Av.M[3]!==((B=this.HQ().M)[3]-B[
1])))this.Av.G(A.aaS(this.Av.M,this.HQ().M[1]));},A$i:function(H){this.Jn.R(this.
Data.Azr(this.Awe));},AgG:function(H){if((!this.Av||!this.ZT)||!this.HQ())return;
if(!this.Av.A2y()){this.HQ().Ay7(this.ZT);this.HQ().HA(this.ZT);this.Av=null;}},
BqX:function(H){var B;if(!!this.Av&&(((this.M[0]!==this.Av.M[0])||(this.M[2]!==this.
Av.M[2]))||(this.M[3]!==this.Av.M[1])))this.Av.G([this.M[0],this.M[3],this.M[2],
this.M[3]+((B=this.Av.M)[3]-B[1])]);},AOq:function(E){this.Azh=E;this.Jn.Y(E);},
A3M:function(E){if(this.Asl===E)return;this.Asl=E;},A3x:function(E){this.AZZ=E;this.
AbT.L(E);},Be$:function(E){if(this.AI4===E)return;this.AI4=E;},Bfd:function(E){if(
this.AI9===E)return;this.AI9=E;},A3y:function(E){this.AZ0=E;this.Jn.L(E);},Bfe:function(
E){if(this.AJa===E)return;this.AJa=E;},Bfa:function(E){if(this.AI5===E)return;this.
AI5=E;},C1:function(H){var F;if(!!this.Q){this.Awe=(F=this.Q,F[1].call(F[0]));if(
!!this.Av)this.Av.Gp(this.Awe);this.A$i(this);}},Br9:function(Aml){var B;var B0=
Aml;var AFo=Aml.M;var AvM=Gv;while(!!B0){var Yw=B0.Hl;if(!B0.Aa&&(B0!==Aml)){B0.
Bc(AFo);return A.aam([0,0,(B=Aml.M)[2]-B[0],B[3]-B[1]],AvM);}if(!!Yw){if(((B=Yw.
PL)[0]>=B[2])||(B[1]>=B[3])){A.vv(B0,0);A.vv(Yw,0);}Yw.PL=A.vS(Yw.PL,AFo);}if(!((
B0.S&0x1)===0x1))return A.aam([0,0,(B=Aml.M)[2]-B[0],B[3]-B[1]],AvM);if(B0===Aml
)AFo=A.kz(A.aam(AFo,B0.M.slice(0,2)),B0.M);AvM=A.aak(AvM,B0.M.slice(0,2));B0=B0.
Aa;}return A.aam([0,0,(B=Aml.M)[2]-B[0],B[3]-B[1]],AvM);},Bff:function(E){if(this.
AJb===E)return;this.AJb=E;},Bcu:function(H){this.AtE(this.AJu);if(!!this.Av&&!!this.
Av.Cv)this.Av.Cv.ZL(0,this.Av.Cv.AN);if(!!this.Data)this.Jn.R(this.Data.Azr(this.
Awe));},Bfc:function(E){if(this.AyH===E)return;this.AyH=E;if(!!this.Av)this.Av.Il.
L(this.AyH);},Bfb:function(E){this.BaM=E;this.ZK.L(E);},_Init:function(aArg){A.Core.
O._Init.call(this,aArg);A.abh.M2._Init.call(this.AbT={I:this},0);A.abh.Text._Init.
call(this.Jn={I:this},0);A.Core.Bd._Init.call(this.Bd={I:this},0);A.abm.FE._Init.
call(this.Hd={I:this},0);A.abh.Am._Init.call(this.ZK={I:this},0);this.__proto__=
C.Ic;this.G(FN);this.AbT.AW(0x3F);this.AbT.G(FN);this.AbT.L(0xFF252528);this.Jn.
AW(0x3F);this.Jn.G(FN);this.Jn.R(A.jm);this.Bd.AW(0x3F);this.Bd.J$(Gv);this.Bd.J_(
Of);this.Bd.DL(Nr);this.Bd.D5(Kc);this.Hd.IG(1);this.Hd.FK(250);this.ZK.AW(0x3A);
this.ZK.G(Og);this.ZK.Ce(1);this.J(this.AbT,0);this.J(this.Jn,0);this.J(this.Bd,
0);this.J(this.ZK,0);this.AbT.At(A.zW(A.aby.ADs));this.Jn.Y(A.zW(A.eV.Au));this.
Bd.KF=[this,this.AYq];this.Hd.Rn=[this,this.AgG];this.Hd.Afn=[this,this.Aw6];this.
Azh=A.zW(A.eV.Au);this.Asl=A.zW(A.eV.Az);this.ZK.At(A.zW(A.abj.ANq));this.Init(aArg
);},_Done:function(){this.__proto__=A.Core.O;this.AbT._Done();this.Jn._Done();this.
Bd._Done();this.Hd._Done();this.ZK._Done();A.Core.O._Done.call(this);},_ReInit:function(
){A.Core.O._ReInit.call(this);this.AbT._ReInit();this.Jn._ReInit();this.Bd._ReInit(
);this.Hd._ReInit();this.ZK._ReInit();this.C6();},_Mark:function(D){var B;A.Core.
O._Mark.call(this,D);if((B=this.Data)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.
Av)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Azh)&&(B._cycle!=D))B._Mark(B.
_cycle=D);if((B=this.Asl)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.ZT)&&(B.
_cycle!=D))B._Mark(B._cycle=D);if((B=this.Q)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=
D);if((B=this.AbT)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Jn)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Bd)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Hd)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.ZK)._cycle!=D)B._Mark(B._cycle=D);},_className:
"DropDown::DropDown"};C.AJ3={Aq4:null,Bd:null,A$E:function(H){var B;(B=this.Aq4)?
B[1].call(B[0],this):null;},_Init:function(aArg){A.Core.O._Init.call(this,aArg);
A.Core.Bd._Init.call(this.Bd={I:this},0);this.__proto__=C.AJ3;this.G(ME);this.Bd.
AW(0x3F);this.Bd.J$(Gv);this.Bd.J_(Of);this.Bd.DL(Pd);this.Bd.D5(RO);this.J(this.
Bd,0);this.Bd.As1=[this,this.A$E];this.Bd.B2=[this,this.A$E];},_Done:function(){
this.__proto__=A.Core.O;this.Bd._Done();A.Core.O._Done.call(this);},_ReInit:function(
){A.Core.O._ReInit.call(this);this.Bd._ReInit();},_Mark:function(D){var B;A.Core.
O._Mark.call(this,D);if((B=this.Aq4)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((
B=this.Bd)._cycle!=D)B._Mark(B._cycle=D);},_className:"DropDown::EventCatcher"};
C._Init=function(){C.AyR.__proto__=A.Core.O;C.AJl.__proto__=A.Core.O;C.Ic.__proto__=
A.Core.O;C.AJ3.__proto__=A.Core.O;};C._ReInit=function(){};C.Dq=function(D){};return C;
})();

/* VitalControl demonstration application, © Urban GmbH & Co.KG 2023 */