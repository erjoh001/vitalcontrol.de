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
* Version  : 13.02
* Profile  : WebGLDemonstrator
* Platform : Web.WebGL.RGBA8888
*
*******************************************************************************/

var index;if(!index)throw new Error("The application file '_project.js' isn't yet loaded!"
);if(index.aco)throw new Error("The unit file 'DeviceDemonstrator.js' included twice!"
);index.aco=(function(){var A=index;var C={};
var Cc=[0,0];var BD=[0,0,1000,740];var E6=[200,5,577,745];var Hp=[270,69,510,389];
var IS=[605,30,975,740];var Ir=[25,25,45,41];var O1=[547,610,687,750];var P3=[270
,390];var P4=[350,390];var CQ=[350,450];var Fe=[270,450];var L1=[430,390];var P5=[
510,390];var J0=[510,450];var N_=[430,450];var P6=[360,390];var MG=[420,390];var
S6=[420,450];var UN=[360,450];var Z0=[335,460];var WY=[447,460];var Is=[447,500];
var UO=[335,500];var Z1=[350,512];var WZ=[430,512];var Z2=[430,592];var W0=[350,
592];var Z3=[335,605];var Z4=[447,605];var UP=[447,665];var W1=[335,665];var P7=[
264,504];var Z5=[344,504];var O2=[344,601];var Rj=[264,601];var W2=[436,504];var
W3=[516,504];var W4=[516,601];var W5=[436,601];var Z6=[10,130,210,310];var W6="%d%m%Y";
var W7="0";var S7="1";var UQ="2";var UR="3";
C.A4J={BfK:null,Background:null,Acb:null,AkP:null,Agy:null,Ap:null,ZO:null,SY:null
,ZP:null,ZR:null,ZQ:null,WT:null,ZS:null,WM:null,WR:null,WS:null,Aa$:null,Dm:null
,Init:function(aArg){A._GetAutoObject(A.Device.Device).ArW(A._NewObject(A.Device.
Transponder,0));},DriveCursorHitting:function(S_,BF,Fg){var AzR=this.AOG();if(!!
AzR){var A1Y=AzR.M;A1Y=A.abJ(A1Y,AzR.BiF(Cc));if(!A.wa(A1Y,Fg)){this.ACy(AzR);AzR.
Cr(0x10,0x0);}}return A.Core.Root.DriveCursorHitting.call(this,S_,BF,Fg);},Bom:function(
G){var K=this.K;this.Device.UpdateActiveScreen(3);K.AkP.Ar(false);},Nx:function(
G){var K=this.K;var B;var D5=(A.Core.Bn.isPrototypeOf(G)?G:null);var AiE=0;if(D5===
K.ZQ)AiE=27;else if(D5===K.ZP)AiE=26;else if(D5===K.ZR)AiE=28;else if(D5===K.WR)
AiE=6;else if(D5===K.WS)AiE=7;else if(D5===K.WT)AiE=4;else if(D5===K.WM)AiE=5;else
if(D5===K.ZS)AiE=1;if(!!D5){if((D5.Down&&(D5.Jr>0))&&(D5.Jr<400))return;var Byy=
this.AV;this.Bb(this.GJ);this.Il().DriveKeyboardHitting(AiE,0x00,D5.Down);this.Bb(
Byy);K.SY.H(A.abM(K.SY.M,D5.H0[0]-((((B=K.SY.M)[2]-B[0])/2)|0)));K.SY.H(A.abO(K.
SY.M,D5.H0[1]-((((B=K.SY.M)[3]-B[1])/2)|0)));K.ZO.Ar(true);}},AiL:function(G){var
K=this.K;var B;var JA=(A.Core.BK.isPrototypeOf(G)?G:null);if((String.fromCharCode(
JA.DQ).toLowerCase().charCodeAt(0)||0)===0x73)A._GetAutoObject(C.Ht).Bez(this);else
if((String.fromCharCode(JA.DQ).toLowerCase().charCodeAt(0)||0)===0x74)A._GetAutoObject(
A.Device.Helper).AKX(this);else if((String.fromCharCode(JA.DQ).toLowerCase().charCodeAt(
0)||0)===0x64)this.Bb(this.GJ);else if((String.fromCharCode(JA.DQ).toLowerCase().
charCodeAt(0)||0)===0x63)this.Bb(K.Agy);else if(JA.CO===152){if(this.AV===K.Agy)
this.Bb(this.GJ);else this.Bb(K.Agy);}else if(this.AV===this.GJ){if(JA.CO===11){
this.Il().DriveKeyboardHitting(26,0x00,true);this.Il().DriveKeyboardHitting(26,0x00
,false);}else if(JA.CO===12){this.Il().DriveKeyboardHitting(27,0x00,true);this.Il(
).DriveKeyboardHitting(27,0x00,false);}else if(JA.CO===13){this.Il().DriveKeyboardHitting(
28,0x00,true);this.Il().DriveKeyboardHitting(28,0x00,false);}}},_Init:function(aArg
){var K=this.K;A.acg.Ap._Init.call(K.Background={I:this},0);A.acg.Ap._Init.call(
K.Acb={I:this},0);A.Core.Timer._Init.call(K.AkP={I:this},0);A.acw.AUh._Init.call(
K.Agy={I:this},0);A.acg.Ap._Init.call(K.Ap={I:this},0);A.acl.ANe._Init.call(K.ZO={
I:this},0);A.acg.Ap._Init.call(K.SY={I:this},0);A.Core.Bn._Init.call(K.ZP={I:this
},0);A.Core.Bn._Init.call(K.ZR={I:this},0);A.Core.Bn._Init.call(K.ZQ={I:this},0);
A.Core.Bn._Init.call(K.WT={I:this},0);A.Core.Bn._Init.call(K.ZS={I:this},0);A.Core.
Bn._Init.call(K.WM={I:this},0);A.Core.Bn._Init.call(K.WR={I:this},0);A.Core.Bn._Init.
call(K.WS={I:this},0);A.acw.Aa$._Init.call(K.Aa$={I:this},0);A.Core.BK._Init.call(
K.Dm={I:this},0);K.__proto__=C.A4J;var B;this.H(BD);K.Background.H(BD);K.Acb.H(E6
);this.GJ.H(Hp);K.AkP.PP(2000);K.AkP.Ar(true);K.Agy.H(IS);K.Ap.H(Ir);K.ZO.AkR=true;
K.ZO.Wy(9);K.ZO.HM(1);K.ZO.Fp(300);K.ZO.B2=0xA0FFFFFF;K.ZO.Cw=0x00FFFFFF;K.SY.H(
O1);K.SY.L(0x00FFFFFF);K.ZP.JS(P3);K.ZP.Ks(P4);K.ZP.DC(CQ);K.ZP.DM(Fe);K.ZR.JS(L1
);K.ZR.Ks(P5);K.ZR.DC(J0);K.ZR.DM(N_);K.ZQ.JS(P6);K.ZQ.Ks(MG);K.ZQ.DC(S6);K.ZQ.DM(
UN);K.WT.JS(Z0);K.WT.Ks(WY);K.WT.DC(Is);K.WT.DM(UO);K.ZS.JS(Z1);K.ZS.Ks(WZ);K.ZS.
DC(Z2);K.ZS.DM(W0);K.WM.JS(Z3);K.WM.Ks(Z4);K.WM.DC(UP);K.WM.DM(W1);K.WR.JS(P7);K.
WR.Ks(Z5);K.WR.DC(O2);K.WR.DM(Rj);K.WS.JS(W2);K.WS.Ks(W3);K.WS.DC(W4);K.WS.DM(W5
);K.Aa$.H(Z6);this.J(K.Background,-1);this.J(K.Acb,-1);this.J(K.Agy,0);this.J(K.
Ap,0);this.J(K.SY,0);this.J(K.ZP,0);this.J(K.ZR,0);this.J(K.ZQ,0);this.J(K.WT,0);
this.J(K.ZS,0);this.J(K.WM,0);this.J(K.WR,0);this.J(K.WS,0);this.J(K.Aa$,0);K.Background.
Aw(A.aaL(A.acw.Background));K.Acb.Aw(A.aaL(A.acx.Acb));K.AkP.Mz=[this,K.Bom];K.Ap.
Aw(A.aaL(A.acw.ARx));K.ZO.Q=[B=K.SY,B.Bj5,B.L];K.SY.Aw(A.aaL(A.acx.ARe));K.ZP.Lm=[
this,K.Nx];K.ZP.BL=[this,K.Nx];K.ZR.Lm=[this,K.Nx];K.ZR.BL=[this,K.Nx];K.ZQ.Lm=[
this,K.Nx];K.ZQ.BL=[this,K.Nx];K.WT.D1=[this,K.Nx];K.WT.Lm=[this,K.Nx];K.WT.BL=[
this,K.Nx];K.ZS.Lm=[this,K.Nx];K.ZS.BL=[this,K.Nx];K.WM.D1=[this,K.Nx];K.WM.Lm=[
this,K.Nx];K.WM.BL=[this,K.Nx];K.WR.D1=[this,K.Nx];K.WR.Lm=[this,K.Nx];K.WR.BL=[
this,K.Nx];K.WS.D1=[this,K.Nx];K.WS.Lm=[this,K.Nx];K.WS.BL=[this,K.Nx];K.Aa$.Ab2([
B=A._GetAutoObject(A.Device.Helper),B.UX,B.U0]);K.Dm.BL=[this,K.AiL];K.BfK=A._GetAutoObject(
A.acs.Ack);K.Init.call(this,aArg);A.h7++;},_Done:function(){var K=this.K;K.__proto__=
null;K.Background._Done();K.Acb._Done();K.AkP._Done();K.Agy._Done();K.Ap._Done();
K.ZO._Done();K.SY._Done();K.ZP._Done();K.ZR._Done();K.ZQ._Done();K.WT._Done();K.
ZS._Done();K.WM._Done();K.WR._Done();K.WS._Done();K.Aa$._Done();K.Dm._Done();A.h7--;
},_ReInit:function(){var K=this.K;K.Background._ReInit();K.Acb._ReInit();K.AkP._ReInit(
);K.Agy._ReInit();K.Ap._ReInit();K.ZO._ReInit();K.SY._ReInit();K.ZP._ReInit();K.
ZR._ReInit();K.ZQ._ReInit();K.WT._ReInit();K.ZS._ReInit();K.WM._ReInit();K.WR._ReInit(
);K.WS._ReInit();K.Aa$._ReInit();K.Dm._ReInit();},_Mark:function(D){var B;if((B=
this.BfK)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Background)._cycle!=D)B.
_Mark(B._cycle=D);if((B=this.Acb)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AkP).
_cycle!=D)B._Mark(B._cycle=D);if((B=this.Agy)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Ap)._cycle!=D)B._Mark(B._cycle=D);if((B=this.ZO)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.SY)._cycle!=D)B._Mark(B._cycle=D);if((B=this.ZP)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.ZR)._cycle!=D)B._Mark(B._cycle=D);if((B=this.ZQ)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.WT)._cycle!=D)B._Mark(B._cycle=D);if((B=this.ZS
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.WM)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.WR)._cycle!=D)B._Mark(B._cycle=D);if((B=this.WS)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Aa$)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Dm)._cycle!=D)B._Mark(
B._cycle=D);},_variants:function(){return this;},_className:"DeviceDemonstrator::ApplicationDemonstration"
};C.DeviceClass={AJL:null,Avj:null,AuA:null,Init:function(aArg){var K=this.K;var
B;A.zV([this,K.BjR],this.An,0);A.zX([this,K.BlZ],[B=K.AJL,B.A8G,B.A92],0);A.zX([
this,K.Bk$],[B=K.AJL,B.A72,B.ASG],0);},ArV:function(E){this.UpdateScanState(E);}
,AwK:function(E){this.UpdateMeasureState(E);},AwY:function(E){this.UpdateTempValue(
E);},Axx:function(){this.UpdateMeasureState(1);this.UpdateTempValue(0);},AhJ:function(
){var B;A._GetAutoObject(A.Device.Helper).SQ.AnQ(this);this.UpdateMeasureState(0
);},AhG:function(){this.UpdateScanState(1);},AnR:function(){this.UpdateScanState(
0);},ArW:function(E){this.UpdateScanTransponder(E.Id,E.TransponderType,E.TransponderProtocol
);if(this.ScanState!==1)return;this.UpdateScanState(2);},BlZ:function(G){var K=this.
K;var AlD=A._GetAutoObject(C.Ht).AGq;if(AlD<0)K.Avj=null;else{K.Avj=A._NewObject(
A.Device.Int32FilterCriterion,0);K.Avj.Initialize(2,0,AlD,true);}A.pe([this,K.Bk
],this);},Bk$:function(G){var K=this.K;var Bfz=A._GetAutoObject(C.Ht).ABC;if(Bfz<=
0)K.AuA=null;else{K.AuA=A._NewObject(A.Device.Int32FilterCriterion,0);K.AuA.Initialize(
1,4,Bfz,false);}A.pe([this,K.Bk],this);},Bk:function(G){var K=this.K;var Be=A._GetAutoObject(
A.Device.Helper).Mq();Be.CV(K.Avj);Be.CV(K.AuA);A._GetAutoObject(C.Aqa).Bk(Be);}
,BjR:function(G){var K=this.K;A.pe([this,K.Bk],this);},_Init:function(aArg){var K=
this.K;A.acs.DeviceClass._Init.call(this,aArg);K.__proto__=C.DeviceClass;this.OL(
4);this.AwT(276034580109999);K.AJL=A._GetAutoObject(C.Ht);K.Init.call(this,aArg);
},_Mark:function(D){var B;A.acs.DeviceClass._Mark.call(this,D);if((B=this.AJL)&&(
B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Avj)&&(B._cycle!=D))B._Mark(B._cycle=
D);if((B=this.AuA)&&(B._cycle!=D))B._Mark(B._cycle=D);},_variants:function(){return this;
},_className:"DeviceDemonstrator::DeviceClass"};C.Uw={_Init:function(){A.acs.Uw.
_Init.call(this,0);this.ATi(false);this.ATj(false);},_ReInit:function(){A.acs.Uw.
_ReInit.call(this,0);},_variants:function(){return this;},_this:null};C.A5v={AGm:
0,AGq:0,ABC:0,Asp:null,WK:3950,Ahz:0,Axg:true,A92:function(E){if(this.AGq===E)return;
this.AGq=E;A.abo([this,this.A8G,this.A92],0);},A8G:function(){return this.AGq;},
ASG:function(E){if(this.ABC===E)return;this.ABC=E;A.abo([this,this.A72,this.ASG]
,0);},A72:function(){return this.ABC;},Bez:function(G){this.BfJ(this.AGm);},A90:
function(E){if(this.AGm===E)return;this.AGm=E;A.abo([this,this.BkE,this.A90],0);
},A93:function(E){if(this.Asp===E)return;this.Asp=E;A.abo([this,this.A8H,this.A93
],0);},A8H:function(){return this.Asp;},BfJ:function(Jh){var B;var Ih=false;if((
A._GetAutoObject(A.Device.Device).ScanState===1)&&!!Jh){A._GetAutoObject(A.Device.
Device).OQ.ATv(1);A._GetAutoObject(A.Device.Device).OQ.OnSetId(Jh);A._GetAutoObject(
A.Device.Device).OQ.ATu(2);A._GetAutoObject(A.Device.Device).ArV(2);A.abo([B=A._GetAutoObject(
A.Device.Device),B.ASv,B.AZZ],0);Ih=true;}return Ih;},ATd:function(E){if(this.Axg===
E)return;this.Axg=E;A.abo([this,this.ASs,this.ATd],0);},AFD:function(E){if(this.
WK===E)return;this.WK=E;A.abo([this,this.BkK,this.AFD],0);},Bek:function(G){var B;
if(this.Axg)A._GetAutoObject(A.Device.Helper).AKX(this);else A._GetAutoObject(A.
Device.Helper).Bcq(this.WK);},BBj:function(Bwd){var Atp=Bwd.toFixed();Atp=Atp+A.
_GetAutoObject(A.acj.VA).ACS(Atp).toFixed();var O;for(O=0;O<Atp.length;O++){A.aam(
).DriveKeyboardHitting(0,Atp.charCodeAt(O)||0,true);A.aam().DriveKeyboardHitting(
0,Atp.charCodeAt(O)||0,false);}A.aam().DriveKeyboardHitting(0,0x0D,true);A.aam().
DriveKeyboardHitting(0,0x0D,false);return true;},AFw:function(E){if(this.Ahz===E
)return;this.Ahz=E;A.abo([this,this.AEx,this.AFw],0);},BBk:function(AyP){var Au=
A._NewObject(A.Core.Bs,0);Au.Initialize(AyP);var J5=Au.Format(W6)+W7;J5=J5+A._GetAutoObject(
A.acj.VA).ACS(J5).toFixed();var O;for(O=0;O<J5.length;O++){A.aam().DriveKeyboardHitting(
0,J5.charCodeAt(O)||0,true);A.aam().DriveKeyboardHitting(0,J5.charCodeAt(O)||0,false
);}A.aam().DriveKeyboardHitting(149,0x00,true);A.aam().DriveKeyboardHitting(149,
0x00,false);return true;},BkE:function(){return this.AGm;},ASs:function(){return this.
Axg;},BkK:function(){return this.WK;},AEx:function(){return this.Ahz;},_Init:function(
aArg){this.__proto__=C.A5v;this.Asp=A.acw.AMr;A.h7++;},_Done:function(){this.__proto__=
null;A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((B=this.I)&&(B._cycle
!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:"DeviceDemonstrator::DemonstrationConfigClass"
};C.Ht={_Init:function(){C.A5v._Init.call(this,0);},_ReInit:function(){},_variants:
function(){return this;},_this:null};C.Aqa={_Init:function(){A.Device.Table._Init.
call(this,0);this.OnSetId(0);},_ReInit:function(){},_variants:function(){return this;
},_this:null};C.A5w={AhD:A.jV,Delete:function(){this.AFy(A.abV(this.AhD,this.AhD.
length-1));},Ey:function(AcW){if(!this.AhD.length&&(AcW===0x30))return;if(this.AhD.
length<6)this.AFy(this.AhD+String.fromCharCode(AcW));},AFy:function(E){if(this.AhD===
E)return;this.AhD=E;A.abo([this,this.A8E,this.AFy],0);A._GetAutoObject(C.Ht).ASG(
A.wz(this.AhD,-1,10));},A8E:function(){return this.AhD;},_Init:function(aArg){this.
__proto__=C.A5w;A.h7++;},_Done:function(){this.__proto__=null;A.h7--;},_ReInit:function(
){},_Mark:function(D){var B;if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:
null,_cycle:0,_observers:null,_className:"DeviceDemonstrator::DemonstrationSearchHelperClass"
};C.AgI={_Init:function(){C.A5w._Init.call(this,0);},_ReInit:function(){},_variants:
function(){return this;},_this:null};C.PT={AJV:function(G){var Ac=A._GetAutoObject(
A.Device.Helper).Du();this.A0(276000312341001,2,1,Ac-1382400,0,1,false,false,false
,true,40800,0,0,false,0,false,1,1,1,0,true,true,A._GetAutoObject(A.Device.Device
).A1,A._GetAutoObject(A.Device.Device).AF);this.A0(276000312341002,2,1,Ac-1296000
,0,1,false,false,false,true,38300,0,0,false,0,false,1,1,1,0,true,true,A._GetAutoObject(
A.Device.Device).A1,A._GetAutoObject(A.Device.Device).AF);this.A0(276000312341003
,2,1,Ac-1209600,0,1,false,false,false,true,37600,0,0,false,0,false,1,1,1,0,true,
true,A._GetAutoObject(A.Device.Device).A1,A._GetAutoObject(A.Device.Device).AF);
this.A0(276000312341004,2,1,Ac-1123200,0,1,false,false,false,true,40600,0,0,false
,0,false,1,1,1,0,true,true,A._GetAutoObject(A.Device.Device).A1,A._GetAutoObject(
A.Device.Device).AF);this.A0(276000312341005,2,1,Ac-9504000,0,1,false,false,false
,true,36900,0,0,false,0,false,1,1,1,0,true,true,A._GetAutoObject(A.Device.Device
).A1,A._GetAutoObject(A.Device.Device).AF);this.A0(276000312341006,2,1,Ac-950400
,0,1,false,false,false,true,38000,0,0,false,0,false,1,1,1,0,true,true,A._GetAutoObject(
A.Device.Device).A1,A._GetAutoObject(A.Device.Device).AF);this.A0(276000312341007
,2,1,Ac-864000,0,1,false,false,false,true,39200,0,0,false,0,false,1,1,1,276000312343007
,true,true,A._GetAutoObject(A.Device.Device).A1,A._GetAutoObject(A.Device.Device
).AF);this.A0(276000312341008,2,1,Ac-777600,0,1,false,false,false,true,36500,0,0
,false,0,false,1,1,1,276000312343409,true,true,A._GetAutoObject(A.Device.Device).
A1,A._GetAutoObject(A.Device.Device).AF);this.A0(276000312341009,2,1,Ac-691200,0
,1,false,false,false,true,40900,0,0,false,0,false,1,1,1,276000312343308,true,true
,A._GetAutoObject(A.Device.Device).A1,A._GetAutoObject(A.Device.Device).AF);this.
A0(276000312341010,2,1,Ac-604800,0,1,false,false,false,true,40900,0,0,false,0,false
,1,1,1,276000312343420,true,true,A._GetAutoObject(A.Device.Device).A1,A._GetAutoObject(
A.Device.Device).AF);this.A0(276000312341011,2,1,Ac-518400,0,1,false,false,false
,true,39200,0,0,false,0,false,1,1,1,276000312343065,true,true,A._GetAutoObject(A.
Device.Device).A1,A._GetAutoObject(A.Device.Device).AF);this.A0(276000312341012,
2,1,Ac-432000,0,1,false,false,false,true,38100,0,0,false,0,false,1,1,1,276000312343232
,true,true,A._GetAutoObject(A.Device.Device).A1,A._GetAutoObject(A.Device.Device
).AF);this.A0(276000312341013,2,1,Ac-345600,0,1,false,false,false,true,37700,0,0
,false,0,true,1,1,1,276000312343204,true,true,A._GetAutoObject(A.Device.Device).
A1,A._GetAutoObject(A.Device.Device).AF);this.A0(276000312341014,2,1,Ac-259200,0
,1,false,false,false,true,37200,0,0,false,0,true,1,1,1,276000312343376,true,true
,A._GetAutoObject(A.Device.Device).A1,A._GetAutoObject(A.Device.Device).AF);this.
A0(276000312341015,2,1,Ac-172800,0,1,false,false,false,true,37000,0,0,false,0,true
,1,1,1,276000312343044,true,true,A._GetAutoObject(A.Device.Device).A1,A._GetAutoObject(
A.Device.Device).AF);this.A0(276000312342001,3,1,Ac-7084800,0,0,false,false,false
,true,39500,0,0,false,0,false,1,0,2,0,true,true,A._GetAutoObject(A.Device.Device
).A1,A._GetAutoObject(A.Device.Device).AF);this.A0(276000312342002,3,1,Ac-5788800
,0,0,false,false,false,true,38800,0,0,false,0,false,1,0,2,0,true,true,A._GetAutoObject(
A.Device.Device).A1,A._GetAutoObject(A.Device.Device).AF);this.A0(276000312342003
,3,1,Ac-7084800,0,0,false,false,false,true,39600,0,0,false,0,false,1,0,2,0,true,
true,A._GetAutoObject(A.Device.Device).A1,A._GetAutoObject(A.Device.Device).AF);
this.A0(276000312342004,3,1,Ac-6652800,0,0,false,false,false,true,37400,0,0,false
,0,false,1,0,2,0,true,true,A._GetAutoObject(A.Device.Device).A1,A._GetAutoObject(
A.Device.Device).AF);this.A0(276000312342005,3,1,Ac-7084800,0,0,false,false,false
,true,39700,0,0,false,0,false,1,0,2,0,true,true,A._GetAutoObject(A.Device.Device
).A1,A._GetAutoObject(A.Device.Device).AF);this.A0(276000312342006,3,1,Ac-6998400
,0,0,false,false,false,true,40900,0,0,false,0,false,1,0,2,0,true,true,A._GetAutoObject(
A.Device.Device).A1,A._GetAutoObject(A.Device.Device).AF);this.A0(276000312342007
,3,1,Ac-6739200,0,0,false,false,false,true,38100,0,0,false,0,false,1,0,2,0,true,
true,A._GetAutoObject(A.Device.Device).A1,A._GetAutoObject(A.Device.Device).AF);
this.A0(276000312342008,3,1,Ac-7430400,0,0,false,false,false,true,37200,0,0,false
,0,false,1,0,2,0,true,true,A._GetAutoObject(A.Device.Device).A1,A._GetAutoObject(
A.Device.Device).AF);this.A0(276000312342009,3,1,Ac-6652800,0,0,false,false,false
,true,37000,0,0,false,0,false,1,0,2,0,true,true,A._GetAutoObject(A.Device.Device
).A1,A._GetAutoObject(A.Device.Device).AF);this.A0(276000312342010,3,1,Ac-7776000
,0,0,false,false,false,true,38600,0,0,false,0,false,1,0,2,0,true,true,A._GetAutoObject(
A.Device.Device).A1,A._GetAutoObject(A.Device.Device).AF);this.A0(276000312342011
,3,1,Ac-5961600,0,0,false,false,false,true,37900,0,0,false,0,false,1,0,2,0,true,
true,A._GetAutoObject(A.Device.Device).A1,A._GetAutoObject(A.Device.Device).AF);
this.A0(276000312342012,3,1,Ac-6393600,0,0,false,false,false,true,36300,0,0,false
,0,false,1,0,2,0,true,true,A._GetAutoObject(A.Device.Device).A1,A._GetAutoObject(
A.Device.Device).AF);this.A0(276000312342013,3,1,Ac-7344000,0,0,false,false,false
,true,36100,0,0,false,0,false,1,0,2,0,true,true,A._GetAutoObject(A.Device.Device
).A1,A._GetAutoObject(A.Device.Device).AF);this.A0(276000312342014,3,1,Ac-5529600
,0,0,false,false,false,true,37700,0,0,false,0,false,1,0,2,0,true,true,A._GetAutoObject(
A.Device.Device).A1,A._GetAutoObject(A.Device.Device).AF);this.A0(276000312342015
,3,1,Ac-6307200,0,0,false,false,false,true,39800,0,0,false,0,false,1,0,2,0,true,
true,A._GetAutoObject(A.Device.Device).A1,A._GetAutoObject(A.Device.Device).AF);
this.A0(276000312342016,3,1,Ac-6048000,0,0,false,false,false,true,40300,0,0,false
,0,false,1,0,2,0,true,true,A._GetAutoObject(A.Device.Device).A1,A._GetAutoObject(
A.Device.Device).AF);this.A0(276000312342017,3,1,Ac-6134400,0,0,false,false,false
,true,38400,0,0,false,0,false,1,0,2,0,true,true,A._GetAutoObject(A.Device.Device
).A1,A._GetAutoObject(A.Device.Device).AF);this.A0(276000312342018,3,1,Ac-6652800
,0,0,false,false,false,true,36300,0,0,false,0,false,1,0,2,0,true,true,A._GetAutoObject(
A.Device.Device).A1,A._GetAutoObject(A.Device.Device).AF);this.A0(276000312342019
,3,1,Ac-8467200,0,0,false,false,false,true,38700,0,0,false,0,false,1,0,2,0,true,
true,A._GetAutoObject(A.Device.Device).A1,A._GetAutoObject(A.Device.Device).AF);
this.A0(276000312342020,3,1,Ac-6998400,0,0,false,false,false,true,37300,0,0,false
,0,false,1,0,2,0,true,true,A._GetAutoObject(A.Device.Device).A1,A._GetAutoObject(
A.Device.Device).AF);this.A0(276000312342021,3,1,Ac-6652800,0,0,false,false,false
,true,38500,0,0,false,0,false,1,0,2,0,true,true,A._GetAutoObject(A.Device.Device
).A1,A._GetAutoObject(A.Device.Device).AF);this.A0(276000312342022,3,1,Ac-5788800
,0,0,false,false,false,true,37800,0,0,false,0,false,1,0,2,0,true,true,A._GetAutoObject(
A.Device.Device).A1,A._GetAutoObject(A.Device.Device).AF);this.A0(276000312342023
,3,1,Ac-6652800,0,0,false,false,false,true,37300,0,0,false,0,false,1,0,2,0,true,
true,A._GetAutoObject(A.Device.Device).A1,A._GetAutoObject(A.Device.Device).AF);
this.A0(276000312342024,3,1,Ac-6739200,0,0,false,false,false,true,37500,0,0,false
,0,false,1,0,2,0,true,true,A._GetAutoObject(A.Device.Device).A1,A._GetAutoObject(
A.Device.Device).AF);this.A0(276000312342025,3,1,Ac-7171200,0,0,false,false,false
,true,36300,0,0,false,0,false,1,0,2,0,true,true,A._GetAutoObject(A.Device.Device
).A1,A._GetAutoObject(A.Device.Device).AF);this.A0(276000312342026,3,1,Ac-7171200
,0,0,false,false,false,true,37800,0,0,false,0,false,1,0,2,0,true,true,A._GetAutoObject(
A.Device.Device).A1,A._GetAutoObject(A.Device.Device).AF);this.A0(276000312342027
,3,1,Ac-7689600,0,0,false,false,false,true,37900,0,0,false,0,false,1,0,2,0,true,
true,A._GetAutoObject(A.Device.Device).A1,A._GetAutoObject(A.Device.Device).AF);
this.A0(276000312342028,3,1,Ac-8121600,0,0,false,false,false,true,39800,0,0,false
,0,false,1,0,2,0,true,true,A._GetAutoObject(A.Device.Device).A1,A._GetAutoObject(
A.Device.Device).AF);this.A0(276000312342029,3,1,Ac-7603200,0,0,false,false,false
,true,36500,0,0,false,0,false,1,0,2,0,true,true,A._GetAutoObject(A.Device.Device
).A1,A._GetAutoObject(A.Device.Device).AF);this.A0(276000312342030,3,1,Ac-6393600
,0,0,false,false,false,true,38900,0,0,false,0,false,1,0,2,0,true,true,A._GetAutoObject(
A.Device.Device).A1,A._GetAutoObject(A.Device.Device).AF);this.A0(276000312342031
,3,1,Ac-6652800,0,0,false,false,false,true,36700,0,0,false,0,false,1,0,2,0,true,
true,A._GetAutoObject(A.Device.Device).A1,A._GetAutoObject(A.Device.Device).AF);
this.A0(276000312342032,3,1,Ac-6739200,0,0,false,false,false,true,37400,0,0,false
,0,false,1,0,2,0,true,true,A._GetAutoObject(A.Device.Device).A1,A._GetAutoObject(
A.Device.Device).AF);this.A0(276000312342033,3,1,Ac-6393600,0,0,false,false,false
,true,41000,0,0,false,0,false,1,0,2,0,true,true,A._GetAutoObject(A.Device.Device
).A1,A._GetAutoObject(A.Device.Device).AF);this.A0(276000312342034,3,1,Ac-7084800
,0,0,false,false,false,true,40500,0,0,false,0,false,1,0,2,0,true,true,A._GetAutoObject(
A.Device.Device).A1,A._GetAutoObject(A.Device.Device).AF);this.A0(276000312342035
,3,1,Ac-7171200,0,0,false,false,false,true,38200,0,0,false,0,false,1,0,2,0,true,
true,A._GetAutoObject(A.Device.Device).A1,A._GetAutoObject(A.Device.Device).AF);
this.A0(276000312342036,3,1,Ac-6480000,0,0,false,false,false,true,40000,0,0,false
,0,false,1,0,2,0,true,true,A._GetAutoObject(A.Device.Device).A1,A._GetAutoObject(
A.Device.Device).AF);this.A0(276000312342037,3,1,Ac-6652800,0,0,false,false,false
,true,40500,0,0,false,0,false,1,0,2,0,true,true,A._GetAutoObject(A.Device.Device
).A1,A._GetAutoObject(A.Device.Device).AF);this.A0(276000312342038,3,1,Ac-7084800
,0,0,false,false,false,true,40000,0,0,false,0,false,1,0,2,0,true,true,A._GetAutoObject(
A.Device.Device).A1,A._GetAutoObject(A.Device.Device).AF);this.A0(276000312342039
,3,1,Ac-6307200,0,0,false,false,false,true,38900,0,0,false,0,false,1,0,2,0,true,
true,A._GetAutoObject(A.Device.Device).A1,A._GetAutoObject(A.Device.Device).AF);
this.A0(276000312342040,3,1,Ac-7430400,0,0,false,false,false,true,37300,0,0,false
,0,false,1,0,2,0,true,true,A._GetAutoObject(A.Device.Device).A1,A._GetAutoObject(
A.Device.Device).AF);this.A0(276000312342041,3,1,Ac-6652800,0,0,false,false,false
,true,37000,0,0,false,0,false,1,0,2,0,true,true,A._GetAutoObject(A.Device.Device
).A1,A._GetAutoObject(A.Device.Device).AF);this.A0(276000312342042,3,1,Ac-6825600
,0,0,false,false,false,true,40800,0,0,false,0,false,1,0,2,0,true,true,A._GetAutoObject(
A.Device.Device).A1,A._GetAutoObject(A.Device.Device).AF);this.A0(276000312342043
,3,1,Ac-7430400,0,0,false,false,false,true,40000,0,0,false,0,false,1,0,2,0,true,
true,A._GetAutoObject(A.Device.Device).A1,A._GetAutoObject(A.Device.Device).AF);
this.A0(276000312342044,3,1,Ac-7516800,0,0,false,false,false,true,40700,0,0,false
,0,false,1,0,2,0,true,true,A._GetAutoObject(A.Device.Device).A1,A._GetAutoObject(
A.Device.Device).AF);this.A0(276000312342045,3,1,Ac-8121600,0,0,false,false,false
,true,40800,0,0,false,0,false,1,0,2,0,true,true,A._GetAutoObject(A.Device.Device
).A1,A._GetAutoObject(A.Device.Device).AF);this.A0(276000312342046,3,1,Ac-8553600
,0,0,false,false,false,true,39300,0,0,false,0,false,1,0,2,0,true,true,A._GetAutoObject(
A.Device.Device).A1,A._GetAutoObject(A.Device.Device).AF);this.A0(276000312342047
,3,1,Ac-7171200,0,0,false,false,false,true,39300,0,0,false,0,false,1,0,2,0,true,
true,A._GetAutoObject(A.Device.Device).A1,A._GetAutoObject(A.Device.Device).AF);
this.A0(276000312342048,3,1,Ac-6566400,0,0,false,false,false,true,40900,0,0,false
,0,false,1,0,2,0,true,true,A._GetAutoObject(A.Device.Device).A1,A._GetAutoObject(
A.Device.Device).AF);this.A0(276000312342049,3,1,Ac-7171200,0,0,false,false,false
,true,40100,0,0,false,0,false,1,0,2,0,true,true,A._GetAutoObject(A.Device.Device
).A1,A._GetAutoObject(A.Device.Device).AF);this.A0(276000312342050,3,1,Ac-6998400
,0,0,false,false,false,true,39900,0,0,false,0,false,1,0,2,0,true,true,A._GetAutoObject(
A.Device.Device).A1,A._GetAutoObject(A.Device.Device).AF);this.A0(276000312342051
,3,1,Ac-6739200,0,0,false,false,false,true,38200,0,0,false,0,false,1,0,2,0,true,
true,A._GetAutoObject(A.Device.Device).A1,A._GetAutoObject(A.Device.Device).AF);
this.A0(276000312342052,3,1,Ac-7603200,0,0,false,false,false,true,36400,0,0,false
,0,false,1,0,2,0,true,true,A._GetAutoObject(A.Device.Device).A1,A._GetAutoObject(
A.Device.Device).AF);this.A0(276000312342053,3,1,Ac-7689600,0,0,false,false,false
,true,40800,0,0,false,0,false,1,0,2,0,true,true,A._GetAutoObject(A.Device.Device
).A1,A._GetAutoObject(A.Device.Device).AF);this.A0(276000312342054,3,1,Ac-6480000
,0,0,false,false,false,true,36100,0,0,false,0,false,1,0,2,0,true,true,A._GetAutoObject(
A.Device.Device).A1,A._GetAutoObject(A.Device.Device).AF);this.A0(276000312342055
,3,1,Ac-7948800,0,0,false,false,false,true,38000,0,0,false,0,false,1,0,2,0,true,
true,A._GetAutoObject(A.Device.Device).A1,A._GetAutoObject(A.Device.Device).AF);
this.A0(276000312342056,3,1,Ac-8121600,0,0,false,false,false,true,37800,0,0,false
,0,false,1,0,2,0,true,true,A._GetAutoObject(A.Device.Device).A1,A._GetAutoObject(
A.Device.Device).AF);this.A0(276000312342057,3,1,Ac-6566400,0,0,false,false,false
,true,38800,0,0,false,0,false,1,0,2,0,true,true,A._GetAutoObject(A.Device.Device
).A1,A._GetAutoObject(A.Device.Device).AF);this.A0(276000312342058,3,1,Ac-7862400
,0,0,false,false,false,true,36600,0,0,false,0,false,1,0,2,0,true,true,A._GetAutoObject(
A.Device.Device).A1,A._GetAutoObject(A.Device.Device).AF);this.A0(276000312342059
,3,1,Ac-7344000,0,0,false,false,false,true,39700,0,0,false,0,false,1,0,2,0,true,
true,A._GetAutoObject(A.Device.Device).A1,A._GetAutoObject(A.Device.Device).AF);
this.A0(276000312342060,3,1,Ac-6998400,0,0,false,false,false,true,36600,0,0,false
,0,false,1,0,2,0,true,true,A._GetAutoObject(A.Device.Device).A1,A._GetAutoObject(
A.Device.Device).AF);this.A0(276000312342061,3,1,Ac-5788800,0,0,false,false,false
,true,36600,0,0,false,0,false,1,0,2,0,true,true,A._GetAutoObject(A.Device.Device
).A1,A._GetAutoObject(A.Device.Device).AF);this.A0(276000312342062,3,1,Ac-7257600
,0,0,false,false,false,true,36300,0,0,false,0,false,1,0,2,0,true,true,A._GetAutoObject(
A.Device.Device).A1,A._GetAutoObject(A.Device.Device).AF);this.A0(276000312342063
,3,1,Ac-5875200,0,0,false,false,false,true,40800,0,0,false,0,false,1,0,2,0,true,
true,A._GetAutoObject(A.Device.Device).A1,A._GetAutoObject(A.Device.Device).AF);
this.A0(276000312342064,3,1,Ac-6134400,0,0,false,false,false,true,37500,0,0,false
,0,false,1,0,2,0,true,true,A._GetAutoObject(A.Device.Device).A1,A._GetAutoObject(
A.Device.Device).AF);this.A0(276000312342065,3,1,Ac-5788800,0,0,false,false,false
,true,36000,0,0,false,0,false,1,0,2,0,true,true,A._GetAutoObject(A.Device.Device
).A1,A._GetAutoObject(A.Device.Device).AF);this.A0(276000312342066,3,1,Ac-7862400
,0,0,false,false,false,true,38400,0,0,false,0,false,1,0,2,0,true,true,A._GetAutoObject(
A.Device.Device).A1,A._GetAutoObject(A.Device.Device).AF);this.A0(276000312342067
,3,1,Ac-5270400,0,0,false,false,false,true,36900,0,0,false,0,false,1,0,2,0,true,
true,A._GetAutoObject(A.Device.Device).A1,A._GetAutoObject(A.Device.Device).AF);
this.A0(276000312342068,3,1,Ac-7776000,0,0,false,false,false,true,38300,0,0,false
,0,false,1,0,2,0,true,true,A._GetAutoObject(A.Device.Device).A1,A._GetAutoObject(
A.Device.Device).AF);this.A0(276000312342069,3,1,Ac-7171200,0,0,false,false,false
,true,40400,0,0,false,0,false,1,0,2,0,true,true,A._GetAutoObject(A.Device.Device
).A1,A._GetAutoObject(A.Device.Device).AF);this.A0(276000312342070,3,1,Ac-6048000
,0,0,false,false,false,true,40100,0,0,false,0,false,1,0,2,0,true,true,A._GetAutoObject(
A.Device.Device).A1,A._GetAutoObject(A.Device.Device).AF);this.A0(276000312343007
,1,1,Ac-186192000,0,1,false,false,false,true,0,Ac-864000,3,false,1,false,1,0,1,0
,true,true,A._GetAutoObject(A.Device.Device).A1,A._GetAutoObject(A.Device.Device
).AF);this.A0(276000312343044,1,1,Ac-118108800,0,1,false,false,false,true,0,Ac-172800
,1,false,1,false,1,0,1,0,true,true,A._GetAutoObject(A.Device.Device).A1,A._GetAutoObject(
A.Device.Device).AF);this.A0(276000312343065,1,1,Ac-152150400,0,1,false,false,false
,true,0,Ac-518400,2,false,1,false,1,0,1,0,true,true,A._GetAutoObject(A.Device.Device
).A1,A._GetAutoObject(A.Device.Device).AF);this.A0(276000312343117,1,1,Ac-252806400
,0,1,false,false,false,true,0,Ac-86400,5,false,1,false,1,0,1,0,true,true,A._GetAutoObject(
A.Device.Device).A1,A._GetAutoObject(A.Device.Device).AF);this.A0(276000312343204
,1,1,Ac-219369600,0,1,false,false,false,true,0,Ac-345600,4,false,1,false,1,0,1,0
,true,true,A._GetAutoObject(A.Device.Device).A1,A._GetAutoObject(A.Device.Device
).AF);this.A0(276000312343232,1,1,Ac-152064000,0,1,false,false,false,true,0,Ac-432000
,2,false,1,false,1,0,1,0,true,true,A._GetAutoObject(A.Device.Device).A1,A._GetAutoObject(
A.Device.Device).AF);this.A0(276000312343308,1,1,Ac-118627200,0,1,false,false,false
,true,0,Ac-691200,1,false,1,false,1,0,1,0,true,true,A._GetAutoObject(A.Device.Device
).A1,A._GetAutoObject(A.Device.Device).AF);this.A0(276000312343376,1,1,Ac-118195200
,0,1,false,false,false,true,0,Ac-259200,1,false,1,false,1,0,1,0,true,true,A._GetAutoObject(
A.Device.Device).A1,A._GetAutoObject(A.Device.Device).AF);this.A0(276000312343409
,1,1,Ac-152409600,0,1,false,false,false,true,0,Ac-777600,2,false,1,false,1,0,1,0
,true,true,A._GetAutoObject(A.Device.Device).A1,A._GetAutoObject(A.Device.Device
).AF);this.A0(276000312343420,1,1,Ac-253324800,0,1,false,false,false,true,0,Ac-604800
,5,false,1,false,1,0,1,0,true,true,A._GetAutoObject(A.Device.Device).A1,A._GetAutoObject(
A.Device.Device).AF);this.A0(276000312343505,4,1,Ac-145152000,0,1,false,false,false
,true,0,Ac-27216000,1,true,1,false,1,0,1,0,true,true,A._GetAutoObject(A.Device.Device
).A1,A._GetAutoObject(A.Device.Device).AF);this.A0(276000312343535,4,1,Ac-215222400
,0,1,false,false,false,true,0,Ac-29894400,3,true,1,false,1,0,1,0,true,true,A._GetAutoObject(
A.Device.Device).A1,A._GetAutoObject(A.Device.Device).AF);this.A0(276000312343540
,4,1,Ac-179107200,0,1,false,false,false,true,0,Ac-27475200,2,true,1,false,1,0,1,
0,true,true,A._GetAutoObject(A.Device.Device).A1,A._GetAutoObject(A.Device.Device
).AF);this.A0(276000312343558,4,1,Ac-248659200,0,1,false,false,false,true,0,Ac-29635200
,4,true,1,false,1,0,1,0,true,true,A._GetAutoObject(A.Device.Device).A1,A._GetAutoObject(
A.Device.Device).AF);this.A0(276000312343587,4,1,Ac-179020800,0,1,false,false,false
,true,0,Ac-27388800,2,true,1,false,1,0,1,0,true,true,A._GetAutoObject(A.Device.Device
).A1,A._GetAutoObject(A.Device.Device).AF);this.A0(276000312343597,4,1,Ac-146188800
,0,1,false,false,false,true,0,Ac-28252800,1,true,1,false,1,0,1,0,true,true,A._GetAutoObject(
A.Device.Device).A1,A._GetAutoObject(A.Device.Device).AF);this.A0(276000312343619
,4,1,Ac-181353600,0,1,false,false,false,true,0,Ac-29721600,2,true,1,false,1,0,1,
0,true,true,A._GetAutoObject(A.Device.Device).A1,A._GetAutoObject(A.Device.Device
).AF);this.A0(276000312343627,4,1,Ac-213235200,0,1,false,false,false,true,0,Ac-27907200
,3,true,1,false,1,0,1,0,true,true,A._GetAutoObject(A.Device.Device).A1,A._GetAutoObject(
A.Device.Device).AF);this.A0(276000312343721,4,1,Ac-282182400,0,1,false,false,false
,true,0,Ac-29462400,5,true,1,false,1,0,1,0,true,true,A._GetAutoObject(A.Device.Device
).A1,A._GetAutoObject(A.Device.Device).AF);this.A0(276000312343892,4,1,Ac-179107200
,0,1,false,false,false,true,0,Ac-27475200,2,true,1,false,1,0,1,0,true,true,A._GetAutoObject(
A.Device.Device).A1,A._GetAutoObject(A.Device.Device).AF);this.A0(276000312343899
,4,1,Ac-147398400,0,1,false,false,false,true,0,Ac-29462400,1,true,1,false,1,0,1,
0,true,true,A._GetAutoObject(A.Device.Device).A1,A._GetAutoObject(A.Device.Device
).AF);this.A0(276000312343913,4,1,Ac-178416000,0,1,false,false,false,true,0,Ac-26784000
,2,true,1,false,1,0,1,0,true,true,A._GetAutoObject(A.Device.Device).A1,A._GetAutoObject(
A.Device.Device).AF);this.A0(276000312343915,4,1,Ac-179712000,0,1,false,false,false
,true,0,Ac-28080000,2,true,1,false,1,0,1,0,true,true,A._GetAutoObject(A.Device.Device
).A1,A._GetAutoObject(A.Device.Device).AF);this.A0(276000312343940,4,1,Ac-212025600
,0,1,false,false,false,true,0,Ac-26697600,3,true,1,false,1,0,1,0,true,true,A._GetAutoObject(
A.Device.Device).A1,A._GetAutoObject(A.Device.Device).AF);this.A0(276000312343978
,4,1,Ac-246499200,0,1,false,false,false,true,0,Ac-27475200,4,true,1,false,1,0,1,
0,true,true,A._GetAutoObject(A.Device.Device).A1,A._GetAutoObject(A.Device.Device
).AF);this.A0(276001413780210,5,1,Ac-2851200,0,0,false,false,false,true,0,0,0,false
,0,true,85,0,2,0,true,false,5,A._GetAutoObject(A.Device.Device).AF);this.A0(276001514777390
,5,1,Ac-2937600,0,0,false,false,false,true,0,0,0,false,0,true,85,0,2,0,true,false
,5,A._GetAutoObject(A.Device.Device).AF);this.A0(276001514977845,5,1,Ac-2764800,
0,0,false,false,false,true,0,0,0,false,0,true,85,0,2,0,true,false,5,A._GetAutoObject(
A.Device.Device).AF);this.A0(276000215140539,5,1,Ac-2678400,0,0,false,false,false
,true,0,0,0,false,0,true,85,0,2,0,true,false,5,A._GetAutoObject(A.Device.Device).
AF);this.A0(276000615692447,5,1,Ac-3024000,0,0,false,false,false,true,0,0,0,false
,0,true,85,0,2,0,true,false,5,A._GetAutoObject(A.Device.Device).AF);this.A0(276000916480395
,5,1,Ac-2851200,0,0,false,false,false,true,0,0,0,false,0,true,85,0,2,0,true,false
,5,A._GetAutoObject(A.Device.Device).AF);this.A0(276001416728887,5,1,Ac-2592000,
0,0,false,false,false,true,0,0,0,false,0,true,85,0,2,0,true,false,5,A._GetAutoObject(
A.Device.Device).AF);this.A0(276001017235905,5,1,Ac-2678400,0,0,false,false,false
,true,0,0,0,false,0,true,85,0,2,0,true,false,5,A._GetAutoObject(A.Device.Device).
AF);this.A0(276001618229464,5,1,Ac-2505600,0,0,false,false,false,true,0,0,0,false
,0,true,85,0,2,0,true,false,5,A._GetAutoObject(A.Device.Device).AF);this.A0(276001021244611
,5,1,Ac-2764800,0,0,false,false,false,true,0,0,0,false,0,true,85,0,2,0,true,false
,5,A._GetAutoObject(A.Device.Device).AF);this.A0(276000730343809,5,1,Ac-2764800,
0,0,false,false,false,true,0,0,0,false,0,true,85,0,2,0,true,false,5,A._GetAutoObject(
A.Device.Device).AF);this.A0(276001332086943,5,1,Ac-2592000,0,0,false,false,false
,true,0,0,0,false,0,true,85,0,2,0,true,false,5,A._GetAutoObject(A.Device.Device).
AF);this.A0(276001034073970,5,1,Ac-2505600,0,0,false,false,false,true,0,0,0,false
,0,true,85,0,2,0,true,false,5,A._GetAutoObject(A.Device.Device).AF);this.A0(276000338829483
,5,1,Ac-2505600,0,0,false,false,false,true,0,0,0,false,0,true,85,0,2,0,true,false
,5,A._GetAutoObject(A.Device.Device).AF);this.A0(276001239648313,5,1,Ac-2678400,
0,0,false,false,false,true,0,0,0,false,0,true,85,0,2,0,true,false,5,A._GetAutoObject(
A.Device.Device).AF);this.A0(276001540765035,5,1,Ac-2851200,0,0,false,false,false
,true,0,0,0,false,0,true,85,0,2,0,true,false,5,A._GetAutoObject(A.Device.Device).
AF);this.A0(276001042945700,5,1,Ac-2937600,0,0,false,false,false,true,0,0,0,false
,0,true,85,0,2,0,true,false,5,A._GetAutoObject(A.Device.Device).AF);this.A0(276001544582503
,5,1,Ac-2678400,0,0,false,false,false,true,0,0,0,false,0,true,85,0,2,0,true,false
,5,A._GetAutoObject(A.Device.Device).AF);this.A0(276001546216758,5,1,Ac-2764800,
0,0,false,false,false,true,0,0,0,false,0,true,85,0,2,0,true,false,5,A._GetAutoObject(
A.Device.Device).AF);this.A0(276000249254319,5,1,Ac-2505600,0,0,false,false,false
,true,0,0,0,false,0,true,85,0,2,0,true,false,5,A._GetAutoObject(A.Device.Device).
AF);this.A0(276000650106638,5,1,Ac-2764800,0,0,false,false,false,true,0,0,0,false
,0,true,85,0,2,0,true,false,5,A._GetAutoObject(A.Device.Device).AF);this.A0(276001051694678
,5,1,Ac-3024000,0,0,false,false,false,true,0,0,0,false,0,true,85,0,2,0,true,false
,5,A._GetAutoObject(A.Device.Device).AF);this.A0(276001352864356,5,1,Ac-2592000,
0,0,false,false,false,true,0,0,0,false,0,true,85,0,2,0,true,false,5,A._GetAutoObject(
A.Device.Device).AF);this.A0(276000957087895,5,1,Ac-2678400,0,0,false,false,false
,true,0,0,0,false,0,true,85,0,2,0,true,false,5,A._GetAutoObject(A.Device.Device).
AF);this.A0(276000960408431,5,1,Ac-2851200,0,0,false,false,false,true,0,0,0,false
,0,true,85,0,2,0,true,false,5,A._GetAutoObject(A.Device.Device).AF);this.A0(276000360428432
,5,1,Ac-2505600,0,0,false,false,false,true,0,0,0,false,0,true,85,0,2,0,true,false
,5,A._GetAutoObject(A.Device.Device).AF);this.A0(276001661295801,5,1,Ac-2937600,
0,0,false,false,false,true,0,0,0,false,0,true,85,0,2,0,true,false,5,A._GetAutoObject(
A.Device.Device).AF);this.A0(276000862208448,5,1,Ac-2592000,0,0,false,false,false
,true,0,0,0,false,0,true,85,0,2,0,true,false,5,A._GetAutoObject(A.Device.Device).
AF);this.A0(276000362238024,5,1,Ac-2764800,0,0,false,false,false,true,0,0,0,false
,0,true,85,0,2,0,true,false,5,A._GetAutoObject(A.Device.Device).AF);this.A0(276000663021861
,5,1,Ac-2678400,0,0,false,false,false,true,0,0,0,false,0,true,85,0,2,0,true,false
,5,A._GetAutoObject(A.Device.Device).AF);this.A0(276000867048797,5,1,Ac-3024000,
0,0,false,false,false,true,0,0,0,false,0,true,85,0,2,0,true,false,5,A._GetAutoObject(
A.Device.Device).AF);this.A0(276000768244690,5,1,Ac-2851200,0,0,false,false,false
,true,0,0,0,false,0,true,85,0,2,0,true,false,5,A._GetAutoObject(A.Device.Device).
AF);this.A0(276000968296663,5,1,Ac-2505600,0,0,false,false,false,true,0,0,0,false
,0,true,85,0,2,0,true,false,5,A._GetAutoObject(A.Device.Device).AF);this.A0(276000671847138
,5,1,Ac-2678400,0,0,false,false,false,true,0,0,0,false,0,true,85,0,2,0,true,false
,5,A._GetAutoObject(A.Device.Device).AF);this.A0(276001073128650,5,1,Ac-2592000,
0,0,false,false,false,true,0,0,0,false,0,true,85,0,2,0,true,false,5,A._GetAutoObject(
A.Device.Device).AF);this.A0(276000474997742,5,1,Ac-2764800,0,0,false,false,false
,true,0,0,0,false,0,true,85,0,2,0,true,false,5,A._GetAutoObject(A.Device.Device).
AF);this.A0(276000187530696,5,1,Ac-2678400,0,0,false,false,false,true,0,0,0,false
,0,true,85,0,2,0,true,false,5,A._GetAutoObject(A.Device.Device).AF);this.A0(276000789548473
,5,1,Ac-3024000,0,0,false,false,false,true,0,0,0,false,0,true,85,0,2,0,true,false
,5,A._GetAutoObject(A.Device.Device).AF);this.A0(276001090861654,5,1,Ac-2764800,
0,0,false,false,false,true,0,0,0,false,0,true,85,0,2,0,true,false,5,A._GetAutoObject(
A.Device.Device).AF);this.A0(276001692014618,5,1,Ac-2851200,0,0,false,false,false
,true,0,0,0,false,0,true,85,0,2,0,true,false,5,A._GetAutoObject(A.Device.Device).
AF);},AJX:function(G){var Ac=A._GetAutoObject(A.Device.Helper).Du();this.AG(Ac-3542400
,276000312342001,0,0,5,5,3,5,84100);this.AG(Ac-3542400,276000312342002,0,0,5,5,3
,5,77500);this.AG(Ac-3542400,276000312342003,0,0,5,5,3,5,79700);this.AG(Ac-3542400
,276000312342004,0,0,5,5,3,5,78900);this.AG(Ac-3542400,276000312342005,0,0,5,5,3
,5,87200);this.AG(Ac-3542400,276000312342006,0,0,5,5,3,5,82400);this.AG(Ac-3542400
,276000312342007,0,0,5,5,3,5,81900);this.AG(Ac-3542400,276000312342008,0,0,5,5,3
,5,80500);this.AG(Ac-3542400,276000312342009,0,0,5,5,3,5,82800);this.AG(Ac-3542400
,276000312342010,0,0,5,5,3,5,82000);this.AG(Ac-3542400,276000312342011,0,0,5,5,3
,5,78400);this.AG(Ac-3542400,276000312342012,0,0,5,5,3,5,80500);this.AG(Ac-3542400
,276000312342013,0,0,5,5,3,5,82600);this.AG(Ac-3542400,276000312342014,0,0,5,5,3
,5,0);this.AG(Ac-3542400,276000312342015,0,0,5,5,3,5,80100);this.AG(Ac-3542400,276000312342016
,0,0,5,5,3,5,81100);this.AG(Ac-3542400,276000312342017,0,0,5,5,3,5,77000);this.AG(
Ac-3542400,276000312342018,0,0,5,5,3,5,80300);this.AG(Ac-3542400,276000312342019
,0,0,5,5,3,5,76500);this.AG(Ac-3542400,276000312342020,0,0,5,5,3,5,80500);this.AG(
Ac-3542400,276000312342021,0,0,5,5,3,5,81500);this.AG(Ac-3542400,276000312342022
,0,0,5,5,3,5,80600);this.AG(Ac-3542400,276000312342023,0,0,5,5,3,5,74400);this.AG(
Ac-3542400,276000312342024,0,0,5,5,3,5,80000);this.AG(Ac-3542400,276000312342025
,0,0,5,5,3,5,74500);this.AG(Ac-3542400,276000312342026,0,0,5,5,3,5,84800);this.AG(
Ac-3542400,276000312342027,0,0,5,5,3,5,88200);this.AG(Ac-3542400,276000312342028
,0,0,5,5,3,5,79000);this.AG(Ac-3542400,276000312342029,0,0,5,5,3,5,82000);this.AG(
Ac-3542400,276000312342030,0,0,5,5,3,5,79500);this.AG(Ac-3542400,276000312342031
,0,0,5,5,3,5,82600);this.AG(Ac-3542400,276000312342032,0,0,5,5,3,5,86800);this.AG(
Ac-3542400,276000312342033,0,0,5,5,3,5,77000);this.AG(Ac-3542400,276000312342034
,0,0,5,5,3,5,76000);this.AG(Ac-3542400,276000312342035,0,0,5,5,3,5,78100);this.AG(
Ac-3542400,276000312342036,0,0,5,5,3,5,0);this.AG(Ac-3542400,276000312342037,0,0
,5,5,3,5,84700);this.AG(Ac-3542400,276000312342038,0,0,5,5,3,5,85400);this.AG(Ac-
3542400,276000312342039,0,0,5,5,3,5,76500);this.AG(Ac-3542400,276000312342040,0,
0,5,5,3,5,81500);this.AG(Ac-3542400,276000312342041,0,0,5,5,3,5,81100);this.AG(Ac-
3542400,276000312342042,0,0,5,5,3,5,67500);this.AG(Ac-3542400,276000312342043,0,
0,5,5,3,5,80000);this.AG(Ac-3542400,276000312342044,0,0,5,5,3,5,70500);this.AG(Ac-
3542400,276000312342045,0,0,5,5,3,5,74000);this.AG(Ac-3542400,276000312342046,0,
0,5,5,3,5,66000);this.AG(Ac-3542400,276000312342047,0,0,5,5,2,5,69600);this.AG(Ac-
3542400,276000312342048,0,0,5,5,3,5,78500);this.AG(Ac-3542400,276000312342049,0,
0,5,5,3,5,79000);this.AG(Ac-3542400,276000312342050,0,0,5,5,3,5,70100);this.AG(Ac-
3542400,276000312342051,0,0,5,5,3,5,74500);this.AG(Ac-3542400,276000312342052,0,
0,5,5,3,5,80000);this.AG(Ac-3542400,276000312342053,0,0,5,5,3,5,63400);this.AG(Ac-
3542400,276000312342054,0,0,5,5,3,5,69200);this.AG(Ac-3542400,276000312342055,0,
0,5,5,3,5,78400);this.AG(Ac-3542400,276000312342056,0,0,5,5,3,5,69800);this.AG(Ac-
3542400,276000312342057,0,0,5,5,3,5,72700);this.AG(Ac-3542400,276000312342058,0,
0,0,0,0,0,64200);this.AG(Ac-3542400,276000312342059,0,0,5,5,3,5,72000);this.AG(Ac-
3542400,276000312342060,0,0,5,5,3,5,61100);this.AG(Ac,276000312342001,0,0,0,0,0,
0,120500);this.AG(Ac,276000312342002,0,0,0,0,0,0,111500);this.AG(Ac,276000312342003
,0,0,0,0,0,0,110600);this.AG(Ac,276000312342004,0,0,0,0,0,0,106700);this.AG(Ac,276000312342005
,0,0,0,0,0,0,117200);this.AG(Ac,276000312342006,0,0,0,0,0,0,116400);this.AG(Ac,276000312342007
,0,0,0,0,0,0,118900);this.AG(Ac,276000312342008,0,0,0,0,0,0,107000);this.AG(Ac,276000312342009
,0,0,0,0,0,0,122100);this.AG(Ac,276000312342010,0,0,0,0,0,0,94100);this.AG(Ac,276000312342011
,0,0,0,0,0,0,114800);this.AG(Ac,276000312342012,0,0,0,0,0,0,109600);this.AG(Ac,276000312342013
,0,0,0,0,0,0,111000);this.AG(Ac,276000312342015,0,0,0,0,0,0,114700);this.AG(Ac,276000312342016
,0,0,0,0,0,0,100500);this.AG(Ac,276000312342017,0,0,0,0,0,0,116300);this.AG(Ac,276000312342018
,0,0,0,0,0,0,110500);this.AG(Ac,276000312342019,0,0,0,0,0,0,123000);this.AG(Ac,276000312342020
,0,0,0,0,0,0,118600);this.AG(Ac,276000312342021,0,0,0,0,0,0,120300);this.AG(Ac,276000312342022
,0,0,0,0,0,0,109000);this.AG(Ac,276000312342023,0,0,0,0,0,0,104000);this.AG(Ac,276000312342024
,0,0,0,0,0,0,112600);this.AG(Ac,276000312342025,0,0,0,0,0,0,106000);this.AG(Ac,276000312342026
,0,0,0,0,0,0,122000);this.AG(Ac,276000312342027,0,0,0,0,0,0,122000);this.AG(Ac,276000312342028
,0,0,0,0,0,0,122300);this.AG(Ac,276000312342029,0,0,0,0,0,0,117100);this.AG(Ac,276000312342030
,0,0,0,0,0,0,100100);this.AG(Ac,276000312342031,0,0,0,0,0,0,126100);this.AG(Ac,276000312342032
,0,0,0,0,0,0,116800);this.AG(Ac,276000312342033,0,0,0,0,0,0,103200);this.AG(Ac,276000312342034
,0,0,0,0,0,0,109000);this.AG(Ac,276000312342035,0,0,0,0,0,0,128000);this.AG(Ac,276000312342037
,0,0,0,0,0,0,115600);this.AG(Ac,276000312342038,0,0,0,0,0,0,120600);this.AG(Ac,276000312342039
,0,0,0,0,0,0,104400);this.AG(Ac,276000312342040,0,0,0,0,0,0,102300);this.AG(Ac,276000312342041
,0,0,0,0,0,0,114500);this.AG(Ac,276000312342042,0,0,0,0,0,0,99000);this.AG(Ac,276000312342043
,0,0,0,0,0,0,104300);this.AG(Ac,276000312342044,0,0,0,0,0,0,108600);this.AG(Ac,276000312342045
,0,0,0,0,0,0,117200);this.AG(Ac,276000312342046,0,0,0,0,0,0,105000);this.AG(Ac,276000312342047
,0,0,0,0,0,0,108400);this.AG(Ac,276000312342048,0,0,0,0,0,0,117700);this.AG(Ac,276000312342049
,0,0,0,0,0,0,115000);this.AG(Ac,276000312342050,0,0,0,0,0,0,110800);this.AG(Ac,276000312342051
,0,0,0,0,0,0,91300);this.AG(Ac,276000312342052,0,0,0,0,0,0,103600);this.AG(Ac,276000312342053
,0,0,0,0,0,0,104700);this.AG(Ac,276000312342054,0,0,0,0,0,0,101900);this.AG(Ac,276000312342055
,0,0,0,0,0,0,120000);this.AG(Ac,276000312342056,0,0,0,0,0,0,114200);this.AG(Ac,276000312342057
,0,0,0,0,0,0,91800);this.AG(Ac,276000312342058,0,0,0,0,0,0,93100);this.AG(Ac,276000312342059
,0,0,0,0,0,0,102300);this.AG(Ac,276000312342060,0,0,0,0,0,0,100900);this.AG(Ac-9158400
,276000312341005,3910,2,0,0,0,0,0);this.AG(Ac-9072000,276000312341005,3970,2,0,0
,0,0,0);this.AG(Ac-8985600,276000312341005,3900,2,0,0,0,0,0);this.AG(Ac-8899200,
276000312341005,3830,3,0,0,0,0,0);this.AG(Ac-8812800,276000312341005,3810,3,0,0,
0,0,0);this.AG(Ac-6307200,276000312341005,4050,1,0,0,0,0,0);this.AG(Ac-6220800,276000312341005
,3900,2,0,0,0,0,0);this.AG(Ac-6134400,276000312341005,3810,3,0,0,0,0,0);this.AG(
Ac-6048000,276000312341005,3780,3,0,0,0,0,0);this.AG(Ac-5961600,276000312341005,
3820,3,0,0,0,0,0);this.AG(Ac-432000,276000312341005,4000,2,0,0,0,0,0);this.AG(Ac-
86400,276000312341005,4020,2,0,0,0,0,0);this.AG(Ac,276000312341005,3950,2,0,0,0,
0,0);this.AG(Ac-86400,276000312343117,4000,2,0,0,0,0,0);this.AG(Ac-172800,276000312343044
,4030,2,0,0,0,0,0);this.AG(Ac-86400,276000312343044,4100,1,0,0,0,0,0);this.AG(Ac-
259200,276000312343376,4050,1,0,0,0,0,0);this.AG(Ac-172800,276000312343376,3900,
2,0,0,0,0,0);this.AG(Ac-86400,276000312343376,3780,3,0,0,0,0,0);this.AG(Ac-345600
,276000312343204,3910,2,0,0,0,0,0);this.AG(Ac-259200,276000312343204,3980,2,0,0,
0,0,0);this.AG(Ac-172800,276000312343204,4010,2,0,0,0,0,0);this.AG(Ac-86400,276000312343204
,3980,2,0,0,0,0,0);this.AG(Ac-432000,276000312343232,4110,1,0,0,0,0,0);this.AG(Ac-
345600,276000312343232,3910,2,0,0,0,0,0);this.AG(Ac-259200,276000312343232,3940,
2,0,0,0,0,0);this.AG(Ac-172800,276000312343232,3870,3,0,0,0,0,0);this.AG(Ac-86400
,276000312343232,3920,2,0,0,0,0,0);this.AG(Ac-518400,276000312343065,3810,3,0,0,
0,0,0);this.AG(Ac-432000,276000312343065,3870,3,0,0,0,0,0);this.AG(Ac-345600,276000312343065
,4030,2,0,0,0,0,0);this.AG(Ac-259200,276000312343065,3890,3,0,0,0,0,0);this.AG(Ac-
172800,276000312343065,3720,3,0,0,0,0,0);this.AG(Ac-86400,276000312343065,3940,2
,0,0,0,0,0);this.AG(Ac-604800,276000312343420,3830,3,0,0,0,0,0);this.AG(Ac-518400
,276000312343420,3940,2,0,0,0,0,0);this.AG(Ac-432000,276000312343420,3980,2,0,0,
0,0,0);this.AG(Ac-345600,276000312343420,3900,2,0,0,0,0,0);this.AG(Ac-259200,276000312343420
,3650,3,0,0,0,0,0);this.AG(Ac-172800,276000312343420,4110,1,0,0,0,0,0);this.AG(Ac-
86400,276000312343420,3860,3,0,0,0,0,0);this.AG(Ac-691200,276000312343308,3710,3
,0,0,0,0,0);this.AG(Ac-604800,276000312343308,3690,3,0,0,0,0,0);this.AG(Ac-518400
,276000312343308,3810,3,0,0,0,0,0);this.AG(Ac-432000,276000312343308,3770,3,0,0,
0,0,0);this.AG(Ac-345600,276000312343308,3670,3,0,0,0,0,0);this.AG(Ac-259200,276000312343308
,3970,2,0,0,0,0,0);this.AG(Ac-172800,276000312343308,3680,3,0,0,0,0,0);this.AG(Ac-
86400,276000312343308,3710,3,0,0,0,0,0);this.AG(Ac-777600,276000312343409,4090,1
,0,0,0,0,0);this.AG(Ac-691200,276000312343409,3690,3,0,0,0,0,0);this.AG(Ac-604800
,276000312343409,4100,1,0,0,0,0,0);this.AG(Ac-518400,276000312343409,3840,3,0,0,
0,0,0);this.AG(Ac-432000,276000312343409,3660,3,0,0,0,0,0);this.AG(Ac-345600,276000312343409
,3900,2,0,0,0,0,0);this.AG(Ac-259200,276000312343409,3780,3,0,0,0,0,0);this.AG(Ac-
172800,276000312343409,3780,3,0,0,0,0,0);this.AG(Ac-86400,276000312343409,3870,3
,0,0,0,0,0);this.AG(Ac-864000,276000312343007,3850,3,0,0,0,0,0);this.AG(Ac-777600
,276000312343007,3680,3,0,0,0,0,0);this.AG(Ac-691200,276000312343007,4020,2,0,0,
0,0,0);this.AG(Ac-604800,276000312343007,3830,3,0,0,0,0,0);this.AG(Ac-518400,276000312343007
,3670,3,0,0,0,0,0);this.AG(Ac-432000,276000312343007,3910,2,0,0,0,0,0);this.AG(Ac-
345600,276000312343007,4090,1,0,0,0,0,0);this.AG(Ac-259200,276000312343007,3680,
3,0,0,0,0,0);this.AG(Ac-172800,276000312343007,4130,1,0,0,0,0,0);this.AG(Ac-86400
,276000312343007,3730,3,0,0,0,0,0);},AJU:function(G){this.AlF(1,S7);this.AlF(2,UQ
);this.AlF(3,UR);},AJW:function(G){this.Aau(2016,216,11);this.Aau(2017,217,10);this.
Aau(2018,218,9);this.Aau(2019,219,8);this.Aau(2020,220,7);this.Aau(2021,221,6);}
,_Init:function(aArg){var K=this.K;K.__proto__=C.PT;A.h7++;},_Done:function(){var
K=this.K;K.__proto__=null;A.h7--;},_ReInit:function(){},_Mark:function(D){},_variants:
function(){return this;},_className:"DeviceDemonstrator::TableData"};
C._Init=function(){C.DeviceClass.__proto__=A.acs.DeviceClass;};C._ReInit=function(
){var B;if((B=C.Uw._this))B._ReInit(),C.Uw._ReInit.call(B);if((B=C.Ht._this))B._ReInit(
),C.Ht._ReInit.call(B);if((B=C.Aqa._this))B._ReInit(),C.Aqa._ReInit.call(B);if((
B=C.AgI._this))B._ReInit(),C.AgI._ReInit.call(B);};C.DH=function(D){var B;if((B=
C.Uw._this)&&(B._cycle!=D))B._Done(C.Uw._this=null);if((B=C.Ht._this)&&(B._cycle
!=D))B._Done(C.Ht._this=null);if((B=C.Aqa._this)&&(B._cycle!=D))B._Done(C.Aqa._this=
null);if((B=C.AgI._this)&&(B._cycle!=D))B._Done(C.AgI._this=null);};return C;})(
);

/* VitalControl demonstration application, © Urban GmbH & Co.KG 2023 */