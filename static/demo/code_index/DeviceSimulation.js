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
var B$="ERROR: access to null Bool data in column [";var BH="]";var EV="Access to inexistent column index: ";
var GT=", or not enough indexes for store column. You can increase the \'data\' "+
"array size to hold this column.";var Jt="Unsupported filter criterion class";var
IL="Operator not handled:";var OK="1,8";var PJ="INFO: Device.StartScan() called.";
var N1="INFO: Device.StopScan() called.";var CJ="V0.";var Fn=".";var Nd="\n";var
OL="Temp: ";var KH="Battery: ";var OM="%%";var Ne="Selected animal with row index";
var ON="1,256,2,2048,4096,8192,4,8,16,128,64,32,1024,262144,16384,131072,512";var
Ss="1,2";var T$="0,1,2";var Ze="3900,3950,4000";var Wb="4050,4100,4150";var IM="Read only";
var Ua="Unknown data export type: ";var Zf="Unhandled Device::DataExportType: ";
var Wc="0,2";var Zg="650,150";var Ub="800,200";var Zh="40000,4000";var Zi="32,7,34,18,23,14";
var Uc="Simulate Scan";var Wd="BNR15;LOM;GEB_DATR;RASSE;GESCHL_R;GEB_VERL;VERBLEIB;MEHRLADR;LOM_MUT\n";
var QV="%d.%m.%Y";var Zj="1";var OO="2";var PK="Unknown gender: ";var Ud="text/csv";
var Zk="National-ID-Animal;Farm-ID-Animal;Transponder-ID;DateOfBirth;Sex;BirthWeight-Kg\n";
var We="hit-geburt-%d-%m-%Y_%H-%M.csv";var Zl="animals-%d-%m-%Y_%H-%M.csv";var Zm=
"hit-zugang-%d-%m-%Y_%H-%M.csv";var Wf="herde-zugang-%d-%m-%Y_%H-%M.csv";var Wg=
"M";var St="F";var Zn="?";var Zo="%Y-%m-%d";var AbO="BNR15;LOM;ZUGA_DAT\n";var Su=
"Ohrnummer;Geburtsdatum;Geschlecht;Nutzung;Rasse;Zugangsdatum;Transponder\n";var
AbP="ERROR: Cannot start transaction";var AeN="Nested transactions are not allowed.";
var Zp="Transaction not opened.";var Wh="Wrong transaction ID.";var Wi="Unhandled TableId:";
var AeO="Maximum number of rows reached.";var AeP="Animal row not found in DeviceSimulation::AnimalTableData. NaisId";
var JT="10";var AeQ="20";var Li="30";var Ag$="31";var Ang="32";var N2="Severe: filter set when inserting row into table: ";
var Wj="ERROR: Row not found with index [";var Anh="] while Rows Count = ";var Aha=
"ERROR: trying to access an inexistent row with Index=";var Ahb="Invalid Device::SyncState";
var AbQ="Forwarding to home screen after 500 milliseconds ...";var Ue="Forwarding to home screen canceled...";
var Ani=[0,58,240,208];var Anj="VitalControl\nstarting up \u2026";
C.Table={Gv:null,Init:function(aArg){var K=this.K;A.y_([this,this.Ajv],K.Gv,0);},
CE:function(Ab,AX){var K=this.K;return K.Gv.CE(Ab,AX);},Va:function(Ab,AX){var K=
this.K;return K.Gv.Va(Ab,AX);},HW:function(Ab,AX){var K=this.K;return K.Gv.HW(Ab
,AX);},OnSetId:function(E){var K=this.K;if(this.Id===E)return;this.Id=E;K.Gv.OnSetId(
E);},Cj:function(){var K=this.K;return K.Gv.Cj();},Bl:function(E){var K=this.K;A.
Device.ITable.Bl.call(this,E);K.Gv.Bl(E);},Vb:function(Ab,AX){var K=this.K;return K.
Gv.Vb(Ab,AX);},RQ:function(Ab,AX){var K=this.K;return K.Gv.RQ(Ab,AX);},Op:function(
){var K=this.K;return K.Gv.Op();},Or:function(AnJ){var K=this.K;return K.Gv.Or(AnJ
);},XU:function(){var K=this.K;return K.Gv.XU();},YX:function(Ab,AX,CX){var K=this.
K;return K.Gv.YX(Ab,AX,CX);},G$:function(Ab,AX,CX){var K=this.K;return K.Gv.G$(Ab
,AX,CX);},YW:function(Ab,AX,CX){var K=this.K;return K.Gv.YW(Ab,AX,CX);},Na:function(
Ab,AX,CX){var K=this.K;return K.Gv.Na(Ab,AX,CX);},YV:function(Ab,AX,CX){var K=this.
K;return K.Gv.YV(Ab,AX,CX);},K4:function(aColumn,A1){var K=this.K;return K.Gv.K4(
aColumn,A1);},LD:function(Ab,AX){var K=this.K;return K.Gv.LD(Ab,AX);},TQ:function(
Ab,AX,CX){var K=this.K;return K.Gv.TQ(Ab,AX,CX);},AiZ:function(aColumn,A1){var K=
this.K;return K.Gv.AiZ(aColumn,A1);},G_:function(){var K=this.K;return K.Gv.G_();
},AiW:function(aColumn,A1){var K=this.K;return K.Gv.AiW(aColumn,A1);},Af5:function(
aColumn,A1){var K=this.K;return K.Gv.Af5(aColumn,A1);},Hz:function(){var K=this.
K;return K.Gv.Hz();},Aaz:function(){var K=this.K;return K.Gv.Aaz();},Qd:function(
){var K=this.K;return K.Gv.Qd();},_Init:function(aArg){var K=this.K;C.Gv._Init.call(
K.Gv={I:this},0);K.__proto__=C.Table;K.Init.call(this,aArg);A.hJ++;},_Done:function(
){var K=this.K;K.__proto__=null;K.Gv._Done();A.hJ--;},_ReInit:function(){var K=this.
K;K.Gv._ReInit();},_Mark:function(D){var B;if((B=this.Gv)._cycle!=D)B._Mark(B._cycle=
D);},_variants:function(){return this;},_className:"DeviceSimulation::Table"};C.
AEq={SF:A.aan(42,null,null),CE:function(aColumn){var B;this.ZA(aColumn);var An=(
C.ABX.isPrototypeOf(B=this.SF.Get(aColumn))?B:null);if(!!An)return An.A4;return 0;
},Va:function(aColumn){var B;this.ZA(aColumn);var An=(C.String.isPrototypeOf(B=this.
SF.Get(aColumn))?B:null);if(!!An)return An.A4;return A.jm;},HW:function(aColumn){
var B;this.ZA(aColumn);var An=(C.Az8.isPrototypeOf(B=this.SF.Get(aColumn))?B:null
);if(!!An)return An.A4;else A.aa8("%s",(B$+aColumn.toFixed())+BH);return false;}
,G$:function(aColumn,A1){this.ZA(aColumn);var An=A._NewObject(C.ABX,0);An.A4=A1;
this.SF.Set(aColumn,An);return true;},YV:function(aColumn,A1){this.ZA(aColumn);var
An=A._NewObject(C.String,0);An.A4=A1;this.SF.Set(aColumn,An);return true;},Na:function(
aColumn,A1){this.ZA(aColumn);var An=A._NewObject(C.Az8,0);An.A4=A1;this.SF.Set(aColumn
,An);return true;},ZA:function(aColumn){if((aColumn<0)||(aColumn>=42))throw new Error((
EV+aColumn.toFixed())+GT);},BfT:function(AL){if(!!(A.Device.Int32FilterCriterion.
isPrototypeOf(AL)?AL:null))return this.AHL(this.CE(AL.ET),AL.Operator,(A.Device.
Int32FilterCriterion.isPrototypeOf(AL)?AL:null).A4);else if(!!(A.Device.UInt32FilterCriterion.
isPrototypeOf(AL)?AL:null))return this.Buz(this.RQ(AL.ET),AL.Operator,(A.Device.
UInt32FilterCriterion.isPrototypeOf(AL)?AL:null).A4);else if(!!(A.Device.StringFilterCriterion.
isPrototypeOf(AL)?AL:null))return this.Buy(this.Va(AL.ET),AL.Operator,(A.Device.
StringFilterCriterion.isPrototypeOf(AL)?AL:null).A4);else if(!!(A.Device.BoolFilterCriterion.
isPrototypeOf(AL)?AL:null))return this.Bux(this.HW(AL.ET),AL.Operator,(A.Device.
BoolFilterCriterion.isPrototypeOf(AL)?AL:null).A4);else if(!!(A.Device.AnimalTypeFilterCriterion.
isPrototypeOf(AL)?AL:null))return this.AHL(this.CE(AL.ET),AL.Operator,(A.Device.
AnimalTypeFilterCriterion.isPrototypeOf(AL)?AL:null).A4);else if(!!(A.Device.GenderFilterCriterion.
isPrototypeOf(AL)?AL:null))return this.AHL(this.CE(AL.ET),AL.Operator,(A.Device.
GenderFilterCriterion.isPrototypeOf(AL)?AL:null).A4);else if(!!(A.Device.AssessmentFilterCriterion.
isPrototypeOf(AL)?AL:null))return this.BuB(this.Vb(AL.ET),AL.Operator,(((B=(A.Device.
AssessmentFilterCriterion.isPrototypeOf(AL)?AL:null).A4)<0)?B+0x100000000:B)&0xFF
);else if(!!(A.Device.UInt64FilterCriterion.isPrototypeOf(AL)?AL:null))return this.
BuA(this.LD(AL.ET),AL.Operator,(A.Device.UInt64FilterCriterion.isPrototypeOf(AL)?
AL:null).A4);else if(!!(A.Device.WhereAboutsFilterCriterion.isPrototypeOf(AL)?AL:
null))return this.AHL(this.CE(AL.ET),AL.Operator,(A.Device.WhereAboutsFilterCriterion.
isPrototypeOf(AL)?AL:null).A4);else throw new Error(Jt);},AHL:function(H3,EE,H4){
switch(EE){case 0:return H3===H4;case 2:return H3>H4;case 3:return H3<H4;case 4:
return H3.toFixed().indexOf(H4.toFixed(),0)>=0;case 5:return H3!==H4;default:throw new
Error(IL+EE.toFixed());}},Buy:function(H3,EE,H4){switch(EE){case 0:return H3===H4;
case 2:return H3>H4;case 3:return H3<H4;case 4:{A.aa8("%s%e%s%i",H3,EE,H4,H3.indexOf(
H4,0));return H3.indexOf(H4,0)>=0;}case 5:return H3!==H4;default:throw new Error(
IL+EE.toFixed());}},Bux:function(H3,EE,H4){switch(EE){case 0:return H3===H4;case
2:return false;case 3:return false;case 4:return false;case 5:return H3!==H4;default:
throw new Error(IL+EE.toFixed());}},Vb:function(aColumn){var B;this.ZA(aColumn);
var An=(C.AE7.isPrototypeOf(B=this.SF.Get(aColumn))?B:null);if(!!An)return An.A4;
return 0;},YX:function(aColumn,A1){this.ZA(aColumn);var An=A._NewObject(C.AE7,0);
An.A4=A1;this.SF.Set(aColumn,An);return true;},BuB:function(H3,EE,H4){switch(EE){
case 0:return H3===H4;case 2:return H3>H4;case 3:return H3<H4;case 5:return H3!==
H4;default:throw new Error(IL+EE.toFixed());}},RQ:function(aColumn){var B;this.ZA(
aColumn);var An=(C.AE5.isPrototypeOf(B=this.SF.Get(aColumn))?B:null);if(!!An)return An.
A4;return 0;},YW:function(aColumn,A1){this.ZA(aColumn);var An=A._NewObject(C.AE5
,0);An.A4=A1;this.SF.Set(aColumn,An);return true;},Buz:function(H3,EE,H4){switch(
EE){case 0:return H3===H4;case 2:return H3>H4;case 3:return H3<H4;case 5:return H3
!==H4;default:throw new Error(IL+EE.toFixed());}},LD:function(aColumn){var B;this.
ZA(aColumn);var An=(C.AE6.isPrototypeOf(B=this.SF.Get(aColumn))?B:null);if(!!An)
return An.A4;return 0;},TQ:function(aColumn,A1){this.ZA(aColumn);var An=A._NewObject(
C.AE6,0);An.A4=A1;this.SF.Set(aColumn,An);return true;},BuA:function(H3,EE,H4){switch(
EE){case 0:return H3===H4;case 2:return H3>H4;case 3:return H3<H4;case 5:return H3
!==H4;default:throw new Error(IL+EE.toFixed());}},_Init:function(aArg){(this.SF=[
]).__proto__=C.AEq.SF;this.__proto__=C.AEq;A.hJ++;},_Done:function(){this.__proto__=
null;A.hJ--;},_ReInit:function(){},_Mark:function(D){var B;A.aaf(this.SF,D);if((
B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:
"DeviceSimulation::RowData"};C.VH={_Init:function(aArg){this.__proto__=C.VH;A.hJ++;
},_Done:function(){this.__proto__=null;A.hJ--;},_ReInit:function(){},_Mark:function(
D){var B;if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:
null,_className:"DeviceSimulation::NativeType"};C.ABX={A4:0,_Init:function(aArg){
C.VH._Init.call(this,aArg);this.__proto__=C.ABX;},_className:"DeviceSimulation::Int32"
};C.String={A4:A.jm,_Init:function(aArg){C.VH._Init.call(this,aArg);this.__proto__=
C.String;},_className:"DeviceSimulation::String"};C.Az8={A4:false,_Init:function(
aArg){C.VH._Init.call(this,aArg);this.__proto__=C.Az8;},_className:"DeviceSimulation::Bool"
};C.DeviceClass={AsV:null,AHR:null,Ah_:null,ZY:null,C3:function(){var K=this.K;K.
A72.call(this,this);},Init:function(aArg){var K=this.K;var B;this.YA(3);A.za([this
,K.Azk],[B=K.AsV,B.A52,B.AQ4],0);this.UpdateAutoActions(OK);K.A72.call(this,this
);this.Aq3(this);this.Aq4(this);this.AqZ(this);this.Aq1(this);this.Aq0(this);var
languageMin=0;var languageMax=17;var languageValue=-1;{if(typeof ewLanguage==='number'&&
Number.isInteger(ewLanguage)&&ewLanguage>=languageMin&&ewLanguage<languageMax){languageValue=
ewLanguage;}}if(languageValue>=0)this.AmI(languageValue);A.ow([this,K.ARu],this);
},YA:function(E){this.UpdateActiveScreen(E);},AuY:function(E){this.UpdateBatteryChargeState(
E);},ACZ:function(E){this.UpdateChargeActive(E);},AqD:function(E){this.UpdateScanState(
E);},Avk:function(E){this.UpdateMeasureState(E);},Avu:function(E){this.UpdateTempValue(
E);},AmI:function(E){this.UpdateLanguage(E);},Avv:function(E){this.UpdateTemperatureUnit(
E);},ACX:function(E){this.UpdateBrightness(E);},ADt:function(E){this.UpdateMonitoring(
E);},Av3:function(){var B;if(A._GetAutoObject(C.Abw).Av0){this.UpdateMeasureState(
1);A._GetAutoObject(A.Device.Helper).AI5(this);}},Ag0:function(){var B;A._GetAutoObject(
A.Device.Helper).Sh.Av5(this);this.UpdateMeasureState(0);},Aes:function(){var K=
this.K;A.aa8("%s",PJ);this.UpdateScanState(1);A.ow([this,K.Azk],this);},Am3:function(
){var K=this.K;var B;A.aa8("%s",N1);K.Ah_.Av5(this);this.UpdateScanState(0);},SetSystemTime:
function(Ahp){},AvZ:function(){A.Device.DeviceClass.A9q.call(this);this.YA(1);},
AEn:function(){A.Device.DeviceClass.A9o.call(this);this.YA(2);},Cm:function(E){this.
UpdateOverlayMenu(E);},AvA:function(E){this.UpdateUnderTemp(E);},Abm:function(E){
this.UpdateSyncState(E);},AA$:function(){var aString;aString=((((((((((CJ+A.aaC(
0,9).toFixed())+Fn)+A.aaC(0,9).toFixed())+Nd)+OL)+A.aaC(30,90).toFixed())+A.z2(A.
abg.AEU))+Nd)+KH)+A.aaC(1,100).toFixed())+OM;return aString;},PopupStateChanged:
function(Kn,Ae){var Afy=A._NewObject(C.PopupContext,0);Afy.Id=Kn;Afy.GO=Ae;this.
AmT.Trigger(Afy,false);},ADW:function(E){this.UpdateVibrationOnKeypressEnabled(E
);},Ad8:function(E){this.UpdateVibrationOn(E);},Avr:function(E){this.UpdateRatingMode(
E);},Ad0:function(E){this.UpdateFlashLightOn(E);},VO:function(E){this.UpdateTopLightOn(
E);},YH:function(E){this.UpdateRGBTopLight(E);},AuX:function(E){this.UpdateAutoRegistrationMode(
E);},AqE:function(E){this.UpdateScanTransponder(E.Id,E.TransponderType,E.TransponderProtocol
);},Pz:function(E){this.UpdateDigitsID(E);},Qz:function(E){this.UpdateOffsetID(E
);},AD0:function(E){this.UpdateWeightValue(E);},Avi:function(E){this.UpdateMassUnit(
E);},Aqf:function(E){A.Device.DeviceClass.A9k.call(this,E);this.UpdateActiveActions(
E);},Aqg:function(E){A.Device.DeviceClass.A9l.call(this,E);this.UpdateActiveActionsOrder(
E);},Abc:function(E){A.Device.DeviceClass.A9m.call(this,E);this.UpdateAutoActions(
E);},AEO:function(){var K=this.K;this.UpdateMeasureState(1);K.BxO.call(this,this
);},Arg:function(){var K=this.K;var B;K.ZY.Av5(this);this.UpdateMeasureState(0);
},DW:function(E){this.UpdateAnimalType(E);},AvB:function(E){this.UpdateWeightRecordingMode(
E);},ADB:function(E){this.UpdatePredictedTempValue(E);},Se:function(L0){A.aa8("%s%i"
,Ne,L0);},AC5:function(E){this.UpdateDemoMode(E);},ACO:function(E){this.UpdateAgeRegistration(
E);},AvC:function(E){this.UpdateWeightRecordingScope(E);},JM:function(E){this.UpdateGender(
E);},Aqv:function(E){this.UpdateIDLastUsedMale(E);},Aqu:function(E){this.UpdateIDLastUsedFemale(
E);},Abb:function(E){this.UpdateAnimalListContent(E);},ACQ:function(E){this.UpdateAlarmListAction(
E);},AC8:function(E){this.UpdateFlashLightInMeasureState(E);},AdY:function(E){this.
UpdateAnimalInfoContent(E);},ADZ:function(E){this.UpdateWatchListAction(E);},AC9:
function(E){this.UpdateFreshCowListAction(E);},AqZ:function(H){this.Aqf(15359);this.
Aqg(ON);},Aq1:function(H){this.Abc(Ss);},AuV:function(E){this.UpdateAnimalTypesString(
E);},AqF:function(E){this.UpdateTemperaturesHighString(E);},AqG:function(E){this.
UpdateTemperaturesLowString(E);},Aq3:function(H){this.AuV(T$);this.AqG(Ze);this.
AqF(Wb);this.AvA(3600);},ADw:function(E){this.UpdateNoTransponderListAction(E);}
,Avd:function(E){this.UpdateFreshCowsHideMeasured(E);},Aqz:function(E){this.UpdateNaisIdLastUsedMale(
E);},Aqy:function(E){this.UpdateNaisIdLastUsedFemale(E);},Avn:function(E){this.UpdateNaisIdIncrementMale(
E);},Avm:function(E){this.UpdateNaisIdIncrementFemale(E);},UpdateFirmware:function(
){A.Device.DeviceClass.A9r.call(this);A._GetAutoObject(A.kh.A0).BZ(61);},AmE:function(
E){this.UpdateBootloaderMessage(E);},ACM:function(E){this.UpdateActionListAction(
E);},AuT:function(E){this.UpdateActionListHideMeasured(E);},TC:function(E){this.
UpdateAnimalIdGenerationMethod(E);},Au7:function(E){this.UpdateDirectionOfCountingFemale(
E);},Au8:function(E){this.UpdateDirectionOfCountingMale(E);},Au9:function(E){this.
UpdateDirectionOfCountingUnisex(E);},Aqw:function(E){this.UpdateIDLastUsedUnisex(
E);},AqA:function(E){this.UpdateNaisIdLastUsedUnisex(E);},Avo:function(E){this.UpdateNaisIdIncrementUnisex(
E);},AjB:function(E){this.UpdateEartagNrAssignmentMode(E);},NP:function(E){this.
UpdateBreed(E);},ADq:function(E){throw new Error(IM);},ADk:function(E){throw new
Error(IM);},ADT:function(E){throw new Error(IM);},ACT:function(E){throw new Error(
IM);},AC6:function(E){this.UpdateDryCowListAction(E);},AHI:function(AX9){var HS;
switch(AX9){case 15:HS=false;break;default:HS=true;}return HS;},ADv:function(E){
this.UpdateNoNaisIdListAction(E);},ACS:function(E){this.UpdateBirthListView(E);}
,ADU:function(E){this.UpdateTransferProgress(E);},AqH:function(E){this.UpdateTransferTarget(
E);},Arf:function(){var B;A.ow([B=A._GetAutoObject(C.Ard),B.BcC],this);},Avq:function(
E){this.UpdatePremisesID(E);},Avl:function(E){this.UpdateMotherSelectionDriedOffFilter(
E);},AC_:function(E){this.UpdateFreshCowSpan(E);},ADV:function(E){this.UpdateUSBState(
E);},Am1:function(Ahj){var K=this.K;var result=A._NewObject(C.AiN,0);result.AAA=
Ahj;result.FileName=K.Bfd.call(this,Ahj);switch(Ahj){case 0:K.BuL.call(this,result
);break;case 1:K.BuH.call(this,result);break;case 2:K.BuM.call(this,result);break;
case 3:K.BuK.call(this,result);break;default:throw new Error(Ua+Ahj.toFixed());}
K.AHR=result;return result;},ApW:function(){return true;},Apm:function(Ni){var K=
this.K;switch(Ni.AAA){case 0:A._GetAutoObject(A.Device.Device).A5(72,true,A.jm,0
,[this,K.A0t]);break;case 1:A._GetAutoObject(A.Device.Device).A5(90,true,A.jm,0,[
this,K.A0t]);break;case 2:case 3:A._GetAutoObject(A.Device.Device).A5(100,true,A.
jm,0,[this,K.A0t]);break;default:throw new Error(Zf+Ni.AAA.toFixed());}},ADH:function(
E){throw new Error(IM);},AuU:function(E){this.UpdateAnimalIdAutoGenerationMethod(
E);},ADJ:function(E){this.UpdateShutdownTimer(E);},Aqm:function(E){this.UpdateAnimalListInfoItemMode(
E);},Aq4:function(H){this.AuW(Wc);this.AqL(Zg);this.AqK(Ub);this.AqJ(Ub);this.AqM(
Zh);},AqK:function(E){this.UpdateWeightGainsHighString(E);},AqL:function(E){this.
UpdateWeightGainsLowString(E);},AuW:function(E){this.UpdateAnimalTypesWeightGainsString(
E);},AqJ:function(E){this.UpdateWeightGainsAverageString(E);},AqM:function(E){this.
UpdateWeightValueBirthString(E);},Au_:function(E){this.UpdateEvaluationAnimalType(
E);},Avt:function(E){this.UpdateStartScreen(E);},ABZ:function(){return 1;},AB0:function(
){return 1;},ADp:function(E){this.UpdateMaximumAgeNewOnFarm(E);},Avz:function(E){
this.UpdateTransponderAssignmentIdChangeMethod(E);},AC4:function(E){this.UpdateDataExportDestination(
E);},M9:function(E){this.UpdateWhereAbouts(E);},Aqi:function(E){this.UpdateActiveMassRecordingFields(
E);},Aqj:function(E){this.UpdateActiveMassRecordingFieldsOrder(E);},Aq0:function(
H){this.Aqi(A.jm);this.Aqj(Zi);},ADn:function(E){this.UpdateMassRecordingDateOfBirthMandatory(
E);},BxB:function(H){switch(this.Ku){case 34:case 35:case 32:case 50:case 55:case
63:case 91:{this.UpdateScanTransponder(12310020,1,0);this.UpdateScanState(2);}break;
case 15:break;default:this.UpdateScanState(4);}},Azk:function(H){var K=this.K;var
B;if((this.ScanState===1)&&K.AsV.AEG)K.Ah_.AEN(this);A.aa8("%s",Uc);},BxO:function(
H){var K=this.K;var B;if((this.MeasureState===1)&&K.AsV.Av0)K.ZY.AEN(this);},Byp:
function(H){this.UpdateMeasureState(3);},ARu:function(H){var K=this.K;var B;A.za([
B=A._GetAutoObject(A.Device.Helper),B.AI5],[B=K.AsV,B.A53,B.AQ5],0);this.Rt.AC3(
A._GetAutoObject(A.Device.Helper).A34(8));this.R3.AC3(A._GetAutoObject(A.Device.
Helper).A34(8));},A72:function(H){var AxZ=A._NewObject(A.Device.Av2,0);AxZ.OnSetTimestamp(
1692954318);AxZ.ADl(1);AxZ.ADs(0);AxZ.ADE(0);this.R3=AxZ;var Axw=A._NewObject(A.
Device.Av2,0);Axw.OnSetTimestamp(1692954318);Axw.ADl(1);Axw.ADs(0);Axw.ADE(4);this.
Rt=Axw;var Ak2=A._NewObject(A.Device.At4,0);Ak2.ADi(1);Ak2.ADj(0);Ak2.ADh(0);Ak2.
ADR(1);Ak2.ADS(0);Ak2.ADQ(0);Ak2.OnSetTimestamp(1692954318);this.Qu=Ak2;var Als=
A._NewObject(A.Device.At4,0);Als.ADi(1);Als.ADj(0);Als.ADh(0);Als.ADR(1);Als.ADS(
0);Als.ADQ(0);Als.OnSetTimestamp(1692954318);this.Sj=Als;this.AgX=A.z2(A.abg.Unknown
);},Bu7:function(aFilename,aMimeType,aContent){{var bb=new Blob([aContent],{type:
aMimeType});var a=document.createElement('a');a.download=aFilename;a.href=window.
URL.createObjectURL(bb);a.click();}},BuL:function(Ni){var K=this.K;var B;var SE=
Wd;var B4=A._NewObject(A.Device.Animal,0);var P;var AcH=0;for(P=0;P<A._GetAutoObject(
A.Device.Device).Ao.Cj();P++){B4.EK(P,A._GetAutoObject(A.Device.Device).Ao);if(B4.
IsRegistrationNoticePending&&(B4.NaisId>0)){SE=SE+(((((((((((((((((K.AhK.call(this
,A._GetAutoObject(A.Device.Device).YM)+String.fromCharCode(0x3B))+K.AhK.call(this
,B4.NaisId))+String.fromCharCode(0x3B))+K.AIb.call(this,B4.DateOfBirth))+String.
fromCharCode(0x3B))+K.A$F.call(this,B4.Breed))+String.fromCharCode(0x3B))+K.A$E.
call(this,B4.Gender))+String.fromCharCode(0x3B))+K.Bva.call(this,B4.EaseOfDelivery
))+String.fromCharCode(0x3B))+K.A$G.call(this,B4.WhereAbouts))+String.fromCharCode(
0x3B))+K.Bvd.call(this,B4.BirthType))+String.fromCharCode(0x3B))+K.AhK.call(this
,B4.NaisIdMother))+Nd);AcH++;}}Ni.AtG=SE;Ni.AEr=AcH;Ni.Am4=true;},AhK:function(Q0
){if(!Q0)return A.jm;return Q0.toFixed();},AIb:function(AX8){var Aq=A._NewObject(
A.Core.Bu,0);Aq.Initialize(AX8);return Aq.Format(QV);},A$F:function(Ab2){if(!Ab2
)return A.jm;return A._GetAutoObject(A.Device.Converter).A2H(Ab2).toFixed();},A$E:
function(LY){var result=A.jm;switch(LY){case 0:result=Zj;break;case 1:result=OO;
break;case 2:result=A.jm;break;default:A.aa8("%s",PK+LY.toFixed());}return result;
},Bva:function(AG6){if(!AG6)return A.jm;return AG6.toFixed();},A$G:function(Ae2){
if(!Ae2)return A.jm;return Ae2.toFixed();},Bvd:function(ArY){return(ArY+1).toFixed(
);},A0t:function(H){var K=this.K;var Ar=(A.Device.PopupContext.isPrototypeOf(H)?
H:null);if(!!Ar&&(Ar.PopupState===7))K.Bu7.call(this,K.AHR.FileName,Ud,K.AHR.AtG
);},BuH:function(Ni){var K=this.K;var B;var SE=Zk;var B4=A._NewObject(A.Device.Animal
,0);var P;var AcH=0;for(P=0;P<A._GetAutoObject(A.Device.Device).Ao.Cj();P++){var
Axs=A.jm;if(B4.ApV())Axs=K.Bvf.call(this,B4.FirstBodyWeight);B4.EK(P,A._GetAutoObject(
A.Device.Device).Ao);SE=SE+(((((((((((K.AhK.call(this,B4.NaisId)+String.fromCharCode(
0x3B))+K.Bvb.call(this,B4.VisualId))+String.fromCharCode(0x3B))+K.AhK.call(this,
B4.TransponderId))+String.fromCharCode(0x3B))+K.Bu$.call(this,B4.DateOfBirth))+String.
fromCharCode(0x3B))+K.Bve.call(this,B4.Gender))+String.fromCharCode(0x3B))+Axs)+
Nd);AcH++;}Ni.AtG=SE;Ni.AEr=AcH;Ni.Am4=true;},Bfd:function(Ahj){var AxY=A.jm;var
Ad=A._NewObject(A.Core.Bu,0);Ad.Initialize(A._GetAutoObject(A.Device.Helper).DB(
));switch(Ahj){case 0:AxY=Ad.Format(We);break;case 1:AxY=Ad.Format(Zl);break;case
2:AxY=Ad.Format(Zm);break;case 3:AxY=Ad.Format(Wf);break;default:throw new Error(
Ua+Ahj.toFixed());}return AxY;},Bvb:function(Q0){return Q0.toFixed();},Bve:function(
LY){var result=A.jm;switch(LY){case 0:result=Wg;break;case 1:result=St;break;case
2:result=Zn;break;default:A.aa8("%s",PK+LY.toFixed());}return result;},Bvf:function(
N5){if(N5<=0)return A.jm;return A._GetAutoObject(A.Device.Converter).Ane(N5);},Bu$:
function(AX8){var Aq=A._NewObject(A.Core.Bu,0);Aq.Initialize(AX8);return Aq.Format(
Zo);},BuM:function(Ni){var K=this.K;var B;var SE=AbO;var B4=A._NewObject(A.Device.
Animal,0);var P;var AcH=0;for(P=0;P<A._GetAutoObject(A.Device.Device).Ao.Cj();P++
){B4.EK(P,A._GetAutoObject(A.Device.Device).Ao);if(B4.IsRegistrationNoticePending&&(
B4.NaisId>0)){SE=SE+(((((K.AhK.call(this,A._GetAutoObject(A.Device.Device).YM)+String.
fromCharCode(0x3B))+K.AhK.call(this,B4.NaisId))+String.fromCharCode(0x3B))+K.AIb.
call(this,A._GetAutoObject(A.Device.Helper).DB()))+Nd);AcH++;}}Ni.AtG=SE;Ni.AEr=
AcH;Ni.Am4=true;},BuK:function(Ni){var K=this.K;var B;var SE=Su;var B4=A._NewObject(
A.Device.Animal,0);var P;var AcH=0;for(P=0;P<A._GetAutoObject(A.Device.Device).Ao.
Cj();P++){B4.EK(P,A._GetAutoObject(A.Device.Device).Ao);if(B4.IsRegistrationNoticePending&&(
B4.NaisId>0)){SE=SE+(((((((((((((K.AhK.call(this,B4.NaisId)+String.fromCharCode(
0x3B))+K.AIb.call(this,B4.DateOfBirth))+String.fromCharCode(0x3B))+K.A$E.call(this
,B4.Gender))+String.fromCharCode(0x3B))+K.A$G.call(this,B4.WhereAbouts))+String.
fromCharCode(0x3B))+K.A$F.call(this,B4.Breed))+String.fromCharCode(0x3B))+K.AIb.
call(this,A._GetAutoObject(A.Device.Helper).DB()))+String.fromCharCode(0x3B))+K.
AhK.call(this,B4.TransponderId))+Nd);AcH++;}}Ni.AtG=SE;Ni.AEr=AcH;Ni.Am4=true;},
_Init:function(aArg){var K=this.K;A.abm.F_._Init.call(K.Ah_={I:this},0);A.abm.F_.
_Init.call(K.ZY={I:this},0);K.__proto__=C.DeviceClass;this.AuY(100);this.AmI(1);
this.Aqv(200);this.Aqu(100);this.Aqz(276000912345678);this.Aqy(276000923456789);
this.Aqw(500);this.AqA(276000901234567);this.NP(1);K.Ah_.IF(1);K.Ah_.FA(1000);K.
ZY.VN(0);K.ZY.IF(1);K.ZY.FA(750);K.ZY.B1=50000;K.Ah_.R5=[this,K.BxB];K.AsV=A._GetAutoObject(
C.Abw);K.ZY.R5=[this,K.Byp];K.ZY.Q=[this,this.ACK,this.AGS];K.Init.call(this,aArg
);A.hJ++;},_Done:function(){var K=this.K;K.__proto__=null;K.Ah_._Done();K.ZY._Done(
);A.hJ--;},_ReInit:function(){var K=this.K;K.Ah_._ReInit();K.ZY._ReInit();K.C3.call(
this);},_Mark:function(D){var B;if((B=this.AsV)&&(B._cycle!=D))B._Mark(B._cycle=
D);if((B=this.AHR)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Ah_)._cycle!=D)
B._Mark(B._cycle=D);if((B=this.ZY)._cycle!=D)B._Mark(B._cycle=D);},_variants:function(
){return A.abq.DeviceClass._variants();},_className:"DeviceSimulation::DeviceClass"
};C.AE7={A4:0,_Init:function(aArg){C.VH._Init.call(this,aArg);this.__proto__=C.AE7;
},_className:"DeviceSimulation::UInt8"};C.AE5={A4:0,_Init:function(aArg){C.VH._Init.
call(this,aArg);this.__proto__=C.AE5;},_className:"DeviceSimulation::UInt32"};C.
HelperClass={A1q:0,ADK:function(E){var K=this.K;K.A1q=K.A1q+(E-this.DB());A.Device.
HelperClass.A9n.call(this,E);},DB:function(){var K=this.K;return A.Device.HelperClass.
A9j.call(this)+K.A1q;},_Init:function(aArg){var K=this.K;K.__proto__=C.HelperClass;
A.hJ++;},_Done:function(){var K=this.K;K.__proto__=null;A.hJ--;},_ReInit:function(
){},_Mark:function(D){},_variants:function(){return this;},_className:"DeviceSimulation::HelperClass"
};C.A79={Av0:false,AEG:false,AQ4:function(E){if(this.AEG===E)return;this.AEG=E;A.
aat([this,this.A52,this.AQ4],0);},A52:function(){return this.AEG;},AQ5:function(
E){if(this.Av0===E)return;this.Av0=E;A.aat([this,this.A53,this.AQ5],0);},A53:function(
){return this.Av0;},BhN:function(){return true;},_Init:function(aArg){this.__proto__=
C.A79;A.hJ++;},_Done:function(){this.__proto__=null;A.hJ--;},_ReInit:function(){
},_Mark:function(D){var B;if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null
,_cycle:0,_observers:null,_className:"DeviceSimulation::SimulationConfigClass"};
C.Abw={_Init:function(){C.A79._Init.call(this,0);},_variants:function(){return A.
abq.Abw._variants();},_this:null};C.PopupContext={GO:1,Id:0,_Init:function(aArg){
this.__proto__=C.PopupContext;A.hJ++;},_Done:function(){this.__proto__=null;A.hJ--;
},_ReInit:function(){},_Mark:function(D){var B;if((B=this.I)&&(B._cycle!=D))B._Mark(
B._cycle=D);},I:null,_cycle:0,_observers:null,_className:"DeviceSimulation::PopupContext"
};C.Rating={Cr:function(AF){var Hs=A.Device.Rating.A9p.call(this,AF);if(Hs){var Q5=
A._GetAutoObject(A.Device.Device).Ao;var Ab=A._GetAutoObject(A.Device.Device).Ao.
K4(0,this.AnimalId);if(Ab!==-1){var Jg=Q5.Op();if(Jg<=0)A.aa8("%s",AbP);else{var
B4=A._NewObject(A.Device.Animal,0);B4.EK(Ab,Q5);if((this.Temperature>0)&&(B4.TimestampLastTemperature<
this.Timestamp)){Q5.A71(Ab,5,this.Temperature);Q5.Aj0(Ab,17,this.RatingTemperature
);Q5.Abu(Ab,30,this.Timestamp);}if(this.BodyWeight>0){if(B4.TimestampLastWeighing<=
this.Timestamp){Q5.AR4(Ab,18,this.BodyWeight);Q5.Abu(Ab,19,this.Timestamp);}if(!
B4.TimestampFirstWeighing||(B4.TimestampFirstWeighing>=this.Timestamp)){Q5.AR4(Ab
,23,this.BodyWeight);Q5.Abu(Ab,24,this.Timestamp);Q5.G$(Ab,25,this.Id);}}if(A._GetAutoObject(
A.Device.Helper).AEg(this)){var Ly=A._GetAutoObject(A.Device.Helper).ABe(this);Q5.
Aj0(Ab,13,Ly);Q5.Abu(Ab,31,this.Timestamp);}Q5.Or(Jg);}}}return Hs;},_Init:function(
aArg){var K=this.K;K.__proto__=C.Rating;A.hJ++;},_Done:function(){var K=this.K;K.
__proto__=null;A.hJ--;},_ReInit:function(){},_Mark:function(D){},_variants:function(
){return this;},_className:"DeviceSimulation::Rating"};C.PE={Gn:A.aan(512,null,null
),O2:0,AHy:0,AJb:0,A1t:A.aan(10,0,{0:3600,1:3750,2:3900,3:4200,4:3780,5:3600,6:3900
,7:4010,8:4020,9:4030}),AIO:0,A03:A.aan(10,0,{0:5,1:4,2:3,3:1,4:2,5:1,6:1,7:1,8:
1,9:1}),Baw:512,Ayl:-1,AYI:A.aan(15,0,{0:2,1:2,2:2,3:2,4:2,5:3,6:3,7:3,8:3,9:3,10:
1,11:1,12:1,13:1,14:1}),AIn:false,CE:function(Ab,AX){var A9=this.Te(Ab);if(!!A9)
return A9.CE(AX);return 0;},Va:function(Ab,AX){var A9=this.Te(Ab);if(!!A9)return A9.
Va(AX);return A.jm;},HW:function(Ab,AX){var A9=this.Te(Ab);if(!!A9)return A9.HW(
AX);return false;},Vb:function(Ab,AX){var A9=this.Te(Ab);if(!!A9)return A9.Vb(AX
);return 0;},RQ:function(Ab,AX){var A9=this.Te(Ab);if(!!A9)return A9.RQ(AX);return 0;
},Op:function(){if(this.AIn)throw new Error(AeN);this.AIn=true;return 12345;},Or:
function(AnJ){if(!this.AIn)throw new Error(Zp);if(AnJ!==12345)throw new Error(Wh
);this.AIn=false;return true;},XU:function(){return this.A14(A._NewObject(C.AEq,
0));},YX:function(Ab,AX,CX){var A9=this.Te(Ab);if(!!A9)return A9.YX(AX,CX);return false;
},G$:function(Ab,AX,CX){var A9=this.Te(Ab);if(!!A9)return A9.G$(AX,CX);return false;
},YW:function(Ab,AX,CX){var A9=this.Te(Ab);if(!!A9)return A9.YW(AX,CX);return false;
},Na:function(Ab,AX,CX){var A9=this.Te(Ab);if(!!A9)return A9.Na(AX,CX);return false;
},YV:function(Ab,AX,CX){var A9=this.Te(Ab);if(!!A9)return A9.YV(AX,CX);return false;
},OnSetId:function(E){if(this.Id===E)return;this.Id=E;this.A$g();switch(this.Id){
case 0:{this.Baw=128;A.ow([this,this.BsF],this);}break;case 1:A.ow([this,this.BsH
],this);break;case 3:A.ow([this,this.BsE],this);break;case 4:A.ow([this,this.BsG
],this);break;case 2:break;default:throw new Error(Wi+this.Id.toFixed());}},Cj:function(
){return this.O2;},LD:function(Ab,AX){var A9=this.Te(Ab);if(!!A9)return A9.LD(AX
);return 0;},TQ:function(Ab,AX,CX){var A9=this.Te(Ab);if(!!A9)return A9.TQ(AX,CX
);return false;},G_:function(){this.A$g();return true;},Hz:function(){return this.
Baw;},A14:function(Ab){if(this.O2>=512)throw new Error(AeO);this.Gn.Set(this.O2,
Ab);this.O2=this.O2+1;switch(this.Id){case 0:{this.Ayl=this.O2;this.G$(this.O2-1
,0,this.Ayl);}break;case 1:{this.Ayl=this.O2-1;this.G$(this.O2-1,0,this.Ayl);}break;
default:;}A.ow([this,this.Ajv],this);return this.O2-1;},Te:function(aIndex){if((
aIndex<0)||(aIndex>=512))return null;return this.Gn.Get(aIndex);},A$g:function(){
var P;for(P=0;P<512;P=P+1)this.Gn.Set(P,null);this.O2=0;this.AHy=0;this.AIO=0;this.
AJb=0;A.ow([this,this.Ajv],this);},AIi:function(){this.AHy=(this.AHy+1)%15;return this.
AYI.Get(this.AHy);},AZw:function(){this.AJb=(this.AJb+1)%10;return this.A1t.Get(
this.AJb);},AH6:function(H){if(this.K&&this.K.AH6)return this.K.AH6.apply(this,arguments
);else return C.PE.BsN.apply(this,arguments);},BsN:function(H){var B;var Oa=true;
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
0);var P;var BcI=0;for(P=1;P<=7;P=P+1){BcI=3680+(20*P);Oa=BcI>3800;this.Bi(276000312310050+(((
B=P)<0)?B+0x10000000000000000:B),30+(P%3),3,A._GetAutoObject(A.Device.Helper).Ag2(
7-P),0,1,Oa,false,false,true,36000+(P*900),0,0,false,0,true,0,0,0,0);}},BsF:function(
s){this.AH6(s);},AH8:function(H){if(this.K&&this.K.AH8)return this.K.AH8.apply(this
,arguments);else return C.PE.BsP.apply(this,arguments);},BsP:function(H){var Ad=
A._GetAutoObject(A.Device.Helper).DB();var P;Ad=Ad-2678400;var AhJ;var A$x;for(P=
0;P<32;P=P+1){var AZh=this.Bvr();for(;AZh>0;AZh=AZh-1){AhJ=this.AZw();A$x=A._GetAutoObject(
A.Device.Converter).Arj(0,AhJ);this.AE(Ad,12310020,AhJ,A$x,this.AIi(),this.AIi()
,this.AIi(),this.AIi(),0);}Ad=Ad+86400;}Ad=Ad-86400;this.AE(Ad,12310020,0,0,0,0,
0,0,43700);this.AE(Ad-86400,276000312310001,0,0,0,0,0,0,49800);this.AE(Ad,276000312310001
,0,0,0,0,0,0,51000);AhJ=this.AZw();this.AE(Ad,276000312310001,AhJ,A._GetAutoObject(
A.Device.Converter).Arj(0,AhJ),1,3,3,3,0);AhJ=this.AZw();this.AE(Ad-86400,276000312310022
,3800,A._GetAutoObject(A.Device.Converter).Arj(1,3800),2,3,3,3,0);this.AE(Ad,276000312310022
,AhJ,A._GetAutoObject(A.Device.Converter).Arj(1,AhJ),2,3,3,3,0);},BsH:function(s
){this.AH8(s);},Bi:function(Kn,Bs$,Btq,A_m,ArY,LY,Btg,Btm,Btj,Btk,N5,BsX,Bto,Bti
,Ee,Btl,Ab2,AG6,Ae2,Btv){var B4=A._NewObject(A.Device.Animal,0);B4.Gd();B4.AvD(0
);B4.Ad6(0);B4.TF(false);B4.AjH(false);B4.M8(Kn);B4.M7(Kn);B4.TH(A._GetAutoObject(
A.Device.Helper).Akb(B4.TransponderId));B4.Abh(Bs$);B4.AmJ(Btq);B4.R8(A_m);B4.Ajz(
ArY);B4.JM(LY);B4.Am0(Btg);B4.AEz(Btm);B4.AgG(Btk);B4.TF(Btj);B4.Aqx(Bti);B4.Avg(
Bto);B4.Au4(BsX);B4.DW(Ee);B4.Ad3(Btl);B4.NP(Ab2);B4.AjC(AG6);B4.M9(Ae2);B4.AmL(
Btv);B4.Cr(this);if(N5>0)A._GetAutoObject(C.AvO).AE(A_m,Kn,0,0,0,0,0,0,N5);},AE:
function(LX,Ab0,AnH,BtH,Bs5,Bs6,BsQ,BtJ,BsR){var BW=A._NewObject(A.Device.Rating
,0);BW.Gd();var A_0=A._GetAutoObject(C.Ao_).AMk(26,Ab0);if(A_0>=0)BW.OnSetAnimalId(
A._GetAutoObject(C.Ao_).CE(A_0,0));else A.aa8("%s%U",AeP,Ab0);BW.OnSetTimestamp(
LX);BW.OnSetTemperature(AnH);BW.OnSetRatingTemperature(BtH);BW.OnSetFaeces(Bs5);
BW.OnSetFeed(Bs6);BW.OnSetAppearance(BsQ);BW.OnSetRespiratory(BtJ);BW.OnSetBodyWeight(
BsR);BW.Cr(this);},A3J:function(aColumn,A1){var P;for(P=0;P<this.O2;P=P+1)if(this.
Gn.Get(P).CE(aColumn)===A1)return P;return-1;},Bvr:function(){this.AIO=(this.AIO+
1)%10;return this.A03.Get(this.AIO);},AH5:function(H){if(this.K&&this.K.AH5)return this.
K.AH5.apply(this,arguments);else return C.PE.BsM.apply(this,arguments);},BsM:function(
H){this.AkW(10,JT);this.AkW(20,AeQ);this.AkW(30,Li);this.AkW(31,Ag$);this.AkW(32
,Ang);},BsE:function(s){this.AH5(s);},AkW:function(Kn,Bta){var AHs=A._NewObject(
A.Device.AnimalGroup,0);AHs.Gd();AHs.OnSetId(Kn);AHs.ADa(Bta);AHs.Cr(this);},Aaz:
function(){return this.Ayl;},AMk:function(aColumn,A1){var P;for(P=0;P<this.O2;P=
P+1)if(this.Gn.Get(P).LD(aColumn)===A1)return P;return-1;},AH7:function(H){if(this.
K&&this.K.AH7)return this.K.AH7.apply(this,arguments);else return C.PE.BsO.apply(
this,arguments);},BsO:function(H){this.ZJ(2016,216,6);this.ZJ(2017,217,7);this.ZJ(
2018,218,8);this.ZJ(2019,219,9);this.ZJ(2020,220,10);this.ZJ(2021,221,11);},BsG:
function(s){this.AH7(s);},ZJ:function(Ab9,Bs1,Bs0){var Un=A._NewObject(A.Device.
CalfDeregistrations,0);Un.Gd();Un.AjO(Ab9);Un.Au6(Bs1);Un.Au5(Bs0);Un.Cr(this);}
,_Init:function(aArg){A.Device.ITable._Init.call(this,aArg);(this.Gn=[]).__proto__=
C.PE.Gn;(this.A1t=[]).__proto__=C.PE.A1t;(this.A03=[]).__proto__=C.PE.A03;(this.
AYI=[]).__proto__=C.PE.AYI;this.__proto__=C.PE;var Lj=this._variants();if(Lj){this.
K={};Lj._Init.call(this,aArg);}},_Done:function(){if(this.K)this.K._Done.call(this
);this.__proto__=A.Device.ITable;A.Device.ITable._Done.call(this);},_ReInit:function(
){A.Device.ITable._ReInit.call(this);if(this.K)this.K._ReInit.call(this);},_Mark:
function(D){var B;A.Device.ITable._Mark.call(this,D);A.aaf(this.Gn,D);if(this.K)
this.K._Mark(D);},_variants:function(){return A.abq.PE._variants();},K:null,_className:
"DeviceSimulation::TableData"};C.Ao_={_Init:function(){C.PE._Init.call(this,0);this.
OnSetId(0);},_variants:function(){return this;},_this:null};C.AzP={_Init:function(
){C.PE._Init.call(this,0);this.OnSetId(3);},_variants:function(){return this;},_this:
null};C.AvO={_Init:function(){C.PE._Init.call(this,0);this.OnSetId(1);},_variants:
function(){return this;},_this:null};C.Gv={AkQ:A.aan(128,null,null),Gh:null,An9:
0,CE:function(Ab,AX){var A9=this.ZH(Ab);if(!!A9)return A9.CE(AX);return 0;},Va:function(
Ab,AX){var A9=this.ZH(Ab);if(!!A9)return A9.Va(AX);return A.jm;},HW:function(Ab,
AX){var A9=this.ZH(Ab);if(!!A9)return A9.HW(AX);return false;},OnSetId:function(
E){if(this.Id===E)return;this.Id=E;switch(this.Id){case 0:this.AD3(A._GetAutoObject(
C.Ao_));break;case 1:this.AD3(A._GetAutoObject(C.AvO));break;case 3:this.AD3(A._GetAutoObject(
C.AzP));break;case 4:this.AD3(A._GetAutoObject(C.AAc));break;case 2:break;default:
throw new Error(Wi+this.Id.toFixed());}},Cj:function(){if(!!this.Filter)return this.
An9;else if(!!this.Gh)return this.Gh.O2;return 0;},Bl:function(E){A.Device.ITable.
Bl.call(this,E);this.AYG(this);},Vb:function(Ab,AX){var A9=this.ZH(Ab);if(!!A9)return A9.
Vb(AX);return 0;},RQ:function(Ab,AX){var A9=this.ZH(Ab);if(!!A9)return A9.RQ(AX);
return 0;},Op:function(){if(!!this.Gh)return this.Gh.Op();return-1;},Or:function(
AnJ){var Hs=false;if(!!this.Gh)Hs=this.Gh.Or(AnJ);if(Hs)A.ow([this,this.AYG],this
);return Hs;},XU:function(){if(!!this.Filter)throw new Error(N2+A._GetAutoObject(
A.Device.Converter).BeT(this.Id,this.Filter));if(!!this.Gh)return this.Gh.A14(A.
_NewObject(C.AEq,0));return-1;},YX:function(Ab,AX,CX){var A9=this.ZH(Ab);if(!!A9
)return A9.YX(AX,CX);return false;},G$:function(Ab,AX,CX){var A9=this.ZH(Ab);if(
!!A9)return A9.G$(AX,CX);return false;},YW:function(Ab,AX,CX){var A9=this.ZH(Ab);
if(!!A9)return A9.YW(AX,CX);return false;},Na:function(Ab,AX,CX){var A9=this.ZH(
Ab);if(!!A9)return A9.Na(AX,CX);return false;},YV:function(Ab,AX,CX){var A9=this.
ZH(Ab);if(!!A9)return A9.YV(AX,CX);return false;},K4:function(aColumn,A1){if(!!this.
Filter){var P;for(P=0;P<this.An9;P=P+1)if(this.AkQ.Get(P).CE(aColumn)===A1)return P;
return-1;}else if(!!this.Gh)return this.Gh.A3J(aColumn,A1);return-1;},LD:function(
Ab,AX){var A9=this.ZH(Ab);if(!!A9)return A9.LD(AX);return 0;},TQ:function(Ab,AX,
CX){var A9=this.ZH(Ab);if(!!A9)return A9.TQ(AX,CX);return false;},AiZ:function(aColumn
,A1){if(!!this.Filter){var P;for(P=0;P<this.An9;P=P+1)if(this.AkQ.Get(P).LD(aColumn
)===A1)return P;return-1;}else if(!!this.Gh)return this.Gh.AMk(aColumn,A1);return-
1;},G_:function(){if(!!this.Gh)return this.Gh.G_();return false;},AiW:function(aColumn
,A1){if(!!this.Gh)return this.Gh.A3J(aColumn,A1)>=0;return false;},Af5:function(
aColumn,A1){if(!!this.Gh)return this.Gh.AMk(aColumn,A1)>=0;return false;},Hz:function(
){if(!!this.Gh)return this.Gh.Hz();return 0;},Aaz:function(){if(!!this.Gh)return this.
Gh.Aaz();return-1;},Qd:function(){if(!!this.Gh)return this.Gh.O2;return 0;},AYG:
function(H){this.AYV();if(!!this.Filter&&!!this.Gh){var P;for(P=0;P<this.Gh.Cj();
P=P+1){var AZl=true;var Av=this.Filter.AMy();var A9=this.Gh.Te(P);if(!!A9)while(
AZl&&!!Av){AZl=A9.BfT(Av);Av=this.Filter.AMC(Av);}else A.aa8("%s",((Wj+P.toFixed(
))+Anh)+this.Gh.Cj().toFixed());if(AZl){this.AkQ.Set(this.An9,this.Gh.Gn.Get(P));
this.An9=this.An9+1;}}}A.ow([this,this.Ajv],this);},AYV:function(){var P;for(P=0;
P<128;P=P+1)this.AkQ.Set(P,null);this.An9=0;},AD3:function(E){if(this.Gh===E)return;
if(!!this.Gh)A.zl([this,this.A1r],this.Gh,0);this.Gh=E;if(!!this.Gh){A.y_([this,
this.A1r],this.Gh,0);A.ow([this,this.A1r],this);}},A1r:function(H){A.ow([this,this.
AYG],this);},ZH:function(aIndex){if(!!this.Filter){if((aIndex<0)||(aIndex>=128))
return null;else return this.AkQ.Get(aIndex);}else if(!!this.Gh)return this.Gh.Te(
aIndex);A.aa8("%s",Aha+aIndex.toFixed());return null;},_Init:function(aArg){A.Device.
ITable._Init.call(this,aArg);(this.AkQ=[]).__proto__=C.Gv.AkQ;this.__proto__=C.Gv;
},_Mark:function(D){var B;A.Device.ITable._Mark.call(this,D);A.aaf(this.AkQ,D);if((
B=this.Gh)&&(B._cycle!=D))B._Mark(B._cycle=D);},_className:"DeviceSimulation::FilteredTable"
};C.A7_={Kr:null,AcJ:null,A1l:function(H){if(A._GetAutoObject(C.Abw).BhN()===false
)return;switch(A._GetAutoObject(A.Device.Device).SyncState){case 0:{A._GetAutoObject(
A.Device.Device).Abm(1);this.AcJ.Ap(true);}break;case 1:{A._GetAutoObject(A.Device.
Device).Abm(2);A._GetAutoObject(A.Device.Device).AqH(A._GetAutoObject(A.Device.Device
).Ao.Qd());this.Kr.FA(A._GetAutoObject(A.Device.Device).AeC*50);this.Kr.B1=A._GetAutoObject(
A.Device.Device).AeC;this.Kr.Ap(true);}break;case 2:{A._GetAutoObject(A.Device.Device
).Abm(3);this.AcJ.Ap(true);}break;case 3:{A._GetAutoObject(A.Device.Device).Abm(
4);A._GetAutoObject(A.Device.Device).AqH(A._GetAutoObject(A.Device.Device).Ao.Qd(
));this.Kr.FA(A._GetAutoObject(A.Device.Device).AeC*50);this.Kr.B1=A._GetAutoObject(
A.Device.Device).AeC;this.Kr.Ap(true);}break;case 4:{A._GetAutoObject(A.Device.Device
).Abm(5);this.AcJ.Ap(true);}break;case 5:A.ow([this,this.BcC],this);break;case 7:
case 6:break;default:A.aa8("%s%e",Ahb,A._GetAutoObject(A.Device.Device).SyncState
);}},BwU:function(H){this.AcJ.Ap(false);A.ow([this,this.A1l],this);},BxV:function(
H){switch(A._GetAutoObject(A.Device.Device).SyncState){case 0:case 6:case 7:{A._GetAutoObject(
A.Device.Device).Abm(0);A.ow([this,this.A1l],this);}break;default:;}},BcC:function(
H){this.AcJ.Ap(false);this.Kr.Ap(false);A._GetAutoObject(A.Device.Device).Abm(0);
},_Init:function(aArg){A.abm.F_._Init.call(this.Kr={I:this},0);A.Core.Timer._Init.
call(this.AcJ={I:this},0);this.__proto__=C.A7_;var B;this.Kr.IF(1);this.AcJ.QB(2000
);this.Kr.R5=[this,this.A1l];this.Kr.Q=[B=A._GetAutoObject(A.Device.Device),B.AQt
,B.AXJ];this.AcJ.M_=[this,this.BwU];A.hJ++;},_Done:function(){this.__proto__=null;
this.Kr._Done();this.AcJ._Done();A.hJ--;},_ReInit:function(){this.Kr._ReInit();this.
AcJ._ReInit();},_Mark:function(D){var B;if((B=this.Kr)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.AcJ)._cycle!=D)B._Mark(B._cycle=D);if((B=this.I)&&(B._cycle!=D))B.
_Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:"DeviceSimulation::SimulationHelperClass"
};C.Ard={_Init:function(){C.A7_._Init.call(this,0);},_variants:function(){return this;
},_this:null};C.AE6={A4:0,_Init:function(aArg){C.VH._Init.call(this,aArg);this.__proto__=
C.AE6;},_className:"DeviceSimulation::UInt64"};C.AAc={_Init:function(){C.PE._Init.
call(this,0);this.OnSetId(4);},_variants:function(){return this;},_this:null};C.
FactoryResetScope={Dw:function(){return 1;},_Init:function(aArg){var K=this.K;K.
__proto__=C.FactoryResetScope;this.Cz.Set(0,1);A.hJ++;},_Done:function(){var K=this.
K;K.__proto__=null;A.hJ--;},_ReInit:function(){},_Mark:function(D){},_variants:function(
){return this;},_className:"DeviceSimulation::FactoryResetScope"};C.Xa={Ac7:null
,CM:function(H){var K=this.K;A.aa8("%s",AbQ);K.Ac7.Ap(true);},E_:function(H){var
K=this.K;if(K.Ac7.Bw===true){K.Ac7.Ap(false);A.aa8("%s",Ue);}},BgZ:function(H){var
K=this.K;K.Ac7.Ap(false);A._GetAutoObject(A.kh.A0).AgL(A._GetAutoObject(A.Device.
Device).Av4);},_Init:function(aArg){var K=this.K;A.Core.Timer._Init.call(K.Ac7={
I:this},0);K.__proto__=C.Xa;this.AdL.G(Ani);K.Ac7.QB(1500);this.TR.R(Anj);this.TR.
X(true);this.AdL.At(A.zW(A.abi.APd));K.Ac7.M_=[this,K.BgZ];A.hJ++;},_Done:function(
){var K=this.K;K.__proto__=null;K.Ac7._Done();A.hJ--;},_ReInit:function(){var K=
this.K;K.Ac7._ReInit();},_Mark:function(D){var B;if((B=this.Ac7)._cycle!=D)B._Mark(
B._cycle=D);},_variants:function(){return this;},_className:"DeviceSimulation::BootScreen"
};C.AiN={AtG:A.jm,_Init:function(aArg){A.Device.AiN._Init.call(this,aArg);this.__proto__=
C.AiN;},_className:"DeviceSimulation::DataExportContext"};
C._Init=function(){C.ABX.__proto__=C.VH;C.String.__proto__=C.VH;C.Az8.__proto__=C.
VH;C.AE7.__proto__=C.VH;C.AE5.__proto__=C.VH;C.PE.__proto__=A.Device.ITable;C.Gv.
__proto__=A.Device.ITable;C.AE6.__proto__=C.VH;C.AiN.__proto__=A.Device.AiN;};C.
_ReInit=function(){var B;if((B=C.Abw._this))B._ReInit();if((B=C.Ao_._this))B._ReInit(
);if((B=C.AzP._this))B._ReInit();if((B=C.AvO._this))B._ReInit();if((B=C.Ard._this
))B._ReInit();if((B=C.AAc._this))B._ReInit();};C.DE=function(D){var B;if((B=C.Abw.
_this)&&(B._cycle!=D))B._Done(C.Abw._this=null);if((B=C.Ao_._this)&&(B._cycle!=D
))B._Done(C.Ao_._this=null);if((B=C.AzP._this)&&(B._cycle!=D))B._Done(C.AzP._this=
null);if((B=C.AvO._this)&&(B._cycle!=D))B._Done(C.AvO._this=null);if((B=C.Ard._this
)&&(B._cycle!=D))B._Done(C.Ard._this=null);if((B=C.AAc._this)&&(B._cycle!=D))B._Done(
C.AAc._this=null);};return C;})();

/* VitalControl demonstration application, © Urban GmbH & Co.KG 2023 */