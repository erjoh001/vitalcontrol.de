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
);if(index.acw)throw new Error("The unit file 'Demonstrator.js' included twice!"
);index.acw=(function(){var A=index;var C={};
var Ca=[0,0,370,60];var BC=[360,0,370,60];var EW=[0,0,370,710];var Hh="Unknown animalType";
var I8=[58,10,120,50];var IJ=[0,0,60,60];var OW=[120,0,360,60];var PW="\u2015";var
PX=[0,0,240,60];var CL=[0,0,40,60];var E4=[100,0,130,60];var Lq=[43,0,100,60];var
PY=[125,0,240,60];var Ks=[0,0];var N8=[100,0];var PZ=[100,60];var MB=[0,60];var ST=[
107,0];var UC=[240,0];var ZE=[240,60];var WG=[107,60];var IK="%d.%m.%Y";var UD="Unhandled date unit: ";
var ZF=[0,0,200,180];var WH=[36,0,200,30];var ZG=[0,30,160,60];var WI="Text";var
ZH=[0,70,40,110];var ZI=[44,70,156,110];var UE=[160,70,200,110];var WJ=[7,2,27,25
];var Q9=[0,30,170,180];var ZJ=[170,34,190,57];var OX=[0,0,40,40];var Q_=[0,40];
var WK=[40,40];var WM=[40,0];var WN=[0,0,370,100];var WO=[20,0,290,60];var ZK=[0
,60,370,100];var WQ="Cap";var WR=[20,0,370,60];var SU=[310,0,370,60];var ZL=[370
,0];var ZM=[370,60];var Acq="UpdateData is called for the base class ListItemBase. Please make "+
"sure this method is implemented by a derived class.";var UF=".";var ZN=[0,0,170
,150];var Afe=[0,59,170,90];var ZO=[110,0,170,150];var WS=[0,30];var ZP=[50,0,100
,150];var ZQ=[0,0,40,150];var Aff=[0,0,370,240];var JP=[0,60,370,710];var Acr=[0
,60,370,120];var Lr=[0,120,370,180];var Ahz=[0,180,370,240];var AnQ=[370,120];var
N9=[0,120];var WT=[370,180];var AnR=[0,180];var AhA=[370,240];var AhB=[0,240];var
Acs=[0,0,50,60];var UG=[50,0,100,60];var AnS=[100,10,370,50];var AnT="276000901234567";
var AnU="Unhandled temperature unit";var AnV=[110,0,260,60];var Afg=[235,10,370,
50];var AnW="39.5";var Afh=[0,0,270,40];var Asj=[270,0];var OY=[270,40];var SV=[
150,0,170,40];var Axj=[205,10,207,30];var SW=[0,0,370,40];var Ask=[50,0,320,40];
var Axk=" ";var Axl=[135,23];var Axm=[135,0];var AnX=[100,0,370,60];var Axn="Error: Nullpointer Exception";
var Asl="Unknown Date Piecker Unit Index: ";
C.Background={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/DemonstratorBackground.png"
,Format:A._PIXEL_FORMAT_NATIVE,NoOfFrames:1,FrameSize:[1000,740],FrameDelay:0,_this:
null}};C.AMn={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/DemonstratorButtonLeft.png"
,Format:A._PIXEL_FORMAT_NATIVE,NoOfFrames:1,FrameSize:[40,40],FrameDelay:0,_this:
null}};C.AMo={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/DemonstratorButtonLeftPressed.png"
,Format:A._PIXEL_FORMAT_NATIVE,NoOfFrames:1,FrameSize:[40,40],FrameDelay:0,_this:
null}};C.AMp={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/DemonstratorButtonRight.png"
,Format:A._PIXEL_FORMAT_NATIVE,NoOfFrames:1,FrameSize:[40,40],FrameDelay:0,_this:
null}};C.AMq={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/DemonstratorButtonRightPressed.png"
,Format:A._PIXEL_FORMAT_NATIVE,NoOfFrames:1,FrameSize:[40,40],FrameDelay:0,_this:
null}};C.APs={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/DemonstratorIconDatePicker.png"
,Format:A._PIXEL_FORMAT_NATIVE,NoOfFrames:1,FrameSize:[20,23],FrameDelay:0,_this:
null}};C.Filter={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/DemonstratorFilter.png"
,Format:A._PIXEL_FORMAT_NATIVE,NoOfFrames:1,FrameSize:[15,16],FrameDelay:0,_this:
null}};C.AQ1={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/DemonstratorMenuIcon.png"
,Format:A._PIXEL_FORMAT_NATIVE,NoOfFrames:1,FrameSize:[20,16],FrameDelay:0,_this:
null}};C.Ai9={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/DemonstratorArrowRight.png"
,Format:A._PIXEL_FORMAT_NATIVE,NoOfFrames:1,FrameSize:[17,16],FrameDelay:0,_this:
null}};C.AL6={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/DemonstratorArrowDown.png"
,Format:A._PIXEL_FORMAT_NATIVE,NoOfFrames:1,FrameSize:[17,16],FrameDelay:0,_this:
null}};C.ArV={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/DemonstratorScanIcon.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:2,FrameSize:[37,37],FrameDelay:0,_this:
null}};C.AUj={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/DemonstratorTemperatureIcon.png"
,Format:A._PIXEL_FORMAT_NATIVE,NoOfFrames:1,FrameSize:[17,37],FrameDelay:0,_this:
null}};C.AUO={AdR:null,AZ:null,AN:null,Background:null,H2:null,AD:null,IG:null,Dg:
null,Lf:null,A6W:null,A7n:0,Bh:function(aSize){A.acn.Menu.Bh.call(this,aSize);this.
IG.H(A.abP(this.IG.M,this.AD.OL));this.IG.H([].concat(this.IG.M.slice(0,3),aSize[
1]));},Ai:function(Ae){var B;A.acn.Menu.Ai.call(this,Ae);var Ir=((Ae&0x40)===0x40
);if(Ir&&(this.AD.Gi<0))this.AD.GX(0);},NU:function(E){if(this.Lf===E)return;this.
Lf=E;this.AD.NU(E);},BlW:function(E){var B;if(this.A6W===E)return;if(!!this.AdR){
this.HI(this.AdR);this.AdR=null;}if(!!E){this.AdR=(C.Fn.isPrototypeOf(B=A._NewObject(
E,0))?B:null);this.AdR.A9m([this,this.Ag1]);this.AdR.A9n([this,this.Ag2]);this.AdR.
Bl2(null);this.J(this.AdR,0);this.AD.A9t((B=this.AdR.M)[3]-B[1]);}else this.AD.A9t(
0);this.IG.H(A.abP(this.IG.M,this.AD.OL));A.pe([this,this.E9],this);this.A6W=E;}
,Hc:function(G){var B;var FW=this.AD.GT;var Aa=(C.Bc.isPrototypeOf(B=this.AD.Ce)?
B:null);if(!Aa)return;Aa.Y6(this.AZ);Aa.Cd(FW);Aa.Y7(this.AN);Aa.H(A.abK(Aa.M,[(
B=this.AD.M)[2]-B[0],this.AD.GW]));},Y6:function(E){var B;if(this.AZ===E)return;
if(!!this.AZ){A.z9([this,this.Cd],this.AZ,0);A.z$([this,this.AnJ],[B=this.AZ,B.Fz
,B.FD],0);}this.AZ=E;if(!!E){A.zV([this,this.Cd],E,0);A.zX([this,this.AnJ],[E,E.
Fz,E.FD],0);}A.pe([this,this.Cd],this);A.pe([this,this.AnJ],this);},Cd:function(
G){if(!!this.AZ){this.AD.Jn(this.AZ.Cb());this.AD.Abh(0,this.AD.AV-1);}else this.
AD.Jn(0);if(this.A7n!==this.AD.AV){this.AD.AAV(null,null);this.A7n=this.AD.AV;}A.
pe([this,this.E9],this);},Ag2:function(G){var B;this.H(A.abI(this.M,(B=this.AD.AOc(
))[3]-B[1]));},Ag1:function(G){this.H(A.abI(this.M,180));},A8J:function(G){var Jr=(
A.Core.BJ.isPrototypeOf(G)?G:null);var FW=this.AD.Gi;if(Jr.CK===4)FW=FW-1;else if(
Jr.CK===5)FW=FW+1;else if((Jr.DJ>=0x30)&&(Jr.DJ<=0x39))A._GetAutoObject(A.acp.Agn
).E$(Jr.DJ);else if(Jr.CK===45)A._GetAutoObject(A.acp.Agn).Delete();else Jr.NB=true;
if((FW<0)||(FW>=this.AD.AV))return;this.AD.GX(FW);this.Bxz(FW,true);},Bxo:function(
G){var Aa=(C.Bc.isPrototypeOf(G)?G:null);this.AD.GX(Aa.Hu);},Bxz:function(G1,AcG
){var B;if((G1<0)||(G1>=this.AD.AV))return;var Ay=this.AD.Aqo(G1,G1);var A$=this.
AD.M;A$=A.abP(A$,(B=this.AD.AOc())[3]-B[1]);A$=A.abI(A$,(((B=this.AD.M)[3]-B[1])-((
B=this.AD.AOc())[3]-B[1]))-((B=this.AD.BhP())[3]-B[1]));var LI=A.lb(Ay,A$);if((!
AcG&&!((LI[0]>=LI[2])||(LI[1]>=LI[3])))||(AcG&&A.aaY(LI,Ay)))return;var Bo=0;if(
Ay[3]>A$[3])Bo=Ay[3]-A$[3];if(Bo>(Ay[1]-A$[1]))Bo=(Ay[3]-A$[1])-this.AD.GW;this.
AD.Gh(this.AD.Bq-Bo);},AnJ:function(G){this.AD.GX(-1);},E9:function(G){var B;this.
IG.Mp(this.AD.GW*this.AD.AV);this.IG.Mr(((B=this.AD.M)[3]-B[1])-this.AD.OL);this.
IG.Mq(-this.AD.Bq);},_Init:function(aArg){A.acn.Menu._Init.call(this,aArg);A.acg.
AJ._Init.call(this.Background={I:this},0);A.Core.H2._Init.call(this.H2={I:this},
0);A.Core.CI._Init.call(this.AD={I:this},0);A.kR.Aw._Init.call(this.IG={I:this},
0);A.Core.BJ._Init.call(this.Dg={I:this},0);this.__proto__=C.AUO;this.H(Ca);this.
Background.AY(0x3);this.Background.H(Ca);this.H2.AY(0x3F);this.H2.H(Ca);this.AD.
AY(0x3F);this.AD.H(Ca);this.AD.AeH(60);this.AD.Jn(0);this.AD.NU(this.Lf);this.IG.
AY(0x3A);this.IG.H(BC);this.IG.L(0xFF808080);this.J(this.Background,0);this.J(this.
H2,0);this.J(this.AD,0);this.J(this.IG,0);this.AD.Ej=[this,this.E9];this.AD.Hc=[
this,this.Hc];this.AD.Awn(this.H2);this.AN=[this,this.Bxo];this.Dg.BK=[this,this.
A8J];this.Dg.DS=[this,this.A8J];},_Done:function(){this.__proto__=A.acn.Menu;this.
Background._Done();this.H2._Done();this.AD._Done();this.IG._Done();this.Dg._Done(
);A.acn.Menu._Done.call(this);},_ReInit:function(){A.acn.Menu._ReInit.call(this);
this.Background._ReInit();this.H2._ReInit();this.AD._ReInit();this.IG._ReInit();
this.Dg._ReInit();},_Mark:function(D){var B;A.acn.Menu._Mark.call(this,D);if((B=
this.AdR)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.AZ)&&(B._cycle!=D))B._Mark(
B._cycle=D);if((B=this.AN)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.
Background)._cycle!=D)B._Mark(B._cycle=D);if((B=this.H2)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.AD)._cycle!=D)B._Mark(B._cycle=D);if((B=this.IG)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Dg)._cycle!=D)B._Mark(B._cycle=D);},_className:"Demonstrator::VerticalMenu"
};C.ATN={Gz:null,AJ:null,Cz:null,Init:function(aArg){var B;A.zX([this,this.Gw],[
B=A._GetAutoObject(A.acp.K8),B.A8m,B.A9C],0);A.pe([this,this.Gw],this);},AbJ:function(
E){if(this.Gz===E)return;if(!!this.Gz)this.HI(this.Gz);this.Gz=E;if(!!this.Gz)this.
J(this.Gz,0);this.A9(E);this.Ahh(E,this.Cz);this.Am();},Gw:function(G){var B;if(
!!A._GetAutoObject(A.acp.K8).ArY)this.AbJ((C.Ahk.isPrototypeOf(B=A._NewObject(A.
_GetAutoObject(A.acp.K8).ArY,0))?B:null));else this.AbJ(null);},_Init:function(aArg
){A.Core.O._Init.call(this,aArg);A.acg.AJ._Init.call(this.AJ={I:this},0);A.acg.Cz.
_Init.call(this.Cz={I:this},0);this.__proto__=C.ATN;this.H(EW);this.AJ.AY(0x3F);
this.AJ.H(EW);this.Cz.H(EW);this.Cz.L(0xFF000000);this.J(this.AJ,0);this.J(this.
Cz,0);this.Init(aArg);},_Done:function(){this.__proto__=A.Core.O;this.AJ._Done();
this.Cz._Done();A.Core.O._Done.call(this);},_ReInit:function(){A.Core.O._ReInit.
call(this);this.AJ._ReInit();this.Cz._ReInit();},_Mark:function(D){var B;A.Core.
O._Mark.call(this,D);if((B=this.Gz)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.
AJ)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Cz)._cycle!=D)B._Mark(B._cycle=D);}
,_className:"Demonstrator::SelectionArea"};C.ALP={Af3:0,MQ:0,Background:null,V:null
,Ai5:null,Ady:null,Xw:null,Adz:null,Ma:null,Op:0,LB:false,Ky:false,CT:function(){
this.Am();},Ai:function(Ae){var B;C.Bc.Ai.call(this,Ae);var G6=((Ae&0x10)===0x10
);var Fh=((Ae&0x20)===0x20);var Ir=((Ae&0x40)===0x40);if(!G6){this.Background.L(
0xFFAAAAAA);this.V.L(0xFF888888);this.Ma.Ar(false);this.Ma.Y(false);}else if(Ir){
this.Background.L(A.jb.AR);this.V.L(A.jb.Bj);this.Ma.Ar(true);this.Ma.Y(true);}else
if(Fh){this.Background.L(0xFFE6DED8);this.V.L(0xFF000000);this.Ma.Ar(true);this.
Ma.Y(true);}else{this.Background.L(0xFFFFFFFF);this.V.L(0xFF000000);this.Ma.Ar(false
);this.Ma.Y(false);}if(!this.Ky&&Fh)A._GetAutoObject(A.acp.K8).NW(this.Af3);this.
Ma.BlY(this.MQ>0);this.Ma.Bmo(this.Af3>0);this.V.R(this.Op.toFixed());this.LB=G6;
this.Ky=Fh;},Cd:function(Ad){if(!this.AZ){this.Xw.Ax(A.aaL(A.ach.Aea));this.Ady.
L(A.jb.Ae9);return;}this.Hu=Ad;if(!!this.AZ){this.MQ=this.AZ.LN(Ad,26);this.Af3=
this.AZ.LN(Ad,22);this.Op=this.AZ.CC(Ad,1);var Aln=this.AZ.HW(Ad,11);var Ale=this.
AZ.IV(Ad,17);var LL=this.AZ.IV(Ad,13);var H8=this.AZ.Amw(Ad,14);var W5=A._GetAutoObject(
A.Device.Helper).ALE(LL,Aln,Ale);switch(H8){case 0:this.Xw.Ax(A.aaL(A.ach.Aea));
break;case 1:this.Xw.Ax(A.aaL(A.ach.Au4));break;case 2:this.Xw.Ax(A.aaL(A.ach.Au7
));break;default:A.ab5("%s%e",Hh,H8);}this.Adz.Ax(this.Xw.Al);this.Ady.L(A._GetAutoObject(
A.acj.Assessment).Qc(W5));this.Am();}},_Init:function(aArg){C.Bc._Init.call(this
,aArg);A.acg.AJ._Init.call(this.Background={I:this},0);A.kR.CO._Init.call(this.V={
I:this},0);A.acg.An._Init.call(this.Ai5={I:this},0);A.acg.An._Init.call(this.Ady={
I:this},0);A.acg.An._Init.call(this.Xw={I:this},0);A.acg.An._Init.call(this.Adz={
I:this},0);C.Ma._Init.call(this.Ma={I:this},0);this.__proto__=C.ALP;this.Background.
AY(0x3F);this.Background.H(Ca);this.V.AY(0x3F);this.V.H(I8);this.V.R(A.aaR(A.acf.
GD));this.V.A4(0x11);this.V.L(0xFF000000);this.Ai5.H(IJ);this.Ai5.L(A.jb.Text);this.
Ady.H(IJ);this.Ady.L(A.jb.ET);this.Xw.H(IJ);this.Adz.H(IJ);this.Adz.L(A.jb.Text);
this.Adz.Cu(1);this.Ma.AY(0x3);this.Ma.H(OW);this.J(this.Background,0);this.J(this.
V,0);this.J(this.Ai5,0);this.J(this.Ady,0);this.J(this.Xw,0);this.J(this.Adz,0);
this.J(this.Ma,0);this.V.S(A.aaL(A.fl.Ah));this.V.A8(A.aaL(A.fl.Ak));this.V.CB(A.
aaL(A.fl.By));this.Ai5.Ax(A.aaL(C.AGE));this.Ady.Ax(A.aaL(C.AU6));this.Xw.Ax(A.aaL(
A.ach.Aea));this.Adz.Ax(A.aaL(A.ach.Aea));},_Done:function(){this.__proto__=C.Bc;
this.Background._Done();this.V._Done();this.Ai5._Done();this.Ady._Done();this.Xw.
_Done();this.Adz._Done();this.Ma._Done();C.Bc._Done.call(this);},_ReInit:function(
){C.Bc._ReInit.call(this);this.Background._ReInit();this.V._ReInit();this.Ai5._ReInit(
);this.Ady._ReInit();this.Xw._ReInit();this.Adz._ReInit();this.Ma._ReInit();this.
V.R(A.aaR(A.acf.GD));this.V.S(A.aaL(A.fl.Ah));this.V.A8(A.aaL(A.fl.Ak));this.V.CB(
A.aaL(A.fl.By));this.CT();},_Mark:function(D){var B;C.Bc._Mark.call(this,D);if((
B=this.Background)._cycle!=D)B._Mark(B._cycle=D);if((B=this.V)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Ai5)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ady)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.Xw)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
Adz)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ma)._cycle!=D)B._Mark(B._cycle=D);
},_className:"Demonstrator::AnimalMenuItem"};C.Ma={Ui:null,Wm:null,AkB:null,Nc:null
,N4:null,Zh:null,Aca:null,Avo:false,Aw8:false,CT:function(){this.Am();},Ai:function(
Ae){var B;A.Core.O.Ai.call(this,Ae);var Ir=((Ae&0x40)===0x40);if(Ir){this.Nc.L(A.
jb.Bj);this.N4.L(A.jb.Bj);}else{this.Nc.L(A.jb.Text);this.N4.L(A.jb.Text);}if(this.
Aw8){this.Nc.R(A.aaR(A.acf.Bni));if(this.Avo){this.Ui.Ax(A.aaL(C.AGl));this.Wm.Ax(
A.aaL(C.AGl));}else{this.Ui.Ax(A.aaL(C.ArV));this.Wm.Ax(A.aaL(C.ArV));}}else if(
this.Avo){this.Ui.Ax(A.aaL(C.ABT));this.Wm.Ax(A.aaL(C.ABT));this.Nc.R(PW);}var A2$=
this.Aw8||this.Avo;this.Ui.Y(A2$);this.Wm.Y(A2$);this.Nc.Y(A2$);this.Zh.Ar(this.
Aw8);},Bmo:function(E){if(this.Aw8===E)return;this.Aw8=E;this.Am();},BlY:function(
E){if(this.Avo===E)return;this.Avo=E;this.Am();},_Init:function(aArg){A.Core.O._Init.
call(this,aArg);A.acg.An._Init.call(this.Ui={I:this},0);A.acg.An._Init.call(this.
Wm={I:this},0);A.acg.An._Init.call(this.AkB={I:this},0);A.kR.CO._Init.call(this.
Nc={I:this},0);A.kR.CO._Init.call(this.N4={I:this},0);A.Core.Bk._Init.call(this.
Zh={I:this},0);A.Core.Bk._Init.call(this.Aca={I:this},0);this.__proto__=C.Ma;var
B;this.H(PX);this.Ui.AY(0x6);this.Ui.H(CL);this.Ui.L(A.jb.C0);this.Ui.Cu(1);this.
Wm.AY(0x6);this.Wm.H(CL);this.Wm.L(A.jb.Text);this.AkB.AY(0xE);this.AkB.H(E4);this.
Nc.AY(0x7);this.Nc.H(Lq);this.Nc.A4(0x11);this.Nc.L(0xFF000000);this.N4.AY(0x3);
this.N4.H(PY);this.N4.R(A.aaR(A.acf.Temperature));this.N4.A4(0x11);this.N4.L(0xFF000000
);this.Zh.AY(0x3);this.Zh.Ki(Ks);this.Zh.Kh(N8);this.Zh.DM(PZ);this.Zh.DY(MB);this.
Aca.AY(0x3);this.Aca.Ki(ST);this.Aca.Kh(UC);this.Aca.DM(ZE);this.Aca.DY(WG);this.
J(this.Ui,0);this.J(this.Wm,0);this.J(this.AkB,0);this.J(this.Nc,0);this.J(this.
N4,0);this.J(this.Zh,0);this.J(this.Aca,0);this.Ui.Ax(A.aaL(C.ArV));this.Wm.Ax(A.
aaL(C.ArV));this.AkB.Ax(A.aaL(C.AUj));this.Nc.S(A.aaL(A.fl.Ah));this.Nc.A8(A.aaL(
A.fl.Ak));this.Nc.CB(A.aaL(A.fl.By));this.N4.S(A.aaL(A.fl.Ah));this.N4.A8(A.aaL(
A.fl.Ak));this.N4.CB(A.aaL(A.fl.By));this.Zh.Lj=[B=A._GetAutoObject(A.acp.K8),B.
Bd5];this.Aca.Lj=[B=A._GetAutoObject(A.acp.K8),B.BdQ];},_Done:function(){this.__proto__=
A.Core.O;this.Ui._Done();this.Wm._Done();this.AkB._Done();this.Nc._Done();this.N4.
_Done();this.Zh._Done();this.Aca._Done();A.Core.O._Done.call(this);},_ReInit:function(
){A.Core.O._ReInit.call(this);this.Ui._ReInit();this.Wm._ReInit();this.AkB._ReInit(
);this.Nc._ReInit();this.N4._ReInit();this.Zh._ReInit();this.Aca._ReInit();this.
N4.R(A.aaR(A.acf.Temperature));this.Nc.S(A.aaL(A.fl.Ah));this.Nc.A8(A.aaL(A.fl.Ak
));this.Nc.CB(A.aaL(A.fl.By));this.N4.S(A.aaL(A.fl.Ah));this.N4.A8(A.aaL(A.fl.Ak
));this.N4.CB(A.aaL(A.fl.By));this.CT();},_Mark:function(D){var B;A.Core.O._Mark.
call(this,D);if((B=this.Ui)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Wm)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.AkB)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Nc
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.N4)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Zh)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Aca)._cycle!=D)B._Mark(B._cycle=
D);},_className:"Demonstrator::AnimalItemAction"};C.X8={CT:function(){this.Am();
},Ai:function(Ae){C.AqH.Ai.call(this,Ae);if(!this.Text.String.length)this.Text.R(
A.aaR(A.acf.Filter));},A7u:function(G){var DW=(A.Core.BJ.isPrototypeOf(G)?G:null
);if(!!DW)A._GetAutoObject(A.acp.Agn).E$(DW.DJ);},A7s:function(G){A._GetAutoObject(
A.acp.Agn).Delete();},_Init:function(aArg){C.AqH._Init.call(this,aArg);this.__proto__=
C.X8;this.An.Ax(A.aaL(C.Filter));},_ReInit:function(){C.AqH._ReInit.call(this);this.
CT();},_className:"Demonstrator::FilterView"};C.AaR={Dd:null,X1:null,RZ:null,X2:
null,Iy:null,Yh:null,Ami:null,Au:null,O4:null,M1:null,AaQ:null,FN:0,Avc:0,AFs:false
,Ai:function(Ae){A.Core.O.Ai.call(this,Ae);this.RZ.R(this.Au.Format(IK));if(this.
AFs){this.RZ.Y(false);this.Yh.Y(false);this.Iy.Y(false);this.X2.Y(false);this.O4.
Ar(true);this.O4.Y(true);this.M1.Cu(2);this.M1.ASz(2);this.M1.H(A.abM(this.M1.M,
this.O4.M[2]));}else{this.RZ.Y(true);this.Yh.Y(true);this.Iy.Y(true);this.X2.Y(true
);this.O4.Ar(false);this.O4.Y(false);this.M1.Cu(3);this.M1.ASz(3);this.M1.H(A.abM(
this.M1.M,this.RZ.M[2]));}},Bze:function(G){this.Bl5(!this.AFs);},Adc:function(G
){var F;if(!!this.Dd)this.T7((F=this.Dd,F[1].call(F[0])));},AbN:function(E){if(A.
aaZ(this.Dd,E))return;if(!!this.Dd)A.z$([this,this.Adc],this.Dd,0);this.Dd=E;if(
!!E)A.zX([this,this.Adc],E,0);if(!!E)A.pe([this,this.Adc],this);},T7:function(E){
if(this.FN===E)return;this.FN=E;this.Au.Initialize(this.FN);this.BAi(this);this.
Am();},Aik:function(G){var B;var F;var BO=this.FN;var AiS=this.AaQ.C4(this.Avc);
this.AIG(AiS);if(this.Au.Year>2100)this.Au.Initialize2(2100,12,31,0,0,0);this.T7(((
B=(this.Au.JH()|0))<0)?B+0x100000000:B);if(this.FN!==BO){if(!!this.Dd)(F=this.Dd
,F[2].call(F[0],this.FN));A.abo(this.Dd,0);}},Ah7:function(G){var B;var F;var BO=
this.FN;var AiS=this.AaQ.C4(this.Avc);this.AKu(AiS);if(this.Au.Year<2000)this.Au.
Initialize2(2000,1,1,0,0,0);this.T7(((B=(this.Au.JH()|0))<0)?B+0x100000000:B);if(
this.FN!==BO){if(!!this.Dd)(F=this.Dd,F[2].call(F[0],this.FN));A.abo(this.Dd,0);
}},BlE:function(E){if(this.Avc===E)return;this.Avc=E;},Bl5:function(E){if(this.AFs===
E)return;this.AFs=E;this.Am();},BzO:function(G){var B;var F;var BO=this.FN;this.
Au.Ll(this.O4.ADR());this.Au.T$(this.O4.ADW());this.Au.Year=this.O4.Aq6();this.T7(((
B=(this.Au.JH()|0))<0)?B+0x100000000:B);if(this.FN!==BO){if(!!this.Dd)(F=this.Dd
,F[2].call(F[0],this.FN));A.abo(this.Dd,0);}},BAi:function(G){this.O4.Ll(this.Au.
GB);this.O4.T$(this.Au.Ha);this.O4.Akj(this.Au.Year);},AIG:function(Ayh){var B;switch(
Ayh){case 0:if(this.Au.GB<this.Au.Y3())this.Au.Ll(this.Au.GB+1);else{this.Au.Ll(
1);this.AIG(2);}break;case 1:if((this.Au.GB+7)<=this.Au.Y3())this.Au.Ll(this.Au.
GB+7);else{this.Au.Ll((7-this.Au.Y3())+this.Au.GB);this.AIG(2);}break;case 2:if(
this.Au.Ha<12)this.Au.T$(this.Au.Ha+1);else{this.Au.T$(1);this.AIG(3);}break;case
3:this.Au.Year++;break;default:throw new Error(UD+Ayh.toFixed());}},AKu:function(
Ayh){var B;switch(Ayh){case 0:if(this.Au.GB>1)this.Au.Ll(this.Au.GB-1);else{this.
AKu(2);this.Au.Ll(this.Au.Y3());}break;case 1:if((this.Au.GB-7)>0)this.Au.Ll(this.
Au.GB-7);else{this.AKu(2);this.Au.Ll(this.Au.Y3()-(7-this.Au.GB));}break;case 2:
if(this.Au.Ha>1)this.Au.T$(this.Au.Ha-1);else{this.Au.T$(12);this.AKu(3);}break;
case 3:this.Au.Year--;break;default:throw new Error(UD+Ayh.toFixed());}},BjH:function(
){return this.Avc;},_Init:function(aArg){A.Core.O._Init.call(this,aArg);A.acg.Text.
_Init.call(this.X1={I:this},0);A.acg.Text._Init.call(this.RZ={I:this},0);C.Au2._Init.
call(this.X2={I:this},0);A.acv.Iy._Init.call(this.Iy={I:this},0);C.Au2._Init.call(
this.Yh={I:this},0);A.acg.An._Init.call(this.Ami={I:this},0);A.Core.Bt._Init.call(
this.Au={I:this},0);C.AM1._Init.call(this.O4={I:this},0);C.Au2._Init.call(this.M1={
I:this},0);C.AaQ._Init.call(this.AaQ={I:this},0);this.__proto__=C.AaR;this.H(ZF);
this.X1.H(WH);this.X1.A4(0x11);this.X1.R(A.aaR(A.acf.Date));this.X1.L(0xFF000000
);this.RZ.H(ZG);this.RZ.A4(0x11);this.RZ.R(WI);this.RZ.L(0xFF000000);this.X2.H(ZH
);this.X2.A9d(200);this.Iy.H(ZI);this.Iy.Av_(120);this.Iy.GW=30;this.Iy.A8Y(A.jb.
C0);this.Iy.BkD(A.jb.C0);this.Iy.BkJ(A.jb.C0);this.Iy.A8Z(A.jb.Text);this.Iy.BkK(
A.jb.Text);this.Iy.BkE(A.jb.AR);this.Iy.BkL(A.jb.Bj);this.Iy.BkI(A.jb.AR);this.Iy.
BkH(A.jb.Text);this.Yh.H(UE);this.Yh.A9d(200);this.Ami.H(WJ);this.O4.H(Q9);this.
M1.H(ZJ);this.M1.Cu(3);this.M1.ASz(3);this.M1.L(A.jb.Text);this.J(this.X1,0);this.
J(this.RZ,0);this.J(this.X2,0);this.J(this.Iy,0);this.J(this.Yh,0);this.J(this.Ami
,0);this.J(this.O4,0);this.J(this.M1,0);this.X1.S(A.aaL(A.fl.Ak));this.RZ.S(A.aaL(
A.fl.EB));this.X2.AN=[this,this.Ah7];this.X2.Dz(A.aaL(C.AMn));this.X2.ASA(A.aaL(
C.AMo));this.Iy.At([this,this.BjH,this.BlE]);this.Iy.BkQ(this.AaQ);this.Iy.AEq(A.
aaL(A.fl.Ak));this.Iy.ASi(A.aaL(A.fl.Ak));this.Yh.AN=[this,this.Aik];this.Yh.Dz(
A.aaL(C.AMp));this.Yh.ASA(A.aaL(C.AMq));this.Ami.Ax(A.aaL(C.APs));this.O4.Dj=[this
,this.BzO];this.M1.AN=[this,this.Bze];this.M1.Dz(A.aaL(A.ach.Al9));this.M1.ASA(A.
aaL(A.ach.Al9));},_Done:function(){this.__proto__=A.Core.O;this.X1._Done();this.
RZ._Done();this.X2._Done();this.Iy._Done();this.Yh._Done();this.Ami._Done();this.
Au._Done();this.O4._Done();this.M1._Done();this.AaQ._Done();A.Core.O._Done.call(
this);},_ReInit:function(){A.Core.O._ReInit.call(this);this.X1._ReInit();this.RZ.
_ReInit();this.X2._ReInit();this.Iy._ReInit();this.Yh._ReInit();this.Ami._ReInit(
);this.Au._ReInit();this.O4._ReInit();this.M1._ReInit();this.AaQ._ReInit();this.
X1.R(A.aaR(A.acf.Date));this.X1.S(A.aaL(A.fl.Ak));this.RZ.S(A.aaL(A.fl.EB));this.
Iy.AEq(A.aaL(A.fl.Ak));this.Iy.ASi(A.aaL(A.fl.Ak));},_Mark:function(D){var B;A.Core.
O._Mark.call(this,D);if((B=this.Dd)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((
B=this.X1)._cycle!=D)B._Mark(B._cycle=D);if((B=this.RZ)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.X2)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Iy)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Yh)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ami)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.Au)._cycle!=D)B._Mark(B._cycle=D);if((B=this.O4
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.M1)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.AaQ)._cycle!=D)B._Mark(B._cycle=D);},_className:"Demonstrator::DateSelector"
};C.Au2={C5:null,AwH:null,ANg:null,AN:null,Bl:null,Dg:null,CP:null,Hm:null,Yd:null
,AO7:0,TE:0,ATg:0,AQ:0xFFFFFFFF,A1p:false,LB:false,Ky:false,Qg:false,Ai:function(
Ae){var B;A.acn.Ahd.Ai.call(this,Ae);var G6=((Ae&0x10)===0x10);var Fh=((Ae&0x20)===
0x20);var Gt=this.CP.Down&&this.CP.Yk;if(!G6)this.Hm.Ax(this.ANg);else if(Gt){this.
Hm.Ax(this.AwH);this.Hm.Cu(this.ATg);}else{this.Hm.Ax(this.C5);this.Hm.Cu(this.TE
);}this.Hm.L(this.AQ);this.LB=G6;this.Ky=Fh;this.Qg=Gt;},Qf:function(G){this.Am(
);A.pe(this.AN,this);},Aiw:function(G){if(this.CP.Down)return;if(this.Dg.AbZ)return;
this.Am();if(this.Bl.Bv){A.pe(this.AN,this);this.Bl.Ar(false);}this.Bl.Ar(true);
},BdN:function(G){this.Am();},AzV:function(G){if(!this.CP.Yk)return;if(this.CP.Nz
)return;if((this.Yd.Vi<=0)||(this.CP.Jh<this.Yd.Vi)){if(this.CP.Jh>=this.Bl.Vi)A.
pe(this.AN,this);else this.Bl.Ar(true);}this.Yd.Ar(false);},AzU:function(G){this.
Yd.Ar(true);if(this.Bl.Bv){A.pe(this.AN,this);this.Bl.Ar(false);}},Dz:function(E
){if(this.C5===E)return;this.C5=E;this.Am();},ASA:function(E){if(this.AwH===E)return;
this.AwH=E;this.Am();},A2m:function(G){if(!this.CP.Yk)return;if(this.CP.Nz)return;
if((this.AO7>=0)&&this.A1p){this.A1p=false;this.Yd.Ar(true);A.pe(this.AN,this);}
},A9d:function(E){if(this.AO7===E)return;this.AO7=E;this.Yd.We(E);},ByJ:function(
G){this.A1p=true;},Cu:function(E){if(this.TE===E)return;this.TE=E;this.Am();},ASz:
function(E){if(this.ATg===E)return;this.ATg=E;this.Am();},L:function(E){if(this.
AQ===E)return;this.AQ=E;this.Am();},_Init:function(aArg){A.acn.Ahd._Init.call(this
,aArg);A.Core.Timer._Init.call(this.Bl={I:this},0);A.Core.BJ._Init.call(this.Dg={
I:this},0);A.Core.Bk._Init.call(this.CP={I:this},0);A.acg.An._Init.call(this.Hm={
I:this},0);A.Core.Timer._Init.call(this.Yd={I:this},0);this.__proto__=C.Au2;this.
H(OX);this.Bl.PK(0);this.Bl.We(50);this.Dg.Filter=149;this.CP.AY(0x3F);this.CP.Ki(
Q_);this.CP.Kh(WK);this.CP.DM(WM);this.CP.DY(Ks);this.CP.AeR=0xF;this.CP.AEL(100
);this.Hm.AY(0x3F);this.Hm.H(OX);this.Hm.A4(0x12);this.Yd.PK(0);this.J(this.CP,0
);this.J(this.Hm,0);this.Bl.Ms=[this,this.Qf];this.Dg.BK=[this,this.Aiw];this.CP.
AD1=[this,this.BdN];this.CP.Avt=[this,this.BdN];this.CP.DS=[this,this.A2m];this.
CP.Lj=[this,this.AzV];this.CP.BK=[this,this.AzU];this.Hm.Ax(A.aaL(A.aci.Tz));this.
C5=A.aaL(A.aci.Tz);this.AwH=A.aaL(A.aci.Tz);this.ANg=A.aaL(A.aci.Tz);this.Yd.Ms=[
this,this.ByJ];},_Done:function(){this.__proto__=A.acn.Ahd;this.Bl._Done();this.
Dg._Done();this.CP._Done();this.Hm._Done();this.Yd._Done();A.acn.Ahd._Done.call(
this);},_ReInit:function(){A.acn.Ahd._ReInit.call(this);this.Bl._ReInit();this.Dg.
_ReInit();this.CP._ReInit();this.Hm._ReInit();this.Yd._ReInit();},_Mark:function(
D){var B;A.acn.Ahd._Mark.call(this,D);if((B=this.C5)&&(B._cycle!=D))B._Mark(B._cycle=
D);if((B=this.AwH)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.ANg)&&(B._cycle
!=D))B._Mark(B._cycle=D);if((B=this.AN)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D
);if((B=this.Bl)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Dg)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.CP)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Hm)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.Yd)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Demonstrator::IconButton"};C.AL3={Pq:null,V:null,Ad5:null,_Init:function(aArg){
C.Fn._Init.call(this,aArg);A.acg.AJ._Init.call(this.Pq={I:this},0);A.acg.Text._Init.
call(this.V={I:this},0);C.Ad5._Init.call(this.Ad5={I:this},0);this.__proto__=C.AL3;
this.H(WN);this.Pq.AY(0x1D);this.Pq.H(Ca);this.Pq.L(0xFFE6E6E6);this.V.AY(0x1D);
this.V.H(WO);this.V.A4(0x11);this.V.R(A.aaR(A.acf.A3$));this.V.L(0xFF000000);this.
Ad5.H(ZK);this.J(this.Pq,0);this.J(this.V,0);this.J(this.Ad5,0);this.V.S(A.aaL(A.
fl.Ah));},_Done:function(){this.__proto__=C.Fn;this.Pq._Done();this.V._Done();this.
Ad5._Done();C.Fn._Done.call(this);},_ReInit:function(){C.Fn._ReInit.call(this);this.
Pq._ReInit();this.V._ReInit();this.Ad5._ReInit();this.V.R(A.aaR(A.acf.A3$));this.
V.S(A.aaL(A.fl.Ah));},_Mark:function(D){var B;C.Fn._Mark.call(this,D);if((B=this.
Pq)._cycle!=D)B._Mark(B._cycle=D);if((B=this.V)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Ad5)._cycle!=D)B._Mark(B._cycle=D);},_className:"Demonstrator::AnimalsHeader"
};C.AtY={Pq:null,V:null,Aet:null,Aer:null,Bk:null,DE:WQ,AjZ:false,Ai:function(Ae
){C.Fn.Ai.call(this,Ae);if(this.AjZ){this.Aer.Y(true);this.Aet.Y(false);}else{this.
Aer.Y(false);this.Aet.Y(true);}},BzA:function(G){if(this.AjZ)A.pe(this.Ag1,this);
else A.pe(this.Ag2,this);this.AEO(!this.AjZ);},U:function(E){if(this.DE===E)return;
this.DE=E;this.V.R(E);},AEO:function(E){if(this.AjZ===E)return;this.AjZ=E;this.Am(
);},_Init:function(aArg){C.Fn._Init.call(this,aArg);A.acg.AJ._Init.call(this.Pq={
I:this},0);A.acg.Text._Init.call(this.V={I:this},0);A.acg.An._Init.call(this.Aet={
I:this},0);A.acg.An._Init.call(this.Aer={I:this},0);A.Core.Bk._Init.call(this.Bk={
I:this},0);this.__proto__=C.AtY;this.H(Ca);this.Pq.AY(0x1D);this.Pq.H(Ca);this.Pq.
L(0xFFE6E6E6);this.V.AY(0x1D);this.V.H(WR);this.V.A4(0x11);this.V.R(WQ);this.V.L(
0xFF000000);this.Aet.H(SU);this.Aet.Y(false);this.Aer.AY(0x3A);this.Aer.H(SU);this.
Bk.Ki(Ks);this.Bk.Kh(ZL);this.Bk.DM(ZM);this.Bk.DY(MB);this.J(this.Pq,0);this.J(
this.V,0);this.J(this.Aet,0);this.J(this.Aer,0);this.J(this.Bk,0);this.V.S(A.aaL(
A.fl.Ah));this.Aet.Ax(A.aaL(C.AL6));this.Aer.Ax(A.aaL(C.Ai9));this.Bk.Lj=[this,this.
BzA];},_Done:function(){this.__proto__=C.Fn;this.Pq._Done();this.V._Done();this.
Aet._Done();this.Aer._Done();this.Bk._Done();C.Fn._Done.call(this);},_ReInit:function(
){C.Fn._ReInit.call(this);this.Pq._ReInit();this.V._ReInit();this.Aet._ReInit();
this.Aer._ReInit();this.Bk._ReInit();this.V.S(A.aaL(A.fl.Ah));},_Mark:function(D
){var B;C.Fn._Mark.call(this,D);if((B=this.Pq)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.V)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Aet)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Aer)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Bk)._cycle!=D)B._Mark(
B._cycle=D);},_className:"Demonstrator::AccordionHeader"};C.Bc={AZ:null,AN:null,
CP:null,Hu:-1,Y6:function(E){if(this.AZ===E)return;this.AZ=E;},Cd:function(Ad){A.
ab5("%s",Acq);},Y7:function(E){if(A.aa0(this.AN,E))return;this.AN=E;},AzV:function(
G){if(!this.CP.Yk)return;if(this.CP.Nz)return;A.pe(this.AN,this);},_Init:function(
aArg){A.Core.O._Init.call(this,aArg);A.Core.Bk._Init.call(this.CP={I:this},0);this.
__proto__=C.Bc;this.H(Ca);this.CP.AY(0x3F);this.CP.Ki(MB);this.CP.Kh(ZM);this.CP.
DM(ZL);this.CP.DY(Ks);this.CP.AeR=0xF;this.CP.AEL(100);this.J(this.CP,0);this.CP.
Lj=[this,this.AzV];},_Done:function(){this.__proto__=A.Core.O;this.CP._Done();A.
Core.O._Done.call(this);},_ReInit:function(){A.Core.O._ReInit.call(this);this.CP.
_ReInit();},_Mark:function(D){var B;A.Core.O._Mark.call(this,D);if((B=this.AZ)&&(
B._cycle!=D))B._Mark(B._cycle=D);if((B=this.AN)&&((B=B[0])._cycle!=D))B._Mark(B.
_cycle=D);if((B=this.CP)._cycle!=D)B._Mark(B._cycle=D);},_className:"Demonstrator::ListItem"
};C.Fn={ARw:null,Ag2:null,Ag1:null,Bl2:function(E){if(A.aa0(this.ARw,E))return;this.
ARw=E;},A9n:function(E){if(A.aa0(this.Ag2,E))return;this.Ag2=E;},A9m:function(E){
if(A.aa0(this.Ag1,E))return;this.Ag1=E;},_Init:function(aArg){A.Core.O._Init.call(
this,aArg);this.__proto__=C.Fn;this.H(Ca);},_Mark:function(D){var B;A.Core.O._Mark.
call(this,D);if((B=this.ARw)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.
Ag2)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.Ag1)&&((B=B[0])._cycle
!=D))B._Mark(B._cycle=D);},_className:"Demonstrator::ListHeader"};C.AM1={Dj:null
,AaG:null,Wx:null,Ww:null,Wv:null,M9:null,M8:null,KJ:null,LB:false,Ky:false,BAq:
false,Ai:function(Ae){var B;A.acn.Ahb.Ai.call(this,Ae);var G6=((Ae&0x10)===0x10);
var Fh=((Ae&0x20)===0x20);var BcQ=(this.Wv.Zm||this.Ww.Zm)||this.Wx.Zm;if(BcQ)this.
AaG.L(A.jb.Text);else this.AaG.L(A.jb.Bd);this.LB=G6;this.Ky=Fh;this.BAq=BcQ;},AzQ:
function(G){this.Am();if((!this.Wv.Zm&&!this.Ww.Zm)&&!this.Wx.Zm){var US=this.AJB(
this.ADW(),this.Aq6());var AcV=this.ADR();this.KJ.Jn(US);if(AcV>US)this.Ll(US);A.
pe(this.Dj,this);}},A2G:function(G){this.Am();},Bkk:function(G){var B;var FW=this.
M9.GT;var Cx=(A.acg.Text.isPrototypeOf(B=this.M9.Ce)?B:null);if(!Cx)return;Cx.R(
A.abl(FW+1900,4,10));Cx.S(A.aaL(A.fl.Ah));Cx.L(A.jb.Text);Cx.A4(0x12);Cx.H(A.abK(
Cx.M,[(B=this.M9.M)[2]-B[0],this.M9.GW]));},Bkj:function(G){var B;var FW=this.M8.
GT;var Cx=(A.acg.Text.isPrototypeOf(B=this.M8.Ce)?B:null);if(!Cx)return;Cx.R(A.abl(
FW+1,2,10)+UF);Cx.S(A.aaL(A.fl.Ah));Cx.L(A.jb.Text);Cx.A4(0x12);Cx.H(A.abK(Cx.M,[(
B=this.M8.M)[2]-B[0],this.M8.GW]));},Bkh:function(G){var B;var FW=this.KJ.GT;var
Cx=(A.acg.Text.isPrototypeOf(B=this.KJ.Ce)?B:null);if(!Cx)return;Cx.R(A.abl(FW+1
,2,10)+UF);Cx.S(A.aaL(A.fl.Ah));Cx.L(A.jb.Text);Cx.A4(0x12);Cx.H(A.abK(Cx.M,[(B=
this.KJ.M)[2]-B[0],this.KJ.GW]));},Aq6:function(){return 1900+((((-this.M9.Bq/this.
M9.GW)|0)+2)%200);},Akj:function(E){if(E<1900)E=1900;if(E>2100)E=2100;this.M9.Gh(((
E-1900)-2)*-this.M9.GW);var US=this.AJB(this.ADW(),E);this.KJ.Jn(US);if(this.ADR(
)>US)this.Ll(US);},ADW:function(){return 1+((((-this.M8.Bq/this.M8.GW)|0)+2)%12);
},T$:function(E){if(E<1)E=1;if(E>12)E=12;this.M8.Gh(((E-1)-2)*-this.M8.GW);var US=
this.AJB(E,this.Aq6());this.KJ.Jn(US);if(this.ADR()>US)this.Ll(US);},ADR:function(
){return 1+((((-this.KJ.Bq/this.KJ.GW)|0)+2)%this.KJ.AV);},Ll:function(E){var US=
this.AJB(this.ADW(),this.Aq6());if(E<1)E=1;if(E>US)E=US;this.KJ.Gh(((E-2)-1)*-this.
KJ.GW);},AJB:function(Afo,AcK){if(Afo===2){if(!(AcK%4)&&(!!(AcK%100)||!(AcK%400)
))return 29;else return 28;}else if((((Afo===4)||(Afo===6))||(Afo===9))||(Afo===
11))return 30;else return 31;},_Init:function(aArg){A.acn.Ahb._Init.call(this,aArg
);A.acg.Cz._Init.call(this.AaG={I:this},0);A.Core.H2._Init.call(this.Wx={I:this}
,0);A.Core.H2._Init.call(this.Ww={I:this},0);A.Core.H2._Init.call(this.Wv={I:this
},0);A.Core.CI._Init.call(this.M9={I:this},0);A.Core.CI._Init.call(this.M8={I:this
},0);A.Core.CI._Init.call(this.KJ={I:this},0);this.__proto__=C.AM1;this.H(ZN);this.
AaG.H(Afe);this.AaG.NX(3);this.AaG.L(0xFFE1E1E1);this.AaG.Y(true);this.Wx.H(ZO);
this.Wx.ASN(WS);this.Wx.ASj(0.2);this.Ww.H(ZP);this.Ww.ASN(WS);this.Ww.ASj(0.2);
this.Wv.H(ZQ);this.Wv.ASN(WS);this.Wv.ASj(0.2);this.M9.H(ZO);this.M9.ASg(true);this.
M9.Gh(60);this.M9.AeH(30);this.M9.Jn(200);this.M8.H(ZP);this.M8.ASg(true);this.M8.
Gh(60);this.M8.AeH(30);this.M8.Jn(12);this.KJ.H(ZQ);this.KJ.ASg(true);this.KJ.Gh(
60);this.KJ.AeH(30);this.KJ.Jn(31);this.J(this.AaG,0);this.J(this.Wx,0);this.J(this.
Ww,0);this.J(this.Wv,0);this.J(this.M9,0);this.J(this.M8,0);this.J(this.KJ,0);this.
Wx.Y2=[this,this.AzQ];this.Wx.Sq=[this,this.A2G];this.Ww.Y2=[this,this.AzQ];this.
Ww.Sq=[this,this.A2G];this.Wv.Y2=[this,this.AzQ];this.Wv.Sq=[this,this.A2G];this.
M9.Hc=[this,this.Bkk];this.M9.Awn(this.Wx);this.M8.Hc=[this,this.Bkj];this.M8.Awn(
this.Ww);this.KJ.Hc=[this,this.Bkh];this.KJ.Awn(this.Wv);},_Done:function(){this.
__proto__=A.acn.Ahb;this.AaG._Done();this.Wx._Done();this.Ww._Done();this.Wv._Done(
);this.M9._Done();this.M8._Done();this.KJ._Done();A.acn.Ahb._Done.call(this);},_ReInit:
function(){A.acn.Ahb._ReInit.call(this);this.AaG._ReInit();this.Wx._ReInit();this.
Ww._ReInit();this.Wv._ReInit();this.M9._ReInit();this.M8._ReInit();this.KJ._ReInit(
);},_Mark:function(D){var B;A.acn.Ahb._Mark.call(this,D);if((B=this.Dj)&&((B=B[0
])._cycle!=D))B._Mark(B._cycle=D);if((B=this.AaG)._cycle!=D)B._Mark(B._cycle=D);
if((B=this.Wx)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ww)._cycle!=D)B._Mark(B.
_cycle=D);if((B=this.Wv)._cycle!=D)B._Mark(B._cycle=D);if((B=this.M9)._cycle!=D)
B._Mark(B._cycle=D);if((B=this.M8)._cycle!=D)B._Mark(B._cycle=D);if((B=this.KJ).
_cycle!=D)B._Mark(B._cycle=D);},_className:"Demonstrator::DatePicker"};C.AGE={_class:
function(){return A.aci.Al;},0:{FileName:"./res_index/DemonstratorWhiteTile.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[40,40],FrameDelay:0,_this:
null}};C.AU6={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/DemonstratorWhiteTileSmall.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[40,40],FrameDelay:0,_this:
null}};C.Ahk={_Init:function(aArg){A.Core.O._Init.call(this,aArg);this.__proto__=
C.Ahk;this.H(EW);},_className:"Demonstrator::SelectionAreaContent"};C.ALW={Z:null
,U$:null,To:null,Bz2:function(G){var B;this.To.H(A.abI(this.To.M,((B=this.M)[3]-
B[1])-((B=this.U$.M)[3]-B[1])));},_Init:function(aArg){C.Ahk._Init.call(this,aArg
);A.Core.Z._Init.call(this.Z={I:this},0);C.ALn._Init.call(this.U$={I:this},0);C.
AUO._Init.call(this.To={I:this},0);this.__proto__=C.ALW;this.Z.AY(0x3F);this.Z.H(
EW);this.Z.Kf(1);this.U$.H(Aff);this.U$.Aj(true);this.U$.AEO(true);this.To.AY(0x3
);this.To.H(JP);this.To.Aj(true);this.To.NU(C.ALP);this.To.BlW(C.AL3);this.J(this.
Z,0);this.J(this.U$,0);this.J(this.To,0);this.A9(this.To);this.Z.Ej=[this,this.Bz2
];this.To.Y6(A._GetAutoObject(A.acp.ApS));},_Done:function(){this.__proto__=C.Ahk;
this.Z._Done();this.U$._Done();this.To._Done();C.Ahk._Done.call(this);},_ReInit:
function(){C.Ahk._ReInit.call(this);this.Z._ReInit();this.U$._ReInit();this.To._ReInit(
);},_Mark:function(D){var B;C.Ahk._Mark.call(this,D);if((B=this.Z)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.U$)._cycle!=D)B._Mark(B._cycle=D);if((B=this.To)._cycle!=
D)B._Mark(B._cycle=D);},_className:"Demonstrator::AnimalSelectionActions"};C.U$={
_Init:function(aArg){C.AtY._Init.call(this,aArg);this.__proto__=C.U$;this.U(A.aaR(
A.acf.A5c));},_ReInit:function(){C.AtY._ReInit.call(this);this.U(A.aaR(A.acf.A5c
));},_className:"Demonstrator::ActionsHeader"};C.ALn={Background:null,Aau:null,Ae3:
null,AeV:null,Ae2:null,AjR:null,AjS:null,AjT:null,AjU:null,AjZ:false,Ag2:function(
G){var B;this.H(A.abI(this.M,(B=this.Aau.M)[3]-B[1]));},Ag1:function(G){this.H(A.
abI(this.M,240));},AEO:function(E){if(this.AjZ===E)return;this.AjZ=E;this.Aau.AEO(
E);if(E)this.Ag2(this);else this.Ag1(this);},_Init:function(aArg){A.Core.O._Init.
call(this,aArg);A.acg.AJ._Init.call(this.Background={I:this},0);C.U$._Init.call(
this.Aau={I:this},0);C.Ae3._Init.call(this.Ae3={I:this},0);C.AeV._Init.call(this.
AeV={I:this},0);C.Ae2._Init.call(this.Ae2={I:this},0);A.acg.DR._Init.call(this.AjR={
I:this},0);A.acg.DR._Init.call(this.AjS={I:this},0);A.acg.DR._Init.call(this.AjT={
I:this},0);A.acg.DR._Init.call(this.AjU={I:this},0);this.__proto__=C.ALn;this.H(
Aff);this.Background.AY(0x3F);this.Background.H(Aff);this.Aau.AY(0x1D);this.Aau.
H(Ca);this.Ae3.H(Acr);this.AeV.H(Lr);this.Ae2.H(Ahz);this.AjR.DM(ZM);this.AjR.DY(
MB);this.AjR.L(A.jb.Bd);this.AjS.DM(AnQ);this.AjS.DY(N9);this.AjS.L(A.jb.Bd);this.
AjT.DM(WT);this.AjT.DY(AnR);this.AjT.L(A.jb.Bd);this.AjU.DM(AhA);this.AjU.DY(AhB
);this.AjU.L(A.jb.Bd);this.J(this.Background,0);this.J(this.Aau,0);this.J(this.Ae3
,0);this.J(this.AeV,0);this.J(this.Ae2,0);this.J(this.AjR,0);this.J(this.AjS,0);
this.J(this.AjT,0);this.J(this.AjU,0);this.Aau.A9n([this,this.Ag2]);this.Aau.A9m([
this,this.Ag1]);},_Done:function(){this.__proto__=A.Core.O;this.Background._Done(
);this.Aau._Done();this.Ae3._Done();this.AeV._Done();this.Ae2._Done();this.AjR._Done(
);this.AjS._Done();this.AjT._Done();this.AjU._Done();A.Core.O._Done.call(this);}
,_ReInit:function(){A.Core.O._ReInit.call(this);this.Background._ReInit();this.Aau.
_ReInit();this.Ae3._ReInit();this.AeV._ReInit();this.Ae2._ReInit();this.AjR._ReInit(
);this.AjS._ReInit();this.AjT._ReInit();this.AjU._ReInit();},_Mark:function(D){var
B;A.Core.O._Mark.call(this,D);if((B=this.Background)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Aau)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ae3)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.AeV)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ae2)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.AjR)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
AjS)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AjT)._cycle!=D)B._Mark(B._cycle=D);
if((B=this.AjU)._cycle!=D)B._Mark(B._cycle=D);},_className:"Demonstrator::ActionsMenu"
};C.L$={Abe:null,AgL:null,Bk:null,DR:null,Ais:function(G){},AZH:function(s){this.
Ais(s);},_Init:function(aArg){A.Core.O._Init.call(this,aArg);A.acg.An._Init.call(
this.Abe={I:this},0);A.acg.An._Init.call(this.AgL={I:this},0);A.Core.Bk._Init.call(
this.Bk={I:this},0);A.acg.DR._Init.call(this.DR={I:this},0);this.__proto__=C.L$;
this.H(Ca);this.Abe.H(Acs);this.Abe.L(A.jb.Text);this.AgL.H(UG);this.AgL.L(A.jb.
Text);this.AgL.Cu(0);this.Bk.Ki(Ks);this.Bk.Kh(N8);this.Bk.DM(PZ);this.Bk.DY(MB);
this.DR.DM(PZ);this.DR.DY(N8);this.DR.L(A.jb.Bd);this.J(this.Abe,0);this.J(this.
AgL,0);this.J(this.Bk,0);this.J(this.DR,0);this.Abe.Ax(A.aaL(A.aci.Tz));this.AgL.
Ax(A.aaL(A.aci.AS8));this.Bk.BK=[this,this.AZH];},_Done:function(){this.__proto__=
A.Core.O;this.Abe._Done();this.AgL._Done();this.Bk._Done();this.DR._Done();A.Core.
O._Done.call(this);},_ReInit:function(){A.Core.O._ReInit.call(this);this.Abe._ReInit(
);this.AgL._ReInit();this.Bk._ReInit();this.DR._ReInit();},_Mark:function(D){var
B;A.Core.O._Mark.call(this,D);if((B=this.Abe)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.AgL)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Bk)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.DR)._cycle!=D)B._Mark(B._cycle=D);},_className:"Demonstrator::ActionsItem"
};C.AeV={Ae7:null,Ais:function(G){var Af3=A.ab0(this.Ae7.String,0,10);var BAb=A.
_GetAutoObject(A.acp.K8).AAs(Af3);if(BAb){Af3=Af3+1;this.Ae7.R(Af3.toFixed());}}
,_Init:function(aArg){C.L$._Init.call(this,aArg);C.AqY._Init.call(this.Ae7={I:this
},0);this.__proto__=C.AeV;this.Ae7.H(AnS);this.Ae7.R(AnT);this.Ae7.L(A.jb.Text);
this.J(this.Ae7,-1);this.Abe.Ax(A.aaL(A.ach.AmF));},_Done:function(){this.__proto__=
C.L$;this.Ae7._Done();C.L$._Done.call(this);},_ReInit:function(){C.L$._ReInit.call(
this);this.Ae7._ReInit();},_Mark:function(D){var B;C.L$._Mark.call(this,D);if((B=
this.Ae7)._cycle!=D)B._Mark(B._cycle=D);},_className:"Demonstrator::ScanAction"};
C.Ae3={Ut:null,OO:null,A3r:0,Init:function(aArg){var B;A.zX([this,this.Bzk],[B=A.
_GetAutoObject(A.acp.K8),B.ARX,B.ASG],0);A.zX([this,this.AzY],[B=A._GetAutoObject(
A.Device.Device),B.Aq4,B.AsJ],0);A.pe([this,this.AzY],this);},Ai:function(Ae){C.
L$.Ai.call(this,Ae);this.OO.Y(!A._GetAutoObject(A.acp.K8).AwI);},Ais:function(G){
var B;A._GetAutoObject(A.acp.K8).BdQ(this);},AzY:function(G){if(A._GetAutoObject(
A.Device.Device).TemperatureUnit!==this.A3r){switch(A._GetAutoObject(A.Device.Device
).TemperatureUnit){case 0:this.OO.R(A.abk(A._GetAutoObject(A.acp.K8).Wt/100,0,1)
);break;case 1:{var AtN=A._GetAutoObject(A.Device.Converter).AUn(A._GetAutoObject(
A.acp.K8).Wt/100,0,A._GetAutoObject(A.Device.Device).TemperatureUnit);this.OO.R(
A.abk(AtN,0,1));}break;default:A.ab5("%s%e",AnU,A._GetAutoObject(A.Device.Device
).TemperatureUnit);}this.A3r=A._GetAutoObject(A.Device.Device).TemperatureUnit;}
},By5:function(G){var B;var Af1=A.abX(this.OO.String,0);Af1=A._GetAutoObject(A.Device.
Converter).AUn(Af1,A._GetAutoObject(A.Device.Device).TemperatureUnit,0);Af1*=100;
A._GetAutoObject(A.acp.K8).AE6(Math.round(Af1)|0);},Bzk:function(G){this.Am();},
_Init:function(aArg){C.L$._Init.call(this,aArg);A.acq.Ut._Init.call(this.Ut={I:this
},0);C.OO._Init.call(this.OO={I:this},0);this.__proto__=C.Ae3;var B;this.Ut.H(AnV
);this.Ut.A9h(A.aaR(A.acf.A4g));this.OO.H(Afg);this.OO.R(AnW);this.OO.L(A.jb.Text
);this.OO.BkS(true);this.A3r=A._GetAutoObject(A.Device.Device).TemperatureUnit;this.
J(this.Ut,0);this.J(this.OO,0);this.Abe.Ax(A.aaL(A.ach.Abd));this.Ut.At([B=A._GetAutoObject(
A.acp.K8),B.ARX,B.ASG]);this.Ut.OnSetAppearance(A._GetAutoObject(A.acx.Auj));this.
OO.Dj=[this,this.By5];this.Init(aArg);},_Done:function(){this.__proto__=C.L$;this.
Ut._Done();this.OO._Done();C.L$._Done.call(this);},_ReInit:function(){C.L$._ReInit.
call(this);this.Ut._ReInit();this.OO._ReInit();this.Ut.A9h(A.aaR(A.acf.A4g));},_Mark:
function(D){var B;C.L$._Mark.call(this,D);if((B=this.Ut)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.OO)._cycle!=D)B._Mark(B._cycle=D);},_className:"Demonstrator::TemperatureAction"
};C.AqH={Q:null,Cz:null,Bk:null,Agl:null,AmK:null,AmJ:null,AqM:null,Text:null,Hf:
null,An:null,CR:null,AqL:null,AqN:null,AoT:false,Bh:function(aSize){this.Hf.H(A.
abK(this.Hf.M,aSize));this.Cz.AwP(1);this.Cz.Ji(0,40);this.Cz.E_(0,aSize[0]-20,20
,12.5,12.5,-90,90,10);this.Cz.E_(0,20,20,12.5,12.5,90,270,10);this.Cz.Vq(0);},Ai:
function(Ae){var B;var F;A.Core.O.Ai.call(this,Ae);var Ir=((Ae&0x40)===0x40);if(
Ir){if(!!this.Q)this.Text.R((F=this.Q,F[1].call(F[0])));this.Agl.Ar(true);this.An.
Y(false);}else{if(!!this.Q)this.Text.R((F=this.Q,F[1].call(F[0])));this.Agl.Ar(false
);this.CR.Y(false);this.An.Y(true);}this.AoT=Ir;},Ais:function(G){var B;if(!((this.
T&0x80)===0x80))this.If().AMe(this);},A7u:function(G){},A$0:function(s){this.A7u(
s);},BiU:function(G){var B;var F;if(!this.Q||!(F=this.Q,F[1].call(F[0])).length)
this.CR.H(A.abM(this.CR.M,A.aaI(this.Text.M)[0]));else{this.CR.H(A.abM(this.CR.M
,this.Text.AOe(0)[2]+2));this.CR.H(A.abO(this.CR.M,this.Text.AOe(0)[1]));this.CR.
H(A.abI(this.CR.M,(B=this.Text.AOe(0))[3]-B[1]));}this.An.H(A.abM(this.An.M,this.
Text.M[0]-((B=this.An.M)[2]-B[0])));},A7s:function(G){},A$Z:function(s){this.A7s(
s);},At:function(E){if(A.aaZ(this.Q,E))return;if(!!this.Q)A.z$([this,this.J3],this.
Q,0);this.Q=E;if(!!E)A.zX([this,this.J3],E,0);if(!!E)A.pe([this,this.J3],this);}
,J3:function(G){this.Am();},Bkm:function(G){var B;if(((this.T&0x80)===0x80))this.
If().ABW(this);},BdY:function(G){},_Init:function(aArg){A.Core.O._Init.call(this
,aArg);A.Graphics.Hp._Init.call(this.Cz={I:this},0);A.Core.Bk._Init.call(this.Bk={
I:this},0);A.acl.Tu._Init.call(this.Agl={I:this},0);A.Core.BJ._Init.call(this.AmK={
I:this},0);A.Core.BJ._Init.call(this.AmJ={I:this},0);A.Core.BJ._Init.call(this.AqM={
I:this},0);A.acg.Text._Init.call(this.Text={I:this},0);A.acg.Hf._Init.call(this.
Hf={I:this},0);A.acg.An._Init.call(this.An={I:this},0);A.acg.AJ._Init.call(this.
CR={I:this},0);A.Core.BJ._Init.call(this.AqL={I:this},0);A.Core.BJ._Init.call(this.
AqN={I:this},0);this.__proto__=C.AqH;var B;this.H(Afh);this.Bk.AY(0x3F);this.Bk.
Ki(Ks);this.Bk.Kh(Asj);this.Bk.DM(OY);this.Bk.DY(Q_);this.Agl.Fe(530);this.Agl.T9(
530);this.AmK.Filter=143;this.AmJ.Filter=45;this.AqM.Filter=1;this.Text.AY(0x3F);
this.Text.H(Afh);this.Text.I0(true);this.Text.A4(0x12);this.Text.L(0xFFB3B3B3);this.
Hf.H(Afh);this.Hf.L(0xFFB3B3B3);this.Hf.NX(1);this.An.H(SV);this.CR.H(Axj);this.
CR.L(0xFFB3B3B3);this.CR.Y(false);this.AqL.Filter=138;this.AqN.Filter=137;this.J(
this.Bk,0);this.J(this.Text,0);this.J(this.Hf,0);this.J(this.An,0);this.J(this.CR
,0);this.Bk.Lj=[this,this.Ais];this.Agl.Q=[B=this.CR,B.Fd,B.Y];this.AmK.BK=[this
,this.A$0];this.AmK.DS=[this,this.A$0];this.AmJ.BK=[this,this.A$Z];this.AmJ.DS=[
this,this.A$Z];this.AqM.BK=[this,this.Bkm];this.Text.QT([this,this.BiU]);this.Text.
S(A.aaL(A.fl.Ak));this.Hf.Y8(this.Cz);this.An.Ax(null);this.AqL.BK=[this,this.BdY
];this.AqN.BK=[this,this.BdY];},_Done:function(){this.__proto__=A.Core.O;this.Cz.
_Done();this.Bk._Done();this.Agl._Done();this.AmK._Done();this.AmJ._Done();this.
AqM._Done();this.Text._Done();this.Hf._Done();this.An._Done();this.CR._Done();this.
AqL._Done();this.AqN._Done();A.Core.O._Done.call(this);},_ReInit:function(){A.Core.
O._ReInit.call(this);this.Cz._ReInit();this.Bk._ReInit();this.Agl._ReInit();this.
AmK._ReInit();this.AmJ._ReInit();this.AqM._ReInit();this.Text._ReInit();this.Hf.
_ReInit();this.An._ReInit();this.CR._ReInit();this.AqL._ReInit();this.AqN._ReInit(
);this.Text.S(A.aaL(A.fl.Ak));},_Mark:function(D){var B;A.Core.O._Mark.call(this
,D);if((B=this.Q)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.Cz)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.Bk)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
Agl)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AmK)._cycle!=D)B._Mark(B._cycle=D);
if((B=this.AmJ)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AqM)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Text)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Hf)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.An)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
CR)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AqL)._cycle!=D)B._Mark(B._cycle=D);
if((B=this.AqN)._cycle!=D)B._Mark(B._cycle=D);},_className:"Demonstrator::InputView"
};C.Ad5={Background:null,X8:null,_Init:function(aArg){A.Core.O._Init.call(this,aArg
);A.acg.AJ._Init.call(this.Background={I:this},0);C.X8._Init.call(this.X8={I:this
},0);this.__proto__=C.Ad5;var B;this.H(SW);this.Background.H(SW);this.X8.AY(0x1D
);this.X8.H(Ask);this.J(this.Background,0);this.J(this.X8,0);this.X8.At([B=A._GetAutoObject(
A.acp.Agn),B.A8j,B.AE1]);},_Done:function(){this.__proto__=A.Core.O;this.Background.
_Done();this.X8._Done();A.Core.O._Done.call(this);},_ReInit:function(){A.Core.O.
_ReInit.call(this);this.Background._ReInit();this.X8._ReInit();},_Mark:function(
D){var B;A.Core.O._Mark.call(this,D);if((B=this.Background)._cycle!=D)B._Mark(B.
_cycle=D);if((B=this.X8)._cycle!=D)B._Mark(B._cycle=D);},_className:"Demonstrator::FilterRow"
};C.OO={Init:function(aArg){var B;A.zX([this,this.AzY],[B=A._GetAutoObject(A.Device.
Device),B.Aq4,B.AsJ],0);A.pe([this,this.AzY],this);},Ai:function(Ae){var B;C.AqY.
Ai.call(this,Ae);var Ir=((this.T&0x40)===0x40);if(!Ir&&(this.String.length>0))this.
Text.R(((this.String+Axk)+A._GetAutoObject(A.acj.Temperature).Alj())+String.fromCharCode(
0x0A));else this.Text.R(this.String+String.fromCharCode(0x0A));if(this.Ef>this.String.
length)this.Ef=this.String.length;},AzY:function(G){this.Am();},_Init:function(aArg
){C.AqY._Init.call(this,aArg);this.__proto__=C.OO;this.Init(aArg);},_className:"Demonstrator::TemperatureInputView"
};C.AqY={B5:null,Dj:null,IL:null,Cl:null,Ame:null,R1:null,KF:null,Bk:null,Text:null
,CR:null,Ap5:null,ArG:null,Cz:null,Hf:null,Aq0:null,Aqv:null,Aqf:null,String:A.jV
,Ef:0,AQ:0xFFB3B3B3,AM3:false,MJ:false,Bh:function(aSize){this.Hf.H(A.abK(this.Hf.
M,aSize));this.Cz.AwP(1);this.Cz.Ji(0,40);this.Cz.E_(0,aSize[0]-20,20,12.5,12.5,-
90,90,10);this.Cz.E_(0,20,20,12.5,12.5,90,270,10);this.Cz.Vq(0);},Ai:function(Ae
){var B;A.acn.I3.Ai.call(this,Ae);if(((Ae&0x40)===0x40))this.IL.Ar(true);else{this.
IL.Ar(false);this.CR.Y(false);}},A3C:function(G){var B;var A$=this.Text.M;var Nn=
0;var Np=0;if(this.CR.Ek[0]<A$[0])Nn=A$[0]-this.CR.Ek[0];if(this.CR.Ek[0]>A$[2])
Nn=A$[2]-this.CR.Ek[0];if(this.CR.Ek[1]<A$[1])Np=A$[1]-this.CR.Ek[1];if(this.CR.
Eu[1]>A$[3])Np=A$[3]-this.CR.Eu[1];if(!!Nn||!!Np)this.Text.Gh(A.abf(this.Text.Bq
,[Nn,Np]));Nn=this.Text.Bq[0];Np=this.Text.Bq[1];var CZ=[(B=this.Text.Db())[2]-B[
0],B[3]-B[1]];if(CZ[0]<=((B=this.Text.M)[2]-B[0]))Nn=0;if(CZ[1]<=((B=this.Text.M
)[3]-B[1]))Np=0;this.Text.Gh([Nn,Np]);},AlV:function(G){if(!this.B5)return;var A25=
this.Text.AF_(this.Ef);var pos=this.Text.AeS(A25);this.CR.DY(A.abe(pos,[0,this.B5.
Ascent]));this.CR.DM(A.abf(pos,[0,this.B5.Descent]));if(this.IL.Bv){this.IL.Ar(false
);this.IL.Ar(true);}if(this.MJ){A.pe([this,this.A3C],this);this.MJ=false;}},AzU:
function(G){if(!this.A6b(0x80))this.If().AMe(this);var Ez=this.Text.ATa(this.Bk.
HV);var UX=this.Text.Ans(Ez);if(UX!==this.Ef){this.Ef=UX;A.pe([this,this.AlV],this
);this.MJ=true;}},AzO:function(G){if(!this.B5)return;var Ez=this.Text.AF_(this.Ef
);if(this.Cl.CK===6){Ez=[Ez[0]-1,Ez[1]];if(this.Text.Ans(Ez)===this.Ef){Ez=[Ez[0
],Ez[1]-1];Ez=[this.Text.ACh(Ez[1]).length,Ez[1]];}}if(this.Cl.CK===7){Ez=[Ez[0]+
1,Ez[1]];if(this.Text.Ans(Ez)===this.Ef){Ez=[Ez[0],Ez[1]+1];Ez=[0,Ez[1]];}}var UX=
this.Text.Ans(Ez);if(UX!==this.Ef){this.Ef=UX;A.pe([this,this.AlV],this);this.MJ=
true;}},BdH:function(G){if(!this.Ef)return;this.R(A.ab1(this.String,this.Ef-1,1)
);this.Ef=this.Ef-1;this.MJ=true;A.pe(this.Dj,this);},AzP:function(G){if(this.Ef>=
this.String.length)return;this.R(A.ab1(this.String,this.Ef,1));this.MJ=true;A.pe(
this.Dj,this);},BdM:function(G){if(this.String.length>=15)return;var Bxq=this.KF.
DJ;var AtL=String.fromCharCode(Bxq);this.R(A.abU(this.String,AtL,this.Ef));this.
Ef=this.Ef+AtL.length;this.MJ=true;A.pe(this.Dj,this);},R:function(E){if(this.String===
E)return;this.String=E;if(this.Ef>(E.length+1))this.Ef=E.length;this.Text.R(E+String.
fromCharCode(0x0A));this.MJ=true;this.Text.Gh(Ks);},L:function(E){if(this.AQ===E
)return;this.AQ=E;this.Text.L(E);this.CR.L(E);this.Hf.L(E);},S:function(E){if(this.
B5===E)return;this.B5=E;this.Text.S(E);this.MJ=true;this.Text.Gh(Ks);},BdZ:function(
G){if(this.AM3===false)return;if(this.String.indexOf(String.fromCharCode(0x2E),0
)>=0)return;if(this.String.length>=15)return;this.R(A.abU(this.String,UF,this.Ef
));this.Ef=this.Ef+1;this.MJ=true;A.pe(this.Dj,this);},BkS:function(E){if(this.AM3===
E)return;this.AM3=E;if(E===false){var BeC=this.String.indexOf(String.fromCharCode(
0x2E),0);if(BeC>=0)this.R(A.abV(this.String,BeC));}this.MJ=true;this.Text.Gh(Ks);
},Bzb:function(G){if(this.A6b(0x80))this.If().ABW(this);this.Am();},By0:function(
G){var UX=this.String.length;if(UX!==this.Ef){this.Ef=UX;A.pe([this,this.AlV],this
);this.MJ=true;}},By4:function(G){if(!!this.Ef){this.Ef=0;A.pe([this,this.AlV],this
);this.MJ=true;}},_Init:function(aArg){A.acn.I3._Init.call(this,aArg);A.acl.Tu._Init.
call(this.IL={I:this},0);A.Core.BJ._Init.call(this.Cl={I:this},0);A.Core.BJ._Init.
call(this.Ame={I:this},0);A.Core.BJ._Init.call(this.R1={I:this},0);A.Core.BJ._Init.
call(this.KF={I:this},0);A.Core.Bk._Init.call(this.Bk={I:this},0);A.acg.Text._Init.
call(this.Text={I:this},0);A.acg.DR._Init.call(this.CR={I:this},0);A.Core.BJ._Init.
call(this.Ap5={I:this},0);A.Core.BJ._Init.call(this.ArG={I:this},0);A.Graphics.Hp.
_Init.call(this.Cz={I:this},0);A.acg.Hf._Init.call(this.Hf={I:this},0);A.Core.BJ.
_Init.call(this.Aq0={I:this},0);A.Core.BJ._Init.call(this.Aqv={I:this},0);A.Core.
BJ._Init.call(this.Aqf={I:this},0);this.__proto__=C.AqY;var B;this.H(Afh);this.IL.
B1=false;this.IL.Cr=true;this.IL.Fe(500);this.IL.T9(500);this.Cl.Filter=147;this.
Ame.Filter=45;this.R1.Filter=44;this.KF.Filter=143;this.Bk.AY(0x3F);this.Bk.Ki(Q_
);this.Bk.Kh(OY);this.Bk.DM(Asj);this.Bk.DY(Ks);this.Bk.AEL(3);this.Text.AY(0x3F
);this.Text.H(Afh);this.Text.KM(false);this.Text.A4(0x12);this.Text.R(A.jV);this.
Text.L(0xFFB3B3B3);this.CR.DM(Axl);this.CR.DY(Axm);this.CR.A9S(2);this.CR.A9R(2);
this.CR.L(0xFFB3B3B3);this.CR.Y(false);this.Ap5.Filter=138;this.ArG.Filter=137;this.
Hf.H(Afh);this.Hf.L(0xFFB3B3B3);this.Hf.NX(1);this.Aq0.Filter=1;this.Aqv.Filter=
41;this.Aqf.Filter=42;this.J(this.Bk,0);this.J(this.Text,0);this.J(this.CR,0);this.
J(this.Hf,0);this.IL.Q=[B=this.CR,B.Fd,B.Y];this.Cl.BK=[this,this.AzO];this.Cl.DS=[
this,this.AzO];this.Ame.BK=[this,this.BdH];this.Ame.DS=[this,this.BdH];this.R1.BK=[
this,this.AzP];this.R1.DS=[this,this.AzP];this.KF.BK=[this,this.BdM];this.KF.DS=[
this,this.BdM];this.Bk.BK=[this,this.AzU];this.Text.QT([this,this.AlV]);this.Text.
S(A.aaL(A.fl.Ak));this.B5=A.aaL(A.fl.Ak);this.Ap5.BK=[this,this.BdZ];this.ArG.BK=[
this,this.BdZ];this.Hf.Y8(this.Cz);this.Aq0.BK=[this,this.Bzb];this.Aqv.BK=[this
,this.By4];this.Aqf.BK=[this,this.By0];},_Done:function(){this.__proto__=A.acn.I3;
this.IL._Done();this.Cl._Done();this.Ame._Done();this.R1._Done();this.KF._Done();
this.Bk._Done();this.Text._Done();this.CR._Done();this.Ap5._Done();this.ArG._Done(
);this.Cz._Done();this.Hf._Done();this.Aq0._Done();this.Aqv._Done();this.Aqf._Done(
);A.acn.I3._Done.call(this);},_ReInit:function(){A.acn.I3._ReInit.call(this);this.
IL._ReInit();this.Cl._ReInit();this.Ame._ReInit();this.R1._ReInit();this.KF._ReInit(
);this.Bk._ReInit();this.Text._ReInit();this.CR._ReInit();this.Ap5._ReInit();this.
ArG._ReInit();this.Cz._ReInit();this.Hf._ReInit();this.Aq0._ReInit();this.Aqv._ReInit(
);this.Aqf._ReInit();this.Text.S(A.aaL(A.fl.Ak));this.S(A.aaL(A.fl.Ak));},_Mark:
function(D){var B;A.acn.I3._Mark.call(this,D);if((B=this.B5)&&(B._cycle!=D))B._Mark(
B._cycle=D);if((B=this.Dj)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.
IL)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Cl)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Ame)._cycle!=D)B._Mark(B._cycle=D);if((B=this.R1)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.KF)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Bk)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Text)._cycle!=D)B._Mark(B._cycle=D);if((B=this.CR)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.Ap5)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
ArG)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Cz)._cycle!=D)B._Mark(B._cycle=D);
if((B=this.Hf)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Aq0)._cycle!=D)B._Mark(B.
_cycle=D);if((B=this.Aqv)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Aqf)._cycle!=
D)B._Mark(B._cycle=D);},_className:"Demonstrator::NumberInput"};C.Ae2={LabelDataSync:
null,Ais:function(G){var B;A.pe([B=A._GetAutoObject(A.acr.Ab6),B.BAx],this);},_Init:
function(aArg){C.L$._Init.call(this,aArg);A.kR.CO._Init.call(this.LabelDataSync={
I:this},0);this.__proto__=C.Ae2;this.LabelDataSync.H(AnX);this.LabelDataSync.R(A.
aaR(A.acf.A44));this.LabelDataSync.L(A.jb.Text);this.J(this.LabelDataSync,0);this.
Abe.Ax(A.aaL(C.AUe));this.LabelDataSync.S(A.aaL(A.fl.Ah));this.LabelDataSync.A8(
A.aaL(A.fl.Ak));},_Done:function(){this.__proto__=C.L$;this.LabelDataSync._Done(
);C.L$._Done.call(this);},_ReInit:function(){C.L$._ReInit.call(this);this.LabelDataSync.
_ReInit();this.LabelDataSync.R(A.aaR(A.acf.A44));this.LabelDataSync.S(A.aaL(A.fl.
Ah));this.LabelDataSync.A8(A.aaL(A.fl.Ak));},_Mark:function(D){var B;C.L$._Mark.
call(this,D);if((B=this.LabelDataSync)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Demonstrator::SyncAction"};C.AUe={_class:function(){return A.aci.Al;},0:{FileName:
"./res_index/DemonstratorSyncIcon.png",Format:A._PIXEL_FORMAT_NATIVE,NoOfFrames:
1,FrameSize:[50,60],FrameDelay:0,_this:null}};C.AaQ={TimespanDaysToString:null,ACj:
function(aIndex){if(this.ACd()>aIndex)return this.TimespanDaysToString.BQ(aIndex
);A.ab5("%s",Axn);return A.jV;},ACd:function(){return 4;},C4:function(aIndex){var
AiS=0;switch(aIndex){case 0:AiS=0;break;case 1:AiS=1;break;case 2:AiS=2;break;case
3:AiS=3;break;default:throw new Error(Asl+aIndex.toFixed());}return AiS;},_Init:
function(aArg){A.acv.Amg._Init.call(this,aArg);A.Device.TimespanDaysToString._Init.
call(this.TimespanDaysToString={I:this},0);this.__proto__=C.AaQ;},_Done:function(
){this.__proto__=A.acv.Amg;this.TimespanDaysToString._Done();A.acv.Amg._Done.call(
this);},_ReInit:function(){A.acv.Amg._ReInit.call(this);this.TimespanDaysToString.
_ReInit();},_Mark:function(D){var B;A.acv.Amg._Mark.call(this,D);if((B=this.TimespanDaysToString
)._cycle!=D)B._Mark(B._cycle=D);},_className:"Demonstrator::DatePickerUnitDD"};C.
BEj={GB:0,AUV:1,Ha:2,Year:3};C.ABT={_class:function(){return A.aci.Al;},0:{FileName:
"./res_index/DemonstratorEarTagIcon.png",Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:
2,FrameSize:[37,37],FrameDelay:0,_this:null}};C.AGl={_class:function(){return A.
aci.Al;},0:{FileName:"./res_index/DemonstratorTransponderEarTagIcon.png",Format:
A._PIXEL_FORMAT_ALPHA8,NoOfFrames:2,FrameSize:[37,37],FrameDelay:0,_this:null}};
C._Init=function(){C.AUO.__proto__=A.acn.Menu;C.ATN.__proto__=A.Core.O;C.ALP.__proto__=
C.Bc;C.Ma.__proto__=A.Core.O;C.X8.__proto__=C.AqH;C.AaR.__proto__=A.Core.O;C.Au2.
__proto__=A.acn.Ahd;C.AL3.__proto__=C.Fn;C.AtY.__proto__=C.Fn;C.Bc.__proto__=A.Core.
O;C.Fn.__proto__=A.Core.O;C.AM1.__proto__=A.acn.Ahb;C.Ahk.__proto__=A.Core.O;C.ALW.
__proto__=C.Ahk;C.U$.__proto__=C.AtY;C.ALn.__proto__=A.Core.O;C.L$.__proto__=A.Core.
O;C.AeV.__proto__=C.L$;C.Ae3.__proto__=C.L$;C.AqH.__proto__=A.Core.O;C.Ad5.__proto__=
A.Core.O;C.OO.__proto__=C.AqY;C.AqY.__proto__=A.acn.I3;C.Ae2.__proto__=C.L$;C.AaQ.
__proto__=A.acv.Amg;};C._ReInit=function(){};C.DB=function(D){var B;if((B=C.Background[
0]._this)&&(B._cycle!=D))B._Done(C.Background[0]._this=null);if((B=C.AMn[0]._this
)&&(B._cycle!=D))B._Done(C.AMn[0]._this=null);if((B=C.AMo[0]._this)&&(B._cycle!=
D))B._Done(C.AMo[0]._this=null);if((B=C.AMp[0]._this)&&(B._cycle!=D))B._Done(C.AMp[
0]._this=null);if((B=C.AMq[0]._this)&&(B._cycle!=D))B._Done(C.AMq[0]._this=null);
if((B=C.APs[0]._this)&&(B._cycle!=D))B._Done(C.APs[0]._this=null);if((B=C.Filter[
0]._this)&&(B._cycle!=D))B._Done(C.Filter[0]._this=null);if((B=C.AQ1[0]._this)&&(
B._cycle!=D))B._Done(C.AQ1[0]._this=null);if((B=C.Ai9[0]._this)&&(B._cycle!=D))B.
_Done(C.Ai9[0]._this=null);if((B=C.AL6[0]._this)&&(B._cycle!=D))B._Done(C.AL6[0].
_this=null);if((B=C.ArV[0]._this)&&(B._cycle!=D))B._Done(C.ArV[0]._this=null);if((
B=C.AUj[0]._this)&&(B._cycle!=D))B._Done(C.AUj[0]._this=null);if((B=C.AGE[0]._this
)&&(B._cycle!=D))B._Done(C.AGE[0]._this=null);if((B=C.AU6[0]._this)&&(B._cycle!=
D))B._Done(C.AU6[0]._this=null);if((B=C.AUe[0]._this)&&(B._cycle!=D))B._Done(C.AUe[
0]._this=null);if((B=C.ABT[0]._this)&&(B._cycle!=D))B._Done(C.ABT[0]._this=null);
if((B=C.AGl[0]._this)&&(B._cycle!=D))B._Done(C.AGl[0]._this=null);};return C;})(
);

/* VitalControl demonstration application, © Urban GmbH & Co.KG 2023 */