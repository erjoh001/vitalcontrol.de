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
var Cc="ERROR: Cannot add criterion, it is already in the list.";var BD="ERROR: BatteryChargeState is read only";
var E6="ERROR: UpdateChargeActive is read only";var Hp="ERROR: ScanState is read only.";
var IS="ERROR: MeasureState is read only.";var Ir="ERROR: Temperature value is read only";
var O1="ERROR: UpdateDataTable called for Undefined data table.";var P4="ERROR: UpdateDataTable called for unknown data table id=";
var P5="ERROR: SyncState is read only.";var CQ="ERROR: ScanTransponder is read only.";
var Fe="ERROR: Body weight value is read only";var L1="ERROR: Predicted temperature value is read only";
var P6="ERROR: TransferProgress is read only";var J0="ERROR: TransferTarget is read only";
var N_="ERROR: unhandled assessment.";var P7="Unhandled enum BodyTemperature: ";
var MG="AU";var S6="AT";var UN="BE";var ZZ="BA";var WZ="BG";var Is="CA";var UO="CN";
var Z0="TW";var W0="HR";var Z1="CY";var W1="CZ";var Z2="DK";var Z3="EE";var UP="FI";
var W2="FR";var P8="DE";var Z4="GR";var O2="HU";var Ri="IE";var W3="IT";var W4="JP";
var W5="LV";var W6="LT";var Z5="LU";var W7="MT";var W8="NL";var S7="NO";var UQ="PL";
var UR="PT";var AcH="RO";var S8="RU";var Z6="SK";var Afw="SI";var Z7="ES";var W9=
"SE";var Z8="CH";var Z9="TR";var Afx="UA";var KX="UK";var AcI="US";var Lu=".";var
AhS="-";var An7="ERROR: Unhandled mass unit: ";var N$=" ";var W_="Unhandled gender";
var An8="Unhandled animal type";var US="Unhandled Device::MassUnit.";var AhT="Unhandled Device::AnimalListContent.";
var AcJ="Avid";var UT="Ordicam / IER SA";var An9="Agrident";var An_="Datamars";var
An$="Allflex";var Aoa="Texas Instruments";var Afy="Nedap";var AsN="Digital Angel";
var AxV="null";var AxW="[ ";var O3=", ";var Rj=" ]";var AxX="Unhandled language";
var UU="Unhandled Device::AnimalListAction.";var AsO="Temperature unit conversion not supported: ";
var AxY="->";var AxZ="=";var Ax0=">";var Aob="<";var Afz="!=";var Aoc="WARNING: Unhandled operator.";
var IT="Unknown birth type";var Aod="Unhandled country: ";var W$="ERROR: Cannot start transaction";
var Aoe="ERROR: Table is null, cannot load row (";var AsP=")";var AsQ="Table Id mismatch!";
var AsR="ERROR: Row index (";var Aof=") out of bounds [0,";var Aog="]";var AsS="ERROR: Table is full. Item limit: ";
var Ax1="Device::ScanTransponder not set";var Ax2="Unhandled TransponderType.";var
Ax3="Unhandled ScanState.";var AsT="Could not load animal with transponder";var Ax4=
"Birth type";var P9="Time calving";var Ax5="Pend. reg. notice";var AVF="Perished";
var AVG="Rating temp.";var AVH="Location";var AVI=" mother";var AHb="Reason leaving";
var AHc="Time alarm";var AfA="Time first weighing";var Aoh="Time control";var AVJ=
"Time temp.";var AHd="Time watch";var Ak7="Time weighing";var AHe="Assessment";var
AHf="Time rating";var AVK="ERROR: Unhandled AnimalTable filter field:";var AHg="Field ";
var AVL="ERROR: Unhandled RatingTable filter field:";var AVM="ERROR: Unhandled table ";
var AcK=" filter fields.";var AVN=" [";var AVO="WARNING: Unhandled filter criterion type.";
var AHh="0";var AsU="No table specified";var AHi="Invalid animal id generation method: ";
var AHj="Unhandled AnimalIdGenerationMethod: ";var Ax6="Invalid gender: ";var AHk=
"Invalid ear tag number assignment mode: ";var Ax7=";";var AVP="Invalid animal creation error code: ";
var AVQ="Invalid EartagNrAssignmentMode: ";var AVR="Unsupported exponent: ";var AVS=
"Unknown whereabouts type: ";var AHl="Unhandled Gender: ";var AVT="Unhandled AnimalIdAutoGenerationMethod: ";
var O4="\n";var Ax8="\n\n";var AVU="Bootloader:\nV\xA0";var AVV="Middleware:\nV\xA0";
var AVW="GUI:\nV\xA0";var AVX="Mainboard: ";var AVY="Torchboard: ";var AVZ="Operator not supported.";
var AHm="Unhandled Device::TransponderAssignmentIdChangeMethod: ";var AHn="Unhandled mass deregistration criterion: ";
var Aoi="Unhandled enum value ";var Ax9="UNDEFINED";var AV0="Boot";var AV1="Charge";
var AV2="ChargeWarning";var AHo="ControlledPowerOff";var AV3="DeviceMain";var AHp=
"DeviceService";var AHq="DeviceInfo";var AHr="DeviceDataManagement";var AV4="DeviceAnimalDataMenu";
var AHs="DeviceDeviceDataMenu";var AV5="DeviceCheck";var AHt="Home";var Rk="Settings";
var Xa="DateTimeSettings";var AV6="UnitsSettings";var AV7="DataAcquisitionSettings";
var AV8="RegistrationAutomaticSettings";var AV9="RegistrationPresettingsSettings";
var AV_="TransponderAssignmentSettings";var AV$="TransponderUnlinkSettings";var AWa=
"TemperatureSettings";var AhU="WeightGainSettings";var AHu="DeviceSettings";var AWb=
"RegistrationSettings";var AWc="InitializationSettings";var AHv="PremisesSettings";
var AHw="Sleep";var Ax_="Sync";var P_="EditAnimalData";var AWd="EditAnimalDataNaisId";
var AWe="AnimalList";var AWf="AnimalListFilter";var AsV="AlarmListFilter";var AWg=
"WatchListFilter";var AWh="AnimalActionActions";var AWi="AnimalActionTemperature";
var AWj="TemperatureMeasurement";var AWk="AnimalActionWeighing";var AWl="AnimalActionRate";
var AsW="AnimalActionUnregister";var AWm="AnimalActionPerished";var AWn="AnimalActionNewBornCare";
var AWo="AlarmList";var AWp="ControlMeasure";var AWq="ControlList";var AWr="RangeTest";
var AWs="ListsMain";var AWt="ListsIdManagement";var AWu="WatchList";var AWv="EvaluationMenuMain";
var AHx="EvaluationMenuWeights";var Ak8="EvaluationLosses";var AWw="EvaluationRatings";
var AWx="EvaluationTemperatures";var AWy="EvaluationWeights";var Ax$="EvaluationWeightsRecent";
var Ak9="EvaluationBirthWeights";var AhV="AnimalEvaluationFilter";var Aya="NewMenu";
var Aoj="NewAnimals";var AhW="NewAnimalManualData";var AWz="MassRecording";var Ayb=
"NewAnimalTransponderData";var AHy="NewAnimalLoss";var AfB="AutoActionScanScreen";
var AHz="ManualActionScanScreen";var Z_="SetTransponderScreen";var Ak_="SetSaveTransponderScreen";
var Aok="NewAnimalSetTransponderScreen";var AWA="NewAnimalsSetTransponderScreen";
var AWB="NewAnimalCalvingDataScreen";var AWC="WeightListScreen";var AWD="AnimalSingleInfoScreen";
var AWE="AnimalMultiInfoScreen";var AsX="AnimalRegistrationDetails";var AHA="FreshCowListScreen";
var AHB="FreshCowListFilterScreen";var AWF="DryCowListScreen";var AWG="DryCowListFilterScreen";
var AWH="NoTransponderListScreen";var AWI="NoTransponderListFilterScreen";var AWJ=
"YoungNoTransponderListScreen";var AWK="YoungNoTransponderListFilterScreen";var AWL=
"NoNaisIdListScreen";var AWM="NoNaisIdListFilterScreen";var AWN="RegistrationsListScreen";
var AWO="RegistrationsListFilterScreen";var AWP="ActionListScreen";var Ayc="ActionListFilterScreen";
var AHC="UpdateScreen";var AHD="MotherScanScreen";var AHE="SetSaveNaisIdScreen";
var AHF="PurchasedAnimalsList";var AHG="TextInput";var AHH="AnimalActions";var AWQ=
"Unhandled display mode: ";var AWR="None";var AWS="Actions Settings";var AWT="Auto Action";
var AWU="Menu Item Settings";var AWV="Rating Type";var AWW="Weighing settings";var
Ayd="Options";var AHI="AnimalSearch";var AWX="AnimalSearchUnfiltered";var AHJ="AnimalSearchDriedOff";
var AhX="MeasurementReady";var UV="AnimalMultiInfoMenu";var AWY="MassRecordingDefaults";
var Z$="MassRecordingFields";var AWZ="MassRecordingMenu";var AW0="BirthRegistrationsListMenu";
var Ak$="Unhandled overlay menu: ";var Aaa="Error";var AcL="Idle";var Aye="IdScanned";
var AW1="NotFound";var Oa="Progress";var AHK="Unhandled scan state: ";var AW2="Prediction";
var AHL="Ready";var AW3="Unhandled measure state: ";var AHM="Unhandled temperature unit: ";
var AHN="Unhandled species: ";var AW4="English";var AW5="Nederlands";var AW6="Deutsch";
var AW7="Eesti";var AW8="Suomalainen";var AW9="Fran\xE7ais";var AW_="\u0395\u03BB\u03BB\u03B7\u03BD\u03B9\u03BA\u03AC";
var AW$="\u0411\u044A\u043B\u0433\u0430\u0440\u0441\u043A\u0438";var AHO="Italiano";
var AXa="\u0420\u0443\u0441\u0441\u043A\u0438\u0439";var AHP="Espa\xF1ol";var AHQ=
"T\xFCrk\xE7e";var Ayf="\u6B63\u9AD4\u5B57/\u7E41\u9AD4\u5B57";var AXb="\u010Ce\u0161tina";
var AXc="Bosanski";var AXd="Norsk";var AXe="\u0423\u043A\u0440\u0430\u0457\u043D\u0441\u044C\u043A\u0438\u0439";
var AHR="Unhandled language: ";var AXf="EN";var AXg="ET";var AXh="EL";var AsY="ZH";
var AsZ="CS";var AHS="BS";var AXi="Unhandled gender: ";var AXj="Unhandled birth type: ";
var AXk="Exporting";var AXl="ImportFinish";var AXm="ImportStart";var AXn="Importing";
var AXo="Init";var AXp="Unhandled sync state: ";var AHT="Unhandled rating attribute: ";
var AXq="Unhandled assessment: ";var Ayg="Illegal boolean value: ";var AHU="Unhandled popup ID:";
var AXr="Unknown";var AXs="Severe Error";var AXt="ErrorsDeviceDriverCheck";var AXu=
"Enter Sleep";var AXv="About";var AXw="InfoSoftwareVersions";var AHV="InfoHardwareVersions";
var AHW="InfoSerial";var AHX="ShutDown";var AHY="SuccessDataSync";var Ayh="SuccessResetFactory";
var Ayi="SuccessResetAnimalData";var AHZ="SuccessCreateBackup";var AXx="SuccessRestoreBackup";
var AH0="CreateBackupInProgress";var AXy="RestoreBackupInProgress";var AH1="FailedCreateBackup";
var AXz="FailedRestoreBackup";var AXA="TechnicalDetails";var AXB="WarningDataSync";
var AXC="WarningFactory";var AXD="WarningResetAnimalData";var AXE="WarningRestart";
var AXF="WarningAutoAction";var AXG="WarningAutoActionNotApplicable";var AXH="WarningNoMenuItem";
var AXI="WarningEnterDemoMode";var AXJ="NoAnimalsRegistered";var AXK="MaxNumAnimalsReached";
var Ayj="MaxNumRatingsReached";var AXL="MaxNumCalfDeregistrationsReached";var AXM=
"MissingTransponder";var Ayk="EarTagNumberTooShort";var As0="NoValidCountryCode";
var UW="WarningOutdatedAnimalWeight";var As1="WarningOutdatedAnimalWeights";var AXN=
"WarningWeightEvaluationSingular";var AXO="WarningWeightEvaluationPlural";var AXP=
"ScanError";var AH2="ScanNotFound";var AXQ="ScannedAnimalNotFound";var AH3="ScannedTransponderNotFound";
var AXR="AnimalNotFound";var AXS="SuccessUnregister";var AXT="SuccessUnregisterPerished";
var As2="SuccessCreationNewAnimal";var AXU="SuccessCreationNewAnimals";var AXV="AnimalCreationInProgress";
var AH4="EvaluationInProgress";var AXW="DataSyncInProgress";var AXX="AddedToAlarm";
var AXY="RemovedFromAlarm";var AXZ="AddedToWatch";var AcM="RemovedFromWatch";var
AX0="AddedToDryOff";var AX1="RemovedFromDryOff";var AX2="AnimalIdAlreadyExists";
var AX3="AnimalIdAlreadyExistsContinuable";var AH5="MissingAnimalId";var AX4="MissingAnimalIdMother";
var AX5="MissingEartagNumber";var AX6="MissingTransponderId";var AX7="TransponderAlreadyRegistered";
var AX8="TransponderAlreadyRegisteredContinuable";var AX9="TransponderAlreadyRegisteredCapturable";
var AH6="HelpAnimalInfoRating";var AX_="WarningReassignTransponder";var AX$="CannotReassignNaisId";
var AYa="WarningResetToDefaultValue";var AH7="WarningResetThresholds";var AH8="WarningResetTempThresholds";
var AYb="UpdateFirmware";var AYc="UpdateFirmwareBatteryLow";var AYd="ConfirmFirmwareUpdated";
var AYe="ConfirmBootloaderUpdated";var Rl="QuestionAddAnotherCalfMultiples";var As3=
"RemovedAllBirthNoticesPending";var AH9="RemovedAllPurchasedNoticePending";var AH_=
"RemovedFromBirthNoticePending";var Aol="RemovedFromPurchasedNoticePending";var Aom=
"SuccessClearAnimalLoss";var Ayl="RemovedAnimalBirth";var AYf="RemovedAnimalPurchased";
var AH$="WarningNoActionsForAnimalLoss";var AYg="SuccessLinkTransponder";var AYh=
"SuccessChangeTransponder";var AYi="SuccessUnlinkTransponder";var AYj="SuccessLinkNaisId";
var AYk="WarningDataExportHitBirthFailed";var AYl="SuccessDataExportHitBirth";var
AYm="SuccessDataExportHitBirthDownload";var AYn="WarningDataExportPurchasedFailed";
var AYo="SuccessDataExportPurchased";var AYp="SuccessDataExportPurchasedDownload";
var AYq="WarningDataExportAnimalsFailed";var AYr="SuccessDataExportAnimalsRatings";
var AYs="SuccessDataExportAnimalsDownload";var AYt="WarningNoPremisesID";var AYu=
"WarningNoFlashDrivePresent";var AYv="WarningNoBackupPathPresent";var AYw="WarningNoBackupFilePresent";
var Aon="DemoFunctionNotAvailable";var AIa="WarningImpreciseTimeSetting";var AYx=
"ConfirmationRestoreBackup";var AIb="ConfirmationMassDeregistration";var AIc="SuccessMassDeregistration";
var AcN="WarningParsedDateInFutureInvalid";var AId="WarningParsingDateFailed";var
AYy="WarningParsingNaisIdFailed";var AIe="WarningParsingShortNaisIdWithoutPremisesId";
var AYz="DataExportInProgress";var Aym="AnimalId";var AYA="FarmId";var AYB="GroupId";
var Ayn="PersonId";var AYC="Unhandled transponder type: ";var AYD="FDX";var AYE=
"HDX";var AIf="HDX (Urban)";var Aoo="Unhandled transponder protocol: ";var AIg="Illegal RatingMode: ";
var AYF="Unhandled mass unit: ";var AIh="Max array size is 10";var Ayo="Index out of bounds";
var Ala="ERROR: Received more integers than expected!";var AIi="Unhandled double scan action :";
var Aop="Illegal WeightRecordingMode: ";var AYG="Illegal WeightRecordingScope: ";
var AIj="AnimalDataGenderType";var AIk="AnimalDataShortNaisId";var AYH="Rating";
var AYI="Temperature";var AIl="Weight";var AYJ="Alarm infos";var AYK="Control infos";
var AYL="Watch infos";var AYM="Fresh cow infos";var AYN="No transponder infos";var
AYO="Dry cow info";var AYP="No nais id infos";var AYQ="Birth registrations infos";
var AYR="Purchased registrations infos";var AYS="Young no transponder infos";var
AYT="Unhandled animal list content:";var AYU="Illegal AutoRegistrationMode: ";var
AYV="Illegal FactoryResetScope: ";var Aoq="??";var AIm="Illegal EaseOfDelivery: ";
var Aab="Illegal Whereabouts: ";var AYW="Illegal breed: ";var Ayp="Unisex";var AYX=
"Illegal animalIdGenerationMethod: ";var AYY="Ascending";var AYZ="Descending";var
AY0="Illegal directionOfCountingName: ";var AIn="Unhandled direction of counting: ";
var As4="Unhandled German state: ";var As5="SH";var As6="HH";var As7="NI";var As8=
"HB";var Ayq="NW";var Aor="HE";var AY1="RP";var AY2="BW";var AY3="BY";var AY4="SL";
var AY5="BB";var AY6="MV";var AY7="SN";var AY8="ST";var AY9="TH";var AY_="One Range Male Female";
var AY$="Two Ranges Male Female";var AIo="Illegal EartagAssignmentMode: ";var AZa=
"Unhandled code set value ";var AIp="Implement in derived class";var AZb="Illegal HIT-Code: ";
var Ayr="Illegal ReasonOfLeaving: ";var AIq="Illegal code: ";var Ays="Undefined";
var Ayt="Illegal DeviceComponent: ";var AZc="Unhandled Device::MotherSelectionFilterMode: ";
var AZd="Illegal Device::TimespanDays: ";var AZe="Not connected";var AIr="Host";
var AZf="Device";var AZg="Device CDC";var AZh="Host MSC";var AZi="Host HID";var AZj=
"Host CDC";var AZk="Illegal animalIdAutoGenerationMethod: ";var AZl="Unhandled month: ";
var AZm="Illegal transponderAssignmentIdChangeMethod: ";var AIs="Unhandled animal table field: ";
var AZn="Unhandled list view scope: ";var AZo="1 ";var AZp="100 ";var AZq="10 ";
var AZr="Unhandled weight value precision: ";
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
B7:null,B8:null,CV:function(AI){if(!AI)return;var Av=this.B7;while(!!Av){if(Av===
AI)throw new Error(Cc);Av=Av.Ah;}AI.AJ=this.B8;if(!!this.B8)this.B8.Ah=AI;this.B8=
AI;if(!this.B7)this.B7=AI;},AOB:function(){return this.B7;},AOG:function(Bbh){if(
!!Bbh)return Bbh.Ah;return null;},DL:function(AI1,Eb){var Av=this.B7;while(!!Av){
if(Av.EJ===AI1){if(Eb===1)return Av;else if(Av.Operator===Eb)return Av;}Av=Av.Ah;
}return null;},Ni:function(AI){var Av=this.B7;while(!!Av){if(Av===AI){if(!!Av.AJ
)Av.AJ.Ah=Av.Ah;if(!!Av.Ah)Av.Ah.AJ=Av.AJ;if(this.B7===Av)this.B7=Av.Ah;if(this.
B8===Av)this.B8=Av.AJ;Av.Ah=null;Av.AJ=null;return;}Av=Av.Ah;}},E_:function(){var
Be=A._NewObject(C.Filter,0);var Av=this.B7;while(!!Av){Be.CV(Av.Abe());Av=Av.Ah;
}return Be;},_Init:function(aArg){this.__proto__=C.Filter;A.h7++;},_Done:function(
){this.__proto__=null;A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((
B=this.B7)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.B8)&&(B._cycle!=D))B._Mark(
B._cycle=D);if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:
null,_className:"Device::Filter"};C.FilterCriterion={Ah:null,AJ:null,EJ:-1,Operator:
1,YD:false,Abe:function(){return null;},E_:function(AI){if(!AI)return;this.EJ=AI.
EJ;this.Operator=AI.Operator;this.YD=AI.YD;},_Init:function(aArg){this.__proto__=
C.FilterCriterion;A.h7++;},_Done:function(){this.__proto__=null;A.h7--;},_ReInit:
function(){},_Mark:function(D){var B;if((B=this.Ah)&&(B._cycle!=D))B._Mark(B._cycle=
D);if((B=this.AJ)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.I)&&(B._cycle!=D
))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:"Device::FilterCriterion"
};C.Int32FilterCriterion={A4:0,Abe:function(){var Av=A._NewObject(C.Int32FilterCriterion
,0);Av.E_(this);return Av;},E_:function(AI){C.FilterCriterion.E_.call(this,AI);var
Av=(C.Int32FilterCriterion.isPrototypeOf(AI)?AI:null);if(!!Av)this.A4=Av.A4;},Initialize:
function(A3,Eb,A9,Qb){this.EJ=A3;this.Operator=Eb;this.A4=A9;this.YD=Qb;return this;
},_Init:function(aArg){C.FilterCriterion._Init.call(this,aArg);this.__proto__=C.
Int32FilterCriterion;},_className:"Device::Int32FilterCriterion"};C.DeviceClass={
AD$:0,AD_:0,AvV:0,SI:0,OQ:null,Sw:null,QW:null,SW:null,RX:null,GC:null,An:null,Bt:
null,Ags:null,AnG:null,Pm:null,Aut:A.jV,AutoActions:A.jV,ABB:A.jV,AGM:A.jV,AGN:A.
jV,AhF:A.jV,AG7:A.jV,AG8:A.jV,ABC:A.jV,AG6:A.jV,AG$:A.jV,ABv:A.jV,ABw:A.jV,ARR:A.
jV,ARW:A.jV,AVC:A.jV,Aa0:100,Ls:0,AMT:75,AcA:3600,ATP:0,A1:5,AF:0,KV:50000,Pi:0,
AF2:0,AdN:0,AqY:0,AqX:0,ARE:1,ARD:1,AjO:0,ARF:1,AxG:0,Afm:0,AqK:10,AUz:5,AvQ:60,
AvO:0,AnX:0,OJ:1,WhereAbouts:0,AkY:0,Axy:3,ACx:0,Agu:1,AhP:0,AbQ:0,Aqj:0,ANR:11,
Breed:0,EartagNrAssignmentMode:0,AuT:0,ACq:0,ACp:0,Ii:5,ABu:2,Aql:0,AOt:2,AVn:0,
D9:0,AL3:0,Kh:0,Gender:2,WeightRecordingScope:1,WeightRecordingMode:1,AnimalType:
0,MassUnit:0,AutoRegistrationMode:0,RatingMode:0,SyncState:0,OverlayMenu:0,TemperatureUnit:
0,Language:0,MeasureState:0,ScanState:0,KG:3,AeJ:true,ARq:false,Ap9:true,AqL:false
,AmI:true,HF:false,AU3:false,AmJ:false,AVl:false,AsH:false,AD9:false,Amv:false,UpdateActiveScreen:
function(AL){if(this.KG===AL)return;this.KG=AL;A.abo([this,this.AEk,this.Bau],0);
},Zj:function(E){if(this.K&&this.K.Zj)return this.K.Zj.apply(this,arguments);else
return C.DeviceClass.Bt1.apply(this,arguments);},Bt1:function(E){},Bau:function(
Aq){this.Zj(Aq);},UpdateBatteryChargeState:function(AL){if(this.Aa0===AL)return;
this.Aa0=AL;A.abo([this,this.Av0,this.Ayz],0);},Awl:function(E){if(this.K&&this.
K.Awl)return this.K.Awl.apply(this,arguments);else return C.DeviceClass.Bua.apply(
this,arguments);},Bua:function(E){A.ab5("%s",BD);},Ayz:function(Aq){this.Awl(Aq);
},UpdateChargeActive:function(AL){if(this.Amv===AL)return;this.Amv=AL;A.abo([this
,this.Av3,this.AyA],0);},AER:function(E){if(this.K&&this.K.AER)return this.K.AER.
apply(this,arguments);else return C.DeviceClass.Bug.apply(this,arguments);},Bug:
function(E){A.ab5("%s",E6);},AyA:function(Aq){this.AER(Aq);},UpdateScanState:function(
AL){var B;if(this.ScanState===AL)return;this.ScanState=AL;A.abo([this,this.ASt,this.
AZX],0);A._GetAutoObject(C.Helper).BAk(this);},ArV:function(E){if(this.K&&this.K.
ArV)return this.K.ArV.apply(this,arguments);else return C.DeviceClass.BuW.apply(
this,arguments);},BuW:function(E){A.ab5("%s",Hp);},AZX:function(Aq){this.ArV(Aq);
},UpdateMeasureState:function(AL){if(this.MeasureState===AL)return;this.MeasureState=
AL;A.abo([this,this.AEs,this.AIJ],0);},AwK:function(E){if(this.K&&this.K.AwK)return this.
K.AwK.apply(this,arguments);else return C.DeviceClass.BuE.apply(this,arguments);
},BuE:function(E){A.ab5("%s",IS);},AIJ:function(Aq){this.AwK(Aq);},UpdateTempValue:
function(AL){if(this.Ls===AL)return;this.Ls=AL;A.abo([this,this.AEw,this.AIL],0);
},AwY:function(E){if(this.K&&this.K.AwY)return this.K.AwY.apply(this,arguments);
else return C.DeviceClass.Bu2.apply(this,arguments);},Bu2:function(E){A.ab5("%s"
,Ir);},AIL:function(Aq){this.AwY(Aq);},Anu:function(E){if(this.K&&this.K.Anu)return this.
K.Anu.apply(this,arguments);else return C.DeviceClass.Buy.apply(this,arguments);
},Buy:function(E){},BaJ:function(Aq){this.Anu(Aq);},AwZ:function(E){if(this.K&&this.
K.AwZ)return this.K.AwZ.apply(this,arguments);else return C.DeviceClass.Bu3.apply(
this,arguments);},Bu3:function(E){},Ata:function(Aq){this.AwZ(Aq);},AEP:function(
E){if(this.K&&this.K.AEP)return this.K.AEP.apply(this,arguments);else return C.DeviceClass.
Buf.apply(this,arguments);},Buf:function(E){},BaB:function(Aq){this.AEP(Aq);},AFl:
function(E){if(this.K&&this.K.AFl)return this.K.AFl.apply(this,arguments);else return C.
DeviceClass.BuG.apply(this,arguments);},BuG:function(E){},AZR:function(Aq){this.
AFl(Aq);},UpdateMonitoring:function(AL){if(this.AD9===AL)return;this.AD9=AL;A.abo([
this,this.ASk,this.AZR],0);},UpdateDataTable:function(Bbj){var B;switch(Bbj){case
0:A.pe([B=this.An,B.Akh],this);break;case 1:A.pe([B=this.Bt,B.Akh],this);break;case
3:A.pe([B=this.Ags,B.Akh],this);break;case 4:A.pe([B=this.Pm,B.Akh],this);break;
case 2:A.ab5("%s",O1);break;default:A.ab5("%s%e",P4,Bbj);}},Axx:function(){if(this.
K&&this.K.Axx)return this.K.Axx.apply(this,arguments);else return C.DeviceClass.
BvB.apply(this,arguments);},BvB:function(){},AhJ:function(){if(this.K&&this.K.AhJ
)return this.K.AhJ.apply(this,arguments);else return C.DeviceClass.BvE.apply(this
,arguments);},BvE:function(){},AhG:function(){if(this.K&&this.K.AhG)return this.
K.AhG.apply(this,arguments);else return C.DeviceClass.BvC.apply(this,arguments);
},BvC:function(){},AnR:function(){if(this.K&&this.K.AnR)return this.K.AnR.apply(
this,arguments);else return C.DeviceClass.BvF.apply(this,arguments);},BvF:function(
){},UpdateLanguage:function(AL){if(this.Language===AL)return;this.Language=AL;switch(
AL){case 14:A._SetLanguage(1);break;case 13:A._SetLanguage(2);break;case 6:A._SetLanguage(
3);break;case 11:A._SetLanguage(4);break;case 10:A._SetLanguage(5);break;case 12:
A._SetLanguage(6);break;case 5:A._SetLanguage(7);break;case 3:A._SetLanguage(8);
break;case 1:A._SetLanguage(9);break;case 8:A._SetLanguage(10);break;case 4:A._SetLanguage(
11);break;case 15:A._SetLanguage(13);break;case 9:A._SetLanguage(15);break;case 2:
A._SetLanguage(16);break;case 7:A._SetLanguage(17);break;case 16:A._SetLanguage(
18);break;default:A._SetLanguage(0);}A.abo([this,this.A8l,this.BaJ],0);},UpdateTemperatureUnit:
function(AL){if(this.TemperatureUnit===AL)return;this.TemperatureUnit=AL;A.abo([
this,this.Arr,this.Ata],0);},UpdateBrightness:function(AL){if(this.AMT===AL)return;
this.AMT=AL;A.abo([this,this.A78,this.BaB],0);},SetSystemTime:function(Ah5){if(this.
K&&this.K.SetSystemTime)return this.K.SetSystemTime.apply(this,arguments);else return C.
DeviceClass.Bvz.apply(this,arguments);},Bvz:function(Ah5){},Axq:function(){if(this.
K&&this.K.Axq)return this.K.Axq.apply(this,arguments);else return C.DeviceClass.
Bai.apply(this,arguments);},Bai:function(){},AGe:function(){if(this.K&&this.K.AGe
)return this.K.AGe.apply(this,arguments);else return C.DeviceClass.Bag.apply(this
,arguments);},Bag:function(){},BnP:function(){},UpdateOverlayMenu:function(AL){if(
this.OverlayMenu===AL)return;this.OverlayMenu=AL;A.abo([this,this.Awd,this.AyH],
0);},Dw:function(E){if(this.K&&this.K.Dw)return this.K.Dw.apply(this,arguments);
else return C.DeviceClass.BuR.apply(this,arguments);},BuR:function(E){},AyH:function(
Aq){this.Dw(Aq);},Aw5:function(E){if(this.K&&this.K.Aw5)return this.K.Aw5.apply(
this,arguments);else return C.DeviceClass.Bvb.apply(this,arguments);},Bvb:function(
E){},BaU:function(Aq){this.Aw5(Aq);},UpdateUnderTemp:function(AL){if(this.AcA===
AL)return;this.AcA=AL;A.abo([this,this.A8P,this.BaU],0);},UpdateSyncState:function(
AL){if(this.SyncState===AL)return;this.SyncState=AL;A.abo([this,this.ASv,this.AZZ
],0);},Ab4:function(E){if(this.K&&this.K.Ab4)return this.K.Ab4.apply(this,arguments
);else return C.DeviceClass.Bu1.apply(this,arguments);},Bu1:function(E){A.ab5("%s"
,P5);},AZZ:function(Aq){this.Ab4(Aq);},ACV:function(){if(this.K&&this.K.ACV)return this.
K.ACV.apply(this,arguments);else return C.DeviceClass.BtT.apply(this,arguments);
},BtT:function(){return A.jV;},UpdatePopup:function(J2,A0I,A0E,A0L){this.A6(J2,A0I
,A0E,A0L,[this,this.Bz4]);},PopupStateChanged:function(J2,Ae){if(this.K&&this.K.
PopupStateChanged)return this.K.PopupStateChanged.apply(this,arguments);else return C.
DeviceClass.Bvo.apply(this,arguments);},Bvo:function(J2,Ae){},AFN:function(E){if(
this.K&&this.K.AFN)return this.K.AFN.apply(this,arguments);else return C.DeviceClass.
Bvd.apply(this,arguments);},Bvd:function(E){},BaV:function(Aq){this.AFN(Aq);},UpdateVibrationOnKeypressEnabled:
function(AL){if(this.AsH===AL)return;this.AsH=AL;A.abo([this,this.A8Q,this.BaV],
0);},Ae7:function(E){if(this.K&&this.K.Ae7)return this.K.Ae7.apply(this,arguments
);else return C.DeviceClass.Bvc.apply(this,arguments);},Bvc:function(E){},AIM:function(
Aq){this.Ae7(Aq);},UpdateVibrationOn:function(BbK){if(this.AVl===BbK)return;this.
AVl=BbK;A.abo([this,this.AEx,this.AIM],0);},A6:function(J2,A0I,A0E,A0L,Bw6){var Agj=
A._NewObject(C.PopupContext,0);Agj.Id=J2;Agj.Show=A0I;Agj.AkC=A0E;Agj.AkX=A0L;Agj.
AFV=Bw6;this.AnG.Trigger(Agj,false);},Bz4:function(G){var As=(C.PopupContext.isPrototypeOf(
G)?G:null);if(!!As)this.PopupStateChanged(As.Id,As.PopupState);},AwU:function(E){
if(this.K&&this.K.AwU)return this.K.AwU.apply(this,arguments);else return C.DeviceClass.
BuV.apply(this,arguments);},BuV:function(E){},AZW:function(Aq){this.AwU(Aq);},UpdateRatingMode:
function(AL){if(this.RatingMode===AL)return;this.RatingMode=AL;A.abo([this,this.
ASs,this.AZW],0);},AeX:function(E){if(this.K&&this.K.AeX)return this.K.AeX.apply(
this,arguments);else return C.DeviceClass.Buq.apply(this,arguments);},Buq:function(
E){},As$:function(Aq){this.AeX(Aq);},UpdateFlashLightOn:function(Bbs){if(this.AmJ===
Bbs)return;this.AmJ=Bbs;A.abo([this,this.Aro,this.As$],0);},Um:function(E){if(this.
K&&this.K.Um)return this.K.Um.apply(this,arguments);else return C.DeviceClass.Bu6.
apply(this,arguments);},Bu6:function(E){},AZ0:function(Aq){this.Um(Aq);},UpdateTopLightOn:
function(BbG){if(this.AU3===BbG)return;this.AU3=BbG;A.abo([this,this.ASx,this.AZ0
],0);},Wx:function(E){if(this.K&&this.K.Wx)return this.K.Wx.apply(this,arguments
);else return C.DeviceClass.BuU.apply(this,arguments);},BuU:function(E){},BvS:function(
Aq){this.Wx(Aq);},UpdateRGBTopLight:function(BbB){if(this.ATP===BbB)return;this.
ATP=BbB;A.abo([this,this.Bkz,this.BvS],0);},Awk:function(E){if(this.K&&this.K.Awk
)return this.K.Awk.apply(this,arguments);else return C.DeviceClass.Bt$.apply(this
,arguments);},Bt$:function(E){},BvL:function(Aq){this.Awk(Aq);},UpdateAutoRegistrationMode:
function(Bbf){if(this.AutoRegistrationMode===Bbf)return;this.AutoRegistrationMode=
Bbf;A.abo([this,this.BjZ,this.BvL],0);},ArW:function(E){if(this.K&&this.K.ArW)return this.
K.ArW.apply(this,arguments);else return C.DeviceClass.BuX.apply(this,arguments);
},BuX:function(E){A.ab5("%s",CQ);},AZY:function(Aq){this.ArW(Aq);},UpdateScanTransponder:
function(J2,BbI,BbH){if(((this.OQ.Id===J2)&&(this.OQ.TransponderType===BbI))&&(this.
OQ.TransponderProtocol===BbH))return;this.OQ.OnSetId(J2);this.OQ.ATu(BbI);this.OQ.
ATt(BbH);A.abo([this,this.ASu,this.AZY],0);},OL:function(E){if(this.K&&this.K.OL
)return this.K.OL.apply(this,arguments);else return C.DeviceClass.Bui.apply(this
,arguments);},Bui:function(E){},UY:function(Aq){this.OL(Aq);},UpdateDigitsID:function(
Bbn){if(this.A1===Bbn)return;this.A1=Bbn;A.abo([this,this.Ue,this.UY],0);},PP:function(
E){if(this.K&&this.K.PP)return this.K.PP.apply(this,arguments);else return C.DeviceClass.
BuQ.apply(this,arguments);},BuQ:function(E){},UZ:function(Aq){this.PP(Aq);},UpdateOffsetID:
function(Bby){if(this.AF===Bby)return;this.AF=Bby;A.abo([this,this.Uf,this.UZ],0
);},AFR:function(E){if(this.K&&this.K.AFR)return this.K.AFR.apply(this,arguments
);else return C.DeviceClass.Bvk.apply(this,arguments);},Bvk:function(E){A.ab5("%s"
,Fe);},AIN:function(Aq){this.AFR(Aq);},UpdateWeightValue:function(AL){if(this.KV===
AL)return;this.KV=AL;A.abo([this,this.AEy,this.AIN],0);},AwH:function(E){if(this.
K&&this.K.AwH)return this.K.AwH.apply(this,arguments);else return C.DeviceClass.
BuB.apply(this,arguments);},BuB:function(E){},AZQ:function(Aq){this.AwH(Aq);},UpdateMassUnit:
function(AL){if(this.MassUnit===AL)return;this.MassUnit=AL;A.abo([this,this.ASj,
this.AZQ],0);},Arv:function(E){if(this.K&&this.K.Arv)return this.K.Arv.apply(this
,arguments);else return C.DeviceClass.Bac.apply(this,arguments);},Bac:function(E
){},Bar:function(Aq){this.Arv(Aq);},Arw:function(E){if(this.K&&this.K.Arw)return this.
K.Arw.apply(this,arguments);else return C.DeviceClass.Bad.apply(this,arguments);
},Bad:function(E){},AZL:function(Aq){this.Arw(Aq);},UpdateActiveActions:function(
AL){if(this.Pi===AL)return;this.Pi=AL;A.abo([this,this.A7T,this.Bar],0);},UpdateActiveActionsOrder:
function(AL){if(this.Aut===AL)return;this.Aut=AL;A.abo([this,this.AR8,this.AZL],
0);},Ako:function(E){if(this.K&&this.K.Ako)return this.K.Ako.apply(this,arguments
);else return C.DeviceClass.Bae.apply(this,arguments);},Bae:function(E){},Baz:function(
Aq){this.Ako(Aq);},UpdateAutoActions:function(AL){if(this.AutoActions===AL)return;
this.AutoActions=AL;A.abo([this,this.A74,this.Baz],0);},AGF:function(){if(this.K&&
this.K.AGF)return this.K.AGF.apply(this,arguments);else return C.DeviceClass.BvD.
apply(this,arguments);},BvD:function(){},Asy:function(){if(this.K&&this.K.Asy)return this.
K.Asy.apply(this,arguments);else return C.DeviceClass.BvH.apply(this,arguments);
},BvH:function(){},EB:function(E){if(this.K&&this.K.EB)return this.K.EB.apply(this
,arguments);else return C.DeviceClass.Bt8.apply(this,arguments);},Bt8:function(E
){},BvK:function(Aq){this.EB(Aq);},UpdateAnimalType:function(En){if(this.AnimalType===
En)return;this.AnimalType=En;A.abo([this,this.PO,this.BvK],0);},Aw6:function(E){
if(this.K&&this.K.Aw6)return this.K.Aw6.apply(this,arguments);else return C.DeviceClass.
Bvi.apply(this,arguments);},Bvi:function(E){},Ba0:function(Aq){this.Aw6(Aq);},UpdateWeightRecordingMode:
function(BbM){if(this.WeightRecordingMode===BbM)return;this.WeightRecordingMode=
BbM;A.abo([this,this.A8Y,this.Ba0],0);},AFq:function(E){if(this.K&&this.K.AFq)return this.
K.AFq.apply(this,arguments);else return C.DeviceClass.BuS.apply(this,arguments);
},BuS:function(E){A.ab5("%s",L1);},AZU:function(Aq){this.AFq(Aq);},UpdatePredictedTempValue:
function(AL){if(this.AF2===AL)return;this.AF2=AL;A.abo([this,this.ASp,this.AZU],
0);},SN:function(L7){if(this.K&&this.K.SN)return this.K.SN.apply(this,arguments);
else return C.DeviceClass.Bvy.apply(this,arguments);},Bvy:function(L7){},AEW:function(
E){if(this.K&&this.K.AEW)return this.K.AEW.apply(this,arguments);else return C.DeviceClass.
Buh.apply(this,arguments);},Buh:function(E){},AIG:function(Aq){this.AEW(Aq);},UpdateDemoMode:
function(AL){if(this.HF===AL)return;this.HF=AL;A.abo([this,this.AEp,this.AIG],0);
},AEE:function(E){if(this.K&&this.K.AEE)return this.K.AEE.apply(this,arguments);
else return C.DeviceClass.Bt2.apply(this,arguments);},Bt2:function(E){},Bav:function(
Aq){this.AEE(Aq);},UpdateAgeRegistration:function(Bbx){if(this.AdN===Bbx)return;
this.AdN=Bbx;A.abo([this,this.A7Y,this.Bav],0);},Aw7:function(E){if(this.K&&this.
K.Aw7)return this.K.Aw7.apply(this,arguments);else return C.DeviceClass.Bvj.apply(
this,arguments);},Bvj:function(E){},Ba1:function(Aq){this.Aw7(Aq);},UpdateWeightRecordingScope:
function(BbC){if(this.WeightRecordingScope===BbC)return;this.WeightRecordingScope=
BbC;A.abo([this,this.A8Z,this.Ba1],0);},JR:function(E){if(this.K&&this.K.JR)return this.
K.JR.apply(this,arguments);else return C.DeviceClass.Buu.apply(this,arguments);}
,Buu:function(E){},AZP:function(Aq){this.JR(Aq);},UpdateGender:function(L4){if(this.
Gender===L4)return;this.Gender=L4;A.abo([this,this.Ws,this.AZP],0);},ArL:function(
E){if(this.K&&this.K.ArL)return this.K.ArL.apply(this,arguments);else return C.DeviceClass.
Buw.apply(this,arguments);},Buw:function(E){},AyD:function(Aq){this.ArL(Aq);},UpdateIDLastUsedMale:
function(Rm){if(this.AqY===Rm)return;this.AqY=Rm;A.abo([this,this.Av8,this.AyD],
0);},ArK:function(E){if(this.K&&this.K.ArK)return this.K.ArK.apply(this,arguments
);else return C.DeviceClass.Buv.apply(this,arguments);},Buv:function(E){},AyC:function(
Aq){this.ArK(Aq);},UpdateIDLastUsedFemale:function(Rm){if(this.AqX===Rm)return;this.
AqX=Rm;A.abo([this,this.Av7,this.AyC],0);},Zk:function(E){if(this.K&&this.K.Zk)return this.
K.Zk.apply(this,arguments);else return C.DeviceClass.Bt7.apply(this,arguments);}
,Bt7:function(E){},AIE:function(Aq){this.Zk(Aq);},UpdateAnimalListContent:function(
AL){if(this.Kh===AL)return;this.Kh=AL;A.abo([this,this.AEm,this.AIE],0);},AEG:function(
E){if(this.K&&this.K.AEG)return this.K.AEG.apply(this,arguments);else return C.DeviceClass.
Bt3.apply(this,arguments);},Bt3:function(E){},Baw:function(Aq){this.AEG(Aq);},UpdateAlarmListAction:
function(AL){if(this.AL3===AL)return;this.AL3=AL;A.abo([this,this.A70,this.Baw],
0);},AEZ:function(E){if(this.K&&this.K.AEZ)return this.K.AEZ.apply(this,arguments
);else return C.DeviceClass.Bup.apply(this,arguments);},Bup:function(E){},BaE:function(
Aq){this.AEZ(Aq);},UpdateFlashLightInMeasureState:function(Bbt){if(this.AmI===Bbt
)return;this.AmI=Bbt;A.abo([this,this.A7$,this.BaE],0);},AeS:function(E){if(this.
K&&this.K.AeS)return this.K.AeS.apply(this,arguments);else return C.DeviceClass.
Bt6.apply(this,arguments);},Bt6:function(E){},AID:function(Aq){this.AeS(Aq);},UpdateAnimalInfoContent:
function(AL){if(this.D9===AL)return;this.D9=AL;A.abo([this,this.AEl,this.AID],0);
},AFQ:function(E){if(this.K&&this.K.AFQ)return this.K.AFQ.apply(this,arguments);
else return C.DeviceClass.Bve.apply(this,arguments);},Bve:function(E){},BaW:function(
Aq){this.AFQ(Aq);},UpdateWatchListAction:function(AL){if(this.AVn===AL)return;this.
AVn=AL;A.abo([this,this.A8U,this.BaW],0);},AE1:function(E){if(this.K&&this.K.AE1
)return this.K.AE1.apply(this,arguments);else return C.DeviceClass.Bur.apply(this
,arguments);},Bur:function(E){},BaG:function(Aq){this.AE1(Aq);},UpdateFreshCowListAction:
function(AL){if(this.AOt===AL)return;this.AOt=AL;A.abo([this,this.A8b,this.BaG],
0);},ResetActiveActions:function(G){if(this.K&&this.K.ResetActiveActions)return this.
K.ResetActiveActions.apply(this,arguments);else return C.DeviceClass.Bvq.apply(this
,arguments);},Bvq:function(G){},BFJ:function(s){this.ResetActiveActions(s);},ResetAutoActions:
function(G){if(this.K&&this.K.ResetAutoActions)return this.K.ResetAutoActions.apply(
this,arguments);else return C.DeviceClass.Bvs.apply(this,arguments);},Bvs:function(
G){},BFL:function(s){this.ResetAutoActions(s);},Awi:function(E){if(this.K&&this.
K.Awi)return this.K.Awi.apply(this,arguments);else return C.DeviceClass.Bt9.apply(
this,arguments);},Bt9:function(E){},Bax:function(Aq){this.Awi(Aq);},ArY:function(
E){if(this.K&&this.K.ArY)return this.K.ArY.apply(this,arguments);else return C.DeviceClass.
Bu4.apply(this,arguments);},Bu4:function(E){},BaR:function(Aq){this.ArY(Aq);},ArZ:
function(E){if(this.K&&this.K.ArZ)return this.K.ArZ.apply(this,arguments);else return C.
DeviceClass.Bu5.apply(this,arguments);},Bu5:function(E){},BaS:function(Aq){this.
ArZ(Aq);},Asj:function(G){if(this.K&&this.K.Asj)return this.K.Asj.apply(this,arguments
);else return C.DeviceClass.Bvv.apply(this,arguments);},Bvv:function(G){},BFO:function(
s){this.Asj(s);},UpdateTemperaturesLowString:function(AL){if(this.AGN===AL)return;
this.AGN=AL;A.abo([this,this.A8L,this.BaS],0);},UpdateTemperaturesHighString:function(
AL){if(this.AGM===AL)return;this.AGM=AL;A.abo([this,this.A8K,this.BaR],0);},UpdateAnimalTypesString:
function(AL){if(this.ABB===AL)return;this.ABB=AL;A.abo([this,this.A72,this.Bax],
0);},AwB:function(E){if(this.K&&this.K.AwB)return this.K.AwB.apply(this,arguments
);else return C.DeviceClass.But.apply(this,arguments);},But:function(E){},BaI:function(
Aq){this.AwB(Aq);},UpdateFreshCowsHideMeasured:function(AL){if(this.AqL===AL)return;
this.AqL=AL;A.abo([this,this.A8d,this.BaI],0);},ArR:function(E){if(this.K&&this.
K.ArR)return this.K.ArR.apply(this,arguments);else return C.DeviceClass.BuM.apply(
this,arguments);},BuM:function(E){},BaN:function(Aq){this.ArR(Aq);},UpdateNaisIdLastUsedMale:
function(Xi){if(this.AD$===Xi)return;this.AD$=Xi;A.abo([this,this.A8t,this.BaN],
0);},ArQ:function(E){if(this.K&&this.K.ArQ)return this.K.ArQ.apply(this,arguments
);else return C.DeviceClass.BuL.apply(this,arguments);},BuL:function(E){},BaM:function(
Aq){this.ArQ(Aq);},UpdateNaisIdLastUsedFemale:function(Xi){if(this.AD_===Xi)return;
this.AD_=Xi;A.abo([this,this.A8s,this.BaM],0);},AwO:function(E){if(this.K&&this.
K.AwO)return this.K.AwO.apply(this,arguments);else return C.DeviceClass.BuJ.apply(
this,arguments);},BuJ:function(E){},AyF:function(Aq){this.AwO(Aq);},UpdateNaisIdIncrementMale:
function(Ali){if(this.ARE===Ali)return;this.ARE=Ali;A.abo([this,this.Awa,this.AyF
],0);},AwN:function(E){if(this.K&&this.K.AwN)return this.K.AwN.apply(this,arguments
);else return C.DeviceClass.BuI.apply(this,arguments);},BuI:function(E){},AyE:function(
Aq){this.AwN(Aq);},UpdateNaisIdIncrementFemale:function(Ali){if(this.ARD===Ali)return;
this.ARD=Ali;A.abo([this,this.Av$,this.AyE],0);},UpdateFirmware:function(){if(this.
K&&this.K.UpdateFirmware)return this.K.UpdateFirmware.apply(this,arguments);else
return C.DeviceClass.Baj.apply(this,arguments);},Baj:function(){},Anp:function(E
){if(this.K&&this.K.Anp)return this.K.Anp.apply(this,arguments);else return C.DeviceClass.
Buc.apply(this,arguments);},Buc:function(E){},BaA:function(Aq){this.Anp(Aq);},UpdateBootloaderMessage:
function(AL){if(this.Aql===AL)return;this.Aql=AL;A.abo([this,this.A77,this.BaA],
0);},AEB:function(E){if(this.K&&this.K.AEB)return this.K.AEB.apply(this,arguments
);else return C.DeviceClass.BtX.apply(this,arguments);},BtX:function(E){},Bap:function(
Aq){this.AEB(Aq);},UpdateActionListAction:function(AL){if(this.ABu===AL)return;this.
ABu=AL;A.abo([this,this.A7R,this.Bap],0);},Awg:function(E){if(this.K&&this.K.Awg
)return this.K.Awg.apply(this,arguments);else return C.DeviceClass.BtY.apply(this
,arguments);},BtY:function(E){},Baq:function(Aq){this.Awg(Aq);},UpdateActionListHideMeasured:
function(AL){if(this.Ap9===AL)return;this.Ap9=AL;A.abo([this,this.A7S,this.Baq],
0);},Ug:function(E){if(this.K&&this.K.Ug)return this.K.Ug.apply(this,arguments);
else return C.DeviceClass.Bt5.apply(this,arguments);},Bt5:function(E){},Aot:function(
Aq){this.Ug(Aq);},UpdateAnimalIdGenerationMethod:function(BbR){if(this.Ii===BbR)
return;this.Ii=BbR;A.abo([this,this.Ani,this.Aot],0);},Awt:function(E){if(this.K&&
this.K.Awt)return this.K.Awt.apply(this,arguments);else return C.DeviceClass.Buj.
apply(this,arguments);},Buj:function(E){},AZN:function(Aq){this.Awt(Aq);},UpdateDirectionOfCountingFemale:
function(Alc){if(this.ACp===Alc)return;this.ACp=Alc;A.abo([this,this.ASc,this.AZN
],0);},Awu:function(E){if(this.K&&this.K.Awu)return this.K.Awu.apply(this,arguments
);else return C.DeviceClass.Buk.apply(this,arguments);},Buk:function(E){},AZO:function(
Aq){this.Awu(Aq);},UpdateDirectionOfCountingMale:function(Alc){if(this.ACq===Alc
)return;this.ACq=Alc;A.abo([this,this.ASd,this.AZO],0);},Awv:function(E){if(this.
K&&this.K.Awv)return this.K.Awv.apply(this,arguments);else return C.DeviceClass.
Bul.apply(this,arguments);},Bul:function(E){},AIH:function(Aq){this.Awv(Aq);},UpdateDirectionOfCountingUnisex:
function(Alc){if(this.AuT===Alc)return;this.AuT=Alc;A.abo([this,this.AEq,this.AIH
],0);},ArM:function(E){if(this.K&&this.K.ArM)return this.K.ArM.apply(this,arguments
);else return C.DeviceClass.Bux.apply(this,arguments);},Bux:function(E){},Aou:function(
Aq){this.ArM(Aq);},UpdateIDLastUsedUnisex:function(Rm){if(this.AjO===Rm)return;this.
AjO=Rm;A.abo([this,this.Anl,this.Aou],0);},ArS:function(E){if(this.K&&this.K.ArS
)return this.K.ArS.apply(this,arguments);else return C.DeviceClass.BuN.apply(this
,arguments);},BuN:function(E){},AZS:function(Aq){this.ArS(Aq);},UpdateNaisIdLastUsedUnisex:
function(Xi){if(this.AvV===Xi)return;this.AvV=Xi;A.abo([this,this.ASl,this.AZS],
0);},AwP:function(E){if(this.K&&this.K.AwP)return this.K.AwP.apply(this,arguments
);else return C.DeviceClass.BuK.apply(this,arguments);},BuK:function(E){},AyG:function(
Aq){this.AwP(Aq);},UpdateNaisIdIncrementUnisex:function(Ali){if(this.ARF===Ali)return;
this.ARF=Ali;A.abo([this,this.Awb,this.AyG],0);},Akq:function(E){if(this.K&&this.
K.Akq)return this.K.Akq.apply(this,arguments);else return C.DeviceClass.Bun.apply(
this,arguments);},Bun:function(E){},AyB:function(Aq){this.Akq(Aq);},UpdateEartagNrAssignmentMode:
function(Ald){if(this.EartagNrAssignmentMode===Ald)return;this.EartagNrAssignmentMode=
Ald;A.abo([this,this.Av6,this.AyB],0);},NY:function(E){if(this.K&&this.K.NY)return this.
K.NY.apply(this,arguments);else return C.DeviceClass.Bue.apply(this,arguments);}
,Bue:function(E){},BvN:function(Aq){this.NY(Aq);},UpdateBreed:function(AcU){if(this.
Breed===AcU)return;this.Breed=AcU;A.abo([this,this.Av2,this.BvN],0);},AFj:function(
E){if(this.K&&this.K.AFj)return this.K.AFj.apply(this,arguments);else return C.DeviceClass.
BuF.apply(this,arguments);},BuF:function(E){},BvQ:function(Aq){this.AFj(Aq);},UpdateMiddlewareVersions:
function(Qd,A0A,A0B,A0H,A0p){this.Sw.OnSetTimestamp(Qd);this.Sw.AFe(A0A);this.Sw.
AFk(A0B);this.Sw.AFt(A0H);this.Sw.AEV(A0p);A.abo([this,this.Bku,this.BvQ],0);},AFd:
function(E){if(this.K&&this.K.AFd)return this.K.AFd.apply(this,arguments);else return C.
DeviceClass.Buz.apply(this,arguments);},Buz:function(E){},BvP:function(Aq){this.
AFd(Aq);},UpdateMainboardVersions:function(Qd,A0y,A0z,A0x,A0N,A0O,A0M){this.QW.OnSetTimestamp(
Qd);this.QW.AFb(A0y);this.QW.AFc(A0z);this.QW.AFa(A0x);this.QW.AFI(A0N);this.QW.
AFJ(A0O);this.QW.AFH(A0M);A.abo([this,this.Bks,this.BvP],0);},AFK:function(E){if(
this.K&&this.K.AFK)return this.K.AFK.apply(this,arguments);else return C.DeviceClass.
Bu7.apply(this,arguments);},Bu7:function(E){},BvW:function(Aq){this.AFK(Aq);},UpdateTorchboardVersions:
function(Qd,A0y,A0z,A0x,A0N,A0O,A0M){this.SW.OnSetTimestamp(Qd);this.SW.AFb(A0y);
this.SW.AFc(A0z);this.SW.AFa(A0x);this.SW.AFI(A0N);this.SW.AFJ(A0O);this.SW.AFH(
A0M);A.abo([this,this.BkR,this.BvW],0);},AEL:function(E){if(this.K&&this.K.AEL)return this.
K.AEL.apply(this,arguments);else return C.DeviceClass.Bud.apply(this,arguments);
},Bud:function(E){},BvM:function(Aq){this.AEL(Aq);},UpdateBootloaderVersions:function(
Qd,A0A,A0B,A0H,A0p){this.RX.OnSetTimestamp(Qd);this.RX.AFe(A0A);this.RX.AFk(A0B);
this.RX.AFt(A0H);this.RX.AEV(A0p);A.abo([this,this.Bj2,this.BvM],0);},AEX:function(
E){if(this.K&&this.K.AEX)return this.K.AEX.apply(this,arguments);else return C.DeviceClass.
Bum.apply(this,arguments);},Bum:function(E){},BaD:function(Aq){this.AEX(Aq);},UpdateDryCowListAction:
function(AL){if(this.ANR===AL)return;this.ANR=AL;A.abo([this,this.A79,this.BaD],
0);},AJy:function(A0q){if(this.K&&this.K.AJy)return this.K.AJy.apply(this,arguments
);else return C.DeviceClass.Bv8.apply(this,arguments);},Bv8:function(A0q){return false;
},AEK:function(E){if(this.K&&this.K.AEK)return this.K.AEK.apply(this,arguments);
else return C.DeviceClass.Bub.apply(this,arguments);},Bub:function(E){},AIF:function(
Aq){this.AEK(Aq);},UpdateBirthListView:function(AL){if(this.Aqj===AL)return;this.
Aqj=AL;A.abo([this,this.AEn,this.AIF],0);},BatchResetBirthNoticePending:function(
){var O;var AiS=0;var Add=A._GetAutoObject(C.Device).An.Filter;var Be=A._GetAutoObject(
C.Helper).AOx();A._GetAutoObject(C.Device).An.Bk(Be);for(O=0;O<A._GetAutoObject(
C.Device).An.B9();O++){A._GetAutoObject(C.Helper).G6(O);A._GetAutoObject(C.Helper
).W.Ae1(false);A._GetAutoObject(C.Helper).W.Cg(A._GetAutoObject(C.Device).An);AiS++;
}A._GetAutoObject(C.Device).An.Bk(Add);return AiS;},UpdateTransferProgress:function(
AL){if(this.AxG===AL)return;this.AxG=AL;A.abo([this,this.ASy,this.AZ1],0);},AFL:
function(E){if(this.K&&this.K.AFL)return this.K.AFL.apply(this,arguments);else return C.
DeviceClass.Bu8.apply(this,arguments);},Bu8:function(E){A.ab5("%s",P6);},AZ1:function(
Aq){this.AFL(Aq);},UpdateTransferTarget:function(AL){if(this.Afm===AL)return;this.
Afm=AL;A.abo([this,this.A8O,this.BaT],0);},Ar0:function(E){if(this.K&&this.K.Ar0
)return this.K.Ar0.apply(this,arguments);else return C.DeviceClass.Bu9.apply(this
,arguments);},Bu9:function(E){A.ab5("%s",J0);},BaT:function(Aq){this.Ar0(Aq);},Asx:
function(){if(this.K&&this.K.Asx)return this.K.Asx.apply(this,arguments);else return C.
DeviceClass.BvG.apply(this,arguments);},BvG:function(){},AwT:function(E){if(this.
K&&this.K.AwT)return this.K.AwT.apply(this,arguments);else return C.DeviceClass.
BuT.apply(this,arguments);},BuT:function(E){},AZV:function(Aq){this.AwT(Aq);},UpdatePremisesID:
function(Rm){if(this.SI===Rm)return;this.SI=Rm;A.abo([this,this.ASq,this.AZV],0);
},AwM:function(E){if(this.K&&this.K.AwM)return this.K.AwM.apply(this,arguments);
else return C.DeviceClass.BuH.apply(this,arguments);},BuH:function(E){},AIK:function(
Aq){this.AwM(Aq);},UpdateMotherSelectionDriedOffFilter:function(AL){if(this.AbQ===
AL)return;this.AbQ=AL;A.abo([this,this.AEu,this.AIK],0);},AE2:function(E){if(this.
K&&this.K.AE2)return this.K.AE2.apply(this,arguments);else return C.DeviceClass.
Bus.apply(this,arguments);},Bus:function(E){},BaH:function(Aq){this.AE2(Aq);},UpdateFreshCowSpan:
function(AL){if(this.AqK===AL)return;this.AqK=AL;A.abo([this,this.A8c,this.BaH],
0);},UpdateUSBState:function(BbJ){if(this.AhP===BbJ)return;this.AhP=BbJ;A.abo([this
,this.Wt,this.Xb],0);},AFM:function(E){if(this.K&&this.K.AFM)return this.K.AFM.apply(
this,arguments);else return C.DeviceClass.Bva.apply(this,arguments);},Bva:function(
E){A.ab5("%s",E6);},Xb:function(Aq){this.AFM(Aq);},Axw:function(){if(this.K&&this.
K.Axw)return this.K.Axw.apply(this,arguments);else return C.DeviceClass.BvA.apply(
this,arguments);},BvA:function(){},Aq_:function(){if(this.K&&this.K.Aq_)return this.
K.Aq_.apply(this,arguments);else return C.DeviceClass.BtW.apply(this,arguments);
},BtW:function(){return false;},Aqv:function(){if(this.K&&this.K.Aqv)return this.
K.Aqv.apply(this,arguments);else return C.DeviceClass.BtR.apply(this,arguments);
},BtR:function(){},AFx:function(E){if(this.K&&this.K.AFx)return this.K.AFx.apply(
this,arguments);else return C.DeviceClass.BuY.apply(this,arguments);},BuY:function(
E){},BvT:function(Aq){this.AFx(Aq);},UpdateSerialNumber:function(AL){if(this.AhF===
AL)return;this.AhF=AL;A.abo([this,this.BkG,this.BvT],0);},Awh:function(E){if(this.
K&&this.K.Awh)return this.K.Awh.apply(this,arguments);else return C.DeviceClass.
Bt4.apply(this,arguments);},Bt4:function(E){},AZM:function(Aq){this.Awh(Aq);},UpdateAnimalIdAutoGenerationMethod:
function(BbQ){if(this.Agu===BbQ)return;this.Agu=BbQ;A.abo([this,this.AR9,this.AZM
],0);},ACd:function(){return false;},AGf:function(){return false;},AFz:function(
E){if(this.K&&this.K.AFz)return this.K.AFz.apply(this,arguments);else return C.DeviceClass.
BuZ.apply(this,arguments);},BuZ:function(E){},BaQ:function(Aq){this.AFz(Aq);},UpdateShutdownTimer:
function(AL){if(this.AUz===AL)return;this.AUz=AL;A.abo([this,this.A8H,this.BaQ],
0);},Ask:function(G){if(this.K&&this.K.Ask)return this.K.Ask.apply(this,arguments
);else return C.DeviceClass.Bvw.apply(this,arguments);},Bvw:function(G){},BFP:function(
s){this.Ask(s);},Ar3:function(E){if(this.K&&this.K.Ar3)return this.K.Ar3.apply(this
,arguments);else return C.DeviceClass.Bvg.apply(this,arguments);},Bvg:function(E
){},BaY:function(Aq){this.Ar3(Aq);},Ar4:function(E){if(this.K&&this.K.Ar4)return this.
K.Ar4.apply(this,arguments);else return C.DeviceClass.Bvh.apply(this,arguments);
},Bvh:function(E){},BaZ:function(Aq){this.Ar4(Aq);},UpdateWeightGainsLowString:function(
AL){if(this.AG8===AL)return;this.AG8=AL;A.abo([this,this.A8X,this.BaZ],0);},UpdateWeightGainsHighString:
function(AL){if(this.AG7===AL)return;this.AG7=AL;A.abo([this,this.A8W,this.BaY],
0);},Awj:function(E){if(this.K&&this.K.Awj)return this.K.Awj.apply(this,arguments
);else return C.DeviceClass.Bt_.apply(this,arguments);},Bt_:function(E){},Bay:function(
Aq){this.Awj(Aq);},UpdateAnimalTypesWeightGainsString:function(AL){if(this.ABC===
AL)return;this.ABC=AL;A.abo([this,this.A73,this.Bay],0);},Ar2:function(E){if(this.
K&&this.K.Ar2)return this.K.Ar2.apply(this,arguments);else return C.DeviceClass.
Bvf.apply(this,arguments);},Bvf:function(E){},BaX:function(Aq){this.Ar2(Aq);},Ar5:
function(E){if(this.K&&this.K.Ar5)return this.K.Ar5.apply(this,arguments);else return C.
DeviceClass.Bvl.apply(this,arguments);},Bvl:function(E){},Ba2:function(Aq){this.
Ar5(Aq);},UpdateWeightValueBirthString:function(AL){if(this.AG$===AL)return;this.
AG$=AL;A.abo([this,this.A80,this.Ba2],0);},UpdateWeightGainsAverageString:function(
AL){if(this.AG6===AL)return;this.AG6=AL;A.abo([this,this.A8V,this.BaX],0);},Aww:
function(E){if(this.K&&this.K.Aww)return this.K.Aww.apply(this,arguments);else return C.
DeviceClass.Buo.apply(this,arguments);},Buo:function(E){},BvO:function(Aq){this.
Aww(Aq);},UpdateEvaluationAnimalType:function(En){if(this.ACx===En)return;this.ACx=
En;A.abo([this,this.Bkb,this.BvO],0);},UpdateStartScreen:function(AL){if(this.Axy===
AL)return;this.Axy=AL;A.abo([this,this.BkH,this.BvU],0);},AwX:function(E){if(this.
K&&this.K.AwX)return this.K.AwX.apply(this,arguments);else return C.DeviceClass.
Bu0.apply(this,arguments);},Bu0:function(E){},BvU:function(Aq){this.AwX(Aq);},ADM:
function(){if(this.K&&this.K.ADM)return this.K.ADM.apply(this,arguments);else return C.
DeviceClass.BtU.apply(this,arguments);},BtU:function(){return 1;},ADN:function(){
if(this.K&&this.K.ADN)return this.K.ADN.apply(this,arguments);else return C.DeviceClass.
BtV.apply(this,arguments);},BtV:function(){return 1;},GetCommitCount:function(){
return 1953;},GetCommitEpoch:function(){return 1711385184;},GetCommitHash:function(
){return A.kR.Bg$;},GetVersionMajor:function(){return 0;},GetVersionMinor:function(
){return 9;},GetVersionRev:function(){return 9;},AFi:function(E){if(this.K&&this.
K.AFi)return this.K.AFi.apply(this,arguments);else return C.DeviceClass.BuD.apply(
this,arguments);},BuD:function(E){},BaL:function(Aq){this.AFi(Aq);},UpdateMaximumAgeNewOnFarm:
function(AL){if(this.AvQ===AL)return;this.AvQ=AL;A.abo([this,this.A8r,this.BaL],
0);},Aw3:function(E){if(this.K&&this.K.Aw3)return this.K.Aw3.apply(this,arguments
);else return C.DeviceClass.Bu_.apply(this,arguments);},Bu_:function(E){},AZ2:function(
Aq){this.Aw3(Aq);},UpdateTransponderAssignmentIdChangeMethod:function(AyV){if(this.
AkY===AyV)return;this.AkY=AyV;A.abo([this,this.ASz,this.AZ2],0);},BatchResetPurchasedNoticePending:
function(){var O;var AiS=0;var Add=A._GetAutoObject(C.Device).An.Filter;var Be=A.
_GetAutoObject(C.Helper).Avh();A._GetAutoObject(C.Device).An.Bk(Be);for(O=0;O<A.
_GetAutoObject(C.Device).An.B9();O++){A._GetAutoObject(C.Helper).G6(O);A._GetAutoObject(
C.Helper).W.Ae1(false);A._GetAutoObject(C.Helper).W.Cg(A._GetAutoObject(C.Device
).An);AiS++;}A._GetAutoObject(C.Device).An.Bk(Add);return AiS;},Bmt:function(E){
},UpdateMassRecordingAutomatic:function(AL){if(this.ARq===AL)return;this.ARq=AL;
A.abo([this,this.Bkt,this.Bmt],0);},Nf:function(E){if(this.K&&this.K.Nf)return this.
K.Nf.apply(this,arguments);else return C.DeviceClass.Bvm.apply(this,arguments);}
,Bvm:function(E){},BvX:function(Aq){this.Nf(Aq);},UpdateWhereAbouts:function(AfI
){if(this.WhereAbouts===AfI)return;this.WhereAbouts=AfI;A.abo([this,this.Awe,this.
BvX],0);},Ary:function(E){if(this.K&&this.K.Ary)return this.K.Ary.apply(this,arguments
);else return C.DeviceClass.BtZ.apply(this,arguments);},BtZ:function(E){},Bas:function(
Aq){this.Ary(Aq);},Arz:function(E){if(this.K&&this.K.Arz)return this.K.Arz.apply(
this,arguments);else return C.DeviceClass.Bt0.apply(this,arguments);},Bt0:function(
E){},Bat:function(Aq){this.Arz(Aq);},UpdateActiveMassRecordingFields:function(AL
){if(this.ABv===AL)return;this.ABv=AL;A.abo([this,this.A7U,this.Bas],0);},UpdateActiveMassRecordingFieldsOrder:
function(AL){if(this.ABw===AL)return;this.ABw=AL;A.abo([this,this.A7V,this.Bat],
0);},Ash:function(G){if(this.K&&this.K.Ash)return this.K.Ash.apply(this,arguments
);else return C.DeviceClass.Bvr.apply(this,arguments);},Bvr:function(G){},BFK:function(
s){this.Ash(s);},AFg:function(E){if(this.K&&this.K.AFg)return this.K.AFg.apply(this
,arguments);else return C.DeviceClass.BuA.apply(this,arguments);},BuA:function(E
){},AII:function(Aq){this.AFg(Aq);},UpdateMassRecordingDateOfBirthMandatory:function(
AL){if(this.AeJ===AL)return;this.AeJ=AL;A.abo([this,this.AEr,this.AII],0);},AFf:
function(E){this.UpdateMassRecordingCounter(E);},UpdateMassRecordingCounter:function(
AL){if(this.AvO===AL)return;this.AvO=AL;A.abo([this,this.A8p,this.AFf],0);},Ajv:
function(){if(this.K&&this.K.Ajv)return this.K.Ajv.apply(this,arguments);else return C.
DeviceClass.BtP.apply(this,arguments);},BtP:function(){return false;},Aqh:function(
){if(this.K&&this.K.Aqh)return this.K.Aqh.apply(this,arguments);else return C.DeviceClass.
BtO.apply(this,arguments);},BtO:function(){return false;},Aqg:function(){if(this.
K&&this.K.Aqg)return this.K.Aqg.apply(this,arguments);else return C.DeviceClass.
BtN.apply(this,arguments);},BtN:function(){return false;},AuH:function(){if(this.
K&&this.K.AuH)return this.K.AuH.apply(this,arguments);else return C.DeviceClass.
BtQ.apply(this,arguments);},BtQ:function(){return false;},AwJ:function(E){if(this.
K&&this.K.AwJ)return this.K.AwJ.apply(this,arguments);else return C.DeviceClass.
BuC.apply(this,arguments);},BuC:function(E){},BaK:function(Aq){this.AwJ(Aq);},UpdateMaxWeightValuePrecision:
function(AL){if(this.OJ===AL)return;this.OJ=AL;A.abo([this,this.A8q,this.BaK],0);
},AwQ:function(E){if(this.K&&this.K.AwQ)return this.K.AwQ.apply(this,arguments);
else return C.DeviceClass.BuO.apply(this,arguments);},BuO:function(E){},BaO:function(
Aq){this.AwQ(Aq);},UpdateNoNaisIdListActions:function(AL){if(this.ARR===AL)return;
this.ARR=AL;A.abo([this,this.A8u,this.BaO],0);},ResetNoNaisIdListActions:function(
G){if(this.K&&this.K.ResetNoNaisIdListActions)return this.K.ResetNoNaisIdListActions.
apply(this,arguments);else return C.DeviceClass.Bvt.apply(this,arguments);},Bvt:
function(G){},BFM:function(s){this.ResetNoNaisIdListActions(s);},AwR:function(E){
if(this.K&&this.K.AwR)return this.K.AwR.apply(this,arguments);else return C.DeviceClass.
BuP.apply(this,arguments);},BuP:function(E){},BaP:function(Aq){this.AwR(Aq);},UpdateNoTransponderListActions:
function(AL){if(this.ARW===AL)return;this.ARW=AL;A.abo([this,this.A8v,this.BaP],
0);},ResetNoTransponderListActions:function(G){if(this.K&&this.K.ResetNoTransponderListActions
)return this.K.ResetNoTransponderListActions.apply(this,arguments);else return C.
DeviceClass.Bvu.apply(this,arguments);},Bvu:function(G){},BFN:function(s){this.ResetNoTransponderListActions(
s);},Aw9:function(E){if(this.K&&this.K.Aw9)return this.K.Aw9.apply(this,arguments
);else return C.DeviceClass.Bvn.apply(this,arguments);},Bvn:function(E){},Ba3:function(
Aq){this.Aw9(Aq);},UpdateYoungNoTransponderListActions:function(AL){if(this.AVC===
AL)return;this.AVC=AL;A.abo([this,this.A82,this.Ba3],0);},ResetYoungNoTransponderListActions:
function(G){if(this.K&&this.K.ResetYoungNoTransponderListActions)return this.K.ResetYoungNoTransponderListActions.
apply(this,arguments);else return C.DeviceClass.Bvx.apply(this,arguments);},Bvx:
function(G){},BFQ:function(s){this.ResetYoungNoTransponderListActions(s);},Aw4:function(
E){if(this.K&&this.K.Aw4)return this.K.Aw4.apply(this,arguments);else return C.DeviceClass.
Bu$.apply(this,arguments);},Bu$:function(E){},AZ3:function(Aq){this.Aw4(Aq);},UpdateTransponderUnlinkIdChangeMethod:
function(AyV){if(this.AnX===AyV)return;this.AnX=AyV;A.abo([this,this.ASA,this.AZ3
],0);},Asg:function(Aox){if(this.K&&this.K.Asg)return this.K.Asg.apply(this,arguments
);else return C.DeviceClass.Bvp.apply(this,arguments);},Bvp:function(Aox){this.GC.
E5();this.GC.AgH=Aox;this.GC.Fb(1);A._GetAutoObject(C.Device).A6(110,true,A.jV,0
,[this,this.BzN]);},BzN:function(G){var As=(C.PopupContext.isPrototypeOf(G)?G:null
);if(!!As&&(As.PopupState===9))A.aaS([this,this.BBq],this);},BBq:function(G){this.
GC.Fb(2);this.Axw();A._GetAutoObject(C.Device).A6(110,false,A.jV,0,null);},AEk:function(
){return this.KG;},Av0:function(){return this.Aa0;},Av3:function(){return this.Amv;
},ASt:function(){return this.ScanState;},AEs:function(){return this.MeasureState;
},AEw:function(){return this.Ls;},A8l:function(){return this.Language;},Arr:function(
){return this.TemperatureUnit;},A78:function(){return this.AMT;},ASk:function(){
return this.AD9;},Awd:function(){return this.OverlayMenu;},A8P:function(){return this.
AcA;},ASv:function(){return this.SyncState;},A8Q:function(){return this.AsH;},AEx:
function(){return this.AVl;},ASs:function(){return this.RatingMode;},Aro:function(
){return this.AmJ;},ASx:function(){return this.AU3;},Bkz:function(){return this.
ATP;},BjZ:function(){return this.AutoRegistrationMode;},ASu:function(){return this.
OQ;},Ue:function(){return this.A1;},Uf:function(){return this.AF;},AEy:function(
){return this.KV;},ASj:function(){return this.MassUnit;},A7T:function(){return this.
Pi;},AR8:function(){return this.Aut;},A74:function(){return this.AutoActions;},PO:
function(){return this.AnimalType;},A8Y:function(){return this.WeightRecordingMode;
},ASp:function(){return this.AF2;},AEp:function(){return this.HF;},A7Y:function(
){return this.AdN;},A8Z:function(){return this.WeightRecordingScope;},Ws:function(
){return this.Gender;},Av8:function(){return this.AqY;},Av7:function(){return this.
AqX;},AEm:function(){return this.Kh;},A70:function(){return this.AL3;},A7$:function(
){return this.AmI;},AEl:function(){return this.D9;},A8U:function(){return this.AVn;
},A8b:function(){return this.AOt;},A72:function(){return this.ABB;},A8K:function(
){return this.AGM;},A8L:function(){return this.AGN;},A8d:function(){return this.
AqL;},A8t:function(){return this.AD$;},A8s:function(){return this.AD_;},Awa:function(
){return this.ARE;},Av$:function(){return this.ARD;},A77:function(){return this.
Aql;},A7R:function(){return this.ABu;},A7S:function(){return this.Ap9;},Ani:function(
){return this.Ii;},ASc:function(){return this.ACp;},ASd:function(){return this.ACq;
},AEq:function(){return this.AuT;},Anl:function(){return this.AjO;},ASl:function(
){return this.AvV;},Awb:function(){return this.ARF;},Av6:function(){return this.
EartagNrAssignmentMode;},Av2:function(){return this.Breed;},Bku:function(){return this.
Sw;},Bks:function(){return this.QW;},BkR:function(){return this.SW;},Bj2:function(
){return this.RX;},A79:function(){return this.ANR;},AEn:function(){return this.Aqj;
},ASy:function(){return this.AxG;},A8O:function(){return this.Afm;},ASq:function(
){return this.SI;},AEu:function(){return this.AbQ;},A8c:function(){return this.AqK;
},Wt:function(){return this.AhP;},BkG:function(){return this.AhF;},AR9:function(
){return this.Agu;},A8H:function(){return this.AUz;},A8W:function(){return this.
AG7;},A8X:function(){return this.AG8;},A73:function(){return this.ABC;},A8V:function(
){return this.AG6;},A80:function(){return this.AG$;},Bkb:function(){return this.
ACx;},BkH:function(){return this.Axy;},A8r:function(){return this.AvQ;},ASz:function(
){return this.AkY;},Bkt:function(){return this.ARq;},Awe:function(){return this.
WhereAbouts;},A7U:function(){return this.ABv;},A7V:function(){return this.ABw;},
AEr:function(){return this.AeJ;},A8p:function(){return this.AvO;},A8q:function(){
return this.OJ;},A8u:function(){return this.ARR;},A8v:function(){return this.ARW;
},A82:function(){return this.AVC;},ASA:function(){return this.AnX;},_Init:function(
aArg){C.Table._Init.call(this.An={I:this},0);C.Table._Init.call(this.Bt={I:this}
,0);C.Table._Init.call(this.Ags={I:this},0);A.Core.A_9._Init.call(this.AnG={I:this
},0);C.Table._Init.call(this.Pm={I:this},0);this.__proto__=C.DeviceClass;this.An.
OnSetId(0);this.Bt.OnSetId(1);this.Ags.OnSetId(3);this.Pm.OnSetId(4);this.OQ=A._NewObject(
C.Transponder,0);this.Sw=A._NewObject(C.Axv,0);this.QW=A._NewObject(C.Avk,0);this.
SW=A._NewObject(C.Avk,0);this.RX=A._NewObject(C.Axv,0);this.GC=A._NewObject(C.VM
,0);var Lv=this._variants();if(Lv){this.K={};Lv._Init.call(this,aArg);}A.h7++;},
_Done:function(){if(this.K)this.K._Done.call(this);this.__proto__=null;this.An._Done(
);this.Bt._Done();this.Ags._Done();this.AnG._Done();this.Pm._Done();A.h7--;},_ReInit:
function(){this.An._ReInit();this.Bt._ReInit();this.Ags._ReInit();this.AnG._ReInit(
);this.Pm._ReInit();if(this.K)this.K._ReInit.call(this);},_Mark:function(D){var B;
if((B=this.OQ)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Sw)&&(B._cycle!=D))
B._Mark(B._cycle=D);if((B=this.QW)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.
SW)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.RX)&&(B._cycle!=D))B._Mark(B._cycle=
D);if((B=this.GC)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.An)._cycle!=D)B.
_Mark(B._cycle=D);if((B=this.Bt)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ags)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.AnG)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
Pm)._cycle!=D)B._Mark(B._cycle=D);if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=
D);if(this.K)this.K._Mark(D);},_variants:function(){return A.acs.DeviceClass._variants(
);},K:null,I:null,_cycle:0,_observers:null,_className:"Device::DeviceClass"};C.Device={
_Init:function(){C.DeviceClass._Init.call(this,0);},_ReInit:function(){},_variants:
function(){return this;},_this:null};C.ScreenType={UNDEFINED:0,Sleep:1,Boot:2,Home:
3,Charge:4,Sync:5,Settings:6,EditAnimalData:7,AnimalList:8,AnimalListFilter:9,AnimalActionTemperature:
10,AnimalActionRate:11,AlarmList:12,ControlMeasure:13,ControlList:14,RangeTest:15
,DateTimeSettings:16,TemperatureSettings:17,DeviceSettings:18,RegistrationSettings:
19,WatchList:20,AnimalActionWeighing:21,UnitsSettings:22,WeightGainSettings:23,AnimalActionActions:
24,EvaluationMenuMain:25,NewAnimals:26,MassRecordingScreen:27,NewAnimalManualData:
28,AnimalActionUnregister:29,AnimalActionNewbornCare:30,NewAnimalTransponderData:
31,SetTransponderScreen:32,WeightListScreen:33,AutoActionScanScreen:34,ManualActionScanScreen:
35,AnimalSingleInfoScreen:36,InitializationSettings:37,ControlledPowerOff:38,ChargeWarning:
39,AlarmListFilter:40,WatchListFilter:41,DataAcquisitionSettings:42,FreshCowList:
43,FreshCowListFilter:44,SetSaveTransponderScreen:45,NoTransponderList:46,NoTransponderListFilter:
47,AnimalActionPerished:48,NewAnimalSetTransponderScreen:49,AnimalMultiInfoScreen:
50,ActionList:51,ActionListFilter:52,Update:53,NewAnimalCalvingData:54,NewAnimalsSetTransponderScreen:
55,EvaluationTemperatures:56,EvaluationWeights:57,EvaluationRatings:58,EvaluationLosses:
59,TemperatureMeasurement:60,DryCowList:61,DryCowListFilter:62,DeviceMain:63,DeviceService:
64,DeviceCheck:65,EvaluationMenuWeights:66,EvaluationBirthWeights:67,EvaluationWeightsRecent:
68,ListsMain:69,ListsIdManagement:70,NoNaisIdList:71,NoNaisIdListFilter:72,RegistrationsListFilter:
73,BirthRegistrationsList:74,AnimalRegistrationDetails:75,PremisesSettings:76,NewMenu:
77,NewAnimalLoss:78,MotherScanScreen:79,SetSaveNaisIdScreen:80,EditAnimalDataNaisId:
81,DeviceInfo:82,DeviceDatamanagement:83,AnimalEvaluationFilter:84,YoungNoTransponderList:
85,YoungNoTransponderListFilter:86,RegistrationPresettingsSettings:87,RegistrationAutomaticSettings:
88,TransponderAssignmentSettings:89,PurchasedAnimalsList:90,TextInput:91,DeviceAnimalDataMenu:
92,DeviceDeviceDataMenu:93,AnimalActions:94,TransponderUnlinkSettings:95,LAST:96
};C.Operator={Equal:0,None:1,Greater:2,Less:3,Contains:4,Unequal:5};C.MeasureState={
Idle:0,Progress:1,Prediction:2,Ready:3,Error:4,LAST:5};C.StringFilterCriterion={
A4:A.jV,Abe:function(){var Av=A._NewObject(C.StringFilterCriterion,0);Av.E_(this
);return Av;},E_:function(AI){C.FilterCriterion.E_.call(this,AI);var Av=(C.StringFilterCriterion.
isPrototypeOf(AI)?AI:null);if(!!Av)this.A4=Av.A4;},_Init:function(aArg){C.FilterCriterion.
_Init.call(this,aArg);this.__proto__=C.StringFilterCriterion;},_className:"Device::StringFilterCriterion"
};C.Table={CF:function(Ad,A3){if(this.K&&this.K.CF)return this.K.CF.apply(this,arguments
);else return C.ITable.CF.apply(this,arguments);},VU:function(Ad,A3){if(this.K&&
this.K.VU)return this.K.VU.apply(this,arguments);else return C.ITable.VU.apply(this
,arguments);},H2:function(Ad,A3){if(this.K&&this.K.H2)return this.K.H2.apply(this
,arguments);else return C.ITable.H2.apply(this,arguments);},OnSetId:function(E){
if(this.K&&this.K.OnSetId)return this.K.OnSetId.apply(this,arguments);else return C.
ITable.OnSetId.apply(this,arguments);},B9:function(){if(this.K&&this.K.B9)return this.
K.B9.apply(this,arguments);else return C.ITable.B9.apply(this,arguments);},Bk:function(
E){if(this.K&&this.K.Bk)return this.K.Bk.apply(this,arguments);else return C.ITable.
Bk.apply(this,arguments);},VV:function(Ad,A3){if(this.K&&this.K.VV)return this.K.
VV.apply(this,arguments);else return C.ITable.VV.apply(this,arguments);},Sh:function(
Ad,A3){if(this.K&&this.K.Sh)return this.K.Sh.apply(this,arguments);else return C.
ITable.Sh.apply(this,arguments);},Ox:function(){if(this.K&&this.K.Ox)return this.
K.Ox.apply(this,arguments);else return C.ITable.Ox.apply(this,arguments);},Oz:function(
AoJ){if(this.K&&this.K.Oz)return this.K.Oz.apply(this,arguments);else return C.ITable.
Oz.apply(this,arguments);},YA:function(){if(this.K&&this.K.YA)return this.K.YA.apply(
this,arguments);else return C.ITable.YA.apply(this,arguments);},ZG:function(Ad,A3
,CZ){if(this.K&&this.K.ZG)return this.K.ZG.apply(this,arguments);else return C.ITable.
ZG.apply(this,arguments);},Hm:function(Ad,A3,CZ){if(this.K&&this.K.Hm)return this.
K.Hm.apply(this,arguments);else return C.ITable.Hm.apply(this,arguments);},ZF:function(
Ad,A3,CZ){if(this.K&&this.K.ZF)return this.K.ZF.apply(this,arguments);else return C.
ITable.ZF.apply(this,arguments);},N4:function(Ad,A3,CZ){if(this.K&&this.K.N4)return this.
K.N4.apply(this,arguments);else return C.ITable.N4.apply(this,arguments);},ZE:function(
Ad,A3,CZ){if(this.K&&this.K.ZE)return this.K.ZE.apply(this,arguments);else return C.
ITable.ZE.apply(this,arguments);},LS:function(aColumn,A9){if(this.K&&this.K.LS)return this.
K.LS.apply(this,arguments);else return C.ITable.LS.apply(this,arguments);},KM:function(
Ad,A3){if(this.K&&this.K.KM)return this.K.KM.apply(this,arguments);else return C.
ITable.KM.apply(this,arguments);},Uv:function(Ad,A3,CZ){if(this.K&&this.K.Uv)return this.
K.Uv.apply(this,arguments);else return C.ITable.Uv.apply(this,arguments);},AgT:function(
aColumn,A9){if(this.K&&this.K.AgT)return this.K.AgT.apply(this,arguments);else return C.
ITable.AgT.apply(this,arguments);},E5:function(){if(this.K&&this.K.E5)return this.
K.E5.apply(this,arguments);else return C.ITable.E5.apply(this,arguments);},AjE:function(
aColumn,A9){if(this.K&&this.K.AjE)return this.K.AjE.apply(this,arguments);else return C.
ITable.AjE.apply(this,arguments);},Aeg:function(aColumn,A9){if(this.K&&this.K.Aeg
)return this.K.Aeg.apply(this,arguments);else return C.ITable.Aeg.apply(this,arguments
);},HI:function(){if(this.K&&this.K.HI)return this.K.HI.apply(this,arguments);else
return C.ITable.HI.apply(this,arguments);},Abm:function(){if(this.K&&this.K.Abm)
return this.K.Abm.apply(this,arguments);else return C.ITable.Abm.apply(this,arguments
);},QF:function(){if(this.K&&this.K.QF)return this.K.QF.apply(this,arguments);else
return C.ITable.QF.apply(this,arguments);},_Init:function(aArg){C.ITable._Init.call(
this,aArg);this.__proto__=C.Table;var Lv=this._variants();if(Lv){this.K={};Lv._Init.
call(this,aArg);}},_Done:function(){if(this.K)this.K._Done.call(this);this.__proto__=
C.ITable;C.ITable._Done.call(this);},_ReInit:function(){C.ITable._ReInit.call(this
);if(this.K)this.K._ReInit.call(this);},_Mark:function(D){C.ITable._Mark.call(this
,D);if(this.K)this.K._Mark(D);},_variants:function(){return A.acs.Table._variants(
);},K:null,_className:"Device::Table"};C.TableId={Animal:0,Rating:1,Undefined:2,
AnimalGroup:3,CalfDeregistrations:4};C.ScanState={Idle:0,Progress:1,IdScanned:2,
NotFound:3,Error:4,LAST:5};C.RatedAttribute={None:0,Feed:1,Appearance:2,Respiratory:
3,Faeces:4};C.ConverterClass={M0:null,AkV:function(AoH){var Bco;var Auf=this.AUS(
AoH/100,0,A._GetAutoObject(C.Device).TemperatureUnit);Bco=A.abk(Auf,0,1);return Bco;
},A$f:function(Nn){if(Nn<=0)return 0;else if(Nn<=1)return 5;else if(Nn<=2)return 3;
else if(Nn<=4)return 2;else if(Nn<=6)return 1;else if(Nn<=8)return 4;else return 0;
},AdW:function(Nn){var a=0;switch(Nn){case 3:a=2;break;case 2:a=4;break;case 1:a=
6;break;case 0:a=0;break;case 4:a=8;break;case 5:a=1;break;default:A.ab5("%s",N_
);}return a;},Asz:function(En,Rq){var Nq=A._GetAutoObject(C.Converter).Ajh(Rq,En
);switch(Nq){case 3:return 1;case 2:return 2;case 1:return 3;case 0:return 4;default:
throw new Error(P7+Nq.toFixed());}},AhN:function(){var B;var D8=A._NewObject(A.Core.
Bs,0).Initialize(A._GetAutoObject(C.Helper).Du());D8.Ant(0);D8.Anw(0);D8.Anz(0);
return((B=(D8.JP()|0))<0)?B+0x100000000:B;},Bhd:function(Atd){var Dn;switch(Atd){
case 36:Dn=MG;break;case 40:Dn=S6;break;case 56:Dn=UN;break;case 70:Dn=ZZ;break;
case 100:Dn=WZ;break;case 124:Dn=Is;break;case 156:Dn=UO;break;case 158:Dn=Z0;break;
case 191:Dn=W0;break;case 196:Dn=Z1;break;case 203:Dn=W1;break;case 208:Dn=Z2;break;
case 233:Dn=Z3;break;case 246:Dn=UP;break;case 250:Dn=W2;break;case 276:Dn=P8;break;
case 300:Dn=Z4;break;case 348:Dn=O2;break;case 372:Dn=Ri;break;case 380:Dn=W3;break;
case 392:Dn=W4;break;case 428:Dn=W5;break;case 440:Dn=W6;break;case 442:Dn=Z5;break;
case 470:Dn=W7;break;case 528:Dn=W8;break;case 578:Dn=S7;break;case 616:Dn=UQ;break;
case 620:Dn=UR;break;case 642:Dn=AcH;break;case 643:Dn=S8;break;case 703:Dn=Z6;break;
case 705:Dn=Afw;break;case 724:Dn=Z7;break;case 752:Dn=W9;break;case 756:Dn=Z8;break;
case 792:Dn=Z9;break;case 804:Dn=Afx;break;case 826:Dn=KX;break;case 840:Dn=AcI;
break;default:Dn=Atd.toFixed();}return Dn;},Ak4:function(ML){var Aam;if((ML<10000
)&&(A._GetAutoObject(C.Device).OJ===2))Aam=2;else if((ML<100000)&&!!A._GetAutoObject(
C.Device).OJ)Aam=1;else Aam=0;return this.S5(ML,Aam,false);},AxT:function(ML,Aam
){return this.S5(ML,Aam,false);},S5:function(ML,Aam,Bzg){var B;var Alv=A.jV;switch(
A._GetAutoObject(C.Device).MassUnit){case 0:if(Bzg)Alv=A.abl(ML,0,0);else{var BdL=
ML<0;if(Aam<3)ML=ML+(((BdL?-1:1)*5)*(Math.pow(10,2-Aam)|0));Alv=(((((B=ML)>-2147483648
)?Math.abs(B):B)/1000)|0).toFixed();if(Aam>0)Alv=Alv+(Lu+A.abV(A.abl((((B=ML)>-2147483648
)?Math.abs(B):B)%1000,3,10),Aam));if(BdL)Alv=AhS+Alv;}break;case 1:Alv=A.abk(ML/
453.592,0,Aam);break;default:A.ab5("%s%s",An7,A._GetAutoObject(C.Device).MassUnit.
toFixed());}return Alv;},Re:function(Jh){var A33=Jh.toFixed();var Bf3=A33.length;
if((Bf3>=14)&&(Bf3<=15)){var A1V=this.AxJ(Jh);var Bx9=A._GetAutoObject(C.Converter
).Bhd(A1V);A33=(Bx9+N$)+A.abm(A._GetAutoObject(C.Helper).Sf(Jh,0,12),12,10);}return A33;
},AmM:function(L4){switch(L4){case 0:return A.aaL(A.ach.AQl);case 1:return A.aaL(
A.ach.ADu);case 2:return A.aaL(A.ach.ADz);default:{A.ab5("%s%e",W_,L4);return null;
}}},A4F:function(BxF){switch(BxF){case 0:return A.aaL(A.ach.Avu);case 1:return A.
aaL(A.ach.ADq);case 2:return A.aaL(A.ach.AQf);default:throw new Error(An8);}},AdU:
function(AJe){switch(AJe){case 0:case 14:return A.aaL(A.ach.AjP);case 2:return A.
aaL(A.ach.AmU);case 1:return A.aaL(A.ach.Abx);case 3:switch(A._GetAutoObject(C.Device
).MassUnit){case 0:return A.aaL(A.ach.AvD);case 1:return A.aaL(A.ach.AvE);default:
throw new Error(US+A._GetAutoObject(C.Device).MassUnit.toFixed());}break;case 4:
return A.aaL(A.ach.APH);case 5:return A.aaL(A.ach.API);case 6:return A.aaL(A.ach.
APN);case 7:return A.aaL(A.ach.AO7);case 8:case 13:return A.aaL(A.ach.APc);case 9:
return A.aaL(A.ach.AC2);case 10:return A.aaL(A.ach.APb);case 12:return A.aaL(A.ach.
APd);case 11:return A.aaL(A.ach.ADo);default:throw new Error(AhT+AJe.toFixed());
}},BgE:function(AyZ){switch(AyZ){case 0:return A.aaL(A.ach.ADx);case 3:return A.
aaL(A.ach.AmU);case 1:return A.aaL(A.ach.Abx);case 2:return A._GetAutoObject(A.acj.
DU).BcN();default:throw new Error(AhT+AyZ.toFixed());}},Bhc:function(Atd){switch(
Atd){case 977:return AcJ;case 978:return UT;case 980:return An9;case 981:return An_;
case 982:return An$;case 983:return Aoa;case 984:return Afy;case 985:return AsN;
default:return A.aaR(A.acf.Unknown);}},Bhv:function(AcW){switch(AcW){case 1:return 0x278A;
case 2:return 0x278B;case 3:return 0x278C;case 4:return 0x278D;case 5:return 0x278E;
case 6:return 0x278F;case 7:return 0x2790;case 8:return 0x2791;case 9:return 0x2792;
case 10:return 0x2793;default:return 0x20;}},Bpg:function(Jh){if(!Jh)return-1;return(
Jh%100000000)|0;},Bh3:function(AoG,aFilter){var B;if(!aFilter)return AxV;var Ao_=
AxW;var Av=aFilter.AOB();while(!!Av){Ao_=Ao_+A._GetAutoObject(C.Helper).A6j(AoG,
Av);Av=aFilter.AOG(Av);if(!!Av)Ao_=Ao_+O3;}Ao_=Ao_+Rj;return Ao_;},A60:function(
Bbu){var MI=0;switch(Bbu){case 14:MI=2;break;case 13:MI=4;break;case 6:MI=36;break;
case 11:MI=9;break;case 0:MI=39;break;case 10:MI=26;break;case 12:MI=12;break;case
5:MI=14;break;case 3:MI=15;break;case 1:MI=10;break;case 8:MI=16;break;case 4:MI=
20;break;case 15:MI=27;break;case 9:MI=31;break;case 2:MI=13;break;case 7:MI=35;
break;case 16:MI=37;break;default:A.ab5("%s%e",AxX,Bbu);}return MI;},BgD:function(
AyZ){switch(AyZ){case 0:return 1;case 3:return 0;case 1:return 2;case 2:switch(A.
_GetAutoObject(C.Device).MassUnit){case 0:return 3;case 1:return 4;default:throw new
Error(US+A._GetAutoObject(C.Device).MassUnit.toFixed());}break;default:throw new
Error(AhT+AyZ.toFixed());}},BgF:function(AoR){switch(AoR){case 0:return A.aaL(A.
ach.APE);case 1:return A.aaL(A.ach.ADx);case 9:return A.aaL(A.ach.APP);case 4:return A.
aaL(A.ach.AGd);case 6:return A.aaL(A.ach.Ase);case 8:return A.aaL(A.ach.Avo);case
2:return A.aaL(A.ach.Abx);case 3:return A.aaL(A.ach.AmU);case 10:switch(A._GetAutoObject(
C.Device).MassUnit){case 0:return A.aaL(A.ach.AvD);case 1:return A.aaL(A.ach.AvE
);default:throw new Error(US+A._GetAutoObject(C.Device).MassUnit.toFixed());}break;
case 7:case 5:case 11:case 12:case 13:case 14:case 18:case 15:case 16:case 17:return A.
aaL(A.aci.TI);default:throw new Error(UU+AoR.toFixed());}},ANq:function(Atd){switch(
Atd){case 40:return 1;case 56:return 3;case 70:return 2;case 100:return 4;case 124:
return 5;case 156:return 7;case 158:return 36;case 191:return 17;case 196:return 8;
case 203:return 9;case 208:return 11;case 233:return 12;case 246:return 14;case 250:
return 15;case 276:return 10;case 300:return 16;case 348:return 18;case 372:return 19;
case 380:return 20;case 392:return 21;case 428:return 24;case 440:return 22;case
442:return 23;case 470:return 25;case 528:return 26;case 578:return 27;case 616:
return 28;case 620:return 29;case 642:return 30;case 643:return 31;case 703:return 34;
case 705:return 33;case 724:return 13;case 752:return 32;case 756:return 6;case 792:
return 35;case 804:return 37;case 826:return 38;case 840:return 39;default:return 0;
}},WV:function(Jh){var A1V=this.AxJ(Jh);return this.ANq(A1V);},AxJ:function(Jh){
return A._GetAutoObject(C.Helper).Sf(Jh,12,3)|0;},A$y:function(AoL,En){if(AoL<A.
_GetAutoObject(C.Helper).ACY(En))return 1;else if(AoL<A._GetAutoObject(C.Helper).
ACX(En))return 2;else return 3;},ACL:function(Bxj){switch(Bxj){case 1:return 1;case
2:return 2;case 3:return 3;case 4:return 4;case 5:return 5;case 6:return 6;case 7:
return 7;case 8:return 8;case 9:return 9;case 10:return 10;case 11:return 11;case
12:return 12;case 13:return 13;case 14:return 14;case 15:return 15;case 16:return 16;
default:return 0;}},AUS:function(A9,AI8,AI9){if(AI8===AI9)return A9;if(!AI8&&(AI9===
1)){var result=((A9*9)/5)+32;return result;}if((AI8===1)&&!AI9){var result=((A9-
32)*5)/9;return result;}throw new Error(((AsO+AI8.toFixed())+AxY)+AI9.toFixed());
},A54:function(Eb){switch(Eb){case 0:return AxZ;case 1:return A.jV;case 2:return Ax0;
case 3:return Aob;case 4:return A.aaR(A.acf.Contains);case 5:return Afz;default:{
A.ab5("%s%e",Aoc,Eb);return A.jV;}}},A44:function(AcU){return this.M0.Aef(AcU);}
,BiL:function(AcU){return this.M0.Amx(AcU);},BgW:function(Atc){var AAh=0;switch(
Atc){case 0:AAh=1;break;case 1:AAh=2;break;case 2:AAh=3;break;case 3:AAh=4;break;
default:A.ab5("%s%e",IT,Atc);}return AAh;},Ajh:function(A0j,En){if(A0j>=A._GetAutoObject(
C.Helper).A6e(En))return 3;else if(A0j>=A._GetAutoObject(C.Helper).ACM(En))return 2;
else if(A0j<A._GetAutoObject(C.Device).AcA)return 0;else return 1;},Aqs:function(
MI){var BM=-1;switch(MI){case 0:BM=0;break;case 1:BM=40;break;case 2:BM=70;break;
case 3:BM=56;break;case 4:BM=100;break;case 5:BM=124;break;case 6:BM=756;break;case
7:BM=156;break;case 8:BM=196;break;case 9:BM=203;break;case 10:BM=276;break;case
11:BM=208;break;case 12:BM=233;break;case 13:BM=724;break;case 14:BM=246;break;case
15:BM=250;break;case 16:BM=300;break;case 17:BM=191;break;case 18:BM=348;break;case
19:BM=372;break;case 20:BM=380;break;case 21:BM=392;break;case 22:BM=440;break;case
23:BM=442;break;case 24:BM=428;break;case 25:BM=470;break;case 26:BM=528;break;case
27:BM=578;break;case 28:BM=616;break;case 29:BM=620;break;case 30:BM=642;break;case
31:BM=643;break;case 32:BM=752;break;case 33:BM=705;break;case 34:BM=703;break;case
35:BM=792;break;case 36:BM=158;break;case 37:BM=804;break;case 38:BM=826;break;case
39:BM=840;break;default:throw new Error(Aod+MI.toFixed());}return BM;},Bpk:function(
Jh){return A._GetAutoObject(C.Helper).Sf(Jh,8,2)|0;},Bpj:function(Jh){var Bzc=this.
Bpk(Jh);return this.ACL(Bzc);},_Init:function(aArg){C.M0._Init.call(this.M0={I:this
},0);this.__proto__=C.ConverterClass;A.h7++;},_Done:function(){this.__proto__=null;
this.M0._Done();A.h7--;},_ReInit:function(){this.M0._ReInit();},_Mark:function(D
){var B;if((B=this.M0)._cycle!=D)B._Mark(B._cycle=D);if((B=this.I)&&(B._cycle!=D
))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:"Device::ConverterClass"
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
false,IsAlarm:false,E3:function(Ad,AH){var HD=C.Row.E3.call(this,Ad,AH);if(HD&&!
!AH){this.OnSetId(AH.CF(Ad,0));this.SE(AH.CF(Ad,1));this.AbZ(AH.CF(Ad,2));this.Anv(
AH.CF(Ad,3));this.Q1(AH.Hu(Ad,4));this.JR(AH.AOD(Ad,7));this.Akp(AH.Bij(Ad,6));this.
EB(AH.AmN(Ad,14));this.PR(AH.KM(Ad,22));this.Nd(AH.KM(Ad,26));this.Aw8(AH.I4(Ad,
13));this.AeY(AH.H2(Ad,8));this.Aw0(AH.Hu(Ad,15));this.ATo(AH.Hu(Ad,31));this.Ae4(
AH.A6t(Ad,5));this.ASY(AH.I4(Ad,17));this.Uk(AH.H2(Ad,11));this.ATn(AH.Hu(Ad,16)
);this.ATq(AH.Hu(Ad,30));this.Akv(AH.H2(Ad,9));this.Ae2(AH.H2(Ad,12));this.ATp(AH.
Hu(Ad,20));this.Aw2(AH.Hu(Ad,21));this.Ae0(AH.H2(Ad,10));this.AwE(AH.H2(Ad,27));
this.AE$(AH.ACT(Ad,18));this.AFD(AH.Hu(Ad,19));this.Awz(AH.ACT(Ad,23));this.Aw1(
AH.Hu(Ad,24));this.ASQ(AH.CF(Ad,25));this.Awq(AH.Hu(Ad,28));this.AwF(AH.CF(Ad,29
));this.ArN(AH.H2(Ad,38));this.NY(AH.Bik(Ad,32));this.Akr(AH.Bip(Ad,33));this.Anx(
AH.KM(Ad,35));this.Nf(AH.AOL(Ad,34));this.Ae1(AH.H2(Ad,37));this.AFr(AH.Biy(Ad,36
));}return HD;},Cg:function(AH){var HD=C.Row.Cg.call(this,AH);if(HD&&!!AH){var Jm=
AH.Ox();if(Jm<=0)A.ab5("%s",W$);else{var AzW=this.AmZ();if(AzW)this.CL=AH.YA();else
AH.Hm(this.CL,0,this.Id);AH.Hm(this.CL,1,this.VisualId);AH.Hm(this.CL,2,this.GroupId
);AH.Hm(this.CL,3,this.LocationId);AH.Ach(this.CL,4,this.DateOfBirth);AH.Bn_(this.
CL,7,this.Gender);AH.Bn6(this.CL,6,this.BirthType);AH.Bn4(this.CL,14,this.AnimalType
);AH.Uv(this.CL,22,this.TransponderId);AH.Uv(this.CL,26,this.NaisId);AH.AkM(this.
CL,13,this.WorstAssessment);AH.N4(this.CL,8,this.IsAlarm);AH.Ach(this.CL,15,this.
TimestampAlarm);AH.N4(this.CL,11,this.IsFever);AH.Ach(this.CL,16,this.TimestampExpirationFeverAlarm
);AH.N4(this.CL,9,this.IsControl);AH.N4(this.CL,12,this.IsWatch);AH.Ach(this.CL,
20,this.TimestampLastControl);AH.Ach(this.CL,21,this.TimestampLastWatch);AH.N4(this.
CL,10,this.IsRegistered);AH.N4(this.CL,27,this.IsPerished);AH.Ach(this.CL,28,this.
DateOfLastCalving);AH.Hm(this.CL,29,this.LactationNumber);AH.N4(this.CL,38,this.
IsDry);AH.Bn8(this.CL,32,this.Breed);AH.Bn9(this.CL,33,this.EaseOfDelivery);AH.Uv(
this.CL,35,this.NaisIdMother);AH.Boe(this.CL,34,this.WhereAbouts);AH.N4(this.CL,
37,this.IsRegistrationNoticePending);AH.Boc(this.CL,36,this.ReasonOfLeaving);HD=
AH.Oz(Jm);if(AzW)this.OnSetId(AH.Abm());}}return HD;},Gp:function(){C.Row.Gp.call(
this);this.OnSetId(-1);this.Ae0(true);},E5:function(){C.Row.E5.call(this);this.OnSetId(
0);this.SE(0);this.AbZ(0);this.Anv(0);this.Q1(0);this.JR(A._GetAutoObject(C.Device
).Gender);this.Akp(0);this.EB(A._GetAutoObject(C.Device).AnimalType);this.PR(0);
this.Nd(0);this.Aw8(0);this.AeY(false);this.Aw0(0);this.ATo(0);this.Ae4(0);this.
ASY(0);this.Uk(false);this.ATq(0);this.ATn(0);this.Akv(false);this.Ae2(false);this.
ATp(0);this.Aw2(0);this.Ae0(false);this.AwE(false);this.AE$(0);this.AFD(0);this.
Awz(0);this.Aw1(0);this.ASQ(-1);this.Awq(0);this.AwF(0);this.ArN(false);this.NY(
0);this.Akr(0);this.Anx(0);this.Nf(0);this.Ae1(false);this.AFr(0);},OnSetId:function(
E){if(this.Id===E)return;this.Id=E;A.abo([this,this.QZ,this.OnSetId],0);},SE:function(
E){if(this.VisualId===E)return;this.VisualId=E;A.abo([this,this.Art,this.SE],0);
},AbZ:function(E){if(this.GroupId===E)return;this.GroupId=E;A.abo([this,this.Bki
,this.AbZ],0);},Q1:function(E){if(this.DateOfBirth===E)return;this.DateOfBirth=E;
A.abo([this,this.Av4,this.Q1],0);},JR:function(E){if(this.Gender===E)return;this.
Gender=E;A.abo([this,this.Ws,this.JR],0);},Akp:function(E){if(this.BirthType===E
)return;this.BirthType=E;A.abo([this,this.ASa,this.Akp],0);},Anv:function(E){if(
this.LocationId===E)return;this.LocationId=E;A.abo([this,this.A8o,this.Anv],0);}
,Ae4:function(E){if(this.LastTemperature===E)return;this.LastTemperature=E;A.abo([
this,this.A8n,this.Ae4],0);},AeY:function(E){if(this.IsAlarm===E)return;this.IsAlarm=
E;A.abo([this,this.A8f,this.AeY],0);},Akv:function(E){if(this.IsControl===E)return;
this.IsControl=E;A.abo([this,this.Bkl,this.Akv],0);},Ae0:function(E){if(this.IsRegistered===
E)return;this.IsRegistered=E;A.abo([this,this.Bko,this.Ae0],0);},Ae2:function(E){
if(this.IsWatch===E)return;this.IsWatch=E;A.abo([this,this.A8j,this.Ae2],0);},Aw8:
function(E){if(this.WorstAssessment===E)return;this.WorstAssessment=E;A.abo([this
,this.A81,this.Aw8],0);},Uk:function(E){if(this.IsFever===E)return;this.IsFever=
E;A.abo([this,this.A8g,this.Uk],0);},ATp:function(E){if(this.TimestampLastControl===
E)return;this.TimestampLastControl=E;A.abo([this,this.BkO,this.ATp],0);},Aw2:function(
E){if(this.TimestampLastWatch===E)return;this.TimestampLastWatch=E;A.abo([this,this.
BkQ,this.Aw2],0);},ASY:function(E){if(this.LastRatingTemperature===E)return;this.
LastRatingTemperature=E;A.abo([this,this.Bkr,this.ASY],0);},ATn:function(E){if(this.
TimestampExpirationFeverAlarm===E)return;this.TimestampExpirationFeverAlarm=E;A.
abo([this,this.BkM,this.ATn],0);},Aw0:function(E){if(this.TimestampAlarm===E)return;
this.TimestampAlarm=E;A.abo([this,this.BkL,this.Aw0],0);},EB:function(E){if(this.
AnimalType===E)return;this.AnimalType=E;A.abo([this,this.PO,this.EB],0);},AE$:function(
E){if(this.LastBodyWeight===E)return;this.LastBodyWeight=E;A.abo([this,this.A8m,
this.AE$],0);},AFD:function(E){if(this.TimestampLastWeighing===E)return;this.TimestampLastWeighing=
E;A.abo([this,this.A8N,this.AFD],0);},PR:function(E){if(this.TransponderId===E)return;
this.TransponderId=E;A.abo([this,this.Ars,this.PR],0);},RL:function(){return A._GetAutoObject(
C.Helper).L9(this.DateOfBirth,A._GetAutoObject(C.Helper).Du());},Awz:function(E){
if(this.FirstBodyWeight===E)return;this.FirstBodyWeight=E;A.abo([this,this.ASf,this.
Awz],0);},Aw1:function(E){if(this.TimestampFirstWeighing===E)return;this.TimestampFirstWeighing=
E;A.abo([this,this.ASw,this.Aw1],0);},Aq9:function(){var O8=A._NewObject(A.Core.
Bs,0);O8.Initialize(this.DateOfBirth);var A1H=A._NewObject(A.Core.Bs,0);A1H.Initialize(
this.TimestampFirstWeighing);if(((O8.Year===A1H.Year)&&(O8.AbV()===A1H.AbV()))&&(
this.FirstBodyWeight>0))return true;else return false;},AhR:function(AI2){var Aaw;
var Auk;if(this.TimestampLastWeighing>0){Auk=this.TimestampLastWeighing;Aaw=this.
LastBodyWeight;}else{Auk=this.DateOfBirth;Aaw=A._GetAutoObject(C.Helper).Abl(this.
AnimalType);}return A._GetAutoObject(C.Helper).AhR(Aaw,Auk,AI2,this.AnimalType);
},ASQ:function(E){if(this.FirstBodyWeightId===E)return;this.FirstBodyWeightId=E;
A.abo([this,this.Bkh,this.ASQ],0);},AnM:function(BbP){this.AeY(BbP);if(BbP){if(!
this.TimestampAlarm)this.Aw0(A._GetAutoObject(C.Helper).Du());}else this.Aw0(0);
},Nd:function(E){if(this.NaisId===E)return;this.NaisId=E;A.abo([this,this.Anm,this.
Nd],0);},AGt:function(BbL){this.Ae2(BbL);if(BbL){if(!this.TimestampLastWatch)this.
Aw2(A._GetAutoObject(C.Helper).Du());}else this.Aw2(0);},Awq:function(E){if(this.
DateOfLastCalving===E)return;this.DateOfLastCalving=E;A.abo([this,this.Bj9,this.
Awq],0);},AwF:function(E){if(this.LactationNumber===E)return;this.LactationNumber=
E;A.abo([this,this.Bkq,this.AwF],0);},AwE:function(E){if(this.IsPerished===E)return;
this.IsPerished=E;A.abo([this,this.Bkn,this.AwE],0);},ATq:function(E){if(this.TimestampLastTemperature===
E)return;this.TimestampLastTemperature=E;A.abo([this,this.BkP,this.ATq],0);},ATo:
function(E){if(this.TimestampLastAssessment===E)return;this.TimestampLastAssessment=
E;A.abo([this,this.BkN,this.ATo],0);},NY:function(E){if(this.Breed===E)return;this.
Breed=E;A.abo([this,this.Av2,this.NY],0);},Akr:function(E){if(this.EaseOfDelivery===
E)return;this.EaseOfDelivery=E;A.abo([this,this.ASe,this.Akr],0);},Nf:function(E
){if(this.WhereAbouts===E)return;this.WhereAbouts=E;A.abo([this,this.Awe,this.Nf
],0);},Anx:function(E){if(this.NaisIdMother===E)return;this.NaisIdMother=E;A.abo([
this,this.ASm,this.Anx],0);},AFr:function(E){if(this.ReasonOfLeaving===E)return;
this.ReasonOfLeaving=E;A.abo([this,this.BkB,this.AFr],0);},Ae1:function(E){if(this.
IsRegistrationNoticePending===E)return;this.IsRegistrationNoticePending=E;A.abo([
this,this.Bkp,this.Ae1],0);},ArN:function(E){if(this.IsDry===E)return;this.IsDry=
E;A.abo([this,this.Bkm,this.ArN],0);},QZ:function(){return this.Id;},Art:function(
){return this.VisualId;},Bki:function(){return this.GroupId;},Av4:function(){return this.
DateOfBirth;},Ws:function(){return this.Gender;},ASa:function(){return this.BirthType;
},A8o:function(){return this.LocationId;},A8n:function(){return this.LastTemperature;
},A8f:function(){return this.IsAlarm;},Bkl:function(){return this.IsControl;},Bko:
function(){return this.IsRegistered;},A8j:function(){return this.IsWatch;},A81:function(
){return this.WorstAssessment;},A8g:function(){return this.IsFever;},BkO:function(
){return this.TimestampLastControl;},BkQ:function(){return this.TimestampLastWatch;
},Bkr:function(){return this.LastRatingTemperature;},BkM:function(){return this.
TimestampExpirationFeverAlarm;},BkL:function(){return this.TimestampAlarm;},PO:function(
){return this.AnimalType;},A8m:function(){return this.LastBodyWeight;},A8N:function(
){return this.TimestampLastWeighing;},Ars:function(){return this.TransponderId;}
,ASf:function(){return this.FirstBodyWeight;},ASw:function(){return this.TimestampFirstWeighing;
},Bkh:function(){return this.FirstBodyWeightId;},Anm:function(){return this.NaisId;
},Bj9:function(){return this.DateOfLastCalving;},Bkq:function(){return this.LactationNumber;
},Bkn:function(){return this.IsPerished;},BkP:function(){return this.TimestampLastTemperature;
},BkN:function(){return this.TimestampLastAssessment;},Av2:function(){return this.
Breed;},ASe:function(){return this.EaseOfDelivery;},Awe:function(){return this.WhereAbouts;
},ASm:function(){return this.NaisIdMother;},BkB:function(){return this.ReasonOfLeaving;
},Bkp:function(){return this.IsRegistrationNoticePending;},Bkm:function(){return this.
IsDry;},_Init:function(aArg){C.Row._Init.call(this,aArg);this.__proto__=C.Animal;
this.TableId=0;},_className:"Device::Animal"};C.Row={CL:-1,TableId:2,E3:function(
Ad,AH){if(!AH){A.ab5("%s",(Aoe+this.CL.toFixed())+AsP);return false;}else if(AH.
Id!==this.TableId)throw new Error(AsQ);else if((Ad<0)||(Ad>=AH.B9())){A.ab5("%s"
,(((AsR+this.CL.toFixed())+Aof)+AH.B9().toFixed())+Aog);return false;}this.CL=Ad;
return true;},Cg:function(AH){if(!AH){A.ab5("%s",(Aoe+this.CL.toFixed())+AsP);return false;
}else if(AH.Id!==this.TableId)throw new Error(AsQ);else if(this.AmZ()&&AH.Lf()){
A.ab5("%s",AsS+AH.HI().toFixed());return false;}else if(!this.AmZ()&&((this.CL<0
)||(this.CL>=AH.B9()))){A.ab5("%s",(((AsR+this.CL.toFixed())+Aof)+AH.B9().toFixed(
))+Aog);return false;}return true;},Gp:function(){this.E5();this.CL=-1;},AmZ:function(
){return this.CL===-1;},E5:function(){this.CL=-2;},AqR:function(){return this.CL
!==-2;},A8B:function(){return this.CL;},A9Y:function(E){this.CL=E;},_Init:function(
aArg){this.__proto__=C.Row;A.h7++;},_Done:function(){this.__proto__=null;A.h7--;
},_ReInit:function(){},_Mark:function(D){var B;if((B=this.I)&&(B._cycle!=D))B._Mark(
B._cycle=D);},I:null,_cycle:0,_observers:null,_className:"Device::Row"};C.Rating={
Temperature:0,Id:0,AnimalId:0,Timestamp:0,BodyWeight:0,RatingTemperature:0,Faeces:
0,Respiratory:0,Appearance:0,Feed:0,E3:function(Ad,AH){var HD=C.Row.E3.call(this
,Ad,AH);if(HD&&!!AH){this.OnSetId(AH.CF(Ad,0));this.OnSetAnimalId(AH.CF(Ad,1));this.
OnSetTimestamp(AH.Hu(Ad,6));this.OnSetFeed(AH.I4(Ad,2));this.OnSetAppearance(AH.
I4(Ad,3));this.OnSetRespiratory(AH.I4(Ad,4));this.OnSetFaeces(AH.I4(Ad,5));this.
OnSetTemperature(AH.A6t(Ad,7));this.OnSetBodyWeight(AH.ACT(Ad,8));this.OnSetRatingTemperature(
AH.I4(Ad,9));}return HD;},Cg:function(AH){if(this.K&&this.K.Cg)return this.K.Cg.
apply(this,arguments);else return C.Rating.Bah.apply(this,arguments);},Bah:function(
AH){var HD=C.Row.Cg.call(this,AH);if((HD&&!!AH)&&(AH.Id===1)){var Jm=AH.Ox();if(
Jm<=0)A.ab5("%s",W$);else{var AzW=this.AmZ();if(AzW)this.CL=AH.YA();else AH.Hm(this.
CL,0,this.Id);AH.Hm(this.CL,1,this.AnimalId);AH.Ach(this.CL,6,this.Timestamp);AH.
AkM(this.CL,2,this.Feed);AH.AkM(this.CL,3,this.Appearance);AH.AkM(this.CL,4,this.
Respiratory);AH.AkM(this.CL,5,this.Faeces);AH.A_T(this.CL,7,this.Temperature);AH.
AUj(this.CL,8,this.BodyWeight);AH.AkM(this.CL,9,this.RatingTemperature);AH.Oz(Jm
);if(AzW)this.OnSetId(AH.Abm());var Rt=A._GetAutoObject(C.Device).An;var Ad=A._GetAutoObject(
C.Device).An.LS(0,this.AnimalId);if(Ad>=0){var Cy=A._NewObject(C.Animal,0);Cy.E3(
Ad,Rt);if(this.Temperature>0)Cy.Uk(A._GetAutoObject(C.Helper).A6U(this));if((this.
Temperature>0)&&A._GetAutoObject(C.Helper).AF9(this)){var Oi=A._GetAutoObject(C.
Helper).AQT(this);Cy.Akv(Oi);Cy.AnM(Oi);}else if(this.Temperature>0){var Oi=(A._GetAutoObject(
C.Helper).AQT(this)||(Cy.WorstAssessment===2))||(Cy.WorstAssessment===1);Cy.Akv(
Oi);Cy.AnM(Oi);}else{var Oi=A._GetAutoObject(C.Helper).AQT(this)||Cy.IsFever;Cy.
Akv(Oi);Cy.AnM(Oi);}Cy.Cg(Rt);}}}return HD;},Gp:function(){C.Row.Gp.call(this);this.
OnSetTimestamp(A._GetAutoObject(C.Helper).Du());this.OnSetId(-1);},E5:function(){
C.Row.E5.call(this);this.OnSetTimestamp(0);this.OnSetId(0);this.OnSetAnimalId(0);
this.OnSetFeed(0);this.OnSetAppearance(0);this.OnSetRespiratory(0);this.OnSetFaeces(
0);this.OnSetTemperature(0);this.OnSetBodyWeight(0);this.OnSetRatingTemperature(
0);},OnSetTemperature:function(E){if(this.Temperature===E)return;this.Temperature=
E;A.abo([this,this.BkK,this.OnSetTemperature],0);},OnSetId:function(E){if(this.Id===
E)return;this.Id=E;A.abo([this,this.QZ,this.OnSetId],0);},OnSetAnimalId:function(
E){if(this.AnimalId===E)return;this.AnimalId=E;A.abo([this,this.BjW,this.OnSetAnimalId
],0);},OnSetFeed:function(E){if(this.Feed===E)return;this.Feed=E;A.abo([this,this.
Bke,this.OnSetFeed],0);},OnSetAppearance:function(E){if(this.Appearance===E)return;
this.Appearance=E;A.abo([this,this.BjX,this.OnSetAppearance],0);},OnSetRespiratory:
function(E){if(this.Respiratory===E)return;this.Respiratory=E;A.abo([this,this.BkC
,this.OnSetRespiratory],0);},OnSetFaeces:function(E){if(this.Faeces===E)return;this.
Faeces=E;A.abo([this,this.Bkc,this.OnSetFaeces],0);},OnSetTimestamp:function(E){
if(this.Timestamp===E)return;this.Timestamp=E;A.abo([this,this.A8M,this.OnSetTimestamp
],0);},Bn5:function(Np,A9){switch(Np){case 2:this.OnSetAppearance(A9);break;case
1:this.OnSetFeed(A9);break;case 4:this.OnSetFaeces(A9);break;case 3:this.OnSetRespiratory(
A9);break;default:;}},Bih:function(Np){switch(Np){case 2:return this.Appearance;
case 1:return this.Feed;case 4:return this.Faeces;case 3:return this.Respiratory;
default:return 0;}},OnSetRatingTemperature:function(E){if(this.RatingTemperature===
E)return;this.RatingTemperature=E;A.abo([this,this.BkA,this.OnSetRatingTemperature
],0);},OnSetBodyWeight:function(E){if(this.BodyWeight===E)return;this.BodyWeight=
E;A.abo([this,this.Bj1,this.OnSetBodyWeight],0);},BkK:function(){return this.Temperature;
},QZ:function(){return this.Id;},BjW:function(){return this.AnimalId;},Bke:function(
){return this.Feed;},BjX:function(){return this.Appearance;},BkC:function(){return this.
Respiratory;},Bkc:function(){return this.Faeces;},A8M:function(){return this.Timestamp;
},BkA:function(){return this.RatingTemperature;},Bj1:function(){return this.BodyWeight;
},_Init:function(aArg){C.Row._Init.call(this,aArg);this.__proto__=C.Rating;this.
TableId=1;var Lv=this._variants();if(Lv){this.K={};Lv._Init.call(this,aArg);}},_Done:
function(){if(this.K)this.K._Done.call(this);this.__proto__=C.Row;C.Row._Done.call(
this);},_ReInit:function(){C.Row._ReInit.call(this);if(this.K)this.K._ReInit.call(
this);},_Mark:function(D){C.Row._Mark.call(this,D);if(this.K)this.K._Mark(D);},_variants:
function(){return A.acs.Rating._variants();},K:null,_className:"Device::Rating"};
C.HelperClass={Uu:null,AhC:null,AUc:null,AUd:null,W:null,Au:null,KE:null,SQ:null
,AdV:null,UB:null,UA:null,Aei:null,Aft:null,Afs:null,Afr:null,Afu:null,AgA:null,
AGI:0,Init:function(aArg){A.pe([this,this.ATI],this);},Aky:function(E){this.Uu=E;
A.abo([this,this.Arq,this.Aky],0);},AFv:function(E){this.AhC=E;A.abo([this,this.
A8C,this.AFv],0);},BAk:function(G){switch(A._GetAutoObject(C.Device).ScanState){
case 2:{var Aum=A._GetAutoObject(C.Device).OQ;if(!Aum)throw new Error(Ax1);switch(
Aum.TransponderType){case 1:this.Aky(Aum);break;case 2:this.ATe(Aum);break;case 3:
this.AFv(Aum);break;case 4:this.ATf(Aum);break;case 0:break;default:throw new Error(
Ax2);}}break;case 4:A._GetAutoObject(C.Device).A6(11,true,A.jV,2000,null);break;
case 3:A._GetAutoObject(C.Device).A6(12,true,A.jV,2000,null);break;case 0:case 1:
break;default:throw new Error(Ax3);}},AkJ:function(){this.Aky(null);this.ATe(null
);this.AFv(null);this.ATf(null);},AFA:function(E){if(this.K&&this.K.AFA)return this.
K.AFA.apply(this,arguments);else return C.HelperClass.Baf.apply(this,arguments);
},Baf:function(E){A.abo([this,this.UX,this.U0],0);A._GetAutoObject(C.Device).SetSystemTime(
E);},U0:function(Aq){this.AFA(Aq);},Du:function(){if(this.K&&this.K.Du)return this.
K.Du.apply(this,arguments);else return C.HelperClass.Bab.apply(this,arguments);}
,Bab:function(){var B;return((B=(this.Au.BcL()|0))<0)?B+0x100000000:B;},UX:function(
){return this.Du();},Asi:function(){A._GetAutoObject(C.Device).SN(-1);this.W.E5(
);A.we(this.W,0);},A6_:function(Jh){if(!Jh){A.ab5("%s%U",AsT,Jh);return false;}var
Bf=A._GetAutoObject(C.Device).An.AgT(22,Jh);return this.G6(Bf);},AmO:function(AoG
,AI1){switch(AoG){case 0:{var Ao9=AI1;switch(Ao9){case 14:return A.aaR(A.acf.Afo
);case 6:return Ax4;case 4:return A.aaR(A.acf.Aea);case 28:return P9;case 7:return A.
aaR(A.acf.Afj);case 2:return A.aaR(A.acf.P);case 0:return A.aaR(A.acf.GM);case 37:
return Ax5;case 8:return A.aaR(A.acf.Alarm);case 9:return A.aaR(A.acf.AB9);case 38:
return A.aaR(A.acf.ANQ);case 11:return A.aaR(A.acf.Fever);case 27:return AVF;case
10:return A.aaR(A.acf.BnJ);case 12:return A.aaR(A.acf.Ar6);case 29:return A.aaR(
A.acf.ARa);case 18:return A.aaR(A.acf.Weighing);case 17:return AVG;case 5:return A.
aaR(A.acf.Temperature);case 3:return AVH;case 26:return A.aaR(A.acf.Uc);case 35:
return A.aaR(A.acf.Uc)+AVI;case 36:return AHb;case 15:return AHc;case 24:return AfA;
case 20:return Aoh;case 30:return AVJ;case 21:return AHd;case 19:return Ak7;case
22:return A.aaR(A.acf.Transponder);case 1:return A.aaR(A.acf.GI);case 34:return A.
aaR(A.acf.Jf);case 13:return AHe;case 31:return AHf;default:{A.ab5("%s",AVK+Ao9.
toFixed());return AHg+Ao9.toFixed();}}}case 1:{var Ao9=AI1;switch(Ao9){case 1:return A.
aaR(A.acf.Animal);case 3:return A.aaR(A.acf.AF8);case 8:return A.aaR(A.acf.Afq);
case 5:return A.aaR(A.acf.AF_);case 2:return A.aaR(A.acf.Feed);case 4:return A.aaR(
A.acf.AF$);case 7:return A.aaR(A.acf.Temperature);case 6:return A.aaR(A.acf.Bs);
default:{A.ab5("%s",AVL+Ao9.toFixed());return AHg+Ao9.toFixed();}}}default:A.ab5(
"%s",(AVM+AoG.toFixed())+AcK);}return A.jV;},A6j:function(AoG,AI){var result=A.jV;
if(!!AI){result=this.AmO(AoG,AI.EJ);result=((result+N$)+A._GetAutoObject(C.Converter
).A54(AI.Operator))+N$;if(!!(C.Int32FilterCriterion.isPrototypeOf(AI)?AI:null))result=
result+(C.Int32FilterCriterion.isPrototypeOf(AI)?AI:null).A4.toFixed();else if(!
!(C.UInt32FilterCriterion.isPrototypeOf(AI)?AI:null))result=result+(C.UInt32FilterCriterion.
isPrototypeOf(AI)?AI:null).A4.toFixed();else if(!!(C.StringFilterCriterion.isPrototypeOf(
AI)?AI:null))result=result+(C.StringFilterCriterion.isPrototypeOf(AI)?AI:null).A4;
else if(!!(C.BoolFilterCriterion.isPrototypeOf(AI)?AI:null)){if((C.BoolFilterCriterion.
isPrototypeOf(AI)?AI:null).A4)result=this.AmO(AoG,AI.EJ);else result=A.jV;}else if(
!!(C.GenderFilterCriterion.isPrototypeOf(AI)?AI:null)){var ByL=A._NewObject(C.GenderToString
,0);result=result+ByL.Lt((C.GenderFilterCriterion.isPrototypeOf(AI)?AI:null).A4);
}else if(!!(C.AnimalTypeFilterCriterion.isPrototypeOf(AI)?AI:null)){var BxH=A._NewObject(
C.AnimalTypeToString,0);result=result+BxH.Lt((C.AnimalTypeFilterCriterion.isPrototypeOf(
AI)?AI:null).A4);}else if(!!(C.AssessmentFilterCriterion.isPrototypeOf(AI)?AI:null
)){var BxK=A._NewObject(C.AssesmentToString,0);result=result+BxK.Lt((C.AssessmentFilterCriterion.
isPrototypeOf(AI)?AI:null).A4);}else if(!!(C.UInt64FilterCriterion.isPrototypeOf(
AI)?AI:null))result=result+(C.UInt64FilterCriterion.isPrototypeOf(AI)?AI:null).A4.
toFixed();else if(!!(C.UInt64PartialFilterCriterion.isPrototypeOf(AI)?AI:null)){
var Av=(C.UInt64PartialFilterCriterion.isPrototypeOf(AI)?AI:null);result=(((((result+
Av.A4)+AVN)+Av.OA.toFixed())+O3)+Av.Zg.toFixed())+Aog;}else if(!!(C.WhereAboutsFilterCriterion.
isPrototypeOf(AI)?AI:null)){var BB8=A._NewObject(C.WhereAboutsToString,0);result=
result+BB8.Lt((C.WhereAboutsFilterCriterion.isPrototypeOf(AI)?AI:null).A4);}else
A.ab5("%s",AVO);}return result;},Nk:function(aString,Bbz,BwW){var result=A.jV;var
Bfi=false;var index=0;var BwY=Bbz.length;while(!Bfi){var A3o=aString.indexOf(Bbz
,index);if(A3o!==-1){result=(result+A.abW(aString,index,A3o-index))+BwW;index=A3o+
BwY;}else{var BbD=aString.length;if(index<BbD)result=result+A.ab2(aString,BbD-index
);Bfi=true;}}return result;},ATe:function(E){this.AUc=E;A.abo([this,this.BkE,this.
ATe],0);},ATf:function(E){this.AUd=E;A.abo([this,this.BkF,this.ATf],0);},Bc$:function(
){return((A._GetAutoObject(C.Device).ScanState===2)&&!!A._GetAutoObject(C.Device
).OQ)&&(A._GetAutoObject(C.Device).OQ.TransponderType===1);},Af7:function(G){if(
!this.W.AmZ()&&!!this.W.Id)this.Bjj(this.W.Id);},ACM:function(En){return A._GetAutoObject(
C.Helper).UB.Get(En);},A6e:function(En){return A._GetAutoObject(C.Helper).UA.Get(
En);},A6p:function(){var O=0;var min=32767;while(O<A._GetAutoObject(C.Helper).UB.
MD){if(A._GetAutoObject(C.Helper).UB.Get(O)<min)min=A._GetAutoObject(C.Helper).UB.
Get(O);O=O+1;}return min;},ATI:function(G){A.zV([this,this.Af7],A._GetAutoObject(
C.Device).An,0);},AQT:function(D3){if(!D3)return false;var BiW=(((this.AzS(D3.Faeces
)||this.AzS(D3.Feed))||this.AzS(D3.Appearance))||this.AzS(D3.Respiratory))||this.
AzS(D3.RatingTemperature);return BiW||this.A6U(D3);},AzS:function(Bbd){return(Bbd===
2)||(Bbd===1);},A6U:function(D3){return!!D3&&(D3.Temperature>A._GetAutoObject(C.
Helper).ACM(A._GetAutoObject(C.Helper).W.AnimalType));},G6:function(L7){var A2g=
false;if(L7>=0){if(L7!==this.W.CL)A._GetAutoObject(C.Device).SN(L7);A2g=this.W.E3(
L7,A._GetAutoObject(C.Device).An);if(A2g)A.we(this.W,0);}else{A._GetAutoObject(C.
Device).SN(-1);this.W.E5();A.we(this.W,0);}return A2g;},AhL:function(Ah2){var B;
return(((B=(this.Au.BcL()|0))<0)?B+0x100000000:B)-this.AmA(Ah2);},Asx:function(){
var B;A.pe([B=this.KE,B.AnQ],this);},BBx:function(G){A._GetAutoObject(C.Device).
A6(16,false,AHh,0,null);A._GetAutoObject(C.Device).A6(5,true,A.jV,0,null);},Bnc:
function(G){var As=(C.PopupContext.isPrototypeOf(G)?G:null);if(!!As&&(As.PopupState===
5))this.Asx();},BmZ:function(E){if(this.AGI===E)return;this.AGI=E;A._GetAutoObject(
C.Device).A6(16,true,this.AGI.toFixed(),0,[this,this.Bnc]);},L9:function(Bww,Bxb
){var D8;var BfQ=A._NewObject(A.Core.AnW,0);var GG=A._NewObject(A.Core.Bs,0);var
K5=A._NewObject(A.Core.Bs,0);GG.Initialize(Bww);K5.Initialize(Bxb);D8=K5.Bhu(GG);
BfQ.Initialize2(0,D8.ADk,D8.AD8,D8.AGm);if(GG.J(BfQ).GK===GG.GK)return D8.Kj;else
return D8.Kj+1;},BBz:function(G){A._GetAutoObject(C.Device).UpdateMeasureState(3
);},AKX:function(G){var BgG=A._GetAutoObject(C.Helper).ACM(A._GetAutoObject(C.Helper
).W.AnimalType);var BgC=A._GetAutoObject(C.Helper).A6e(A._GetAutoObject(C.Helper
).W.AnimalType);var Agl=A.abz(BgG-100,BgC+100);this.Bcp(Agl);},AmA:function(Ah2){
return Ah2*86400;},Ak0:function(J2){var B;if(!!J2&&(J2<(((B=Math.trunc(Math.pow(
10,A._GetAutoObject(C.Device).AF)))<0)?B+0x10000000000000000:B)))return-1;return A.
_GetAutoObject(C.Helper).Sf(J2,A._GetAutoObject(C.Device).AF&0xFF,A._GetAutoObject(
C.Device).A1&0xFF)|0;},AF9:function(D3){if(!D3)return false;return((!!D3.Faeces||
!!D3.Feed)||!!D3.Appearance)||!!D3.Respiratory;},AhR:function(A0v,BbF,AI2,En){var
B;var ApL;if((A0v<650000)&&(BbF<this.Du())){var Bb2=this.AgA.Avg(En);var Bb1=0;if(
Bb2>=0)Bb1=this.Afr.Get(Bb2);ApL=A0v+(this.L9(BbF,this.Du())*Bb1);if(AI2>0){var A1p=
this.ApK(AI2);ApL=(Math.trunc(((((B=ApL)<0)?B+0x10000000000000000:B)+Math.trunc(
A1p/2))/A1p)*A1p)|0;}if(ApL>650000)ApL=650000;}else ApL=A0v;return ApL;},ACZ:function(
D3){var Ap8=A._GetAutoObject(C.Converter).AdW(D3.Faeces);if(Ap8<A._GetAutoObject(
C.Converter).AdW(D3.Feed))Ap8=A._GetAutoObject(C.Converter).AdW(D3.Feed);if(Ap8<
A._GetAutoObject(C.Converter).AdW(D3.Appearance))Ap8=A._GetAutoObject(C.Converter
).AdW(D3.Appearance);if(Ap8<A._GetAutoObject(C.Converter).AdW(D3.Respiratory))Ap8=
A._GetAutoObject(C.Converter).AdW(D3.Respiratory);return A._GetAutoObject(C.Converter
).A$f(Ap8);},Axl:function(D3,Nn){if(!!D3){D3.OnSetFaeces(Nn);D3.OnSetFeed(Nn);D3.
OnSetAppearance(Nn);D3.OnSetRespiratory(Nn);}},Bif:function(AH,AI7,Ac2,Xj,AfE){if(
!AH)throw new Error(AsU);var Be=A._NewObject(C.Filter,0);var Apy=AH.Filter;var Od=
A._NewObject(C.Int32FilterCriterion,0);Od.Operator=0;Od.EJ=1;Od.A4=Ac2;Be.CV(Od);
if(Xj>0){var Oq=A._NewObject(C.UInt32FilterCriterion,0);Oq.Operator=2;Oq.EJ=6;Oq.
A4=Xj;Be.CV(Oq);}if(AfE>0){var Oh=A._NewObject(C.UInt32FilterCriterion,0);Oh.Operator=
3;Oh.EJ=6;Oh.A4=AfE;Be.CV(Oh);}AH.Bk(Be);var L8=A._NewObject(C.Int32ArrayWrapper
,0);L8.Zu(6);var O;for(O=0;O<L8.MD;O=O+1)L8.Set(O,0);var U6;for(O=0;O<AH.B9();O=
O+1){U6=AH.I4(O,AI7);L8.Set(U6,L8.Get(U6)+1);}AH.Bk(Apy);return L8;},ZM:function(
Ah2){var B;var GG=A._NewObject(A.Core.Bs,0);var BfP=A._NewObject(A.Core.AnW,0);GG.
Initialize(A._GetAutoObject(C.Converter).AhN());BfP.Initialize2(Ah2,0,0,0);GG=GG.
Bow(BfP);return((B=(GG.JP()|0))<0)?B+0x100000000:B;},A6f:function(AH,Ac2,AfE,Xj){
if(!AH)throw new Error(AsU);var Be=A._NewObject(C.Filter,0);var Apy=AH.Filter;var
Od=A._NewObject(C.Int32FilterCriterion,0);Od.Operator=0;Od.EJ=1;Od.A4=Ac2;Be.CV(
Od);if(Xj>0){var Oq=A._NewObject(C.UInt32FilterCriterion,0);Oq.Operator=2;Oq.EJ=
6;Oq.A4=Xj;Be.CV(Oq);}if(AfE>0){var Oh=A._NewObject(C.UInt32FilterCriterion,0);Oh.
Operator=3;Oh.EJ=6;Oh.A4=AfE;Be.CV(Oh);}AH.Bk(Be);var L8=A._NewObject(C.Int32ArrayWrapper
,0);L8.Zu(6);var O;for(O=0;O<L8.MD;O=O+1)L8.Set(O,0);var AoY=A._NewObject(C.Rating
,0);var A1h;for(O=0;O<AH.B9();O=O+1){AoY.E3(O,AH);if(A._GetAutoObject(C.Helper).
AF9(AoY)){A1h=A._GetAutoObject(C.Helper).ACZ(AoY);L8.Set(A1h,L8.Get(A1h)+1);}}AH.
Bk(Apy);return L8;},A1Q:function(AH,Ac2,Byg){if(!AH)throw new Error(AsU);var Be=
A._NewObject(C.Filter,0);var Apy=AH.Filter;var Od=A._NewObject(C.Int32FilterCriterion
,0);Od.Operator=0;Od.EJ=1;Od.A4=Ac2;Be.CV(Od);var Xj=A._GetAutoObject(C.Converter
).AhN()+A._GetAutoObject(C.Helper).AmA(Byg);var AfE=Xj+A._GetAutoObject(C.Helper
).AmA(1);var Oq=A._NewObject(C.UInt32FilterCriterion,0);Oq.Operator=2;Oq.EJ=6;Oq.
A4=Xj;Be.CV(Oq);var Oh=A._NewObject(C.UInt32FilterCriterion,0);Oh.Operator=3;Oh.
EJ=6;Oh.A4=AfE;Be.CV(Oh);AH.Bk(Be);var AoY=A._NewObject(C.Rating,0);var U6;var LP=
0;var O;for(O=0;O<AH.B9();O=O+1){AoY.E3(O,AH);if(A._GetAutoObject(C.Helper).AF9(
AoY)){U6=A._GetAutoObject(C.Helper).ACZ(AoY);if(A._GetAutoObject(C.Converter).AdW(
U6)>A._GetAutoObject(C.Converter).AdW(LP))LP=U6;}}AH.Bk(Apy);return LP;},AmY:function(
){if((A._GetAutoObject(C.Device).WeightRecordingScope===2)||(A._GetAutoObject(C.
Device).WeightRecordingScope===1))return true;else return false;},A6X:function(){
if((A._GetAutoObject(C.Device).WeightRecordingScope===2)||!A._GetAutoObject(C.Device
).WeightRecordingScope)return true;else return false;},Big:function(AH,AI7,Ac2,Xj
,AfE){if(!AH)throw new Error(AsU);var Be=A._NewObject(C.Filter,0);var Apy=AH.Filter;
var Od=A._NewObject(C.Int32FilterCriterion,0);Od.Operator=0;Od.EJ=1;Od.A4=Ac2;Be.
CV(Od);if(Xj>0){var Oq=A._NewObject(C.UInt32FilterCriterion,0);Oq.Operator=2;Oq.
EJ=6;Oq.A4=Xj;Be.CV(Oq);}if(AfE>0){var Oh=A._NewObject(C.UInt32FilterCriterion,0
);Oh.Operator=3;Oh.EJ=6;Oh.A4=AfE;Be.CV(Oh);}AH.Bk(Be);var L8=A._NewObject(C.Int32ArrayWrapper
,0);L8.Zu(6);var O;for(O=0;O<L8.MD;O=O+1)L8.Set(O,0);if(AH.B9()>0){var U6=AH.I4(
0,AI7);var ApQ=AH.Hu(O,6);var Ac=A._NewObject(A.Core.Bs,0);Ac.Initialize(ApQ);var
Ap7=U6;var AJ0=A._NewObject(A.Core.Bs,0);AJ0.Initialize(Ac.JP());for(O=1;O<AH.B9(
);O=O+1){U6=AH.I4(O,AI7);ApQ=AH.Hu(O,6);Ac.Initialize(ApQ);if((Ac.AbV()!==AJ0.AbV(
))||(Ac.Year!==AJ0.Year)){L8.Set(Ap7,L8.Get(Ap7)+1);AJ0.Initialize(Ac.JP());Ap7=
U6;}else if(!!U6&&(U6<Ap7))Ap7=U6;}L8.Set(Ap7,L8.Get(Ap7)+1);}AH.Bk(Apy);return L8;
},Aqi:function(L3){var B;var GG=A._NewObject(A.Core.Bs,0);GG.Initialize(L3);GG.Ant(
0);GG.Anw(0);GG.Anz(0);return((B=(GG.JP()|0))<0)?B+0x100000000:B;},AN3:function(
L3){var B;L3=L3+86400;var GG=A._NewObject(A.Core.Bs,0);GG.Initialize(L3);GG.Ant(
0);GG.Anw(0);GG.Anz(0);return((B=(GG.JP()|0))<0)?B+0x100000000:B;},Bii:function(
BBv,Byr,Al_,Alw){var Bck=A._GetAutoObject(C.Helper).L9(BBv,Byr);if(Bck>0)return((
Alw-Al_)/Bck)|0;return 0;},Bo_:function(Bwx,Bxc){var GG=A._NewObject(A.Core.Bs,0
);var K5=A._NewObject(A.Core.Bs,0);GG.Initialize(Bwx);K5.Initialize(Bxc);return(
GG.Year===K5.Year)&&(GG.AbV()===K5.AbV());},A6l:function(){var Be=A._GetAutoObject(
C.Helper).Mq();var Bdn=A._NewObject(C.UInt32FilterCriterion,0);var Bxl=A._GetAutoObject(
C.Helper).ZM(A._GetAutoObject(C.Device).AqK)-1;Bdn.Initialize(28,2,Bxl,true);Be.
CV(Bdn);var U2=A._NewObject(C.AnimalTypeFilterCriterion,0);U2.Initialize(14,0,1,
true);Be.CV(U2);if(A._GetAutoObject(C.Device).AqL){var Az8=A._NewObject(C.UInt32FilterCriterion
,0);var A2b=A._GetAutoObject(C.Helper).Du()-21600;Az8.Initialize(30,3,A2b,true);
Be.CV(Az8);}return Be;},BnO:function(){var Jm=A._GetAutoObject(C.Device).An.Ox();
if(Jm<=0)A.ab5("%s",W$);else{A._GetAutoObject(C.Device).An.E5();A._GetAutoObject(
C.Device).An.Oz(Jm);}Jm=A._GetAutoObject(C.Device).Ags.Ox();if(Jm<=0)A.ab5("%s",
W$);else{A._GetAutoObject(C.Device).Ags.E5();A._GetAutoObject(C.Device).Ags.Oz(Jm
);}Jm=A._GetAutoObject(C.Device).Bt.Ox();if(Jm<=0)A.ab5("%s",W$);else{A._GetAutoObject(
C.Device).Bt.E5();A._GetAutoObject(C.Device).Bt.Oz(Jm);}Jm=A._GetAutoObject(C.Device
).Pm.Ox();if(Jm<=0)A.ab5("%s",W$);else{A._GetAutoObject(C.Device).Pm.E5();A._GetAutoObject(
C.Device).Pm.Oz(Jm);}},Bjj:function(Ac2){var Bf=A._GetAutoObject(C.Device).An.LS(
0,Ac2);return this.G6(Bf);},AQ0:function(Jh){var Aiu=A._GetAutoObject(C.Device).
An.Aeg(22,Jh);return Aiu;},ACR:function(){var Be=A._GetAutoObject(C.Helper).Mq();
var Ai8=A._NewObject(C.UInt64FilterCriterion,0);Ai8.Initialize(22,0,0,true);Be.CV(
Ai8);return Be;},AOA:function(AoR,Byo,Qb){var Aai=-1;switch(AoR){case 2:Aai=30;break;
case 3:Aai=31;break;case 10:Aai=19;break;default:A.ab5("%s%e",UU,AoR);}if(Aai<0)
return null;var Ade=A._NewObject(C.UInt32FilterCriterion,0);Ade.Initialize(Aai,3
,A._GetAutoObject(C.Helper).Du()-Byo,Qb);return Ade;},BnM:function(aFilter){var AI=
aFilter.DL(30,3);if(!!AI)aFilter.Ni(AI);AI=aFilter.DL(31,3);if(!!AI)aFilter.Ni(AI
);AI=aFilter.DL(19,3);if(!!AI)aFilter.Ni(AI);},A0_:function(AfO,AyM,AH){if(AH.Lf(
))return 5;if(AfO.VisualId<=0)switch(AyM){case 0:if(!AfO.NaisId)return 1;break;case
1:if(!AfO.TransponderId)return 1;break;case 3:case 2:case 5:case 4:return 1;default:
throw new Error(AHi+AyM.toFixed());}if((!AfO.NaisId&&!AfO.TransponderId)&&A._GetAutoObject(
C.Device).An.AjE(1,AfO.VisualId))return 2;if(!!AfO.NaisId&&A._GetAutoObject(C.Helper
).AQY(AfO.NaisId))return 3;if(!!AfO.TransponderId&&A._GetAutoObject(C.Helper).AQ0(
AfO.TransponderId))return 4;return 0;},Aqb:function(Em){Em.EB(A._GetAutoObject(C.
Device).AnimalType);Em.NY(A._GetAutoObject(C.Device).Breed);Em.Q1(A._GetAutoObject(
C.Helper).Du()-A._GetAutoObject(C.Helper).AmA(A._GetAutoObject(C.Device).AdN));Em.
JR(A._GetAutoObject(C.Device).Gender);Em.Nf(A._GetAutoObject(C.Device).WhereAbouts
);},AMb:function(Rn,Em){var Gt=0;switch(Rn){case 0:Gt=A._GetAutoObject(C.Helper).
Ak0(Em.NaisId);break;case 1:Gt=A._GetAutoObject(C.Helper).Ak0(Em.TransponderId);
break;case 3:Gt=A._GetAutoObject(C.Device).AqX;break;case 2:Gt=A._GetAutoObject(
C.Device).AqY;break;case 4:case 5:Gt=A._GetAutoObject(C.Device).AjO;break;default:
throw new Error(AHj+Rn.toFixed());}return Gt;},A$m:function(Ald,L4,Bbi,Bwi,BwR){
var B;var Qo=null;var Xv=null;switch(Ald){case 0:{Qo=[B=A._GetAutoObject(C.Device
),B.ASl,B.AZS];Xv=[B=A._GetAutoObject(C.Device),B.Awb,B.AyG];}break;case 1:switch(
L4){case 1:{Qo=[B=A._GetAutoObject(C.Device),B.A8s,B.BaM];Xv=[B=A._GetAutoObject(
C.Device),B.Av$,B.AyE];}break;case 0:{Qo=[B=A._GetAutoObject(C.Device),B.A8t,B.BaN
];Xv=[B=A._GetAutoObject(C.Device),B.Awa,B.AyF];}break;case 2:{Qo=[B=A._GetAutoObject(
C.Device),B.ASl,B.AZS];Xv=[B=A._GetAutoObject(C.Device),B.Awb,B.AyG];}break;default:
throw new Error(Ax6+L4.toFixed());}break;default:throw new Error(AHk+Ald.toFixed(
));}if(!!Qo&&!!Xv){Qo[2].call(Qo[0],Bbi);if(Bbi>0){if((Xv[1].call(Xv[0])>0)&&(Bwi<
BwR))Qo[2].call(Qo[0],Qo[1].call(Qo[0])+Xv[1].call(Xv[0]));else if(Xv[1].call(Xv[
0])<0)Qo[2].call(Qo[0],Qo[1].call(Qo[0])+Xv[1].call(Xv[0]));}return Qo[1].call(Qo[
0]);}return 0;},AVc:function(Em,Ald,Bwq){if(!Em||(Bwq===true))return;switch(Ald){
case 0:Em.Nd(A._GetAutoObject(C.Device).AvV);break;case 1:switch(Em.Gender){case
0:Em.Nd(A._GetAutoObject(C.Device).AD$);break;case 1:Em.Nd(A._GetAutoObject(C.Device
).AD_);break;case 2:Em.Nd(A._GetAutoObject(C.Device).AvV);break;default:throw new
Error(Ax6+Em.Gender.toFixed());}break;default:throw new Error(AHk+Ald.toFixed());
}},BiX:function(Rn,Em){var result=false;switch(Rn){case 0:result=!!Em.NaisId;break;
case 1:result=!!Em.TransponderId;break;case 3:case 2:case 4:case 5:result=false;
break;default:throw new Error(AHj+Rn.toFixed());}return result;},AKb:function(Em
,Bbb,AyM,Atq,AfH){switch(Bbb){case 2:if(Atq<=0)A._GetAutoObject(C.Device).A6(21,
true,Em.VisualId.toFixed(),0,AfH);else A._GetAutoObject(C.Device).A6(48,true,(Em.
VisualId.toFixed()+Ax7)+Atq.toFixed(),0,AfH);break;case 3:if(Atq<=0)A._GetAutoObject(
C.Device).A6(21,true,A._GetAutoObject(C.Converter).Re(Em.NaisId),0,AfH);else A._GetAutoObject(
C.Device).A6(48,true,(A._GetAutoObject(C.Converter).Re(Em.NaisId)+Ax7)+Atq.toFixed(
),0,AfH);break;case 4:if(Atq<=0)A._GetAutoObject(C.Device).A6(25,true,A._GetAutoObject(
C.Converter).Re(Em.TransponderId),0,AfH);else A._GetAutoObject(C.Device).A6(47,true
,(A._GetAutoObject(C.Converter).Re(Em.TransponderId)+Ax7)+Atq.toFixed(),0,AfH);break;
case 1:switch(AyM){case 1:A._GetAutoObject(C.Device).A6(42,true,A.jV,0,AfH);break;
case 0:A._GetAutoObject(C.Device).A6(43,true,A.jV,0,AfH);break;case 3:case 2:case
5:case 4:A._GetAutoObject(C.Device).A6(22,true,A.jV,0,AfH);break;default:throw new
Error(AHi+AyM.toFixed());}break;case 5:A._GetAutoObject(C.Device).A6(41,true,A._GetAutoObject(
C.Device).An.HI().toFixed(),0,AfH);break;case 0:break;default:throw new Error(AVP+
Bbb.toFixed());}},BcP:function(Bbp,L4){var B;var AAa=null;switch(Bbp){case 0:AAa=[
B=A._GetAutoObject(C.Device),B.Awb,B.AyG];break;case 1:switch(L4){case 1:AAa=[B=
A._GetAutoObject(C.Device),B.Av$,B.AyE];break;case 0:AAa=[B=A._GetAutoObject(C.Device
),B.Awa,B.AyF];break;case 2:AAa=[B=A._GetAutoObject(C.Device),B.Awb,B.AyG];break;
default:throw new Error(Ax6+L4.toFixed());}break;default:throw new Error(AVQ+Bbp.
toFixed());}return AAa;},A6x:function(Qd,Bw4){var AaJ=A._NewObject(A.Core.Bs,0);
AaJ.Initialize(Qd);var ABr=AaJ.Year;var Bf=A._GetAutoObject(C.Device).Pm.LS(0,ABr
);var U5=A._NewObject(C.CalfDeregistrations,0);if(Bf<0){if(A._GetAutoObject(C.Device
).Pm.Lf())A._GetAutoObject(C.Device).A6(51,true,A._GetAutoObject(C.Device).Pm.HI(
).toFixed(),0,null);else{U5.Gp();U5.AkA(ABr);}}else U5.E3(Bf,A._GetAutoObject(C.
Device).Pm);U5.Aws(U5.Deregistrations+1);if(Bw4)U5.Awr(U5.Deaths+1);U5.Cg(A._GetAutoObject(
C.Device).Pm);},AL$:function(LP,AlG,Alx){var AKx=0;if((AlG&&(Alx===1))||(LP===1)
)AKx=1;else if((AlG&&(Alx===2))||(LP===2))AKx=2;else if(!!LP&&(LP!==5))AKx=LP;return AKx;
},Bcp:function(Bxk){var B;if(A._GetAutoObject(C.Device).MeasureState===1){this.SQ.
Cw=A._GetAutoObject(C.Device).AcA;this.SQ.B1=Bxk;this.SQ.AnO(this);}},ACO:function(
){var Be=this.AOz();var Bdc=A._NewObject(C.BoolFilterCriterion,0);Bdc.Initialize(
38,0,true,true);Be.CV(Bdc);return Be;},A6c:function(ED){var Be=A._GetAutoObject(
C.Helper).Mq();if(A._GetAutoObject(C.Device).Ap9){var A1T=A._GetAutoObject(C.Helper
).AOA(ED,21600,true);Be.CV(A1T);}return Be;},A6r:function(){var Be=A._GetAutoObject(
C.Helper).Mq();var BdE=A._NewObject(C.UInt64FilterCriterion,0);BdE.Initialize(26
,0,0,true);Be.CV(BdE);return Be;},A6u:function(){var B;var Be=A._GetAutoObject(C.
Helper).Mq();var AAg=(C.WhereAboutsFilterCriterion.isPrototypeOf(B=Be.DL(34,3))?
B:null);if(!!AAg)Be.Ni(AAg);var Be1=A._NewObject(C.BoolFilterCriterion,0);Be1.Initialize(
37,0,true,true);Be.CV(Be1);return Be;},Sf:function(A9,Atj,A0w){var B;A9=Math.trunc(
A9/this.ApK(Atj));A9%=this.ApK(A0w);return A9;},ApK:function(Bbq){switch(Bbq){case
0:return 1;case 1:return 10;case 2:return 100;case 3:return 1000;case 4:return 10000;
case 5:return 100000;case 6:return 1000000;case 7:return 10000000;case 8:return 100000000;
case 9:return 1000000000;case 10:return 10000000000;case 11:return 100000000000;
case 12:return 1000000000000;case 13:return 10000000000000;case 14:return 100000000000000;
case 15:return 1000000000000000;default:throw new Error(AVR+Bbq.toFixed());}},Mq:
function(){var Be=A._NewObject(C.Filter,0);var Bfm=A._NewObject(C.BoolFilterCriterion
,0);Bfm.Initialize(10,0,true,true);Be.CV(Bfm);var AAg=A._NewObject(C.WhereAboutsFilterCriterion
,0);AAg.Initialize(34,3,6,true);Be.CV(AAg);return Be;},Aq8:function(aFilter){return!
this.ACS(aFilter);},ACS:function(aFilter){var Jj=0;var Av=aFilter.AOB();while(!!
Av){if(Av.YD===false)Jj++;Av=aFilter.AOG(Av);}return Jj;},AOz:function(){var Be=
this.Mq();var U2=A._NewObject(C.AnimalTypeFilterCriterion,0);U2.Initialize(14,0,
1,true);Be.CV(U2);return Be;},ACW:function(){var B;var A3U;var J4=this.Biz();A3U=(((
B=A._GetAutoObject(C.Converter).Aqs(J4))<0)?B+0x10000000000000000:B)*this.ApK(12
);if((J4===10)&&(A._GetAutoObject(C.Device).SI>0)){var ByM=A._GetAutoObject(C.Helper
).Sf(A._GetAutoObject(C.Device).SI,10,2)*this.ApK(8);A3U+=ByM;}return A3U;},Biz:
function(){var J4=0;if(A._GetAutoObject(C.Device).SI>0)J4=A._GetAutoObject(C.Converter
).WV(A._GetAutoObject(C.Device).SI);if(!J4)J4=A._GetAutoObject(C.Converter).A60(
A._GetAutoObject(C.Device).Language);return J4;},AQY:function(Xi){var Aiu=A._GetAutoObject(
C.Device).An.Aeg(26,Xi);return Aiu;},Aj0:function(AfI){switch(AfI){case 0:case 1:
case 2:case 3:case 4:case 5:return false;case 6:case 7:case 8:case 9:case 10:return true;
default:throw new Error(AVS+AfI.toFixed());}},BgB:function(Rn,Em){var Gt=0;switch(
Rn){case 1:Gt=A._GetAutoObject(C.Helper).Ak0(Em.TransponderId);break;case 0:if(!
A._GetAutoObject(C.Device).EartagNrAssignmentMode)Gt=A._GetAutoObject(C.Device).
AjO;else switch(Em.Gender){case 0:Gt=A._GetAutoObject(C.Device).AqY;break;case 1:
Gt=A._GetAutoObject(C.Device).AqX;break;case 2:Gt=A._GetAutoObject(C.Device).AjO;
break;default:throw new Error(AHl+Em.Gender.toFixed());}break;default:throw new Error(
AVT+Rn.toFixed());}return Gt;},Bh7:function(){var B;var AzO=(((((((A.aaR(A.acf.AhF
)+A.aaR(A.acf.Colon))+O4)+A._GetAutoObject(C.Device).AhF)+Ax8)+A.aaR(A.acf.Bnu))+
A.aaR(A.acf.Colon))+O4)+A._GetAutoObject(A.acj.KJ).Bh5(((B=A._GetAutoObject(C.Device
).QW.Timestamp)<0)?B+0x100000000:B);return AzO;},Bh8:function(){var B;var AzO=((((((((((((((((((((((((((((
AVU+A._GetAutoObject(C.Device).RX.AD2.toFixed())+Lu)+A._GetAutoObject(C.Device).
RX.AD7.toFixed())+Lu)+A._GetAutoObject(C.Device).RX.AGg.toFixed())+O3)+A._GetAutoObject(
C.Device).RX.ACe)+O3)+A._GetAutoObject(A.acj.KJ).AjG(((B=A._GetAutoObject(C.Device
).RX.Timestamp)<0)?B+0x100000000:B))+O4)+AVV)+A._GetAutoObject(C.Device).Sw.AD2.
toFixed())+Lu)+A._GetAutoObject(C.Device).Sw.AD7.toFixed())+Lu)+A._GetAutoObject(
C.Device).Sw.AGg.toFixed())+O3)+A._GetAutoObject(C.Device).Sw.ACe)+O3)+A._GetAutoObject(
A.acj.KJ).AjG(((B=A._GetAutoObject(C.Device).Sw.Timestamp)<0)?B+0x100000000:B))+
O4)+AVW)+A._GetAutoObject(C.Helper).BiC())+O3)+A._GetAutoObject(C.Device).GetCommitHash(
))+O3)+A._GetAutoObject(C.Device).GetCommitCount().toFixed())+O3)+A._GetAutoObject(
A.acj.KJ).AjG(A._GetAutoObject(C.Device).GetCommitEpoch());return AzO;},Bh6:function(
){var B;var AzO=(((((((((((((((((((((AVX+A._GetAutoObject(C.Device).QW.ARm.toFixed(
))+Lu)+A._GetAutoObject(C.Device).QW.ARn.toFixed())+Lu)+A._GetAutoObject(C.Device
).QW.ARl.toFixed())+O4)+A.aaR(A.acf.A57))+A.aaR(A.acf.Colon))+N$)+A._GetAutoObject(
A.acj.KJ).AjG(((B=A._GetAutoObject(C.Device).QW.Timestamp)<0)?B+0x100000000:B))+
Ax8)+AVY)+A._GetAutoObject(C.Device).SW.AU5.toFixed())+Lu)+A._GetAutoObject(C.Device
).SW.AU6.toFixed())+Lu)+A._GetAutoObject(C.Device).SW.AU4.toFixed())+O4)+A.aaR(A.
acf.A57))+A.aaR(A.acf.Colon))+N$)+A._GetAutoObject(A.acj.KJ).AjG(((B=A._GetAutoObject(
C.Device).SW.Timestamp)<0)?B+0x100000000:B);return AzO;},A6s:function(A0w){var B;
var O;var AAN=A.jV;for(O=1;O<=A0w;O=O+1)if(!!A.abz(0,2))AAN=AAN+String.fromCharCode(
A.abz(97,104)&0xFFFF);else AAN=AAN+String.fromCharCode(A.abz(48,57)&0xFFFF);return AAN;
},Abl:function(En){var Ay6=0;if(En===1)En=0;var Bb6=this.AgA.Avg(En);if(Bb6>=0)Ay6=
this.Afu.Get(Bb6);return Ay6;},ACY:function(En){var FV=0;var ABp=this.AgA.Avg(En
);if(ABp>=0)FV=this.Aft.Get(ABp);return FV;},ACX:function(En){var FV=0;var ABp=this.
AgA.Avg(En);if(ABp>=0)FV=this.Afs.Get(ABp);return FV;},A6i:function(){var Be=this.
Mq();var U2=A._NewObject(C.AnimalTypeFilterCriterion,0);U2.Initialize(14,0,A._GetAutoObject(
C.Device).ACx,true);Be.CV(U2);return Be;},AQ1:function(J2){var BM=Math.trunc(J2/
1000000000000)|0;if(!BM)return 0;else if(BM>=900)return 1;else if(!A._GetAutoObject(
C.Converter).ANq(BM))return 2;else return 3;},A6w:function(Bzr){var Be=A._GetAutoObject(
C.Helper).ACR();var AfN=A._GetAutoObject(C.Helper).A6d(3,Bzr);AfN.YD=true;Be.CV(
AfN);return Be;},A6d:function(Eb,Bba){var Av=A._NewObject(C.UInt32FilterCriterion
,0);Av.EJ=4;switch(Eb){case 2:{Av.Operator=3;Av.A4=A._GetAutoObject(C.Helper).ZM(
Bba);}break;case 3:{Av.Operator=2;Av.A4=A._GetAutoObject(C.Helper).ZM(Bba-1);}break;
default:A.ab5("%s%e",AVZ,Eb);}return Av;},BiC:function(){return(((A._GetAutoObject(
C.Device).GetVersionMajor().toFixed()+Lu)+A._GetAutoObject(C.Device).GetVersionMinor(
).toFixed())+Lu)+A._GetAutoObject(C.Device).GetVersionRev().toFixed();},A4C:function(
Rn,Em){var Gt=0;switch(Rn){case 0:Gt=Em.VisualId;break;case 2:Gt=A._GetAutoObject(
C.Helper).Ak0(Em.TransponderId);break;case 3:if(Em.NaisId>0)Gt=A._GetAutoObject(
C.Helper).Ak0(Em.NaisId);else Gt=Em.VisualId;break;case 1:if(!A._GetAutoObject(C.
Device).EartagNrAssignmentMode)Gt=A._GetAutoObject(C.Device).AjO;else switch(Em.
Gender){case 0:Gt=A._GetAutoObject(C.Device).AqY;break;case 1:Gt=A._GetAutoObject(
C.Device).AqX;break;case 2:Gt=A._GetAutoObject(C.Device).AjO;break;default:throw new
Error(AHl+Em.Gender.toFixed());}break;default:throw new Error(AHm+Rn.toFixed());
}return Gt;},A$n:function(){var B;var IV=null;var Td=0;if(!A._GetAutoObject(C.Device
).EartagNrAssignmentMode){IV=[B=A._GetAutoObject(C.Device),B.Anl,B.Aou];Td=A._GetAutoObject(
C.Device).AuT;}else switch(A._GetAutoObject(C.Helper).W.Gender){case 1:{IV=[B=A.
_GetAutoObject(C.Device),B.Av7,B.AyC];Td=A._GetAutoObject(C.Device).ACp;}break;case
0:{IV=[B=A._GetAutoObject(C.Device),B.Av8,B.AyD];Td=A._GetAutoObject(C.Device).ACq;
}break;case 2:{IV=[B=A._GetAutoObject(C.Device),B.Anl,B.Aou];Td=A._GetAutoObject(
C.Device).AuT;}break;default:;}if(!!IV)switch(Td){case 1:IV[2].call(IV[0],A._GetAutoObject(
C.Helper).W.VisualId-1);break;case 0:IV[2].call(IV[0],A._GetAutoObject(C.Helper).
W.VisualId+1);break;default:;}},A6Y:function(Xi,Em){return(Em.NaisId!==Xi)&&this.
AQY(Xi);},Bi6:function(Jh,Em){return(Em.TransponderId!==Jh)&&this.AQ0(Jh);},AOx:
function(){var Be=A._GetAutoObject(C.Helper).A6u();var Az_=A._NewObject(C.UInt64FilterCriterion
,0);Az_.Initialize(35,5,0,true);Be.CV(Az_);return Be;},Avh:function(){var Be=A._GetAutoObject(
C.Helper).A6u();var Az_=A._NewObject(C.UInt64FilterCriterion,0);Az_.Initialize(35
,0,0,true);Be.CV(Az_);return Be;},JX:function(A0n,Ah1){A0n.Aj(Ah1);A0n.Ar(Ah1);A0n.
Z(Ah1);},ANk:function(Ah3){var B;var Aa;var A2v=false;var Xp=Ah3.TK(null,0x1);while(
!!Xp&&(((B=Xp)?B.__proto__:null)!==A.Core.Y)){Aa=(A.kR.Cn.isPrototypeOf(Xp)?Xp:null
);if(!!Aa){Aa.Bi(A2v);A2v=!A2v;}Xp=Ah3.TK(Xp,0x1);}},BnN:function(Jh){var Xl=A._GetAutoObject(
C.Device).An.Filter;A._GetAutoObject(C.Device).An.Bk(null);var A3C=A._GetAutoObject(
C.Device).An.AgT(22,Jh);var Cy=A._NewObject(C.Animal,0);Cy.E3(A3C,A._GetAutoObject(
C.Device).An);Cy.PR(0);Cy.Cg(A._GetAutoObject(C.Device).An);A._GetAutoObject(C.Device
).An.Bk(Xl);},A6g:function(Ati){var Be=null;switch(Ati){case 0:Be=this.Bin();break;
case 1:Be=this.ACR();break;default:throw new Error(AHn+Ati.toFixed());}return Be;
},Bin:function(){var Be=A._GetAutoObject(C.Helper).Mq();var AfN=this.A6d(2,100);
Be.CV(AfN);return Be;},BxJ:function(Ati){var Xl=A._GetAutoObject(C.Device).An.Filter;
A._GetAutoObject(C.Device).An.Bk(this.A6g(Ati));var CB=A._GetAutoObject(C.Device
).An.B9();var O;for(O=CB-1;O>=0;O--){A._GetAutoObject(C.Helper).G6(O);A._GetAutoObject(
C.Helper).W.Ae0(false);A._GetAutoObject(C.Helper).W.Cg(A._GetAutoObject(C.Device
).An);}A._GetAutoObject(C.Device).An.Bk(Xl);},Bio:function(Ati){var Xl=A._GetAutoObject(
C.Device).An.Filter;A._GetAutoObject(C.Device).An.Bk(this.A6g(Ati));var Gf=A._GetAutoObject(
C.Device).An.B9();A._GetAutoObject(C.Device).An.Bk(Xl);return Gf;},A6o:function(
AH){var Xl=AH.Filter;AH.Bk(this.Avh());var O;var A2l=4294967295;for(O=0;O<AH.B9(
);O++){var O8=AH.Hu(O,4);if(O8<A2l)A2l=O8;}AH.Bk(Xl);return A._GetAutoObject(C.Helper
).L9(A2l,A._GetAutoObject(C.Helper).Du());},Arq:function(){return this.Uu;},A8C:
function(){return this.AhC;},BkE:function(){return this.AUc;},BkF:function(){return this.
AUd;},BkI:function(){return this.AGI;},_Init:function(aArg){C.AmF._Init.call(this
,aArg);C.Animal._Init.call(this.W={I:this},0);A.Core.Bs._Init.call(this.Au={I:this
},0);A.acl.Gk._Init.call(this.KE={I:this},0);A.acl.Gk._Init.call(this.SQ={I:this
},0);C.AMv._Init.call(this.AdV={I:this},0);C.AUU._Init.call(this.UB={I:this},0);
C.AUT._Init.call(this.UA={I:this},0);C.TD._Init.call(this.Aei={I:this},0);C.AVx.
_Init.call(this.Aft={I:this},0);C.AVw._Init.call(this.Afs={I:this},0);C.AVv._Init.
call(this.Afr={I:this},0);C.AVz._Init.call(this.Afu={I:this},0);C.AMw._Init.call(
this.AgA={I:this},0);this.__proto__=C.HelperClass;var B;this.KE.HM(1);this.KE.Fp(
3000);this.KE.B1=100;this.SQ.Awx(10);this.SQ.Wy(5);this.SQ.HM(1);this.SQ.Fp(4000
);this.Aei.B1=false;this.Aei.Cw=true;this.Aei.HM(1);this.Aei.Fp(100);this.KE.Sx=[
this,this.BBx];this.KE.Q=[this,this.BkI,this.BmZ];this.SQ.Sx=[this,this.BBz];this.
SQ.Q=[B=A._GetAutoObject(C.Device),B.AEw,B.AIL];this.Aei.Q=[B=A._GetAutoObject(C.
Device),B.AEx,B.AIM];this.Init(aArg);var Lv=this._variants();if(Lv){this.K={};Lv.
_Init.call(this,aArg);}},_Done:function(){if(this.K)this.K._Done.call(this);this.
__proto__=C.AmF;this.W._Done();this.Au._Done();this.KE._Done();this.SQ._Done();this.
AdV._Done();this.UB._Done();this.UA._Done();this.Aei._Done();this.Aft._Done();this.
Afs._Done();this.Afr._Done();this.Afu._Done();this.AgA._Done();C.AmF._Done.call(
this);},_ReInit:function(){C.AmF._ReInit.call(this);this.W._ReInit();this.Au._ReInit(
);this.KE._ReInit();this.SQ._ReInit();this.AdV._ReInit();this.UB._ReInit();this.
UA._ReInit();this.Aei._ReInit();this.Aft._ReInit();this.Afs._ReInit();this.Afr._ReInit(
);this.Afu._ReInit();this.AgA._ReInit();if(this.K)this.K._ReInit.call(this);},_Mark:
function(D){var B;C.AmF._Mark.call(this,D);if((B=this.Uu)&&(B._cycle!=D))B._Mark(
B._cycle=D);if((B=this.AhC)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.AUc)&&(
B._cycle!=D))B._Mark(B._cycle=D);if((B=this.AUd)&&(B._cycle!=D))B._Mark(B._cycle=
D);if((B=this.W)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Au)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.KE)._cycle!=D)B._Mark(B._cycle=D);if((B=this.SQ)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.AdV)._cycle!=D)B._Mark(B._cycle=D);if((B=this.UB
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.UA)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Aei)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Aft)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Afs)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Afr)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Afu)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AgA)._cycle
!=D)B._Mark(B._cycle=D);if(this.K)this.K._Mark(D);},_variants:function(){return A.
acs.HelperClass._variants();},K:null,_className:"Device::HelperClass"};C.Helper={
_Init:function(){C.HelperClass._Init.call(this,0);},_ReInit:function(){},_variants:
function(){return this;},_this:null};C.BoolFilterCriterion={A4:false,Abe:function(
){var Av=A._NewObject(C.BoolFilterCriterion,0);Av.E_(this);return Av;},E_:function(
AI){C.FilterCriterion.E_.call(this,AI);var Av=(C.BoolFilterCriterion.isPrototypeOf(
AI)?AI:null);if(!!Av)this.A4=Av.A4;},Initialize:function(A3,Eb,A9,Qb){this.EJ=A3;
this.Operator=Eb;this.A4=A9;this.YD=Qb;return this;},_Init:function(aArg){C.FilterCriterion.
_Init.call(this,aArg);this.__proto__=C.BoolFilterCriterion;},_className:"Device::BoolFilterCriterion"
};C.UInt32FilterCriterion={A4:0,Abe:function(){var Av=A._NewObject(C.UInt32FilterCriterion
,0);Av.E_(this);return Av;},E_:function(AI){C.FilterCriterion.E_.call(this,AI);var
Av=(C.UInt32FilterCriterion.isPrototypeOf(AI)?AI:null);if(!!Av)this.A4=Av.A4;},Initialize:
function(A3,Eb,A9,Qb){this.EJ=A3;this.Operator=Eb;this.A4=A9;this.YD=Qb;return this;
},_Init:function(aArg){C.FilterCriterion._Init.call(this,aArg);this.__proto__=C.
UInt32FilterCriterion;},_className:"Device::UInt32FilterCriterion"};C.OverlayMenu={
None:0,Home:1,AutoAction:2,MenuItemSettings:3,RatingSettings:4,WeighingSettings:
5,Options:6,AnimalSearch:7,ActionSettings:8,MeasurementReady:9,AnimalMultiInfoMenu:
10,AnimalSearchUnfiltered:11,AnimalSearchDriedOff:12,MassRecordingMenu:13,MassRecordingDefaults:
14,MassRecordingFields:15,BirthRegistrationsListMenu:16,LAST:17};C.EnumToString={
BR:function(A7){throw new Error(Aoi+A7.toFixed());},Lt:function(A7){return this.
BR(A7);},_Init:function(aArg){this.__proto__=C.EnumToString;A.h7++;},_Done:function(
){this.__proto__=null;A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((
B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:
"Device::EnumToString"};C.ScreenTypeToString={BR:function(A7){var AJO=A7;var BC;
switch(AJO){case 3:BC=A.aaR(A.acf.Avn);break;case 34:BC=A.aaR(A.acf.Ts);break;case
35:BC=A.aaR(A.acf.Vq);break;case 43:BC=A.aaR(A.acf.AOw);break;default:BC=this.Bo$(
A7);}return BC;},Bo$:function(A7){var AJO=A7;var BC=A.jV;switch(AJO){case 0:BC=Ax9;
break;case 2:BC=AV0;break;case 4:BC=AV1;break;case 39:BC=AV2;break;case 38:BC=AHo;
break;case 63:BC=AV3;break;case 64:BC=AHp;break;case 82:BC=AHq;break;case 83:BC=
AHr;break;case 92:BC=AV4;break;case 93:BC=AHs;break;case 65:BC=AV5;break;case 3:
BC=AHt;break;case 6:BC=Rk;break;case 16:BC=Xa;break;case 22:BC=AV6;break;case 42:
BC=AV7;break;case 88:BC=AV8;break;case 87:BC=AV9;break;case 89:BC=AV_;break;case
95:BC=AV$;break;case 17:BC=AWa;break;case 23:BC=AhU;break;case 18:BC=AHu;break;case
19:BC=AWb;break;case 37:BC=AWc;break;case 76:BC=AHv;break;case 1:BC=AHw;break;case
5:BC=Ax_;break;case 7:BC=P_;break;case 81:BC=AWd;break;case 8:BC=AWe;break;case 9:
BC=AWf;break;case 40:BC=AsV;break;case 41:BC=AWg;break;case 24:BC=AWh;break;case
10:BC=AWi;break;case 60:BC=AWj;break;case 21:BC=AWk;break;case 11:BC=AWl;break;case
29:BC=AsW;break;case 48:BC=AWm;break;case 30:BC=AWn;break;case 12:BC=AWo;break;case
13:BC=AWp;break;case 14:BC=AWq;break;case 15:BC=AWr;break;case 69:BC=AWs;break;case
70:BC=AWt;break;case 20:BC=AWu;break;case 25:BC=AWv;break;case 66:BC=AHx;break;case
59:BC=Ak8;break;case 58:BC=AWw;break;case 56:BC=AWx;break;case 57:BC=AWy;break;case
68:BC=Ax$;break;case 67:BC=Ak9;break;case 84:BC=AhV;break;case 77:BC=Aya;break;case
26:BC=Aoj;break;case 28:BC=AhW;break;case 27:BC=AWz;break;case 31:BC=Ayb;break;case
78:BC=AHy;break;case 34:BC=AfB;break;case 35:BC=AHz;break;case 32:BC=Z_;break;case
45:BC=Ak_;break;case 49:BC=Aok;break;case 55:BC=AWA;break;case 54:BC=AWB;break;case
33:BC=AWC;break;case 36:BC=AWD;break;case 50:BC=AWE;break;case 75:BC=AsX;break;case
43:BC=AHA;break;case 44:BC=AHB;break;case 61:BC=AWF;break;case 62:BC=AWG;break;case
46:BC=AWH;break;case 47:BC=AWI;break;case 85:BC=AWJ;break;case 86:BC=AWK;break;case
71:BC=AWL;break;case 72:BC=AWM;break;case 74:BC=AWN;break;case 73:BC=AWO;break;case
51:BC=AWP;break;case 52:BC=Ayc;break;case 53:BC=AHC;break;case 79:BC=AHD;break;case
80:BC=AHE;break;case 90:BC=AHF;break;case 91:BC=AHG;break;case 94:BC=AHH;break;default:
throw new Error(AWQ+AJO.toFixed());}return BC;},_Init:function(aArg){C.EnumToString.
_Init.call(this,aArg);this.__proto__=C.ScreenTypeToString;},_className:"Device::ScreenTypeToString"
};C.OverlayMenuToString={BR:function(A7){var BeW=A7;var Pa=A.jV;switch(BeW){case
0:Pa=AWR;break;case 1:Pa=AHt;break;case 8:Pa=AWS;break;case 2:Pa=AWT;break;case 3:
Pa=AWU;break;case 4:Pa=AWV;break;case 5:Pa=AWW;break;case 6:Pa=Ayd;break;case 7:
Pa=AHI;break;case 11:Pa=AWX;break;case 12:Pa=AHJ;break;case 9:Pa=AhX;break;case 10:
Pa=UV;break;case 14:Pa=AWY;break;case 15:Pa=Z$;break;case 13:Pa=AWZ;break;case 16:
Pa=AW0;break;default:throw new Error(Ak$+BeW.toFixed());}return Pa;},_Init:function(
aArg){C.EnumToString._Init.call(this,aArg);this.__proto__=C.OverlayMenuToString;
},_className:"Device::OverlayMenuToString"};C.ScanStateToString={BR:function(A7){
var Bfv=A7;var Bp=A.jV;switch(Bfv){case 4:Bp=Aaa;break;case 0:Bp=AcL;break;case 2:
Bp=Aye;break;case 3:Bp=AW1;break;case 1:Bp=Oa;break;default:throw new Error(AHK+
Bfv.toFixed());}return Bp;},_Init:function(aArg){C.EnumToString._Init.call(this,
aArg);this.__proto__=C.ScanStateToString;},_className:"Device::ScanStateToString"
};C.MeasureStateToString={BR:function(A7){var Bdy=A7;var Bp=A.jV;switch(Bdy){case
4:Bp=Aaa;break;case 0:Bp=AcL;break;case 2:Bp=AW2;break;case 1:Bp=Oa;break;case 3:
Bp=AHL;break;default:throw new Error(AW3+Bdy.toFixed());}return Bp;},_Init:function(
aArg){C.EnumToString._Init.call(this,aArg);this.__proto__=C.MeasureStateToString;
},_className:"Device::MeasureStateToString"};C.TemperatureUnit={Celsius:0,Fahrenheit:
1,LAST:2};C.TemperatureUnitToString={BR:function(A7){var BfU=A7;var Ap1=A.jV;switch(
BfU){case 0:Ap1=A.aaR(A.acf.Bps);break;case 1:Ap1=A.aaR(A.acf.Bpt);break;default:
throw new Error(AHM+BfU.toFixed());}return Ap1;},_Init:function(aArg){C.EnumToString.
_Init.call(this,aArg);this.__proto__=C.TemperatureUnitToString;},_className:"Device::TemperatureUnitToString"
};C.AnimalType={DairyCalf:0,DairyCow:1,SheepLamb:2,LAST:3};C.AnimalTypeToString={
BR:function(A7){var AKY=A7;var type=A.jV;switch(AKY){case 0:type=A.aaR(A.acf.Bg2
);break;case 1:type=A.aaR(A.acf.Bhe);break;case 2:type=A.aaR(A.acf.Bjc);break;default:
throw new Error(AHN+AKY.toFixed());}return type;},_Init:function(aArg){C.EnumToString.
_Init.call(this,aArg);this.__proto__=C.AnimalTypeToString;},_className:"Device::AnimalTypeToString"
};C.Language={Default:0,German:1,Spanish:2,French:3,Italian:4,Finnish:5,Chinese_TW:
6,Turkish:7,Greek:8,Russian:9,Dutch:10,Czech:11,Estonian:12,Bulgarian:13,Bosnian:
14,Norwegian:15,Ukrainian:16,LAST:17};C.LanguageToString={BR:function(A7){var Az3=
A7;var O$=A.jV;switch(Az3){case 0:O$=AW4;break;case 10:O$=AW5;break;case 1:O$=AW6;
break;case 12:O$=AW7;break;case 5:O$=AW8;break;case 3:O$=AW9;break;case 8:O$=AW_;
break;case 13:O$=AW$;break;case 4:O$=AHO;break;case 9:O$=AXa;break;case 2:O$=AHP;
break;case 7:O$=AHQ;break;case 6:O$=Ayf;break;case 11:O$=AXb;break;case 14:O$=AXc;
break;case 15:O$=AXd;break;case 16:O$=AXe;break;default:throw new Error(AHR+Az3.
toFixed());}return O$;},Lt:function(A7){var Az3=A7;var Dn=A.jV;switch(Az3){case 0:
Dn=AXf;break;case 10:Dn=W8;break;case 1:Dn=P8;break;case 12:Dn=AXg;break;case 5:
Dn=UP;break;case 3:Dn=W2;break;case 8:Dn=AXh;break;case 13:Dn=WZ;break;case 4:Dn=
W3;break;case 9:Dn=S8;break;case 2:Dn=Z7;break;case 7:Dn=Z9;break;case 6:Dn=AsY;
break;case 11:Dn=AsZ;break;case 14:Dn=AHS;break;case 15:Dn=S7;break;case 16:Dn=KX;
break;default:throw new Error(AHR+Az3.toFixed());}return Dn;},_Init:function(aArg
){C.EnumToString._Init.call(this,aArg);this.__proto__=C.LanguageToString;},_className:
"Device::LanguageToString"};C.Gender={Male:0,Female:1,Unknown:2,LAST:3};C.BirthType={
Single:0,Twins:1,Triplets:2,Quadruplets:3,LAST:4};C.GenderToString={BR:function(
A7){var AtI=A7;var AJ6=A.jV;switch(AtI){case 0:AJ6=A.aaR(A.acf.Male);break;case 1:
AJ6=A.aaR(A.acf.Female);break;case 2:AJ6=A.aaR(A.acf.Unknown);break;default:throw new
Error(AXi+AtI.toFixed());}return AJ6;},_Init:function(aArg){C.EnumToString._Init.
call(this,aArg);this.__proto__=C.GenderToString;},_className:"Device::GenderToString"
};C.BirthTypeToString={BR:function(A7){var type=A7;var AfR=A.jV;switch(type){case
0:AfR=A.aaR(A.acf.Bon);break;case 1:AfR=A.aaR(A.acf.Bpo);break;case 2:AfR=A.aaR(
A.acf.Triplets);break;case 3:AfR=A.aaR(A.acf.Quadruplets);break;default:throw new
Error(AXj+type.toFixed());}return AfR;},_Init:function(aArg){C.EnumToString._Init.
call(this,aArg);this.__proto__=C.BirthTypeToString;},_className:"Device::BirthTypeToString"
};C.SyncState={Idle:0,Init:1,Exporting:2,ImportStart:3,Importing:4,ImportFinish:
5,Ready:6,Error:7,LAST:8};C.SyncStateToString={BR:function(A7){var BfO=A7;var Bp=
A.jV;switch(BfO){case 7:Bp=Aaa;break;case 0:Bp=AcL;break;case 6:Bp=AHL;break;case
2:Bp=AXk;break;case 5:Bp=AXl;break;case 3:Bp=AXm;break;case 4:Bp=AXn;break;case 1:
Bp=AXo;break;default:throw new Error(AXp+BfO.toFixed());}return Bp;},_Init:function(
aArg){C.EnumToString._Init.call(this,aArg);this.__proto__=C.SyncStateToString;},
_className:"Device::SyncStateToString"};C.RatedAttributeToString={BR:function(A7
){var AAO=A7;switch(AAO){case 0:return A.jV;case 1:return A.aaR(A.acf.BnC);case 4:
return A.aaR(A.acf.BnB);case 3:return A.aaR(A.acf.BnD);case 2:return A.aaR(A.acf.
BnA);default:throw new Error(AHT+AAO.toFixed());}},Lt:function(A7){var AAO=A7;switch(
AAO){case 0:return A.jV;case 1:return A.aaR(A.acf.Feed);case 4:return A.aaR(A.acf.
AF_);case 3:return A.aaR(A.acf.AF$);case 2:return A.aaR(A.acf.AF8);default:throw new
Error(AHT+AAO.toFixed());}},_Init:function(aArg){C.EnumToString._Init.call(this,
aArg);this.__proto__=C.RatedAttributeToString;},_className:"Device::RatedAttributeToString"
};C.AssesmentToString={BR:function(A7){var Alm=A7;var Azb=A.jV;switch(Alm){case 0:
case 5:Azb=A.jV;break;case 3:Azb=A.aaR(A.acj.Bot);break;case 2:Azb=A.aaR(A.acj.Bov
);break;case 1:Azb=A.aaR(A.acj.Bou);break;default:throw new Error(AXq+Alm.toFixed(
));}return Azb;},_Init:function(aArg){C.EnumToString._Init.call(this,aArg);this.
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
108,SuccessMassDeregistration:109,DataExportInProgress:110,LAST:111};C.PopupState={
Queued:0,Unknown:1,Displayed:2,ClosedAfterTimeOut:3,ClosedWithOk:4,ClosedWithCancel:
5,ClosedByMiddleware:6,ClosedWithYes:7,ClosedWithNo:8,Opened:9};C.PopupContext={
AFV:null,AkC:A.jV,AkX:0,PopupState:1,Id:0,Show:false,BmI:function(E){var B;if(this.
PopupState===E)return;this.PopupState=E;if(!!this.AFV)(B=this.AFV)?B[1].call(B[0
],this):null;},_Init:function(aArg){this.__proto__=C.PopupContext;A.h7++;},_Done:
function(){this.__proto__=null;A.h7--;},_ReInit:function(){},_Mark:function(D){var
B;if((B=this.AFV)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.I)&&(B._cycle
!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:"Device::PopupContext"
};C.Boolean={No:0,Yes:1,LAST:2};C.BooleanToYesNo={BR:function(A7){switch(A7){case
0:return A.aaR(A.acf.No);case 1:return A.aaR(A.acf.Yes);default:return Ayg+A7.toFixed(
);}},_Init:function(aArg){C.EnumToString._Init.call(this,aArg);this.__proto__=C.
BooleanToYesNo;},_className:"Device::BooleanToYesNo"};C.AnimalGroupTableFields={
Id:0,GroupName:1};C.AnimalGroup={GroupName:AHh,Id:0,E3:function(Ad,AH){var HD=C.
Row.E3.call(this,Ad,AH);if(HD&&!!AH){this.OnSetId(AH.CF(Ad,0));this.AE4(AH.VU(Ad
,1));}return HD;},Cg:function(AH){var HD=C.Row.Cg.call(this,AH);if(HD&&!!AH){var
Jm=AH.Ox();if(Jm<=0)A.ab5("%s",W$);else{if(this.AmZ())this.CL=AH.YA();AH.Hm(this.
CL,0,this.Id);AH.ZE(this.CL,1,this.GroupName);AH.Oz(Jm);}}return HD;},Gp:function(
){C.Row.Gp.call(this);this.OnSetId(-1);},E5:function(){C.Row.E5.call(this);this.
OnSetId(0);this.AE4(A.jV);},OnSetId:function(E){if(this.Id===E)return;this.Id=E;
A.abo([this,this.QZ,this.OnSetId],0);},AE4:function(E){if(this.GroupName===E)return;
this.GroupName=E;A.abo([this,this.Bkj,this.AE4],0);},QZ:function(){return this.Id;
},Bkj:function(){return this.GroupName;},_Init:function(aArg){C.Row._Init.call(this
,aArg);this.__proto__=C.AnimalGroup;this.TableId=3;},_className:"Device::AnimalGroup"
};C.PopupIdToString={BR:function(A7){var Ady=A7;var Ax=A.jV;var AJM;AJM=A.aaR(A.
acf.BpM)+O4;switch(Ady){case 0:Ax=A.aaR(A.acf.Unknown);break;case 1:Ax=A.aaR(A.acf.
SevereError);break;case 58:Ax=A.aaR(A.acf.BhU);break;case 2:Ax=A.aaR(A.acf.BhS);
break;case 3:Ax=A.aaR(A.acf.Bpy);break;case 77:Ax=A._GetAutoObject(C.Helper).Bh8(
);break;case 78:Ax=A._GetAutoObject(C.Helper).Bh6();break;case 79:Ax=A._GetAutoObject(
C.Helper).Bh7();break;case 9:Ax=A.aaR(A.acf.Bp0);break;case 5:Ax=A.aaR(A.acf.SuccessDataSync
);break;case 8:Ax=A.aaR(A.acf.SuccessResetFactorySettings);break;case 34:Ax=A.aaR(
A.acf.SuccessResetAnimalData);break;case 10:Ax=A._GetAutoObject(C.Device).ACV();
break;case 82:Ax=A.aaR(A.acf.BhW);break;case 83:Ax=A.aaR(A.acf.BhX);break;case 80:
Ax=A.aaR(A.acf.BoF);break;case 81:Ax=A.aaR(A.acf.SuccessRestoreBackup);break;case
91:Ax=A.aaR(A.acf.BgP);break;case 92:Ax=A.aaR(A.acf.BnQ);break;case 4:Ax=A.aaR(A.
acf.WarningDataSync);break;case 7:Ax=A.aaR(A.acf.BpY);break;case 33:Ax=A.aaR(A.acf.
WarningResetAnimalData);break;case 6:Ax=A.aaR(A.acf.WarningRestart);break;case 27:
Ax=A.aaR(A.acf.WarningNoActionDefined);break;case 64:Ax=A.aaR(A.acf.WarningActionNotApplicable
);break;case 28:Ax=A.aaR(A.acf.WarningNoMenuItemVisible);break;case 29:Ax=A.aaR(
A.acf.WarningEnterPresentationMode);break;case 30:Ax=A.aaR(A.acf.WarningNoAnimalsRegistered
);break;case 41:Ax=((AJM+A.aaR(A.acf.ARu))+O4)+A.aaR(A.acf.Bjp);break;case 50:Ax=((
AJM+A.aaR(A.acf.ARu))+O4)+A.aaR(A.acf.Bjr);break;case 51:Ax=((AJM+A.aaR(A.acf.ARu
))+O4)+A.aaR(A.acf.Bjq);break;case 42:Ax=A.aaR(A.acf.BpW);break;case 45:Ax=A.aaR(
A.acf.BpQ);break;case 46:Ax=A.aaR(A.acf.WarningNoValidCountryCode);break;case 57:
Ax=A.aaR(A.acf.WarningOutdatedAnimalWeight);break;case 52:Ax=A.aaR(A.acf.WarningOutdatedAnimalWeights
);break;case 53:Ax=A.aaR(A.acf.WarningWeightEvaluationSingular);break;case 56:Ax=
A.aaR(A.acf.WarningWeightEvaluationPlural);break;case 11:Ax=A.aaR(A.acf.ScanError
);break;case 12:Ax=A.aaR(A.acf.ScanNotFound);break;case 13:Ax=A.aaR(A.acf.BgH);break;
case 36:Ax=A.aaR(A.acf.Bph);break;case 14:Ax=A.aaR(A.acf.AnimalNotFound);break;case
15:Ax=A.aaR(A.acf.SuccessUnregister);break;case 35:Ax=A.aaR(A.acf.SuccessUnregisterPerished
);break;case 26:Ax=A.aaR(A.acf.SuccessCreationNewAnimal);break;case 23:Ax=A.aaR(
A.acf.SuccessCreationNewAnimals);break;case 24:Ax=A.aaR(A.acf.Bhh);break;case 49:
Ax=A.aaR(A.acf.EvaluationInProgress);break;case 16:Ax=A.aaR(A.acf.Bhm);break;case
17:Ax=A.aaR(A.acf.Box);break;case 18:Ax=A.aaR(A.acf.BoL);break;case 19:Ax=A.aaR(
A.acf.Boy);break;case 20:Ax=A.aaR(A.acf.BoM);break;case 54:Ax=A.aaR(A.acf.BoG);break;
case 55:Ax=A.aaR(A.acf.BoJ);break;case 21:Ax=A.aaR(A.acf.A$r);break;case 48:Ax=(
A.aaR(A.acf.A$r)+O4)+A.aaR(A.acf.A5i);break;case 22:Ax=A.aaR(A.acf.BpS);break;case
63:Ax=A.aaR(A.acf.BpT);break;case 85:Ax=A.aaR(A.acf.BpV);break;case 43:Ax=A.aaR(
A.acf.BpU);break;case 25:Ax=A.aaR(A.acf.A$c);break;case 47:Ax=(A.aaR(A.acf.A$c)+
O4)+A.aaR(A.acf.A5i);break;case 107:Ax=A.aaR(A.acf.Bpu);break;case 31:{var Bzb=(((((((((((((((((((
A.aaR(A.acf.Bg_)+Ax8)+A.aaR(A.acf.ANm))+A.aaR(A.acf.Colon))+N$)+A.aaR(A.acf.Bha)
)+O4)+A.aaR(A.acf.AOm))+A.aaR(A.acf.Colon))+N$)+A.aaR(A.acf.Bh2))+O4)+A.aaR(A.acf.
ATZ))+A.aaR(A.acf.Colon))+N$)+A.aaR(A.acf.BnF))+O4)+A.aaR(A.acf.ATY))+A.aaR(A.acf.
Colon))+N$)+A.aaR(A.acf.BnE);Ax=Bzb;}break;case 32:Ax=A.aaR(A.acf.Bpi);break;case
69:Ax=A.aaR(A.acf.BjC);break;case 44:Ax=A.aaR(A.acf.BpZ);break;case 37:Ax=A.aaR(
A.acf.WarningResetWeightSettings);break;case 38:Ax=A.aaR(A.acf.WarningResetTempThresholds
);break;case 39:Ax=A.aaR(A.acf.Bnv);break;case 76:Ax=(A.aaR(A.acf.A4X)+O4)+A.aaR(
A.acf.AT1);break;case 40:Ax=A.aaR(A.acf.BoH);break;case 75:Ax=A.aaR(A.acf.Boz);break;
case 59:Ax=A.aaR(A.acf.QuestionAddAnotherCalfMultiples);break;case 62:Ax=A.aaR(A.
acf.BoB);break;case 96:Ax=A.aaR(A.acf.BoC);break;case 60:Ax=A.aaR(A.acf.BoD);break;
case 98:Ax=A.aaR(A.acf.BoE);break;case 61:Ax=A.aaR(A.acf.BoN);break;case 104:Ax=
A.aaR(A.acf.BoO);break;case 65:Ax=A.aaR(A.acf.SuccessClearAnimalLoss);break;case
66:Ax=A.aaR(A.acf.WarningNoActionsForAnimalLoss);break;case 67:Ax=A.aaR(A.acf.SuccessLinkTransponder
);break;case 106:Ax=A.aaR(A.acf.BoA);break;case 86:Ax=A.aaR(A.acf.SuccessUnlinkTransponder
);break;case 68:Ax=A.aaR(A.acf.BoI);break;case 70:Ax=A.aaR(A.acf.BhY);break;case
71:Ax=A.aaR(A.acf.BoR);break;case 72:Ax=A.aaR(A.acf.BoS);break;case 97:Ax=A.aaR(
A.acf.Bh0);break;case 100:Ax=A.aaR(A.acf.BoT);break;case 99:Ax=A.aaR(A.acf.BoU);
break;case 88:Ax=A.aaR(A.acf.BhZ);break;case 89:Ax=A.aaR(A.acf.BoP);break;case 90:
Ax=A.aaR(A.acf.BoQ);break;case 73:Ax=A.aaR(A.acf.WarningNoPremisesID);break;case
74:Ax=A.aaR(A.acf.WarningNoFlashDrivePresent);break;case 94:Ax=A.aaR(A.acf.WarningNoBackupPathPresent
);break;case 93:Ax=A.aaR(A.acf.WarningNoBackupFilePresent);break;case 84:Ax=A.aaR(
A.acf.Bid);break;case 87:Ax=A.aaR(A.acf.Bp2);break;case 95:Ax=A.aaR(A.acf.BpP);break;
case 108:Ax=A.aaR(A.acf.BpR);break;case 109:Ax=A.aaR(A.acf.SuccessMassDeregistration
);break;case 102:Ax=A.aaR(A.acf.WarningParsedDateInFutureInvalid);break;case 101:
Ax=A.aaR(A.acf.WarningParsingDateFailed);break;case 103:Ax=A.aaR(A.acf.WarningParsingNaisIdFailed
);break;case 105:Ax=A.aaR(A.acf.BpX);break;case 110:Ax=A.aaR(A.acf.Bg1);break;default:
throw new Error(AHU+Ady.toFixed());}return Ax;},Lt:function(A7){var Ady=A7;var Ax=
A.jV;switch(Ady){case 0:Ax=AXr;break;case 1:Ax=AXs;break;case 58:Ax=AXt;break;case
2:Ax=AXu;break;case 3:Ax=AXv;break;case 77:Ax=AXw;break;case 78:Ax=AHV;break;case
79:Ax=AHW;break;case 9:Ax=AHX;break;case 5:Ax=AHY;break;case 8:Ax=Ayh;break;case
34:Ax=Ayi;break;case 80:Ax=AHZ;break;case 81:Ax=AXx;break;case 91:Ax=AH0;break;case
92:Ax=AXy;break;case 82:Ax=AH1;break;case 83:Ax=AXz;break;case 10:Ax=AXA;break;case
4:Ax=AXB;break;case 7:Ax=AXC;break;case 33:Ax=AXD;break;case 6:Ax=AXE;break;case
27:Ax=AXF;break;case 64:Ax=AXG;break;case 28:Ax=AXH;break;case 29:Ax=AXI;break;case
30:Ax=AXJ;break;case 41:Ax=AXK;break;case 50:Ax=Ayj;break;case 51:Ax=AXL;break;case
42:Ax=AXM;break;case 45:Ax=Ayk;break;case 46:Ax=As0;break;case 57:Ax=UW;break;case
52:Ax=As1;break;case 53:Ax=AXN;break;case 56:Ax=AXO;break;case 11:Ax=AXP;break;case
12:Ax=AH2;break;case 13:Ax=AXQ;break;case 36:Ax=AH3;break;case 14:Ax=AXR;break;case
15:Ax=AXS;break;case 35:Ax=AXT;break;case 26:Ax=As2;break;case 23:Ax=AXU;break;case
24:Ax=AXV;break;case 49:Ax=AH4;break;case 16:Ax=AXW;break;case 17:Ax=AXX;break;case
18:Ax=AXY;break;case 19:Ax=AXZ;break;case 20:Ax=AcM;break;case 54:Ax=AX0;break;case
55:Ax=AX1;break;case 21:Ax=AX2;break;case 48:Ax=AX3;break;case 22:Ax=AH5;break;case
63:Ax=AX4;break;case 43:Ax=AX5;break;case 85:Ax=AX6;break;case 25:Ax=AX7;break;case
47:Ax=AX8;break;case 107:Ax=AX9;break;case 31:Ax=AH6;break;case 32:Ax=AX_;break;
case 69:Ax=AX$;break;case 44:Ax=AYa;break;case 37:Ax=AH7;break;case 38:Ax=AH8;break;
case 39:Ax=AYb;break;case 76:Ax=AYc;break;case 40:Ax=AYd;break;case 75:Ax=AYe;break;
case 59:Ax=Rl;break;case 62:Ax=As3;break;case 96:Ax=AH9;break;case 60:Ax=AH_;break;
case 98:Ax=Aol;break;case 65:Ax=Aom;break;case 61:Ax=Ayl;break;case 104:Ax=AYf;break;
case 66:Ax=AH$;break;case 67:Ax=AYg;break;case 106:Ax=AYh;break;case 86:Ax=AYi;break;
case 68:Ax=AYj;break;case 70:Ax=AYk;break;case 71:Ax=AYl;break;case 72:Ax=AYm;break;
case 97:Ax=AYn;break;case 100:Ax=AYo;break;case 99:Ax=AYp;break;case 88:Ax=AYq;break;
case 89:Ax=AYr;break;case 90:Ax=AYs;break;case 73:Ax=AYt;break;case 74:Ax=AYu;break;
case 94:Ax=AYv;break;case 93:Ax=AYw;break;case 84:Ax=Aon;break;case 87:Ax=AIa;break;
case 95:Ax=AYx;break;case 108:Ax=AIb;break;case 109:Ax=AIc;break;case 102:Ax=AcN;
break;case 101:Ax=AId;break;case 103:Ax=AYy;break;case 105:Ax=AIe;break;case 110:
Ax=AYz;break;default:throw new Error(AHU+Ady.toFixed());}return Ax;},_Init:function(
aArg){C.EnumToString._Init.call(this,aArg);this.__proto__=C.PopupIdToString;},_className:
"Device::PopupIdToString"};C.PopupParamSeparator=";";C.RatingMode={Basic:0,Extended:
1,LAST:2};C.TransponderType={UNDEFINED:0,AnimalId:1,FarmId:2,GroupId:3,PersonId:
4,LAST:5};C.TransponderProtocol={UNDEFINED:0,FDX:1,HDX:2,HDX_URBAN:3,LAST:4};C.TransponderTypeToString={
BR:function(A7){var Bf6=A7;var type=A.jV;switch(Bf6){case 1:type=Aym;break;case 2:
type=AYA;break;case 3:type=AYB;break;case 4:type=Ayn;break;case 0:type=Ax9;break;
default:throw new Error(AYC+Bf6.toFixed());}return type;},_Init:function(aArg){C.
EnumToString._Init.call(this,aArg);this.__proto__=C.TransponderTypeToString;},_className:
"Device::TransponderTypeToString"};C.TransponderProtocolToString={BR:function(A7
){var Bf4=A7;var AAL=A.jV;switch(Bf4){case 1:AAL=AYD;break;case 2:AAL=AYE;break;
case 3:AAL=AIf;break;case 0:AAL=Ax9;break;default:throw new Error(Aoo+Bf4.toFixed(
));}return AAL;},_Init:function(aArg){C.EnumToString._Init.call(this,aArg);this.
__proto__=C.TransponderProtocolToString;},_className:"Device::TransponderProtocolToString"
};C.Transponder={Id:0,TransponderProtocol:0,TransponderType:0,ATu:function(E){if(
this.TransponderType===E)return;this.TransponderType=E;A.abo([this,this.BkU,this.
ATu],0);},ATt:function(E){if(this.TransponderProtocol===E)return;this.TransponderProtocol=
E;A.abo([this,this.BkT,this.ATt],0);},OnSetId:function(E){if(this.Id===E)return;
this.Id=E;A.abo([this,this.QZ,this.OnSetId],0);},AOJ:function(){return A._GetAutoObject(
C.Converter).Bpg(this.Id);},Bil:function(){return A._GetAutoObject(C.Converter).
AxJ(this.Id);},BkU:function(){return this.TransponderType;},BkT:function(){return this.
TransponderProtocol;},QZ:function(){return this.Id;},_Init:function(aArg){this.__proto__=
C.Transponder;A.h7++;},_Done:function(){this.__proto__=null;A.h7--;},_ReInit:function(
){},_Mark:function(D){var B;if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:
null,_cycle:0,_observers:null,_className:"Device::Transponder"};C.RatingModeToString={
BR:function(A7){var Vb=A7;var Nt=A.jV;switch(Vb){case 0:Nt=A.aaR(A.acf.Basic);break;
case 1:Nt=A.aaR(A.acf.Extended);break;default:throw new Error(AIg+Vb.toFixed());
}return Nt;},_Init:function(aArg){C.EnumToString._Init.call(this,aArg);this.__proto__=
C.RatingModeToString;},_className:"Device::RatingModeToString"};C.TableRowsCount={
_Init:function(aArg){this.__proto__=C.TableRowsCount;A.h7++;},_Done:function(){this.
__proto__=null;A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((B=this.
I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:
"Device::TableRowsCount"};C.MassUnit={Kilogramm:0,Pound:1,LAST:2};C.MassUnitToString={
BR:function(A7){var Bdu=A7;var Ap1=A.jV;switch(Bdu){case 0:Ap1=A.aaR(A.acf.Bja);
break;case 1:Ap1=A.aaR(A.acf.Pound);break;default:throw new Error(AYF+Bdu.toFixed(
));}return Ap1;},_Init:function(aArg){C.EnumToString._Init.call(this,aArg);this.
__proto__=C.MassUnitToString;},_className:"Device::MassUnitToString"};C.MinWeightGain=
20;C.MaxWeightGain=2000;C.WeightGainStep=10;C.Int32ArrayWrapper={MD:10,Array:A.abi(
10,0,null),Zu:function(E){if(this.MD===E)return;if(E>10)throw new Error(AIh);this.
MD=E;},Set:function(aIndex,AL){if((aIndex<0)||(aIndex>=this.MD))throw new Error(
Ayo);this.Array.Set(aIndex,AL);},Get:function(aIndex){if((aIndex<0)||(aIndex>=this.
MD))throw new Error(Ayo);return this.Array.Get(aIndex);},AmP:function(){var Qu=0;
var O;for(O=0;O<this.MD;O=O+1)Qu=Qu+this.Get(O);return Qu;},toString:function(){
var A2t=this.Array.Get(0).toFixed();var O;for(O=1;O<this.MD;O=O+1)A2t=(A2t+O3)+this.
Array.Get(O).toFixed();return A2t;},E3:function(aString){var Hz=aString.indexOf(
String.fromCharCode(0x2C),0);var A1g=A.jV;var O=0;while(O<10){if(aString===A.jV)
this.Array.Set(O,0);else{if(Hz===-1){A1g=aString;aString=A.jV;}else{A1g=A.abV(aString
,Hz);aString=A.ab1(aString,0,Hz+1);}this.Array.Set(O,A.wz(A1g,0,10));Hz=aString.
indexOf(String.fromCharCode(0x2C),0);}O=O+1;}if(aString!==A.jV)A.ab5("%s",Ala);}
,Cg:function(){},E5:function(){var O;for(O=0;O<this.MD;O=O+1)this.Set(O,0);},Avg:
function(A9){var O=0;while(O<this.MD){if(this.Array.Get(O)===A9)return O;O=O+1;}
return-1;},H3:function(){var O=0;var max=-1;while(O<this.MD){if(this.Array.Get(O
)>max)max=this.Array.Get(O);O=O+1;}return max;},_Init:function(aArg){(this.Array=[
]).__proto__=C.Int32ArrayWrapper.Array;this.__proto__=C.Int32ArrayWrapper;A.h7++;
},_Done:function(){this.__proto__=null;A.h7--;},_ReInit:function(){},_Mark:function(
D){var B;if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:
null,_className:"Device::Int32ArrayWrapper"};C.ActionToString={BR:function(A7){var
Azw=A7;var E8=A.jV;switch(Azw){case 4:E8=A.aaR(A.acf.Alarm);break;case 256:E8=A.
aaR(A.acf.Weighing);break;case 128:E8=A.aaR(A.acf.A5T);break;case 16:E8=A.aaR(A.
acf.AMc);break;case 1:E8=A.aaR(A.acf.Temperature);break;case 32:E8=A.aaR(A.acf.AnimalLoss
);break;case 2:E8=A.aaR(A.acf.Rating);break;case 8:E8=A.aaR(A.acf.Ar6);break;case
64:E8=A.aaR(A.acf.Unregister);break;case 512:E8=A.aaR(A.acf.ARO);break;case 1024:
E8=A.aaR(A.acf.LinkTransponder);break;case 262144:E8=A.aaR(A.acf.UnlinkTransponder
);break;case 2048:E8=A.aaR(A.acf.Ts);break;case 4096:E8=A.aaR(A.acf.Calving);break;
case 8192:E8=A.aaR(A.acf.DryOff);break;case 16384:E8=A.aaR(A.acf.A67);break;case
32768:E8=A.aaR(A.acf.AB1);break;case 524288:E8=A.aaR(A.acf.AB3);break;case 65536:
E8=A.aaR(A.acf.Delete);break;case 131072:E8=A.aaR(A.acf.A68);break;case 0:E8=A.aaR(
A.acf.A7t);break;default:throw new Error(AIi+Azw.toFixed());}return E8;},Lt:function(
A7){var Azw=A7;var E8=A.jV;switch(Azw){case 4:E8=A.aaR(A.acf.Alarm);break;case 256:
E8=A.aaR(A.acf.Weighing);break;case 128:E8=A.aaR(A.acf.A5T);break;case 16:E8=A.aaR(
A.acf.AMc);break;case 1:E8=A.aaR(A.acf.Temperature);break;case 32:E8=A.aaR(A.acf.
AnimalLoss);break;case 2:E8=A.aaR(A.acf.Rating);break;case 8:E8=A.aaR(A.acf.Ar6);
break;case 64:E8=A.aaR(A.acf.Unregister);break;case 512:E8=A.aaR(A.acf.ARO);break;
case 1024:E8=A.aaR(A.acf.LinkTransponder);break;case 262144:E8=A.aaR(A.acf.UnlinkTransponder
);break;case 2048:E8=A.aaR(A.acf.Ts);break;case 4096:E8=A.aaR(A.acf.Calving);break;
case 8192:E8=A.aaR(A.acf.DryOff);break;case 32768:E8=A.aaR(A.acf.AB1);break;case
524288:E8=A.aaR(A.acf.AB3);break;case 65536:E8=A.aaR(A.acf.Delete);break;case 16384:
case 131072:E8=A.aaR(A.acf.Bjh);break;case 0:E8=A.aaR(A.acf.A7t);break;default:throw new
Error(AIi+Azw.toFixed());}return E8;},_Init:function(aArg){C.EnumToString._Init.
call(this,aArg);this.__proto__=C.ActionToString;},_className:"Device::ActionToString"
};C.ACTIONS_COUNT=19;C.PopupTimeout=2000;C.ITable={Filter:null,Id:2,CF:function(
Ad,A3){return 0;},VU:function(Ad,A3){return A.jV;},Akh:function(G){A.we(this,0);
A.pe([this,this.DX],this);},H2:function(Ad,A3){return false;},Hu:function(Ad,A3){
return this.Sh(Ad,A3);},OnSetId:function(E){if(this.Id===E)return;this.Id=E;},B9:
function(){return 0;},Bk:function(E){if(this.Filter===E)return;this.Filter=E;A.abo([
this,this.Fn,this.Fr],0);},Fr:function(Aq){this.Bk(Aq);},I4:function(Ad,A3){var BAM=
this.VV(Ad,A3);return A._GetAutoObject(C.Converter).A$f(BAM);},VV:function(Ad,A3
){return 0;},Sh:function(Ad,A3){return 0;},A6t:function(Ad,A3){return this.CF(Ad
,A3);},Ox:function(){var Jm=0;var BBy=this.Id;return Jm;},Oz:function(AoJ){var HD=
0;var BBy=this.Id;return HD===1;},YA:function(){return-1;},ZG:function(Ad,A3,CZ){
return false;},Hm:function(Ad,A3,CZ){return false;},ZF:function(Ad,A3,CZ){return false;
},N4:function(Ad,A3,CZ){return false;},ZE:function(Ad,A3,CZ){return false;},Ach:
function(Ad,A3,CZ){return this.ZF(Ad,A3,CZ);},AkM:function(Ad,A3,CZ){var BAN=A._GetAutoObject(
C.Converter).AdW(CZ);return this.ZG(Ad,A3,BAN);},A_T:function(Ad,A3,CZ){return this.
Hm(Ad,A3,CZ);},AOD:function(Ad,A3){return this.CF(Ad,A3);},Bij:function(Ad,A3){return this.
CF(Ad,A3);},Bn_:function(Ad,A3,CZ){return this.Hm(Ad,A3,CZ);},Bn6:function(Ad,A3
,CZ){return this.Hm(Ad,A3,CZ);},LS:function(aColumn,A9){return-1;},AmN:function(
Ad,A3){return this.CF(Ad,A3);},Bn4:function(Ad,A3,CZ){return this.Hm(Ad,A3,CZ);}
,ACT:function(Ad,A3){return this.CF(Ad,A3);},AUj:function(Ad,A3,ML){return this.
Hm(Ad,A3,ML);},DX:function(G){this.BxS();},BxS:function(){return-1;},KM:function(
Ad,A3){return 0;},Uv:function(Ad,A3,CZ){return false;},AgT:function(aColumn,A9){
return-1;},E5:function(){return false;},Bik:function(Ad,A3){var BAO=this.CF(Ad,A3
);return A._GetAutoObject(C.Converter).BiL(BAO);},Bip:function(Ad,A3){return this.
CF(Ad,A3);},AOL:function(Ad,A3){return this.CF(Ad,A3);},Bn8:function(Ad,A3,CZ){var
BAP=A._GetAutoObject(C.Converter).A44(CZ);return this.Hm(Ad,A3,BAP);},Bn9:function(
Ad,A3,CZ){return this.Hm(Ad,A3,CZ);},Boe:function(Ad,A3,CZ){return this.Hm(Ad,A3
,CZ);},AjE:function(aColumn,A9){return false;},Aeg:function(aColumn,A9){return false;
},Biy:function(Ad,A3){return this.CF(Ad,A3);},Boc:function(Ad,A3,CZ){return this.
Hm(Ad,A3,CZ);},Lf:function(){return this.QF()>=this.HI();},HI:function(){return 0;
},Abm:function(){return-1;},QF:function(){return 0;},Fn:function(){return this.Filter;
},_Init:function(aArg){this.__proto__=C.ITable;A.h7++;},_Done:function(){this.__proto__=
null;A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((B=this.Filter)&&(
B._cycle!=D))B._Mark(B._cycle=D);if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D
);},I:null,_cycle:0,_observers:null,_className:"Device::ITable"};C.MaxAutoActionsCount=
4;C.WeightRecordingMode={Automatic:0,Manual:1,LAST:2};C.WeightRecordingModeToString={
BR:function(A7){var Vb=A7;var Nt=A.jV;switch(Vb){case 0:Nt=A.aaR(A.acf.Automatic
);break;case 1:Nt=A.aaR(A.acf.Manual);break;default:throw new Error(Aop+Vb.toFixed(
));}return Nt;},_Init:function(aArg){C.EnumToString._Init.call(this,aArg);this.__proto__=
C.WeightRecordingModeToString;},_className:"Device::WeightRecordingModeToString"
};C.BooleanToAutoOnOff={BR:function(A7){switch(A7){case 0:return A.aaR(A.acf.Off
);case 1:return A.aaR(A.acf.AaY);default:return Ayg+A7.toFixed();}},_Init:function(
aArg){C.EnumToString._Init.call(this,aArg);this.__proto__=C.BooleanToAutoOnOff;}
,_className:"Device::BooleanToAutoOnOff"};C.WeightStep=100;C.WeightRecordingScope={
CurrentWeightOnly:0,BirthWeightOnly:1,BirthAndCurrentWeight:2,NoWeightRecording:
3,LAST:4};C.WeightRecordingScopeToString={BR:function(A7){var Bfw=A7;var AA0=A.jV;
switch(Bfw){case 0:AA0=A.aaR(A.acf.Bhj);break;case 1:AA0=A.aaR(A.acf.BgX);break;
case 2:AA0=A.aaR(A.acf.BgT);break;case 3:AA0=A.aaR(A.acf.BjJ);break;default:throw new
Error(AYG+Bfw.toFixed());}return AA0;},_Init:function(aArg){C.EnumToString._Init.
call(this,aArg);this.__proto__=C.WeightRecordingScopeToString;},_className:"Device::WeightRecordingScopeToString"
};C.BodyTemperature={Undertemperature:0,Normal:1,Elevated:2,Fever:3,LAST:4};C.Kh={
A4B:0,Temperature:1,Rating:2,Afq:3,BCb:4,BCS:5,BFC:6,BDw:7,BEg:8,BC6:9,BEe:10,BEH:
11,BEI:12,BFH:13,BCm:14,LAST:15};C.AnimalListContentToString={BR:function(A7){var
BbW=A7;var Rs=A.jV;switch(BbW){case 0:Rs=AIj;break;case 14:Rs=AIk;break;case 2:Rs=
AYH;break;case 1:Rs=AYI;break;case 3:Rs=AIl;break;case 4:Rs=AYJ;break;case 5:Rs=
AYK;break;case 6:Rs=AYL;break;case 7:Rs=AYM;break;case 8:Rs=AYN;break;case 9:Rs=
AYO;break;case 10:Rs=AYP;break;case 11:Rs=AYQ;break;case 12:Rs=AYR;break;case 13:
Rs=AYS;break;default:throw new Error(AYT+BbW.toFixed());}return Rs;},_Init:function(
aArg){C.EnumToString._Init.call(this,aArg);this.__proto__=C.AnimalListContentToString;
},_className:"Device::AnimalListContentToString"};C.GenderFilterCriterion={A4:0,
Abe:function(){var Av=A._NewObject(C.GenderFilterCriterion,0);Av.E_(this);return Av;
},E_:function(AI){C.FilterCriterion.E_.call(this,AI);var Av=(C.GenderFilterCriterion.
isPrototypeOf(AI)?AI:null);if(!!Av)this.A4=Av.A4;},_Init:function(aArg){C.FilterCriterion.
_Init.call(this,aArg);this.__proto__=C.GenderFilterCriterion;},_className:"Device::GenderFilterCriterion"
};C.AnimalTypeFilterCriterion={A4:0,Abe:function(){var Av=A._NewObject(C.AnimalTypeFilterCriterion
,0);Av.E_(this);return Av;},E_:function(AI){C.FilterCriterion.E_.call(this,AI);var
Av=(C.AnimalTypeFilterCriterion.isPrototypeOf(AI)?AI:null);if(!!Av)this.A4=Av.A4;
},Initialize:function(A3,Eb,A9,Qb){this.EJ=A3;this.Operator=Eb;this.A4=A9;this.YD=
Qb;return this;},_Init:function(aArg){C.FilterCriterion._Init.call(this,aArg);this.
__proto__=C.AnimalTypeFilterCriterion;},_className:"Device::AnimalTypeFilterCriterion"
};C.BCo={Aus:0,BCn:1,BD2:2,A_z:3,A5a:4,BFi:5,BCR:6,BFh:7,LinkTransponder:8,Ts:9,
Weighing:10,Calving:11,LinkNaisId:12,BEG:13,ClearBirthNoticePending:14,DeleteAnimal:
15,ScanNaisId:16,Edit:17,ClearPurchaseNoticePending:18};C.AutoRegistrationModeToString={
BR:function(A7){var Vb=A7;var Nt=A.jV;switch(Vb){case 0:Nt=A.aaR(A.acf.Bhb);break;
case 1:Nt=A.aaR(A.acf.BiP);break;case 2:Nt=A.aaR(A.acf.Off);break;default:throw new
Error(AYU+Vb.toFixed());}return Nt;},_Init:function(aArg){C.EnumToString._Init.call(
this,aArg);this.__proto__=C.AutoRegistrationModeToString;},_className:"Device::AutoRegistrationModeToString"
};C.AutoRegistrationMode={UserConfirmed:0,Background:1,Off:2,LAST:3};C.AssessmentFilterCriterion={
A4:0,Abe:function(){var Av=A._NewObject(C.AssessmentFilterCriterion,0);Av.E_(this
);return Av;},E_:function(AI){C.FilterCriterion.E_.call(this,AI);var Av=(C.AssessmentFilterCriterion.
isPrototypeOf(AI)?AI:null);if(!!Av)this.A4=Av.A4;},Initialize:function(A3,Eb,A9,
Qb){this.EJ=A3;this.Operator=Eb;this.A4=A9;this.YD=Qb;return this;},_Init:function(
aArg){C.FilterCriterion._Init.call(this,aArg);this.__proto__=C.AssessmentFilterCriterion;
},_className:"Device::AssessmentFilterCriterion"};C.D9={AdP:0,Temperature:1,Afq:
2,Rating:3,LAST:4};C.FactoryResetScope={DeviceAndAnimalData:0,AnimalDataOnly:1,LAST:
2};C.FactoryResetScopeToString={BR:function(A7){switch(A7){case 0:return A.aaR(A.
acf.DeviceAndAnimalData);case 1:return A.aaR(A.acf.AnimalDataOnly);default:return AYV+
A7.toFixed();}},_Init:function(aArg){C.EnumToString._Init.call(this,aArg);this.__proto__=
C.FactoryResetScopeToString;},_className:"Device::FactoryResetScopeToString"};C.
AUU={Cg:function(){A._GetAutoObject(C.Device).ArZ(this.toString());},Init:function(
aArg){var B;A.zX([this,this.BeD],[B=A._GetAutoObject(C.Device),B.A8L,B.BaS],0);this.
BeD(this);},BeD:function(G){this.E3(A._GetAutoObject(C.Device).AGN);A.we(this,0);
},_Init:function(aArg){C.Int32ArrayWrapper._Init.call(this,aArg);this.__proto__=
C.AUU;this.Zu(3);this.Init(aArg);},_className:"Device::TemperaturesLowClass"};C.
AUT={Init:function(aArg){var B;A.zX([this,this.BeB],[B=A._GetAutoObject(C.Device
),B.A8K,B.BaR],0);this.BeB(this);},Cg:function(){A._GetAutoObject(C.Device).ArY(
this.toString());},BeB:function(G){this.E3(A._GetAutoObject(C.Device).AGM);A.we(
this,0);},_Init:function(aArg){C.Int32ArrayWrapper._Init.call(this,aArg);this.__proto__=
C.AUT;this.Zu(3);this.Init(aArg);},_className:"Device::TemperaturesHighClass"};C.
AMv={Init:function(aArg){var B;A.zX([this,this.Bd6],[B=A._GetAutoObject(C.Device
),B.A72,B.Bax],0);this.Bd6(this);},Bd6:function(G){this.E3(A._GetAutoObject(C.Device
).ABB);A.we(this,0);},_Init:function(aArg){C.Int32ArrayWrapper._Init.call(this,aArg
);this.__proto__=C.AMv;this.Zu(3);this.Init(aArg);},_className:"Device::AnimalTypesClass"
};C.UInt64FilterCriterion={A4:0,Abe:function(){var Av=A._NewObject(C.UInt64FilterCriterion
,0);Av.E_(this);return Av;},E_:function(AI){C.FilterCriterion.E_.call(this,AI);var
Av=(C.UInt64FilterCriterion.isPrototypeOf(AI)?AI:null);if(!!Av)this.A4=Av.A4;},Initialize:
function(A3,Eb,A9,Qb){this.EJ=A3;this.Operator=Eb;this.A4=A9;this.YD=Qb;return this;
},_Init:function(aArg){C.FilterCriterion._Init.call(this,aArg);this.__proto__=C.
UInt64FilterCriterion;},_className:"Device::UInt64FilterCriterion"};C.BooleanToAssignedUnassignedString={
BR:function(A7){switch(A7){case 0:return A.aaR(A.acf.Akg);case 1:return A.aaR(A.
acf.Bgz);default:return Ayg+A7.toFixed();}},_Init:function(aArg){C.EnumToString.
_Init.call(this,aArg);this.__proto__=C.BooleanToAssignedUnassignedString;},_className:
"Device::BooleanToAssignedUnassignedString"};C.C6={UNDEFINED:0,AT:1,BA:2,BE:3,BCt:
4,BCI:5,BCJ:6,BCK:7,BCL:8,BCM:9,BCW:10,BCX:11,BC7:12,BC8:13,BDl:14,FR:15,GR:16,BDx:
17,BDy:18,BDF:19,BDG:20,BDL:21,BDM:22,BDN:23,BDO:24,BDU:25,BD8:26,BD9:27,BEm:28,
BEn:29,BEE:30,BEF:31,BEX:32,BEY:33,BEZ:34,BFb:35,BFc:36,BFv:37,A$g:38,BFw:39,LAST:
40};C.CountryToString={BR:function(A7){var J4=A7;var FE=A.jV;switch(J4){case 1:FE=
A.aaR(A.acm.BgL);break;case 2:FE=A.aaR(A.acm.BgY);break;case 3:FE=A.aaR(A.acm.BgS
);break;case 4:FE=A.aaR(A.acm.Bg0);break;case 5:FE=A.aaR(A.acm.Bg3);break;case 6:
FE=A.aaR(A.acm.BoY);break;case 7:FE=A.aaR(A.acm.Bg6);break;case 8:FE=A.aaR(A.acm.
Bhk);break;case 9:FE=A.aaR(A.acm.Bhl);break;case 10:FE=A.aaR(A.acm.Bie);break;case
11:FE=A.aaR(A.acm.Bhq);break;case 12:FE=A.aaR(A.acm.BhV);break;case 13:FE=A.aaR(
A.acm.Boq);break;case 14:FE=A.aaR(A.acm.Bh4);break;case 15:FE=A.aaR(A.acm.Bia);break;
case 16:FE=A.aaR(A.acm.BiG);break;case 17:FE=A.aaR(A.acm.Bhi);break;case 18:FE=A.
aaR(A.acm.BiM);break;case 19:FE=A.aaR(A.acm.BiV);break;case 20:FE=A.aaR(A.acm.Bi7
);break;case 21:FE=A.aaR(A.acm.Bi9);break;case 22:FE=A.aaR(A.acm.Bji);break;case
23:FE=A.aaR(A.acm.Bjl);break;case 24:FE=A.aaR(A.acm.Bjf);break;case 25:FE=A.aaR(
A.acm.Bjn);break;case 26:FE=A.aaR(A.acm.BjD);break;case 27:FE=A.aaR(A.acm.BjK);break;
case 28:FE=A.aaR(A.acm.Bno);break;case 29:FE=A.aaR(A.acm.Bnp);break;case 30:FE=A.
aaR(A.acm.BnR);break;case 31:FE=A.aaR(A.acm.BnT);break;case 32:FE=A.aaR(A.acm.BoX
);break;case 33:FE=A.aaR(A.acm.Bop);break;case 34:FE=A.aaR(A.acm.Boo);break;case
35:FE=A.aaR(A.acm.Bpn);break;case 36:FE=A.aaR(A.acm.Bo7);break;case 37:FE=A.aaR(
A.acm.Bpr);break;case 38:FE=A.aaR(A.acm.A$g);break;case 39:FE=A.aaR(A.acm.Bpq);break;
case 0:FE=Aoq;break;default:throw new Error(Aod+J4.toFixed());}return FE;},Lt:function(
A7){var J4=A7;var BM=A.jV;switch(J4){case 1:BM=S6;break;case 2:BM=ZZ;break;case 3:
BM=UN;break;case 4:BM=WZ;break;case 5:BM=Is;break;case 6:BM=Z8;break;case 7:BM=UO;
break;case 8:BM=Z1;break;case 9:BM=W1;break;case 10:BM=P8;break;case 11:BM=Z2;break;
case 12:BM=Z3;break;case 13:BM=Z7;break;case 14:BM=UP;break;case 15:BM=W2;break;
case 16:BM=Z4;break;case 17:BM=W0;break;case 18:BM=O2;break;case 19:BM=Ri;break;
case 20:BM=W3;break;case 21:BM=W4;break;case 22:BM=W6;break;case 23:BM=Z5;break;
case 24:BM=W5;break;case 25:BM=W7;break;case 26:BM=W8;break;case 27:BM=S7;break;
case 28:BM=UQ;break;case 29:BM=UR;break;case 30:BM=AcH;break;case 31:BM=S8;break;
case 32:BM=W9;break;case 33:BM=Afw;break;case 34:BM=Z6;break;case 35:BM=Z9;break;
case 36:BM=Z0;break;case 37:BM=Afx;break;case 38:BM=KX;break;case 39:BM=AcI;break;
case 0:BM=Aoq;break;default:throw new Error(Aod+J4.toFixed());}return BM;},_Init:
function(aArg){C.EnumToString._Init.call(this,aArg);this.__proto__=C.CountryToString;
},_className:"Device::CountryToString"};C.EaseOfDelivery={Unspecified:0,Easy:1,Moderate:
2,Difficult:3,Surgery:4,LAST:5};C.EaseOfDeliveryToString={BR:function(A7){var Bct=
A7;var AtC=A.jV;switch(Bct){case 0:AtC=A.aaR(A.acf.Unspecified);break;case 1:AtC=
A.aaR(A.acf.Easy);break;case 2:AtC=A.aaR(A.acf.Moderate);break;case 3:AtC=A.aaR(
A.acf.Difficult);break;case 4:AtC=A.aaR(A.acf.Surgery);break;default:throw new Error(
AIm+Bct.toFixed());}return AtC;},_Init:function(aArg){C.EnumToString._Init.call(
this,aArg);this.__proto__=C.EaseOfDeliveryToString;},_className:"Device::EaseOfDeliveryToString"
};C.WhereAbouts={UNB:0,EZU:1,EMA:2,VZU:3,VMA:4,VIV:5,TOT:6,V48:7,V3T:8,MGE:9,VKB:
10,LAST:11};C.WhereAboutsToString={BR:function(A7){var Bgn=A7;var AaM=A.jV;switch(
Bgn){case 0:AaM=A.aaR(A.acf.Unknown);break;case 1:AaM=A.aaR(A.acf.BpA);break;case
2:AaM=A.aaR(A.acf.Bpz);break;case 3:AaM=A.aaR(A.acf.BpI);break;case 4:AaM=A.aaR(
A.acf.BpH);break;case 5:AaM=A.aaR(A.acf.BpF);break;case 6:AaM=A.aaR(A.acf.BpC);break;
case 7:AaM=A.aaR(A.acf.BpE);break;case 8:AaM=A.aaR(A.acf.BpD);break;case 9:AaM=A.
aaR(A.acf.BpB);break;case 10:AaM=A.aaR(A.acf.BpG);break;default:throw new Error(
Aab+Bgn.toFixed());}return AaM;},_Init:function(aArg){C.EnumToString._Init.call(
this,aArg);this.__proto__=C.WhereAboutsToString;},_className:"Device::WhereAboutsToString"
};C.Breed={UNKNOWN:0,SBT:1,RBT:2,JER:3,BV:4,RVA:5,RV:6,RDN:7,DSN:8,FL:9,GV:10,PIN:
11,HIN:12,MW:13,VW:14,LMP:15,DBV:16,AS:17,VR:18,CHA:19,LIM:20,WBB:21,BA:22,MA:23
,SAL:24,MON:25,AU:26,PIE:27,CHI:28,ROM:29,MAR:30,WP:31,BB:32,DA:33,AA:34,HE:35,SH:
36,HLD:37,WB:38,GAL:39,LR:40,BGA:41,LG:42,BRA:43,NOR:44,UST:45,ZEB:46,GRV:47,DEX:
48,WGA:49,LH:50,SD:51,FR:52,TUX:53,TLM:54,FLF:55,UCK:56,BLA:57,WIT:58,LAK:59,RHV:
60,AT:61,GR:62,PIF:63,PS:64,GVF:65,BVF:66,RBF:67,HWF:68,MWF:69,VWF:70,LPF:71,BRN:
72,BAZ:73,AO:74,BE:75,WL:76,BIS:77,YAK:78,SON:79,TAU:80,IND:81,TIN:82,WAG:83,XFF:
84,XFM:85,XMM:86,EVO:87,BLH:88,TLH:89,MGR:90,WSH:91,MUR:92,EBS:93,ERI:94,PAR:95,
XZF:96,XZM:97,XZZ:98,LAST:99};C.BreedToString={BR:function(A7){var Bv=A7;var BH=
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
Error(AYW+Bv.toFixed());}return BH;},_Init:function(aArg){C.EnumToString._Init.call(
this,aArg);this.__proto__=C.BreedToString;},_className:"Device::BreedToString"};
C.TD={timer:null,Q:null,Ec:0,Dx:0,JO:0,Pp:1000,Pz:1000,Bw:false,Cw:false,B1:true
,Me:function(G){var F;if(!this.timer)return;if(this.Ec<0){this.Dx=this.timer.Bs;
this.Ec=0;}var Au=(this.timer.Bs-this.Dx)|0;var Oo=this.Pp;var He=this.Pz+this.Pp;
var LD=0;var Jj=this.Ec;if(!Jj&&(Au>=Oo)){Jj=1;Au=Au-Oo;}if((Jj>0)&&(Au>=He)){var
Ie=(Au/He)|0;Au=Au-(Ie*He);Jj=Jj+Ie;}if((Jj>2)&&!this.JO)Jj=1;if(Jj!==this.Ec){this.
Dx=this.timer.Bs-(((B=Au)<0)?B+0x100000000:B);this.Ec=Jj;}if(Jj>0)LD=this.Pz;var
KB=(Jj>=this.JO)&&(this.JO>0);if(!!this.Q){if((!KB&&(Au>=LD))&&((F=this.Q,F[1].call(
F[0]))!==this.Cw))(F=this.Q,F[2].call(F[0],this.Cw));if((KB||((Au<LD)&&(Jj>0)))&&((
F=this.Q,F[1].call(F[0]))!==this.B1))(F=this.Q,F[2].call(F[0],this.B1));}if(KB)this.
Ar(false);},HM:function(E){if(E<0)E=0;this.JO=E;},Fp:function(E){if(E<100)E=100;
this.Pp=E;},Uj:function(E){if(E<0)E=0;this.Pz=E;},Ar:function(E){if(this.Bw===E)
return;this.Bw=E;if(!E&&!!this.timer){A.z9([this,this.Me],this.timer,0);this.timer=
null;}if(E){this.timer=A._GetAutoObject(A.acl.Aed);A.zV([this,this.Me],this.timer
,0);this.Ec=-1;}},_Init:function(aArg){this.__proto__=C.TD;A.h7++;},_Done:function(
){this.__proto__=null;A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((
B=this.timer)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Q)&&((B=B[0])._cycle
!=D))B._Mark(B._cycle=D);if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null
,_cycle:0,_observers:null,_className:"Device::BoolEffect"};C.Ii={AnimalId:0,TransponderId:
1,BDX:2,BDW:3,BD0:4,BDZ:5};C.AuS={BCr:0,BC0:1};C.AnimalIdGenerationMethodToString={
BR:function(A7){var Alk=A7;var AoS=A.jV;switch(Alk){case 0:AoS=A.aaR(A.acf.Uc);break;
case 1:AoS=A.aaR(A.acf.Transponder);break;case 3:AoS=(A.aaR(A.acf.Manual)+N$)+A.
aaR(A.acf.Male);break;case 2:AoS=(A.aaR(A.acf.Manual)+N$)+A.aaR(A.acf.Female);break;
case 4:AoS=(A.aaR(A.acf.Manual)+N$)+A.aaR(A.acf.Unknown);break;case 5:AoS=(A.aaR(
A.acf.Manual)+N$)+Ayp;break;default:throw new Error(AYX+Alk.toFixed());}return AoS;
},_Init:function(aArg){C.EnumToString._Init.call(this,aArg);this.__proto__=C.AnimalIdGenerationMethodToString;
},_className:"Device::AnimalIdGenerationMethodToString"};C.DirectionOfCountingToString={
BR:function(A7){var Azv=A7;var A1n=A.jV;switch(Azv){case 0:A1n=AYY;break;case 1:
A1n=AYZ;break;default:throw new Error(AY0+Azv.toFixed());}return A1n;},_Init:function(
aArg){C.EnumToString._Init.call(this,aArg);this.__proto__=C.DirectionOfCountingToString;
},_className:"Device::DirectionOfCountingToString"};C.EnumToIcon={AsB:function(A7
){throw new Error(Aoi+A7.toFixed());},AsC:function(A7){throw new Error(Aoi+A7.toFixed(
));},_Init:function(aArg){this.__proto__=C.EnumToIcon;A.h7++;},_Done:function(){
this.__proto__=null;A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((B=
this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:
"Device::EnumToIcon"};C.Aec={AsB:function(A7){return A.aaL(A.ach.AUH);},AsC:function(
A7){var Azv=A7;var RB=-1;switch(Azv){case 0:RB=3;break;case 1:RB=2;break;default:
throw new Error(AIn+Azv.toFixed());}return RB;},_Init:function(aArg){C.EnumToIcon.
_Init.call(this,aArg);this.__proto__=C.Aec;},_className:"Device::DirectionOfCountingToIcon"
};C.AdT={AsB:function(A7){return A.aaL(A.ach.AUF);},AsC:function(A7){var Alk=A7;
var RB=-1;switch(Alk){case 0:RB=0;break;case 1:RB=6;break;case 3:RB=4;break;case
2:RB=5;break;case 4:RB=2;break;case 5:RB=3;break;default:throw new Error(AIn+Alk.
toFixed());}return RB;},_Init:function(aArg){C.EnumToIcon._Init.call(this,aArg);
this.__proto__=C.AdT;},_className:"Device::AnimalIdGenerationMethodToIcon"};C.Pv={
UNDEFINED:0,SH:1,AOO:2,ARy:3,AON:4,A7o:5,HE:6,A_x:7,A4S:8,AMG:9,AT$:10,BE:11,BB:
12,A7b:13,AUa:14,AUb:15,AUM:16};C.GermanStateToString={BR:function(A7){var Bp=A7;
var GF=A.jV;switch(Bp){case 1:GF=A.aaR(A.acp.SH);break;case 2:GF=A.aaR(A.acp.AOO
);break;case 3:GF=A.aaR(A.acp.ARy);break;case 4:GF=A.aaR(A.acp.AON);break;case 5:
GF=A.aaR(A.acp.A7o);break;case 6:GF=A.aaR(A.acp.HE);break;case 7:GF=A.aaR(A.acp.
A_x);break;case 8:GF=A.aaR(A.acp.A4S);break;case 9:GF=A.aaR(A.acp.AMG);break;case
10:GF=A.aaR(A.acp.AT$);break;case 11:GF=A.aaR(A.acp.BE);break;case 12:GF=A.aaR(A.
acp.BB);break;case 13:GF=A.aaR(A.acp.A7b);break;case 14:GF=A.aaR(A.acp.AUa);break;
case 15:GF=A.aaR(A.acp.AUb);break;case 16:GF=A.aaR(A.acp.AUM);break;case 0:GF=Aoq;
break;default:throw new Error(As4+Bp.toFixed());}return GF;},Lt:function(A7){var
Bp=A7;var GF=A.jV;switch(Bp){case 1:GF=A.aaR(A.acp.BnU);break;case 2:GF=A.aaR(A.
acp.AOO);break;case 3:GF=A.aaR(A.acp.ARy);break;case 4:GF=A.aaR(A.acp.AON);break;
case 5:GF=A.aaR(A.acp.BjA);break;case 6:GF=A.aaR(A.acp.HE);break;case 7:GF=A.aaR(
A.acp.Bnz);break;case 8:GF=A.aaR(A.acp.BgO);break;case 9:GF=A.aaR(A.acp.AMG);break;
case 10:GF=A.aaR(A.acp.AT$);break;case 11:GF=A.aaR(A.acp.BE);break;case 12:GF=A.
aaR(A.acp.BB);break;case 13:GF=A.aaR(A.acp.Bjm);break;case 14:GF=A.aaR(A.acp.AUa
);break;case 15:GF=A.aaR(A.acp.AUb);break;case 16:GF=A.aaR(A.acp.AUM);break;case
0:GF=Aoq;break;default:throw new Error(As4+Bp.toFixed());}return GF;},Bpa:function(
A7){var Bp=A7;var Gg=-1;switch(Bp){case 0:Gg=0;break;case 1:Gg=1;break;case 2:Gg=
2;break;case 3:Gg=3;break;case 4:Gg=4;break;case 5:Gg=5;break;case 6:Gg=6;break;
case 7:Gg=7;break;case 8:Gg=8;break;case 9:Gg=9;break;case 10:Gg=10;break;case 11:
Gg=11;break;case 12:Gg=12;break;case 13:Gg=13;break;case 14:Gg=14;break;case 15:
Gg=15;break;case 16:Gg=16;break;default:throw new Error(As4+Bp.toFixed());}return Gg;
},Bpb:function(A7){var Bp=A7;var Gg=A.jV;switch(Bp){case 1:Gg=As5;break;case 2:Gg=
As6;break;case 3:Gg=As7;break;case 4:Gg=As8;break;case 5:Gg=Ayq;break;case 6:Gg=
Aor;break;case 7:Gg=AY1;break;case 8:Gg=AY2;break;case 9:Gg=AY3;break;case 10:Gg=
AY4;break;case 11:Gg=UN;break;case 12:Gg=AY5;break;case 13:Gg=AY6;break;case 14:
Gg=AY7;break;case 15:Gg=AY8;break;case 16:Gg=AY9;break;case 0:Gg=Aoq;break;default:
throw new Error(As4+Bp.toFixed());}return Gg;},_Init:function(aArg){C.EnumToString.
_Init.call(this,aArg);this.__proto__=C.GermanStateToString;},_className:"Device::GermanStateToString"
};C.EartagNrAssignmentMode={OneSingleRange:0,TwoNumberRanges:1,LAST:2};C.EartagNrAssignmentModeToString={
Lt:function(A7){var Vb=A7;var Nt=A.jV;switch(Vb){case 0:Nt=AY_;break;case 1:Nt=AY$;
break;default:throw new Error(AIo+Vb.toFixed());}return Nt;},BR:function(A7){var
Vb=A7;var Nt=A.jV;switch(Vb){case 0:Nt=A.aaR(A.acf.Bnh);break;case 1:Nt=A.aaR(A.
acf.Bpp);break;default:throw new Error(AIo+Vb.toFixed());}return Nt;},_Init:function(
aArg){C.EnumToString._Init.call(this,aArg);this.__proto__=C.EartagNrAssignmentModeToString;
},_className:"Device::EartagNrAssignmentModeToString"};C.BCk={BEc:0,BD4:1,BDf:2,
BDg:3,BDh:4,BFd:5};C.EnumToCodeset={Amx:function(Ah0){throw new Error(AZa+Ah0.toFixed(
));},Aef:function(A7){throw new Error(Aoi+A7.toFixed());},AqN:function(){A.ab5("%s"
,AIp);return 0;},H3:function(){A.ab5("%s",AIp);return 0;},_Init:function(aArg){this.
__proto__=C.EnumToCodeset;A.h7++;},_Done:function(){this.__proto__=null;A.h7--;}
,_ReInit:function(){},_Mark:function(D){var B;if((B=this.I)&&(B._cycle!=D))B._Mark(
B._cycle=D);},I:null,_cycle:0,_observers:null,_className:"Device::EnumToCodeset"
};C.M0={Amx:function(Ah0){var Bv;switch(Ah0){case 1:Bv=1;break;case 2:Bv=2;break;
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
Bv=0;}return Bv;},Aef:function(A7){var Bv=A7;var BJ=0;switch(Bv){case 0:BJ=0;break;
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
case 98:BJ=111;break;default:throw new Error(AZb+Bv.toFixed());}return BJ;},AqN:
function(){return 0;},H3:function(){return 111;},_Init:function(aArg){C.EnumToCodeset.
_Init.call(this,aArg);this.__proto__=C.M0;},_className:"Device::BreedToHitCodeset"
};C.ReasonOfLeaving={Unknown:0,A_4:1,RL:2,A_r:3,A6P:4,BEl:5,A$h:6,A7k:7,A4$:8,A_n:
9,A7i:10,A5d:11,BEB:12,BEC:13,LAST:14};C.ReasonOfLeavingToString={BR:function(A7
){var Adz=A7;var Tm=A.jV;switch(Adz){case 0:Tm=A.aaR(A.acf.Unknown);break;case 1:
Tm=A.aaR(A.acf.A_4);break;case 2:Tm=A.aaR(A.acf.RL);break;case 3:Tm=A.aaR(A.acf.
A_r);break;case 4:Tm=A.aaR(A.acf.A6P);break;case 5:Tm=A.aaR(A.acf.Bni);break;case
6:Tm=A.aaR(A.acf.A$h);break;case 7:Tm=A.aaR(A.acf.A7k);break;case 8:Tm=A.aaR(A.acf.
A4$);break;case 9:Tm=A.aaR(A.acf.A_n);break;case 10:Tm=A.aaR(A.acf.A7i);break;case
11:Tm=A.aaR(A.acf.A5d);break;case 12:Tm=A.aaR(A.acf.Bnt);break;case 13:Tm=A.aaR(
A.acf.Bns);break;default:throw new Error(Ayr+Adz.toFixed());}return Tm;},_Init:function(
aArg){C.EnumToString._Init.call(this,aArg);this.__proto__=C.ReasonOfLeavingToString;
},_className:"Device::ReasonOfLeavingToString"};C.Ahw={Amx:function(Ah0){var Pd;
switch(Ah0){case 1:Pd=1;break;case 2:Pd=2;break;case 3:Pd=3;break;case 4:Pd=4;break;
case 5:Pd=5;break;case 6:Pd=6;break;case 7:Pd=7;break;case 8:Pd=8;break;case 9:Pd=
9;break;case 10:Pd=10;break;case 11:Pd=11;break;case 12:Pd=12;break;case 13:Pd=13;
break;default:Pd=0;}return Pd;},Aef:function(A7){var Pd=A7;var Ji=0;switch(Pd){case
0:Ji=0;break;case 2:Ji=2;break;case 8:Ji=8;break;case 11:Ji=11;break;case 4:Ji=4;
break;case 10:Ji=10;break;case 7:Ji=7;break;case 5:Ji=5;break;case 9:Ji=9;break;
case 3:Ji=3;break;case 12:Ji=12;break;case 13:Ji=13;break;case 1:Ji=1;break;case
6:Ji=6;break;default:throw new Error(AIq+Pd.toFixed());}return Ji;},AqN:function(
){return 0;},H3:function(){return 13;},_Init:function(aArg){C.EnumToCodeset._Init.
call(this,aArg);this.__proto__=C.Ahw;},_className:"Device::ReasonOfLeavingToCodeset"
};C.KW={Amx:function(Ah0){var K8;switch(Ah0){case 1:K8=1;break;case 2:K8=2;break;
case 3:K8=3;break;case 4:K8=4;break;case 5:K8=5;break;case 6:K8=6;break;case 7:K8=
7;break;case 8:K8=8;break;case 9:K8=9;break;case 10:K8=10;break;default:K8=0;}return K8;
},Aef:function(A7){var K8=A7;var Ji=0;switch(K8){case 0:Ji=0;break;case 2:Ji=2;break;
case 1:Ji=1;break;case 9:Ji=9;break;case 6:Ji=6;break;case 8:Ji=8;break;case 7:Ji=
7;break;case 5:Ji=5;break;case 10:Ji=10;break;case 4:Ji=4;break;case 3:Ji=3;break;
default:throw new Error(AIq+K8.toFixed());}return Ji;},AqN:function(){return 0;}
,H3:function(){return 10;},_Init:function(aArg){C.EnumToCodeset._Init.call(this,
aArg);this.__proto__=C.KW;},_className:"Device::WhereAboutsToCodeset"};C.AmF={_Init:
function(aArg){this.__proto__=C.AmF;A.h7++;},_Done:function(){this.__proto__=null;
A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((B=this.I)&&(B._cycle!=
D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:"Device::EmptyClass"
};C.CalfDeregistrationsTableFields={Year:0,Deregistrations:1,Deaths:2};C.CalfDeregistrations={
Deregistrations:0,Deaths:0,Year:0,E3:function(Ad,AH){var HD=C.Row.E3.call(this,Ad
,AH);if(HD&&!!AH){this.AkA(AH.CF(Ad,0));this.Aws(AH.CF(Ad,1));this.Awr(AH.CF(Ad,
2));}return HD;},Cg:function(AH){var HD=C.Row.Cg.call(this,AH);if(HD&&!!AH){var Jm=
AH.Ox();if(Jm<=0)A.ab5("%s",W$);else{if(this.AmZ())this.CL=AH.YA();AH.Hm(this.CL
,0,this.Year);AH.Hm(this.CL,1,this.Deregistrations);AH.Hm(this.CL,2,this.Deaths);
AH.Oz(Jm);}}return HD;},Gp:function(){C.Row.Gp.call(this);this.AkA(-1);},E5:function(
){C.Row.E5.call(this);this.AkA(0);this.Aws(0);this.Awr(0);},Aws:function(E){if(this.
Deregistrations===E)return;this.Deregistrations=E;A.abo([this,this.Bka,this.Aws]
,0);},Awr:function(E){if(this.Deaths===E)return;this.Deaths=E;A.abo([this,this.Bj_
,this.Awr],0);},AkA:function(E){if(this.Year===E)return;this.Year=E;A.abo([this,
this.Aru,this.AkA],0);},Bka:function(){return this.Deregistrations;},Bj_:function(
){return this.Deaths;},Aru:function(){return this.Year;},_Init:function(aArg){C.
Row._Init.call(this,aArg);this.__proto__=C.CalfDeregistrations;this.TableId=4;},
_className:"Device::CalfDeregistrations"};C.AuQ={Undefined:0,Display:1,A_w:2,A_J:
3,A$A:4,BDz:5,BEO:6,BFo:7,BDV:8,BCN:9,BB$:10,A6b:11,A_y:12,BFy:13,A7n:14,BFB:15};
C.DeviceComponentToString={BR:function(A7){var Bcm=A7;var Qi=A.jV;switch(Bcm){case
0:Qi=Ays;break;case 10:Qi=A.aaR(A.acf.Bgo);break;case 9:Qi=A.aaR(A.acf.Bg5);break;
case 1:Qi=A.aaR(A.acf.BhK);break;case 11:Qi=A.aaR(A.acf.A6b);break;case 5:Qi=A.aaR(
A.acf.BpJ);break;case 8:Qi=A.aaR(A.acf.BhM);break;case 14:Qi=A.aaR(A.acf.A7n);break;
case 2:Qi=A.aaR(A.acf.A_w);break;case 12:Qi=A.aaR(A.acf.A_y);break;case 6:Qi=A.aaR(
A.acf.Bny);break;case 3:Qi=A.aaR(A.acf.A_J);break;case 7:Qi=A.aaR(A.acf.BhN);break;
case 13:Qi=A.aaR(A.acf.Bht);break;case 15:Qi=A.aaR(A.acf.BpN);break;case 4:Qi=A.
aaR(A.acf.A$A);break;default:throw new Error(Ayt+Bcm.toFixed());}return Qi;},_Init:
function(aArg){C.EnumToString._Init.call(this,aArg);this.__proto__=C.DeviceComponentToString;
},_className:"Device::DeviceComponentToString"};C.AgN={Amx:function(Ah0){return Ah0;
},Aef:function(A7){return A7;},AqN:function(){return 0;},H3:function(){return 4;
},_Init:function(aArg){C.EnumToCodeset._Init.call(this,aArg);this.__proto__=C.AgN;
},_className:"Device::EaseOfDeliveryToCodeset"};C.AeO={AsB:function(A7){return A.
aaL(A.ach.APW);},AsC:function(A7){var Bcy=A7;var RB=-1;switch(Bcy){case 0:RB=0;break;
case 1:RB=1;break;case 2:RB=2;break;default:throw new Error(AZc+Bcy.toFixed());}
return RB;},_Init:function(aArg){C.EnumToIcon._Init.call(this,aArg);this.__proto__=
C.AeO;},_className:"Device::MotherSelectionFilterModeToIcon"};C.WhereAboutsFilterCriterion={
A4:0,Abe:function(){var Av=A._NewObject(C.WhereAboutsFilterCriterion,0);Av.E_(this
);return Av;},E_:function(AI){C.FilterCriterion.E_.call(this,AI);var Av=(C.WhereAboutsFilterCriterion.
isPrototypeOf(AI)?AI:null);if(!!Av)this.A4=Av.A4;},Initialize:function(A3,Eb,A9,
Qb){this.EJ=A3;this.Operator=Eb;this.A4=A9;this.YD=Qb;return this;},_Init:function(
aArg){C.FilterCriterion._Init.call(this,aArg);this.__proto__=C.WhereAboutsFilterCriterion;
},_className:"Device::WhereAboutsFilterCriterion"};C.BD7={ANQ:0,BCU:1,APz:2,LAST:
3};C.BFf={GK:0,AVq:1,Hi:2,Year:3,LAST:4};C.TimespanDaysToString={BR:function(A7){
var BfX=A7;var ABb=A.jV;switch(BfX){case 0:ABb=A.aaR(A.acf.A5q);break;case 1:ABb=
A.aaR(A.acf.AVq);break;case 2:ABb=A.aaR(A.acf.Hi);break;case 3:ABb=A.aaR(A.acf.Year
);break;default:throw new Error(AZd+BfX.toFixed());}return ABb;},_Init:function(
aArg){C.EnumToString._Init.call(this,aArg);this.__proto__=C.TimespanDaysToString;
},_className:"Device::TimespanDaysToString"};C.AhP={BEi:0,BC1:1,BDB:2,BDE:3,BDD:
4,BC2:5,BDC:6,LAST:7};C.USBStateToString={BR:function(A7){var Bgi=A7;var Bp=A.jV;
switch(Bgi){case 0:Bp=AZe;break;case 2:Bp=AIr;break;case 1:Bp=AZf;break;case 5:Bp=
AZg;break;case 3:Bp=AZh;break;case 4:Bp=AZi;break;case 6:Bp=AZj;break;default:throw new
Error(AHK+Bgi.toFixed());}return Bp;},_Init:function(aArg){C.EnumToString._Init.
call(this,aArg);this.__proto__=C.USBStateToString;},_className:"Device::USBStateToString"
};C.AgH={BDA:0,BCl:1,BED:2};C.Axv={ACe:A.jV,Timestamp:0,AD2:0,AD7:0,AGg:0,OnSetTimestamp:
function(E){if(this.Timestamp===E)return;this.Timestamp=E;},AFe:function(E){if(this.
AD2===E)return;this.AD2=E;},AFk:function(E){if(this.AD7===E)return;this.AD7=E;},
AFt:function(E){if(this.AGg===E)return;this.AGg=E;},AEV:function(E){if(this.ACe===
E)return;this.ACe=E;},_Init:function(aArg){this.__proto__=C.Axv;A.h7++;},_Done:function(
){this.__proto__=null;A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((
B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:
"Device::SoftwareVersionInformation"};C.Avk={Timestamp:0,ARm:0,ARn:0,AU5:0,AU6:0
,AU4:0,ARl:0,OnSetTimestamp:function(E){if(this.Timestamp===E)return;this.Timestamp=
E;},AFb:function(E){if(this.ARm===E)return;this.ARm=E;},AFc:function(E){if(this.
ARn===E)return;this.ARn=E;},AFI:function(E){if(this.AU5===E)return;this.AU5=E;},
AFJ:function(E){if(this.AU6===E)return;this.AU6=E;},AFH:function(E){if(this.AU4===
E)return;this.AU4=E;},AFa:function(E){if(this.ARl===E)return;this.ARl=E;},_Init:
function(aArg){this.__proto__=C.Avk;A.h7++;},_Done:function(){this.__proto__=null;
A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((B=this.I)&&(B._cycle!=
D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:"Device::HardwareVersionInformation"
};C.Aql={Undefined:0,BDq:1,BCz:2};C.Agu={Manual:0,TransponderId:1,LAST:2};C.AnimalIdAutoGenerationMethodToString={
BR:function(A7){var BbU=A7;var A0T=A.jV;switch(BbU){case 0:A0T=A.aaR(A.acf.A5h);
break;case 1:A0T=A.aaR(A.acf.A5w);break;default:throw new Error(AZk+BbU.toFixed(
));}return A0T;},_Init:function(aArg){C.EnumToString._Init.call(this,aArg);this.
__proto__=C.AnimalIdAutoGenerationMethodToString;},_className:"Device::AnimalIdAutoGenerationMethodToString"
};C.Hi={A42:0,ADR:1,ACB:2,AD3:3,ABD:4,AD5:5,ADT:6,ADS:7,ABK:8,AGp:9,AEf:10,AEd:11
,ACm:12,LAST:13};C.MonthToString={BR:function(A7){var BdA=A7;var Xy=A.jV;switch(
BdA){case 1:Xy=A.aaR(A.act.ADR);break;case 2:Xy=A.aaR(A.act.ACB);break;case 3:Xy=
A.aaR(A.act.AD3);break;case 4:Xy=A.aaR(A.act.ABD);break;case 5:Xy=A.aaR(A.act.AD5
);break;case 6:Xy=A.aaR(A.act.ADT);break;case 7:Xy=A.aaR(A.act.ADS);break;case 8:
Xy=A.aaR(A.act.ABK);break;case 9:Xy=A.aaR(A.act.AGp);break;case 10:Xy=A.aaR(A.act.
AEf);break;case 11:Xy=A.aaR(A.act.AEd);break;case 12:Xy=A.aaR(A.act.ACm);break;default:
throw new Error(AZl+BdA.toFixed());}return Xy;},_Init:function(aArg){C.EnumToString.
_Init.call(this,aArg);this.__proto__=C.MonthToString;},_className:"Device::MonthToString"
};C.VM={FileName:A.jV,AGi:0,EV:0,AgH:0,E5:function(){this.Fb(0);this.AgH=1;this.
FileName=A.jV;this.AGi=0;},Fb:function(E){if(this.EV===E)return;this.EV=E;A.abo([
this,this.Sz,this.Fb],0);},Sz:function(){return this.EV;},_Init:function(aArg){this.
__proto__=C.VM;A.h7++;},_Done:function(){this.__proto__=null;A.h7--;},_ReInit:function(
){},_Mark:function(D){var B;if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:
null,_cycle:0,_observers:null,_className:"Device::DataExportContext"};C.AVx={Init:
function(aArg){var B;A.zX([this,this.BeQ],[B=A._GetAutoObject(C.Device),B.A8X,B.
BaZ],0);this.BeQ(this);},Cg:function(){A._GetAutoObject(C.Device).Ar4(this.toString(
));},BeQ:function(G){this.E3(A._GetAutoObject(C.Device).AG8);A.we(this,0);},_Init:
function(aArg){C.Int32ArrayWrapper._Init.call(this,aArg);this.__proto__=C.AVx;this.
Zu(3);this.Init(aArg);},_className:"Device::WeightGainsLowClass"};C.AVw={Init:function(
aArg){var B;A.zX([this,this.BeO],[B=A._GetAutoObject(C.Device),B.A8W,B.BaY],0);this.
BeO(this);},Cg:function(){A._GetAutoObject(C.Device).Ar3(this.toString());},BeO:
function(G){this.E3(A._GetAutoObject(C.Device).AG7);A.we(this,0);},_Init:function(
aArg){C.Int32ArrayWrapper._Init.call(this,aArg);this.__proto__=C.AVw;this.Zu(3);
this.Init(aArg);},_className:"Device::WeightGainsHighClass"};C.AVz={Init:function(
aArg){var B;A.zX([this,this.BeS],[B=A._GetAutoObject(C.Device),B.A80,B.Ba2],0);this.
BeS(this);},Cg:function(){A._GetAutoObject(C.Device).Ar5(this.toString());},BeS:
function(G){this.E3(A._GetAutoObject(C.Device).AG$);A.we(this,0);},_Init:function(
aArg){C.Int32ArrayWrapper._Init.call(this,aArg);this.__proto__=C.AVz;this.Zu(3);
this.Init(aArg);},_className:"Device::WeightValuesBirthClass"};C.AVv={Init:function(
aArg){var B;A.zX([this,this.BeM],[B=A._GetAutoObject(C.Device),B.A8V,B.BaX],0);this.
BeM(this);},Cg:function(){A._GetAutoObject(C.Device).Ar2(this.toString());},BeM:
function(G){this.E3(A._GetAutoObject(C.Device).AG6);A.we(this,0);},_Init:function(
aArg){C.Int32ArrayWrapper._Init.call(this,aArg);this.__proto__=C.AVv;this.Zu(3);
this.Init(aArg);},_className:"Device::WeightGainsAverageClass"};C.AMw={Init:function(
aArg){var B;A.zX([this,this.Bd7],[B=A._GetAutoObject(C.Device),B.A73,B.Bay],0);this.
Bd7(this);},Bd7:function(G){this.E3(A._GetAutoObject(C.Device).ABC);A.we(this,0);
},_Init:function(aArg){C.Int32ArrayWrapper._Init.call(this,aArg);this.__proto__=
C.AMw;this.Zu(3);this.Init(aArg);},_className:"Device::AnimalTypesWeightGainsClass"
};C.BD_={BEb:0,BD1:1,BCT:2,BFz:3,Unknown:4};C.BCx={None:0,BEj:1,BEd:2,BD$:3,BEa:
4};C.BFt={A7C:0,Manual:1,TransponderId:2,NaisId:3,LAST:4};C.TransponderLinkageIdChangeMethodToString={
BR:function(A7){var Bf1=A7;var ABd=A.jV;switch(Bf1){case 0:ABd=A.aaR(A.acf.A7C);
break;case 1:ABd=A.aaR(A.acf.A5h);break;case 2:ABd=A.aaR(A.acf.A5w);break;case 3:
ABd=A.aaR(A.acf.Bhr);break;default:throw new Error(AZm+Bf1.toFixed());}return ABd;
},_Init:function(aArg){C.EnumToString._Init.call(this,aArg);this.__proto__=C.TransponderLinkageIdChangeMethodToString;
},_className:"Device::TransponderLinkageIdChangeMethodToString"};C.A_o={BAF:function(
AoD){var Ka=A.ab0(A.abV(AoD,15),0,10);var J4=A._GetAutoObject(C.Converter).WV(Ka
);if(!!J4){if(J4===10){if((AoD.length!==16)||!A._GetAutoObject(A.acj.VA).AVh(AoD
))return 0;else return Ka;}else return Ka;}else{J4=A._GetAutoObject(C.Converter).
WV(A._GetAutoObject(C.Device).SI);if(!!J4&&(J4===10)){if(!A._GetAutoObject(A.acj.
VA).AVh(AoD))return 0;if(AoD.length===12){var BbT=A.ab0(A.abV(AoD,10),0,10);var AJ7=
A._GetAutoObject(C.Converter).Bpj(BbT);if((BbT>0)&&!!AJ7)return(A._GetAutoObject(
C.Converter).Aqs(J4)*1000000000000)+A.ab0(A.abV(AoD,10),0,10);}}}return 0;},Be0:
function(J5){if((J5.length!==10)||!A._GetAutoObject(A.acj.VA).AVh(J5))return 0;var
AAF=A._NewObject(A.Core.Bs,0);var A3y=false;var A3D=A.abW(J5,4,4);var AtJ=A.wz(A3D
,0,10);if((AtJ<2000)||(AtJ>2100)){A3D=A.abV(J5,4);AtJ=A.wz(A3D,0,10);A3y=true;}if((
AtJ<2000)||(AtJ>2100))return 0;AAF.Year=AtJ;var AKQ;var AzN;if(A3y){AKQ=A.abW(J5
,4,2);AzN=A.wz(AKQ,0,10);}else{AKQ=A.abW(J5,2,2);AzN=A.wz(AKQ,0,10);}if((AzN<1)||(
AzN>12))return 0;AAF.Ul(AzN);var AKP;var AzM;if(A3y){AKP=A.abW(J5,6,2);AzM=A.wz(
AKP,0,10);}else{AKP=A.abV(J5,2);AzM=A.wz(AKP,0,10);}if((AzM<1)||(AzM>AAF.Zi()))return 0;
AAF.Lo(AzM);return AAF.JP();},_Init:function(aArg){this.__proto__=C.A_o;A.h7++;}
,_Done:function(){this.__proto__=null;A.h7--;},_ReInit:function(){},_Mark:function(
D){var B;if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:
null,_className:"Device::ParserClass"};C.AnE={_Init:function(){C.A_o._Init.call(
this,0);},_ReInit:function(){},_variants:function(){return this;},_this:null};C.
AnimalTableFieldsToString={BR:function(A7){var Aai=A7;var MN=A.jV;switch(Aai){case
14:MN=A.aaR(A.acf.Afo);break;case 32:MN=A.aaR(A.acf.Breed);break;case 4:MN=A.aaR(
A.acf.Aea);break;case 28:MN=A.aaR(A.acf.A47);break;case 33:MN=A.aaR(A.acf.AgE);break;
case 23:MN=A.aaR(A.acf.KH);break;case 7:MN=A.aaR(A.acf.Afj);break;case 2:MN=A.aaR(
A.acf.P);break;case 0:MN=A.aaR(A.acf.GM);break;case 8:MN=A.aaR(A.acf.Alarm);break;
case 9:MN=A.aaR(A.acf.AB9);break;case 38:MN=A.aaR(A.acf.BhL);break;case 11:MN=A.
aaR(A.acf.Fever);break;case 29:MN=A.aaR(A.acf.ARa);break;case 18:MN=A.aaR(A.acf.
M2);break;case 26:MN=A.aaR(A.acf.Uc);break;case 22:MN=A.aaR(A.acf.Transponder);break;
case 1:MN=A.aaR(A.acf.GI);break;case 34:MN=A.aaR(A.acf.Jf);break;case 6:case 25:
case 27:case 10:case 37:case 12:case 17:case 5:case 3:case 35:case 36:case 15:case
16:case 24:case 31:case 20:case 30:case 21:case 19:case 13:MN=A.jV;break;default:
throw new Error(AIs+A7.toFixed());}return MN;},_Init:function(aArg){C.EnumToString.
_Init.call(this,aArg);this.__proto__=C.AnimalTableFieldsToString;},_className:"Device::AnimalTableFieldsToString"
};C.AD0={Bg:0,BE9:1,LAST:2};C.ListViewScopeToString={BR:function(A7){var Bzn=A7;
var A2f=A.jV;switch(Bzn){case 0:A2f=A.aaR(A.acf.Bg);break;case 1:A2f=A.aaR(A.acf.
Bom);break;default:throw new Error(AZn+A7.toFixed());}return A2f;},_Init:function(
aArg){C.EnumToString._Init.call(this,aArg);this.__proto__=C.ListViewScopeToString;
},_className:"Device::ListViewScopeToString"};C.AG_={BF2:0,BF1:1,BF0:2,LAST:3};C.
WeightValuePrecisionToString={BR:function(A7){var BB7=A7;var ALr=A.jV;switch(BB7
){case 0:ALr=AZo+A.aaR(A.acf.Az1);break;case 1:ALr=AZp+A.acf.Aiz;break;case 2:ALr=
AZq+A.acf.Aiz;break;default:throw new Error(AZr+A7.toFixed());}return ALr;},_Init:
function(aArg){C.EnumToString._Init.call(this,aArg);this.__proto__=C.WeightValuePrecisionToString;
},_className:"Device::WeightValuePrecisionToString"};C.Agz={BR:function(A7){var AKY=
A7;if(AKY===1)return A.aaR(A.acf.BiJ);else return C.AnimalTypeToString.BR.call(this
,A7);},_Init:function(aArg){C.AnimalTypeToString._Init.call(this,aArg);this.__proto__=
C.Agz;},_className:"Device::AnimalTypeToStringHeifer"};C.Y1={RL:0,BEf:1,LAST:2};
C.MassDeregistrationCriterionToString={BR:function(A7){var Bzq=A7;var A2k=A.jV;switch(
Bzq){case 0:A2k=A.aaR(A.acf.BjN);break;case 1:A2k=A.aaR(A.acf.ARV);break;default:
throw new Error(AHn+A7.toFixed());}return A2k;},_Init:function(aArg){C.EnumToString.
_Init.call(this,aArg);this.__proto__=C.MassDeregistrationCriterionToString;},_className:
"Device::MassDeregistrationCriterionToString"};C.UInt64PartialFilterCriterion={A4:
A.jV,Zg:0,OA:0,Abe:function(){var Av=A._NewObject(C.UInt64PartialFilterCriterion
,0);Av.E_(this);return Av;},E_:function(AI){C.FilterCriterion.E_.call(this,AI);var
Av=(C.UInt64PartialFilterCriterion.isPrototypeOf(AI)?AI:null);if(!!Av){this.A4=Av.
A4;this.Zg=Av.Zg;this.OA=Av.OA;}},Initialize:function(A3,Eb,A9,Atj,AIZ,Qb){this.
EJ=A3;this.Operator=Eb;this.A4=A9;this.YD=Qb;this.Zg=Atj;this.OA=AIZ;return this;
},_Init:function(aArg){C.FilterCriterion._Init.call(this,aArg);this.__proto__=C.
UInt64PartialFilterCriterion;},_className:"Device::UInt64PartialFilterCriterion"
};C.BCY={Idle:0,BEK:1,BEV:2,BFa:3,Error:4};
C._Init=function(){C.Int32FilterCriterion.__proto__=C.FilterCriterion;C.StringFilterCriterion.
__proto__=C.FilterCriterion;C.Table.__proto__=C.ITable;C.Animal.__proto__=C.Row;
C.Rating.__proto__=C.Row;C.HelperClass.__proto__=C.AmF;C.BoolFilterCriterion.__proto__=
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
C.AUU.__proto__=C.Int32ArrayWrapper;C.AUT.__proto__=C.Int32ArrayWrapper;C.AMv.__proto__=
C.Int32ArrayWrapper;C.UInt64FilterCriterion.__proto__=C.FilterCriterion;C.BooleanToAssignedUnassignedString.
__proto__=C.EnumToString;C.CountryToString.__proto__=C.EnumToString;C.EaseOfDeliveryToString.
__proto__=C.EnumToString;C.WhereAboutsToString.__proto__=C.EnumToString;C.BreedToString.
__proto__=C.EnumToString;C.AnimalIdGenerationMethodToString.__proto__=C.EnumToString;
C.DirectionOfCountingToString.__proto__=C.EnumToString;C.Aec.__proto__=C.EnumToIcon;
C.AdT.__proto__=C.EnumToIcon;C.GermanStateToString.__proto__=C.EnumToString;C.EartagNrAssignmentModeToString.
__proto__=C.EnumToString;C.M0.__proto__=C.EnumToCodeset;C.ReasonOfLeavingToString.
__proto__=C.EnumToString;C.Ahw.__proto__=C.EnumToCodeset;C.KW.__proto__=C.EnumToCodeset;
C.CalfDeregistrations.__proto__=C.Row;C.DeviceComponentToString.__proto__=C.EnumToString;
C.AgN.__proto__=C.EnumToCodeset;C.AeO.__proto__=C.EnumToIcon;C.WhereAboutsFilterCriterion.
__proto__=C.FilterCriterion;C.TimespanDaysToString.__proto__=C.EnumToString;C.USBStateToString.
__proto__=C.EnumToString;C.AnimalIdAutoGenerationMethodToString.__proto__=C.EnumToString;
C.MonthToString.__proto__=C.EnumToString;C.AVx.__proto__=C.Int32ArrayWrapper;C.AVw.
__proto__=C.Int32ArrayWrapper;C.AVz.__proto__=C.Int32ArrayWrapper;C.AVv.__proto__=
C.Int32ArrayWrapper;C.AMw.__proto__=C.Int32ArrayWrapper;C.TransponderLinkageIdChangeMethodToString.
__proto__=C.EnumToString;C.AnimalTableFieldsToString.__proto__=C.EnumToString;C.
ListViewScopeToString.__proto__=C.EnumToString;C.WeightValuePrecisionToString.__proto__=
C.EnumToString;C.Agz.__proto__=C.AnimalTypeToString;C.MassDeregistrationCriterionToString.
__proto__=C.EnumToString;C.UInt64PartialFilterCriterion.__proto__=C.FilterCriterion;
};C._ReInit=function(){var B;if((B=C.Device._this))B._ReInit(),C.Device._ReInit.
call(B);if((B=C.Converter._this))B._ReInit(),C.Converter._ReInit.call(B);if((B=C.
Helper._this))B._ReInit(),C.Helper._ReInit.call(B);if((B=C.AnE._this))B._ReInit(
),C.AnE._ReInit.call(B);};C.DH=function(D){var B;if((B=C.Device._this)&&(B._cycle
!=D))B._Done(C.Device._this=null);if((B=C.Converter._this)&&(B._cycle!=D))B._Done(
C.Converter._this=null);if((B=C.Helper._this)&&(B._cycle!=D))B._Done(C.Helper._this=
null);if((B=C.AnE._this)&&(B._cycle!=D))B._Done(C.AnE._this=null);};return C;})(
);

/* VitalControl demonstration application, © Urban GmbH & Co.KG 2023 */