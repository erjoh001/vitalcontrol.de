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
);if(index.aby)throw new Error("The unit file 'Demonstrator.js' included twice!"
);index.aby=(function(){var A=index;var C={};
var B4=[0,0,370,60];var BI=[360,0,370,60];var EH=[0,0,370,710];var Gv="Unknown animalType";
var I5=[58,10,120,50];var Iq=[0,0,60,60];var Oe=[120,0,360,60];var Pc="\u2015";var
Nq=[0,0,240,60];var Cw=[0,0,40,60];var FN=[100,0,130,60];var Of=[43,0,100,60];var
Nr=[125,0,240,60];var Kc=[0,0];var Og=[100,0];var ME=[100,60];var Pd=[0,60];var RO=[
107,0];var Tn=[240,0];var Vi=[240,60];var Vj=[107,60];var JV="%d.%m.%Y";var RP="Unhandled date unit: ";
var Vk=[0,0,200,180];var Vl=[36,0,200,30];var Yb=[0,30,160,60];var RQ="Text";var
Yc=[0,70,40,110];var Vm=[44,70,156,110];var To=[160,70,200,110];var Vn=[7,2,27,25
];var Qh=[0,30,170,180];var Vo=[170,34,190,57];var Ns=[0,0,40,40];var Pe=[0,40];
var Tp=[40,40];var Yd=[40,0];var Vp=[0,0,370,100];var Ye=[20,0,290,60];var Yf=[0
,60,370,100];var Vq="Cap";var Vr=[20,0,370,60];var RR=[310,0,370,60];var Yg=[370
,0];var Yh=[370,60];var AaK="UpdateData is called for the base class ListItemBase. Please make "+
"sure this method is implemented by a derived class.";var Qi=".";var AaL=[0,0,170
,150];var AdG=[0,59,170,90];var Yi=[110,0,170,150];var Vs=[0,30];var Yj=[50,0,100
,150];var AdH=[0,0,40,150];var KO=[0,0,370,240];var AaM=[0,60,370,710];var RS=[0
,60,370,120];var Nt=[0,120,370,180];var AlX=[0,180,370,240];var AlY=[370,120];var
JW=[0,120];var AlZ=[370,180];var Al0=[0,180];var Af0=[370,240];var AaN=[0,240];var
Yk=[0,0,50,60];var AuK=[50,0,100,60];var AuL=[100,10,370,50];var AuM="276000901234567";
var AuN="Unhandled temperature unit";var AiY=[110,0,260,60];var AuO=[235,10,370,
50];var AuP="39.5";var AdI=[0,0,270,40];var AdJ=[270,0];var Kd=[270,40];var AuQ=[
150,0,170,40];var Vt=[205,10,207,30];var AiZ=[0,0,370,40];var AuR=[50,0,320,40];
var AuS=" ";var AuT=[135,23];var Al1=[135,0];var AuU=[100,0,370,60];var Ap1="Error: Nullpointer Exception";
var Ke="Unknown Date Piecker Unit Index: ";
C.Background={_class:function(){return A.abj.Ai;},0:{FileName:"./res_index/DemonstratorBackground.png"
,Format:A.cC,NoOfFrames:1,FrameSize:[1000,740],FrameDelay:0,_this:null}};C.AIO={
_class:function(){return A.abj.Ai;},0:{FileName:"./res_index/DemonstratorButtonLeft.png"
,Format:A.cC,NoOfFrames:1,FrameSize:[40,40],FrameDelay:0,_this:null}};C.AIP={_class:
function(){return A.abj.Ai;},0:{FileName:"./res_index/DemonstratorButtonLeftPressed.png"
,Format:A.cC,NoOfFrames:1,FrameSize:[40,40],FrameDelay:0,_this:null}};C.AIQ={_class:
function(){return A.abj.Ai;},0:{FileName:"./res_index/DemonstratorButtonRight.png"
,Format:A.cC,NoOfFrames:1,FrameSize:[40,40],FrameDelay:0,_this:null}};C.AIR={_class:
function(){return A.abj.Ai;},0:{FileName:"./res_index/DemonstratorButtonRightPressed.png"
,Format:A.cC,NoOfFrames:1,FrameSize:[40,40],FrameDelay:0,_this:null}};C.ALL={_class:
function(){return A.abj.Ai;},0:{FileName:"./res_index/DemonstratorIconDatePicker.png"
,Format:A.cC,NoOfFrames:1,FrameSize:[20,23],FrameDelay:0,_this:null}};C.Filter={
_class:function(){return A.abj.Ai;},0:{FileName:"./res_index/DemonstratorFilter.png"
,Format:A.cC,NoOfFrames:1,FrameSize:[15,16],FrameDelay:0,_this:null}};C.ANf={_class:
function(){return A.abj.Ai;},0:{FileName:"./res_index/DemonstratorMenuIcon.png",
Format:A.cC,NoOfFrames:1,FrameSize:[20,16],FrameDelay:0,_this:null}};C.Ahg={_class:
function(){return A.abj.Ai;},0:{FileName:"./res_index/DemonstratorArrowRight.png"
,Format:A.cC,NoOfFrames:1,FrameSize:[17,16],FrameDelay:0,_this:null}};C.AIy={_class:
function(){return A.abj.Ai;},0:{FileName:"./res_index/DemonstratorArrowDown.png"
,Format:A.cC,NoOfFrames:1,FrameSize:[17,16],FrameDelay:0,_this:null}};C.Apy={_class:
function(){return A.abj.Ai;},0:{FileName:"./res_index/DemonstratorScanIcon.png",
Format:A.jt,NoOfFrames:2,FrameSize:[37,37],FrameDelay:0,_this:null}};C.AP_={_class:
function(){return A.abj.Ai;},0:{FileName:"./res_index/DemonstratorTemperatureIcon.png"
,Format:A.cC,NoOfFrames:1,FrameSize:[17,37],FrameDelay:0,_this:null}};C.AQz={Ab5:
null,AZ:null,AV:null,Background:null,HC:null,Av:null,Il:null,C4:null,KD:null,A1N:
null,A1_:0,Bh:function(aSize){A.abp.Menu.Bh.call(this,aSize);this.Il.G(A.aaS(this.
Il.M,this.Av.N8));this.Il.G([].concat(this.Il.M.slice(0,3),aSize[1]));},Ah:function(
Ae){var B;A.abp.Menu.Ah.call(this,Ae);var Gz=((Ae&0x40)===0x40);if(Gz&&(this.Av.
FM<0))this.Av.Gp(0);},Ne:function(E){if(this.KD===E)return;this.KD=E;this.Av.Ne(
E);},Bgq:function(E){var B;if(this.A1N===E)return;if(!!this.Ab5){this.HA(this.Ab5
);this.Ab5=null;}if(!!E){this.Ab5=(C.E2.isPrototypeOf(B=A._NewObject(E,0))?B:null
);this.Ab5.A3V([this,this.Afp]);this.Ab5.A3W([this,this.Afq]);this.Ab5.Bgv(null);
this.J(this.Ab5,0);this.Av.A32((B=this.Ab5.M)[3]-B[1]);}else this.Av.A32(0);this.
Il.G(A.aaS(this.Il.M,this.Av.N8));A.ow([this,this.FZ],this);this.A1N=E;},GH:function(
H){var B;var Fy=this.Av.IE;var Ab=(C.A$.isPrototypeOf(B=this.Av.B5)?B:null);if(!
Ab)return;Ab.XF(this.AZ);Ab.B8(Fy);Ab.XG(this.AV);Ab.G(A.aaN(Ab.M,[(B=this.Av.M)[
2]-B[0],this.Av.Gn]));},XF:function(E){var B;if(this.AZ===E)return;if(!!this.AZ){
A.zl([this,this.B8],this.AZ,0);A.zn([this,this.AlR],[B=this.AZ,B.Fd,B.Fg],0);}this.
AZ=E;if(!!E){A.y_([this,this.B8],E,0);A.za([this,this.AlR],[E,E.Fd,E.Fg],0);}A.ow([
this,this.B8],this);A.ow([this,this.AlR],this);},B8:function(H){if(!!this.AZ){this.
Av.I1(this.AZ.Cf());this.Av.ZL(0,this.Av.AN-1);}else this.Av.I1(0);if(this.A1_!==
this.Av.AN){this.Av.Aya(null,null);this.A1_=this.Av.AN;}A.ow([this,this.FZ],this
);},Afq:function(H){var B;this.G(A.aaL(this.M,(B=this.Av.AKA())[3]-B[1]));},Afp:
function(H){this.G(A.aaL(this.M,180));},A3h:function(H){var I_=(A.Core.B1.isPrototypeOf(
H)?H:null);var Fy=this.Av.FM;if(I_.CO===4)Fy=Fy-1;else if(I_.CO===5)Fy=Fy+1;else
if((I_.D8>=0x30)&&(I_.D8<=0x39))A._GetAutoObject(A.abq.Aht).FC(I_.D8);else if(I_.
CO===45)A._GetAutoObject(A.abq.Aht).Delete();else I_.PF=true;if((Fy<0)||(Fy>=this.
Av.AN))return;this.Av.Gp(Fy);this.BrL(Fy,true);},BrA:function(H){var Ab=(C.A$.isPrototypeOf(
H)?H:null);this.Av.Gp(Ab.Ho);},BrL:function(HD,AaX){var B;if((HD<0)||(HD>=this.Av.
AN))return;var AL=this.Av.An9(HD,HD);var Ba=this.Av.M;Ba=A.aaS(Ba,(B=this.Av.AKA(
))[3]-B[1]);Ba=A.aaL(Ba,(((B=this.Av.M)[3]-B[1])-((B=this.Av.AKA())[3]-B[1]))-((
B=this.Av.Bb8())[3]-B[1]));var KZ=A.kz(AL,Ba);if((!AaX&&!((KZ[0]>=KZ[2])||(KZ[1]>=
KZ[3])))||(AaX&&A.z9(KZ,AL)))return;var Bj=0;if(AL[3]>Ba[3])Bj=AL[3]-Ba[3];if(Bj>(
AL[1]-Ba[1]))Bj=(AL[3]-Ba[1])-this.Av.Gn;this.Av.Go(this.Av.Br-Bj);},AlR:function(
H){this.Av.Gp(-1);},FZ:function(H){var B;this.Il.N2(this.Av.Gn*this.Av.AN);this.
Il.N6(((B=this.Av.M)[3]-B[1])-this.Av.N8);this.Il.N4(-this.Av.Br);},_Init:function(
aArg){A.abp.Menu._Init.call(this,aArg);A.abh.AH._Init.call(this.Background={I:this
},0);A.Core.HC._Init.call(this.HC={I:this},0);A.Core.Cv._Init.call(this.Av={I:this
},0);A.kh.AE._Init.call(this.Il={I:this},0);A.Core.B1._Init.call(this.C4={I:this
},0);this.__proto__=C.AQz;this.G(B4);this.Background.AW(0x3);this.Background.G(B4
);this.HC.AW(0x3F);this.HC.G(B4);this.Av.AW(0x3F);this.Av.G(B4);this.Av.Ac0(60);
this.Av.I1(0);this.Av.Ne(this.KD);this.Il.AW(0x3A);this.Il.G(BI);this.Il.L(0xFF808080
);this.J(this.Background,0);this.J(this.HC,0);this.J(this.Av,0);this.J(this.Il,0
);this.Av.Eu=[this,this.FZ];this.Av.GH=[this,this.GH];this.Av.AtQ(this.HC);this.
AV=[this,this.BrA];this.C4.B2=[this,this.A3h];this.C4.Ea=[this,this.A3h];},_Done:
function(){this.__proto__=A.abp.Menu;this.Background._Done();this.HC._Done();this.
Av._Done();this.Il._Done();this.C4._Done();A.abp.Menu._Done.call(this);},_ReInit:
function(){A.abp.Menu._ReInit.call(this);this.Background._ReInit();this.HC._ReInit(
);this.Av._ReInit();this.Il._ReInit();this.C4._ReInit();},_Mark:function(D){var B;
A.abp.Menu._Mark.call(this,D);if((B=this.Ab5)&&(B._cycle!=D))B._Mark(B._cycle=D);
if((B=this.AZ)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.AV)&&((B=B[0])._cycle
!=D))B._Mark(B._cycle=D);if((B=this.Background)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.HC)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Av)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Il)._cycle!=D)B._Mark(B._cycle=D);if((B=this.C4)._cycle!=D)B._Mark(
B._cycle=D);},_className:"Demonstrator::VerticalMenu"};C.APG={F_:null,AH:null,CT:
null,Init:function(aArg){var B;A.za([this,this.Ix],[B=A._GetAutoObject(A.abq.K6)
,B.A2W,B.A3$],0);A.ow([this,this.Ix],this);},Z9:function(E){if(this.F_===E)return;
if(!!this.F_)this.HA(this.F_);this.F_=E;if(!!this.F_)this.J(this.F_,0);this.A8(E
);this.AlD(E,this.CT);this.Al();},Ix:function(H){var B;if(!!A._GetAutoObject(A.abq.
K6).ApB)this.Z9((C.AfK.isPrototypeOf(B=A._NewObject(A._GetAutoObject(A.abq.K6).ApB
,0))?B:null));else this.Z9(null);},_Init:function(aArg){A.Core.O._Init.call(this
,aArg);A.abh.AH._Init.call(this.AH={I:this},0);A.abh.CT._Init.call(this.CT={I:this
},0);this.__proto__=C.APG;this.G(EH);this.AH.AW(0x3F);this.AH.G(EH);this.CT.G(EH
);this.CT.L(0xFF000000);this.J(this.AH,0);this.J(this.CT,0);this.Init(aArg);},_Done:
function(){this.__proto__=A.Core.O;this.AH._Done();this.CT._Done();A.Core.O._Done.
call(this);},_ReInit:function(){A.Core.O._ReInit.call(this);this.AH._ReInit();this.
CT._ReInit();},_Mark:function(D){var B;A.Core.O._Mark.call(this,D);if((B=this.F_
)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.AH)._cycle!=D)B._Mark(B._cycle=D
);if((B=this.CT)._cycle!=D)B._Mark(B._cycle=D);},_className:"Demonstrator::SelectionArea"
};C.AIg={Aeo:0,R7:0,Background:null,T:null,Ahc:null,AbM:null,V6:null,AbN:null,LD:
null,Lr:false,Kq:false,Ah:function(Ae){var B;C.A$.Ah.call(this,Ae);var FV=((Ae&0x10
)===0x10);var Fx=((Ae&0x20)===0x20);var Gz=((Ae&0x40)===0x40);if(!FV){this.Background.
L(0xFFAAAAAA);this.T.L(0xFF888888);this.LD.An(false);this.LD.W(false);}else if(Gz
){this.Background.L(A.iF.A6);this.T.L(A.iF.Be);this.LD.An(true);this.LD.W(true);
}else if(Fx){this.Background.L(0xFFE6DED8);this.T.L(0xFF000000);this.LD.An(true);
this.LD.W(true);}else{this.Background.L(0xFFFFFFFF);this.T.L(0xFF000000);this.LD.
An(false);this.LD.W(false);}if(!this.Kq&&Fx)A._GetAutoObject(A.abq.K6).Nf(this.Aeo
);this.LD.Bgs(this.R7>0);this.LD.BgR(this.Aeo>0);this.Lr=FV;this.Kq=Fx;},B8:function(
Z){if(!this.AZ){this.V6.At(A.zW(A.abi.Acq));this.AbM.L(A.iF.Adz);return;}this.Ho=
Z;if(!!this.AZ){this.R7=this.AZ.LQ(Z,26);this.Aeo=this.AZ.LQ(Z,22);var Oy=this.AZ.
Cq(Z,1);var AjE=this.AZ.Hs(Z,11);var Ajv=this.AZ.ID(Z,17);var K1=this.AZ.ID(Z,13
);var HH=this.AZ.AkL(Z,14);this.T.R(Oy.toFixed());var VF=A._GetAutoObject(A.Device.
Helper).AH8(K1,AjE,Ajv);switch(HH){case 0:this.V6.At(A.zW(A.abi.Acq));break;case
1:this.V6.At(A.zW(A.abi.AsC));break;case 2:this.V6.At(A.zW(A.abi.AsF));break;default:
A.aa8("%s%e",Gv,HH);}this.AbN.At(this.V6.Ai);this.AbM.L(A._GetAutoObject(A.abk.Assessment
).Pq(VF));this.Al();}},_Init:function(aArg){C.A$._Init.call(this,aArg);A.abh.AH.
_Init.call(this.Background={I:this},0);A.kh.CG._Init.call(this.T={I:this},0);A.abh.
Am._Init.call(this.Ahc={I:this},0);A.abh.Am._Init.call(this.AbM={I:this},0);A.abh.
Am._Init.call(this.V6={I:this},0);A.abh.Am._Init.call(this.AbN={I:this},0);C.LD.
_Init.call(this.LD={I:this},0);this.__proto__=C.AIg;this.Background.AW(0x3F);this.
Background.G(B4);this.T.AW(0x3F);this.T.G(I5);this.T.R(A.z2(A.abg.Hu));this.T.A0(
0x11);this.T.L(0xFF000000);this.Ahc.G(Iq);this.Ahc.L(A.iF.Text);this.AbM.G(Iq);this.
AbM.L(A.iF.E1);this.V6.G(Iq);this.AbN.G(Iq);this.AbN.L(A.iF.Text);this.AbN.Ce(1);
this.LD.AW(0x3);this.LD.G(Oe);this.J(this.Background,0);this.J(this.T,0);this.J(
this.Ahc,0);this.J(this.AbM,0);this.J(this.V6,0);this.J(this.AbN,0);this.J(this.
LD,0);this.T.Y(A.zW(A.eV.Au));this.T.By(A.zW(A.eV.Az));this.T.C5(A.zW(A.eV.Cr));
this.Ahc.At(A.zW(C.ADs));this.AbM.At(A.zW(C.AQR));this.V6.At(A.zW(A.abi.Acq));this.
AbN.At(A.zW(A.abi.Acq));},_Done:function(){this.__proto__=C.A$;this.Background._Done(
);this.T._Done();this.Ahc._Done();this.AbM._Done();this.V6._Done();this.AbN._Done(
);this.LD._Done();C.A$._Done.call(this);},_ReInit:function(){C.A$._ReInit.call(this
);this.Background._ReInit();this.T._ReInit();this.Ahc._ReInit();this.AbM._ReInit(
);this.V6._ReInit();this.AbN._ReInit();this.LD._ReInit();},_Mark:function(D){var
B;C.A$._Mark.call(this,D);if((B=this.Background)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.T)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ahc)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.AbM)._cycle!=D)B._Mark(B._cycle=D);if((B=this.V6)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.AbN)._cycle!=D)B._Mark(B._cycle=D);if((B=this.LD)._cycle!=
D)B._Mark(B._cycle=D);},_className:"Demonstrator::AnimalMenuItem"};C.LD={S5:null
,UW:null,AiL:null,MB:null,Nm:null,XT:null,Aau:null,AsZ:false,Aux:false,C6:function(
){this.Al();},Ah:function(Ae){var B;A.Core.O.Ah.call(this,Ae);var Gz=((Ae&0x40)===
0x40);if(Gz){this.MB.L(A.iF.Be);this.Nm.L(A.iF.Be);}else{this.MB.L(A.iF.Text);this.
Nm.L(A.iF.Text);}if(this.Aux){this.MB.R(A.z2(A.abg.BhN));if(this.AsZ){this.S5.At(
A.zW(C.ADc));this.UW.At(A.zW(C.ADc));}else{this.S5.At(A.zW(C.Apy));this.UW.At(A.
zW(C.Apy));}}else if(this.AsZ){this.S5.At(A.zW(C.Ay4));this.UW.At(A.zW(C.Ay4));this.
MB.R(Pc);}var AYi=this.Aux||this.AsZ;this.S5.W(AYi);this.UW.W(AYi);this.MB.W(AYi
);this.XT.An(this.Aux);},BgR:function(E){if(this.Aux===E)return;this.Aux=E;this.
Al();},Bgs:function(E){if(this.AsZ===E)return;this.AsZ=E;this.Al();},_Init:function(
aArg){A.Core.O._Init.call(this,aArg);A.abh.Am._Init.call(this.S5={I:this},0);A.abh.
Am._Init.call(this.UW={I:this},0);A.abh.Am._Init.call(this.AiL={I:this},0);A.kh.
CG._Init.call(this.MB={I:this},0);A.kh.CG._Init.call(this.Nm={I:this},0);A.Core.
Bd._Init.call(this.XT={I:this},0);A.Core.Bd._Init.call(this.Aau={I:this},0);this.
__proto__=C.LD;var B;this.G(Nq);this.S5.AW(0x6);this.S5.G(Cw);this.S5.L(A.iF.CR);
this.S5.Ce(1);this.UW.AW(0x6);this.UW.G(Cw);this.UW.L(A.iF.Text);this.AiL.AW(0xE
);this.AiL.G(FN);this.MB.AW(0x7);this.MB.G(Of);this.MB.A0(0x11);this.MB.L(0xFF000000
);this.Nm.AW(0x3);this.Nm.G(Nr);this.Nm.R(A.z2(A.abg.Temperature));this.Nm.A0(0x11
);this.Nm.L(0xFF000000);this.XT.AW(0x3);this.XT.J$(Kc);this.XT.J_(Og);this.XT.DL(
ME);this.XT.D5(Pd);this.Aau.AW(0x3);this.Aau.J$(RO);this.Aau.J_(Tn);this.Aau.DL(
Vi);this.Aau.D5(Vj);this.J(this.S5,0);this.J(this.UW,0);this.J(this.AiL,0);this.
J(this.MB,0);this.J(this.Nm,0);this.J(this.XT,0);this.J(this.Aau,0);this.S5.At(A.
zW(C.Apy));this.UW.At(A.zW(C.Apy));this.AiL.At(A.zW(C.AP_));this.MB.Y(A.zW(A.eV.
Au));this.MB.By(A.zW(A.eV.Az));this.MB.C5(A.zW(A.eV.Cr));this.Nm.Y(A.zW(A.eV.Au)
);this.Nm.By(A.zW(A.eV.Az));this.Nm.C5(A.zW(A.eV.Cr));this.XT.KF=[B=A._GetAutoObject(
A.abq.K6),B.A_j];this.Aau.KF=[B=A._GetAutoObject(A.abq.K6),B.A98];},_Done:function(
){this.__proto__=A.Core.O;this.S5._Done();this.UW._Done();this.AiL._Done();this.
MB._Done();this.Nm._Done();this.XT._Done();this.Aau._Done();A.Core.O._Done.call(
this);},_ReInit:function(){A.Core.O._ReInit.call(this);this.S5._ReInit();this.UW.
_ReInit();this.AiL._ReInit();this.MB._ReInit();this.Nm._ReInit();this.XT._ReInit(
);this.Aau._ReInit();this.Nm.R(A.z2(A.abg.Temperature));this.MB.Y(A.zW(A.eV.Au));
this.MB.By(A.zW(A.eV.Az));this.MB.C5(A.zW(A.eV.Cr));this.Nm.Y(A.zW(A.eV.Au));this.
Nm.By(A.zW(A.eV.Az));this.Nm.C5(A.zW(A.eV.Cr));this.C6();},_Mark:function(D){var
B;A.Core.O._Mark.call(this,D);if((B=this.S5)._cycle!=D)B._Mark(B._cycle=D);if((B=
this.UW)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AiL)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.MB)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Nm)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.XT)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Aau)._cycle!=
D)B._Mark(B._cycle=D);},_className:"Demonstrator::AnimalItemAction"};C.WG={C6:function(
){this.Al();},Ah:function(Ae){C.Aop.Ah.call(this,Ae);if(!this.Text.String.length
)this.Text.R(A.z2(A.abg.Filter));},A2f:function(H){var DI=(A.Core.B1.isPrototypeOf(
H)?H:null);if(!!DI)A._GetAutoObject(A.abq.Aht).FC(DI.D8);},A2e:function(H){A._GetAutoObject(
A.abq.Aht).Delete();},_Init:function(aArg){C.Aop._Init.call(this,aArg);this.__proto__=
C.WG;this.Am.At(A.zW(C.Filter));},_ReInit:function(){C.Aop._ReInit.call(this);this.
C6();},_className:"Demonstrator::FilterView"};C.Zm={D6:null,Wz:null,Q1:null,WA:null
,Ic:null,WX:null,Akx:null,Ap:null,On:null,Mm:null,Zl:null,G_:0,AsM:0,ACg:false,Ah:
function(Ae){A.Core.O.Ah.call(this,Ae);this.Q1.R(this.Ap.Format(JV));if(this.ACg
){this.Q1.W(false);this.WX.W(false);this.Ic.W(false);this.WA.W(false);this.On.An(
true);this.On.W(true);this.Mm.Ce(2);this.Mm.AOG(2);this.Mm.G(A.aaP(this.Mm.M,this.
On.M[2]));}else{this.Q1.W(true);this.WX.W(true);this.Ic.W(true);this.WA.W(true);
this.On.An(false);this.On.W(false);this.Mm.Ce(3);this.Mm.AOG(3);this.Mm.G(A.aaP(
this.Mm.M,this.Q1.M[2]));}},Btn:function(H){this.Bgx(!this.ACg);},Abq:function(H
){var F;if(!!this.D6)this.XE((F=this.D6,F[1].call(F[0])));},Ac2:function(E){if(A.
z_(this.D6,E))return;if(!!this.D6)A.zn([this,this.Abq],this.D6,0);this.D6=E;if(!
!E)A.za([this,this.Abq],E,0);if(!!E)A.ow([this,this.Abq],this);},XE:function(E){
if(this.G_===E)return;this.G_=E;this.Ap.Initialize(this.G_);this.Buo(this);this.
Al();},Agy:function(H){var B;var F;var BR=this.G_;var Ag1=this.Zl.Dd(this.AsM);this.
AFs(Ag1);if(this.Ap.Year>2100)this.Ap.Initialize2(2100,12,31,0,0,0);this.XE(((B=(
this.Ap.JN()|0))<0)?B+0x100000000:B);if(this.G_!==BR){if(!!this.D6)(F=this.D6,F[
2].call(F[0],this.G_));A.aat(this.D6,0);}},Agk:function(H){var B;var F;var BR=this.
G_;var Ag1=this.Zl.Dd(this.AsM);this.AG8(Ag1);if(this.Ap.Year<2000)this.Ap.Initialize2(
2000,1,1,0,0,0);this.XE(((B=(this.Ap.JN()|0))<0)?B+0x100000000:B);if(this.G_!==BR
){if(!!this.D6)(F=this.D6,F[2].call(F[0],this.G_));A.aat(this.D6,0);}},Bf_:function(
E){if(this.AsM===E)return;this.AsM=E;},Bgx:function(E){if(this.ACg===E)return;this.
ACg=E;this.Al();},BtW:function(H){var B;var F;var BR=this.G_;this.Ap.Le(this.On.
AAQ());this.Ap.UT(this.On.AAU());this.Ap.Year=this.On.AoM();this.XE(((B=(this.Ap.
JN()|0))<0)?B+0x100000000:B);if(this.G_!==BR){if(!!this.D6)(F=this.D6,F[2].call(
F[0],this.G_));A.aat(this.D6,0);}},Buo:function(H){this.On.Le(this.Ap.GD);this.On.
UT(this.Ap.GF);this.On.Ait(this.Ap.Year);},AFs:function(AvK){var B;switch(AvK){case
0:if(this.Ap.GD<this.Ap.Z5())this.Ap.Le(this.Ap.GD+1);else{this.Ap.Le(1);this.AFs(
2);}break;case 1:if((this.Ap.GD+7)<=this.Ap.Z5())this.Ap.Le(this.Ap.GD+7);else{this.
Ap.Le((7-this.Ap.Z5())+this.Ap.GD);this.AFs(2);}break;case 2:if(this.Ap.GF<12)this.
Ap.UT(this.Ap.GF+1);else{this.Ap.UT(1);this.AFs(3);}break;case 3:this.Ap.Year++;
break;default:throw new Error(RP+AvK.toFixed());}},AG8:function(AvK){var B;switch(
AvK){case 0:if(this.Ap.GD>1)this.Ap.Le(this.Ap.GD-1);else{this.AG8(2);this.Ap.Le(
this.Ap.Z5());}break;case 1:if((this.Ap.GD-7)>0)this.Ap.Le(this.Ap.GD-7);else{this.
AG8(2);this.Ap.Le(this.Ap.Z5()-(7-this.Ap.GD));}break;case 2:if(this.Ap.GF>1)this.
Ap.UT(this.Ap.GF-1);else{this.Ap.UT(12);this.AG8(3);}break;case 3:this.Ap.Year--;
break;default:throw new Error(RP+AvK.toFixed());}},Bee:function(){return this.AsM;
},_Init:function(aArg){A.Core.O._Init.call(this,aArg);A.abh.Text._Init.call(this.
Wz={I:this},0);A.abh.Text._Init.call(this.Q1={I:this},0);C.AsA._Init.call(this.WA={
I:this},0);A.abx.Ic._Init.call(this.Ic={I:this},0);C.AsA._Init.call(this.WX={I:this
},0);A.abh.Am._Init.call(this.Akx={I:this},0);A.Core.Bp._Init.call(this.Ap={I:this
},0);C.AJq._Init.call(this.On={I:this},0);C.AsA._Init.call(this.Mm={I:this},0);C.
Zl._Init.call(this.Zl={I:this},0);this.__proto__=C.Zm;this.G(Vk);this.Wz.G(Vl);this.
Wz.A0(0x11);this.Wz.R(A.z2(A.abg.Date));this.Wz.L(0xFF000000);this.Q1.G(Yb);this.
Q1.A0(0x11);this.Q1.R(RQ);this.Q1.L(0xFF000000);this.WA.G(Yc);this.WA.A3O(200);this.
Ic.G(Vm);this.Ic.AtE(120);this.Ic.Gn=30;this.Ic.A3x(A.iF.CR);this.Ic.Be$(A.iF.CR
);this.Ic.Bfd(A.iF.CR);this.Ic.A3y(A.iF.Text);this.Ic.Bfe(A.iF.Text);this.Ic.Bfa(
A.iF.A6);this.Ic.Bff(A.iF.Be);this.Ic.Bfc(A.iF.A6);this.Ic.Bfb(A.iF.Text);this.WX.
G(To);this.WX.A3O(200);this.Akx.G(Vn);this.On.G(Qh);this.Mm.G(Vo);this.Mm.Ce(3);
this.Mm.AOG(3);this.Mm.L(A.iF.Text);this.J(this.Wz,0);this.J(this.Q1,0);this.J(this.
WA,0);this.J(this.Ic,0);this.J(this.WX,0);this.J(this.Akx,0);this.J(this.On,0);this.
J(this.Mm,0);this.Wz.Y(A.zW(A.eV.Az));this.Q1.Y(A.zW(A.eV.Gk));this.WA.AV=[this,
this.Agk];this.WA.DB(A.zW(C.AIO));this.WA.AOH(A.zW(C.AIP));this.Ic.AD([this,this.
Bee,this.Bf_]);this.Ic.Bfk(this.Zl);this.Ic.AOq(A.zW(A.eV.Az));this.Ic.A3M(A.zW(
A.eV.Az));this.WX.AV=[this,this.Agy];this.WX.DB(A.zW(C.AIQ));this.WX.AOH(A.zW(C.
AIR));this.Akx.At(A.zW(C.ALL));this.On.C_=[this,this.BtW];this.Mm.AV=[this,this.
Btn];this.Mm.DB(A.zW(A.abi.Ako));this.Mm.AOH(A.zW(A.abi.Ako));},_Done:function(){
this.__proto__=A.Core.O;this.Wz._Done();this.Q1._Done();this.WA._Done();this.Ic.
_Done();this.WX._Done();this.Akx._Done();this.Ap._Done();this.On._Done();this.Mm.
_Done();this.Zl._Done();A.Core.O._Done.call(this);},_ReInit:function(){A.Core.O.
_ReInit.call(this);this.Wz._ReInit();this.Q1._ReInit();this.WA._ReInit();this.Ic.
_ReInit();this.WX._ReInit();this.Akx._ReInit();this.Ap._ReInit();this.On._ReInit(
);this.Mm._ReInit();this.Zl._ReInit();this.Wz.R(A.z2(A.abg.Date));this.Wz.Y(A.zW(
A.eV.Az));this.Q1.Y(A.zW(A.eV.Gk));this.Ic.AOq(A.zW(A.eV.Az));this.Ic.A3M(A.zW(A.
eV.Az));},_Mark:function(D){var B;A.Core.O._Mark.call(this,D);if((B=this.D6)&&((
B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.Wz)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Q1)._cycle!=D)B._Mark(B._cycle=D);if((B=this.WA)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Ic)._cycle!=D)B._Mark(B._cycle=D);if((B=this.WX)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.Akx)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ap
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.On)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Mm)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Zl)._cycle!=D)B._Mark(B._cycle=
D);},_className:"Demonstrator::DateSelector"};C.AsA={CP:null,At8:null,AJD:null,AV:
null,Bi:null,C4:null,CK:null,GT:null,WS:null,ALp:0,Sv:0,APg:0,AM:0xFFFFFFFF,AWQ:
false,Lr:false,Kq:false,QC:false,Ah:function(Ae){var B;A.abp.AfD.Ah.call(this,Ae
);var FV=((Ae&0x10)===0x10);var Fx=((Ae&0x20)===0x20);var Fw=this.CK.Down&&this.
CK.W0;if(!FV)this.GT.At(this.AJD);else if(Fw){this.GT.At(this.At8);this.GT.Ce(this.
APg);}else{this.GT.At(this.CP);this.GT.Ce(this.Sv);}this.GT.L(this.AM);this.Lr=FV;
this.Kq=Fx;this.QC=Fw;},Ps:function(H){this.Al();A.ow(this.AV,this);},AgH:function(
H){if(this.CK.Down)return;if(this.C4.Aan)return;this.Al();if(this.Bi.Bw){A.ow(this.
AV,this);this.Bi.An(false);}this.Bi.An(true);},A94:function(H){this.Al();},Axa:function(
H){if(!this.CK.W0)return;if(this.CK.MT)return;if((this.WS.T4<=0)||(this.CK.IW<this.
WS.T4)){if(this.CK.IW>=this.Bi.T4)A.ow(this.AV,this);else this.Bi.An(true);}this.
WS.An(false);},Aw$:function(H){this.WS.An(true);if(this.Bi.Bw){A.ow(this.AV,this
);this.Bi.An(false);}},DB:function(E){if(this.CP===E)return;this.CP=E;this.Al();
},AOH:function(E){if(this.At8===E)return;this.At8=E;this.Al();},AXD:function(H){
if(!this.CK.W0)return;if(this.CK.MT)return;if((this.ALp>=0)&&this.AWQ){this.AWQ=
false;this.WS.An(true);A.ow(this.AV,this);}},A3O:function(E){if(this.ALp===E)return;
this.ALp=E;this.WS.UR(E);},BsS:function(H){this.AWQ=true;},Ce:function(E){if(this.
Sv===E)return;this.Sv=E;this.Al();},AOG:function(E){if(this.APg===E)return;this.
APg=E;this.Al();},L:function(E){if(this.AM===E)return;this.AM=E;this.Al();},_Init:
function(aArg){A.abp.AfD._Init.call(this,aArg);A.Core.Timer._Init.call(this.Bi={
I:this},0);A.Core.B1._Init.call(this.C4={I:this},0);A.Core.Bd._Init.call(this.CK={
I:this},0);A.abh.Am._Init.call(this.GT={I:this},0);A.Core.Timer._Init.call(this.
WS={I:this},0);this.__proto__=C.AsA;this.G(Ns);this.Bi.P4(0);this.Bi.UR(50);this.
C4.Filter=149;this.CK.AW(0x3F);this.CK.J$(Pe);this.CK.J_(Tp);this.CK.DL(Yd);this.
CK.D5(Kc);this.CK.Adf=0xF;this.CK.ABA(100);this.GT.AW(0x3F);this.GT.G(Ns);this.GT.
A0(0x12);this.WS.P4(0);this.J(this.CK,0);this.J(this.GT,0);this.Bi.Mz=[this,this.
Ps];this.C4.B2=[this,this.AgH];this.CK.AA0=[this,this.A94];this.CK.As1=[this,this.
A94];this.CK.Ea=[this,this.AXD];this.CK.KF=[this,this.Axa];this.CK.B2=[this,this.
Aw$];this.GT.At(A.zW(A.abj.J6));this.CP=A.zW(A.abj.J6);this.At8=A.zW(A.abj.J6);this.
AJD=A.zW(A.abj.J6);this.WS.Mz=[this,this.BsS];},_Done:function(){this.__proto__=
A.abp.AfD;this.Bi._Done();this.C4._Done();this.CK._Done();this.GT._Done();this.WS.
_Done();A.abp.AfD._Done.call(this);},_ReInit:function(){A.abp.AfD._ReInit.call(this
);this.Bi._ReInit();this.C4._ReInit();this.CK._ReInit();this.GT._ReInit();this.WS.
_ReInit();},_Mark:function(D){var B;A.abp.AfD._Mark.call(this,D);if((B=this.CP)&&(
B._cycle!=D))B._Mark(B._cycle=D);if((B=this.At8)&&(B._cycle!=D))B._Mark(B._cycle=
D);if((B=this.AJD)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.AV)&&((B=B[0]).
_cycle!=D))B._Mark(B._cycle=D);if((B=this.Bi)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.C4)._cycle!=D)B._Mark(B._cycle=D);if((B=this.CK)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.GT)._cycle!=D)B._Mark(B._cycle=D);if((B=this.WS)._cycle!=D)B._Mark(
B._cycle=D);},_className:"Demonstrator::IconButton"};C.AIv={OM:null,T:null,Acg:null
,_Init:function(aArg){C.E2._Init.call(this,aArg);A.abh.AH._Init.call(this.OM={I:
this},0);A.abh.Text._Init.call(this.T={I:this},0);C.Acg._Init.call(this.Acg={I:this
},0);this.__proto__=C.AIv;this.G(Vp);this.OM.AW(0x1D);this.OM.G(B4);this.OM.L(0xFFE6E6E6
);this.T.AW(0x1D);this.T.G(Ye);this.T.A0(0x11);this.T.R(A.z2(A.abg.AZj));this.T.
L(0xFF000000);this.Acg.G(Yf);this.J(this.OM,0);this.J(this.T,0);this.J(this.Acg,
0);this.T.Y(A.zW(A.eV.Au));},_Done:function(){this.__proto__=C.E2;this.OM._Done(
);this.T._Done();this.Acg._Done();C.E2._Done.call(this);},_ReInit:function(){C.E2.
_ReInit.call(this);this.OM._ReInit();this.T._ReInit();this.Acg._ReInit();this.T.
R(A.z2(A.abg.AZj));this.T.Y(A.zW(A.eV.Au));},_Mark:function(D){var B;C.E2._Mark.
call(this,D);if((B=this.OM)._cycle!=D)B._Mark(B._cycle=D);if((B=this.T)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.Acg)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Demonstrator::AnimalsHeader"};C.ArA={OM:null,T:null,AcL:null,AcG:null,Bd:null,Dn:
Vq,Ah9:false,Ah:function(Ae){C.E2.Ah.call(this,Ae);if(this.Ah9){this.AcG.W(true);
this.AcL.W(false);}else{this.AcG.W(false);this.AcL.W(true);}},BtJ:function(H){if(
this.Ah9)A.ow(this.Afp,this);else A.ow(this.Afq,this);this.ABC(!this.Ah9);},U:function(
E){if(this.Dn===E)return;this.Dn=E;this.T.R(E);},ABC:function(E){if(this.Ah9===E
)return;this.Ah9=E;this.Al();},_Init:function(aArg){C.E2._Init.call(this,aArg);A.
abh.AH._Init.call(this.OM={I:this},0);A.abh.Text._Init.call(this.T={I:this},0);A.
abh.Am._Init.call(this.AcL={I:this},0);A.abh.Am._Init.call(this.AcG={I:this},0);
A.Core.Bd._Init.call(this.Bd={I:this},0);this.__proto__=C.ArA;this.G(B4);this.OM.
AW(0x1D);this.OM.G(B4);this.OM.L(0xFFE6E6E6);this.T.AW(0x1D);this.T.G(Vr);this.T.
A0(0x11);this.T.R(Vq);this.T.L(0xFF000000);this.AcL.G(RR);this.AcL.W(false);this.
AcG.AW(0x3A);this.AcG.G(RR);this.Bd.J$(Kc);this.Bd.J_(Yg);this.Bd.DL(Yh);this.Bd.
D5(Pd);this.J(this.OM,0);this.J(this.T,0);this.J(this.AcL,0);this.J(this.AcG,0);
this.J(this.Bd,0);this.T.Y(A.zW(A.eV.Au));this.AcL.At(A.zW(C.AIy));this.AcG.At(A.
zW(C.Ahg));this.Bd.KF=[this,this.BtJ];},_Done:function(){this.__proto__=C.E2;this.
OM._Done();this.T._Done();this.AcL._Done();this.AcG._Done();this.Bd._Done();C.E2.
_Done.call(this);},_ReInit:function(){C.E2._ReInit.call(this);this.OM._ReInit();
this.T._ReInit();this.AcL._ReInit();this.AcG._ReInit();this.Bd._ReInit();this.T.
Y(A.zW(A.eV.Au));},_Mark:function(D){var B;C.E2._Mark.call(this,D);if((B=this.OM
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.T)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.AcL)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AcG)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Bd)._cycle!=D)B._Mark(B._cycle=D);},_className:"Demonstrator::AccordionHeader"
};C.A$={AZ:null,AV:null,CK:null,Ho:-1,XF:function(E){if(this.AZ===E)return;this.
AZ=E;},B8:function(Z){A.aa8("%s",AaK);},XG:function(E){if(A.z$(this.AV,E))return;
this.AV=E;},Axa:function(H){if(!this.CK.W0)return;if(this.CK.MT)return;A.ow(this.
AV,this);},_Init:function(aArg){A.Core.O._Init.call(this,aArg);A.Core.Bd._Init.call(
this.CK={I:this},0);this.__proto__=C.A$;this.G(B4);this.CK.AW(0x3F);this.CK.J$(Pd
);this.CK.J_(Yh);this.CK.DL(Yg);this.CK.D5(Kc);this.CK.Adf=0xF;this.CK.ABA(100);
this.J(this.CK,0);this.CK.KF=[this,this.Axa];},_Done:function(){this.__proto__=A.
Core.O;this.CK._Done();A.Core.O._Done.call(this);},_ReInit:function(){A.Core.O._ReInit.
call(this);this.CK._ReInit();},_Mark:function(D){var B;A.Core.O._Mark.call(this,
D);if((B=this.AZ)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.AV)&&((B=B[0])._cycle
!=D))B._Mark(B._cycle=D);if((B=this.CK)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Demonstrator::ListItem"};C.E2={ANJ:null,Afq:null,Afp:null,Bgv:function(E){if(A.
z$(this.ANJ,E))return;this.ANJ=E;},A3W:function(E){if(A.z$(this.Afq,E))return;this.
Afq=E;},A3V:function(E){if(A.z$(this.Afp,E))return;this.Afp=E;},_Init:function(aArg
){A.Core.O._Init.call(this,aArg);this.__proto__=C.E2;this.G(B4);},_Mark:function(
D){var B;A.Core.O._Mark.call(this,D);if((B=this.ANJ)&&((B=B[0])._cycle!=D))B._Mark(
B._cycle=D);if((B=this.Afq)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.
Afp)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);},_className:"Demonstrator::ListHeader"
};C.AJq={C_:null,Za:null,U_:null,U9:null,U8:null,Mw:null,Mv:null,J8:null,Lr:false
,Kq:false,Buv:false,Ah:function(Ae){var B;A.abp.AfB.Ah.call(this,Ae);var FV=((Ae&
0x10)===0x10);var Fx=((Ae&0x20)===0x20);var A8$=(this.U8.XY||this.U9.XY)||this.U_.
XY;if(A8$)this.Za.L(A.iF.Text);else this.Za.L(A.iF.A7);this.Lr=FV;this.Kq=Fx;this.
Buv=A8$;},Aw7:function(H){this.Al();if((!this.U8.XY&&!this.U9.XY)&&!this.U_.XY){
var TD=this.AGg(this.AAU(),this.AoM());var Aa_=this.AAQ();this.J8.I1(TD);if(Aa_>
TD)this.Le(TD);A.ow(this.C_,this);}},AXU:function(H){this.Al();},BeT:function(H){
var B;var Fy=this.Mw.IE;var Ck=(A.abh.Text.isPrototypeOf(B=this.Mw.B5)?B:null);if(
!Ck)return;Ck.R(A.aaq(Fy+1900,4,10));Ck.Y(A.zW(A.eV.Au));Ck.L(A.iF.Text);Ck.A0(0x12
);Ck.G(A.aaN(Ck.M,[(B=this.Mw.M)[2]-B[0],this.Mw.Gn]));},BeS:function(H){var B;var
Fy=this.Mv.IE;var Ck=(A.abh.Text.isPrototypeOf(B=this.Mv.B5)?B:null);if(!Ck)return;
Ck.R(A.aaq(Fy+1,2,10)+Qi);Ck.Y(A.zW(A.eV.Au));Ck.L(A.iF.Text);Ck.A0(0x12);Ck.G(A.
aaN(Ck.M,[(B=this.Mv.M)[2]-B[0],this.Mv.Gn]));},BeQ:function(H){var B;var Fy=this.
J8.IE;var Ck=(A.abh.Text.isPrototypeOf(B=this.J8.B5)?B:null);if(!Ck)return;Ck.R(
A.aaq(Fy+1,2,10)+Qi);Ck.Y(A.zW(A.eV.Au));Ck.L(A.iF.Text);Ck.A0(0x12);Ck.G(A.aaN(
Ck.M,[(B=this.J8.M)[2]-B[0],this.J8.Gn]));},AoM:function(){return 1900+((((-this.
Mw.Br/this.Mw.Gn)|0)+2)%200);},Ait:function(E){if(E<1900)E=1900;if(E>2100)E=2100;
this.Mw.Go(((E-1900)-2)*-this.Mw.Gn);var TD=this.AGg(this.AAU(),E);this.J8.I1(TD
);if(this.AAQ()>TD)this.Le(TD);},AAU:function(){return 1+((((-this.Mv.Br/this.Mv.
Gn)|0)+2)%12);},UT:function(E){if(E<1)E=1;if(E>12)E=12;this.Mv.Go(((E-1)-2)*-this.
Mv.Gn);var TD=this.AGg(E,this.AoM());this.J8.I1(TD);if(this.AAQ()>TD)this.Le(TD);
},AAQ:function(){return 1+((((-this.J8.Br/this.J8.Gn)|0)+2)%this.J8.AN);},Le:function(
E){var TD=this.AGg(this.AAU(),this.AoM());if(E<1)E=1;if(E>TD)E=TD;this.J8.Go(((E-
2)-1)*-this.J8.Gn);},AGg:function(AdT,Aa1){if(AdT===2){if(!(Aa1%4)&&(!!(Aa1%100)||
!(Aa1%400)))return 29;else return 28;}else if((((AdT===4)||(AdT===6))||(AdT===9)
)||(AdT===11))return 30;else return 31;},_Init:function(aArg){A.abp.AfB._Init.call(
this,aArg);A.abh.CT._Init.call(this.Za={I:this},0);A.Core.HC._Init.call(this.U_={
I:this},0);A.Core.HC._Init.call(this.U9={I:this},0);A.Core.HC._Init.call(this.U8={
I:this},0);A.Core.Cv._Init.call(this.Mw={I:this},0);A.Core.Cv._Init.call(this.Mv={
I:this},0);A.Core.Cv._Init.call(this.J8={I:this},0);this.__proto__=C.AJq;this.G(
AaL);this.Za.G(AdG);this.Za.N7(3);this.Za.L(0xFFE1E1E1);this.Za.W(true);this.U_.
G(Yi);this.U_.AOO(Vs);this.U_.AOs(0.2);this.U9.G(Yj);this.U9.AOO(Vs);this.U9.AOs(
0.2);this.U8.G(AdH);this.U8.AOO(Vs);this.U8.AOs(0.2);this.Mw.G(Yi);this.Mw.AOo(true
);this.Mw.Go(60);this.Mw.Ac0(30);this.Mw.I1(200);this.Mv.G(Yj);this.Mv.AOo(true);
this.Mv.Go(60);this.Mv.Ac0(30);this.Mv.I1(12);this.J8.G(AdH);this.J8.AOo(true);this.
J8.Go(60);this.J8.Ac0(30);this.J8.I1(31);this.J(this.Za,0);this.J(this.U_,0);this.
J(this.U9,0);this.J(this.U8,0);this.J(this.Mw,0);this.J(this.Mv,0);this.J(this.J8
,0);this.U_.Xz=[this,this.Aw7];this.U_.Rv=[this,this.AXU];this.U9.Xz=[this,this.
Aw7];this.U9.Rv=[this,this.AXU];this.U8.Xz=[this,this.Aw7];this.U8.Rv=[this,this.
AXU];this.Mw.GH=[this,this.BeT];this.Mw.AtQ(this.U_);this.Mv.GH=[this,this.BeS];
this.Mv.AtQ(this.U9);this.J8.GH=[this,this.BeQ];this.J8.AtQ(this.U8);},_Done:function(
){this.__proto__=A.abp.AfB;this.Za._Done();this.U_._Done();this.U9._Done();this.
U8._Done();this.Mw._Done();this.Mv._Done();this.J8._Done();A.abp.AfB._Done.call(
this);},_ReInit:function(){A.abp.AfB._ReInit.call(this);this.Za._ReInit();this.U_.
_ReInit();this.U9._ReInit();this.U8._ReInit();this.Mw._ReInit();this.Mv._ReInit(
);this.J8._ReInit();},_Mark:function(D){var B;A.abp.AfB._Mark.call(this,D);if((B=
this.C_)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.Za)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.U_)._cycle!=D)B._Mark(B._cycle=D);if((B=this.U9)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.U8)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Mw
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Mv)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.J8)._cycle!=D)B._Mark(B._cycle=D);},_className:"Demonstrator::DatePicker"
};C.ADs={_class:function(){return A.abj.Ai;},0:{FileName:"./res_index/DemonstratorWhiteTile.png"
,Format:A.jt,NoOfFrames:1,FrameSize:[40,40],FrameDelay:0,_this:null}};C.AQR={_class:
function(){return A.abj.Ai;},0:{FileName:"./res_index/DemonstratorWhiteTileSmall.png"
,Format:A.jt,NoOfFrames:1,FrameSize:[40,40],FrameDelay:0,_this:null}};C.AfK={_Init:
function(aArg){A.Core.O._Init.call(this,aArg);this.__proto__=C.AfK;this.G(EH);},
_className:"Demonstrator::SelectionAreaContent"};C.AIn={Ac:null,TX:null,Sk:null,
Bt9:function(H){var B;this.Sk.G(A.aaL(this.Sk.M,((B=this.M)[3]-B[1])-((B=this.TX.
M)[3]-B[1])));},_Init:function(aArg){C.AfK._Init.call(this,aArg);A.Core.Ac._Init.
call(this.Ac={I:this},0);C.AHV._Init.call(this.TX={I:this},0);C.AQz._Init.call(this.
Sk={I:this},0);this.__proto__=C.AIn;this.Ac.AW(0x3F);this.Ac.G(EH);this.Ac.Lf(1);
this.TX.G(KO);this.TX.Aj(true);this.TX.ABC(true);this.Sk.AW(0x3);this.Sk.G(AaM);
this.Sk.Aj(true);this.Sk.Ne(C.AIg);this.Sk.Bgq(C.AIv);this.J(this.Ac,0);this.J(this.
TX,0);this.J(this.Sk,0);this.A8(this.Sk);this.Ac.Eu=[this,this.Bt9];this.Sk.XF(A.
_GetAutoObject(A.abq.ArL));},_Done:function(){this.__proto__=C.AfK;this.Ac._Done(
);this.TX._Done();this.Sk._Done();C.AfK._Done.call(this);},_ReInit:function(){C.
AfK._ReInit.call(this);this.Ac._ReInit();this.TX._ReInit();this.Sk._ReInit();},_Mark:
function(D){var B;C.AfK._Mark.call(this,D);if((B=this.Ac)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.TX)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Sk)._cycle!=D)B._Mark(
B._cycle=D);},_className:"Demonstrator::AnimalSelectionActions"};C.TX={_Init:function(
aArg){C.ArA._Init.call(this,aArg);this.__proto__=C.TX;this.U(A.z2(A.abg.A0d));},
_ReInit:function(){C.ArA._ReInit.call(this);this.U(A.z2(A.abg.A0d));},_className:
"Demonstrator::ActionsHeader"};C.AHV={Background:null,Y1:null,Ads:null,Adh:null,
Adr:null,Ah1:null,Ah2:null,Ah3:null,Ah4:null,Ah9:false,Afq:function(H){var B;this.
G(A.aaL(this.M,(B=this.Y1.M)[3]-B[1]));},Afp:function(H){this.G(A.aaL(this.M,240
));},ABC:function(E){if(this.Ah9===E)return;this.Ah9=E;this.Y1.ABC(E);if(E)this.
Afq(this);else this.Afp(this);},_Init:function(aArg){A.Core.O._Init.call(this,aArg
);A.abh.AH._Init.call(this.Background={I:this},0);C.TX._Init.call(this.Y1={I:this
},0);C.Ads._Init.call(this.Ads={I:this},0);C.Adh._Init.call(this.Adh={I:this},0);
C.Adr._Init.call(this.Adr={I:this},0);A.abh.DK._Init.call(this.Ah1={I:this},0);A.
abh.DK._Init.call(this.Ah2={I:this},0);A.abh.DK._Init.call(this.Ah3={I:this},0);
A.abh.DK._Init.call(this.Ah4={I:this},0);this.__proto__=C.AHV;this.G(KO);this.Background.
AW(0x3F);this.Background.G(KO);this.Y1.AW(0x1D);this.Y1.G(B4);this.Ads.G(RS);this.
Adh.G(Nt);this.Adr.G(AlX);this.Ah1.DL(Yh);this.Ah1.D5(Pd);this.Ah1.L(A.iF.A7);this.
Ah2.DL(AlY);this.Ah2.D5(JW);this.Ah2.L(A.iF.A7);this.Ah3.DL(AlZ);this.Ah3.D5(Al0
);this.Ah3.L(A.iF.A7);this.Ah4.DL(Af0);this.Ah4.D5(AaN);this.Ah4.L(A.iF.A7);this.
J(this.Background,0);this.J(this.Y1,0);this.J(this.Ads,0);this.J(this.Adh,0);this.
J(this.Adr,0);this.J(this.Ah1,0);this.J(this.Ah2,0);this.J(this.Ah3,0);this.J(this.
Ah4,0);this.Y1.A3W([this,this.Afq]);this.Y1.A3V([this,this.Afp]);},_Done:function(
){this.__proto__=A.Core.O;this.Background._Done();this.Y1._Done();this.Ads._Done(
);this.Adh._Done();this.Adr._Done();this.Ah1._Done();this.Ah2._Done();this.Ah3._Done(
);this.Ah4._Done();A.Core.O._Done.call(this);},_ReInit:function(){A.Core.O._ReInit.
call(this);this.Background._ReInit();this.Y1._ReInit();this.Ads._ReInit();this.Adh.
_ReInit();this.Adr._ReInit();this.Ah1._ReInit();this.Ah2._ReInit();this.Ah3._ReInit(
);this.Ah4._ReInit();},_Mark:function(D){var B;A.Core.O._Mark.call(this,D);if((B=
this.Background)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Y1)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Ads)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Adh)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.Adr)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
Ah1)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ah2)._cycle!=D)B._Mark(B._cycle=D);
if((B=this.Ah3)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ah4)._cycle!=D)B._Mark(
B._cycle=D);},_className:"Demonstrator::ActionsMenu"};C.LB={ZI:null,Ae$:null,Bd:
null,DK:null,AgF:function(H){},AU8:function(s){this.AgF(s);},_Init:function(aArg
){A.Core.O._Init.call(this,aArg);A.abh.Am._Init.call(this.ZI={I:this},0);A.abh.Am.
_Init.call(this.Ae$={I:this},0);A.Core.Bd._Init.call(this.Bd={I:this},0);A.abh.DK.
_Init.call(this.DK={I:this},0);this.__proto__=C.LB;this.G(B4);this.ZI.G(Yk);this.
ZI.L(A.iF.Text);this.Ae$.G(AuK);this.Ae$.L(A.iF.Text);this.Ae$.Ce(0);this.Bd.J$(
Kc);this.Bd.J_(Og);this.Bd.DL(ME);this.Bd.D5(Pd);this.DK.DL(ME);this.DK.D5(Og);this.
DK.L(A.iF.A7);this.J(this.ZI,0);this.J(this.Ae$,0);this.J(this.Bd,0);this.J(this.
DK,0);this.ZI.At(A.zW(A.abj.J6));this.Ae$.At(A.zW(A.abj.AO9));this.Bd.B2=[this,this.
AU8];},_Done:function(){this.__proto__=A.Core.O;this.ZI._Done();this.Ae$._Done();
this.Bd._Done();this.DK._Done();A.Core.O._Done.call(this);},_ReInit:function(){A.
Core.O._ReInit.call(this);this.ZI._ReInit();this.Ae$._ReInit();this.Bd._ReInit();
this.DK._ReInit();},_Mark:function(D){var B;A.Core.O._Mark.call(this,D);if((B=this.
ZI)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ae$)._cycle!=D)B._Mark(B._cycle=D);
if((B=this.Bd)._cycle!=D)B._Mark(B._cycle=D);if((B=this.DK)._cycle!=D)B._Mark(B.
_cycle=D);},_className:"Demonstrator::ActionsItem"};C.Adh={Ady:null,AgF:function(
H){var Aeo=A.aa2(this.Ady.String,0,10);var Buk=A._GetAutoObject(A.abq.K6).AxH(Aeo
);if(Buk){Aeo=Aeo+1;this.Ady.R(Aeo.toFixed());}},_Init:function(aArg){C.LB._Init.
call(this,aArg);C.AoD._Init.call(this.Ady={I:this},0);this.__proto__=C.Adh;this.
Ady.G(AuL);this.Ady.R(AuM);this.Ady.L(A.iF.Text);this.J(this.Ady,-1);this.ZI.At(
A.zW(A.abi.Aoo));},_Done:function(){this.__proto__=C.LB;this.Ady._Done();C.LB._Done.
call(this);},_ReInit:function(){C.LB._ReInit.call(this);this.Ady._ReInit();},_Mark:
function(D){var B;C.LB._Mark.call(this,D);if((B=this.Ady)._cycle!=D)B._Mark(B._cycle=
D);},_className:"Demonstrator::ScanAction"};C.Ads={Te:null,N_:null,AYy:0,Init:function(
aArg){var B;A.za([this,this.Btt],[B=A._GetAutoObject(A.abq.K6),B.AN8,B.AOI],0);A.
za([this,this.Axd],[B=A._GetAutoObject(A.Device.Device),B.AoK,B.Aqk],0);A.ow([this
,this.Axd],this);},Ah:function(Ae){C.LB.Ah.call(this,Ae);this.N_.W(!A._GetAutoObject(
A.abq.K6).At9);},AgF:function(H){var B;A._GetAutoObject(A.abq.K6).A98(this);},Axd:
function(H){if(A._GetAutoObject(A.Device.Device).TemperatureUnit!==this.AYy){switch(
A._GetAutoObject(A.Device.Device).TemperatureUnit){case 0:this.N_.R(A.aap(A._GetAutoObject(
A.abq.K6).ApM/100,0,1));break;case 1:{var Arp=A._GetAutoObject(A.Device.Converter
).AQc(A._GetAutoObject(A.abq.K6).ApM/100,0,A._GetAutoObject(A.Device.Device).TemperatureUnit
);this.N_.R(A.aap(Arp,0,1));}break;default:A.aa8("%s%e",AuN,A._GetAutoObject(A.Device.
Device).TemperatureUnit);}this.AYy=A._GetAutoObject(A.Device.Device).TemperatureUnit;
}},Btc:function(H){var B;var Aro=A.aaZ(this.N_.String,0);Aro=A._GetAutoObject(A.
Device.Converter).AQc(Aro,A._GetAutoObject(A.Device.Device).TemperatureUnit,0);Aro
*=100;A._GetAutoObject(A.abq.K6).A4e(Math.round(Aro)|0);},Btt:function(H){this.Al(
);},_Init:function(aArg){C.LB._Init.call(this,aArg);A.abr.Te._Init.call(this.Te={
I:this},0);C.N_._Init.call(this.N_={I:this},0);this.__proto__=C.Ads;var B;this.Te.
G(AiY);this.Te.A3R(A.z2(A.abg.AZr));this.N_.G(AuO);this.N_.R(AuP);this.N_.L(A.iF.
Text);this.N_.Bfl(true);this.AYy=A._GetAutoObject(A.Device.Device).TemperatureUnit;
this.J(this.Te,0);this.J(this.N_,0);this.ZI.At(A.zW(A.abi.ZH));this.Te.AD([B=A._GetAutoObject(
A.abq.K6),B.AN8,B.AOI]);this.Te.OnSetAppearance(A._GetAutoObject(A.abz.AyD));this.
N_.C_=[this,this.Btc];this.Init(aArg);},_Done:function(){this.__proto__=C.LB;this.
Te._Done();this.N_._Done();C.LB._Done.call(this);},_ReInit:function(){C.LB._ReInit.
call(this);this.Te._ReInit();this.N_._ReInit();this.Te.A3R(A.z2(A.abg.AZr));},_Mark:
function(D){var B;C.LB._Mark.call(this,D);if((B=this.Te)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.N_)._cycle!=D)B._Mark(B._cycle=D);},_className:"Demonstrator::TemperatureAction"
};C.Aop={Q:null,CT:null,Bd:null,AeM:null,AkY:null,AkX:null,Aot:null,Text:null,GK:
null,Am:null,EK:null,Aos:null,Aou:null,Aws:false,Bh:function(aSize){this.GK.G(A.
aaN(this.GK.M,aSize));this.CT.Auf(1);this.CT.IX(0,40);this.CT.ES(0,aSize[0]-20,20
,12.5,12.5,-90,90,10);this.CT.ES(0,20,20,12.5,12.5,90,270,10);this.CT.T$(0);},Ah:
function(Ae){var B;var F;A.Core.O.Ah.call(this,Ae);var Gz=((Ae&0x40)===0x40);if(
Gz){if(!!this.Q)this.Text.R((F=this.Q,F[1].call(F[0])));this.AeM.An(true);this.Am.
W(false);}else{if(!!this.Q)this.Text.R((F=this.Q,F[1].call(F[0])));this.AeM.An(false
);this.EK.W(false);this.Am.W(true);}this.Aws=Gz;},AgF:function(H){var B;if(!((this.
S&0x80)===0x80))this.HQ().AIH(this);},A2f:function(H){},A6p:function(s){this.A2f(
s);},Bde:function(H){var B;var F;if(!this.Q||!(F=this.Q,F[1].call(F[0])).length)
this.EK.G(A.aaP(this.EK.M,A.zT(this.Text.M)[0]));else{this.EK.G(A.aaP(this.EK.M,
this.Text.AKB(0)[2]+2));this.EK.G(A.aaR(this.EK.M,this.Text.AKB(0)[1]));this.EK.
G(A.aaL(this.EK.M,(B=this.Text.AKB(0))[3]-B[1]));}this.Am.G(A.aaP(this.Am.M,this.
Text.M[0]-((B=this.Am.M)[2]-B[0])));},A2e:function(H){},A6o:function(s){this.A2e(
s);},AD:function(E){if(A.z_(this.Q,E))return;if(!!this.Q)A.zn([this,this.Oq],this.
Q,0);this.Q=E;if(!!E)A.za([this,this.Oq],E,0);if(!!E)A.ow([this,this.Oq],this);}
,Oq:function(H){this.Al();},BeV:function(H){var B;if(((this.S&0x80)===0x80))this.
HQ().Ay7(this);},A_c:function(H){},_Init:function(aArg){A.Core.O._Init.call(this
,aArg);A.Graphics.G0._Init.call(this.CT={I:this},0);A.Core.Bd._Init.call(this.Bd={
I:this},0);A.abm.Y$._Init.call(this.AeM={I:this},0);A.Core.B1._Init.call(this.AkY={
I:this},0);A.Core.B1._Init.call(this.AkX={I:this},0);A.Core.B1._Init.call(this.Aot={
I:this},0);A.abh.Text._Init.call(this.Text={I:this},0);A.abh.GK._Init.call(this.
GK={I:this},0);A.abh.Am._Init.call(this.Am={I:this},0);A.abh.AH._Init.call(this.
EK={I:this},0);A.Core.B1._Init.call(this.Aos={I:this},0);A.Core.B1._Init.call(this.
Aou={I:this},0);this.__proto__=C.Aop;var B;this.G(AdI);this.Bd.AW(0x3F);this.Bd.
J$(Kc);this.Bd.J_(AdJ);this.Bd.DL(Kd);this.Bd.D5(Pe);this.AeM.FK(530);this.AeM.Aab(
530);this.AkY.Filter=143;this.AkX.Filter=45;this.Aot.Filter=1;this.Text.AW(0x3F);
this.Text.G(AdI);this.Text.I0(true);this.Text.A0(0x12);this.Text.L(0xFFB3B3B3);this.
GK.G(AdI);this.GK.L(0xFFB3B3B3);this.GK.N7(1);this.Am.G(AuQ);this.EK.G(Vt);this.
EK.L(0xFFB3B3B3);this.EK.W(false);this.Aos.Filter=138;this.Aou.Filter=137;this.J(
this.Bd,0);this.J(this.Text,0);this.J(this.GK,0);this.J(this.Am,0);this.J(this.EK
,0);this.Bd.KF=[this,this.AgF];this.AeM.Q=[B=this.EK,B.Fe,B.W];this.AkY.B2=[this
,this.A6p];this.AkY.Ea=[this,this.A6p];this.AkX.B2=[this,this.A6o];this.AkX.Ea=[
this,this.A6o];this.Aot.B2=[this,this.BeV];this.Text.Rs([this,this.Bde]);this.Text.
Y(A.zW(A.eV.Az));this.GK.XH(this.CT);this.Am.At(null);this.Aos.B2=[this,this.A_c
];this.Aou.B2=[this,this.A_c];},_Done:function(){this.__proto__=A.Core.O;this.CT.
_Done();this.Bd._Done();this.AeM._Done();this.AkY._Done();this.AkX._Done();this.
Aot._Done();this.Text._Done();this.GK._Done();this.Am._Done();this.EK._Done();this.
Aos._Done();this.Aou._Done();A.Core.O._Done.call(this);},_ReInit:function(){A.Core.
O._ReInit.call(this);this.CT._ReInit();this.Bd._ReInit();this.AeM._ReInit();this.
AkY._ReInit();this.AkX._ReInit();this.Aot._ReInit();this.Text._ReInit();this.GK.
_ReInit();this.Am._ReInit();this.EK._ReInit();this.Aos._ReInit();this.Aou._ReInit(
);this.Text.Y(A.zW(A.eV.Az));},_Mark:function(D){var B;A.Core.O._Mark.call(this,
D);if((B=this.Q)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.CT)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.Bd)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
AeM)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AkY)._cycle!=D)B._Mark(B._cycle=D);
if((B=this.AkX)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Aot)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Text)._cycle!=D)B._Mark(B._cycle=D);if((B=this.GK)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.Am)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
EK)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Aos)._cycle!=D)B._Mark(B._cycle=D);
if((B=this.Aou)._cycle!=D)B._Mark(B._cycle=D);},_className:"Demonstrator::InputView"
};C.Acg={Background:null,WG:null,_Init:function(aArg){A.Core.O._Init.call(this,aArg
);A.abh.AH._Init.call(this.Background={I:this},0);C.WG._Init.call(this.WG={I:this
},0);this.__proto__=C.Acg;var B;this.G(AiZ);this.Background.G(AiZ);this.WG.AW(0x1D
);this.WG.G(AuR);this.J(this.Background,0);this.J(this.WG,0);this.WG.AD([B=A._GetAutoObject(
A.abq.Aht),B.A2T,B.ABQ]);},_Done:function(){this.__proto__=A.Core.O;this.Background.
_Done();this.WG._Done();A.Core.O._Done.call(this);},_ReInit:function(){A.Core.O.
_ReInit.call(this);this.Background._ReInit();this.WG._ReInit();},_Mark:function(
D){var B;A.Core.O._Mark.call(this,D);if((B=this.Background)._cycle!=D)B._Mark(B.
_cycle=D);if((B=this.WG)._cycle!=D)B._Mark(B._cycle=D);},_className:"Demonstrator::FilterRow"
};C.N_={Init:function(aArg){var B;A.za([this,this.Axd],[B=A._GetAutoObject(A.Device.
Device),B.AoK,B.Aqk],0);A.ow([this,this.Axd],this);},Ah:function(Ae){var B;C.AoD.
Ah.call(this,Ae);var Gz=((this.S&0x40)===0x40);if(!Gz&&(this.String.length>0))this.
Text.R(((this.String+AuS)+A._GetAutoObject(A.abk.Temperature).AjA())+String.fromCharCode(
0x0A));else this.Text.R(this.String+String.fromCharCode(0x0A));if(this.IN>this.String.
length)this.IN=this.String.length;},Axd:function(H){this.Al();},_Init:function(aArg
){C.AoD._Init.call(this,aArg);this.__proto__=C.N_;this.Init(aArg);},_className:"Demonstrator::TemperatureInputView"
};C.AoD={Cp:null,C_:null,Ty:null,CH:null,Aku:null,AkA:null,Ahu:null,Bd:null,Text:
null,EK:null,AnQ:null,Apl:null,CT:null,GK:null,AoF:null,Aod:null,An2:null,String:
A.jm,IN:0,AM:0xFFB3B3B3,AJs:false,Yv:false,Bh:function(aSize){this.GK.G(A.aaN(this.
GK.M,aSize));this.CT.Auf(1);this.CT.IX(0,40);this.CT.ES(0,aSize[0]-20,20,12.5,12.5
,-90,90,10);this.CT.ES(0,20,20,12.5,12.5,90,270,10);this.CT.T$(0);},Ah:function(
Ae){var B;A.abp.AfR.Ah.call(this,Ae);if(((Ae&0x40)===0x40))this.Ty.An(true);else{
this.Ty.An(false);this.EK.W(false);}},Bu1:function(H){var B;var Ba=this.Text.M;var
YM=0;var YN=0;if(this.EK.EV[0]<Ba[0])YM=Ba[0]-this.EK.EV[0];if(this.EK.EV[0]>Ba[
2])YM=Ba[2]-this.EK.EV[0];if(this.EK.EV[1]<Ba[1])YN=Ba[1]-this.EK.EV[1];if(this.
EK.Ev[1]>Ba[3])YN=Ba[3]-this.EK.Ev[1];if(!!YM||!!YN)this.Text.Go(A.aak(this.Text.
Br,[YM,YN]));YM=this.Text.Br[0];YN=this.Text.Br[1];var CW=[(B=this.Text.Dh())[2]-
B[0],B[3]-B[1]];if(CW[0]<=((B=this.Text.M)[2]-B[0]))YM=0;if(CW[1]<=((B=this.Text.
M)[3]-B[1]))YN=0;this.Text.Go([YM,YN]);},AxU:function(H){if(!this.Cp)return;var Bt$=
this.Text.A5a(this.IN);var pos=this.Text.AlE(Bt$);this.EK.D5(A.aaj(pos,[0,this.Cp.
Ascent]));this.EK.DL(A.aak(pos,[0,this.Cp.Descent]));if(this.Ty.Bw){this.Ty.An(false
);this.Ty.An(true);}if(this.Yv){A.ow([this,this.Bu1],this);this.Yv=false;}},Aw$:
function(H){if(!this.A09(0x80))this.HQ().AIH(this);var Lx=this.Text.Bhg(this.Bd.
Hr);var AjL=this.Text.ACz(Lx);if(AjL!==this.IN){this.IN=AjL;A.ow([this,this.AxU]
,this);this.Yv=true;}},A90:function(H){if(!this.Cp)return;var Lx=this.Text.A5a(this.
IN);if(this.CH.CO===6){Lx=[Lx[0]-1,Lx[1]];if(this.Text.ACz(Lx)===this.IN){Lx=[Lx[
0],Lx[1]-1];Lx=[this.Text.AKC(Lx[1]).length,Lx[1]];}}if(this.CH.CO===7){Lx=[Lx[0
]+1,Lx[1]];if(this.Text.ACz(Lx)===this.IN){Lx=[Lx[0],Lx[1]+1];Lx=[0,Lx[1]];}}var
AjL=this.Text.ACz(Lx);if(AjL!==this.IN){this.IN=AjL;A.ow([this,this.AxU],this);this.
Yv=true;}},A9X:function(H){if(!this.IN)return;this.R(A.aa3(this.String,this.IN-1
,1));this.IN=this.IN-1;this.Yv=true;A.ow(this.C_,this);},A92:function(H){if(this.
IN>=this.String.length)return;this.R(A.aa3(this.String,this.IN,1));this.Yv=true;
A.ow(this.C_,this);},A93:function(H){if(this.String.length>=15)return;var BrC=this.
Ahu.D8;var A$r=String.fromCharCode(BrC);this.R(A.aaW(this.String,A$r,this.IN));this.
IN=this.IN+A$r.length;this.Yv=true;A.ow(this.C_,this);},R:function(E){if(this.String===
E)return;this.String=E;if(this.IN>(E.length+1))this.IN=E.length;this.Text.R(E+String.
fromCharCode(0x0A));this.Yv=true;this.Text.Go(Kc);},L:function(E){if(this.AM===E
)return;this.AM=E;this.Text.L(E);this.EK.L(E);this.GK.L(E);},A_d:function(H){if(
this.AJs===false)return;if(this.String.indexOf(String.fromCharCode(0x2E),0)>=0)return;
if(this.String.length>=15)return;this.R(A.aaW(this.String,Qi,this.IN));this.IN=this.
IN+1;this.Yv=true;A.ow(this.C_,this);},Bfl:function(E){if(this.AJs===E)return;this.
AJs=E;if(E===false){var A_Q=this.String.indexOf(String.fromCharCode(0x2E),0);if(
A_Q>=0)this.R(A.aaX(this.String,A_Q));}this.Yv=true;this.Text.Go(Kc);},Btk:function(
H){if(this.A09(0x80))this.HQ().Ay7(this);this.Al();},Bs9:function(H){var AjL=this.
String.length;if(AjL!==this.IN){this.IN=AjL;A.ow([this,this.AxU],this);this.Yv=true;
}},Btb:function(H){if(!!this.IN){this.IN=0;A.ow([this,this.AxU],this);this.Yv=true;
}},_Init:function(aArg){A.abp.AfR._Init.call(this,aArg);A.abm.Y$._Init.call(this.
Ty={I:this},0);A.Core.B1._Init.call(this.CH={I:this},0);A.Core.B1._Init.call(this.
Aku={I:this},0);A.Core.B1._Init.call(this.AkA={I:this},0);A.Core.B1._Init.call(this.
Ahu={I:this},0);A.Core.Bd._Init.call(this.Bd={I:this},0);A.abh.Text._Init.call(this.
Text={I:this},0);A.abh.DK._Init.call(this.EK={I:this},0);A.Core.B1._Init.call(this.
AnQ={I:this},0);A.Core.B1._Init.call(this.Apl={I:this},0);A.Graphics.G0._Init.call(
this.CT={I:this},0);A.abh.GK._Init.call(this.GK={I:this},0);A.Core.B1._Init.call(
this.AoF={I:this},0);A.Core.B1._Init.call(this.Aod={I:this},0);A.Core.B1._Init.call(
this.An2={I:this},0);this.__proto__=C.AoD;var B;this.G(AdI);this.Ty.BX=false;this.
Ty.Ci=true;this.Ty.FK(500);this.Ty.Aab(500);this.CH.Filter=147;this.Aku.Filter=45;
this.AkA.Filter=44;this.Ahu.Filter=143;this.Bd.AW(0x3F);this.Bd.J$(Pe);this.Bd.J_(
Kd);this.Bd.DL(AdJ);this.Bd.D5(Kc);this.Bd.ABA(3);this.Text.AW(0x3F);this.Text.G(
AdI);this.Text.KH(false);this.Text.A0(0x12);this.Text.R(A.jm);this.Text.L(0xFFB3B3B3
);this.EK.DL(AuT);this.EK.D5(Al1);this.EK.BgX(2);this.EK.BgW(2);this.EK.L(0xFFB3B3B3
);this.EK.W(false);this.AnQ.Filter=138;this.Apl.Filter=137;this.GK.G(AdI);this.GK.
L(0xFFB3B3B3);this.GK.N7(1);this.AoF.Filter=1;this.Aod.Filter=41;this.An2.Filter=
42;this.J(this.Bd,0);this.J(this.Text,0);this.J(this.EK,0);this.J(this.GK,0);this.
Ty.Q=[B=this.EK,B.Fe,B.W];this.CH.B2=[this,this.A90];this.CH.Ea=[this,this.A90];
this.Aku.B2=[this,this.A9X];this.Aku.Ea=[this,this.A9X];this.AkA.B2=[this,this.A92
];this.AkA.Ea=[this,this.A92];this.Ahu.B2=[this,this.A93];this.Ahu.Ea=[this,this.
A93];this.Bd.B2=[this,this.Aw$];this.Text.Rs([this,this.AxU]);this.Text.Y(A.zW(A.
eV.Az));this.Cp=A.zW(A.eV.Az);this.AnQ.B2=[this,this.A_d];this.Apl.B2=[this,this.
A_d];this.GK.XH(this.CT);this.AoF.B2=[this,this.Btk];this.Aod.B2=[this,this.Btb];
this.An2.B2=[this,this.Bs9];},_Done:function(){this.__proto__=A.abp.AfR;this.Ty.
_Done();this.CH._Done();this.Aku._Done();this.AkA._Done();this.Ahu._Done();this.
Bd._Done();this.Text._Done();this.EK._Done();this.AnQ._Done();this.Apl._Done();this.
CT._Done();this.GK._Done();this.AoF._Done();this.Aod._Done();this.An2._Done();A.
abp.AfR._Done.call(this);},_ReInit:function(){A.abp.AfR._ReInit.call(this);this.
Ty._ReInit();this.CH._ReInit();this.Aku._ReInit();this.AkA._ReInit();this.Ahu._ReInit(
);this.Bd._ReInit();this.Text._ReInit();this.EK._ReInit();this.AnQ._ReInit();this.
Apl._ReInit();this.CT._ReInit();this.GK._ReInit();this.AoF._ReInit();this.Aod._ReInit(
);this.An2._ReInit();},_Mark:function(D){var B;A.abp.AfR._Mark.call(this,D);if((
B=this.Cp)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.C_)&&((B=B[0])._cycle!=
D))B._Mark(B._cycle=D);if((B=this.Ty)._cycle!=D)B._Mark(B._cycle=D);if((B=this.CH
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Aku)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.AkA)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ahu)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Bd)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Text)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.EK)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AnQ)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.Apl)._cycle!=D)B._Mark(B._cycle=D);if((B=this.CT
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.GK)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.AoF)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Aod)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.An2)._cycle!=D)B._Mark(B._cycle=D);},_className:"Demonstrator::NumberInput"
};C.Adr={LabelDataSync:null,AgF:function(H){var B;A.ow([B=A._GetAutoObject(A.abt.
ApH),B.BuB],this);},_Init:function(aArg){C.LB._Init.call(this,aArg);A.kh.CG._Init.
call(this.LabelDataSync={I:this},0);this.__proto__=C.Adr;this.LabelDataSync.G(AuU
);this.LabelDataSync.R(A.z2(A.abg.AZ7));this.LabelDataSync.L(A.iF.Text);this.J(this.
LabelDataSync,0);this.ZI.At(A.zW(C.AP5));this.LabelDataSync.Y(A.zW(A.eV.Au));this.
LabelDataSync.By(A.zW(A.eV.Az));},_Done:function(){this.__proto__=C.LB;this.LabelDataSync.
_Done();C.LB._Done.call(this);},_ReInit:function(){C.LB._ReInit.call(this);this.
LabelDataSync._ReInit();this.LabelDataSync.R(A.z2(A.abg.AZ7));this.LabelDataSync.
Y(A.zW(A.eV.Au));this.LabelDataSync.By(A.zW(A.eV.Az));},_Mark:function(D){var B;
C.LB._Mark.call(this,D);if((B=this.LabelDataSync)._cycle!=D)B._Mark(B._cycle=D);
},_className:"Demonstrator::SyncAction"};C.AP5={_class:function(){return A.abj.Ai;
},0:{FileName:"./res_index/DemonstratorSyncIcon.png",Format:A.cC,NoOfFrames:1,FrameSize:[
50,60],FrameDelay:0,_this:null}};C.Zl={TimespanDaysToString:null,Azr:function(aIndex
){if(this.Azn()>aIndex)return this.TimespanDaysToString.Cb(aIndex);A.aa8("%s",Ap1
);return A.jm;},Azn:function(){return 4;},Dd:function(aIndex){var Ag1=0;switch(aIndex
){case 0:Ag1=0;break;case 1:Ag1=1;break;case 2:Ag1=2;break;case 3:Ag1=3;break;default:
throw new Error(Ke+aIndex.toFixed());}return Ag1;},_Init:function(aArg){A.abx.Akw.
_Init.call(this,aArg);A.Device.TimespanDaysToString._Init.call(this.TimespanDaysToString={
I:this},0);this.__proto__=C.Zl;},_Done:function(){this.__proto__=A.abx.Akw;this.
TimespanDaysToString._Done();A.abx.Akw._Done.call(this);},_ReInit:function(){A.abx.
Akw._ReInit.call(this);this.TimespanDaysToString._ReInit();},_Mark:function(D){var
B;A.abx.Akw._Mark.call(this,D);if((B=this.TimespanDaysToString)._cycle!=D)B._Mark(
B._cycle=D);},_className:"Demonstrator::DatePickerUnitDD"};C.Bx5={GD:0,AQG:1,GF:
2,Year:3};C.Ay4={_class:function(){return A.abj.Ai;},0:{FileName:"./res_index/DemonstratorEarTagIcon.png"
,Format:A.jt,NoOfFrames:2,FrameSize:[37,37],FrameDelay:0,_this:null}};C.ADc={_class:
function(){return A.abj.Ai;},0:{FileName:"./res_index/DemonstratorTransponderEarTagIcon.png"
,Format:A.jt,NoOfFrames:2,FrameSize:[37,37],FrameDelay:0,_this:null}};
C._Init=function(){C.AQz.__proto__=A.abp.Menu;C.APG.__proto__=A.Core.O;C.AIg.__proto__=
C.A$;C.LD.__proto__=A.Core.O;C.WG.__proto__=C.Aop;C.Zm.__proto__=A.Core.O;C.AsA.
__proto__=A.abp.AfD;C.AIv.__proto__=C.E2;C.ArA.__proto__=C.E2;C.A$.__proto__=A.Core.
O;C.E2.__proto__=A.Core.O;C.AJq.__proto__=A.abp.AfB;C.AfK.__proto__=A.Core.O;C.AIn.
__proto__=C.AfK;C.TX.__proto__=C.ArA;C.AHV.__proto__=A.Core.O;C.LB.__proto__=A.Core.
O;C.Adh.__proto__=C.LB;C.Ads.__proto__=C.LB;C.Aop.__proto__=A.Core.O;C.Acg.__proto__=
A.Core.O;C.N_.__proto__=C.AoD;C.AoD.__proto__=A.abp.AfR;C.Adr.__proto__=C.LB;C.Zl.
__proto__=A.abx.Akw;};C._ReInit=function(){};C.Dq=function(D){var B;if((B=C.Background[
0]._this)&&(B._cycle!=D))B._Done(C.Background[0]._this=null);if((B=C.AIO[0]._this
)&&(B._cycle!=D))B._Done(C.AIO[0]._this=null);if((B=C.AIP[0]._this)&&(B._cycle!=
D))B._Done(C.AIP[0]._this=null);if((B=C.AIQ[0]._this)&&(B._cycle!=D))B._Done(C.AIQ[
0]._this=null);if((B=C.AIR[0]._this)&&(B._cycle!=D))B._Done(C.AIR[0]._this=null);
if((B=C.ALL[0]._this)&&(B._cycle!=D))B._Done(C.ALL[0]._this=null);if((B=C.Filter[
0]._this)&&(B._cycle!=D))B._Done(C.Filter[0]._this=null);if((B=C.ANf[0]._this)&&(
B._cycle!=D))B._Done(C.ANf[0]._this=null);if((B=C.Ahg[0]._this)&&(B._cycle!=D))B.
_Done(C.Ahg[0]._this=null);if((B=C.AIy[0]._this)&&(B._cycle!=D))B._Done(C.AIy[0].
_this=null);if((B=C.Apy[0]._this)&&(B._cycle!=D))B._Done(C.Apy[0]._this=null);if((
B=C.AP_[0]._this)&&(B._cycle!=D))B._Done(C.AP_[0]._this=null);if((B=C.ADs[0]._this
)&&(B._cycle!=D))B._Done(C.ADs[0]._this=null);if((B=C.AQR[0]._this)&&(B._cycle!=
D))B._Done(C.AQR[0]._this=null);if((B=C.AP5[0]._this)&&(B._cycle!=D))B._Done(C.AP5[
0]._this=null);if((B=C.Ay4[0]._this)&&(B._cycle!=D))B._Done(C.Ay4[0]._this=null);
if((B=C.ADc[0]._this)&&(B._cycle!=D))B._Done(C.ADc[0]._this=null);};return C;})(
);

/* VitalControl demonstration application, © Urban GmbH & Co.KG 2023 */