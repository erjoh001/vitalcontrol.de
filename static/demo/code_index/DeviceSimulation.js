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
var N1="INFO: Device.StopScan() called.";var CJ="V0.";var Fn=".";var LW="\n";var
OL="Temp: ";var KH="Battery: ";var OM="%%";var Ne="Selected animal with row index";
var ON="1,256,2,2048,4096,8192,4,8,16,128,64,32,1024,262144,16384,131072,512";var
Ss="1,2";var T$="0,1,2";var Zf="3900,3950,4000";var Wb="4050,4100,4150";var IM="Read only";
var Ua="Unknown data export type: ";var Zg="Unhandled Device::DataExportType: ";
var Wc="0,2";var Zh="650,150";var Ub="800,200";var Zi="40000,4000";var Zj="32,7,34,18,23,14";
var Uc="Simulate Scan";var Wd="BNR15;LOM;GEB_DATR;RASSE;GESCHL_R;GEB_VERL;VERBLEIB;MEHRLADR;LOM_MUT\n";
var QV="%d.%m.%Y";var Zk="1";var OO="2";var PK="Unknown gender: ";var Ud="text/csv";
var Zl="National-ID-Animal;Farm-ID-Animal;Transponder-ID;DateOfBirth;Sex;BirthWeight-Kg\n";
var We="hit-geburt-%d-%m-%Y_%H-%M.csv";var Zm="animals-%d-%m-%Y_%H-%M.csv";var Zn=
"hit-zugang-%d-%m-%Y_%H-%M.csv";var Wf="herde-zugang-%d-%m-%Y_%H-%M.csv";var Wg=
"M";var St="F";var Zo="?";var Zp="%Y-%m-%d";var AbO="BNR15;LOM;ZUGA_DAT\n";var Su=
"Ohrnummer;Geburtsdatum;Geschlecht;Nutzung;Rasse;Zugangsdatum;Transponder\n";var
AbP="ERROR: Cannot start transaction";var AeO="Nested transactions are not allowed.";
var Zq="Transaction not opened.";var Wh="Wrong transaction ID.";var Wi="Unhandled TableId:";
var AeP="Maximum number of rows reached.";var AeQ="Animal row not found in DeviceSimulation::AnimalTableData. NaisId";
var JT="10";var AeR="20";var Li="30";var Ag_="31";var Ane="32";var N2="Severe: filter set when inserting row into table: ";
var Wj="ERROR: Row not found with index [";var Anf="] while Rows Count = ";var Ag$=
"ERROR: trying to access an inexistent row with Index=";var Aha="Invalid Device::SyncState";
var AbQ="Forwarding to home screen after 500 milliseconds ...";var Ue="Forwarding to home screen canceled...";
var Ang=[0,58,240,208];var Anh="VitalControl\nstarting up \u2026";
C.Table={Gv:null,Init:function(aArg){var K=this.K;A.y_([this,this.Ajw],K.Gv,0);},
CE:function(Ab,AX){var K=this.K;return K.Gv.CE(Ab,AX);},Va:function(Ab,AX){var K=
this.K;return K.Gv.Va(Ab,AX);},HW:function(Ab,AX){var K=this.K;return K.Gv.HW(Ab
,AX);},OnSetId:function(E){var K=this.K;if(this.Id===E)return;this.Id=E;K.Gv.OnSetId(
E);},Cj:function(){var K=this.K;return K.Gv.Cj();},Bl:function(E){var K=this.K;A.
Device.ITable.Bl.call(this,E);K.Gv.Bl(E);},Vb:function(Ab,AX){var K=this.K;return K.
Gv.Vb(Ab,AX);},RQ:function(Ab,AX){var K=this.K;return K.Gv.RQ(Ab,AX);},Op:function(
){var K=this.K;return K.Gv.Op();},Or:function(AnI){var K=this.K;return K.Gv.Or(AnI
);},XV:function(){var K=this.K;return K.Gv.XV();},YY:function(Ab,AX,CX){var K=this.
K;return K.Gv.YY(Ab,AX,CX);},G$:function(Ab,AX,CX){var K=this.K;return K.Gv.G$(Ab
,AX,CX);},YX:function(Ab,AX,CX){var K=this.K;return K.Gv.YX(Ab,AX,CX);},Nb:function(
Ab,AX,CX){var K=this.K;return K.Gv.Nb(Ab,AX,CX);},YW:function(Ab,AX,CX){var K=this.
K;return K.Gv.YW(Ab,AX,CX);},K4:function(aColumn,A1){var K=this.K;return K.Gv.K4(
aColumn,A1);},LD:function(Ab,AX){var K=this.K;return K.Gv.LD(Ab,AX);},TQ:function(
Ab,AX,CX){var K=this.K;return K.Gv.TQ(Ab,AX,CX);},Ai0:function(aColumn,A1){var K=
this.K;return K.Gv.Ai0(aColumn,A1);},G_:function(){var K=this.K;return K.Gv.G_();
},AiX:function(aColumn,A1){var K=this.K;return K.Gv.AiX(aColumn,A1);},Af4:function(
aColumn,A1){var K=this.K;return K.Gv.Af4(aColumn,A1);},Hz:function(){var K=this.
K;return K.Gv.Hz();},Aaz:function(){var K=this.K;return K.Gv.Aaz();},Qd:function(
){var K=this.K;return K.Gv.Qd();},_Init:function(aArg){var K=this.K;C.Gv._Init.call(
K.Gv={I:this},0);K.__proto__=C.Table;K.Init.call(this,aArg);A.hJ++;},_Done:function(
){var K=this.K;K.__proto__=null;K.Gv._Done();A.hJ--;},_ReInit:function(){var K=this.
K;K.Gv._ReInit();},_Mark:function(D){var B;if((B=this.Gv)._cycle!=D)B._Mark(B._cycle=
D);},_variants:function(){return this;},_className:"DeviceSimulation::Table"};C.
AEr={SF:A.aan(42,null,null),CE:function(aColumn){var B;this.ZA(aColumn);var An=(
C.ABY.isPrototypeOf(B=this.SF.Get(aColumn))?B:null);if(!!An)return An.A4;return 0;
},Va:function(aColumn){var B;this.ZA(aColumn);var An=(C.String.isPrototypeOf(B=this.
SF.Get(aColumn))?B:null);if(!!An)return An.A4;return A.jm;},HW:function(aColumn){
var B;this.ZA(aColumn);var An=(C.Az9.isPrototypeOf(B=this.SF.Get(aColumn))?B:null
);if(!!An)return An.A4;else A.aa8("%s",(B$+aColumn.toFixed())+BH);return false;}
,G$:function(aColumn,A1){this.ZA(aColumn);var An=A._NewObject(C.ABY,0);An.A4=A1;
this.SF.Set(aColumn,An);return true;},YW:function(aColumn,A1){this.ZA(aColumn);var
An=A._NewObject(C.String,0);An.A4=A1;this.SF.Set(aColumn,An);return true;},Nb:function(
aColumn,A1){this.ZA(aColumn);var An=A._NewObject(C.Az9,0);An.A4=A1;this.SF.Set(aColumn
,An);return true;},ZA:function(aColumn){if((aColumn<0)||(aColumn>=42))throw new Error((
EV+aColumn.toFixed())+GT);},BfU:function(AL){if(!!(A.Device.Int32FilterCriterion.
isPrototypeOf(AL)?AL:null))return this.AHK(this.CE(AL.ET),AL.Operator,(A.Device.
Int32FilterCriterion.isPrototypeOf(AL)?AL:null).A4);else if(!!(A.Device.UInt32FilterCriterion.
isPrototypeOf(AL)?AL:null))return this.Buz(this.RQ(AL.ET),AL.Operator,(A.Device.
UInt32FilterCriterion.isPrototypeOf(AL)?AL:null).A4);else if(!!(A.Device.StringFilterCriterion.
isPrototypeOf(AL)?AL:null))return this.Buy(this.Va(AL.ET),AL.Operator,(A.Device.
StringFilterCriterion.isPrototypeOf(AL)?AL:null).A4);else if(!!(A.Device.BoolFilterCriterion.
isPrototypeOf(AL)?AL:null))return this.Bux(this.HW(AL.ET),AL.Operator,(A.Device.
BoolFilterCriterion.isPrototypeOf(AL)?AL:null).A4);else if(!!(A.Device.AnimalTypeFilterCriterion.
isPrototypeOf(AL)?AL:null))return this.AHK(this.CE(AL.ET),AL.Operator,(A.Device.
AnimalTypeFilterCriterion.isPrototypeOf(AL)?AL:null).A4);else if(!!(A.Device.GenderFilterCriterion.
isPrototypeOf(AL)?AL:null))return this.AHK(this.CE(AL.ET),AL.Operator,(A.Device.
GenderFilterCriterion.isPrototypeOf(AL)?AL:null).A4);else if(!!(A.Device.AssessmentFilterCriterion.
isPrototypeOf(AL)?AL:null))return this.BuB(this.Vb(AL.ET),AL.Operator,(((B=(A.Device.
AssessmentFilterCriterion.isPrototypeOf(AL)?AL:null).A4)<0)?B+0x100000000:B)&0xFF
);else if(!!(A.Device.UInt64FilterCriterion.isPrototypeOf(AL)?AL:null))return this.
BuA(this.LD(AL.ET),AL.Operator,(A.Device.UInt64FilterCriterion.isPrototypeOf(AL)?
AL:null).A4);else if(!!(A.Device.WhereAboutsFilterCriterion.isPrototypeOf(AL)?AL:
null))return this.AHK(this.CE(AL.ET),AL.Operator,(A.Device.WhereAboutsFilterCriterion.
isPrototypeOf(AL)?AL:null).A4);else throw new Error(Jt);},AHK:function(H3,EE,H4){
switch(EE){case 0:return H3===H4;case 2:return H3>H4;case 3:return H3<H4;case 4:
return H3.toFixed().indexOf(H4.toFixed(),0)>=0;case 5:return H3!==H4;default:throw new
Error(IL+EE.toFixed());}},Buy:function(H3,EE,H4){switch(EE){case 0:return H3===H4;
case 2:return H3>H4;case 3:return H3<H4;case 4:{A.aa8("%s%e%s%i",H3,EE,H4,H3.indexOf(
H4,0));return H3.indexOf(H4,0)>=0;}case 5:return H3!==H4;default:throw new Error(
IL+EE.toFixed());}},Bux:function(H3,EE,H4){switch(EE){case 0:return H3===H4;case
2:return false;case 3:return false;case 4:return false;case 5:return H3!==H4;default:
throw new Error(IL+EE.toFixed());}},Vb:function(aColumn){var B;this.ZA(aColumn);
var An=(C.AE8.isPrototypeOf(B=this.SF.Get(aColumn))?B:null);if(!!An)return An.A4;
return 0;},YY:function(aColumn,A1){this.ZA(aColumn);var An=A._NewObject(C.AE8,0);
An.A4=A1;this.SF.Set(aColumn,An);return true;},BuB:function(H3,EE,H4){switch(EE){
case 0:return H3===H4;case 2:return H3>H4;case 3:return H3<H4;case 5:return H3!==
H4;default:throw new Error(IL+EE.toFixed());}},RQ:function(aColumn){var B;this.ZA(
aColumn);var An=(C.AE6.isPrototypeOf(B=this.SF.Get(aColumn))?B:null);if(!!An)return An.
A4;return 0;},YX:function(aColumn,A1){this.ZA(aColumn);var An=A._NewObject(C.AE6
,0);An.A4=A1;this.SF.Set(aColumn,An);return true;},Buz:function(H3,EE,H4){switch(
EE){case 0:return H3===H4;case 2:return H3>H4;case 3:return H3<H4;case 5:return H3
!==H4;default:throw new Error(IL+EE.toFixed());}},LD:function(aColumn){var B;this.
ZA(aColumn);var An=(C.AE7.isPrototypeOf(B=this.SF.Get(aColumn))?B:null);if(!!An)
return An.A4;return 0;},TQ:function(aColumn,A1){this.ZA(aColumn);var An=A._NewObject(
C.AE7,0);An.A4=A1;this.SF.Set(aColumn,An);return true;},BuA:function(H3,EE,H4){switch(
EE){case 0:return H3===H4;case 2:return H3>H4;case 3:return H3<H4;case 5:return H3
!==H4;default:throw new Error(IL+EE.toFixed());}},_Init:function(aArg){(this.SF=[
]).__proto__=C.AEr.SF;this.__proto__=C.AEr;A.hJ++;},_Done:function(){this.__proto__=
null;A.hJ--;},_ReInit:function(){},_Mark:function(D){var B;A.aaf(this.SF,D);if((
B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:
"DeviceSimulation::RowData"};C.VH={_Init:function(aArg){this.__proto__=C.VH;A.hJ++;
},_Done:function(){this.__proto__=null;A.hJ--;},_ReInit:function(){},_Mark:function(
D){var B;if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:
null,_className:"DeviceSimulation::NativeType"};C.ABY={A4:0,_Init:function(aArg){
C.VH._Init.call(this,aArg);this.__proto__=C.ABY;},_className:"DeviceSimulation::Int32"
};C.String={A4:A.jm,_Init:function(aArg){C.VH._Init.call(this,aArg);this.__proto__=
C.String;},_className:"DeviceSimulation::String"};C.Az9={A4:false,_Init:function(
aArg){C.VH._Init.call(this,aArg);this.__proto__=C.Az9;},_className:"DeviceSimulation::Bool"
};C.DeviceClass={AsT:null,AHQ:null,Ah$:null,ZY:null,C3:function(){var K=this.K;K.
A72.call(this,this);},Init:function(aArg){var K=this.K;var B;this.YB(3);A.za([this
,K.Azl],[B=K.AsT,B.A52,B.AQ3],0);this.UpdateAutoActions(OK);K.A72.call(this,this
);this.Aq2(this);this.Aq3(this);this.AqY(this);this.Aq0(this);this.AqZ(this);var
languageMin=0;var languageMax=17;var languageValue=-1;{if(typeof ewLanguage==='number'&&
Number.isInteger(ewLanguage)&&ewLanguage>=languageMin&&ewLanguage<languageMax){languageValue=
ewLanguage;}}if(languageValue>=0)this.AmG(languageValue);A.ow([this,K.ARt],this);
},YB:function(E){this.UpdateActiveScreen(E);},AuW:function(E){this.UpdateBatteryChargeState(
E);},AC0:function(E){this.UpdateChargeActive(E);},AqC:function(E){this.UpdateScanState(
E);},Avi:function(E){this.UpdateMeasureState(E);},Avs:function(E){this.UpdateTempValue(
E);},AmG:function(E){this.UpdateLanguage(E);},Avt:function(E){this.UpdateTemperatureUnit(
E);},ACY:function(E){this.UpdateBrightness(E);},ADu:function(E){this.UpdateMonitoring(
E);},Av1:function(){var B;if(A._GetAutoObject(C.Abw).AvY){this.UpdateMeasureState(
1);A._GetAutoObject(A.Device.Helper).AI4(this);}},AgZ:function(){var B;A._GetAutoObject(
A.Device.Helper).Sh.Av3(this);this.UpdateMeasureState(0);},Aet:function(){var K=
this.K;A.aa8("%s",PJ);this.UpdateScanState(1);A.ow([this,K.Azl],this);},Am1:function(
){var K=this.K;var B;A.aa8("%s",N1);K.Ah$.Av3(this);this.UpdateScanState(0);},SetSystemTime:
function(Ahq){},AvX:function(){A.Device.DeviceClass.A9r.call(this);this.YB(1);},
AEo:function(){A.Device.DeviceClass.A9p.call(this);this.YB(2);},Cm:function(E){this.
UpdateOverlayMenu(E);},Avy:function(E){this.UpdateUnderTemp(E);},Abm:function(E){
this.UpdateSyncState(E);},ABa:function(){var aString;aString=((((((((((CJ+A.aaC(
0,9).toFixed())+Fn)+A.aaC(0,9).toFixed())+LW)+OL)+A.aaC(30,90).toFixed())+A.z2(A.
abg.AEV))+LW)+KH)+A.aaC(1,100).toFixed())+OM;return aString;},PopupStateChanged:
function(Kn,Ae){var Afx=A._NewObject(C.PopupContext,0);Afx.Id=Kn;Afx.GO=Ae;this.
AmR.Trigger(Afx,false);},ADX:function(E){this.UpdateVibrationOnKeypressEnabled(E
);},Ad9:function(E){this.UpdateVibrationOn(E);},Avp:function(E){this.UpdateRatingMode(
E);},Ad1:function(E){this.UpdateFlashLightOn(E);},VO:function(E){this.UpdateTopLightOn(
E);},YI:function(E){this.UpdateRGBTopLight(E);},AuV:function(E){this.UpdateAutoRegistrationMode(
E);},AqD:function(E){this.UpdateScanTransponder(E.Id,E.TransponderType,E.TransponderProtocol
);},Pz:function(E){this.UpdateDigitsID(E);},Qz:function(E){this.UpdateOffsetID(E
);},AD1:function(E){this.UpdateWeightValue(E);},Avg:function(E){this.UpdateMassUnit(
E);},Aqe:function(E){A.Device.DeviceClass.A9l.call(this,E);this.UpdateActiveActions(
E);},Aqf:function(E){A.Device.DeviceClass.A9m.call(this,E);this.UpdateActiveActionsOrder(
E);},Abc:function(E){A.Device.DeviceClass.A9n.call(this,E);this.UpdateAutoActions(
E);},AEP:function(){var K=this.K;this.UpdateMeasureState(1);K.BxO.call(this,this
);},Arf:function(){var K=this.K;var B;K.ZY.Av3(this);this.UpdateMeasureState(0);
},DW:function(E){this.UpdateAnimalType(E);},Avz:function(E){this.UpdateWeightRecordingMode(
E);},ADC:function(E){this.UpdatePredictedTempValue(E);},Se:function(L1){A.aa8("%s%i"
,Ne,L1);},AC6:function(E){this.UpdateDemoMode(E);},ACP:function(E){this.UpdateAgeRegistration(
E);},AvA:function(E){this.UpdateWeightRecordingScope(E);},JM:function(E){this.UpdateGender(
E);},Aqu:function(E){this.UpdateIDLastUsedMale(E);},Aqt:function(E){this.UpdateIDLastUsedFemale(
E);},Abb:function(E){this.UpdateAnimalListContent(E);},ACR:function(E){this.UpdateAlarmListAction(
E);},AC9:function(E){this.UpdateFlashLightInMeasureState(E);},AdZ:function(E){this.
UpdateAnimalInfoContent(E);},AD0:function(E){this.UpdateWatchListAction(E);},AC_:
function(E){this.UpdateFreshCowListAction(E);},AqY:function(H){this.Aqe(15359);this.
Aqf(ON);},Aq0:function(H){this.Abc(Ss);},AuT:function(E){this.UpdateAnimalTypesString(
E);},AqE:function(E){this.UpdateTemperaturesHighString(E);},AqF:function(E){this.
UpdateTemperaturesLowString(E);},Aq2:function(H){this.AuT(T$);this.AqF(Zf);this.
AqE(Wb);this.Avy(3600);},ADx:function(E){this.UpdateNoTransponderListAction(E);}
,Avb:function(E){this.UpdateFreshCowsHideMeasured(E);},Aqy:function(E){this.UpdateNaisIdLastUsedMale(
E);},Aqx:function(E){this.UpdateNaisIdLastUsedFemale(E);},Avl:function(E){this.UpdateNaisIdIncrementMale(
E);},Avk:function(E){this.UpdateNaisIdIncrementFemale(E);},UpdateFirmware:function(
){A.Device.DeviceClass.A9s.call(this);A._GetAutoObject(A.kh.A0).BZ(61);},AmC:function(
E){this.UpdateBootloaderMessage(E);},ACN:function(E){this.UpdateActionListAction(
E);},AuR:function(E){this.UpdateActionListHideMeasured(E);},TC:function(E){this.
UpdateAnimalIdGenerationMethod(E);},Au5:function(E){this.UpdateDirectionOfCountingFemale(
E);},Au6:function(E){this.UpdateDirectionOfCountingMale(E);},Au7:function(E){this.
UpdateDirectionOfCountingUnisex(E);},Aqv:function(E){this.UpdateIDLastUsedUnisex(
E);},Aqz:function(E){this.UpdateNaisIdLastUsedUnisex(E);},Avm:function(E){this.UpdateNaisIdIncrementUnisex(
E);},AjC:function(E){this.UpdateEartagNrAssignmentMode(E);},NP:function(E){this.
UpdateBreed(E);},ADr:function(E){throw new Error(IM);},ADl:function(E){throw new
Error(IM);},ADU:function(E){throw new Error(IM);},ACU:function(E){throw new Error(
IM);},AC7:function(E){this.UpdateDryCowListAction(E);},AHH:function(AX9){var HS;
switch(AX9){case 15:HS=false;break;default:HS=true;}return HS;},ADw:function(E){
this.UpdateNoNaisIdListAction(E);},ACT:function(E){this.UpdateBirthListView(E);}
,ADV:function(E){this.UpdateTransferProgress(E);},AqG:function(E){this.UpdateTransferTarget(
E);},Are:function(){var B;A.ow([B=A._GetAutoObject(C.Arc),B.BcD],this);},Avo:function(
E){this.UpdatePremisesID(E);},Avj:function(E){this.UpdateMotherSelectionDriedOffFilter(
E);},AC$:function(E){this.UpdateFreshCowSpan(E);},ADW:function(E){this.UpdateUSBState(
E);},AmZ:function(Ahk){var K=this.K;var result=A._NewObject(C.AiO,0);result.AAB=
Ahk;result.FileName=K.Bfe.call(this,Ahk);switch(Ahk){case 0:K.BuL.call(this,result
);break;case 1:K.BuH.call(this,result);break;case 2:K.BuM.call(this,result);break;
case 3:K.BuK.call(this,result);break;default:throw new Error(Ua+Ahk.toFixed());}
K.AHQ=result;return result;},ApV:function(){return true;},Apl:function(Ni){var K=
this.K;switch(Ni.AAB){case 0:A._GetAutoObject(A.Device.Device).A5(72,true,A.jm,0
,[this,K.A0t]);break;case 1:A._GetAutoObject(A.Device.Device).A5(90,true,A.jm,0,[
this,K.A0t]);break;case 2:case 3:A._GetAutoObject(A.Device.Device).A5(100,true,A.
jm,0,[this,K.A0t]);break;default:throw new Error(Zg+Ni.AAB.toFixed());}},ADI:function(
E){throw new Error(IM);},AuS:function(E){this.UpdateAnimalIdAutoGenerationMethod(
E);},ADK:function(E){this.UpdateShutdownTimer(E);},Aql:function(E){this.UpdateAnimalListInfoItemMode(
E);},Aq3:function(H){this.AuU(Wc);this.AqK(Zh);this.AqJ(Ub);this.AqI(Ub);this.AqL(
Zi);},AqJ:function(E){this.UpdateWeightGainsHighString(E);},AqK:function(E){this.
UpdateWeightGainsLowString(E);},AuU:function(E){this.UpdateAnimalTypesWeightGainsString(
E);},AqI:function(E){this.UpdateWeightGainsAverageString(E);},AqL:function(E){this.
UpdateWeightValueBirthString(E);},Au8:function(E){this.UpdateEvaluationAnimalType(
E);},Avr:function(E){this.UpdateStartScreen(E);},AB0:function(){return 1;},AB1:function(
){return 1;},ADq:function(E){this.UpdateMaximumAgeNewOnFarm(E);},Avx:function(E){
this.UpdateTransponderAssignmentIdChangeMethod(E);},AC5:function(E){this.UpdateDataExportDestination(
E);},M_:function(E){this.UpdateWhereAbouts(E);},Aqh:function(E){this.UpdateActiveMassRecordingFields(
E);},Aqi:function(E){this.UpdateActiveMassRecordingFieldsOrder(E);},AqZ:function(
H){this.Aqh(A.jm);this.Aqi(Zj);},ADo:function(E){this.UpdateMassRecordingDateOfBirthMandatory(
E);},BxB:function(H){switch(this.Ku){case 34:case 35:case 32:case 50:case 55:case
63:case 91:{this.UpdateScanTransponder(12310020,1,0);this.UpdateScanState(2);}break;
case 15:break;default:this.UpdateScanState(4);}},Azl:function(H){var K=this.K;var
B;if((this.ScanState===1)&&K.AsT.AEH)K.Ah$.AEO(this);A.aa8("%s",Uc);},BxO:function(
H){var K=this.K;var B;if((this.MeasureState===1)&&K.AsT.AvY)K.ZY.AEO(this);},Byp:
function(H){this.UpdateMeasureState(3);},ARt:function(H){var K=this.K;var B;A.za([
B=A._GetAutoObject(A.Device.Helper),B.AI4],[B=K.AsT,B.A53,B.AQ4],0);this.Rt.AC4(
A._GetAutoObject(A.Device.Helper).A34(8));this.R3.AC4(A._GetAutoObject(A.Device.
Helper).A34(8));},A72:function(H){var Ax0=A._NewObject(A.Device.Av0,0);Ax0.OnSetTimestamp(
1692954318);Ax0.ADm(1);Ax0.ADt(0);Ax0.ADF(0);this.R3=Ax0;var Axx=A._NewObject(A.
Device.Av0,0);Axx.OnSetTimestamp(1692954318);Axx.ADm(1);Axx.ADt(0);Axx.ADF(4);this.
Rt=Axx;var Ak0=A._NewObject(A.Device.At2,0);Ak0.ADj(1);Ak0.ADk(0);Ak0.ADi(0);Ak0.
ADS(1);Ak0.ADT(0);Ak0.ADR(0);Ak0.OnSetTimestamp(1692954318);this.Qu=Ak0;var Alq=
A._NewObject(A.Device.At2,0);Alq.ADj(1);Alq.ADk(0);Alq.ADi(0);Alq.ADS(1);Alq.ADT(
0);Alq.ADR(0);Alq.OnSetTimestamp(1692954318);this.Sj=Alq;this.AgW=A.z2(A.abg.Unknown
);},Bu7:function(aFilename,aMimeType,aContent){{var bb=new Blob([aContent],{type:
aMimeType});var a=document.createElement('a');a.download=aFilename;a.href=window.
URL.createObjectURL(bb);a.click();}},BuL:function(Ni){var K=this.K;var B;var SE=
Wd;var B4=A._NewObject(A.Device.Animal,0);var P;var AcI=0;for(P=0;P<A._GetAutoObject(
A.Device.Device).Ao.Cj();P++){B4.EK(P,A._GetAutoObject(A.Device.Device).Ao);if(B4.
IsRegistrationNoticePending&&(B4.NaisId>0)){SE=SE+(((((((((((((((((K.AhL.call(this
,A._GetAutoObject(A.Device.Device).YN)+String.fromCharCode(0x3B))+K.AhL.call(this
,B4.NaisId))+String.fromCharCode(0x3B))+K.AIa.call(this,B4.DateOfBirth))+String.
fromCharCode(0x3B))+K.A$G.call(this,B4.Breed))+String.fromCharCode(0x3B))+K.A$F.
call(this,B4.Gender))+String.fromCharCode(0x3B))+K.Bva.call(this,B4.EaseOfDelivery
))+String.fromCharCode(0x3B))+K.A$H.call(this,B4.WhereAbouts))+String.fromCharCode(
0x3B))+K.Bvd.call(this,B4.BirthType))+String.fromCharCode(0x3B))+K.AhL.call(this
,B4.NaisIdMother))+LW);AcI++;}}Ni.AtE=SE;Ni.AEs=AcI;Ni.Am2=true;},AhL:function(Q0
){if(!Q0)return A.jm;return Q0.toFixed();},AIa:function(AX8){var Aq=A._NewObject(
A.Core.Bu,0);Aq.Initialize(AX8);return Aq.Format(QV);},A$G:function(Ab3){if(!Ab3
)return A.jm;return A._GetAutoObject(A.Device.Converter).A2H(Ab3).toFixed();},A$F:
function(LZ){var result=A.jm;switch(LZ){case 0:result=Zk;break;case 1:result=OO;
break;case 2:result=A.jm;break;default:A.aa8("%s",PK+LZ.toFixed());}return result;
},Bva:function(AG5){if(!AG5)return A.jm;return AG5.toFixed();},A$H:function(Ae1){
if(!Ae1)return A.jm;return Ae1.toFixed();},Bvd:function(ArW){return(ArW+1).toFixed(
);},A0t:function(H){var K=this.K;var Ar=(A.Device.PopupContext.isPrototypeOf(H)?
H:null);if(!!Ar&&(Ar.PopupState===7))K.Bu7.call(this,K.AHQ.FileName,Ud,K.AHQ.AtE
);},BuH:function(Ni){var K=this.K;var B;var SE=Zl;var B4=A._NewObject(A.Device.Animal
,0);var P;var AcI=0;for(P=0;P<A._GetAutoObject(A.Device.Device).Ao.Cj();P++){var
Axt=A.jm;if(B4.ApU())Axt=K.Bvf.call(this,B4.FirstBodyWeight);B4.EK(P,A._GetAutoObject(
A.Device.Device).Ao);SE=SE+(((((((((((K.AhL.call(this,B4.NaisId)+String.fromCharCode(
0x3B))+K.Bvb.call(this,B4.VisualId))+String.fromCharCode(0x3B))+K.AhL.call(this,
B4.TransponderId))+String.fromCharCode(0x3B))+K.Bu$.call(this,B4.DateOfBirth))+String.
fromCharCode(0x3B))+K.Bve.call(this,B4.Gender))+String.fromCharCode(0x3B))+Axt)+
LW);AcI++;}Ni.AtE=SE;Ni.AEs=AcI;Ni.Am2=true;},Bfe:function(Ahk){var AxZ=A.jm;var
Ad=A._NewObject(A.Core.Bu,0);Ad.Initialize(A._GetAutoObject(A.Device.Helper).DB(
));switch(Ahk){case 0:AxZ=Ad.Format(We);break;case 1:AxZ=Ad.Format(Zm);break;case
2:AxZ=Ad.Format(Zn);break;case 3:AxZ=Ad.Format(Wf);break;default:throw new Error(
Ua+Ahk.toFixed());}return AxZ;},Bvb:function(Q0){return Q0.toFixed();},Bve:function(
LZ){var result=A.jm;switch(LZ){case 0:result=Wg;break;case 1:result=St;break;case
2:result=Zo;break;default:A.aa8("%s",PK+LZ.toFixed());}return result;},Bvf:function(
N5){if(N5<=0)return A.jm;return A._GetAutoObject(A.Device.Converter).Anc(N5);},Bu$:
function(AX8){var Aq=A._NewObject(A.Core.Bu,0);Aq.Initialize(AX8);return Aq.Format(
Zp);},BuM:function(Ni){var K=this.K;var B;var SE=AbO;var B4=A._NewObject(A.Device.
Animal,0);var P;var AcI=0;for(P=0;P<A._GetAutoObject(A.Device.Device).Ao.Cj();P++
){B4.EK(P,A._GetAutoObject(A.Device.Device).Ao);if(B4.IsRegistrationNoticePending&&(
B4.NaisId>0)){SE=SE+(((((K.AhL.call(this,A._GetAutoObject(A.Device.Device).YN)+String.
fromCharCode(0x3B))+K.AhL.call(this,B4.NaisId))+String.fromCharCode(0x3B))+K.AIa.
call(this,A._GetAutoObject(A.Device.Helper).DB()))+LW);AcI++;}}Ni.AtE=SE;Ni.AEs=
AcI;Ni.Am2=true;},BuK:function(Ni){var K=this.K;var B;var SE=Su;var B4=A._NewObject(
A.Device.Animal,0);var P;var AcI=0;for(P=0;P<A._GetAutoObject(A.Device.Device).Ao.
Cj();P++){B4.EK(P,A._GetAutoObject(A.Device.Device).Ao);if(B4.IsRegistrationNoticePending&&(
B4.NaisId>0)){SE=SE+(((((((((((((K.AhL.call(this,B4.NaisId)+String.fromCharCode(
0x3B))+K.AIa.call(this,B4.DateOfBirth))+String.fromCharCode(0x3B))+K.A$F.call(this
,B4.Gender))+String.fromCharCode(0x3B))+K.A$H.call(this,B4.WhereAbouts))+String.
fromCharCode(0x3B))+K.A$G.call(this,B4.Breed))+String.fromCharCode(0x3B))+K.AIa.
call(this,A._GetAutoObject(A.Device.Helper).DB()))+String.fromCharCode(0x3B))+K.
AhL.call(this,B4.TransponderId))+LW);AcI++;}}Ni.AtE=SE;Ni.AEs=AcI;Ni.Am2=true;},
_Init:function(aArg){var K=this.K;A.abm.F_._Init.call(K.Ah$={I:this},0);A.abm.F_.
_Init.call(K.ZY={I:this},0);K.__proto__=C.DeviceClass;this.AuW(100);this.AmG(1);
this.Aqu(200);this.Aqt(100);this.Aqy(276000912345678);this.Aqx(276000923456789);
this.Aqv(500);this.Aqz(276000901234567);this.NP(1);K.Ah$.IF(1);K.Ah$.FA(1000);K.
ZY.VN(0);K.ZY.IF(1);K.ZY.FA(750);K.ZY.B1=50000;K.Ah$.R5=[this,K.BxB];K.AsT=A._GetAutoObject(
C.Abw);K.ZY.R5=[this,K.Byp];K.ZY.Q=[this,this.ACL,this.AGR];K.Init.call(this,aArg
);A.hJ++;},_Done:function(){var K=this.K;K.__proto__=null;K.Ah$._Done();K.ZY._Done(
);A.hJ--;},_ReInit:function(){var K=this.K;K.Ah$._ReInit();K.ZY._ReInit();K.C3.call(
this);},_Mark:function(D){var B;if((B=this.AsT)&&(B._cycle!=D))B._Mark(B._cycle=
D);if((B=this.AHQ)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Ah$)._cycle!=D)
B._Mark(B._cycle=D);if((B=this.ZY)._cycle!=D)B._Mark(B._cycle=D);},_variants:function(
){return A.abq.DeviceClass._variants();},_className:"DeviceSimulation::DeviceClass"
};C.AE8={A4:0,_Init:function(aArg){C.VH._Init.call(this,aArg);this.__proto__=C.AE8;
},_className:"DeviceSimulation::UInt8"};C.AE6={A4:0,_Init:function(aArg){C.VH._Init.
call(this,aArg);this.__proto__=C.AE6;},_className:"DeviceSimulation::UInt32"};C.
HelperClass={A1q:0,ADL:function(E){var K=this.K;K.A1q=K.A1q+(E-this.DB());A.Device.
HelperClass.A9o.call(this,E);},DB:function(){var K=this.K;return A.Device.HelperClass.
A9k.call(this)+K.A1q;},_Init:function(aArg){var K=this.K;K.__proto__=C.HelperClass;
A.hJ++;},_Done:function(){var K=this.K;K.__proto__=null;A.hJ--;},_ReInit:function(
){},_Mark:function(D){},_variants:function(){return this;},_className:"DeviceSimulation::HelperClass"
};C.A79={AvY:false,AEH:false,AQ3:function(E){if(this.AEH===E)return;this.AEH=E;A.
aat([this,this.A52,this.AQ3],0);},A52:function(){return this.AEH;},AQ4:function(
E){if(this.AvY===E)return;this.AvY=E;A.aat([this,this.A53,this.AQ4],0);},A53:function(
){return this.AvY;},BhO:function(){return true;},_Init:function(aArg){this.__proto__=
C.A79;A.hJ++;},_Done:function(){this.__proto__=null;A.hJ--;},_ReInit:function(){
},_Mark:function(D){var B;if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null
,_cycle:0,_observers:null,_className:"DeviceSimulation::SimulationConfigClass"};
C.Abw={_Init:function(){C.A79._Init.call(this,0);},_variants:function(){return A.
abq.Abw._variants();},_this:null};C.PopupContext={GO:1,Id:0,_Init:function(aArg){
this.__proto__=C.PopupContext;A.hJ++;},_Done:function(){this.__proto__=null;A.hJ--;
},_ReInit:function(){},_Mark:function(D){var B;if((B=this.I)&&(B._cycle!=D))B._Mark(
B._cycle=D);},I:null,_cycle:0,_observers:null,_className:"DeviceSimulation::PopupContext"
};C.Rating={Cr:function(AF){var Hs=A.Device.Rating.A9q.call(this,AF);if(Hs){var Q5=
A._GetAutoObject(A.Device.Device).Ao;var Ab=A._GetAutoObject(A.Device.Device).Ao.
K4(0,this.AnimalId);if(Ab!==-1){var Jg=Q5.Op();if(Jg<=0)A.aa8("%s",AbP);else{var
B4=A._NewObject(A.Device.Animal,0);B4.EK(Ab,Q5);if((this.Temperature>0)&&(B4.TimestampLastTemperature<
this.Timestamp)){Q5.A71(Ab,5,this.Temperature);Q5.Aj1(Ab,17,this.RatingTemperature
);Q5.Abu(Ab,30,this.Timestamp);}if(this.BodyWeight>0){if(B4.TimestampLastWeighing<=
this.Timestamp){Q5.AR3(Ab,18,this.BodyWeight);Q5.Abu(Ab,19,this.Timestamp);}if(!
B4.TimestampFirstWeighing||(B4.TimestampFirstWeighing>=this.Timestamp)){Q5.AR3(Ab
,23,this.BodyWeight);Q5.Abu(Ab,24,this.Timestamp);Q5.G$(Ab,25,this.Id);}}if(A._GetAutoObject(
A.Device.Helper).AEh(this)){var Ly=A._GetAutoObject(A.Device.Helper).ABf(this);Q5.
Aj1(Ab,13,Ly);Q5.Abu(Ab,31,this.Timestamp);}Q5.Or(Jg);}}}return Hs;},_Init:function(
aArg){var K=this.K;K.__proto__=C.Rating;A.hJ++;},_Done:function(){var K=this.K;K.
__proto__=null;A.hJ--;},_ReInit:function(){},_Mark:function(D){},_variants:function(
){return this;},_className:"DeviceSimulation::Rating"};C.PE={Gn:A.aan(512,null,null
),O2:0,AHx:0,AJa:0,A1t:A.aan(10,0,{0:3600,1:3750,2:3900,3:4200,4:3780,5:3600,6:3900
,7:4010,8:4020,9:4030}),AIN:0,A03:A.aan(10,0,{0:5,1:4,2:3,3:1,4:2,5:1,6:1,7:1,8:
1,9:1}),Bax:512,Aym:-1,AYI:A.aan(15,0,{0:2,1:2,2:2,3:2,4:2,5:3,6:3,7:3,8:3,9:3,10:
1,11:1,12:1,13:1,14:1}),AIm:false,CE:function(Ab,AX){var A9=this.Te(Ab);if(!!A9)
return A9.CE(AX);return 0;},Va:function(Ab,AX){var A9=this.Te(Ab);if(!!A9)return A9.
Va(AX);return A.jm;},HW:function(Ab,AX){var A9=this.Te(Ab);if(!!A9)return A9.HW(
AX);return false;},Vb:function(Ab,AX){var A9=this.Te(Ab);if(!!A9)return A9.Vb(AX
);return 0;},RQ:function(Ab,AX){var A9=this.Te(Ab);if(!!A9)return A9.RQ(AX);return 0;
},Op:function(){if(this.AIm)throw new Error(AeO);this.AIm=true;return 12345;},Or:
function(AnI){if(!this.AIm)throw new Error(Zq);if(AnI!==12345)throw new Error(Wh
);this.AIm=false;return true;},XV:function(){return this.A14(A._NewObject(C.AEr,
0));},YY:function(Ab,AX,CX){var A9=this.Te(Ab);if(!!A9)return A9.YY(AX,CX);return false;
},G$:function(Ab,AX,CX){var A9=this.Te(Ab);if(!!A9)return A9.G$(AX,CX);return false;
},YX:function(Ab,AX,CX){var A9=this.Te(Ab);if(!!A9)return A9.YX(AX,CX);return false;
},Nb:function(Ab,AX,CX){var A9=this.Te(Ab);if(!!A9)return A9.Nb(AX,CX);return false;
},YW:function(Ab,AX,CX){var A9=this.Te(Ab);if(!!A9)return A9.YW(AX,CX);return false;
},OnSetId:function(E){if(this.Id===E)return;this.Id=E;this.A$h();switch(this.Id){
case 0:{this.Bax=128;A.ow([this,this.BsF],this);}break;case 1:A.ow([this,this.BsH
],this);break;case 3:A.ow([this,this.BsE],this);break;case 4:A.ow([this,this.BsG
],this);break;case 2:break;default:throw new Error(Wi+this.Id.toFixed());}},Cj:function(
){return this.O2;},LD:function(Ab,AX){var A9=this.Te(Ab);if(!!A9)return A9.LD(AX
);return 0;},TQ:function(Ab,AX,CX){var A9=this.Te(Ab);if(!!A9)return A9.TQ(AX,CX
);return false;},G_:function(){this.A$h();return true;},Hz:function(){return this.
Bax;},A14:function(Ab){if(this.O2>=512)throw new Error(AeP);this.Gn.Set(this.O2,
Ab);this.O2=this.O2+1;switch(this.Id){case 0:{this.Aym=this.O2;this.G$(this.O2-1
,0,this.Aym);}break;case 1:{this.Aym=this.O2-1;this.G$(this.O2-1,0,this.Aym);}break;
default:;}A.ow([this,this.Ajw],this);return this.O2-1;},Te:function(aIndex){if((
aIndex<0)||(aIndex>=512))return null;return this.Gn.Get(aIndex);},A$h:function(){
var P;for(P=0;P<512;P=P+1)this.Gn.Set(P,null);this.O2=0;this.AHx=0;this.AIN=0;this.
AJa=0;A.ow([this,this.Ajw],this);},AIh:function(){this.AHx=(this.AHx+1)%15;return this.
AYI.Get(this.AHx);},AZw:function(){this.AJa=(this.AJa+1)%10;return this.A1t.Get(
this.AJa);},AH5:function(H){if(this.K&&this.K.AH5)return this.K.AH5.apply(this,arguments
);else return C.PE.BsN.apply(this,arguments);},BsN:function(H){var B;var Oa=true;
this.Bi(276000312310001,10,1,A._GetAutoObject(A.Device.Helper).Ag1(12),0,1,true,
true,false,true,39000,0,0,false,0,false,0,0,0,0);this.Bi(12310020,20,12,A._GetAutoObject(
A.Device.Helper).Ag1(12),0,0,false,false,true,true,36500,0,0,false,0,false,0,0,0
,0);this.Bi(276000312310021,10,1,A._GetAutoObject(A.Device.Helper).Ag1(9),0,0,true
,false,false,true,37200,0,0,false,0,false,0,0,0,0);this.Bi(276000312310022,20,2,
A._GetAutoObject(A.Device.Helper).Ag1(830),0,1,false,false,false,true,41200,A._GetAutoObject(
A.Device.Helper).Ag1(1),1,true,1,false,0,0,0,0);this.Bi(276000312310023,20,2,A._GetAutoObject(
A.Device.Helper).Ag1(1200),0,1,false,false,false,true,43500,A._GetAutoObject(A.Device.
Helper).Ag1(8),2,false,1,false,0,0,0,0);this.Bi(276000312310026,20,2,A._GetAutoObject(
A.Device.Helper).Ag1(8),0,0,true,false,false,true,34000,0,0,false,0,false,0,0,0,
0);var P;var BcJ=0;for(P=1;P<=7;P=P+1){BcJ=3680+(20*P);Oa=BcJ>3800;this.Bi(276000312310050+(((
B=P)<0)?B+0x10000000000000000:B),30+(P%3),3,A._GetAutoObject(A.Device.Helper).Ag1(
7-P),0,1,Oa,false,false,true,36000+(P*900),0,0,false,0,true,0,0,0,0);}},BsF:function(
s){this.AH5(s);},AH7:function(H){if(this.K&&this.K.AH7)return this.K.AH7.apply(this
,arguments);else return C.PE.BsP.apply(this,arguments);},BsP:function(H){var Ad=
A._GetAutoObject(A.Device.Helper).DB();var P;Ad=Ad-2678400;var AhK;var A$y;for(P=
0;P<32;P=P+1){var AZh=this.Bvr();for(;AZh>0;AZh=AZh-1){AhK=this.AZw();A$y=A._GetAutoObject(
A.Device.Converter).Ari(0,AhK);this.AE(Ad,12310020,AhK,A$y,this.AIh(),this.AIh()
,this.AIh(),this.AIh(),0);}Ad=Ad+86400;}Ad=Ad-86400;this.AE(Ad,12310020,0,0,0,0,
0,0,43700);this.AE(Ad-86400,276000312310001,0,0,0,0,0,0,49800);this.AE(Ad,276000312310001
,0,0,0,0,0,0,51000);AhK=this.AZw();this.AE(Ad,276000312310001,AhK,A._GetAutoObject(
A.Device.Converter).Ari(0,AhK),1,3,3,3,0);AhK=this.AZw();this.AE(Ad-86400,276000312310022
,3800,A._GetAutoObject(A.Device.Converter).Ari(1,3800),2,3,3,3,0);this.AE(Ad,276000312310022
,AhK,A._GetAutoObject(A.Device.Converter).Ari(1,AhK),2,3,3,3,0);},BsH:function(s
){this.AH7(s);},Bi:function(Kn,Bs$,Btq,A_n,ArW,LZ,Btg,Btm,Btj,Btk,N5,BsX,Bto,Bti
,Ee,Btl,Ab3,AG5,Ae1,Btv){var B4=A._NewObject(A.Device.Animal,0);B4.Gd();B4.AvB(0
);B4.Ad7(0);B4.TF(false);B4.AjI(false);B4.M9(Kn);B4.M8(Kn);B4.TH(A._GetAutoObject(
A.Device.Helper).Akc(B4.TransponderId));B4.Abh(Bs$);B4.AmH(Btq);B4.R8(A_n);B4.AjA(
ArW);B4.JM(LZ);B4.AmY(Btg);B4.AEA(Btm);B4.AgF(Btk);B4.TF(Btj);B4.Aqw(Bti);B4.Ave(
Bto);B4.Au2(BsX);B4.DW(Ee);B4.Ad4(Btl);B4.NP(Ab3);B4.AjD(AG5);B4.M_(Ae1);B4.AmJ(
Btv);B4.Cr(this);if(N5>0)A._GetAutoObject(C.AvM).AE(A_n,Kn,0,0,0,0,0,0,N5);},AE:
function(LY,Ab1,AnG,BtH,Bs5,Bs6,BsQ,BtJ,BsR){var BW=A._NewObject(A.Device.Rating
,0);BW.Gd();var A_1=A._GetAutoObject(C.Ao9).AMj(26,Ab1);if(A_1>=0)BW.OnSetAnimalId(
A._GetAutoObject(C.Ao9).CE(A_1,0));else A.aa8("%s%U",AeQ,Ab1);BW.OnSetTimestamp(
LY);BW.OnSetTemperature(AnG);BW.OnSetRatingTemperature(BtH);BW.OnSetFaeces(Bs5);
BW.OnSetFeed(Bs6);BW.OnSetAppearance(BsQ);BW.OnSetRespiratory(BtJ);BW.OnSetBodyWeight(
BsR);BW.Cr(this);},A3J:function(aColumn,A1){var P;for(P=0;P<this.O2;P=P+1)if(this.
Gn.Get(P).CE(aColumn)===A1)return P;return-1;},Bvr:function(){this.AIN=(this.AIN+
1)%10;return this.A03.Get(this.AIN);},AH4:function(H){if(this.K&&this.K.AH4)return this.
K.AH4.apply(this,arguments);else return C.PE.BsM.apply(this,arguments);},BsM:function(
H){this.AkU(10,JT);this.AkU(20,AeR);this.AkU(30,Li);this.AkU(31,Ag_);this.AkU(32
,Ane);},BsE:function(s){this.AH4(s);},AkU:function(Kn,Bta){var AHr=A._NewObject(
A.Device.AnimalGroup,0);AHr.Gd();AHr.OnSetId(Kn);AHr.ADb(Bta);AHr.Cr(this);},Aaz:
function(){return this.Aym;},AMj:function(aColumn,A1){var P;for(P=0;P<this.O2;P=
P+1)if(this.Gn.Get(P).LD(aColumn)===A1)return P;return-1;},AH6:function(H){if(this.
K&&this.K.AH6)return this.K.AH6.apply(this,arguments);else return C.PE.BsO.apply(
this,arguments);},BsO:function(H){this.ZJ(2016,216,6);this.ZJ(2017,217,7);this.ZJ(
2018,218,8);this.ZJ(2019,219,9);this.ZJ(2020,220,10);this.ZJ(2021,221,11);},BsG:
function(s){this.AH6(s);},ZJ:function(Ab_,Bs1,Bs0){var Un=A._NewObject(A.Device.
CalfDeregistrations,0);Un.Gd();Un.AjP(Ab_);Un.Au4(Bs1);Un.Au3(Bs0);Un.Cr(this);}
,_Init:function(aArg){A.Device.ITable._Init.call(this,aArg);(this.Gn=[]).__proto__=
C.PE.Gn;(this.A1t=[]).__proto__=C.PE.A1t;(this.A03=[]).__proto__=C.PE.A03;(this.
AYI=[]).__proto__=C.PE.AYI;this.__proto__=C.PE;var Lj=this._variants();if(Lj){this.
K={};Lj._Init.call(this,aArg);}},_Done:function(){if(this.K)this.K._Done.call(this
);this.__proto__=A.Device.ITable;A.Device.ITable._Done.call(this);},_ReInit:function(
){A.Device.ITable._ReInit.call(this);if(this.K)this.K._ReInit.call(this);},_Mark:
function(D){var B;A.Device.ITable._Mark.call(this,D);A.aaf(this.Gn,D);if(this.K)
this.K._Mark(D);},_variants:function(){return A.abq.PE._variants();},K:null,_className:
"DeviceSimulation::TableData"};C.Ao9={_Init:function(){C.PE._Init.call(this,0);this.
OnSetId(0);},_variants:function(){return this;},_this:null};C.AzQ={_Init:function(
){C.PE._Init.call(this,0);this.OnSetId(3);},_variants:function(){return this;},_this:
null};C.AvM={_Init:function(){C.PE._Init.call(this,0);this.OnSetId(1);},_variants:
function(){return this;},_this:null};C.Gv={AkO:A.aan(128,null,null),Gh:null,An8:
0,CE:function(Ab,AX){var A9=this.ZH(Ab);if(!!A9)return A9.CE(AX);return 0;},Va:function(
Ab,AX){var A9=this.ZH(Ab);if(!!A9)return A9.Va(AX);return A.jm;},HW:function(Ab,
AX){var A9=this.ZH(Ab);if(!!A9)return A9.HW(AX);return false;},OnSetId:function(
E){if(this.Id===E)return;this.Id=E;switch(this.Id){case 0:this.AD4(A._GetAutoObject(
C.Ao9));break;case 1:this.AD4(A._GetAutoObject(C.AvM));break;case 3:this.AD4(A._GetAutoObject(
C.AzQ));break;case 4:this.AD4(A._GetAutoObject(C.AAd));break;case 2:break;default:
throw new Error(Wi+this.Id.toFixed());}},Cj:function(){if(!!this.Filter)return this.
An8;else if(!!this.Gh)return this.Gh.O2;return 0;},Bl:function(E){A.Device.ITable.
Bl.call(this,E);this.AYG(this);},Vb:function(Ab,AX){var A9=this.ZH(Ab);if(!!A9)return A9.
Vb(AX);return 0;},RQ:function(Ab,AX){var A9=this.ZH(Ab);if(!!A9)return A9.RQ(AX);
return 0;},Op:function(){if(!!this.Gh)return this.Gh.Op();return-1;},Or:function(
AnI){var Hs=false;if(!!this.Gh)Hs=this.Gh.Or(AnI);if(Hs)A.ow([this,this.AYG],this
);return Hs;},XV:function(){if(!!this.Filter)throw new Error(N2+A._GetAutoObject(
A.Device.Converter).BeU(this.Id,this.Filter));if(!!this.Gh)return this.Gh.A14(A.
_NewObject(C.AEr,0));return-1;},YY:function(Ab,AX,CX){var A9=this.ZH(Ab);if(!!A9
)return A9.YY(AX,CX);return false;},G$:function(Ab,AX,CX){var A9=this.ZH(Ab);if(
!!A9)return A9.G$(AX,CX);return false;},YX:function(Ab,AX,CX){var A9=this.ZH(Ab);
if(!!A9)return A9.YX(AX,CX);return false;},Nb:function(Ab,AX,CX){var A9=this.ZH(
Ab);if(!!A9)return A9.Nb(AX,CX);return false;},YW:function(Ab,AX,CX){var A9=this.
ZH(Ab);if(!!A9)return A9.YW(AX,CX);return false;},K4:function(aColumn,A1){if(!!this.
Filter){var P;for(P=0;P<this.An8;P=P+1)if(this.AkO.Get(P).CE(aColumn)===A1)return P;
return-1;}else if(!!this.Gh)return this.Gh.A3J(aColumn,A1);return-1;},LD:function(
Ab,AX){var A9=this.ZH(Ab);if(!!A9)return A9.LD(AX);return 0;},TQ:function(Ab,AX,
CX){var A9=this.ZH(Ab);if(!!A9)return A9.TQ(AX,CX);return false;},Ai0:function(aColumn
,A1){if(!!this.Filter){var P;for(P=0;P<this.An8;P=P+1)if(this.AkO.Get(P).LD(aColumn
)===A1)return P;return-1;}else if(!!this.Gh)return this.Gh.AMj(aColumn,A1);return-
1;},G_:function(){if(!!this.Gh)return this.Gh.G_();return false;},AiX:function(aColumn
,A1){if(!!this.Gh)return this.Gh.A3J(aColumn,A1)>=0;return false;},Af4:function(
aColumn,A1){if(!!this.Gh)return this.Gh.AMj(aColumn,A1)>=0;return false;},Hz:function(
){if(!!this.Gh)return this.Gh.Hz();return 0;},Aaz:function(){if(!!this.Gh)return this.
Gh.Aaz();return-1;},Qd:function(){if(!!this.Gh)return this.Gh.O2;return 0;},AYG:
function(H){this.AYV();if(!!this.Filter&&!!this.Gh){var P;for(P=0;P<this.Gh.Cj();
P=P+1){var AZl=true;var Av=this.Filter.AMx();var A9=this.Gh.Te(P);if(!!A9)while(
AZl&&!!Av){AZl=A9.BfU(Av);Av=this.Filter.AMB(Av);}else A.aa8("%s",((Wj+P.toFixed(
))+Anf)+this.Gh.Cj().toFixed());if(AZl){this.AkO.Set(this.An8,this.Gh.Gn.Get(P));
this.An8=this.An8+1;}}}A.ow([this,this.Ajw],this);},AYV:function(){var P;for(P=0;
P<128;P=P+1)this.AkO.Set(P,null);this.An8=0;},AD4:function(E){if(this.Gh===E)return;
if(!!this.Gh)A.zl([this,this.A1r],this.Gh,0);this.Gh=E;if(!!this.Gh){A.y_([this,
this.A1r],this.Gh,0);A.ow([this,this.A1r],this);}},A1r:function(H){A.ow([this,this.
AYG],this);},ZH:function(aIndex){if(!!this.Filter){if((aIndex<0)||(aIndex>=128))
return null;else return this.AkO.Get(aIndex);}else if(!!this.Gh)return this.Gh.Te(
aIndex);A.aa8("%s",Ag$+aIndex.toFixed());return null;},_Init:function(aArg){A.Device.
ITable._Init.call(this,aArg);(this.AkO=[]).__proto__=C.Gv.AkO;this.__proto__=C.Gv;
},_Mark:function(D){var B;A.Device.ITable._Mark.call(this,D);A.aaf(this.AkO,D);if((
B=this.Gh)&&(B._cycle!=D))B._Mark(B._cycle=D);},_className:"DeviceSimulation::FilteredTable"
};C.A7_={Kr:null,AcK:null,A1l:function(H){if(A._GetAutoObject(C.Abw).BhO()===false
)return;switch(A._GetAutoObject(A.Device.Device).SyncState){case 0:{A._GetAutoObject(
A.Device.Device).Abm(1);this.AcK.Ap(true);}break;case 1:{A._GetAutoObject(A.Device.
Device).Abm(2);A._GetAutoObject(A.Device.Device).AqG(A._GetAutoObject(A.Device.Device
).Ao.Qd());this.Kr.FA(A._GetAutoObject(A.Device.Device).AeD*50);this.Kr.B1=A._GetAutoObject(
A.Device.Device).AeD;this.Kr.Ap(true);}break;case 2:{A._GetAutoObject(A.Device.Device
).Abm(3);this.AcK.Ap(true);}break;case 3:{A._GetAutoObject(A.Device.Device).Abm(
4);A._GetAutoObject(A.Device.Device).AqG(A._GetAutoObject(A.Device.Device).Ao.Qd(
));this.Kr.FA(A._GetAutoObject(A.Device.Device).AeD*50);this.Kr.B1=A._GetAutoObject(
A.Device.Device).AeD;this.Kr.Ap(true);}break;case 4:{A._GetAutoObject(A.Device.Device
).Abm(5);this.AcK.Ap(true);}break;case 5:A.ow([this,this.BcD],this);break;case 7:
case 6:break;default:A.aa8("%s%e",Aha,A._GetAutoObject(A.Device.Device).SyncState
);}},BwU:function(H){this.AcK.Ap(false);A.ow([this,this.A1l],this);},BxV:function(
H){switch(A._GetAutoObject(A.Device.Device).SyncState){case 0:case 6:case 7:{A._GetAutoObject(
A.Device.Device).Abm(0);A.ow([this,this.A1l],this);}break;default:;}},BcD:function(
H){this.AcK.Ap(false);this.Kr.Ap(false);A._GetAutoObject(A.Device.Device).Abm(0);
},_Init:function(aArg){A.abm.F_._Init.call(this.Kr={I:this},0);A.Core.Timer._Init.
call(this.AcK={I:this},0);this.__proto__=C.A7_;var B;this.Kr.IF(1);this.AcK.QB(2000
);this.Kr.R5=[this,this.A1l];this.Kr.Q=[B=A._GetAutoObject(A.Device.Device),B.AQs
,B.AXJ];this.AcK.M$=[this,this.BwU];A.hJ++;},_Done:function(){this.__proto__=null;
this.Kr._Done();this.AcK._Done();A.hJ--;},_ReInit:function(){this.Kr._ReInit();this.
AcK._ReInit();},_Mark:function(D){var B;if((B=this.Kr)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.AcK)._cycle!=D)B._Mark(B._cycle=D);if((B=this.I)&&(B._cycle!=D))B.
_Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:"DeviceSimulation::SimulationHelperClass"
};C.Arc={_Init:function(){C.A7_._Init.call(this,0);},_variants:function(){return this;
},_this:null};C.AE7={A4:0,_Init:function(aArg){C.VH._Init.call(this,aArg);this.__proto__=
C.AE7;},_className:"DeviceSimulation::UInt64"};C.AAd={_Init:function(){C.PE._Init.
call(this,0);this.OnSetId(4);},_variants:function(){return this;},_this:null};C.
FactoryResetScope={Dw:function(){return 1;},_Init:function(aArg){var K=this.K;K.
__proto__=C.FactoryResetScope;this.Cz.Set(0,1);A.hJ++;},_Done:function(){var K=this.
K;K.__proto__=null;A.hJ--;},_ReInit:function(){},_Mark:function(D){},_variants:function(
){return this;},_className:"DeviceSimulation::FactoryResetScope"};C.Xb={Ac8:null
,CM:function(H){var K=this.K;A.aa8("%s",AbQ);K.Ac8.Ap(true);},E_:function(H){var
K=this.K;if(K.Ac8.Bw===true){K.Ac8.Ap(false);A.aa8("%s",Ue);}},Bg0:function(H){var
K=this.K;K.Ac8.Ap(false);A._GetAutoObject(A.kh.A0).AgK(A._GetAutoObject(A.Device.
Device).Av2);},_Init:function(aArg){var K=this.K;A.Core.Timer._Init.call(K.Ac8={
I:this},0);K.__proto__=C.Xb;this.AdM.G(Ang);K.Ac8.QB(1500);this.TR.R(Anh);this.TR.
X(true);this.AdM.At(A.zW(A.abi.APc));K.Ac8.M$=[this,K.Bg0];A.hJ++;},_Done:function(
){var K=this.K;K.__proto__=null;K.Ac8._Done();A.hJ--;},_ReInit:function(){var K=
this.K;K.Ac8._ReInit();},_Mark:function(D){var B;if((B=this.Ac8)._cycle!=D)B._Mark(
B._cycle=D);},_variants:function(){return this;},_className:"DeviceSimulation::BootScreen"
};C.AiO={AtE:A.jm,_Init:function(aArg){A.Device.AiO._Init.call(this,aArg);this.__proto__=
C.AiO;},_className:"DeviceSimulation::DataExportContext"};
C._Init=function(){C.ABY.__proto__=C.VH;C.String.__proto__=C.VH;C.Az9.__proto__=C.
VH;C.AE8.__proto__=C.VH;C.AE6.__proto__=C.VH;C.PE.__proto__=A.Device.ITable;C.Gv.
__proto__=A.Device.ITable;C.AE7.__proto__=C.VH;C.AiO.__proto__=A.Device.AiO;};C.
_ReInit=function(){var B;if((B=C.Abw._this))B._ReInit();if((B=C.Ao9._this))B._ReInit(
);if((B=C.AzQ._this))B._ReInit();if((B=C.AvM._this))B._ReInit();if((B=C.Arc._this
))B._ReInit();if((B=C.AAd._this))B._ReInit();};C.DE=function(D){var B;if((B=C.Abw.
_this)&&(B._cycle!=D))B._Done(C.Abw._this=null);if((B=C.Ao9._this)&&(B._cycle!=D
))B._Done(C.Ao9._this=null);if((B=C.AzQ._this)&&(B._cycle!=D))B._Done(C.AzQ._this=
null);if((B=C.AvM._this)&&(B._cycle!=D))B._Done(C.AvM._this=null);if((B=C.Arc._this
)&&(B._cycle!=D))B._Done(C.Arc._this=null);if((B=C.AAd._this)&&(B._cycle!=D))B._Done(
C.AAd._this=null);};return C;})();

/* VitalControl demonstration application, © Urban GmbH & Co.KG 2023 */