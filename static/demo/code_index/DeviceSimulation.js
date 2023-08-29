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
var B9="ERROR: access to null Bool data in column [";var BG="]";var EV="Access to inexistent column index: ";
var GS=", or not enough indexes for store column. You can increase the \'data\' "+
"array size to hold this column.";var Js="Unsupported filter criterion class";var
IL="Operator not handled:";var OJ="1,8";var PH="INFO: Device.StartScan() called.";
var N0="INFO: Device.StopScan() called.";var CJ="V0.";var Fn=".";var N1="\n";var
OK="Temp: ";var KF="Battery: ";var OL="%%";var Nc="Selected animal with row index";
var OM="1,256,2,2048,4096,8192,4,8,16,128,64,32,1024,262144,16384,131072,512";var
Sr="1,2";var T8="0,1,2";var V8="3900,3950,4000";var V9="4050,4100,4150";var I_="Read only";
var T9="Unknown data export type: ";var V_="Unhandled Device::DataExportType: ";
var V$="0,2";var Y5="650,150";var Ss="800,200";var Y6="40000,4000";var Wa="32,7,34,18,23,14";
var T_="Simulate Scan";var T$="BNR15;LOM;GEB_DATR;RASSE;GESCHL_R;GEB_VERL;VERBLEIB;MEHRLADR;LOM_MUT\n";
var QS="%d.%m.%Y";var Wb="1";var ON="2";var PJ="Unknown gender: ";var Ua="text/csv";
var Y7="National-ID-Animal;Farm-ID-Animal;Transponder-ID;DateOfBirth;Sex;BirthWeight-Kg\n";
var Wc="hit-geburt-%d-%m-%Y_%H-%M.csv";var Y8="animals-%d-%m-%Y_%H-%M.csv";var Y9=
"hit-zugaenge-%d-%m-%Y_%H-%M.csv";var Wd="M";var We="F";var St="?";var Y_="%Y-%m-%d";
var Y$="ERROR: Cannot start transaction";var Abz="Nested transactions are not allowed.";
var Su="Transaction not opened.";var AbA="Wrong transaction ID.";var AbB="Unhandled TableId:";
var Za="Maximum number of rows reached.";var Wf="Animal row not found in DeviceSimulation::AnimalTableData. NaisId";
var Zb="10";var AeG="20";var AeH="30";var LV="31";var AbC="32";var Lg="Severe: filter set when inserting row into table: ";
var Ag3="ERROR: Row not found with index [";var Am4="] while Rows Count = ";var N2=
"ERROR: trying to access an inexistent row with Index=";var Wg="Invalid Device::SyncState";
var Am5="Forwarding to home screen after 500 milliseconds ...";var Ag4="Forwarding to home screen canceled...";
var Ag5=[0,58,240,208];var AbD="VitalControl\nstarting up \u2026";
C.Table={Gv:null,Init:function(aArg){var K=this.K;A.y_([this,this.Ajk],K.Gv,0);},
CE:function(Ab,AX){var K=this.K;return K.Gv.CE(Ab,AX);},U9:function(Ab,AX){var K=
this.K;return K.Gv.U9(Ab,AX);},HT:function(Ab,AX){var K=this.K;return K.Gv.HT(Ab
,AX);},OnSetId:function(E){var K=this.K;if(this.Id===E)return;this.Id=E;K.Gv.OnSetId(
E);},Ci:function(){var K=this.K;return K.Gv.Ci();},Bk:function(E){var K=this.K;A.
Device.ITable.Bk.call(this,E);K.Gv.Bk(E);},U_:function(Ab,AX){var K=this.K;return K.
Gv.U_(Ab,AX);},RP:function(Ab,AX){var K=this.K;return K.Gv.RP(Ab,AX);},Oo:function(
){var K=this.K;return K.Gv.Oo();},Oq:function(Ant){var K=this.K;return K.Gv.Oq(Ant
);},XN:function(){var K=this.K;return K.Gv.XN();},YM:function(Ab,AX,CW){var K=this.
K;return K.Gv.YM(Ab,AX,CW);},G$:function(Ab,AX,CW){var K=this.K;return K.Gv.G$(Ab
,AX,CW);},YL:function(Ab,AX,CW){var K=this.K;return K.Gv.YL(Ab,AX,CW);},M$:function(
Ab,AX,CW){var K=this.K;return K.Gv.M$(Ab,AX,CW);},YK:function(Ab,AX,CW){var K=this.
K;return K.Gv.YK(Ab,AX,CW);},K2:function(aColumn,A4){var K=this.K;return K.Gv.K2(
aColumn,A4);},LB:function(Ab,AX){var K=this.K;return K.Gv.LB(Ab,AX);},TN:function(
Ab,AX,CW){var K=this.K;return K.Gv.TN(Ab,AX,CW);},AiN:function(aColumn,A4){var K=
this.K;return K.Gv.AiN(aColumn,A4);},G_:function(){var K=this.K;return K.Gv.G_();
},AiL:function(aColumn,A4){var K=this.K;return K.Gv.AiL(aColumn,A4);},AfV:function(
aColumn,A4){var K=this.K;return K.Gv.AfV(aColumn,A4);},Hx:function(){var K=this.
K;return K.Gv.Hx();},Aak:function(){var K=this.K;return K.Gv.Aak();},Qb:function(
){var K=this.K;return K.Gv.Qb();},_Init:function(aArg){var K=this.K;C.Gv._Init.call(
K.Gv={I:this},0);K.__proto__=C.Table;K.Init.call(this,aArg);A.hJ++;},_Done:function(
){var K=this.K;K.__proto__=null;K.Gv._Done();A.hJ--;},_ReInit:function(){var K=this.
K;K.Gv._ReInit();},_Mark:function(D){var B;if((B=this.Gv)._cycle!=D)B._Mark(B._cycle=
D);},_variants:function(){return this;},_className:"DeviceSimulation::Table"};C.
AEh={SE:A.aan(42,null,null),CE:function(aColumn){var B;this.Zm(aColumn);var An=(
C.ABQ.isPrototypeOf(B=this.SE.Get(aColumn))?B:null);if(!!An)return An.A3;return 0;
},U9:function(aColumn){var B;this.Zm(aColumn);var An=(C.String.isPrototypeOf(B=this.
SE.Get(aColumn))?B:null);if(!!An)return An.A3;return A.jm;},HT:function(aColumn){
var B;this.Zm(aColumn);var An=(C.Az0.isPrototypeOf(B=this.SE.Get(aColumn))?B:null
);if(!!An)return An.A3;else A.aa8("%s",(B9+aColumn.toFixed())+BG);return false;}
,G$:function(aColumn,A4){this.Zm(aColumn);var An=A._NewObject(C.ABQ,0);An.A3=A4;
this.SE.Set(aColumn,An);return true;},YK:function(aColumn,A4){this.Zm(aColumn);var
An=A._NewObject(C.String,0);An.A3=A4;this.SE.Set(aColumn,An);return true;},M$:function(
aColumn,A4){this.Zm(aColumn);var An=A._NewObject(C.Az0,0);An.A3=A4;this.SE.Set(aColumn
,An);return true;},Zm:function(aColumn){if((aColumn<0)||(aColumn>=42))throw new Error((
EV+aColumn.toFixed())+GS);},Bfw:function(AL){if(!!(A.Device.Int32FilterCriterion.
isPrototypeOf(AL)?AL:null))return this.AHy(this.CE(AL.ES),AL.Operator,(A.Device.
Int32FilterCriterion.isPrototypeOf(AL)?AL:null).A3);else if(!!(A.Device.UInt32FilterCriterion.
isPrototypeOf(AL)?AL:null))return this.Buk(this.RP(AL.ES),AL.Operator,(A.Device.
UInt32FilterCriterion.isPrototypeOf(AL)?AL:null).A3);else if(!!(A.Device.StringFilterCriterion.
isPrototypeOf(AL)?AL:null))return this.Buj(this.U9(AL.ES),AL.Operator,(A.Device.
StringFilterCriterion.isPrototypeOf(AL)?AL:null).A3);else if(!!(A.Device.BoolFilterCriterion.
isPrototypeOf(AL)?AL:null))return this.Bui(this.HT(AL.ES),AL.Operator,(A.Device.
BoolFilterCriterion.isPrototypeOf(AL)?AL:null).A3);else if(!!(A.Device.AnimalTypeFilterCriterion.
isPrototypeOf(AL)?AL:null))return this.AHy(this.CE(AL.ES),AL.Operator,(A.Device.
AnimalTypeFilterCriterion.isPrototypeOf(AL)?AL:null).A3);else if(!!(A.Device.GenderFilterCriterion.
isPrototypeOf(AL)?AL:null))return this.AHy(this.CE(AL.ES),AL.Operator,(A.Device.
GenderFilterCriterion.isPrototypeOf(AL)?AL:null).A3);else if(!!(A.Device.AssessmentFilterCriterion.
isPrototypeOf(AL)?AL:null))return this.Bum(this.U_(AL.ES),AL.Operator,(((B=(A.Device.
AssessmentFilterCriterion.isPrototypeOf(AL)?AL:null).A3)<0)?B+0x100000000:B)&0xFF
);else if(!!(A.Device.UInt64FilterCriterion.isPrototypeOf(AL)?AL:null))return this.
Bul(this.LB(AL.ES),AL.Operator,(A.Device.UInt64FilterCriterion.isPrototypeOf(AL)?
AL:null).A3);else if(!!(A.Device.WhereAboutsFilterCriterion.isPrototypeOf(AL)?AL:
null))return this.AHy(this.CE(AL.ES),AL.Operator,(A.Device.WhereAboutsFilterCriterion.
isPrototypeOf(AL)?AL:null).A3);else throw new Error(Js);},AHy:function(H2,EF,H3){
switch(EF){case 0:return H2===H3;case 2:return H2>H3;case 3:return H2<H3;case 4:
return H2.toFixed().indexOf(H3.toFixed(),0)>=0;case 5:return H2!==H3;default:throw new
Error(IL+EF.toFixed());}},Buj:function(H2,EF,H3){switch(EF){case 0:return H2===H3;
case 2:return H2>H3;case 3:return H2<H3;case 4:{A.aa8("%s%e%s%i",H2,EF,H3,H2.indexOf(
H3,0));return H2.indexOf(H3,0)>=0;}case 5:return H2!==H3;default:throw new Error(
IL+EF.toFixed());}},Bui:function(H2,EF,H3){switch(EF){case 0:return H2===H3;case
2:return false;case 3:return false;case 4:return false;case 5:return H2!==H3;default:
throw new Error(IL+EF.toFixed());}},U_:function(aColumn){var B;this.Zm(aColumn);
var An=(C.AEX.isPrototypeOf(B=this.SE.Get(aColumn))?B:null);if(!!An)return An.A3;
return 0;},YM:function(aColumn,A4){this.Zm(aColumn);var An=A._NewObject(C.AEX,0);
An.A3=A4;this.SE.Set(aColumn,An);return true;},Bum:function(H2,EF,H3){switch(EF){
case 0:return H2===H3;case 2:return H2>H3;case 3:return H2<H3;case 5:return H2!==
H3;default:throw new Error(IL+EF.toFixed());}},RP:function(aColumn){var B;this.Zm(
aColumn);var An=(C.AEV.isPrototypeOf(B=this.SE.Get(aColumn))?B:null);if(!!An)return An.
A3;return 0;},YL:function(aColumn,A4){this.Zm(aColumn);var An=A._NewObject(C.AEV
,0);An.A3=A4;this.SE.Set(aColumn,An);return true;},Buk:function(H2,EF,H3){switch(
EF){case 0:return H2===H3;case 2:return H2>H3;case 3:return H2<H3;case 5:return H2
!==H3;default:throw new Error(IL+EF.toFixed());}},LB:function(aColumn){var B;this.
Zm(aColumn);var An=(C.AEW.isPrototypeOf(B=this.SE.Get(aColumn))?B:null);if(!!An)
return An.A3;return 0;},TN:function(aColumn,A4){this.Zm(aColumn);var An=A._NewObject(
C.AEW,0);An.A3=A4;this.SE.Set(aColumn,An);return true;},Bul:function(H2,EF,H3){switch(
EF){case 0:return H2===H3;case 2:return H2>H3;case 3:return H2<H3;case 5:return H2
!==H3;default:throw new Error(IL+EF.toFixed());}},_Init:function(aArg){(this.SE=[
]).__proto__=C.AEh.SE;this.__proto__=C.AEh;A.hJ++;},_Done:function(){this.__proto__=
null;A.hJ--;},_ReInit:function(){},_Mark:function(D){var B;A.aaf(this.SE,D);if((
B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:
"DeviceSimulation::RowData"};C.VD={_Init:function(aArg){this.__proto__=C.VD;A.hJ++;
},_Done:function(){this.__proto__=null;A.hJ--;},_ReInit:function(){},_Mark:function(
D){var B;if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:
null,_className:"DeviceSimulation::NativeType"};C.ABQ={A3:0,_Init:function(aArg){
C.VD._Init.call(this,aArg);this.__proto__=C.ABQ;},_className:"DeviceSimulation::Int32"
};C.String={A3:A.jm,_Init:function(aArg){C.VD._Init.call(this,aArg);this.__proto__=
C.String;},_className:"DeviceSimulation::String"};C.Az0={A3:false,_Init:function(
aArg){C.VD._Init.call(this,aArg);this.__proto__=C.Az0;},_className:"DeviceSimulation::Bool"
};C.DeviceClass={AsK:null,AHE:null,AhZ:null,ZK:null,C7:function(){var K=this.K;K.
A7C.call(this,this);},Init:function(aArg){var K=this.K;var B;this.Yr(3);A.za([this
,K.Azc],[B=K.AsK,B.A5A,B.AQS],0);this.UpdateAutoActions(OJ);K.A7C.call(this,this
);this.AqN(this);this.AqO(this);this.AqJ(this);this.AqL(this);this.AqK(this);var
languageMin=0;var languageMax=17;var languageValue=-1;{if(typeof ewLanguage==='number'&&
Number.isInteger(ewLanguage)&&ewLanguage>=languageMin&&ewLanguage<languageMax){languageValue=
ewLanguage;}}if(languageValue>=0)this.Amw(languageValue);A.ow([this,K.ARi],this);
},Yr:function(E){this.UpdateActiveScreen(E);},AuL:function(E){this.UpdateBatteryChargeState(
E);},ACR:function(E){this.UpdateChargeActive(E);},Aqn:function(E){this.UpdateScanState(
E);},Au9:function(E){this.UpdateMeasureState(E);},Avh:function(E){this.UpdateTempValue(
E);},Amw:function(E){this.UpdateLanguage(E);},Avi:function(E){this.UpdateTemperatureUnit(
E);},ACP:function(E){this.UpdateBrightness(E);},ADk:function(E){this.UpdateMonitoring(
E);},AvQ:function(){var B;if(A._GetAutoObject(C.Abh).AvN){this.UpdateMeasureState(
1);A._GetAutoObject(A.Device.Helper).AIS(this);}},AgS:function(){var B;A._GetAutoObject(
A.Device.Helper).Sg.AvS(this);this.UpdateMeasureState(0);},Ael:function(){var K=
this.K;A.aa8("%s",PH);this.UpdateScanState(1);A.ow([this,K.Azc],this);},AmQ:function(
){var K=this.K;var B;A.aa8("%s",N0);K.AhZ.AvS(this);this.UpdateScanState(0);},SetSystemTime:
function(Ahf){},AvM:function(){A.Device.DeviceClass.A83.call(this);this.Yr(1);},
AEe:function(){A.Device.DeviceClass.A81.call(this);this.Yr(2);},Cg:function(E){this.
UpdateOverlayMenu(E);},Avn:function(E){this.UpdateUnderTemp(E);},Aa9:function(E){
this.UpdateSyncState(E);},AA4:function(){var aString;aString=((((((((((CJ+A.aaC(
0,9).toFixed())+Fn)+A.aaC(0,9).toFixed())+N1)+OK)+A.aaC(30,90).toFixed())+A.z2(A.
abg.AEK))+N1)+KF)+A.aaC(1,100).toFixed())+OL;return aString;},PopupStateChanged:
function(Km,Ae){var Afo=A._NewObject(C.PopupContext,0);Afo.Id=Km;Afo.GN=Ae;this.
AmH.Trigger(Afo,false);},ADO:function(E){this.UpdateVibrationOnKeypressEnabled(E
);},Ad1:function(E){this.UpdateVibrationOn(E);},Ave:function(E){this.UpdateRatingMode(
E);},AdR:function(E){this.UpdateFlashLightOn(E);},Yz:function(E){this.UpdateTopLightOn(
E);},Aa7:function(E){this.UpdateRGBTopLight(E);},AuK:function(E){this.UpdateAutoRegistrationMode(
E);},Aqo:function(E){this.UpdateScanTransponder(E.Id,E.TransponderType,E.TransponderProtocol
);},Py:function(E){this.UpdateDigitsID(E);},Qx:function(E){this.UpdateOffsetID(E
);},ADS:function(E){this.UpdateWeightValue(E);},Au7:function(E){this.UpdateMassUnit(
E);},Ap1:function(E){A.Device.DeviceClass.A8X.call(this,E);this.UpdateActiveActions(
E);},Ap2:function(E){A.Device.DeviceClass.A8Y.call(this,E);this.UpdateActiveActionsOrder(
E);},AaY:function(E){A.Device.DeviceClass.A8Z.call(this,E);this.UpdateAutoActions(
E);},AEE:function(){var K=this.K;this.UpdateMeasureState(1);K.Bxu.call(this,this
);},Aq3:function(){var K=this.K;var B;K.ZK.AvS(this);this.UpdateMeasureState(0);
},DU:function(E){this.UpdateAnimalType(E);},Avo:function(E){this.UpdateWeightRecordingMode(
E);},ADs:function(E){this.UpdatePredictedTempValue(E);},Sd:function(L0){A.aa8("%s%i"
,Nc,L0);},ACW:function(E){this.UpdateDemoMode(E);},ACG:function(E){this.UpdateAgeRegistration(
E);},Avp:function(E){this.UpdateWeightRecordingScope(E);},JM:function(E){this.UpdateGender(
E);},Aqf:function(E){this.UpdateIDLastUsedMale(E);},Aqe:function(E){this.UpdateIDLastUsedFemale(
E);},AaX:function(E){this.UpdateAnimalListContent(E);},ACI:function(E){this.UpdateAlarmListAction(
E);},ACZ:function(E){this.UpdateFlashLightInMeasureState(E);},AdP:function(E){this.
UpdateAnimalInfoContent(E);},ADR:function(E){this.UpdateWatchListAction(E);},AC0:
function(E){this.UpdateFreshCowListAction(E);},AqJ:function(H){this.Ap1(15359);this.
Ap2(OM);},AqL:function(H){this.AaY(Sr);},AuI:function(E){this.UpdateAnimalTypesString(
E);},Aqp:function(E){this.UpdateTemperaturesHighString(E);},Aqq:function(E){this.
UpdateTemperaturesLowString(E);},AqN:function(H){this.AuI(T8);this.Aqq(V8);this.
Aqp(V9);this.Avn(3600);},ADn:function(E){this.UpdateNoTransponderListAction(E);}
,Au2:function(E){this.UpdateFreshCowsHideMeasured(E);},Aqj:function(E){this.UpdateNaisIdLastUsedMale(
E);},Aqi:function(E){this.UpdateNaisIdLastUsedFemale(E);},Ava:function(E){this.UpdateNaisIdIncrementMale(
E);},Au$:function(E){this.UpdateNaisIdIncrementFemale(E);},UpdateFirmware:function(
){A.Device.DeviceClass.A84.call(this);A._GetAutoObject(A.kh.A0).BY(61);},Ams:function(
E){this.UpdateBootloaderMessage(E);},ACE:function(E){this.UpdateActionListAction(
E);},AuG:function(E){this.UpdateActionListHideMeasured(E);},Tz:function(E){this.
UpdateAnimalIdGenerationMethod(E);},AuU:function(E){this.UpdateDirectionOfCountingFemale(
E);},AuV:function(E){this.UpdateDirectionOfCountingMale(E);},AuW:function(E){this.
UpdateDirectionOfCountingUnisex(E);},Aqg:function(E){this.UpdateIDLastUsedUnisex(
E);},Aqk:function(E){this.UpdateNaisIdLastUsedUnisex(E);},Avb:function(E){this.UpdateNaisIdIncrementUnisex(
E);},Ajq:function(E){this.UpdateEartagNrAssignmentMode(E);},NO:function(E){this.
UpdateBreed(E);},ADh:function(E){throw new Error(I_);},ADb:function(E){throw new
Error(I_);},ADL:function(E){throw new Error(I_);},ACL:function(E){throw new Error(
I_);},ACX:function(E){this.UpdateDryCowListAction(E);},AHv:function(AXJ){var HP;
switch(AXJ){case 15:HP=false;break;default:HP=true;}return HP;},ADm:function(E){
this.UpdateNoNaisIdListAction(E);},ACK:function(E){this.UpdateBirthListAction(E);
},ADM:function(E){this.UpdateTransferProgress(E);},Aqr:function(E){this.UpdateTransferTarget(
E);},Aq2:function(){var B;A.ow([B=A._GetAutoObject(C.AqZ),B.Bci],this);},Avd:function(
E){this.UpdatePremisesID(E);},Au_:function(E){this.UpdateMotherSelectionDriedOffFilter(
E);},AC1:function(E){this.UpdateFreshCowSpan(E);},ADN:function(E){this.UpdateUSBState(
E);},Aq1:function(Ag$){var K=this.K;var result=A._NewObject(C.AiC,0);result.AAs=
Ag$;result.FileName=K.BeT.call(this,Ag$);switch(Ag$){case 0:K.Buv.call(this,result
);break;case 1:K.Bus.call(this,result);break;case 2:K.Buw.call(this,result);break;
default:throw new Error(T9+Ag$.toFixed());}K.AHE=result;return result;},ApG:function(
){return true;},Ao6:function(QX){var K=this.K;switch(QX.AAs){case 0:A._GetAutoObject(
A.Device.Device).A5(72,true,A.jm,0,[this,K.AZ3]);break;case 1:A._GetAutoObject(A.
Device.Device).A5(90,true,A.jm,0,[this,K.AZ3]);break;case 2:A._GetAutoObject(A.Device.
Device).A5(100,true,A.jm,0,[this,K.AZ3]);break;default:throw new Error(V_+QX.AAs.
toFixed());}},ADz:function(E){throw new Error(I_);},AuH:function(E){this.UpdateAnimalIdAutoGenerationMethod(
E);},ADB:function(E){this.UpdateShutdownTimer(E);},Ap8:function(E){this.UpdateAnimalListInfoItemMode(
E);},AqO:function(H){this.AuJ(V$);this.Aqv(Y5);this.Aqu(Ss);this.Aqt(Ss);this.Aqw(
Y6);},Aqu:function(E){this.UpdateWeightGainsHighString(E);},Aqv:function(E){this.
UpdateWeightGainsLowString(E);},AuJ:function(E){this.UpdateAnimalTypesWeightGainsString(
E);},Aqt:function(E){this.UpdateWeightGainsAverageString(E);},Aqw:function(E){this.
UpdateWeightValueBirthString(E);},AuX:function(E){this.UpdateEvaluationAnimalType(
E);},Avg:function(E){this.UpdateStartScreen(E);},ABS:function(){return 1;},ABT:function(
){return 1;},ADg:function(E){this.UpdateMaximumAgeNewOnFarm(E);},Avm:function(E){
this.UpdateTransponderAssignmentIdChangeMethod(E);},ADt:function(E){this.UpdatePurchasedAnimalsListAction(
E);},M8:function(E){this.UpdateWhereAbouts(E);},Ap4:function(E){this.UpdateActiveMassRecordingFields(
E);},Ap5:function(E){this.UpdateActiveMassRecordingFieldsOrder(E);},AqK:function(
H){this.Ap4(A.jm);this.Ap5(Wa);},ADe:function(E){this.UpdateMassRecordingDateOfBirthMandatory(
E);},Bxh:function(H){switch(this.Kt){case 34:case 35:case 32:case 50:case 55:case
63:case 91:{this.UpdateScanTransponder(12310020,1,0);this.UpdateScanState(2);}break;
case 15:break;default:this.UpdateScanState(4);}},Azc:function(H){var K=this.K;var
B;if((this.ScanState===1)&&K.AsK.AEw)K.AhZ.AED(this);A.aa8("%s",T_);},Bxu:function(
H){var K=this.K;var B;if((this.MeasureState===1)&&K.AsK.AvN)K.ZK.AED(this);},Bx7:
function(H){this.UpdateMeasureState(3);},ARi:function(H){var K=this.K;var B;A.za([
B=A._GetAutoObject(A.Device.Helper),B.AIS],[B=K.AsK,B.A5B,B.AQT],0);this.Rs.ACV(
A._GetAutoObject(A.Device.Helper).A3A(8));this.R2.ACV(A._GetAutoObject(A.Device.
Helper).A3A(8));},A7C:function(H){var AxR=A._NewObject(A.Device.AvP,0);AxR.OnSetTimestamp(
1692954318);AxR.ADc(1);AxR.ADj(0);AxR.ADw(0);this.R2=AxR;var Axp=A._NewObject(A.
Device.AvP,0);Axp.OnSetTimestamp(1692954318);Axp.ADc(1);Axp.ADj(0);Axp.ADw(4);this.
Rs=Axp;var AkR=A._NewObject(A.Device.AtS,0);AkR.AC$(1);AkR.ADa(0);AkR.AC_(0);AkR.
ADJ(1);AkR.ADK(0);AkR.ADI(0);AkR.OnSetTimestamp(1692954318);this.Qs=AkR;var Ali=
A._NewObject(A.Device.AtS,0);Ali.AC$(1);Ali.ADa(0);Ali.AC_(0);Ali.ADJ(1);Ali.ADK(
0);Ali.ADI(0);Ali.OnSetTimestamp(1692954318);this.Si=Ali;this.AgP=A.z2(A.abg.Unknown
);},BuQ:function(aFilename,aMimeType,aContent){{var bb=new Blob([aContent],{type:
aMimeType});var a=document.createElement('a');a.download=aFilename;a.href=window.
URL.createObjectURL(bb);a.click();}},Buv:function(QX){var K=this.K;var B;var Ab4=
T$;var B_=A._NewObject(A.Device.Animal,0);var P;var Ala=0;for(P=0;P<A._GetAutoObject(
A.Device.Device).Ao.Ci();P++){B_.EU(P,A._GetAutoObject(A.Device.Device).Ao);if(B_.
IsRegistrationNoticePending&&(B_.NaisId>0)){Ab4=Ab4+(((((((((((((((((K.AkG.call(
this,A._GetAutoObject(A.Device.Device).YB)+String.fromCharCode(0x3B))+K.AkG.call(
this,B_.NaisId))+String.fromCharCode(0x3B))+K.A$h.call(this,B_.DateOfBirth))+String.
fromCharCode(0x3B))+K.A$l.call(this,B_.Breed))+String.fromCharCode(0x3B))+K.A$j.
call(this,B_.Gender))+String.fromCharCode(0x3B))+K.A$i.call(this,B_.EaseOfDelivery
))+String.fromCharCode(0x3B))+K.A$m.call(this,B_.WhereAbouts))+String.fromCharCode(
0x3B))+K.A$k.call(this,B_.BirthType))+String.fromCharCode(0x3B))+K.AkG.call(this
,B_.NaisIdMother))+N1);Ala++;}}QX.AAJ=Ab4;QX.ARJ=Ala;QX.Aq5=true;},AkG:function(
QY){if(!QY)return A.jm;return QY.toFixed();},A$h:function(AXI){var Aq=A._NewObject(
A.Core.Bu,0);Aq.Initialize(AXI);return Aq.Format(QS);},A$l:function(AbQ){if(!AbQ
)return A.jm;return A._GetAutoObject(A.Device.Converter).A2f(AbQ).toFixed();},A$j:
function(LY){var result=A.jm;switch(LY){case 0:result=Wb;break;case 1:result=ON;
break;case 2:result=A.jm;break;default:A.aa8("%s",PJ+LY.toFixed());}return result;
},A$i:function(AGT){if(!AGT)return A.jm;return AGT.toFixed();},A$m:function(AeT){
if(!AeT)return A.jm;return AeT.toFixed();},A$k:function(ArN){return(ArN+1).toFixed(
);},AZ3:function(H){var K=this.K;var Ar=(A.Device.PopupContext.isPrototypeOf(H)?
H:null);if(!!Ar&&(Ar.PopupState===7))K.BuQ.call(this,K.AHE.FileName,Ua,K.AHE.AAJ
);},Bus:function(QX){var K=this.K;var B;var Ab4=Y7;var B_=A._NewObject(A.Device.
Animal,0);var P;var Ala=0;for(P=0;P<A._GetAutoObject(A.Device.Device).Ao.Ci();P++
){var Axl=A.jm;if(B_.ApF())Axl=K.BuY.call(this,B_.FirstBodyWeight);B_.EU(P,A._GetAutoObject(
A.Device.Device).Ao);Ab4=Ab4+(((((((((((K.AkG.call(this,B_.NaisId)+String.fromCharCode(
0x3B))+K.BuV.call(this,B_.VisualId))+String.fromCharCode(0x3B))+K.AkG.call(this,
B_.TransponderId))+String.fromCharCode(0x3B))+K.BuU.call(this,B_.DateOfBirth))+String.
fromCharCode(0x3B))+K.BuX.call(this,B_.Gender))+String.fromCharCode(0x3B))+Axl)+
N1);Ala++;}QX.AAJ=Ab4;QX.ARJ=Ala;QX.Aq5=true;},BeT:function(Ag$){var AHS=A.jm;var
Ad=A._NewObject(A.Core.Bu,0);Ad.Initialize(A._GetAutoObject(A.Device.Helper).DK(
));switch(Ag$){case 0:AHS=Ad.Format(Wc);break;case 1:AHS=Ad.Format(Y8);break;case
2:AHS=Ad.Format(Y9);break;default:throw new Error(T9+Ag$.toFixed());}return AHS;
},BuV:function(QY){return QY.toFixed();},BuX:function(LY){var result=A.jm;switch(
LY){case 0:result=Wd;break;case 1:result=We;break;case 2:result=St;break;default:
A.aa8("%s",PJ+LY.toFixed());}return result;},BuY:function(N5){if(N5<=0)return A.
jm;return A._GetAutoObject(A.Device.Converter).Am2(N5);},BuU:function(AXI){var Aq=
A._NewObject(A.Core.Bu,0);Aq.Initialize(AXI);return Aq.Format(Y_);},Buw:function(
QX){var K=this.K;var B;var Ab4=T$;var B_=A._NewObject(A.Device.Animal,0);var P;var
Ala=0;for(P=0;P<A._GetAutoObject(A.Device.Device).Ao.Ci();P++){B_.EU(P,A._GetAutoObject(
A.Device.Device).Ao);if(B_.IsRegistrationNoticePending&&(B_.NaisId>0)){Ab4=Ab4+(((((((((((((((((
K.AkG.call(this,A._GetAutoObject(A.Device.Device).YB)+String.fromCharCode(0x3B))+
K.AkG.call(this,B_.NaisId))+String.fromCharCode(0x3B))+K.A$h.call(this,B_.DateOfBirth
))+String.fromCharCode(0x3B))+K.A$l.call(this,B_.Breed))+String.fromCharCode(0x3B
))+K.A$j.call(this,B_.Gender))+String.fromCharCode(0x3B))+K.A$i.call(this,B_.EaseOfDelivery
))+String.fromCharCode(0x3B))+K.A$m.call(this,B_.WhereAbouts))+String.fromCharCode(
0x3B))+K.A$k.call(this,B_.BirthType))+String.fromCharCode(0x3B))+K.AkG.call(this
,B_.NaisIdMother))+N1);Ala++;}}QX.AAJ=Ab4;QX.ARJ=Ala;QX.Aq5=true;},_Init:function(
aArg){var K=this.K;A.abm.F_._Init.call(K.AhZ={I:this},0);A.abm.F_._Init.call(K.ZK={
I:this},0);K.__proto__=C.DeviceClass;this.AuL(100);this.Amw(1);this.Aqf(200);this.
Aqe(100);this.Aqj(276000912345678);this.Aqi(276000923456789);this.Aqg(500);this.
Aqk(276000901234567);this.NO(1);K.AhZ.IF(1);K.AhZ.Fz(1000);K.ZK.VJ(0);K.ZK.IF(1);
K.ZK.Fz(750);K.ZK.BZ=50000;K.AhZ.R4=[this,K.Bxh];K.AsK=A._GetAutoObject(C.Abh);K.
ZK.R4=[this,K.Bx7];K.ZK.Q=[this,this.ACC,this.AGG];K.Init.call(this,aArg);A.hJ++;
},_Done:function(){var K=this.K;K.__proto__=null;K.AhZ._Done();K.ZK._Done();A.hJ--;
},_ReInit:function(){var K=this.K;K.AhZ._ReInit();K.ZK._ReInit();K.C7.call(this);
},_Mark:function(D){var B;if((B=this.AsK)&&(B._cycle!=D))B._Mark(B._cycle=D);if((
B=this.AHE)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.AhZ)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.ZK)._cycle!=D)B._Mark(B._cycle=D);},_variants:function(){
return A.abq.DeviceClass._variants();},_className:"DeviceSimulation::DeviceClass"
};C.AEX={A3:0,_Init:function(aArg){C.VD._Init.call(this,aArg);this.__proto__=C.AEX;
},_className:"DeviceSimulation::UInt8"};C.AEV={A3:0,_Init:function(aArg){C.VD._Init.
call(this,aArg);this.__proto__=C.AEV;},_className:"DeviceSimulation::UInt32"};C.
HelperClass={A00:0,ADC:function(E){var K=this.K;K.A00=K.A00+(E-this.DK());A.Device.
HelperClass.A80.call(this,E);},DK:function(){var K=this.K;return A.Device.HelperClass.
A8W.call(this)+K.A00;},_Init:function(aArg){var K=this.K;K.__proto__=C.HelperClass;
A.hJ++;},_Done:function(){var K=this.K;K.__proto__=null;A.hJ--;},_ReInit:function(
){},_Mark:function(D){},_variants:function(){return this;},_className:"DeviceSimulation::HelperClass"
};C.A7J={AvN:false,AEw:false,AQS:function(E){if(this.AEw===E)return;this.AEw=E;A.
aat([this,this.A5A,this.AQS],0);},A5A:function(){return this.AEw;},AQT:function(
E){if(this.AvN===E)return;this.AvN=E;A.aat([this,this.A5B,this.AQT],0);},A5B:function(
){return this.AvN;},Bhr:function(){return true;},_Init:function(aArg){this.__proto__=
C.A7J;A.hJ++;},_Done:function(){this.__proto__=null;A.hJ--;},_ReInit:function(){
},_Mark:function(D){var B;if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null
,_cycle:0,_observers:null,_className:"DeviceSimulation::SimulationConfigClass"};
C.Abh={_Init:function(){C.A7J._Init.call(this,0);},_variants:function(){return A.
abq.Abh._variants();},_this:null};C.PopupContext={GN:1,Id:0,_Init:function(aArg){
this.__proto__=C.PopupContext;A.hJ++;},_Done:function(){this.__proto__=null;A.hJ--;
},_ReInit:function(){},_Mark:function(D){var B;if((B=this.I)&&(B._cycle!=D))B._Mark(
B._cycle=D);},I:null,_cycle:0,_observers:null,_className:"DeviceSimulation::PopupContext"
};C.Rating={Cp:function(AF){var Hq=A.Device.Rating.A82.call(this,AF);if(Hq){var Q3=
A._GetAutoObject(A.Device.Device).Ao;var Ab=A._GetAutoObject(A.Device.Device).Ao.
K2(0,this.AnimalId);if(Ab!==-1){var Jf=Q3.Oo();if(Jf<=0)A.aa8("%s",Y$);else{var B_=
A._NewObject(A.Device.Animal,0);B_.EU(Ab,Q3);if((this.Temperature>0)&&(B_.TimestampLastTemperature<
this.Timestamp)){Q3.A7B(Ab,5,this.Temperature);Q3.AjP(Ab,17,this.RatingTemperature
);Q3.Abf(Ab,30,this.Timestamp);}if(this.BodyWeight>0){if(B_.TimestampLastWeighing<=
this.Timestamp){Q3.ARU(Ab,18,this.BodyWeight);Q3.Abf(Ab,19,this.Timestamp);}if(!
B_.TimestampFirstWeighing||(B_.TimestampFirstWeighing>=this.Timestamp)){Q3.ARU(Ab
,23,this.BodyWeight);Q3.Abf(Ab,24,this.Timestamp);Q3.G$(Ab,25,this.Id);}}if(A._GetAutoObject(
A.Device.Helper).AD9(this)){var Lw=A._GetAutoObject(A.Device.Helper).AA9(this);Q3.
AjP(Ab,13,Lw);Q3.Abf(Ab,31,this.Timestamp);}Q3.Oq(Jf);}}}return Hq;},_Init:function(
aArg){var K=this.K;K.__proto__=C.Rating;A.hJ++;},_Done:function(){var K=this.K;K.
__proto__=null;A.hJ--;},_ReInit:function(){},_Mark:function(D){},_variants:function(
){return this;},_className:"DeviceSimulation::Rating"};C.PD={Go:A.aan(512,null,null
),O1:0,AHl:0,AI0:0,A03:A.aan(10,0,{0:3600,1:3750,2:3900,3:4200,4:3780,5:3600,6:3900
,7:4010,8:4020,9:4030}),AIB:0,A0B:A.aan(10,0,{0:5,1:4,2:3,3:1,4:2,5:1,6:1,7:1,8:
1,9:1}),Bac:512,Ayd:-1,AYi:A.aan(15,0,{0:2,1:2,2:2,3:2,4:2,5:3,6:3,7:3,8:3,9:3,10:
1,11:1,12:1,13:1,14:1}),AIa:false,CE:function(Ab,AX){var A8=this.Tb(Ab);if(!!A8)
return A8.CE(AX);return 0;},U9:function(Ab,AX){var A8=this.Tb(Ab);if(!!A8)return A8.
U9(AX);return A.jm;},HT:function(Ab,AX){var A8=this.Tb(Ab);if(!!A8)return A8.HT(
AX);return false;},U_:function(Ab,AX){var A8=this.Tb(Ab);if(!!A8)return A8.U_(AX
);return 0;},RP:function(Ab,AX){var A8=this.Tb(Ab);if(!!A8)return A8.RP(AX);return 0;
},Oo:function(){if(this.AIa)throw new Error(Abz);this.AIa=true;return 12345;},Oq:
function(Ant){if(!this.AIa)throw new Error(Su);if(Ant!==12345)throw new Error(AbA
);this.AIa=false;return true;},XN:function(){return this.A1C(A._NewObject(C.AEh,
0));},YM:function(Ab,AX,CW){var A8=this.Tb(Ab);if(!!A8)return A8.YM(AX,CW);return false;
},G$:function(Ab,AX,CW){var A8=this.Tb(Ab);if(!!A8)return A8.G$(AX,CW);return false;
},YL:function(Ab,AX,CW){var A8=this.Tb(Ab);if(!!A8)return A8.YL(AX,CW);return false;
},M$:function(Ab,AX,CW){var A8=this.Tb(Ab);if(!!A8)return A8.M$(AX,CW);return false;
},YK:function(Ab,AX,CW){var A8=this.Tb(Ab);if(!!A8)return A8.YK(AX,CW);return false;
},OnSetId:function(E){if(this.Id===E)return;this.Id=E;this.A_V();switch(this.Id){
case 0:{this.Bac=128;A.ow([this,this.Bsq],this);}break;case 1:A.ow([this,this.Bss
],this);break;case 3:A.ow([this,this.Bsp],this);break;case 4:A.ow([this,this.Bsr
],this);break;case 2:break;default:throw new Error(AbB+this.Id.toFixed());}},Ci:
function(){return this.O1;},LB:function(Ab,AX){var A8=this.Tb(Ab);if(!!A8)return A8.
LB(AX);return 0;},TN:function(Ab,AX,CW){var A8=this.Tb(Ab);if(!!A8)return A8.TN(
AX,CW);return false;},G_:function(){this.A_V();return true;},Hx:function(){return this.
Bac;},A1C:function(Ab){if(this.O1>=512)throw new Error(Za);this.Go.Set(this.O1,Ab
);this.O1=this.O1+1;switch(this.Id){case 0:{this.Ayd=this.O1;this.G$(this.O1-1,0
,this.Ayd);}break;case 1:{this.Ayd=this.O1-1;this.G$(this.O1-1,0,this.Ayd);}break;
default:;}A.ow([this,this.Ajk],this);return this.O1-1;},Tb:function(aIndex){if((
aIndex<0)||(aIndex>=512))return null;return this.Go.Get(aIndex);},A_V:function(){
var P;for(P=0;P<512;P=P+1)this.Go.Set(P,null);this.O1=0;this.AHl=0;this.AIB=0;this.
AI0=0;A.ow([this,this.Ajk],this);},AH7:function(){this.AHl=(this.AHl+1)%15;return this.
AYi.Get(this.AHl);},AY7:function(){this.AI0=(this.AI0+1)%10;return this.A03.Get(
this.AI0);},AHU:function(H){if(this.K&&this.K.AHU)return this.K.AHU.apply(this,arguments
);else return C.PD.Bsy.apply(this,arguments);},Bsy:function(H){var B;var Oa=true;
this.Bi(276000312310001,10,1,A._GetAutoObject(A.Device.Helper).AgU(12),0,1,true,
true,false,true,39000,0,0,false,0,false,0,0,0,0);this.Bi(12310020,20,12,A._GetAutoObject(
A.Device.Helper).AgU(12),0,0,false,false,true,true,36500,0,0,false,0,false,0,0,0
,0);this.Bi(276000312310021,10,1,A._GetAutoObject(A.Device.Helper).AgU(9),0,0,true
,false,false,true,37200,0,0,false,0,false,0,0,0,0);this.Bi(276000312310022,20,2,
A._GetAutoObject(A.Device.Helper).AgU(830),0,1,false,false,false,true,41200,A._GetAutoObject(
A.Device.Helper).AgU(1),1,true,1,false,0,0,0,0);this.Bi(276000312310023,20,2,A._GetAutoObject(
A.Device.Helper).AgU(1200),0,1,false,false,false,true,43500,A._GetAutoObject(A.Device.
Helper).AgU(8),2,false,1,false,0,0,0,0);this.Bi(276000312310026,20,2,A._GetAutoObject(
A.Device.Helper).AgU(8),0,0,true,false,false,true,34000,0,0,false,0,false,0,0,0,
0);var P;var Bco=0;for(P=1;P<=7;P=P+1){Bco=3680+(20*P);Oa=Bco>3800;this.Bi(276000312310050+(((
B=P)<0)?B+0x10000000000000000:B),30+(P%3),3,A._GetAutoObject(A.Device.Helper).AgU(
7-P),0,1,Oa,false,false,true,36000+(P*900),0,0,false,0,true,0,0,0,0);}},Bsq:function(
s){this.AHU(s);},AHW:function(H){if(this.K&&this.K.AHW)return this.K.AHW.apply(this
,arguments);else return C.PD.BsA.apply(this,arguments);},BsA:function(H){var Ad=
A._GetAutoObject(A.Device.Helper).DK();var P;Ad=Ad-2678400;var Ahz;var A$a;for(P=
0;P<32;P=P+1){var AYS=this.Bu_();for(;AYS>0;AYS=AYS-1){Ahz=this.AY7();A$a=A._GetAutoObject(
A.Device.Converter).Aq7(0,Ahz);this.AE(Ad,12310020,Ahz,A$a,this.AH7(),this.AH7()
,this.AH7(),this.AH7(),0);}Ad=Ad+86400;}Ad=Ad-86400;this.AE(Ad,12310020,0,0,0,0,
0,0,43700);this.AE(Ad-86400,276000312310001,0,0,0,0,0,0,49800);this.AE(Ad,276000312310001
,0,0,0,0,0,0,51000);Ahz=this.AY7();this.AE(Ad,276000312310001,Ahz,A._GetAutoObject(
A.Device.Converter).Aq7(0,Ahz),1,3,3,3,0);Ahz=this.AY7();this.AE(Ad-86400,276000312310022
,3800,A._GetAutoObject(A.Device.Converter).Aq7(1,3800),2,3,3,3,0);this.AE(Ad,276000312310022
,Ahz,A._GetAutoObject(A.Device.Converter).Aq7(1,Ahz),2,3,3,3,0);},Bss:function(s
){this.AHW(s);},Bi:function(Km,BsW,Btb,A91,ArN,LY,Bs3,Bs9,Bs6,Bs7,N5,BsI,Bs$,Bs5
,Eg,Bs8,AbQ,AGT,AeT,Btg){var B_=A._NewObject(A.Device.Animal,0);B_.Gd();B_.Avq(0
);B_.AdY(0);B_.TC(false);B_.Ajw(false);B_.M7(Km);B_.M6(Km);B_.TE(A._GetAutoObject(
A.Device.Helper).Aj2(B_.TransponderId));B_.Aa3(BsW);B_.Amx(Btb);B_.R7(A91);B_.Ajo(
ArN);B_.JM(LY);B_.AmO(Bs3);B_.AEp(Bs9);B_.Agx(Bs7);B_.TC(Bs6);B_.Aqh(Bs5);B_.Au5(
Bs$);B_.AuR(BsI);B_.DU(Eg);B_.Agy(Bs8);B_.NO(AbQ);B_.Ajr(AGT);B_.M8(AeT);B_.Amz(
Btg);B_.Cp(this);if(N5>0)A._GetAutoObject(C.AvB).AE(A91,Km,0,0,0,0,0,0,N5);},AE:
function(LX,AbO,Anr,Bts,BsQ,BsR,BsB,Btu,BsC){var BU=A._NewObject(A.Device.Rating
,0);BU.Gd();var A_D=A._GetAutoObject(C.AoT).AL9(26,AbO);if(A_D>=0)BU.OnSetAnimalId(
A._GetAutoObject(C.AoT).CE(A_D,0));else A.aa8("%s%U",Wf,AbO);BU.OnSetTimestamp(LX
);BU.OnSetTemperature(Anr);BU.OnSetRatingTemperature(Bts);BU.OnSetFaeces(BsQ);BU.
OnSetFeed(BsR);BU.OnSetAppearance(BsB);BU.OnSetRespiratory(Btu);BU.OnSetBodyWeight(
BsC);BU.Cp(this);},A3f:function(aColumn,A4){var P;for(P=0;P<this.O1;P=P+1)if(this.
Go.Get(P).CE(aColumn)===A4)return P;return-1;},Bu_:function(){this.AIB=(this.AIB+
1)%10;return this.A0B.Get(this.AIB);},AHT:function(H){if(this.K&&this.K.AHT)return this.
K.AHT.apply(this,arguments);else return C.PD.Bsx.apply(this,arguments);},Bsx:function(
H){this.AkL(10,Zb);this.AkL(20,AeG);this.AkL(30,AeH);this.AkL(31,LV);this.AkL(32
,AbC);},Bsp:function(s){this.AHT(s);},AkL:function(Km,BsX){var AHf=A._NewObject(
A.Device.AnimalGroup,0);AHf.Gd();AHf.OnSetId(Km);AHf.AC3(BsX);AHf.Cp(this);},Aak:
function(){return this.Ayd;},AL9:function(aColumn,A4){var P;for(P=0;P<this.O1;P=
P+1)if(this.Go.Get(P).LB(aColumn)===A4)return P;return-1;},AHV:function(H){if(this.
K&&this.K.AHV)return this.K.AHV.apply(this,arguments);else return C.PD.Bsz.apply(
this,arguments);},Bsz:function(H){this.Zv(2016,216,6);this.Zv(2017,217,7);this.Zv(
2018,218,8);this.Zv(2019,219,9);this.Zv(2020,220,10);this.Zv(2021,221,11);},Bsr:
function(s){this.AHV(s);},Zv:function(AbX,BsM,BsL){var Uj=A._NewObject(A.Device.
CalfDeregistrations,0);Uj.Gd();Uj.AjC(AbX);Uj.AuT(BsM);Uj.AuS(BsL);Uj.Cp(this);}
,_Init:function(aArg){A.Device.ITable._Init.call(this,aArg);(this.Go=[]).__proto__=
C.PD.Go;(this.A03=[]).__proto__=C.PD.A03;(this.A0B=[]).__proto__=C.PD.A0B;(this.
AYi=[]).__proto__=C.PD.AYi;this.__proto__=C.PD;var Lh=this._variants();if(Lh){this.
K={};Lh._Init.call(this,aArg);}},_Done:function(){if(this.K)this.K._Done.call(this
);this.__proto__=A.Device.ITable;A.Device.ITable._Done.call(this);},_ReInit:function(
){A.Device.ITable._ReInit.call(this);if(this.K)this.K._ReInit.call(this);},_Mark:
function(D){var B;A.Device.ITable._Mark.call(this,D);A.aaf(this.Go,D);if(this.K)
this.K._Mark(D);},_variants:function(){return A.abq.PD._variants();},K:null,_className:
"DeviceSimulation::TableData"};C.AoT={_Init:function(){C.PD._Init.call(this,0);this.
OnSetId(0);},_variants:function(){return this;},_this:null};C.AzH={_Init:function(
){C.PD._Init.call(this,0);this.OnSetId(3);},_variants:function(){return this;},_this:
null};C.AvB={_Init:function(){C.PD._Init.call(this,0);this.OnSetId(1);},_variants:
function(){return this;},_this:null};C.Gv={AkE:A.aan(128,null,null),Gg:null,AnT:
0,CE:function(Ab,AX){var A8=this.Zt(Ab);if(!!A8)return A8.CE(AX);return 0;},U9:function(
Ab,AX){var A8=this.Zt(Ab);if(!!A8)return A8.U9(AX);return A.jm;},HT:function(Ab,
AX){var A8=this.Zt(Ab);if(!!A8)return A8.HT(AX);return false;},OnSetId:function(
E){if(this.Id===E)return;this.Id=E;switch(this.Id){case 0:this.ADV(A._GetAutoObject(
C.AoT));break;case 1:this.ADV(A._GetAutoObject(C.AvB));break;case 3:this.ADV(A._GetAutoObject(
C.AzH));break;case 4:this.ADV(A._GetAutoObject(C.Az6));break;case 2:break;default:
throw new Error(AbB+this.Id.toFixed());}},Ci:function(){if(!!this.Filter)return this.
AnT;else if(!!this.Gg)return this.Gg.O1;return 0;},Bk:function(E){A.Device.ITable.
Bk.call(this,E);this.AYg(this);},U_:function(Ab,AX){var A8=this.Zt(Ab);if(!!A8)return A8.
U_(AX);return 0;},RP:function(Ab,AX){var A8=this.Zt(Ab);if(!!A8)return A8.RP(AX);
return 0;},Oo:function(){if(!!this.Gg)return this.Gg.Oo();return-1;},Oq:function(
Ant){var Hq=false;if(!!this.Gg)Hq=this.Gg.Oq(Ant);if(Hq)A.ow([this,this.AYg],this
);return Hq;},XN:function(){if(!!this.Filter)throw new Error(Lg+A._GetAutoObject(
A.Device.Converter).Bex(this.Id,this.Filter));if(!!this.Gg)return this.Gg.A1C(A.
_NewObject(C.AEh,0));return-1;},YM:function(Ab,AX,CW){var A8=this.Zt(Ab);if(!!A8
)return A8.YM(AX,CW);return false;},G$:function(Ab,AX,CW){var A8=this.Zt(Ab);if(
!!A8)return A8.G$(AX,CW);return false;},YL:function(Ab,AX,CW){var A8=this.Zt(Ab);
if(!!A8)return A8.YL(AX,CW);return false;},M$:function(Ab,AX,CW){var A8=this.Zt(
Ab);if(!!A8)return A8.M$(AX,CW);return false;},YK:function(Ab,AX,CW){var A8=this.
Zt(Ab);if(!!A8)return A8.YK(AX,CW);return false;},K2:function(aColumn,A4){if(!!this.
Filter){var P;for(P=0;P<this.AnT;P=P+1)if(this.AkE.Get(P).CE(aColumn)===A4)return P;
return-1;}else if(!!this.Gg)return this.Gg.A3f(aColumn,A4);return-1;},LB:function(
Ab,AX){var A8=this.Zt(Ab);if(!!A8)return A8.LB(AX);return 0;},TN:function(Ab,AX,
CW){var A8=this.Zt(Ab);if(!!A8)return A8.TN(AX,CW);return false;},AiN:function(aColumn
,A4){if(!!this.Filter){var P;for(P=0;P<this.AnT;P=P+1)if(this.AkE.Get(P).LB(aColumn
)===A4)return P;return-1;}else if(!!this.Gg)return this.Gg.AL9(aColumn,A4);return-
1;},G_:function(){if(!!this.Gg)return this.Gg.G_();return false;},AiL:function(aColumn
,A4){if(!!this.Gg)return this.Gg.A3f(aColumn,A4)>=0;return false;},AfV:function(
aColumn,A4){if(!!this.Gg)return this.Gg.AL9(aColumn,A4)>=0;return false;},Hx:function(
){if(!!this.Gg)return this.Gg.Hx();return 0;},Aak:function(){if(!!this.Gg)return this.
Gg.Aak();return-1;},Qb:function(){if(!!this.Gg)return this.Gg.O1;return 0;},AYg:
function(H){this.AYv();if(!!this.Filter&&!!this.Gg){var P;for(P=0;P<this.Gg.Ci();
P=P+1){var AYW=true;var Au=this.Filter.AMl();var A8=this.Gg.Tb(P);if(!!A8)while(
AYW&&!!Au){AYW=A8.Bfw(Au);Au=this.Filter.AMp(Au);}else A.aa8("%s",((Ag3+P.toFixed(
))+Am4)+this.Gg.Ci().toFixed());if(AYW){this.AkE.Set(this.AnT,this.Gg.Go.Get(P));
this.AnT=this.AnT+1;}}}A.ow([this,this.Ajk],this);},AYv:function(){var P;for(P=0;
P<128;P=P+1)this.AkE.Set(P,null);this.AnT=0;},ADV:function(E){if(this.Gg===E)return;
if(!!this.Gg)A.zl([this,this.A01],this.Gg,0);this.Gg=E;if(!!this.Gg){A.y_([this,
this.A01],this.Gg,0);A.ow([this,this.A01],this);}},A01:function(H){A.ow([this,this.
AYg],this);},Zt:function(aIndex){if(!!this.Filter){if((aIndex<0)||(aIndex>=128))
return null;else return this.AkE.Get(aIndex);}else if(!!this.Gg)return this.Gg.Tb(
aIndex);A.aa8("%s",N2+aIndex.toFixed());return null;},_Init:function(aArg){A.Device.
ITable._Init.call(this,aArg);(this.AkE=[]).__proto__=C.Gv.AkE;this.__proto__=C.Gv;
},_Mark:function(D){var B;A.Device.ITable._Mark.call(this,D);A.aaf(this.AkE,D);if((
B=this.Gg)&&(B._cycle!=D))B._Mark(B._cycle=D);},_className:"DeviceSimulation::FilteredTable"
};C.A7K={Kq:null,Acy:null,A0V:function(H){if(A._GetAutoObject(C.Abh).Bhr()===false
)return;switch(A._GetAutoObject(A.Device.Device).SyncState){case 0:{A._GetAutoObject(
A.Device.Device).Aa9(1);this.Acy.Ap(true);}break;case 1:{A._GetAutoObject(A.Device.
Device).Aa9(2);A._GetAutoObject(A.Device.Device).Aqr(A._GetAutoObject(A.Device.Device
).Ao.Qb());this.Kq.Fz(A._GetAutoObject(A.Device.Device).Aev*50);this.Kq.BZ=A._GetAutoObject(
A.Device.Device).Aev;this.Kq.Ap(true);}break;case 2:{A._GetAutoObject(A.Device.Device
).Aa9(3);this.Acy.Ap(true);}break;case 3:{A._GetAutoObject(A.Device.Device).Aa9(
4);A._GetAutoObject(A.Device.Device).Aqr(A._GetAutoObject(A.Device.Device).Ao.Qb(
));this.Kq.Fz(A._GetAutoObject(A.Device.Device).Aev*50);this.Kq.BZ=A._GetAutoObject(
A.Device.Device).Aev;this.Kq.Ap(true);}break;case 4:{A._GetAutoObject(A.Device.Device
).Aa9(5);this.Acy.Ap(true);}break;case 5:A.ow([this,this.Bci],this);break;case 7:
case 6:break;default:A.aa8("%s%e",Wg,A._GetAutoObject(A.Device.Device).SyncState
);}},BwA:function(H){this.Acy.Ap(false);A.ow([this,this.A0V],this);},BxB:function(
H){switch(A._GetAutoObject(A.Device.Device).SyncState){case 0:case 6:case 7:{A._GetAutoObject(
A.Device.Device).Aa9(0);A.ow([this,this.A0V],this);}break;default:;}},Bci:function(
H){this.Acy.Ap(false);this.Kq.Ap(false);A._GetAutoObject(A.Device.Device).Aa9(0);
},_Init:function(aArg){A.abm.F_._Init.call(this.Kq={I:this},0);A.Core.Timer._Init.
call(this.Acy={I:this},0);this.__proto__=C.A7K;var B;this.Kq.IF(1);this.Acy.Qz(2000
);this.Kq.R4=[this,this.A0V];this.Kq.Q=[B=A._GetAutoObject(A.Device.Device),B.AQh
,B.AXi];this.Acy.M9=[this,this.BwA];A.hJ++;},_Done:function(){this.__proto__=null;
this.Kq._Done();this.Acy._Done();A.hJ--;},_ReInit:function(){this.Kq._ReInit();this.
Acy._ReInit();},_Mark:function(D){var B;if((B=this.Kq)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Acy)._cycle!=D)B._Mark(B._cycle=D);if((B=this.I)&&(B._cycle!=D))B.
_Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:"DeviceSimulation::SimulationHelperClass"
};C.AqZ={_Init:function(){C.A7K._Init.call(this,0);},_variants:function(){return this;
},_this:null};C.AEW={A3:0,_Init:function(aArg){C.VD._Init.call(this,aArg);this.__proto__=
C.AEW;},_className:"DeviceSimulation::UInt64"};C.Az6={_Init:function(){C.PD._Init.
call(this,0);this.OnSetId(4);},_variants:function(){return this;},_this:null};C.
FactoryResetScope={DI:function(){return 1;},_Init:function(aArg){var K=this.K;K.
__proto__=C.FactoryResetScope;this.Cx.Set(0,1);A.hJ++;},_Done:function(){var K=this.
K;K.__proto__=null;A.hJ--;},_ReInit:function(){},_Mark:function(D){},_variants:function(
){return this;},_className:"DeviceSimulation::FactoryResetScope"};C.W5={AcY:null
,CM:function(H){var K=this.K;A.aa8("%s",Am5);K.AcY.Ap(true);},E_:function(H){var
K=this.K;if(K.AcY.Bv===true){K.AcY.Ap(false);A.aa8("%s",Ag4);}},BgD:function(H){
var K=this.K;K.AcY.Ap(false);A._GetAutoObject(A.kh.A0).AgD(A._GetAutoObject(A.Device.
Device).AvR);},_Init:function(aArg){var K=this.K;A.Core.Timer._Init.call(K.AcY={
I:this},0);K.__proto__=C.W5;this.AdC.G(Ag5);K.AcY.Qz(1500);this.TO.R(AbD);this.TO.
X(true);this.AdC.At(A.zW(A.abi.AO4));K.AcY.M9=[this,K.BgD];A.hJ++;},_Done:function(
){var K=this.K;K.__proto__=null;K.AcY._Done();A.hJ--;},_ReInit:function(){var K=
this.K;K.AcY._ReInit();},_Mark:function(D){var B;if((B=this.AcY)._cycle!=D)B._Mark(
B._cycle=D);},_variants:function(){return this;},_className:"DeviceSimulation::BootScreen"
};C.AiC={AAJ:A.jm,_Init:function(aArg){A.Device.AiC._Init.call(this,aArg);this.__proto__=
C.AiC;},_className:"DeviceSimulation::DataExportContext"};
C._Init=function(){C.ABQ.__proto__=C.VD;C.String.__proto__=C.VD;C.Az0.__proto__=C.
VD;C.AEX.__proto__=C.VD;C.AEV.__proto__=C.VD;C.PD.__proto__=A.Device.ITable;C.Gv.
__proto__=A.Device.ITable;C.AEW.__proto__=C.VD;C.AiC.__proto__=A.Device.AiC;};C.
_ReInit=function(){var B;if((B=C.Abh._this))B._ReInit();if((B=C.AoT._this))B._ReInit(
);if((B=C.AzH._this))B._ReInit();if((B=C.AvB._this))B._ReInit();if((B=C.AqZ._this
))B._ReInit();if((B=C.Az6._this))B._ReInit();};C.DB=function(D){var B;if((B=C.Abh.
_this)&&(B._cycle!=D))B._Done(C.Abh._this=null);if((B=C.AoT._this)&&(B._cycle!=D
))B._Done(C.AoT._this=null);if((B=C.AzH._this)&&(B._cycle!=D))B._Done(C.AzH._this=
null);if((B=C.AvB._this)&&(B._cycle!=D))B._Done(C.AvB._this=null);if((B=C.AqZ._this
)&&(B._cycle!=D))B._Done(C.AqZ._this=null);if((B=C.Az6._this)&&(B._cycle!=D))B._Done(
C.Az6._this=null);};return C;})();

/* VitalControl demonstration application, © Urban GmbH & Co.KG 2023 */