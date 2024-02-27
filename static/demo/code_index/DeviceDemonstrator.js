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
var Ca=[0,0];var BC=[0,0,1000,740];var EW=[200,5,577,745];var Hh=[270,69,510,389];
var I8=[605,30,975,740];var IJ=[25,25,45,41];var OW=[547,610,687,750];var PW=[270
,390];var PX=[350,390];var CL=[350,450];var E4=[270,450];var Lq=[430,390];var PY=[
510,390];var Ks=[510,450];var N8=[430,450];var PZ=[360,390];var MB=[420,390];var
ST=[420,450];var UC=[360,450];var ZE=[335,460];var WG=[447,460];var IK=[447,500];
var UD=[335,500];var ZF=[350,512];var WH=[430,512];var ZG=[430,592];var WI=[350,
592];var ZH=[335,605];var ZI=[447,605];var UE=[447,665];var WJ=[335,665];var Q9=[
264,504];var ZJ=[344,504];var OX=[344,601];var Q_=[264,601];var WK=[436,504];var
WM=[516,504];var WN=[516,601];var WO=[436,601];var ZK=[10,130,210,310];var WQ="1";
var WR="2";var SU="3";
C.A4b={Be8:null,Background:null,AbY:null,Akx:null,Age:null,An:null,Zs:null,SJ:null
,Zt:null,Zv:null,Zu:null,WA:null,Zw:null,Wu:null,Wy:null,Wz:null,AaR:null,Dg:null
,Init:function(aArg){A._GetAutoObject(A.Device.Device).Art(A._NewObject(A.Device.
Transponder,0));},DriveCursorHitting:function(SY,BD,E6){var AJJ=this.AOa();if(!!
AJJ){var A1s=AJJ.M;A1s=A.abJ(A1s,AJJ.BhY(Ca));if(!A.wa(A1s,E6))this.ABW(AJJ);}return A.
Core.Root.DriveCursorHitting.call(this,SY,BD,E6);},BnI:function(G){var K=this.K;
this.Device.UpdateActiveScreen(3);K.Akx.Ar(false);},Nr:function(G){var K=this.K;
var B;var DW=(A.Core.Bk.isPrototypeOf(G)?G:null);var Ain=0;if(DW===K.Zu)Ain=27;else
if(DW===K.Zt)Ain=26;else if(DW===K.Zv)Ain=28;else if(DW===K.Wy)Ain=6;else if(DW===
K.Wz)Ain=7;else if(DW===K.WA)Ain=4;else if(DW===K.Wu)Ain=5;else if(DW===K.Zw)Ain=
1;if(!!DW){if((DW.Down&&(DW.Jh>0))&&(DW.Jh<400))return;var BxF=this.AR;this.A9(this.
Gz);this.If().DriveKeyboardHitting(Ain,0x00,DW.Down);this.A9(BxF);K.SJ.H(A.abM(K.
SJ.M,DW.HV[0]-((((B=K.SJ.M)[2]-B[0])/2)|0)));K.SJ.H(A.abO(K.SJ.M,DW.HV[1]-((((B=
K.SJ.M)[3]-B[1])/2)|0)));K.Zs.Ar(true);}},Aiw:function(G){var K=this.K;var B;var
Jr=(A.Core.BJ.isPrototypeOf(G)?G:null);if((String.fromCharCode(Jr.DJ).toLowerCase(
).charCodeAt(0)||0)===0x73)A._GetAutoObject(C.K8).Bd5(this);else if((String.fromCharCode(
Jr.DJ).toLowerCase().charCodeAt(0)||0)===0x74)A._GetAutoObject(A.Device.Helper).
AKp(this);else if((String.fromCharCode(Jr.DJ).toLowerCase().charCodeAt(0)||0)===
0x64)this.A9(this.Gz);else if((String.fromCharCode(Jr.DJ).toLowerCase().charCodeAt(
0)||0)===0x63)this.A9(K.Age);else if(Jr.CK===152){if(this.AR===K.Age)this.A9(this.
Gz);else this.A9(K.Age);}else if(this.AR===this.Gz){if(Jr.CK===11){this.If().DriveKeyboardHitting(
26,0x00,true);this.If().DriveKeyboardHitting(26,0x00,false);}else if(Jr.CK===12){
this.If().DriveKeyboardHitting(27,0x00,true);this.If().DriveKeyboardHitting(27,0x00
,false);}else if(Jr.CK===13){this.If().DriveKeyboardHitting(28,0x00,true);this.If(
).DriveKeyboardHitting(28,0x00,false);}}},_Init:function(aArg){var K=this.K;A.acg.
An._Init.call(K.Background={I:this},0);A.acg.An._Init.call(K.AbY={I:this},0);A.Core.
Timer._Init.call(K.Akx={I:this},0);A.acw.ATN._Init.call(K.Age={I:this},0);A.acg.
An._Init.call(K.An={I:this},0);A.acl.AMI._Init.call(K.Zs={I:this},0);A.acg.An._Init.
call(K.SJ={I:this},0);A.Core.Bk._Init.call(K.Zt={I:this},0);A.Core.Bk._Init.call(
K.Zv={I:this},0);A.Core.Bk._Init.call(K.Zu={I:this},0);A.Core.Bk._Init.call(K.WA={
I:this},0);A.Core.Bk._Init.call(K.Zw={I:this},0);A.Core.Bk._Init.call(K.Wu={I:this
},0);A.Core.Bk._Init.call(K.Wy={I:this},0);A.Core.Bk._Init.call(K.Wz={I:this},0);
A.acw.AaR._Init.call(K.AaR={I:this},0);A.Core.BJ._Init.call(K.Dg={I:this},0);K.__proto__=
C.A4b;var B;this.H(BC);K.Background.H(BC);K.AbY.H(EW);this.Gz.H(Hh);K.Akx.PK(2000
);K.Akx.Ar(true);K.Age.H(I8);K.An.H(IJ);K.Zs.Akz=true;K.Zs.Wi(9);K.Zs.HG(1);K.Zs.
Fe(300);K.Zs.B1=0xA0FFFFFF;K.Zs.Cr=0x00FFFFFF;K.SJ.H(OW);K.SJ.L(0x00FFFFFF);K.Zt.
Ki(PW);K.Zt.Kh(PX);K.Zt.DM(CL);K.Zt.DY(E4);K.Zv.Ki(Lq);K.Zv.Kh(PY);K.Zv.DM(Ks);K.
Zv.DY(N8);K.Zu.Ki(PZ);K.Zu.Kh(MB);K.Zu.DM(ST);K.Zu.DY(UC);K.WA.Ki(ZE);K.WA.Kh(WG
);K.WA.DM(IK);K.WA.DY(UD);K.Zw.Ki(ZF);K.Zw.Kh(WH);K.Zw.DM(ZG);K.Zw.DY(WI);K.Wu.Ki(
ZH);K.Wu.Kh(ZI);K.Wu.DM(UE);K.Wu.DY(WJ);K.Wy.Ki(Q9);K.Wy.Kh(ZJ);K.Wy.DM(OX);K.Wy.
DY(Q_);K.Wz.Ki(WK);K.Wz.Kh(WM);K.Wz.DM(WN);K.Wz.DY(WO);K.AaR.H(ZK);this.J(K.Background
,-1);this.J(K.AbY,-1);this.J(K.Age,0);this.J(K.An,0);this.J(K.SJ,0);this.J(K.Zt,
0);this.J(K.Zv,0);this.J(K.Zu,0);this.J(K.WA,0);this.J(K.Zw,0);this.J(K.Wu,0);this.
J(K.Wy,0);this.J(K.Wz,0);this.J(K.AaR,0);K.Background.Ax(A.aaL(A.acw.Background)
);K.AbY.Ax(A.aaL(A.acx.AbY));K.Akx.Ms=[this,K.BnI];K.An.Ax(A.aaL(A.acw.AQ1));K.Zs.
Q=[B=K.SJ,B.Bjq,B.L];K.SJ.Ax(A.aaL(A.acx.AQI));K.Zt.Lj=[this,K.Nr];K.Zt.BK=[this
,K.Nr];K.Zv.Lj=[this,K.Nr];K.Zv.BK=[this,K.Nr];K.Zu.Lj=[this,K.Nr];K.Zu.BK=[this
,K.Nr];K.WA.DS=[this,K.Nr];K.WA.Lj=[this,K.Nr];K.WA.BK=[this,K.Nr];K.Zw.Lj=[this
,K.Nr];K.Zw.BK=[this,K.Nr];K.Wu.DS=[this,K.Nr];K.Wu.Lj=[this,K.Nr];K.Wu.BK=[this
,K.Nr];K.Wy.DS=[this,K.Nr];K.Wy.Lj=[this,K.Nr];K.Wy.BK=[this,K.Nr];K.Wz.DS=[this
,K.Nr];K.Wz.Lj=[this,K.Nr];K.Wz.BK=[this,K.Nr];K.AaR.AbN([B=A._GetAutoObject(A.Device.
Helper),B.UH,B.UI]);K.Dg.BK=[this,K.Aiw];K.Be8=A._GetAutoObject(A.acr.Ab6);K.Init.
call(this,aArg);A.h7++;},_Done:function(){var K=this.K;K.__proto__=null;K.Background.
_Done();K.AbY._Done();K.Akx._Done();K.Age._Done();K.An._Done();K.Zs._Done();K.SJ.
_Done();K.Zt._Done();K.Zv._Done();K.Zu._Done();K.WA._Done();K.Zw._Done();K.Wu._Done(
);K.Wy._Done();K.Wz._Done();K.AaR._Done();K.Dg._Done();A.h7--;},_ReInit:function(
){var K=this.K;K.Background._ReInit();K.AbY._ReInit();K.Akx._ReInit();K.Age._ReInit(
);K.An._ReInit();K.Zs._ReInit();K.SJ._ReInit();K.Zt._ReInit();K.Zv._ReInit();K.Zu.
_ReInit();K.WA._ReInit();K.Zw._ReInit();K.Wu._ReInit();K.Wy._ReInit();K.Wz._ReInit(
);K.AaR._ReInit();K.Dg._ReInit();},_Mark:function(D){var B;if((B=this.Be8)&&(B._cycle
!=D))B._Mark(B._cycle=D);if((B=this.Background)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.AbY)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Akx)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Age)._cycle!=D)B._Mark(B._cycle=D);if((B=this.An)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Zs)._cycle!=D)B._Mark(B._cycle=D);if((B=this.SJ)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.Zt)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Zv
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Zu)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.WA)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Zw)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Wu)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Wy)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Wz)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AaR)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.Dg)._cycle!=D)B._Mark(B._cycle=D);},_variants:function(
){return this;},_className:"DeviceDemonstrator::ApplicationDemonstration"};C.DeviceClass={
AJe:null,AuT:null,At_:null,Init:function(aArg){var K=this.K;var B;A.zV([this,K.Bjc
],this.Ap,0);A.zX([this,K.Blq],[B=K.AJe,B.A8l,B.A9B],0);A.zX([this,K.Bku],[B=K.AJe
,B.A7G,B.AR_],0);},Ars:function(E){this.UpdateScanState(E);},Awc:function(E){this.
UpdateMeasureState(E);},Awp:function(E){this.UpdateTempValue(E);},AwY:function(){
this.UpdateMeasureState(1);this.UpdateTempValue(0);},Ahp:function(){var B;A._GetAutoObject(
A.Device.Helper).SA.Anz(this);this.UpdateMeasureState(0);},Ahm:function(){this.UpdateScanState(
1);},AnA:function(){this.UpdateScanState(0);},Art:function(E){this.UpdateScanTransponder(
E.Id,E.TransponderType,E.TransponderProtocol);if(this.ScanState!==1)return;this.
UpdateScanState(2);},Blq:function(G){var K=this.K;var Alk=A._GetAutoObject(C.K8).
AFR;if(Alk<0)K.AuT=null;else{K.AuT=A._NewObject(A.Device.Int32FilterCriterion,0);
K.AuT.Initialize(2,0,Alk,true);}A.pe([this,K.Bi],this);},Bku:function(G){var K=this.
K;var BeZ=A._GetAutoObject(C.K8).AAX;if(BeZ<=0)K.At_=null;else{K.At_=A._NewObject(
A.Device.Int32FilterCriterion,0);K.At_.Initialize(1,4,BeZ,false);}A.pe([this,K.Bi
],this);},Bi:function(G){var K=this.K;var Ba=A._GetAutoObject(A.Device.Helper).Mj(
);Ba.CX(K.AuT);Ba.CX(K.At_);A._GetAutoObject(C.ApS).Bi(Ba);},Bjc:function(G){var
K=this.K;A.pe([this,K.Bi],this);},_Init:function(aArg){var K=this.K;A.acr.DeviceClass.
_Init.call(this,aArg);K.__proto__=C.DeviceClass;this.PJ(4);this.Awl(276034580109999
);K.AJe=A._GetAutoObject(C.K8);K.Init.call(this,aArg);},_Mark:function(D){var B;
A.acr.DeviceClass._Mark.call(this,D);if((B=this.AJe)&&(B._cycle!=D))B._Mark(B._cycle=
D);if((B=this.AuT)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.At_)&&(B._cycle
!=D))B._Mark(B._cycle=D);},_variants:function(){return this;},_className:"DeviceDemonstrator::DeviceClass"
};C.Uk={_Init:function(){A.acr.Uk._Init.call(this,0);this.ASL(false);this.ASM(false
);},_ReInit:function(){A.acr.Uk._ReInit.call(this,0);},_variants:function(){return this;
},_this:null};C.A4$={TransponderId:0,AFR:0,AAX:0,ArY:null,Wt:3950,AwI:true,A9B:function(
E){if(this.AFR===E)return;this.AFR=E;A.abo([this,this.A8l,this.A9B],0);},A8l:function(
){return this.AFR;},AR_:function(E){if(this.AAX===E)return;this.AAX=E;A.abo([this
,this.A7G,this.AR_],0);},A7G:function(){return this.AAX;},Bd5:function(G){this.AAs(
this.TransponderId);},NW:function(E){if(this.TransponderId===E)return;this.TransponderId=
E;A.abo([this,this.Aj4,this.NW],0);},A9C:function(E){if(this.ArY===E)return;this.
ArY=E;A.abo([this,this.A8m,this.A9C],0);},A8m:function(){return this.ArY;},AAs:function(
I_){var B;var Jw=false;if((A._GetAutoObject(A.Device.Device).ScanState===1)&&!!I_
){A._GetAutoObject(A.Device.Device).OM.ASY(1);A._GetAutoObject(A.Device.Device).
OM.OnSetId(I_);A._GetAutoObject(A.Device.Device).OM.ASX(2);A._GetAutoObject(A.Device.
Device).Ars(2);A.abo([B=A._GetAutoObject(A.Device.Device),B.AR0,B.AZu],0);Jw=true;
}return Jw;},ASG:function(E){if(this.AwI===E)return;this.AwI=E;A.abo([this,this.
ARX,this.ASG],0);},AE6:function(E){if(this.Wt===E)return;this.Wt=E;A.abo([this,this.
Bj5,this.AE6],0);},BdQ:function(G){var B;if(this.AwI)A._GetAutoObject(A.Device.Helper
).AKp(this);else A._GetAutoObject(A.Device.Helper).Bb0(this.Wt);},Aj4:function(){
return this.TransponderId;},ARX:function(){return this.AwI;},Bj5:function(){return this.
Wt;},_Init:function(aArg){this.__proto__=C.A4$;this.ArY=A.acw.ALW;A.h7++;},_Done:
function(){this.__proto__=null;A.h7--;},_ReInit:function(){},_Mark:function(D){var
B;if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:
null,_className:"DeviceDemonstrator::DemonstrationConfigClass"};C.K8={_Init:function(
){C.A4$._Init.call(this,0);},_ReInit:function(){},_variants:function(){return this;
},_this:null};C.ApS={_Init:function(){A.Device.Table._Init.call(this,0);this.OnSetId(
0);},_ReInit:function(){},_variants:function(){return this;},_this:null};C.A5a={
Ahj:A.jV,Delete:function(){this.AE1(A.abV(this.Ahj,this.Ahj.length-1));},E$:function(
AcF){if(!this.Ahj.length&&(AcF===0x30))return;if(this.Ahj.length<6)this.AE1(this.
Ahj+String.fromCharCode(AcF));},AE1:function(E){if(this.Ahj===E)return;this.Ahj=
E;A.abo([this,this.A8j,this.AE1],0);A._GetAutoObject(C.K8).AR_(A.wz(this.Ahj,-1,
10));},A8j:function(){return this.Ahj;},_Init:function(aArg){this.__proto__=C.A5a;
A.h7++;},_Done:function(){this.__proto__=null;A.h7--;},_ReInit:function(){},_Mark:
function(D){var B;if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:
0,_observers:null,_className:"DeviceDemonstrator::DemonstrationSearchHelperClass"
};C.Agn={_Init:function(){C.A5a._Init.call(this,0);},_ReInit:function(){},_variants:
function(){return this;},_this:null};C.PM={AJn:function(G){var Ac=A._GetAutoObject(
A.Device.Helper).Dt();this.AW(276000312341001,2,1,Ac-1382400,0,1,false,false,false
,true,40800,0,0,false,0,false,1,1,1,0,true,true);this.AW(276000312341002,2,1,Ac-
1296000,0,1,false,false,false,true,38300,0,0,false,0,false,1,1,1,0,true,true);this.
AW(276000312341003,2,1,Ac-1209600,0,1,false,false,false,true,37600,0,0,false,0,false
,1,1,1,0,true,true);this.AW(276000312341004,2,1,Ac-1123200,0,1,false,false,false
,true,40600,0,0,false,0,false,1,1,1,0,true,true);this.AW(276000312341005,2,1,Ac-
9504000,0,1,false,false,false,true,36900,0,0,false,0,false,1,1,1,0,true,true);this.
AW(276000312341006,2,1,Ac-950400,0,1,false,false,false,true,38000,0,0,false,0,false
,1,1,1,0,true,true);this.AW(276000312341007,2,1,Ac-864000,0,1,false,false,false,
true,39200,0,0,false,0,false,1,1,1,276000312343007,true,true);this.AW(276000312341008
,2,1,Ac-777600,0,1,false,false,false,true,36500,0,0,false,0,false,1,1,1,276000312343409
,true,true);this.AW(276000312341009,2,1,Ac-691200,0,1,false,false,false,true,40900
,0,0,false,0,false,1,1,1,276000312343308,true,true);this.AW(276000312341010,2,1,
Ac-604800,0,1,false,false,false,true,40900,0,0,false,0,false,1,1,1,276000312343420
,true,true);this.AW(276000312341011,2,1,Ac-518400,0,1,false,false,false,true,39200
,0,0,false,0,false,1,1,1,276000312343065,true,true);this.AW(276000312341012,2,1,
Ac-432000,0,1,false,false,false,true,38100,0,0,false,0,false,1,1,1,276000312343232
,true,true);this.AW(276000312341013,2,1,Ac-345600,0,1,false,false,false,true,37700
,0,0,false,0,true,1,1,1,276000312343204,true,true);this.AW(276000312341014,2,1,Ac-
259200,0,1,false,false,false,true,37200,0,0,false,0,true,1,1,1,276000312343376,true
,true);this.AW(276000312341015,2,1,Ac-172800,0,1,false,false,false,true,37000,0,
0,false,0,true,1,1,1,276000312343044,true,true);this.AW(276000312342001,3,1,Ac-7084800
,0,0,false,false,false,true,39500,0,0,false,0,false,1,0,2,0,true,true);this.AW(276000312342002
,3,1,Ac-5788800,0,0,false,false,false,true,38800,0,0,false,0,false,1,0,2,0,true,
true);this.AW(276000312342003,3,1,Ac-7084800,0,0,false,false,false,true,39600,0,
0,false,0,false,1,0,2,0,true,true);this.AW(276000312342004,3,1,Ac-6652800,0,0,false
,false,false,true,37400,0,0,false,0,false,1,0,2,0,true,true);this.AW(276000312342005
,3,1,Ac-7084800,0,0,false,false,false,true,39700,0,0,false,0,false,1,0,2,0,true,
true);this.AW(276000312342006,3,1,Ac-6998400,0,0,false,false,false,true,40900,0,
0,false,0,false,1,0,2,0,true,true);this.AW(276000312342007,3,1,Ac-6739200,0,0,false
,false,false,true,38100,0,0,false,0,false,1,0,2,0,true,true);this.AW(276000312342008
,3,1,Ac-7430400,0,0,false,false,false,true,37200,0,0,false,0,false,1,0,2,0,true,
true);this.AW(276000312342009,3,1,Ac-6652800,0,0,false,false,false,true,37000,0,
0,false,0,false,1,0,2,0,true,true);this.AW(276000312342010,3,1,Ac-7776000,0,0,false
,false,false,true,38600,0,0,false,0,false,1,0,2,0,true,true);this.AW(276000312342011
,3,1,Ac-5961600,0,0,false,false,false,true,37900,0,0,false,0,false,1,0,2,0,true,
true);this.AW(276000312342012,3,1,Ac-6393600,0,0,false,false,false,true,36300,0,
0,false,0,false,1,0,2,0,true,true);this.AW(276000312342013,3,1,Ac-7344000,0,0,false
,false,false,true,36100,0,0,false,0,false,1,0,2,0,true,true);this.AW(276000312342014
,3,1,Ac-5529600,0,0,false,false,false,true,37700,0,0,false,0,false,1,0,2,0,true,
true);this.AW(276000312342015,3,1,Ac-6307200,0,0,false,false,false,true,39800,0,
0,false,0,false,1,0,2,0,true,true);this.AW(276000312342016,3,1,Ac-6048000,0,0,false
,false,false,true,40300,0,0,false,0,false,1,0,2,0,true,true);this.AW(276000312342017
,3,1,Ac-6134400,0,0,false,false,false,true,38400,0,0,false,0,false,1,0,2,0,true,
true);this.AW(276000312342018,3,1,Ac-6652800,0,0,false,false,false,true,36300,0,
0,false,0,false,1,0,2,0,true,true);this.AW(276000312342019,3,1,Ac-8467200,0,0,false
,false,false,true,38700,0,0,false,0,false,1,0,2,0,true,true);this.AW(276000312342020
,3,1,Ac-6998400,0,0,false,false,false,true,37300,0,0,false,0,false,1,0,2,0,true,
true);this.AW(276000312342021,3,1,Ac-6652800,0,0,false,false,false,true,38500,0,
0,false,0,false,1,0,2,0,true,true);this.AW(276000312342022,3,1,Ac-5788800,0,0,false
,false,false,true,37800,0,0,false,0,false,1,0,2,0,true,true);this.AW(276000312342023
,3,1,Ac-6652800,0,0,false,false,false,true,37300,0,0,false,0,false,1,0,2,0,true,
true);this.AW(276000312342024,3,1,Ac-6739200,0,0,false,false,false,true,37500,0,
0,false,0,false,1,0,2,0,true,true);this.AW(276000312342025,3,1,Ac-7171200,0,0,false
,false,false,true,36300,0,0,false,0,false,1,0,2,0,true,true);this.AW(276000312342026
,3,1,Ac-7171200,0,0,false,false,false,true,37800,0,0,false,0,false,1,0,2,0,true,
true);this.AW(276000312342027,3,1,Ac-7689600,0,0,false,false,false,true,37900,0,
0,false,0,false,1,0,2,0,true,true);this.AW(276000312342028,3,1,Ac-8121600,0,0,false
,false,false,true,39800,0,0,false,0,false,1,0,2,0,true,true);this.AW(276000312342029
,3,1,Ac-7603200,0,0,false,false,false,true,36500,0,0,false,0,false,1,0,2,0,true,
true);this.AW(276000312342030,3,1,Ac-6393600,0,0,false,false,false,true,38900,0,
0,false,0,false,1,0,2,0,true,true);this.AW(276000312342031,3,1,Ac-6652800,0,0,false
,false,false,true,36700,0,0,false,0,false,1,0,2,0,true,true);this.AW(276000312342032
,3,1,Ac-6739200,0,0,false,false,false,true,37400,0,0,false,0,false,1,0,2,0,true,
true);this.AW(276000312342033,3,1,Ac-6393600,0,0,false,false,false,true,41000,0,
0,false,0,false,1,0,2,0,true,true);this.AW(276000312342034,3,1,Ac-7084800,0,0,false
,false,false,true,40500,0,0,false,0,false,1,0,2,0,true,true);this.AW(276000312342035
,3,1,Ac-7171200,0,0,false,false,false,true,38200,0,0,false,0,false,1,0,2,0,true,
true);this.AW(276000312342036,3,1,Ac-6480000,0,0,false,false,false,true,40000,0,
0,false,0,false,1,0,2,0,true,true);this.AW(276000312342037,3,1,Ac-6652800,0,0,false
,false,false,true,40500,0,0,false,0,false,1,0,2,0,true,true);this.AW(276000312342038
,3,1,Ac-7084800,0,0,false,false,false,true,40000,0,0,false,0,false,1,0,2,0,true,
true);this.AW(276000312342039,3,1,Ac-6307200,0,0,false,false,false,true,38900,0,
0,false,0,false,1,0,2,0,true,true);this.AW(276000312342040,3,1,Ac-7430400,0,0,false
,false,false,true,37300,0,0,false,0,false,1,0,2,0,true,true);this.AW(276000312342041
,3,1,Ac-6652800,0,0,false,false,false,true,37000,0,0,false,0,false,1,0,2,0,true,
true);this.AW(276000312342042,3,1,Ac-6825600,0,0,false,false,false,true,40800,0,
0,false,0,false,1,0,2,0,true,true);this.AW(276000312342043,3,1,Ac-7430400,0,0,false
,false,false,true,40000,0,0,false,0,false,1,0,2,0,true,true);this.AW(276000312342044
,3,1,Ac-7516800,0,0,false,false,false,true,40700,0,0,false,0,false,1,0,2,0,true,
true);this.AW(276000312342045,3,1,Ac-8121600,0,0,false,false,false,true,40800,0,
0,false,0,false,1,0,2,0,true,true);this.AW(276000312342046,3,1,Ac-8553600,0,0,false
,false,false,true,39300,0,0,false,0,false,1,0,2,0,true,true);this.AW(276000312342047
,3,1,Ac-7171200,0,0,false,false,false,true,39300,0,0,false,0,false,1,0,2,0,true,
true);this.AW(276000312342048,3,1,Ac-6566400,0,0,false,false,false,true,40900,0,
0,false,0,false,1,0,2,0,true,true);this.AW(276000312342049,3,1,Ac-7171200,0,0,false
,false,false,true,40100,0,0,false,0,false,1,0,2,0,true,true);this.AW(276000312342050
,3,1,Ac-6998400,0,0,false,false,false,true,39900,0,0,false,0,false,1,0,2,0,true,
true);this.AW(276000312342051,3,1,Ac-6739200,0,0,false,false,false,true,38200,0,
0,false,0,false,1,0,2,0,true,true);this.AW(276000312342052,3,1,Ac-7603200,0,0,false
,false,false,true,36400,0,0,false,0,false,1,0,2,0,true,true);this.AW(276000312342053
,3,1,Ac-7689600,0,0,false,false,false,true,40800,0,0,false,0,false,1,0,2,0,true,
true);this.AW(276000312342054,3,1,Ac-6480000,0,0,false,false,false,true,36100,0,
0,false,0,false,1,0,2,0,true,true);this.AW(276000312342055,3,1,Ac-7948800,0,0,false
,false,false,true,38000,0,0,false,0,false,1,0,2,0,true,true);this.AW(276000312342056
,3,1,Ac-8121600,0,0,false,false,false,true,37800,0,0,false,0,false,1,0,2,0,true,
true);this.AW(276000312342057,3,1,Ac-6566400,0,0,false,false,false,true,38800,0,
0,false,0,false,1,0,2,0,true,true);this.AW(276000312342058,3,1,Ac-7862400,0,0,false
,false,false,true,36600,0,0,false,0,false,1,0,2,0,true,true);this.AW(276000312342059
,3,1,Ac-7344000,0,0,false,false,false,true,39700,0,0,false,0,false,1,0,2,0,true,
true);this.AW(276000312342060,3,1,Ac-6998400,0,0,false,false,false,true,36600,0,
0,false,0,false,1,0,2,0,true,true);this.AW(276000312342061,3,1,Ac-5788800,0,0,false
,false,false,true,36600,0,0,false,0,false,1,0,2,0,true,true);this.AW(276000312342062
,3,1,Ac-7257600,0,0,false,false,false,true,36300,0,0,false,0,false,1,0,2,0,true,
true);this.AW(276000312342063,3,1,Ac-5875200,0,0,false,false,false,true,40800,0,
0,false,0,false,1,0,2,0,true,true);this.AW(276000312342064,3,1,Ac-6134400,0,0,false
,false,false,true,37500,0,0,false,0,false,1,0,2,0,true,true);this.AW(276000312342065
,3,1,Ac-5788800,0,0,false,false,false,true,36000,0,0,false,0,false,1,0,2,0,true,
true);this.AW(276000312342066,3,1,Ac-7862400,0,0,false,false,false,true,38400,0,
0,false,0,false,1,0,2,0,true,true);this.AW(276000312342067,3,1,Ac-5270400,0,0,false
,false,false,true,36900,0,0,false,0,false,1,0,2,0,true,true);this.AW(276000312342068
,3,1,Ac-7776000,0,0,false,false,false,true,38300,0,0,false,0,false,1,0,2,0,true,
true);this.AW(276000312342069,3,1,Ac-7171200,0,0,false,false,false,true,40400,0,
0,false,0,false,1,0,2,0,true,true);this.AW(276000312342070,3,1,Ac-6048000,0,0,false
,false,false,true,40100,0,0,false,0,false,1,0,2,0,true,true);this.AW(276000312343007
,1,1,Ac-186192000,0,1,false,false,false,true,0,Ac-864000,3,false,1,false,1,0,1,0
,true,true);this.AW(276000312343044,1,1,Ac-118108800,0,1,false,false,false,true,
0,Ac-172800,1,false,1,false,1,0,1,0,true,true);this.AW(276000312343065,1,1,Ac-152150400
,0,1,false,false,false,true,0,Ac-518400,2,false,1,false,1,0,1,0,true,true);this.
AW(276000312343117,1,1,Ac-252806400,0,1,false,false,false,true,0,Ac-86400,5,false
,1,false,1,0,1,0,true,true);this.AW(276000312343204,1,1,Ac-219369600,0,1,false,false
,false,true,0,Ac-345600,4,false,1,false,1,0,1,0,true,true);this.AW(276000312343232
,1,1,Ac-152064000,0,1,false,false,false,true,0,Ac-432000,2,false,1,false,1,0,1,0
,true,true);this.AW(276000312343308,1,1,Ac-118627200,0,1,false,false,false,true,
0,Ac-691200,1,false,1,false,1,0,1,0,true,true);this.AW(276000312343376,1,1,Ac-118195200
,0,1,false,false,false,true,0,Ac-259200,1,false,1,false,1,0,1,0,true,true);this.
AW(276000312343409,1,1,Ac-152409600,0,1,false,false,false,true,0,Ac-777600,2,false
,1,false,1,0,1,0,true,true);this.AW(276000312343420,1,1,Ac-253324800,0,1,false,false
,false,true,0,Ac-604800,5,false,1,false,1,0,1,0,true,true);this.AW(276000312343505
,4,1,Ac-145152000,0,1,false,false,false,true,0,Ac-27216000,1,true,1,false,1,0,1,
0,true,true);this.AW(276000312343535,4,1,Ac-215222400,0,1,false,false,false,true
,0,Ac-29894400,3,true,1,false,1,0,1,0,true,true);this.AW(276000312343540,4,1,Ac-
179107200,0,1,false,false,false,true,0,Ac-27475200,2,true,1,false,1,0,1,0,true,true
);this.AW(276000312343558,4,1,Ac-248659200,0,1,false,false,false,true,0,Ac-29635200
,4,true,1,false,1,0,1,0,true,true);this.AW(276000312343587,4,1,Ac-179020800,0,1,
false,false,false,true,0,Ac-27388800,2,true,1,false,1,0,1,0,true,true);this.AW(276000312343597
,4,1,Ac-146188800,0,1,false,false,false,true,0,Ac-28252800,1,true,1,false,1,0,1,
0,true,true);this.AW(276000312343619,4,1,Ac-181353600,0,1,false,false,false,true
,0,Ac-29721600,2,true,1,false,1,0,1,0,true,true);this.AW(276000312343627,4,1,Ac-
213235200,0,1,false,false,false,true,0,Ac-27907200,3,true,1,false,1,0,1,0,true,true
);this.AW(276000312343721,4,1,Ac-282182400,0,1,false,false,false,true,0,Ac-29462400
,5,true,1,false,1,0,1,0,true,true);this.AW(276000312343892,4,1,Ac-179107200,0,1,
false,false,false,true,0,Ac-27475200,2,true,1,false,1,0,1,0,true,true);this.AW(276000312343899
,4,1,Ac-147398400,0,1,false,false,false,true,0,Ac-29462400,1,true,1,false,1,0,1,
0,true,true);this.AW(276000312343913,4,1,Ac-178416000,0,1,false,false,false,true
,0,Ac-26784000,2,true,1,false,1,0,1,0,true,true);this.AW(276000312343915,4,1,Ac-
179712000,0,1,false,false,false,true,0,Ac-28080000,2,true,1,false,1,0,1,0,true,true
);this.AW(276000312343940,4,1,Ac-212025600,0,1,false,false,false,true,0,Ac-26697600
,3,true,1,false,1,0,1,0,true,true);this.AW(276000312343978,4,1,Ac-246499200,0,1,
false,false,false,true,0,Ac-27475200,4,true,1,false,1,0,1,0,true,true);this.AW(276000313780210
,5,1,Ac-2851200,0,0,false,false,false,true,0,0,0,false,0,true,85,0,2,0,true,false
);this.AW(276000314777390,5,1,Ac-2937600,0,0,false,false,false,true,0,0,0,false,
0,true,85,0,2,0,true,false);this.AW(276000314977845,5,1,Ac-2332800,0,0,false,false
,false,true,0,0,0,false,0,true,85,0,2,0,true,false);this.AW(276000315140539,5,1,
Ac-2419200,0,0,false,false,false,true,0,0,0,false,0,true,85,0,2,0,true,false);this.
AW(276000315692447,5,1,Ac-3024000,0,0,false,false,false,true,0,0,0,false,0,true,
85,0,2,0,true,false);this.AW(276000316480395,5,1,Ac-2160000,0,0,false,false,false
,true,0,0,0,false,0,true,85,0,2,0,true,false);this.AW(276000316728887,5,1,Ac-2592000
,0,0,false,false,false,true,0,0,0,false,0,true,85,0,2,0,true,false);this.AW(276000317235905
,5,1,Ac-2678400,0,0,false,false,false,true,0,0,0,false,0,true,85,0,2,0,true,false
);this.AW(276000318229464,5,1,Ac-2505600,0,0,false,false,false,true,0,0,0,false,
0,true,85,0,2,0,true,false);this.AW(276000321244611,5,1,Ac-2764800,0,0,false,false
,false,true,0,0,0,false,0,true,85,0,2,0,true,false);this.AW(276000330343809,5,1,
Ac-2246400,0,0,false,false,false,true,0,0,0,false,0,true,85,0,2,0,true,false);this.
AW(276000332086943,5,1,Ac-2592000,0,0,false,false,false,true,0,0,0,false,0,true,
85,0,2,0,true,false);this.AW(276000334073970,5,1,Ac-2505600,0,0,false,false,false
,true,0,0,0,false,0,true,85,0,2,0,true,false);this.AW(276000338829483,5,1,Ac-2332800
,0,0,false,false,false,true,0,0,0,false,0,true,85,0,2,0,true,false);this.AW(276000339648313
,5,1,Ac-2678400,0,0,false,false,false,true,0,0,0,false,0,true,85,0,2,0,true,false
);this.AW(276000340765035,5,1,Ac-2851200,0,0,false,false,false,true,0,0,0,false,
0,true,85,0,2,0,true,false);this.AW(276000342945700,5,1,Ac-2937600,0,0,false,false
,false,true,0,0,0,false,0,true,85,0,2,0,true,false);this.AW(276000344582503,5,1,
Ac-2419200,0,0,false,false,false,true,0,0,0,false,0,true,85,0,2,0,true,false);this.
AW(276000346216758,5,1,Ac-2160000,0,0,false,false,false,true,0,0,0,false,0,true,
85,0,2,0,true,false);this.AW(276000349254319,5,1,Ac-2246400,0,0,false,false,false
,true,0,0,0,false,0,true,85,0,2,0,true,false);this.AW(276000350106638,5,1,Ac-2764800
,0,0,false,false,false,true,0,0,0,false,0,true,85,0,2,0,true,false);this.AW(276000351694678
,5,1,Ac-3024000,0,0,false,false,false,true,0,0,0,false,0,true,85,0,2,0,true,false
);this.AW(276000352864356,5,1,Ac-2592000,0,0,false,false,false,true,0,0,0,false,
0,true,85,0,2,0,true,false);this.AW(276000357087895,5,1,Ac-2678400,0,0,false,false
,false,true,0,0,0,false,0,true,85,0,2,0,true,false);this.AW(276000360408431,5,1,
Ac-2419200,0,0,false,false,false,true,0,0,0,false,0,true,85,0,2,0,true,false);this.
AW(276000360428432,5,1,Ac-2246400,0,0,false,false,false,true,0,0,0,false,0,true,
85,0,2,0,true,false);this.AW(276000361295801,5,1,Ac-2937600,0,0,false,false,false
,true,0,0,0,false,0,true,85,0,2,0,true,false);this.AW(276000362208448,5,1,Ac-2332800
,0,0,false,false,false,true,0,0,0,false,0,true,85,0,2,0,true,false);this.AW(276000362238024
,5,1,Ac-2764800,0,0,false,false,false,true,0,0,0,false,0,true,85,0,2,0,true,false
);this.AW(276000363021861,5,1,Ac-2160000,0,0,false,false,false,true,0,0,0,false,
0,true,85,0,2,0,true,false);this.AW(276000367048797,5,1,Ac-3024000,0,0,false,false
,false,true,0,0,0,false,0,true,85,0,2,0,true,false);this.AW(276000368244690,5,1,
Ac-2851200,0,0,false,false,false,true,0,0,0,false,0,true,85,0,2,0,true,false);this.
AW(276000368296663,5,1,Ac-2505600,0,0,false,false,false,true,0,0,0,false,0,true,
85,0,2,0,true,false);this.AW(276000371847138,5,1,Ac-2678400,0,0,false,false,false
,true,0,0,0,false,0,true,85,0,2,0,true,false);this.AW(276000373128650,5,1,Ac-2332800
,0,0,false,false,false,true,0,0,0,false,0,true,85,0,2,0,true,false);this.AW(276000374997742
,5,1,Ac-2764800,0,0,false,false,false,true,0,0,0,false,0,true,85,0,2,0,true,false
);this.AW(276000387530696,5,1,Ac-2160000,0,0,false,false,false,true,0,0,0,false,
0,true,85,0,2,0,true,false);this.AW(276000389548473,5,1,Ac-3024000,0,0,false,false
,false,true,0,0,0,false,0,true,85,0,2,0,true,false);this.AW(276000390861654,5,1,
Ac-2419200,0,0,false,false,false,true,0,0,0,false,0,true,85,0,2,0,true,false);this.
AW(276000392014618,5,1,Ac-2851200,0,0,false,false,false,true,0,0,0,false,0,true,
85,0,2,0,true,false);},AJp:function(G){var Ac=A._GetAutoObject(A.Device.Helper).
Dt();this.AF(Ac-3542400,276000312342001,0,0,5,5,3,5,84100);this.AF(Ac-3542400,276000312342002
,0,0,5,5,3,5,77500);this.AF(Ac-3542400,276000312342003,0,0,5,5,3,5,79700);this.AF(
Ac-3542400,276000312342004,0,0,5,5,3,5,78900);this.AF(Ac-3542400,276000312342005
,0,0,5,5,3,5,87200);this.AF(Ac-3542400,276000312342006,0,0,5,5,3,5,82400);this.AF(
Ac-3542400,276000312342007,0,0,5,5,3,5,81900);this.AF(Ac-3542400,276000312342008
,0,0,5,5,3,5,80500);this.AF(Ac-3542400,276000312342009,0,0,5,5,3,5,82800);this.AF(
Ac-3542400,276000312342010,0,0,5,5,3,5,82000);this.AF(Ac-3542400,276000312342011
,0,0,5,5,3,5,78400);this.AF(Ac-3542400,276000312342012,0,0,5,5,3,5,80500);this.AF(
Ac-3542400,276000312342013,0,0,5,5,3,5,82600);this.AF(Ac-3542400,276000312342014
,0,0,5,5,3,5,0);this.AF(Ac-3542400,276000312342015,0,0,5,5,3,5,80100);this.AF(Ac-
3542400,276000312342016,0,0,5,5,3,5,81100);this.AF(Ac-3542400,276000312342017,0,
0,5,5,3,5,77000);this.AF(Ac-3542400,276000312342018,0,0,5,5,3,5,80300);this.AF(Ac-
3542400,276000312342019,0,0,5,5,3,5,76500);this.AF(Ac-3542400,276000312342020,0,
0,5,5,3,5,80500);this.AF(Ac-3542400,276000312342021,0,0,5,5,3,5,81500);this.AF(Ac-
3542400,276000312342022,0,0,5,5,3,5,80600);this.AF(Ac-3542400,276000312342023,0,
0,5,5,3,5,74400);this.AF(Ac-3542400,276000312342024,0,0,5,5,3,5,80000);this.AF(Ac-
3542400,276000312342025,0,0,5,5,3,5,74500);this.AF(Ac-3542400,276000312342026,0,
0,5,5,3,5,84800);this.AF(Ac-3542400,276000312342027,0,0,5,5,3,5,88200);this.AF(Ac-
3542400,276000312342028,0,0,5,5,3,5,79000);this.AF(Ac-3542400,276000312342029,0,
0,5,5,3,5,82000);this.AF(Ac-3542400,276000312342030,0,0,5,5,3,5,79500);this.AF(Ac-
3542400,276000312342031,0,0,5,5,3,5,82600);this.AF(Ac-3542400,276000312342032,0,
0,5,5,3,5,86800);this.AF(Ac-3542400,276000312342033,0,0,5,5,3,5,77000);this.AF(Ac-
3542400,276000312342034,0,0,5,5,3,5,76000);this.AF(Ac-3542400,276000312342035,0,
0,5,5,3,5,78100);this.AF(Ac-3542400,276000312342036,0,0,5,5,3,5,0);this.AF(Ac-3542400
,276000312342037,0,0,5,5,3,5,84700);this.AF(Ac-3542400,276000312342038,0,0,5,5,3
,5,85400);this.AF(Ac-3542400,276000312342039,0,0,5,5,3,5,76500);this.AF(Ac-3542400
,276000312342040,0,0,5,5,3,5,81500);this.AF(Ac-3542400,276000312342041,0,0,5,5,3
,5,81100);this.AF(Ac-3542400,276000312342042,0,0,5,5,3,5,67500);this.AF(Ac-3542400
,276000312342043,0,0,5,5,3,5,80000);this.AF(Ac-3542400,276000312342044,0,0,5,5,3
,5,70500);this.AF(Ac-3542400,276000312342045,0,0,5,5,3,5,74000);this.AF(Ac-3542400
,276000312342046,0,0,5,5,3,5,66000);this.AF(Ac-3542400,276000312342047,0,0,5,5,2
,5,69600);this.AF(Ac-3542400,276000312342048,0,0,5,5,3,5,78500);this.AF(Ac-3542400
,276000312342049,0,0,5,5,3,5,79000);this.AF(Ac-3542400,276000312342050,0,0,5,5,3
,5,70100);this.AF(Ac-3542400,276000312342051,0,0,5,5,3,5,74500);this.AF(Ac-3542400
,276000312342052,0,0,5,5,3,5,80000);this.AF(Ac-3542400,276000312342053,0,0,5,5,3
,5,63400);this.AF(Ac-3542400,276000312342054,0,0,5,5,3,5,69200);this.AF(Ac-3542400
,276000312342055,0,0,5,5,3,5,78400);this.AF(Ac-3542400,276000312342056,0,0,5,5,3
,5,69800);this.AF(Ac-3542400,276000312342057,0,0,5,5,3,5,72700);this.AF(Ac-3542400
,276000312342058,0,0,0,0,0,0,64200);this.AF(Ac-3542400,276000312342059,0,0,5,5,3
,5,72000);this.AF(Ac-3542400,276000312342060,0,0,5,5,3,5,61100);this.AF(Ac,276000312342001
,0,0,0,0,0,0,120500);this.AF(Ac,276000312342002,0,0,0,0,0,0,111500);this.AF(Ac,276000312342003
,0,0,0,0,0,0,110600);this.AF(Ac,276000312342004,0,0,0,0,0,0,106700);this.AF(Ac,276000312342005
,0,0,0,0,0,0,117200);this.AF(Ac,276000312342006,0,0,0,0,0,0,116400);this.AF(Ac,276000312342007
,0,0,0,0,0,0,118900);this.AF(Ac,276000312342008,0,0,0,0,0,0,107000);this.AF(Ac,276000312342009
,0,0,0,0,0,0,122100);this.AF(Ac,276000312342010,0,0,0,0,0,0,94100);this.AF(Ac,276000312342011
,0,0,0,0,0,0,114800);this.AF(Ac,276000312342012,0,0,0,0,0,0,109600);this.AF(Ac,276000312342013
,0,0,0,0,0,0,111000);this.AF(Ac,276000312342015,0,0,0,0,0,0,114700);this.AF(Ac,276000312342016
,0,0,0,0,0,0,100500);this.AF(Ac,276000312342017,0,0,0,0,0,0,116300);this.AF(Ac,276000312342018
,0,0,0,0,0,0,110500);this.AF(Ac,276000312342019,0,0,0,0,0,0,123000);this.AF(Ac,276000312342020
,0,0,0,0,0,0,118600);this.AF(Ac,276000312342021,0,0,0,0,0,0,120300);this.AF(Ac,276000312342022
,0,0,0,0,0,0,109000);this.AF(Ac,276000312342023,0,0,0,0,0,0,104000);this.AF(Ac,276000312342024
,0,0,0,0,0,0,112600);this.AF(Ac,276000312342025,0,0,0,0,0,0,106000);this.AF(Ac,276000312342026
,0,0,0,0,0,0,122000);this.AF(Ac,276000312342027,0,0,0,0,0,0,122000);this.AF(Ac,276000312342028
,0,0,0,0,0,0,122300);this.AF(Ac,276000312342029,0,0,0,0,0,0,117100);this.AF(Ac,276000312342030
,0,0,0,0,0,0,100100);this.AF(Ac,276000312342031,0,0,0,0,0,0,126100);this.AF(Ac,276000312342032
,0,0,0,0,0,0,116800);this.AF(Ac,276000312342033,0,0,0,0,0,0,103200);this.AF(Ac,276000312342034
,0,0,0,0,0,0,109000);this.AF(Ac,276000312342035,0,0,0,0,0,0,128000);this.AF(Ac,276000312342037
,0,0,0,0,0,0,115600);this.AF(Ac,276000312342038,0,0,0,0,0,0,120600);this.AF(Ac,276000312342039
,0,0,0,0,0,0,104400);this.AF(Ac,276000312342040,0,0,0,0,0,0,102300);this.AF(Ac,276000312342041
,0,0,0,0,0,0,114500);this.AF(Ac,276000312342042,0,0,0,0,0,0,99000);this.AF(Ac,276000312342043
,0,0,0,0,0,0,104300);this.AF(Ac,276000312342044,0,0,0,0,0,0,108600);this.AF(Ac,276000312342045
,0,0,0,0,0,0,117200);this.AF(Ac,276000312342046,0,0,0,0,0,0,105000);this.AF(Ac,276000312342047
,0,0,0,0,0,0,108400);this.AF(Ac,276000312342048,0,0,0,0,0,0,117700);this.AF(Ac,276000312342049
,0,0,0,0,0,0,115000);this.AF(Ac,276000312342050,0,0,0,0,0,0,110800);this.AF(Ac,276000312342051
,0,0,0,0,0,0,91300);this.AF(Ac,276000312342052,0,0,0,0,0,0,103600);this.AF(Ac,276000312342053
,0,0,0,0,0,0,104700);this.AF(Ac,276000312342054,0,0,0,0,0,0,101900);this.AF(Ac,276000312342055
,0,0,0,0,0,0,120000);this.AF(Ac,276000312342056,0,0,0,0,0,0,114200);this.AF(Ac,276000312342057
,0,0,0,0,0,0,91800);this.AF(Ac,276000312342058,0,0,0,0,0,0,93100);this.AF(Ac,276000312342059
,0,0,0,0,0,0,102300);this.AF(Ac,276000312342060,0,0,0,0,0,0,100900);this.AF(Ac-9158400
,276000312341005,3910,2,0,0,0,0,0);this.AF(Ac-9072000,276000312341005,3970,2,0,0
,0,0,0);this.AF(Ac-8985600,276000312341005,3900,2,0,0,0,0,0);this.AF(Ac-8899200,
276000312341005,3830,3,0,0,0,0,0);this.AF(Ac-8812800,276000312341005,3810,3,0,0,
0,0,0);this.AF(Ac-6307200,276000312341005,4050,1,0,0,0,0,0);this.AF(Ac-6220800,276000312341005
,3900,2,0,0,0,0,0);this.AF(Ac-6134400,276000312341005,3810,3,0,0,0,0,0);this.AF(
Ac-6048000,276000312341005,3780,3,0,0,0,0,0);this.AF(Ac-5961600,276000312341005,
3820,3,0,0,0,0,0);this.AF(Ac-432000,276000312341005,4000,2,0,0,0,0,0);this.AF(Ac-
86400,276000312341005,4020,2,0,0,0,0,0);this.AF(Ac,276000312341005,3950,2,0,0,0,
0,0);this.AF(Ac-86400,276000312343117,4000,2,0,0,0,0,0);this.AF(Ac-172800,276000312343044
,4030,2,0,0,0,0,0);this.AF(Ac-86400,276000312343044,4100,1,0,0,0,0,0);this.AF(Ac-
259200,276000312343376,4050,1,0,0,0,0,0);this.AF(Ac-172800,276000312343376,3900,
2,0,0,0,0,0);this.AF(Ac-86400,276000312343376,3780,3,0,0,0,0,0);this.AF(Ac-345600
,276000312343204,3910,2,0,0,0,0,0);this.AF(Ac-259200,276000312343204,3980,2,0,0,
0,0,0);this.AF(Ac-172800,276000312343204,4010,2,0,0,0,0,0);this.AF(Ac-86400,276000312343204
,3980,2,0,0,0,0,0);this.AF(Ac-432000,276000312343232,4110,1,0,0,0,0,0);this.AF(Ac-
345600,276000312343232,3910,2,0,0,0,0,0);this.AF(Ac-259200,276000312343232,3940,
2,0,0,0,0,0);this.AF(Ac-172800,276000312343232,3870,3,0,0,0,0,0);this.AF(Ac-86400
,276000312343232,3920,2,0,0,0,0,0);this.AF(Ac-518400,276000312343065,3810,3,0,0,
0,0,0);this.AF(Ac-432000,276000312343065,3870,3,0,0,0,0,0);this.AF(Ac-345600,276000312343065
,4030,2,0,0,0,0,0);this.AF(Ac-259200,276000312343065,3890,3,0,0,0,0,0);this.AF(Ac-
172800,276000312343065,3720,3,0,0,0,0,0);this.AF(Ac-86400,276000312343065,3940,2
,0,0,0,0,0);this.AF(Ac-604800,276000312343420,3830,3,0,0,0,0,0);this.AF(Ac-518400
,276000312343420,3940,2,0,0,0,0,0);this.AF(Ac-432000,276000312343420,3980,2,0,0,
0,0,0);this.AF(Ac-345600,276000312343420,3900,2,0,0,0,0,0);this.AF(Ac-259200,276000312343420
,3650,3,0,0,0,0,0);this.AF(Ac-172800,276000312343420,4110,1,0,0,0,0,0);this.AF(Ac-
86400,276000312343420,3860,3,0,0,0,0,0);this.AF(Ac-691200,276000312343308,3710,3
,0,0,0,0,0);this.AF(Ac-604800,276000312343308,3690,3,0,0,0,0,0);this.AF(Ac-518400
,276000312343308,3810,3,0,0,0,0,0);this.AF(Ac-432000,276000312343308,3770,3,0,0,
0,0,0);this.AF(Ac-345600,276000312343308,3670,3,0,0,0,0,0);this.AF(Ac-259200,276000312343308
,3970,2,0,0,0,0,0);this.AF(Ac-172800,276000312343308,3680,3,0,0,0,0,0);this.AF(Ac-
86400,276000312343308,3710,3,0,0,0,0,0);this.AF(Ac-777600,276000312343409,4090,1
,0,0,0,0,0);this.AF(Ac-691200,276000312343409,3690,3,0,0,0,0,0);this.AF(Ac-604800
,276000312343409,4100,1,0,0,0,0,0);this.AF(Ac-518400,276000312343409,3840,3,0,0,
0,0,0);this.AF(Ac-432000,276000312343409,3660,3,0,0,0,0,0);this.AF(Ac-345600,276000312343409
,3900,2,0,0,0,0,0);this.AF(Ac-259200,276000312343409,3780,3,0,0,0,0,0);this.AF(Ac-
172800,276000312343409,3780,3,0,0,0,0,0);this.AF(Ac-86400,276000312343409,3870,3
,0,0,0,0,0);this.AF(Ac-864000,276000312343007,3850,3,0,0,0,0,0);this.AF(Ac-777600
,276000312343007,3680,3,0,0,0,0,0);this.AF(Ac-691200,276000312343007,4020,2,0,0,
0,0,0);this.AF(Ac-604800,276000312343007,3830,3,0,0,0,0,0);this.AF(Ac-518400,276000312343007
,3670,3,0,0,0,0,0);this.AF(Ac-432000,276000312343007,3910,2,0,0,0,0,0);this.AF(Ac-
345600,276000312343007,4090,1,0,0,0,0,0);this.AF(Ac-259200,276000312343007,3680,
3,0,0,0,0,0);this.AF(Ac-172800,276000312343007,4130,1,0,0,0,0,0);this.AF(Ac-86400
,276000312343007,3730,3,0,0,0,0,0);},AJm:function(G){this.Alm(1,WQ);this.Alm(2,WR
);this.Alm(3,SU);},AJo:function(G){this.Aab(2016,216,11);this.Aab(2017,217,10);this.
Aab(2018,218,9);this.Aab(2019,219,8);this.Aab(2020,220,7);this.Aab(2021,221,6);}
,_Init:function(aArg){var K=this.K;K.__proto__=C.PM;A.h7++;},_Done:function(){var
K=this.K;K.__proto__=null;A.h7--;},_ReInit:function(){},_Mark:function(D){},_variants:
function(){return this;},_className:"DeviceDemonstrator::TableData"};
C._Init=function(){C.DeviceClass.__proto__=A.acr.DeviceClass;};C._ReInit=function(
){var B;if((B=C.Uk._this))B._ReInit(),C.Uk._ReInit.call(B);if((B=C.K8._this))B._ReInit(
),C.K8._ReInit.call(B);if((B=C.ApS._this))B._ReInit(),C.ApS._ReInit.call(B);if((
B=C.Agn._this))B._ReInit(),C.Agn._ReInit.call(B);};C.DB=function(D){var B;if((B=
C.Uk._this)&&(B._cycle!=D))B._Done(C.Uk._this=null);if((B=C.K8._this)&&(B._cycle
!=D))B._Done(C.K8._this=null);if((B=C.ApS._this)&&(B._cycle!=D))B._Done(C.ApS._this=
null);if((B=C.Agn._this)&&(B._cycle!=D))B._Done(C.Agn._this=null);};return C;})(
);

/* VitalControl demonstration application, © Urban GmbH & Co.KG 2023 */