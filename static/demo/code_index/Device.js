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
);if(index.Device)throw new Error("The unit file 'Device.js' included twice!");index.
Device=(function(){var A=index;var C={};
var Ce="ERROR: Cannot add criterion, it is already in the list.";var BD="ERROR: BatteryChargeState is read only";
var E6="ERROR: UpdateChargeActive is read only";var Hr="ERROR: ScanState is read only.";
var IU="ERROR: MeasureState is read only.";var Is="ERROR: Temperature value is read only";
var O4="ERROR: UpdateDataTable called for Undefined data table.";var P_="ERROR: UpdateDataTable called for unknown data table id=";
var P$="ERROR: SyncState is read only.";var CQ="ERROR: ScanTransponder is read only.";
var Ff="ERROR: Body weight value is read only";var L3="ERROR: Predicted temperature value is read only";
var Qa="ERROR: TransferProgress is read only";var J3="ERROR: TransferTarget is read only";
var Ob="ERROR: unhandled assessment.";var Qb="Unhandled enum BodyTemperature: ";
var MJ="AU";var S_="AT";var US="BE";var Z3="BA";var W5="BG";var It="CA";var UT="CN";
var Z4="TW";var W6="HR";var Z5="CY";var W7="CZ";var Z6="DK";var Z7="EE";var UU="FI";
var W8="FR";var O5="DE";var Z8="GR";var O6="HU";var Rn="IE";var W9="IT";var W_="JP";
var UV="LV";var Z9="LT";var Z_="LU";var W$="MT";var Xa="NL";var S$="NO";var UW="PL";
var UX="PT";var AcM="RO";var Ta="RU";var Z$="SK";var AfB="SI";var Aaa="ES";var Xb=
"SE";var Aab="CH";var Xc="TR";var AhX="UA";var KZ="UK";var AcN="US";var Lw=".";var
AhY="-";var Aoe="ERROR: Unhandled mass unit: ";var Oc=" ";var Xd="Unhandled gender";
var Aac="Unhandled animal type";var AfC="Unhandled Device::MassUnit.";var AhZ="Unhandled Device::AnimalListContent.";
var AcO="Avid";var UY="Ordicam / IER SA";var Aof="Agrident";var Aog="Datamars";var
Aoh="Allflex";var Aoi="Texas Instruments";var Alc="Nedap";var AsX="Digital Angel";
var Ax7="null";var Ax8="[ ";var O7=", ";var Ro=" ]";var Ax9="Unhandled language";
var UZ="Unhandled Device::AnimalListAction.";var AsY="Temperature unit conversion not supported: ";
var Ax_="->";var Ax$="=";var Aya=">";var Aoj="<";var AfD="!=";var Aok="WARNING: Unhandled operator.";
var IV="Unknown birth type";var Aol="Unhandled country: ";var AsZ="Unhandled Device::Action: ";
var Xe="ERROR: Cannot start transaction";var As0="ERROR: Table is null, cannot load row (";
var As1=")";var As2="Table Id mismatch!";var Aom="ERROR: Row index (";var As3=") out of bounds [0,";
var Ald="]";var Ayb="ERROR: Table is full. Item limit: ";var Ayc="Device::ScanTransponder not set";
var Ayd="Unhandled TransponderType.";var As4="Unhandled ScanState.";var Aye="Could not load animal with transponder";
var O8="Birth type";var Ayf="Time calving";var AV9="Pend. reg. notice";var AV_="Perished";
var AV$="Rating temp.";var AWa="Location";var AHq=" mother";var AHr="Reason leaving";
var AfE="Time alarm";var Aon="Time first weighing";var AWb="Time control";var AHs=
"Time temp.";var Ale="Time watch";var AHt="Time weighing";var AHu="Assessment";var
AWc="Time rating";var AWd="ERROR: Unhandled AnimalTable filter field:";var AHv="Field ";
var AWe="ERROR: Unhandled RatingTable filter field:";var AcP="ERROR: Unhandled table ";
var AWf=" filter fields.";var AWg=" [";var AWh="WARNING: Unhandled filter criterion type.";
var AHw="0";var As5="No table specified";var AHx="Invalid animal id generation method: ";
var AHy="Unhandled AnimalIdGenerationMethod: ";var Ayg="Invalid gender: ";var AHz=
"Invalid ear tag number assignment mode: ";var Ayh=";";var AWi="Invalid animal creation error code: ";
var AWj="Invalid EartagNrAssignmentMode: ";var AWk="Unsupported exponent: ";var AWl=
"Unknown whereabouts type: ";var AHA="Unhandled Gender: ";var AWm="Unhandled AnimalIdAutoGenerationMethod: ";
var MK="\n";var Ayi="\n\n";var AWn="Bootloader:\nV\xA0";var AWo="Middleware:\nV\xA0";
var AWp="GUI:\nV\xA0";var AWq="Mainboard: ";var AWr="Torchboard: ";var AHB="Operator not supported.";
var AWs="Unhandled Device::TransponderAssignmentIdChangeMethod: ";var Ayj="Unhandled mass deregistration criterion: ";
var As6="Unhandled enum value ";var Ayk="UNDEFINED";var AWt="Boot";var AWu="Charge";
var AHC="ChargeWarning";var AWv="ControlledPowerOff";var AHD="DeviceMain";var AHE=
"DeviceService";var AHF="DeviceInfo";var AWw="DeviceDataManagement";var AHG="DeviceAnimalDataMenu";
var AWx="DeviceDeviceDataMenu";var AWy="DeviceCheck";var Qc="Home";var Xf="Settings";
var AWz="DateTimeSettings";var AWA="UnitsSettings";var AWB="DataAcquisitionSettings";
var AWC="RegistrationAutomaticSettings";var AWD="RegistrationPresettingsSettings";
var AWE="TransponderAssignmentSettings";var AWF="TransponderUnlinkSettings";var Ah0=
"TemperatureSettings";var AHH="WeightGainSettings";var AWG="DeviceSettings";var AWH=
"RegistrationSettings";var AHI="InitializationSettings";var AHJ="PremisesSettings";
var Ayl="Sleep";var Qd="Sync";var AWI="EditAnimalData";var AWJ="EditAnimalDataNaisId";
var AWK="AnimalList";var As7="AnimalListFilter";var AWL="AlarmListFilter";var AWM=
"WatchListFilter";var AWN="AnimalActionActions";var AWO="AnimalActionTemperature";
var AWP="TemperatureMeasurement";var AWQ="AnimalActionWeighing";var As8="AnimalActionRate";
var AWR="AnimalActionUnregister";var AWS="AnimalActionPerished";var AWT="AnimalActionNewBornCare";
var AWU="AlarmList";var AWV="ControlMeasure";var AWW="ControlList";var AWX="RangeTest";
var AWY="ListsMain";var AWZ="ListsIdManagement";var AW0="WatchList";var AHK="EvaluationMenuMain";
var Alf="EvaluationMenuWeights";var AW1="EvaluationLosses";var AW2="EvaluationRatings";
var AW3="EvaluationTemperatures";var Aym="EvaluationWeights";var Alg="EvaluationWeightsRecent";
var Ah1="EvaluationBirthWeights";var Ayn="AnimalEvaluationFilter";var Aoo="NewMenu";
var Ah2="NewAnimals";var AW4="NewAnimalManualData";var Ayo="MassRecording";var AHL=
"NewAnimalTransponderData";var AfF="NewAnimalLoss";var AHM="AutoActionScanScreen";
var Aad="ManualActionScanScreen";var Alh="SetTransponderScreen";var Aop="SetSaveTransponderScreen";
var AW5="NewAnimalSetTransponderScreen";var AW6="NewAnimalsSetTransponderScreen";
var AW7="NewAnimalCalvingDataScreen";var AW8="WeightListScreen";var AW9="AnimalSingleInfoScreen";
var As9="AnimalMultiInfoScreen";var AHN="AnimalRegistrationDetails";var AHO="FreshCowListScreen";
var AW_="FreshCowListFilterScreen";var AW$="DryCowListScreen";var AXa="DryCowListFilterScreen";
var AXb="NoTransponderListScreen";var AXc="NoTransponderListFilterScreen";var AXd=
"YoungNoTransponderListScreen";var AXe="YoungNoTransponderListFilterScreen";var AXf=
"NoNaisIdListScreen";var AXg="NoNaisIdListFilterScreen";var AXh="RegistrationsListScreen";
var AXi="RegistrationsListFilterScreen";var Ayp="ActionListScreen";var AHP="ActionListFilterScreen";
var AHQ="UpdateScreen";var AHR="MotherScanScreen";var AHS="SetSaveNaisIdScreen";
var AHT="PurchasedAnimalsList";var AHU="TextInput";var AXj="AnimalActions";var AXk=
"Unhandled display mode: ";var AXl="None";var AXm="Actions Settings";var AXn="Auto Action";
var AXo="Menu Item Settings";var AXp="Rating Type";var Ayq="Weighing settings";var
AHV="Options";var AXq="AnimalSearch";var AHW="AnimalSearchUnfiltered";var Ah3="AnimalSearchDriedOff";
var U0="MeasurementReady";var AXr="AnimalMultiInfoMenu";var Aae="MassRecordingDefaults";
var AXs="MassRecordingFields";var AXt="MassRecordingMenu";var Ali="BirthRegistrationsListMenu";
var AfG="Unhandled overlay menu: ";var AcQ="Error";var Aoq="Idle";var AXu="IdScanned";
var O9="NotFound";var AHX="Progress";var AHY="Unhandled scan state: ";var AXv="Prediction";
var AHZ="Ready";var AH0="Unhandled measure state: ";var AH1="Unhandled temperature unit: ";
var AXw="Unhandled species: ";var AXx="English";var AXy="Nederlands";var AXz="Deutsch";
var AXA="Eesti";var AXB="Suomalainen";var AXC="Fran\xE7ais";var AXD="\u0395\u03BB\u03BB\u03B7\u03BD\u03B9\u03BA\u03AC";
var AH2="\u0411\u044A\u043B\u0433\u0430\u0440\u0441\u043A\u0438";var AXE="Italiano";
var AH3="\u0420\u0443\u0441\u0441\u043A\u0438\u0439";var AH4="Espa\xF1ol";var Ayr=
"T\xFCrk\xE7e";var AXF="\u6B63\u9AD4\u5B57/\u7E41\u9AD4\u5B57";var AXG="\u010Ce\u0161tina";
var AXH="Bosanski";var AXI="Norsk";var AXJ="\u0423\u043A\u0440\u0430\u0457\u043D\u0441\u044C\u043A\u0438\u0439";
var AH5="Unhandled language: ";var AXK="EN";var AXL="ET";var As_="EL";var As$="ZH";
var AH6="CS";var AXM="BS";var AXN="Unhandled gender: ";var AXO="Unhandled birth type: ";
var AXP="Exporting";var AXQ="ImportFinish";var AXR="ImportStart";var AXS="Importing";
var AXT="Init";var AXU="Unhandled sync state: ";var AH7="Unhandled rating attribute: ";
var AXV="Unhandled assessment: ";var Ays="Illegal boolean value: ";var AH8="Unhandled popup ID:";
var AXW="Unknown";var AXX="Severe Error";var AXY="ErrorsDeviceDriverCheck";var AXZ=
"Enter Sleep";var AX0="About";var AH9="InfoSoftwareVersions";var AH_="InfoHardwareVersions";
var AH$="InfoSerial";var AIa="ShutDown";var Ayt="SuccessDataSync";var Ayu="SuccessResetFactory";
var AIb="SuccessResetSettings";var AX1="SuccessResetAnimalData";var AIc="SuccessCreateBackup";
var AX2="SuccessRestoreBackup";var AId="CreateBackupInProgress";var AX3="RestoreBackupInProgress";
var AX4="FailedCreateBackup";var AX5="FailedRestoreBackup";var AX6="TechnicalDetails";
var AX7="WarningDataSync";var AX8="WarningFactory";var AX9="WarningResetAnimalData";
var AX_="WarningResetDeviceData";var AX$="WarningRestart";var AYa="WarningAutoAction";
var AYb="WarningAutoActionNotApplicable";var AYc="WarningNoMenuItem";var Ayv="WarningEnterDemoMode";
var AYd="NoAnimalsRegistered";var AYe="MaxNumAnimalsReached";var Ayw="MaxNumRatingsReached";
var Ata="MaxNumCalfDeregistrationsReached";var U1="MissingTransponder";var Atb="EarTagNumberTooShort";
var AYf="NoValidCountryCode";var AYg="WarningOutdatedAnimalWeight";var AYh="WarningOutdatedAnimalWeights";
var AIe="WarningWeightEvaluationSingular";var AYi="WarningWeightEvaluationPlural";
var AIf="ScanError";var AYj="ScanNotFound";var AYk="ScannedAnimalNotFound";var AYl=
"ScannedTransponderNotFound";var Atc="AnimalNotFound";var AYm="SuccessUnregister";
var AYn="SuccessUnregisterPerished";var AIg="SuccessCreationNewAnimal";var AYo="SuccessCreationNewAnimals";
var AYp="AnimalCreationInProgress";var AYq="EvaluationInProgress";var AYr="DataSyncInProgress";
var AcR="AddedToAlarm";var AYs="RemovedFromAlarm";var AYt="AddedToWatch";var AYu=
"RemovedFromWatch";var AYv="AddedToDryOff";var AIh="RemovedFromDryOff";var AYw="AnimalIdAlreadyExists";
var AYx="AnimalIdAlreadyExistsContinuable";var AYy="MissingAnimalId";var AYz="MissingAnimalIdMother";
var AYA="MissingEartagNumber";var AYB="MissingTransponderId";var AIi="TransponderAlreadyRegistered";
var AYC="TransponderAlreadyRegisteredContinuable";var AYD="TransponderAlreadyRegisteredCapturable";
var AYE="HelpAnimalInfoRating";var AIj="WarningReassignTransponder";var AIk="CannotReassignNaisId";
var AYF="WarningResetToDefaultValue";var AYG="WarningResetThresholds";var AYH="WarningResetTempThresholds";
var AYI="UpdateFirmware";var Rp="UpdateFirmwareBatteryLow";var Atd="ConfirmFirmwareUpdated";
var AIl="ConfirmBootloaderUpdated";var AIm="QuestionAddAnotherCalfMultiples";var
Aor="RemovedAllBirthNoticesPending";var Aos="RemovedAllPurchasedNoticePending";var
Ayx="RemovedFromBirthNoticePending";var AYJ="RemovedFromPurchasedNoticePending";
var AIn="SuccessClearAnimalLoss";var AYK="RemovedAnimalBirth";var AYL="RemovedAnimalPurchased";
var AYM="WarningNoActionsForAnimalLoss";var AYN="SuccessLinkTransponder";var AYO=
"SuccessChangeTransponder";var AYP="SuccessUnlinkTransponder";var AYQ="SuccessLinkNaisId";
var AYR="WarningDataExportHitBirthFailed";var AYS="SuccessDataExportHitBirth";var
AYT="SuccessDataExportHitBirthDownload";var AYU="SuccessDataExportHitBirthResetAdvice";
var AYV="WarningDataExportPurchasedFailed";var AYW="SuccessDataExportPurchased";
var AYX="SuccessDataExportPurchasedDownload";var AYY="SuccessDataExportPurchasedResetAdvice";
var AYZ="WarningDataExportAnimalsFailed";var AY0="SuccessDataExportAnimalsRatings";
var Aot="SuccessDataExportAnimalsDownload";var AIo="WarningNoPremisesID";var AY1=
"WarningNoFlashDrivePresent";var AIp="WarningNoBackupPathPresent";var AIq="WarningNoBackupFilePresent";
var AcS="DemoFunctionNotAvailable";var AIr="WarningImpreciseTimeSetting";var AY2=
"ConfirmationRestoreBackup";var AIs="ConfirmationMassDeregistration";var AY3="SuccessMassDeregistration";
var Ayy="WarningParsedDateInFutureInvalid";var AY4="WarningParsingDateFailed";var
AY5="WarningParsingNaisIdFailed";var Ayz="WarningParsingShortNaisIdWithoutPremisesId";
var AY6="DataExportInProgress";var AY7="BarcodeScannerConnectedSwitchScreen";var
AY8="BarcodeScannerDisconnectedSwitchScreen";var AIt="AnimalId";var Aou="FarmId";
var AIu="GroupId";var AY9="PersonId";var AIv="Unhandled transponder type: ";var AIw=
"FDX";var Alj="HDX";var AY_="HDX (Urban)";var Aov="Unhandled transponder protocol: ";
var AY$="Illegal RatingMode: ";var AIx="Unhandled mass unit: ";var AIy="Max array size is 10";
var AIz="Index out of bounds";var AZa="ERROR: Received more integers than expected!";
var AyA="Unhandled double scan action :";var AZb="Illegal WeightRecordingMode: ";
var AZc="Illegal WeightRecordingScope: ";var AZd="AnimalDataGenderType";var AZe=
"AnimalDataShortNaisId";var AZf="Rating";var AZg="Temperature";var AZh="Weight";
var AZi="Alarm infos";var AZj="Control infos";var AZk="Watch infos";var AZl="Fresh cow infos";
var AZm="No transponder infos";var AZn="Dry cow info";var AZo="No nais id infos";
var AIA="Birth registrations infos";var Aaf="Purchased registrations infos";var AZp=
"Young no transponder infos";var AyB="Unhandled animal list content:";var AZq="Illegal AutoRegistrationMode: ";
var AZr="Illegal FactoryResetScope: ";var Aow="??";var AZs="Illegal EaseOfDelivery: ";
var AZt="Illegal Whereabouts: ";var AZu="Illegal breed: ";var Ate="Unisex";var Atf=
"Illegal animalIdGenerationMethod: ";var Atg="Ascending";var Ath="Descending";var
AyC="Illegal directionOfCountingName: ";var Alk="Unhandled direction of counting: ";
var Ati="Unhandled German state: ";var AZv="SH";var AZw="HH";var AZx="NI";var AZy=
"HB";var AZz="NW";var AZA="HE";var AZB="RP";var AZC="BW";var AZD="BY";var AZE="SL";
var AZF="BB";var AZG="MV";var AZH="SN";var AZI="ST";var AyD="TH";var AZJ="One Range Male Female";
var AyE="Two Ranges Male Female";var Atj="Illegal EartagAssignmentMode: ";var AZK=
"Unhandled code set value ";var AIB="Implement in derived class";var AZL="Illegal HIT-Code: ";
var AIC="Illegal ReasonOfLeaving: ";var AID="Illegal code: ";var AZM="Undefined";
var AZN="Illegal DeviceComponent: ";var AZO="Unhandled Device::MotherSelectionFilterMode: ";
var AZP="Illegal Device::TimespanDays: ";var AZQ="Not connected";var AZR="Host";
var AZS="Device";var AIE="Device CDC";var AZT="Host MSC";var AZU="Host HID";var AZV=
"Host CDC";var AZW="Illegal animalIdAutoGenerationMethod: ";var AZX="Unhandled month: ";
var AZY="Illegal transponderAssignmentIdChangeMethod: ";var AZZ="Unhandled animal table field: ";
var AIF="Unhandled list view scope: ";var AZ0="1 ";var Atk="100 ";var AZ1="10 ";
var AZ2="Unhandled weight value precision: ";
C.Action={UNDEFINED:0,TempMeasurement:1,Rating:2,Alarm:4,Watch:8,History:16,AnimalLoss:
32,Unregister:64,Edit:128,Weighing:256,FirstFeeding:512,LinkTransponder:1024,AutoActions:
2048,Calving:4096,DryOff:8192,LinkNaisId:16384,ClearBirthNoticePending:32768,DeleteAnimal:
65536,ScanNaisId:131072,UnlinkTransponder:262144,ClearPurchaseNoticePending:524288
};C.AnimalTableFields={Id:0,VisualId:1,GroupId:2,LocationId:3,DateOfBirth:4,LastTemperature:
5,BirthType:6,Gender:7,IsAlarm:8,IsControl:9,IsRegistered:10,IsFever:11,IsWatch:
12,WorstAssessment:13,AnimalType:14,TimestampAlarm:15,TimestampExpirationFeverAlarm:
16,LastRatingTemperature:17,LastBodyWeight:18,TimestampLastWeighing:19,TimestampLastControl:
20,TimestampLastWatch:21,TransponderId:22,FirstBodyWeight:23,TimestampFirstWeighing:
24,FirstBodyWeightId:25,NaisId:26,IsPerished:27,DateOfLastCalving:28,LactationNumber:
29,TimestampLastTemperature:30,TimestampLastAssessment:31,Breed:32,EaseOfDelivery:
33,WhereAbouts:34,NaisIdMother:35,ReasonOfLeaving:36,IsRegistrationNoticePending:
37,IsDry:38};C.Assessment={None:0,Red:1,Yellow:2,Green:3,Blue:4,Gray:5};C.Filter={
B7:null,B8:null,CW:function(AI){if(!AI)return;var Aw=this.B7;while(!!Aw){if(Aw===
AI)throw new Error(Ce);Aw=Aw.Ah;}AI.AJ=this.B8;if(!!this.B8)this.B8.Ah=AI;this.B8=
AI;if(!this.B7)this.B7=AI;},AOO:function(){return this.B7;},AOT:function(Bb4){if(
!!Bb4)return Bb4.Ah;return null;},DL:function(AI$,Eb){var Aw=this.B7;while(!!Aw){
if(Aw.EJ===AI$){if(Eb===1)return Aw;else if(Aw.Operator===Eb)return Aw;}Aw=Aw.Ah;
}return null;},Np:function(AI){var Aw=this.B7;while(!!Aw){if(Aw===AI){if(!!Aw.AJ
)Aw.AJ.Ah=Aw.Ah;if(!!Aw.Ah)Aw.Ah.AJ=Aw.AJ;if(this.B7===Aw)this.B7=Aw.Ah;if(this.
B8===Aw)this.B8=Aw.AJ;Aw.Ah=null;Aw.AJ=null;return;}Aw=Aw.Ah;}},E_:function(){var
Be=A._NewObject(C.Filter,0);var Aw=this.B7;while(!!Aw){Be.CW(Aw.Abi());Aw=Aw.Ah;
}return Be;},_Init:function(aArg){this.__proto__=C.Filter;A.h7++;},_Done:function(
){this.__proto__=null;A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((
B=this.B7)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.B8)&&(B._cycle!=D))B._Mark(
B._cycle=D);if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:
null,_className:"Device::Filter"};C.FilterCriterion={Ah:null,AJ:null,EJ:-1,Operator:
1,YI:false,Abi:function(){return null;},E_:function(AI){if(!AI)return;this.EJ=AI.
EJ;this.Operator=AI.Operator;this.YI=AI.YI;},_Init:function(aArg){this.__proto__=
C.FilterCriterion;A.h7++;},_Done:function(){this.__proto__=null;A.h7--;},_ReInit:
function(){},_Mark:function(D){var B;if((B=this.Ah)&&(B._cycle!=D))B._Mark(B._cycle=
D);if((B=this.AJ)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.I)&&(B._cycle!=D
))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:"Device::FilterCriterion"
};C.Int32FilterCriterion={A5:0,Abi:function(){var Aw=A._NewObject(C.Int32FilterCriterion
,0);Aw.E_(this);return Aw;},E_:function(AI){C.FilterCriterion.E_.call(this,AI);var
Aw=(C.Int32FilterCriterion.isPrototypeOf(AI)?AI:null);if(!!Aw)this.A5=Aw.A5;},Initialize:
function(A4,Eb,A7,Qg){this.EJ=A4;this.Operator=Eb;this.A5=A7;this.YI=Qg;return this;
},_Init:function(aArg){C.FilterCriterion._Init.call(this,aArg);this.__proto__=C.
Int32FilterCriterion;},_className:"Device::Int32FilterCriterion"};C.DeviceClass={
AEn:0,AEm:0,Av7:0,PY:0,OT:null,SA:null,Q1:null,SZ:null,R1:null,P4:null,Gf:null,An:
null,Bt:null,Agy:null,AnO:null,Pr:null,AuH:A.jV,AutoActions:A.jV,ABO:A.jV,AG1:A.
jV,AG2:A.jV,AhL:A.jV,AHk:A.jV,AHl:A.jV,ABP:A.jV,AHj:A.jV,AHo:A.jV,ABH:A.jV,ABI:A.
jV,ASg:A.jV,ASl:A.jV,AV6:A.jV,Aa4:100,Lu:0,AM7:75,AcF:3600,AUg:0,A1:5,AF:0,KX:50000
,Pn:0,AGg:0,AdT:0,Aq5:0,Aq4:0,AR5:1,AR4:1,AjV:0,AR6:1,AxS:0,Afr:0,AqR:10,AU3:5,Av2:
60,Av0:0,An6:0,OM:1,WhereAbouts:0,Ak5:0,AxK:3,ACK:0,AgA:1,AbT:0,Aqq:0,AN4:11,Breed:
0,EartagNrAssignmentMode:0,Au8:0,ACD:0,ACC:0,Ij:5,ABG:2,Aqs:0,AOG:2,AVR:0,D9:0,AMe:
0,Kk:0,Gender:2,WeightRecordingScope:1,WeightRecordingMode:1,AnimalType:0,MassUnit:
0,AutoRegistrationMode:0,RatingMode:0,SyncState:0,OverlayMenu:0,TemperatureUnit:
0,Language:0,MeasureState:0,ScanState:0,Ii:3,AUf:false,AM0:false,AeP:true,ARR:false
,Aqe:true,AqS:false,AmR:true,HG:false,AVv:false,AmS:false,AVP:false,AsR:false,AEl:
false,AmE:false,UpdateActiveScreen:function(AK){if(this.Ii===AK)return;this.Ii=AK;
A.abo([this,this.AEz,this.Bbb],0);},Zn:function(E){if(this.K&&this.K.Zn)return this.
K.Zn.apply(this,arguments);else return C.DeviceClass.Bu1.apply(this,arguments);}
,Bu1:function(E){},Bbb:function(Aq){this.Zn(Aq);},UpdateBatteryChargeState:function(
AK){if(this.Aa4===AK)return;this.Aa4=AK;A.abo([this,this.Awa,this.AyK],0);},Awx:
function(E){if(this.K&&this.K.Awx)return this.K.Awx.apply(this,arguments);else return C.
DeviceClass.Bva.apply(this,arguments);},Bva:function(E){A.ab5("%s",BD);},AyK:function(
Aq){this.Awx(Aq);},UpdateChargeActive:function(AK){if(this.AmE===AK)return;this.
AmE=AK;A.abo([this,this.Awd,this.AyL],0);},AE7:function(E){if(this.K&&this.K.AE7
)return this.K.AE7.apply(this,arguments);else return C.DeviceClass.Bvh.apply(this
,arguments);},Bvh:function(E){A.ab5("%s",E6);},AyL:function(Aq){this.AE7(Aq);},UpdateScanState:
function(AK){var B;if(this.ScanState===AK)return;this.ScanState=AK;A.abo([this,this.
ASU,this.A0w],0);A._GetAutoObject(C.Helper).BBq(this);},Ar3:function(E){if(this.
K&&this.K.Ar3)return this.K.Ar3.apply(this,arguments);else return C.DeviceClass.
BvY.apply(this,arguments);},BvY:function(E){A.ab5("%s",Hr);},A0w:function(Aq){this.
Ar3(Aq);},UpdateMeasureState:function(AK){if(this.MeasureState===AK)return;this.
MeasureState=AK;A.abo([this,this.AEH,this.AIV],0);},AwW:function(E){if(this.K&&this.
K.AwW)return this.K.AwW.apply(this,arguments);else return C.DeviceClass.BvF.apply(
this,arguments);},BvF:function(E){A.ab5("%s",IU);},AIV:function(Aq){this.AwW(Aq);
},UpdateTempValue:function(AK){if(this.Lu===AK)return;this.Lu=AK;A.abo([this,this.
AEL,this.AIX],0);},Aw_:function(E){if(this.K&&this.K.Aw_)return this.K.Aw_.apply(
this,arguments);else return C.DeviceClass.Bv4.apply(this,arguments);},Bv4:function(
E){A.ab5("%s",Is);},AIX:function(Aq){this.Aw_(Aq);},AnC:function(E){if(this.K&&this.
K.AnC)return this.K.AnC.apply(this,arguments);else return C.DeviceClass.Bvz.apply(
this,arguments);},Bvz:function(E){},Bbr:function(Aq){this.AnC(Aq);},Aw$:function(
E){if(this.K&&this.K.Aw$)return this.K.Aw$.apply(this,arguments);else return C.DeviceClass.
Bv5.apply(this,arguments);},Bv5:function(E){},Ato:function(Aq){this.Aw$(Aq);},AE5:
function(E){if(this.K&&this.K.AE5)return this.K.AE5.apply(this,arguments);else return C.
DeviceClass.Bvg.apply(this,arguments);},Bvg:function(E){},Bbj:function(Aq){this.
AE5(Aq);},AFB:function(E){if(this.K&&this.K.AFB)return this.K.AFB.apply(this,arguments
);else return C.DeviceClass.BvH.apply(this,arguments);},BvH:function(E){},A0q:function(
Aq){this.AFB(Aq);},UpdateMonitoring:function(AK){if(this.AEl===AK)return;this.AEl=
AK;A.abo([this,this.ASL,this.A0q],0);},UpdateDataTable:function(Bb6){var B;switch(
Bb6){case 0:A.pe([B=this.An,B.Ako],this);break;case 1:A.pe([B=this.Bt,B.Ako],this
);break;case 3:A.pe([B=this.Agy,B.Ako],this);break;case 4:A.pe([B=this.Pr,B.Ako]
,this);break;case 2:A.ab5("%s",O4);break;default:A.ab5("%s%e",P_,Bb6);}},AxJ:function(
){if(this.K&&this.K.AxJ)return this.K.AxJ.apply(this,arguments);else return C.DeviceClass.
BwD.apply(this,arguments);},BwD:function(){},AhP:function(){if(this.K&&this.K.AhP
)return this.K.AhP.apply(this,arguments);else return C.DeviceClass.BwG.apply(this
,arguments);},BwG:function(){},AhM:function(){if(this.K&&this.K.AhM)return this.
K.AhM.apply(this,arguments);else return C.DeviceClass.BwE.apply(this,arguments);
},BwE:function(){},An0:function(){if(this.K&&this.K.An0)return this.K.An0.apply(
this,arguments);else return C.DeviceClass.BwH.apply(this,arguments);},BwH:function(
){},UpdateLanguage:function(AK){if(this.Language===AK)return;this.Language=AK;switch(
AK){case 14:A._SetLanguage(1);break;case 13:A._SetLanguage(2);break;case 6:A._SetLanguage(
3);break;case 11:A._SetLanguage(4);break;case 10:A._SetLanguage(5);break;case 12:
A._SetLanguage(6);break;case 5:A._SetLanguage(7);break;case 3:A._SetLanguage(8);
break;case 1:A._SetLanguage(9);break;case 8:A._SetLanguage(10);break;case 4:A._SetLanguage(
11);break;case 15:A._SetLanguage(13);break;case 9:A._SetLanguage(15);break;case 2:
A._SetLanguage(16);break;case 7:A._SetLanguage(17);break;case 16:A._SetLanguage(
18);break;default:A._SetLanguage(0);}A.abo([this,this.A8W,this.Bbr],0);},UpdateTemperatureUnit:
function(AK){if(this.TemperatureUnit===AK)return;this.TemperatureUnit=AK;A.abo([
this,this.Arz,this.Ato],0);},UpdateBrightness:function(AK){if(this.AM7===AK)return;
this.AM7=AK;A.abo([this,this.A8H,this.Bbj],0);},SetSystemTime:function(Ah$){if(this.
K&&this.K.SetSystemTime)return this.K.SetSystemTime.apply(this,arguments);else return C.
DeviceClass.BwB.apply(this,arguments);},BwB:function(Ah$){},AxC:function(){if(this.
K&&this.K.AxC)return this.K.AxC.apply(this,arguments);else return C.DeviceClass.
Ba1.apply(this,arguments);},Ba1:function(){},AGt:function(){if(this.K&&this.K.AGt
)return this.K.AGt.apply(this,arguments);else return C.DeviceClass.BaZ.apply(this
,arguments);},BaZ:function(){},BoT:function(){},UpdateOverlayMenu:function(AK){if(
this.OverlayMenu===AK)return;this.OverlayMenu=AK;A.abo([this,this.Awp,this.AyS],
0);},Dw:function(E){if(this.K&&this.K.Dw)return this.K.Dw.apply(this,arguments);
else return C.DeviceClass.BvS.apply(this,arguments);},BvS:function(E){},AyS:function(
Aq){this.Dw(Aq);},Axf:function(E){if(this.K&&this.K.Axf)return this.K.Axf.apply(
this,arguments);else return C.DeviceClass.Bwd.apply(this,arguments);},Bwd:function(
E){},BbD:function(Aq){this.Axf(Aq);},UpdateUnderTemp:function(AK){if(this.AcF===
AK)return;this.AcF=AK;A.abo([this,this.A9p,this.BbD],0);},UpdateSyncState:function(
AK){if(this.SyncState===AK)return;this.SyncState=AK;A.abo([this,this.ASW,this.A0y
],0);},Ab8:function(E){if(this.K&&this.K.Ab8)return this.K.Ab8.apply(this,arguments
);else return C.DeviceClass.Bv3.apply(this,arguments);},Bv3:function(E){A.ab5("%s"
,P$);},A0y:function(Aq){this.Ab8(Aq);},AC9:function(){if(this.K&&this.K.AC9)return this.
K.AC9.apply(this,arguments);else return C.DeviceClass.BuT.apply(this,arguments);
},BuT:function(){return A.jV;},UpdatePopup:function(J6,A1i,A1d,A1l){this.A3(J6,A1i
,A1d,A1l,[this,this.BA8]);},PopupStateChanged:function(J6,Ae){if(this.K&&this.K.
PopupStateChanged)return this.K.PopupStateChanged.apply(this,arguments);else return C.
DeviceClass.Bwq.apply(this,arguments);},Bwq:function(J6,Ae){},AF3:function(E){if(
this.K&&this.K.AF3)return this.K.AF3.apply(this,arguments);else return C.DeviceClass.
Bwf.apply(this,arguments);},Bwf:function(E){},BbE:function(Aq){this.AF3(Aq);},UpdateVibrationOnKeypressEnabled:
function(AK){if(this.AsR===AK)return;this.AsR=AK;A.abo([this,this.A9q,this.BbE],
0);},Afa:function(E){if(this.K&&this.K.Afa)return this.K.Afa.apply(this,arguments
);else return C.DeviceClass.Bwe.apply(this,arguments);},Bwe:function(E){},AIY:function(
Aq){this.Afa(Aq);},UpdateVibrationOn:function(Bcx){if(this.AVP===Bcx)return;this.
AVP=Bcx;A.abo([this,this.AEM,this.AIY],0);},A3:function(J6,A1i,A1d,A1l,A1e){var Agp=
A._NewObject(C.PopupContext,0);Agp.Id=J6;Agp.Show=A1i;Agp.AkJ=A1d;Agp.Ak4=A1l;Agp.
AF$=A1e;this.AnO.Trigger(Agp,false);},BA8:function(G){var As=(C.PopupContext.isPrototypeOf(
G)?G:null);if(!!As)this.PopupStateChanged(As.Id,As.PopupState);},Aw6:function(E){
if(this.K&&this.K.Aw6)return this.K.Aw6.apply(this,arguments);else return C.DeviceClass.
BvX.apply(this,arguments);},BvX:function(E){},A0v:function(Aq){this.Aw6(Aq);},UpdateRatingMode:
function(AK){if(this.RatingMode===AK)return;this.RatingMode=AK;A.abo([this,this.
AST,this.A0v],0);},Ae2:function(E){if(this.K&&this.K.Ae2)return this.K.Ae2.apply(
this,arguments);else return C.DeviceClass.Bvr.apply(this,arguments);},Bvr:function(
E){},Atn:function(Aq){this.Ae2(Aq);},UpdateFlashLightOn:function(Bcd){if(this.AmS===
Bcd)return;this.AmS=Bcd;A.abo([this,this.Arw,this.Atn],0);},Us:function(E){if(this.
K&&this.K.Us)return this.K.Us.apply(this,arguments);else return C.DeviceClass.Bv8.
apply(this,arguments);},Bv8:function(E){},A0z:function(Aq){this.Us(Aq);},UpdateTopLightOn:
function(Bcs){if(this.AVv===Bcs)return;this.AVv=Bcs;A.abo([this,this.ASY,this.A0z
],0);},WE:function(E){if(this.K&&this.K.WE)return this.K.WE.apply(this,arguments
);else return C.DeviceClass.BvW.apply(this,arguments);},BvW:function(E){},BwU:function(
Aq){this.WE(Aq);},UpdateRGBTopLight:function(Bcn){if(this.AUg===Bcn)return;this.
AUg=Bcn;A.abo([this,this.Bly,this.BwU],0);},Aww:function(E){if(this.K&&this.K.Aww
)return this.K.Aww.apply(this,arguments);else return C.DeviceClass.Bu$.apply(this
,arguments);},Bu$:function(E){},BwN:function(Aq){this.Aww(Aq);},UpdateAutoRegistrationMode:
function(Bb2){if(this.AutoRegistrationMode===Bb2)return;this.AutoRegistrationMode=
Bb2;A.abo([this,this.BkX,this.BwN],0);},Ar4:function(E){if(this.K&&this.K.Ar4)return this.
K.Ar4.apply(this,arguments);else return C.DeviceClass.BvZ.apply(this,arguments);
},BvZ:function(E){A.ab5("%s",CQ);},A0x:function(Aq){this.Ar4(Aq);},UpdateScanTransponder:
function(J6,Bcu,Bct){if(((this.OT.Id===J6)&&(this.OT.TransponderType===Bcu))&&(this.
OT.TransponderProtocol===Bct))return;this.OT.OnSetId(J6);this.OT.ATW(Bcu);this.OT.
ATV(Bct);A.abo([this,this.ASV,this.A0x],0);},OO:function(E){if(this.K&&this.K.OO
)return this.K.OO.apply(this,arguments);else return C.DeviceClass.Bvj.apply(this
,arguments);},Bvj:function(E){},U3:function(Aq){this.OO(Aq);},UpdateDigitsID:function(
Bb_){if(this.A1===Bb_)return;this.A1=Bb_;A.abo([this,this.Uj,this.U3],0);},PU:function(
E){if(this.K&&this.K.PU)return this.K.PU.apply(this,arguments);else return C.DeviceClass.
BvR.apply(this,arguments);},BvR:function(E){},U4:function(Aq){this.PU(Aq);},UpdateOffsetID:
function(Bcj){if(this.AF===Bcj)return;this.AF=Bcj;A.abo([this,this.Uk,this.U4],0
);},AF7:function(E){if(this.K&&this.K.AF7)return this.K.AF7.apply(this,arguments
);else return C.DeviceClass.Bwm.apply(this,arguments);},Bwm:function(E){A.ab5("%s"
,Ff);},AIZ:function(Aq){this.AF7(Aq);},UpdateWeightValue:function(AK){if(this.KX===
AK)return;this.KX=AK;A.abo([this,this.AEN,this.AIZ],0);},AwT:function(E){if(this.
K&&this.K.AwT)return this.K.AwT.apply(this,arguments);else return C.DeviceClass.
BvC.apply(this,arguments);},BvC:function(E){},A0p:function(Aq){this.AwT(Aq);},UpdateMassUnit:
function(AK){if(this.MassUnit===AK)return;this.MassUnit=AK;A.abo([this,this.ASK,
this.A0p],0);},ArD:function(E){if(this.K&&this.K.ArD)return this.K.ArD.apply(this
,arguments);else return C.DeviceClass.BaV.apply(this,arguments);},BaV:function(E
){},Ba_:function(Aq){this.ArD(Aq);},ArE:function(E){if(this.K&&this.K.ArE)return this.
K.ArE.apply(this,arguments);else return C.DeviceClass.BaW.apply(this,arguments);
},BaW:function(E){},A0k:function(Aq){this.ArE(Aq);},UpdateActiveActions:function(
AK){if(this.Pn===AK)return;this.Pn=AK;A.abo([this,this.A8r,this.Ba_],0);},UpdateActiveActionsOrder:
function(AK){if(this.AuH===AK)return;this.AuH=AK;A.abo([this,this.ASx,this.A0k],
0);},Akv:function(E){if(this.K&&this.K.Akv)return this.K.Akv.apply(this,arguments
);else return C.DeviceClass.BaX.apply(this,arguments);},BaX:function(E){},Bbg:function(
Aq){this.Akv(Aq);},UpdateAutoActions:function(AK){if(this.AutoActions===AK)return;
this.AutoActions=AK;A.abo([this,this.A8C,this.Bbg],0);},AGU:function(){if(this.K&&
this.K.AGU)return this.K.AGU.apply(this,arguments);else return C.DeviceClass.BwF.
apply(this,arguments);},BwF:function(){},AsH:function(){if(this.K&&this.K.AsH)return this.
K.AsH.apply(this,arguments);else return C.DeviceClass.BwJ.apply(this,arguments);
},BwJ:function(){},EC:function(E){if(this.K&&this.K.EC)return this.K.EC.apply(this
,arguments);else return C.DeviceClass.Bu8.apply(this,arguments);},Bu8:function(E
){},BwM:function(Aq){this.EC(Aq);},UpdateAnimalType:function(Eo){if(this.AnimalType===
Eo)return;this.AnimalType=Eo;A.abo([this,this.PT,this.BwM],0);},Axg:function(E){
if(this.K&&this.K.Axg)return this.K.Axg.apply(this,arguments);else return C.DeviceClass.
Bwk.apply(this,arguments);},Bwk:function(E){},BbJ:function(Aq){this.Axg(Aq);},UpdateWeightRecordingMode:
function(Bcz){if(this.WeightRecordingMode===Bcz)return;this.WeightRecordingMode=
Bcz;A.abo([this,this.A9y,this.BbJ],0);},AFG:function(E){if(this.K&&this.K.AFG)return this.
K.AFG.apply(this,arguments);else return C.DeviceClass.BvT.apply(this,arguments);
},BvT:function(E){A.ab5("%s",L3);},A0t:function(Aq){this.AFG(Aq);},UpdatePredictedTempValue:
function(AK){if(this.AGg===AK)return;this.AGg=AK;A.abo([this,this.ASQ,this.A0t],
0);},SQ:function(L9){if(this.K&&this.K.SQ)return this.K.SQ.apply(this,arguments);
else return C.DeviceClass.BwA.apply(this,arguments);},BwA:function(L9){},AFa:function(
E){if(this.K&&this.K.AFa)return this.K.AFa.apply(this,arguments);else return C.DeviceClass.
Bvi.apply(this,arguments);},Bvi:function(E){},AIS:function(Aq){this.AFa(Aq);},UpdateDemoMode:
function(AK){if(this.HG===AK)return;this.HG=AK;A.abo([this,this.AEE,this.AIS],0);
},AET:function(E){if(this.K&&this.K.AET)return this.K.AET.apply(this,arguments);
else return C.DeviceClass.Bu2.apply(this,arguments);},Bu2:function(E){},Bbc:function(
Aq){this.AET(Aq);},UpdateAgeRegistration:function(Bci){if(this.AdT===Bci)return;
this.AdT=Bci;A.abo([this,this.A8w,this.Bbc],0);},Axh:function(E){if(this.K&&this.
K.Axh)return this.K.Axh.apply(this,arguments);else return C.DeviceClass.Bwl.apply(
this,arguments);},Bwl:function(E){},BbK:function(Aq){this.Axh(Aq);},UpdateWeightRecordingScope:
function(Bco){if(this.WeightRecordingScope===Bco)return;this.WeightRecordingScope=
Bco;A.abo([this,this.A9z,this.BbK],0);},JU:function(E){if(this.K&&this.K.JU)return this.
K.JU.apply(this,arguments);else return C.DeviceClass.Bvv.apply(this,arguments);}
,Bvv:function(E){},A0o:function(Aq){this.JU(Aq);},UpdateGender:function(L6){if(this.
Gender===L6)return;this.Gender=L6;A.abo([this,this.Wy,this.A0o],0);},ArT:function(
E){if(this.K&&this.K.ArT)return this.K.ArT.apply(this,arguments);else return C.DeviceClass.
Bvx.apply(this,arguments);},Bvx:function(E){},AyO:function(Aq){this.ArT(Aq);},UpdateIDLastUsedMale:
function(Rq){if(this.Aq5===Rq)return;this.Aq5=Rq;A.abo([this,this.Awi,this.AyO],
0);},ArS:function(E){if(this.K&&this.K.ArS)return this.K.ArS.apply(this,arguments
);else return C.DeviceClass.Bvw.apply(this,arguments);},Bvw:function(E){},AyN:function(
Aq){this.ArS(Aq);},UpdateIDLastUsedFemale:function(Rq){if(this.Aq4===Rq)return;this.
Aq4=Rq;A.abo([this,this.Awh,this.AyN],0);},Zo:function(E){if(this.K&&this.K.Zo)return this.
K.Zo.apply(this,arguments);else return C.DeviceClass.Bu7.apply(this,arguments);}
,Bu7:function(E){},AIQ:function(Aq){this.Zo(Aq);},UpdateAnimalListContent:function(
AK){if(this.Kk===AK)return;this.Kk=AK;A.abo([this,this.AEB,this.AIQ],0);},AEV:function(
E){if(this.K&&this.K.AEV)return this.K.AEV.apply(this,arguments);else return C.DeviceClass.
Bu3.apply(this,arguments);},Bu3:function(E){},Bbd:function(Aq){this.AEV(Aq);},UpdateAlarmListAction:
function(AK){if(this.AMe===AK)return;this.AMe=AK;A.abo([this,this.A8y,this.Bbd],
0);},AFd:function(E){if(this.K&&this.K.AFd)return this.K.AFd.apply(this,arguments
);else return C.DeviceClass.Bvq.apply(this,arguments);},Bvq:function(E){},Bbm:function(
Aq){this.AFd(Aq);},UpdateFlashLightInMeasureState:function(Bce){if(this.AmR===Bce
)return;this.AmR=Bce;A.abo([this,this.A8K,this.Bbm],0);},AeX:function(E){if(this.
K&&this.K.AeX)return this.K.AeX.apply(this,arguments);else return C.DeviceClass.
Bu6.apply(this,arguments);},Bu6:function(E){},AIP:function(Aq){this.AeX(Aq);},UpdateAnimalInfoContent:
function(AK){if(this.D9===AK)return;this.D9=AK;A.abo([this,this.AEA,this.AIP],0);
},AF6:function(E){if(this.K&&this.K.AF6)return this.K.AF6.apply(this,arguments);
else return C.DeviceClass.Bwg.apply(this,arguments);},Bwg:function(E){},BbF:function(
Aq){this.AF6(Aq);},UpdateWatchListAction:function(AK){if(this.AVR===AK)return;this.
AVR=AK;A.abo([this,this.A9u,this.BbF],0);},AFf:function(E){if(this.K&&this.K.AFf
)return this.K.AFf.apply(this,arguments);else return C.DeviceClass.Bvs.apply(this
,arguments);},Bvs:function(E){},Bbo:function(Aq){this.AFf(Aq);},UpdateFreshCowListAction:
function(AK){if(this.AOG===AK)return;this.AOG=AK;A.abo([this,this.A8M,this.Bbo],
0);},ResetActiveActions:function(G){if(this.K&&this.K.ResetActiveActions)return this.
K.ResetActiveActions.apply(this,arguments);else return C.DeviceClass.Bws.apply(this
,arguments);},Bws:function(G){},BGO:function(s){this.ResetActiveActions(s);},ResetAutoActions:
function(G){if(this.K&&this.K.ResetAutoActions)return this.K.ResetAutoActions.apply(
this,arguments);else return C.DeviceClass.Bwu.apply(this,arguments);},Bwu:function(
G){},BGQ:function(s){this.ResetAutoActions(s);},Awu:function(E){if(this.K&&this.
K.Awu)return this.K.Awu.apply(this,arguments);else return C.DeviceClass.Bu9.apply(
this,arguments);},Bu9:function(E){},Bbe:function(Aq){this.Awu(Aq);},Ar7:function(
E){if(this.K&&this.K.Ar7)return this.K.Ar7.apply(this,arguments);else return C.DeviceClass.
Bv6.apply(this,arguments);},Bv6:function(E){},BbA:function(Aq){this.Ar7(Aq);},Ar8:
function(E){if(this.K&&this.K.Ar8)return this.K.Ar8.apply(this,arguments);else return C.
DeviceClass.Bv7.apply(this,arguments);},Bv7:function(E){},BbB:function(Aq){this.
Ar8(Aq);},Ass:function(G){if(this.K&&this.K.Ass)return this.K.Ass.apply(this,arguments
);else return C.DeviceClass.Bwx.apply(this,arguments);},Bwx:function(G){},BGT:function(
s){this.Ass(s);},UpdateTemperaturesLowString:function(AK){if(this.AG2===AK)return;
this.AG2=AK;A.abo([this,this.A9l,this.BbB],0);},UpdateTemperaturesHighString:function(
AK){if(this.AG1===AK)return;this.AG1=AK;A.abo([this,this.A9k,this.BbA],0);},UpdateAnimalTypesString:
function(AK){if(this.ABO===AK)return;this.ABO=AK;A.abo([this,this.A8A,this.Bbe],
0);},AwN:function(E){if(this.K&&this.K.AwN)return this.K.AwN.apply(this,arguments
);else return C.DeviceClass.Bvu.apply(this,arguments);},Bvu:function(E){},Bbq:function(
Aq){this.AwN(Aq);},UpdateFreshCowsHideMeasured:function(AK){if(this.AqS===AK)return;
this.AqS=AK;A.abo([this,this.A8O,this.Bbq],0);},ArZ:function(E){if(this.K&&this.
K.ArZ)return this.K.ArZ.apply(this,arguments);else return C.DeviceClass.BvN.apply(
this,arguments);},BvN:function(E){},Bbv:function(Aq){this.ArZ(Aq);},UpdateNaisIdLastUsedMale:
function(Xn){if(this.AEn===Xn)return;this.AEn=Xn;A.abo([this,this.A84,this.Bbv],
0);},ArY:function(E){if(this.K&&this.K.ArY)return this.K.ArY.apply(this,arguments
);else return C.DeviceClass.BvM.apply(this,arguments);},BvM:function(E){},Bbu:function(
Aq){this.ArY(Aq);},UpdateNaisIdLastUsedFemale:function(Xn){if(this.AEm===Xn)return;
this.AEm=Xn;A.abo([this,this.A83,this.Bbu],0);},Aw0:function(E){if(this.K&&this.
K.Aw0)return this.K.Aw0.apply(this,arguments);else return C.DeviceClass.BvK.apply(
this,arguments);},BvK:function(E){},AyQ:function(Aq){this.Aw0(Aq);},UpdateNaisIdIncrementMale:
function(Als){if(this.AR5===Als)return;this.AR5=Als;A.abo([this,this.Awm,this.AyQ
],0);},AwZ:function(E){if(this.K&&this.K.AwZ)return this.K.AwZ.apply(this,arguments
);else return C.DeviceClass.BvJ.apply(this,arguments);},BvJ:function(E){},AyP:function(
Aq){this.AwZ(Aq);},UpdateNaisIdIncrementFemale:function(Als){if(this.AR4===Als)return;
this.AR4=Als;A.abo([this,this.Awl,this.AyP],0);},UpdateFirmware:function(){if(this.
K&&this.K.UpdateFirmware)return this.K.UpdateFirmware.apply(this,arguments);else
return C.DeviceClass.Ba2.apply(this,arguments);},Ba2:function(){},Anx:function(E
){if(this.K&&this.K.Anx)return this.K.Anx.apply(this,arguments);else return C.DeviceClass.
Bvd.apply(this,arguments);},Bvd:function(E){},Bbi:function(Aq){this.Anx(Aq);},UpdateBootloaderMessage:
function(AK){if(this.Aqs===AK)return;this.Aqs=AK;A.abo([this,this.A8G,this.Bbi],
0);},AEQ:function(E){if(this.K&&this.K.AEQ)return this.K.AEQ.apply(this,arguments
);else return C.DeviceClass.BuX.apply(this,arguments);},BuX:function(E){},Ba8:function(
Aq){this.AEQ(Aq);},UpdateActionListAction:function(AK){if(this.ABG===AK)return;this.
ABG=AK;A.abo([this,this.A8p,this.Ba8],0);},Aws:function(E){if(this.K&&this.K.Aws
)return this.K.Aws.apply(this,arguments);else return C.DeviceClass.BuY.apply(this
,arguments);},BuY:function(E){},Ba9:function(Aq){this.Aws(Aq);},UpdateActionListHideMeasured:
function(AK){if(this.Aqe===AK)return;this.Aqe=AK;A.abo([this,this.A8q,this.Ba9],
0);},Ul:function(E){if(this.K&&this.K.Ul)return this.K.Ul.apply(this,arguments);
else return C.DeviceClass.Bu5.apply(this,arguments);},Bu5:function(E){},Aoy:function(
Aq){this.Ul(Aq);},UpdateAnimalIdGenerationMethod:function(BcE){if(this.Ij===BcE)
return;this.Ij=BcE;A.abo([this,this.Anq,this.Aoy],0);},AwF:function(E){if(this.K&&
this.K.AwF)return this.K.AwF.apply(this,arguments);else return C.DeviceClass.Bvk.
apply(this,arguments);},Bvk:function(E){},A0m:function(Aq){this.AwF(Aq);},UpdateDirectionOfCountingFemale:
function(Alm){if(this.ACC===Alm)return;this.ACC=Alm;A.abo([this,this.ASD,this.A0m
],0);},AwG:function(E){if(this.K&&this.K.AwG)return this.K.AwG.apply(this,arguments
);else return C.DeviceClass.Bvl.apply(this,arguments);},Bvl:function(E){},A0n:function(
Aq){this.AwG(Aq);},UpdateDirectionOfCountingMale:function(Alm){if(this.ACD===Alm
)return;this.ACD=Alm;A.abo([this,this.ASE,this.A0n],0);},AwH:function(E){if(this.
K&&this.K.AwH)return this.K.AwH.apply(this,arguments);else return C.DeviceClass.
Bvm.apply(this,arguments);},Bvm:function(E){},AIT:function(Aq){this.AwH(Aq);},UpdateDirectionOfCountingUnisex:
function(Alm){if(this.Au8===Alm)return;this.Au8=Alm;A.abo([this,this.AEF,this.AIT
],0);},ArU:function(E){if(this.K&&this.K.ArU)return this.K.ArU.apply(this,arguments
);else return C.DeviceClass.Bvy.apply(this,arguments);},Bvy:function(E){},Aoz:function(
Aq){this.ArU(Aq);},UpdateIDLastUsedUnisex:function(Rq){if(this.AjV===Rq)return;this.
AjV=Rq;A.abo([this,this.Ant,this.Aoz],0);},Ar0:function(E){if(this.K&&this.K.Ar0
)return this.K.Ar0.apply(this,arguments);else return C.DeviceClass.BvO.apply(this
,arguments);},BvO:function(E){},A0r:function(Aq){this.Ar0(Aq);},UpdateNaisIdLastUsedUnisex:
function(Xn){if(this.Av7===Xn)return;this.Av7=Xn;A.abo([this,this.ASM,this.A0r],
0);},Aw1:function(E){if(this.K&&this.K.Aw1)return this.K.Aw1.apply(this,arguments
);else return C.DeviceClass.BvL.apply(this,arguments);},BvL:function(E){},AyR:function(
Aq){this.Aw1(Aq);},UpdateNaisIdIncrementUnisex:function(Als){if(this.AR6===Als)return;
this.AR6=Als;A.abo([this,this.Awn,this.AyR],0);},Akx:function(E){if(this.K&&this.
K.Akx)return this.K.Akx.apply(this,arguments);else return C.DeviceClass.Bvo.apply(
this,arguments);},Bvo:function(E){},AyM:function(Aq){this.Akx(Aq);},UpdateEartagNrAssignmentMode:
function(Aln){if(this.EartagNrAssignmentMode===Aln)return;this.EartagNrAssignmentMode=
Aln;A.abo([this,this.Awg,this.AyM],0);},N1:function(E){if(this.K&&this.K.N1)return this.
K.N1.apply(this,arguments);else return C.DeviceClass.Bvf.apply(this,arguments);}
,Bvf:function(E){},BwP:function(Aq){this.N1(Aq);},UpdateBreed:function(Ac0){if(this.
Breed===Ac0)return;this.Breed=Ac0;A.abo([this,this.Awc,this.BwP],0);},AFz:function(
E){if(this.K&&this.K.AFz)return this.K.AFz.apply(this,arguments);else return C.DeviceClass.
BvG.apply(this,arguments);},BvG:function(E){},BwS:function(Aq){this.AFz(Aq);},UpdateMiddlewareVersions:
function(Qi,A0$,A1a,A1h,A00){this.SA.OnSetTimestamp(Qi);this.SA.AFu(A0$);this.SA.
AFA(A1a);this.SA.AFK(A1h);this.SA.AE$(A00);A.abo([this,this.Bls,this.BwS],0);},AFt:
function(E){if(this.K&&this.K.AFt)return this.K.AFt.apply(this,arguments);else return C.
DeviceClass.BvA.apply(this,arguments);},BvA:function(E){},BwR:function(Aq){this.
AFt(Aq);},UpdateMainboardVersions:function(Qi,A09,A0_,A08,A1n,A1o,A1m){this.Q1.OnSetTimestamp(
Qi);this.Q1.AFr(A09);this.Q1.AFs(A0_);this.Q1.AFq(A08);this.Q1.AFY(A1n);this.Q1.
AFZ(A1o);this.Q1.AFX(A1m);A.abo([this,this.Blq,this.BwR],0);},AF0:function(E){if(
this.K&&this.K.AF0)return this.K.AF0.apply(this,arguments);else return C.DeviceClass.
Bv9.apply(this,arguments);},Bv9:function(E){},BwY:function(Aq){this.AF0(Aq);},UpdateTorchboardVersions:
function(Qi,A09,A0_,A08,A1n,A1o,A1m){this.SZ.OnSetTimestamp(Qi);this.SZ.AFr(A09);
this.SZ.AFs(A0_);this.SZ.AFq(A08);this.SZ.AFY(A1n);this.SZ.AFZ(A1o);this.SZ.AFX(
A1m);A.abo([this,this.BlQ,this.BwY],0);},AE1:function(E){if(this.K&&this.K.AE1)return this.
K.AE1.apply(this,arguments);else return C.DeviceClass.Bve.apply(this,arguments);
},Bve:function(E){},BwO:function(Aq){this.AE1(Aq);},UpdateBootloaderVersions:function(
Qi,A0$,A1a,A1h,A00){this.R1.OnSetTimestamp(Qi);this.R1.AFu(A0$);this.R1.AFA(A1a);
this.R1.AFK(A1h);this.R1.AE$(A00);A.abo([this,this.Bk0,this.BwO],0);},AFb:function(
E){if(this.K&&this.K.AFb)return this.K.AFb.apply(this,arguments);else return C.DeviceClass.
Bvn.apply(this,arguments);},Bvn:function(E){},Bbl:function(Aq){this.AFb(Aq);},UpdateDryCowListAction:
function(AK){if(this.AN4===AK)return;this.AN4=AK;A.abo([this,this.A8I,this.Bbl],
0);},AJJ:function(A01){if(this.K&&this.K.AJJ)return this.K.AJJ.apply(this,arguments
);else return C.DeviceClass.Bw_.apply(this,arguments);},Bw_:function(A01){return false;
},AEZ:function(E){if(this.K&&this.K.AEZ)return this.K.AEZ.apply(this,arguments);
else return C.DeviceClass.Bvb.apply(this,arguments);},Bvb:function(E){},AIR:function(
Aq){this.AEZ(Aq);},UpdateBirthListView:function(AK){if(this.Aqq===AK)return;this.
Aqq=AK;A.abo([this,this.AEC,this.AIR],0);},BatchResetBirthNoticePending:function(
){var O;var AiY=0;var Adj=A._GetAutoObject(C.Device).An.Filter;var Be=A._GetAutoObject(
C.Helper).AOK();A._GetAutoObject(C.Device).An.Bk(Be);for(O=0;O<A._GetAutoObject(
C.Device).An.B9();O++){A._GetAutoObject(C.Helper).G8(O);A._GetAutoObject(C.Helper
).W.Ae6(false);A._GetAutoObject(C.Helper).W.Ci(A._GetAutoObject(C.Device).An);AiY++;
}A._GetAutoObject(C.Device).An.Bk(Adj);return AiY;},UpdateTransferProgress:function(
AK){if(this.AxS===AK)return;this.AxS=AK;A.abo([this,this.ASZ,this.A0A],0);},AF1:
function(E){if(this.K&&this.K.AF1)return this.K.AF1.apply(this,arguments);else return C.
DeviceClass.Bv_.apply(this,arguments);},Bv_:function(E){A.ab5("%s",Qa);},A0A:function(
Aq){this.AF1(Aq);},UpdateTransferTarget:function(AK){if(this.Afr===AK)return;this.
Afr=AK;A.abo([this,this.A9o,this.BbC],0);},Ar9:function(E){if(this.K&&this.K.Ar9
)return this.K.Ar9.apply(this,arguments);else return C.DeviceClass.Bv$.apply(this
,arguments);},Bv$:function(E){A.ab5("%s",J3);},BbC:function(Aq){this.Ar9(Aq);},AsG:
function(){if(this.K&&this.K.AsG)return this.K.AsG.apply(this,arguments);else return C.
DeviceClass.BwI.apply(this,arguments);},BwI:function(){},Aw5:function(E){if(this.
K&&this.K.Aw5)return this.K.Aw5.apply(this,arguments);else return C.DeviceClass.
BvU.apply(this,arguments);},BvU:function(E){},A0u:function(Aq){this.Aw5(Aq);},UpdatePremisesID:
function(Rq){if(this.PY===Rq)return;this.PY=Rq;A.abo([this,this.ASR,this.A0u],0);
},AwY:function(E){if(this.K&&this.K.AwY)return this.K.AwY.apply(this,arguments);
else return C.DeviceClass.BvI.apply(this,arguments);},BvI:function(E){},AIW:function(
Aq){this.AwY(Aq);},UpdateMotherSelectionDriedOffFilter:function(AK){if(this.AbT===
AK)return;this.AbT=AK;A.abo([this,this.AEJ,this.AIW],0);},AFg:function(E){if(this.
K&&this.K.AFg)return this.K.AFg.apply(this,arguments);else return C.DeviceClass.
Bvt.apply(this,arguments);},Bvt:function(E){},Bbp:function(Aq){this.AFg(Aq);},UpdateFreshCowSpan:
function(AK){if(this.AqR===AK)return;this.AqR=AK;A.abo([this,this.A8N,this.Bbp],
0);},UpdateUSBDevice:function(Bcv,Bcw,Bcm){if(((this.P4.ZZ===Bcv)&&(this.P4.AsQ===
Bcw))&&(this.P4.Asj===Bcm))return;this.P4.A_R(Bcv);this.P4.A_T(Bcw);this.P4.A_x(
Bcm);A.abo([this,this.Wz,this.Xg],0);},AF2:function(E){if(this.K&&this.K.AF2)return this.
K.AF2.apply(this,arguments);else return C.DeviceClass.Bwc.apply(this,arguments);
},Bwc:function(E){A.ab5("%s",E6);},Xg:function(Aq){this.AF2(Aq);},AxI:function(){
if(this.K&&this.K.AxI)return this.K.AxI.apply(this,arguments);else return C.DeviceClass.
BwC.apply(this,arguments);},BwC:function(){},Arg:function(){if(this.K&&this.K.Arg
)return this.K.Arg.apply(this,arguments);else return C.DeviceClass.BuW.apply(this
,arguments);},BuW:function(){return false;},AqC:function(){if(this.K&&this.K.AqC
)return this.K.AqC.apply(this,arguments);else return C.DeviceClass.BuR.apply(this
,arguments);},BuR:function(){},AFN:function(E){if(this.K&&this.K.AFN)return this.
K.AFN.apply(this,arguments);else return C.DeviceClass.Bv0.apply(this,arguments);
},Bv0:function(E){},BwV:function(Aq){this.AFN(Aq);},UpdateSerialNumber:function(
AK){if(this.AhL===AK)return;this.AhL=AK;A.abo([this,this.BlF,this.BwV],0);},Awt:
function(E){if(this.K&&this.K.Awt)return this.K.Awt.apply(this,arguments);else return C.
DeviceClass.Bu4.apply(this,arguments);},Bu4:function(E){},A0l:function(Aq){this.
Awt(Aq);},UpdateAnimalIdAutoGenerationMethod:function(BcD){if(this.AgA===BcD)return;
this.AgA=BcD;A.abo([this,this.ASy,this.A0l],0);},ACq:function(){return false;},AGu:
function(){return false;},AFP:function(E){if(this.K&&this.K.AFP)return this.K.AFP.
apply(this,arguments);else return C.DeviceClass.Bv1.apply(this,arguments);},Bv1:
function(E){},Bbz:function(Aq){this.AFP(Aq);},UpdateShutdownTimer:function(AK){if(
this.AU3===AK)return;this.AU3=AK;A.abo([this,this.A9h,this.Bbz],0);},Ast:function(
G){if(this.K&&this.K.Ast)return this.K.Ast.apply(this,arguments);else return C.DeviceClass.
Bwy.apply(this,arguments);},Bwy:function(G){},BGU:function(s){this.Ast(s);},Asa:
function(E){if(this.K&&this.K.Asa)return this.K.Asa.apply(this,arguments);else return C.
DeviceClass.Bwi.apply(this,arguments);},Bwi:function(E){},BbH:function(Aq){this.
Asa(Aq);},Asb:function(E){if(this.K&&this.K.Asb)return this.K.Asb.apply(this,arguments
);else return C.DeviceClass.Bwj.apply(this,arguments);},Bwj:function(E){},BbI:function(
Aq){this.Asb(Aq);},UpdateWeightGainsLowString:function(AK){if(this.AHl===AK)return;
this.AHl=AK;A.abo([this,this.A9x,this.BbI],0);},UpdateWeightGainsHighString:function(
AK){if(this.AHk===AK)return;this.AHk=AK;A.abo([this,this.A9w,this.BbH],0);},Awv:
function(E){if(this.K&&this.K.Awv)return this.K.Awv.apply(this,arguments);else return C.
DeviceClass.Bu_.apply(this,arguments);},Bu_:function(E){},Bbf:function(Aq){this.
Awv(Aq);},UpdateAnimalTypesWeightGainsString:function(AK){if(this.ABP===AK)return;
this.ABP=AK;A.abo([this,this.A8B,this.Bbf],0);},Ar$:function(E){if(this.K&&this.
K.Ar$)return this.K.Ar$.apply(this,arguments);else return C.DeviceClass.Bwh.apply(
this,arguments);},Bwh:function(E){},BbG:function(Aq){this.Ar$(Aq);},Asc:function(
E){if(this.K&&this.K.Asc)return this.K.Asc.apply(this,arguments);else return C.DeviceClass.
Bwn.apply(this,arguments);},Bwn:function(E){},BbL:function(Aq){this.Asc(Aq);},UpdateWeightValueBirthString:
function(AK){if(this.AHo===AK)return;this.AHo=AK;A.abo([this,this.A9A,this.BbL],
0);},UpdateWeightGainsAverageString:function(AK){if(this.AHj===AK)return;this.AHj=
AK;A.abo([this,this.A9v,this.BbG],0);},AwI:function(E){if(this.K&&this.K.AwI)return this.
K.AwI.apply(this,arguments);else return C.DeviceClass.Bvp.apply(this,arguments);
},Bvp:function(E){},BwQ:function(Aq){this.AwI(Aq);},UpdateEvaluationAnimalType:function(
Eo){if(this.ACK===Eo)return;this.ACK=Eo;A.abo([this,this.Bk$,this.BwQ],0);},UpdateStartScreen:
function(AK){if(this.AxK===AK)return;this.AxK=AK;A.abo([this,this.BlG,this.BwW],
0);},Aw9:function(E){if(this.K&&this.K.Aw9)return this.K.Aw9.apply(this,arguments
);else return C.DeviceClass.Bv2.apply(this,arguments);},Bv2:function(E){},BwW:function(
Aq){this.Aw9(Aq);},AD0:function(){if(this.K&&this.K.AD0)return this.K.AD0.apply(
this,arguments);else return C.DeviceClass.BuU.apply(this,arguments);},BuU:function(
){return 1;},AD1:function(){if(this.K&&this.K.AD1)return this.K.AD1.apply(this,arguments
);else return C.DeviceClass.BuV.apply(this,arguments);},BuV:function(){return 1;
},GetCommitCount:function(){return 1953;},GetCommitEpoch:function(){return 1711385184;
},GetCommitHash:function(){return A.kR.BhX;},GetVersionMajor:function(){return 0;
},GetVersionMinor:function(){return 9;},GetVersionRev:function(){return 9;},AFy:
function(E){if(this.K&&this.K.AFy)return this.K.AFy.apply(this,arguments);else return C.
DeviceClass.BvE.apply(this,arguments);},BvE:function(E){},Bbt:function(Aq){this.
AFy(Aq);},UpdateMaximumAgeNewOnFarm:function(AK){if(this.Av2===AK)return;this.Av2=
AK;A.abo([this,this.A82,this.Bbt],0);},Axd:function(E){if(this.K&&this.K.Axd)return this.
K.Axd.apply(this,arguments);else return C.DeviceClass.Bwa.apply(this,arguments);
},Bwa:function(E){},A0B:function(Aq){this.Axd(Aq);},UpdateTransponderAssignmentIdChangeMethod:
function(Ay6){if(this.Ak5===Ay6)return;this.Ak5=Ay6;A.abo([this,this.AS0,this.A0B
],0);},BatchResetPurchasedNoticePending:function(){var O;var AiY=0;var Adj=A._GetAutoObject(
C.Device).An.Filter;var Be=A._GetAutoObject(C.Helper).Avw();A._GetAutoObject(C.Device
).An.Bk(Be);for(O=0;O<A._GetAutoObject(C.Device).An.B9();O++){A._GetAutoObject(C.
Helper).G8(O);A._GetAutoObject(C.Helper).W.Ae6(false);A._GetAutoObject(C.Helper).
W.Ci(A._GetAutoObject(C.Device).An);AiY++;}A._GetAutoObject(C.Device).An.Bk(Adj);
return AiY;},Bnu:function(E){},UpdateMassRecordingAutomatic:function(AK){if(this.
ARR===AK)return;this.ARR=AK;A.abo([this,this.Blr,this.Bnu],0);},Nl:function(E){if(
this.K&&this.K.Nl)return this.K.Nl.apply(this,arguments);else return C.DeviceClass.
Bwo.apply(this,arguments);},Bwo:function(E){},BwZ:function(Aq){this.Nl(Aq);},UpdateWhereAbouts:
function(AfN){if(this.WhereAbouts===AfN)return;this.WhereAbouts=AfN;A.abo([this,
this.Awq,this.BwZ],0);},ArG:function(E){if(this.K&&this.K.ArG)return this.K.ArG.
apply(this,arguments);else return C.DeviceClass.BuZ.apply(this,arguments);},BuZ:
function(E){},Ba$:function(Aq){this.ArG(Aq);},ArH:function(E){if(this.K&&this.K.
ArH)return this.K.ArH.apply(this,arguments);else return C.DeviceClass.Bu0.apply(
this,arguments);},Bu0:function(E){},Bba:function(Aq){this.ArH(Aq);},UpdateActiveMassRecordingFields:
function(AK){if(this.ABH===AK)return;this.ABH=AK;A.abo([this,this.A8s,this.Ba$],
0);},UpdateActiveMassRecordingFieldsOrder:function(AK){if(this.ABI===AK)return;this.
ABI=AK;A.abo([this,this.A8t,this.Bba],0);},Asq:function(G){if(this.K&&this.K.Asq
)return this.K.Asq.apply(this,arguments);else return C.DeviceClass.Bwt.apply(this
,arguments);},Bwt:function(G){},BGP:function(s){this.Asq(s);},AFw:function(E){if(
this.K&&this.K.AFw)return this.K.AFw.apply(this,arguments);else return C.DeviceClass.
BvB.apply(this,arguments);},BvB:function(E){},AIU:function(Aq){this.AFw(Aq);},UpdateMassRecordingDateOfBirthMandatory:
function(AK){if(this.AeP===AK)return;this.AeP=AK;A.abo([this,this.AEG,this.AIU],
0);},AFv:function(E){this.UpdateMassRecordingCounter(E);},UpdateMassRecordingCounter:
function(AK){if(this.Av0===AK)return;this.Av0=AK;A.abo([this,this.A80,this.AFv],
0);},AjC:function(){if(this.K&&this.K.AjC)return this.K.AjC.apply(this,arguments
);else return C.DeviceClass.BuP.apply(this,arguments);},BuP:function(){return false;
},Aqo:function(){if(this.K&&this.K.Aqo)return this.K.Aqo.apply(this,arguments);else
return C.DeviceClass.BuO.apply(this,arguments);},BuO:function(){return false;},Aqn:
function(){if(this.K&&this.K.Aqn)return this.K.Aqn.apply(this,arguments);else return C.
DeviceClass.BuN.apply(this,arguments);},BuN:function(){return false;},AuW:function(
){if(this.K&&this.K.AuW)return this.K.AuW.apply(this,arguments);else return C.DeviceClass.
BuQ.apply(this,arguments);},BuQ:function(){return false;},AwV:function(E){if(this.
K&&this.K.AwV)return this.K.AwV.apply(this,arguments);else return C.DeviceClass.
BvD.apply(this,arguments);},BvD:function(E){},Bbs:function(Aq){this.AwV(Aq);},UpdateMaxWeightValuePrecision:
function(AK){if(this.OM===AK)return;this.OM=AK;A.abo([this,this.A81,this.Bbs],0);
},Aw2:function(E){if(this.K&&this.K.Aw2)return this.K.Aw2.apply(this,arguments);
else return C.DeviceClass.BvP.apply(this,arguments);},BvP:function(E){},Bbw:function(
Aq){this.Aw2(Aq);},UpdateNoNaisIdListActions:function(AK){if(this.ASg===AK)return;
this.ASg=AK;A.abo([this,this.A85,this.Bbw],0);},ResetNoNaisIdListActions:function(
G){if(this.K&&this.K.ResetNoNaisIdListActions)return this.K.ResetNoNaisIdListActions.
apply(this,arguments);else return C.DeviceClass.Bwv.apply(this,arguments);},Bwv:
function(G){},BGR:function(s){this.ResetNoNaisIdListActions(s);},Aw3:function(E){
if(this.K&&this.K.Aw3)return this.K.Aw3.apply(this,arguments);else return C.DeviceClass.
BvQ.apply(this,arguments);},BvQ:function(E){},Bbx:function(Aq){this.Aw3(Aq);},UpdateNoTransponderListActions:
function(AK){if(this.ASl===AK)return;this.ASl=AK;A.abo([this,this.A86,this.Bbx],
0);},ResetNoTransponderListActions:function(G){if(this.K&&this.K.ResetNoTransponderListActions
)return this.K.ResetNoTransponderListActions.apply(this,arguments);else return C.
DeviceClass.Bww.apply(this,arguments);},Bww:function(G){},BGS:function(s){this.ResetNoTransponderListActions(
s);},Axj:function(E){if(this.K&&this.K.Axj)return this.K.Axj.apply(this,arguments
);else return C.DeviceClass.Bwp.apply(this,arguments);},Bwp:function(E){},BbM:function(
Aq){this.Axj(Aq);},UpdateYoungNoTransponderListActions:function(AK){if(this.AV6===
AK)return;this.AV6=AK;A.abo([this,this.A9C,this.BbM],0);},ResetYoungNoTransponderListActions:
function(G){if(this.K&&this.K.ResetYoungNoTransponderListActions)return this.K.ResetYoungNoTransponderListActions.
apply(this,arguments);else return C.DeviceClass.Bwz.apply(this,arguments);},Bwz:
function(G){},BGV:function(s){this.ResetYoungNoTransponderListActions(s);},Axe:function(
E){if(this.K&&this.K.Axe)return this.K.Axe.apply(this,arguments);else return C.DeviceClass.
Bwb.apply(this,arguments);},Bwb:function(E){},A0C:function(Aq){this.Axe(Aq);},UpdateTransponderUnlinkIdChangeMethod:
function(Ay6){if(this.An6===Ay6)return;this.An6=Ay6;A.abo([this,this.AS1,this.A0C
],0);},Asp:function(AoE,AJf){if(this.K&&this.K.Asp)return this.K.Asp.apply(this,
arguments);else return C.DeviceClass.Bwr.apply(this,arguments);},Bwr:function(AoE
,AJf){this.Gf.E5();this.Gf.AgN=AoE;this.Gf.AU2=AJf;this.Gf.Fb(1);A._GetAutoObject(
C.Device).A3(110,true,A.jV,0,[this,this.BAQ]);},BAQ:function(G){var As=(C.PopupContext.
isPrototypeOf(G)?G:null);if(!!As&&(As.PopupState===9))A.aaS([this,this.BCu],this
);},BCu:function(G){this.Gf.Fb(2);this.AxI();A._GetAutoObject(C.Device).A3(110,false
,A.jV,0,null);},AE0:function(E){if(this.K&&this.K.AE0)return this.K.AE0.apply(this
,arguments);else return C.DeviceClass.Bvc.apply(this,arguments);},Bvc:function(E
){},Bbh:function(Aq){this.AE0(Aq);},UpdateBirthRegistrationsListResetOnExport:function(
AK){if(this.AM0===AK)return;this.AM0=AK;A.abo([this,this.A8E,this.Bbh],0);},AFH:
function(E){if(this.K&&this.K.AFH)return this.K.AFH.apply(this,arguments);else return C.
DeviceClass.BvV.apply(this,arguments);},BvV:function(E){},Bby:function(Aq){this.
AFH(Aq);},UpdatePurchasedListResetOnExport:function(AK){if(this.AUf===AK)return;
this.AUf=AK;A.abo([this,this.A88,this.Bby],0);},BoR:function(){},AEz:function(){
return this.Ii;},Awa:function(){return this.Aa4;},Awd:function(){return this.AmE;
},ASU:function(){return this.ScanState;},AEH:function(){return this.MeasureState;
},AEL:function(){return this.Lu;},A8W:function(){return this.Language;},Arz:function(
){return this.TemperatureUnit;},A8H:function(){return this.AM7;},ASL:function(){
return this.AEl;},Awp:function(){return this.OverlayMenu;},A9p:function(){return this.
AcF;},ASW:function(){return this.SyncState;},A9q:function(){return this.AsR;},AEM:
function(){return this.AVP;},AST:function(){return this.RatingMode;},Arw:function(
){return this.AmS;},ASY:function(){return this.AVv;},Bly:function(){return this.
AUg;},BkX:function(){return this.AutoRegistrationMode;},ASV:function(){return this.
OT;},Uj:function(){return this.A1;},Uk:function(){return this.AF;},AEN:function(
){return this.KX;},ASK:function(){return this.MassUnit;},A8r:function(){return this.
Pn;},ASx:function(){return this.AuH;},A8C:function(){return this.AutoActions;},PT:
function(){return this.AnimalType;},A9y:function(){return this.WeightRecordingMode;
},ASQ:function(){return this.AGg;},AEE:function(){return this.HG;},A8w:function(
){return this.AdT;},A9z:function(){return this.WeightRecordingScope;},Wy:function(
){return this.Gender;},Awi:function(){return this.Aq5;},Awh:function(){return this.
Aq4;},AEB:function(){return this.Kk;},A8y:function(){return this.AMe;},A8K:function(
){return this.AmR;},AEA:function(){return this.D9;},A9u:function(){return this.AVR;
},A8M:function(){return this.AOG;},A8A:function(){return this.ABO;},A9k:function(
){return this.AG1;},A9l:function(){return this.AG2;},A8O:function(){return this.
AqS;},A84:function(){return this.AEn;},A83:function(){return this.AEm;},Awm:function(
){return this.AR5;},Awl:function(){return this.AR4;},A8G:function(){return this.
Aqs;},A8p:function(){return this.ABG;},A8q:function(){return this.Aqe;},Anq:function(
){return this.Ij;},ASD:function(){return this.ACC;},ASE:function(){return this.ACD;
},AEF:function(){return this.Au8;},Ant:function(){return this.AjV;},ASM:function(
){return this.Av7;},Awn:function(){return this.AR6;},Awg:function(){return this.
EartagNrAssignmentMode;},Awc:function(){return this.Breed;},Bls:function(){return this.
SA;},Blq:function(){return this.Q1;},BlQ:function(){return this.SZ;},Bk0:function(
){return this.R1;},A8I:function(){return this.AN4;},AEC:function(){return this.Aqq;
},ASZ:function(){return this.AxS;},A9o:function(){return this.Afr;},ASR:function(
){return this.PY;},AEJ:function(){return this.AbT;},A8N:function(){return this.AqR;
},Wz:function(){return this.P4;},BlF:function(){return this.AhL;},ASy:function(){
return this.AgA;},A9h:function(){return this.AU3;},A9w:function(){return this.AHk;
},A9x:function(){return this.AHl;},A8B:function(){return this.ABP;},A9v:function(
){return this.AHj;},A9A:function(){return this.AHo;},Bk$:function(){return this.
ACK;},BlG:function(){return this.AxK;},A82:function(){return this.Av2;},AS0:function(
){return this.Ak5;},Blr:function(){return this.ARR;},Awq:function(){return this.
WhereAbouts;},A8s:function(){return this.ABH;},A8t:function(){return this.ABI;},
AEG:function(){return this.AeP;},A80:function(){return this.Av0;},A81:function(){
return this.OM;},A85:function(){return this.ASg;},A86:function(){return this.ASl;
},A9C:function(){return this.AV6;},AS1:function(){return this.An6;},A8E:function(
){return this.AM0;},A88:function(){return this.AUf;},_Init:function(aArg){C.Table.
_Init.call(this.An={I:this},0);C.Table._Init.call(this.Bt={I:this},0);C.Table._Init.
call(this.Agy={I:this},0);A.Core.A$Q._Init.call(this.AnO={I:this},0);C.Table._Init.
call(this.Pr={I:this},0);this.__proto__=C.DeviceClass;this.An.OnSetId(0);this.Bt.
OnSetId(1);this.Agy.OnSetId(3);this.Pr.OnSetId(4);this.OT=A._NewObject(C.Transponder
,0);this.SA=A._NewObject(C.AxH,0);this.Q1=A._NewObject(C.Avz,0);this.SZ=A._NewObject(
C.Avz,0);this.R1=A._NewObject(C.AxH,0);this.P4=A._NewObject(C.A$7,0);this.Gf=A._NewObject(
C.VS,0);var J4=this._variants();if(J4){this.K={};J4._Init.call(this,aArg);}A.h7++;
},_Done:function(){if(this.K)this.K._Done.call(this);this.__proto__=null;this.An.
_Done();this.Bt._Done();this.Agy._Done();this.AnO._Done();this.Pr._Done();A.h7--;
},_ReInit:function(){this.An._ReInit();this.Bt._ReInit();this.Agy._ReInit();this.
AnO._ReInit();this.Pr._ReInit();if(this.K)this.K._ReInit.call(this);},_Mark:function(
D){var B;if((B=this.OT)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.SA)&&(B._cycle
!=D))B._Mark(B._cycle=D);if((B=this.Q1)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=
this.SZ)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.R1)&&(B._cycle!=D))B._Mark(
B._cycle=D);if((B=this.P4)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Gf)&&(B.
_cycle!=D))B._Mark(B._cycle=D);if((B=this.An)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Bt)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Agy)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.AnO)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Pr)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);if(this.K)this.K._Mark(
D);},_variants:function(){return A.acs.DeviceClass._variants();},K:null,I:null,_cycle:
0,_observers:null,_className:"Device::DeviceClass"};C.Device={_Init:function(){C.
DeviceClass._Init.call(this,0);},_ReInit:function(){},_variants:function(){return this;
},_this:null};C.ScreenType={UNDEFINED:0,Sleep:1,Boot:2,Home:3,Charge:4,Sync:5,Settings:
6,EditAnimalData:7,AnimalList:8,AnimalListFilter:9,AnimalActionTemperature:10,AnimalActionRate:
11,AlarmList:12,ControlMeasure:13,ControlList:14,RangeTest:15,DateTimeSettings:16
,TemperatureSettings:17,DeviceSettings:18,RegistrationSettings:19,WatchList:20,AnimalActionWeighing:
21,UnitsSettings:22,WeightGainSettings:23,AnimalActionActions:24,EvaluationMenuMain:
25,NewAnimals:26,MassRecordingScreen:27,NewAnimalManualData:28,AnimalActionUnregister:
29,AnimalActionNewbornCare:30,NewAnimalTransponderData:31,SetTransponderScreen:32
,WeightListScreen:33,AutoActionScanScreen:34,ManualActionScanScreen:35,AnimalSingleInfoScreen:
36,InitializationSettings:37,ControlledPowerOff:38,ChargeWarning:39,AlarmListFilter:
40,WatchListFilter:41,DataAcquisitionSettings:42,FreshCowList:43,FreshCowListFilter:
44,SetSaveTransponderScreen:45,NoTransponderList:46,NoTransponderListFilter:47,AnimalActionPerished:
48,NewAnimalSetTransponderScreen:49,AnimalMultiInfoScreen:50,ActionList:51,ActionListFilter:
52,Update:53,NewAnimalCalvingData:54,NewAnimalsSetTransponderScreen:55,EvaluationTemperatures:
56,EvaluationWeights:57,EvaluationRatings:58,EvaluationLosses:59,TemperatureMeasurement:
60,DryCowList:61,DryCowListFilter:62,DeviceMain:63,DeviceService:64,DeviceCheck:
65,EvaluationMenuWeights:66,EvaluationBirthWeights:67,EvaluationWeightsRecent:68
,ListsMain:69,ListsIdManagement:70,NoNaisIdList:71,NoNaisIdListFilter:72,RegistrationsListFilter:
73,BirthRegistrationsList:74,AnimalRegistrationDetails:75,PremisesSettings:76,NewMenu:
77,NewAnimalLoss:78,MotherScanScreen:79,SetSaveNaisIdScreen:80,EditAnimalDataNaisId:
81,DeviceInfo:82,DeviceDatamanagement:83,AnimalEvaluationFilter:84,YoungNoTransponderList:
85,YoungNoTransponderListFilter:86,RegistrationPresettingsSettings:87,RegistrationAutomaticSettings:
88,TransponderAssignmentSettings:89,PurchasedAnimalsList:90,TextInput:91,DeviceAnimalDataMenu:
92,DeviceDeviceDataMenu:93,AnimalActions:94,TransponderUnlinkSettings:95,LAST:96
};C.Operator={Equal:0,None:1,Greater:2,Less:3,Contains:4,Unequal:5};C.MeasureState={
Idle:0,Progress:1,Prediction:2,Ready:3,Error:4,LAST:5};C.StringFilterCriterion={
A5:A.jV,Abi:function(){var Aw=A._NewObject(C.StringFilterCriterion,0);Aw.E_(this
);return Aw;},E_:function(AI){C.FilterCriterion.E_.call(this,AI);var Aw=(C.StringFilterCriterion.
isPrototypeOf(AI)?AI:null);if(!!Aw)this.A5=Aw.A5;},_Init:function(aArg){C.FilterCriterion.
_Init.call(this,aArg);this.__proto__=C.StringFilterCriterion;},_className:"Device::StringFilterCriterion"
};C.Table={CF:function(Ad,A4){if(this.K&&this.K.CF)return this.K.CF.apply(this,arguments
);else return C.ITable.CF.apply(this,arguments);},V0:function(Ad,A4){if(this.K&&
this.K.V0)return this.K.V0.apply(this,arguments);else return C.ITable.V0.apply(this
,arguments);},H2:function(Ad,A4){if(this.K&&this.K.H2)return this.K.H2.apply(this
,arguments);else return C.ITable.H2.apply(this,arguments);},OnSetId:function(E){
if(this.K&&this.K.OnSetId)return this.K.OnSetId.apply(this,arguments);else return C.
ITable.OnSetId.apply(this,arguments);},B9:function(){if(this.K&&this.K.B9)return this.
K.B9.apply(this,arguments);else return C.ITable.B9.apply(this,arguments);},Bk:function(
E){if(this.K&&this.K.Bk)return this.K.Bk.apply(this,arguments);else return C.ITable.
Bk.apply(this,arguments);},V1:function(Ad,A4){if(this.K&&this.K.V1)return this.K.
V1.apply(this,arguments);else return C.ITable.V1.apply(this,arguments);},Sl:function(
Ad,A4){if(this.K&&this.K.Sl)return this.K.Sl.apply(this,arguments);else return C.
ITable.Sl.apply(this,arguments);},Oz:function(){if(this.K&&this.K.Oz)return this.
K.Oz.apply(this,arguments);else return C.ITable.Oz.apply(this,arguments);},OB:function(
AoQ){if(this.K&&this.K.OB)return this.K.OB.apply(this,arguments);else return C.ITable.
OB.apply(this,arguments);},YF:function(){if(this.K&&this.K.YF)return this.K.YF.apply(
this,arguments);else return C.ITable.YF.apply(this,arguments);},ZJ:function(Ad,A4
,CZ){if(this.K&&this.K.ZJ)return this.K.ZJ.apply(this,arguments);else return C.ITable.
ZJ.apply(this,arguments);},Ho:function(Ad,A4,CZ){if(this.K&&this.K.Ho)return this.
K.Ho.apply(this,arguments);else return C.ITable.Ho.apply(this,arguments);},ZI:function(
Ad,A4,CZ){if(this.K&&this.K.ZI)return this.K.ZI.apply(this,arguments);else return C.
ITable.ZI.apply(this,arguments);},N7:function(Ad,A4,CZ){if(this.K&&this.K.N7)return this.
K.N7.apply(this,arguments);else return C.ITable.N7.apply(this,arguments);},ZH:function(
Ad,A4,CZ){if(this.K&&this.K.ZH)return this.K.ZH.apply(this,arguments);else return C.
ITable.ZH.apply(this,arguments);},LT:function(aColumn,A7){if(this.K&&this.K.LT)return this.
K.LT.apply(this,arguments);else return C.ITable.LT.apply(this,arguments);},KO:function(
Ad,A4){if(this.K&&this.K.KO)return this.K.KO.apply(this,arguments);else return C.
ITable.KO.apply(this,arguments);},UA:function(Ad,A4,CZ){if(this.K&&this.K.UA)return this.
K.UA.apply(this,arguments);else return C.ITable.UA.apply(this,arguments);},AgZ:function(
aColumn,A7){if(this.K&&this.K.AgZ)return this.K.AgZ.apply(this,arguments);else return C.
ITable.AgZ.apply(this,arguments);},E5:function(){if(this.K&&this.K.E5)return this.
K.E5.apply(this,arguments);else return C.ITable.E5.apply(this,arguments);},AjL:function(
aColumn,A7){if(this.K&&this.K.AjL)return this.K.AjL.apply(this,arguments);else return C.
ITable.AjL.apply(this,arguments);},Aem:function(aColumn,A7){if(this.K&&this.K.Aem
)return this.K.Aem.apply(this,arguments);else return C.ITable.Aem.apply(this,arguments
);},HJ:function(){if(this.K&&this.K.HJ)return this.K.HJ.apply(this,arguments);else
return C.ITable.HJ.apply(this,arguments);},Abq:function(){if(this.K&&this.K.Abq)
return this.K.Abq.apply(this,arguments);else return C.ITable.Abq.apply(this,arguments
);},QK:function(){if(this.K&&this.K.QK)return this.K.QK.apply(this,arguments);else
return C.ITable.QK.apply(this,arguments);},_Init:function(aArg){C.ITable._Init.call(
this,aArg);this.__proto__=C.Table;var J4=this._variants();if(J4){this.K={};J4._Init.
call(this,aArg);}},_Done:function(){if(this.K)this.K._Done.call(this);this.__proto__=
C.ITable;C.ITable._Done.call(this);},_ReInit:function(){C.ITable._ReInit.call(this
);if(this.K)this.K._ReInit.call(this);},_Mark:function(D){C.ITable._Mark.call(this
,D);if(this.K)this.K._Mark(D);},_variants:function(){return A.acs.Table._variants(
);},K:null,_className:"Device::Table"};C.TableId={Animal:0,Rating:1,Undefined:2,
AnimalGroup:3,CalfDeregistrations:4};C.ScanState={Idle:0,Progress:1,IdScanned:2,
NotFound:3,Error:4,LAST:5};C.RatedAttribute={None:0,Feed:1,Appearance:2,Respiratory:
3,Faeces:4};C.ConverterClass={M5:null,Ak2:function(AoO){var Bdc;var Aut=this.AVk(
AoO/100,0,A._GetAutoObject(C.Device).TemperatureUnit);Bdc=A.abk(Aut,0,1);return Bdc;
},A$Y:function(Nt){if(Nt<=0)return 0;else if(Nt<=1)return 5;else if(Nt<=2)return 3;
else if(Nt<=4)return 2;else if(Nt<=6)return 1;else if(Nt<=8)return 4;else return 0;
},Ad2:function(Nt){var a=0;switch(Nt){case 3:a=2;break;case 2:a=4;break;case 1:a=
6;break;case 0:a=0;break;case 4:a=8;break;case 5:a=1;break;default:A.ab5("%s",Ob
);}return a;},AsI:function(Eo,Ru){var Nv=A._GetAutoObject(C.Converter).Ajn(Ru,Eo
);switch(Nv){case 3:return 1;case 2:return 2;case 1:return 3;case 0:return 4;default:
throw new Error(Qb+Nv.toFixed());}},AhT:function(){var B;var D8=A._NewObject(A.Core.
Bs,0).Initialize(A._GetAutoObject(C.Helper).Dv());D8.AnB(0);D8.AnE(0);D8.AnH(0);
return((B=(D8.JS()|0))<0)?B+0x100000000:B;},Bh1:function(Atr){var Do;switch(Atr){
case 36:Do=MJ;break;case 40:Do=S_;break;case 56:Do=US;break;case 70:Do=Z3;break;
case 100:Do=W5;break;case 124:Do=It;break;case 156:Do=UT;break;case 158:Do=Z4;break;
case 191:Do=W6;break;case 196:Do=Z5;break;case 203:Do=W7;break;case 208:Do=Z6;break;
case 233:Do=Z7;break;case 246:Do=UU;break;case 250:Do=W8;break;case 276:Do=O5;break;
case 300:Do=Z8;break;case 348:Do=O6;break;case 372:Do=Rn;break;case 380:Do=W9;break;
case 392:Do=W_;break;case 428:Do=UV;break;case 440:Do=Z9;break;case 442:Do=Z_;break;
case 470:Do=W$;break;case 528:Do=Xa;break;case 578:Do=S$;break;case 616:Do=UW;break;
case 620:Do=UX;break;case 642:Do=AcM;break;case 643:Do=Ta;break;case 703:Do=Z$;break;
case 705:Do=AfB;break;case 724:Do=Aaa;break;case 752:Do=Xb;break;case 756:Do=Aab;
break;case 792:Do=Xc;break;case 804:Do=AhX;break;case 826:Do=KZ;break;case 840:Do=
AcN;break;default:Do=Atr.toFixed();}return Do;},Ak$:function(MP){var Aap;if((MP<
10000)&&(A._GetAutoObject(C.Device).OM===2))Aap=2;else if((MP<100000)&&!!A._GetAutoObject(
C.Device).OM)Aap=1;else Aap=0;return this.S9(MP,Aap,false);},Ax5:function(MP,Aap
){return this.S9(MP,Aap,false);},S9:function(MP,Aap,BAj){var B;var AlF=A.jV;switch(
A._GetAutoObject(C.Device).MassUnit){case 0:if(BAj)AlF=A.abl(MP,0,0);else{var Bez=
MP<0;if(Aap<3)MP=MP+(((Bez?-1:1)*5)*(Math.pow(10,2-Aap)|0));AlF=(((((B=MP)>-2147483648
)?Math.abs(B):B)/1000)|0).toFixed();if(Aap>0)AlF=AlF+(Lw+A.abV(A.abl((((B=MP)>-2147483648
)?Math.abs(B):B)%1000,3,10),Aap));if(Bez)AlF=AhY+AlF;}break;case 1:AlF=A.abk(MP/
453.592,0,Aap);break;default:A.ab5("%s%s",Aoe,A._GetAutoObject(C.Device).MassUnit.
toFixed());}return AlF;},Rj:function(Jj){var A4G=Jj.toFixed();var BgR=A4G.length;
if((BgR>=14)&&(BgR<=15)){var A2v=this.AxV(Jj);var By_=A._GetAutoObject(C.Converter
).Bh1(A2v);A4G=(By_+Oc)+A.abm(A._GetAutoObject(C.Helper).Sj(Jj,0,12),12,10);}return A4G;
},AmV:function(L6){switch(L6){case 0:return A.aaL(A.ach.AQF);case 1:return A.aaL(
A.ach.ADH);case 2:return A.aaL(A.ach.ADL);default:{A.ab5("%s%e",Xd,L6);return null;
}}},A5i:function(ByG){switch(ByG){case 0:return A.aaL(A.ach.AvI);case 1:return A.
aaL(A.ach.ADD);case 2:return A.aaL(A.ach.AQy);default:throw new Error(Aac);}},Ad0:
function(AJp){switch(AJp){case 0:case 14:return A.aaL(A.ach.AjW);case 2:return A.
aaL(A.ach.Ara);case 1:return A.aaL(A.ach.Ag7);case 3:switch(A._GetAutoObject(C.Device
).MassUnit){case 0:return A.aaL(A.ach.ADR);case 1:return A.aaL(A.ach.ADS);default:
throw new Error(AfC+A._GetAutoObject(C.Device).MassUnit.toFixed());}break;case 4:
return A.aaL(A.ach.APW);case 5:return A.aaL(A.ach.APX);case 6:return A.aaL(A.ach.
AP2);case 7:return A.aaL(A.ach.APi);case 8:case 13:return A.aaL(A.ach.APp);case 9:
return A.aaL(A.ach.ADe);case 10:return A.aaL(A.ach.APo);case 12:return A.aaL(A.ach.
APq);case 11:return A.aaL(A.ach.AP8);default:throw new Error(AhZ+AJp.toFixed());
}},Bhr:function(Ay_){switch(Ay_){case 0:return A.aaL(A.ach.AQx);case 3:return A.
aaL(A.ach.Ara);case 1:return A.aaL(A.ach.Ag7);case 2:return A._GetAutoObject(A.acj.
DU).BdB();default:throw new Error(AhZ+Ay_.toFixed());}},Bh0:function(Atr){switch(
Atr){case 977:return AcO;case 978:return UY;case 980:return Aof;case 981:return Aog;
case 982:return Aoh;case 983:return Aoi;case 984:return Alc;case 985:return AsX;
default:return A.aaR(A.acf.Unknown);}},Bij:function(Ac2){switch(Ac2){case 1:return 0x278A;
case 2:return 0x278B;case 3:return 0x278C;case 4:return 0x278D;case 5:return 0x278E;
case 6:return 0x278F;case 7:return 0x2790;case 8:return 0x2791;case 9:return 0x2792;
case 10:return 0x2793;default:return 0x20;}},Bql:function(Jj){if(!Jj)return-1;return(
Jj%100000000)|0;},BiY:function(AoN,aFilter){var B;if(!aFilter)return Ax7;var Apf=
Ax8;var Aw=aFilter.AOO();while(!!Aw){Apf=Apf+A._GetAutoObject(C.Helper).A6T(AoN,
Aw);Aw=aFilter.AOT(Aw);if(!!Aw)Apf=Apf+O7;}Apf=Apf+Ro;return Apf;},A7y:function(
Bcf){var MM=0;switch(Bcf){case 14:MM=2;break;case 13:MM=4;break;case 6:MM=36;break;
case 11:MM=9;break;case 0:MM=39;break;case 10:MM=26;break;case 12:MM=12;break;case
5:MM=14;break;case 3:MM=15;break;case 1:MM=10;break;case 8:MM=16;break;case 4:MM=
20;break;case 15:MM=27;break;case 9:MM=31;break;case 2:MM=13;break;case 7:MM=35;
break;case 16:MM=37;break;default:A.ab5("%s%e",Ax9,Bcf);}return MM;},Bhq:function(
Ay_){switch(Ay_){case 0:return 1;case 3:return 0;case 1:return 2;case 2:switch(A.
_GetAutoObject(C.Device).MassUnit){case 0:return 3;case 1:return 4;default:throw new
Error(AfC+A._GetAutoObject(C.Device).MassUnit.toFixed());}break;default:throw new
Error(AhZ+Ay_.toFixed());}},Ajr:function(AoY){switch(AoY){case 0:switch(A._GetAutoObject(
C.Device).MassUnit){case 0:return A.aaL(A.ach.APT);case 1:return A.aaL(A.ach.APS
);default:throw new Error(AfC+A._GetAutoObject(C.Device).MassUnit.toFixed());}break;
case 1:return A.aaL(A.ach.AQv);case 9:return A.aaL(A.ach.APP);case 4:return A.aaL(
A.ach.AQS);case 6:return A.aaL(A.ach.AQT);case 8:return A.aaL(A.ach.AP3);case 2:
return A.aaL(A.ach.AQX);case 3:return A.aaL(A.ach.AQR);case 7:return A.aaL(A.ach.
AQY);case 5:return A.aaL(A.ach.AQZ);case 10:switch(A._GetAutoObject(C.Device).MassUnit
){case 0:return A.aaL(A.ach.AQ6);case 1:return A.aaL(A.ach.AQ5);default:throw new
Error(AfC+A._GetAutoObject(C.Device).MassUnit.toFixed());}break;case 11:return A.
aaL(A.ach.AP9);case 12:return A.aaL(A.ach.AQz);case 16:return A.aaL(A.ach.AQA);case
19:case 13:case 14:case 18:case 15:case 17:return A.aaL(A.aci.TN);default:throw new
Error(UZ+AoY.toFixed());}},ANE:function(Atr){switch(Atr){case 40:return 1;case 56:
return 3;case 70:return 2;case 100:return 4;case 124:return 5;case 156:return 7;
case 158:return 36;case 191:return 17;case 196:return 8;case 203:return 9;case 208:
return 11;case 233:return 12;case 246:return 14;case 250:return 15;case 276:return 10;
case 300:return 16;case 348:return 18;case 372:return 19;case 380:return 20;case
392:return 21;case 428:return 24;case 440:return 22;case 442:return 23;case 470:
return 25;case 528:return 26;case 578:return 27;case 616:return 28;case 620:return 29;
case 642:return 30;case 643:return 31;case 703:return 34;case 705:return 33;case
724:return 13;case 752:return 32;case 756:return 6;case 792:return 35;case 804:return 37;
case 826:return 38;case 840:return 39;default:return 0;}},S2:function(Jj){var A2v=
this.AxV(Jj);return this.ANE(A2v);},AxV:function(Jj){return A._GetAutoObject(C.Helper
).Sj(Jj,12,3)|0;},Bag:function(AoS,Eo){if(AoS<A._GetAutoObject(C.Helper).ADa(Eo)
)return 1;else if(AoS<A._GetAutoObject(C.Helper).AC$(Eo))return 2;else return 3;
},ACY:function(Byk){switch(Byk){case 1:return 1;case 2:return 2;case 3:return 3;
case 4:return 4;case 5:return 5;case 6:return 6;case 7:return 7;case 8:return 8;
case 9:return 9;case 10:return 10;case 11:return 11;case 12:return 12;case 13:return 13;
case 14:return 14;case 15:return 15;case 16:return 16;default:return 0;}},AVk:function(
A7,AJh,AJi){if(AJh===AJi)return A7;if(!AJh&&(AJi===1)){var result=((A7*9)/5)+32;
return result;}if((AJh===1)&&!AJi){var result=((A7-32)*5)/9;return result;}throw new
Error(((AsY+AJh.toFixed())+Ax_)+AJi.toFixed());},A6C:function(Eb){switch(Eb){case
0:return Ax$;case 1:return A.jV;case 2:return Aya;case 3:return Aoj;case 4:return A.
aaR(A.acf.Contains);case 5:return AfD;default:{A.ab5("%s%e",Aok,Eb);return A.jV;
}}},A5H:function(Ac0){return this.M5.Ael(Ac0);},BjH:function(Ac0){return this.M5.
AmG(Ac0);},BhI:function(Atq){var AAs=0;switch(Atq){case 0:AAs=1;break;case 1:AAs=
2;break;case 2:AAs=3;break;case 3:AAs=4;break;default:A.ab5("%s%e",IV,Atq);}return AAs;
},Ajn:function(A0U,Eo){if(A0U>=A._GetAutoObject(C.Helper).A6O(Eo))return 3;else if(
A0U>=A._GetAutoObject(C.Helper).ACZ(Eo))return 2;else if(A0U<A._GetAutoObject(C.
Device).AcF)return 0;else return 1;},Aqz:function(MM){var BM=-1;switch(MM){case 0:
BM=0;break;case 1:BM=40;break;case 2:BM=70;break;case 3:BM=56;break;case 4:BM=100;
break;case 5:BM=124;break;case 6:BM=756;break;case 7:BM=156;break;case 8:BM=196;
break;case 9:BM=203;break;case 10:BM=276;break;case 11:BM=208;break;case 12:BM=233;
break;case 13:BM=724;break;case 14:BM=246;break;case 15:BM=250;break;case 16:BM=
300;break;case 17:BM=191;break;case 18:BM=348;break;case 19:BM=372;break;case 20:
BM=380;break;case 21:BM=392;break;case 22:BM=440;break;case 23:BM=442;break;case
24:BM=428;break;case 25:BM=470;break;case 26:BM=528;break;case 27:BM=578;break;case
28:BM=616;break;case 29:BM=620;break;case 30:BM=642;break;case 31:BM=643;break;case
32:BM=752;break;case 33:BM=705;break;case 34:BM=703;break;case 35:BM=792;break;case
36:BM=158;break;case 37:BM=804;break;case 38:BM=826;break;case 39:BM=840;break;default:
throw new Error(Aol+MM.toFixed());}return BM;},Bqp:function(Jj){return A._GetAutoObject(
C.Helper).Sj(Jj,8,2)|0;},Bqo:function(Jj){var BAe=this.Bqp(Jj);return this.ACY(BAe
);},AL8:function(Eh){var Rw=19;switch(Eh){case 0:break;case 4:Rw=7;break;case 32:
case 2048:Rw=9;break;case 4096:Rw=11;break;case 32768:Rw=14;break;case 524288:Rw=
18;break;case 65536:Rw=15;break;case 128:Rw=17;break;case 16:Rw=1;break;case 16384:
Rw=12;break;case 1024:Rw=8;break;case 2:Rw=3;break;case 131072:Rw=16;break;case 1:
Rw=2;break;case 8:Rw=5;break;case 256:Rw=10;break;default:throw new Error(AsZ+Eh.
toFixed());}return Rw;},_Init:function(aArg){C.M5._Init.call(this.M5={I:this},0);
this.__proto__=C.ConverterClass;A.h7++;},_Done:function(){this.__proto__=null;this.
M5._Done();A.h7--;},_ReInit:function(){this.M5._ReInit();},_Mark:function(D){var
B;if((B=this.M5)._cycle!=D)B._Mark(B._cycle=D);if((B=this.I)&&(B._cycle!=D))B._Mark(
B._cycle=D);},I:null,_cycle:0,_observers:null,_className:"Device::ConverterClass"
};C.Converter={_Init:function(){C.ConverterClass._Init.call(this,0);},_ReInit:function(
){},_variants:function(){return this;},_this:null};C.MinLowTemperature=3000;C.MaxHighTemperature=
5000;C.TemperatureStep=10;C.RatingTableFields={Id:0,AnimalId:1,FeedAssessment:2,
AppearanceAssessment:3,RespiratoryAssessment:4,FaecesAssessment:5,Timestamp:6,Temperature:
7,BodyWeight:8,RatingTemperature:9};C.Animal={TransponderId:0,NaisId:0,NaisIdMother:
0,Id:0,VisualId:0,GroupId:0,DateOfBirth:0,LocationId:0,LastTemperature:0,TimestampLastControl:
0,TimestampLastWatch:0,TimestampExpirationFeverAlarm:0,TimestampAlarm:0,LastBodyWeight:
0,TimestampLastWeighing:0,FirstBodyWeight:0,TimestampFirstWeighing:0,FirstBodyWeightId:
0,DateOfLastCalving:0,LactationNumber:0,TimestampLastTemperature:0,TimestampLastAssessment:
0,ReasonOfLeaving:0,WhereAbouts:0,EaseOfDelivery:0,Breed:0,AnimalType:0,LastRatingTemperature:
0,WorstAssessment:0,BirthType:0,Gender:2,IsDry:false,IsRegistrationNoticePending:
false,IsPerished:false,IsFever:false,IsWatch:false,IsRegistered:false,IsControl:
false,IsAlarm:false,E3:function(Ad,AH){var HF=C.Row.E3.call(this,Ad,AH);if(HF&&!
!AH){this.OnSetId(AH.CF(Ad,0));this.SJ(AH.CF(Ad,1));this.Ab3(AH.CF(Ad,2));this.AnD(
AH.CF(Ad,3));this.Q6(AH.Hv(Ad,4));this.JU(AH.AOQ(Ad,7));this.Akw(AH.Bje(Ad,6));this.
EC(AH.AmW(Ad,14));this.PW(AH.KO(Ad,22));this.Nj(AH.KO(Ad,26));this.Axi(AH.I6(Ad,
13));this.Ae3(AH.H2(Ad,8));this.Axa(AH.Hv(Ad,15));this.ATQ(AH.Hv(Ad,31));this.Ae9(
AH.A63(Ad,5));this.ATo(AH.I6(Ad,17));this.Uq(AH.H2(Ad,11));this.ATP(AH.Hv(Ad,16)
);this.ATS(AH.Hv(Ad,30));this.AkC(AH.H2(Ad,9));this.Ae7(AH.H2(Ad,12));this.ATR(AH.
Hv(Ad,20));this.Axc(AH.Hv(Ad,21));this.Ae5(AH.H2(Ad,10));this.AwQ(AH.H2(Ad,27));
this.AFp(AH.AC7(Ad,18));this.AFT(AH.Hv(Ad,19));this.AwL(AH.AC7(Ad,23));this.Axb(
AH.Hv(Ad,24));this.ATg(AH.CF(Ad,25));this.AwC(AH.Hv(Ad,28));this.AwR(AH.CF(Ad,29
));this.ArV(AH.H2(Ad,38));this.N1(AH.Bjf(Ad,32));this.Aky(AH.Bjk(Ad,33));this.AnF(
AH.KO(Ad,35));this.Nl(AH.AOY(Ad,34));this.Ae6(AH.H2(Ad,37));this.AFI(AH.Bjt(Ad,36
));}return HF;},Ci:function(AH){var HF=C.Row.Ci.call(this,AH);if(HF&&!!AH){var Jo=
AH.Oz();if(Jo<=0)A.ab5("%s",Xe);else{var Az7=this.Am7();if(Az7)this.CL=AH.YF();else
AH.Ho(this.CL,0,this.Id);AH.Ho(this.CL,1,this.VisualId);AH.Ho(this.CL,2,this.GroupId
);AH.Ho(this.CL,3,this.LocationId);AH.Acm(this.CL,4,this.DateOfBirth);AH.Bpe(this.
CL,7,this.Gender);AH.Bpa(this.CL,6,this.BirthType);AH.Bo_(this.CL,14,this.AnimalType
);AH.UA(this.CL,22,this.TransponderId);AH.UA(this.CL,26,this.NaisId);AH.AkT(this.
CL,13,this.WorstAssessment);AH.N7(this.CL,8,this.IsAlarm);AH.Acm(this.CL,15,this.
TimestampAlarm);AH.N7(this.CL,11,this.IsFever);AH.Acm(this.CL,16,this.TimestampExpirationFeverAlarm
);AH.N7(this.CL,9,this.IsControl);AH.N7(this.CL,12,this.IsWatch);AH.Acm(this.CL,
20,this.TimestampLastControl);AH.Acm(this.CL,21,this.TimestampLastWatch);AH.N7(this.
CL,10,this.IsRegistered);AH.N7(this.CL,27,this.IsPerished);AH.Acm(this.CL,28,this.
DateOfLastCalving);AH.Ho(this.CL,29,this.LactationNumber);AH.N7(this.CL,38,this.
IsDry);AH.Bpc(this.CL,32,this.Breed);AH.Bpd(this.CL,33,this.EaseOfDelivery);AH.UA(
this.CL,35,this.NaisIdMother);AH.Bpk(this.CL,34,this.WhereAbouts);AH.N7(this.CL,
37,this.IsRegistrationNoticePending);AH.Bpi(this.CL,36,this.ReasonOfLeaving);HF=
AH.OB(Jo);if(Az7)this.OnSetId(AH.Abq());}}return HF;},Gr:function(){C.Row.Gr.call(
this);this.OnSetId(-1);this.Ae5(true);},E5:function(){C.Row.E5.call(this);this.OnSetId(
0);this.SJ(0);this.Ab3(0);this.AnD(0);this.Q6(0);this.JU(A._GetAutoObject(C.Device
).Gender);this.Akw(0);this.EC(A._GetAutoObject(C.Device).AnimalType);this.PW(0);
this.Nj(0);this.Axi(0);this.Ae3(false);this.Axa(0);this.ATQ(0);this.Ae9(0);this.
ATo(0);this.Uq(false);this.ATS(0);this.ATP(0);this.AkC(false);this.Ae7(false);this.
ATR(0);this.Axc(0);this.Ae5(false);this.AwQ(false);this.AFp(0);this.AFT(0);this.
AwL(0);this.Axb(0);this.ATg(-1);this.AwC(0);this.AwR(0);this.ArV(false);this.N1(
0);this.Aky(0);this.AnF(0);this.Nl(0);this.Ae6(false);this.AFI(0);},OnSetId:function(
E){if(this.Id===E)return;this.Id=E;A.abo([this,this.Q4,this.OnSetId],0);},SJ:function(
E){if(this.VisualId===E)return;this.VisualId=E;A.abo([this,this.ArB,this.SJ],0);
},Ab3:function(E){if(this.GroupId===E)return;this.GroupId=E;A.abo([this,this.Blg
,this.Ab3],0);},Q6:function(E){if(this.DateOfBirth===E)return;this.DateOfBirth=E;
A.abo([this,this.Awe,this.Q6],0);},JU:function(E){if(this.Gender===E)return;this.
Gender=E;A.abo([this,this.Wy,this.JU],0);},Akw:function(E){if(this.BirthType===E
)return;this.BirthType=E;A.abo([this,this.ASB,this.Akw],0);},AnD:function(E){if(
this.LocationId===E)return;this.LocationId=E;A.abo([this,this.A8Z,this.AnD],0);}
,Ae9:function(E){if(this.LastTemperature===E)return;this.LastTemperature=E;A.abo([
this,this.A8Y,this.Ae9],0);},Ae3:function(E){if(this.IsAlarm===E)return;this.IsAlarm=
E;A.abo([this,this.A8Q,this.Ae3],0);},AkC:function(E){if(this.IsControl===E)return;
this.IsControl=E;A.abo([this,this.Blj,this.AkC],0);},Ae5:function(E){if(this.IsRegistered===
E)return;this.IsRegistered=E;A.abo([this,this.Blm,this.Ae5],0);},Ae7:function(E){
if(this.IsWatch===E)return;this.IsWatch=E;A.abo([this,this.A8U,this.Ae7],0);},Axi:
function(E){if(this.WorstAssessment===E)return;this.WorstAssessment=E;A.abo([this
,this.A9B,this.Axi],0);},Uq:function(E){if(this.IsFever===E)return;this.IsFever=
E;A.abo([this,this.A8R,this.Uq],0);},ATR:function(E){if(this.TimestampLastControl===
E)return;this.TimestampLastControl=E;A.abo([this,this.BlN,this.ATR],0);},Axc:function(
E){if(this.TimestampLastWatch===E)return;this.TimestampLastWatch=E;A.abo([this,this.
BlP,this.Axc],0);},ATo:function(E){if(this.LastRatingTemperature===E)return;this.
LastRatingTemperature=E;A.abo([this,this.Blp,this.ATo],0);},ATP:function(E){if(this.
TimestampExpirationFeverAlarm===E)return;this.TimestampExpirationFeverAlarm=E;A.
abo([this,this.BlL,this.ATP],0);},Axa:function(E){if(this.TimestampAlarm===E)return;
this.TimestampAlarm=E;A.abo([this,this.BlK,this.Axa],0);},EC:function(E){if(this.
AnimalType===E)return;this.AnimalType=E;A.abo([this,this.PT,this.EC],0);},AFp:function(
E){if(this.LastBodyWeight===E)return;this.LastBodyWeight=E;A.abo([this,this.A8X,
this.AFp],0);},AFT:function(E){if(this.TimestampLastWeighing===E)return;this.TimestampLastWeighing=
E;A.abo([this,this.A9n,this.AFT],0);},PW:function(E){if(this.TransponderId===E)return;
this.TransponderId=E;A.abo([this,this.ArA,this.PW],0);},RP:function(){return A._GetAutoObject(
C.Helper).L$(this.DateOfBirth,A._GetAutoObject(C.Helper).Dv());},AwL:function(E){
if(this.FirstBodyWeight===E)return;this.FirstBodyWeight=E;A.abo([this,this.ASG,this.
AwL],0);},Axb:function(E){if(this.TimestampFirstWeighing===E)return;this.TimestampFirstWeighing=
E;A.abo([this,this.ASX,this.Axb],0);},Arf:function(){var Pb=A._NewObject(A.Core.
Bs,0);Pb.Initialize(this.DateOfBirth);var A2h=A._NewObject(A.Core.Bs,0);A2h.Initialize(
this.TimestampFirstWeighing);if(((Pb.Year===A2h.Year)&&(Pb.AbY()===A2h.AbY()))&&(
this.FirstBodyWeight>0))return true;else return false;},AhW:function(AJa){var Aaz;
var Auy;if(this.TimestampLastWeighing>0){Auy=this.TimestampLastWeighing;Aaz=this.
LastBodyWeight;}else{Auy=this.DateOfBirth;Aaz=A._GetAutoObject(C.Helper).Abp(this.
AnimalType);}return A._GetAutoObject(C.Helper).AhW(Aaz,Auy,AJa,this.AnimalType);
},ATg:function(E){if(this.FirstBodyWeightId===E)return;this.FirstBodyWeightId=E;
A.abo([this,this.Blf,this.ATg],0);},AnV:function(BcC){this.Ae3(BcC);if(BcC){if(!
this.TimestampAlarm)this.Axa(A._GetAutoObject(C.Helper).Dv());}else this.Axa(0);
},Nj:function(E){if(this.NaisId===E)return;this.NaisId=E;A.abo([this,this.Anu,this.
Nj],0);},AGI:function(Bcy){this.Ae7(Bcy);if(Bcy){if(!this.TimestampLastWatch)this.
Axc(A._GetAutoObject(C.Helper).Dv());}else this.Axc(0);},AwC:function(E){if(this.
DateOfLastCalving===E)return;this.DateOfLastCalving=E;A.abo([this,this.Bk7,this.
AwC],0);},AwR:function(E){if(this.LactationNumber===E)return;this.LactationNumber=
E;A.abo([this,this.Blo,this.AwR],0);},AwQ:function(E){if(this.IsPerished===E)return;
this.IsPerished=E;A.abo([this,this.Bll,this.AwQ],0);},ATS:function(E){if(this.TimestampLastTemperature===
E)return;this.TimestampLastTemperature=E;A.abo([this,this.BlO,this.ATS],0);},ATQ:
function(E){if(this.TimestampLastAssessment===E)return;this.TimestampLastAssessment=
E;A.abo([this,this.BlM,this.ATQ],0);},N1:function(E){if(this.Breed===E)return;this.
Breed=E;A.abo([this,this.Awc,this.N1],0);},Aky:function(E){if(this.EaseOfDelivery===
E)return;this.EaseOfDelivery=E;A.abo([this,this.ASF,this.Aky],0);},Nl:function(E
){if(this.WhereAbouts===E)return;this.WhereAbouts=E;A.abo([this,this.Awq,this.Nl
],0);},AnF:function(E){if(this.NaisIdMother===E)return;this.NaisIdMother=E;A.abo([
this,this.ASN,this.AnF],0);},AFI:function(E){if(this.ReasonOfLeaving===E)return;
this.ReasonOfLeaving=E;A.abo([this,this.BlA,this.AFI],0);},Ae6:function(E){if(this.
IsRegistrationNoticePending===E)return;this.IsRegistrationNoticePending=E;A.abo([
this,this.Bln,this.Ae6],0);},ArV:function(E){if(this.IsDry===E)return;this.IsDry=
E;A.abo([this,this.Blk,this.ArV],0);},Q4:function(){return this.Id;},ArB:function(
){return this.VisualId;},Blg:function(){return this.GroupId;},Awe:function(){return this.
DateOfBirth;},Wy:function(){return this.Gender;},ASB:function(){return this.BirthType;
},A8Z:function(){return this.LocationId;},A8Y:function(){return this.LastTemperature;
},A8Q:function(){return this.IsAlarm;},Blj:function(){return this.IsControl;},Blm:
function(){return this.IsRegistered;},A8U:function(){return this.IsWatch;},A9B:function(
){return this.WorstAssessment;},A8R:function(){return this.IsFever;},BlN:function(
){return this.TimestampLastControl;},BlP:function(){return this.TimestampLastWatch;
},Blp:function(){return this.LastRatingTemperature;},BlL:function(){return this.
TimestampExpirationFeverAlarm;},BlK:function(){return this.TimestampAlarm;},PT:function(
){return this.AnimalType;},A8X:function(){return this.LastBodyWeight;},A9n:function(
){return this.TimestampLastWeighing;},ArA:function(){return this.TransponderId;}
,ASG:function(){return this.FirstBodyWeight;},ASX:function(){return this.TimestampFirstWeighing;
},Blf:function(){return this.FirstBodyWeightId;},Anu:function(){return this.NaisId;
},Bk7:function(){return this.DateOfLastCalving;},Blo:function(){return this.LactationNumber;
},Bll:function(){return this.IsPerished;},BlO:function(){return this.TimestampLastTemperature;
},BlM:function(){return this.TimestampLastAssessment;},Awc:function(){return this.
Breed;},ASF:function(){return this.EaseOfDelivery;},Awq:function(){return this.WhereAbouts;
},ASN:function(){return this.NaisIdMother;},BlA:function(){return this.ReasonOfLeaving;
},Bln:function(){return this.IsRegistrationNoticePending;},Blk:function(){return this.
IsDry;},_Init:function(aArg){C.Row._Init.call(this,aArg);this.__proto__=C.Animal;
this.TableId=0;},_className:"Device::Animal"};C.Row={CL:-1,TableId:2,E3:function(
Ad,AH){if(!AH){A.ab5("%s",(As0+this.CL.toFixed())+As1);return false;}else if(AH.
Id!==this.TableId)throw new Error(As2);else if((Ad<0)||(Ad>=AH.B9())){A.ab5("%s"
,(((Aom+this.CL.toFixed())+As3)+AH.B9().toFixed())+Ald);return false;}this.CL=Ad;
return true;},Ci:function(AH){if(!AH){A.ab5("%s",(As0+this.CL.toFixed())+As1);return false;
}else if(AH.Id!==this.TableId)throw new Error(As2);else if(this.Am7()&&AH.Lh()){
A.ab5("%s",Ayb+AH.HJ().toFixed());return false;}else if(!this.Am7()&&((this.CL<0
)||(this.CL>=AH.B9()))){A.ab5("%s",(((Aom+this.CL.toFixed())+As3)+AH.B9().toFixed(
))+Ald);return false;}return true;},Gr:function(){this.E5();this.CL=-1;},Am7:function(
){return this.CL===-1;},E5:function(){this.CL=-2;},AqY:function(){return this.CL
!==-2;},A9b:function(){return this.CL;},A_A:function(E){this.CL=E;},_Init:function(
aArg){this.__proto__=C.Row;A.h7++;},_Done:function(){this.__proto__=null;A.h7--;
},_ReInit:function(){},_Mark:function(D){var B;if((B=this.I)&&(B._cycle!=D))B._Mark(
B._cycle=D);},I:null,_cycle:0,_observers:null,_className:"Device::Row"};C.Rating={
Temperature:0,Id:0,AnimalId:0,Timestamp:0,BodyWeight:0,RatingTemperature:0,Faeces:
0,Respiratory:0,Appearance:0,Feed:0,E3:function(Ad,AH){var HF=C.Row.E3.call(this
,Ad,AH);if(HF&&!!AH){this.OnSetId(AH.CF(Ad,0));this.OnSetAnimalId(AH.CF(Ad,1));this.
OnSetTimestamp(AH.Hv(Ad,6));this.OnSetFeed(AH.I6(Ad,2));this.OnSetAppearance(AH.
I6(Ad,3));this.OnSetRespiratory(AH.I6(Ad,4));this.OnSetFaeces(AH.I6(Ad,5));this.
OnSetTemperature(AH.A63(Ad,7));this.OnSetBodyWeight(AH.AC7(Ad,8));this.OnSetRatingTemperature(
AH.I6(Ad,9));}return HF;},Ci:function(AH){if(this.K&&this.K.Ci)return this.K.Ci.
apply(this,arguments);else return C.Rating.Ba0.apply(this,arguments);},Ba0:function(
AH){var HF=C.Row.Ci.call(this,AH);if((HF&&!!AH)&&(AH.Id===1)){var Jo=AH.Oz();if(
Jo<=0)A.ab5("%s",Xe);else{var Az7=this.Am7();if(Az7)this.CL=AH.YF();else AH.Ho(this.
CL,0,this.Id);AH.Ho(this.CL,1,this.AnimalId);AH.Acm(this.CL,6,this.Timestamp);AH.
AkT(this.CL,2,this.Feed);AH.AkT(this.CL,3,this.Appearance);AH.AkT(this.CL,4,this.
Respiratory);AH.AkT(this.CL,5,this.Faeces);AH.A$y(this.CL,7,this.Temperature);AH.
AUM(this.CL,8,this.BodyWeight);AH.AkT(this.CL,9,this.RatingTemperature);AH.OB(Jo
);if(Az7)this.OnSetId(AH.Abq());var Ry=A._GetAutoObject(C.Device).An;var Ad=A._GetAutoObject(
C.Device).An.LT(0,this.AnimalId);if(Ad>=0){var Cz=A._NewObject(C.Animal,0);Cz.E3(
Ad,Ry);if(this.Temperature>0)Cz.Uq(A._GetAutoObject(C.Helper).A7s(this));if((this.
Temperature>0)&&A._GetAutoObject(C.Helper).AGn(this)){var Ol=A._GetAutoObject(C.
Helper).ARi(this);Cz.AkC(Ol);Cz.AnV(Ol);}else if(this.Temperature>0){var Ol=(A._GetAutoObject(
C.Helper).ARi(this)||(Cz.WorstAssessment===2))||(Cz.WorstAssessment===1);Cz.AkC(
Ol);Cz.AnV(Ol);}else{var Ol=A._GetAutoObject(C.Helper).ARi(this)||Cz.IsFever;Cz.
AkC(Ol);Cz.AnV(Ol);}Cz.Ci(Ry);}}}return HF;},Gr:function(){C.Row.Gr.call(this);this.
OnSetTimestamp(A._GetAutoObject(C.Helper).Dv());this.OnSetId(-1);},E5:function(){
C.Row.E5.call(this);this.OnSetTimestamp(0);this.OnSetId(0);this.OnSetAnimalId(0);
this.OnSetFeed(0);this.OnSetAppearance(0);this.OnSetRespiratory(0);this.OnSetFaeces(
0);this.OnSetTemperature(0);this.OnSetBodyWeight(0);this.OnSetRatingTemperature(
0);},OnSetTemperature:function(E){if(this.Temperature===E)return;this.Temperature=
E;A.abo([this,this.BlJ,this.OnSetTemperature],0);},OnSetId:function(E){if(this.Id===
E)return;this.Id=E;A.abo([this,this.Q4,this.OnSetId],0);},OnSetAnimalId:function(
E){if(this.AnimalId===E)return;this.AnimalId=E;A.abo([this,this.BkU,this.OnSetAnimalId
],0);},OnSetFeed:function(E){if(this.Feed===E)return;this.Feed=E;A.abo([this,this.
Blc,this.OnSetFeed],0);},OnSetAppearance:function(E){if(this.Appearance===E)return;
this.Appearance=E;A.abo([this,this.BkV,this.OnSetAppearance],0);},OnSetRespiratory:
function(E){if(this.Respiratory===E)return;this.Respiratory=E;A.abo([this,this.BlB
,this.OnSetRespiratory],0);},OnSetFaeces:function(E){if(this.Faeces===E)return;this.
Faeces=E;A.abo([this,this.Bla,this.OnSetFaeces],0);},OnSetTimestamp:function(E){
if(this.Timestamp===E)return;this.Timestamp=E;A.abo([this,this.A9m,this.OnSetTimestamp
],0);},Bo$:function(Nu,A7){switch(Nu){case 2:this.OnSetAppearance(A7);break;case
1:this.OnSetFeed(A7);break;case 4:this.OnSetFaeces(A7);break;case 3:this.OnSetRespiratory(
A7);break;default:;}},Bjc:function(Nu){switch(Nu){case 2:return this.Appearance;
case 1:return this.Feed;case 4:return this.Faeces;case 3:return this.Respiratory;
default:return 0;}},OnSetRatingTemperature:function(E){if(this.RatingTemperature===
E)return;this.RatingTemperature=E;A.abo([this,this.Blz,this.OnSetRatingTemperature
],0);},OnSetBodyWeight:function(E){if(this.BodyWeight===E)return;this.BodyWeight=
E;A.abo([this,this.BkZ,this.OnSetBodyWeight],0);},BlJ:function(){return this.Temperature;
},Q4:function(){return this.Id;},BkU:function(){return this.AnimalId;},Blc:function(
){return this.Feed;},BkV:function(){return this.Appearance;},BlB:function(){return this.
Respiratory;},Bla:function(){return this.Faeces;},A9m:function(){return this.Timestamp;
},Blz:function(){return this.RatingTemperature;},BkZ:function(){return this.BodyWeight;
},_Init:function(aArg){C.Row._Init.call(this,aArg);this.__proto__=C.Rating;this.
TableId=1;var J4=this._variants();if(J4){this.K={};J4._Init.call(this,aArg);}},_Done:
function(){if(this.K)this.K._Done.call(this);this.__proto__=C.Row;C.Row._Done.call(
this);},_ReInit:function(){C.Row._ReInit.call(this);if(this.K)this.K._ReInit.call(
this);},_Mark:function(D){C.Row._Mark.call(this,D);if(this.K)this.K._Mark(D);},_variants:
function(){return A.acs.Rating._variants();},K:null,_className:"Device::Rating"};
C.HelperClass={Uz:null,AhI:null,AUF:null,AUG:null,W:null,Av:null,KH:null,ST:null
,Ad1:null,UG:null,UF:null,Aeo:null,Afy:null,Afx:null,Afw:null,Afz:null,AgG:null,
AGX:0,Init:function(aArg){A.pe([this,this.AT_],this);},AkF:function(E){this.Uz=E;
A.abo([this,this.Ary,this.AkF],0);},AFL:function(E){this.AhI=E;A.abo([this,this.
A9c,this.AFL],0);},BBq:function(G){switch(A._GetAutoObject(C.Device).ScanState){
case 2:{var AuA=A._GetAutoObject(C.Device).OT;if(!AuA)throw new Error(Ayc);switch(
AuA.TransponderType){case 1:this.AkF(AuA);break;case 2:this.ATG(AuA);break;case 3:
this.AFL(AuA);break;case 4:this.ATH(AuA);break;case 0:break;default:throw new Error(
Ayd);}}break;case 4:A._GetAutoObject(C.Device).A3(11,true,A.jV,2000,null);break;
case 3:A._GetAutoObject(C.Device).A3(12,true,A.jV,2000,null);break;case 0:case 1:
break;default:throw new Error(As4);}},AkQ:function(){this.AkF(null);this.ATG(null
);this.AFL(null);this.ATH(null);},AFQ:function(E){if(this.K&&this.K.AFQ)return this.
K.AFQ.apply(this,arguments);else return C.HelperClass.BaY.apply(this,arguments);
},BaY:function(E){A.abo([this,this.U2,this.U5],0);A._GetAutoObject(C.Device).SetSystemTime(
E);},U5:function(Aq){this.AFQ(Aq);},Dv:function(){if(this.K&&this.K.Dv)return this.
K.Dv.apply(this,arguments);else return C.HelperClass.BaU.apply(this,arguments);}
,BaU:function(){var B;return((B=(this.Av.Bdz()|0))<0)?B+0x100000000:B;},U2:function(
){return this.Dv();},Asr:function(){A._GetAutoObject(C.Device).SQ(-1);this.W.E5(
);A.we(this.W,0);},A7I:function(Jj){if(!Jj){A.ab5("%s%U",Aye,Jj);return false;}var
Bf=A._GetAutoObject(C.Device).An.AgZ(22,Jj);return this.G8(Bf);},AmX:function(AoN
,AI$){switch(AoN){case 0:{var Ape=AI$;switch(Ape){case 14:return A.aaR(A.acf.Aft
);case 6:return O8;case 4:return A.aaR(A.acf.Aeg);case 28:return Ayf;case 7:return A.
aaR(A.acf.Afo);case 2:return A.aaR(A.acf.P);case 0:return A.aaR(A.acf.GN);case 37:
return AV9;case 8:return A.aaR(A.acf.Alarm);case 9:return A.aaR(A.acf.ACk);case 38:
return A.aaR(A.acf.AN3);case 11:return A.aaR(A.acf.Fever);case 27:return AV_;case
10:return A.aaR(A.acf.BoL);case 12:return A.aaR(A.acf.Asd);case 29:return A.aaR(
A.acf.ARB);case 18:return A.aaR(A.acf.Weighing);case 17:return AV$;case 5:return A.
aaR(A.acf.Temperature);case 3:return AWa;case 26:return A.aaR(A.acf.Uh);case 35:
return A.aaR(A.acf.Uh)+AHq;case 36:return AHr;case 15:return AfE;case 24:return Aon;
case 20:return AWb;case 30:return AHs;case 21:return Ale;case 19:return AHt;case
22:return A.aaR(A.acf.Transponder);case 1:return A.aaR(A.acf.GI);case 34:return A.
aaR(A.acf.Jh);case 13:return AHu;case 31:return AWc;default:{A.ab5("%s",AWd+Ape.
toFixed());return AHv+Ape.toFixed();}}}case 1:{var Ape=AI$;switch(Ape){case 1:return A.
aaR(A.acf.Animal);case 3:return A.aaR(A.acf.AGm);case 8:return A.aaR(A.acf.Afv);
case 5:return A.aaR(A.acf.AGo);case 2:return A.aaR(A.acf.Feed);case 4:return A.aaR(
A.acf.AGp);case 7:return A.aaR(A.acf.Temperature);case 6:return A.aaR(A.acf.Bs);
default:{A.ab5("%s",AWe+Ape.toFixed());return AHv+Ape.toFixed();}}}default:A.ab5(
"%s",(AcP+AoN.toFixed())+AWf);}return A.jV;},A6T:function(AoN,AI){var result=A.jV;
if(!!AI){result=this.AmX(AoN,AI.EJ);result=((result+Oc)+A._GetAutoObject(C.Converter
).A6C(AI.Operator))+Oc;if(!!(C.Int32FilterCriterion.isPrototypeOf(AI)?AI:null))result=
result+(C.Int32FilterCriterion.isPrototypeOf(AI)?AI:null).A5.toFixed();else if(!
!(C.UInt32FilterCriterion.isPrototypeOf(AI)?AI:null))result=result+(C.UInt32FilterCriterion.
isPrototypeOf(AI)?AI:null).A5.toFixed();else if(!!(C.StringFilterCriterion.isPrototypeOf(
AI)?AI:null))result=result+(C.StringFilterCriterion.isPrototypeOf(AI)?AI:null).A5;
else if(!!(C.BoolFilterCriterion.isPrototypeOf(AI)?AI:null)){if((C.BoolFilterCriterion.
isPrototypeOf(AI)?AI:null).A5)result=this.AmX(AoN,AI.EJ);else result=A.jV;}else if(
!!(C.GenderFilterCriterion.isPrototypeOf(AI)?AI:null)){var BzN=A._NewObject(C.GenderToString
,0);result=result+BzN.Lv((C.GenderFilterCriterion.isPrototypeOf(AI)?AI:null).A5);
}else if(!!(C.AnimalTypeFilterCriterion.isPrototypeOf(AI)?AI:null)){var ByI=A._NewObject(
C.AnimalTypeToString,0);result=result+ByI.Lv((C.AnimalTypeFilterCriterion.isPrototypeOf(
AI)?AI:null).A5);}else if(!!(C.AssessmentFilterCriterion.isPrototypeOf(AI)?AI:null
)){var ByL=A._NewObject(C.AssesmentToString,0);result=result+ByL.Lv((C.AssessmentFilterCriterion.
isPrototypeOf(AI)?AI:null).A5);}else if(!!(C.UInt64FilterCriterion.isPrototypeOf(
AI)?AI:null))result=result+(C.UInt64FilterCriterion.isPrototypeOf(AI)?AI:null).A5.
toFixed();else if(!!(C.UInt64PartialFilterCriterion.isPrototypeOf(AI)?AI:null)){
var Aw=(C.UInt64PartialFilterCriterion.isPrototypeOf(AI)?AI:null);result=(((((result+
Aw.A5)+AWg)+Aw.OD.toFixed())+O7)+Aw.Zk.toFixed())+Ald;}else if(!!(C.WhereAboutsFilterCriterion.
isPrototypeOf(AI)?AI:null)){var BDa=A._NewObject(C.WhereAboutsToString,0);result=
result+BDa.Lv((C.WhereAboutsFilterCriterion.isPrototypeOf(AI)?AI:null).A5);}else
A.ab5("%s",AWh);}return result;},MG:function(aString,Bck,BxY){var result=A.jV;var
Bf7=false;var index=0;var Bx0=Bck.length;while(!Bf7){var A31=aString.indexOf(Bck
,index);if(A31!==-1){result=(result+A.abW(aString,index,A31-index))+BxY;index=A31+
Bx0;}else{var Bcp=aString.length;if(index<Bcp)result=result+A.ab2(aString,Bcp-index
);Bf7=true;}}return result;},ATG:function(E){this.AUF=E;A.abo([this,this.BlD,this.
ATG],0);},ATH:function(E){this.AUG=E;A.abo([this,this.BlE,this.ATH],0);},BdZ:function(
){return((A._GetAutoObject(C.Device).ScanState===2)&&!!A._GetAutoObject(C.Device
).OT)&&(A._GetAutoObject(C.Device).OT.TransponderType===1);},Aga:function(G){if(
!this.W.Am7()&&!!this.W.Id)this.Bkg(this.W.Id);},ACZ:function(Eo){return A._GetAutoObject(
C.Helper).UG.Get(Eo);},A6O:function(Eo){return A._GetAutoObject(C.Helper).UF.Get(
Eo);},A6Z:function(){var O=0;var min=32767;while(O<A._GetAutoObject(C.Helper).UG.
MF){if(A._GetAutoObject(C.Helper).UG.Get(O)<min)min=A._GetAutoObject(C.Helper).UG.
Get(O);O=O+1;}return min;},AT_:function(G){A.zV([this,this.Aga],A._GetAutoObject(
C.Device).An,0);},ARi:function(D3){if(!D3)return false;var BjS=(((this.Az3(D3.Faeces
)||this.Az3(D3.Feed))||this.Az3(D3.Appearance))||this.Az3(D3.Respiratory))||this.
Az3(D3.RatingTemperature);return BjS||this.A7s(D3);},Az3:function(Bb0){return(Bb0===
2)||(Bb0===1);},A7s:function(D3){return!!D3&&(D3.Temperature>A._GetAutoObject(C.
Helper).ACZ(A._GetAutoObject(C.Helper).W.AnimalType));},G8:function(L9){var A2T=
false;if(L9>=0){if(L9!==this.W.CL)A._GetAutoObject(C.Device).SQ(L9);A2T=this.W.E3(
L9,A._GetAutoObject(C.Device).An);if(A2T)A.we(this.W,0);}else{A._GetAutoObject(C.
Device).SQ(-1);this.W.E5();A.we(this.W,0);}return A2T;},AhR:function(Ah8){var B;
return(((B=(this.Av.Bdz()|0))<0)?B+0x100000000:B)-this.AmJ(Ah8);},AsG:function(){
var B;A.pe([B=this.KH,B.AnZ],this);},BCB:function(G){A._GetAutoObject(C.Device).
A3(16,false,AHw,0,null);A._GetAutoObject(C.Device).A3(5,true,A.jV,0,null);},Boe:
function(G){var As=(C.PopupContext.isPrototypeOf(G)?G:null);if(!!As&&(As.PopupState===
5))this.AsG();},Bn0:function(E){if(this.AGX===E)return;this.AGX=E;A._GetAutoObject(
C.Device).A3(16,true,this.AGX.toFixed(),0,[this,this.Boe]);},L$:function(Bxy,Byc
){var D8;var BgD=A._NewObject(A.Core.An5,0);var GG=A._NewObject(A.Core.Bs,0);var
K7=A._NewObject(A.Core.Bs,0);GG.Initialize(Bxy);K7.Initialize(Byc);D8=K7.Bii(GG);
BgD.Initialize2(0,D8.ADy,D8.AEk,D8.AGB);if(GG.J(BgD).GL===GG.GL)return D8.Km;else
return D8.Km+1;},BCD:function(G){A._GetAutoObject(C.Device).UpdateMeasureState(3
);},AK9:function(G){var Bhs=A._GetAutoObject(C.Helper).ACZ(A._GetAutoObject(C.Helper
).W.AnimalType);var Bhp=A._GetAutoObject(C.Helper).A6O(A._GetAutoObject(C.Helper
).W.AnimalType);var Agr=A.abz(Bhs-100,Bhp+100);this.Bdd(Agr);},AmJ:function(Ah8){
return Ah8*86400;},Ak7:function(J6){var B;if(!!J6&&(J6<(((B=Math.trunc(Math.pow(
10,A._GetAutoObject(C.Device).AF)))<0)?B+0x10000000000000000:B)))return-1;return A.
_GetAutoObject(C.Helper).Sj(J6,A._GetAutoObject(C.Device).AF&0xFF,A._GetAutoObject(
C.Device).A1&0xFF)|0;},AGn:function(D3){if(!D3)return false;return((!!D3.Faeces||
!!D3.Feed)||!!D3.Appearance)||!!D3.Respiratory;},AhW:function(A06,Bcr,AJa,Eo){var
B;var ApS;if((A06<650000)&&(Bcr<this.Dv())){var BcP=this.AgG.Avv(Eo);var BcO=0;if(
BcP>=0)BcO=this.Afw.Get(BcP);ApS=A06+(this.L$(Bcr,this.Dv())*BcO);if(AJa>0){var A11=
this.ApR(AJa);ApS=(Math.trunc(((((B=ApS)<0)?B+0x10000000000000000:B)+Math.trunc(
A11/2))/A11)*A11)|0;}if(ApS>650000)ApS=650000;}else ApS=A06;return ApS;},ADb:function(
D3){var Aqd=A._GetAutoObject(C.Converter).Ad2(D3.Faeces);if(Aqd<A._GetAutoObject(
C.Converter).Ad2(D3.Feed))Aqd=A._GetAutoObject(C.Converter).Ad2(D3.Feed);if(Aqd<
A._GetAutoObject(C.Converter).Ad2(D3.Appearance))Aqd=A._GetAutoObject(C.Converter
).Ad2(D3.Appearance);if(Aqd<A._GetAutoObject(C.Converter).Ad2(D3.Respiratory))Aqd=
A._GetAutoObject(C.Converter).Ad2(D3.Respiratory);return A._GetAutoObject(C.Converter
).A$Y(Aqd);},Axx:function(D3,Nt){if(!!D3){D3.OnSetFaeces(Nt);D3.OnSetFeed(Nt);D3.
OnSetAppearance(Nt);D3.OnSetRespiratory(Nt);}},Bja:function(AH,AJg,Ac8,Xo,AfJ){if(
!AH)throw new Error(As5);var Be=A._NewObject(C.Filter,0);var ApF=AH.Filter;var Of=
A._NewObject(C.Int32FilterCriterion,0);Of.Operator=0;Of.EJ=1;Of.A5=Ac8;Be.CW(Of);
if(Xo>0){var Os=A._NewObject(C.UInt32FilterCriterion,0);Os.Operator=2;Os.EJ=6;Os.
A5=Xo;Be.CW(Os);}if(AfJ>0){var Oj=A._NewObject(C.UInt32FilterCriterion,0);Oj.Operator=
3;Oj.EJ=6;Oj.A5=AfJ;Be.CW(Oj);}AH.Bk(Be);var L_=A._NewObject(C.Int32ArrayWrapper
,0);L_.Zy(6);var O;for(O=0;O<L_.MF;O=O+1)L_.Set(O,0);var U$;for(O=0;O<AH.B9();O=
O+1){U$=AH.I6(O,AJg);L_.Set(U$,L_.Get(U$)+1);}AH.Bk(ApF);return L_;},ZP:function(
Ah8){var B;var GG=A._NewObject(A.Core.Bs,0);var BgC=A._NewObject(A.Core.An5,0);GG.
Initialize(A._GetAutoObject(C.Converter).AhT());BgC.Initialize2(Ah8,0,0,0);GG=GG.
BpC(BgC);return((B=(GG.JS()|0))<0)?B+0x100000000:B;},A6P:function(AH,Ac8,AfJ,Xo){
if(!AH)throw new Error(As5);var Be=A._NewObject(C.Filter,0);var ApF=AH.Filter;var
Of=A._NewObject(C.Int32FilterCriterion,0);Of.Operator=0;Of.EJ=1;Of.A5=Ac8;Be.CW(
Of);if(Xo>0){var Os=A._NewObject(C.UInt32FilterCriterion,0);Os.Operator=2;Os.EJ=
6;Os.A5=Xo;Be.CW(Os);}if(AfJ>0){var Oj=A._NewObject(C.UInt32FilterCriterion,0);Oj.
Operator=3;Oj.EJ=6;Oj.A5=AfJ;Be.CW(Oj);}AH.Bk(Be);var L_=A._NewObject(C.Int32ArrayWrapper
,0);L_.Zy(6);var O;for(O=0;O<L_.MF;O=O+1)L_.Set(O,0);var Ao5=A._NewObject(C.Rating
,0);var A1T;for(O=0;O<AH.B9();O=O+1){Ao5.E3(O,AH);if(A._GetAutoObject(C.Helper).
AGn(Ao5)){A1T=A._GetAutoObject(C.Helper).ADb(Ao5);L_.Set(A1T,L_.Get(A1T)+1);}}AH.
Bk(ApF);return L_;},A2q:function(AH,Ac8,Bzh){if(!AH)throw new Error(As5);var Be=
A._NewObject(C.Filter,0);var ApF=AH.Filter;var Of=A._NewObject(C.Int32FilterCriterion
,0);Of.Operator=0;Of.EJ=1;Of.A5=Ac8;Be.CW(Of);var Xo=A._GetAutoObject(C.Converter
).AhT()+A._GetAutoObject(C.Helper).AmJ(Bzh);var AfJ=Xo+A._GetAutoObject(C.Helper
).AmJ(1);var Os=A._NewObject(C.UInt32FilterCriterion,0);Os.Operator=2;Os.EJ=6;Os.
A5=Xo;Be.CW(Os);var Oj=A._NewObject(C.UInt32FilterCriterion,0);Oj.Operator=3;Oj.
EJ=6;Oj.A5=AfJ;Be.CW(Oj);AH.Bk(Be);var Ao5=A._NewObject(C.Rating,0);var U$;var LQ=
0;var O;for(O=0;O<AH.B9();O=O+1){Ao5.E3(O,AH);if(A._GetAutoObject(C.Helper).AGn(
Ao5)){U$=A._GetAutoObject(C.Helper).ADb(Ao5);if(A._GetAutoObject(C.Converter).Ad2(
U$)>A._GetAutoObject(C.Converter).Ad2(LQ))LQ=U$;}}AH.Bk(ApF);return LQ;},Am6:function(
){if((A._GetAutoObject(C.Device).WeightRecordingScope===2)||(A._GetAutoObject(C.
Device).WeightRecordingScope===1))return true;else return false;},A7v:function(){
if((A._GetAutoObject(C.Device).WeightRecordingScope===2)||!A._GetAutoObject(C.Device
).WeightRecordingScope)return true;else return false;},Bjb:function(AH,AJg,Ac8,Xo
,AfJ){if(!AH)throw new Error(As5);var Be=A._NewObject(C.Filter,0);var ApF=AH.Filter;
var Of=A._NewObject(C.Int32FilterCriterion,0);Of.Operator=0;Of.EJ=1;Of.A5=Ac8;Be.
CW(Of);if(Xo>0){var Os=A._NewObject(C.UInt32FilterCriterion,0);Os.Operator=2;Os.
EJ=6;Os.A5=Xo;Be.CW(Os);}if(AfJ>0){var Oj=A._NewObject(C.UInt32FilterCriterion,0
);Oj.Operator=3;Oj.EJ=6;Oj.A5=AfJ;Be.CW(Oj);}AH.Bk(Be);var L_=A._NewObject(C.Int32ArrayWrapper
,0);L_.Zy(6);var O;for(O=0;O<L_.MF;O=O+1)L_.Set(O,0);if(AH.B9()>0){var U$=AH.I6(
0,AJg);var ApX=AH.Hv(O,6);var Ac=A._NewObject(A.Core.Bs,0);Ac.Initialize(ApX);var
Aqc=U$;var AJ$=A._NewObject(A.Core.Bs,0);AJ$.Initialize(Ac.JS());for(O=1;O<AH.B9(
);O=O+1){U$=AH.I6(O,AJg);ApX=AH.Hv(O,6);Ac.Initialize(ApX);if((Ac.AbY()!==AJ$.AbY(
))||(Ac.Year!==AJ$.Year)){L_.Set(Aqc,L_.Get(Aqc)+1);AJ$.Initialize(Ac.JS());Aqc=
U$;}else if(!!U$&&(U$<Aqc))Aqc=U$;}L_.Set(Aqc,L_.Get(Aqc)+1);}AH.Bk(ApF);return L_;
},Aqp:function(L5){var B;var GG=A._NewObject(A.Core.Bs,0);GG.Initialize(L5);GG.AnB(
0);GG.AnE(0);GG.AnH(0);return((B=(GG.JS()|0))<0)?B+0x100000000:B;},AOe:function(
L5){var B;L5=L5+86400;var GG=A._NewObject(A.Core.Bs,0);GG.Initialize(L5);GG.AnB(
0);GG.AnE(0);GG.AnH(0);return((B=(GG.JS()|0))<0)?B+0x100000000:B;},Bjd:function(
BCz,Bzt,Amh,AlG){var Bc_=A._GetAutoObject(C.Helper).L$(BCz,Bzt);if(Bc_>0)return((
AlG-Amh)/Bc_)|0;return 0;},Bqd:function(Bxz,Byd){var GG=A._NewObject(A.Core.Bs,0
);var K7=A._NewObject(A.Core.Bs,0);GG.Initialize(Bxz);K7.Initialize(Byd);return(
GG.Year===K7.Year)&&(GG.AbY()===K7.AbY());},A6V:function(){var Be=A._GetAutoObject(
C.Helper).Mt();var Beb=A._NewObject(C.UInt32FilterCriterion,0);var Bym=A._GetAutoObject(
C.Helper).ZP(A._GetAutoObject(C.Device).AqR)-1;Beb.Initialize(28,2,Bym,true);Be.
CW(Beb);var U7=A._NewObject(C.AnimalTypeFilterCriterion,0);U7.Initialize(14,0,1,
true);Be.CW(U7);if(A._GetAutoObject(C.Device).AqS){var AAh=A._NewObject(C.UInt32FilterCriterion
,0);var A2N=A._GetAutoObject(C.Helper).Dv()-21600;AAh.Initialize(30,3,A2N,true);
Be.CW(AAh);}return Be;},BoS:function(){var Jo=A._GetAutoObject(C.Device).An.Oz();
if(Jo<=0)A.ab5("%s",Xe);else{A._GetAutoObject(C.Device).An.E5();A._GetAutoObject(
C.Device).An.OB(Jo);}Jo=A._GetAutoObject(C.Device).Agy.Oz();if(Jo<=0)A.ab5("%s",
Xe);else{A._GetAutoObject(C.Device).Agy.E5();A._GetAutoObject(C.Device).Agy.OB(Jo
);}Jo=A._GetAutoObject(C.Device).Bt.Oz();if(Jo<=0)A.ab5("%s",Xe);else{A._GetAutoObject(
C.Device).Bt.E5();A._GetAutoObject(C.Device).Bt.OB(Jo);}Jo=A._GetAutoObject(C.Device
).Pr.Oz();if(Jo<=0)A.ab5("%s",Xe);else{A._GetAutoObject(C.Device).Pr.E5();A._GetAutoObject(
C.Device).Pr.OB(Jo);}},Bkg:function(Ac8){var Bf=A._GetAutoObject(C.Device).An.LT(
0,Ac8);return this.G8(Bf);},ARp:function(Jj){var AiA=A._GetAutoObject(C.Device).
An.Aem(22,Jj);return AiA;},AC4:function(){var Be=A._GetAutoObject(C.Helper).Mt();
var Ajc=A._NewObject(C.UInt64FilterCriterion,0);Ajc.Initialize(22,0,0,true);Be.CW(
Ajc);return Be;},AON:function(AoY,Bzq,Qg){var Aal=-1;switch(AoY){case 2:Aal=30;break;
case 3:Aal=31;break;case 10:Aal=19;break;default:A.ab5("%s%e",UZ,AoY);}if(Aal<0)
return null;var Adk=A._NewObject(C.UInt32FilterCriterion,0);Adk.Initialize(Aal,3
,A._GetAutoObject(C.Helper).Dv()-Bzq,Qg);return Adk;},BoO:function(aFilter){var AI=
aFilter.DL(30,3);if(!!AI)aFilter.Np(AI);AI=aFilter.DL(31,3);if(!!AI)aFilter.Np(AI
);AI=aFilter.DL(19,3);if(!!AI)aFilter.Np(AI);},A1K:function(AfT,AyX,AH){if(AH.Lh(
))return 5;if(AfT.VisualId<=0)switch(AyX){case 0:if(!AfT.NaisId)return 1;break;case
1:if(!AfT.TransponderId)return 1;break;case 3:case 2:case 5:case 4:return 1;default:
throw new Error(AHx+AyX.toFixed());}if((!AfT.NaisId&&!AfT.TransponderId)&&A._GetAutoObject(
C.Device).An.AjL(1,AfT.VisualId))return 2;if(!!AfT.NaisId&&A._GetAutoObject(C.Helper
).ARn(AfT.NaisId))return 3;if(!!AfT.TransponderId&&A._GetAutoObject(C.Helper).ARp(
AfT.TransponderId))return 4;return 0;},Aqi:function(En){En.EC(A._GetAutoObject(C.
Device).AnimalType);En.N1(A._GetAutoObject(C.Device).Breed);En.Q6(A._GetAutoObject(
C.Helper).Dv()-A._GetAutoObject(C.Helper).AmJ(A._GetAutoObject(C.Device).AdT));En.
JU(A._GetAutoObject(C.Device).Gender);En.Nl(A._GetAutoObject(C.Device).WhereAbouts
);},AMo:function(Rr,En){var Gv=0;switch(Rr){case 0:Gv=A._GetAutoObject(C.Helper).
Ak7(En.NaisId);break;case 1:Gv=A._GetAutoObject(C.Helper).Ak7(En.TransponderId);
break;case 3:Gv=A._GetAutoObject(C.Device).Aq4;break;case 2:Gv=A._GetAutoObject(
C.Device).Aq5;break;case 4:case 5:Gv=A._GetAutoObject(C.Device).AjV;break;default:
throw new Error(AHy+Rr.toFixed());}return Gv;},A$5:function(Aln,L6,Bb5,Bxk,BxT){
var B;var Qt=null;var XA=null;switch(Aln){case 0:{Qt=[B=A._GetAutoObject(C.Device
),B.ASM,B.A0r];XA=[B=A._GetAutoObject(C.Device),B.Awn,B.AyR];}break;case 1:switch(
L6){case 1:{Qt=[B=A._GetAutoObject(C.Device),B.A83,B.Bbu];XA=[B=A._GetAutoObject(
C.Device),B.Awl,B.AyP];}break;case 0:{Qt=[B=A._GetAutoObject(C.Device),B.A84,B.Bbv
];XA=[B=A._GetAutoObject(C.Device),B.Awm,B.AyQ];}break;case 2:{Qt=[B=A._GetAutoObject(
C.Device),B.ASM,B.A0r];XA=[B=A._GetAutoObject(C.Device),B.Awn,B.AyR];}break;default:
throw new Error(Ayg+L6.toFixed());}break;default:throw new Error(AHz+Aln.toFixed(
));}if(!!Qt&&!!XA){Qt[2].call(Qt[0],Bb5);if(Bb5>0){if((XA[1].call(XA[0])>0)&&(Bxk<
BxT))Qt[2].call(Qt[0],Qt[1].call(Qt[0])+XA[1].call(XA[0]));else if(XA[1].call(XA[
0])<0)Qt[2].call(Qt[0],Qt[1].call(Qt[0])+XA[1].call(XA[0]));}return Qt[1].call(Qt[
0]);}return 0;},AVG:function(En,Aln,Bxs){if(!En||(Bxs===true))return;switch(Aln){
case 0:En.Nj(A._GetAutoObject(C.Device).Av7);break;case 1:switch(En.Gender){case
0:En.Nj(A._GetAutoObject(C.Device).AEn);break;case 1:En.Nj(A._GetAutoObject(C.Device
).AEm);break;case 2:En.Nj(A._GetAutoObject(C.Device).Av7);break;default:throw new
Error(Ayg+En.Gender.toFixed());}break;default:throw new Error(AHz+Aln.toFixed());
}},BjT:function(Rr,En){var result=false;switch(Rr){case 0:result=!!En.NaisId;break;
case 1:result=!!En.TransponderId;break;case 3:case 2:case 4:case 5:result=false;
break;default:throw new Error(AHy+Rr.toFixed());}return result;},AKm:function(En
,BbY,AyX,AtE,AfM){switch(BbY){case 2:if(AtE<=0)A._GetAutoObject(C.Device).A3(21,
true,En.VisualId.toFixed(),0,AfM);else A._GetAutoObject(C.Device).A3(48,true,(En.
VisualId.toFixed()+Ayh)+AtE.toFixed(),0,AfM);break;case 3:if(AtE<=0)A._GetAutoObject(
C.Device).A3(21,true,A._GetAutoObject(C.Converter).Rj(En.NaisId),0,AfM);else A._GetAutoObject(
C.Device).A3(48,true,(A._GetAutoObject(C.Converter).Rj(En.NaisId)+Ayh)+AtE.toFixed(
),0,AfM);break;case 4:if(AtE<=0)A._GetAutoObject(C.Device).A3(25,true,A._GetAutoObject(
C.Converter).Rj(En.TransponderId),0,AfM);else A._GetAutoObject(C.Device).A3(47,true
,(A._GetAutoObject(C.Converter).Rj(En.TransponderId)+Ayh)+AtE.toFixed(),0,AfM);break;
case 1:switch(AyX){case 1:A._GetAutoObject(C.Device).A3(42,true,A.jV,0,AfM);break;
case 0:A._GetAutoObject(C.Device).A3(43,true,A.jV,0,AfM);break;case 3:case 2:case
5:case 4:A._GetAutoObject(C.Device).A3(22,true,A.jV,0,AfM);break;default:throw new
Error(AHx+AyX.toFixed());}break;case 5:A._GetAutoObject(C.Device).A3(41,true,A._GetAutoObject(
C.Device).An.HJ().toFixed(),0,AfM);break;case 0:break;default:throw new Error(AWi+
BbY.toFixed());}},BdD:function(Bca,L6){var B;var AAl=null;switch(Bca){case 0:AAl=[
B=A._GetAutoObject(C.Device),B.Awn,B.AyR];break;case 1:switch(L6){case 1:AAl=[B=
A._GetAutoObject(C.Device),B.Awl,B.AyP];break;case 0:AAl=[B=A._GetAutoObject(C.Device
),B.Awm,B.AyQ];break;case 2:AAl=[B=A._GetAutoObject(C.Device),B.Awn,B.AyR];break;
default:throw new Error(Ayg+L6.toFixed());}break;default:throw new Error(AWj+Bca.
toFixed());}return AAl;},A67:function(Qi,Bx6){var AaM=A._NewObject(A.Core.Bs,0);
AaM.Initialize(Qi);var ABD=AaM.Year;var Bf=A._GetAutoObject(C.Device).Pr.LT(0,ABD
);var U_=A._NewObject(C.CalfDeregistrations,0);if(Bf<0){if(A._GetAutoObject(C.Device
).Pr.Lh())A._GetAutoObject(C.Device).A3(51,true,A._GetAutoObject(C.Device).Pr.HJ(
).toFixed(),0,null);else{U_.Gr();U_.AkH(ABD);}}else U_.E3(Bf,A._GetAutoObject(C.
Device).Pr);U_.AwE(U_.Deregistrations+1);if(Bx6)U_.AwD(U_.Deaths+1);U_.Ci(A._GetAutoObject(
C.Device).Pr);},AMm:function(LQ,AlQ,AlH){var AKJ=0;if((AlQ&&(AlH===1))||(LQ===1)
)AKJ=1;else if((AlQ&&(AlH===2))||(LQ===2))AKJ=2;else if(!!LQ&&(LQ!==5))AKJ=LQ;return AKJ;
},Bdd:function(Byl){var B;if(A._GetAutoObject(C.Device).MeasureState===1){this.ST.
Cx=A._GetAutoObject(C.Device).AcF;this.ST.B2=Byl;this.ST.AnX(this);}},AC1:function(
){var Be=this.AOM();var Bd2=A._NewObject(C.BoolFilterCriterion,0);Bd2.Initialize(
38,0,true,true);Be.CW(Bd2);return Be;},A6M:function(Eh){var Be=A._GetAutoObject(
C.Helper).Mt();if(A._GetAutoObject(C.Device).Aqe){var A2t=A._GetAutoObject(C.Helper
).AON(Eh,21600,true);Be.CW(A2t);}return Be;},A61:function(){var Be=A._GetAutoObject(
C.Helper).Mt();var Bes=A._NewObject(C.UInt64FilterCriterion,0);Bes.Initialize(26
,0,0,true);Be.CW(Bes);return Be;},A64:function(){var B;var Be=A._GetAutoObject(C.
Helper).Mt();var AAr=(C.WhereAboutsFilterCriterion.isPrototypeOf(B=Be.DL(34,3))?
B:null);if(!!AAr)Be.Np(AAr);var BfO=A._NewObject(C.BoolFilterCriterion,0);BfO.Initialize(
37,0,true,true);Be.CW(BfO);return Be;},Sj:function(A7,Atx,A07){var B;A7=Math.trunc(
A7/this.ApR(Atx));A7%=this.ApR(A07);return A7;},ApR:function(Bcb){switch(Bcb){case
0:return 1;case 1:return 10;case 2:return 100;case 3:return 1000;case 4:return 10000;
case 5:return 100000;case 6:return 1000000;case 7:return 10000000;case 8:return 100000000;
case 9:return 1000000000;case 10:return 10000000000;case 11:return 100000000000;
case 12:return 1000000000000;case 13:return 10000000000000;case 14:return 100000000000000;
case 15:return 1000000000000000;default:throw new Error(AWk+Bcb.toFixed());}},Mt:
function(){var Be=A._NewObject(C.Filter,0);var Bf$=A._NewObject(C.BoolFilterCriterion
,0);Bf$.Initialize(10,0,true,true);Be.CW(Bf$);var AAr=A._NewObject(C.WhereAboutsFilterCriterion
,0);AAr.Initialize(34,3,6,true);Be.CW(AAr);return Be;},Are:function(aFilter){return!
this.AC5(aFilter);},AC5:function(aFilter){var Jl=0;var Aw=aFilter.AOO();while(!!
Aw){if(Aw.YI===false)Jl++;Aw=aFilter.AOT(Aw);}return Jl;},AOM:function(){var Be=
this.Mt();var U7=A._NewObject(C.AnimalTypeFilterCriterion,0);U7.Initialize(14,0,
1,true);Be.CW(U7);return Be;},AC_:function(){var B;var A4x;var J8=this.Bju();A4x=(((
B=A._GetAutoObject(C.Converter).Aqz(J8))<0)?B+0x10000000000000000:B)*this.ApR(12
);if((J8===10)&&(A._GetAutoObject(C.Device).PY>0)){var BzO=A._GetAutoObject(C.Helper
).Sj(A._GetAutoObject(C.Device).PY,10,2)*this.ApR(8);A4x+=BzO;}return A4x;},Bju:
function(){var J8=0;if(A._GetAutoObject(C.Device).PY>0)J8=A._GetAutoObject(C.Converter
).S2(A._GetAutoObject(C.Device).PY);if(!J8)J8=A._GetAutoObject(C.Converter).A7y(
A._GetAutoObject(C.Device).Language);return J8;},ARn:function(Xn){var AiA=A._GetAutoObject(
C.Device).An.Aem(26,Xn);return AiA;},Aj7:function(AfN){switch(AfN){case 0:case 1:
case 2:case 3:case 4:case 5:return false;case 6:case 7:case 8:case 9:case 10:return true;
default:throw new Error(AWl+AfN.toFixed());}},Bho:function(Rr,En){var Gv=0;switch(
Rr){case 1:Gv=A._GetAutoObject(C.Helper).Ak7(En.TransponderId);break;case 0:if(!
A._GetAutoObject(C.Device).EartagNrAssignmentMode)Gv=A._GetAutoObject(C.Device).
AjV;else switch(En.Gender){case 0:Gv=A._GetAutoObject(C.Device).Aq5;break;case 1:
Gv=A._GetAutoObject(C.Device).Aq4;break;case 2:Gv=A._GetAutoObject(C.Device).AjV;
break;default:throw new Error(AHA+En.Gender.toFixed());}break;default:throw new Error(
AWm+Rr.toFixed());}return Gv;},Bi2:function(){var B;var AzZ=(((((((A.aaR(A.acf.AhL
)+A.aaR(A.acf.Colon))+MK)+A._GetAutoObject(C.Device).AhL)+Ayi)+A.aaR(A.acf.Bow))+
A.aaR(A.acf.Colon))+MK)+A._GetAutoObject(A.acj.KL).Bi0(((B=A._GetAutoObject(C.Device
).Q1.Timestamp)<0)?B+0x100000000:B);return AzZ;},Bi3:function(){var B;var AzZ=((((((((((((((((((((((((((((
AWn+A._GetAutoObject(C.Device).R1.AEe.toFixed())+Lw)+A._GetAutoObject(C.Device).
R1.AEj.toFixed())+Lw)+A._GetAutoObject(C.Device).R1.AGv.toFixed())+O7)+A._GetAutoObject(
C.Device).R1.ACr)+O7)+A._GetAutoObject(A.acj.KL).AjN(((B=A._GetAutoObject(C.Device
).R1.Timestamp)<0)?B+0x100000000:B))+MK)+AWo)+A._GetAutoObject(C.Device).SA.AEe.
toFixed())+Lw)+A._GetAutoObject(C.Device).SA.AEj.toFixed())+Lw)+A._GetAutoObject(
C.Device).SA.AGv.toFixed())+O7)+A._GetAutoObject(C.Device).SA.ACr)+O7)+A._GetAutoObject(
A.acj.KL).AjN(((B=A._GetAutoObject(C.Device).SA.Timestamp)<0)?B+0x100000000:B))+
MK)+AWp)+A._GetAutoObject(C.Helper).Bjx())+O7)+A._GetAutoObject(C.Device).GetCommitHash(
))+O7)+A._GetAutoObject(C.Device).GetCommitCount().toFixed())+O7)+A._GetAutoObject(
A.acj.KL).AjN(A._GetAutoObject(C.Device).GetCommitEpoch());return AzZ;},Bi1:function(
){var B;var AzZ=(((((((((((((((((((((AWq+A._GetAutoObject(C.Device).Q1.ARN.toFixed(
))+Lw)+A._GetAutoObject(C.Device).Q1.ARO.toFixed())+Lw)+A._GetAutoObject(C.Device
).Q1.ARM.toFixed())+MK)+A.aaR(A.acf.A6F))+A.aaR(A.acf.Colon))+Oc)+A._GetAutoObject(
A.acj.KL).AjN(((B=A._GetAutoObject(C.Device).Q1.Timestamp)<0)?B+0x100000000:B))+
Ayi)+AWr)+A._GetAutoObject(C.Device).SZ.AVx.toFixed())+Lw)+A._GetAutoObject(C.Device
).SZ.AVy.toFixed())+Lw)+A._GetAutoObject(C.Device).SZ.AVw.toFixed())+MK)+A.aaR(A.
acf.A6F))+A.aaR(A.acf.Colon))+Oc)+A._GetAutoObject(A.acj.KL).AjN(((B=A._GetAutoObject(
C.Device).SZ.Timestamp)<0)?B+0x100000000:B);return AzZ;},A62:function(A07){var B;
var O;var AAY=A.jV;for(O=1;O<=A07;O=O+1)if(!!A.abz(0,2))AAY=AAY+String.fromCharCode(
A.abz(97,104)&0xFFFF);else AAY=AAY+String.fromCharCode(A.abz(48,57)&0xFFFF);return AAY;
},Abp:function(Eo){var Azf=0;if(Eo===1)Eo=0;var BcU=this.AgG.Avv(Eo);if(BcU>=0)Azf=
this.Afz.Get(BcU);return Azf;},ADa:function(Eo){var FW=0;var ABB=this.AgG.Avv(Eo
);if(ABB>=0)FW=this.Afy.Get(ABB);return FW;},AC$:function(Eo){var FW=0;var ABB=this.
AgG.Avv(Eo);if(ABB>=0)FW=this.Afx.Get(ABB);return FW;},A6S:function(){var Be=this.
Mt();var U7=A._NewObject(C.AnimalTypeFilterCriterion,0);U7.Initialize(14,0,A._GetAutoObject(
C.Device).ACK,true);Be.CW(U7);return Be;},ARq:function(J6){var BM=Math.trunc(J6/
1000000000000)|0;if(!BM)return 0;else if(BM>=900)return 1;else if(!A._GetAutoObject(
C.Converter).ANE(BM))return 2;else return 3;},A66:function(BAu){var Be=A._GetAutoObject(
C.Helper).AC4();var AfS=A._GetAutoObject(C.Helper).A6N(3,BAu);AfS.YI=true;Be.CW(
AfS);return Be;},A6N:function(Eb,BbX){var Aw=A._NewObject(C.UInt32FilterCriterion
,0);Aw.EJ=4;switch(Eb){case 2:{Aw.Operator=3;Aw.A5=A._GetAutoObject(C.Helper).ZP(
BbX);}break;case 3:{Aw.Operator=2;Aw.A5=A._GetAutoObject(C.Helper).ZP(BbX-1);}break;
default:A.ab5("%s%e",AHB,Eb);}return Aw;},Bjx:function(){return(((A._GetAutoObject(
C.Device).GetVersionMajor().toFixed()+Lw)+A._GetAutoObject(C.Device).GetVersionMinor(
).toFixed())+Lw)+A._GetAutoObject(C.Device).GetVersionRev().toFixed();},A5f:function(
Rr,En){var Gv=0;switch(Rr){case 0:Gv=En.VisualId;break;case 2:Gv=A._GetAutoObject(
C.Helper).Ak7(En.TransponderId);break;case 3:if(En.NaisId>0)Gv=A._GetAutoObject(
C.Helper).Ak7(En.NaisId);else Gv=En.VisualId;break;case 1:if(!A._GetAutoObject(C.
Device).EartagNrAssignmentMode)Gv=A._GetAutoObject(C.Device).AjV;else switch(En.
Gender){case 0:Gv=A._GetAutoObject(C.Device).Aq5;break;case 1:Gv=A._GetAutoObject(
C.Device).Aq4;break;case 2:Gv=A._GetAutoObject(C.Device).AjV;break;default:throw new
Error(AHA+En.Gender.toFixed());}break;default:throw new Error(AWs+Rr.toFixed());
}return Gv;},A$6:function(){var B;var IX=null;var Ti=0;if(!A._GetAutoObject(C.Device
).EartagNrAssignmentMode){IX=[B=A._GetAutoObject(C.Device),B.Ant,B.Aoz];Ti=A._GetAutoObject(
C.Device).Au8;}else switch(A._GetAutoObject(C.Helper).W.Gender){case 1:{IX=[B=A.
_GetAutoObject(C.Device),B.Awh,B.AyN];Ti=A._GetAutoObject(C.Device).ACC;}break;case
0:{IX=[B=A._GetAutoObject(C.Device),B.Awi,B.AyO];Ti=A._GetAutoObject(C.Device).ACD;
}break;case 2:{IX=[B=A._GetAutoObject(C.Device),B.Ant,B.Aoz];Ti=A._GetAutoObject(
C.Device).Au8;}break;default:;}if(!!IX)switch(Ti){case 1:IX[2].call(IX[0],A._GetAutoObject(
C.Helper).W.VisualId-1);break;case 0:IX[2].call(IX[0],A._GetAutoObject(C.Helper).
W.VisualId+1);break;default:;}},A7w:function(Xn,En){return(En.NaisId!==Xn)&&this.
ARn(Xn);},Bj3:function(Jj,En){return(En.TransponderId!==Jj)&&this.ARp(Jj);},AOK:
function(){var Be=A._GetAutoObject(C.Helper).A64();var AAj=A._NewObject(C.UInt64FilterCriterion
,0);AAj.Initialize(35,5,0,true);Be.CW(AAj);return Be;},Avw:function(){var Be=A._GetAutoObject(
C.Helper).A64();var AAj=A._NewObject(C.UInt64FilterCriterion,0);AAj.Initialize(35
,0,0,true);Be.CW(AAj);return Be;},J0:function(A0Y,Ah7){A0Y.Aj(Ah7);A0Y.Ar(Ah7);A0Y.
Z(Ah7);},ANy:function(Ah9){var B;var Aa;var A28=false;var Xu=Ah9.TP(null,0x1);while(
!!Xu&&(((B=Xu)?B.__proto__:null)!==A.Core.Y)){Aa=(A.kR.Co.isPrototypeOf(Xu)?Xu:null
);if(!!Aa){Aa.Bi(A28);A28=!A28;}Xu=Ah9.TP(Xu,0x1);}},BoQ:function(Jj){var Xq=A._GetAutoObject(
C.Device).An.Filter;A._GetAutoObject(C.Device).An.Bk(null);var A4e=A._GetAutoObject(
C.Device).An.AgZ(22,Jj);var Cz=A._NewObject(C.Animal,0);Cz.E3(A4e,A._GetAutoObject(
C.Device).An);Cz.PW(0);Cz.Ci(A._GetAutoObject(C.Device).An);A._GetAutoObject(C.Device
).An.Bk(Xq);},A6Q:function(Atw,AoD){var Be=null;switch(Atw){case 0:Be=this.Bji(AoD
);break;case 1:Be=this.AC4();break;default:throw new Error(Ayj+Atw.toFixed());}return Be;
},Bji:function(Bxe){var Be=A._GetAutoObject(C.Helper).Mt();var AfS=this.A6N(2,Bxe
);Be.CW(AfS);return Be;},ByK:function(Atw,AoD){var Xq=A._GetAutoObject(C.Device).
An.Filter;A._GetAutoObject(C.Device).An.Bk(this.A6Q(Atw,AoD));var CB=A._GetAutoObject(
C.Device).An.B9();var O;for(O=CB-1;O>=0;O--){A._GetAutoObject(C.Helper).G8(O);A.
_GetAutoObject(C.Helper).W.Ae5(false);A._GetAutoObject(C.Helper).W.Ci(A._GetAutoObject(
C.Device).An);}A._GetAutoObject(C.Device).An.Bk(Xq);},Bjj:function(Atw,AoD){var Xq=
A._GetAutoObject(C.Device).An.Filter;A._GetAutoObject(C.Device).An.Bk(this.A6Q(Atw
,AoD));var Gh=A._GetAutoObject(C.Device).An.B9();A._GetAutoObject(C.Device).An.Bk(
Xq);return Gh;},A6Y:function(AH){var Xq=AH.Filter;AH.Bk(this.Avw());var O;var A2Y=
4294967295;for(O=0;O<AH.B9();O++){var Pb=AH.Hv(O,4);if(Pb<A2Y)A2Y=Pb;}AH.Bk(Xq);
return A._GetAutoObject(C.Helper).L$(A2Y,A._GetAutoObject(C.Helper).Dv());},Bj0:
function(){if(A._GetAutoObject(C.Device).P4.ZZ!==6)return false;if((A._GetAutoObject(
C.Device).P4.AsQ===1529)&&(A._GetAutoObject(C.Device).P4.Asj===16900))return true;
return false;},Ary:function(){return this.Uz;},A9c:function(){return this.AhI;},
BlD:function(){return this.AUF;},BlE:function(){return this.AUG;},BlH:function(){
return this.AGX;},_Init:function(aArg){C.AmO._Init.call(this,aArg);C.Animal._Init.
call(this.W={I:this},0);A.Core.Bs._Init.call(this.Av={I:this},0);A.acl.Gm._Init.
call(this.KH={I:this},0);A.acl.Gm._Init.call(this.ST={I:this},0);C.AMI._Init.call(
this.Ad1={I:this},0);C.AVm._Init.call(this.UG={I:this},0);C.AVl._Init.call(this.
UF={I:this},0);C.TI._Init.call(this.Aeo={I:this},0);C.AV1._Init.call(this.Afy={I:
this},0);C.AV0._Init.call(this.Afx={I:this},0);C.AVZ._Init.call(this.Afw={I:this
},0);C.AV3._Init.call(this.Afz={I:this},0);C.AMJ._Init.call(this.AgG={I:this},0);
this.__proto__=C.HelperClass;var B;this.KH.HN(1);this.KH.Fr(3000);this.KH.B2=100;
this.ST.AwJ(10);this.ST.WF(5);this.ST.HN(1);this.ST.Fr(4000);this.Aeo.B2=false;this.
Aeo.Cx=true;this.Aeo.HN(1);this.Aeo.Fr(100);this.KH.SB=[this,this.BCB];this.KH.Q=[
this,this.BlH,this.Bn0];this.ST.SB=[this,this.BCD];this.ST.Q=[B=A._GetAutoObject(
C.Device),B.AEL,B.AIX];this.Aeo.Q=[B=A._GetAutoObject(C.Device),B.AEM,B.AIY];this.
Init(aArg);var J4=this._variants();if(J4){this.K={};J4._Init.call(this,aArg);}},
_Done:function(){if(this.K)this.K._Done.call(this);this.__proto__=C.AmO;this.W._Done(
);this.Av._Done();this.KH._Done();this.ST._Done();this.Ad1._Done();this.UG._Done(
);this.UF._Done();this.Aeo._Done();this.Afy._Done();this.Afx._Done();this.Afw._Done(
);this.Afz._Done();this.AgG._Done();C.AmO._Done.call(this);},_ReInit:function(){
C.AmO._ReInit.call(this);this.W._ReInit();this.Av._ReInit();this.KH._ReInit();this.
ST._ReInit();this.Ad1._ReInit();this.UG._ReInit();this.UF._ReInit();this.Aeo._ReInit(
);this.Afy._ReInit();this.Afx._ReInit();this.Afw._ReInit();this.Afz._ReInit();this.
AgG._ReInit();if(this.K)this.K._ReInit.call(this);},_Mark:function(D){var B;C.AmO.
_Mark.call(this,D);if((B=this.Uz)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.
AhI)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.AUF)&&(B._cycle!=D))B._Mark(B.
_cycle=D);if((B=this.AUG)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.W)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.Av)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
KH)._cycle!=D)B._Mark(B._cycle=D);if((B=this.ST)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Ad1)._cycle!=D)B._Mark(B._cycle=D);if((B=this.UG)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.UF)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Aeo)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Afy)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Afx)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.Afw)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
Afz)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AgG)._cycle!=D)B._Mark(B._cycle=D);
if(this.K)this.K._Mark(D);},_variants:function(){return A.acs.HelperClass._variants(
);},K:null,_className:"Device::HelperClass"};C.Helper={_Init:function(){C.HelperClass.
_Init.call(this,0);},_ReInit:function(){},_variants:function(){return this;},_this:
null};C.BoolFilterCriterion={A5:false,Abi:function(){var Aw=A._NewObject(C.BoolFilterCriterion
,0);Aw.E_(this);return Aw;},E_:function(AI){C.FilterCriterion.E_.call(this,AI);var
Aw=(C.BoolFilterCriterion.isPrototypeOf(AI)?AI:null);if(!!Aw)this.A5=Aw.A5;},Initialize:
function(A4,Eb,A7,Qg){this.EJ=A4;this.Operator=Eb;this.A5=A7;this.YI=Qg;return this;
},_Init:function(aArg){C.FilterCriterion._Init.call(this,aArg);this.__proto__=C.
BoolFilterCriterion;},_className:"Device::BoolFilterCriterion"};C.UInt32FilterCriterion={
A5:0,Abi:function(){var Aw=A._NewObject(C.UInt32FilterCriterion,0);Aw.E_(this);return Aw;
},E_:function(AI){C.FilterCriterion.E_.call(this,AI);var Aw=(C.UInt32FilterCriterion.
isPrototypeOf(AI)?AI:null);if(!!Aw)this.A5=Aw.A5;},Initialize:function(A4,Eb,A7,
Qg){this.EJ=A4;this.Operator=Eb;this.A5=A7;this.YI=Qg;return this;},_Init:function(
aArg){C.FilterCriterion._Init.call(this,aArg);this.__proto__=C.UInt32FilterCriterion;
},_className:"Device::UInt32FilterCriterion"};C.OverlayMenu={None:0,Home:1,AutoAction:
2,MenuItemSettings:3,RatingSettings:4,WeighingSettings:5,Options:6,AnimalSearch:
7,ActionSettings:8,MeasurementReady:9,AnimalMultiInfoMenu:10,AnimalSearchUnfiltered:
11,AnimalSearchDriedOff:12,MassRecordingMenu:13,MassRecordingDefaults:14,MassRecordingFields:
15,BirthRegistrationsListMenu:16,LAST:17};C.EnumToString={BS:function(A9){throw new
Error(As6+A9.toFixed());},Lv:function(A9){return this.BS(A9);},_Init:function(aArg
){this.__proto__=C.EnumToString;A.h7++;},_Done:function(){this.__proto__=null;A.
h7--;},_ReInit:function(){},_Mark:function(D){var B;if((B=this.I)&&(B._cycle!=D)
)B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:"Device::EnumToString"
};C.ScreenTypeToString={BS:function(A9){var AJZ=A9;var BC;switch(AJZ){case 3:BC=
A.aaR(A.acf.AvC);break;case 34:BC=A.aaR(A.acf.Tx);break;case 35:BC=A.aaR(A.acf.Vv
);break;case 43:BC=A.aaR(A.acf.AOJ);break;default:BC=this.Bqe(A9);}return BC;},Bqe:
function(A9){var AJZ=A9;var BC=A.jV;switch(AJZ){case 0:BC=Ayk;break;case 2:BC=AWt;
break;case 4:BC=AWu;break;case 39:BC=AHC;break;case 38:BC=AWv;break;case 63:BC=AHD;
break;case 64:BC=AHE;break;case 82:BC=AHF;break;case 83:BC=AWw;break;case 92:BC=
AHG;break;case 93:BC=AWx;break;case 65:BC=AWy;break;case 3:BC=Qc;break;case 6:BC=
Xf;break;case 16:BC=AWz;break;case 22:BC=AWA;break;case 42:BC=AWB;break;case 88:
BC=AWC;break;case 87:BC=AWD;break;case 89:BC=AWE;break;case 95:BC=AWF;break;case
17:BC=Ah0;break;case 23:BC=AHH;break;case 18:BC=AWG;break;case 19:BC=AWH;break;case
37:BC=AHI;break;case 76:BC=AHJ;break;case 1:BC=Ayl;break;case 5:BC=Qd;break;case
7:BC=AWI;break;case 81:BC=AWJ;break;case 8:BC=AWK;break;case 9:BC=As7;break;case
40:BC=AWL;break;case 41:BC=AWM;break;case 24:BC=AWN;break;case 10:BC=AWO;break;case
60:BC=AWP;break;case 21:BC=AWQ;break;case 11:BC=As8;break;case 29:BC=AWR;break;case
48:BC=AWS;break;case 30:BC=AWT;break;case 12:BC=AWU;break;case 13:BC=AWV;break;case
14:BC=AWW;break;case 15:BC=AWX;break;case 69:BC=AWY;break;case 70:BC=AWZ;break;case
20:BC=AW0;break;case 25:BC=AHK;break;case 66:BC=Alf;break;case 59:BC=AW1;break;case
58:BC=AW2;break;case 56:BC=AW3;break;case 57:BC=Aym;break;case 68:BC=Alg;break;case
67:BC=Ah1;break;case 84:BC=Ayn;break;case 77:BC=Aoo;break;case 26:BC=Ah2;break;case
28:BC=AW4;break;case 27:BC=Ayo;break;case 31:BC=AHL;break;case 78:BC=AfF;break;case
34:BC=AHM;break;case 35:BC=Aad;break;case 32:BC=Alh;break;case 45:BC=Aop;break;case
49:BC=AW5;break;case 55:BC=AW6;break;case 54:BC=AW7;break;case 33:BC=AW8;break;case
36:BC=AW9;break;case 50:BC=As9;break;case 75:BC=AHN;break;case 43:BC=AHO;break;case
44:BC=AW_;break;case 61:BC=AW$;break;case 62:BC=AXa;break;case 46:BC=AXb;break;case
47:BC=AXc;break;case 85:BC=AXd;break;case 86:BC=AXe;break;case 71:BC=AXf;break;case
72:BC=AXg;break;case 74:BC=AXh;break;case 73:BC=AXi;break;case 51:BC=Ayp;break;case
52:BC=AHP;break;case 53:BC=AHQ;break;case 79:BC=AHR;break;case 80:BC=AHS;break;case
90:BC=AHT;break;case 91:BC=AHU;break;case 94:BC=AXj;break;default:throw new Error(
AXk+AJZ.toFixed());}return BC;},_Init:function(aArg){C.EnumToString._Init.call(this
,aArg);this.__proto__=C.ScreenTypeToString;},_className:"Device::ScreenTypeToString"
};C.OverlayMenuToString={BS:function(A9){var BfJ=A9;var Pf=A.jV;switch(BfJ){case
0:Pf=AXl;break;case 1:Pf=Qc;break;case 8:Pf=AXm;break;case 2:Pf=AXn;break;case 3:
Pf=AXo;break;case 4:Pf=AXp;break;case 5:Pf=Ayq;break;case 6:Pf=AHV;break;case 7:
Pf=AXq;break;case 11:Pf=AHW;break;case 12:Pf=Ah3;break;case 9:Pf=U0;break;case 10:
Pf=AXr;break;case 14:Pf=Aae;break;case 15:Pf=AXs;break;case 13:Pf=AXt;break;case
16:Pf=Ali;break;default:throw new Error(AfG+BfJ.toFixed());}return Pf;},_Init:function(
aArg){C.EnumToString._Init.call(this,aArg);this.__proto__=C.OverlayMenuToString;
},_className:"Device::OverlayMenuToString"};C.ScanStateToString={BS:function(A9){
var Bgh=A9;var Bp=A.jV;switch(Bgh){case 4:Bp=AcQ;break;case 0:Bp=Aoq;break;case 2:
Bp=AXu;break;case 3:Bp=O9;break;case 1:Bp=AHX;break;default:throw new Error(AHY+
Bgh.toFixed());}return Bp;},_Init:function(aArg){C.EnumToString._Init.call(this,
aArg);this.__proto__=C.ScanStateToString;},_className:"Device::ScanStateToString"
};C.MeasureStateToString={BS:function(A9){var Bem=A9;var Bp=A.jV;switch(Bem){case
4:Bp=AcQ;break;case 0:Bp=Aoq;break;case 2:Bp=AXv;break;case 1:Bp=AHX;break;case 3:
Bp=AHZ;break;default:throw new Error(AH0+Bem.toFixed());}return Bp;},_Init:function(
aArg){C.EnumToString._Init.call(this,aArg);this.__proto__=C.MeasureStateToString;
},_className:"Device::MeasureStateToString"};C.TemperatureUnit={Celsius:0,Fahrenheit:
1,LAST:2};C.TemperatureUnitToString={BS:function(A9){var BgH=A9;var Ap8=A.jV;switch(
BgH){case 0:Ap8=A.aaR(A.acf.Bqx);break;case 1:Ap8=A.aaR(A.acf.Bqy);break;default:
throw new Error(AH1+BgH.toFixed());}return Ap8;},_Init:function(aArg){C.EnumToString.
_Init.call(this,aArg);this.__proto__=C.TemperatureUnitToString;},_className:"Device::TemperatureUnitToString"
};C.AnimalType={DairyCalf:0,DairyCow:1,SheepLamb:2,LAST:3};C.AnimalTypeToString={
BS:function(A9){var AK_=A9;var type=A.jV;switch(AK_){case 0:type=A.aaR(A.acf.BhO
);break;case 1:type=A.aaR(A.acf.Bh2);break;case 2:type=A.aaR(A.acf.Bj$);break;default:
throw new Error(AXw+AK_.toFixed());}return type;},_Init:function(aArg){C.EnumToString.
_Init.call(this,aArg);this.__proto__=C.AnimalTypeToString;},_className:"Device::AnimalTypeToString"
};C.Language={Default:0,German:1,Spanish:2,French:3,Italian:4,Finnish:5,Chinese_TW:
6,Turkish:7,Greek:8,Russian:9,Dutch:10,Czech:11,Estonian:12,Bulgarian:13,Bosnian:
14,Norwegian:15,Ukrainian:16,LAST:17};C.LanguageToString={BS:function(A9){var AAc=
A9;var Pe=A.jV;switch(AAc){case 0:Pe=AXx;break;case 10:Pe=AXy;break;case 1:Pe=AXz;
break;case 12:Pe=AXA;break;case 5:Pe=AXB;break;case 3:Pe=AXC;break;case 8:Pe=AXD;
break;case 13:Pe=AH2;break;case 4:Pe=AXE;break;case 9:Pe=AH3;break;case 2:Pe=AH4;
break;case 7:Pe=Ayr;break;case 6:Pe=AXF;break;case 11:Pe=AXG;break;case 14:Pe=AXH;
break;case 15:Pe=AXI;break;case 16:Pe=AXJ;break;default:throw new Error(AH5+AAc.
toFixed());}return Pe;},Lv:function(A9){var AAc=A9;var Do=A.jV;switch(AAc){case 0:
Do=AXK;break;case 10:Do=Xa;break;case 1:Do=O5;break;case 12:Do=AXL;break;case 5:
Do=UU;break;case 3:Do=W8;break;case 8:Do=As_;break;case 13:Do=W5;break;case 4:Do=
W9;break;case 9:Do=Ta;break;case 2:Do=Aaa;break;case 7:Do=Xc;break;case 6:Do=As$;
break;case 11:Do=AH6;break;case 14:Do=AXM;break;case 15:Do=S$;break;case 16:Do=KZ;
break;default:throw new Error(AH5+AAc.toFixed());}return Do;},_Init:function(aArg
){C.EnumToString._Init.call(this,aArg);this.__proto__=C.LanguageToString;},_className:
"Device::LanguageToString"};C.Gender={Male:0,Female:1,Unknown:2,LAST:3};C.BirthType={
Single:0,Twins:1,Triplets:2,Quadruplets:3,LAST:4};C.GenderToString={BS:function(
A9){var AtW=A9;var AKf=A.jV;switch(AtW){case 0:AKf=A.aaR(A.acf.Male);break;case 1:
AKf=A.aaR(A.acf.Female);break;case 2:AKf=A.aaR(A.acf.Unknown);break;default:throw new
Error(AXN+AtW.toFixed());}return AKf;},_Init:function(aArg){C.EnumToString._Init.
call(this,aArg);this.__proto__=C.GenderToString;},_className:"Device::GenderToString"
};C.BirthTypeToString={BS:function(A9){var type=A9;var AfW=A.jV;switch(type){case
0:AfW=A.aaR(A.acf.Bpt);break;case 1:AfW=A.aaR(A.acf.Bqt);break;case 2:AfW=A.aaR(
A.acf.Triplets);break;case 3:AfW=A.aaR(A.acf.Quadruplets);break;default:throw new
Error(AXO+type.toFixed());}return AfW;},_Init:function(aArg){C.EnumToString._Init.
call(this,aArg);this.__proto__=C.BirthTypeToString;},_className:"Device::BirthTypeToString"
};C.SyncState={Idle:0,Init:1,Exporting:2,ImportStart:3,Importing:4,ImportFinish:
5,Ready:6,Error:7,LAST:8};C.SyncStateToString={BS:function(A9){var BgB=A9;var Bp=
A.jV;switch(BgB){case 7:Bp=AcQ;break;case 0:Bp=Aoq;break;case 6:Bp=AHZ;break;case
2:Bp=AXP;break;case 5:Bp=AXQ;break;case 3:Bp=AXR;break;case 4:Bp=AXS;break;case 1:
Bp=AXT;break;default:throw new Error(AXU+BgB.toFixed());}return Bp;},_Init:function(
aArg){C.EnumToString._Init.call(this,aArg);this.__proto__=C.SyncStateToString;},
_className:"Device::SyncStateToString"};C.RatedAttributeToString={BS:function(A9
){var AAZ=A9;switch(AAZ){case 0:return A.jV;case 1:return A.aaR(A.acf.BoD);case 4:
return A.aaR(A.acf.BoC);case 3:return A.aaR(A.acf.BoE);case 2:return A.aaR(A.acf.
BoB);default:throw new Error(AH7+AAZ.toFixed());}},Lv:function(A9){var AAZ=A9;switch(
AAZ){case 0:return A.jV;case 1:return A.aaR(A.acf.Feed);case 4:return A.aaR(A.acf.
AGo);case 3:return A.aaR(A.acf.AGp);case 2:return A.aaR(A.acf.AGm);default:throw new
Error(AH7+AAZ.toFixed());}},_Init:function(aArg){C.EnumToString._Init.call(this,
aArg);this.__proto__=C.RatedAttributeToString;},_className:"Device::RatedAttributeToString"
};C.AssesmentToString={BS:function(A9){var Alw=A9;var Azm=A.jV;switch(Alw){case 0:
case 5:Azm=A.jV;break;case 3:Azm=A.aaR(A.acj.Bpz);break;case 2:Azm=A.aaR(A.acj.BpB
);break;case 1:Azm=A.aaR(A.acj.BpA);break;default:throw new Error(AXV+Alw.toFixed(
));}return Azm;},_Init:function(aArg){C.EnumToString._Init.call(this,aArg);this.
__proto__=C.AssesmentToString;},_className:"Device::AssesmentToString"};C.PopupId={
Unknown:0,SevereError:1,EnterSleep:2,About:3,WarningDataSync:4,SuccessDataSync:5
,WarningRestart:6,WarningFactorySettings:7,SuccessResetFactorySettings:8,ShutDown:
9,TechnicalDetails:10,ScanError:11,ScanNotFound:12,ScannedAnimalNotFound:13,AnimalNotFound:
14,SuccessUnregister:15,DataSynchInProgress:16,AddedToAlarm:17,RemovedFromAlarm:
18,AddedToWatch:19,RemovedFromWatch:20,AnimalIdAlreadyExists:21,MissingAnimalId:
22,SuccessCreationNewAnimals:23,AnimalCreationInProgress:24,TransponderAlreadyRegistered:
25,SuccessCreationNewAnimal:26,WarningNoActionDefined:27,WarningNoMenuItemVisible:
28,WarningEnterPresentationMode:29,WarningNoAnimalsRegistered:30,HelpAnimalInfoRating:
31,WarningReassignTransponder:32,WarningResetAnimalData:33,SuccessResetAnimalData:
34,SuccessUnregisterPerished:35,ScannedTransponderNotFound:36,WarningResetWeightSettings:
37,WarningResetTempThresholds:38,UpdateFirmware:39,ConfirmFirmwareUpdated:40,WarningMaxNumAnimalsReached:
41,MissingTransponder:42,MissingEartagNumber:43,WarningResetToDefault:44,WarningEartagNumberTooShort:
45,WarningNoValidCountryCode:46,TransponderAlreadyRegisteredContinuable:47,AnimalIdAlreadyExistsContinuable:
48,EvaluationInProgress:49,WarningMaxNumRatingsReached:50,WarningMaxNumCalfDeregistrationsReached:
51,WarningOutdatedAnimalWeights:52,WarningWeightEvaluationSingular:53,AddedToDryOff:
54,RemovedFromDryOff:55,WarningWeightEvaluationPlural:56,WarningOutdatedAnimalWeight:
57,ErrorsDeviceDriverCheck:58,QuestionAddAnotherCalfMultiples:59,RemovedFromBirthNoticePending:
60,RemovedAnimalBirth:61,RemovedAllBirthNoticesPending:62,MissingAnimalIdMother:
63,WarningActionNotApplicable:64,SuccessClearAnimalLoss:65,WarningNoActionsForAnimalLoss:
66,SuccessLinkTransponder:67,SuccessLinkNaisId:68,CannotReassignNaisId:69,WarningDataExportHitBirthFailed:
70,SuccessDataExportHitBirth:71,SuccessDataExportHitBirthDownload:72,WarningNoPremisesID:
73,WarningNoFlashDrivePresent:74,ConfirmBootloaderUpdated:75,UpdateFirmwareBatteryLow:
76,InfoSoftwareVersions:77,InfoHardwareVersions:78,InfoSerial:79,SuccessCreateBackup:
80,SuccessRestoreBackup:81,FailedCreateBackup:82,FailedRestoreBackup:83,DemoFunctionNotAvailable:
84,MissingTransponderId:85,SuccessUnlinkTransponder:86,WarningImpreciseTimeSetting:
87,WarningDataExportAnimalsFailed:88,SuccessDataExportAnimalsRatings:89,SuccessDataExportAnimalsDownload:
90,CreateBackupInProgress:91,RestoreBackupInProgress:92,WarningNoBackupFilePresent:
93,WarningNoBackupPathPresent:94,ConfirmationRestoreBackup:95,RemovedAllPurchasedNoticesPending:
96,WarningDataExportPurchasedFailed:97,RemovedFromPurchasedNoticePending:98,SuccessDataExportPurchasedDownload:
99,SuccessDataExportPurchased:100,WarningParsingDateFailed:101,WarningParsedDateInFutureInvalid:
102,WarningParsingNaisIdFailed:103,RemovedAnimalPurchased:104,WarningParsingShortNaisIdWithoutPremisesId:
105,SuccessChangeTransponder:106,TransponderAlreadyRegisteredCapturable:107,ConfirmationMassDeregistration:
108,SuccessMassDeregistration:109,DataExportInProgress:110,BarcodeScannerConnectedSwitchScreen:
111,BarcodeScannerDisconnectedSwitchScreen:112,SuccessDataExportHitBirthResetAdvice:
113,SuccessDataExportPurchasedResetAdvice:114,WarningResetDeviceData:115,SuccessResetSettings:
116,LAST:117};C.PopupState={Queued:0,Unknown:1,Displayed:2,ClosedAfterTimeOut:3,
ClosedWithOk:4,ClosedWithCancel:5,ClosedByMiddleware:6,ClosedWithYes:7,ClosedWithNo:
8,Opened:9};C.PopupContext={AF$:null,AkJ:A.jV,Ak4:0,PopupState:1,Id:0,Show:false
,BnJ:function(E){var B;if(this.PopupState===E)return;this.PopupState=E;if(!!this.
AF$)(B=this.AF$)?B[1].call(B[0],this):null;},_Init:function(aArg){this.__proto__=
C.PopupContext;A.h7++;},_Done:function(){this.__proto__=null;A.h7--;},_ReInit:function(
){},_Mark:function(D){var B;if((B=this.AF$)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=
D);if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:
null,_className:"Device::PopupContext"};C.Boolean={No:0,Yes:1,LAST:2};C.BooleanToYesNo={
BS:function(A9){switch(A9){case 0:return A.aaR(A.acf.No);case 1:return A.aaR(A.acf.
Yes);default:return Ays+A9.toFixed();}},_Init:function(aArg){C.EnumToString._Init.
call(this,aArg);this.__proto__=C.BooleanToYesNo;},_className:"Device::BooleanToYesNo"
};C.AnimalGroupTableFields={Id:0,GroupName:1};C.AnimalGroup={GroupName:AHw,Id:0,
E3:function(Ad,AH){var HF=C.Row.E3.call(this,Ad,AH);if(HF&&!!AH){this.OnSetId(AH.
CF(Ad,0));this.AFi(AH.V0(Ad,1));}return HF;},Ci:function(AH){var HF=C.Row.Ci.call(
this,AH);if(HF&&!!AH){var Jo=AH.Oz();if(Jo<=0)A.ab5("%s",Xe);else{if(this.Am7())
this.CL=AH.YF();AH.Ho(this.CL,0,this.Id);AH.ZH(this.CL,1,this.GroupName);AH.OB(Jo
);}}return HF;},Gr:function(){C.Row.Gr.call(this);this.OnSetId(-1);},E5:function(
){C.Row.E5.call(this);this.OnSetId(0);this.AFi(A.jV);},OnSetId:function(E){if(this.
Id===E)return;this.Id=E;A.abo([this,this.Q4,this.OnSetId],0);},AFi:function(E){if(
this.GroupName===E)return;this.GroupName=E;A.abo([this,this.Blh,this.AFi],0);},Q4:
function(){return this.Id;},Blh:function(){return this.GroupName;},_Init:function(
aArg){C.Row._Init.call(this,aArg);this.__proto__=C.AnimalGroup;this.TableId=3;},
_className:"Device::AnimalGroup"};C.PopupIdToString={BS:function(A9){var AdE=A9;
var At=A.jV;var AJX;AJX=A.aaR(A.acf.BqR)+MK;switch(AdE){case 0:At=A.aaR(A.acf.Unknown
);break;case 1:At=A.aaR(A.acf.SevereError);break;case 58:At=A.aaR(A.acf.BiP);break;
case 2:At=A.aaR(A.acf.BiN);break;case 3:At=A.aaR(A.acf.BqD);break;case 77:At=A._GetAutoObject(
C.Helper).Bi3();break;case 78:At=A._GetAutoObject(C.Helper).Bi1();break;case 79:
At=A._GetAutoObject(C.Helper).Bi2();break;case 9:At=A.aaR(A.acf.Bq5);break;case 5:
At=A.aaR(A.acf.SuccessDataSync);break;case 8:At=A.aaR(A.acf.SuccessResetFactorySettings
);break;case 116:At=A.aaR(A.acf.BpT);break;case 34:At=A.aaR(A.acf.SuccessResetAnimalData
);break;case 10:At=A._GetAutoObject(C.Device).AC9();break;case 82:At=A.aaR(A.acf.
BiR);break;case 83:At=A.aaR(A.acf.BiS);break;case 80:At=A.aaR(A.acf.BpL);break;case
81:At=A.aaR(A.acf.SuccessRestoreBackup);break;case 91:At=A.aaR(A.acf.BhB);break;
case 92:At=A.aaR(A.acf.BoU);break;case 4:At=A.aaR(A.acf.WarningDataSync);break;case
7:At=A.aaR(A.acf.Bq3);break;case 33:At=A.aaR(A.acf.WarningResetAnimalData);break;
case 115:At=A.aaR(A.acf.WarningResetDeviceData);break;case 6:At=A.aaR(A.acf.WarningRestart
);break;case 27:At=A.aaR(A.acf.WarningNoActionDefined);break;case 64:At=A.aaR(A.
acf.WarningActionNotApplicable);break;case 28:At=A.aaR(A.acf.WarningNoMenuItemVisible
);break;case 29:At=A.aaR(A.acf.WarningEnterPresentationMode);break;case 30:At=A.
aaR(A.acf.WarningNoAnimalsRegistered);break;case 41:At=((AJX+A.aaR(A.acf.ARV))+MK
)+A.aaR(A.acf.Bkm);break;case 50:At=((AJX+A.aaR(A.acf.ARV))+MK)+A.aaR(A.acf.Bko);
break;case 51:At=((AJX+A.aaR(A.acf.ARV))+MK)+A.aaR(A.acf.Bkn);break;case 42:At=A.
aaR(A.acf.Bq1);break;case 45:At=A.aaR(A.acf.BqV);break;case 46:At=A.aaR(A.acf.WarningNoValidCountryCode
);break;case 57:At=A.aaR(A.acf.WarningOutdatedAnimalWeight);break;case 52:At=A.aaR(
A.acf.WarningOutdatedAnimalWeights);break;case 53:At=A.aaR(A.acf.WarningWeightEvaluationSingular
);break;case 56:At=A.aaR(A.acf.WarningWeightEvaluationPlural);break;case 11:At=A.
aaR(A.acf.ScanError);break;case 12:At=A.aaR(A.acf.ScanNotFound);break;case 13:At=
A.aaR(A.acf.Bht);break;case 36:At=A.aaR(A.acf.Bqm);break;case 14:At=A.aaR(A.acf.
AnimalNotFound);break;case 15:At=A.aaR(A.acf.SuccessUnregister);break;case 35:At=
A.aaR(A.acf.SuccessUnregisterPerished);break;case 26:At=A.aaR(A.acf.SuccessCreationNewAnimal
);break;case 23:At=A.aaR(A.acf.SuccessCreationNewAnimals);break;case 24:At=A.aaR(
A.acf.Bh5);break;case 49:At=A.aaR(A.acf.EvaluationInProgress);break;case 16:At=A.
aaR(A.acf.Bh_);break;case 17:At=A.aaR(A.acf.BpD);break;case 18:At=A.aaR(A.acf.BpR
);break;case 19:At=A.aaR(A.acf.BpE);break;case 20:At=A.aaR(A.acf.BpS);break;case
54:At=A.aaR(A.acf.BpM);break;case 55:At=A.aaR(A.acf.BpP);break;case 21:At=A.aaR(
A.acf.A$$);break;case 48:At=(A.aaR(A.acf.A$$)+MK)+A.aaR(A.acf.A5X);break;case 22:
At=A.aaR(A.acf.BqX);break;case 63:At=A.aaR(A.acf.BqY);break;case 85:At=A.aaR(A.acf.
Bq0);break;case 43:At=A.aaR(A.acf.BqZ);break;case 25:At=A.aaR(A.acf.A$V);break;case
47:At=(A.aaR(A.acf.A$V)+MK)+A.aaR(A.acf.A5X);break;case 107:At=A.aaR(A.acf.Bqz);
break;case 31:{var BAd=(((((((((((((((((((A.aaR(A.acf.BhW)+Ayi)+A.aaR(A.acf.ANA)
)+A.aaR(A.acf.Colon))+Oc)+A.aaR(A.acf.BhY))+MK)+A.aaR(A.acf.AOz))+A.aaR(A.acf.Colon
))+Oc)+A.aaR(A.acf.BiX))+MK)+A.aaR(A.acf.AUq))+A.aaR(A.acf.Colon))+Oc)+A.aaR(A.acf.
BoG))+MK)+A.aaR(A.acf.AUp))+A.aaR(A.acf.Colon))+Oc)+A.aaR(A.acf.BoF);At=BAd;}break;
case 32:At=A.aaR(A.acf.Bqn);break;case 69:At=A.aaR(A.acf.Bkz);break;case 44:At=A.
aaR(A.acf.Bq4);break;case 37:At=A.aaR(A.acf.WarningResetWeightSettings);break;case
38:At=A.aaR(A.acf.WarningResetTempThresholds);break;case 39:At=A.aaR(A.acf.Box);
break;case 76:At=(A.aaR(A.acf.A5A)+MK)+A.aaR(A.acf.AUs);break;case 40:At=A.aaR(A.
acf.BpN);break;case 75:At=A.aaR(A.acf.BpF);break;case 59:At=A.aaR(A.acf.QuestionAddAnotherCalfMultiples
);break;case 62:At=A.aaR(A.acf.BpH);break;case 96:At=A.aaR(A.acf.BpI);break;case
60:At=A.aaR(A.acf.BpJ);break;case 98:At=A.aaR(A.acf.BpK);break;case 61:At=A.aaR(
A.acf.BpU);break;case 104:At=A.aaR(A.acf.BpV);break;case 65:At=A.aaR(A.acf.SuccessClearAnimalLoss
);break;case 66:At=A.aaR(A.acf.WarningNoActionsForAnimalLoss);break;case 67:At=A.
aaR(A.acf.SuccessLinkTransponder);break;case 106:At=A.aaR(A.acf.BpG);break;case 86:
At=A.aaR(A.acf.SuccessUnlinkTransponder);break;case 68:At=A.aaR(A.acf.BpO);break;
case 70:At=A.aaR(A.acf.BiT);break;case 71:At=A.aaR(A.acf.A$N);break;case 72:At=A.
aaR(A.acf.BpY);break;case 113:At=(A.aaR(A.acf.A$N)+MK)+A.aaR(A.acf.A7M);break;case
97:At=A.aaR(A.acf.BiV);break;case 100:At=(A.aaR(A.acf.A$O)+MK)+A.aaR(A.acf.A$a);
break;case 114:At=(A.aaR(A.acf.A$O)+MK)+A.aaR(A.acf.A7M);break;case 99:At=A.aaR(
A.acf.BpZ);break;case 88:At=A.aaR(A.acf.BiU);break;case 89:At=A.aaR(A.acf.BpW);break;
case 90:At=A.aaR(A.acf.BpX);break;case 73:At=A.aaR(A.acf.WarningNoPremisesID);break;
case 74:At=A.aaR(A.acf.WarningNoFlashDrivePresent);break;case 94:At=A.aaR(A.acf.
WarningNoBackupPathPresent);break;case 93:At=A.aaR(A.acf.WarningNoBackupFilePresent
);break;case 84:At=A.aaR(A.acf.Bi_);break;case 87:At=A.aaR(A.acf.Bq7);break;case
95:At=A.aaR(A.acf.BqU);break;case 108:At=A.aaR(A.acf.BqW);break;case 109:At=A.aaR(
A.acf.SuccessMassDeregistration);break;case 102:At=A.aaR(A.acf.WarningParsedDateInFutureInvalid
);break;case 101:At=A.aaR(A.acf.WarningParsingDateFailed);break;case 103:At=A.aaR(
A.acf.WarningParsingNaisIdFailed);break;case 105:At=A.aaR(A.acf.Bq2);break;case 110:
At=A.aaR(A.acf.BhN);break;case 111:At=A.aaR(A.acf.Bo6);break;case 112:At=A.aaR(A.
acf.Bo7);break;default:throw new Error(AH8+AdE.toFixed());}return At;},Lv:function(
A9){var AdE=A9;var At=A.jV;switch(AdE){case 0:At=AXW;break;case 1:At=AXX;break;case
58:At=AXY;break;case 2:At=AXZ;break;case 3:At=AX0;break;case 77:At=AH9;break;case
78:At=AH_;break;case 79:At=AH$;break;case 9:At=AIa;break;case 5:At=Ayt;break;case
8:At=Ayu;break;case 116:At=AIb;break;case 34:At=AX1;break;case 80:At=AIc;break;case
81:At=AX2;break;case 91:At=AId;break;case 92:At=AX3;break;case 82:At=AX4;break;case
83:At=AX5;break;case 10:At=AX6;break;case 4:At=AX7;break;case 7:At=AX8;break;case
33:At=AX9;break;case 115:At=AX_;break;case 6:At=AX$;break;case 27:At=AYa;break;case
64:At=AYb;break;case 28:At=AYc;break;case 29:At=Ayv;break;case 30:At=AYd;break;case
41:At=AYe;break;case 50:At=Ayw;break;case 51:At=Ata;break;case 42:At=U1;break;case
45:At=Atb;break;case 46:At=AYf;break;case 57:At=AYg;break;case 52:At=AYh;break;case
53:At=AIe;break;case 56:At=AYi;break;case 11:At=AIf;break;case 12:At=AYj;break;case
13:At=AYk;break;case 36:At=AYl;break;case 14:At=Atc;break;case 15:At=AYm;break;case
35:At=AYn;break;case 26:At=AIg;break;case 23:At=AYo;break;case 24:At=AYp;break;case
49:At=AYq;break;case 16:At=AYr;break;case 17:At=AcR;break;case 18:At=AYs;break;case
19:At=AYt;break;case 20:At=AYu;break;case 54:At=AYv;break;case 55:At=AIh;break;case
21:At=AYw;break;case 48:At=AYx;break;case 22:At=AYy;break;case 63:At=AYz;break;case
43:At=AYA;break;case 85:At=AYB;break;case 25:At=AIi;break;case 47:At=AYC;break;case
107:At=AYD;break;case 31:At=AYE;break;case 32:At=AIj;break;case 69:At=AIk;break;
case 44:At=AYF;break;case 37:At=AYG;break;case 38:At=AYH;break;case 39:At=AYI;break;
case 76:At=Rp;break;case 40:At=Atd;break;case 75:At=AIl;break;case 59:At=AIm;break;
case 62:At=Aor;break;case 96:At=Aos;break;case 60:At=Ayx;break;case 98:At=AYJ;break;
case 65:At=AIn;break;case 61:At=AYK;break;case 104:At=AYL;break;case 66:At=AYM;break;
case 67:At=AYN;break;case 106:At=AYO;break;case 86:At=AYP;break;case 68:At=AYQ;break;
case 70:At=AYR;break;case 71:At=AYS;break;case 72:At=AYT;break;case 113:At=AYU;break;
case 97:At=AYV;break;case 100:At=AYW;break;case 99:At=AYX;break;case 114:At=AYY;
break;case 88:At=AYZ;break;case 89:At=AY0;break;case 90:At=Aot;break;case 73:At=
AIo;break;case 74:At=AY1;break;case 94:At=AIp;break;case 93:At=AIq;break;case 84:
At=AcS;break;case 87:At=AIr;break;case 95:At=AY2;break;case 108:At=AIs;break;case
109:At=AY3;break;case 102:At=Ayy;break;case 101:At=AY4;break;case 103:At=AY5;break;
case 105:At=Ayz;break;case 110:At=AY6;break;case 111:At=AY7;break;case 112:At=AY8;
break;default:throw new Error(AH8+AdE.toFixed());}return At;},_Init:function(aArg
){C.EnumToString._Init.call(this,aArg);this.__proto__=C.PopupIdToString;},_className:
"Device::PopupIdToString"};C.PopupParamSeparator=";";C.RatingMode={Basic:0,Extended:
1,LAST:2};C.TransponderType={UNDEFINED:0,AnimalId:1,FarmId:2,GroupId:3,PersonId:
4,LAST:5};C.TransponderProtocol={UNDEFINED:0,FDX:1,HDX:2,HDX_URBAN:3,LAST:4};C.TransponderTypeToString={
BS:function(A9){var BgU=A9;var type=A.jV;switch(BgU){case 1:type=AIt;break;case 2:
type=Aou;break;case 3:type=AIu;break;case 4:type=AY9;break;case 0:type=Ayk;break;
default:throw new Error(AIv+BgU.toFixed());}return type;},_Init:function(aArg){C.
EnumToString._Init.call(this,aArg);this.__proto__=C.TransponderTypeToString;},_className:
"Device::TransponderTypeToString"};C.TransponderProtocolToString={BS:function(A9
){var BgS=A9;var AAW=A.jV;switch(BgS){case 1:AAW=AIw;break;case 2:AAW=Alj;break;
case 3:AAW=AY_;break;case 0:AAW=Ayk;break;default:throw new Error(Aov+BgS.toFixed(
));}return AAW;},_Init:function(aArg){C.EnumToString._Init.call(this,aArg);this.
__proto__=C.TransponderProtocolToString;},_className:"Device::TransponderProtocolToString"
};C.Transponder={Id:0,TransponderProtocol:0,TransponderType:0,ATW:function(E){if(
this.TransponderType===E)return;this.TransponderType=E;A.abo([this,this.BlT,this.
ATW],0);},ATV:function(E){if(this.TransponderProtocol===E)return;this.TransponderProtocol=
E;A.abo([this,this.BlS,this.ATV],0);},OnSetId:function(E){if(this.Id===E)return;
this.Id=E;A.abo([this,this.Q4,this.OnSetId],0);},AOW:function(){return A._GetAutoObject(
C.Converter).Bql(this.Id);},Bjg:function(){return A._GetAutoObject(C.Converter).
AxV(this.Id);},BlT:function(){return this.TransponderType;},BlS:function(){return this.
TransponderProtocol;},Q4:function(){return this.Id;},_Init:function(aArg){this.__proto__=
C.Transponder;A.h7++;},_Done:function(){this.__proto__=null;A.h7--;},_ReInit:function(
){},_Mark:function(D){var B;if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:
null,_cycle:0,_observers:null,_className:"Device::Transponder"};C.RatingModeToString={
BS:function(A9){var Vg=A9;var Ny=A.jV;switch(Vg){case 0:Ny=A.aaR(A.acf.Basic);break;
case 1:Ny=A.aaR(A.acf.Extended);break;default:throw new Error(AY$+Vg.toFixed());
}return Ny;},_Init:function(aArg){C.EnumToString._Init.call(this,aArg);this.__proto__=
C.RatingModeToString;},_className:"Device::RatingModeToString"};C.TableRowsCount={
_Init:function(aArg){this.__proto__=C.TableRowsCount;A.h7++;},_Done:function(){this.
__proto__=null;A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((B=this.
I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:
"Device::TableRowsCount"};C.MassUnit={Kilogramm:0,Pound:1,LAST:2};C.MassUnitToString={
BS:function(A9){var Bei=A9;var Ap8=A.jV;switch(Bei){case 0:Ap8=A.aaR(A.acf.Bj9);
break;case 1:Ap8=A.aaR(A.acf.Pound);break;default:throw new Error(AIx+Bei.toFixed(
));}return Ap8;},_Init:function(aArg){C.EnumToString._Init.call(this,aArg);this.
__proto__=C.MassUnitToString;},_className:"Device::MassUnitToString"};C.MinWeightGain=
20;C.MaxWeightGain=2000;C.WeightGainStep=10;C.Int32ArrayWrapper={MF:10,Array:A.abi(
10,0,null),Zy:function(E){if(this.MF===E)return;if(E>10)throw new Error(AIy);this.
MF=E;},Set:function(aIndex,AK){if((aIndex<0)||(aIndex>=this.MF))throw new Error(
AIz);this.Array.Set(aIndex,AK);},Get:function(aIndex){if((aIndex<0)||(aIndex>=this.
MF))throw new Error(AIz);return this.Array.Get(aIndex);},AmY:function(){var Qz=0;
var O;for(O=0;O<this.MF;O=O+1)Qz=Qz+this.Get(O);return Qz;},toString:function(){
var A26=this.Array.Get(0).toFixed();var O;for(O=1;O<this.MF;O=O+1)A26=(A26+O7)+this.
Array.Get(O).toFixed();return A26;},E3:function(aString){var HA=aString.indexOf(
String.fromCharCode(0x2C),0);var A1S=A.jV;var O=0;while(O<10){if(aString===A.jV)
this.Array.Set(O,0);else{if(HA===-1){A1S=aString;aString=A.jV;}else{A1S=A.abV(aString
,HA);aString=A.ab1(aString,0,HA+1);}this.Array.Set(O,A.wz(A1S,0,10));HA=aString.
indexOf(String.fromCharCode(0x2C),0);}O=O+1;}if(aString!==A.jV)A.ab5("%s",AZa);}
,Ci:function(){},E5:function(){var O;for(O=0;O<this.MF;O=O+1)this.Set(O,0);},Avv:
function(A7){var O=0;while(O<this.MF){if(this.Array.Get(O)===A7)return O;O=O+1;}
return-1;},H3:function(){var O=0;var max=-1;while(O<this.MF){if(this.Array.Get(O
)>max)max=this.Array.Get(O);O=O+1;}return max;},_Init:function(aArg){(this.Array=[
]).__proto__=C.Int32ArrayWrapper.Array;this.__proto__=C.Int32ArrayWrapper;A.h7++;
},_Done:function(){this.__proto__=null;A.h7--;},_ReInit:function(){},_Mark:function(
D){var B;if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:
null,_className:"Device::Int32ArrayWrapper"};C.ActionToString={BS:function(A9){var
AzH=A9;var E8=A.jV;switch(AzH){case 4:E8=A.aaR(A.acf.Alarm);break;case 256:E8=A.
aaR(A.acf.Weighing);break;case 128:E8=A.aaR(A.acf.A6r);break;case 16:E8=A.aaR(A.
acf.AMp);break;case 1:E8=A.aaR(A.acf.Temperature);break;case 32:E8=A.aaR(A.acf.AnimalLoss
);break;case 2:E8=A.aaR(A.acf.Rating);break;case 8:E8=A.aaR(A.acf.Asd);break;case
64:E8=A.aaR(A.acf.Unregister);break;case 512:E8=A.aaR(A.acf.ASd);break;case 1024:
E8=A.aaR(A.acf.LinkTransponder);break;case 262144:E8=A.aaR(A.acf.UnlinkTransponder
);break;case 2048:E8=A.aaR(A.acf.Tx);break;case 4096:E8=A.aaR(A.acf.Calving);break;
case 8192:E8=A.aaR(A.acf.DryOff);break;case 16384:E8=A.aaR(A.acf.A7F);break;case
32768:E8=A.aaR(A.acf.ACc);break;case 524288:E8=A.aaR(A.acf.ACe);break;case 65536:
E8=A.aaR(A.acf.Delete);break;case 131072:E8=A.aaR(A.acf.A7G);break;case 0:E8=A.aaR(
A.acf.A74);break;default:throw new Error(AyA+AzH.toFixed());}return E8;},Lv:function(
A9){var AzH=A9;var E8=A.jV;switch(AzH){case 4:E8=A.aaR(A.acf.Alarm);break;case 256:
E8=A.aaR(A.acf.Weighing);break;case 128:E8=A.aaR(A.acf.A6r);break;case 16:E8=A.aaR(
A.acf.AMp);break;case 1:E8=A.aaR(A.acf.Temperature);break;case 32:E8=A.aaR(A.acf.
AnimalLoss);break;case 2:E8=A.aaR(A.acf.Rating);break;case 8:E8=A.aaR(A.acf.Asd);
break;case 64:E8=A.aaR(A.acf.Unregister);break;case 512:E8=A.aaR(A.acf.ASd);break;
case 1024:E8=A.aaR(A.acf.LinkTransponder);break;case 262144:E8=A.aaR(A.acf.UnlinkTransponder
);break;case 2048:E8=A.aaR(A.acf.Tx);break;case 4096:E8=A.aaR(A.acf.Calving);break;
case 8192:E8=A.aaR(A.acf.DryOff);break;case 32768:E8=A.aaR(A.acf.ACc);break;case
524288:E8=A.aaR(A.acf.ACe);break;case 65536:E8=A.aaR(A.acf.Delete);break;case 16384:
case 131072:E8=A.aaR(A.acf.Bke);break;case 0:E8=A.aaR(A.acf.A74);break;default:throw new
Error(AyA+AzH.toFixed());}return E8;},_Init:function(aArg){C.EnumToString._Init.
call(this,aArg);this.__proto__=C.ActionToString;},_className:"Device::ActionToString"
};C.ACTIONS_COUNT=19;C.PopupTimeout=2000;C.ITable={Filter:null,Id:2,CF:function(
Ad,A4){return 0;},V0:function(Ad,A4){return A.jV;},Ako:function(G){A.we(this,0);
A.pe([this,this.DX],this);},H2:function(Ad,A4){return false;},Hv:function(Ad,A4){
return this.Sl(Ad,A4);},OnSetId:function(E){if(this.Id===E)return;this.Id=E;},B9:
function(){return 0;},Bk:function(E){if(this.Filter===E)return;this.Filter=E;A.abo([
this,this.Fp,this.Ft],0);},Ft:function(Aq){this.Bk(Aq);},I6:function(Ad,A4){var BBS=
this.V1(Ad,A4);return A._GetAutoObject(C.Converter).A$Y(BBS);},V1:function(Ad,A4
){return 0;},Sl:function(Ad,A4){return 0;},A63:function(Ad,A4){return this.CF(Ad
,A4);},Oz:function(){var Jo=0;var BCC=this.Id;return Jo;},OB:function(AoQ){var HF=
0;var BCC=this.Id;return HF===1;},YF:function(){return-1;},ZJ:function(Ad,A4,CZ){
return false;},Ho:function(Ad,A4,CZ){return false;},ZI:function(Ad,A4,CZ){return false;
},N7:function(Ad,A4,CZ){return false;},ZH:function(Ad,A4,CZ){return false;},Acm:
function(Ad,A4,CZ){return this.ZI(Ad,A4,CZ);},AkT:function(Ad,A4,CZ){var BBT=A._GetAutoObject(
C.Converter).Ad2(CZ);return this.ZJ(Ad,A4,BBT);},A$y:function(Ad,A4,CZ){return this.
Ho(Ad,A4,CZ);},AOQ:function(Ad,A4){return this.CF(Ad,A4);},Bje:function(Ad,A4){return this.
CF(Ad,A4);},Bpe:function(Ad,A4,CZ){return this.Ho(Ad,A4,CZ);},Bpa:function(Ad,A4
,CZ){return this.Ho(Ad,A4,CZ);},LT:function(aColumn,A7){return-1;},AmW:function(
Ad,A4){return this.CF(Ad,A4);},Bo_:function(Ad,A4,CZ){return this.Ho(Ad,A4,CZ);}
,AC7:function(Ad,A4){return this.CF(Ad,A4);},AUM:function(Ad,A4,MP){return this.
Ho(Ad,A4,MP);},DX:function(G){this.ByT();},ByT:function(){return-1;},KO:function(
Ad,A4){return 0;},UA:function(Ad,A4,CZ){return false;},AgZ:function(aColumn,A7){
return-1;},E5:function(){return false;},Bjf:function(Ad,A4){var BBU=this.CF(Ad,A4
);return A._GetAutoObject(C.Converter).BjH(BBU);},Bjk:function(Ad,A4){return this.
CF(Ad,A4);},AOY:function(Ad,A4){return this.CF(Ad,A4);},Bpc:function(Ad,A4,CZ){var
BBV=A._GetAutoObject(C.Converter).A5H(CZ);return this.Ho(Ad,A4,BBV);},Bpd:function(
Ad,A4,CZ){return this.Ho(Ad,A4,CZ);},Bpk:function(Ad,A4,CZ){return this.Ho(Ad,A4
,CZ);},AjL:function(aColumn,A7){return false;},Aem:function(aColumn,A7){return false;
},Bjt:function(Ad,A4){return this.CF(Ad,A4);},Bpi:function(Ad,A4,CZ){return this.
Ho(Ad,A4,CZ);},Lh:function(){return this.QK()>=this.HJ();},HJ:function(){return 0;
},Abq:function(){return-1;},QK:function(){return 0;},Fp:function(){return this.Filter;
},_Init:function(aArg){this.__proto__=C.ITable;A.h7++;},_Done:function(){this.__proto__=
null;A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((B=this.Filter)&&(
B._cycle!=D))B._Mark(B._cycle=D);if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D
);},I:null,_cycle:0,_observers:null,_className:"Device::ITable"};C.MaxAutoActionsCount=
4;C.WeightRecordingMode={Automatic:0,Manual:1,LAST:2};C.WeightRecordingModeToString={
BS:function(A9){var Vg=A9;var Ny=A.jV;switch(Vg){case 0:Ny=A.aaR(A.acf.Automatic
);break;case 1:Ny=A.aaR(A.acf.Manual);break;default:throw new Error(AZb+Vg.toFixed(
));}return Ny;},_Init:function(aArg){C.EnumToString._Init.call(this,aArg);this.__proto__=
C.WeightRecordingModeToString;},_className:"Device::WeightRecordingModeToString"
};C.BooleanToAutoOnOff={BS:function(A9){switch(A9){case 0:return A.aaR(A.acf.Off
);case 1:return A.aaR(A.acf.Aa2);default:return Ays+A9.toFixed();}},_Init:function(
aArg){C.EnumToString._Init.call(this,aArg);this.__proto__=C.BooleanToAutoOnOff;}
,_className:"Device::BooleanToAutoOnOff"};C.WeightStep=100;C.WeightRecordingScope={
CurrentWeightOnly:0,BirthWeightOnly:1,BirthAndCurrentWeight:2,NoWeightRecording:
3,LAST:4};C.WeightRecordingScopeToString={BS:function(A9){var Bgi=A9;var AA$=A.jV;
switch(Bgi){case 0:AA$=A.aaR(A.acf.Bh7);break;case 1:AA$=A.aaR(A.acf.BhJ);break;
case 2:AA$=A.aaR(A.acf.BhF);break;case 3:AA$=A.aaR(A.acf.BkG);break;default:throw new
Error(AZc+Bgi.toFixed());}return AA$;},_Init:function(aArg){C.EnumToString._Init.
call(this,aArg);this.__proto__=C.WeightRecordingScopeToString;},_className:"Device::WeightRecordingScopeToString"
};C.BodyTemperature={Undertemperature:0,Normal:1,Elevated:2,Fever:3,LAST:4};C.Kk={
A5e:0,Temperature:1,Rating:2,Afv:3,BDf:4,BDW:5,BGH:6,BEA:7,BFk:8,BD_:9,BFi:10,BFL:
11,BFM:12,BGM:13,BDq:14,LAST:15};C.AnimalListContentToString={BS:function(A9){var
BcJ=A9;var Rx=A.jV;switch(BcJ){case 0:Rx=AZd;break;case 14:Rx=AZe;break;case 2:Rx=
AZf;break;case 1:Rx=AZg;break;case 3:Rx=AZh;break;case 4:Rx=AZi;break;case 5:Rx=
AZj;break;case 6:Rx=AZk;break;case 7:Rx=AZl;break;case 8:Rx=AZm;break;case 9:Rx=
AZn;break;case 10:Rx=AZo;break;case 11:Rx=AIA;break;case 12:Rx=Aaf;break;case 13:
Rx=AZp;break;default:throw new Error(AyB+BcJ.toFixed());}return Rx;},_Init:function(
aArg){C.EnumToString._Init.call(this,aArg);this.__proto__=C.AnimalListContentToString;
},_className:"Device::AnimalListContentToString"};C.GenderFilterCriterion={A5:0,
Abi:function(){var Aw=A._NewObject(C.GenderFilterCriterion,0);Aw.E_(this);return Aw;
},E_:function(AI){C.FilterCriterion.E_.call(this,AI);var Aw=(C.GenderFilterCriterion.
isPrototypeOf(AI)?AI:null);if(!!Aw)this.A5=Aw.A5;},_Init:function(aArg){C.FilterCriterion.
_Init.call(this,aArg);this.__proto__=C.GenderFilterCriterion;},_className:"Device::GenderFilterCriterion"
};C.AnimalTypeFilterCriterion={A5:0,Abi:function(){var Aw=A._NewObject(C.AnimalTypeFilterCriterion
,0);Aw.E_(this);return Aw;},E_:function(AI){C.FilterCriterion.E_.call(this,AI);var
Aw=(C.AnimalTypeFilterCriterion.isPrototypeOf(AI)?AI:null);if(!!Aw)this.A5=Aw.A5;
},Initialize:function(A4,Eb,A7,Qg){this.EJ=A4;this.Operator=Eb;this.A5=A7;this.YI=
Qg;return this;},_Init:function(aArg){C.FilterCriterion._Init.call(this,aArg);this.
__proto__=C.AnimalTypeFilterCriterion;},_className:"Device::AnimalTypeFilterCriterion"
};C.BDs={AuG:0,BDr:1,BE6:2,A$f:3,A5P:4,BGm:5,BDV:6,BGl:7,LinkTransponder:8,Tx:9,
Weighing:10,Calving:11,LinkNaisId:12,BFK:13,ClearBirthNoticePending:14,DeleteAnimal:
15,ScanNaisId:16,Edit:17,ClearPurchaseNoticePending:18,UNDEFINED:19};C.AutoRegistrationModeToString={
BS:function(A9){var Vg=A9;var Ny=A.jV;switch(Vg){case 0:Ny=A.aaR(A.acf.BhZ);break;
case 1:Ny=A.aaR(A.acf.BjL);break;case 2:Ny=A.aaR(A.acf.Off);break;default:throw new
Error(AZq+Vg.toFixed());}return Ny;},_Init:function(aArg){C.EnumToString._Init.call(
this,aArg);this.__proto__=C.AutoRegistrationModeToString;},_className:"Device::AutoRegistrationModeToString"
};C.AutoRegistrationMode={UserConfirmed:0,Background:1,Off:2,LAST:3};C.AssessmentFilterCriterion={
A5:0,Abi:function(){var Aw=A._NewObject(C.AssessmentFilterCriterion,0);Aw.E_(this
);return Aw;},E_:function(AI){C.FilterCriterion.E_.call(this,AI);var Aw=(C.AssessmentFilterCriterion.
isPrototypeOf(AI)?AI:null);if(!!Aw)this.A5=Aw.A5;},Initialize:function(A4,Eb,A7,
Qg){this.EJ=A4;this.Operator=Eb;this.A5=A7;this.YI=Qg;return this;},_Init:function(
aArg){C.FilterCriterion._Init.call(this,aArg);this.__proto__=C.AssessmentFilterCriterion;
},_className:"Device::AssessmentFilterCriterion"};C.D9={AdV:0,Temperature:1,Afv:
2,Rating:3,LAST:4};C.FactoryResetScope={DeviceAndAnimalData:0,AnimalDataOnly:1,DeviceDataOnly:
2,LAST:3};C.FactoryResetScopeToString={BS:function(A9){switch(A9){case 0:return A.
aaR(A.acf.DeviceAndAnimalData);case 1:return A.aaR(A.acf.AnimalDataOnly);case 2:
return A.aaR(A.acf.DeviceDataOnly);default:return AZr+A9.toFixed();}},_Init:function(
aArg){C.EnumToString._Init.call(this,aArg);this.__proto__=C.FactoryResetScopeToString;
},_className:"Device::FactoryResetScopeToString"};C.AVm={Ci:function(){A._GetAutoObject(
C.Device).Ar8(this.toString());},Init:function(aArg){var B;A.zX([this,this.Bfq],[
B=A._GetAutoObject(C.Device),B.A9l,B.BbB],0);this.Bfq(this);},Bfq:function(G){this.
E3(A._GetAutoObject(C.Device).AG2);A.we(this,0);},_Init:function(aArg){C.Int32ArrayWrapper.
_Init.call(this,aArg);this.__proto__=C.AVm;this.Zy(3);this.Init(aArg);},_className:
"Device::TemperaturesLowClass"};C.AVl={Init:function(aArg){var B;A.zX([this,this.
Bfo],[B=A._GetAutoObject(C.Device),B.A9k,B.BbA],0);this.Bfo(this);},Ci:function(
){A._GetAutoObject(C.Device).Ar7(this.toString());},Bfo:function(G){this.E3(A._GetAutoObject(
C.Device).AG1);A.we(this,0);},_Init:function(aArg){C.Int32ArrayWrapper._Init.call(
this,aArg);this.__proto__=C.AVl;this.Zy(3);this.Init(aArg);},_className:"Device::TemperaturesHighClass"
};C.AMI={Init:function(aArg){var B;A.zX([this,this.BeT],[B=A._GetAutoObject(C.Device
),B.A8A,B.Bbe],0);this.BeT(this);},BeT:function(G){this.E3(A._GetAutoObject(C.Device
).ABO);A.we(this,0);},_Init:function(aArg){C.Int32ArrayWrapper._Init.call(this,aArg
);this.__proto__=C.AMI;this.Zy(3);this.Init(aArg);},_className:"Device::AnimalTypesClass"
};C.UInt64FilterCriterion={A5:0,Abi:function(){var Aw=A._NewObject(C.UInt64FilterCriterion
,0);Aw.E_(this);return Aw;},E_:function(AI){C.FilterCriterion.E_.call(this,AI);var
Aw=(C.UInt64FilterCriterion.isPrototypeOf(AI)?AI:null);if(!!Aw)this.A5=Aw.A5;},Initialize:
function(A4,Eb,A7,Qg){this.EJ=A4;this.Operator=Eb;this.A5=A7;this.YI=Qg;return this;
},_Init:function(aArg){C.FilterCriterion._Init.call(this,aArg);this.__proto__=C.
UInt64FilterCriterion;},_className:"Device::UInt64FilterCriterion"};C.BooleanToAssignedUnassignedString={
BS:function(A9){switch(A9){case 0:return A.aaR(A.acf.Akn);case 1:return A.aaR(A.
acf.Bhm);default:return Ays+A9.toFixed();}},_Init:function(aArg){C.EnumToString.
_Init.call(this,aArg);this.__proto__=C.BooleanToAssignedUnassignedString;},_className:
"Device::BooleanToAssignedUnassignedString"};C.C8={UNDEFINED:0,AT:1,BA:2,BE:3,BDx:
4,BDM:5,BDN:6,BDO:7,BDP:8,BDQ:9,BD0:10,BD1:11,BD$:12,BEa:13,BEp:14,FR:15,GR:16,BEB:
17,BEC:18,BEJ:19,BEK:20,BEP:21,BEQ:22,BER:23,BES:24,BEY:25,BFa:26,BFb:27,BFq:28,
BFr:29,BFI:30,BFJ:31,BF1:32,BF2:33,BF3:34,BGf:35,BGg:36,BGz:37,A$Z:38,BGB:39,LAST:
40};C.CountryToString={BS:function(A9){var J8=A9;var FH=A.jV;switch(J8){case 1:FH=
A.aaR(A.acm.Bhx);break;case 2:FH=A.aaR(A.acm.BhK);break;case 3:FH=A.aaR(A.acm.BhE
);break;case 4:FH=A.aaR(A.acm.BhM);break;case 5:FH=A.aaR(A.acm.BhP);break;case 6:
FH=A.aaR(A.acm.Bp3);break;case 7:FH=A.aaR(A.acm.BhS);break;case 8:FH=A.aaR(A.acm.
Bh8);break;case 9:FH=A.aaR(A.acm.Bh9);break;case 10:FH=A.aaR(A.acm.Bi$);break;case
11:FH=A.aaR(A.acm.Bie);break;case 12:FH=A.aaR(A.acm.BiQ);break;case 13:FH=A.aaR(
A.acm.Bpw);break;case 14:FH=A.aaR(A.acm.BiZ);break;case 15:FH=A.aaR(A.acm.Bi7);break;
case 16:FH=A.aaR(A.acm.BjB);break;case 17:FH=A.aaR(A.acm.Bh6);break;case 18:FH=A.
aaR(A.acm.BjI);break;case 19:FH=A.aaR(A.acm.BjR);break;case 20:FH=A.aaR(A.acm.Bj4
);break;case 21:FH=A.aaR(A.acm.Bj6);break;case 22:FH=A.aaR(A.acm.Bkf);break;case
23:FH=A.aaR(A.acm.Bki);break;case 24:FH=A.aaR(A.acm.Bkc);break;case 25:FH=A.aaR(
A.acm.Bkk);break;case 26:FH=A.aaR(A.acm.BkA);break;case 27:FH=A.aaR(A.acm.BkH);break;
case 28:FH=A.aaR(A.acm.Boq);break;case 29:FH=A.aaR(A.acm.Bor);break;case 30:FH=A.
aaR(A.acm.BoV);break;case 31:FH=A.aaR(A.acm.BoX);break;case 32:FH=A.aaR(A.acm.Bp2
);break;case 33:FH=A.aaR(A.acm.Bpv);break;case 34:FH=A.aaR(A.acm.Bpu);break;case
35:FH=A.aaR(A.acm.Bqs);break;case 36:FH=A.aaR(A.acm.Bqa);break;case 37:FH=A.aaR(
A.acm.Bqw);break;case 38:FH=A.aaR(A.acm.A$Z);break;case 39:FH=A.aaR(A.acm.Bqv);break;
case 0:FH=Aow;break;default:throw new Error(Aol+J8.toFixed());}return FH;},Lv:function(
A9){var J8=A9;var BM=A.jV;switch(J8){case 1:BM=S_;break;case 2:BM=Z3;break;case 3:
BM=US;break;case 4:BM=W5;break;case 5:BM=It;break;case 6:BM=Aab;break;case 7:BM=
UT;break;case 8:BM=Z5;break;case 9:BM=W7;break;case 10:BM=O5;break;case 11:BM=Z6;
break;case 12:BM=Z7;break;case 13:BM=Aaa;break;case 14:BM=UU;break;case 15:BM=W8;
break;case 16:BM=Z8;break;case 17:BM=W6;break;case 18:BM=O6;break;case 19:BM=Rn;
break;case 20:BM=W9;break;case 21:BM=W_;break;case 22:BM=Z9;break;case 23:BM=Z_;
break;case 24:BM=UV;break;case 25:BM=W$;break;case 26:BM=Xa;break;case 27:BM=S$;
break;case 28:BM=UW;break;case 29:BM=UX;break;case 30:BM=AcM;break;case 31:BM=Ta;
break;case 32:BM=Xb;break;case 33:BM=AfB;break;case 34:BM=Z$;break;case 35:BM=Xc;
break;case 36:BM=Z4;break;case 37:BM=AhX;break;case 38:BM=KZ;break;case 39:BM=AcN;
break;case 0:BM=Aow;break;default:throw new Error(Aol+J8.toFixed());}return BM;}
,_Init:function(aArg){C.EnumToString._Init.call(this,aArg);this.__proto__=C.CountryToString;
},_className:"Device::CountryToString"};C.EaseOfDelivery={Unspecified:0,Easy:1,Moderate:
2,Difficult:3,Surgery:4,LAST:5};C.EaseOfDeliveryToString={BS:function(A9){var Bdh=
A9;var AtQ=A.jV;switch(Bdh){case 0:AtQ=A.aaR(A.acf.Unspecified);break;case 1:AtQ=
A.aaR(A.acf.Easy);break;case 2:AtQ=A.aaR(A.acf.Moderate);break;case 3:AtQ=A.aaR(
A.acf.Difficult);break;case 4:AtQ=A.aaR(A.acf.Surgery);break;default:throw new Error(
AZs+Bdh.toFixed());}return AtQ;},_Init:function(aArg){C.EnumToString._Init.call(
this,aArg);this.__proto__=C.EaseOfDeliveryToString;},_className:"Device::EaseOfDeliveryToString"
};C.WhereAbouts={UNB:0,EZU:1,EMA:2,VZU:3,VMA:4,VIV:5,TOT:6,V48:7,V3T:8,MGE:9,VKB:
10,LAST:11};C.WhereAboutsToString={BS:function(A9){var Bha=A9;var AaP=A.jV;switch(
Bha){case 0:AaP=A.aaR(A.acf.Unknown);break;case 1:AaP=A.aaR(A.acf.BqF);break;case
2:AaP=A.aaR(A.acf.BqE);break;case 3:AaP=A.aaR(A.acf.BqN);break;case 4:AaP=A.aaR(
A.acf.BqM);break;case 5:AaP=A.aaR(A.acf.BqK);break;case 6:AaP=A.aaR(A.acf.BqH);break;
case 7:AaP=A.aaR(A.acf.BqJ);break;case 8:AaP=A.aaR(A.acf.BqI);break;case 9:AaP=A.
aaR(A.acf.BqG);break;case 10:AaP=A.aaR(A.acf.BqL);break;default:throw new Error(
AZt+Bha.toFixed());}return AaP;},_Init:function(aArg){C.EnumToString._Init.call(
this,aArg);this.__proto__=C.WhereAboutsToString;},_className:"Device::WhereAboutsToString"
};C.Breed={UNKNOWN:0,SBT:1,RBT:2,JER:3,BV:4,RVA:5,RV:6,RDN:7,DSN:8,FL:9,GV:10,PIN:
11,HIN:12,MW:13,VW:14,LMP:15,DBV:16,AS:17,VR:18,CHA:19,LIM:20,WBB:21,BA:22,MA:23
,SAL:24,MON:25,AU:26,PIE:27,CHI:28,ROM:29,MAR:30,WP:31,BB:32,DA:33,AA:34,HE:35,SH:
36,HLD:37,WB:38,GAL:39,LR:40,BGA:41,LG:42,BRA:43,NOR:44,UST:45,ZEB:46,GRV:47,DEX:
48,WGA:49,LH:50,SD:51,FR:52,TUX:53,TLM:54,FLF:55,UCK:56,BLA:57,WIT:58,LAK:59,RHV:
60,AT:61,GR:62,PIF:63,PS:64,GVF:65,BVF:66,RBF:67,HWF:68,MWF:69,VWF:70,LPF:71,BRN:
72,BAZ:73,AO:74,BE:75,WL:76,BIS:77,YAK:78,SON:79,TAU:80,IND:81,TIN:82,WAG:83,XFF:
84,XFM:85,XMM:86,EVO:87,BLH:88,TLH:89,MGR:90,WSH:91,MUR:92,EBS:93,ERI:94,PAR:95,
XZF:96,XZM:97,XZZ:98,LAST:99};C.BreedToString={BS:function(A9){var Bv=A9;var BH=
A.jV;switch(Bv){case 0:BH=A.aaR(A.acf.Unknown);break;case 1:BH=A.aaR(A.ack.SBT);
break;case 2:BH=A.aaR(A.ack.RBT);break;case 3:BH=A.aaR(A.ack.JER);break;case 4:BH=
A.aaR(A.ack.BV);break;case 5:BH=A.aaR(A.ack.RVA);break;case 6:BH=A.aaR(A.ack.RV);
break;case 7:BH=A.aaR(A.ack.RDN);break;case 8:BH=A.aaR(A.ack.DSN);break;case 9:BH=
A.aaR(A.ack.FL);break;case 10:BH=A.aaR(A.ack.GV);break;case 11:BH=A.aaR(A.ack.PIN
);break;case 12:BH=A.aaR(A.ack.HIN);break;case 13:BH=A.aaR(A.ack.MW);break;case 14:
BH=A.aaR(A.ack.VW);break;case 15:BH=A.aaR(A.ack.LMP);break;case 16:BH=A.aaR(A.ack.
DBV);break;case 17:BH=A.aaR(A.ack.AS);break;case 18:BH=A.aaR(A.ack.VR);break;case
19:BH=A.aaR(A.ack.CHA);break;case 20:BH=A.aaR(A.ack.LIM);break;case 21:BH=A.aaR(
A.ack.WBB);break;case 22:BH=A.aaR(A.ack.BA);break;case 23:BH=A.aaR(A.ack.MA);break;
case 24:BH=A.aaR(A.ack.SAL);break;case 25:BH=A.aaR(A.ack.MON);break;case 26:BH=A.
aaR(A.ack.AU);break;case 27:BH=A.aaR(A.ack.PIE);break;case 28:BH=A.aaR(A.ack.CHI
);break;case 29:BH=A.aaR(A.ack.ROM);break;case 30:BH=A.aaR(A.ack.MAR);break;case
31:BH=A.aaR(A.ack.WP);break;case 32:BH=A.aaR(A.ack.BB);break;case 33:BH=A.aaR(A.
ack.DA);break;case 34:BH=A.aaR(A.ack.AA);break;case 35:BH=A.aaR(A.ack.HE);break;
case 36:BH=A.aaR(A.ack.SH);break;case 37:BH=A.aaR(A.ack.HLD);break;case 38:BH=A.
aaR(A.ack.WB);break;case 39:BH=A.aaR(A.ack.GAL);break;case 40:BH=A.aaR(A.ack.LR);
break;case 41:BH=A.aaR(A.ack.BGA);break;case 42:BH=A.aaR(A.ack.LG);break;case 43:
BH=A.aaR(A.ack.BRA);break;case 44:BH=A.aaR(A.ack.NOR);break;case 45:BH=A.aaR(A.ack.
UST);break;case 46:BH=A.aaR(A.ack.ZEB);break;case 47:BH=A.aaR(A.ack.GRV);break;case
48:BH=A.aaR(A.ack.DEX);break;case 49:BH=A.aaR(A.ack.WGA);break;case 50:BH=A.aaR(
A.ack.LH);break;case 51:BH=A.aaR(A.ack.SD);break;case 52:BH=A.aaR(A.ack.FR);break;
case 53:BH=A.aaR(A.ack.TUX);break;case 54:BH=A.aaR(A.ack.TLM);break;case 55:BH=A.
aaR(A.ack.FLF);break;case 56:BH=A.aaR(A.ack.UCK);break;case 57:BH=A.aaR(A.ack.BLA
);break;case 58:BH=A.aaR(A.ack.WIT);break;case 59:BH=A.aaR(A.ack.LAK);break;case
60:BH=A.aaR(A.ack.RHV);break;case 61:BH=A.aaR(A.ack.AT);break;case 62:BH=A.aaR(A.
ack.GR);break;case 63:BH=A.aaR(A.ack.PIF);break;case 64:BH=A.aaR(A.ack.PS);break;
case 65:BH=A.aaR(A.ack.GVF);break;case 66:BH=A.aaR(A.ack.BVF);break;case 67:BH=A.
aaR(A.ack.RBF);break;case 68:BH=A.aaR(A.ack.HWF);break;case 69:BH=A.aaR(A.ack.MWF
);break;case 70:BH=A.aaR(A.ack.VWF);break;case 71:BH=A.aaR(A.ack.LPF);break;case
72:BH=A.aaR(A.ack.BRN);break;case 73:BH=A.aaR(A.ack.BAZ);break;case 74:BH=A.aaR(
A.ack.AO);break;case 75:BH=A.aaR(A.ack.BE);break;case 76:BH=A.aaR(A.ack.WL);break;
case 77:BH=A.aaR(A.ack.BIS);break;case 78:BH=A.aaR(A.ack.YAK);break;case 79:BH=A.
aaR(A.ack.SON);break;case 80:BH=A.aaR(A.ack.TAU);break;case 81:BH=A.aaR(A.ack.IND
);break;case 82:BH=A.aaR(A.ack.TIN);break;case 83:BH=A.aaR(A.ack.WAG);break;case
84:BH=A.aaR(A.ack.XFF);break;case 85:BH=A.aaR(A.ack.XFM);break;case 86:BH=A.aaR(
A.ack.XMM);break;case 87:BH=A.aaR(A.ack.EVO);break;case 88:BH=A.ack.BLH;break;case
89:BH=A.ack.TLH;break;case 90:BH=A.ack.MGR;break;case 91:BH=A.ack.WSH;break;case
92:BH=A.ack.MUR;break;case 93:BH=A.aaR(A.ack.EBS);break;case 94:BH=A.aaR(A.ack.ERI
);break;case 95:BH=A.aaR(A.ack.PAR);break;case 96:BH=A.aaR(A.ack.XZF);break;case
97:BH=A.aaR(A.ack.XZM);break;case 98:BH=A.aaR(A.ack.XZZ);break;default:throw new
Error(AZu+Bv.toFixed());}return BH;},_Init:function(aArg){C.EnumToString._Init.call(
this,aArg);this.__proto__=C.BreedToString;},_className:"Device::BreedToString"};
C.TI={timer:null,Q:null,Ec:0,Dx:0,JR:0,Pu:1000,PD:1000,Bw:false,Cx:false,B2:true
,Mg:function(G){var F;if(!this.timer)return;if(this.Ec<0){this.Dx=this.timer.Bs;
this.Ec=0;}var Av=(this.timer.Bs-this.Dx)|0;var Oq=this.Pu;var Hg=this.PD+this.Pu;
var LE=0;var Jl=this.Ec;if(!Jl&&(Av>=Oq)){Jl=1;Av=Av-Oq;}if((Jl>0)&&(Av>=Hg)){var
Ie=(Av/Hg)|0;Av=Av-(Ie*Hg);Jl=Jl+Ie;}if((Jl>2)&&!this.JR)Jl=1;if(Jl!==this.Ec){this.
Dx=this.timer.Bs-(((B=Av)<0)?B+0x100000000:B);this.Ec=Jl;}if(Jl>0)LE=this.PD;var
KE=(Jl>=this.JR)&&(this.JR>0);if(!!this.Q){if((!KE&&(Av>=LE))&&((F=this.Q,F[1].call(
F[0]))!==this.Cx))(F=this.Q,F[2].call(F[0],this.Cx));if((KE||((Av<LE)&&(Jl>0)))&&((
F=this.Q,F[1].call(F[0]))!==this.B2))(F=this.Q,F[2].call(F[0],this.B2));}if(KE)this.
Ar(false);},HN:function(E){if(E<0)E=0;this.JR=E;},Fr:function(E){if(E<100)E=100;
this.Pu=E;},Uo:function(E){if(E<0)E=0;this.PD=E;},Ar:function(E){if(this.Bw===E)
return;this.Bw=E;if(!E&&!!this.timer){A.z9([this,this.Mg],this.timer,0);this.timer=
null;}if(E){this.timer=A._GetAutoObject(A.acl.Aej);A.zV([this,this.Mg],this.timer
,0);this.Ec=-1;}},_Init:function(aArg){this.__proto__=C.TI;A.h7++;},_Done:function(
){this.__proto__=null;A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((
B=this.timer)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Q)&&((B=B[0])._cycle
!=D))B._Mark(B._cycle=D);if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null
,_cycle:0,_observers:null,_className:"Device::BoolEffect"};C.Ij={AnimalId:0,TransponderId:
1,BE1:2,BE0:3,BE4:4,BE3:5};C.Au7={BDv:0,BD4:1};C.AnimalIdGenerationMethodToString={
BS:function(A9){var Alu=A9;var AoZ=A.jV;switch(Alu){case 0:AoZ=A.aaR(A.acf.Uh);break;
case 1:AoZ=A.aaR(A.acf.Transponder);break;case 3:AoZ=(A.aaR(A.acf.Manual)+Oc)+A.
aaR(A.acf.Male);break;case 2:AoZ=(A.aaR(A.acf.Manual)+Oc)+A.aaR(A.acf.Female);break;
case 4:AoZ=(A.aaR(A.acf.Manual)+Oc)+A.aaR(A.acf.Unknown);break;case 5:AoZ=(A.aaR(
A.acf.Manual)+Oc)+Ate;break;default:throw new Error(Atf+Alu.toFixed());}return AoZ;
},_Init:function(aArg){C.EnumToString._Init.call(this,aArg);this.__proto__=C.AnimalIdGenerationMethodToString;
},_className:"Device::AnimalIdGenerationMethodToString"};C.DirectionOfCountingToString={
BS:function(A9){var AzG=A9;var A1Z=A.jV;switch(AzG){case 0:A1Z=Atg;break;case 1:
A1Z=Ath;break;default:throw new Error(AyC+AzG.toFixed());}return A1Z;},_Init:function(
aArg){C.EnumToString._Init.call(this,aArg);this.__proto__=C.DirectionOfCountingToString;
},_className:"Device::DirectionOfCountingToString"};C.EnumToIcon={AsK:function(A9
){throw new Error(As6+A9.toFixed());},AsL:function(A9){throw new Error(As6+A9.toFixed(
));},_Init:function(aArg){this.__proto__=C.EnumToIcon;A.h7++;},_Done:function(){
this.__proto__=null;A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((B=
this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:
"Device::EnumToIcon"};C.Aei={AsK:function(A9){return A.aaL(A.ach.AU$);},AsL:function(
A9){var AzG=A9;var RG=-1;switch(AzG){case 0:RG=3;break;case 1:RG=2;break;default:
throw new Error(Alk+AzG.toFixed());}return RG;},_Init:function(aArg){C.EnumToIcon.
_Init.call(this,aArg);this.__proto__=C.Aei;},_className:"Device::DirectionOfCountingToIcon"
};C.AdZ={AsK:function(A9){return A.aaL(A.ach.AU9);},AsL:function(A9){var Alu=A9;
var RG=-1;switch(Alu){case 0:RG=0;break;case 1:RG=6;break;case 3:RG=4;break;case
2:RG=5;break;case 4:RG=2;break;case 5:RG=3;break;default:throw new Error(Alk+Alu.
toFixed());}return RG;},_Init:function(aArg){C.EnumToIcon._Init.call(this,aArg);
this.__proto__=C.AdZ;},_className:"Device::AnimalIdGenerationMethodToIcon"};C.Pz={
UNDEFINED:0,SH:1,AO1:2,ARZ:3,AO0:4,A7Z:5,HE:6,A$d:7,A5v:8,AMT:9,AUC:10,BE:11,BB:
12,A7L:13,AUD:14,AUE:15,AVe:16};C.GermanStateToString={BS:function(A9){var Bp=A9;
var GF=A.jV;switch(Bp){case 1:GF=A.aaR(A.acp.SH);break;case 2:GF=A.aaR(A.acp.AO1
);break;case 3:GF=A.aaR(A.acp.ARZ);break;case 4:GF=A.aaR(A.acp.AO0);break;case 5:
GF=A.aaR(A.acp.A7Z);break;case 6:GF=A.aaR(A.acp.HE);break;case 7:GF=A.aaR(A.acp.
A$d);break;case 8:GF=A.aaR(A.acp.A5v);break;case 9:GF=A.aaR(A.acp.AMT);break;case
10:GF=A.aaR(A.acp.AUC);break;case 11:GF=A.aaR(A.acp.BE);break;case 12:GF=A.aaR(A.
acp.BB);break;case 13:GF=A.aaR(A.acp.A7L);break;case 14:GF=A.aaR(A.acp.AUD);break;
case 15:GF=A.aaR(A.acp.AUE);break;case 16:GF=A.aaR(A.acp.AVe);break;case 0:GF=Aow;
break;default:throw new Error(Ati+Bp.toFixed());}return GF;},Lv:function(A9){var
Bp=A9;var GF=A.jV;switch(Bp){case 1:GF=A.aaR(A.acp.BoY);break;case 2:GF=A.aaR(A.
acp.AO1);break;case 3:GF=A.aaR(A.acp.ARZ);break;case 4:GF=A.aaR(A.acp.AO0);break;
case 5:GF=A.aaR(A.acp.Bkx);break;case 6:GF=A.aaR(A.acp.HE);break;case 7:GF=A.aaR(
A.acp.BoA);break;case 8:GF=A.aaR(A.acp.BhA);break;case 9:GF=A.aaR(A.acp.AMT);break;
case 10:GF=A.aaR(A.acp.AUC);break;case 11:GF=A.aaR(A.acp.BE);break;case 12:GF=A.
aaR(A.acp.BB);break;case 13:GF=A.aaR(A.acp.Bkj);break;case 14:GF=A.aaR(A.acp.AUD
);break;case 15:GF=A.aaR(A.acp.AUE);break;case 16:GF=A.aaR(A.acp.AVe);break;case
0:GF=Aow;break;default:throw new Error(Ati+Bp.toFixed());}return GF;},Bqf:function(
A9){var Bp=A9;var Gi=-1;switch(Bp){case 0:Gi=0;break;case 1:Gi=1;break;case 2:Gi=
2;break;case 3:Gi=3;break;case 4:Gi=4;break;case 5:Gi=5;break;case 6:Gi=6;break;
case 7:Gi=7;break;case 8:Gi=8;break;case 9:Gi=9;break;case 10:Gi=10;break;case 11:
Gi=11;break;case 12:Gi=12;break;case 13:Gi=13;break;case 14:Gi=14;break;case 15:
Gi=15;break;case 16:Gi=16;break;default:throw new Error(Ati+Bp.toFixed());}return Gi;
},Bqg:function(A9){var Bp=A9;var Gi=A.jV;switch(Bp){case 1:Gi=AZv;break;case 2:Gi=
AZw;break;case 3:Gi=AZx;break;case 4:Gi=AZy;break;case 5:Gi=AZz;break;case 6:Gi=
AZA;break;case 7:Gi=AZB;break;case 8:Gi=AZC;break;case 9:Gi=AZD;break;case 10:Gi=
AZE;break;case 11:Gi=US;break;case 12:Gi=AZF;break;case 13:Gi=AZG;break;case 14:
Gi=AZH;break;case 15:Gi=AZI;break;case 16:Gi=AyD;break;case 0:Gi=Aow;break;default:
throw new Error(Ati+Bp.toFixed());}return Gi;},_Init:function(aArg){C.EnumToString.
_Init.call(this,aArg);this.__proto__=C.GermanStateToString;},_className:"Device::GermanStateToString"
};C.EartagNrAssignmentMode={OneSingleRange:0,TwoNumberRanges:1,LAST:2};C.EartagNrAssignmentModeToString={
Lv:function(A9){var Vg=A9;var Ny=A.jV;switch(Vg){case 0:Ny=AZJ;break;case 1:Ny=AyE;
break;default:throw new Error(Atj+Vg.toFixed());}return Ny;},BS:function(A9){var
Vg=A9;var Ny=A.jV;switch(Vg){case 0:Ny=A.aaR(A.acf.Boj);break;case 1:Ny=A.aaR(A.
acf.Bqu);break;default:throw new Error(Atj+Vg.toFixed());}return Ny;},_Init:function(
aArg){C.EnumToString._Init.call(this,aArg);this.__proto__=C.EartagNrAssignmentModeToString;
},_className:"Device::EartagNrAssignmentModeToString"};C.BDo={BFg:0,BE8:1,BEj:2,
BEk:3,BEl:4,BGh:5};C.EnumToCodeset={AmG:function(Ah6){throw new Error(AZK+Ah6.toFixed(
));},Ael:function(A9){throw new Error(As6+A9.toFixed());},AqU:function(){A.ab5("%s"
,AIB);return 0;},H3:function(){A.ab5("%s",AIB);return 0;},_Init:function(aArg){this.
__proto__=C.EnumToCodeset;A.h7++;},_Done:function(){this.__proto__=null;A.h7--;}
,_ReInit:function(){},_Mark:function(D){var B;if((B=this.I)&&(B._cycle!=D))B._Mark(
B._cycle=D);},I:null,_cycle:0,_observers:null,_className:"Device::EnumToCodeset"
};C.M5={AmG:function(Ah6){var Bv;switch(Ah6){case 1:Bv=1;break;case 2:Bv=2;break;
case 3:Bv=3;break;case 4:Bv=4;break;case 5:Bv=5;break;case 6:Bv=6;break;case 9:Bv=
7;break;case 10:Bv=8;break;case 11:Bv=9;break;case 12:Bv=10;break;case 13:Bv=11;
break;case 14:Bv=12;break;case 15:Bv=13;break;case 16:Bv=14;break;case 17:Bv=15;
break;case 18:Bv=16;break;case 19:Bv=17;break;case 20:Bv=18;break;case 21:Bv=19;
break;case 22:Bv=20;break;case 23:Bv=21;break;case 24:Bv=22;break;case 25:Bv=23;
break;case 26:Bv=24;break;case 27:Bv=25;break;case 28:Bv=26;break;case 31:Bv=27;
break;case 32:Bv=28;break;case 33:Bv=29;break;case 34:Bv=30;break;case 35:Bv=31;
break;case 36:Bv=32;break;case 41:Bv=33;break;case 42:Bv=34;break;case 43:Bv=35;
break;case 44:Bv=36;break;case 45:Bv=37;break;case 46:Bv=38;break;case 47:Bv=39;
break;case 48:Bv=40;break;case 49:Bv=41;break;case 50:Bv=42;break;case 51:Bv=43;
break;case 52:Bv=44;break;case 53:Bv=45;break;case 54:Bv=46;break;case 55:Bv=47;
break;case 56:Bv=48;break;case 57:Bv=49;break;case 58:Bv=50;break;case 59:Bv=51;
break;case 60:Bv=52;break;case 61:Bv=53;break;case 65:Bv=54;break;case 66:Bv=55;
break;case 67:Bv=56;break;case 68:Bv=57;break;case 69:Bv=58;break;case 70:Bv=59;
break;case 71:Bv=60;break;case 72:Bv=61;break;case 73:Bv=62;break;case 74:Bv=63;
break;case 75:Bv=64;break;case 76:Bv=65;break;case 77:Bv=66;break;case 78:Bv=67;
break;case 79:Bv=68;break;case 80:Bv=69;break;case 81:Bv=70;break;case 82:Bv=71;
break;case 83:Bv=72;break;case 84:Bv=73;break;case 85:Bv=74;break;case 86:Bv=75;
break;case 87:Bv=76;break;case 88:Bv=77;break;case 89:Bv=78;break;case 90:Bv=79;
break;case 91:Bv=80;break;case 92:Bv=81;break;case 93:Bv=82;break;case 94:Bv=83;
break;case 97:Bv=84;break;case 98:Bv=85;break;case 99:Bv=86;break;case 100:Bv=87;
break;case 101:Bv=88;break;case 102:Bv=89;break;case 103:Bv=90;break;case 104:Bv=
91;break;case 105:Bv=92;break;case 106:Bv=93;break;case 107:Bv=94;break;case 108:
Bv=95;break;case 109:Bv=96;break;case 110:Bv=97;break;case 111:Bv=98;break;default:
Bv=0;}return Bv;},Ael:function(A9){var Bv=A9;var BJ=0;switch(Bv){case 0:BJ=0;break;
case 1:BJ=1;break;case 2:BJ=2;break;case 3:BJ=3;break;case 4:BJ=4;break;case 5:BJ=
5;break;case 6:BJ=6;break;case 7:BJ=9;break;case 8:BJ=10;break;case 9:BJ=11;break;
case 10:BJ=12;break;case 11:BJ=13;break;case 12:BJ=14;break;case 13:BJ=15;break;
case 14:BJ=16;break;case 15:BJ=17;break;case 16:BJ=18;break;case 17:BJ=19;break;
case 18:BJ=20;break;case 19:BJ=21;break;case 20:BJ=22;break;case 21:BJ=23;break;
case 22:BJ=24;break;case 23:BJ=25;break;case 24:BJ=26;break;case 25:BJ=27;break;
case 26:BJ=28;break;case 27:BJ=31;break;case 28:BJ=32;break;case 29:BJ=33;break;
case 30:BJ=34;break;case 31:BJ=35;break;case 32:BJ=36;break;case 33:BJ=41;break;
case 34:BJ=42;break;case 35:BJ=43;break;case 36:BJ=44;break;case 37:BJ=45;break;
case 38:BJ=46;break;case 39:BJ=47;break;case 40:BJ=48;break;case 41:BJ=49;break;
case 42:BJ=50;break;case 43:BJ=51;break;case 44:BJ=52;break;case 45:BJ=53;break;
case 46:BJ=54;break;case 47:BJ=55;break;case 48:BJ=56;break;case 49:BJ=57;break;
case 50:BJ=58;break;case 51:BJ=59;break;case 52:BJ=60;break;case 53:BJ=61;break;
case 54:BJ=65;break;case 55:BJ=66;break;case 56:BJ=67;break;case 57:BJ=68;break;
case 58:BJ=69;break;case 59:BJ=70;break;case 60:BJ=71;break;case 61:BJ=72;break;
case 62:BJ=73;break;case 63:BJ=74;break;case 64:BJ=75;break;case 65:BJ=76;break;
case 66:BJ=77;break;case 67:BJ=78;break;case 68:BJ=79;break;case 69:BJ=80;break;
case 70:BJ=81;break;case 71:BJ=82;break;case 72:BJ=83;break;case 73:BJ=84;break;
case 74:BJ=85;break;case 75:BJ=86;break;case 76:BJ=87;break;case 77:BJ=88;break;
case 78:BJ=89;break;case 79:BJ=90;break;case 80:BJ=91;break;case 81:BJ=92;break;
case 82:BJ=93;break;case 83:BJ=94;break;case 84:BJ=97;break;case 85:BJ=98;break;
case 86:BJ=99;break;case 87:BJ=100;break;case 88:BJ=101;break;case 89:BJ=102;break;
case 90:BJ=103;break;case 91:BJ=104;break;case 92:BJ=105;break;case 93:BJ=106;break;
case 94:BJ=107;break;case 95:BJ=108;break;case 96:BJ=109;break;case 97:BJ=110;break;
case 98:BJ=111;break;default:throw new Error(AZL+Bv.toFixed());}return BJ;},AqU:
function(){return 0;},H3:function(){return 111;},_Init:function(aArg){C.EnumToCodeset.
_Init.call(this,aArg);this.__proto__=C.M5;},_className:"Device::BreedToHitCodeset"
};C.ReasonOfLeaving={Unknown:0,A$J:1,RP:2,A_8:3,A7n:4,BFp:5,A$0:6,A7V:7,A5O:8,A_4:
9,A7T:10,A5S:11,BFF:12,BFG:13,LAST:14};C.ReasonOfLeavingToString={BS:function(A9
){var AdF=A9;var Tr=A.jV;switch(AdF){case 0:Tr=A.aaR(A.acf.Unknown);break;case 1:
Tr=A.aaR(A.acf.A$J);break;case 2:Tr=A.aaR(A.acf.RP);break;case 3:Tr=A.aaR(A.acf.
A_8);break;case 4:Tr=A.aaR(A.acf.A7n);break;case 5:Tr=A.aaR(A.acf.Bok);break;case
6:Tr=A.aaR(A.acf.A$0);break;case 7:Tr=A.aaR(A.acf.A7V);break;case 8:Tr=A.aaR(A.acf.
A5O);break;case 9:Tr=A.aaR(A.acf.A_4);break;case 10:Tr=A.aaR(A.acf.A7T);break;case
11:Tr=A.aaR(A.acf.A5S);break;case 12:Tr=A.aaR(A.acf.Bov);break;case 13:Tr=A.aaR(
A.acf.Bou);break;default:throw new Error(AIC+AdF.toFixed());}return Tr;},_Init:function(
aArg){C.EnumToString._Init.call(this,aArg);this.__proto__=C.ReasonOfLeavingToString;
},_className:"Device::ReasonOfLeavingToString"};C.AhC={AmG:function(Ah6){var Pi;
switch(Ah6){case 1:Pi=1;break;case 2:Pi=2;break;case 3:Pi=3;break;case 4:Pi=4;break;
case 5:Pi=5;break;case 6:Pi=6;break;case 7:Pi=7;break;case 8:Pi=8;break;case 9:Pi=
9;break;case 10:Pi=10;break;case 11:Pi=11;break;case 12:Pi=12;break;case 13:Pi=13;
break;default:Pi=0;}return Pi;},Ael:function(A9){var Pi=A9;var Jk=0;switch(Pi){case
0:Jk=0;break;case 2:Jk=2;break;case 8:Jk=8;break;case 11:Jk=11;break;case 4:Jk=4;
break;case 10:Jk=10;break;case 7:Jk=7;break;case 5:Jk=5;break;case 9:Jk=9;break;
case 3:Jk=3;break;case 12:Jk=12;break;case 13:Jk=13;break;case 1:Jk=1;break;case
6:Jk=6;break;default:throw new Error(AID+Pi.toFixed());}return Jk;},AqU:function(
){return 0;},H3:function(){return 13;},_Init:function(aArg){C.EnumToCodeset._Init.
call(this,aArg);this.__proto__=C.AhC;},_className:"Device::ReasonOfLeavingToCodeset"
};C.KY={AmG:function(Ah6){var K_;switch(Ah6){case 1:K_=1;break;case 2:K_=2;break;
case 3:K_=3;break;case 4:K_=4;break;case 5:K_=5;break;case 6:K_=6;break;case 7:K_=
7;break;case 8:K_=8;break;case 9:K_=9;break;case 10:K_=10;break;default:K_=0;}return K_;
},Ael:function(A9){var K_=A9;var Jk=0;switch(K_){case 0:Jk=0;break;case 2:Jk=2;break;
case 1:Jk=1;break;case 9:Jk=9;break;case 6:Jk=6;break;case 8:Jk=8;break;case 7:Jk=
7;break;case 5:Jk=5;break;case 10:Jk=10;break;case 4:Jk=4;break;case 3:Jk=3;break;
default:throw new Error(AID+K_.toFixed());}return Jk;},AqU:function(){return 0;}
,H3:function(){return 10;},_Init:function(aArg){C.EnumToCodeset._Init.call(this,
aArg);this.__proto__=C.KY;},_className:"Device::WhereAboutsToCodeset"};C.AmO={_Init:
function(aArg){this.__proto__=C.AmO;A.h7++;},_Done:function(){this.__proto__=null;
A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((B=this.I)&&(B._cycle!=
D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:"Device::EmptyClass"
};C.CalfDeregistrationsTableFields={Year:0,Deregistrations:1,Deaths:2};C.CalfDeregistrations={
Deregistrations:0,Deaths:0,Year:0,E3:function(Ad,AH){var HF=C.Row.E3.call(this,Ad
,AH);if(HF&&!!AH){this.AkH(AH.CF(Ad,0));this.AwE(AH.CF(Ad,1));this.AwD(AH.CF(Ad,
2));}return HF;},Ci:function(AH){var HF=C.Row.Ci.call(this,AH);if(HF&&!!AH){var Jo=
AH.Oz();if(Jo<=0)A.ab5("%s",Xe);else{if(this.Am7())this.CL=AH.YF();AH.Ho(this.CL
,0,this.Year);AH.Ho(this.CL,1,this.Deregistrations);AH.Ho(this.CL,2,this.Deaths);
AH.OB(Jo);}}return HF;},Gr:function(){C.Row.Gr.call(this);this.AkH(-1);},E5:function(
){C.Row.E5.call(this);this.AkH(0);this.AwE(0);this.AwD(0);},AwE:function(E){if(this.
Deregistrations===E)return;this.Deregistrations=E;A.abo([this,this.Bk_,this.AwE]
,0);},AwD:function(E){if(this.Deaths===E)return;this.Deaths=E;A.abo([this,this.Bk8
,this.AwD],0);},AkH:function(E){if(this.Year===E)return;this.Year=E;A.abo([this,
this.ArC,this.AkH],0);},Bk_:function(){return this.Deregistrations;},Bk8:function(
){return this.Deaths;},ArC:function(){return this.Year;},_Init:function(aArg){C.
Row._Init.call(this,aArg);this.__proto__=C.CalfDeregistrations;this.TableId=4;},
_className:"Device::CalfDeregistrations"};C.Au5={Undefined:0,Display:1,A$c:2,A$p:
3,Bai:4,BED:5,BFS:6,BGs:7,BEZ:8,BDR:9,BDd:10,A6L:11,A$e:12,BGD:13,A7Y:14,BGG:15};
C.DeviceComponentToString={BS:function(A9){var Bda=A9;var Qn=A.jV;switch(Bda){case
0:Qn=AZM;break;case 10:Qn=A.aaR(A.acf.Bhb);break;case 9:Qn=A.aaR(A.acf.BhR);break;
case 1:Qn=A.aaR(A.acf.BiF);break;case 11:Qn=A.aaR(A.acf.A6L);break;case 5:Qn=A.aaR(
A.acf.BqO);break;case 8:Qn=A.aaR(A.acf.BiH);break;case 14:Qn=A.aaR(A.acf.A7Y);break;
case 2:Qn=A.aaR(A.acf.A$c);break;case 12:Qn=A.aaR(A.acf.A$e);break;case 6:Qn=A.aaR(
A.acf.Boz);break;case 3:Qn=A.aaR(A.acf.A$p);break;case 7:Qn=A.aaR(A.acf.BiI);break;
case 13:Qn=A.aaR(A.acf.Bih);break;case 15:Qn=A.aaR(A.acf.BqS);break;case 4:Qn=A.
aaR(A.acf.Bai);break;default:throw new Error(AZN+Bda.toFixed());}return Qn;},_Init:
function(aArg){C.EnumToString._Init.call(this,aArg);this.__proto__=C.DeviceComponentToString;
},_className:"Device::DeviceComponentToString"};C.AgT={AmG:function(Ah6){return Ah6;
},Ael:function(A9){return A9;},AqU:function(){return 0;},H3:function(){return 4;
},_Init:function(aArg){C.EnumToCodeset._Init.call(this,aArg);this.__proto__=C.AgT;
},_className:"Device::EaseOfDeliveryToCodeset"};C.AeU={AsK:function(A9){return A.
aaL(A.ach.AQb);},AsL:function(A9){var Bdm=A9;var RG=-1;switch(Bdm){case 0:RG=0;break;
case 1:RG=1;break;case 2:RG=2;break;default:throw new Error(AZO+Bdm.toFixed());}
return RG;},_Init:function(aArg){C.EnumToIcon._Init.call(this,aArg);this.__proto__=
C.AeU;},_className:"Device::MotherSelectionFilterModeToIcon"};C.WhereAboutsFilterCriterion={
A5:0,Abi:function(){var Aw=A._NewObject(C.WhereAboutsFilterCriterion,0);Aw.E_(this
);return Aw;},E_:function(AI){C.FilterCriterion.E_.call(this,AI);var Aw=(C.WhereAboutsFilterCriterion.
isPrototypeOf(AI)?AI:null);if(!!Aw)this.A5=Aw.A5;},Initialize:function(A4,Eb,A7,
Qg){this.EJ=A4;this.Operator=Eb;this.A5=A7;this.YI=Qg;return this;},_Init:function(
aArg){C.FilterCriterion._Init.call(this,aArg);this.__proto__=C.WhereAboutsFilterCriterion;
},_className:"Device::WhereAboutsFilterCriterion"};C.BE$={AN3:0,BDY:1,APM:2,LAST:
3};C.BGj={GL:0,AVU:1,Hk:2,Year:3,LAST:4};C.TimespanDaysToString={BS:function(A9){
var BgK=A9;var ABm=A.jV;switch(BgK){case 0:ABm=A.aaR(A.acf.A55);break;case 1:ABm=
A.aaR(A.acf.AVU);break;case 2:ABm=A.aaR(A.acf.Hk);break;case 3:ABm=A.aaR(A.acf.Year
);break;default:throw new Error(AZP+BgK.toFixed());}return ABm;},_Init:function(
aArg){C.EnumToString._Init.call(this,aArg);this.__proto__=C.TimespanDaysToString;
},_className:"Device::TimespanDaysToString"};C.ZZ={BFm:0,BD5:1,BEF:2,BEI:3,BEH:4
,BD6:5,BEG:6,LAST:7};C.USBStateToString={BS:function(A9){var Bg7=A9;var Bp=A.jV;
switch(Bg7){case 0:Bp=AZQ;break;case 2:Bp=AZR;break;case 1:Bp=AZS;break;case 5:Bp=
AIE;break;case 3:Bp=AZT;break;case 4:Bp=AZU;break;case 6:Bp=AZV;break;default:throw new
Error(AHY+Bg7.toFixed());}return Bp;},_Init:function(aArg){C.EnumToString._Init.
call(this,aArg);this.__proto__=C.USBStateToString;},_className:"Device::USBStateToString"
};C.AgN={BEE:0,BDp:1,BFH:2};C.AxH={ACr:A.jV,Timestamp:0,AEe:0,AEj:0,AGv:0,OnSetTimestamp:
function(E){if(this.Timestamp===E)return;this.Timestamp=E;},AFu:function(E){if(this.
AEe===E)return;this.AEe=E;},AFA:function(E){if(this.AEj===E)return;this.AEj=E;},
AFK:function(E){if(this.AGv===E)return;this.AGv=E;},AE$:function(E){if(this.ACr===
E)return;this.ACr=E;},_Init:function(aArg){this.__proto__=C.AxH;A.h7++;},_Done:function(
){this.__proto__=null;A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((
B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:
"Device::SoftwareVersionInformation"};C.Avz={Timestamp:0,ARN:0,ARO:0,AVx:0,AVy:0
,AVw:0,ARM:0,OnSetTimestamp:function(E){if(this.Timestamp===E)return;this.Timestamp=
E;},AFr:function(E){if(this.ARN===E)return;this.ARN=E;},AFs:function(E){if(this.
ARO===E)return;this.ARO=E;},AFY:function(E){if(this.AVx===E)return;this.AVx=E;},
AFZ:function(E){if(this.AVy===E)return;this.AVy=E;},AFX:function(E){if(this.AVw===
E)return;this.AVw=E;},AFq:function(E){if(this.ARM===E)return;this.ARM=E;},_Init:
function(aArg){this.__proto__=C.Avz;A.h7++;},_Done:function(){this.__proto__=null;
A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((B=this.I)&&(B._cycle!=
D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:"Device::HardwareVersionInformation"
};C.Aqs={Undefined:0,BEu:1,BDD:2};C.AgA={Manual:0,TransponderId:1,LAST:2};C.AnimalIdAutoGenerationMethodToString={
BS:function(A9){var BcH=A9;var A1t=A.jV;switch(BcH){case 0:A1t=A.aaR(A.acf.A5W);
break;case 1:A1t=A.aaR(A.acf.A6a);break;default:throw new Error(AZW+BcH.toFixed(
));}return A1t;},_Init:function(aArg){C.EnumToString._Init.call(this,aArg);this.
__proto__=C.AnimalIdAutoGenerationMethodToString;},_className:"Device::AnimalIdAutoGenerationMethodToString"
};C.Hk={A5F:0,AD5:1,ACO:2,AEf:3,ABQ:4,AEh:5,AD7:6,AD6:7,ABX:8,AGE:9,AEu:10,AEs:11
,ACz:12,LAST:13};C.MonthToString={BS:function(A9){var Beo=A9;var XD=A.jV;switch(
Beo){case 1:XD=A.aaR(A.act.AD5);break;case 2:XD=A.aaR(A.act.ACO);break;case 3:XD=
A.aaR(A.act.AEf);break;case 4:XD=A.aaR(A.act.ABQ);break;case 5:XD=A.aaR(A.act.AEh
);break;case 6:XD=A.aaR(A.act.AD7);break;case 7:XD=A.aaR(A.act.AD6);break;case 8:
XD=A.aaR(A.act.ABX);break;case 9:XD=A.aaR(A.act.AGE);break;case 10:XD=A.aaR(A.act.
AEu);break;case 11:XD=A.aaR(A.act.AEs);break;case 12:XD=A.aaR(A.act.ACz);break;default:
throw new Error(AZX+Beo.toFixed());}return XD;},_Init:function(aArg){C.EnumToString.
_Init.call(this,aArg);this.__proto__=C.MonthToString;},_className:"Device::MonthToString"
};C.VS={FileName:A.jV,AGx:0,EV:0,AgN:0,AU2:false,E5:function(){this.Fb(0);this.AgN=
1;this.FileName=A.jV;this.AGx=0;this.AU2=false;},Fb:function(E){if(this.EV===E)return;
this.EV=E;A.abo([this,this.SE,this.Fb],0);},SE:function(){return this.EV;},_Init:
function(aArg){this.__proto__=C.VS;A.h7++;},_Done:function(){this.__proto__=null;
A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((B=this.I)&&(B._cycle!=
D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:"Device::DataExportContext"
};C.AV1={Init:function(aArg){var B;A.zX([this,this.BfD],[B=A._GetAutoObject(C.Device
),B.A9x,B.BbI],0);this.BfD(this);},Ci:function(){A._GetAutoObject(C.Device).Asb(
this.toString());},BfD:function(G){this.E3(A._GetAutoObject(C.Device).AHl);A.we(
this,0);},_Init:function(aArg){C.Int32ArrayWrapper._Init.call(this,aArg);this.__proto__=
C.AV1;this.Zy(3);this.Init(aArg);},_className:"Device::WeightGainsLowClass"};C.AV0={
Init:function(aArg){var B;A.zX([this,this.BfB],[B=A._GetAutoObject(C.Device),B.A9w
,B.BbH],0);this.BfB(this);},Ci:function(){A._GetAutoObject(C.Device).Asa(this.toString(
));},BfB:function(G){this.E3(A._GetAutoObject(C.Device).AHk);A.we(this,0);},_Init:
function(aArg){C.Int32ArrayWrapper._Init.call(this,aArg);this.__proto__=C.AV0;this.
Zy(3);this.Init(aArg);},_className:"Device::WeightGainsHighClass"};C.AV3={Init:function(
aArg){var B;A.zX([this,this.BfF],[B=A._GetAutoObject(C.Device),B.A9A,B.BbL],0);this.
BfF(this);},Ci:function(){A._GetAutoObject(C.Device).Asc(this.toString());},BfF:
function(G){this.E3(A._GetAutoObject(C.Device).AHo);A.we(this,0);},_Init:function(
aArg){C.Int32ArrayWrapper._Init.call(this,aArg);this.__proto__=C.AV3;this.Zy(3);
this.Init(aArg);},_className:"Device::WeightValuesBirthClass"};C.AVZ={Init:function(
aArg){var B;A.zX([this,this.Bfz],[B=A._GetAutoObject(C.Device),B.A9v,B.BbG],0);this.
Bfz(this);},Ci:function(){A._GetAutoObject(C.Device).Ar$(this.toString());},Bfz:
function(G){this.E3(A._GetAutoObject(C.Device).AHj);A.we(this,0);},_Init:function(
aArg){C.Int32ArrayWrapper._Init.call(this,aArg);this.__proto__=C.AVZ;this.Zy(3);
this.Init(aArg);},_className:"Device::WeightGainsAverageClass"};C.AMJ={Init:function(
aArg){var B;A.zX([this,this.BeU],[B=A._GetAutoObject(C.Device),B.A8B,B.Bbf],0);this.
BeU(this);},BeU:function(G){this.E3(A._GetAutoObject(C.Device).ABP);A.we(this,0);
},_Init:function(aArg){C.Int32ArrayWrapper._Init.call(this,aArg);this.__proto__=
C.AMJ;this.Zy(3);this.Init(aArg);},_className:"Device::AnimalTypesWeightGainsClass"
};C.BFc={BFf:0,BE5:1,BDX:2,BGE:3,Unknown:4};C.BDB={None:0,BFn:1,BFh:2,BFd:3,BFe:
4};C.BGx={A8b:0,Manual:1,TransponderId:2,NaisId:3,LAST:4};C.TransponderLinkageIdChangeMethodToString={
BS:function(A9){var BgP=A9;var ABo=A.jV;switch(BgP){case 0:ABo=A.aaR(A.acf.A8b);
break;case 1:ABo=A.aaR(A.acf.A5W);break;case 2:ABo=A.aaR(A.acf.A6a);break;case 3:
ABo=A.aaR(A.acf.Bif);break;default:throw new Error(AZY+BgP.toFixed());}return ABo;
},_Init:function(aArg){C.EnumToString._Init.call(this,aArg);this.__proto__=C.TransponderLinkageIdChangeMethodToString;
},_className:"Device::TransponderLinkageIdChangeMethodToString"};C.A_5={BBL:function(
AoK){var Ke=A.ab0(A.abV(AoK,15),0,10);var J8=A._GetAutoObject(C.Converter).S2(Ke
);if(!!J8){if(J8===10){if((AoK.length!==16)||!A._GetAutoObject(A.acj.VF).AVL(AoK
))return 0;else return Ke;}else return Ke;}else{J8=A._GetAutoObject(C.Converter).
S2(A._GetAutoObject(C.Device).PY);if(!!J8&&(J8===10)){if(!A._GetAutoObject(A.acj.
VF).AVL(AoK))return 0;if(AoK.length===12){var BcG=A.ab0(A.abV(AoK,10),0,10);var AKg=
A._GetAutoObject(C.Converter).Bqo(BcG);if((BcG>0)&&!!AKg)return(A._GetAutoObject(
C.Converter).Aqz(J8)*1000000000000)+A.ab0(A.abV(AoK,10),0,10);}}}return 0;},BfN:
function(J9){if((J9.length!==10)||!A._GetAutoObject(A.acj.VF).AVL(J9))return 0;var
AAQ=A._NewObject(A.Core.Bs,0);var A4a=false;var A4f=A.abW(J9,4,4);var AtX=A.wz(A4f
,0,10);if((AtX<2000)||(AtX>2100)){A4f=A.abV(J9,4);AtX=A.wz(A4f,0,10);A4a=true;}if((
AtX<2000)||(AtX>2100))return 0;AAQ.Year=AtX;var AK2;var AzY;if(A4a){AK2=A.abW(J9
,4,2);AzY=A.wz(AK2,0,10);}else{AK2=A.abW(J9,2,2);AzY=A.wz(AK2,0,10);}if((AzY<1)||(
AzY>12))return 0;AAQ.Ur(AzY);var AK1;var AzX;if(A4a){AK1=A.abW(J9,6,2);AzX=A.wz(
AK1,0,10);}else{AK1=A.abV(J9,2);AzX=A.wz(AK1,0,10);}if((AzX<1)||(AzX>AAQ.Zm()))return 0;
AAQ.Lq(AzX);return AAQ.JS();},_Init:function(aArg){this.__proto__=C.A_5;A.h7++;}
,_Done:function(){this.__proto__=null;A.h7--;},_ReInit:function(){},_Mark:function(
D){var B;if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:
null,_className:"Device::ParserClass"};C.AnM={_Init:function(){C.A_5._Init.call(
this,0);},_ReInit:function(){},_variants:function(){return this;},_this:null};C.
AnimalTableFieldsToString={BS:function(A9){var Aal=A9;var MR=A.jV;switch(Aal){case
14:MR=A.aaR(A.acf.Aft);break;case 32:MR=A.aaR(A.acf.Breed);break;case 4:MR=A.aaR(
A.acf.Aeg);break;case 28:MR=A.aaR(A.acf.A5K);break;case 33:MR=A.aaR(A.acf.AgK);break;
case 23:MR=A.aaR(A.acf.KJ);break;case 7:MR=A.aaR(A.acf.Afo);break;case 2:MR=A.aaR(
A.acf.P);break;case 0:MR=A.aaR(A.acf.GN);break;case 8:MR=A.aaR(A.acf.Alarm);break;
case 9:MR=A.aaR(A.acf.ACk);break;case 38:MR=A.aaR(A.acf.BiG);break;case 11:MR=A.
aaR(A.acf.Fever);break;case 29:MR=A.aaR(A.acf.ARB);break;case 18:MR=A.aaR(A.acf.
M7);break;case 26:MR=A.aaR(A.acf.Uh);break;case 22:MR=A.aaR(A.acf.Transponder);break;
case 1:MR=A.aaR(A.acf.GI);break;case 34:MR=A.aaR(A.acf.Jh);break;case 6:case 25:
case 27:case 10:case 37:case 12:case 17:case 5:case 3:case 35:case 36:case 15:case
16:case 24:case 31:case 20:case 30:case 21:case 19:case 13:MR=A.jV;break;default:
throw new Error(AZZ+A9.toFixed());}return MR;},_Init:function(aArg){C.EnumToString.
_Init.call(this,aArg);this.__proto__=C.AnimalTableFieldsToString;},_className:"Device::AnimalTableFieldsToString"
};C.AEc={Bg:0,BGb:1,LAST:2};C.ListViewScopeToString={BS:function(A9){var BAq=A9;
var A2S=A.jV;switch(BAq){case 0:A2S=A.aaR(A.acf.Bg);break;case 1:A2S=A.aaR(A.acf.
Bps);break;default:throw new Error(AIF+A9.toFixed());}return A2S;},_Init:function(
aArg){C.EnumToString._Init.call(this,aArg);this.__proto__=C.ListViewScopeToString;
},_className:"Device::ListViewScopeToString"};C.AHn={BG7:0,BG6:1,BG5:2,LAST:3};C.
WeightValuePrecisionToString={BS:function(A9){var BC$=A9;var ALE=A.jV;switch(BC$
){case 0:ALE=AZ0+A.aaR(A.acf.AAa);break;case 1:ALE=Atk+A.acf.AiF;break;case 2:ALE=
AZ1+A.acf.AiF;break;default:throw new Error(AZ2+A9.toFixed());}return ALE;},_Init:
function(aArg){C.EnumToString._Init.call(this,aArg);this.__proto__=C.WeightValuePrecisionToString;
},_className:"Device::WeightValuePrecisionToString"};C.AgF={BS:function(A9){var AK_=
A9;if(AK_===1)return A.aaR(A.acf.BjE);else return C.AnimalTypeToString.BS.call(this
,A9);},_Init:function(aArg){C.AnimalTypeToString._Init.call(this,aArg);this.__proto__=
C.AgF;},_className:"Device::AnimalTypeToStringHeifer"};C.Wk={RP:0,BFj:1,LAST:2};
C.MassDeregistrationCriterionToString={BS:function(A9){var BAt=A9;var A2X=A.jV;switch(
BAt){case 0:A2X=A.aaR(A.acf.BkK);break;case 1:A2X=A.aaR(A.acf.ASk);break;default:
throw new Error(Ayj+A9.toFixed());}return A2X;},_Init:function(aArg){C.EnumToString.
_Init.call(this,aArg);this.__proto__=C.MassDeregistrationCriterionToString;},_className:
"Device::MassDeregistrationCriterionToString"};C.UInt64PartialFilterCriterion={A5:
A.jV,Zk:0,OD:0,Abi:function(){var Aw=A._NewObject(C.UInt64PartialFilterCriterion
,0);Aw.E_(this);return Aw;},E_:function(AI){C.FilterCriterion.E_.call(this,AI);var
Aw=(C.UInt64PartialFilterCriterion.isPrototypeOf(AI)?AI:null);if(!!Aw){this.A5=Aw.
A5;this.Zk=Aw.Zk;this.OD=Aw.OD;}},Initialize:function(A4,Eb,A7,Atx,AI9,Qg){this.
EJ=A4;this.Operator=Eb;this.A5=A7;this.YI=Qg;this.Zk=Atx;this.OD=AI9;return this;
},_Init:function(aArg){C.FilterCriterion._Init.call(this,aArg);this.__proto__=C.
UInt64PartialFilterCriterion;},_className:"Device::UInt64PartialFilterCriterion"
};C.BD2={Idle:0,BFO:1,BFZ:2,BGe:3,Error:4};C.A$7={Asj:0,AsQ:0,ZZ:0,A_R:function(
E){if(this.ZZ===E)return;this.ZZ=E;A.abo([this,this.BlU,this.A_R],0);},A_T:function(
E){if(this.AsQ===E)return;this.AsQ=E;A.abo([this,this.BlW,this.A_T],0);},A_x:function(
E){if(this.Asj===E)return;this.Asj=E;A.abo([this,this.Blw,this.A_x],0);},BlU:function(
){return this.ZZ;},BlW:function(){return this.AsQ;},Blw:function(){return this.Asj;
},_Init:function(aArg){this.__proto__=C.A$7;A.h7++;},_Done:function(){this.__proto__=
null;A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((B=this.I)&&(B._cycle
!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:"Device::UsbDevice"
};
C._Init=function(){C.Int32FilterCriterion.__proto__=C.FilterCriterion;C.StringFilterCriterion.
__proto__=C.FilterCriterion;C.Table.__proto__=C.ITable;C.Animal.__proto__=C.Row;
C.Rating.__proto__=C.Row;C.HelperClass.__proto__=C.AmO;C.BoolFilterCriterion.__proto__=
C.FilterCriterion;C.UInt32FilterCriterion.__proto__=C.FilterCriterion;C.ScreenTypeToString.
__proto__=C.EnumToString;C.OverlayMenuToString.__proto__=C.EnumToString;C.ScanStateToString.
__proto__=C.EnumToString;C.MeasureStateToString.__proto__=C.EnumToString;C.TemperatureUnitToString.
__proto__=C.EnumToString;C.AnimalTypeToString.__proto__=C.EnumToString;C.LanguageToString.
__proto__=C.EnumToString;C.GenderToString.__proto__=C.EnumToString;C.BirthTypeToString.
__proto__=C.EnumToString;C.SyncStateToString.__proto__=C.EnumToString;C.RatedAttributeToString.
__proto__=C.EnumToString;C.AssesmentToString.__proto__=C.EnumToString;C.BooleanToYesNo.
__proto__=C.EnumToString;C.AnimalGroup.__proto__=C.Row;C.PopupIdToString.__proto__=
C.EnumToString;C.TransponderTypeToString.__proto__=C.EnumToString;C.TransponderProtocolToString.
__proto__=C.EnumToString;C.RatingModeToString.__proto__=C.EnumToString;C.MassUnitToString.
__proto__=C.EnumToString;C.ActionToString.__proto__=C.EnumToString;C.WeightRecordingModeToString.
__proto__=C.EnumToString;C.BooleanToAutoOnOff.__proto__=C.EnumToString;C.WeightRecordingScopeToString.
__proto__=C.EnumToString;C.AnimalListContentToString.__proto__=C.EnumToString;C.
GenderFilterCriterion.__proto__=C.FilterCriterion;C.AnimalTypeFilterCriterion.__proto__=
C.FilterCriterion;C.AutoRegistrationModeToString.__proto__=C.EnumToString;C.AssessmentFilterCriterion.
__proto__=C.FilterCriterion;C.FactoryResetScopeToString.__proto__=C.EnumToString;
C.AVm.__proto__=C.Int32ArrayWrapper;C.AVl.__proto__=C.Int32ArrayWrapper;C.AMI.__proto__=
C.Int32ArrayWrapper;C.UInt64FilterCriterion.__proto__=C.FilterCriterion;C.BooleanToAssignedUnassignedString.
__proto__=C.EnumToString;C.CountryToString.__proto__=C.EnumToString;C.EaseOfDeliveryToString.
__proto__=C.EnumToString;C.WhereAboutsToString.__proto__=C.EnumToString;C.BreedToString.
__proto__=C.EnumToString;C.AnimalIdGenerationMethodToString.__proto__=C.EnumToString;
C.DirectionOfCountingToString.__proto__=C.EnumToString;C.Aei.__proto__=C.EnumToIcon;
C.AdZ.__proto__=C.EnumToIcon;C.GermanStateToString.__proto__=C.EnumToString;C.EartagNrAssignmentModeToString.
__proto__=C.EnumToString;C.M5.__proto__=C.EnumToCodeset;C.ReasonOfLeavingToString.
__proto__=C.EnumToString;C.AhC.__proto__=C.EnumToCodeset;C.KY.__proto__=C.EnumToCodeset;
C.CalfDeregistrations.__proto__=C.Row;C.DeviceComponentToString.__proto__=C.EnumToString;
C.AgT.__proto__=C.EnumToCodeset;C.AeU.__proto__=C.EnumToIcon;C.WhereAboutsFilterCriterion.
__proto__=C.FilterCriterion;C.TimespanDaysToString.__proto__=C.EnumToString;C.USBStateToString.
__proto__=C.EnumToString;C.AnimalIdAutoGenerationMethodToString.__proto__=C.EnumToString;
C.MonthToString.__proto__=C.EnumToString;C.AV1.__proto__=C.Int32ArrayWrapper;C.AV0.
__proto__=C.Int32ArrayWrapper;C.AV3.__proto__=C.Int32ArrayWrapper;C.AVZ.__proto__=
C.Int32ArrayWrapper;C.AMJ.__proto__=C.Int32ArrayWrapper;C.TransponderLinkageIdChangeMethodToString.
__proto__=C.EnumToString;C.AnimalTableFieldsToString.__proto__=C.EnumToString;C.
ListViewScopeToString.__proto__=C.EnumToString;C.WeightValuePrecisionToString.__proto__=
C.EnumToString;C.AgF.__proto__=C.AnimalTypeToString;C.MassDeregistrationCriterionToString.
__proto__=C.EnumToString;C.UInt64PartialFilterCriterion.__proto__=C.FilterCriterion;
};C._ReInit=function(){var B;if((B=C.Device._this))B._ReInit(),C.Device._ReInit.
call(B);if((B=C.Converter._this))B._ReInit(),C.Converter._ReInit.call(B);if((B=C.
Helper._this))B._ReInit(),C.Helper._ReInit.call(B);if((B=C.AnM._this))B._ReInit(
),C.AnM._ReInit.call(B);};C.DH=function(D){var B;if((B=C.Device._this)&&(B._cycle
!=D))B._Done(C.Device._this=null);if((B=C.Converter._this)&&(B._cycle!=D))B._Done(
C.Converter._this=null);if((B=C.Helper._this)&&(B._cycle!=D))B._Done(C.Helper._this=
null);if((B=C.AnM._this)&&(B._cycle!=D))B._Done(C.AnM._this=null);};return C;})(
);

/* VitalControl demonstration application, © Urban GmbH & Co.KG 2023 */