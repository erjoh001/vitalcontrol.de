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
var B_=[0,0];var BH=[0,0,1000,740];var EV=[200,5,577,745];var GS=[270,69,510,389];
var Jt=[605,30,975,740];var IL=[25,25,45,41];var OK=[547,610,687,750];var PJ=[270
,390];var N1=[350,390];var CJ=[350,450];var Fn=[270,450];var Nb=[430,390];var OL=[
510,390];var KH=[510,450];var OM=[430,450];var Nc=[360,390];var ON=[420,390];var
Ss=[420,450];var T9=[360,450];var Zc=[335,460];var Wa=[447,460];var I$=[447,500];
var T_=[335,500];var Zd=[350,512];var Wb=[430,512];var Ze=[430,592];var T$=[350,
592];var Zf=[335,605];var Zg=[447,605];var Ua=[447,665];var Wc=[335,665];var QT=[
264,504];var Zh=[344,504];var OO=[344,601];var PK=[264,601];var Ub=[436,504];var
Zi=[516,504];var Wd=[516,601];var Zj=[436,601];var Zk=[10,130,210,310];var We="1";
var Wf="2";var St="3";
C.A2f={Bcx:null,Background:null,Abr:null,Aj2:null,AfP:null,Ak:null,Y2:null,Sl:null
,Y3:null,Y5:null,Y4:null,V7:null,Y6:null,V1:null,V5:null,V6:null,Aam:null,Dh:null
,Init:function(aArg){A._GetAutoObject(A.Device.Device).AqE(A._NewObject(A.Device.
Transponder,0));},DriveCursorHitting:function(Sy,BG,Fo){var AIs=this.Bfh();if(!!
AIs){var AZG=AIs.M;AZG=A.aaM(AZG,AIs.Bfr(B_));if(!A.vt(AZG,Fo))this.AAN(AIs);}return A.
Core.Root.DriveCursorHitting.call(this,Sy,BG,Fo);},Blj:function(H){var K=this.K;
this.Device.UpdateActiveScreen(3);K.Aj2.Ap(false);},Nt:function(H){var K=this.K;
var B;var DY=(A.Core.Bh.isPrototypeOf(H)?H:null);var AhP=0;if(DY===K.Y4)AhP=27;else
if(DY===K.Y3)AhP=26;else if(DY===K.Y5)AhP=28;else if(DY===K.V5)AhP=6;else if(DY===
K.V6)AhP=7;else if(DY===K.V7)AhP=4;else if(DY===K.V1)AhP=5;else if(DY===K.Y6)AhP=
1;if(!!DY){if((DY.Down&&(DY.Jk>0))&&(DY.Jk<400))return;var Bu6=this.AY;this.A$(this.
Gr);this.Ib().DriveKeyboardHitting(AhP,0x00,DY.Down);this.A$(Bu6);K.Sl.G(A.aaP(K.
Sl.M,DY.HU[0]-((((B=K.Sl.M)[2]-B[0])/2)|0)));K.Sl.G(A.aaR(K.Sl.M,DY.HU[1]-((((B=
K.Sl.M)[3]-B[1])/2)|0)));K.Y2.Ap(true);}},AhX:function(H){var K=this.K;var B;var
Jx=(A.Core.BR.isPrototypeOf(H)?H:null);if((String.fromCharCode(Jx.D4).toLowerCase(
).charCodeAt(0)||0)===0x73)A._GetAutoObject(C.LB).Bbr(this);else if((String.fromCharCode(
Jx.D4).toLowerCase().charCodeAt(0)||0)===0x74)A._GetAutoObject(A.Device.Helper).
AI8(this);else if((String.fromCharCode(Jx.D4).toLowerCase().charCodeAt(0)||0)===
0x64)this.A$(this.Gr);else if((String.fromCharCode(Jx.D4).toLowerCase().charCodeAt(
0)||0)===0x63)this.A$(K.AfP);else if(Jx.CP===152){if(this.AY===K.AfP)this.A$(this.
Gr);else this.A$(K.AfP);}else if(this.AY===this.Gr){if(Jx.CP===11){this.Ib().DriveKeyboardHitting(
26,0x00,true);this.Ib().DriveKeyboardHitting(26,0x00,false);}else if(Jx.CP===12){
this.Ib().DriveKeyboardHitting(27,0x00,true);this.Ib().DriveKeyboardHitting(27,0x00
,false);}else if(Jx.CP===13){this.Ib().DriveKeyboardHitting(28,0x00,true);this.Ib(
).DriveKeyboardHitting(28,0x00,false);}}},_Init:function(aArg){var K=this.K;A.abh.
Ak._Init.call(K.Background={I:this},0);A.abh.Ak._Init.call(K.Abr={I:this},0);A.Core.
Timer._Init.call(K.Aj2={I:this},0);A.aby.AR4._Init.call(K.AfP={I:this},0);A.abh.
Ak._Init.call(K.Ak={I:this},0);A.abm.ALg._Init.call(K.Y2={I:this},0);A.abh.Ak._Init.
call(K.Sl={I:this},0);A.Core.Bh._Init.call(K.Y3={I:this},0);A.Core.Bh._Init.call(
K.Y5={I:this},0);A.Core.Bh._Init.call(K.Y4={I:this},0);A.Core.Bh._Init.call(K.V7={
I:this},0);A.Core.Bh._Init.call(K.Y6={I:this},0);A.Core.Bh._Init.call(K.V1={I:this
},0);A.Core.Bh._Init.call(K.V5={I:this},0);A.Core.Bh._Init.call(K.V6={I:this},0);
A.aby.Aam._Init.call(K.Aam={I:this},0);A.Core.BR._Init.call(K.Dh={I:this},0);K.__proto__=
C.A2f;var B;this.G(BH);K.Background.G(BH);K.Abr.G(EV);this.Gr.G(GS);K.Aj2.Qz(2000
);K.Aj2.Ap(true);K.AfP.G(Jt);K.Ak.G(IL);K.Y2.Aj4=true;K.Y2.VN(9);K.Y2.IF(1);K.Y2.
Fz(300);K.Y2.B0=0xA0FFFFFF;K.Y2.Cv=0x00FFFFFF;K.Sl.G(OK);K.Sl.L(0x00FFFFFF);K.Y3.
KB(PJ);K.Y3.KA(N1);K.Y3.DN(CJ);K.Y3.D5(Fn);K.Y5.KB(Nb);K.Y5.KA(OL);K.Y5.DN(KH);K.
Y5.D5(OM);K.Y4.KB(Nc);K.Y4.KA(ON);K.Y4.DN(Ss);K.Y4.D5(T9);K.V7.KB(Zc);K.V7.KA(Wa
);K.V7.DN(I$);K.V7.D5(T_);K.Y6.KB(Zd);K.Y6.KA(Wb);K.Y6.DN(Ze);K.Y6.D5(T$);K.V1.KB(
Zf);K.V1.KA(Zg);K.V1.DN(Ua);K.V1.D5(Wc);K.V5.KB(QT);K.V5.KA(Zh);K.V5.DN(OO);K.V5.
D5(PK);K.V6.KB(Ub);K.V6.KA(Zi);K.V6.DN(Wd);K.V6.D5(Zj);K.Aam.G(Zk);this.J(K.Background
,-1);this.J(K.Abr,-1);this.J(K.AfP,0);this.J(K.Ak,0);this.J(K.Sl,0);this.J(K.Y3,
0);this.J(K.Y5,0);this.J(K.Y4,0);this.J(K.V7,0);this.J(K.Y6,0);this.J(K.V1,0);this.
J(K.V5,0);this.J(K.V6,0);this.J(K.Aam,0);K.Background.At(A.zW(A.aby.Background));
K.Abr.At(A.zW(A.abz.Abr));K.Aj2.M8=[this,K.Blj];K.Ak.At(A.zW(A.aby.APt));K.Y2.Q=[
B=K.Sl,B.Bg8,B.L];K.Sl.At(A.zW(A.abz.APa));K.Y3.K$=[this,K.Nt];K.Y3.BS=[this,K.Nt
];K.Y5.K$=[this,K.Nt];K.Y5.BS=[this,K.Nt];K.Y4.K$=[this,K.Nt];K.Y4.BS=[this,K.Nt
];K.V7.DU=[this,K.Nt];K.V7.K$=[this,K.Nt];K.V7.BS=[this,K.Nt];K.Y6.K$=[this,K.Nt
];K.Y6.BS=[this,K.Nt];K.V1.DU=[this,K.Nt];K.V1.K$=[this,K.Nt];K.V1.BS=[this,K.Nt
];K.V5.DU=[this,K.Nt];K.V5.K$=[this,K.Nt];K.V5.BS=[this,K.Nt];K.V6.DU=[this,K.Nt
];K.V6.K$=[this,K.Nt];K.V6.BS=[this,K.Nt];K.Aam.Abj([B=A._GetAutoObject(A.Device.
Helper),B.Ud,B.Ue]);K.Dh.BS=[this,K.AhX];K.Bcx=A._GetAutoObject(A.abt.Ard);K.Init.
call(this,aArg);A.hJ++;},_Done:function(){var K=this.K;K.__proto__=null;K.Background.
_Done();K.Abr._Done();K.Aj2._Done();K.AfP._Done();K.Ak._Done();K.Y2._Done();K.Sl.
_Done();K.Y3._Done();K.Y5._Done();K.Y4._Done();K.V7._Done();K.Y6._Done();K.V1._Done(
);K.V5._Done();K.V6._Done();K.Aam._Done();K.Dh._Done();A.hJ--;},_ReInit:function(
){var K=this.K;K.Background._ReInit();K.Abr._ReInit();K.Aj2._ReInit();K.AfP._ReInit(
);K.Ak._ReInit();K.Y2._ReInit();K.Sl._ReInit();K.Y3._ReInit();K.Y5._ReInit();K.Y4.
_ReInit();K.V7._ReInit();K.Y6._ReInit();K.V1._ReInit();K.V5._ReInit();K.V6._ReInit(
);K.Aam._ReInit();K.Dh._ReInit();},_Mark:function(D){var B;if((B=this.Bcx)&&(B._cycle
!=D))B._Mark(B._cycle=D);if((B=this.Background)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Abr)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Aj2)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.AfP)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ak)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Y2)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Sl)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.Y3)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Y5
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Y4)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.V7)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Y6)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.V1)._cycle!=D)B._Mark(B._cycle=D);if((B=this.V5)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.V6)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Aam)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.Dh)._cycle!=D)B._Mark(B._cycle=D);},_variants:function(
){return this;},_className:"DeviceDemonstrator::ApplicationDemonstration"};C.DeviceClass={
AH0:null,At1:null,Atg:null,Init:function(aArg){var K=this.K;var B;A.y_([this,K.BgU
],this.Ao,0);A.za([this,K.Bi8],[B=K.AH0,B.A5X,B.A6_],0);A.za([this,K.Bic],[B=K.AH0
,B.A5r,B.AQC],0);},AqD:function(E){this.UpdateScanState(E);},Avh:function(E){this.
UpdateMeasureState(E);},Avr:function(E){this.UpdateTempValue(E);},Av0:function(){
this.UpdateMeasureState(1);this.UpdateTempValue(0);},Ag0:function(){var B;A._GetAutoObject(
A.Device.Helper).Sh.Av2(this);this.UpdateMeasureState(0);},Aes:function(){this.UpdateScanState(
1);},Am2:function(){this.UpdateScanState(0);},AqE:function(E){this.UpdateScanTransponder(
E.Id,E.TransponderType,E.TransponderProtocol);if(this.ScanState!==1)return;this.
UpdateScanState(2);},Bi8:function(H){var K=this.K;var AkT=A._GetAutoObject(C.LB).
AEv;if(AkT<0)K.At1=null;else{K.At1=A._NewObject(A.Device.Int32FilterCriterion,0);
K.At1.Initialize(2,0,AkT,true);}A.ow([this,K.Bk],this);},Bic:function(H){var K=this.
K;var Bcl=A._GetAutoObject(C.LB).AzQ;if(Bcl<=0)K.Atg=null;else{K.Atg=A._NewObject(
A.Device.Int32FilterCriterion,0);K.Atg.Initialize(1,4,Bcl,false);}A.ow([this,K.Bk
],this);},Bk:function(H){var K=this.K;var Bb=A._GetAutoObject(A.Device.Helper).MX(
);Bb.C0(K.At1);Bb.C0(K.Atg);A._GetAutoObject(C.Ath).Bk(Bb);},BgU:function(H){var
K=this.K;A.ow([this,K.Bk],this);},_Init:function(aArg){var K=this.K;A.abt.DeviceClass.
_Init.call(this,aArg);K.__proto__=C.DeviceClass;this.Pz(4);this.Avn(276034580109999
);K.AH0=A._GetAutoObject(C.LB);K.Init.call(this,aArg);},_Mark:function(D){var B;
A.abt.DeviceClass._Mark.call(this,D);if((B=this.AH0)&&(B._cycle!=D))B._Mark(B._cycle=
D);if((B=this.At1)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Atg)&&(B._cycle
!=D))B._Mark(B._cycle=D);},_variants:function(){return this;},_className:"DeviceDemonstrator::DeviceClass"
};C.Abw={_Init:function(){A.abt.Abw._Init.call(this,0);this.AQ7(false);this.AQ8(
false);},_variants:function(){return this;},_this:null};C.A2_={TransponderId:0,AEv:
0,AzQ:0,Aq9:null,Ari:3950,AvK:true,A6_:function(E){if(this.AEv===E)return;this.AEv=
E;A.aat([this,this.A5X,this.A6_],0);},A5X:function(){return this.AEv;},AQC:function(
E){if(this.AzQ===E)return;this.AzQ=E;A.aat([this,this.A5r,this.AQC],0);},A5r:function(
){return this.AzQ;},Bbr:function(H){this.Azj(this.TransponderId);},M6:function(E
){if(this.TransponderId===E)return;this.TransponderId=E;A.aat([this,this.Ajv,this.
M6],0);},A6$:function(E){if(this.Aq9===E)return;this.Aq9=E;A.aat([this,this.A5Y,
this.A6$],0);},A5Y:function(){return this.Aq9;},Azj:function(L1){var B;var Jf=false;
if((A._GetAutoObject(A.Device.Device).ScanState===1)&&!!L1){A._GetAutoObject(A.Device.
Device).PD.ARi(1);A._GetAutoObject(A.Device.Device).PD.OnSetId(L1);A._GetAutoObject(
A.Device.Device).PD.ARh(2);A._GetAutoObject(A.Device.Device).AqD(2);A.aat([B=A._GetAutoObject(
A.Device.Device),B.AQs,B.AXE],0);Jf=true;}return Jf;},AQ3:function(E){if(this.AvK===
E)return;this.AvK=E;A.aat([this,this.AQp,this.AQ3],0);},A7e:function(E){if(this.
Ari===E)return;this.Ari=E;A.aat([this,this.BhN,this.A7e],0);},Bbc:function(H){var
B;if(this.AvK)A._GetAutoObject(A.Device.Helper).AI8(this);else A._GetAutoObject(
A.Device.Helper).A$q(this.Ari);},Ajv:function(){return this.TransponderId;},AQp:
function(){return this.AvK;},BhN:function(){return this.Ari;},_Init:function(aArg
){this.__proto__=C.A2_;this.Aq9=A.aby.AKv;A.hJ++;},_Done:function(){this.__proto__=
null;A.hJ--;},_ReInit:function(){},_Mark:function(D){var B;if((B=this.I)&&(B._cycle
!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:"DeviceDemonstrator::DemonstrationConfigClass"
};C.LB={_Init:function(){C.A2_._Init.call(this,0);},_variants:function(){return this;
},_this:null};C.Ath={_Init:function(){A.Device.Table._Init.call(this,0);this.OnSetId(
0);},_variants:function(){return this;},_this:null};C.A2$={AgV:A.jm,Delete:function(
){this.ADG(A.aaX(this.AgV,this.AgV.length-1));},E6:function(Ab4){if(!this.AgV.length&&(
Ab4===0x30))return;if(this.AgV.length<6)this.ADG(this.AgV+String.fromCharCode(Ab4
));},ADG:function(E){if(this.AgV===E)return;this.AgV=E;A.aat([this,this.A5V,this.
ADG],0);A._GetAutoObject(C.LB).AQC(A.vQ(this.AgV,-1,10));},A5V:function(){return this.
AgV;},_Init:function(aArg){this.__proto__=C.A2$;A.hJ++;},_Done:function(){this.__proto__=
null;A.hJ--;},_ReInit:function(){},_Mark:function(D){var B;if((B=this.I)&&(B._cycle
!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:"DeviceDemonstrator::DemonstrationSearchHelperClass"
};C.AiP={_Init:function(){C.A2$._Init.call(this,0);},_variants:function(){return this;
},_this:null};C.PE={AH9:function(H){var Ad=A._GetAutoObject(A.Device.Helper).DB(
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
,true,0,Ad-27475200,4,true,1,false,1,0,1,0);},AH$:function(H){var Ad=A._GetAutoObject(
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
1,0,0,0,0,0);this.AE(Ad-86400,276000312343007,3730,3,0,0,0,0,0);},AH8:function(H
){this.AkV(1,We);this.AkV(2,Wf);this.AkV(3,St);},AH_:function(H){this.ZH(2016,216
,11);this.ZH(2017,217,10);this.ZH(2018,218,9);this.ZH(2019,219,8);this.ZH(2020,220
,7);this.ZH(2021,221,6);},_Init:function(aArg){var K=this.K;K.__proto__=C.PE;A.hJ++;
},_Done:function(){var K=this.K;K.__proto__=null;A.hJ--;},_ReInit:function(){},_Mark:
function(D){},_variants:function(){return this;},_className:"DeviceDemonstrator::TableData"
};
C._Init=function(){C.DeviceClass.__proto__=A.abt.DeviceClass;};C._ReInit=function(
){var B;if((B=C.LB._this))B._ReInit();if((B=C.Ath._this))B._ReInit();if((B=C.AiP.
_this))B._ReInit();};C.DE=function(D){var B;if((B=C.Abw._this)&&(B._cycle!=D))B.
_Done(C.Abw._this=null);if((B=C.LB._this)&&(B._cycle!=D))B._Done(C.LB._this=null
);if((B=C.Ath._this)&&(B._cycle!=D))B._Done(C.Ath._this=null);if((B=C.AiP._this)&&(
B._cycle!=D))B._Done(C.AiP._this=null);};return C;})();

/* VitalControl demonstration application, © Urban GmbH & Co.KG 2023 */