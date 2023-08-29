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
var B9=[0,0];var BG=[0,0,1000,740];var EV=[200,5,577,745];var GS=[270,69,510,389];
var Js=[605,30,975,740];var IL=[25,25,45,41];var OJ=[547,610,687,750];var PH=[270
,390];var N0=[350,390];var CJ=[350,450];var Fn=[270,450];var N1=[430,390];var OK=[
510,390];var KF=[510,450];var OL=[430,450];var Nc=[360,390];var OM=[420,390];var
Sr=[420,450];var T8=[360,450];var V8=[335,460];var V9=[447,460];var I_=[447,500];
var T9=[335,500];var V_=[350,512];var V$=[430,512];var Y5=[430,592];var Ss=[350,
592];var Y6=[335,605];var Wa=[447,605];var T_=[447,665];var T$=[335,665];var QS=[
264,504];var Wb=[344,504];var ON=[344,601];var PJ=[264,601];var Ua=[436,504];var
Y7=[516,504];var Wc=[516,601];var Y8=[436,601];var Y9=[10,130,210,310];var Wd="1";
var We="2";var St="3";
C.A1R={Bcf:null,Background:null,Abc:null,AjS:null,AfF:null,Ak:null,YT:null,Sk:null
,YU:null,YW:null,YV:null,V3:null,YX:null,VX:null,V1:null,V2:null,Z_:null,Dg:null
,Init:function(aArg){A._GetAutoObject(A.Device.Device).Aqo(A._NewObject(A.Device.
Transponder,0));},DriveCursorHitting:function(Sy,BF,Fo){var AIc=this.Be0();if(!!
AIc){var AZh=AIc.M;AZh=A.aaM(AZh,AIc.Be_(B9));if(!A.vt(AZh,Fo))this.AAG(AIc);}return A.
Core.Root.DriveCursorHitting.call(this,Sy,BF,Fo);},Bk1:function(H){var K=this.K;
this.Device.UpdateActiveScreen(3);K.AjS.Ap(false);},Ns:function(H){var K=this.K;
var B;var DX=(A.Core.Bh.isPrototypeOf(H)?H:null);var AhF=0;if(DX===K.YV)AhF=27;else
if(DX===K.YU)AhF=26;else if(DX===K.YW)AhF=28;else if(DX===K.V1)AhF=6;else if(DX===
K.V2)AhF=7;else if(DX===K.V3)AhF=4;else if(DX===K.VX)AhF=5;else if(DX===K.YX)AhF=
1;if(!!DX){if((DX.Down&&(DX.Jj>0))&&(DX.Jj<400))return;var BuS=this.AY;this.A_(this.
Gs);this.Ia().DriveKeyboardHitting(AhF,0x00,DX.Down);this.A_(BuS);K.Sk.G(A.aaP(K.
Sk.M,DX.HS[0]-((((B=K.Sk.M)[2]-B[0])/2)|0)));K.Sk.G(A.aaR(K.Sk.M,DX.HS[1]-((((B=
K.Sk.M)[3]-B[1])/2)|0)));K.YT.Ap(true);}},AhN:function(H){var K=this.K;var B;var
Jw=(A.Core.BQ.isPrototypeOf(H)?H:null);if((String.fromCharCode(Jw.D4).toLowerCase(
).charCodeAt(0)||0)===0x73)A._GetAutoObject(C.Lz).Ba$(this);else if((String.fromCharCode(
Jw.D4).toLowerCase().charCodeAt(0)||0)===0x74)A._GetAutoObject(A.Device.Helper).
AIS(this);else if((String.fromCharCode(Jw.D4).toLowerCase().charCodeAt(0)||0)===
0x64)this.A_(this.Gs);else if((String.fromCharCode(Jw.D4).toLowerCase().charCodeAt(
0)||0)===0x63)this.A_(K.AfF);else if(Jw.CP===152){if(this.AY===K.AfF)this.A_(this.
Gs);else this.A_(K.AfF);}else if(this.AY===this.Gs){if(Jw.CP===11){this.Ia().DriveKeyboardHitting(
26,0x00,true);this.Ia().DriveKeyboardHitting(26,0x00,false);}else if(Jw.CP===12){
this.Ia().DriveKeyboardHitting(27,0x00,true);this.Ia().DriveKeyboardHitting(27,0x00
,false);}else if(Jw.CP===13){this.Ia().DriveKeyboardHitting(28,0x00,true);this.Ia(
).DriveKeyboardHitting(28,0x00,false);}}},_Init:function(aArg){var K=this.K;A.abh.
Ak._Init.call(K.Background={I:this},0);A.abh.Ak._Init.call(K.Abc={I:this},0);A.Core.
Timer._Init.call(K.AjS={I:this},0);A.aby.ARR._Init.call(K.AfF={I:this},0);A.abh.
Ak._Init.call(K.Ak={I:this},0);A.abm.AK2._Init.call(K.YT={I:this},0);A.abh.Ak._Init.
call(K.Sk={I:this},0);A.Core.Bh._Init.call(K.YU={I:this},0);A.Core.Bh._Init.call(
K.YW={I:this},0);A.Core.Bh._Init.call(K.YV={I:this},0);A.Core.Bh._Init.call(K.V3={
I:this},0);A.Core.Bh._Init.call(K.YX={I:this},0);A.Core.Bh._Init.call(K.VX={I:this
},0);A.Core.Bh._Init.call(K.V1={I:this},0);A.Core.Bh._Init.call(K.V2={I:this},0);
A.aby.Z_._Init.call(K.Z_={I:this},0);A.Core.BQ._Init.call(K.Dg={I:this},0);K.__proto__=
C.A1R;var B;this.G(BG);K.Background.G(BG);K.Abc.G(EV);this.Gs.G(GS);K.AjS.Qz(2000
);K.AjS.Ap(true);K.AfF.G(Js);K.Ak.G(IL);K.YT.AjU=true;K.YT.VJ(9);K.YT.IF(1);K.YT.
Fz(300);K.YT.BZ=0xA0FFFFFF;K.YT.Cv=0x00FFFFFF;K.Sk.G(OJ);K.Sk.L(0x00FFFFFF);K.YU.
Kz(PH);K.YU.Ky(N0);K.YU.DN(CJ);K.YU.D6(Fn);K.YW.Kz(N1);K.YW.Ky(OK);K.YW.DN(KF);K.
YW.D6(OL);K.YV.Kz(Nc);K.YV.Ky(OM);K.YV.DN(Sr);K.YV.D6(T8);K.V3.Kz(V8);K.V3.Ky(V9
);K.V3.DN(I_);K.V3.D6(T9);K.YX.Kz(V_);K.YX.Ky(V$);K.YX.DN(Y5);K.YX.D6(Ss);K.VX.Kz(
Y6);K.VX.Ky(Wa);K.VX.DN(T_);K.VX.D6(T$);K.V1.Kz(QS);K.V1.Ky(Wb);K.V1.DN(ON);K.V1.
D6(PJ);K.V2.Kz(Ua);K.V2.Ky(Y7);K.V2.DN(Wc);K.V2.D6(Y8);K.Z_.G(Y9);this.J(K.Background
,-1);this.J(K.Abc,-1);this.J(K.AfF,0);this.J(K.Ak,0);this.J(K.Sk,0);this.J(K.YU,
0);this.J(K.YW,0);this.J(K.YV,0);this.J(K.V3,0);this.J(K.YX,0);this.J(K.VX,0);this.
J(K.V1,0);this.J(K.V2,0);this.J(K.Z_,0);K.Background.At(A.zW(A.aby.Background));
K.Abc.At(A.zW(A.abz.Abc));K.AjS.M9=[this,K.Bk1];K.Ak.At(A.zW(A.aby.APf));K.YT.Q=[
B=K.Sk,B.BgP,B.L];K.Sk.At(A.zW(A.abz.AOY));K.YU.K9=[this,K.Ns];K.YU.BR=[this,K.Ns
];K.YW.K9=[this,K.Ns];K.YW.BR=[this,K.Ns];K.YV.K9=[this,K.Ns];K.YV.BR=[this,K.Ns
];K.V3.DT=[this,K.Ns];K.V3.K9=[this,K.Ns];K.V3.BR=[this,K.Ns];K.YX.K9=[this,K.Ns
];K.YX.BR=[this,K.Ns];K.VX.DT=[this,K.Ns];K.VX.K9=[this,K.Ns];K.VX.BR=[this,K.Ns
];K.V1.DT=[this,K.Ns];K.V1.K9=[this,K.Ns];K.V1.BR=[this,K.Ns];K.V2.DT=[this,K.Ns
];K.V2.K9=[this,K.Ns];K.V2.BR=[this,K.Ns];K.Z_.Aa6([B=A._GetAutoObject(A.Device.
Helper),B.Ub,B.Uc]);K.Dg.BR=[this,K.AhN];K.Bcf=A._GetAutoObject(A.abt.AqZ);K.Init.
call(this,aArg);A.hJ++;},_Done:function(){var K=this.K;K.__proto__=null;K.Background.
_Done();K.Abc._Done();K.AjS._Done();K.AfF._Done();K.Ak._Done();K.YT._Done();K.Sk.
_Done();K.YU._Done();K.YW._Done();K.YV._Done();K.V3._Done();K.YX._Done();K.VX._Done(
);K.V1._Done();K.V2._Done();K.Z_._Done();K.Dg._Done();A.hJ--;},_ReInit:function(
){var K=this.K;K.Background._ReInit();K.Abc._ReInit();K.AjS._ReInit();K.AfF._ReInit(
);K.Ak._ReInit();K.YT._ReInit();K.Sk._ReInit();K.YU._ReInit();K.YW._ReInit();K.YV.
_ReInit();K.V3._ReInit();K.YX._ReInit();K.VX._ReInit();K.V1._ReInit();K.V2._ReInit(
);K.Z_._ReInit();K.Dg._ReInit();},_Mark:function(D){var B;if((B=this.Bcf)&&(B._cycle
!=D))B._Mark(B._cycle=D);if((B=this.Background)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Abc)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AjS)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.AfF)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ak)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.YT)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Sk)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.YU)._cycle!=D)B._Mark(B._cycle=D);if((B=this.YW
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.YV)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.V3)._cycle!=D)B._Mark(B._cycle=D);if((B=this.YX)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.VX)._cycle!=D)B._Mark(B._cycle=D);if((B=this.V1)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.V2)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Z_)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.Dg)._cycle!=D)B._Mark(B._cycle=D);},_variants:function(
){return this;},_className:"DeviceDemonstrator::ApplicationDemonstration"};C.DeviceClass={
AHK:null,AtR:null,As9:null,Init:function(aArg){var K=this.K;var B;A.y_([this,K.BgB
],this.Ao,0);A.za([this,K.BiO],[B=K.AHK,B.A5x,B.A6M],0);A.za([this,K.BhV],[B=K.AHK
,B.A41,B.AQn],0);},Aqn:function(E){this.UpdateScanState(E);},Au9:function(E){this.
UpdateMeasureState(E);},Avh:function(E){this.UpdateTempValue(E);},AvQ:function(){
this.UpdateMeasureState(1);this.UpdateTempValue(0);},AgS:function(){var B;A._GetAutoObject(
A.Device.Helper).Sg.AvS(this);this.UpdateMeasureState(0);},Ael:function(){this.UpdateScanState(
1);},AmQ:function(){this.UpdateScanState(0);},Aqo:function(E){this.UpdateScanTransponder(
E.Id,E.TransponderType,E.TransponderProtocol);if(this.ScanState!==1)return;this.
UpdateScanState(2);},BiO:function(H){var K=this.K;var AkJ=A._GetAutoObject(C.Lz).
AEl;if(AkJ<0)K.AtR=null;else{K.AtR=A._NewObject(A.Device.Int32FilterCriterion,0);
K.AtR.Initialize(2,0,AkJ,true);}A.ow([this,K.Bk],this);},BhV:function(H){var K=this.
K;var Bb5=A._GetAutoObject(C.Lz).AzJ;if(Bb5<=0)K.As9=null;else{K.As9=A._NewObject(
A.Device.Int32FilterCriterion,0);K.As9.Initialize(1,4,Bb5,false);}A.ow([this,K.Bk
],this);},Bk:function(H){var K=this.K;var Bb=A._GetAutoObject(A.Device.Helper).MY(
);Bb.CZ(K.AtR);Bb.CZ(K.As9);A._GetAutoObject(C.As_).Bk(Bb);},BgB:function(H){var
K=this.K;A.ow([this,K.Bk],this);},_Init:function(aArg){var K=this.K;A.abt.DeviceClass.
_Init.call(this,aArg);K.__proto__=C.DeviceClass;this.Py(4);this.Avd(276034580109999
);K.AHK=A._GetAutoObject(C.Lz);K.Init.call(this,aArg);},_Mark:function(D){var B;
A.abt.DeviceClass._Mark.call(this,D);if((B=this.AHK)&&(B._cycle!=D))B._Mark(B._cycle=
D);if((B=this.AtR)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.As9)&&(B._cycle
!=D))B._Mark(B._cycle=D);},_variants:function(){return this;},_className:"DeviceDemonstrator::DeviceClass"
};C.Abh={_Init:function(){A.abt.Abh._Init.call(this,0);this.AQS(false);this.AQT(
false);},_variants:function(){return this;},_this:null};C.A2I={TransponderId:0,AEl:
0,AzJ:0,AqT:null,Aq6:3950,AvA:true,A6M:function(E){if(this.AEl===E)return;this.AEl=
E;A.aat([this,this.A5x,this.A6M],0);},A5x:function(){return this.AEl;},AQn:function(
E){if(this.AzJ===E)return;this.AzJ=E;A.aat([this,this.A41,this.AQn],0);},A41:function(
){return this.AzJ;},Ba$:function(H){this.Azc(this.TransponderId);},M7:function(E
){if(this.TransponderId===E)return;this.TransponderId=E;A.aat([this,this.Ajl,this.
M7],0);},A6N:function(E){if(this.AqT===E)return;this.AqT=E;A.aat([this,this.A5y,
this.A6N],0);},A5y:function(){return this.AqT;},Azc:function(L1){var B;var Je=false;
if((A._GetAutoObject(A.Device.Device).ScanState===1)&&!!L1){A._GetAutoObject(A.Device.
Device).PC.AQ5(1);A._GetAutoObject(A.Device.Device).PC.OnSetId(L1);A._GetAutoObject(
A.Device.Device).PC.AQ4(2);A._GetAutoObject(A.Device.Device).Aqn(2);A.aat([B=A._GetAutoObject(
A.Device.Device),B.AQd,B.AXf],0);Je=true;}return Je;},AQO:function(E){if(this.AvA===
E)return;this.AvA=E;A.aat([this,this.AQa,this.AQO],0);},A6S:function(E){if(this.
Aq6===E)return;this.Aq6=E;A.aat([this,this.Bhu,this.A6S],0);},BaW:function(H){var
B;if(this.AvA)A._GetAutoObject(A.Device.Helper).AIS(this);else A._GetAutoObject(
A.Device.Helper).A_7(this.Aq6);},Ajl:function(){return this.TransponderId;},AQa:
function(){return this.AvA;},Bhu:function(){return this.Aq6;},_Init:function(aArg
){this.__proto__=C.A2I;this.AqT=A.aby.AKf;A.hJ++;},_Done:function(){this.__proto__=
null;A.hJ--;},_ReInit:function(){},_Mark:function(D){var B;if((B=this.I)&&(B._cycle
!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:"DeviceDemonstrator::DemonstrationConfigClass"
};C.Lz={_Init:function(){C.A2I._Init.call(this,0);},_variants:function(){return this;
},_this:null};C.As_={_Init:function(){A.Device.Table._Init.call(this,0);this.OnSetId(
0);},_variants:function(){return this;},_this:null};C.A2J={AgN:A.jm,Delete:function(
){this.ADy(A.aaX(this.AgN,this.AgN.length-1));},E6:function(AbS){if(!this.AgN.length&&(
AbS===0x30))return;if(this.AgN.length<6)this.ADy(this.AgN+String.fromCharCode(AbS
));},ADy:function(E){if(this.AgN===E)return;this.AgN=E;A.aat([this,this.A5v,this.
ADy],0);A._GetAutoObject(C.Lz).AQn(A.vQ(this.AgN,-1,10));},A5v:function(){return this.
AgN;},_Init:function(aArg){this.__proto__=C.A2J;A.hJ++;},_Done:function(){this.__proto__=
null;A.hJ--;},_ReInit:function(){},_Mark:function(D){var B;if((B=this.I)&&(B._cycle
!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:"DeviceDemonstrator::DemonstrationSearchHelperClass"
};C.AiF={_Init:function(){C.A2J._Init.call(this,0);},_variants:function(){return this;
},_this:null};C.PD={AHU:function(H){var Ad=A._GetAutoObject(A.Device.Helper).DK(
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
,true,0,Ad-27475200,4,true,1,false,1,0,1,0);},AHW:function(H){var Ad=A._GetAutoObject(
A.Device.Helper).DK();this.AE(Ad-3542400,276000312342001,0,0,5,5,3,5,84100);this.
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
1,0,0,0,0,0);this.AE(Ad-86400,276000312343007,3730,3,0,0,0,0,0);},AHT:function(H
){this.AkL(1,Wd);this.AkL(2,We);this.AkL(3,St);},AHV:function(H){this.Zv(2016,216
,11);this.Zv(2017,217,10);this.Zv(2018,218,9);this.Zv(2019,219,8);this.Zv(2020,220
,7);this.Zv(2021,221,6);},_Init:function(aArg){var K=this.K;K.__proto__=C.PD;A.hJ++;
},_Done:function(){var K=this.K;K.__proto__=null;A.hJ--;},_ReInit:function(){},_Mark:
function(D){},_variants:function(){return this;},_className:"DeviceDemonstrator::TableData"
};
C._Init=function(){C.DeviceClass.__proto__=A.abt.DeviceClass;};C._ReInit=function(
){var B;if((B=C.Lz._this))B._ReInit();if((B=C.As_._this))B._ReInit();if((B=C.AiF.
_this))B._ReInit();};C.DB=function(D){var B;if((B=C.Abh._this)&&(B._cycle!=D))B.
_Done(C.Abh._this=null);if((B=C.Lz._this)&&(B._cycle!=D))B._Done(C.Lz._this=null
);if((B=C.As_._this)&&(B._cycle!=D))B._Done(C.As_._this=null);if((B=C.AiF._this)&&(
B._cycle!=D))B._Done(C.AiF._this=null);};return C;})();

/* VitalControl demonstration application, © Urban GmbH & Co.KG 2023 */