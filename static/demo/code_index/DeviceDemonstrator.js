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
var B9=[0,0];var BC=[0,0,1000,740];var EW=[200,5,577,745];var He=[270,69,510,389];
var I7=[605,30,975,740];var IH=[25,25,45,41];var OM=[547,610,687,750];var PQ=[270
,390];var PR=[350,390];var CO=[350,450];var E4=[270,450];var Ln=[430,390];var PT=[
510,390];var Ko=[510,450];var NY=[430,450];var PU=[360,390];var Mw=[420,390];var
SL=[420,450];var Uu=[360,450];var Zs=[335,460];var Ww=[447,460];var II=[447,500];
var Uv=[335,500];var Zt=[350,512];var Wx=[430,512];var Zu=[430,592];var Uw=[350,
592];var Zv=[335,605];var Zw=[447,605];var Ux=[447,665];var Wy=[335,665];var Q4=[
264,504];var Zx=[344,504];var ON=[344,601];var PV=[264,601];var Wz=[436,504];var
WA=[516,504];var WC=[516,601];var Zy=[436,601];var Zz=[10,130,210,310];var WD="1";
var WE="2";var SM="3";
C.A3f={BdS:null,Background:null,AbN:null,Ako:null,Af3:null,Am:null,Zg:null,SA:null
,Zh:null,Zj:null,Zi:null,Wr:null,Zk:null,Wl:null,Wp:null,Wq:null,AaD:null,Df:null
,Init:function(aArg){A._GetAutoObject(A.Device.Device).Arg(A._NewObject(A.Device.
Transponder,0));},DriveCursorHitting:function(SQ,BD,E6){var AI4=this.ANn();if(!!
AI4){var A0z=AI4.M;A0z=A.abJ(A0z,AI4.BgF(B9));if(!A.wa(A0z,E6))this.ABz(AI4);}return A.
Core.Root.DriveCursorHitting.call(this,SQ,BD,E6);},Bmm:function(G){var K=this.K;
this.Device.UpdateActiveScreen(3);K.Ako.Ar(false);},Np:function(G){var K=this.K;
var B;var DW=(A.Core.Bi.isPrototypeOf(G)?G:null);var Ah9=0;if(DW===K.Zi)Ah9=27;else
if(DW===K.Zh)Ah9=26;else if(DW===K.Zj)Ah9=28;else if(DW===K.Wp)Ah9=6;else if(DW===
K.Wq)Ah9=7;else if(DW===K.Wr)Ah9=4;else if(DW===K.Wl)Ah9=5;else if(DW===K.Zk)Ah9=
1;if(!!DW){if((DW.Down&&(DW.Jg>0))&&(DW.Jg<400))return;var Bv$=this.AR;this.A8(this.
Gx);this.Ib().DriveKeyboardHitting(Ah9,0x00,DW.Down);this.A8(Bv$);K.SA.H(A.abM(K.
SA.M,DW.HT[0]-((((B=K.SA.M)[2]-B[0])/2)|0)));K.SA.H(A.abO(K.SA.M,DW.HT[1]-((((B=
K.SA.M)[3]-B[1])/2)|0)));K.Zg.Ar(true);}},Aig:function(G){var K=this.K;var B;var
Jq=(A.Core.BJ.isPrototypeOf(G)?G:null);if((String.fromCharCode(Jq.DI).toLowerCase(
).charCodeAt(0)||0)===0x73)A._GetAutoObject(C.K5).BcM(this);else if((String.fromCharCode(
Jq.DI).toLowerCase().charCodeAt(0)||0)===0x74)A._GetAutoObject(A.Device.Helper).
AJK(this);else if((String.fromCharCode(Jq.DI).toLowerCase().charCodeAt(0)||0)===
0x64)this.A8(this.Gx);else if((String.fromCharCode(Jq.DI).toLowerCase().charCodeAt(
0)||0)===0x63)this.A8(K.Af3);else if(Jq.CI===152){if(this.AR===K.Af3)this.A8(this.
Gx);else this.A8(K.Af3);}else if(this.AR===this.Gx){if(Jq.CI===11){this.Ib().DriveKeyboardHitting(
26,0x00,true);this.Ib().DriveKeyboardHitting(26,0x00,false);}else if(Jq.CI===12){
this.Ib().DriveKeyboardHitting(27,0x00,true);this.Ib().DriveKeyboardHitting(27,0x00
,false);}else if(Jq.CI===13){this.Ib().DriveKeyboardHitting(28,0x00,true);this.Ib(
).DriveKeyboardHitting(28,0x00,false);}}},_Init:function(aArg){var K=this.K;A.acg.
Am._Init.call(K.Background={I:this},0);A.acg.Am._Init.call(K.AbN={I:this},0);A.Core.
Timer._Init.call(K.Ako={I:this},0);A.acw.ASS._Init.call(K.Af3={I:this},0);A.acg.
Am._Init.call(K.Am={I:this},0);A.acl.ALZ._Init.call(K.Zg={I:this},0);A.acg.Am._Init.
call(K.SA={I:this},0);A.Core.Bi._Init.call(K.Zh={I:this},0);A.Core.Bi._Init.call(
K.Zj={I:this},0);A.Core.Bi._Init.call(K.Zi={I:this},0);A.Core.Bi._Init.call(K.Wr={
I:this},0);A.Core.Bi._Init.call(K.Zk={I:this},0);A.Core.Bi._Init.call(K.Wl={I:this
},0);A.Core.Bi._Init.call(K.Wp={I:this},0);A.Core.Bi._Init.call(K.Wq={I:this},0);
A.acw.AaD._Init.call(K.AaD={I:this},0);A.Core.BJ._Init.call(K.Df={I:this},0);K.__proto__=
C.A3f;var B;this.H(BC);K.Background.H(BC);K.AbN.H(EW);this.Gx.H(He);K.Ako.PC(2000
);K.Ako.Ar(true);K.Af3.H(I7);K.Am.H(IH);K.Zg.Akq=true;K.Zg.Wa(9);K.Zg.HF(1);K.Zg.
Ff(300);K.Zg.BY=0xA0FFFFFF;K.Zg.Cq=0x00FFFFFF;K.SA.H(OM);K.SA.L(0x00FFFFFF);K.Zh.
Ke(PQ);K.Zh.Kd(PR);K.Zh.DK(CO);K.Zh.DY(E4);K.Zj.Ke(Ln);K.Zj.Kd(PT);K.Zj.DK(Ko);K.
Zj.DY(NY);K.Zi.Ke(PU);K.Zi.Kd(Mw);K.Zi.DK(SL);K.Zi.DY(Uu);K.Wr.Ke(Zs);K.Wr.Kd(Ww
);K.Wr.DK(II);K.Wr.DY(Uv);K.Zk.Ke(Zt);K.Zk.Kd(Wx);K.Zk.DK(Zu);K.Zk.DY(Uw);K.Wl.Ke(
Zv);K.Wl.Kd(Zw);K.Wl.DK(Ux);K.Wl.DY(Wy);K.Wp.Ke(Q4);K.Wp.Kd(Zx);K.Wp.DK(ON);K.Wp.
DY(PV);K.Wq.Ke(Wz);K.Wq.Kd(WA);K.Wq.DK(WC);K.Wq.DY(Zy);K.AaD.H(Zz);this.J(K.Background
,-1);this.J(K.AbN,-1);this.J(K.Af3,0);this.J(K.Am,0);this.J(K.SA,0);this.J(K.Zh,
0);this.J(K.Zj,0);this.J(K.Zi,0);this.J(K.Wr,0);this.J(K.Zk,0);this.J(K.Wl,0);this.
J(K.Wp,0);this.J(K.Wq,0);this.J(K.AaD,0);K.Background.Ax(A.aaL(A.acw.Background)
);K.AbN.Ax(A.aaL(A.acx.AbN));K.Ako.Mp=[this,K.Bmm];K.Am.Ax(A.aaL(A.acw.AQc));K.Zg.
Q=[B=K.SA,B.Bh_,B.L];K.SA.Ax(A.aaL(A.acx.APV));K.Zh.Lg=[this,K.Np];K.Zh.BK=[this
,K.Np];K.Zj.Lg=[this,K.Np];K.Zj.BK=[this,K.Np];K.Zi.Lg=[this,K.Np];K.Zi.BK=[this
,K.Np];K.Wr.DS=[this,K.Np];K.Wr.Lg=[this,K.Np];K.Wr.BK=[this,K.Np];K.Zk.Lg=[this
,K.Np];K.Zk.BK=[this,K.Np];K.Wl.DS=[this,K.Np];K.Wl.Lg=[this,K.Np];K.Wl.BK=[this
,K.Np];K.Wp.DS=[this,K.Np];K.Wp.Lg=[this,K.Np];K.Wp.BK=[this,K.Np];K.Wq.DS=[this
,K.Np];K.Wq.Lg=[this,K.Np];K.Wq.BK=[this,K.Np];K.AaD.AbC([B=A._GetAutoObject(A.Device.
Helper),B.UA,B.UB]);K.Df.BK=[this,K.Aig];K.BdS=A._GetAutoObject(A.acr.AbV);K.Init.
call(this,aArg);A.h7++;},_Done:function(){var K=this.K;K.__proto__=null;K.Background.
_Done();K.AbN._Done();K.Ako._Done();K.Af3._Done();K.Am._Done();K.Zg._Done();K.SA.
_Done();K.Zh._Done();K.Zj._Done();K.Zi._Done();K.Wr._Done();K.Zk._Done();K.Wl._Done(
);K.Wp._Done();K.Wq._Done();K.AaD._Done();K.Df._Done();A.h7--;},_ReInit:function(
){var K=this.K;K.Background._ReInit();K.AbN._ReInit();K.Ako._ReInit();K.Af3._ReInit(
);K.Am._ReInit();K.Zg._ReInit();K.SA._ReInit();K.Zh._ReInit();K.Zj._ReInit();K.Zi.
_ReInit();K.Wr._ReInit();K.Zk._ReInit();K.Wl._ReInit();K.Wp._ReInit();K.Wq._ReInit(
);K.AaD._ReInit();K.Df._ReInit();},_Mark:function(D){var B;if((B=this.BdS)&&(B._cycle
!=D))B._Mark(B._cycle=D);if((B=this.Background)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.AbN)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ako)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Af3)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Am)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Zg)._cycle!=D)B._Mark(B._cycle=D);if((B=this.SA)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.Zh)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Zj
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Zi)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Wr)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Zk)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Wl)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Wp)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Wq)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AaD)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.Df)._cycle!=D)B._Mark(B._cycle=D);},_variants:function(
){return this;},_className:"DeviceDemonstrator::ApplicationDemonstration"};C.DeviceClass={
AIz:null,AuN:null,At2:null,Init:function(aArg){var K=this.K;var B;A.zV([this,K.BhV
],this.Aq,0);A.zX([this,K.Bj$],[B=K.AIz,B.A7d,B.A8s],0);A.zX([this,K.Bjd],[B=K.AIz
,B.A6I,B.ARo],0);},Arf:function(E){this.UpdateScanState(E);},Av3:function(E){this.
UpdateMeasureState(E);},Awb:function(E){this.UpdateTempValue(E);},AwI:function(){
this.UpdateMeasureState(1);this.UpdateTempValue(0);},Aha:function(){var B;A._GetAutoObject(
A.Device.Helper).St.Ant(this);this.UpdateMeasureState(0);},AeN:function(){this.UpdateScanState(
1);},Anu:function(){this.UpdateScanState(0);},Arg:function(E){this.UpdateScanTransponder(
E.Id,E.TransponderType,E.TransponderProtocol);if(this.ScanState!==1)return;this.
UpdateScanState(2);},Bj$:function(G){var K=this.K;var Ald=A._GetAutoObject(C.K5).
AFi;if(Ald<0)K.AuN=null;else{K.AuN=A._NewObject(A.Device.Int32FilterCriterion,0);
K.AuN.Initialize(2,0,Ald,true);}A.pe([this,K.Bm],this);},Bjd:function(G){var K=this.
K;var BdG=A._GetAutoObject(C.K5).AAC;if(BdG<=0)K.At2=null;else{K.At2=A._NewObject(
A.Device.Int32FilterCriterion,0);K.At2.Initialize(1,4,BdG,false);}A.pe([this,K.Bm
],this);},Bm:function(G){var K=this.K;var Bc=A._GetAutoObject(A.Device.Helper).MZ(
);Bc.CZ(K.AuN);Bc.CZ(K.At2);A._GetAutoObject(C.ApF).Bm(Bc);},BhV:function(G){var
K=this.K;A.pe([this,K.Bm],this);},_Init:function(aArg){var K=this.K;A.acr.DeviceClass.
_Init.call(this,aArg);K.__proto__=C.DeviceClass;this.PB(4);this.Av9(276034580109999
);K.AIz=A._GetAutoObject(C.K5);K.Init.call(this,aArg);},_Mark:function(D){var B;
A.acr.DeviceClass._Mark.call(this,D);if((B=this.AIz)&&(B._cycle!=D))B._Mark(B._cycle=
D);if((B=this.AuN)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.At2)&&(B._cycle
!=D))B._Mark(B._cycle=D);},_variants:function(){return this;},_className:"DeviceDemonstrator::DeviceClass"
};C.Ud={_Init:function(){A.acr.Ud._Init.call(this,0);this.ARV(false);this.ARW(false
);},_ReInit:function(){A.acr.Ud._ReInit.call(this,0);},_variants:function(){return this;
},_this:null};C.A4e={TransponderId:0,AFi:0,AAC:0,ArO:null,ArY:3950,Awt:true,A8s:
function(E){if(this.AFi===E)return;this.AFi=E;A.abo([this,this.A7d,this.A8s],0);
},A7d:function(){return this.AFi;},ARo:function(E){if(this.AAC===E)return;this.AAC=
E;A.abo([this,this.A6I,this.ARo],0);},A6I:function(){return this.AAC;},BcM:function(
G){this.Az9(this.TransponderId);},M9:function(E){if(this.TransponderId===E)return;
this.TransponderId=E;A.abo([this,this.AjU,this.M9],0);},A8t:function(E){if(this.
ArO===E)return;this.ArO=E;A.abo([this,this.A7e,this.A8t],0);},A7e:function(){return this.
ArO;},Az9:function(JR){var B;var Jb=false;if((A._GetAutoObject(A.Device.Device).
ScanState===1)&&!!JR){A._GetAutoObject(A.Device.Device).OC.AR8(1);A._GetAutoObject(
A.Device.Device).OC.OnSetId(JR);A._GetAutoObject(A.Device.Device).OC.AR7(2);A._GetAutoObject(
A.Device.Device).Arf(2);A.abo([B=A._GetAutoObject(A.Device.Device),B.ARe,B.AYC],
0);Jb=true;}return Jb;},ARR:function(E){if(this.Awt===E)return;this.Awt=E;A.abo([
this,this.ARb,this.ARR],0);},A8x:function(E){if(this.ArY===E)return;this.ArY=E;A.
abo([this,this.BiO,this.A8x],0);},Bcx:function(G){var B;if(this.Awt)A._GetAutoObject(
A.Device.Helper).AJK(this);else A._GetAutoObject(A.Device.Helper).BaK(this.ArY);
},AjU:function(){return this.TransponderId;},ARb:function(){return this.Awt;},BiO:
function(){return this.ArY;},_Init:function(aArg){this.__proto__=C.A4e;this.ArO=
A.acw.ALa;A.h7++;},_Done:function(){this.__proto__=null;A.h7--;},_ReInit:function(
){},_Mark:function(D){var B;if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:
null,_cycle:0,_observers:null,_className:"DeviceDemonstrator::DemonstrationConfigClass"
};C.K5={_Init:function(){C.A4e._Init.call(this,0);},_ReInit:function(){},_variants:
function(){return this;},_this:null};C.ApF={_Init:function(){A.Device.Table._Init.
call(this,0);this.OnSetId(0);},_ReInit:function(){},_variants:function(){return this;
},_this:null};C.A4f={Ag7:A.jV,Delete:function(){this.AEu(A.abV(this.Ag7,this.Ag7.
length-1));},E$:function(Acs){if(!this.Ag7.length&&(Acs===0x30))return;if(this.Ag7.
length<6)this.AEu(this.Ag7+String.fromCharCode(Acs));},AEu:function(E){if(this.Ag7===
E)return;this.Ag7=E;A.abo([this,this.A7b,this.AEu],0);A._GetAutoObject(C.K5).ARo(
A.wz(this.Ag7,-1,10));},A7b:function(){return this.Ag7;},_Init:function(aArg){this.
__proto__=C.A4f;A.h7++;},_Done:function(){this.__proto__=null;A.h7--;},_ReInit:function(
){},_Mark:function(D){var B;if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:
null,_cycle:0,_observers:null,_className:"DeviceDemonstrator::DemonstrationSearchHelperClass"
};C.Af$={_Init:function(){C.A4f._Init.call(this,0);},_ReInit:function(){},_variants:
function(){return this;},_this:null};C.PG={AII:function(G){var Ad=A._GetAutoObject(
A.Device.Helper).Dy();this.Bj(276000312341001,2,1,Ad-1382400,0,1,false,false,false
,true,40800,0,0,false,0,false,1,1,1,0);this.Bj(276000312341002,2,1,Ad-1296000,0,
1,false,false,false,true,38300,0,0,false,0,false,1,1,1,0);this.Bj(276000312341003
,2,1,Ad-1209600,0,1,false,false,false,true,37600,0,0,false,0,false,1,1,1,0);this.
Bj(276000312341004,2,1,Ad-1123200,0,1,false,false,false,true,40600,0,0,false,0,false
,1,1,1,0);this.Bj(276000312341005,2,1,Ad-9504000,0,1,false,false,false,true,36900
,0,0,false,0,false,1,1,1,0);this.Bj(276000312341006,2,1,Ad-950400,0,1,false,false
,false,true,38000,0,0,false,0,false,1,1,1,0);this.Bj(276000312341007,2,1,Ad-864000
,0,1,false,false,false,true,39200,0,0,false,0,false,1,1,1,276000312343007);this.
Bj(276000312341008,2,1,Ad-777600,0,1,false,false,false,true,36500,0,0,false,0,false
,1,1,1,276000312343409);this.Bj(276000312341009,2,1,Ad-691200,0,1,false,false,false
,true,40900,0,0,false,0,false,1,1,1,276000312343308);this.Bj(276000312341010,2,1
,Ad-604800,0,1,false,false,false,true,40900,0,0,false,0,false,1,1,1,276000312343420
);this.Bj(276000312341011,2,1,Ad-518400,0,1,false,false,false,true,39200,0,0,false
,0,false,1,1,1,276000312343065);this.Bj(276000312341012,2,1,Ad-432000,0,1,false,
false,false,true,38100,0,0,false,0,false,1,1,1,276000312343232);this.Bj(276000312341013
,2,1,Ad-345600,0,1,false,false,false,true,37700,0,0,false,0,true,1,1,1,276000312343204
);this.Bj(276000312341014,2,1,Ad-259200,0,1,false,false,false,true,37200,0,0,false
,0,true,1,1,1,276000312343376);this.Bj(276000312341015,2,1,Ad-172800,0,1,false,false
,false,true,37000,0,0,false,0,true,1,1,1,276000312343044);this.Bj(276000312342001
,3,1,Ad-7084800,0,0,false,false,false,true,39500,0,0,false,0,false,1,0,2,0);this.
Bj(276000312342002,3,1,Ad-5788800,0,0,false,false,false,true,38800,0,0,false,0,false
,1,0,2,0);this.Bj(276000312342003,3,1,Ad-7084800,0,0,false,false,false,true,39600
,0,0,false,0,false,1,0,2,0);this.Bj(276000312342004,3,1,Ad-6652800,0,0,false,false
,false,true,37400,0,0,false,0,false,1,0,2,0);this.Bj(276000312342005,3,1,Ad-7084800
,0,0,false,false,false,true,39700,0,0,false,0,false,1,0,2,0);this.Bj(276000312342006
,3,1,Ad-6998400,0,0,false,false,false,true,40900,0,0,false,0,false,1,0,2,0);this.
Bj(276000312342007,3,1,Ad-6739200,0,0,false,false,false,true,38100,0,0,false,0,false
,1,0,2,0);this.Bj(276000312342008,3,1,Ad-7430400,0,0,false,false,false,true,37200
,0,0,false,0,false,1,0,2,0);this.Bj(276000312342009,3,1,Ad-6652800,0,0,false,false
,false,true,37000,0,0,false,0,false,1,0,2,0);this.Bj(276000312342010,3,1,Ad-7776000
,0,0,false,false,false,true,38600,0,0,false,0,false,1,0,2,0);this.Bj(276000312342011
,3,1,Ad-5961600,0,0,false,false,false,true,37900,0,0,false,0,false,1,0,2,0);this.
Bj(276000312342012,3,1,Ad-6393600,0,0,false,false,false,true,36300,0,0,false,0,false
,1,0,2,0);this.Bj(276000312342013,3,1,Ad-7344000,0,0,false,false,false,true,36100
,0,0,false,0,false,1,0,2,0);this.Bj(276000312342014,3,1,Ad-5529600,0,0,false,false
,false,true,37700,0,0,false,0,false,1,0,2,0);this.Bj(276000312342015,3,1,Ad-6307200
,0,0,false,false,false,true,39800,0,0,false,0,false,1,0,2,0);this.Bj(276000312342016
,3,1,Ad-6048000,0,0,false,false,false,true,40300,0,0,false,0,false,1,0,2,0);this.
Bj(276000312342017,3,1,Ad-6134400,0,0,false,false,false,true,38400,0,0,false,0,false
,1,0,2,0);this.Bj(276000312342018,3,1,Ad-6652800,0,0,false,false,false,true,36300
,0,0,false,0,false,1,0,2,0);this.Bj(276000312342019,3,1,Ad-8467200,0,0,false,false
,false,true,38700,0,0,false,0,false,1,0,2,0);this.Bj(276000312342020,3,1,Ad-6998400
,0,0,false,false,false,true,37300,0,0,false,0,false,1,0,2,0);this.Bj(276000312342021
,3,1,Ad-6652800,0,0,false,false,false,true,38500,0,0,false,0,false,1,0,2,0);this.
Bj(276000312342022,3,1,Ad-5788800,0,0,false,false,false,true,37800,0,0,false,0,false
,1,0,2,0);this.Bj(276000312342023,3,1,Ad-6652800,0,0,false,false,false,true,37300
,0,0,false,0,false,1,0,2,0);this.Bj(276000312342024,3,1,Ad-6739200,0,0,false,false
,false,true,37500,0,0,false,0,false,1,0,2,0);this.Bj(276000312342025,3,1,Ad-7171200
,0,0,false,false,false,true,36300,0,0,false,0,false,1,0,2,0);this.Bj(276000312342026
,3,1,Ad-7171200,0,0,false,false,false,true,37800,0,0,false,0,false,1,0,2,0);this.
Bj(276000312342027,3,1,Ad-7689600,0,0,false,false,false,true,37900,0,0,false,0,false
,1,0,2,0);this.Bj(276000312342028,3,1,Ad-8121600,0,0,false,false,false,true,39800
,0,0,false,0,false,1,0,2,0);this.Bj(276000312342029,3,1,Ad-7603200,0,0,false,false
,false,true,36500,0,0,false,0,false,1,0,2,0);this.Bj(276000312342030,3,1,Ad-6393600
,0,0,false,false,false,true,38900,0,0,false,0,false,1,0,2,0);this.Bj(276000312342031
,3,1,Ad-6652800,0,0,false,false,false,true,36700,0,0,false,0,false,1,0,2,0);this.
Bj(276000312342032,3,1,Ad-6739200,0,0,false,false,false,true,37400,0,0,false,0,false
,1,0,2,0);this.Bj(276000312342033,3,1,Ad-6393600,0,0,false,false,false,true,41000
,0,0,false,0,false,1,0,2,0);this.Bj(276000312342034,3,1,Ad-7084800,0,0,false,false
,false,true,40500,0,0,false,0,false,1,0,2,0);this.Bj(276000312342035,3,1,Ad-7171200
,0,0,false,false,false,true,38200,0,0,false,0,false,1,0,2,0);this.Bj(276000312342036
,3,1,Ad-6480000,0,0,false,false,false,true,40000,0,0,false,0,false,1,0,2,0);this.
Bj(276000312342037,3,1,Ad-6652800,0,0,false,false,false,true,40500,0,0,false,0,false
,1,0,2,0);this.Bj(276000312342038,3,1,Ad-7084800,0,0,false,false,false,true,40000
,0,0,false,0,false,1,0,2,0);this.Bj(276000312342039,3,1,Ad-6307200,0,0,false,false
,false,true,38900,0,0,false,0,false,1,0,2,0);this.Bj(276000312342040,3,1,Ad-7430400
,0,0,false,false,false,true,37300,0,0,false,0,false,1,0,2,0);this.Bj(276000312342041
,3,1,Ad-6652800,0,0,false,false,false,true,37000,0,0,false,0,false,1,0,2,0);this.
Bj(276000312342042,3,1,Ad-6825600,0,0,false,false,false,true,40800,0,0,false,0,false
,1,0,2,0);this.Bj(276000312342043,3,1,Ad-7430400,0,0,false,false,false,true,40000
,0,0,false,0,false,1,0,2,0);this.Bj(276000312342044,3,1,Ad-7516800,0,0,false,false
,false,true,40700,0,0,false,0,false,1,0,2,0);this.Bj(276000312342045,3,1,Ad-8121600
,0,0,false,false,false,true,40800,0,0,false,0,false,1,0,2,0);this.Bj(276000312342046
,3,1,Ad-8553600,0,0,false,false,false,true,39300,0,0,false,0,false,1,0,2,0);this.
Bj(276000312342047,3,1,Ad-7171200,0,0,false,false,false,true,39300,0,0,false,0,false
,1,0,2,0);this.Bj(276000312342048,3,1,Ad-6566400,0,0,false,false,false,true,40900
,0,0,false,0,false,1,0,2,0);this.Bj(276000312342049,3,1,Ad-7171200,0,0,false,false
,false,true,40100,0,0,false,0,false,1,0,2,0);this.Bj(276000312342050,3,1,Ad-6998400
,0,0,false,false,false,true,39900,0,0,false,0,false,1,0,2,0);this.Bj(276000312342051
,3,1,Ad-6739200,0,0,false,false,false,true,38200,0,0,false,0,false,1,0,2,0);this.
Bj(276000312342052,3,1,Ad-7603200,0,0,false,false,false,true,36400,0,0,false,0,false
,1,0,2,0);this.Bj(276000312342053,3,1,Ad-7689600,0,0,false,false,false,true,40800
,0,0,false,0,false,1,0,2,0);this.Bj(276000312342054,3,1,Ad-6480000,0,0,false,false
,false,true,36100,0,0,false,0,false,1,0,2,0);this.Bj(276000312342055,3,1,Ad-7948800
,0,0,false,false,false,true,38000,0,0,false,0,false,1,0,2,0);this.Bj(276000312342056
,3,1,Ad-8121600,0,0,false,false,false,true,37800,0,0,false,0,false,1,0,2,0);this.
Bj(276000312342057,3,1,Ad-6566400,0,0,false,false,false,true,38800,0,0,false,0,false
,1,0,2,0);this.Bj(276000312342058,3,1,Ad-7862400,0,0,false,false,false,true,36600
,0,0,false,0,false,1,0,2,0);this.Bj(276000312342059,3,1,Ad-7344000,0,0,false,false
,false,true,39700,0,0,false,0,false,1,0,2,0);this.Bj(276000312342060,3,1,Ad-6998400
,0,0,false,false,false,true,36600,0,0,false,0,false,1,0,2,0);this.Bj(276000312342061
,3,1,Ad-5788800,0,0,false,false,false,true,36600,0,0,false,0,false,1,0,2,0);this.
Bj(276000312342062,3,1,Ad-7257600,0,0,false,false,false,true,36300,0,0,false,0,false
,1,0,2,0);this.Bj(276000312342063,3,1,Ad-5875200,0,0,false,false,false,true,40800
,0,0,false,0,false,1,0,2,0);this.Bj(276000312342064,3,1,Ad-6134400,0,0,false,false
,false,true,37500,0,0,false,0,false,1,0,2,0);this.Bj(276000312342065,3,1,Ad-5788800
,0,0,false,false,false,true,36000,0,0,false,0,false,1,0,2,0);this.Bj(276000312342066
,3,1,Ad-7862400,0,0,false,false,false,true,38400,0,0,false,0,false,1,0,2,0);this.
Bj(276000312342067,3,1,Ad-5270400,0,0,false,false,false,true,36900,0,0,false,0,false
,1,0,2,0);this.Bj(276000312342068,3,1,Ad-7776000,0,0,false,false,false,true,38300
,0,0,false,0,false,1,0,2,0);this.Bj(276000312342069,3,1,Ad-7171200,0,0,false,false
,false,true,40400,0,0,false,0,false,1,0,2,0);this.Bj(276000312342070,3,1,Ad-6048000
,0,0,false,false,false,true,40100,0,0,false,0,false,1,0,2,0);this.Bj(276000312343007
,1,1,Ad-186192000,0,1,false,false,false,true,0,Ad-864000,3,false,1,false,1,0,1,0
);this.Bj(276000312343044,1,1,Ad-118108800,0,1,false,false,false,true,0,Ad-172800
,1,false,1,false,1,0,1,0);this.Bj(276000312343065,1,1,Ad-152150400,0,1,false,false
,false,true,0,Ad-518400,2,false,1,false,1,0,1,0);this.Bj(276000312343117,1,1,Ad-
252806400,0,1,false,false,false,true,0,Ad-86400,5,false,1,false,1,0,1,0);this.Bj(
276000312343204,1,1,Ad-219369600,0,1,false,false,false,true,0,Ad-345600,4,false,
1,false,1,0,1,0);this.Bj(276000312343232,1,1,Ad-152064000,0,1,false,false,false,
true,0,Ad-432000,2,false,1,false,1,0,1,0);this.Bj(276000312343308,1,1,Ad-118627200
,0,1,false,false,false,true,0,Ad-691200,1,false,1,false,1,0,1,0);this.Bj(276000312343376
,1,1,Ad-118195200,0,1,false,false,false,true,0,Ad-259200,1,false,1,false,1,0,1,0
);this.Bj(276000312343409,1,1,Ad-152409600,0,1,false,false,false,true,0,Ad-777600
,2,false,1,false,1,0,1,0);this.Bj(276000312343420,1,1,Ad-253324800,0,1,false,false
,false,true,0,Ad-604800,5,false,1,false,1,0,1,0);this.Bj(276000312343505,4,1,Ad-
145152000,0,1,false,false,false,true,0,Ad-27216000,1,true,1,false,1,0,1,0);this.
Bj(276000312343535,4,1,Ad-215222400,0,1,false,false,false,true,0,Ad-29894400,3,true
,1,false,1,0,1,0);this.Bj(276000312343540,4,1,Ad-179107200,0,1,false,false,false
,true,0,Ad-27475200,2,true,1,false,1,0,1,0);this.Bj(276000312343558,4,1,Ad-248659200
,0,1,false,false,false,true,0,Ad-29635200,4,true,1,false,1,0,1,0);this.Bj(276000312343587
,4,1,Ad-179020800,0,1,false,false,false,true,0,Ad-27388800,2,true,1,false,1,0,1,
0);this.Bj(276000312343597,4,1,Ad-146188800,0,1,false,false,false,true,0,Ad-28252800
,1,true,1,false,1,0,1,0);this.Bj(276000312343619,4,1,Ad-181353600,0,1,false,false
,false,true,0,Ad-29721600,2,true,1,false,1,0,1,0);this.Bj(276000312343627,4,1,Ad-
213235200,0,1,false,false,false,true,0,Ad-27907200,3,true,1,false,1,0,1,0);this.
Bj(276000312343721,4,1,Ad-282182400,0,1,false,false,false,true,0,Ad-29462400,5,true
,1,false,1,0,1,0);this.Bj(276000312343892,4,1,Ad-179107200,0,1,false,false,false
,true,0,Ad-27475200,2,true,1,false,1,0,1,0);this.Bj(276000312343899,4,1,Ad-147398400
,0,1,false,false,false,true,0,Ad-29462400,1,true,1,false,1,0,1,0);this.Bj(276000312343913
,4,1,Ad-178416000,0,1,false,false,false,true,0,Ad-26784000,2,true,1,false,1,0,1,
0);this.Bj(276000312343915,4,1,Ad-179712000,0,1,false,false,false,true,0,Ad-28080000
,2,true,1,false,1,0,1,0);this.Bj(276000312343940,4,1,Ad-212025600,0,1,false,false
,false,true,0,Ad-26697600,3,true,1,false,1,0,1,0);this.Bj(276000312343978,4,1,Ad-
246499200,0,1,false,false,false,true,0,Ad-27475200,4,true,1,false,1,0,1,0);},AIK:
function(G){var Ad=A._GetAutoObject(A.Device.Helper).Dy();this.AF(Ad-3542400,276000312342001
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
,276000312343007,3730,3,0,0,0,0,0);},AIH:function(G){this.Alf(1,WD);this.Alf(2,WE
);this.Alf(3,SM);},AIJ:function(G){this.Z0(2016,216,11);this.Z0(2017,217,10);this.
Z0(2018,218,9);this.Z0(2019,219,8);this.Z0(2020,220,7);this.Z0(2021,221,6);},_Init:
function(aArg){var K=this.K;K.__proto__=C.PG;A.h7++;},_Done:function(){var K=this.
K;K.__proto__=null;A.h7--;},_ReInit:function(){},_Mark:function(D){},_variants:function(
){return this;},_className:"DeviceDemonstrator::TableData"};
C._Init=function(){C.DeviceClass.__proto__=A.acr.DeviceClass;};C._ReInit=function(
){var B;if((B=C.Ud._this))B._ReInit(),C.Ud._ReInit.call(B);if((B=C.K5._this))B._ReInit(
),C.K5._ReInit.call(B);if((B=C.ApF._this))B._ReInit(),C.ApF._ReInit.call(B);if((
B=C.Af$._this))B._ReInit(),C.Af$._ReInit.call(B);};C.DB=function(D){var B;if((B=
C.Ud._this)&&(B._cycle!=D))B._Done(C.Ud._this=null);if((B=C.K5._this)&&(B._cycle
!=D))B._Done(C.K5._this=null);if((B=C.ApF._this)&&(B._cycle!=D))B._Done(C.ApF._this=
null);if((B=C.Af$._this)&&(B._cycle!=D))B._Done(C.Af$._this=null);};return C;})(
);

/* VitalControl demonstration application, © Urban GmbH & Co.KG 2023 */