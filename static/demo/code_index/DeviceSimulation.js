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
);if(index.acs)throw new Error("The unit file 'DeviceSimulation.js' included twice!"
);index.acs=(function(){var A=index;var C={};
var Cc="ERROR: access to null Bool data in column [";var BD="]";var E6="Access to inexistent column index: ";
var Hq=", or not enough indexes for store column. You can increase the \'data\' "+
"array size to hold this column.";var IT="Unsupported filter criterion class";var
Is="Operator not handled:";var O2="1,8";var P7="INFO: Device.StartScan() called.";
var P8="INFO: Device.StopScan() called.";var CQ="V0.";var Fe=".";var L1="\n";var
P9="Temp: ";var J1="Battery: ";var N$="%%";var P_="Selected animal with row index";
var MG="1,256,2,2048,4096,8192,4,8,16,128,64,32,1024,262144,16384,131072,512";var
S9="1,2";var UQ="0,1,2";var Z1="3900,3950,4000";var W1="4050,4100,4150";var It="Read only";
var UR="Unknown data export type: ";var Z2="Unhandled Device::DataExportType: ";
var W2="0,2,1";var Z3="650,150,700";var W3="800,200,900";var Z4="800,200,850";var
Z5="40000,4000,0";var US="32,7,34,18,23,14";var W4="16384";var O3="1,1024";var Z6=
"Simulate Scan";var O4="BNR15;LOM;GEB_DATR;RASSE;GESCHL_R;GEB_VERL;VERBLEIB;MEHRLADR;LOM_MUT\n";
var Rl="%d.%m.%Y";var W5="1";var W6="2";var UT="Unknown gender: ";var Z7="text/csv";
var Z8="National-ID-Animal;Farm-ID-Animal;Transponder-ID;DateOfBirth;Sex;BirthWeight-Kg\n";
var W7="hit-geburt-%d-%m-%Y_%H-%M.csv";var W8="animals-%d-%m-%Y_%H-%M.csv";var S_=
"zugang-%d-%m-%Y_%H-%M.csv";var UU="M";var UV="F";var AcK="?";var S$="%Y-%m-%d";
var Z9="LOM;ZUGA_DAT;Geburtsdatum;Geschlecht;Nutzung;Rasse;BNR15\n";var Afz="ERROR: Cannot start transaction";
var Z_="Nested transactions are not allowed.";var W9="Transaction not opened.";var
Z$="Wrong transaction ID.";var W_="Unhandled TableId:";var AhS="Maximum number of rows reached.";
var KY="Animal row not found in DeviceSimulation::AnimalTableData. NaisId";var AcL=
"10";var Lv="20";var AhT="30";var An$="31";var Oa="32";var W$="Severe: filter set when inserting row into table: ";
var Aaa="Warning: DeviceSimulation::TableData not in transaction";var AhU="ERROR: Row not found with index [";
var AhV="] while Rows Count = ";var AcM="ERROR: trying to access an inexistent row with Index=";
var UW="Invalid Device::SyncState";var Aoa="Forwarding to home screen after 500 milliseconds ...";
var Aob="Forwarding to home screen canceled...";var Aoc=[0,58,240,208];var Aod="VitalControl\nstarting up \u2026";
C.Table={GL:null,Init:function(aArg){var K=this.K;A.zV([this,this.Akk],K.GL,0);},
CF:function(Ad,A3){var K=this.K;return K.GL.CF(Ad,A3);},VY:function(Ad,A3){var K=
this.K;return K.GL.VY(Ad,A3);},H2:function(Ad,A3){var K=this.K;return K.GL.H2(Ad
,A3);},OnSetId:function(E){var K=this.K;if(this.Id===E)return;this.Id=E;K.GL.OnSetId(
E);},B9:function(){var K=this.K;return K.GL.B9();},Bk:function(E){var K=this.K;A.
Device.ITable.Bk.call(this,E);K.GL.Bk(E);},VZ:function(Ad,A3){var K=this.K;return K.
GL.VZ(Ad,A3);},Sk:function(Ad,A3){var K=this.K;return K.GL.Sk(Ad,A3);},Oy:function(
){var K=this.K;return K.GL.Oy();},OA:function(AoM){var K=this.K;return K.GL.OA(AoM
);},YB:function(){var K=this.K;return K.GL.YB();},ZH:function(Ad,A3,CZ){var K=this.
K;return K.GL.ZH(Ad,A3,CZ);},Hn:function(Ad,A3,CZ){var K=this.K;return K.GL.Hn(Ad
,A3,CZ);},ZG:function(Ad,A3,CZ){var K=this.K;return K.GL.ZG(Ad,A3,CZ);},N5:function(
Ad,A3,CZ){var K=this.K;return K.GL.N5(Ad,A3,CZ);},ZF:function(Ad,A3,CZ){var K=this.
K;return K.GL.ZF(Ad,A3,CZ);},LS:function(aColumn,A_){var K=this.K;return K.GL.LS(
aColumn,A_);},KN:function(Ad,A3){var K=this.K;return K.GL.KN(Ad,A3);},Uy:function(
Ad,A3,CZ){var K=this.K;return K.GL.Uy(Ad,A3,CZ);},AgV:function(aColumn,A_){var K=
this.K;return K.GL.AgV(aColumn,A_);},E5:function(){var K=this.K;return K.GL.E5();
},AjH:function(aColumn,A_){var K=this.K;return K.GL.AjH(aColumn,A_);},Aej:function(
aColumn,A_){var K=this.K;return K.GL.Aej(aColumn,A_);},HI:function(){var K=this.
K;return K.GL.HI();},Abo:function(){var K=this.K;return K.GL.Abo();},QI:function(
){var K=this.K;return K.GL.QI();},_Init:function(aArg){var K=this.K;C.GL._Init.call(
K.GL={I:this},0);K.__proto__=C.Table;K.Init.call(this,aArg);A.h7++;},_Done:function(
){var K=this.K;K.__proto__=null;K.GL._Done();A.h7--;},_ReInit:function(){var K=this.
K;K.GL._ReInit();},_Mark:function(D){var B;if((B=this.GL)._cycle!=D)B._Mark(B._cycle=
D);},_variants:function(){return this;},_className:"DeviceSimulation::Table"};C.
AGk={Tf:A.abi(42,null,null),CF:function(aColumn){var B;this.Aal(aColumn);var Aq=(
C.ADL.isPrototypeOf(B=this.Tf.Get(aColumn))?B:null);if(!!Aq)return Aq.A4;return 0;
},VY:function(aColumn){var B;this.Aal(aColumn);var Aq=(C.String.isPrototypeOf(B=
this.Tf.Get(aColumn))?B:null);if(!!Aq)return Aq.A4;return A.jV;},H2:function(aColumn
){var B;this.Aal(aColumn);var Aq=(C.ABS.isPrototypeOf(B=this.Tf.Get(aColumn))?B:
null);if(!!Aq)return Aq.A4;else A.ab5("%s",(Cc+aColumn.toFixed())+BD);return false;
},Hn:function(aColumn,A_){this.Aal(aColumn);var Aq=A._NewObject(C.ADL,0);Aq.A4=A_;
this.Tf.Set(aColumn,Aq);return true;},ZF:function(aColumn,A_){this.Aal(aColumn);
var Aq=A._NewObject(C.String,0);Aq.A4=A_;this.Tf.Set(aColumn,Aq);return true;},N5:
function(aColumn,A_){this.Aal(aColumn);var Aq=A._NewObject(C.ABS,0);Aq.A4=A_;this.
Tf.Set(aColumn,Aq);return true;},Aal:function(aColumn){if((aColumn<0)||(aColumn>=
42))throw new Error((E6+aColumn.toFixed())+Hq);},Bjj:function(AI){if(!!(A.Device.
Int32FilterCriterion.isPrototypeOf(AI)?AI:null))return this.AJC(this.CF(AI.EJ),AI.
Operator,(A.Device.Int32FilterCriterion.isPrototypeOf(AI)?AI:null).A4);else if(!
!(A.Device.UInt32FilterCriterion.isPrototypeOf(AI)?AI:null))return this.Bym(this.
Sk(AI.EJ),AI.Operator,(A.Device.UInt32FilterCriterion.isPrototypeOf(AI)?AI:null).
A4);else if(!!(A.Device.StringFilterCriterion.isPrototypeOf(AI)?AI:null))return this.
Byl(this.VY(AI.EJ),AI.Operator,(A.Device.StringFilterCriterion.isPrototypeOf(AI)?
AI:null).A4);else if(!!(A.Device.BoolFilterCriterion.isPrototypeOf(AI)?AI:null))
return this.Byk(this.H2(AI.EJ),AI.Operator,(A.Device.BoolFilterCriterion.isPrototypeOf(
AI)?AI:null).A4);else if(!!(A.Device.AnimalTypeFilterCriterion.isPrototypeOf(AI)?
AI:null))return this.AJC(this.CF(AI.EJ),AI.Operator,(A.Device.AnimalTypeFilterCriterion.
isPrototypeOf(AI)?AI:null).A4);else if(!!(A.Device.GenderFilterCriterion.isPrototypeOf(
AI)?AI:null))return this.AJC(this.CF(AI.EJ),AI.Operator,(A.Device.GenderFilterCriterion.
isPrototypeOf(AI)?AI:null).A4);else if(!!(A.Device.AssessmentFilterCriterion.isPrototypeOf(
AI)?AI:null))return this.Byp(this.VZ(AI.EJ),AI.Operator,(((B=(A.Device.AssessmentFilterCriterion.
isPrototypeOf(AI)?AI:null).A4)<0)?B+0x100000000:B)&0xFF);else if(!!(A.Device.UInt64FilterCriterion.
isPrototypeOf(AI)?AI:null))return this.Byn(this.KN(AI.EJ),AI.Operator,(A.Device.
UInt64FilterCriterion.isPrototypeOf(AI)?AI:null).A4);else if(!!(A.Device.UInt64PartialFilterCriterion.
isPrototypeOf(AI)?AI:null))return this.Byo(this.KN(AI.EJ),AI.Operator,(A.Device.
UInt64PartialFilterCriterion.isPrototypeOf(AI)?AI:null).A4,(A.Device.UInt64PartialFilterCriterion.
isPrototypeOf(AI)?AI:null).Zh&0xFF,(A.Device.UInt64PartialFilterCriterion.isPrototypeOf(
AI)?AI:null).OB&0xFF);else if(!!(A.Device.WhereAboutsFilterCriterion.isPrototypeOf(
AI)?AI:null))return this.AJC(this.CF(AI.EJ),AI.Operator,(A.Device.WhereAboutsFilterCriterion.
isPrototypeOf(AI)?AI:null).A4);else throw new Error(IT);},AJC:function(Fs,Eb,GA){
switch(Eb){case 0:return Fs===GA;case 2:return Fs>GA;case 3:return Fs<GA;case 4:
return Fs.toFixed().indexOf(GA.toFixed(),0)>=0;case 5:return Fs!==GA;default:throw new
Error(Is+Eb.toFixed());}},Byl:function(Fs,Eb,GA){switch(Eb){case 0:return Fs===GA;
case 2:return Fs>GA;case 3:return Fs<GA;case 4:{A.ab5("%s%e%s%i",Fs,Eb,GA,Fs.indexOf(
GA,0));return Fs.indexOf(GA,0)>=0;}case 5:return Fs!==GA;default:throw new Error(
Is+Eb.toFixed());}},Byk:function(Fs,Eb,GA){switch(Eb){case 0:return Fs===GA;case
2:case 3:case 4:return false;case 5:return Fs!==GA;default:throw new Error(Is+Eb.
toFixed());}},VZ:function(aColumn){var B;this.Aal(aColumn);var Aq=(C.AGZ.isPrototypeOf(
B=this.Tf.Get(aColumn))?B:null);if(!!Aq)return Aq.A4;return 0;},ZH:function(aColumn
,A_){this.Aal(aColumn);var Aq=A._NewObject(C.AGZ,0);Aq.A4=A_;this.Tf.Set(aColumn
,Aq);return true;},Byp:function(Fs,Eb,GA){switch(Eb){case 0:return Fs===GA;case 2:
return Fs>GA;case 3:return Fs<GA;case 4:return Fs.toFixed().indexOf(GA.toFixed()
,0)>=0;case 5:return Fs!==GA;default:throw new Error(Is+Eb.toFixed());}},Sk:function(
aColumn){var B;this.Aal(aColumn);var Aq=(C.AGX.isPrototypeOf(B=this.Tf.Get(aColumn
))?B:null);if(!!Aq)return Aq.A4;return 0;},ZG:function(aColumn,A_){this.Aal(aColumn
);var Aq=A._NewObject(C.AGX,0);Aq.A4=A_;this.Tf.Set(aColumn,Aq);return true;},Bym:
function(Fs,Eb,GA){switch(Eb){case 0:return Fs===GA;case 2:return Fs>GA;case 3:return Fs<
GA;case 4:return Fs.toFixed().indexOf(GA.toFixed(),0)>=0;case 5:return Fs!==GA;default:
throw new Error(Is+Eb.toFixed());}},KN:function(aColumn){var B;this.Aal(aColumn);
var Aq=(C.AGY.isPrototypeOf(B=this.Tf.Get(aColumn))?B:null);if(!!Aq)return Aq.A4;
return 0;},Uy:function(aColumn,A_){this.Aal(aColumn);var Aq=A._NewObject(C.AGY,0
);Aq.A4=A_;this.Tf.Set(aColumn,Aq);return true;},Byn:function(Fs,Eb,GA){switch(Eb
){case 0:return Fs===GA;case 2:return Fs>GA;case 3:return Fs<GA;case 4:return Fs.
toFixed().indexOf(GA.toFixed(),0)>=0;case 5:return Fs!==GA;default:throw new Error(
Is+Eb.toFixed());}},Byo:function(Fs,Eb,GA,Ato,AI0){var AKT=Fs.toFixed();AKT=A.ab2(
A.abV(AKT,AKT.length-Ato),AI0);Fs=Math.trunc(Fs/A._GetAutoObject(A.Device.Helper
).ApN(Ato))%A._GetAutoObject(A.Device.Helper).ApN(AI0);var ALn=A.ab0(GA,0,10);switch(
Eb){case 0:return Fs===ALn;case 2:return Fs>ALn;case 3:return Fs<ALn;case 4:return AKT.
indexOf(GA,0)>=0;case 5:return Fs!==ALn;default:throw new Error(Is+Eb.toFixed());
}},_Init:function(aArg){(this.Tf=[]).__proto__=C.AGk.Tf;this.__proto__=C.AGk;A.h7++;
},_Done:function(){this.__proto__=null;A.h7--;},_ReInit:function(){},_Mark:function(
D){var B;A.aa6(this.Tf,D);if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null
,_cycle:0,_observers:null,_className:"DeviceSimulation::RowData"};C.Wq={_Init:function(
aArg){this.__proto__=C.Wq;A.h7++;},_Done:function(){this.__proto__=null;A.h7--;}
,_ReInit:function(){},_Mark:function(D){var B;if((B=this.I)&&(B._cycle!=D))B._Mark(
B._cycle=D);},I:null,_cycle:0,_observers:null,_className:"DeviceSimulation::NativeType"
};C.ADL={A4:0,_Init:function(aArg){C.Wq._Init.call(this,aArg);this.__proto__=C.ADL;
},_className:"DeviceSimulation::Int32"};C.String={A4:A.jV,_Init:function(aArg){C.
Wq._Init.call(this,aArg);this.__proto__=C.String;},_className:"DeviceSimulation::String"
};C.ABS={A4:false,_Init:function(aArg){C.Wq._Init.call(this,aArg);this.__proto__=
C.ABS;},_className:"DeviceSimulation::Bool"};C.DeviceClass={Aug:null,Ai0:null,AaM:
null,CP:function(){var K=this.K;K.A_8.call(this,this);},Init:function(aArg){var K=
this.K;var B;this.Zk(3);A.zX([this,K.Bf0],[B=K.Aug,B.A8T,B.ATl],0);this.UpdateAutoActions(
O2);K.A_8.call(this,this);this.Aso(this);this.Asp(this);this.ResetActiveActions(
this);this.ResetAutoActions(this);this.Asm(this);this.ResetNoNaisIdListActions(this
);this.ResetNoTransponderListActions(this);this.ResetYoungNoTransponderListActions(
this);var languageMin=0;var languageMax=17;var languageValue=-1;{if(typeof ewLanguage===
'number'&&Number.isInteger(ewLanguage)&&ewLanguage>=languageMin&&ewLanguage<languageMax
){languageValue=ewLanguage;}}if(languageValue>=0)this.Anx(languageValue);A.pe([this
,K.ATM],this);},Zk:function(E){this.UpdateActiveScreen(E);},Awq:function(E){this.
UpdateBatteryChargeState(E);},AEV:function(E){this.UpdateChargeActive(E);},ArY:function(
E){this.UpdateScanState(E);},AwP:function(E){this.UpdateMeasureState(E);},Aw3:function(
E){this.UpdateTempValue(E);},Anx:function(E){this.UpdateLanguage(E);},Aw4:function(
E){this.UpdateTemperatureUnit(E);},AET:function(E){this.UpdateBrightness(E);},AFp:
function(E){this.UpdateMonitoring(E);},AxC:function(){var B;if(A._GetAutoObject(
C.Uz).Axw){this.UpdateMeasureState(1);A._GetAutoObject(A.Device.Helper).AKZ(this
);}},AhK:function(){var B;A._GetAutoObject(A.Device.Helper).SS.AnU(this);this.UpdateMeasureState(
0);},AhH:function(){var K=this.K;A.ab5("%s",P7);this.UpdateScanState(1);A.pe([this
,K.Bf0],this);},AnV:function(){var K=this.K;var B;A.ab5("%s",P8);K.Ai0.AnU(this);
this.UpdateScanState(0);},SetSystemTime:function(Ah8){},Axv:function(){A.Device.
DeviceClass.Bax.call(this);this.Zk(1);},AGh:function(){A.Device.DeviceClass.Bav.
call(this);this.Zk(2);},Dw:function(E){this.UpdateOverlayMenu(E);},Aw_:function(
E){this.UpdateUnderTemp(E);},Ab6:function(E){this.UpdateSyncState(E);},ACY:function(
){var aString;aString=((((((((((CQ+A.abz(0,9).toFixed())+Fe)+A.abz(0,9).toFixed(
))+L1)+P9)+A.abz(30,90).toFixed())+A.aaR(A.acf.AGM))+L1)+J1)+A.abz(1,100).toFixed(
))+N$;return aString;},PopupStateChanged:function(J4,Ae){var Agl=A._NewObject(C.
PopupContext,0);Agl.Id=J4;Agl.EV=Ae;this.AnJ.Trigger(Agl,false);},AFQ:function(E
){this.UpdateVibrationOnKeypressEnabled(E);},Ae_:function(E){this.UpdateVibrationOn(
E);},AwZ:function(E){this.UpdateRatingMode(E);},Ae0:function(E){this.UpdateFlashLightOn(
E);},Uq:function(E){this.UpdateTopLightOn(E);},WA:function(E){this.UpdateRGBTopLight(
E);},Awp:function(E){this.UpdateAutoRegistrationMode(E);},ArZ:function(E){this.UpdateScanTransponder(
E.Id,E.TransponderType,E.TransponderProtocol);},OM:function(E){this.UpdateDigitsID(
E);},PQ:function(E){this.UpdateOffsetID(E);},AFU:function(E){this.UpdateWeightValue(
E);},AwM:function(E){this.UpdateMassUnit(E);},Ary:function(E){A.Device.DeviceClass.
Bar.call(this,E);this.UpdateActiveActions(E);},Arz:function(E){A.Device.DeviceClass.
Bas.call(this,E);this.UpdateActiveActionsOrder(E);},Akr:function(E){A.Device.DeviceClass.
Bat.call(this,E);this.UpdateAutoActions(E);},AGI:function(){var K=this.K;this.UpdateMeasureState(
1);K.BBK.call(this,this);},AsD:function(){var K=this.K;var B;K.AaM.AnU(this);this.
UpdateMeasureState(0);},EB:function(E){this.UpdateAnimalType(E);},Aw$:function(E
){this.UpdateWeightRecordingMode(E);},AFu:function(E){this.UpdatePredictedTempValue(
E);},SP:function(L7){A.ab5("%s%i",P_,L7);},AE0:function(E){this.UpdateDemoMode(E
);},AEI:function(E){this.UpdateAgeRegistration(E);},Axa:function(E){this.UpdateWeightRecordingScope(
E);},JS:function(E){this.UpdateGender(E);},ArO:function(E){this.UpdateIDLastUsedMale(
E);},ArN:function(E){this.UpdateIDLastUsedFemale(E);},Zl:function(E){this.UpdateAnimalListContent(
E);},AEK:function(E){this.UpdateAlarmListAction(E);},AE3:function(E){this.UpdateFlashLightInMeasureState(
E);},AeV:function(E){this.UpdateAnimalInfoContent(E);},AFT:function(E){this.UpdateWatchListAction(
E);},AE5:function(E){this.UpdateFreshCowListAction(E);},ResetActiveActions:function(
G){this.Ary(15359);this.Arz(MG);},ResetAutoActions:function(G){this.Akr(S9);},Awn:
function(E){this.UpdateAnimalTypesString(E);},Ar2:function(E){this.UpdateTemperaturesHighString(
E);},Ar3:function(E){this.UpdateTemperaturesLowString(E);},Aso:function(G){this.
Awn(UQ);this.Ar3(Z1);this.Ar2(W1);this.Aw_(3600);},AwG:function(E){this.UpdateFreshCowsHideMeasured(
E);},ArU:function(E){this.UpdateNaisIdLastUsedMale(E);},ArT:function(E){this.UpdateNaisIdLastUsedFemale(
E);},AwT:function(E){this.UpdateNaisIdIncrementMale(E);},AwS:function(E){this.UpdateNaisIdIncrementFemale(
E);},UpdateFirmware:function(){A.Device.DeviceClass.Bay.call(this);A._GetAutoObject(
A.kR.A9).Cd(53);},Ans:function(E){this.UpdateBootloaderMessage(E);},AEF:function(
E){this.UpdateActionListAction(E);},Awl:function(E){this.UpdateActionListHideMeasured(
E);},Uj:function(E){this.UpdateAnimalIdGenerationMethod(E);},Awy:function(E){this.
UpdateDirectionOfCountingFemale(E);},Awz:function(E){this.UpdateDirectionOfCountingMale(
E);},AwA:function(E){this.UpdateDirectionOfCountingUnisex(E);},ArP:function(E){this.
UpdateIDLastUsedUnisex(E);},ArV:function(E){this.UpdateNaisIdLastUsedUnisex(E);}
,AwU:function(E){this.UpdateNaisIdIncrementUnisex(E);},Akt:function(E){this.UpdateEartagNrAssignmentMode(
E);},NZ:function(E){this.UpdateBreed(E);},AFn:function(E){throw new Error(It);},
AFh:function(E){throw new Error(It);},AFN:function(E){throw new Error(It);},AEP:
function(E){throw new Error(It);},AE1:function(E){this.UpdateDryCowListAction(E);
},AJz:function(A0A){var Qw;switch(A0A){case 15:Qw=false;break;default:Qw=true;}return Qw;
},AEO:function(E){this.UpdateBirthListView(E);},AFO:function(E){this.UpdateTransferProgress(
E);},Ar4:function(E){this.UpdateTransferTarget(E);},AsC:function(){var B;A.pe([B=
A._GetAutoObject(C.Acn),B.Bf4],this);},AwY:function(E){this.UpdatePremisesID(E);
},AwR:function(E){this.UpdateMotherSelectionDriedOffFilter(E);},AE6:function(E){
this.UpdateFreshCowSpan(E);},AFP:function(E){this.UpdateUSBDevice(E.ZX,E.AsM,E.Ase
);},AxB:function(){var K=this.K;var B;this.GC.FileName=K.BiE.call(this,this.GC.AgJ
);switch(this.GC.AgJ){case 0:K.Byy.call(this,(C.VP.isPrototypeOf(B=this.GC)?B:null
));break;case 1:K.Byv.call(this,(C.VP.isPrototypeOf(B=this.GC)?B:null));break;case
2:K.ByA.call(this,(C.VP.isPrototypeOf(B=this.GC)?B:null));break;default:throw new
Error(UR+this.GC.AgJ.toFixed());}},Arb:function(){return true;},Aqy:function(){var
K=this.K;switch(this.GC.AgJ){case 0:A._GetAutoObject(A.Device.Device).A5(72,true
,A.jV,0,[this,K.A21]);break;case 1:A._GetAutoObject(A.Device.Device).A5(90,true,
A.jV,0,[this,K.A21]);break;case 2:A._GetAutoObject(A.Device.Device).A5(99,true,A.
jV,0,[this,K.A21]);break;default:throw new Error(Z2+this.GC.AgJ.toFixed());}},AFA:
function(E){throw new Error(It);},Awm:function(E){this.UpdateAnimalIdAutoGenerationMethod(
E);},AFC:function(E){this.UpdateShutdownTimer(E);},Asp:function(G){this.Awo(W2);
this.Ar8(Z3);this.Ar7(W3);this.Ar6(Z4);this.Ar9(Z5);},Ar7:function(E){this.UpdateWeightGainsHighString(
E);},Ar8:function(E){this.UpdateWeightGainsLowString(E);},Awo:function(E){this.UpdateAnimalTypesWeightGainsString(
E);},Ar6:function(E){this.UpdateWeightGainsAverageString(E);},Ar9:function(E){this.
UpdateWeightValueBirthString(E);},AwB:function(E){this.UpdateEvaluationAnimalType(
E);},Aw2:function(E){this.UpdateStartScreen(E);},ADP:function(){return 1;},ADQ:function(
){return 1;},AFm:function(E){this.UpdateMaximumAgeNewOnFarm(E);},Aw8:function(E){
this.UpdateTransponderAssignmentIdChangeMethod(E);},Nf:function(E){this.UpdateWhereAbouts(
E);},ArB:function(E){this.UpdateActiveMassRecordingFields(E);},ArC:function(E){this.
UpdateActiveMassRecordingFieldsOrder(E);},Asm:function(G){this.ArB(A.jV);this.ArC(
US);},AFk:function(E){this.UpdateMassRecordingDateOfBirthMandatory(E);},Ajy:function(
){A._GetAutoObject(C.Acn).AEN(true);return true;},Aqk:function(){var B;A._GetAutoObject(
C.Acn).Aqk(this);return true;},Aqj:function(){var B;A.pe([B=A._GetAutoObject(C.Acn
),B.Aqj],this);return true;},AuM:function(){var B;A.pe([B=A._GetAutoObject(C.Acn
),B.Bg8],this);return true;},AwO:function(E){this.UpdateMaxWeightValuePrecision(
E);},AwV:function(E){this.UpdateNoNaisIdListActions(E);},ResetNoNaisIdListActions:
function(G){this.AwV(W4);},AwW:function(E){this.UpdateNoTransponderListActions(E
);},ResetNoTransponderListActions:function(G){this.AwW(O3);},Axc:function(E){this.
UpdateYoungNoTransponderListActions(E);},ResetYoungNoTransponderListActions:function(
G){this.Axc(O3);},Aw9:function(E){this.UpdateTransponderUnlinkIdChangeMethod(E);
},Asl:function(AoA){this.GC.E5();this.GC.AgJ=AoA;this.GC.Fb(1);this.GC.Fb(2);this.
AxB();},BBt:function(G){switch(this.Ii){case 34:case 35:case 32:case 45:case 49:
case 55:case 80:{this.UpdateScanTransponder(12310020,1,0);this.UpdateScanState(2
);}break;case 15:break;default:this.UpdateScanState(4);}},Bf0:function(G){var K=
this.K;var B;if((this.ScanState===1)&&K.Aug.AGD)K.Ai0.AnS(this);A.ab5("%s",Z6);}
,BBK:function(G){var K=this.K;var B;if((this.MeasureState===1)&&K.Aug.Axw)K.AaM.
AnS(this);},BCr:function(G){this.UpdateMeasureState(3);},ATM:function(G){var K=this.
K;var B;A.zX([B=A._GetAutoObject(A.Device.Helper),B.AKZ],[B=K.Aug,B.A8U,B.ATm],0
);this.R0.AEZ(A._GetAutoObject(A.Device.Helper).A6E(8));this.Sz.AEZ(A._GetAutoObject(
A.Device.Helper).A6E(8));},A_8:function(G){var AzG=A._NewObject(A.Device.AxA,0);
AzG.OnSetTimestamp(1711385184);AzG.AFi(1);AzG.AFo(0);AzG.AFx(0);this.Sz=AzG;var Azb=
A._NewObject(A.Device.AxA,0);Azb.OnSetTimestamp(1711385184);Azb.AFi(1);Azb.AFo(0
);Azb.AFx(4);this.R0=Azb;var AlP=A._NewObject(A.Device.Avp,0);AlP.AFf(1);AlP.AFg(
0);AlP.AFe(0);AlP.AFL(1);AlP.AFM(0);AlP.AFK(0);AlP.OnSetTimestamp(1711385184);this.
QZ=AlP;var Amg=A._NewObject(A.Device.Avp,0);Amg.AFf(1);Amg.AFg(0);Amg.AFe(0);Amg.
AFL(1);Amg.AFM(0);Amg.AFK(0);Amg.OnSetTimestamp(1711385184);this.SY=Amg;this.AhG=
A.aaR(A.acf.Unknown);},ByT:function(aFilename,aMimeType,aContent){{var bb=new Blob([
aContent],{type:aMimeType});var a=document.createElement('a');a.download=aFilename;
a.href=window.URL.createObjectURL(bb);a.click();}},Byy:function(AcY){var K=this.
K;var B;var Ac$=O4;var Cy=A._NewObject(A.Device.Animal,0);var O;var Al9=0;for(O=
0;O<A._GetAutoObject(A.Device.Device).An.B9();O++){Cy.E3(O,A._GetAutoObject(A.Device.
Device).An);if(Cy.IsRegistrationNoticePending&&(Cy.NaisId>0)){Ac$=Ac$+(((((((((((((((((
K.Apf.call(this,A._GetAutoObject(A.Device.Device).PV)+String.fromCharCode(0x3B))+
K.Apf.call(this,Cy.NaisId))+String.fromCharCode(0x3B))+K.A1V.call(this,Cy.DateOfBirth
))+String.fromCharCode(0x3B))+K.BcY.call(this,Cy.Breed))+String.fromCharCode(0x3B
))+K.BcX.call(this,Cy.Gender))+String.fromCharCode(0x3B))+K.ByY.call(this,Cy.EaseOfDelivery
))+String.fromCharCode(0x3B))+K.BcZ.call(this,Cy.WhereAbouts))+String.fromCharCode(
0x3B))+K.By1.call(this,Cy.BirthType))+String.fromCharCode(0x3B))+K.Apf.call(this
,Cy.NaisIdMother))+L1);Al9++;}}AcY.Au2=Ac$;AcY.AGl=Al9;AcY.Fb(3);},Apf:function(
Rq){if(!Rq)return A.jV;return Rq.toFixed();},A1V:function(AyR){var Au=A._NewObject(
A.Core.Bs,0);Au.Initialize(AyR);return Au.Format(Rl);},BcY:function(AcX){if(!AcX
)return A.jV;return A._GetAutoObject(A.Device.Converter).A5e(AcX).toFixed();},BcX:
function(L4){var result=A.jV;switch(L4){case 0:result=W5;break;case 1:result=W6;
break;case 2:result=A.jV;break;default:A.ab5("%s",UT+L4.toFixed());}return result;
},ByY:function(AI1){if(!AI1)return A.jV;return AI1.toFixed();},BcZ:function(AfJ){
if(!AfJ)return A.jV;return AfJ.toFixed();},By1:function(Ath){return(Ath+1).toFixed(
);},A21:function(G){var K=this.K;var B;var As=(A.Device.PopupContext.isPrototypeOf(
G)?G:null);if(!As)return;if(As.PopupState===7){K.ByT.call(this,this.GC.FileName,
Z7,(C.VP.isPrototypeOf(B=this.GC)?B:null).Au2);this.GC.E5();}else if(As.PopupState===
8)this.GC.E5();},Byv:function(AcY){var K=this.K;var B;var Ac$=Z8;var Cy=A._NewObject(
A.Device.Animal,0);var O;var Al9=0;for(O=0;O<A._GetAutoObject(A.Device.Device).An.
B9();O++){var Ay9=A.jV;if(Cy.Ara())Ay9=K.By3.call(this,Cy.FirstBodyWeight);Cy.E3(
O,A._GetAutoObject(A.Device.Device).An);Ac$=Ac$+(((((((((((K.Apf.call(this,Cy.NaisId
)+String.fromCharCode(0x3B))+K.ByZ.call(this,Cy.VisualId))+String.fromCharCode(0x3B
))+K.Apf.call(this,Cy.TransponderId))+String.fromCharCode(0x3B))+K.ByX.call(this
,Cy.DateOfBirth))+String.fromCharCode(0x3B))+K.By2.call(this,Cy.Gender))+String.
fromCharCode(0x3B))+Ay9)+L1);Al9++;}AcY.Au2=Ac$;AcY.AGl=Al9;AcY.Fb(3);},BiE:function(
AoA){var AJU=A.jV;var Ac=A._NewObject(A.Core.Bs,0);Ac.Initialize(A._GetAutoObject(
A.Device.Helper).Dv());switch(AoA){case 0:AJU=Ac.Format(W7);break;case 1:AJU=Ac.
Format(W8);break;case 2:AJU=Ac.Format(S_);break;default:throw new Error(UR+AoA.toFixed(
));}return AJU;},ByZ:function(Rq){return Rq.toFixed();},By2:function(L4){var result=
A.jV;switch(L4){case 0:result=UU;break;case 1:result=UV;break;case 2:result=AcK;
break;default:A.ab5("%s",UT+L4.toFixed());}return result;},By3:function(ML){if(ML<=
0)return A.jV;return A._GetAutoObject(A.Device.Converter).Ak7(ML);},ByX:function(
AyR){var Au=A._NewObject(A.Core.Bs,0);Au.Initialize(AyR);return Au.Format(S$);},
ByA:function(AcY){var K=this.K;var B;var Ac$=Z9;var Cy=A._NewObject(A.Device.Animal
,0);var O;var Al9=0;for(O=0;O<A._GetAutoObject(A.Device.Device).An.B9();O++){Cy.
E3(O,A._GetAutoObject(A.Device.Device).An);if(Cy.IsRegistrationNoticePending&&(Cy.
NaisId>0)){Ac$=Ac$+(((((((((((((K.Apf.call(this,Cy.NaisId)+String.fromCharCode(0x3B
))+K.A1V.call(this,A._GetAutoObject(A.Device.Helper).Dv()))+String.fromCharCode(
0x3B))+K.A1V.call(this,Cy.DateOfBirth))+String.fromCharCode(0x3B))+K.BcX.call(this
,Cy.Gender))+String.fromCharCode(0x3B))+K.BcZ.call(this,Cy.WhereAbouts))+String.
fromCharCode(0x3B))+K.BcY.call(this,Cy.Breed))+String.fromCharCode(0x3B))+K.Apf.
call(this,A._GetAutoObject(A.Device.Device).PV))+L1);Al9++;}}AcY.Au2=Ac$;AcY.AGl=
Al9;AcY.Fb(3);},_Init:function(aArg){var K=this.K;A.acl.Gk._Init.call(K.Ai0={I:this
},0);A.acl.Gk._Init.call(K.AaM={I:this},0);K.__proto__=C.DeviceClass;this.Awq(100
);this.Anx(1);this.ArO(200);this.ArN(100);this.ArU(276000912345678);this.ArT(276000923456789
);this.ArP(500);this.ArV(276000901234567);this.NZ(1);K.Ai0.HM(1);K.Ai0.Fp(1000);
K.AaM.WC(0);K.AaM.HM(1);K.AaM.Fp(750);K.AaM.B1=50000;this.GC=A._NewObject(C.VP,0
);K.Ai0.SA=[this,K.BBt];K.Aug=A._GetAutoObject(C.Uz);K.AaM.SA=[this,K.BCr];K.AaM.
Q=[this,this.AEC,this.AIP];K.Init.call(this,aArg);A.h7++;},_Done:function(){var K=
this.K;K.__proto__=null;K.Ai0._Done();K.AaM._Done();A.h7--;},_ReInit:function(){
var K=this.K;K.Ai0._ReInit();K.AaM._ReInit();K.CP.call(this);},_Mark:function(D){
var B;if((B=this.Aug)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Ai0)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.AaM)._cycle!=D)B._Mark(B._cycle=D);},_variants:
function(){return A.aco.DeviceClass._variants();},_className:"DeviceSimulation::DeviceClass"
};C.AGZ={A4:0,_Init:function(aArg){C.Wq._Init.call(this,aArg);this.__proto__=C.AGZ;
},_className:"DeviceSimulation::UInt8"};C.AGX={A4:0,_Init:function(aArg){C.Wq._Init.
call(this,aArg);this.__proto__=C.AGX;},_className:"DeviceSimulation::UInt32"};C.
HelperClass={A38:0,AFD:function(E){var K=this.K;K.A38=K.A38+(E-this.Dv());A.Device.
HelperClass.Bau.call(this,E);},Dv:function(){var K=this.K;return A.Device.HelperClass.
Baq.call(this)+K.A38;},_Init:function(aArg){var K=this.K;K.__proto__=C.HelperClass;
A.h7++;},_Done:function(){var K=this.K;K.__proto__=null;A.h7--;},_ReInit:function(
){},_Mark:function(D){},_variants:function(){return this;},_className:"DeviceSimulation::HelperClass"
};C.A$c={Axw:true,AGD:false,ATl:function(E){if(this.AGD===E)return;this.AGD=E;A.
abo([this,this.A8T,this.ATl],0);},A8T:function(){return this.AGD;},ATm:function(
E){if(this.Axw===E)return;this.Axw=E;A.abo([this,this.A8U,this.ATm],0);},A8U:function(
){return this.Axw;},_Init:function(aArg){this.__proto__=C.A$c;A.h7++;},_Done:function(
){this.__proto__=null;A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((
B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:
"DeviceSimulation::SimulationConfigClass"};C.Uz={_Init:function(){C.A$c._Init.call(
this,0);},_ReInit:function(){},_variants:function(){return A.aco.Uz._variants();
},_this:null};C.PopupContext={EV:1,Id:0,_Init:function(aArg){this.__proto__=C.PopupContext;
A.h7++;},_Done:function(){this.__proto__=null;A.h7--;},_ReInit:function(){},_Mark:
function(D){var B;if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:
0,_observers:null,_className:"DeviceSimulation::PopupContext"};C.Rating={Ch:function(
AH){var HD=A.Device.Rating.Baw.call(this,AH);if(HD){var Rx=A._GetAutoObject(A.Device.
Device).An;var Ad=A._GetAutoObject(A.Device.Device).An.LS(0,this.AnimalId);if(Ad
!==-1){var Jn=Rx.Oy();if(Jn<=0)A.ab5("%s",Afz);else{var Cy=A._NewObject(A.Device.
Animal,0);Cy.E3(Ad,Rx);if((this.Temperature>0)&&(Cy.TimestampLastTemperature<this.
Timestamp)){Rx.A_7(Ad,5,this.Temperature);Rx.AkP(Ad,17,this.RatingTemperature);Rx.
Ack(Ad,30,this.Timestamp);}if(this.BodyWeight>0){if(Cy.TimestampLastWeighing<=this.
Timestamp){Rx.AUn(Ad,18,this.BodyWeight);Rx.Ack(Ad,19,this.Timestamp);}if(!Cy.TimestampFirstWeighing||(
Cy.TimestampFirstWeighing>=this.Timestamp)){Rx.AUn(Ad,23,this.BodyWeight);Rx.Ack(
Ad,24,this.Timestamp);Rx.Hn(Ad,25,this.Id);}}if(A._GetAutoObject(A.Device.Helper
).AGa(this)){var LP=A._GetAutoObject(A.Device.Helper).AC2(this);Rx.AkP(Ad,13,LP);
Rx.Ack(Ad,31,this.Timestamp);}Rx.OA(Jn);}}}return HD;},_Init:function(aArg){var K=
this.K;K.__proto__=C.Rating;A.h7++;},_Done:function(){var K=this.K;K.__proto__=null;
A.h7--;},_ReInit:function(){},_Mark:function(D){},_variants:function(){return this;
},_className:"DeviceSimulation::Rating"};C.PW={Gf:A.abi(512,null,null),Ph:0,AJo:
0,AK8:0,A3$:A.abi(10,0,{0:3600,1:3750,2:3900,3:4200,4:3780,5:3600,6:3900,7:4010,
8:4020,9:4030}),AKE:0,A3F:A.abi(10,0,{0:5,1:4,2:3,3:1,4:2,5:1,6:1,7:1,8:1,9:1}),
BdQ:512,Az9:-1,A0$:A.abi(15,0,{0:2,1:2,2:2,3:2,4:2,5:3,6:3,7:3,8:3,9:3,10:1,11:1
,12:1,13:1,14:1}),Af1:false,CF:function(Ad,A3){var Bf=this.TS(Ad);if(!!Bf)return Bf.
CF(A3);return 0;},VY:function(Ad,A3){var Bf=this.TS(Ad);if(!!Bf)return Bf.VY(A3);
return A.jV;},H2:function(Ad,A3){var Bf=this.TS(Ad);if(!!Bf)return Bf.H2(A3);return false;
},VZ:function(Ad,A3){var Bf=this.TS(Ad);if(!!Bf)return Bf.VZ(A3);return 0;},Sk:function(
Ad,A3){var Bf=this.TS(Ad);if(!!Bf)return Bf.Sk(A3);return 0;},Oy:function(){if(this.
Af1)throw new Error(Z_);this.Af1=true;return 12345;},OA:function(AoM){if(!this.Af1
)throw new Error(W9);if(AoM!==12345)throw new Error(Z$);this.Af1=false;return true;
},YB:function(){return this.A4E(A._NewObject(C.AGk,0));},ZH:function(Ad,A3,CZ){var
Bf=this.TS(Ad);if(!!Bf)return Bf.ZH(A3,CZ);return false;},Hn:function(Ad,A3,CZ){
var Bf=this.TS(Ad);if(!!Bf)return Bf.Hn(A3,CZ);return false;},ZG:function(Ad,A3,
CZ){var Bf=this.TS(Ad);if(!!Bf)return Bf.ZG(A3,CZ);return false;},N5:function(Ad
,A3,CZ){var Bf=this.TS(Ad);if(!!Bf)return Bf.N5(A3,CZ);return false;},ZF:function(
Ad,A3,CZ){var Bf=this.TS(Ad);if(!!Bf)return Bf.ZF(A3,CZ);return false;},OnSetId:
function(E){if(this.Id===E)return;this.Id=E;this.Bcx();switch(this.Id){case 0:{this.
BdQ=256;A.pe([this,this.Bwo],this);}break;case 1:A.pe([this,this.Bwq],this);break;
case 3:A.pe([this,this.Bwn],this);break;case 4:A.pe([this,this.Bwp],this);break;
case 2:break;default:throw new Error(W_+this.Id.toFixed());}},B9:function(){return this.
Ph;},KN:function(Ad,A3){var Bf=this.TS(Ad);if(!!Bf)return Bf.KN(A3);return 0;},Uy:
function(Ad,A3,CZ){var Bf=this.TS(Ad);if(!!Bf)return Bf.Uy(A3,CZ);return false;}
,E5:function(){this.Bcx();return true;},HI:function(){return this.BdQ;},A4E:function(
Ad){if(this.Ph>=512)throw new Error(AhS);this.Gf.Set(this.Ph,Ad);this.Ph=this.Ph+
1;switch(this.Id){case 0:{this.Az9=this.Ph;this.Hn(this.Ph-1,0,this.Az9);}break;
case 1:{this.Az9=this.Ph-1;this.Hn(this.Ph-1,0,this.Az9);}break;default:;}A.pe([
this,this.Akk],this);return this.Ph-1;},TS:function(aIndex){if((aIndex<0)||(aIndex>=
512))return null;return this.Gf.Get(aIndex);},Bcx:function(){var O;for(O=0;O<512;
O=O+1)this.Gf.Set(O,null);this.Ph=0;this.AJo=0;this.AKE=0;this.AK8=0;A.pe([this,
this.Akk],this);},AJ_:function(){this.AJo=(this.AJo+1)%15;return this.A0$.Get(this.
AJo);},A1Z:function(){this.AK8=(this.AK8+1)%10;return this.A3$.Get(this.AK8);},AJW:
function(G){if(this.K&&this.K.AJW)return this.K.AJW.apply(this,arguments);else return C.
PW.Bww.apply(this,arguments);},Bww:function(G){var B;var Oj=true;this.A0(276000312310001
,10,1,A._GetAutoObject(A.Device.Helper).AhM(12),0,1,true,true,false,true,39000,0
,0,false,0,false,0,0,0,0,true,true,A._GetAutoObject(A.Device.Device).A1,A._GetAutoObject(
A.Device.Device).AF);this.A0(12310020,20,12,A._GetAutoObject(A.Device.Helper).AhM(
12),0,0,false,false,true,true,36500,0,0,false,0,false,0,0,0,0,true,true,A._GetAutoObject(
A.Device.Device).A1,A._GetAutoObject(A.Device.Device).AF);this.A0(276000312310021
,10,1,A._GetAutoObject(A.Device.Helper).AhM(9),0,0,true,false,false,true,37200,0
,0,false,0,false,0,0,0,0,true,true,A._GetAutoObject(A.Device.Device).A1,A._GetAutoObject(
A.Device.Device).AF);this.A0(276000312310022,20,2,A._GetAutoObject(A.Device.Helper
).AhM(830),0,1,false,false,false,true,41200,A._GetAutoObject(A.Device.Helper).AhM(
1),1,true,1,false,0,0,0,0,true,true,A._GetAutoObject(A.Device.Device).A1,A._GetAutoObject(
A.Device.Device).AF);this.A0(276000312310023,20,2,A._GetAutoObject(A.Device.Helper
).AhM(1200),0,1,false,false,false,true,43500,A._GetAutoObject(A.Device.Helper).AhM(
8),2,false,1,false,0,0,0,0,true,true,A._GetAutoObject(A.Device.Device).A1,A._GetAutoObject(
A.Device.Device).AF);this.A0(276000312310026,20,2,A._GetAutoObject(A.Device.Helper
).AhM(8),0,0,true,false,false,true,34000,0,0,false,0,false,0,0,0,0,true,true,A._GetAutoObject(
A.Device.Device).A1,A._GetAutoObject(A.Device.Device).AF);var O;var Bga=0;for(O=
1;O<=7;O=O+1){Bga=3680+(20*O);Oj=Bga>3800;this.A0(276000312310050+(((B=O)<0)?B+0x10000000000000000:
B),30+(O%3),3,A._GetAutoObject(A.Device.Helper).AhM(7-O),0,1,Oj,false,false,true
,36000+(O*900),0,0,false,0,true,0,0,0,0,true,true,A._GetAutoObject(A.Device.Device
).A1,A._GetAutoObject(A.Device.Device).AF);}},Bwo:function(s){this.AJW(s);},AJY:
function(G){if(this.K&&this.K.AJY)return this.K.AJY.apply(this,arguments);else return C.
PW.Bwy.apply(this,arguments);},Bwy:function(G){var Ac=A._GetAutoObject(A.Device.
Helper).Dv();var O;Ac=Ac-2678400;var Aiz;var BcP;for(O=0;O<32;O=O+1){var A1J=this.
Bzd();for(;A1J>0;A1J=A1J-1){Aiz=this.A1Z();BcP=A._GetAutoObject(A.Device.Converter
).AsE(0,Aiz);this.AG(Ac,12310020,Aiz,BcP,this.AJ_(),this.AJ_(),this.AJ_(),this.AJ_(
),0);}Ac=Ac+86400;}Ac=Ac-86400;this.AG(Ac,12310020,0,0,0,0,0,0,43700);this.AG(Ac-
86400,276000312310001,0,0,0,0,0,0,49800);this.AG(Ac,276000312310001,0,0,0,0,0,0,
51000);Aiz=this.A1Z();this.AG(Ac,276000312310001,Aiz,A._GetAutoObject(A.Device.Converter
).AsE(0,Aiz),1,3,3,3,0);Aiz=this.A1Z();this.AG(Ac-86400,276000312310022,3800,A._GetAutoObject(
A.Device.Converter).AsE(1,3800),2,3,3,3,0);this.AG(Ac,276000312310022,Aiz,A._GetAutoObject(
A.Device.Converter).AsE(1,Aiz),2,3,3,3,0);},Bwq:function(s){this.AJY(s);},A0:function(
J4,BwX,Bxc,BbB,Ath,L4,Bw5,Bw_,Bw7,Bw8,ML,BwI,Bxa,Bw6,En,Bw9,AcX,AI1,AfJ,Bxh,Bzw,
Bzx,BwN,Bxj){var Cy=A._NewObject(A.Device.Animal,0);Cy.Gp();Cy.Axb(0);Cy.Ae7(0);
Cy.Un(false);Cy.Aky(false);if(Bzx)Cy.PT(J4);if(Bzw)Cy.Nd(J4);Cy.SI(A._GetAutoObject(
A.Device.Helper).Si(J4,Bxj&0xFF,BwN&0xFF)|0);Cy.Ab1(BwX);Cy.Any(Bxc);Cy.Q4(BbB);
Cy.Aks(Ath);Cy.JS(L4);Cy.AnQ(Bw5);Cy.AGw(Bw_);Cy.Ae3(Bw8);Cy.Un(Bw7);Cy.ArQ(Bw6);
Cy.AwK(Bxa);Cy.Awv(BwI);Cy.EB(En);Cy.Ae4(Bw9);Cy.NZ(AcX);Cy.Aku(AI1);Cy.Nf(AfJ);
Cy.AnA(Bxh);Cy.Ch(this);if(ML>0)A._GetAutoObject(C.Asf).AG(BbB,J4,0,0,0,0,0,0,ML
);},AG:function(L3,AcV,AoK,Bxs,BwR,BwS,BwA,Bxu,BwC){var B0=A._NewObject(A.Device.
Rating,0);B0.Gp();var Bcf=A._GetAutoObject(C.Ams).AOs(26,AcV);if(Bcf>=0)B0.OnSetAnimalId(
A._GetAutoObject(C.Ams).CF(Bcf,0));else A.ab5("%s%U",KY,AcV);B0.OnSetTimestamp(L3
);B0.OnSetTemperature(AoK);B0.OnSetRatingTemperature(Bxs);B0.OnSetFaeces(BwR);B0.
OnSetFeed(BwS);B0.OnSetAppearance(BwA);B0.OnSetRespiratory(Bxu);B0.OnSetBodyWeight(
BwC);B0.Ch(this);},A6f:function(aColumn,A_){var O;for(O=0;O<this.Ph;O=O+1)if(this.
Gf.Get(O).CF(aColumn)===A_)return O;return-1;},Bzd:function(){this.AKE=(this.AKE+
1)%10;return this.A3F.Get(this.AKE);},AJV:function(G){if(this.K&&this.K.AJV)return this.
K.AJV.apply(this,arguments);else return C.PW.Bwv.apply(this,arguments);},Bwv:function(
G){this.AlJ(10,AcL);this.AlJ(20,Lv);this.AlJ(30,AhT);this.AlJ(31,An$);this.AlJ(32
,Oa);},Bwn:function(s){this.AJV(s);},AlJ:function(J4,BwY){var AJi=A._NewObject(A.
Device.AnimalGroup,0);AJi.Gp();AJi.OnSetId(J4);AJi.AE8(BwY);AJi.Ch(this);},Abo:function(
){return this.Az9;},AOs:function(aColumn,A_){var O;for(O=0;O<this.Ph;O=O+1)if(this.
Gf.Get(O).KN(aColumn)===A_)return O;return-1;},AJX:function(G){if(this.K&&this.K.
AJX)return this.K.AJX.apply(this,arguments);else return C.PW.Bwx.apply(this,arguments
);},Bwx:function(G){this.Aav(2016,216,6);this.Aav(2017,217,7);this.Aav(2018,218,
8);this.Aav(2019,219,9);this.Aav(2020,220,10);this.Aav(2021,221,11);},Bwp:function(
s){this.AJX(s);},Aav:function(Ac4,BwM,BwL){var U8=A._NewObject(A.Device.CalfDeregistrations
,0);U8.Gp();U8.AkD(Ac4);U8.Awx(BwM);U8.Aww(BwL);U8.Ch(this);},_Init:function(aArg
){A.Device.ITable._Init.call(this,aArg);(this.Gf=[]).__proto__=C.PW.Gf;(this.A3$=[
]).__proto__=C.PW.A3$;(this.A3F=[]).__proto__=C.PW.A3F;(this.A0$=[]).__proto__=C.
PW.A0$;this.__proto__=C.PW;var J2=this._variants();if(J2){this.K={};J2._Init.call(
this,aArg);}},_Done:function(){if(this.K)this.K._Done.call(this);this.__proto__=
A.Device.ITable;A.Device.ITable._Done.call(this);},_ReInit:function(){A.Device.ITable.
_ReInit.call(this);if(this.K)this.K._ReInit.call(this);},_Mark:function(D){var B;
A.Device.ITable._Mark.call(this,D);A.aa6(this.Gf,D);if(this.K)this.K._Mark(D);},
_variants:function(){return A.aco.PW._variants();},K:null,_className:"DeviceSimulation::TableData"
};C.Ams={_Init:function(){C.PW._Init.call(this,0);this.OnSetId(0);},_ReInit:function(
){},_variants:function(){return this;},_this:null};C.AuE={_Init:function(){C.PW.
_Init.call(this,0);this.OnSetId(3);},_ReInit:function(){},_variants:function(){return this;
},_this:null};C.Asf={_Init:function(){C.PW._Init.call(this,0);this.OnSetId(1);},
_ReInit:function(){},_variants:function(){return this;},_this:null};C.GL={AlD:A.
abi(512,null,null),E9:null,Apc:0,CF:function(Ad,A3){var Bf=this.Aat(Ad);if(!!Bf)
return Bf.CF(A3);return 0;},VY:function(Ad,A3){var Bf=this.Aat(Ad);if(!!Bf)return Bf.
VY(A3);return A.jV;},H2:function(Ad,A3){var Bf=this.Aat(Ad);if(!!Bf)return Bf.H2(
A3);return false;},OnSetId:function(E){if(this.Id===E)return;this.Id=E;switch(this.
Id){case 0:this.AFW(A._GetAutoObject(C.Ams));break;case 1:this.AFW(A._GetAutoObject(
C.Asf));break;case 3:this.AFW(A._GetAutoObject(C.AuE));break;case 4:this.AFW(A._GetAutoObject(
C.AuP));break;case 2:break;default:throw new Error(W_+this.Id.toFixed());}},B9:function(
){if(!!this.Filter)return this.Apc;else if(!!this.E9)return this.E9.Ph;return 0;
},Bk:function(E){A.Device.ITable.Bk.call(this,E);this.A09(this);},VZ:function(Ad
,A3){var Bf=this.Aat(Ad);if(!!Bf)return Bf.VZ(A3);return 0;},Sk:function(Ad,A3){
var Bf=this.Aat(Ad);if(!!Bf)return Bf.Sk(A3);return 0;},Oy:function(){if(!!this.
E9)return this.E9.Oy();return-1;},OA:function(AoM){var HD=false;if(!!this.E9)HD=
this.E9.OA(AoM);if(HD)A.pe([this,this.A09],this);return HD;},YB:function(){if(!!
this.Filter)throw new Error(W$+A._GetAutoObject(A.Device.Converter).Bij(this.Id,
this.Filter));if(!!this.E9)return this.E9.A4E(A._NewObject(C.AGk,0));return-1;},
ZH:function(Ad,A3,CZ){if(!this.E9.Af1)throw new Error(Aaa);var Bf=this.Aat(Ad);if(
!!Bf)return Bf.ZH(A3,CZ);return false;},Hn:function(Ad,A3,CZ){if(!this.E9.Af1)throw new
Error(Aaa);var Bf=this.Aat(Ad);if(!!Bf)return Bf.Hn(A3,CZ);return false;},ZG:function(
Ad,A3,CZ){if(!this.E9.Af1)throw new Error(Aaa);var Bf=this.Aat(Ad);if(!!Bf)return Bf.
ZG(A3,CZ);return false;},N5:function(Ad,A3,CZ){if(!this.E9.Af1)throw new Error(Aaa
);var Bf=this.Aat(Ad);if(!!Bf)return Bf.N5(A3,CZ);return false;},ZF:function(Ad,
A3,CZ){if(!this.E9.Af1)throw new Error(Aaa);var Bf=this.Aat(Ad);if(!!Bf)return Bf.
ZF(A3,CZ);return false;},LS:function(aColumn,A_){if(!!this.Filter){var O;for(O=0;
O<this.Apc;O=O+1)if(this.AlD.Get(O).CF(aColumn)===A_)return O;return-1;}else if(
!!this.E9)return this.E9.A6f(aColumn,A_);return-1;},KN:function(Ad,A3){var Bf=this.
Aat(Ad);if(!!Bf)return Bf.KN(A3);return 0;},Uy:function(Ad,A3,CZ){if(!this.E9.Af1
)throw new Error(Aaa);var Bf=this.Aat(Ad);if(!!Bf)return Bf.Uy(A3,CZ);return false;
},AgV:function(aColumn,A_){if(!!this.Filter){var O;for(O=0;O<this.Apc;O=O+1)if(this.
AlD.Get(O).KN(aColumn)===A_)return O;return-1;}else if(!!this.E9)return this.E9.
AOs(aColumn,A_);return-1;},E5:function(){if(!!this.E9)return this.E9.E5();return false;
},AjH:function(aColumn,A_){if(!!this.E9)return this.E9.A6f(aColumn,A_)>=0;return false;
},Aej:function(aColumn,A_){if(!!this.E9)return this.E9.AOs(aColumn,A_)>=0;return false;
},HI:function(){if(!!this.E9)return this.E9.HI();return 0;},Abo:function(){if(!!
this.E9)return this.E9.Abo();return-1;},QI:function(){if(!!this.E9)return this.E9.
Ph;return 0;},A09:function(G){this.A1l();if(!!this.Filter&&!!this.E9){var O;for(
O=0;O<this.E9.B9();O=O+1){var A1N=true;var Av=this.Filter.AOF();var Bf=this.E9.TS(
O);if(!!Bf)while(A1N&&!!Av){A1N=Bf.Bjj(Av);Av=this.Filter.AOK(Av);}else A.ab5("%s"
,((AhU+O.toFixed())+AhV)+this.E9.B9().toFixed());if(A1N){this.AlD.Set(this.Apc,this.
E9.Gf.Get(O));this.Apc=this.Apc+1;}}}A.pe([this,this.Akk],this);},A1l:function(){
var O;for(O=0;O<512;O=O+1)this.AlD.Set(O,null);this.Apc=0;},AFW:function(E){if(this.
E9===E)return;if(!!this.E9)A.z9([this,this.A39],this.E9,0);this.E9=E;if(!!this.E9
){A.zV([this,this.A39],this.E9,0);A.pe([this,this.A39],this);}},A39:function(G){
A.pe([this,this.A09],this);},Aat:function(aIndex){if(!!this.Filter){if((aIndex<0
)||(aIndex>=512))return null;else return this.AlD.Get(aIndex);}else if(!!this.E9
)return this.E9.TS(aIndex);A.ab5("%s",AcM+aIndex.toFixed());return null;},_Init:
function(aArg){A.Device.ITable._Init.call(this,aArg);(this.AlD=[]).__proto__=C.GL.
AlD;this.__proto__=C.GL;},_Mark:function(D){var B;A.Device.ITable._Mark.call(this
,D);A.aa6(this.AlD,D);if((B=this.E9)&&(B._cycle!=D))B._Mark(B._cycle=D);},_className:
"DeviceSimulation::FilteredTable"};C.A$d={KG:null,AdG:null,Ow:null,AML:false,AMM:
true,A33:function(G){switch(A._GetAutoObject(A.Device.Device).SyncState){case 0:{
A._GetAutoObject(A.Device.Device).Ab6(1);this.AdG.Ar(true);}break;case 1:{A._GetAutoObject(
A.Device.Device).Ab6(2);A._GetAutoObject(A.Device.Device).Ar4(A._GetAutoObject(A.
Device.Device).An.QI());this.KG.Fp(A._GetAutoObject(A.Device.Device).Afp*50);this.
KG.B1=A._GetAutoObject(A.Device.Device).Afp;this.KG.Ar(true);}break;case 2:{A._GetAutoObject(
A.Device.Device).Ab6(3);this.AdG.Ar(true);}break;case 3:{A._GetAutoObject(A.Device.
Device).Ab6(4);A._GetAutoObject(A.Device.Device).Ar4(A._GetAutoObject(A.Device.Device
).An.QI());this.KG.Fp(A._GetAutoObject(A.Device.Device).Afp*50);this.KG.B1=A._GetAutoObject(
A.Device.Device).Afp;this.KG.Ar(true);}break;case 4:{A._GetAutoObject(A.Device.Device
).Ab6(5);this.AdG.Ar(true);}break;case 5:A.pe([this,this.Bf4],this);break;case 7:
case 6:break;default:A.ab5("%s%e",UW,A._GetAutoObject(A.Device.Device).SyncState
);}},BAO:function(G){this.AdG.Ar(false);A.pe([this,this.A33],this);},BBT:function(
G){switch(A._GetAutoObject(A.Device.Device).SyncState){case 0:case 6:case 7:{A._GetAutoObject(
A.Device.Device).Ab6(0);A.pe([this,this.A33],this);}break;default:;}},Bf4:function(
G){this.AdG.Ar(false);this.KG.Ar(false);A._GetAutoObject(A.Device.Device).Ab6(0);
},AEN:function(E){if(this.AMM===E)return;this.AMM=E;A.abo([this,this.Bki,this.AEN
],0);},Bki:function(){return this.AMM;},Aqj:function(G){var B;this.Ow.Cw=true;this.
Ow.B1=false;this.Ow.Fp(100);this.Ow.HM(1);this.Ow.Q=[this,this.ASd,this.ASL];A.pe([
B=this.Ow,B.AnS],this);},Bg8:function(G){var B;this.Ow.Cw=true;this.Ow.B1=false;
this.Ow.Fp(400);this.Ow.Um(200);this.Ow.HM(3);this.Ow.Q=[this,this.ASd,this.ASL];
this.AEN(false);A.pe([B=this.Ow,B.AnS],this);},ASL:function(E){if(this.AML===E)return;
this.AML=E;A.abo([this,this.ASd,this.ASL],0);},ASd:function(){return this.AML;},
Aqk:function(G){var B;this.Ow.AnU(this);this.AEN(false);},_Init:function(aArg){A.
acl.Gk._Init.call(this.KG={I:this},0);A.Core.Timer._Init.call(this.AdG={I:this},
0);A.acl.TG._Init.call(this.Ow={I:this},0);this.__proto__=C.A$d;var B;this.KG.HM(
1);this.AdG.PR(2000);this.KG.SA=[this,this.A33];this.KG.Q=[B=A._GetAutoObject(A.
Device.Device),B.ASC,B.AZ$];this.AdG.Mz=[this,this.BAO];A.h7++;},_Done:function(
){this.__proto__=null;this.KG._Done();this.AdG._Done();this.Ow._Done();A.h7--;},
_ReInit:function(){this.KG._ReInit();this.AdG._ReInit();this.Ow._ReInit();},_Mark:
function(D){var B;if((B=this.KG)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AdG)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.Ow)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:
"DeviceSimulation::SimulationHelperClass"};C.Acn={_Init:function(){C.A$d._Init.call(
this,0);},_ReInit:function(){},_variants:function(){return this;},_this:null};C.
AGY={A4:0,_Init:function(aArg){C.Wq._Init.call(this,aArg);this.__proto__=C.AGY;}
,_className:"DeviceSimulation::UInt64"};C.AuP={_Init:function(){C.PW._Init.call(
this,0);this.OnSetId(4);},_ReInit:function(){},_variants:function(){return this;
},_this:null};C.FactoryResetScope={Du:function(){return 1;},_Init:function(aArg){
var K=this.K;K.__proto__=C.FactoryResetScope;this.Cb.Set(0,1);A.h7++;},_Done:function(
){var K=this.K;K.__proto__=null;A.h7--;},_ReInit:function(){},_Mark:function(D){
},_variants:function(){return this;},_className:"DeviceSimulation::FactoryResetScope"
};C.XW={Ad5:null,CC:function(G){var K=this.K;A.ab5("%s",Aoa);K.Ad5.Ar(true);},E4:
function(G){var K=this.K;if(K.Ad5.Bw===true){K.Ad5.Ar(false);A.ab5("%s",Aob);}},
Bka:function(G){var K=this.K;K.Ad5.Ar(false);A._GetAutoObject(A.kR.A9).Ab7(A._GetAutoObject(
A.Device.Device).AxD);},_Init:function(aArg){var K=this.K;A.Core.Timer._Init.call(
K.Ad5={I:this},0);K.__proto__=C.XW;this.AeL.H(Aoc);K.Ad5.PR(1500);this.UA.R(Aod);
this.UA.Z(true);this.AeL.Ax(A.aaL(A.ach.ARn));K.Ad5.Mz=[this,K.Bka];A.h7++;},_Done:
function(){var K=this.K;K.__proto__=null;K.Ad5._Done();A.h7--;},_ReInit:function(
){var K=this.K;K.Ad5._ReInit();},_Mark:function(D){var B;if((B=this.Ad5)._cycle!=
D)B._Mark(B._cycle=D);},_variants:function(){return this;},_className:"DeviceSimulation::BootScreen"
};C.VP={Au2:A.jV,E5:function(){A.Device.VP.E5.call(this);this.Au2=A.jV;},_Init:function(
aArg){A.Device.VP._Init.call(this,aArg);this.__proto__=C.VP;},_className:"DeviceSimulation::DataExportContext"
};
C._Init=function(){C.ADL.__proto__=C.Wq;C.String.__proto__=C.Wq;C.ABS.__proto__=C.
Wq;C.AGZ.__proto__=C.Wq;C.AGX.__proto__=C.Wq;C.PW.__proto__=A.Device.ITable;C.GL.
__proto__=A.Device.ITable;C.AGY.__proto__=C.Wq;C.VP.__proto__=A.Device.VP;};C._ReInit=
function(){var B;if((B=C.Uz._this))B._ReInit(),C.Uz._ReInit.call(B);if((B=C.Ams.
_this))B._ReInit(),C.Ams._ReInit.call(B);if((B=C.AuE._this))B._ReInit(),C.AuE._ReInit.
call(B);if((B=C.Asf._this))B._ReInit(),C.Asf._ReInit.call(B);if((B=C.Acn._this))
B._ReInit(),C.Acn._ReInit.call(B);if((B=C.AuP._this))B._ReInit(),C.AuP._ReInit.call(
B);};C.DH=function(D){var B;if((B=C.Uz._this)&&(B._cycle!=D))B._Done(C.Uz._this=
null);if((B=C.Ams._this)&&(B._cycle!=D))B._Done(C.Ams._this=null);if((B=C.AuE._this
)&&(B._cycle!=D))B._Done(C.AuE._this=null);if((B=C.Asf._this)&&(B._cycle!=D))B._Done(
C.Asf._this=null);if((B=C.Acn._this)&&(B._cycle!=D))B._Done(C.Acn._this=null);if((
B=C.AuP._this)&&(B._cycle!=D))B._Done(C.AuP._this=null);};return C;})();

/* VitalControl demonstration application, © Urban GmbH & Co.KG 2023 */