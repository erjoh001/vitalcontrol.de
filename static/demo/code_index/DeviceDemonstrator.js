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
var Cc=[0,0];var BF=[0,0,1000,740];var EZ=[200,5,577,745];var Hj=[270,69,510,389];
var I$=[605,30,975,740];var Io=[25,25,45,41];var OZ=[547,610,687,750];var P0=[270
,390];var P1=[350,390];var CO=[350,450];var E8=[270,450];var Lt=[430,390];var P2=[
510,390];var JX=[510,450];var N$=[430,450];var P3=[360,390];var MF=[420,390];var
S2=[420,450];var UM=[360,450];var ZU=[335,460];var WT=[447,460];var Ip=[447,500];
var UN=[335,500];var ZV=[350,512];var WU=[430,512];var ZW=[430,592];var WV=[350,
592];var ZX=[335,605];var ZY=[447,605];var UO=[447,665];var WW=[335,665];var Rf=[
264,504];var ZZ=[344,504];var O0=[344,601];var Rg=[264,601];var WX=[436,504];var
WY=[516,504];var WZ=[516,601];var W0=[436,601];var Z0=[10,130,210,310];var W1="%d%m%Y";
var W2="1";var S3="2";var UP="3";
C.A4Q={Bf5:null,Background:null,Ab_:null,AkK:null,Agp:null,Am:null,ZH:null,SS:null
,ZI:null,ZK:null,ZJ:null,WN:null,ZL:null,WG:null,WK:null,WM:null,Aa5:null,Dk:null
,Init:function(aArg){A._GetAutoObject(A.Device.Device).ArO(A._NewObject(A.Device.
Transponder,0));},DriveCursorHitting:function(S6,BG,E_){var AJ7=this.AOC();if(!!
AJ7){var A15=AJ7.M;A15=A.abJ(A15,AJ7.BiV(Cc));if(!A.wa(A15,E_))this.ACt(AJ7);}return A.
Core.Root.DriveCursorHitting.call(this,S6,BG,E_);},BoD:function(G){var K=this.K;
this.Device.UpdateActiveScreen(3);K.AkK.Ar(false);},Nu:function(G){var K=this.K;
var B;var D2=(A.Core.Bn.isPrototypeOf(G)?G:null);var Aiy=0;if(D2===K.ZJ)Aiy=27;else
if(D2===K.ZI)Aiy=26;else if(D2===K.ZK)Aiy=28;else if(D2===K.WK)Aiy=6;else if(D2===
K.WM)Aiy=7;else if(D2===K.WN)Aiy=4;else if(D2===K.WG)Aiy=5;else if(D2===K.ZL)Aiy=
1;if(!!D2){if((D2.Down&&(D2.Jl>0))&&(D2.Jl<400))return;var ByJ=this.AV;this.Bb(this.
GD);this.Ii().DriveKeyboardHitting(Aiy,0x00,D2.Down);this.Bb(ByJ);K.SS.H(A.abM(K.
SS.M,D2.HY[0]-((((B=K.SS.M)[2]-B[0])/2)|0)));K.SS.H(A.abO(K.SS.M,D2.HY[1]-((((B=
K.SS.M)[3]-B[1])/2)|0)));K.ZH.Ar(true);}},AiG:function(G){var K=this.K;var B;var
Jv=(A.Core.BL.isPrototypeOf(G)?G:null);if((String.fromCharCode(Jv.DM).toLowerCase(
).charCodeAt(0)||0)===0x73)A._GetAutoObject(C.Hn).BeV(this);else if((String.fromCharCode(
Jv.DM).toLowerCase().charCodeAt(0)||0)===0x74)A._GetAutoObject(A.Device.Helper).
AKO(this);else if((String.fromCharCode(Jv.DM).toLowerCase().charCodeAt(0)||0)===
0x64)this.Bb(this.GD);else if((String.fromCharCode(Jv.DM).toLowerCase().charCodeAt(
0)||0)===0x63)this.Bb(K.Agp);else if(Jv.CN===152){if(this.AV===K.Agp)this.Bb(this.
GD);else this.Bb(K.Agp);}else if(this.AV===this.GD){if(Jv.CN===11){this.Ii().DriveKeyboardHitting(
26,0x00,true);this.Ii().DriveKeyboardHitting(26,0x00,false);}else if(Jv.CN===12){
this.Ii().DriveKeyboardHitting(27,0x00,true);this.Ii().DriveKeyboardHitting(27,0x00
,false);}else if(Jv.CN===13){this.Ii().DriveKeyboardHitting(28,0x00,true);this.Ii(
).DriveKeyboardHitting(28,0x00,false);}}},_Init:function(aArg){var K=this.K;A.acg.
Am._Init.call(K.Background={I:this},0);A.acg.Am._Init.call(K.Ab_={I:this},0);A.Core.
Timer._Init.call(K.AkK={I:this},0);A.acw.AUh._Init.call(K.Agp={I:this},0);A.acg.
Am._Init.call(K.Am={I:this},0);A.acl.AM8._Init.call(K.ZH={I:this},0);A.acg.Am._Init.
call(K.SS={I:this},0);A.Core.Bn._Init.call(K.ZI={I:this},0);A.Core.Bn._Init.call(
K.ZK={I:this},0);A.Core.Bn._Init.call(K.ZJ={I:this},0);A.Core.Bn._Init.call(K.WN={
I:this},0);A.Core.Bn._Init.call(K.ZL={I:this},0);A.Core.Bn._Init.call(K.WG={I:this
},0);A.Core.Bn._Init.call(K.WK={I:this},0);A.Core.Bn._Init.call(K.WM={I:this},0);
A.acw.Aa5._Init.call(K.Aa5={I:this},0);A.Core.BL._Init.call(K.Dk={I:this},0);K.__proto__=
C.A4Q;var B;this.H(BF);K.Background.H(BF);K.Ab_.H(EZ);this.GD.H(Hj);K.AkK.PO(2000
);K.AkK.Ar(true);K.Agp.H(I$);K.Am.H(Io);K.ZH.AkM=true;K.ZH.Wt(9);K.ZH.HK(1);K.ZH.
Fj(300);K.ZH.B3=0xA0FFFFFF;K.ZH.Cw=0x00FFFFFF;K.SS.H(OZ);K.SS.L(0x00FFFFFF);K.ZI.
JQ(P0);K.ZI.Kn(P1);K.ZI.DE(CO);K.ZI.DR(E8);K.ZK.JQ(Lt);K.ZK.Kn(P2);K.ZK.DE(JX);K.
ZK.DR(N$);K.ZJ.JQ(P3);K.ZJ.Kn(MF);K.ZJ.DE(S2);K.ZJ.DR(UM);K.WN.JQ(ZU);K.WN.Kn(WT
);K.WN.DE(Ip);K.WN.DR(UN);K.ZL.JQ(ZV);K.ZL.Kn(WU);K.ZL.DE(ZW);K.ZL.DR(WV);K.WG.JQ(
ZX);K.WG.Kn(ZY);K.WG.DE(UO);K.WG.DR(WW);K.WK.JQ(Rf);K.WK.Kn(ZZ);K.WK.DE(O0);K.WK.
DR(Rg);K.WM.JQ(WX);K.WM.Kn(WY);K.WM.DE(WZ);K.WM.DR(W0);K.Aa5.H(Z0);this.J(K.Background
,-1);this.J(K.Ab_,-1);this.J(K.Agp,0);this.J(K.Am,0);this.J(K.SS,0);this.J(K.ZI,
0);this.J(K.ZK,0);this.J(K.ZJ,0);this.J(K.WN,0);this.J(K.ZL,0);this.J(K.WG,0);this.
J(K.WK,0);this.J(K.WM,0);this.J(K.Aa5,0);K.Background.Aw(A.aaL(A.acw.Background)
);K.Ab_.Aw(A.aaL(A.acx.Ab_));K.AkK.Mx=[this,K.BoD];K.Am.Aw(A.aaL(A.acw.ARs));K.ZH.
Q=[B=K.SS,B.Bkn,B.L];K.SS.Aw(A.aaL(A.acx.AQ$));K.ZI.Lm=[this,K.Nu];K.ZI.BM=[this
,K.Nu];K.ZK.Lm=[this,K.Nu];K.ZK.BM=[this,K.Nu];K.ZJ.Lm=[this,K.Nu];K.ZJ.BM=[this
,K.Nu];K.WN.DZ=[this,K.Nu];K.WN.Lm=[this,K.Nu];K.WN.BM=[this,K.Nu];K.ZL.Lm=[this
,K.Nu];K.ZL.BM=[this,K.Nu];K.WG.DZ=[this,K.Nu];K.WG.Lm=[this,K.Nu];K.WG.BM=[this
,K.Nu];K.WK.DZ=[this,K.Nu];K.WK.Lm=[this,K.Nu];K.WK.BM=[this,K.Nu];K.WM.DZ=[this
,K.Nu];K.WM.Lm=[this,K.Nu];K.WM.BM=[this,K.Nu];K.Aa5.AbZ([B=A._GetAutoObject(A.Device.
Helper),B.UT,B.UU]);K.Dk.BM=[this,K.AiG];K.Bf5=A._GetAutoObject(A.acs.Ach);K.Init.
call(this,aArg);A.h7++;},_Done:function(){var K=this.K;K.__proto__=null;K.Background.
_Done();K.Ab_._Done();K.AkK._Done();K.Agp._Done();K.Am._Done();K.ZH._Done();K.SS.
_Done();K.ZI._Done();K.ZK._Done();K.ZJ._Done();K.WN._Done();K.ZL._Done();K.WG._Done(
);K.WK._Done();K.WM._Done();K.Aa5._Done();K.Dk._Done();A.h7--;},_ReInit:function(
){var K=this.K;K.Background._ReInit();K.Ab_._ReInit();K.AkK._ReInit();K.Agp._ReInit(
);K.Am._ReInit();K.ZH._ReInit();K.SS._ReInit();K.ZI._ReInit();K.ZK._ReInit();K.ZJ.
_ReInit();K.WN._ReInit();K.ZL._ReInit();K.WG._ReInit();K.WK._ReInit();K.WM._ReInit(
);K.Aa5._ReInit();K.Dk._ReInit();},_Mark:function(D){var B;if((B=this.Bf5)&&(B._cycle
!=D))B._Mark(B._cycle=D);if((B=this.Background)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Ab_)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AkK)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Agp)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Am)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.ZH)._cycle!=D)B._Mark(B._cycle=D);if((B=this.SS)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.ZI)._cycle!=D)B._Mark(B._cycle=D);if((B=this.ZK
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.ZJ)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.WN)._cycle!=D)B._Mark(B._cycle=D);if((B=this.ZL)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.WG)._cycle!=D)B._Mark(B._cycle=D);if((B=this.WK)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.WM)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Aa5)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.Dk)._cycle!=D)B._Mark(B._cycle=D);},_variants:function(
){return this;},_className:"DeviceDemonstrator::ApplicationDemonstration"};C.DeviceClass={
AJC:null,Avi:null,Auy:null,Init:function(aArg){var K=this.K;var B;A.zV([this,K.Bj$
],this.Ao,0);A.zX([this,K.Bmi],[B=K.AJC,B.A83,B.A_n],0);A.zX([this,K.Blt],[B=K.AJC
,B.A8m,B.ASB],0);},ArN:function(E){this.UpdateScanState(E);},AwH:function(E){this.
UpdateMeasureState(E);},AwV:function(E){this.UpdateTempValue(E);},Axs:function(){
this.UpdateMeasureState(1);this.UpdateTempValue(0);},AhA:function(){var B;A._GetAutoObject(
A.Device.Helper).SK.AnQ(this);this.UpdateMeasureState(0);},Ahx:function(){this.UpdateScanState(
1);},AnR:function(){this.UpdateScanState(0);},ArO:function(E){this.UpdateScanTransponder(
E.Id,E.TransponderType,E.TransponderProtocol);if(this.ScanState!==1)return;this.
UpdateScanState(2);},Bmi:function(G){var K=this.K;var AlA=A._GetAutoObject(C.Hn).
AGn;if(AlA<0)K.Avi=null;else{K.Avi=A._NewObject(A.Device.Int32FilterCriterion,0);
K.Avi.Initialize(2,0,AlA,true);}A.pe([this,K.Bl],this);},Blt:function(G){var K=this.
K;var BfU=A._GetAutoObject(C.Hn).ABt;if(BfU<=0)K.Auy=null;else{K.Auy=A._NewObject(
A.Device.Int32FilterCriterion,0);K.Auy.Initialize(1,4,BfU,false);}A.pe([this,K.Bl
],this);},Bl:function(G){var K=this.K;var Be=A._GetAutoObject(A.Device.Helper).Mo(
);Be.CW(K.Avi);Be.CW(K.Auy);A._GetAutoObject(C.Ap9).Bl(Be);},Bj$:function(G){var
K=this.K;A.pe([this,K.Bl],this);},_Init:function(aArg){var K=this.K;A.acs.DeviceClass.
_Init.call(this,aArg);K.__proto__=C.DeviceClass;this.PN(4);this.AwQ(276034580109999
);K.AJC=A._GetAutoObject(C.Hn);K.Init.call(this,aArg);},_Mark:function(D){var B;
A.acs.DeviceClass._Mark.call(this,D);if((B=this.AJC)&&(B._cycle!=D))B._Mark(B._cycle=
D);if((B=this.Avi)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Auy)&&(B._cycle
!=D))B._Mark(B._cycle=D);},_variants:function(){return this;},_className:"DeviceDemonstrator::DeviceClass"
};C.Uv={_Init:function(){A.acs.Uv._Init.call(this,0);this.ATe(false);this.ATf(false
);},_ReInit:function(){A.acs.Uv._ReInit.call(this,0);},_variants:function(){return this;
},_this:null};C.A5P={AGj:0,AGn:0,ABt:0,Asg:null,WF:3950,Ahq:0,Axc:true,A_n:function(
E){if(this.AGn===E)return;this.AGn=E;A.abo([this,this.A83,this.A_n],0);},A83:function(
){return this.AGn;},ASB:function(E){if(this.ABt===E)return;this.ABt=E;A.abo([this
,this.A8m,this.ASB],0);},A8m:function(){return this.ABt;},BeV:function(G){this.Bf4(
this.AGj);},A_l:function(E){if(this.AGj===E)return;this.AGj=E;A.abo([this,this.BkY
,this.A_l],0);},A_o:function(E){if(this.Asg===E)return;this.Asg=E;A.abo([this,this.
A84,this.A_o],0);},A84:function(){return this.Asg;},Bf4:function(Jb){var B;var Ie=
false;if((A._GetAutoObject(A.Device.Device).ScanState===1)&&!!Jb){A._GetAutoObject(
A.Device.Device).OO.ATr(1);A._GetAutoObject(A.Device.Device).OO.OnSetId(Jb);A._GetAutoObject(
A.Device.Device).OO.ATq(2);A._GetAutoObject(A.Device.Device).ArN(2);A.abo([B=A._GetAutoObject(
A.Device.Device),B.ASr,B.AZ5],0);Ie=true;}return Ie;},AS$:function(E){if(this.Axc===
E)return;this.Axc=E;A.abo([this,this.ASo,this.AS$],0);},AFA:function(E){if(this.
WF===E)return;this.WF=E;A.abo([this,this.Bk4,this.AFA],0);},BeG:function(G){var B;
if(this.Axc)A._GetAutoObject(A.Device.Helper).AKO(this);else A._GetAutoObject(A.
Device.Helper).BcN(this.WF);},BBt:function(Bwm){var A09=Bwm.toFixed();var P;for(
P=0;P<A09.length;P++){A.aam().DriveKeyboardHitting(0,A09.charCodeAt(P)||0,true);
A.aam().DriveKeyboardHitting(0,A09.charCodeAt(P)||0,false);}A.aam().DriveKeyboardHitting(
0,0x0D,true);A.aam().DriveKeyboardHitting(0,0x0D,false);return true;},AFt:function(
E){if(this.Ahq===E)return;this.Ahq=E;A.abo([this,this.AEs,this.AFt],0);},BBu:function(
AyL){var Au=A._NewObject(A.Core.Bu,0);Au.Initialize(AyL);var O8=Au.Format(W1);A.
ab5("%s",O8);var P;for(P=0;P<O8.length;P++){A.aam().DriveKeyboardHitting(0,O8.charCodeAt(
P)||0,true);A.aam().DriveKeyboardHitting(0,O8.charCodeAt(P)||0,false);}A.aam().DriveKeyboardHitting(
149,0x00,true);A.aam().DriveKeyboardHitting(149,0x00,false);return true;},BkY:function(
){return this.AGj;},ASo:function(){return this.Axc;},Bk4:function(){return this.
WF;},AEs:function(){return this.Ahq;},_Init:function(aArg){this.__proto__=C.A5P;
this.Asg=A.acw.AMk;A.h7++;},_Done:function(){this.__proto__=null;A.h7--;},_ReInit:
function(){},_Mark:function(D){var B;if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=
D);},I:null,_cycle:0,_observers:null,_className:"DeviceDemonstrator::DemonstrationConfigClass"
};C.Hn={_Init:function(){C.A5P._Init.call(this,0);},_ReInit:function(){},_variants:
function(){return this;},_this:null};C.Ap9={_Init:function(){A.Device.Table._Init.
call(this,0);this.OnSetId(0);},_ReInit:function(){},_variants:function(){return this;
},_this:null};C.A5Q={Ahu:A.jV,Delete:function(){this.AFv(A.abV(this.Ahu,this.Ahu.
length-1));},E2:function(AcQ){if(!this.Ahu.length&&(AcQ===0x30))return;if(this.Ahu.
length<6)this.AFv(this.Ahu+String.fromCharCode(AcQ));},AFv:function(E){if(this.Ahu===
E)return;this.Ahu=E;A.abo([this,this.A81,this.AFv],0);A._GetAutoObject(C.Hn).ASB(
A.wz(this.Ahu,-1,10));},A81:function(){return this.Ahu;},_Init:function(aArg){this.
__proto__=C.A5Q;A.h7++;},_Done:function(){this.__proto__=null;A.h7--;},_ReInit:function(
){},_Mark:function(D){var B;if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:
null,_cycle:0,_observers:null,_className:"DeviceDemonstrator::DemonstrationSearchHelperClass"
};C.Agy={_Init:function(){C.A5Q._Init.call(this,0);},_ReInit:function(){},_variants:
function(){return this;},_this:null};C.PQ={AJL:function(G){var Ac=A._GetAutoObject(
A.Device.Helper).Ds();this.AZ(276000312341001,2,1,Ac-1382400,0,1,false,false,false
,true,40800,0,0,false,0,false,1,1,1,0,true,true,A._GetAutoObject(A.Device.Device
).A0,A._GetAutoObject(A.Device.Device).AF);this.AZ(276000312341002,2,1,Ac-1296000
,0,1,false,false,false,true,38300,0,0,false,0,false,1,1,1,0,true,true,A._GetAutoObject(
A.Device.Device).A0,A._GetAutoObject(A.Device.Device).AF);this.AZ(276000312341003
,2,1,Ac-1209600,0,1,false,false,false,true,37600,0,0,false,0,false,1,1,1,0,true,
true,A._GetAutoObject(A.Device.Device).A0,A._GetAutoObject(A.Device.Device).AF);
this.AZ(276000312341004,2,1,Ac-1123200,0,1,false,false,false,true,40600,0,0,false
,0,false,1,1,1,0,true,true,A._GetAutoObject(A.Device.Device).A0,A._GetAutoObject(
A.Device.Device).AF);this.AZ(276000312341005,2,1,Ac-9504000,0,1,false,false,false
,true,36900,0,0,false,0,false,1,1,1,0,true,true,A._GetAutoObject(A.Device.Device
).A0,A._GetAutoObject(A.Device.Device).AF);this.AZ(276000312341006,2,1,Ac-950400
,0,1,false,false,false,true,38000,0,0,false,0,false,1,1,1,0,true,true,A._GetAutoObject(
A.Device.Device).A0,A._GetAutoObject(A.Device.Device).AF);this.AZ(276000312341007
,2,1,Ac-864000,0,1,false,false,false,true,39200,0,0,false,0,false,1,1,1,276000312343007
,true,true,A._GetAutoObject(A.Device.Device).A0,A._GetAutoObject(A.Device.Device
).AF);this.AZ(276000312341008,2,1,Ac-777600,0,1,false,false,false,true,36500,0,0
,false,0,false,1,1,1,276000312343409,true,true,A._GetAutoObject(A.Device.Device).
A0,A._GetAutoObject(A.Device.Device).AF);this.AZ(276000312341009,2,1,Ac-691200,0
,1,false,false,false,true,40900,0,0,false,0,false,1,1,1,276000312343308,true,true
,A._GetAutoObject(A.Device.Device).A0,A._GetAutoObject(A.Device.Device).AF);this.
AZ(276000312341010,2,1,Ac-604800,0,1,false,false,false,true,40900,0,0,false,0,false
,1,1,1,276000312343420,true,true,A._GetAutoObject(A.Device.Device).A0,A._GetAutoObject(
A.Device.Device).AF);this.AZ(276000312341011,2,1,Ac-518400,0,1,false,false,false
,true,39200,0,0,false,0,false,1,1,1,276000312343065,true,true,A._GetAutoObject(A.
Device.Device).A0,A._GetAutoObject(A.Device.Device).AF);this.AZ(276000312341012,
2,1,Ac-432000,0,1,false,false,false,true,38100,0,0,false,0,false,1,1,1,276000312343232
,true,true,A._GetAutoObject(A.Device.Device).A0,A._GetAutoObject(A.Device.Device
).AF);this.AZ(276000312341013,2,1,Ac-345600,0,1,false,false,false,true,37700,0,0
,false,0,true,1,1,1,276000312343204,true,true,A._GetAutoObject(A.Device.Device).
A0,A._GetAutoObject(A.Device.Device).AF);this.AZ(276000312341014,2,1,Ac-259200,0
,1,false,false,false,true,37200,0,0,false,0,true,1,1,1,276000312343376,true,true
,A._GetAutoObject(A.Device.Device).A0,A._GetAutoObject(A.Device.Device).AF);this.
AZ(276000312341015,2,1,Ac-172800,0,1,false,false,false,true,37000,0,0,false,0,true
,1,1,1,276000312343044,true,true,A._GetAutoObject(A.Device.Device).A0,A._GetAutoObject(
A.Device.Device).AF);this.AZ(276000312342001,3,1,Ac-7084800,0,0,false,false,false
,true,39500,0,0,false,0,false,1,0,2,0,true,true,A._GetAutoObject(A.Device.Device
).A0,A._GetAutoObject(A.Device.Device).AF);this.AZ(276000312342002,3,1,Ac-5788800
,0,0,false,false,false,true,38800,0,0,false,0,false,1,0,2,0,true,true,A._GetAutoObject(
A.Device.Device).A0,A._GetAutoObject(A.Device.Device).AF);this.AZ(276000312342003
,3,1,Ac-7084800,0,0,false,false,false,true,39600,0,0,false,0,false,1,0,2,0,true,
true,A._GetAutoObject(A.Device.Device).A0,A._GetAutoObject(A.Device.Device).AF);
this.AZ(276000312342004,3,1,Ac-6652800,0,0,false,false,false,true,37400,0,0,false
,0,false,1,0,2,0,true,true,A._GetAutoObject(A.Device.Device).A0,A._GetAutoObject(
A.Device.Device).AF);this.AZ(276000312342005,3,1,Ac-7084800,0,0,false,false,false
,true,39700,0,0,false,0,false,1,0,2,0,true,true,A._GetAutoObject(A.Device.Device
).A0,A._GetAutoObject(A.Device.Device).AF);this.AZ(276000312342006,3,1,Ac-6998400
,0,0,false,false,false,true,40900,0,0,false,0,false,1,0,2,0,true,true,A._GetAutoObject(
A.Device.Device).A0,A._GetAutoObject(A.Device.Device).AF);this.AZ(276000312342007
,3,1,Ac-6739200,0,0,false,false,false,true,38100,0,0,false,0,false,1,0,2,0,true,
true,A._GetAutoObject(A.Device.Device).A0,A._GetAutoObject(A.Device.Device).AF);
this.AZ(276000312342008,3,1,Ac-7430400,0,0,false,false,false,true,37200,0,0,false
,0,false,1,0,2,0,true,true,A._GetAutoObject(A.Device.Device).A0,A._GetAutoObject(
A.Device.Device).AF);this.AZ(276000312342009,3,1,Ac-6652800,0,0,false,false,false
,true,37000,0,0,false,0,false,1,0,2,0,true,true,A._GetAutoObject(A.Device.Device
).A0,A._GetAutoObject(A.Device.Device).AF);this.AZ(276000312342010,3,1,Ac-7776000
,0,0,false,false,false,true,38600,0,0,false,0,false,1,0,2,0,true,true,A._GetAutoObject(
A.Device.Device).A0,A._GetAutoObject(A.Device.Device).AF);this.AZ(276000312342011
,3,1,Ac-5961600,0,0,false,false,false,true,37900,0,0,false,0,false,1,0,2,0,true,
true,A._GetAutoObject(A.Device.Device).A0,A._GetAutoObject(A.Device.Device).AF);
this.AZ(276000312342012,3,1,Ac-6393600,0,0,false,false,false,true,36300,0,0,false
,0,false,1,0,2,0,true,true,A._GetAutoObject(A.Device.Device).A0,A._GetAutoObject(
A.Device.Device).AF);this.AZ(276000312342013,3,1,Ac-7344000,0,0,false,false,false
,true,36100,0,0,false,0,false,1,0,2,0,true,true,A._GetAutoObject(A.Device.Device
).A0,A._GetAutoObject(A.Device.Device).AF);this.AZ(276000312342014,3,1,Ac-5529600
,0,0,false,false,false,true,37700,0,0,false,0,false,1,0,2,0,true,true,A._GetAutoObject(
A.Device.Device).A0,A._GetAutoObject(A.Device.Device).AF);this.AZ(276000312342015
,3,1,Ac-6307200,0,0,false,false,false,true,39800,0,0,false,0,false,1,0,2,0,true,
true,A._GetAutoObject(A.Device.Device).A0,A._GetAutoObject(A.Device.Device).AF);
this.AZ(276000312342016,3,1,Ac-6048000,0,0,false,false,false,true,40300,0,0,false
,0,false,1,0,2,0,true,true,A._GetAutoObject(A.Device.Device).A0,A._GetAutoObject(
A.Device.Device).AF);this.AZ(276000312342017,3,1,Ac-6134400,0,0,false,false,false
,true,38400,0,0,false,0,false,1,0,2,0,true,true,A._GetAutoObject(A.Device.Device
).A0,A._GetAutoObject(A.Device.Device).AF);this.AZ(276000312342018,3,1,Ac-6652800
,0,0,false,false,false,true,36300,0,0,false,0,false,1,0,2,0,true,true,A._GetAutoObject(
A.Device.Device).A0,A._GetAutoObject(A.Device.Device).AF);this.AZ(276000312342019
,3,1,Ac-8467200,0,0,false,false,false,true,38700,0,0,false,0,false,1,0,2,0,true,
true,A._GetAutoObject(A.Device.Device).A0,A._GetAutoObject(A.Device.Device).AF);
this.AZ(276000312342020,3,1,Ac-6998400,0,0,false,false,false,true,37300,0,0,false
,0,false,1,0,2,0,true,true,A._GetAutoObject(A.Device.Device).A0,A._GetAutoObject(
A.Device.Device).AF);this.AZ(276000312342021,3,1,Ac-6652800,0,0,false,false,false
,true,38500,0,0,false,0,false,1,0,2,0,true,true,A._GetAutoObject(A.Device.Device
).A0,A._GetAutoObject(A.Device.Device).AF);this.AZ(276000312342022,3,1,Ac-5788800
,0,0,false,false,false,true,37800,0,0,false,0,false,1,0,2,0,true,true,A._GetAutoObject(
A.Device.Device).A0,A._GetAutoObject(A.Device.Device).AF);this.AZ(276000312342023
,3,1,Ac-6652800,0,0,false,false,false,true,37300,0,0,false,0,false,1,0,2,0,true,
true,A._GetAutoObject(A.Device.Device).A0,A._GetAutoObject(A.Device.Device).AF);
this.AZ(276000312342024,3,1,Ac-6739200,0,0,false,false,false,true,37500,0,0,false
,0,false,1,0,2,0,true,true,A._GetAutoObject(A.Device.Device).A0,A._GetAutoObject(
A.Device.Device).AF);this.AZ(276000312342025,3,1,Ac-7171200,0,0,false,false,false
,true,36300,0,0,false,0,false,1,0,2,0,true,true,A._GetAutoObject(A.Device.Device
).A0,A._GetAutoObject(A.Device.Device).AF);this.AZ(276000312342026,3,1,Ac-7171200
,0,0,false,false,false,true,37800,0,0,false,0,false,1,0,2,0,true,true,A._GetAutoObject(
A.Device.Device).A0,A._GetAutoObject(A.Device.Device).AF);this.AZ(276000312342027
,3,1,Ac-7689600,0,0,false,false,false,true,37900,0,0,false,0,false,1,0,2,0,true,
true,A._GetAutoObject(A.Device.Device).A0,A._GetAutoObject(A.Device.Device).AF);
this.AZ(276000312342028,3,1,Ac-8121600,0,0,false,false,false,true,39800,0,0,false
,0,false,1,0,2,0,true,true,A._GetAutoObject(A.Device.Device).A0,A._GetAutoObject(
A.Device.Device).AF);this.AZ(276000312342029,3,1,Ac-7603200,0,0,false,false,false
,true,36500,0,0,false,0,false,1,0,2,0,true,true,A._GetAutoObject(A.Device.Device
).A0,A._GetAutoObject(A.Device.Device).AF);this.AZ(276000312342030,3,1,Ac-6393600
,0,0,false,false,false,true,38900,0,0,false,0,false,1,0,2,0,true,true,A._GetAutoObject(
A.Device.Device).A0,A._GetAutoObject(A.Device.Device).AF);this.AZ(276000312342031
,3,1,Ac-6652800,0,0,false,false,false,true,36700,0,0,false,0,false,1,0,2,0,true,
true,A._GetAutoObject(A.Device.Device).A0,A._GetAutoObject(A.Device.Device).AF);
this.AZ(276000312342032,3,1,Ac-6739200,0,0,false,false,false,true,37400,0,0,false
,0,false,1,0,2,0,true,true,A._GetAutoObject(A.Device.Device).A0,A._GetAutoObject(
A.Device.Device).AF);this.AZ(276000312342033,3,1,Ac-6393600,0,0,false,false,false
,true,41000,0,0,false,0,false,1,0,2,0,true,true,A._GetAutoObject(A.Device.Device
).A0,A._GetAutoObject(A.Device.Device).AF);this.AZ(276000312342034,3,1,Ac-7084800
,0,0,false,false,false,true,40500,0,0,false,0,false,1,0,2,0,true,true,A._GetAutoObject(
A.Device.Device).A0,A._GetAutoObject(A.Device.Device).AF);this.AZ(276000312342035
,3,1,Ac-7171200,0,0,false,false,false,true,38200,0,0,false,0,false,1,0,2,0,true,
true,A._GetAutoObject(A.Device.Device).A0,A._GetAutoObject(A.Device.Device).AF);
this.AZ(276000312342036,3,1,Ac-6480000,0,0,false,false,false,true,40000,0,0,false
,0,false,1,0,2,0,true,true,A._GetAutoObject(A.Device.Device).A0,A._GetAutoObject(
A.Device.Device).AF);this.AZ(276000312342037,3,1,Ac-6652800,0,0,false,false,false
,true,40500,0,0,false,0,false,1,0,2,0,true,true,A._GetAutoObject(A.Device.Device
).A0,A._GetAutoObject(A.Device.Device).AF);this.AZ(276000312342038,3,1,Ac-7084800
,0,0,false,false,false,true,40000,0,0,false,0,false,1,0,2,0,true,true,A._GetAutoObject(
A.Device.Device).A0,A._GetAutoObject(A.Device.Device).AF);this.AZ(276000312342039
,3,1,Ac-6307200,0,0,false,false,false,true,38900,0,0,false,0,false,1,0,2,0,true,
true,A._GetAutoObject(A.Device.Device).A0,A._GetAutoObject(A.Device.Device).AF);
this.AZ(276000312342040,3,1,Ac-7430400,0,0,false,false,false,true,37300,0,0,false
,0,false,1,0,2,0,true,true,A._GetAutoObject(A.Device.Device).A0,A._GetAutoObject(
A.Device.Device).AF);this.AZ(276000312342041,3,1,Ac-6652800,0,0,false,false,false
,true,37000,0,0,false,0,false,1,0,2,0,true,true,A._GetAutoObject(A.Device.Device
).A0,A._GetAutoObject(A.Device.Device).AF);this.AZ(276000312342042,3,1,Ac-6825600
,0,0,false,false,false,true,40800,0,0,false,0,false,1,0,2,0,true,true,A._GetAutoObject(
A.Device.Device).A0,A._GetAutoObject(A.Device.Device).AF);this.AZ(276000312342043
,3,1,Ac-7430400,0,0,false,false,false,true,40000,0,0,false,0,false,1,0,2,0,true,
true,A._GetAutoObject(A.Device.Device).A0,A._GetAutoObject(A.Device.Device).AF);
this.AZ(276000312342044,3,1,Ac-7516800,0,0,false,false,false,true,40700,0,0,false
,0,false,1,0,2,0,true,true,A._GetAutoObject(A.Device.Device).A0,A._GetAutoObject(
A.Device.Device).AF);this.AZ(276000312342045,3,1,Ac-8121600,0,0,false,false,false
,true,40800,0,0,false,0,false,1,0,2,0,true,true,A._GetAutoObject(A.Device.Device
).A0,A._GetAutoObject(A.Device.Device).AF);this.AZ(276000312342046,3,1,Ac-8553600
,0,0,false,false,false,true,39300,0,0,false,0,false,1,0,2,0,true,true,A._GetAutoObject(
A.Device.Device).A0,A._GetAutoObject(A.Device.Device).AF);this.AZ(276000312342047
,3,1,Ac-7171200,0,0,false,false,false,true,39300,0,0,false,0,false,1,0,2,0,true,
true,A._GetAutoObject(A.Device.Device).A0,A._GetAutoObject(A.Device.Device).AF);
this.AZ(276000312342048,3,1,Ac-6566400,0,0,false,false,false,true,40900,0,0,false
,0,false,1,0,2,0,true,true,A._GetAutoObject(A.Device.Device).A0,A._GetAutoObject(
A.Device.Device).AF);this.AZ(276000312342049,3,1,Ac-7171200,0,0,false,false,false
,true,40100,0,0,false,0,false,1,0,2,0,true,true,A._GetAutoObject(A.Device.Device
).A0,A._GetAutoObject(A.Device.Device).AF);this.AZ(276000312342050,3,1,Ac-6998400
,0,0,false,false,false,true,39900,0,0,false,0,false,1,0,2,0,true,true,A._GetAutoObject(
A.Device.Device).A0,A._GetAutoObject(A.Device.Device).AF);this.AZ(276000312342051
,3,1,Ac-6739200,0,0,false,false,false,true,38200,0,0,false,0,false,1,0,2,0,true,
true,A._GetAutoObject(A.Device.Device).A0,A._GetAutoObject(A.Device.Device).AF);
this.AZ(276000312342052,3,1,Ac-7603200,0,0,false,false,false,true,36400,0,0,false
,0,false,1,0,2,0,true,true,A._GetAutoObject(A.Device.Device).A0,A._GetAutoObject(
A.Device.Device).AF);this.AZ(276000312342053,3,1,Ac-7689600,0,0,false,false,false
,true,40800,0,0,false,0,false,1,0,2,0,true,true,A._GetAutoObject(A.Device.Device
).A0,A._GetAutoObject(A.Device.Device).AF);this.AZ(276000312342054,3,1,Ac-6480000
,0,0,false,false,false,true,36100,0,0,false,0,false,1,0,2,0,true,true,A._GetAutoObject(
A.Device.Device).A0,A._GetAutoObject(A.Device.Device).AF);this.AZ(276000312342055
,3,1,Ac-7948800,0,0,false,false,false,true,38000,0,0,false,0,false,1,0,2,0,true,
true,A._GetAutoObject(A.Device.Device).A0,A._GetAutoObject(A.Device.Device).AF);
this.AZ(276000312342056,3,1,Ac-8121600,0,0,false,false,false,true,37800,0,0,false
,0,false,1,0,2,0,true,true,A._GetAutoObject(A.Device.Device).A0,A._GetAutoObject(
A.Device.Device).AF);this.AZ(276000312342057,3,1,Ac-6566400,0,0,false,false,false
,true,38800,0,0,false,0,false,1,0,2,0,true,true,A._GetAutoObject(A.Device.Device
).A0,A._GetAutoObject(A.Device.Device).AF);this.AZ(276000312342058,3,1,Ac-7862400
,0,0,false,false,false,true,36600,0,0,false,0,false,1,0,2,0,true,true,A._GetAutoObject(
A.Device.Device).A0,A._GetAutoObject(A.Device.Device).AF);this.AZ(276000312342059
,3,1,Ac-7344000,0,0,false,false,false,true,39700,0,0,false,0,false,1,0,2,0,true,
true,A._GetAutoObject(A.Device.Device).A0,A._GetAutoObject(A.Device.Device).AF);
this.AZ(276000312342060,3,1,Ac-6998400,0,0,false,false,false,true,36600,0,0,false
,0,false,1,0,2,0,true,true,A._GetAutoObject(A.Device.Device).A0,A._GetAutoObject(
A.Device.Device).AF);this.AZ(276000312342061,3,1,Ac-5788800,0,0,false,false,false
,true,36600,0,0,false,0,false,1,0,2,0,true,true,A._GetAutoObject(A.Device.Device
).A0,A._GetAutoObject(A.Device.Device).AF);this.AZ(276000312342062,3,1,Ac-7257600
,0,0,false,false,false,true,36300,0,0,false,0,false,1,0,2,0,true,true,A._GetAutoObject(
A.Device.Device).A0,A._GetAutoObject(A.Device.Device).AF);this.AZ(276000312342063
,3,1,Ac-5875200,0,0,false,false,false,true,40800,0,0,false,0,false,1,0,2,0,true,
true,A._GetAutoObject(A.Device.Device).A0,A._GetAutoObject(A.Device.Device).AF);
this.AZ(276000312342064,3,1,Ac-6134400,0,0,false,false,false,true,37500,0,0,false
,0,false,1,0,2,0,true,true,A._GetAutoObject(A.Device.Device).A0,A._GetAutoObject(
A.Device.Device).AF);this.AZ(276000312342065,3,1,Ac-5788800,0,0,false,false,false
,true,36000,0,0,false,0,false,1,0,2,0,true,true,A._GetAutoObject(A.Device.Device
).A0,A._GetAutoObject(A.Device.Device).AF);this.AZ(276000312342066,3,1,Ac-7862400
,0,0,false,false,false,true,38400,0,0,false,0,false,1,0,2,0,true,true,A._GetAutoObject(
A.Device.Device).A0,A._GetAutoObject(A.Device.Device).AF);this.AZ(276000312342067
,3,1,Ac-5270400,0,0,false,false,false,true,36900,0,0,false,0,false,1,0,2,0,true,
true,A._GetAutoObject(A.Device.Device).A0,A._GetAutoObject(A.Device.Device).AF);
this.AZ(276000312342068,3,1,Ac-7776000,0,0,false,false,false,true,38300,0,0,false
,0,false,1,0,2,0,true,true,A._GetAutoObject(A.Device.Device).A0,A._GetAutoObject(
A.Device.Device).AF);this.AZ(276000312342069,3,1,Ac-7171200,0,0,false,false,false
,true,40400,0,0,false,0,false,1,0,2,0,true,true,A._GetAutoObject(A.Device.Device
).A0,A._GetAutoObject(A.Device.Device).AF);this.AZ(276000312342070,3,1,Ac-6048000
,0,0,false,false,false,true,40100,0,0,false,0,false,1,0,2,0,true,true,A._GetAutoObject(
A.Device.Device).A0,A._GetAutoObject(A.Device.Device).AF);this.AZ(276000312343007
,1,1,Ac-186192000,0,1,false,false,false,true,0,Ac-864000,3,false,1,false,1,0,1,0
,true,true,A._GetAutoObject(A.Device.Device).A0,A._GetAutoObject(A.Device.Device
).AF);this.AZ(276000312343044,1,1,Ac-118108800,0,1,false,false,false,true,0,Ac-172800
,1,false,1,false,1,0,1,0,true,true,A._GetAutoObject(A.Device.Device).A0,A._GetAutoObject(
A.Device.Device).AF);this.AZ(276000312343065,1,1,Ac-152150400,0,1,false,false,false
,true,0,Ac-518400,2,false,1,false,1,0,1,0,true,true,A._GetAutoObject(A.Device.Device
).A0,A._GetAutoObject(A.Device.Device).AF);this.AZ(276000312343117,1,1,Ac-252806400
,0,1,false,false,false,true,0,Ac-86400,5,false,1,false,1,0,1,0,true,true,A._GetAutoObject(
A.Device.Device).A0,A._GetAutoObject(A.Device.Device).AF);this.AZ(276000312343204
,1,1,Ac-219369600,0,1,false,false,false,true,0,Ac-345600,4,false,1,false,1,0,1,0
,true,true,A._GetAutoObject(A.Device.Device).A0,A._GetAutoObject(A.Device.Device
).AF);this.AZ(276000312343232,1,1,Ac-152064000,0,1,false,false,false,true,0,Ac-432000
,2,false,1,false,1,0,1,0,true,true,A._GetAutoObject(A.Device.Device).A0,A._GetAutoObject(
A.Device.Device).AF);this.AZ(276000312343308,1,1,Ac-118627200,0,1,false,false,false
,true,0,Ac-691200,1,false,1,false,1,0,1,0,true,true,A._GetAutoObject(A.Device.Device
).A0,A._GetAutoObject(A.Device.Device).AF);this.AZ(276000312343376,1,1,Ac-118195200
,0,1,false,false,false,true,0,Ac-259200,1,false,1,false,1,0,1,0,true,true,A._GetAutoObject(
A.Device.Device).A0,A._GetAutoObject(A.Device.Device).AF);this.AZ(276000312343409
,1,1,Ac-152409600,0,1,false,false,false,true,0,Ac-777600,2,false,1,false,1,0,1,0
,true,true,A._GetAutoObject(A.Device.Device).A0,A._GetAutoObject(A.Device.Device
).AF);this.AZ(276000312343420,1,1,Ac-253324800,0,1,false,false,false,true,0,Ac-604800
,5,false,1,false,1,0,1,0,true,true,A._GetAutoObject(A.Device.Device).A0,A._GetAutoObject(
A.Device.Device).AF);this.AZ(276000312343505,4,1,Ac-145152000,0,1,false,false,false
,true,0,Ac-27216000,1,true,1,false,1,0,1,0,true,true,A._GetAutoObject(A.Device.Device
).A0,A._GetAutoObject(A.Device.Device).AF);this.AZ(276000312343535,4,1,Ac-215222400
,0,1,false,false,false,true,0,Ac-29894400,3,true,1,false,1,0,1,0,true,true,A._GetAutoObject(
A.Device.Device).A0,A._GetAutoObject(A.Device.Device).AF);this.AZ(276000312343540
,4,1,Ac-179107200,0,1,false,false,false,true,0,Ac-27475200,2,true,1,false,1,0,1,
0,true,true,A._GetAutoObject(A.Device.Device).A0,A._GetAutoObject(A.Device.Device
).AF);this.AZ(276000312343558,4,1,Ac-248659200,0,1,false,false,false,true,0,Ac-29635200
,4,true,1,false,1,0,1,0,true,true,A._GetAutoObject(A.Device.Device).A0,A._GetAutoObject(
A.Device.Device).AF);this.AZ(276000312343587,4,1,Ac-179020800,0,1,false,false,false
,true,0,Ac-27388800,2,true,1,false,1,0,1,0,true,true,A._GetAutoObject(A.Device.Device
).A0,A._GetAutoObject(A.Device.Device).AF);this.AZ(276000312343597,4,1,Ac-146188800
,0,1,false,false,false,true,0,Ac-28252800,1,true,1,false,1,0,1,0,true,true,A._GetAutoObject(
A.Device.Device).A0,A._GetAutoObject(A.Device.Device).AF);this.AZ(276000312343619
,4,1,Ac-181353600,0,1,false,false,false,true,0,Ac-29721600,2,true,1,false,1,0,1,
0,true,true,A._GetAutoObject(A.Device.Device).A0,A._GetAutoObject(A.Device.Device
).AF);this.AZ(276000312343627,4,1,Ac-213235200,0,1,false,false,false,true,0,Ac-27907200
,3,true,1,false,1,0,1,0,true,true,A._GetAutoObject(A.Device.Device).A0,A._GetAutoObject(
A.Device.Device).AF);this.AZ(276000312343721,4,1,Ac-282182400,0,1,false,false,false
,true,0,Ac-29462400,5,true,1,false,1,0,1,0,true,true,A._GetAutoObject(A.Device.Device
).A0,A._GetAutoObject(A.Device.Device).AF);this.AZ(276000312343892,4,1,Ac-179107200
,0,1,false,false,false,true,0,Ac-27475200,2,true,1,false,1,0,1,0,true,true,A._GetAutoObject(
A.Device.Device).A0,A._GetAutoObject(A.Device.Device).AF);this.AZ(276000312343899
,4,1,Ac-147398400,0,1,false,false,false,true,0,Ac-29462400,1,true,1,false,1,0,1,
0,true,true,A._GetAutoObject(A.Device.Device).A0,A._GetAutoObject(A.Device.Device
).AF);this.AZ(276000312343913,4,1,Ac-178416000,0,1,false,false,false,true,0,Ac-26784000
,2,true,1,false,1,0,1,0,true,true,A._GetAutoObject(A.Device.Device).A0,A._GetAutoObject(
A.Device.Device).AF);this.AZ(276000312343915,4,1,Ac-179712000,0,1,false,false,false
,true,0,Ac-28080000,2,true,1,false,1,0,1,0,true,true,A._GetAutoObject(A.Device.Device
).A0,A._GetAutoObject(A.Device.Device).AF);this.AZ(276000312343940,4,1,Ac-212025600
,0,1,false,false,false,true,0,Ac-26697600,3,true,1,false,1,0,1,0,true,true,A._GetAutoObject(
A.Device.Device).A0,A._GetAutoObject(A.Device.Device).AF);this.AZ(276000312343978
,4,1,Ac-246499200,0,1,false,false,false,true,0,Ac-27475200,4,true,1,false,1,0,1,
0,true,true,A._GetAutoObject(A.Device.Device).A0,A._GetAutoObject(A.Device.Device
).AF);this.AZ(276000313780210,5,1,Ac-2851200,0,0,false,false,false,true,0,0,0,false
,0,true,85,0,2,0,true,false,5,A._GetAutoObject(A.Device.Device).AF);this.AZ(276000314777390
,5,1,Ac-2937600,0,0,false,false,false,true,0,0,0,false,0,true,85,0,2,0,true,false
,5,A._GetAutoObject(A.Device.Device).AF);this.AZ(276000314977845,5,1,Ac-2764800,
0,0,false,false,false,true,0,0,0,false,0,true,85,0,2,0,true,false,5,A._GetAutoObject(
A.Device.Device).AF);this.AZ(276000315140539,5,1,Ac-2678400,0,0,false,false,false
,true,0,0,0,false,0,true,85,0,2,0,true,false,5,A._GetAutoObject(A.Device.Device).
AF);this.AZ(276000315692447,5,1,Ac-3024000,0,0,false,false,false,true,0,0,0,false
,0,true,85,0,2,0,true,false,5,A._GetAutoObject(A.Device.Device).AF);this.AZ(276000316480395
,5,1,Ac-2851200,0,0,false,false,false,true,0,0,0,false,0,true,85,0,2,0,true,false
,5,A._GetAutoObject(A.Device.Device).AF);this.AZ(276000316728887,5,1,Ac-2592000,
0,0,false,false,false,true,0,0,0,false,0,true,85,0,2,0,true,false,5,A._GetAutoObject(
A.Device.Device).AF);this.AZ(276000317235905,5,1,Ac-2678400,0,0,false,false,false
,true,0,0,0,false,0,true,85,0,2,0,true,false,5,A._GetAutoObject(A.Device.Device).
AF);this.AZ(276000318229464,5,1,Ac-2505600,0,0,false,false,false,true,0,0,0,false
,0,true,85,0,2,0,true,false,5,A._GetAutoObject(A.Device.Device).AF);this.AZ(276000321244611
,5,1,Ac-2764800,0,0,false,false,false,true,0,0,0,false,0,true,85,0,2,0,true,false
,5,A._GetAutoObject(A.Device.Device).AF);this.AZ(276000330343809,5,1,Ac-2764800,
0,0,false,false,false,true,0,0,0,false,0,true,85,0,2,0,true,false,5,A._GetAutoObject(
A.Device.Device).AF);this.AZ(276000332086943,5,1,Ac-2592000,0,0,false,false,false
,true,0,0,0,false,0,true,85,0,2,0,true,false,5,A._GetAutoObject(A.Device.Device).
AF);this.AZ(276000334073970,5,1,Ac-2505600,0,0,false,false,false,true,0,0,0,false
,0,true,85,0,2,0,true,false,5,A._GetAutoObject(A.Device.Device).AF);this.AZ(276000338829483
,5,1,Ac-2505600,0,0,false,false,false,true,0,0,0,false,0,true,85,0,2,0,true,false
,5,A._GetAutoObject(A.Device.Device).AF);this.AZ(276000339648313,5,1,Ac-2678400,
0,0,false,false,false,true,0,0,0,false,0,true,85,0,2,0,true,false,5,A._GetAutoObject(
A.Device.Device).AF);this.AZ(276000340765035,5,1,Ac-2851200,0,0,false,false,false
,true,0,0,0,false,0,true,85,0,2,0,true,false,5,A._GetAutoObject(A.Device.Device).
AF);this.AZ(276000342945700,5,1,Ac-2937600,0,0,false,false,false,true,0,0,0,false
,0,true,85,0,2,0,true,false,5,A._GetAutoObject(A.Device.Device).AF);this.AZ(276000344582503
,5,1,Ac-2678400,0,0,false,false,false,true,0,0,0,false,0,true,85,0,2,0,true,false
,5,A._GetAutoObject(A.Device.Device).AF);this.AZ(276000346216758,5,1,Ac-2764800,
0,0,false,false,false,true,0,0,0,false,0,true,85,0,2,0,true,false,5,A._GetAutoObject(
A.Device.Device).AF);this.AZ(276000349254319,5,1,Ac-2505600,0,0,false,false,false
,true,0,0,0,false,0,true,85,0,2,0,true,false,5,A._GetAutoObject(A.Device.Device).
AF);this.AZ(276000350106638,5,1,Ac-2764800,0,0,false,false,false,true,0,0,0,false
,0,true,85,0,2,0,true,false,5,A._GetAutoObject(A.Device.Device).AF);this.AZ(276000351694678
,5,1,Ac-3024000,0,0,false,false,false,true,0,0,0,false,0,true,85,0,2,0,true,false
,5,A._GetAutoObject(A.Device.Device).AF);this.AZ(276000352864356,5,1,Ac-2592000,
0,0,false,false,false,true,0,0,0,false,0,true,85,0,2,0,true,false,5,A._GetAutoObject(
A.Device.Device).AF);this.AZ(276000357087895,5,1,Ac-2678400,0,0,false,false,false
,true,0,0,0,false,0,true,85,0,2,0,true,false,5,A._GetAutoObject(A.Device.Device).
AF);this.AZ(276000360408431,5,1,Ac-2851200,0,0,false,false,false,true,0,0,0,false
,0,true,85,0,2,0,true,false,5,A._GetAutoObject(A.Device.Device).AF);this.AZ(276000360428432
,5,1,Ac-2505600,0,0,false,false,false,true,0,0,0,false,0,true,85,0,2,0,true,false
,5,A._GetAutoObject(A.Device.Device).AF);this.AZ(276000361295801,5,1,Ac-2937600,
0,0,false,false,false,true,0,0,0,false,0,true,85,0,2,0,true,false,5,A._GetAutoObject(
A.Device.Device).AF);this.AZ(276000362208448,5,1,Ac-2592000,0,0,false,false,false
,true,0,0,0,false,0,true,85,0,2,0,true,false,5,A._GetAutoObject(A.Device.Device).
AF);this.AZ(276000362238024,5,1,Ac-2764800,0,0,false,false,false,true,0,0,0,false
,0,true,85,0,2,0,true,false,5,A._GetAutoObject(A.Device.Device).AF);this.AZ(276000363021861
,5,1,Ac-2678400,0,0,false,false,false,true,0,0,0,false,0,true,85,0,2,0,true,false
,5,A._GetAutoObject(A.Device.Device).AF);this.AZ(276000367048797,5,1,Ac-3024000,
0,0,false,false,false,true,0,0,0,false,0,true,85,0,2,0,true,false,5,A._GetAutoObject(
A.Device.Device).AF);this.AZ(276000368244690,5,1,Ac-2851200,0,0,false,false,false
,true,0,0,0,false,0,true,85,0,2,0,true,false,5,A._GetAutoObject(A.Device.Device).
AF);this.AZ(276000368296663,5,1,Ac-2505600,0,0,false,false,false,true,0,0,0,false
,0,true,85,0,2,0,true,false,5,A._GetAutoObject(A.Device.Device).AF);this.AZ(276000371847138
,5,1,Ac-2678400,0,0,false,false,false,true,0,0,0,false,0,true,85,0,2,0,true,false
,5,A._GetAutoObject(A.Device.Device).AF);this.AZ(276000373128650,5,1,Ac-2592000,
0,0,false,false,false,true,0,0,0,false,0,true,85,0,2,0,true,false,5,A._GetAutoObject(
A.Device.Device).AF);this.AZ(276000374997742,5,1,Ac-2764800,0,0,false,false,false
,true,0,0,0,false,0,true,85,0,2,0,true,false,5,A._GetAutoObject(A.Device.Device).
AF);this.AZ(276000387530696,5,1,Ac-2678400,0,0,false,false,false,true,0,0,0,false
,0,true,85,0,2,0,true,false,5,A._GetAutoObject(A.Device.Device).AF);this.AZ(276000389548473
,5,1,Ac-3024000,0,0,false,false,false,true,0,0,0,false,0,true,85,0,2,0,true,false
,5,A._GetAutoObject(A.Device.Device).AF);this.AZ(276000390861654,5,1,Ac-2764800,
0,0,false,false,false,true,0,0,0,false,0,true,85,0,2,0,true,false,5,A._GetAutoObject(
A.Device.Device).AF);this.AZ(276000392014618,5,1,Ac-2851200,0,0,false,false,false
,true,0,0,0,false,0,true,85,0,2,0,true,false,5,A._GetAutoObject(A.Device.Device).
AF);},AJN:function(G){var Ac=A._GetAutoObject(A.Device.Helper).Ds();this.AG(Ac-3542400
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
,276000312343007,3730,3,0,0,0,0,0);},AJK:function(G){this.AlC(1,W2);this.AlC(2,S3
);this.AlC(3,UP);},AJM:function(G){this.Aaq(2016,216,11);this.Aaq(2017,217,10);this.
Aaq(2018,218,9);this.Aaq(2019,219,8);this.Aaq(2020,220,7);this.Aaq(2021,221,6);}
,_Init:function(aArg){var K=this.K;K.__proto__=C.PQ;A.h7++;},_Done:function(){var
K=this.K;K.__proto__=null;A.h7--;},_ReInit:function(){},_Mark:function(D){},_variants:
function(){return this;},_className:"DeviceDemonstrator::TableData"};
C._Init=function(){C.DeviceClass.__proto__=A.acs.DeviceClass;};C._ReInit=function(
){var B;if((B=C.Uv._this))B._ReInit(),C.Uv._ReInit.call(B);if((B=C.Hn._this))B._ReInit(
),C.Hn._ReInit.call(B);if((B=C.Ap9._this))B._ReInit(),C.Ap9._ReInit.call(B);if((
B=C.Agy._this))B._ReInit(),C.Agy._ReInit.call(B);};C.DF=function(D){var B;if((B=
C.Uv._this)&&(B._cycle!=D))B._Done(C.Uv._this=null);if((B=C.Hn._this)&&(B._cycle
!=D))B._Done(C.Hn._this=null);if((B=C.Ap9._this)&&(B._cycle!=D))B._Done(C.Ap9._this=
null);if((B=C.Agy._this)&&(B._cycle!=D))B._Done(C.Agy._this=null);};return C;})(
);

/* VitalControl demonstration application, © Urban GmbH & Co.KG 2023 */