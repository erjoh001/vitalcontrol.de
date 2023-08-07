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
var B4=[0,0];var BI=[0,0,1000,740];var EH=[200,5,577,745];var Gv=[270,69,510,389];
var I5=[605,30,975,740];var Iq=[25,25,45,41];var Oe=[547,610,687,750];var Pc=[270
,390];var Nq=[350,390];var Cw=[350,450];var FN=[270,450];var Of=[430,390];var Nr=[
510,390];var Kc=[510,450];var Og=[430,450];var ME=[360,390];var Pd=[420,390];var
RO=[420,450];var Tn=[360,450];var Vi=[335,460];var Vj=[447,460];var JV=[447,500];
var RP=[335,500];var Vk=[350,512];var Vl=[430,512];var Yb=[430,592];var RQ=[350,
592];var Yc=[335,605];var Vm=[447,605];var To=[447,665];var Vn=[335,665];var Qh=[
264,504];var Vo=[344,504];var Ns=[344,601];var Pe=[264,601];var Tp=[436,504];var
Yd=[516,504];var Vp=[516,601];var Ye=[436,601];var Yf=[10,130,210,310];var Vq="1";
var Vr="2";var RR="3";
C.AZl={A$n:null,Background:null,Aam:null,AiH:null,AeH:null,Am:null,X2:null,RI:null
,X3:null,X5:null,X4:null,Vb:null,X6:null,U7:null,U$:null,Va:null,Zm:null,C4:null
,Init:function(aArg){A._GetAutoObject(A.Device.Device).Apa(A._NewObject(A.Device.
Transponder,0));},DriveCursorHitting:function(RW,Bz,E6){var AGn=this.Bb7();if(!!
AGn){var AWT=AGn.M;AWT=A.aaM(AWT,AGn.Bcf(B4));if(!A.vt(AWT,E6))this.Ay7(AGn);}return A.
Core.Root.DriveCursorHitting.call(this,RW,Bz,E6);},Bib:function(H){var K=this.K;
this.Device.UpdateActiveScreen(3);K.AiH.An(false);},MN:function(H){var K=this.K;
var B;var DI=(A.Core.Bd.isPrototypeOf(H)?H:null);var AgB=0;if(DI===K.X4)AgB=27;else
if(DI===K.X3)AgB=26;else if(DI===K.X5)AgB=28;else if(DI===K.U$)AgB=6;else if(DI===
K.Va)AgB=7;else if(DI===K.Vb)AgB=4;else if(DI===K.U7)AgB=5;else if(DI===K.X6)AgB=
1;if(!!DI){if((DI.Down&&(DI.IW>0))&&(DI.IW<400))return;var BrQ=this.A6;this.A8(this.
F_);this.HQ().DriveKeyboardHitting(AgB,0x00,DI.Down);this.A8(BrQ);K.RI.G(A.aaP(K.
RI.M,DI.Hr[0]-((((B=K.RI.M)[2]-B[0])/2)|0)));K.RI.G(A.aaR(K.RI.M,DI.Hr[1]-((((B=
K.RI.M)[3]-B[1])/2)|0)));K.X2.An(true);}},AgH:function(H){var K=this.K;var B;var
I_=(A.Core.B1.isPrototypeOf(H)?H:null);if((String.fromCharCode(I_.D8).toLowerCase(
).charCodeAt(0)||0)===0x73)A._GetAutoObject(C.K6).A_j(this);else if((String.fromCharCode(
I_.D8).toLowerCase().charCodeAt(0)||0)===0x74)A._GetAutoObject(A.Device.Helper).
AG4(this);else if((String.fromCharCode(I_.D8).toLowerCase().charCodeAt(0)||0)===
0x64)this.A8(this.F_);else if((String.fromCharCode(I_.D8).toLowerCase().charCodeAt(
0)||0)===0x63)this.A8(K.AeH);else if(I_.CO===152){if(this.A6===K.AeH)this.A8(this.
F_);else this.A8(K.AeH);}else if(this.A6===this.F_){if(I_.CO===11){this.HQ().DriveKeyboardHitting(
26,0x00,true);this.HQ().DriveKeyboardHitting(26,0x00,false);}else if(I_.CO===12){
this.HQ().DriveKeyboardHitting(27,0x00,true);this.HQ().DriveKeyboardHitting(27,0x00
,false);}else if(I_.CO===13){this.HQ().DriveKeyboardHitting(28,0x00,true);this.HQ(
).DriveKeyboardHitting(28,0x00,false);}}},_Init:function(aArg){var K=this.K;A.abh.
Am._Init.call(K.Background={I:this},0);A.abh.Am._Init.call(K.Aam={I:this},0);A.Core.
Timer._Init.call(K.AiH={I:this},0);A.aby.APG._Init.call(K.AeH={I:this},0);A.abh.
Am._Init.call(K.Am={I:this},0);A.abm.AI8._Init.call(K.X2={I:this},0);A.abh.Am._Init.
call(K.RI={I:this},0);A.Core.Bd._Init.call(K.X3={I:this},0);A.Core.Bd._Init.call(
K.X5={I:this},0);A.Core.Bd._Init.call(K.X4={I:this},0);A.Core.Bd._Init.call(K.Vb={
I:this},0);A.Core.Bd._Init.call(K.X6={I:this},0);A.Core.Bd._Init.call(K.U7={I:this
},0);A.Core.Bd._Init.call(K.U$={I:this},0);A.Core.Bd._Init.call(K.Va={I:this},0);
A.aby.Zm._Init.call(K.Zm={I:this},0);A.Core.B1._Init.call(K.C4={I:this},0);K.__proto__=
C.AZl;var B;this.G(BI);K.Background.G(BI);K.Aam.G(EH);this.F_.G(Gv);K.AiH.P4(2000
);K.AiH.An(true);K.AeH.G(I5);K.Am.G(Iq);K.X2.AiJ=true;K.X2.UU(9);K.X2.IG(1);K.X2.
FK(300);K.X2.BX=0xA0FFFFFF;K.X2.Ci=0x00FFFFFF;K.RI.G(Oe);K.RI.L(0x00FFFFFF);K.X3.
J$(Pc);K.X3.J_(Nq);K.X3.DL(Cw);K.X3.D5(FN);K.X5.J$(Of);K.X5.J_(Nr);K.X5.DL(Kc);K.
X5.D5(Og);K.X4.J$(ME);K.X4.J_(Pd);K.X4.DL(RO);K.X4.D5(Tn);K.Vb.J$(Vi);K.Vb.J_(Vj
);K.Vb.DL(JV);K.Vb.D5(RP);K.X6.J$(Vk);K.X6.J_(Vl);K.X6.DL(Yb);K.X6.D5(RQ);K.U7.J$(
Yc);K.U7.J_(Vm);K.U7.DL(To);K.U7.D5(Vn);K.U$.J$(Qh);K.U$.J_(Vo);K.U$.DL(Ns);K.U$.
D5(Pe);K.Va.J$(Tp);K.Va.J_(Yd);K.Va.DL(Vp);K.Va.D5(Ye);K.Zm.G(Yf);this.J(K.Background
,-1);this.J(K.Aam,-1);this.J(K.AeH,0);this.J(K.Am,0);this.J(K.RI,0);this.J(K.X3,
0);this.J(K.X5,0);this.J(K.X4,0);this.J(K.Vb,0);this.J(K.X6,0);this.J(K.U7,0);this.
J(K.U$,0);this.J(K.Va,0);this.J(K.Zm,0);K.Background.At(A.zW(A.aby.Background));
K.Aam.At(A.zW(A.abz.Aam));K.AiH.Mz=[this,K.Bib];K.Am.At(A.zW(A.aby.ANf));K.X2.Q=[
B=K.RI,B.BdY,B.L];K.RI.At(A.zW(A.abz.AM2));K.X3.KF=[this,K.MN];K.X3.B2=[this,K.MN
];K.X5.KF=[this,K.MN];K.X5.B2=[this,K.MN];K.X4.KF=[this,K.MN];K.X4.B2=[this,K.MN
];K.Vb.Ea=[this,K.MN];K.Vb.KF=[this,K.MN];K.Vb.B2=[this,K.MN];K.X6.KF=[this,K.MN
];K.X6.B2=[this,K.MN];K.U7.Ea=[this,K.MN];K.U7.KF=[this,K.MN];K.U7.B2=[this,K.MN
];K.U$.Ea=[this,K.MN];K.U$.KF=[this,K.MN];K.U$.B2=[this,K.MN];K.Va.Ea=[this,K.MN
];K.Va.KF=[this,K.MN];K.Va.B2=[this,K.MN];K.Zm.Ac2([B=A._GetAutoObject(A.Device.
Helper),B.Tq,B.Tr]);K.C4.B2=[this,K.AgH];K.A$n=A._GetAutoObject(A.abt.ApH);K.Init.
call(this,aArg);A.hJ++;},_Done:function(){var K=this.K;K.__proto__=null;K.Background.
_Done();K.Aam._Done();K.AiH._Done();K.AeH._Done();K.Am._Done();K.X2._Done();K.RI.
_Done();K.X3._Done();K.X5._Done();K.X4._Done();K.Vb._Done();K.X6._Done();K.U7._Done(
);K.U$._Done();K.Va._Done();K.Zm._Done();K.C4._Done();A.hJ--;},_ReInit:function(
){var K=this.K;K.Background._ReInit();K.Aam._ReInit();K.AiH._ReInit();K.AeH._ReInit(
);K.Am._ReInit();K.X2._ReInit();K.RI._ReInit();K.X3._ReInit();K.X5._ReInit();K.X4.
_ReInit();K.Vb._ReInit();K.X6._ReInit();K.U7._ReInit();K.U$._ReInit();K.Va._ReInit(
);K.Zm._ReInit();K.C4._ReInit();},_Mark:function(D){var B;if((B=this.A$n)&&(B._cycle
!=D))B._Mark(B._cycle=D);if((B=this.Background)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Aam)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AiH)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.AeH)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Am)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.X2)._cycle!=D)B._Mark(B._cycle=D);if((B=this.RI)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.X3)._cycle!=D)B._Mark(B._cycle=D);if((B=this.X5
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.X4)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Vb)._cycle!=D)B._Mark(B._cycle=D);if((B=this.X6)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.U7)._cycle!=D)B._Mark(B._cycle=D);if((B=this.U$)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Va)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Zm)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.C4)._cycle!=D)B._Mark(B._cycle=D);},_variants:function(
){return this;},_className:"DeviceDemonstrator::ApplicationDemonstration"};C.DeviceClass={
AFY:null,Asp:null,ArK:null,Init:function(aArg){var K=this.K;var B;A.y_([this,K.BdG
],this.Aq,0);A.za([this,K.BfW],[B=K.AFY,B.A2V,B.A3_],0);A.za([this,K.Be3],[B=K.AFY
,B.A2o,B.AOi],0);},Ao$:function(E){this.UpdateScanState(E);},AtH:function(E){this.
UpdateMeasureState(E);},AtT:function(E){this.UpdateTempValue(E);},Aup:function(){
this.UpdateMeasureState(1);this.UpdateTempValue(0);},AfP:function(){var B;A._GetAutoObject(
A.Device.Helper).RD.Aur(this);this.UpdateMeasureState(0);},Adn:function(){this.UpdateScanState(
1);},AlJ:function(){this.UpdateScanState(0);},Apa:function(E){this.UpdateScanTransponder(
E.Id,E.TransponderType,E.TransponderProtocol);if(this.ScanState!==1)return;this.
UpdateScanState(2);},BfW:function(H){var K=this.K;var AjB=A._GetAutoObject(C.K6).
ACE;if(AjB<0)K.Asp=null;else{K.Asp=A._NewObject(A.Device.Int32FilterCriterion,0);
K.Asp.Initialize(2,0,AjB,true);}A.ow([this,K.Bo],this);},Be3:function(H){var K=this.
K;var A$c=A._GetAutoObject(C.K6).Ayd;if(A$c<=0)K.ArK=null;else{K.ArK=A._NewObject(
A.Device.Int32FilterCriterion,0);K.ArK.Initialize(1,4,A$c,false);}A.ow([this,K.Bo
],this);},Bo:function(H){var K=this.K;var Bb=A._GetAutoObject(A.Device.Helper).LP(
);Bb.CQ(K.Asp);Bb.CQ(K.ArK);A._GetAutoObject(C.ArL).Bo(Bb);},BdG:function(H){var
K=this.K;A.ow([this,K.Bo],this);},_Init:function(aArg){var K=this.K;A.abt.DeviceClass.
_Init.call(this,aArg);K.__proto__=C.DeviceClass;this.P3(4);this.AtN(276034580109999
);K.AFY=A._GetAutoObject(C.K6);K.Init.call(this,aArg);},_Mark:function(D){var B;
A.abt.DeviceClass._Mark.call(this,D);if((B=this.AFY)&&(B._cycle!=D))B._Mark(B._cycle=
D);if((B=this.Asp)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.ArK)&&(B._cycle
!=D))B._Mark(B._cycle=D);},_variants:function(){return this;},_className:"DeviceDemonstrator::DeviceClass"
};C.Aar={_Init:function(){A.abt.Aar._Init.call(this,0);this.AOM(false);this.AON(
false);},_variants:function(){return this;},_this:null};C.A0b={TransponderId:0,ACE:
0,Ayd:0,ApB:null,ApM:3950,At9:true,A3_:function(E){if(this.ACE===E)return;this.ACE=
E;A.aat([this,this.A2V,this.A3_],0);},A2V:function(){return this.ACE;},AOi:function(
E){if(this.Ayd===E)return;this.Ayd=E;A.aat([this,this.A2o,this.AOi],0);},A2o:function(
){return this.Ayd;},A_j:function(H){this.AxH(this.TransponderId);},Nf:function(E
){if(this.TransponderId===E)return;this.TransponderId=E;A.aat([this,this.Aid,this.
Nf],0);},A3$:function(E){if(this.ApB===E)return;this.ApB=E;A.aat([this,this.A2W,
this.A3$],0);},A2W:function(){return this.ApB;},AxH:function(Nx){var B;var Jc=false;
if((A._GetAutoObject(A.Device.Device).ScanState===1)&&!!Nx){A._GetAutoObject(A.Device.
Device).O7.AOZ(1);A._GetAutoObject(A.Device.Device).O7.OnSetId(Nx);A._GetAutoObject(
A.Device.Device).O7.AOY(2);A._GetAutoObject(A.Device.Device).Ao$(2);A.aat([B=A._GetAutoObject(
A.Device.Device),B.AN$,B.AUX],0);Jc=true;}return Jc;},AOI:function(E){if(this.At9===
E)return;this.At9=E;A.aat([this,this.AN8,this.AOI],0);},A4e:function(E){if(this.
ApM===E)return;this.ApM=E;A.aat([this,this.BeC,this.A4e],0);},A98:function(H){var
B;if(this.At9)A._GetAutoObject(A.Device.Helper).AG4(this);else A._GetAutoObject(
A.Device.Helper).A8k(this.ApM);},Aid:function(){return this.TransponderId;},AN8:
function(){return this.At9;},BeC:function(){return this.ApM;},_Init:function(aArg
){this.__proto__=C.A0b;this.ApB=A.aby.AIn;A.hJ++;},_Done:function(){this.__proto__=
null;A.hJ--;},_ReInit:function(){},_Mark:function(D){var B;if((B=this.I)&&(B._cycle
!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:"DeviceDemonstrator::DemonstrationConfigClass"
};C.K6={_Init:function(){C.A0b._Init.call(this,0);},_variants:function(){return this;
},_this:null};C.ArL={_Init:function(){A.Device.Table._Init.call(this,0);this.OnSetId(
0);},_variants:function(){return this;},_this:null};C.A0c={AfJ:A.jm,Delete:function(
){this.ABQ(A.aaX(this.AfJ,this.AfJ.length-1));},FC:function(AaW){if(!this.AfJ.length&&(
AaW===0x30))return;if(this.AfJ.length<6)this.ABQ(this.AfJ+String.fromCharCode(AaW
));},ABQ:function(E){if(this.AfJ===E)return;this.AfJ=E;A.aat([this,this.A2T,this.
ABQ],0);A._GetAutoObject(C.K6).AOi(A.vQ(this.AfJ,-1,10));},A2T:function(){return this.
AfJ;},_Init:function(aArg){this.__proto__=C.A0c;A.hJ++;},_Done:function(){this.__proto__=
null;A.hJ--;},_ReInit:function(){},_Mark:function(D){var B;if((B=this.I)&&(B._cycle
!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:"DeviceDemonstrator::DemonstrationSearchHelperClass"
};C.Aht={_Init:function(){C.A0c._Init.call(this,0);},_variants:function(){return this;
},_this:null};C.O8={AF6:function(H){var Ad=A._GetAutoObject(A.Device.Helper).DR(
);this.Bf(276000312341001,2,1,Ad-1382400,0,1,false,false,false,true,40800,0,0,false
,0,false,1,1,1,0);this.Bf(276000312341002,2,1,Ad-1296000,0,1,false,false,false,true
,38300,0,0,false,0,false,1,1,1,0);this.Bf(276000312341003,2,1,Ad-1209600,0,1,false
,false,false,true,37600,0,0,false,0,false,1,1,1,0);this.Bf(276000312341004,2,1,Ad-
1123200,0,1,false,false,false,true,40600,0,0,false,0,false,1,1,1,0);this.Bf(276000312341005
,2,1,Ad-9504000,0,1,false,false,false,true,36900,0,0,false,0,false,1,1,1,0);this.
Bf(276000312341006,2,1,Ad-950400,0,1,false,false,false,true,38000,0,0,false,0,false
,1,1,1,0);this.Bf(276000312341007,2,1,Ad-864000,0,1,false,false,false,true,39200
,0,0,false,0,false,1,1,1,276000312343007);this.Bf(276000312341008,2,1,Ad-777600,
0,1,false,false,false,true,36500,0,0,false,0,false,1,1,1,276000312343409);this.Bf(
276000312341009,2,1,Ad-691200,0,1,false,false,false,true,40900,0,0,false,0,false
,1,1,1,276000312343308);this.Bf(276000312341010,2,1,Ad-604800,0,1,false,false,false
,true,40900,0,0,false,0,false,1,1,1,276000312343420);this.Bf(276000312341011,2,1
,Ad-518400,0,1,false,false,false,true,39200,0,0,false,0,false,1,1,1,276000312343065
);this.Bf(276000312341012,2,1,Ad-432000,0,1,false,false,false,true,38100,0,0,false
,0,false,1,1,1,276000312343232);this.Bf(276000312341013,2,1,Ad-345600,0,1,false,
false,false,true,37700,0,0,false,0,true,1,1,1,276000312343204);this.Bf(276000312341014
,2,1,Ad-259200,0,1,false,false,false,true,37200,0,0,false,0,true,1,1,1,276000312343376
);this.Bf(276000312341015,2,1,Ad-172800,0,1,false,false,false,true,37000,0,0,false
,0,true,1,1,1,276000312343044);this.Bf(276000312342001,3,1,Ad-7084800,0,0,false,
false,false,true,39500,0,0,false,0,false,1,0,2,0);this.Bf(276000312342002,3,1,Ad-
5788800,0,0,false,false,false,true,38800,0,0,false,0,false,1,0,2,0);this.Bf(276000312342003
,3,1,Ad-7084800,0,0,false,false,false,true,39600,0,0,false,0,false,1,0,2,0);this.
Bf(276000312342004,3,1,Ad-6652800,0,0,false,false,false,true,37400,0,0,false,0,false
,1,0,2,0);this.Bf(276000312342005,3,1,Ad-7084800,0,0,false,false,false,true,39700
,0,0,false,0,false,1,0,2,0);this.Bf(276000312342006,3,1,Ad-6998400,0,0,false,false
,false,true,40900,0,0,false,0,false,1,0,2,0);this.Bf(276000312342007,3,1,Ad-6739200
,0,0,false,false,false,true,38100,0,0,false,0,false,1,0,2,0);this.Bf(276000312342008
,3,1,Ad-7430400,0,0,false,false,false,true,37200,0,0,false,0,false,1,0,2,0);this.
Bf(276000312342009,3,1,Ad-6652800,0,0,false,false,false,true,37000,0,0,false,0,false
,1,0,2,0);this.Bf(276000312342010,3,1,Ad-7776000,0,0,false,false,false,true,38600
,0,0,false,0,false,1,0,2,0);this.Bf(276000312342011,3,1,Ad-5961600,0,0,false,false
,false,true,37900,0,0,false,0,false,1,0,2,0);this.Bf(276000312342012,3,1,Ad-6393600
,0,0,false,false,false,true,36300,0,0,false,0,false,1,0,2,0);this.Bf(276000312342013
,3,1,Ad-7344000,0,0,false,false,false,true,36100,0,0,false,0,false,1,0,2,0);this.
Bf(276000312342014,3,1,Ad-5529600,0,0,false,false,false,true,37700,0,0,false,0,false
,1,0,2,0);this.Bf(276000312342015,3,1,Ad-6307200,0,0,false,false,false,true,39800
,0,0,false,0,false,1,0,2,0);this.Bf(276000312342016,3,1,Ad-6048000,0,0,false,false
,false,true,40300,0,0,false,0,false,1,0,2,0);this.Bf(276000312342017,3,1,Ad-6134400
,0,0,false,false,false,true,38400,0,0,false,0,false,1,0,2,0);this.Bf(276000312342018
,3,1,Ad-6652800,0,0,false,false,false,true,36300,0,0,false,0,false,1,0,2,0);this.
Bf(276000312342019,3,1,Ad-8467200,0,0,false,false,false,true,38700,0,0,false,0,false
,1,0,2,0);this.Bf(276000312342020,3,1,Ad-6998400,0,0,false,false,false,true,37300
,0,0,false,0,false,1,0,2,0);this.Bf(276000312342021,3,1,Ad-6652800,0,0,false,false
,false,true,38500,0,0,false,0,false,1,0,2,0);this.Bf(276000312342022,3,1,Ad-5788800
,0,0,false,false,false,true,37800,0,0,false,0,false,1,0,2,0);this.Bf(276000312342023
,3,1,Ad-6652800,0,0,false,false,false,true,37300,0,0,false,0,false,1,0,2,0);this.
Bf(276000312342024,3,1,Ad-6739200,0,0,false,false,false,true,37500,0,0,false,0,false
,1,0,2,0);this.Bf(276000312342025,3,1,Ad-7171200,0,0,false,false,false,true,36300
,0,0,false,0,false,1,0,2,0);this.Bf(276000312342026,3,1,Ad-7171200,0,0,false,false
,false,true,37800,0,0,false,0,false,1,0,2,0);this.Bf(276000312342027,3,1,Ad-7689600
,0,0,false,false,false,true,37900,0,0,false,0,false,1,0,2,0);this.Bf(276000312342028
,3,1,Ad-8121600,0,0,false,false,false,true,39800,0,0,false,0,false,1,0,2,0);this.
Bf(276000312342029,3,1,Ad-7603200,0,0,false,false,false,true,36500,0,0,false,0,false
,1,0,2,0);this.Bf(276000312342030,3,1,Ad-6393600,0,0,false,false,false,true,38900
,0,0,false,0,false,1,0,2,0);this.Bf(276000312342031,3,1,Ad-6652800,0,0,false,false
,false,true,36700,0,0,false,0,false,1,0,2,0);this.Bf(276000312342032,3,1,Ad-6739200
,0,0,false,false,false,true,37400,0,0,false,0,false,1,0,2,0);this.Bf(276000312342033
,3,1,Ad-6393600,0,0,false,false,false,true,41000,0,0,false,0,false,1,0,2,0);this.
Bf(276000312342034,3,1,Ad-7084800,0,0,false,false,false,true,40500,0,0,false,0,false
,1,0,2,0);this.Bf(276000312342035,3,1,Ad-7171200,0,0,false,false,false,true,38200
,0,0,false,0,false,1,0,2,0);this.Bf(276000312342036,3,1,Ad-6480000,0,0,false,false
,false,true,40000,0,0,false,0,false,1,0,2,0);this.Bf(276000312342037,3,1,Ad-6652800
,0,0,false,false,false,true,40500,0,0,false,0,false,1,0,2,0);this.Bf(276000312342038
,3,1,Ad-7084800,0,0,false,false,false,true,40000,0,0,false,0,false,1,0,2,0);this.
Bf(276000312342039,3,1,Ad-6307200,0,0,false,false,false,true,38900,0,0,false,0,false
,1,0,2,0);this.Bf(276000312342040,3,1,Ad-7430400,0,0,false,false,false,true,37300
,0,0,false,0,false,1,0,2,0);this.Bf(276000312342041,3,1,Ad-6652800,0,0,false,false
,false,true,37000,0,0,false,0,false,1,0,2,0);this.Bf(276000312342042,3,1,Ad-6825600
,0,0,false,false,false,true,40800,0,0,false,0,false,1,0,2,0);this.Bf(276000312342043
,3,1,Ad-7430400,0,0,false,false,false,true,40000,0,0,false,0,false,1,0,2,0);this.
Bf(276000312342044,3,1,Ad-7516800,0,0,false,false,false,true,40700,0,0,false,0,false
,1,0,2,0);this.Bf(276000312342045,3,1,Ad-8121600,0,0,false,false,false,true,40800
,0,0,false,0,false,1,0,2,0);this.Bf(276000312342046,3,1,Ad-8553600,0,0,false,false
,false,true,39300,0,0,false,0,false,1,0,2,0);this.Bf(276000312342047,3,1,Ad-7171200
,0,0,false,false,false,true,39300,0,0,false,0,false,1,0,2,0);this.Bf(276000312342048
,3,1,Ad-6566400,0,0,false,false,false,true,40900,0,0,false,0,false,1,0,2,0);this.
Bf(276000312342049,3,1,Ad-7171200,0,0,false,false,false,true,40100,0,0,false,0,false
,1,0,2,0);this.Bf(276000312342050,3,1,Ad-6998400,0,0,false,false,false,true,39900
,0,0,false,0,false,1,0,2,0);this.Bf(276000312342051,3,1,Ad-6739200,0,0,false,false
,false,true,38200,0,0,false,0,false,1,0,2,0);this.Bf(276000312342052,3,1,Ad-7603200
,0,0,false,false,false,true,36400,0,0,false,0,false,1,0,2,0);this.Bf(276000312342053
,3,1,Ad-7689600,0,0,false,false,false,true,40800,0,0,false,0,false,1,0,2,0);this.
Bf(276000312342054,3,1,Ad-6480000,0,0,false,false,false,true,36100,0,0,false,0,false
,1,0,2,0);this.Bf(276000312342055,3,1,Ad-7948800,0,0,false,false,false,true,38000
,0,0,false,0,false,1,0,2,0);this.Bf(276000312342056,3,1,Ad-8121600,0,0,false,false
,false,true,37800,0,0,false,0,false,1,0,2,0);this.Bf(276000312342057,3,1,Ad-6566400
,0,0,false,false,false,true,38800,0,0,false,0,false,1,0,2,0);this.Bf(276000312342058
,3,1,Ad-7862400,0,0,false,false,false,true,36600,0,0,false,0,false,1,0,2,0);this.
Bf(276000312342059,3,1,Ad-7344000,0,0,false,false,false,true,39700,0,0,false,0,false
,1,0,2,0);this.Bf(276000312342060,3,1,Ad-6998400,0,0,false,false,false,true,36600
,0,0,false,0,false,1,0,2,0);this.Bf(276000312342061,3,1,Ad-5788800,0,0,false,false
,false,true,36600,0,0,false,0,false,1,0,2,0);this.Bf(276000312342062,3,1,Ad-7257600
,0,0,false,false,false,true,36300,0,0,false,0,false,1,0,2,0);this.Bf(276000312342063
,3,1,Ad-5875200,0,0,false,false,false,true,40800,0,0,false,0,false,1,0,2,0);this.
Bf(276000312342064,3,1,Ad-6134400,0,0,false,false,false,true,37500,0,0,false,0,false
,1,0,2,0);this.Bf(276000312342065,3,1,Ad-5788800,0,0,false,false,false,true,36000
,0,0,false,0,false,1,0,2,0);this.Bf(276000312342066,3,1,Ad-7862400,0,0,false,false
,false,true,38400,0,0,false,0,false,1,0,2,0);this.Bf(276000312342067,3,1,Ad-5270400
,0,0,false,false,false,true,36900,0,0,false,0,false,1,0,2,0);this.Bf(276000312342068
,3,1,Ad-7776000,0,0,false,false,false,true,38300,0,0,false,0,false,1,0,2,0);this.
Bf(276000312342069,3,1,Ad-7171200,0,0,false,false,false,true,40400,0,0,false,0,false
,1,0,2,0);this.Bf(276000312342070,3,1,Ad-6048000,0,0,false,false,false,true,40100
,0,0,false,0,false,1,0,2,0);this.Bf(276000312343007,1,1,Ad-186192000,0,1,false,false
,false,true,0,Ad-864000,3,false,1,false,1,0,1,0);this.Bf(276000312343044,1,1,Ad-
118108800,0,1,false,false,false,true,0,Ad-172800,1,false,1,false,1,0,1,0);this.Bf(
276000312343065,1,1,Ad-152150400,0,1,false,false,false,true,0,Ad-518400,2,false,
1,false,1,0,1,0);this.Bf(276000312343117,1,1,Ad-252806400,0,1,false,false,false,
true,0,Ad-86400,5,false,1,false,1,0,1,0);this.Bf(276000312343204,1,1,Ad-219369600
,0,1,false,false,false,true,0,Ad-345600,4,false,1,false,1,0,1,0);this.Bf(276000312343232
,1,1,Ad-152064000,0,1,false,false,false,true,0,Ad-432000,2,false,1,false,1,0,1,0
);this.Bf(276000312343308,1,1,Ad-118627200,0,1,false,false,false,true,0,Ad-691200
,1,false,1,false,1,0,1,0);this.Bf(276000312343376,1,1,Ad-118195200,0,1,false,false
,false,true,0,Ad-259200,1,false,1,false,1,0,1,0);this.Bf(276000312343409,1,1,Ad-
152409600,0,1,false,false,false,true,0,Ad-777600,2,false,1,false,1,0,1,0);this.Bf(
276000312343420,1,1,Ad-253324800,0,1,false,false,false,true,0,Ad-604800,5,false,
1,false,1,0,1,0);this.Bf(276000312343505,4,1,Ad-145152000,0,1,false,false,false,
true,0,Ad-27216000,1,true,1,false,1,0,1,0);this.Bf(276000312343535,4,1,Ad-215222400
,0,1,false,false,false,true,0,Ad-29894400,3,true,1,false,1,0,1,0);this.Bf(276000312343540
,4,1,Ad-179107200,0,1,false,false,false,true,0,Ad-27475200,2,true,1,false,1,0,1,
0);this.Bf(276000312343558,4,1,Ad-248659200,0,1,false,false,false,true,0,Ad-29635200
,4,true,1,false,1,0,1,0);this.Bf(276000312343587,4,1,Ad-179020800,0,1,false,false
,false,true,0,Ad-27388800,2,true,1,false,1,0,1,0);this.Bf(276000312343597,4,1,Ad-
146188800,0,1,false,false,false,true,0,Ad-28252800,1,true,1,false,1,0,1,0);this.
Bf(276000312343619,4,1,Ad-181353600,0,1,false,false,false,true,0,Ad-29721600,2,true
,1,false,1,0,1,0);this.Bf(276000312343627,4,1,Ad-213235200,0,1,false,false,false
,true,0,Ad-27907200,3,true,1,false,1,0,1,0);this.Bf(276000312343721,4,1,Ad-282182400
,0,1,false,false,false,true,0,Ad-29462400,5,true,1,false,1,0,1,0);this.Bf(276000312343892
,4,1,Ad-179107200,0,1,false,false,false,true,0,Ad-27475200,2,true,1,false,1,0,1,
0);this.Bf(276000312343899,4,1,Ad-147398400,0,1,false,false,false,true,0,Ad-29462400
,1,true,1,false,1,0,1,0);this.Bf(276000312343913,4,1,Ad-178416000,0,1,false,false
,false,true,0,Ad-26784000,2,true,1,false,1,0,1,0);this.Bf(276000312343915,4,1,Ad-
179712000,0,1,false,false,false,true,0,Ad-28080000,2,true,1,false,1,0,1,0);this.
Bf(276000312343940,4,1,Ad-212025600,0,1,false,false,false,true,0,Ad-26697600,3,true
,1,false,1,0,1,0);this.Bf(276000312343978,4,1,Ad-246499200,0,1,false,false,false
,true,0,Ad-27475200,4,true,1,false,1,0,1,0);},AF8:function(H){var Ad=A._GetAutoObject(
A.Device.Helper).DR();this.AB(Ad-3542400,276000312342001,0,0,5,5,3,5,84100);this.
AB(Ad-3542400,276000312342002,0,0,5,5,3,5,77500);this.AB(Ad-3542400,276000312342003
,0,0,5,5,3,5,79700);this.AB(Ad-3542400,276000312342004,0,0,5,5,3,5,78900);this.AB(
Ad-3542400,276000312342005,0,0,5,5,3,5,87200);this.AB(Ad-3542400,276000312342006
,0,0,5,5,3,5,82400);this.AB(Ad-3542400,276000312342007,0,0,5,5,3,5,81900);this.AB(
Ad-3542400,276000312342008,0,0,5,5,3,5,80500);this.AB(Ad-3542400,276000312342009
,0,0,5,5,3,5,82800);this.AB(Ad-3542400,276000312342010,0,0,5,5,3,5,82000);this.AB(
Ad-3542400,276000312342011,0,0,5,5,3,5,78400);this.AB(Ad-3542400,276000312342012
,0,0,5,5,3,5,80500);this.AB(Ad-3542400,276000312342013,0,0,5,5,3,5,82600);this.AB(
Ad-3542400,276000312342014,0,0,5,5,3,5,0);this.AB(Ad-3542400,276000312342015,0,0
,5,5,3,5,80100);this.AB(Ad-3542400,276000312342016,0,0,5,5,3,5,81100);this.AB(Ad-
3542400,276000312342017,0,0,5,5,3,5,77000);this.AB(Ad-3542400,276000312342018,0,
0,5,5,3,5,80300);this.AB(Ad-3542400,276000312342019,0,0,5,5,3,5,76500);this.AB(Ad-
3542400,276000312342020,0,0,5,5,3,5,80500);this.AB(Ad-3542400,276000312342021,0,
0,5,5,3,5,81500);this.AB(Ad-3542400,276000312342022,0,0,5,5,3,5,80600);this.AB(Ad-
3542400,276000312342023,0,0,5,5,3,5,74400);this.AB(Ad-3542400,276000312342024,0,
0,5,5,3,5,80000);this.AB(Ad-3542400,276000312342025,0,0,5,5,3,5,74500);this.AB(Ad-
3542400,276000312342026,0,0,5,5,3,5,84800);this.AB(Ad-3542400,276000312342027,0,
0,5,5,3,5,88200);this.AB(Ad-3542400,276000312342028,0,0,5,5,3,5,79000);this.AB(Ad-
3542400,276000312342029,0,0,5,5,3,5,82000);this.AB(Ad-3542400,276000312342030,0,
0,5,5,3,5,79500);this.AB(Ad-3542400,276000312342031,0,0,5,5,3,5,82600);this.AB(Ad-
3542400,276000312342032,0,0,5,5,3,5,86800);this.AB(Ad-3542400,276000312342033,0,
0,5,5,3,5,77000);this.AB(Ad-3542400,276000312342034,0,0,5,5,3,5,76000);this.AB(Ad-
3542400,276000312342035,0,0,5,5,3,5,78100);this.AB(Ad-3542400,276000312342036,0,
0,5,5,3,5,0);this.AB(Ad-3542400,276000312342037,0,0,5,5,3,5,84700);this.AB(Ad-3542400
,276000312342038,0,0,5,5,3,5,85400);this.AB(Ad-3542400,276000312342039,0,0,5,5,3
,5,76500);this.AB(Ad-3542400,276000312342040,0,0,5,5,3,5,81500);this.AB(Ad-3542400
,276000312342041,0,0,5,5,3,5,81100);this.AB(Ad-3542400,276000312342042,0,0,5,5,3
,5,67500);this.AB(Ad-3542400,276000312342043,0,0,5,5,3,5,80000);this.AB(Ad-3542400
,276000312342044,0,0,5,5,3,5,70500);this.AB(Ad-3542400,276000312342045,0,0,5,5,3
,5,74000);this.AB(Ad-3542400,276000312342046,0,0,5,5,3,5,66000);this.AB(Ad-3542400
,276000312342047,0,0,5,5,2,5,69600);this.AB(Ad-3542400,276000312342048,0,0,5,5,3
,5,78500);this.AB(Ad-3542400,276000312342049,0,0,5,5,3,5,79000);this.AB(Ad-3542400
,276000312342050,0,0,5,5,3,5,70100);this.AB(Ad-3542400,276000312342051,0,0,5,5,3
,5,74500);this.AB(Ad-3542400,276000312342052,0,0,5,5,3,5,80000);this.AB(Ad-3542400
,276000312342053,0,0,5,5,3,5,63400);this.AB(Ad-3542400,276000312342054,0,0,5,5,3
,5,69200);this.AB(Ad-3542400,276000312342055,0,0,5,5,3,5,78400);this.AB(Ad-3542400
,276000312342056,0,0,5,5,3,5,69800);this.AB(Ad-3542400,276000312342057,0,0,5,5,3
,5,72700);this.AB(Ad-3542400,276000312342058,0,0,0,0,0,0,64200);this.AB(Ad-3542400
,276000312342059,0,0,5,5,3,5,72000);this.AB(Ad-3542400,276000312342060,0,0,5,5,3
,5,61100);this.AB(Ad,276000312342001,0,0,0,0,0,0,120500);this.AB(Ad,276000312342002
,0,0,0,0,0,0,111500);this.AB(Ad,276000312342003,0,0,0,0,0,0,110600);this.AB(Ad,276000312342004
,0,0,0,0,0,0,106700);this.AB(Ad,276000312342005,0,0,0,0,0,0,117200);this.AB(Ad,276000312342006
,0,0,0,0,0,0,116400);this.AB(Ad,276000312342007,0,0,0,0,0,0,118900);this.AB(Ad,276000312342008
,0,0,0,0,0,0,107000);this.AB(Ad,276000312342009,0,0,0,0,0,0,122100);this.AB(Ad,276000312342010
,0,0,0,0,0,0,94100);this.AB(Ad,276000312342011,0,0,0,0,0,0,114800);this.AB(Ad,276000312342012
,0,0,0,0,0,0,109600);this.AB(Ad,276000312342013,0,0,0,0,0,0,111000);this.AB(Ad,276000312342015
,0,0,0,0,0,0,114700);this.AB(Ad,276000312342016,0,0,0,0,0,0,100500);this.AB(Ad,276000312342017
,0,0,0,0,0,0,116300);this.AB(Ad,276000312342018,0,0,0,0,0,0,110500);this.AB(Ad,276000312342019
,0,0,0,0,0,0,123000);this.AB(Ad,276000312342020,0,0,0,0,0,0,118600);this.AB(Ad,276000312342021
,0,0,0,0,0,0,120300);this.AB(Ad,276000312342022,0,0,0,0,0,0,109000);this.AB(Ad,276000312342023
,0,0,0,0,0,0,104000);this.AB(Ad,276000312342024,0,0,0,0,0,0,112600);this.AB(Ad,276000312342025
,0,0,0,0,0,0,106000);this.AB(Ad,276000312342026,0,0,0,0,0,0,122000);this.AB(Ad,276000312342027
,0,0,0,0,0,0,122000);this.AB(Ad,276000312342028,0,0,0,0,0,0,122300);this.AB(Ad,276000312342029
,0,0,0,0,0,0,117100);this.AB(Ad,276000312342030,0,0,0,0,0,0,100100);this.AB(Ad,276000312342031
,0,0,0,0,0,0,126100);this.AB(Ad,276000312342032,0,0,0,0,0,0,116800);this.AB(Ad,276000312342033
,0,0,0,0,0,0,103200);this.AB(Ad,276000312342034,0,0,0,0,0,0,109000);this.AB(Ad,276000312342035
,0,0,0,0,0,0,128000);this.AB(Ad,276000312342037,0,0,0,0,0,0,115600);this.AB(Ad,276000312342038
,0,0,0,0,0,0,120600);this.AB(Ad,276000312342039,0,0,0,0,0,0,104400);this.AB(Ad,276000312342040
,0,0,0,0,0,0,102300);this.AB(Ad,276000312342041,0,0,0,0,0,0,114500);this.AB(Ad,276000312342042
,0,0,0,0,0,0,99000);this.AB(Ad,276000312342043,0,0,0,0,0,0,104300);this.AB(Ad,276000312342044
,0,0,0,0,0,0,108600);this.AB(Ad,276000312342045,0,0,0,0,0,0,117200);this.AB(Ad,276000312342046
,0,0,0,0,0,0,105000);this.AB(Ad,276000312342047,0,0,0,0,0,0,108400);this.AB(Ad,276000312342048
,0,0,0,0,0,0,117700);this.AB(Ad,276000312342049,0,0,0,0,0,0,115000);this.AB(Ad,276000312342050
,0,0,0,0,0,0,110800);this.AB(Ad,276000312342051,0,0,0,0,0,0,91300);this.AB(Ad,276000312342052
,0,0,0,0,0,0,103600);this.AB(Ad,276000312342053,0,0,0,0,0,0,104700);this.AB(Ad,276000312342054
,0,0,0,0,0,0,101900);this.AB(Ad,276000312342055,0,0,0,0,0,0,120000);this.AB(Ad,276000312342056
,0,0,0,0,0,0,114200);this.AB(Ad,276000312342057,0,0,0,0,0,0,91800);this.AB(Ad,276000312342058
,0,0,0,0,0,0,93100);this.AB(Ad,276000312342059,0,0,0,0,0,0,102300);this.AB(Ad,276000312342060
,0,0,0,0,0,0,100900);this.AB(Ad-9158400,276000312341005,3910,2,0,0,0,0,0);this.AB(
Ad-9072000,276000312341005,3970,2,0,0,0,0,0);this.AB(Ad-8985600,276000312341005,
3900,2,0,0,0,0,0);this.AB(Ad-8899200,276000312341005,3830,3,0,0,0,0,0);this.AB(Ad-
8812800,276000312341005,3810,3,0,0,0,0,0);this.AB(Ad-6307200,276000312341005,4050
,1,0,0,0,0,0);this.AB(Ad-6220800,276000312341005,3900,2,0,0,0,0,0);this.AB(Ad-6134400
,276000312341005,3810,3,0,0,0,0,0);this.AB(Ad-6048000,276000312341005,3780,3,0,0
,0,0,0);this.AB(Ad-5961600,276000312341005,3820,3,0,0,0,0,0);this.AB(Ad-432000,276000312341005
,4000,2,0,0,0,0,0);this.AB(Ad-86400,276000312341005,4020,2,0,0,0,0,0);this.AB(Ad
,276000312341005,3950,2,0,0,0,0,0);this.AB(Ad-86400,276000312343117,4000,2,0,0,0
,0,0);this.AB(Ad-172800,276000312343044,4030,2,0,0,0,0,0);this.AB(Ad-86400,276000312343044
,4100,1,0,0,0,0,0);this.AB(Ad-259200,276000312343376,4050,1,0,0,0,0,0);this.AB(Ad-
172800,276000312343376,3900,2,0,0,0,0,0);this.AB(Ad-86400,276000312343376,3780,3
,0,0,0,0,0);this.AB(Ad-345600,276000312343204,3910,2,0,0,0,0,0);this.AB(Ad-259200
,276000312343204,3980,2,0,0,0,0,0);this.AB(Ad-172800,276000312343204,4010,2,0,0,
0,0,0);this.AB(Ad-86400,276000312343204,3980,2,0,0,0,0,0);this.AB(Ad-432000,276000312343232
,4110,1,0,0,0,0,0);this.AB(Ad-345600,276000312343232,3910,2,0,0,0,0,0);this.AB(Ad-
259200,276000312343232,3940,2,0,0,0,0,0);this.AB(Ad-172800,276000312343232,3870,
3,0,0,0,0,0);this.AB(Ad-86400,276000312343232,3920,2,0,0,0,0,0);this.AB(Ad-518400
,276000312343065,3810,3,0,0,0,0,0);this.AB(Ad-432000,276000312343065,3870,3,0,0,
0,0,0);this.AB(Ad-345600,276000312343065,4030,2,0,0,0,0,0);this.AB(Ad-259200,276000312343065
,3890,3,0,0,0,0,0);this.AB(Ad-172800,276000312343065,3720,3,0,0,0,0,0);this.AB(Ad-
86400,276000312343065,3940,2,0,0,0,0,0);this.AB(Ad-604800,276000312343420,3830,3
,0,0,0,0,0);this.AB(Ad-518400,276000312343420,3940,2,0,0,0,0,0);this.AB(Ad-432000
,276000312343420,3980,2,0,0,0,0,0);this.AB(Ad-345600,276000312343420,3900,2,0,0,
0,0,0);this.AB(Ad-259200,276000312343420,3650,3,0,0,0,0,0);this.AB(Ad-172800,276000312343420
,4110,1,0,0,0,0,0);this.AB(Ad-86400,276000312343420,3860,3,0,0,0,0,0);this.AB(Ad-
691200,276000312343308,3710,3,0,0,0,0,0);this.AB(Ad-604800,276000312343308,3690,
3,0,0,0,0,0);this.AB(Ad-518400,276000312343308,3810,3,0,0,0,0,0);this.AB(Ad-432000
,276000312343308,3770,3,0,0,0,0,0);this.AB(Ad-345600,276000312343308,3670,3,0,0,
0,0,0);this.AB(Ad-259200,276000312343308,3970,2,0,0,0,0,0);this.AB(Ad-172800,276000312343308
,3680,3,0,0,0,0,0);this.AB(Ad-86400,276000312343308,3710,3,0,0,0,0,0);this.AB(Ad-
777600,276000312343409,4090,1,0,0,0,0,0);this.AB(Ad-691200,276000312343409,3690,
3,0,0,0,0,0);this.AB(Ad-604800,276000312343409,4100,1,0,0,0,0,0);this.AB(Ad-518400
,276000312343409,3840,3,0,0,0,0,0);this.AB(Ad-432000,276000312343409,3660,3,0,0,
0,0,0);this.AB(Ad-345600,276000312343409,3900,2,0,0,0,0,0);this.AB(Ad-259200,276000312343409
,3780,3,0,0,0,0,0);this.AB(Ad-172800,276000312343409,3780,3,0,0,0,0,0);this.AB(Ad-
86400,276000312343409,3870,3,0,0,0,0,0);this.AB(Ad-864000,276000312343007,3850,3
,0,0,0,0,0);this.AB(Ad-777600,276000312343007,3680,3,0,0,0,0,0);this.AB(Ad-691200
,276000312343007,4020,2,0,0,0,0,0);this.AB(Ad-604800,276000312343007,3830,3,0,0,
0,0,0);this.AB(Ad-518400,276000312343007,3670,3,0,0,0,0,0);this.AB(Ad-432000,276000312343007
,3910,2,0,0,0,0,0);this.AB(Ad-345600,276000312343007,4090,1,0,0,0,0,0);this.AB(Ad-
259200,276000312343007,3680,3,0,0,0,0,0);this.AB(Ad-172800,276000312343007,4130,
1,0,0,0,0,0);this.AB(Ad-86400,276000312343007,3730,3,0,0,0,0,0);},AF5:function(H
){this.AjD(1,Vq);this.AjD(2,Vr);this.AjD(3,RR);},AF7:function(H){this.YG(2016,216
,11);this.YG(2017,217,10);this.YG(2018,218,9);this.YG(2019,219,8);this.YG(2020,220
,7);this.YG(2021,221,6);},_Init:function(aArg){var K=this.K;K.__proto__=C.O8;A.hJ++;
},_Done:function(){var K=this.K;K.__proto__=null;A.hJ--;},_ReInit:function(){},_Mark:
function(D){},_variants:function(){return this;},_className:"DeviceDemonstrator::TableData"
};
C._Init=function(){C.DeviceClass.__proto__=A.abt.DeviceClass;};C._ReInit=function(
){var B;if((B=C.K6._this))B._ReInit();if((B=C.ArL._this))B._ReInit();if((B=C.Aht.
_this))B._ReInit();};C.Dq=function(D){var B;if((B=C.Aar._this)&&(B._cycle!=D))B.
_Done(C.Aar._this=null);if((B=C.K6._this)&&(B._cycle!=D))B._Done(C.K6._this=null
);if((B=C.ArL._this)&&(B._cycle!=D))B._Done(C.ArL._this=null);if((B=C.Aht._this)&&(
B._cycle!=D))B._Done(C.Aht._this=null);};return C;})();

/* VitalControl demonstration application, © Urban GmbH & Co.KG 2023 */