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
var Cf=[0,0];var BD=[0,0,1000,740];var E8=[200,5,577,745];var Hs=[270,69,510,389];
var I0=[605,30,975,740];var Iw=[25,25,45,41];var O$=[547,610,687,750];var Qb=[270
,390];var Qc=[350,390];var CR=[350,450];var Fe=[270,450];var L9=[430,390];var Qd=[
510,390];var J9=[510,450];var Oh=[430,450];var Qe=[360,390];var MQ=[420,390];var
Te=[420,450];var U0=[360,450];var Aab=[335,460];var Xe=[447,460];var Ix=[447,500
];var U1=[335,500];var Aac=[350,512];var U2=[430,512];var Aad=[430,592];var Xf=[
350,592];var Aae=[335,605];var Aaf=[447,605];var U3=[447,665];var Xg=[335,665];var
Pa=[264,504];var Aag=[344,504];var Oi=[344,601];var Rp=[264,601];var Xh=[436,504
];var Xi=[516,504];var Tf=[516,601];var Xj=[436,601];var Aah=[10,130,210,310];var
Xk="%d%m%Y";var Xl="0";var Tg="1";var Th="2";var Ti="3";
C.A5F={BgT:null,Background:null,Acn:null,AkX:null,AgG:null,Ap:null,Z0:null,S7:null
,Z1:null,Z3:null,Z2:null,W$:null,Z4:null,W5:null,W9:null,W_:null,Abn:null,Do:null
,Init:function(aArg){var K=this.K;var B;A._GetAutoObject(A.Device.Device).Asa(A.
_NewObject(A.Device.Transponder,0));A.zX([this,K.AKS],[B=A._GetAutoObject(C.GM),
B.AEZ,B.Asb],0);},DriveCursorHitting:function(Tl,BH,Fg){var AAb=this.AO1();if(!!
AAb){var A2R=AAb.M;A2R=A.abJ(A2R,AAb.BjV(Cf));if(!A.wa(A2R,Fg)){this.ACY(AAb);AAb.
Cs(0x10,0x0);}}return A.Core.Root.DriveCursorHitting.call(this,Tl,BH,Fg);},BpJ:function(
G){var K=this.K;this.Device.UpdateActiveScreen(3);K.AkX.As(false);},NJ:function(
G){var K=this.K;var B;var D5=(A.Core.Bn.isPrototypeOf(G)?G:null);var AiL=0;if(D5===
K.Z2)AiL=27;else if(D5===K.Z1)AiL=26;else if(D5===K.Z3)AiL=28;else if(D5===K.W9)
AiL=6;else if(D5===K.W_)AiL=7;else if(D5===K.W$)AiL=4;else if(D5===K.W5)AiL=5;else
if(D5===K.Z4)AiL=1;if(!!D5){if((D5.Down&&(D5.Jy>0))&&(D5.Jy<400))return;var BzL=
this.AV;this.Bb(this.GK);this.Iq().DriveKeyboardHitting(AiL,0x00,D5.Down);this.Bb(
BzL);K.S7.H(A.abM(K.S7.M,D5.H5[0]-((((B=K.S7.M)[2]-B[0])/2)|0)));K.S7.H(A.abO(K.
S7.M,D5.H5[1]-((((B=K.S7.M)[3]-B[1])/2)|0)));K.Z0.As(true);}},AiS:function(G){var
K=this.K;var B;var JH=(A.Core.BF.isPrototypeOf(G)?G:null);if((String.fromCharCode(
JH.Dy).toLowerCase().charCodeAt(0)||0)===0x73)A._GetAutoObject(C.GM).BfI(this);else
if((String.fromCharCode(JH.Dy).toLowerCase().charCodeAt(0)||0)===0x74)A._GetAutoObject(
A.Device.Helper).ALi(this);else if((String.fromCharCode(JH.Dy).toLowerCase().charCodeAt(
0)||0)===0x64)this.Bb(this.GK);else if((String.fromCharCode(JH.Dy).toLowerCase().
charCodeAt(0)||0)===0x63)this.Bb(K.AgG);else if(JH.CP===152){if(this.AV===K.AgG)
this.Bb(this.GK);else this.Bb(K.AgG);}else if(this.AV===this.GK){if(JH.CP===11){
this.Iq().DriveKeyboardHitting(26,0x00,true);this.Iq().DriveKeyboardHitting(26,0x00
,false);}else if(JH.CP===12){this.Iq().DriveKeyboardHitting(27,0x00,true);this.Iq(
).DriveKeyboardHitting(27,0x00,false);}else if(JH.CP===13){this.Iq().DriveKeyboardHitting(
28,0x00,true);this.Iq().DriveKeyboardHitting(28,0x00,false);}}},AKS:function(G){
A._GetAutoObject(A.acq.W0).ByB(A._GetAutoObject(C.GM).Afl===2);},_Init:function(
aArg){var K=this.K;A.acg.Ap._Init.call(K.Background={I:this},0);A.acg.Ap._Init.call(
K.Acn={I:this},0);A.Core.Timer._Init.call(K.AkX={I:this},0);A.acw.AUY._Init.call(
K.AgG={I:this},0);A.acg.Ap._Init.call(K.Ap={I:this},0);A.acl.ANB._Init.call(K.Z0={
I:this},0);A.acg.Ap._Init.call(K.S7={I:this},0);A.Core.Bn._Init.call(K.Z1={I:this
},0);A.Core.Bn._Init.call(K.Z3={I:this},0);A.Core.Bn._Init.call(K.Z2={I:this},0);
A.Core.Bn._Init.call(K.W$={I:this},0);A.Core.Bn._Init.call(K.Z4={I:this},0);A.Core.
Bn._Init.call(K.W5={I:this},0);A.Core.Bn._Init.call(K.W9={I:this},0);A.Core.Bn._Init.
call(K.W_={I:this},0);A.acw.Abn._Init.call(K.Abn={I:this},0);A.Core.BF._Init.call(
K.Do={I:this},0);K.__proto__=C.A5F;var B;this.H(BD);K.Background.H(BD);K.Acn.H(E8
);this.GK.H(Hs);K.AkX.PZ(2000);K.AkX.As(true);K.AgG.H(I0);K.Ap.H(Iw);K.Z0.AkZ=true;
K.Z0.WR(9);K.Z0.HQ(1);K.Z0.Fq(300);K.Z0.B3=0xA0FFFFFF;K.Z0.Cx=0x00FFFFFF;K.S7.H(
O$);K.S7.L(0x00FFFFFF);K.Z1.J1(Qb);K.Z1.KA(Qc);K.Z1.DD(CR);K.Z1.DN(Fe);K.Z3.J1(L9
);K.Z3.KA(Qd);K.Z3.DD(J9);K.Z3.DN(Oh);K.Z2.J1(Qe);K.Z2.KA(MQ);K.Z2.DD(Te);K.Z2.DN(
U0);K.W$.J1(Aab);K.W$.KA(Xe);K.W$.DD(Ix);K.W$.DN(U1);K.Z4.J1(Aac);K.Z4.KA(U2);K.
Z4.DD(Aad);K.Z4.DN(Xf);K.W5.J1(Aae);K.W5.KA(Aaf);K.W5.DD(U3);K.W5.DN(Xg);K.W9.J1(
Pa);K.W9.KA(Aag);K.W9.DD(Oi);K.W9.DN(Rp);K.W_.J1(Xh);K.W_.KA(Xi);K.W_.DD(Tf);K.W_.
DN(Xj);K.Abn.H(Aah);this.J(K.Background,-1);this.J(K.Acn,-1);this.J(K.AgG,0);this.
J(K.Ap,0);this.J(K.S7,0);this.J(K.Z1,0);this.J(K.Z3,0);this.J(K.Z2,0);this.J(K.W$
,0);this.J(K.Z4,0);this.J(K.W5,0);this.J(K.W9,0);this.J(K.W_,0);this.J(K.Abn,0);
K.Background.Ax(A.aaL(A.acw.Background));K.Acn.Ax(A.aaL(A.acx.Acn));K.AkX.MJ=[this
,K.BpJ];K.Ap.Ax(A.aaL(A.acw.AR8));K.Z0.Q=[B=K.S7,B.Bll,B.L];K.S7.Ax(A.aaL(A.acx.
ARO));K.Z1.Lt=[this,K.NJ];K.Z1.BG=[this,K.NJ];K.Z3.Lt=[this,K.NJ];K.Z3.BG=[this,
K.NJ];K.Z2.Lt=[this,K.NJ];K.Z2.BG=[this,K.NJ];K.W$.D1=[this,K.NJ];K.W$.Lt=[this,
K.NJ];K.W$.BG=[this,K.NJ];K.Z4.Lt=[this,K.NJ];K.Z4.BG=[this,K.NJ];K.W5.D1=[this,
K.NJ];K.W5.Lt=[this,K.NJ];K.W5.BG=[this,K.NJ];K.W9.D1=[this,K.NJ];K.W9.Lt=[this,
K.NJ];K.W9.BG=[this,K.NJ];K.W_.D1=[this,K.NJ];K.W_.Lt=[this,K.NJ];K.W_.BG=[this,
K.NJ];K.Abn.Acb([B=A._GetAutoObject(A.Device.Helper),B.U9,B.Va]);K.Do.BG=[this,K.
AiS];K.BgT=A._GetAutoObject(A.acq.W0);K.Init.call(this,aArg);A.h7++;},_Done:function(
){var K=this.K;K.__proto__=null;K.Background._Done();K.Acn._Done();K.AkX._Done();
K.AgG._Done();K.Ap._Done();K.Z0._Done();K.S7._Done();K.Z1._Done();K.Z3._Done();K.
Z2._Done();K.W$._Done();K.Z4._Done();K.W5._Done();K.W9._Done();K.W_._Done();K.Abn.
_Done();K.Do._Done();A.h7--;},_ReInit:function(){var K=this.K;K.Background._ReInit(
);K.Acn._ReInit();K.AkX._ReInit();K.AgG._ReInit();K.Ap._ReInit();K.Z0._ReInit();
K.S7._ReInit();K.Z1._ReInit();K.Z3._ReInit();K.Z2._ReInit();K.W$._ReInit();K.Z4.
_ReInit();K.W5._ReInit();K.W9._ReInit();K.W_._ReInit();K.Abn._ReInit();K.Do._ReInit(
);},_Mark:function(D){var B;if((B=this.BgT)&&(B._cycle!=D))B._Mark(B._cycle=D);if((
B=this.Background)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Acn)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.AkX)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AgG)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.Ap)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
Z0)._cycle!=D)B._Mark(B._cycle=D);if((B=this.S7)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Z1)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Z3)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Z2)._cycle!=D)B._Mark(B._cycle=D);if((B=this.W$)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Z4)._cycle!=D)B._Mark(B._cycle=D);if((B=this.W5)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.W9)._cycle!=D)B._Mark(B._cycle=D);if((B=this.W_
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Abn)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Do)._cycle!=D)B._Mark(B._cycle=D);},_variants:function(){return this;},_className:
"DeviceDemonstrator::ApplicationDemonstration"};C.DeviceClass={AJ7:null,AvC:null
,AuU:null,Init:function(aArg){var K=this.K;var B;A.zV([this,K.Bk8],this.An,0);A.
zX([this,K.Bng],[B=K.AJ7,B.A9C,B.A_1],0);A.zX([this,K.Bmt],[B=K.AJ7,B.A8V,B.ATf]
,0);},Ar$:function(E){this.UpdateScanState(E);},Aw1:function(E){this.UpdateMeasureState(
E);},Axd:function(E){this.UpdateTempValue(E);},AxP:function(){this.UpdateMeasureState(
1);this.UpdateTempValue(0);},AhP:function(){var B;A._GetAutoObject(A.Device.Helper
).SZ.An3(this);this.UpdateMeasureState(0);},AhM:function(){this.UpdateScanState(
1);},An4:function(){this.UpdateScanState(0);},Asa:function(E){this.UpdateScanTransponder(
E.Id,E.TransponderType,E.TransponderProtocol);if(this.ScanState!==1)return;this.
UpdateScanState(2);},Bng:function(G){var K=this.K;var AlR=A._GetAutoObject(C.GM).
AGP;if(AlR<0)K.AvC=null;else{K.AvC=A._NewObject(A.Device.Int32FilterCriterion,0);
K.AvC.Initialize(2,0,AlR,true);}A.pe([this,K.Bk],this);},Bmt:function(G){var K=this.
K;var BgH=A._GetAutoObject(C.GM).AB1;if(BgH<=0)K.AuU=null;else{K.AuU=A._NewObject(
A.Device.Int32FilterCriterion,0);K.AuU.Initialize(1,4,BgH,false);}A.pe([this,K.Bk
],this);},Bk:function(G){var K=this.K;var Bf=A._GetAutoObject(A.Device.Helper).MB(
);Bf.CX(K.AvC);Bf.CX(K.AuU);A._GetAutoObject(C.Aqn).Bk(Bf);},Bk8:function(G){var
K=this.K;A.pe([this,K.Bk],this);},_Init:function(aArg){var K=this.K;A.acq.DeviceClass.
_Init.call(this,aArg);K.__proto__=C.DeviceClass;this.OU(4);this.Aw_(276034580109999
);K.AJ7=A._GetAutoObject(C.GM);K.Init.call(this,aArg);},_Mark:function(D){var B;
A.acq.DeviceClass._Mark.call(this,D);if((B=this.AJ7)&&(B._cycle!=D))B._Mark(B._cycle=
D);if((B=this.AvC)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.AuU)&&(B._cycle
!=D))B._Mark(B._cycle=D);},_variants:function(){return this;},_className:"DeviceDemonstrator::DeviceClass"
};C.UJ={_Init:function(){A.acq.UJ._Init.call(this,0);this.ATV(false);this.ATW(false
);},_ReInit:function(){A.acq.UJ._ReInit.call(this,0);},_variants:function(){return this;
},_this:null};C.A6s={AGM:0,AGP:0,AB1:0,AsG:null,W4:3950,Afl:0,Axy:true,A_1:function(
E){if(this.AGP===E)return;this.AGP=E;A.abo([this,this.A9C,this.A_1],0);},A9C:function(
){return this.AGP;},ATf:function(E){if(this.AB1===E)return;this.AB1=E;A.abo([this
,this.A8V,this.ATf],0);},A8V:function(){return this.AB1;},BfI:function(G){this.BgS(
this.AGM);},A_Z:function(E){if(this.AGM===E)return;this.AGM=E;A.abo([this,this.BlW
,this.A_Z],0);},A_2:function(E){if(this.AsG===E)return;this.AsG=E;A.abo([this,this.
A9D,this.A_2],0);},A9D:function(){return this.AsG;},BgS:function(IA){var B;var Im=
false;if((A._GetAutoObject(A.Device.Device).ScanState===1)&&!!IA){A._GetAutoObject(
A.Device.Device).O0.AT8(1);A._GetAutoObject(A.Device.Device).O0.OnSetId(IA);A._GetAutoObject(
A.Device.Device).O0.AT7(2);A._GetAutoObject(A.Device.Device).Ar$(2);A.abo([B=A._GetAutoObject(
A.Device.Device),B.AS5,B.A0R],0);Im=true;}return Im;},ATQ:function(E){if(this.Axy===
E)return;this.Axy=E;A.abo([this,this.AS2,this.ATQ],0);},AF5:function(E){if(this.
W4===E)return;this.W4=E;A.abo([this,this.Bl2,this.AF5],0);},Bft:function(G){var B;
if(this.Axy)A._GetAutoObject(A.Device.Helper).ALi(this);else A._GetAutoObject(A.
Device.Helper).Bdz(this.W4);},BCy:function(Bxq){var AtI=Bxq.toFixed();AtI=AtI+A.
_GetAutoObject(A.acj.VN).ADg(AtI).toFixed();var O;for(O=0;O<AtI.length;O++){A.aam(
).DriveKeyboardHitting(0,AtI.charCodeAt(O)||0,true);A.aam().DriveKeyboardHitting(
0,AtI.charCodeAt(O)||0,false);}A.aam().DriveKeyboardHitting(0,0x0D,true);A.aam().
DriveKeyboardHitting(0,0x0D,false);return true;},Asb:function(E){if(this.Afl===E
)return;this.Afl=E;A.abo([this,this.AEZ,this.Asb],0);},BCz:function(Aza){var Av=
A._NewObject(A.Core.Bs,0);Av.Initialize(Aza);var JI=Av.Format(Xk)+Xl;JI=JI+A._GetAutoObject(
A.acj.VN).ADg(JI).toFixed();var O;for(O=0;O<JI.length;O++){A.aam().DriveKeyboardHitting(
0,JI.charCodeAt(O)||0,true);A.aam().DriveKeyboardHitting(0,JI.charCodeAt(O)||0,false
);}A.aam().DriveKeyboardHitting(149,0x00,true);A.aam().DriveKeyboardHitting(149,
0x00,false);return true;},BlW:function(){return this.AGM;},AS2:function(){return this.
Axy;},Bl2:function(){return this.W4;},AEZ:function(){return this.Afl;},_Init:function(
aArg){this.__proto__=C.A6s;this.AsG=A.acw.AMO;A.h7++;},_Done:function(){this.__proto__=
null;A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((B=this.I)&&(B._cycle
!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:"DeviceDemonstrator::DemonstrationConfigClass"
};C.GM={_Init:function(){C.A6s._Init.call(this,0);},_ReInit:function(){},_variants:
function(){return this;},_this:null};C.Aqn={_Init:function(){A.Device.Table._Init.
call(this,0);this.OnSetId(0);},_ReInit:function(){},_variants:function(){return this;
},_this:null};C.A6t={AhJ:A.jV,Delete:function(){this.AF0(A.abV(this.AhJ,this.AhJ.
length-1));},Ez:function(Ac3){if(!this.AhJ.length&&(Ac3===0x30))return;if(this.AhJ.
length<6)this.AF0(this.AhJ+String.fromCharCode(Ac3));},AF0:function(E){if(this.AhJ===
E)return;this.AhJ=E;A.abo([this,this.A9A,this.AF0],0);A._GetAutoObject(C.GM).ATf(
A.wz(this.AhJ,-1,10));},A9A:function(){return this.AhJ;},_Init:function(aArg){this.
__proto__=C.A6t;A.h7++;},_Done:function(){this.__proto__=null;A.h7--;},_ReInit:function(
){},_Mark:function(D){var B;if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:
null,_cycle:0,_observers:null,_className:"DeviceDemonstrator::DemonstrationSearchHelperClass"
};C.AgQ={_Init:function(){C.A6t._Init.call(this,0);},_ReInit:function(){},_variants:
function(){return this;},_this:null};C.P2={AKf:function(G){var Ac=A._GetAutoObject(
A.Device.Helper).Dv();this.A2(276000312341001,2,1,Ac-1382400,0,1,false,false,false
,true,40800,0,0,false,0,false,1,1,1,0,true,true,A._GetAutoObject(A.Device.Device
).A3,A._GetAutoObject(A.Device.Device).AF);this.A2(276000312341002,2,1,Ac-1296000
,0,1,false,false,false,true,38300,0,0,false,0,false,1,1,1,0,true,true,A._GetAutoObject(
A.Device.Device).A3,A._GetAutoObject(A.Device.Device).AF);this.A2(276000312341003
,2,1,Ac-1209600,0,1,false,false,false,true,37600,0,0,false,0,false,1,1,1,0,true,
true,A._GetAutoObject(A.Device.Device).A3,A._GetAutoObject(A.Device.Device).AF);
this.A2(276000312341004,2,1,Ac-1123200,0,1,false,false,false,true,40600,0,0,false
,0,false,1,1,1,0,true,true,A._GetAutoObject(A.Device.Device).A3,A._GetAutoObject(
A.Device.Device).AF);this.A2(276000312341005,2,1,Ac-9504000,0,1,false,false,false
,true,36900,0,0,false,0,false,1,1,1,0,true,true,A._GetAutoObject(A.Device.Device
).A3,A._GetAutoObject(A.Device.Device).AF);this.A2(276000312341006,2,1,Ac-950400
,0,1,false,false,false,true,38000,0,0,false,0,false,1,1,1,0,true,true,A._GetAutoObject(
A.Device.Device).A3,A._GetAutoObject(A.Device.Device).AF);this.A2(276000312341007
,2,1,Ac-864000,0,1,false,false,false,true,39200,0,0,false,0,false,1,1,1,276000312343007
,true,true,A._GetAutoObject(A.Device.Device).A3,A._GetAutoObject(A.Device.Device
).AF);this.A2(276000312341008,2,1,Ac-777600,0,1,false,false,false,true,36500,0,0
,false,0,false,1,1,1,276000312343409,true,true,A._GetAutoObject(A.Device.Device).
A3,A._GetAutoObject(A.Device.Device).AF);this.A2(276000312341009,2,1,Ac-691200,0
,1,false,false,false,true,40900,0,0,false,0,false,1,1,1,276000312343308,true,true
,A._GetAutoObject(A.Device.Device).A3,A._GetAutoObject(A.Device.Device).AF);this.
A2(276000312341010,2,1,Ac-604800,0,1,false,false,false,true,40900,0,0,false,0,false
,1,1,1,276000312343420,true,true,A._GetAutoObject(A.Device.Device).A3,A._GetAutoObject(
A.Device.Device).AF);this.A2(276000312341011,2,1,Ac-518400,0,1,false,false,false
,true,39200,0,0,false,0,false,1,1,1,276000312343065,true,true,A._GetAutoObject(A.
Device.Device).A3,A._GetAutoObject(A.Device.Device).AF);this.A2(276000312341012,
2,1,Ac-432000,0,1,false,false,false,true,38100,0,0,false,0,false,1,1,1,276000312343232
,true,true,A._GetAutoObject(A.Device.Device).A3,A._GetAutoObject(A.Device.Device
).AF);this.A2(276000312341013,2,1,Ac-345600,0,1,false,false,false,true,37700,0,0
,false,0,true,1,1,1,276000312343204,true,true,A._GetAutoObject(A.Device.Device).
A3,A._GetAutoObject(A.Device.Device).AF);this.A2(276000312341014,2,1,Ac-259200,0
,1,false,false,false,true,37200,0,0,false,0,true,1,1,1,276000312343376,true,true
,A._GetAutoObject(A.Device.Device).A3,A._GetAutoObject(A.Device.Device).AF);this.
A2(276000312341015,2,1,Ac-172800,0,1,false,false,false,true,37000,0,0,false,0,true
,1,1,1,276000312343044,true,true,A._GetAutoObject(A.Device.Device).A3,A._GetAutoObject(
A.Device.Device).AF);this.A2(276000312342001,3,1,Ac-7084800,0,0,false,false,false
,true,39500,0,0,false,0,false,1,0,2,0,true,true,A._GetAutoObject(A.Device.Device
).A3,A._GetAutoObject(A.Device.Device).AF);this.A2(276000312342002,3,1,Ac-5788800
,0,0,false,false,false,true,38800,0,0,false,0,false,1,0,2,0,true,true,A._GetAutoObject(
A.Device.Device).A3,A._GetAutoObject(A.Device.Device).AF);this.A2(276000312342003
,3,1,Ac-7084800,0,0,false,false,false,true,39600,0,0,false,0,false,1,0,2,0,true,
true,A._GetAutoObject(A.Device.Device).A3,A._GetAutoObject(A.Device.Device).AF);
this.A2(276000312342004,3,1,Ac-6652800,0,0,false,false,false,true,37400,0,0,false
,0,false,1,0,2,0,true,true,A._GetAutoObject(A.Device.Device).A3,A._GetAutoObject(
A.Device.Device).AF);this.A2(276000312342005,3,1,Ac-7084800,0,0,false,false,false
,true,39700,0,0,false,0,false,1,0,2,0,true,true,A._GetAutoObject(A.Device.Device
).A3,A._GetAutoObject(A.Device.Device).AF);this.A2(276000312342006,3,1,Ac-6998400
,0,0,false,false,false,true,40900,0,0,false,0,false,1,0,2,0,true,true,A._GetAutoObject(
A.Device.Device).A3,A._GetAutoObject(A.Device.Device).AF);this.A2(276000312342007
,3,1,Ac-6739200,0,0,false,false,false,true,38100,0,0,false,0,false,1,0,2,0,true,
true,A._GetAutoObject(A.Device.Device).A3,A._GetAutoObject(A.Device.Device).AF);
this.A2(276000312342008,3,1,Ac-7430400,0,0,false,false,false,true,37200,0,0,false
,0,false,1,0,2,0,true,true,A._GetAutoObject(A.Device.Device).A3,A._GetAutoObject(
A.Device.Device).AF);this.A2(276000312342009,3,1,Ac-6652800,0,0,false,false,false
,true,37000,0,0,false,0,false,1,0,2,0,true,true,A._GetAutoObject(A.Device.Device
).A3,A._GetAutoObject(A.Device.Device).AF);this.A2(276000312342010,3,1,Ac-7776000
,0,0,false,false,false,true,38600,0,0,false,0,false,1,0,2,0,true,true,A._GetAutoObject(
A.Device.Device).A3,A._GetAutoObject(A.Device.Device).AF);this.A2(276000312342011
,3,1,Ac-5961600,0,0,false,false,false,true,37900,0,0,false,0,false,1,0,2,0,true,
true,A._GetAutoObject(A.Device.Device).A3,A._GetAutoObject(A.Device.Device).AF);
this.A2(276000312342012,3,1,Ac-6393600,0,0,false,false,false,true,36300,0,0,false
,0,false,1,0,2,0,true,true,A._GetAutoObject(A.Device.Device).A3,A._GetAutoObject(
A.Device.Device).AF);this.A2(276000312342013,3,1,Ac-7344000,0,0,false,false,false
,true,36100,0,0,false,0,false,1,0,2,0,true,true,A._GetAutoObject(A.Device.Device
).A3,A._GetAutoObject(A.Device.Device).AF);this.A2(276000312342014,3,1,Ac-5529600
,0,0,false,false,false,true,37700,0,0,false,0,false,1,0,2,0,true,true,A._GetAutoObject(
A.Device.Device).A3,A._GetAutoObject(A.Device.Device).AF);this.A2(276000312342015
,3,1,Ac-6307200,0,0,false,false,false,true,39800,0,0,false,0,false,1,0,2,0,true,
true,A._GetAutoObject(A.Device.Device).A3,A._GetAutoObject(A.Device.Device).AF);
this.A2(276000312342016,3,1,Ac-6048000,0,0,false,false,false,true,40300,0,0,false
,0,false,1,0,2,0,true,true,A._GetAutoObject(A.Device.Device).A3,A._GetAutoObject(
A.Device.Device).AF);this.A2(276000312342017,3,1,Ac-6134400,0,0,false,false,false
,true,38400,0,0,false,0,false,1,0,2,0,true,true,A._GetAutoObject(A.Device.Device
).A3,A._GetAutoObject(A.Device.Device).AF);this.A2(276000312342018,3,1,Ac-6652800
,0,0,false,false,false,true,36300,0,0,false,0,false,1,0,2,0,true,true,A._GetAutoObject(
A.Device.Device).A3,A._GetAutoObject(A.Device.Device).AF);this.A2(276000312342019
,3,1,Ac-8467200,0,0,false,false,false,true,38700,0,0,false,0,false,1,0,2,0,true,
true,A._GetAutoObject(A.Device.Device).A3,A._GetAutoObject(A.Device.Device).AF);
this.A2(276000312342020,3,1,Ac-6998400,0,0,false,false,false,true,37300,0,0,false
,0,false,1,0,2,0,true,true,A._GetAutoObject(A.Device.Device).A3,A._GetAutoObject(
A.Device.Device).AF);this.A2(276000312342021,3,1,Ac-6652800,0,0,false,false,false
,true,38500,0,0,false,0,false,1,0,2,0,true,true,A._GetAutoObject(A.Device.Device
).A3,A._GetAutoObject(A.Device.Device).AF);this.A2(276000312342022,3,1,Ac-5788800
,0,0,false,false,false,true,37800,0,0,false,0,false,1,0,2,0,true,true,A._GetAutoObject(
A.Device.Device).A3,A._GetAutoObject(A.Device.Device).AF);this.A2(276000312342023
,3,1,Ac-6652800,0,0,false,false,false,true,37300,0,0,false,0,false,1,0,2,0,true,
true,A._GetAutoObject(A.Device.Device).A3,A._GetAutoObject(A.Device.Device).AF);
this.A2(276000312342024,3,1,Ac-6739200,0,0,false,false,false,true,37500,0,0,false
,0,false,1,0,2,0,true,true,A._GetAutoObject(A.Device.Device).A3,A._GetAutoObject(
A.Device.Device).AF);this.A2(276000312342025,3,1,Ac-7171200,0,0,false,false,false
,true,36300,0,0,false,0,false,1,0,2,0,true,true,A._GetAutoObject(A.Device.Device
).A3,A._GetAutoObject(A.Device.Device).AF);this.A2(276000312342026,3,1,Ac-7171200
,0,0,false,false,false,true,37800,0,0,false,0,false,1,0,2,0,true,true,A._GetAutoObject(
A.Device.Device).A3,A._GetAutoObject(A.Device.Device).AF);this.A2(276000312342027
,3,1,Ac-7689600,0,0,false,false,false,true,37900,0,0,false,0,false,1,0,2,0,true,
true,A._GetAutoObject(A.Device.Device).A3,A._GetAutoObject(A.Device.Device).AF);
this.A2(276000312342028,3,1,Ac-8121600,0,0,false,false,false,true,39800,0,0,false
,0,false,1,0,2,0,true,true,A._GetAutoObject(A.Device.Device).A3,A._GetAutoObject(
A.Device.Device).AF);this.A2(276000312342029,3,1,Ac-7603200,0,0,false,false,false
,true,36500,0,0,false,0,false,1,0,2,0,true,true,A._GetAutoObject(A.Device.Device
).A3,A._GetAutoObject(A.Device.Device).AF);this.A2(276000312342030,3,1,Ac-6393600
,0,0,false,false,false,true,38900,0,0,false,0,false,1,0,2,0,true,true,A._GetAutoObject(
A.Device.Device).A3,A._GetAutoObject(A.Device.Device).AF);this.A2(276000312342031
,3,1,Ac-6652800,0,0,false,false,false,true,36700,0,0,false,0,false,1,0,2,0,true,
true,A._GetAutoObject(A.Device.Device).A3,A._GetAutoObject(A.Device.Device).AF);
this.A2(276000312342032,3,1,Ac-6739200,0,0,false,false,false,true,37400,0,0,false
,0,false,1,0,2,0,true,true,A._GetAutoObject(A.Device.Device).A3,A._GetAutoObject(
A.Device.Device).AF);this.A2(276000312342033,3,1,Ac-6393600,0,0,false,false,false
,true,41000,0,0,false,0,false,1,0,2,0,true,true,A._GetAutoObject(A.Device.Device
).A3,A._GetAutoObject(A.Device.Device).AF);this.A2(276000312342034,3,1,Ac-7084800
,0,0,false,false,false,true,40500,0,0,false,0,false,1,0,2,0,true,true,A._GetAutoObject(
A.Device.Device).A3,A._GetAutoObject(A.Device.Device).AF);this.A2(276000312342035
,3,1,Ac-7171200,0,0,false,false,false,true,38200,0,0,false,0,false,1,0,2,0,true,
true,A._GetAutoObject(A.Device.Device).A3,A._GetAutoObject(A.Device.Device).AF);
this.A2(276000312342036,3,1,Ac-6480000,0,0,false,false,false,true,40000,0,0,false
,0,false,1,0,2,0,true,true,A._GetAutoObject(A.Device.Device).A3,A._GetAutoObject(
A.Device.Device).AF);this.A2(276000312342037,3,1,Ac-6652800,0,0,false,false,false
,true,40500,0,0,false,0,false,1,0,2,0,true,true,A._GetAutoObject(A.Device.Device
).A3,A._GetAutoObject(A.Device.Device).AF);this.A2(276000312342038,3,1,Ac-7084800
,0,0,false,false,false,true,40000,0,0,false,0,false,1,0,2,0,true,true,A._GetAutoObject(
A.Device.Device).A3,A._GetAutoObject(A.Device.Device).AF);this.A2(276000312342039
,3,1,Ac-6307200,0,0,false,false,false,true,38900,0,0,false,0,false,1,0,2,0,true,
true,A._GetAutoObject(A.Device.Device).A3,A._GetAutoObject(A.Device.Device).AF);
this.A2(276000312342040,3,1,Ac-7430400,0,0,false,false,false,true,37300,0,0,false
,0,false,1,0,2,0,true,true,A._GetAutoObject(A.Device.Device).A3,A._GetAutoObject(
A.Device.Device).AF);this.A2(276000312342041,3,1,Ac-6652800,0,0,false,false,false
,true,37000,0,0,false,0,false,1,0,2,0,true,true,A._GetAutoObject(A.Device.Device
).A3,A._GetAutoObject(A.Device.Device).AF);this.A2(276000312342042,3,1,Ac-6825600
,0,0,false,false,false,true,40800,0,0,false,0,false,1,0,2,0,true,true,A._GetAutoObject(
A.Device.Device).A3,A._GetAutoObject(A.Device.Device).AF);this.A2(276000312342043
,3,1,Ac-7430400,0,0,false,false,false,true,40000,0,0,false,0,false,1,0,2,0,true,
true,A._GetAutoObject(A.Device.Device).A3,A._GetAutoObject(A.Device.Device).AF);
this.A2(276000312342044,3,1,Ac-7516800,0,0,false,false,false,true,40700,0,0,false
,0,false,1,0,2,0,true,true,A._GetAutoObject(A.Device.Device).A3,A._GetAutoObject(
A.Device.Device).AF);this.A2(276000312342045,3,1,Ac-8121600,0,0,false,false,false
,true,40800,0,0,false,0,false,1,0,2,0,true,true,A._GetAutoObject(A.Device.Device
).A3,A._GetAutoObject(A.Device.Device).AF);this.A2(276000312342046,3,1,Ac-8553600
,0,0,false,false,false,true,39300,0,0,false,0,false,1,0,2,0,true,true,A._GetAutoObject(
A.Device.Device).A3,A._GetAutoObject(A.Device.Device).AF);this.A2(276000312342047
,3,1,Ac-7171200,0,0,false,false,false,true,39300,0,0,false,0,false,1,0,2,0,true,
true,A._GetAutoObject(A.Device.Device).A3,A._GetAutoObject(A.Device.Device).AF);
this.A2(276000312342048,3,1,Ac-6566400,0,0,false,false,false,true,40900,0,0,false
,0,false,1,0,2,0,true,true,A._GetAutoObject(A.Device.Device).A3,A._GetAutoObject(
A.Device.Device).AF);this.A2(276000312342049,3,1,Ac-7171200,0,0,false,false,false
,true,40100,0,0,false,0,false,1,0,2,0,true,true,A._GetAutoObject(A.Device.Device
).A3,A._GetAutoObject(A.Device.Device).AF);this.A2(276000312342050,3,1,Ac-6998400
,0,0,false,false,false,true,39900,0,0,false,0,false,1,0,2,0,true,true,A._GetAutoObject(
A.Device.Device).A3,A._GetAutoObject(A.Device.Device).AF);this.A2(276000312342051
,3,1,Ac-6739200,0,0,false,false,false,true,38200,0,0,false,0,false,1,0,2,0,true,
true,A._GetAutoObject(A.Device.Device).A3,A._GetAutoObject(A.Device.Device).AF);
this.A2(276000312342052,3,1,Ac-7603200,0,0,false,false,false,true,36400,0,0,false
,0,false,1,0,2,0,true,true,A._GetAutoObject(A.Device.Device).A3,A._GetAutoObject(
A.Device.Device).AF);this.A2(276000312342053,3,1,Ac-7689600,0,0,false,false,false
,true,40800,0,0,false,0,false,1,0,2,0,true,true,A._GetAutoObject(A.Device.Device
).A3,A._GetAutoObject(A.Device.Device).AF);this.A2(276000312342054,3,1,Ac-6480000
,0,0,false,false,false,true,36100,0,0,false,0,false,1,0,2,0,true,true,A._GetAutoObject(
A.Device.Device).A3,A._GetAutoObject(A.Device.Device).AF);this.A2(276000312342055
,3,1,Ac-7948800,0,0,false,false,false,true,38000,0,0,false,0,false,1,0,2,0,true,
true,A._GetAutoObject(A.Device.Device).A3,A._GetAutoObject(A.Device.Device).AF);
this.A2(276000312342056,3,1,Ac-8121600,0,0,false,false,false,true,37800,0,0,false
,0,false,1,0,2,0,true,true,A._GetAutoObject(A.Device.Device).A3,A._GetAutoObject(
A.Device.Device).AF);this.A2(276000312342057,3,1,Ac-6566400,0,0,false,false,false
,true,38800,0,0,false,0,false,1,0,2,0,true,true,A._GetAutoObject(A.Device.Device
).A3,A._GetAutoObject(A.Device.Device).AF);this.A2(276000312342058,3,1,Ac-7862400
,0,0,false,false,false,true,36600,0,0,false,0,false,1,0,2,0,true,true,A._GetAutoObject(
A.Device.Device).A3,A._GetAutoObject(A.Device.Device).AF);this.A2(276000312342059
,3,1,Ac-7344000,0,0,false,false,false,true,39700,0,0,false,0,false,1,0,2,0,true,
true,A._GetAutoObject(A.Device.Device).A3,A._GetAutoObject(A.Device.Device).AF);
this.A2(276000312342060,3,1,Ac-6998400,0,0,false,false,false,true,36600,0,0,false
,0,false,1,0,2,0,true,true,A._GetAutoObject(A.Device.Device).A3,A._GetAutoObject(
A.Device.Device).AF);this.A2(276000312342061,3,1,Ac-5788800,0,0,false,false,false
,true,36600,0,0,false,0,false,1,0,2,0,true,true,A._GetAutoObject(A.Device.Device
).A3,A._GetAutoObject(A.Device.Device).AF);this.A2(276000312342062,3,1,Ac-7257600
,0,0,false,false,false,true,36300,0,0,false,0,false,1,0,2,0,true,true,A._GetAutoObject(
A.Device.Device).A3,A._GetAutoObject(A.Device.Device).AF);this.A2(276000312342063
,3,1,Ac-5875200,0,0,false,false,false,true,40800,0,0,false,0,false,1,0,2,0,true,
true,A._GetAutoObject(A.Device.Device).A3,A._GetAutoObject(A.Device.Device).AF);
this.A2(276000312342064,3,1,Ac-6134400,0,0,false,false,false,true,37500,0,0,false
,0,false,1,0,2,0,true,true,A._GetAutoObject(A.Device.Device).A3,A._GetAutoObject(
A.Device.Device).AF);this.A2(276000312342065,3,1,Ac-5788800,0,0,false,false,false
,true,36000,0,0,false,0,false,1,0,2,0,true,true,A._GetAutoObject(A.Device.Device
).A3,A._GetAutoObject(A.Device.Device).AF);this.A2(276000312342066,3,1,Ac-7862400
,0,0,false,false,false,true,38400,0,0,false,0,false,1,0,2,0,true,true,A._GetAutoObject(
A.Device.Device).A3,A._GetAutoObject(A.Device.Device).AF);this.A2(276000312342067
,3,1,Ac-5270400,0,0,false,false,false,true,36900,0,0,false,0,false,1,0,2,0,true,
true,A._GetAutoObject(A.Device.Device).A3,A._GetAutoObject(A.Device.Device).AF);
this.A2(276000312342068,3,1,Ac-7776000,0,0,false,false,false,true,38300,0,0,false
,0,false,1,0,2,0,true,true,A._GetAutoObject(A.Device.Device).A3,A._GetAutoObject(
A.Device.Device).AF);this.A2(276000312342069,3,1,Ac-7171200,0,0,false,false,false
,true,40400,0,0,false,0,false,1,0,2,0,true,true,A._GetAutoObject(A.Device.Device
).A3,A._GetAutoObject(A.Device.Device).AF);this.A2(276000312342070,3,1,Ac-6048000
,0,0,false,false,false,true,40100,0,0,false,0,false,1,0,2,0,true,true,A._GetAutoObject(
A.Device.Device).A3,A._GetAutoObject(A.Device.Device).AF);this.A2(276000312343007
,1,1,Ac-186192000,0,1,false,false,false,true,0,Ac-864000,3,false,1,false,1,0,1,0
,true,true,A._GetAutoObject(A.Device.Device).A3,A._GetAutoObject(A.Device.Device
).AF);this.A2(276000312343044,1,1,Ac-118108800,0,1,false,false,false,true,0,Ac-172800
,1,false,1,false,1,0,1,0,true,true,A._GetAutoObject(A.Device.Device).A3,A._GetAutoObject(
A.Device.Device).AF);this.A2(276000312343065,1,1,Ac-152150400,0,1,false,false,false
,true,0,Ac-518400,2,false,1,false,1,0,1,0,true,true,A._GetAutoObject(A.Device.Device
).A3,A._GetAutoObject(A.Device.Device).AF);this.A2(276000312343117,1,1,Ac-252806400
,0,1,false,false,false,true,0,Ac-86400,5,false,1,false,1,0,1,0,true,true,A._GetAutoObject(
A.Device.Device).A3,A._GetAutoObject(A.Device.Device).AF);this.A2(276000312343204
,1,1,Ac-219369600,0,1,false,false,false,true,0,Ac-345600,4,false,1,false,1,0,1,0
,true,true,A._GetAutoObject(A.Device.Device).A3,A._GetAutoObject(A.Device.Device
).AF);this.A2(276000312343232,1,1,Ac-152064000,0,1,false,false,false,true,0,Ac-432000
,2,false,1,false,1,0,1,0,true,true,A._GetAutoObject(A.Device.Device).A3,A._GetAutoObject(
A.Device.Device).AF);this.A2(276000312343308,1,1,Ac-118627200,0,1,false,false,false
,true,0,Ac-691200,1,false,1,false,1,0,1,0,true,true,A._GetAutoObject(A.Device.Device
).A3,A._GetAutoObject(A.Device.Device).AF);this.A2(276000312343376,1,1,Ac-118195200
,0,1,false,false,false,true,0,Ac-259200,1,false,1,false,1,0,1,0,true,true,A._GetAutoObject(
A.Device.Device).A3,A._GetAutoObject(A.Device.Device).AF);this.A2(276000312343409
,1,1,Ac-152409600,0,1,false,false,false,true,0,Ac-777600,2,false,1,false,1,0,1,0
,true,true,A._GetAutoObject(A.Device.Device).A3,A._GetAutoObject(A.Device.Device
).AF);this.A2(276000312343420,1,1,Ac-253324800,0,1,false,false,false,true,0,Ac-604800
,5,false,1,false,1,0,1,0,true,true,A._GetAutoObject(A.Device.Device).A3,A._GetAutoObject(
A.Device.Device).AF);this.A2(276000312343505,4,1,Ac-145152000,0,1,false,false,false
,true,0,Ac-27216000,1,true,1,false,1,0,1,0,true,true,A._GetAutoObject(A.Device.Device
).A3,A._GetAutoObject(A.Device.Device).AF);this.A2(276000312343535,4,1,Ac-215222400
,0,1,false,false,false,true,0,Ac-29894400,3,true,1,false,1,0,1,0,true,true,A._GetAutoObject(
A.Device.Device).A3,A._GetAutoObject(A.Device.Device).AF);this.A2(276000312343540
,4,1,Ac-179107200,0,1,false,false,false,true,0,Ac-27475200,2,true,1,false,1,0,1,
0,true,true,A._GetAutoObject(A.Device.Device).A3,A._GetAutoObject(A.Device.Device
).AF);this.A2(276000312343558,4,1,Ac-248659200,0,1,false,false,false,true,0,Ac-29635200
,4,true,1,false,1,0,1,0,true,true,A._GetAutoObject(A.Device.Device).A3,A._GetAutoObject(
A.Device.Device).AF);this.A2(276000312343587,4,1,Ac-179020800,0,1,false,false,false
,true,0,Ac-27388800,2,true,1,false,1,0,1,0,true,true,A._GetAutoObject(A.Device.Device
).A3,A._GetAutoObject(A.Device.Device).AF);this.A2(276000312343597,4,1,Ac-146188800
,0,1,false,false,false,true,0,Ac-28252800,1,true,1,false,1,0,1,0,true,true,A._GetAutoObject(
A.Device.Device).A3,A._GetAutoObject(A.Device.Device).AF);this.A2(276000312343619
,4,1,Ac-181353600,0,1,false,false,false,true,0,Ac-29721600,2,true,1,false,1,0,1,
0,true,true,A._GetAutoObject(A.Device.Device).A3,A._GetAutoObject(A.Device.Device
).AF);this.A2(276000312343627,4,1,Ac-213235200,0,1,false,false,false,true,0,Ac-27907200
,3,true,1,false,1,0,1,0,true,true,A._GetAutoObject(A.Device.Device).A3,A._GetAutoObject(
A.Device.Device).AF);this.A2(276000312343721,4,1,Ac-282182400,0,1,false,false,false
,true,0,Ac-29462400,5,true,1,false,1,0,1,0,true,true,A._GetAutoObject(A.Device.Device
).A3,A._GetAutoObject(A.Device.Device).AF);this.A2(276000312343892,4,1,Ac-179107200
,0,1,false,false,false,true,0,Ac-27475200,2,true,1,false,1,0,1,0,true,true,A._GetAutoObject(
A.Device.Device).A3,A._GetAutoObject(A.Device.Device).AF);this.A2(276000312343899
,4,1,Ac-147398400,0,1,false,false,false,true,0,Ac-29462400,1,true,1,false,1,0,1,
0,true,true,A._GetAutoObject(A.Device.Device).A3,A._GetAutoObject(A.Device.Device
).AF);this.A2(276000312343913,4,1,Ac-178416000,0,1,false,false,false,true,0,Ac-26784000
,2,true,1,false,1,0,1,0,true,true,A._GetAutoObject(A.Device.Device).A3,A._GetAutoObject(
A.Device.Device).AF);this.A2(276000312343915,4,1,Ac-179712000,0,1,false,false,false
,true,0,Ac-28080000,2,true,1,false,1,0,1,0,true,true,A._GetAutoObject(A.Device.Device
).A3,A._GetAutoObject(A.Device.Device).AF);this.A2(276000312343940,4,1,Ac-212025600
,0,1,false,false,false,true,0,Ac-26697600,3,true,1,false,1,0,1,0,true,true,A._GetAutoObject(
A.Device.Device).A3,A._GetAutoObject(A.Device.Device).AF);this.A2(276000312343978
,4,1,Ac-246499200,0,1,false,false,false,true,0,Ac-27475200,4,true,1,false,1,0,1,
0,true,true,A._GetAutoObject(A.Device.Device).A3,A._GetAutoObject(A.Device.Device
).AF);this.A2(276001413780210,5,1,Ac-2851200,0,0,false,false,false,true,0,0,0,false
,0,true,85,0,2,0,true,false,5,A._GetAutoObject(A.Device.Device).AF);this.A2(276001514777390
,5,1,Ac-2937600,0,0,false,false,false,true,0,0,0,false,0,true,85,0,2,0,true,false
,5,A._GetAutoObject(A.Device.Device).AF);this.A2(276001514977845,5,1,Ac-2764800,
0,0,false,false,false,true,0,0,0,false,0,true,85,0,2,0,true,false,5,A._GetAutoObject(
A.Device.Device).AF);this.A2(276000215140539,5,1,Ac-2678400,0,0,false,false,false
,true,0,0,0,false,0,true,85,0,2,0,true,false,5,A._GetAutoObject(A.Device.Device).
AF);this.A2(276000615692447,5,1,Ac-3024000,0,0,false,false,false,true,0,0,0,false
,0,true,85,0,2,0,true,false,5,A._GetAutoObject(A.Device.Device).AF);this.A2(276000916480395
,5,1,Ac-2851200,0,0,false,false,false,true,0,0,0,false,0,true,85,0,2,0,true,false
,5,A._GetAutoObject(A.Device.Device).AF);this.A2(276001416728887,5,1,Ac-2592000,
0,0,false,false,false,true,0,0,0,false,0,true,85,0,2,0,true,false,5,A._GetAutoObject(
A.Device.Device).AF);this.A2(276001017235905,5,1,Ac-2678400,0,0,false,false,false
,true,0,0,0,false,0,true,85,0,2,0,true,false,5,A._GetAutoObject(A.Device.Device).
AF);this.A2(276001618229464,5,1,Ac-2505600,0,0,false,false,false,true,0,0,0,false
,0,true,85,0,2,0,true,false,5,A._GetAutoObject(A.Device.Device).AF);this.A2(276001021244611
,5,1,Ac-2764800,0,0,false,false,false,true,0,0,0,false,0,true,85,0,2,0,true,false
,5,A._GetAutoObject(A.Device.Device).AF);this.A2(276000730343809,5,1,Ac-2764800,
0,0,false,false,false,true,0,0,0,false,0,true,85,0,2,0,true,false,5,A._GetAutoObject(
A.Device.Device).AF);this.A2(276001332086943,5,1,Ac-2592000,0,0,false,false,false
,true,0,0,0,false,0,true,85,0,2,0,true,false,5,A._GetAutoObject(A.Device.Device).
AF);this.A2(276001034073970,5,1,Ac-2505600,0,0,false,false,false,true,0,0,0,false
,0,true,85,0,2,0,true,false,5,A._GetAutoObject(A.Device.Device).AF);this.A2(276000338829483
,5,1,Ac-2505600,0,0,false,false,false,true,0,0,0,false,0,true,85,0,2,0,true,false
,5,A._GetAutoObject(A.Device.Device).AF);this.A2(276001239648313,5,1,Ac-2678400,
0,0,false,false,false,true,0,0,0,false,0,true,85,0,2,0,true,false,5,A._GetAutoObject(
A.Device.Device).AF);this.A2(276001540765035,5,1,Ac-2851200,0,0,false,false,false
,true,0,0,0,false,0,true,85,0,2,0,true,false,5,A._GetAutoObject(A.Device.Device).
AF);this.A2(276001042945700,5,1,Ac-2937600,0,0,false,false,false,true,0,0,0,false
,0,true,85,0,2,0,true,false,5,A._GetAutoObject(A.Device.Device).AF);this.A2(276001544582503
,5,1,Ac-2678400,0,0,false,false,false,true,0,0,0,false,0,true,85,0,2,0,true,false
,5,A._GetAutoObject(A.Device.Device).AF);this.A2(276001546216758,5,1,Ac-2764800,
0,0,false,false,false,true,0,0,0,false,0,true,85,0,2,0,true,false,5,A._GetAutoObject(
A.Device.Device).AF);this.A2(276000249254319,5,1,Ac-2505600,0,0,false,false,false
,true,0,0,0,false,0,true,85,0,2,0,true,false,5,A._GetAutoObject(A.Device.Device).
AF);this.A2(276000650106638,5,1,Ac-2764800,0,0,false,false,false,true,0,0,0,false
,0,true,85,0,2,0,true,false,5,A._GetAutoObject(A.Device.Device).AF);this.A2(276001051694678
,5,1,Ac-3024000,0,0,false,false,false,true,0,0,0,false,0,true,85,0,2,0,true,false
,5,A._GetAutoObject(A.Device.Device).AF);this.A2(276001352864356,5,1,Ac-2592000,
0,0,false,false,false,true,0,0,0,false,0,true,85,0,2,0,true,false,5,A._GetAutoObject(
A.Device.Device).AF);this.A2(276000957087895,5,1,Ac-2678400,0,0,false,false,false
,true,0,0,0,false,0,true,85,0,2,0,true,false,5,A._GetAutoObject(A.Device.Device).
AF);this.A2(276000960408431,5,1,Ac-2851200,0,0,false,false,false,true,0,0,0,false
,0,true,85,0,2,0,true,false,5,A._GetAutoObject(A.Device.Device).AF);this.A2(276000360428432
,5,1,Ac-2505600,0,0,false,false,false,true,0,0,0,false,0,true,85,0,2,0,true,false
,5,A._GetAutoObject(A.Device.Device).AF);this.A2(276001661295801,5,1,Ac-2937600,
0,0,false,false,false,true,0,0,0,false,0,true,85,0,2,0,true,false,5,A._GetAutoObject(
A.Device.Device).AF);this.A2(276000862208448,5,1,Ac-2592000,0,0,false,false,false
,true,0,0,0,false,0,true,85,0,2,0,true,false,5,A._GetAutoObject(A.Device.Device).
AF);this.A2(276000362238024,5,1,Ac-2764800,0,0,false,false,false,true,0,0,0,false
,0,true,85,0,2,0,true,false,5,A._GetAutoObject(A.Device.Device).AF);this.A2(276000663021861
,5,1,Ac-2678400,0,0,false,false,false,true,0,0,0,false,0,true,85,0,2,0,true,false
,5,A._GetAutoObject(A.Device.Device).AF);this.A2(276000867048797,5,1,Ac-3024000,
0,0,false,false,false,true,0,0,0,false,0,true,85,0,2,0,true,false,5,A._GetAutoObject(
A.Device.Device).AF);this.A2(276000768244690,5,1,Ac-2851200,0,0,false,false,false
,true,0,0,0,false,0,true,85,0,2,0,true,false,5,A._GetAutoObject(A.Device.Device).
AF);this.A2(276000968296663,5,1,Ac-2505600,0,0,false,false,false,true,0,0,0,false
,0,true,85,0,2,0,true,false,5,A._GetAutoObject(A.Device.Device).AF);this.A2(276000671847138
,5,1,Ac-2678400,0,0,false,false,false,true,0,0,0,false,0,true,85,0,2,0,true,false
,5,A._GetAutoObject(A.Device.Device).AF);this.A2(276001073128650,5,1,Ac-2592000,
0,0,false,false,false,true,0,0,0,false,0,true,85,0,2,0,true,false,5,A._GetAutoObject(
A.Device.Device).AF);this.A2(276000474997742,5,1,Ac-2764800,0,0,false,false,false
,true,0,0,0,false,0,true,85,0,2,0,true,false,5,A._GetAutoObject(A.Device.Device).
AF);this.A2(276000187530696,5,1,Ac-2678400,0,0,false,false,false,true,0,0,0,false
,0,true,85,0,2,0,true,false,5,A._GetAutoObject(A.Device.Device).AF);this.A2(276000789548473
,5,1,Ac-3024000,0,0,false,false,false,true,0,0,0,false,0,true,85,0,2,0,true,false
,5,A._GetAutoObject(A.Device.Device).AF);this.A2(276001090861654,5,1,Ac-2764800,
0,0,false,false,false,true,0,0,0,false,0,true,85,0,2,0,true,false,5,A._GetAutoObject(
A.Device.Device).AF);this.A2(276001692014618,5,1,Ac-2851200,0,0,false,false,false
,true,0,0,0,false,0,true,85,0,2,0,true,false,5,A._GetAutoObject(A.Device.Device).
AF);},AKh:function(G){var Ac=A._GetAutoObject(A.Device.Helper).Dv();this.AG(Ac-3542400
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
,276000312343007,3730,3,0,0,0,0,0);},AKe:function(G){this.AlT(1,Tg);this.AlT(2,Th
);this.AlT(3,Ti);},AKg:function(G){this.AaH(2016,216,11);this.AaH(2017,217,10);this.
AaH(2018,218,9);this.AaH(2019,219,8);this.AaH(2020,220,7);this.AaH(2021,221,6);}
,_Init:function(aArg){var K=this.K;K.__proto__=C.P2;A.h7++;},_Done:function(){var
K=this.K;K.__proto__=null;A.h7--;},_ReInit:function(){},_Mark:function(D){},_variants:
function(){return this;},_className:"DeviceDemonstrator::TableData"};C.AnX={A29:
0,AKL:function(G){var K=this.K;A.kR.AnX.Bcg.call(this,G);if(A._GetAutoObject(A.Device.
Device).In===K.A29)return;if(A._GetAutoObject(A.Device.Device).In===27)A._GetAutoObject(
C.GM).Asb(2);else if(K.A29===27)A._GetAutoObject(C.GM).Asb(0);K.A29=A._GetAutoObject(
A.Device.Device).In;},_Init:function(aArg){var K=this.K;K.__proto__=C.AnX;A.h7++;
},_Done:function(){var K=this.K;K.__proto__=null;A.h7--;},_ReInit:function(){},_Mark:
function(D){},_variants:function(){return this;},_className:"DeviceDemonstrator::ScreenLoaderClass"
};
C._Init=function(){C.DeviceClass.__proto__=A.acq.DeviceClass;};C._ReInit=function(
){var B;if((B=C.UJ._this))B._ReInit(),C.UJ._ReInit.call(B);if((B=C.GM._this))B._ReInit(
),C.GM._ReInit.call(B);if((B=C.Aqn._this))B._ReInit(),C.Aqn._ReInit.call(B);if((
B=C.AgQ._this))B._ReInit(),C.AgQ._ReInit.call(B);};C.DI=function(D){var B;if((B=
C.UJ._this)&&(B._cycle!=D))B._Done(C.UJ._this=null);if((B=C.GM._this)&&(B._cycle
!=D))B._Done(C.GM._this=null);if((B=C.Aqn._this)&&(B._cycle!=D))B._Done(C.Aqn._this=
null);if((B=C.AgQ._this)&&(B._cycle!=D))B._Done(C.AgQ._this=null);};return C;})(
);

/* VitalControl demonstration application, © Urban GmbH & Co.KG 2025 */