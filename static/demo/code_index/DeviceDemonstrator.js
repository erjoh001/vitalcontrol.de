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
var B3=[0,0];var BI=[0,0,1000,740];var EG=[200,5,577,745];var Gr=[270,69,510,389];
var I4=[605,30,975,740];var Ip=[25,25,45,41];var Oc=[547,610,687,750];var Pb=[270
,390];var Nm=[350,390];var Cv=[350,450];var FK=[270,450];var Od=[430,390];var Nn=[
510,390];var Ka=[510,450];var Oe=[430,450];var MB=[360,390];var Pc=[420,390];var
RL=[420,450];var Ti=[360,450];var Ve=[335,460];var Vf=[447,460];var JT=[447,500];
var RM=[335,500];var Vg=[350,512];var Vh=[430,512];var X7=[430,592];var RN=[350,
592];var X8=[335,605];var Vi=[447,605];var Tj=[447,665];var Vj=[335,665];var Qg=[
264,504];var Vk=[344,504];var Np=[344,601];var Pd=[264,601];var Tk=[436,504];var
X9=[516,504];var Vl=[516,601];var X_=[436,601];var X$=[10,130,210,310];var Vm="1";
var Vn="2";var RO="3";
C.AZc={A_9:null,Background:null,Aaf:null,AiA:null,AeA:null,Am:null,XW:null,RG:null
,XX:null,XZ:null,XY:null,U9:null,X0:null,U3:null,U7:null,U8:null,Zg:null,C2:null
,Init:function(aArg){A._GetAutoObject(A.Device.Device).Ao9(A._NewObject(A.Device.
Transponder,0));},DriveCursorHitting:function(RS,By,E6){var AGh=this.BbR();if(!!
AGh){var AWK=AGh.M;AWK=A.aaM(AWK,AGh.Bb1(B3));if(!A.vt(AWK,E6))this.Ay2(AGh);}return A.
Core.Root.DriveCursorHitting.call(this,RS,By,E6);},BhW:function(H){var K=this.K;
this.Device.UpdateActiveScreen(3);K.AiA.An(false);},MK:function(H){var K=this.K;
var B;var DF=(A.Core.Bd.isPrototypeOf(H)?H:null);var Agt=0;if(DF===K.XY)Agt=27;else
if(DF===K.XX)Agt=26;else if(DF===K.XZ)Agt=28;else if(DF===K.U7)Agt=6;else if(DF===
K.U8)Agt=7;else if(DF===K.U9)Agt=4;else if(DF===K.U3)Agt=5;else if(DF===K.X0)Agt=
1;if(!!DF){if((DF.Down&&(DF.IV>0))&&(DF.IV<400))return;var Brt=this.A6;this.A8(this.
FZ);this.HO().DriveKeyboardHitting(Agt,0x00,DF.Down);this.A8(Brt);K.RG.G(A.aaP(K.
RG.M,DF.Ho[0]-((((B=K.RG.M)[2]-B[0])/2)|0)));K.RG.G(A.aaR(K.RG.M,DF.Ho[1]-((((B=
K.RG.M)[3]-B[1])/2)|0)));K.XW.An(true);}},Agz:function(H){var K=this.K;var B;var
I8=(A.Core.B0.isPrototypeOf(H)?H:null);if((String.fromCharCode(I8.D4).toLowerCase(
).charCodeAt(0)||0)===0x73)A._GetAutoObject(C.K6).A95(this);else if((String.fromCharCode(
I8.D4).toLowerCase().charCodeAt(0)||0)===0x74)A._GetAutoObject(A.Device.Helper).
AGY(this);else if((String.fromCharCode(I8.D4).toLowerCase().charCodeAt(0)||0)===
0x64)this.A8(this.FZ);else if((String.fromCharCode(I8.D4).toLowerCase().charCodeAt(
0)||0)===0x63)this.A8(K.AeA);else if(I8.CM===152){if(this.A6===K.AeA)this.A8(this.
FZ);else this.A8(K.AeA);}else if(this.A6===this.FZ){if(I8.CM===11){this.HO().DriveKeyboardHitting(
26,0x00,true);this.HO().DriveKeyboardHitting(26,0x00,false);}else if(I8.CM===12){
this.HO().DriveKeyboardHitting(27,0x00,true);this.HO().DriveKeyboardHitting(27,0x00
,false);}else if(I8.CM===13){this.HO().DriveKeyboardHitting(28,0x00,true);this.HO(
).DriveKeyboardHitting(28,0x00,false);}}},_Init:function(aArg){var K=this.K;A.abh.
Am._Init.call(K.Background={I:this},0);A.abh.Am._Init.call(K.Aaf={I:this},0);A.Core.
Timer._Init.call(K.AiA={I:this},0);A.aby.APy._Init.call(K.AeA={I:this},0);A.abh.
Am._Init.call(K.Am={I:this},0);A.abm.AI2._Init.call(K.XW={I:this},0);A.abh.Am._Init.
call(K.RG={I:this},0);A.Core.Bd._Init.call(K.XX={I:this},0);A.Core.Bd._Init.call(
K.XZ={I:this},0);A.Core.Bd._Init.call(K.XY={I:this},0);A.Core.Bd._Init.call(K.U9={
I:this},0);A.Core.Bd._Init.call(K.X0={I:this},0);A.Core.Bd._Init.call(K.U3={I:this
},0);A.Core.Bd._Init.call(K.U7={I:this},0);A.Core.Bd._Init.call(K.U8={I:this},0);
A.aby.Zg._Init.call(K.Zg={I:this},0);A.Core.B0._Init.call(K.C2={I:this},0);K.__proto__=
C.AZc;var B;this.G(BI);K.Background.G(BI);K.Aaf.G(EG);this.FZ.G(Gr);K.AiA.P3(2000
);K.AiA.An(true);K.AeA.G(I4);K.Am.G(Ip);K.XW.AiC=true;K.XW.UP(9);K.XW.IF(1);K.XW.
FI(300);K.XW.BW=0xA0FFFFFF;K.XW.Ch=0x00FFFFFF;K.RG.G(Oc);K.RG.L(0x00FFFFFF);K.XX.
J9(Pb);K.XX.J8(Nm);K.XX.D$(Cv);K.XX.Eg(FK);K.XZ.J9(Od);K.XZ.J8(Nn);K.XZ.D$(Ka);K.
XZ.Eg(Oe);K.XY.J9(MB);K.XY.J8(Pc);K.XY.D$(RL);K.XY.Eg(Ti);K.U9.J9(Ve);K.U9.J8(Vf
);K.U9.D$(JT);K.U9.Eg(RM);K.X0.J9(Vg);K.X0.J8(Vh);K.X0.D$(X7);K.X0.Eg(RN);K.U3.J9(
X8);K.U3.J8(Vi);K.U3.D$(Tj);K.U3.Eg(Vj);K.U7.J9(Qg);K.U7.J8(Vk);K.U7.D$(Np);K.U7.
Eg(Pd);K.U8.J9(Tk);K.U8.J8(X9);K.U8.D$(Vl);K.U8.Eg(X_);K.Zg.G(X$);this.J(K.Background
,-1);this.J(K.Aaf,-1);this.J(K.AeA,0);this.J(K.Am,0);this.J(K.RG,0);this.J(K.XX,
0);this.J(K.XZ,0);this.J(K.XY,0);this.J(K.U9,0);this.J(K.X0,0);this.J(K.U3,0);this.
J(K.U7,0);this.J(K.U8,0);this.J(K.Zg,0);K.Background.Ar(A.zW(A.aby.Background));
K.Aaf.Ar(A.zW(A.abz.Aaf));K.AiA.Mw=[this,K.BhW];K.Am.Ar(A.zW(A.aby.AM_));K.XW.Q=[
B=K.RG,B.BdI,B.L];K.RG.Ar(A.zW(A.abz.AMV));K.XX.KD=[this,K.MK];K.XX.B1=[this,K.MK
];K.XZ.KD=[this,K.MK];K.XZ.B1=[this,K.MK];K.XY.KD=[this,K.MK];K.XY.B1=[this,K.MK
];K.U9.D_=[this,K.MK];K.U9.KD=[this,K.MK];K.U9.B1=[this,K.MK];K.X0.KD=[this,K.MK
];K.X0.B1=[this,K.MK];K.U3.D_=[this,K.MK];K.U3.KD=[this,K.MK];K.U3.B1=[this,K.MK
];K.U7.D_=[this,K.MK];K.U7.KD=[this,K.MK];K.U7.B1=[this,K.MK];K.U8.D_=[this,K.MK
];K.U8.KD=[this,K.MK];K.U8.B1=[this,K.MK];K.Zg.AcV([B=A._GetAutoObject(A.Device.
Helper),B.Tl,B.Tm]);K.C2.B1=[this,K.Agz];K.A_9=A._GetAutoObject(A.abt.ApE);K.Init.
call(this,aArg);A.hJ++;},_Done:function(){var K=this.K;K.__proto__=null;K.Background.
_Done();K.Aaf._Done();K.AiA._Done();K.AeA._Done();K.Am._Done();K.XW._Done();K.RG.
_Done();K.XX._Done();K.XZ._Done();K.XY._Done();K.U9._Done();K.X0._Done();K.U3._Done(
);K.U7._Done();K.U8._Done();K.Zg._Done();K.C2._Done();A.hJ--;},_ReInit:function(
){var K=this.K;K.Background._ReInit();K.Aaf._ReInit();K.AiA._ReInit();K.AeA._ReInit(
);K.Am._ReInit();K.XW._ReInit();K.RG._ReInit();K.XX._ReInit();K.XZ._ReInit();K.XY.
_ReInit();K.U9._ReInit();K.X0._ReInit();K.U3._ReInit();K.U7._ReInit();K.U8._ReInit(
);K.Zg._ReInit();K.C2._ReInit();},_Mark:function(D){var B;if((B=this.A_9)&&(B._cycle
!=D))B._Mark(B._cycle=D);if((B=this.Background)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Aaf)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AiA)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.AeA)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Am)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.XW)._cycle!=D)B._Mark(B._cycle=D);if((B=this.RG)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.XX)._cycle!=D)B._Mark(B._cycle=D);if((B=this.XZ
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.XY)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.U9)._cycle!=D)B._Mark(B._cycle=D);if((B=this.X0)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.U3)._cycle!=D)B._Mark(B._cycle=D);if((B=this.U7)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.U8)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Zg)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.C2)._cycle!=D)B._Mark(B._cycle=D);},_variants:function(
){return this;},_className:"DeviceDemonstrator::ApplicationDemonstration"};C.DeviceClass={
AFS:null,Ask:null,ArF:null,Init:function(aArg){var K=this.K;var B;A.y_([this,K.Bdq
],this.Aq,0);A.za([this,K.BfG],[B=K.AFS,B.A2K,B.A3Y],0);A.za([this,K.BeN],[B=K.AFS
,B.A2d,B.AOb],0);},Ao8:function(E){this.UpdateScanState(E);},AtC:function(E){this.
UpdateMeasureState(E);},AtO:function(E){this.UpdateTempValue(E);},Auk:function(){
this.UpdateMeasureState(1);this.UpdateTempValue(0);},AfJ:function(){var B;A._GetAutoObject(
A.Device.Helper).RB.Aum(this);this.UpdateMeasureState(0);},Adg:function(){this.UpdateScanState(
1);},AlD:function(){this.UpdateScanState(0);},Ao9:function(E){this.UpdateScanTransponder(
E.Id,E.TransponderType,E.TransponderProtocol);if(this.ScanState!==1)return;this.
UpdateScanState(2);},BfG:function(H){var K=this.K;var Ajv=A._GetAutoObject(C.K6).
ACw;if(Ajv<0)K.Ask=null;else{K.Ask=A._NewObject(A.Device.Int32FilterCriterion,0);
K.Ask.Initialize(2,0,Ajv,true);}A.ow([this,K.Bo],this);},BeN:function(H){var K=this.
K;var A_Y=A._GetAutoObject(C.K6).Ax_;if(A_Y<=0)K.ArF=null;else{K.ArF=A._NewObject(
A.Device.Int32FilterCriterion,0);K.ArF.Initialize(1,4,A_Y,false);}A.ow([this,K.Bo
],this);},Bo:function(H){var K=this.K;var Bb=A._GetAutoObject(A.Device.Helper).LO(
);Bb.CO(K.Ask);Bb.CO(K.ArF);A._GetAutoObject(C.ArG).Bo(Bb);},Bdq:function(H){var
K=this.K;A.ow([this,K.Bo],this);},_Init:function(aArg){var K=this.K;A.abt.DeviceClass.
_Init.call(this,aArg);K.__proto__=C.DeviceClass;this.P2(4);this.AtI(276034580109999
);K.AFS=A._GetAutoObject(C.K6);K.Init.call(this,aArg);},_Mark:function(D){var B;
A.abt.DeviceClass._Mark.call(this,D);if((B=this.AFS)&&(B._cycle!=D))B._Mark(B._cycle=
D);if((B=this.Ask)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.ArF)&&(B._cycle
!=D))B._Mark(B._cycle=D);},_variants:function(){return this;},_className:"DeviceDemonstrator::DeviceClass"
};C.Aaj={_Init:function(){A.abt.Aaj._Init.call(this,0);this.AOE(false);this.AOF(
false);},_variants:function(){return this;},_this:null};C.AZ4={TransponderId:0,ACw:
0,Ax_:0,Apy:null,ApJ:3950,At4:true,A3Y:function(E){if(this.ACw===E)return;this.ACw=
E;A.aat([this,this.A2K,this.A3Y],0);},A2K:function(){return this.ACw;},AOb:function(
E){if(this.Ax_===E)return;this.Ax_=E;A.aat([this,this.A2d,this.AOb],0);},A2d:function(
){return this.Ax_;},A95:function(H){this.AxC(this.TransponderId);},Nc:function(E
){if(this.TransponderId===E)return;this.TransponderId=E;A.aat([this,this.Ah7,this.
Nc],0);},A3Z:function(E){if(this.Apy===E)return;this.Apy=E;A.aat([this,this.A2L,
this.A3Z],0);},A2L:function(){return this.Apy;},AxC:function(Nu){var B;var Ja=false;
if((A._GetAutoObject(A.Device.Device).ScanState===1)&&!!Nu){A._GetAutoObject(A.Device.
Device).O6.AOR(1);A._GetAutoObject(A.Device.Device).O6.OnSetId(Nu);A._GetAutoObject(
A.Device.Device).O6.AOQ(2);A._GetAutoObject(A.Device.Device).Ao8(2);A.aat([B=A._GetAutoObject(
A.Device.Device),B.AN4,B.AUO],0);Ja=true;}return Ja;},AOA:function(E){if(this.At4===
E)return;this.At4=E;A.aat([this,this.AN1,this.AOA],0);},A34:function(E){if(this.
ApJ===E)return;this.ApJ=E;A.aat([this,this.Bem,this.A34],0);},A9S:function(H){var
B;if(this.At4)A._GetAutoObject(A.Device.Helper).AGY(this);else A._GetAutoObject(
A.Device.Helper).A76(this.ApJ);},Ah7:function(){return this.TransponderId;},AN1:
function(){return this.At4;},Bem:function(){return this.ApJ;},_Init:function(aArg
){this.__proto__=C.AZ4;this.Apy=A.aby.AIh;A.hJ++;},_Done:function(){this.__proto__=
null;A.hJ--;},_ReInit:function(){},_Mark:function(D){var B;if((B=this.I)&&(B._cycle
!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:"DeviceDemonstrator::DemonstrationConfigClass"
};C.K6={_Init:function(){C.AZ4._Init.call(this,0);},_variants:function(){return this;
},_this:null};C.ArG={_Init:function(){A.Device.Table._Init.call(this,0);this.OnSetId(
0);},_variants:function(){return this;},_this:null};C.AZ5={AfD:A.jm,Delete:function(
){this.ABJ(A.aaX(this.AfD,this.AfD.length-1));},FA:function(AaO){if(!this.AfD.length&&(
AaO===0x30))return;if(this.AfD.length<6)this.ABJ(this.AfD+String.fromCharCode(AaO
));},ABJ:function(E){if(this.AfD===E)return;this.AfD=E;A.aat([this,this.A2I,this.
ABJ],0);A._GetAutoObject(C.K6).AOb(A.vQ(this.AfD,-1,10));},A2I:function(){return this.
AfD;},_Init:function(aArg){this.__proto__=C.AZ5;A.hJ++;},_Done:function(){this.__proto__=
null;A.hJ--;},_ReInit:function(){},_Mark:function(D){var B;if((B=this.I)&&(B._cycle
!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:"DeviceDemonstrator::DemonstrationSearchHelperClass"
};C.Ahl={_Init:function(){C.AZ5._Init.call(this,0);},_variants:function(){return this;
},_this:null};C.O7={AF0:function(H){var Ad=A._GetAutoObject(A.Device.Helper).DN(
);this.Be(276000312341001,2,1,Ad-1382400,0,1,false,false,false,true,40800,0,0,false
,0,false,1,1,1,0);this.Be(276000312341002,2,1,Ad-1296000,0,1,false,false,false,true
,38300,0,0,false,0,false,1,1,1,0);this.Be(276000312341003,2,1,Ad-1209600,0,1,false
,false,false,true,37600,0,0,false,0,false,1,1,1,0);this.Be(276000312341004,2,1,Ad-
1123200,0,1,false,false,false,true,40600,0,0,false,0,false,1,1,1,0);this.Be(276000312341005
,2,1,Ad-9504000,0,1,false,false,false,true,36900,0,0,false,0,false,1,1,1,0);this.
Be(276000312341006,2,1,Ad-950400,0,1,false,false,false,true,38000,0,0,false,0,false
,1,1,1,0);this.Be(276000312341007,2,1,Ad-864000,0,1,false,false,false,true,39200
,0,0,false,0,false,1,1,1,276000312343007);this.Be(276000312341008,2,1,Ad-777600,
0,1,false,false,false,true,36500,0,0,false,0,false,1,1,1,276000312343409);this.Be(
276000312341009,2,1,Ad-691200,0,1,false,false,false,true,40900,0,0,false,0,false
,1,1,1,276000312343308);this.Be(276000312341010,2,1,Ad-604800,0,1,false,false,false
,true,40900,0,0,false,0,false,1,1,1,276000312343420);this.Be(276000312341011,2,1
,Ad-518400,0,1,false,false,false,true,39200,0,0,false,0,false,1,1,1,276000312343065
);this.Be(276000312341012,2,1,Ad-432000,0,1,false,false,false,true,38100,0,0,false
,0,false,1,1,1,276000312343232);this.Be(276000312341013,2,1,Ad-345600,0,1,false,
false,false,true,37700,0,0,false,0,true,1,1,1,276000312343204);this.Be(276000312341014
,2,1,Ad-259200,0,1,false,false,false,true,37200,0,0,false,0,true,1,1,1,276000312343376
);this.Be(276000312341015,2,1,Ad-172800,0,1,false,false,false,true,37000,0,0,false
,0,true,1,1,1,276000312343044);this.Be(276000312342001,3,1,Ad-7084800,0,0,false,
false,false,true,39500,0,0,false,0,false,1,0,2,0);this.Be(276000312342002,3,1,Ad-
5788800,0,0,false,false,false,true,38800,0,0,false,0,false,1,0,2,0);this.Be(276000312342003
,3,1,Ad-7084800,0,0,false,false,false,true,39600,0,0,false,0,false,1,0,2,0);this.
Be(276000312342004,3,1,Ad-6652800,0,0,false,false,false,true,37400,0,0,false,0,false
,1,0,2,0);this.Be(276000312342005,3,1,Ad-7084800,0,0,false,false,false,true,39700
,0,0,false,0,false,1,0,2,0);this.Be(276000312342006,3,1,Ad-6998400,0,0,false,false
,false,true,40900,0,0,false,0,false,1,0,2,0);this.Be(276000312342007,3,1,Ad-6739200
,0,0,false,false,false,true,38100,0,0,false,0,false,1,0,2,0);this.Be(276000312342008
,3,1,Ad-7430400,0,0,false,false,false,true,37200,0,0,false,0,false,1,0,2,0);this.
Be(276000312342009,3,1,Ad-6652800,0,0,false,false,false,true,37000,0,0,false,0,false
,1,0,2,0);this.Be(276000312342010,3,1,Ad-7776000,0,0,false,false,false,true,38600
,0,0,false,0,false,1,0,2,0);this.Be(276000312342011,3,1,Ad-5961600,0,0,false,false
,false,true,37900,0,0,false,0,false,1,0,2,0);this.Be(276000312342012,3,1,Ad-6393600
,0,0,false,false,false,true,36300,0,0,false,0,false,1,0,2,0);this.Be(276000312342013
,3,1,Ad-7344000,0,0,false,false,false,true,36100,0,0,false,0,false,1,0,2,0);this.
Be(276000312342014,3,1,Ad-5529600,0,0,false,false,false,true,37700,0,0,false,0,false
,1,0,2,0);this.Be(276000312342015,3,1,Ad-6307200,0,0,false,false,false,true,39800
,0,0,false,0,false,1,0,2,0);this.Be(276000312342016,3,1,Ad-6048000,0,0,false,false
,false,true,40300,0,0,false,0,false,1,0,2,0);this.Be(276000312342017,3,1,Ad-6134400
,0,0,false,false,false,true,38400,0,0,false,0,false,1,0,2,0);this.Be(276000312342018
,3,1,Ad-6652800,0,0,false,false,false,true,36300,0,0,false,0,false,1,0,2,0);this.
Be(276000312342019,3,1,Ad-8467200,0,0,false,false,false,true,38700,0,0,false,0,false
,1,0,2,0);this.Be(276000312342020,3,1,Ad-6998400,0,0,false,false,false,true,37300
,0,0,false,0,false,1,0,2,0);this.Be(276000312342021,3,1,Ad-6652800,0,0,false,false
,false,true,38500,0,0,false,0,false,1,0,2,0);this.Be(276000312342022,3,1,Ad-5788800
,0,0,false,false,false,true,37800,0,0,false,0,false,1,0,2,0);this.Be(276000312342023
,3,1,Ad-6652800,0,0,false,false,false,true,37300,0,0,false,0,false,1,0,2,0);this.
Be(276000312342024,3,1,Ad-6739200,0,0,false,false,false,true,37500,0,0,false,0,false
,1,0,2,0);this.Be(276000312342025,3,1,Ad-7171200,0,0,false,false,false,true,36300
,0,0,false,0,false,1,0,2,0);this.Be(276000312342026,3,1,Ad-7171200,0,0,false,false
,false,true,37800,0,0,false,0,false,1,0,2,0);this.Be(276000312342027,3,1,Ad-7689600
,0,0,false,false,false,true,37900,0,0,false,0,false,1,0,2,0);this.Be(276000312342028
,3,1,Ad-8121600,0,0,false,false,false,true,39800,0,0,false,0,false,1,0,2,0);this.
Be(276000312342029,3,1,Ad-7603200,0,0,false,false,false,true,36500,0,0,false,0,false
,1,0,2,0);this.Be(276000312342030,3,1,Ad-6393600,0,0,false,false,false,true,38900
,0,0,false,0,false,1,0,2,0);this.Be(276000312342031,3,1,Ad-6652800,0,0,false,false
,false,true,36700,0,0,false,0,false,1,0,2,0);this.Be(276000312342032,3,1,Ad-6739200
,0,0,false,false,false,true,37400,0,0,false,0,false,1,0,2,0);this.Be(276000312342033
,3,1,Ad-6393600,0,0,false,false,false,true,41000,0,0,false,0,false,1,0,2,0);this.
Be(276000312342034,3,1,Ad-7084800,0,0,false,false,false,true,40500,0,0,false,0,false
,1,0,2,0);this.Be(276000312342035,3,1,Ad-7171200,0,0,false,false,false,true,38200
,0,0,false,0,false,1,0,2,0);this.Be(276000312342036,3,1,Ad-6480000,0,0,false,false
,false,true,40000,0,0,false,0,false,1,0,2,0);this.Be(276000312342037,3,1,Ad-6652800
,0,0,false,false,false,true,40500,0,0,false,0,false,1,0,2,0);this.Be(276000312342038
,3,1,Ad-7084800,0,0,false,false,false,true,40000,0,0,false,0,false,1,0,2,0);this.
Be(276000312342039,3,1,Ad-6307200,0,0,false,false,false,true,38900,0,0,false,0,false
,1,0,2,0);this.Be(276000312342040,3,1,Ad-7430400,0,0,false,false,false,true,37300
,0,0,false,0,false,1,0,2,0);this.Be(276000312342041,3,1,Ad-6652800,0,0,false,false
,false,true,37000,0,0,false,0,false,1,0,2,0);this.Be(276000312342042,3,1,Ad-6825600
,0,0,false,false,false,true,40800,0,0,false,0,false,1,0,2,0);this.Be(276000312342043
,3,1,Ad-7430400,0,0,false,false,false,true,40000,0,0,false,0,false,1,0,2,0);this.
Be(276000312342044,3,1,Ad-7516800,0,0,false,false,false,true,40700,0,0,false,0,false
,1,0,2,0);this.Be(276000312342045,3,1,Ad-8121600,0,0,false,false,false,true,40800
,0,0,false,0,false,1,0,2,0);this.Be(276000312342046,3,1,Ad-8553600,0,0,false,false
,false,true,39300,0,0,false,0,false,1,0,2,0);this.Be(276000312342047,3,1,Ad-7171200
,0,0,false,false,false,true,39300,0,0,false,0,false,1,0,2,0);this.Be(276000312342048
,3,1,Ad-6566400,0,0,false,false,false,true,40900,0,0,false,0,false,1,0,2,0);this.
Be(276000312342049,3,1,Ad-7171200,0,0,false,false,false,true,40100,0,0,false,0,false
,1,0,2,0);this.Be(276000312342050,3,1,Ad-6998400,0,0,false,false,false,true,39900
,0,0,false,0,false,1,0,2,0);this.Be(276000312342051,3,1,Ad-6739200,0,0,false,false
,false,true,38200,0,0,false,0,false,1,0,2,0);this.Be(276000312342052,3,1,Ad-7603200
,0,0,false,false,false,true,36400,0,0,false,0,false,1,0,2,0);this.Be(276000312342053
,3,1,Ad-7689600,0,0,false,false,false,true,40800,0,0,false,0,false,1,0,2,0);this.
Be(276000312342054,3,1,Ad-6480000,0,0,false,false,false,true,36100,0,0,false,0,false
,1,0,2,0);this.Be(276000312342055,3,1,Ad-7948800,0,0,false,false,false,true,38000
,0,0,false,0,false,1,0,2,0);this.Be(276000312342056,3,1,Ad-8121600,0,0,false,false
,false,true,37800,0,0,false,0,false,1,0,2,0);this.Be(276000312342057,3,1,Ad-6566400
,0,0,false,false,false,true,38800,0,0,false,0,false,1,0,2,0);this.Be(276000312342058
,3,1,Ad-7862400,0,0,false,false,false,true,36600,0,0,false,0,false,1,0,2,0);this.
Be(276000312342059,3,1,Ad-7344000,0,0,false,false,false,true,39700,0,0,false,0,false
,1,0,2,0);this.Be(276000312342060,3,1,Ad-6998400,0,0,false,false,false,true,36600
,0,0,false,0,false,1,0,2,0);this.Be(276000312342061,3,1,Ad-5788800,0,0,false,false
,false,true,36600,0,0,false,0,false,1,0,2,0);this.Be(276000312342062,3,1,Ad-7257600
,0,0,false,false,false,true,36300,0,0,false,0,false,1,0,2,0);this.Be(276000312342063
,3,1,Ad-5875200,0,0,false,false,false,true,40800,0,0,false,0,false,1,0,2,0);this.
Be(276000312342064,3,1,Ad-6134400,0,0,false,false,false,true,37500,0,0,false,0,false
,1,0,2,0);this.Be(276000312342065,3,1,Ad-5788800,0,0,false,false,false,true,36000
,0,0,false,0,false,1,0,2,0);this.Be(276000312342066,3,1,Ad-7862400,0,0,false,false
,false,true,38400,0,0,false,0,false,1,0,2,0);this.Be(276000312342067,3,1,Ad-5270400
,0,0,false,false,false,true,36900,0,0,false,0,false,1,0,2,0);this.Be(276000312342068
,3,1,Ad-7776000,0,0,false,false,false,true,38300,0,0,false,0,false,1,0,2,0);this.
Be(276000312342069,3,1,Ad-7171200,0,0,false,false,false,true,40400,0,0,false,0,false
,1,0,2,0);this.Be(276000312342070,3,1,Ad-6048000,0,0,false,false,false,true,40100
,0,0,false,0,false,1,0,2,0);this.Be(276000312343007,1,1,Ad-186192000,0,1,false,false
,false,true,0,Ad-864000,3,false,1,false,1,0,1,0);this.Be(276000312343044,1,1,Ad-
118108800,0,1,false,false,false,true,0,Ad-172800,1,false,1,false,1,0,1,0);this.Be(
276000312343065,1,1,Ad-152150400,0,1,false,false,false,true,0,Ad-518400,2,false,
1,false,1,0,1,0);this.Be(276000312343117,1,1,Ad-252806400,0,1,false,false,false,
true,0,Ad-86400,5,false,1,false,1,0,1,0);this.Be(276000312343204,1,1,Ad-219369600
,0,1,false,false,false,true,0,Ad-345600,4,false,1,false,1,0,1,0);this.Be(276000312343232
,1,1,Ad-152064000,0,1,false,false,false,true,0,Ad-432000,2,false,1,false,1,0,1,0
);this.Be(276000312343308,1,1,Ad-118627200,0,1,false,false,false,true,0,Ad-691200
,1,false,1,false,1,0,1,0);this.Be(276000312343376,1,1,Ad-118195200,0,1,false,false
,false,true,0,Ad-259200,1,false,1,false,1,0,1,0);this.Be(276000312343409,1,1,Ad-
152409600,0,1,false,false,false,true,0,Ad-777600,2,false,1,false,1,0,1,0);this.Be(
276000312343420,1,1,Ad-253324800,0,1,false,false,false,true,0,Ad-604800,5,false,
1,false,1,0,1,0);this.Be(276000312343505,4,1,Ad-145152000,0,1,false,false,false,
true,0,Ad-27216000,1,true,1,false,1,0,1,0);this.Be(276000312343535,4,1,Ad-215222400
,0,1,false,false,false,true,0,Ad-29894400,3,true,1,false,1,0,1,0);this.Be(276000312343540
,4,1,Ad-179107200,0,1,false,false,false,true,0,Ad-27475200,2,true,1,false,1,0,1,
0);this.Be(276000312343558,4,1,Ad-248659200,0,1,false,false,false,true,0,Ad-29635200
,4,true,1,false,1,0,1,0);this.Be(276000312343587,4,1,Ad-179020800,0,1,false,false
,false,true,0,Ad-27388800,2,true,1,false,1,0,1,0);this.Be(276000312343597,4,1,Ad-
146188800,0,1,false,false,false,true,0,Ad-28252800,1,true,1,false,1,0,1,0);this.
Be(276000312343619,4,1,Ad-181353600,0,1,false,false,false,true,0,Ad-29721600,2,true
,1,false,1,0,1,0);this.Be(276000312343627,4,1,Ad-213235200,0,1,false,false,false
,true,0,Ad-27907200,3,true,1,false,1,0,1,0);this.Be(276000312343721,4,1,Ad-282182400
,0,1,false,false,false,true,0,Ad-29462400,5,true,1,false,1,0,1,0);this.Be(276000312343892
,4,1,Ad-179107200,0,1,false,false,false,true,0,Ad-27475200,2,true,1,false,1,0,1,
0);this.Be(276000312343899,4,1,Ad-147398400,0,1,false,false,false,true,0,Ad-29462400
,1,true,1,false,1,0,1,0);this.Be(276000312343913,4,1,Ad-178416000,0,1,false,false
,false,true,0,Ad-26784000,2,true,1,false,1,0,1,0);this.Be(276000312343915,4,1,Ad-
179712000,0,1,false,false,false,true,0,Ad-28080000,2,true,1,false,1,0,1,0);this.
Be(276000312343940,4,1,Ad-212025600,0,1,false,false,false,true,0,Ad-26697600,3,true
,1,false,1,0,1,0);this.Be(276000312343978,4,1,Ad-246499200,0,1,false,false,false
,true,0,Ad-27475200,4,true,1,false,1,0,1,0);},AF2:function(H){var Ad=A._GetAutoObject(
A.Device.Helper).DN();this.Az(Ad-3542400,276000312342001,0,0,5,5,3,5,84100);this.
Az(Ad-3542400,276000312342002,0,0,5,5,3,5,77500);this.Az(Ad-3542400,276000312342003
,0,0,5,5,3,5,79700);this.Az(Ad-3542400,276000312342004,0,0,5,5,3,5,78900);this.Az(
Ad-3542400,276000312342005,0,0,5,5,3,5,87200);this.Az(Ad-3542400,276000312342006
,0,0,5,5,3,5,82400);this.Az(Ad-3542400,276000312342007,0,0,5,5,3,5,81900);this.Az(
Ad-3542400,276000312342008,0,0,5,5,3,5,80500);this.Az(Ad-3542400,276000312342009
,0,0,5,5,3,5,82800);this.Az(Ad-3542400,276000312342010,0,0,5,5,3,5,82000);this.Az(
Ad-3542400,276000312342011,0,0,5,5,3,5,78400);this.Az(Ad-3542400,276000312342012
,0,0,5,5,3,5,80500);this.Az(Ad-3542400,276000312342013,0,0,5,5,3,5,82600);this.Az(
Ad-3542400,276000312342014,0,0,5,5,3,5,0);this.Az(Ad-3542400,276000312342015,0,0
,5,5,3,5,80100);this.Az(Ad-3542400,276000312342016,0,0,5,5,3,5,81100);this.Az(Ad-
3542400,276000312342017,0,0,5,5,3,5,77000);this.Az(Ad-3542400,276000312342018,0,
0,5,5,3,5,80300);this.Az(Ad-3542400,276000312342019,0,0,5,5,3,5,76500);this.Az(Ad-
3542400,276000312342020,0,0,5,5,3,5,80500);this.Az(Ad-3542400,276000312342021,0,
0,5,5,3,5,81500);this.Az(Ad-3542400,276000312342022,0,0,5,5,3,5,80600);this.Az(Ad-
3542400,276000312342023,0,0,5,5,3,5,74400);this.Az(Ad-3542400,276000312342024,0,
0,5,5,3,5,80000);this.Az(Ad-3542400,276000312342025,0,0,5,5,3,5,74500);this.Az(Ad-
3542400,276000312342026,0,0,5,5,3,5,84800);this.Az(Ad-3542400,276000312342027,0,
0,5,5,3,5,88200);this.Az(Ad-3542400,276000312342028,0,0,5,5,3,5,79000);this.Az(Ad-
3542400,276000312342029,0,0,5,5,3,5,82000);this.Az(Ad-3542400,276000312342030,0,
0,5,5,3,5,79500);this.Az(Ad-3542400,276000312342031,0,0,5,5,3,5,82600);this.Az(Ad-
3542400,276000312342032,0,0,5,5,3,5,86800);this.Az(Ad-3542400,276000312342033,0,
0,5,5,3,5,77000);this.Az(Ad-3542400,276000312342034,0,0,5,5,3,5,76000);this.Az(Ad-
3542400,276000312342035,0,0,5,5,3,5,78100);this.Az(Ad-3542400,276000312342036,0,
0,5,5,3,5,0);this.Az(Ad-3542400,276000312342037,0,0,5,5,3,5,84700);this.Az(Ad-3542400
,276000312342038,0,0,5,5,3,5,85400);this.Az(Ad-3542400,276000312342039,0,0,5,5,3
,5,76500);this.Az(Ad-3542400,276000312342040,0,0,5,5,3,5,81500);this.Az(Ad-3542400
,276000312342041,0,0,5,5,3,5,81100);this.Az(Ad-3542400,276000312342042,0,0,5,5,3
,5,67500);this.Az(Ad-3542400,276000312342043,0,0,5,5,3,5,80000);this.Az(Ad-3542400
,276000312342044,0,0,5,5,3,5,70500);this.Az(Ad-3542400,276000312342045,0,0,5,5,3
,5,74000);this.Az(Ad-3542400,276000312342046,0,0,5,5,3,5,66000);this.Az(Ad-3542400
,276000312342047,0,0,5,5,2,5,69600);this.Az(Ad-3542400,276000312342048,0,0,5,5,3
,5,78500);this.Az(Ad-3542400,276000312342049,0,0,5,5,3,5,79000);this.Az(Ad-3542400
,276000312342050,0,0,5,5,3,5,70100);this.Az(Ad-3542400,276000312342051,0,0,5,5,3
,5,74500);this.Az(Ad-3542400,276000312342052,0,0,5,5,3,5,80000);this.Az(Ad-3542400
,276000312342053,0,0,5,5,3,5,63400);this.Az(Ad-3542400,276000312342054,0,0,5,5,3
,5,69200);this.Az(Ad-3542400,276000312342055,0,0,5,5,3,5,78400);this.Az(Ad-3542400
,276000312342056,0,0,5,5,3,5,69800);this.Az(Ad-3542400,276000312342057,0,0,5,5,3
,5,72700);this.Az(Ad-3542400,276000312342058,0,0,0,0,0,0,64200);this.Az(Ad-3542400
,276000312342059,0,0,5,5,3,5,72000);this.Az(Ad-3542400,276000312342060,0,0,5,5,3
,5,61100);this.Az(Ad,276000312342001,0,0,0,0,0,0,120500);this.Az(Ad,276000312342002
,0,0,0,0,0,0,111500);this.Az(Ad,276000312342003,0,0,0,0,0,0,110600);this.Az(Ad,276000312342004
,0,0,0,0,0,0,106700);this.Az(Ad,276000312342005,0,0,0,0,0,0,117200);this.Az(Ad,276000312342006
,0,0,0,0,0,0,116400);this.Az(Ad,276000312342007,0,0,0,0,0,0,118900);this.Az(Ad,276000312342008
,0,0,0,0,0,0,107000);this.Az(Ad,276000312342009,0,0,0,0,0,0,122100);this.Az(Ad,276000312342010
,0,0,0,0,0,0,94100);this.Az(Ad,276000312342011,0,0,0,0,0,0,114800);this.Az(Ad,276000312342012
,0,0,0,0,0,0,109600);this.Az(Ad,276000312342013,0,0,0,0,0,0,111000);this.Az(Ad,276000312342015
,0,0,0,0,0,0,114700);this.Az(Ad,276000312342016,0,0,0,0,0,0,100500);this.Az(Ad,276000312342017
,0,0,0,0,0,0,116300);this.Az(Ad,276000312342018,0,0,0,0,0,0,110500);this.Az(Ad,276000312342019
,0,0,0,0,0,0,123000);this.Az(Ad,276000312342020,0,0,0,0,0,0,118600);this.Az(Ad,276000312342021
,0,0,0,0,0,0,120300);this.Az(Ad,276000312342022,0,0,0,0,0,0,109000);this.Az(Ad,276000312342023
,0,0,0,0,0,0,104000);this.Az(Ad,276000312342024,0,0,0,0,0,0,112600);this.Az(Ad,276000312342025
,0,0,0,0,0,0,106000);this.Az(Ad,276000312342026,0,0,0,0,0,0,122000);this.Az(Ad,276000312342027
,0,0,0,0,0,0,122000);this.Az(Ad,276000312342028,0,0,0,0,0,0,122300);this.Az(Ad,276000312342029
,0,0,0,0,0,0,117100);this.Az(Ad,276000312342030,0,0,0,0,0,0,100100);this.Az(Ad,276000312342031
,0,0,0,0,0,0,126100);this.Az(Ad,276000312342032,0,0,0,0,0,0,116800);this.Az(Ad,276000312342033
,0,0,0,0,0,0,103200);this.Az(Ad,276000312342034,0,0,0,0,0,0,109000);this.Az(Ad,276000312342035
,0,0,0,0,0,0,128000);this.Az(Ad,276000312342037,0,0,0,0,0,0,115600);this.Az(Ad,276000312342038
,0,0,0,0,0,0,120600);this.Az(Ad,276000312342039,0,0,0,0,0,0,104400);this.Az(Ad,276000312342040
,0,0,0,0,0,0,102300);this.Az(Ad,276000312342041,0,0,0,0,0,0,114500);this.Az(Ad,276000312342042
,0,0,0,0,0,0,99000);this.Az(Ad,276000312342043,0,0,0,0,0,0,104300);this.Az(Ad,276000312342044
,0,0,0,0,0,0,108600);this.Az(Ad,276000312342045,0,0,0,0,0,0,117200);this.Az(Ad,276000312342046
,0,0,0,0,0,0,105000);this.Az(Ad,276000312342047,0,0,0,0,0,0,108400);this.Az(Ad,276000312342048
,0,0,0,0,0,0,117700);this.Az(Ad,276000312342049,0,0,0,0,0,0,115000);this.Az(Ad,276000312342050
,0,0,0,0,0,0,110800);this.Az(Ad,276000312342051,0,0,0,0,0,0,91300);this.Az(Ad,276000312342052
,0,0,0,0,0,0,103600);this.Az(Ad,276000312342053,0,0,0,0,0,0,104700);this.Az(Ad,276000312342054
,0,0,0,0,0,0,101900);this.Az(Ad,276000312342055,0,0,0,0,0,0,120000);this.Az(Ad,276000312342056
,0,0,0,0,0,0,114200);this.Az(Ad,276000312342057,0,0,0,0,0,0,91800);this.Az(Ad,276000312342058
,0,0,0,0,0,0,93100);this.Az(Ad,276000312342059,0,0,0,0,0,0,102300);this.Az(Ad,276000312342060
,0,0,0,0,0,0,100900);this.Az(Ad-9158400,276000312341005,3910,2,0,0,0,0,0);this.Az(
Ad-9072000,276000312341005,3970,2,0,0,0,0,0);this.Az(Ad-8985600,276000312341005,
3900,2,0,0,0,0,0);this.Az(Ad-8899200,276000312341005,3830,3,0,0,0,0,0);this.Az(Ad-
8812800,276000312341005,3810,3,0,0,0,0,0);this.Az(Ad-6307200,276000312341005,4050
,1,0,0,0,0,0);this.Az(Ad-6220800,276000312341005,3900,2,0,0,0,0,0);this.Az(Ad-6134400
,276000312341005,3810,3,0,0,0,0,0);this.Az(Ad-6048000,276000312341005,3780,3,0,0
,0,0,0);this.Az(Ad-5961600,276000312341005,3820,3,0,0,0,0,0);this.Az(Ad-432000,276000312341005
,4000,2,0,0,0,0,0);this.Az(Ad-86400,276000312341005,4020,2,0,0,0,0,0);this.Az(Ad
,276000312341005,3950,2,0,0,0,0,0);this.Az(Ad-86400,276000312343117,4000,2,0,0,0
,0,0);this.Az(Ad-172800,276000312343044,4030,2,0,0,0,0,0);this.Az(Ad-86400,276000312343044
,4100,1,0,0,0,0,0);this.Az(Ad-259200,276000312343376,4050,1,0,0,0,0,0);this.Az(Ad-
172800,276000312343376,3900,2,0,0,0,0,0);this.Az(Ad-86400,276000312343376,3780,3
,0,0,0,0,0);this.Az(Ad-345600,276000312343204,3910,2,0,0,0,0,0);this.Az(Ad-259200
,276000312343204,3980,2,0,0,0,0,0);this.Az(Ad-172800,276000312343204,4010,2,0,0,
0,0,0);this.Az(Ad-86400,276000312343204,3980,2,0,0,0,0,0);this.Az(Ad-432000,276000312343232
,4110,1,0,0,0,0,0);this.Az(Ad-345600,276000312343232,3910,2,0,0,0,0,0);this.Az(Ad-
259200,276000312343232,3940,2,0,0,0,0,0);this.Az(Ad-172800,276000312343232,3870,
3,0,0,0,0,0);this.Az(Ad-86400,276000312343232,3920,2,0,0,0,0,0);this.Az(Ad-518400
,276000312343065,3810,3,0,0,0,0,0);this.Az(Ad-432000,276000312343065,3870,3,0,0,
0,0,0);this.Az(Ad-345600,276000312343065,4030,2,0,0,0,0,0);this.Az(Ad-259200,276000312343065
,3890,3,0,0,0,0,0);this.Az(Ad-172800,276000312343065,3720,3,0,0,0,0,0);this.Az(Ad-
86400,276000312343065,3940,2,0,0,0,0,0);this.Az(Ad-604800,276000312343420,3830,3
,0,0,0,0,0);this.Az(Ad-518400,276000312343420,3940,2,0,0,0,0,0);this.Az(Ad-432000
,276000312343420,3980,2,0,0,0,0,0);this.Az(Ad-345600,276000312343420,3900,2,0,0,
0,0,0);this.Az(Ad-259200,276000312343420,3650,3,0,0,0,0,0);this.Az(Ad-172800,276000312343420
,4110,1,0,0,0,0,0);this.Az(Ad-86400,276000312343420,3860,3,0,0,0,0,0);this.Az(Ad-
691200,276000312343308,3710,3,0,0,0,0,0);this.Az(Ad-604800,276000312343308,3690,
3,0,0,0,0,0);this.Az(Ad-518400,276000312343308,3810,3,0,0,0,0,0);this.Az(Ad-432000
,276000312343308,3770,3,0,0,0,0,0);this.Az(Ad-345600,276000312343308,3670,3,0,0,
0,0,0);this.Az(Ad-259200,276000312343308,3970,2,0,0,0,0,0);this.Az(Ad-172800,276000312343308
,3680,3,0,0,0,0,0);this.Az(Ad-86400,276000312343308,3710,3,0,0,0,0,0);this.Az(Ad-
777600,276000312343409,4090,1,0,0,0,0,0);this.Az(Ad-691200,276000312343409,3690,
3,0,0,0,0,0);this.Az(Ad-604800,276000312343409,4100,1,0,0,0,0,0);this.Az(Ad-518400
,276000312343409,3840,3,0,0,0,0,0);this.Az(Ad-432000,276000312343409,3660,3,0,0,
0,0,0);this.Az(Ad-345600,276000312343409,3900,2,0,0,0,0,0);this.Az(Ad-259200,276000312343409
,3780,3,0,0,0,0,0);this.Az(Ad-172800,276000312343409,3780,3,0,0,0,0,0);this.Az(Ad-
86400,276000312343409,3870,3,0,0,0,0,0);this.Az(Ad-864000,276000312343007,3850,3
,0,0,0,0,0);this.Az(Ad-777600,276000312343007,3680,3,0,0,0,0,0);this.Az(Ad-691200
,276000312343007,4020,2,0,0,0,0,0);this.Az(Ad-604800,276000312343007,3830,3,0,0,
0,0,0);this.Az(Ad-518400,276000312343007,3670,3,0,0,0,0,0);this.Az(Ad-432000,276000312343007
,3910,2,0,0,0,0,0);this.Az(Ad-345600,276000312343007,4090,1,0,0,0,0,0);this.Az(Ad-
259200,276000312343007,3680,3,0,0,0,0,0);this.Az(Ad-172800,276000312343007,4130,
1,0,0,0,0,0);this.Az(Ad-86400,276000312343007,3730,3,0,0,0,0,0);},AFZ:function(H
){this.Ajx(1,Vm);this.Ajx(2,Vn);this.Ajx(3,RO);},AF1:function(H){this.YA(2016,216
,11);this.YA(2017,217,10);this.YA(2018,218,9);this.YA(2019,219,8);this.YA(2020,220
,7);this.YA(2021,221,6);},_Init:function(aArg){var K=this.K;K.__proto__=C.O7;A.hJ++;
},_Done:function(){var K=this.K;K.__proto__=null;A.hJ--;},_ReInit:function(){},_Mark:
function(D){},_variants:function(){return this;},_className:"DeviceDemonstrator::TableData"
};
C._Init=function(){C.DeviceClass.__proto__=A.abt.DeviceClass;};C._ReInit=function(
){var B;if((B=C.K6._this))B._ReInit();if((B=C.ArG._this))B._ReInit();if((B=C.Ahl.
_this))B._ReInit();};C.Dn=function(D){var B;if((B=C.Aaj._this)&&(B._cycle!=D))B.
_Done(C.Aaj._this=null);if((B=C.K6._this)&&(B._cycle!=D))B._Done(C.K6._this=null
);if((B=C.ArG._this)&&(B._cycle!=D))B._Done(C.ArG._this=null);if((B=C.Ahl._this)&&(
B._cycle!=D))B._Done(C.Ahl._this=null);};return C;})();

/* VitalControl demonstration application, © Urban GmbH & Co.KG 2019 */