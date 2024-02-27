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
);if(index.acr)throw new Error("The unit file 'DeviceSimulation.js' included twice!"
);index.acr=(function(){var A=index;var C={};
var Ca="ERROR: access to null Bool data in column [";var BC="]";var EW="Access to inexistent column index: ";
var Hh=", or not enough indexes for store column. You can increase the \'data\' "+
"array size to hold this column.";var I8="Unsupported filter criterion class";var
IJ="Operator not handled:";var OW="1,8";var PW="INFO: Device.StartScan() called.";
var PX="INFO: Device.StopScan() called.";var CL="V0.";var E4=".";var Lq="\n";var
PY="Temp: ";var Ks="Battery: ";var N8="%%";var PZ="Selected animal with row index";
var MB="1,256,2,2048,4096,8192,4,8,16,128,64,32,1024,262144,16384,131072,512";var
ST="1,2";var UC="0,1,2";var ZE="3900,3950,4000";var WG="4050,4100,4150";var IK="Read only";
var UD="Unknown data export type: ";var ZF="Unhandled Device::DataExportType: ";
var WH="0,2,1";var ZG="650,150,700";var WI="800,200,900";var ZH="800,200,850";var
ZI="40000,4000,0";var UE="32,7,34,18,23,14";var WJ="16384";var Q9="1,1024";var ZJ=
"1,256,1024";var OX="Simulate Scan";var Q_="BNR15;LOM;GEB_DATR;RASSE;GESCHL_R;GEB_VERL;VERBLEIB;MEHRLADR;LOM_MUT\n";
var WK="%d.%m.%Y";var WM="1";var WN="2";var WO="Unknown gender: ";var ZK="text/csv";
var WQ="National-ID-Animal;Farm-ID-Animal;Transponder-ID;DateOfBirth;Sex;BirthWeight-Kg\n";
var WR="hit-geburt-%d-%m-%Y_%H-%M.csv";var SU="animals-%d-%m-%Y_%H-%M.csv";var ZL=
"hit-zugang-%d-%m-%Y_%H-%M.csv";var ZM="herde-zugang-%d-%m-%Y_%H-%M.csv";var Acq=
"M";var UF="F";var ZN="?";var Afe="%Y-%m-%d";var ZO="BNR15;LOM;ZUGA_DAT\n";var WS=
"Ohrnummer;Geburtsdatum;Geschlecht;Nutzung;Rasse;Zugangsdatum;Transponder\n";var
ZP="ERROR: Cannot start transaction";var ZQ="Nested transactions are not allowed.";
var Aff="Transaction not opened.";var JP="Wrong transaction ID.";var Acr="Unhandled TableId:";
var Lr="Maximum number of rows reached.";var Ahz="Animal row not found in DeviceSimulation::AnimalTableData. NaisId";
var AnQ="10";var N9="20";var WT="30";var AnR="31";var AhA="32";var AhB="Severe: filter set when inserting row into table: ";
var Acs="ERROR: Row not found with index [";var UG="] while Rows Count = ";var AnS=
"ERROR: trying to access an inexistent row with Index=";var AnT="Invalid Device::SyncState";
var AnU="Forwarding to home screen after 500 milliseconds ...";var AnV="Forwarding to home screen canceled...";
var Afg=[0,58,240,208];var AnW="VitalControl\nstarting up \u2026";
C.Table={GC:null,Init:function(aArg){var K=this.K;A.zV([this,this.Aj3],K.GC,0);},
CC:function(Ad,A0){var K=this.K;return K.GC.CC(Ad,A0);},VA:function(Ad,A0){var K=
this.K;return K.GC.VA(Ad,A0);},HW:function(Ad,A0){var K=this.K;return K.GC.HW(Ad
,A0);},OnSetId:function(E){var K=this.K;if(this.Id===E)return;this.Id=E;K.GC.OnSetId(
E);},Cb:function(){var K=this.K;return K.GC.Cb();},Bi:function(E){var K=this.K;A.
Device.ITable.Bi.call(this,E);K.GC.Bi(E);},VB:function(Ad,A0){var K=this.K;return K.
GC.VB(Ad,A0);},R7:function(Ad,A0){var K=this.K;return K.GC.R7(Ad,A0);},Ov:function(
){var K=this.K;return K.GC.Ov();},Ox:function(Aop){var K=this.K;return K.GC.Ox(Aop
);},Yj:function(){var K=this.K;return K.GC.Yj();},Zk:function(Ad,A0,CV){var K=this.
K;return K.GC.Zk(Ad,A0,CV);},He:function(Ad,A0,CV){var K=this.K;return K.GC.He(Ad
,A0,CV);},Zj:function(Ad,A0,CV){var K=this.K;return K.GC.Zj(Ad,A0,CV);},Mv:function(
Ad,A0,CV){var K=this.K;return K.GC.Mv(Ad,A0,CV);},Zi:function(Ad,A0,CV){var K=this.
K;return K.GC.Zi(Ad,A0,CV);},K_:function(aColumn,A3){var K=this.K;return K.GC.K_(
aColumn,A3);},LN:function(Ad,A0){var K=this.K;return K.GC.LN(Ad,A0);},Sx:function(
Ad,A0,CV){var K=this.K;return K.GC.Sx(Ad,A0,CV);},Agy:function(aColumn,A3){var K=
this.K;return K.GC.Agy(aColumn,A3);},Hd:function(){var K=this.K;return K.GC.Hd();
},Ajr:function(aColumn,A3){var K=this.K;return K.GC.Ajr(aColumn,A3);},AdZ:function(
aColumn,A3){var K=this.K;return K.GC.AdZ(aColumn,A3);},HA:function(){var K=this.
K;return K.GC.HA();},Aa3:function(){var K=this.K;return K.GC.Aa3();},Qw:function(
){var K=this.K;return K.GC.Qw();},_Init:function(aArg){var K=this.K;C.GC._Init.call(
K.GC={I:this},0);K.__proto__=C.Table;K.Init.call(this,aArg);A.h7++;},_Done:function(
){var K=this.K;K.__proto__=null;K.GC._Done();A.h7--;},_ReInit:function(){var K=this.
K;K.GC._ReInit();},_Mark:function(D){var B;if((B=this.GC)._cycle!=D)B._Mark(B._cycle=
D);},_variants:function(){return this;},_className:"DeviceSimulation::Table"};C.
AFM={S4:A.abi(42,null,null),CC:function(aColumn){var B;this.Z3(aColumn);var Aq=(
C.AC8.isPrototypeOf(B=this.S4.Get(aColumn))?B:null);if(!!Aq)return Aq.A7;return 0;
},VA:function(aColumn){var B;this.Z3(aColumn);var Aq=(C.String.isPrototypeOf(B=this.
S4.Get(aColumn))?B:null);if(!!Aq)return Aq.A7;return A.jV;},HW:function(aColumn){
var B;this.Z3(aColumn);var Aq=(C.ABc.isPrototypeOf(B=this.S4.Get(aColumn))?B:null
);if(!!Aq)return Aq.A7;else A.ab5("%s",(Ca+aColumn.toFixed())+BC);return false;}
,He:function(aColumn,A3){this.Z3(aColumn);var Aq=A._NewObject(C.AC8,0);Aq.A7=A3;
this.S4.Set(aColumn,Aq);return true;},Zi:function(aColumn,A3){this.Z3(aColumn);var
Aq=A._NewObject(C.String,0);Aq.A7=A3;this.S4.Set(aColumn,Aq);return true;},Mv:function(
aColumn,A3){this.Z3(aColumn);var Aq=A._NewObject(C.ABc,0);Aq.A7=A3;this.S4.Set(aColumn
,Aq);return true;},Z3:function(aColumn){if((aColumn<0)||(aColumn>=42))throw new Error((
EW+aColumn.toFixed())+Hh);},Bil:function(AM){if(!!(A.Device.Int32FilterCriterion.
isPrototypeOf(AM)?AM:null))return this.AI5(this.CC(AM.ES),AM.Operator,(A.Device.
Int32FilterCriterion.isPrototypeOf(AM)?AM:null).A7);else if(!!(A.Device.UInt32FilterCriterion.
isPrototypeOf(AM)?AM:null))return this.Bw7(this.R7(AM.ES),AM.Operator,(A.Device.
UInt32FilterCriterion.isPrototypeOf(AM)?AM:null).A7);else if(!!(A.Device.StringFilterCriterion.
isPrototypeOf(AM)?AM:null))return this.Bw6(this.VA(AM.ES),AM.Operator,(A.Device.
StringFilterCriterion.isPrototypeOf(AM)?AM:null).A7);else if(!!(A.Device.BoolFilterCriterion.
isPrototypeOf(AM)?AM:null))return this.Bw5(this.HW(AM.ES),AM.Operator,(A.Device.
BoolFilterCriterion.isPrototypeOf(AM)?AM:null).A7);else if(!!(A.Device.AnimalTypeFilterCriterion.
isPrototypeOf(AM)?AM:null))return this.AI5(this.CC(AM.ES),AM.Operator,(A.Device.
AnimalTypeFilterCriterion.isPrototypeOf(AM)?AM:null).A7);else if(!!(A.Device.GenderFilterCriterion.
isPrototypeOf(AM)?AM:null))return this.AI5(this.CC(AM.ES),AM.Operator,(A.Device.
GenderFilterCriterion.isPrototypeOf(AM)?AM:null).A7);else if(!!(A.Device.AssessmentFilterCriterion.
isPrototypeOf(AM)?AM:null))return this.Bw9(this.VB(AM.ES),AM.Operator,(((B=(A.Device.
AssessmentFilterCriterion.isPrototypeOf(AM)?AM:null).A7)<0)?B+0x100000000:B)&0xFF
);else if(!!(A.Device.UInt64FilterCriterion.isPrototypeOf(AM)?AM:null))return this.
Bw8(this.LN(AM.ES),AM.Operator,(A.Device.UInt64FilterCriterion.isPrototypeOf(AM)?
AM:null).A7);else if(!!(A.Device.WhereAboutsFilterCriterion.isPrototypeOf(AM)?AM:
null))return this.AI5(this.CC(AM.ES),AM.Operator,(A.Device.WhereAboutsFilterCriterion.
isPrototypeOf(AM)?AM:null).A7);else throw new Error(I8);},AI5:function(H5,EG,H6){
switch(EG){case 0:return H5===H6;case 2:return H5>H6;case 3:return H5<H6;case 4:
return H5.toFixed().indexOf(H6.toFixed(),0)>=0;case 5:return H5!==H6;default:throw new
Error(IJ+EG.toFixed());}},Bw6:function(H5,EG,H6){switch(EG){case 0:return H5===H6;
case 2:return H5>H6;case 3:return H5<H6;case 4:{A.ab5("%s%e%s%i",H5,EG,H6,H5.indexOf(
H6,0));return H5.indexOf(H6,0)>=0;}case 5:return H5!==H6;default:throw new Error(
IJ+EG.toFixed());}},Bw5:function(H5,EG,H6){switch(EG){case 0:return H5===H6;case
2:case 3:case 4:return false;case 5:return H5!==H6;default:throw new Error(IJ+EG.
toFixed());}},VB:function(aColumn){var B;this.Z3(aColumn);var Aq=(C.AGo.isPrototypeOf(
B=this.S4.Get(aColumn))?B:null);if(!!Aq)return Aq.A7;return 0;},Zk:function(aColumn
,A3){this.Z3(aColumn);var Aq=A._NewObject(C.AGo,0);Aq.A7=A3;this.S4.Set(aColumn,
Aq);return true;},Bw9:function(H5,EG,H6){switch(EG){case 0:return H5===H6;case 2:
return H5>H6;case 3:return H5<H6;case 5:return H5!==H6;default:throw new Error(IJ+
EG.toFixed());}},R7:function(aColumn){var B;this.Z3(aColumn);var Aq=(C.AGm.isPrototypeOf(
B=this.S4.Get(aColumn))?B:null);if(!!Aq)return Aq.A7;return 0;},Zj:function(aColumn
,A3){this.Z3(aColumn);var Aq=A._NewObject(C.AGm,0);Aq.A7=A3;this.S4.Set(aColumn,
Aq);return true;},Bw7:function(H5,EG,H6){switch(EG){case 0:return H5===H6;case 2:
return H5>H6;case 3:return H5<H6;case 5:return H5!==H6;default:throw new Error(IJ+
EG.toFixed());}},LN:function(aColumn){var B;this.Z3(aColumn);var Aq=(C.AGn.isPrototypeOf(
B=this.S4.Get(aColumn))?B:null);if(!!Aq)return Aq.A7;return 0;},Sx:function(aColumn
,A3){this.Z3(aColumn);var Aq=A._NewObject(C.AGn,0);Aq.A7=A3;this.S4.Set(aColumn,
Aq);return true;},Bw8:function(H5,EG,H6){switch(EG){case 0:return H5===H6;case 2:
return H5>H6;case 3:return H5<H6;case 5:return H5!==H6;default:throw new Error(IJ+
EG.toFixed());}},_Init:function(aArg){(this.S4=[]).__proto__=C.AFM.S4;this.__proto__=
C.AFM;A.h7++;},_Done:function(){this.__proto__=null;A.h7--;},_ReInit:function(){
},_Mark:function(D){var B;A.aa6(this.S4,D);if((B=this.I)&&(B._cycle!=D))B._Mark(
B._cycle=D);},I:null,_cycle:0,_observers:null,_className:"DeviceSimulation::RowData"
};C.V8={_Init:function(aArg){this.__proto__=C.V8;A.h7++;},_Done:function(){this.
__proto__=null;A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((B=this.
I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:
"DeviceSimulation::NativeType"};C.AC8={A7:0,_Init:function(aArg){C.V8._Init.call(
this,aArg);this.__proto__=C.AC8;},_className:"DeviceSimulation::Int32"};C.String={
A7:A.jV,_Init:function(aArg){C.V8._Init.call(this,aArg);this.__proto__=C.String;
},_className:"DeviceSimulation::String"};C.ABc={A7:false,_Init:function(aArg){C.
V8._Init.call(this,aArg);this.__proto__=C.ABc;},_className:"DeviceSimulation::Bool"
};C.DeviceClass={AtJ:null,AI$:null,AiJ:null,Aaq:null,CT:function(){var K=this.K;
K.A_t.call(this,this);},Init:function(aArg){var K=this.K;var B;this.Y4(3);A.zX([
this,K.AAs],[B=K.AtJ,B.A8o,B.ASL],0);this.UpdateAutoActions(OW);K.A_t.call(this,
this);this.ArS(this);this.ArT(this);this.ResetActiveActions(this);this.ResetAutoActions(
this);this.ArQ(this);this.ResetNoNaisIdListActions(this);this.ResetNoTransponderListActions(
this);this.ResetYoungNoTransponderListActions(this);var languageMin=0;var languageMax=
17;var languageValue=-1;{if(typeof ewLanguage==='number'&&Number.isInteger(ewLanguage
)&&ewLanguage>=languageMin&&ewLanguage<languageMax){languageValue=ewLanguage;}}if(
languageValue>=0)this.And(languageValue);A.pe([this,K.ATb],this);},Y4:function(E
){this.UpdateActiveScreen(E);},AvQ:function(E){this.UpdateBatteryChargeState(E);
},AEg:function(E){this.UpdateChargeActive(E);},Ars:function(E){this.UpdateScanState(
E);},Awc:function(E){this.UpdateMeasureState(E);},Awp:function(E){this.UpdateTempValue(
E);},And:function(E){this.UpdateLanguage(E);},Awq:function(E){this.UpdateTemperatureUnit(
E);},AEe:function(E){this.UpdateBrightness(E);},AEQ:function(E){this.UpdateMonitoring(
E);},AwY:function(){var B;if(A._GetAutoObject(C.Uk).AwT){this.UpdateMeasureState(
1);A._GetAutoObject(A.Device.Helper).AKp(this);}},Ahp:function(){var B;A._GetAutoObject(
A.Device.Helper).SA.Anz(this);this.UpdateMeasureState(0);},Ahm:function(){var K=
this.K;A.ab5("%s",PW);this.UpdateScanState(1);A.pe([this,K.AAs],this);},AnA:function(
){var K=this.K;var B;A.ab5("%s",PX);K.AiJ.Anz(this);this.UpdateScanState(0);},SetSystemTime:
function(AhO){},AwS:function(){A.Device.DeviceClass.A$V.call(this);this.Y4(1);},
AFJ:function(){A.Device.DeviceClass.A$T.call(this);this.Y4(2);},Dp:function(E){this.
UpdateOverlayMenu(E);},Awv:function(E){this.UpdateUnderTemp(E);},AbP:function(E){
this.UpdateSyncState(E);},ACi:function(){var aString;aString=((((((((((CL+A.abz(
0,9).toFixed())+E4)+A.abz(0,9).toFixed())+Lq)+PY)+A.abz(30,90).toFixed())+A.aaR(
A.acf.AGa))+Lq)+Ks)+A.abz(1,100).toFixed())+N8;return aString;},PopupStateChanged:
function(JS,Ae){var Af0=A._NewObject(C.PopupContext,0);Af0.Id=JS;Af0.Go=Ae;this.
Ano.Trigger(Af0,false);},AFg:function(E){this.UpdateVibrationOnKeypressEnabled(E
);},AeL:function(E){this.UpdateVibrationOn(E);},Awm:function(E){this.UpdateRatingMode(
E);},AeC:function(E){this.UpdateFlashLightOn(E);},Ua:function(E){this.UpdateTopLightOn(
E);},Wh:function(E){this.UpdateRGBTopLight(E);},AvP:function(E){this.UpdateAutoRegistrationMode(
E);},Art:function(E){this.UpdateScanTransponder(E.Id,E.TransponderType,E.TransponderProtocol
);},PJ:function(E){this.UpdateDigitsID(E);},QS:function(E){this.UpdateOffsetID(E
);},AFk:function(E){this.UpdateWeightValue(E);},Av$:function(E){this.UpdateMassUnit(
E);},Aq7:function(E){A.Device.DeviceClass.A$P.call(this,E);this.UpdateActiveActions(
E);},Aq8:function(E){A.Device.DeviceClass.A$Q.call(this,E);this.UpdateActiveActionsOrder(
E);},Aj7:function(E){A.Device.DeviceClass.A$R.call(this,E);this.UpdateAutoActions(
E);},AF8:function(){var K=this.K;this.UpdateMeasureState(1);K.BAp.call(this,this
);},Ar7:function(){var K=this.K;var B;K.Aaq.Anz(this);this.UpdateMeasureState(0);
},DT:function(E){this.UpdateAnimalType(E);},Aww:function(E){this.UpdateWeightRecordingMode(
E);},AEW:function(E){this.UpdatePredictedTempValue(E);},Sw:function(L1){A.ab5("%s%i"
,PZ,L1);},AEm:function(E){this.UpdateDemoMode(E);},AD5:function(E){this.UpdateAgeRegistration(
E);},Awx:function(E){this.UpdateWeightRecordingScope(E);},JI:function(E){this.UpdateGender(
E);},Arl:function(E){this.UpdateIDLastUsedMale(E);},Ark:function(E){this.UpdateIDLastUsedFemale(
E);},AbG:function(E){this.UpdateAnimalListContent(E);},AD7:function(E){this.UpdateAlarmListAction(
E);},AEp:function(E){this.UpdateFlashLightInMeasureState(E);},Aey:function(E){this.
UpdateAnimalInfoContent(E);},AFj:function(E){this.UpdateWatchListAction(E);},AEs:
function(E){this.UpdateFreshCowListAction(E);},ResetActiveActions:function(G){this.
Aq7(15359);this.Aq8(MB);},ResetAutoActions:function(G){this.Aj7(ST);},AvN:function(
E){this.UpdateAnimalTypesString(E);},Arv:function(E){this.UpdateTemperaturesHighString(
E);},Arw:function(E){this.UpdateTemperaturesLowString(E);},ArS:function(G){this.
AvN(UC);this.Arw(ZE);this.Arv(WG);this.Awv(3600);},Av5:function(E){this.UpdateFreshCowsHideMeasured(
E);},Arp:function(E){this.UpdateNaisIdLastUsedMale(E);},Aro:function(E){this.UpdateNaisIdLastUsedFemale(
E);},Awg:function(E){this.UpdateNaisIdIncrementMale(E);},Awf:function(E){this.UpdateNaisIdIncrementFemale(
E);},UpdateFirmware:function(){A.Device.DeviceClass.A$W.call(this);A._GetAutoObject(
A.kR.AX).BS(61);},Am_:function(E){this.UpdateBootloaderMessage(E);},AD2:function(
E){this.UpdateActionListAction(E);},AvL:function(E){this.UpdateActionListHideMeasured(
E);},T6:function(E){this.UpdateAnimalIdGenerationMethod(E);},AvY:function(E){this.
UpdateDirectionOfCountingFemale(E);},AvZ:function(E){this.UpdateDirectionOfCountingMale(
E);},Av0:function(E){this.UpdateDirectionOfCountingUnisex(E);},Arm:function(E){this.
UpdateIDLastUsedUnisex(E);},Arq:function(E){this.UpdateNaisIdLastUsedUnisex(E);}
,Awh:function(E){this.UpdateNaisIdIncrementUnisex(E);},Aj_:function(E){this.UpdateEartagNrAssignmentMode(
E);},NT:function(E){this.UpdateBreed(E);},AEN:function(E){throw new Error(IK);},
AEH:function(E){throw new Error(IK);},AFd:function(E){throw new Error(IK);},AEa:
function(E){throw new Error(IK);},AEn:function(E){this.UpdateDryCowListAction(E);
},AI2:function(AZY){var Qk;switch(AZY){case 15:Qk=false;break;default:Qk=true;}return Qk;
},AD$:function(E){this.UpdateBirthListView(E);},AFe:function(E){this.UpdateTransferProgress(
E);},Arx:function(E){this.UpdateTransferTarget(E);},Ar6:function(){var B;A.pe([B=
A._GetAutoObject(C.Ab6),B.Be_],this);},Awl:function(E){this.UpdatePremisesID(E);
},Awe:function(E){this.UpdateMotherSelectionDriedOffFilter(E);},AEt:function(E){
this.UpdateFreshCowSpan(E);},AFf:function(E){this.UpdateUSBState(E);},Anw:function(
AhJ){var K=this.K;var result=A._NewObject(C.Ajl,0);result.ABI=AhJ;result.FileName=
K.BhG.call(this,AhJ);switch(AhJ){case 0:K.Bxh.call(this,result);break;case 1:K.Bxd.
call(this,result);break;case 2:K.Bxi.call(this,result);break;case 3:K.Bxg.call(this
,result);break;default:throw new Error(UD+AhJ.toFixed());}K.AI$=result;return result;
},AqK:function(){return true;},Ap_:function(Ni){var K=this.K;switch(Ni.ABI){case
0:A._GetAutoObject(A.Device.Device).A6(72,true,A.jV,0,[this,K.A2i]);break;case 1:
A._GetAutoObject(A.Device.Device).A6(90,true,A.jV,0,[this,K.A2i]);break;case 2:case
3:A._GetAutoObject(A.Device.Device).A6(99,true,A.jV,0,[this,K.A2i]);break;default:
throw new Error(ZF+Ni.ABI.toFixed());}},AE2:function(E){throw new Error(IK);},AvM:
function(E){this.UpdateAnimalIdAutoGenerationMethod(E);},AE4:function(E){this.UpdateShutdownTimer(
E);},Arb:function(E){this.UpdateAnimalListInfoItemMode(E);},ArT:function(G){this.
AvO(WH);this.ArB(ZG);this.ArA(WI);this.Arz(ZH);this.ArC(ZI);},ArA:function(E){this.
UpdateWeightGainsHighString(E);},ArB:function(E){this.UpdateWeightGainsLowString(
E);},AvO:function(E){this.UpdateAnimalTypesWeightGainsString(E);},Arz:function(E
){this.UpdateWeightGainsAverageString(E);},ArC:function(E){this.UpdateWeightValueBirthString(
E);},Av1:function(E){this.UpdateEvaluationAnimalType(E);},Awo:function(E){this.UpdateStartScreen(
E);},ADa:function(){return 1;},ADb:function(){return 1;},AEM:function(E){this.UpdateMaximumAgeNewOnFarm(
E);},Awu:function(E){this.UpdateTransponderAssignmentIdChangeMethod(E);},AEl:function(
E){this.UpdateDataExportDestination(E);},Nb:function(E){this.UpdateWhereAbouts(E
);},Aq_:function(E){this.UpdateActiveMassRecordingFields(E);},Aq$:function(E){this.
UpdateActiveMassRecordingFieldsOrder(E);},ArQ:function(G){this.Aq_(A.jV);this.Aq$(
UE);},AEK:function(E){this.UpdateMassRecordingDateOfBirthMandatory(E);},Ajf:function(
){A._GetAutoObject(C.Ab6).AD_(true);return true;},ApX:function(){var B;A._GetAutoObject(
C.Ab6).ApX(this);return true;},ApW:function(){var B;A.pe([B=A._GetAutoObject(C.Ab6
),B.ApW],this);return true;},Auf:function(){var B;A.pe([B=A._GetAutoObject(C.Ab6
),B.Bgd],this);return true;},Awb:function(E){this.UpdateMaxWeightValuePrecision(
E);},Awi:function(E){this.UpdateNoNaisIdListActions(E);},ResetNoNaisIdListActions:
function(G){this.Awi(WJ);},Awj:function(E){this.UpdateNoTransponderListActions(E
);},ResetNoTransponderListActions:function(G){this.Awj(Q9);},Awz:function(E){this.
UpdateYoungNoTransponderListActions(E);},ResetYoungNoTransponderListActions:function(
G){this.Awz(ZJ);},Bz$:function(G){switch(this.KB){case 34:case 35:case 32:case 50:
case 55:case 63:case 91:{this.UpdateScanTransponder(12310020,1,0);this.UpdateScanState(
2);}break;case 15:break;default:this.UpdateScanState(4);}},AAs:function(G){var K=
this.K;var B;if((this.ScanState===1)&&K.AtJ.AF3)K.AiJ.Anx(this);A.ab5("%s",OX);}
,BAp:function(G){var K=this.K;var B;if((this.MeasureState===1)&&K.AtJ.AwT)K.Aaq.
Anx(this);},BA7:function(G){this.UpdateMeasureState(3);},ATb:function(G){var K=this.
K;var B;A.zX([B=A._GetAutoObject(A.Device.Helper),B.AKp],[B=K.AtJ,B.A8p,B.ASM],0
);this.RK.AEk(A._GetAutoObject(A.Device.Helper).A56(8));this.Sk.AEk(A._GetAutoObject(
A.Device.Helper).A56(8));},A_t:function(G){var Ay3=A._NewObject(A.Device.AwX,0);
Ay3.OnSetTimestamp(1708590020);Ay3.AEI(1);Ay3.AEP(0);Ay3.AEZ(0);this.Sk=Ay3;var Ayw=
A._NewObject(A.Device.AwX,0);Ayw.OnSetTimestamp(1708590020);Ayw.AEI(1);Ayw.AEP(0
);Ayw.AEZ(4);this.RK=Ayw;var Als=A._NewObject(A.Device.AuU,0);Als.AEF(1);Als.AEG(
0);Als.AEE(0);Als.AFb(1);Als.AFc(0);Als.AFa(0);Als.OnSetTimestamp(1708590020);this.
QM=Als;var AlU=A._NewObject(A.Device.AuU,0);AlU.AEF(1);AlU.AEG(0);AlU.AEE(0);AlU.
AFb(1);AlU.AFc(0);AlU.AFa(0);AlU.OnSetTimestamp(1708590020);this.SG=AlU;this.Ahl=
A.aaR(A.acf.Unknown);},BxD:function(aFilename,aMimeType,aContent){{var bb=new Blob([
aContent],{type:aMimeType});var a=document.createElement('a');a.download=aFilename;
a.href=window.URL.createObjectURL(bb);a.click();}},Bxh:function(Ni){var K=this.K;
var B;var S3=Q_;var B8=A._NewObject(A.Device.Animal,0);var P;var Adk=0;for(P=0;P<
A._GetAutoObject(A.Device.Device).Ap.Cb();P++){B8.EC(P,A._GetAutoObject(A.Device.
Device).Ap);if(B8.IsRegistrationNoticePending&&(B8.NaisId>0)){S3=S3+(((((((((((((((((
K.Aif.call(this,A._GetAutoObject(A.Device.Device).Ug)+String.fromCharCode(0x3B))+
K.Aif.call(this,B8.NaisId))+String.fromCharCode(0x3B))+K.AJu.call(this,B8.DateOfBirth
))+String.fromCharCode(0x3B))+K.Bcc.call(this,B8.Breed))+String.fromCharCode(0x3B
))+K.Bcb.call(this,B8.Gender))+String.fromCharCode(0x3B))+K.BxI.call(this,B8.EaseOfDelivery
))+String.fromCharCode(0x3B))+K.Bcd.call(this,B8.WhereAbouts))+String.fromCharCode(
0x3B))+K.BxL.call(this,B8.BirthType))+String.fromCharCode(0x3B))+K.Aif.call(this
,B8.NaisIdMother))+Lq);Adk++;}}Ni.Auw=S3;Ni.AFN=Adk;Ni.AnB=true;},Aif:function(Rb
){if(!Rb)return A.jV;return Rb.toFixed();},AJu:function(AZX){var Au=A._NewObject(
A.Core.Bt,0);Au.Initialize(AZX);return Au.Format(WK);},Bcc:function(AcE){if(!AcE
)return A.jV;return A._GetAutoObject(A.Device.Converter).A4I(AcE).toFixed();},Bcb:
function(LY){var result=A.jV;switch(LY){case 0:result=WM;break;case 1:result=WN;
break;case 2:result=A.jV;break;default:A.ab5("%s",WO+LY.toFixed());}return result;
},BxI:function(AIs){if(!AIs)return A.jV;return AIs.toFixed();},Bcd:function(Afq){
if(!Afq)return A.jV;return Afq.toFixed();},BxL:function(AsL){return(AsL+1).toFixed(
);},A2i:function(G){var K=this.K;var As=(A.Device.PopupContext.isPrototypeOf(G)?
G:null);if(!!As&&(As.PopupState===7))K.BxD.call(this,K.AI$.FileName,ZK,K.AI$.Auw
);},Bxd:function(Ni){var K=this.K;var B;var S3=WQ;var B8=A._NewObject(A.Device.Animal
,0);var P;var Adk=0;for(P=0;P<A._GetAutoObject(A.Device.Device).Ap.Cb();P++){var
Ays=A.jV;if(B8.AqJ())Ays=K.BxN.call(this,B8.FirstBodyWeight);B8.EC(P,A._GetAutoObject(
A.Device.Device).Ap);S3=S3+(((((((((((K.Aif.call(this,B8.NaisId)+String.fromCharCode(
0x3B))+K.BxJ.call(this,B8.VisualId))+String.fromCharCode(0x3B))+K.Aif.call(this,
B8.TransponderId))+String.fromCharCode(0x3B))+K.BxH.call(this,B8.DateOfBirth))+String.
fromCharCode(0x3B))+K.BxM.call(this,B8.Gender))+String.fromCharCode(0x3B))+Ays)+
Lq);Adk++;}Ni.Auw=S3;Ni.AFN=Adk;Ni.AnB=true;},BhG:function(AhJ){var Ay2=A.jV;var
Ac=A._NewObject(A.Core.Bt,0);Ac.Initialize(A._GetAutoObject(A.Device.Helper).Dt(
));switch(AhJ){case 0:Ay2=Ac.Format(WR);break;case 1:Ay2=Ac.Format(SU);break;case
2:Ay2=Ac.Format(ZL);break;case 3:Ay2=Ac.Format(ZM);break;default:throw new Error(
UD+AhJ.toFixed());}return Ay2;},BxJ:function(Rb){return Rb.toFixed();},BxM:function(
LY){var result=A.jV;switch(LY){case 0:result=Acq;break;case 1:result=UF;break;case
2:result=ZN;break;default:A.ab5("%s",WO+LY.toFixed());}return result;},BxN:function(
MG){if(MG<=0)return A.jV;return A._GetAutoObject(A.Device.Converter).AkL(MG);},BxH:
function(AZX){var Au=A._NewObject(A.Core.Bt,0);Au.Initialize(AZX);return Au.Format(
Afe);},Bxi:function(Ni){var K=this.K;var B;var S3=ZO;var B8=A._NewObject(A.Device.
Animal,0);var P;var Adk=0;for(P=0;P<A._GetAutoObject(A.Device.Device).Ap.Cb();P++
){B8.EC(P,A._GetAutoObject(A.Device.Device).Ap);if(B8.IsRegistrationNoticePending&&(
B8.NaisId>0)){S3=S3+(((((K.Aif.call(this,A._GetAutoObject(A.Device.Device).Ug)+String.
fromCharCode(0x3B))+K.Aif.call(this,B8.NaisId))+String.fromCharCode(0x3B))+K.AJu.
call(this,A._GetAutoObject(A.Device.Helper).Dt()))+Lq);Adk++;}}Ni.Auw=S3;Ni.AFN=
Adk;Ni.AnB=true;},Bxg:function(Ni){var K=this.K;var B;var S3=WS;var B8=A._NewObject(
A.Device.Animal,0);var P;var Adk=0;for(P=0;P<A._GetAutoObject(A.Device.Device).Ap.
Cb();P++){B8.EC(P,A._GetAutoObject(A.Device.Device).Ap);if(B8.IsRegistrationNoticePending&&(
B8.NaisId>0)){S3=S3+(((((((((((((K.Aif.call(this,B8.NaisId)+String.fromCharCode(
0x3B))+K.AJu.call(this,B8.DateOfBirth))+String.fromCharCode(0x3B))+K.Bcb.call(this
,B8.Gender))+String.fromCharCode(0x3B))+K.Bcd.call(this,B8.WhereAbouts))+String.
fromCharCode(0x3B))+K.Bcc.call(this,B8.Breed))+String.fromCharCode(0x3B))+K.AJu.
call(this,A._GetAutoObject(A.Device.Helper).Dt()))+String.fromCharCode(0x3B))+K.
Aif.call(this,B8.TransponderId))+Lq);Adk++;}}Ni.Auw=S3;Ni.AFN=Adk;Ni.AnB=true;},
_Init:function(aArg){var K=this.K;A.acl.Ga._Init.call(K.AiJ={I:this},0);A.acl.Ga.
_Init.call(K.Aaq={I:this},0);K.__proto__=C.DeviceClass;this.AvQ(100);this.And(1);
this.Arl(200);this.Ark(100);this.Arp(276000912345678);this.Aro(276000923456789);
this.Arm(500);this.Arq(276000901234567);this.NT(1);K.AiJ.HG(1);K.AiJ.Fe(1000);K.
Aaq.Wi(0);K.Aaq.HG(1);K.Aaq.Fe(750);K.Aaq.B1=50000;K.AiJ.Sl=[this,K.Bz$];K.AtJ=A.
_GetAutoObject(C.Uk);K.Aaq.Sl=[this,K.BA7];K.Aaq.Q=[this,this.AD0,this.AIg];K.Init.
call(this,aArg);A.h7++;},_Done:function(){var K=this.K;K.__proto__=null;K.AiJ._Done(
);K.Aaq._Done();A.h7--;},_ReInit:function(){var K=this.K;K.AiJ._ReInit();K.Aaq._ReInit(
);K.CT.call(this);},_Mark:function(D){var B;if((B=this.AtJ)&&(B._cycle!=D))B._Mark(
B._cycle=D);if((B=this.AI$)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.AiJ)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.Aaq)._cycle!=D)B._Mark(B._cycle=D);},_variants:
function(){return A.acp.DeviceClass._variants();},_className:"DeviceSimulation::DeviceClass"
};C.AGo={A7:0,_Init:function(aArg){C.V8._Init.call(this,aArg);this.__proto__=C.AGo;
},_className:"DeviceSimulation::UInt8"};C.AGm={A7:0,_Init:function(aArg){C.V8._Init.
call(this,aArg);this.__proto__=C.AGm;},_className:"DeviceSimulation::UInt32"};C.
HelperClass={A3p:0,AE5:function(E){var K=this.K;K.A3p=K.A3p+(E-this.Dt());A.Device.
HelperClass.A$S.call(this,E);},Dt:function(){var K=this.K;return A.Device.HelperClass.
A$O.call(this)+K.A3p;},_Init:function(aArg){var K=this.K;K.__proto__=C.HelperClass;
A.h7++;},_Done:function(){var K=this.K;K.__proto__=null;A.h7--;},_ReInit:function(
){},_Mark:function(D){},_variants:function(){return this;},_className:"DeviceSimulation::HelperClass"
};C.A_z={AwT:false,AF3:false,ASL:function(E){if(this.AF3===E)return;this.AF3=E;A.
abo([this,this.A8o,this.ASL],0);},A8o:function(){return this.AF3;},ASM:function(
E){if(this.AwT===E)return;this.AwT=E;A.abo([this,this.A8p,this.ASM],0);},A8p:function(
){return this.AwT;},_Init:function(aArg){this.__proto__=C.A_z;A.h7++;},_Done:function(
){this.__proto__=null;A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((
B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:
"DeviceSimulation::SimulationConfigClass"};C.Uk={_Init:function(){C.A_z._Init.call(
this,0);},_ReInit:function(){},_variants:function(){return A.acp.Uk._variants();
},_this:null};C.PopupContext={Go:1,Id:0,_Init:function(aArg){this.__proto__=C.PopupContext;
A.h7++;},_Done:function(){this.__proto__=null;A.h7--;},_ReInit:function(){},_Mark:
function(D){var B;if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:
0,_observers:null,_className:"DeviceSimulation::PopupContext"};C.Rating={Ck:function(
AG){var Hv=A.Device.Rating.A$U.call(this,AG);if(Hv){var Rh=A._GetAutoObject(A.Device.
Device).Ap;var Ad=A._GetAutoObject(A.Device.Device).Ap.K_(0,this.AnimalId);if(Ad
!==-1){var Jd=Rh.Ov();if(Jd<=0)A.ab5("%s",ZP);else{var B8=A._NewObject(A.Device.
Animal,0);B8.EC(Ad,Rh);if((this.Temperature>0)&&(B8.TimestampLastTemperature<this.
Timestamp)){Rh.A_s(Ad,5,this.Temperature);Rh.Aku(Ad,17,this.RatingTemperature);Rh.
Ab3(Ad,30,this.Timestamp);}if(this.BodyWeight>0){if(B8.TimestampLastWeighing<=this.
Timestamp){Rh.ATQ(Ad,18,this.BodyWeight);Rh.Ab3(Ad,19,this.Timestamp);}if(!B8.TimestampFirstWeighing||(
B8.TimestampFirstWeighing>=this.Timestamp)){Rh.ATQ(Ad,23,this.BodyWeight);Rh.Ab3(
Ad,24,this.Timestamp);Rh.He(Ad,25,this.Id);}}if(A._GetAutoObject(A.Device.Helper
).AFC(this)){var LL=A._GetAutoObject(A.Device.Helper).ACn(this);Rh.Aku(Ad,13,LL);
Rh.Ab3(Ad,31,this.Timestamp);}Rh.Ox(Jd);}}}return Hv;},_Init:function(aArg){var K=
this.K;K.__proto__=C.Rating;A.h7++;},_Done:function(){var K=this.K;K.__proto__=null;
A.h7--;},_ReInit:function(){},_Mark:function(D){},_variants:function(){return this;
},_className:"DeviceSimulation::Rating"};C.PM={FX:A.abi(512,null,null),O$:0,AIR:
0,AKy:0,A3s:A.abi(10,0,{0:3600,1:3750,2:3900,3:4200,4:3780,5:3600,6:3900,7:4010,
8:4020,9:4030}),AJ8:0,A2W:A.abi(10,0,{0:5,1:4,2:3,3:1,4:2,5:1,6:1,7:1,8:1,9:1}),
Bc5:512,Azt:-1,A0w:A.abi(15,0,{0:2,1:2,2:2,3:2,4:2,5:3,6:3,7:3,8:3,9:3,10:1,11:1
,12:1,13:1,14:1}),AJH:false,CC:function(Ad,A0){var Bb=this.TG(Ad);if(!!Bb)return Bb.
CC(A0);return 0;},VA:function(Ad,A0){var Bb=this.TG(Ad);if(!!Bb)return Bb.VA(A0);
return A.jV;},HW:function(Ad,A0){var Bb=this.TG(Ad);if(!!Bb)return Bb.HW(A0);return false;
},VB:function(Ad,A0){var Bb=this.TG(Ad);if(!!Bb)return Bb.VB(A0);return 0;},R7:function(
Ad,A0){var Bb=this.TG(Ad);if(!!Bb)return Bb.R7(A0);return 0;},Ov:function(){if(this.
AJH)throw new Error(ZQ);this.AJH=true;return 12345;},Ox:function(Aop){if(!this.AJH
)throw new Error(Aff);if(Aop!==12345)throw new Error(JP);this.AJH=false;return true;
},Yj:function(){return this.A3Z(A._NewObject(C.AFM,0));},Zk:function(Ad,A0,CV){var
Bb=this.TG(Ad);if(!!Bb)return Bb.Zk(A0,CV);return false;},He:function(Ad,A0,CV){
var Bb=this.TG(Ad);if(!!Bb)return Bb.He(A0,CV);return false;},Zj:function(Ad,A0,
CV){var Bb=this.TG(Ad);if(!!Bb)return Bb.Zj(A0,CV);return false;},Mv:function(Ad
,A0,CV){var Bb=this.TG(Ad);if(!!Bb)return Bb.Mv(A0,CV);return false;},Zi:function(
Ad,A0,CV){var Bb=this.TG(Ad);if(!!Bb)return Bb.Zi(A0,CV);return false;},OnSetId:
function(E){if(this.Id===E)return;this.Id=E;this.BbO();switch(this.Id){case 0:{this.
Bc5=256;A.pe([this,this.Bu_],this);}break;case 1:A.pe([this,this.Bva],this);break;
case 3:A.pe([this,this.Bu9],this);break;case 4:A.pe([this,this.Bu$],this);break;
case 2:break;default:throw new Error(Acr+this.Id.toFixed());}},Cb:function(){return this.
O$;},LN:function(Ad,A0){var Bb=this.TG(Ad);if(!!Bb)return Bb.LN(A0);return 0;},Sx:
function(Ad,A0,CV){var Bb=this.TG(Ad);if(!!Bb)return Bb.Sx(A0,CV);return false;}
,Hd:function(){this.BbO();return true;},HA:function(){return this.Bc5;},A3Z:function(
Ad){if(this.O$>=512)throw new Error(Lr);this.FX.Set(this.O$,Ad);this.O$=this.O$+
1;switch(this.Id){case 0:{this.Azt=this.O$;this.He(this.O$-1,0,this.Azt);}break;
case 1:{this.Azt=this.O$-1;this.He(this.O$-1,0,this.Azt);}break;default:;}A.pe([
this,this.Aj3],this);return this.O$-1;},TG:function(aIndex){if((aIndex<0)||(aIndex>=
512))return null;return this.FX.Get(aIndex);},BbO:function(){var P;for(P=0;P<512;
P=P+1)this.FX.Set(P,null);this.O$=0;this.AIR=0;this.AJ8=0;this.AKy=0;A.pe([this,
this.Aj3],this);},AJC:function(){this.AIR=(this.AIR+1)%15;return this.A0w.Get(this.
AIR);},A1j:function(){this.AKy=(this.AKy+1)%10;return this.A3s.Get(this.AKy);},AJn:
function(G){if(this.K&&this.K.AJn)return this.K.AJn.apply(this,arguments);else return C.
PM.Bvg.apply(this,arguments);},Bvg:function(G){var B;var Of=true;this.AW(276000312310001
,10,1,A._GetAutoObject(A.Device.Helper).Ahr(12),0,1,true,true,false,true,39000,0
,0,false,0,false,0,0,0,0,true,true);this.AW(12310020,20,12,A._GetAutoObject(A.Device.
Helper).Ahr(12),0,0,false,false,true,true,36500,0,0,false,0,false,0,0,0,0,true,true
);this.AW(276000312310021,10,1,A._GetAutoObject(A.Device.Helper).Ahr(9),0,0,true
,false,false,true,37200,0,0,false,0,false,0,0,0,0,true,true);this.AW(276000312310022
,20,2,A._GetAutoObject(A.Device.Helper).Ahr(830),0,1,false,false,false,true,41200
,A._GetAutoObject(A.Device.Helper).Ahr(1),1,true,1,false,0,0,0,0,true,true);this.
AW(276000312310023,20,2,A._GetAutoObject(A.Device.Helper).Ahr(1200),0,1,false,false
,false,true,43500,A._GetAutoObject(A.Device.Helper).Ahr(8),2,false,1,false,0,0,0
,0,true,true);this.AW(276000312310026,20,2,A._GetAutoObject(A.Device.Helper).Ahr(
8),0,0,true,false,false,true,34000,0,0,false,0,false,0,0,0,0,true,true);var P;var
Bfe=0;for(P=1;P<=7;P=P+1){Bfe=3680+(20*P);Of=Bfe>3800;this.AW(276000312310050+(((
B=P)<0)?B+0x10000000000000000:B),30+(P%3),3,A._GetAutoObject(A.Device.Helper).Ahr(
7-P),0,1,Of,false,false,true,36000+(P*900),0,0,false,0,true,0,0,0,0,true,true);}
},Bu_:function(s){this.AJn(s);},AJp:function(G){if(this.K&&this.K.AJp)return this.
K.AJp.apply(this,arguments);else return C.PM.Bvi.apply(this,arguments);},Bvi:function(
G){var Ac=A._GetAutoObject(A.Device.Helper).Dt();var P;Ac=Ac-2678400;var Aie;var
Bb5;for(P=0;P<32;P=P+1){var A06=this.BxZ();for(;A06>0;A06=A06-1){Aie=this.A1j();
Bb5=A._GetAutoObject(A.Device.Converter).Ar8(0,Aie);this.AF(Ac,12310020,Aie,Bb5,
this.AJC(),this.AJC(),this.AJC(),this.AJC(),0);}Ac=Ac+86400;}Ac=Ac-86400;this.AF(
Ac,12310020,0,0,0,0,0,0,43700);this.AF(Ac-86400,276000312310001,0,0,0,0,0,0,49800
);this.AF(Ac,276000312310001,0,0,0,0,0,0,51000);Aie=this.A1j();this.AF(Ac,276000312310001
,Aie,A._GetAutoObject(A.Device.Converter).Ar8(0,Aie),1,3,3,3,0);Aie=this.A1j();this.
AF(Ac-86400,276000312310022,3800,A._GetAutoObject(A.Device.Converter).Ar8(1,3800
),2,3,3,3,0);this.AF(Ac,276000312310022,Aie,A._GetAutoObject(A.Device.Converter).
Ar8(1,Aie),2,3,3,3,0);},Bva:function(s){this.AJp(s);},AW:function(JS,BvF,BvW,BaV
,AsL,LY,BvN,BvS,BvP,BvQ,MG,Bvr,BvU,BvO,Ee,BvR,AcE,AIs,Afq,Bv1,Byg,Byh){var B8=A.
_NewObject(A.Device.Animal,0);B8.Gf();B8.Awy(0);B8.AeI(0);B8.T_(false);B8.Ake(false
);if(Byh)B8.NW(JS);if(Byg)B8.Na(JS);B8.Ub(A._GetAutoObject(A.Device.Helper).AkH(
JS));B8.AbK(BvF);B8.Ane(BvW);B8.QR(BaV);B8.Aj8(AsL);B8.JI(LY);B8.Anu(BvN);B8.AFW(
BvS);B8.Ag8(BvQ);B8.T_(BvP);B8.Arn(BvO);B8.Av8(BvU);B8.AvV(Bvr);B8.DT(Ee);B8.AeF(
BvR);B8.NT(AcE);B8.Aj$(AIs);B8.Nb(Afq);B8.Ang(Bv1);B8.Ck(this);if(MG>0)A._GetAutoObject(
C.ArK).AF(BaV,JS,0,0,0,0,0,0,MG);},AF:function(LX,AcC,Aon,Bwb,Bvz,BvA,Bvk,Bwd,Bvl
){var BZ=A._NewObject(A.Device.Rating,0);BZ.Gf();var Bbx=A._GetAutoObject(C.Al8).
ANU(26,AcC);if(Bbx>=0)BZ.OnSetAnimalId(A._GetAutoObject(C.Al8).CC(Bbx,0));else A.
ab5("%s%U",Ahz,AcC);BZ.OnSetTimestamp(LX);BZ.OnSetTemperature(Aon);BZ.OnSetRatingTemperature(
Bwb);BZ.OnSetFaeces(Bvz);BZ.OnSetFeed(BvA);BZ.OnSetAppearance(Bvk);BZ.OnSetRespiratory(
Bwd);BZ.OnSetBodyWeight(Bvl);BZ.Ck(this);},A5J:function(aColumn,A3){var P;for(P=
0;P<this.O$;P=P+1)if(this.FX.Get(P).CC(aColumn)===A3)return P;return-1;},BxZ:function(
){this.AJ8=(this.AJ8+1)%10;return this.A2W.Get(this.AJ8);},AJm:function(G){if(this.
K&&this.K.AJm)return this.K.AJm.apply(this,arguments);else return C.PM.Bvf.apply(
this,arguments);},Bvf:function(G){this.Alm(10,AnQ);this.Alm(20,N9);this.Alm(30,WT
);this.Alm(31,AnR);this.Alm(32,AhA);},Bu9:function(s){this.AJm(s);},Alm:function(
JS,BvG){var AIK=A._NewObject(A.Device.AnimalGroup,0);AIK.Gf();AIK.OnSetId(JS);AIK.
AEv(BvG);AIK.Ck(this);},Aa3:function(){return this.Azt;},ANU:function(aColumn,A3
){var P;for(P=0;P<this.O$;P=P+1)if(this.FX.Get(P).LN(aColumn)===A3)return P;return-
1;},AJo:function(G){if(this.K&&this.K.AJo)return this.K.AJo.apply(this,arguments
);else return C.PM.Bvh.apply(this,arguments);},Bvh:function(G){this.Aab(2016,216
,6);this.Aab(2017,217,7);this.Aab(2018,218,8);this.Aab(2019,219,9);this.Aab(2020
,220,10);this.Aab(2021,221,11);},Bu$:function(s){this.AJo(s);},Aab:function(AcK,
Bvv,Bvu){var UO=A._NewObject(A.Device.CalfDeregistrations,0);UO.Gf();UO.Akj(AcK);
UO.AvX(Bvv);UO.AvW(Bvu);UO.Ck(this);},_Init:function(aArg){A.Device.ITable._Init.
call(this,aArg);(this.FX=[]).__proto__=C.PM.FX;(this.A3s=[]).__proto__=C.PM.A3s;(
this.A2W=[]).__proto__=C.PM.A2W;(this.A0w=[]).__proto__=C.PM.A0w;this.__proto__=
C.PM;var Ls=this._variants();if(Ls){this.K={};Ls._Init.call(this,aArg);}},_Done:
function(){if(this.K)this.K._Done.call(this);this.__proto__=A.Device.ITable;A.Device.
ITable._Done.call(this);},_ReInit:function(){A.Device.ITable._ReInit.call(this);
if(this.K)this.K._ReInit.call(this);},_Mark:function(D){var B;A.Device.ITable._Mark.
call(this,D);A.aa6(this.FX,D);if(this.K)this.K._Mark(D);},_variants:function(){return A.
acp.PM._variants();},K:null,_className:"DeviceSimulation::TableData"};C.Al8={_Init:
function(){C.PM._Init.call(this,0);this.OnSetId(0);},_ReInit:function(){},_variants:
function(){return this;},_this:null};C.At9={_Init:function(){C.PM._Init.call(this
,0);this.OnSetId(3);},_ReInit:function(){},_variants:function(){return this;},_this:
null};C.ArK={_Init:function(){C.PM._Init.call(this,0);this.OnSetId(1);},_ReInit:
function(){},_variants:function(){return this;},_this:null};C.GC={Alg:A.abi(512,
null,null),Gk:null,AoS:0,CC:function(Ad,A0){var Bb=this.Z$(Ad);if(!!Bb)return Bb.
CC(A0);return 0;},VA:function(Ad,A0){var Bb=this.Z$(Ad);if(!!Bb)return Bb.VA(A0);
return A.jV;},HW:function(Ad,A0){var Bb=this.Z$(Ad);if(!!Bb)return Bb.HW(A0);return false;
},OnSetId:function(E){if(this.Id===E)return;this.Id=E;switch(this.Id){case 0:this.
AFm(A._GetAutoObject(C.Al8));break;case 1:this.AFm(A._GetAutoObject(C.ArK));break;
case 3:this.AFm(A._GetAutoObject(C.At9));break;case 4:this.AFm(A._GetAutoObject(
C.Aui));break;case 2:break;default:throw new Error(Acr+this.Id.toFixed());}},Cb:
function(){if(!!this.Filter)return this.AoS;else if(!!this.Gk)return this.Gk.O$;
return 0;},Bi:function(E){A.Device.ITable.Bi.call(this,E);this.A0u(this);},VB:function(
Ad,A0){var Bb=this.Z$(Ad);if(!!Bb)return Bb.VB(A0);return 0;},R7:function(Ad,A0){
var Bb=this.Z$(Ad);if(!!Bb)return Bb.R7(A0);return 0;},Ov:function(){if(!!this.Gk
)return this.Gk.Ov();return-1;},Ox:function(Aop){var Hv=false;if(!!this.Gk)Hv=this.
Gk.Ox(Aop);if(Hv)A.pe([this,this.A0u],this);return Hv;},Yj:function(){if(!!this.
Filter)throw new Error(AhB+A._GetAutoObject(A.Device.Converter).Bhl(this.Id,this.
Filter));if(!!this.Gk)return this.Gk.A3Z(A._NewObject(C.AFM,0));return-1;},Zk:function(
Ad,A0,CV){var Bb=this.Z$(Ad);if(!!Bb)return Bb.Zk(A0,CV);return false;},He:function(
Ad,A0,CV){var Bb=this.Z$(Ad);if(!!Bb)return Bb.He(A0,CV);return false;},Zj:function(
Ad,A0,CV){var Bb=this.Z$(Ad);if(!!Bb)return Bb.Zj(A0,CV);return false;},Mv:function(
Ad,A0,CV){var Bb=this.Z$(Ad);if(!!Bb)return Bb.Mv(A0,CV);return false;},Zi:function(
Ad,A0,CV){var Bb=this.Z$(Ad);if(!!Bb)return Bb.Zi(A0,CV);return false;},K_:function(
aColumn,A3){if(!!this.Filter){var P;for(P=0;P<this.AoS;P=P+1)if(this.Alg.Get(P).
CC(aColumn)===A3)return P;return-1;}else if(!!this.Gk)return this.Gk.A5J(aColumn
,A3);return-1;},LN:function(Ad,A0){var Bb=this.Z$(Ad);if(!!Bb)return Bb.LN(A0);return 0;
},Sx:function(Ad,A0,CV){var Bb=this.Z$(Ad);if(!!Bb)return Bb.Sx(A0,CV);return false;
},Agy:function(aColumn,A3){if(!!this.Filter){var P;for(P=0;P<this.AoS;P=P+1)if(this.
Alg.Get(P).LN(aColumn)===A3)return P;return-1;}else if(!!this.Gk)return this.Gk.
ANU(aColumn,A3);return-1;},Hd:function(){if(!!this.Gk)return this.Gk.Hd();return false;
},Ajr:function(aColumn,A3){if(!!this.Gk)return this.Gk.A5J(aColumn,A3)>=0;return false;
},AdZ:function(aColumn,A3){if(!!this.Gk)return this.Gk.ANU(aColumn,A3)>=0;return false;
},HA:function(){if(!!this.Gk)return this.Gk.HA();return 0;},Aa3:function(){if(!!
this.Gk)return this.Gk.Aa3();return-1;},Qw:function(){if(!!this.Gk)return this.Gk.
O$;return 0;},A0u:function(G){this.A0I();if(!!this.Filter&&!!this.Gk){var P;for(
P=0;P<this.Gk.Cb();P=P+1){var A0_=true;var Az=this.Filter.AN8();var Bb=this.Gk.TG(
P);if(!!Bb)while(A0_&&!!Az){A0_=Bb.Bil(Az);Az=this.Filter.AOb(Az);}else A.ab5("%s"
,((Acs+P.toFixed())+UG)+this.Gk.Cb().toFixed());if(A0_){this.Alg.Set(this.AoS,this.
Gk.FX.Get(P));this.AoS=this.AoS+1;}}}A.pe([this,this.Aj3],this);},A0I:function(){
var P;for(P=0;P<512;P=P+1)this.Alg.Set(P,null);this.AoS=0;},AFm:function(E){if(this.
Gk===E)return;if(!!this.Gk)A.z9([this,this.A3q],this.Gk,0);this.Gk=E;if(!!this.Gk
){A.zV([this,this.A3q],this.Gk,0);A.pe([this,this.A3q],this);}},A3q:function(G){
A.pe([this,this.A0u],this);},Z$:function(aIndex){if(!!this.Filter){if((aIndex<0)||(
aIndex>=512))return null;else return this.Alg.Get(aIndex);}else if(!!this.Gk)return this.
Gk.TG(aIndex);A.ab5("%s",AnS+aIndex.toFixed());return null;},_Init:function(aArg
){A.Device.ITable._Init.call(this,aArg);(this.Alg=[]).__proto__=C.GC.Alg;this.__proto__=
C.GC;},_Mark:function(D){var B;A.Device.ITable._Mark.call(this,D);A.aa6(this.Alg
,D);if((B=this.Gk)&&(B._cycle!=D))B._Mark(B._cycle=D);},_className:"DeviceSimulation::FilteredTable"
};C.A_A={Kz:null,Adm:null,Ot:null,AMa:false,AMb:true,A3k:function(G){switch(A._GetAutoObject(
A.Device.Device).SyncState){case 0:{A._GetAutoObject(A.Device.Device).AbP(1);this.
Adm.Ar(true);}break;case 1:{A._GetAutoObject(A.Device.Device).AbP(2);A._GetAutoObject(
A.Device.Device).Arx(A._GetAutoObject(A.Device.Device).Ap.Qw());this.Kz.Fe(A._GetAutoObject(
A.Device.Device).Ae5*50);this.Kz.B1=A._GetAutoObject(A.Device.Device).Ae5;this.Kz.
Ar(true);}break;case 2:{A._GetAutoObject(A.Device.Device).AbP(3);this.Adm.Ar(true
);}break;case 3:{A._GetAutoObject(A.Device.Device).AbP(4);A._GetAutoObject(A.Device.
Device).Arx(A._GetAutoObject(A.Device.Device).Ap.Qw());this.Kz.Fe(A._GetAutoObject(
A.Device.Device).Ae5*50);this.Kz.B1=A._GetAutoObject(A.Device.Device).Ae5;this.Kz.
Ar(true);}break;case 4:{A._GetAutoObject(A.Device.Device).AbP(5);this.Adm.Ar(true
);}break;case 5:A.pe([this,this.Be_],this);break;case 7:case 6:break;default:A.ab5(
"%s%e",AnT,A._GetAutoObject(A.Device.Device).SyncState);}},Bzv:function(G){this.
Adm.Ar(false);A.pe([this,this.A3k],this);},BAx:function(G){switch(A._GetAutoObject(
A.Device.Device).SyncState){case 0:case 6:case 7:{A._GetAutoObject(A.Device.Device
).AbP(0);A.pe([this,this.A3k],this);}break;default:;}},Be_:function(G){this.Adm.
Ar(false);this.Kz.Ar(false);A._GetAutoObject(A.Device.Device).AbP(0);},AD_:function(
E){if(this.AMb===E)return;this.AMb=E;A.abo([this,this.Bjm,this.AD_],0);},Bjm:function(
){return this.AMb;},ApW:function(G){var B;this.Ot.Cr=true;this.Ot.B1=false;this.
Ot.Fe(100);this.Ot.HG(1);this.Ot.Q=[this,this.ARE,this.ASa];A.pe([B=this.Ot,B.Anx
],this);},Bgd:function(G){var B;this.Ot.Cr=true;this.Ot.B1=false;this.Ot.Fe(400);
this.Ot.T9(200);this.Ot.HG(3);this.Ot.Q=[this,this.ARE,this.ASa];this.AD_(false);
A.pe([B=this.Ot,B.Anx],this);},ASa:function(E){if(this.AMa===E)return;this.AMa=E;
A.abo([this,this.ARE,this.ASa],0);},ARE:function(){return this.AMa;},ApX:function(
G){var B;this.Ot.Anz(this);this.AD_(false);},_Init:function(aArg){A.acl.Ga._Init.
call(this.Kz={I:this},0);A.Core.Timer._Init.call(this.Adm={I:this},0);A.acl.Tu._Init.
call(this.Ot={I:this},0);this.__proto__=C.A_A;var B;this.Kz.HG(1);this.Adm.PK(2000
);this.Kz.Sl=[this,this.A3k];this.Kz.Q=[B=A._GetAutoObject(A.Device.Device),B.AR4
,B.AZx];this.Adm.Ms=[this,this.Bzv];A.h7++;},_Done:function(){this.__proto__=null;
this.Kz._Done();this.Adm._Done();this.Ot._Done();A.h7--;},_ReInit:function(){this.
Kz._ReInit();this.Adm._ReInit();this.Ot._ReInit();},_Mark:function(D){var B;if((
B=this.Kz)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Adm)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Ot)._cycle!=D)B._Mark(B._cycle=D);if((B=this.I)&&(B._cycle!=D))B._Mark(
B._cycle=D);},I:null,_cycle:0,_observers:null,_className:"DeviceSimulation::SimulationHelperClass"
};C.Ab6={_Init:function(){C.A_A._Init.call(this,0);},_ReInit:function(){},_variants:
function(){return this;},_this:null};C.AGn={A7:0,_Init:function(aArg){C.V8._Init.
call(this,aArg);this.__proto__=C.AGn;},_className:"DeviceSimulation::UInt64"};C.
Aui={_Init:function(){C.PM._Init.call(this,0);this.OnSetId(4);},_ReInit:function(
){},_variants:function(){return this;},_this:null};C.FactoryResetScope={Do:function(
){return 1;},_Init:function(aArg){var K=this.K;K.__proto__=C.FactoryResetScope;this.
Co.Set(0,1);A.h7++;},_Done:function(){var K=this.K;K.__proto__=null;A.h7--;},_ReInit:
function(){},_Mark:function(D){},_variants:function(){return this;},_className:"DeviceSimulation::FactoryResetScope"
};C.XH={AdJ:null,Cw:function(G){var K=this.K;A.ab5("%s",AnU);K.AdJ.Ar(true);},EV:
function(G){var K=this.K;if(K.AdJ.Bv===true){K.AdJ.Ar(false);A.ab5("%s",AnV);}},
Bje:function(G){var K=this.K;K.AdJ.Ar(false);A._GetAutoObject(A.kR.AX).Aha(A._GetAutoObject(
A.Device.Device).AwZ);},_Init:function(aArg){var K=this.K;A.Core.Timer._Init.call(
K.AdJ={I:this},0);K.__proto__=C.XH;this.Aeo.H(Afg);K.AdJ.PK(1500);this.Ul.R(AnW);
this.Ul.Y(true);this.Aeo.Ax(A.aaL(A.ach.AQO));K.AdJ.Ms=[this,K.Bje];A.h7++;},_Done:
function(){var K=this.K;K.__proto__=null;K.AdJ._Done();A.h7--;},_ReInit:function(
){var K=this.K;K.AdJ._ReInit();},_Mark:function(D){var B;if((B=this.AdJ)._cycle!=
D)B._Mark(B._cycle=D);},_variants:function(){return this;},_className:"DeviceSimulation::BootScreen"
};C.Ajl={Auw:A.jV,_Init:function(aArg){A.Device.Ajl._Init.call(this,aArg);this.__proto__=
C.Ajl;},_className:"DeviceSimulation::DataExportContext"};
C._Init=function(){C.AC8.__proto__=C.V8;C.String.__proto__=C.V8;C.ABc.__proto__=C.
V8;C.AGo.__proto__=C.V8;C.AGm.__proto__=C.V8;C.PM.__proto__=A.Device.ITable;C.GC.
__proto__=A.Device.ITable;C.AGn.__proto__=C.V8;C.Ajl.__proto__=A.Device.Ajl;};C.
_ReInit=function(){var B;if((B=C.Uk._this))B._ReInit(),C.Uk._ReInit.call(B);if((
B=C.Al8._this))B._ReInit(),C.Al8._ReInit.call(B);if((B=C.At9._this))B._ReInit(),
C.At9._ReInit.call(B);if((B=C.ArK._this))B._ReInit(),C.ArK._ReInit.call(B);if((B=
C.Ab6._this))B._ReInit(),C.Ab6._ReInit.call(B);if((B=C.Aui._this))B._ReInit(),C.
Aui._ReInit.call(B);};C.DB=function(D){var B;if((B=C.Uk._this)&&(B._cycle!=D))B.
_Done(C.Uk._this=null);if((B=C.Al8._this)&&(B._cycle!=D))B._Done(C.Al8._this=null
);if((B=C.At9._this)&&(B._cycle!=D))B._Done(C.At9._this=null);if((B=C.ArK._this)&&(
B._cycle!=D))B._Done(C.ArK._this=null);if((B=C.Ab6._this)&&(B._cycle!=D))B._Done(
C.Ab6._this=null);if((B=C.Aui._this)&&(B._cycle!=D))B._Done(C.Aui._this=null);};
return C;})();

/* VitalControl demonstration application, © Urban GmbH & Co.KG 2023 */