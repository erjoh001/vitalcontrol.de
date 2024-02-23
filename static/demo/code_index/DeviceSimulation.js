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
var Ca="ERROR: access to null Bool data in column [";var BD="]";var EW="Access to inexistent column index: ";
var Hh=", or not enough indexes for store column. You can increase the \'data\' "+
"array size to hold this column.";var I8="Unsupported filter criterion class";var
IJ="Operator not handled:";var OT="1,8";var PV="INFO: Device.StartScan() called.";
var PW="INFO: Device.StopScan() called.";var CM="V0.";var E4=".";var Lp="\n";var
PX="Temp: ";var Kq="Battery: ";var N6="%%";var PY="Selected animal with row index";
var MC="1,256,2,2048,4096,8192,4,8,16,128,64,32,1024,262144,16384,131072,512";var
SV="1,2";var UE="0,1,2";var ZD="3900,3950,4000";var WG="4050,4100,4150";var IK="Read only";
var UF="Unknown data export type: ";var ZE="Unhandled Device::DataExportType: ";
var WH="0,2,1";var ZF="650,150,700";var WI="800,200,900";var ZG="800,200,850";var
ZH="40000,4000,0";var UG="32,7,34,18,23,14";var WJ="16384";var Q9="1,1024";var ZI=
"1,256,1024";var OU="Simulate Scan";var Q_="BNR15;LOM;GEB_DATR;RASSE;GESCHL_R;GEB_VERL;VERBLEIB;MEHRLADR;LOM_MUT\n";
var WK="%d.%m.%Y";var WM="1";var WN="2";var WO="Unknown gender: ";var ZJ="text/csv";
var WQ="National-ID-Animal;Farm-ID-Animal;Transponder-ID;DateOfBirth;Sex;BirthWeight-Kg\n";
var WR="hit-geburt-%d-%m-%Y_%H-%M.csv";var SW="animals-%d-%m-%Y_%H-%M.csv";var ZK=
"hit-zugang-%d-%m-%Y_%H-%M.csv";var ZL="herde-zugang-%d-%m-%Y_%H-%M.csv";var Acp=
"M";var UH="F";var ZM="?";var Afb="%Y-%m-%d";var ZN="BNR15;LOM;ZUGA_DAT\n";var WS=
"Ohrnummer;Geburtsdatum;Geschlecht;Nutzung;Rasse;Zugangsdatum;Transponder\n";var
ZO="ERROR: Cannot start transaction";var ZP="Nested transactions are not allowed.";
var Afc="Transaction not opened.";var JQ="Wrong transaction ID.";var Acq="Unhandled TableId:";
var Lq="Maximum number of rows reached.";var Ahw="Animal row not found in DeviceSimulation::AnimalTableData. NaisId";
var AnO="10";var N7="20";var WT="30";var AnP="31";var Ahx="32";var Ahy="Severe: filter set when inserting row into table: ";
var Acr="ERROR: Row not found with index [";var UI="] while Rows Count = ";var AnQ=
"ERROR: trying to access an inexistent row with Index=";var AnR="Invalid Device::SyncState";
var AnS="Forwarding to home screen after 500 milliseconds ...";var AnT="Forwarding to home screen canceled...";
var Afd=[0,58,240,208];var AnU="VitalControl\nstarting up \u2026";
C.Table={GC:null,Init:function(aArg){var K=this.K;A.zV([this,this.Aj2],K.GC,0);},
CD:function(Ac,AZ){var K=this.K;return K.GC.CD(Ac,AZ);},VB:function(Ac,AZ){var K=
this.K;return K.GC.VB(Ac,AZ);},HW:function(Ac,AZ){var K=this.K;return K.GC.HW(Ac
,AZ);},OnSetId:function(E){var K=this.K;if(this.Id===E)return;this.Id=E;K.GC.OnSetId(
E);},Cb:function(){var K=this.K;return K.GC.Cb();},Bh:function(E){var K=this.K;A.
Device.ITable.Bh.call(this,E);K.GC.Bh(E);},VC:function(Ac,AZ){var K=this.K;return K.
GC.VC(Ac,AZ);},R7:function(Ac,AZ){var K=this.K;return K.GC.R7(Ac,AZ);},Ot:function(
){var K=this.K;return K.GC.Ot();},Ov:function(Aon){var K=this.K;return K.GC.Ov(Aon
);},Yj:function(){var K=this.K;return K.GC.Yj();},Zj:function(Ac,AZ,CW){var K=this.
K;return K.GC.Zj(Ac,AZ,CW);},He:function(Ac,AZ,CW){var K=this.K;return K.GC.He(Ac
,AZ,CW);},Zi:function(Ac,AZ,CW){var K=this.K;return K.GC.Zi(Ac,AZ,CW);},Mw:function(
Ac,AZ,CW){var K=this.K;return K.GC.Mw(Ac,AZ,CW);},Zh:function(Ac,AZ,CW){var K=this.
K;return K.GC.Zh(Ac,AZ,CW);},K9:function(aColumn,A2){var K=this.K;return K.GC.K9(
aColumn,A2);},LM:function(Ac,AZ){var K=this.K;return K.GC.LM(Ac,AZ);},Sz:function(
Ac,AZ,CW){var K=this.K;return K.GC.Sz(Ac,AZ,CW);},Agv:function(aColumn,A2){var K=
this.K;return K.GC.Agv(aColumn,A2);},Hd:function(){var K=this.K;return K.GC.Hd();
},Ajp:function(aColumn,A2){var K=this.K;return K.GC.Ajp(aColumn,A2);},AdW:function(
aColumn,A2){var K=this.K;return K.GC.AdW(aColumn,A2);},HA:function(){var K=this.
K;return K.GC.HA();},Aa2:function(){var K=this.K;return K.GC.Aa2();},Qx:function(
){var K=this.K;return K.GC.Qx();},_Init:function(aArg){var K=this.K;C.GC._Init.call(
K.GC={I:this},0);K.__proto__=C.Table;K.Init.call(this,aArg);A.h7++;},_Done:function(
){var K=this.K;K.__proto__=null;K.GC._Done();A.h7--;},_ReInit:function(){var K=this.
K;K.GC._ReInit();},_Mark:function(D){var B;if((B=this.GC)._cycle!=D)B._Mark(B._cycle=
D);},_variants:function(){return this;},_className:"DeviceSimulation::Table"};C.
AFF={S6:A.abi(42,null,null),CD:function(aColumn){var B;this.Z2(aColumn);var Aq=(
C.AC8.isPrototypeOf(B=this.S6.Get(aColumn))?B:null);if(!!Aq)return Aq.A6;return 0;
},VB:function(aColumn){var B;this.Z2(aColumn);var Aq=(C.String.isPrototypeOf(B=this.
S6.Get(aColumn))?B:null);if(!!Aq)return Aq.A6;return A.jV;},HW:function(aColumn){
var B;this.Z2(aColumn);var Aq=(C.ABf.isPrototypeOf(B=this.S6.Get(aColumn))?B:null
);if(!!Aq)return Aq.A6;else A.ab5("%s",(Ca+aColumn.toFixed())+BD);return false;}
,He:function(aColumn,A2){this.Z2(aColumn);var Aq=A._NewObject(C.AC8,0);Aq.A6=A2;
this.S6.Set(aColumn,Aq);return true;},Zh:function(aColumn,A2){this.Z2(aColumn);var
Aq=A._NewObject(C.String,0);Aq.A6=A2;this.S6.Set(aColumn,Aq);return true;},Mw:function(
aColumn,A2){this.Z2(aColumn);var Aq=A._NewObject(C.ABf,0);Aq.A6=A2;this.S6.Set(aColumn
,Aq);return true;},Z2:function(aColumn){if((aColumn<0)||(aColumn>=42))throw new Error((
EW+aColumn.toFixed())+Hh);},BhT:function(AM){if(!!(A.Device.Int32FilterCriterion.
isPrototypeOf(AM)?AM:null))return this.AIV(this.CD(AM.ES),AM.Operator,(A.Device.
Int32FilterCriterion.isPrototypeOf(AM)?AM:null).A6);else if(!!(A.Device.UInt32FilterCriterion.
isPrototypeOf(AM)?AM:null))return this.BwG(this.R7(AM.ES),AM.Operator,(A.Device.
UInt32FilterCriterion.isPrototypeOf(AM)?AM:null).A6);else if(!!(A.Device.StringFilterCriterion.
isPrototypeOf(AM)?AM:null))return this.BwF(this.VB(AM.ES),AM.Operator,(A.Device.
StringFilterCriterion.isPrototypeOf(AM)?AM:null).A6);else if(!!(A.Device.BoolFilterCriterion.
isPrototypeOf(AM)?AM:null))return this.BwE(this.HW(AM.ES),AM.Operator,(A.Device.
BoolFilterCriterion.isPrototypeOf(AM)?AM:null).A6);else if(!!(A.Device.AnimalTypeFilterCriterion.
isPrototypeOf(AM)?AM:null))return this.AIV(this.CD(AM.ES),AM.Operator,(A.Device.
AnimalTypeFilterCriterion.isPrototypeOf(AM)?AM:null).A6);else if(!!(A.Device.GenderFilterCriterion.
isPrototypeOf(AM)?AM:null))return this.AIV(this.CD(AM.ES),AM.Operator,(A.Device.
GenderFilterCriterion.isPrototypeOf(AM)?AM:null).A6);else if(!!(A.Device.AssessmentFilterCriterion.
isPrototypeOf(AM)?AM:null))return this.BwI(this.VC(AM.ES),AM.Operator,(((B=(A.Device.
AssessmentFilterCriterion.isPrototypeOf(AM)?AM:null).A6)<0)?B+0x100000000:B)&0xFF
);else if(!!(A.Device.UInt64FilterCriterion.isPrototypeOf(AM)?AM:null))return this.
BwH(this.LM(AM.ES),AM.Operator,(A.Device.UInt64FilterCriterion.isPrototypeOf(AM)?
AM:null).A6);else if(!!(A.Device.WhereAboutsFilterCriterion.isPrototypeOf(AM)?AM:
null))return this.AIV(this.CD(AM.ES),AM.Operator,(A.Device.WhereAboutsFilterCriterion.
isPrototypeOf(AM)?AM:null).A6);else throw new Error(I8);},AIV:function(H5,EF,H6){
switch(EF){case 0:return H5===H6;case 2:return H5>H6;case 3:return H5<H6;case 4:
return H5.toFixed().indexOf(H6.toFixed(),0)>=0;case 5:return H5!==H6;default:throw new
Error(IJ+EF.toFixed());}},BwF:function(H5,EF,H6){switch(EF){case 0:return H5===H6;
case 2:return H5>H6;case 3:return H5<H6;case 4:{A.ab5("%s%e%s%i",H5,EF,H6,H5.indexOf(
H6,0));return H5.indexOf(H6,0)>=0;}case 5:return H5!==H6;default:throw new Error(
IJ+EF.toFixed());}},BwE:function(H5,EF,H6){switch(EF){case 0:return H5===H6;case
2:case 3:case 4:return false;case 5:return H5!==H6;default:throw new Error(IJ+EF.
toFixed());}},VC:function(aColumn){var B;this.Z2(aColumn);var Aq=(C.AGh.isPrototypeOf(
B=this.S6.Get(aColumn))?B:null);if(!!Aq)return Aq.A6;return 0;},Zj:function(aColumn
,A2){this.Z2(aColumn);var Aq=A._NewObject(C.AGh,0);Aq.A6=A2;this.S6.Set(aColumn,
Aq);return true;},BwI:function(H5,EF,H6){switch(EF){case 0:return H5===H6;case 2:
return H5>H6;case 3:return H5<H6;case 5:return H5!==H6;default:throw new Error(IJ+
EF.toFixed());}},R7:function(aColumn){var B;this.Z2(aColumn);var Aq=(C.AGf.isPrototypeOf(
B=this.S6.Get(aColumn))?B:null);if(!!Aq)return Aq.A6;return 0;},Zi:function(aColumn
,A2){this.Z2(aColumn);var Aq=A._NewObject(C.AGf,0);Aq.A6=A2;this.S6.Set(aColumn,
Aq);return true;},BwG:function(H5,EF,H6){switch(EF){case 0:return H5===H6;case 2:
return H5>H6;case 3:return H5<H6;case 5:return H5!==H6;default:throw new Error(IJ+
EF.toFixed());}},LM:function(aColumn){var B;this.Z2(aColumn);var Aq=(C.AGg.isPrototypeOf(
B=this.S6.Get(aColumn))?B:null);if(!!Aq)return Aq.A6;return 0;},Sz:function(aColumn
,A2){this.Z2(aColumn);var Aq=A._NewObject(C.AGg,0);Aq.A6=A2;this.S6.Set(aColumn,
Aq);return true;},BwH:function(H5,EF,H6){switch(EF){case 0:return H5===H6;case 2:
return H5>H6;case 3:return H5<H6;case 5:return H5!==H6;default:throw new Error(IJ+
EF.toFixed());}},_Init:function(aArg){(this.S6=[]).__proto__=C.AFF.S6;this.__proto__=
C.AFF;A.h7++;},_Done:function(){this.__proto__=null;A.h7--;},_ReInit:function(){
},_Mark:function(D){var B;A.aa6(this.S6,D);if((B=this.I)&&(B._cycle!=D))B._Mark(
B._cycle=D);},I:null,_cycle:0,_observers:null,_className:"DeviceSimulation::RowData"
};C.V_={_Init:function(aArg){this.__proto__=C.V_;A.h7++;},_Done:function(){this.
__proto__=null;A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((B=this.
I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:
"DeviceSimulation::NativeType"};C.AC8={A6:0,_Init:function(aArg){C.V_._Init.call(
this,aArg);this.__proto__=C.AC8;},_className:"DeviceSimulation::Int32"};C.String={
A6:A.jV,_Init:function(aArg){C.V_._Init.call(this,aArg);this.__proto__=C.String;
},_className:"DeviceSimulation::String"};C.ABf={A6:false,_Init:function(aArg){C.
V_._Init.call(this,aArg);this.__proto__=C.ABf;},_className:"DeviceSimulation::Bool"
};C.DeviceClass={AtI:null,AI1:null,AiF:null,Aap:null,CU:function(){var K=this.K;
K.A95.call(this,this);},Init:function(aArg){var K=this.K;var B;this.Y4(3);A.zX([
this,K.AAv],[B=K.AtI,B.A7Z,B.ASz],0);this.UpdateAutoActions(OT);K.A95.call(this,
this);this.ArP(this);this.ArQ(this);this.ArL(this);this.ArN(this);this.ArM(this);
this.AwK(this);this.AwL(this);this.AwM(this);var languageMin=0;var languageMax=17;
var languageValue=-1;{if(typeof ewLanguage==='number'&&Number.isInteger(ewLanguage
)&&ewLanguage>=languageMin&&ewLanguage<languageMax){languageValue=ewLanguage;}}if(
languageValue>=0)this.Anb(languageValue);A.pe([this,K.AS1],this);},Y4:function(E
){this.UpdateActiveScreen(E);},AvQ:function(E){this.UpdateBatteryChargeState(E);
},AEc:function(E){this.UpdateChargeActive(E);},Arn:function(E){this.UpdateScanState(
E);},Awb:function(E){this.UpdateMeasureState(E);},Awo:function(E){this.UpdateTempValue(
E);},Anb:function(E){this.UpdateLanguage(E);},Awp:function(E){this.UpdateTemperatureUnit(
E);},AEa:function(E){this.UpdateBrightness(E);},AEK:function(E){this.UpdateMonitoring(
E);},Aw0:function(){var B;if(A._GetAutoObject(C.Um).AwV){this.UpdateMeasureState(
1);A._GetAutoObject(A.Device.Helper).AKf(this);}},Ahm:function(){var B;A._GetAutoObject(
A.Device.Helper).SC.Anx(this);this.UpdateMeasureState(0);},Ahj:function(){var K=
this.K;A.ab5("%s",PV);this.UpdateScanState(1);A.pe([this,K.AAv],this);},Any:function(
){var K=this.K;var B;A.ab5("%s",PW);K.AiF.Anx(this);this.UpdateScanState(0);},SetSystemTime:
function(AhL){},AwU:function(){A.Device.DeviceClass.A$w.call(this);this.Y4(1);},
AFC:function(){A.Device.DeviceClass.A$u.call(this);this.Y4(2);},Cd:function(E){this.
UpdateOverlayMenu(E);},Awu:function(E){this.UpdateUnderTemp(E);},AbO:function(E){
this.UpdateSyncState(E);},ACk:function(){var aString;aString=((((((((((CM+A.abz(
0,9).toFixed())+E4)+A.abz(0,9).toFixed())+Lp)+PX)+A.abz(30,90).toFixed())+A.aaR(
A.acf.AF5))+Lp)+Kq)+A.abz(1,100).toFixed())+N6;return aString;},PopupStateChanged:
function(Kt,Ae){var AfX=A._NewObject(C.PopupContext,0);AfX.Id=Kt;AfX.Go=Ae;this.
Anm.Trigger(AfX,false);},AE$:function(E){this.UpdateVibrationOnKeypressEnabled(E
);},AeH:function(E){this.UpdateVibrationOn(E);},Awl:function(E){this.UpdateRatingMode(
E);},Aey:function(E){this.UpdateFlashLightOn(E);},Uc:function(E){this.UpdateTopLightOn(
E);},Wi:function(E){this.UpdateRGBTopLight(E);},AvP:function(E){this.UpdateAutoRegistrationMode(
E);},Aro:function(E){this.UpdateScanTransponder(E.Id,E.TransponderType,E.TransponderProtocol
);},PH:function(E){this.UpdateDigitsID(E);},QS:function(E){this.UpdateOffsetID(E
);},AFd:function(E){this.UpdateWeightValue(E);},Av_:function(E){this.UpdateMassUnit(
E);},Aq2:function(E){A.Device.DeviceClass.A$q.call(this,E);this.UpdateActiveActions(
E);},Aq3:function(E){A.Device.DeviceClass.A$r.call(this,E);this.UpdateActiveActionsOrder(
E);},Aj6:function(E){A.Device.DeviceClass.A$s.call(this,E);this.UpdateAutoActions(
E);},AF1:function(){var K=this.K;this.UpdateMeasureState(1);K.BzY.call(this,this
);},Ar4:function(){var K=this.K;var B;K.Aap.Anx(this);this.UpdateMeasureState(0);
},DT:function(E){this.UpdateAnimalType(E);},Awv:function(E){this.UpdateWeightRecordingMode(
E);},AEQ:function(E){this.UpdatePredictedTempValue(E);},Sy:function(L1){A.ab5("%s%i"
,PY,L1);},AEi:function(E){this.UpdateDemoMode(E);},AD1:function(E){this.UpdateAgeRegistration(
E);},Aww:function(E){this.UpdateWeightRecordingScope(E);},JJ:function(E){this.UpdateGender(
E);},Arg:function(E){this.UpdateIDLastUsedMale(E);},Arf:function(E){this.UpdateIDLastUsedFemale(
E);},AbF:function(E){this.UpdateAnimalListContent(E);},AD3:function(E){this.UpdateAlarmListAction(
E);},AEl:function(E){this.UpdateFlashLightInMeasureState(E);},Aeu:function(E){this.
UpdateAnimalInfoContent(E);},AFc:function(E){this.UpdateWatchListAction(E);},AEo:
function(E){this.UpdateFreshCowListAction(E);},ArL:function(G){this.Aq2(15359);this.
Aq3(MC);},ArN:function(G){this.Aj6(SV);},AvN:function(E){this.UpdateAnimalTypesString(
E);},Arq:function(E){this.UpdateTemperaturesHighString(E);},Arr:function(E){this.
UpdateTemperaturesLowString(E);},ArP:function(G){this.AvN(UE);this.Arr(ZD);this.
Arq(WG);this.Awu(3600);},Av5:function(E){this.UpdateFreshCowsHideMeasured(E);},Ark:
function(E){this.UpdateNaisIdLastUsedMale(E);},Arj:function(E){this.UpdateNaisIdLastUsedFemale(
E);},Awf:function(E){this.UpdateNaisIdIncrementMale(E);},Awe:function(E){this.UpdateNaisIdIncrementFemale(
E);},UpdateFirmware:function(){A.Device.DeviceClass.A$x.call(this);A._GetAutoObject(
A.kR.AW).BS(61);},Am8:function(E){this.UpdateBootloaderMessage(E);},ADY:function(
E){this.UpdateActionListAction(E);},AvL:function(E){this.UpdateActionListHideMeasured(
E);},T8:function(E){this.UpdateAnimalIdGenerationMethod(E);},AvY:function(E){this.
UpdateDirectionOfCountingFemale(E);},AvZ:function(E){this.UpdateDirectionOfCountingMale(
E);},Av0:function(E){this.UpdateDirectionOfCountingUnisex(E);},Arh:function(E){this.
UpdateIDLastUsedUnisex(E);},Arl:function(E){this.UpdateNaisIdLastUsedUnisex(E);}
,Awg:function(E){this.UpdateNaisIdIncrementUnisex(E);},Aj9:function(E){this.UpdateEartagNrAssignmentMode(
E);},NR:function(E){this.UpdateBreed(E);},AEH:function(E){throw new Error(IK);},
AEB:function(E){throw new Error(IK);},AE8:function(E){throw new Error(IK);},AD8:
function(E){throw new Error(IK);},AEj:function(E){this.UpdateDryCowListAction(E);
},AIS:function(AZI){var Ql;switch(AZI){case 15:Ql=false;break;default:Ql=true;}return Ql;
},AD7:function(E){this.UpdateBirthListView(E);},AE9:function(E){this.UpdateTransferProgress(
E);},Ars:function(E){this.UpdateTransferTarget(E);},Ar3:function(){var B;A.pe([B=
A._GetAutoObject(C.Ab5),B.BeI],this);},Awk:function(E){this.UpdatePremisesID(E);
},Awd:function(E){this.UpdateMotherSelectionDriedOffFilter(E);},AEp:function(E){
this.UpdateFreshCowSpan(E);},AE_:function(E){this.UpdateUSBState(E);},Anu:function(
AhG){var K=this.K;var result=A._NewObject(C.Aji,0);result.ABK=AhG;result.FileName=
K.Bhc.call(this,AhG);switch(AhG){case 0:K.BwS.call(this,result);break;case 1:K.BwO.
call(this,result);break;case 2:K.BwT.call(this,result);break;case 3:K.BwR.call(this
,result);break;default:throw new Error(UF+AhG.toFixed());}K.AI1=result;return result;
},AqF:function(){return true;},Ap7:function(Nj){var K=this.K;switch(Nj.ABK){case
0:A._GetAutoObject(A.Device.Device).A5(72,true,A.jV,0,[this,K.A13]);break;case 1:
A._GetAutoObject(A.Device.Device).A5(90,true,A.jV,0,[this,K.A13]);break;case 2:case
3:A._GetAutoObject(A.Device.Device).A5(99,true,A.jV,0,[this,K.A13]);break;default:
throw new Error(ZE+Nj.ABK.toFixed());}},AEW:function(E){throw new Error(IK);},AvM:
function(E){this.UpdateAnimalIdAutoGenerationMethod(E);},AEY:function(E){this.UpdateShutdownTimer(
E);},Aq8:function(E){this.UpdateAnimalListInfoItemMode(E);},ArQ:function(G){this.
AvO(WH);this.Arw(ZF);this.Arv(WI);this.Aru(ZG);this.Arx(ZH);},Arv:function(E){this.
UpdateWeightGainsHighString(E);},Arw:function(E){this.UpdateWeightGainsLowString(
E);},AvO:function(E){this.UpdateAnimalTypesWeightGainsString(E);},Aru:function(E
){this.UpdateWeightGainsAverageString(E);},Arx:function(E){this.UpdateWeightValueBirthString(
E);},Av1:function(E){this.UpdateEvaluationAnimalType(E);},Awn:function(E){this.UpdateStartScreen(
E);},AC$:function(){return 1;},ADa:function(){return 1;},AEG:function(E){this.UpdateMaximumAgeNewOnFarm(
E);},Awt:function(E){this.UpdateTransponderAssignmentIdChangeMethod(E);},AEh:function(
E){this.UpdateDataExportDestination(E);},Nc:function(E){this.UpdateWhereAbouts(E
);},Aq5:function(E){this.UpdateActiveMassRecordingFields(E);},Aq6:function(E){this.
UpdateActiveMassRecordingFieldsOrder(E);},ArM:function(G){this.Aq5(A.jV);this.Aq6(
UG);},AEE:function(E){this.UpdateMassRecordingDateOfBirthMandatory(E);},Ajc:function(
){A._GetAutoObject(C.Ab5).AD6(true);return true;},ApT:function(){var B;A._GetAutoObject(
C.Ab5).ApT(this);return true;},ApS:function(){var B;A.pe([B=A._GetAutoObject(C.Ab5
),B.ApS],this);return true;},Aue:function(){var B;A.pe([B=A._GetAutoObject(C.Ab5
),B.BfM],this);return true;},Awa:function(E){this.UpdateMaxWeightValuePrecision(
E);},Awh:function(E){this.UpdateNoNaisIdListActions(E);},AwK:function(G){this.Awh(
WJ);},Awi:function(E){this.UpdateNoTransponderListActions(E);},AwL:function(G){this.
Awi(Q9);},Awy:function(E){this.UpdateYoungNoTransponderListActions(E);},AwM:function(
G){this.Awy(ZI);},BzJ:function(G){switch(this.KA){case 34:case 35:case 32:case 50:
case 55:case 63:case 91:{this.UpdateScanTransponder(12310020,1,0);this.UpdateScanState(
2);}break;case 15:break;default:this.UpdateScanState(4);}},AAv:function(G){var K=
this.K;var B;if((this.ScanState===1)&&K.AtI.AFW)K.AiF.Anv(this);A.ab5("%s",OU);}
,BzY:function(G){var K=this.K;var B;if((this.MeasureState===1)&&K.AtI.AwV)K.Aap.
Anv(this);},BAD:function(G){this.UpdateMeasureState(3);},AS1:function(G){var K=this.
K;var B;A.zX([B=A._GetAutoObject(A.Device.Helper),B.AKf],[B=K.AtI,B.A70,B.ASA],0
);this.RK.AEg(A._GetAutoObject(A.Device.Helper).A5P(8));this.Sl.AEg(A._GetAutoObject(
A.Device.Helper).A5P(8));},A95:function(G){var Ay6=A._NewObject(A.Device.AwZ,0);
Ay6.OnSetTimestamp(1708590020);Ay6.AEC(1);Ay6.AEJ(0);Ay6.AET(0);this.Sl=Ay6;var Ayz=
A._NewObject(A.Device.AwZ,0);Ayz.OnSetTimestamp(1708590020);Ayz.AEC(1);Ayz.AEJ(0
);Ayz.AET(4);this.RK=Ayz;var Alq=A._NewObject(A.Device.AuU,0);Alq.AEz(1);Alq.AEA(
0);Alq.AEy(0);Alq.AE6(1);Alq.AE7(0);Alq.AE5(0);Alq.OnSetTimestamp(1708590020);this.
QN=Alq;var AlS=A._NewObject(A.Device.AuU,0);AlS.AEz(1);AlS.AEA(0);AlS.AEy(0);AlS.
AE6(1);AlS.AE7(0);AlS.AE5(0);AlS.OnSetTimestamp(1708590020);this.SJ=AlS;this.Ahi=
A.aaR(A.acf.Unknown);},Bxc:function(aFilename,aMimeType,aContent){{var bb=new Blob([
aContent],{type:aMimeType});var a=document.createElement('a');a.download=aFilename;
a.href=window.URL.createObjectURL(bb);a.click();}},BwS:function(Nj){var K=this.K;
var B;var S5=Q_;var B6=A._NewObject(A.Device.Animal,0);var P;var Adi=0;for(P=0;P<
A._GetAutoObject(A.Device.Device).Ap.Cb();P++){B6.EB(P,A._GetAutoObject(A.Device.
Device).Ap);if(B6.IsRegistrationNoticePending&&(B6.NaisId>0)){S5=S5+(((((((((((((((((
K.Aib.call(this,A._GetAutoObject(A.Device.Device).Ui)+String.fromCharCode(0x3B))+
K.Aib.call(this,B6.NaisId))+String.fromCharCode(0x3B))+K.AJk.call(this,B6.DateOfBirth
))+String.fromCharCode(0x3B))+K.BbN.call(this,B6.Breed))+String.fromCharCode(0x3B
))+K.BbM.call(this,B6.Gender))+String.fromCharCode(0x3B))+K.Bxh.call(this,B6.EaseOfDelivery
))+String.fromCharCode(0x3B))+K.BbO.call(this,B6.WhereAbouts))+String.fromCharCode(
0x3B))+K.Bxk.call(this,B6.BirthType))+String.fromCharCode(0x3B))+K.Aib.call(this
,B6.NaisIdMother))+Lp);Adi++;}}Nj.Auw=S5;Nj.AFG=Adi;Nj.Anz=true;},Aib:function(Rb
){if(!Rb)return A.jV;return Rb.toFixed();},AJk:function(AZH){var Au=A._NewObject(
A.Core.Bt,0);Au.Initialize(AZH);return Au.Format(WK);},BbN:function(AcD){if(!AcD
)return A.jV;return A._GetAutoObject(A.Device.Converter).A4r(AcD).toFixed();},BbM:
function(LY){var result=A.jV;switch(LY){case 0:result=WM;break;case 1:result=WN;
break;case 2:result=A.jV;break;default:A.ab5("%s",WO+LY.toFixed());}return result;
},Bxh:function(AIi){if(!AIi)return A.jV;return AIi.toFixed();},BbO:function(Afn){
if(!Afn)return A.jV;return Afn.toFixed();},Bxk:function(AsK){return(AsK+1).toFixed(
);},A13:function(G){var K=this.K;var As=(A.Device.PopupContext.isPrototypeOf(G)?
G:null);if(!!As&&(As.PopupState===7))K.Bxc.call(this,K.AI1.FileName,ZJ,K.AI1.Auw
);},BwO:function(Nj){var K=this.K;var B;var S5=WQ;var B6=A._NewObject(A.Device.Animal
,0);var P;var Adi=0;for(P=0;P<A._GetAutoObject(A.Device.Device).Ap.Cb();P++){var
Ayv=A.jV;if(B6.AqE())Ayv=K.Bxm.call(this,B6.FirstBodyWeight);B6.EB(P,A._GetAutoObject(
A.Device.Device).Ap);S5=S5+(((((((((((K.Aib.call(this,B6.NaisId)+String.fromCharCode(
0x3B))+K.Bxi.call(this,B6.VisualId))+String.fromCharCode(0x3B))+K.Aib.call(this,
B6.TransponderId))+String.fromCharCode(0x3B))+K.Bxg.call(this,B6.DateOfBirth))+String.
fromCharCode(0x3B))+K.Bxl.call(this,B6.Gender))+String.fromCharCode(0x3B))+Ayv)+
Lp);Adi++;}Nj.Auw=S5;Nj.AFG=Adi;Nj.Anz=true;},Bhc:function(AhG){var Ay5=A.jV;var
Ad=A._NewObject(A.Core.Bt,0);Ad.Initialize(A._GetAutoObject(A.Device.Helper).DF(
));switch(AhG){case 0:Ay5=Ad.Format(WR);break;case 1:Ay5=Ad.Format(SW);break;case
2:Ay5=Ad.Format(ZK);break;case 3:Ay5=Ad.Format(ZL);break;default:throw new Error(
UF+AhG.toFixed());}return Ay5;},Bxi:function(Rb){return Rb.toFixed();},Bxl:function(
LY){var result=A.jV;switch(LY){case 0:result=Acp;break;case 1:result=UH;break;case
2:result=ZM;break;default:A.ab5("%s",WO+LY.toFixed());}return result;},Bxm:function(
MH){if(MH<=0)return A.jV;return A._GetAutoObject(A.Device.Converter).AkK(MH);},Bxg:
function(AZH){var Au=A._NewObject(A.Core.Bt,0);Au.Initialize(AZH);return Au.Format(
Afb);},BwT:function(Nj){var K=this.K;var B;var S5=ZN;var B6=A._NewObject(A.Device.
Animal,0);var P;var Adi=0;for(P=0;P<A._GetAutoObject(A.Device.Device).Ap.Cb();P++
){B6.EB(P,A._GetAutoObject(A.Device.Device).Ap);if(B6.IsRegistrationNoticePending&&(
B6.NaisId>0)){S5=S5+(((((K.Aib.call(this,A._GetAutoObject(A.Device.Device).Ui)+String.
fromCharCode(0x3B))+K.Aib.call(this,B6.NaisId))+String.fromCharCode(0x3B))+K.AJk.
call(this,A._GetAutoObject(A.Device.Helper).DF()))+Lp);Adi++;}}Nj.Auw=S5;Nj.AFG=
Adi;Nj.Anz=true;},BwR:function(Nj){var K=this.K;var B;var S5=WS;var B6=A._NewObject(
A.Device.Animal,0);var P;var Adi=0;for(P=0;P<A._GetAutoObject(A.Device.Device).Ap.
Cb();P++){B6.EB(P,A._GetAutoObject(A.Device.Device).Ap);if(B6.IsRegistrationNoticePending&&(
B6.NaisId>0)){S5=S5+(((((((((((((K.Aib.call(this,B6.NaisId)+String.fromCharCode(
0x3B))+K.AJk.call(this,B6.DateOfBirth))+String.fromCharCode(0x3B))+K.BbM.call(this
,B6.Gender))+String.fromCharCode(0x3B))+K.BbO.call(this,B6.WhereAbouts))+String.
fromCharCode(0x3B))+K.BbN.call(this,B6.Breed))+String.fromCharCode(0x3B))+K.AJk.
call(this,A._GetAutoObject(A.Device.Helper).DF()))+String.fromCharCode(0x3B))+K.
Aib.call(this,B6.TransponderId))+Lp);Adi++;}}Nj.Auw=S5;Nj.AFG=Adi;Nj.Anz=true;},
_Init:function(aArg){var K=this.K;A.acl.Ga._Init.call(K.AiF={I:this},0);A.acl.Ga.
_Init.call(K.Aap={I:this},0);K.__proto__=C.DeviceClass;this.AvQ(100);this.Anb(1);
this.Arg(200);this.Arf(100);this.Ark(276000912345678);this.Arj(276000923456789);
this.Arh(500);this.Arl(276000901234567);this.NR(1);K.AiF.HG(1);K.AiF.Fe(1000);K.
Aap.Wj(0);K.Aap.HG(1);K.Aap.Fe(750);K.Aap.B0=50000;K.AiF.Sm=[this,K.BzJ];K.AtI=A.
_GetAutoObject(C.Um);K.Aap.Sm=[this,K.BAD];K.Aap.Q=[this,this.ADW,this.AH8];K.Init.
call(this,aArg);A.h7++;},_Done:function(){var K=this.K;K.__proto__=null;K.AiF._Done(
);K.Aap._Done();A.h7--;},_ReInit:function(){var K=this.K;K.AiF._ReInit();K.Aap._ReInit(
);K.CU.call(this);},_Mark:function(D){var B;if((B=this.AtI)&&(B._cycle!=D))B._Mark(
B._cycle=D);if((B=this.AI1)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.AiF)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.Aap)._cycle!=D)B._Mark(B._cycle=D);},_variants:
function(){return A.acp.DeviceClass._variants();},_className:"DeviceSimulation::DeviceClass"
};C.AGh={A6:0,_Init:function(aArg){C.V_._Init.call(this,aArg);this.__proto__=C.AGh;
},_className:"DeviceSimulation::UInt8"};C.AGf={A6:0,_Init:function(aArg){C.V_._Init.
call(this,aArg);this.__proto__=C.AGf;},_className:"DeviceSimulation::UInt32"};C.
HelperClass={A28:0,AEZ:function(E){var K=this.K;K.A28=K.A28+(E-this.DF());A.Device.
HelperClass.A$t.call(this,E);},DF:function(){var K=this.K;return A.Device.HelperClass.
A$p.call(this)+K.A28;},_Init:function(aArg){var K=this.K;K.__proto__=C.HelperClass;
A.h7++;},_Done:function(){var K=this.K;K.__proto__=null;A.h7--;},_ReInit:function(
){},_Mark:function(D){},_variants:function(){return this;},_className:"DeviceSimulation::HelperClass"
};C.A_a={AwV:false,AFW:false,ASz:function(E){if(this.AFW===E)return;this.AFW=E;A.
abo([this,this.A7Z,this.ASz],0);},A7Z:function(){return this.AFW;},ASA:function(
E){if(this.AwV===E)return;this.AwV=E;A.abo([this,this.A70,this.ASA],0);},A70:function(
){return this.AwV;},_Init:function(aArg){this.__proto__=C.A_a;A.h7++;},_Done:function(
){this.__proto__=null;A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((
B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:
"DeviceSimulation::SimulationConfigClass"};C.Um={_Init:function(){C.A_a._Init.call(
this,0);},_ReInit:function(){},_variants:function(){return A.acp.Um._variants();
},_this:null};C.PopupContext={Go:1,Id:0,_Init:function(aArg){this.__proto__=C.PopupContext;
A.h7++;},_Done:function(){this.__proto__=null;A.h7--;},_ReInit:function(){},_Mark:
function(D){var B;if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:
0,_observers:null,_className:"DeviceSimulation::PopupContext"};C.Rating={Cl:function(
AG){var Hv=A.Device.Rating.A$v.call(this,AG);if(Hv){var Rh=A._GetAutoObject(A.Device.
Device).Ap;var Ac=A._GetAutoObject(A.Device.Device).Ap.K9(0,this.AnimalId);if(Ac
!==-1){var Jd=Rh.Ot();if(Jd<=0)A.ab5("%s",ZO);else{var B6=A._NewObject(A.Device.
Animal,0);B6.EB(Ac,Rh);if((this.Temperature>0)&&(B6.TimestampLastTemperature<this.
Timestamp)){Rh.A94(Ac,5,this.Temperature);Rh.Akt(Ac,17,this.RatingTemperature);Rh.
Ab2(Ac,30,this.Timestamp);}if(this.BodyWeight>0){if(B6.TimestampLastWeighing<=this.
Timestamp){Rh.ATz(Ac,18,this.BodyWeight);Rh.Ab2(Ac,19,this.Timestamp);}if(!B6.TimestampFirstWeighing||(
B6.TimestampFirstWeighing>=this.Timestamp)){Rh.ATz(Ac,23,this.BodyWeight);Rh.Ab2(
Ac,24,this.Timestamp);Rh.He(Ac,25,this.Id);}}if(A._GetAutoObject(A.Device.Helper
).AFv(this)){var LK=A._GetAutoObject(A.Device.Helper).ACp(this);Rh.Akt(Ac,13,LK);
Rh.Ab2(Ac,31,this.Timestamp);}Rh.Ov(Jd);}}}return Hv;},_Init:function(aArg){var K=
this.K;K.__proto__=C.Rating;A.h7++;},_Done:function(){var K=this.K;K.__proto__=null;
A.h7--;},_ReInit:function(){},_Mark:function(D){},_variants:function(){return this;
},_className:"DeviceSimulation::Rating"};C.PL={FX:A.abi(512,null,null),O8:0,AIH:
0,AKo:0,A2$:A.abi(10,0,{0:3600,1:3750,2:3900,3:4200,4:3780,5:3600,6:3900,7:4010,
8:4020,9:4030}),AJY:0,A2E:A.abi(10,0,{0:5,1:4,2:3,3:1,4:2,5:1,6:1,7:1,8:1,9:1}),
BcE:512,Azw:-1,A0f:A.abi(15,0,{0:2,1:2,2:2,3:2,4:2,5:3,6:3,7:3,8:3,9:3,10:1,11:1
,12:1,13:1,14:1}),AJx:false,CD:function(Ac,AZ){var Ba=this.TI(Ac);if(!!Ba)return Ba.
CD(AZ);return 0;},VB:function(Ac,AZ){var Ba=this.TI(Ac);if(!!Ba)return Ba.VB(AZ);
return A.jV;},HW:function(Ac,AZ){var Ba=this.TI(Ac);if(!!Ba)return Ba.HW(AZ);return false;
},VC:function(Ac,AZ){var Ba=this.TI(Ac);if(!!Ba)return Ba.VC(AZ);return 0;},R7:function(
Ac,AZ){var Ba=this.TI(Ac);if(!!Ba)return Ba.R7(AZ);return 0;},Ot:function(){if(this.
AJx)throw new Error(ZP);this.AJx=true;return 12345;},Ov:function(Aon){if(!this.AJx
)throw new Error(Afc);if(Aon!==12345)throw new Error(JQ);this.AJx=false;return true;
},Yj:function(){return this.A3I(A._NewObject(C.AFF,0));},Zj:function(Ac,AZ,CW){var
Ba=this.TI(Ac);if(!!Ba)return Ba.Zj(AZ,CW);return false;},He:function(Ac,AZ,CW){
var Ba=this.TI(Ac);if(!!Ba)return Ba.He(AZ,CW);return false;},Zi:function(Ac,AZ,
CW){var Ba=this.TI(Ac);if(!!Ba)return Ba.Zi(AZ,CW);return false;},Mw:function(Ac
,AZ,CW){var Ba=this.TI(Ac);if(!!Ba)return Ba.Mw(AZ,CW);return false;},Zh:function(
Ac,AZ,CW){var Ba=this.TI(Ac);if(!!Ba)return Ba.Zh(AZ,CW);return false;},OnSetId:
function(E){if(this.Id===E)return;this.Id=E;this.Bbn();switch(this.Id){case 0:{this.
BcE=128;A.pe([this,this.BuJ],this);}break;case 1:A.pe([this,this.BuL],this);break;
case 3:A.pe([this,this.BuI],this);break;case 4:A.pe([this,this.BuK],this);break;
case 2:break;default:throw new Error(Acq+this.Id.toFixed());}},Cb:function(){return this.
O8;},LM:function(Ac,AZ){var Ba=this.TI(Ac);if(!!Ba)return Ba.LM(AZ);return 0;},Sz:
function(Ac,AZ,CW){var Ba=this.TI(Ac);if(!!Ba)return Ba.Sz(AZ,CW);return false;}
,Hd:function(){this.Bbn();return true;},HA:function(){return this.BcE;},A3I:function(
Ac){if(this.O8>=512)throw new Error(Lq);this.FX.Set(this.O8,Ac);this.O8=this.O8+
1;switch(this.Id){case 0:{this.Azw=this.O8;this.He(this.O8-1,0,this.Azw);}break;
case 1:{this.Azw=this.O8-1;this.He(this.O8-1,0,this.Azw);}break;default:;}A.pe([
this,this.Aj2],this);return this.O8-1;},TI:function(aIndex){if((aIndex<0)||(aIndex>=
512))return null;return this.FX.Get(aIndex);},Bbn:function(){var P;for(P=0;P<512;
P=P+1)this.FX.Set(P,null);this.O8=0;this.AIH=0;this.AJY=0;this.AKo=0;A.pe([this,
this.Aj2],this);},AJs:function(){this.AIH=(this.AIH+1)%15;return this.A0f.Get(this.
AIH);},A04:function(){this.AKo=(this.AKo+1)%10;return this.A2$.Get(this.AKo);},AJd:
function(G){if(this.K&&this.K.AJd)return this.K.AJd.apply(this,arguments);else return C.
PL.BuR.apply(this,arguments);},BuR:function(G){var B;var Od=true;this.Bk(276000312310001
,10,1,A._GetAutoObject(A.Device.Helper).Aho(12),0,1,true,true,false,true,39000,0
,0,false,0,false,0,0,0,0);this.Bk(12310020,20,12,A._GetAutoObject(A.Device.Helper
).Aho(12),0,0,false,false,true,true,36500,0,0,false,0,false,0,0,0,0);this.Bk(276000312310021
,10,1,A._GetAutoObject(A.Device.Helper).Aho(9),0,0,true,false,false,true,37200,0
,0,false,0,false,0,0,0,0);this.Bk(276000312310022,20,2,A._GetAutoObject(A.Device.
Helper).Aho(830),0,1,false,false,false,true,41200,A._GetAutoObject(A.Device.Helper
).Aho(1),1,true,1,false,0,0,0,0);this.Bk(276000312310023,20,2,A._GetAutoObject(A.
Device.Helper).Aho(1200),0,1,false,false,false,true,43500,A._GetAutoObject(A.Device.
Helper).Aho(8),2,false,1,false,0,0,0,0);this.Bk(276000312310026,20,2,A._GetAutoObject(
A.Device.Helper).Aho(8),0,0,true,false,false,true,34000,0,0,false,0,false,0,0,0,
0);var P;var BeO=0;for(P=1;P<=7;P=P+1){BeO=3680+(20*P);Od=BeO>3800;this.Bk(276000312310050+(((
B=P)<0)?B+0x10000000000000000:B),30+(P%3),3,A._GetAutoObject(A.Device.Helper).Aho(
7-P),0,1,Od,false,false,true,36000+(P*900),0,0,false,0,true,0,0,0,0);}},BuJ:function(
s){this.AJd(s);},AJf:function(G){if(this.K&&this.K.AJf)return this.K.AJf.apply(this
,arguments);else return C.PL.BuT.apply(this,arguments);},BuT:function(G){var Ad=
A._GetAutoObject(A.Device.Helper).DF();var P;Ad=Ad-2678400;var Aia;var BbE;for(P=
0;P<32;P=P+1){var A0P=this.Bxy();for(;A0P>0;A0P=A0P-1){Aia=this.A04();BbE=A._GetAutoObject(
A.Device.Converter).Ar6(0,Aia);this.AF(Ad,12310020,Aia,BbE,this.AJs(),this.AJs()
,this.AJs(),this.AJs(),0);}Ad=Ad+86400;}Ad=Ad-86400;this.AF(Ad,12310020,0,0,0,0,
0,0,43700);this.AF(Ad-86400,276000312310001,0,0,0,0,0,0,49800);this.AF(Ad,276000312310001
,0,0,0,0,0,0,51000);Aia=this.A04();this.AF(Ad,276000312310001,Aia,A._GetAutoObject(
A.Device.Converter).Ar6(0,Aia),1,3,3,3,0);Aia=this.A04();this.AF(Ad-86400,276000312310022
,3800,A._GetAutoObject(A.Device.Converter).Ar6(1,3800),2,3,3,3,0);this.AF(Ad,276000312310022
,Aia,A._GetAutoObject(A.Device.Converter).Ar6(1,Aia),2,3,3,3,0);},BuL:function(s
){this.AJf(s);},Bk:function(Kt,Bve,Bvv,Bau,AsK,LY,Bvl,Bvr,Bvo,Bvp,MH,Bu2,Bvt,Bvn
,Ee,Bvq,AcD,AIi,Afn,BvA){var B6=A._NewObject(A.Device.Animal,0);B6.Gf();B6.Awx(0
);B6.AeE(0);B6.Ua(false);B6.Akd(false);B6.NU(Kt);B6.Nb(Kt);B6.Ud(A._GetAutoObject(
A.Device.Helper).AkG(B6.TransponderId));B6.AbJ(Bve);B6.Anc(Bvv);B6.Sp(Bau);B6.Aj7(
AsK);B6.JJ(LY);B6.Ans(Bvl);B6.AFP(Bvr);B6.Ag5(Bvp);B6.Ua(Bvo);B6.Ari(Bvn);B6.Av7(
Bvt);B6.AvV(Bu2);B6.DT(Ee);B6.AeB(Bvq);B6.NR(AcD);B6.Aj_(AIi);B6.Nc(Afn);B6.Ane(
BvA);B6.Cl(this);if(MH>0)A._GetAutoObject(C.ArF).AF(Bau,Kt,0,0,0,0,0,0,MH);},AF:
function(LX,AcB,Aol,BvM,Bu_,Bu$,BuV,BvO,BuW){var BY=A._NewObject(A.Device.Rating
,0);BY.Gf();var Ba8=A._GetAutoObject(C.Al7).ANL(26,AcB);if(Ba8>=0)BY.OnSetAnimalId(
A._GetAutoObject(C.Al7).CD(Ba8,0));else A.ab5("%s%U",Ahw,AcB);BY.OnSetTimestamp(
LX);BY.OnSetTemperature(Aol);BY.OnSetRatingTemperature(BvM);BY.OnSetFaeces(Bu_);
BY.OnSetFeed(Bu$);BY.OnSetAppearance(BuV);BY.OnSetRespiratory(BvO);BY.OnSetBodyWeight(
BuW);BY.Cl(this);},A5s:function(aColumn,A2){var P;for(P=0;P<this.O8;P=P+1)if(this.
FX.Get(P).CD(aColumn)===A2)return P;return-1;},Bxy:function(){this.AJY=(this.AJY+
1)%10;return this.A2E.Get(this.AJY);},AJc:function(G){if(this.K&&this.K.AJc)return this.
K.AJc.apply(this,arguments);else return C.PL.BuQ.apply(this,arguments);},BuQ:function(
G){this.Alk(10,AnO);this.Alk(20,N7);this.Alk(30,WT);this.Alk(31,AnP);this.Alk(32
,Ahx);},BuI:function(s){this.AJc(s);},Alk:function(Kt,Bvf){var AIA=A._NewObject(
A.Device.AnimalGroup,0);AIA.Gf();AIA.OnSetId(Kt);AIA.AEr(Bvf);AIA.Cl(this);},Aa2:
function(){return this.Azw;},ANL:function(aColumn,A2){var P;for(P=0;P<this.O8;P=
P+1)if(this.FX.Get(P).LM(aColumn)===A2)return P;return-1;},AJe:function(G){if(this.
K&&this.K.AJe)return this.K.AJe.apply(this,arguments);else return C.PL.BuS.apply(
this,arguments);},BuS:function(G){this.Aaa(2016,216,6);this.Aaa(2017,217,7);this.
Aaa(2018,218,8);this.Aaa(2019,219,9);this.Aaa(2020,220,10);this.Aaa(2021,221,11);
},BuK:function(s){this.AJe(s);},Aaa:function(AcJ,Bu6,Bu5){var UP=A._NewObject(A.
Device.CalfDeregistrations,0);UP.Gf();UP.Aki(AcJ);UP.AvX(Bu6);UP.AvW(Bu5);UP.Cl(
this);},_Init:function(aArg){A.Device.ITable._Init.call(this,aArg);(this.FX=[]).
__proto__=C.PL.FX;(this.A2$=[]).__proto__=C.PL.A2$;(this.A2E=[]).__proto__=C.PL.
A2E;(this.A0f=[]).__proto__=C.PL.A0f;this.__proto__=C.PL;var Lr=this._variants();
if(Lr){this.K={};Lr._Init.call(this,aArg);}},_Done:function(){if(this.K)this.K._Done.
call(this);this.__proto__=A.Device.ITable;A.Device.ITable._Done.call(this);},_ReInit:
function(){A.Device.ITable._ReInit.call(this);if(this.K)this.K._ReInit.call(this
);},_Mark:function(D){var B;A.Device.ITable._Mark.call(this,D);A.aa6(this.FX,D);
if(this.K)this.K._Mark(D);},_variants:function(){return A.acp.PL._variants();},K:
null,_className:"DeviceSimulation::TableData"};C.Al7={_Init:function(){C.PL._Init.
call(this,0);this.OnSetId(0);},_ReInit:function(){},_variants:function(){return this;
},_this:null};C.At8={_Init:function(){C.PL._Init.call(this,0);this.OnSetId(3);},
_ReInit:function(){},_variants:function(){return this;},_this:null};C.ArF={_Init:
function(){C.PL._Init.call(this,0);this.OnSetId(1);},_ReInit:function(){},_variants:
function(){return this;},_this:null};C.GC={Ale:A.abi(128,null,null),Gk:null,AoP:
0,CD:function(Ac,AZ){var Ba=this.Z_(Ac);if(!!Ba)return Ba.CD(AZ);return 0;},VB:function(
Ac,AZ){var Ba=this.Z_(Ac);if(!!Ba)return Ba.VB(AZ);return A.jV;},HW:function(Ac,
AZ){var Ba=this.Z_(Ac);if(!!Ba)return Ba.HW(AZ);return false;},OnSetId:function(
E){if(this.Id===E)return;this.Id=E;switch(this.Id){case 0:this.AFf(A._GetAutoObject(
C.Al7));break;case 1:this.AFf(A._GetAutoObject(C.ArF));break;case 3:this.AFf(A._GetAutoObject(
C.At8));break;case 4:this.AFf(A._GetAutoObject(C.Auh));break;case 2:break;default:
throw new Error(Acq+this.Id.toFixed());}},Cb:function(){if(!!this.Filter)return this.
AoP;else if(!!this.Gk)return this.Gk.O8;return 0;},Bh:function(E){A.Device.ITable.
Bh.call(this,E);this.A0d(this);},VC:function(Ac,AZ){var Ba=this.Z_(Ac);if(!!Ba)return Ba.
VC(AZ);return 0;},R7:function(Ac,AZ){var Ba=this.Z_(Ac);if(!!Ba)return Ba.R7(AZ);
return 0;},Ot:function(){if(!!this.Gk)return this.Gk.Ot();return-1;},Ov:function(
Aon){var Hv=false;if(!!this.Gk)Hv=this.Gk.Ov(Aon);if(Hv)A.pe([this,this.A0d],this
);return Hv;},Yj:function(){if(!!this.Filter)throw new Error(Ahy+A._GetAutoObject(
A.Device.Converter).BgT(this.Id,this.Filter));if(!!this.Gk)return this.Gk.A3I(A.
_NewObject(C.AFF,0));return-1;},Zj:function(Ac,AZ,CW){var Ba=this.Z_(Ac);if(!!Ba
)return Ba.Zj(AZ,CW);return false;},He:function(Ac,AZ,CW){var Ba=this.Z_(Ac);if(
!!Ba)return Ba.He(AZ,CW);return false;},Zi:function(Ac,AZ,CW){var Ba=this.Z_(Ac);
if(!!Ba)return Ba.Zi(AZ,CW);return false;},Mw:function(Ac,AZ,CW){var Ba=this.Z_(
Ac);if(!!Ba)return Ba.Mw(AZ,CW);return false;},Zh:function(Ac,AZ,CW){var Ba=this.
Z_(Ac);if(!!Ba)return Ba.Zh(AZ,CW);return false;},K9:function(aColumn,A2){if(!!this.
Filter){var P;for(P=0;P<this.AoP;P=P+1)if(this.Ale.Get(P).CD(aColumn)===A2)return P;
return-1;}else if(!!this.Gk)return this.Gk.A5s(aColumn,A2);return-1;},LM:function(
Ac,AZ){var Ba=this.Z_(Ac);if(!!Ba)return Ba.LM(AZ);return 0;},Sz:function(Ac,AZ,
CW){var Ba=this.Z_(Ac);if(!!Ba)return Ba.Sz(AZ,CW);return false;},Agv:function(aColumn
,A2){if(!!this.Filter){var P;for(P=0;P<this.AoP;P=P+1)if(this.Ale.Get(P).LM(aColumn
)===A2)return P;return-1;}else if(!!this.Gk)return this.Gk.ANL(aColumn,A2);return-
1;},Hd:function(){if(!!this.Gk)return this.Gk.Hd();return false;},Ajp:function(aColumn
,A2){if(!!this.Gk)return this.Gk.A5s(aColumn,A2)>=0;return false;},AdW:function(
aColumn,A2){if(!!this.Gk)return this.Gk.ANL(aColumn,A2)>=0;return false;},HA:function(
){if(!!this.Gk)return this.Gk.HA();return 0;},Aa2:function(){if(!!this.Gk)return this.
Gk.Aa2();return-1;},Qx:function(){if(!!this.Gk)return this.Gk.O8;return 0;},A0d:
function(G){this.A0r();if(!!this.Filter&&!!this.Gk){var P;for(P=0;P<this.Gk.Cb();
P=P+1){var A0T=true;var Az=this.Filter.ANZ();var Ba=this.Gk.TI(P);if(!!Ba)while(
A0T&&!!Az){A0T=Ba.BhT(Az);Az=this.Filter.AN4(Az);}else A.ab5("%s",((Acr+P.toFixed(
))+UI)+this.Gk.Cb().toFixed());if(A0T){this.Ale.Set(this.AoP,this.Gk.FX.Get(P));
this.AoP=this.AoP+1;}}}A.pe([this,this.Aj2],this);},A0r:function(){var P;for(P=0;
P<128;P=P+1)this.Ale.Set(P,null);this.AoP=0;},AFf:function(E){if(this.Gk===E)return;
if(!!this.Gk)A.z9([this,this.A29],this.Gk,0);this.Gk=E;if(!!this.Gk){A.zV([this,
this.A29],this.Gk,0);A.pe([this,this.A29],this);}},A29:function(G){A.pe([this,this.
A0d],this);},Z_:function(aIndex){if(!!this.Filter){if((aIndex<0)||(aIndex>=128))
return null;else return this.Ale.Get(aIndex);}else if(!!this.Gk)return this.Gk.TI(
aIndex);A.ab5("%s",AnQ+aIndex.toFixed());return null;},_Init:function(aArg){A.Device.
ITable._Init.call(this,aArg);(this.Ale=[]).__proto__=C.GC.Ale;this.__proto__=C.GC;
},_Mark:function(D){var B;A.Device.ITable._Mark.call(this,D);A.aa6(this.Ale,D);if((
B=this.Gk)&&(B._cycle!=D))B._Mark(B._cycle=D);},_className:"DeviceSimulation::FilteredTable"
};C.A_b={Ky:null,Adk:null,Or:null,AL2:false,AL3:true,A23:function(G){switch(A._GetAutoObject(
A.Device.Device).SyncState){case 0:{A._GetAutoObject(A.Device.Device).AbO(1);this.
Adk.Ar(true);}break;case 1:{A._GetAutoObject(A.Device.Device).AbO(2);A._GetAutoObject(
A.Device.Device).Ars(A._GetAutoObject(A.Device.Device).Ap.Qx());this.Ky.Fe(A._GetAutoObject(
A.Device.Device).Ae2*50);this.Ky.B0=A._GetAutoObject(A.Device.Device).Ae2;this.Ky.
Ar(true);}break;case 2:{A._GetAutoObject(A.Device.Device).AbO(3);this.Adk.Ar(true
);}break;case 3:{A._GetAutoObject(A.Device.Device).AbO(4);A._GetAutoObject(A.Device.
Device).Ars(A._GetAutoObject(A.Device.Device).Ap.Qx());this.Ky.Fe(A._GetAutoObject(
A.Device.Device).Ae2*50);this.Ky.B0=A._GetAutoObject(A.Device.Device).Ae2;this.Ky.
Ar(true);}break;case 4:{A._GetAutoObject(A.Device.Device).AbO(5);this.Adk.Ar(true
);}break;case 5:A.pe([this,this.BeI],this);break;case 7:case 6:break;default:A.ab5(
"%s%e",AnR,A._GetAutoObject(A.Device.Device).SyncState);}},By4:function(G){this.
Adk.Ar(false);A.pe([this,this.A23],this);},Bz6:function(G){switch(A._GetAutoObject(
A.Device.Device).SyncState){case 0:case 6:case 7:{A._GetAutoObject(A.Device.Device
).AbO(0);A.pe([this,this.A23],this);}break;default:;}},BeI:function(G){this.Adk.
Ar(false);this.Ky.Ar(false);A._GetAutoObject(A.Device.Device).AbO(0);},AD6:function(
E){if(this.AL3===E)return;this.AL3=E;A.abo([this,this.BiV,this.AD6],0);},BiV:function(
){return this.AL3;},ApS:function(G){var B;this.Or.Cs=true;this.Or.B0=false;this.
Or.Fe(100);this.Or.HG(1);this.Or.Q=[this,this.ARx,this.AR5];A.pe([B=this.Or,B.Anv
],this);},BfM:function(G){var B;this.Or.Cs=true;this.Or.B0=false;this.Or.Fe(400);
this.Or.T$(200);this.Or.HG(3);this.Or.Q=[this,this.ARx,this.AR5];this.AD6(false);
A.pe([B=this.Or,B.Anv],this);},AR5:function(E){if(this.AL2===E)return;this.AL2=E;
A.abo([this,this.ARx,this.AR5],0);},ARx:function(){return this.AL2;},ApT:function(
G){var B;this.Or.Anx(this);this.AD6(false);},_Init:function(aArg){A.acl.Ga._Init.
call(this.Ky={I:this},0);A.Core.Timer._Init.call(this.Adk={I:this},0);A.acl.Tw._Init.
call(this.Or={I:this},0);this.__proto__=C.A_b;var B;this.Ky.HG(1);this.Adk.PJ(2000
);this.Ky.Sm=[this,this.A23];this.Ky.Q=[B=A._GetAutoObject(A.Device.Device),B.ARX
,B.AZh];this.Adk.Mt=[this,this.By4];A.h7++;},_Done:function(){this.__proto__=null;
this.Ky._Done();this.Adk._Done();this.Or._Done();A.h7--;},_ReInit:function(){this.
Ky._ReInit();this.Adk._ReInit();this.Or._ReInit();},_Mark:function(D){var B;if((
B=this.Ky)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Adk)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Or)._cycle!=D)B._Mark(B._cycle=D);if((B=this.I)&&(B._cycle!=D))B._Mark(
B._cycle=D);},I:null,_cycle:0,_observers:null,_className:"DeviceSimulation::SimulationHelperClass"
};C.Ab5={_Init:function(){C.A_b._Init.call(this,0);},_ReInit:function(){},_variants:
function(){return this;},_this:null};C.AGg={A6:0,_Init:function(aArg){C.V_._Init.
call(this,aArg);this.__proto__=C.AGg;},_className:"DeviceSimulation::UInt64"};C.
Auh={_Init:function(){C.PL._Init.call(this,0);this.OnSetId(4);},_ReInit:function(
){},_variants:function(){return this;},_this:null};C.FactoryResetScope={Dp:function(
){return 1;},_Init:function(aArg){var K=this.K;K.__proto__=C.FactoryResetScope;this.
Co.Set(0,1);A.h7++;},_Done:function(){var K=this.K;K.__proto__=null;A.h7--;},_ReInit:
function(){},_Mark:function(D){},_variants:function(){return this;},_className:"DeviceSimulation::FactoryResetScope"
};C.XI={AdG:null,Cx:function(G){var K=this.K;A.ab5("%s",AnS);K.AdG.Ar(true);},EV:
function(G){var K=this.K;if(K.AdG.Bv===true){K.AdG.Ar(false);A.ab5("%s",AnT);}},
BiM:function(G){var K=this.K;K.AdG.Ar(false);A._GetAutoObject(A.kR.AW).Ag9(A._GetAutoObject(
A.Device.Device).Aw1);},_Init:function(aArg){var K=this.K;A.Core.Timer._Init.call(
K.AdG={I:this},0);K.__proto__=C.XI;this.Aek.H(Afd);K.AdG.PJ(1500);this.Un.R(AnU);
this.Un.Y(true);this.Aek.Ay(A.aaL(A.ach.AQG));K.AdG.Mt=[this,K.BiM];A.h7++;},_Done:
function(){var K=this.K;K.__proto__=null;K.AdG._Done();A.h7--;},_ReInit:function(
){var K=this.K;K.AdG._ReInit();},_Mark:function(D){var B;if((B=this.AdG)._cycle!=
D)B._Mark(B._cycle=D);},_variants:function(){return this;},_className:"DeviceSimulation::BootScreen"
};C.Aji={Auw:A.jV,_Init:function(aArg){A.Device.Aji._Init.call(this,aArg);this.__proto__=
C.Aji;},_className:"DeviceSimulation::DataExportContext"};
C._Init=function(){C.AC8.__proto__=C.V_;C.String.__proto__=C.V_;C.ABf.__proto__=C.
V_;C.AGh.__proto__=C.V_;C.AGf.__proto__=C.V_;C.PL.__proto__=A.Device.ITable;C.GC.
__proto__=A.Device.ITable;C.AGg.__proto__=C.V_;C.Aji.__proto__=A.Device.Aji;};C.
_ReInit=function(){var B;if((B=C.Um._this))B._ReInit(),C.Um._ReInit.call(B);if((
B=C.Al7._this))B._ReInit(),C.Al7._ReInit.call(B);if((B=C.At8._this))B._ReInit(),
C.At8._ReInit.call(B);if((B=C.ArF._this))B._ReInit(),C.ArF._ReInit.call(B);if((B=
C.Ab5._this))B._ReInit(),C.Ab5._ReInit.call(B);if((B=C.Auh._this))B._ReInit(),C.
Auh._ReInit.call(B);};C.Dz=function(D){var B;if((B=C.Um._this)&&(B._cycle!=D))B.
_Done(C.Um._this=null);if((B=C.Al7._this)&&(B._cycle!=D))B._Done(C.Al7._this=null
);if((B=C.At8._this)&&(B._cycle!=D))B._Done(C.At8._this=null);if((B=C.ArF._this)&&(
B._cycle!=D))B._Done(C.ArF._this=null);if((B=C.Ab5._this)&&(B._cycle!=D))B._Done(
C.Ab5._this=null);if((B=C.Auh._this)&&(B._cycle!=D))B._Done(C.Auh._this=null);};
return C;})();

/* VitalControl demonstration application, © Urban GmbH & Co.KG 2023 */