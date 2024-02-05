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
var B9=[0,0];var BC=[0,0,1000,740];var EU=[200,5,577,745];var Hd=[270,69,510,389];
var I7=[605,30,975,740];var II=[25,25,45,41];var OI=[547,610,687,750];var PM=[270
,390];var PN=[350,390];var CJ=[350,450];var E2=[270,450];var Li=[430,390];var PO=[
510,390];var Km=[510,450];var NV=[430,450];var PP=[360,390];var Mt=[420,390];var
SF=[420,450];var Uk=[360,450];var Zn=[335,460];var Wr=[447,460];var IJ=[447,500];
var Ul=[335,500];var Zo=[350,512];var Ws=[430,512];var Zp=[430,592];var Um=[350,
592];var Zq=[335,605];var Zr=[447,605];var Un=[447,665];var Wt=[335,665];var QZ=[
264,504];var Zs=[344,504];var OJ=[344,601];var PQ=[264,601];var Wu=[436,504];var
Wv=[516,504];var Ww=[516,601];var Zt=[436,601];var Zu=[10,130,210,310];var Wx="1";
var Wy="2";var SG="3";
C.A2B={Bdc:null,Background:null,AbF:null,Ake:null,AfR:null,Am:null,Zb:null,Sw:null
,Zc:null,Ze:null,Zd:null,Wm:null,Zf:null,Wg:null,Wk:null,Wl:null,Aaw:null,De:null
,Init:function(aArg){A._GetAutoObject(A.Device.Device).Aq2(A._NewObject(A.Device.
Transponder,0));},DriveCursorHitting:function(SL,BD,E4){var AIC=this.AMR();if(!!
AIC){var AZY=AIC.M;AZY=A.abJ(AZY,AIC.Bf3(B9));if(!A.wa(AZY,E4))this.AA_(AIC);}return A.
Core.Root.DriveCursorHitting.call(this,SL,BD,E4);},BlG:function(H){var K=this.K;
this.Device.UpdateActiveScreen(3);K.Ake.Ar(false);},Nl:function(H){var K=this.K;
var B;var DV=(A.Core.Bi.isPrototypeOf(H)?H:null);var Ah0=0;if(DV===K.Zd)Ah0=27;else
if(DV===K.Zc)Ah0=26;else if(DV===K.Ze)Ah0=28;else if(DV===K.Wk)Ah0=6;else if(DV===
K.Wl)Ah0=7;else if(DV===K.Wm)Ah0=4;else if(DV===K.Wg)Ah0=5;else if(DV===K.Zf)Ah0=
1;if(!!DV){if((DV.Down&&(DV.Jg>0))&&(DV.Jg<400))return;var Bvo=this.AY;this.Ba(this.
Gt);this.Ia().DriveKeyboardHitting(Ah0,0x00,DV.Down);this.Ba(Bvo);K.Sw.G(A.abM(K.
Sw.M,DV.HS[0]-((((B=K.Sw.M)[2]-B[0])/2)|0)));K.Sw.G(A.abO(K.Sw.M,DV.HS[1]-((((B=
K.Sw.M)[3]-B[1])/2)|0)));K.Zb.Ar(true);}},Ah9:function(H){var K=this.K;var B;var
Jr=(A.Core.BO.isPrototypeOf(H)?H:null);if((String.fromCharCode(Jr.D2).toLowerCase(
).charCodeAt(0)||0)===0x73)A._GetAutoObject(C.K1).Bb8(this);else if((String.fromCharCode(
Jr.D2).toLowerCase().charCodeAt(0)||0)===0x74)A._GetAutoObject(A.Device.Helper).
AJg(this);else if((String.fromCharCode(Jr.D2).toLowerCase().charCodeAt(0)||0)===
0x64)this.Ba(this.Gt);else if((String.fromCharCode(Jr.D2).toLowerCase().charCodeAt(
0)||0)===0x63)this.Ba(K.AfR);else if(Jr.CH===152){if(this.AY===K.AfR)this.Ba(this.
Gt);else this.Ba(K.AfR);}else if(this.AY===this.Gt){if(Jr.CH===11){this.Ia().DriveKeyboardHitting(
26,0x00,true);this.Ia().DriveKeyboardHitting(26,0x00,false);}else if(Jr.CH===12){
this.Ia().DriveKeyboardHitting(27,0x00,true);this.Ia().DriveKeyboardHitting(27,0x00
,false);}else if(Jr.CH===13){this.Ia().DriveKeyboardHitting(28,0x00,true);this.Ia(
).DriveKeyboardHitting(28,0x00,false);}}},_Init:function(aArg){var K=this.K;A.acg.
Am._Init.call(K.Background={I:this},0);A.acg.Am._Init.call(K.AbF={I:this},0);A.Core.
Timer._Init.call(K.Ake={I:this},0);A.acw.ASf._Init.call(K.AfR={I:this},0);A.acg.
Am._Init.call(K.Am={I:this},0);A.acl.ALr._Init.call(K.Zb={I:this},0);A.acg.Am._Init.
call(K.Sw={I:this},0);A.Core.Bi._Init.call(K.Zc={I:this},0);A.Core.Bi._Init.call(
K.Ze={I:this},0);A.Core.Bi._Init.call(K.Zd={I:this},0);A.Core.Bi._Init.call(K.Wm={
I:this},0);A.Core.Bi._Init.call(K.Zf={I:this},0);A.Core.Bi._Init.call(K.Wg={I:this
},0);A.Core.Bi._Init.call(K.Wk={I:this},0);A.Core.Bi._Init.call(K.Wl={I:this},0);
A.acw.Aaw._Init.call(K.Aaw={I:this},0);A.Core.BO._Init.call(K.De={I:this},0);K.__proto__=
C.A2B;var B;this.G(BC);K.Background.G(BC);K.AbF.G(EU);this.Gt.G(Hd);K.Ake.QJ(2000
);K.Ake.Ar(true);K.AfR.G(I7);K.Am.G(II);K.Zb.Akg=true;K.Zb.V7(9);K.Zb.ID(1);K.Zb.
Fy(300);K.Zb.B1=0xA0FFFFFF;K.Zb.Ct=0x00FFFFFF;K.Sw.G(OI);K.Sw.L(0x00FFFFFF);K.Zc.
Kc(PM);K.Zc.Kb(PN);K.Zc.DJ(CJ);K.Zc.DX(E2);K.Ze.Kc(Li);K.Ze.Kb(PO);K.Ze.DJ(Km);K.
Ze.DX(NV);K.Zd.Kc(PP);K.Zd.Kb(Mt);K.Zd.DJ(SF);K.Zd.DX(Uk);K.Wm.Kc(Zn);K.Wm.Kb(Wr
);K.Wm.DJ(IJ);K.Wm.DX(Ul);K.Zf.Kc(Zo);K.Zf.Kb(Ws);K.Zf.DJ(Zp);K.Zf.DX(Um);K.Wg.Kc(
Zq);K.Wg.Kb(Zr);K.Wg.DJ(Un);K.Wg.DX(Wt);K.Wk.Kc(QZ);K.Wk.Kb(Zs);K.Wk.DJ(OJ);K.Wk.
DX(PQ);K.Wl.Kc(Wu);K.Wl.Kb(Wv);K.Wl.DJ(Ww);K.Wl.DX(Zt);K.Aaw.G(Zu);this.J(K.Background
,-1);this.J(K.AbF,-1);this.J(K.AfR,0);this.J(K.Am,0);this.J(K.Sw,0);this.J(K.Zc,
0);this.J(K.Ze,0);this.J(K.Zd,0);this.J(K.Wm,0);this.J(K.Zf,0);this.J(K.Wg,0);this.
J(K.Wk,0);this.J(K.Wl,0);this.J(K.Aaw,0);K.Background.Ax(A.aaL(A.acw.Background)
);K.AbF.Ax(A.aaL(A.acx.AbF));K.Ake.M6=[this,K.BlG];K.Am.Ax(A.aaL(A.acw.APG));K.Zb.
R=[B=K.Sw,B.Bhw,B.L];K.Sw.Ax(A.aaL(A.acx.APn));K.Zc.Lb=[this,K.Nl];K.Zc.BP=[this
,K.Nl];K.Ze.Lb=[this,K.Nl];K.Ze.BP=[this,K.Nl];K.Zd.Lb=[this,K.Nl];K.Zd.BP=[this
,K.Nl];K.Wm.DR=[this,K.Nl];K.Wm.Lb=[this,K.Nl];K.Wm.BP=[this,K.Nl];K.Zf.Lb=[this
,K.Nl];K.Zf.BP=[this,K.Nl];K.Wg.DR=[this,K.Nl];K.Wg.Lb=[this,K.Nl];K.Wg.BP=[this
,K.Nl];K.Wk.DR=[this,K.Nl];K.Wk.Lb=[this,K.Nl];K.Wk.BP=[this,K.Nl];K.Wl.DR=[this
,K.Nl];K.Wl.Lb=[this,K.Nl];K.Wl.BP=[this,K.Nl];K.Aaw.Abu([B=A._GetAutoObject(A.Device.
Helper),B.Ur,B.Us]);K.De.BP=[this,K.Ah9];K.Bdc=A._GetAutoObject(A.acr.And);K.Init.
call(this,aArg);A.h7++;},_Done:function(){var K=this.K;K.__proto__=null;K.Background.
_Done();K.AbF._Done();K.Ake._Done();K.AfR._Done();K.Am._Done();K.Zb._Done();K.Sw.
_Done();K.Zc._Done();K.Ze._Done();K.Zd._Done();K.Wm._Done();K.Zf._Done();K.Wg._Done(
);K.Wk._Done();K.Wl._Done();K.Aaw._Done();K.De._Done();A.h7--;},_ReInit:function(
){var K=this.K;K.Background._ReInit();K.AbF._ReInit();K.Ake._ReInit();K.AfR._ReInit(
);K.Am._ReInit();K.Zb._ReInit();K.Sw._ReInit();K.Zc._ReInit();K.Ze._ReInit();K.Zd.
_ReInit();K.Wm._ReInit();K.Zf._ReInit();K.Wg._ReInit();K.Wk._ReInit();K.Wl._ReInit(
);K.Aaw._ReInit();K.De._ReInit();},_Mark:function(D){var B;if((B=this.Bdc)&&(B._cycle
!=D))B._Mark(B._cycle=D);if((B=this.Background)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.AbF)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ake)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.AfR)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Am)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Zb)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Sw)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.Zc)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ze
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Zd)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Wm)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Zf)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Wg)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Wk)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Wl)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Aaw)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.De)._cycle!=D)B._Mark(B._cycle=D);},_variants:function(
){return this;},_className:"DeviceDemonstrator::ApplicationDemonstration"};C.DeviceClass={
AH_:null,Aup:null,AtE:null,Init:function(aArg){var K=this.K;var B;A.zV([this,K.Bhi
],this.Aq,0);A.zX([this,K.Bjv],[B=K.AH_,B.A6y,B.A7N],0);A.zX([this,K.BiB],[B=K.AH_
,B.A54,B.AQQ],0);},Aq1:function(E){this.UpdateScanState(E);},AvF:function(E){this.
UpdateMeasureState(E);},AvP:function(E){this.UpdateTempValue(E);},Awk:function(){
this.UpdateMeasureState(1);this.UpdateTempValue(0);},Ag2:function(){var B;A._GetAutoObject(
A.Device.Helper).Sp.Awm(this);this.UpdateMeasureState(0);},AeC:function(){this.UpdateScanState(
1);},Ang:function(){this.UpdateScanState(0);},Aq2:function(E){this.UpdateScanTransponder(
E.Id,E.TransponderType,E.TransponderProtocol);if(this.ScanState!==1)return;this.
UpdateScanState(2);},Bjv:function(H){var K=this.K;var Ak3=A._GetAutoObject(C.K1).
AER;if(Ak3<0)K.Aup=null;else{K.Aup=A._NewObject(A.Device.Int32FilterCriterion,0);
K.Aup.Initialize(2,0,Ak3,true);}A.pe([this,K.Bm],this);},BiB:function(H){var K=this.
K;var Bc2=A._GetAutoObject(C.K1).AAd;if(Bc2<=0)K.AtE=null;else{K.AtE=A._NewObject(
A.Device.Int32FilterCriterion,0);K.AtE.Initialize(1,4,Bc2,false);}A.pe([this,K.Bm
],this);},Bm:function(H){var K=this.K;var Bc=A._GetAutoObject(A.Device.Helper).MT(
);Bc.CZ(K.Aup);Bc.CZ(K.AtE);A._GetAutoObject(C.Apt).Bm(Bc);},Bhi:function(H){var
K=this.K;A.pe([this,K.Bm],this);},_Init:function(aArg){var K=this.K;A.acr.DeviceClass.
_Init.call(this,aArg);K.__proto__=C.DeviceClass;this.Py(4);this.AvL(276034580109999
);K.AH_=A._GetAutoObject(C.K1);K.Init.call(this,aArg);},_Mark:function(D){var B;
A.acr.DeviceClass._Mark.call(this,D);if((B=this.AH_)&&(B._cycle!=D))B._Mark(B._cycle=
D);if((B=this.Aup)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.AtE)&&(B._cycle
!=D))B._Mark(B._cycle=D);},_variants:function(){return this;},_className:"DeviceDemonstrator::DeviceClass"
};C.T4={_Init:function(){A.acr.T4._Init.call(this,0);this.ARi(false);this.ARj(false
);},_ReInit:function(){A.acr.T4._ReInit.call(this,0);},_variants:function(){return this;
},_this:null};C.A3A={TransponderId:0,AER:0,AAd:0,Ary:null,ArI:3950,Av7:true,A7N:
function(E){if(this.AER===E)return;this.AER=E;A.abo([this,this.A6y,this.A7N],0);
},A6y:function(){return this.AER;},AQQ:function(E){if(this.AAd===E)return;this.AAd=
E;A.abo([this,this.A54,this.AQQ],0);},A54:function(){return this.AAd;},Bb8:function(
H){this.AzK(this.TransponderId);},M4:function(E){if(this.TransponderId===E)return;
this.TransponderId=E;A.abo([this,this.AjK,this.M4],0);},A7O:function(E){if(this.
Ary===E)return;this.Ary=E;A.abo([this,this.A6z,this.A7O],0);},A6z:function(){return this.
Ary;},AzK:function(LX){var B;var Jb=false;if((A._GetAutoObject(A.Device.Device).
ScanState===1)&&!!LX){A._GetAutoObject(A.Device.Device).Oz.ARv(1);A._GetAutoObject(
A.Device.Device).Oz.OnSetId(LX);A._GetAutoObject(A.Device.Device).Oz.ARu(2);A._GetAutoObject(
A.Device.Device).Aq1(2);A.abo([B=A._GetAutoObject(A.Device.Device),B.AQG,B.AXY],
0);Jb=true;}return Jb;},ARe:function(E){if(this.Av7===E)return;this.Av7=E;A.abo([
this,this.AQD,this.ARe],0);},A7S:function(E){if(this.ArI===E)return;this.ArI=E;A.
abo([this,this.Bia,this.A7S],0);},BbT:function(H){var B;if(this.Av7)A._GetAutoObject(
A.Device.Helper).AJg(this);else A._GetAutoObject(A.Device.Helper).A$7(this.ArI);
},AjK:function(){return this.TransponderId;},AQD:function(){return this.Av7;},Bia:
function(){return this.ArI;},_Init:function(aArg){this.__proto__=C.A3A;this.Ary=
A.acw.AKG;A.h7++;},_Done:function(){this.__proto__=null;A.h7--;},_ReInit:function(
){},_Mark:function(D){var B;if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:
null,_cycle:0,_observers:null,_className:"DeviceDemonstrator::DemonstrationConfigClass"
};C.K1={_Init:function(){C.A3A._Init.call(this,0);},_ReInit:function(){},_variants:
function(){return this;},_this:null};C.Apt={_Init:function(){A.Device.Table._Init.
call(this,0);this.OnSetId(0);},_ReInit:function(){},_variants:function(){return this;
},_this:null};C.A3B={AgX:A.jV,Delete:function(){this.AD3(A.abV(this.AgX,this.AgX.
length-1));},E9:function(Ack){if(!this.AgX.length&&(Ack===0x30))return;if(this.AgX.
length<6)this.AD3(this.AgX+String.fromCharCode(Ack));},AD3:function(E){if(this.AgX===
E)return;this.AgX=E;A.abo([this,this.A6w,this.AD3],0);A._GetAutoObject(C.K1).AQQ(
A.wz(this.AgX,-1,10));},A6w:function(){return this.AgX;},_Init:function(aArg){this.
__proto__=C.A3B;A.h7++;},_Done:function(){this.__proto__=null;A.h7--;},_ReInit:function(
){},_Mark:function(D){var B;if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:
null,_cycle:0,_observers:null,_className:"DeviceDemonstrator::DemonstrationSearchHelperClass"
};C.AfZ={_Init:function(){C.A3B._Init.call(this,0);},_ReInit:function(){},_variants:
function(){return this;},_this:null};C.PC={AIh:function(H){var Ad=A._GetAutoObject(
A.Device.Helper).Dx();this.Bj(276000312341001,2,1,Ad-1382400,0,1,false,false,false
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
246499200,0,1,false,false,false,true,0,Ad-27475200,4,true,1,false,1,0,1,0);},AIj:
function(H){var Ad=A._GetAutoObject(A.Device.Helper).Dx();this.AF(Ad-3542400,276000312342001
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
,276000312343007,3730,3,0,0,0,0,0);},AIg:function(H){this.Ak5(1,Wx);this.Ak5(2,Wy
);this.Ak5(3,SG);},AIi:function(H){this.ZT(2016,216,11);this.ZT(2017,217,10);this.
ZT(2018,218,9);this.ZT(2019,219,8);this.ZT(2020,220,7);this.ZT(2021,221,6);},_Init:
function(aArg){var K=this.K;K.__proto__=C.PC;A.h7++;},_Done:function(){var K=this.
K;K.__proto__=null;A.h7--;},_ReInit:function(){},_Mark:function(D){},_variants:function(
){return this;},_className:"DeviceDemonstrator::TableData"};
C._Init=function(){C.DeviceClass.__proto__=A.acr.DeviceClass;};C._ReInit=function(
){var B;if((B=C.T4._this))B._ReInit(),C.T4._ReInit.call(B);if((B=C.K1._this))B._ReInit(
),C.K1._ReInit.call(B);if((B=C.Apt._this))B._ReInit(),C.Apt._ReInit.call(B);if((
B=C.AfZ._this))B._ReInit(),C.AfZ._ReInit.call(B);};C.DB=function(D){var B;if((B=
C.T4._this)&&(B._cycle!=D))B._Done(C.T4._this=null);if((B=C.K1._this)&&(B._cycle
!=D))B._Done(C.K1._this=null);if((B=C.Apt._this)&&(B._cycle!=D))B._Done(C.Apt._this=
null);if((B=C.AfZ._this)&&(B._cycle!=D))B._Done(C.AfZ._this=null);};return C;})(
);

/* VitalControl demonstration application, © Urban GmbH & Co.KG 2023 */