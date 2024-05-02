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
* Version  : 13.03
* Profile  : WebGLDemonstrator
* Platform : Web.WebGL.RGBA8888
*
*******************************************************************************/

var index;if(!index)throw new Error("The application file '_project.js' isn't yet loaded!"
);if(index.Device)throw new Error("The unit file 'Device.js' included twice!");index.
Device=(function(){var A=index;var C={};
var Ce="ERROR: Cannot add criterion, it is already in the list.";var BD="ERROR: BatteryChargeState is read only";
var E7="ERROR: UpdateChargeActive is read only";var Hr="ERROR: ScanState is read only.";
var IV="ERROR: MeasureState is read only.";var Is="ERROR: Temperature value is read only";
var O6="ERROR: UpdateDataTable called for Undefined data table.";var P_="ERROR: UpdateDataTable called for unknown data table id=";
var P$="ERROR: SyncState is read only.";var CQ="ERROR: ScanTransponder is read only.";
var Ff="ERROR: Body weight value is read only";var L5="ERROR: Predicted temperature value is read only";
var Qa="ERROR: TransferProgress is read only";var J6="ERROR: TransferTarget is read only";
var Od="ERROR: unhandled assessment.";var Qb="Unhandled enum BodyTemperature: ";
var ML="AU";var S$="AT";var UW="BE";var Z5="BA";var W8="BG";var It="CA";var UX="CN";
var Z6="TW";var W9="HR";var Z7="CY";var W_="CZ";var Z8="DK";var Z9="EE";var UY="FI";
var W$="FR";var O7="DE";var Z_="GR";var Oe="HU";var Rn="IE";var Xa="IT";var Xb="JP";
var Ta="LV";var Z$="LT";var Aaa="LU";var Xc="MT";var Xd="NL";var Tb="NO";var Tc=
"PL";var Td="PT";var Aab="RO";var Te="RU";var Aac="SK";var AfB="SI";var Aad="ES";
var Xe="SE";var Aae="CH";var Xf="TR";var AhX="UA";var K1="UK";var AcN="US";var Ly=
".";var AhY="-";var Aoe="ERROR: Unhandled mass unit: ";var Of=" ";var Xg="Unhandled gender";
var Aaf="Unhandled animal type";var AfC="Unhandled Device::MassUnit.";var AhZ="Unhandled Device::AnimalListContent.";
var AcO="Avid";var UZ="Ordicam / IER SA";var Aof="Agrident";var Aog="Datamars";var
Aoh="Allflex";var Aoi="Texas Instruments";var Alc="Nedap";var AsZ="Digital Angel";
var Ax9="null";var Ax_="[ ";var O8=", ";var Ro=" ]";var Ax$="Unhandled language";
var U0="Unhandled Device::AnimalListAction.";var As0="Temperature unit conversion not supported: ";
var Aya="->";var Ayb="=";var Ayc=">";var Aoj="<";var AfD="!=";var Aok="WARNING: Unhandled operator.";
var IW="Unknown birth type";var Aol="Unhandled country: ";var As1="Unhandled Device::Action: ";
var Xh="ERROR: Cannot start transaction";var As2="ERROR: Table is null, cannot load row (";
var As3=")";var As4="Table Id mismatch!";var Aom="ERROR: Row index (";var As5=") out of bounds [0,";
var Ald="]";var Ayd="ERROR: Table is full. Item limit: ";var Aye="Device::ScanTransponder not set";
var Ayf="Unhandled TransponderType.";var As6="Unhandled ScanState.";var Ayg="Could not load animal with transponder";
var O9="Birth type";var Ayh="Time calving";var AWa="Pend. reg. notice";var AWb="Perished";
var AWc="Rating temp.";var AWd="Location";var AHu=" mother";var AHv="Reason leaving";
var AfE="Time alarm";var Aon="Time first weighing";var AWe="Time control";var AHw=
"Time temp.";var Ale="Time watch";var AHx="Time weighing";var AHy="Assessment";var
AWf="Time rating";var AWg="ERROR: Unhandled AnimalTable filter field:";var AHz="Field ";
var AWh="ERROR: Unhandled RatingTable filter field:";var AcP="ERROR: Unhandled table ";
var AWi=" filter fields.";var AWj=" [";var AWk="WARNING: Unhandled filter criterion type.";
var AHA="0";var As7="No table specified";var AHB="Invalid animal id generation method: ";
var AHC="Unhandled AnimalIdGenerationMethod: ";var Ayi="Invalid gender: ";var AHD=
"Invalid ear tag number assignment mode: ";var Ayj=";";var AWl="Invalid animal creation error code: ";
var AWm="Invalid EartagNrAssignmentMode: ";var AWn="Unsupported exponent: ";var AWo=
"Unknown whereabouts type: ";var AHE="Unhandled Gender: ";var AWp="Unhandled AnimalIdAutoGenerationMethod: ";
var MM="\n";var Ayk="\n\n";var AWq="Bootloader:\nV\xA0";var AWr="Middleware:\nV\xA0";
var AWs="GUI:\nV\xA0";var AWt="Mainboard: ";var AWu="Torchboard: ";var AHF="Operator not supported.";
var AWv="Unhandled Device::TransponderAssignmentIdChangeMethod: ";var Ayl="Unhandled mass deregistration criterion: ";
var As8="Unhandled enum value ";var Aym="UNDEFINED";var AWw="Boot";var AWx="Charge";
var AHG="ChargeWarning";var AWy="ControlledPowerOff";var AHH="DeviceMain";var AHI=
"DeviceService";var AHJ="DeviceInfo";var AWz="DeviceDataManagement";var AHK="DeviceAnimalDataMenu";
var AWA="DeviceDeviceDataMenu";var AWB="DeviceCheck";var Qc="Home";var Xi="Settings";
var AWC="DateTimeSettings";var AWD="UnitsSettings";var AWE="DataAcquisitionSettings";
var AWF="RegistrationAutomaticSettings";var AWG="RegistrationPresettingsSettings";
var AWH="TransponderAssignmentSettings";var AWI="TransponderUnlinkSettings";var Ah0=
"TemperatureSettings";var AHL="WeightGainSettings";var AWJ="DeviceSettings";var AWK=
"RegistrationSettings";var AHM="InitializationSettings";var AHN="PremisesSettings";
var Ayn="Sleep";var Qd="Sync";var AWL="EditAnimalData";var AWM="EditAnimalDataNaisId";
var AWN="AnimalList";var As9="AnimalListFilter";var AWO="AlarmListFilter";var AWP=
"WatchListFilter";var AWQ="AnimalActionActions";var AWR="AnimalActionTemperature";
var AWS="TemperatureMeasurement";var AWT="AnimalActionWeighing";var As_="AnimalActionRate";
var AWU="AnimalActionUnregister";var AWV="AnimalActionPerished";var AWW="AnimalActionNewBornCare";
var AWX="AlarmList";var AWY="ControlMeasure";var AWZ="ControlList";var AW0="RangeTest";
var AW1="ListsMain";var AW2="ListsIdManagement";var AW3="WatchList";var AHO="EvaluationMenuMain";
var Alf="EvaluationMenuWeights";var AW4="EvaluationLosses";var AW5="EvaluationRatings";
var AW6="EvaluationTemperatures";var Ayo="EvaluationWeights";var Alg="EvaluationWeightsRecent";
var Ah1="EvaluationBirthWeights";var Ayp="AnimalEvaluationFilter";var Aoo="NewMenu";
var Ah2="NewAnimals";var AW7="NewAnimalManualData";var Ayq="MassRecording";var AHP=
"NewAnimalTransponderData";var AfF="NewAnimalLoss";var AHQ="AutoActionScanScreen";
var Aag="ManualActionScanScreen";var Alh="SetTransponderScreen";var Aop="SetSaveTransponderScreen";
var AW8="NewAnimalSetTransponderScreen";var AW9="NewAnimalsSetTransponderScreen";
var AW_="NewAnimalCalvingDataScreen";var AW$="WeightListScreen";var AXa="AnimalSingleInfoScreen";
var As$="AnimalMultiInfoScreen";var AHR="AnimalRegistrationDetails";var AHS="FreshCowListScreen";
var AXb="FreshCowListFilterScreen";var AXc="DryCowListScreen";var AXd="DryCowListFilterScreen";
var AXe="NoTransponderListScreen";var AXf="NoTransponderListFilterScreen";var AXg=
"YoungNoTransponderListScreen";var AXh="YoungNoTransponderListFilterScreen";var AXi=
"NoNaisIdListScreen";var AXj="NoNaisIdListFilterScreen";var AXk="RegistrationsListScreen";
var AXl="RegistrationsListFilterScreen";var Ayr="ActionListScreen";var AHT="ActionListFilterScreen";
var AHU="UpdateScreen";var AHV="MotherScanScreen";var AHW="SetSaveNaisIdScreen";
var AHX="PurchasedAnimalsList";var AHY="TextInput";var AXm="AnimalActions";var AXn=
"Unhandled display mode: ";var AXo="None";var AXp="Actions Settings";var AXq="Auto Action";
var AXr="Menu Item Settings";var AXs="Rating Type";var Ays="Weighing settings";var
AHZ="Options";var AXt="AnimalSearch";var AH0="AnimalSearchUnfiltered";var Ah3="AnimalSearchDriedOff";
var U1="MeasurementReady";var AXu="AnimalMultiInfoMenu";var Aah="MassRecordingDefaults";
var AXv="MassRecordingFields";var AXw="MassRecordingMenu";var Ali="BirthRegistrationsListMenu";
var AfG="Unhandled overlay menu: ";var AcQ="Error";var Aoq="Idle";var AXx="IdScanned";
var O_="NotFound";var AH1="Progress";var AH2="Unhandled scan state: ";var AXy="Prediction";
var AH3="Ready";var AH4="Unhandled measure state: ";var AH5="Unhandled temperature unit: ";
var AXz="Unhandled species: ";var AXA="Bosanski";var AXB="\u0411\u044A\u043B\u0433\u0430\u0440\u0441\u043A\u0438";
var AXC="\u6B63\u9AD4\u5B57/\u7E41\u9AD4\u5B57";var AXD="\u010Ce\u0161tina";var AXE=
"Dansk";var AXF="English";var AXG="Nederlands";var AH6="Eesti";var AXH="Suomalainen";
var AH7="Fran\xE7ais";var AH8="Deutsch";var Ayt="\u0395\u03BB\u03BB\u03B7\u03BD\u03B9\u03BA\u03AC";
var AXI="Magyar";var AXJ="Italiano";var AXK="\u65E5\u672C\u8A9E";var AXL="Latvie\u0161u Valoda";
var AXM="Norsk";var AXN="J\u0119zyk polski";var AXO="Portugu\xEAs";var AXP="Rom\xE2n\u0103";
var Ata="\u0420\u0443\u0441\u0441\u043A\u0438\u0439";var Atb="Espa\xF1ol";var AH9=
"Svenska";var AXQ="T\xFCrk\xE7e";var AXR="\u0423\u043A\u0440\u0430\u0457\u043D\u0441\u044C\u043A\u0438\u0439";
var AH_="Unhandled language: ";var AXS="BS";var AXT="ZH";var AXU="CS";var AXV="DA";
var AXW="EN";var AXX="ET";var AXY="EL";var AXZ="JA";var AX0="SV";var AX1="Unhandled gender: ";
var AX2="Unhandled birth type: ";var AX3="Exporting";var AX4="ImportFinish";var AX5=
"ImportStart";var AX6="Importing";var AH$="Init";var AIa="Unhandled sync state: ";
var Ayu="Unhandled rating attribute: ";var AIb="Unhandled assessment: ";var Aor=
"Illegal boolean value: ";var Atc="Unhandled popup ID:";var AIc="Unknown";var AX7=
"Severe Error";var AId="ErrorsDeviceDriverCheck";var AX8="Enter Sleep";var AIe="About";
var AX9="InfoSoftwareVersions";var AX_="InfoHardwareVersions";var AX$="InfoSerial";
var AYa="ShutDown";var AYb="SuccessDataSync";var AYc="SuccessResetFactory";var AYd=
"SuccessResetSettings";var AYe="SuccessResetAnimalData";var AYf="SuccessCreateBackup";
var AYg="SuccessRestoreBackup";var AYh="CreateBackupInProgress";var AYi="RestoreBackupInProgress";
var Ayv="FailedCreateBackup";var AYj="FailedRestoreBackup";var AYk="TechnicalDetails";
var Ayw="WarningDataSync";var Atd="WarningFactory";var U2="WarningResetAnimalData";
var Ate="WarningResetDeviceData";var AYl="WarningRestart";var AYm="WarningAutoAction";
var AYn="WarningAutoActionNotApplicable";var AIf="WarningNoMenuItem";var AYo="WarningEnterDemoMode";
var AIg="NoAnimalsRegistered";var AYp="MaxNumAnimalsReached";var AYq="MaxNumRatingsReached";
var AYr="MaxNumCalfDeregistrationsReached";var Atf="MissingTransponder";var AYs=
"EarTagNumberTooShort";var AYt="NoValidCountryCode";var AIh="WarningOutdatedAnimalWeight";
var AYu="WarningOutdatedAnimalWeights";var AYv="WarningWeightEvaluationSingular";
var AYw="WarningWeightEvaluationPlural";var AYx="ScanError";var AcR="ScanNotFound";
var AYy="ScannedAnimalNotFound";var AYz="ScannedTransponderNotFound";var AYA="AnimalNotFound";
var AYB="SuccessUnregister";var AIi="SuccessUnregisterPerished";var AYC="SuccessCreationNewAnimal";
var AYD="SuccessCreationNewAnimals";var AYE="AnimalCreationInProgress";var AYF="EvaluationInProgress";
var AYG="DataSyncInProgress";var AYH="AddedToAlarm";var AIj="RemovedFromAlarm";var
AYI="AddedToWatch";var AYJ="RemovedFromWatch";var AYK="AddedToDryOff";var AIk="RemovedFromDryOff";
var AIl="AnimalIdAlreadyExists";var AYL="AnimalIdAlreadyExistsContinuable";var AYM=
"MissingAnimalId";var AYN="MissingAnimalIdMother";var AYO="MissingEartagNumber";
var Rp="MissingTransponderId";var Atg="TransponderAlreadyRegistered";var AIm="TransponderAlreadyRegisteredContinuable";
var AIn="TransponderAlreadyRegisteredCapturable";var Aos="HelpAnimalInfoRating";
var Aot="WarningReassignTransponder";var Ayx="CannotReassignNaisId";var AYP="WarningResetToDefaultValue";
var AIo="WarningResetThresholds";var AYQ="WarningResetTempThresholds";var AYR="UpdateFirmware";
var AYS="UpdateFirmwareBatteryLow";var AYT="ConfirmFirmwareUpdated";var AYU="ConfirmBootloaderUpdated";
var AYV="QuestionAddAnotherCalfMultiples";var AYW="RemovedAllBirthNoticesPending";
var AYX="RemovedAllPurchasedNoticePending";var AYY="RemovedFromBirthNoticePending";
var AYZ="RemovedFromPurchasedNoticePending";var AY0="SuccessClearAnimalLoss";var
AY1="RemovedAnimalBirth";var AY2="RemovedAnimalPurchased";var AY3="WarningNoActionsForAnimalLoss";
var AY4="SuccessLinkTransponder";var AY5="SuccessChangeTransponder";var AY6="SuccessUnlinkTransponder";
var Aou="SuccessLinkNaisId";var AIp="WarningDataExportHitBirthFailed";var AY7="SuccessDataExportHitBirth";
var AIq="SuccessDataExportHitBirthDownload";var AIr="SuccessDataExportHitBirthResetAdvice";
var AcS="WarningDataExportPurchasedFailed";var AIs="SuccessDataExportPurchased";
var AY8="SuccessDataExportPurchasedDownload";var AIt="SuccessDataExportPurchasedResetAdvice";
var AY9="WarningDataExportAnimalsFailed";var Ayy="SuccessDataExportAnimalsRatings";
var AY_="SuccessDataExportAnimalsDownload";var AY$="WarningNoPremisesID";var Ayz=
"WarningNoFlashDrivePresent";var AZa="WarningNoBackupPathPresent";var AZb="WarningNoBackupFilePresent";
var AZc="DemoFunctionNotAvailable";var AIu="WarningImpreciseTimeSetting";var Aov=
"ConfirmationRestoreBackup";var AIv="ConfirmationMassDeregistration";var AZd="SuccessMassDeregistration";
var AIw="WarningParsedDateInFutureInvalid";var AIx="WarningParsingDateFailed";var
Alj="WarningParsingNaisIdFailed";var AZe="WarningParsingShortNaisIdWithoutPremisesId";
var Aow="DataExportInProgress";var AZf="BarcodeScannerConnectedSwitchScreen";var
AIy="BarcodeScannerDisconnectedSwitchScreen";var AIz="AnimalId";var AZg="FarmId";
var AZh="GroupId";var AIA="PersonId";var AZi="Unhandled transponder type: ";var AZj=
"FDX";var AZk="HDX";var AZl="HDX (Urban)";var AZm="Unhandled transponder protocol: ";
var AZn="Illegal RatingMode: ";var AZo="Unhandled mass unit: ";var AZp="Max array size is 10";
var AIB="Index out of bounds";var AZq="ERROR: Received more integers than expected!";
var AIC="Unhandled double scan action :";var AZr="Illegal WeightRecordingMode: ";
var AZs="Illegal WeightRecordingScope: ";var AZt="AnimalDataGenderType";var AID=
"AnimalDataShortNaisId";var Aai="Rating";var AZu="Temperature";var AyA="Weight";
var AZv="Alarm infos";var AZw="Control infos";var AZx="Watch infos";var AZy="Fresh cow infos";
var AZz="No transponder infos";var AZA="Dry cow info";var Ath="No nais id infos";
var Ati="Birth registrations infos";var Atj="Purchased registrations infos";var Atk=
"Young no transponder infos";var AyB="Unhandled animal list content:";var Aox="Illegal AutoRegistrationMode: ";
var AZB="Illegal FactoryResetScope: ";var Aoy="??";var AZC="Illegal EaseOfDelivery: ";
var AZD="Illegal Whereabouts: ";var AZE="Illegal breed: ";var AZF="Unisex";var AZG=
"Illegal animalIdGenerationMethod: ";var AZH="Ascending";var AZI="Descending";var
AZJ="Illegal directionOfCountingName: ";var AIE="Unhandled direction of counting: ";
var Atl="Unhandled German state: ";var AZK="SH";var AZL="HH";var AZM="NI";var AyC=
"HB";var AZN="NW";var AyD="HE";var AyE="RP";var AZO="BW";var AZP="BY";var AZQ="SL";
var AIF="BB";var AZR="MV";var AZS="SN";var AZT="ST";var AZU="TH";var AZV="One Range Male Female";
var AZW="Two Ranges Male Female";var AIG="Illegal EartagAssignmentMode: ";var AZX=
"Unhandled code set value ";var AyF="Implement in derived class";var AZY="Illegal HIT-Code: ";
var AZZ="Illegal ReasonOfLeaving: ";var AIH="Illegal code: ";var AZ0="Undefined";
var AZ1="Illegal DeviceComponent: ";var AZ2="Unhandled Device::MotherSelectionFilterMode: ";
var AZ3="Illegal Device::TimespanDays: ";var AII="Not connected";var AZ4="Host";
var Atm="Device";var AZ5="Device CDC";var AZ6="Host MSC";var Atn="Host HID";var AyG=
"Host CDC";var AyH="Illegal animalIdAutoGenerationMethod: ";var AZ7="Unhandled month: ";
var AZ8="Illegal transponderAssignmentIdChangeMethod: ";var AZ9="Unhandled animal table field: ";
var AIJ="Unhandled list view scope: ";var AIK="1 ";var Alk="100 ";var AZ_="10 ";
var AZ$="Unhandled weight value precision: ";
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
B8:null,B9:null,CX:function(AI){if(!AI)return;var Aw=this.B8;while(!!Aw){if(Aw===
AI)throw new Error(Ce);Aw=Aw.Ah;}AI.AJ=this.B9;if(!!this.B9)this.B9.Ah=AI;this.B9=
AI;if(!this.B8)this.B8=AI;},AOQ:function(){return this.B8;},AOV:function(Bcc){if(
!!Bcc)return Bcc.Ah;return null;},DL:function(AJd,Eb){var Aw=this.B8;while(!!Aw){
if(Aw.EJ===AJd){if(Eb===1)return Aw;else if(Aw.Operator===Eb)return Aw;}Aw=Aw.Ah;
}return null;},Nq:function(AI){var Aw=this.B8;while(!!Aw){if(Aw===AI){if(!!Aw.AJ
)Aw.AJ.Ah=Aw.Ah;if(!!Aw.Ah)Aw.Ah.AJ=Aw.AJ;if(this.B8===Aw)this.B8=Aw.Ah;if(this.
B9===Aw)this.B9=Aw.AJ;Aw.Ah=null;Aw.AJ=null;return;}Aw=Aw.Ah;}},E$:function(){var
Be=A._NewObject(C.Filter,0);var Aw=this.B8;while(!!Aw){Be.CX(Aw.Abk());Aw=Aw.Ah;
}return Be;},_Init:function(aArg){this.__proto__=C.Filter;A.h7++;},_Done:function(
){this.__proto__=null;A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((
B=this.B8)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.B9)&&(B._cycle!=D))B._Mark(
B._cycle=D);if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:
null,_className:"Device::Filter"};C.FilterCriterion={Ah:null,AJ:null,EJ:-1,Operator:
1,YK:false,Abk:function(){return null;},E$:function(AI){if(!AI)return;this.EJ=AI.
EJ;this.Operator=AI.Operator;this.YK=AI.YK;},_Init:function(aArg){this.__proto__=
C.FilterCriterion;A.h7++;},_Done:function(){this.__proto__=null;A.h7--;},_ReInit:
function(){},_Mark:function(D){var B;if((B=this.Ah)&&(B._cycle!=D))B._Mark(B._cycle=
D);if((B=this.AJ)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.I)&&(B._cycle!=D
))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:"Device::FilterCriterion"
};C.Int32FilterCriterion={A5:0,Abk:function(){var Aw=A._NewObject(C.Int32FilterCriterion
,0);Aw.E$(this);return Aw;},E$:function(AI){C.FilterCriterion.E$.call(this,AI);var
Aw=(C.Int32FilterCriterion.isPrototypeOf(AI)?AI:null);if(!!Aw)this.A5=Aw.A5;},Initialize:
function(A4,Eb,A7,Qg){this.EJ=A4;this.Operator=Eb;this.A5=A7;this.YK=Qg;return this;
},_Init:function(aArg){C.FilterCriterion._Init.call(this,aArg);this.__proto__=C.
Int32FilterCriterion;},_className:"Device::Int32FilterCriterion"};C.DeviceClass={
AEr:0,AEq:0,Av9:0,PY:0,OV:null,SB:null,Q1:null,S0:null,R3:null,P4:null,Gf:null,An:
null,Bt:null,Agy:null,AnO:null,Pr:null,AuJ:A.jV,AutoActions:A.jV,ABS:A.jV,AG5:A.
jV,AG6:A.jV,AhL:A.jV,AHo:A.jV,AHp:A.jV,ABT:A.jV,AHn:A.jV,AHs:A.jV,ABL:A.jV,ABM:A.
jV,ASi:A.jV,ASn:A.jV,AV9:A.jV,Aa6:100,Lw:0,AM9:75,AcG:3600,AUi:0,A2:5,AF:0,KZ:50000
,Pn:0,AGk:0,AdT:0,Aq7:0,Aq6:0,AR7:1,AR6:1,AjV:0,AR8:1,AxU:0,Afr:0,AqT:10,AU5:5,Av4:
60,Av2:0,An6:0,OP:1,WhereAbouts:0,Ak5:0,AxM:3,ACO:0,AgA:1,AbU:0,Aqs:0,AN6:11,Breed:
0,EartagNrAssignmentMode:0,Au_:0,ACH:0,ACG:0,Ik:5,ABK:2,Aqu:0,AOI:2,AVU:0,D9:0,AMg:
0,Km:0,Gender:2,WeightRecordingScope:1,WeightRecordingMode:1,AnimalType:0,MassUnit:
0,AutoRegistrationMode:0,RatingMode:0,SyncState:0,OverlayMenu:0,TemperatureUnit:
0,Language:0,MeasureState:0,ScanState:0,Ij:3,AUh:false,AM2:false,AeP:true,ART:false
,Aqg:true,AqU:false,AmR:true,HG:false,AVx:false,AmS:false,AVS:false,AsT:false,AEp:
false,AmE:false,UpdateActiveScreen:function(AK){if(this.Ij===AK)return;this.Ij=AK;
A.abo([this,this.AED,this.Bbl],0);},Zp:function(E){if(this.K&&this.K.Zp)return this.
K.Zp.apply(this,arguments);else return C.DeviceClass.Bu3.apply(this,arguments);}
,Bu3:function(E){},Bbl:function(Aq){this.Zp(Aq);},UpdateBatteryChargeState:function(
AK){if(this.Aa6===AK)return;this.Aa6=AK;A.abo([this,this.Awc,this.AyN],0);},Awz:
function(E){if(this.K&&this.K.Awz)return this.K.Awz.apply(this,arguments);else return C.
DeviceClass.Bvc.apply(this,arguments);},Bvc:function(E){A.ab5("%s",BD);},AyN:function(
Aq){this.Awz(Aq);},UpdateChargeActive:function(AK){if(this.AmE===AK)return;this.
AmE=AK;A.abo([this,this.Awf,this.AyO],0);},AE$:function(E){if(this.K&&this.K.AE$
)return this.K.AE$.apply(this,arguments);else return C.DeviceClass.Bvj.apply(this
,arguments);},Bvj:function(E){A.ab5("%s",E7);},AyO:function(Aq){this.AE$(Aq);},UpdateScanState:
function(AK){var B;if(this.ScanState===AK)return;this.ScanState=AK;A.abo([this,this.
ASW,this.A0D],0);A._GetAutoObject(C.Helper).BBs(this);},Ar5:function(E){if(this.
K&&this.K.Ar5)return this.K.Ar5.apply(this,arguments);else return C.DeviceClass.
Bv0.apply(this,arguments);},Bv0:function(E){A.ab5("%s",Hr);},A0D:function(Aq){this.
Ar5(Aq);},UpdateMeasureState:function(AK){if(this.MeasureState===AK)return;this.
MeasureState=AK;A.abo([this,this.AEL,this.AIZ],0);},AwY:function(E){if(this.K&&this.
K.AwY)return this.K.AwY.apply(this,arguments);else return C.DeviceClass.BvH.apply(
this,arguments);},BvH:function(E){A.ab5("%s",IV);},AIZ:function(Aq){this.AwY(Aq);
},UpdateTempValue:function(AK){if(this.Lw===AK)return;this.Lw=AK;A.abo([this,this.
AEP,this.AI1],0);},Axa:function(E){if(this.K&&this.K.Axa)return this.K.Axa.apply(
this,arguments);else return C.DeviceClass.Bv6.apply(this,arguments);},Bv6:function(
E){A.ab5("%s",Is);},AI1:function(Aq){this.Axa(Aq);},AnC:function(E){if(this.K&&this.
K.AnC)return this.K.AnC.apply(this,arguments);else return C.DeviceClass.BvB.apply(
this,arguments);},BvB:function(E){},BbB:function(Aq){this.AnC(Aq);},Axb:function(
E){if(this.K&&this.K.Axb)return this.K.Axb.apply(this,arguments);else return C.DeviceClass.
Bv7.apply(this,arguments);},Bv7:function(E){},Atq:function(Aq){this.Axb(Aq);},AE9:
function(E){if(this.K&&this.K.AE9)return this.K.AE9.apply(this,arguments);else return C.
DeviceClass.Bvi.apply(this,arguments);},Bvi:function(E){},Bbt:function(Aq){this.
AE9(Aq);},AFF:function(E){if(this.K&&this.K.AFF)return this.K.AFF.apply(this,arguments
);else return C.DeviceClass.BvJ.apply(this,arguments);},BvJ:function(E){},A0x:function(
Aq){this.AFF(Aq);},UpdateMonitoring:function(AK){if(this.AEp===AK)return;this.AEp=
AK;A.abo([this,this.ASN,this.A0x],0);},UpdateDataTable:function(Bce){var B;switch(
Bce){case 0:A.pe([B=this.An,B.Ako],this);break;case 1:A.pe([B=this.Bt,B.Ako],this
);break;case 3:A.pe([B=this.Agy,B.Ako],this);break;case 4:A.pe([B=this.Pr,B.Ako]
,this);break;case 2:A.ab5("%s",O6);break;default:A.ab5("%s%e",P_,Bce);}},AxL:function(
){if(this.K&&this.K.AxL)return this.K.AxL.apply(this,arguments);else return C.DeviceClass.
BwF.apply(this,arguments);},BwF:function(){},AhP:function(){if(this.K&&this.K.AhP
)return this.K.AhP.apply(this,arguments);else return C.DeviceClass.BwI.apply(this
,arguments);},BwI:function(){},AhM:function(){if(this.K&&this.K.AhM)return this.
K.AhM.apply(this,arguments);else return C.DeviceClass.BwG.apply(this,arguments);
},BwG:function(){},An0:function(){if(this.K&&this.K.An0)return this.K.An0.apply(
this,arguments);else return C.DeviceClass.BwJ.apply(this,arguments);},BwJ:function(
){},UpdateLanguage:function(AK){if(this.Language===AK)return;this.Language=AK;switch(
AK){case 14:A._SetLanguage(1);break;case 13:A._SetLanguage(2);break;case 6:A._SetLanguage(
3);break;case 11:A._SetLanguage(4);break;case 17:A._SetLanguage(5);break;case 10:
A._SetLanguage(6);break;case 12:A._SetLanguage(7);break;case 5:A._SetLanguage(8);
break;case 3:A._SetLanguage(9);break;case 1:A._SetLanguage(10);break;case 8:A._SetLanguage(
11);break;case 18:A._SetLanguage(12);break;case 4:A._SetLanguage(13);break;case 19:
A._SetLanguage(14);break;case 20:A._SetLanguage(15);break;case 15:A._SetLanguage(
16);break;case 21:A._SetLanguage(17);break;case 22:A._SetLanguage(18);break;case
23:A._SetLanguage(19);break;case 9:A._SetLanguage(20);break;case 2:A._SetLanguage(
21);break;case 24:A._SetLanguage(22);break;case 7:A._SetLanguage(23);break;case 16:
A._SetLanguage(24);break;default:A._SetLanguage(0);}A.abo([this,this.A86,this.BbB
],0);},UpdateTemperatureUnit:function(AK){if(this.TemperatureUnit===AK)return;this.
TemperatureUnit=AK;A.abo([this,this.ArB,this.Atq],0);},UpdateBrightness:function(
AK){if(this.AM9===AK)return;this.AM9=AK;A.abo([this,this.A8R,this.Bbt],0);},SetSystemTime:
function(Ah$){if(this.K&&this.K.SetSystemTime)return this.K.SetSystemTime.apply(
this,arguments);else return C.DeviceClass.BwD.apply(this,arguments);},BwD:function(
Ah$){},AxE:function(){if(this.K&&this.K.AxE)return this.K.AxE.apply(this,arguments
);else return C.DeviceClass.Ba$.apply(this,arguments);},Ba$:function(){},AGx:function(
){if(this.K&&this.K.AGx)return this.K.AGx.apply(this,arguments);else return C.DeviceClass.
Ba9.apply(this,arguments);},Ba9:function(){},Bo2:function(){},UpdateOverlayMenu:
function(AK){if(this.OverlayMenu===AK)return;this.OverlayMenu=AK;A.abo([this,this.
Awr,this.AyV],0);},Dw:function(E){if(this.K&&this.K.Dw)return this.K.Dw.apply(this
,arguments);else return C.DeviceClass.BvU.apply(this,arguments);},BvU:function(E
){},AyV:function(Aq){this.Dw(Aq);},Axh:function(E){if(this.K&&this.K.Axh)return this.
K.Axh.apply(this,arguments);else return C.DeviceClass.Bwf.apply(this,arguments);
},Bwf:function(E){},BbN:function(Aq){this.Axh(Aq);},UpdateUnderTemp:function(AK){
if(this.AcG===AK)return;this.AcG=AK;A.abo([this,this.A9z,this.BbN],0);},UpdateSyncState:
function(AK){if(this.SyncState===AK)return;this.SyncState=AK;A.abo([this,this.ASY
,this.A0F],0);},Ab9:function(E){if(this.K&&this.K.Ab9)return this.K.Ab9.apply(this
,arguments);else return C.DeviceClass.Bv5.apply(this,arguments);},Bv5:function(E
){A.ab5("%s",P$);},A0F:function(Aq){this.Ab9(Aq);},ADb:function(){if(this.K&&this.
K.ADb)return this.K.ADb.apply(this,arguments);else return C.DeviceClass.BuV.apply(
this,arguments);},BuV:function(){return A.jV;},UpdatePopup:function(J9,A1p,A1k,A1s
){this.A3(J9,A1p,A1k,A1s,[this,this.BA_]);},PopupStateChanged:function(J9,Ae){if(
this.K&&this.K.PopupStateChanged)return this.K.PopupStateChanged.apply(this,arguments
);else return C.DeviceClass.Bws.apply(this,arguments);},Bws:function(J9,Ae){},AF7:
function(E){if(this.K&&this.K.AF7)return this.K.AF7.apply(this,arguments);else return C.
DeviceClass.Bwh.apply(this,arguments);},Bwh:function(E){},BbO:function(Aq){this.
AF7(Aq);},UpdateVibrationOnKeypressEnabled:function(AK){if(this.AsT===AK)return;
this.AsT=AK;A.abo([this,this.A9A,this.BbO],0);},Afa:function(E){if(this.K&&this.
K.Afa)return this.K.Afa.apply(this,arguments);else return C.DeviceClass.Bwg.apply(
this,arguments);},Bwg:function(E){},AI2:function(Aq){this.Afa(Aq);},UpdateVibrationOn:
function(BcH){if(this.AVS===BcH)return;this.AVS=BcH;A.abo([this,this.AEQ,this.AI2
],0);},A3:function(J9,A1p,A1k,A1s,A1l){var Agp=A._NewObject(C.PopupContext,0);Agp.
Id=J9;Agp.Show=A1p;Agp.AkJ=A1k;Agp.Ak4=A1s;Agp.AGd=A1l;this.AnO.Trigger(Agp,false
);},BA_:function(G){var As=(C.PopupContext.isPrototypeOf(G)?G:null);if(!!As)this.
PopupStateChanged(As.Id,As.PopupState);},Aw8:function(E){if(this.K&&this.K.Aw8)return this.
K.Aw8.apply(this,arguments);else return C.DeviceClass.BvZ.apply(this,arguments);
},BvZ:function(E){},A0C:function(Aq){this.Aw8(Aq);},UpdateRatingMode:function(AK
){if(this.RatingMode===AK)return;this.RatingMode=AK;A.abo([this,this.ASV,this.A0C
],0);},Ae2:function(E){if(this.K&&this.K.Ae2)return this.K.Ae2.apply(this,arguments
);else return C.DeviceClass.Bvt.apply(this,arguments);},Bvt:function(E){},Atp:function(
Aq){this.Ae2(Aq);},UpdateFlashLightOn:function(Bcn){if(this.AmS===Bcn)return;this.
AmS=Bcn;A.abo([this,this.Ary,this.Atp],0);},Uw:function(E){if(this.K&&this.K.Uw)
return this.K.Uw.apply(this,arguments);else return C.DeviceClass.Bv_.apply(this,
arguments);},Bv_:function(E){},A0G:function(Aq){this.Uw(Aq);},UpdateTopLightOn:function(
BcC){if(this.AVx===BcC)return;this.AVx=BcC;A.abo([this,this.AS0,this.A0G],0);},WH:
function(E){if(this.K&&this.K.WH)return this.K.WH.apply(this,arguments);else return C.
DeviceClass.BvY.apply(this,arguments);},BvY:function(E){},BwW:function(Aq){this.
WH(Aq);},UpdateRGBTopLight:function(Bcx){if(this.AUi===Bcx)return;this.AUi=Bcx;A.
abo([this,this.BlH,this.BwW],0);},Awy:function(E){if(this.K&&this.K.Awy)return this.
K.Awy.apply(this,arguments);else return C.DeviceClass.Bvb.apply(this,arguments);
},Bvb:function(E){},BwP:function(Aq){this.Awy(Aq);},UpdateAutoRegistrationMode:function(
Bca){if(this.AutoRegistrationMode===Bca)return;this.AutoRegistrationMode=Bca;A.abo([
this,this.Bk6,this.BwP],0);},Ar6:function(E){if(this.K&&this.K.Ar6)return this.K.
Ar6.apply(this,arguments);else return C.DeviceClass.Bv1.apply(this,arguments);},
Bv1:function(E){A.ab5("%s",CQ);},A0E:function(Aq){this.Ar6(Aq);},UpdateScanTransponder:
function(J9,BcE,BcD){if(((this.OV.Id===J9)&&(this.OV.TransponderType===BcE))&&(this.
OV.TransponderProtocol===BcD))return;this.OV.OnSetId(J9);this.OV.ATY(BcE);this.OV.
ATX(BcD);A.abo([this,this.ASX,this.A0E],0);},OQ:function(E){if(this.K&&this.K.OQ
)return this.K.OQ.apply(this,arguments);else return C.DeviceClass.Bvl.apply(this
,arguments);},Bvl:function(E){},U4:function(Aq){this.OQ(Aq);},UpdateDigitsID:function(
Bci){if(this.A2===Bci)return;this.A2=Bci;A.abo([this,this.Un,this.U4],0);},PU:function(
E){if(this.K&&this.K.PU)return this.K.PU.apply(this,arguments);else return C.DeviceClass.
BvT.apply(this,arguments);},BvT:function(E){},U5:function(Aq){this.PU(Aq);},UpdateOffsetID:
function(Bct){if(this.AF===Bct)return;this.AF=Bct;A.abo([this,this.Uo,this.U5],0
);},AF$:function(E){if(this.K&&this.K.AF$)return this.K.AF$.apply(this,arguments
);else return C.DeviceClass.Bwo.apply(this,arguments);},Bwo:function(E){A.ab5("%s"
,Ff);},AI3:function(Aq){this.AF$(Aq);},UpdateWeightValue:function(AK){if(this.KZ===
AK)return;this.KZ=AK;A.abo([this,this.AER,this.AI3],0);},AwV:function(E){if(this.
K&&this.K.AwV)return this.K.AwV.apply(this,arguments);else return C.DeviceClass.
BvE.apply(this,arguments);},BvE:function(E){},A0w:function(Aq){this.AwV(Aq);},UpdateMassUnit:
function(AK){if(this.MassUnit===AK)return;this.MassUnit=AK;A.abo([this,this.ASM,
this.A0w],0);},ArF:function(E){if(this.K&&this.K.ArF)return this.K.ArF.apply(this
,arguments);else return C.DeviceClass.Ba5.apply(this,arguments);},Ba5:function(E
){},Bbi:function(Aq){this.ArF(Aq);},ArG:function(E){if(this.K&&this.K.ArG)return this.
K.ArG.apply(this,arguments);else return C.DeviceClass.Ba6.apply(this,arguments);
},Ba6:function(E){},A0r:function(Aq){this.ArG(Aq);},UpdateActiveActions:function(
AK){if(this.Pn===AK)return;this.Pn=AK;A.abo([this,this.A8B,this.Bbi],0);},UpdateActiveActionsOrder:
function(AK){if(this.AuJ===AK)return;this.AuJ=AK;A.abo([this,this.ASz,this.A0r],
0);},Akv:function(E){if(this.K&&this.K.Akv)return this.K.Akv.apply(this,arguments
);else return C.DeviceClass.Ba7.apply(this,arguments);},Ba7:function(E){},Bbq:function(
Aq){this.Akv(Aq);},UpdateAutoActions:function(AK){if(this.AutoActions===AK)return;
this.AutoActions=AK;A.abo([this,this.A8M,this.Bbq],0);},AGY:function(){if(this.K&&
this.K.AGY)return this.K.AGY.apply(this,arguments);else return C.DeviceClass.BwH.
apply(this,arguments);},BwH:function(){},AsJ:function(){if(this.K&&this.K.AsJ)return this.
K.AsJ.apply(this,arguments);else return C.DeviceClass.BwL.apply(this,arguments);
},BwL:function(){},EC:function(E){if(this.K&&this.K.EC)return this.K.EC.apply(this
,arguments);else return C.DeviceClass.Bu_.apply(this,arguments);},Bu_:function(E
){},BwO:function(Aq){this.EC(Aq);},UpdateAnimalType:function(Eo){if(this.AnimalType===
Eo)return;this.AnimalType=Eo;A.abo([this,this.PT,this.BwO],0);},Axi:function(E){
if(this.K&&this.K.Axi)return this.K.Axi.apply(this,arguments);else return C.DeviceClass.
Bwm.apply(this,arguments);},Bwm:function(E){},BbT:function(Aq){this.Axi(Aq);},UpdateWeightRecordingMode:
function(BcJ){if(this.WeightRecordingMode===BcJ)return;this.WeightRecordingMode=
BcJ;A.abo([this,this.A9I,this.BbT],0);},AFK:function(E){if(this.K&&this.K.AFK)return this.
K.AFK.apply(this,arguments);else return C.DeviceClass.BvV.apply(this,arguments);
},BvV:function(E){A.ab5("%s",L5);},A0A:function(Aq){this.AFK(Aq);},UpdatePredictedTempValue:
function(AK){if(this.AGk===AK)return;this.AGk=AK;A.abo([this,this.ASS,this.A0A],
0);},SR:function(L$){if(this.K&&this.K.SR)return this.K.SR.apply(this,arguments);
else return C.DeviceClass.BwC.apply(this,arguments);},BwC:function(L$){},AFe:function(
E){if(this.K&&this.K.AFe)return this.K.AFe.apply(this,arguments);else return C.DeviceClass.
Bvk.apply(this,arguments);},Bvk:function(E){},AIW:function(Aq){this.AFe(Aq);},UpdateDemoMode:
function(AK){if(this.HG===AK)return;this.HG=AK;A.abo([this,this.AEI,this.AIW],0);
},AEX:function(E){if(this.K&&this.K.AEX)return this.K.AEX.apply(this,arguments);
else return C.DeviceClass.Bu4.apply(this,arguments);},Bu4:function(E){},Bbm:function(
Aq){this.AEX(Aq);},UpdateAgeRegistration:function(Bcs){if(this.AdT===Bcs)return;
this.AdT=Bcs;A.abo([this,this.A8G,this.Bbm],0);},Axj:function(E){if(this.K&&this.
K.Axj)return this.K.Axj.apply(this,arguments);else return C.DeviceClass.Bwn.apply(
this,arguments);},Bwn:function(E){},BbU:function(Aq){this.Axj(Aq);},UpdateWeightRecordingScope:
function(Bcy){if(this.WeightRecordingScope===Bcy)return;this.WeightRecordingScope=
Bcy;A.abo([this,this.A9J,this.BbU],0);},JX:function(E){if(this.K&&this.K.JX)return this.
K.JX.apply(this,arguments);else return C.DeviceClass.Bvx.apply(this,arguments);}
,Bvx:function(E){},A0v:function(Aq){this.JX(Aq);},UpdateGender:function(L8){if(this.
Gender===L8)return;this.Gender=L8;A.abo([this,this.WC,this.A0v],0);},ArV:function(
E){if(this.K&&this.K.ArV)return this.K.ArV.apply(this,arguments);else return C.DeviceClass.
Bvz.apply(this,arguments);},Bvz:function(E){},AyR:function(Aq){this.ArV(Aq);},UpdateIDLastUsedMale:
function(Rq){if(this.Aq7===Rq)return;this.Aq7=Rq;A.abo([this,this.Awk,this.AyR],
0);},ArU:function(E){if(this.K&&this.K.ArU)return this.K.ArU.apply(this,arguments
);else return C.DeviceClass.Bvy.apply(this,arguments);},Bvy:function(E){},AyQ:function(
Aq){this.ArU(Aq);},UpdateIDLastUsedFemale:function(Rq){if(this.Aq6===Rq)return;this.
Aq6=Rq;A.abo([this,this.Awj,this.AyQ],0);},Zq:function(E){if(this.K&&this.K.Zq)return this.
K.Zq.apply(this,arguments);else return C.DeviceClass.Bu9.apply(this,arguments);}
,Bu9:function(E){},AIU:function(Aq){this.Zq(Aq);},UpdateAnimalListContent:function(
AK){if(this.Km===AK)return;this.Km=AK;A.abo([this,this.AEF,this.AIU],0);},AEZ:function(
E){if(this.K&&this.K.AEZ)return this.K.AEZ.apply(this,arguments);else return C.DeviceClass.
Bu5.apply(this,arguments);},Bu5:function(E){},Bbn:function(Aq){this.AEZ(Aq);},UpdateAlarmListAction:
function(AK){if(this.AMg===AK)return;this.AMg=AK;A.abo([this,this.A8I,this.Bbn],
0);},AFh:function(E){if(this.K&&this.K.AFh)return this.K.AFh.apply(this,arguments
);else return C.DeviceClass.Bvs.apply(this,arguments);},Bvs:function(E){},Bbw:function(
Aq){this.AFh(Aq);},UpdateFlashLightInMeasureState:function(Bco){if(this.AmR===Bco
)return;this.AmR=Bco;A.abo([this,this.A8U,this.Bbw],0);},AeX:function(E){if(this.
K&&this.K.AeX)return this.K.AeX.apply(this,arguments);else return C.DeviceClass.
Bu8.apply(this,arguments);},Bu8:function(E){},AIT:function(Aq){this.AeX(Aq);},UpdateAnimalInfoContent:
function(AK){if(this.D9===AK)return;this.D9=AK;A.abo([this,this.AEE,this.AIT],0);
},AF_:function(E){if(this.K&&this.K.AF_)return this.K.AF_.apply(this,arguments);
else return C.DeviceClass.Bwi.apply(this,arguments);},Bwi:function(E){},BbP:function(
Aq){this.AF_(Aq);},UpdateWatchListAction:function(AK){if(this.AVU===AK)return;this.
AVU=AK;A.abo([this,this.A9E,this.BbP],0);},AFj:function(E){if(this.K&&this.K.AFj
)return this.K.AFj.apply(this,arguments);else return C.DeviceClass.Bvu.apply(this
,arguments);},Bvu:function(E){},Bby:function(Aq){this.AFj(Aq);},UpdateFreshCowListAction:
function(AK){if(this.AOI===AK)return;this.AOI=AK;A.abo([this,this.A8W,this.Bby],
0);},ResetActiveActions:function(G){if(this.K&&this.K.ResetActiveActions)return this.
K.ResetActiveActions.apply(this,arguments);else return C.DeviceClass.Bwu.apply(this
,arguments);},Bwu:function(G){},BGQ:function(s){this.ResetActiveActions(s);},ResetAutoActions:
function(G){if(this.K&&this.K.ResetAutoActions)return this.K.ResetAutoActions.apply(
this,arguments);else return C.DeviceClass.Bww.apply(this,arguments);},Bww:function(
G){},BGS:function(s){this.ResetAutoActions(s);},Aww:function(E){if(this.K&&this.
K.Aww)return this.K.Aww.apply(this,arguments);else return C.DeviceClass.Bu$.apply(
this,arguments);},Bu$:function(E){},Bbo:function(Aq){this.Aww(Aq);},Ar9:function(
E){if(this.K&&this.K.Ar9)return this.K.Ar9.apply(this,arguments);else return C.DeviceClass.
Bv8.apply(this,arguments);},Bv8:function(E){},BbK:function(Aq){this.Ar9(Aq);},Ar_:
function(E){if(this.K&&this.K.Ar_)return this.K.Ar_.apply(this,arguments);else return C.
DeviceClass.Bv9.apply(this,arguments);},Bv9:function(E){},BbL:function(Aq){this.
Ar_(Aq);},Asu:function(G){if(this.K&&this.K.Asu)return this.K.Asu.apply(this,arguments
);else return C.DeviceClass.Bwz.apply(this,arguments);},Bwz:function(G){},BGV:function(
s){this.Asu(s);},UpdateTemperaturesLowString:function(AK){if(this.AG6===AK)return;
this.AG6=AK;A.abo([this,this.A9v,this.BbL],0);},UpdateTemperaturesHighString:function(
AK){if(this.AG5===AK)return;this.AG5=AK;A.abo([this,this.A9u,this.BbK],0);},UpdateAnimalTypesString:
function(AK){if(this.ABS===AK)return;this.ABS=AK;A.abo([this,this.A8K,this.Bbo],
0);},AwP:function(E){if(this.K&&this.K.AwP)return this.K.AwP.apply(this,arguments
);else return C.DeviceClass.Bvw.apply(this,arguments);},Bvw:function(E){},BbA:function(
Aq){this.AwP(Aq);},UpdateFreshCowsHideMeasured:function(AK){if(this.AqU===AK)return;
this.AqU=AK;A.abo([this,this.A8Y,this.BbA],0);},Ar1:function(E){if(this.K&&this.
K.Ar1)return this.K.Ar1.apply(this,arguments);else return C.DeviceClass.BvP.apply(
this,arguments);},BvP:function(E){},BbF:function(Aq){this.Ar1(Aq);},UpdateNaisIdLastUsedMale:
function(Xq){if(this.AEr===Xq)return;this.AEr=Xq;A.abo([this,this.A9c,this.BbF],
0);},Ar0:function(E){if(this.K&&this.K.Ar0)return this.K.Ar0.apply(this,arguments
);else return C.DeviceClass.BvO.apply(this,arguments);},BvO:function(E){},BbE:function(
Aq){this.Ar0(Aq);},UpdateNaisIdLastUsedFemale:function(Xq){if(this.AEq===Xq)return;
this.AEq=Xq;A.abo([this,this.A9b,this.BbE],0);},Aw2:function(E){if(this.K&&this.
K.Aw2)return this.K.Aw2.apply(this,arguments);else return C.DeviceClass.BvM.apply(
this,arguments);},BvM:function(E){},AyT:function(Aq){this.Aw2(Aq);},UpdateNaisIdIncrementMale:
function(Als){if(this.AR7===Als)return;this.AR7=Als;A.abo([this,this.Awo,this.AyT
],0);},Aw1:function(E){if(this.K&&this.K.Aw1)return this.K.Aw1.apply(this,arguments
);else return C.DeviceClass.BvL.apply(this,arguments);},BvL:function(E){},AyS:function(
Aq){this.Aw1(Aq);},UpdateNaisIdIncrementFemale:function(Als){if(this.AR6===Als)return;
this.AR6=Als;A.abo([this,this.Awn,this.AyS],0);},UpdateFirmware:function(){if(this.
K&&this.K.UpdateFirmware)return this.K.UpdateFirmware.apply(this,arguments);else
return C.DeviceClass.Bba.apply(this,arguments);},Bba:function(){},Anx:function(E
){if(this.K&&this.K.Anx)return this.K.Anx.apply(this,arguments);else return C.DeviceClass.
Bvf.apply(this,arguments);},Bvf:function(E){},Bbs:function(Aq){this.Anx(Aq);},UpdateBootloaderMessage:
function(AK){if(this.Aqu===AK)return;this.Aqu=AK;A.abo([this,this.A8Q,this.Bbs],
0);},AEU:function(E){if(this.K&&this.K.AEU)return this.K.AEU.apply(this,arguments
);else return C.DeviceClass.BuZ.apply(this,arguments);},BuZ:function(E){},Bbg:function(
Aq){this.AEU(Aq);},UpdateActionListAction:function(AK){if(this.ABK===AK)return;this.
ABK=AK;A.abo([this,this.A8z,this.Bbg],0);},Awu:function(E){if(this.K&&this.K.Awu
)return this.K.Awu.apply(this,arguments);else return C.DeviceClass.Bu0.apply(this
,arguments);},Bu0:function(E){},Bbh:function(Aq){this.Awu(Aq);},UpdateActionListHideMeasured:
function(AK){if(this.Aqg===AK)return;this.Aqg=AK;A.abo([this,this.A8A,this.Bbh],
0);},Uq:function(E){if(this.K&&this.K.Uq)return this.K.Uq.apply(this,arguments);
else return C.DeviceClass.Bu7.apply(this,arguments);},Bu7:function(E){},AoA:function(
Aq){this.Uq(Aq);},UpdateAnimalIdGenerationMethod:function(BcO){if(this.Ik===BcO)
return;this.Ik=BcO;A.abo([this,this.Anq,this.AoA],0);},AwH:function(E){if(this.K&&
this.K.AwH)return this.K.AwH.apply(this,arguments);else return C.DeviceClass.Bvm.
apply(this,arguments);},Bvm:function(E){},A0t:function(Aq){this.AwH(Aq);},UpdateDirectionOfCountingFemale:
function(Alm){if(this.ACG===Alm)return;this.ACG=Alm;A.abo([this,this.ASF,this.A0t
],0);},AwI:function(E){if(this.K&&this.K.AwI)return this.K.AwI.apply(this,arguments
);else return C.DeviceClass.Bvn.apply(this,arguments);},Bvn:function(E){},A0u:function(
Aq){this.AwI(Aq);},UpdateDirectionOfCountingMale:function(Alm){if(this.ACH===Alm
)return;this.ACH=Alm;A.abo([this,this.ASG,this.A0u],0);},AwJ:function(E){if(this.
K&&this.K.AwJ)return this.K.AwJ.apply(this,arguments);else return C.DeviceClass.
Bvo.apply(this,arguments);},Bvo:function(E){},AIX:function(Aq){this.AwJ(Aq);},UpdateDirectionOfCountingUnisex:
function(Alm){if(this.Au_===Alm)return;this.Au_=Alm;A.abo([this,this.AEJ,this.AIX
],0);},ArW:function(E){if(this.K&&this.K.ArW)return this.K.ArW.apply(this,arguments
);else return C.DeviceClass.BvA.apply(this,arguments);},BvA:function(E){},AoB:function(
Aq){this.ArW(Aq);},UpdateIDLastUsedUnisex:function(Rq){if(this.AjV===Rq)return;this.
AjV=Rq;A.abo([this,this.Ant,this.AoB],0);},Ar2:function(E){if(this.K&&this.K.Ar2
)return this.K.Ar2.apply(this,arguments);else return C.DeviceClass.BvQ.apply(this
,arguments);},BvQ:function(E){},A0y:function(Aq){this.Ar2(Aq);},UpdateNaisIdLastUsedUnisex:
function(Xq){if(this.Av9===Xq)return;this.Av9=Xq;A.abo([this,this.ASO,this.A0y],
0);},Aw3:function(E){if(this.K&&this.K.Aw3)return this.K.Aw3.apply(this,arguments
);else return C.DeviceClass.BvN.apply(this,arguments);},BvN:function(E){},AyU:function(
Aq){this.Aw3(Aq);},UpdateNaisIdIncrementUnisex:function(Als){if(this.AR8===Als)return;
this.AR8=Als;A.abo([this,this.Awp,this.AyU],0);},Akx:function(E){if(this.K&&this.
K.Akx)return this.K.Akx.apply(this,arguments);else return C.DeviceClass.Bvq.apply(
this,arguments);},Bvq:function(E){},AyP:function(Aq){this.Akx(Aq);},UpdateEartagNrAssignmentMode:
function(Aln){if(this.EartagNrAssignmentMode===Aln)return;this.EartagNrAssignmentMode=
Aln;A.abo([this,this.Awi,this.AyP],0);},N3:function(E){if(this.K&&this.K.N3)return this.
K.N3.apply(this,arguments);else return C.DeviceClass.Bvh.apply(this,arguments);}
,Bvh:function(E){},BwR:function(Aq){this.N3(Aq);},UpdateBreed:function(Ac0){if(this.
Breed===Ac0)return;this.Breed=Ac0;A.abo([this,this.Awe,this.BwR],0);},AFD:function(
E){if(this.K&&this.K.AFD)return this.K.AFD.apply(this,arguments);else return C.DeviceClass.
BvI.apply(this,arguments);},BvI:function(E){},BwU:function(Aq){this.AFD(Aq);},UpdateMiddlewareVersions:
function(Qi,A1g,A1h,A1o,A07){this.SB.OnSetTimestamp(Qi);this.SB.AFy(A1g);this.SB.
AFE(A1h);this.SB.AFO(A1o);this.SB.AFd(A07);A.abo([this,this.BlB,this.BwU],0);},AFx:
function(E){if(this.K&&this.K.AFx)return this.K.AFx.apply(this,arguments);else return C.
DeviceClass.BvC.apply(this,arguments);},BvC:function(E){},BwT:function(Aq){this.
AFx(Aq);},UpdateMainboardVersions:function(Qi,A1e,A1f,A1d,A1u,A1v,A1t){this.Q1.OnSetTimestamp(
Qi);this.Q1.AFv(A1e);this.Q1.AFw(A1f);this.Q1.AFu(A1d);this.Q1.AF2(A1u);this.Q1.
AF3(A1v);this.Q1.AF1(A1t);A.abo([this,this.Blz,this.BwT],0);},AF4:function(E){if(
this.K&&this.K.AF4)return this.K.AF4.apply(this,arguments);else return C.DeviceClass.
Bv$.apply(this,arguments);},Bv$:function(E){},Bw0:function(Aq){this.AF4(Aq);},UpdateTorchboardVersions:
function(Qi,A1e,A1f,A1d,A1u,A1v,A1t){this.S0.OnSetTimestamp(Qi);this.S0.AFv(A1e);
this.S0.AFw(A1f);this.S0.AFu(A1d);this.S0.AF2(A1u);this.S0.AF3(A1v);this.S0.AF1(
A1t);A.abo([this,this.BlZ,this.Bw0],0);},AE5:function(E){if(this.K&&this.K.AE5)return this.
K.AE5.apply(this,arguments);else return C.DeviceClass.Bvg.apply(this,arguments);
},Bvg:function(E){},BwQ:function(Aq){this.AE5(Aq);},UpdateBootloaderVersions:function(
Qi,A1g,A1h,A1o,A07){this.R3.OnSetTimestamp(Qi);this.R3.AFy(A1g);this.R3.AFE(A1h);
this.R3.AFO(A1o);this.R3.AFd(A07);A.abo([this,this.Bk9,this.BwQ],0);},AFf:function(
E){if(this.K&&this.K.AFf)return this.K.AFf.apply(this,arguments);else return C.DeviceClass.
Bvp.apply(this,arguments);},Bvp:function(E){},Bbv:function(Aq){this.AFf(Aq);},UpdateDryCowListAction:
function(AK){if(this.AN6===AK)return;this.AN6=AK;A.abo([this,this.A8S,this.Bbv],
0);},AJN:function(A08){if(this.K&&this.K.AJN)return this.K.AJN.apply(this,arguments
);else return C.DeviceClass.Bxa.apply(this,arguments);},Bxa:function(A08){return false;
},AE3:function(E){if(this.K&&this.K.AE3)return this.K.AE3.apply(this,arguments);
else return C.DeviceClass.Bvd.apply(this,arguments);},Bvd:function(E){},AIV:function(
Aq){this.AE3(Aq);},UpdateBirthListView:function(AK){if(this.Aqs===AK)return;this.
Aqs=AK;A.abo([this,this.AEG,this.AIV],0);},BatchResetBirthNoticePending:function(
){var O;var AiY=0;var Adj=A._GetAutoObject(C.Device).An.Filter;var Be=A._GetAutoObject(
C.Helper).AOM();A._GetAutoObject(C.Device).An.Bk(Be);for(O=0;O<A._GetAutoObject(
C.Device).An.B_();O++){A._GetAutoObject(C.Helper).G8(O);A._GetAutoObject(C.Helper
).W.Ae6(false);A._GetAutoObject(C.Helper).W.Ci(A._GetAutoObject(C.Device).An);AiY++;
}A._GetAutoObject(C.Device).An.Bk(Adj);return AiY;},UpdateTransferProgress:function(
AK){if(this.AxU===AK)return;this.AxU=AK;A.abo([this,this.AS1,this.A0H],0);},AF5:
function(E){if(this.K&&this.K.AF5)return this.K.AF5.apply(this,arguments);else return C.
DeviceClass.Bwa.apply(this,arguments);},Bwa:function(E){A.ab5("%s",Qa);},A0H:function(
Aq){this.AF5(Aq);},UpdateTransferTarget:function(AK){if(this.Afr===AK)return;this.
Afr=AK;A.abo([this,this.A9y,this.BbM],0);},Ar$:function(E){if(this.K&&this.K.Ar$
)return this.K.Ar$.apply(this,arguments);else return C.DeviceClass.Bwb.apply(this
,arguments);},Bwb:function(E){A.ab5("%s",J6);},BbM:function(Aq){this.Ar$(Aq);},AsI:
function(){if(this.K&&this.K.AsI)return this.K.AsI.apply(this,arguments);else return C.
DeviceClass.BwK.apply(this,arguments);},BwK:function(){},Aw7:function(E){if(this.
K&&this.K.Aw7)return this.K.Aw7.apply(this,arguments);else return C.DeviceClass.
BvW.apply(this,arguments);},BvW:function(E){},A0B:function(Aq){this.Aw7(Aq);},UpdatePremisesID:
function(Rq){if(this.PY===Rq)return;this.PY=Rq;A.abo([this,this.AST,this.A0B],0);
},Aw0:function(E){if(this.K&&this.K.Aw0)return this.K.Aw0.apply(this,arguments);
else return C.DeviceClass.BvK.apply(this,arguments);},BvK:function(E){},AI0:function(
Aq){this.Aw0(Aq);},UpdateMotherSelectionDriedOffFilter:function(AK){if(this.AbU===
AK)return;this.AbU=AK;A.abo([this,this.AEN,this.AI0],0);},AFk:function(E){if(this.
K&&this.K.AFk)return this.K.AFk.apply(this,arguments);else return C.DeviceClass.
Bvv.apply(this,arguments);},Bvv:function(E){},Bbz:function(Aq){this.AFk(Aq);},UpdateFreshCowSpan:
function(AK){if(this.AqT===AK)return;this.AqT=AK;A.abo([this,this.A8X,this.Bbz],
0);},UpdateUSBDevice:function(BcF,BcG,Bcw){if(((this.P4.Z1===BcF)&&(this.P4.AsS===
BcG))&&(this.P4.Asl===Bcw))return;this.P4.A_1(BcF);this.P4.A_3(BcG);this.P4.A_H(
Bcw);A.abo([this,this.WD,this.Xj],0);},AF6:function(E){if(this.K&&this.K.AF6)return this.
K.AF6.apply(this,arguments);else return C.DeviceClass.Bwe.apply(this,arguments);
},Bwe:function(E){A.ab5("%s",E7);},Xj:function(Aq){this.AF6(Aq);},AxK:function(){
if(this.K&&this.K.AxK)return this.K.AxK.apply(this,arguments);else return C.DeviceClass.
BwE.apply(this,arguments);},BwE:function(){},Ari:function(){if(this.K&&this.K.Ari
)return this.K.Ari.apply(this,arguments);else return C.DeviceClass.BuY.apply(this
,arguments);},BuY:function(){return false;},AqE:function(){if(this.K&&this.K.AqE
)return this.K.AqE.apply(this,arguments);else return C.DeviceClass.BuT.apply(this
,arguments);},BuT:function(){},AFR:function(E){if(this.K&&this.K.AFR)return this.
K.AFR.apply(this,arguments);else return C.DeviceClass.Bv2.apply(this,arguments);
},Bv2:function(E){},BwX:function(Aq){this.AFR(Aq);},UpdateSerialNumber:function(
AK){if(this.AhL===AK)return;this.AhL=AK;A.abo([this,this.BlO,this.BwX],0);},Awv:
function(E){if(this.K&&this.K.Awv)return this.K.Awv.apply(this,arguments);else return C.
DeviceClass.Bu6.apply(this,arguments);},Bu6:function(E){},A0s:function(Aq){this.
Awv(Aq);},UpdateAnimalIdAutoGenerationMethod:function(BcN){if(this.AgA===BcN)return;
this.AgA=BcN;A.abo([this,this.ASA,this.A0s],0);},ACu:function(){return false;},AGy:
function(){return false;},AFT:function(E){if(this.K&&this.K.AFT)return this.K.AFT.
apply(this,arguments);else return C.DeviceClass.Bv3.apply(this,arguments);},Bv3:
function(E){},BbJ:function(Aq){this.AFT(Aq);},UpdateShutdownTimer:function(AK){if(
this.AU5===AK)return;this.AU5=AK;A.abo([this,this.A9r,this.BbJ],0);},Asv:function(
G){if(this.K&&this.K.Asv)return this.K.Asv.apply(this,arguments);else return C.DeviceClass.
BwA.apply(this,arguments);},BwA:function(G){},BGW:function(s){this.Asv(s);},Asc:
function(E){if(this.K&&this.K.Asc)return this.K.Asc.apply(this,arguments);else return C.
DeviceClass.Bwk.apply(this,arguments);},Bwk:function(E){},BbR:function(Aq){this.
Asc(Aq);},Asd:function(E){if(this.K&&this.K.Asd)return this.K.Asd.apply(this,arguments
);else return C.DeviceClass.Bwl.apply(this,arguments);},Bwl:function(E){},BbS:function(
Aq){this.Asd(Aq);},UpdateWeightGainsLowString:function(AK){if(this.AHp===AK)return;
this.AHp=AK;A.abo([this,this.A9H,this.BbS],0);},UpdateWeightGainsHighString:function(
AK){if(this.AHo===AK)return;this.AHo=AK;A.abo([this,this.A9G,this.BbR],0);},Awx:
function(E){if(this.K&&this.K.Awx)return this.K.Awx.apply(this,arguments);else return C.
DeviceClass.Bva.apply(this,arguments);},Bva:function(E){},Bbp:function(Aq){this.
Awx(Aq);},UpdateAnimalTypesWeightGainsString:function(AK){if(this.ABT===AK)return;
this.ABT=AK;A.abo([this,this.A8L,this.Bbp],0);},Asb:function(E){if(this.K&&this.
K.Asb)return this.K.Asb.apply(this,arguments);else return C.DeviceClass.Bwj.apply(
this,arguments);},Bwj:function(E){},BbQ:function(Aq){this.Asb(Aq);},Ase:function(
E){if(this.K&&this.K.Ase)return this.K.Ase.apply(this,arguments);else return C.DeviceClass.
Bwp.apply(this,arguments);},Bwp:function(E){},BbV:function(Aq){this.Ase(Aq);},UpdateWeightValueBirthString:
function(AK){if(this.AHs===AK)return;this.AHs=AK;A.abo([this,this.A9K,this.BbV],
0);},UpdateWeightGainsAverageString:function(AK){if(this.AHn===AK)return;this.AHn=
AK;A.abo([this,this.A9F,this.BbQ],0);},AwK:function(E){if(this.K&&this.K.AwK)return this.
K.AwK.apply(this,arguments);else return C.DeviceClass.Bvr.apply(this,arguments);
},Bvr:function(E){},BwS:function(Aq){this.AwK(Aq);},UpdateEvaluationAnimalType:function(
Eo){if(this.ACO===Eo)return;this.ACO=Eo;A.abo([this,this.Bli,this.BwS],0);},UpdateStartScreen:
function(AK){if(this.AxM===AK)return;this.AxM=AK;A.abo([this,this.BlP,this.BwY],
0);},Aw$:function(E){if(this.K&&this.K.Aw$)return this.K.Aw$.apply(this,arguments
);else return C.DeviceClass.Bv4.apply(this,arguments);},Bv4:function(E){},BwY:function(
Aq){this.Aw$(Aq);},AD4:function(){if(this.K&&this.K.AD4)return this.K.AD4.apply(
this,arguments);else return C.DeviceClass.BuW.apply(this,arguments);},BuW:function(
){return 1;},AD5:function(){if(this.K&&this.K.AD5)return this.K.AD5.apply(this,arguments
);else return C.DeviceClass.BuX.apply(this,arguments);},BuX:function(){return 1;
},GetCommitCount:function(){return 2173;},GetCommitEpoch:function(){return 1714662121;
},GetCommitHash:function(){return A.kR.Bh8;},GetVersionMajor:function(){return 0;
},GetVersionMinor:function(){return 9;},GetVersionRev:function(){return 9;},AFC:
function(E){if(this.K&&this.K.AFC)return this.K.AFC.apply(this,arguments);else return C.
DeviceClass.BvG.apply(this,arguments);},BvG:function(E){},BbD:function(Aq){this.
AFC(Aq);},UpdateMaximumAgeNewOnFarm:function(AK){if(this.Av4===AK)return;this.Av4=
AK;A.abo([this,this.A9a,this.BbD],0);},Axf:function(E){if(this.K&&this.K.Axf)return this.
K.Axf.apply(this,arguments);else return C.DeviceClass.Bwc.apply(this,arguments);
},Bwc:function(E){},A0I:function(Aq){this.Axf(Aq);},UpdateTransponderAssignmentIdChangeMethod:
function(Ay9){if(this.Ak5===Ay9)return;this.Ak5=Ay9;A.abo([this,this.AS2,this.A0I
],0);},BatchResetPurchasedNoticePending:function(){var O;var AiY=0;var Adj=A._GetAutoObject(
C.Device).An.Filter;var Be=A._GetAutoObject(C.Helper).Avy();A._GetAutoObject(C.Device
).An.Bk(Be);for(O=0;O<A._GetAutoObject(C.Device).An.B_();O++){A._GetAutoObject(C.
Helper).G8(O);A._GetAutoObject(C.Helper).W.Ae6(false);A._GetAutoObject(C.Helper).
W.Ci(A._GetAutoObject(C.Device).An);AiY++;}A._GetAutoObject(C.Device).An.Bk(Adj);
return AiY;},BnD:function(E){},UpdateMassRecordingAutomatic:function(AK){if(this.
ART===AK)return;this.ART=AK;A.abo([this,this.BlA,this.BnD],0);},Nm:function(E){if(
this.K&&this.K.Nm)return this.K.Nm.apply(this,arguments);else return C.DeviceClass.
Bwq.apply(this,arguments);},Bwq:function(E){},Bw1:function(Aq){this.Nm(Aq);},UpdateWhereAbouts:
function(AfN){if(this.WhereAbouts===AfN)return;this.WhereAbouts=AfN;A.abo([this,
this.Aws,this.Bw1],0);},ArI:function(E){if(this.K&&this.K.ArI)return this.K.ArI.
apply(this,arguments);else return C.DeviceClass.Bu1.apply(this,arguments);},Bu1:
function(E){},Bbj:function(Aq){this.ArI(Aq);},ArJ:function(E){if(this.K&&this.K.
ArJ)return this.K.ArJ.apply(this,arguments);else return C.DeviceClass.Bu2.apply(
this,arguments);},Bu2:function(E){},Bbk:function(Aq){this.ArJ(Aq);},UpdateActiveMassRecordingFields:
function(AK){if(this.ABL===AK)return;this.ABL=AK;A.abo([this,this.A8C,this.Bbj],
0);},UpdateActiveMassRecordingFieldsOrder:function(AK){if(this.ABM===AK)return;this.
ABM=AK;A.abo([this,this.A8D,this.Bbk],0);},Ass:function(G){if(this.K&&this.K.Ass
)return this.K.Ass.apply(this,arguments);else return C.DeviceClass.Bwv.apply(this
,arguments);},Bwv:function(G){},BGR:function(s){this.Ass(s);},AFA:function(E){if(
this.K&&this.K.AFA)return this.K.AFA.apply(this,arguments);else return C.DeviceClass.
BvD.apply(this,arguments);},BvD:function(E){},AIY:function(Aq){this.AFA(Aq);},UpdateMassRecordingDateOfBirthMandatory:
function(AK){if(this.AeP===AK)return;this.AeP=AK;A.abo([this,this.AEK,this.AIY],
0);},AFz:function(E){this.UpdateMassRecordingCounter(E);},UpdateMassRecordingCounter:
function(AK){if(this.Av2===AK)return;this.Av2=AK;A.abo([this,this.A8_,this.AFz],
0);},AjC:function(){if(this.K&&this.K.AjC)return this.K.AjC.apply(this,arguments
);else return C.DeviceClass.BuR.apply(this,arguments);},BuR:function(){return false;
},Aqq:function(){if(this.K&&this.K.Aqq)return this.K.Aqq.apply(this,arguments);else
return C.DeviceClass.BuQ.apply(this,arguments);},BuQ:function(){return false;},Aqp:
function(){if(this.K&&this.K.Aqp)return this.K.Aqp.apply(this,arguments);else return C.
DeviceClass.BuP.apply(this,arguments);},BuP:function(){return false;},AuY:function(
){if(this.K&&this.K.AuY)return this.K.AuY.apply(this,arguments);else return C.DeviceClass.
BuS.apply(this,arguments);},BuS:function(){return false;},AwX:function(E){if(this.
K&&this.K.AwX)return this.K.AwX.apply(this,arguments);else return C.DeviceClass.
BvF.apply(this,arguments);},BvF:function(E){},BbC:function(Aq){this.AwX(Aq);},UpdateMaxWeightValuePrecision:
function(AK){if(this.OP===AK)return;this.OP=AK;A.abo([this,this.A8$,this.BbC],0);
},Aw4:function(E){if(this.K&&this.K.Aw4)return this.K.Aw4.apply(this,arguments);
else return C.DeviceClass.BvR.apply(this,arguments);},BvR:function(E){},BbG:function(
Aq){this.Aw4(Aq);},UpdateNoNaisIdListActions:function(AK){if(this.ASi===AK)return;
this.ASi=AK;A.abo([this,this.A9d,this.BbG],0);},ResetNoNaisIdListActions:function(
G){if(this.K&&this.K.ResetNoNaisIdListActions)return this.K.ResetNoNaisIdListActions.
apply(this,arguments);else return C.DeviceClass.Bwx.apply(this,arguments);},Bwx:
function(G){},BGT:function(s){this.ResetNoNaisIdListActions(s);},Aw5:function(E){
if(this.K&&this.K.Aw5)return this.K.Aw5.apply(this,arguments);else return C.DeviceClass.
BvS.apply(this,arguments);},BvS:function(E){},BbH:function(Aq){this.Aw5(Aq);},UpdateNoTransponderListActions:
function(AK){if(this.ASn===AK)return;this.ASn=AK;A.abo([this,this.A9e,this.BbH],
0);},ResetNoTransponderListActions:function(G){if(this.K&&this.K.ResetNoTransponderListActions
)return this.K.ResetNoTransponderListActions.apply(this,arguments);else return C.
DeviceClass.Bwy.apply(this,arguments);},Bwy:function(G){},BGU:function(s){this.ResetNoTransponderListActions(
s);},Axl:function(E){if(this.K&&this.K.Axl)return this.K.Axl.apply(this,arguments
);else return C.DeviceClass.Bwr.apply(this,arguments);},Bwr:function(E){},BbW:function(
Aq){this.Axl(Aq);},UpdateYoungNoTransponderListActions:function(AK){if(this.AV9===
AK)return;this.AV9=AK;A.abo([this,this.A9M,this.BbW],0);},ResetYoungNoTransponderListActions:
function(G){if(this.K&&this.K.ResetYoungNoTransponderListActions)return this.K.ResetYoungNoTransponderListActions.
apply(this,arguments);else return C.DeviceClass.BwB.apply(this,arguments);},BwB:
function(G){},BGX:function(s){this.ResetYoungNoTransponderListActions(s);},Axg:function(
E){if(this.K&&this.K.Axg)return this.K.Axg.apply(this,arguments);else return C.DeviceClass.
Bwd.apply(this,arguments);},Bwd:function(E){},A0J:function(Aq){this.Axg(Aq);},UpdateTransponderUnlinkIdChangeMethod:
function(Ay9){if(this.An6===Ay9)return;this.An6=Ay9;A.abo([this,this.AS3,this.A0J
],0);},Asr:function(AoG,AJj){if(this.K&&this.K.Asr)return this.K.Asr.apply(this,
arguments);else return C.DeviceClass.Bwt.apply(this,arguments);},Bwt:function(AoG
,AJj){this.Gf.E6();this.Gf.AgN=AoG;this.Gf.AU4=AJj;this.Gf.E5(1);A._GetAutoObject(
C.Device).A3(110,true,A.jV,0,[this,this.BAS]);},BAS:function(G){var As=(C.PopupContext.
isPrototypeOf(G)?G:null);if(!!As&&(As.PopupState===9))A.aaS([this,this.BCw],this
);},BCw:function(G){this.Gf.E5(2);this.AxK();A._GetAutoObject(C.Device).A3(110,false
,A.jV,0,null);},AE4:function(E){if(this.K&&this.K.AE4)return this.K.AE4.apply(this
,arguments);else return C.DeviceClass.Bve.apply(this,arguments);},Bve:function(E
){},Bbr:function(Aq){this.AE4(Aq);},UpdateBirthRegistrationsListResetOnExport:function(
AK){if(this.AM2===AK)return;this.AM2=AK;A.abo([this,this.A8O,this.Bbr],0);},AFL:
function(E){if(this.K&&this.K.AFL)return this.K.AFL.apply(this,arguments);else return C.
DeviceClass.BvX.apply(this,arguments);},BvX:function(E){},BbI:function(Aq){this.
AFL(Aq);},UpdatePurchasedListResetOnExport:function(AK){if(this.AUh===AK)return;
this.AUh=AK;A.abo([this,this.A9g,this.BbI],0);},Bo0:function(){},AED:function(){
return this.Ij;},Awc:function(){return this.Aa6;},Awf:function(){return this.AmE;
},ASW:function(){return this.ScanState;},AEL:function(){return this.MeasureState;
},AEP:function(){return this.Lw;},A86:function(){return this.Language;},ArB:function(
){return this.TemperatureUnit;},A8R:function(){return this.AM9;},ASN:function(){
return this.AEp;},Awr:function(){return this.OverlayMenu;},A9z:function(){return this.
AcG;},ASY:function(){return this.SyncState;},A9A:function(){return this.AsT;},AEQ:
function(){return this.AVS;},ASV:function(){return this.RatingMode;},Ary:function(
){return this.AmS;},AS0:function(){return this.AVx;},BlH:function(){return this.
AUi;},Bk6:function(){return this.AutoRegistrationMode;},ASX:function(){return this.
OV;},Un:function(){return this.A2;},Uo:function(){return this.AF;},AER:function(
){return this.KZ;},ASM:function(){return this.MassUnit;},A8B:function(){return this.
Pn;},ASz:function(){return this.AuJ;},A8M:function(){return this.AutoActions;},PT:
function(){return this.AnimalType;},A9I:function(){return this.WeightRecordingMode;
},ASS:function(){return this.AGk;},AEI:function(){return this.HG;},A8G:function(
){return this.AdT;},A9J:function(){return this.WeightRecordingScope;},WC:function(
){return this.Gender;},Awk:function(){return this.Aq7;},Awj:function(){return this.
Aq6;},AEF:function(){return this.Km;},A8I:function(){return this.AMg;},A8U:function(
){return this.AmR;},AEE:function(){return this.D9;},A9E:function(){return this.AVU;
},A8W:function(){return this.AOI;},A8K:function(){return this.ABS;},A9u:function(
){return this.AG5;},A9v:function(){return this.AG6;},A8Y:function(){return this.
AqU;},A9c:function(){return this.AEr;},A9b:function(){return this.AEq;},Awo:function(
){return this.AR7;},Awn:function(){return this.AR6;},A8Q:function(){return this.
Aqu;},A8z:function(){return this.ABK;},A8A:function(){return this.Aqg;},Anq:function(
){return this.Ik;},ASF:function(){return this.ACG;},ASG:function(){return this.ACH;
},AEJ:function(){return this.Au_;},Ant:function(){return this.AjV;},ASO:function(
){return this.Av9;},Awp:function(){return this.AR8;},Awi:function(){return this.
EartagNrAssignmentMode;},Awe:function(){return this.Breed;},BlB:function(){return this.
SB;},Blz:function(){return this.Q1;},BlZ:function(){return this.S0;},Bk9:function(
){return this.R3;},A8S:function(){return this.AN6;},AEG:function(){return this.Aqs;
},AS1:function(){return this.AxU;},A9y:function(){return this.Afr;},AST:function(
){return this.PY;},AEN:function(){return this.AbU;},A8X:function(){return this.AqT;
},WD:function(){return this.P4;},BlO:function(){return this.AhL;},ASA:function(){
return this.AgA;},A9r:function(){return this.AU5;},A9G:function(){return this.AHo;
},A9H:function(){return this.AHp;},A8L:function(){return this.ABT;},A9F:function(
){return this.AHn;},A9K:function(){return this.AHs;},Bli:function(){return this.
ACO;},BlP:function(){return this.AxM;},A9a:function(){return this.Av4;},AS2:function(
){return this.Ak5;},BlA:function(){return this.ART;},Aws:function(){return this.
WhereAbouts;},A8C:function(){return this.ABL;},A8D:function(){return this.ABM;},
AEK:function(){return this.AeP;},A8_:function(){return this.Av2;},A8$:function(){
return this.OP;},A9d:function(){return this.ASi;},A9e:function(){return this.ASn;
},A9M:function(){return this.AV9;},AS3:function(){return this.An6;},A8O:function(
){return this.AM2;},A9g:function(){return this.AUh;},_Init:function(aArg){C.Table.
_Init.call(this.An={I:this},0);C.Table._Init.call(this.Bt={I:this},0);C.Table._Init.
call(this.Agy={I:this},0);A.Core.A$0._Init.call(this.AnO={I:this},0);C.Table._Init.
call(this.Pr={I:this},0);this.__proto__=C.DeviceClass;this.An.OnSetId(0);this.Bt.
OnSetId(1);this.Agy.OnSetId(3);this.Pr.OnSetId(4);this.OV=A._NewObject(C.Transponder
,0);this.SB=A._NewObject(C.AxJ,0);this.Q1=A._NewObject(C.AvB,0);this.S0=A._NewObject(
C.AvB,0);this.R3=A._NewObject(C.AxJ,0);this.P4=A._NewObject(C.Bah,0);this.Gf=A._NewObject(
C.VT,0);var J7=this._variants();if(J7){this.K={};J7._Init.call(this,aArg);}A.h7++;
},_Done:function(){if(this.K)this.K._Done.call(this);this.__proto__=null;this.An.
_Done();this.Bt._Done();this.Agy._Done();this.AnO._Done();this.Pr._Done();A.h7--;
},_ReInit:function(){this.An._ReInit();this.Bt._ReInit();this.Agy._ReInit();this.
AnO._ReInit();this.Pr._ReInit();if(this.K)this.K._ReInit.call(this);},_Mark:function(
D){var B;if((B=this.OV)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.SB)&&(B._cycle
!=D))B._Mark(B._cycle=D);if((B=this.Q1)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=
this.S0)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.R3)&&(B._cycle!=D))B._Mark(
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
A5:A.jV,Abk:function(){var Aw=A._NewObject(C.StringFilterCriterion,0);Aw.E$(this
);return Aw;},E$:function(AI){C.FilterCriterion.E$.call(this,AI);var Aw=(C.StringFilterCriterion.
isPrototypeOf(AI)?AI:null);if(!!Aw)this.A5=Aw.A5;},_Init:function(aArg){C.FilterCriterion.
_Init.call(this,aArg);this.__proto__=C.StringFilterCriterion;},_className:"Device::StringFilterCriterion"
};C.Table={CF:function(Ad,A4){if(this.K&&this.K.CF)return this.K.CF.apply(this,arguments
);else return C.ITable.CF.apply(this,arguments);},V2:function(Ad,A4){if(this.K&&
this.K.V2)return this.K.V2.apply(this,arguments);else return C.ITable.V2.apply(this
,arguments);},H3:function(Ad,A4){if(this.K&&this.K.H3)return this.K.H3.apply(this
,arguments);else return C.ITable.H3.apply(this,arguments);},OnSetId:function(E){
if(this.K&&this.K.OnSetId)return this.K.OnSetId.apply(this,arguments);else return C.
ITable.OnSetId.apply(this,arguments);},B_:function(){if(this.K&&this.K.B_)return this.
K.B_.apply(this,arguments);else return C.ITable.B_.apply(this,arguments);},Bk:function(
E){if(this.K&&this.K.Bk)return this.K.Bk.apply(this,arguments);else return C.ITable.
Bk.apply(this,arguments);},V3:function(Ad,A4){if(this.K&&this.K.V3)return this.K.
V3.apply(this,arguments);else return C.ITable.V3.apply(this,arguments);},Sm:function(
Ad,A4){if(this.K&&this.K.Sm)return this.K.Sm.apply(this,arguments);else return C.
ITable.Sm.apply(this,arguments);},OC:function(){if(this.K&&this.K.OC)return this.
K.OC.apply(this,arguments);else return C.ITable.OC.apply(this,arguments);},OE:function(
AoS){if(this.K&&this.K.OE)return this.K.OE.apply(this,arguments);else return C.ITable.
OE.apply(this,arguments);},YH:function(){if(this.K&&this.K.YH)return this.K.YH.apply(
this,arguments);else return C.ITable.YH.apply(this,arguments);},ZL:function(Ad,A4
,C0){if(this.K&&this.K.ZL)return this.K.ZL.apply(this,arguments);else return C.ITable.
ZL.apply(this,arguments);},Ho:function(Ad,A4,C0){if(this.K&&this.K.Ho)return this.
K.Ho.apply(this,arguments);else return C.ITable.Ho.apply(this,arguments);},ZK:function(
Ad,A4,C0){if(this.K&&this.K.ZK)return this.K.ZK.apply(this,arguments);else return C.
ITable.ZK.apply(this,arguments);},N9:function(Ad,A4,C0){if(this.K&&this.K.N9)return this.
K.N9.apply(this,arguments);else return C.ITable.N9.apply(this,arguments);},ZJ:function(
Ad,A4,C0){if(this.K&&this.K.ZJ)return this.K.ZJ.apply(this,arguments);else return C.
ITable.ZJ.apply(this,arguments);},LV:function(aColumn,A7){if(this.K&&this.K.LV)return this.
K.LV.apply(this,arguments);else return C.ITable.LV.apply(this,arguments);},KR:function(
Ad,A4){if(this.K&&this.K.KR)return this.K.KR.apply(this,arguments);else return C.
ITable.KR.apply(this,arguments);},UE:function(Ad,A4,C0){if(this.K&&this.K.UE)return this.
K.UE.apply(this,arguments);else return C.ITable.UE.apply(this,arguments);},AgZ:function(
aColumn,A7){if(this.K&&this.K.AgZ)return this.K.AgZ.apply(this,arguments);else return C.
ITable.AgZ.apply(this,arguments);},E6:function(){if(this.K&&this.K.E6)return this.
K.E6.apply(this,arguments);else return C.ITable.E6.apply(this,arguments);},AjL:function(
aColumn,A7){if(this.K&&this.K.AjL)return this.K.AjL.apply(this,arguments);else return C.
ITable.AjL.apply(this,arguments);},Aem:function(aColumn,A7){if(this.K&&this.K.Aem
)return this.K.Aem.apply(this,arguments);else return C.ITable.Aem.apply(this,arguments
);},HK:function(){if(this.K&&this.K.HK)return this.K.HK.apply(this,arguments);else
return C.ITable.HK.apply(this,arguments);},Abs:function(){if(this.K&&this.K.Abs)
return this.K.Abs.apply(this,arguments);else return C.ITable.Abs.apply(this,arguments
);},QK:function(){if(this.K&&this.K.QK)return this.K.QK.apply(this,arguments);else
return C.ITable.QK.apply(this,arguments);},_Init:function(aArg){C.ITable._Init.call(
this,aArg);this.__proto__=C.Table;var J7=this._variants();if(J7){this.K={};J7._Init.
call(this,aArg);}},_Done:function(){if(this.K)this.K._Done.call(this);this.__proto__=
C.ITable;C.ITable._Done.call(this);},_ReInit:function(){C.ITable._ReInit.call(this
);if(this.K)this.K._ReInit.call(this);},_Mark:function(D){C.ITable._Mark.call(this
,D);if(this.K)this.K._Mark(D);},_variants:function(){return A.acs.Table._variants(
);},K:null,_className:"Device::Table"};C.TableId={Animal:0,Rating:1,Undefined:2,
AnimalGroup:3,CalfDeregistrations:4};C.ScanState={Idle:0,Progress:1,IdScanned:2,
NotFound:3,Error:4,LAST:5};C.RatedAttribute={None:0,Feed:1,Appearance:2,Respiratory:
3,Faeces:4};C.ConverterClass={M6:null,Ak2:function(AoQ){var Bdm;var Auv=this.AVm(
AoQ/100,0,A._GetAutoObject(C.Device).TemperatureUnit);Bdm=A.abk(Auv,0,1);return Bdm;
},A$_:function(Nu){if(Nu<=0)return 0;else if(Nu<=1)return 5;else if(Nu<=2)return 3;
else if(Nu<=4)return 2;else if(Nu<=6)return 1;else if(Nu<=8)return 4;else return 0;
},Ad2:function(Nu){var a=0;switch(Nu){case 3:a=2;break;case 2:a=4;break;case 1:a=
6;break;case 0:a=0;break;case 4:a=8;break;case 5:a=1;break;default:A.ab5("%s",Od
);}return a;},AsK:function(Eo,Ru){var Nw=A._GetAutoObject(C.Converter).Ajn(Ru,Eo
);switch(Nw){case 3:return 1;case 2:return 2;case 1:return 3;case 0:return 4;default:
throw new Error(Qb+Nw.toFixed());}},AhT:function(){var B;var D8=A._NewObject(A.Core.
Bs,0).Initialize(A._GetAutoObject(C.Helper).Dv());D8.AnB(0);D8.AnE(0);D8.AnH(0);
return((B=(D8.JV()|0))<0)?B+0x100000000:B;},Bia:function(Att){var CV;switch(Att){
case 36:CV=ML;break;case 40:CV=S$;break;case 56:CV=UW;break;case 70:CV=Z5;break;
case 100:CV=W8;break;case 124:CV=It;break;case 156:CV=UX;break;case 158:CV=Z6;break;
case 191:CV=W9;break;case 196:CV=Z7;break;case 203:CV=W_;break;case 208:CV=Z8;break;
case 233:CV=Z9;break;case 246:CV=UY;break;case 250:CV=W$;break;case 276:CV=O7;break;
case 300:CV=Z_;break;case 348:CV=Oe;break;case 372:CV=Rn;break;case 380:CV=Xa;break;
case 392:CV=Xb;break;case 428:CV=Ta;break;case 440:CV=Z$;break;case 442:CV=Aaa;break;
case 470:CV=Xc;break;case 528:CV=Xd;break;case 578:CV=Tb;break;case 616:CV=Tc;break;
case 620:CV=Td;break;case 642:CV=Aab;break;case 643:CV=Te;break;case 703:CV=Aac;
break;case 705:CV=AfB;break;case 724:CV=Aad;break;case 752:CV=Xe;break;case 756:
CV=Aae;break;case 792:CV=Xf;break;case 804:CV=AhX;break;case 826:CV=K1;break;case
840:CV=AcN;break;default:CV=Att.toFixed();}return CV;},Ak$:function(MQ){var Aas;
if((MQ<10000)&&(A._GetAutoObject(C.Device).OP===2))Aas=2;else if((MQ<100000)&&!!
A._GetAutoObject(C.Device).OP)Aas=1;else Aas=0;return this.S_(MQ,Aas,false);},Ax7:
function(MQ,Aas){return this.S_(MQ,Aas,false);},S_:function(MQ,Aas,BAl){var B;var
AlF=A.jV;switch(A._GetAutoObject(C.Device).MassUnit){case 0:if(BAl)AlF=A.abl(MQ,
0,0);else{var BeK=MQ<0;if(Aas<3)MQ=MQ+(((BeK?-1:1)*5)*(Math.pow(10,2-Aas)|0));AlF=(((((
B=MQ)>-2147483648)?Math.abs(B):B)/1000)|0).toFixed();if(Aas>0)AlF=AlF+(Ly+A.abV(
A.abl((((B=MQ)>-2147483648)?Math.abs(B):B)%1000,3,10),Aas));if(BeK)AlF=AhY+AlF;}
break;case 1:AlF=A.abk(MQ/453.592,0,Aas);break;default:A.ab5("%s%s",Aoe,A._GetAutoObject(
C.Device).MassUnit.toFixed());}return AlF;},Rj:function(Iw){var A4O=Iw.toFixed();
var Bg2=A4O.length;if((Bg2>=14)&&(Bg2<=15)){var A2C=this.AxX(Iw);var Bza=A._GetAutoObject(
C.Converter).Bia(A2C);A4O=(Bza+Of)+A.abm(A._GetAutoObject(C.Helper).VY(Iw,0,12),
12,10);}return A4O;},AmV:function(L8){switch(L8){case 0:return A.aaL(A.ach.AQH);
case 1:return A.aaL(A.ach.ADL);case 2:return A.aaL(A.ach.ADP);default:{A.ab5("%s%e"
,Xg,L8);return null;}}},A5q:function(ByI){switch(ByI){case 0:return A.aaL(A.ach.
AvK);case 1:return A.aaL(A.ach.ADH);case 2:return A.aaL(A.ach.AQA);default:throw new
Error(Aaf);}},Ad0:function(AJt){switch(AJt){case 0:case 14:return A.aaL(A.ach.AjW
);case 2:return A.aaL(A.ach.Arc);case 1:return A.aaL(A.ach.Ag7);case 3:switch(A.
_GetAutoObject(C.Device).MassUnit){case 0:return A.aaL(A.ach.ADV);case 1:return A.
aaL(A.ach.ADW);default:throw new Error(AfC+A._GetAutoObject(C.Device).MassUnit.toFixed(
));}break;case 4:return A.aaL(A.ach.APY);case 5:return A.aaL(A.ach.APZ);case 6:return A.
aaL(A.ach.AP4);case 7:return A.aaL(A.ach.APk);case 8:case 13:return A.aaL(A.ach.
APr);case 9:return A.aaL(A.ach.ADi);case 10:return A.aaL(A.ach.APq);case 12:return A.
aaL(A.ach.APs);case 11:return A.aaL(A.ach.AP_);default:throw new Error(AhZ+AJt.toFixed(
));}},BhC:function(Azb){switch(Azb){case 0:return A.aaL(A.ach.AQz);case 3:return A.
aaL(A.ach.Arc);case 1:return A.aaL(A.ach.Ag7);case 2:return A._GetAutoObject(A.acj.
DU).BdL();default:throw new Error(AhZ+Azb.toFixed());}},Bh$:function(Att){switch(
Att){case 977:return AcO;case 978:return UZ;case 980:return Aof;case 981:return Aog;
case 982:return Aoh;case 983:return Aoi;case 984:return Alc;case 985:return AsZ;
default:return A.aaR(A.acf.Unknown);}},Biu:function(Ac2){switch(Ac2){case 1:return 0x278A;
case 2:return 0x278B;case 3:return 0x278C;case 4:return 0x278D;case 5:return 0x278E;
case 6:return 0x278F;case 7:return 0x2790;case 8:return 0x2791;case 9:return 0x2792;
case 10:return 0x2793;default:return 0x20;}},Bqu:function(Iw){if(!Iw)return-1;return(
Iw%100000000)|0;},Bi8:function(AoP,aFilter){var B;if(!aFilter)return Ax9;var Aph=
Ax_;var Aw=aFilter.AOQ();while(!!Aw){Aph=Aph+A._GetAutoObject(C.Helper).A62(AoP,
Aw);Aw=aFilter.AOV(Aw);if(!!Aw)Aph=Aph+O8;}Aph=Aph+Ro;return Aph;},A7I:function(
Bcp){var IX=0;switch(Bcp){case 14:IX=2;break;case 13:IX=4;break;case 6:IX=36;break;
case 11:IX=9;break;case 17:IX=11;break;case 0:IX=39;break;case 10:IX=26;break;case
12:IX=12;break;case 5:IX=14;break;case 3:IX=15;break;case 1:IX=10;break;case 8:IX=
16;break;case 18:IX=18;break;case 4:IX=20;break;case 19:IX=21;break;case 20:IX=24;
break;case 15:IX=27;break;case 21:IX=28;break;case 22:IX=29;break;case 23:IX=30;
break;case 9:IX=31;break;case 2:IX=13;break;case 24:IX=32;break;case 7:IX=35;break;
case 16:IX=37;break;default:A.ab5("%s%e",Ax$,Bcp);}return IX;},BhB:function(Azb){
switch(Azb){case 0:return 1;case 3:return 0;case 1:return 2;case 2:switch(A._GetAutoObject(
C.Device).MassUnit){case 0:return 3;case 1:return 4;default:throw new Error(AfC+
A._GetAutoObject(C.Device).MassUnit.toFixed());}break;default:throw new Error(AhZ+
Azb.toFixed());}},Ajr:function(Ao0){switch(Ao0){case 0:switch(A._GetAutoObject(C.
Device).MassUnit){case 0:return A.aaL(A.ach.APV);case 1:return A.aaL(A.ach.APU);
default:throw new Error(AfC+A._GetAutoObject(C.Device).MassUnit.toFixed());}break;
case 1:return A.aaL(A.ach.AQx);case 9:return A.aaL(A.ach.APR);case 4:return A.aaL(
A.ach.AQU);case 6:return A.aaL(A.ach.AQV);case 8:return A.aaL(A.ach.AP5);case 2:
return A.aaL(A.ach.AQZ);case 3:return A.aaL(A.ach.AQT);case 7:return A.aaL(A.ach.
AQ0);case 5:return A.aaL(A.ach.AQ1);case 10:switch(A._GetAutoObject(C.Device).MassUnit
){case 0:return A.aaL(A.ach.AQ8);case 1:return A.aaL(A.ach.AQ7);default:throw new
Error(AfC+A._GetAutoObject(C.Device).MassUnit.toFixed());}break;case 11:return A.
aaL(A.ach.AP$);case 12:return A.aaL(A.ach.AQB);case 16:return A.aaL(A.ach.AQC);case
19:case 13:case 14:case 18:case 15:case 17:return A.aaL(A.aci.TR);default:throw new
Error(U0+Ao0.toFixed());}},ANG:function(Att){switch(Att){case 40:return 1;case 56:
return 3;case 70:return 2;case 100:return 4;case 124:return 5;case 156:return 7;
case 158:return 36;case 191:return 17;case 196:return 8;case 203:return 9;case 208:
return 11;case 233:return 12;case 246:return 14;case 250:return 15;case 276:return 10;
case 300:return 16;case 348:return 18;case 372:return 19;case 380:return 20;case
392:return 21;case 428:return 24;case 440:return 22;case 442:return 23;case 470:
return 25;case 528:return 26;case 578:return 27;case 616:return 28;case 620:return 29;
case 642:return 30;case 643:return 31;case 703:return 34;case 705:return 33;case
724:return 13;case 752:return 32;case 756:return 6;case 792:return 35;case 804:return 37;
case 826:return 38;case 840:return 39;default:return 0;}},S3:function(Iw){var A2C=
this.AxX(Iw);return this.ANG(A2C);},AxX:function(Iw){return A._GetAutoObject(C.Helper
).VY(Iw,12,3)|0;},Bas:function(AoU,Eo){if(AoU<A._GetAutoObject(C.Helper).ADe(Eo)
)return 1;else if(AoU<A._GetAutoObject(C.Helper).ADd(Eo))return 2;else return 3;
},AC2:function(Bym){switch(Bym){case 1:return 1;case 2:return 2;case 3:return 3;
case 4:return 4;case 5:return 5;case 6:return 6;case 7:return 7;case 8:return 8;
case 9:return 9;case 10:return 10;case 11:return 11;case 12:return 12;case 13:return 13;
case 14:return 14;case 15:return 15;case 16:return 16;default:return 0;}},AVm:function(
A7,AJl,AJm){if(AJl===AJm)return A7;if(!AJl&&(AJm===1)){var result=((A7*9)/5)+32;
return result;}if((AJl===1)&&!AJm){var result=((A7-32)*5)/9;return result;}throw new
Error(((As0+AJl.toFixed())+Aya)+AJm.toFixed());},A6L:function(Eb){switch(Eb){case
0:return Ayb;case 1:return A.jV;case 2:return Ayc;case 3:return Aoj;case 4:return A.
aaR(A.acf.Contains);case 5:return AfD;default:{A.ab5("%s%e",Aok,Eb);return A.jV;
}}},A5P:function(Ac0){return this.M6.Ael(Ac0);},BjQ:function(Ac0){return this.M6.
AmG(Ac0);},BhT:function(Ats){var AAv=0;switch(Ats){case 0:AAv=1;break;case 1:AAv=
2;break;case 2:AAv=3;break;case 3:AAv=4;break;default:A.ab5("%s%e",IW,Ats);}return AAv;
},Ajn:function(A01,Eo){if(A01>=A._GetAutoObject(C.Helper).A6X(Eo))return 3;else if(
A01>=A._GetAutoObject(C.Helper).AC3(Eo))return 2;else if(A01<A._GetAutoObject(C.
Device).AcG)return 0;else return 1;},AqB:function(IX){var BM=-1;switch(IX){case 0:
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
throw new Error(Aol+IX.toFixed());}return BM;},A$8:function(Iw){return A._GetAutoObject(
C.Helper).VY(Iw,8,2)|0;},AVD:function(Iw){var BAg=this.A$8(Iw);return this.AC2(BAg
);},AL_:function(Eh){var Rw=19;switch(Eh){case 0:break;case 4:Rw=7;break;case 32:
case 2048:Rw=9;break;case 4096:Rw=11;break;case 32768:Rw=14;break;case 524288:Rw=
18;break;case 65536:Rw=15;break;case 128:Rw=17;break;case 16:Rw=1;break;case 16384:
Rw=12;break;case 1024:Rw=8;break;case 2:Rw=3;break;case 131072:Rw=16;break;case 1:
Rw=2;break;case 8:Rw=5;break;case 256:Rw=10;break;default:throw new Error(As1+Eh.
toFixed());}return Rw;},A$7:function(Iw){return A._GetAutoObject(C.Helper).VY(Iw
,10,2)|0;},_Init:function(aArg){C.M6._Init.call(this.M6={I:this},0);this.__proto__=
C.ConverterClass;A.h7++;},_Done:function(){this.__proto__=null;this.M6._Done();A.
h7--;},_ReInit:function(){this.M6._ReInit();},_Mark:function(D){var B;if((B=this.
M6)._cycle!=D)B._Mark(B._cycle=D);if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=
D);},I:null,_cycle:0,_observers:null,_className:"Device::ConverterClass"};C.Converter={
_Init:function(){C.ConverterClass._Init.call(this,0);},_ReInit:function(){},_variants:
function(){return this;},_this:null};C.MinLowTemperature=3000;C.MaxHighTemperature=
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
!AH){this.OnSetId(AH.CF(Ad,0));this.SK(AH.CF(Ad,1));this.Ab4(AH.CF(Ad,2));this.AnD(
AH.CF(Ad,3));this.Q6(AH.Hv(Ad,4));this.JX(AH.AOS(Ad,7));this.Akw(AH.Bjo(Ad,6));this.
EC(AH.AmW(Ad,14));this.PW(AH.KR(Ad,22));this.Nk(AH.KR(Ad,26));this.Axk(AH.I8(Ad,
13));this.Ae3(AH.H3(Ad,8));this.Axc(AH.Hv(Ad,15));this.ATS(AH.Hv(Ad,31));this.Ae9(
AH.A7a(Ad,5));this.ATq(AH.I8(Ad,17));this.Uu(AH.H3(Ad,11));this.ATR(AH.Hv(Ad,16)
);this.ATU(AH.Hv(Ad,30));this.AkC(AH.H3(Ad,9));this.Ae7(AH.H3(Ad,12));this.ATT(AH.
Hv(Ad,20));this.Axe(AH.Hv(Ad,21));this.Ae5(AH.H3(Ad,10));this.AwS(AH.H3(Ad,27));
this.AFt(AH.AC$(Ad,18));this.AFX(AH.Hv(Ad,19));this.AwN(AH.AC$(Ad,23));this.Axd(
AH.Hv(Ad,24));this.ATi(AH.CF(Ad,25));this.AwE(AH.Hv(Ad,28));this.AwT(AH.CF(Ad,29
));this.ArX(AH.H3(Ad,38));this.N3(AH.Bjp(Ad,32));this.Aky(AH.Bju(Ad,33));this.AnF(
AH.KR(Ad,35));this.Nm(AH.AO0(Ad,34));this.Ae6(AH.H3(Ad,37));this.AFM(AH.BjD(Ad,36
));}return HF;},Ci:function(AH){var HF=C.Row.Ci.call(this,AH);if(HF&&!!AH){var Jq=
AH.OC();if(Jq<=0)A.ab5("%s",Xh);else{var Az_=this.Am7();if(Az_)this.CL=AH.YH();else
AH.Ho(this.CL,0,this.Id);AH.Ho(this.CL,1,this.VisualId);AH.Ho(this.CL,2,this.GroupId
);AH.Ho(this.CL,3,this.LocationId);AH.Acn(this.CL,4,this.DateOfBirth);AH.Bpn(this.
CL,7,this.Gender);AH.Bpj(this.CL,6,this.BirthType);AH.Bph(this.CL,14,this.AnimalType
);AH.UE(this.CL,22,this.TransponderId);AH.UE(this.CL,26,this.NaisId);AH.AkT(this.
CL,13,this.WorstAssessment);AH.N9(this.CL,8,this.IsAlarm);AH.Acn(this.CL,15,this.
TimestampAlarm);AH.N9(this.CL,11,this.IsFever);AH.Acn(this.CL,16,this.TimestampExpirationFeverAlarm
);AH.N9(this.CL,9,this.IsControl);AH.N9(this.CL,12,this.IsWatch);AH.Acn(this.CL,
20,this.TimestampLastControl);AH.Acn(this.CL,21,this.TimestampLastWatch);AH.N9(this.
CL,10,this.IsRegistered);AH.N9(this.CL,27,this.IsPerished);AH.Acn(this.CL,28,this.
DateOfLastCalving);AH.Ho(this.CL,29,this.LactationNumber);AH.N9(this.CL,38,this.
IsDry);AH.Bpl(this.CL,32,this.Breed);AH.Bpm(this.CL,33,this.EaseOfDelivery);AH.UE(
this.CL,35,this.NaisIdMother);AH.Bpt(this.CL,34,this.WhereAbouts);AH.N9(this.CL,
37,this.IsRegistrationNoticePending);AH.Bpr(this.CL,36,this.ReasonOfLeaving);HF=
AH.OE(Jq);if(Az_)this.OnSetId(AH.Abs());}}return HF;},Gr:function(){C.Row.Gr.call(
this);this.OnSetId(-1);this.Ae5(true);},E6:function(){C.Row.E6.call(this);this.OnSetId(
0);this.SK(0);this.Ab4(0);this.AnD(0);this.Q6(0);this.JX(A._GetAutoObject(C.Device
).Gender);this.Akw(0);this.EC(A._GetAutoObject(C.Device).AnimalType);this.PW(0);
this.Nk(0);this.Axk(0);this.Ae3(false);this.Axc(0);this.ATS(0);this.Ae9(0);this.
ATq(0);this.Uu(false);this.ATU(0);this.ATR(0);this.AkC(false);this.Ae7(false);this.
ATT(0);this.Axe(0);this.Ae5(false);this.AwS(false);this.AFt(0);this.AFX(0);this.
AwN(0);this.Axd(0);this.ATi(-1);this.AwE(0);this.AwT(0);this.ArX(false);this.N3(
0);this.Aky(0);this.AnF(0);this.Nm(0);this.Ae6(false);this.AFM(0);},OnSetId:function(
E){if(this.Id===E)return;this.Id=E;A.abo([this,this.Q4,this.OnSetId],0);},SK:function(
E){if(this.VisualId===E)return;this.VisualId=E;A.abo([this,this.ArD,this.SK],0);
},Ab4:function(E){if(this.GroupId===E)return;this.GroupId=E;A.abo([this,this.Blp
,this.Ab4],0);},Q6:function(E){if(this.DateOfBirth===E)return;this.DateOfBirth=E;
A.abo([this,this.Awg,this.Q6],0);},JX:function(E){if(this.Gender===E)return;this.
Gender=E;A.abo([this,this.WC,this.JX],0);},Akw:function(E){if(this.BirthType===E
)return;this.BirthType=E;A.abo([this,this.ASD,this.Akw],0);},AnD:function(E){if(
this.LocationId===E)return;this.LocationId=E;A.abo([this,this.A89,this.AnD],0);}
,Ae9:function(E){if(this.LastTemperature===E)return;this.LastTemperature=E;A.abo([
this,this.A88,this.Ae9],0);},Ae3:function(E){if(this.IsAlarm===E)return;this.IsAlarm=
E;A.abo([this,this.A80,this.Ae3],0);},AkC:function(E){if(this.IsControl===E)return;
this.IsControl=E;A.abo([this,this.Bls,this.AkC],0);},Ae5:function(E){if(this.IsRegistered===
E)return;this.IsRegistered=E;A.abo([this,this.Blv,this.Ae5],0);},Ae7:function(E){
if(this.IsWatch===E)return;this.IsWatch=E;A.abo([this,this.A84,this.Ae7],0);},Axk:
function(E){if(this.WorstAssessment===E)return;this.WorstAssessment=E;A.abo([this
,this.A9L,this.Axk],0);},Uu:function(E){if(this.IsFever===E)return;this.IsFever=
E;A.abo([this,this.A81,this.Uu],0);},ATT:function(E){if(this.TimestampLastControl===
E)return;this.TimestampLastControl=E;A.abo([this,this.BlW,this.ATT],0);},Axe:function(
E){if(this.TimestampLastWatch===E)return;this.TimestampLastWatch=E;A.abo([this,this.
BlY,this.Axe],0);},ATq:function(E){if(this.LastRatingTemperature===E)return;this.
LastRatingTemperature=E;A.abo([this,this.Bly,this.ATq],0);},ATR:function(E){if(this.
TimestampExpirationFeverAlarm===E)return;this.TimestampExpirationFeverAlarm=E;A.
abo([this,this.BlU,this.ATR],0);},Axc:function(E){if(this.TimestampAlarm===E)return;
this.TimestampAlarm=E;A.abo([this,this.BlT,this.Axc],0);},EC:function(E){if(this.
AnimalType===E)return;this.AnimalType=E;A.abo([this,this.PT,this.EC],0);},AFt:function(
E){if(this.LastBodyWeight===E)return;this.LastBodyWeight=E;A.abo([this,this.A87,
this.AFt],0);},AFX:function(E){if(this.TimestampLastWeighing===E)return;this.TimestampLastWeighing=
E;A.abo([this,this.A9x,this.AFX],0);},PW:function(E){if(this.TransponderId===E)return;
this.TransponderId=E;A.abo([this,this.ArC,this.PW],0);},RQ:function(){return A._GetAutoObject(
C.Helper).Mb(this.DateOfBirth,A._GetAutoObject(C.Helper).Dv());},AwN:function(E){
if(this.FirstBodyWeight===E)return;this.FirstBodyWeight=E;A.abo([this,this.ASI,this.
AwN],0);},Axd:function(E){if(this.TimestampFirstWeighing===E)return;this.TimestampFirstWeighing=
E;A.abo([this,this.ASZ,this.Axd],0);},Arh:function(){var Pc=A._NewObject(A.Core.
Bs,0);Pc.Initialize(this.DateOfBirth);var A2o=A._NewObject(A.Core.Bs,0);A2o.Initialize(
this.TimestampFirstWeighing);if(((Pc.Year===A2o.Year)&&(Pc.AbZ()===A2o.AbZ()))&&(
this.FirstBodyWeight>0))return true;else return false;},AhW:function(AJe){var AaC;
var AuA;if(this.TimestampLastWeighing>0){AuA=this.TimestampLastWeighing;AaC=this.
LastBodyWeight;}else{AuA=this.DateOfBirth;AaC=A._GetAutoObject(C.Helper).Abr(this.
AnimalType);}return A._GetAutoObject(C.Helper).AhW(AaC,AuA,AJe,this.AnimalType);
},ATi:function(E){if(this.FirstBodyWeightId===E)return;this.FirstBodyWeightId=E;
A.abo([this,this.Blo,this.ATi],0);},AnV:function(BcM){this.Ae3(BcM);if(BcM){if(!
this.TimestampAlarm)this.Axc(A._GetAutoObject(C.Helper).Dv());}else this.Axc(0);
},Nk:function(E){if(this.NaisId===E)return;this.NaisId=E;A.abo([this,this.Anu,this.
Nk],0);},AGM:function(BcI){this.Ae7(BcI);if(BcI){if(!this.TimestampLastWatch)this.
Axe(A._GetAutoObject(C.Helper).Dv());}else this.Axe(0);},AwE:function(E){if(this.
DateOfLastCalving===E)return;this.DateOfLastCalving=E;A.abo([this,this.Ble,this.
AwE],0);},AwT:function(E){if(this.LactationNumber===E)return;this.LactationNumber=
E;A.abo([this,this.Blx,this.AwT],0);},AwS:function(E){if(this.IsPerished===E)return;
this.IsPerished=E;A.abo([this,this.Blu,this.AwS],0);},ATU:function(E){if(this.TimestampLastTemperature===
E)return;this.TimestampLastTemperature=E;A.abo([this,this.BlX,this.ATU],0);},ATS:
function(E){if(this.TimestampLastAssessment===E)return;this.TimestampLastAssessment=
E;A.abo([this,this.BlV,this.ATS],0);},N3:function(E){if(this.Breed===E)return;this.
Breed=E;A.abo([this,this.Awe,this.N3],0);},Aky:function(E){if(this.EaseOfDelivery===
E)return;this.EaseOfDelivery=E;A.abo([this,this.ASH,this.Aky],0);},Nm:function(E
){if(this.WhereAbouts===E)return;this.WhereAbouts=E;A.abo([this,this.Aws,this.Nm
],0);},AnF:function(E){if(this.NaisIdMother===E)return;this.NaisIdMother=E;A.abo([
this,this.ASP,this.AnF],0);},AFM:function(E){if(this.ReasonOfLeaving===E)return;
this.ReasonOfLeaving=E;A.abo([this,this.BlJ,this.AFM],0);},Ae6:function(E){if(this.
IsRegistrationNoticePending===E)return;this.IsRegistrationNoticePending=E;A.abo([
this,this.Blw,this.Ae6],0);},ArX:function(E){if(this.IsDry===E)return;this.IsDry=
E;A.abo([this,this.Blt,this.ArX],0);},Q4:function(){return this.Id;},ArD:function(
){return this.VisualId;},Blp:function(){return this.GroupId;},Awg:function(){return this.
DateOfBirth;},WC:function(){return this.Gender;},ASD:function(){return this.BirthType;
},A89:function(){return this.LocationId;},A88:function(){return this.LastTemperature;
},A80:function(){return this.IsAlarm;},Bls:function(){return this.IsControl;},Blv:
function(){return this.IsRegistered;},A84:function(){return this.IsWatch;},A9L:function(
){return this.WorstAssessment;},A81:function(){return this.IsFever;},BlW:function(
){return this.TimestampLastControl;},BlY:function(){return this.TimestampLastWatch;
},Bly:function(){return this.LastRatingTemperature;},BlU:function(){return this.
TimestampExpirationFeverAlarm;},BlT:function(){return this.TimestampAlarm;},PT:function(
){return this.AnimalType;},A87:function(){return this.LastBodyWeight;},A9x:function(
){return this.TimestampLastWeighing;},ArC:function(){return this.TransponderId;}
,ASI:function(){return this.FirstBodyWeight;},ASZ:function(){return this.TimestampFirstWeighing;
},Blo:function(){return this.FirstBodyWeightId;},Anu:function(){return this.NaisId;
},Ble:function(){return this.DateOfLastCalving;},Blx:function(){return this.LactationNumber;
},Blu:function(){return this.IsPerished;},BlX:function(){return this.TimestampLastTemperature;
},BlV:function(){return this.TimestampLastAssessment;},Awe:function(){return this.
Breed;},ASH:function(){return this.EaseOfDelivery;},Aws:function(){return this.WhereAbouts;
},ASP:function(){return this.NaisIdMother;},BlJ:function(){return this.ReasonOfLeaving;
},Blw:function(){return this.IsRegistrationNoticePending;},Blt:function(){return this.
IsDry;},_Init:function(aArg){C.Row._Init.call(this,aArg);this.__proto__=C.Animal;
this.TableId=0;},_className:"Device::Animal"};C.Row={CL:-1,TableId:2,E3:function(
Ad,AH){if(!AH){A.ab5("%s",(As2+this.CL.toFixed())+As3);return false;}else if(AH.
Id!==this.TableId)throw new Error(As4);else if((Ad<0)||(Ad>=AH.B_())){A.ab5("%s"
,(((Aom+this.CL.toFixed())+As5)+AH.B_().toFixed())+Ald);return false;}this.CL=Ad;
return true;},Ci:function(AH){if(!AH){A.ab5("%s",(As2+this.CL.toFixed())+As3);return false;
}else if(AH.Id!==this.TableId)throw new Error(As4);else if(this.Am7()&&AH.Lj()){
A.ab5("%s",Ayd+AH.HK().toFixed());return false;}else if(!this.Am7()&&((this.CL<0
)||(this.CL>=AH.B_()))){A.ab5("%s",(((Aom+this.CL.toFixed())+As5)+AH.B_().toFixed(
))+Ald);return false;}return true;},Gr:function(){this.E6();this.CL=-1;},Am7:function(
){return this.CL===-1;},E6:function(){this.CL=-2;},Aq0:function(){return this.CL
!==-2;},A9l:function(){return this.CL;},A_K:function(E){this.CL=E;},_Init:function(
aArg){this.__proto__=C.Row;A.h7++;},_Done:function(){this.__proto__=null;A.h7--;
},_ReInit:function(){},_Mark:function(D){var B;if((B=this.I)&&(B._cycle!=D))B._Mark(
B._cycle=D);},I:null,_cycle:0,_observers:null,_className:"Device::Row"};C.Rating={
Temperature:0,Id:0,AnimalId:0,Timestamp:0,BodyWeight:0,RatingTemperature:0,Faeces:
0,Respiratory:0,Appearance:0,Feed:0,E3:function(Ad,AH){var HF=C.Row.E3.call(this
,Ad,AH);if(HF&&!!AH){this.OnSetId(AH.CF(Ad,0));this.OnSetAnimalId(AH.CF(Ad,1));this.
OnSetTimestamp(AH.Hv(Ad,6));this.OnSetFeed(AH.I8(Ad,2));this.OnSetAppearance(AH.
I8(Ad,3));this.OnSetRespiratory(AH.I8(Ad,4));this.OnSetFaeces(AH.I8(Ad,5));this.
OnSetTemperature(AH.A7a(Ad,7));this.OnSetBodyWeight(AH.AC$(Ad,8));this.OnSetRatingTemperature(
AH.I8(Ad,9));}return HF;},Ci:function(AH){if(this.K&&this.K.Ci)return this.K.Ci.
apply(this,arguments);else return C.Rating.Ba_.apply(this,arguments);},Ba_:function(
AH){var HF=C.Row.Ci.call(this,AH);if((HF&&!!AH)&&(AH.Id===1)){var Jq=AH.OC();if(
Jq<=0)A.ab5("%s",Xh);else{var Az_=this.Am7();if(Az_)this.CL=AH.YH();else AH.Ho(this.
CL,0,this.Id);AH.Ho(this.CL,1,this.AnimalId);AH.Acn(this.CL,6,this.Timestamp);AH.
AkT(this.CL,2,this.Feed);AH.AkT(this.CL,3,this.Appearance);AH.AkT(this.CL,4,this.
Respiratory);AH.AkT(this.CL,5,this.Faeces);AH.A$I(this.CL,7,this.Temperature);AH.
AUO(this.CL,8,this.BodyWeight);AH.AkT(this.CL,9,this.RatingTemperature);AH.OE(Jq
);if(Az_)this.OnSetId(AH.Abs());var Ry=A._GetAutoObject(C.Device).An;var Ad=A._GetAutoObject(
C.Device).An.LV(0,this.AnimalId);if(Ad>=0){var Cz=A._NewObject(C.Animal,0);Cz.E3(
Ad,Ry);if(this.Temperature>0)Cz.Uu(A._GetAutoObject(C.Helper).A7C(this));if((this.
Temperature>0)&&A._GetAutoObject(C.Helper).AGr(this)){var Oo=A._GetAutoObject(C.
Helper).ARk(this);Cz.AkC(Oo);Cz.AnV(Oo);}else if(this.Temperature>0){var Oo=(A._GetAutoObject(
C.Helper).ARk(this)||(Cz.WorstAssessment===2))||(Cz.WorstAssessment===1);Cz.AkC(
Oo);Cz.AnV(Oo);}else{var Oo=A._GetAutoObject(C.Helper).ARk(this)||Cz.IsFever;Cz.
AkC(Oo);Cz.AnV(Oo);}Cz.Ci(Ry);}}}return HF;},Gr:function(){C.Row.Gr.call(this);this.
OnSetTimestamp(A._GetAutoObject(C.Helper).Dv());this.OnSetId(-1);},E6:function(){
C.Row.E6.call(this);this.OnSetTimestamp(0);this.OnSetId(0);this.OnSetAnimalId(0);
this.OnSetFeed(0);this.OnSetAppearance(0);this.OnSetRespiratory(0);this.OnSetFaeces(
0);this.OnSetTemperature(0);this.OnSetBodyWeight(0);this.OnSetRatingTemperature(
0);},OnSetTemperature:function(E){if(this.Temperature===E)return;this.Temperature=
E;A.abo([this,this.BlS,this.OnSetTemperature],0);},OnSetId:function(E){if(this.Id===
E)return;this.Id=E;A.abo([this,this.Q4,this.OnSetId],0);},OnSetAnimalId:function(
E){if(this.AnimalId===E)return;this.AnimalId=E;A.abo([this,this.Bk3,this.OnSetAnimalId
],0);},OnSetFeed:function(E){if(this.Feed===E)return;this.Feed=E;A.abo([this,this.
Bll,this.OnSetFeed],0);},OnSetAppearance:function(E){if(this.Appearance===E)return;
this.Appearance=E;A.abo([this,this.Bk4,this.OnSetAppearance],0);},OnSetRespiratory:
function(E){if(this.Respiratory===E)return;this.Respiratory=E;A.abo([this,this.BlK
,this.OnSetRespiratory],0);},OnSetFaeces:function(E){if(this.Faeces===E)return;this.
Faeces=E;A.abo([this,this.Blj,this.OnSetFaeces],0);},OnSetTimestamp:function(E){
if(this.Timestamp===E)return;this.Timestamp=E;A.abo([this,this.A9w,this.OnSetTimestamp
],0);},Bpi:function(Nv,A7){switch(Nv){case 2:this.OnSetAppearance(A7);break;case
1:this.OnSetFeed(A7);break;case 4:this.OnSetFaeces(A7);break;case 3:this.OnSetRespiratory(
A7);break;default:;}},Bjm:function(Nv){switch(Nv){case 2:return this.Appearance;
case 1:return this.Feed;case 4:return this.Faeces;case 3:return this.Respiratory;
default:return 0;}},OnSetRatingTemperature:function(E){if(this.RatingTemperature===
E)return;this.RatingTemperature=E;A.abo([this,this.BlI,this.OnSetRatingTemperature
],0);},OnSetBodyWeight:function(E){if(this.BodyWeight===E)return;this.BodyWeight=
E;A.abo([this,this.Bk8,this.OnSetBodyWeight],0);},BlS:function(){return this.Temperature;
},Q4:function(){return this.Id;},Bk3:function(){return this.AnimalId;},Bll:function(
){return this.Feed;},Bk4:function(){return this.Appearance;},BlK:function(){return this.
Respiratory;},Blj:function(){return this.Faeces;},A9w:function(){return this.Timestamp;
},BlI:function(){return this.RatingTemperature;},Bk8:function(){return this.BodyWeight;
},_Init:function(aArg){C.Row._Init.call(this,aArg);this.__proto__=C.Rating;this.
TableId=1;var J7=this._variants();if(J7){this.K={};J7._Init.call(this,aArg);}},_Done:
function(){if(this.K)this.K._Done.call(this);this.__proto__=C.Row;C.Row._Done.call(
this);},_ReInit:function(){C.Row._ReInit.call(this);if(this.K)this.K._ReInit.call(
this);},_Mark:function(D){C.Row._Mark.call(this,D);if(this.K)this.K._Mark(D);},_variants:
function(){return A.acs.Rating._variants();},K:null,_className:"Device::Rating"};
C.HelperClass={UD:null,AhI:null,AUH:null,AUI:null,W:null,Av:null,KK:null,SU:null
,Ad1:null,UK:null,UJ:null,Aeo:null,Afy:null,Afx:null,Afw:null,Afz:null,AgG:null,
AG1:0,Init:function(aArg){A.pe([this,this.AUa],this);},AkF:function(E){this.UD=E;
A.abo([this,this.ArA,this.AkF],0);},AFP:function(E){this.AhI=E;A.abo([this,this.
A9m,this.AFP],0);},BBs:function(G){switch(A._GetAutoObject(C.Device).ScanState){
case 2:{var AuC=A._GetAutoObject(C.Device).OV;if(!AuC)throw new Error(Aye);switch(
AuC.TransponderType){case 1:this.AkF(AuC);break;case 2:this.ATI(AuC);break;case 3:
this.AFP(AuC);break;case 4:this.ATJ(AuC);break;case 0:break;default:throw new Error(
Ayf);}}break;case 4:A._GetAutoObject(C.Device).A3(11,true,A.jV,2000,null);break;
case 3:A._GetAutoObject(C.Device).A3(12,true,A.jV,2000,null);break;case 0:case 1:
break;default:throw new Error(As6);}},AkQ:function(){this.AkF(null);this.ATI(null
);this.AFP(null);this.ATJ(null);},AFU:function(E){if(this.K&&this.K.AFU)return this.
K.AFU.apply(this,arguments);else return C.HelperClass.Ba8.apply(this,arguments);
},Ba8:function(E){A.abo([this,this.U3,this.U6],0);A._GetAutoObject(C.Device).SetSystemTime(
E);},U6:function(Aq){this.AFU(Aq);},Dv:function(){if(this.K&&this.K.Dv)return this.
K.Dv.apply(this,arguments);else return C.HelperClass.Ba4.apply(this,arguments);}
,Ba4:function(){var B;return((B=(this.Av.BdJ()|0))<0)?B+0x100000000:B;},U3:function(
){return this.Dv();},Ast:function(){A._GetAutoObject(C.Device).SR(-1);this.W.E6(
);A.we(this.W,0);},A7S:function(Iw){if(!Iw){A.ab5("%s%U",Ayg,Iw);return false;}var
Bf=A._GetAutoObject(C.Device).An.AgZ(22,Iw);return this.G8(Bf);},AmX:function(AoP
,AJd){switch(AoP){case 0:{var Apg=AJd;switch(Apg){case 14:return A.aaR(A.acf.Aft
);case 6:return O9;case 4:return A.aaR(A.acf.Aeg);case 28:return Ayh;case 7:return A.
aaR(A.acf.Afo);case 2:return A.aaR(A.acf.P);case 0:return A.aaR(A.acf.GN);case 37:
return AWa;case 8:return A.aaR(A.acf.Alarm);case 9:return A.aaR(A.acf.ACo);case 38:
return A.aaR(A.acf.AN5);case 11:return A.aaR(A.acf.Fever);case 27:return AWb;case
10:return A.aaR(A.acf.BoU);case 12:return A.aaR(A.acf.Asf);case 29:return A.aaR(
A.acf.ARD);case 18:return A.aaR(A.acf.Weighing);case 17:return AWc;case 5:return A.
aaR(A.acf.Temperature);case 3:return AWd;case 26:return A.aaR(A.acf.Ul);case 35:
return A.aaR(A.acf.Ul)+AHu;case 36:return AHv;case 15:return AfE;case 24:return Aon;
case 20:return AWe;case 30:return AHw;case 21:return Ale;case 19:return AHx;case
22:return A.aaR(A.acf.Transponder);case 1:return A.aaR(A.acf.GI);case 34:return A.
aaR(A.acf.Jj);case 13:return AHy;case 31:return AWf;default:{A.ab5("%s",AWg+Apg.
toFixed());return AHz+Apg.toFixed();}}}case 1:{var Apg=AJd;switch(Apg){case 1:return A.
aaR(A.acf.Animal);case 3:return A.aaR(A.acf.AGq);case 8:return A.aaR(A.acf.Afv);
case 5:return A.aaR(A.acf.AGs);case 2:return A.aaR(A.acf.Feed);case 4:return A.aaR(
A.acf.AGt);case 7:return A.aaR(A.acf.Temperature);case 6:return A.aaR(A.acf.Bs);
default:{A.ab5("%s",AWh+Apg.toFixed());return AHz+Apg.toFixed();}}}default:A.ab5(
"%s",(AcP+AoP.toFixed())+AWi);}return A.jV;},A62:function(AoP,AI){var result=A.jV;
if(!!AI){result=this.AmX(AoP,AI.EJ);result=((result+Of)+A._GetAutoObject(C.Converter
).A6L(AI.Operator))+Of;if(!!(C.Int32FilterCriterion.isPrototypeOf(AI)?AI:null))result=
result+(C.Int32FilterCriterion.isPrototypeOf(AI)?AI:null).A5.toFixed();else if(!
!(C.UInt32FilterCriterion.isPrototypeOf(AI)?AI:null))result=result+(C.UInt32FilterCriterion.
isPrototypeOf(AI)?AI:null).A5.toFixed();else if(!!(C.StringFilterCriterion.isPrototypeOf(
AI)?AI:null))result=result+(C.StringFilterCriterion.isPrototypeOf(AI)?AI:null).A5;
else if(!!(C.BoolFilterCriterion.isPrototypeOf(AI)?AI:null)){if((C.BoolFilterCriterion.
isPrototypeOf(AI)?AI:null).A5)result=this.AmX(AoP,AI.EJ);else result=A.jV;}else if(
!!(C.GenderFilterCriterion.isPrototypeOf(AI)?AI:null)){var BzP=A._NewObject(C.GenderToString
,0);result=result+BzP.Lx((C.GenderFilterCriterion.isPrototypeOf(AI)?AI:null).A5);
}else if(!!(C.AnimalTypeFilterCriterion.isPrototypeOf(AI)?AI:null)){var ByK=A._NewObject(
C.AnimalTypeToString,0);result=result+ByK.Lx((C.AnimalTypeFilterCriterion.isPrototypeOf(
AI)?AI:null).A5);}else if(!!(C.AssessmentFilterCriterion.isPrototypeOf(AI)?AI:null
)){var ByN=A._NewObject(C.AssesmentToString,0);result=result+ByN.Lx((C.AssessmentFilterCriterion.
isPrototypeOf(AI)?AI:null).A5);}else if(!!(C.UInt64FilterCriterion.isPrototypeOf(
AI)?AI:null))result=result+(C.UInt64FilterCriterion.isPrototypeOf(AI)?AI:null).A5.
toFixed();else if(!!(C.UInt64PartialFilterCriterion.isPrototypeOf(AI)?AI:null)){
var Aw=(C.UInt64PartialFilterCriterion.isPrototypeOf(AI)?AI:null);result=(((((result+
Aw.A5)+AWj)+Aw.OG.toFixed())+O8)+Aw.Zm.toFixed())+Ald;}else if(!!(C.WhereAboutsFilterCriterion.
isPrototypeOf(AI)?AI:null)){var BDc=A._NewObject(C.WhereAboutsToString,0);result=
result+BDc.Lx((C.WhereAboutsFilterCriterion.isPrototypeOf(AI)?AI:null).A5);}else
A.ab5("%s",AWk);}return result;},MI:function(aString,Bcu,Bx0){var result=A.jV;var
Bgg=false;var index=0;var Bx2=Bcu.length;while(!Bgg){var A38=aString.indexOf(Bcu
,index);if(A38!==-1){result=(result+A.abW(aString,index,A38-index))+Bx0;index=A38+
Bx2;}else{var Bcz=aString.length;if(index<Bcz)result=result+A.ab2(aString,Bcz-index
);Bgg=true;}}return result;},ATI:function(E){this.AUH=E;A.abo([this,this.BlM,this.
ATI],0);},ATJ:function(E){this.AUI=E;A.abo([this,this.BlN,this.ATJ],0);},Bd9:function(
){return((A._GetAutoObject(C.Device).ScanState===2)&&!!A._GetAutoObject(C.Device
).OV)&&(A._GetAutoObject(C.Device).OV.TransponderType===1);},Aga:function(G){if(
!this.W.Am7()&&!!this.W.Id)this.Bkp(this.W.Id);},AC3:function(Eo){return A._GetAutoObject(
C.Helper).UK.Get(Eo);},A6X:function(Eo){return A._GetAutoObject(C.Helper).UJ.Get(
Eo);},A68:function(){var O=0;var min=32767;while(O<A._GetAutoObject(C.Helper).UK.
MH){if(A._GetAutoObject(C.Helper).UK.Get(O)<min)min=A._GetAutoObject(C.Helper).UK.
Get(O);O=O+1;}return min;},AUa:function(G){A.zV([this,this.Aga],A._GetAutoObject(
C.Device).An,0);},ARk:function(D3){if(!D3)return false;var Bj1=(((this.Az6(D3.Faeces
)||this.Az6(D3.Feed))||this.Az6(D3.Appearance))||this.Az6(D3.Respiratory))||this.
Az6(D3.RatingTemperature);return Bj1||this.A7C(D3);},Az6:function(Bb_){return(Bb_===
2)||(Bb_===1);},A7C:function(D3){return!!D3&&(D3.Temperature>A._GetAutoObject(C.
Helper).AC3(A._GetAutoObject(C.Helper).W.AnimalType));},G8:function(L$){var A20=
false;if(L$>=0){if(L$!==this.W.CL)A._GetAutoObject(C.Device).SR(L$);A20=this.W.E3(
L$,A._GetAutoObject(C.Device).An);if(A20)A.we(this.W,0);}else{A._GetAutoObject(C.
Device).SR(-1);this.W.E6();A.we(this.W,0);}return A20;},AhR:function(Ah8){var B;
return(((B=(this.Av.BdJ()|0))<0)?B+0x100000000:B)-this.AmJ(Ah8);},AsI:function(){
var B;A.pe([B=this.KK,B.AnZ],this);},BCD:function(G){A._GetAutoObject(C.Device).
A3(16,false,AHA,0,null);A._GetAutoObject(C.Device).A3(5,true,A.jV,0,null);},Bon:
function(G){var As=(C.PopupContext.isPrototypeOf(G)?G:null);if(!!As&&(As.PopupState===
5))this.AsI();},Bn9:function(E){if(this.AG1===E)return;this.AG1=E;A._GetAutoObject(
C.Device).A3(16,true,this.AG1.toFixed(),0,[this,this.Bon]);},Mb:function(BxA,Bye
){var D8;var BgO=A._NewObject(A.Core.An5,0);var GG=A._NewObject(A.Core.Bs,0);var
K9=A._NewObject(A.Core.Bs,0);GG.Initialize(BxA);K9.Initialize(Bye);D8=K9.Bit(GG);
BgO.Initialize2(0,D8.ADC,D8.AEo,D8.AGF);if(GG.J(BgO).GL===GG.GL)return D8.Ko;else
return D8.Ko+1;},BCF:function(G){A._GetAutoObject(C.Device).UpdateMeasureState(3
);},ALa:function(G){var BhD=A._GetAutoObject(C.Helper).AC3(A._GetAutoObject(C.Helper
).W.AnimalType);var BhA=A._GetAutoObject(C.Helper).A6X(A._GetAutoObject(C.Helper
).W.AnimalType);var Agr=A.abz(BhD-100,BhA+100);this.Bdn(Agr);},AmJ:function(Ah8){
return Ah8*86400;},Ak7:function(J9){var B;if(!!J9&&(J9<(((B=Math.trunc(Math.pow(
10,A._GetAutoObject(C.Device).AF)))<0)?B+0x10000000000000000:B)))return-1;return A.
_GetAutoObject(C.Helper).VY(J9,A._GetAutoObject(C.Device).AF&0xFF,A._GetAutoObject(
C.Device).A2&0xFF)|0;},AGr:function(D3){if(!D3)return false;return((!!D3.Faeces||
!!D3.Feed)||!!D3.Appearance)||!!D3.Respiratory;},AhW:function(A1b,BcB,AJe,Eo){var
B;var ApU;if((A1b<650000)&&(BcB<this.Dv())){var BcZ=this.AgG.Avx(Eo);var BcY=0;if(
BcZ>=0)BcY=this.Afw.Get(BcZ);ApU=A1b+(this.Mb(BcB,this.Dv())*BcY);if(AJe>0){var A18=
this.ApT(AJe);ApU=(Math.trunc(((((B=ApU)<0)?B+0x10000000000000000:B)+Math.trunc(
A18/2))/A18)*A18)|0;}if(ApU>650000)ApU=650000;}else ApU=A1b;return ApU;},ADf:function(
D3){var Aqf=A._GetAutoObject(C.Converter).Ad2(D3.Faeces);if(Aqf<A._GetAutoObject(
C.Converter).Ad2(D3.Feed))Aqf=A._GetAutoObject(C.Converter).Ad2(D3.Feed);if(Aqf<
A._GetAutoObject(C.Converter).Ad2(D3.Appearance))Aqf=A._GetAutoObject(C.Converter
).Ad2(D3.Appearance);if(Aqf<A._GetAutoObject(C.Converter).Ad2(D3.Respiratory))Aqf=
A._GetAutoObject(C.Converter).Ad2(D3.Respiratory);return A._GetAutoObject(C.Converter
).A$_(Aqf);},Axz:function(D3,Nu){if(!!D3){D3.OnSetFaeces(Nu);D3.OnSetFeed(Nu);D3.
OnSetAppearance(Nu);D3.OnSetRespiratory(Nu);}},Bjk:function(AH,AJk,Ac8,Xr,AfJ){if(
!AH)throw new Error(As7);var Be=A._NewObject(C.Filter,0);var ApH=AH.Filter;var Oi=
A._NewObject(C.Int32FilterCriterion,0);Oi.Operator=0;Oi.EJ=1;Oi.A5=Ac8;Be.CX(Oi);
if(Xr>0){var Ov=A._NewObject(C.UInt32FilterCriterion,0);Ov.Operator=2;Ov.EJ=6;Ov.
A5=Xr;Be.CX(Ov);}if(AfJ>0){var On=A._NewObject(C.UInt32FilterCriterion,0);On.Operator=
3;On.EJ=6;On.A5=AfJ;Be.CX(On);}AH.Bk(Be);var Ma=A._NewObject(C.Int32ArrayWrapper
,0);Ma.ZA(6);var O;for(O=0;O<Ma.MH;O=O+1)Ma.Set(O,0);var Va;for(O=0;O<AH.B_();O=
O+1){Va=AH.I8(O,AJk);Ma.Set(Va,Ma.Get(Va)+1);}AH.Bk(ApH);return Ma;},ZR:function(
Ah8){var B;var GG=A._NewObject(A.Core.Bs,0);var BgN=A._NewObject(A.Core.An5,0);GG.
Initialize(A._GetAutoObject(C.Converter).AhT());BgN.Initialize2(Ah8,0,0,0);GG=GG.
BpL(BgN);return((B=(GG.JV()|0))<0)?B+0x100000000:B;},A6Y:function(AH,Ac8,AfJ,Xr){
if(!AH)throw new Error(As7);var Be=A._NewObject(C.Filter,0);var ApH=AH.Filter;var
Oi=A._NewObject(C.Int32FilterCriterion,0);Oi.Operator=0;Oi.EJ=1;Oi.A5=Ac8;Be.CX(
Oi);if(Xr>0){var Ov=A._NewObject(C.UInt32FilterCriterion,0);Ov.Operator=2;Ov.EJ=
6;Ov.A5=Xr;Be.CX(Ov);}if(AfJ>0){var On=A._NewObject(C.UInt32FilterCriterion,0);On.
Operator=3;On.EJ=6;On.A5=AfJ;Be.CX(On);}AH.Bk(Be);var Ma=A._NewObject(C.Int32ArrayWrapper
,0);Ma.ZA(6);var O;for(O=0;O<Ma.MH;O=O+1)Ma.Set(O,0);var Ao7=A._NewObject(C.Rating
,0);var A10;for(O=0;O<AH.B_();O=O+1){Ao7.E3(O,AH);if(A._GetAutoObject(C.Helper).
AGr(Ao7)){A10=A._GetAutoObject(C.Helper).ADf(Ao7);Ma.Set(A10,Ma.Get(A10)+1);}}AH.
Bk(ApH);return Ma;},A2x:function(AH,Ac8,Bzj){if(!AH)throw new Error(As7);var Be=
A._NewObject(C.Filter,0);var ApH=AH.Filter;var Oi=A._NewObject(C.Int32FilterCriterion
,0);Oi.Operator=0;Oi.EJ=1;Oi.A5=Ac8;Be.CX(Oi);var Xr=A._GetAutoObject(C.Converter
).AhT()+A._GetAutoObject(C.Helper).AmJ(Bzj);var AfJ=Xr+A._GetAutoObject(C.Helper
).AmJ(1);var Ov=A._NewObject(C.UInt32FilterCriterion,0);Ov.Operator=2;Ov.EJ=6;Ov.
A5=Xr;Be.CX(Ov);var On=A._NewObject(C.UInt32FilterCriterion,0);On.Operator=3;On.
EJ=6;On.A5=AfJ;Be.CX(On);AH.Bk(Be);var Ao7=A._NewObject(C.Rating,0);var Va;var LT=
0;var O;for(O=0;O<AH.B_();O=O+1){Ao7.E3(O,AH);if(A._GetAutoObject(C.Helper).AGr(
Ao7)){Va=A._GetAutoObject(C.Helper).ADf(Ao7);if(A._GetAutoObject(C.Converter).Ad2(
Va)>A._GetAutoObject(C.Converter).Ad2(LT))LT=Va;}}AH.Bk(ApH);return LT;},Am6:function(
){if((A._GetAutoObject(C.Device).WeightRecordingScope===2)||(A._GetAutoObject(C.
Device).WeightRecordingScope===1))return true;else return false;},A7F:function(){
if((A._GetAutoObject(C.Device).WeightRecordingScope===2)||!A._GetAutoObject(C.Device
).WeightRecordingScope)return true;else return false;},Bjl:function(AH,AJk,Ac8,Xr
,AfJ){if(!AH)throw new Error(As7);var Be=A._NewObject(C.Filter,0);var ApH=AH.Filter;
var Oi=A._NewObject(C.Int32FilterCriterion,0);Oi.Operator=0;Oi.EJ=1;Oi.A5=Ac8;Be.
CX(Oi);if(Xr>0){var Ov=A._NewObject(C.UInt32FilterCriterion,0);Ov.Operator=2;Ov.
EJ=6;Ov.A5=Xr;Be.CX(Ov);}if(AfJ>0){var On=A._NewObject(C.UInt32FilterCriterion,0
);On.Operator=3;On.EJ=6;On.A5=AfJ;Be.CX(On);}AH.Bk(Be);var Ma=A._NewObject(C.Int32ArrayWrapper
,0);Ma.ZA(6);var O;for(O=0;O<Ma.MH;O=O+1)Ma.Set(O,0);if(AH.B_()>0){var Va=AH.I8(
0,AJk);var ApZ=AH.Hv(O,6);var Ac=A._NewObject(A.Core.Bs,0);Ac.Initialize(ApZ);var
Aqe=Va;var AKd=A._NewObject(A.Core.Bs,0);AKd.Initialize(Ac.JV());for(O=1;O<AH.B_(
);O=O+1){Va=AH.I8(O,AJk);ApZ=AH.Hv(O,6);Ac.Initialize(ApZ);if((Ac.AbZ()!==AKd.AbZ(
))||(Ac.Year!==AKd.Year)){Ma.Set(Aqe,Ma.Get(Aqe)+1);AKd.Initialize(Ac.JV());Aqe=
Va;}else if(!!Va&&(Va<Aqe))Aqe=Va;}Ma.Set(Aqe,Ma.Get(Aqe)+1);}AH.Bk(ApH);return Ma;
},Aqr:function(L7){var B;var GG=A._NewObject(A.Core.Bs,0);GG.Initialize(L7);GG.AnB(
0);GG.AnE(0);GG.AnH(0);return((B=(GG.JV()|0))<0)?B+0x100000000:B;},AOg:function(
L7){var B;L7=L7+86400;var GG=A._NewObject(A.Core.Bs,0);GG.Initialize(L7);GG.AnB(
0);GG.AnE(0);GG.AnH(0);return((B=(GG.JV()|0))<0)?B+0x100000000:B;},Bjn:function(
BCB,Bzv,Amh,AlG){var Bdi=A._GetAutoObject(C.Helper).Mb(BCB,Bzv);if(Bdi>0)return((
AlG-Amh)/Bdi)|0;return 0;},Bqm:function(BxB,Byf){var GG=A._NewObject(A.Core.Bs,0
);var K9=A._NewObject(A.Core.Bs,0);GG.Initialize(BxB);K9.Initialize(Byf);return(
GG.Year===K9.Year)&&(GG.AbZ()===K9.AbZ());},A64:function(){var Be=A._GetAutoObject(
C.Helper).Mv();var Bem=A._NewObject(C.UInt32FilterCriterion,0);var Byo=A._GetAutoObject(
C.Helper).ZR(A._GetAutoObject(C.Device).AqT)-1;Bem.Initialize(28,2,Byo,true);Be.
CX(Bem);var U8=A._NewObject(C.AnimalTypeFilterCriterion,0);U8.Initialize(14,0,1,
true);Be.CX(U8);if(A._GetAutoObject(C.Device).AqU){var AAk=A._NewObject(C.UInt32FilterCriterion
,0);var A2U=A._GetAutoObject(C.Helper).Dv()-21600;AAk.Initialize(30,3,A2U,true);
Be.CX(AAk);}return Be;},Bo1:function(){var Jq=A._GetAutoObject(C.Device).An.OC();
if(Jq<=0)A.ab5("%s",Xh);else{A._GetAutoObject(C.Device).An.E6();A._GetAutoObject(
C.Device).An.OE(Jq);}Jq=A._GetAutoObject(C.Device).Agy.OC();if(Jq<=0)A.ab5("%s",
Xh);else{A._GetAutoObject(C.Device).Agy.E6();A._GetAutoObject(C.Device).Agy.OE(Jq
);}Jq=A._GetAutoObject(C.Device).Bt.OC();if(Jq<=0)A.ab5("%s",Xh);else{A._GetAutoObject(
C.Device).Bt.E6();A._GetAutoObject(C.Device).Bt.OE(Jq);}Jq=A._GetAutoObject(C.Device
).Pr.OC();if(Jq<=0)A.ab5("%s",Xh);else{A._GetAutoObject(C.Device).Pr.E6();A._GetAutoObject(
C.Device).Pr.OE(Jq);}},Bkp:function(Ac8){var Bf=A._GetAutoObject(C.Device).An.LV(
0,Ac8);return this.G8(Bf);},ARr:function(Iw){var AiA=A._GetAutoObject(C.Device).
An.Aem(22,Iw);return AiA;},AC8:function(){var Be=A._GetAutoObject(C.Helper).Mv();
var Ajc=A._NewObject(C.UInt64FilterCriterion,0);Ajc.Initialize(22,0,0,true);Be.CX(
Ajc);return Be;},AOP:function(Ao0,Bzs,Qg){var Aao=-1;switch(Ao0){case 2:Aao=30;break;
case 3:Aao=31;break;case 10:Aao=19;break;default:A.ab5("%s%e",U0,Ao0);}if(Aao<0)
return null;var Adk=A._NewObject(C.UInt32FilterCriterion,0);Adk.Initialize(Aao,3
,A._GetAutoObject(C.Helper).Dv()-Bzs,Qg);return Adk;},BoX:function(aFilter){var AI=
aFilter.DL(30,3);if(!!AI)aFilter.Nq(AI);AI=aFilter.DL(31,3);if(!!AI)aFilter.Nq(AI
);AI=aFilter.DL(19,3);if(!!AI)aFilter.Nq(AI);},A1R:function(AfT,Ay0,AH){if(AH.Lj(
))return 5;if(AfT.VisualId<=0)switch(Ay0){case 0:if(!AfT.NaisId)return 1;break;case
1:if(!AfT.TransponderId)return 1;break;case 3:case 2:case 5:case 4:return 1;default:
throw new Error(AHB+Ay0.toFixed());}if((!AfT.NaisId&&!AfT.TransponderId)&&A._GetAutoObject(
C.Device).An.AjL(1,AfT.VisualId))return 2;if(!!AfT.NaisId&&A._GetAutoObject(C.Helper
).ARp(AfT.NaisId))return 3;if(!!AfT.TransponderId&&A._GetAutoObject(C.Helper).ARr(
AfT.TransponderId))return 4;return 0;},Aqk:function(En){En.EC(A._GetAutoObject(C.
Device).AnimalType);En.N3(A._GetAutoObject(C.Device).Breed);En.Q6(A._GetAutoObject(
C.Helper).Dv()-A._GetAutoObject(C.Helper).AmJ(A._GetAutoObject(C.Device).AdT));En.
JX(A._GetAutoObject(C.Device).Gender);En.Nm(A._GetAutoObject(C.Device).WhereAbouts
);},AMq:function(Rr,En){var Gv=0;switch(Rr){case 0:Gv=A._GetAutoObject(C.Helper).
Ak7(En.NaisId);break;case 1:Gv=A._GetAutoObject(C.Helper).Ak7(En.TransponderId);
break;case 3:Gv=A._GetAutoObject(C.Device).Aq6;break;case 2:Gv=A._GetAutoObject(
C.Device).Aq7;break;case 4:case 5:Gv=A._GetAutoObject(C.Device).AjV;break;default:
throw new Error(AHC+Rr.toFixed());}return Gv;},Baf:function(Aln,L8,Bcd,Bxm,BxV){
var B;var Qt=null;var XC=null;switch(Aln){case 0:{Qt=[B=A._GetAutoObject(C.Device
),B.ASO,B.A0y];XC=[B=A._GetAutoObject(C.Device),B.Awp,B.AyU];}break;case 1:switch(
L8){case 1:{Qt=[B=A._GetAutoObject(C.Device),B.A9b,B.BbE];XC=[B=A._GetAutoObject(
C.Device),B.Awn,B.AyS];}break;case 0:{Qt=[B=A._GetAutoObject(C.Device),B.A9c,B.BbF
];XC=[B=A._GetAutoObject(C.Device),B.Awo,B.AyT];}break;case 2:{Qt=[B=A._GetAutoObject(
C.Device),B.ASO,B.A0y];XC=[B=A._GetAutoObject(C.Device),B.Awp,B.AyU];}break;default:
throw new Error(Ayi+L8.toFixed());}break;default:throw new Error(AHD+Aln.toFixed(
));}if(!!Qt&&!!XC){Qt[2].call(Qt[0],Bcd);if(Bcd>0){if((XC[1].call(XC[0])>0)&&(Bxm<
BxV))Qt[2].call(Qt[0],Qt[1].call(Qt[0])+XC[1].call(XC[0]));else if(XC[1].call(XC[
0])<0)Qt[2].call(Qt[0],Qt[1].call(Qt[0])+XC[1].call(XC[0]));}return Qt[1].call(Qt[
0]);}return 0;},AVJ:function(En,Aln,Bxu){if(!En||(Bxu===true))return;switch(Aln){
case 0:En.Nk(A._GetAutoObject(C.Device).Av9);break;case 1:switch(En.Gender){case
0:En.Nk(A._GetAutoObject(C.Device).AEr);break;case 1:En.Nk(A._GetAutoObject(C.Device
).AEq);break;case 2:En.Nk(A._GetAutoObject(C.Device).Av9);break;default:throw new
Error(Ayi+En.Gender.toFixed());}break;default:throw new Error(AHD+Aln.toFixed());
}},Bj2:function(Rr,En){var result=false;switch(Rr){case 0:result=!!En.NaisId;break;
case 1:result=!!En.TransponderId;break;case 3:case 2:case 4:case 5:result=false;
break;default:throw new Error(AHC+Rr.toFixed());}return result;},AKq:function(En
,Bb8,Ay0,AtG,AfM){switch(Bb8){case 2:if(AtG<=0)A._GetAutoObject(C.Device).A3(21,
true,En.VisualId.toFixed(),0,AfM);else A._GetAutoObject(C.Device).A3(48,true,(En.
VisualId.toFixed()+Ayj)+AtG.toFixed(),0,AfM);break;case 3:if(AtG<=0)A._GetAutoObject(
C.Device).A3(21,true,A._GetAutoObject(C.Converter).Rj(En.NaisId),0,AfM);else A._GetAutoObject(
C.Device).A3(48,true,(A._GetAutoObject(C.Converter).Rj(En.NaisId)+Ayj)+AtG.toFixed(
),0,AfM);break;case 4:if(AtG<=0)A._GetAutoObject(C.Device).A3(25,true,A._GetAutoObject(
C.Converter).Rj(En.TransponderId),0,AfM);else A._GetAutoObject(C.Device).A3(47,true
,(A._GetAutoObject(C.Converter).Rj(En.TransponderId)+Ayj)+AtG.toFixed(),0,AfM);break;
case 1:switch(Ay0){case 1:A._GetAutoObject(C.Device).A3(42,true,A.jV,0,AfM);break;
case 0:A._GetAutoObject(C.Device).A3(43,true,A.jV,0,AfM);break;case 3:case 2:case
5:case 4:A._GetAutoObject(C.Device).A3(22,true,A.jV,0,AfM);break;default:throw new
Error(AHB+Ay0.toFixed());}break;case 5:A._GetAutoObject(C.Device).A3(41,true,A._GetAutoObject(
C.Device).An.HK().toFixed(),0,AfM);break;case 0:break;default:throw new Error(AWl+
Bb8.toFixed());}},BdN:function(Bck,L8){var B;var AAo=null;switch(Bck){case 0:AAo=[
B=A._GetAutoObject(C.Device),B.Awp,B.AyU];break;case 1:switch(L8){case 1:AAo=[B=
A._GetAutoObject(C.Device),B.Awn,B.AyS];break;case 0:AAo=[B=A._GetAutoObject(C.Device
),B.Awo,B.AyT];break;case 2:AAo=[B=A._GetAutoObject(C.Device),B.Awp,B.AyU];break;
default:throw new Error(Ayi+L8.toFixed());}break;default:throw new Error(AWm+Bck.
toFixed());}return AAo;},A7e:function(Qi,Bx8){var AaP=A._NewObject(A.Core.Bs,0);
AaP.Initialize(Qi);var ABH=AaP.Year;var Bf=A._GetAutoObject(C.Device).Pr.LV(0,ABH
);var U$=A._NewObject(C.CalfDeregistrations,0);if(Bf<0){if(A._GetAutoObject(C.Device
).Pr.Lj())A._GetAutoObject(C.Device).A3(51,true,A._GetAutoObject(C.Device).Pr.HK(
).toFixed(),0,null);else{U$.Gr();U$.AkH(ABH);}}else U$.E3(Bf,A._GetAutoObject(C.
Device).Pr);U$.AwG(U$.Deregistrations+1);if(Bx8)U$.AwF(U$.Deaths+1);U$.Ci(A._GetAutoObject(
C.Device).Pr);},AMo:function(LT,AlQ,AlH){var AKM=0;if((AlQ&&(AlH===1))||(LT===1)
)AKM=1;else if((AlQ&&(AlH===2))||(LT===2))AKM=2;else if(!!LT&&(LT!==5))AKM=LT;return AKM;
},Bdn:function(Byn){var B;if(A._GetAutoObject(C.Device).MeasureState===1){this.SU.
Cx=A._GetAutoObject(C.Device).AcG;this.SU.B2=Byn;this.SU.AnX(this);}},AC5:function(
){var Be=this.AOO();var Beb=A._NewObject(C.BoolFilterCriterion,0);Beb.Initialize(
38,0,true,true);Be.CX(Beb);return Be;},A6V:function(Eh){var Be=A._GetAutoObject(
C.Helper).Mv();if(A._GetAutoObject(C.Device).Aqg){var A2A=A._GetAutoObject(C.Helper
).AOP(Eh,21600,true);Be.CX(A2A);}return Be;},A6_:function(){var Be=A._GetAutoObject(
C.Helper).Mv();var BeD=A._NewObject(C.UInt64FilterCriterion,0);BeD.Initialize(26
,0,0,true);Be.CX(BeD);return Be;},A7b:function(){var B;var Be=A._GetAutoObject(C.
Helper).Mv();var AAu=(C.WhereAboutsFilterCriterion.isPrototypeOf(B=Be.DL(34,3))?
B:null);if(!!AAu)Be.Nq(AAu);var BfZ=A._NewObject(C.BoolFilterCriterion,0);BfZ.Initialize(
37,0,true,true);Be.CX(BfZ);return Be;},VY:function(A7,Atz,A1c){var B;A7=Math.trunc(
A7/this.ApT(Atz));A7%=this.ApT(A1c);return A7;},ApT:function(Bcl){switch(Bcl){case
0:return 1;case 1:return 10;case 2:return 100;case 3:return 1000;case 4:return 10000;
case 5:return 100000;case 6:return 1000000;case 7:return 10000000;case 8:return 100000000;
case 9:return 1000000000;case 10:return 10000000000;case 11:return 100000000000;
case 12:return 1000000000000;case 13:return 10000000000000;case 14:return 100000000000000;
case 15:return 1000000000000000;default:throw new Error(AWn+Bcl.toFixed());}},Mv:
function(){var Be=A._NewObject(C.Filter,0);var Bgk=A._NewObject(C.BoolFilterCriterion
,0);Bgk.Initialize(10,0,true,true);Be.CX(Bgk);var AAu=A._NewObject(C.WhereAboutsFilterCriterion
,0);AAu.Initialize(34,3,6,true);Be.CX(AAu);return Be;},Arg:function(aFilter){return!
this.AC9(aFilter);},AC9:function(aFilter){var Jm=0;var Aw=aFilter.AOQ();while(!!
Aw){if(Aw.YK===false)Jm++;Aw=aFilter.AOV(Aw);}return Jm;},AOO:function(){var Be=
this.Mv();var U8=A._NewObject(C.AnimalTypeFilterCriterion,0);U8.Initialize(14,0,
1,true);Be.CX(U8);return Be;},ADc:function(){var B;var A4F;var J$=this.BjE();A4F=(((
B=A._GetAutoObject(C.Converter).AqB(J$))<0)?B+0x10000000000000000:B)*this.ApT(12
);if((J$===10)&&(A._GetAutoObject(C.Device).PY>0)){var BzQ=A._GetAutoObject(C.Helper
).VY(A._GetAutoObject(C.Device).PY,10,2)*this.ApT(8);A4F+=BzQ;}return A4F;},BjE:
function(){var J$=0;if(A._GetAutoObject(C.Device).PY>0)J$=A._GetAutoObject(C.Converter
).S3(A._GetAutoObject(C.Device).PY);if(!J$)J$=A._GetAutoObject(C.Converter).A7I(
A._GetAutoObject(C.Device).Language);return J$;},ARp:function(Xq){var AiA=A._GetAutoObject(
C.Device).An.Aem(26,Xq);return AiA;},Aj7:function(AfN){switch(AfN){case 0:case 1:
case 2:case 3:case 4:case 5:return false;case 6:case 7:case 8:case 9:case 10:return true;
default:throw new Error(AWo+AfN.toFixed());}},Bhz:function(Rr,En){var Gv=0;switch(
Rr){case 1:Gv=A._GetAutoObject(C.Helper).Ak7(En.TransponderId);break;case 0:if(!
A._GetAutoObject(C.Device).EartagNrAssignmentMode)Gv=A._GetAutoObject(C.Device).
AjV;else switch(En.Gender){case 0:Gv=A._GetAutoObject(C.Device).Aq7;break;case 1:
Gv=A._GetAutoObject(C.Device).Aq6;break;case 2:Gv=A._GetAutoObject(C.Device).AjV;
break;default:throw new Error(AHE+En.Gender.toFixed());}break;default:throw new Error(
AWp+Rr.toFixed());}return Gv;},Bja:function(){var B;var Az2=(((((((A.aaR(A.acf.AhL
)+A.aaR(A.acf.Colon))+MM)+A._GetAutoObject(C.Device).AhL)+Ayk)+A.aaR(A.acf.BoF))+
A.aaR(A.acf.Colon))+MM)+A._GetAutoObject(A.acj.KO).Bi_(((B=A._GetAutoObject(C.Device
).Q1.Timestamp)<0)?B+0x100000000:B);return Az2;},Bjb:function(){var B;var Az2=((((((((((((((((((((((((((((
AWq+A._GetAutoObject(C.Device).R3.AEi.toFixed())+Ly)+A._GetAutoObject(C.Device).
R3.AEn.toFixed())+Ly)+A._GetAutoObject(C.Device).R3.AGz.toFixed())+O8)+A._GetAutoObject(
C.Device).R3.ACv)+O8)+A._GetAutoObject(A.acj.KO).AjN(((B=A._GetAutoObject(C.Device
).R3.Timestamp)<0)?B+0x100000000:B))+MM)+AWr)+A._GetAutoObject(C.Device).SB.AEi.
toFixed())+Ly)+A._GetAutoObject(C.Device).SB.AEn.toFixed())+Ly)+A._GetAutoObject(
C.Device).SB.AGz.toFixed())+O8)+A._GetAutoObject(C.Device).SB.ACv)+O8)+A._GetAutoObject(
A.acj.KO).AjN(((B=A._GetAutoObject(C.Device).SB.Timestamp)<0)?B+0x100000000:B))+
MM)+AWs)+A._GetAutoObject(C.Helper).BjH())+O8)+A._GetAutoObject(C.Device).GetCommitHash(
))+O8)+A._GetAutoObject(C.Device).GetCommitCount().toFixed())+O8)+A._GetAutoObject(
A.acj.KO).AjN(A._GetAutoObject(C.Device).GetCommitEpoch());return Az2;},Bi$:function(
){var B;var Az2=(((((((((((((((((((((AWt+A._GetAutoObject(C.Device).Q1.ARP.toFixed(
))+Ly)+A._GetAutoObject(C.Device).Q1.ARQ.toFixed())+Ly)+A._GetAutoObject(C.Device
).Q1.ARO.toFixed())+MM)+A.aaR(A.acf.A6O))+A.aaR(A.acf.Colon))+Of)+A._GetAutoObject(
A.acj.KO).AjN(((B=A._GetAutoObject(C.Device).Q1.Timestamp)<0)?B+0x100000000:B))+
Ayk)+AWu)+A._GetAutoObject(C.Device).S0.AVz.toFixed())+Ly)+A._GetAutoObject(C.Device
).S0.AVA.toFixed())+Ly)+A._GetAutoObject(C.Device).S0.AVy.toFixed())+MM)+A.aaR(A.
acf.A6O))+A.aaR(A.acf.Colon))+Of)+A._GetAutoObject(A.acj.KO).AjN(((B=A._GetAutoObject(
C.Device).S0.Timestamp)<0)?B+0x100000000:B);return Az2;},A6$:function(A1c){var B;
var O;var AA2=A.jV;for(O=1;O<=A1c;O=O+1)if(!!A.abz(0,2))AA2=AA2+String.fromCharCode(
A.abz(97,104)&0xFFFF);else AA2=AA2+String.fromCharCode(A.abz(48,57)&0xFFFF);return AA2;
},Abr:function(Eo){var Azi=0;if(Eo===1)Eo=0;var Bc4=this.AgG.Avx(Eo);if(Bc4>=0)Azi=
this.Afz.Get(Bc4);return Azi;},ADe:function(Eo){var FW=0;var ABF=this.AgG.Avx(Eo
);if(ABF>=0)FW=this.Afy.Get(ABF);return FW;},ADd:function(Eo){var FW=0;var ABF=this.
AgG.Avx(Eo);if(ABF>=0)FW=this.Afx.Get(ABF);return FW;},A61:function(){var Be=this.
Mv();var U8=A._NewObject(C.AnimalTypeFilterCriterion,0);U8.Initialize(14,0,A._GetAutoObject(
C.Device).ACO,true);Be.CX(U8);return Be;},ARs:function(J9){var BM=Math.trunc(J9/
1000000000000)|0;if(!BM)return 0;else if(BM>=900)return 1;else if(!A._GetAutoObject(
C.Converter).ANG(BM))return 2;else return 3;},A7d:function(BAw){var Be=A._GetAutoObject(
C.Helper).AC8();var AfS=A._GetAutoObject(C.Helper).A6W(3,BAw);AfS.YK=true;Be.CX(
AfS);return Be;},A6W:function(Eb,Bb7){var Aw=A._NewObject(C.UInt32FilterCriterion
,0);Aw.EJ=4;switch(Eb){case 2:{Aw.Operator=3;Aw.A5=A._GetAutoObject(C.Helper).ZR(
Bb7);}break;case 3:{Aw.Operator=2;Aw.A5=A._GetAutoObject(C.Helper).ZR(Bb7-1);}break;
default:A.ab5("%s%e",AHF,Eb);}return Aw;},BjH:function(){return(((A._GetAutoObject(
C.Device).GetVersionMajor().toFixed()+Ly)+A._GetAutoObject(C.Device).GetVersionMinor(
).toFixed())+Ly)+A._GetAutoObject(C.Device).GetVersionRev().toFixed();},A5n:function(
Rr,En){var Gv=0;switch(Rr){case 0:Gv=En.VisualId;break;case 2:Gv=A._GetAutoObject(
C.Helper).Ak7(En.TransponderId);break;case 3:if(En.NaisId>0)Gv=A._GetAutoObject(
C.Helper).Ak7(En.NaisId);else Gv=En.VisualId;break;case 1:if(!A._GetAutoObject(C.
Device).EartagNrAssignmentMode)Gv=A._GetAutoObject(C.Device).AjV;else switch(En.
Gender){case 0:Gv=A._GetAutoObject(C.Device).Aq7;break;case 1:Gv=A._GetAutoObject(
C.Device).Aq6;break;case 2:Gv=A._GetAutoObject(C.Device).AjV;break;default:throw new
Error(AHE+En.Gender.toFixed());}break;default:throw new Error(AWv+Rr.toFixed());
}return Gv;},Bag:function(){var B;var IZ=null;var Tm=0;if(!A._GetAutoObject(C.Device
).EartagNrAssignmentMode){IZ=[B=A._GetAutoObject(C.Device),B.Ant,B.AoB];Tm=A._GetAutoObject(
C.Device).Au_;}else switch(A._GetAutoObject(C.Helper).W.Gender){case 1:{IZ=[B=A.
_GetAutoObject(C.Device),B.Awj,B.AyQ];Tm=A._GetAutoObject(C.Device).ACG;}break;case
0:{IZ=[B=A._GetAutoObject(C.Device),B.Awk,B.AyR];Tm=A._GetAutoObject(C.Device).ACH;
}break;case 2:{IZ=[B=A._GetAutoObject(C.Device),B.Ant,B.AoB];Tm=A._GetAutoObject(
C.Device).Au_;}break;default:;}if(!!IZ)switch(Tm){case 1:IZ[2].call(IZ[0],A._GetAutoObject(
C.Helper).W.VisualId-1);break;case 0:IZ[2].call(IZ[0],A._GetAutoObject(C.Helper).
W.VisualId+1);break;default:;}},A7G:function(Xq,En){return(En.NaisId!==Xq)&&this.
ARp(Xq);},Bka:function(Iw,En){return(En.TransponderId!==Iw)&&this.ARr(Iw);},AOM:
function(){var Be=A._GetAutoObject(C.Helper).A7b();var AAm=A._NewObject(C.UInt64FilterCriterion
,0);AAm.Initialize(35,5,0,true);Be.CX(AAm);return Be;},Avy:function(){var Be=A._GetAutoObject(
C.Helper).A7b();var AAm=A._NewObject(C.UInt64FilterCriterion,0);AAm.Initialize(35
,0,0,true);Be.CX(AAm);return Be;},J3:function(A05,Ah7){A05.Aj(Ah7);A05.Ar(Ah7);A05.
Z(Ah7);},ANA:function(Ah9){var B;var Aa;var A3d=false;var Xw=Ah9.TT(null,0x1);while(
!!Xw&&(((B=Xw)?B.__proto__:null)!==A.Core.Y)){Aa=(A.kR.Co.isPrototypeOf(Xw)?Xw:null
);if(!!Aa){Aa.Bi(A3d);A3d=!A3d;}Xw=Ah9.TT(Xw,0x1);}},BoZ:function(Iw){var Xt=A._GetAutoObject(
C.Device).An.Filter;A._GetAutoObject(C.Device).An.Bk(null);var A4l=A._GetAutoObject(
C.Device).An.AgZ(22,Iw);var Cz=A._NewObject(C.Animal,0);Cz.E3(A4l,A._GetAutoObject(
C.Device).An);Cz.PW(0);Cz.Ci(A._GetAutoObject(C.Device).An);A._GetAutoObject(C.Device
).An.Bk(Xt);},A6Z:function(Aty,AoF){var Be=null;switch(Aty){case 0:Be=this.Bjs(AoF
);break;case 1:Be=this.AC8();break;default:throw new Error(Ayl+Aty.toFixed());}return Be;
},Bjs:function(Bxg){var Be=A._GetAutoObject(C.Helper).Mv();var AfS=this.A6W(2,Bxg
);Be.CX(AfS);return Be;},ByM:function(Aty,AoF){var Xt=A._GetAutoObject(C.Device).
An.Filter;A._GetAutoObject(C.Device).An.Bk(this.A6Z(Aty,AoF));var CB=A._GetAutoObject(
C.Device).An.B_();var O;for(O=CB-1;O>=0;O--){A._GetAutoObject(C.Helper).G8(O);A.
_GetAutoObject(C.Helper).W.Ae5(false);A._GetAutoObject(C.Helper).W.Ci(A._GetAutoObject(
C.Device).An);}A._GetAutoObject(C.Device).An.Bk(Xt);},Bjt:function(Aty,AoF){var Xt=
A._GetAutoObject(C.Device).An.Filter;A._GetAutoObject(C.Device).An.Bk(this.A6Z(Aty
,AoF));var Gh=A._GetAutoObject(C.Device).An.B_();A._GetAutoObject(C.Device).An.Bk(
Xt);return Gh;},A67:function(AH){var Xt=AH.Filter;AH.Bk(this.Avy());var O;var A25=
4294967295;for(O=0;O<AH.B_();O++){var Pc=AH.Hv(O,4);if(Pc<A25)A25=Pc;}AH.Bk(Xt);
return A._GetAutoObject(C.Helper).Mb(A25,A._GetAutoObject(C.Helper).Dv());},Bj9:
function(){if(A._GetAutoObject(C.Device).P4.Z1!==6)return false;if((A._GetAutoObject(
C.Device).P4.AsS===1529)&&(A._GetAutoObject(C.Device).P4.Asl===16900))return true;
return false;},ArA:function(){return this.UD;},A9m:function(){return this.AhI;},
BlM:function(){return this.AUH;},BlN:function(){return this.AUI;},BlQ:function(){
return this.AG1;},_Init:function(aArg){C.AmO._Init.call(this,aArg);C.Animal._Init.
call(this.W={I:this},0);A.Core.Bs._Init.call(this.Av={I:this},0);A.acl.Gm._Init.
call(this.KK={I:this},0);A.acl.Gm._Init.call(this.SU={I:this},0);C.AMK._Init.call(
this.Ad1={I:this},0);C.AVo._Init.call(this.UK={I:this},0);C.AVn._Init.call(this.
UJ={I:this},0);C.TM._Init.call(this.Aeo={I:this},0);C.AV4._Init.call(this.Afy={I:
this},0);C.AV3._Init.call(this.Afx={I:this},0);C.AV2._Init.call(this.Afw={I:this
},0);C.AV6._Init.call(this.Afz={I:this},0);C.AML._Init.call(this.AgG={I:this},0);
this.__proto__=C.HelperClass;var B;this.KK.HO(1);this.KK.Fr(3000);this.KK.B2=100;
this.SU.AwL(10);this.SU.WI(5);this.SU.HO(1);this.SU.Fr(4000);this.Aeo.B2=false;this.
Aeo.Cx=true;this.Aeo.HO(1);this.Aeo.Fr(100);this.KK.SC=[this,this.BCD];this.KK.Q=[
this,this.BlQ,this.Bn9];this.SU.SC=[this,this.BCF];this.SU.Q=[B=A._GetAutoObject(
C.Device),B.AEP,B.AI1];this.Aeo.Q=[B=A._GetAutoObject(C.Device),B.AEQ,B.AI2];this.
Init(aArg);var J7=this._variants();if(J7){this.K={};J7._Init.call(this,aArg);}},
_Done:function(){if(this.K)this.K._Done.call(this);this.__proto__=C.AmO;this.W._Done(
);this.Av._Done();this.KK._Done();this.SU._Done();this.Ad1._Done();this.UK._Done(
);this.UJ._Done();this.Aeo._Done();this.Afy._Done();this.Afx._Done();this.Afw._Done(
);this.Afz._Done();this.AgG._Done();C.AmO._Done.call(this);},_ReInit:function(){
C.AmO._ReInit.call(this);this.W._ReInit();this.Av._ReInit();this.KK._ReInit();this.
SU._ReInit();this.Ad1._ReInit();this.UK._ReInit();this.UJ._ReInit();this.Aeo._ReInit(
);this.Afy._ReInit();this.Afx._ReInit();this.Afw._ReInit();this.Afz._ReInit();this.
AgG._ReInit();if(this.K)this.K._ReInit.call(this);},_Mark:function(D){var B;C.AmO.
_Mark.call(this,D);if((B=this.UD)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.
AhI)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.AUH)&&(B._cycle!=D))B._Mark(B.
_cycle=D);if((B=this.AUI)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.W)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.Av)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
KK)._cycle!=D)B._Mark(B._cycle=D);if((B=this.SU)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Ad1)._cycle!=D)B._Mark(B._cycle=D);if((B=this.UK)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.UJ)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Aeo)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Afy)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Afx)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.Afw)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
Afz)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AgG)._cycle!=D)B._Mark(B._cycle=D);
if(this.K)this.K._Mark(D);},_variants:function(){return A.acs.HelperClass._variants(
);},K:null,_className:"Device::HelperClass"};C.Helper={_Init:function(){C.HelperClass.
_Init.call(this,0);},_ReInit:function(){},_variants:function(){return this;},_this:
null};C.BoolFilterCriterion={A5:false,Abk:function(){var Aw=A._NewObject(C.BoolFilterCriterion
,0);Aw.E$(this);return Aw;},E$:function(AI){C.FilterCriterion.E$.call(this,AI);var
Aw=(C.BoolFilterCriterion.isPrototypeOf(AI)?AI:null);if(!!Aw)this.A5=Aw.A5;},Initialize:
function(A4,Eb,A7,Qg){this.EJ=A4;this.Operator=Eb;this.A5=A7;this.YK=Qg;return this;
},_Init:function(aArg){C.FilterCriterion._Init.call(this,aArg);this.__proto__=C.
BoolFilterCriterion;},_className:"Device::BoolFilterCriterion"};C.UInt32FilterCriterion={
A5:0,Abk:function(){var Aw=A._NewObject(C.UInt32FilterCriterion,0);Aw.E$(this);return Aw;
},E$:function(AI){C.FilterCriterion.E$.call(this,AI);var Aw=(C.UInt32FilterCriterion.
isPrototypeOf(AI)?AI:null);if(!!Aw)this.A5=Aw.A5;},Initialize:function(A4,Eb,A7,
Qg){this.EJ=A4;this.Operator=Eb;this.A5=A7;this.YK=Qg;return this;},_Init:function(
aArg){C.FilterCriterion._Init.call(this,aArg);this.__proto__=C.UInt32FilterCriterion;
},_className:"Device::UInt32FilterCriterion"};C.OverlayMenu={None:0,Home:1,AutoAction:
2,MenuItemSettings:3,RatingSettings:4,WeighingSettings:5,Options:6,AnimalSearch:
7,ActionSettings:8,MeasurementReady:9,AnimalMultiInfoMenu:10,AnimalSearchUnfiltered:
11,AnimalSearchDriedOff:12,MassRecordingMenu:13,MassRecordingDefaults:14,MassRecordingFields:
15,BirthRegistrationsListMenu:16,LAST:17};C.EnumToString={BS:function(A9){throw new
Error(As8+A9.toFixed());},Lx:function(A9){return this.BS(A9);},_Init:function(aArg
){this.__proto__=C.EnumToString;A.h7++;},_Done:function(){this.__proto__=null;A.
h7--;},_ReInit:function(){},_Mark:function(D){var B;if((B=this.I)&&(B._cycle!=D)
)B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:"Device::EnumToString"
};C.ScreenTypeToString={BS:function(A9){var AJ3=A9;var BC;switch(AJ3){case 3:BC=
A.aaR(A.acf.AvE);break;case 34:BC=A.aaR(A.acf.TB);break;case 35:BC=A.aaR(A.acf.Vw
);break;case 43:BC=A.aaR(A.acf.AOL);break;default:BC=this.Bqn(A9);}return BC;},Bqn:
function(A9){var AJ3=A9;var BC=A.jV;switch(AJ3){case 0:BC=Aym;break;case 2:BC=AWw;
break;case 4:BC=AWx;break;case 39:BC=AHG;break;case 38:BC=AWy;break;case 63:BC=AHH;
break;case 64:BC=AHI;break;case 82:BC=AHJ;break;case 83:BC=AWz;break;case 92:BC=
AHK;break;case 93:BC=AWA;break;case 65:BC=AWB;break;case 3:BC=Qc;break;case 6:BC=
Xi;break;case 16:BC=AWC;break;case 22:BC=AWD;break;case 42:BC=AWE;break;case 88:
BC=AWF;break;case 87:BC=AWG;break;case 89:BC=AWH;break;case 95:BC=AWI;break;case
17:BC=Ah0;break;case 23:BC=AHL;break;case 18:BC=AWJ;break;case 19:BC=AWK;break;case
37:BC=AHM;break;case 76:BC=AHN;break;case 1:BC=Ayn;break;case 5:BC=Qd;break;case
7:BC=AWL;break;case 81:BC=AWM;break;case 8:BC=AWN;break;case 9:BC=As9;break;case
40:BC=AWO;break;case 41:BC=AWP;break;case 24:BC=AWQ;break;case 10:BC=AWR;break;case
60:BC=AWS;break;case 21:BC=AWT;break;case 11:BC=As_;break;case 29:BC=AWU;break;case
48:BC=AWV;break;case 30:BC=AWW;break;case 12:BC=AWX;break;case 13:BC=AWY;break;case
14:BC=AWZ;break;case 15:BC=AW0;break;case 69:BC=AW1;break;case 70:BC=AW2;break;case
20:BC=AW3;break;case 25:BC=AHO;break;case 66:BC=Alf;break;case 59:BC=AW4;break;case
58:BC=AW5;break;case 56:BC=AW6;break;case 57:BC=Ayo;break;case 68:BC=Alg;break;case
67:BC=Ah1;break;case 84:BC=Ayp;break;case 77:BC=Aoo;break;case 26:BC=Ah2;break;case
28:BC=AW7;break;case 27:BC=Ayq;break;case 31:BC=AHP;break;case 78:BC=AfF;break;case
34:BC=AHQ;break;case 35:BC=Aag;break;case 32:BC=Alh;break;case 45:BC=Aop;break;case
49:BC=AW8;break;case 55:BC=AW9;break;case 54:BC=AW_;break;case 33:BC=AW$;break;case
36:BC=AXa;break;case 50:BC=As$;break;case 75:BC=AHR;break;case 43:BC=AHS;break;case
44:BC=AXb;break;case 61:BC=AXc;break;case 62:BC=AXd;break;case 46:BC=AXe;break;case
47:BC=AXf;break;case 85:BC=AXg;break;case 86:BC=AXh;break;case 71:BC=AXi;break;case
72:BC=AXj;break;case 74:BC=AXk;break;case 73:BC=AXl;break;case 51:BC=Ayr;break;case
52:BC=AHT;break;case 53:BC=AHU;break;case 79:BC=AHV;break;case 80:BC=AHW;break;case
90:BC=AHX;break;case 91:BC=AHY;break;case 94:BC=AXm;break;default:throw new Error(
AXn+AJ3.toFixed());}return BC;},_Init:function(aArg){C.EnumToString._Init.call(this
,aArg);this.__proto__=C.ScreenTypeToString;},_className:"Device::ScreenTypeToString"
};C.OverlayMenuToString={BS:function(A9){var BfU=A9;var Pf=A.jV;switch(BfU){case
0:Pf=AXo;break;case 1:Pf=Qc;break;case 8:Pf=AXp;break;case 2:Pf=AXq;break;case 3:
Pf=AXr;break;case 4:Pf=AXs;break;case 5:Pf=Ays;break;case 6:Pf=AHZ;break;case 7:
Pf=AXt;break;case 11:Pf=AH0;break;case 12:Pf=Ah3;break;case 9:Pf=U1;break;case 10:
Pf=AXu;break;case 14:Pf=Aah;break;case 15:Pf=AXv;break;case 13:Pf=AXw;break;case
16:Pf=Ali;break;default:throw new Error(AfG+BfU.toFixed());}return Pf;},_Init:function(
aArg){C.EnumToString._Init.call(this,aArg);this.__proto__=C.OverlayMenuToString;
},_className:"Device::OverlayMenuToString"};C.ScanStateToString={BS:function(A9){
var Bgs=A9;var Bp=A.jV;switch(Bgs){case 4:Bp=AcQ;break;case 0:Bp=Aoq;break;case 2:
Bp=AXx;break;case 3:Bp=O_;break;case 1:Bp=AH1;break;default:throw new Error(AH2+
Bgs.toFixed());}return Bp;},_Init:function(aArg){C.EnumToString._Init.call(this,
aArg);this.__proto__=C.ScanStateToString;},_className:"Device::ScanStateToString"
};C.MeasureStateToString={BS:function(A9){var Bex=A9;var Bp=A.jV;switch(Bex){case
4:Bp=AcQ;break;case 0:Bp=Aoq;break;case 2:Bp=AXy;break;case 1:Bp=AH1;break;case 3:
Bp=AH3;break;default:throw new Error(AH4+Bex.toFixed());}return Bp;},_Init:function(
aArg){C.EnumToString._Init.call(this,aArg);this.__proto__=C.MeasureStateToString;
},_className:"Device::MeasureStateToString"};C.TemperatureUnit={Celsius:0,Fahrenheit:
1,LAST:2};C.TemperatureUnitToString={BS:function(A9){var BgS=A9;var Ap_=A.jV;switch(
BgS){case 0:Ap_=A.aaR(A.acf.BqE);break;case 1:Ap_=A.aaR(A.acf.BqF);break;default:
throw new Error(AH5+BgS.toFixed());}return Ap_;},_Init:function(aArg){C.EnumToString.
_Init.call(this,aArg);this.__proto__=C.TemperatureUnitToString;},_className:"Device::TemperatureUnitToString"
};C.AnimalType={DairyCalf:0,DairyCow:1,SheepLamb:2,LAST:3};C.AnimalTypeToString={
BS:function(A9){var ALb=A9;var type=A.jV;switch(ALb){case 0:type=A.aaR(A.acf.BhZ
);break;case 1:type=A.aaR(A.acf.Bib);break;case 2:type=A.aaR(A.acf.Bki);break;default:
throw new Error(AXz+ALb.toFixed());}return type;},_Init:function(aArg){C.EnumToString.
_Init.call(this,aArg);this.__proto__=C.AnimalTypeToString;},_className:"Device::AnimalTypeToString"
};C.Language={Default:0,German:1,Spanish:2,French:3,Italian:4,Finnish:5,Chinese_TW:
6,Turkish:7,Greek:8,Russian:9,Dutch:10,Czech:11,Estonian:12,Bulgarian:13,Bosnian:
14,Norwegian:15,Ukrainian:16,Danish:17,Hungarian:18,Japanese:19,Latvian:20,Polish:
21,Portuguese:22,Romanian:23,Swedish:24,LAST:25};C.LanguageToString={BS:function(
A9){var AAf=A9;var Kg=A.jV;switch(AAf){case 14:Kg=AXA;break;case 13:Kg=AXB;break;
case 6:Kg=AXC;break;case 11:Kg=AXD;break;case 17:Kg=AXE;break;case 0:Kg=AXF;break;
case 10:Kg=AXG;break;case 12:Kg=AH6;break;case 5:Kg=AXH;break;case 3:Kg=AH7;break;
case 1:Kg=AH8;break;case 8:Kg=Ayt;break;case 18:Kg=AXI;break;case 4:Kg=AXJ;break;
case 19:Kg=AXK;break;case 20:Kg=AXL;break;case 15:Kg=AXM;break;case 21:Kg=AXN;break;
case 22:Kg=AXO;break;case 23:Kg=AXP;break;case 9:Kg=Ata;break;case 2:Kg=Atb;break;
case 24:Kg=AH9;break;case 7:Kg=AXQ;break;case 16:Kg=AXR;break;default:throw new Error(
AH_+AAf.toFixed());}return Kg;},Lx:function(A9){var AAf=A9;var CV=A.jV;switch(AAf
){case 14:CV=AXS;break;case 13:CV=W8;break;case 6:CV=AXT;break;case 11:CV=AXU;break;
case 17:CV=AXV;break;case 0:CV=AXW;break;case 10:CV=Xd;break;case 12:CV=AXX;break;
case 5:CV=UY;break;case 3:CV=W$;break;case 1:CV=O7;break;case 8:CV=AXY;break;case
18:CV=Oe;break;case 4:CV=Xa;break;case 19:CV=AXZ;break;case 20:CV=Ta;break;case 15:
CV=Tb;break;case 21:CV=Tc;break;case 22:CV=Td;break;case 23:CV=Aab;break;case 9:
CV=Te;break;case 2:CV=Aad;break;case 24:CV=AX0;break;case 7:CV=Xf;break;case 16:
CV=K1;break;default:throw new Error(AH_+AAf.toFixed());}return CV;},_Init:function(
aArg){C.EnumToString._Init.call(this,aArg);this.__proto__=C.LanguageToString;},_className:
"Device::LanguageToString"};C.Gender={Male:0,Female:1,Unknown:2,LAST:3};C.BirthType={
Single:0,Twins:1,Triplets:2,Quadruplets:3,LAST:4};C.GenderToString={BS:function(
A9){var AtY=A9;var AKj=A.jV;switch(AtY){case 0:AKj=A.aaR(A.acf.Male);break;case 1:
AKj=A.aaR(A.acf.Female);break;case 2:AKj=A.aaR(A.acf.Unknown);break;default:throw new
Error(AX1+AtY.toFixed());}return AKj;},_Init:function(aArg){C.EnumToString._Init.
call(this,aArg);this.__proto__=C.GenderToString;},_className:"Device::GenderToString"
};C.BirthTypeToString={BS:function(A9){var type=A9;var AfW=A.jV;switch(type){case
0:AfW=A.aaR(A.acf.BpC);break;case 1:AfW=A.aaR(A.acf.BqA);break;case 2:AfW=A.aaR(
A.acf.Triplets);break;case 3:AfW=A.aaR(A.acf.Quadruplets);break;default:throw new
Error(AX2+type.toFixed());}return AfW;},_Init:function(aArg){C.EnumToString._Init.
call(this,aArg);this.__proto__=C.BirthTypeToString;},_className:"Device::BirthTypeToString"
};C.SyncState={Idle:0,Init:1,Exporting:2,ImportStart:3,Importing:4,ImportFinish:
5,Ready:6,Error:7,LAST:8};C.SyncStateToString={BS:function(A9){var BgM=A9;var Bp=
A.jV;switch(BgM){case 7:Bp=AcQ;break;case 0:Bp=Aoq;break;case 6:Bp=AH3;break;case
2:Bp=AX3;break;case 5:Bp=AX4;break;case 3:Bp=AX5;break;case 4:Bp=AX6;break;case 1:
Bp=AH$;break;default:throw new Error(AIa+BgM.toFixed());}return Bp;},_Init:function(
aArg){C.EnumToString._Init.call(this,aArg);this.__proto__=C.SyncStateToString;},
_className:"Device::SyncStateToString"};C.RatedAttributeToString={BS:function(A9
){var AA3=A9;switch(AA3){case 0:return A.jV;case 1:return A.aaR(A.acf.BoM);case 4:
return A.aaR(A.acf.BoL);case 3:return A.aaR(A.acf.BoN);case 2:return A.aaR(A.acf.
BoK);default:throw new Error(Ayu+AA3.toFixed());}},Lx:function(A9){var AA3=A9;switch(
AA3){case 0:return A.jV;case 1:return A.aaR(A.acf.Feed);case 4:return A.aaR(A.acf.
AGs);case 3:return A.aaR(A.acf.AGt);case 2:return A.aaR(A.acf.AGq);default:throw new
Error(Ayu+AA3.toFixed());}},_Init:function(aArg){C.EnumToString._Init.call(this,
aArg);this.__proto__=C.RatedAttributeToString;},_className:"Device::RatedAttributeToString"
};C.AssesmentToString={BS:function(A9){var Alw=A9;var Azp=A.jV;switch(Alw){case 0:
case 5:Azp=A.jV;break;case 3:Azp=A.aaR(A.acj.BpI);break;case 2:Azp=A.aaR(A.acj.BpK
);break;case 1:Azp=A.aaR(A.acj.BpJ);break;default:throw new Error(AIb+Alw.toFixed(
));}return Azp;},_Init:function(aArg){C.EnumToString._Init.call(this,aArg);this.
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
8,Opened:9};C.PopupContext={AGd:null,AkJ:A.jV,Ak4:0,PopupState:1,Id:0,Show:false
,BnS:function(E){var B;if(this.PopupState===E)return;this.PopupState=E;if(!!this.
AGd)(B=this.AGd)?B[1].call(B[0],this):null;},_Init:function(aArg){this.__proto__=
C.PopupContext;A.h7++;},_Done:function(){this.__proto__=null;A.h7--;},_ReInit:function(
){},_Mark:function(D){var B;if((B=this.AGd)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=
D);if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:
null,_className:"Device::PopupContext"};C.Boolean={No:0,Yes:1,LAST:2};C.BooleanToYesNo={
BS:function(A9){switch(A9){case 0:return A.aaR(A.acf.No);case 1:return A.aaR(A.acf.
Yes);default:return Aor+A9.toFixed();}},_Init:function(aArg){C.EnumToString._Init.
call(this,aArg);this.__proto__=C.BooleanToYesNo;},_className:"Device::BooleanToYesNo"
};C.AnimalGroupTableFields={Id:0,GroupName:1};C.AnimalGroup={GroupName:AHA,Id:0,
E3:function(Ad,AH){var HF=C.Row.E3.call(this,Ad,AH);if(HF&&!!AH){this.OnSetId(AH.
CF(Ad,0));this.AFm(AH.V2(Ad,1));}return HF;},Ci:function(AH){var HF=C.Row.Ci.call(
this,AH);if(HF&&!!AH){var Jq=AH.OC();if(Jq<=0)A.ab5("%s",Xh);else{if(this.Am7())
this.CL=AH.YH();AH.Ho(this.CL,0,this.Id);AH.ZJ(this.CL,1,this.GroupName);AH.OE(Jq
);}}return HF;},Gr:function(){C.Row.Gr.call(this);this.OnSetId(-1);},E6:function(
){C.Row.E6.call(this);this.OnSetId(0);this.AFm(A.jV);},OnSetId:function(E){if(this.
Id===E)return;this.Id=E;A.abo([this,this.Q4,this.OnSetId],0);},AFm:function(E){if(
this.GroupName===E)return;this.GroupName=E;A.abo([this,this.Blq,this.AFm],0);},Q4:
function(){return this.Id;},Blq:function(){return this.GroupName;},_Init:function(
aArg){C.Row._Init.call(this,aArg);this.__proto__=C.AnimalGroup;this.TableId=3;},
_className:"Device::AnimalGroup"};C.PopupIdToString={BS:function(A9){var AdE=A9;
var At=A.jV;var AJ1;AJ1=A.aaR(A.acf.BqY)+MM;switch(AdE){case 0:At=A.aaR(A.acf.Unknown
);break;case 1:At=A.aaR(A.acf.SevereError);break;case 58:At=A.aaR(A.acf.BiZ);break;
case 2:At=A.aaR(A.acf.BiX);break;case 3:At=A.aaR(A.acf.BqK);break;case 77:At=A._GetAutoObject(
C.Helper).Bjb();break;case 78:At=A._GetAutoObject(C.Helper).Bi$();break;case 79:
At=A._GetAutoObject(C.Helper).Bja();break;case 9:At=A.aaR(A.acf.Bra);break;case 5:
At=A.aaR(A.acf.SuccessDataSync);break;case 8:At=A.aaR(A.acf.SuccessResetFactorySettings
);break;case 116:At=A.aaR(A.acf.Bp2);break;case 34:At=A.aaR(A.acf.SuccessResetAnimalData
);break;case 10:At=A._GetAutoObject(C.Device).ADb();break;case 82:At=A.aaR(A.acf.
Bi1);break;case 83:At=A.aaR(A.acf.Bi2);break;case 80:At=A.aaR(A.acf.BpU);break;case
81:At=A.aaR(A.acf.SuccessRestoreBackup);break;case 91:At=A.aaR(A.acf.BhM);break;
case 92:At=A.aaR(A.acf.Bo3);break;case 4:At=A.aaR(A.acf.WarningDataSync);break;case
7:At=A.aaR(A.acf.Bq_);break;case 33:At=A.aaR(A.acf.WarningResetAnimalData);break;
case 115:At=A.aaR(A.acf.WarningResetDeviceData);break;case 6:At=A.aaR(A.acf.WarningRestart
);break;case 27:At=A.aaR(A.acf.WarningNoActionDefined);break;case 64:At=A.aaR(A.
acf.WarningActionNotApplicable);break;case 28:At=A.aaR(A.acf.WarningNoMenuItemVisible
);break;case 29:At=A.aaR(A.acf.WarningEnterPresentationMode);break;case 30:At=A.
aaR(A.acf.WarningNoAnimalsRegistered);break;case 41:At=((AJ1+A.aaR(A.acf.ARX))+MM
)+A.aaR(A.acf.Bkv);break;case 50:At=((AJ1+A.aaR(A.acf.ARX))+MM)+A.aaR(A.acf.Bkx);
break;case 51:At=((AJ1+A.aaR(A.acf.ARX))+MM)+A.aaR(A.acf.Bkw);break;case 42:At=A.
aaR(A.acf.Bq8);break;case 45:At=A.aaR(A.acf.Bq2);break;case 46:At=A.aaR(A.acf.WarningNoValidCountryCode
);break;case 57:At=A.aaR(A.acf.WarningOutdatedAnimalWeight);break;case 52:At=A.aaR(
A.acf.WarningOutdatedAnimalWeights);break;case 53:At=A.aaR(A.acf.WarningWeightEvaluationSingular
);break;case 56:At=A.aaR(A.acf.WarningWeightEvaluationPlural);break;case 11:At=A.
aaR(A.acf.ScanError);break;case 12:At=A.aaR(A.acf.ScanNotFound);break;case 13:At=
A.aaR(A.acf.BhE);break;case 36:At=A.aaR(A.acf.Bqv);break;case 14:At=A.aaR(A.acf.
AnimalNotFound);break;case 15:At=A.aaR(A.acf.SuccessUnregister);break;case 35:At=
A.aaR(A.acf.SuccessUnregisterPerished);break;case 26:At=A.aaR(A.acf.SuccessCreationNewAnimal
);break;case 23:At=A.aaR(A.acf.SuccessCreationNewAnimals);break;case 24:At=A.aaR(
A.acf.Bie);break;case 49:At=A.aaR(A.acf.EvaluationInProgress);break;case 16:At=A.
aaR(A.acf.Bij);break;case 17:At=A.aaR(A.acf.BpM);break;case 18:At=A.aaR(A.acf.Bp0
);break;case 19:At=A.aaR(A.acf.BpN);break;case 20:At=A.aaR(A.acf.Bp1);break;case
54:At=A.aaR(A.acf.BpV);break;case 55:At=A.aaR(A.acf.BpY);break;case 21:At=A.aaR(
A.acf.Bal);break;case 48:At=(A.aaR(A.acf.Bal)+MM)+A.aaR(A.acf.A55);break;case 22:
At=A.aaR(A.acf.Bq4);break;case 63:At=A.aaR(A.acf.Bq5);break;case 85:At=A.aaR(A.acf.
Bq7);break;case 43:At=A.aaR(A.acf.Bq6);break;case 25:At=A.aaR(A.acf.A$5);break;case
47:At=(A.aaR(A.acf.A$5)+MM)+A.aaR(A.acf.A55);break;case 107:At=A.aaR(A.acf.BqG);
break;case 31:{var BAf=(((((((((((((((((((A.aaR(A.acf.Bh7)+Ayk)+A.aaR(A.acf.ANC)
)+A.aaR(A.acf.Colon))+Of)+A.aaR(A.acf.Bh9))+MM)+A.aaR(A.acf.AOB))+A.aaR(A.acf.Colon
))+Of)+A.aaR(A.acf.Bi7))+MM)+A.aaR(A.acf.AUs))+A.aaR(A.acf.Colon))+Of)+A.aaR(A.acf.
BoP))+MM)+A.aaR(A.acf.AUr))+A.aaR(A.acf.Colon))+Of)+A.aaR(A.acf.BoO);At=BAf;}break;
case 32:At=A.aaR(A.acf.Bqw);break;case 69:At=A.aaR(A.acf.BkI);break;case 44:At=A.
aaR(A.acf.Bq$);break;case 37:At=A.aaR(A.acf.WarningResetWeightSettings);break;case
38:At=A.aaR(A.acf.WarningResetTempThresholds);break;case 39:At=A.aaR(A.acf.BoG);
break;case 76:At=(A.aaR(A.acf.A5I)+MM)+A.aaR(A.acf.AUu);break;case 40:At=A.aaR(A.
acf.BpW);break;case 75:At=A.aaR(A.acf.BpO);break;case 59:At=A.aaR(A.acf.QuestionAddAnotherCalfMultiples
);break;case 62:At=A.aaR(A.acf.BpQ);break;case 96:At=A.aaR(A.acf.BpR);break;case
60:At=A.aaR(A.acf.BpS);break;case 98:At=A.aaR(A.acf.BpT);break;case 61:At=A.aaR(
A.acf.Bp3);break;case 104:At=A.aaR(A.acf.Bp4);break;case 65:At=A.aaR(A.acf.SuccessClearAnimalLoss
);break;case 66:At=A.aaR(A.acf.WarningNoActionsForAnimalLoss);break;case 67:At=A.
aaR(A.acf.SuccessLinkTransponder);break;case 106:At=A.aaR(A.acf.BpP);break;case 86:
At=A.aaR(A.acf.SuccessUnlinkTransponder);break;case 68:At=A.aaR(A.acf.BpX);break;
case 70:At=A.aaR(A.acf.Bi3);break;case 71:At=A.aaR(A.acf.A$X);break;case 72:At=A.
aaR(A.acf.Bp7);break;case 113:At=(A.aaR(A.acf.A$X)+MM)+A.aaR(A.acf.A7W);break;case
97:At=A.aaR(A.acf.Bi5);break;case 100:At=(A.aaR(A.acf.A$Y)+MM)+A.aaR(A.acf.A$k);
break;case 114:At=(A.aaR(A.acf.A$Y)+MM)+A.aaR(A.acf.A7W);break;case 99:At=A.aaR(
A.acf.Bp8);break;case 88:At=A.aaR(A.acf.Bi4);break;case 89:At=A.aaR(A.acf.Bp5);break;
case 90:At=A.aaR(A.acf.Bp6);break;case 73:At=A.aaR(A.acf.WarningNoPremisesID);break;
case 74:At=A.aaR(A.acf.WarningNoFlashDrivePresent);break;case 94:At=A.aaR(A.acf.
WarningNoBackupPathPresent);break;case 93:At=A.aaR(A.acf.WarningNoBackupFilePresent
);break;case 84:At=A.aaR(A.acf.Bji);break;case 87:At=A.aaR(A.acf.Brc);break;case
95:At=A.aaR(A.acf.Bq1);break;case 108:At=A.aaR(A.acf.Bq3);break;case 109:At=A.aaR(
A.acf.SuccessMassDeregistration);break;case 102:At=A.aaR(A.acf.WarningParsedDateInFutureInvalid
);break;case 101:At=A.aaR(A.acf.WarningParsingDateFailed);break;case 103:At=A.aaR(
A.acf.WarningParsingNaisIdFailed);break;case 105:At=A.aaR(A.acf.Bq9);break;case 110:
At=A.aaR(A.acf.BhY);break;case 111:At=A.aaR(A.acf.Bpd);break;case 112:At=A.aaR(A.
acf.Bpe);break;default:throw new Error(Atc+AdE.toFixed());}return At;},Lx:function(
A9){var AdE=A9;var At=A.jV;switch(AdE){case 0:At=AIc;break;case 1:At=AX7;break;case
58:At=AId;break;case 2:At=AX8;break;case 3:At=AIe;break;case 77:At=AX9;break;case
78:At=AX_;break;case 79:At=AX$;break;case 9:At=AYa;break;case 5:At=AYb;break;case
8:At=AYc;break;case 116:At=AYd;break;case 34:At=AYe;break;case 80:At=AYf;break;case
81:At=AYg;break;case 91:At=AYh;break;case 92:At=AYi;break;case 82:At=Ayv;break;case
83:At=AYj;break;case 10:At=AYk;break;case 4:At=Ayw;break;case 7:At=Atd;break;case
33:At=U2;break;case 115:At=Ate;break;case 6:At=AYl;break;case 27:At=AYm;break;case
64:At=AYn;break;case 28:At=AIf;break;case 29:At=AYo;break;case 30:At=AIg;break;case
41:At=AYp;break;case 50:At=AYq;break;case 51:At=AYr;break;case 42:At=Atf;break;case
45:At=AYs;break;case 46:At=AYt;break;case 57:At=AIh;break;case 52:At=AYu;break;case
53:At=AYv;break;case 56:At=AYw;break;case 11:At=AYx;break;case 12:At=AcR;break;case
13:At=AYy;break;case 36:At=AYz;break;case 14:At=AYA;break;case 15:At=AYB;break;case
35:At=AIi;break;case 26:At=AYC;break;case 23:At=AYD;break;case 24:At=AYE;break;case
49:At=AYF;break;case 16:At=AYG;break;case 17:At=AYH;break;case 18:At=AIj;break;case
19:At=AYI;break;case 20:At=AYJ;break;case 54:At=AYK;break;case 55:At=AIk;break;case
21:At=AIl;break;case 48:At=AYL;break;case 22:At=AYM;break;case 63:At=AYN;break;case
43:At=AYO;break;case 85:At=Rp;break;case 25:At=Atg;break;case 47:At=AIm;break;case
107:At=AIn;break;case 31:At=Aos;break;case 32:At=Aot;break;case 69:At=Ayx;break;
case 44:At=AYP;break;case 37:At=AIo;break;case 38:At=AYQ;break;case 39:At=AYR;break;
case 76:At=AYS;break;case 40:At=AYT;break;case 75:At=AYU;break;case 59:At=AYV;break;
case 62:At=AYW;break;case 96:At=AYX;break;case 60:At=AYY;break;case 98:At=AYZ;break;
case 65:At=AY0;break;case 61:At=AY1;break;case 104:At=AY2;break;case 66:At=AY3;break;
case 67:At=AY4;break;case 106:At=AY5;break;case 86:At=AY6;break;case 68:At=Aou;break;
case 70:At=AIp;break;case 71:At=AY7;break;case 72:At=AIq;break;case 113:At=AIr;break;
case 97:At=AcS;break;case 100:At=AIs;break;case 99:At=AY8;break;case 114:At=AIt;
break;case 88:At=AY9;break;case 89:At=Ayy;break;case 90:At=AY_;break;case 73:At=
AY$;break;case 74:At=Ayz;break;case 94:At=AZa;break;case 93:At=AZb;break;case 84:
At=AZc;break;case 87:At=AIu;break;case 95:At=Aov;break;case 108:At=AIv;break;case
109:At=AZd;break;case 102:At=AIw;break;case 101:At=AIx;break;case 103:At=Alj;break;
case 105:At=AZe;break;case 110:At=Aow;break;case 111:At=AZf;break;case 112:At=AIy;
break;default:throw new Error(Atc+AdE.toFixed());}return At;},_Init:function(aArg
){C.EnumToString._Init.call(this,aArg);this.__proto__=C.PopupIdToString;},_className:
"Device::PopupIdToString"};C.PopupParamSeparator=";";C.RatingMode={Basic:0,Extended:
1,LAST:2};C.TransponderType={UNDEFINED:0,AnimalId:1,FarmId:2,GroupId:3,PersonId:
4,LAST:5};C.TransponderProtocol={UNDEFINED:0,FDX:1,HDX:2,HDX_URBAN:3,LAST:4};C.TransponderTypeToString={
BS:function(A9){var Bg5=A9;var type=A.jV;switch(Bg5){case 1:type=AIz;break;case 2:
type=AZg;break;case 3:type=AZh;break;case 4:type=AIA;break;case 0:type=Aym;break;
default:throw new Error(AZi+Bg5.toFixed());}return type;},_Init:function(aArg){C.
EnumToString._Init.call(this,aArg);this.__proto__=C.TransponderTypeToString;},_className:
"Device::TransponderTypeToString"};C.TransponderProtocolToString={BS:function(A9
){var Bg3=A9;var AA0=A.jV;switch(Bg3){case 1:AA0=AZj;break;case 2:AA0=AZk;break;
case 3:AA0=AZl;break;case 0:AA0=Aym;break;default:throw new Error(AZm+Bg3.toFixed(
));}return AA0;},_Init:function(aArg){C.EnumToString._Init.call(this,aArg);this.
__proto__=C.TransponderProtocolToString;},_className:"Device::TransponderProtocolToString"
};C.Transponder={Id:0,TransponderProtocol:0,TransponderType:0,ATY:function(E){if(
this.TransponderType===E)return;this.TransponderType=E;A.abo([this,this.Bl2,this.
ATY],0);},ATX:function(E){if(this.TransponderProtocol===E)return;this.TransponderProtocol=
E;A.abo([this,this.Bl1,this.ATX],0);},OnSetId:function(E){if(this.Id===E)return;
this.Id=E;A.abo([this,this.Q4,this.OnSetId],0);},AOY:function(){return A._GetAutoObject(
C.Converter).Bqu(this.Id);},Bjq:function(){return A._GetAutoObject(C.Converter).
AxX(this.Id);},Bl2:function(){return this.TransponderType;},Bl1:function(){return this.
TransponderProtocol;},Q4:function(){return this.Id;},_Init:function(aArg){this.__proto__=
C.Transponder;A.h7++;},_Done:function(){this.__proto__=null;A.h7--;},_ReInit:function(
){},_Mark:function(D){var B;if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:
null,_cycle:0,_observers:null,_className:"Device::Transponder"};C.RatingModeToString={
BS:function(A9){var Vh=A9;var Nz=A.jV;switch(Vh){case 0:Nz=A.aaR(A.acf.Basic);break;
case 1:Nz=A.aaR(A.acf.Extended);break;default:throw new Error(AZn+Vh.toFixed());
}return Nz;},_Init:function(aArg){C.EnumToString._Init.call(this,aArg);this.__proto__=
C.RatingModeToString;},_className:"Device::RatingModeToString"};C.TableRowsCount={
_Init:function(aArg){this.__proto__=C.TableRowsCount;A.h7++;},_Done:function(){this.
__proto__=null;A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((B=this.
I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:
"Device::TableRowsCount"};C.MassUnit={Kilogramm:0,Pound:1,LAST:2};C.MassUnitToString={
BS:function(A9){var Bet=A9;var Ap_=A.jV;switch(Bet){case 0:Ap_=A.aaR(A.acf.Bkg);
break;case 1:Ap_=A.aaR(A.acf.Pound);break;default:throw new Error(AZo+Bet.toFixed(
));}return Ap_;},_Init:function(aArg){C.EnumToString._Init.call(this,aArg);this.
__proto__=C.MassUnitToString;},_className:"Device::MassUnitToString"};C.MinWeightGain=
20;C.MaxWeightGain=2000;C.WeightGainStep=10;C.Int32ArrayWrapper={MH:10,Array:A.abi(
10,0,null),ZA:function(E){if(this.MH===E)return;if(E>10)throw new Error(AZp);this.
MH=E;},Set:function(aIndex,AK){if((aIndex<0)||(aIndex>=this.MH))throw new Error(
AIB);this.Array.Set(aIndex,AK);},Get:function(aIndex){if((aIndex<0)||(aIndex>=this.
MH))throw new Error(AIB);return this.Array.Get(aIndex);},AmY:function(){var Qz=0;
var O;for(O=0;O<this.MH;O=O+1)Qz=Qz+this.Get(O);return Qz;},toString:function(){
var A3b=this.Array.Get(0).toFixed();var O;for(O=1;O<this.MH;O=O+1)A3b=(A3b+O8)+this.
Array.Get(O).toFixed();return A3b;},E3:function(aString){var HA=aString.indexOf(
String.fromCharCode(0x2C),0);var A1Z=A.jV;var O=0;while(O<10){if(aString===A.jV)
this.Array.Set(O,0);else{if(HA===-1){A1Z=aString;aString=A.jV;}else{A1Z=A.abV(aString
,HA);aString=A.ab1(aString,0,HA+1);}this.Array.Set(O,A.wz(A1Z,0,10));HA=aString.
indexOf(String.fromCharCode(0x2C),0);}O=O+1;}if(aString!==A.jV)A.ab5("%s",AZq);}
,Ci:function(){},E6:function(){var O;for(O=0;O<this.MH;O=O+1)this.Set(O,0);},Avx:
function(A7){var O=0;while(O<this.MH){if(this.Array.Get(O)===A7)return O;O=O+1;}
return-1;},H4:function(){var O=0;var max=-1;while(O<this.MH){if(this.Array.Get(O
)>max)max=this.Array.Get(O);O=O+1;}return max;},_Init:function(aArg){(this.Array=[
]).__proto__=C.Int32ArrayWrapper.Array;this.__proto__=C.Int32ArrayWrapper;A.h7++;
},_Done:function(){this.__proto__=null;A.h7--;},_ReInit:function(){},_Mark:function(
D){var B;if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:
null,_className:"Device::Int32ArrayWrapper"};C.ActionToString={BS:function(A9){var
AzK=A9;var E9=A.jV;switch(AzK){case 4:E9=A.aaR(A.acf.Alarm);break;case 256:E9=A.
aaR(A.acf.Weighing);break;case 128:E9=A.aaR(A.acf.A6A);break;case 16:E9=A.aaR(A.
acf.AMr);break;case 1:E9=A.aaR(A.acf.Temperature);break;case 32:E9=A.aaR(A.acf.AnimalLoss
);break;case 2:E9=A.aaR(A.acf.Rating);break;case 8:E9=A.aaR(A.acf.Asf);break;case
64:E9=A.aaR(A.acf.Unregister);break;case 512:E9=A.aaR(A.acf.ASf);break;case 1024:
E9=A.aaR(A.acf.LinkTransponder);break;case 262144:E9=A.aaR(A.acf.UnlinkTransponder
);break;case 2048:E9=A.aaR(A.acf.TB);break;case 4096:E9=A.aaR(A.acf.Calving);break;
case 8192:E9=A.aaR(A.acf.DryOff);break;case 16384:E9=A.aaR(A.acf.A7P);break;case
32768:E9=A.aaR(A.acf.ACg);break;case 524288:E9=A.aaR(A.acf.ACi);break;case 65536:
E9=A.aaR(A.acf.Delete);break;case 131072:E9=A.aaR(A.acf.A7Q);break;case 0:E9=A.aaR(
A.acf.A8c);break;default:throw new Error(AIC+AzK.toFixed());}return E9;},Lx:function(
A9){var AzK=A9;var E9=A.jV;switch(AzK){case 4:E9=A.aaR(A.acf.Alarm);break;case 256:
E9=A.aaR(A.acf.Weighing);break;case 128:E9=A.aaR(A.acf.A6A);break;case 16:E9=A.aaR(
A.acf.AMr);break;case 1:E9=A.aaR(A.acf.Temperature);break;case 32:E9=A.aaR(A.acf.
AnimalLoss);break;case 2:E9=A.aaR(A.acf.Rating);break;case 8:E9=A.aaR(A.acf.Asf);
break;case 64:E9=A.aaR(A.acf.Unregister);break;case 512:E9=A.aaR(A.acf.ASf);break;
case 1024:E9=A.aaR(A.acf.LinkTransponder);break;case 262144:E9=A.aaR(A.acf.UnlinkTransponder
);break;case 2048:E9=A.aaR(A.acf.TB);break;case 4096:E9=A.aaR(A.acf.Calving);break;
case 8192:E9=A.aaR(A.acf.DryOff);break;case 32768:E9=A.aaR(A.acf.ACg);break;case
524288:E9=A.aaR(A.acf.ACi);break;case 65536:E9=A.aaR(A.acf.Delete);break;case 16384:
case 131072:E9=A.aaR(A.acf.Bkn);break;case 0:E9=A.aaR(A.acf.A8c);break;default:throw new
Error(AIC+AzK.toFixed());}return E9;},_Init:function(aArg){C.EnumToString._Init.
call(this,aArg);this.__proto__=C.ActionToString;},_className:"Device::ActionToString"
};C.ACTIONS_COUNT=19;C.PopupTimeout=2000;C.ITable={Filter:null,Id:2,CF:function(
Ad,A4){return 0;},V2:function(Ad,A4){return A.jV;},Ako:function(G){A.we(this,0);
A.pe([this,this.DX],this);},H3:function(Ad,A4){return false;},Hv:function(Ad,A4){
return this.Sm(Ad,A4);},OnSetId:function(E){if(this.Id===E)return;this.Id=E;},B_:
function(){return 0;},Bk:function(E){if(this.Filter===E)return;this.Filter=E;A.abo([
this,this.Fp,this.Ft],0);},Ft:function(Aq){this.Bk(Aq);},I8:function(Ad,A4){var BBU=
this.V3(Ad,A4);return A._GetAutoObject(C.Converter).A$_(BBU);},V3:function(Ad,A4
){return 0;},Sm:function(Ad,A4){return 0;},A7a:function(Ad,A4){return this.CF(Ad
,A4);},OC:function(){var Jq=0;var BCE=this.Id;return Jq;},OE:function(AoS){var HF=
0;var BCE=this.Id;return HF===1;},YH:function(){return-1;},ZL:function(Ad,A4,C0){
return false;},Ho:function(Ad,A4,C0){return false;},ZK:function(Ad,A4,C0){return false;
},N9:function(Ad,A4,C0){return false;},ZJ:function(Ad,A4,C0){return false;},Acn:
function(Ad,A4,C0){return this.ZK(Ad,A4,C0);},AkT:function(Ad,A4,C0){var BBV=A._GetAutoObject(
C.Converter).Ad2(C0);return this.ZL(Ad,A4,BBV);},A$I:function(Ad,A4,C0){return this.
Ho(Ad,A4,C0);},AOS:function(Ad,A4){return this.CF(Ad,A4);},Bjo:function(Ad,A4){return this.
CF(Ad,A4);},Bpn:function(Ad,A4,C0){return this.Ho(Ad,A4,C0);},Bpj:function(Ad,A4
,C0){return this.Ho(Ad,A4,C0);},LV:function(aColumn,A7){return-1;},AmW:function(
Ad,A4){return this.CF(Ad,A4);},Bph:function(Ad,A4,C0){return this.Ho(Ad,A4,C0);}
,AC$:function(Ad,A4){return this.CF(Ad,A4);},AUO:function(Ad,A4,MQ){return this.
Ho(Ad,A4,MQ);},DX:function(G){this.ByV();},ByV:function(){return-1;},KR:function(
Ad,A4){return 0;},UE:function(Ad,A4,C0){return false;},AgZ:function(aColumn,A7){
return-1;},E6:function(){return false;},Bjp:function(Ad,A4){var BBW=this.CF(Ad,A4
);return A._GetAutoObject(C.Converter).BjQ(BBW);},Bju:function(Ad,A4){return this.
CF(Ad,A4);},AO0:function(Ad,A4){return this.CF(Ad,A4);},Bpl:function(Ad,A4,C0){var
BBX=A._GetAutoObject(C.Converter).A5P(C0);return this.Ho(Ad,A4,BBX);},Bpm:function(
Ad,A4,C0){return this.Ho(Ad,A4,C0);},Bpt:function(Ad,A4,C0){return this.Ho(Ad,A4
,C0);},AjL:function(aColumn,A7){return false;},Aem:function(aColumn,A7){return false;
},BjD:function(Ad,A4){return this.CF(Ad,A4);},Bpr:function(Ad,A4,C0){return this.
Ho(Ad,A4,C0);},Lj:function(){return this.QK()>=this.HK();},HK:function(){return 0;
},Abs:function(){return-1;},QK:function(){return 0;},Fp:function(){return this.Filter;
},_Init:function(aArg){this.__proto__=C.ITable;A.h7++;},_Done:function(){this.__proto__=
null;A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((B=this.Filter)&&(
B._cycle!=D))B._Mark(B._cycle=D);if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D
);},I:null,_cycle:0,_observers:null,_className:"Device::ITable"};C.MaxAutoActionsCount=
4;C.WeightRecordingMode={Automatic:0,Manual:1,LAST:2};C.WeightRecordingModeToString={
BS:function(A9){var Vh=A9;var Nz=A.jV;switch(Vh){case 0:Nz=A.aaR(A.acf.Automatic
);break;case 1:Nz=A.aaR(A.acf.Manual);break;default:throw new Error(AZr+Vh.toFixed(
));}return Nz;},_Init:function(aArg){C.EnumToString._Init.call(this,aArg);this.__proto__=
C.WeightRecordingModeToString;},_className:"Device::WeightRecordingModeToString"
};C.BooleanToAutoOnOff={BS:function(A9){switch(A9){case 0:return A.aaR(A.acf.Off
);case 1:return A.aaR(A.acf.Aa4);default:return Aor+A9.toFixed();}},_Init:function(
aArg){C.EnumToString._Init.call(this,aArg);this.__proto__=C.BooleanToAutoOnOff;}
,_className:"Device::BooleanToAutoOnOff"};C.WeightStep=100;C.WeightRecordingScope={
CurrentWeightOnly:0,BirthWeightOnly:1,BirthAndCurrentWeight:2,NoWeightRecording:
3,LAST:4};C.WeightRecordingScopeToString={BS:function(A9){var Bgt=A9;var ABd=A.jV;
switch(Bgt){case 0:ABd=A.aaR(A.acf.Big);break;case 1:ABd=A.aaR(A.acf.BhU);break;
case 2:ABd=A.aaR(A.acf.BhQ);break;case 3:ABd=A.aaR(A.acf.BkP);break;default:throw new
Error(AZs+Bgt.toFixed());}return ABd;},_Init:function(aArg){C.EnumToString._Init.
call(this,aArg);this.__proto__=C.WeightRecordingScopeToString;},_className:"Device::WeightRecordingScopeToString"
};C.BodyTemperature={Undertemperature:0,Normal:1,Elevated:2,Fever:3,LAST:4};C.Km={
A5m:0,Temperature:1,Rating:2,Afv:3,BDh:4,BDY:5,BGJ:6,BEC:7,BFm:8,BEa:9,BFk:10,BFN:
11,BFO:12,BGO:13,BDs:14,LAST:15};C.AnimalListContentToString={BS:function(A9){var
BcT=A9;var Rx=A.jV;switch(BcT){case 0:Rx=AZt;break;case 14:Rx=AID;break;case 2:Rx=
Aai;break;case 1:Rx=AZu;break;case 3:Rx=AyA;break;case 4:Rx=AZv;break;case 5:Rx=
AZw;break;case 6:Rx=AZx;break;case 7:Rx=AZy;break;case 8:Rx=AZz;break;case 9:Rx=
AZA;break;case 10:Rx=Ath;break;case 11:Rx=Ati;break;case 12:Rx=Atj;break;case 13:
Rx=Atk;break;default:throw new Error(AyB+BcT.toFixed());}return Rx;},_Init:function(
aArg){C.EnumToString._Init.call(this,aArg);this.__proto__=C.AnimalListContentToString;
},_className:"Device::AnimalListContentToString"};C.GenderFilterCriterion={A5:0,
Abk:function(){var Aw=A._NewObject(C.GenderFilterCriterion,0);Aw.E$(this);return Aw;
},E$:function(AI){C.FilterCriterion.E$.call(this,AI);var Aw=(C.GenderFilterCriterion.
isPrototypeOf(AI)?AI:null);if(!!Aw)this.A5=Aw.A5;},_Init:function(aArg){C.FilterCriterion.
_Init.call(this,aArg);this.__proto__=C.GenderFilterCriterion;},_className:"Device::GenderFilterCriterion"
};C.AnimalTypeFilterCriterion={A5:0,Abk:function(){var Aw=A._NewObject(C.AnimalTypeFilterCriterion
,0);Aw.E$(this);return Aw;},E$:function(AI){C.FilterCriterion.E$.call(this,AI);var
Aw=(C.AnimalTypeFilterCriterion.isPrototypeOf(AI)?AI:null);if(!!Aw)this.A5=Aw.A5;
},Initialize:function(A4,Eb,A7,Qg){this.EJ=A4;this.Operator=Eb;this.A5=A7;this.YK=
Qg;return this;},_Init:function(aArg){C.FilterCriterion._Init.call(this,aArg);this.
__proto__=C.AnimalTypeFilterCriterion;},_className:"Device::AnimalTypeFilterCriterion"
};C.BDu={AuI:0,BDt:1,BE8:2,A$p:3,A5X:4,BGo:5,BDX:6,BGn:7,LinkTransponder:8,TB:9,
Weighing:10,Calving:11,LinkNaisId:12,BFM:13,ClearBirthNoticePending:14,DeleteAnimal:
15,ScanNaisId:16,Edit:17,ClearPurchaseNoticePending:18,UNDEFINED:19};C.AutoRegistrationModeToString={
BS:function(A9){var Vh=A9;var Nz=A.jV;switch(Vh){case 0:Nz=A.aaR(A.acf.Bh_);break;
case 1:Nz=A.aaR(A.acf.BjU);break;case 2:Nz=A.aaR(A.acf.Off);break;default:throw new
Error(Aox+Vh.toFixed());}return Nz;},_Init:function(aArg){C.EnumToString._Init.call(
this,aArg);this.__proto__=C.AutoRegistrationModeToString;},_className:"Device::AutoRegistrationModeToString"
};C.AutoRegistrationMode={UserConfirmed:0,Background:1,Off:2,LAST:3};C.AssessmentFilterCriterion={
A5:0,Abk:function(){var Aw=A._NewObject(C.AssessmentFilterCriterion,0);Aw.E$(this
);return Aw;},E$:function(AI){C.FilterCriterion.E$.call(this,AI);var Aw=(C.AssessmentFilterCriterion.
isPrototypeOf(AI)?AI:null);if(!!Aw)this.A5=Aw.A5;},Initialize:function(A4,Eb,A7,
Qg){this.EJ=A4;this.Operator=Eb;this.A5=A7;this.YK=Qg;return this;},_Init:function(
aArg){C.FilterCriterion._Init.call(this,aArg);this.__proto__=C.AssessmentFilterCriterion;
},_className:"Device::AssessmentFilterCriterion"};C.D9={AdV:0,Temperature:1,Afv:
2,Rating:3,LAST:4};C.FactoryResetScope={DeviceAndAnimalData:0,AnimalDataOnly:1,DeviceDataOnly:
2,LAST:3};C.FactoryResetScopeToString={BS:function(A9){switch(A9){case 0:return A.
aaR(A.acf.DeviceAndAnimalData);case 1:return A.aaR(A.acf.AnimalDataOnly);case 2:
return A.aaR(A.acf.DeviceDataOnly);default:return AZB+A9.toFixed();}},_Init:function(
aArg){C.EnumToString._Init.call(this,aArg);this.__proto__=C.FactoryResetScopeToString;
},_className:"Device::FactoryResetScopeToString"};C.AVo={Ci:function(){A._GetAutoObject(
C.Device).Ar_(this.toString());},Init:function(aArg){var B;A.zX([this,this.BfB],[
B=A._GetAutoObject(C.Device),B.A9v,B.BbL],0);this.BfB(this);},BfB:function(G){this.
E3(A._GetAutoObject(C.Device).AG6);A.we(this,0);},_Init:function(aArg){C.Int32ArrayWrapper.
_Init.call(this,aArg);this.__proto__=C.AVo;this.ZA(3);this.Init(aArg);},_className:
"Device::TemperaturesLowClass"};C.AVn={Init:function(aArg){var B;A.zX([this,this.
Bfz],[B=A._GetAutoObject(C.Device),B.A9u,B.BbK],0);this.Bfz(this);},Ci:function(
){A._GetAutoObject(C.Device).Ar9(this.toString());},Bfz:function(G){this.E3(A._GetAutoObject(
C.Device).AG5);A.we(this,0);},_Init:function(aArg){C.Int32ArrayWrapper._Init.call(
this,aArg);this.__proto__=C.AVn;this.ZA(3);this.Init(aArg);},_className:"Device::TemperaturesHighClass"
};C.AMK={Init:function(aArg){var B;A.zX([this,this.Be4],[B=A._GetAutoObject(C.Device
),B.A8K,B.Bbo],0);this.Be4(this);},Be4:function(G){this.E3(A._GetAutoObject(C.Device
).ABS);A.we(this,0);},_Init:function(aArg){C.Int32ArrayWrapper._Init.call(this,aArg
);this.__proto__=C.AMK;this.ZA(3);this.Init(aArg);},_className:"Device::AnimalTypesClass"
};C.UInt64FilterCriterion={A5:0,Abk:function(){var Aw=A._NewObject(C.UInt64FilterCriterion
,0);Aw.E$(this);return Aw;},E$:function(AI){C.FilterCriterion.E$.call(this,AI);var
Aw=(C.UInt64FilterCriterion.isPrototypeOf(AI)?AI:null);if(!!Aw)this.A5=Aw.A5;},Initialize:
function(A4,Eb,A7,Qg){this.EJ=A4;this.Operator=Eb;this.A5=A7;this.YK=Qg;return this;
},_Init:function(aArg){C.FilterCriterion._Init.call(this,aArg);this.__proto__=C.
UInt64FilterCriterion;},_className:"Device::UInt64FilterCriterion"};C.BooleanToAssignedUnassignedString={
BS:function(A9){switch(A9){case 0:return A.aaR(A.acf.Akn);case 1:return A.aaR(A.
acf.Bhx);default:return Aor+A9.toFixed();}},_Init:function(aArg){C.EnumToString.
_Init.call(this,aArg);this.__proto__=C.BooleanToAssignedUnassignedString;},_className:
"Device::BooleanToAssignedUnassignedString"};C.C9={UNDEFINED:0,AT:1,BA:2,BE:3,BDz:
4,BDO:5,BDP:6,BDQ:7,BDR:8,BDS:9,BD2:10,BD3:11,BEb:12,BEc:13,BEr:14,FR:15,GR:16,BED:
17,BEE:18,BEL:19,BEM:20,BER:21,BES:22,BET:23,BEU:24,BE0:25,BFc:26,BFd:27,BFs:28,
BFt:29,BFK:30,BFL:31,BF3:32,BF4:33,BF5:34,BGh:35,BGi:36,BGC:37,A$$:38,BGD:39,LAST:
40};C.CountryToString={BS:function(A9){var J$=A9;var FH=A.jV;switch(J$){case 1:FH=
A.aaR(A.acm.BhI);break;case 2:FH=A.aaR(A.acm.BhV);break;case 3:FH=A.aaR(A.acm.BhP
);break;case 4:FH=A.aaR(A.acm.BhX);break;case 5:FH=A.aaR(A.acm.Bh0);break;case 6:
FH=A.aaR(A.acm.Bqa);break;case 7:FH=A.aaR(A.acm.Bh3);break;case 8:FH=A.aaR(A.acm.
Bih);break;case 9:FH=A.aaR(A.acm.Bii);break;case 10:FH=A.aaR(A.acm.Bjj);break;case
11:FH=A.aaR(A.acm.Bip);break;case 12:FH=A.aaR(A.acm.Bi0);break;case 13:FH=A.aaR(
A.acm.BpF);break;case 14:FH=A.aaR(A.acm.Bi9);break;case 15:FH=A.aaR(A.acm.Bjf);break;
case 16:FH=A.aaR(A.acm.BjL);break;case 17:FH=A.aaR(A.acm.Bif);break;case 18:FH=A.
aaR(A.acm.BjR);break;case 19:FH=A.aaR(A.acm.Bj0);break;case 20:FH=A.aaR(A.acm.Bkb
);break;case 21:FH=A.aaR(A.acm.Bkd);break;case 22:FH=A.aaR(A.acm.Bko);break;case
23:FH=A.aaR(A.acm.Bkr);break;case 24:FH=A.aaR(A.acm.Bkl);break;case 25:FH=A.aaR(
A.acm.Bkt);break;case 26:FH=A.aaR(A.acm.BkJ);break;case 27:FH=A.aaR(A.acm.BkQ);break;
case 28:FH=A.aaR(A.acm.Boz);break;case 29:FH=A.aaR(A.acm.BoA);break;case 30:FH=A.
aaR(A.acm.Bo4);break;case 31:FH=A.aaR(A.acm.Bo6);break;case 32:FH=A.aaR(A.acm.Bp$
);break;case 33:FH=A.aaR(A.acm.BpE);break;case 34:FH=A.aaR(A.acm.BpD);break;case
35:FH=A.aaR(A.acm.Bqz);break;case 36:FH=A.aaR(A.acm.Bqj);break;case 37:FH=A.aaR(
A.acm.BqD);break;case 38:FH=A.aaR(A.acm.A$$);break;case 39:FH=A.aaR(A.acm.BqC);break;
case 0:FH=Aoy;break;default:throw new Error(Aol+J$.toFixed());}return FH;},Lx:function(
A9){var J$=A9;var BM=A.jV;switch(J$){case 1:BM=S$;break;case 2:BM=Z5;break;case 3:
BM=UW;break;case 4:BM=W8;break;case 5:BM=It;break;case 6:BM=Aae;break;case 7:BM=
UX;break;case 8:BM=Z7;break;case 9:BM=W_;break;case 10:BM=O7;break;case 11:BM=Z8;
break;case 12:BM=Z9;break;case 13:BM=Aad;break;case 14:BM=UY;break;case 15:BM=W$;
break;case 16:BM=Z_;break;case 17:BM=W9;break;case 18:BM=Oe;break;case 19:BM=Rn;
break;case 20:BM=Xa;break;case 21:BM=Xb;break;case 22:BM=Z$;break;case 23:BM=Aaa;
break;case 24:BM=Ta;break;case 25:BM=Xc;break;case 26:BM=Xd;break;case 27:BM=Tb;
break;case 28:BM=Tc;break;case 29:BM=Td;break;case 30:BM=Aab;break;case 31:BM=Te;
break;case 32:BM=Xe;break;case 33:BM=AfB;break;case 34:BM=Aac;break;case 35:BM=Xf;
break;case 36:BM=Z6;break;case 37:BM=AhX;break;case 38:BM=K1;break;case 39:BM=AcN;
break;case 0:BM=Aoy;break;default:throw new Error(Aol+J$.toFixed());}return BM;}
,_Init:function(aArg){C.EnumToString._Init.call(this,aArg);this.__proto__=C.CountryToString;
},_className:"Device::CountryToString"};C.EaseOfDelivery={Unspecified:0,Easy:1,Moderate:
2,Difficult:3,Surgery:4,LAST:5};C.EaseOfDeliveryToString={BS:function(A9){var Bdr=
A9;var AtS=A.jV;switch(Bdr){case 0:AtS=A.aaR(A.acf.Unspecified);break;case 1:AtS=
A.aaR(A.acf.Easy);break;case 2:AtS=A.aaR(A.acf.Moderate);break;case 3:AtS=A.aaR(
A.acf.Difficult);break;case 4:AtS=A.aaR(A.acf.Surgery);break;default:throw new Error(
AZC+Bdr.toFixed());}return AtS;},_Init:function(aArg){C.EnumToString._Init.call(
this,aArg);this.__proto__=C.EaseOfDeliveryToString;},_className:"Device::EaseOfDeliveryToString"
};C.WhereAbouts={UNB:0,EZU:1,EMA:2,VZU:3,VMA:4,VIV:5,TOT:6,V48:7,V3T:8,MGE:9,VKB:
10,LAST:11};C.WhereAboutsToString={BS:function(A9){var Bhl=A9;var AaS=A.jV;switch(
Bhl){case 0:AaS=A.aaR(A.acf.Unknown);break;case 1:AaS=A.aaR(A.acf.BqM);break;case
2:AaS=A.aaR(A.acf.BqL);break;case 3:AaS=A.aaR(A.acf.BqU);break;case 4:AaS=A.aaR(
A.acf.BqT);break;case 5:AaS=A.aaR(A.acf.BqR);break;case 6:AaS=A.aaR(A.acf.BqO);break;
case 7:AaS=A.aaR(A.acf.BqQ);break;case 8:AaS=A.aaR(A.acf.BqP);break;case 9:AaS=A.
aaR(A.acf.BqN);break;case 10:AaS=A.aaR(A.acf.BqS);break;default:throw new Error(
AZD+Bhl.toFixed());}return AaS;},_Init:function(aArg){C.EnumToString._Init.call(
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
A.ack.XMM);break;case 87:BH=A.aaR(A.ack.EVO);break;case 88:BH=A.aaR(A.ack.BLH);break;
case 89:BH=A.aaR(A.ack.TLH);break;case 90:BH=A.aaR(A.ack.MGR);break;case 91:BH=A.
aaR(A.ack.WSH);break;case 92:BH=A.aaR(A.ack.MUR);break;case 93:BH=A.aaR(A.ack.EBS
);break;case 94:BH=A.aaR(A.ack.ERI);break;case 95:BH=A.aaR(A.ack.PAR);break;case
96:BH=A.aaR(A.ack.XZF);break;case 97:BH=A.aaR(A.ack.XZM);break;case 98:BH=A.aaR(
A.ack.XZZ);break;default:throw new Error(AZE+Bv.toFixed());}return BH;},_Init:function(
aArg){C.EnumToString._Init.call(this,aArg);this.__proto__=C.BreedToString;},_className:
"Device::BreedToString"};C.TM={timer:null,Q:null,Ec:0,Dx:0,JU:0,Pu:1000,PD:1000,
Bw:false,Cx:false,B2:true,Mi:function(G){var F;if(!this.timer)return;if(this.Ec<
0){this.Dx=this.timer.Bs;this.Ec=0;}var Av=(this.timer.Bs-this.Dx)|0;var Ot=this.
Pu;var Hg=this.PD+this.Pu;var LI=0;var Jm=this.Ec;if(!Jm&&(Av>=Ot)){Jm=1;Av=Av-Ot;
}if((Jm>0)&&(Av>=Hg)){var If=(Av/Hg)|0;Av=Av-(If*Hg);Jm=Jm+If;}if((Jm>2)&&!this.
JU)Jm=1;if(Jm!==this.Ec){this.Dx=this.timer.Bs-(((B=Av)<0)?B+0x100000000:B);this.
Ec=Jm;}if(Jm>0)LI=this.PD;var KH=(Jm>=this.JU)&&(this.JU>0);if(!!this.Q){if((!KH&&(
Av>=LI))&&((F=this.Q,F[1].call(F[0]))!==this.Cx))(F=this.Q,F[2].call(F[0],this.Cx
));if((KH||((Av<LI)&&(Jm>0)))&&((F=this.Q,F[1].call(F[0]))!==this.B2))(F=this.Q,
F[2].call(F[0],this.B2));}if(KH)this.Ar(false);},HO:function(E){if(E<0)E=0;this.
JU=E;},Fr:function(E){if(E<100)E=100;this.Pu=E;},Ut:function(E){if(E<0)E=0;this.
PD=E;},Ar:function(E){if(this.Bw===E)return;this.Bw=E;if(!E&&!!this.timer){A.z9([
this,this.Mi],this.timer,0);this.timer=null;}if(E){this.timer=A._GetAutoObject(A.
acl.Aej);A.zV([this,this.Mi],this.timer,0);this.Ec=-1;}},_Init:function(aArg){this.
__proto__=C.TM;A.h7++;},_Done:function(){this.__proto__=null;A.h7--;},_ReInit:function(
){},_Mark:function(D){var B;if((B=this.timer)&&(B._cycle!=D))B._Mark(B._cycle=D);
if((B=this.Q)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.I)&&(B._cycle
!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:"Device::BoolEffect"
};C.Ik={AnimalId:0,TransponderId:1,BE3:2,BE2:3,BE6:4,BE5:5};C.Au9={BDx:0,BD6:1};
C.AnimalIdGenerationMethodToString={BS:function(A9){var Alu=A9;var Ao1=A.jV;switch(
Alu){case 0:Ao1=A.aaR(A.acf.Ul);break;case 1:Ao1=A.aaR(A.acf.Transponder);break;
case 3:Ao1=(A.aaR(A.acf.Manual)+Of)+A.aaR(A.acf.Male);break;case 2:Ao1=(A.aaR(A.
acf.Manual)+Of)+A.aaR(A.acf.Female);break;case 4:Ao1=(A.aaR(A.acf.Manual)+Of)+A.
aaR(A.acf.Unknown);break;case 5:Ao1=(A.aaR(A.acf.Manual)+Of)+AZF;break;default:throw new
Error(AZG+Alu.toFixed());}return Ao1;},_Init:function(aArg){C.EnumToString._Init.
call(this,aArg);this.__proto__=C.AnimalIdGenerationMethodToString;},_className:"Device::AnimalIdGenerationMethodToString"
};C.DirectionOfCountingToString={BS:function(A9){var AzJ=A9;var A16=A.jV;switch(
AzJ){case 0:A16=AZH;break;case 1:A16=AZI;break;default:throw new Error(AZJ+AzJ.toFixed(
));}return A16;},_Init:function(aArg){C.EnumToString._Init.call(this,aArg);this.
__proto__=C.DirectionOfCountingToString;},_className:"Device::DirectionOfCountingToString"
};C.EnumToIcon={AsM:function(A9){throw new Error(As8+A9.toFixed());},AsN:function(
A9){throw new Error(As8+A9.toFixed());},_Init:function(aArg){this.__proto__=C.EnumToIcon;
A.h7++;},_Done:function(){this.__proto__=null;A.h7--;},_ReInit:function(){},_Mark:
function(D){var B;if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:
0,_observers:null,_className:"Device::EnumToIcon"};C.Aei={AsM:function(A9){return A.
aaL(A.ach.AVb);},AsN:function(A9){var AzJ=A9;var RH=-1;switch(AzJ){case 0:RH=3;break;
case 1:RH=2;break;default:throw new Error(AIE+AzJ.toFixed());}return RH;},_Init:
function(aArg){C.EnumToIcon._Init.call(this,aArg);this.__proto__=C.Aei;},_className:
"Device::DirectionOfCountingToIcon"};C.AdZ={AsM:function(A9){return A.aaL(A.ach.
AU$);},AsN:function(A9){var Alu=A9;var RH=-1;switch(Alu){case 0:RH=0;break;case 1:
RH=6;break;case 3:RH=4;break;case 2:RH=5;break;case 4:RH=2;break;case 5:RH=3;break;
default:throw new Error(AIE+Alu.toFixed());}return RH;},_Init:function(aArg){C.EnumToIcon.
_Init.call(this,aArg);this.__proto__=C.AdZ;},_className:"Device::AnimalIdGenerationMethodToIcon"
};C.Pz={UNDEFINED:0,SH:1,AO3:2,AR1:3,AO2:4,A79:5,HE:6,A$n:7,A5D:8,AMV:9,AUE:10,BE:
11,BB:12,A7V:13,AUF:14,AUG:15,AVg:16};C.GermanStateToString={BS:function(A9){var
Bp=A9;var GF=A.jV;switch(Bp){case 1:GF=A.aaR(A.acp.SH);break;case 2:GF=A.aaR(A.acp.
AO3);break;case 3:GF=A.aaR(A.acp.AR1);break;case 4:GF=A.aaR(A.acp.AO2);break;case
5:GF=A.aaR(A.acp.A79);break;case 6:GF=A.aaR(A.acp.HE);break;case 7:GF=A.aaR(A.acp.
A$n);break;case 8:GF=A.aaR(A.acp.A5D);break;case 9:GF=A.aaR(A.acp.AMV);break;case
10:GF=A.aaR(A.acp.AUE);break;case 11:GF=A.aaR(A.acp.BE);break;case 12:GF=A.aaR(A.
acp.BB);break;case 13:GF=A.aaR(A.acp.A7V);break;case 14:GF=A.aaR(A.acp.AUF);break;
case 15:GF=A.aaR(A.acp.AUG);break;case 16:GF=A.aaR(A.acp.AVg);break;case 0:GF=Aoy;
break;default:throw new Error(Atl+Bp.toFixed());}return GF;},Lx:function(A9){var
Bp=A9;var GF=A.jV;switch(Bp){case 1:GF=A.aaR(A.acp.Bo7);break;case 2:GF=A.aaR(A.
acp.AO3);break;case 3:GF=A.aaR(A.acp.AR1);break;case 4:GF=A.aaR(A.acp.AO2);break;
case 5:GF=A.aaR(A.acp.BkG);break;case 6:GF=A.aaR(A.acp.HE);break;case 7:GF=A.aaR(
A.acp.BoJ);break;case 8:GF=A.aaR(A.acp.BhL);break;case 9:GF=A.aaR(A.acp.AMV);break;
case 10:GF=A.aaR(A.acp.AUE);break;case 11:GF=A.aaR(A.acp.BE);break;case 12:GF=A.
aaR(A.acp.BB);break;case 13:GF=A.aaR(A.acp.Bks);break;case 14:GF=A.aaR(A.acp.AUF
);break;case 15:GF=A.aaR(A.acp.AUG);break;case 16:GF=A.aaR(A.acp.AVg);break;case
0:GF=Aoy;break;default:throw new Error(Atl+Bp.toFixed());}return GF;},Bqo:function(
A9){var Bp=A9;var Gi=-1;switch(Bp){case 0:Gi=0;break;case 1:Gi=1;break;case 2:Gi=
2;break;case 3:Gi=3;break;case 4:Gi=4;break;case 5:Gi=5;break;case 6:Gi=6;break;
case 7:Gi=7;break;case 8:Gi=8;break;case 9:Gi=9;break;case 10:Gi=10;break;case 11:
Gi=11;break;case 12:Gi=12;break;case 13:Gi=13;break;case 14:Gi=14;break;case 15:
Gi=15;break;case 16:Gi=16;break;default:throw new Error(Atl+Bp.toFixed());}return Gi;
},Bqp:function(A9){var Bp=A9;var Gi=A.jV;switch(Bp){case 1:Gi=AZK;break;case 2:Gi=
AZL;break;case 3:Gi=AZM;break;case 4:Gi=AyC;break;case 5:Gi=AZN;break;case 6:Gi=
AyD;break;case 7:Gi=AyE;break;case 8:Gi=AZO;break;case 9:Gi=AZP;break;case 10:Gi=
AZQ;break;case 11:Gi=UW;break;case 12:Gi=AIF;break;case 13:Gi=AZR;break;case 14:
Gi=AZS;break;case 15:Gi=AZT;break;case 16:Gi=AZU;break;case 0:Gi=Aoy;break;default:
throw new Error(Atl+Bp.toFixed());}return Gi;},_Init:function(aArg){C.EnumToString.
_Init.call(this,aArg);this.__proto__=C.GermanStateToString;},_className:"Device::GermanStateToString"
};C.EartagNrAssignmentMode={OneSingleRange:0,TwoNumberRanges:1,LAST:2};C.EartagNrAssignmentModeToString={
Lx:function(A9){var Vh=A9;var Nz=A.jV;switch(Vh){case 0:Nz=AZV;break;case 1:Nz=AZW;
break;default:throw new Error(AIG+Vh.toFixed());}return Nz;},BS:function(A9){var
Vh=A9;var Nz=A.jV;switch(Vh){case 0:Nz=A.aaR(A.acf.Bos);break;case 1:Nz=A.aaR(A.
acf.BqB);break;default:throw new Error(AIG+Vh.toFixed());}return Nz;},_Init:function(
aArg){C.EnumToString._Init.call(this,aArg);this.__proto__=C.EartagNrAssignmentModeToString;
},_className:"Device::EartagNrAssignmentModeToString"};C.BDq={BFi:0,BE_:1,BEl:2,
BEm:3,BEn:4,BGj:5};C.EnumToCodeset={AmG:function(Ah6){throw new Error(AZX+Ah6.toFixed(
));},Ael:function(A9){throw new Error(As8+A9.toFixed());},AqW:function(){A.ab5("%s"
,AyF);return 0;},H4:function(){A.ab5("%s",AyF);return 0;},_Init:function(aArg){this.
__proto__=C.EnumToCodeset;A.h7++;},_Done:function(){this.__proto__=null;A.h7--;}
,_ReInit:function(){},_Mark:function(D){var B;if((B=this.I)&&(B._cycle!=D))B._Mark(
B._cycle=D);},I:null,_cycle:0,_observers:null,_className:"Device::EnumToCodeset"
};C.M6={AmG:function(Ah6){var Bv;switch(Ah6){case 1:Bv=1;break;case 2:Bv=2;break;
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
case 98:BJ=111;break;default:throw new Error(AZY+Bv.toFixed());}return BJ;},AqW:
function(){return 0;},H4:function(){return 111;},_Init:function(aArg){C.EnumToCodeset.
_Init.call(this,aArg);this.__proto__=C.M6;},_className:"Device::BreedToHitCodeset"
};C.ReasonOfLeaving={Unknown:0,A$T:1,RQ:2,A$g:3,A7x:4,BFr:5,Baa:6,A75:7,A5W:8,A$c:
9,A73:10,A50:11,BFH:12,BFI:13,LAST:14};C.ReasonOfLeavingToString={BS:function(A9
){var AdF=A9;var Tv=A.jV;switch(AdF){case 0:Tv=A.aaR(A.acf.Unknown);break;case 1:
Tv=A.aaR(A.acf.A$T);break;case 2:Tv=A.aaR(A.acf.RQ);break;case 3:Tv=A.aaR(A.acf.
A$g);break;case 4:Tv=A.aaR(A.acf.A7x);break;case 5:Tv=A.aaR(A.acf.Bot);break;case
6:Tv=A.aaR(A.acf.Baa);break;case 7:Tv=A.aaR(A.acf.A75);break;case 8:Tv=A.aaR(A.acf.
A5W);break;case 9:Tv=A.aaR(A.acf.A$c);break;case 10:Tv=A.aaR(A.acf.A73);break;case
11:Tv=A.aaR(A.acf.A50);break;case 12:Tv=A.aaR(A.acf.BoE);break;case 13:Tv=A.aaR(
A.acf.BoD);break;default:throw new Error(AZZ+AdF.toFixed());}return Tv;},_Init:function(
aArg){C.EnumToString._Init.call(this,aArg);this.__proto__=C.ReasonOfLeavingToString;
},_className:"Device::ReasonOfLeavingToString"};C.AhC={AmG:function(Ah6){var Pi;
switch(Ah6){case 1:Pi=1;break;case 2:Pi=2;break;case 3:Pi=3;break;case 4:Pi=4;break;
case 5:Pi=5;break;case 6:Pi=6;break;case 7:Pi=7;break;case 8:Pi=8;break;case 9:Pi=
9;break;case 10:Pi=10;break;case 11:Pi=11;break;case 12:Pi=12;break;case 13:Pi=13;
break;default:Pi=0;}return Pi;},Ael:function(A9){var Pi=A9;var Jl=0;switch(Pi){case
0:Jl=0;break;case 2:Jl=2;break;case 8:Jl=8;break;case 11:Jl=11;break;case 4:Jl=4;
break;case 10:Jl=10;break;case 7:Jl=7;break;case 5:Jl=5;break;case 9:Jl=9;break;
case 3:Jl=3;break;case 12:Jl=12;break;case 13:Jl=13;break;case 1:Jl=1;break;case
6:Jl=6;break;default:throw new Error(AIH+Pi.toFixed());}return Jl;},AqW:function(
){return 0;},H4:function(){return 13;},_Init:function(aArg){C.EnumToCodeset._Init.
call(this,aArg);this.__proto__=C.AhC;},_className:"Device::ReasonOfLeavingToCodeset"
};C.K0={AmG:function(Ah6){var La;switch(Ah6){case 1:La=1;break;case 2:La=2;break;
case 3:La=3;break;case 4:La=4;break;case 5:La=5;break;case 6:La=6;break;case 7:La=
7;break;case 8:La=8;break;case 9:La=9;break;case 10:La=10;break;default:La=0;}return La;
},Ael:function(A9){var La=A9;var Jl=0;switch(La){case 0:Jl=0;break;case 2:Jl=2;break;
case 1:Jl=1;break;case 9:Jl=9;break;case 6:Jl=6;break;case 8:Jl=8;break;case 7:Jl=
7;break;case 5:Jl=5;break;case 10:Jl=10;break;case 4:Jl=4;break;case 3:Jl=3;break;
default:throw new Error(AIH+La.toFixed());}return Jl;},AqW:function(){return 0;}
,H4:function(){return 10;},_Init:function(aArg){C.EnumToCodeset._Init.call(this,
aArg);this.__proto__=C.K0;},_className:"Device::WhereAboutsToCodeset"};C.AmO={_Init:
function(aArg){this.__proto__=C.AmO;A.h7++;},_Done:function(){this.__proto__=null;
A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((B=this.I)&&(B._cycle!=
D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:"Device::EmptyClass"
};C.CalfDeregistrationsTableFields={Year:0,Deregistrations:1,Deaths:2};C.CalfDeregistrations={
Deregistrations:0,Deaths:0,Year:0,E3:function(Ad,AH){var HF=C.Row.E3.call(this,Ad
,AH);if(HF&&!!AH){this.AkH(AH.CF(Ad,0));this.AwG(AH.CF(Ad,1));this.AwF(AH.CF(Ad,
2));}return HF;},Ci:function(AH){var HF=C.Row.Ci.call(this,AH);if(HF&&!!AH){var Jq=
AH.OC();if(Jq<=0)A.ab5("%s",Xh);else{if(this.Am7())this.CL=AH.YH();AH.Ho(this.CL
,0,this.Year);AH.Ho(this.CL,1,this.Deregistrations);AH.Ho(this.CL,2,this.Deaths);
AH.OE(Jq);}}return HF;},Gr:function(){C.Row.Gr.call(this);this.AkH(-1);},E6:function(
){C.Row.E6.call(this);this.AkH(0);this.AwG(0);this.AwF(0);},AwG:function(E){if(this.
Deregistrations===E)return;this.Deregistrations=E;A.abo([this,this.Blh,this.AwG]
,0);},AwF:function(E){if(this.Deaths===E)return;this.Deaths=E;A.abo([this,this.Blf
,this.AwF],0);},AkH:function(E){if(this.Year===E)return;this.Year=E;A.abo([this,
this.ArE,this.AkH],0);},Blh:function(){return this.Deregistrations;},Blf:function(
){return this.Deaths;},ArE:function(){return this.Year;},_Init:function(aArg){C.
Row._Init.call(this,aArg);this.__proto__=C.CalfDeregistrations;this.TableId=4;},
_className:"Device::CalfDeregistrations"};C.Au7={Undefined:0,Display:1,A$m:2,A$z:
3,Bau:4,BEF:5,BFU:6,BGu:7,BE1:8,BDT:9,BDf:10,A6U:11,A$o:12,BGF:13,A78:14,BGI:15};
C.DeviceComponentToString={BS:function(A9){var Bdk=A9;var Qn=A.jV;switch(Bdk){case
0:Qn=AZ0;break;case 10:Qn=A.aaR(A.acf.Bhm);break;case 9:Qn=A.aaR(A.acf.Bh2);break;
case 1:Qn=A.aaR(A.acf.BiQ);break;case 11:Qn=A.aaR(A.acf.A6U);break;case 5:Qn=A.aaR(
A.acf.BqV);break;case 8:Qn=A.aaR(A.acf.BiS);break;case 14:Qn=A.aaR(A.acf.A78);break;
case 2:Qn=A.aaR(A.acf.A$m);break;case 12:Qn=A.aaR(A.acf.A$o);break;case 6:Qn=A.aaR(
A.acf.BoI);break;case 3:Qn=A.aaR(A.acf.A$z);break;case 7:Qn=A.aaR(A.acf.BiT);break;
case 13:Qn=A.aaR(A.acf.Bis);break;case 15:Qn=A.aaR(A.acf.BqZ);break;case 4:Qn=A.
aaR(A.acf.Bau);break;default:throw new Error(AZ1+Bdk.toFixed());}return Qn;},_Init:
function(aArg){C.EnumToString._Init.call(this,aArg);this.__proto__=C.DeviceComponentToString;
},_className:"Device::DeviceComponentToString"};C.AgT={AmG:function(Ah6){return Ah6;
},Ael:function(A9){return A9;},AqW:function(){return 0;},H4:function(){return 4;
},_Init:function(aArg){C.EnumToCodeset._Init.call(this,aArg);this.__proto__=C.AgT;
},_className:"Device::EaseOfDeliveryToCodeset"};C.AeU={AsM:function(A9){return A.
aaL(A.ach.AQd);},AsN:function(A9){var Bdw=A9;var RH=-1;switch(Bdw){case 0:RH=0;break;
case 1:RH=1;break;case 2:RH=2;break;default:throw new Error(AZ2+Bdw.toFixed());}
return RH;},_Init:function(aArg){C.EnumToIcon._Init.call(this,aArg);this.__proto__=
C.AeU;},_className:"Device::MotherSelectionFilterModeToIcon"};C.WhereAboutsFilterCriterion={
A5:0,Abk:function(){var Aw=A._NewObject(C.WhereAboutsFilterCriterion,0);Aw.E$(this
);return Aw;},E$:function(AI){C.FilterCriterion.E$.call(this,AI);var Aw=(C.WhereAboutsFilterCriterion.
isPrototypeOf(AI)?AI:null);if(!!Aw)this.A5=Aw.A5;},Initialize:function(A4,Eb,A7,
Qg){this.EJ=A4;this.Operator=Eb;this.A5=A7;this.YK=Qg;return this;},_Init:function(
aArg){C.FilterCriterion._Init.call(this,aArg);this.__proto__=C.WhereAboutsFilterCriterion;
},_className:"Device::WhereAboutsFilterCriterion"};C.BFb={AN5:0,BD0:1,APO:2,LAST:
3};C.BGl={GL:0,AVX:1,Hk:2,Year:3,LAST:4};C.TimespanDaysToString={BS:function(A9){
var BgV=A9;var ABq=A.jV;switch(BgV){case 0:ABq=A.aaR(A.acf.A6b);break;case 1:ABq=
A.aaR(A.acf.AVX);break;case 2:ABq=A.aaR(A.acf.Hk);break;case 3:ABq=A.aaR(A.acf.Year
);break;default:throw new Error(AZ3+BgV.toFixed());}return ABq;},_Init:function(
aArg){C.EnumToString._Init.call(this,aArg);this.__proto__=C.TimespanDaysToString;
},_className:"Device::TimespanDaysToString"};C.Z1={BFo:0,BD7:1,BEH:2,BEK:3,BEJ:4
,BD8:5,BEI:6,LAST:7};C.USBStateToString={BS:function(A9){var Bhg=A9;var Bp=A.jV;
switch(Bhg){case 0:Bp=AII;break;case 2:Bp=AZ4;break;case 1:Bp=Atm;break;case 5:Bp=
AZ5;break;case 3:Bp=AZ6;break;case 4:Bp=Atn;break;case 6:Bp=AyG;break;default:throw new
Error(AH2+Bhg.toFixed());}return Bp;},_Init:function(aArg){C.EnumToString._Init.
call(this,aArg);this.__proto__=C.USBStateToString;},_className:"Device::USBStateToString"
};C.AgN={BEG:0,BDr:1,BFJ:2};C.AxJ={ACv:A.jV,Timestamp:0,AEi:0,AEn:0,AGz:0,OnSetTimestamp:
function(E){if(this.Timestamp===E)return;this.Timestamp=E;},AFy:function(E){if(this.
AEi===E)return;this.AEi=E;},AFE:function(E){if(this.AEn===E)return;this.AEn=E;},
AFO:function(E){if(this.AGz===E)return;this.AGz=E;},AFd:function(E){if(this.ACv===
E)return;this.ACv=E;},_Init:function(aArg){this.__proto__=C.AxJ;A.h7++;},_Done:function(
){this.__proto__=null;A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((
B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:
"Device::SoftwareVersionInformation"};C.AvB={Timestamp:0,ARP:0,ARQ:0,AVz:0,AVA:0
,AVy:0,ARO:0,OnSetTimestamp:function(E){if(this.Timestamp===E)return;this.Timestamp=
E;},AFv:function(E){if(this.ARP===E)return;this.ARP=E;},AFw:function(E){if(this.
ARQ===E)return;this.ARQ=E;},AF2:function(E){if(this.AVz===E)return;this.AVz=E;},
AF3:function(E){if(this.AVA===E)return;this.AVA=E;},AF1:function(E){if(this.AVy===
E)return;this.AVy=E;},AFu:function(E){if(this.ARO===E)return;this.ARO=E;},_Init:
function(aArg){this.__proto__=C.AvB;A.h7++;},_Done:function(){this.__proto__=null;
A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((B=this.I)&&(B._cycle!=
D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:"Device::HardwareVersionInformation"
};C.Aqu={Undefined:0,BEw:1,BDF:2};C.AgA={Manual:0,TransponderId:1,LAST:2};C.AnimalIdAutoGenerationMethodToString={
BS:function(A9){var BcR=A9;var A1A=A.jV;switch(BcR){case 0:A1A=A.aaR(A.acf.A54);
break;case 1:A1A=A.aaR(A.acf.A6i);break;default:throw new Error(AyH+BcR.toFixed(
));}return A1A;},_Init:function(aArg){C.EnumToString._Init.call(this,aArg);this.
__proto__=C.AnimalIdAutoGenerationMethodToString;},_className:"Device::AnimalIdAutoGenerationMethodToString"
};C.Hk={A5N:0,AD9:1,ACS:2,AEj:3,ABU:4,AEl:5,AD$:6,AD_:7,AB1:8,AGI:9,AEy:10,AEw:11
,ACD:12,LAST:13};C.MonthToString={BS:function(A9){var Bez=A9;var XF=A.jV;switch(
Bez){case 1:XF=A.aaR(A.act.AD9);break;case 2:XF=A.aaR(A.act.ACS);break;case 3:XF=
A.aaR(A.act.AEj);break;case 4:XF=A.aaR(A.act.ABU);break;case 5:XF=A.aaR(A.act.AEl
);break;case 6:XF=A.aaR(A.act.AD$);break;case 7:XF=A.aaR(A.act.AD_);break;case 8:
XF=A.aaR(A.act.AB1);break;case 9:XF=A.aaR(A.act.AGI);break;case 10:XF=A.aaR(A.act.
AEy);break;case 11:XF=A.aaR(A.act.AEw);break;case 12:XF=A.aaR(A.act.ACD);break;default:
throw new Error(AZ7+Bez.toFixed());}return XF;},_Init:function(aArg){C.EnumToString.
_Init.call(this,aArg);this.__proto__=C.MonthToString;},_className:"Device::MonthToString"
};C.VT={FileName:A.jV,AGB:0,EN:0,AgN:0,AU4:false,E6:function(){this.E5(0);this.AgN=
1;this.FileName=A.jV;this.AGB=0;this.AU4=false;},E5:function(E){if(this.EN===E)return;
this.EN=E;A.abo([this,this.SF,this.E5],0);},SF:function(){return this.EN;},_Init:
function(aArg){this.__proto__=C.VT;A.h7++;},_Done:function(){this.__proto__=null;
A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((B=this.I)&&(B._cycle!=
D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:"Device::DataExportContext"
};C.AV4={Init:function(aArg){var B;A.zX([this,this.BfO],[B=A._GetAutoObject(C.Device
),B.A9H,B.BbS],0);this.BfO(this);},Ci:function(){A._GetAutoObject(C.Device).Asd(
this.toString());},BfO:function(G){this.E3(A._GetAutoObject(C.Device).AHp);A.we(
this,0);},_Init:function(aArg){C.Int32ArrayWrapper._Init.call(this,aArg);this.__proto__=
C.AV4;this.ZA(3);this.Init(aArg);},_className:"Device::WeightGainsLowClass"};C.AV3={
Init:function(aArg){var B;A.zX([this,this.BfM],[B=A._GetAutoObject(C.Device),B.A9G
,B.BbR],0);this.BfM(this);},Ci:function(){A._GetAutoObject(C.Device).Asc(this.toString(
));},BfM:function(G){this.E3(A._GetAutoObject(C.Device).AHo);A.we(this,0);},_Init:
function(aArg){C.Int32ArrayWrapper._Init.call(this,aArg);this.__proto__=C.AV3;this.
ZA(3);this.Init(aArg);},_className:"Device::WeightGainsHighClass"};C.AV6={Init:function(
aArg){var B;A.zX([this,this.BfQ],[B=A._GetAutoObject(C.Device),B.A9K,B.BbV],0);this.
BfQ(this);},Ci:function(){A._GetAutoObject(C.Device).Ase(this.toString());},BfQ:
function(G){this.E3(A._GetAutoObject(C.Device).AHs);A.we(this,0);},_Init:function(
aArg){C.Int32ArrayWrapper._Init.call(this,aArg);this.__proto__=C.AV6;this.ZA(3);
this.Init(aArg);},_className:"Device::WeightValuesBirthClass"};C.AV2={Init:function(
aArg){var B;A.zX([this,this.BfK],[B=A._GetAutoObject(C.Device),B.A9F,B.BbQ],0);this.
BfK(this);},Ci:function(){A._GetAutoObject(C.Device).Asb(this.toString());},BfK:
function(G){this.E3(A._GetAutoObject(C.Device).AHn);A.we(this,0);},_Init:function(
aArg){C.Int32ArrayWrapper._Init.call(this,aArg);this.__proto__=C.AV2;this.ZA(3);
this.Init(aArg);},_className:"Device::WeightGainsAverageClass"};C.AML={Init:function(
aArg){var B;A.zX([this,this.Be5],[B=A._GetAutoObject(C.Device),B.A8L,B.Bbp],0);this.
Be5(this);},Be5:function(G){this.E3(A._GetAutoObject(C.Device).ABT);A.we(this,0);
},_Init:function(aArg){C.Int32ArrayWrapper._Init.call(this,aArg);this.__proto__=
C.AML;this.ZA(3);this.Init(aArg);},_className:"Device::AnimalTypesWeightGainsClass"
};C.BFe={BFh:0,BE7:1,BDZ:2,BGG:3,Unknown:4};C.BDD={None:0,BFp:1,BFj:2,BFf:3,BFg:
4};C.BGz={A8l:0,Manual:1,TransponderId:2,NaisId:3,LAST:4};C.TransponderLinkageIdChangeMethodToString={
BS:function(A9){var Bg0=A9;var ABs=A.jV;switch(Bg0){case 0:ABs=A.aaR(A.acf.A8l);
break;case 1:ABs=A.aaR(A.acf.A54);break;case 2:ABs=A.aaR(A.acf.A6i);break;case 3:
ABs=A.aaR(A.acf.Biq);break;default:throw new Error(AZ8+Bg0.toFixed());}return ABs;
},_Init:function(aArg){C.EnumToString._Init.call(this,aArg);this.__proto__=C.TransponderLinkageIdChangeMethodToString;
},_className:"Device::TransponderLinkageIdChangeMethodToString"};C.A$d={BBN:function(
AoM){var Jp=A.ab0(A.abV(AoM,15),0,10);var J$=A._GetAutoObject(C.Converter).S3(Jp
);if(!!J$){if(J$===10){if((((AoM.length!==16)||!A._GetAutoObject(A.acj.VG).AVO(AoM
))||!!A._GetAutoObject(C.Converter).A$7(Jp))||!A._GetAutoObject(C.Converter).AVD(
Jp))return 0;else return Jp;}else return Jp;}else{J$=A._GetAutoObject(C.Converter
).S3(A._GetAutoObject(C.Device).PY);if(!!J$&&(J$===10)){if(!A._GetAutoObject(A.acj.
VG).AVO(AoM))return 0;if(AoM.length===12){var BcQ=A.ab0(A.abV(AoM,10),0,10);var AKk=
A._GetAutoObject(C.Converter).AVD(BcQ);if((BcQ>0)&&!!AKk)return(A._GetAutoObject(
C.Converter).AqB(J$)*1000000000000)+A.ab0(A.abV(AoM,10),0,10);}}}return 0;},BfY:
function(JF){if(!((JF.length===8)||((JF.length===10)&&A._GetAutoObject(A.acj.VG).
AVO(JF))))return 0;var AAU=A._NewObject(A.Core.Bs,0);var A4h=false;var A4m=A.abW(
JF,4,4);var AtZ=A.wz(A4m,0,10);if((AtZ<2000)||(AtZ>2100)){A4m=A.abV(JF,4);AtZ=A.
wz(A4m,0,10);A4h=true;}if((AtZ<2000)||(AtZ>2100))return 0;AAU.Year=AtZ;var AK5;var
Az1;if(A4h){AK5=A.abW(JF,4,2);Az1=A.wz(AK5,0,10);}else{AK5=A.abW(JF,2,2);Az1=A.wz(
AK5,0,10);}if((Az1<1)||(Az1>12))return 0;AAU.Uv(Az1);var AK4;var Az0;if(A4h){AK4=
A.abW(JF,6,2);Az0=A.wz(AK4,0,10);}else{AK4=A.abV(JF,2);Az0=A.wz(AK4,0,10);}if((Az0<
1)||(Az0>AAU.Zo()))return 0;AAU.Ls(Az0);return AAU.JV();},_Init:function(aArg){this.
__proto__=C.A$d;A.h7++;},_Done:function(){this.__proto__=null;A.h7--;},_ReInit:function(
){},_Mark:function(D){var B;if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:
null,_cycle:0,_observers:null,_className:"Device::ParserClass"};C.AnM={_Init:function(
){C.A$d._Init.call(this,0);},_ReInit:function(){},_variants:function(){return this;
},_this:null};C.AnimalTableFieldsToString={BS:function(A9){var Aao=A9;var MS=A.jV;
switch(Aao){case 14:MS=A.aaR(A.acf.Aft);break;case 32:MS=A.aaR(A.acf.Breed);break;
case 4:MS=A.aaR(A.acf.Aeg);break;case 28:MS=A.aaR(A.acf.A5S);break;case 33:MS=A.
aaR(A.acf.AgK);break;case 23:MS=A.aaR(A.acf.KM);break;case 7:MS=A.aaR(A.acf.Afo);
break;case 2:MS=A.aaR(A.acf.P);break;case 0:MS=A.aaR(A.acf.GN);break;case 8:MS=A.
aaR(A.acf.Alarm);break;case 9:MS=A.aaR(A.acf.ACo);break;case 38:MS=A.aaR(A.acf.BiR
);break;case 11:MS=A.aaR(A.acf.Fever);break;case 29:MS=A.aaR(A.acf.ARD);break;case
18:MS=A.aaR(A.acf.M8);break;case 26:MS=A.aaR(A.acf.Ul);break;case 22:MS=A.aaR(A.
acf.Transponder);break;case 1:MS=A.aaR(A.acf.GI);break;case 34:MS=A.aaR(A.acf.Jj
);break;case 6:case 25:case 27:case 10:case 37:case 12:case 17:case 5:case 3:case
35:case 36:case 15:case 16:case 24:case 31:case 20:case 30:case 21:case 19:case 13:
MS=A.jV;break;default:throw new Error(AZ9+A9.toFixed());}return MS;},_Init:function(
aArg){C.EnumToString._Init.call(this,aArg);this.__proto__=C.AnimalTableFieldsToString;
},_className:"Device::AnimalTableFieldsToString"};C.AEg={Bg:0,BGd:1,LAST:2};C.ListViewScopeToString={
BS:function(A9){var BAs=A9;var A2Z=A.jV;switch(BAs){case 0:A2Z=A.aaR(A.acf.Bg);break;
case 1:A2Z=A.aaR(A.acf.BpB);break;default:throw new Error(AIJ+A9.toFixed());}return A2Z;
},_Init:function(aArg){C.EnumToString._Init.call(this,aArg);this.__proto__=C.ListViewScopeToString;
},_className:"Device::ListViewScopeToString"};C.AHr={BG9:0,BG8:1,BG7:2,LAST:3};C.
WeightValuePrecisionToString={BS:function(A9){var BDb=A9;var ALG=A.jV;switch(BDb
){case 0:ALG=AIK+A.aaR(A.acf.AAd);break;case 1:ALG=Alk+A.aaR(A.acf.AiF);break;case
2:ALG=AZ_+A.aaR(A.acf.AiF);break;default:throw new Error(AZ$+A9.toFixed());}return ALG;
},_Init:function(aArg){C.EnumToString._Init.call(this,aArg);this.__proto__=C.WeightValuePrecisionToString;
},_className:"Device::WeightValuePrecisionToString"};C.AgF={BS:function(A9){var ALb=
A9;if(ALb===1)return A.aaR(A.acf.BjN);else return C.AnimalTypeToString.BS.call(this
,A9);},_Init:function(aArg){C.AnimalTypeToString._Init.call(this,aArg);this.__proto__=
C.AgF;},_className:"Device::AnimalTypeToStringHeifer"};C.Wm={RQ:0,BFl:1,LAST:2};
C.MassDeregistrationCriterionToString={BS:function(A9){var BAv=A9;var A24=A.jV;switch(
BAv){case 0:A24=A.aaR(A.acf.BkT);break;case 1:A24=A.aaR(A.acf.ASm);break;default:
throw new Error(Ayl+A9.toFixed());}return A24;},_Init:function(aArg){C.EnumToString.
_Init.call(this,aArg);this.__proto__=C.MassDeregistrationCriterionToString;},_className:
"Device::MassDeregistrationCriterionToString"};C.UInt64PartialFilterCriterion={A5:
A.jV,Zm:0,OG:0,Abk:function(){var Aw=A._NewObject(C.UInt64PartialFilterCriterion
,0);Aw.E$(this);return Aw;},E$:function(AI){C.FilterCriterion.E$.call(this,AI);var
Aw=(C.UInt64PartialFilterCriterion.isPrototypeOf(AI)?AI:null);if(!!Aw){this.A5=Aw.
A5;this.Zm=Aw.Zm;this.OG=Aw.OG;}},Initialize:function(A4,Eb,A7,Atz,AJb,Qg){this.
EJ=A4;this.Operator=Eb;this.A5=A7;this.YK=Qg;this.Zm=Atz;this.OG=AJb;return this;
},_Init:function(aArg){C.FilterCriterion._Init.call(this,aArg);this.__proto__=C.
UInt64PartialFilterCriterion;},_className:"Device::UInt64PartialFilterCriterion"
};C.BD4={Idle:0,BFQ:1,BF1:2,BGg:3,Error:4};C.Bah={Asl:0,AsS:0,Z1:0,A_1:function(
E){if(this.Z1===E)return;this.Z1=E;A.abo([this,this.Bl3,this.A_1],0);},A_3:function(
E){if(this.AsS===E)return;this.AsS=E;A.abo([this,this.Bl5,this.A_3],0);},A_H:function(
E){if(this.Asl===E)return;this.Asl=E;A.abo([this,this.BlF,this.A_H],0);},Bl3:function(
){return this.Z1;},Bl5:function(){return this.AsS;},BlF:function(){return this.Asl;
},_Init:function(aArg){this.__proto__=C.Bah;A.h7++;},_Done:function(){this.__proto__=
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
C.AVo.__proto__=C.Int32ArrayWrapper;C.AVn.__proto__=C.Int32ArrayWrapper;C.AMK.__proto__=
C.Int32ArrayWrapper;C.UInt64FilterCriterion.__proto__=C.FilterCriterion;C.BooleanToAssignedUnassignedString.
__proto__=C.EnumToString;C.CountryToString.__proto__=C.EnumToString;C.EaseOfDeliveryToString.
__proto__=C.EnumToString;C.WhereAboutsToString.__proto__=C.EnumToString;C.BreedToString.
__proto__=C.EnumToString;C.AnimalIdGenerationMethodToString.__proto__=C.EnumToString;
C.DirectionOfCountingToString.__proto__=C.EnumToString;C.Aei.__proto__=C.EnumToIcon;
C.AdZ.__proto__=C.EnumToIcon;C.GermanStateToString.__proto__=C.EnumToString;C.EartagNrAssignmentModeToString.
__proto__=C.EnumToString;C.M6.__proto__=C.EnumToCodeset;C.ReasonOfLeavingToString.
__proto__=C.EnumToString;C.AhC.__proto__=C.EnumToCodeset;C.K0.__proto__=C.EnumToCodeset;
C.CalfDeregistrations.__proto__=C.Row;C.DeviceComponentToString.__proto__=C.EnumToString;
C.AgT.__proto__=C.EnumToCodeset;C.AeU.__proto__=C.EnumToIcon;C.WhereAboutsFilterCriterion.
__proto__=C.FilterCriterion;C.TimespanDaysToString.__proto__=C.EnumToString;C.USBStateToString.
__proto__=C.EnumToString;C.AnimalIdAutoGenerationMethodToString.__proto__=C.EnumToString;
C.MonthToString.__proto__=C.EnumToString;C.AV4.__proto__=C.Int32ArrayWrapper;C.AV3.
__proto__=C.Int32ArrayWrapper;C.AV6.__proto__=C.Int32ArrayWrapper;C.AV2.__proto__=
C.Int32ArrayWrapper;C.AML.__proto__=C.Int32ArrayWrapper;C.TransponderLinkageIdChangeMethodToString.
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