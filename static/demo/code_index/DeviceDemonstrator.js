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
);if(index.aco)throw new Error("The unit file 'DeviceDemonstrator.js' included twice!"
);index.aco=(function(){var A=index;var C={};
var Ce=[0,0];var BD=[0,0,1000,740];var E7=[200,5,577,745];var Hr=[270,69,510,389];
var IW=[605,30,975,740];var It=[25,25,45,41];var O6=[547,610,687,750];var P_=[270
,390];var P$=[350,390];var CR=[350,450];var Ff=[270,450];var L5=[430,390];var Qa=[
510,390];var J7=[510,450];var Od=[430,450];var Qb=[360,390];var ML=[420,390];var
S$=[420,450];var UW=[360,450];var Z6=[335,460];var W9=[447,460];var Iu=[447,500];
var UX=[335,500];var Z7=[350,512];var UY=[430,512];var Z8=[430,592];var W_=[350,
592];var Z9=[335,605];var Z_=[447,605];var UZ=[447,665];var W$=[335,665];var O7=[
264,504];var Z$=[344,504];var Oe=[344,601];var Rn=[264,601];var Xa=[436,504];var
Xb=[516,504];var Ta=[516,601];var Xc=[436,601];var Aaa=[10,130,210,310];var Xd="%d%m%Y";
var Xe="0";var Tb="1";var Tc="2";var Td="3";
C.A5v={BgJ:null,Background:null,Ach:null,AkW:null,AgE:null,Ap:null,ZU:null,S2:null
,ZV:null,ZX:null,ZW:null,W4:null,ZY:null,WY:null,W2:null,W3:null,Abf:null,Do:null
,Init:function(aArg){A._GetAutoObject(A.Device.Device).Ar6(A._NewObject(A.Device.
Transponder,0));},DriveCursorHitting:function(Tg,BF,Fh){var Az4=this.AOW();if(!!
Az4){var A2G=Az4.M;A2G=A.abJ(A2G,Az4.BjL(Ce));if(!A.wa(A2G,Fh)){this.ACO(Az4);Az4.
Cs(0x10,0x0);}}return A.Core.Root.DriveCursorHitting.call(this,Tg,BF,Fh);},BpC:function(
G){var K=this.K;this.Device.UpdateActiveScreen(3);K.AkW.Ar(false);},ND:function(
G){var K=this.K;var B;var D5=(A.Core.Bn.isPrototypeOf(G)?G:null);var AiK=0;if(D5===
K.ZW)AiK=27;else if(D5===K.ZV)AiK=26;else if(D5===K.ZX)AiK=28;else if(D5===K.W2)
AiK=6;else if(D5===K.W3)AiK=7;else if(D5===K.W4)AiK=4;else if(D5===K.WY)AiK=5;else
if(D5===K.ZY)AiK=1;if(!!D5){if((D5.Down&&(D5.Jw>0))&&(D5.Jw<400))return;var BzC=
this.AV;this.Bb(this.GK);this.In().DriveKeyboardHitting(AiK,0x00,D5.Down);this.Bb(
BzC);K.S2.H(A.abM(K.S2.M,D5.H2[0]-((((B=K.S2.M)[2]-B[0])/2)|0)));K.S2.H(A.abO(K.
S2.M,D5.H2[1]-((((B=K.S2.M)[3]-B[1])/2)|0)));K.ZU.Ar(true);}},AiR:function(G){var
K=this.K;var B;var JF=(A.Core.BL.isPrototypeOf(G)?G:null);if((String.fromCharCode(
JF.DQ).toLowerCase().charCodeAt(0)||0)===0x73)A._GetAutoObject(C.G1).Bfy(this);else
if((String.fromCharCode(JF.DQ).toLowerCase().charCodeAt(0)||0)===0x74)A._GetAutoObject(
A.Device.Helper).ALc(this);else if((String.fromCharCode(JF.DQ).toLowerCase().charCodeAt(
0)||0)===0x64)this.Bb(this.GK);else if((String.fromCharCode(JF.DQ).toLowerCase().
charCodeAt(0)||0)===0x63)this.Bb(K.AgE);else if(JF.CP===152){if(this.AV===K.AgE)
this.Bb(this.GK);else this.Bb(K.AgE);}else if(this.AV===this.GK){if(JF.CP===11){
this.In().DriveKeyboardHitting(26,0x00,true);this.In().DriveKeyboardHitting(26,0x00
,false);}else if(JF.CP===12){this.In().DriveKeyboardHitting(27,0x00,true);this.In(
).DriveKeyboardHitting(27,0x00,false);}else if(JF.CP===13){this.In().DriveKeyboardHitting(
28,0x00,true);this.In().DriveKeyboardHitting(28,0x00,false);}}},_Init:function(aArg
){var K=this.K;A.acg.Ap._Init.call(K.Background={I:this},0);A.acg.Ap._Init.call(
K.Ach={I:this},0);A.Core.Timer._Init.call(K.AkW={I:this},0);A.acw.AUN._Init.call(
K.AgE={I:this},0);A.acg.Ap._Init.call(K.Ap={I:this},0);A.acl.ANw._Init.call(K.ZU={
I:this},0);A.acg.Ap._Init.call(K.S2={I:this},0);A.Core.Bn._Init.call(K.ZV={I:this
},0);A.Core.Bn._Init.call(K.ZX={I:this},0);A.Core.Bn._Init.call(K.ZW={I:this},0);
A.Core.Bn._Init.call(K.W4={I:this},0);A.Core.Bn._Init.call(K.ZY={I:this},0);A.Core.
Bn._Init.call(K.WY={I:this},0);A.Core.Bn._Init.call(K.W2={I:this},0);A.Core.Bn._Init.
call(K.W3={I:this},0);A.acw.Abf._Init.call(K.Abf={I:this},0);A.Core.BL._Init.call(
K.Do={I:this},0);K.__proto__=C.A5v;var B;this.H(BD);K.Background.H(BD);K.Ach.H(E7
);this.GK.H(Hr);K.AkW.PV(2000);K.AkW.Ar(true);K.AgE.H(IW);K.Ap.H(It);K.ZU.AkY=true;
K.ZU.WJ(9);K.ZU.HO(1);K.ZU.Fr(300);K.ZU.B3=0xA0FFFFFF;K.ZU.Cx=0x00FFFFFF;K.S2.H(
O6);K.S2.L(0x00FFFFFF);K.ZV.JZ(P_);K.ZV.Ky(P$);K.ZV.DC(CR);K.ZV.DM(Ff);K.ZX.JZ(L5
);K.ZX.Ky(Qa);K.ZX.DC(J7);K.ZX.DM(Od);K.ZW.JZ(Qb);K.ZW.Ky(ML);K.ZW.DC(S$);K.ZW.DM(
UW);K.W4.JZ(Z6);K.W4.Ky(W9);K.W4.DC(Iu);K.W4.DM(UX);K.ZY.JZ(Z7);K.ZY.Ky(UY);K.ZY.
DC(Z8);K.ZY.DM(W_);K.WY.JZ(Z9);K.WY.Ky(Z_);K.WY.DC(UZ);K.WY.DM(W$);K.W2.JZ(O7);K.
W2.Ky(Z$);K.W2.DC(Oe);K.W2.DM(Rn);K.W3.JZ(Xa);K.W3.Ky(Xb);K.W3.DC(Ta);K.W3.DM(Xc
);K.Abf.H(Aaa);this.J(K.Background,-1);this.J(K.Ach,-1);this.J(K.AgE,0);this.J(K.
Ap,0);this.J(K.S2,0);this.J(K.ZV,0);this.J(K.ZX,0);this.J(K.ZW,0);this.J(K.W4,0);
this.J(K.ZY,0);this.J(K.WY,0);this.J(K.W2,0);this.J(K.W3,0);this.J(K.Abf,0);K.Background.
Ax(A.aaL(A.acw.Background));K.Ach.Ax(A.aaL(A.acx.Ach));K.AkW.ME=[this,K.BpC];K.Ap.
Ax(A.aaL(A.acw.AR1));K.ZU.Q=[B=K.S2,B.Blb,B.L];K.S2.Ax(A.aaL(A.acx.ARI));K.ZV.Lq=[
this,K.ND];K.ZV.BM=[this,K.ND];K.ZX.Lq=[this,K.ND];K.ZX.BM=[this,K.ND];K.ZW.Lq=[
this,K.ND];K.ZW.BM=[this,K.ND];K.W4.D1=[this,K.ND];K.W4.Lq=[this,K.ND];K.W4.BM=[
this,K.ND];K.ZY.Lq=[this,K.ND];K.ZY.BM=[this,K.ND];K.WY.D1=[this,K.ND];K.WY.Lq=[
this,K.ND];K.WY.BM=[this,K.ND];K.W2.D1=[this,K.ND];K.W2.Lq=[this,K.ND];K.W2.BM=[
this,K.ND];K.W3.D1=[this,K.ND];K.W3.Lq=[this,K.ND];K.W3.BM=[this,K.ND];K.Abf.Ab7([
B=A._GetAutoObject(A.Device.Helper),B.U4,B.U7]);K.Do.BM=[this,K.AiR];K.BgJ=A._GetAutoObject(
A.acs.Acq);K.Init.call(this,aArg);A.h7++;},_Done:function(){var K=this.K;K.__proto__=
null;K.Background._Done();K.Ach._Done();K.AkW._Done();K.AgE._Done();K.Ap._Done();
K.ZU._Done();K.S2._Done();K.ZV._Done();K.ZX._Done();K.ZW._Done();K.W4._Done();K.
ZY._Done();K.WY._Done();K.W2._Done();K.W3._Done();K.Abf._Done();K.Do._Done();A.h7--;
},_ReInit:function(){var K=this.K;K.Background._ReInit();K.Ach._ReInit();K.AkW._ReInit(
);K.AgE._ReInit();K.Ap._ReInit();K.ZU._ReInit();K.S2._ReInit();K.ZV._ReInit();K.
ZX._ReInit();K.ZW._ReInit();K.W4._ReInit();K.ZY._ReInit();K.WY._ReInit();K.W2._ReInit(
);K.W3._ReInit();K.Abf._ReInit();K.Do._ReInit();},_Mark:function(D){var B;if((B=
this.BgJ)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Background)._cycle!=D)B.
_Mark(B._cycle=D);if((B=this.Ach)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AkW).
_cycle!=D)B._Mark(B._cycle=D);if((B=this.AgE)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Ap)._cycle!=D)B._Mark(B._cycle=D);if((B=this.ZU)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.S2)._cycle!=D)B._Mark(B._cycle=D);if((B=this.ZV)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.ZX)._cycle!=D)B._Mark(B._cycle=D);if((B=this.ZW)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.W4)._cycle!=D)B._Mark(B._cycle=D);if((B=this.ZY
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.WY)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.W2)._cycle!=D)B._Mark(B._cycle=D);if((B=this.W3)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Abf)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Do)._cycle!=D)B._Mark(
B._cycle=D);},_variants:function(){return this;},_className:"DeviceDemonstrator::ApplicationDemonstration"
};C.DeviceClass={AJ2:null,Avz:null,AuQ:null,Init:function(aArg){var K=this.K;var
B;A.zV([this,K.BkY],this.An,0);A.zX([this,K.Bm_],[B=K.AJ2,B.A9r,B.A_P],0);A.zX([
this,K.Bmk],[B=K.AJ2,B.A8L,B.AS$],0);},Ar5:function(E){this.UpdateScanState(E);}
,AwX:function(E){this.UpdateMeasureState(E);},Aw$:function(E){this.UpdateTempValue(
E);},AxK:function(){this.UpdateMeasureState(1);this.UpdateTempValue(0);},AhP:function(
){var B;A._GetAutoObject(A.Device.Helper).SU.An0(this);this.UpdateMeasureState(0
);},AhM:function(){this.UpdateScanState(1);},An1:function(){this.UpdateScanState(
0);},Ar6:function(E){this.UpdateScanTransponder(E.Id,E.TransponderType,E.TransponderProtocol
);if(this.ScanState!==1)return;this.UpdateScanState(2);},Bm_:function(G){var K=this.
K;var AlO=A._GetAutoObject(C.G1).AGI;if(AlO<0)K.Avz=null;else{K.Avz=A._NewObject(
A.Device.Int32FilterCriterion,0);K.Avz.Initialize(2,0,AlO,true);}A.pe([this,K.Bk
],this);},Bmk:function(G){var K=this.K;var Bgx=A._GetAutoObject(C.G1).ABS;if(Bgx<=
0)K.AuQ=null;else{K.AuQ=A._NewObject(A.Device.Int32FilterCriterion,0);K.AuQ.Initialize(
1,4,Bgx,false);}A.pe([this,K.Bk],this);},Bk:function(G){var K=this.K;var Be=A._GetAutoObject(
A.Device.Helper).Mv();Be.CX(K.Avz);Be.CX(K.AuQ);A._GetAutoObject(C.Aqj).Bk(Be);}
,BkY:function(G){var K=this.K;A.pe([this,K.Bk],this);},_Init:function(aArg){var K=
this.K;A.acs.DeviceClass._Init.call(this,aArg);K.__proto__=C.DeviceClass;this.OQ(
4);this.Aw6(276034580109999);K.AJ2=A._GetAutoObject(C.G1);K.Init.call(this,aArg);
},_Mark:function(D){var B;A.acs.DeviceClass._Mark.call(this,D);if((B=this.AJ2)&&(
B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Avz)&&(B._cycle!=D))B._Mark(B._cycle=
D);if((B=this.AuQ)&&(B._cycle!=D))B._Mark(B._cycle=D);},_variants:function(){return this;
},_className:"DeviceDemonstrator::DeviceClass"};C.UF={_Init:function(){A.acs.UF.
_Init.call(this,0);this.ATN(false);this.ATO(false);},_ReInit:function(){A.acs.UF.
_ReInit.call(this,0);},_variants:function(){return this;},_this:null};C.A6i={AGE:
0,AGI:0,ABS:0,AsA:null,WX:3950,AhF:0,Axt:true,A_P:function(E){if(this.AGI===E)return;
this.AGI=E;A.abo([this,this.A9r,this.A_P],0);},A9r:function(){return this.AGI;},
AS$:function(E){if(this.ABS===E)return;this.ABS=E;A.abo([this,this.A8L,this.AS$]
,0);},A8L:function(){return this.ABS;},Bfy:function(G){this.BgI(this.AGE);},A_N:
function(E){if(this.AGE===E)return;this.AGE=E;A.abo([this,this.BlN,this.A_N],0);
},A_Q:function(E){if(this.AsA===E)return;this.AsA=E;A.abo([this,this.A9s,this.A_Q
],0);},A9s:function(){return this.AsA;},BgI:function(Ix){var B;var Ij=false;if((
A._GetAutoObject(A.Device.Device).ScanState===1)&&!!Ix){A._GetAutoObject(A.Device.
Device).OV.AT0(1);A._GetAutoObject(A.Device.Device).OV.OnSetId(Ix);A._GetAutoObject(
A.Device.Device).OV.ATZ(2);A._GetAutoObject(A.Device.Device).Ar5(2);A.abo([B=A._GetAutoObject(
A.Device.Device),B.ASZ,B.A0G],0);Ij=true;}return Ij;},ATI:function(E){if(this.Axt===
E)return;this.Axt=E;A.abo([this,this.ASW,this.ATI],0);},AFW:function(E){if(this.
WX===E)return;this.WX=E;A.abo([this,this.BlT,this.AFW],0);},Bfj:function(G){var B;
if(this.Axt)A._GetAutoObject(A.Device.Helper).ALc(this);else A._GetAutoObject(A.
Device.Helper).Bdp(this.WX);},BCp:function(Bxi){var AtE=Bxi.toFixed();AtE=AtE+A.
_GetAutoObject(A.acj.VH).AC8(AtE).toFixed();var O;for(O=0;O<AtE.length;O++){A.aam(
).DriveKeyboardHitting(0,AtE.charCodeAt(O)||0,true);A.aam().DriveKeyboardHitting(
0,AtE.charCodeAt(O)||0,false);}A.aam().DriveKeyboardHitting(0,0x0D,true);A.aam().
DriveKeyboardHitting(0,0x0D,false);return true;},Ar7:function(E){if(this.AhF===E
)return;this.AhF=E;A.abo([this,this.AEP,this.Ar7],0);},BCq:function(Ay3){var Av=
A._NewObject(A.Core.Bs,0);Av.Initialize(Ay3);var JG=Av.Format(Xd)+Xe;JG=JG+A._GetAutoObject(
A.acj.VH).AC8(JG).toFixed();var O;for(O=0;O<JG.length;O++){A.aam().DriveKeyboardHitting(
0,JG.charCodeAt(O)||0,true);A.aam().DriveKeyboardHitting(0,JG.charCodeAt(O)||0,false
);}A.aam().DriveKeyboardHitting(149,0x00,true);A.aam().DriveKeyboardHitting(149,
0x00,false);return true;},BlN:function(){return this.AGE;},ASW:function(){return this.
Axt;},BlT:function(){return this.WX;},AEP:function(){return this.AhF;},_Init:function(
aArg){this.__proto__=C.A6i;this.AsA=A.acw.AMI;A.h7++;},_Done:function(){this.__proto__=
null;A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((B=this.I)&&(B._cycle
!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:"DeviceDemonstrator::DemonstrationConfigClass"
};C.G1={_Init:function(){C.A6i._Init.call(this,0);},_ReInit:function(){},_variants:
function(){return this;},_this:null};C.Aqj={_Init:function(){A.Device.Table._Init.
call(this,0);this.OnSetId(0);},_ReInit:function(){},_variants:function(){return this;
},_this:null};C.A6j={AhJ:A.jV,Delete:function(){this.AFR(A.abV(this.AhJ,this.AhJ.
length-1));},Ez:function(Ac2){if(!this.AhJ.length&&(Ac2===0x30))return;if(this.AhJ.
length<6)this.AFR(this.AhJ+String.fromCharCode(Ac2));},AFR:function(E){if(this.AhJ===
E)return;this.AhJ=E;A.abo([this,this.A9p,this.AFR],0);A._GetAutoObject(C.G1).AS$(
A.wz(this.AhJ,-1,10));},A9p:function(){return this.AhJ;},_Init:function(aArg){this.
__proto__=C.A6j;A.h7++;},_Done:function(){this.__proto__=null;A.h7--;},_ReInit:function(
){},_Mark:function(D){var B;if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:
null,_cycle:0,_observers:null,_className:"DeviceDemonstrator::DemonstrationSearchHelperClass"
};C.AgO={_Init:function(){C.A6j._Init.call(this,0);},_ReInit:function(){},_variants:
function(){return this;},_this:null};C.PZ={AKa:function(G){var Ac=A._GetAutoObject(
A.Device.Helper).Dv();this.A1(276000312341001,2,1,Ac-1382400,0,1,false,false,false
,true,40800,0,0,false,0,false,1,1,1,0,true,true,A._GetAutoObject(A.Device.Device
).A2,A._GetAutoObject(A.Device.Device).AF);this.A1(276000312341002,2,1,Ac-1296000
,0,1,false,false,false,true,38300,0,0,false,0,false,1,1,1,0,true,true,A._GetAutoObject(
A.Device.Device).A2,A._GetAutoObject(A.Device.Device).AF);this.A1(276000312341003
,2,1,Ac-1209600,0,1,false,false,false,true,37600,0,0,false,0,false,1,1,1,0,true,
true,A._GetAutoObject(A.Device.Device).A2,A._GetAutoObject(A.Device.Device).AF);
this.A1(276000312341004,2,1,Ac-1123200,0,1,false,false,false,true,40600,0,0,false
,0,false,1,1,1,0,true,true,A._GetAutoObject(A.Device.Device).A2,A._GetAutoObject(
A.Device.Device).AF);this.A1(276000312341005,2,1,Ac-9504000,0,1,false,false,false
,true,36900,0,0,false,0,false,1,1,1,0,true,true,A._GetAutoObject(A.Device.Device
).A2,A._GetAutoObject(A.Device.Device).AF);this.A1(276000312341006,2,1,Ac-950400
,0,1,false,false,false,true,38000,0,0,false,0,false,1,1,1,0,true,true,A._GetAutoObject(
A.Device.Device).A2,A._GetAutoObject(A.Device.Device).AF);this.A1(276000312341007
,2,1,Ac-864000,0,1,false,false,false,true,39200,0,0,false,0,false,1,1,1,276000312343007
,true,true,A._GetAutoObject(A.Device.Device).A2,A._GetAutoObject(A.Device.Device
).AF);this.A1(276000312341008,2,1,Ac-777600,0,1,false,false,false,true,36500,0,0
,false,0,false,1,1,1,276000312343409,true,true,A._GetAutoObject(A.Device.Device).
A2,A._GetAutoObject(A.Device.Device).AF);this.A1(276000312341009,2,1,Ac-691200,0
,1,false,false,false,true,40900,0,0,false,0,false,1,1,1,276000312343308,true,true
,A._GetAutoObject(A.Device.Device).A2,A._GetAutoObject(A.Device.Device).AF);this.
A1(276000312341010,2,1,Ac-604800,0,1,false,false,false,true,40900,0,0,false,0,false
,1,1,1,276000312343420,true,true,A._GetAutoObject(A.Device.Device).A2,A._GetAutoObject(
A.Device.Device).AF);this.A1(276000312341011,2,1,Ac-518400,0,1,false,false,false
,true,39200,0,0,false,0,false,1,1,1,276000312343065,true,true,A._GetAutoObject(A.
Device.Device).A2,A._GetAutoObject(A.Device.Device).AF);this.A1(276000312341012,
2,1,Ac-432000,0,1,false,false,false,true,38100,0,0,false,0,false,1,1,1,276000312343232
,true,true,A._GetAutoObject(A.Device.Device).A2,A._GetAutoObject(A.Device.Device
).AF);this.A1(276000312341013,2,1,Ac-345600,0,1,false,false,false,true,37700,0,0
,false,0,true,1,1,1,276000312343204,true,true,A._GetAutoObject(A.Device.Device).
A2,A._GetAutoObject(A.Device.Device).AF);this.A1(276000312341014,2,1,Ac-259200,0
,1,false,false,false,true,37200,0,0,false,0,true,1,1,1,276000312343376,true,true
,A._GetAutoObject(A.Device.Device).A2,A._GetAutoObject(A.Device.Device).AF);this.
A1(276000312341015,2,1,Ac-172800,0,1,false,false,false,true,37000,0,0,false,0,true
,1,1,1,276000312343044,true,true,A._GetAutoObject(A.Device.Device).A2,A._GetAutoObject(
A.Device.Device).AF);this.A1(276000312342001,3,1,Ac-7084800,0,0,false,false,false
,true,39500,0,0,false,0,false,1,0,2,0,true,true,A._GetAutoObject(A.Device.Device
).A2,A._GetAutoObject(A.Device.Device).AF);this.A1(276000312342002,3,1,Ac-5788800
,0,0,false,false,false,true,38800,0,0,false,0,false,1,0,2,0,true,true,A._GetAutoObject(
A.Device.Device).A2,A._GetAutoObject(A.Device.Device).AF);this.A1(276000312342003
,3,1,Ac-7084800,0,0,false,false,false,true,39600,0,0,false,0,false,1,0,2,0,true,
true,A._GetAutoObject(A.Device.Device).A2,A._GetAutoObject(A.Device.Device).AF);
this.A1(276000312342004,3,1,Ac-6652800,0,0,false,false,false,true,37400,0,0,false
,0,false,1,0,2,0,true,true,A._GetAutoObject(A.Device.Device).A2,A._GetAutoObject(
A.Device.Device).AF);this.A1(276000312342005,3,1,Ac-7084800,0,0,false,false,false
,true,39700,0,0,false,0,false,1,0,2,0,true,true,A._GetAutoObject(A.Device.Device
).A2,A._GetAutoObject(A.Device.Device).AF);this.A1(276000312342006,3,1,Ac-6998400
,0,0,false,false,false,true,40900,0,0,false,0,false,1,0,2,0,true,true,A._GetAutoObject(
A.Device.Device).A2,A._GetAutoObject(A.Device.Device).AF);this.A1(276000312342007
,3,1,Ac-6739200,0,0,false,false,false,true,38100,0,0,false,0,false,1,0,2,0,true,
true,A._GetAutoObject(A.Device.Device).A2,A._GetAutoObject(A.Device.Device).AF);
this.A1(276000312342008,3,1,Ac-7430400,0,0,false,false,false,true,37200,0,0,false
,0,false,1,0,2,0,true,true,A._GetAutoObject(A.Device.Device).A2,A._GetAutoObject(
A.Device.Device).AF);this.A1(276000312342009,3,1,Ac-6652800,0,0,false,false,false
,true,37000,0,0,false,0,false,1,0,2,0,true,true,A._GetAutoObject(A.Device.Device
).A2,A._GetAutoObject(A.Device.Device).AF);this.A1(276000312342010,3,1,Ac-7776000
,0,0,false,false,false,true,38600,0,0,false,0,false,1,0,2,0,true,true,A._GetAutoObject(
A.Device.Device).A2,A._GetAutoObject(A.Device.Device).AF);this.A1(276000312342011
,3,1,Ac-5961600,0,0,false,false,false,true,37900,0,0,false,0,false,1,0,2,0,true,
true,A._GetAutoObject(A.Device.Device).A2,A._GetAutoObject(A.Device.Device).AF);
this.A1(276000312342012,3,1,Ac-6393600,0,0,false,false,false,true,36300,0,0,false
,0,false,1,0,2,0,true,true,A._GetAutoObject(A.Device.Device).A2,A._GetAutoObject(
A.Device.Device).AF);this.A1(276000312342013,3,1,Ac-7344000,0,0,false,false,false
,true,36100,0,0,false,0,false,1,0,2,0,true,true,A._GetAutoObject(A.Device.Device
).A2,A._GetAutoObject(A.Device.Device).AF);this.A1(276000312342014,3,1,Ac-5529600
,0,0,false,false,false,true,37700,0,0,false,0,false,1,0,2,0,true,true,A._GetAutoObject(
A.Device.Device).A2,A._GetAutoObject(A.Device.Device).AF);this.A1(276000312342015
,3,1,Ac-6307200,0,0,false,false,false,true,39800,0,0,false,0,false,1,0,2,0,true,
true,A._GetAutoObject(A.Device.Device).A2,A._GetAutoObject(A.Device.Device).AF);
this.A1(276000312342016,3,1,Ac-6048000,0,0,false,false,false,true,40300,0,0,false
,0,false,1,0,2,0,true,true,A._GetAutoObject(A.Device.Device).A2,A._GetAutoObject(
A.Device.Device).AF);this.A1(276000312342017,3,1,Ac-6134400,0,0,false,false,false
,true,38400,0,0,false,0,false,1,0,2,0,true,true,A._GetAutoObject(A.Device.Device
).A2,A._GetAutoObject(A.Device.Device).AF);this.A1(276000312342018,3,1,Ac-6652800
,0,0,false,false,false,true,36300,0,0,false,0,false,1,0,2,0,true,true,A._GetAutoObject(
A.Device.Device).A2,A._GetAutoObject(A.Device.Device).AF);this.A1(276000312342019
,3,1,Ac-8467200,0,0,false,false,false,true,38700,0,0,false,0,false,1,0,2,0,true,
true,A._GetAutoObject(A.Device.Device).A2,A._GetAutoObject(A.Device.Device).AF);
this.A1(276000312342020,3,1,Ac-6998400,0,0,false,false,false,true,37300,0,0,false
,0,false,1,0,2,0,true,true,A._GetAutoObject(A.Device.Device).A2,A._GetAutoObject(
A.Device.Device).AF);this.A1(276000312342021,3,1,Ac-6652800,0,0,false,false,false
,true,38500,0,0,false,0,false,1,0,2,0,true,true,A._GetAutoObject(A.Device.Device
).A2,A._GetAutoObject(A.Device.Device).AF);this.A1(276000312342022,3,1,Ac-5788800
,0,0,false,false,false,true,37800,0,0,false,0,false,1,0,2,0,true,true,A._GetAutoObject(
A.Device.Device).A2,A._GetAutoObject(A.Device.Device).AF);this.A1(276000312342023
,3,1,Ac-6652800,0,0,false,false,false,true,37300,0,0,false,0,false,1,0,2,0,true,
true,A._GetAutoObject(A.Device.Device).A2,A._GetAutoObject(A.Device.Device).AF);
this.A1(276000312342024,3,1,Ac-6739200,0,0,false,false,false,true,37500,0,0,false
,0,false,1,0,2,0,true,true,A._GetAutoObject(A.Device.Device).A2,A._GetAutoObject(
A.Device.Device).AF);this.A1(276000312342025,3,1,Ac-7171200,0,0,false,false,false
,true,36300,0,0,false,0,false,1,0,2,0,true,true,A._GetAutoObject(A.Device.Device
).A2,A._GetAutoObject(A.Device.Device).AF);this.A1(276000312342026,3,1,Ac-7171200
,0,0,false,false,false,true,37800,0,0,false,0,false,1,0,2,0,true,true,A._GetAutoObject(
A.Device.Device).A2,A._GetAutoObject(A.Device.Device).AF);this.A1(276000312342027
,3,1,Ac-7689600,0,0,false,false,false,true,37900,0,0,false,0,false,1,0,2,0,true,
true,A._GetAutoObject(A.Device.Device).A2,A._GetAutoObject(A.Device.Device).AF);
this.A1(276000312342028,3,1,Ac-8121600,0,0,false,false,false,true,39800,0,0,false
,0,false,1,0,2,0,true,true,A._GetAutoObject(A.Device.Device).A2,A._GetAutoObject(
A.Device.Device).AF);this.A1(276000312342029,3,1,Ac-7603200,0,0,false,false,false
,true,36500,0,0,false,0,false,1,0,2,0,true,true,A._GetAutoObject(A.Device.Device
).A2,A._GetAutoObject(A.Device.Device).AF);this.A1(276000312342030,3,1,Ac-6393600
,0,0,false,false,false,true,38900,0,0,false,0,false,1,0,2,0,true,true,A._GetAutoObject(
A.Device.Device).A2,A._GetAutoObject(A.Device.Device).AF);this.A1(276000312342031
,3,1,Ac-6652800,0,0,false,false,false,true,36700,0,0,false,0,false,1,0,2,0,true,
true,A._GetAutoObject(A.Device.Device).A2,A._GetAutoObject(A.Device.Device).AF);
this.A1(276000312342032,3,1,Ac-6739200,0,0,false,false,false,true,37400,0,0,false
,0,false,1,0,2,0,true,true,A._GetAutoObject(A.Device.Device).A2,A._GetAutoObject(
A.Device.Device).AF);this.A1(276000312342033,3,1,Ac-6393600,0,0,false,false,false
,true,41000,0,0,false,0,false,1,0,2,0,true,true,A._GetAutoObject(A.Device.Device
).A2,A._GetAutoObject(A.Device.Device).AF);this.A1(276000312342034,3,1,Ac-7084800
,0,0,false,false,false,true,40500,0,0,false,0,false,1,0,2,0,true,true,A._GetAutoObject(
A.Device.Device).A2,A._GetAutoObject(A.Device.Device).AF);this.A1(276000312342035
,3,1,Ac-7171200,0,0,false,false,false,true,38200,0,0,false,0,false,1,0,2,0,true,
true,A._GetAutoObject(A.Device.Device).A2,A._GetAutoObject(A.Device.Device).AF);
this.A1(276000312342036,3,1,Ac-6480000,0,0,false,false,false,true,40000,0,0,false
,0,false,1,0,2,0,true,true,A._GetAutoObject(A.Device.Device).A2,A._GetAutoObject(
A.Device.Device).AF);this.A1(276000312342037,3,1,Ac-6652800,0,0,false,false,false
,true,40500,0,0,false,0,false,1,0,2,0,true,true,A._GetAutoObject(A.Device.Device
).A2,A._GetAutoObject(A.Device.Device).AF);this.A1(276000312342038,3,1,Ac-7084800
,0,0,false,false,false,true,40000,0,0,false,0,false,1,0,2,0,true,true,A._GetAutoObject(
A.Device.Device).A2,A._GetAutoObject(A.Device.Device).AF);this.A1(276000312342039
,3,1,Ac-6307200,0,0,false,false,false,true,38900,0,0,false,0,false,1,0,2,0,true,
true,A._GetAutoObject(A.Device.Device).A2,A._GetAutoObject(A.Device.Device).AF);
this.A1(276000312342040,3,1,Ac-7430400,0,0,false,false,false,true,37300,0,0,false
,0,false,1,0,2,0,true,true,A._GetAutoObject(A.Device.Device).A2,A._GetAutoObject(
A.Device.Device).AF);this.A1(276000312342041,3,1,Ac-6652800,0,0,false,false,false
,true,37000,0,0,false,0,false,1,0,2,0,true,true,A._GetAutoObject(A.Device.Device
).A2,A._GetAutoObject(A.Device.Device).AF);this.A1(276000312342042,3,1,Ac-6825600
,0,0,false,false,false,true,40800,0,0,false,0,false,1,0,2,0,true,true,A._GetAutoObject(
A.Device.Device).A2,A._GetAutoObject(A.Device.Device).AF);this.A1(276000312342043
,3,1,Ac-7430400,0,0,false,false,false,true,40000,0,0,false,0,false,1,0,2,0,true,
true,A._GetAutoObject(A.Device.Device).A2,A._GetAutoObject(A.Device.Device).AF);
this.A1(276000312342044,3,1,Ac-7516800,0,0,false,false,false,true,40700,0,0,false
,0,false,1,0,2,0,true,true,A._GetAutoObject(A.Device.Device).A2,A._GetAutoObject(
A.Device.Device).AF);this.A1(276000312342045,3,1,Ac-8121600,0,0,false,false,false
,true,40800,0,0,false,0,false,1,0,2,0,true,true,A._GetAutoObject(A.Device.Device
).A2,A._GetAutoObject(A.Device.Device).AF);this.A1(276000312342046,3,1,Ac-8553600
,0,0,false,false,false,true,39300,0,0,false,0,false,1,0,2,0,true,true,A._GetAutoObject(
A.Device.Device).A2,A._GetAutoObject(A.Device.Device).AF);this.A1(276000312342047
,3,1,Ac-7171200,0,0,false,false,false,true,39300,0,0,false,0,false,1,0,2,0,true,
true,A._GetAutoObject(A.Device.Device).A2,A._GetAutoObject(A.Device.Device).AF);
this.A1(276000312342048,3,1,Ac-6566400,0,0,false,false,false,true,40900,0,0,false
,0,false,1,0,2,0,true,true,A._GetAutoObject(A.Device.Device).A2,A._GetAutoObject(
A.Device.Device).AF);this.A1(276000312342049,3,1,Ac-7171200,0,0,false,false,false
,true,40100,0,0,false,0,false,1,0,2,0,true,true,A._GetAutoObject(A.Device.Device
).A2,A._GetAutoObject(A.Device.Device).AF);this.A1(276000312342050,3,1,Ac-6998400
,0,0,false,false,false,true,39900,0,0,false,0,false,1,0,2,0,true,true,A._GetAutoObject(
A.Device.Device).A2,A._GetAutoObject(A.Device.Device).AF);this.A1(276000312342051
,3,1,Ac-6739200,0,0,false,false,false,true,38200,0,0,false,0,false,1,0,2,0,true,
true,A._GetAutoObject(A.Device.Device).A2,A._GetAutoObject(A.Device.Device).AF);
this.A1(276000312342052,3,1,Ac-7603200,0,0,false,false,false,true,36400,0,0,false
,0,false,1,0,2,0,true,true,A._GetAutoObject(A.Device.Device).A2,A._GetAutoObject(
A.Device.Device).AF);this.A1(276000312342053,3,1,Ac-7689600,0,0,false,false,false
,true,40800,0,0,false,0,false,1,0,2,0,true,true,A._GetAutoObject(A.Device.Device
).A2,A._GetAutoObject(A.Device.Device).AF);this.A1(276000312342054,3,1,Ac-6480000
,0,0,false,false,false,true,36100,0,0,false,0,false,1,0,2,0,true,true,A._GetAutoObject(
A.Device.Device).A2,A._GetAutoObject(A.Device.Device).AF);this.A1(276000312342055
,3,1,Ac-7948800,0,0,false,false,false,true,38000,0,0,false,0,false,1,0,2,0,true,
true,A._GetAutoObject(A.Device.Device).A2,A._GetAutoObject(A.Device.Device).AF);
this.A1(276000312342056,3,1,Ac-8121600,0,0,false,false,false,true,37800,0,0,false
,0,false,1,0,2,0,true,true,A._GetAutoObject(A.Device.Device).A2,A._GetAutoObject(
A.Device.Device).AF);this.A1(276000312342057,3,1,Ac-6566400,0,0,false,false,false
,true,38800,0,0,false,0,false,1,0,2,0,true,true,A._GetAutoObject(A.Device.Device
).A2,A._GetAutoObject(A.Device.Device).AF);this.A1(276000312342058,3,1,Ac-7862400
,0,0,false,false,false,true,36600,0,0,false,0,false,1,0,2,0,true,true,A._GetAutoObject(
A.Device.Device).A2,A._GetAutoObject(A.Device.Device).AF);this.A1(276000312342059
,3,1,Ac-7344000,0,0,false,false,false,true,39700,0,0,false,0,false,1,0,2,0,true,
true,A._GetAutoObject(A.Device.Device).A2,A._GetAutoObject(A.Device.Device).AF);
this.A1(276000312342060,3,1,Ac-6998400,0,0,false,false,false,true,36600,0,0,false
,0,false,1,0,2,0,true,true,A._GetAutoObject(A.Device.Device).A2,A._GetAutoObject(
A.Device.Device).AF);this.A1(276000312342061,3,1,Ac-5788800,0,0,false,false,false
,true,36600,0,0,false,0,false,1,0,2,0,true,true,A._GetAutoObject(A.Device.Device
).A2,A._GetAutoObject(A.Device.Device).AF);this.A1(276000312342062,3,1,Ac-7257600
,0,0,false,false,false,true,36300,0,0,false,0,false,1,0,2,0,true,true,A._GetAutoObject(
A.Device.Device).A2,A._GetAutoObject(A.Device.Device).AF);this.A1(276000312342063
,3,1,Ac-5875200,0,0,false,false,false,true,40800,0,0,false,0,false,1,0,2,0,true,
true,A._GetAutoObject(A.Device.Device).A2,A._GetAutoObject(A.Device.Device).AF);
this.A1(276000312342064,3,1,Ac-6134400,0,0,false,false,false,true,37500,0,0,false
,0,false,1,0,2,0,true,true,A._GetAutoObject(A.Device.Device).A2,A._GetAutoObject(
A.Device.Device).AF);this.A1(276000312342065,3,1,Ac-5788800,0,0,false,false,false
,true,36000,0,0,false,0,false,1,0,2,0,true,true,A._GetAutoObject(A.Device.Device
).A2,A._GetAutoObject(A.Device.Device).AF);this.A1(276000312342066,3,1,Ac-7862400
,0,0,false,false,false,true,38400,0,0,false,0,false,1,0,2,0,true,true,A._GetAutoObject(
A.Device.Device).A2,A._GetAutoObject(A.Device.Device).AF);this.A1(276000312342067
,3,1,Ac-5270400,0,0,false,false,false,true,36900,0,0,false,0,false,1,0,2,0,true,
true,A._GetAutoObject(A.Device.Device).A2,A._GetAutoObject(A.Device.Device).AF);
this.A1(276000312342068,3,1,Ac-7776000,0,0,false,false,false,true,38300,0,0,false
,0,false,1,0,2,0,true,true,A._GetAutoObject(A.Device.Device).A2,A._GetAutoObject(
A.Device.Device).AF);this.A1(276000312342069,3,1,Ac-7171200,0,0,false,false,false
,true,40400,0,0,false,0,false,1,0,2,0,true,true,A._GetAutoObject(A.Device.Device
).A2,A._GetAutoObject(A.Device.Device).AF);this.A1(276000312342070,3,1,Ac-6048000
,0,0,false,false,false,true,40100,0,0,false,0,false,1,0,2,0,true,true,A._GetAutoObject(
A.Device.Device).A2,A._GetAutoObject(A.Device.Device).AF);this.A1(276000312343007
,1,1,Ac-186192000,0,1,false,false,false,true,0,Ac-864000,3,false,1,false,1,0,1,0
,true,true,A._GetAutoObject(A.Device.Device).A2,A._GetAutoObject(A.Device.Device
).AF);this.A1(276000312343044,1,1,Ac-118108800,0,1,false,false,false,true,0,Ac-172800
,1,false,1,false,1,0,1,0,true,true,A._GetAutoObject(A.Device.Device).A2,A._GetAutoObject(
A.Device.Device).AF);this.A1(276000312343065,1,1,Ac-152150400,0,1,false,false,false
,true,0,Ac-518400,2,false,1,false,1,0,1,0,true,true,A._GetAutoObject(A.Device.Device
).A2,A._GetAutoObject(A.Device.Device).AF);this.A1(276000312343117,1,1,Ac-252806400
,0,1,false,false,false,true,0,Ac-86400,5,false,1,false,1,0,1,0,true,true,A._GetAutoObject(
A.Device.Device).A2,A._GetAutoObject(A.Device.Device).AF);this.A1(276000312343204
,1,1,Ac-219369600,0,1,false,false,false,true,0,Ac-345600,4,false,1,false,1,0,1,0
,true,true,A._GetAutoObject(A.Device.Device).A2,A._GetAutoObject(A.Device.Device
).AF);this.A1(276000312343232,1,1,Ac-152064000,0,1,false,false,false,true,0,Ac-432000
,2,false,1,false,1,0,1,0,true,true,A._GetAutoObject(A.Device.Device).A2,A._GetAutoObject(
A.Device.Device).AF);this.A1(276000312343308,1,1,Ac-118627200,0,1,false,false,false
,true,0,Ac-691200,1,false,1,false,1,0,1,0,true,true,A._GetAutoObject(A.Device.Device
).A2,A._GetAutoObject(A.Device.Device).AF);this.A1(276000312343376,1,1,Ac-118195200
,0,1,false,false,false,true,0,Ac-259200,1,false,1,false,1,0,1,0,true,true,A._GetAutoObject(
A.Device.Device).A2,A._GetAutoObject(A.Device.Device).AF);this.A1(276000312343409
,1,1,Ac-152409600,0,1,false,false,false,true,0,Ac-777600,2,false,1,false,1,0,1,0
,true,true,A._GetAutoObject(A.Device.Device).A2,A._GetAutoObject(A.Device.Device
).AF);this.A1(276000312343420,1,1,Ac-253324800,0,1,false,false,false,true,0,Ac-604800
,5,false,1,false,1,0,1,0,true,true,A._GetAutoObject(A.Device.Device).A2,A._GetAutoObject(
A.Device.Device).AF);this.A1(276000312343505,4,1,Ac-145152000,0,1,false,false,false
,true,0,Ac-27216000,1,true,1,false,1,0,1,0,true,true,A._GetAutoObject(A.Device.Device
).A2,A._GetAutoObject(A.Device.Device).AF);this.A1(276000312343535,4,1,Ac-215222400
,0,1,false,false,false,true,0,Ac-29894400,3,true,1,false,1,0,1,0,true,true,A._GetAutoObject(
A.Device.Device).A2,A._GetAutoObject(A.Device.Device).AF);this.A1(276000312343540
,4,1,Ac-179107200,0,1,false,false,false,true,0,Ac-27475200,2,true,1,false,1,0,1,
0,true,true,A._GetAutoObject(A.Device.Device).A2,A._GetAutoObject(A.Device.Device
).AF);this.A1(276000312343558,4,1,Ac-248659200,0,1,false,false,false,true,0,Ac-29635200
,4,true,1,false,1,0,1,0,true,true,A._GetAutoObject(A.Device.Device).A2,A._GetAutoObject(
A.Device.Device).AF);this.A1(276000312343587,4,1,Ac-179020800,0,1,false,false,false
,true,0,Ac-27388800,2,true,1,false,1,0,1,0,true,true,A._GetAutoObject(A.Device.Device
).A2,A._GetAutoObject(A.Device.Device).AF);this.A1(276000312343597,4,1,Ac-146188800
,0,1,false,false,false,true,0,Ac-28252800,1,true,1,false,1,0,1,0,true,true,A._GetAutoObject(
A.Device.Device).A2,A._GetAutoObject(A.Device.Device).AF);this.A1(276000312343619
,4,1,Ac-181353600,0,1,false,false,false,true,0,Ac-29721600,2,true,1,false,1,0,1,
0,true,true,A._GetAutoObject(A.Device.Device).A2,A._GetAutoObject(A.Device.Device
).AF);this.A1(276000312343627,4,1,Ac-213235200,0,1,false,false,false,true,0,Ac-27907200
,3,true,1,false,1,0,1,0,true,true,A._GetAutoObject(A.Device.Device).A2,A._GetAutoObject(
A.Device.Device).AF);this.A1(276000312343721,4,1,Ac-282182400,0,1,false,false,false
,true,0,Ac-29462400,5,true,1,false,1,0,1,0,true,true,A._GetAutoObject(A.Device.Device
).A2,A._GetAutoObject(A.Device.Device).AF);this.A1(276000312343892,4,1,Ac-179107200
,0,1,false,false,false,true,0,Ac-27475200,2,true,1,false,1,0,1,0,true,true,A._GetAutoObject(
A.Device.Device).A2,A._GetAutoObject(A.Device.Device).AF);this.A1(276000312343899
,4,1,Ac-147398400,0,1,false,false,false,true,0,Ac-29462400,1,true,1,false,1,0,1,
0,true,true,A._GetAutoObject(A.Device.Device).A2,A._GetAutoObject(A.Device.Device
).AF);this.A1(276000312343913,4,1,Ac-178416000,0,1,false,false,false,true,0,Ac-26784000
,2,true,1,false,1,0,1,0,true,true,A._GetAutoObject(A.Device.Device).A2,A._GetAutoObject(
A.Device.Device).AF);this.A1(276000312343915,4,1,Ac-179712000,0,1,false,false,false
,true,0,Ac-28080000,2,true,1,false,1,0,1,0,true,true,A._GetAutoObject(A.Device.Device
).A2,A._GetAutoObject(A.Device.Device).AF);this.A1(276000312343940,4,1,Ac-212025600
,0,1,false,false,false,true,0,Ac-26697600,3,true,1,false,1,0,1,0,true,true,A._GetAutoObject(
A.Device.Device).A2,A._GetAutoObject(A.Device.Device).AF);this.A1(276000312343978
,4,1,Ac-246499200,0,1,false,false,false,true,0,Ac-27475200,4,true,1,false,1,0,1,
0,true,true,A._GetAutoObject(A.Device.Device).A2,A._GetAutoObject(A.Device.Device
).AF);this.A1(276001413780210,5,1,Ac-2851200,0,0,false,false,false,true,0,0,0,false
,0,true,85,0,2,0,true,false,5,A._GetAutoObject(A.Device.Device).AF);this.A1(276001514777390
,5,1,Ac-2937600,0,0,false,false,false,true,0,0,0,false,0,true,85,0,2,0,true,false
,5,A._GetAutoObject(A.Device.Device).AF);this.A1(276001514977845,5,1,Ac-2764800,
0,0,false,false,false,true,0,0,0,false,0,true,85,0,2,0,true,false,5,A._GetAutoObject(
A.Device.Device).AF);this.A1(276000215140539,5,1,Ac-2678400,0,0,false,false,false
,true,0,0,0,false,0,true,85,0,2,0,true,false,5,A._GetAutoObject(A.Device.Device).
AF);this.A1(276000615692447,5,1,Ac-3024000,0,0,false,false,false,true,0,0,0,false
,0,true,85,0,2,0,true,false,5,A._GetAutoObject(A.Device.Device).AF);this.A1(276000916480395
,5,1,Ac-2851200,0,0,false,false,false,true,0,0,0,false,0,true,85,0,2,0,true,false
,5,A._GetAutoObject(A.Device.Device).AF);this.A1(276001416728887,5,1,Ac-2592000,
0,0,false,false,false,true,0,0,0,false,0,true,85,0,2,0,true,false,5,A._GetAutoObject(
A.Device.Device).AF);this.A1(276001017235905,5,1,Ac-2678400,0,0,false,false,false
,true,0,0,0,false,0,true,85,0,2,0,true,false,5,A._GetAutoObject(A.Device.Device).
AF);this.A1(276001618229464,5,1,Ac-2505600,0,0,false,false,false,true,0,0,0,false
,0,true,85,0,2,0,true,false,5,A._GetAutoObject(A.Device.Device).AF);this.A1(276001021244611
,5,1,Ac-2764800,0,0,false,false,false,true,0,0,0,false,0,true,85,0,2,0,true,false
,5,A._GetAutoObject(A.Device.Device).AF);this.A1(276000730343809,5,1,Ac-2764800,
0,0,false,false,false,true,0,0,0,false,0,true,85,0,2,0,true,false,5,A._GetAutoObject(
A.Device.Device).AF);this.A1(276001332086943,5,1,Ac-2592000,0,0,false,false,false
,true,0,0,0,false,0,true,85,0,2,0,true,false,5,A._GetAutoObject(A.Device.Device).
AF);this.A1(276001034073970,5,1,Ac-2505600,0,0,false,false,false,true,0,0,0,false
,0,true,85,0,2,0,true,false,5,A._GetAutoObject(A.Device.Device).AF);this.A1(276000338829483
,5,1,Ac-2505600,0,0,false,false,false,true,0,0,0,false,0,true,85,0,2,0,true,false
,5,A._GetAutoObject(A.Device.Device).AF);this.A1(276001239648313,5,1,Ac-2678400,
0,0,false,false,false,true,0,0,0,false,0,true,85,0,2,0,true,false,5,A._GetAutoObject(
A.Device.Device).AF);this.A1(276001540765035,5,1,Ac-2851200,0,0,false,false,false
,true,0,0,0,false,0,true,85,0,2,0,true,false,5,A._GetAutoObject(A.Device.Device).
AF);this.A1(276001042945700,5,1,Ac-2937600,0,0,false,false,false,true,0,0,0,false
,0,true,85,0,2,0,true,false,5,A._GetAutoObject(A.Device.Device).AF);this.A1(276001544582503
,5,1,Ac-2678400,0,0,false,false,false,true,0,0,0,false,0,true,85,0,2,0,true,false
,5,A._GetAutoObject(A.Device.Device).AF);this.A1(276001546216758,5,1,Ac-2764800,
0,0,false,false,false,true,0,0,0,false,0,true,85,0,2,0,true,false,5,A._GetAutoObject(
A.Device.Device).AF);this.A1(276000249254319,5,1,Ac-2505600,0,0,false,false,false
,true,0,0,0,false,0,true,85,0,2,0,true,false,5,A._GetAutoObject(A.Device.Device).
AF);this.A1(276000650106638,5,1,Ac-2764800,0,0,false,false,false,true,0,0,0,false
,0,true,85,0,2,0,true,false,5,A._GetAutoObject(A.Device.Device).AF);this.A1(276001051694678
,5,1,Ac-3024000,0,0,false,false,false,true,0,0,0,false,0,true,85,0,2,0,true,false
,5,A._GetAutoObject(A.Device.Device).AF);this.A1(276001352864356,5,1,Ac-2592000,
0,0,false,false,false,true,0,0,0,false,0,true,85,0,2,0,true,false,5,A._GetAutoObject(
A.Device.Device).AF);this.A1(276000957087895,5,1,Ac-2678400,0,0,false,false,false
,true,0,0,0,false,0,true,85,0,2,0,true,false,5,A._GetAutoObject(A.Device.Device).
AF);this.A1(276000960408431,5,1,Ac-2851200,0,0,false,false,false,true,0,0,0,false
,0,true,85,0,2,0,true,false,5,A._GetAutoObject(A.Device.Device).AF);this.A1(276000360428432
,5,1,Ac-2505600,0,0,false,false,false,true,0,0,0,false,0,true,85,0,2,0,true,false
,5,A._GetAutoObject(A.Device.Device).AF);this.A1(276001661295801,5,1,Ac-2937600,
0,0,false,false,false,true,0,0,0,false,0,true,85,0,2,0,true,false,5,A._GetAutoObject(
A.Device.Device).AF);this.A1(276000862208448,5,1,Ac-2592000,0,0,false,false,false
,true,0,0,0,false,0,true,85,0,2,0,true,false,5,A._GetAutoObject(A.Device.Device).
AF);this.A1(276000362238024,5,1,Ac-2764800,0,0,false,false,false,true,0,0,0,false
,0,true,85,0,2,0,true,false,5,A._GetAutoObject(A.Device.Device).AF);this.A1(276000663021861
,5,1,Ac-2678400,0,0,false,false,false,true,0,0,0,false,0,true,85,0,2,0,true,false
,5,A._GetAutoObject(A.Device.Device).AF);this.A1(276000867048797,5,1,Ac-3024000,
0,0,false,false,false,true,0,0,0,false,0,true,85,0,2,0,true,false,5,A._GetAutoObject(
A.Device.Device).AF);this.A1(276000768244690,5,1,Ac-2851200,0,0,false,false,false
,true,0,0,0,false,0,true,85,0,2,0,true,false,5,A._GetAutoObject(A.Device.Device).
AF);this.A1(276000968296663,5,1,Ac-2505600,0,0,false,false,false,true,0,0,0,false
,0,true,85,0,2,0,true,false,5,A._GetAutoObject(A.Device.Device).AF);this.A1(276000671847138
,5,1,Ac-2678400,0,0,false,false,false,true,0,0,0,false,0,true,85,0,2,0,true,false
,5,A._GetAutoObject(A.Device.Device).AF);this.A1(276001073128650,5,1,Ac-2592000,
0,0,false,false,false,true,0,0,0,false,0,true,85,0,2,0,true,false,5,A._GetAutoObject(
A.Device.Device).AF);this.A1(276000474997742,5,1,Ac-2764800,0,0,false,false,false
,true,0,0,0,false,0,true,85,0,2,0,true,false,5,A._GetAutoObject(A.Device.Device).
AF);this.A1(276000187530696,5,1,Ac-2678400,0,0,false,false,false,true,0,0,0,false
,0,true,85,0,2,0,true,false,5,A._GetAutoObject(A.Device.Device).AF);this.A1(276000789548473
,5,1,Ac-3024000,0,0,false,false,false,true,0,0,0,false,0,true,85,0,2,0,true,false
,5,A._GetAutoObject(A.Device.Device).AF);this.A1(276001090861654,5,1,Ac-2764800,
0,0,false,false,false,true,0,0,0,false,0,true,85,0,2,0,true,false,5,A._GetAutoObject(
A.Device.Device).AF);this.A1(276001692014618,5,1,Ac-2851200,0,0,false,false,false
,true,0,0,0,false,0,true,85,0,2,0,true,false,5,A._GetAutoObject(A.Device.Device).
AF);},AKc:function(G){var Ac=A._GetAutoObject(A.Device.Helper).Dv();this.AG(Ac-3542400
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
,276000312343007,3730,3,0,0,0,0,0);},AJ$:function(G){this.AlQ(1,Tb);this.AlQ(2,Tc
);this.AlQ(3,Td);},AKb:function(G){this.Aaz(2016,216,11);this.Aaz(2017,217,10);this.
Aaz(2018,218,9);this.Aaz(2019,219,8);this.Aaz(2020,220,7);this.Aaz(2021,221,6);}
,_Init:function(aArg){var K=this.K;K.__proto__=C.PZ;A.h7++;},_Done:function(){var
K=this.K;K.__proto__=null;A.h7--;},_ReInit:function(){},_Mark:function(D){},_variants:
function(){return this;},_className:"DeviceDemonstrator::TableData"};C.AnU={A2Y:
0,AKG:function(G){var K=this.K;A.kR.AnU.Bb8.call(this,G);if(A._GetAutoObject(A.Device.
Device).Ik===K.A2Y)return;if(A._GetAutoObject(A.Device.Device).Ik===27)A._GetAutoObject(
C.G1).Ar7(2);else if(K.A2Y===27)A._GetAutoObject(C.G1).Ar7(0);K.A2Y=A._GetAutoObject(
A.Device.Device).Ik;},_Init:function(aArg){var K=this.K;K.__proto__=C.AnU;A.h7++;
},_Done:function(){var K=this.K;K.__proto__=null;A.h7--;},_ReInit:function(){},_Mark:
function(D){},_variants:function(){return this;},_className:"DeviceDemonstrator::ScreenLoaderClass"
};
C._Init=function(){C.DeviceClass.__proto__=A.acs.DeviceClass;};C._ReInit=function(
){var B;if((B=C.UF._this))B._ReInit(),C.UF._ReInit.call(B);if((B=C.G1._this))B._ReInit(
),C.G1._ReInit.call(B);if((B=C.Aqj._this))B._ReInit(),C.Aqj._ReInit.call(B);if((
B=C.AgO._this))B._ReInit(),C.AgO._ReInit.call(B);};C.DH=function(D){var B;if((B=
C.UF._this)&&(B._cycle!=D))B._Done(C.UF._this=null);if((B=C.G1._this)&&(B._cycle
!=D))B._Done(C.G1._this=null);if((B=C.Aqj._this)&&(B._cycle!=D))B._Done(C.Aqj._this=
null);if((B=C.AgO._this)&&(B._cycle!=D))B._Done(C.AgO._this=null);};return C;})(
);

/* VitalControl demonstration application, © Urban GmbH & Co.KG 2023 */