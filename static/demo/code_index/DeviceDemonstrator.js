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
);if(index.acp)throw new Error("The unit file 'DeviceDemonstrator.js' included twice!"
);index.acp=(function(){var A=index;var C={};
var Cc=[0,0];var BF=[0,0,1000,740];var EY=[200,5,577,745];var Hi=[270,69,510,389];
var I7=[605,30,975,740];var Ik=[25,25,45,41];var O0=[547,610,687,750];var PZ=[270
,390];var P0=[350,390];var CO=[350,450];var E7=[270,450];var Ls=[430,390];var P1=[
510,390];var Ks=[510,450];var N$=[430,450];var P2=[360,390];var ME=[420,390];var
SY=[420,450];var UJ=[360,450];var ZM=[335,460];var WN=[447,460];var IJ=[447,500];
var UK=[335,500];var ZN=[350,512];var WO=[430,512];var ZO=[430,592];var WQ=[350,
592];var ZP=[335,605];var ZQ=[447,605];var UL=[447,665];var WR=[335,665];var Rd=[
264,504];var ZR=[344,504];var O1=[344,601];var Re=[264,601];var WS=[436,504];var
WT=[516,504];var WU=[516,601];var WV=[436,601];var ZS=[10,130,210,310];var WW="1";
var WX="2";var SZ="3";
C.A4y={Bfw:null,Background:null,Ab4:null,AkD:null,Agl:null,Am:null,Zy:null,SP:null
,Zz:null,ZB:null,ZA:null,WH:null,ZC:null,WA:null,WF:null,WG:null,AaY:null,Dj:null
,Init:function(aArg){A._GetAutoObject(A.Device.Device).ArA(A._NewObject(A.Device.
Transponder,0));},DriveCursorHitting:function(S3,BG,E9){var AJR=this.AOk();if(!!
AJR){var A1O=AJR.M;A1O=A.abJ(A1O,AJR.Bim(Cc));if(!A.wa(A1O,E9))this.AB$(AJR);}return A.
Core.Root.DriveCursorHitting.call(this,S3,BG,E9);},Bn_:function(G){var K=this.K;
this.Device.UpdateActiveScreen(3);K.AkD.Ar(false);},Ns:function(G){var K=this.K;
var B;var D1=(A.Core.Bn.isPrototypeOf(G)?G:null);var Ait=0;if(D1===K.ZA)Ait=27;else
if(D1===K.Zz)Ait=26;else if(D1===K.ZB)Ait=28;else if(D1===K.WF)Ait=6;else if(D1===
K.WG)Ait=7;else if(D1===K.WH)Ait=4;else if(D1===K.WA)Ait=5;else if(D1===K.ZC)Ait=
1;if(!!D1){if((D1.Down&&(D1.Jg>0))&&(D1.Jg<400))return;var Byd=this.AW;this.Bb(this.
GC);this.Ie().DriveKeyboardHitting(Ait,0x00,D1.Down);this.Bb(Byd);K.SP.H(A.abM(K.
SP.M,D1.HW[0]-((((B=K.SP.M)[2]-B[0])/2)|0)));K.SP.H(A.abO(K.SP.M,D1.HW[1]-((((B=
K.SP.M)[3]-B[1])/2)|0)));K.Zy.Ar(true);}},AiC:function(G){var K=this.K;var B;var
Jq=(A.Core.BL.isPrototypeOf(G)?G:null);if((String.fromCharCode(Jq.DM).toLowerCase(
).charCodeAt(0)||0)===0x73)A._GetAutoObject(C.K_).Bet(this);else if((String.fromCharCode(
Jq.DM).toLowerCase().charCodeAt(0)||0)===0x74)A._GetAutoObject(A.Device.Helper).
AKy(this);else if((String.fromCharCode(Jq.DM).toLowerCase().charCodeAt(0)||0)===
0x64)this.Bb(this.GC);else if((String.fromCharCode(Jq.DM).toLowerCase().charCodeAt(
0)||0)===0x63)this.Bb(K.Agl);else if(Jq.CN===152){if(this.AW===K.Agl)this.Bb(this.
GC);else this.Bb(K.Agl);}else if(this.AW===this.GC){if(Jq.CN===11){this.Ie().DriveKeyboardHitting(
26,0x00,true);this.Ie().DriveKeyboardHitting(26,0x00,false);}else if(Jq.CN===12){
this.Ie().DriveKeyboardHitting(27,0x00,true);this.Ie().DriveKeyboardHitting(27,0x00
,false);}else if(Jq.CN===13){this.Ie().DriveKeyboardHitting(28,0x00,true);this.Ie(
).DriveKeyboardHitting(28,0x00,false);}}},_Init:function(aArg){var K=this.K;A.acg.
Am._Init.call(K.Background={I:this},0);A.acg.Am._Init.call(K.Ab4={I:this},0);A.Core.
Timer._Init.call(K.AkD={I:this},0);A.acw.AT1._Init.call(K.Agl={I:this},0);A.acg.
Am._Init.call(K.Am={I:this},0);A.acl.AMS._Init.call(K.Zy={I:this},0);A.acg.Am._Init.
call(K.SP={I:this},0);A.Core.Bn._Init.call(K.Zz={I:this},0);A.Core.Bn._Init.call(
K.ZB={I:this},0);A.Core.Bn._Init.call(K.ZA={I:this},0);A.Core.Bn._Init.call(K.WH={
I:this},0);A.Core.Bn._Init.call(K.ZC={I:this},0);A.Core.Bn._Init.call(K.WA={I:this
},0);A.Core.Bn._Init.call(K.WF={I:this},0);A.Core.Bn._Init.call(K.WG={I:this},0);
A.acw.AaY._Init.call(K.AaY={I:this},0);A.Core.BL._Init.call(K.Dj={I:this},0);K.__proto__=
C.A4y;var B;this.H(BF);K.Background.H(BF);K.Ab4.H(EY);this.GC.H(Hi);K.AkD.PN(2000
);K.AkD.Ar(true);K.Agl.H(I7);K.Am.H(Ik);K.Zy.AkF=true;K.Zy.Wo(9);K.Zy.HI(1);K.Zy.
Fi(300);K.Zy.B3=0xA0FFFFFF;K.Zy.Cu=0x00FFFFFF;K.SP.H(O0);K.SP.L(0x00FFFFFF);K.Zz.
Kj(PZ);K.Zz.Ki(P0);K.Zz.DI(CO);K.Zz.DY(E7);K.ZB.Kj(Ls);K.ZB.Ki(P1);K.ZB.DI(Ks);K.
ZB.DY(N$);K.ZA.Kj(P2);K.ZA.Ki(ME);K.ZA.DI(SY);K.ZA.DY(UJ);K.WH.Kj(ZM);K.WH.Ki(WN
);K.WH.DI(IJ);K.WH.DY(UK);K.ZC.Kj(ZN);K.ZC.Ki(WO);K.ZC.DI(ZO);K.ZC.DY(WQ);K.WA.Kj(
ZP);K.WA.Ki(ZQ);K.WA.DI(UL);K.WA.DY(WR);K.WF.Kj(Rd);K.WF.Ki(ZR);K.WF.DI(O1);K.WF.
DY(Re);K.WG.Kj(WS);K.WG.Ki(WT);K.WG.DI(WU);K.WG.DY(WV);K.AaY.H(ZS);this.J(K.Background
,-1);this.J(K.Ab4,-1);this.J(K.Agl,0);this.J(K.Am,0);this.J(K.SP,0);this.J(K.Zz,
0);this.J(K.ZB,0);this.J(K.ZA,0);this.J(K.WH,0);this.J(K.ZC,0);this.J(K.WA,0);this.
J(K.WF,0);this.J(K.WG,0);this.J(K.AaY,0);K.Background.Ax(A.aaL(A.acw.Background)
);K.Ab4.Ax(A.aaL(A.acx.Ab4));K.AkD.Mv=[this,K.Bn_];K.Am.Ax(A.aaL(A.acw.ARb));K.Zy.
Q=[B=K.SP,B.BjQ,B.L];K.SP.Ax(A.aaL(A.acx.AQU));K.Zz.Ll=[this,K.Ns];K.Zz.BM=[this
,K.Ns];K.ZB.Ll=[this,K.Ns];K.ZB.BM=[this,K.Ns];K.ZA.Ll=[this,K.Ns];K.ZA.BM=[this
,K.Ns];K.WH.DX=[this,K.Ns];K.WH.Ll=[this,K.Ns];K.WH.BM=[this,K.Ns];K.ZC.Ll=[this
,K.Ns];K.ZC.BM=[this,K.Ns];K.WA.DX=[this,K.Ns];K.WA.Ll=[this,K.Ns];K.WA.BM=[this
,K.Ns];K.WF.DX=[this,K.Ns];K.WF.Ll=[this,K.Ns];K.WF.BM=[this,K.Ns];K.WG.DX=[this
,K.Ns];K.WG.Ll=[this,K.Ns];K.WG.BM=[this,K.Ns];K.AaY.AbT([B=A._GetAutoObject(A.Device.
Helper),B.UP,B.UQ]);K.Dj.BM=[this,K.AiC];K.Bfw=A._GetAutoObject(A.acr.Aca);K.Init.
call(this,aArg);A.h7++;},_Done:function(){var K=this.K;K.__proto__=null;K.Background.
_Done();K.Ab4._Done();K.AkD._Done();K.Agl._Done();K.Am._Done();K.Zy._Done();K.SP.
_Done();K.Zz._Done();K.ZB._Done();K.ZA._Done();K.WH._Done();K.ZC._Done();K.WA._Done(
);K.WF._Done();K.WG._Done();K.AaY._Done();K.Dj._Done();A.h7--;},_ReInit:function(
){var K=this.K;K.Background._ReInit();K.Ab4._ReInit();K.AkD._ReInit();K.Agl._ReInit(
);K.Am._ReInit();K.Zy._ReInit();K.SP._ReInit();K.Zz._ReInit();K.ZB._ReInit();K.ZA.
_ReInit();K.WH._ReInit();K.ZC._ReInit();K.WA._ReInit();K.WF._ReInit();K.WG._ReInit(
);K.AaY._ReInit();K.Dj._ReInit();},_Mark:function(D){var B;if((B=this.Bfw)&&(B._cycle
!=D))B._Mark(B._cycle=D);if((B=this.Background)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Ab4)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AkD)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Agl)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Am)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Zy)._cycle!=D)B._Mark(B._cycle=D);if((B=this.SP)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.Zz)._cycle!=D)B._Mark(B._cycle=D);if((B=this.ZB
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.ZA)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.WH)._cycle!=D)B._Mark(B._cycle=D);if((B=this.ZC)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.WA)._cycle!=D)B._Mark(B._cycle=D);if((B=this.WF)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.WG)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AaY)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.Dj)._cycle!=D)B._Mark(B._cycle=D);},_variants:function(
){return this;},_className:"DeviceDemonstrator::ApplicationDemonstration"};C.DeviceClass={
AJm:null,Au4:null,Auj:null,Init:function(aArg){var K=this.K;var B;A.zV([this,K.BjC
],this.Ao,0);A.zX([this,K.BlQ],[B=K.AJm,B.A8K,B.A9Z],0);A.zX([this,K.BkU],[B=K.AJm
,B.A75,B.ASk],0);},Arz:function(E){this.UpdateScanState(E);},Awp:function(E){this.
UpdateMeasureState(E);},AwD:function(E){this.UpdateTempValue(E);},Axa:function(){
this.UpdateMeasureState(1);this.UpdateTempValue(0);},Ahv:function(){var B;A._GetAutoObject(
A.Device.Helper).SG.AnG(this);this.UpdateMeasureState(0);},Ahs:function(){this.UpdateScanState(
1);},AnH:function(){this.UpdateScanState(0);},ArA:function(E){this.UpdateScanTransponder(
E.Id,E.TransponderType,E.TransponderProtocol);if(this.ScanState!==1)return;this.
UpdateScanState(2);},BlQ:function(G){var K=this.K;var Alp=A._GetAutoObject(C.K_).
AF5;if(Alp<0)K.Au4=null;else{K.Au4=A._NewObject(A.Device.Int32FilterCriterion,0);
K.Au4.Initialize(2,0,Alp,true);}A.pe([this,K.Bl],this);},BkU:function(G){var K=this.
K;var Bfn=A._GetAutoObject(C.K_).AA$;if(Bfn<=0)K.Auj=null;else{K.Auj=A._NewObject(
A.Device.Int32FilterCriterion,0);K.Auj.Initialize(1,4,Bfn,false);}A.pe([this,K.Bl
],this);},Bl:function(G){var K=this.K;var Be=A._GetAutoObject(A.Device.Helper).Mm(
);Be.CV(K.Au4);Be.CV(K.Auj);A._GetAutoObject(C.ApZ).Bl(Be);},BjC:function(G){var
K=this.K;A.pe([this,K.Bl],this);},_Init:function(aArg){var K=this.K;A.acr.DeviceClass.
_Init.call(this,aArg);K.__proto__=C.DeviceClass;this.PM(4);this.Awy(276034580109999
);K.AJm=A._GetAutoObject(C.K_);K.Init.call(this,aArg);},_Mark:function(D){var B;
A.acr.DeviceClass._Mark.call(this,D);if((B=this.AJm)&&(B._cycle!=D))B._Mark(B._cycle=
D);if((B=this.Au4)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Auj)&&(B._cycle
!=D))B._Mark(B._cycle=D);},_variants:function(){return this;},_className:"DeviceDemonstrator::DeviceClass"
};C.Us={_Init:function(){A.acr.Us._Init.call(this,0);this.ASY(false);this.ASZ(false
);},_ReInit:function(){A.acr.Us._ReInit.call(this,0);},_variants:function(){return this;
},_this:null};C.A5w={TransponderId:0,AF5:0,AA$:0,Ar5:null,Wz:3950,AwW:true,A9Z:function(
E){if(this.AF5===E)return;this.AF5=E;A.abo([this,this.A8K,this.A9Z],0);},A8K:function(
){return this.AF5;},ASk:function(E){if(this.AA$===E)return;this.AA$=E;A.abo([this
,this.A75,this.ASk],0);},A75:function(){return this.AA$;},Bet:function(G){this.AAG(
this.TransponderId);},NX:function(E){if(this.TransponderId===E)return;this.TransponderId=
E;A.abo([this,this.Aka,this.NX],0);},A90:function(E){if(this.Ar5===E)return;this.
Ar5=E;A.abo([this,this.A8L,this.A90],0);},A8L:function(){return this.Ar5;},AAG:function(
I9){var B;var Jv=false;if((A._GetAutoObject(A.Device.Device).ScanState===1)&&!!I9
){A._GetAutoObject(A.Device.Device).OP.AS$(1);A._GetAutoObject(A.Device.Device).
OP.OnSetId(I9);A._GetAutoObject(A.Device.Device).OP.AS_(2);A._GetAutoObject(A.Device.
Device).Arz(2);A.abo([B=A._GetAutoObject(A.Device.Device),B.ASa,B.AZQ],0);Jv=true;
}return Jv;},AST:function(E){if(this.AwW===E)return;this.AwW=E;A.abo([this,this.
AR9,this.AST],0);},AFi:function(E){if(this.Wz===E)return;this.Wz=E;A.abo([this,this.
Bkt,this.AFi],0);},Bee:function(G){var B;if(this.AwW)A._GetAutoObject(A.Device.Helper
).AKy(this);else A._GetAutoObject(A.Device.Helper).Bcm(this.Wz);},Aka:function(){
return this.TransponderId;},AR9:function(){return this.AwW;},Bkt:function(){return this.
Wz;},_Init:function(aArg){this.__proto__=C.A5w;this.Ar5=A.acw.AL6;A.h7++;},_Done:
function(){this.__proto__=null;A.h7--;},_ReInit:function(){},_Mark:function(D){var
B;if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:
null,_className:"DeviceDemonstrator::DemonstrationConfigClass"};C.K_={_Init:function(
){C.A5w._Init.call(this,0);},_ReInit:function(){},_variants:function(){return this;
},_this:null};C.ApZ={_Init:function(){A.Device.Table._Init.call(this,0);this.OnSetId(
0);},_ReInit:function(){},_variants:function(){return this;},_this:null};C.A5x={
Ahp:A.jV,Delete:function(){this.AFd(A.abV(this.Ahp,this.Ahp.length-1));},E1:function(
AcJ){if(!this.Ahp.length&&(AcJ===0x30))return;if(this.Ahp.length<6)this.AFd(this.
Ahp+String.fromCharCode(AcJ));},AFd:function(E){if(this.Ahp===E)return;this.Ahp=
E;A.abo([this,this.A8I,this.AFd],0);A._GetAutoObject(C.K_).ASk(A.wz(this.Ahp,-1,
10));},A8I:function(){return this.Ahp;},_Init:function(aArg){this.__proto__=C.A5x;
A.h7++;},_Done:function(){this.__proto__=null;A.h7--;},_ReInit:function(){},_Mark:
function(D){var B;if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:
0,_observers:null,_className:"DeviceDemonstrator::DemonstrationSearchHelperClass"
};C.Agu={_Init:function(){C.A5x._Init.call(this,0);},_ReInit:function(){},_variants:
function(){return this;},_this:null};C.PP={AJv:function(G){var Ac=A._GetAutoObject(
A.Device.Helper).Dw();this.AZ(276000312341001,2,1,Ac-1382400,0,1,false,false,false
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
AF);},AJx:function(G){var Ac=A._GetAutoObject(A.Device.Helper).Dw();this.AG(Ac-3542400
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
,276000312343007,3730,3,0,0,0,0,0);},AJu:function(G){this.Alr(1,WW);this.Alr(2,WX
);this.Alr(3,SZ);},AJw:function(G){this.Aai(2016,216,11);this.Aai(2017,217,10);this.
Aai(2018,218,9);this.Aai(2019,219,8);this.Aai(2020,220,7);this.Aai(2021,221,6);}
,_Init:function(aArg){var K=this.K;K.__proto__=C.PP;A.h7++;},_Done:function(){var
K=this.K;K.__proto__=null;A.h7--;},_ReInit:function(){},_Mark:function(D){},_variants:
function(){return this;},_className:"DeviceDemonstrator::TableData"};
C._Init=function(){C.DeviceClass.__proto__=A.acr.DeviceClass;};C._ReInit=function(
){var B;if((B=C.Us._this))B._ReInit(),C.Us._ReInit.call(B);if((B=C.K_._this))B._ReInit(
),C.K_._ReInit.call(B);if((B=C.ApZ._this))B._ReInit(),C.ApZ._ReInit.call(B);if((
B=C.Agu._this))B._ReInit(),C.Agu._ReInit.call(B);};C.DE=function(D){var B;if((B=
C.Us._this)&&(B._cycle!=D))B._Done(C.Us._this=null);if((B=C.K_._this)&&(B._cycle
!=D))B._Done(C.K_._this=null);if((B=C.ApZ._this)&&(B._cycle!=D))B._Done(C.ApZ._this=
null);if((B=C.Agu._this)&&(B._cycle!=D))B._Done(C.Agu._this=null);};return C;})(
);

/* VitalControl demonstration application, © Urban GmbH & Co.KG 2023 */