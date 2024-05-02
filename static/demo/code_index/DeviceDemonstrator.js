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
var IV=[605,30,975,740];var Is=[25,25,45,41];var O6=[547,610,687,750];var P_=[270
,390];var P$=[350,390];var CQ=[350,450];var Ff=[270,450];var L5=[430,390];var Qa=[
510,390];var J6=[510,450];var Od=[430,450];var Qb=[360,390];var ML=[420,390];var
S$=[420,450];var UW=[360,450];var Z5=[335,460];var W8=[447,460];var It=[447,500];
var UX=[335,500];var Z6=[350,512];var W9=[430,512];var Z7=[430,592];var W_=[350,
592];var Z8=[335,605];var Z9=[447,605];var UY=[447,665];var W$=[335,665];var O7=[
264,504];var Z_=[344,504];var Oe=[344,601];var Rn=[264,601];var Xa=[436,504];var
Xb=[516,504];var Ta=[516,601];var Z$=[436,601];var Aaa=[10,130,210,310];var Xc="%d%m%Y";
var Xd="0";var Tb="1";var Tc="2";var Td="3";
C.A5t={BgH:null,Background:null,Ach:null,AkW:null,AgE:null,Ap:null,ZT:null,S2:null
,ZU:null,ZW:null,ZV:null,W3:null,ZX:null,WX:null,W1:null,W2:null,Abf:null,Do:null
,Init:function(aArg){A._GetAutoObject(A.Device.Device).Ar6(A._NewObject(A.Device.
Transponder,0));},DriveCursorHitting:function(Tg,BF,Fh){var Az3=this.AOU();if(!!
Az3){var A2E=Az3.M;A2E=A.abJ(A2E,Az3.BjJ(Ce));if(!A.wa(A2E,Fh)){this.ACN(Az3);Az3.
Cs(0x10,0x0);}}return A.Core.Root.DriveCursorHitting.call(this,Tg,BF,Fh);},BpA:function(
G){var K=this.K;this.Device.UpdateActiveScreen(3);K.AkW.Ar(false);},ND:function(
G){var K=this.K;var B;var D5=(A.Core.Bn.isPrototypeOf(G)?G:null);var AiK=0;if(D5===
K.ZV)AiK=27;else if(D5===K.ZU)AiK=26;else if(D5===K.ZW)AiK=28;else if(D5===K.W1)
AiK=6;else if(D5===K.W2)AiK=7;else if(D5===K.W3)AiK=4;else if(D5===K.WX)AiK=5;else
if(D5===K.ZX)AiK=1;if(!!D5){if((D5.Down&&(D5.Jv>0))&&(D5.Jv<400))return;var BzC=
this.AV;this.Bb(this.GK);this.Im().DriveKeyboardHitting(AiK,0x00,D5.Down);this.Bb(
BzC);K.S2.H(A.abM(K.S2.M,D5.H1[0]-((((B=K.S2.M)[2]-B[0])/2)|0)));K.S2.H(A.abO(K.
S2.M,D5.H1[1]-((((B=K.S2.M)[3]-B[1])/2)|0)));K.ZT.Ar(true);}},AiR:function(G){var
K=this.K;var B;var JE=(A.Core.BK.isPrototypeOf(G)?G:null);if((String.fromCharCode(
JE.DQ).toLowerCase().charCodeAt(0)||0)===0x73)A._GetAutoObject(C.G1).Bfw(this);else
if((String.fromCharCode(JE.DQ).toLowerCase().charCodeAt(0)||0)===0x74)A._GetAutoObject(
A.Device.Helper).ALa(this);else if((String.fromCharCode(JE.DQ).toLowerCase().charCodeAt(
0)||0)===0x64)this.Bb(this.GK);else if((String.fromCharCode(JE.DQ).toLowerCase().
charCodeAt(0)||0)===0x63)this.Bb(K.AgE);else if(JE.CO===152){if(this.AV===K.AgE)
this.Bb(this.GK);else this.Bb(K.AgE);}else if(this.AV===this.GK){if(JE.CO===11){
this.Im().DriveKeyboardHitting(26,0x00,true);this.Im().DriveKeyboardHitting(26,0x00
,false);}else if(JE.CO===12){this.Im().DriveKeyboardHitting(27,0x00,true);this.Im(
).DriveKeyboardHitting(27,0x00,false);}else if(JE.CO===13){this.Im().DriveKeyboardHitting(
28,0x00,true);this.Im().DriveKeyboardHitting(28,0x00,false);}}},_Init:function(aArg
){var K=this.K;A.acg.Ap._Init.call(K.Background={I:this},0);A.acg.Ap._Init.call(
K.Ach={I:this},0);A.Core.Timer._Init.call(K.AkW={I:this},0);A.acw.AUL._Init.call(
K.AgE={I:this},0);A.acg.Ap._Init.call(K.Ap={I:this},0);A.acl.ANu._Init.call(K.ZT={
I:this},0);A.acg.Ap._Init.call(K.S2={I:this},0);A.Core.Bn._Init.call(K.ZU={I:this
},0);A.Core.Bn._Init.call(K.ZW={I:this},0);A.Core.Bn._Init.call(K.ZV={I:this},0);
A.Core.Bn._Init.call(K.W3={I:this},0);A.Core.Bn._Init.call(K.ZX={I:this},0);A.Core.
Bn._Init.call(K.WX={I:this},0);A.Core.Bn._Init.call(K.W1={I:this},0);A.Core.Bn._Init.
call(K.W2={I:this},0);A.acw.Abf._Init.call(K.Abf={I:this},0);A.Core.BK._Init.call(
K.Do={I:this},0);K.__proto__=C.A5t;var B;this.H(BD);K.Background.H(BD);K.Ach.H(E7
);this.GK.H(Hr);K.AkW.PV(2000);K.AkW.Ar(true);K.AgE.H(IV);K.Ap.H(Is);K.ZT.AkY=true;
K.ZT.WI(9);K.ZT.HO(1);K.ZT.Fr(300);K.ZT.B2=0xA0FFFFFF;K.ZT.Cx=0x00FFFFFF;K.S2.H(
O6);K.S2.L(0x00FFFFFF);K.ZU.JY(P_);K.ZU.Ky(P$);K.ZU.DC(CQ);K.ZU.DM(Ff);K.ZW.JY(L5
);K.ZW.Ky(Qa);K.ZW.DC(J6);K.ZW.DM(Od);K.ZV.JY(Qb);K.ZV.Ky(ML);K.ZV.DC(S$);K.ZV.DM(
UW);K.W3.JY(Z5);K.W3.Ky(W8);K.W3.DC(It);K.W3.DM(UX);K.ZX.JY(Z6);K.ZX.Ky(W9);K.ZX.
DC(Z7);K.ZX.DM(W_);K.WX.JY(Z8);K.WX.Ky(Z9);K.WX.DC(UY);K.WX.DM(W$);K.W1.JY(O7);K.
W1.Ky(Z_);K.W1.DC(Oe);K.W1.DM(Rn);K.W2.JY(Xa);K.W2.Ky(Xb);K.W2.DC(Ta);K.W2.DM(Z$
);K.Abf.H(Aaa);this.J(K.Background,-1);this.J(K.Ach,-1);this.J(K.AgE,0);this.J(K.
Ap,0);this.J(K.S2,0);this.J(K.ZU,0);this.J(K.ZW,0);this.J(K.ZV,0);this.J(K.W3,0);
this.J(K.ZX,0);this.J(K.WX,0);this.J(K.W1,0);this.J(K.W2,0);this.J(K.Abf,0);K.Background.
Ax(A.aaL(A.acw.Background));K.Ach.Ax(A.aaL(A.acx.Ach));K.AkW.ME=[this,K.BpA];K.Ap.
Ax(A.aaL(A.acw.ARZ));K.ZT.Q=[B=K.S2,B.Bk$,B.L];K.S2.Ax(A.aaL(A.acx.ARG));K.ZU.Lq=[
this,K.ND];K.ZU.BL=[this,K.ND];K.ZW.Lq=[this,K.ND];K.ZW.BL=[this,K.ND];K.ZV.Lq=[
this,K.ND];K.ZV.BL=[this,K.ND];K.W3.D1=[this,K.ND];K.W3.Lq=[this,K.ND];K.W3.BL=[
this,K.ND];K.ZX.Lq=[this,K.ND];K.ZX.BL=[this,K.ND];K.WX.D1=[this,K.ND];K.WX.Lq=[
this,K.ND];K.WX.BL=[this,K.ND];K.W1.D1=[this,K.ND];K.W1.Lq=[this,K.ND];K.W1.BL=[
this,K.ND];K.W2.D1=[this,K.ND];K.W2.Lq=[this,K.ND];K.W2.BL=[this,K.ND];K.Abf.Ab7([
B=A._GetAutoObject(A.Device.Helper),B.U3,B.U6]);K.Do.BL=[this,K.AiR];K.BgH=A._GetAutoObject(
A.acs.Acq);K.Init.call(this,aArg);A.h7++;},_Done:function(){var K=this.K;K.__proto__=
null;K.Background._Done();K.Ach._Done();K.AkW._Done();K.AgE._Done();K.Ap._Done();
K.ZT._Done();K.S2._Done();K.ZU._Done();K.ZW._Done();K.ZV._Done();K.W3._Done();K.
ZX._Done();K.WX._Done();K.W1._Done();K.W2._Done();K.Abf._Done();K.Do._Done();A.h7--;
},_ReInit:function(){var K=this.K;K.Background._ReInit();K.Ach._ReInit();K.AkW._ReInit(
);K.AgE._ReInit();K.Ap._ReInit();K.ZT._ReInit();K.S2._ReInit();K.ZU._ReInit();K.
ZW._ReInit();K.ZV._ReInit();K.W3._ReInit();K.ZX._ReInit();K.WX._ReInit();K.W1._ReInit(
);K.W2._ReInit();K.Abf._ReInit();K.Do._ReInit();},_Mark:function(D){var B;if((B=
this.BgH)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Background)._cycle!=D)B.
_Mark(B._cycle=D);if((B=this.Ach)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AkW).
_cycle!=D)B._Mark(B._cycle=D);if((B=this.AgE)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Ap)._cycle!=D)B._Mark(B._cycle=D);if((B=this.ZT)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.S2)._cycle!=D)B._Mark(B._cycle=D);if((B=this.ZU)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.ZW)._cycle!=D)B._Mark(B._cycle=D);if((B=this.ZV)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.W3)._cycle!=D)B._Mark(B._cycle=D);if((B=this.ZX
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.WX)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.W1)._cycle!=D)B._Mark(B._cycle=D);if((B=this.W2)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Abf)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Do)._cycle!=D)B._Mark(
B._cycle=D);},_variants:function(){return this;},_className:"DeviceDemonstrator::ApplicationDemonstration"
};C.DeviceClass={AJ0:null,AvA:null,AuR:null,Init:function(aArg){var K=this.K;var
B;A.zV([this,K.BkW],this.An,0);A.zX([this,K.Bm8],[B=K.AJ0,B.A9p,B.A_N],0);A.zX([
this,K.Bmi],[B=K.AJ0,B.A8J,B.AS9],0);},Ar5:function(E){this.UpdateScanState(E);}
,AwY:function(E){this.UpdateMeasureState(E);},Axa:function(E){this.UpdateTempValue(
E);},AxL:function(){this.UpdateMeasureState(1);this.UpdateTempValue(0);},AhP:function(
){var B;A._GetAutoObject(A.Device.Helper).SU.AnZ(this);this.UpdateMeasureState(0
);},AhM:function(){this.UpdateScanState(1);},An0:function(){this.UpdateScanState(
0);},Ar6:function(E){this.UpdateScanTransponder(E.Id,E.TransponderType,E.TransponderProtocol
);if(this.ScanState!==1)return;this.UpdateScanState(2);},Bm8:function(G){var K=this.
K;var AlN=A._GetAutoObject(C.G1).AGH;if(AlN<0)K.AvA=null;else{K.AvA=A._NewObject(
A.Device.Int32FilterCriterion,0);K.AvA.Initialize(2,0,AlN,true);}A.pe([this,K.Bk
],this);},Bmi:function(G){var K=this.K;var Bgv=A._GetAutoObject(C.G1).ABR;if(Bgv<=
0)K.AuR=null;else{K.AuR=A._NewObject(A.Device.Int32FilterCriterion,0);K.AuR.Initialize(
1,4,Bgv,false);}A.pe([this,K.Bk],this);},Bk:function(G){var K=this.K;var Be=A._GetAutoObject(
A.Device.Helper).Mv();Be.CX(K.AvA);Be.CX(K.AuR);A._GetAutoObject(C.Aqj).Bk(Be);}
,BkW:function(G){var K=this.K;A.pe([this,K.Bk],this);},_Init:function(aArg){var K=
this.K;A.acs.DeviceClass._Init.call(this,aArg);K.__proto__=C.DeviceClass;this.OQ(
4);this.Aw7(276034580109999);K.AJ0=A._GetAutoObject(C.G1);K.Init.call(this,aArg);
},_Mark:function(D){var B;A.acs.DeviceClass._Mark.call(this,D);if((B=this.AJ0)&&(
B._cycle!=D))B._Mark(B._cycle=D);if((B=this.AvA)&&(B._cycle!=D))B._Mark(B._cycle=
D);if((B=this.AuR)&&(B._cycle!=D))B._Mark(B._cycle=D);},_variants:function(){return this;
},_className:"DeviceDemonstrator::DeviceClass"};C.UF={_Init:function(){A.acs.UF.
_Init.call(this,0);this.ATL(false);this.ATM(false);},_ReInit:function(){A.acs.UF.
_ReInit.call(this,0);},_variants:function(){return this;},_this:null};C.A6g={AGD:
0,AGH:0,ABR:0,AsA:null,WW:3950,AhF:0,Axu:true,A_N:function(E){if(this.AGH===E)return;
this.AGH=E;A.abo([this,this.A9p,this.A_N],0);},A9p:function(){return this.AGH;},
AS9:function(E){if(this.ABR===E)return;this.ABR=E;A.abo([this,this.A8J,this.AS9]
,0);},A8J:function(){return this.ABR;},Bfw:function(G){this.BgG(this.AGD);},A_L:
function(E){if(this.AGD===E)return;this.AGD=E;A.abo([this,this.BlL,this.A_L],0);
},A_O:function(E){if(this.AsA===E)return;this.AsA=E;A.abo([this,this.A9q,this.A_O
],0);},A9q:function(){return this.AsA;},BgG:function(Iw){var B;var Ii=false;if((
A._GetAutoObject(A.Device.Device).ScanState===1)&&!!Iw){A._GetAutoObject(A.Device.
Device).OV.ATY(1);A._GetAutoObject(A.Device.Device).OV.OnSetId(Iw);A._GetAutoObject(
A.Device.Device).OV.ATX(2);A._GetAutoObject(A.Device.Device).Ar5(2);A.abo([B=A._GetAutoObject(
A.Device.Device),B.ASX,B.A0E],0);Ii=true;}return Ii;},ATG:function(E){if(this.Axu===
E)return;this.Axu=E;A.abo([this,this.ASU,this.ATG],0);},AFV:function(E){if(this.
WW===E)return;this.WW=E;A.abo([this,this.BlR,this.AFV],0);},Bfh:function(G){var B;
if(this.Axu)A._GetAutoObject(A.Device.Helper).ALa(this);else A._GetAutoObject(A.
Device.Helper).Bdn(this.WW);},BCp:function(Bxi){var AtF=Bxi.toFixed();AtF=AtF+A.
_GetAutoObject(A.acj.VG).AC7(AtF).toFixed();var O;for(O=0;O<AtF.length;O++){A.aam(
).DriveKeyboardHitting(0,AtF.charCodeAt(O)||0,true);A.aam().DriveKeyboardHitting(
0,AtF.charCodeAt(O)||0,false);}A.aam().DriveKeyboardHitting(0,0x0D,true);A.aam().
DriveKeyboardHitting(0,0x0D,false);return true;},Ar7:function(E){if(this.AhF===E
)return;this.AhF=E;A.abo([this,this.AEO,this.Ar7],0);},BCq:function(Ay2){var Av=
A._NewObject(A.Core.Bs,0);Av.Initialize(Ay2);var JF=Av.Format(Xc)+Xd;JF=JF+A._GetAutoObject(
A.acj.VG).AC7(JF).toFixed();var O;for(O=0;O<JF.length;O++){A.aam().DriveKeyboardHitting(
0,JF.charCodeAt(O)||0,true);A.aam().DriveKeyboardHitting(0,JF.charCodeAt(O)||0,false
);}A.aam().DriveKeyboardHitting(149,0x00,true);A.aam().DriveKeyboardHitting(149,
0x00,false);return true;},BlL:function(){return this.AGD;},ASU:function(){return this.
Axu;},BlR:function(){return this.WW;},AEO:function(){return this.AhF;},_Init:function(
aArg){this.__proto__=C.A6g;this.AsA=A.acw.AMG;A.h7++;},_Done:function(){this.__proto__=
null;A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((B=this.I)&&(B._cycle
!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:"DeviceDemonstrator::DemonstrationConfigClass"
};C.G1={_Init:function(){C.A6g._Init.call(this,0);},_ReInit:function(){},_variants:
function(){return this;},_this:null};C.Aqj={_Init:function(){A.Device.Table._Init.
call(this,0);this.OnSetId(0);},_ReInit:function(){},_variants:function(){return this;
},_this:null};C.A6h={AhJ:A.jV,Delete:function(){this.AFQ(A.abV(this.AhJ,this.AhJ.
length-1));},Ez:function(Ac2){if(!this.AhJ.length&&(Ac2===0x30))return;if(this.AhJ.
length<6)this.AFQ(this.AhJ+String.fromCharCode(Ac2));},AFQ:function(E){if(this.AhJ===
E)return;this.AhJ=E;A.abo([this,this.A9n,this.AFQ],0);A._GetAutoObject(C.G1).AS9(
A.wz(this.AhJ,-1,10));},A9n:function(){return this.AhJ;},_Init:function(aArg){this.
__proto__=C.A6h;A.h7++;},_Done:function(){this.__proto__=null;A.h7--;},_ReInit:function(
){},_Mark:function(D){var B;if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:
null,_cycle:0,_observers:null,_className:"DeviceDemonstrator::DemonstrationSearchHelperClass"
};C.AgO={_Init:function(){C.A6h._Init.call(this,0);},_ReInit:function(){},_variants:
function(){return this;},_this:null};C.PZ={AJ_:function(G){var Ac=A._GetAutoObject(
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
AF);},AKa:function(G){var Ac=A._GetAutoObject(A.Device.Helper).Dv();this.AG(Ac-3542400
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
,276000312343007,3730,3,0,0,0,0,0);},AJ9:function(G){this.AlP(1,Tb);this.AlP(2,Tc
);this.AlP(3,Td);},AJ$:function(G){this.Aaz(2016,216,11);this.Aaz(2017,217,10);this.
Aaz(2018,218,9);this.Aaz(2019,219,8);this.Aaz(2020,220,7);this.Aaz(2021,221,6);}
,_Init:function(aArg){var K=this.K;K.__proto__=C.PZ;A.h7++;},_Done:function(){var
K=this.K;K.__proto__=null;A.h7--;},_ReInit:function(){},_Mark:function(D){},_variants:
function(){return this;},_className:"DeviceDemonstrator::TableData"};C.AnT={A2W:
0,AKE:function(G){var K=this.K;A.kR.AnT.Bb6.call(this,G);if(A._GetAutoObject(A.Device.
Device).Ij===K.A2W)return;if(A._GetAutoObject(A.Device.Device).Ij===27)A._GetAutoObject(
C.G1).Ar7(2);else if(K.A2W===27)A._GetAutoObject(C.G1).Ar7(0);K.A2W=A._GetAutoObject(
A.Device.Device).Ij;},_Init:function(aArg){var K=this.K;K.__proto__=C.AnT;A.h7++;
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