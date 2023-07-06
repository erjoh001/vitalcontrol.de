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
var B3=[0,0,370,60];var BI=[360,0,370,60];var EG=[0,0,370,710];var Gr="Unknown animalType";
var I4=[58,10,120,50];var Ip=[0,0,60,60];var Oc=[120,0,360,60];var Pb="\u2015";var
Nm=[0,0,240,60];var Cv=[0,0,40,60];var FK=[100,0,130,60];var Od=[43,0,100,60];var
Nn=[125,0,240,60];var Ka=[0,0];var Oe=[100,0];var MB=[100,60];var Pc=[0,60];var RL=[
107,0];var Ti=[240,0];var Ve=[240,60];var Vf=[107,60];var JT="%d.%m.%Y";var RM="Unhandled date unit: ";
var Vg=[0,0,200,180];var Vh=[36,0,200,30];var X7=[0,30,160,60];var RN="Text";var
X8=[0,70,40,110];var Vi=[44,70,156,110];var Tj=[160,70,200,110];var Vj=[7,2,27,25
];var Qg=[0,30,170,180];var Vk=[170,34,190,57];var Np=[0,0,40,40];var Pd=[0,40];
var Tk=[40,40];var X9=[40,0];var Vl=[0,0,370,100];var X_=[20,0,290,60];var X$=[0
,60,370,100];var Vm="Cap";var Vn=[20,0,370,60];var RO=[310,0,370,60];var Ya=[370
,0];var Yb=[370,60];var AaC="UpdateData is called for the base class ListItemBase. Please make "+
"sure this method is implemented by a derived class.";var Qh=".";var AaD=[0,0,170
,150];var Adz=[0,59,170,90];var Yc=[110,0,170,150];var Vo=[0,30];var Yd=[50,0,100
,150];var AdA=[0,0,40,150];var KM=[0,0,370,240];var AaE=[0,60,370,710];var RP=[0
,60,370,120];var Nq=[0,120,370,180];var AlR=[0,180,370,240];var AlS=[370,120];var
JU=[0,120];var AlT=[370,180];var AlU=[0,180];var AfU=[370,240];var AaF=[0,240];var
Ye=[0,0,50,60];var AuF=[50,0,100,60];var AuG=[100,10,370,50];var AuH="276000901234567";
var AuI="Unhandled temperature unit";var AiR=[110,0,260,60];var AuJ=[235,10,370,
50];var AuK="39.5";var AdB=[0,0,270,40];var AdC=[270,0];var Kb=[270,40];var AuL=[
150,0,170,40];var Vp=[205,10,207,30];var AiS=[0,0,370,40];var AuM=[50,0,320,40];
var AuN=" ";var AuO=[135,23];var AlV=[135,0];var AuP=[100,0,370,60];var ApY="Error: Nullpointer Exception";
var Kc="Unknown Date Piecker Unit Index: ";
C.Background={_class:function(){return A.abj.Ah;},0:{FileName:"./res_index/DemonstratorBackground.png"
,Format:A.cC,NoOfFrames:1,FrameSize:[1000,740],FrameDelay:0,_this:null}};C.AII={
_class:function(){return A.abj.Ah;},0:{FileName:"./res_index/DemonstratorButtonLeft.png"
,Format:A.cC,NoOfFrames:1,FrameSize:[40,40],FrameDelay:0,_this:null}};C.AIJ={_class:
function(){return A.abj.Ah;},0:{FileName:"./res_index/DemonstratorButtonLeftPressed.png"
,Format:A.cC,NoOfFrames:1,FrameSize:[40,40],FrameDelay:0,_this:null}};C.AIK={_class:
function(){return A.abj.Ah;},0:{FileName:"./res_index/DemonstratorButtonRight.png"
,Format:A.cC,NoOfFrames:1,FrameSize:[40,40],FrameDelay:0,_this:null}};C.AIL={_class:
function(){return A.abj.Ah;},0:{FileName:"./res_index/DemonstratorButtonRightPressed.png"
,Format:A.cC,NoOfFrames:1,FrameSize:[40,40],FrameDelay:0,_this:null}};C.ALG={_class:
function(){return A.abj.Ah;},0:{FileName:"./res_index/DemonstratorIconDatePicker.png"
,Format:A.cC,NoOfFrames:1,FrameSize:[20,23],FrameDelay:0,_this:null}};C.Filter={
_class:function(){return A.abj.Ah;},0:{FileName:"./res_index/DemonstratorFilter.png"
,Format:A.cC,NoOfFrames:1,FrameSize:[15,16],FrameDelay:0,_this:null}};C.AM_={_class:
function(){return A.abj.Ah;},0:{FileName:"./res_index/DemonstratorMenuIcon.png",
Format:A.cC,NoOfFrames:1,FrameSize:[20,16],FrameDelay:0,_this:null}};C.Ag_={_class:
function(){return A.abj.Ah;},0:{FileName:"./res_index/DemonstratorArrowRight.png"
,Format:A.cC,NoOfFrames:1,FrameSize:[17,16],FrameDelay:0,_this:null}};C.AIs={_class:
function(){return A.abj.Ah;},0:{FileName:"./res_index/DemonstratorArrowDown.png"
,Format:A.cC,NoOfFrames:1,FrameSize:[17,16],FrameDelay:0,_this:null}};C.Apv={_class:
function(){return A.abj.Ah;},0:{FileName:"./res_index/DemonstratorScanIcon.png",
Format:A.jt,NoOfFrames:2,FrameSize:[37,37],FrameDelay:0,_this:null}};C.AP2={_class:
function(){return A.abj.Ah;},0:{FileName:"./res_index/DemonstratorTemperatureIcon.png"
,Format:A.cC,NoOfFrames:1,FrameSize:[17,37],FrameDelay:0,_this:null}};C.AQr={AbX:
null,AZ:null,AR:null,Background:null,Hz:null,Av:null,Ik:null,C2:null,KB:null,A1D:
null,A1Z:0,Bh:function(aSize){A.abp.Menu.Bh.call(this,aSize);this.Ik.G(A.aaS(this.
Ik.M,this.Av.N6));this.Ik.G([].concat(this.Ik.M.slice(0,3),aSize[1]));},Ai:function(
Ae){var B;A.abp.Menu.Ai.call(this,Ae);var Gv=((Ae&0x40)===0x40);if(Gv&&(this.Av.
FJ<0))this.Av.Gl(0);},Nb:function(E){if(this.KB===E)return;this.KB=E;this.Av.Nb(
E);},Bf$:function(E){var B;if(this.A1D===E)return;if(!!this.AbX){this.HW(this.AbX
);this.AbX=null;}if(!!E){this.AbX=(C.E2.isPrototypeOf(B=A._NewObject(E,0))?B:null
);this.AbX.A3J([this,this.Afj]);this.AbX.A3K([this,this.Afk]);this.AbX.Bge(null);
this.J(this.AbX,0);this.Av.A3Q((B=this.AbX.M)[3]-B[1]);}else this.Av.A3Q(0);this.
Ik.G(A.aaS(this.Ik.M,this.Av.N6));A.ow([this,this.FX],this);this.A1D=E;},GD:function(
H){var B;var Fw=this.Av.ID;var Ab=(C.A$.isPrototypeOf(B=this.Av.B4)?B:null);if(!
Ab)return;Ab.Xz(this.AZ);Ab.B7(Fw);Ab.XA(this.AR);Ab.G(A.aaN(Ab.M,[(B=this.Av.M)[
2]-B[0],this.Av.Gj]));},Xz:function(E){var B;if(this.AZ===E)return;if(!!this.AZ){
A.zl([this,this.B7],this.AZ,0);A.zn([this,this.AlL],[B=this.AZ,B.Fd,B.Ff],0);}this.
AZ=E;if(!!E){A.y_([this,this.B7],E,0);A.za([this,this.AlL],[E,E.Fd,E.Ff],0);}A.ow([
this,this.B7],this);A.ow([this,this.AlL],this);},B7:function(H){if(!!this.AZ){this.
Av.I0(this.AZ.Cd());this.Av.ZE(0,this.Av.AM-1);}else this.Av.I0(0);if(this.A1Z!==
this.Av.AM){this.Av.Ax7(null,null);this.A1Z=this.Av.AM;}A.ow([this,this.FX],this
);},Afk:function(H){var B;this.G(A.aaL(this.M,(B=this.Av.AKu())[3]-B[1]));},Afj:
function(H){this.G(A.aaL(this.M,180));},A28:function(H){var I8=(A.Core.B0.isPrototypeOf(
H)?H:null);var Fw=this.Av.FJ;if(I8.CM===4)Fw=Fw-1;else if(I8.CM===5)Fw=Fw+1;else
if((I8.D4>=0x30)&&(I8.D4<=0x39))A._GetAutoObject(A.abq.Ahl).FA(I8.D4);else if(I8.
CM===45)A._GetAutoObject(A.abq.Ahl).Delete();else I8.PE=true;if((Fw<0)||(Fw>=this.
Av.AM))return;this.Av.Gl(Fw);this.Bro(Fw,true);},Brd:function(H){var Ab=(C.A$.isPrototypeOf(
H)?H:null);this.Av.Gl(Ab.Hl);},Bro:function(HB,AaP){var B;if((HB<0)||(HB>=this.Av.
AM))return;var AL=this.Av.An5(HB,HB);var Ba=this.Av.M;Ba=A.aaS(Ba,(B=this.Av.AKu(
))[3]-B[1]);Ba=A.aaL(Ba,(((B=this.Av.M)[3]-B[1])-((B=this.Av.AKu())[3]-B[1]))-((
B=this.Av.BbS())[3]-B[1]));var KY=A.kz(AL,Ba);if((!AaP&&!((KY[0]>=KY[2])||(KY[1]>=
KY[3])))||(AaP&&A.z9(KY,AL)))return;var Bj=0;if(AL[3]>Ba[3])Bj=AL[3]-Ba[3];if(Bj>(
AL[1]-Ba[1]))Bj=(AL[3]-Ba[1])-this.Av.Gj;this.Av.Gk(this.Av.Br-Bj);},AlL:function(
H){this.Av.Gl(-1);},FX:function(H){var B;this.Ik.N0(this.Av.Gj*this.Av.AM);this.
Ik.N4(((B=this.Av.M)[3]-B[1])-this.Av.N6);this.Ik.N2(-this.Av.Br);},_Init:function(
aArg){A.abp.Menu._Init.call(this,aArg);A.abh.AH._Init.call(this.Background={I:this
},0);A.Core.Hz._Init.call(this.Hz={I:this},0);A.Core.Cu._Init.call(this.Av={I:this
},0);A.kh.AD._Init.call(this.Ik={I:this},0);A.Core.B0._Init.call(this.C2={I:this
},0);this.__proto__=C.AQr;this.G(B3);this.Background.AW(0x3);this.Background.G(B3
);this.Hz.AW(0x3F);this.Hz.G(B3);this.Av.AW(0x3F);this.Av.G(B3);this.Av.AcT(60);
this.Av.I0(0);this.Av.Nb(this.KB);this.Ik.AW(0x3A);this.Ik.G(BI);this.Ik.L(0xFF808080
);this.J(this.Background,0);this.J(this.Hz,0);this.J(this.Av,0);this.J(this.Ik,0
);this.Av.Eu=[this,this.FX];this.Av.GD=[this,this.GD];this.Av.AtL(this.Hz);this.
AR=[this,this.Brd];this.C2.B1=[this,this.A28];this.C2.D_=[this,this.A28];},_Done:
function(){this.__proto__=A.abp.Menu;this.Background._Done();this.Hz._Done();this.
Av._Done();this.Ik._Done();this.C2._Done();A.abp.Menu._Done.call(this);},_ReInit:
function(){A.abp.Menu._ReInit.call(this);this.Background._ReInit();this.Hz._ReInit(
);this.Av._ReInit();this.Ik._ReInit();this.C2._ReInit();},_Mark:function(D){var B;
A.abp.Menu._Mark.call(this,D);if((B=this.AbX)&&(B._cycle!=D))B._Mark(B._cycle=D);
if((B=this.AZ)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.AR)&&((B=B[0])._cycle
!=D))B._Mark(B._cycle=D);if((B=this.Background)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Hz)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Av)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Ik)._cycle!=D)B._Mark(B._cycle=D);if((B=this.C2)._cycle!=D)B._Mark(
B._cycle=D);},_className:"Demonstrator::VerticalMenu"};C.APy={FZ:null,AH:null,CR:
null,Init:function(aArg){var B;A.za([this,this.Iw],[B=A._GetAutoObject(A.abq.K6)
,B.A2L,B.A3Z],0);A.ow([this,this.Iw],this);},Z2:function(E){if(this.FZ===E)return;
if(!!this.FZ)this.HW(this.FZ);this.FZ=E;if(!!this.FZ)this.J(this.FZ,0);this.A8(E
);this.Alw(E,this.CR);this.Al();},Iw:function(H){var B;if(!!A._GetAutoObject(A.abq.
K6).Apy)this.Z2((C.AfE.isPrototypeOf(B=A._NewObject(A._GetAutoObject(A.abq.K6).Apy
,0))?B:null));else this.Z2(null);},_Init:function(aArg){A.Core.O._Init.call(this
,aArg);A.abh.AH._Init.call(this.AH={I:this},0);A.abh.CR._Init.call(this.CR={I:this
},0);this.__proto__=C.APy;this.G(EG);this.AH.AW(0x3F);this.AH.G(EG);this.CR.G(EG
);this.CR.L(0xFF000000);this.J(this.AH,0);this.J(this.CR,0);this.Init(aArg);},_Done:
function(){this.__proto__=A.Core.O;this.AH._Done();this.CR._Done();A.Core.O._Done.
call(this);},_ReInit:function(){A.Core.O._ReInit.call(this);this.AH._ReInit();this.
CR._ReInit();},_Mark:function(D){var B;A.Core.O._Mark.call(this,D);if((B=this.FZ
)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.AH)._cycle!=D)B._Mark(B._cycle=D
);if((B=this.CR)._cycle!=D)B._Mark(B._cycle=D);},_className:"Demonstrator::SelectionArea"
};C.AIa={Aeh:0,R4:0,Background:null,T:null,Ag6:null,AbE:null,V2:null,AbF:null,LB:
null,Lq:false,Ko:false,Ai:function(Ae){var B;C.A$.Ai.call(this,Ae);var FT=((Ae&0x10
)===0x10);var Fv=((Ae&0x20)===0x20);var Gv=((Ae&0x40)===0x40);if(!FT){this.Background.
L(0xFFAAAAAA);this.T.L(0xFF888888);this.LB.An(false);this.LB.W(false);}else if(Gv
){this.Background.L(A.iF.A6);this.T.L(A.iF.Bg);this.LB.An(true);this.LB.W(true);
}else if(Fv){this.Background.L(0xFFE6DED8);this.T.L(0xFF000000);this.LB.An(true);
this.LB.W(true);}else{this.Background.L(0xFFFFFFFF);this.T.L(0xFF000000);this.LB.
An(false);this.LB.W(false);}if(!this.Ko&&Fv)A._GetAutoObject(A.abq.K6).Nc(this.Aeh
);this.LB.Bgb(this.R4>0);this.LB.BgA(this.Aeh>0);this.Lq=FT;this.Ko=Fv;},B7:function(
Z){if(!this.AZ){this.V2.Ar(A.zW(A.abi.Acj));this.AbE.L(A.iF.Ads);return;}this.Hl=
Z;if(!!this.AZ){this.R4=this.AZ.LP(Z,26);this.Aeh=this.AZ.LP(Z,22);var Ow=this.AZ.
Cp(Z,1);var Ajy=this.AZ.Hq(Z,11);var Ajp=this.AZ.IC(Z,17);var K0=this.AZ.IC(Z,13
);var HF=this.AZ.AkF(Z,14);this.T.R(Ow.toFixed());var VB=A._GetAutoObject(A.Device.
Helper).AH2(K0,Ajy,Ajp);switch(HF){case 0:this.V2.Ar(A.zW(A.abi.Acj));break;case
1:this.V2.Ar(A.zW(A.abi.Asx));break;case 2:this.V2.Ar(A.zW(A.abi.AsA));break;default:
A.aa8("%s%e",Gr,HF);}this.AbF.Ar(this.V2.Ah);this.AbE.L(A._GetAutoObject(A.abk.Assessment
).Pp(VB));this.Al();}},_Init:function(aArg){C.A$._Init.call(this,aArg);A.abh.AH.
_Init.call(this.Background={I:this},0);A.kh.CH._Init.call(this.T={I:this},0);A.abh.
Am._Init.call(this.Ag6={I:this},0);A.abh.Am._Init.call(this.AbE={I:this},0);A.abh.
Am._Init.call(this.V2={I:this},0);A.abh.Am._Init.call(this.AbF={I:this},0);C.LB.
_Init.call(this.LB={I:this},0);this.__proto__=C.AIa;this.Background.AW(0x3F);this.
Background.G(B3);this.T.AW(0x3F);this.T.G(I4);this.T.R(A.z2(A.abg.Hs));this.T.A0(
0x11);this.T.L(0xFF000000);this.Ag6.G(Ip);this.Ag6.L(A.iF.Text);this.AbE.G(Ip);this.
AbE.L(A.iF.E1);this.V2.G(Ip);this.AbF.G(Ip);this.AbF.L(A.iF.Text);this.AbF.Cc(1);
this.LB.AW(0x3);this.LB.G(Oc);this.J(this.Background,0);this.J(this.T,0);this.J(
this.Ag6,0);this.J(this.AbE,0);this.J(this.V2,0);this.J(this.AbF,0);this.J(this.
LB,0);this.T.Y(A.zW(A.eV.Au));this.T.Bz(A.zW(A.eV.AB));this.T.C7(A.zW(A.eV.Cq));
this.Ag6.Ar(A.zW(C.ADk));this.AbE.Ar(A.zW(C.AQJ));this.V2.Ar(A.zW(A.abi.Acj));this.
AbF.Ar(A.zW(A.abi.Acj));},_Done:function(){this.__proto__=C.A$;this.Background._Done(
);this.T._Done();this.Ag6._Done();this.AbE._Done();this.V2._Done();this.AbF._Done(
);this.LB._Done();C.A$._Done.call(this);},_ReInit:function(){C.A$._ReInit.call(this
);this.Background._ReInit();this.T._ReInit();this.Ag6._ReInit();this.AbE._ReInit(
);this.V2._ReInit();this.AbF._ReInit();this.LB._ReInit();},_Mark:function(D){var
B;C.A$._Mark.call(this,D);if((B=this.Background)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.T)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ag6)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.AbE)._cycle!=D)B._Mark(B._cycle=D);if((B=this.V2)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.AbF)._cycle!=D)B._Mark(B._cycle=D);if((B=this.LB)._cycle!=
D)B._Mark(B._cycle=D);},_className:"Demonstrator::AnimalMenuItem"};C.LB={S0:null
,UR:null,AiE:null,Mx:null,Nj:null,XN:null,Aam:null,AsU:false,Aus:false,C3:function(
){this.Al();},Ai:function(Ae){var B;A.Core.O.Ai.call(this,Ae);var Gv=((Ae&0x40)===
0x40);if(Gv){this.Mx.L(A.iF.Bg);this.Nj.L(A.iF.Bg);}else{this.Mx.L(A.iF.Text);this.
Nj.L(A.iF.Text);}if(this.Aus){this.Mx.R(A.z2(A.abg.Bhw));if(this.AsU){this.S0.Ar(
A.zW(C.AC6));this.UR.Ar(A.zW(C.AC6));}else{this.S0.Ar(A.zW(C.Apv));this.UR.Ar(A.
zW(C.Apv));}}else if(this.AsU){this.S0.Ar(A.zW(C.AyZ));this.UR.Ar(A.zW(C.AyZ));this.
Mx.R(Pb);}var AX$=this.Aus||this.AsU;this.S0.W(AX$);this.UR.W(AX$);this.Mx.W(AX$
);this.XN.An(this.Aus);},BgA:function(E){if(this.Aus===E)return;this.Aus=E;this.
Al();},Bgb:function(E){if(this.AsU===E)return;this.AsU=E;this.Al();},_Init:function(
aArg){A.Core.O._Init.call(this,aArg);A.abh.Am._Init.call(this.S0={I:this},0);A.abh.
Am._Init.call(this.UR={I:this},0);A.abh.Am._Init.call(this.AiE={I:this},0);A.kh.
CH._Init.call(this.Mx={I:this},0);A.kh.CH._Init.call(this.Nj={I:this},0);A.Core.
Bd._Init.call(this.XN={I:this},0);A.Core.Bd._Init.call(this.Aam={I:this},0);this.
__proto__=C.LB;var B;this.G(Nm);this.S0.AW(0x6);this.S0.G(Cv);this.S0.L(A.iF.CP);
this.S0.Cc(1);this.UR.AW(0x6);this.UR.G(Cv);this.UR.L(A.iF.Text);this.AiE.AW(0xE
);this.AiE.G(FK);this.Mx.AW(0x7);this.Mx.G(Od);this.Mx.A0(0x11);this.Mx.L(0xFF000000
);this.Nj.AW(0x3);this.Nj.G(Nn);this.Nj.R(A.z2(A.abg.Temperature));this.Nj.A0(0x11
);this.Nj.L(0xFF000000);this.XN.AW(0x3);this.XN.J9(Ka);this.XN.J8(Oe);this.XN.D$(
MB);this.XN.Eg(Pc);this.Aam.AW(0x3);this.Aam.J9(RL);this.Aam.J8(Ti);this.Aam.D$(
Ve);this.Aam.Eg(Vf);this.J(this.S0,0);this.J(this.UR,0);this.J(this.AiE,0);this.
J(this.Mx,0);this.J(this.Nj,0);this.J(this.XN,0);this.J(this.Aam,0);this.S0.Ar(A.
zW(C.Apv));this.UR.Ar(A.zW(C.Apv));this.AiE.Ar(A.zW(C.AP2));this.Mx.Y(A.zW(A.eV.
Au));this.Mx.Bz(A.zW(A.eV.AB));this.Mx.C7(A.zW(A.eV.Cq));this.Nj.Y(A.zW(A.eV.Au)
);this.Nj.Bz(A.zW(A.eV.AB));this.Nj.C7(A.zW(A.eV.Cq));this.XN.KD=[B=A._GetAutoObject(
A.abq.K6),B.A95];this.Aam.KD=[B=A._GetAutoObject(A.abq.K6),B.A9S];},_Done:function(
){this.__proto__=A.Core.O;this.S0._Done();this.UR._Done();this.AiE._Done();this.
Mx._Done();this.Nj._Done();this.XN._Done();this.Aam._Done();A.Core.O._Done.call(
this);},_ReInit:function(){A.Core.O._ReInit.call(this);this.S0._ReInit();this.UR.
_ReInit();this.AiE._ReInit();this.Mx._ReInit();this.Nj._ReInit();this.XN._ReInit(
);this.Aam._ReInit();this.Nj.R(A.z2(A.abg.Temperature));this.Mx.Y(A.zW(A.eV.Au));
this.Mx.Bz(A.zW(A.eV.AB));this.Mx.C7(A.zW(A.eV.Cq));this.Nj.Y(A.zW(A.eV.Au));this.
Nj.Bz(A.zW(A.eV.AB));this.Nj.C7(A.zW(A.eV.Cq));this.C3();},_Mark:function(D){var
B;A.Core.O._Mark.call(this,D);if((B=this.S0)._cycle!=D)B._Mark(B._cycle=D);if((B=
this.UR)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AiE)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Mx)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Nj)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.XN)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Aam)._cycle!=
D)B._Mark(B._cycle=D);},_className:"Demonstrator::AnimalItemAction"};C.WC={C3:function(
){this.Al();},Ai:function(Ae){C.Aol.Ai.call(this,Ae);if(!this.Text.String.length
)this.Text.R(A.z2(A.abg.Filter));},A16:function(H){var DF=(A.Core.B0.isPrototypeOf(
H)?H:null);if(!!DF)A._GetAutoObject(A.abq.Ahl).FA(DF.D4);},A15:function(H){A._GetAutoObject(
A.abq.Ahl).Delete();},_Init:function(aArg){C.Aol._Init.call(this,aArg);this.__proto__=
C.WC;this.Am.Ar(A.zW(C.Filter));},_ReInit:function(){C.Aol._ReInit.call(this);this.
C3();},_className:"Demonstrator::FilterView"};C.Zg={D2:null,Wv:null,Q0:null,Ww:null
,Ib:null,WS:null,Akr:null,Ap:null,Ol:null,Mk:null,Zf:null,G8:0,AsH:0,AB_:false,Ai:
function(Ae){A.Core.O.Ai.call(this,Ae);this.Q0.R(this.Ap.Format(JT));if(this.AB_
){this.Q0.W(false);this.WS.W(false);this.Ib.W(false);this.Ww.W(false);this.Ol.An(
true);this.Ol.W(true);this.Mk.Cc(2);this.Mk.AOy(2);this.Mk.G(A.aaP(this.Mk.M,this.
Ol.M[2]));}else{this.Q0.W(true);this.WS.W(true);this.Ib.W(true);this.Ww.W(true);
this.Ol.An(false);this.Ol.W(false);this.Mk.Cc(3);this.Mk.AOy(3);this.Mk.G(A.aaP(
this.Mk.M,this.Q0.M[2]));}},Bs1:function(H){this.Bgg(!this.AB_);},Abi:function(H
){var F;if(!!this.D2)this.Xy((F=this.D2,F[1].call(F[0])));},AcV:function(E){if(A.
z_(this.D2,E))return;if(!!this.D2)A.zn([this,this.Abi],this.D2,0);this.D2=E;if(!
!E)A.za([this,this.Abi],E,0);if(!!E)A.ow([this,this.Abi],this);},Xy:function(E){
if(this.G8===E)return;this.G8=E;this.Ap.Initialize(this.G8);this.Bt1(this);this.
Al();},Agq:function(H){var B;var F;var BR=this.G8;var AgT=this.Zf.Da(this.AsH);this.
AFm(AgT);if(this.Ap.Year>2100)this.Ap.Initialize2(2100,12,31,0,0,0);this.Xy(((B=(
this.Ap.JL()|0))<0)?B+0x100000000:B);if(this.G8!==BR){if(!!this.D2)(F=this.D2,F[
2].call(F[0],this.G8));A.aat(this.D2,0);}},Agc:function(H){var B;var F;var BR=this.
G8;var AgT=this.Zf.Da(this.AsH);this.AG2(AgT);if(this.Ap.Year<2000)this.Ap.Initialize2(
2000,1,1,0,0,0);this.Xy(((B=(this.Ap.JL()|0))<0)?B+0x100000000:B);if(this.G8!==BR
){if(!!this.D2)(F=this.D2,F[2].call(F[0],this.G8));A.aat(this.D2,0);}},BfU:function(
E){if(this.AsH===E)return;this.AsH=E;},Bgg:function(E){if(this.AB_===E)return;this.
AB_=E;this.Al();},Btx:function(H){var B;var F;var BR=this.G8;this.Ap.Ld(this.Ol.
AAJ());this.Ap.UO(this.Ol.AAN());this.Ap.Year=this.Ol.AoI();this.Xy(((B=(this.Ap.
JL()|0))<0)?B+0x100000000:B);if(this.G8!==BR){if(!!this.D2)(F=this.D2,F[2].call(
F[0],this.G8));A.aat(this.D2,0);}},Bt1:function(H){this.Ol.Ld(this.Ap.Gz);this.Ol.
UO(this.Ap.GB);this.Ol.Aim(this.Ap.Year);},AFm:function(AvE){var B;switch(AvE){case
0:if(this.Ap.Gz<this.Ap.ZY())this.Ap.Ld(this.Ap.Gz+1);else{this.Ap.Ld(1);this.AFm(
2);}break;case 1:if((this.Ap.Gz+7)<=this.Ap.ZY())this.Ap.Ld(this.Ap.Gz+7);else{this.
Ap.Ld((7-this.Ap.ZY())+this.Ap.Gz);this.AFm(2);}break;case 2:if(this.Ap.GB<12)this.
Ap.UO(this.Ap.GB+1);else{this.Ap.UO(1);this.AFm(3);}break;case 3:this.Ap.Year++;
break;default:throw new Error(RM+AvE.toFixed());}},AG2:function(AvE){var B;switch(
AvE){case 0:if(this.Ap.Gz>1)this.Ap.Ld(this.Ap.Gz-1);else{this.AG2(2);this.Ap.Ld(
this.Ap.ZY());}break;case 1:if((this.Ap.Gz-7)>0)this.Ap.Ld(this.Ap.Gz-7);else{this.
AG2(2);this.Ap.Ld(this.Ap.ZY()-(7-this.Ap.Gz));}break;case 2:if(this.Ap.GB>1)this.
Ap.UO(this.Ap.GB-1);else{this.Ap.UO(12);this.AG2(3);}break;case 3:this.Ap.Year--;
break;default:throw new Error(RM+AvE.toFixed());}},Bd0:function(){return this.AsH;
},_Init:function(aArg){A.Core.O._Init.call(this,aArg);A.abh.Text._Init.call(this.
Wv={I:this},0);A.abh.Text._Init.call(this.Q0={I:this},0);C.Asv._Init.call(this.Ww={
I:this},0);A.abx.Ib._Init.call(this.Ib={I:this},0);C.Asv._Init.call(this.WS={I:this
},0);A.abh.Am._Init.call(this.Akr={I:this},0);A.Core.Bp._Init.call(this.Ap={I:this
},0);C.AJk._Init.call(this.Ol={I:this},0);C.Asv._Init.call(this.Mk={I:this},0);C.
Zf._Init.call(this.Zf={I:this},0);this.__proto__=C.Zg;this.G(Vg);this.Wv.G(Vh);this.
Wv.A0(0x11);this.Wv.R(A.z2(A.abg.Date));this.Wv.L(0xFF000000);this.Q0.G(X7);this.
Q0.A0(0x11);this.Q0.R(RN);this.Q0.L(0xFF000000);this.Ww.G(X8);this.Ww.A3D(200);this.
Ib.G(Vi);this.Ib.Atz(120);this.Ib.Gj=30;this.Ib.A3m(A.iF.CP);this.Ib.BeV(A.iF.CP
);this.Ib.BeZ(A.iF.CP);this.Ib.A3n(A.iF.Text);this.Ib.Be0(A.iF.Text);this.Ib.BeW(
A.iF.A6);this.Ib.Be1(A.iF.Bg);this.Ib.BeY(A.iF.A6);this.Ib.BeX(A.iF.Text);this.WS.
G(Tj);this.WS.A3D(200);this.Akr.G(Vj);this.Ol.G(Qg);this.Mk.G(Vk);this.Mk.Cc(3);
this.Mk.AOy(3);this.Mk.L(A.iF.Text);this.J(this.Wv,0);this.J(this.Q0,0);this.J(this.
Ww,0);this.J(this.Ib,0);this.J(this.WS,0);this.J(this.Akr,0);this.J(this.Ol,0);this.
J(this.Mk,0);this.Wv.Y(A.zW(A.eV.AB));this.Q0.Y(A.zW(A.eV.Gg));this.Ww.AR=[this,
this.Agc];this.Ww.Dx(A.zW(C.AII));this.Ww.AOz(A.zW(C.AIJ));this.Ib.AF([this,this.
Bd0,this.BfU]);this.Ib.Be6(this.Zf);this.Ib.AOj(A.zW(A.eV.AB));this.Ib.A3B(A.zW(
A.eV.AB));this.WS.AR=[this,this.Agq];this.WS.Dx(A.zW(C.AIK));this.WS.AOz(A.zW(C.
AIL));this.Akr.Ar(A.zW(C.ALG));this.Ol.Ds=[this,this.Btx];this.Mk.AR=[this,this.
Bs1];this.Mk.Dx(A.zW(A.abi.Aki));this.Mk.AOz(A.zW(A.abi.Aki));},_Done:function(){
this.__proto__=A.Core.O;this.Wv._Done();this.Q0._Done();this.Ww._Done();this.Ib.
_Done();this.WS._Done();this.Akr._Done();this.Ap._Done();this.Ol._Done();this.Mk.
_Done();this.Zf._Done();A.Core.O._Done.call(this);},_ReInit:function(){A.Core.O.
_ReInit.call(this);this.Wv._ReInit();this.Q0._ReInit();this.Ww._ReInit();this.Ib.
_ReInit();this.WS._ReInit();this.Akr._ReInit();this.Ap._ReInit();this.Ol._ReInit(
);this.Mk._ReInit();this.Zf._ReInit();this.Wv.R(A.z2(A.abg.Date));this.Wv.Y(A.zW(
A.eV.AB));this.Q0.Y(A.zW(A.eV.Gg));this.Ib.AOj(A.zW(A.eV.AB));this.Ib.A3B(A.zW(A.
eV.AB));},_Mark:function(D){var B;A.Core.O._Mark.call(this,D);if((B=this.D2)&&((
B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.Wv)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Q0)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ww)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Ib)._cycle!=D)B._Mark(B._cycle=D);if((B=this.WS)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.Akr)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ap
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ol)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Mk)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Zf)._cycle!=D)B._Mark(B._cycle=
D);},_className:"Demonstrator::DateSelector"};C.Asv={CN:null,At3:null,AJx:null,AR:
null,Bi:null,C2:null,CI:null,GQ:null,WM:null,ALj:0,Sr:0,AO_:0,AV:0xFFFFFFFF,AWH:
false,Lq:false,Ko:false,QB:false,Ai:function(Ae){var B;A.abp.Afx.Ai.call(this,Ae
);var FT=((Ae&0x10)===0x10);var Fv=((Ae&0x20)===0x20);var Fu=this.CI.Down&&this.
CI.WV;if(!FT)this.GQ.Ar(this.AJx);else if(Fu){this.GQ.Ar(this.At3);this.GQ.Cc(this.
AO_);}else{this.GQ.Ar(this.CN);this.GQ.Cc(this.Sr);}this.GQ.L(this.AV);this.Lq=FT;
this.Ko=Fv;this.QB=Fu;},Pr:function(H){this.Al();A.ow(this.AR,this);},Agz:function(
H){if(this.CI.Down)return;if(this.C2.Aag)return;this.Al();if(this.Bi.Bw){A.ow(this.
AR,this);this.Bi.An(false);}this.Bi.An(true);},A9O:function(H){this.Al();},Aw7:function(
H){if(!this.CI.WV)return;if(this.CI.MQ)return;if((this.WM.TZ<=0)||(this.CI.IV<this.
WM.TZ)){if(this.CI.IV>=this.Bi.TZ)A.ow(this.AR,this);else this.Bi.An(true);}this.
WM.An(false);},Aw6:function(H){this.WM.An(true);if(this.Bi.Bw){A.ow(this.AR,this
);this.Bi.An(false);}},Dx:function(E){if(this.CN===E)return;this.CN=E;this.Al();
},AOz:function(E){if(this.At3===E)return;this.At3=E;this.Al();},AXu:function(H){
if(!this.CI.WV)return;if(this.CI.MQ)return;if((this.ALj>=0)&&this.AWH){this.AWH=
false;this.WM.An(true);A.ow(this.AR,this);}},A3D:function(E){if(this.ALj===E)return;
this.ALj=E;this.WM.UM(E);},Bsv:function(H){this.AWH=true;},Cc:function(E){if(this.
Sr===E)return;this.Sr=E;this.Al();},AOy:function(E){if(this.AO_===E)return;this.
AO_=E;this.Al();},L:function(E){if(this.AV===E)return;this.AV=E;this.Al();},_Init:
function(aArg){A.abp.Afx._Init.call(this,aArg);A.Core.Timer._Init.call(this.Bi={
I:this},0);A.Core.B0._Init.call(this.C2={I:this},0);A.Core.Bd._Init.call(this.CI={
I:this},0);A.abh.Am._Init.call(this.GQ={I:this},0);A.Core.Timer._Init.call(this.
WM={I:this},0);this.__proto__=C.Asv;this.G(Np);this.Bi.P3(0);this.Bi.UM(50);this.
C2.Filter=149;this.CI.AW(0x3F);this.CI.J9(Pd);this.CI.J8(Tk);this.CI.D$(X9);this.
CI.Eg(Ka);this.CI.Ac_=0xF;this.CI.ABt(100);this.GQ.AW(0x3F);this.GQ.G(Np);this.GQ.
A0(0x12);this.WM.P3(0);this.J(this.CI,0);this.J(this.GQ,0);this.Bi.Mw=[this,this.
Pr];this.C2.B1=[this,this.Agz];this.CI.AAT=[this,this.A9O];this.CI.AsW=[this,this.
A9O];this.CI.D_=[this,this.AXu];this.CI.KD=[this,this.Aw7];this.CI.B1=[this,this.
Aw6];this.GQ.Ar(A.zW(A.abj.J4));this.CN=A.zW(A.abj.J4);this.At3=A.zW(A.abj.J4);this.
AJx=A.zW(A.abj.J4);this.WM.Mw=[this,this.Bsv];},_Done:function(){this.__proto__=
A.abp.Afx;this.Bi._Done();this.C2._Done();this.CI._Done();this.GQ._Done();this.WM.
_Done();A.abp.Afx._Done.call(this);},_ReInit:function(){A.abp.Afx._ReInit.call(this
);this.Bi._ReInit();this.C2._ReInit();this.CI._ReInit();this.GQ._ReInit();this.WM.
_ReInit();},_Mark:function(D){var B;A.abp.Afx._Mark.call(this,D);if((B=this.CN)&&(
B._cycle!=D))B._Mark(B._cycle=D);if((B=this.At3)&&(B._cycle!=D))B._Mark(B._cycle=
D);if((B=this.AJx)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.AR)&&((B=B[0]).
_cycle!=D))B._Mark(B._cycle=D);if((B=this.Bi)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.C2)._cycle!=D)B._Mark(B._cycle=D);if((B=this.CI)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.GQ)._cycle!=D)B._Mark(B._cycle=D);if((B=this.WM)._cycle!=D)B._Mark(
B._cycle=D);},_className:"Demonstrator::IconButton"};C.AIp={OK:null,T:null,Ab_:null
,_Init:function(aArg){C.E2._Init.call(this,aArg);A.abh.AH._Init.call(this.OK={I:
this},0);A.abh.Text._Init.call(this.T={I:this},0);C.Ab_._Init.call(this.Ab_={I:this
},0);this.__proto__=C.AIp;this.G(Vl);this.OK.AW(0x1D);this.OK.G(B3);this.OK.L(0xFFE6E6E6
);this.T.AW(0x1D);this.T.G(X_);this.T.A0(0x11);this.T.R(A.z2(A.abg.AZa));this.T.
L(0xFF000000);this.Ab_.G(X$);this.J(this.OK,0);this.J(this.T,0);this.J(this.Ab_,
0);this.T.Y(A.zW(A.eV.Au));},_Done:function(){this.__proto__=C.E2;this.OK._Done(
);this.T._Done();this.Ab_._Done();C.E2._Done.call(this);},_ReInit:function(){C.E2.
_ReInit.call(this);this.OK._ReInit();this.T._ReInit();this.Ab_._ReInit();this.T.
R(A.z2(A.abg.AZa));this.T.Y(A.zW(A.eV.Au));},_Mark:function(D){var B;C.E2._Mark.
call(this,D);if((B=this.OK)._cycle!=D)B._Mark(B._cycle=D);if((B=this.T)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.Ab_)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Demonstrator::AnimalsHeader"};C.Arv={OK:null,T:null,AcE:null,Acz:null,Bd:null,Dk:
Vm,Ah1:false,Ai:function(Ae){C.E2.Ai.call(this,Ae);if(this.Ah1){this.Acz.W(true);
this.AcE.W(false);}else{this.Acz.W(false);this.AcE.W(true);}},Btk:function(H){if(
this.Ah1)A.ow(this.Afj,this);else A.ow(this.Afk,this);this.ABv(!this.Ah1);},U:function(
E){if(this.Dk===E)return;this.Dk=E;this.T.R(E);},ABv:function(E){if(this.Ah1===E
)return;this.Ah1=E;this.Al();},_Init:function(aArg){C.E2._Init.call(this,aArg);A.
abh.AH._Init.call(this.OK={I:this},0);A.abh.Text._Init.call(this.T={I:this},0);A.
abh.Am._Init.call(this.AcE={I:this},0);A.abh.Am._Init.call(this.Acz={I:this},0);
A.Core.Bd._Init.call(this.Bd={I:this},0);this.__proto__=C.Arv;this.G(B3);this.OK.
AW(0x1D);this.OK.G(B3);this.OK.L(0xFFE6E6E6);this.T.AW(0x1D);this.T.G(Vn);this.T.
A0(0x11);this.T.R(Vm);this.T.L(0xFF000000);this.AcE.G(RO);this.AcE.W(false);this.
Acz.AW(0x3A);this.Acz.G(RO);this.Bd.J9(Ka);this.Bd.J8(Ya);this.Bd.D$(Yb);this.Bd.
Eg(Pc);this.J(this.OK,0);this.J(this.T,0);this.J(this.AcE,0);this.J(this.Acz,0);
this.J(this.Bd,0);this.T.Y(A.zW(A.eV.Au));this.AcE.Ar(A.zW(C.AIs));this.Acz.Ar(A.
zW(C.Ag_));this.Bd.KD=[this,this.Btk];},_Done:function(){this.__proto__=C.E2;this.
OK._Done();this.T._Done();this.AcE._Done();this.Acz._Done();this.Bd._Done();C.E2.
_Done.call(this);},_ReInit:function(){C.E2._ReInit.call(this);this.OK._ReInit();
this.T._ReInit();this.AcE._ReInit();this.Acz._ReInit();this.Bd._ReInit();this.T.
Y(A.zW(A.eV.Au));},_Mark:function(D){var B;C.E2._Mark.call(this,D);if((B=this.OK
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.T)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.AcE)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Acz)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Bd)._cycle!=D)B._Mark(B._cycle=D);},_className:"Demonstrator::AccordionHeader"
};C.A$={AZ:null,AR:null,CI:null,Hl:-1,Xz:function(E){if(this.AZ===E)return;this.
AZ=E;},B7:function(Z){A.aa8("%s",AaC);},XA:function(E){if(A.z$(this.AR,E))return;
this.AR=E;},Aw7:function(H){if(!this.CI.WV)return;if(this.CI.MQ)return;A.ow(this.
AR,this);},_Init:function(aArg){A.Core.O._Init.call(this,aArg);A.Core.Bd._Init.call(
this.CI={I:this},0);this.__proto__=C.A$;this.G(B3);this.CI.AW(0x3F);this.CI.J9(Pc
);this.CI.J8(Yb);this.CI.D$(Ya);this.CI.Eg(Ka);this.CI.Ac_=0xF;this.CI.ABt(100);
this.J(this.CI,0);this.CI.KD=[this,this.Aw7];},_Done:function(){this.__proto__=A.
Core.O;this.CI._Done();A.Core.O._Done.call(this);},_ReInit:function(){A.Core.O._ReInit.
call(this);this.CI._ReInit();},_Mark:function(D){var B;A.Core.O._Mark.call(this,
D);if((B=this.AZ)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.AR)&&((B=B[0])._cycle
!=D))B._Mark(B._cycle=D);if((B=this.CI)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Demonstrator::ListItem"};C.E2={ANC:null,Afk:null,Afj:null,Bge:function(E){if(A.
z$(this.ANC,E))return;this.ANC=E;},A3K:function(E){if(A.z$(this.Afk,E))return;this.
Afk=E;},A3J:function(E){if(A.z$(this.Afj,E))return;this.Afj=E;},_Init:function(aArg
){A.Core.O._Init.call(this,aArg);this.__proto__=C.E2;this.G(B3);},_Mark:function(
D){var B;A.Core.O._Mark.call(this,D);if((B=this.ANC)&&((B=B[0])._cycle!=D))B._Mark(
B._cycle=D);if((B=this.Afk)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.
Afj)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);},_className:"Demonstrator::ListHeader"
};C.AJk={Ds:null,Y6:null,U6:null,U5:null,U4:null,Mt:null,Ms:null,J6:null,Lq:false
,Ko:false,Bt8:false,Ai:function(Ae){var B;A.abp.Afv.Ai.call(this,Ae);var FT=((Ae&
0x10)===0x10);var Fv=((Ae&0x20)===0x20);var A8V=(this.U4.XS||this.U5.XS)||this.U6.
XS;if(A8V)this.Y6.L(A.iF.Text);else this.Y6.L(A.iF.A7);this.Lq=FT;this.Ko=Fv;this.
Bt8=A8V;},Aw2:function(H){this.Al();if((!this.U4.XS&&!this.U5.XS)&&!this.U6.XS){
var Ty=this.AGa(this.AAN(),this.AoI());var Aa2=this.AAJ();this.J6.I0(Ty);if(Aa2>
Ty)this.Ld(Ty);A.ow(this.Ds,this);}},AXL:function(H){this.Al();},BeD:function(H){
var B;var Fw=this.Mt.ID;var Cj=(A.abh.Text.isPrototypeOf(B=this.Mt.B4)?B:null);if(
!Cj)return;Cj.R(A.aaq(Fw+1900,4,10));Cj.Y(A.zW(A.eV.Au));Cj.L(A.iF.Text);Cj.A0(0x12
);Cj.G(A.aaN(Cj.M,[(B=this.Mt.M)[2]-B[0],this.Mt.Gj]));},BeC:function(H){var B;var
Fw=this.Ms.ID;var Cj=(A.abh.Text.isPrototypeOf(B=this.Ms.B4)?B:null);if(!Cj)return;
Cj.R(A.aaq(Fw+1,2,10)+Qh);Cj.Y(A.zW(A.eV.Au));Cj.L(A.iF.Text);Cj.A0(0x12);Cj.G(A.
aaN(Cj.M,[(B=this.Ms.M)[2]-B[0],this.Ms.Gj]));},BeA:function(H){var B;var Fw=this.
J6.ID;var Cj=(A.abh.Text.isPrototypeOf(B=this.J6.B4)?B:null);if(!Cj)return;Cj.R(
A.aaq(Fw+1,2,10)+Qh);Cj.Y(A.zW(A.eV.Au));Cj.L(A.iF.Text);Cj.A0(0x12);Cj.G(A.aaN(
Cj.M,[(B=this.J6.M)[2]-B[0],this.J6.Gj]));},AoI:function(){return 1900+((((-this.
Mt.Br/this.Mt.Gj)|0)+2)%200);},Aim:function(E){if(E<1900)E=1900;if(E>2100)E=2100;
this.Mt.Gk(((E-1900)-2)*-this.Mt.Gj);var Ty=this.AGa(this.AAN(),E);this.J6.I0(Ty
);if(this.AAJ()>Ty)this.Ld(Ty);},AAN:function(){return 1+((((-this.Ms.Br/this.Ms.
Gj)|0)+2)%12);},UO:function(E){if(E<1)E=1;if(E>12)E=12;this.Ms.Gk(((E-1)-2)*-this.
Ms.Gj);var Ty=this.AGa(E,this.AoI());this.J6.I0(Ty);if(this.AAJ()>Ty)this.Ld(Ty);
},AAJ:function(){return 1+((((-this.J6.Br/this.J6.Gj)|0)+2)%this.J6.AM);},Ld:function(
E){var Ty=this.AGa(this.AAN(),this.AoI());if(E<1)E=1;if(E>Ty)E=Ty;this.J6.Gk(((E-
2)-1)*-this.J6.Gj);},AGa:function(AdM,AaT){if(AdM===2){if(!(AaT%4)&&(!!(AaT%100)||
!(AaT%400)))return 29;else return 28;}else if((((AdM===4)||(AdM===6))||(AdM===9)
)||(AdM===11))return 30;else return 31;},_Init:function(aArg){A.abp.Afv._Init.call(
this,aArg);A.abh.CR._Init.call(this.Y6={I:this},0);A.Core.Hz._Init.call(this.U6={
I:this},0);A.Core.Hz._Init.call(this.U5={I:this},0);A.Core.Hz._Init.call(this.U4={
I:this},0);A.Core.Cu._Init.call(this.Mt={I:this},0);A.Core.Cu._Init.call(this.Ms={
I:this},0);A.Core.Cu._Init.call(this.J6={I:this},0);this.__proto__=C.AJk;this.G(
AaD);this.Y6.G(Adz);this.Y6.N5(3);this.Y6.L(0xFFE1E1E1);this.Y6.W(true);this.U6.
G(Yc);this.U6.AOG(Vo);this.U6.AOl(0.2);this.U5.G(Yd);this.U5.AOG(Vo);this.U5.AOl(
0.2);this.U4.G(AdA);this.U4.AOG(Vo);this.U4.AOl(0.2);this.Mt.G(Yc);this.Mt.AOh(true
);this.Mt.Gk(60);this.Mt.AcT(30);this.Mt.I0(200);this.Ms.G(Yd);this.Ms.AOh(true);
this.Ms.Gk(60);this.Ms.AcT(30);this.Ms.I0(12);this.J6.G(AdA);this.J6.AOh(true);this.
J6.Gk(60);this.J6.AcT(30);this.J6.I0(31);this.J(this.Y6,0);this.J(this.U6,0);this.
J(this.U5,0);this.J(this.U4,0);this.J(this.Mt,0);this.J(this.Ms,0);this.J(this.J6
,0);this.U6.Xt=[this,this.Aw2];this.U6.Ru=[this,this.AXL];this.U5.Xt=[this,this.
Aw2];this.U5.Ru=[this,this.AXL];this.U4.Xt=[this,this.Aw2];this.U4.Ru=[this,this.
AXL];this.Mt.GD=[this,this.BeD];this.Mt.AtL(this.U6);this.Ms.GD=[this,this.BeC];
this.Ms.AtL(this.U5);this.J6.GD=[this,this.BeA];this.J6.AtL(this.U4);},_Done:function(
){this.__proto__=A.abp.Afv;this.Y6._Done();this.U6._Done();this.U5._Done();this.
U4._Done();this.Mt._Done();this.Ms._Done();this.J6._Done();A.abp.Afv._Done.call(
this);},_ReInit:function(){A.abp.Afv._ReInit.call(this);this.Y6._ReInit();this.U6.
_ReInit();this.U5._ReInit();this.U4._ReInit();this.Mt._ReInit();this.Ms._ReInit(
);this.J6._ReInit();},_Mark:function(D){var B;A.abp.Afv._Mark.call(this,D);if((B=
this.Ds)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.Y6)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.U6)._cycle!=D)B._Mark(B._cycle=D);if((B=this.U5)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.U4)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Mt
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ms)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.J6)._cycle!=D)B._Mark(B._cycle=D);},_className:"Demonstrator::DatePicker"
};C.ADk={_class:function(){return A.abj.Ah;},0:{FileName:"./res_index/DemonstratorWhiteTile.png"
,Format:A.jt,NoOfFrames:1,FrameSize:[40,40],FrameDelay:0,_this:null}};C.AQJ={_class:
function(){return A.abj.Ah;},0:{FileName:"./res_index/DemonstratorWhiteTileSmall.png"
,Format:A.jt,NoOfFrames:1,FrameSize:[40,40],FrameDelay:0,_this:null}};C.AfE={_Init:
function(aArg){A.Core.O._Init.call(this,aArg);this.__proto__=C.AfE;this.G(EG);},
_className:"Demonstrator::SelectionAreaContent"};C.AIh={Ac:null,TR:null,Sg:null,
BtK:function(H){var B;this.Sg.G(A.aaL(this.Sg.M,((B=this.M)[3]-B[1])-((B=this.TR.
M)[3]-B[1])));},_Init:function(aArg){C.AfE._Init.call(this,aArg);A.Core.Ac._Init.
call(this.Ac={I:this},0);C.AHP._Init.call(this.TR={I:this},0);C.AQr._Init.call(this.
Sg={I:this},0);this.__proto__=C.AIh;this.Ac.AW(0x3F);this.Ac.G(EG);this.Ac.Le(1);
this.TR.G(KM);this.TR.Aj(true);this.TR.ABv(true);this.Sg.AW(0x3);this.Sg.G(AaE);
this.Sg.Aj(true);this.Sg.Nb(C.AIa);this.Sg.Bf$(C.AIp);this.J(this.Ac,0);this.J(this.
TR,0);this.J(this.Sg,0);this.A8(this.Sg);this.Ac.Eu=[this,this.BtK];this.Sg.Xz(A.
_GetAutoObject(A.abq.ArG));},_Done:function(){this.__proto__=C.AfE;this.Ac._Done(
);this.TR._Done();this.Sg._Done();C.AfE._Done.call(this);},_ReInit:function(){C.
AfE._ReInit.call(this);this.Ac._ReInit();this.TR._ReInit();this.Sg._ReInit();},_Mark:
function(D){var B;C.AfE._Mark.call(this,D);if((B=this.Ac)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.TR)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Sg)._cycle!=D)B._Mark(
B._cycle=D);},_className:"Demonstrator::AnimalSelectionActions"};C.TR={_Init:function(
aArg){C.Arv._Init.call(this,aArg);this.__proto__=C.TR;this.U(A.z2(A.abg.AZ6));},
_ReInit:function(){C.Arv._ReInit.call(this);this.U(A.z2(A.abg.AZ6));},_className:
"Demonstrator::ActionsHeader"};C.AHP={Background:null,YV:null,Adl:null,Ada:null,
Adk:null,AhT:null,AhU:null,AhV:null,AhW:null,Ah1:false,Afk:function(H){var B;this.
G(A.aaL(this.M,(B=this.YV.M)[3]-B[1]));},Afj:function(H){this.G(A.aaL(this.M,240
));},ABv:function(E){if(this.Ah1===E)return;this.Ah1=E;this.YV.ABv(E);if(E)this.
Afk(this);else this.Afj(this);},_Init:function(aArg){A.Core.O._Init.call(this,aArg
);A.abh.AH._Init.call(this.Background={I:this},0);C.TR._Init.call(this.YV={I:this
},0);C.Adl._Init.call(this.Adl={I:this},0);C.Ada._Init.call(this.Ada={I:this},0);
C.Adk._Init.call(this.Adk={I:this},0);A.abh.DU._Init.call(this.AhT={I:this},0);A.
abh.DU._Init.call(this.AhU={I:this},0);A.abh.DU._Init.call(this.AhV={I:this},0);
A.abh.DU._Init.call(this.AhW={I:this},0);this.__proto__=C.AHP;this.G(KM);this.Background.
AW(0x3F);this.Background.G(KM);this.YV.AW(0x1D);this.YV.G(B3);this.Adl.G(RP);this.
Ada.G(Nq);this.Adk.G(AlR);this.AhT.D$(Yb);this.AhT.Eg(Pc);this.AhT.L(A.iF.A7);this.
AhU.D$(AlS);this.AhU.Eg(JU);this.AhU.L(A.iF.A7);this.AhV.D$(AlT);this.AhV.Eg(AlU
);this.AhV.L(A.iF.A7);this.AhW.D$(AfU);this.AhW.Eg(AaF);this.AhW.L(A.iF.A7);this.
J(this.Background,0);this.J(this.YV,0);this.J(this.Adl,0);this.J(this.Ada,0);this.
J(this.Adk,0);this.J(this.AhT,0);this.J(this.AhU,0);this.J(this.AhV,0);this.J(this.
AhW,0);this.YV.A3K([this,this.Afk]);this.YV.A3J([this,this.Afj]);},_Done:function(
){this.__proto__=A.Core.O;this.Background._Done();this.YV._Done();this.Adl._Done(
);this.Ada._Done();this.Adk._Done();this.AhT._Done();this.AhU._Done();this.AhV._Done(
);this.AhW._Done();A.Core.O._Done.call(this);},_ReInit:function(){A.Core.O._ReInit.
call(this);this.Background._ReInit();this.YV._ReInit();this.Adl._ReInit();this.Ada.
_ReInit();this.Adk._ReInit();this.AhT._ReInit();this.AhU._ReInit();this.AhV._ReInit(
);this.AhW._ReInit();},_Mark:function(D){var B;A.Core.O._Mark.call(this,D);if((B=
this.Background)._cycle!=D)B._Mark(B._cycle=D);if((B=this.YV)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Adl)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ada)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.Adk)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
AhT)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AhU)._cycle!=D)B._Mark(B._cycle=D);
if((B=this.AhV)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AhW)._cycle!=D)B._Mark(
B._cycle=D);},_className:"Demonstrator::ActionsMenu"};C.LA={ZB:null,Ae5:null,Bd:
null,DU:null,Agx:function(H){},AUZ:function(s){this.Agx(s);},_Init:function(aArg
){A.Core.O._Init.call(this,aArg);A.abh.Am._Init.call(this.ZB={I:this},0);A.abh.Am.
_Init.call(this.Ae5={I:this},0);A.Core.Bd._Init.call(this.Bd={I:this},0);A.abh.DU.
_Init.call(this.DU={I:this},0);this.__proto__=C.LA;this.G(B3);this.ZB.G(Ye);this.
ZB.L(A.iF.Text);this.Ae5.G(AuF);this.Ae5.L(A.iF.Text);this.Ae5.Cc(0);this.Bd.J9(
Ka);this.Bd.J8(Oe);this.Bd.D$(MB);this.Bd.Eg(Pc);this.DU.D$(MB);this.DU.Eg(Oe);this.
DU.L(A.iF.A7);this.J(this.ZB,0);this.J(this.Ae5,0);this.J(this.Bd,0);this.J(this.
DU,0);this.ZB.Ar(A.zW(A.abj.J4));this.Ae5.Ar(A.zW(A.abj.AO1));this.Bd.B1=[this,this.
AUZ];},_Done:function(){this.__proto__=A.Core.O;this.ZB._Done();this.Ae5._Done();
this.Bd._Done();this.DU._Done();A.Core.O._Done.call(this);},_ReInit:function(){A.
Core.O._ReInit.call(this);this.ZB._ReInit();this.Ae5._ReInit();this.Bd._ReInit();
this.DU._ReInit();},_Mark:function(D){var B;A.Core.O._Mark.call(this,D);if((B=this.
ZB)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ae5)._cycle!=D)B._Mark(B._cycle=D);
if((B=this.Bd)._cycle!=D)B._Mark(B._cycle=D);if((B=this.DU)._cycle!=D)B._Mark(B.
_cycle=D);},_className:"Demonstrator::ActionsItem"};C.Ada={Adr:null,Agx:function(
H){var Aeh=A.aa2(this.Adr.String,0,10);var BtX=A._GetAutoObject(A.abq.K6).AxC(Aeh
);if(BtX){Aeh=Aeh+1;this.Adr.R(Aeh.toFixed());}},_Init:function(aArg){C.LA._Init.
call(this,aArg);C.Aoz._Init.call(this.Adr={I:this},0);this.__proto__=C.Ada;this.
Adr.G(AuG);this.Adr.R(AuH);this.Adr.L(A.iF.Text);this.J(this.Adr,-1);this.ZB.Ar(
A.zW(A.abi.Aok));},_Done:function(){this.__proto__=C.LA;this.Adr._Done();C.LA._Done.
call(this);},_ReInit:function(){C.LA._ReInit.call(this);this.Adr._ReInit();},_Mark:
function(D){var B;C.LA._Mark.call(this,D);if((B=this.Adr)._cycle!=D)B._Mark(B._cycle=
D);},_className:"Demonstrator::ScanAction"};C.Adl={S$:null,N8:null,AYp:0,Init:function(
aArg){var B;A.za([this,this.Bs7],[B=A._GetAutoObject(A.abq.K6),B.AN1,B.AOA],0);A.
za([this,this.Aw_],[B=A._GetAutoObject(A.Device.Device),B.AoG,B.Aqg],0);A.ow([this
,this.Aw_],this);},Ai:function(Ae){C.LA.Ai.call(this,Ae);this.N8.W(!A._GetAutoObject(
A.abq.K6).At4);},Agx:function(H){var B;A._GetAutoObject(A.abq.K6).A9S(this);},Aw_:
function(H){if(A._GetAutoObject(A.Device.Device).TemperatureUnit!==this.AYp){switch(
A._GetAutoObject(A.Device.Device).TemperatureUnit){case 0:this.N8.R(A.aap(A._GetAutoObject(
A.abq.K6).ApJ/100,0,1));break;case 1:{var Ark=A._GetAutoObject(A.Device.Converter
).AP6(A._GetAutoObject(A.abq.K6).ApJ/100,0,A._GetAutoObject(A.Device.Device).TemperatureUnit
);this.N8.R(A.aap(Ark,0,1));}break;default:A.aa8("%s%e",AuI,A._GetAutoObject(A.Device.
Device).TemperatureUnit);}this.AYp=A._GetAutoObject(A.Device.Device).TemperatureUnit;
}},BsQ:function(H){var B;var Arj=A.aaZ(this.N8.String,0);Arj=A._GetAutoObject(A.
Device.Converter).AP6(Arj,A._GetAutoObject(A.Device.Device).TemperatureUnit,0);Arj
*=100;A._GetAutoObject(A.abq.K6).A34(Math.round(Arj)|0);},Bs7:function(H){this.Al(
);},_Init:function(aArg){C.LA._Init.call(this,aArg);A.abr.S$._Init.call(this.S$={
I:this},0);C.N8._Init.call(this.N8={I:this},0);this.__proto__=C.Adl;var B;this.S$.
G(AiR);this.S$.A3F(A.z2(A.abg.AZi));this.N8.G(AuJ);this.N8.R(AuK);this.N8.L(A.iF.
Text);this.N8.Be7(true);this.AYp=A._GetAutoObject(A.Device.Device).TemperatureUnit;
this.J(this.S$,0);this.J(this.N8,0);this.ZB.Ar(A.zW(A.abi.ZA));this.S$.AF([B=A._GetAutoObject(
A.abq.K6),B.AN1,B.AOA]);this.S$.OnSetAppearance(A._GetAutoObject(A.abz.Ayy));this.
N8.Ds=[this,this.BsQ];this.Init(aArg);},_Done:function(){this.__proto__=C.LA;this.
S$._Done();this.N8._Done();C.LA._Done.call(this);},_ReInit:function(){C.LA._ReInit.
call(this);this.S$._ReInit();this.N8._ReInit();this.S$.A3F(A.z2(A.abg.AZi));},_Mark:
function(D){var B;C.LA._Mark.call(this,D);if((B=this.S$)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.N8)._cycle!=D)B._Mark(B._cycle=D);},_className:"Demonstrator::TemperatureAction"
};C.Aol={Q:null,CR:null,Bd:null,AeF:null,AkS:null,AkR:null,Aop:null,Text:null,GH:
null,Am:null,EJ:null,Aoo:null,Aoq:null,Awn:false,Bh:function(aSize){this.GH.G(A.
aaN(this.GH.M,aSize));this.CR.Aua(1);this.CR.IW(0,40);this.CR.ES(0,aSize[0]-20,20
,12.5,12.5,-90,90,10);this.CR.ES(0,20,20,12.5,12.5,90,270,10);this.CR.T6(0);},Ai:
function(Ae){var B;var F;A.Core.O.Ai.call(this,Ae);var Gv=((Ae&0x40)===0x40);if(
Gv){if(!!this.Q)this.Text.R((F=this.Q,F[1].call(F[0])));this.AeF.An(true);this.Am.
W(false);}else{if(!!this.Q)this.Text.R((F=this.Q,F[1].call(F[0])));this.AeF.An(false
);this.EJ.W(false);this.Am.W(true);}this.Awn=Gv;},Agx:function(H){var B;if(!((this.
S&0x80)===0x80))this.HO().AIB(this);},A16:function(H){},A5$:function(s){this.A16(
s);},Bc0:function(H){var B;var F;if(!this.Q||!(F=this.Q,F[1].call(F[0])).length)
this.EJ.G(A.aaP(this.EJ.M,A.zT(this.Text.M)[0]));else{this.EJ.G(A.aaP(this.EJ.M,
this.Text.AKv(0)[2]+2));this.EJ.G(A.aaR(this.EJ.M,this.Text.AKv(0)[1]));this.EJ.
G(A.aaL(this.EJ.M,(B=this.Text.AKv(0))[3]-B[1]));}this.Am.G(A.aaP(this.Am.M,this.
Text.M[0]-((B=this.Am.M)[2]-B[0])));},A15:function(H){},A5_:function(s){this.A15(
s);},AF:function(E){if(A.z_(this.Q,E))return;if(!!this.Q)A.zn([this,this.Oo],this.
Q,0);this.Q=E;if(!!E)A.za([this,this.Oo],E,0);if(!!E)A.ow([this,this.Oo],this);}
,Oo:function(H){this.Al();},BeF:function(H){var B;if(((this.S&0x80)===0x80))this.
HO().Ay2(this);},A9Y:function(H){},_Init:function(aArg){A.Core.O._Init.call(this
,aArg);A.Graphics.GY._Init.call(this.CR={I:this},0);A.Core.Bd._Init.call(this.Bd={
I:this},0);A.abm.Y5._Init.call(this.AeF={I:this},0);A.Core.B0._Init.call(this.AkS={
I:this},0);A.Core.B0._Init.call(this.AkR={I:this},0);A.Core.B0._Init.call(this.Aop={
I:this},0);A.abh.Text._Init.call(this.Text={I:this},0);A.abh.GH._Init.call(this.
GH={I:this},0);A.abh.Am._Init.call(this.Am={I:this},0);A.abh.AH._Init.call(this.
EJ={I:this},0);A.Core.B0._Init.call(this.Aoo={I:this},0);A.Core.B0._Init.call(this.
Aoq={I:this},0);this.__proto__=C.Aol;var B;this.G(AdB);this.Bd.AW(0x3F);this.Bd.
J9(Ka);this.Bd.J8(AdC);this.Bd.D$(Kb);this.Bd.Eg(Pd);this.AeF.FI(530);this.AeF.Z6(
530);this.AkS.Filter=143;this.AkR.Filter=45;this.Aop.Filter=1;this.Text.AW(0x3F);
this.Text.G(AdB);this.Text.IZ(true);this.Text.A0(0x12);this.Text.L(0xFFB3B3B3);this.
GH.G(AdB);this.GH.L(0xFFB3B3B3);this.GH.N5(1);this.Am.G(AuL);this.EJ.G(Vp);this.
EJ.L(0xFFB3B3B3);this.EJ.W(false);this.Aoo.Filter=138;this.Aoq.Filter=137;this.J(
this.Bd,0);this.J(this.Text,0);this.J(this.GH,0);this.J(this.Am,0);this.J(this.EJ
,0);this.Bd.KD=[this,this.Agx];this.AeF.Q=[B=this.EJ,B.Fe,B.W];this.AkS.B1=[this
,this.A5$];this.AkS.D_=[this,this.A5$];this.AkR.B1=[this,this.A5_];this.AkR.D_=[
this,this.A5_];this.Aop.B1=[this,this.BeF];this.Text.Rr([this,this.Bc0]);this.Text.
Y(A.zW(A.eV.AB));this.GH.XB(this.CR);this.Am.Ar(null);this.Aoo.B1=[this,this.A9Y
];this.Aoq.B1=[this,this.A9Y];},_Done:function(){this.__proto__=A.Core.O;this.CR.
_Done();this.Bd._Done();this.AeF._Done();this.AkS._Done();this.AkR._Done();this.
Aop._Done();this.Text._Done();this.GH._Done();this.Am._Done();this.EJ._Done();this.
Aoo._Done();this.Aoq._Done();A.Core.O._Done.call(this);},_ReInit:function(){A.Core.
O._ReInit.call(this);this.CR._ReInit();this.Bd._ReInit();this.AeF._ReInit();this.
AkS._ReInit();this.AkR._ReInit();this.Aop._ReInit();this.Text._ReInit();this.GH.
_ReInit();this.Am._ReInit();this.EJ._ReInit();this.Aoo._ReInit();this.Aoq._ReInit(
);this.Text.Y(A.zW(A.eV.AB));},_Mark:function(D){var B;A.Core.O._Mark.call(this,
D);if((B=this.Q)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.CR)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.Bd)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
AeF)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AkS)._cycle!=D)B._Mark(B._cycle=D);
if((B=this.AkR)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Aop)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Text)._cycle!=D)B._Mark(B._cycle=D);if((B=this.GH)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.Am)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
EJ)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Aoo)._cycle!=D)B._Mark(B._cycle=D);
if((B=this.Aoq)._cycle!=D)B._Mark(B._cycle=D);},_className:"Demonstrator::InputView"
};C.Ab_={Background:null,WC:null,_Init:function(aArg){A.Core.O._Init.call(this,aArg
);A.abh.AH._Init.call(this.Background={I:this},0);C.WC._Init.call(this.WC={I:this
},0);this.__proto__=C.Ab_;var B;this.G(AiS);this.Background.G(AiS);this.WC.AW(0x1D
);this.WC.G(AuM);this.J(this.Background,0);this.J(this.WC,0);this.WC.AF([B=A._GetAutoObject(
A.abq.Ahl),B.A2I,B.ABJ]);},_Done:function(){this.__proto__=A.Core.O;this.Background.
_Done();this.WC._Done();A.Core.O._Done.call(this);},_ReInit:function(){A.Core.O.
_ReInit.call(this);this.Background._ReInit();this.WC._ReInit();},_Mark:function(
D){var B;A.Core.O._Mark.call(this,D);if((B=this.Background)._cycle!=D)B._Mark(B.
_cycle=D);if((B=this.WC)._cycle!=D)B._Mark(B._cycle=D);},_className:"Demonstrator::FilterRow"
};C.N8={Init:function(aArg){var B;A.za([this,this.Aw_],[B=A._GetAutoObject(A.Device.
Device),B.AoG,B.Aqg],0);A.ow([this,this.Aw_],this);},Ai:function(Ae){var B;C.Aoz.
Ai.call(this,Ae);var Gv=((this.S&0x40)===0x40);if(!Gv&&(this.String.length>0))this.
Text.R(((this.String+AuN)+A._GetAutoObject(A.abk.Temperature).Aju())+String.fromCharCode(
0x0A));else this.Text.R(this.String+String.fromCharCode(0x0A));if(this.IM>this.String.
length)this.IM=this.String.length;},Aw_:function(H){this.Al();},_Init:function(aArg
){C.Aoz._Init.call(this,aArg);this.__proto__=C.N8;this.Init(aArg);},_className:"Demonstrator::TemperatureInputView"
};C.Aoz={Co:null,Ds:null,Tt:null,CF:null,Ako:null,Aku:null,Ahm:null,Bd:null,Text:
null,EJ:null,AnL:null,Api:null,CR:null,GH:null,AoB:null,An$:null,AnX:null,String:
A.jm,IM:0,AV:0xFFB3B3B3,AJm:false,Yp:false,Bh:function(aSize){this.GH.G(A.aaN(this.
GH.M,aSize));this.CR.Aua(1);this.CR.IW(0,40);this.CR.ES(0,aSize[0]-20,20,12.5,12.5
,-90,90,10);this.CR.ES(0,20,20,12.5,12.5,90,270,10);this.CR.T6(0);},Ai:function(
Ae){var B;A.abp.AfL.Ai.call(this,Ae);if(((Ae&0x40)===0x40))this.Tt.An(true);else{
this.Tt.An(false);this.EJ.W(false);}},BuC:function(H){var B;var Ba=this.Text.M;var
YG=0;var YH=0;if(this.EJ.EV[0]<Ba[0])YG=Ba[0]-this.EJ.EV[0];if(this.EJ.EV[0]>Ba[
2])YG=Ba[2]-this.EJ.EV[0];if(this.EJ.EV[1]<Ba[1])YH=Ba[1]-this.EJ.EV[1];if(this.
EJ.EN[1]>Ba[3])YH=Ba[3]-this.EJ.EN[1];if(!!YG||!!YH)this.Text.Gk(A.aak(this.Text.
Br,[YG,YH]));YG=this.Text.Br[0];YH=this.Text.Br[1];var CT=[(B=this.Text.Dd())[2]-
B[0],B[3]-B[1]];if(CT[0]<=((B=this.Text.M)[2]-B[0]))YG=0;if(CT[1]<=((B=this.Text.
M)[3]-B[1]))YH=0;this.Text.Gk([YG,YH]);},AxP:function(H){if(!this.Co)return;var BtM=
this.Text.A40(this.IM);var pos=this.Text.Alx(BtM);this.EJ.Eg(A.aaj(pos,[0,this.Co.
Ascent]));this.EJ.D$(A.aak(pos,[0,this.Co.Descent]));if(this.Tt.Bw){this.Tt.An(false
);this.Tt.An(true);}if(this.Yp){A.ow([this,this.BuC],this);this.Yp=false;}},Aw6:
function(H){if(!this.A00(0x80))this.HO().AIB(this);var Lw=this.Text.Bg1(this.Bd.
Ho);var AjF=this.Text.ACr(Lw);if(AjF!==this.IM){this.IM=AjF;A.ow([this,this.AxP]
,this);this.Yp=true;}},A9K:function(H){if(!this.Co)return;var Lw=this.Text.A40(this.
IM);if(this.CF.CM===6){Lw=[Lw[0]-1,Lw[1]];if(this.Text.ACr(Lw)===this.IM){Lw=[Lw[
0],Lw[1]-1];Lw=[this.Text.AKw(Lw[1]).length,Lw[1]];}}if(this.CF.CM===7){Lw=[Lw[0
]+1,Lw[1]];if(this.Text.ACr(Lw)===this.IM){Lw=[Lw[0],Lw[1]+1];Lw=[0,Lw[1]];}}var
AjF=this.Text.ACr(Lw);if(AjF!==this.IM){this.IM=AjF;A.ow([this,this.AxP],this);this.
Yp=true;}},A9H:function(H){if(!this.IM)return;this.R(A.aa3(this.String,this.IM-1
,1));this.IM=this.IM-1;this.Yp=true;A.ow(this.Ds,this);},A9M:function(H){if(this.
IM>=this.String.length)return;this.R(A.aa3(this.String,this.IM,1));this.Yp=true;
A.ow(this.Ds,this);},A9N:function(H){if(this.String.length>=15)return;var Brf=this.
Ahm.D4;var A$b=String.fromCharCode(Brf);this.R(A.aaW(this.String,A$b,this.IM));this.
IM=this.IM+A$b.length;this.Yp=true;A.ow(this.Ds,this);},R:function(E){if(this.String===
E)return;this.String=E;if(this.IM>(E.length+1))this.IM=E.length;this.Text.R(E+String.
fromCharCode(0x0A));this.Yp=true;this.Text.Gk(Ka);},L:function(E){if(this.AV===E
)return;this.AV=E;this.Text.L(E);this.EJ.L(E);this.GH.L(E);},A9Z:function(H){if(
this.AJm===false)return;if(this.String.indexOf(String.fromCharCode(0x2E),0)>=0)return;
if(this.String.length>=15)return;this.R(A.aaW(this.String,Qh,this.IM));this.IM=this.
IM+1;this.Yp=true;A.ow(this.Ds,this);},Be7:function(E){if(this.AJm===E)return;this.
AJm=E;if(E===false){var A_A=this.String.indexOf(String.fromCharCode(0x2E),0);if(
A_A>=0)this.R(A.aaX(this.String,A_A));}this.Yp=true;this.Text.Gk(Ka);},BsY:function(
H){if(this.A00(0x80))this.HO().Ay2(this);this.Al();},BsL:function(H){var AjF=this.
String.length;if(AjF!==this.IM){this.IM=AjF;A.ow([this,this.AxP],this);this.Yp=true;
}},BsP:function(H){if(!!this.IM){this.IM=0;A.ow([this,this.AxP],this);this.Yp=true;
}},_Init:function(aArg){A.abp.AfL._Init.call(this,aArg);A.abm.Y5._Init.call(this.
Tt={I:this},0);A.Core.B0._Init.call(this.CF={I:this},0);A.Core.B0._Init.call(this.
Ako={I:this},0);A.Core.B0._Init.call(this.Aku={I:this},0);A.Core.B0._Init.call(this.
Ahm={I:this},0);A.Core.Bd._Init.call(this.Bd={I:this},0);A.abh.Text._Init.call(this.
Text={I:this},0);A.abh.DU._Init.call(this.EJ={I:this},0);A.Core.B0._Init.call(this.
AnL={I:this},0);A.Core.B0._Init.call(this.Api={I:this},0);A.Graphics.GY._Init.call(
this.CR={I:this},0);A.abh.GH._Init.call(this.GH={I:this},0);A.Core.B0._Init.call(
this.AoB={I:this},0);A.Core.B0._Init.call(this.An$={I:this},0);A.Core.B0._Init.call(
this.AnX={I:this},0);this.__proto__=C.Aoz;var B;this.G(AdB);this.Tt.BW=false;this.
Tt.Ch=true;this.Tt.FI(500);this.Tt.Z6(500);this.CF.Filter=147;this.Ako.Filter=45;
this.Aku.Filter=44;this.Ahm.Filter=143;this.Bd.AW(0x3F);this.Bd.J9(Pd);this.Bd.J8(
Kb);this.Bd.D$(AdC);this.Bd.Eg(Ka);this.Bd.ABt(3);this.Text.AW(0x3F);this.Text.G(
AdB);this.Text.KF(false);this.Text.A0(0x12);this.Text.R(A.jm);this.Text.L(0xFFB3B3B3
);this.EJ.D$(AuO);this.EJ.Eg(AlV);this.EJ.BgG(2);this.EJ.BgF(2);this.EJ.L(0xFFB3B3B3
);this.EJ.W(false);this.AnL.Filter=138;this.Api.Filter=137;this.GH.G(AdB);this.GH.
L(0xFFB3B3B3);this.GH.N5(1);this.AoB.Filter=1;this.An$.Filter=41;this.AnX.Filter=
42;this.J(this.Bd,0);this.J(this.Text,0);this.J(this.EJ,0);this.J(this.GH,0);this.
Tt.Q=[B=this.EJ,B.Fe,B.W];this.CF.B1=[this,this.A9K];this.CF.D_=[this,this.A9K];
this.Ako.B1=[this,this.A9H];this.Ako.D_=[this,this.A9H];this.Aku.B1=[this,this.A9M
];this.Aku.D_=[this,this.A9M];this.Ahm.B1=[this,this.A9N];this.Ahm.D_=[this,this.
A9N];this.Bd.B1=[this,this.Aw6];this.Text.Rr([this,this.AxP]);this.Text.Y(A.zW(A.
eV.AB));this.Co=A.zW(A.eV.AB);this.AnL.B1=[this,this.A9Z];this.Api.B1=[this,this.
A9Z];this.GH.XB(this.CR);this.AoB.B1=[this,this.BsY];this.An$.B1=[this,this.BsP];
this.AnX.B1=[this,this.BsL];},_Done:function(){this.__proto__=A.abp.AfL;this.Tt.
_Done();this.CF._Done();this.Ako._Done();this.Aku._Done();this.Ahm._Done();this.
Bd._Done();this.Text._Done();this.EJ._Done();this.AnL._Done();this.Api._Done();this.
CR._Done();this.GH._Done();this.AoB._Done();this.An$._Done();this.AnX._Done();A.
abp.AfL._Done.call(this);},_ReInit:function(){A.abp.AfL._ReInit.call(this);this.
Tt._ReInit();this.CF._ReInit();this.Ako._ReInit();this.Aku._ReInit();this.Ahm._ReInit(
);this.Bd._ReInit();this.Text._ReInit();this.EJ._ReInit();this.AnL._ReInit();this.
Api._ReInit();this.CR._ReInit();this.GH._ReInit();this.AoB._ReInit();this.An$._ReInit(
);this.AnX._ReInit();},_Mark:function(D){var B;A.abp.AfL._Mark.call(this,D);if((
B=this.Co)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Ds)&&((B=B[0])._cycle!=
D))B._Mark(B._cycle=D);if((B=this.Tt)._cycle!=D)B._Mark(B._cycle=D);if((B=this.CF
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ako)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Aku)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ahm)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Bd)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Text)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.EJ)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AnL)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.Api)._cycle!=D)B._Mark(B._cycle=D);if((B=this.CR
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.GH)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.AoB)._cycle!=D)B._Mark(B._cycle=D);if((B=this.An$)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.AnX)._cycle!=D)B._Mark(B._cycle=D);},_className:"Demonstrator::NumberInput"
};C.Adk={LabelDataSync:null,Agx:function(H){var B;A.ow([B=A._GetAutoObject(A.abt.
ApE),B.Buc],this);},_Init:function(aArg){C.LA._Init.call(this,aArg);A.kh.CH._Init.
call(this.LabelDataSync={I:this},0);this.__proto__=C.Adk;this.LabelDataSync.G(AuP
);this.LabelDataSync.R(A.z2(A.abg.AZY));this.LabelDataSync.L(A.iF.Text);this.J(this.
LabelDataSync,0);this.ZB.Ar(A.zW(C.APX));this.LabelDataSync.Y(A.zW(A.eV.Au));this.
LabelDataSync.Bz(A.zW(A.eV.AB));},_Done:function(){this.__proto__=C.LA;this.LabelDataSync.
_Done();C.LA._Done.call(this);},_ReInit:function(){C.LA._ReInit.call(this);this.
LabelDataSync._ReInit();this.LabelDataSync.R(A.z2(A.abg.AZY));this.LabelDataSync.
Y(A.zW(A.eV.Au));this.LabelDataSync.Bz(A.zW(A.eV.AB));},_Mark:function(D){var B;
C.LA._Mark.call(this,D);if((B=this.LabelDataSync)._cycle!=D)B._Mark(B._cycle=D);
},_className:"Demonstrator::SyncAction"};C.APX={_class:function(){return A.abj.Ah;
},0:{FileName:"./res_index/DemonstratorSyncIcon.png",Format:A.cC,NoOfFrames:1,FrameSize:[
50,60],FrameDelay:0,_this:null}};C.Zf={TimespanDaysToString:null,Azl:function(aIndex
){if(this.Azh()>aIndex)return this.TimespanDaysToString.Ca(aIndex);A.aa8("%s",ApY
);return A.jm;},Azh:function(){return 4;},Da:function(aIndex){var AgT=0;switch(aIndex
){case 0:AgT=0;break;case 1:AgT=1;break;case 2:AgT=2;break;case 3:AgT=3;break;default:
throw new Error(Kc+aIndex.toFixed());}return AgT;},_Init:function(aArg){A.abx.Akq.
_Init.call(this,aArg);A.Device.TimespanDaysToString._Init.call(this.TimespanDaysToString={
I:this},0);this.__proto__=C.Zf;},_Done:function(){this.__proto__=A.abx.Akq;this.
TimespanDaysToString._Done();A.abx.Akq._Done.call(this);},_ReInit:function(){A.abx.
Akq._ReInit.call(this);this.TimespanDaysToString._ReInit();},_Mark:function(D){var
B;A.abx.Akq._Mark.call(this,D);if((B=this.TimespanDaysToString)._cycle!=D)B._Mark(
B._cycle=D);},_className:"Demonstrator::DatePickerUnitDD"};C.BxG={Gz:0,AQy:1,GB:
2,Year:3};C.AyZ={_class:function(){return A.abj.Ah;},0:{FileName:"./res_index/DemonstratorEarTagIcon.png"
,Format:A.jt,NoOfFrames:2,FrameSize:[37,37],FrameDelay:0,_this:null}};C.AC6={_class:
function(){return A.abj.Ah;},0:{FileName:"./res_index/DemonstratorTransponderEarTagIcon.png"
,Format:A.jt,NoOfFrames:2,FrameSize:[37,37],FrameDelay:0,_this:null}};
C._Init=function(){C.AQr.__proto__=A.abp.Menu;C.APy.__proto__=A.Core.O;C.AIa.__proto__=
C.A$;C.LB.__proto__=A.Core.O;C.WC.__proto__=C.Aol;C.Zg.__proto__=A.Core.O;C.Asv.
__proto__=A.abp.Afx;C.AIp.__proto__=C.E2;C.Arv.__proto__=C.E2;C.A$.__proto__=A.Core.
O;C.E2.__proto__=A.Core.O;C.AJk.__proto__=A.abp.Afv;C.AfE.__proto__=A.Core.O;C.AIh.
__proto__=C.AfE;C.TR.__proto__=C.Arv;C.AHP.__proto__=A.Core.O;C.LA.__proto__=A.Core.
O;C.Ada.__proto__=C.LA;C.Adl.__proto__=C.LA;C.Aol.__proto__=A.Core.O;C.Ab_.__proto__=
A.Core.O;C.N8.__proto__=C.Aoz;C.Aoz.__proto__=A.abp.AfL;C.Adk.__proto__=C.LA;C.Zf.
__proto__=A.abx.Akq;};C._ReInit=function(){};C.Dn=function(D){var B;if((B=C.Background[
0]._this)&&(B._cycle!=D))B._Done(C.Background[0]._this=null);if((B=C.AII[0]._this
)&&(B._cycle!=D))B._Done(C.AII[0]._this=null);if((B=C.AIJ[0]._this)&&(B._cycle!=
D))B._Done(C.AIJ[0]._this=null);if((B=C.AIK[0]._this)&&(B._cycle!=D))B._Done(C.AIK[
0]._this=null);if((B=C.AIL[0]._this)&&(B._cycle!=D))B._Done(C.AIL[0]._this=null);
if((B=C.ALG[0]._this)&&(B._cycle!=D))B._Done(C.ALG[0]._this=null);if((B=C.Filter[
0]._this)&&(B._cycle!=D))B._Done(C.Filter[0]._this=null);if((B=C.AM_[0]._this)&&(
B._cycle!=D))B._Done(C.AM_[0]._this=null);if((B=C.Ag_[0]._this)&&(B._cycle!=D))B.
_Done(C.Ag_[0]._this=null);if((B=C.AIs[0]._this)&&(B._cycle!=D))B._Done(C.AIs[0].
_this=null);if((B=C.Apv[0]._this)&&(B._cycle!=D))B._Done(C.Apv[0]._this=null);if((
B=C.AP2[0]._this)&&(B._cycle!=D))B._Done(C.AP2[0]._this=null);if((B=C.ADk[0]._this
)&&(B._cycle!=D))B._Done(C.ADk[0]._this=null);if((B=C.AQJ[0]._this)&&(B._cycle!=
D))B._Done(C.AQJ[0]._this=null);if((B=C.APX[0]._this)&&(B._cycle!=D))B._Done(C.APX[
0]._this=null);if((B=C.AyZ[0]._this)&&(B._cycle!=D))B._Done(C.AyZ[0]._this=null);
if((B=C.AC6[0]._this)&&(B._cycle!=D))B._Done(C.AC6[0]._this=null);};return C;})(
);

/* VitalControl demonstration application, © Urban GmbH & Co.KG 2019 */