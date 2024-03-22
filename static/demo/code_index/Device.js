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
var Cc="ERROR: Cannot add criterion, it is already in the list.";var BF="ERROR: BatteryChargeState is read only";
var E7="ERROR: UpdateChargeActive is read only";var Hp="ERROR: ScanState is read only.";
var IS="ERROR: MeasureState is read only.";var Ir="ERROR: Temperature value is read only";
var O1="ERROR: UpdateDataTable called for Undefined data table.";var P3="ERROR: UpdateDataTable called for unknown data table id=";
var P4="ERROR: SyncState is read only.";var CQ="ERROR: ScanTransponder is read only.";
var Fe="ERROR: Body weight value is read only";var Lu="ERROR: Predicted temperature value is read only";
var P5="ERROR: TransferProgress is read only";var JZ="ERROR: TransferTarget is read only";
var N_="ERROR: unhandled assessment.";var P6="Unhandled enum BodyTemperature: ";
var MG="AU";var S8="AT";var US="BE";var Z8="BA";var W5="BG";var Is="CA";var UT="CN";
var Z9="TW";var W6="HR";var Z_="CY";var W7="CZ";var Z$="DK";var Aaa="EE";var UU=
"FI";var W8="FR";var P7="DE";var Aab="GR";var O2="HU";var Rl="IE";var W9="IT";var
W_="JP";var W$="LV";var Xa="LT";var Aac="LU";var Xb="MT";var Xc="NL";var S9="NO";
var UV="PL";var UW="PT";var AcQ="RO";var S_="RU";var Aad="SK";var Afz="SI";var Aae=
"ES";var Xd="SE";var Aaf="CH";var Aag="TR";var AhV="UA";var J0="UK";var Aah="US";
var Lv=".";var AhW="-";var Aof="ERROR: Unhandled mass unit: ";var N$=" ";var Xe=
"Unhandled gender";var Aog="Unhandled animal type";var AhX="Unhandled Device::MassUnit.";
var AhY="Unhandled Device::AnimalListContent.";var Rm="Avid";var UX="Ordicam / IER SA";
var Aoh="Agrident";var Aoi="Datamars";var Aoj="Allflex";var Aok="Texas Instruments";
var AfA="Nedap";var Ale="Digital Angel";var Aol="null";var Ax2="[ ";var O3=", ";
var Rn=" ]";var Ax3="Unhandled language";var UY="Unhandled Device::AnimalListAction.";
var AsX="Temperature unit conversion not supported: ";var Ax4="->";var Ax5="=";var
Ax6=">";var Aom="<";var AfB="!=";var Aon="WARNING: Unhandled operator.";var IT="Unknown birth type";
var Aoo="Unhandled country: ";var Xf="ERROR: Cannot start transaction";var Aop="ERROR: Table is null, cannot load row (";
var AsY=")";var AsZ="Table Id mismatch!";var As0="ERROR: Row index (";var Aoq=") out of bounds [0,";
var Aor="]";var As1="ERROR: Table is full. Item limit: ";var Ax7="Device::ScanTransponder not set";
var Ax8="Unhandled TransponderType.";var Ax9="Unhandled ScanState.";var As2="Could not load animal with transponder";
var Ax_="Birth type";var P8="Time calving";var Ax$="Pend. reg. notice";var AVM="Perished";
var AVN="Rating temp.";var AVO="Location";var AVP=" mother";var AHh="Reason leaving";
var AHi="Time alarm";var AfC="Time first weighing";var Aos="Time control";var AVQ=
"Time temp.";var AHj="Time watch";var Alf="Time weighing";var AHk="Assessment";var
AHl="Time rating";var AVR="ERROR: Unhandled AnimalTable filter field:";var AHm="Field ";
var AVS="ERROR: Unhandled RatingTable filter field:";var AVT="ERROR: Unhandled table ";
var AcR=" filter fields.";var AVU=" [";var AVV="WARNING: Unhandled filter criterion type.";
var AHn="0";var As3="No table specified";var AHo="Invalid animal id generation method: ";
var AHp="Unhandled AnimalIdGenerationMethod: ";var Aya="Invalid gender: ";var AHq=
"Invalid ear tag number assignment mode: ";var Ayb=";";var AVW="Invalid animal creation error code: ";
var AVX="Invalid EartagNrAssignmentMode: ";var AVY="Unsupported exponent: ";var AVZ=
"Unknown whereabouts type: ";var AHr="Unhandled Gender: ";var AV0="Unhandled AnimalIdAutoGenerationMethod: ";
var O4="\n";var Ayc="\n\n";var AV1="Bootloader:\nV\xA0";var AV2="Middleware:\nV\xA0";
var AV3="GUI:\nV\xA0";var AV4="Mainboard: ";var AV5="Torchboard: ";var AV6="Operator not supported.";
var AHs="Unhandled Device::TransponderAssignmentIdChangeMethod: ";var AHt="Unhandled mass deregistration criterion: ";
var Aot="Unhandled enum value ";var Ayd="UNDEFINED";var AV7="Boot";var AV8="Charge";
var AV9="ChargeWarning";var AHu="ControlledPowerOff";var AV_="DeviceMain";var AHv=
"DeviceService";var AHw="DeviceInfo";var AHx="DeviceDataManagement";var AV$="DeviceAnimalDataMenu";
var AHy="DeviceDeviceDataMenu";var AWa="DeviceCheck";var AHz="Home";var Ro="Settings";
var Xg="DateTimeSettings";var AWb="UnitsSettings";var AWc="DataAcquisitionSettings";
var AWd="RegistrationAutomaticSettings";var AWe="RegistrationPresettingsSettings";
var AWf="TransponderAssignmentSettings";var AWg="TransponderUnlinkSettings";var AWh=
"TemperatureSettings";var AhZ="WeightGainSettings";var AHA="DeviceSettings";var AWi=
"RegistrationSettings";var AWj="InitializationSettings";var AHB="PremisesSettings";
var AHC="Sleep";var Aye="Sync";var P9="EditAnimalData";var AWk="EditAnimalDataNaisId";
var AWl="AnimalList";var AWm="AnimalListFilter";var As4="AlarmListFilter";var AWn=
"WatchListFilter";var AWo="AnimalActionActions";var AWp="AnimalActionTemperature";
var AWq="TemperatureMeasurement";var AWr="AnimalActionWeighing";var AWs="AnimalActionRate";
var As5="AnimalActionUnregister";var AWt="AnimalActionPerished";var AWu="AnimalActionNewBornCare";
var AWv="AlarmList";var AWw="ControlMeasure";var AWx="ControlList";var AWy="RangeTest";
var AWz="ListsMain";var AWA="ListsIdManagement";var AWB="WatchList";var AWC="EvaluationMenuMain";
var AHD="EvaluationMenuWeights";var Alg="EvaluationLosses";var AWD="EvaluationRatings";
var AWE="EvaluationTemperatures";var AWF="EvaluationWeights";var Ayf="EvaluationWeightsRecent";
var Alh="EvaluationBirthWeights";var Ah0="AnimalEvaluationFilter";var Ayg="NewMenu";
var Aou="NewAnimals";var Ah1="NewAnimalManualData";var AWG="MassRecording";var Ayh=
"NewAnimalTransponderData";var AHE="NewAnimalLoss";var AfD="AutoActionScanScreen";
var AHF="ManualActionScanScreen";var Aai="SetTransponderScreen";var Ali="SetSaveTransponderScreen";
var Aov="NewAnimalSetTransponderScreen";var AWH="NewAnimalsSetTransponderScreen";
var AWI="NewAnimalCalvingDataScreen";var AWJ="WeightListScreen";var AWK="AnimalSingleInfoScreen";
var AWL="AnimalMultiInfoScreen";var As6="AnimalRegistrationDetails";var AHG="FreshCowListScreen";
var AHH="FreshCowListFilterScreen";var AWM="DryCowListScreen";var AWN="DryCowListFilterScreen";
var AWO="NoTransponderListScreen";var AWP="NoTransponderListFilterScreen";var AWQ=
"YoungNoTransponderListScreen";var AWR="YoungNoTransponderListFilterScreen";var AWS=
"NoNaisIdListScreen";var AWT="NoNaisIdListFilterScreen";var AWU="RegistrationsListScreen";
var AWV="RegistrationsListFilterScreen";var AWW="ActionListScreen";var Ayi="ActionListFilterScreen";
var AHI="UpdateScreen";var AHJ="MotherScanScreen";var AHK="SetSaveNaisIdScreen";
var AHL="PurchasedAnimalsList";var AHM="TextInput";var AHN="AnimalActions";var AWX=
"Unhandled display mode: ";var AWY="None";var AWZ="Actions Settings";var AW0="Auto Action";
var AW1="Menu Item Settings";var AW2="Rating Type";var AW3="Weighing settings";var
Ayj="Options";var AHO="AnimalSearch";var AW4="AnimalSearchUnfiltered";var AHP="AnimalSearchDriedOff";
var Ah2="MeasurementReady";var UZ="AnimalMultiInfoMenu";var AW5="MassRecordingDefaults";
var Aaj="MassRecordingFields";var AW6="MassRecordingMenu";var AW7="PurchasedAnimalsListMenu";
var Alj="BirthRegistrationsListMenu";var AfE="Unhandled overlay menu: ";var AcS=
"Error";var Aow="Idle";var AW8="IdScanned";var O5="NotFound";var AHQ="Progress";
var AHR="Unhandled scan state: ";var AW9="Prediction";var AHS="Ready";var AHT="Unhandled measure state: ";
var AHU="Unhandled temperature unit: ";var AW_="Unhandled species: ";var AW$="English";
var AXa="Nederlands";var AXb="Deutsch";var AXc="Eesti";var AXd="Suomalainen";var
AXe="Fran\xE7ais";var AXf="\u0395\u03BB\u03BB\u03B7\u03BD\u03B9\u03BA\u03AC";var
AHV="\u0411\u044A\u043B\u0433\u0430\u0440\u0441\u043A\u0438";var AXg="Italiano";
var AHW="\u0420\u0443\u0441\u0441\u043A\u0438\u0439";var AHX="Espa\xF1ol";var Ayk=
"T\xFCrk\xE7e";var AXh="\u6B63\u9AD4\u5B57/\u7E41\u9AD4\u5B57";var AXi="\u010Ce\u0161tina";
var AXj="Bosanski";var AXk="Norsk";var AXl="\u0423\u043A\u0440\u0430\u0457\u043D\u0441\u044C\u043A\u0438\u0439";
var AHY="Unhandled language: ";var AXm="EN";var AXn="ET";var As7="EL";var As8="ZH";
var AHZ="CS";var AXo="BS";var AXp="Unhandled gender: ";var AXq="Unhandled birth type: ";
var AXr="Exporting";var AXs="ImportFinish";var AXt="ImportStart";var AXu="Importing";
var AXv="Init";var AXw="Unhandled sync state: ";var AH0="Unhandled rating attribute: ";
var AXx="Unhandled assessment: ";var Ayl="Illegal boolean value: ";var AH1="Unhandled popup ID:";
var AXy="Unknown";var AXz="Severe Error";var AXA="ErrorsDeviceDriverCheck";var AXB=
"Enter Sleep";var AXC="About";var AH2="InfoSoftwareVersions";var AH3="InfoHardwareVersions";
var AH4="InfoSerial";var AH5="ShutDown";var Aym="SuccessDataSync";var Ayn="SuccessResetFactory";
var AH6="SuccessResetAnimalData";var AXD="SuccessCreateBackup";var AH7="SuccessRestoreBackup";
var AXE="CreateBackupInProgress";var AH8="RestoreBackupInProgress";var AXF="FailedCreateBackup";
var AXG="FailedRestoreBackup";var AXH="TechnicalDetails";var AXI="WarningDataSync";
var AXJ="WarningFactory";var AXK="WarningResetAnimalData";var AXL="WarningRestart";
var AXM="WarningAutoAction";var AXN="WarningAutoActionNotApplicable";var AXO="WarningNoMenuItem";
var AXP="WarningEnterDemoMode";var AXQ="NoAnimalsRegistered";var Ayo="MaxNumAnimalsReached";
var AXR="MaxNumRatingsReached";var AXS="MaxNumCalfDeregistrationsReached";var Ayp=
"MissingTransponder";var As9="EarTagNumberTooShort";var U0="NoValidCountryCode";
var As_="WarningOutdatedAnimalWeight";var AXT="WarningOutdatedAnimalWeights";var
AXU="WarningWeightEvaluationSingular";var AXV="WarningWeightEvaluationPlural";var
AH9="ScanError";var AXW="ScanNotFound";var AH_="ScannedAnimalNotFound";var AXX="ScannedTransponderNotFound";
var AXY="AnimalNotFound";var AXZ="SuccessUnregister";var As$="SuccessUnregisterPerished";
var AX0="SuccessCreationNewAnimal";var AX1="SuccessCreationNewAnimals";var AH$="AnimalCreationInProgress";
var AX2="EvaluationInProgress";var AX3="DataSyncInProgress";var AX4="AddedToAlarm";
var AX5="RemovedFromAlarm";var AcT="AddedToWatch";var AX6="RemovedFromWatch";var
AX7="AddedToDryOff";var AX8="RemovedFromDryOff";var AX9="AnimalIdAlreadyExists";
var AIa="AnimalIdAlreadyExistsContinuable";var AX_="MissingAnimalId";var AX$="MissingAnimalIdMother";
var AYa="MissingEartagNumber";var AYb="MissingTransponderId";var AYc="TransponderAlreadyRegistered";
var AYd="TransponderAlreadyRegisteredContinuable";var AIb="TransponderAlreadyRegisteredCapturable";
var AYe="HelpAnimalInfoRating";var AYf="WarningReassignTransponder";var AYg="CannotReassignNaisId";
var AIc="WarningResetToDefaultValue";var AId="WarningResetThresholds";var AYh="WarningResetTempThresholds";
var AYi="UpdateFirmware";var AYj="UpdateFirmwareBatteryLow";var AYk="ConfirmFirmwareUpdated";
var Rp="ConfirmBootloaderUpdated";var Ata="QuestionAddAnotherCalfMultiples";var AIe=
"RemovedAllBirthNoticesPending";var AIf="RemovedAllPurchasedNoticePending";var Aox=
"RemovedFromBirthNoticePending";var Aoy="RemovedFromPurchasedNoticePending";var Ayq=
"SuccessClearAnimalLoss";var AYl="RemovedAnimalBirth";var AIg="RemovedAnimalPurchased";
var AYm="WarningNoActionsForAnimalLoss";var AYn="SuccessLinkTransponder";var AYo=
"SuccessChangeTransponder";var AYp="SuccessUnlinkTransponder";var AYq="SuccessLinkNaisId";
var AYr="WarningDataExportHitBirthFailed";var AYs="SuccessDataExportHitBirth";var
AYt="SuccessDataExportHitBirthDownload";var AYu="WarningDataExportHitPurchasedFailed";
var AYv="SuccessDataExportHitPurchased";var AYw="SuccessDataExportHitPurchasedDownload";
var AYx="WarningDataExportAnimalsFailed";var AYy="SuccessDataExportAnimalsRatings";
var AYz="SuccessDataExportAnimalsDownload";var AYA="WarningNoPremisesID";var AYB=
"WarningNoFlashDrivePresent";var AYC="WarningNoBackupPathPresent";var Aoz="WarningNoBackupFilePresent";
var AIh="DemoFunctionNotAvailable";var AYD="WarningImpreciseTimeSetting";var AIi=
"ConfirmationRestoreBackup";var AIj="ConfirmationMassDeregistration";var Aak="SuccessMassDeregistration";
var AIk="WarningParsedDateInFutureInvalid";var AYE="WarningParsingDateFailed";var
AIl="WarningParsingNaisIdFailed";var AYF="WarningParsingShortNaisIdWithoutPremisesId";
var Ayr="DataExportInProgress";var AYG="AnimalId";var AYH="FarmId";var Ays="GroupId";
var AYI="PersonId";var AYJ="Unhandled transponder type: ";var AYK="FDX";var AIm=
"HDX";var AoA="HDX (Urban)";var AIn="Unhandled transponder protocol: ";var AYL="Illegal RatingMode: ";
var AIo="Unhandled mass unit: ";var AIp="Max array size is 10";var Ah3="Index out of bounds";
var AYM="ERROR: Received more integers than expected!";var Alk="Unhandled double scan action :";
var AYN="Illegal WeightRecordingMode: ";var AIq="Illegal WeightRecordingScope: ";
var AIr="AnimalDataGenderType";var AYO="AnimalDataShortNaisId";var AYP="Rating";
var AIs="Temperature";var AYQ="Weight";var AYR="Alarm infos";var AYS="Control infos";
var AYT="Watch infos";var AYU="Fresh cow infos";var AYV="No transponder infos";var
AYW="Dry cow info";var AYX="No nais id infos";var AYY="Birth registrations infos";
var AYZ="Purchased registrations infos";var AY0="Young no transponder infos";var
AY1="Unhandled animal list content:";var AY2="Illegal AutoRegistrationMode: ";var
AY3="Illegal FactoryResetScope: ";var All="??";var Aal="Illegal EaseOfDelivery: ";
var AY4="Illegal Whereabouts: ";var Ayt="Illegal breed: ";var AY5="Unisex";var AY6=
"Illegal animalIdGenerationMethod: ";var AY7="Ascending";var AY8="Descending";var
AY9="Illegal directionOfCountingName: ";var AIt="Unhandled direction of counting: ";
var Ah4="Unhandled German state: ";var Atb="SH";var Atc="HH";var Atd="NI";var Ayu=
"HB";var AoB="NW";var AY_="HE";var AY$="RP";var AZa="BW";var AZb="BY";var AZc="SL";
var AZd="BB";var AZe="MV";var AZf="SN";var AZg="ST";var AZh="TH";var AZi="One Range Male Female";
var AZj="Two Ranges Male Female";var AIu="Illegal EartagAssignmentMode: ";var AZk=
"Unhandled code set value ";var AIv="Implement in derived class";var Ayv="Illegal HIT-Code: ";
var AZl="Illegal ReasonOfLeaving: ";var Ate="Illegal code: ";var Ayw="Undefined";
var AZm="Illegal DeviceComponent: ";var AZn="Unhandled Device::MotherSelectionFilterMode: ";
var AZo="Illegal Device::TimespanDays: ";var AIw="Not connected";var AZp="Host";
var AZq="Device";var AZr="Device CDC";var AZs="Host MSC";var AZt="Host HID";var AZu=
"Host CDC";var AZv="Illegal animalIdAutoGenerationMethod: ";var AZw="Unhandled month: ";
var AIx="Illegal transponderAssignmentIdChangeMethod: ";var AZx="Unhandled animal table field: ";
var AZy="Unhandled data export destination: ";var AZz="Unhandled list view scope: ";
var AZA="1 ";var AZB="100 ";var AZC="10 ";var AZD="Unhandled weight value precision: ";
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
B9:null,B_:null,CW:function(AI){if(!AI)return;var Av=this.B9;while(!!Av){if(Av===
AI)throw new Error(Cc);Av=Av.Ah;}AI.AJ=this.B_;if(!!this.B_)this.B_.Ah=AI;this.B_=
AI;if(!this.B9)this.B9=AI;},AOG:function(){return this.B9;},AOL:function(Bbu){if(
!!Bbu)return Bbu.Ah;return null;},DL:function(AI5,Eb){var Av=this.B9;while(!!Av){
if(Av.EJ===AI5){if(Eb===1)return Av;else if(Av.Operator===Eb)return Av;}Av=Av.Ah;
}return null;},Ni:function(AI){var Av=this.B9;while(!!Av){if(Av===AI){if(!!Av.AJ
)Av.AJ.Ah=Av.Ah;if(!!Av.Ah)Av.Ah.AJ=Av.AJ;if(this.B9===Av)this.B9=Av.Ah;if(this.
B_===Av)this.B_=Av.AJ;Av.Ah=null;Av.AJ=null;return;}Av=Av.Ah;}},E$:function(){var
Be=A._NewObject(C.Filter,0);var Av=this.B9;while(!!Av){Be.CW(Av.Abm());Av=Av.Ah;
}return Be;},_Init:function(aArg){this.__proto__=C.Filter;A.h7++;},_Done:function(
){this.__proto__=null;A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((
B=this.B9)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.B_)&&(B._cycle!=D))B._Mark(
B._cycle=D);if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:
null,_className:"Device::Filter"};C.FilterCriterion={Ah:null,AJ:null,EJ:-1,Operator:
1,YM:false,Abm:function(){return null;},E$:function(AI){if(!AI)return;this.EJ=AI.
EJ;this.Operator=AI.Operator;this.YM=AI.YM;},_Init:function(aArg){this.__proto__=
C.FilterCriterion;A.h7++;},_Done:function(){this.__proto__=null;A.h7--;},_ReInit:
function(){},_Mark:function(D){var B;if((B=this.Ah)&&(B._cycle!=D))B._Mark(B._cycle=
D);if((B=this.AJ)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.I)&&(B._cycle!=D
))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:"Device::FilterCriterion"
};C.Int32FilterCriterion={A4:0,Abm:function(){var Av=A._NewObject(C.Int32FilterCriterion
,0);Av.E$(this);return Av;},E$:function(AI){C.FilterCriterion.E$.call(this,AI);var
Av=(C.Int32FilterCriterion.isPrototypeOf(AI)?AI:null);if(!!Av)this.A4=Av.A4;},Initialize:
function(A3,Eb,A8,Qa){this.EJ=A3;this.Operator=Eb;this.A4=A8;this.YM=Qa;return this;
},_Init:function(aArg){C.FilterCriterion._Init.call(this,aArg);this.__proto__=C.
Int32FilterCriterion;},_className:"Device::Int32FilterCriterion"};C.DeviceClass={
AEf:0,AEe:0,Av1:0,Uw:0,OQ:null,SA:null,QX:null,SY:null,R1:null,FQ:null,An:null,Bt:
null,Agv:null,AnP:null,Pm:null,AuA:A.jV,AutoActions:A.jV,ABH:A.jV,AGS:A.jV,AGT:A.
jV,AhI:A.jV,AHb:A.jV,AHc:A.jV,ABI:A.jV,AHa:A.jV,AHf:A.jV,ABB:A.jV,ABC:A.jV,ARW:A.
jV,AR1:A.jV,AVJ:A.jV,Aa7:100,Ls:0,AMX:75,AcJ:3600,ATW:0,A1:5,AF:0,KX:50000,Pi:0,
AF9:0,AdR:0,Aq9:0,Aq8:0,ARJ:1,ARI:1,AjY:0,ARK:1,AxN:0,Afp:0,AqV:10,AUG:5,AvW:60,
AvU:0,An7:0,OJ:1,WhereAbouts:0,VQ:0,Ak7:0,AxF:3,ACD:0,Agx:1,AhS:0,AbZ:0,Aqt:0,ANV:
11,Breed:0,EartagNrAssignmentMode:0,Au0:0,ACw:0,ACv:0,Ii:5,ABA:2,Aqv:0,AOy:2,AVu:
0,D9:0,AL7:0,Kh:0,Gender:2,WeightRecordingScope:1,WeightRecordingMode:1,AnimalType:
0,MassUnit:0,AutoRegistrationMode:0,RatingMode:0,SyncState:0,OverlayMenu:0,TemperatureUnit:
0,Language:0,MeasureState:0,ScanState:0,KH:3,AeM:true,ARv:false,Aqh:true,AqW:false
,AmR:true,HG:false,AU_:false,AmS:false,AVs:false,AsR:false,AEd:false,AmE:false,UpdateActiveScreen:
function(AL){if(this.KH===AL)return;this.KH=AL;A.abo([this,this.AEq,this.BaH],0);
},Zt:function(E){if(this.K&&this.K.Zt)return this.K.Zt.apply(this,arguments);else
return C.DeviceClass.Bud.apply(this,arguments);},Bud:function(E){},BaH:function(
Aq){this.Zt(Aq);},UpdateBatteryChargeState:function(AL){if(this.Aa7===AL)return;
this.Aa7=AL;A.abo([this,this.Av6,this.AyC],0);},Awr:function(E){if(this.K&&this.
K.Awr)return this.K.Awr.apply(this,arguments);else return C.DeviceClass.Buo.apply(
this,arguments);},Buo:function(E){A.ab5("%s",BF);},AyC:function(Aq){this.Awr(Aq);
},UpdateChargeActive:function(AL){if(this.AmE===AL)return;this.AmE=AL;A.abo([this
,this.Av9,this.AyD],0);},AEX:function(E){if(this.K&&this.K.AEX)return this.K.AEX.
apply(this,arguments);else return C.DeviceClass.Buu.apply(this,arguments);},Buu:
function(E){A.ab5("%s",E7);},AyD:function(Aq){this.AEX(Aq);},UpdateScanState:function(
AL){var B;if(this.ScanState===AL)return;this.ScanState=AL;A.abo([this,this.ASz,this.
AZ_],0);A._GetAutoObject(C.Helper).BAB(this);},Ar6:function(E){if(this.K&&this.K.
Ar6)return this.K.Ar6.apply(this,arguments);else return C.DeviceClass.Bu$.apply(
this,arguments);},Bu$:function(E){A.ab5("%s",Hp);},AZ_:function(Aq){this.Ar6(Aq);
},UpdateMeasureState:function(AL){if(this.MeasureState===AL)return;this.MeasureState=
AL;A.abo([this,this.AEy,this.AIO],0);},AwQ:function(E){if(this.K&&this.K.AwQ)return this.
K.AwQ.apply(this,arguments);else return C.DeviceClass.BuT.apply(this,arguments);
},BuT:function(E){A.ab5("%s",IS);},AIO:function(Aq){this.AwQ(Aq);},UpdateTempValue:
function(AL){if(this.Ls===AL)return;this.Ls=AL;A.abo([this,this.AEC,this.AIQ],0);
},Aw4:function(E){if(this.K&&this.K.Aw4)return this.K.Aw4.apply(this,arguments);
else return C.DeviceClass.Bvf.apply(this,arguments);},Bvf:function(E){A.ab5("%s"
,Ir);},AIQ:function(Aq){this.Aw4(Aq);},AnD:function(E){if(this.K&&this.K.AnD)return this.
K.AnD.apply(this,arguments);else return C.DeviceClass.BuN.apply(this,arguments);
},BuN:function(E){},BaW:function(Aq){this.AnD(Aq);},Aw5:function(E){if(this.K&&this.
K.Aw5)return this.K.Aw5.apply(this,arguments);else return C.DeviceClass.Bvg.apply(
this,arguments);},Bvg:function(E){},Ati:function(Aq){this.Aw5(Aq);},AEV:function(
E){if(this.K&&this.K.AEV)return this.K.AEV.apply(this,arguments);else return C.DeviceClass.
But.apply(this,arguments);},But:function(E){},BaO:function(Aq){this.AEV(Aq);},AFs:
function(E){if(this.K&&this.K.AFs)return this.K.AFs.apply(this,arguments);else return C.
DeviceClass.BuV.apply(this,arguments);},BuV:function(E){},AZ4:function(Aq){this.
AFs(Aq);},UpdateMonitoring:function(AL){if(this.AEd===AL)return;this.AEd=AL;A.abo([
this,this.ASq,this.AZ4],0);},UpdateDataTable:function(Bbw){var B;switch(Bbw){case
0:A.pe([B=this.An,B.Akr],this);break;case 1:A.pe([B=this.Bt,B.Akr],this);break;case
3:A.pe([B=this.Agv,B.Akr],this);break;case 4:A.pe([B=this.Pm,B.Akr],this);break;
case 2:A.ab5("%s",O1);break;default:A.ab5("%s%e",P3,Bbw);}},AxE:function(){if(this.
K&&this.K.AxE)return this.K.AxE.apply(this,arguments);else return C.DeviceClass.
BvQ.apply(this,arguments);},BvQ:function(){},AhM:function(){if(this.K&&this.K.AhM
)return this.K.AhM.apply(this,arguments);else return C.DeviceClass.BvT.apply(this
,arguments);},BvT:function(){},AhJ:function(){if(this.K&&this.K.AhJ)return this.
K.AhJ.apply(this,arguments);else return C.DeviceClass.BvR.apply(this,arguments);
},BvR:function(){},An1:function(){if(this.K&&this.K.An1)return this.K.An1.apply(
this,arguments);else return C.DeviceClass.BvU.apply(this,arguments);},BvU:function(
){},UpdateLanguage:function(AL){if(this.Language===AL)return;this.Language=AL;switch(
AL){case 14:A._SetLanguage(1);break;case 13:A._SetLanguage(2);break;case 6:A._SetLanguage(
3);break;case 11:A._SetLanguage(4);break;case 10:A._SetLanguage(5);break;case 12:
A._SetLanguage(6);break;case 5:A._SetLanguage(7);break;case 3:A._SetLanguage(8);
break;case 1:A._SetLanguage(9);break;case 8:A._SetLanguage(10);break;case 4:A._SetLanguage(
11);break;case 15:A._SetLanguage(13);break;case 9:A._SetLanguage(15);break;case 2:
A._SetLanguage(16);break;case 7:A._SetLanguage(17);break;case 16:A._SetLanguage(
18);break;default:A._SetLanguage(0);}A.abo([this,this.A8y,this.BaW],0);},UpdateTemperatureUnit:
function(AL){if(this.TemperatureUnit===AL)return;this.TemperatureUnit=AL;A.abo([
this,this.ArC,this.Ati],0);},UpdateBrightness:function(AL){if(this.AMX===AL)return;
this.AMX=AL;A.abo([this,this.A8j,this.BaO],0);},SetSystemTime:function(Aia){if(this.
K&&this.K.SetSystemTime)return this.K.SetSystemTime.apply(this,arguments);else return C.
DeviceClass.BvO.apply(this,arguments);},BvO:function(Aia){},Axx:function(){if(this.
K&&this.K.Axx)return this.K.Axx.apply(this,arguments);else return C.DeviceClass.
Bav.apply(this,arguments);},Bav:function(){},AGl:function(){if(this.K&&this.K.AGl
)return this.K.AGl.apply(this,arguments);else return C.DeviceClass.Bat.apply(this
,arguments);},Bat:function(){},Bn5:function(){},UpdateOverlayMenu:function(AL){if(
this.OverlayMenu===AL)return;this.OverlayMenu=AL;A.abo([this,this.Awj,this.AyK],
0);},Dt:function(E){if(this.K&&this.K.Dt)return this.K.Dt.apply(this,arguments);
else return C.DeviceClass.Bu6.apply(this,arguments);},Bu6:function(E){},AyK:function(
Aq){this.Dt(Aq);},Aw$:function(E){if(this.K&&this.K.Aw$)return this.K.Aw$.apply(
this,arguments);else return C.DeviceClass.Bvq.apply(this,arguments);},Bvq:function(
E){},Ba7:function(Aq){this.Aw$(Aq);},UpdateUnderTemp:function(AL){if(this.AcJ===
AL)return;this.AcJ=AL;A.abo([this,this.A82,this.Ba7],0);},UpdateSyncState:function(
AL){if(this.SyncState===AL)return;this.SyncState=AL;A.abo([this,this.ASB,this.A0a
],0);},Acb:function(E){if(this.K&&this.K.Acb)return this.K.Acb.apply(this,arguments
);else return C.DeviceClass.Bve.apply(this,arguments);},Bve:function(E){A.ab5("%s"
,P4);},A0a:function(Aq){this.Acb(Aq);},AC1:function(){if(this.K&&this.K.AC1)return this.
K.AC1.apply(this,arguments);else return C.DeviceClass.Bt7.apply(this,arguments);
},Bt7:function(){return A.jV;},UpdatePopup:function(J2,A0V,A0R,A0Y){this.A7(J2,A0V
,A0R,A0Y,[this,this.BAj]);},PopupStateChanged:function(J2,Ae){if(this.K&&this.K.
PopupStateChanged)return this.K.PopupStateChanged.apply(this,arguments);else return C.
DeviceClass.BvD.apply(this,arguments);},BvD:function(J2,Ae){},AFU:function(E){if(
this.K&&this.K.AFU)return this.K.AFU.apply(this,arguments);else return C.DeviceClass.
Bvs.apply(this,arguments);},Bvs:function(E){},Ba8:function(Aq){this.AFU(Aq);},UpdateVibrationOnKeypressEnabled:
function(AL){if(this.AsR===AL)return;this.AsR=AL;A.abo([this,this.A83,this.Ba8],
0);},Ae_:function(E){if(this.K&&this.K.Ae_)return this.K.Ae_.apply(this,arguments
);else return C.DeviceClass.Bvr.apply(this,arguments);},Bvr:function(E){},AIR:function(
Aq){this.Ae_(Aq);},UpdateVibrationOn:function(BbX){if(this.AVs===BbX)return;this.
AVs=BbX;A.abo([this,this.AED,this.AIR],0);},A7:function(J2,A0V,A0R,A0Y,Bxj){var Agm=
A._NewObject(C.PopupContext,0);Agm.Id=J2;Agm.Show=A0V;Agm.AkM=A0R;Agm.Ak6=A0Y;Agm.
AF2=Bxj;this.AnP.Trigger(Agm,false);},BAj:function(G){var At=(C.PopupContext.isPrototypeOf(
G)?G:null);if(!!At)this.PopupStateChanged(At.Id,At.PopupState);},Aw0:function(E){
if(this.K&&this.K.Aw0)return this.K.Aw0.apply(this,arguments);else return C.DeviceClass.
Bu_.apply(this,arguments);},Bu_:function(E){},AZ9:function(Aq){this.Aw0(Aq);},UpdateRatingMode:
function(AL){if(this.RatingMode===AL)return;this.RatingMode=AL;A.abo([this,this.
ASy,this.AZ9],0);},Ae0:function(E){if(this.K&&this.K.Ae0)return this.K.Ae0.apply(
this,arguments);else return C.DeviceClass.BuF.apply(this,arguments);},BuF:function(
E){},Ath:function(Aq){this.Ae0(Aq);},UpdateFlashLightOn:function(BbF){if(this.AmS===
BbF)return;this.AmS=BbF;A.abo([this,this.Arz,this.Ath],0);},Ur:function(E){if(this.
K&&this.K.Ur)return this.K.Ur.apply(this,arguments);else return C.DeviceClass.Bvj.
apply(this,arguments);},Bvj:function(E){},A0b:function(Aq){this.Ur(Aq);},UpdateTopLightOn:
function(BbT){if(this.AU_===BbT)return;this.AU_=BbT;A.abo([this,this.ASD,this.A0b
],0);},WF:function(E){if(this.K&&this.K.WF)return this.K.WF.apply(this,arguments
);else return C.DeviceClass.Bu9.apply(this,arguments);},Bu9:function(E){},Bv7:function(
Aq){this.WF(Aq);},UpdateRGBTopLight:function(BbO){if(this.ATW===BbO)return;this.
ATW=BbO;A.abo([this,this.BkO,this.Bv7],0);},Awq:function(E){if(this.K&&this.K.Awq
)return this.K.Awq.apply(this,arguments);else return C.DeviceClass.Bun.apply(this
,arguments);},Bun:function(E){},Bv0:function(Aq){this.Awq(Aq);},UpdateAutoRegistrationMode:
function(Bbs){if(this.AutoRegistrationMode===Bbs)return;this.AutoRegistrationMode=
Bbs;A.abo([this,this.Bkc,this.Bv0],0);},Ar7:function(E){if(this.K&&this.K.Ar7)return this.
K.Ar7.apply(this,arguments);else return C.DeviceClass.Bva.apply(this,arguments);
},Bva:function(E){A.ab5("%s",CQ);},AZ$:function(Aq){this.Ar7(Aq);},UpdateScanTransponder:
function(J2,BbV,BbU){if(((this.OQ.Id===J2)&&(this.OQ.TransponderType===BbV))&&(this.
OQ.TransponderProtocol===BbU))return;this.OQ.OnSetId(J2);this.OQ.ATA(BbV);this.OQ.
ATz(BbU);A.abo([this,this.ASA,this.AZ$],0);},OL:function(E){if(this.K&&this.K.OL
)return this.K.OL.apply(this,arguments);else return C.DeviceClass.Bux.apply(this
,arguments);},Bux:function(E){},U2:function(Aq){this.OL(Aq);},UpdateDigitsID:function(
BbA){if(this.A1===BbA)return;this.A1=BbA;A.abo([this,this.Ui,this.U2],0);},PO:function(
E){if(this.K&&this.K.PO)return this.K.PO.apply(this,arguments);else return C.DeviceClass.
Bu5.apply(this,arguments);},Bu5:function(E){},U3:function(Aq){this.PO(Aq);},UpdateOffsetID:
function(BbL){if(this.AF===BbL)return;this.AF=BbL;A.abo([this,this.Uj,this.U3],0
);},AFY:function(E){if(this.K&&this.K.AFY)return this.K.AFY.apply(this,arguments
);else return C.DeviceClass.Bvz.apply(this,arguments);},Bvz:function(E){A.ab5("%s"
,Fe);},AIS:function(Aq){this.AFY(Aq);},UpdateWeightValue:function(AL){if(this.KX===
AL)return;this.KX=AL;A.abo([this,this.AEE,this.AIS],0);},AwN:function(E){if(this.
K&&this.K.AwN)return this.K.AwN.apply(this,arguments);else return C.DeviceClass.
BuQ.apply(this,arguments);},BuQ:function(E){},AZ3:function(Aq){this.AwN(Aq);},UpdateMassUnit:
function(AL){if(this.MassUnit===AL)return;this.MassUnit=AL;A.abo([this,this.ASp,
this.AZ3],0);},ArG:function(E){if(this.K&&this.K.ArG)return this.K.ArG.apply(this
,arguments);else return C.DeviceClass.Bap.apply(this,arguments);},Bap:function(E
){},BaE:function(Aq){this.ArG(Aq);},ArH:function(E){if(this.K&&this.K.ArH)return this.
K.ArH.apply(this,arguments);else return C.DeviceClass.Baq.apply(this,arguments);
},Baq:function(E){},AZX:function(Aq){this.ArH(Aq);},UpdateActiveActions:function(
AL){if(this.Pi===AL)return;this.Pi=AL;A.abo([this,this.A76,this.BaE],0);},UpdateActiveActionsOrder:
function(AL){if(this.AuA===AL)return;this.AuA=AL;A.abo([this,this.ASb,this.AZX],
0);},Aky:function(E){if(this.K&&this.K.Aky)return this.K.Aky.apply(this,arguments
);else return C.DeviceClass.Bar.apply(this,arguments);},Bar:function(E){},BaM:function(
Aq){this.Aky(Aq);},UpdateAutoActions:function(AL){if(this.AutoActions===AL)return;
this.AutoActions=AL;A.abo([this,this.A8f,this.BaM],0);},AGL:function(){if(this.K&&
this.K.AGL)return this.K.AGL.apply(this,arguments);else return C.DeviceClass.BvS.
apply(this,arguments);},BvS:function(){},AsI:function(){if(this.K&&this.K.AsI)return this.
K.AsI.apply(this,arguments);else return C.DeviceClass.BvW.apply(this,arguments);
},BvW:function(){},EB:function(E){if(this.K&&this.K.EB)return this.K.EB.apply(this
,arguments);else return C.DeviceClass.Buk.apply(this,arguments);},Buk:function(E
){},BvZ:function(Aq){this.EB(Aq);},UpdateAnimalType:function(En){if(this.AnimalType===
En)return;this.AnimalType=En;A.abo([this,this.PN,this.BvZ],0);},Axa:function(E){
if(this.K&&this.K.Axa)return this.K.Axa.apply(this,arguments);else return C.DeviceClass.
Bvx.apply(this,arguments);},Bvx:function(E){},Bbb:function(Aq){this.Axa(Aq);},UpdateWeightRecordingMode:
function(BbZ){if(this.WeightRecordingMode===BbZ)return;this.WeightRecordingMode=
BbZ;A.abo([this,this.A8$,this.Bbb],0);},AFx:function(E){if(this.K&&this.K.AFx)return this.
K.AFx.apply(this,arguments);else return C.DeviceClass.Bu7.apply(this,arguments);
},Bu7:function(E){A.ab5("%s",Lu);},AZ7:function(Aq){this.AFx(Aq);},UpdatePredictedTempValue:
function(AL){if(this.AF9===AL)return;this.AF9=AL;A.abo([this,this.ASv,this.AZ7],
0);},SP:function(L7){if(this.K&&this.K.SP)return this.K.SP.apply(this,arguments);
else return C.DeviceClass.BvN.apply(this,arguments);},BvN:function(L7){},AE3:function(
E){if(this.K&&this.K.AE3)return this.K.AE3.apply(this,arguments);else return C.DeviceClass.
Buw.apply(this,arguments);},Buw:function(E){},AIL:function(Aq){this.AE3(Aq);},UpdateDemoMode:
function(AL){if(this.HG===AL)return;this.HG=AL;A.abo([this,this.AEv,this.AIL],0);
},AEK:function(E){if(this.K&&this.K.AEK)return this.K.AEK.apply(this,arguments);
else return C.DeviceClass.Bue.apply(this,arguments);},Bue:function(E){},BaI:function(
Aq){this.AEK(Aq);},UpdateAgeRegistration:function(BbK){if(this.AdR===BbK)return;
this.AdR=BbK;A.abo([this,this.A7$,this.BaI],0);},Axb:function(E){if(this.K&&this.
K.Axb)return this.K.Axb.apply(this,arguments);else return C.DeviceClass.Bvy.apply(
this,arguments);},Bvy:function(E){},Bbc:function(Aq){this.Axb(Aq);},UpdateWeightRecordingScope:
function(BbP){if(this.WeightRecordingScope===BbP)return;this.WeightRecordingScope=
BbP;A.abo([this,this.A9a,this.Bbc],0);},JQ:function(E){if(this.K&&this.K.JQ)return this.
K.JQ.apply(this,arguments);else return C.DeviceClass.BuJ.apply(this,arguments);}
,BuJ:function(E){},AZ2:function(Aq){this.JQ(Aq);},UpdateGender:function(L4){if(this.
Gender===L4)return;this.Gender=L4;A.abo([this,this.Wx,this.AZ2],0);},ArW:function(
E){if(this.K&&this.K.ArW)return this.K.ArW.apply(this,arguments);else return C.DeviceClass.
BuL.apply(this,arguments);},BuL:function(E){},AyG:function(Aq){this.ArW(Aq);},UpdateIDLastUsedMale:
function(Rq){if(this.Aq9===Rq)return;this.Aq9=Rq;A.abo([this,this.Awc,this.AyG],
0);},ArV:function(E){if(this.K&&this.K.ArV)return this.K.ArV.apply(this,arguments
);else return C.DeviceClass.BuK.apply(this,arguments);},BuK:function(E){},AyF:function(
Aq){this.ArV(Aq);},UpdateIDLastUsedFemale:function(Rq){if(this.Aq8===Rq)return;this.
Aq8=Rq;A.abo([this,this.Awb,this.AyF],0);},Zu:function(E){if(this.K&&this.K.Zu)return this.
K.Zu.apply(this,arguments);else return C.DeviceClass.Buj.apply(this,arguments);}
,Buj:function(E){},AIJ:function(Aq){this.Zu(Aq);},UpdateAnimalListContent:function(
AL){if(this.Kh===AL)return;this.Kh=AL;A.abo([this,this.AEs,this.AIJ],0);},AEM:function(
E){if(this.K&&this.K.AEM)return this.K.AEM.apply(this,arguments);else return C.DeviceClass.
Buf.apply(this,arguments);},Buf:function(E){},BaJ:function(Aq){this.AEM(Aq);},UpdateAlarmListAction:
function(AL){if(this.AL7===AL)return;this.AL7=AL;A.abo([this,this.A8b,this.BaJ],
0);},AE6:function(E){if(this.K&&this.K.AE6)return this.K.AE6.apply(this,arguments
);else return C.DeviceClass.BuE.apply(this,arguments);},BuE:function(E){},BaR:function(
Aq){this.AE6(Aq);},UpdateFlashLightInMeasureState:function(BbG){if(this.AmR===BbG
)return;this.AmR=BbG;A.abo([this,this.A8m,this.BaR],0);},AeV:function(E){if(this.
K&&this.K.AeV)return this.K.AeV.apply(this,arguments);else return C.DeviceClass.
Bui.apply(this,arguments);},Bui:function(E){},AII:function(Aq){this.AeV(Aq);},UpdateAnimalInfoContent:
function(AL){if(this.D9===AL)return;this.D9=AL;A.abo([this,this.AEr,this.AII],0);
},AFX:function(E){if(this.K&&this.K.AFX)return this.K.AFX.apply(this,arguments);
else return C.DeviceClass.Bvt.apply(this,arguments);},Bvt:function(E){},Ba9:function(
Aq){this.AFX(Aq);},UpdateWatchListAction:function(AL){if(this.AVu===AL)return;this.
AVu=AL;A.abo([this,this.A87,this.Ba9],0);},AE8:function(E){if(this.K&&this.K.AE8
)return this.K.AE8.apply(this,arguments);else return C.DeviceClass.BuG.apply(this
,arguments);},BuG:function(E){},BaT:function(Aq){this.AE8(Aq);},UpdateFreshCowListAction:
function(AL){if(this.AOy===AL)return;this.AOy=AL;A.abo([this,this.A8o,this.BaT],
0);},ResetActiveActions:function(G){if(this.K&&this.K.ResetActiveActions)return this.
K.ResetActiveActions.apply(this,arguments);else return C.DeviceClass.BvF.apply(this
,arguments);},BvF:function(G){},BF3:function(s){this.ResetActiveActions(s);},ResetAutoActions:
function(G){if(this.K&&this.K.ResetAutoActions)return this.K.ResetAutoActions.apply(
this,arguments);else return C.DeviceClass.BvH.apply(this,arguments);},BvH:function(
G){},BF5:function(s){this.ResetAutoActions(s);},Awo:function(E){if(this.K&&this.
K.Awo)return this.K.Awo.apply(this,arguments);else return C.DeviceClass.Bul.apply(
this,arguments);},Bul:function(E){},BaK:function(Aq){this.Awo(Aq);},Ar9:function(
E){if(this.K&&this.K.Ar9)return this.K.Ar9.apply(this,arguments);else return C.DeviceClass.
Bvh.apply(this,arguments);},Bvh:function(E){},Ba4:function(Aq){this.Ar9(Aq);},Ar_:
function(E){if(this.K&&this.K.Ar_)return this.K.Ar_.apply(this,arguments);else return C.
DeviceClass.Bvi.apply(this,arguments);},Bvi:function(E){},Ba5:function(Aq){this.
Ar_(Aq);},Ast:function(G){if(this.K&&this.K.Ast)return this.K.Ast.apply(this,arguments
);else return C.DeviceClass.BvK.apply(this,arguments);},BvK:function(G){},BF8:function(
s){this.Ast(s);},UpdateTemperaturesLowString:function(AL){if(this.AGT===AL)return;
this.AGT=AL;A.abo([this,this.A8Y,this.Ba5],0);},UpdateTemperaturesHighString:function(
AL){if(this.AGS===AL)return;this.AGS=AL;A.abo([this,this.A8X,this.Ba4],0);},UpdateAnimalTypesString:
function(AL){if(this.ABH===AL)return;this.ABH=AL;A.abo([this,this.A8d,this.BaK],
0);},AwH:function(E){if(this.K&&this.K.AwH)return this.K.AwH.apply(this,arguments
);else return C.DeviceClass.BuI.apply(this,arguments);},BuI:function(E){},BaV:function(
Aq){this.AwH(Aq);},UpdateFreshCowsHideMeasured:function(AL){if(this.AqW===AL)return;
this.AqW=AL;A.abo([this,this.A8q,this.BaV],0);},Ar2:function(E){if(this.K&&this.
K.Ar2)return this.K.Ar2.apply(this,arguments);else return C.DeviceClass.Bu1.apply(
this,arguments);},Bu1:function(E){},Ba0:function(Aq){this.Ar2(Aq);},UpdateNaisIdLastUsedMale:
function(Xo){if(this.AEf===Xo)return;this.AEf=Xo;A.abo([this,this.A8G,this.Ba0],
0);},Ar1:function(E){if(this.K&&this.K.Ar1)return this.K.Ar1.apply(this,arguments
);else return C.DeviceClass.Bu0.apply(this,arguments);},Bu0:function(E){},BaZ:function(
Aq){this.Ar1(Aq);},UpdateNaisIdLastUsedFemale:function(Xo){if(this.AEe===Xo)return;
this.AEe=Xo;A.abo([this,this.A8F,this.BaZ],0);},AwU:function(E){if(this.K&&this.
K.AwU)return this.K.AwU.apply(this,arguments);else return C.DeviceClass.BuY.apply(
this,arguments);},BuY:function(E){},AyI:function(Aq){this.AwU(Aq);},UpdateNaisIdIncrementMale:
function(Alt){if(this.ARJ===Alt)return;this.ARJ=Alt;A.abo([this,this.Awg,this.AyI
],0);},AwT:function(E){if(this.K&&this.K.AwT)return this.K.AwT.apply(this,arguments
);else return C.DeviceClass.BuX.apply(this,arguments);},BuX:function(E){},AyH:function(
Aq){this.AwT(Aq);},UpdateNaisIdIncrementFemale:function(Alt){if(this.ARI===Alt)return;
this.ARI=Alt;A.abo([this,this.Awf,this.AyH],0);},UpdateFirmware:function(){if(this.
K&&this.K.UpdateFirmware)return this.K.UpdateFirmware.apply(this,arguments);else
return C.DeviceClass.Baw.apply(this,arguments);},Baw:function(){},Any:function(E
){if(this.K&&this.K.Any)return this.K.Any.apply(this,arguments);else return C.DeviceClass.
Buq.apply(this,arguments);},Buq:function(E){},BaN:function(Aq){this.Any(Aq);},UpdateBootloaderMessage:
function(AL){if(this.Aqv===AL)return;this.Aqv=AL;A.abo([this,this.A8i,this.BaN],
0);},AEH:function(E){if(this.K&&this.K.AEH)return this.K.AEH.apply(this,arguments
);else return C.DeviceClass.Bt$.apply(this,arguments);},Bt$:function(E){},BaC:function(
Aq){this.AEH(Aq);},UpdateActionListAction:function(AL){if(this.ABA===AL)return;this.
ABA=AL;A.abo([this,this.A74,this.BaC],0);},Awm:function(E){if(this.K&&this.K.Awm
)return this.K.Awm.apply(this,arguments);else return C.DeviceClass.Bua.apply(this
,arguments);},Bua:function(E){},BaD:function(Aq){this.Awm(Aq);},UpdateActionListHideMeasured:
function(AL){if(this.Aqh===AL)return;this.Aqh=AL;A.abo([this,this.A75,this.BaD],
0);},Uk:function(E){if(this.K&&this.K.Uk)return this.K.Uk.apply(this,arguments);
else return C.DeviceClass.Buh.apply(this,arguments);},Buh:function(E){},AoD:function(
Aq){this.Uk(Aq);},UpdateAnimalIdGenerationMethod:function(Bb4){if(this.Ii===Bb4)
return;this.Ii=Bb4;A.abo([this,this.Anr,this.AoD],0);},Awz:function(E){if(this.K&&
this.K.Awz)return this.K.Awz.apply(this,arguments);else return C.DeviceClass.Buy.
apply(this,arguments);},Buy:function(E){},AZ0:function(Aq){this.Awz(Aq);},UpdateDirectionOfCountingFemale:
function(Aln){if(this.ACv===Aln)return;this.ACv=Aln;A.abo([this,this.ASi,this.AZ0
],0);},AwA:function(E){if(this.K&&this.K.AwA)return this.K.AwA.apply(this,arguments
);else return C.DeviceClass.Buz.apply(this,arguments);},Buz:function(E){},AZ1:function(
Aq){this.AwA(Aq);},UpdateDirectionOfCountingMale:function(Aln){if(this.ACw===Aln
)return;this.ACw=Aln;A.abo([this,this.ASj,this.AZ1],0);},AwB:function(E){if(this.
K&&this.K.AwB)return this.K.AwB.apply(this,arguments);else return C.DeviceClass.
BuA.apply(this,arguments);},BuA:function(E){},AIM:function(Aq){this.AwB(Aq);},UpdateDirectionOfCountingUnisex:
function(Aln){if(this.Au0===Aln)return;this.Au0=Aln;A.abo([this,this.AEw,this.AIM
],0);},ArX:function(E){if(this.K&&this.K.ArX)return this.K.ArX.apply(this,arguments
);else return C.DeviceClass.BuM.apply(this,arguments);},BuM:function(E){},AoE:function(
Aq){this.ArX(Aq);},UpdateIDLastUsedUnisex:function(Rq){if(this.AjY===Rq)return;this.
AjY=Rq;A.abo([this,this.Anu,this.AoE],0);},Ar3:function(E){if(this.K&&this.K.Ar3
)return this.K.Ar3.apply(this,arguments);else return C.DeviceClass.Bu2.apply(this
,arguments);},Bu2:function(E){},AZ5:function(Aq){this.Ar3(Aq);},UpdateNaisIdLastUsedUnisex:
function(Xo){if(this.Av1===Xo)return;this.Av1=Xo;A.abo([this,this.ASr,this.AZ5],
0);},AwV:function(E){if(this.K&&this.K.AwV)return this.K.AwV.apply(this,arguments
);else return C.DeviceClass.BuZ.apply(this,arguments);},BuZ:function(E){},AyJ:function(
Aq){this.AwV(Aq);},UpdateNaisIdIncrementUnisex:function(Alt){if(this.ARK===Alt)return;
this.ARK=Alt;A.abo([this,this.Awh,this.AyJ],0);},AkA:function(E){if(this.K&&this.
K.AkA)return this.K.AkA.apply(this,arguments);else return C.DeviceClass.BuC.apply(
this,arguments);},BuC:function(E){},AyE:function(Aq){this.AkA(Aq);},UpdateEartagNrAssignmentMode:
function(Alo){if(this.EartagNrAssignmentMode===Alo)return;this.EartagNrAssignmentMode=
Alo;A.abo([this,this.Awa,this.AyE],0);},NY:function(E){if(this.K&&this.K.NY)return this.
K.NY.apply(this,arguments);else return C.DeviceClass.Bus.apply(this,arguments);}
,Bus:function(E){},Bv2:function(Aq){this.NY(Aq);},UpdateBreed:function(Ac0){if(this.
Breed===Ac0)return;this.Breed=Ac0;A.abo([this,this.Av8,this.Bv2],0);},AFq:function(
E){if(this.K&&this.K.AFq)return this.K.AFq.apply(this,arguments);else return C.DeviceClass.
BuU.apply(this,arguments);},BuU:function(E){},Bv5:function(Aq){this.AFq(Aq);},UpdateMiddlewareVersions:
function(Qc,A0N,A0O,A0U,A0C){this.SA.OnSetTimestamp(Qc);this.SA.AFl(A0N);this.SA.
AFr(A0O);this.SA.AFA(A0U);this.SA.AE1(A0C);A.abo([this,this.BkJ,this.Bv5],0);},AFk:
function(E){if(this.K&&this.K.AFk)return this.K.AFk.apply(this,arguments);else return C.
DeviceClass.BuO.apply(this,arguments);},BuO:function(E){},Bv4:function(Aq){this.
AFk(Aq);},UpdateMainboardVersions:function(Qc,A0L,A0M,A0K,A00,A01,A0Z){this.QX.OnSetTimestamp(
Qc);this.QX.AFi(A0L);this.QX.AFj(A0M);this.QX.AFh(A0K);this.QX.AFP(A00);this.QX.
AFQ(A01);this.QX.AFO(A0Z);A.abo([this,this.BkH,this.Bv4],0);},AFR:function(E){if(
this.K&&this.K.AFR)return this.K.AFR.apply(this,arguments);else return C.DeviceClass.
Bvk.apply(this,arguments);},Bvk:function(E){},Bv$:function(Aq){this.AFR(Aq);},UpdateTorchboardVersions:
function(Qc,A0L,A0M,A0K,A00,A01,A0Z){this.SY.OnSetTimestamp(Qc);this.SY.AFi(A0L);
this.SY.AFj(A0M);this.SY.AFh(A0K);this.SY.AFP(A00);this.SY.AFQ(A01);this.SY.AFO(
A0Z);A.abo([this,this.Bk6,this.Bv$],0);},AER:function(E){if(this.K&&this.K.AER)return this.
K.AER.apply(this,arguments);else return C.DeviceClass.Bur.apply(this,arguments);
},Bur:function(E){},Bv1:function(Aq){this.AER(Aq);},UpdateBootloaderVersions:function(
Qc,A0N,A0O,A0U,A0C){this.R1.OnSetTimestamp(Qc);this.R1.AFl(A0N);this.R1.AFr(A0O);
this.R1.AFA(A0U);this.R1.AE1(A0C);A.abo([this,this.Bkf,this.Bv1],0);},AE4:function(
E){if(this.K&&this.K.AE4)return this.K.AE4.apply(this,arguments);else return C.DeviceClass.
BuB.apply(this,arguments);},BuB:function(E){},BaQ:function(Aq){this.AE4(Aq);},UpdateDryCowListAction:
function(AL){if(this.ANV===AL)return;this.ANV=AL;A.abo([this,this.A8k,this.BaQ],
0);},AJC:function(A0D){if(this.K&&this.K.AJC)return this.K.AJC.apply(this,arguments
);else return C.DeviceClass.Bwl.apply(this,arguments);},Bwl:function(A0D){return false;
},AEQ:function(E){if(this.K&&this.K.AEQ)return this.K.AEQ.apply(this,arguments);
else return C.DeviceClass.Bup.apply(this,arguments);},Bup:function(E){},AIK:function(
Aq){this.AEQ(Aq);},UpdateBirthListView:function(AL){if(this.Aqt===AL)return;this.
Aqt=AL;A.abo([this,this.AEt,this.AIK],0);},BatchResetBirthNoticePending:function(
){var O;var Ai1=0;var Adh=A._GetAutoObject(C.Device).An.Filter;var Be=A._GetAutoObject(
C.Helper).AOC();A._GetAutoObject(C.Device).An.Bk(Be);for(O=0;O<A._GetAutoObject(
C.Device).An.B$();O++){A._GetAutoObject(C.Helper).G6(O);A._GetAutoObject(C.Helper
).W.Ae4(false);A._GetAutoObject(C.Helper).W.Cg(A._GetAutoObject(C.Device).An);Ai1++;
}A._GetAutoObject(C.Device).An.Bk(Adh);return Ai1;},UpdateTransferProgress:function(
AL){if(this.AxN===AL)return;this.AxN=AL;A.abo([this,this.ASE,this.A0c],0);},AFS:
function(E){if(this.K&&this.K.AFS)return this.K.AFS.apply(this,arguments);else return C.
DeviceClass.Bvl.apply(this,arguments);},Bvl:function(E){A.ab5("%s",P5);},A0c:function(
Aq){this.AFS(Aq);},UpdateTransferTarget:function(AL){if(this.Afp===AL)return;this.
Afp=AL;A.abo([this,this.A81,this.Ba6],0);},Ar$:function(E){if(this.K&&this.K.Ar$
)return this.K.Ar$.apply(this,arguments);else return C.DeviceClass.Bvm.apply(this
,arguments);},Bvm:function(E){A.ab5("%s",JZ);},Ba6:function(Aq){this.Ar$(Aq);},AsH:
function(){if(this.K&&this.K.AsH)return this.K.AsH.apply(this,arguments);else return C.
DeviceClass.BvV.apply(this,arguments);},BvV:function(){},AwZ:function(E){if(this.
K&&this.K.AwZ)return this.K.AwZ.apply(this,arguments);else return C.DeviceClass.
Bu8.apply(this,arguments);},Bu8:function(E){},AZ8:function(Aq){this.AwZ(Aq);},UpdatePremisesID:
function(Rq){if(this.Uw===Rq)return;this.Uw=Rq;A.abo([this,this.ASw,this.AZ8],0);
},AwS:function(E){if(this.K&&this.K.AwS)return this.K.AwS.apply(this,arguments);
else return C.DeviceClass.BuW.apply(this,arguments);},BuW:function(E){},AIP:function(
Aq){this.AwS(Aq);},UpdateMotherSelectionDriedOffFilter:function(AL){if(this.AbZ===
AL)return;this.AbZ=AL;A.abo([this,this.AEA,this.AIP],0);},AE9:function(E){if(this.
K&&this.K.AE9)return this.K.AE9.apply(this,arguments);else return C.DeviceClass.
BuH.apply(this,arguments);},BuH:function(E){},BaU:function(Aq){this.AE9(Aq);},UpdateFreshCowSpan:
function(AL){if(this.AqV===AL)return;this.AqV=AL;A.abo([this,this.A8p,this.BaU],
0);},UpdateUSBState:function(BbW){if(this.AhS===BbW)return;this.AhS=BbW;A.abo([this
,this.Wy,this.Xh],0);},AFT:function(E){if(this.K&&this.K.AFT)return this.K.AFT.apply(
this,arguments);else return C.DeviceClass.Bvp.apply(this,arguments);},Bvp:function(
E){A.ab5("%s",E7);},Xh:function(Aq){this.AFT(Aq);},AxD:function(){if(this.K&&this.
K.AxD)return this.K.AxD.apply(this,arguments);else return C.DeviceClass.BvP.apply(
this,arguments);},BvP:function(){},Arj:function(){if(this.K&&this.K.Arj)return this.
K.Arj.apply(this,arguments);else return C.DeviceClass.Bt_.apply(this,arguments);
},Bt_:function(){return false;},AqF:function(){if(this.K&&this.K.AqF)return this.
K.AqF.apply(this,arguments);else return C.DeviceClass.Bt5.apply(this,arguments);
},Bt5:function(){},AFE:function(E){if(this.K&&this.K.AFE)return this.K.AFE.apply(
this,arguments);else return C.DeviceClass.Bvb.apply(this,arguments);},Bvb:function(
E){},Bv8:function(Aq){this.AFE(Aq);},UpdateSerialNumber:function(AL){if(this.AhI===
AL)return;this.AhI=AL;A.abo([this,this.BkV,this.Bv8],0);},Awn:function(E){if(this.
K&&this.K.Awn)return this.K.Awn.apply(this,arguments);else return C.DeviceClass.
Bug.apply(this,arguments);},Bug:function(E){},AZY:function(Aq){this.Awn(Aq);},UpdateAnimalIdAutoGenerationMethod:
function(Bb3){if(this.Agx===Bb3)return;this.Agx=Bb3;A.abo([this,this.ASc,this.AZY
],0);},ACj:function(){return false;},AGm:function(){return false;},AFG:function(
E){if(this.K&&this.K.AFG)return this.K.AFG.apply(this,arguments);else return C.DeviceClass.
Bvc.apply(this,arguments);},Bvc:function(E){},Ba3:function(Aq){this.AFG(Aq);},UpdateShutdownTimer:
function(AL){if(this.AUG===AL)return;this.AUG=AL;A.abo([this,this.A8U,this.Ba3],
0);},Asu:function(G){if(this.K&&this.K.Asu)return this.K.Asu.apply(this,arguments
);else return C.DeviceClass.BvL.apply(this,arguments);},BvL:function(G){},BF9:function(
s){this.Asu(s);},Asc:function(E){if(this.K&&this.K.Asc)return this.K.Asc.apply(this
,arguments);else return C.DeviceClass.Bvv.apply(this,arguments);},Bvv:function(E
){},Ba$:function(Aq){this.Asc(Aq);},Asd:function(E){if(this.K&&this.K.Asd)return this.
K.Asd.apply(this,arguments);else return C.DeviceClass.Bvw.apply(this,arguments);
},Bvw:function(E){},Bba:function(Aq){this.Asd(Aq);},UpdateWeightGainsLowString:function(
AL){if(this.AHc===AL)return;this.AHc=AL;A.abo([this,this.A8_,this.Bba],0);},UpdateWeightGainsHighString:
function(AL){if(this.AHb===AL)return;this.AHb=AL;A.abo([this,this.A89,this.Ba$],
0);},Awp:function(E){if(this.K&&this.K.Awp)return this.K.Awp.apply(this,arguments
);else return C.DeviceClass.Bum.apply(this,arguments);},Bum:function(E){},BaL:function(
Aq){this.Awp(Aq);},UpdateAnimalTypesWeightGainsString:function(AL){if(this.ABI===
AL)return;this.ABI=AL;A.abo([this,this.A8e,this.BaL],0);},Asb:function(E){if(this.
K&&this.K.Asb)return this.K.Asb.apply(this,arguments);else return C.DeviceClass.
Bvu.apply(this,arguments);},Bvu:function(E){},Ba_:function(Aq){this.Asb(Aq);},Ase:
function(E){if(this.K&&this.K.Ase)return this.K.Ase.apply(this,arguments);else return C.
DeviceClass.BvA.apply(this,arguments);},BvA:function(E){},Bbd:function(Aq){this.
Ase(Aq);},UpdateWeightValueBirthString:function(AL){if(this.AHf===AL)return;this.
AHf=AL;A.abo([this,this.A9b,this.Bbd],0);},UpdateWeightGainsAverageString:function(
AL){if(this.AHa===AL)return;this.AHa=AL;A.abo([this,this.A88,this.Ba_],0);},AwC:
function(E){if(this.K&&this.K.AwC)return this.K.AwC.apply(this,arguments);else return C.
DeviceClass.BuD.apply(this,arguments);},BuD:function(E){},Bv3:function(Aq){this.
AwC(Aq);},UpdateEvaluationAnimalType:function(En){if(this.ACD===En)return;this.ACD=
En;A.abo([this,this.Bkq,this.Bv3],0);},UpdateStartScreen:function(AL){if(this.AxF===
AL)return;this.AxF=AL;A.abo([this,this.BkW,this.Bv9],0);},Aw3:function(E){if(this.
K&&this.K.Aw3)return this.K.Aw3.apply(this,arguments);else return C.DeviceClass.
Bvd.apply(this,arguments);},Bvd:function(E){},Bv9:function(Aq){this.Aw3(Aq);},ADS:
function(){if(this.K&&this.K.ADS)return this.K.ADS.apply(this,arguments);else return C.
DeviceClass.Bt8.apply(this,arguments);},Bt8:function(){return 1;},ADT:function(){
if(this.K&&this.K.ADT)return this.K.ADT.apply(this,arguments);else return C.DeviceClass.
Bt9.apply(this,arguments);},Bt9:function(){return 1;},GetCommitCount:function(){
return 1895;},GetCommitEpoch:function(){return 1710328383;},GetCommitHash:function(
){return A.kR.Bhm;},GetVersionMajor:function(){return 0;},GetVersionMinor:function(
){return 9;},GetVersionRev:function(){return 9;},AFp:function(E){if(this.K&&this.
K.AFp)return this.K.AFp.apply(this,arguments);else return C.DeviceClass.BuS.apply(
this,arguments);},BuS:function(E){},BaY:function(Aq){this.AFp(Aq);},UpdateMaximumAgeNewOnFarm:
function(AL){if(this.AvW===AL)return;this.AvW=AL;A.abo([this,this.A8E,this.BaY],
0);},Aw9:function(E){if(this.K&&this.K.Aw9)return this.K.Aw9.apply(this,arguments
);else return C.DeviceClass.Bvn.apply(this,arguments);},Bvn:function(E){},A0d:function(
Aq){this.Aw9(Aq);},UpdateTransponderAssignmentIdChangeMethod:function(AyZ){if(this.
Ak7===AyZ)return;this.Ak7=AyZ;A.abo([this,this.ASF,this.A0d],0);},BatchResetPurchasedNoticePending:
function(){var O;var Ai1=0;var Adh=A._GetAutoObject(C.Device).An.Filter;var Be=A.
_GetAutoObject(C.Helper).Avn();A._GetAutoObject(C.Device).An.Bk(Be);for(O=0;O<A.
_GetAutoObject(C.Device).An.B$();O++){A._GetAutoObject(C.Helper).G6(O);A._GetAutoObject(
C.Helper).W.Ae4(false);A._GetAutoObject(C.Helper).W.Cg(A._GetAutoObject(C.Device
).An);Ai1++;}A._GetAutoObject(C.Device).An.Bk(Adh);return Ai1;},AE2:function(E){
if(this.K&&this.K.AE2)return this.K.AE2.apply(this,arguments);else return C.DeviceClass.
Buv.apply(this,arguments);},Buv:function(E){},AZZ:function(Aq){this.AE2(Aq);},UpdateDataExportDestination:
function(AL){if(this.VQ===AL)return;this.VQ=AL;A.abo([this,this.ASh,this.AZZ],0);
},BmJ:function(E){},UpdateMassRecordingAutomatic:function(AL){if(this.ARv===AL)return;
this.ARv=AL;A.abo([this,this.BkI,this.BmJ],0);},Nf:function(E){if(this.K&&this.K.
Nf)return this.K.Nf.apply(this,arguments);else return C.DeviceClass.BvB.apply(this
,arguments);},BvB:function(E){},Bwa:function(Aq){this.Nf(Aq);},UpdateWhereAbouts:
function(AfL){if(this.WhereAbouts===AfL)return;this.WhereAbouts=AfL;A.abo([this,
this.Awk,this.Bwa],0);},ArJ:function(E){if(this.K&&this.K.ArJ)return this.K.ArJ.
apply(this,arguments);else return C.DeviceClass.Bub.apply(this,arguments);},Bub:
function(E){},BaF:function(Aq){this.ArJ(Aq);},ArK:function(E){if(this.K&&this.K.
ArK)return this.K.ArK.apply(this,arguments);else return C.DeviceClass.Buc.apply(
this,arguments);},Buc:function(E){},BaG:function(Aq){this.ArK(Aq);},UpdateActiveMassRecordingFields:
function(AL){if(this.ABB===AL)return;this.ABB=AL;A.abo([this,this.A77,this.BaF],
0);},UpdateActiveMassRecordingFieldsOrder:function(AL){if(this.ABC===AL)return;this.
ABC=AL;A.abo([this,this.A78,this.BaG],0);},Asr:function(G){if(this.K&&this.K.Asr
)return this.K.Asr.apply(this,arguments);else return C.DeviceClass.BvG.apply(this
,arguments);},BvG:function(G){},BF4:function(s){this.Asr(s);},AFn:function(E){if(
this.K&&this.K.AFn)return this.K.AFn.apply(this,arguments);else return C.DeviceClass.
BuP.apply(this,arguments);},BuP:function(E){},AIN:function(Aq){this.AFn(Aq);},UpdateMassRecordingDateOfBirthMandatory:
function(AL){if(this.AeM===AL)return;this.AeM=AL;A.abo([this,this.AEx,this.AIN],
0);},AFm:function(E){this.UpdateMassRecordingCounter(E);},UpdateMassRecordingCounter:
function(AL){if(this.AvU===AL)return;this.AvU=AL;A.abo([this,this.A8C,this.AFm],
0);},AjE:function(){if(this.K&&this.K.AjE)return this.K.AjE.apply(this,arguments
);else return C.DeviceClass.Bt3.apply(this,arguments);},Bt3:function(){return false;
},Aqr:function(){if(this.K&&this.K.Aqr)return this.K.Aqr.apply(this,arguments);else
return C.DeviceClass.Bt2.apply(this,arguments);},Bt2:function(){return false;},Aqq:
function(){if(this.K&&this.K.Aqq)return this.K.Aqq.apply(this,arguments);else return C.
DeviceClass.Bt1.apply(this,arguments);},Bt1:function(){return false;},AuO:function(
){if(this.K&&this.K.AuO)return this.K.AuO.apply(this,arguments);else return C.DeviceClass.
Bt4.apply(this,arguments);},Bt4:function(){return false;},AwP:function(E){if(this.
K&&this.K.AwP)return this.K.AwP.apply(this,arguments);else return C.DeviceClass.
BuR.apply(this,arguments);},BuR:function(E){},BaX:function(Aq){this.AwP(Aq);},UpdateMaxWeightValuePrecision:
function(AL){if(this.OJ===AL)return;this.OJ=AL;A.abo([this,this.A8D,this.BaX],0);
},AwW:function(E){if(this.K&&this.K.AwW)return this.K.AwW.apply(this,arguments);
else return C.DeviceClass.Bu3.apply(this,arguments);},Bu3:function(E){},Ba1:function(
Aq){this.AwW(Aq);},UpdateNoNaisIdListActions:function(AL){if(this.ARW===AL)return;
this.ARW=AL;A.abo([this,this.A8H,this.Ba1],0);},ResetNoNaisIdListActions:function(
G){if(this.K&&this.K.ResetNoNaisIdListActions)return this.K.ResetNoNaisIdListActions.
apply(this,arguments);else return C.DeviceClass.BvI.apply(this,arguments);},BvI:
function(G){},BF6:function(s){this.ResetNoNaisIdListActions(s);},AwX:function(E){
if(this.K&&this.K.AwX)return this.K.AwX.apply(this,arguments);else return C.DeviceClass.
Bu4.apply(this,arguments);},Bu4:function(E){},Ba2:function(Aq){this.AwX(Aq);},UpdateNoTransponderListActions:
function(AL){if(this.AR1===AL)return;this.AR1=AL;A.abo([this,this.A8I,this.Ba2],
0);},ResetNoTransponderListActions:function(G){if(this.K&&this.K.ResetNoTransponderListActions
)return this.K.ResetNoTransponderListActions.apply(this,arguments);else return C.
DeviceClass.BvJ.apply(this,arguments);},BvJ:function(G){},BF7:function(s){this.ResetNoTransponderListActions(
s);},Axd:function(E){if(this.K&&this.K.Axd)return this.K.Axd.apply(this,arguments
);else return C.DeviceClass.BvC.apply(this,arguments);},BvC:function(E){},Bbe:function(
Aq){this.Axd(Aq);},UpdateYoungNoTransponderListActions:function(AL){if(this.AVJ===
AL)return;this.AVJ=AL;A.abo([this,this.A9d,this.Bbe],0);},ResetYoungNoTransponderListActions:
function(G){if(this.K&&this.K.ResetYoungNoTransponderListActions)return this.K.ResetYoungNoTransponderListActions.
apply(this,arguments);else return C.DeviceClass.BvM.apply(this,arguments);},BvM:
function(G){},BF_:function(s){this.ResetYoungNoTransponderListActions(s);},Aw_:function(
E){if(this.K&&this.K.Aw_)return this.K.Aw_.apply(this,arguments);else return C.DeviceClass.
Bvo.apply(this,arguments);},Bvo:function(E){},A0e:function(Aq){this.Aw_(Aq);},UpdateTransponderUnlinkIdChangeMethod:
function(AyZ){if(this.An7===AyZ)return;this.An7=AyZ;A.abo([this,this.ASG,this.A0e
],0);},AnS:function(AoH){if(this.K&&this.K.AnS)return this.K.AnS.apply(this,arguments
);else return C.DeviceClass.BvE.apply(this,arguments);},BvE:function(AoH){this.FQ.
EX();this.FQ.AgK=AoH;this.FQ.EW(1);A._GetAutoObject(C.Device).A7(110,true,A.jV,0
,[this,this.Bz4]);},Bz4:function(G){var At=(C.PopupContext.isPrototypeOf(G)?G:null
);if(!!At&&(At.PopupState===9))A.aaS([this,this.BBH],this);},BBH:function(G){this.
FQ.EW(2);this.AxD();A._GetAutoObject(C.Device).A7(110,false,A.jV,0,null);},AEq:function(
){return this.KH;},Av6:function(){return this.Aa7;},Av9:function(){return this.AmE;
},ASz:function(){return this.ScanState;},AEy:function(){return this.MeasureState;
},AEC:function(){return this.Ls;},A8y:function(){return this.Language;},ArC:function(
){return this.TemperatureUnit;},A8j:function(){return this.AMX;},ASq:function(){
return this.AEd;},Awj:function(){return this.OverlayMenu;},A82:function(){return this.
AcJ;},ASB:function(){return this.SyncState;},A83:function(){return this.AsR;},AED:
function(){return this.AVs;},ASy:function(){return this.RatingMode;},Arz:function(
){return this.AmS;},ASD:function(){return this.AU_;},BkO:function(){return this.
ATW;},Bkc:function(){return this.AutoRegistrationMode;},ASA:function(){return this.
OQ;},Ui:function(){return this.A1;},Uj:function(){return this.AF;},AEE:function(
){return this.KX;},ASp:function(){return this.MassUnit;},A76:function(){return this.
Pi;},ASb:function(){return this.AuA;},A8f:function(){return this.AutoActions;},PN:
function(){return this.AnimalType;},A8$:function(){return this.WeightRecordingMode;
},ASv:function(){return this.AF9;},AEv:function(){return this.HG;},A7$:function(
){return this.AdR;},A9a:function(){return this.WeightRecordingScope;},Wx:function(
){return this.Gender;},Awc:function(){return this.Aq9;},Awb:function(){return this.
Aq8;},AEs:function(){return this.Kh;},A8b:function(){return this.AL7;},A8m:function(
){return this.AmR;},AEr:function(){return this.D9;},A87:function(){return this.AVu;
},A8o:function(){return this.AOy;},A8d:function(){return this.ABH;},A8X:function(
){return this.AGS;},A8Y:function(){return this.AGT;},A8q:function(){return this.
AqW;},A8G:function(){return this.AEf;},A8F:function(){return this.AEe;},Awg:function(
){return this.ARJ;},Awf:function(){return this.ARI;},A8i:function(){return this.
Aqv;},A74:function(){return this.ABA;},A75:function(){return this.Aqh;},Anr:function(
){return this.Ii;},ASi:function(){return this.ACv;},ASj:function(){return this.ACw;
},AEw:function(){return this.Au0;},Anu:function(){return this.AjY;},ASr:function(
){return this.Av1;},Awh:function(){return this.ARK;},Awa:function(){return this.
EartagNrAssignmentMode;},Av8:function(){return this.Breed;},BkJ:function(){return this.
SA;},BkH:function(){return this.QX;},Bk6:function(){return this.SY;},Bkf:function(
){return this.R1;},A8k:function(){return this.ANV;},AEt:function(){return this.Aqt;
},ASE:function(){return this.AxN;},A81:function(){return this.Afp;},ASw:function(
){return this.Uw;},AEA:function(){return this.AbZ;},A8p:function(){return this.AqV;
},Wy:function(){return this.AhS;},BkV:function(){return this.AhI;},ASc:function(
){return this.Agx;},A8U:function(){return this.AUG;},A89:function(){return this.
AHb;},A8_:function(){return this.AHc;},A8e:function(){return this.ABI;},A88:function(
){return this.AHa;},A9b:function(){return this.AHf;},Bkq:function(){return this.
ACD;},BkW:function(){return this.AxF;},A8E:function(){return this.AvW;},ASF:function(
){return this.Ak7;},ASh:function(){return this.VQ;},BkI:function(){return this.ARv;
},Awk:function(){return this.WhereAbouts;},A77:function(){return this.ABB;},A78:
function(){return this.ABC;},AEx:function(){return this.AeM;},A8C:function(){return this.
AvU;},A8D:function(){return this.OJ;},A8H:function(){return this.ARW;},A8I:function(
){return this.AR1;},A9d:function(){return this.AVJ;},ASG:function(){return this.
An7;},_Init:function(aArg){C.Table._Init.call(this.An={I:this},0);C.Table._Init.
call(this.Bt={I:this},0);C.Table._Init.call(this.Agv={I:this},0);A.Core.A$k._Init.
call(this.AnP={I:this},0);C.Table._Init.call(this.Pm={I:this},0);this.__proto__=
C.DeviceClass;this.An.OnSetId(0);this.Bt.OnSetId(1);this.Agv.OnSetId(3);this.Pm.
OnSetId(4);this.OQ=A._NewObject(C.Transponder,0);this.SA=A._NewObject(C.AxC,0);this.
QX=A._NewObject(C.Avq,0);this.SY=A._NewObject(C.Avq,0);this.R1=A._NewObject(C.AxC
,0);this.FQ=A._NewObject(C.TL,0);var Lw=this._variants();if(Lw){this.K={};Lw._Init.
call(this,aArg);}A.h7++;},_Done:function(){if(this.K)this.K._Done.call(this);this.
__proto__=null;this.An._Done();this.Bt._Done();this.Agv._Done();this.AnP._Done();
this.Pm._Done();A.h7--;},_ReInit:function(){this.An._ReInit();this.Bt._ReInit();
this.Agv._ReInit();this.AnP._ReInit();this.Pm._ReInit();if(this.K)this.K._ReInit.
call(this);},_Mark:function(D){var B;if((B=this.OQ)&&(B._cycle!=D))B._Mark(B._cycle=
D);if((B=this.SA)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.QX)&&(B._cycle!=
D))B._Mark(B._cycle=D);if((B=this.SY)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.
R1)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.FQ)&&(B._cycle!=D))B._Mark(B._cycle=
D);if((B=this.An)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Bt)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Agv)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AnP)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.Pm)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
I)&&(B._cycle!=D))B._Mark(B._cycle=D);if(this.K)this.K._Mark(D);},_variants:function(
){return A.acs.DeviceClass._variants();},K:null,I:null,_cycle:0,_observers:null,
_className:"Device::DeviceClass"};C.Device={_Init:function(){C.DeviceClass._Init.
call(this,0);},_ReInit:function(){},_variants:function(){return this;},_this:null
};C.ScreenType={UNDEFINED:0,Sleep:1,Boot:2,Home:3,Charge:4,Sync:5,Settings:6,EditAnimalData:
7,AnimalList:8,AnimalListFilter:9,AnimalActionTemperature:10,AnimalActionRate:11
,AlarmList:12,ControlMeasure:13,ControlList:14,RangeTest:15,DateTimeSettings:16,
TemperatureSettings:17,DeviceSettings:18,RegistrationSettings:19,WatchList:20,AnimalActionWeighing:
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
A4:A.jV,Abm:function(){var Av=A._NewObject(C.StringFilterCriterion,0);Av.E$(this
);return Av;},E$:function(AI){C.FilterCriterion.E$.call(this,AI);var Av=(C.StringFilterCriterion.
isPrototypeOf(AI)?AI:null);if(!!Av)this.A4=Av.A4;},_Init:function(aArg){C.FilterCriterion.
_Init.call(this,aArg);this.__proto__=C.StringFilterCriterion;},_className:"Device::StringFilterCriterion"
};C.Table={CF:function(Ad,A3){if(this.K&&this.K.CF)return this.K.CF.apply(this,arguments
);else return C.ITable.CF.apply(this,arguments);},VZ:function(Ad,A3){if(this.K&&
this.K.VZ)return this.K.VZ.apply(this,arguments);else return C.ITable.VZ.apply(this
,arguments);},H3:function(Ad,A3){if(this.K&&this.K.H3)return this.K.H3.apply(this
,arguments);else return C.ITable.H3.apply(this,arguments);},OnSetId:function(E){
if(this.K&&this.K.OnSetId)return this.K.OnSetId.apply(this,arguments);else return C.
ITable.OnSetId.apply(this,arguments);},B$:function(){if(this.K&&this.K.B$)return this.
K.B$.apply(this,arguments);else return C.ITable.B$.apply(this,arguments);},Bk:function(
E){if(this.K&&this.K.Bk)return this.K.Bk.apply(this,arguments);else return C.ITable.
Bk.apply(this,arguments);},V0:function(Ad,A3){if(this.K&&this.K.V0)return this.K.
V0.apply(this,arguments);else return C.ITable.V0.apply(this,arguments);},Sl:function(
Ad,A3){if(this.K&&this.K.Sl)return this.K.Sl.apply(this,arguments);else return C.
ITable.Sl.apply(this,arguments);},Ox:function(){if(this.K&&this.K.Ox)return this.
K.Ox.apply(this,arguments);else return C.ITable.Ox.apply(this,arguments);},Oz:function(
AoT){if(this.K&&this.K.Oz)return this.K.Oz.apply(this,arguments);else return C.ITable.
Oz.apply(this,arguments);},YJ:function(){if(this.K&&this.K.YJ)return this.K.YJ.apply(
this,arguments);else return C.ITable.YJ.apply(this,arguments);},ZO:function(Ad,A3
,C0){if(this.K&&this.K.ZO)return this.K.ZO.apply(this,arguments);else return C.ITable.
ZO.apply(this,arguments);},Hm:function(Ad,A3,C0){if(this.K&&this.K.Hm)return this.
K.Hm.apply(this,arguments);else return C.ITable.Hm.apply(this,arguments);},ZN:function(
Ad,A3,C0){if(this.K&&this.K.ZN)return this.K.ZN.apply(this,arguments);else return C.
ITable.ZN.apply(this,arguments);},N4:function(Ad,A3,C0){if(this.K&&this.K.N4)return this.
K.N4.apply(this,arguments);else return C.ITable.N4.apply(this,arguments);},ZM:function(
Ad,A3,C0){if(this.K&&this.K.ZM)return this.K.ZM.apply(this,arguments);else return C.
ITable.ZM.apply(this,arguments);},LT:function(aColumn,A8){if(this.K&&this.K.LT)return this.
K.LT.apply(this,arguments);else return C.ITable.LT.apply(this,arguments);},KN:function(
Ad,A3){if(this.K&&this.K.KN)return this.K.KN.apply(this,arguments);else return C.
ITable.KN.apply(this,arguments);},UA:function(Ad,A3,C0){if(this.K&&this.K.UA)return this.
K.UA.apply(this,arguments);else return C.ITable.UA.apply(this,arguments);},AgW:function(
aColumn,A8){if(this.K&&this.K.AgW)return this.K.AgW.apply(this,arguments);else return C.
ITable.AgW.apply(this,arguments);},EX:function(){if(this.K&&this.K.EX)return this.
K.EX.apply(this,arguments);else return C.ITable.EX.apply(this,arguments);},AjN:function(
aColumn,A8){if(this.K&&this.K.AjN)return this.K.AjN.apply(this,arguments);else return C.
ITable.AjN.apply(this,arguments);},Aek:function(aColumn,A8){if(this.K&&this.K.Aek
)return this.K.Aek.apply(this,arguments);else return C.ITable.Aek.apply(this,arguments
);},HJ:function(){if(this.K&&this.K.HJ)return this.K.HJ.apply(this,arguments);else
return C.ITable.HJ.apply(this,arguments);},Abu:function(){if(this.K&&this.K.Abu)
return this.K.Abu.apply(this,arguments);else return C.ITable.Abu.apply(this,arguments
);},QG:function(){if(this.K&&this.K.QG)return this.K.QG.apply(this,arguments);else
return C.ITable.QG.apply(this,arguments);},_Init:function(aArg){C.ITable._Init.call(
this,aArg);this.__proto__=C.Table;var Lw=this._variants();if(Lw){this.K={};Lw._Init.
call(this,aArg);}},_Done:function(){if(this.K)this.K._Done.call(this);this.__proto__=
C.ITable;C.ITable._Done.call(this);},_ReInit:function(){C.ITable._ReInit.call(this
);if(this.K)this.K._ReInit.call(this);},_Mark:function(D){C.ITable._Mark.call(this
,D);if(this.K)this.K._Mark(D);},_variants:function(){return A.acs.Table._variants(
);},K:null,_className:"Device::Table"};C.TableId={Animal:0,Rating:1,Undefined:2,
AnimalGroup:3,CalfDeregistrations:4};C.ScanState={Idle:0,Progress:1,IdScanned:2,
NotFound:3,Error:4,LAST:5};C.RatedAttribute={None:0,Feed:1,Appearance:2,Respiratory:
3,Faeces:4};C.ConverterClass={M0:null,Ak4:function(AoR){var BcB;var Aum=this.AUZ(
AoR/100,0,A._GetAutoObject(C.Device).TemperatureUnit);BcB=A.abk(Aum,0,1);return BcB;
},A$s:function(Nn){if(Nn<=0)return 0;else if(Nn<=1)return 5;else if(Nn<=2)return 3;
else if(Nn<=4)return 2;else if(Nn<=6)return 1;else if(Nn<=8)return 4;else return 0;
},Ad0:function(Nn){var a=0;switch(Nn){case 3:a=2;break;case 2:a=4;break;case 1:a=
6;break;case 0:a=0;break;case 4:a=8;break;case 5:a=1;break;default:A.ab5("%s",N_
);}return a;},AsJ:function(En,Ru){var Nq=A._GetAutoObject(C.Converter).Ajq(Ru,En
);switch(Nq){case 3:return 1;case 2:return 2;case 1:return 3;case 0:return 4;default:
throw new Error(P6+Nq.toFixed());}},AhQ:function(){var B;var D8=A._NewObject(A.Core.
Bs,0).Initialize(A._GetAutoObject(C.Helper).Dq());D8.AnC(0);D8.AnF(0);D8.AnI(0);
return((B=(D8.JO()|0))<0)?B+0x100000000:B;},Bhq:function(Atl){var Dm;switch(Atl){
case 36:Dm=MG;break;case 40:Dm=S8;break;case 56:Dm=US;break;case 70:Dm=Z8;break;
case 100:Dm=W5;break;case 124:Dm=Is;break;case 156:Dm=UT;break;case 158:Dm=Z9;break;
case 191:Dm=W6;break;case 196:Dm=Z_;break;case 203:Dm=W7;break;case 208:Dm=Z$;break;
case 233:Dm=Aaa;break;case 246:Dm=UU;break;case 250:Dm=W8;break;case 276:Dm=P7;break;
case 300:Dm=Aab;break;case 348:Dm=O2;break;case 372:Dm=Rl;break;case 380:Dm=W9;break;
case 392:Dm=W_;break;case 428:Dm=W$;break;case 440:Dm=Xa;break;case 442:Dm=Aac;break;
case 470:Dm=Xb;break;case 528:Dm=Xc;break;case 578:Dm=S9;break;case 616:Dm=UV;break;
case 620:Dm=UW;break;case 642:Dm=AcQ;break;case 643:Dm=S_;break;case 703:Dm=Aad;
break;case 705:Dm=Afz;break;case 724:Dm=Aae;break;case 752:Dm=Xd;break;case 756:
Dm=Aaf;break;case 792:Dm=Aag;break;case 804:Dm=AhV;break;case 826:Dm=J0;break;case
840:Dm=Aah;break;default:Dm=Atl.toFixed();}return Dm;},Alb:function(ML){var Aaw;
if((ML<10000)&&(A._GetAutoObject(C.Device).OJ===2))Aaw=2;else if((ML<100000)&&!!
A._GetAutoObject(C.Device).OJ)Aaw=1;else Aaw=0;return this.S7(ML,Aaw,false);},Ax0:
function(ML,Aaw){return this.S7(ML,Aaw,false);},S7:function(ML,Aaw,Bzx){var B;var
AlG=A.jV;switch(A._GetAutoObject(C.Device).MassUnit){case 0:if(Bzx)AlG=A.abl(ML,
0,0);else{var BdY=ML<0;if(Aaw<3)ML=ML+(((BdY?-1:1)*5)*(Math.pow(10,2-Aaw)|0));AlG=(((((
B=ML)>-2147483648)?Math.abs(B):B)/1000)|0).toFixed();if(Aaw>0)AlG=AlG+(Lv+A.abV(
A.abl((((B=ML)>-2147483648)?Math.abs(B):B)%1000,3,10),Aaw));if(BdY)AlG=AhW+AlG;}
break;case 1:AlG=A.abk(ML/453.592,0,Aaw);break;default:A.ab5("%s%s",Aof,A._GetAutoObject(
C.Device).MassUnit.toFixed());}return AlG;},Rh:function(Jh){var A4d=Jh.toFixed();
var Bge=A4d.length;if((Bge>=14)&&(Bge<=15)){var A18=this.AxQ(Jh);var Bym=A._GetAutoObject(
C.Converter).Bhq(A18);A4d=(Bym+N$)+A.abm(A._GetAutoObject(C.Helper).Sj(Jh,0,12),
12,10);}return A4d;},AmV:function(L4){switch(L4){case 0:return A.aaL(A.ach.AQq);
case 1:return A.aaL(A.ach.ADA);case 2:return A.aaL(A.ach.ADF);default:{A.ab5("%s%e"
,Xe,L4);return null;}}},A4R:function(BxU){switch(BxU){case 0:return A.aaL(A.ach.
AvA);case 1:return A.aaL(A.ach.ADw);case 2:return A.aaL(A.ach.AQk);default:throw new
Error(Aog);}},AdY:function(AJi){switch(AJi){case 0:case 14:return A.aaL(A.ach.AjZ
);case 2:return A.aaL(A.ach.Am3);case 1:return A.aaL(A.ach.AbG);case 3:switch(A.
_GetAutoObject(C.Device).MassUnit){case 0:return A.aaL(A.ach.AvJ);case 1:return A.
aaL(A.ach.AvK);default:throw new Error(AhX+A._GetAutoObject(C.Device).MassUnit.toFixed(
));}break;case 4:return A.aaL(A.ach.APM);case 5:return A.aaL(A.ach.APN);case 6:return A.
aaL(A.ach.APS);case 7:return A.aaL(A.ach.APa);case 8:case 13:return A.aaL(A.ach.
APh);case 9:return A.aaL(A.ach.AC8);case 10:return A.aaL(A.ach.APg);case 12:return A.
aaL(A.ach.APi);case 11:return A.aaL(A.ach.ADu);default:throw new Error(AhY+AJi.toFixed(
));}},BgR:function(Ay3){switch(Ay3){case 0:return A.aaL(A.ach.ADD);case 3:return A.
aaL(A.ach.Am3);case 1:return A.aaL(A.ach.AbG);case 2:return A._GetAutoObject(A.acj.
DV).Bc0();default:throw new Error(AhY+Ay3.toFixed());}},Bhp:function(Atl){switch(
Atl){case 977:return Rm;case 978:return UX;case 980:return Aoh;case 981:return Aoi;
case 982:return Aoj;case 983:return Aok;case 984:return AfA;case 985:return Ale;
default:return A.aaR(A.acf.Unknown);}},BhJ:function(Ac1){switch(Ac1){case 1:return 0x278A;
case 2:return 0x278B;case 3:return 0x278C;case 4:return 0x278D;case 5:return 0x278E;
case 6:return 0x278F;case 7:return 0x2790;case 8:return 0x2791;case 9:return 0x2792;
case 10:return 0x2793;default:return 0x20;}},Bpw:function(Jh){if(!Jh)return-1;return(
Jh%100000000)|0;},Bif:function(AoQ,aFilter){var B;if(!aFilter)return Aol;var Api=
Ax2;var Av=aFilter.AOG();while(!!Av){Api=Api+A._GetAutoObject(C.Helper).A6w(AoQ,
Av);Av=aFilter.AOL(Av);if(!!Av)Api=Api+O3;}Api=Api+Rn;return Api;},A7b:function(
BbH){var MI=0;switch(BbH){case 14:MI=2;break;case 13:MI=4;break;case 6:MI=36;break;
case 11:MI=9;break;case 0:MI=39;break;case 10:MI=26;break;case 12:MI=12;break;case
5:MI=14;break;case 3:MI=15;break;case 1:MI=10;break;case 8:MI=16;break;case 4:MI=
20;break;case 15:MI=27;break;case 9:MI=31;break;case 2:MI=13;break;case 7:MI=35;
break;case 16:MI=37;break;default:A.ab5("%s%e",Ax3,BbH);}return MI;},BgQ:function(
Ay3){switch(Ay3){case 0:return 1;case 3:return 0;case 1:return 2;case 2:switch(A.
_GetAutoObject(C.Device).MassUnit){case 0:return 3;case 1:return 4;default:throw new
Error(AhX+A._GetAutoObject(C.Device).MassUnit.toFixed());}break;default:throw new
Error(AhY+Ay3.toFixed());}},BgS:function(Ao1){switch(Ao1){case 0:return A.aaL(A.
ach.APJ);case 1:return A.aaL(A.ach.ADD);case 9:return A.aaL(A.ach.APU);case 4:return A.
aaL(A.ach.AGk);case 6:return A.aaL(A.ach.Asp);case 8:return A.aaL(A.ach.Avu);case
2:return A.aaL(A.ach.AbG);case 3:return A.aaL(A.ach.Am3);case 10:switch(A._GetAutoObject(
C.Device).MassUnit){case 0:return A.aaL(A.ach.AvJ);case 1:return A.aaL(A.ach.AvK
);default:throw new Error(AhX+A._GetAutoObject(C.Device).MassUnit.toFixed());}break;
case 7:case 5:case 11:case 12:case 13:case 14:case 18:case 15:case 16:case 17:return A.
aaL(A.aci.TM);default:throw new Error(UY+Ao1.toFixed());}},ANu:function(Atl){switch(
Atl){case 40:return 1;case 56:return 3;case 70:return 2;case 100:return 4;case 124:
return 5;case 156:return 7;case 158:return 36;case 191:return 17;case 196:return 8;
case 203:return 9;case 208:return 11;case 233:return 12;case 246:return 14;case 250:
return 15;case 276:return 10;case 300:return 16;case 348:return 18;case 372:return 19;
case 380:return 20;case 392:return 21;case 428:return 24;case 440:return 22;case
442:return 23;case 470:return 25;case 528:return 26;case 578:return 27;case 616:
return 28;case 620:return 29;case 642:return 30;case 643:return 31;case 703:return 34;
case 705:return 33;case 724:return 13;case 752:return 32;case 756:return 6;case 792:
return 35;case 804:return 37;case 826:return 38;case 840:return 39;default:return 0;
}},Z3:function(Jh){var A18=this.AxQ(Jh);return this.ANu(A18);},AxQ:function(Jh){
return A._GetAutoObject(C.Helper).Sj(Jh,12,3)|0;},A$L:function(AoV,En){if(AoV<A.
_GetAutoObject(C.Helper).AC4(En))return 1;else if(AoV<A._GetAutoObject(C.Helper).
AC3(En))return 2;else return 3;},ACR:function(Bxy){switch(Bxy){case 1:return 1;case
2:return 2;case 3:return 3;case 4:return 4;case 5:return 5;case 6:return 6;case 7:
return 7;case 8:return 8;case 9:return 9;case 10:return 10;case 11:return 11;case
12:return 12;case 13:return 13;case 14:return 14;case 15:return 15;case 16:return 16;
default:return 0;}},AUZ:function(A8,AJa,AJb){if(AJa===AJb)return A8;if(!AJa&&(AJb===
1)){var result=((A8*9)/5)+32;return result;}if((AJa===1)&&!AJb){var result=((A8-
32)*5)/9;return result;}throw new Error(((AsX+AJa.toFixed())+Ax4)+AJb.toFixed());
},A6f:function(Eb){switch(Eb){case 0:return Ax5;case 1:return A.jV;case 2:return Ax6;
case 3:return Aom;case 4:return A.aaR(A.acf.Contains);case 5:return AfB;default:{
A.ab5("%s%e",Aon,Eb);return A.jV;}}},A5e:function(Ac0){return this.M0.Aej(Ac0);}
,Bi0:function(Ac0){return this.M0.AmG(Ac0);},Bg9:function(Atk){var AAn=0;switch(
Atk){case 0:AAn=1;break;case 1:AAn=2;break;case 2:AAn=3;break;case 3:AAn=4;break;
default:A.ab5("%s%e",IT,Atk);}return AAn;},Ajq:function(A0w,En){if(A0w>=A._GetAutoObject(
C.Helper).A6r(En))return 3;else if(A0w>=A._GetAutoObject(C.Helper).ACS(En))return 2;
else if(A0w<A._GetAutoObject(C.Device).AcJ)return 0;else return 1;},AqC:function(
MI){var BO=-1;switch(MI){case 0:BO=0;break;case 1:BO=40;break;case 2:BO=70;break;
case 3:BO=56;break;case 4:BO=100;break;case 5:BO=124;break;case 6:BO=756;break;case
7:BO=156;break;case 8:BO=196;break;case 9:BO=203;break;case 10:BO=276;break;case
11:BO=208;break;case 12:BO=233;break;case 13:BO=724;break;case 14:BO=246;break;case
15:BO=250;break;case 16:BO=300;break;case 17:BO=191;break;case 18:BO=348;break;case
19:BO=372;break;case 20:BO=380;break;case 21:BO=392;break;case 22:BO=440;break;case
23:BO=442;break;case 24:BO=428;break;case 25:BO=470;break;case 26:BO=528;break;case
27:BO=578;break;case 28:BO=616;break;case 29:BO=620;break;case 30:BO=642;break;case
31:BO=643;break;case 32:BO=752;break;case 33:BO=705;break;case 34:BO=703;break;case
35:BO=792;break;case 36:BO=158;break;case 37:BO=804;break;case 38:BO=826;break;case
39:BO=840;break;default:throw new Error(Aoo+MI.toFixed());}return BO;},BpA:function(
Jh){return A._GetAutoObject(C.Helper).Sj(Jh,8,2)|0;},Bpz:function(Jh){var Bzt=this.
BpA(Jh);return this.ACR(Bzt);},_Init:function(aArg){C.M0._Init.call(this.M0={I:this
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
false,IsAlarm:false,EU:function(Ad,AH){var HF=C.Row.EU.call(this,Ad,AH);if(HF&&!
!AH){this.OnSetId(AH.CF(Ad,0));this.SI(AH.CF(Ad,1));this.Ab8(AH.CF(Ad,2));this.AnE(
AH.CF(Ad,3));this.Q3(AH.Hv(Ad,4));this.JQ(AH.AOI(Ad,7));this.Akz(AH.Bix(Ad,6));this.
EB(AH.AmW(Ad,14));this.PQ(AH.KN(Ad,22));this.Nd(AH.KN(Ad,26));this.Axc(AH.I4(Ad,
13));this.Ae1(AH.H3(Ad,8));this.Aw6(AH.Hv(Ad,15));this.ATu(AH.Hv(Ad,31));this.Ae7(
AH.A6G(Ad,5));this.AS4(AH.I4(Ad,17));this.Uo(AH.H3(Ad,11));this.ATt(AH.Hv(Ad,16)
);this.ATw(AH.Hv(Ad,30));this.AkF(AH.H3(Ad,9));this.Ae5(AH.H3(Ad,12));this.ATv(AH.
Hv(Ad,20));this.Aw8(AH.Hv(Ad,21));this.Ae3(AH.H3(Ad,10));this.AwK(AH.H3(Ad,27));
this.AFg(AH.ACZ(Ad,18));this.AFK(AH.Hv(Ad,19));this.AwF(AH.ACZ(Ad,23));this.Aw7(
AH.Hv(Ad,24));this.ASW(AH.CF(Ad,25));this.Aww(AH.Hv(Ad,28));this.AwL(AH.CF(Ad,29
));this.ArY(AH.H3(Ad,38));this.NY(AH.Biy(Ad,32));this.AkB(AH.BiD(Ad,33));this.AnG(
AH.KN(Ad,35));this.Nf(AH.AOQ(Ad,34));this.Ae4(AH.H3(Ad,37));this.AFy(AH.BiM(Ad,36
));}return HF;},Cg:function(AH){var HF=C.Row.Cg.call(this,AH);if(HF&&!!AH){var Jm=
AH.Ox();if(Jm<=0)A.ab5("%s",Xf);else{var Az2=this.Am8();if(Az2)this.CL=AH.YJ();else
AH.Hm(this.CL,0,this.Id);AH.Hm(this.CL,1,this.VisualId);AH.Hm(this.CL,2,this.GroupId
);AH.Hm(this.CL,3,this.LocationId);AH.Acq(this.CL,4,this.DateOfBirth);AH.Boo(this.
CL,7,this.Gender);AH.Bok(this.CL,6,this.BirthType);AH.Boi(this.CL,14,this.AnimalType
);AH.UA(this.CL,22,this.TransponderId);AH.UA(this.CL,26,this.NaisId);AH.AkV(this.
CL,13,this.WorstAssessment);AH.N4(this.CL,8,this.IsAlarm);AH.Acq(this.CL,15,this.
TimestampAlarm);AH.N4(this.CL,11,this.IsFever);AH.Acq(this.CL,16,this.TimestampExpirationFeverAlarm
);AH.N4(this.CL,9,this.IsControl);AH.N4(this.CL,12,this.IsWatch);AH.Acq(this.CL,
20,this.TimestampLastControl);AH.Acq(this.CL,21,this.TimestampLastWatch);AH.N4(this.
CL,10,this.IsRegistered);AH.N4(this.CL,27,this.IsPerished);AH.Acq(this.CL,28,this.
DateOfLastCalving);AH.Hm(this.CL,29,this.LactationNumber);AH.N4(this.CL,38,this.
IsDry);AH.Bom(this.CL,32,this.Breed);AH.Bon(this.CL,33,this.EaseOfDelivery);AH.UA(
this.CL,35,this.NaisIdMother);AH.Bou(this.CL,34,this.WhereAbouts);AH.N4(this.CL,
37,this.IsRegistrationNoticePending);AH.Bos(this.CL,36,this.ReasonOfLeaving);HF=
AH.Oz(Jm);if(Az2)this.OnSetId(AH.Abu());}}return HF;},Gr:function(){C.Row.Gr.call(
this);this.OnSetId(-1);this.Ae3(true);},EX:function(){C.Row.EX.call(this);this.OnSetId(
0);this.SI(0);this.Ab8(0);this.AnE(0);this.Q3(0);this.JQ(A._GetAutoObject(C.Device
).Gender);this.Akz(0);this.EB(A._GetAutoObject(C.Device).AnimalType);this.PQ(0);
this.Nd(0);this.Axc(0);this.Ae1(false);this.Aw6(0);this.ATu(0);this.Ae7(0);this.
AS4(0);this.Uo(false);this.ATw(0);this.ATt(0);this.AkF(false);this.Ae5(false);this.
ATv(0);this.Aw8(0);this.Ae3(false);this.AwK(false);this.AFg(0);this.AFK(0);this.
AwF(0);this.Aw7(0);this.ASW(-1);this.Aww(0);this.AwL(0);this.ArY(false);this.NY(
0);this.AkB(0);this.AnG(0);this.Nf(0);this.Ae4(false);this.AFy(0);},OnSetId:function(
E){if(this.Id===E)return;this.Id=E;A.abo([this,this.Q0,this.OnSetId],0);},SI:function(
E){if(this.VisualId===E)return;this.VisualId=E;A.abo([this,this.ArE,this.SI],0);
},Ab8:function(E){if(this.GroupId===E)return;this.GroupId=E;A.abo([this,this.Bkx
,this.Ab8],0);},Q3:function(E){if(this.DateOfBirth===E)return;this.DateOfBirth=E;
A.abo([this,this.Av_,this.Q3],0);},JQ:function(E){if(this.Gender===E)return;this.
Gender=E;A.abo([this,this.Wx,this.JQ],0);},Akz:function(E){if(this.BirthType===E
)return;this.BirthType=E;A.abo([this,this.ASf,this.Akz],0);},AnE:function(E){if(
this.LocationId===E)return;this.LocationId=E;A.abo([this,this.A8B,this.AnE],0);}
,Ae7:function(E){if(this.LastTemperature===E)return;this.LastTemperature=E;A.abo([
this,this.A8A,this.Ae7],0);},Ae1:function(E){if(this.IsAlarm===E)return;this.IsAlarm=
E;A.abo([this,this.A8s,this.Ae1],0);},AkF:function(E){if(this.IsControl===E)return;
this.IsControl=E;A.abo([this,this.BkA,this.AkF],0);},Ae3:function(E){if(this.IsRegistered===
E)return;this.IsRegistered=E;A.abo([this,this.BkD,this.Ae3],0);},Ae5:function(E){
if(this.IsWatch===E)return;this.IsWatch=E;A.abo([this,this.A8w,this.Ae5],0);},Axc:
function(E){if(this.WorstAssessment===E)return;this.WorstAssessment=E;A.abo([this
,this.A9c,this.Axc],0);},Uo:function(E){if(this.IsFever===E)return;this.IsFever=
E;A.abo([this,this.A8t,this.Uo],0);},ATv:function(E){if(this.TimestampLastControl===
E)return;this.TimestampLastControl=E;A.abo([this,this.Bk3,this.ATv],0);},Aw8:function(
E){if(this.TimestampLastWatch===E)return;this.TimestampLastWatch=E;A.abo([this,this.
Bk5,this.Aw8],0);},AS4:function(E){if(this.LastRatingTemperature===E)return;this.
LastRatingTemperature=E;A.abo([this,this.BkG,this.AS4],0);},ATt:function(E){if(this.
TimestampExpirationFeverAlarm===E)return;this.TimestampExpirationFeverAlarm=E;A.
abo([this,this.Bk1,this.ATt],0);},Aw6:function(E){if(this.TimestampAlarm===E)return;
this.TimestampAlarm=E;A.abo([this,this.Bk0,this.Aw6],0);},EB:function(E){if(this.
AnimalType===E)return;this.AnimalType=E;A.abo([this,this.PN,this.EB],0);},AFg:function(
E){if(this.LastBodyWeight===E)return;this.LastBodyWeight=E;A.abo([this,this.A8z,
this.AFg],0);},AFK:function(E){if(this.TimestampLastWeighing===E)return;this.TimestampLastWeighing=
E;A.abo([this,this.A80,this.AFK],0);},PQ:function(E){if(this.TransponderId===E)return;
this.TransponderId=E;A.abo([this,this.ArD,this.PQ],0);},RP:function(){return A._GetAutoObject(
C.Helper).L9(this.DateOfBirth,A._GetAutoObject(C.Helper).Dq());},AwF:function(E){
if(this.FirstBodyWeight===E)return;this.FirstBodyWeight=E;A.abo([this,this.ASl,this.
AwF],0);},Aw7:function(E){if(this.TimestampFirstWeighing===E)return;this.TimestampFirstWeighing=
E;A.abo([this,this.ASC,this.Aw7],0);},Ari:function(){var O9=A._NewObject(A.Core.
Bs,0);O9.Initialize(this.DateOfBirth);var A1V=A._NewObject(A.Core.Bs,0);A1V.Initialize(
this.TimestampFirstWeighing);if(((O9.Year===A1V.Year)&&(O9.Ab4()===A1V.Ab4()))&&(
this.FirstBodyWeight>0))return true;else return false;},AhU:function(AI6){var AaG;
var Aur;if(this.TimestampLastWeighing>0){Aur=this.TimestampLastWeighing;AaG=this.
LastBodyWeight;}else{Aur=this.DateOfBirth;AaG=A._GetAutoObject(C.Helper).Abt(this.
AnimalType);}return A._GetAutoObject(C.Helper).AhU(AaG,Aur,AI6,this.AnimalType);
},ASW:function(E){if(this.FirstBodyWeightId===E)return;this.FirstBodyWeightId=E;
A.abo([this,this.Bkw,this.ASW],0);},AnW:function(Bb2){this.Ae1(Bb2);if(Bb2){if(!
this.TimestampAlarm)this.Aw6(A._GetAutoObject(C.Helper).Dq());}else this.Aw6(0);
},Nd:function(E){if(this.NaisId===E)return;this.NaisId=E;A.abo([this,this.Anv,this.
Nd],0);},AGz:function(BbY){this.Ae5(BbY);if(BbY){if(!this.TimestampLastWatch)this.
Aw8(A._GetAutoObject(C.Helper).Dq());}else this.Aw8(0);},Aww:function(E){if(this.
DateOfLastCalving===E)return;this.DateOfLastCalving=E;A.abo([this,this.Bkm,this.
Aww],0);},AwL:function(E){if(this.LactationNumber===E)return;this.LactationNumber=
E;A.abo([this,this.BkF,this.AwL],0);},AwK:function(E){if(this.IsPerished===E)return;
this.IsPerished=E;A.abo([this,this.BkC,this.AwK],0);},ATw:function(E){if(this.TimestampLastTemperature===
E)return;this.TimestampLastTemperature=E;A.abo([this,this.Bk4,this.ATw],0);},ATu:
function(E){if(this.TimestampLastAssessment===E)return;this.TimestampLastAssessment=
E;A.abo([this,this.Bk2,this.ATu],0);},NY:function(E){if(this.Breed===E)return;this.
Breed=E;A.abo([this,this.Av8,this.NY],0);},AkB:function(E){if(this.EaseOfDelivery===
E)return;this.EaseOfDelivery=E;A.abo([this,this.ASk,this.AkB],0);},Nf:function(E
){if(this.WhereAbouts===E)return;this.WhereAbouts=E;A.abo([this,this.Awk,this.Nf
],0);},AnG:function(E){if(this.NaisIdMother===E)return;this.NaisIdMother=E;A.abo([
this,this.ASs,this.AnG],0);},AFy:function(E){if(this.ReasonOfLeaving===E)return;
this.ReasonOfLeaving=E;A.abo([this,this.BkQ,this.AFy],0);},Ae4:function(E){if(this.
IsRegistrationNoticePending===E)return;this.IsRegistrationNoticePending=E;A.abo([
this,this.BkE,this.Ae4],0);},ArY:function(E){if(this.IsDry===E)return;this.IsDry=
E;A.abo([this,this.BkB,this.ArY],0);},Q0:function(){return this.Id;},ArE:function(
){return this.VisualId;},Bkx:function(){return this.GroupId;},Av_:function(){return this.
DateOfBirth;},Wx:function(){return this.Gender;},ASf:function(){return this.BirthType;
},A8B:function(){return this.LocationId;},A8A:function(){return this.LastTemperature;
},A8s:function(){return this.IsAlarm;},BkA:function(){return this.IsControl;},BkD:
function(){return this.IsRegistered;},A8w:function(){return this.IsWatch;},A9c:function(
){return this.WorstAssessment;},A8t:function(){return this.IsFever;},Bk3:function(
){return this.TimestampLastControl;},Bk5:function(){return this.TimestampLastWatch;
},BkG:function(){return this.LastRatingTemperature;},Bk1:function(){return this.
TimestampExpirationFeverAlarm;},Bk0:function(){return this.TimestampAlarm;},PN:function(
){return this.AnimalType;},A8z:function(){return this.LastBodyWeight;},A80:function(
){return this.TimestampLastWeighing;},ArD:function(){return this.TransponderId;}
,ASl:function(){return this.FirstBodyWeight;},ASC:function(){return this.TimestampFirstWeighing;
},Bkw:function(){return this.FirstBodyWeightId;},Anv:function(){return this.NaisId;
},Bkm:function(){return this.DateOfLastCalving;},BkF:function(){return this.LactationNumber;
},BkC:function(){return this.IsPerished;},Bk4:function(){return this.TimestampLastTemperature;
},Bk2:function(){return this.TimestampLastAssessment;},Av8:function(){return this.
Breed;},ASk:function(){return this.EaseOfDelivery;},Awk:function(){return this.WhereAbouts;
},ASs:function(){return this.NaisIdMother;},BkQ:function(){return this.ReasonOfLeaving;
},BkE:function(){return this.IsRegistrationNoticePending;},BkB:function(){return this.
IsDry;},_Init:function(aArg){C.Row._Init.call(this,aArg);this.__proto__=C.Animal;
this.TableId=0;},_className:"Device::Animal"};C.Row={CL:-1,TableId:2,EU:function(
Ad,AH){if(!AH){A.ab5("%s",(Aop+this.CL.toFixed())+AsY);return false;}else if(AH.
Id!==this.TableId)throw new Error(AsZ);else if((Ad<0)||(Ad>=AH.B$())){A.ab5("%s"
,(((As0+this.CL.toFixed())+Aoq)+AH.B$().toFixed())+Aor);return false;}this.CL=Ad;
return true;},Cg:function(AH){if(!AH){A.ab5("%s",(Aop+this.CL.toFixed())+AsY);return false;
}else if(AH.Id!==this.TableId)throw new Error(AsZ);else if(this.Am8()&&AH.Lg()){
A.ab5("%s",As1+AH.HJ().toFixed());return false;}else if(!this.Am8()&&((this.CL<0
)||(this.CL>=AH.B$()))){A.ab5("%s",(((As0+this.CL.toFixed())+Aoq)+AH.B$().toFixed(
))+Aor);return false;}return true;},Gr:function(){this.EX();this.CL=-1;},Am8:function(
){return this.CL===-1;},EX:function(){this.CL=-2;},Aq2:function(){return this.CL
!==-2;},A8O:function(){return this.CL;},A9$:function(E){this.CL=E;},_Init:function(
aArg){this.__proto__=C.Row;A.h7++;},_Done:function(){this.__proto__=null;A.h7--;
},_ReInit:function(){},_Mark:function(D){var B;if((B=this.I)&&(B._cycle!=D))B._Mark(
B._cycle=D);},I:null,_cycle:0,_observers:null,_className:"Device::Row"};C.Rating={
Temperature:0,Id:0,AnimalId:0,Timestamp:0,BodyWeight:0,RatingTemperature:0,Faeces:
0,Respiratory:0,Appearance:0,Feed:0,EU:function(Ad,AH){var HF=C.Row.EU.call(this
,Ad,AH);if(HF&&!!AH){this.OnSetId(AH.CF(Ad,0));this.OnSetAnimalId(AH.CF(Ad,1));this.
OnSetTimestamp(AH.Hv(Ad,6));this.OnSetFeed(AH.I4(Ad,2));this.OnSetAppearance(AH.
I4(Ad,3));this.OnSetRespiratory(AH.I4(Ad,4));this.OnSetFaeces(AH.I4(Ad,5));this.
OnSetTemperature(AH.A6G(Ad,7));this.OnSetBodyWeight(AH.ACZ(Ad,8));this.OnSetRatingTemperature(
AH.I4(Ad,9));}return HF;},Cg:function(AH){if(this.K&&this.K.Cg)return this.K.Cg.
apply(this,arguments);else return C.Rating.Bau.apply(this,arguments);},Bau:function(
AH){var HF=C.Row.Cg.call(this,AH);if((HF&&!!AH)&&(AH.Id===1)){var Jm=AH.Ox();if(
Jm<=0)A.ab5("%s",Xf);else{var Az2=this.Am8();if(Az2)this.CL=AH.YJ();else AH.Hm(this.
CL,0,this.Id);AH.Hm(this.CL,1,this.AnimalId);AH.Acq(this.CL,6,this.Timestamp);AH.
AkV(this.CL,2,this.Feed);AH.AkV(this.CL,3,this.Appearance);AH.AkV(this.CL,4,this.
Respiratory);AH.AkV(this.CL,5,this.Faeces);AH.A_6(this.CL,7,this.Temperature);AH.
AUq(this.CL,8,this.BodyWeight);AH.AkV(this.CL,9,this.RatingTemperature);AH.Oz(Jm
);if(Az2)this.OnSetId(AH.Abu());var Rx=A._GetAutoObject(C.Device).An;var Ad=A._GetAutoObject(
C.Device).An.LT(0,this.AnimalId);if(Ad>=0){var Cj=A._NewObject(C.Animal,0);Cj.EU(
Ad,Rx);if(this.Temperature>0)Cj.Uo(A._GetAutoObject(C.Helper).A67(this));if((this.
Temperature>0)&&A._GetAutoObject(C.Helper).AGe(this)){var Oh=A._GetAutoObject(C.
Helper).AQY(this);Cj.AkF(Oh);Cj.AnW(Oh);}else if(this.Temperature>0){var Oh=(A._GetAutoObject(
C.Helper).AQY(this)||(Cj.WorstAssessment===2))||(Cj.WorstAssessment===1);Cj.AkF(
Oh);Cj.AnW(Oh);}else{var Oh=A._GetAutoObject(C.Helper).AQY(this)||Cj.IsFever;Cj.
AkF(Oh);Cj.AnW(Oh);}Cj.Cg(Rx);}}}return HF;},Gr:function(){C.Row.Gr.call(this);this.
OnSetTimestamp(A._GetAutoObject(C.Helper).Dq());this.OnSetId(-1);},EX:function(){
C.Row.EX.call(this);this.OnSetTimestamp(0);this.OnSetId(0);this.OnSetAnimalId(0);
this.OnSetFeed(0);this.OnSetAppearance(0);this.OnSetRespiratory(0);this.OnSetFaeces(
0);this.OnSetTemperature(0);this.OnSetBodyWeight(0);this.OnSetRatingTemperature(
0);},OnSetTemperature:function(E){if(this.Temperature===E)return;this.Temperature=
E;A.abo([this,this.BkZ,this.OnSetTemperature],0);},OnSetId:function(E){if(this.Id===
E)return;this.Id=E;A.abo([this,this.Q0,this.OnSetId],0);},OnSetAnimalId:function(
E){if(this.AnimalId===E)return;this.AnimalId=E;A.abo([this,this.Bj$,this.OnSetAnimalId
],0);},OnSetFeed:function(E){if(this.Feed===E)return;this.Feed=E;A.abo([this,this.
Bkt,this.OnSetFeed],0);},OnSetAppearance:function(E){if(this.Appearance===E)return;
this.Appearance=E;A.abo([this,this.Bka,this.OnSetAppearance],0);},OnSetRespiratory:
function(E){if(this.Respiratory===E)return;this.Respiratory=E;A.abo([this,this.BkR
,this.OnSetRespiratory],0);},OnSetFaeces:function(E){if(this.Faeces===E)return;this.
Faeces=E;A.abo([this,this.Bkr,this.OnSetFaeces],0);},OnSetTimestamp:function(E){
if(this.Timestamp===E)return;this.Timestamp=E;A.abo([this,this.A8Z,this.OnSetTimestamp
],0);},Boj:function(Np,A8){switch(Np){case 2:this.OnSetAppearance(A8);break;case
1:this.OnSetFeed(A8);break;case 4:this.OnSetFaeces(A8);break;case 3:this.OnSetRespiratory(
A8);break;default:;}},Biv:function(Np){switch(Np){case 2:return this.Appearance;
case 1:return this.Feed;case 4:return this.Faeces;case 3:return this.Respiratory;
default:return 0;}},OnSetRatingTemperature:function(E){if(this.RatingTemperature===
E)return;this.RatingTemperature=E;A.abo([this,this.BkP,this.OnSetRatingTemperature
],0);},OnSetBodyWeight:function(E){if(this.BodyWeight===E)return;this.BodyWeight=
E;A.abo([this,this.Bke,this.OnSetBodyWeight],0);},BkZ:function(){return this.Temperature;
},Q0:function(){return this.Id;},Bj$:function(){return this.AnimalId;},Bkt:function(
){return this.Feed;},Bka:function(){return this.Appearance;},BkR:function(){return this.
Respiratory;},Bkr:function(){return this.Faeces;},A8Z:function(){return this.Timestamp;
},BkP:function(){return this.RatingTemperature;},Bke:function(){return this.BodyWeight;
},_Init:function(aArg){C.Row._Init.call(this,aArg);this.__proto__=C.Rating;this.
TableId=1;var Lw=this._variants();if(Lw){this.K={};Lw._Init.call(this,aArg);}},_Done:
function(){if(this.K)this.K._Done.call(this);this.__proto__=C.Row;C.Row._Done.call(
this);},_ReInit:function(){C.Row._ReInit.call(this);if(this.K)this.K._ReInit.call(
this);},_Mark:function(D){C.Row._Mark.call(this,D);if(this.K)this.K._Mark(D);},_variants:
function(){return A.acs.Rating._variants();},K:null,_className:"Device::Rating"};
C.HelperClass={Uz:null,AhF:null,AUj:null,AUk:null,W:null,Au:null,KF:null,SS:null
,AdZ:null,UG:null,UF:null,Aem:null,Afw:null,Afv:null,Afu:null,Afx:null,AgD:null,
AGO:0,Init:function(aArg){A.pe([this,this.ATO],this);},AkI:function(E){this.Uz=E;
A.abo([this,this.ArB,this.AkI],0);},AFC:function(E){this.AhF=E;A.abo([this,this.
A8P,this.AFC],0);},BAB:function(G){switch(A._GetAutoObject(C.Device).ScanState){
case 2:{var Aut=A._GetAutoObject(C.Device).OQ;if(!Aut)throw new Error(Ax7);switch(
Aut.TransponderType){case 1:this.AkI(Aut);break;case 2:this.ATk(Aut);break;case 3:
this.AFC(Aut);break;case 4:this.ATl(Aut);break;case 0:break;default:throw new Error(
Ax8);}}break;case 4:A._GetAutoObject(C.Device).A7(11,true,A.jV,2000,null);break;
case 3:A._GetAutoObject(C.Device).A7(12,true,A.jV,2000,null);break;case 0:case 1:
break;default:throw new Error(Ax9);}},AkS:function(){this.AkI(null);this.ATk(null
);this.AFC(null);this.ATl(null);},AFH:function(E){if(this.K&&this.K.AFH)return this.
K.AFH.apply(this,arguments);else return C.HelperClass.Bas.apply(this,arguments);
},Bas:function(E){A.abo([this,this.U1,this.U4],0);A._GetAutoObject(C.Device).SetSystemTime(
E);},U4:function(Aq){this.AFH(Aq);},Dq:function(){if(this.K&&this.K.Dq)return this.
K.Dq.apply(this,arguments);else return C.HelperClass.Bao.apply(this,arguments);}
,Bao:function(){var B;return((B=(this.Au.BcY()|0))<0)?B+0x100000000:B;},U1:function(
){return this.Dq();},Ass:function(){A._GetAutoObject(C.Device).SP(-1);this.W.EX(
);A.we(this.W,0);},A7l:function(Jh){if(!Jh){A.ab5("%s%U",As2,Jh);return false;}var
Bf=A._GetAutoObject(C.Device).An.AgW(22,Jh);return this.G6(Bf);},AmX:function(AoQ
,AI5){switch(AoQ){case 0:{var Aph=AI5;switch(Aph){case 14:return A.aaR(A.acf.Afr
);case 6:return Ax_;case 4:return A.aaR(A.acf.Aee);case 28:return P8;case 7:return A.
aaR(A.acf.Afm);case 2:return A.aaR(A.acf.P);case 0:return A.aaR(A.acf.GM);case 37:
return Ax$;case 8:return A.aaR(A.acf.Alarm);case 9:return A.aaR(A.acf.ACd);case 38:
return A.aaR(A.acf.ANU);case 11:return A.aaR(A.acf.Fever);case 27:return AVM;case
10:return A.aaR(A.acf.BnZ);case 12:return A.aaR(A.acf.Asf);case 29:return A.aaR(
A.acf.ARf);case 18:return A.aaR(A.acf.Weighing);case 17:return AVN;case 5:return A.
aaR(A.acf.Temperature);case 3:return AVO;case 26:return A.aaR(A.acf.Ug);case 35:
return A.aaR(A.acf.Ug)+AVP;case 36:return AHh;case 15:return AHi;case 24:return AfC;
case 20:return Aos;case 30:return AVQ;case 21:return AHj;case 19:return Alf;case
22:return A.aaR(A.acf.Transponder);case 1:return A.aaR(A.acf.GI);case 34:return A.
aaR(A.acf.Jf);case 13:return AHk;case 31:return AHl;default:{A.ab5("%s",AVR+Aph.
toFixed());return AHm+Aph.toFixed();}}}case 1:{var Aph=AI5;switch(Aph){case 1:return A.
aaR(A.acf.Animal);case 3:return A.aaR(A.acf.AGd);case 8:return A.aaR(A.acf.Aft);
case 5:return A.aaR(A.acf.AGf);case 2:return A.aaR(A.acf.Feed);case 4:return A.aaR(
A.acf.AGg);case 7:return A.aaR(A.acf.Temperature);case 6:return A.aaR(A.acf.Bs);
default:{A.ab5("%s",AVS+Aph.toFixed());return AHm+Aph.toFixed();}}}default:A.ab5(
"%s",(AVT+AoQ.toFixed())+AcR);}return A.jV;},A6w:function(AoQ,AI){var result=A.jV;
if(!!AI){result=this.AmX(AoQ,AI.EJ);result=((result+N$)+A._GetAutoObject(C.Converter
).A6f(AI.Operator))+N$;if(!!(C.Int32FilterCriterion.isPrototypeOf(AI)?AI:null))result=
result+(C.Int32FilterCriterion.isPrototypeOf(AI)?AI:null).A4.toFixed();else if(!
!(C.UInt32FilterCriterion.isPrototypeOf(AI)?AI:null))result=result+(C.UInt32FilterCriterion.
isPrototypeOf(AI)?AI:null).A4.toFixed();else if(!!(C.StringFilterCriterion.isPrototypeOf(
AI)?AI:null))result=result+(C.StringFilterCriterion.isPrototypeOf(AI)?AI:null).A4;
else if(!!(C.BoolFilterCriterion.isPrototypeOf(AI)?AI:null)){if((C.BoolFilterCriterion.
isPrototypeOf(AI)?AI:null).A4)result=this.AmX(AoQ,AI.EJ);else result=A.jV;}else if(
!!(C.GenderFilterCriterion.isPrototypeOf(AI)?AI:null)){var By2=A._NewObject(C.GenderToString
,0);result=result+By2.Lt((C.GenderFilterCriterion.isPrototypeOf(AI)?AI:null).A4);
}else if(!!(C.AnimalTypeFilterCriterion.isPrototypeOf(AI)?AI:null)){var BxW=A._NewObject(
C.AnimalTypeToString,0);result=result+BxW.Lt((C.AnimalTypeFilterCriterion.isPrototypeOf(
AI)?AI:null).A4);}else if(!!(C.AssessmentFilterCriterion.isPrototypeOf(AI)?AI:null
)){var BxZ=A._NewObject(C.AssesmentToString,0);result=result+BxZ.Lt((C.AssessmentFilterCriterion.
isPrototypeOf(AI)?AI:null).A4);}else if(!!(C.UInt64FilterCriterion.isPrototypeOf(
AI)?AI:null))result=result+(C.UInt64FilterCriterion.isPrototypeOf(AI)?AI:null).A4.
toFixed();else if(!!(C.UInt64PartialFilterCriterion.isPrototypeOf(AI)?AI:null)){
var Av=(C.UInt64PartialFilterCriterion.isPrototypeOf(AI)?AI:null);result=(((((result+
Av.A4)+AVU)+Av.OA.toFixed())+O3)+Av.Zq.toFixed())+Aor;}else if(!!(C.WhereAboutsFilterCriterion.
isPrototypeOf(AI)?AI:null)){var BCn=A._NewObject(C.WhereAboutsToString,0);result=
result+BCn.Lt((C.WhereAboutsFilterCriterion.isPrototypeOf(AI)?AI:null).A4);}else
A.ab5("%s",AVV);}return result;},Nk:function(aString,BbM,Bw$){var result=A.jV;var
Bfv=false;var index=0;var Bxb=BbM.length;while(!Bfv){var A3A=aString.indexOf(BbM
,index);if(A3A!==-1){result=(result+A.abW(aString,index,A3A-index))+Bw$;index=A3A+
Bxb;}else{var BbQ=aString.length;if(index<BbQ)result=result+A.ab2(aString,BbQ-index
);Bfv=true;}}return result;},ATk:function(E){this.AUj=E;A.abo([this,this.BkT,this.
ATk],0);},ATl:function(E){this.AUk=E;A.abo([this,this.BkU,this.ATl],0);},Bdm:function(
){return((A._GetAutoObject(C.Device).ScanState===2)&&!!A._GetAutoObject(C.Device
).OQ)&&(A._GetAutoObject(C.Device).OQ.TransponderType===1);},Af_:function(G){if(
!this.W.Am8()&&!!this.W.Id)this.Bjy(this.W.Id);},ACS:function(En){return A._GetAutoObject(
C.Helper).UG.Get(En);},A6r:function(En){return A._GetAutoObject(C.Helper).UF.Get(
En);},A6C:function(){var O=0;var min=32767;while(O<A._GetAutoObject(C.Helper).UG.
MD){if(A._GetAutoObject(C.Helper).UG.Get(O)<min)min=A._GetAutoObject(C.Helper).UG.
Get(O);O=O+1;}return min;},ATO:function(G){A.zV([this,this.Af_],A._GetAutoObject(
C.Device).An,0);},AQY:function(D3){if(!D3)return false;var Bi$=(((this.AzY(D3.Faeces
)||this.AzY(D3.Feed))||this.AzY(D3.Appearance))||this.AzY(D3.Respiratory))||this.
AzY(D3.RatingTemperature);return Bi$||this.A67(D3);},AzY:function(Bbq){return(Bbq===
2)||(Bbq===1);},A67:function(D3){return!!D3&&(D3.Temperature>A._GetAutoObject(C.
Helper).ACS(A._GetAutoObject(C.Helper).W.AnimalType));},G6:function(L7){var A2t=
false;if(L7>=0){if(L7!==this.W.CL)A._GetAutoObject(C.Device).SP(L7);A2t=this.W.EU(
L7,A._GetAutoObject(C.Device).An);if(A2t)A.we(this.W,0);}else{A._GetAutoObject(C.
Device).SP(-1);this.W.EX();A.we(this.W,0);}return A2t;},AhO:function(Ah9){var B;
return(((B=(this.Au.BcY()|0))<0)?B+0x100000000:B)-this.AmJ(Ah9);},AsH:function(){
var B;A.pe([B=this.KF,B.An0],this);},BBO:function(G){A._GetAutoObject(C.Device).
A7(16,false,AHn,0,null);A._GetAutoObject(C.Device).A7(5,true,A.jV,0,null);},Bns:
function(G){var At=(C.PopupContext.isPrototypeOf(G)?G:null);if(!!At&&(At.PopupState===
5))this.AsH();},Bnd:function(E){if(this.AGO===E)return;this.AGO=E;A._GetAutoObject(
C.Device).A7(16,true,this.AGO.toFixed(),0,[this,this.Bns]);},L9:function(BwL,Bxq
){var D8;var Bf3=A._NewObject(A.Core.An6,0);var GG=A._NewObject(A.Core.Bs,0);var
K6=A._NewObject(A.Core.Bs,0);GG.Initialize(BwL);K6.Initialize(Bxq);D8=K6.BhI(GG);
Bf3.Initialize2(0,D8.ADq,D8.AEc,D8.AGs);if(GG.J(Bf3).GK===GG.GK)return D8.Kj;else
return D8.Kj+1;},BBQ:function(G){A._GetAutoObject(C.Device).UpdateMeasureState(3
);},AK1:function(G){var BgT=A._GetAutoObject(C.Helper).ACS(A._GetAutoObject(C.Helper
).W.AnimalType);var BgP=A._GetAutoObject(C.Helper).A6r(A._GetAutoObject(C.Helper
).W.AnimalType);var Ago=A.abz(BgT-100,BgP+100);this.BcC(Ago);},AmJ:function(Ah9){
return Ah9*86400;},Ak9:function(J2){var B;if(!!J2&&(J2<(((B=Math.trunc(Math.pow(
10,A._GetAutoObject(C.Device).AF)))<0)?B+0x10000000000000000:B)))return-1;return A.
_GetAutoObject(C.Helper).Sj(J2,A._GetAutoObject(C.Device).AF&0xFF,A._GetAutoObject(
C.Device).A1&0xFF)|0;},AGe:function(D3){if(!D3)return false;return((!!D3.Faeces||
!!D3.Feed)||!!D3.Appearance)||!!D3.Respiratory;},AhU:function(A0I,BbS,AI6,En){var
B;var ApV;if((A0I<650000)&&(BbS<this.Dq())){var Bcd=this.AgD.Avm(En);var Bcc=0;if(
Bcd>=0)Bcc=this.Afu.Get(Bcd);ApV=A0I+(this.L9(BbS,this.Dq())*Bcc);if(AI6>0){var A1D=
this.ApU(AI6);ApV=(Math.trunc(((((B=ApV)<0)?B+0x10000000000000000:B)+Math.trunc(
A1D/2))/A1D)*A1D)|0;}if(ApV>650000)ApV=650000;}else ApV=A0I;return ApV;},AC5:function(
D3){var Aqg=A._GetAutoObject(C.Converter).Ad0(D3.Faeces);if(Aqg<A._GetAutoObject(
C.Converter).Ad0(D3.Feed))Aqg=A._GetAutoObject(C.Converter).Ad0(D3.Feed);if(Aqg<
A._GetAutoObject(C.Converter).Ad0(D3.Appearance))Aqg=A._GetAutoObject(C.Converter
).Ad0(D3.Appearance);if(Aqg<A._GetAutoObject(C.Converter).Ad0(D3.Respiratory))Aqg=
A._GetAutoObject(C.Converter).Ad0(D3.Respiratory);return A._GetAutoObject(C.Converter
).A$s(Aqg);},Axs:function(D3,Nn){if(!!D3){D3.OnSetFaeces(Nn);D3.OnSetFeed(Nn);D3.
OnSetAppearance(Nn);D3.OnSetRespiratory(Nn);}},Bit:function(AH,AI$,Ac7,Xp,AfH){if(
!AH)throw new Error(As3);var Be=A._NewObject(C.Filter,0);var ApH=AH.Filter;var Oc=
A._NewObject(C.Int32FilterCriterion,0);Oc.Operator=0;Oc.EJ=1;Oc.A4=Ac7;Be.CW(Oc);
if(Xp>0){var Oq=A._NewObject(C.UInt32FilterCriterion,0);Oq.Operator=2;Oq.EJ=6;Oq.
A4=Xp;Be.CW(Oq);}if(AfH>0){var Og=A._NewObject(C.UInt32FilterCriterion,0);Og.Operator=
3;Og.EJ=6;Og.A4=AfH;Be.CW(Og);}AH.Bk(Be);var L8=A._NewObject(C.Int32ArrayWrapper
,0);L8.ZC(6);var O;for(O=0;O<L8.MD;O=O+1)L8.Set(O,0);var U_;for(O=0;O<AH.B$();O=
O+1){U_=AH.I4(O,AI$);L8.Set(U_,L8.Get(U_)+1);}AH.Bk(ApH);return L8;},ZU:function(
Ah9){var B;var GG=A._NewObject(A.Core.Bs,0);var Bf2=A._NewObject(A.Core.An6,0);GG.
Initialize(A._GetAutoObject(C.Converter).AhQ());Bf2.Initialize2(Ah9,0,0,0);GG=GG.
BoM(Bf2);return((B=(GG.JO()|0))<0)?B+0x100000000:B;},A6s:function(AH,Ac7,AfH,Xp){
if(!AH)throw new Error(As3);var Be=A._NewObject(C.Filter,0);var ApH=AH.Filter;var
Oc=A._NewObject(C.Int32FilterCriterion,0);Oc.Operator=0;Oc.EJ=1;Oc.A4=Ac7;Be.CW(
Oc);if(Xp>0){var Oq=A._NewObject(C.UInt32FilterCriterion,0);Oq.Operator=2;Oq.EJ=
6;Oq.A4=Xp;Be.CW(Oq);}if(AfH>0){var Og=A._NewObject(C.UInt32FilterCriterion,0);Og.
Operator=3;Og.EJ=6;Og.A4=AfH;Be.CW(Og);}AH.Bk(Be);var L8=A._NewObject(C.Int32ArrayWrapper
,0);L8.ZC(6);var O;for(O=0;O<L8.MD;O=O+1)L8.Set(O,0);var Ao8=A._NewObject(C.Rating
,0);var A1u;for(O=0;O<AH.B$();O=O+1){Ao8.EU(O,AH);if(A._GetAutoObject(C.Helper).
AGe(Ao8)){A1u=A._GetAutoObject(C.Helper).AC5(Ao8);L8.Set(A1u,L8.Get(A1u)+1);}}AH.
Bk(ApH);return L8;},A13:function(AH,Ac7,Byx){if(!AH)throw new Error(As3);var Be=
A._NewObject(C.Filter,0);var ApH=AH.Filter;var Oc=A._NewObject(C.Int32FilterCriterion
,0);Oc.Operator=0;Oc.EJ=1;Oc.A4=Ac7;Be.CW(Oc);var Xp=A._GetAutoObject(C.Converter
).AhQ()+A._GetAutoObject(C.Helper).AmJ(Byx);var AfH=Xp+A._GetAutoObject(C.Helper
).AmJ(1);var Oq=A._NewObject(C.UInt32FilterCriterion,0);Oq.Operator=2;Oq.EJ=6;Oq.
A4=Xp;Be.CW(Oq);var Og=A._NewObject(C.UInt32FilterCriterion,0);Og.Operator=3;Og.
EJ=6;Og.A4=AfH;Be.CW(Og);AH.Bk(Be);var Ao8=A._NewObject(C.Rating,0);var U_;var LQ=
0;var O;for(O=0;O<AH.B$();O=O+1){Ao8.EU(O,AH);if(A._GetAutoObject(C.Helper).AGe(
Ao8)){U_=A._GetAutoObject(C.Helper).AC5(Ao8);if(A._GetAutoObject(C.Converter).Ad0(
U_)>A._GetAutoObject(C.Converter).Ad0(LQ))LQ=U_;}}AH.Bk(ApH);return LQ;},Am7:function(
){if((A._GetAutoObject(C.Device).WeightRecordingScope===2)||(A._GetAutoObject(C.
Device).WeightRecordingScope===1))return true;else return false;},A6_:function(){
if((A._GetAutoObject(C.Device).WeightRecordingScope===2)||!A._GetAutoObject(C.Device
).WeightRecordingScope)return true;else return false;},Biu:function(AH,AI$,Ac7,Xp
,AfH){if(!AH)throw new Error(As3);var Be=A._NewObject(C.Filter,0);var ApH=AH.Filter;
var Oc=A._NewObject(C.Int32FilterCriterion,0);Oc.Operator=0;Oc.EJ=1;Oc.A4=Ac7;Be.
CW(Oc);if(Xp>0){var Oq=A._NewObject(C.UInt32FilterCriterion,0);Oq.Operator=2;Oq.
EJ=6;Oq.A4=Xp;Be.CW(Oq);}if(AfH>0){var Og=A._NewObject(C.UInt32FilterCriterion,0
);Og.Operator=3;Og.EJ=6;Og.A4=AfH;Be.CW(Og);}AH.Bk(Be);var L8=A._NewObject(C.Int32ArrayWrapper
,0);L8.ZC(6);var O;for(O=0;O<L8.MD;O=O+1)L8.Set(O,0);if(AH.B$()>0){var U_=AH.I4(
0,AI$);var Ap0=AH.Hv(O,6);var Ac=A._NewObject(A.Core.Bs,0);Ac.Initialize(Ap0);var
Aqf=U_;var AJ3=A._NewObject(A.Core.Bs,0);AJ3.Initialize(Ac.JO());for(O=1;O<AH.B$(
);O=O+1){U_=AH.I4(O,AI$);Ap0=AH.Hv(O,6);Ac.Initialize(Ap0);if((Ac.Ab4()!==AJ3.Ab4(
))||(Ac.Year!==AJ3.Year)){L8.Set(Aqf,L8.Get(Aqf)+1);AJ3.Initialize(Ac.JO());Aqf=
U_;}else if(!!U_&&(U_<Aqf))Aqf=U_;}L8.Set(Aqf,L8.Get(Aqf)+1);}AH.Bk(ApH);return L8;
},Aqs:function(L3){var B;var GG=A._NewObject(A.Core.Bs,0);GG.Initialize(L3);GG.AnC(
0);GG.AnF(0);GG.AnI(0);return((B=(GG.JO()|0))<0)?B+0x100000000:B;},AN7:function(
L3){var B;L3=L3+86400;var GG=A._NewObject(A.Core.Bs,0);GG.Initialize(L3);GG.AnC(
0);GG.AnF(0);GG.AnI(0);return((B=(GG.JO()|0))<0)?B+0x100000000:B;},Biw:function(
BBM,ByI,Amh,AlH){var Bcx=A._GetAutoObject(C.Helper).L9(BBM,ByI);if(Bcx>0)return((
AlH-Amh)/Bcx)|0;return 0;},Bpo:function(BwM,Bxr){var GG=A._NewObject(A.Core.Bs,0
);var K6=A._NewObject(A.Core.Bs,0);GG.Initialize(BwM);K6.Initialize(Bxr);return(
GG.Year===K6.Year)&&(GG.Ab4()===K6.Ab4());},A6y:function(){var Be=A._GetAutoObject(
C.Helper).Mq();var BdA=A._NewObject(C.UInt32FilterCriterion,0);var BxA=A._GetAutoObject(
C.Helper).ZU(A._GetAutoObject(C.Device).AqV)-1;BdA.Initialize(28,2,BxA,true);Be.
CW(BdA);var U6=A._NewObject(C.AnimalTypeFilterCriterion,0);U6.Initialize(14,0,1,
true);Be.CW(U6);if(A._GetAutoObject(C.Device).AqW){var AAc=A._NewObject(C.UInt32FilterCriterion
,0);var A2o=A._GetAutoObject(C.Helper).Dq()-21600;AAc.Initialize(30,3,A2o,true);
Be.CW(AAc);}return Be;},Bn4:function(){var Jm=A._GetAutoObject(C.Device).An.Ox();
if(Jm<=0)A.ab5("%s",Xf);else{A._GetAutoObject(C.Device).An.EX();A._GetAutoObject(
C.Device).An.Oz(Jm);}Jm=A._GetAutoObject(C.Device).Agv.Ox();if(Jm<=0)A.ab5("%s",
Xf);else{A._GetAutoObject(C.Device).Agv.EX();A._GetAutoObject(C.Device).Agv.Oz(Jm
);}Jm=A._GetAutoObject(C.Device).Bt.Ox();if(Jm<=0)A.ab5("%s",Xf);else{A._GetAutoObject(
C.Device).Bt.EX();A._GetAutoObject(C.Device).Bt.Oz(Jm);}Jm=A._GetAutoObject(C.Device
).Pm.Ox();if(Jm<=0)A.ab5("%s",Xf);else{A._GetAutoObject(C.Device).Pm.EX();A._GetAutoObject(
C.Device).Pm.Oz(Jm);}},Bjy:function(Ac7){var Bf=A._GetAutoObject(C.Device).An.LT(
0,Ac7);return this.G6(Bf);},AQ5:function(Jh){var AiB=A._GetAutoObject(C.Device).
An.Aek(22,Jh);return AiB;},ACX:function(){var Be=A._GetAutoObject(C.Helper).Mq();
var Ajf=A._NewObject(C.UInt64FilterCriterion,0);Ajf.Initialize(22,0,0,true);Be.CW(
Ajf);return Be;},AOF:function(Ao1,ByF,Qa){var Aas=-1;switch(Ao1){case 2:Aas=30;break;
case 3:Aas=31;break;case 10:Aas=19;break;default:A.ab5("%s%e",UY,Ao1);}if(Aas<0)
return null;var Adi=A._NewObject(C.UInt32FilterCriterion,0);Adi.Initialize(Aas,3
,A._GetAutoObject(C.Helper).Dq()-ByF,Qa);return Adi;},Bn2:function(aFilter){var AI=
aFilter.DL(30,3);if(!!AI)aFilter.Ni(AI);AI=aFilter.DL(31,3);if(!!AI)aFilter.Ni(AI
);AI=aFilter.DL(19,3);if(!!AI)aFilter.Ni(AI);},A1l:function(AfR,AyQ,AH){if(AH.Lg(
))return 5;if(AfR.VisualId<=0)switch(AyQ){case 0:if(!AfR.NaisId)return 1;break;case
1:if(!AfR.TransponderId)return 1;break;case 3:case 2:case 5:case 4:return 1;default:
throw new Error(AHo+AyQ.toFixed());}if((!AfR.NaisId&&!AfR.TransponderId)&&A._GetAutoObject(
C.Device).An.AjN(1,AfR.VisualId))return 2;if(!!AfR.NaisId&&A._GetAutoObject(C.Helper
).AQ3(AfR.NaisId))return 3;if(!!AfR.TransponderId&&A._GetAutoObject(C.Helper).AQ5(
AfR.TransponderId))return 4;return 0;},Aql:function(Em){Em.EB(A._GetAutoObject(C.
Device).AnimalType);Em.NY(A._GetAutoObject(C.Device).Breed);Em.Q3(A._GetAutoObject(
C.Helper).Dq()-A._GetAutoObject(C.Helper).AmJ(A._GetAutoObject(C.Device).AdR));Em.
JQ(A._GetAutoObject(C.Device).Gender);Em.Nf(A._GetAutoObject(C.Device).WhereAbouts
);},AMf:function(Rr,Em){var Gv=0;switch(Rr){case 0:Gv=A._GetAutoObject(C.Helper).
Ak9(Em.NaisId);break;case 1:Gv=A._GetAutoObject(C.Helper).Ak9(Em.TransponderId);
break;case 3:Gv=A._GetAutoObject(C.Device).Aq8;break;case 2:Gv=A._GetAutoObject(
C.Device).Aq9;break;case 4:case 5:Gv=A._GetAutoObject(C.Device).AjY;break;default:
throw new Error(AHp+Rr.toFixed());}return Gv;},A$z:function(Alo,L4,Bbv,Bwx,Bw6){
var B;var Qn=null;var XB=null;switch(Alo){case 0:{Qn=[B=A._GetAutoObject(C.Device
),B.ASr,B.AZ5];XB=[B=A._GetAutoObject(C.Device),B.Awh,B.AyJ];}break;case 1:switch(
L4){case 1:{Qn=[B=A._GetAutoObject(C.Device),B.A8F,B.BaZ];XB=[B=A._GetAutoObject(
C.Device),B.Awf,B.AyH];}break;case 0:{Qn=[B=A._GetAutoObject(C.Device),B.A8G,B.Ba0
];XB=[B=A._GetAutoObject(C.Device),B.Awg,B.AyI];}break;case 2:{Qn=[B=A._GetAutoObject(
C.Device),B.ASr,B.AZ5];XB=[B=A._GetAutoObject(C.Device),B.Awh,B.AyJ];}break;default:
throw new Error(Aya+L4.toFixed());}break;default:throw new Error(AHq+Alo.toFixed(
));}if(!!Qn&&!!XB){Qn[2].call(Qn[0],Bbv);if(Bbv>0){if((XB[1].call(XB[0])>0)&&(Bwx<
Bw6))Qn[2].call(Qn[0],Qn[1].call(Qn[0])+XB[1].call(XB[0]));else if(XB[1].call(XB[
0])<0)Qn[2].call(Qn[0],Qn[1].call(Qn[0])+XB[1].call(XB[0]));}return Qn[1].call(Qn[
0]);}return 0;},AVj:function(Em,Alo,BwF){if(!Em||(BwF===true))return;switch(Alo){
case 0:Em.Nd(A._GetAutoObject(C.Device).Av1);break;case 1:switch(Em.Gender){case
0:Em.Nd(A._GetAutoObject(C.Device).AEf);break;case 1:Em.Nd(A._GetAutoObject(C.Device
).AEe);break;case 2:Em.Nd(A._GetAutoObject(C.Device).Av1);break;default:throw new
Error(Aya+Em.Gender.toFixed());}break;default:throw new Error(AHq+Alo.toFixed());
}},Bja:function(Rr,Em){var result=false;switch(Rr){case 0:result=!!Em.NaisId;break;
case 1:result=!!Em.TransponderId;break;case 3:case 2:case 4:case 5:result=false;
break;default:throw new Error(AHp+Rr.toFixed());}return result;},AKf:function(Em
,Bbo,AyQ,Aty,AfK){switch(Bbo){case 2:if(Aty<=0)A._GetAutoObject(C.Device).A7(21,
true,Em.VisualId.toFixed(),0,AfK);else A._GetAutoObject(C.Device).A7(48,true,(Em.
VisualId.toFixed()+Ayb)+Aty.toFixed(),0,AfK);break;case 3:if(Aty<=0)A._GetAutoObject(
C.Device).A7(21,true,A._GetAutoObject(C.Converter).Rh(Em.NaisId),0,AfK);else A._GetAutoObject(
C.Device).A7(48,true,(A._GetAutoObject(C.Converter).Rh(Em.NaisId)+Ayb)+Aty.toFixed(
),0,AfK);break;case 4:if(Aty<=0)A._GetAutoObject(C.Device).A7(25,true,A._GetAutoObject(
C.Converter).Rh(Em.TransponderId),0,AfK);else A._GetAutoObject(C.Device).A7(47,true
,(A._GetAutoObject(C.Converter).Rh(Em.TransponderId)+Ayb)+Aty.toFixed(),0,AfK);break;
case 1:switch(AyQ){case 1:A._GetAutoObject(C.Device).A7(42,true,A.jV,0,AfK);break;
case 0:A._GetAutoObject(C.Device).A7(43,true,A.jV,0,AfK);break;case 3:case 2:case
5:case 4:A._GetAutoObject(C.Device).A7(22,true,A.jV,0,AfK);break;default:throw new
Error(AHo+AyQ.toFixed());}break;case 5:A._GetAutoObject(C.Device).A7(41,true,A._GetAutoObject(
C.Device).An.HJ().toFixed(),0,AfK);break;case 0:break;default:throw new Error(AVW+
Bbo.toFixed());}},Bc2:function(BbC,L4){var B;var AAg=null;switch(BbC){case 0:AAg=[
B=A._GetAutoObject(C.Device),B.Awh,B.AyJ];break;case 1:switch(L4){case 1:AAg=[B=
A._GetAutoObject(C.Device),B.Awf,B.AyH];break;case 0:AAg=[B=A._GetAutoObject(C.Device
),B.Awg,B.AyI];break;case 2:AAg=[B=A._GetAutoObject(C.Device),B.Awh,B.AyJ];break;
default:throw new Error(Aya+L4.toFixed());}break;default:throw new Error(AVX+BbC.
toFixed());}return AAg;},A6K:function(Qc,Bxh){var AaS=A._NewObject(A.Core.Bs,0);
AaS.Initialize(Qc);var ABx=AaS.Year;var Bf=A._GetAutoObject(C.Device).Pm.LT(0,ABx
);var U9=A._NewObject(C.CalfDeregistrations,0);if(Bf<0){if(A._GetAutoObject(C.Device
).Pm.Lg())A._GetAutoObject(C.Device).A7(51,true,A._GetAutoObject(C.Device).Pm.HJ(
).toFixed(),0,null);else{U9.Gr();U9.AkK(ABx);}}else U9.EU(Bf,A._GetAutoObject(C.
Device).Pm);U9.Awy(U9.Deregistrations+1);if(Bxh)U9.Awx(U9.Deaths+1);U9.Cg(A._GetAutoObject(
C.Device).Pm);},AMd:function(LQ,AlR,AlI){var AKB=0;if((AlR&&(AlI===1))||(LQ===1)
)AKB=1;else if((AlR&&(AlI===2))||(LQ===2))AKB=2;else if(!!LQ&&(LQ!==5))AKB=LQ;return AKB;
},BcC:function(Bxz){var B;if(A._GetAutoObject(C.Device).MeasureState===1){this.SS.
Cx=A._GetAutoObject(C.Device).AcJ;this.SS.B2=Bxz;this.SS.AnY(this);}},ACU:function(
){var Be=this.AOE();var Bdp=A._NewObject(C.BoolFilterCriterion,0);Bdp.Initialize(
38,0,true,true);Be.CW(Bdp);return Be;},A6p:function(ED){var Be=A._GetAutoObject(
C.Helper).Mq();if(A._GetAutoObject(C.Device).Aqh){var A16=A._GetAutoObject(C.Helper
).AOF(ED,21600,true);Be.CW(A16);}return Be;},A6E:function(){var Be=A._GetAutoObject(
C.Helper).Mq();var BdR=A._NewObject(C.UInt64FilterCriterion,0);BdR.Initialize(26
,0,0,true);Be.CW(BdR);return Be;},A6H:function(){var B;var Be=A._GetAutoObject(C.
Helper).Mq();var AAm=(C.WhereAboutsFilterCriterion.isPrototypeOf(B=Be.DL(34,3))?
B:null);if(!!AAm)Be.Ni(AAm);var Bfc=A._NewObject(C.BoolFilterCriterion,0);Bfc.Initialize(
37,0,true,true);Be.CW(Bfc);return Be;},Sj:function(A8,Atr,A0J){var B;A8=Math.trunc(
A8/this.ApU(Atr));A8%=this.ApU(A0J);return A8;},ApU:function(BbD){switch(BbD){case
0:return 1;case 1:return 10;case 2:return 100;case 3:return 1000;case 4:return 10000;
case 5:return 100000;case 6:return 1000000;case 7:return 10000000;case 8:return 100000000;
case 9:return 1000000000;case 10:return 10000000000;case 11:return 100000000000;
case 12:return 1000000000000;case 13:return 10000000000000;case 14:return 100000000000000;
case 15:return 1000000000000000;default:throw new Error(AVY+BbD.toFixed());}},Mq:
function(){var Be=A._NewObject(C.Filter,0);var Bfz=A._NewObject(C.BoolFilterCriterion
,0);Bfz.Initialize(10,0,true,true);Be.CW(Bfz);var AAm=A._NewObject(C.WhereAboutsFilterCriterion
,0);AAm.Initialize(34,3,6,true);Be.CW(AAm);return Be;},Arh:function(aFilter){return!
this.ACY(aFilter);},ACY:function(aFilter){var Jj=0;var Av=aFilter.AOG();while(!!
Av){if(Av.YM===false)Jj++;Av=aFilter.AOL(Av);}return Jj;},AOE:function(){var Be=
this.Mq();var U6=A._NewObject(C.AnimalTypeFilterCriterion,0);U6.Initialize(14,0,
1,true);Be.CW(U6);return Be;},AC2:function(){var B;var A36;var J4=this.BiN();A36=(((
B=A._GetAutoObject(C.Converter).AqC(J4))<0)?B+0x10000000000000000:B)*this.ApU(12
);if((J4===10)&&(A._GetAutoObject(C.Device).Uw>0)){var By3=A._GetAutoObject(C.Helper
).Sj(A._GetAutoObject(C.Device).Uw,10,2)*this.ApU(8);A36+=By3;}return A36;},BiN:
function(){var J4=0;if(A._GetAutoObject(C.Device).Uw>0)J4=A._GetAutoObject(C.Converter
).Z3(A._GetAutoObject(C.Device).Uw);if(!J4)J4=A._GetAutoObject(C.Converter).A7b(
A._GetAutoObject(C.Device).Language);return J4;},AQ3:function(Xo){var AiB=A._GetAutoObject(
C.Device).An.Aek(26,Xo);return AiB;},Aj_:function(AfL){switch(AfL){case 0:case 1:
case 2:case 3:case 4:case 5:return false;case 6:case 7:case 8:case 9:case 10:return true;
default:throw new Error(AVZ+AfL.toFixed());}},BgO:function(Rr,Em){var Gv=0;switch(
Rr){case 1:Gv=A._GetAutoObject(C.Helper).Ak9(Em.TransponderId);break;case 0:if(!
A._GetAutoObject(C.Device).EartagNrAssignmentMode)Gv=A._GetAutoObject(C.Device).
AjY;else switch(Em.Gender){case 0:Gv=A._GetAutoObject(C.Device).Aq9;break;case 1:
Gv=A._GetAutoObject(C.Device).Aq8;break;case 2:Gv=A._GetAutoObject(C.Device).AjY;
break;default:throw new Error(AHr+Em.Gender.toFixed());}break;default:throw new Error(
AV0+Rr.toFixed());}return Gv;},Bij:function(){var B;var AzU=(((((((A.aaR(A.acf.AhI
)+A.aaR(A.acf.Colon))+O4)+A._GetAutoObject(C.Device).AhI)+Ayc)+A.aaR(A.acf.BnK))+
A.aaR(A.acf.Colon))+O4)+A._GetAutoObject(A.acj.KK).Bih(((B=A._GetAutoObject(C.Device
).QX.Timestamp)<0)?B+0x100000000:B);return AzU;},Bik:function(){var B;var AzU=((((((((((((((((((((((((((((
AV1+A._GetAutoObject(C.Device).R1.AD8.toFixed())+Lv)+A._GetAutoObject(C.Device).
R1.AEb.toFixed())+Lv)+A._GetAutoObject(C.Device).R1.AGn.toFixed())+O3)+A._GetAutoObject(
C.Device).R1.ACk)+O3)+A._GetAutoObject(A.acj.KK).AjQ(((B=A._GetAutoObject(C.Device
).R1.Timestamp)<0)?B+0x100000000:B))+O4)+AV2)+A._GetAutoObject(C.Device).SA.AD8.
toFixed())+Lv)+A._GetAutoObject(C.Device).SA.AEb.toFixed())+Lv)+A._GetAutoObject(
C.Device).SA.AGn.toFixed())+O3)+A._GetAutoObject(C.Device).SA.ACk)+O3)+A._GetAutoObject(
A.acj.KK).AjQ(((B=A._GetAutoObject(C.Device).SA.Timestamp)<0)?B+0x100000000:B))+
O4)+AV3)+A._GetAutoObject(C.Helper).BiQ())+O3)+A._GetAutoObject(C.Device).GetCommitHash(
))+O3)+A._GetAutoObject(C.Device).GetCommitCount().toFixed())+O3)+A._GetAutoObject(
A.acj.KK).AjQ(A._GetAutoObject(C.Device).GetCommitEpoch());return AzU;},Bii:function(
){var B;var AzU=(((((((((((((((((((((AV4+A._GetAutoObject(C.Device).QX.ARr.toFixed(
))+Lv)+A._GetAutoObject(C.Device).QX.ARs.toFixed())+Lv)+A._GetAutoObject(C.Device
).QX.ARq.toFixed())+O4)+A.aaR(A.acf.A6i))+A.aaR(A.acf.Colon))+N$)+A._GetAutoObject(
A.acj.KK).AjQ(((B=A._GetAutoObject(C.Device).QX.Timestamp)<0)?B+0x100000000:B))+
Ayc)+AV5)+A._GetAutoObject(C.Device).SY.AVa.toFixed())+Lv)+A._GetAutoObject(C.Device
).SY.AVb.toFixed())+Lv)+A._GetAutoObject(C.Device).SY.AU$.toFixed())+O4)+A.aaR(A.
acf.A6i))+A.aaR(A.acf.Colon))+N$)+A._GetAutoObject(A.acj.KK).AjQ(((B=A._GetAutoObject(
C.Device).SY.Timestamp)<0)?B+0x100000000:B);return AzU;},A6F:function(A0J){var B;
var O;var AAT=A.jV;for(O=1;O<=A0J;O=O+1)if(!!A.abz(0,2))AAT=AAT+String.fromCharCode(
A.abz(97,104)&0xFFFF);else AAT=AAT+String.fromCharCode(A.abz(48,57)&0xFFFF);return AAT;
},Abt:function(En){var Ay_=0;if(En===1)En=0;var Bch=this.AgD.Avm(En);if(Bch>=0)Ay_=
this.Afx.Get(Bch);return Ay_;},AC4:function(En){var FW=0;var ABv=this.AgD.Avm(En
);if(ABv>=0)FW=this.Afw.Get(ABv);return FW;},AC3:function(En){var FW=0;var ABv=this.
AgD.Avm(En);if(ABv>=0)FW=this.Afv.Get(ABv);return FW;},A6v:function(){var Be=this.
Mq();var U6=A._NewObject(C.AnimalTypeFilterCriterion,0);U6.Initialize(14,0,A._GetAutoObject(
C.Device).ACD,true);Be.CW(U6);return Be;},AQ6:function(J2){var BO=Math.trunc(J2/
1000000000000)|0;if(!BO)return 0;else if(BO>=900)return 1;else if(!A._GetAutoObject(
C.Converter).ANu(BO))return 2;else return 3;},A6J:function(BzI){var Be=A._GetAutoObject(
C.Helper).ACX();var AfQ=A._GetAutoObject(C.Helper).A6q(3,BzI);AfQ.YM=true;Be.CW(
AfQ);return Be;},A6q:function(Eb,Bbn){var Av=A._NewObject(C.UInt32FilterCriterion
,0);Av.EJ=4;switch(Eb){case 2:{Av.Operator=3;Av.A4=A._GetAutoObject(C.Helper).ZU(
Bbn);}break;case 3:{Av.Operator=2;Av.A4=A._GetAutoObject(C.Helper).ZU(Bbn-1);}break;
default:A.ab5("%s%e",AV6,Eb);}return Av;},BiQ:function(){return(((A._GetAutoObject(
C.Device).GetVersionMajor().toFixed()+Lv)+A._GetAutoObject(C.Device).GetVersionMinor(
).toFixed())+Lv)+A._GetAutoObject(C.Device).GetVersionRev().toFixed();},A4O:function(
Rr,Em){var Gv=0;switch(Rr){case 0:Gv=Em.VisualId;break;case 2:Gv=A._GetAutoObject(
C.Helper).Ak9(Em.TransponderId);break;case 3:if(Em.NaisId>0)Gv=A._GetAutoObject(
C.Helper).Ak9(Em.NaisId);else Gv=Em.VisualId;break;case 1:if(!A._GetAutoObject(C.
Device).EartagNrAssignmentMode)Gv=A._GetAutoObject(C.Device).AjY;else switch(Em.
Gender){case 0:Gv=A._GetAutoObject(C.Device).Aq9;break;case 1:Gv=A._GetAutoObject(
C.Device).Aq8;break;case 2:Gv=A._GetAutoObject(C.Device).AjY;break;default:throw new
Error(AHr+Em.Gender.toFixed());}break;default:throw new Error(AHs+Rr.toFixed());
}return Gv;},A$A:function(){var B;var IV=null;var Th=0;if(!A._GetAutoObject(C.Device
).EartagNrAssignmentMode){IV=[B=A._GetAutoObject(C.Device),B.Anu,B.AoE];Th=A._GetAutoObject(
C.Device).Au0;}else switch(A._GetAutoObject(C.Helper).W.Gender){case 1:{IV=[B=A.
_GetAutoObject(C.Device),B.Awb,B.AyF];Th=A._GetAutoObject(C.Device).ACv;}break;case
0:{IV=[B=A._GetAutoObject(C.Device),B.Awc,B.AyG];Th=A._GetAutoObject(C.Device).ACw;
}break;case 2:{IV=[B=A._GetAutoObject(C.Device),B.Anu,B.AoE];Th=A._GetAutoObject(
C.Device).Au0;}break;default:;}if(!!IV)switch(Th){case 1:IV[2].call(IV[0],A._GetAutoObject(
C.Helper).W.VisualId-1);break;case 0:IV[2].call(IV[0],A._GetAutoObject(C.Helper).
W.VisualId+1);break;default:;}},A6$:function(Xo,Em){return(Em.NaisId!==Xo)&&this.
AQ3(Xo);},Bjj:function(Jh,Em){return(Em.TransponderId!==Jh)&&this.AQ5(Jh);},AOC:
function(){var Be=A._GetAutoObject(C.Helper).A6H();var AAe=A._NewObject(C.UInt64FilterCriterion
,0);AAe.Initialize(35,5,0,true);Be.CW(AAe);return Be;},Avn:function(){var Be=A._GetAutoObject(
C.Helper).A6H();var AAe=A._NewObject(C.UInt64FilterCriterion,0);AAe.Initialize(35
,0,0,true);Be.CW(AAe);return Be;},JW:function(A0A,Ah8){A0A.Aj(Ah8);A0A.Ar(Ah8);A0A.
Z(Ah8);},ANo:function(Ah_){var B;var Aa;var A2I=false;var Xv=Ah_.TO(null,0x1);while(
!!Xv&&(((B=Xv)?B.__proto__:null)!==A.Core.Y)){Aa=(A.kR.Cp.isPrototypeOf(Xv)?Xv:null
);if(!!Aa){Aa.Bh(A2I);A2I=!A2I;}Xv=Ah_.TO(Xv,0x1);}},Bn3:function(Jh){var Xr=A._GetAutoObject(
C.Device).An.Filter;A._GetAutoObject(C.Device).An.Bk(null);var A3O=A._GetAutoObject(
C.Device).An.AgW(22,Jh);var Cj=A._NewObject(C.Animal,0);Cj.EU(A3O,A._GetAutoObject(
C.Device).An);Cj.PQ(0);Cj.Cg(A._GetAutoObject(C.Device).An);A._GetAutoObject(C.Device
).An.Bk(Xr);},A6t:function(Atq){var Be=null;switch(Atq){case 0:Be=this.BiB();break;
case 1:Be=this.ACX();break;default:throw new Error(AHt+Atq.toFixed());}return Be;
},BiB:function(){var Be=A._GetAutoObject(C.Helper).Mq();var AfQ=this.A6q(2,100);
Be.CW(AfQ);return Be;},BxY:function(Atq){var Xr=A._GetAutoObject(C.Device).An.Filter;
A._GetAutoObject(C.Device).An.Bk(this.A6t(Atq));var CB=A._GetAutoObject(C.Device
).An.B$();var O;for(O=CB-1;O>=0;O--){A._GetAutoObject(C.Helper).G6(O);A._GetAutoObject(
C.Helper).W.Ae3(false);A._GetAutoObject(C.Helper).W.Cg(A._GetAutoObject(C.Device
).An);}A._GetAutoObject(C.Device).An.Bk(Xr);},BiC:function(Atq){var Xr=A._GetAutoObject(
C.Device).An.Filter;A._GetAutoObject(C.Device).An.Bk(this.A6t(Atq));var Gi=A._GetAutoObject(
C.Device).An.B$();A._GetAutoObject(C.Device).An.Bk(Xr);return Gi;},A6B:function(
AH){var Xr=AH.Filter;AH.Bk(this.Avn());var O;var A2y=4294967295;for(O=0;O<AH.B$(
);O++){var O9=AH.Hv(O,4);if(O9<A2y)A2y=O9;}AH.Bk(Xr);return A._GetAutoObject(C.Helper
).L9(A2y,A._GetAutoObject(C.Helper).Dq());},ArB:function(){return this.Uz;},A8P:
function(){return this.AhF;},BkT:function(){return this.AUj;},BkU:function(){return this.
AUk;},BkX:function(){return this.AGO;},_Init:function(aArg){C.AmO._Init.call(this
,aArg);C.Animal._Init.call(this.W={I:this},0);A.Core.Bs._Init.call(this.Au={I:this
},0);A.acl.Gm._Init.call(this.KF={I:this},0);A.acl.Gm._Init.call(this.SS={I:this
},0);C.AMz._Init.call(this.AdZ={I:this},0);C.AU1._Init.call(this.UG={I:this},0);
C.AU0._Init.call(this.UF={I:this},0);C.TG._Init.call(this.Aem={I:this},0);C.AVE.
_Init.call(this.Afw={I:this},0);C.AVD._Init.call(this.Afv={I:this},0);C.AVC._Init.
call(this.Afu={I:this},0);C.AVG._Init.call(this.Afx={I:this},0);C.AMA._Init.call(
this.AgD={I:this},0);this.__proto__=C.HelperClass;var B;this.KF.HO(1);this.KF.Fp(
3000);this.KF.B2=100;this.SS.AwD(10);this.SS.WG(5);this.SS.HO(1);this.SS.Fp(4000
);this.Aem.B2=false;this.Aem.Cx=true;this.Aem.HO(1);this.Aem.Fp(100);this.KF.SB=[
this,this.BBO];this.KF.Q=[this,this.BkX,this.Bnd];this.SS.SB=[this,this.BBQ];this.
SS.Q=[B=A._GetAutoObject(C.Device),B.AEC,B.AIQ];this.Aem.Q=[B=A._GetAutoObject(C.
Device),B.AED,B.AIR];this.Init(aArg);var Lw=this._variants();if(Lw){this.K={};Lw.
_Init.call(this,aArg);}},_Done:function(){if(this.K)this.K._Done.call(this);this.
__proto__=C.AmO;this.W._Done();this.Au._Done();this.KF._Done();this.SS._Done();this.
AdZ._Done();this.UG._Done();this.UF._Done();this.Aem._Done();this.Afw._Done();this.
Afv._Done();this.Afu._Done();this.Afx._Done();this.AgD._Done();C.AmO._Done.call(
this);},_ReInit:function(){C.AmO._ReInit.call(this);this.W._ReInit();this.Au._ReInit(
);this.KF._ReInit();this.SS._ReInit();this.AdZ._ReInit();this.UG._ReInit();this.
UF._ReInit();this.Aem._ReInit();this.Afw._ReInit();this.Afv._ReInit();this.Afu._ReInit(
);this.Afx._ReInit();this.AgD._ReInit();if(this.K)this.K._ReInit.call(this);},_Mark:
function(D){var B;C.AmO._Mark.call(this,D);if((B=this.Uz)&&(B._cycle!=D))B._Mark(
B._cycle=D);if((B=this.AhF)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.AUj)&&(
B._cycle!=D))B._Mark(B._cycle=D);if((B=this.AUk)&&(B._cycle!=D))B._Mark(B._cycle=
D);if((B=this.W)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Au)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.KF)._cycle!=D)B._Mark(B._cycle=D);if((B=this.SS)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.AdZ)._cycle!=D)B._Mark(B._cycle=D);if((B=this.UG
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.UF)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Aem)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Afw)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Afv)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Afu)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Afx)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AgD)._cycle
!=D)B._Mark(B._cycle=D);if(this.K)this.K._Mark(D);},_variants:function(){return A.
acs.HelperClass._variants();},K:null,_className:"Device::HelperClass"};C.Helper={
_Init:function(){C.HelperClass._Init.call(this,0);},_ReInit:function(){},_variants:
function(){return this;},_this:null};C.BoolFilterCriterion={A4:false,Abm:function(
){var Av=A._NewObject(C.BoolFilterCriterion,0);Av.E$(this);return Av;},E$:function(
AI){C.FilterCriterion.E$.call(this,AI);var Av=(C.BoolFilterCriterion.isPrototypeOf(
AI)?AI:null);if(!!Av)this.A4=Av.A4;},Initialize:function(A3,Eb,A8,Qa){this.EJ=A3;
this.Operator=Eb;this.A4=A8;this.YM=Qa;return this;},_Init:function(aArg){C.FilterCriterion.
_Init.call(this,aArg);this.__proto__=C.BoolFilterCriterion;},_className:"Device::BoolFilterCriterion"
};C.UInt32FilterCriterion={A4:0,Abm:function(){var Av=A._NewObject(C.UInt32FilterCriterion
,0);Av.E$(this);return Av;},E$:function(AI){C.FilterCriterion.E$.call(this,AI);var
Av=(C.UInt32FilterCriterion.isPrototypeOf(AI)?AI:null);if(!!Av)this.A4=Av.A4;},Initialize:
function(A3,Eb,A8,Qa){this.EJ=A3;this.Operator=Eb;this.A4=A8;this.YM=Qa;return this;
},_Init:function(aArg){C.FilterCriterion._Init.call(this,aArg);this.__proto__=C.
UInt32FilterCriterion;},_className:"Device::UInt32FilterCriterion"};C.OverlayMenu={
None:0,Home:1,AutoAction:2,MenuItemSettings:3,RatingSettings:4,WeighingSettings:
5,Options:6,AnimalSearch:7,ActionSettings:8,MeasurementReady:9,AnimalMultiInfoMenu:
10,AnimalSearchUnfiltered:11,AnimalSearchDriedOff:12,MassRecordingMenu:13,MassRecordingDefaults:
14,MassRecordingFields:15,PurchasedAnimalsListMenu:16,BirthRegistrationsListMenu:
17,LAST:18};C.EnumToString={BH:function(A5){throw new Error(Aot+A5.toFixed());},
Lt:function(A5){return this.BH(A5);},_Init:function(aArg){this.__proto__=C.EnumToString;
A.h7++;},_Done:function(){this.__proto__=null;A.h7--;},_ReInit:function(){},_Mark:
function(D){var B;if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:
0,_observers:null,_className:"Device::EnumToString"};C.ScreenTypeToString={BH:function(
A5){var AJS=A5;var BD;switch(AJS){case 3:BD=A.aaR(A.acf.Avt);break;case 34:BD=A.
aaR(A.acf.Tw);break;case 35:BD=A.aaR(A.acf.Vu);break;case 43:BD=A.aaR(A.acf.AOB);
break;default:BD=this.Bpp(A5);}return BD;},Bpp:function(A5){var AJS=A5;var BD=A.
jV;switch(AJS){case 0:BD=Ayd;break;case 2:BD=AV7;break;case 4:BD=AV8;break;case 39:
BD=AV9;break;case 38:BD=AHu;break;case 63:BD=AV_;break;case 64:BD=AHv;break;case
82:BD=AHw;break;case 83:BD=AHx;break;case 92:BD=AV$;break;case 93:BD=AHy;break;case
65:BD=AWa;break;case 3:BD=AHz;break;case 6:BD=Ro;break;case 16:BD=Xg;break;case 22:
BD=AWb;break;case 42:BD=AWc;break;case 88:BD=AWd;break;case 87:BD=AWe;break;case
89:BD=AWf;break;case 95:BD=AWg;break;case 17:BD=AWh;break;case 23:BD=AhZ;break;case
18:BD=AHA;break;case 19:BD=AWi;break;case 37:BD=AWj;break;case 76:BD=AHB;break;case
1:BD=AHC;break;case 5:BD=Aye;break;case 7:BD=P9;break;case 81:BD=AWk;break;case 8:
BD=AWl;break;case 9:BD=AWm;break;case 40:BD=As4;break;case 41:BD=AWn;break;case 24:
BD=AWo;break;case 10:BD=AWp;break;case 60:BD=AWq;break;case 21:BD=AWr;break;case
11:BD=AWs;break;case 29:BD=As5;break;case 48:BD=AWt;break;case 30:BD=AWu;break;case
12:BD=AWv;break;case 13:BD=AWw;break;case 14:BD=AWx;break;case 15:BD=AWy;break;case
69:BD=AWz;break;case 70:BD=AWA;break;case 20:BD=AWB;break;case 25:BD=AWC;break;case
66:BD=AHD;break;case 59:BD=Alg;break;case 58:BD=AWD;break;case 56:BD=AWE;break;case
57:BD=AWF;break;case 68:BD=Ayf;break;case 67:BD=Alh;break;case 84:BD=Ah0;break;case
77:BD=Ayg;break;case 26:BD=Aou;break;case 28:BD=Ah1;break;case 27:BD=AWG;break;case
31:BD=Ayh;break;case 78:BD=AHE;break;case 34:BD=AfD;break;case 35:BD=AHF;break;case
32:BD=Aai;break;case 45:BD=Ali;break;case 49:BD=Aov;break;case 55:BD=AWH;break;case
54:BD=AWI;break;case 33:BD=AWJ;break;case 36:BD=AWK;break;case 50:BD=AWL;break;case
75:BD=As6;break;case 43:BD=AHG;break;case 44:BD=AHH;break;case 61:BD=AWM;break;case
62:BD=AWN;break;case 46:BD=AWO;break;case 47:BD=AWP;break;case 85:BD=AWQ;break;case
86:BD=AWR;break;case 71:BD=AWS;break;case 72:BD=AWT;break;case 74:BD=AWU;break;case
73:BD=AWV;break;case 51:BD=AWW;break;case 52:BD=Ayi;break;case 53:BD=AHI;break;case
79:BD=AHJ;break;case 80:BD=AHK;break;case 90:BD=AHL;break;case 91:BD=AHM;break;case
94:BD=AHN;break;default:throw new Error(AWX+AJS.toFixed());}return BD;},_Init:function(
aArg){C.EnumToString._Init.call(this,aArg);this.__proto__=C.ScreenTypeToString;}
,_className:"Device::ScreenTypeToString"};C.OverlayMenuToString={BH:function(A5){
var Be9=A5;var Om=A.jV;switch(Be9){case 0:Om=AWY;break;case 1:Om=AHz;break;case 8:
Om=AWZ;break;case 2:Om=AW0;break;case 3:Om=AW1;break;case 4:Om=AW2;break;case 5:
Om=AW3;break;case 6:Om=Ayj;break;case 7:Om=AHO;break;case 11:Om=AW4;break;case 12:
Om=AHP;break;case 9:Om=Ah2;break;case 10:Om=UZ;break;case 14:Om=AW5;break;case 15:
Om=Aaj;break;case 13:Om=AW6;break;case 16:Om=AW7;break;case 17:Om=Alj;break;default:
throw new Error(AfE+Be9.toFixed());}return Om;},_Init:function(aArg){C.EnumToString.
_Init.call(this,aArg);this.__proto__=C.OverlayMenuToString;},_className:"Device::OverlayMenuToString"
};C.ScanStateToString={BH:function(A5){var BfI=A5;var Bp=A.jV;switch(BfI){case 4:
Bp=AcS;break;case 0:Bp=Aow;break;case 2:Bp=AW8;break;case 3:Bp=O5;break;case 1:Bp=
AHQ;break;default:throw new Error(AHR+BfI.toFixed());}return Bp;},_Init:function(
aArg){C.EnumToString._Init.call(this,aArg);this.__proto__=C.ScanStateToString;},
_className:"Device::ScanStateToString"};C.MeasureStateToString={BH:function(A5){
var BdL=A5;var Bp=A.jV;switch(BdL){case 4:Bp=AcS;break;case 0:Bp=Aow;break;case 2:
Bp=AW9;break;case 1:Bp=AHQ;break;case 3:Bp=AHS;break;default:throw new Error(AHT+
BdL.toFixed());}return Bp;},_Init:function(aArg){C.EnumToString._Init.call(this,
aArg);this.__proto__=C.MeasureStateToString;},_className:"Device::MeasureStateToString"
};C.TemperatureUnit={Celsius:0,Fahrenheit:1,LAST:2};C.TemperatureUnitToString={BH:
function(A5){var Bf7=A5;var Ap$=A.jV;switch(Bf7){case 0:Ap$=A.aaR(A.acf.BpI);break;
case 1:Ap$=A.aaR(A.acf.BpJ);break;default:throw new Error(AHU+Bf7.toFixed());}return Ap$;
},_Init:function(aArg){C.EnumToString._Init.call(this,aArg);this.__proto__=C.TemperatureUnitToString;
},_className:"Device::TemperatureUnitToString"};C.AnimalType={DairyCalf:0,DairyCow:
1,SheepLamb:2,LAST:3};C.AnimalTypeToString={BH:function(A5){var AK2=A5;var type=
A.jV;switch(AK2){case 0:type=A.aaR(A.acf.Bhd);break;case 1:type=A.aaR(A.acf.Bhr);
break;case 2:type=A.aaR(A.acf.Bjr);break;default:throw new Error(AW_+AK2.toFixed(
));}return type;},_Init:function(aArg){C.EnumToString._Init.call(this,aArg);this.
__proto__=C.AnimalTypeToString;},_className:"Device::AnimalTypeToString"};C.Language={
Default:0,German:1,Spanish:2,French:3,Italian:4,Finnish:5,Chinese_TW:6,Turkish:7
,Greek:8,Russian:9,Dutch:10,Czech:11,Estonian:12,Bulgarian:13,Bosnian:14,Norwegian:
15,Ukrainian:16,LAST:17};C.LanguageToString={BH:function(A5){var Az9=A5;var Pa=A.
jV;switch(Az9){case 0:Pa=AW$;break;case 10:Pa=AXa;break;case 1:Pa=AXb;break;case
12:Pa=AXc;break;case 5:Pa=AXd;break;case 3:Pa=AXe;break;case 8:Pa=AXf;break;case
13:Pa=AHV;break;case 4:Pa=AXg;break;case 9:Pa=AHW;break;case 2:Pa=AHX;break;case
7:Pa=Ayk;break;case 6:Pa=AXh;break;case 11:Pa=AXi;break;case 14:Pa=AXj;break;case
15:Pa=AXk;break;case 16:Pa=AXl;break;default:throw new Error(AHY+Az9.toFixed());
}return Pa;},Lt:function(A5){var Az9=A5;var Dm=A.jV;switch(Az9){case 0:Dm=AXm;break;
case 10:Dm=Xc;break;case 1:Dm=P7;break;case 12:Dm=AXn;break;case 5:Dm=UU;break;case
3:Dm=W8;break;case 8:Dm=As7;break;case 13:Dm=W5;break;case 4:Dm=W9;break;case 9:
Dm=S_;break;case 2:Dm=Aae;break;case 7:Dm=Aag;break;case 6:Dm=As8;break;case 11:
Dm=AHZ;break;case 14:Dm=AXo;break;case 15:Dm=S9;break;case 16:Dm=J0;break;default:
throw new Error(AHY+Az9.toFixed());}return Dm;},_Init:function(aArg){C.EnumToString.
_Init.call(this,aArg);this.__proto__=C.LanguageToString;},_className:"Device::LanguageToString"
};C.Gender={Male:0,Female:1,Unknown:2,LAST:3};C.BirthType={Single:0,Twins:1,Triplets:
2,Quadruplets:3,LAST:4};C.GenderToString={BH:function(A5){var AtP=A5;var AJ_=A.jV;
switch(AtP){case 0:AJ_=A.aaR(A.acf.Male);break;case 1:AJ_=A.aaR(A.acf.Female);break;
case 2:AJ_=A.aaR(A.acf.Unknown);break;default:throw new Error(AXp+AtP.toFixed());
}return AJ_;},_Init:function(aArg){C.EnumToString._Init.call(this,aArg);this.__proto__=
C.GenderToString;},_className:"Device::GenderToString"};C.BirthTypeToString={BH:
function(A5){var type=A5;var AfU=A.jV;switch(type){case 0:AfU=A.aaR(A.acf.BoD);break;
case 1:AfU=A.aaR(A.acf.BpE);break;case 2:AfU=A.aaR(A.acf.Triplets);break;case 3:
AfU=A.aaR(A.acf.Quadruplets);break;default:throw new Error(AXq+type.toFixed());}
return AfU;},_Init:function(aArg){C.EnumToString._Init.call(this,aArg);this.__proto__=
C.BirthTypeToString;},_className:"Device::BirthTypeToString"};C.SyncState={Idle:
0,Init:1,Exporting:2,ImportStart:3,Importing:4,ImportFinish:5,Ready:6,Error:7,LAST:
8};C.SyncStateToString={BH:function(A5){var Bf1=A5;var Bp=A.jV;switch(Bf1){case 7:
Bp=AcS;break;case 0:Bp=Aow;break;case 6:Bp=AHS;break;case 2:Bp=AXr;break;case 5:
Bp=AXs;break;case 3:Bp=AXt;break;case 4:Bp=AXu;break;case 1:Bp=AXv;break;default:
throw new Error(AXw+Bf1.toFixed());}return Bp;},_Init:function(aArg){C.EnumToString.
_Init.call(this,aArg);this.__proto__=C.SyncStateToString;},_className:"Device::SyncStateToString"
};C.RatedAttributeToString={BH:function(A5){var AAU=A5;switch(AAU){case 0:return A.
jV;case 1:return A.aaR(A.acf.BnS);case 4:return A.aaR(A.acf.BnR);case 3:return A.
aaR(A.acf.BnT);case 2:return A.aaR(A.acf.BnQ);default:throw new Error(AH0+AAU.toFixed(
));}},Lt:function(A5){var AAU=A5;switch(AAU){case 0:return A.jV;case 1:return A.
aaR(A.acf.Feed);case 4:return A.aaR(A.acf.AGf);case 3:return A.aaR(A.acf.AGg);case
2:return A.aaR(A.acf.AGd);default:throw new Error(AH0+AAU.toFixed());}},_Init:function(
aArg){C.EnumToString._Init.call(this,aArg);this.__proto__=C.RatedAttributeToString;
},_className:"Device::RatedAttributeToString"};C.AssesmentToString={BH:function(
A5){var Alx=A5;var Azf=A.jV;switch(Alx){case 0:case 5:Azf=A.jV;break;case 3:Azf=
A.aaR(A.acj.BoJ);break;case 2:Azf=A.aaR(A.acj.BoL);break;case 1:Azf=A.aaR(A.acj.
BoK);break;default:throw new Error(AXx+Alx.toFixed());}return Azf;},_Init:function(
aArg){C.EnumToString._Init.call(this,aArg);this.__proto__=C.AssesmentToString;},
_className:"Device::AssesmentToString"};C.PopupId={Unknown:0,SevereError:1,EnterSleep:
2,About:3,WarningDataSync:4,SuccessDataSync:5,WarningRestart:6,WarningFactorySettings:
7,SuccessResetFactorySettings:8,ShutDown:9,TechnicalDetails:10,ScanError:11,ScanNotFound:
12,ScannedAnimalNotFound:13,AnimalNotFound:14,SuccessUnregister:15,DataSynchInProgress:
16,AddedToAlarm:17,RemovedFromAlarm:18,AddedToWatch:19,RemovedFromWatch:20,AnimalIdAlreadyExists:
21,MissingAnimalId:22,SuccessCreationNewAnimals:23,AnimalCreationInProgress:24,TransponderAlreadyRegistered:
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
96,WarningDataExportHitPurchasedFailed:97,RemovedFromPurchasedNoticePending:98,SuccessDataExportHitPurchasedDownload:
99,SuccessDataExportHitPurchased:100,WarningParsingDateFailed:101,WarningParsedDateInFutureInvalid:
102,WarningParsingNaisIdFailed:103,RemovedAnimalPurchased:104,WarningParsingShortNaisIdWithoutPremisesId:
105,SuccessChangeTransponder:106,TransponderAlreadyRegisteredCapturable:107,ConfirmationMassDeregistration:
108,SuccessMassDeregistration:109,DataExportInProgress:110,LAST:111};C.PopupState={
Queued:0,Unknown:1,Displayed:2,ClosedAfterTimeOut:3,ClosedWithOk:4,ClosedWithCancel:
5,ClosedByMiddleware:6,ClosedWithYes:7,ClosedWithNo:8,Opened:9};C.PopupContext={
AF2:null,AkM:A.jV,Ak6:0,PopupState:1,Id:0,Show:false,BmY:function(E){var B;if(this.
PopupState===E)return;this.PopupState=E;if(!!this.AF2)(B=this.AF2)?B[1].call(B[0
],this):null;},_Init:function(aArg){this.__proto__=C.PopupContext;A.h7++;},_Done:
function(){this.__proto__=null;A.h7--;},_ReInit:function(){},_Mark:function(D){var
B;if((B=this.AF2)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.I)&&(B._cycle
!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:"Device::PopupContext"
};C.Boolean={No:0,Yes:1,LAST:2};C.BooleanToYesNo={BH:function(A5){switch(A5){case
0:return A.aaR(A.acf.No);case 1:return A.aaR(A.acf.Yes);default:return Ayl+A5.toFixed(
);}},_Init:function(aArg){C.EnumToString._Init.call(this,aArg);this.__proto__=C.
BooleanToYesNo;},_className:"Device::BooleanToYesNo"};C.AnimalGroupTableFields={
Id:0,GroupName:1};C.AnimalGroup={GroupName:AHn,Id:0,EU:function(Ad,AH){var HF=C.
Row.EU.call(this,Ad,AH);if(HF&&!!AH){this.OnSetId(AH.CF(Ad,0));this.AE$(AH.VZ(Ad
,1));}return HF;},Cg:function(AH){var HF=C.Row.Cg.call(this,AH);if(HF&&!!AH){var
Jm=AH.Ox();if(Jm<=0)A.ab5("%s",Xf);else{if(this.Am8())this.CL=AH.YJ();AH.Hm(this.
CL,0,this.Id);AH.ZM(this.CL,1,this.GroupName);AH.Oz(Jm);}}return HF;},Gr:function(
){C.Row.Gr.call(this);this.OnSetId(-1);},EX:function(){C.Row.EX.call(this);this.
OnSetId(0);this.AE$(A.jV);},OnSetId:function(E){if(this.Id===E)return;this.Id=E;
A.abo([this,this.Q0,this.OnSetId],0);},AE$:function(E){if(this.GroupName===E)return;
this.GroupName=E;A.abo([this,this.Bky,this.AE$],0);},Q0:function(){return this.Id;
},Bky:function(){return this.GroupName;},_Init:function(aArg){C.Row._Init.call(this
,aArg);this.__proto__=C.AnimalGroup;this.TableId=3;},_className:"Device::AnimalGroup"
};C.PopupIdToString={BH:function(A5){var AdB=A5;var Ax=A.jV;var AJQ;AJQ=A.aaR(A.
acf.Bp2)+O4;switch(AdB){case 0:Ax=A.aaR(A.acf.Unknown);break;case 1:Ax=A.aaR(A.acf.
SevereError);break;case 58:Ax=A.aaR(A.acf.Bh8);break;case 2:Ax=A.aaR(A.acf.Bh6);
break;case 3:Ax=A.aaR(A.acf.BpO);break;case 77:Ax=A._GetAutoObject(C.Helper).Bik(
);break;case 78:Ax=A._GetAutoObject(C.Helper).Bii();break;case 79:Ax=A._GetAutoObject(
C.Helper).Bij();break;case 9:Ax=A.aaR(A.acf.Bqe);break;case 5:Ax=A.aaR(A.acf.SuccessDataSync
);break;case 8:Ax=A.aaR(A.acf.SuccessResetFactorySettings);break;case 34:Ax=A.aaR(
A.acf.SuccessResetAnimalData);break;case 10:Ax=A._GetAutoObject(C.Device).AC1();
break;case 82:Ax=A.aaR(A.acf.Bh_);break;case 83:Ax=A.aaR(A.acf.Bh$);break;case 80:
Ax=A.aaR(A.acf.BoV);break;case 81:Ax=A.aaR(A.acf.SuccessRestoreBackup);break;case
91:Ax=A.aaR(A.acf.Bg2);break;case 92:Ax=A.aaR(A.acf.Bn6);break;case 4:Ax=A.aaR(A.
acf.WarningDataSync);break;case 7:Ax=A.aaR(A.acf.Bqc);break;case 33:Ax=A.aaR(A.acf.
WarningResetAnimalData);break;case 6:Ax=A.aaR(A.acf.WarningRestart);break;case 27:
Ax=A.aaR(A.acf.WarningNoActionDefined);break;case 64:Ax=A.aaR(A.acf.WarningActionNotApplicable
);break;case 28:Ax=A.aaR(A.acf.WarningNoMenuItemVisible);break;case 29:Ax=A.aaR(
A.acf.WarningEnterPresentationMode);break;case 30:Ax=A.aaR(A.acf.WarningNoAnimalsRegistered
);break;case 41:Ax=((AJQ+A.aaR(A.acf.ARz))+O4)+A.aaR(A.acf.BjE);break;case 50:Ax=((
AJQ+A.aaR(A.acf.ARz))+O4)+A.aaR(A.acf.BjG);break;case 51:Ax=((AJQ+A.aaR(A.acf.ARz
))+O4)+A.aaR(A.acf.BjF);break;case 42:Ax=A.aaR(A.acf.Bqa);break;case 45:Ax=A.aaR(
A.acf.Bp6);break;case 46:Ax=A.aaR(A.acf.WarningNoValidCountryCode);break;case 57:
Ax=A.aaR(A.acf.WarningOutdatedAnimalWeight);break;case 52:Ax=A.aaR(A.acf.WarningOutdatedAnimalWeights
);break;case 53:Ax=A.aaR(A.acf.WarningWeightEvaluationSingular);break;case 56:Ax=
A.aaR(A.acf.WarningWeightEvaluationPlural);break;case 11:Ax=A.aaR(A.acf.ScanError
);break;case 12:Ax=A.aaR(A.acf.ScanNotFound);break;case 13:Ax=A.aaR(A.acf.BgU);break;
case 36:Ax=A.aaR(A.acf.Bpx);break;case 14:Ax=A.aaR(A.acf.AnimalNotFound);break;case
15:Ax=A.aaR(A.acf.SuccessUnregister);break;case 35:Ax=A.aaR(A.acf.SuccessUnregisterPerished
);break;case 26:Ax=A.aaR(A.acf.SuccessCreationNewAnimal);break;case 23:Ax=A.aaR(
A.acf.SuccessCreationNewAnimals);break;case 24:Ax=A.aaR(A.acf.Bhu);break;case 49:
Ax=A.aaR(A.acf.EvaluationInProgress);break;case 16:Ax=A.aaR(A.acf.BhA);break;case
17:Ax=A.aaR(A.acf.BoN);break;case 18:Ax=A.aaR(A.acf.Bo1);break;case 19:Ax=A.aaR(
A.acf.BoO);break;case 20:Ax=A.aaR(A.acf.Bo2);break;case 54:Ax=A.aaR(A.acf.BoW);break;
case 55:Ax=A.aaR(A.acf.BoZ);break;case 21:Ax=A.aaR(A.acf.A$E);break;case 48:Ax=(
A.aaR(A.acf.A$E)+O4)+A.aaR(A.acf.A5u);break;case 22:Ax=A.aaR(A.acf.Bp8);break;case
63:Ax=A.aaR(A.acf.Bp9);break;case 85:Ax=A.aaR(A.acf.Bp$);break;case 43:Ax=A.aaR(
A.acf.Bp_);break;case 25:Ax=A.aaR(A.acf.A$p);break;case 47:Ax=(A.aaR(A.acf.A$p)+
O4)+A.aaR(A.acf.A5u);break;case 107:Ax=A.aaR(A.acf.BpK);break;case 31:{var Bzs=(((((((((((((((((((
A.aaR(A.acf.Bhl)+Ayc)+A.aaR(A.acf.ANq))+A.aaR(A.acf.Colon))+N$)+A.aaR(A.acf.Bhn)
)+O4)+A.aaR(A.acf.AOr))+A.aaR(A.acf.Colon))+N$)+A.aaR(A.acf.Bie))+O4)+A.aaR(A.acf.
AT6))+A.aaR(A.acf.Colon))+N$)+A.aaR(A.acf.BnV))+O4)+A.aaR(A.acf.AT5))+A.aaR(A.acf.
Colon))+N$)+A.aaR(A.acf.BnU);Ax=Bzs;}break;case 32:Ax=A.aaR(A.acf.Bpy);break;case
69:Ax=A.aaR(A.acf.BjR);break;case 44:Ax=A.aaR(A.acf.Bqd);break;case 37:Ax=A.aaR(
A.acf.WarningResetWeightSettings);break;case 38:Ax=A.aaR(A.acf.WarningResetTempThresholds
);break;case 39:Ax=A.aaR(A.acf.BnL);break;case 76:Ax=(A.aaR(A.acf.A49)+O4)+A.aaR(
A.acf.AT8);break;case 40:Ax=A.aaR(A.acf.BoX);break;case 75:Ax=A.aaR(A.acf.BoP);break;
case 59:Ax=A.aaR(A.acf.QuestionAddAnotherCalfMultiples);break;case 62:Ax=A.aaR(A.
acf.BoR);break;case 96:Ax=A.aaR(A.acf.BoS);break;case 60:Ax=A.aaR(A.acf.BoT);break;
case 98:Ax=A.aaR(A.acf.BoU);break;case 61:Ax=A.aaR(A.acf.Bo3);break;case 104:Ax=
A.aaR(A.acf.Bo4);break;case 65:Ax=A.aaR(A.acf.SuccessClearAnimalLoss);break;case
66:Ax=A.aaR(A.acf.WarningNoActionsForAnimalLoss);break;case 67:Ax=A.aaR(A.acf.SuccessLinkTransponder
);break;case 106:Ax=A.aaR(A.acf.BoQ);break;case 86:Ax=A.aaR(A.acf.SuccessUnlinkTransponder
);break;case 68:Ax=A.aaR(A.acf.BoY);break;case 70:Ax=A.aaR(A.acf.Bia);break;case
71:Ax=A.aaR(A.acf.Bo7);break;case 72:Ax=A.aaR(A.acf.Bo8);break;case 97:Ax=A.aaR(
A.acf.Bic);break;case 100:Ax=A.aaR(A.acf.Bo9);break;case 99:Ax=A.aaR(A.acf.Bo_);
break;case 88:Ax=A.aaR(A.acf.Bib);break;case 89:Ax=A.aaR(A.acf.Bo5);break;case 90:
Ax=A.aaR(A.acf.Bo6);break;case 73:Ax=A.aaR(A.acf.WarningNoPremisesID);break;case
74:Ax=A.aaR(A.acf.WarningNoFlashDrivePresent);break;case 94:Ax=A.aaR(A.acf.WarningNoBackupPathPresent
);break;case 93:Ax=A.aaR(A.acf.WarningNoBackupFilePresent);break;case 84:Ax=A.aaR(
A.acf.Bir);break;case 87:Ax=A.aaR(A.acf.Bqg);break;case 95:Ax=A.aaR(A.acf.Bp5);break;
case 108:Ax=A.aaR(A.acf.Bp7);break;case 109:Ax=A.aaR(A.acf.SuccessMassDeregistration
);break;case 102:Ax=A.aaR(A.acf.WarningParsedDateInFutureInvalid);break;case 101:
Ax=A.aaR(A.acf.WarningParsingDateFailed);break;case 103:Ax=A.aaR(A.acf.WarningParsingNaisIdFailed
);break;case 105:Ax=A.aaR(A.acf.Bqb);break;case 110:Ax=A.aaR(A.acf.Bhc);break;default:
throw new Error(AH1+AdB.toFixed());}return Ax;},Lt:function(A5){var AdB=A5;var Ax=
A.jV;switch(AdB){case 0:Ax=AXy;break;case 1:Ax=AXz;break;case 58:Ax=AXA;break;case
2:Ax=AXB;break;case 3:Ax=AXC;break;case 77:Ax=AH2;break;case 78:Ax=AH3;break;case
79:Ax=AH4;break;case 9:Ax=AH5;break;case 5:Ax=Aym;break;case 8:Ax=Ayn;break;case
34:Ax=AH6;break;case 80:Ax=AXD;break;case 81:Ax=AH7;break;case 91:Ax=AXE;break;case
92:Ax=AH8;break;case 82:Ax=AXF;break;case 83:Ax=AXG;break;case 10:Ax=AXH;break;case
4:Ax=AXI;break;case 7:Ax=AXJ;break;case 33:Ax=AXK;break;case 6:Ax=AXL;break;case
27:Ax=AXM;break;case 64:Ax=AXN;break;case 28:Ax=AXO;break;case 29:Ax=AXP;break;case
30:Ax=AXQ;break;case 41:Ax=Ayo;break;case 50:Ax=AXR;break;case 51:Ax=AXS;break;case
42:Ax=Ayp;break;case 45:Ax=As9;break;case 46:Ax=U0;break;case 57:Ax=As_;break;case
52:Ax=AXT;break;case 53:Ax=AXU;break;case 56:Ax=AXV;break;case 11:Ax=AH9;break;case
12:Ax=AXW;break;case 13:Ax=AH_;break;case 36:Ax=AXX;break;case 14:Ax=AXY;break;case
15:Ax=AXZ;break;case 35:Ax=As$;break;case 26:Ax=AX0;break;case 23:Ax=AX1;break;case
24:Ax=AH$;break;case 49:Ax=AX2;break;case 16:Ax=AX3;break;case 17:Ax=AX4;break;case
18:Ax=AX5;break;case 19:Ax=AcT;break;case 20:Ax=AX6;break;case 54:Ax=AX7;break;case
55:Ax=AX8;break;case 21:Ax=AX9;break;case 48:Ax=AIa;break;case 22:Ax=AX_;break;case
63:Ax=AX$;break;case 43:Ax=AYa;break;case 85:Ax=AYb;break;case 25:Ax=AYc;break;case
47:Ax=AYd;break;case 107:Ax=AIb;break;case 31:Ax=AYe;break;case 32:Ax=AYf;break;
case 69:Ax=AYg;break;case 44:Ax=AIc;break;case 37:Ax=AId;break;case 38:Ax=AYh;break;
case 39:Ax=AYi;break;case 76:Ax=AYj;break;case 40:Ax=AYk;break;case 75:Ax=Rp;break;
case 59:Ax=Ata;break;case 62:Ax=AIe;break;case 96:Ax=AIf;break;case 60:Ax=Aox;break;
case 98:Ax=Aoy;break;case 65:Ax=Ayq;break;case 61:Ax=AYl;break;case 104:Ax=AIg;break;
case 66:Ax=AYm;break;case 67:Ax=AYn;break;case 106:Ax=AYo;break;case 86:Ax=AYp;break;
case 68:Ax=AYq;break;case 70:Ax=AYr;break;case 71:Ax=AYs;break;case 72:Ax=AYt;break;
case 97:Ax=AYu;break;case 100:Ax=AYv;break;case 99:Ax=AYw;break;case 88:Ax=AYx;break;
case 89:Ax=AYy;break;case 90:Ax=AYz;break;case 73:Ax=AYA;break;case 74:Ax=AYB;break;
case 94:Ax=AYC;break;case 93:Ax=Aoz;break;case 84:Ax=AIh;break;case 87:Ax=AYD;break;
case 95:Ax=AIi;break;case 108:Ax=AIj;break;case 109:Ax=Aak;break;case 102:Ax=AIk;
break;case 101:Ax=AYE;break;case 103:Ax=AIl;break;case 105:Ax=AYF;break;case 110:
Ax=Ayr;break;default:throw new Error(AH1+AdB.toFixed());}return Ax;},_Init:function(
aArg){C.EnumToString._Init.call(this,aArg);this.__proto__=C.PopupIdToString;},_className:
"Device::PopupIdToString"};C.PopupParamSeparator=";";C.RatingMode={Basic:0,Extended:
1,LAST:2};C.TransponderType={UNDEFINED:0,AnimalId:1,FarmId:2,GroupId:3,PersonId:
4,LAST:5};C.TransponderProtocol={UNDEFINED:0,FDX:1,HDX:2,HDX_URBAN:3,LAST:4};C.TransponderTypeToString={
BH:function(A5){var Bgh=A5;var type=A.jV;switch(Bgh){case 1:type=AYG;break;case 2:
type=AYH;break;case 3:type=Ays;break;case 4:type=AYI;break;case 0:type=Ayd;break;
default:throw new Error(AYJ+Bgh.toFixed());}return type;},_Init:function(aArg){C.
EnumToString._Init.call(this,aArg);this.__proto__=C.TransponderTypeToString;},_className:
"Device::TransponderTypeToString"};C.TransponderProtocolToString={BH:function(A5
){var Bgf=A5;var AAR=A.jV;switch(Bgf){case 1:AAR=AYK;break;case 2:AAR=AIm;break;
case 3:AAR=AoA;break;case 0:AAR=Ayd;break;default:throw new Error(AIn+Bgf.toFixed(
));}return AAR;},_Init:function(aArg){C.EnumToString._Init.call(this,aArg);this.
__proto__=C.TransponderProtocolToString;},_className:"Device::TransponderProtocolToString"
};C.Transponder={Id:0,TransponderProtocol:0,TransponderType:0,ATA:function(E){if(
this.TransponderType===E)return;this.TransponderType=E;A.abo([this,this.Bk9,this.
ATA],0);},ATz:function(E){if(this.TransponderProtocol===E)return;this.TransponderProtocol=
E;A.abo([this,this.Bk8,this.ATz],0);},OnSetId:function(E){if(this.Id===E)return;
this.Id=E;A.abo([this,this.Q0,this.OnSetId],0);},AOO:function(){return A._GetAutoObject(
C.Converter).Bpw(this.Id);},Biz:function(){return A._GetAutoObject(C.Converter).
AxQ(this.Id);},Bk9:function(){return this.TransponderType;},Bk8:function(){return this.
TransponderProtocol;},Q0:function(){return this.Id;},_Init:function(aArg){this.__proto__=
C.Transponder;A.h7++;},_Done:function(){this.__proto__=null;A.h7--;},_ReInit:function(
){},_Mark:function(D){var B;if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:
null,_cycle:0,_observers:null,_className:"Device::Transponder"};C.RatingModeToString={
BH:function(A5){var Vf=A5;var Nt=A.jV;switch(Vf){case 0:Nt=A.aaR(A.acf.Basic);break;
case 1:Nt=A.aaR(A.acf.Extended);break;default:throw new Error(AYL+Vf.toFixed());
}return Nt;},_Init:function(aArg){C.EnumToString._Init.call(this,aArg);this.__proto__=
C.RatingModeToString;},_className:"Device::RatingModeToString"};C.TableRowsCount={
_Init:function(aArg){this.__proto__=C.TableRowsCount;A.h7++;},_Done:function(){this.
__proto__=null;A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((B=this.
I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:
"Device::TableRowsCount"};C.MassUnit={Kilogramm:0,Pound:1,LAST:2};C.MassUnitToString={
BH:function(A5){var BdH=A5;var Ap$=A.jV;switch(BdH){case 0:Ap$=A.aaR(A.acf.Bjp);
break;case 1:Ap$=A.aaR(A.acf.Pound);break;default:throw new Error(AIo+BdH.toFixed(
));}return Ap$;},_Init:function(aArg){C.EnumToString._Init.call(this,aArg);this.
__proto__=C.MassUnitToString;},_className:"Device::MassUnitToString"};C.MinWeightGain=
20;C.MaxWeightGain=2000;C.WeightGainStep=10;C.Int32ArrayWrapper={MD:10,Array:A.abi(
10,0,null),ZC:function(E){if(this.MD===E)return;if(E>10)throw new Error(AIp);this.
MD=E;},Set:function(aIndex,AL){if((aIndex<0)||(aIndex>=this.MD))throw new Error(
Ah3);this.Array.Set(aIndex,AL);},Get:function(aIndex){if((aIndex<0)||(aIndex>=this.
MD))throw new Error(Ah3);return this.Array.Get(aIndex);},AmY:function(){var Qt=0;
var O;for(O=0;O<this.MD;O=O+1)Qt=Qt+this.Get(O);return Qt;},toString:function(){
var A2G=this.Array.Get(0).toFixed();var O;for(O=1;O<this.MD;O=O+1)A2G=(A2G+O3)+this.
Array.Get(O).toFixed();return A2G;},EU:function(aString){var HA=aString.indexOf(
String.fromCharCode(0x2C),0);var A1t=A.jV;var O=0;while(O<10){if(aString===A.jV)
this.Array.Set(O,0);else{if(HA===-1){A1t=aString;aString=A.jV;}else{A1t=A.abV(aString
,HA);aString=A.ab1(aString,0,HA+1);}this.Array.Set(O,A.wz(A1t,0,10));HA=aString.
indexOf(String.fromCharCode(0x2C),0);}O=O+1;}if(aString!==A.jV)A.ab5("%s",AYM);}
,Cg:function(){},EX:function(){var O;for(O=0;O<this.MD;O=O+1)this.Set(O,0);},Avm:
function(A8){var O=0;while(O<this.MD){if(this.Array.Get(O)===A8)return O;O=O+1;}
return-1;},HK:function(){var O=0;var max=-1;while(O<this.MD){if(this.Array.Get(O
)>max)max=this.Array.Get(O);O=O+1;}return max;},_Init:function(aArg){(this.Array=[
]).__proto__=C.Int32ArrayWrapper.Array;this.__proto__=C.Int32ArrayWrapper;A.h7++;
},_Done:function(){this.__proto__=null;A.h7--;},_ReInit:function(){},_Mark:function(
D){var B;if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:
null,_className:"Device::Int32ArrayWrapper"};C.ActionToString={BH:function(A5){var
AzB=A5;var E9=A.jV;switch(AzB){case 4:E9=A.aaR(A.acf.Alarm);break;case 256:E9=A.
aaR(A.acf.Weighing);break;case 128:E9=A.aaR(A.acf.A56);break;case 16:E9=A.aaR(A.
acf.AMg);break;case 1:E9=A.aaR(A.acf.Temperature);break;case 32:E9=A.aaR(A.acf.AnimalLoss
);break;case 2:E9=A.aaR(A.acf.Rating);break;case 8:E9=A.aaR(A.acf.Asf);break;case
64:E9=A.aaR(A.acf.Unregister);break;case 512:E9=A.aaR(A.acf.ART);break;case 1024:
E9=A.aaR(A.acf.LinkTransponder);break;case 262144:E9=A.aaR(A.acf.UnlinkTransponder
);break;case 2048:E9=A.aaR(A.acf.Tw);break;case 4096:E9=A.aaR(A.acf.Calving);break;
case 8192:E9=A.aaR(A.acf.DryOff);break;case 16384:E9=A.aaR(A.acf.A7i);break;case
32768:E9=A.aaR(A.acf.AB7);break;case 524288:E9=A.aaR(A.acf.AB9);break;case 65536:
E9=A.aaR(A.acf.Delete);break;case 131072:E9=A.aaR(A.acf.A7j);break;case 0:E9=A.aaR(
A.acf.A7G);break;default:throw new Error(Alk+AzB.toFixed());}return E9;},Lt:function(
A5){var AzB=A5;var E9=A.jV;switch(AzB){case 4:E9=A.aaR(A.acf.Alarm);break;case 256:
E9=A.aaR(A.acf.Weighing);break;case 128:E9=A.aaR(A.acf.A56);break;case 16:E9=A.aaR(
A.acf.AMg);break;case 1:E9=A.aaR(A.acf.Temperature);break;case 32:E9=A.aaR(A.acf.
AnimalLoss);break;case 2:E9=A.aaR(A.acf.Rating);break;case 8:E9=A.aaR(A.acf.Asf);
break;case 64:E9=A.aaR(A.acf.Unregister);break;case 512:E9=A.aaR(A.acf.ART);break;
case 1024:E9=A.aaR(A.acf.LinkTransponder);break;case 262144:E9=A.aaR(A.acf.UnlinkTransponder
);break;case 2048:E9=A.aaR(A.acf.Tw);break;case 4096:E9=A.aaR(A.acf.Calving);break;
case 8192:E9=A.aaR(A.acf.DryOff);break;case 32768:E9=A.aaR(A.acf.AB7);break;case
524288:E9=A.aaR(A.acf.AB9);break;case 65536:E9=A.aaR(A.acf.Delete);break;case 16384:
case 131072:E9=A.aaR(A.acf.Bjw);break;case 0:E9=A.aaR(A.acf.A7G);break;default:throw new
Error(Alk+AzB.toFixed());}return E9;},_Init:function(aArg){C.EnumToString._Init.
call(this,aArg);this.__proto__=C.ActionToString;},_className:"Device::ActionToString"
};C.ACTIONS_COUNT=19;C.PopupTimeout=2000;C.ITable={Filter:null,Id:2,CF:function(
Ad,A3){return 0;},VZ:function(Ad,A3){return A.jV;},Akr:function(G){A.we(this,0);
A.pe([this,this.DY],this);},H3:function(Ad,A3){return false;},Hv:function(Ad,A3){
return this.Sl(Ad,A3);},OnSetId:function(E){if(this.Id===E)return;this.Id=E;},B$:
function(){return 0;},Bk:function(E){if(this.Filter===E)return;this.Filter=E;A.abo([
this,this.Fn,this.Fr],0);},Fr:function(Aq){this.Bk(Aq);},I4:function(Ad,A3){var BA4=
this.V0(Ad,A3);return A._GetAutoObject(C.Converter).A$s(BA4);},V0:function(Ad,A3
){return 0;},Sl:function(Ad,A3){return 0;},A6G:function(Ad,A3){return this.CF(Ad
,A3);},Ox:function(){var Jm=0;var BBP=this.Id;return Jm;},Oz:function(AoT){var HF=
0;var BBP=this.Id;return HF===1;},YJ:function(){return-1;},ZO:function(Ad,A3,C0){
return false;},Hm:function(Ad,A3,C0){return false;},ZN:function(Ad,A3,C0){return false;
},N4:function(Ad,A3,C0){return false;},ZM:function(Ad,A3,C0){return false;},Acq:
function(Ad,A3,C0){return this.ZN(Ad,A3,C0);},AkV:function(Ad,A3,C0){var BA5=A._GetAutoObject(
C.Converter).Ad0(C0);return this.ZO(Ad,A3,BA5);},A_6:function(Ad,A3,C0){return this.
Hm(Ad,A3,C0);},AOI:function(Ad,A3){return this.CF(Ad,A3);},Bix:function(Ad,A3){return this.
CF(Ad,A3);},Boo:function(Ad,A3,C0){return this.Hm(Ad,A3,C0);},Bok:function(Ad,A3
,C0){return this.Hm(Ad,A3,C0);},LT:function(aColumn,A8){return-1;},AmW:function(
Ad,A3){return this.CF(Ad,A3);},Boi:function(Ad,A3,C0){return this.Hm(Ad,A3,C0);}
,ACZ:function(Ad,A3){return this.CF(Ad,A3);},AUq:function(Ad,A3,ML){return this.
Hm(Ad,A3,ML);},DY:function(G){this.Bx7();},Bx7:function(){return-1;},KN:function(
Ad,A3){return 0;},UA:function(Ad,A3,C0){return false;},AgW:function(aColumn,A8){
return-1;},EX:function(){return false;},Biy:function(Ad,A3){var BA6=this.CF(Ad,A3
);return A._GetAutoObject(C.Converter).Bi0(BA6);},BiD:function(Ad,A3){return this.
CF(Ad,A3);},AOQ:function(Ad,A3){return this.CF(Ad,A3);},Bom:function(Ad,A3,C0){var
BA7=A._GetAutoObject(C.Converter).A5e(C0);return this.Hm(Ad,A3,BA7);},Bon:function(
Ad,A3,C0){return this.Hm(Ad,A3,C0);},Bou:function(Ad,A3,C0){return this.Hm(Ad,A3
,C0);},AjN:function(aColumn,A8){return false;},Aek:function(aColumn,A8){return false;
},BiM:function(Ad,A3){return this.CF(Ad,A3);},Bos:function(Ad,A3,C0){return this.
Hm(Ad,A3,C0);},Lg:function(){return this.QG()>=this.HJ();},HJ:function(){return 0;
},Abu:function(){return-1;},QG:function(){return 0;},Fn:function(){return this.Filter;
},_Init:function(aArg){this.__proto__=C.ITable;A.h7++;},_Done:function(){this.__proto__=
null;A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((B=this.Filter)&&(
B._cycle!=D))B._Mark(B._cycle=D);if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D
);},I:null,_cycle:0,_observers:null,_className:"Device::ITable"};C.MaxAutoActionsCount=
4;C.WeightRecordingMode={Automatic:0,Manual:1,LAST:2};C.WeightRecordingModeToString={
BH:function(A5){var Vf=A5;var Nt=A.jV;switch(Vf){case 0:Nt=A.aaR(A.acf.Automatic
);break;case 1:Nt=A.aaR(A.acf.Manual);break;default:throw new Error(AYN+Vf.toFixed(
));}return Nt;},_Init:function(aArg){C.EnumToString._Init.call(this,aArg);this.__proto__=
C.WeightRecordingModeToString;},_className:"Device::WeightRecordingModeToString"
};C.BooleanToAutoOnOff={BH:function(A5){switch(A5){case 0:return A.aaR(A.acf.Off
);case 1:return A.aaR(A.acf.Aa5);default:return Ayl+A5.toFixed();}},_Init:function(
aArg){C.EnumToString._Init.call(this,aArg);this.__proto__=C.BooleanToAutoOnOff;}
,_className:"Device::BooleanToAutoOnOff"};C.WeightStep=100;C.WeightRecordingScope={
CurrentWeightOnly:0,BirthWeightOnly:1,BirthAndCurrentWeight:2,NoWeightRecording:
3,LAST:4};C.WeightRecordingScopeToString={BH:function(A5){var BfJ=A5;var AA6=A.jV;
switch(BfJ){case 0:AA6=A.aaR(A.acf.Bhw);break;case 1:AA6=A.aaR(A.acf.Bg_);break;
case 2:AA6=A.aaR(A.acf.Bg6);break;case 3:AA6=A.aaR(A.acf.BjY);break;default:throw new
Error(AIq+BfJ.toFixed());}return AA6;},_Init:function(aArg){C.EnumToString._Init.
call(this,aArg);this.__proto__=C.WeightRecordingScopeToString;},_className:"Device::WeightRecordingScopeToString"
};C.BodyTemperature={Undertemperature:0,Normal:1,Elevated:2,Fever:3,LAST:4};C.Kh={
A4N:0,Temperature:1,Rating:2,Aft:3,BCs:4,BC9:5,BFW:6,BDN:7,BEB:8,BDl:9,BEz:10,BE1:
11,BE2:12,BF1:13,BCD:14,LAST:15};C.AnimalListContentToString={BH:function(A5){var
Bb9=A5;var Rw=A.jV;switch(Bb9){case 0:Rw=AIr;break;case 14:Rw=AYO;break;case 2:Rw=
AYP;break;case 1:Rw=AIs;break;case 3:Rw=AYQ;break;case 4:Rw=AYR;break;case 5:Rw=
AYS;break;case 6:Rw=AYT;break;case 7:Rw=AYU;break;case 8:Rw=AYV;break;case 9:Rw=
AYW;break;case 10:Rw=AYX;break;case 11:Rw=AYY;break;case 12:Rw=AYZ;break;case 13:
Rw=AY0;break;default:throw new Error(AY1+Bb9.toFixed());}return Rw;},_Init:function(
aArg){C.EnumToString._Init.call(this,aArg);this.__proto__=C.AnimalListContentToString;
},_className:"Device::AnimalListContentToString"};C.GenderFilterCriterion={A4:0,
Abm:function(){var Av=A._NewObject(C.GenderFilterCriterion,0);Av.E$(this);return Av;
},E$:function(AI){C.FilterCriterion.E$.call(this,AI);var Av=(C.GenderFilterCriterion.
isPrototypeOf(AI)?AI:null);if(!!Av)this.A4=Av.A4;},_Init:function(aArg){C.FilterCriterion.
_Init.call(this,aArg);this.__proto__=C.GenderFilterCriterion;},_className:"Device::GenderFilterCriterion"
};C.AnimalTypeFilterCriterion={A4:0,Abm:function(){var Av=A._NewObject(C.AnimalTypeFilterCriterion
,0);Av.E$(this);return Av;},E$:function(AI){C.FilterCriterion.E$.call(this,AI);var
Av=(C.AnimalTypeFilterCriterion.isPrototypeOf(AI)?AI:null);if(!!Av)this.A4=Av.A4;
},Initialize:function(A3,Eb,A8,Qa){this.EJ=A3;this.Operator=Eb;this.A4=A8;this.YM=
Qa;return this;},_Init:function(aArg){C.FilterCriterion._Init.call(this,aArg);this.
__proto__=C.AnimalTypeFilterCriterion;},_className:"Device::AnimalTypeFilterCriterion"
};C.BCF={Auz:0,BCE:1,BEl:2,A_M:3,A5m:4,BFC:5,BC8:6,BFB:7,LinkTransponder:8,Tw:9,
Weighing:10,Calving:11,LinkNaisId:12,BE0:13,ClearBirthNoticePending:14,DeleteAnimal:
15,ScanNaisId:16,Edit:17,ClearPurchaseNoticePending:18};C.AutoRegistrationModeToString={
BH:function(A5){var Vf=A5;var Nt=A.jV;switch(Vf){case 0:Nt=A.aaR(A.acf.Bho);break;
case 1:Nt=A.aaR(A.acf.Bi4);break;case 2:Nt=A.aaR(A.acf.Off);break;default:throw new
Error(AY2+Vf.toFixed());}return Nt;},_Init:function(aArg){C.EnumToString._Init.call(
this,aArg);this.__proto__=C.AutoRegistrationModeToString;},_className:"Device::AutoRegistrationModeToString"
};C.AutoRegistrationMode={UserConfirmed:0,Background:1,Off:2,LAST:3};C.AssessmentFilterCriterion={
A4:0,Abm:function(){var Av=A._NewObject(C.AssessmentFilterCriterion,0);Av.E$(this
);return Av;},E$:function(AI){C.FilterCriterion.E$.call(this,AI);var Av=(C.AssessmentFilterCriterion.
isPrototypeOf(AI)?AI:null);if(!!Av)this.A4=Av.A4;},Initialize:function(A3,Eb,A8,
Qa){this.EJ=A3;this.Operator=Eb;this.A4=A8;this.YM=Qa;return this;},_Init:function(
aArg){C.FilterCriterion._Init.call(this,aArg);this.__proto__=C.AssessmentFilterCriterion;
},_className:"Device::AssessmentFilterCriterion"};C.D9={AdT:0,Temperature:1,Aft:
2,Rating:3,LAST:4};C.FactoryResetScope={DeviceAndAnimalData:0,AnimalDataOnly:1,LAST:
2};C.FactoryResetScopeToString={BH:function(A5){switch(A5){case 0:return A.aaR(A.
acf.DeviceAndAnimalData);case 1:return A.aaR(A.acf.AnimalDataOnly);default:return AY3+
A5.toFixed();}},_Init:function(aArg){C.EnumToString._Init.call(this,aArg);this.__proto__=
C.FactoryResetScopeToString;},_className:"Device::FactoryResetScopeToString"};C.
AU1={Cg:function(){A._GetAutoObject(C.Device).Ar_(this.toString());},Init:function(
aArg){var B;A.zX([this,this.BeQ],[B=A._GetAutoObject(C.Device),B.A8Y,B.Ba5],0);this.
BeQ(this);},BeQ:function(G){this.EU(A._GetAutoObject(C.Device).AGT);A.we(this,0);
},_Init:function(aArg){C.Int32ArrayWrapper._Init.call(this,aArg);this.__proto__=
C.AU1;this.ZC(3);this.Init(aArg);},_className:"Device::TemperaturesLowClass"};C.
AU0={Init:function(aArg){var B;A.zX([this,this.BeO],[B=A._GetAutoObject(C.Device
),B.A8X,B.Ba4],0);this.BeO(this);},Cg:function(){A._GetAutoObject(C.Device).Ar9(
this.toString());},BeO:function(G){this.EU(A._GetAutoObject(C.Device).AGS);A.we(
this,0);},_Init:function(aArg){C.Int32ArrayWrapper._Init.call(this,aArg);this.__proto__=
C.AU0;this.ZC(3);this.Init(aArg);},_className:"Device::TemperaturesHighClass"};C.
AMz={Init:function(aArg){var B;A.zX([this,this.Beh],[B=A._GetAutoObject(C.Device
),B.A8d,B.BaK],0);this.Beh(this);},Beh:function(G){this.EU(A._GetAutoObject(C.Device
).ABH);A.we(this,0);},_Init:function(aArg){C.Int32ArrayWrapper._Init.call(this,aArg
);this.__proto__=C.AMz;this.ZC(3);this.Init(aArg);},_className:"Device::AnimalTypesClass"
};C.UInt64FilterCriterion={A4:0,Abm:function(){var Av=A._NewObject(C.UInt64FilterCriterion
,0);Av.E$(this);return Av;},E$:function(AI){C.FilterCriterion.E$.call(this,AI);var
Av=(C.UInt64FilterCriterion.isPrototypeOf(AI)?AI:null);if(!!Av)this.A4=Av.A4;},Initialize:
function(A3,Eb,A8,Qa){this.EJ=A3;this.Operator=Eb;this.A4=A8;this.YM=Qa;return this;
},_Init:function(aArg){C.FilterCriterion._Init.call(this,aArg);this.__proto__=C.
UInt64FilterCriterion;},_className:"Device::UInt64FilterCriterion"};C.BooleanToAssignedUnassignedString={
BH:function(A5){switch(A5){case 0:return A.aaR(A.acf.Akq);case 1:return A.aaR(A.
acf.BgM);default:return Ayl+A5.toFixed();}},_Init:function(aArg){C.EnumToString.
_Init.call(this,aArg);this.__proto__=C.BooleanToAssignedUnassignedString;},_className:
"Device::BooleanToAssignedUnassignedString"};C.C7={UNDEFINED:0,AT:1,BA:2,BE:3,BCK:
4,BCZ:5,BC0:6,BC1:7,BC2:8,BC3:9,BDb:10,BDc:11,BDm:12,BDn:13,BDC:14,FR:15,GR:16,BDO:
17,BDP:18,BD0:19,BD1:20,BD6:21,BD7:22,BD8:23,BD9:24,BEd:25,BEr:26,BEs:27,BEH:28,
BEI:29,BEY:30,BEZ:31,BFf:32,BFg:33,BFh:34,BFv:35,BFw:36,BFP:37,A$t:38,BFQ:39,LAST:
40};C.CountryToString={BH:function(A5){var J4=A5;var FE=A.jV;switch(J4){case 1:FE=
A.aaR(A.acm.BgY);break;case 2:FE=A.aaR(A.acm.Bg$);break;case 3:FE=A.aaR(A.acm.Bg5
);break;case 4:FE=A.aaR(A.acm.Bhb);break;case 5:FE=A.aaR(A.acm.Bhe);break;case 6:
FE=A.aaR(A.acm.Bpc);break;case 7:FE=A.aaR(A.acm.Bhh);break;case 8:FE=A.aaR(A.acm.
Bhx);break;case 9:FE=A.aaR(A.acm.Bhy);break;case 10:FE=A.aaR(A.acm.Bis);break;case
11:FE=A.aaR(A.acm.BhE);break;case 12:FE=A.aaR(A.acm.Bh9);break;case 13:FE=A.aaR(
A.acm.BoG);break;case 14:FE=A.aaR(A.acm.Big);break;case 15:FE=A.aaR(A.acm.Bio);break;
case 16:FE=A.aaR(A.acm.BiU);break;case 17:FE=A.aaR(A.acm.Bhv);break;case 18:FE=A.
aaR(A.acm.Bi1);break;case 19:FE=A.aaR(A.acm.Bi_);break;case 20:FE=A.aaR(A.acm.Bjk
);break;case 21:FE=A.aaR(A.acm.Bjm);break;case 22:FE=A.aaR(A.acm.Bjx);break;case
23:FE=A.aaR(A.acm.BjA);break;case 24:FE=A.aaR(A.acm.Bju);break;case 25:FE=A.acm.
BjC;break;case 26:FE=A.aaR(A.acm.BjS);break;case 27:FE=A.aaR(A.acm.BjZ);break;case
28:FE=A.aaR(A.acm.BnE);break;case 29:FE=A.aaR(A.acm.BnF);break;case 30:FE=A.aaR(
A.acm.Bn7);break;case 31:FE=A.aaR(A.acm.Bn9);break;case 32:FE=A.aaR(A.acm.Bpb);break;
case 33:FE=A.aaR(A.acm.BoF);break;case 34:FE=A.aaR(A.acm.BoE);break;case 35:FE=A.
aaR(A.acm.BpD);break;case 36:FE=A.aaR(A.acm.Bpl);break;case 37:FE=A.aaR(A.acm.BpH
);break;case 38:FE=A.aaR(A.acm.A$t);break;case 39:FE=A.aaR(A.acm.BpG);break;case
0:FE=All;break;default:throw new Error(Aoo+J4.toFixed());}return FE;},Lt:function(
A5){var J4=A5;var BO=A.jV;switch(J4){case 1:BO=S8;break;case 2:BO=Z8;break;case 3:
BO=US;break;case 4:BO=W5;break;case 5:BO=Is;break;case 6:BO=Aaf;break;case 7:BO=
UT;break;case 8:BO=Z_;break;case 9:BO=W7;break;case 10:BO=P7;break;case 11:BO=Z$;
break;case 12:BO=Aaa;break;case 13:BO=Aae;break;case 14:BO=UU;break;case 15:BO=W8;
break;case 16:BO=Aab;break;case 17:BO=W6;break;case 18:BO=O2;break;case 19:BO=Rl;
break;case 20:BO=W9;break;case 21:BO=W_;break;case 22:BO=Xa;break;case 23:BO=Aac;
break;case 24:BO=W$;break;case 25:BO=Xb;break;case 26:BO=Xc;break;case 27:BO=S9;
break;case 28:BO=UV;break;case 29:BO=UW;break;case 30:BO=AcQ;break;case 31:BO=S_;
break;case 32:BO=Xd;break;case 33:BO=Afz;break;case 34:BO=Aad;break;case 35:BO=Aag;
break;case 36:BO=Z9;break;case 37:BO=AhV;break;case 38:BO=J0;break;case 39:BO=Aah;
break;case 0:BO=All;break;default:throw new Error(Aoo+J4.toFixed());}return BO;}
,_Init:function(aArg){C.EnumToString._Init.call(this,aArg);this.__proto__=C.CountryToString;
},_className:"Device::CountryToString"};C.EaseOfDelivery={Unspecified:0,Easy:1,Moderate:
2,Difficult:3,Surgery:4,LAST:5};C.EaseOfDeliveryToString={BH:function(A5){var BcG=
A5;var AtJ=A.jV;switch(BcG){case 0:AtJ=A.aaR(A.acf.Unspecified);break;case 1:AtJ=
A.aaR(A.acf.Easy);break;case 2:AtJ=A.aaR(A.acf.Moderate);break;case 3:AtJ=A.aaR(
A.acf.Difficult);break;case 4:AtJ=A.aaR(A.acf.Surgery);break;default:throw new Error(
Aal+BcG.toFixed());}return AtJ;},_Init:function(aArg){C.EnumToString._Init.call(
this,aArg);this.__proto__=C.EaseOfDeliveryToString;},_className:"Device::EaseOfDeliveryToString"
};C.WhereAbouts={UNB:0,EZU:1,EMA:2,VZU:3,VMA:4,VIV:5,TOT:6,V48:7,V3T:8,MGE:9,VKB:
10,LAST:11};C.WhereAboutsToString={BH:function(A5){var BgA=A5;var AaV=A.jV;switch(
BgA){case 0:AaV=A.aaR(A.acf.Unknown);break;case 1:AaV=A.aaR(A.acf.BpQ);break;case
2:AaV=A.aaR(A.acf.BpP);break;case 3:AaV=A.aaR(A.acf.BpY);break;case 4:AaV=A.aaR(
A.acf.BpX);break;case 5:AaV=A.aaR(A.acf.BpV);break;case 6:AaV=A.aaR(A.acf.BpS);break;
case 7:AaV=A.aaR(A.acf.BpU);break;case 8:AaV=A.aaR(A.acf.BpT);break;case 9:AaV=A.
aaR(A.acf.BpR);break;case 10:AaV=A.aaR(A.acf.BpW);break;default:throw new Error(
AY4+BgA.toFixed());}return AaV;},_Init:function(aArg){C.EnumToString._Init.call(
this,aArg);this.__proto__=C.WhereAboutsToString;},_className:"Device::WhereAboutsToString"
};C.Breed={UNKNOWN:0,SBT:1,RBT:2,JER:3,BV:4,RVA:5,RV:6,RDN:7,DSN:8,FL:9,GV:10,PIN:
11,HIN:12,MW:13,VW:14,LMP:15,DBV:16,AS:17,VR:18,CHA:19,LIM:20,WBB:21,BA:22,MA:23
,SAL:24,MON:25,AU:26,PIE:27,CHI:28,ROM:29,MAR:30,WP:31,BB:32,DA:33,AA:34,HE:35,SH:
36,HLD:37,WB:38,GAL:39,LR:40,BGA:41,LG:42,BRA:43,NOR:44,UST:45,ZEB:46,GRV:47,DEX:
48,WGA:49,LH:50,SD:51,FR:52,TUX:53,TLM:54,FLF:55,UCK:56,BLA:57,WIT:58,LAK:59,RHV:
60,AT:61,GR:62,PIF:63,PS:64,GVF:65,BVF:66,RBF:67,HWF:68,MWF:69,VWF:70,LPF:71,BRN:
72,BAZ:73,AO:74,BE:75,WL:76,BIS:77,YAK:78,SON:79,TAU:80,IND:81,TIN:82,WAG:83,XFF:
84,XFM:85,XMM:86,EVO:87,BLH:88,TLH:89,MGR:90,WSH:91,MUR:92,EBS:93,ERI:94,PAR:95,
XZF:96,XZM:97,XZZ:98,LAST:99};C.BreedToString={BH:function(A5){var Bv=A5;var BJ=
A.jV;switch(Bv){case 0:BJ=A.aaR(A.acf.Unknown);break;case 1:BJ=A.aaR(A.ack.SBT);
break;case 2:BJ=A.aaR(A.ack.RBT);break;case 3:BJ=A.aaR(A.ack.JER);break;case 4:BJ=
A.aaR(A.ack.BV);break;case 5:BJ=A.aaR(A.ack.RVA);break;case 6:BJ=A.aaR(A.ack.RV);
break;case 7:BJ=A.aaR(A.ack.RDN);break;case 8:BJ=A.aaR(A.ack.DSN);break;case 9:BJ=
A.aaR(A.ack.FL);break;case 10:BJ=A.aaR(A.ack.GV);break;case 11:BJ=A.aaR(A.ack.PIN
);break;case 12:BJ=A.aaR(A.ack.HIN);break;case 13:BJ=A.aaR(A.ack.MW);break;case 14:
BJ=A.aaR(A.ack.VW);break;case 15:BJ=A.aaR(A.ack.LMP);break;case 16:BJ=A.aaR(A.ack.
DBV);break;case 17:BJ=A.aaR(A.ack.AS);break;case 18:BJ=A.aaR(A.ack.VR);break;case
19:BJ=A.aaR(A.ack.CHA);break;case 20:BJ=A.aaR(A.ack.LIM);break;case 21:BJ=A.aaR(
A.ack.WBB);break;case 22:BJ=A.aaR(A.ack.BA);break;case 23:BJ=A.aaR(A.ack.MA);break;
case 24:BJ=A.aaR(A.ack.SAL);break;case 25:BJ=A.aaR(A.ack.MON);break;case 26:BJ=A.
aaR(A.ack.AU);break;case 27:BJ=A.aaR(A.ack.PIE);break;case 28:BJ=A.aaR(A.ack.CHI
);break;case 29:BJ=A.aaR(A.ack.ROM);break;case 30:BJ=A.aaR(A.ack.MAR);break;case
31:BJ=A.aaR(A.ack.WP);break;case 32:BJ=A.aaR(A.ack.BB);break;case 33:BJ=A.aaR(A.
ack.DA);break;case 34:BJ=A.aaR(A.ack.AA);break;case 35:BJ=A.aaR(A.ack.HE);break;
case 36:BJ=A.aaR(A.ack.SH);break;case 37:BJ=A.aaR(A.ack.HLD);break;case 38:BJ=A.
aaR(A.ack.WB);break;case 39:BJ=A.aaR(A.ack.GAL);break;case 40:BJ=A.aaR(A.ack.LR);
break;case 41:BJ=A.aaR(A.ack.BGA);break;case 42:BJ=A.aaR(A.ack.LG);break;case 43:
BJ=A.aaR(A.ack.BRA);break;case 44:BJ=A.aaR(A.ack.NOR);break;case 45:BJ=A.aaR(A.ack.
UST);break;case 46:BJ=A.aaR(A.ack.ZEB);break;case 47:BJ=A.aaR(A.ack.GRV);break;case
48:BJ=A.aaR(A.ack.DEX);break;case 49:BJ=A.aaR(A.ack.WGA);break;case 50:BJ=A.aaR(
A.ack.LH);break;case 51:BJ=A.aaR(A.ack.SD);break;case 52:BJ=A.aaR(A.ack.FR);break;
case 53:BJ=A.aaR(A.ack.TUX);break;case 54:BJ=A.aaR(A.ack.TLM);break;case 55:BJ=A.
aaR(A.ack.FLF);break;case 56:BJ=A.aaR(A.ack.UCK);break;case 57:BJ=A.aaR(A.ack.BLA
);break;case 58:BJ=A.aaR(A.ack.WIT);break;case 59:BJ=A.aaR(A.ack.LAK);break;case
60:BJ=A.aaR(A.ack.RHV);break;case 61:BJ=A.aaR(A.ack.AT);break;case 62:BJ=A.aaR(A.
ack.GR);break;case 63:BJ=A.aaR(A.ack.PIF);break;case 64:BJ=A.aaR(A.ack.PS);break;
case 65:BJ=A.aaR(A.ack.GVF);break;case 66:BJ=A.aaR(A.ack.BVF);break;case 67:BJ=A.
aaR(A.ack.RBF);break;case 68:BJ=A.aaR(A.ack.HWF);break;case 69:BJ=A.aaR(A.ack.MWF
);break;case 70:BJ=A.aaR(A.ack.VWF);break;case 71:BJ=A.aaR(A.ack.LPF);break;case
72:BJ=A.aaR(A.ack.BRN);break;case 73:BJ=A.aaR(A.ack.BAZ);break;case 74:BJ=A.aaR(
A.ack.AO);break;case 75:BJ=A.aaR(A.ack.BE);break;case 76:BJ=A.aaR(A.ack.WL);break;
case 77:BJ=A.aaR(A.ack.BIS);break;case 78:BJ=A.aaR(A.ack.YAK);break;case 79:BJ=A.
aaR(A.ack.SON);break;case 80:BJ=A.aaR(A.ack.TAU);break;case 81:BJ=A.aaR(A.ack.IND
);break;case 82:BJ=A.aaR(A.ack.TIN);break;case 83:BJ=A.aaR(A.ack.WAG);break;case
84:BJ=A.aaR(A.ack.XFF);break;case 85:BJ=A.aaR(A.ack.XFM);break;case 86:BJ=A.aaR(
A.ack.XMM);break;case 87:BJ=A.aaR(A.ack.EVO);break;case 88:BJ=A.ack.BLH;break;case
89:BJ=A.ack.TLH;break;case 90:BJ=A.ack.MGR;break;case 91:BJ=A.ack.WSH;break;case
92:BJ=A.ack.MUR;break;case 93:BJ=A.aaR(A.ack.EBS);break;case 94:BJ=A.aaR(A.ack.ERI
);break;case 95:BJ=A.aaR(A.ack.PAR);break;case 96:BJ=A.aaR(A.ack.XZF);break;case
97:BJ=A.aaR(A.ack.XZM);break;case 98:BJ=A.aaR(A.ack.XZZ);break;default:throw new
Error(Ayt+Bv.toFixed());}return BJ;},_Init:function(aArg){C.EnumToString._Init.call(
this,aArg);this.__proto__=C.BreedToString;},_className:"Device::BreedToString"};
C.TG={timer:null,Q:null,Ec:0,Dw:0,JN:0,Pp:1000,Py:1000,Bw:false,Cx:false,B2:true
,Me:function(G){var F;if(!this.timer)return;if(this.Ec<0){this.Dw=this.timer.Bs;
this.Ec=0;}var Au=(this.timer.Bs-this.Dw)|0;var Oo=this.Pp;var He=this.Py+this.Pp;
var LE=0;var Jj=this.Ec;if(!Jj&&(Au>=Oo)){Jj=1;Au=Au-Oo;}if((Jj>0)&&(Au>=He)){var
Ie=(Au/He)|0;Au=Au-(Ie*He);Jj=Jj+Ie;}if((Jj>2)&&!this.JN)Jj=1;if(Jj!==this.Ec){this.
Dw=this.timer.Bs-(((B=Au)<0)?B+0x100000000:B);this.Ec=Jj;}if(Jj>0)LE=this.Py;var
KC=(Jj>=this.JN)&&(this.JN>0);if(!!this.Q){if((!KC&&(Au>=LE))&&((F=this.Q,F[1].call(
F[0]))!==this.Cx))(F=this.Q,F[2].call(F[0],this.Cx));if((KC||((Au<LE)&&(Jj>0)))&&((
F=this.Q,F[1].call(F[0]))!==this.B2))(F=this.Q,F[2].call(F[0],this.B2));}if(KC)this.
Ar(false);},HO:function(E){if(E<0)E=0;this.JN=E;},Fp:function(E){if(E<100)E=100;
this.Pp=E;},Un:function(E){if(E<0)E=0;this.Py=E;},Ar:function(E){if(this.Bw===E)
return;this.Bw=E;if(!E&&!!this.timer){A.z9([this,this.Me],this.timer,0);this.timer=
null;}if(E){this.timer=A._GetAutoObject(A.acl.Aeh);A.zV([this,this.Me],this.timer
,0);this.Ec=-1;}},_Init:function(aArg){this.__proto__=C.TG;A.h7++;},_Done:function(
){this.__proto__=null;A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((
B=this.timer)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Q)&&((B=B[0])._cycle
!=D))B._Mark(B._cycle=D);if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null
,_cycle:0,_observers:null,_className:"Device::BoolEffect"};C.Ii={AnimalId:0,TransponderId:
1,BEg:2,BEf:3,BEj:4,BEi:5};C.AuZ={BCI:0,BDf:1};C.AnimalIdGenerationMethodToString={
BH:function(A5){var Alv=A5;var Ao2=A.jV;switch(Alv){case 0:Ao2=A.aaR(A.acf.Ug);break;
case 1:Ao2=A.aaR(A.acf.Transponder);break;case 3:Ao2=(A.aaR(A.acf.Manual)+N$)+A.
aaR(A.acf.Male);break;case 2:Ao2=(A.aaR(A.acf.Manual)+N$)+A.aaR(A.acf.Female);break;
case 4:Ao2=(A.aaR(A.acf.Manual)+N$)+A.aaR(A.acf.Unknown);break;case 5:Ao2=(A.aaR(
A.acf.Manual)+N$)+AY5;break;default:throw new Error(AY6+Alv.toFixed());}return Ao2;
},_Init:function(aArg){C.EnumToString._Init.call(this,aArg);this.__proto__=C.AnimalIdGenerationMethodToString;
},_className:"Device::AnimalIdGenerationMethodToString"};C.DirectionOfCountingToString={
BH:function(A5){var AzA=A5;var A1B=A.jV;switch(AzA){case 0:A1B=AY7;break;case 1:
A1B=AY8;break;default:throw new Error(AY9+AzA.toFixed());}return A1B;},_Init:function(
aArg){C.EnumToString._Init.call(this,aArg);this.__proto__=C.DirectionOfCountingToString;
},_className:"Device::DirectionOfCountingToString"};C.EnumToIcon={AsL:function(A5
){throw new Error(Aot+A5.toFixed());},AsM:function(A5){throw new Error(Aot+A5.toFixed(
));},_Init:function(aArg){this.__proto__=C.EnumToIcon;A.h7++;},_Done:function(){
this.__proto__=null;A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((B=
this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:
"Device::EnumToIcon"};C.Aeg={AsL:function(A5){return A.aaL(A.ach.AUO);},AsM:function(
A5){var AzA=A5;var RF=-1;switch(AzA){case 0:RF=3;break;case 1:RF=2;break;default:
throw new Error(AIt+AzA.toFixed());}return RF;},_Init:function(aArg){C.EnumToIcon.
_Init.call(this,aArg);this.__proto__=C.Aeg;},_className:"Device::DirectionOfCountingToIcon"
};C.AdX={AsL:function(A5){return A.aaL(A.ach.AUM);},AsM:function(A5){var Alv=A5;
var RF=-1;switch(Alv){case 0:RF=0;break;case 1:RF=6;break;case 3:RF=4;break;case
2:RF=5;break;case 4:RF=2;break;case 5:RF=3;break;default:throw new Error(AIt+Alv.
toFixed());}return RF;},_Init:function(aArg){C.EnumToIcon._Init.call(this,aArg);
this.__proto__=C.AdX;},_className:"Device::AnimalIdGenerationMethodToIcon"};C.Pu={
UNDEFINED:0,SH:1,AOT:2,ARD:3,AOS:4,A7B:5,HE:6,A_K:7,A44:8,AMK:9,AUg:10,BE:11,BB:
12,A7o:13,AUh:14,AUi:15,AUT:16};C.GermanStateToString={BH:function(A5){var Bp=A5;
var GF=A.jV;switch(Bp){case 1:GF=A.aaR(A.acp.SH);break;case 2:GF=A.aaR(A.acp.AOT
);break;case 3:GF=A.aaR(A.acp.ARD);break;case 4:GF=A.aaR(A.acp.AOS);break;case 5:
GF=A.aaR(A.acp.A7B);break;case 6:GF=A.aaR(A.acp.HE);break;case 7:GF=A.aaR(A.acp.
A_K);break;case 8:GF=A.aaR(A.acp.A44);break;case 9:GF=A.aaR(A.acp.AMK);break;case
10:GF=A.aaR(A.acp.AUg);break;case 11:GF=A.aaR(A.acp.BE);break;case 12:GF=A.aaR(A.
acp.BB);break;case 13:GF=A.aaR(A.acp.A7o);break;case 14:GF=A.aaR(A.acp.AUh);break;
case 15:GF=A.aaR(A.acp.AUi);break;case 16:GF=A.aaR(A.acp.AUT);break;case 0:GF=All;
break;default:throw new Error(Ah4+Bp.toFixed());}return GF;},Lt:function(A5){var
Bp=A5;var GF=A.jV;switch(Bp){case 1:GF=A.aaR(A.acp.Bn_);break;case 2:GF=A.aaR(A.
acp.AOT);break;case 3:GF=A.aaR(A.acp.ARD);break;case 4:GF=A.aaR(A.acp.AOS);break;
case 5:GF=A.aaR(A.acp.BjP);break;case 6:GF=A.aaR(A.acp.HE);break;case 7:GF=A.aaR(
A.acp.BnP);break;case 8:GF=A.aaR(A.acp.Bg1);break;case 9:GF=A.aaR(A.acp.AMK);break;
case 10:GF=A.aaR(A.acp.AUg);break;case 11:GF=A.aaR(A.acp.BE);break;case 12:GF=A.
aaR(A.acp.BB);break;case 13:GF=A.aaR(A.acp.BjB);break;case 14:GF=A.aaR(A.acp.AUh
);break;case 15:GF=A.aaR(A.acp.AUi);break;case 16:GF=A.aaR(A.acp.AUT);break;case
0:GF=All;break;default:throw new Error(Ah4+Bp.toFixed());}return GF;},Bpq:function(
A5){var Bp=A5;var Gj=-1;switch(Bp){case 0:Gj=0;break;case 1:Gj=1;break;case 2:Gj=
2;break;case 3:Gj=3;break;case 4:Gj=4;break;case 5:Gj=5;break;case 6:Gj=6;break;
case 7:Gj=7;break;case 8:Gj=8;break;case 9:Gj=9;break;case 10:Gj=10;break;case 11:
Gj=11;break;case 12:Gj=12;break;case 13:Gj=13;break;case 14:Gj=14;break;case 15:
Gj=15;break;case 16:Gj=16;break;default:throw new Error(Ah4+Bp.toFixed());}return Gj;
},Bpr:function(A5){var Bp=A5;var Gj=A.jV;switch(Bp){case 1:Gj=Atb;break;case 2:Gj=
Atc;break;case 3:Gj=Atd;break;case 4:Gj=Ayu;break;case 5:Gj=AoB;break;case 6:Gj=
AY_;break;case 7:Gj=AY$;break;case 8:Gj=AZa;break;case 9:Gj=AZb;break;case 10:Gj=
AZc;break;case 11:Gj=US;break;case 12:Gj=AZd;break;case 13:Gj=AZe;break;case 14:
Gj=AZf;break;case 15:Gj=AZg;break;case 16:Gj=AZh;break;case 0:Gj=All;break;default:
throw new Error(Ah4+Bp.toFixed());}return Gj;},_Init:function(aArg){C.EnumToString.
_Init.call(this,aArg);this.__proto__=C.GermanStateToString;},_className:"Device::GermanStateToString"
};C.EartagNrAssignmentMode={OneSingleRange:0,TwoNumberRanges:1,LAST:2};C.EartagNrAssignmentModeToString={
Lt:function(A5){var Vf=A5;var Nt=A.jV;switch(Vf){case 0:Nt=AZi;break;case 1:Nt=AZj;
break;default:throw new Error(AIu+Vf.toFixed());}return Nt;},BH:function(A5){var
Vf=A5;var Nt=A.jV;switch(Vf){case 0:Nt=A.aaR(A.acf.Bnx);break;case 1:Nt=A.aaR(A.
acf.BpF);break;default:throw new Error(AIu+Vf.toFixed());}return Nt;},_Init:function(
aArg){C.EnumToString._Init.call(this,aArg);this.__proto__=C.EartagNrAssignmentModeToString;
},_className:"Device::EartagNrAssignmentModeToString"};C.BCB={BEx:0,BEn:1,BDw:2,
BDx:3,BDy:4,BFx:5};C.EnumToCodeset={AmG:function(Ah7){throw new Error(AZk+Ah7.toFixed(
));},Aej:function(A5){throw new Error(Aot+A5.toFixed());},AqY:function(){A.ab5("%s"
,AIv);return 0;},HK:function(){A.ab5("%s",AIv);return 0;},_Init:function(aArg){this.
__proto__=C.EnumToCodeset;A.h7++;},_Done:function(){this.__proto__=null;A.h7--;}
,_ReInit:function(){},_Mark:function(D){var B;if((B=this.I)&&(B._cycle!=D))B._Mark(
B._cycle=D);},I:null,_cycle:0,_observers:null,_className:"Device::EnumToCodeset"
};C.M0={AmG:function(Ah7){var Bv;switch(Ah7){case 1:Bv=1;break;case 2:Bv=2;break;
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
Bv=0;}return Bv;},Aej:function(A5){var Bv=A5;var BL=0;switch(Bv){case 0:BL=0;break;
case 1:BL=1;break;case 2:BL=2;break;case 3:BL=3;break;case 4:BL=4;break;case 5:BL=
5;break;case 6:BL=6;break;case 7:BL=9;break;case 8:BL=10;break;case 9:BL=11;break;
case 10:BL=12;break;case 11:BL=13;break;case 12:BL=14;break;case 13:BL=15;break;
case 14:BL=16;break;case 15:BL=17;break;case 16:BL=18;break;case 17:BL=19;break;
case 18:BL=20;break;case 19:BL=21;break;case 20:BL=22;break;case 21:BL=23;break;
case 22:BL=24;break;case 23:BL=25;break;case 24:BL=26;break;case 25:BL=27;break;
case 26:BL=28;break;case 27:BL=31;break;case 28:BL=32;break;case 29:BL=33;break;
case 30:BL=34;break;case 31:BL=35;break;case 32:BL=36;break;case 33:BL=41;break;
case 34:BL=42;break;case 35:BL=43;break;case 36:BL=44;break;case 37:BL=45;break;
case 38:BL=46;break;case 39:BL=47;break;case 40:BL=48;break;case 41:BL=49;break;
case 42:BL=50;break;case 43:BL=51;break;case 44:BL=52;break;case 45:BL=53;break;
case 46:BL=54;break;case 47:BL=55;break;case 48:BL=56;break;case 49:BL=57;break;
case 50:BL=58;break;case 51:BL=59;break;case 52:BL=60;break;case 53:BL=61;break;
case 54:BL=65;break;case 55:BL=66;break;case 56:BL=67;break;case 57:BL=68;break;
case 58:BL=69;break;case 59:BL=70;break;case 60:BL=71;break;case 61:BL=72;break;
case 62:BL=73;break;case 63:BL=74;break;case 64:BL=75;break;case 65:BL=76;break;
case 66:BL=77;break;case 67:BL=78;break;case 68:BL=79;break;case 69:BL=80;break;
case 70:BL=81;break;case 71:BL=82;break;case 72:BL=83;break;case 73:BL=84;break;
case 74:BL=85;break;case 75:BL=86;break;case 76:BL=87;break;case 77:BL=88;break;
case 78:BL=89;break;case 79:BL=90;break;case 80:BL=91;break;case 81:BL=92;break;
case 82:BL=93;break;case 83:BL=94;break;case 84:BL=97;break;case 85:BL=98;break;
case 86:BL=99;break;case 87:BL=100;break;case 88:BL=101;break;case 89:BL=102;break;
case 90:BL=103;break;case 91:BL=104;break;case 92:BL=105;break;case 93:BL=106;break;
case 94:BL=107;break;case 95:BL=108;break;case 96:BL=109;break;case 97:BL=110;break;
case 98:BL=111;break;default:throw new Error(Ayv+Bv.toFixed());}return BL;},AqY:
function(){return 0;},HK:function(){return 111;},_Init:function(aArg){C.EnumToCodeset.
_Init.call(this,aArg);this.__proto__=C.M0;},_className:"Device::BreedToHitCodeset"
};C.ReasonOfLeaving={Unknown:0,A$f:1,RP:2,A_E:3,A62:4,BEG:5,A$u:6,A7x:7,A5l:8,A_A:
9,A7v:10,A5p:11,BEW:12,BEX:13,LAST:14};C.ReasonOfLeavingToString={BH:function(A5
){var AdC=A5;var Tq=A.jV;switch(AdC){case 0:Tq=A.aaR(A.acf.Unknown);break;case 1:
Tq=A.aaR(A.acf.A$f);break;case 2:Tq=A.aaR(A.acf.RP);break;case 3:Tq=A.aaR(A.acf.
A_E);break;case 4:Tq=A.aaR(A.acf.A62);break;case 5:Tq=A.aaR(A.acf.Bny);break;case
6:Tq=A.aaR(A.acf.A$u);break;case 7:Tq=A.aaR(A.acf.A7x);break;case 8:Tq=A.aaR(A.acf.
A5l);break;case 9:Tq=A.aaR(A.acf.A_A);break;case 10:Tq=A.aaR(A.acf.A7v);break;case
11:Tq=A.aaR(A.acf.A5p);break;case 12:Tq=A.aaR(A.acf.BnJ);break;case 13:Tq=A.aaR(
A.acf.BnI);break;default:throw new Error(AZl+AdC.toFixed());}return Tq;},_Init:function(
aArg){C.EnumToString._Init.call(this,aArg);this.__proto__=C.ReasonOfLeavingToString;
},_className:"Device::ReasonOfLeavingToString"};C.Ahz={AmG:function(Ah7){var Pd;
switch(Ah7){case 1:Pd=1;break;case 2:Pd=2;break;case 3:Pd=3;break;case 4:Pd=4;break;
case 5:Pd=5;break;case 6:Pd=6;break;case 7:Pd=7;break;case 8:Pd=8;break;case 9:Pd=
9;break;case 10:Pd=10;break;case 11:Pd=11;break;case 12:Pd=12;break;case 13:Pd=13;
break;default:Pd=0;}return Pd;},Aej:function(A5){var Pd=A5;var Ji=0;switch(Pd){case
0:Ji=0;break;case 2:Ji=2;break;case 8:Ji=8;break;case 11:Ji=11;break;case 4:Ji=4;
break;case 10:Ji=10;break;case 7:Ji=7;break;case 5:Ji=5;break;case 9:Ji=9;break;
case 3:Ji=3;break;case 12:Ji=12;break;case 13:Ji=13;break;case 1:Ji=1;break;case
6:Ji=6;break;default:throw new Error(Ate+Pd.toFixed());}return Ji;},AqY:function(
){return 0;},HK:function(){return 13;},_Init:function(aArg){C.EnumToCodeset._Init.
call(this,aArg);this.__proto__=C.Ahz;},_className:"Device::ReasonOfLeavingToCodeset"
};C.KY={AmG:function(Ah7){var K9;switch(Ah7){case 1:K9=1;break;case 2:K9=2;break;
case 3:K9=3;break;case 4:K9=4;break;case 5:K9=5;break;case 6:K9=6;break;case 7:K9=
7;break;case 8:K9=8;break;case 9:K9=9;break;case 10:K9=10;break;default:K9=0;}return K9;
},Aej:function(A5){var K9=A5;var Ji=0;switch(K9){case 0:Ji=0;break;case 2:Ji=2;break;
case 1:Ji=1;break;case 9:Ji=9;break;case 6:Ji=6;break;case 8:Ji=8;break;case 7:Ji=
7;break;case 5:Ji=5;break;case 10:Ji=10;break;case 4:Ji=4;break;case 3:Ji=3;break;
default:throw new Error(Ate+K9.toFixed());}return Ji;},AqY:function(){return 0;}
,HK:function(){return 10;},_Init:function(aArg){C.EnumToCodeset._Init.call(this,
aArg);this.__proto__=C.KY;},_className:"Device::WhereAboutsToCodeset"};C.AmO={_Init:
function(aArg){this.__proto__=C.AmO;A.h7++;},_Done:function(){this.__proto__=null;
A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((B=this.I)&&(B._cycle!=
D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:"Device::EmptyClass"
};C.CalfDeregistrationsTableFields={Year:0,Deregistrations:1,Deaths:2};C.CalfDeregistrations={
Deregistrations:0,Deaths:0,Year:0,EU:function(Ad,AH){var HF=C.Row.EU.call(this,Ad
,AH);if(HF&&!!AH){this.AkK(AH.CF(Ad,0));this.Awy(AH.CF(Ad,1));this.Awx(AH.CF(Ad,
2));}return HF;},Cg:function(AH){var HF=C.Row.Cg.call(this,AH);if(HF&&!!AH){var Jm=
AH.Ox();if(Jm<=0)A.ab5("%s",Xf);else{if(this.Am8())this.CL=AH.YJ();AH.Hm(this.CL
,0,this.Year);AH.Hm(this.CL,1,this.Deregistrations);AH.Hm(this.CL,2,this.Deaths);
AH.Oz(Jm);}}return HF;},Gr:function(){C.Row.Gr.call(this);this.AkK(-1);},EX:function(
){C.Row.EX.call(this);this.AkK(0);this.Awy(0);this.Awx(0);},Awy:function(E){if(this.
Deregistrations===E)return;this.Deregistrations=E;A.abo([this,this.Bkp,this.Awy]
,0);},Awx:function(E){if(this.Deaths===E)return;this.Deaths=E;A.abo([this,this.Bkn
,this.Awx],0);},AkK:function(E){if(this.Year===E)return;this.Year=E;A.abo([this,
this.ArF,this.AkK],0);},Bkp:function(){return this.Deregistrations;},Bkn:function(
){return this.Deaths;},ArF:function(){return this.Year;},_Init:function(aArg){C.
Row._Init.call(this,aArg);this.__proto__=C.CalfDeregistrations;this.TableId=4;},
_className:"Device::CalfDeregistrations"};C.AuX={Undefined:0,Display:1,A_J:2,A_W:
3,A$N:4,BDQ:5,BE8:6,BFI:7,BEe:8,BC4:9,BCq:10,A6o:11,A_L:12,BFS:13,A7A:14,BFV:15};
C.DeviceComponentToString={BH:function(A5){var Bcz=A5;var Qh=A.jV;switch(Bcz){case
0:Qh=Ayw;break;case 10:Qh=A.aaR(A.acf.BgB);break;case 9:Qh=A.aaR(A.acf.Bhg);break;
case 1:Qh=A.aaR(A.acf.BhY);break;case 11:Qh=A.aaR(A.acf.A6o);break;case 5:Qh=A.aaR(
A.acf.BpZ);break;case 8:Qh=A.aaR(A.acf.Bh0);break;case 14:Qh=A.aaR(A.acf.A7A);break;
case 2:Qh=A.aaR(A.acf.A_J);break;case 12:Qh=A.aaR(A.acf.A_L);break;case 6:Qh=A.aaR(
A.acf.BnO);break;case 3:Qh=A.aaR(A.acf.A_W);break;case 7:Qh=A.aaR(A.acf.Bh1);break;
case 13:Qh=A.aaR(A.acf.BhH);break;case 15:Qh=A.aaR(A.acf.Bp3);break;case 4:Qh=A.
aaR(A.acf.A$N);break;default:throw new Error(AZm+Bcz.toFixed());}return Qh;},_Init:
function(aArg){C.EnumToString._Init.call(this,aArg);this.__proto__=C.DeviceComponentToString;
},_className:"Device::DeviceComponentToString"};C.AgQ={AmG:function(Ah7){return Ah7;
},Aej:function(A5){return A5;},AqY:function(){return 0;},HK:function(){return 4;
},_Init:function(aArg){C.EnumToCodeset._Init.call(this,aArg);this.__proto__=C.AgQ;
},_className:"Device::EaseOfDeliveryToCodeset"};C.AeR={AsL:function(A5){return A.
aaL(A.ach.AP1);},AsM:function(A5){var BcL=A5;var RF=-1;switch(BcL){case 0:RF=0;break;
case 1:RF=1;break;case 2:RF=2;break;default:throw new Error(AZn+BcL.toFixed());}
return RF;},_Init:function(aArg){C.EnumToIcon._Init.call(this,aArg);this.__proto__=
C.AeR;},_className:"Device::MotherSelectionFilterModeToIcon"};C.WhereAboutsFilterCriterion={
A4:0,Abm:function(){var Av=A._NewObject(C.WhereAboutsFilterCriterion,0);Av.E$(this
);return Av;},E$:function(AI){C.FilterCriterion.E$.call(this,AI);var Av=(C.WhereAboutsFilterCriterion.
isPrototypeOf(AI)?AI:null);if(!!Av)this.A4=Av.A4;},Initialize:function(A3,Eb,A8,
Qa){this.EJ=A3;this.Operator=Eb;this.A4=A8;this.YM=Qa;return this;},_Init:function(
aArg){C.FilterCriterion._Init.call(this,aArg);this.__proto__=C.WhereAboutsFilterCriterion;
},_className:"Device::WhereAboutsFilterCriterion"};C.BEq={ANU:0,BC$:1,APE:2,LAST:
3};C.BFz={GK:0,AVx:1,Hi:2,Year:3,LAST:4};C.TimespanDaysToString={BH:function(A5){
var Bf_=A5;var ABh=A.jV;switch(Bf_){case 0:ABh=A.aaR(A.acf.A5D);break;case 1:ABh=
A.aaR(A.acf.AVx);break;case 2:ABh=A.aaR(A.acf.Hi);break;case 3:ABh=A.aaR(A.acf.Year
);break;default:throw new Error(AZo+Bf_.toFixed());}return ABh;},_Init:function(
aArg){C.EnumToString._Init.call(this,aArg);this.__proto__=C.TimespanDaysToString;
},_className:"Device::TimespanDaysToString"};C.AhS={BED:0,BDg:1,BDW:2,BDZ:3,BDY:
4,BDh:5,BDX:6,LAST:7};C.USBStateToString={BH:function(A5){var Bgv=A5;var Bp=A.jV;
switch(Bgv){case 0:Bp=AIw;break;case 2:Bp=AZp;break;case 1:Bp=AZq;break;case 5:Bp=
AZr;break;case 3:Bp=AZs;break;case 4:Bp=AZt;break;case 6:Bp=AZu;break;default:throw new
Error(AHR+Bgv.toFixed());}return Bp;},_Init:function(aArg){C.EnumToString._Init.
call(this,aArg);this.__proto__=C.USBStateToString;},_className:"Device::USBStateToString"
};C.AgK={BDU:0,BCC:1,BDV:2,BDS:3};C.AxC={ACk:A.jV,Timestamp:0,AD8:0,AEb:0,AGn:0,
OnSetTimestamp:function(E){if(this.Timestamp===E)return;this.Timestamp=E;},AFl:function(
E){if(this.AD8===E)return;this.AD8=E;},AFr:function(E){if(this.AEb===E)return;this.
AEb=E;},AFA:function(E){if(this.AGn===E)return;this.AGn=E;},AE1:function(E){if(this.
ACk===E)return;this.ACk=E;},_Init:function(aArg){this.__proto__=C.AxC;A.h7++;},_Done:
function(){this.__proto__=null;A.h7--;},_ReInit:function(){},_Mark:function(D){var
B;if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:
null,_className:"Device::SoftwareVersionInformation"};C.Avq={Timestamp:0,ARr:0,ARs:
0,AVa:0,AVb:0,AU$:0,ARq:0,OnSetTimestamp:function(E){if(this.Timestamp===E)return;
this.Timestamp=E;},AFi:function(E){if(this.ARr===E)return;this.ARr=E;},AFj:function(
E){if(this.ARs===E)return;this.ARs=E;},AFP:function(E){if(this.AVa===E)return;this.
AVa=E;},AFQ:function(E){if(this.AVb===E)return;this.AVb=E;},AFO:function(E){if(this.
AU$===E)return;this.AU$=E;},AFh:function(E){if(this.ARq===E)return;this.ARq=E;},
_Init:function(aArg){this.__proto__=C.Avq;A.h7++;},_Done:function(){this.__proto__=
null;A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((B=this.I)&&(B._cycle
!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:"Device::HardwareVersionInformation"
};C.Aqv={Undefined:0,BDH:1,BCQ:2};C.Agx={Manual:0,TransponderId:1,LAST:2};C.AnimalIdAutoGenerationMethodToString={
BH:function(A5){var Bb7=A5;var A06=A.jV;switch(Bb7){case 0:A06=A.aaR(A.acf.A5t);
break;case 1:A06=A.aaR(A.acf.A5J);break;default:throw new Error(AZv+Bb7.toFixed(
));}return A06;},_Init:function(aArg){C.EnumToString._Init.call(this,aArg);this.
__proto__=C.AnimalIdAutoGenerationMethodToString;},_className:"Device::AnimalIdAutoGenerationMethodToString"
};C.Hi={A5c:0,ADX:1,ACH:2,AD9:3,ABJ:4,AD$:5,ADZ:6,ADY:7,ABQ:8,AGv:9,AEl:10,AEj:11
,ACs:12,LAST:13};C.MonthToString={BH:function(A5){var BdN=A5;var XE=A.jV;switch(
BdN){case 1:XE=A.aaR(A.act.ADX);break;case 2:XE=A.aaR(A.act.ACH);break;case 3:XE=
A.aaR(A.act.AD9);break;case 4:XE=A.aaR(A.act.ABJ);break;case 5:XE=A.aaR(A.act.AD$
);break;case 6:XE=A.aaR(A.act.ADZ);break;case 7:XE=A.aaR(A.act.ADY);break;case 8:
XE=A.aaR(A.act.ABQ);break;case 9:XE=A.aaR(A.act.AGv);break;case 10:XE=A.aaR(A.act.
AEl);break;case 11:XE=A.aaR(A.act.AEj);break;case 12:XE=A.aaR(A.act.ACs);break;default:
throw new Error(AZw+BdN.toFixed());}return XE;},_Init:function(aArg){C.EnumToString.
_Init.call(this,aArg);this.__proto__=C.MonthToString;},_className:"Device::MonthToString"
};C.TL={FileName:A.jV,Axr:0,EY:0,AgK:0,EX:function(){this.EW(0);this.AgK=1;this.
FileName=A.jV;this.Axr=0;},EW:function(E){if(this.EY===E)return;this.EY=E;A.abo([
this,this.Q1,this.EW],0);},Q1:function(){return this.EY;},_Init:function(aArg){this.
__proto__=C.TL;A.h7++;},_Done:function(){this.__proto__=null;A.h7--;},_ReInit:function(
){},_Mark:function(D){var B;if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:
null,_cycle:0,_observers:null,_className:"Device::DataExportContext"};C.AVE={Init:
function(aArg){var B;A.zX([this,this.Be3],[B=A._GetAutoObject(C.Device),B.A8_,B.
Bba],0);this.Be3(this);},Cg:function(){A._GetAutoObject(C.Device).Asd(this.toString(
));},Be3:function(G){this.EU(A._GetAutoObject(C.Device).AHc);A.we(this,0);},_Init:
function(aArg){C.Int32ArrayWrapper._Init.call(this,aArg);this.__proto__=C.AVE;this.
ZC(3);this.Init(aArg);},_className:"Device::WeightGainsLowClass"};C.AVD={Init:function(
aArg){var B;A.zX([this,this.Be1],[B=A._GetAutoObject(C.Device),B.A89,B.Ba$],0);this.
Be1(this);},Cg:function(){A._GetAutoObject(C.Device).Asc(this.toString());},Be1:
function(G){this.EU(A._GetAutoObject(C.Device).AHb);A.we(this,0);},_Init:function(
aArg){C.Int32ArrayWrapper._Init.call(this,aArg);this.__proto__=C.AVD;this.ZC(3);
this.Init(aArg);},_className:"Device::WeightGainsHighClass"};C.AVG={Init:function(
aArg){var B;A.zX([this,this.Be5],[B=A._GetAutoObject(C.Device),B.A9b,B.Bbd],0);this.
Be5(this);},Cg:function(){A._GetAutoObject(C.Device).Ase(this.toString());},Be5:
function(G){this.EU(A._GetAutoObject(C.Device).AHf);A.we(this,0);},_Init:function(
aArg){C.Int32ArrayWrapper._Init.call(this,aArg);this.__proto__=C.AVG;this.ZC(3);
this.Init(aArg);},_className:"Device::WeightValuesBirthClass"};C.AVC={Init:function(
aArg){var B;A.zX([this,this.BeZ],[B=A._GetAutoObject(C.Device),B.A88,B.Ba_],0);this.
BeZ(this);},Cg:function(){A._GetAutoObject(C.Device).Asb(this.toString());},BeZ:
function(G){this.EU(A._GetAutoObject(C.Device).AHa);A.we(this,0);},_Init:function(
aArg){C.Int32ArrayWrapper._Init.call(this,aArg);this.__proto__=C.AVC;this.ZC(3);
this.Init(aArg);},_className:"Device::WeightGainsAverageClass"};C.AMA={Init:function(
aArg){var B;A.zX([this,this.Bei],[B=A._GetAutoObject(C.Device),B.A8e,B.BaL],0);this.
Bei(this);},Bei:function(G){this.EU(A._GetAutoObject(C.Device).ABI);A.we(this,0);
},_Init:function(aArg){C.Int32ArrayWrapper._Init.call(this,aArg);this.__proto__=
C.AMA;this.ZC(3);this.Init(aArg);},_className:"Device::AnimalTypesWeightGainsClass"
};C.BEt={BEw:0,BEk:1,BC_:2,BFT:3,Unknown:4};C.BCO={None:0,BEE:1,BEy:2,BEu:3,BEv:
4};C.BFN={A7P:0,Manual:1,TransponderId:2,NaisId:3,LAST:4};C.TransponderLinkageIdChangeMethodToString={
BH:function(A5){var Bgc=A5;var ABj=A.jV;switch(Bgc){case 0:ABj=A.aaR(A.acf.A7P);
break;case 1:ABj=A.aaR(A.acf.A5t);break;case 2:ABj=A.aaR(A.acf.A5J);break;case 3:
ABj=A.aaR(A.acf.BhF);break;default:throw new Error(AIx+Bgc.toFixed());}return ABj;
},_Init:function(aArg){C.EnumToString._Init.call(this,aArg);this.__proto__=C.TransponderLinkageIdChangeMethodToString;
},_className:"Device::TransponderLinkageIdChangeMethodToString"};C.A_B={BAW:function(
AoN){var Ka=A.ab0(A.abV(AoN,15),0,10);var J4=A._GetAutoObject(C.Converter).Z3(Ka
);if(!!J4){if(J4===10){if((AoN.length!==16)||!A._GetAutoObject(A.acj.VE).AVo(AoN
))return 0;else return Ka;}else return Ka;}else{J4=A._GetAutoObject(C.Converter).
Z3(A._GetAutoObject(C.Device).Uw);if(!!J4&&(J4===10)){if(!A._GetAutoObject(A.acj.
VE).AVo(AoN))return 0;if(AoN.length===12){var Bb6=A.ab0(A.abV(AoN,10),0,10);var AJ$=
A._GetAutoObject(C.Converter).Bpz(Bb6);if((Bb6>0)&&!!AJ$)return(A._GetAutoObject(
C.Converter).AqC(J4)*1000000000000)+A.ab0(A.abV(AoN,10),0,10);}}}return 0;},Bfb:
function(J5){if((J5.length!==10)||!A._GetAutoObject(A.acj.VE).AVo(J5))return 0;var
AAL=A._NewObject(A.Core.Bs,0);var A3K=false;var A3P=A.abW(J5,4,4);var AtQ=A.wz(A3P
,0,10);if((AtQ<2000)||(AtQ>2100)){A3P=A.abV(J5,4);AtQ=A.wz(A3P,0,10);A3K=true;}if((
AtQ<2000)||(AtQ>2100))return 0;AAL.Year=AtQ;var AKU;var AzT;if(A3K){AKU=A.abW(J5
,4,2);AzT=A.wz(AKU,0,10);}else{AKU=A.abW(J5,2,2);AzT=A.wz(AKU,0,10);}if((AzT<1)||(
AzT>12))return 0;AAL.Uq(AzT);var AKT;var AzS;if(A3K){AKT=A.abW(J5,6,2);AzS=A.wz(
AKT,0,10);}else{AKT=A.abV(J5,2);AzS=A.wz(AKT,0,10);}if((AzS<1)||(AzS>AAL.Zs()))return 0;
AAL.Lo(AzS);return AAL.JO();},_Init:function(aArg){this.__proto__=C.A_B;A.h7++;}
,_Done:function(){this.__proto__=null;A.h7--;},_ReInit:function(){},_Mark:function(
D){var B;if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:
null,_className:"Device::ParserClass"};C.AnN={_Init:function(){C.A_B._Init.call(
this,0);},_ReInit:function(){},_variants:function(){return this;},_this:null};C.
AnimalTableFieldsToString={BH:function(A5){var Aas=A5;var MN=A.jV;switch(Aas){case
14:MN=A.aaR(A.acf.Afr);break;case 32:MN=A.aaR(A.acf.Breed);break;case 4:MN=A.aaR(
A.acf.Aee);break;case 28:MN=A.aaR(A.acf.A5h);break;case 33:MN=A.aaR(A.acf.AgH);break;
case 23:MN=A.aaR(A.acf.KI);break;case 7:MN=A.aaR(A.acf.Afm);break;case 2:MN=A.aaR(
A.acf.P);break;case 0:MN=A.aaR(A.acf.GM);break;case 8:MN=A.aaR(A.acf.Alarm);break;
case 9:MN=A.aaR(A.acf.ACd);break;case 38:MN=A.aaR(A.acf.BhZ);break;case 11:MN=A.
aaR(A.acf.Fever);break;case 29:MN=A.aaR(A.acf.ARf);break;case 18:MN=A.aaR(A.acf.
M2);break;case 26:MN=A.aaR(A.acf.Ug);break;case 22:MN=A.aaR(A.acf.Transponder);break;
case 1:MN=A.aaR(A.acf.GI);break;case 34:MN=A.aaR(A.acf.Jf);break;case 6:case 25:
case 27:case 10:case 37:case 12:case 17:case 5:case 3:case 35:case 36:case 15:case
16:case 24:case 31:case 20:case 30:case 21:case 19:case 13:MN=A.jV;break;default:
throw new Error(AZx+A5.toFixed());}return MN;},_Init:function(aArg){C.EnumToString.
_Init.call(this,aArg);this.__proto__=C.AnimalTableFieldsToString;},_className:"Device::AnimalTableFieldsToString"
};C.VQ={BDT:0,BDR:1,LAST:2};C.DataExportDestinationToString={BH:function(A5){var
Byv=A5;var A1v=A.jV;switch(Byv){case 0:A1v=A.acf.BiV;break;case 1:A1v=A.acf.Bhz;
break;default:throw new Error(AZy+A5.toFixed());}return A1v;},_Init:function(aArg
){C.EnumToString._Init.call(this,aArg);this.__proto__=C.DataExportDestinationToString;
},_className:"Device::DataExportDestinationToString"};C.AD6={Bg:0,BFr:1,LAST:2};
C.ListViewScopeToString={BH:function(A5){var BzE=A5;var A2s=A.jV;switch(BzE){case
0:A2s=A.aaR(A.acf.Bg);break;case 1:A2s=A.aaR(A.acf.BoC);break;default:throw new Error(
AZz+A5.toFixed());}return A2s;},_Init:function(aArg){C.EnumToString._Init.call(this
,aArg);this.__proto__=C.ListViewScopeToString;},_className:"Device::ListViewScopeToString"
};C.AHe={BGk:0,BGj:1,BGi:2,LAST:3};C.WeightValuePrecisionToString={BH:function(A5
){var BCm=A5;var ALv=A.jV;switch(BCm){case 0:ALv=AZA+A.aaR(A.acf.Az7);break;case
1:ALv=AZB+A.acf.AiH;break;case 2:ALv=AZC+A.acf.AiH;break;default:throw new Error(
AZD+A5.toFixed());}return ALv;},_Init:function(aArg){C.EnumToString._Init.call(this
,aArg);this.__proto__=C.WeightValuePrecisionToString;},_className:"Device::WeightValuePrecisionToString"
};C.AgC={BH:function(A5){var AK2=A5;if(AK2===1)return A.aaR(A.acf.BiY);else return C.
AnimalTypeToString.BH.call(this,A5);},_Init:function(aArg){C.AnimalTypeToString.
_Init.call(this,aArg);this.__proto__=C.AgC;},_className:"Device::AnimalTypeToStringHeifer"
};C.Y$={RP:0,BEA:1,LAST:2};C.MassDeregistrationCriterionToString={BH:function(A5
){var BzH=A5;var A2x=A.jV;switch(BzH){case 0:A2x=A.aaR(A.acf.Bj2);break;case 1:A2x=
A.aaR(A.acf.AR0);break;default:throw new Error(AHt+A5.toFixed());}return A2x;},_Init:
function(aArg){C.EnumToString._Init.call(this,aArg);this.__proto__=C.MassDeregistrationCriterionToString;
},_className:"Device::MassDeregistrationCriterionToString"};C.UInt64PartialFilterCriterion={
A4:A.jV,Zq:0,OA:0,Abm:function(){var Av=A._NewObject(C.UInt64PartialFilterCriterion
,0);Av.E$(this);return Av;},E$:function(AI){C.FilterCriterion.E$.call(this,AI);var
Av=(C.UInt64PartialFilterCriterion.isPrototypeOf(AI)?AI:null);if(!!Av){this.A4=Av.
A4;this.Zq=Av.Zq;this.OA=Av.OA;}},Initialize:function(A3,Eb,A8,Atr,AI3,Qa){this.
EJ=A3;this.Operator=Eb;this.A4=A8;this.YM=Qa;this.Zq=Atr;this.OA=AI3;return this;
},_Init:function(aArg){C.FilterCriterion._Init.call(this,aArg);this.__proto__=C.
UInt64PartialFilterCriterion;},_className:"Device::UInt64PartialFilterCriterion"
};C.BDd={Idle:0,BE4:1,BFd:2,BFu:3,Error:4};
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
C.AU1.__proto__=C.Int32ArrayWrapper;C.AU0.__proto__=C.Int32ArrayWrapper;C.AMz.__proto__=
C.Int32ArrayWrapper;C.UInt64FilterCriterion.__proto__=C.FilterCriterion;C.BooleanToAssignedUnassignedString.
__proto__=C.EnumToString;C.CountryToString.__proto__=C.EnumToString;C.EaseOfDeliveryToString.
__proto__=C.EnumToString;C.WhereAboutsToString.__proto__=C.EnumToString;C.BreedToString.
__proto__=C.EnumToString;C.AnimalIdGenerationMethodToString.__proto__=C.EnumToString;
C.DirectionOfCountingToString.__proto__=C.EnumToString;C.Aeg.__proto__=C.EnumToIcon;
C.AdX.__proto__=C.EnumToIcon;C.GermanStateToString.__proto__=C.EnumToString;C.EartagNrAssignmentModeToString.
__proto__=C.EnumToString;C.M0.__proto__=C.EnumToCodeset;C.ReasonOfLeavingToString.
__proto__=C.EnumToString;C.Ahz.__proto__=C.EnumToCodeset;C.KY.__proto__=C.EnumToCodeset;
C.CalfDeregistrations.__proto__=C.Row;C.DeviceComponentToString.__proto__=C.EnumToString;
C.AgQ.__proto__=C.EnumToCodeset;C.AeR.__proto__=C.EnumToIcon;C.WhereAboutsFilterCriterion.
__proto__=C.FilterCriterion;C.TimespanDaysToString.__proto__=C.EnumToString;C.USBStateToString.
__proto__=C.EnumToString;C.AnimalIdAutoGenerationMethodToString.__proto__=C.EnumToString;
C.MonthToString.__proto__=C.EnumToString;C.AVE.__proto__=C.Int32ArrayWrapper;C.AVD.
__proto__=C.Int32ArrayWrapper;C.AVG.__proto__=C.Int32ArrayWrapper;C.AVC.__proto__=
C.Int32ArrayWrapper;C.AMA.__proto__=C.Int32ArrayWrapper;C.TransponderLinkageIdChangeMethodToString.
__proto__=C.EnumToString;C.AnimalTableFieldsToString.__proto__=C.EnumToString;C.
DataExportDestinationToString.__proto__=C.EnumToString;C.ListViewScopeToString.__proto__=
C.EnumToString;C.WeightValuePrecisionToString.__proto__=C.EnumToString;C.AgC.__proto__=
C.AnimalTypeToString;C.MassDeregistrationCriterionToString.__proto__=C.EnumToString;
C.UInt64PartialFilterCriterion.__proto__=C.FilterCriterion;};C._ReInit=function(
){var B;if((B=C.Device._this))B._ReInit(),C.Device._ReInit.call(B);if((B=C.Converter.
_this))B._ReInit(),C.Converter._ReInit.call(B);if((B=C.Helper._this))B._ReInit()
,C.Helper._ReInit.call(B);if((B=C.AnN._this))B._ReInit(),C.AnN._ReInit.call(B);};
C.DH=function(D){var B;if((B=C.Device._this)&&(B._cycle!=D))B._Done(C.Device._this=
null);if((B=C.Converter._this)&&(B._cycle!=D))B._Done(C.Converter._this=null);if((
B=C.Helper._this)&&(B._cycle!=D))B._Done(C.Helper._this=null);if((B=C.AnN._this)&&(
B._cycle!=D))B._Done(C.AnN._this=null);};return C;})();

/* VitalControl demonstration application, © Urban GmbH & Co.KG 2023 */