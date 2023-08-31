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
);if(index.abt)throw new Error("The unit file 'DeviceSimulation.js' included twice!"
);index.abt=(function(){var A=index;var C={};
var B_="ERROR: access to null Bool data in column [";var BH="]";var EV="Access to inexistent column index: ";
var GS=", or not enough indexes for store column. You can increase the \'data\' "+
"array size to hold this column.";var Jt="Unsupported filter criterion class";var
IL="Operator not handled:";var OK="1,8";var PJ="INFO: Device.StartScan() called.";
var N1="INFO: Device.StopScan() called.";var CJ="V0.";var Fn=".";var Nb="\n";var
OL="Temp: ";var KH="Battery: ";var OM="%%";var Nc="Selected animal with row index";
var ON="1,256,2,2048,4096,8192,4,8,16,128,64,32,1024,262144,16384,131072,512";var
Ss="1,2";var T_="0,1,2";var Wa="3900,3950,4000";var Wb="4050,4100,4150";var I$="Read only";
var T$="Unknown data export type: ";var Wc="Unhandled Device::DataExportType: ";
var Wd="0,2";var Zg="650,150";var St="800,200";var Zh="40000,4000";var We="32,7,34,18,23,14";
var Ua="Simulate Scan";var Wf="BNR15;LOM;GEB_DATR;RASSE;GESCHL_R;GEB_VERL;VERBLEIB;MEHRLADR;LOM_MUT\n";
var QT="%d.%m.%Y";var Wg="1";var OO="2";var PK="Unknown gender: ";var Ub="text/csv";
var Zi="National-ID-Animal;Farm-ID-Animal;Transponder-ID;DateOfBirth;Sex;BirthWeight-Kg\n";
var Wh="hit-geburt-%d-%m-%Y_%H-%M.csv";var Zj="animals-%d-%m-%Y_%H-%M.csv";var Zk=
"hit-zugang-%d-%m-%Y_%H-%M.csv";var Wi="herde-zugang-%d-%m-%Y_%H-%M.csv";var Wj=
"M";var Su="F";var Zl="?";var Zm="%Y-%m-%d";var AbO="BNR15;LOM;ZUGA_DAT\n";var Sv=
"Ohrnummer;Geburtsdatum;Geschlecht;Nutzung;Rasse;Zugangsdatum;Transponder\n";var
AbP="ERROR: Cannot start transaction";var AeN="Nested transactions are not allowed.";
var Zn="Transaction not opened.";var Wk="Wrong transaction ID.";var Wl="Unhandled TableId:";
var AeO="Maximum number of rows reached.";var AeP="Animal row not found in DeviceSimulation::AnimalTableData. NaisId";
var JT="10";var AbQ="20";var Li="30";var Ag$="31";var Anc="32";var N2="Severe: filter set when inserting row into table: ";
var Wm="ERROR: Row not found with index [";var And="] while Rows Count = ";var Aha=
"ERROR: trying to access an inexistent row with Index=";var Ahb="Invalid Device::SyncState";
var AbR="Forwarding to home screen after 500 milliseconds ...";var Uc="Forwarding to home screen canceled...";
var Ane=[0,58,240,208];var Anf="VitalControl\nstarting up \u2026";
C.Table={Gu:null,Init:function(aArg){var K=this.K;A.y_([this,this.Aju],K.Gu,0);},
CE:function(Ab,AX){var K=this.K;return K.Gu.CE(Ab,AX);},Va:function(Ab,AX){var K=
this.K;return K.Gu.Va(Ab,AX);},HV:function(Ab,AX){var K=this.K;return K.Gu.HV(Ab
,AX);},OnSetId:function(E){var K=this.K;if(this.Id===E)return;this.Id=E;K.Gu.OnSetId(
E);},Cj:function(){var K=this.K;return K.Gu.Cj();},Bk:function(E){var K=this.K;A.
Device.ITable.Bk.call(this,E);K.Gu.Bk(E);},Vb:function(Ab,AX){var K=this.K;return K.
Gu.Vb(Ab,AX);},RQ:function(Ab,AX){var K=this.K;return K.Gu.RQ(Ab,AX);},Op:function(
){var K=this.K;return K.Gu.Op();},Or:function(AnF){var K=this.K;return K.Gu.Or(AnF
);},XW:function(){var K=this.K;return K.Gu.XW();},YZ:function(Ab,AX,CX){var K=this.
K;return K.Gu.YZ(Ab,AX,CX);},G_:function(Ab,AX,CX){var K=this.K;return K.Gu.G_(Ab
,AX,CX);},YY:function(Ab,AX,CX){var K=this.K;return K.Gu.YY(Ab,AX,CX);},M_:function(
Ab,AX,CX){var K=this.K;return K.Gu.M_(Ab,AX,CX);},YX:function(Ab,AX,CX){var K=this.
K;return K.Gu.YX(Ab,AX,CX);},K4:function(aColumn,A1){var K=this.K;return K.Gu.K4(
aColumn,A1);},LD:function(Ab,AX){var K=this.K;return K.Gu.LD(Ab,AX);},TP:function(
Ab,AX,CX){var K=this.K;return K.Gu.TP(Ab,AX,CX);},AiY:function(aColumn,A1){var K=
this.K;return K.Gu.AiY(aColumn,A1);},G9:function(){var K=this.K;return K.Gu.G9();
},AiV:function(aColumn,A1){var K=this.K;return K.Gu.AiV(aColumn,A1);},Af4:function(
aColumn,A1){var K=this.K;return K.Gu.Af4(aColumn,A1);},Hz:function(){var K=this.
K;return K.Gu.Hz();},Aay:function(){var K=this.K;return K.Gu.Aay();},Qb:function(
){var K=this.K;return K.Gu.Qb();},_Init:function(aArg){var K=this.K;C.Gu._Init.call(
K.Gu={I:this},0);K.__proto__=C.Table;K.Init.call(this,aArg);A.hJ++;},_Done:function(
){var K=this.K;K.__proto__=null;K.Gu._Done();A.hJ--;},_ReInit:function(){var K=this.
K;K.Gu._ReInit();},_Mark:function(D){var B;if((B=this.Gu)._cycle!=D)B._Mark(B._cycle=
D);},_variants:function(){return this;},_className:"DeviceSimulation::Table"};C.
AEq={SG:A.aan(42,null,null),CE:function(aColumn){var B;this.Zy(aColumn);var An=(
C.ABX.isPrototypeOf(B=this.SG.Get(aColumn))?B:null);if(!!An)return An.A4;return 0;
},Va:function(aColumn){var B;this.Zy(aColumn);var An=(C.String.isPrototypeOf(B=this.
SG.Get(aColumn))?B:null);if(!!An)return An.A4;return A.jm;},HV:function(aColumn){
var B;this.Zy(aColumn);var An=(C.Az8.isPrototypeOf(B=this.SG.Get(aColumn))?B:null
);if(!!An)return An.A4;else A.aa8("%s",(B_+aColumn.toFixed())+BH);return false;}
,G_:function(aColumn,A1){this.Zy(aColumn);var An=A._NewObject(C.ABX,0);An.A4=A1;
this.SG.Set(aColumn,An);return true;},YX:function(aColumn,A1){this.Zy(aColumn);var
An=A._NewObject(C.String,0);An.A4=A1;this.SG.Set(aColumn,An);return true;},M_:function(
aColumn,A1){this.Zy(aColumn);var An=A._NewObject(C.Az8,0);An.A4=A1;this.SG.Set(aColumn
,An);return true;},Zy:function(aColumn){if((aColumn<0)||(aColumn>=42))throw new Error((
EV+aColumn.toFixed())+GS);},BfL:function(AL){if(!!(A.Device.Int32FilterCriterion.
isPrototypeOf(AL)?AL:null))return this.AHP(this.CE(AL.ET),AL.Operator,(A.Device.
Int32FilterCriterion.isPrototypeOf(AL)?AL:null).A4);else if(!!(A.Device.UInt32FilterCriterion.
isPrototypeOf(AL)?AL:null))return this.Buv(this.RQ(AL.ET),AL.Operator,(A.Device.
UInt32FilterCriterion.isPrototypeOf(AL)?AL:null).A4);else if(!!(A.Device.StringFilterCriterion.
isPrototypeOf(AL)?AL:null))return this.Buu(this.Va(AL.ET),AL.Operator,(A.Device.
StringFilterCriterion.isPrototypeOf(AL)?AL:null).A4);else if(!!(A.Device.BoolFilterCriterion.
isPrototypeOf(AL)?AL:null))return this.But(this.HV(AL.ET),AL.Operator,(A.Device.
BoolFilterCriterion.isPrototypeOf(AL)?AL:null).A4);else if(!!(A.Device.AnimalTypeFilterCriterion.
isPrototypeOf(AL)?AL:null))return this.AHP(this.CE(AL.ET),AL.Operator,(A.Device.
AnimalTypeFilterCriterion.isPrototypeOf(AL)?AL:null).A4);else if(!!(A.Device.GenderFilterCriterion.
isPrototypeOf(AL)?AL:null))return this.AHP(this.CE(AL.ET),AL.Operator,(A.Device.
GenderFilterCriterion.isPrototypeOf(AL)?AL:null).A4);else if(!!(A.Device.AssessmentFilterCriterion.
isPrototypeOf(AL)?AL:null))return this.Bux(this.Vb(AL.ET),AL.Operator,(((B=(A.Device.
AssessmentFilterCriterion.isPrototypeOf(AL)?AL:null).A4)<0)?B+0x100000000:B)&0xFF
);else if(!!(A.Device.UInt64FilterCriterion.isPrototypeOf(AL)?AL:null))return this.
Buw(this.LD(AL.ET),AL.Operator,(A.Device.UInt64FilterCriterion.isPrototypeOf(AL)?
AL:null).A4);else if(!!(A.Device.WhereAboutsFilterCriterion.isPrototypeOf(AL)?AL:
null))return this.AHP(this.CE(AL.ET),AL.Operator,(A.Device.WhereAboutsFilterCriterion.
isPrototypeOf(AL)?AL:null).A4);else throw new Error(Jt);},AHP:function(H3,EE,H4){
switch(EE){case 0:return H3===H4;case 2:return H3>H4;case 3:return H3<H4;case 4:
return H3.toFixed().indexOf(H4.toFixed(),0)>=0;case 5:return H3!==H4;default:throw new
Error(IL+EE.toFixed());}},Buu:function(H3,EE,H4){switch(EE){case 0:return H3===H4;
case 2:return H3>H4;case 3:return H3<H4;case 4:{A.aa8("%s%e%s%i",H3,EE,H4,H3.indexOf(
H4,0));return H3.indexOf(H4,0)>=0;}case 5:return H3!==H4;default:throw new Error(
IL+EE.toFixed());}},But:function(H3,EE,H4){switch(EE){case 0:return H3===H4;case
2:return false;case 3:return false;case 4:return false;case 5:return H3!==H4;default:
throw new Error(IL+EE.toFixed());}},Vb:function(aColumn){var B;this.Zy(aColumn);
var An=(C.AE7.isPrototypeOf(B=this.SG.Get(aColumn))?B:null);if(!!An)return An.A4;
return 0;},YZ:function(aColumn,A1){this.Zy(aColumn);var An=A._NewObject(C.AE7,0);
An.A4=A1;this.SG.Set(aColumn,An);return true;},Bux:function(H3,EE,H4){switch(EE){
case 0:return H3===H4;case 2:return H3>H4;case 3:return H3<H4;case 5:return H3!==
H4;default:throw new Error(IL+EE.toFixed());}},RQ:function(aColumn){var B;this.Zy(
aColumn);var An=(C.AE5.isPrototypeOf(B=this.SG.Get(aColumn))?B:null);if(!!An)return An.
A4;return 0;},YY:function(aColumn,A1){this.Zy(aColumn);var An=A._NewObject(C.AE5
,0);An.A4=A1;this.SG.Set(aColumn,An);return true;},Buv:function(H3,EE,H4){switch(
EE){case 0:return H3===H4;case 2:return H3>H4;case 3:return H3<H4;case 5:return H3
!==H4;default:throw new Error(IL+EE.toFixed());}},LD:function(aColumn){var B;this.
Zy(aColumn);var An=(C.AE6.isPrototypeOf(B=this.SG.Get(aColumn))?B:null);if(!!An)
return An.A4;return 0;},TP:function(aColumn,A1){this.Zy(aColumn);var An=A._NewObject(
C.AE6,0);An.A4=A1;this.SG.Set(aColumn,An);return true;},Buw:function(H3,EE,H4){switch(
EE){case 0:return H3===H4;case 2:return H3>H4;case 3:return H3<H4;case 5:return H3
!==H4;default:throw new Error(IL+EE.toFixed());}},_Init:function(aArg){(this.SG=[
]).__proto__=C.AEq.SG;this.__proto__=C.AEq;A.hJ++;},_Done:function(){this.__proto__=
null;A.hJ--;},_ReInit:function(){},_Mark:function(D){var B;A.aaf(this.SG,D);if((
B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:
"DeviceSimulation::RowData"};C.VH={_Init:function(aArg){this.__proto__=C.VH;A.hJ++;
},_Done:function(){this.__proto__=null;A.hJ--;},_ReInit:function(){},_Mark:function(
D){var B;if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:
null,_className:"DeviceSimulation::NativeType"};C.ABX={A4:0,_Init:function(aArg){
C.VH._Init.call(this,aArg);this.__proto__=C.ABX;},_className:"DeviceSimulation::Int32"
};C.String={A4:A.jm,_Init:function(aArg){C.VH._Init.call(this,aArg);this.__proto__=
C.String;},_className:"DeviceSimulation::String"};C.Az8={A4:false,_Init:function(
aArg){C.VH._Init.call(this,aArg);this.__proto__=C.Az8;},_className:"DeviceSimulation::Bool"
};C.DeviceClass={AsU:null,AHV:null,Ah9:null,ZW:null,C8:function(){var K=this.K;K.
A7U.call(this,this);},Init:function(aArg){var K=this.K;var B;this.YC(3);A.za([this
,K.Azk],[B=K.AsU,B.A5U,B.AQ8],0);this.UpdateAutoActions(OK);K.A7U.call(this,this
);this.Aq0(this);this.Aq1(this);this.AqW(this);this.AqY(this);this.AqX(this);var
languageMin=0;var languageMax=17;var languageValue=-1;{if(typeof ewLanguage==='number'&&
Number.isInteger(ewLanguage)&&ewLanguage>=languageMin&&ewLanguage<languageMax){languageValue=
ewLanguage;}}if(languageValue>=0)this.AmE(languageValue);A.ow([this,K.ARy],this);
},YC:function(E){this.UpdateActiveScreen(E);},AuW:function(E){this.UpdateBatteryChargeState(
E);},AC0:function(E){this.UpdateChargeActive(E);},AqA:function(E){this.UpdateScanState(
E);},Avi:function(E){this.UpdateMeasureState(E);},Avs:function(E){this.UpdateTempValue(
E);},AmE:function(E){this.UpdateLanguage(E);},Avt:function(E){this.UpdateTemperatureUnit(
E);},ACY:function(E){this.UpdateBrightness(E);},ADu:function(E){this.UpdateMonitoring(
E);},Av1:function(){var B;if(A._GetAutoObject(C.Abw).AvY){this.UpdateMeasureState(
1);A._GetAutoObject(A.Device.Helper).AI9(this);}},Ag0:function(){var B;A._GetAutoObject(
A.Device.Helper).Sh.Av3(this);this.UpdateMeasureState(0);},Aes:function(){var K=
this.K;A.aa8("%s",PJ);this.UpdateScanState(1);A.ow([this,K.Azk],this);},AmZ:function(
){var K=this.K;var B;A.aa8("%s",N1);K.Ah9.Av3(this);this.UpdateScanState(0);},SetSystemTime:
function(Aho){},AvX:function(){A.Device.DeviceClass.A9j.call(this);this.YC(1);},
AEn:function(){A.Device.DeviceClass.A9h.call(this);this.YC(2);},Co:function(E){this.
UpdateOverlayMenu(E);},Avy:function(E){this.UpdateUnderTemp(E);},Abm:function(E){
this.UpdateSyncState(E);},AA$:function(){var aString;aString=((((((((((CJ+A.aaC(
0,9).toFixed())+Fn)+A.aaC(0,9).toFixed())+Nb)+OL)+A.aaC(30,90).toFixed())+A.z2(A.
abg.AEU))+Nb)+KH)+A.aaC(1,100).toFixed())+OM;return aString;},PopupStateChanged:
function(Kn,Ae){var Afx=A._NewObject(C.PopupContext,0);Afx.Id=Kn;Afx.GN=Ae;this.
AmP.Trigger(Afx,false);},ADX:function(E){this.UpdateVibrationOnKeypressEnabled(E
);},Ad8:function(E){this.UpdateVibrationOn(E);},Avp:function(E){this.UpdateRatingMode(
E);},Ad1:function(E){this.UpdateFlashLightOn(E);},YM:function(E){this.UpdateTopLightOn(
E);},Abk:function(E){this.UpdateRGBTopLight(E);},AuV:function(E){this.UpdateAutoRegistrationMode(
E);},AqB:function(E){this.UpdateScanTransponder(E.Id,E.TransponderType,E.TransponderProtocol
);},Pz:function(E){this.UpdateDigitsID(E);},Qx:function(E){this.UpdateOffsetID(E
);},AD1:function(E){this.UpdateWeightValue(E);},Avg:function(E){this.UpdateMassUnit(
E);},Aqc:function(E){A.Device.DeviceClass.A9d.call(this,E);this.UpdateActiveActions(
E);},Aqd:function(E){A.Device.DeviceClass.A9e.call(this,E);this.UpdateActiveActionsOrder(
E);},Abb:function(E){A.Device.DeviceClass.A9f.call(this,E);this.UpdateAutoActions(
E);},AEO:function(){var K=this.K;this.UpdateMeasureState(1);K.BxK.call(this,this
);},Ard:function(){var K=this.K;var B;K.ZW.Av3(this);this.UpdateMeasureState(0);
},DV:function(E){this.UpdateAnimalType(E);},Avz:function(E){this.UpdateWeightRecordingMode(
E);},ADC:function(E){this.UpdatePredictedTempValue(E);},Se:function(L0){A.aa8("%s%i"
,Nc,L0);},AC6:function(E){this.UpdateDemoMode(E);},ACP:function(E){this.UpdateAgeRegistration(
E);},AvA:function(E){this.UpdateWeightRecordingScope(E);},JM:function(E){this.UpdateGender(
E);},Aqs:function(E){this.UpdateIDLastUsedMale(E);},Aqr:function(E){this.UpdateIDLastUsedFemale(
E);},Aba:function(E){this.UpdateAnimalListContent(E);},ACR:function(E){this.UpdateAlarmListAction(
E);},AC9:function(E){this.UpdateFlashLightInMeasureState(E);},AdZ:function(E){this.
UpdateAnimalInfoContent(E);},AD0:function(E){this.UpdateWatchListAction(E);},AC_:
function(E){this.UpdateFreshCowListAction(E);},AqW:function(H){this.Aqc(15359);this.
Aqd(ON);},AqY:function(H){this.Abb(Ss);},AuT:function(E){this.UpdateAnimalTypesString(
E);},AqC:function(E){this.UpdateTemperaturesHighString(E);},AqD:function(E){this.
UpdateTemperaturesLowString(E);},Aq0:function(H){this.AuT(T_);this.AqD(Wa);this.
AqC(Wb);this.Avy(3600);},ADx:function(E){this.UpdateNoTransponderListAction(E);}
,Avb:function(E){this.UpdateFreshCowsHideMeasured(E);},Aqw:function(E){this.UpdateNaisIdLastUsedMale(
E);},Aqv:function(E){this.UpdateNaisIdLastUsedFemale(E);},Avl:function(E){this.UpdateNaisIdIncrementMale(
E);},Avk:function(E){this.UpdateNaisIdIncrementFemale(E);},UpdateFirmware:function(
){A.Device.DeviceClass.A9k.call(this);A._GetAutoObject(A.kh.A0).BY(61);},AmA:function(
E){this.UpdateBootloaderMessage(E);},ACN:function(E){this.UpdateActionListAction(
E);},AuR:function(E){this.UpdateActionListHideMeasured(E);},TB:function(E){this.
UpdateAnimalIdGenerationMethod(E);},Au5:function(E){this.UpdateDirectionOfCountingFemale(
E);},Au6:function(E){this.UpdateDirectionOfCountingMale(E);},Au7:function(E){this.
UpdateDirectionOfCountingUnisex(E);},Aqt:function(E){this.UpdateIDLastUsedUnisex(
E);},Aqx:function(E){this.UpdateNaisIdLastUsedUnisex(E);},Avm:function(E){this.UpdateNaisIdIncrementUnisex(
E);},AjA:function(E){this.UpdateEartagNrAssignmentMode(E);},NP:function(E){this.
UpdateBreed(E);},ADr:function(E){throw new Error(I$);},ADl:function(E){throw new
Error(I$);},ADU:function(E){throw new Error(I$);},ACU:function(E){throw new Error(
I$);},AC7:function(E){this.UpdateDryCowListAction(E);},AHM:function(AX2){var HR;
switch(AX2){case 15:HR=false;break;default:HR=true;}return HR;},ADw:function(E){
this.UpdateNoNaisIdListAction(E);},ACT:function(E){this.UpdateBirthListView(E);}
,ADV:function(E){this.UpdateTransferProgress(E);},AqE:function(E){this.UpdateTransferTarget(
E);},Arc:function(){var B;A.ow([B=A._GetAutoObject(C.Ara),B.Bcv],this);},Avo:function(
E){this.UpdatePremisesID(E);},Avj:function(E){this.UpdateMotherSelectionDriedOffFilter(
E);},AC$:function(E){this.UpdateFreshCowSpan(E);},ADW:function(E){this.UpdateUSBState(
E);},AmX:function(Ahi){var K=this.K;var result=A._NewObject(C.AiM,0);result.AAA=
Ahi;result.FileName=K.Be7.call(this,Ahi);switch(Ahi){case 0:K.BuH.call(this,result
);break;case 1:K.BuD.call(this,result);break;case 2:K.BuI.call(this,result);break;
case 3:K.BuG.call(this,result);break;default:throw new Error(T$+Ahi.toFixed());}
K.AHV=result;return result;},ApT:function(){return true;},Api:function(Ng){var K=
this.K;switch(Ng.AAA){case 0:A._GetAutoObject(A.Device.Device).A5(72,true,A.jm,0
,[this,K.A0m]);break;case 1:A._GetAutoObject(A.Device.Device).A5(90,true,A.jm,0,[
this,K.A0m]);break;case 2:case 3:A._GetAutoObject(A.Device.Device).A5(100,true,A.
jm,0,[this,K.A0m]);break;default:throw new Error(Wc+Ng.AAA.toFixed());}},ADI:function(
E){throw new Error(I$);},AuS:function(E){this.UpdateAnimalIdAutoGenerationMethod(
E);},ADK:function(E){this.UpdateShutdownTimer(E);},Aqj:function(E){this.UpdateAnimalListInfoItemMode(
E);},Aq1:function(H){this.AuU(Wd);this.AqI(Zg);this.AqH(St);this.AqG(St);this.AqJ(
Zh);},AqH:function(E){this.UpdateWeightGainsHighString(E);},AqI:function(E){this.
UpdateWeightGainsLowString(E);},AuU:function(E){this.UpdateAnimalTypesWeightGainsString(
E);},AqG:function(E){this.UpdateWeightGainsAverageString(E);},AqJ:function(E){this.
UpdateWeightValueBirthString(E);},Au8:function(E){this.UpdateEvaluationAnimalType(
E);},Avr:function(E){this.UpdateStartScreen(E);},ABZ:function(){return 1;},AB0:function(
){return 1;},ADq:function(E){this.UpdateMaximumAgeNewOnFarm(E);},Avx:function(E){
this.UpdateTransponderAssignmentIdChangeMethod(E);},AC5:function(E){this.UpdateDataExportDestination(
E);},M7:function(E){this.UpdateWhereAbouts(E);},Aqf:function(E){this.UpdateActiveMassRecordingFields(
E);},Aqg:function(E){this.UpdateActiveMassRecordingFieldsOrder(E);},AqX:function(
H){this.Aqf(A.jm);this.Aqg(We);},ADo:function(E){this.UpdateMassRecordingDateOfBirthMandatory(
E);},Bxx:function(H){switch(this.Ku){case 34:case 35:case 32:case 50:case 55:case
63:case 91:{this.UpdateScanTransponder(12310020,1,0);this.UpdateScanState(2);}break;
case 15:break;default:this.UpdateScanState(4);}},Azk:function(H){var K=this.K;var
B;if((this.ScanState===1)&&K.AsU.AEG)K.Ah9.AEN(this);A.aa8("%s",Ua);},BxK:function(
H){var K=this.K;var B;if((this.MeasureState===1)&&K.AsU.AvY)K.ZW.AEN(this);},Byl:
function(H){this.UpdateMeasureState(3);},ARy:function(H){var K=this.K;var B;A.za([
B=A._GetAutoObject(A.Device.Helper),B.AI9],[B=K.AsU,B.A5V,B.AQ9],0);this.Rt.AC4(
A._GetAutoObject(A.Device.Helper).A3X(8));this.R3.AC4(A._GetAutoObject(A.Device.
Helper).A3X(8));},A7U:function(H){var AxY=A._NewObject(A.Device.Av0,0);AxY.OnSetTimestamp(
1692954318);AxY.ADm(1);AxY.ADt(0);AxY.ADF(0);this.R3=AxY;var Axv=A._NewObject(A.
Device.Av0,0);Axv.OnSetTimestamp(1692954318);Axv.ADm(1);Axv.ADt(0);Axv.ADF(4);this.
Rt=Axv;var AkZ=A._NewObject(A.Device.At3,0);AkZ.ADj(1);AkZ.ADk(0);AkZ.ADi(0);AkZ.
ADS(1);AkZ.ADT(0);AkZ.ADR(0);AkZ.OnSetTimestamp(1692954318);this.Qs=AkZ;var Alp=
A._NewObject(A.Device.At3,0);Alp.ADj(1);Alp.ADk(0);Alp.ADi(0);Alp.ADS(1);Alp.ADT(
0);Alp.ADR(0);Alp.OnSetTimestamp(1692954318);this.Sj=Alp;this.AgX=A.z2(A.abg.Unknown
);},Bu3:function(aFilename,aMimeType,aContent){{var bb=new Blob([aContent],{type:
aMimeType});var a=document.createElement('a');a.download=aFilename;a.href=window.
URL.createObjectURL(bb);a.click();}},BuH:function(Ng){var K=this.K;var B;var SF=
Wf;var B3=A._NewObject(A.Device.Animal,0);var P;var AcI=0;for(P=0;P<A._GetAutoObject(
A.Device.Device).Ao.Cj();P++){B3.EK(P,A._GetAutoObject(A.Device.Device).Ao);if(B3.
IsRegistrationNoticePending&&(B3.NaisId>0)){SF=SF+(((((((((((((((((K.AhJ.call(this
,A._GetAutoObject(A.Device.Device).YO)+String.fromCharCode(0x3B))+K.AhJ.call(this
,B3.NaisId))+String.fromCharCode(0x3B))+K.AIf.call(this,B3.DateOfBirth))+String.
fromCharCode(0x3B))+K.A$y.call(this,B3.Breed))+String.fromCharCode(0x3B))+K.A$x.
call(this,B3.Gender))+String.fromCharCode(0x3B))+K.Bu8.call(this,B3.EaseOfDelivery
))+String.fromCharCode(0x3B))+K.A$z.call(this,B3.WhereAbouts))+String.fromCharCode(
0x3B))+K.Bu$.call(this,B3.BirthType))+String.fromCharCode(0x3B))+K.AhJ.call(this
,B3.NaisIdMother))+Nb);AcI++;}}Ng.AtF=SF;Ng.AEr=AcI;Ng.Am0=true;},AhJ:function(QY
){if(!QY)return A.jm;return QY.toFixed();},AIf:function(AX1){var Aq=A._NewObject(
A.Core.Bu,0);Aq.Initialize(AX1);return Aq.Format(QT);},A$y:function(Ab3){if(!Ab3
)return A.jm;return A._GetAutoObject(A.Device.Converter).A2A(Ab3).toFixed();},A$x:
function(LY){var result=A.jm;switch(LY){case 0:result=Wg;break;case 1:result=OO;
break;case 2:result=A.jm;break;default:A.aa8("%s",PK+LY.toFixed());}return result;
},Bu8:function(AG_){if(!AG_)return A.jm;return AG_.toFixed();},A$z:function(Ae1){
if(!Ae1)return A.jm;return Ae1.toFixed();},Bu$:function(ArY){return(ArY+1).toFixed(
);},A0m:function(H){var K=this.K;var Ar=(A.Device.PopupContext.isPrototypeOf(H)?
H:null);if(!!Ar&&(Ar.PopupState===7))K.Bu3.call(this,K.AHV.FileName,Ub,K.AHV.AtF
);},BuD:function(Ng){var K=this.K;var B;var SF=Zi;var B3=A._NewObject(A.Device.Animal
,0);var P;var AcI=0;for(P=0;P<A._GetAutoObject(A.Device.Device).Ao.Cj();P++){var
Axr=A.jm;if(B3.ApS())Axr=K.Bvb.call(this,B3.FirstBodyWeight);B3.EK(P,A._GetAutoObject(
A.Device.Device).Ao);SF=SF+(((((((((((K.AhJ.call(this,B3.NaisId)+String.fromCharCode(
0x3B))+K.Bu9.call(this,B3.VisualId))+String.fromCharCode(0x3B))+K.AhJ.call(this,
B3.TransponderId))+String.fromCharCode(0x3B))+K.Bu7.call(this,B3.DateOfBirth))+String.
fromCharCode(0x3B))+K.Bva.call(this,B3.Gender))+String.fromCharCode(0x3B))+Axr)+
Nb);AcI++;}Ng.AtF=SF;Ng.AEr=AcI;Ng.Am0=true;},Be7:function(Ahi){var AxX=A.jm;var
Ad=A._NewObject(A.Core.Bu,0);Ad.Initialize(A._GetAutoObject(A.Device.Helper).DB(
));switch(Ahi){case 0:AxX=Ad.Format(Wh);break;case 1:AxX=Ad.Format(Zj);break;case
2:AxX=Ad.Format(Zk);break;case 3:AxX=Ad.Format(Wi);break;default:throw new Error(
T$+Ahi.toFixed());}return AxX;},Bu9:function(QY){return QY.toFixed();},Bva:function(
LY){var result=A.jm;switch(LY){case 0:result=Wj;break;case 1:result=Su;break;case
2:result=Zl;break;default:A.aa8("%s",PK+LY.toFixed());}return result;},Bvb:function(
N5){if(N5<=0)return A.jm;return A._GetAutoObject(A.Device.Converter).Ana(N5);},Bu7:
function(AX1){var Aq=A._NewObject(A.Core.Bu,0);Aq.Initialize(AX1);return Aq.Format(
Zm);},BuI:function(Ng){var K=this.K;var B;var SF=AbO;var B3=A._NewObject(A.Device.
Animal,0);var P;var AcI=0;for(P=0;P<A._GetAutoObject(A.Device.Device).Ao.Cj();P++
){B3.EK(P,A._GetAutoObject(A.Device.Device).Ao);if(B3.IsRegistrationNoticePending&&(
B3.NaisId>0)){SF=SF+(((((K.AhJ.call(this,A._GetAutoObject(A.Device.Device).YO)+String.
fromCharCode(0x3B))+K.AhJ.call(this,B3.NaisId))+String.fromCharCode(0x3B))+K.AIf.
call(this,A._GetAutoObject(A.Device.Helper).DB()))+Nb);AcI++;}}Ng.AtF=SF;Ng.AEr=
AcI;Ng.Am0=true;},BuG:function(Ng){var K=this.K;var B;var SF=Sv;var B3=A._NewObject(
A.Device.Animal,0);var P;var AcI=0;for(P=0;P<A._GetAutoObject(A.Device.Device).Ao.
Cj();P++){B3.EK(P,A._GetAutoObject(A.Device.Device).Ao);if(B3.IsRegistrationNoticePending&&(
B3.NaisId>0)){SF=SF+(((((((((((((K.AhJ.call(this,B3.NaisId)+String.fromCharCode(
0x3B))+K.AIf.call(this,B3.DateOfBirth))+String.fromCharCode(0x3B))+K.A$x.call(this
,B3.Gender))+String.fromCharCode(0x3B))+K.A$z.call(this,B3.WhereAbouts))+String.
fromCharCode(0x3B))+K.A$y.call(this,B3.Breed))+String.fromCharCode(0x3B))+K.AIf.
call(this,A._GetAutoObject(A.Device.Helper).DB()))+String.fromCharCode(0x3B))+K.
AhJ.call(this,B3.TransponderId))+Nb);AcI++;}}Ng.AtF=SF;Ng.AEr=AcI;Ng.Am0=true;},
_Init:function(aArg){var K=this.K;A.abm.F_._Init.call(K.Ah9={I:this},0);A.abm.F_.
_Init.call(K.ZW={I:this},0);K.__proto__=C.DeviceClass;this.AuW(100);this.AmE(1);
this.Aqs(200);this.Aqr(100);this.Aqw(276000912345678);this.Aqv(276000923456789);
this.Aqt(500);this.Aqx(276000901234567);this.NP(1);K.Ah9.IF(1);K.Ah9.Fz(1000);K.
ZW.VN(0);K.ZW.IF(1);K.ZW.Fz(750);K.ZW.B0=50000;K.Ah9.R5=[this,K.Bxx];K.AsU=A._GetAutoObject(
C.Abw);K.ZW.R5=[this,K.Byl];K.ZW.Q=[this,this.ACL,this.AGW];K.Init.call(this,aArg
);A.hJ++;},_Done:function(){var K=this.K;K.__proto__=null;K.Ah9._Done();K.ZW._Done(
);A.hJ--;},_ReInit:function(){var K=this.K;K.Ah9._ReInit();K.ZW._ReInit();K.C8.call(
this);},_Mark:function(D){var B;if((B=this.AsU)&&(B._cycle!=D))B._Mark(B._cycle=
D);if((B=this.AHV)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Ah9)._cycle!=D)
B._Mark(B._cycle=D);if((B=this.ZW)._cycle!=D)B._Mark(B._cycle=D);},_variants:function(
){return A.abq.DeviceClass._variants();},_className:"DeviceSimulation::DeviceClass"
};C.AE7={A4:0,_Init:function(aArg){C.VH._Init.call(this,aArg);this.__proto__=C.AE7;
},_className:"DeviceSimulation::UInt8"};C.AE5={A4:0,_Init:function(aArg){C.VH._Init.
call(this,aArg);this.__proto__=C.AE5;},_className:"DeviceSimulation::UInt32"};C.
HelperClass={A1j:0,ADL:function(E){var K=this.K;K.A1j=K.A1j+(E-this.DB());A.Device.
HelperClass.A9g.call(this,E);},DB:function(){var K=this.K;return A.Device.HelperClass.
A9c.call(this)+K.A1j;},_Init:function(aArg){var K=this.K;K.__proto__=C.HelperClass;
A.hJ++;},_Done:function(){var K=this.K;K.__proto__=null;A.hJ--;},_ReInit:function(
){},_Mark:function(D){},_variants:function(){return this;},_className:"DeviceSimulation::HelperClass"
};C.A71={AvY:false,AEG:false,AQ8:function(E){if(this.AEG===E)return;this.AEG=E;A.
aat([this,this.A5U,this.AQ8],0);},A5U:function(){return this.AEG;},AQ9:function(
E){if(this.AvY===E)return;this.AvY=E;A.aat([this,this.A5V,this.AQ9],0);},A5V:function(
){return this.AvY;},BhG:function(){return true;},_Init:function(aArg){this.__proto__=
C.A71;A.hJ++;},_Done:function(){this.__proto__=null;A.hJ--;},_ReInit:function(){
},_Mark:function(D){var B;if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null
,_cycle:0,_observers:null,_className:"DeviceSimulation::SimulationConfigClass"};
C.Abw={_Init:function(){C.A71._Init.call(this,0);},_variants:function(){return A.
abq.Abw._variants();},_this:null};C.PopupContext={GN:1,Id:0,_Init:function(aArg){
this.__proto__=C.PopupContext;A.hJ++;},_Done:function(){this.__proto__=null;A.hJ--;
},_ReInit:function(){},_Mark:function(D){var B;if((B=this.I)&&(B._cycle!=D))B._Mark(
B._cycle=D);},I:null,_cycle:0,_observers:null,_className:"DeviceSimulation::PopupContext"
};C.Rating={Cr:function(AF){var Hs=A.Device.Rating.A9i.call(this,AF);if(Hs){var Q3=
A._GetAutoObject(A.Device.Device).Ao;var Ab=A._GetAutoObject(A.Device.Device).Ao.
K4(0,this.AnimalId);if(Ab!==-1){var Jg=Q3.Op();if(Jg<=0)A.aa8("%s",AbP);else{var
B3=A._NewObject(A.Device.Animal,0);B3.EK(Ab,Q3);if((this.Temperature>0)&&(B3.TimestampLastTemperature<
this.Timestamp)){Q3.A7T(Ab,5,this.Temperature);Q3.AjZ(Ab,17,this.RatingTemperature
);Q3.Abu(Ab,30,this.Timestamp);}if(this.BodyWeight>0){if(B3.TimestampLastWeighing<=
this.Timestamp){Q3.AR9(Ab,18,this.BodyWeight);Q3.Abu(Ab,19,this.Timestamp);}if(!
B3.TimestampFirstWeighing||(B3.TimestampFirstWeighing>=this.Timestamp)){Q3.AR9(Ab
,23,this.BodyWeight);Q3.Abu(Ab,24,this.Timestamp);Q3.G_(Ab,25,this.Id);}}if(A._GetAutoObject(
A.Device.Helper).AEg(this)){var Ly=A._GetAutoObject(A.Device.Helper).ABe(this);Q3.
AjZ(Ab,13,Ly);Q3.Abu(Ab,31,this.Timestamp);}Q3.Or(Jg);}}}return Hs;},_Init:function(
aArg){var K=this.K;K.__proto__=C.Rating;A.hJ++;},_Done:function(){var K=this.K;K.
__proto__=null;A.hJ--;},_ReInit:function(){},_Mark:function(D){},_variants:function(
){return this;},_className:"DeviceSimulation::Rating"};C.PE={Gn:A.aan(512,null,null
),O2:0,AHC:0,AJf:0,A1m:A.aan(10,0,{0:3600,1:3750,2:3900,3:4200,4:3780,5:3600,6:3900
,7:4010,8:4020,9:4030}),AIS:0,A0W:A.aan(10,0,{0:5,1:4,2:3,3:1,4:2,5:1,6:1,7:1,8:
1,9:1}),Bap:512,Ayk:-1,AYB:A.aan(15,0,{0:2,1:2,2:2,3:2,4:2,5:3,6:3,7:3,8:3,9:3,10:
1,11:1,12:1,13:1,14:1}),AIr:false,CE:function(Ab,AX){var A9=this.Td(Ab);if(!!A9)
return A9.CE(AX);return 0;},Va:function(Ab,AX){var A9=this.Td(Ab);if(!!A9)return A9.
Va(AX);return A.jm;},HV:function(Ab,AX){var A9=this.Td(Ab);if(!!A9)return A9.HV(
AX);return false;},Vb:function(Ab,AX){var A9=this.Td(Ab);if(!!A9)return A9.Vb(AX
);return 0;},RQ:function(Ab,AX){var A9=this.Td(Ab);if(!!A9)return A9.RQ(AX);return 0;
},Op:function(){if(this.AIr)throw new Error(AeN);this.AIr=true;return 12345;},Or:
function(AnF){if(!this.AIr)throw new Error(Zn);if(AnF!==12345)throw new Error(Wk
);this.AIr=false;return true;},XW:function(){return this.A1X(A._NewObject(C.AEq,
0));},YZ:function(Ab,AX,CX){var A9=this.Td(Ab);if(!!A9)return A9.YZ(AX,CX);return false;
},G_:function(Ab,AX,CX){var A9=this.Td(Ab);if(!!A9)return A9.G_(AX,CX);return false;
},YY:function(Ab,AX,CX){var A9=this.Td(Ab);if(!!A9)return A9.YY(AX,CX);return false;
},M_:function(Ab,AX,CX){var A9=this.Td(Ab);if(!!A9)return A9.M_(AX,CX);return false;
},YX:function(Ab,AX,CX){var A9=this.Td(Ab);if(!!A9)return A9.YX(AX,CX);return false;
},OnSetId:function(E){if(this.Id===E)return;this.Id=E;this.A_$();switch(this.Id){
case 0:{this.Bap=128;A.ow([this,this.BsB],this);}break;case 1:A.ow([this,this.BsD
],this);break;case 3:A.ow([this,this.BsA],this);break;case 4:A.ow([this,this.BsC
],this);break;case 2:break;default:throw new Error(Wl+this.Id.toFixed());}},Cj:function(
){return this.O2;},LD:function(Ab,AX){var A9=this.Td(Ab);if(!!A9)return A9.LD(AX
);return 0;},TP:function(Ab,AX,CX){var A9=this.Td(Ab);if(!!A9)return A9.TP(AX,CX
);return false;},G9:function(){this.A_$();return true;},Hz:function(){return this.
Bap;},A1X:function(Ab){if(this.O2>=512)throw new Error(AeO);this.Gn.Set(this.O2,
Ab);this.O2=this.O2+1;switch(this.Id){case 0:{this.Ayk=this.O2;this.G_(this.O2-1
,0,this.Ayk);}break;case 1:{this.Ayk=this.O2-1;this.G_(this.O2-1,0,this.Ayk);}break;
default:;}A.ow([this,this.Aju],this);return this.O2-1;},Td:function(aIndex){if((
aIndex<0)||(aIndex>=512))return null;return this.Gn.Get(aIndex);},A_$:function(){
var P;for(P=0;P<512;P=P+1)this.Gn.Set(P,null);this.O2=0;this.AHC=0;this.AIS=0;this.
AJf=0;A.ow([this,this.Aju],this);},AIm:function(){this.AHC=(this.AHC+1)%15;return this.
AYB.Get(this.AHC);},AZp:function(){this.AJf=(this.AJf+1)%10;return this.A1m.Get(
this.AJf);},AH_:function(H){if(this.K&&this.K.AH_)return this.K.AH_.apply(this,arguments
);else return C.PE.BsJ.apply(this,arguments);},BsJ:function(H){var B;var Oa=true;
this.Bi(276000312310001,10,1,A._GetAutoObject(A.Device.Helper).Ag2(12),0,1,true,
true,false,true,39000,0,0,false,0,false,0,0,0,0);this.Bi(12310020,20,12,A._GetAutoObject(
A.Device.Helper).Ag2(12),0,0,false,false,true,true,36500,0,0,false,0,false,0,0,0
,0);this.Bi(276000312310021,10,1,A._GetAutoObject(A.Device.Helper).Ag2(9),0,0,true
,false,false,true,37200,0,0,false,0,false,0,0,0,0);this.Bi(276000312310022,20,2,
A._GetAutoObject(A.Device.Helper).Ag2(830),0,1,false,false,false,true,41200,A._GetAutoObject(
A.Device.Helper).Ag2(1),1,true,1,false,0,0,0,0);this.Bi(276000312310023,20,2,A._GetAutoObject(
A.Device.Helper).Ag2(1200),0,1,false,false,false,true,43500,A._GetAutoObject(A.Device.
Helper).Ag2(8),2,false,1,false,0,0,0,0);this.Bi(276000312310026,20,2,A._GetAutoObject(
A.Device.Helper).Ag2(8),0,0,true,false,false,true,34000,0,0,false,0,false,0,0,0,
0);var P;var BcB=0;for(P=1;P<=7;P=P+1){BcB=3680+(20*P);Oa=BcB>3800;this.Bi(276000312310050+(((
B=P)<0)?B+0x10000000000000000:B),30+(P%3),3,A._GetAutoObject(A.Device.Helper).Ag2(
7-P),0,1,Oa,false,false,true,36000+(P*900),0,0,false,0,true,0,0,0,0);}},BsB:function(
s){this.AH_(s);},AIa:function(H){if(this.K&&this.K.AIa)return this.K.AIa.apply(this
,arguments);else return C.PE.BsL.apply(this,arguments);},BsL:function(H){var Ad=
A._GetAutoObject(A.Device.Helper).DB();var P;Ad=Ad-2678400;var AhI;var A$q;for(P=
0;P<32;P=P+1){var AZa=this.Bvn();for(;AZa>0;AZa=AZa-1){AhI=this.AZp();A$q=A._GetAutoObject(
A.Device.Converter).Arg(0,AhI);this.AE(Ad,12310020,AhI,A$q,this.AIm(),this.AIm()
,this.AIm(),this.AIm(),0);}Ad=Ad+86400;}Ad=Ad-86400;this.AE(Ad,12310020,0,0,0,0,
0,0,43700);this.AE(Ad-86400,276000312310001,0,0,0,0,0,0,49800);this.AE(Ad,276000312310001
,0,0,0,0,0,0,51000);AhI=this.AZp();this.AE(Ad,276000312310001,AhI,A._GetAutoObject(
A.Device.Converter).Arg(0,AhI),1,3,3,3,0);AhI=this.AZp();this.AE(Ad-86400,276000312310022
,3800,A._GetAutoObject(A.Device.Converter).Arg(1,3800),2,3,3,3,0);this.AE(Ad,276000312310022
,AhI,A._GetAutoObject(A.Device.Converter).Arg(1,AhI),2,3,3,3,0);},BsD:function(s
){this.AIa(s);},Bi:function(Kn,Bs7,Btm,A_f,ArY,LY,Btc,Bti,Btf,Btg,N5,BsT,Btk,Bte
,Ee,Bth,Ab3,AG_,Ae1,Btr){var B3=A._NewObject(A.Device.Animal,0);B3.Gd();B3.AvB(0
);B3.Ad6(0);B3.TE(false);B3.AjG(false);B3.M6(Kn);B3.M5(Kn);B3.TG(A._GetAutoObject(
A.Device.Helper).Aka(B3.TransponderId));B3.Abg(Bs7);B3.AmF(Btm);B3.R8(A_f);B3.Ajy(
ArY);B3.JM(LY);B3.AmW(Btc);B3.AEz(Bti);B3.AgF(Btg);B3.TE(Btf);B3.Aqu(Bte);B3.Ave(
Btk);B3.Au2(BsT);B3.DV(Ee);B3.AgG(Bth);B3.NP(Ab3);B3.AjB(AG_);B3.M7(Ae1);B3.AmH(
Btr);B3.Cr(this);if(N5>0)A._GetAutoObject(C.AvM).AE(A_f,Kn,0,0,0,0,0,0,N5);},AE:
function(LX,Ab1,AnD,BtD,Bs1,Bs2,BsM,BtF,BsN){var BW=A._NewObject(A.Device.Rating
,0);BW.Gd();var A_T=A._GetAutoObject(C.Ao6).AMo(26,Ab1);if(A_T>=0)BW.OnSetAnimalId(
A._GetAutoObject(C.Ao6).CE(A_T,0));else A.aa8("%s%U",AeP,Ab1);BW.OnSetTimestamp(
LX);BW.OnSetTemperature(AnD);BW.OnSetRatingTemperature(BtD);BW.OnSetFaeces(Bs1);
BW.OnSetFeed(Bs2);BW.OnSetAppearance(BsM);BW.OnSetRespiratory(BtF);BW.OnSetBodyWeight(
BsN);BW.Cr(this);},A3C:function(aColumn,A1){var P;for(P=0;P<this.O2;P=P+1)if(this.
Gn.Get(P).CE(aColumn)===A1)return P;return-1;},Bvn:function(){this.AIS=(this.AIS+
1)%10;return this.A0W.Get(this.AIS);},AH9:function(H){if(this.K&&this.K.AH9)return this.
K.AH9.apply(this,arguments);else return C.PE.BsI.apply(this,arguments);},BsI:function(
H){this.AkT(10,JT);this.AkT(20,AbQ);this.AkT(30,Li);this.AkT(31,Ag$);this.AkT(32
,Anc);},BsA:function(s){this.AH9(s);},AkT:function(Kn,Bs8){var AHw=A._NewObject(
A.Device.AnimalGroup,0);AHw.Gd();AHw.OnSetId(Kn);AHw.ADb(Bs8);AHw.Cr(this);},Aay:
function(){return this.Ayk;},AMo:function(aColumn,A1){var P;for(P=0;P<this.O2;P=
P+1)if(this.Gn.Get(P).LD(aColumn)===A1)return P;return-1;},AH$:function(H){if(this.
K&&this.K.AH$)return this.K.AH$.apply(this,arguments);else return C.PE.BsK.apply(
this,arguments);},BsK:function(H){this.ZH(2016,216,6);this.ZH(2017,217,7);this.ZH(
2018,218,8);this.ZH(2019,219,9);this.ZH(2020,220,10);this.ZH(2021,221,11);},BsC:
function(s){this.AH$(s);},ZH:function(Ab_,BsX,BsW){var Ul=A._NewObject(A.Device.
CalfDeregistrations,0);Ul.Gd();Ul.AjN(Ab_);Ul.Au4(BsX);Ul.Au3(BsW);Ul.Cr(this);}
,_Init:function(aArg){A.Device.ITable._Init.call(this,aArg);(this.Gn=[]).__proto__=
C.PE.Gn;(this.A1m=[]).__proto__=C.PE.A1m;(this.A0W=[]).__proto__=C.PE.A0W;(this.
AYB=[]).__proto__=C.PE.AYB;this.__proto__=C.PE;var Lj=this._variants();if(Lj){this.
K={};Lj._Init.call(this,aArg);}},_Done:function(){if(this.K)this.K._Done.call(this
);this.__proto__=A.Device.ITable;A.Device.ITable._Done.call(this);},_ReInit:function(
){A.Device.ITable._ReInit.call(this);if(this.K)this.K._ReInit.call(this);},_Mark:
function(D){var B;A.Device.ITable._Mark.call(this,D);A.aaf(this.Gn,D);if(this.K)
this.K._Mark(D);},_variants:function(){return A.abq.PE._variants();},K:null,_className:
"DeviceSimulation::TableData"};C.Ao6={_Init:function(){C.PE._Init.call(this,0);this.
OnSetId(0);},_variants:function(){return this;},_this:null};C.AzP={_Init:function(
){C.PE._Init.call(this,0);this.OnSetId(3);},_variants:function(){return this;},_this:
null};C.AvM={_Init:function(){C.PE._Init.call(this,0);this.OnSetId(1);},_variants:
function(){return this;},_this:null};C.Gu={AkN:A.aan(128,null,null),Gg:null,An5:
0,CE:function(Ab,AX){var A9=this.ZF(Ab);if(!!A9)return A9.CE(AX);return 0;},Va:function(
Ab,AX){var A9=this.ZF(Ab);if(!!A9)return A9.Va(AX);return A.jm;},HV:function(Ab,
AX){var A9=this.ZF(Ab);if(!!A9)return A9.HV(AX);return false;},OnSetId:function(
E){if(this.Id===E)return;this.Id=E;switch(this.Id){case 0:this.AD4(A._GetAutoObject(
C.Ao6));break;case 1:this.AD4(A._GetAutoObject(C.AvM));break;case 3:this.AD4(A._GetAutoObject(
C.AzP));break;case 4:this.AD4(A._GetAutoObject(C.AAc));break;case 2:break;default:
throw new Error(Wl+this.Id.toFixed());}},Cj:function(){if(!!this.Filter)return this.
An5;else if(!!this.Gg)return this.Gg.O2;return 0;},Bk:function(E){A.Device.ITable.
Bk.call(this,E);this.AYz(this);},Vb:function(Ab,AX){var A9=this.ZF(Ab);if(!!A9)return A9.
Vb(AX);return 0;},RQ:function(Ab,AX){var A9=this.ZF(Ab);if(!!A9)return A9.RQ(AX);
return 0;},Op:function(){if(!!this.Gg)return this.Gg.Op();return-1;},Or:function(
AnF){var Hs=false;if(!!this.Gg)Hs=this.Gg.Or(AnF);if(Hs)A.ow([this,this.AYz],this
);return Hs;},XW:function(){if(!!this.Filter)throw new Error(N2+A._GetAutoObject(
A.Device.Converter).BeL(this.Id,this.Filter));if(!!this.Gg)return this.Gg.A1X(A.
_NewObject(C.AEq,0));return-1;},YZ:function(Ab,AX,CX){var A9=this.ZF(Ab);if(!!A9
)return A9.YZ(AX,CX);return false;},G_:function(Ab,AX,CX){var A9=this.ZF(Ab);if(
!!A9)return A9.G_(AX,CX);return false;},YY:function(Ab,AX,CX){var A9=this.ZF(Ab);
if(!!A9)return A9.YY(AX,CX);return false;},M_:function(Ab,AX,CX){var A9=this.ZF(
Ab);if(!!A9)return A9.M_(AX,CX);return false;},YX:function(Ab,AX,CX){var A9=this.
ZF(Ab);if(!!A9)return A9.YX(AX,CX);return false;},K4:function(aColumn,A1){if(!!this.
Filter){var P;for(P=0;P<this.An5;P=P+1)if(this.AkN.Get(P).CE(aColumn)===A1)return P;
return-1;}else if(!!this.Gg)return this.Gg.A3C(aColumn,A1);return-1;},LD:function(
Ab,AX){var A9=this.ZF(Ab);if(!!A9)return A9.LD(AX);return 0;},TP:function(Ab,AX,
CX){var A9=this.ZF(Ab);if(!!A9)return A9.TP(AX,CX);return false;},AiY:function(aColumn
,A1){if(!!this.Filter){var P;for(P=0;P<this.An5;P=P+1)if(this.AkN.Get(P).LD(aColumn
)===A1)return P;return-1;}else if(!!this.Gg)return this.Gg.AMo(aColumn,A1);return-
1;},G9:function(){if(!!this.Gg)return this.Gg.G9();return false;},AiV:function(aColumn
,A1){if(!!this.Gg)return this.Gg.A3C(aColumn,A1)>=0;return false;},Af4:function(
aColumn,A1){if(!!this.Gg)return this.Gg.AMo(aColumn,A1)>=0;return false;},Hz:function(
){if(!!this.Gg)return this.Gg.Hz();return 0;},Aay:function(){if(!!this.Gg)return this.
Gg.Aay();return-1;},Qb:function(){if(!!this.Gg)return this.Gg.O2;return 0;},AYz:
function(H){this.AYO();if(!!this.Filter&&!!this.Gg){var P;for(P=0;P<this.Gg.Cj();
P=P+1){var AZe=true;var Av=this.Filter.AMC();var A9=this.Gg.Td(P);if(!!A9)while(
AZe&&!!Av){AZe=A9.BfL(Av);Av=this.Filter.AMG(Av);}else A.aa8("%s",((Wm+P.toFixed(
))+And)+this.Gg.Cj().toFixed());if(AZe){this.AkN.Set(this.An5,this.Gg.Gn.Get(P));
this.An5=this.An5+1;}}}A.ow([this,this.Aju],this);},AYO:function(){var P;for(P=0;
P<128;P=P+1)this.AkN.Set(P,null);this.An5=0;},AD4:function(E){if(this.Gg===E)return;
if(!!this.Gg)A.zl([this,this.A1k],this.Gg,0);this.Gg=E;if(!!this.Gg){A.y_([this,
this.A1k],this.Gg,0);A.ow([this,this.A1k],this);}},A1k:function(H){A.ow([this,this.
AYz],this);},ZF:function(aIndex){if(!!this.Filter){if((aIndex<0)||(aIndex>=128))
return null;else return this.AkN.Get(aIndex);}else if(!!this.Gg)return this.Gg.Td(
aIndex);A.aa8("%s",Aha+aIndex.toFixed());return null;},_Init:function(aArg){A.Device.
ITable._Init.call(this,aArg);(this.AkN=[]).__proto__=C.Gu.AkN;this.__proto__=C.Gu;
},_Mark:function(D){var B;A.Device.ITable._Mark.call(this,D);A.aaf(this.AkN,D);if((
B=this.Gg)&&(B._cycle!=D))B._Mark(B._cycle=D);},_className:"DeviceSimulation::FilteredTable"
};C.A72={Kr:null,AcK:null,A1e:function(H){if(A._GetAutoObject(C.Abw).BhG()===false
)return;switch(A._GetAutoObject(A.Device.Device).SyncState){case 0:{A._GetAutoObject(
A.Device.Device).Abm(1);this.AcK.Ap(true);}break;case 1:{A._GetAutoObject(A.Device.
Device).Abm(2);A._GetAutoObject(A.Device.Device).AqE(A._GetAutoObject(A.Device.Device
).Ao.Qb());this.Kr.Fz(A._GetAutoObject(A.Device.Device).AeC*50);this.Kr.B0=A._GetAutoObject(
A.Device.Device).AeC;this.Kr.Ap(true);}break;case 2:{A._GetAutoObject(A.Device.Device
).Abm(3);this.AcK.Ap(true);}break;case 3:{A._GetAutoObject(A.Device.Device).Abm(
4);A._GetAutoObject(A.Device.Device).AqE(A._GetAutoObject(A.Device.Device).Ao.Qb(
));this.Kr.Fz(A._GetAutoObject(A.Device.Device).AeC*50);this.Kr.B0=A._GetAutoObject(
A.Device.Device).AeC;this.Kr.Ap(true);}break;case 4:{A._GetAutoObject(A.Device.Device
).Abm(5);this.AcK.Ap(true);}break;case 5:A.ow([this,this.Bcv],this);break;case 7:
case 6:break;default:A.aa8("%s%e",Ahb,A._GetAutoObject(A.Device.Device).SyncState
);}},BwQ:function(H){this.AcK.Ap(false);A.ow([this,this.A1e],this);},BxR:function(
H){switch(A._GetAutoObject(A.Device.Device).SyncState){case 0:case 6:case 7:{A._GetAutoObject(
A.Device.Device).Abm(0);A.ow([this,this.A1e],this);}break;default:;}},Bcv:function(
H){this.AcK.Ap(false);this.Kr.Ap(false);A._GetAutoObject(A.Device.Device).Abm(0);
},_Init:function(aArg){A.abm.F_._Init.call(this.Kr={I:this},0);A.Core.Timer._Init.
call(this.AcK={I:this},0);this.__proto__=C.A72;var B;this.Kr.IF(1);this.AcK.Qz(2000
);this.Kr.R5=[this,this.A1e];this.Kr.Q=[B=A._GetAutoObject(A.Device.Device),B.AQx
,B.AXC];this.AcK.M8=[this,this.BwQ];A.hJ++;},_Done:function(){this.__proto__=null;
this.Kr._Done();this.AcK._Done();A.hJ--;},_ReInit:function(){this.Kr._ReInit();this.
AcK._ReInit();},_Mark:function(D){var B;if((B=this.Kr)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.AcK)._cycle!=D)B._Mark(B._cycle=D);if((B=this.I)&&(B._cycle!=D))B.
_Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:"DeviceSimulation::SimulationHelperClass"
};C.Ara={_Init:function(){C.A72._Init.call(this,0);},_variants:function(){return this;
},_this:null};C.AE6={A4:0,_Init:function(aArg){C.VH._Init.call(this,aArg);this.__proto__=
C.AE6;},_className:"DeviceSimulation::UInt64"};C.AAc={_Init:function(){C.PE._Init.
call(this,0);this.OnSetId(4);},_variants:function(){return this;},_this:null};C.
FactoryResetScope={Dw:function(){return 1;},_Init:function(aArg){var K=this.K;K.
__proto__=C.FactoryResetScope;this.Cy.Set(0,1);A.hJ++;},_Done:function(){var K=this.
K;K.__proto__=null;A.hJ--;},_ReInit:function(){},_Mark:function(D){},_variants:function(
){return this;},_className:"DeviceSimulation::FactoryResetScope"};C.Xc={Ac8:null
,CM:function(H){var K=this.K;A.aa8("%s",AbR);K.Ac8.Ap(true);},E_:function(H){var
K=this.K;if(K.Ac8.Bw===true){K.Ac8.Ap(false);A.aa8("%s",Uc);}},BgS:function(H){var
K=this.K;K.Ac8.Ap(false);A._GetAutoObject(A.kh.A0).AgL(A._GetAutoObject(A.Device.
Device).Av2);},_Init:function(aArg){var K=this.K;A.Core.Timer._Init.call(K.Ac8={
I:this},0);K.__proto__=C.Xc;this.AdM.G(Ane);K.Ac8.Qz(1500);this.TQ.R(Anf);this.TQ.
X(true);this.AdM.At(A.zW(A.abi.APh));K.Ac8.M8=[this,K.BgS];A.hJ++;},_Done:function(
){var K=this.K;K.__proto__=null;K.Ac8._Done();A.hJ--;},_ReInit:function(){var K=
this.K;K.Ac8._ReInit();},_Mark:function(D){var B;if((B=this.Ac8)._cycle!=D)B._Mark(
B._cycle=D);},_variants:function(){return this;},_className:"DeviceSimulation::BootScreen"
};C.AiM={AtF:A.jm,_Init:function(aArg){A.Device.AiM._Init.call(this,aArg);this.__proto__=
C.AiM;},_className:"DeviceSimulation::DataExportContext"};
C._Init=function(){C.ABX.__proto__=C.VH;C.String.__proto__=C.VH;C.Az8.__proto__=C.
VH;C.AE7.__proto__=C.VH;C.AE5.__proto__=C.VH;C.PE.__proto__=A.Device.ITable;C.Gu.
__proto__=A.Device.ITable;C.AE6.__proto__=C.VH;C.AiM.__proto__=A.Device.AiM;};C.
_ReInit=function(){var B;if((B=C.Abw._this))B._ReInit();if((B=C.Ao6._this))B._ReInit(
);if((B=C.AzP._this))B._ReInit();if((B=C.AvM._this))B._ReInit();if((B=C.Ara._this
))B._ReInit();if((B=C.AAc._this))B._ReInit();};C.DE=function(D){var B;if((B=C.Abw.
_this)&&(B._cycle!=D))B._Done(C.Abw._this=null);if((B=C.Ao6._this)&&(B._cycle!=D
))B._Done(C.Ao6._this=null);if((B=C.AzP._this)&&(B._cycle!=D))B._Done(C.AzP._this=
null);if((B=C.AvM._this)&&(B._cycle!=D))B._Done(C.AvM._this=null);if((B=C.Ara._this
)&&(B._cycle!=D))B._Done(C.Ara._this=null);if((B=C.AAc._this)&&(B._cycle!=D))B._Done(
C.AAc._this=null);};return C;})();

/* VitalControl demonstration application, © Urban GmbH & Co.KG 2023 */