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
);if(index.acp)throw new Error("The unit file 'DeviceDemonstrator.js' included twice!"
);index.acp=(function(){var A=index;var C={};
var Ca=[0,0];var BD=[0,0,1000,740];var EW=[200,5,577,745];var Hh=[270,69,510,389];
var I8=[605,30,975,740];var IJ=[25,25,45,41];var OT=[547,610,687,750];var PV=[270
,390];var PW=[350,390];var CM=[350,450];var E4=[270,450];var Lp=[430,390];var PX=[
510,390];var Kq=[510,450];var N6=[430,450];var PY=[360,390];var MC=[420,390];var
SV=[420,450];var UE=[360,450];var ZD=[335,460];var WG=[447,460];var IK=[447,500];
var UF=[335,500];var ZE=[350,512];var WH=[430,512];var ZF=[430,592];var WI=[350,
592];var ZG=[335,605];var ZH=[447,605];var UG=[447,665];var WJ=[335,665];var Q9=[
264,504];var ZI=[344,504];var OU=[344,601];var Q_=[264,601];var WK=[436,504];var
WM=[516,504];var WN=[516,601];var WO=[436,601];var ZJ=[10,130,210,310];var WQ="1";
var WR="2";var SW="3";
C.A3W={BeG:null,Background:null,AbX:null,Akw:null,Agb:null,An:null,Zr:null,SL:null
,Zs:null,Zu:null,Zt:null,WA:null,Zv:null,Wu:null,Wy:null,Wz:null,AaQ:null,Dg:null
,Init:function(aArg){A._GetAutoObject(A.Device.Device).Aro(A._NewObject(A.Device.
Transponder,0));},DriveCursorHitting:function(S0,BF,E6){var AJz=this.AN3();if(!!
AJz){var A1b=AJz.M;A1b=A.abJ(A1b,AJz.Bhu(Ca));if(!A.wa(A1b,E6))this.ABY(AJz);}return A.
Core.Root.DriveCursorHitting.call(this,S0,BF,E6);},Bnf:function(G){var K=this.K;
this.Device.UpdateActiveScreen(3);K.Akw.Ar(false);},Ns:function(G){var K=this.K;
var B;var DW=(A.Core.Bj.isPrototypeOf(G)?G:null);var Aij=0;if(DW===K.Zt)Aij=27;else
if(DW===K.Zs)Aij=26;else if(DW===K.Zu)Aij=28;else if(DW===K.Wy)Aij=6;else if(DW===
K.Wz)Aij=7;else if(DW===K.WA)Aij=4;else if(DW===K.Wu)Aij=5;else if(DW===K.Zv)Aij=
1;if(!!DW){if((DW.Down&&(DW.Jh>0))&&(DW.Jh<400))return;var Bxe=this.AR;this.A8(this.
Gz);this.If().DriveKeyboardHitting(Aij,0x00,DW.Down);this.A8(Bxe);K.SL.H(A.abM(K.
SL.M,DW.HV[0]-((((B=K.SL.M)[2]-B[0])/2)|0)));K.SL.H(A.abO(K.SL.M,DW.HV[1]-((((B=
K.SL.M)[3]-B[1])/2)|0)));K.Zr.Ar(true);}},Ais:function(G){var K=this.K;var B;var
Jr=(A.Core.BK.isPrototypeOf(G)?G:null);if((String.fromCharCode(Jr.DJ).toLowerCase(
).charCodeAt(0)||0)===0x73)A._GetAutoObject(C.K7).BdD(this);else if((String.fromCharCode(
Jr.DJ).toLowerCase().charCodeAt(0)||0)===0x74)A._GetAutoObject(A.Device.Helper).
AKf(this);else if((String.fromCharCode(Jr.DJ).toLowerCase().charCodeAt(0)||0)===
0x64)this.A8(this.Gz);else if((String.fromCharCode(Jr.DJ).toLowerCase().charCodeAt(
0)||0)===0x63)this.A8(K.Agb);else if(Jr.CL===152){if(this.AR===K.Agb)this.A8(this.
Gz);else this.A8(K.Agb);}else if(this.AR===this.Gz){if(Jr.CL===11){this.If().DriveKeyboardHitting(
26,0x00,true);this.If().DriveKeyboardHitting(26,0x00,false);}else if(Jr.CL===12){
this.If().DriveKeyboardHitting(27,0x00,true);this.If().DriveKeyboardHitting(27,0x00
,false);}else if(Jr.CL===13){this.If().DriveKeyboardHitting(28,0x00,true);this.If(
).DriveKeyboardHitting(28,0x00,false);}}},_Init:function(aArg){var K=this.K;A.acg.
An._Init.call(K.Background={I:this},0);A.acg.An._Init.call(K.AbX={I:this},0);A.Core.
Timer._Init.call(K.Akw={I:this},0);A.acw.ATw._Init.call(K.Agb={I:this},0);A.acg.
An._Init.call(K.An={I:this},0);A.acl.AMz._Init.call(K.Zr={I:this},0);A.acg.An._Init.
call(K.SL={I:this},0);A.Core.Bj._Init.call(K.Zs={I:this},0);A.Core.Bj._Init.call(
K.Zu={I:this},0);A.Core.Bj._Init.call(K.Zt={I:this},0);A.Core.Bj._Init.call(K.WA={
I:this},0);A.Core.Bj._Init.call(K.Zv={I:this},0);A.Core.Bj._Init.call(K.Wu={I:this
},0);A.Core.Bj._Init.call(K.Wy={I:this},0);A.Core.Bj._Init.call(K.Wz={I:this},0);
A.acw.AaQ._Init.call(K.AaQ={I:this},0);A.Core.BK._Init.call(K.Dg={I:this},0);K.__proto__=
C.A3W;var B;this.H(BD);K.Background.H(BD);K.AbX.H(EW);this.Gz.H(Hh);K.Akw.PJ(2000
);K.Akw.Ar(true);K.Agb.H(I8);K.An.H(IJ);K.Zr.Aky=true;K.Zr.Wj(9);K.Zr.HG(1);K.Zr.
Fe(300);K.Zr.B0=0xA0FFFFFF;K.Zr.Cs=0x00FFFFFF;K.SL.H(OT);K.SL.L(0x00FFFFFF);K.Zs.
Kg(PV);K.Zs.Kf(PW);K.Zs.DM(CM);K.Zs.DY(E4);K.Zu.Kg(Lp);K.Zu.Kf(PX);K.Zu.DM(Kq);K.
Zu.DY(N6);K.Zt.Kg(PY);K.Zt.Kf(MC);K.Zt.DM(SV);K.Zt.DY(UE);K.WA.Kg(ZD);K.WA.Kf(WG
);K.WA.DM(IK);K.WA.DY(UF);K.Zv.Kg(ZE);K.Zv.Kf(WH);K.Zv.DM(ZF);K.Zv.DY(WI);K.Wu.Kg(
ZG);K.Wu.Kf(ZH);K.Wu.DM(UG);K.Wu.DY(WJ);K.Wy.Kg(Q9);K.Wy.Kf(ZI);K.Wy.DM(OU);K.Wy.
DY(Q_);K.Wz.Kg(WK);K.Wz.Kf(WM);K.Wz.DM(WN);K.Wz.DY(WO);K.AaQ.H(ZJ);this.J(K.Background
,-1);this.J(K.AbX,-1);this.J(K.Agb,0);this.J(K.An,0);this.J(K.SL,0);this.J(K.Zs,
0);this.J(K.Zu,0);this.J(K.Zt,0);this.J(K.WA,0);this.J(K.Zv,0);this.J(K.Wu,0);this.
J(K.Wy,0);this.J(K.Wz,0);this.J(K.AaQ,0);K.Background.Ay(A.aaL(A.acw.Background)
);K.AbX.Ay(A.aaL(A.acx.AbX));K.Akw.Mt=[this,K.Bnf];K.An.Ay(A.aaL(A.acw.AQT));K.Zr.
Q=[B=K.SL,B.BiZ,B.L];K.SL.Ay(A.aaL(A.acx.AQA));K.Zs.Li=[this,K.Ns];K.Zs.BL=[this
,K.Ns];K.Zu.Li=[this,K.Ns];K.Zu.BL=[this,K.Ns];K.Zt.Li=[this,K.Ns];K.Zt.BL=[this
,K.Ns];K.WA.DS=[this,K.Ns];K.WA.Li=[this,K.Ns];K.WA.BL=[this,K.Ns];K.Zv.Li=[this
,K.Ns];K.Zv.BL=[this,K.Ns];K.Wu.DS=[this,K.Ns];K.Wu.Li=[this,K.Ns];K.Wu.BL=[this
,K.Ns];K.Wy.DS=[this,K.Ns];K.Wy.Li=[this,K.Ns];K.Wy.BL=[this,K.Ns];K.Wz.DS=[this
,K.Ns];K.Wz.Li=[this,K.Ns];K.Wz.BL=[this,K.Ns];K.AaQ.AbM([B=A._GetAutoObject(A.Device.
Helper),B.UJ,B.UK]);K.Dg.BL=[this,K.Ais];K.BeG=A._GetAutoObject(A.acr.Ab5);K.Init.
call(this,aArg);A.h7++;},_Done:function(){var K=this.K;K.__proto__=null;K.Background.
_Done();K.AbX._Done();K.Akw._Done();K.Agb._Done();K.An._Done();K.Zr._Done();K.SL.
_Done();K.Zs._Done();K.Zu._Done();K.Zt._Done();K.WA._Done();K.Zv._Done();K.Wu._Done(
);K.Wy._Done();K.Wz._Done();K.AaQ._Done();K.Dg._Done();A.h7--;},_ReInit:function(
){var K=this.K;K.Background._ReInit();K.AbX._ReInit();K.Akw._ReInit();K.Agb._ReInit(
);K.An._ReInit();K.Zr._ReInit();K.SL._ReInit();K.Zs._ReInit();K.Zu._ReInit();K.Zt.
_ReInit();K.WA._ReInit();K.Zv._ReInit();K.Wu._ReInit();K.Wy._ReInit();K.Wz._ReInit(
);K.AaQ._ReInit();K.Dg._ReInit();},_Mark:function(D){var B;if((B=this.BeG)&&(B._cycle
!=D))B._Mark(B._cycle=D);if((B=this.Background)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.AbX)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Akw)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Agb)._cycle!=D)B._Mark(B._cycle=D);if((B=this.An)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Zr)._cycle!=D)B._Mark(B._cycle=D);if((B=this.SL)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.Zs)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Zu
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Zt)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.WA)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Zv)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Wu)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Wy)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Wz)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AaQ)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.Dg)._cycle!=D)B._Mark(B._cycle=D);},_variants:function(
){return this;},_className:"DeviceDemonstrator::ApplicationDemonstration"};C.DeviceClass={
AI6:null,AuT:null,At9:null,Init:function(aArg){var K=this.K;var B;A.zV([this,K.BiK
],this.Ap,0);A.zX([this,K.Bk0],[B=K.AI6,B.A7W,B.A9a],0);A.zX([this,K.Bj4],[B=K.AI6
,B.A7o,B.AR3],0);},Arn:function(E){this.UpdateScanState(E);},Awb:function(E){this.
UpdateMeasureState(E);},Awo:function(E){this.UpdateTempValue(E);},Aw0:function(){
this.UpdateMeasureState(1);this.UpdateTempValue(0);},Ahm:function(){var B;A._GetAutoObject(
A.Device.Helper).SC.Anx(this);this.UpdateMeasureState(0);},Ahj:function(){this.UpdateScanState(
1);},Any:function(){this.UpdateScanState(0);},Aro:function(E){this.UpdateScanTransponder(
E.Id,E.TransponderType,E.TransponderProtocol);if(this.ScanState!==1)return;this.
UpdateScanState(2);},Bk0:function(G){var K=this.K;var Ali=A._GetAutoObject(C.K7).
AFK;if(Ali<0)K.AuT=null;else{K.AuT=A._NewObject(A.Device.Int32FilterCriterion,0);
K.AuT.Initialize(2,0,Ali,true);}A.pe([this,K.Bh],this);},Bj4:function(G){var K=this.
K;var Bex=A._GetAutoObject(C.K7).AA0;if(Bex<=0)K.At9=null;else{K.At9=A._NewObject(
A.Device.Int32FilterCriterion,0);K.At9.Initialize(1,4,Bex,false);}A.pe([this,K.Bh
],this);},Bh:function(G){var K=this.K;var A$=A._GetAutoObject(A.Device.Helper).Mk(
);A$.CY(K.AuT);A$.CY(K.At9);A._GetAutoObject(C.ApO).Bh(A$);},BiK:function(G){var
K=this.K;A.pe([this,K.Bh],this);},_Init:function(aArg){var K=this.K;A.acr.DeviceClass.
_Init.call(this,aArg);K.__proto__=C.DeviceClass;this.PH(4);this.Awk(276034580109999
);K.AI6=A._GetAutoObject(C.K7);K.Init.call(this,aArg);},_Mark:function(D){var B;
A.acr.DeviceClass._Mark.call(this,D);if((B=this.AI6)&&(B._cycle!=D))B._Mark(B._cycle=
D);if((B=this.AuT)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.At9)&&(B._cycle
!=D))B._Mark(B._cycle=D);},_variants:function(){return this;},_className:"DeviceDemonstrator::DeviceClass"
};C.Um={_Init:function(){A.acr.Um._Init.call(this,0);this.ASz(false);this.ASA(false
);},_ReInit:function(){A.acr.Um._ReInit.call(this,0);},_variants:function(){return this;
},_this:null};C.A4U={TransponderId:0,AFK:0,AA0:0,ArV:null,Ar5:3950,AwH:true,A9a:
function(E){if(this.AFK===E)return;this.AFK=E;A.abo([this,this.A7W,this.A9a],0);
},A7W:function(){return this.AFK;},AR3:function(E){if(this.AA0===E)return;this.AA0=
E;A.abo([this,this.A7o,this.AR3],0);},A7o:function(){return this.AA0;},BdD:function(
G){this.AAv(this.TransponderId);},NU:function(E){if(this.TransponderId===E)return;
this.TransponderId=E;A.abo([this,this.Aj3,this.NU],0);},A9b:function(E){if(this.
ArV===E)return;this.ArV=E;A.abo([this,this.A7X,this.A9b],0);},A7X:function(){return this.
ArV;},AAv:function(I_){var B;var Jw=false;if((A._GetAutoObject(A.Device.Device).
ScanState===1)&&!!I_){A._GetAutoObject(A.Device.Device).OJ.ASM(1);A._GetAutoObject(
A.Device.Device).OJ.OnSetId(I_);A._GetAutoObject(A.Device.Device).OJ.ASL(2);A._GetAutoObject(
A.Device.Device).Arn(2);A.abo([B=A._GetAutoObject(A.Device.Device),B.ART,B.AZe],
0);Jw=true;}return Jw;},ASu:function(E){if(this.AwH===E)return;this.AwH=E;A.abo([
this,this.ARQ,this.ASu],0);},A9f:function(E){if(this.Ar5===E)return;this.Ar5=E;A.
abo([this,this.BjD,this.A9f],0);},Bdo:function(G){var B;if(this.AwH)A._GetAutoObject(
A.Device.Helper).AKf(this);else A._GetAutoObject(A.Device.Helper).Bbz(this.Ar5);
},Aj3:function(){return this.TransponderId;},ARQ:function(){return this.AwH;},BjD:
function(){return this.Ar5;},_Init:function(aArg){this.__proto__=C.A4U;this.ArV=
A.acw.ALM;A.h7++;},_Done:function(){this.__proto__=null;A.h7--;},_ReInit:function(
){},_Mark:function(D){var B;if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:
null,_cycle:0,_observers:null,_className:"DeviceDemonstrator::DemonstrationConfigClass"
};C.K7={_Init:function(){C.A4U._Init.call(this,0);},_ReInit:function(){},_variants:
function(){return this;},_this:null};C.ApO={_Init:function(){A.Device.Table._Init.
call(this,0);this.OnSetId(0);},_ReInit:function(){},_variants:function(){return this;
},_this:null};C.A4V={Ahg:A.jV,Delete:function(){this.AEV(A.abV(this.Ahg,this.Ahg.
length-1));},E$:function(AcE){if(!this.Ahg.length&&(AcE===0x30))return;if(this.Ahg.
length<6)this.AEV(this.Ahg+String.fromCharCode(AcE));},AEV:function(E){if(this.Ahg===
E)return;this.Ahg=E;A.abo([this,this.A7U,this.AEV],0);A._GetAutoObject(C.K7).AR3(
A.wz(this.Ahg,-1,10));},A7U:function(){return this.Ahg;},_Init:function(aArg){this.
__proto__=C.A4V;A.h7++;},_Done:function(){this.__proto__=null;A.h7--;},_ReInit:function(
){},_Mark:function(D){var B;if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:
null,_cycle:0,_observers:null,_className:"DeviceDemonstrator::DemonstrationSearchHelperClass"
};C.Agk={_Init:function(){C.A4V._Init.call(this,0);},_ReInit:function(){},_variants:
function(){return this;},_this:null};C.PL={AJd:function(G){var Ad=A._GetAutoObject(
A.Device.Helper).DF();this.Bk(276000312341001,2,1,Ad-1382400,0,1,false,false,false
,true,40800,0,0,false,0,false,1,1,1,0);this.Bk(276000312341002,2,1,Ad-1296000,0,
1,false,false,false,true,38300,0,0,false,0,false,1,1,1,0);this.Bk(276000312341003
,2,1,Ad-1209600,0,1,false,false,false,true,37600,0,0,false,0,false,1,1,1,0);this.
Bk(276000312341004,2,1,Ad-1123200,0,1,false,false,false,true,40600,0,0,false,0,false
,1,1,1,0);this.Bk(276000312341005,2,1,Ad-9504000,0,1,false,false,false,true,36900
,0,0,false,0,false,1,1,1,0);this.Bk(276000312341006,2,1,Ad-950400,0,1,false,false
,false,true,38000,0,0,false,0,false,1,1,1,0);this.Bk(276000312341007,2,1,Ad-864000
,0,1,false,false,false,true,39200,0,0,false,0,false,1,1,1,276000312343007);this.
Bk(276000312341008,2,1,Ad-777600,0,1,false,false,false,true,36500,0,0,false,0,false
,1,1,1,276000312343409);this.Bk(276000312341009,2,1,Ad-691200,0,1,false,false,false
,true,40900,0,0,false,0,false,1,1,1,276000312343308);this.Bk(276000312341010,2,1
,Ad-604800,0,1,false,false,false,true,40900,0,0,false,0,false,1,1,1,276000312343420
);this.Bk(276000312341011,2,1,Ad-518400,0,1,false,false,false,true,39200,0,0,false
,0,false,1,1,1,276000312343065);this.Bk(276000312341012,2,1,Ad-432000,0,1,false,
false,false,true,38100,0,0,false,0,false,1,1,1,276000312343232);this.Bk(276000312341013
,2,1,Ad-345600,0,1,false,false,false,true,37700,0,0,false,0,true,1,1,1,276000312343204
);this.Bk(276000312341014,2,1,Ad-259200,0,1,false,false,false,true,37200,0,0,false
,0,true,1,1,1,276000312343376);this.Bk(276000312341015,2,1,Ad-172800,0,1,false,false
,false,true,37000,0,0,false,0,true,1,1,1,276000312343044);this.Bk(276000312342001
,3,1,Ad-7084800,0,0,false,false,false,true,39500,0,0,false,0,false,1,0,2,0);this.
Bk(276000312342002,3,1,Ad-5788800,0,0,false,false,false,true,38800,0,0,false,0,false
,1,0,2,0);this.Bk(276000312342003,3,1,Ad-7084800,0,0,false,false,false,true,39600
,0,0,false,0,false,1,0,2,0);this.Bk(276000312342004,3,1,Ad-6652800,0,0,false,false
,false,true,37400,0,0,false,0,false,1,0,2,0);this.Bk(276000312342005,3,1,Ad-7084800
,0,0,false,false,false,true,39700,0,0,false,0,false,1,0,2,0);this.Bk(276000312342006
,3,1,Ad-6998400,0,0,false,false,false,true,40900,0,0,false,0,false,1,0,2,0);this.
Bk(276000312342007,3,1,Ad-6739200,0,0,false,false,false,true,38100,0,0,false,0,false
,1,0,2,0);this.Bk(276000312342008,3,1,Ad-7430400,0,0,false,false,false,true,37200
,0,0,false,0,false,1,0,2,0);this.Bk(276000312342009,3,1,Ad-6652800,0,0,false,false
,false,true,37000,0,0,false,0,false,1,0,2,0);this.Bk(276000312342010,3,1,Ad-7776000
,0,0,false,false,false,true,38600,0,0,false,0,false,1,0,2,0);this.Bk(276000312342011
,3,1,Ad-5961600,0,0,false,false,false,true,37900,0,0,false,0,false,1,0,2,0);this.
Bk(276000312342012,3,1,Ad-6393600,0,0,false,false,false,true,36300,0,0,false,0,false
,1,0,2,0);this.Bk(276000312342013,3,1,Ad-7344000,0,0,false,false,false,true,36100
,0,0,false,0,false,1,0,2,0);this.Bk(276000312342014,3,1,Ad-5529600,0,0,false,false
,false,true,37700,0,0,false,0,false,1,0,2,0);this.Bk(276000312342015,3,1,Ad-6307200
,0,0,false,false,false,true,39800,0,0,false,0,false,1,0,2,0);this.Bk(276000312342016
,3,1,Ad-6048000,0,0,false,false,false,true,40300,0,0,false,0,false,1,0,2,0);this.
Bk(276000312342017,3,1,Ad-6134400,0,0,false,false,false,true,38400,0,0,false,0,false
,1,0,2,0);this.Bk(276000312342018,3,1,Ad-6652800,0,0,false,false,false,true,36300
,0,0,false,0,false,1,0,2,0);this.Bk(276000312342019,3,1,Ad-8467200,0,0,false,false
,false,true,38700,0,0,false,0,false,1,0,2,0);this.Bk(276000312342020,3,1,Ad-6998400
,0,0,false,false,false,true,37300,0,0,false,0,false,1,0,2,0);this.Bk(276000312342021
,3,1,Ad-6652800,0,0,false,false,false,true,38500,0,0,false,0,false,1,0,2,0);this.
Bk(276000312342022,3,1,Ad-5788800,0,0,false,false,false,true,37800,0,0,false,0,false
,1,0,2,0);this.Bk(276000312342023,3,1,Ad-6652800,0,0,false,false,false,true,37300
,0,0,false,0,false,1,0,2,0);this.Bk(276000312342024,3,1,Ad-6739200,0,0,false,false
,false,true,37500,0,0,false,0,false,1,0,2,0);this.Bk(276000312342025,3,1,Ad-7171200
,0,0,false,false,false,true,36300,0,0,false,0,false,1,0,2,0);this.Bk(276000312342026
,3,1,Ad-7171200,0,0,false,false,false,true,37800,0,0,false,0,false,1,0,2,0);this.
Bk(276000312342027,3,1,Ad-7689600,0,0,false,false,false,true,37900,0,0,false,0,false
,1,0,2,0);this.Bk(276000312342028,3,1,Ad-8121600,0,0,false,false,false,true,39800
,0,0,false,0,false,1,0,2,0);this.Bk(276000312342029,3,1,Ad-7603200,0,0,false,false
,false,true,36500,0,0,false,0,false,1,0,2,0);this.Bk(276000312342030,3,1,Ad-6393600
,0,0,false,false,false,true,38900,0,0,false,0,false,1,0,2,0);this.Bk(276000312342031
,3,1,Ad-6652800,0,0,false,false,false,true,36700,0,0,false,0,false,1,0,2,0);this.
Bk(276000312342032,3,1,Ad-6739200,0,0,false,false,false,true,37400,0,0,false,0,false
,1,0,2,0);this.Bk(276000312342033,3,1,Ad-6393600,0,0,false,false,false,true,41000
,0,0,false,0,false,1,0,2,0);this.Bk(276000312342034,3,1,Ad-7084800,0,0,false,false
,false,true,40500,0,0,false,0,false,1,0,2,0);this.Bk(276000312342035,3,1,Ad-7171200
,0,0,false,false,false,true,38200,0,0,false,0,false,1,0,2,0);this.Bk(276000312342036
,3,1,Ad-6480000,0,0,false,false,false,true,40000,0,0,false,0,false,1,0,2,0);this.
Bk(276000312342037,3,1,Ad-6652800,0,0,false,false,false,true,40500,0,0,false,0,false
,1,0,2,0);this.Bk(276000312342038,3,1,Ad-7084800,0,0,false,false,false,true,40000
,0,0,false,0,false,1,0,2,0);this.Bk(276000312342039,3,1,Ad-6307200,0,0,false,false
,false,true,38900,0,0,false,0,false,1,0,2,0);this.Bk(276000312342040,3,1,Ad-7430400
,0,0,false,false,false,true,37300,0,0,false,0,false,1,0,2,0);this.Bk(276000312342041
,3,1,Ad-6652800,0,0,false,false,false,true,37000,0,0,false,0,false,1,0,2,0);this.
Bk(276000312342042,3,1,Ad-6825600,0,0,false,false,false,true,40800,0,0,false,0,false
,1,0,2,0);this.Bk(276000312342043,3,1,Ad-7430400,0,0,false,false,false,true,40000
,0,0,false,0,false,1,0,2,0);this.Bk(276000312342044,3,1,Ad-7516800,0,0,false,false
,false,true,40700,0,0,false,0,false,1,0,2,0);this.Bk(276000312342045,3,1,Ad-8121600
,0,0,false,false,false,true,40800,0,0,false,0,false,1,0,2,0);this.Bk(276000312342046
,3,1,Ad-8553600,0,0,false,false,false,true,39300,0,0,false,0,false,1,0,2,0);this.
Bk(276000312342047,3,1,Ad-7171200,0,0,false,false,false,true,39300,0,0,false,0,false
,1,0,2,0);this.Bk(276000312342048,3,1,Ad-6566400,0,0,false,false,false,true,40900
,0,0,false,0,false,1,0,2,0);this.Bk(276000312342049,3,1,Ad-7171200,0,0,false,false
,false,true,40100,0,0,false,0,false,1,0,2,0);this.Bk(276000312342050,3,1,Ad-6998400
,0,0,false,false,false,true,39900,0,0,false,0,false,1,0,2,0);this.Bk(276000312342051
,3,1,Ad-6739200,0,0,false,false,false,true,38200,0,0,false,0,false,1,0,2,0);this.
Bk(276000312342052,3,1,Ad-7603200,0,0,false,false,false,true,36400,0,0,false,0,false
,1,0,2,0);this.Bk(276000312342053,3,1,Ad-7689600,0,0,false,false,false,true,40800
,0,0,false,0,false,1,0,2,0);this.Bk(276000312342054,3,1,Ad-6480000,0,0,false,false
,false,true,36100,0,0,false,0,false,1,0,2,0);this.Bk(276000312342055,3,1,Ad-7948800
,0,0,false,false,false,true,38000,0,0,false,0,false,1,0,2,0);this.Bk(276000312342056
,3,1,Ad-8121600,0,0,false,false,false,true,37800,0,0,false,0,false,1,0,2,0);this.
Bk(276000312342057,3,1,Ad-6566400,0,0,false,false,false,true,38800,0,0,false,0,false
,1,0,2,0);this.Bk(276000312342058,3,1,Ad-7862400,0,0,false,false,false,true,36600
,0,0,false,0,false,1,0,2,0);this.Bk(276000312342059,3,1,Ad-7344000,0,0,false,false
,false,true,39700,0,0,false,0,false,1,0,2,0);this.Bk(276000312342060,3,1,Ad-6998400
,0,0,false,false,false,true,36600,0,0,false,0,false,1,0,2,0);this.Bk(276000312342061
,3,1,Ad-5788800,0,0,false,false,false,true,36600,0,0,false,0,false,1,0,2,0);this.
Bk(276000312342062,3,1,Ad-7257600,0,0,false,false,false,true,36300,0,0,false,0,false
,1,0,2,0);this.Bk(276000312342063,3,1,Ad-5875200,0,0,false,false,false,true,40800
,0,0,false,0,false,1,0,2,0);this.Bk(276000312342064,3,1,Ad-6134400,0,0,false,false
,false,true,37500,0,0,false,0,false,1,0,2,0);this.Bk(276000312342065,3,1,Ad-5788800
,0,0,false,false,false,true,36000,0,0,false,0,false,1,0,2,0);this.Bk(276000312342066
,3,1,Ad-7862400,0,0,false,false,false,true,38400,0,0,false,0,false,1,0,2,0);this.
Bk(276000312342067,3,1,Ad-5270400,0,0,false,false,false,true,36900,0,0,false,0,false
,1,0,2,0);this.Bk(276000312342068,3,1,Ad-7776000,0,0,false,false,false,true,38300
,0,0,false,0,false,1,0,2,0);this.Bk(276000312342069,3,1,Ad-7171200,0,0,false,false
,false,true,40400,0,0,false,0,false,1,0,2,0);this.Bk(276000312342070,3,1,Ad-6048000
,0,0,false,false,false,true,40100,0,0,false,0,false,1,0,2,0);this.Bk(276000312343007
,1,1,Ad-186192000,0,1,false,false,false,true,0,Ad-864000,3,false,1,false,1,0,1,0
);this.Bk(276000312343044,1,1,Ad-118108800,0,1,false,false,false,true,0,Ad-172800
,1,false,1,false,1,0,1,0);this.Bk(276000312343065,1,1,Ad-152150400,0,1,false,false
,false,true,0,Ad-518400,2,false,1,false,1,0,1,0);this.Bk(276000312343117,1,1,Ad-
252806400,0,1,false,false,false,true,0,Ad-86400,5,false,1,false,1,0,1,0);this.Bk(
276000312343204,1,1,Ad-219369600,0,1,false,false,false,true,0,Ad-345600,4,false,
1,false,1,0,1,0);this.Bk(276000312343232,1,1,Ad-152064000,0,1,false,false,false,
true,0,Ad-432000,2,false,1,false,1,0,1,0);this.Bk(276000312343308,1,1,Ad-118627200
,0,1,false,false,false,true,0,Ad-691200,1,false,1,false,1,0,1,0);this.Bk(276000312343376
,1,1,Ad-118195200,0,1,false,false,false,true,0,Ad-259200,1,false,1,false,1,0,1,0
);this.Bk(276000312343409,1,1,Ad-152409600,0,1,false,false,false,true,0,Ad-777600
,2,false,1,false,1,0,1,0);this.Bk(276000312343420,1,1,Ad-253324800,0,1,false,false
,false,true,0,Ad-604800,5,false,1,false,1,0,1,0);this.Bk(276000312343505,4,1,Ad-
145152000,0,1,false,false,false,true,0,Ad-27216000,1,true,1,false,1,0,1,0);this.
Bk(276000312343535,4,1,Ad-215222400,0,1,false,false,false,true,0,Ad-29894400,3,true
,1,false,1,0,1,0);this.Bk(276000312343540,4,1,Ad-179107200,0,1,false,false,false
,true,0,Ad-27475200,2,true,1,false,1,0,1,0);this.Bk(276000312343558,4,1,Ad-248659200
,0,1,false,false,false,true,0,Ad-29635200,4,true,1,false,1,0,1,0);this.Bk(276000312343587
,4,1,Ad-179020800,0,1,false,false,false,true,0,Ad-27388800,2,true,1,false,1,0,1,
0);this.Bk(276000312343597,4,1,Ad-146188800,0,1,false,false,false,true,0,Ad-28252800
,1,true,1,false,1,0,1,0);this.Bk(276000312343619,4,1,Ad-181353600,0,1,false,false
,false,true,0,Ad-29721600,2,true,1,false,1,0,1,0);this.Bk(276000312343627,4,1,Ad-
213235200,0,1,false,false,false,true,0,Ad-27907200,3,true,1,false,1,0,1,0);this.
Bk(276000312343721,4,1,Ad-282182400,0,1,false,false,false,true,0,Ad-29462400,5,true
,1,false,1,0,1,0);this.Bk(276000312343892,4,1,Ad-179107200,0,1,false,false,false
,true,0,Ad-27475200,2,true,1,false,1,0,1,0);this.Bk(276000312343899,4,1,Ad-147398400
,0,1,false,false,false,true,0,Ad-29462400,1,true,1,false,1,0,1,0);this.Bk(276000312343913
,4,1,Ad-178416000,0,1,false,false,false,true,0,Ad-26784000,2,true,1,false,1,0,1,
0);this.Bk(276000312343915,4,1,Ad-179712000,0,1,false,false,false,true,0,Ad-28080000
,2,true,1,false,1,0,1,0);this.Bk(276000312343940,4,1,Ad-212025600,0,1,false,false
,false,true,0,Ad-26697600,3,true,1,false,1,0,1,0);this.Bk(276000312343978,4,1,Ad-
246499200,0,1,false,false,false,true,0,Ad-27475200,4,true,1,false,1,0,1,0);},AJf:
function(G){var Ad=A._GetAutoObject(A.Device.Helper).DF();this.AF(Ad-3542400,276000312342001
,0,0,5,5,3,5,84100);this.AF(Ad-3542400,276000312342002,0,0,5,5,3,5,77500);this.AF(
Ad-3542400,276000312342003,0,0,5,5,3,5,79700);this.AF(Ad-3542400,276000312342004
,0,0,5,5,3,5,78900);this.AF(Ad-3542400,276000312342005,0,0,5,5,3,5,87200);this.AF(
Ad-3542400,276000312342006,0,0,5,5,3,5,82400);this.AF(Ad-3542400,276000312342007
,0,0,5,5,3,5,81900);this.AF(Ad-3542400,276000312342008,0,0,5,5,3,5,80500);this.AF(
Ad-3542400,276000312342009,0,0,5,5,3,5,82800);this.AF(Ad-3542400,276000312342010
,0,0,5,5,3,5,82000);this.AF(Ad-3542400,276000312342011,0,0,5,5,3,5,78400);this.AF(
Ad-3542400,276000312342012,0,0,5,5,3,5,80500);this.AF(Ad-3542400,276000312342013
,0,0,5,5,3,5,82600);this.AF(Ad-3542400,276000312342014,0,0,5,5,3,5,0);this.AF(Ad-
3542400,276000312342015,0,0,5,5,3,5,80100);this.AF(Ad-3542400,276000312342016,0,
0,5,5,3,5,81100);this.AF(Ad-3542400,276000312342017,0,0,5,5,3,5,77000);this.AF(Ad-
3542400,276000312342018,0,0,5,5,3,5,80300);this.AF(Ad-3542400,276000312342019,0,
0,5,5,3,5,76500);this.AF(Ad-3542400,276000312342020,0,0,5,5,3,5,80500);this.AF(Ad-
3542400,276000312342021,0,0,5,5,3,5,81500);this.AF(Ad-3542400,276000312342022,0,
0,5,5,3,5,80600);this.AF(Ad-3542400,276000312342023,0,0,5,5,3,5,74400);this.AF(Ad-
3542400,276000312342024,0,0,5,5,3,5,80000);this.AF(Ad-3542400,276000312342025,0,
0,5,5,3,5,74500);this.AF(Ad-3542400,276000312342026,0,0,5,5,3,5,84800);this.AF(Ad-
3542400,276000312342027,0,0,5,5,3,5,88200);this.AF(Ad-3542400,276000312342028,0,
0,5,5,3,5,79000);this.AF(Ad-3542400,276000312342029,0,0,5,5,3,5,82000);this.AF(Ad-
3542400,276000312342030,0,0,5,5,3,5,79500);this.AF(Ad-3542400,276000312342031,0,
0,5,5,3,5,82600);this.AF(Ad-3542400,276000312342032,0,0,5,5,3,5,86800);this.AF(Ad-
3542400,276000312342033,0,0,5,5,3,5,77000);this.AF(Ad-3542400,276000312342034,0,
0,5,5,3,5,76000);this.AF(Ad-3542400,276000312342035,0,0,5,5,3,5,78100);this.AF(Ad-
3542400,276000312342036,0,0,5,5,3,5,0);this.AF(Ad-3542400,276000312342037,0,0,5,
5,3,5,84700);this.AF(Ad-3542400,276000312342038,0,0,5,5,3,5,85400);this.AF(Ad-3542400
,276000312342039,0,0,5,5,3,5,76500);this.AF(Ad-3542400,276000312342040,0,0,5,5,3
,5,81500);this.AF(Ad-3542400,276000312342041,0,0,5,5,3,5,81100);this.AF(Ad-3542400
,276000312342042,0,0,5,5,3,5,67500);this.AF(Ad-3542400,276000312342043,0,0,5,5,3
,5,80000);this.AF(Ad-3542400,276000312342044,0,0,5,5,3,5,70500);this.AF(Ad-3542400
,276000312342045,0,0,5,5,3,5,74000);this.AF(Ad-3542400,276000312342046,0,0,5,5,3
,5,66000);this.AF(Ad-3542400,276000312342047,0,0,5,5,2,5,69600);this.AF(Ad-3542400
,276000312342048,0,0,5,5,3,5,78500);this.AF(Ad-3542400,276000312342049,0,0,5,5,3
,5,79000);this.AF(Ad-3542400,276000312342050,0,0,5,5,3,5,70100);this.AF(Ad-3542400
,276000312342051,0,0,5,5,3,5,74500);this.AF(Ad-3542400,276000312342052,0,0,5,5,3
,5,80000);this.AF(Ad-3542400,276000312342053,0,0,5,5,3,5,63400);this.AF(Ad-3542400
,276000312342054,0,0,5,5,3,5,69200);this.AF(Ad-3542400,276000312342055,0,0,5,5,3
,5,78400);this.AF(Ad-3542400,276000312342056,0,0,5,5,3,5,69800);this.AF(Ad-3542400
,276000312342057,0,0,5,5,3,5,72700);this.AF(Ad-3542400,276000312342058,0,0,0,0,0
,0,64200);this.AF(Ad-3542400,276000312342059,0,0,5,5,3,5,72000);this.AF(Ad-3542400
,276000312342060,0,0,5,5,3,5,61100);this.AF(Ad,276000312342001,0,0,0,0,0,0,120500
);this.AF(Ad,276000312342002,0,0,0,0,0,0,111500);this.AF(Ad,276000312342003,0,0,
0,0,0,0,110600);this.AF(Ad,276000312342004,0,0,0,0,0,0,106700);this.AF(Ad,276000312342005
,0,0,0,0,0,0,117200);this.AF(Ad,276000312342006,0,0,0,0,0,0,116400);this.AF(Ad,276000312342007
,0,0,0,0,0,0,118900);this.AF(Ad,276000312342008,0,0,0,0,0,0,107000);this.AF(Ad,276000312342009
,0,0,0,0,0,0,122100);this.AF(Ad,276000312342010,0,0,0,0,0,0,94100);this.AF(Ad,276000312342011
,0,0,0,0,0,0,114800);this.AF(Ad,276000312342012,0,0,0,0,0,0,109600);this.AF(Ad,276000312342013
,0,0,0,0,0,0,111000);this.AF(Ad,276000312342015,0,0,0,0,0,0,114700);this.AF(Ad,276000312342016
,0,0,0,0,0,0,100500);this.AF(Ad,276000312342017,0,0,0,0,0,0,116300);this.AF(Ad,276000312342018
,0,0,0,0,0,0,110500);this.AF(Ad,276000312342019,0,0,0,0,0,0,123000);this.AF(Ad,276000312342020
,0,0,0,0,0,0,118600);this.AF(Ad,276000312342021,0,0,0,0,0,0,120300);this.AF(Ad,276000312342022
,0,0,0,0,0,0,109000);this.AF(Ad,276000312342023,0,0,0,0,0,0,104000);this.AF(Ad,276000312342024
,0,0,0,0,0,0,112600);this.AF(Ad,276000312342025,0,0,0,0,0,0,106000);this.AF(Ad,276000312342026
,0,0,0,0,0,0,122000);this.AF(Ad,276000312342027,0,0,0,0,0,0,122000);this.AF(Ad,276000312342028
,0,0,0,0,0,0,122300);this.AF(Ad,276000312342029,0,0,0,0,0,0,117100);this.AF(Ad,276000312342030
,0,0,0,0,0,0,100100);this.AF(Ad,276000312342031,0,0,0,0,0,0,126100);this.AF(Ad,276000312342032
,0,0,0,0,0,0,116800);this.AF(Ad,276000312342033,0,0,0,0,0,0,103200);this.AF(Ad,276000312342034
,0,0,0,0,0,0,109000);this.AF(Ad,276000312342035,0,0,0,0,0,0,128000);this.AF(Ad,276000312342037
,0,0,0,0,0,0,115600);this.AF(Ad,276000312342038,0,0,0,0,0,0,120600);this.AF(Ad,276000312342039
,0,0,0,0,0,0,104400);this.AF(Ad,276000312342040,0,0,0,0,0,0,102300);this.AF(Ad,276000312342041
,0,0,0,0,0,0,114500);this.AF(Ad,276000312342042,0,0,0,0,0,0,99000);this.AF(Ad,276000312342043
,0,0,0,0,0,0,104300);this.AF(Ad,276000312342044,0,0,0,0,0,0,108600);this.AF(Ad,276000312342045
,0,0,0,0,0,0,117200);this.AF(Ad,276000312342046,0,0,0,0,0,0,105000);this.AF(Ad,276000312342047
,0,0,0,0,0,0,108400);this.AF(Ad,276000312342048,0,0,0,0,0,0,117700);this.AF(Ad,276000312342049
,0,0,0,0,0,0,115000);this.AF(Ad,276000312342050,0,0,0,0,0,0,110800);this.AF(Ad,276000312342051
,0,0,0,0,0,0,91300);this.AF(Ad,276000312342052,0,0,0,0,0,0,103600);this.AF(Ad,276000312342053
,0,0,0,0,0,0,104700);this.AF(Ad,276000312342054,0,0,0,0,0,0,101900);this.AF(Ad,276000312342055
,0,0,0,0,0,0,120000);this.AF(Ad,276000312342056,0,0,0,0,0,0,114200);this.AF(Ad,276000312342057
,0,0,0,0,0,0,91800);this.AF(Ad,276000312342058,0,0,0,0,0,0,93100);this.AF(Ad,276000312342059
,0,0,0,0,0,0,102300);this.AF(Ad,276000312342060,0,0,0,0,0,0,100900);this.AF(Ad-9158400
,276000312341005,3910,2,0,0,0,0,0);this.AF(Ad-9072000,276000312341005,3970,2,0,0
,0,0,0);this.AF(Ad-8985600,276000312341005,3900,2,0,0,0,0,0);this.AF(Ad-8899200,
276000312341005,3830,3,0,0,0,0,0);this.AF(Ad-8812800,276000312341005,3810,3,0,0,
0,0,0);this.AF(Ad-6307200,276000312341005,4050,1,0,0,0,0,0);this.AF(Ad-6220800,276000312341005
,3900,2,0,0,0,0,0);this.AF(Ad-6134400,276000312341005,3810,3,0,0,0,0,0);this.AF(
Ad-6048000,276000312341005,3780,3,0,0,0,0,0);this.AF(Ad-5961600,276000312341005,
3820,3,0,0,0,0,0);this.AF(Ad-432000,276000312341005,4000,2,0,0,0,0,0);this.AF(Ad-
86400,276000312341005,4020,2,0,0,0,0,0);this.AF(Ad,276000312341005,3950,2,0,0,0,
0,0);this.AF(Ad-86400,276000312343117,4000,2,0,0,0,0,0);this.AF(Ad-172800,276000312343044
,4030,2,0,0,0,0,0);this.AF(Ad-86400,276000312343044,4100,1,0,0,0,0,0);this.AF(Ad-
259200,276000312343376,4050,1,0,0,0,0,0);this.AF(Ad-172800,276000312343376,3900,
2,0,0,0,0,0);this.AF(Ad-86400,276000312343376,3780,3,0,0,0,0,0);this.AF(Ad-345600
,276000312343204,3910,2,0,0,0,0,0);this.AF(Ad-259200,276000312343204,3980,2,0,0,
0,0,0);this.AF(Ad-172800,276000312343204,4010,2,0,0,0,0,0);this.AF(Ad-86400,276000312343204
,3980,2,0,0,0,0,0);this.AF(Ad-432000,276000312343232,4110,1,0,0,0,0,0);this.AF(Ad-
345600,276000312343232,3910,2,0,0,0,0,0);this.AF(Ad-259200,276000312343232,3940,
2,0,0,0,0,0);this.AF(Ad-172800,276000312343232,3870,3,0,0,0,0,0);this.AF(Ad-86400
,276000312343232,3920,2,0,0,0,0,0);this.AF(Ad-518400,276000312343065,3810,3,0,0,
0,0,0);this.AF(Ad-432000,276000312343065,3870,3,0,0,0,0,0);this.AF(Ad-345600,276000312343065
,4030,2,0,0,0,0,0);this.AF(Ad-259200,276000312343065,3890,3,0,0,0,0,0);this.AF(Ad-
172800,276000312343065,3720,3,0,0,0,0,0);this.AF(Ad-86400,276000312343065,3940,2
,0,0,0,0,0);this.AF(Ad-604800,276000312343420,3830,3,0,0,0,0,0);this.AF(Ad-518400
,276000312343420,3940,2,0,0,0,0,0);this.AF(Ad-432000,276000312343420,3980,2,0,0,
0,0,0);this.AF(Ad-345600,276000312343420,3900,2,0,0,0,0,0);this.AF(Ad-259200,276000312343420
,3650,3,0,0,0,0,0);this.AF(Ad-172800,276000312343420,4110,1,0,0,0,0,0);this.AF(Ad-
86400,276000312343420,3860,3,0,0,0,0,0);this.AF(Ad-691200,276000312343308,3710,3
,0,0,0,0,0);this.AF(Ad-604800,276000312343308,3690,3,0,0,0,0,0);this.AF(Ad-518400
,276000312343308,3810,3,0,0,0,0,0);this.AF(Ad-432000,276000312343308,3770,3,0,0,
0,0,0);this.AF(Ad-345600,276000312343308,3670,3,0,0,0,0,0);this.AF(Ad-259200,276000312343308
,3970,2,0,0,0,0,0);this.AF(Ad-172800,276000312343308,3680,3,0,0,0,0,0);this.AF(Ad-
86400,276000312343308,3710,3,0,0,0,0,0);this.AF(Ad-777600,276000312343409,4090,1
,0,0,0,0,0);this.AF(Ad-691200,276000312343409,3690,3,0,0,0,0,0);this.AF(Ad-604800
,276000312343409,4100,1,0,0,0,0,0);this.AF(Ad-518400,276000312343409,3840,3,0,0,
0,0,0);this.AF(Ad-432000,276000312343409,3660,3,0,0,0,0,0);this.AF(Ad-345600,276000312343409
,3900,2,0,0,0,0,0);this.AF(Ad-259200,276000312343409,3780,3,0,0,0,0,0);this.AF(Ad-
172800,276000312343409,3780,3,0,0,0,0,0);this.AF(Ad-86400,276000312343409,3870,3
,0,0,0,0,0);this.AF(Ad-864000,276000312343007,3850,3,0,0,0,0,0);this.AF(Ad-777600
,276000312343007,3680,3,0,0,0,0,0);this.AF(Ad-691200,276000312343007,4020,2,0,0,
0,0,0);this.AF(Ad-604800,276000312343007,3830,3,0,0,0,0,0);this.AF(Ad-518400,276000312343007
,3670,3,0,0,0,0,0);this.AF(Ad-432000,276000312343007,3910,2,0,0,0,0,0);this.AF(Ad-
345600,276000312343007,4090,1,0,0,0,0,0);this.AF(Ad-259200,276000312343007,3680,
3,0,0,0,0,0);this.AF(Ad-172800,276000312343007,4130,1,0,0,0,0,0);this.AF(Ad-86400
,276000312343007,3730,3,0,0,0,0,0);},AJc:function(G){this.Alk(1,WQ);this.Alk(2,WR
);this.Alk(3,SW);},AJe:function(G){this.Aaa(2016,216,11);this.Aaa(2017,217,10);this.
Aaa(2018,218,9);this.Aaa(2019,219,8);this.Aaa(2020,220,7);this.Aaa(2021,221,6);}
,_Init:function(aArg){var K=this.K;K.__proto__=C.PL;A.h7++;},_Done:function(){var
K=this.K;K.__proto__=null;A.h7--;},_ReInit:function(){},_Mark:function(D){},_variants:
function(){return this;},_className:"DeviceDemonstrator::TableData"};
C._Init=function(){C.DeviceClass.__proto__=A.acr.DeviceClass;};C._ReInit=function(
){var B;if((B=C.Um._this))B._ReInit(),C.Um._ReInit.call(B);if((B=C.K7._this))B._ReInit(
),C.K7._ReInit.call(B);if((B=C.ApO._this))B._ReInit(),C.ApO._ReInit.call(B);if((
B=C.Agk._this))B._ReInit(),C.Agk._ReInit.call(B);};C.Dz=function(D){var B;if((B=
C.Um._this)&&(B._cycle!=D))B._Done(C.Um._this=null);if((B=C.K7._this)&&(B._cycle
!=D))B._Done(C.K7._this=null);if((B=C.ApO._this)&&(B._cycle!=D))B._Done(C.ApO._this=
null);if((B=C.Agk._this)&&(B._cycle!=D))B._Done(C.Agk._this=null);};return C;})(
);

/* VitalControl demonstration application, © Urban GmbH & Co.KG 2023 */