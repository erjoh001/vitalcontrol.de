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
* Version  : 12.05
* Profile  : WebGLDemonstrator
* Platform : Web.WebGL.RGBA8888
*
*******************************************************************************/

var index;if(!index)throw new Error("The application file '_project.js' isn't yet loaded!"
);if(index.abq)throw new Error("The unit file 'DeviceDemonstrator.js' included twice!"
);index.abq=(function(){var A=index;var C={};
var B$=[0,0];var BH=[0,0,1000,740];var EV=[200,5,577,745];var GT=[270,69,510,389];
var Jt=[605,30,975,740];var IL=[25,25,45,41];var OK=[547,610,687,750];var PJ=[270
,390];var N1=[350,390];var CJ=[350,450];var Fn=[270,450];var LW=[430,390];var OL=[
510,390];var KH=[510,450];var OM=[430,450];var Ne=[360,390];var ON=[420,390];var
Ss=[420,450];var T$=[360,450];var Zg=[335,460];var Wb=[447,460];var IM=[447,500];
var Ua=[335,500];var Zh=[350,512];var Wc=[430,512];var Zi=[430,592];var Ub=[350,
592];var Zj=[335,605];var Zk=[447,605];var Uc=[447,665];var Wd=[335,665];var QV=[
264,504];var Zl=[344,504];var OO=[344,601];var PK=[264,601];var Ud=[436,504];var
Zm=[516,504];var We=[516,601];var Zn=[436,601];var Zo=[10,130,210,310];var Wf="1";
var Wg="2";var St="3";
C.A2h={BcB:null,Background:null,Abr:null,Aj4:null,AfO:null,Ak:null,Y6:null,Sl:null
,Y7:null,Y9:null,Y8:null,V8:null,Y_:null,V2:null,V6:null,V7:null,Aao:null,Dh:null
,Init:function(aArg){A._GetAutoObject(A.Device.Device).AqD(A._NewObject(A.Device.
Transponder,0));},DriveCursorHitting:function(Sy,BG,Fo){var AIo=this.Bfm();if(!!
AIo){var AZI=AIo.M;AZI=A.aaM(AZI,AIo.Bfw(B$));if(!A.vt(AZI,Fo))this.AAP(AIo);}return A.
Core.Root.DriveCursorHitting.call(this,Sy,BG,Fo);},Blo:function(H){var K=this.K;
this.Device.UpdateActiveScreen(3);K.Aj4.Ap(false);},Nu:function(H){var K=this.K;
var B;var DZ=(A.Core.Bh.isPrototypeOf(H)?H:null);var AhR=0;if(DZ===K.Y8)AhR=27;else
if(DZ===K.Y7)AhR=26;else if(DZ===K.Y9)AhR=28;else if(DZ===K.V6)AhR=6;else if(DZ===
K.V7)AhR=7;else if(DZ===K.V8)AhR=4;else if(DZ===K.V2)AhR=5;else if(DZ===K.Y_)AhR=
1;if(!!DZ){if((DZ.Down&&(DZ.Jk>0))&&(DZ.Jk<400))return;var Bu9=this.AY;this.A$(this.
Gs);this.Ib().DriveKeyboardHitting(AhR,0x00,DZ.Down);this.A$(Bu9);K.Sl.G(A.aaP(K.
Sl.M,DZ.HV[0]-((((B=K.Sl.M)[2]-B[0])/2)|0)));K.Sl.G(A.aaR(K.Sl.M,DZ.HV[1]-((((B=
K.Sl.M)[3]-B[1])/2)|0)));K.Y6.Ap(true);}},AhZ:function(H){var K=this.K;var B;var
Jx=(A.Core.BR.isPrototypeOf(H)?H:null);if((String.fromCharCode(Jx.D4).toLowerCase(
).charCodeAt(0)||0)===0x73)A._GetAutoObject(C.LB).Bbv(this);else if((String.fromCharCode(
Jx.D4).toLowerCase().charCodeAt(0)||0)===0x74)A._GetAutoObject(A.Device.Helper).
AI4(this);else if((String.fromCharCode(Jx.D4).toLowerCase().charCodeAt(0)||0)===
0x64)this.A$(this.Gs);else if((String.fromCharCode(Jx.D4).toLowerCase().charCodeAt(
0)||0)===0x63)this.A$(K.AfO);else if(Jx.CP===152){if(this.AY===K.AfO)this.A$(this.
Gs);else this.A$(K.AfO);}else if(this.AY===this.Gs){if(Jx.CP===11){this.Ib().DriveKeyboardHitting(
26,0x00,true);this.Ib().DriveKeyboardHitting(26,0x00,false);}else if(Jx.CP===12){
this.Ib().DriveKeyboardHitting(27,0x00,true);this.Ib().DriveKeyboardHitting(27,0x00
,false);}else if(Jx.CP===13){this.Ib().DriveKeyboardHitting(28,0x00,true);this.Ib(
).DriveKeyboardHitting(28,0x00,false);}}},_Init:function(aArg){var K=this.K;A.abh.
Ak._Init.call(K.Background={I:this},0);A.abh.Ak._Init.call(K.Abr={I:this},0);A.Core.
Timer._Init.call(K.Aj4={I:this},0);A.aby.AR0._Init.call(K.AfO={I:this},0);A.abh.
Ak._Init.call(K.Ak={I:this},0);A.abm.ALc._Init.call(K.Y6={I:this},0);A.abh.Ak._Init.
call(K.Sl={I:this},0);A.Core.Bh._Init.call(K.Y7={I:this},0);A.Core.Bh._Init.call(
K.Y9={I:this},0);A.Core.Bh._Init.call(K.Y8={I:this},0);A.Core.Bh._Init.call(K.V8={
I:this},0);A.Core.Bh._Init.call(K.Y_={I:this},0);A.Core.Bh._Init.call(K.V2={I:this
},0);A.Core.Bh._Init.call(K.V6={I:this},0);A.Core.Bh._Init.call(K.V7={I:this},0);
A.aby.Aao._Init.call(K.Aao={I:this},0);A.Core.BR._Init.call(K.Dh={I:this},0);K.__proto__=
C.A2h;var B;this.G(BH);K.Background.G(BH);K.Abr.G(EV);this.Gs.G(GT);K.Aj4.QB(2000
);K.Aj4.Ap(true);K.AfO.G(Jt);K.Ak.G(IL);K.Y6.Aj6=true;K.Y6.VN(9);K.Y6.IF(1);K.Y6.
FA(300);K.Y6.B1=0xA0FFFFFF;K.Y6.Cv=0x00FFFFFF;K.Sl.G(OK);K.Sl.L(0x00FFFFFF);K.Y7.
KB(PJ);K.Y7.KA(N1);K.Y7.DN(CJ);K.Y7.D5(Fn);K.Y9.KB(LW);K.Y9.KA(OL);K.Y9.DN(KH);K.
Y9.D5(OM);K.Y8.KB(Ne);K.Y8.KA(ON);K.Y8.DN(Ss);K.Y8.D5(T$);K.V8.KB(Zg);K.V8.KA(Wb
);K.V8.DN(IM);K.V8.D5(Ua);K.Y_.KB(Zh);K.Y_.KA(Wc);K.Y_.DN(Zi);K.Y_.D5(Ub);K.V2.KB(
Zj);K.V2.KA(Zk);K.V2.DN(Uc);K.V2.D5(Wd);K.V6.KB(QV);K.V6.KA(Zl);K.V6.DN(OO);K.V6.
D5(PK);K.V7.KB(Ud);K.V7.KA(Zm);K.V7.DN(We);K.V7.D5(Zn);K.Aao.G(Zo);this.J(K.Background
,-1);this.J(K.Abr,-1);this.J(K.AfO,0);this.J(K.Ak,0);this.J(K.Sl,0);this.J(K.Y7,
0);this.J(K.Y9,0);this.J(K.Y8,0);this.J(K.V8,0);this.J(K.Y_,0);this.J(K.V2,0);this.
J(K.V6,0);this.J(K.V7,0);this.J(K.Aao,0);K.Background.At(A.zW(A.aby.Background));
K.Abr.At(A.zW(A.abz.Abr));K.Aj4.M$=[this,K.Blo];K.Ak.At(A.zW(A.aby.APp));K.Y6.Q=[
B=K.Sl,B.Bha,B.L];K.Sl.At(A.zW(A.abz.AO8));K.Y7.K$=[this,K.Nu];K.Y7.BS=[this,K.Nu
];K.Y9.K$=[this,K.Nu];K.Y9.BS=[this,K.Nu];K.Y8.K$=[this,K.Nu];K.Y8.BS=[this,K.Nu
];K.V8.DV=[this,K.Nu];K.V8.K$=[this,K.Nu];K.V8.BS=[this,K.Nu];K.Y_.K$=[this,K.Nu
];K.Y_.BS=[this,K.Nu];K.V2.DV=[this,K.Nu];K.V2.K$=[this,K.Nu];K.V2.BS=[this,K.Nu
];K.V6.DV=[this,K.Nu];K.V6.K$=[this,K.Nu];K.V6.BS=[this,K.Nu];K.V7.DV=[this,K.Nu
];K.V7.K$=[this,K.Nu];K.V7.BS=[this,K.Nu];K.Aao.Abk([B=A._GetAutoObject(A.Device.
Helper),B.Uf,B.Ug]);K.Dh.BS=[this,K.AhZ];K.BcB=A._GetAutoObject(A.abt.Arc);K.Init.
call(this,aArg);A.hJ++;},_Done:function(){var K=this.K;K.__proto__=null;K.Background.
_Done();K.Abr._Done();K.Aj4._Done();K.AfO._Done();K.Ak._Done();K.Y6._Done();K.Sl.
_Done();K.Y7._Done();K.Y9._Done();K.Y8._Done();K.V8._Done();K.Y_._Done();K.V2._Done(
);K.V6._Done();K.V7._Done();K.Aao._Done();K.Dh._Done();A.hJ--;},_ReInit:function(
){var K=this.K;K.Background._ReInit();K.Abr._ReInit();K.Aj4._ReInit();K.AfO._ReInit(
);K.Ak._ReInit();K.Y6._ReInit();K.Sl._ReInit();K.Y7._ReInit();K.Y9._ReInit();K.Y8.
_ReInit();K.V8._ReInit();K.Y_._ReInit();K.V2._ReInit();K.V6._ReInit();K.V7._ReInit(
);K.Aao._ReInit();K.Dh._ReInit();},_Mark:function(D){var B;if((B=this.BcB)&&(B._cycle
!=D))B._Mark(B._cycle=D);if((B=this.Background)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Abr)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Aj4)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.AfO)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ak)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Y6)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Sl)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.Y7)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Y9
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Y8)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.V8)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Y_)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.V2)._cycle!=D)B._Mark(B._cycle=D);if((B=this.V6)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.V7)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Aao)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.Dh)._cycle!=D)B._Mark(B._cycle=D);},_variants:function(
){return this;},_className:"DeviceDemonstrator::ApplicationDemonstration"};C.DeviceClass={
AHW:null,At1:null,Atg:null,Init:function(aArg){var K=this.K;var B;A.y_([this,K.BgY
],this.Ao,0);A.za([this,K.Bja],[B=K.AHW,B.A50,B.A7b],0);A.za([this,K.Big],[B=K.AHW
,B.A5u,B.AQy],0);},AqC:function(E){this.UpdateScanState(E);},Avi:function(E){this.
UpdateMeasureState(E);},Avs:function(E){this.UpdateTempValue(E);},Av1:function(){
this.UpdateMeasureState(1);this.UpdateTempValue(0);},AgZ:function(){var B;A._GetAutoObject(
A.Device.Helper).Sh.Av3(this);this.UpdateMeasureState(0);},Aet:function(){this.UpdateScanState(
1);},Am1:function(){this.UpdateScanState(0);},AqD:function(E){this.UpdateScanTransponder(
E.Id,E.TransponderType,E.TransponderProtocol);if(this.ScanState!==1)return;this.
UpdateScanState(2);},Bja:function(H){var K=this.K;var AkS=A._GetAutoObject(C.LB).
AEw;if(AkS<0)K.At1=null;else{K.At1=A._NewObject(A.Device.Int32FilterCriterion,0);
K.At1.Initialize(2,0,AkS,true);}A.ow([this,K.Bl],this);},Big:function(H){var K=this.
K;var Bcp=A._GetAutoObject(C.LB).AzS;if(Bcp<=0)K.Atg=null;else{K.Atg=A._NewObject(
A.Device.Int32FilterCriterion,0);K.Atg.Initialize(1,4,Bcp,false);}A.ow([this,K.Bl
],this);},Bl:function(H){var K=this.K;var Bb=A._GetAutoObject(A.Device.Helper).MZ(
);Bb.C0(K.At1);Bb.C0(K.Atg);A._GetAutoObject(C.Ath).Bl(Bb);},BgY:function(H){var
K=this.K;A.ow([this,K.Bl],this);},_Init:function(aArg){var K=this.K;A.abt.DeviceClass.
_Init.call(this,aArg);K.__proto__=C.DeviceClass;this.Pz(4);this.Avo(276034580109999
);K.AHW=A._GetAutoObject(C.LB);K.Init.call(this,aArg);},_Mark:function(D){var B;
A.abt.DeviceClass._Mark.call(this,D);if((B=this.AHW)&&(B._cycle!=D))B._Mark(B._cycle=
D);if((B=this.At1)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Atg)&&(B._cycle
!=D))B._Mark(B._cycle=D);},_variants:function(){return this;},_className:"DeviceDemonstrator::DeviceClass"
};C.Abw={_Init:function(){A.abt.Abw._Init.call(this,0);this.AQ3(false);this.AQ4(
false);},_variants:function(){return this;},_this:null};C.A3a={TransponderId:0,AEw:
0,AzS:0,Aq8:null,Arh:3950,AvL:true,A7b:function(E){if(this.AEw===E)return;this.AEw=
E;A.aat([this,this.A50,this.A7b],0);},A50:function(){return this.AEw;},AQy:function(
E){if(this.AzS===E)return;this.AzS=E;A.aat([this,this.A5u,this.AQy],0);},A5u:function(
){return this.AzS;},Bbv:function(H){this.Azl(this.TransponderId);},M9:function(E
){if(this.TransponderId===E)return;this.TransponderId=E;A.aat([this,this.Ajx,this.
M9],0);},A7c:function(E){if(this.Aq8===E)return;this.Aq8=E;A.aat([this,this.A51,
this.A7c],0);},A51:function(){return this.Aq8;},Azl:function(L2){var B;var Jf=false;
if((A._GetAutoObject(A.Device.Device).ScanState===1)&&!!L2){A._GetAutoObject(A.Device.
Device).PD.ARe(1);A._GetAutoObject(A.Device.Device).PD.OnSetId(L2);A._GetAutoObject(
A.Device.Device).PD.ARd(2);A._GetAutoObject(A.Device.Device).AqC(2);A.aat([B=A._GetAutoObject(
A.Device.Device),B.AQo,B.AXG],0);Jf=true;}return Jf;},AQZ:function(E){if(this.AvL===
E)return;this.AvL=E;A.aat([this,this.AQl,this.AQZ],0);},A7h:function(E){if(this.
Arh===E)return;this.Arh=E;A.aat([this,this.BhR,this.A7h],0);},Bbg:function(H){var
B;if(this.AvL)A._GetAutoObject(A.Device.Helper).AI4(this);else A._GetAutoObject(
A.Device.Helper).A$u(this.Arh);},Ajx:function(){return this.TransponderId;},AQl:
function(){return this.AvL;},BhR:function(){return this.Arh;},_Init:function(aArg
){this.__proto__=C.A3a;this.Aq8=A.aby.AKr;A.hJ++;},_Done:function(){this.__proto__=
null;A.hJ--;},_ReInit:function(){},_Mark:function(D){var B;if((B=this.I)&&(B._cycle
!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:"DeviceDemonstrator::DemonstrationConfigClass"
};C.LB={_Init:function(){C.A3a._Init.call(this,0);},_variants:function(){return this;
},_this:null};C.Ath={_Init:function(){A.Device.Table._Init.call(this,0);this.OnSetId(
0);},_variants:function(){return this;},_this:null};C.A3b={AgU:A.jm,Delete:function(
){this.ADH(A.aaX(this.AgU,this.AgU.length-1));},E6:function(Ab5){if(!this.AgU.length&&(
Ab5===0x30))return;if(this.AgU.length<6)this.ADH(this.AgU+String.fromCharCode(Ab5
));},ADH:function(E){if(this.AgU===E)return;this.AgU=E;A.aat([this,this.A5Y,this.
ADH],0);A._GetAutoObject(C.LB).AQy(A.vQ(this.AgU,-1,10));},A5Y:function(){return this.
AgU;},_Init:function(aArg){this.__proto__=C.A3b;A.hJ++;},_Done:function(){this.__proto__=
null;A.hJ--;},_ReInit:function(){},_Mark:function(D){var B;if((B=this.I)&&(B._cycle
!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:"DeviceDemonstrator::DemonstrationSearchHelperClass"
};C.AiR={_Init:function(){C.A3b._Init.call(this,0);},_variants:function(){return this;
},_this:null};C.PE={AH5:function(H){var Ad=A._GetAutoObject(A.Device.Helper).DB(
);this.Bi(276000312341001,2,1,Ad-1382400,0,1,false,false,false,true,40800,0,0,false
,0,false,1,1,1,0);this.Bi(276000312341002,2,1,Ad-1296000,0,1,false,false,false,true
,38300,0,0,false,0,false,1,1,1,0);this.Bi(276000312341003,2,1,Ad-1209600,0,1,false
,false,false,true,37600,0,0,false,0,false,1,1,1,0);this.Bi(276000312341004,2,1,Ad-
1123200,0,1,false,false,false,true,40600,0,0,false,0,false,1,1,1,0);this.Bi(276000312341005
,2,1,Ad-9504000,0,1,false,false,false,true,36900,0,0,false,0,false,1,1,1,0);this.
Bi(276000312341006,2,1,Ad-950400,0,1,false,false,false,true,38000,0,0,false,0,false
,1,1,1,0);this.Bi(276000312341007,2,1,Ad-864000,0,1,false,false,false,true,39200
,0,0,false,0,false,1,1,1,276000312343007);this.Bi(276000312341008,2,1,Ad-777600,
0,1,false,false,false,true,36500,0,0,false,0,false,1,1,1,276000312343409);this.Bi(
276000312341009,2,1,Ad-691200,0,1,false,false,false,true,40900,0,0,false,0,false
,1,1,1,276000312343308);this.Bi(276000312341010,2,1,Ad-604800,0,1,false,false,false
,true,40900,0,0,false,0,false,1,1,1,276000312343420);this.Bi(276000312341011,2,1
,Ad-518400,0,1,false,false,false,true,39200,0,0,false,0,false,1,1,1,276000312343065
);this.Bi(276000312341012,2,1,Ad-432000,0,1,false,false,false,true,38100,0,0,false
,0,false,1,1,1,276000312343232);this.Bi(276000312341013,2,1,Ad-345600,0,1,false,
false,false,true,37700,0,0,false,0,true,1,1,1,276000312343204);this.Bi(276000312341014
,2,1,Ad-259200,0,1,false,false,false,true,37200,0,0,false,0,true,1,1,1,276000312343376
);this.Bi(276000312341015,2,1,Ad-172800,0,1,false,false,false,true,37000,0,0,false
,0,true,1,1,1,276000312343044);this.Bi(276000312342001,3,1,Ad-7084800,0,0,false,
false,false,true,39500,0,0,false,0,false,1,0,2,0);this.Bi(276000312342002,3,1,Ad-
5788800,0,0,false,false,false,true,38800,0,0,false,0,false,1,0,2,0);this.Bi(276000312342003
,3,1,Ad-7084800,0,0,false,false,false,true,39600,0,0,false,0,false,1,0,2,0);this.
Bi(276000312342004,3,1,Ad-6652800,0,0,false,false,false,true,37400,0,0,false,0,false
,1,0,2,0);this.Bi(276000312342005,3,1,Ad-7084800,0,0,false,false,false,true,39700
,0,0,false,0,false,1,0,2,0);this.Bi(276000312342006,3,1,Ad-6998400,0,0,false,false
,false,true,40900,0,0,false,0,false,1,0,2,0);this.Bi(276000312342007,3,1,Ad-6739200
,0,0,false,false,false,true,38100,0,0,false,0,false,1,0,2,0);this.Bi(276000312342008
,3,1,Ad-7430400,0,0,false,false,false,true,37200,0,0,false,0,false,1,0,2,0);this.
Bi(276000312342009,3,1,Ad-6652800,0,0,false,false,false,true,37000,0,0,false,0,false
,1,0,2,0);this.Bi(276000312342010,3,1,Ad-7776000,0,0,false,false,false,true,38600
,0,0,false,0,false,1,0,2,0);this.Bi(276000312342011,3,1,Ad-5961600,0,0,false,false
,false,true,37900,0,0,false,0,false,1,0,2,0);this.Bi(276000312342012,3,1,Ad-6393600
,0,0,false,false,false,true,36300,0,0,false,0,false,1,0,2,0);this.Bi(276000312342013
,3,1,Ad-7344000,0,0,false,false,false,true,36100,0,0,false,0,false,1,0,2,0);this.
Bi(276000312342014,3,1,Ad-5529600,0,0,false,false,false,true,37700,0,0,false,0,false
,1,0,2,0);this.Bi(276000312342015,3,1,Ad-6307200,0,0,false,false,false,true,39800
,0,0,false,0,false,1,0,2,0);this.Bi(276000312342016,3,1,Ad-6048000,0,0,false,false
,false,true,40300,0,0,false,0,false,1,0,2,0);this.Bi(276000312342017,3,1,Ad-6134400
,0,0,false,false,false,true,38400,0,0,false,0,false,1,0,2,0);this.Bi(276000312342018
,3,1,Ad-6652800,0,0,false,false,false,true,36300,0,0,false,0,false,1,0,2,0);this.
Bi(276000312342019,3,1,Ad-8467200,0,0,false,false,false,true,38700,0,0,false,0,false
,1,0,2,0);this.Bi(276000312342020,3,1,Ad-6998400,0,0,false,false,false,true,37300
,0,0,false,0,false,1,0,2,0);this.Bi(276000312342021,3,1,Ad-6652800,0,0,false,false
,false,true,38500,0,0,false,0,false,1,0,2,0);this.Bi(276000312342022,3,1,Ad-5788800
,0,0,false,false,false,true,37800,0,0,false,0,false,1,0,2,0);this.Bi(276000312342023
,3,1,Ad-6652800,0,0,false,false,false,true,37300,0,0,false,0,false,1,0,2,0);this.
Bi(276000312342024,3,1,Ad-6739200,0,0,false,false,false,true,37500,0,0,false,0,false
,1,0,2,0);this.Bi(276000312342025,3,1,Ad-7171200,0,0,false,false,false,true,36300
,0,0,false,0,false,1,0,2,0);this.Bi(276000312342026,3,1,Ad-7171200,0,0,false,false
,false,true,37800,0,0,false,0,false,1,0,2,0);this.Bi(276000312342027,3,1,Ad-7689600
,0,0,false,false,false,true,37900,0,0,false,0,false,1,0,2,0);this.Bi(276000312342028
,3,1,Ad-8121600,0,0,false,false,false,true,39800,0,0,false,0,false,1,0,2,0);this.
Bi(276000312342029,3,1,Ad-7603200,0,0,false,false,false,true,36500,0,0,false,0,false
,1,0,2,0);this.Bi(276000312342030,3,1,Ad-6393600,0,0,false,false,false,true,38900
,0,0,false,0,false,1,0,2,0);this.Bi(276000312342031,3,1,Ad-6652800,0,0,false,false
,false,true,36700,0,0,false,0,false,1,0,2,0);this.Bi(276000312342032,3,1,Ad-6739200
,0,0,false,false,false,true,37400,0,0,false,0,false,1,0,2,0);this.Bi(276000312342033
,3,1,Ad-6393600,0,0,false,false,false,true,41000,0,0,false,0,false,1,0,2,0);this.
Bi(276000312342034,3,1,Ad-7084800,0,0,false,false,false,true,40500,0,0,false,0,false
,1,0,2,0);this.Bi(276000312342035,3,1,Ad-7171200,0,0,false,false,false,true,38200
,0,0,false,0,false,1,0,2,0);this.Bi(276000312342036,3,1,Ad-6480000,0,0,false,false
,false,true,40000,0,0,false,0,false,1,0,2,0);this.Bi(276000312342037,3,1,Ad-6652800
,0,0,false,false,false,true,40500,0,0,false,0,false,1,0,2,0);this.Bi(276000312342038
,3,1,Ad-7084800,0,0,false,false,false,true,40000,0,0,false,0,false,1,0,2,0);this.
Bi(276000312342039,3,1,Ad-6307200,0,0,false,false,false,true,38900,0,0,false,0,false
,1,0,2,0);this.Bi(276000312342040,3,1,Ad-7430400,0,0,false,false,false,true,37300
,0,0,false,0,false,1,0,2,0);this.Bi(276000312342041,3,1,Ad-6652800,0,0,false,false
,false,true,37000,0,0,false,0,false,1,0,2,0);this.Bi(276000312342042,3,1,Ad-6825600
,0,0,false,false,false,true,40800,0,0,false,0,false,1,0,2,0);this.Bi(276000312342043
,3,1,Ad-7430400,0,0,false,false,false,true,40000,0,0,false,0,false,1,0,2,0);this.
Bi(276000312342044,3,1,Ad-7516800,0,0,false,false,false,true,40700,0,0,false,0,false
,1,0,2,0);this.Bi(276000312342045,3,1,Ad-8121600,0,0,false,false,false,true,40800
,0,0,false,0,false,1,0,2,0);this.Bi(276000312342046,3,1,Ad-8553600,0,0,false,false
,false,true,39300,0,0,false,0,false,1,0,2,0);this.Bi(276000312342047,3,1,Ad-7171200
,0,0,false,false,false,true,39300,0,0,false,0,false,1,0,2,0);this.Bi(276000312342048
,3,1,Ad-6566400,0,0,false,false,false,true,40900,0,0,false,0,false,1,0,2,0);this.
Bi(276000312342049,3,1,Ad-7171200,0,0,false,false,false,true,40100,0,0,false,0,false
,1,0,2,0);this.Bi(276000312342050,3,1,Ad-6998400,0,0,false,false,false,true,39900
,0,0,false,0,false,1,0,2,0);this.Bi(276000312342051,3,1,Ad-6739200,0,0,false,false
,false,true,38200,0,0,false,0,false,1,0,2,0);this.Bi(276000312342052,3,1,Ad-7603200
,0,0,false,false,false,true,36400,0,0,false,0,false,1,0,2,0);this.Bi(276000312342053
,3,1,Ad-7689600,0,0,false,false,false,true,40800,0,0,false,0,false,1,0,2,0);this.
Bi(276000312342054,3,1,Ad-6480000,0,0,false,false,false,true,36100,0,0,false,0,false
,1,0,2,0);this.Bi(276000312342055,3,1,Ad-7948800,0,0,false,false,false,true,38000
,0,0,false,0,false,1,0,2,0);this.Bi(276000312342056,3,1,Ad-8121600,0,0,false,false
,false,true,37800,0,0,false,0,false,1,0,2,0);this.Bi(276000312342057,3,1,Ad-6566400
,0,0,false,false,false,true,38800,0,0,false,0,false,1,0,2,0);this.Bi(276000312342058
,3,1,Ad-7862400,0,0,false,false,false,true,36600,0,0,false,0,false,1,0,2,0);this.
Bi(276000312342059,3,1,Ad-7344000,0,0,false,false,false,true,39700,0,0,false,0,false
,1,0,2,0);this.Bi(276000312342060,3,1,Ad-6998400,0,0,false,false,false,true,36600
,0,0,false,0,false,1,0,2,0);this.Bi(276000312342061,3,1,Ad-5788800,0,0,false,false
,false,true,36600,0,0,false,0,false,1,0,2,0);this.Bi(276000312342062,3,1,Ad-7257600
,0,0,false,false,false,true,36300,0,0,false,0,false,1,0,2,0);this.Bi(276000312342063
,3,1,Ad-5875200,0,0,false,false,false,true,40800,0,0,false,0,false,1,0,2,0);this.
Bi(276000312342064,3,1,Ad-6134400,0,0,false,false,false,true,37500,0,0,false,0,false
,1,0,2,0);this.Bi(276000312342065,3,1,Ad-5788800,0,0,false,false,false,true,36000
,0,0,false,0,false,1,0,2,0);this.Bi(276000312342066,3,1,Ad-7862400,0,0,false,false
,false,true,38400,0,0,false,0,false,1,0,2,0);this.Bi(276000312342067,3,1,Ad-5270400
,0,0,false,false,false,true,36900,0,0,false,0,false,1,0,2,0);this.Bi(276000312342068
,3,1,Ad-7776000,0,0,false,false,false,true,38300,0,0,false,0,false,1,0,2,0);this.
Bi(276000312342069,3,1,Ad-7171200,0,0,false,false,false,true,40400,0,0,false,0,false
,1,0,2,0);this.Bi(276000312342070,3,1,Ad-6048000,0,0,false,false,false,true,40100
,0,0,false,0,false,1,0,2,0);this.Bi(276000312343007,1,1,Ad-186192000,0,1,false,false
,false,true,0,Ad-864000,3,false,1,false,1,0,1,0);this.Bi(276000312343044,1,1,Ad-
118108800,0,1,false,false,false,true,0,Ad-172800,1,false,1,false,1,0,1,0);this.Bi(
276000312343065,1,1,Ad-152150400,0,1,false,false,false,true,0,Ad-518400,2,false,
1,false,1,0,1,0);this.Bi(276000312343117,1,1,Ad-252806400,0,1,false,false,false,
true,0,Ad-86400,5,false,1,false,1,0,1,0);this.Bi(276000312343204,1,1,Ad-219369600
,0,1,false,false,false,true,0,Ad-345600,4,false,1,false,1,0,1,0);this.Bi(276000312343232
,1,1,Ad-152064000,0,1,false,false,false,true,0,Ad-432000,2,false,1,false,1,0,1,0
);this.Bi(276000312343308,1,1,Ad-118627200,0,1,false,false,false,true,0,Ad-691200
,1,false,1,false,1,0,1,0);this.Bi(276000312343376,1,1,Ad-118195200,0,1,false,false
,false,true,0,Ad-259200,1,false,1,false,1,0,1,0);this.Bi(276000312343409,1,1,Ad-
152409600,0,1,false,false,false,true,0,Ad-777600,2,false,1,false,1,0,1,0);this.Bi(
276000312343420,1,1,Ad-253324800,0,1,false,false,false,true,0,Ad-604800,5,false,
1,false,1,0,1,0);this.Bi(276000312343505,4,1,Ad-145152000,0,1,false,false,false,
true,0,Ad-27216000,1,true,1,false,1,0,1,0);this.Bi(276000312343535,4,1,Ad-215222400
,0,1,false,false,false,true,0,Ad-29894400,3,true,1,false,1,0,1,0);this.Bi(276000312343540
,4,1,Ad-179107200,0,1,false,false,false,true,0,Ad-27475200,2,true,1,false,1,0,1,
0);this.Bi(276000312343558,4,1,Ad-248659200,0,1,false,false,false,true,0,Ad-29635200
,4,true,1,false,1,0,1,0);this.Bi(276000312343587,4,1,Ad-179020800,0,1,false,false
,false,true,0,Ad-27388800,2,true,1,false,1,0,1,0);this.Bi(276000312343597,4,1,Ad-
146188800,0,1,false,false,false,true,0,Ad-28252800,1,true,1,false,1,0,1,0);this.
Bi(276000312343619,4,1,Ad-181353600,0,1,false,false,false,true,0,Ad-29721600,2,true
,1,false,1,0,1,0);this.Bi(276000312343627,4,1,Ad-213235200,0,1,false,false,false
,true,0,Ad-27907200,3,true,1,false,1,0,1,0);this.Bi(276000312343721,4,1,Ad-282182400
,0,1,false,false,false,true,0,Ad-29462400,5,true,1,false,1,0,1,0);this.Bi(276000312343892
,4,1,Ad-179107200,0,1,false,false,false,true,0,Ad-27475200,2,true,1,false,1,0,1,
0);this.Bi(276000312343899,4,1,Ad-147398400,0,1,false,false,false,true,0,Ad-29462400
,1,true,1,false,1,0,1,0);this.Bi(276000312343913,4,1,Ad-178416000,0,1,false,false
,false,true,0,Ad-26784000,2,true,1,false,1,0,1,0);this.Bi(276000312343915,4,1,Ad-
179712000,0,1,false,false,false,true,0,Ad-28080000,2,true,1,false,1,0,1,0);this.
Bi(276000312343940,4,1,Ad-212025600,0,1,false,false,false,true,0,Ad-26697600,3,true
,1,false,1,0,1,0);this.Bi(276000312343978,4,1,Ad-246499200,0,1,false,false,false
,true,0,Ad-27475200,4,true,1,false,1,0,1,0);},AH7:function(H){var Ad=A._GetAutoObject(
A.Device.Helper).DB();this.AE(Ad-3542400,276000312342001,0,0,5,5,3,5,84100);this.
AE(Ad-3542400,276000312342002,0,0,5,5,3,5,77500);this.AE(Ad-3542400,276000312342003
,0,0,5,5,3,5,79700);this.AE(Ad-3542400,276000312342004,0,0,5,5,3,5,78900);this.AE(
Ad-3542400,276000312342005,0,0,5,5,3,5,87200);this.AE(Ad-3542400,276000312342006
,0,0,5,5,3,5,82400);this.AE(Ad-3542400,276000312342007,0,0,5,5,3,5,81900);this.AE(
Ad-3542400,276000312342008,0,0,5,5,3,5,80500);this.AE(Ad-3542400,276000312342009
,0,0,5,5,3,5,82800);this.AE(Ad-3542400,276000312342010,0,0,5,5,3,5,82000);this.AE(
Ad-3542400,276000312342011,0,0,5,5,3,5,78400);this.AE(Ad-3542400,276000312342012
,0,0,5,5,3,5,80500);this.AE(Ad-3542400,276000312342013,0,0,5,5,3,5,82600);this.AE(
Ad-3542400,276000312342014,0,0,5,5,3,5,0);this.AE(Ad-3542400,276000312342015,0,0
,5,5,3,5,80100);this.AE(Ad-3542400,276000312342016,0,0,5,5,3,5,81100);this.AE(Ad-
3542400,276000312342017,0,0,5,5,3,5,77000);this.AE(Ad-3542400,276000312342018,0,
0,5,5,3,5,80300);this.AE(Ad-3542400,276000312342019,0,0,5,5,3,5,76500);this.AE(Ad-
3542400,276000312342020,0,0,5,5,3,5,80500);this.AE(Ad-3542400,276000312342021,0,
0,5,5,3,5,81500);this.AE(Ad-3542400,276000312342022,0,0,5,5,3,5,80600);this.AE(Ad-
3542400,276000312342023,0,0,5,5,3,5,74400);this.AE(Ad-3542400,276000312342024,0,
0,5,5,3,5,80000);this.AE(Ad-3542400,276000312342025,0,0,5,5,3,5,74500);this.AE(Ad-
3542400,276000312342026,0,0,5,5,3,5,84800);this.AE(Ad-3542400,276000312342027,0,
0,5,5,3,5,88200);this.AE(Ad-3542400,276000312342028,0,0,5,5,3,5,79000);this.AE(Ad-
3542400,276000312342029,0,0,5,5,3,5,82000);this.AE(Ad-3542400,276000312342030,0,
0,5,5,3,5,79500);this.AE(Ad-3542400,276000312342031,0,0,5,5,3,5,82600);this.AE(Ad-
3542400,276000312342032,0,0,5,5,3,5,86800);this.AE(Ad-3542400,276000312342033,0,
0,5,5,3,5,77000);this.AE(Ad-3542400,276000312342034,0,0,5,5,3,5,76000);this.AE(Ad-
3542400,276000312342035,0,0,5,5,3,5,78100);this.AE(Ad-3542400,276000312342036,0,
0,5,5,3,5,0);this.AE(Ad-3542400,276000312342037,0,0,5,5,3,5,84700);this.AE(Ad-3542400
,276000312342038,0,0,5,5,3,5,85400);this.AE(Ad-3542400,276000312342039,0,0,5,5,3
,5,76500);this.AE(Ad-3542400,276000312342040,0,0,5,5,3,5,81500);this.AE(Ad-3542400
,276000312342041,0,0,5,5,3,5,81100);this.AE(Ad-3542400,276000312342042,0,0,5,5,3
,5,67500);this.AE(Ad-3542400,276000312342043,0,0,5,5,3,5,80000);this.AE(Ad-3542400
,276000312342044,0,0,5,5,3,5,70500);this.AE(Ad-3542400,276000312342045,0,0,5,5,3
,5,74000);this.AE(Ad-3542400,276000312342046,0,0,5,5,3,5,66000);this.AE(Ad-3542400
,276000312342047,0,0,5,5,2,5,69600);this.AE(Ad-3542400,276000312342048,0,0,5,5,3
,5,78500);this.AE(Ad-3542400,276000312342049,0,0,5,5,3,5,79000);this.AE(Ad-3542400
,276000312342050,0,0,5,5,3,5,70100);this.AE(Ad-3542400,276000312342051,0,0,5,5,3
,5,74500);this.AE(Ad-3542400,276000312342052,0,0,5,5,3,5,80000);this.AE(Ad-3542400
,276000312342053,0,0,5,5,3,5,63400);this.AE(Ad-3542400,276000312342054,0,0,5,5,3
,5,69200);this.AE(Ad-3542400,276000312342055,0,0,5,5,3,5,78400);this.AE(Ad-3542400
,276000312342056,0,0,5,5,3,5,69800);this.AE(Ad-3542400,276000312342057,0,0,5,5,3
,5,72700);this.AE(Ad-3542400,276000312342058,0,0,0,0,0,0,64200);this.AE(Ad-3542400
,276000312342059,0,0,5,5,3,5,72000);this.AE(Ad-3542400,276000312342060,0,0,5,5,3
,5,61100);this.AE(Ad,276000312342001,0,0,0,0,0,0,120500);this.AE(Ad,276000312342002
,0,0,0,0,0,0,111500);this.AE(Ad,276000312342003,0,0,0,0,0,0,110600);this.AE(Ad,276000312342004
,0,0,0,0,0,0,106700);this.AE(Ad,276000312342005,0,0,0,0,0,0,117200);this.AE(Ad,276000312342006
,0,0,0,0,0,0,116400);this.AE(Ad,276000312342007,0,0,0,0,0,0,118900);this.AE(Ad,276000312342008
,0,0,0,0,0,0,107000);this.AE(Ad,276000312342009,0,0,0,0,0,0,122100);this.AE(Ad,276000312342010
,0,0,0,0,0,0,94100);this.AE(Ad,276000312342011,0,0,0,0,0,0,114800);this.AE(Ad,276000312342012
,0,0,0,0,0,0,109600);this.AE(Ad,276000312342013,0,0,0,0,0,0,111000);this.AE(Ad,276000312342015
,0,0,0,0,0,0,114700);this.AE(Ad,276000312342016,0,0,0,0,0,0,100500);this.AE(Ad,276000312342017
,0,0,0,0,0,0,116300);this.AE(Ad,276000312342018,0,0,0,0,0,0,110500);this.AE(Ad,276000312342019
,0,0,0,0,0,0,123000);this.AE(Ad,276000312342020,0,0,0,0,0,0,118600);this.AE(Ad,276000312342021
,0,0,0,0,0,0,120300);this.AE(Ad,276000312342022,0,0,0,0,0,0,109000);this.AE(Ad,276000312342023
,0,0,0,0,0,0,104000);this.AE(Ad,276000312342024,0,0,0,0,0,0,112600);this.AE(Ad,276000312342025
,0,0,0,0,0,0,106000);this.AE(Ad,276000312342026,0,0,0,0,0,0,122000);this.AE(Ad,276000312342027
,0,0,0,0,0,0,122000);this.AE(Ad,276000312342028,0,0,0,0,0,0,122300);this.AE(Ad,276000312342029
,0,0,0,0,0,0,117100);this.AE(Ad,276000312342030,0,0,0,0,0,0,100100);this.AE(Ad,276000312342031
,0,0,0,0,0,0,126100);this.AE(Ad,276000312342032,0,0,0,0,0,0,116800);this.AE(Ad,276000312342033
,0,0,0,0,0,0,103200);this.AE(Ad,276000312342034,0,0,0,0,0,0,109000);this.AE(Ad,276000312342035
,0,0,0,0,0,0,128000);this.AE(Ad,276000312342037,0,0,0,0,0,0,115600);this.AE(Ad,276000312342038
,0,0,0,0,0,0,120600);this.AE(Ad,276000312342039,0,0,0,0,0,0,104400);this.AE(Ad,276000312342040
,0,0,0,0,0,0,102300);this.AE(Ad,276000312342041,0,0,0,0,0,0,114500);this.AE(Ad,276000312342042
,0,0,0,0,0,0,99000);this.AE(Ad,276000312342043,0,0,0,0,0,0,104300);this.AE(Ad,276000312342044
,0,0,0,0,0,0,108600);this.AE(Ad,276000312342045,0,0,0,0,0,0,117200);this.AE(Ad,276000312342046
,0,0,0,0,0,0,105000);this.AE(Ad,276000312342047,0,0,0,0,0,0,108400);this.AE(Ad,276000312342048
,0,0,0,0,0,0,117700);this.AE(Ad,276000312342049,0,0,0,0,0,0,115000);this.AE(Ad,276000312342050
,0,0,0,0,0,0,110800);this.AE(Ad,276000312342051,0,0,0,0,0,0,91300);this.AE(Ad,276000312342052
,0,0,0,0,0,0,103600);this.AE(Ad,276000312342053,0,0,0,0,0,0,104700);this.AE(Ad,276000312342054
,0,0,0,0,0,0,101900);this.AE(Ad,276000312342055,0,0,0,0,0,0,120000);this.AE(Ad,276000312342056
,0,0,0,0,0,0,114200);this.AE(Ad,276000312342057,0,0,0,0,0,0,91800);this.AE(Ad,276000312342058
,0,0,0,0,0,0,93100);this.AE(Ad,276000312342059,0,0,0,0,0,0,102300);this.AE(Ad,276000312342060
,0,0,0,0,0,0,100900);this.AE(Ad-9158400,276000312341005,3910,2,0,0,0,0,0);this.AE(
Ad-9072000,276000312341005,3970,2,0,0,0,0,0);this.AE(Ad-8985600,276000312341005,
3900,2,0,0,0,0,0);this.AE(Ad-8899200,276000312341005,3830,3,0,0,0,0,0);this.AE(Ad-
8812800,276000312341005,3810,3,0,0,0,0,0);this.AE(Ad-6307200,276000312341005,4050
,1,0,0,0,0,0);this.AE(Ad-6220800,276000312341005,3900,2,0,0,0,0,0);this.AE(Ad-6134400
,276000312341005,3810,3,0,0,0,0,0);this.AE(Ad-6048000,276000312341005,3780,3,0,0
,0,0,0);this.AE(Ad-5961600,276000312341005,3820,3,0,0,0,0,0);this.AE(Ad-432000,276000312341005
,4000,2,0,0,0,0,0);this.AE(Ad-86400,276000312341005,4020,2,0,0,0,0,0);this.AE(Ad
,276000312341005,3950,2,0,0,0,0,0);this.AE(Ad-86400,276000312343117,4000,2,0,0,0
,0,0);this.AE(Ad-172800,276000312343044,4030,2,0,0,0,0,0);this.AE(Ad-86400,276000312343044
,4100,1,0,0,0,0,0);this.AE(Ad-259200,276000312343376,4050,1,0,0,0,0,0);this.AE(Ad-
172800,276000312343376,3900,2,0,0,0,0,0);this.AE(Ad-86400,276000312343376,3780,3
,0,0,0,0,0);this.AE(Ad-345600,276000312343204,3910,2,0,0,0,0,0);this.AE(Ad-259200
,276000312343204,3980,2,0,0,0,0,0);this.AE(Ad-172800,276000312343204,4010,2,0,0,
0,0,0);this.AE(Ad-86400,276000312343204,3980,2,0,0,0,0,0);this.AE(Ad-432000,276000312343232
,4110,1,0,0,0,0,0);this.AE(Ad-345600,276000312343232,3910,2,0,0,0,0,0);this.AE(Ad-
259200,276000312343232,3940,2,0,0,0,0,0);this.AE(Ad-172800,276000312343232,3870,
3,0,0,0,0,0);this.AE(Ad-86400,276000312343232,3920,2,0,0,0,0,0);this.AE(Ad-518400
,276000312343065,3810,3,0,0,0,0,0);this.AE(Ad-432000,276000312343065,3870,3,0,0,
0,0,0);this.AE(Ad-345600,276000312343065,4030,2,0,0,0,0,0);this.AE(Ad-259200,276000312343065
,3890,3,0,0,0,0,0);this.AE(Ad-172800,276000312343065,3720,3,0,0,0,0,0);this.AE(Ad-
86400,276000312343065,3940,2,0,0,0,0,0);this.AE(Ad-604800,276000312343420,3830,3
,0,0,0,0,0);this.AE(Ad-518400,276000312343420,3940,2,0,0,0,0,0);this.AE(Ad-432000
,276000312343420,3980,2,0,0,0,0,0);this.AE(Ad-345600,276000312343420,3900,2,0,0,
0,0,0);this.AE(Ad-259200,276000312343420,3650,3,0,0,0,0,0);this.AE(Ad-172800,276000312343420
,4110,1,0,0,0,0,0);this.AE(Ad-86400,276000312343420,3860,3,0,0,0,0,0);this.AE(Ad-
691200,276000312343308,3710,3,0,0,0,0,0);this.AE(Ad-604800,276000312343308,3690,
3,0,0,0,0,0);this.AE(Ad-518400,276000312343308,3810,3,0,0,0,0,0);this.AE(Ad-432000
,276000312343308,3770,3,0,0,0,0,0);this.AE(Ad-345600,276000312343308,3670,3,0,0,
0,0,0);this.AE(Ad-259200,276000312343308,3970,2,0,0,0,0,0);this.AE(Ad-172800,276000312343308
,3680,3,0,0,0,0,0);this.AE(Ad-86400,276000312343308,3710,3,0,0,0,0,0);this.AE(Ad-
777600,276000312343409,4090,1,0,0,0,0,0);this.AE(Ad-691200,276000312343409,3690,
3,0,0,0,0,0);this.AE(Ad-604800,276000312343409,4100,1,0,0,0,0,0);this.AE(Ad-518400
,276000312343409,3840,3,0,0,0,0,0);this.AE(Ad-432000,276000312343409,3660,3,0,0,
0,0,0);this.AE(Ad-345600,276000312343409,3900,2,0,0,0,0,0);this.AE(Ad-259200,276000312343409
,3780,3,0,0,0,0,0);this.AE(Ad-172800,276000312343409,3780,3,0,0,0,0,0);this.AE(Ad-
86400,276000312343409,3870,3,0,0,0,0,0);this.AE(Ad-864000,276000312343007,3850,3
,0,0,0,0,0);this.AE(Ad-777600,276000312343007,3680,3,0,0,0,0,0);this.AE(Ad-691200
,276000312343007,4020,2,0,0,0,0,0);this.AE(Ad-604800,276000312343007,3830,3,0,0,
0,0,0);this.AE(Ad-518400,276000312343007,3670,3,0,0,0,0,0);this.AE(Ad-432000,276000312343007
,3910,2,0,0,0,0,0);this.AE(Ad-345600,276000312343007,4090,1,0,0,0,0,0);this.AE(Ad-
259200,276000312343007,3680,3,0,0,0,0,0);this.AE(Ad-172800,276000312343007,4130,
1,0,0,0,0,0);this.AE(Ad-86400,276000312343007,3730,3,0,0,0,0,0);},AH4:function(H
){this.AkU(1,Wf);this.AkU(2,Wg);this.AkU(3,St);},AH6:function(H){this.ZK(2016,216
,11);this.ZK(2017,217,10);this.ZK(2018,218,9);this.ZK(2019,219,8);this.ZK(2020,220
,7);this.ZK(2021,221,6);},_Init:function(aArg){var K=this.K;K.__proto__=C.PE;A.hJ++;
},_Done:function(){var K=this.K;K.__proto__=null;A.hJ--;},_ReInit:function(){},_Mark:
function(D){},_variants:function(){return this;},_className:"DeviceDemonstrator::TableData"
};
C._Init=function(){C.DeviceClass.__proto__=A.abt.DeviceClass;};C._ReInit=function(
){var B;if((B=C.LB._this))B._ReInit();if((B=C.Ath._this))B._ReInit();if((B=C.AiR.
_this))B._ReInit();};C.DE=function(D){var B;if((B=C.Abw._this)&&(B._cycle!=D))B.
_Done(C.Abw._this=null);if((B=C.LB._this)&&(B._cycle!=D))B._Done(C.LB._this=null
);if((B=C.Ath._this)&&(B._cycle!=D))B._Done(C.Ath._this=null);if((B=C.AiR._this)&&(
B._cycle!=D))B._Done(C.AiR._this=null);};return C;})();

/* VitalControl demonstration application, © Urban GmbH & Co.KG 2023 */