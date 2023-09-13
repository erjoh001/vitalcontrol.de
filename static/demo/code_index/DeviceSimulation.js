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
Ss="1,2";var T9="0,1,2";var Zc="3900,3950,4000";var Wa="4050,4100,4150";var I$="Read only";
var T_="Unknown data export type: ";var Zd="Unhandled Device::DataExportType: ";
var Wb="0,2";var Ze="650,150";var T$="800,200";var Zf="40000,4000";var Zg="32,7,34,18,23,14";
var Ua="Simulate Scan";var Wc="BNR15;LOM;GEB_DATR;RASSE;GESCHL_R;GEB_VERL;VERBLEIB;MEHRLADR;LOM_MUT\n";
var QT="%d.%m.%Y";var Zh="1";var OO="2";var PK="Unknown gender: ";var Ub="text/csv";
var Zi="National-ID-Animal;Farm-ID-Animal;Transponder-ID;DateOfBirth;Sex;BirthWeight-Kg\n";
var Wd="hit-geburt-%d-%m-%Y_%H-%M.csv";var Zj="animals-%d-%m-%Y_%H-%M.csv";var Zk=
"hit-zugang-%d-%m-%Y_%H-%M.csv";var We="herde-zugang-%d-%m-%Y_%H-%M.csv";var Wf=
"M";var St="F";var Zl="?";var Zm="%Y-%m-%d";var AbO="BNR15;LOM;ZUGA_DAT\n";var Su=
"Ohrnummer;Geburtsdatum;Geschlecht;Nutzung;Rasse;Zugangsdatum;Transponder\n";var
AbP="ERROR: Cannot start transaction";var AeN="Nested transactions are not allowed.";
var Zn="Transaction not opened.";var Wg="Wrong transaction ID.";var Wh="Unhandled TableId:";
var AeO="Maximum number of rows reached.";var AeP="Animal row not found in DeviceSimulation::AnimalTableData. NaisId";
var JT="10";var AeQ="20";var Li="30";var Ag$="31";var Anf="32";var N2="Severe: filter set when inserting row into table: ";
var Wi="ERROR: Row not found with index [";var Ang="] while Rows Count = ";var Aha=
"ERROR: trying to access an inexistent row with Index=";var Ahb="Invalid Device::SyncState";
var AbQ="Forwarding to home screen after 500 milliseconds ...";var Uc="Forwarding to home screen canceled...";
var Anh=[0,58,240,208];var Ani="VitalControl\nstarting up \u2026";
C.Table={Gu:null,Init:function(aArg){var K=this.K;A.y_([this,this.Aju],K.Gu,0);},
CE:function(Ab,AX){var K=this.K;return K.Gu.CE(Ab,AX);},Va:function(Ab,AX){var K=
this.K;return K.Gu.Va(Ab,AX);},HV:function(Ab,AX){var K=this.K;return K.Gu.HV(Ab
,AX);},OnSetId:function(E){var K=this.K;if(this.Id===E)return;this.Id=E;K.Gu.OnSetId(
E);},Cj:function(){var K=this.K;return K.Gu.Cj();},Bk:function(E){var K=this.K;A.
Device.ITable.Bk.call(this,E);K.Gu.Bk(E);},Vb:function(Ab,AX){var K=this.K;return K.
Gu.Vb(Ab,AX);},RQ:function(Ab,AX){var K=this.K;return K.Gu.RQ(Ab,AX);},Op:function(
){var K=this.K;return K.Gu.Op();},Or:function(AnJ){var K=this.K;return K.Gu.Or(AnJ
);},XS:function(){var K=this.K;return K.Gu.XS();},YV:function(Ab,AX,CX){var K=this.
K;return K.Gu.YV(Ab,AX,CX);},G_:function(Ab,AX,CX){var K=this.K;return K.Gu.G_(Ab
,AX,CX);},YU:function(Ab,AX,CX){var K=this.K;return K.Gu.YU(Ab,AX,CX);},M_:function(
Ab,AX,CX){var K=this.K;return K.Gu.M_(Ab,AX,CX);},YT:function(Ab,AX,CX){var K=this.
K;return K.Gu.YT(Ab,AX,CX);},K4:function(aColumn,A1){var K=this.K;return K.Gu.K4(
aColumn,A1);},LD:function(Ab,AX){var K=this.K;return K.Gu.LD(Ab,AX);},TO:function(
Ab,AX,CX){var K=this.K;return K.Gu.TO(Ab,AX,CX);},AiY:function(aColumn,A1){var K=
this.K;return K.Gu.AiY(aColumn,A1);},G9:function(){var K=this.K;return K.Gu.G9();
},AiV:function(aColumn,A1){var K=this.K;return K.Gu.AiV(aColumn,A1);},Af5:function(
aColumn,A1){var K=this.K;return K.Gu.Af5(aColumn,A1);},Hz:function(){var K=this.
K;return K.Gu.Hz();},Aay:function(){var K=this.K;return K.Gu.Aay();},Qb:function(
){var K=this.K;return K.Gu.Qb();},_Init:function(aArg){var K=this.K;C.Gu._Init.call(
K.Gu={I:this},0);K.__proto__=C.Table;K.Init.call(this,aArg);A.hJ++;},_Done:function(
){var K=this.K;K.__proto__=null;K.Gu._Done();A.hJ--;},_ReInit:function(){var K=this.
K;K.Gu._ReInit();},_Mark:function(D){var B;if((B=this.Gu)._cycle!=D)B._Mark(B._cycle=
D);},_variants:function(){return this;},_className:"DeviceSimulation::Table"};C.
AEq={SF:A.aan(42,null,null),CE:function(aColumn){var B;this.Zy(aColumn);var An=(
C.ABW.isPrototypeOf(B=this.SF.Get(aColumn))?B:null);if(!!An)return An.A4;return 0;
},Va:function(aColumn){var B;this.Zy(aColumn);var An=(C.String.isPrototypeOf(B=this.
SF.Get(aColumn))?B:null);if(!!An)return An.A4;return A.jm;},HV:function(aColumn){
var B;this.Zy(aColumn);var An=(C.Az7.isPrototypeOf(B=this.SF.Get(aColumn))?B:null
);if(!!An)return An.A4;else A.aa8("%s",(B_+aColumn.toFixed())+BH);return false;}
,G_:function(aColumn,A1){this.Zy(aColumn);var An=A._NewObject(C.ABW,0);An.A4=A1;
this.SF.Set(aColumn,An);return true;},YT:function(aColumn,A1){this.Zy(aColumn);var
An=A._NewObject(C.String,0);An.A4=A1;this.SF.Set(aColumn,An);return true;},M_:function(
aColumn,A1){this.Zy(aColumn);var An=A._NewObject(C.Az7,0);An.A4=A1;this.SF.Set(aColumn
,An);return true;},Zy:function(aColumn){if((aColumn<0)||(aColumn>=42))throw new Error((
EV+aColumn.toFixed())+GS);},BfQ:function(AL){if(!!(A.Device.Int32FilterCriterion.
isPrototypeOf(AL)?AL:null))return this.AHO(this.CE(AL.ET),AL.Operator,(A.Device.
Int32FilterCriterion.isPrototypeOf(AL)?AL:null).A4);else if(!!(A.Device.UInt32FilterCriterion.
isPrototypeOf(AL)?AL:null))return this.Buw(this.RQ(AL.ET),AL.Operator,(A.Device.
UInt32FilterCriterion.isPrototypeOf(AL)?AL:null).A4);else if(!!(A.Device.StringFilterCriterion.
isPrototypeOf(AL)?AL:null))return this.Buv(this.Va(AL.ET),AL.Operator,(A.Device.
StringFilterCriterion.isPrototypeOf(AL)?AL:null).A4);else if(!!(A.Device.BoolFilterCriterion.
isPrototypeOf(AL)?AL:null))return this.Buu(this.HV(AL.ET),AL.Operator,(A.Device.
BoolFilterCriterion.isPrototypeOf(AL)?AL:null).A4);else if(!!(A.Device.AnimalTypeFilterCriterion.
isPrototypeOf(AL)?AL:null))return this.AHO(this.CE(AL.ET),AL.Operator,(A.Device.
AnimalTypeFilterCriterion.isPrototypeOf(AL)?AL:null).A4);else if(!!(A.Device.GenderFilterCriterion.
isPrototypeOf(AL)?AL:null))return this.AHO(this.CE(AL.ET),AL.Operator,(A.Device.
GenderFilterCriterion.isPrototypeOf(AL)?AL:null).A4);else if(!!(A.Device.AssessmentFilterCriterion.
isPrototypeOf(AL)?AL:null))return this.Buy(this.Vb(AL.ET),AL.Operator,(((B=(A.Device.
AssessmentFilterCriterion.isPrototypeOf(AL)?AL:null).A4)<0)?B+0x100000000:B)&0xFF
);else if(!!(A.Device.UInt64FilterCriterion.isPrototypeOf(AL)?AL:null))return this.
Bux(this.LD(AL.ET),AL.Operator,(A.Device.UInt64FilterCriterion.isPrototypeOf(AL)?
AL:null).A4);else if(!!(A.Device.WhereAboutsFilterCriterion.isPrototypeOf(AL)?AL:
null))return this.AHO(this.CE(AL.ET),AL.Operator,(A.Device.WhereAboutsFilterCriterion.
isPrototypeOf(AL)?AL:null).A4);else throw new Error(Jt);},AHO:function(H3,EE,H4){
switch(EE){case 0:return H3===H4;case 2:return H3>H4;case 3:return H3<H4;case 4:
return H3.toFixed().indexOf(H4.toFixed(),0)>=0;case 5:return H3!==H4;default:throw new
Error(IL+EE.toFixed());}},Buv:function(H3,EE,H4){switch(EE){case 0:return H3===H4;
case 2:return H3>H4;case 3:return H3<H4;case 4:{A.aa8("%s%e%s%i",H3,EE,H4,H3.indexOf(
H4,0));return H3.indexOf(H4,0)>=0;}case 5:return H3!==H4;default:throw new Error(
IL+EE.toFixed());}},Buu:function(H3,EE,H4){switch(EE){case 0:return H3===H4;case
2:return false;case 3:return false;case 4:return false;case 5:return H3!==H4;default:
throw new Error(IL+EE.toFixed());}},Vb:function(aColumn){var B;this.Zy(aColumn);
var An=(C.AE7.isPrototypeOf(B=this.SF.Get(aColumn))?B:null);if(!!An)return An.A4;
return 0;},YV:function(aColumn,A1){this.Zy(aColumn);var An=A._NewObject(C.AE7,0);
An.A4=A1;this.SF.Set(aColumn,An);return true;},Buy:function(H3,EE,H4){switch(EE){
case 0:return H3===H4;case 2:return H3>H4;case 3:return H3<H4;case 5:return H3!==
H4;default:throw new Error(IL+EE.toFixed());}},RQ:function(aColumn){var B;this.Zy(
aColumn);var An=(C.AE5.isPrototypeOf(B=this.SF.Get(aColumn))?B:null);if(!!An)return An.
A4;return 0;},YU:function(aColumn,A1){this.Zy(aColumn);var An=A._NewObject(C.AE5
,0);An.A4=A1;this.SF.Set(aColumn,An);return true;},Buw:function(H3,EE,H4){switch(
EE){case 0:return H3===H4;case 2:return H3>H4;case 3:return H3<H4;case 5:return H3
!==H4;default:throw new Error(IL+EE.toFixed());}},LD:function(aColumn){var B;this.
Zy(aColumn);var An=(C.AE6.isPrototypeOf(B=this.SF.Get(aColumn))?B:null);if(!!An)
return An.A4;return 0;},TO:function(aColumn,A1){this.Zy(aColumn);var An=A._NewObject(
C.AE6,0);An.A4=A1;this.SF.Set(aColumn,An);return true;},Bux:function(H3,EE,H4){switch(
EE){case 0:return H3===H4;case 2:return H3>H4;case 3:return H3<H4;case 5:return H3
!==H4;default:throw new Error(IL+EE.toFixed());}},_Init:function(aArg){(this.SF=[
]).__proto__=C.AEq.SF;this.__proto__=C.AEq;A.hJ++;},_Done:function(){this.__proto__=
null;A.hJ--;},_ReInit:function(){},_Mark:function(D){var B;A.aaf(this.SF,D);if((
B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:
"DeviceSimulation::RowData"};C.VH={_Init:function(aArg){this.__proto__=C.VH;A.hJ++;
},_Done:function(){this.__proto__=null;A.hJ--;},_ReInit:function(){},_Mark:function(
D){var B;if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:
null,_className:"DeviceSimulation::NativeType"};C.ABW={A4:0,_Init:function(aArg){
C.VH._Init.call(this,aArg);this.__proto__=C.ABW;},_className:"DeviceSimulation::Int32"
};C.String={A4:A.jm,_Init:function(aArg){C.VH._Init.call(this,aArg);this.__proto__=
C.String;},_className:"DeviceSimulation::String"};C.Az7={A4:false,_Init:function(
aArg){C.VH._Init.call(this,aArg);this.__proto__=C.Az7;},_className:"DeviceSimulation::Bool"
};C.DeviceClass={AsT:null,AHU:null,Ah9:null,ZW:null,C3:function(){var K=this.K;K.
A70.call(this,this);},Init:function(aArg){var K=this.K;var B;this.Yy(3);A.za([this
,K.Azj],[B=K.AsT,B.A50,B.AQ7],0);this.UpdateAutoActions(OK);K.A70.call(this,this
);this.Aq3(this);this.Aq4(this);this.AqZ(this);this.Aq1(this);this.Aq0(this);var
languageMin=0;var languageMax=17;var languageValue=-1;{if(typeof ewLanguage==='number'&&
Number.isInteger(ewLanguage)&&ewLanguage>=languageMin&&ewLanguage<languageMax){languageValue=
ewLanguage;}}if(languageValue>=0)this.AmH(languageValue);A.ow([this,K.ARx],this);
},Yy:function(E){this.UpdateActiveScreen(E);},AuV:function(E){this.UpdateBatteryChargeState(
E);},ACZ:function(E){this.UpdateChargeActive(E);},AqD:function(E){this.UpdateScanState(
E);},Avh:function(E){this.UpdateMeasureState(E);},Avr:function(E){this.UpdateTempValue(
E);},AmH:function(E){this.UpdateLanguage(E);},Avs:function(E){this.UpdateTemperatureUnit(
E);},ACX:function(E){this.UpdateBrightness(E);},ADt:function(E){this.UpdateMonitoring(
E);},Av0:function(){var B;if(A._GetAutoObject(C.Abw).AvX){this.UpdateMeasureState(
1);A._GetAutoObject(A.Device.Helper).AI8(this);}},Ag0:function(){var B;A._GetAutoObject(
A.Device.Helper).Sh.Av2(this);this.UpdateMeasureState(0);},Aes:function(){var K=
this.K;A.aa8("%s",PJ);this.UpdateScanState(1);A.ow([this,K.Azj],this);},Am2:function(
){var K=this.K;var B;A.aa8("%s",N1);K.Ah9.Av2(this);this.UpdateScanState(0);},SetSystemTime:
function(Aho){},AvW:function(){A.Device.DeviceClass.A9o.call(this);this.Yy(1);},
AEn:function(){A.Device.DeviceClass.A9m.call(this);this.Yy(2);},Co:function(E){this.
UpdateOverlayMenu(E);},Avx:function(E){this.UpdateUnderTemp(E);},Abm:function(E){
this.UpdateSyncState(E);},AA_:function(){var aString;aString=((((((((((CJ+A.aaC(
0,9).toFixed())+Fn)+A.aaC(0,9).toFixed())+Nb)+OL)+A.aaC(30,90).toFixed())+A.z2(A.
abg.AEU))+Nb)+KH)+A.aaC(1,100).toFixed())+OM;return aString;},PopupStateChanged:
function(Kn,Ae){var Afy=A._NewObject(C.PopupContext,0);Afy.Id=Kn;Afy.GN=Ae;this.
AmS.Trigger(Afy,false);},ADW:function(E){this.UpdateVibrationOnKeypressEnabled(E
);},Ad8:function(E){this.UpdateVibrationOn(E);},Avo:function(E){this.UpdateRatingMode(
E);},Ad0:function(E){this.UpdateFlashLightOn(E);},YI:function(E){this.UpdateTopLightOn(
E);},Abk:function(E){this.UpdateRGBTopLight(E);},AuU:function(E){this.UpdateAutoRegistrationMode(
E);},AqE:function(E){this.UpdateScanTransponder(E.Id,E.TransponderType,E.TransponderProtocol
);},Pz:function(E){this.UpdateDigitsID(E);},Qx:function(E){this.UpdateOffsetID(E
);},AD0:function(E){this.UpdateWeightValue(E);},Avf:function(E){this.UpdateMassUnit(
E);},Aqf:function(E){A.Device.DeviceClass.A9i.call(this,E);this.UpdateActiveActions(
E);},Aqg:function(E){A.Device.DeviceClass.A9j.call(this,E);this.UpdateActiveActionsOrder(
E);},Abb:function(E){A.Device.DeviceClass.A9k.call(this,E);this.UpdateAutoActions(
E);},AEO:function(){var K=this.K;this.UpdateMeasureState(1);K.BxL.call(this,this
);},Arg:function(){var K=this.K;var B;K.ZW.Av2(this);this.UpdateMeasureState(0);
},DV:function(E){this.UpdateAnimalType(E);},Avy:function(E){this.UpdateWeightRecordingMode(
E);},ADB:function(E){this.UpdatePredictedTempValue(E);},Se:function(L0){A.aa8("%s%i"
,Nc,L0);},AC5:function(E){this.UpdateDemoMode(E);},ACO:function(E){this.UpdateAgeRegistration(
E);},Avz:function(E){this.UpdateWeightRecordingScope(E);},JM:function(E){this.UpdateGender(
E);},Aqv:function(E){this.UpdateIDLastUsedMale(E);},Aqu:function(E){this.UpdateIDLastUsedFemale(
E);},Aba:function(E){this.UpdateAnimalListContent(E);},ACQ:function(E){this.UpdateAlarmListAction(
E);},AC8:function(E){this.UpdateFlashLightInMeasureState(E);},AdY:function(E){this.
UpdateAnimalInfoContent(E);},ADZ:function(E){this.UpdateWatchListAction(E);},AC9:
function(E){this.UpdateFreshCowListAction(E);},AqZ:function(H){this.Aqf(15359);this.
Aqg(ON);},Aq1:function(H){this.Abb(Ss);},AuS:function(E){this.UpdateAnimalTypesString(
E);},AqF:function(E){this.UpdateTemperaturesHighString(E);},AqG:function(E){this.
UpdateTemperaturesLowString(E);},Aq3:function(H){this.AuS(T9);this.AqG(Zc);this.
AqF(Wa);this.Avx(3600);},ADw:function(E){this.UpdateNoTransponderListAction(E);}
,Ava:function(E){this.UpdateFreshCowsHideMeasured(E);},Aqz:function(E){this.UpdateNaisIdLastUsedMale(
E);},Aqy:function(E){this.UpdateNaisIdLastUsedFemale(E);},Avk:function(E){this.UpdateNaisIdIncrementMale(
E);},Avj:function(E){this.UpdateNaisIdIncrementFemale(E);},UpdateFirmware:function(
){A.Device.DeviceClass.A9p.call(this);A._GetAutoObject(A.kh.A0).BY(61);},AmD:function(
E){this.UpdateBootloaderMessage(E);},ACM:function(E){this.UpdateActionListAction(
E);},AuQ:function(E){this.UpdateActionListHideMeasured(E);},TA:function(E){this.
UpdateAnimalIdGenerationMethod(E);},Au4:function(E){this.UpdateDirectionOfCountingFemale(
E);},Au5:function(E){this.UpdateDirectionOfCountingMale(E);},Au6:function(E){this.
UpdateDirectionOfCountingUnisex(E);},Aqw:function(E){this.UpdateIDLastUsedUnisex(
E);},AqA:function(E){this.UpdateNaisIdLastUsedUnisex(E);},Avl:function(E){this.UpdateNaisIdIncrementUnisex(
E);},AjA:function(E){this.UpdateEartagNrAssignmentMode(E);},NP:function(E){this.
UpdateBreed(E);},ADq:function(E){throw new Error(I$);},ADk:function(E){throw new
Error(I$);},ADT:function(E){throw new Error(I$);},ACT:function(E){throw new Error(
I$);},AC6:function(E){this.UpdateDryCowListAction(E);},AHL:function(AX7){var HR;
switch(AX7){case 15:HR=false;break;default:HR=true;}return HR;},ADv:function(E){
this.UpdateNoNaisIdListAction(E);},ACS:function(E){this.UpdateBirthListView(E);}
,ADU:function(E){this.UpdateTransferProgress(E);},AqH:function(E){this.UpdateTransferTarget(
E);},Arf:function(){var B;A.ow([B=A._GetAutoObject(C.Ard),B.BcA],this);},Avn:function(
E){this.UpdatePremisesID(E);},Avi:function(E){this.UpdateMotherSelectionDriedOffFilter(
E);},AC_:function(E){this.UpdateFreshCowSpan(E);},ADV:function(E){this.UpdateUSBState(
E);},Am0:function(Ahi){var K=this.K;var result=A._NewObject(C.AiM,0);result.AAz=
Ahi;result.FileName=K.Bfa.call(this,Ahi);switch(Ahi){case 0:K.BuI.call(this,result
);break;case 1:K.BuE.call(this,result);break;case 2:K.BuJ.call(this,result);break;
case 3:K.BuH.call(this,result);break;default:throw new Error(T_+Ahi.toFixed());}
K.AHU=result;return result;},ApW:function(){return true;},Apm:function(Ng){var K=
this.K;switch(Ng.AAz){case 0:A._GetAutoObject(A.Device.Device).A5(72,true,A.jm,0
,[this,K.A0r]);break;case 1:A._GetAutoObject(A.Device.Device).A5(90,true,A.jm,0,[
this,K.A0r]);break;case 2:case 3:A._GetAutoObject(A.Device.Device).A5(100,true,A.
jm,0,[this,K.A0r]);break;default:throw new Error(Zd+Ng.AAz.toFixed());}},ADH:function(
E){throw new Error(I$);},AuR:function(E){this.UpdateAnimalIdAutoGenerationMethod(
E);},ADJ:function(E){this.UpdateShutdownTimer(E);},Aqm:function(E){this.UpdateAnimalListInfoItemMode(
E);},Aq4:function(H){this.AuT(Wb);this.AqL(Ze);this.AqK(T$);this.AqJ(T$);this.AqM(
Zf);},AqK:function(E){this.UpdateWeightGainsHighString(E);},AqL:function(E){this.
UpdateWeightGainsLowString(E);},AuT:function(E){this.UpdateAnimalTypesWeightGainsString(
E);},AqJ:function(E){this.UpdateWeightGainsAverageString(E);},AqM:function(E){this.
UpdateWeightValueBirthString(E);},Au7:function(E){this.UpdateEvaluationAnimalType(
E);},Avq:function(E){this.UpdateStartScreen(E);},ABY:function(){return 1;},ABZ:function(
){return 1;},ADp:function(E){this.UpdateMaximumAgeNewOnFarm(E);},Avw:function(E){
this.UpdateTransponderAssignmentIdChangeMethod(E);},AC4:function(E){this.UpdateDataExportDestination(
E);},M7:function(E){this.UpdateWhereAbouts(E);},Aqi:function(E){this.UpdateActiveMassRecordingFields(
E);},Aqj:function(E){this.UpdateActiveMassRecordingFieldsOrder(E);},Aq0:function(
H){this.Aqi(A.jm);this.Aqj(Zg);},ADn:function(E){this.UpdateMassRecordingDateOfBirthMandatory(
E);},Bxy:function(H){switch(this.Ku){case 34:case 35:case 32:case 50:case 55:case
63:case 91:{this.UpdateScanTransponder(12310020,1,0);this.UpdateScanState(2);}break;
case 15:break;default:this.UpdateScanState(4);}},Azj:function(H){var K=this.K;var
B;if((this.ScanState===1)&&K.AsT.AEG)K.Ah9.AEN(this);A.aa8("%s",Ua);},BxL:function(
H){var K=this.K;var B;if((this.MeasureState===1)&&K.AsT.AvX)K.ZW.AEN(this);},Bym:
function(H){this.UpdateMeasureState(3);},ARx:function(H){var K=this.K;var B;A.za([
B=A._GetAutoObject(A.Device.Helper),B.AI8],[B=K.AsT,B.A51,B.AQ8],0);this.Rt.AC3(
A._GetAutoObject(A.Device.Helper).A32(8));this.R3.AC3(A._GetAutoObject(A.Device.
Helper).A32(8));},A70:function(H){var AxX=A._NewObject(A.Device.AvZ,0);AxX.OnSetTimestamp(
1692954318);AxX.ADl(1);AxX.ADs(0);AxX.ADE(0);this.R3=AxX;var Axu=A._NewObject(A.
Device.AvZ,0);Axu.OnSetTimestamp(1692954318);Axu.ADl(1);Axu.ADs(0);Axu.ADE(4);this.
Rt=Axu;var Ak1=A._NewObject(A.Device.At2,0);Ak1.ADi(1);Ak1.ADj(0);Ak1.ADh(0);Ak1.
ADR(1);Ak1.ADS(0);Ak1.ADQ(0);Ak1.OnSetTimestamp(1692954318);this.Qs=Ak1;var Alr=
A._NewObject(A.Device.At2,0);Alr.ADi(1);Alr.ADj(0);Alr.ADh(0);Alr.ADR(1);Alr.ADS(
0);Alr.ADQ(0);Alr.OnSetTimestamp(1692954318);this.Sj=Alr;this.AgX=A.z2(A.abg.Unknown
);},Bu4:function(aFilename,aMimeType,aContent){{var bb=new Blob([aContent],{type:
aMimeType});var a=document.createElement('a');a.download=aFilename;a.href=window.
URL.createObjectURL(bb);a.click();}},BuI:function(Ng){var K=this.K;var B;var SE=
Wc;var B3=A._NewObject(A.Device.Animal,0);var P;var AcH=0;for(P=0;P<A._GetAutoObject(
A.Device.Device).Ao.Cj();P++){B3.EK(P,A._GetAutoObject(A.Device.Device).Ao);if(B3.
IsRegistrationNoticePending&&(B3.NaisId>0)){SE=SE+(((((((((((((((((K.AhJ.call(this
,A._GetAutoObject(A.Device.Device).YK)+String.fromCharCode(0x3B))+K.AhJ.call(this
,B3.NaisId))+String.fromCharCode(0x3B))+K.AIe.call(this,B3.DateOfBirth))+String.
fromCharCode(0x3B))+K.A$D.call(this,B3.Breed))+String.fromCharCode(0x3B))+K.A$C.
call(this,B3.Gender))+String.fromCharCode(0x3B))+K.Bu9.call(this,B3.EaseOfDelivery
))+String.fromCharCode(0x3B))+K.A$E.call(this,B3.WhereAbouts))+String.fromCharCode(
0x3B))+K.Bva.call(this,B3.BirthType))+String.fromCharCode(0x3B))+K.AhJ.call(this
,B3.NaisIdMother))+Nb);AcH++;}}Ng.AtE=SE;Ng.AEr=AcH;Ng.Am3=true;},AhJ:function(QY
){if(!QY)return A.jm;return QY.toFixed();},AIe:function(AX6){var Aq=A._NewObject(
A.Core.Bu,0);Aq.Initialize(AX6);return Aq.Format(QT);},A$D:function(Ab2){if(!Ab2
)return A.jm;return A._GetAutoObject(A.Device.Converter).A2F(Ab2).toFixed();},A$C:
function(LY){var result=A.jm;switch(LY){case 0:result=Zh;break;case 1:result=OO;
break;case 2:result=A.jm;break;default:A.aa8("%s",PK+LY.toFixed());}return result;
},Bu9:function(AG9){if(!AG9)return A.jm;return AG9.toFixed();},A$E:function(Ae2){
if(!Ae2)return A.jm;return Ae2.toFixed();},Bva:function(ArX){return(ArX+1).toFixed(
);},A0r:function(H){var K=this.K;var Ar=(A.Device.PopupContext.isPrototypeOf(H)?
H:null);if(!!Ar&&(Ar.PopupState===7))K.Bu4.call(this,K.AHU.FileName,Ub,K.AHU.AtE
);},BuE:function(Ng){var K=this.K;var B;var SE=Zi;var B3=A._NewObject(A.Device.Animal
,0);var P;var AcH=0;for(P=0;P<A._GetAutoObject(A.Device.Device).Ao.Cj();P++){var
Axq=A.jm;if(B3.ApV())Axq=K.Bvc.call(this,B3.FirstBodyWeight);B3.EK(P,A._GetAutoObject(
A.Device.Device).Ao);SE=SE+(((((((((((K.AhJ.call(this,B3.NaisId)+String.fromCharCode(
0x3B))+K.Bu_.call(this,B3.VisualId))+String.fromCharCode(0x3B))+K.AhJ.call(this,
B3.TransponderId))+String.fromCharCode(0x3B))+K.Bu8.call(this,B3.DateOfBirth))+String.
fromCharCode(0x3B))+K.Bvb.call(this,B3.Gender))+String.fromCharCode(0x3B))+Axq)+
Nb);AcH++;}Ng.AtE=SE;Ng.AEr=AcH;Ng.Am3=true;},Bfa:function(Ahi){var AxW=A.jm;var
Ad=A._NewObject(A.Core.Bu,0);Ad.Initialize(A._GetAutoObject(A.Device.Helper).DB(
));switch(Ahi){case 0:AxW=Ad.Format(Wd);break;case 1:AxW=Ad.Format(Zj);break;case
2:AxW=Ad.Format(Zk);break;case 3:AxW=Ad.Format(We);break;default:throw new Error(
T_+Ahi.toFixed());}return AxW;},Bu_:function(QY){return QY.toFixed();},Bvb:function(
LY){var result=A.jm;switch(LY){case 0:result=Wf;break;case 1:result=St;break;case
2:result=Zl;break;default:A.aa8("%s",PK+LY.toFixed());}return result;},Bvc:function(
N5){if(N5<=0)return A.jm;return A._GetAutoObject(A.Device.Converter).And(N5);},Bu8:
function(AX6){var Aq=A._NewObject(A.Core.Bu,0);Aq.Initialize(AX6);return Aq.Format(
Zm);},BuJ:function(Ng){var K=this.K;var B;var SE=AbO;var B3=A._NewObject(A.Device.
Animal,0);var P;var AcH=0;for(P=0;P<A._GetAutoObject(A.Device.Device).Ao.Cj();P++
){B3.EK(P,A._GetAutoObject(A.Device.Device).Ao);if(B3.IsRegistrationNoticePending&&(
B3.NaisId>0)){SE=SE+(((((K.AhJ.call(this,A._GetAutoObject(A.Device.Device).YK)+String.
fromCharCode(0x3B))+K.AhJ.call(this,B3.NaisId))+String.fromCharCode(0x3B))+K.AIe.
call(this,A._GetAutoObject(A.Device.Helper).DB()))+Nb);AcH++;}}Ng.AtE=SE;Ng.AEr=
AcH;Ng.Am3=true;},BuH:function(Ng){var K=this.K;var B;var SE=Su;var B3=A._NewObject(
A.Device.Animal,0);var P;var AcH=0;for(P=0;P<A._GetAutoObject(A.Device.Device).Ao.
Cj();P++){B3.EK(P,A._GetAutoObject(A.Device.Device).Ao);if(B3.IsRegistrationNoticePending&&(
B3.NaisId>0)){SE=SE+(((((((((((((K.AhJ.call(this,B3.NaisId)+String.fromCharCode(
0x3B))+K.AIe.call(this,B3.DateOfBirth))+String.fromCharCode(0x3B))+K.A$C.call(this
,B3.Gender))+String.fromCharCode(0x3B))+K.A$E.call(this,B3.WhereAbouts))+String.
fromCharCode(0x3B))+K.A$D.call(this,B3.Breed))+String.fromCharCode(0x3B))+K.AIe.
call(this,A._GetAutoObject(A.Device.Helper).DB()))+String.fromCharCode(0x3B))+K.
AhJ.call(this,B3.TransponderId))+Nb);AcH++;}}Ng.AtE=SE;Ng.AEr=AcH;Ng.Am3=true;},
_Init:function(aArg){var K=this.K;A.abm.F_._Init.call(K.Ah9={I:this},0);A.abm.F_.
_Init.call(K.ZW={I:this},0);K.__proto__=C.DeviceClass;this.AuV(100);this.AmH(1);
this.Aqv(200);this.Aqu(100);this.Aqz(276000912345678);this.Aqy(276000923456789);
this.Aqw(500);this.AqA(276000901234567);this.NP(1);K.Ah9.IF(1);K.Ah9.Fz(1000);K.
ZW.VN(0);K.ZW.IF(1);K.ZW.Fz(750);K.ZW.B0=50000;K.Ah9.R5=[this,K.Bxy];K.AsT=A._GetAutoObject(
C.Abw);K.ZW.R5=[this,K.Bym];K.ZW.Q=[this,this.ACK,this.AGV];K.Init.call(this,aArg
);A.hJ++;},_Done:function(){var K=this.K;K.__proto__=null;K.Ah9._Done();K.ZW._Done(
);A.hJ--;},_ReInit:function(){var K=this.K;K.Ah9._ReInit();K.ZW._ReInit();K.C3.call(
this);},_Mark:function(D){var B;if((B=this.AsT)&&(B._cycle!=D))B._Mark(B._cycle=
D);if((B=this.AHU)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Ah9)._cycle!=D)
B._Mark(B._cycle=D);if((B=this.ZW)._cycle!=D)B._Mark(B._cycle=D);},_variants:function(
){return A.abq.DeviceClass._variants();},_className:"DeviceSimulation::DeviceClass"
};C.AE7={A4:0,_Init:function(aArg){C.VH._Init.call(this,aArg);this.__proto__=C.AE7;
},_className:"DeviceSimulation::UInt8"};C.AE5={A4:0,_Init:function(aArg){C.VH._Init.
call(this,aArg);this.__proto__=C.AE5;},_className:"DeviceSimulation::UInt32"};C.
HelperClass={A1o:0,ADK:function(E){var K=this.K;K.A1o=K.A1o+(E-this.DB());A.Device.
HelperClass.A9l.call(this,E);},DB:function(){var K=this.K;return A.Device.HelperClass.
A9h.call(this)+K.A1o;},_Init:function(aArg){var K=this.K;K.__proto__=C.HelperClass;
A.hJ++;},_Done:function(){var K=this.K;K.__proto__=null;A.hJ--;},_ReInit:function(
){},_Mark:function(D){},_variants:function(){return this;},_className:"DeviceSimulation::HelperClass"
};C.A77={AvX:false,AEG:false,AQ7:function(E){if(this.AEG===E)return;this.AEG=E;A.
aat([this,this.A50,this.AQ7],0);},A50:function(){return this.AEG;},AQ8:function(
E){if(this.AvX===E)return;this.AvX=E;A.aat([this,this.A51,this.AQ8],0);},A51:function(
){return this.AvX;},BhK:function(){return true;},_Init:function(aArg){this.__proto__=
C.A77;A.hJ++;},_Done:function(){this.__proto__=null;A.hJ--;},_ReInit:function(){
},_Mark:function(D){var B;if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null
,_cycle:0,_observers:null,_className:"DeviceSimulation::SimulationConfigClass"};
C.Abw={_Init:function(){C.A77._Init.call(this,0);},_variants:function(){return A.
abq.Abw._variants();},_this:null};C.PopupContext={GN:1,Id:0,_Init:function(aArg){
this.__proto__=C.PopupContext;A.hJ++;},_Done:function(){this.__proto__=null;A.hJ--;
},_ReInit:function(){},_Mark:function(D){var B;if((B=this.I)&&(B._cycle!=D))B._Mark(
B._cycle=D);},I:null,_cycle:0,_observers:null,_className:"DeviceSimulation::PopupContext"
};C.Rating={Cr:function(AF){var Hs=A.Device.Rating.A9n.call(this,AF);if(Hs){var Q3=
A._GetAutoObject(A.Device.Device).Ao;var Ab=A._GetAutoObject(A.Device.Device).Ao.
K4(0,this.AnimalId);if(Ab!==-1){var Jg=Q3.Op();if(Jg<=0)A.aa8("%s",AbP);else{var
B3=A._NewObject(A.Device.Animal,0);B3.EK(Ab,Q3);if((this.Temperature>0)&&(B3.TimestampLastTemperature<
this.Timestamp)){Q3.A7Z(Ab,5,this.Temperature);Q3.AjZ(Ab,17,this.RatingTemperature
);Q3.Abu(Ab,30,this.Timestamp);}if(this.BodyWeight>0){if(B3.TimestampLastWeighing<=
this.Timestamp){Q3.AR7(Ab,18,this.BodyWeight);Q3.Abu(Ab,19,this.Timestamp);}if(!
B3.TimestampFirstWeighing||(B3.TimestampFirstWeighing>=this.Timestamp)){Q3.AR7(Ab
,23,this.BodyWeight);Q3.Abu(Ab,24,this.Timestamp);Q3.G_(Ab,25,this.Id);}}if(A._GetAutoObject(
A.Device.Helper).AEg(this)){var Ly=A._GetAutoObject(A.Device.Helper).ABd(this);Q3.
AjZ(Ab,13,Ly);Q3.Abu(Ab,31,this.Timestamp);}Q3.Or(Jg);}}}return Hs;},_Init:function(
aArg){var K=this.K;K.__proto__=C.Rating;A.hJ++;},_Done:function(){var K=this.K;K.
__proto__=null;A.hJ--;},_ReInit:function(){},_Mark:function(D){},_variants:function(
){return this;},_className:"DeviceSimulation::Rating"};C.PE={Gn:A.aan(512,null,null
),O2:0,AHB:0,AJe:0,A1r:A.aan(10,0,{0:3600,1:3750,2:3900,3:4200,4:3780,5:3600,6:3900
,7:4010,8:4020,9:4030}),AIR:0,A01:A.aan(10,0,{0:5,1:4,2:3,3:1,4:2,5:1,6:1,7:1,8:
1,9:1}),Bau:512,Ayj:-1,AYG:A.aan(15,0,{0:2,1:2,2:2,3:2,4:2,5:3,6:3,7:3,8:3,9:3,10:
1,11:1,12:1,13:1,14:1}),AIq:false,CE:function(Ab,AX){var A9=this.Tc(Ab);if(!!A9)
return A9.CE(AX);return 0;},Va:function(Ab,AX){var A9=this.Tc(Ab);if(!!A9)return A9.
Va(AX);return A.jm;},HV:function(Ab,AX){var A9=this.Tc(Ab);if(!!A9)return A9.HV(
AX);return false;},Vb:function(Ab,AX){var A9=this.Tc(Ab);if(!!A9)return A9.Vb(AX
);return 0;},RQ:function(Ab,AX){var A9=this.Tc(Ab);if(!!A9)return A9.RQ(AX);return 0;
},Op:function(){if(this.AIq)throw new Error(AeN);this.AIq=true;return 12345;},Or:
function(AnJ){if(!this.AIq)throw new Error(Zn);if(AnJ!==12345)throw new Error(Wg
);this.AIq=false;return true;},XS:function(){return this.A12(A._NewObject(C.AEq,
0));},YV:function(Ab,AX,CX){var A9=this.Tc(Ab);if(!!A9)return A9.YV(AX,CX);return false;
},G_:function(Ab,AX,CX){var A9=this.Tc(Ab);if(!!A9)return A9.G_(AX,CX);return false;
},YU:function(Ab,AX,CX){var A9=this.Tc(Ab);if(!!A9)return A9.YU(AX,CX);return false;
},M_:function(Ab,AX,CX){var A9=this.Tc(Ab);if(!!A9)return A9.M_(AX,CX);return false;
},YT:function(Ab,AX,CX){var A9=this.Tc(Ab);if(!!A9)return A9.YT(AX,CX);return false;
},OnSetId:function(E){if(this.Id===E)return;this.Id=E;this.A$e();switch(this.Id){
case 0:{this.Bau=128;A.ow([this,this.BsC],this);}break;case 1:A.ow([this,this.BsE
],this);break;case 3:A.ow([this,this.BsB],this);break;case 4:A.ow([this,this.BsD
],this);break;case 2:break;default:throw new Error(Wh+this.Id.toFixed());}},Cj:function(
){return this.O2;},LD:function(Ab,AX){var A9=this.Tc(Ab);if(!!A9)return A9.LD(AX
);return 0;},TO:function(Ab,AX,CX){var A9=this.Tc(Ab);if(!!A9)return A9.TO(AX,CX
);return false;},G9:function(){this.A$e();return true;},Hz:function(){return this.
Bau;},A12:function(Ab){if(this.O2>=512)throw new Error(AeO);this.Gn.Set(this.O2,
Ab);this.O2=this.O2+1;switch(this.Id){case 0:{this.Ayj=this.O2;this.G_(this.O2-1
,0,this.Ayj);}break;case 1:{this.Ayj=this.O2-1;this.G_(this.O2-1,0,this.Ayj);}break;
default:;}A.ow([this,this.Aju],this);return this.O2-1;},Tc:function(aIndex){if((
aIndex<0)||(aIndex>=512))return null;return this.Gn.Get(aIndex);},A$e:function(){
var P;for(P=0;P<512;P=P+1)this.Gn.Set(P,null);this.O2=0;this.AHB=0;this.AIR=0;this.
AJe=0;A.ow([this,this.Aju],this);},AIl:function(){this.AHB=(this.AHB+1)%15;return this.
AYG.Get(this.AHB);},AZu:function(){this.AJe=(this.AJe+1)%10;return this.A1r.Get(
this.AJe);},AH9:function(H){if(this.K&&this.K.AH9)return this.K.AH9.apply(this,arguments
);else return C.PE.BsK.apply(this,arguments);},BsK:function(H){var B;var Oa=true;
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
0);var P;var BcG=0;for(P=1;P<=7;P=P+1){BcG=3680+(20*P);Oa=BcG>3800;this.Bi(276000312310050+(((
B=P)<0)?B+0x10000000000000000:B),30+(P%3),3,A._GetAutoObject(A.Device.Helper).Ag2(
7-P),0,1,Oa,false,false,true,36000+(P*900),0,0,false,0,true,0,0,0,0);}},BsC:function(
s){this.AH9(s);},AH$:function(H){if(this.K&&this.K.AH$)return this.K.AH$.apply(this
,arguments);else return C.PE.BsM.apply(this,arguments);},BsM:function(H){var Ad=
A._GetAutoObject(A.Device.Helper).DB();var P;Ad=Ad-2678400;var AhI;var A$v;for(P=
0;P<32;P=P+1){var AZf=this.Bvo();for(;AZf>0;AZf=AZf-1){AhI=this.AZu();A$v=A._GetAutoObject(
A.Device.Converter).Arj(0,AhI);this.AE(Ad,12310020,AhI,A$v,this.AIl(),this.AIl()
,this.AIl(),this.AIl(),0);}Ad=Ad+86400;}Ad=Ad-86400;this.AE(Ad,12310020,0,0,0,0,
0,0,43700);this.AE(Ad-86400,276000312310001,0,0,0,0,0,0,49800);this.AE(Ad,276000312310001
,0,0,0,0,0,0,51000);AhI=this.AZu();this.AE(Ad,276000312310001,AhI,A._GetAutoObject(
A.Device.Converter).Arj(0,AhI),1,3,3,3,0);AhI=this.AZu();this.AE(Ad-86400,276000312310022
,3800,A._GetAutoObject(A.Device.Converter).Arj(1,3800),2,3,3,3,0);this.AE(Ad,276000312310022
,AhI,A._GetAutoObject(A.Device.Converter).Arj(1,AhI),2,3,3,3,0);},BsE:function(s
){this.AH$(s);},Bi:function(Kn,Bs8,Btn,A_k,ArX,LY,Btd,Btj,Btg,Bth,N5,BsU,Btl,Btf
,Ee,Bti,Ab2,AG9,Ae2,Bts){var B3=A._NewObject(A.Device.Animal,0);B3.Gd();B3.AvA(0
);B3.Ad6(0);B3.TD(false);B3.AjG(false);B3.M6(Kn);B3.M5(Kn);B3.TF(A._GetAutoObject(
A.Device.Helper).Aka(B3.TransponderId));B3.Abg(Bs8);B3.AmI(Btn);B3.R8(A_k);B3.Ajy(
ArX);B3.JM(LY);B3.AmZ(Btd);B3.AEz(Btj);B3.AgG(Bth);B3.TD(Btg);B3.Aqx(Btf);B3.Avd(
Btl);B3.Au1(BsU);B3.DV(Ee);B3.Ad3(Bti);B3.NP(Ab2);B3.AjB(AG9);B3.M7(Ae2);B3.AmK(
Bts);B3.Cr(this);if(N5>0)A._GetAutoObject(C.AvL).AE(A_k,Kn,0,0,0,0,0,0,N5);},AE:
function(LX,Ab0,AnH,BtE,Bs2,Bs3,BsN,BtG,BsO){var BW=A._NewObject(A.Device.Rating
,0);BW.Gd();var A_Y=A._GetAutoObject(C.Ao_).AMn(26,Ab0);if(A_Y>=0)BW.OnSetAnimalId(
A._GetAutoObject(C.Ao_).CE(A_Y,0));else A.aa8("%s%U",AeP,Ab0);BW.OnSetTimestamp(
LX);BW.OnSetTemperature(AnH);BW.OnSetRatingTemperature(BtE);BW.OnSetFaeces(Bs2);
BW.OnSetFeed(Bs3);BW.OnSetAppearance(BsN);BW.OnSetRespiratory(BtG);BW.OnSetBodyWeight(
BsO);BW.Cr(this);},A3H:function(aColumn,A1){var P;for(P=0;P<this.O2;P=P+1)if(this.
Gn.Get(P).CE(aColumn)===A1)return P;return-1;},Bvo:function(){this.AIR=(this.AIR+
1)%10;return this.A01.Get(this.AIR);},AH8:function(H){if(this.K&&this.K.AH8)return this.
K.AH8.apply(this,arguments);else return C.PE.BsJ.apply(this,arguments);},BsJ:function(
H){this.AkV(10,JT);this.AkV(20,AeQ);this.AkV(30,Li);this.AkV(31,Ag$);this.AkV(32
,Anf);},BsB:function(s){this.AH8(s);},AkV:function(Kn,Bs9){var AHv=A._NewObject(
A.Device.AnimalGroup,0);AHv.Gd();AHv.OnSetId(Kn);AHv.ADa(Bs9);AHv.Cr(this);},Aay:
function(){return this.Ayj;},AMn:function(aColumn,A1){var P;for(P=0;P<this.O2;P=
P+1)if(this.Gn.Get(P).LD(aColumn)===A1)return P;return-1;},AH_:function(H){if(this.
K&&this.K.AH_)return this.K.AH_.apply(this,arguments);else return C.PE.BsL.apply(
this,arguments);},BsL:function(H){this.ZH(2016,216,6);this.ZH(2017,217,7);this.ZH(
2018,218,8);this.ZH(2019,219,9);this.ZH(2020,220,10);this.ZH(2021,221,11);},BsD:
function(s){this.AH_(s);},ZH:function(Ab9,BsY,BsX){var Ul=A._NewObject(A.Device.
CalfDeregistrations,0);Ul.Gd();Ul.AjN(Ab9);Ul.Au3(BsY);Ul.Au2(BsX);Ul.Cr(this);}
,_Init:function(aArg){A.Device.ITable._Init.call(this,aArg);(this.Gn=[]).__proto__=
C.PE.Gn;(this.A1r=[]).__proto__=C.PE.A1r;(this.A01=[]).__proto__=C.PE.A01;(this.
AYG=[]).__proto__=C.PE.AYG;this.__proto__=C.PE;var Lj=this._variants();if(Lj){this.
K={};Lj._Init.call(this,aArg);}},_Done:function(){if(this.K)this.K._Done.call(this
);this.__proto__=A.Device.ITable;A.Device.ITable._Done.call(this);},_ReInit:function(
){A.Device.ITable._ReInit.call(this);if(this.K)this.K._ReInit.call(this);},_Mark:
function(D){var B;A.Device.ITable._Mark.call(this,D);A.aaf(this.Gn,D);if(this.K)
this.K._Mark(D);},_variants:function(){return A.abq.PE._variants();},K:null,_className:
"DeviceSimulation::TableData"};C.Ao_={_Init:function(){C.PE._Init.call(this,0);this.
OnSetId(0);},_variants:function(){return this;},_this:null};C.AzO={_Init:function(
){C.PE._Init.call(this,0);this.OnSetId(3);},_variants:function(){return this;},_this:
null};C.AvL={_Init:function(){C.PE._Init.call(this,0);this.OnSetId(1);},_variants:
function(){return this;},_this:null};C.Gu={AkP:A.aan(128,null,null),Gh:null,An9:
0,CE:function(Ab,AX){var A9=this.ZF(Ab);if(!!A9)return A9.CE(AX);return 0;},Va:function(
Ab,AX){var A9=this.ZF(Ab);if(!!A9)return A9.Va(AX);return A.jm;},HV:function(Ab,
AX){var A9=this.ZF(Ab);if(!!A9)return A9.HV(AX);return false;},OnSetId:function(
E){if(this.Id===E)return;this.Id=E;switch(this.Id){case 0:this.AD3(A._GetAutoObject(
C.Ao_));break;case 1:this.AD3(A._GetAutoObject(C.AvL));break;case 3:this.AD3(A._GetAutoObject(
C.AzO));break;case 4:this.AD3(A._GetAutoObject(C.AAb));break;case 2:break;default:
throw new Error(Wh+this.Id.toFixed());}},Cj:function(){if(!!this.Filter)return this.
An9;else if(!!this.Gh)return this.Gh.O2;return 0;},Bk:function(E){A.Device.ITable.
Bk.call(this,E);this.AYE(this);},Vb:function(Ab,AX){var A9=this.ZF(Ab);if(!!A9)return A9.
Vb(AX);return 0;},RQ:function(Ab,AX){var A9=this.ZF(Ab);if(!!A9)return A9.RQ(AX);
return 0;},Op:function(){if(!!this.Gh)return this.Gh.Op();return-1;},Or:function(
AnJ){var Hs=false;if(!!this.Gh)Hs=this.Gh.Or(AnJ);if(Hs)A.ow([this,this.AYE],this
);return Hs;},XS:function(){if(!!this.Filter)throw new Error(N2+A._GetAutoObject(
A.Device.Converter).BeQ(this.Id,this.Filter));if(!!this.Gh)return this.Gh.A12(A.
_NewObject(C.AEq,0));return-1;},YV:function(Ab,AX,CX){var A9=this.ZF(Ab);if(!!A9
)return A9.YV(AX,CX);return false;},G_:function(Ab,AX,CX){var A9=this.ZF(Ab);if(
!!A9)return A9.G_(AX,CX);return false;},YU:function(Ab,AX,CX){var A9=this.ZF(Ab);
if(!!A9)return A9.YU(AX,CX);return false;},M_:function(Ab,AX,CX){var A9=this.ZF(
Ab);if(!!A9)return A9.M_(AX,CX);return false;},YT:function(Ab,AX,CX){var A9=this.
ZF(Ab);if(!!A9)return A9.YT(AX,CX);return false;},K4:function(aColumn,A1){if(!!this.
Filter){var P;for(P=0;P<this.An9;P=P+1)if(this.AkP.Get(P).CE(aColumn)===A1)return P;
return-1;}else if(!!this.Gh)return this.Gh.A3H(aColumn,A1);return-1;},LD:function(
Ab,AX){var A9=this.ZF(Ab);if(!!A9)return A9.LD(AX);return 0;},TO:function(Ab,AX,
CX){var A9=this.ZF(Ab);if(!!A9)return A9.TO(AX,CX);return false;},AiY:function(aColumn
,A1){if(!!this.Filter){var P;for(P=0;P<this.An9;P=P+1)if(this.AkP.Get(P).LD(aColumn
)===A1)return P;return-1;}else if(!!this.Gh)return this.Gh.AMn(aColumn,A1);return-
1;},G9:function(){if(!!this.Gh)return this.Gh.G9();return false;},AiV:function(aColumn
,A1){if(!!this.Gh)return this.Gh.A3H(aColumn,A1)>=0;return false;},Af5:function(
aColumn,A1){if(!!this.Gh)return this.Gh.AMn(aColumn,A1)>=0;return false;},Hz:function(
){if(!!this.Gh)return this.Gh.Hz();return 0;},Aay:function(){if(!!this.Gh)return this.
Gh.Aay();return-1;},Qb:function(){if(!!this.Gh)return this.Gh.O2;return 0;},AYE:
function(H){this.AYT();if(!!this.Filter&&!!this.Gh){var P;for(P=0;P<this.Gh.Cj();
P=P+1){var AZj=true;var Av=this.Filter.AMB();var A9=this.Gh.Tc(P);if(!!A9)while(
AZj&&!!Av){AZj=A9.BfQ(Av);Av=this.Filter.AMF(Av);}else A.aa8("%s",((Wi+P.toFixed(
))+Ang)+this.Gh.Cj().toFixed());if(AZj){this.AkP.Set(this.An9,this.Gh.Gn.Get(P));
this.An9=this.An9+1;}}}A.ow([this,this.Aju],this);},AYT:function(){var P;for(P=0;
P<128;P=P+1)this.AkP.Set(P,null);this.An9=0;},AD3:function(E){if(this.Gh===E)return;
if(!!this.Gh)A.zl([this,this.A1p],this.Gh,0);this.Gh=E;if(!!this.Gh){A.y_([this,
this.A1p],this.Gh,0);A.ow([this,this.A1p],this);}},A1p:function(H){A.ow([this,this.
AYE],this);},ZF:function(aIndex){if(!!this.Filter){if((aIndex<0)||(aIndex>=128))
return null;else return this.AkP.Get(aIndex);}else if(!!this.Gh)return this.Gh.Tc(
aIndex);A.aa8("%s",Aha+aIndex.toFixed());return null;},_Init:function(aArg){A.Device.
ITable._Init.call(this,aArg);(this.AkP=[]).__proto__=C.Gu.AkP;this.__proto__=C.Gu;
},_Mark:function(D){var B;A.Device.ITable._Mark.call(this,D);A.aaf(this.AkP,D);if((
B=this.Gh)&&(B._cycle!=D))B._Mark(B._cycle=D);},_className:"DeviceSimulation::FilteredTable"
};C.A78={Kr:null,AcJ:null,A1j:function(H){if(A._GetAutoObject(C.Abw).BhK()===false
)return;switch(A._GetAutoObject(A.Device.Device).SyncState){case 0:{A._GetAutoObject(
A.Device.Device).Abm(1);this.AcJ.Ap(true);}break;case 1:{A._GetAutoObject(A.Device.
Device).Abm(2);A._GetAutoObject(A.Device.Device).AqH(A._GetAutoObject(A.Device.Device
).Ao.Qb());this.Kr.Fz(A._GetAutoObject(A.Device.Device).AeC*50);this.Kr.B0=A._GetAutoObject(
A.Device.Device).AeC;this.Kr.Ap(true);}break;case 2:{A._GetAutoObject(A.Device.Device
).Abm(3);this.AcJ.Ap(true);}break;case 3:{A._GetAutoObject(A.Device.Device).Abm(
4);A._GetAutoObject(A.Device.Device).AqH(A._GetAutoObject(A.Device.Device).Ao.Qb(
));this.Kr.Fz(A._GetAutoObject(A.Device.Device).AeC*50);this.Kr.B0=A._GetAutoObject(
A.Device.Device).AeC;this.Kr.Ap(true);}break;case 4:{A._GetAutoObject(A.Device.Device
).Abm(5);this.AcJ.Ap(true);}break;case 5:A.ow([this,this.BcA],this);break;case 7:
case 6:break;default:A.aa8("%s%e",Ahb,A._GetAutoObject(A.Device.Device).SyncState
);}},BwR:function(H){this.AcJ.Ap(false);A.ow([this,this.A1j],this);},BxS:function(
H){switch(A._GetAutoObject(A.Device.Device).SyncState){case 0:case 6:case 7:{A._GetAutoObject(
A.Device.Device).Abm(0);A.ow([this,this.A1j],this);}break;default:;}},BcA:function(
H){this.AcJ.Ap(false);this.Kr.Ap(false);A._GetAutoObject(A.Device.Device).Abm(0);
},_Init:function(aArg){A.abm.F_._Init.call(this.Kr={I:this},0);A.Core.Timer._Init.
call(this.AcJ={I:this},0);this.__proto__=C.A78;var B;this.Kr.IF(1);this.AcJ.Qz(2000
);this.Kr.R5=[this,this.A1j];this.Kr.Q=[B=A._GetAutoObject(A.Device.Device),B.AQw
,B.AXH];this.AcJ.M8=[this,this.BwR];A.hJ++;},_Done:function(){this.__proto__=null;
this.Kr._Done();this.AcJ._Done();A.hJ--;},_ReInit:function(){this.Kr._ReInit();this.
AcJ._ReInit();},_Mark:function(D){var B;if((B=this.Kr)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.AcJ)._cycle!=D)B._Mark(B._cycle=D);if((B=this.I)&&(B._cycle!=D))B.
_Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:"DeviceSimulation::SimulationHelperClass"
};C.Ard={_Init:function(){C.A78._Init.call(this,0);},_variants:function(){return this;
},_this:null};C.AE6={A4:0,_Init:function(aArg){C.VH._Init.call(this,aArg);this.__proto__=
C.AE6;},_className:"DeviceSimulation::UInt64"};C.AAb={_Init:function(){C.PE._Init.
call(this,0);this.OnSetId(4);},_variants:function(){return this;},_this:null};C.
FactoryResetScope={Dw:function(){return 1;},_Init:function(aArg){var K=this.K;K.
__proto__=C.FactoryResetScope;this.Cy.Set(0,1);A.hJ++;},_Done:function(){var K=this.
K;K.__proto__=null;A.hJ--;},_ReInit:function(){},_Mark:function(D){},_variants:function(
){return this;},_className:"DeviceSimulation::FactoryResetScope"};C.W_={Ac7:null
,CM:function(H){var K=this.K;A.aa8("%s",AbQ);K.Ac7.Ap(true);},E_:function(H){var
K=this.K;if(K.Ac7.Bw===true){K.Ac7.Ap(false);A.aa8("%s",Uc);}},BgW:function(H){var
K=this.K;K.Ac7.Ap(false);A._GetAutoObject(A.kh.A0).AgL(A._GetAutoObject(A.Device.
Device).Av1);},_Init:function(aArg){var K=this.K;A.Core.Timer._Init.call(K.Ac7={
I:this},0);K.__proto__=C.W_;this.AdL.G(Anh);K.Ac7.Qz(1500);this.TP.R(Ani);this.TP.
X(true);this.AdL.At(A.zW(A.abi.APg));K.Ac7.M8=[this,K.BgW];A.hJ++;},_Done:function(
){var K=this.K;K.__proto__=null;K.Ac7._Done();A.hJ--;},_ReInit:function(){var K=
this.K;K.Ac7._ReInit();},_Mark:function(D){var B;if((B=this.Ac7)._cycle!=D)B._Mark(
B._cycle=D);},_variants:function(){return this;},_className:"DeviceSimulation::BootScreen"
};C.AiM={AtE:A.jm,_Init:function(aArg){A.Device.AiM._Init.call(this,aArg);this.__proto__=
C.AiM;},_className:"DeviceSimulation::DataExportContext"};
C._Init=function(){C.ABW.__proto__=C.VH;C.String.__proto__=C.VH;C.Az7.__proto__=C.
VH;C.AE7.__proto__=C.VH;C.AE5.__proto__=C.VH;C.PE.__proto__=A.Device.ITable;C.Gu.
__proto__=A.Device.ITable;C.AE6.__proto__=C.VH;C.AiM.__proto__=A.Device.AiM;};C.
_ReInit=function(){var B;if((B=C.Abw._this))B._ReInit();if((B=C.Ao_._this))B._ReInit(
);if((B=C.AzO._this))B._ReInit();if((B=C.AvL._this))B._ReInit();if((B=C.Ard._this
))B._ReInit();if((B=C.AAb._this))B._ReInit();};C.DE=function(D){var B;if((B=C.Abw.
_this)&&(B._cycle!=D))B._Done(C.Abw._this=null);if((B=C.Ao_._this)&&(B._cycle!=D
))B._Done(C.Ao_._this=null);if((B=C.AzO._this)&&(B._cycle!=D))B._Done(C.AzO._this=
null);if((B=C.AvL._this)&&(B._cycle!=D))B._Done(C.AvL._this=null);if((B=C.Ard._this
)&&(B._cycle!=D))B._Done(C.Ard._this=null);if((B=C.AAb._this)&&(B._cycle!=D))B._Done(
C.AAb._this=null);};return C;})();

/* VitalControl demonstration application, © Urban GmbH & Co.KG 2023 */