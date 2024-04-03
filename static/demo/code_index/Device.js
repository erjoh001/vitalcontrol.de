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
var E7="ERROR: UpdateChargeActive is read only";var Hq="ERROR: ScanState is read only.";
var IU="ERROR: MeasureState is read only.";var Is="ERROR: Temperature value is read only";
var O2="ERROR: UpdateDataTable called for Undefined data table.";var P7="ERROR: UpdateDataTable called for unknown data table id=";
var P8="ERROR: SyncState is read only.";var CQ="ERROR: ScanTransponder is read only.";
var Ff="ERROR: Body weight value is read only";var L1="ERROR: Predicted temperature value is read only";
var P9="ERROR: TransferProgress is read only";var J2="ERROR: TransferTarget is read only";
var N$="ERROR: unhandled assessment.";var P_="Unhandled enum BodyTemperature: ";
var MH="AU";var S8="AT";var UQ="BE";var Z1="BA";var W1="BG";var It="CA";var UR="CN";
var Z2="TW";var W2="HR";var Z3="CY";var W3="CZ";var Z4="DK";var Z5="EE";var US="FI";
var W4="FR";var O3="DE";var Z6="GR";var O4="HU";var Rl="IE";var W5="IT";var W6="JP";
var UT="LV";var Z7="LT";var Z8="LU";var W7="MT";var W8="NL";var S9="NO";var UU="PL";
var UV="PT";var AcK="RO";var S_="RU";var Z9="SK";var Afz="SI";var Z_="ES";var W9=
"SE";var Z$="CH";var W_="TR";var AhT="UA";var KY="UK";var AcL="US";var Lv=".";var
AhU="-";var Aob="ERROR: Unhandled mass unit: ";var Oa=" ";var W$="Unhandled gender";
var Aaa="Unhandled animal type";var AhV="Unhandled Device::MassUnit.";var AhW="Unhandled Device::AnimalListContent.";
var AcM="Avid";var UW="Ordicam / IER SA";var Aoc="Agrident";var Aod="Datamars";var
Aoe="Allflex";var Aof="Texas Instruments";var Ak$="Nedap";var AsV="Digital Angel";
var Ax2="null";var Ax3="[ ";var O5=", ";var Rm=" ]";var Ax4="Unhandled language";
var UX="Unhandled Device::AnimalListAction.";var AsW="Temperature unit conversion not supported: ";
var Ax5="->";var Ax6="=";var Ax7=">";var Aog="<";var AfA="!=";var Aoh="WARNING: Unhandled operator.";
var IV="Unknown birth type";var Aoi="Unhandled country: ";var Xa="ERROR: Cannot start transaction";
var Aoj="ERROR: Table is null, cannot load row (";var AsX=")";var AsY="Table Id mismatch!";
var AsZ="ERROR: Row index (";var Aok=") out of bounds [0,";var Aol="]";var As0="ERROR: Table is full. Item limit: ";
var Ax8="Device::ScanTransponder not set";var Ax9="Unhandled TransponderType.";var
Ax_="Unhandled ScanState.";var As1="Could not load animal with transponder";var Ax$=
"Birth type";var P$="Time calving";var Aya="Pend. reg. notice";var AVU="Perished";
var AVV="Rating temp.";var AVW="Location";var AVX=" mother";var AHi="Reason leaving";
var AHj="Time alarm";var AfB="Time first weighing";var Aom="Time control";var AVY=
"Time temp.";var AHk="Time watch";var Ala="Time weighing";var AHl="Assessment";var
AHm="Time rating";var AVZ="ERROR: Unhandled AnimalTable filter field:";var AHn="Field ";
var AV0="ERROR: Unhandled RatingTable filter field:";var AV1="ERROR: Unhandled table ";
var AcN=" filter fields.";var AV2=" [";var AV3="WARNING: Unhandled filter criterion type.";
var AHo="0";var As2="No table specified";var AHp="Invalid animal id generation method: ";
var AHq="Unhandled AnimalIdGenerationMethod: ";var Ayb="Invalid gender: ";var AHr=
"Invalid ear tag number assignment mode: ";var Ayc=";";var AV4="Invalid animal creation error code: ";
var AV5="Invalid EartagNrAssignmentMode: ";var AV6="Unsupported exponent: ";var AV7=
"Unknown whereabouts type: ";var AHs="Unhandled Gender: ";var AV8="Unhandled AnimalIdAutoGenerationMethod: ";
var O6="\n";var Ayd="\n\n";var AV9="Bootloader:\nV\xA0";var AV_="Middleware:\nV\xA0";
var AV$="GUI:\nV\xA0";var AWa="Mainboard: ";var AWb="Torchboard: ";var AWc="Operator not supported.";
var AHt="Unhandled Device::TransponderAssignmentIdChangeMethod: ";var AHu="Unhandled mass deregistration criterion: ";
var Aon="Unhandled enum value ";var Aye="UNDEFINED";var AWd="Boot";var AWe="Charge";
var AWf="ChargeWarning";var AHv="ControlledPowerOff";var AWg="DeviceMain";var AHw=
"DeviceService";var AHx="DeviceInfo";var AHy="DeviceDataManagement";var AWh="DeviceAnimalDataMenu";
var AHz="DeviceDeviceDataMenu";var AWi="DeviceCheck";var AHA="Home";var Rn="Settings";
var Xb="DateTimeSettings";var AWj="UnitsSettings";var AWk="DataAcquisitionSettings";
var AWl="RegistrationAutomaticSettings";var AWm="RegistrationPresettingsSettings";
var AWn="TransponderAssignmentSettings";var AWo="TransponderUnlinkSettings";var AWp=
"TemperatureSettings";var AhX="WeightGainSettings";var AHB="DeviceSettings";var AWq=
"RegistrationSettings";var AWr="InitializationSettings";var AHC="PremisesSettings";
var AHD="Sleep";var Ayf="Sync";var Qa="EditAnimalData";var AWs="EditAnimalDataNaisId";
var AWt="AnimalList";var AWu="AnimalListFilter";var As3="AlarmListFilter";var AWv=
"WatchListFilter";var AWw="AnimalActionActions";var AWx="AnimalActionTemperature";
var AWy="TemperatureMeasurement";var AWz="AnimalActionWeighing";var AWA="AnimalActionRate";
var As4="AnimalActionUnregister";var AWB="AnimalActionPerished";var AWC="AnimalActionNewBornCare";
var AWD="AlarmList";var AWE="ControlMeasure";var AWF="ControlList";var AWG="RangeTest";
var AWH="ListsMain";var AWI="ListsIdManagement";var AWJ="WatchList";var AWK="EvaluationMenuMain";
var AHE="EvaluationMenuWeights";var Alb="EvaluationLosses";var AWL="EvaluationRatings";
var AWM="EvaluationTemperatures";var AWN="EvaluationWeights";var Ayg="EvaluationWeightsRecent";
var Alc="EvaluationBirthWeights";var AhY="AnimalEvaluationFilter";var Ayh="NewMenu";
var Aoo="NewAnimals";var AhZ="NewAnimalManualData";var AWO="MassRecording";var Ayi=
"NewAnimalTransponderData";var AHF="NewAnimalLoss";var AfC="AutoActionScanScreen";
var AHG="ManualActionScanScreen";var Aab="SetTransponderScreen";var Ald="SetSaveTransponderScreen";
var Aop="NewAnimalSetTransponderScreen";var AWP="NewAnimalsSetTransponderScreen";
var AWQ="NewAnimalCalvingDataScreen";var AWR="WeightListScreen";var AWS="AnimalSingleInfoScreen";
var AWT="AnimalMultiInfoScreen";var As5="AnimalRegistrationDetails";var AHH="FreshCowListScreen";
var AHI="FreshCowListFilterScreen";var AWU="DryCowListScreen";var AWV="DryCowListFilterScreen";
var AWW="NoTransponderListScreen";var AWX="NoTransponderListFilterScreen";var AWY=
"YoungNoTransponderListScreen";var AWZ="YoungNoTransponderListFilterScreen";var AW0=
"NoNaisIdListScreen";var AW1="NoNaisIdListFilterScreen";var AW2="RegistrationsListScreen";
var AW3="RegistrationsListFilterScreen";var AW4="ActionListScreen";var Ayj="ActionListFilterScreen";
var AHJ="UpdateScreen";var AHK="MotherScanScreen";var AHL="SetSaveNaisIdScreen";
var AHM="PurchasedAnimalsList";var AHN="TextInput";var AHO="AnimalActions";var AW5=
"Unhandled display mode: ";var AW6="None";var AW7="Actions Settings";var AW8="Auto Action";
var AW9="Menu Item Settings";var AW_="Rating Type";var AW$="Weighing settings";var
Ayk="Options";var AHP="AnimalSearch";var AXa="AnimalSearchUnfiltered";var AHQ="AnimalSearchDriedOff";
var Ah0="MeasurementReady";var UY="AnimalMultiInfoMenu";var AXb="MassRecordingDefaults";
var Aac="MassRecordingFields";var AXc="MassRecordingMenu";var AXd="BirthRegistrationsListMenu";
var Ale="Unhandled overlay menu: ";var Aad="Error";var AcO="Idle";var Ayl="IdScanned";
var AXe="NotFound";var Ob="Progress";var AHR="Unhandled scan state: ";var AXf="Prediction";
var AHS="Ready";var AXg="Unhandled measure state: ";var AHT="Unhandled temperature unit: ";
var AHU="Unhandled species: ";var AXh="English";var AXi="Nederlands";var AXj="Deutsch";
var AXk="Eesti";var AXl="Suomalainen";var AXm="Fran\xE7ais";var AXn="\u0395\u03BB\u03BB\u03B7\u03BD\u03B9\u03BA\u03AC";
var AXo="\u0411\u044A\u043B\u0433\u0430\u0440\u0441\u043A\u0438";var AHV="Italiano";
var AXp="\u0420\u0443\u0441\u0441\u043A\u0438\u0439";var AHW="Espa\xF1ol";var AHX=
"T\xFCrk\xE7e";var Aym="\u6B63\u9AD4\u5B57/\u7E41\u9AD4\u5B57";var AXq="\u010Ce\u0161tina";
var AXr="Bosanski";var AXs="Norsk";var AXt="\u0423\u043A\u0440\u0430\u0457\u043D\u0441\u044C\u043A\u0438\u0439";
var AHY="Unhandled language: ";var AXu="EN";var AXv="ET";var AXw="EL";var As6="ZH";
var As7="CS";var AHZ="BS";var AXx="Unhandled gender: ";var AXy="Unhandled birth type: ";
var AXz="Exporting";var AXA="ImportFinish";var AXB="ImportStart";var AXC="Importing";
var AXD="Init";var AXE="Unhandled sync state: ";var AH0="Unhandled rating attribute: ";
var AXF="Unhandled assessment: ";var Ayn="Illegal boolean value: ";var AH1="Unhandled popup ID:";
var AXG="Unknown";var AXH="Severe Error";var AXI="ErrorsDeviceDriverCheck";var AXJ=
"Enter Sleep";var AXK="About";var AXL="InfoSoftwareVersions";var AH2="InfoHardwareVersions";
var AH3="InfoSerial";var AH4="ShutDown";var AH5="SuccessDataSync";var Ayo="SuccessResetFactory";
var Ayp="SuccessResetAnimalData";var AH6="SuccessCreateBackup";var AXM="SuccessRestoreBackup";
var AH7="CreateBackupInProgress";var AXN="RestoreBackupInProgress";var AH8="FailedCreateBackup";
var AXO="FailedRestoreBackup";var AXP="TechnicalDetails";var AXQ="WarningDataSync";
var AXR="WarningFactory";var AXS="WarningResetAnimalData";var AXT="WarningRestart";
var AXU="WarningAutoAction";var AXV="WarningAutoActionNotApplicable";var AXW="WarningNoMenuItem";
var AXX="WarningEnterDemoMode";var AXY="NoAnimalsRegistered";var AXZ="MaxNumAnimalsReached";
var Ayq="MaxNumRatingsReached";var AX0="MaxNumCalfDeregistrationsReached";var AX1=
"MissingTransponder";var Ayr="EarTagNumberTooShort";var As8="NoValidCountryCode";
var UZ="WarningOutdatedAnimalWeight";var As9="WarningOutdatedAnimalWeights";var AX2=
"WarningWeightEvaluationSingular";var AX3="WarningWeightEvaluationPlural";var AX4=
"ScanError";var AH9="ScanNotFound";var AX5="ScannedAnimalNotFound";var AH_="ScannedTransponderNotFound";
var AX6="AnimalNotFound";var AX7="SuccessUnregister";var AX8="SuccessUnregisterPerished";
var As_="SuccessCreationNewAnimal";var AX9="SuccessCreationNewAnimals";var AX_="AnimalCreationInProgress";
var AH$="EvaluationInProgress";var AX$="DataSyncInProgress";var AYa="AddedToAlarm";
var AYb="RemovedFromAlarm";var AYc="AddedToWatch";var AcP="RemovedFromWatch";var
AYd="AddedToDryOff";var AYe="RemovedFromDryOff";var AYf="AnimalIdAlreadyExists";
var AYg="AnimalIdAlreadyExistsContinuable";var AIa="MissingAnimalId";var AYh="MissingAnimalIdMother";
var AYi="MissingEartagNumber";var AYj="MissingTransponderId";var AYk="TransponderAlreadyRegistered";
var AYl="TransponderAlreadyRegisteredContinuable";var AYm="TransponderAlreadyRegisteredCapturable";
var AIb="HelpAnimalInfoRating";var AYn="WarningReassignTransponder";var AYo="CannotReassignNaisId";
var AYp="WarningResetToDefaultValue";var AIc="WarningResetThresholds";var AId="WarningResetTempThresholds";
var AYq="UpdateFirmware";var AYr="UpdateFirmwareBatteryLow";var AYs="ConfirmFirmwareUpdated";
var AYt="ConfirmBootloaderUpdated";var Ro="QuestionAddAnotherCalfMultiples";var As$=
"RemovedAllBirthNoticesPending";var AIe="RemovedAllPurchasedNoticePending";var AIf=
"RemovedFromBirthNoticePending";var Aoq="RemovedFromPurchasedNoticePending";var Aor=
"SuccessClearAnimalLoss";var Ays="RemovedAnimalBirth";var AYu="RemovedAnimalPurchased";
var AIg="WarningNoActionsForAnimalLoss";var AYv="SuccessLinkTransponder";var AYw=
"SuccessChangeTransponder";var AYx="SuccessUnlinkTransponder";var AYy="SuccessLinkNaisId";
var AYz="WarningDataExportHitBirthFailed";var AYA="SuccessDataExportHitBirth";var
AYB="SuccessDataExportHitBirthDownload";var AYC="WarningDataExportPurchasedFailed";
var AYD="SuccessDataExportPurchased";var AYE="SuccessDataExportPurchasedDownload";
var AYF="WarningDataExportAnimalsFailed";var AYG="SuccessDataExportAnimalsRatings";
var AYH="SuccessDataExportAnimalsDownload";var AYI="WarningNoPremisesID";var AYJ=
"WarningNoFlashDrivePresent";var AYK="WarningNoBackupPathPresent";var AYL="WarningNoBackupFilePresent";
var Aos="DemoFunctionNotAvailable";var AIh="WarningImpreciseTimeSetting";var AYM=
"ConfirmationRestoreBackup";var AIi="ConfirmationMassDeregistration";var AIj="SuccessMassDeregistration";
var AcQ="WarningParsedDateInFutureInvalid";var AIk="WarningParsingDateFailed";var
AYN="WarningParsingNaisIdFailed";var AIl="WarningParsingShortNaisIdWithoutPremisesId";
var AYO="DataExportInProgress";var Ayt="BarcodeScannerConnectedSwitchScreen";var
AYP="BarcodeScannerDisconnectedSwitchScreen";var AYQ="WarningDataExportAnimalsNoReset";
var Ayu="AnimalId";var AYR="FarmId";var AYS="GroupId";var AYT="PersonId";var AIm=
"Unhandled transponder type: ";var Aot="FDX";var AIn="HDX";var AYU="HDX (Urban)";
var AIo="Unhandled transponder protocol: ";var AIp="Illegal RatingMode: ";var Alf=
"Unhandled mass unit: ";var AYV="Max array size is 10";var Alg="Index out of bounds";
var AYW="ERROR: Received more integers than expected!";var Ayv="Unhandled double scan action :";
var AIq="Illegal WeightRecordingMode: ";var AYX="Illegal WeightRecordingScope: ";
var AYY="AnimalDataGenderType";var AIr="AnimalDataShortNaisId";var AYZ="Rating";
var AY0="Temperature";var AY1="Weight";var AY2="Alarm infos";var AY3="Control infos";
var AY4="Watch infos";var AY5="Fresh cow infos";var AY6="No transponder infos";var
AY7="Dry cow info";var AY8="No nais id infos";var AY9="Birth registrations infos";
var AY_="Purchased registrations infos";var AY$="Young no transponder infos";var
AZa="Unhandled animal list content:";var AIs="Illegal AutoRegistrationMode: ";var
Aae="Illegal FactoryResetScope: ";var Aou="??";var Ayw="Illegal EaseOfDelivery: ";
var AZb="Illegal Whereabouts: ";var AZc="Illegal breed: ";var AZd="Unisex";var AZe=
"Illegal animalIdGenerationMethod: ";var AZf="Ascending";var AZg="Descending";var
Ata="Illegal directionOfCountingName: ";var Aov="Unhandled direction of counting: ";
var Ah1="Unhandled German state: ";var Atb="SH";var Ayx="HH";var Aow="NI";var AZh=
"HB";var AZi="NW";var AZj="HE";var AZk="RP";var AZl="BW";var AZm="BY";var AZn="SL";
var AZo="BB";var AZp="MV";var AZq="SN";var AZr="ST";var AZs="TH";var AZt="One Range Male Female";
var AZu="Two Ranges Male Female";var AIt="Illegal EartagAssignmentMode: ";var Ayy=
"Unhandled code set value ";var AIu="Implement in derived class";var Ayz="Illegal HIT-Code: ";
var AyA="Illegal ReasonOfLeaving: ";var AIv="Illegal code: ";var AZv="Undefined";
var AZw="Illegal DeviceComponent: ";var AIw="Unhandled Device::MotherSelectionFilterMode: ";
var AZx="Illegal Device::TimespanDays: ";var AZy="Not connected";var AZz="Host";
var AZA="Device";var AZB="Device CDC";var AZC="Host MSC";var AZD="Host HID";var AZE=
"Host CDC";var AIx="Illegal animalIdAutoGenerationMethod: ";var AZF="Unhandled month: ";
var AZG="Illegal transponderAssignmentIdChangeMethod: ";var AZH="Unhandled animal table field: ";
var AZI="Unhandled list view scope: ";var AZJ="1 ";var AZK="100 ";var AZL="10 ";
var AIy="Unhandled weight value precision: ";
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
B7:null,B8:null,CW:function(AI){if(!AI)return;var Av=this.B7;while(!!Av){if(Av===
AI)throw new Error(Cc);Av=Av.Ah;}AI.AJ=this.B8;if(!!this.B8)this.B8.Ah=AI;this.B8=
AI;if(!this.B7)this.B7=AI;},AOI:function(){return this.B7;},AON:function(BbJ){if(
!!BbJ)return BbJ.Ah;return null;},DL:function(AI5,Eb){var Av=this.B7;while(!!Av){
if(Av.EJ===AI5){if(Eb===1)return Av;else if(Av.Operator===Eb)return Av;}Av=Av.Ah;
}return null;},Nj:function(AI){var Av=this.B7;while(!!Av){if(Av===AI){if(!!Av.AJ
)Av.AJ.Ah=Av.Ah;if(!!Av.Ah)Av.Ah.AJ=Av.AJ;if(this.B7===Av)this.B7=Av.Ah;if(this.
B8===Av)this.B8=Av.AJ;Av.Ah=null;Av.AJ=null;return;}Av=Av.Ah;}},E$:function(){var
Be=A._NewObject(C.Filter,0);var Av=this.B7;while(!!Av){Be.CW(Av.Abh());Av=Av.Ah;
}return Be;},_Init:function(aArg){this.__proto__=C.Filter;A.h7++;},_Done:function(
){this.__proto__=null;A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((
B=this.B7)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.B8)&&(B._cycle!=D))B._Mark(
B._cycle=D);if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:
null,_className:"Device::Filter"};C.FilterCriterion={Ah:null,AJ:null,EJ:-1,Operator:
1,YE:false,Abh:function(){return null;},E$:function(AI){if(!AI)return;this.EJ=AI.
EJ;this.Operator=AI.Operator;this.YE=AI.YE;},_Init:function(aArg){this.__proto__=
C.FilterCriterion;A.h7++;},_Done:function(){this.__proto__=null;A.h7--;},_ReInit:
function(){},_Mark:function(D){var B;if((B=this.Ah)&&(B._cycle!=D))B._Mark(B._cycle=
D);if((B=this.AJ)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.I)&&(B._cycle!=D
))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:"Device::FilterCriterion"
};C.Int32FilterCriterion={A5:0,Abh:function(){var Av=A._NewObject(C.Int32FilterCriterion
,0);Av.E$(this);return Av;},E$:function(AI){C.FilterCriterion.E$.call(this,AI);var
Av=(C.Int32FilterCriterion.isPrototypeOf(AI)?AI:null);if(!!Av)this.A5=Av.A5;},Initialize:
function(A4,Eb,A_,Qd){this.EJ=A4;this.Operator=Eb;this.A5=A_;this.YE=Qd;return this;
},_Init:function(aArg){C.FilterCriterion._Init.call(this,aArg);this.__proto__=C.
Int32FilterCriterion;},_className:"Device::Int32FilterCriterion"};C.DeviceClass={
AEf:0,AEe:0,Av2:0,PV:0,OR:null,Sy:null,QZ:null,SX:null,RZ:null,P1:null,GC:null,An:
null,Bt:null,Agu:null,AnL:null,Po:null,Auy:A.jV,AutoActions:A.jV,ABJ:A.jV,AGT:A.
jV,AGU:A.jV,AhH:A.jV,AHc:A.jV,AHd:A.jV,ABK:A.jV,AHb:A.jV,AHg:A.jV,ABD:A.jV,ABE:A.
jV,AR5:A.jV,AR_:A.jV,AVR:A.jV,Aa3:100,Lt:0,AM0:75,AcD:3600,AT4:0,A1:5,AF:0,KW:50000
,Pk:0,AF_:0,AdQ:0,Aq3:0,Aq2:0,ARS:1,ARR:1,AjS:0,ART:1,AxN:0,Afp:0,AqP:10,AUO:5,AvX:
60,AvV:0,An3:0,OK:1,WhereAbouts:0,Ak2:0,AxF:3,ACF:0,Agw:1,AbS:0,Aqo:0,ANY:11,Breed:
0,EartagNrAssignmentMode:0,Au0:0,ACy:0,ACx:0,Ij:5,ABC:2,Aqq:0,AOA:2,AVC:0,D9:0,AL9:
0,Kj:0,Gender:2,WeightRecordingScope:1,WeightRecordingMode:1,AnimalType:0,MassUnit:
0,AutoRegistrationMode:0,RatingMode:0,SyncState:0,OverlayMenu:0,TemperatureUnit:
0,Language:0,MeasureState:0,ScanState:0,Ii:3,AT3:false,AMT:false,AeM:true,ARE:false
,Aqc:true,AqQ:false,AmO:true,HF:false,AVg:false,AmP:false,AVA:false,AsP:false,AEd:
false,AmB:false,UpdateActiveScreen:function(AK){if(this.Ii===AK)return;this.Ii=AK;
A.abo([this,this.AEr,this.BaS],0);},Zk:function(E){if(this.K&&this.K.Zk)return this.
K.Zk.apply(this,arguments);else return C.DeviceClass.BuE.apply(this,arguments);}
,BuE:function(E){},BaS:function(Aq){this.Zk(Aq);},UpdateBatteryChargeState:function(
AK){if(this.Aa3===AK)return;this.Aa3=AK;A.abo([this,this.Av7,this.AyG],0);},Aws:
function(E){if(this.K&&this.K.Aws)return this.K.Aws.apply(this,arguments);else return C.
DeviceClass.BuP.apply(this,arguments);},BuP:function(E){A.ab5("%s",BD);},AyG:function(
Aq){this.Aws(Aq);},UpdateChargeActive:function(AK){if(this.AmB===AK)return;this.
AmB=AK;A.abo([this,this.Av_,this.AyH],0);},AEZ:function(E){if(this.K&&this.K.AEZ
)return this.K.AEZ.apply(this,arguments);else return C.DeviceClass.BuW.apply(this
,arguments);},BuW:function(E){A.ab5("%s",E7);},AyH:function(Aq){this.AEZ(Aq);},UpdateScanState:
function(AK){var B;if(this.ScanState===AK)return;this.ScanState=AK;A.abo([this,this.
ASH,this.A0f],0);A._GetAutoObject(C.Helper).BA3(this);},Ar1:function(E){if(this.
K&&this.K.Ar1)return this.K.Ar1.apply(this,arguments);else return C.DeviceClass.
BvB.apply(this,arguments);},BvB:function(E){A.ab5("%s",Hq);},A0f:function(Aq){this.
Ar1(Aq);},UpdateMeasureState:function(AK){if(this.MeasureState===AK)return;this.
MeasureState=AK;A.abo([this,this.AEz,this.AIP],0);},AwR:function(E){if(this.K&&this.
K.AwR)return this.K.AwR.apply(this,arguments);else return C.DeviceClass.Bvi.apply(
this,arguments);},Bvi:function(E){A.ab5("%s",IU);},AIP:function(Aq){this.AwR(Aq);
},UpdateTempValue:function(AK){if(this.Lt===AK)return;this.Lt=AK;A.abo([this,this.
AED,this.AIR],0);},Aw5:function(E){if(this.K&&this.K.Aw5)return this.K.Aw5.apply(
this,arguments);else return C.DeviceClass.BvH.apply(this,arguments);},BvH:function(
E){A.ab5("%s",Is);},AIR:function(Aq){this.Aw5(Aq);},Anz:function(E){if(this.K&&this.
K.Anz)return this.K.Anz.apply(this,arguments);else return C.DeviceClass.Bvc.apply(
this,arguments);},Bvc:function(E){},Ba8:function(Aq){this.Anz(Aq);},Aw6:function(
E){if(this.K&&this.K.Aw6)return this.K.Aw6.apply(this,arguments);else return C.DeviceClass.
BvI.apply(this,arguments);},BvI:function(E){},Atf:function(Aq){this.Aw6(Aq);},AEX:
function(E){if(this.K&&this.K.AEX)return this.K.AEX.apply(this,arguments);else return C.
DeviceClass.BuV.apply(this,arguments);},BuV:function(E){},Ba0:function(Aq){this.
AEX(Aq);},AFt:function(E){if(this.K&&this.K.AFt)return this.K.AFt.apply(this,arguments
);else return C.DeviceClass.Bvk.apply(this,arguments);},Bvk:function(E){},AZ$:function(
Aq){this.AFt(Aq);},UpdateMonitoring:function(AK){if(this.AEd===AK)return;this.AEd=
AK;A.abo([this,this.ASy,this.AZ$],0);},UpdateDataTable:function(BbL){var B;switch(
BbL){case 0:A.pe([B=this.An,B.Akl],this);break;case 1:A.pe([B=this.Bt,B.Akl],this
);break;case 3:A.pe([B=this.Agu,B.Akl],this);break;case 4:A.pe([B=this.Po,B.Akl]
,this);break;case 2:A.ab5("%s",O2);break;default:A.ab5("%s%e",P7,BbL);}},AxE:function(
){if(this.K&&this.K.AxE)return this.K.AxE.apply(this,arguments);else return C.DeviceClass.
Bwg.apply(this,arguments);},Bwg:function(){},AhL:function(){if(this.K&&this.K.AhL
)return this.K.AhL.apply(this,arguments);else return C.DeviceClass.Bwj.apply(this
,arguments);},Bwj:function(){},AhI:function(){if(this.K&&this.K.AhI)return this.
K.AhI.apply(this,arguments);else return C.DeviceClass.Bwh.apply(this,arguments);
},Bwh:function(){},AnX:function(){if(this.K&&this.K.AnX)return this.K.AnX.apply(
this,arguments);else return C.DeviceClass.Bwk.apply(this,arguments);},Bwk:function(
){},UpdateLanguage:function(AK){if(this.Language===AK)return;this.Language=AK;switch(
AK){case 14:A._SetLanguage(1);break;case 13:A._SetLanguage(2);break;case 6:A._SetLanguage(
3);break;case 11:A._SetLanguage(4);break;case 10:A._SetLanguage(5);break;case 12:
A._SetLanguage(6);break;case 5:A._SetLanguage(7);break;case 3:A._SetLanguage(8);
break;case 1:A._SetLanguage(9);break;case 8:A._SetLanguage(10);break;case 4:A._SetLanguage(
11);break;case 15:A._SetLanguage(13);break;case 9:A._SetLanguage(15);break;case 2:
A._SetLanguage(16);break;case 7:A._SetLanguage(17);break;case 16:A._SetLanguage(
18);break;default:A._SetLanguage(0);}A.abo([this,this.A8E,this.Ba8],0);},UpdateTemperatureUnit:
function(AK){if(this.TemperatureUnit===AK)return;this.TemperatureUnit=AK;A.abo([
this,this.Arx,this.Atf],0);},UpdateBrightness:function(AK){if(this.AM0===AK)return;
this.AM0=AK;A.abo([this,this.A8p,this.Ba0],0);},SetSystemTime:function(Ah9){if(this.
K&&this.K.SetSystemTime)return this.K.SetSystemTime.apply(this,arguments);else return C.
DeviceClass.Bwe.apply(this,arguments);},Bwe:function(Ah9){},Axx:function(){if(this.
K&&this.K.Axx)return this.K.Axx.apply(this,arguments);else return C.DeviceClass.
BaG.apply(this,arguments);},BaG:function(){},AGl:function(){if(this.K&&this.K.AGl
)return this.K.AGl.apply(this,arguments);else return C.DeviceClass.BaE.apply(this
,arguments);},BaE:function(){},Bos:function(){},UpdateOverlayMenu:function(AK){if(
this.OverlayMenu===AK)return;this.OverlayMenu=AK;A.abo([this,this.Awk,this.AyO],
0);},Dw:function(E){if(this.K&&this.K.Dw)return this.K.Dw.apply(this,arguments);
else return C.DeviceClass.Bvv.apply(this,arguments);},Bvv:function(E){},AyO:function(
Aq){this.Dw(Aq);},Axa:function(E){if(this.K&&this.K.Axa)return this.K.Axa.apply(
this,arguments);else return C.DeviceClass.BvS.apply(this,arguments);},BvS:function(
E){},Bbi:function(Aq){this.Axa(Aq);},UpdateUnderTemp:function(AK){if(this.AcD===
AK)return;this.AcD=AK;A.abo([this,this.A89,this.Bbi],0);},UpdateSyncState:function(
AK){if(this.SyncState===AK)return;this.SyncState=AK;A.abo([this,this.ASJ,this.A0h
],0);},Ab6:function(E){if(this.K&&this.K.Ab6)return this.K.Ab6.apply(this,arguments
);else return C.DeviceClass.BvG.apply(this,arguments);},BvG:function(E){A.ab5("%s"
,P8);},A0h:function(Aq){this.Ab6(Aq);},AC3:function(){if(this.K&&this.K.AC3)return this.
K.AC3.apply(this,arguments);else return C.DeviceClass.Buw.apply(this,arguments);
},Buw:function(){return A.jV;},UpdatePopup:function(J5,A03,A0Y,A06){this.A3(J5,A03
,A0Y,A06,[this,this.BAI]);},PopupStateChanged:function(J5,Ae){if(this.K&&this.K.
PopupStateChanged)return this.K.PopupStateChanged.apply(this,arguments);else return C.
DeviceClass.Bv5.apply(this,arguments);},Bv5:function(J5,Ae){},AFV:function(E){if(
this.K&&this.K.AFV)return this.K.AFV.apply(this,arguments);else return C.DeviceClass.
BvU.apply(this,arguments);},BvU:function(E){},Bbj:function(Aq){this.AFV(Aq);},UpdateVibrationOnKeypressEnabled:
function(AK){if(this.AsP===AK)return;this.AsP=AK;A.abo([this,this.A8_,this.Bbj],
0);},Ae_:function(E){if(this.K&&this.K.Ae_)return this.K.Ae_.apply(this,arguments
);else return C.DeviceClass.BvT.apply(this,arguments);},BvT:function(E){},AIS:function(
Aq){this.Ae_(Aq);},UpdateVibrationOn:function(Bcc){if(this.AVA===Bcc)return;this.
AVA=Bcc;A.abo([this,this.AEE,this.AIS],0);},A3:function(J5,A03,A0Y,A06,A0Z){var Agl=
A._NewObject(C.PopupContext,0);Agl.Id=J5;Agl.Show=A03;Agl.AkG=A0Y;Agl.Ak1=A06;Agl.
AF3=A0Z;this.AnL.Trigger(Agl,false);},BAI:function(G){var As=(C.PopupContext.isPrototypeOf(
G)?G:null);if(!!As)this.PopupStateChanged(As.Id,As.PopupState);},Aw1:function(E){
if(this.K&&this.K.Aw1)return this.K.Aw1.apply(this,arguments);else return C.DeviceClass.
BvA.apply(this,arguments);},BvA:function(E){},A0e:function(Aq){this.Aw1(Aq);},UpdateRatingMode:
function(AK){if(this.RatingMode===AK)return;this.RatingMode=AK;A.abo([this,this.
ASG,this.A0e],0);},Ae0:function(E){if(this.K&&this.K.Ae0)return this.K.Ae0.apply(
this,arguments);else return C.DeviceClass.Bu6.apply(this,arguments);},Bu6:function(
E){},Ate:function(Aq){this.Ae0(Aq);},UpdateFlashLightOn:function(BbU){if(this.AmP===
BbU)return;this.AmP=BbU;A.abo([this,this.Aru,this.Ate],0);},Uq:function(E){if(this.
K&&this.K.Uq)return this.K.Uq.apply(this,arguments);else return C.DeviceClass.BvL.
apply(this,arguments);},BvL:function(E){},A0i:function(Aq){this.Uq(Aq);},UpdateTopLightOn:
function(Bb9){if(this.AVg===Bb9)return;this.AVg=Bb9;A.abo([this,this.ASL,this.A0i
],0);},WA:function(E){if(this.K&&this.K.WA)return this.K.WA.apply(this,arguments
);else return C.DeviceClass.Bvz.apply(this,arguments);},Bvz:function(E){},Bwx:function(
Aq){this.WA(Aq);},UpdateRGBTopLight:function(Bb4){if(this.AT4===Bb4)return;this.
AT4=Bb4;A.abo([this,this.Bk9,this.Bwx],0);},Awr:function(E){if(this.K&&this.K.Awr
)return this.K.Awr.apply(this,arguments);else return C.DeviceClass.BuO.apply(this
,arguments);},BuO:function(E){},Bwq:function(Aq){this.Awr(Aq);},UpdateAutoRegistrationMode:
function(BbH){if(this.AutoRegistrationMode===BbH)return;this.AutoRegistrationMode=
BbH;A.abo([this,this.Bkw,this.Bwq],0);},Ar2:function(E){if(this.K&&this.K.Ar2)return this.
K.Ar2.apply(this,arguments);else return C.DeviceClass.BvC.apply(this,arguments);
},BvC:function(E){A.ab5("%s",CQ);},A0g:function(Aq){this.Ar2(Aq);},UpdateScanTransponder:
function(J5,Bb$,Bb_){if(((this.OR.Id===J5)&&(this.OR.TransponderType===Bb$))&&(this.
OR.TransponderProtocol===Bb_))return;this.OR.OnSetId(J5);this.OR.ATI(Bb$);this.OR.
ATH(Bb_);A.abo([this,this.ASI,this.A0g],0);},OM:function(E){if(this.K&&this.K.OM
)return this.K.OM.apply(this,arguments);else return C.DeviceClass.BuY.apply(this
,arguments);},BuY:function(E){},U1:function(Aq){this.OM(Aq);},UpdateDigitsID:function(
BbP){if(this.A1===BbP)return;this.A1=BbP;A.abo([this,this.Uh,this.U1],0);},PQ:function(
E){if(this.K&&this.K.PQ)return this.K.PQ.apply(this,arguments);else return C.DeviceClass.
Bvu.apply(this,arguments);},Bvu:function(E){},U2:function(Aq){this.PQ(Aq);},UpdateOffsetID:
function(Bb0){if(this.AF===Bb0)return;this.AF=Bb0;A.abo([this,this.Ui,this.U2],0
);},AFZ:function(E){if(this.K&&this.K.AFZ)return this.K.AFZ.apply(this,arguments
);else return C.DeviceClass.Bv1.apply(this,arguments);},Bv1:function(E){A.ab5("%s"
,Ff);},AIT:function(Aq){this.AFZ(Aq);},UpdateWeightValue:function(AK){if(this.KW===
AK)return;this.KW=AK;A.abo([this,this.AEF,this.AIT],0);},AwO:function(E){if(this.
K&&this.K.AwO)return this.K.AwO.apply(this,arguments);else return C.DeviceClass.
Bvf.apply(this,arguments);},Bvf:function(E){},AZ_:function(Aq){this.AwO(Aq);},UpdateMassUnit:
function(AK){if(this.MassUnit===AK)return;this.MassUnit=AK;A.abo([this,this.ASx,
this.AZ_],0);},ArB:function(E){if(this.K&&this.K.ArB)return this.K.ArB.apply(this
,arguments);else return C.DeviceClass.BaA.apply(this,arguments);},BaA:function(E
){},BaP:function(Aq){this.ArB(Aq);},ArC:function(E){if(this.K&&this.K.ArC)return this.
K.ArC.apply(this,arguments);else return C.DeviceClass.BaB.apply(this,arguments);
},BaB:function(E){},AZ5:function(Aq){this.ArC(Aq);},UpdateActiveActions:function(
AK){if(this.Pk===AK)return;this.Pk=AK;A.abo([this,this.A7$,this.BaP],0);},UpdateActiveActionsOrder:
function(AK){if(this.Auy===AK)return;this.Auy=AK;A.abo([this,this.ASk,this.AZ5],
0);},Aks:function(E){if(this.K&&this.K.Aks)return this.K.Aks.apply(this,arguments
);else return C.DeviceClass.BaC.apply(this,arguments);},BaC:function(E){},BaX:function(
Aq){this.Aks(Aq);},UpdateAutoActions:function(AK){if(this.AutoActions===AK)return;
this.AutoActions=AK;A.abo([this,this.A8k,this.BaX],0);},AGM:function(){if(this.K&&
this.K.AGM)return this.K.AGM.apply(this,arguments);else return C.DeviceClass.Bwi.
apply(this,arguments);},Bwi:function(){},AsF:function(){if(this.K&&this.K.AsF)return this.
K.AsF.apply(this,arguments);else return C.DeviceClass.Bwm.apply(this,arguments);
},Bwm:function(){},EB:function(E){if(this.K&&this.K.EB)return this.K.EB.apply(this
,arguments);else return C.DeviceClass.BuL.apply(this,arguments);},BuL:function(E
){},Bwp:function(Aq){this.EB(Aq);},UpdateAnimalType:function(En){if(this.AnimalType===
En)return;this.AnimalType=En;A.abo([this,this.PP,this.Bwp],0);},Axb:function(E){
if(this.K&&this.K.Axb)return this.K.Axb.apply(this,arguments);else return C.DeviceClass.
BvZ.apply(this,arguments);},BvZ:function(E){},Bbo:function(Aq){this.Axb(Aq);},UpdateWeightRecordingMode:
function(Bce){if(this.WeightRecordingMode===Bce)return;this.WeightRecordingMode=
Bce;A.abo([this,this.A9g,this.Bbo],0);},AFy:function(E){if(this.K&&this.K.AFy)return this.
K.AFy.apply(this,arguments);else return C.DeviceClass.Bvw.apply(this,arguments);
},Bvw:function(E){A.ab5("%s",L1);},A0c:function(Aq){this.AFy(Aq);},UpdatePredictedTempValue:
function(AK){if(this.AF_===AK)return;this.AF_=AK;A.abo([this,this.ASD,this.A0c],
0);},SO:function(L7){if(this.K&&this.K.SO)return this.K.SO.apply(this,arguments);
else return C.DeviceClass.Bwd.apply(this,arguments);},Bwd:function(L7){},AE4:function(
E){if(this.K&&this.K.AE4)return this.K.AE4.apply(this,arguments);else return C.DeviceClass.
BuX.apply(this,arguments);},BuX:function(E){},AIM:function(Aq){this.AE4(Aq);},UpdateDemoMode:
function(AK){if(this.HF===AK)return;this.HF=AK;A.abo([this,this.AEw,this.AIM],0);
},AEL:function(E){if(this.K&&this.K.AEL)return this.K.AEL.apply(this,arguments);
else return C.DeviceClass.BuF.apply(this,arguments);},BuF:function(E){},BaT:function(
Aq){this.AEL(Aq);},UpdateAgeRegistration:function(BbZ){if(this.AdQ===BbZ)return;
this.AdQ=BbZ;A.abo([this,this.A8e,this.BaT],0);},Axc:function(E){if(this.K&&this.
K.Axc)return this.K.Axc.apply(this,arguments);else return C.DeviceClass.Bv0.apply(
this,arguments);},Bv0:function(E){},Bbp:function(Aq){this.Axc(Aq);},UpdateWeightRecordingScope:
function(Bb5){if(this.WeightRecordingScope===Bb5)return;this.WeightRecordingScope=
Bb5;A.abo([this,this.A9h,this.Bbp],0);},JT:function(E){if(this.K&&this.K.JT)return this.
K.JT.apply(this,arguments);else return C.DeviceClass.Bu_.apply(this,arguments);}
,Bu_:function(E){},AZ9:function(Aq){this.JT(Aq);},UpdateGender:function(L4){if(this.
Gender===L4)return;this.Gender=L4;A.abo([this,this.Wv,this.AZ9],0);},ArR:function(
E){if(this.K&&this.K.ArR)return this.K.ArR.apply(this,arguments);else return C.DeviceClass.
Bva.apply(this,arguments);},Bva:function(E){},AyK:function(Aq){this.ArR(Aq);},UpdateIDLastUsedMale:
function(Rp){if(this.Aq3===Rp)return;this.Aq3=Rp;A.abo([this,this.Awd,this.AyK],
0);},ArQ:function(E){if(this.K&&this.K.ArQ)return this.K.ArQ.apply(this,arguments
);else return C.DeviceClass.Bu$.apply(this,arguments);},Bu$:function(E){},AyJ:function(
Aq){this.ArQ(Aq);},UpdateIDLastUsedFemale:function(Rp){if(this.Aq2===Rp)return;this.
Aq2=Rp;A.abo([this,this.Awc,this.AyJ],0);},Zl:function(E){if(this.K&&this.K.Zl)return this.
K.Zl.apply(this,arguments);else return C.DeviceClass.BuK.apply(this,arguments);}
,BuK:function(E){},AIK:function(Aq){this.Zl(Aq);},UpdateAnimalListContent:function(
AK){if(this.Kj===AK)return;this.Kj=AK;A.abo([this,this.AEt,this.AIK],0);},AEN:function(
E){if(this.K&&this.K.AEN)return this.K.AEN.apply(this,arguments);else return C.DeviceClass.
BuG.apply(this,arguments);},BuG:function(E){},BaU:function(Aq){this.AEN(Aq);},UpdateAlarmListAction:
function(AK){if(this.AL9===AK)return;this.AL9=AK;A.abo([this,this.A8g,this.BaU],
0);},AE7:function(E){if(this.K&&this.K.AE7)return this.K.AE7.apply(this,arguments
);else return C.DeviceClass.Bu5.apply(this,arguments);},Bu5:function(E){},Ba3:function(
Aq){this.AE7(Aq);},UpdateFlashLightInMeasureState:function(BbV){if(this.AmO===BbV
)return;this.AmO=BbV;A.abo([this,this.A8s,this.Ba3],0);},AeV:function(E){if(this.
K&&this.K.AeV)return this.K.AeV.apply(this,arguments);else return C.DeviceClass.
BuJ.apply(this,arguments);},BuJ:function(E){},AIJ:function(Aq){this.AeV(Aq);},UpdateAnimalInfoContent:
function(AK){if(this.D9===AK)return;this.D9=AK;A.abo([this,this.AEs,this.AIJ],0);
},AFY:function(E){if(this.K&&this.K.AFY)return this.K.AFY.apply(this,arguments);
else return C.DeviceClass.BvV.apply(this,arguments);},BvV:function(E){},Bbk:function(
Aq){this.AFY(Aq);},UpdateWatchListAction:function(AK){if(this.AVC===AK)return;this.
AVC=AK;A.abo([this,this.A9c,this.Bbk],0);},AE9:function(E){if(this.K&&this.K.AE9
)return this.K.AE9.apply(this,arguments);else return C.DeviceClass.Bu7.apply(this
,arguments);},Bu7:function(E){},Ba5:function(Aq){this.AE9(Aq);},UpdateFreshCowListAction:
function(AK){if(this.AOA===AK)return;this.AOA=AK;A.abo([this,this.A8u,this.Ba5],
0);},ResetActiveActions:function(G){if(this.K&&this.K.ResetActiveActions)return this.
K.ResetActiveActions.apply(this,arguments);else return C.DeviceClass.Bv7.apply(this
,arguments);},Bv7:function(G){},BGp:function(s){this.ResetActiveActions(s);},ResetAutoActions:
function(G){if(this.K&&this.K.ResetAutoActions)return this.K.ResetAutoActions.apply(
this,arguments);else return C.DeviceClass.Bv9.apply(this,arguments);},Bv9:function(
G){},BGr:function(s){this.ResetAutoActions(s);},Awp:function(E){if(this.K&&this.
K.Awp)return this.K.Awp.apply(this,arguments);else return C.DeviceClass.BuM.apply(
this,arguments);},BuM:function(E){},BaV:function(Aq){this.Awp(Aq);},Ar5:function(
E){if(this.K&&this.K.Ar5)return this.K.Ar5.apply(this,arguments);else return C.DeviceClass.
BvJ.apply(this,arguments);},BvJ:function(E){},Bbf:function(Aq){this.Ar5(Aq);},Ar6:
function(E){if(this.K&&this.K.Ar6)return this.K.Ar6.apply(this,arguments);else return C.
DeviceClass.BvK.apply(this,arguments);},BvK:function(E){},Bbg:function(Aq){this.
Ar6(Aq);},Asq:function(G){if(this.K&&this.K.Asq)return this.K.Asq.apply(this,arguments
);else return C.DeviceClass.Bwa.apply(this,arguments);},Bwa:function(G){},BGu:function(
s){this.Asq(s);},UpdateTemperaturesLowString:function(AK){if(this.AGU===AK)return;
this.AGU=AK;A.abo([this,this.A85,this.Bbg],0);},UpdateTemperaturesHighString:function(
AK){if(this.AGT===AK)return;this.AGT=AK;A.abo([this,this.A84,this.Bbf],0);},UpdateAnimalTypesString:
function(AK){if(this.ABJ===AK)return;this.ABJ=AK;A.abo([this,this.A8i,this.BaV],
0);},AwI:function(E){if(this.K&&this.K.AwI)return this.K.AwI.apply(this,arguments
);else return C.DeviceClass.Bu9.apply(this,arguments);},Bu9:function(E){},Ba7:function(
Aq){this.AwI(Aq);},UpdateFreshCowsHideMeasured:function(AK){if(this.AqQ===AK)return;
this.AqQ=AK;A.abo([this,this.A8w,this.Ba7],0);},ArX:function(E){if(this.K&&this.
K.ArX)return this.K.ArX.apply(this,arguments);else return C.DeviceClass.Bvq.apply(
this,arguments);},Bvq:function(E){},Bba:function(Aq){this.ArX(Aq);},UpdateNaisIdLastUsedMale:
function(Xj){if(this.AEf===Xj)return;this.AEf=Xj;A.abo([this,this.A8M,this.Bba],
0);},ArW:function(E){if(this.K&&this.K.ArW)return this.K.ArW.apply(this,arguments
);else return C.DeviceClass.Bvp.apply(this,arguments);},Bvp:function(E){},Ba$:function(
Aq){this.ArW(Aq);},UpdateNaisIdLastUsedFemale:function(Xj){if(this.AEe===Xj)return;
this.AEe=Xj;A.abo([this,this.A8L,this.Ba$],0);},AwV:function(E){if(this.K&&this.
K.AwV)return this.K.AwV.apply(this,arguments);else return C.DeviceClass.Bvn.apply(
this,arguments);},Bvn:function(E){},AyM:function(Aq){this.AwV(Aq);},UpdateNaisIdIncrementMale:
function(Alp){if(this.ARS===Alp)return;this.ARS=Alp;A.abo([this,this.Awh,this.AyM
],0);},AwU:function(E){if(this.K&&this.K.AwU)return this.K.AwU.apply(this,arguments
);else return C.DeviceClass.Bvm.apply(this,arguments);},Bvm:function(E){},AyL:function(
Aq){this.AwU(Aq);},UpdateNaisIdIncrementFemale:function(Alp){if(this.ARR===Alp)return;
this.ARR=Alp;A.abo([this,this.Awg,this.AyL],0);},UpdateFirmware:function(){if(this.
K&&this.K.UpdateFirmware)return this.K.UpdateFirmware.apply(this,arguments);else
return C.DeviceClass.BaH.apply(this,arguments);},BaH:function(){},Anu:function(E
){if(this.K&&this.K.Anu)return this.K.Anu.apply(this,arguments);else return C.DeviceClass.
BuS.apply(this,arguments);},BuS:function(E){},BaZ:function(Aq){this.Anu(Aq);},UpdateBootloaderMessage:
function(AK){if(this.Aqq===AK)return;this.Aqq=AK;A.abo([this,this.A8o,this.BaZ],
0);},AEI:function(E){if(this.K&&this.K.AEI)return this.K.AEI.apply(this,arguments
);else return C.DeviceClass.BuA.apply(this,arguments);},BuA:function(E){},BaN:function(
Aq){this.AEI(Aq);},UpdateActionListAction:function(AK){if(this.ABC===AK)return;this.
ABC=AK;A.abo([this,this.A79,this.BaN],0);},Awn:function(E){if(this.K&&this.K.Awn
)return this.K.Awn.apply(this,arguments);else return C.DeviceClass.BuB.apply(this
,arguments);},BuB:function(E){},BaO:function(Aq){this.Awn(Aq);},UpdateActionListHideMeasured:
function(AK){if(this.Aqc===AK)return;this.Aqc=AK;A.abo([this,this.A7_,this.BaO],
0);},Uj:function(E){if(this.K&&this.K.Uj)return this.K.Uj.apply(this,arguments);
else return C.DeviceClass.BuI.apply(this,arguments);},BuI:function(E){},Aoy:function(
Aq){this.Uj(Aq);},UpdateAnimalIdGenerationMethod:function(Bcj){if(this.Ij===Bcj)
return;this.Ij=Bcj;A.abo([this,this.Ann,this.Aoy],0);},AwA:function(E){if(this.K&&
this.K.AwA)return this.K.AwA.apply(this,arguments);else return C.DeviceClass.BuZ.
apply(this,arguments);},BuZ:function(E){},AZ7:function(Aq){this.AwA(Aq);},UpdateDirectionOfCountingFemale:
function(Alj){if(this.ACx===Alj)return;this.ACx=Alj;A.abo([this,this.ASq,this.AZ7
],0);},AwB:function(E){if(this.K&&this.K.AwB)return this.K.AwB.apply(this,arguments
);else return C.DeviceClass.Bu0.apply(this,arguments);},Bu0:function(E){},AZ8:function(
Aq){this.AwB(Aq);},UpdateDirectionOfCountingMale:function(Alj){if(this.ACy===Alj
)return;this.ACy=Alj;A.abo([this,this.ASr,this.AZ8],0);},AwC:function(E){if(this.
K&&this.K.AwC)return this.K.AwC.apply(this,arguments);else return C.DeviceClass.
Bu1.apply(this,arguments);},Bu1:function(E){},AIN:function(Aq){this.AwC(Aq);},UpdateDirectionOfCountingUnisex:
function(Alj){if(this.Au0===Alj)return;this.Au0=Alj;A.abo([this,this.AEx,this.AIN
],0);},ArS:function(E){if(this.K&&this.K.ArS)return this.K.ArS.apply(this,arguments
);else return C.DeviceClass.Bvb.apply(this,arguments);},Bvb:function(E){},Aoz:function(
Aq){this.ArS(Aq);},UpdateIDLastUsedUnisex:function(Rp){if(this.AjS===Rp)return;this.
AjS=Rp;A.abo([this,this.Anq,this.Aoz],0);},ArY:function(E){if(this.K&&this.K.ArY
)return this.K.ArY.apply(this,arguments);else return C.DeviceClass.Bvr.apply(this
,arguments);},Bvr:function(E){},A0a:function(Aq){this.ArY(Aq);},UpdateNaisIdLastUsedUnisex:
function(Xj){if(this.Av2===Xj)return;this.Av2=Xj;A.abo([this,this.ASz,this.A0a],
0);},AwW:function(E){if(this.K&&this.K.AwW)return this.K.AwW.apply(this,arguments
);else return C.DeviceClass.Bvo.apply(this,arguments);},Bvo:function(E){},AyN:function(
Aq){this.AwW(Aq);},UpdateNaisIdIncrementUnisex:function(Alp){if(this.ART===Alp)return;
this.ART=Alp;A.abo([this,this.Awi,this.AyN],0);},Aku:function(E){if(this.K&&this.
K.Aku)return this.K.Aku.apply(this,arguments);else return C.DeviceClass.Bu3.apply(
this,arguments);},Bu3:function(E){},AyI:function(Aq){this.Aku(Aq);},UpdateEartagNrAssignmentMode:
function(Alk){if(this.EartagNrAssignmentMode===Alk)return;this.EartagNrAssignmentMode=
Alk;A.abo([this,this.Awb,this.AyI],0);},NZ:function(E){if(this.K&&this.K.NZ)return this.
K.NZ.apply(this,arguments);else return C.DeviceClass.BuU.apply(this,arguments);}
,BuU:function(E){},Bws:function(Aq){this.NZ(Aq);},UpdateBreed:function(AcX){if(this.
Breed===AcX)return;this.Breed=AcX;A.abo([this,this.Av9,this.Bws],0);},AFr:function(
E){if(this.K&&this.K.AFr)return this.K.AFr.apply(this,arguments);else return C.DeviceClass.
Bvj.apply(this,arguments);},Bvj:function(E){},Bwv:function(Aq){this.AFr(Aq);},UpdateMiddlewareVersions:
function(Qf,A0U,A0V,A02,A0J){this.Sy.OnSetTimestamp(Qf);this.Sy.AFm(A0U);this.Sy.
AFs(A0V);this.Sy.AFC(A02);this.Sy.AE3(A0J);A.abo([this,this.Bk3,this.Bwv],0);},AFl:
function(E){if(this.K&&this.K.AFl)return this.K.AFl.apply(this,arguments);else return C.
DeviceClass.Bvd.apply(this,arguments);},Bvd:function(E){},Bwu:function(Aq){this.
AFl(Aq);},UpdateMainboardVersions:function(Qf,A0S,A0T,A0R,A08,A09,A07){this.QZ.OnSetTimestamp(
Qf);this.QZ.AFj(A0S);this.QZ.AFk(A0T);this.QZ.AFi(A0R);this.QZ.AFQ(A08);this.QZ.
AFR(A09);this.QZ.AFP(A07);A.abo([this,this.Bk1,this.Bwu],0);},AFS:function(E){if(
this.K&&this.K.AFS)return this.K.AFS.apply(this,arguments);else return C.DeviceClass.
BvM.apply(this,arguments);},BvM:function(E){},BwB:function(Aq){this.AFS(Aq);},UpdateTorchboardVersions:
function(Qf,A0S,A0T,A0R,A08,A09,A07){this.SX.OnSetTimestamp(Qf);this.SX.AFj(A0S);
this.SX.AFk(A0T);this.SX.AFi(A0R);this.SX.AFQ(A08);this.SX.AFR(A09);this.SX.AFP(
A07);A.abo([this,this.Blp,this.BwB],0);},AET:function(E){if(this.K&&this.K.AET)return this.
K.AET.apply(this,arguments);else return C.DeviceClass.BuT.apply(this,arguments);
},BuT:function(E){},Bwr:function(Aq){this.AET(Aq);},UpdateBootloaderVersions:function(
Qf,A0U,A0V,A02,A0J){this.RZ.OnSetTimestamp(Qf);this.RZ.AFm(A0U);this.RZ.AFs(A0V);
this.RZ.AFC(A02);this.RZ.AE3(A0J);A.abo([this,this.Bkz,this.Bwr],0);},AE5:function(
E){if(this.K&&this.K.AE5)return this.K.AE5.apply(this,arguments);else return C.DeviceClass.
Bu2.apply(this,arguments);},Bu2:function(E){},Ba2:function(Aq){this.AE5(Aq);},UpdateDryCowListAction:
function(AK){if(this.ANY===AK)return;this.ANY=AK;A.abo([this,this.A8q,this.Ba2],
0);},AJC:function(A0K){if(this.K&&this.K.AJC)return this.K.AJC.apply(this,arguments
);else return C.DeviceClass.BwN.apply(this,arguments);},BwN:function(A0K){return false;
},AER:function(E){if(this.K&&this.K.AER)return this.K.AER.apply(this,arguments);
else return C.DeviceClass.BuQ.apply(this,arguments);},BuQ:function(E){},AIL:function(
Aq){this.AER(Aq);},UpdateBirthListView:function(AK){if(this.Aqo===AK)return;this.
Aqo=AK;A.abo([this,this.AEu,this.AIL],0);},BatchResetBirthNoticePending:function(
){var O;var AiW=0;var Adg=A._GetAutoObject(C.Device).An.Filter;var Be=A._GetAutoObject(
C.Helper).AOE();A._GetAutoObject(C.Device).An.Bk(Be);for(O=0;O<A._GetAutoObject(
C.Device).An.B9();O++){A._GetAutoObject(C.Helper).G7(O);A._GetAutoObject(C.Helper
).W.Ae4(false);A._GetAutoObject(C.Helper).W.Ch(A._GetAutoObject(C.Device).An);AiW++;
}A._GetAutoObject(C.Device).An.Bk(Adg);return AiW;},UpdateTransferProgress:function(
AK){if(this.AxN===AK)return;this.AxN=AK;A.abo([this,this.ASM,this.A0j],0);},AFT:
function(E){if(this.K&&this.K.AFT)return this.K.AFT.apply(this,arguments);else return C.
DeviceClass.BvN.apply(this,arguments);},BvN:function(E){A.ab5("%s",P9);},A0j:function(
Aq){this.AFT(Aq);},UpdateTransferTarget:function(AK){if(this.Afp===AK)return;this.
Afp=AK;A.abo([this,this.A88,this.Bbh],0);},Ar7:function(E){if(this.K&&this.K.Ar7
)return this.K.Ar7.apply(this,arguments);else return C.DeviceClass.BvO.apply(this
,arguments);},BvO:function(E){A.ab5("%s",J2);},Bbh:function(Aq){this.Ar7(Aq);},AsE:
function(){if(this.K&&this.K.AsE)return this.K.AsE.apply(this,arguments);else return C.
DeviceClass.Bwl.apply(this,arguments);},Bwl:function(){},Aw0:function(E){if(this.
K&&this.K.Aw0)return this.K.Aw0.apply(this,arguments);else return C.DeviceClass.
Bvx.apply(this,arguments);},Bvx:function(E){},A0d:function(Aq){this.Aw0(Aq);},UpdatePremisesID:
function(Rp){if(this.PV===Rp)return;this.PV=Rp;A.abo([this,this.ASE,this.A0d],0);
},AwT:function(E){if(this.K&&this.K.AwT)return this.K.AwT.apply(this,arguments);
else return C.DeviceClass.Bvl.apply(this,arguments);},Bvl:function(E){},AIQ:function(
Aq){this.AwT(Aq);},UpdateMotherSelectionDriedOffFilter:function(AK){if(this.AbS===
AK)return;this.AbS=AK;A.abo([this,this.AEB,this.AIQ],0);},AE_:function(E){if(this.
K&&this.K.AE_)return this.K.AE_.apply(this,arguments);else return C.DeviceClass.
Bu8.apply(this,arguments);},Bu8:function(E){},Ba6:function(Aq){this.AE_(Aq);},UpdateFreshCowSpan:
function(AK){if(this.AqP===AK)return;this.AqP=AK;A.abo([this,this.A8v,this.Ba6],
0);},UpdateUSBDevice:function(Bca,Bcb,Bb3){if(((this.P1.ZX===Bca)&&(this.P1.AsO===
Bcb))&&(this.P1.Ash===Bb3))return;this.P1.A_z(Bca);this.P1.A_B(Bcb);this.P1.A_f(
Bb3);A.abo([this,this.Ww,this.Xc],0);},AFU:function(E){if(this.K&&this.K.AFU)return this.
K.AFU.apply(this,arguments);else return C.DeviceClass.BvR.apply(this,arguments);
},BvR:function(E){A.ab5("%s",E7);},Xc:function(Aq){this.AFU(Aq);},AxD:function(){
if(this.K&&this.K.AxD)return this.K.AxD.apply(this,arguments);else return C.DeviceClass.
Bwf.apply(this,arguments);},Bwf:function(){},Are:function(){if(this.K&&this.K.Are
)return this.K.Are.apply(this,arguments);else return C.DeviceClass.Buz.apply(this
,arguments);},Buz:function(){return false;},AqA:function(){if(this.K&&this.K.AqA
)return this.K.AqA.apply(this,arguments);else return C.DeviceClass.Buu.apply(this
,arguments);},Buu:function(){},AFF:function(E){if(this.K&&this.K.AFF)return this.
K.AFF.apply(this,arguments);else return C.DeviceClass.BvD.apply(this,arguments);
},BvD:function(E){},Bwy:function(Aq){this.AFF(Aq);},UpdateSerialNumber:function(
AK){if(this.AhH===AK)return;this.AhH=AK;A.abo([this,this.Ble,this.Bwy],0);},Awo:
function(E){if(this.K&&this.K.Awo)return this.K.Awo.apply(this,arguments);else return C.
DeviceClass.BuH.apply(this,arguments);},BuH:function(E){},AZ6:function(Aq){this.
Awo(Aq);},UpdateAnimalIdAutoGenerationMethod:function(Bci){if(this.Agw===Bci)return;
this.Agw=Bci;A.abo([this,this.ASl,this.AZ6],0);},ACl:function(){return false;},AGm:
function(){return false;},AFH:function(E){if(this.K&&this.K.AFH)return this.K.AFH.
apply(this,arguments);else return C.DeviceClass.BvE.apply(this,arguments);},BvE:
function(E){},Bbe:function(Aq){this.AFH(Aq);},UpdateShutdownTimer:function(AK){if(
this.AUO===AK)return;this.AUO=AK;A.abo([this,this.A81,this.Bbe],0);},Asr:function(
G){if(this.K&&this.K.Asr)return this.K.Asr.apply(this,arguments);else return C.DeviceClass.
Bwb.apply(this,arguments);},Bwb:function(G){},BGv:function(s){this.Asr(s);},Ar_:
function(E){if(this.K&&this.K.Ar_)return this.K.Ar_.apply(this,arguments);else return C.
DeviceClass.BvX.apply(this,arguments);},BvX:function(E){},Bbm:function(Aq){this.
Ar_(Aq);},Ar$:function(E){if(this.K&&this.K.Ar$)return this.K.Ar$.apply(this,arguments
);else return C.DeviceClass.BvY.apply(this,arguments);},BvY:function(E){},Bbn:function(
Aq){this.Ar$(Aq);},UpdateWeightGainsLowString:function(AK){if(this.AHd===AK)return;
this.AHd=AK;A.abo([this,this.A9f,this.Bbn],0);},UpdateWeightGainsHighString:function(
AK){if(this.AHc===AK)return;this.AHc=AK;A.abo([this,this.A9e,this.Bbm],0);},Awq:
function(E){if(this.K&&this.K.Awq)return this.K.Awq.apply(this,arguments);else return C.
DeviceClass.BuN.apply(this,arguments);},BuN:function(E){},BaW:function(Aq){this.
Awq(Aq);},UpdateAnimalTypesWeightGainsString:function(AK){if(this.ABK===AK)return;
this.ABK=AK;A.abo([this,this.A8j,this.BaW],0);},Ar9:function(E){if(this.K&&this.
K.Ar9)return this.K.Ar9.apply(this,arguments);else return C.DeviceClass.BvW.apply(
this,arguments);},BvW:function(E){},Bbl:function(Aq){this.Ar9(Aq);},Asa:function(
E){if(this.K&&this.K.Asa)return this.K.Asa.apply(this,arguments);else return C.DeviceClass.
Bv2.apply(this,arguments);},Bv2:function(E){},Bbq:function(Aq){this.Asa(Aq);},UpdateWeightValueBirthString:
function(AK){if(this.AHg===AK)return;this.AHg=AK;A.abo([this,this.A9i,this.Bbq],
0);},UpdateWeightGainsAverageString:function(AK){if(this.AHb===AK)return;this.AHb=
AK;A.abo([this,this.A9d,this.Bbl],0);},AwD:function(E){if(this.K&&this.K.AwD)return this.
K.AwD.apply(this,arguments);else return C.DeviceClass.Bu4.apply(this,arguments);
},Bu4:function(E){},Bwt:function(Aq){this.AwD(Aq);},UpdateEvaluationAnimalType:function(
En){if(this.ACF===En)return;this.ACF=En;A.abo([this,this.BkK,this.Bwt],0);},UpdateStartScreen:
function(AK){if(this.AxF===AK)return;this.AxF=AK;A.abo([this,this.Blf,this.Bwz],
0);},Aw4:function(E){if(this.K&&this.K.Aw4)return this.K.Aw4.apply(this,arguments
);else return C.DeviceClass.BvF.apply(this,arguments);},BvF:function(E){},Bwz:function(
Aq){this.Aw4(Aq);},ADS:function(){if(this.K&&this.K.ADS)return this.K.ADS.apply(
this,arguments);else return C.DeviceClass.Bux.apply(this,arguments);},Bux:function(
){return 1;},ADT:function(){if(this.K&&this.K.ADT)return this.K.ADT.apply(this,arguments
);else return C.DeviceClass.Buy.apply(this,arguments);},Buy:function(){return 1;
},GetCommitCount:function(){return 1953;},GetCommitEpoch:function(){return 1711385184;
},GetCommitHash:function(){return A.kR.BhC;},GetVersionMajor:function(){return 0;
},GetVersionMinor:function(){return 9;},GetVersionRev:function(){return 9;},AFq:
function(E){if(this.K&&this.K.AFq)return this.K.AFq.apply(this,arguments);else return C.
DeviceClass.Bvh.apply(this,arguments);},Bvh:function(E){},Ba_:function(Aq){this.
AFq(Aq);},UpdateMaximumAgeNewOnFarm:function(AK){if(this.AvX===AK)return;this.AvX=
AK;A.abo([this,this.A8K,this.Ba_],0);},Aw_:function(E){if(this.K&&this.K.Aw_)return this.
K.Aw_.apply(this,arguments);else return C.DeviceClass.BvP.apply(this,arguments);
},BvP:function(E){},A0k:function(Aq){this.Aw_(Aq);},UpdateTransponderAssignmentIdChangeMethod:
function(Ay3){if(this.Ak2===Ay3)return;this.Ak2=Ay3;A.abo([this,this.ASN,this.A0k
],0);},BatchResetPurchasedNoticePending:function(){var O;var AiW=0;var Adg=A._GetAutoObject(
C.Device).An.Filter;var Be=A._GetAutoObject(C.Helper).Avo();A._GetAutoObject(C.Device
).An.Bk(Be);for(O=0;O<A._GetAutoObject(C.Device).An.B9();O++){A._GetAutoObject(C.
Helper).G7(O);A._GetAutoObject(C.Helper).W.Ae4(false);A._GetAutoObject(C.Helper).
W.Ch(A._GetAutoObject(C.Device).An);AiW++;}A._GetAutoObject(C.Device).An.Bk(Adg);
return AiW;},Bm5:function(E){},UpdateMassRecordingAutomatic:function(AK){if(this.
ARE===AK)return;this.ARE=AK;A.abo([this,this.Bk2,this.Bm5],0);},Ng:function(E){if(
this.K&&this.K.Ng)return this.K.Ng.apply(this,arguments);else return C.DeviceClass.
Bv3.apply(this,arguments);},Bv3:function(E){},BwC:function(Aq){this.Ng(Aq);},UpdateWhereAbouts:
function(AfJ){if(this.WhereAbouts===AfJ)return;this.WhereAbouts=AfJ;A.abo([this,
this.Awl,this.BwC],0);},ArE:function(E){if(this.K&&this.K.ArE)return this.K.ArE.
apply(this,arguments);else return C.DeviceClass.BuC.apply(this,arguments);},BuC:
function(E){},BaQ:function(Aq){this.ArE(Aq);},ArF:function(E){if(this.K&&this.K.
ArF)return this.K.ArF.apply(this,arguments);else return C.DeviceClass.BuD.apply(
this,arguments);},BuD:function(E){},BaR:function(Aq){this.ArF(Aq);},UpdateActiveMassRecordingFields:
function(AK){if(this.ABD===AK)return;this.ABD=AK;A.abo([this,this.A8a,this.BaQ],
0);},UpdateActiveMassRecordingFieldsOrder:function(AK){if(this.ABE===AK)return;this.
ABE=AK;A.abo([this,this.A8b,this.BaR],0);},Aso:function(G){if(this.K&&this.K.Aso
)return this.K.Aso.apply(this,arguments);else return C.DeviceClass.Bv8.apply(this
,arguments);},Bv8:function(G){},BGq:function(s){this.Aso(s);},AFo:function(E){if(
this.K&&this.K.AFo)return this.K.AFo.apply(this,arguments);else return C.DeviceClass.
Bve.apply(this,arguments);},Bve:function(E){},AIO:function(Aq){this.AFo(Aq);},UpdateMassRecordingDateOfBirthMandatory:
function(AK){if(this.AeM===AK)return;this.AeM=AK;A.abo([this,this.AEy,this.AIO],
0);},AFn:function(E){this.UpdateMassRecordingCounter(E);},UpdateMassRecordingCounter:
function(AK){if(this.AvV===AK)return;this.AvV=AK;A.abo([this,this.A8I,this.AFn],
0);},Ajz:function(){if(this.K&&this.K.Ajz)return this.K.Ajz.apply(this,arguments
);else return C.DeviceClass.Bus.apply(this,arguments);},Bus:function(){return false;
},Aqm:function(){if(this.K&&this.K.Aqm)return this.K.Aqm.apply(this,arguments);else
return C.DeviceClass.Bur.apply(this,arguments);},Bur:function(){return false;},Aql:
function(){if(this.K&&this.K.Aql)return this.K.Aql.apply(this,arguments);else return C.
DeviceClass.Buq.apply(this,arguments);},Buq:function(){return false;},AuO:function(
){if(this.K&&this.K.AuO)return this.K.AuO.apply(this,arguments);else return C.DeviceClass.
But.apply(this,arguments);},But:function(){return false;},AwQ:function(E){if(this.
K&&this.K.AwQ)return this.K.AwQ.apply(this,arguments);else return C.DeviceClass.
Bvg.apply(this,arguments);},Bvg:function(E){},Ba9:function(Aq){this.AwQ(Aq);},UpdateMaxWeightValuePrecision:
function(AK){if(this.OK===AK)return;this.OK=AK;A.abo([this,this.A8J,this.Ba9],0);
},AwX:function(E){if(this.K&&this.K.AwX)return this.K.AwX.apply(this,arguments);
else return C.DeviceClass.Bvs.apply(this,arguments);},Bvs:function(E){},Bbb:function(
Aq){this.AwX(Aq);},UpdateNoNaisIdListActions:function(AK){if(this.AR5===AK)return;
this.AR5=AK;A.abo([this,this.A8N,this.Bbb],0);},ResetNoNaisIdListActions:function(
G){if(this.K&&this.K.ResetNoNaisIdListActions)return this.K.ResetNoNaisIdListActions.
apply(this,arguments);else return C.DeviceClass.Bv_.apply(this,arguments);},Bv_:
function(G){},BGs:function(s){this.ResetNoNaisIdListActions(s);},AwY:function(E){
if(this.K&&this.K.AwY)return this.K.AwY.apply(this,arguments);else return C.DeviceClass.
Bvt.apply(this,arguments);},Bvt:function(E){},Bbc:function(Aq){this.AwY(Aq);},UpdateNoTransponderListActions:
function(AK){if(this.AR_===AK)return;this.AR_=AK;A.abo([this,this.A8O,this.Bbc],
0);},ResetNoTransponderListActions:function(G){if(this.K&&this.K.ResetNoTransponderListActions
)return this.K.ResetNoTransponderListActions.apply(this,arguments);else return C.
DeviceClass.Bv$.apply(this,arguments);},Bv$:function(G){},BGt:function(s){this.ResetNoTransponderListActions(
s);},Axe:function(E){if(this.K&&this.K.Axe)return this.K.Axe.apply(this,arguments
);else return C.DeviceClass.Bv4.apply(this,arguments);},Bv4:function(E){},Bbr:function(
Aq){this.Axe(Aq);},UpdateYoungNoTransponderListActions:function(AK){if(this.AVR===
AK)return;this.AVR=AK;A.abo([this,this.A9k,this.Bbr],0);},ResetYoungNoTransponderListActions:
function(G){if(this.K&&this.K.ResetYoungNoTransponderListActions)return this.K.ResetYoungNoTransponderListActions.
apply(this,arguments);else return C.DeviceClass.Bwc.apply(this,arguments);},Bwc:
function(G){},BGw:function(s){this.ResetYoungNoTransponderListActions(s);},Aw$:function(
E){if(this.K&&this.K.Aw$)return this.K.Aw$.apply(this,arguments);else return C.DeviceClass.
BvQ.apply(this,arguments);},BvQ:function(E){},A0l:function(Aq){this.Aw$(Aq);},UpdateTransponderUnlinkIdChangeMethod:
function(Ay3){if(this.An3===Ay3)return;this.An3=Ay3;A.abo([this,this.ASO,this.A0l
],0);},Asn:function(AoC){if(this.K&&this.K.Asn)return this.K.Asn.apply(this,arguments
);else return C.DeviceClass.Bv6.apply(this,arguments);},Bv6:function(AoC){this.GC.
E6();this.GC.AgJ=AoC;this.GC.Fc(1);A._GetAutoObject(C.Device).A3(110,true,A.jV,0
,[this,this.BAr]);},BAr:function(G){var As=(C.PopupContext.isPrototypeOf(G)?G:null
);if(!!As&&(As.PopupState===9))A.aaS([this,this.BB8],this);},BB8:function(G){this.
GC.Fc(2);this.AxD();A._GetAutoObject(C.Device).A3(110,false,A.jV,0,null);},AES:function(
E){if(this.K&&this.K.AES)return this.K.AES.apply(this,arguments);else return C.DeviceClass.
BuR.apply(this,arguments);},BuR:function(E){},BaY:function(Aq){this.AES(Aq);},UpdateBirthRegistrationsListResetOnExport:
function(AK){if(this.AMT===AK)return;this.AMT=AK;A.abo([this,this.A8m,this.BaY],
0);},AFz:function(E){if(this.K&&this.K.AFz)return this.K.AFz.apply(this,arguments
);else return C.DeviceClass.Bvy.apply(this,arguments);},Bvy:function(E){},Bbd:function(
Aq){this.AFz(Aq);},UpdatePurchasedListResetOnExport:function(AK){if(this.AT3===AK
)return;this.AT3=AK;A.abo([this,this.A8Q,this.Bbd],0);},AEr:function(){return this.
Ii;},Av7:function(){return this.Aa3;},Av_:function(){return this.AmB;},ASH:function(
){return this.ScanState;},AEz:function(){return this.MeasureState;},AED:function(
){return this.Lt;},A8E:function(){return this.Language;},Arx:function(){return this.
TemperatureUnit;},A8p:function(){return this.AM0;},ASy:function(){return this.AEd;
},Awk:function(){return this.OverlayMenu;},A89:function(){return this.AcD;},ASJ:
function(){return this.SyncState;},A8_:function(){return this.AsP;},AEE:function(
){return this.AVA;},ASG:function(){return this.RatingMode;},Aru:function(){return this.
AmP;},ASL:function(){return this.AVg;},Bk9:function(){return this.AT4;},Bkw:function(
){return this.AutoRegistrationMode;},ASI:function(){return this.OR;},Uh:function(
){return this.A1;},Ui:function(){return this.AF;},AEF:function(){return this.KW;
},ASx:function(){return this.MassUnit;},A7$:function(){return this.Pk;},ASk:function(
){return this.Auy;},A8k:function(){return this.AutoActions;},PP:function(){return this.
AnimalType;},A9g:function(){return this.WeightRecordingMode;},ASD:function(){return this.
AF_;},AEw:function(){return this.HF;},A8e:function(){return this.AdQ;},A9h:function(
){return this.WeightRecordingScope;},Wv:function(){return this.Gender;},Awd:function(
){return this.Aq3;},Awc:function(){return this.Aq2;},AEt:function(){return this.
Kj;},A8g:function(){return this.AL9;},A8s:function(){return this.AmO;},AEs:function(
){return this.D9;},A9c:function(){return this.AVC;},A8u:function(){return this.AOA;
},A8i:function(){return this.ABJ;},A84:function(){return this.AGT;},A85:function(
){return this.AGU;},A8w:function(){return this.AqQ;},A8M:function(){return this.
AEf;},A8L:function(){return this.AEe;},Awh:function(){return this.ARS;},Awg:function(
){return this.ARR;},A8o:function(){return this.Aqq;},A79:function(){return this.
ABC;},A7_:function(){return this.Aqc;},Ann:function(){return this.Ij;},ASq:function(
){return this.ACx;},ASr:function(){return this.ACy;},AEx:function(){return this.
Au0;},Anq:function(){return this.AjS;},ASz:function(){return this.Av2;},Awi:function(
){return this.ART;},Awb:function(){return this.EartagNrAssignmentMode;},Av9:function(
){return this.Breed;},Bk3:function(){return this.Sy;},Bk1:function(){return this.
QZ;},Blp:function(){return this.SX;},Bkz:function(){return this.RZ;},A8q:function(
){return this.ANY;},AEu:function(){return this.Aqo;},ASM:function(){return this.
AxN;},A88:function(){return this.Afp;},ASE:function(){return this.PV;},AEB:function(
){return this.AbS;},A8v:function(){return this.AqP;},Ww:function(){return this.P1;
},Ble:function(){return this.AhH;},ASl:function(){return this.Agw;},A81:function(
){return this.AUO;},A9e:function(){return this.AHc;},A9f:function(){return this.
AHd;},A8j:function(){return this.ABK;},A9d:function(){return this.AHb;},A9i:function(
){return this.AHg;},BkK:function(){return this.ACF;},Blf:function(){return this.
AxF;},A8K:function(){return this.AvX;},ASN:function(){return this.Ak2;},Bk2:function(
){return this.ARE;},Awl:function(){return this.WhereAbouts;},A8a:function(){return this.
ABD;},A8b:function(){return this.ABE;},AEy:function(){return this.AeM;},A8I:function(
){return this.AvV;},A8J:function(){return this.OK;},A8N:function(){return this.AR5;
},A8O:function(){return this.AR_;},A9k:function(){return this.AVR;},ASO:function(
){return this.An3;},A8m:function(){return this.AMT;},A8Q:function(){return this.
AT3;},_Init:function(aArg){C.Table._Init.call(this.An={I:this},0);C.Table._Init.
call(this.Bt={I:this},0);C.Table._Init.call(this.Agu={I:this},0);A.Core.A$v._Init.
call(this.AnL={I:this},0);C.Table._Init.call(this.Po={I:this},0);this.__proto__=
C.DeviceClass;this.An.OnSetId(0);this.Bt.OnSetId(1);this.Agu.OnSetId(3);this.Po.
OnSetId(4);this.OR=A._NewObject(C.Transponder,0);this.Sy=A._NewObject(C.AxC,0);this.
QZ=A._NewObject(C.Avr,0);this.SX=A._NewObject(C.Avr,0);this.RZ=A._NewObject(C.AxC
,0);this.P1=A._NewObject(C.A$M,0);this.GC=A._NewObject(C.VP,0);var J3=this._variants(
);if(J3){this.K={};J3._Init.call(this,aArg);}A.h7++;},_Done:function(){if(this.K
)this.K._Done.call(this);this.__proto__=null;this.An._Done();this.Bt._Done();this.
Agu._Done();this.AnL._Done();this.Po._Done();A.h7--;},_ReInit:function(){this.An.
_ReInit();this.Bt._ReInit();this.Agu._ReInit();this.AnL._ReInit();this.Po._ReInit(
);if(this.K)this.K._ReInit.call(this);},_Mark:function(D){var B;if((B=this.OR)&&(
B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Sy)&&(B._cycle!=D))B._Mark(B._cycle=
D);if((B=this.QZ)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.SX)&&(B._cycle!=
D))B._Mark(B._cycle=D);if((B=this.RZ)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.
P1)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.GC)&&(B._cycle!=D))B._Mark(B._cycle=
D);if((B=this.An)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Bt)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Agu)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AnL)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.Po)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
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
A5:A.jV,Abh:function(){var Av=A._NewObject(C.StringFilterCriterion,0);Av.E$(this
);return Av;},E$:function(AI){C.FilterCriterion.E$.call(this,AI);var Av=(C.StringFilterCriterion.
isPrototypeOf(AI)?AI:null);if(!!Av)this.A5=Av.A5;},_Init:function(aArg){C.FilterCriterion.
_Init.call(this,aArg);this.__proto__=C.StringFilterCriterion;},_className:"Device::StringFilterCriterion"
};C.Table={CF:function(Ad,A4){if(this.K&&this.K.CF)return this.K.CF.apply(this,arguments
);else return C.ITable.CF.apply(this,arguments);},VY:function(Ad,A4){if(this.K&&
this.K.VY)return this.K.VY.apply(this,arguments);else return C.ITable.VY.apply(this
,arguments);},H2:function(Ad,A4){if(this.K&&this.K.H2)return this.K.H2.apply(this
,arguments);else return C.ITable.H2.apply(this,arguments);},OnSetId:function(E){
if(this.K&&this.K.OnSetId)return this.K.OnSetId.apply(this,arguments);else return C.
ITable.OnSetId.apply(this,arguments);},B9:function(){if(this.K&&this.K.B9)return this.
K.B9.apply(this,arguments);else return C.ITable.B9.apply(this,arguments);},Bk:function(
E){if(this.K&&this.K.Bk)return this.K.Bk.apply(this,arguments);else return C.ITable.
Bk.apply(this,arguments);},VZ:function(Ad,A4){if(this.K&&this.K.VZ)return this.K.
VZ.apply(this,arguments);else return C.ITable.VZ.apply(this,arguments);},Sj:function(
Ad,A4){if(this.K&&this.K.Sj)return this.K.Sj.apply(this,arguments);else return C.
ITable.Sj.apply(this,arguments);},Oy:function(){if(this.K&&this.K.Oy)return this.
K.Oy.apply(this,arguments);else return C.ITable.Oy.apply(this,arguments);},OA:function(
AoO){if(this.K&&this.K.OA)return this.K.OA.apply(this,arguments);else return C.ITable.
OA.apply(this,arguments);},YB:function(){if(this.K&&this.K.YB)return this.K.YB.apply(
this,arguments);else return C.ITable.YB.apply(this,arguments);},ZH:function(Ad,A4
,CZ){if(this.K&&this.K.ZH)return this.K.ZH.apply(this,arguments);else return C.ITable.
ZH.apply(this,arguments);},Hn:function(Ad,A4,CZ){if(this.K&&this.K.Hn)return this.
K.Hn.apply(this,arguments);else return C.ITable.Hn.apply(this,arguments);},ZG:function(
Ad,A4,CZ){if(this.K&&this.K.ZG)return this.K.ZG.apply(this,arguments);else return C.
ITable.ZG.apply(this,arguments);},N5:function(Ad,A4,CZ){if(this.K&&this.K.N5)return this.
K.N5.apply(this,arguments);else return C.ITable.N5.apply(this,arguments);},ZF:function(
Ad,A4,CZ){if(this.K&&this.K.ZF)return this.K.ZF.apply(this,arguments);else return C.
ITable.ZF.apply(this,arguments);},LS:function(aColumn,A_){if(this.K&&this.K.LS)return this.
K.LS.apply(this,arguments);else return C.ITable.LS.apply(this,arguments);},KN:function(
Ad,A4){if(this.K&&this.K.KN)return this.K.KN.apply(this,arguments);else return C.
ITable.KN.apply(this,arguments);},Uy:function(Ad,A4,CZ){if(this.K&&this.K.Uy)return this.
K.Uy.apply(this,arguments);else return C.ITable.Uy.apply(this,arguments);},AgV:function(
aColumn,A_){if(this.K&&this.K.AgV)return this.K.AgV.apply(this,arguments);else return C.
ITable.AgV.apply(this,arguments);},E6:function(){if(this.K&&this.K.E6)return this.
K.E6.apply(this,arguments);else return C.ITable.E6.apply(this,arguments);},AjI:function(
aColumn,A_){if(this.K&&this.K.AjI)return this.K.AjI.apply(this,arguments);else return C.
ITable.AjI.apply(this,arguments);},Aej:function(aColumn,A_){if(this.K&&this.K.Aej
)return this.K.Aej.apply(this,arguments);else return C.ITable.Aej.apply(this,arguments
);},HI:function(){if(this.K&&this.K.HI)return this.K.HI.apply(this,arguments);else
return C.ITable.HI.apply(this,arguments);},Abp:function(){if(this.K&&this.K.Abp)
return this.K.Abp.apply(this,arguments);else return C.ITable.Abp.apply(this,arguments
);},QI:function(){if(this.K&&this.K.QI)return this.K.QI.apply(this,arguments);else
return C.ITable.QI.apply(this,arguments);},_Init:function(aArg){C.ITable._Init.call(
this,aArg);this.__proto__=C.Table;var J3=this._variants();if(J3){this.K={};J3._Init.
call(this,aArg);}},_Done:function(){if(this.K)this.K._Done.call(this);this.__proto__=
C.ITable;C.ITable._Done.call(this);},_ReInit:function(){C.ITable._ReInit.call(this
);if(this.K)this.K._ReInit.call(this);},_Mark:function(D){C.ITable._Mark.call(this
,D);if(this.K)this.K._Mark(D);},_variants:function(){return A.acs.Table._variants(
);},K:null,_className:"Device::Table"};C.TableId={Animal:0,Rating:1,Undefined:2,
AnimalGroup:3,CalfDeregistrations:4};C.ScanState={Idle:0,Progress:1,IdScanned:2,
NotFound:3,Error:4,LAST:5};C.RatedAttribute={None:0,Feed:1,Appearance:2,Respiratory:
3,Faeces:4};C.ConverterClass={M1:null,AkZ:function(AoM){var BcT;var Auk=this.AU7(
AoM/100,0,A._GetAutoObject(C.Device).TemperatureUnit);BcT=A.abk(Auk,0,1);return BcT;
},A$D:function(Np){if(Np<=0)return 0;else if(Np<=1)return 5;else if(Np<=2)return 3;
else if(Np<=4)return 2;else if(Np<=6)return 1;else if(Np<=8)return 4;else return 0;
},AdZ:function(Np){var a=0;switch(Np){case 3:a=2;break;case 2:a=4;break;case 1:a=
6;break;case 0:a=0;break;case 4:a=8;break;case 5:a=1;break;default:A.ab5("%s",N$
);}return a;},AsG:function(En,Rt){var Nr=A._GetAutoObject(C.Converter).Ajl(Rt,En
);switch(Nr){case 3:return 1;case 2:return 2;case 1:return 3;case 0:return 4;default:
throw new Error(P_+Nr.toFixed());}},AhP:function(){var B;var D8=A._NewObject(A.Core.
Bs,0).Initialize(A._GetAutoObject(C.Helper).Dv());D8.Any(0);D8.AnB(0);D8.AnE(0);
return((B=(D8.JR()|0))<0)?B+0x100000000:B;},BhG:function(Ati){var Do;switch(Ati){
case 36:Do=MH;break;case 40:Do=S8;break;case 56:Do=UQ;break;case 70:Do=Z1;break;
case 100:Do=W1;break;case 124:Do=It;break;case 156:Do=UR;break;case 158:Do=Z2;break;
case 191:Do=W2;break;case 196:Do=Z3;break;case 203:Do=W3;break;case 208:Do=Z4;break;
case 233:Do=Z5;break;case 246:Do=US;break;case 250:Do=W4;break;case 276:Do=O3;break;
case 300:Do=Z6;break;case 348:Do=O4;break;case 372:Do=Rl;break;case 380:Do=W5;break;
case 392:Do=W6;break;case 428:Do=UT;break;case 440:Do=Z7;break;case 442:Do=Z8;break;
case 470:Do=W7;break;case 528:Do=W8;break;case 578:Do=S9;break;case 616:Do=UU;break;
case 620:Do=UV;break;case 642:Do=AcK;break;case 643:Do=S_;break;case 703:Do=Z9;break;
case 705:Do=Afz;break;case 724:Do=Z_;break;case 752:Do=W9;break;case 756:Do=Z$;break;
case 792:Do=W_;break;case 804:Do=AhT;break;case 826:Do=KY;break;case 840:Do=AcL;
break;default:Do=Ati.toFixed();}return Do;},Ak8:function(MM){var Aap;if((MM<10000
)&&(A._GetAutoObject(C.Device).OK===2))Aap=2;else if((MM<100000)&&!!A._GetAutoObject(
C.Device).OK)Aap=1;else Aap=0;return this.S7(MM,Aap,false);},Ax0:function(MM,Aap
){return this.S7(MM,Aap,false);},S7:function(MM,Aap,BzW){var B;var AlC=A.jV;switch(
A._GetAutoObject(C.Device).MassUnit){case 0:if(BzW)AlC=A.abl(MM,0,0);else{var Bee=
MM<0;if(Aap<3)MM=MM+(((Bee?-1:1)*5)*(Math.pow(10,2-Aap)|0));AlC=(((((B=MM)>-2147483648
)?Math.abs(B):B)/1000)|0).toFixed();if(Aap>0)AlC=AlC+(Lv+A.abV(A.abl((((B=MM)>-2147483648
)?Math.abs(B):B)%1000,3,10),Aap));if(Bee)AlC=AhU+AlC;}break;case 1:AlC=A.abk(MM/
453.592,0,Aap);break;default:A.ab5("%s%s",Aob,A._GetAutoObject(C.Device).MassUnit.
toFixed());}return AlC;},Rh:function(Jj){var A4n=Jj.toFixed();var Bgw=A4n.length;
if((Bgw>=14)&&(Bgw<=15)){var A2e=this.AxQ(Jj);var ByN=A._GetAutoObject(C.Converter
).BhG(A2e);A4n=(ByN+Oa)+A.abm(A._GetAutoObject(C.Helper).Sh(Jj,0,12),12,10);}return A4n;
},AmS:function(L4){switch(L4){case 0:return A.aaL(A.ach.AQv);case 1:return A.aaL(
A.ach.ADB);case 2:return A.aaL(A.ach.ADF);default:{A.ab5("%s%e",W$,L4);return null;
}}},A41:function(Byj){switch(Byj){case 0:return A.aaL(A.ach.AvB);case 1:return A.
aaL(A.ach.ADx);case 2:return A.aaL(A.ach.AQp);default:throw new Error(Aaa);}},AdX:
function(AJi){switch(AJi){case 0:case 14:return A.aaL(A.ach.AjT);case 2:return A.
aaL(A.ach.Aq_);case 1:return A.aaL(A.ach.Ag3);case 3:switch(A._GetAutoObject(C.Device
).MassUnit){case 0:return A.aaL(A.ach.AvK);case 1:return A.aaL(A.ach.AvL);default:
throw new Error(AhV+A._GetAutoObject(C.Device).MassUnit.toFixed());}break;case 4:
return A.aaL(A.ach.APO);case 5:return A.aaL(A.ach.APP);case 6:return A.aaL(A.ach.
APU);case 7:return A.aaL(A.ach.APc);case 8:case 13:return A.aaL(A.ach.APj);case 9:
return A.aaL(A.ach.AC_);case 10:return A.aaL(A.ach.APi);case 12:return A.aaL(A.ach.
APk);case 11:return A.aaL(A.ach.AP0);default:throw new Error(AhW+AJi.toFixed());
}},Bg8:function(Ay7){switch(Ay7){case 0:return A.aaL(A.ach.AQo);case 3:return A.
aaL(A.ach.Aq_);case 1:return A.aaL(A.ach.Ag3);case 2:return A._GetAutoObject(A.acj.
DU).Bdg();default:throw new Error(AhW+Ay7.toFixed());}},BhF:function(Ati){switch(
Ati){case 977:return AcM;case 978:return UW;case 980:return Aoc;case 981:return Aod;
case 982:return Aoe;case 983:return Aof;case 984:return Ak$;case 985:return AsV;
default:return A.aaR(A.acf.Unknown);}},BhY:function(AcZ){switch(AcZ){case 1:return 0x278A;
case 2:return 0x278B;case 3:return 0x278C;case 4:return 0x278D;case 5:return 0x278E;
case 6:return 0x278F;case 7:return 0x2790;case 8:return 0x2791;case 9:return 0x2792;
case 10:return 0x2793;default:return 0x20;}},BpY:function(Jj){if(!Jj)return-1;return(
Jj%100000000)|0;},Biy:function(AoL,aFilter){var B;if(!aFilter)return Ax2;var Apd=
Ax3;var Av=aFilter.AOI();while(!!Av){Apd=Apd+A._GetAutoObject(C.Helper).A6C(AoL,
Av);Av=aFilter.AON(Av);if(!!Av)Apd=Apd+O5;}Apd=Apd+Rm;return Apd;},A7h:function(
BbW){var MJ=0;switch(BbW){case 14:MJ=2;break;case 13:MJ=4;break;case 6:MJ=36;break;
case 11:MJ=9;break;case 0:MJ=39;break;case 10:MJ=26;break;case 12:MJ=12;break;case
5:MJ=14;break;case 3:MJ=15;break;case 1:MJ=10;break;case 8:MJ=16;break;case 4:MJ=
20;break;case 15:MJ=27;break;case 9:MJ=31;break;case 2:MJ=13;break;case 7:MJ=35;
break;case 16:MJ=37;break;default:A.ab5("%s%e",Ax4,BbW);}return MJ;},Bg7:function(
Ay7){switch(Ay7){case 0:return 1;case 3:return 0;case 1:return 2;case 2:switch(A.
_GetAutoObject(C.Device).MassUnit){case 0:return 3;case 1:return 4;default:throw new
Error(AhV+A._GetAutoObject(C.Device).MassUnit.toFixed());}break;default:throw new
Error(AhW+Ay7.toFixed());}},AuG:function(AoW){switch(AoW){case 0:return A.aaL(A.
ach.APL);case 1:return A.aaL(A.ach.AQm);case 9:return A.aaL(A.ach.APW);case 4:return A.
aaL(A.ach.AQI);case 6:return A.aaL(A.ach.AQJ);case 8:return A.aaL(A.ach.Avv);case
2:return A.aaL(A.ach.AQO);case 3:return A.aaL(A.ach.AQH);case 10:switch(A._GetAutoObject(
C.Device).MassUnit){case 0:return A.aaL(A.ach.AvK);case 1:return A.aaL(A.ach.AvL
);default:throw new Error(AhV+A._GetAutoObject(C.Device).MassUnit.toFixed());}break;
case 7:case 5:case 11:case 12:case 13:case 14:case 18:case 15:case 16:case 17:return A.
aaL(A.aci.TK);default:throw new Error(UX+AoW.toFixed());}},ANx:function(Ati){switch(
Ati){case 40:return 1;case 56:return 3;case 70:return 2;case 100:return 4;case 124:
return 5;case 156:return 7;case 158:return 36;case 191:return 17;case 196:return 8;
case 203:return 9;case 208:return 11;case 233:return 12;case 246:return 14;case 250:
return 15;case 276:return 10;case 300:return 16;case 348:return 18;case 372:return 19;
case 380:return 20;case 392:return 21;case 428:return 24;case 440:return 22;case
442:return 23;case 470:return 25;case 528:return 26;case 578:return 27;case 616:
return 28;case 620:return 29;case 642:return 30;case 643:return 31;case 703:return 34;
case 705:return 33;case 724:return 13;case 752:return 32;case 756:return 6;case 792:
return 35;case 804:return 37;case 826:return 38;case 840:return 39;default:return 0;
}},S0:function(Jj){var A2e=this.AxQ(Jj);return this.ANx(A2e);},AxQ:function(Jj){
return A._GetAutoObject(C.Helper).Sh(Jj,12,3)|0;},A$X:function(AoQ,En){if(AoQ<A.
_GetAutoObject(C.Helper).AC6(En))return 1;else if(AoQ<A._GetAutoObject(C.Helper).
AC5(En))return 2;else return 3;},ACT:function(BxZ){switch(BxZ){case 1:return 1;case
2:return 2;case 3:return 3;case 4:return 4;case 5:return 5;case 6:return 6;case 7:
return 7;case 8:return 8;case 9:return 9;case 10:return 10;case 11:return 11;case
12:return 12;case 13:return 13;case 14:return 14;case 15:return 15;case 16:return 16;
default:return 0;}},AU7:function(A_,AJa,AJb){if(AJa===AJb)return A_;if(!AJa&&(AJb===
1)){var result=((A_*9)/5)+32;return result;}if((AJa===1)&&!AJb){var result=((A_-
32)*5)/9;return result;}throw new Error(((AsW+AJa.toFixed())+Ax5)+AJb.toFixed());
},A6l:function(Eb){switch(Eb){case 0:return Ax6;case 1:return A.jV;case 2:return Ax7;
case 3:return Aog;case 4:return A.aaR(A.acf.Contains);case 5:return AfA;default:{
A.ab5("%s%e",Aoh,Eb);return A.jV;}}},A5o:function(AcX){return this.M1.Aei(AcX);}
,Bjh:function(AcX){return this.M1.AmD(AcX);},Bhn:function(Ath){var AAp=0;switch(
Ath){case 0:AAp=1;break;case 1:AAp=2;break;case 2:AAp=3;break;case 3:AAp=4;break;
default:A.ab5("%s%e",IV,Ath);}return AAp;},Ajl:function(A0D,En){if(A0D>=A._GetAutoObject(
C.Helper).A6x(En))return 3;else if(A0D>=A._GetAutoObject(C.Helper).ACU(En))return 2;
else if(A0D<A._GetAutoObject(C.Device).AcD)return 0;else return 1;},Aqx:function(
MJ){var BM=-1;switch(MJ){case 0:BM=0;break;case 1:BM=40;break;case 2:BM=70;break;
case 3:BM=56;break;case 4:BM=100;break;case 5:BM=124;break;case 6:BM=756;break;case
7:BM=156;break;case 8:BM=196;break;case 9:BM=203;break;case 10:BM=276;break;case
11:BM=208;break;case 12:BM=233;break;case 13:BM=724;break;case 14:BM=246;break;case
15:BM=250;break;case 16:BM=300;break;case 17:BM=191;break;case 18:BM=348;break;case
19:BM=372;break;case 20:BM=380;break;case 21:BM=392;break;case 22:BM=440;break;case
23:BM=442;break;case 24:BM=428;break;case 25:BM=470;break;case 26:BM=528;break;case
27:BM=578;break;case 28:BM=616;break;case 29:BM=620;break;case 30:BM=642;break;case
31:BM=643;break;case 32:BM=752;break;case 33:BM=705;break;case 34:BM=703;break;case
35:BM=792;break;case 36:BM=158;break;case 37:BM=804;break;case 38:BM=826;break;case
39:BM=840;break;default:throw new Error(Aoi+MJ.toFixed());}return BM;},Bp2:function(
Jj){return A._GetAutoObject(C.Helper).Sh(Jj,8,2)|0;},Bp1:function(Jj){var BzS=this.
Bp2(Jj);return this.ACT(BzS);},_Init:function(aArg){C.M1._Init.call(this.M1={I:this
},0);this.__proto__=C.ConverterClass;A.h7++;},_Done:function(){this.__proto__=null;
this.M1._Done();A.h7--;},_ReInit:function(){this.M1._ReInit();},_Mark:function(D
){var B;if((B=this.M1)._cycle!=D)B._Mark(B._cycle=D);if((B=this.I)&&(B._cycle!=D
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
false,IsAlarm:false,E4:function(Ad,AH){var HD=C.Row.E4.call(this,Ad,AH);if(HD&&!
!AH){this.OnSetId(AH.CF(Ad,0));this.SG(AH.CF(Ad,1));this.Ab1(AH.CF(Ad,2));this.AnA(
AH.CF(Ad,3));this.Q4(AH.Hu(Ad,4));this.JT(AH.AOK(Ad,7));this.Akt(AH.BiQ(Ad,6));this.
EB(AH.AmT(Ad,14));this.PT(AH.KN(Ad,22));this.Ne(AH.KN(Ad,26));this.Axd(AH.I6(Ad,
13));this.Ae1(AH.H2(Ad,8));this.Aw7(AH.Hu(Ad,15));this.ATC(AH.Hu(Ad,31));this.Ae7(
AH.A6M(Ad,5));this.ATa(AH.I6(Ad,17));this.Un(AH.H2(Ad,11));this.ATB(AH.Hu(Ad,16)
);this.ATE(AH.Hu(Ad,30));this.Akz(AH.H2(Ad,9));this.Ae5(AH.H2(Ad,12));this.ATD(AH.
Hu(Ad,20));this.Aw9(AH.Hu(Ad,21));this.Ae3(AH.H2(Ad,10));this.AwL(AH.H2(Ad,27));
this.AFh(AH.AC1(Ad,18));this.AFL(AH.Hu(Ad,19));this.AwG(AH.AC1(Ad,23));this.Aw8(
AH.Hu(Ad,24));this.AS4(AH.CF(Ad,25));this.Awx(AH.Hu(Ad,28));this.AwM(AH.CF(Ad,29
));this.ArT(AH.H2(Ad,38));this.NZ(AH.BiR(Ad,32));this.Akv(AH.BiW(Ad,33));this.AnC(
AH.KN(Ad,35));this.Ng(AH.AOS(Ad,34));this.Ae4(AH.H2(Ad,37));this.AFA(AH.Bi5(Ad,36
));}return HD;},Ch:function(AH){var HD=C.Row.Ch.call(this,AH);if(HD&&!!AH){var Jo=
AH.Oy();if(Jo<=0)A.ab5("%s",Xa);else{var Az4=this.Am4();if(Az4)this.CL=AH.YB();else
AH.Hn(this.CL,0,this.Id);AH.Hn(this.CL,1,this.VisualId);AH.Hn(this.CL,2,this.GroupId
);AH.Hn(this.CL,3,this.LocationId);AH.Ack(this.CL,4,this.DateOfBirth);AH.BoP(this.
CL,7,this.Gender);AH.BoL(this.CL,6,this.BirthType);AH.BoJ(this.CL,14,this.AnimalType
);AH.Uy(this.CL,22,this.TransponderId);AH.Uy(this.CL,26,this.NaisId);AH.AkQ(this.
CL,13,this.WorstAssessment);AH.N5(this.CL,8,this.IsAlarm);AH.Ack(this.CL,15,this.
TimestampAlarm);AH.N5(this.CL,11,this.IsFever);AH.Ack(this.CL,16,this.TimestampExpirationFeverAlarm
);AH.N5(this.CL,9,this.IsControl);AH.N5(this.CL,12,this.IsWatch);AH.Ack(this.CL,
20,this.TimestampLastControl);AH.Ack(this.CL,21,this.TimestampLastWatch);AH.N5(this.
CL,10,this.IsRegistered);AH.N5(this.CL,27,this.IsPerished);AH.Ack(this.CL,28,this.
DateOfLastCalving);AH.Hn(this.CL,29,this.LactationNumber);AH.N5(this.CL,38,this.
IsDry);AH.BoN(this.CL,32,this.Breed);AH.BoO(this.CL,33,this.EaseOfDelivery);AH.Uy(
this.CL,35,this.NaisIdMother);AH.BoV(this.CL,34,this.WhereAbouts);AH.N5(this.CL,
37,this.IsRegistrationNoticePending);AH.BoT(this.CL,36,this.ReasonOfLeaving);HD=
AH.OA(Jo);if(Az4)this.OnSetId(AH.Abp());}}return HD;},Gq:function(){C.Row.Gq.call(
this);this.OnSetId(-1);this.Ae3(true);},E6:function(){C.Row.E6.call(this);this.OnSetId(
0);this.SG(0);this.Ab1(0);this.AnA(0);this.Q4(0);this.JT(A._GetAutoObject(C.Device
).Gender);this.Akt(0);this.EB(A._GetAutoObject(C.Device).AnimalType);this.PT(0);
this.Ne(0);this.Axd(0);this.Ae1(false);this.Aw7(0);this.ATC(0);this.Ae7(0);this.
ATa(0);this.Un(false);this.ATE(0);this.ATB(0);this.Akz(false);this.Ae5(false);this.
ATD(0);this.Aw9(0);this.Ae3(false);this.AwL(false);this.AFh(0);this.AFL(0);this.
AwG(0);this.Aw8(0);this.AS4(-1);this.Awx(0);this.AwM(0);this.ArT(false);this.NZ(
0);this.Akv(0);this.AnC(0);this.Ng(0);this.Ae4(false);this.AFA(0);},OnSetId:function(
E){if(this.Id===E)return;this.Id=E;A.abo([this,this.Q2,this.OnSetId],0);},SG:function(
E){if(this.VisualId===E)return;this.VisualId=E;A.abo([this,this.Arz,this.SG],0);
},Ab1:function(E){if(this.GroupId===E)return;this.GroupId=E;A.abo([this,this.BkR
,this.Ab1],0);},Q4:function(E){if(this.DateOfBirth===E)return;this.DateOfBirth=E;
A.abo([this,this.Av$,this.Q4],0);},JT:function(E){if(this.Gender===E)return;this.
Gender=E;A.abo([this,this.Wv,this.JT],0);},Akt:function(E){if(this.BirthType===E
)return;this.BirthType=E;A.abo([this,this.ASo,this.Akt],0);},AnA:function(E){if(
this.LocationId===E)return;this.LocationId=E;A.abo([this,this.A8H,this.AnA],0);}
,Ae7:function(E){if(this.LastTemperature===E)return;this.LastTemperature=E;A.abo([
this,this.A8G,this.Ae7],0);},Ae1:function(E){if(this.IsAlarm===E)return;this.IsAlarm=
E;A.abo([this,this.A8y,this.Ae1],0);},Akz:function(E){if(this.IsControl===E)return;
this.IsControl=E;A.abo([this,this.BkU,this.Akz],0);},Ae3:function(E){if(this.IsRegistered===
E)return;this.IsRegistered=E;A.abo([this,this.BkX,this.Ae3],0);},Ae5:function(E){
if(this.IsWatch===E)return;this.IsWatch=E;A.abo([this,this.A8C,this.Ae5],0);},Axd:
function(E){if(this.WorstAssessment===E)return;this.WorstAssessment=E;A.abo([this
,this.A9j,this.Axd],0);},Un:function(E){if(this.IsFever===E)return;this.IsFever=
E;A.abo([this,this.A8z,this.Un],0);},ATD:function(E){if(this.TimestampLastControl===
E)return;this.TimestampLastControl=E;A.abo([this,this.Blm,this.ATD],0);},Aw9:function(
E){if(this.TimestampLastWatch===E)return;this.TimestampLastWatch=E;A.abo([this,this.
Blo,this.Aw9],0);},ATa:function(E){if(this.LastRatingTemperature===E)return;this.
LastRatingTemperature=E;A.abo([this,this.Bk0,this.ATa],0);},ATB:function(E){if(this.
TimestampExpirationFeverAlarm===E)return;this.TimestampExpirationFeverAlarm=E;A.
abo([this,this.Blk,this.ATB],0);},Aw7:function(E){if(this.TimestampAlarm===E)return;
this.TimestampAlarm=E;A.abo([this,this.Blj,this.Aw7],0);},EB:function(E){if(this.
AnimalType===E)return;this.AnimalType=E;A.abo([this,this.PP,this.EB],0);},AFh:function(
E){if(this.LastBodyWeight===E)return;this.LastBodyWeight=E;A.abo([this,this.A8F,
this.AFh],0);},AFL:function(E){if(this.TimestampLastWeighing===E)return;this.TimestampLastWeighing=
E;A.abo([this,this.A87,this.AFL],0);},PT:function(E){if(this.TransponderId===E)return;
this.TransponderId=E;A.abo([this,this.Ary,this.PT],0);},RN:function(){return A._GetAutoObject(
C.Helper).L9(this.DateOfBirth,A._GetAutoObject(C.Helper).Dv());},AwG:function(E){
if(this.FirstBodyWeight===E)return;this.FirstBodyWeight=E;A.abo([this,this.ASt,this.
AwG],0);},Aw8:function(E){if(this.TimestampFirstWeighing===E)return;this.TimestampFirstWeighing=
E;A.abo([this,this.ASK,this.Aw8],0);},Ard:function(){var O_=A._NewObject(A.Core.
Bs,0);O_.Initialize(this.DateOfBirth);var A12=A._NewObject(A.Core.Bs,0);A12.Initialize(
this.TimestampFirstWeighing);if(((O_.Year===A12.Year)&&(O_.AbX()===A12.AbX()))&&(
this.FirstBodyWeight>0))return true;else return false;},AhS:function(AI6){var Aaz;
var Aup;if(this.TimestampLastWeighing>0){Aup=this.TimestampLastWeighing;Aaz=this.
LastBodyWeight;}else{Aup=this.DateOfBirth;Aaz=A._GetAutoObject(C.Helper).Abo(this.
AnimalType);}return A._GetAutoObject(C.Helper).AhS(Aaz,Aup,AI6,this.AnimalType);
},AS4:function(E){if(this.FirstBodyWeightId===E)return;this.FirstBodyWeightId=E;
A.abo([this,this.BkQ,this.AS4],0);},AnS:function(Bch){this.Ae1(Bch);if(Bch){if(!
this.TimestampAlarm)this.Aw7(A._GetAutoObject(C.Helper).Dv());}else this.Aw7(0);
},Ne:function(E){if(this.NaisId===E)return;this.NaisId=E;A.abo([this,this.Anr,this.
Ne],0);},AGA:function(Bcd){this.Ae5(Bcd);if(Bcd){if(!this.TimestampLastWatch)this.
Aw9(A._GetAutoObject(C.Helper).Dv());}else this.Aw9(0);},Awx:function(E){if(this.
DateOfLastCalving===E)return;this.DateOfLastCalving=E;A.abo([this,this.BkG,this.
Awx],0);},AwM:function(E){if(this.LactationNumber===E)return;this.LactationNumber=
E;A.abo([this,this.BkZ,this.AwM],0);},AwL:function(E){if(this.IsPerished===E)return;
this.IsPerished=E;A.abo([this,this.BkW,this.AwL],0);},ATE:function(E){if(this.TimestampLastTemperature===
E)return;this.TimestampLastTemperature=E;A.abo([this,this.Bln,this.ATE],0);},ATC:
function(E){if(this.TimestampLastAssessment===E)return;this.TimestampLastAssessment=
E;A.abo([this,this.Bll,this.ATC],0);},NZ:function(E){if(this.Breed===E)return;this.
Breed=E;A.abo([this,this.Av9,this.NZ],0);},Akv:function(E){if(this.EaseOfDelivery===
E)return;this.EaseOfDelivery=E;A.abo([this,this.ASs,this.Akv],0);},Ng:function(E
){if(this.WhereAbouts===E)return;this.WhereAbouts=E;A.abo([this,this.Awl,this.Ng
],0);},AnC:function(E){if(this.NaisIdMother===E)return;this.NaisIdMother=E;A.abo([
this,this.ASA,this.AnC],0);},AFA:function(E){if(this.ReasonOfLeaving===E)return;
this.ReasonOfLeaving=E;A.abo([this,this.Bk$,this.AFA],0);},Ae4:function(E){if(this.
IsRegistrationNoticePending===E)return;this.IsRegistrationNoticePending=E;A.abo([
this,this.BkY,this.Ae4],0);},ArT:function(E){if(this.IsDry===E)return;this.IsDry=
E;A.abo([this,this.BkV,this.ArT],0);},Q2:function(){return this.Id;},Arz:function(
){return this.VisualId;},BkR:function(){return this.GroupId;},Av$:function(){return this.
DateOfBirth;},Wv:function(){return this.Gender;},ASo:function(){return this.BirthType;
},A8H:function(){return this.LocationId;},A8G:function(){return this.LastTemperature;
},A8y:function(){return this.IsAlarm;},BkU:function(){return this.IsControl;},BkX:
function(){return this.IsRegistered;},A8C:function(){return this.IsWatch;},A9j:function(
){return this.WorstAssessment;},A8z:function(){return this.IsFever;},Blm:function(
){return this.TimestampLastControl;},Blo:function(){return this.TimestampLastWatch;
},Bk0:function(){return this.LastRatingTemperature;},Blk:function(){return this.
TimestampExpirationFeverAlarm;},Blj:function(){return this.TimestampAlarm;},PP:function(
){return this.AnimalType;},A8F:function(){return this.LastBodyWeight;},A87:function(
){return this.TimestampLastWeighing;},Ary:function(){return this.TransponderId;}
,ASt:function(){return this.FirstBodyWeight;},ASK:function(){return this.TimestampFirstWeighing;
},BkQ:function(){return this.FirstBodyWeightId;},Anr:function(){return this.NaisId;
},BkG:function(){return this.DateOfLastCalving;},BkZ:function(){return this.LactationNumber;
},BkW:function(){return this.IsPerished;},Bln:function(){return this.TimestampLastTemperature;
},Bll:function(){return this.TimestampLastAssessment;},Av9:function(){return this.
Breed;},ASs:function(){return this.EaseOfDelivery;},Awl:function(){return this.WhereAbouts;
},ASA:function(){return this.NaisIdMother;},Bk$:function(){return this.ReasonOfLeaving;
},BkY:function(){return this.IsRegistrationNoticePending;},BkV:function(){return this.
IsDry;},_Init:function(aArg){C.Row._Init.call(this,aArg);this.__proto__=C.Animal;
this.TableId=0;},_className:"Device::Animal"};C.Row={CL:-1,TableId:2,E4:function(
Ad,AH){if(!AH){A.ab5("%s",(Aoj+this.CL.toFixed())+AsX);return false;}else if(AH.
Id!==this.TableId)throw new Error(AsY);else if((Ad<0)||(Ad>=AH.B9())){A.ab5("%s"
,(((AsZ+this.CL.toFixed())+Aok)+AH.B9().toFixed())+Aol);return false;}this.CL=Ad;
return true;},Ch:function(AH){if(!AH){A.ab5("%s",(Aoj+this.CL.toFixed())+AsX);return false;
}else if(AH.Id!==this.TableId)throw new Error(AsY);else if(this.Am4()&&AH.Lg()){
A.ab5("%s",As0+AH.HI().toFixed());return false;}else if(!this.Am4()&&((this.CL<0
)||(this.CL>=AH.B9()))){A.ab5("%s",(((AsZ+this.CL.toFixed())+Aok)+AH.B9().toFixed(
))+Aol);return false;}return true;},Gq:function(){this.E6();this.CL=-1;},Am4:function(
){return this.CL===-1;},E6:function(){this.CL=-2;},AqW:function(){return this.CL
!==-2;},A8V:function(){return this.CL;},A_i:function(E){this.CL=E;},_Init:function(
aArg){this.__proto__=C.Row;A.h7++;},_Done:function(){this.__proto__=null;A.h7--;
},_ReInit:function(){},_Mark:function(D){var B;if((B=this.I)&&(B._cycle!=D))B._Mark(
B._cycle=D);},I:null,_cycle:0,_observers:null,_className:"Device::Row"};C.Rating={
Temperature:0,Id:0,AnimalId:0,Timestamp:0,BodyWeight:0,RatingTemperature:0,Faeces:
0,Respiratory:0,Appearance:0,Feed:0,E4:function(Ad,AH){var HD=C.Row.E4.call(this
,Ad,AH);if(HD&&!!AH){this.OnSetId(AH.CF(Ad,0));this.OnSetAnimalId(AH.CF(Ad,1));this.
OnSetTimestamp(AH.Hu(Ad,6));this.OnSetFeed(AH.I6(Ad,2));this.OnSetAppearance(AH.
I6(Ad,3));this.OnSetRespiratory(AH.I6(Ad,4));this.OnSetFaeces(AH.I6(Ad,5));this.
OnSetTemperature(AH.A6M(Ad,7));this.OnSetBodyWeight(AH.AC1(Ad,8));this.OnSetRatingTemperature(
AH.I6(Ad,9));}return HD;},Ch:function(AH){if(this.K&&this.K.Ch)return this.K.Ch.
apply(this,arguments);else return C.Rating.BaF.apply(this,arguments);},BaF:function(
AH){var HD=C.Row.Ch.call(this,AH);if((HD&&!!AH)&&(AH.Id===1)){var Jo=AH.Oy();if(
Jo<=0)A.ab5("%s",Xa);else{var Az4=this.Am4();if(Az4)this.CL=AH.YB();else AH.Hn(this.
CL,0,this.Id);AH.Hn(this.CL,1,this.AnimalId);AH.Ack(this.CL,6,this.Timestamp);AH.
AkQ(this.CL,2,this.Feed);AH.AkQ(this.CL,3,this.Appearance);AH.AkQ(this.CL,4,this.
Respiratory);AH.AkQ(this.CL,5,this.Faeces);AH.A$f(this.CL,7,this.Temperature);AH.
AUy(this.CL,8,this.BodyWeight);AH.AkQ(this.CL,9,this.RatingTemperature);AH.OA(Jo
);if(Az4)this.OnSetId(AH.Abp());var Rw=A._GetAutoObject(C.Device).An;var Ad=A._GetAutoObject(
C.Device).An.LS(0,this.AnimalId);if(Ad>=0){var Cz=A._NewObject(C.Animal,0);Cz.E4(
Ad,Rw);if(this.Temperature>0)Cz.Un(A._GetAutoObject(C.Helper).A7b(this));if((this.
Temperature>0)&&A._GetAutoObject(C.Helper).AGf(this)){var Oj=A._GetAutoObject(C.
Helper).AQ7(this);Cz.Akz(Oj);Cz.AnS(Oj);}else if(this.Temperature>0){var Oj=(A._GetAutoObject(
C.Helper).AQ7(this)||(Cz.WorstAssessment===2))||(Cz.WorstAssessment===1);Cz.Akz(
Oj);Cz.AnS(Oj);}else{var Oj=A._GetAutoObject(C.Helper).AQ7(this)||Cz.IsFever;Cz.
Akz(Oj);Cz.AnS(Oj);}Cz.Ch(Rw);}}}return HD;},Gq:function(){C.Row.Gq.call(this);this.
OnSetTimestamp(A._GetAutoObject(C.Helper).Dv());this.OnSetId(-1);},E6:function(){
C.Row.E6.call(this);this.OnSetTimestamp(0);this.OnSetId(0);this.OnSetAnimalId(0);
this.OnSetFeed(0);this.OnSetAppearance(0);this.OnSetRespiratory(0);this.OnSetFaeces(
0);this.OnSetTemperature(0);this.OnSetBodyWeight(0);this.OnSetRatingTemperature(
0);},OnSetTemperature:function(E){if(this.Temperature===E)return;this.Temperature=
E;A.abo([this,this.Bli,this.OnSetTemperature],0);},OnSetId:function(E){if(this.Id===
E)return;this.Id=E;A.abo([this,this.Q2,this.OnSetId],0);},OnSetAnimalId:function(
E){if(this.AnimalId===E)return;this.AnimalId=E;A.abo([this,this.Bkt,this.OnSetAnimalId
],0);},OnSetFeed:function(E){if(this.Feed===E)return;this.Feed=E;A.abo([this,this.
BkN,this.OnSetFeed],0);},OnSetAppearance:function(E){if(this.Appearance===E)return;
this.Appearance=E;A.abo([this,this.Bku,this.OnSetAppearance],0);},OnSetRespiratory:
function(E){if(this.Respiratory===E)return;this.Respiratory=E;A.abo([this,this.Bla
,this.OnSetRespiratory],0);},OnSetFaeces:function(E){if(this.Faeces===E)return;this.
Faeces=E;A.abo([this,this.BkL,this.OnSetFaeces],0);},OnSetTimestamp:function(E){
if(this.Timestamp===E)return;this.Timestamp=E;A.abo([this,this.A86,this.OnSetTimestamp
],0);},BoK:function(Nq,A_){switch(Nq){case 2:this.OnSetAppearance(A_);break;case
1:this.OnSetFeed(A_);break;case 4:this.OnSetFaeces(A_);break;case 3:this.OnSetRespiratory(
A_);break;default:;}},BiO:function(Nq){switch(Nq){case 2:return this.Appearance;
case 1:return this.Feed;case 4:return this.Faeces;case 3:return this.Respiratory;
default:return 0;}},OnSetRatingTemperature:function(E){if(this.RatingTemperature===
E)return;this.RatingTemperature=E;A.abo([this,this.Bk_,this.OnSetRatingTemperature
],0);},OnSetBodyWeight:function(E){if(this.BodyWeight===E)return;this.BodyWeight=
E;A.abo([this,this.Bky,this.OnSetBodyWeight],0);},Bli:function(){return this.Temperature;
},Q2:function(){return this.Id;},Bkt:function(){return this.AnimalId;},BkN:function(
){return this.Feed;},Bku:function(){return this.Appearance;},Bla:function(){return this.
Respiratory;},BkL:function(){return this.Faeces;},A86:function(){return this.Timestamp;
},Bk_:function(){return this.RatingTemperature;},Bky:function(){return this.BodyWeight;
},_Init:function(aArg){C.Row._Init.call(this,aArg);this.__proto__=C.Rating;this.
TableId=1;var J3=this._variants();if(J3){this.K={};J3._Init.call(this,aArg);}},_Done:
function(){if(this.K)this.K._Done.call(this);this.__proto__=C.Row;C.Row._Done.call(
this);},_ReInit:function(){C.Row._ReInit.call(this);if(this.K)this.K._ReInit.call(
this);},_Mark:function(D){C.Row._Mark.call(this,D);if(this.K)this.K._Mark(D);},_variants:
function(){return A.acs.Rating._variants();},K:null,_className:"Device::Rating"};
C.HelperClass={Ux:null,AhE:null,AUr:null,AUs:null,W:null,Au:null,KG:null,SR:null
,AdY:null,UE:null,UD:null,Ael:null,Afw:null,Afv:null,Afu:null,Afx:null,AgC:null,
AGP:0,Init:function(aArg){A.pe([this,this.ATW],this);},AkC:function(E){this.Ux=E;
A.abo([this,this.Arw,this.AkC],0);},AFD:function(E){this.AhE=E;A.abo([this,this.
A8W,this.AFD],0);},BA3:function(G){switch(A._GetAutoObject(C.Device).ScanState){
case 2:{var Aur=A._GetAutoObject(C.Device).OR;if(!Aur)throw new Error(Ax8);switch(
Aur.TransponderType){case 1:this.AkC(Aur);break;case 2:this.ATs(Aur);break;case 3:
this.AFD(Aur);break;case 4:this.ATt(Aur);break;case 0:break;default:throw new Error(
Ax9);}}break;case 4:A._GetAutoObject(C.Device).A3(11,true,A.jV,2000,null);break;
case 3:A._GetAutoObject(C.Device).A3(12,true,A.jV,2000,null);break;case 0:case 1:
break;default:throw new Error(Ax_);}},AkN:function(){this.AkC(null);this.ATs(null
);this.AFD(null);this.ATt(null);},AFI:function(E){if(this.K&&this.K.AFI)return this.
K.AFI.apply(this,arguments);else return C.HelperClass.BaD.apply(this,arguments);
},BaD:function(E){A.abo([this,this.U0,this.U3],0);A._GetAutoObject(C.Device).SetSystemTime(
E);},U3:function(Aq){this.AFI(Aq);},Dv:function(){if(this.K&&this.K.Dv)return this.
K.Dv.apply(this,arguments);else return C.HelperClass.Baz.apply(this,arguments);}
,Baz:function(){var B;return((B=(this.Au.Bde()|0))<0)?B+0x100000000:B;},U0:function(
){return this.Dv();},Asp:function(){A._GetAutoObject(C.Device).SO(-1);this.W.E6(
);A.we(this.W,0);},A7r:function(Jj){if(!Jj){A.ab5("%s%U",As1,Jj);return false;}var
Bf=A._GetAutoObject(C.Device).An.AgV(22,Jj);return this.G7(Bf);},AmU:function(AoL
,AI5){switch(AoL){case 0:{var Apc=AI5;switch(Apc){case 14:return A.aaR(A.acf.Afr
);case 6:return Ax$;case 4:return A.aaR(A.acf.Aed);case 28:return P$;case 7:return A.
aaR(A.acf.Afm);case 2:return A.aaR(A.acf.P);case 0:return A.aaR(A.acf.GN);case 37:
return Aya;case 8:return A.aaR(A.acf.Alarm);case 9:return A.aaR(A.acf.ACf);case 38:
return A.aaR(A.acf.ANX);case 11:return A.aaR(A.acf.Fever);case 27:return AVU;case
10:return A.aaR(A.acf.Bol);case 12:return A.aaR(A.acf.Asb);case 29:return A.aaR(
A.acf.ARo);case 18:return A.aaR(A.acf.Weighing);case 17:return AVV;case 5:return A.
aaR(A.acf.Temperature);case 3:return AVW;case 26:return A.aaR(A.acf.Uf);case 35:
return A.aaR(A.acf.Uf)+AVX;case 36:return AHi;case 15:return AHj;case 24:return AfB;
case 20:return Aom;case 30:return AVY;case 21:return AHk;case 19:return Ala;case
22:return A.aaR(A.acf.Transponder);case 1:return A.aaR(A.acf.GI);case 34:return A.
aaR(A.acf.Jh);case 13:return AHl;case 31:return AHm;default:{A.ab5("%s",AVZ+Apc.
toFixed());return AHn+Apc.toFixed();}}}case 1:{var Apc=AI5;switch(Apc){case 1:return A.
aaR(A.acf.Animal);case 3:return A.aaR(A.acf.AGe);case 8:return A.aaR(A.acf.Aft);
case 5:return A.aaR(A.acf.AGg);case 2:return A.aaR(A.acf.Feed);case 4:return A.aaR(
A.acf.AGh);case 7:return A.aaR(A.acf.Temperature);case 6:return A.aaR(A.acf.Bs);
default:{A.ab5("%s",AV0+Apc.toFixed());return AHn+Apc.toFixed();}}}default:A.ab5(
"%s",(AV1+AoL.toFixed())+AcN);}return A.jV;},A6C:function(AoL,AI){var result=A.jV;
if(!!AI){result=this.AmU(AoL,AI.EJ);result=((result+Oa)+A._GetAutoObject(C.Converter
).A6l(AI.Operator))+Oa;if(!!(C.Int32FilterCriterion.isPrototypeOf(AI)?AI:null))result=
result+(C.Int32FilterCriterion.isPrototypeOf(AI)?AI:null).A5.toFixed();else if(!
!(C.UInt32FilterCriterion.isPrototypeOf(AI)?AI:null))result=result+(C.UInt32FilterCriterion.
isPrototypeOf(AI)?AI:null).A5.toFixed();else if(!!(C.StringFilterCriterion.isPrototypeOf(
AI)?AI:null))result=result+(C.StringFilterCriterion.isPrototypeOf(AI)?AI:null).A5;
else if(!!(C.BoolFilterCriterion.isPrototypeOf(AI)?AI:null)){if((C.BoolFilterCriterion.
isPrototypeOf(AI)?AI:null).A5)result=this.AmU(AoL,AI.EJ);else result=A.jV;}else if(
!!(C.GenderFilterCriterion.isPrototypeOf(AI)?AI:null)){var Bzp=A._NewObject(C.GenderToString
,0);result=result+Bzp.Lu((C.GenderFilterCriterion.isPrototypeOf(AI)?AI:null).A5);
}else if(!!(C.AnimalTypeFilterCriterion.isPrototypeOf(AI)?AI:null)){var Byl=A._NewObject(
C.AnimalTypeToString,0);result=result+Byl.Lu((C.AnimalTypeFilterCriterion.isPrototypeOf(
AI)?AI:null).A5);}else if(!!(C.AssessmentFilterCriterion.isPrototypeOf(AI)?AI:null
)){var Byo=A._NewObject(C.AssesmentToString,0);result=result+Byo.Lu((C.AssessmentFilterCriterion.
isPrototypeOf(AI)?AI:null).A5);}else if(!!(C.UInt64FilterCriterion.isPrototypeOf(
AI)?AI:null))result=result+(C.UInt64FilterCriterion.isPrototypeOf(AI)?AI:null).A5.
toFixed();else if(!!(C.UInt64PartialFilterCriterion.isPrototypeOf(AI)?AI:null)){
var Av=(C.UInt64PartialFilterCriterion.isPrototypeOf(AI)?AI:null);result=(((((result+
Av.A5)+AV2)+Av.OB.toFixed())+O5)+Av.Zh.toFixed())+Aol;}else if(!!(C.WhereAboutsFilterCriterion.
isPrototypeOf(AI)?AI:null)){var BCO=A._NewObject(C.WhereAboutsToString,0);result=
result+BCO.Lu((C.WhereAboutsFilterCriterion.isPrototypeOf(AI)?AI:null).A5);}else
A.ab5("%s",AV3);}return result;},Nl:function(aString,Bb1,BxB){var result=A.jV;var
BfM=false;var index=0;var BxD=Bb1.length;while(!BfM){var A3K=aString.indexOf(Bb1
,index);if(A3K!==-1){result=(result+A.abW(aString,index,A3K-index))+BxB;index=A3K+
BxD;}else{var Bb6=aString.length;if(index<Bb6)result=result+A.ab2(aString,Bb6-index
);BfM=true;}}return result;},ATs:function(E){this.AUr=E;A.abo([this,this.Blc,this.
ATs],0);},ATt:function(E){this.AUs=E;A.abo([this,this.Bld,this.ATt],0);},BdE:function(
){return((A._GetAutoObject(C.Device).ScanState===2)&&!!A._GetAutoObject(C.Device
).OR)&&(A._GetAutoObject(C.Device).OR.TransponderType===1);},Af8:function(G){if(
!this.W.Am4()&&!!this.W.Id)this.BjS(this.W.Id);},ACU:function(En){return A._GetAutoObject(
C.Helper).UE.Get(En);},A6x:function(En){return A._GetAutoObject(C.Helper).UD.Get(
En);},A6I:function(){var O=0;var min=32767;while(O<A._GetAutoObject(C.Helper).UE.
ME){if(A._GetAutoObject(C.Helper).UE.Get(O)<min)min=A._GetAutoObject(C.Helper).UE.
Get(O);O=O+1;}return min;},ATW:function(G){A.zV([this,this.Af8],A._GetAutoObject(
C.Device).An,0);},AQ7:function(D3){if(!D3)return false;var Bjs=(((this.Az0(D3.Faeces
)||this.Az0(D3.Feed))||this.Az0(D3.Appearance))||this.Az0(D3.Respiratory))||this.
Az0(D3.RatingTemperature);return Bjs||this.A7b(D3);},Az0:function(BbF){return(BbF===
2)||(BbF===1);},A7b:function(D3){return!!D3&&(D3.Temperature>A._GetAutoObject(C.
Helper).ACU(A._GetAutoObject(C.Helper).W.AnimalType));},G7:function(L7){var A2C=
false;if(L7>=0){if(L7!==this.W.CL)A._GetAutoObject(C.Device).SO(L7);A2C=this.W.E4(
L7,A._GetAutoObject(C.Device).An);if(A2C)A.we(this.W,0);}else{A._GetAutoObject(C.
Device).SO(-1);this.W.E6();A.we(this.W,0);}return A2C;},AhN:function(Ah6){var B;
return(((B=(this.Au.Bde()|0))<0)?B+0x100000000:B)-this.AmG(Ah6);},AsE:function(){
var B;A.pe([B=this.KG,B.AnW],this);},BCd:function(G){A._GetAutoObject(C.Device).
A3(16,false,AHo,0,null);A._GetAutoObject(C.Device).A3(5,true,A.jV,0,null);},BnP:
function(G){var As=(C.PopupContext.isPrototypeOf(G)?G:null);if(!!As&&(As.PopupState===
5))this.AsE();},Bnz:function(E){if(this.AGP===E)return;this.AGP=E;A._GetAutoObject(
C.Device).A3(16,true,this.AGP.toFixed(),0,[this,this.BnP]);},L9:function(Bxb,BxR
){var D8;var Bgi=A._NewObject(A.Core.An2,0);var GG=A._NewObject(A.Core.Bs,0);var
K6=A._NewObject(A.Core.Bs,0);GG.Initialize(Bxb);K6.Initialize(BxR);D8=K6.BhX(GG);
Bgi.Initialize2(0,D8.ADs,D8.AEc,D8.AGt);if(GG.J(Bgi).GL===GG.GL)return D8.Kl;else
return D8.Kl+1;},BCf:function(G){A._GetAutoObject(C.Device).UpdateMeasureState(3
);},AK2:function(G){var Bg9=A._GetAutoObject(C.Helper).ACU(A._GetAutoObject(C.Helper
).W.AnimalType);var Bg6=A._GetAutoObject(C.Helper).A6x(A._GetAutoObject(C.Helper
).W.AnimalType);var Agn=A.abz(Bg9-100,Bg6+100);this.BcU(Agn);},AmG:function(Ah6){
return Ah6*86400;},Ak4:function(J5){var B;if(!!J5&&(J5<(((B=Math.trunc(Math.pow(
10,A._GetAutoObject(C.Device).AF)))<0)?B+0x10000000000000000:B)))return-1;return A.
_GetAutoObject(C.Helper).Sh(J5,A._GetAutoObject(C.Device).AF&0xFF,A._GetAutoObject(
C.Device).A1&0xFF)|0;},AGf:function(D3){if(!D3)return false;return((!!D3.Faeces||
!!D3.Feed)||!!D3.Appearance)||!!D3.Respiratory;},AhS:function(A0P,Bb8,AI6,En){var
B;var ApQ;if((A0P<650000)&&(Bb8<this.Dv())){var Bcu=this.AgC.Avn(En);var Bct=0;if(
Bcu>=0)Bct=this.Afu.Get(Bcu);ApQ=A0P+(this.L9(Bb8,this.Dv())*Bct);if(AI6>0){var A1K=
this.ApP(AI6);ApQ=(Math.trunc(((((B=ApQ)<0)?B+0x10000000000000000:B)+Math.trunc(
A1K/2))/A1K)*A1K)|0;}if(ApQ>650000)ApQ=650000;}else ApQ=A0P;return ApQ;},AC7:function(
D3){var Aqb=A._GetAutoObject(C.Converter).AdZ(D3.Faeces);if(Aqb<A._GetAutoObject(
C.Converter).AdZ(D3.Feed))Aqb=A._GetAutoObject(C.Converter).AdZ(D3.Feed);if(Aqb<
A._GetAutoObject(C.Converter).AdZ(D3.Appearance))Aqb=A._GetAutoObject(C.Converter
).AdZ(D3.Appearance);if(Aqb<A._GetAutoObject(C.Converter).AdZ(D3.Respiratory))Aqb=
A._GetAutoObject(C.Converter).AdZ(D3.Respiratory);return A._GetAutoObject(C.Converter
).A$D(Aqb);},Axs:function(D3,Np){if(!!D3){D3.OnSetFaeces(Np);D3.OnSetFeed(Np);D3.
OnSetAppearance(Np);D3.OnSetRespiratory(Np);}},BiM:function(AH,AI$,Ac5,Xk,AfF){if(
!AH)throw new Error(As2);var Be=A._NewObject(C.Filter,0);var ApD=AH.Filter;var Oe=
A._NewObject(C.Int32FilterCriterion,0);Oe.Operator=0;Oe.EJ=1;Oe.A5=Ac5;Be.CW(Oe);
if(Xk>0){var Or=A._NewObject(C.UInt32FilterCriterion,0);Or.Operator=2;Or.EJ=6;Or.
A5=Xk;Be.CW(Or);}if(AfF>0){var Oi=A._NewObject(C.UInt32FilterCriterion,0);Oi.Operator=
3;Oi.EJ=6;Oi.A5=AfF;Be.CW(Oi);}AH.Bk(Be);var L8=A._NewObject(C.Int32ArrayWrapper
,0);L8.Zv(6);var O;for(O=0;O<L8.ME;O=O+1)L8.Set(O,0);var U9;for(O=0;O<AH.B9();O=
O+1){U9=AH.I6(O,AI$);L8.Set(U9,L8.Get(U9)+1);}AH.Bk(ApD);return L8;},ZN:function(
Ah6){var B;var GG=A._NewObject(A.Core.Bs,0);var Bgh=A._NewObject(A.Core.An2,0);GG.
Initialize(A._GetAutoObject(C.Converter).AhP());Bgh.Initialize2(Ah6,0,0,0);GG=GG.
Bpb(Bgh);return((B=(GG.JR()|0))<0)?B+0x100000000:B;},A6y:function(AH,Ac5,AfF,Xk){
if(!AH)throw new Error(As2);var Be=A._NewObject(C.Filter,0);var ApD=AH.Filter;var
Oe=A._NewObject(C.Int32FilterCriterion,0);Oe.Operator=0;Oe.EJ=1;Oe.A5=Ac5;Be.CW(
Oe);if(Xk>0){var Or=A._NewObject(C.UInt32FilterCriterion,0);Or.Operator=2;Or.EJ=
6;Or.A5=Xk;Be.CW(Or);}if(AfF>0){var Oi=A._NewObject(C.UInt32FilterCriterion,0);Oi.
Operator=3;Oi.EJ=6;Oi.A5=AfF;Be.CW(Oi);}AH.Bk(Be);var L8=A._NewObject(C.Int32ArrayWrapper
,0);L8.Zv(6);var O;for(O=0;O<L8.ME;O=O+1)L8.Set(O,0);var Ao3=A._NewObject(C.Rating
,0);var A1C;for(O=0;O<AH.B9();O=O+1){Ao3.E4(O,AH);if(A._GetAutoObject(C.Helper).
AGf(Ao3)){A1C=A._GetAutoObject(C.Helper).AC7(Ao3);L8.Set(A1C,L8.Get(A1C)+1);}}AH.
Bk(ApD);return L8;},A1$:function(AH,Ac5,ByW){if(!AH)throw new Error(As2);var Be=
A._NewObject(C.Filter,0);var ApD=AH.Filter;var Oe=A._NewObject(C.Int32FilterCriterion
,0);Oe.Operator=0;Oe.EJ=1;Oe.A5=Ac5;Be.CW(Oe);var Xk=A._GetAutoObject(C.Converter
).AhP()+A._GetAutoObject(C.Helper).AmG(ByW);var AfF=Xk+A._GetAutoObject(C.Helper
).AmG(1);var Or=A._NewObject(C.UInt32FilterCriterion,0);Or.Operator=2;Or.EJ=6;Or.
A5=Xk;Be.CW(Or);var Oi=A._NewObject(C.UInt32FilterCriterion,0);Oi.Operator=3;Oi.
EJ=6;Oi.A5=AfF;Be.CW(Oi);AH.Bk(Be);var Ao3=A._NewObject(C.Rating,0);var U9;var LP=
0;var O;for(O=0;O<AH.B9();O=O+1){Ao3.E4(O,AH);if(A._GetAutoObject(C.Helper).AGf(
Ao3)){U9=A._GetAutoObject(C.Helper).AC7(Ao3);if(A._GetAutoObject(C.Converter).AdZ(
U9)>A._GetAutoObject(C.Converter).AdZ(LP))LP=U9;}}AH.Bk(ApD);return LP;},Am3:function(
){if((A._GetAutoObject(C.Device).WeightRecordingScope===2)||(A._GetAutoObject(C.
Device).WeightRecordingScope===1))return true;else return false;},A7e:function(){
if((A._GetAutoObject(C.Device).WeightRecordingScope===2)||!A._GetAutoObject(C.Device
).WeightRecordingScope)return true;else return false;},BiN:function(AH,AI$,Ac5,Xk
,AfF){if(!AH)throw new Error(As2);var Be=A._NewObject(C.Filter,0);var ApD=AH.Filter;
var Oe=A._NewObject(C.Int32FilterCriterion,0);Oe.Operator=0;Oe.EJ=1;Oe.A5=Ac5;Be.
CW(Oe);if(Xk>0){var Or=A._NewObject(C.UInt32FilterCriterion,0);Or.Operator=2;Or.
EJ=6;Or.A5=Xk;Be.CW(Or);}if(AfF>0){var Oi=A._NewObject(C.UInt32FilterCriterion,0
);Oi.Operator=3;Oi.EJ=6;Oi.A5=AfF;Be.CW(Oi);}AH.Bk(Be);var L8=A._NewObject(C.Int32ArrayWrapper
,0);L8.Zv(6);var O;for(O=0;O<L8.ME;O=O+1)L8.Set(O,0);if(AH.B9()>0){var U9=AH.I6(
0,AI$);var ApV=AH.Hu(O,6);var Ac=A._NewObject(A.Core.Bs,0);Ac.Initialize(ApV);var
Aqa=U9;var AJ4=A._NewObject(A.Core.Bs,0);AJ4.Initialize(Ac.JR());for(O=1;O<AH.B9(
);O=O+1){U9=AH.I6(O,AI$);ApV=AH.Hu(O,6);Ac.Initialize(ApV);if((Ac.AbX()!==AJ4.AbX(
))||(Ac.Year!==AJ4.Year)){L8.Set(Aqa,L8.Get(Aqa)+1);AJ4.Initialize(Ac.JR());Aqa=
U9;}else if(!!U9&&(U9<Aqa))Aqa=U9;}L8.Set(Aqa,L8.Get(Aqa)+1);}AH.Bk(ApD);return L8;
},Aqn:function(L3){var B;var GG=A._NewObject(A.Core.Bs,0);GG.Initialize(L3);GG.Any(
0);GG.AnB(0);GG.AnE(0);return((B=(GG.JR()|0))<0)?B+0x100000000:B;},AN_:function(
L3){var B;L3=L3+86400;var GG=A._NewObject(A.Core.Bs,0);GG.Initialize(L3);GG.Any(
0);GG.AnB(0);GG.AnE(0);return((B=(GG.JR()|0))<0)?B+0x100000000:B;},BiP:function(
BCb,By7,Ame,AlD){var BcP=A._GetAutoObject(C.Helper).L9(BCb,By7);if(BcP>0)return((
AlD-Ame)/BcP)|0;return 0;},BpQ:function(Bxc,BxS){var GG=A._NewObject(A.Core.Bs,0
);var K6=A._NewObject(A.Core.Bs,0);GG.Initialize(Bxc);K6.Initialize(BxS);return(
GG.Year===K6.Year)&&(GG.AbX()===K6.AbX());},A6E:function(){var Be=A._GetAutoObject(
C.Helper).Mr();var BdS=A._NewObject(C.UInt32FilterCriterion,0);var Bx1=A._GetAutoObject(
C.Helper).ZN(A._GetAutoObject(C.Device).AqP)-1;BdS.Initialize(28,2,Bx1,true);Be.
CW(BdS);var U5=A._NewObject(C.AnimalTypeFilterCriterion,0);U5.Initialize(14,0,1,
true);Be.CW(U5);if(A._GetAutoObject(C.Device).AqQ){var AAe=A._NewObject(C.UInt32FilterCriterion
,0);var A2w=A._GetAutoObject(C.Helper).Dv()-21600;AAe.Initialize(30,3,A2w,true);
Be.CW(AAe);}return Be;},Bor:function(){var Jo=A._GetAutoObject(C.Device).An.Oy();
if(Jo<=0)A.ab5("%s",Xa);else{A._GetAutoObject(C.Device).An.E6();A._GetAutoObject(
C.Device).An.OA(Jo);}Jo=A._GetAutoObject(C.Device).Agu.Oy();if(Jo<=0)A.ab5("%s",
Xa);else{A._GetAutoObject(C.Device).Agu.E6();A._GetAutoObject(C.Device).Agu.OA(Jo
);}Jo=A._GetAutoObject(C.Device).Bt.Oy();if(Jo<=0)A.ab5("%s",Xa);else{A._GetAutoObject(
C.Device).Bt.E6();A._GetAutoObject(C.Device).Bt.OA(Jo);}Jo=A._GetAutoObject(C.Device
).Po.Oy();if(Jo<=0)A.ab5("%s",Xa);else{A._GetAutoObject(C.Device).Po.E6();A._GetAutoObject(
C.Device).Po.OA(Jo);}},BjS:function(Ac5){var Bf=A._GetAutoObject(C.Device).An.LS(
0,Ac5);return this.G7(Bf);},ARc:function(Jj){var Aiy=A._GetAutoObject(C.Device).
An.Aej(22,Jj);return Aiy;},ACZ:function(){var Be=A._GetAutoObject(C.Helper).Mr();
var Aja=A._NewObject(C.UInt64FilterCriterion,0);Aja.Initialize(22,0,0,true);Be.CW(
Aja);return Be;},AOH:function(AoW,By4,Qd){var Aal=-1;switch(AoW){case 2:Aal=30;break;
case 3:Aal=31;break;case 10:Aal=19;break;default:A.ab5("%s%e",UX,AoW);}if(Aal<0)
return null;var Adh=A._NewObject(C.UInt32FilterCriterion,0);Adh.Initialize(Aal,3
,A._GetAutoObject(C.Helper).Dv()-By4,Qd);return Adh;},Boo:function(aFilter){var AI=
aFilter.DL(30,3);if(!!AI)aFilter.Nj(AI);AI=aFilter.DL(31,3);if(!!AI)aFilter.Nj(AI
);AI=aFilter.DL(19,3);if(!!AI)aFilter.Nj(AI);},A1t:function(AfP,AyU,AH){if(AH.Lg(
))return 5;if(AfP.VisualId<=0)switch(AyU){case 0:if(!AfP.NaisId)return 1;break;case
1:if(!AfP.TransponderId)return 1;break;case 3:case 2:case 5:case 4:return 1;default:
throw new Error(AHp+AyU.toFixed());}if((!AfP.NaisId&&!AfP.TransponderId)&&A._GetAutoObject(
C.Device).An.AjI(1,AfP.VisualId))return 2;if(!!AfP.NaisId&&A._GetAutoObject(C.Helper
).ARa(AfP.NaisId))return 3;if(!!AfP.TransponderId&&A._GetAutoObject(C.Helper).ARc(
AfP.TransponderId))return 4;return 0;},Aqg:function(Em){Em.EB(A._GetAutoObject(C.
Device).AnimalType);Em.NZ(A._GetAutoObject(C.Device).Breed);Em.Q4(A._GetAutoObject(
C.Helper).Dv()-A._GetAutoObject(C.Helper).AmG(A._GetAutoObject(C.Device).AdQ));Em.
JT(A._GetAutoObject(C.Device).Gender);Em.Ng(A._GetAutoObject(C.Device).WhereAbouts
);},AMh:function(Rq,Em){var Gu=0;switch(Rq){case 0:Gu=A._GetAutoObject(C.Helper).
Ak4(Em.NaisId);break;case 1:Gu=A._GetAutoObject(C.Helper).Ak4(Em.TransponderId);
break;case 3:Gu=A._GetAutoObject(C.Device).Aq2;break;case 2:Gu=A._GetAutoObject(
C.Device).Aq3;break;case 4:case 5:Gu=A._GetAutoObject(C.Device).AjS;break;default:
throw new Error(AHq+Rq.toFixed());}return Gu;},A$K:function(Alk,L4,BbK,BwZ,Bxw){
var B;var Qq=null;var Xw=null;switch(Alk){case 0:{Qq=[B=A._GetAutoObject(C.Device
),B.ASz,B.A0a];Xw=[B=A._GetAutoObject(C.Device),B.Awi,B.AyN];}break;case 1:switch(
L4){case 1:{Qq=[B=A._GetAutoObject(C.Device),B.A8L,B.Ba$];Xw=[B=A._GetAutoObject(
C.Device),B.Awg,B.AyL];}break;case 0:{Qq=[B=A._GetAutoObject(C.Device),B.A8M,B.Bba
];Xw=[B=A._GetAutoObject(C.Device),B.Awh,B.AyM];}break;case 2:{Qq=[B=A._GetAutoObject(
C.Device),B.ASz,B.A0a];Xw=[B=A._GetAutoObject(C.Device),B.Awi,B.AyN];}break;default:
throw new Error(Ayb+L4.toFixed());}break;default:throw new Error(AHr+Alk.toFixed(
));}if(!!Qq&&!!Xw){Qq[2].call(Qq[0],BbK);if(BbK>0){if((Xw[1].call(Xw[0])>0)&&(BwZ<
Bxw))Qq[2].call(Qq[0],Qq[1].call(Qq[0])+Xw[1].call(Xw[0]));else if(Xw[1].call(Xw[
0])<0)Qq[2].call(Qq[0],Qq[1].call(Qq[0])+Xw[1].call(Xw[0]));}return Qq[1].call(Qq[
0]);}return 0;},AVr:function(Em,Alk,Bw7){if(!Em||(Bw7===true))return;switch(Alk){
case 0:Em.Ne(A._GetAutoObject(C.Device).Av2);break;case 1:switch(Em.Gender){case
0:Em.Ne(A._GetAutoObject(C.Device).AEf);break;case 1:Em.Ne(A._GetAutoObject(C.Device
).AEe);break;case 2:Em.Ne(A._GetAutoObject(C.Device).Av2);break;default:throw new
Error(Ayb+Em.Gender.toFixed());}break;default:throw new Error(AHr+Alk.toFixed());
}},Bjt:function(Rq,Em){var result=false;switch(Rq){case 0:result=!!Em.NaisId;break;
case 1:result=!!Em.TransponderId;break;case 3:case 2:case 4:case 5:result=false;
break;default:throw new Error(AHq+Rq.toFixed());}return result;},AKf:function(Em
,BbD,AyU,Atv,AfI){switch(BbD){case 2:if(Atv<=0)A._GetAutoObject(C.Device).A3(21,
true,Em.VisualId.toFixed(),0,AfI);else A._GetAutoObject(C.Device).A3(48,true,(Em.
VisualId.toFixed()+Ayc)+Atv.toFixed(),0,AfI);break;case 3:if(Atv<=0)A._GetAutoObject(
C.Device).A3(21,true,A._GetAutoObject(C.Converter).Rh(Em.NaisId),0,AfI);else A._GetAutoObject(
C.Device).A3(48,true,(A._GetAutoObject(C.Converter).Rh(Em.NaisId)+Ayc)+Atv.toFixed(
),0,AfI);break;case 4:if(Atv<=0)A._GetAutoObject(C.Device).A3(25,true,A._GetAutoObject(
C.Converter).Rh(Em.TransponderId),0,AfI);else A._GetAutoObject(C.Device).A3(47,true
,(A._GetAutoObject(C.Converter).Rh(Em.TransponderId)+Ayc)+Atv.toFixed(),0,AfI);break;
case 1:switch(AyU){case 1:A._GetAutoObject(C.Device).A3(42,true,A.jV,0,AfI);break;
case 0:A._GetAutoObject(C.Device).A3(43,true,A.jV,0,AfI);break;case 3:case 2:case
5:case 4:A._GetAutoObject(C.Device).A3(22,true,A.jV,0,AfI);break;default:throw new
Error(AHp+AyU.toFixed());}break;case 5:A._GetAutoObject(C.Device).A3(41,true,A._GetAutoObject(
C.Device).An.HI().toFixed(),0,AfI);break;case 0:break;default:throw new Error(AV4+
BbD.toFixed());}},Bdi:function(BbR,L4){var B;var AAi=null;switch(BbR){case 0:AAi=[
B=A._GetAutoObject(C.Device),B.Awi,B.AyN];break;case 1:switch(L4){case 1:AAi=[B=
A._GetAutoObject(C.Device),B.Awg,B.AyL];break;case 0:AAi=[B=A._GetAutoObject(C.Device
),B.Awh,B.AyM];break;case 2:AAi=[B=A._GetAutoObject(C.Device),B.Awi,B.AyN];break;
default:throw new Error(Ayb+L4.toFixed());}break;default:throw new Error(AV5+BbR.
toFixed());}return AAi;},A6Q:function(Qf,BxJ){var AaM=A._NewObject(A.Core.Bs,0);
AaM.Initialize(Qf);var ABz=AaM.Year;var Bf=A._GetAutoObject(C.Device).Po.LS(0,ABz
);var U8=A._NewObject(C.CalfDeregistrations,0);if(Bf<0){if(A._GetAutoObject(C.Device
).Po.Lg())A._GetAutoObject(C.Device).A3(51,true,A._GetAutoObject(C.Device).Po.HI(
).toFixed(),0,null);else{U8.Gq();U8.AkE(ABz);}}else U8.E4(Bf,A._GetAutoObject(C.
Device).Po);U8.Awz(U8.Deregistrations+1);if(BxJ)U8.Awy(U8.Deaths+1);U8.Ch(A._GetAutoObject(
C.Device).Po);},AMf:function(LP,AlN,AlE){var AKC=0;if((AlN&&(AlE===1))||(LP===1)
)AKC=1;else if((AlN&&(AlE===2))||(LP===2))AKC=2;else if(!!LP&&(LP!==5))AKC=LP;return AKC;
},BcU:function(Bx0){var B;if(A._GetAutoObject(C.Device).MeasureState===1){this.SR.
Cx=A._GetAutoObject(C.Device).AcD;this.SR.B2=Bx0;this.SR.AnU(this);}},ACW:function(
){var Be=this.AOG();var BdH=A._NewObject(C.BoolFilterCriterion,0);BdH.Initialize(
38,0,true,true);Be.CW(BdH);return Be;},A6v:function(ED){var Be=A._GetAutoObject(
C.Helper).Mr();if(A._GetAutoObject(C.Device).Aqc){var A2c=A._GetAutoObject(C.Helper
).AOH(ED,21600,true);Be.CW(A2c);}return Be;},A6K:function(){var Be=A._GetAutoObject(
C.Helper).Mr();var Bd9=A._NewObject(C.UInt64FilterCriterion,0);Bd9.Initialize(26
,0,0,true);Be.CW(Bd9);return Be;},A6N:function(){var B;var Be=A._GetAutoObject(C.
Helper).Mr();var AAo=(C.WhereAboutsFilterCriterion.isPrototypeOf(B=Be.DL(34,3))?
B:null);if(!!AAo)Be.Nj(AAo);var Bft=A._NewObject(C.BoolFilterCriterion,0);Bft.Initialize(
37,0,true,true);Be.CW(Bft);return Be;},Sh:function(A_,Ato,A0Q){var B;A_=Math.trunc(
A_/this.ApP(Ato));A_%=this.ApP(A0Q);return A_;},ApP:function(BbS){switch(BbS){case
0:return 1;case 1:return 10;case 2:return 100;case 3:return 1000;case 4:return 10000;
case 5:return 100000;case 6:return 1000000;case 7:return 10000000;case 8:return 100000000;
case 9:return 1000000000;case 10:return 10000000000;case 11:return 100000000000;
case 12:return 1000000000000;case 13:return 10000000000000;case 14:return 100000000000000;
case 15:return 1000000000000000;default:throw new Error(AV6+BbS.toFixed());}},Mr:
function(){var Be=A._NewObject(C.Filter,0);var BfQ=A._NewObject(C.BoolFilterCriterion
,0);BfQ.Initialize(10,0,true,true);Be.CW(BfQ);var AAo=A._NewObject(C.WhereAboutsFilterCriterion
,0);AAo.Initialize(34,3,6,true);Be.CW(AAo);return Be;},Arc:function(aFilter){return!
this.AC0(aFilter);},AC0:function(aFilter){var Jl=0;var Av=aFilter.AOI();while(!!
Av){if(Av.YE===false)Jl++;Av=aFilter.AON(Av);}return Jl;},AOG:function(){var Be=
this.Mr();var U5=A._NewObject(C.AnimalTypeFilterCriterion,0);U5.Initialize(14,0,
1,true);Be.CW(U5);return Be;},AC4:function(){var B;var A4e;var J7=this.Bi6();A4e=(((
B=A._GetAutoObject(C.Converter).Aqx(J7))<0)?B+0x10000000000000000:B)*this.ApP(12
);if((J7===10)&&(A._GetAutoObject(C.Device).PV>0)){var Bzq=A._GetAutoObject(C.Helper
).Sh(A._GetAutoObject(C.Device).PV,10,2)*this.ApP(8);A4e+=Bzq;}return A4e;},Bi6:
function(){var J7=0;if(A._GetAutoObject(C.Device).PV>0)J7=A._GetAutoObject(C.Converter
).S0(A._GetAutoObject(C.Device).PV);if(!J7)J7=A._GetAutoObject(C.Converter).A7h(
A._GetAutoObject(C.Device).Language);return J7;},ARa:function(Xj){var Aiy=A._GetAutoObject(
C.Device).An.Aej(26,Xj);return Aiy;},Aj4:function(AfJ){switch(AfJ){case 0:case 1:
case 2:case 3:case 4:case 5:return false;case 6:case 7:case 8:case 9:case 10:return true;
default:throw new Error(AV7+AfJ.toFixed());}},Bg5:function(Rq,Em){var Gu=0;switch(
Rq){case 1:Gu=A._GetAutoObject(C.Helper).Ak4(Em.TransponderId);break;case 0:if(!
A._GetAutoObject(C.Device).EartagNrAssignmentMode)Gu=A._GetAutoObject(C.Device).
AjS;else switch(Em.Gender){case 0:Gu=A._GetAutoObject(C.Device).Aq3;break;case 1:
Gu=A._GetAutoObject(C.Device).Aq2;break;case 2:Gu=A._GetAutoObject(C.Device).AjS;
break;default:throw new Error(AHs+Em.Gender.toFixed());}break;default:throw new Error(
AV8+Rq.toFixed());}return Gu;},BiC:function(){var B;var AzW=(((((((A.aaR(A.acf.AhH
)+A.aaR(A.acf.Colon))+O6)+A._GetAutoObject(C.Device).AhH)+Ayd)+A.aaR(A.acf.Bn7))+
A.aaR(A.acf.Colon))+O6)+A._GetAutoObject(A.acj.KK).BiA(((B=A._GetAutoObject(C.Device
).QZ.Timestamp)<0)?B+0x100000000:B);return AzW;},BiD:function(){var B;var AzW=((((((((((((((((((((((((((((
AV9+A._GetAutoObject(C.Device).RZ.AD8.toFixed())+Lv)+A._GetAutoObject(C.Device).
RZ.AEb.toFixed())+Lv)+A._GetAutoObject(C.Device).RZ.AGn.toFixed())+O5)+A._GetAutoObject(
C.Device).RZ.ACm)+O5)+A._GetAutoObject(A.acj.KK).AjK(((B=A._GetAutoObject(C.Device
).RZ.Timestamp)<0)?B+0x100000000:B))+O6)+AV_)+A._GetAutoObject(C.Device).Sy.AD8.
toFixed())+Lv)+A._GetAutoObject(C.Device).Sy.AEb.toFixed())+Lv)+A._GetAutoObject(
C.Device).Sy.AGn.toFixed())+O5)+A._GetAutoObject(C.Device).Sy.ACm)+O5)+A._GetAutoObject(
A.acj.KK).AjK(((B=A._GetAutoObject(C.Device).Sy.Timestamp)<0)?B+0x100000000:B))+
O6)+AV$)+A._GetAutoObject(C.Helper).Bi9())+O5)+A._GetAutoObject(C.Device).GetCommitHash(
))+O5)+A._GetAutoObject(C.Device).GetCommitCount().toFixed())+O5)+A._GetAutoObject(
A.acj.KK).AjK(A._GetAutoObject(C.Device).GetCommitEpoch());return AzW;},BiB:function(
){var B;var AzW=(((((((((((((((((((((AWa+A._GetAutoObject(C.Device).QZ.ARA.toFixed(
))+Lv)+A._GetAutoObject(C.Device).QZ.ARB.toFixed())+Lv)+A._GetAutoObject(C.Device
).QZ.ARz.toFixed())+O6)+A.aaR(A.acf.A6o))+A.aaR(A.acf.Colon))+Oa)+A._GetAutoObject(
A.acj.KK).AjK(((B=A._GetAutoObject(C.Device).QZ.Timestamp)<0)?B+0x100000000:B))+
Ayd)+AWb)+A._GetAutoObject(C.Device).SX.AVi.toFixed())+Lv)+A._GetAutoObject(C.Device
).SX.AVj.toFixed())+Lv)+A._GetAutoObject(C.Device).SX.AVh.toFixed())+O6)+A.aaR(A.
acf.A6o))+A.aaR(A.acf.Colon))+Oa)+A._GetAutoObject(A.acj.KK).AjK(((B=A._GetAutoObject(
C.Device).SX.Timestamp)<0)?B+0x100000000:B);return AzW;},A6L:function(A0Q){var B;
var O;var AAV=A.jV;for(O=1;O<=A0Q;O=O+1)if(!!A.abz(0,2))AAV=AAV+String.fromCharCode(
A.abz(97,104)&0xFFFF);else AAV=AAV+String.fromCharCode(A.abz(48,57)&0xFFFF);return AAV;
},Abo:function(En){var Azc=0;if(En===1)En=0;var Bcz=this.AgC.Avn(En);if(Bcz>=0)Azc=
this.Afx.Get(Bcz);return Azc;},AC6:function(En){var FW=0;var ABx=this.AgC.Avn(En
);if(ABx>=0)FW=this.Afw.Get(ABx);return FW;},AC5:function(En){var FW=0;var ABx=this.
AgC.Avn(En);if(ABx>=0)FW=this.Afv.Get(ABx);return FW;},A6B:function(){var Be=this.
Mr();var U5=A._NewObject(C.AnimalTypeFilterCriterion,0);U5.Initialize(14,0,A._GetAutoObject(
C.Device).ACF,true);Be.CW(U5);return Be;},ARd:function(J5){var BM=Math.trunc(J5/
1000000000000)|0;if(!BM)return 0;else if(BM>=900)return 1;else if(!A._GetAutoObject(
C.Converter).ANx(BM))return 2;else return 3;},A6P:function(Bz7){var Be=A._GetAutoObject(
C.Helper).ACZ();var AfO=A._GetAutoObject(C.Helper).A6w(3,Bz7);AfO.YE=true;Be.CW(
AfO);return Be;},A6w:function(Eb,BbC){var Av=A._NewObject(C.UInt32FilterCriterion
,0);Av.EJ=4;switch(Eb){case 2:{Av.Operator=3;Av.A5=A._GetAutoObject(C.Helper).ZN(
BbC);}break;case 3:{Av.Operator=2;Av.A5=A._GetAutoObject(C.Helper).ZN(BbC-1);}break;
default:A.ab5("%s%e",AWc,Eb);}return Av;},Bi9:function(){return(((A._GetAutoObject(
C.Device).GetVersionMajor().toFixed()+Lv)+A._GetAutoObject(C.Device).GetVersionMinor(
).toFixed())+Lv)+A._GetAutoObject(C.Device).GetVersionRev().toFixed();},A4Y:function(
Rq,Em){var Gu=0;switch(Rq){case 0:Gu=Em.VisualId;break;case 2:Gu=A._GetAutoObject(
C.Helper).Ak4(Em.TransponderId);break;case 3:if(Em.NaisId>0)Gu=A._GetAutoObject(
C.Helper).Ak4(Em.NaisId);else Gu=Em.VisualId;break;case 1:if(!A._GetAutoObject(C.
Device).EartagNrAssignmentMode)Gu=A._GetAutoObject(C.Device).AjS;else switch(Em.
Gender){case 0:Gu=A._GetAutoObject(C.Device).Aq3;break;case 1:Gu=A._GetAutoObject(
C.Device).Aq2;break;case 2:Gu=A._GetAutoObject(C.Device).AjS;break;default:throw new
Error(AHs+Em.Gender.toFixed());}break;default:throw new Error(AHt+Rq.toFixed());
}return Gu;},A$L:function(){var B;var IX=null;var Tf=0;if(!A._GetAutoObject(C.Device
).EartagNrAssignmentMode){IX=[B=A._GetAutoObject(C.Device),B.Anq,B.Aoz];Tf=A._GetAutoObject(
C.Device).Au0;}else switch(A._GetAutoObject(C.Helper).W.Gender){case 1:{IX=[B=A.
_GetAutoObject(C.Device),B.Awc,B.AyJ];Tf=A._GetAutoObject(C.Device).ACx;}break;case
0:{IX=[B=A._GetAutoObject(C.Device),B.Awd,B.AyK];Tf=A._GetAutoObject(C.Device).ACy;
}break;case 2:{IX=[B=A._GetAutoObject(C.Device),B.Anq,B.Aoz];Tf=A._GetAutoObject(
C.Device).Au0;}break;default:;}if(!!IX)switch(Tf){case 1:IX[2].call(IX[0],A._GetAutoObject(
C.Helper).W.VisualId-1);break;case 0:IX[2].call(IX[0],A._GetAutoObject(C.Helper).
W.VisualId+1);break;default:;}},A7f:function(Xj,Em){return(Em.NaisId!==Xj)&&this.
ARa(Xj);},BjD:function(Jj,Em){return(Em.TransponderId!==Jj)&&this.ARc(Jj);},AOE:
function(){var Be=A._GetAutoObject(C.Helper).A6N();var AAg=A._NewObject(C.UInt64FilterCriterion
,0);AAg.Initialize(35,5,0,true);Be.CW(AAg);return Be;},Avo:function(){var Be=A._GetAutoObject(
C.Helper).A6N();var AAg=A._NewObject(C.UInt64FilterCriterion,0);AAg.Initialize(35
,0,0,true);Be.CW(AAg);return Be;},JZ:function(A0H,Ah5){A0H.Aj(Ah5);A0H.Ar(Ah5);A0H.
Z(Ah5);},ANr:function(Ah7){var B;var Aa;var A2R=false;var Xq=Ah7.TN(null,0x1);while(
!!Xq&&(((B=Xq)?B.__proto__:null)!==A.Core.Y)){Aa=(A.kR.Co.isPrototypeOf(Xq)?Xq:null
);if(!!Aa){Aa.Bi(A2R);A2R=!A2R;}Xq=Ah7.TN(Xq,0x1);}},Boq:function(Jj){var Xm=A._GetAutoObject(
C.Device).An.Filter;A._GetAutoObject(C.Device).An.Bk(null);var A3Y=A._GetAutoObject(
C.Device).An.AgV(22,Jj);var Cz=A._NewObject(C.Animal,0);Cz.E4(A3Y,A._GetAutoObject(
C.Device).An);Cz.PT(0);Cz.Ch(A._GetAutoObject(C.Device).An);A._GetAutoObject(C.Device
).An.Bk(Xm);},A6z:function(Atn){var Be=null;switch(Atn){case 0:Be=this.BiU();break;
case 1:Be=this.ACZ();break;default:throw new Error(AHu+Atn.toFixed());}return Be;
},BiU:function(){var Be=A._GetAutoObject(C.Helper).Mr();var AfO=this.A6w(2,100);
Be.CW(AfO);return Be;},Byn:function(Atn){var Xm=A._GetAutoObject(C.Device).An.Filter;
A._GetAutoObject(C.Device).An.Bk(this.A6z(Atn));var CB=A._GetAutoObject(C.Device
).An.B9();var O;for(O=CB-1;O>=0;O--){A._GetAutoObject(C.Helper).G7(O);A._GetAutoObject(
C.Helper).W.Ae3(false);A._GetAutoObject(C.Helper).W.Ch(A._GetAutoObject(C.Device
).An);}A._GetAutoObject(C.Device).An.Bk(Xm);},BiV:function(Atn){var Xm=A._GetAutoObject(
C.Device).An.Filter;A._GetAutoObject(C.Device).An.Bk(this.A6z(Atn));var Gg=A._GetAutoObject(
C.Device).An.B9();A._GetAutoObject(C.Device).An.Bk(Xm);return Gg;},A6H:function(
AH){var Xm=AH.Filter;AH.Bk(this.Avo());var O;var A2H=4294967295;for(O=0;O<AH.B9(
);O++){var O_=AH.Hu(O,4);if(O_<A2H)A2H=O_;}AH.Bk(Xm);return A._GetAutoObject(C.Helper
).L9(A2H,A._GetAutoObject(C.Helper).Dv());},BjA:function(){if(A._GetAutoObject(C.
Device).P1.ZX!==6)return false;if((A._GetAutoObject(C.Device).P1.AsO===1529)&&(A.
_GetAutoObject(C.Device).P1.Ash===16900))return true;return false;},Arw:function(
){return this.Ux;},A8W:function(){return this.AhE;},Blc:function(){return this.AUr;
},Bld:function(){return this.AUs;},Blg:function(){return this.AGP;},_Init:function(
aArg){C.AmL._Init.call(this,aArg);C.Animal._Init.call(this.W={I:this},0);A.Core.
Bs._Init.call(this.Au={I:this},0);A.acl.Gl._Init.call(this.KG={I:this},0);A.acl.
Gl._Init.call(this.SR={I:this},0);C.AMB._Init.call(this.AdY={I:this},0);C.AU9._Init.
call(this.UE={I:this},0);C.AU8._Init.call(this.UD={I:this},0);C.TF._Init.call(this.
Ael={I:this},0);C.AVM._Init.call(this.Afw={I:this},0);C.AVL._Init.call(this.Afv={
I:this},0);C.AVK._Init.call(this.Afu={I:this},0);C.AVO._Init.call(this.Afx={I:this
},0);C.AMC._Init.call(this.AgC={I:this},0);this.__proto__=C.HelperClass;var B;this.
KG.HM(1);this.KG.Fq(3000);this.KG.B2=100;this.SR.AwE(10);this.SR.WC(5);this.SR.HM(
1);this.SR.Fq(4000);this.Ael.B2=false;this.Ael.Cx=true;this.Ael.HM(1);this.Ael.Fq(
100);this.KG.Sz=[this,this.BCd];this.KG.Q=[this,this.Blg,this.Bnz];this.SR.Sz=[this
,this.BCf];this.SR.Q=[B=A._GetAutoObject(C.Device),B.AED,B.AIR];this.Ael.Q=[B=A.
_GetAutoObject(C.Device),B.AEE,B.AIS];this.Init(aArg);var J3=this._variants();if(
J3){this.K={};J3._Init.call(this,aArg);}},_Done:function(){if(this.K)this.K._Done.
call(this);this.__proto__=C.AmL;this.W._Done();this.Au._Done();this.KG._Done();this.
SR._Done();this.AdY._Done();this.UE._Done();this.UD._Done();this.Ael._Done();this.
Afw._Done();this.Afv._Done();this.Afu._Done();this.Afx._Done();this.AgC._Done();
C.AmL._Done.call(this);},_ReInit:function(){C.AmL._ReInit.call(this);this.W._ReInit(
);this.Au._ReInit();this.KG._ReInit();this.SR._ReInit();this.AdY._ReInit();this.
UE._ReInit();this.UD._ReInit();this.Ael._ReInit();this.Afw._ReInit();this.Afv._ReInit(
);this.Afu._ReInit();this.Afx._ReInit();this.AgC._ReInit();if(this.K)this.K._ReInit.
call(this);},_Mark:function(D){var B;C.AmL._Mark.call(this,D);if((B=this.Ux)&&(B.
_cycle!=D))B._Mark(B._cycle=D);if((B=this.AhE)&&(B._cycle!=D))B._Mark(B._cycle=D
);if((B=this.AUr)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.AUs)&&(B._cycle!=
D))B._Mark(B._cycle=D);if((B=this.W)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Au
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.KG)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.SR)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AdY)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.UE)._cycle!=D)B._Mark(B._cycle=D);if((B=this.UD)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Ael)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Afw)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.Afv)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
Afu)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Afx)._cycle!=D)B._Mark(B._cycle=D);
if((B=this.AgC)._cycle!=D)B._Mark(B._cycle=D);if(this.K)this.K._Mark(D);},_variants:
function(){return A.acs.HelperClass._variants();},K:null,_className:"Device::HelperClass"
};C.Helper={_Init:function(){C.HelperClass._Init.call(this,0);},_ReInit:function(
){},_variants:function(){return this;},_this:null};C.BoolFilterCriterion={A5:false
,Abh:function(){var Av=A._NewObject(C.BoolFilterCriterion,0);Av.E$(this);return Av;
},E$:function(AI){C.FilterCriterion.E$.call(this,AI);var Av=(C.BoolFilterCriterion.
isPrototypeOf(AI)?AI:null);if(!!Av)this.A5=Av.A5;},Initialize:function(A4,Eb,A_,
Qd){this.EJ=A4;this.Operator=Eb;this.A5=A_;this.YE=Qd;return this;},_Init:function(
aArg){C.FilterCriterion._Init.call(this,aArg);this.__proto__=C.BoolFilterCriterion;
},_className:"Device::BoolFilterCriterion"};C.UInt32FilterCriterion={A5:0,Abh:function(
){var Av=A._NewObject(C.UInt32FilterCriterion,0);Av.E$(this);return Av;},E$:function(
AI){C.FilterCriterion.E$.call(this,AI);var Av=(C.UInt32FilterCriterion.isPrototypeOf(
AI)?AI:null);if(!!Av)this.A5=Av.A5;},Initialize:function(A4,Eb,A_,Qd){this.EJ=A4;
this.Operator=Eb;this.A5=A_;this.YE=Qd;return this;},_Init:function(aArg){C.FilterCriterion.
_Init.call(this,aArg);this.__proto__=C.UInt32FilterCriterion;},_className:"Device::UInt32FilterCriterion"
};C.OverlayMenu={None:0,Home:1,AutoAction:2,MenuItemSettings:3,RatingSettings:4,
WeighingSettings:5,Options:6,AnimalSearch:7,ActionSettings:8,MeasurementReady:9,
AnimalMultiInfoMenu:10,AnimalSearchUnfiltered:11,AnimalSearchDriedOff:12,MassRecordingMenu:
13,MassRecordingDefaults:14,MassRecordingFields:15,BirthRegistrationsListMenu:16
,LAST:17};C.EnumToString={BS:function(A7){throw new Error(Aon+A7.toFixed());},Lu:
function(A7){return this.BS(A7);},_Init:function(aArg){this.__proto__=C.EnumToString;
A.h7++;},_Done:function(){this.__proto__=null;A.h7--;},_ReInit:function(){},_Mark:
function(D){var B;if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:
0,_observers:null,_className:"Device::EnumToString"};C.ScreenTypeToString={BS:function(
A7){var AJS=A7;var BC;switch(AJS){case 3:BC=A.aaR(A.acf.Avu);break;case 34:BC=A.
aaR(A.acf.Tu);break;case 35:BC=A.aaR(A.acf.Vt);break;case 43:BC=A.aaR(A.acf.AOD);
break;default:BC=this.BpR(A7);}return BC;},BpR:function(A7){var AJS=A7;var BC=A.
jV;switch(AJS){case 0:BC=Aye;break;case 2:BC=AWd;break;case 4:BC=AWe;break;case 39:
BC=AWf;break;case 38:BC=AHv;break;case 63:BC=AWg;break;case 64:BC=AHw;break;case
82:BC=AHx;break;case 83:BC=AHy;break;case 92:BC=AWh;break;case 93:BC=AHz;break;case
65:BC=AWi;break;case 3:BC=AHA;break;case 6:BC=Rn;break;case 16:BC=Xb;break;case 22:
BC=AWj;break;case 42:BC=AWk;break;case 88:BC=AWl;break;case 87:BC=AWm;break;case
89:BC=AWn;break;case 95:BC=AWo;break;case 17:BC=AWp;break;case 23:BC=AhX;break;case
18:BC=AHB;break;case 19:BC=AWq;break;case 37:BC=AWr;break;case 76:BC=AHC;break;case
1:BC=AHD;break;case 5:BC=Ayf;break;case 7:BC=Qa;break;case 81:BC=AWs;break;case 8:
BC=AWt;break;case 9:BC=AWu;break;case 40:BC=As3;break;case 41:BC=AWv;break;case 24:
BC=AWw;break;case 10:BC=AWx;break;case 60:BC=AWy;break;case 21:BC=AWz;break;case
11:BC=AWA;break;case 29:BC=As4;break;case 48:BC=AWB;break;case 30:BC=AWC;break;case
12:BC=AWD;break;case 13:BC=AWE;break;case 14:BC=AWF;break;case 15:BC=AWG;break;case
69:BC=AWH;break;case 70:BC=AWI;break;case 20:BC=AWJ;break;case 25:BC=AWK;break;case
66:BC=AHE;break;case 59:BC=Alb;break;case 58:BC=AWL;break;case 56:BC=AWM;break;case
57:BC=AWN;break;case 68:BC=Ayg;break;case 67:BC=Alc;break;case 84:BC=AhY;break;case
77:BC=Ayh;break;case 26:BC=Aoo;break;case 28:BC=AhZ;break;case 27:BC=AWO;break;case
31:BC=Ayi;break;case 78:BC=AHF;break;case 34:BC=AfC;break;case 35:BC=AHG;break;case
32:BC=Aab;break;case 45:BC=Ald;break;case 49:BC=Aop;break;case 55:BC=AWP;break;case
54:BC=AWQ;break;case 33:BC=AWR;break;case 36:BC=AWS;break;case 50:BC=AWT;break;case
75:BC=As5;break;case 43:BC=AHH;break;case 44:BC=AHI;break;case 61:BC=AWU;break;case
62:BC=AWV;break;case 46:BC=AWW;break;case 47:BC=AWX;break;case 85:BC=AWY;break;case
86:BC=AWZ;break;case 71:BC=AW0;break;case 72:BC=AW1;break;case 74:BC=AW2;break;case
73:BC=AW3;break;case 51:BC=AW4;break;case 52:BC=Ayj;break;case 53:BC=AHJ;break;case
79:BC=AHK;break;case 80:BC=AHL;break;case 90:BC=AHM;break;case 91:BC=AHN;break;case
94:BC=AHO;break;default:throw new Error(AW5+AJS.toFixed());}return BC;},_Init:function(
aArg){C.EnumToString._Init.call(this,aArg);this.__proto__=C.ScreenTypeToString;}
,_className:"Device::ScreenTypeToString"};C.OverlayMenuToString={BS:function(A7){
var Bfo=A7;var Pc=A.jV;switch(Bfo){case 0:Pc=AW6;break;case 1:Pc=AHA;break;case 8:
Pc=AW7;break;case 2:Pc=AW8;break;case 3:Pc=AW9;break;case 4:Pc=AW_;break;case 5:
Pc=AW$;break;case 6:Pc=Ayk;break;case 7:Pc=AHP;break;case 11:Pc=AXa;break;case 12:
Pc=AHQ;break;case 9:Pc=Ah0;break;case 10:Pc=UY;break;case 14:Pc=AXb;break;case 15:
Pc=Aac;break;case 13:Pc=AXc;break;case 16:Pc=AXd;break;default:throw new Error(Ale+
Bfo.toFixed());}return Pc;},_Init:function(aArg){C.EnumToString._Init.call(this,
aArg);this.__proto__=C.OverlayMenuToString;},_className:"Device::OverlayMenuToString"
};C.ScanStateToString={BS:function(A7){var BfZ=A7;var Bp=A.jV;switch(BfZ){case 4:
Bp=Aad;break;case 0:Bp=AcO;break;case 2:Bp=Ayl;break;case 3:Bp=AXe;break;case 1:
Bp=Ob;break;default:throw new Error(AHR+BfZ.toFixed());}return Bp;},_Init:function(
aArg){C.EnumToString._Init.call(this,aArg);this.__proto__=C.ScanStateToString;},
_className:"Device::ScanStateToString"};C.MeasureStateToString={BS:function(A7){
var Bd3=A7;var Bp=A.jV;switch(Bd3){case 4:Bp=Aad;break;case 0:Bp=AcO;break;case 2:
Bp=AXf;break;case 1:Bp=Ob;break;case 3:Bp=AHS;break;default:throw new Error(AXg+
Bd3.toFixed());}return Bp;},_Init:function(aArg){C.EnumToString._Init.call(this,
aArg);this.__proto__=C.MeasureStateToString;},_className:"Device::MeasureStateToString"
};C.TemperatureUnit={Celsius:0,Fahrenheit:1,LAST:2};C.TemperatureUnitToString={BS:
function(A7){var Bgm=A7;var Ap6=A.jV;switch(Bgm){case 0:Ap6=A.aaR(A.acf.Bp_);break;
case 1:Ap6=A.aaR(A.acf.Bp$);break;default:throw new Error(AHT+Bgm.toFixed());}return Ap6;
},_Init:function(aArg){C.EnumToString._Init.call(this,aArg);this.__proto__=C.TemperatureUnitToString;
},_className:"Device::TemperatureUnitToString"};C.AnimalType={DairyCalf:0,DairyCow:
1,SheepLamb:2,LAST:3};C.AnimalTypeToString={BS:function(A7){var AK3=A7;var type=
A.jV;switch(AK3){case 0:type=A.aaR(A.acf.Bht);break;case 1:type=A.aaR(A.acf.BhH);
break;case 2:type=A.aaR(A.acf.BjL);break;default:throw new Error(AHU+AK3.toFixed(
));}return type;},_Init:function(aArg){C.EnumToString._Init.call(this,aArg);this.
__proto__=C.AnimalTypeToString;},_className:"Device::AnimalTypeToString"};C.Language={
Default:0,German:1,Spanish:2,French:3,Italian:4,Finnish:5,Chinese_TW:6,Turkish:7
,Greek:8,Russian:9,Dutch:10,Czech:11,Estonian:12,Bulgarian:13,Bosnian:14,Norwegian:
15,Ukrainian:16,LAST:17};C.LanguageToString={BS:function(A7){var Az$=A7;var Pb=A.
jV;switch(Az$){case 0:Pb=AXh;break;case 10:Pb=AXi;break;case 1:Pb=AXj;break;case
12:Pb=AXk;break;case 5:Pb=AXl;break;case 3:Pb=AXm;break;case 8:Pb=AXn;break;case
13:Pb=AXo;break;case 4:Pb=AHV;break;case 9:Pb=AXp;break;case 2:Pb=AHW;break;case
7:Pb=AHX;break;case 6:Pb=Aym;break;case 11:Pb=AXq;break;case 14:Pb=AXr;break;case
15:Pb=AXs;break;case 16:Pb=AXt;break;default:throw new Error(AHY+Az$.toFixed());
}return Pb;},Lu:function(A7){var Az$=A7;var Do=A.jV;switch(Az$){case 0:Do=AXu;break;
case 10:Do=W8;break;case 1:Do=O3;break;case 12:Do=AXv;break;case 5:Do=US;break;case
3:Do=W4;break;case 8:Do=AXw;break;case 13:Do=W1;break;case 4:Do=W5;break;case 9:
Do=S_;break;case 2:Do=Z_;break;case 7:Do=W_;break;case 6:Do=As6;break;case 11:Do=
As7;break;case 14:Do=AHZ;break;case 15:Do=S9;break;case 16:Do=KY;break;default:throw new
Error(AHY+Az$.toFixed());}return Do;},_Init:function(aArg){C.EnumToString._Init.
call(this,aArg);this.__proto__=C.LanguageToString;},_className:"Device::LanguageToString"
};C.Gender={Male:0,Female:1,Unknown:2,LAST:3};C.BirthType={Single:0,Twins:1,Triplets:
2,Quadruplets:3,LAST:4};C.GenderToString={BS:function(A7){var AtN=A7;var AJ_=A.jV;
switch(AtN){case 0:AJ_=A.aaR(A.acf.Male);break;case 1:AJ_=A.aaR(A.acf.Female);break;
case 2:AJ_=A.aaR(A.acf.Unknown);break;default:throw new Error(AXx+AtN.toFixed());
}return AJ_;},_Init:function(aArg){C.EnumToString._Init.call(this,aArg);this.__proto__=
C.GenderToString;},_className:"Device::GenderToString"};C.BirthTypeToString={BS:
function(A7){var type=A7;var AfS=A.jV;switch(type){case 0:AfS=A.aaR(A.acf.Bo4);break;
case 1:AfS=A.aaR(A.acf.Bp6);break;case 2:AfS=A.aaR(A.acf.Triplets);break;case 3:
AfS=A.aaR(A.acf.Quadruplets);break;default:throw new Error(AXy+type.toFixed());}
return AfS;},_Init:function(aArg){C.EnumToString._Init.call(this,aArg);this.__proto__=
C.BirthTypeToString;},_className:"Device::BirthTypeToString"};C.SyncState={Idle:
0,Init:1,Exporting:2,ImportStart:3,Importing:4,ImportFinish:5,Ready:6,Error:7,LAST:
8};C.SyncStateToString={BS:function(A7){var Bgg=A7;var Bp=A.jV;switch(Bgg){case 7:
Bp=Aad;break;case 0:Bp=AcO;break;case 6:Bp=AHS;break;case 2:Bp=AXz;break;case 5:
Bp=AXA;break;case 3:Bp=AXB;break;case 4:Bp=AXC;break;case 1:Bp=AXD;break;default:
throw new Error(AXE+Bgg.toFixed());}return Bp;},_Init:function(aArg){C.EnumToString.
_Init.call(this,aArg);this.__proto__=C.SyncStateToString;},_className:"Device::SyncStateToString"
};C.RatedAttributeToString={BS:function(A7){var AAW=A7;switch(AAW){case 0:return A.
jV;case 1:return A.aaR(A.acf.Bod);case 4:return A.aaR(A.acf.Boc);case 3:return A.
aaR(A.acf.Boe);case 2:return A.aaR(A.acf.Bob);default:throw new Error(AH0+AAW.toFixed(
));}},Lu:function(A7){var AAW=A7;switch(AAW){case 0:return A.jV;case 1:return A.
aaR(A.acf.Feed);case 4:return A.aaR(A.acf.AGg);case 3:return A.aaR(A.acf.AGh);case
2:return A.aaR(A.acf.AGe);default:throw new Error(AH0+AAW.toFixed());}},_Init:function(
aArg){C.EnumToString._Init.call(this,aArg);this.__proto__=C.RatedAttributeToString;
},_className:"Device::RatedAttributeToString"};C.AssesmentToString={BS:function(
A7){var Alt=A7;var Azj=A.jV;switch(Alt){case 0:case 5:Azj=A.jV;break;case 3:Azj=
A.aaR(A.acj.Bo_);break;case 2:Azj=A.aaR(A.acj.Bpa);break;case 1:Azj=A.aaR(A.acj.
Bo$);break;default:throw new Error(AXF+Alt.toFixed());}return Azj;},_Init:function(
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
96,WarningDataExportPurchasedFailed:97,RemovedFromPurchasedNoticePending:98,SuccessDataExportPurchasedDownload:
99,SuccessDataExportPurchased:100,WarningParsingDateFailed:101,WarningParsedDateInFutureInvalid:
102,WarningParsingNaisIdFailed:103,RemovedAnimalPurchased:104,WarningParsingShortNaisIdWithoutPremisesId:
105,SuccessChangeTransponder:106,TransponderAlreadyRegisteredCapturable:107,ConfirmationMassDeregistration:
108,SuccessMassDeregistration:109,DataExportInProgress:110,BarcodeScannerConnectedSwitchScreen:
111,BarcodeScannerDisconnectedSwitchScreen:112,WarningDataExportAnimalsNoReset:113
,LAST:114};C.PopupState={Queued:0,Unknown:1,Displayed:2,ClosedAfterTimeOut:3,ClosedWithOk:
4,ClosedWithCancel:5,ClosedByMiddleware:6,ClosedWithYes:7,ClosedWithNo:8,Opened:
9};C.PopupContext={AF3:null,AkG:A.jV,Ak1:0,PopupState:1,Id:0,Show:false,Bni:function(
E){var B;if(this.PopupState===E)return;this.PopupState=E;if(!!this.AF3)(B=this.AF3
)?B[1].call(B[0],this):null;},_Init:function(aArg){this.__proto__=C.PopupContext;
A.h7++;},_Done:function(){this.__proto__=null;A.h7--;},_ReInit:function(){},_Mark:
function(D){var B;if((B=this.AF3)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((
B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:
"Device::PopupContext"};C.Boolean={No:0,Yes:1,LAST:2};C.BooleanToYesNo={BS:function(
A7){switch(A7){case 0:return A.aaR(A.acf.No);case 1:return A.aaR(A.acf.Yes);default:
return Ayn+A7.toFixed();}},_Init:function(aArg){C.EnumToString._Init.call(this,aArg
);this.__proto__=C.BooleanToYesNo;},_className:"Device::BooleanToYesNo"};C.AnimalGroupTableFields={
Id:0,GroupName:1};C.AnimalGroup={GroupName:AHo,Id:0,E4:function(Ad,AH){var HD=C.
Row.E4.call(this,Ad,AH);if(HD&&!!AH){this.OnSetId(AH.CF(Ad,0));this.AFa(AH.VY(Ad
,1));}return HD;},Ch:function(AH){var HD=C.Row.Ch.call(this,AH);if(HD&&!!AH){var
Jo=AH.Oy();if(Jo<=0)A.ab5("%s",Xa);else{if(this.Am4())this.CL=AH.YB();AH.Hn(this.
CL,0,this.Id);AH.ZF(this.CL,1,this.GroupName);AH.OA(Jo);}}return HD;},Gq:function(
){C.Row.Gq.call(this);this.OnSetId(-1);},E6:function(){C.Row.E6.call(this);this.
OnSetId(0);this.AFa(A.jV);},OnSetId:function(E){if(this.Id===E)return;this.Id=E;
A.abo([this,this.Q2,this.OnSetId],0);},AFa:function(E){if(this.GroupName===E)return;
this.GroupName=E;A.abo([this,this.BkS,this.AFa],0);},Q2:function(){return this.Id;
},BkS:function(){return this.GroupName;},_Init:function(aArg){C.Row._Init.call(this
,aArg);this.__proto__=C.AnimalGroup;this.TableId=3;},_className:"Device::AnimalGroup"
};C.PopupIdToString={BS:function(A7){var AdB=A7;var Aw=A.jV;var AJQ;AJQ=A.aaR(A.
acf.Bqs)+O6;switch(AdB){case 0:Aw=A.aaR(A.acf.Unknown);break;case 1:Aw=A.aaR(A.acf.
SevereError);break;case 58:Aw=A.aaR(A.acf.Bip);break;case 2:Aw=A.aaR(A.acf.Bin);
break;case 3:Aw=A.aaR(A.acf.Bqe);break;case 77:Aw=A._GetAutoObject(C.Helper).BiD(
);break;case 78:Aw=A._GetAutoObject(C.Helper).BiB();break;case 79:Aw=A._GetAutoObject(
C.Helper).BiC();break;case 9:Aw=A.aaR(A.acf.BqG);break;case 5:Aw=A.aaR(A.acf.SuccessDataSync
);break;case 8:Aw=A.aaR(A.acf.SuccessResetFactorySettings);break;case 34:Aw=A.aaR(
A.acf.SuccessResetAnimalData);break;case 10:Aw=A._GetAutoObject(C.Device).AC3();
break;case 82:Aw=A.aaR(A.acf.Bir);break;case 83:Aw=A.aaR(A.acf.Bis);break;case 80:
Aw=A.aaR(A.acf.Bpk);break;case 81:Aw=A.aaR(A.acf.SuccessRestoreBackup);break;case
91:Aw=A.aaR(A.acf.Bhg);break;case 92:Aw=A.aaR(A.acf.Bot);break;case 4:Aw=A.aaR(A.
acf.WarningDataSync);break;case 7:Aw=A.aaR(A.acf.BqE);break;case 33:Aw=A.aaR(A.acf.
WarningResetAnimalData);break;case 6:Aw=A.aaR(A.acf.WarningRestart);break;case 27:
Aw=A.aaR(A.acf.WarningNoActionDefined);break;case 64:Aw=A.aaR(A.acf.WarningActionNotApplicable
);break;case 28:Aw=A.aaR(A.acf.WarningNoMenuItemVisible);break;case 29:Aw=A.aaR(
A.acf.WarningEnterPresentationMode);break;case 30:Aw=A.aaR(A.acf.WarningNoAnimalsRegistered
);break;case 41:Aw=((AJQ+A.aaR(A.acf.ARI))+O6)+A.aaR(A.acf.BjY);break;case 50:Aw=((
AJQ+A.aaR(A.acf.ARI))+O6)+A.aaR(A.acf.Bj0);break;case 51:Aw=((AJQ+A.aaR(A.acf.ARI
))+O6)+A.aaR(A.acf.BjZ);break;case 42:Aw=A.aaR(A.acf.BqC);break;case 45:Aw=A.aaR(
A.acf.Bqw);break;case 46:Aw=A.aaR(A.acf.WarningNoValidCountryCode);break;case 57:
Aw=A.aaR(A.acf.WarningOutdatedAnimalWeight);break;case 52:Aw=A.aaR(A.acf.WarningOutdatedAnimalWeights
);break;case 53:Aw=A.aaR(A.acf.WarningWeightEvaluationSingular);break;case 56:Aw=
A.aaR(A.acf.WarningWeightEvaluationPlural);break;case 11:Aw=A.aaR(A.acf.ScanError
);break;case 12:Aw=A.aaR(A.acf.ScanNotFound);break;case 13:Aw=A.aaR(A.acf.Bg_);break;
case 36:Aw=A.aaR(A.acf.BpZ);break;case 14:Aw=A.aaR(A.acf.AnimalNotFound);break;case
15:Aw=A.aaR(A.acf.SuccessUnregister);break;case 35:Aw=A.aaR(A.acf.SuccessUnregisterPerished
);break;case 26:Aw=A.aaR(A.acf.SuccessCreationNewAnimal);break;case 23:Aw=A.aaR(
A.acf.SuccessCreationNewAnimals);break;case 24:Aw=A.aaR(A.acf.BhK);break;case 49:
Aw=A.aaR(A.acf.EvaluationInProgress);break;case 16:Aw=A.aaR(A.acf.BhP);break;case
17:Aw=A.aaR(A.acf.Bpc);break;case 18:Aw=A.aaR(A.acf.Bpq);break;case 19:Aw=A.aaR(
A.acf.Bpd);break;case 20:Aw=A.aaR(A.acf.Bpr);break;case 54:Aw=A.aaR(A.acf.Bpl);break;
case 55:Aw=A.aaR(A.acf.Bpo);break;case 21:Aw=A.aaR(A.acf.A$Q);break;case 48:Aw=(
A.aaR(A.acf.A$Q)+O6)+A.aaR(A.acf.A5E);break;case 22:Aw=A.aaR(A.acf.Bqy);break;case
63:Aw=A.aaR(A.acf.Bqz);break;case 85:Aw=A.aaR(A.acf.BqB);break;case 43:Aw=A.aaR(
A.acf.BqA);break;case 25:Aw=A.aaR(A.acf.A$A);break;case 47:Aw=(A.aaR(A.acf.A$A)+
O6)+A.aaR(A.acf.A5E);break;case 107:Aw=A.aaR(A.acf.Bqa);break;case 31:{var BzR=(((((((((((((((((((
A.aaR(A.acf.BhB)+Ayd)+A.aaR(A.acf.ANt))+A.aaR(A.acf.Colon))+Oa)+A.aaR(A.acf.BhD)
)+O6)+A.aaR(A.acf.AOt))+A.aaR(A.acf.Colon))+Oa)+A.aaR(A.acf.Bix))+O6)+A.aaR(A.acf.
AUc))+A.aaR(A.acf.Colon))+Oa)+A.aaR(A.acf.Bog))+O6)+A.aaR(A.acf.AUb))+A.aaR(A.acf.
Colon))+Oa)+A.aaR(A.acf.Bof);Aw=BzR;}break;case 32:Aw=A.aaR(A.acf.Bp0);break;case
69:Aw=A.aaR(A.acf.Bj$);break;case 44:Aw=A.aaR(A.acf.BqF);break;case 37:Aw=A.aaR(
A.acf.WarningResetWeightSettings);break;case 38:Aw=A.aaR(A.acf.WarningResetTempThresholds
);break;case 39:Aw=A.aaR(A.acf.Bn8);break;case 76:Aw=(A.aaR(A.acf.A5h)+O6)+A.aaR(
A.acf.AUe);break;case 40:Aw=A.aaR(A.acf.Bpm);break;case 75:Aw=A.aaR(A.acf.Bpe);break;
case 59:Aw=A.aaR(A.acf.QuestionAddAnotherCalfMultiples);break;case 62:Aw=A.aaR(A.
acf.Bpg);break;case 96:Aw=A.aaR(A.acf.Bph);break;case 60:Aw=A.aaR(A.acf.Bpi);break;
case 98:Aw=A.aaR(A.acf.Bpj);break;case 61:Aw=A.aaR(A.acf.Bps);break;case 104:Aw=
A.aaR(A.acf.Bpt);break;case 65:Aw=A.aaR(A.acf.SuccessClearAnimalLoss);break;case
66:Aw=A.aaR(A.acf.WarningNoActionsForAnimalLoss);break;case 67:Aw=A.aaR(A.acf.SuccessLinkTransponder
);break;case 106:Aw=A.aaR(A.acf.Bpf);break;case 86:Aw=A.aaR(A.acf.SuccessUnlinkTransponder
);break;case 68:Aw=A.aaR(A.acf.Bpn);break;case 70:Aw=A.aaR(A.acf.Bit);break;case
71:Aw=A.aaR(A.acf.Bpw);break;case 72:Aw=A.aaR(A.acf.Bpx);break;case 97:Aw=A.aaR(
A.acf.Biv);break;case 100:Aw=A.aaR(A.acf.Bpz);break;case 99:Aw=A.aaR(A.acf.BpA);
break;case 88:Aw=A.aaR(A.acf.Biu);break;case 89:Aw=A.aaR(A.acf.Bpu);break;case 90:
Aw=A.aaR(A.acf.Bpv);break;case 73:Aw=A.aaR(A.acf.WarningNoPremisesID);break;case
74:Aw=A.aaR(A.acf.WarningNoFlashDrivePresent);break;case 94:Aw=A.aaR(A.acf.WarningNoBackupPathPresent
);break;case 93:Aw=A.aaR(A.acf.WarningNoBackupFilePresent);break;case 84:Aw=A.aaR(
A.acf.BiK);break;case 87:Aw=A.aaR(A.acf.BqI);break;case 95:Aw=A.aaR(A.acf.Bqv);break;
case 108:Aw=A.aaR(A.acf.Bqx);break;case 109:Aw=A.aaR(A.acf.SuccessMassDeregistration
);break;case 102:Aw=A.aaR(A.acf.WarningParsedDateInFutureInvalid);break;case 101:
Aw=A.aaR(A.acf.WarningParsingDateFailed);break;case 103:Aw=A.aaR(A.acf.WarningParsingNaisIdFailed
);break;case 105:Aw=A.aaR(A.acf.BqD);break;case 110:Aw=A.aaR(A.acf.Bhs);break;case
111:Aw=A.aaR(A.acf.BoF);break;case 112:Aw=A.aaR(A.acf.BoG);break;case 113:Aw=A.aaR(
A.acf.Bpy);break;default:throw new Error(AH1+AdB.toFixed());}return Aw;},Lu:function(
A7){var AdB=A7;var Aw=A.jV;switch(AdB){case 0:Aw=AXG;break;case 1:Aw=AXH;break;case
58:Aw=AXI;break;case 2:Aw=AXJ;break;case 3:Aw=AXK;break;case 77:Aw=AXL;break;case
78:Aw=AH2;break;case 79:Aw=AH3;break;case 9:Aw=AH4;break;case 5:Aw=AH5;break;case
8:Aw=Ayo;break;case 34:Aw=Ayp;break;case 80:Aw=AH6;break;case 81:Aw=AXM;break;case
91:Aw=AH7;break;case 92:Aw=AXN;break;case 82:Aw=AH8;break;case 83:Aw=AXO;break;case
10:Aw=AXP;break;case 4:Aw=AXQ;break;case 7:Aw=AXR;break;case 33:Aw=AXS;break;case
6:Aw=AXT;break;case 27:Aw=AXU;break;case 64:Aw=AXV;break;case 28:Aw=AXW;break;case
29:Aw=AXX;break;case 30:Aw=AXY;break;case 41:Aw=AXZ;break;case 50:Aw=Ayq;break;case
51:Aw=AX0;break;case 42:Aw=AX1;break;case 45:Aw=Ayr;break;case 46:Aw=As8;break;case
57:Aw=UZ;break;case 52:Aw=As9;break;case 53:Aw=AX2;break;case 56:Aw=AX3;break;case
11:Aw=AX4;break;case 12:Aw=AH9;break;case 13:Aw=AX5;break;case 36:Aw=AH_;break;case
14:Aw=AX6;break;case 15:Aw=AX7;break;case 35:Aw=AX8;break;case 26:Aw=As_;break;case
23:Aw=AX9;break;case 24:Aw=AX_;break;case 49:Aw=AH$;break;case 16:Aw=AX$;break;case
17:Aw=AYa;break;case 18:Aw=AYb;break;case 19:Aw=AYc;break;case 20:Aw=AcP;break;case
54:Aw=AYd;break;case 55:Aw=AYe;break;case 21:Aw=AYf;break;case 48:Aw=AYg;break;case
22:Aw=AIa;break;case 63:Aw=AYh;break;case 43:Aw=AYi;break;case 85:Aw=AYj;break;case
25:Aw=AYk;break;case 47:Aw=AYl;break;case 107:Aw=AYm;break;case 31:Aw=AIb;break;
case 32:Aw=AYn;break;case 69:Aw=AYo;break;case 44:Aw=AYp;break;case 37:Aw=AIc;break;
case 38:Aw=AId;break;case 39:Aw=AYq;break;case 76:Aw=AYr;break;case 40:Aw=AYs;break;
case 75:Aw=AYt;break;case 59:Aw=Ro;break;case 62:Aw=As$;break;case 96:Aw=AIe;break;
case 60:Aw=AIf;break;case 98:Aw=Aoq;break;case 65:Aw=Aor;break;case 61:Aw=Ays;break;
case 104:Aw=AYu;break;case 66:Aw=AIg;break;case 67:Aw=AYv;break;case 106:Aw=AYw;
break;case 86:Aw=AYx;break;case 68:Aw=AYy;break;case 70:Aw=AYz;break;case 71:Aw=
AYA;break;case 72:Aw=AYB;break;case 97:Aw=AYC;break;case 100:Aw=AYD;break;case 99:
Aw=AYE;break;case 88:Aw=AYF;break;case 89:Aw=AYG;break;case 90:Aw=AYH;break;case
73:Aw=AYI;break;case 74:Aw=AYJ;break;case 94:Aw=AYK;break;case 93:Aw=AYL;break;case
84:Aw=Aos;break;case 87:Aw=AIh;break;case 95:Aw=AYM;break;case 108:Aw=AIi;break;
case 109:Aw=AIj;break;case 102:Aw=AcQ;break;case 101:Aw=AIk;break;case 103:Aw=AYN;
break;case 105:Aw=AIl;break;case 110:Aw=AYO;break;case 111:Aw=Ayt;break;case 112:
Aw=AYP;break;case 113:Aw=AYQ;break;default:throw new Error(AH1+AdB.toFixed());}return Aw;
},_Init:function(aArg){C.EnumToString._Init.call(this,aArg);this.__proto__=C.PopupIdToString;
},_className:"Device::PopupIdToString"};C.PopupParamSeparator=";";C.RatingMode={
Basic:0,Extended:1,LAST:2};C.TransponderType={UNDEFINED:0,AnimalId:1,FarmId:2,GroupId:
3,PersonId:4,LAST:5};C.TransponderProtocol={UNDEFINED:0,FDX:1,HDX:2,HDX_URBAN:3,
LAST:4};C.TransponderTypeToString={BS:function(A7){var Bgz=A7;var type=A.jV;switch(
Bgz){case 1:type=Ayu;break;case 2:type=AYR;break;case 3:type=AYS;break;case 4:type=
AYT;break;case 0:type=Aye;break;default:throw new Error(AIm+Bgz.toFixed());}return type;
},_Init:function(aArg){C.EnumToString._Init.call(this,aArg);this.__proto__=C.TransponderTypeToString;
},_className:"Device::TransponderTypeToString"};C.TransponderProtocolToString={BS:
function(A7){var Bgx=A7;var AAT=A.jV;switch(Bgx){case 1:AAT=Aot;break;case 2:AAT=
AIn;break;case 3:AAT=AYU;break;case 0:AAT=Aye;break;default:throw new Error(AIo+
Bgx.toFixed());}return AAT;},_Init:function(aArg){C.EnumToString._Init.call(this
,aArg);this.__proto__=C.TransponderProtocolToString;},_className:"Device::TransponderProtocolToString"
};C.Transponder={Id:0,TransponderProtocol:0,TransponderType:0,ATI:function(E){if(
this.TransponderType===E)return;this.TransponderType=E;A.abo([this,this.Bls,this.
ATI],0);},ATH:function(E){if(this.TransponderProtocol===E)return;this.TransponderProtocol=
E;A.abo([this,this.Blr,this.ATH],0);},OnSetId:function(E){if(this.Id===E)return;
this.Id=E;A.abo([this,this.Q2,this.OnSetId],0);},AOQ:function(){return A._GetAutoObject(
C.Converter).BpY(this.Id);},BiS:function(){return A._GetAutoObject(C.Converter).
AxQ(this.Id);},Bls:function(){return this.TransponderType;},Blr:function(){return this.
TransponderProtocol;},Q2:function(){return this.Id;},_Init:function(aArg){this.__proto__=
C.Transponder;A.h7++;},_Done:function(){this.__proto__=null;A.h7--;},_ReInit:function(
){},_Mark:function(D){var B;if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:
null,_cycle:0,_observers:null,_className:"Device::Transponder"};C.RatingModeToString={
BS:function(A7){var Ve=A7;var Nu=A.jV;switch(Ve){case 0:Nu=A.aaR(A.acf.Basic);break;
case 1:Nu=A.aaR(A.acf.Extended);break;default:throw new Error(AIp+Ve.toFixed());
}return Nu;},_Init:function(aArg){C.EnumToString._Init.call(this,aArg);this.__proto__=
C.RatingModeToString;},_className:"Device::RatingModeToString"};C.TableRowsCount={
_Init:function(aArg){this.__proto__=C.TableRowsCount;A.h7++;},_Done:function(){this.
__proto__=null;A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((B=this.
I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:
"Device::TableRowsCount"};C.MassUnit={Kilogramm:0,Pound:1,LAST:2};C.MassUnitToString={
BS:function(A7){var BdZ=A7;var Ap6=A.jV;switch(BdZ){case 0:Ap6=A.aaR(A.acf.BjJ);
break;case 1:Ap6=A.aaR(A.acf.Pound);break;default:throw new Error(Alf+BdZ.toFixed(
));}return Ap6;},_Init:function(aArg){C.EnumToString._Init.call(this,aArg);this.
__proto__=C.MassUnitToString;},_className:"Device::MassUnitToString"};C.MinWeightGain=
20;C.MaxWeightGain=2000;C.WeightGainStep=10;C.Int32ArrayWrapper={ME:10,Array:A.abi(
10,0,null),Zv:function(E){if(this.ME===E)return;if(E>10)throw new Error(AYV);this.
ME=E;},Set:function(aIndex,AK){if((aIndex<0)||(aIndex>=this.ME))throw new Error(
Alg);this.Array.Set(aIndex,AK);},Get:function(aIndex){if((aIndex<0)||(aIndex>=this.
ME))throw new Error(Alg);return this.Array.Get(aIndex);},AmV:function(){var Qw=0;
var O;for(O=0;O<this.ME;O=O+1)Qw=Qw+this.Get(O);return Qw;},toString:function(){
var A2P=this.Array.Get(0).toFixed();var O;for(O=1;O<this.ME;O=O+1)A2P=(A2P+O5)+this.
Array.Get(O).toFixed();return A2P;},E4:function(aString){var Hz=aString.indexOf(
String.fromCharCode(0x2C),0);var A1B=A.jV;var O=0;while(O<10){if(aString===A.jV)
this.Array.Set(O,0);else{if(Hz===-1){A1B=aString;aString=A.jV;}else{A1B=A.abV(aString
,Hz);aString=A.ab1(aString,0,Hz+1);}this.Array.Set(O,A.wz(A1B,0,10));Hz=aString.
indexOf(String.fromCharCode(0x2C),0);}O=O+1;}if(aString!==A.jV)A.ab5("%s",AYW);}
,Ch:function(){},E6:function(){var O;for(O=0;O<this.ME;O=O+1)this.Set(O,0);},Avn:
function(A_){var O=0;while(O<this.ME){if(this.Array.Get(O)===A_)return O;O=O+1;}
return-1;},H3:function(){var O=0;var max=-1;while(O<this.ME){if(this.Array.Get(O
)>max)max=this.Array.Get(O);O=O+1;}return max;},_Init:function(aArg){(this.Array=[
]).__proto__=C.Int32ArrayWrapper.Array;this.__proto__=C.Int32ArrayWrapper;A.h7++;
},_Done:function(){this.__proto__=null;A.h7--;},_ReInit:function(){},_Mark:function(
D){var B;if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:
null,_className:"Device::Int32ArrayWrapper"};C.ActionToString={BS:function(A7){var
AzE=A7;var E9=A.jV;switch(AzE){case 4:E9=A.aaR(A.acf.Alarm);break;case 256:E9=A.
aaR(A.acf.Weighing);break;case 128:E9=A.aaR(A.acf.A6a);break;case 16:E9=A.aaR(A.
acf.AMi);break;case 1:E9=A.aaR(A.acf.Temperature);break;case 32:E9=A.aaR(A.acf.AnimalLoss
);break;case 2:E9=A.aaR(A.acf.Rating);break;case 8:E9=A.aaR(A.acf.Asb);break;case
64:E9=A.aaR(A.acf.Unregister);break;case 512:E9=A.aaR(A.acf.AR2);break;case 1024:
E9=A.aaR(A.acf.LinkTransponder);break;case 262144:E9=A.aaR(A.acf.UnlinkTransponder
);break;case 2048:E9=A.aaR(A.acf.Tu);break;case 4096:E9=A.aaR(A.acf.Calving);break;
case 8192:E9=A.aaR(A.acf.DryOff);break;case 16384:E9=A.aaR(A.acf.A7o);break;case
32768:E9=A.aaR(A.acf.AB9);break;case 524288:E9=A.aaR(A.acf.AB$);break;case 65536:
E9=A.aaR(A.acf.Delete);break;case 131072:E9=A.aaR(A.acf.A7p);break;case 0:E9=A.aaR(
A.acf.A7M);break;default:throw new Error(Ayv+AzE.toFixed());}return E9;},Lu:function(
A7){var AzE=A7;var E9=A.jV;switch(AzE){case 4:E9=A.aaR(A.acf.Alarm);break;case 256:
E9=A.aaR(A.acf.Weighing);break;case 128:E9=A.aaR(A.acf.A6a);break;case 16:E9=A.aaR(
A.acf.AMi);break;case 1:E9=A.aaR(A.acf.Temperature);break;case 32:E9=A.aaR(A.acf.
AnimalLoss);break;case 2:E9=A.aaR(A.acf.Rating);break;case 8:E9=A.aaR(A.acf.Asb);
break;case 64:E9=A.aaR(A.acf.Unregister);break;case 512:E9=A.aaR(A.acf.AR2);break;
case 1024:E9=A.aaR(A.acf.LinkTransponder);break;case 262144:E9=A.aaR(A.acf.UnlinkTransponder
);break;case 2048:E9=A.aaR(A.acf.Tu);break;case 4096:E9=A.aaR(A.acf.Calving);break;
case 8192:E9=A.aaR(A.acf.DryOff);break;case 32768:E9=A.aaR(A.acf.AB9);break;case
524288:E9=A.aaR(A.acf.AB$);break;case 65536:E9=A.aaR(A.acf.Delete);break;case 16384:
case 131072:E9=A.aaR(A.acf.BjQ);break;case 0:E9=A.aaR(A.acf.A7M);break;default:throw new
Error(Ayv+AzE.toFixed());}return E9;},_Init:function(aArg){C.EnumToString._Init.
call(this,aArg);this.__proto__=C.ActionToString;},_className:"Device::ActionToString"
};C.ACTIONS_COUNT=19;C.PopupTimeout=2000;C.ITable={Filter:null,Id:2,CF:function(
Ad,A4){return 0;},VY:function(Ad,A4){return A.jV;},Akl:function(G){A.we(this,0);
A.pe([this,this.DX],this);},H2:function(Ad,A4){return false;},Hu:function(Ad,A4){
return this.Sj(Ad,A4);},OnSetId:function(E){if(this.Id===E)return;this.Id=E;},B9:
function(){return 0;},Bk:function(E){if(this.Filter===E)return;this.Filter=E;A.abo([
this,this.Fo,this.Fs],0);},Fs:function(Aq){this.Bk(Aq);},I6:function(Ad,A4){var BBt=
this.VZ(Ad,A4);return A._GetAutoObject(C.Converter).A$D(BBt);},VZ:function(Ad,A4
){return 0;},Sj:function(Ad,A4){return 0;},A6M:function(Ad,A4){return this.CF(Ad
,A4);},Oy:function(){var Jo=0;var BCe=this.Id;return Jo;},OA:function(AoO){var HD=
0;var BCe=this.Id;return HD===1;},YB:function(){return-1;},ZH:function(Ad,A4,CZ){
return false;},Hn:function(Ad,A4,CZ){return false;},ZG:function(Ad,A4,CZ){return false;
},N5:function(Ad,A4,CZ){return false;},ZF:function(Ad,A4,CZ){return false;},Ack:
function(Ad,A4,CZ){return this.ZG(Ad,A4,CZ);},AkQ:function(Ad,A4,CZ){var BBu=A._GetAutoObject(
C.Converter).AdZ(CZ);return this.ZH(Ad,A4,BBu);},A$f:function(Ad,A4,CZ){return this.
Hn(Ad,A4,CZ);},AOK:function(Ad,A4){return this.CF(Ad,A4);},BiQ:function(Ad,A4){return this.
CF(Ad,A4);},BoP:function(Ad,A4,CZ){return this.Hn(Ad,A4,CZ);},BoL:function(Ad,A4
,CZ){return this.Hn(Ad,A4,CZ);},LS:function(aColumn,A_){return-1;},AmT:function(
Ad,A4){return this.CF(Ad,A4);},BoJ:function(Ad,A4,CZ){return this.Hn(Ad,A4,CZ);}
,AC1:function(Ad,A4){return this.CF(Ad,A4);},AUy:function(Ad,A4,MM){return this.
Hn(Ad,A4,MM);},DX:function(G){this.Byw();},Byw:function(){return-1;},KN:function(
Ad,A4){return 0;},Uy:function(Ad,A4,CZ){return false;},AgV:function(aColumn,A_){
return-1;},E6:function(){return false;},BiR:function(Ad,A4){var BBv=this.CF(Ad,A4
);return A._GetAutoObject(C.Converter).Bjh(BBv);},BiW:function(Ad,A4){return this.
CF(Ad,A4);},AOS:function(Ad,A4){return this.CF(Ad,A4);},BoN:function(Ad,A4,CZ){var
BBw=A._GetAutoObject(C.Converter).A5o(CZ);return this.Hn(Ad,A4,BBw);},BoO:function(
Ad,A4,CZ){return this.Hn(Ad,A4,CZ);},BoV:function(Ad,A4,CZ){return this.Hn(Ad,A4
,CZ);},AjI:function(aColumn,A_){return false;},Aej:function(aColumn,A_){return false;
},Bi5:function(Ad,A4){return this.CF(Ad,A4);},BoT:function(Ad,A4,CZ){return this.
Hn(Ad,A4,CZ);},Lg:function(){return this.QI()>=this.HI();},HI:function(){return 0;
},Abp:function(){return-1;},QI:function(){return 0;},Fo:function(){return this.Filter;
},_Init:function(aArg){this.__proto__=C.ITable;A.h7++;},_Done:function(){this.__proto__=
null;A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((B=this.Filter)&&(
B._cycle!=D))B._Mark(B._cycle=D);if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D
);},I:null,_cycle:0,_observers:null,_className:"Device::ITable"};C.MaxAutoActionsCount=
4;C.WeightRecordingMode={Automatic:0,Manual:1,LAST:2};C.WeightRecordingModeToString={
BS:function(A7){var Ve=A7;var Nu=A.jV;switch(Ve){case 0:Nu=A.aaR(A.acf.Automatic
);break;case 1:Nu=A.aaR(A.acf.Manual);break;default:throw new Error(AIq+Ve.toFixed(
));}return Nu;},_Init:function(aArg){C.EnumToString._Init.call(this,aArg);this.__proto__=
C.WeightRecordingModeToString;},_className:"Device::WeightRecordingModeToString"
};C.BooleanToAutoOnOff={BS:function(A7){switch(A7){case 0:return A.aaR(A.acf.Off
);case 1:return A.aaR(A.acf.Aa1);default:return Ayn+A7.toFixed();}},_Init:function(
aArg){C.EnumToString._Init.call(this,aArg);this.__proto__=C.BooleanToAutoOnOff;}
,_className:"Device::BooleanToAutoOnOff"};C.WeightStep=100;C.WeightRecordingScope={
CurrentWeightOnly:0,BirthWeightOnly:1,BirthAndCurrentWeight:2,NoWeightRecording:
3,LAST:4};C.WeightRecordingScopeToString={BS:function(A7){var Bf0=A7;var AA8=A.jV;
switch(Bf0){case 0:AA8=A.aaR(A.acf.BhM);break;case 1:AA8=A.aaR(A.acf.Bho);break;
case 2:AA8=A.aaR(A.acf.Bhk);break;case 3:AA8=A.aaR(A.acf.Bkg);break;default:throw new
Error(AYX+Bf0.toFixed());}return AA8;},_Init:function(aArg){C.EnumToString._Init.
call(this,aArg);this.__proto__=C.WeightRecordingScopeToString;},_className:"Device::WeightRecordingScopeToString"
};C.BodyTemperature={Undertemperature:0,Normal:1,Elevated:2,Fever:3,LAST:4};C.Kj={
A4X:0,Temperature:1,Rating:2,Aft:3,BCT:4,BDy:5,BGi:6,BEc:7,BEY:8,BDM:9,BEW:10,BFn:
11,BFo:12,BGn:13,BC4:14,LAST:15};C.AnimalListContentToString={BS:function(A7){var
Bco=A7;var Rv=A.jV;switch(Bco){case 0:Rv=AYY;break;case 14:Rv=AIr;break;case 2:Rv=
AYZ;break;case 1:Rv=AY0;break;case 3:Rv=AY1;break;case 4:Rv=AY2;break;case 5:Rv=
AY3;break;case 6:Rv=AY4;break;case 7:Rv=AY5;break;case 8:Rv=AY6;break;case 9:Rv=
AY7;break;case 10:Rv=AY8;break;case 11:Rv=AY9;break;case 12:Rv=AY_;break;case 13:
Rv=AY$;break;default:throw new Error(AZa+Bco.toFixed());}return Rv;},_Init:function(
aArg){C.EnumToString._Init.call(this,aArg);this.__proto__=C.AnimalListContentToString;
},_className:"Device::AnimalListContentToString"};C.GenderFilterCriterion={A5:0,
Abh:function(){var Av=A._NewObject(C.GenderFilterCriterion,0);Av.E$(this);return Av;
},E$:function(AI){C.FilterCriterion.E$.call(this,AI);var Av=(C.GenderFilterCriterion.
isPrototypeOf(AI)?AI:null);if(!!Av)this.A5=Av.A5;},_Init:function(aArg){C.FilterCriterion.
_Init.call(this,aArg);this.__proto__=C.GenderFilterCriterion;},_className:"Device::GenderFilterCriterion"
};C.AnimalTypeFilterCriterion={A5:0,Abh:function(){var Av=A._NewObject(C.AnimalTypeFilterCriterion
,0);Av.E$(this);return Av;},E$:function(AI){C.FilterCriterion.E$.call(this,AI);var
Av=(C.AnimalTypeFilterCriterion.isPrototypeOf(AI)?AI:null);if(!!Av)this.A5=Av.A5;
},Initialize:function(A4,Eb,A_,Qd){this.EJ=A4;this.Operator=Eb;this.A5=A_;this.YE=
Qd;return this;},_Init:function(aArg){C.FilterCriterion._Init.call(this,aArg);this.
__proto__=C.AnimalTypeFilterCriterion;},_className:"Device::AnimalTypeFilterCriterion"
};C.BC6={Aux:0,BC5:1,BEI:2,A_Y:3,A5w:4,BF0:5,BDx:6,BFZ:7,LinkTransponder:8,Tu:9,
Weighing:10,Calving:11,LinkNaisId:12,BFm:13,ClearBirthNoticePending:14,DeleteAnimal:
15,ScanNaisId:16,Edit:17,ClearPurchaseNoticePending:18};C.AutoRegistrationModeToString={
BS:function(A7){var Ve=A7;var Nu=A.jV;switch(Ve){case 0:Nu=A.aaR(A.acf.BhE);break;
case 1:Nu=A.aaR(A.acf.Bjl);break;case 2:Nu=A.aaR(A.acf.Off);break;default:throw new
Error(AIs+Ve.toFixed());}return Nu;},_Init:function(aArg){C.EnumToString._Init.call(
this,aArg);this.__proto__=C.AutoRegistrationModeToString;},_className:"Device::AutoRegistrationModeToString"
};C.AutoRegistrationMode={UserConfirmed:0,Background:1,Off:2,LAST:3};C.AssessmentFilterCriterion={
A5:0,Abh:function(){var Av=A._NewObject(C.AssessmentFilterCriterion,0);Av.E$(this
);return Av;},E$:function(AI){C.FilterCriterion.E$.call(this,AI);var Av=(C.AssessmentFilterCriterion.
isPrototypeOf(AI)?AI:null);if(!!Av)this.A5=Av.A5;},Initialize:function(A4,Eb,A_,
Qd){this.EJ=A4;this.Operator=Eb;this.A5=A_;this.YE=Qd;return this;},_Init:function(
aArg){C.FilterCriterion._Init.call(this,aArg);this.__proto__=C.AssessmentFilterCriterion;
},_className:"Device::AssessmentFilterCriterion"};C.D9={AdS:0,Temperature:1,Aft:
2,Rating:3,LAST:4};C.FactoryResetScope={DeviceAndAnimalData:0,AnimalDataOnly:1,LAST:
2};C.FactoryResetScopeToString={BS:function(A7){switch(A7){case 0:return A.aaR(A.
acf.DeviceAndAnimalData);case 1:return A.aaR(A.acf.AnimalDataOnly);default:return Aae+
A7.toFixed();}},_Init:function(aArg){C.EnumToString._Init.call(this,aArg);this.__proto__=
C.FactoryResetScopeToString;},_className:"Device::FactoryResetScopeToString"};C.
AU9={Ch:function(){A._GetAutoObject(C.Device).Ar6(this.toString());},Init:function(
aArg){var B;A.zX([this,this.Be7],[B=A._GetAutoObject(C.Device),B.A85,B.Bbg],0);this.
Be7(this);},Be7:function(G){this.E4(A._GetAutoObject(C.Device).AGU);A.we(this,0);
},_Init:function(aArg){C.Int32ArrayWrapper._Init.call(this,aArg);this.__proto__=
C.AU9;this.Zv(3);this.Init(aArg);},_className:"Device::TemperaturesLowClass"};C.
AU8={Init:function(aArg){var B;A.zX([this,this.Be5],[B=A._GetAutoObject(C.Device
),B.A84,B.Bbf],0);this.Be5(this);},Ch:function(){A._GetAutoObject(C.Device).Ar5(
this.toString());},Be5:function(G){this.E4(A._GetAutoObject(C.Device).AGT);A.we(
this,0);},_Init:function(aArg){C.Int32ArrayWrapper._Init.call(this,aArg);this.__proto__=
C.AU8;this.Zv(3);this.Init(aArg);},_className:"Device::TemperaturesHighClass"};C.
AMB={Init:function(aArg){var B;A.zX([this,this.Bey],[B=A._GetAutoObject(C.Device
),B.A8i,B.BaV],0);this.Bey(this);},Bey:function(G){this.E4(A._GetAutoObject(C.Device
).ABJ);A.we(this,0);},_Init:function(aArg){C.Int32ArrayWrapper._Init.call(this,aArg
);this.__proto__=C.AMB;this.Zv(3);this.Init(aArg);},_className:"Device::AnimalTypesClass"
};C.UInt64FilterCriterion={A5:0,Abh:function(){var Av=A._NewObject(C.UInt64FilterCriterion
,0);Av.E$(this);return Av;},E$:function(AI){C.FilterCriterion.E$.call(this,AI);var
Av=(C.UInt64FilterCriterion.isPrototypeOf(AI)?AI:null);if(!!Av)this.A5=Av.A5;},Initialize:
function(A4,Eb,A_,Qd){this.EJ=A4;this.Operator=Eb;this.A5=A_;this.YE=Qd;return this;
},_Init:function(aArg){C.FilterCriterion._Init.call(this,aArg);this.__proto__=C.
UInt64FilterCriterion;},_className:"Device::UInt64FilterCriterion"};C.BooleanToAssignedUnassignedString={
BS:function(A7){switch(A7){case 0:return A.aaR(A.acf.Akk);case 1:return A.aaR(A.
acf.Bg3);default:return Ayn+A7.toFixed();}},_Init:function(aArg){C.EnumToString.
_Init.call(this,aArg);this.__proto__=C.BooleanToAssignedUnassignedString;},_className:
"Device::BooleanToAssignedUnassignedString"};C.C6={UNDEFINED:0,AT:1,BA:2,BE:3,BC$:
4,BDo:5,BDp:6,BDq:7,BDr:8,BDs:9,BDC:10,BDD:11,BDN:12,BDO:13,BD3:14,FR:15,GR:16,BEd:
17,BEe:18,BEl:19,BEm:20,BEr:21,BEs:22,BEt:23,BEu:24,BEA:25,BEO:26,BEP:27,BE4:28,
BE5:29,BFk:30,BFl:31,BFD:32,BFE:33,BFF:34,BFT:35,BFU:36,BGb:37,A$E:38,BGc:39,LAST:
40};C.CountryToString={BS:function(A7){var J7=A7;var FH=A.jV;switch(J7){case 1:FH=
A.aaR(A.acm.Bhc);break;case 2:FH=A.aaR(A.acm.Bhp);break;case 3:FH=A.aaR(A.acm.Bhj
);break;case 4:FH=A.aaR(A.acm.Bhr);break;case 5:FH=A.aaR(A.acm.Bhu);break;case 6:
FH=A.aaR(A.acm.BpE);break;case 7:FH=A.aaR(A.acm.Bhx);break;case 8:FH=A.aaR(A.acm.
BhN);break;case 9:FH=A.aaR(A.acm.BhO);break;case 10:FH=A.aaR(A.acm.BiL);break;case
11:FH=A.aaR(A.acm.BhT);break;case 12:FH=A.aaR(A.acm.Biq);break;case 13:FH=A.aaR(
A.acm.Bo7);break;case 14:FH=A.aaR(A.acm.Biz);break;case 15:FH=A.aaR(A.acm.BiH);break;
case 16:FH=A.aaR(A.acm.Bjb);break;case 17:FH=A.aaR(A.acm.BhL);break;case 18:FH=A.
aaR(A.acm.Bji);break;case 19:FH=A.aaR(A.acm.Bjr);break;case 20:FH=A.aaR(A.acm.BjE
);break;case 21:FH=A.aaR(A.acm.BjG);break;case 22:FH=A.aaR(A.acm.BjR);break;case
23:FH=A.aaR(A.acm.BjU);break;case 24:FH=A.aaR(A.acm.BjO);break;case 25:FH=A.aaR(
A.acm.BjW);break;case 26:FH=A.aaR(A.acm.Bka);break;case 27:FH=A.aaR(A.acm.Bkh);break;
case 28:FH=A.aaR(A.acm.Bn1);break;case 29:FH=A.aaR(A.acm.Bn2);break;case 30:FH=A.
aaR(A.acm.Bou);break;case 31:FH=A.aaR(A.acm.Bow);break;case 32:FH=A.aaR(A.acm.BpD
);break;case 33:FH=A.aaR(A.acm.Bo6);break;case 34:FH=A.aaR(A.acm.Bo5);break;case
35:FH=A.aaR(A.acm.Bp5);break;case 36:FH=A.aaR(A.acm.BpN);break;case 37:FH=A.aaR(
A.acm.Bp9);break;case 38:FH=A.aaR(A.acm.A$E);break;case 39:FH=A.aaR(A.acm.Bp8);break;
case 0:FH=Aou;break;default:throw new Error(Aoi+J7.toFixed());}return FH;},Lu:function(
A7){var J7=A7;var BM=A.jV;switch(J7){case 1:BM=S8;break;case 2:BM=Z1;break;case 3:
BM=UQ;break;case 4:BM=W1;break;case 5:BM=It;break;case 6:BM=Z$;break;case 7:BM=UR;
break;case 8:BM=Z3;break;case 9:BM=W3;break;case 10:BM=O3;break;case 11:BM=Z4;break;
case 12:BM=Z5;break;case 13:BM=Z_;break;case 14:BM=US;break;case 15:BM=W4;break;
case 16:BM=Z6;break;case 17:BM=W2;break;case 18:BM=O4;break;case 19:BM=Rl;break;
case 20:BM=W5;break;case 21:BM=W6;break;case 22:BM=Z7;break;case 23:BM=Z8;break;
case 24:BM=UT;break;case 25:BM=W7;break;case 26:BM=W8;break;case 27:BM=S9;break;
case 28:BM=UU;break;case 29:BM=UV;break;case 30:BM=AcK;break;case 31:BM=S_;break;
case 32:BM=W9;break;case 33:BM=Afz;break;case 34:BM=Z9;break;case 35:BM=W_;break;
case 36:BM=Z2;break;case 37:BM=AhT;break;case 38:BM=KY;break;case 39:BM=AcL;break;
case 0:BM=Aou;break;default:throw new Error(Aoi+J7.toFixed());}return BM;},_Init:
function(aArg){C.EnumToString._Init.call(this,aArg);this.__proto__=C.CountryToString;
},_className:"Device::CountryToString"};C.EaseOfDelivery={Unspecified:0,Easy:1,Moderate:
2,Difficult:3,Surgery:4,LAST:5};C.EaseOfDeliveryToString={BS:function(A7){var BcY=
A7;var AtH=A.jV;switch(BcY){case 0:AtH=A.aaR(A.acf.Unspecified);break;case 1:AtH=
A.aaR(A.acf.Easy);break;case 2:AtH=A.aaR(A.acf.Moderate);break;case 3:AtH=A.aaR(
A.acf.Difficult);break;case 4:AtH=A.aaR(A.acf.Surgery);break;default:throw new Error(
Ayw+BcY.toFixed());}return AtH;},_Init:function(aArg){C.EnumToString._Init.call(
this,aArg);this.__proto__=C.EaseOfDeliveryToString;},_className:"Device::EaseOfDeliveryToString"
};C.WhereAbouts={UNB:0,EZU:1,EMA:2,VZU:3,VMA:4,VIV:5,TOT:6,V48:7,V3T:8,MGE:9,VKB:
10,LAST:11};C.WhereAboutsToString={BS:function(A7){var BgR=A7;var AaP=A.jV;switch(
BgR){case 0:AaP=A.aaR(A.acf.Unknown);break;case 1:AaP=A.aaR(A.acf.Bqg);break;case
2:AaP=A.aaR(A.acf.Bqf);break;case 3:AaP=A.aaR(A.acf.Bqo);break;case 4:AaP=A.aaR(
A.acf.Bqn);break;case 5:AaP=A.aaR(A.acf.Bql);break;case 6:AaP=A.aaR(A.acf.Bqi);break;
case 7:AaP=A.aaR(A.acf.Bqk);break;case 8:AaP=A.aaR(A.acf.Bqj);break;case 9:AaP=A.
aaR(A.acf.Bqh);break;case 10:AaP=A.aaR(A.acf.Bqm);break;default:throw new Error(
AZb+BgR.toFixed());}return AaP;},_Init:function(aArg){C.EnumToString._Init.call(
this,aArg);this.__proto__=C.WhereAboutsToString;},_className:"Device::WhereAboutsToString"
};C.Breed={UNKNOWN:0,SBT:1,RBT:2,JER:3,BV:4,RVA:5,RV:6,RDN:7,DSN:8,FL:9,GV:10,PIN:
11,HIN:12,MW:13,VW:14,LMP:15,DBV:16,AS:17,VR:18,CHA:19,LIM:20,WBB:21,BA:22,MA:23
,SAL:24,MON:25,AU:26,PIE:27,CHI:28,ROM:29,MAR:30,WP:31,BB:32,DA:33,AA:34,HE:35,SH:
36,HLD:37,WB:38,GAL:39,LR:40,BGA:41,LG:42,BRA:43,NOR:44,UST:45,ZEB:46,GRV:47,DEX:
48,WGA:49,LH:50,SD:51,FR:52,TUX:53,TLM:54,FLF:55,UCK:56,BLA:57,WIT:58,LAK:59,RHV:
60,AT:61,GR:62,PIF:63,PS:64,GVF:65,BVF:66,RBF:67,HWF:68,MWF:69,VWF:70,LPF:71,BRN:
72,BAZ:73,AO:74,BE:75,WL:76,BIS:77,YAK:78,SON:79,TAU:80,IND:81,TIN:82,WAG:83,XFF:
84,XFM:85,XMM:86,EVO:87,BLH:88,TLH:89,MGR:90,WSH:91,MUR:92,EBS:93,ERI:94,PAR:95,
XZF:96,XZM:97,XZZ:98,LAST:99};C.BreedToString={BS:function(A7){var Bv=A7;var BH=
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
Error(AZc+Bv.toFixed());}return BH;},_Init:function(aArg){C.EnumToString._Init.call(
this,aArg);this.__proto__=C.BreedToString;},_className:"Device::BreedToString"};
C.TF={timer:null,Q:null,Ec:0,Dx:0,JQ:0,Pr:1000,PA:1000,Bw:false,Cx:false,B2:true
,Me:function(G){var F;if(!this.timer)return;if(this.Ec<0){this.Dx=this.timer.Bs;
this.Ec=0;}var Au=(this.timer.Bs-this.Dx)|0;var Op=this.Pr;var Hf=this.PA+this.Pr;
var LD=0;var Jl=this.Ec;if(!Jl&&(Au>=Op)){Jl=1;Au=Au-Op;}if((Jl>0)&&(Au>=Hf)){var
Ie=(Au/Hf)|0;Au=Au-(Ie*Hf);Jl=Jl+Ie;}if((Jl>2)&&!this.JQ)Jl=1;if(Jl!==this.Ec){this.
Dx=this.timer.Bs-(((B=Au)<0)?B+0x100000000:B);this.Ec=Jl;}if(Jl>0)LD=this.PA;var
KD=(Jl>=this.JQ)&&(this.JQ>0);if(!!this.Q){if((!KD&&(Au>=LD))&&((F=this.Q,F[1].call(
F[0]))!==this.Cx))(F=this.Q,F[2].call(F[0],this.Cx));if((KD||((Au<LD)&&(Jl>0)))&&((
F=this.Q,F[1].call(F[0]))!==this.B2))(F=this.Q,F[2].call(F[0],this.B2));}if(KD)this.
Ar(false);},HM:function(E){if(E<0)E=0;this.JQ=E;},Fq:function(E){if(E<100)E=100;
this.Pr=E;},Um:function(E){if(E<0)E=0;this.PA=E;},Ar:function(E){if(this.Bw===E)
return;this.Bw=E;if(!E&&!!this.timer){A.z9([this,this.Me],this.timer,0);this.timer=
null;}if(E){this.timer=A._GetAutoObject(A.acl.Aeg);A.zV([this,this.Me],this.timer
,0);this.Ec=-1;}},_Init:function(aArg){this.__proto__=C.TF;A.h7++;},_Done:function(
){this.__proto__=null;A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((
B=this.timer)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Q)&&((B=B[0])._cycle
!=D))B._Mark(B._cycle=D);if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null
,_cycle:0,_observers:null,_className:"Device::BoolEffect"};C.Ij={AnimalId:0,TransponderId:
1,BED:2,BEC:3,BEG:4,BEF:5};C.AuZ={BC9:0,BDG:1};C.AnimalIdGenerationMethodToString={
BS:function(A7){var Alr=A7;var AoX=A.jV;switch(Alr){case 0:AoX=A.aaR(A.acf.Uf);break;
case 1:AoX=A.aaR(A.acf.Transponder);break;case 3:AoX=(A.aaR(A.acf.Manual)+Oa)+A.
aaR(A.acf.Male);break;case 2:AoX=(A.aaR(A.acf.Manual)+Oa)+A.aaR(A.acf.Female);break;
case 4:AoX=(A.aaR(A.acf.Manual)+Oa)+A.aaR(A.acf.Unknown);break;case 5:AoX=(A.aaR(
A.acf.Manual)+Oa)+AZd;break;default:throw new Error(AZe+Alr.toFixed());}return AoX;
},_Init:function(aArg){C.EnumToString._Init.call(this,aArg);this.__proto__=C.AnimalIdGenerationMethodToString;
},_className:"Device::AnimalIdGenerationMethodToString"};C.DirectionOfCountingToString={
BS:function(A7){var AzD=A7;var A1I=A.jV;switch(AzD){case 0:A1I=AZf;break;case 1:
A1I=AZg;break;default:throw new Error(Ata+AzD.toFixed());}return A1I;},_Init:function(
aArg){C.EnumToString._Init.call(this,aArg);this.__proto__=C.DirectionOfCountingToString;
},_className:"Device::DirectionOfCountingToString"};C.EnumToIcon={AsI:function(A7
){throw new Error(Aon+A7.toFixed());},AsJ:function(A7){throw new Error(Aon+A7.toFixed(
));},_Init:function(aArg){this.__proto__=C.EnumToIcon;A.h7++;},_Done:function(){
this.__proto__=null;A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((B=
this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:
"Device::EnumToIcon"};C.Aef={AsI:function(A7){return A.aaL(A.ach.AUW);},AsJ:function(
A7){var AzD=A7;var RE=-1;switch(AzD){case 0:RE=3;break;case 1:RE=2;break;default:
throw new Error(Aov+AzD.toFixed());}return RE;},_Init:function(aArg){C.EnumToIcon.
_Init.call(this,aArg);this.__proto__=C.Aef;},_className:"Device::DirectionOfCountingToIcon"
};C.AdW={AsI:function(A7){return A.aaL(A.ach.AUU);},AsJ:function(A7){var Alr=A7;
var RE=-1;switch(Alr){case 0:RE=0;break;case 1:RE=6;break;case 3:RE=4;break;case
2:RE=5;break;case 4:RE=2;break;case 5:RE=3;break;default:throw new Error(Aov+Alr.
toFixed());}return RE;},_Init:function(aArg){C.EnumToIcon._Init.call(this,aArg);
this.__proto__=C.AdW;},_className:"Device::AnimalIdGenerationMethodToIcon"};C.Pw={
UNDEFINED:0,SH:1,AOV:2,ARM:3,AOU:4,A7H:5,HE:6,A_W:7,A5c:8,AMM:9,AUo:10,BE:11,BB:
12,A7u:13,AUp:14,AUq:15,AU1:16};C.GermanStateToString={BS:function(A7){var Bp=A7;
var GF=A.jV;switch(Bp){case 1:GF=A.aaR(A.acp.SH);break;case 2:GF=A.aaR(A.acp.AOV
);break;case 3:GF=A.aaR(A.acp.ARM);break;case 4:GF=A.aaR(A.acp.AOU);break;case 5:
GF=A.aaR(A.acp.A7H);break;case 6:GF=A.aaR(A.acp.HE);break;case 7:GF=A.aaR(A.acp.
A_W);break;case 8:GF=A.aaR(A.acp.A5c);break;case 9:GF=A.aaR(A.acp.AMM);break;case
10:GF=A.aaR(A.acp.AUo);break;case 11:GF=A.aaR(A.acp.BE);break;case 12:GF=A.aaR(A.
acp.BB);break;case 13:GF=A.aaR(A.acp.A7u);break;case 14:GF=A.aaR(A.acp.AUp);break;
case 15:GF=A.aaR(A.acp.AUq);break;case 16:GF=A.aaR(A.acp.AU1);break;case 0:GF=Aou;
break;default:throw new Error(Ah1+Bp.toFixed());}return GF;},Lu:function(A7){var
Bp=A7;var GF=A.jV;switch(Bp){case 1:GF=A.aaR(A.acp.Box);break;case 2:GF=A.aaR(A.
acp.AOV);break;case 3:GF=A.aaR(A.acp.ARM);break;case 4:GF=A.aaR(A.acp.AOU);break;
case 5:GF=A.aaR(A.acp.Bj9);break;case 6:GF=A.aaR(A.acp.HE);break;case 7:GF=A.aaR(
A.acp.Boa);break;case 8:GF=A.aaR(A.acp.Bhf);break;case 9:GF=A.aaR(A.acp.AMM);break;
case 10:GF=A.aaR(A.acp.AUo);break;case 11:GF=A.aaR(A.acp.BE);break;case 12:GF=A.
aaR(A.acp.BB);break;case 13:GF=A.aaR(A.acp.BjV);break;case 14:GF=A.aaR(A.acp.AUp
);break;case 15:GF=A.aaR(A.acp.AUq);break;case 16:GF=A.aaR(A.acp.AU1);break;case
0:GF=Aou;break;default:throw new Error(Ah1+Bp.toFixed());}return GF;},BpS:function(
A7){var Bp=A7;var Gh=-1;switch(Bp){case 0:Gh=0;break;case 1:Gh=1;break;case 2:Gh=
2;break;case 3:Gh=3;break;case 4:Gh=4;break;case 5:Gh=5;break;case 6:Gh=6;break;
case 7:Gh=7;break;case 8:Gh=8;break;case 9:Gh=9;break;case 10:Gh=10;break;case 11:
Gh=11;break;case 12:Gh=12;break;case 13:Gh=13;break;case 14:Gh=14;break;case 15:
Gh=15;break;case 16:Gh=16;break;default:throw new Error(Ah1+Bp.toFixed());}return Gh;
},BpT:function(A7){var Bp=A7;var Gh=A.jV;switch(Bp){case 1:Gh=Atb;break;case 2:Gh=
Ayx;break;case 3:Gh=Aow;break;case 4:Gh=AZh;break;case 5:Gh=AZi;break;case 6:Gh=
AZj;break;case 7:Gh=AZk;break;case 8:Gh=AZl;break;case 9:Gh=AZm;break;case 10:Gh=
AZn;break;case 11:Gh=UQ;break;case 12:Gh=AZo;break;case 13:Gh=AZp;break;case 14:
Gh=AZq;break;case 15:Gh=AZr;break;case 16:Gh=AZs;break;case 0:Gh=Aou;break;default:
throw new Error(Ah1+Bp.toFixed());}return Gh;},_Init:function(aArg){C.EnumToString.
_Init.call(this,aArg);this.__proto__=C.GermanStateToString;},_className:"Device::GermanStateToString"
};C.EartagNrAssignmentMode={OneSingleRange:0,TwoNumberRanges:1,LAST:2};C.EartagNrAssignmentModeToString={
Lu:function(A7){var Ve=A7;var Nu=A.jV;switch(Ve){case 0:Nu=AZt;break;case 1:Nu=AZu;
break;default:throw new Error(AIt+Ve.toFixed());}return Nu;},BS:function(A7){var
Ve=A7;var Nu=A.jV;switch(Ve){case 0:Nu=A.aaR(A.acf.BnU);break;case 1:Nu=A.aaR(A.
acf.Bp7);break;default:throw new Error(AIt+Ve.toFixed());}return Nu;},_Init:function(
aArg){C.EnumToString._Init.call(this,aArg);this.__proto__=C.EartagNrAssignmentModeToString;
},_className:"Device::EartagNrAssignmentModeToString"};C.BC2={BEU:0,BEK:1,BDX:2,
BDY:3,BDZ:4,BFV:5};C.EnumToCodeset={AmD:function(Ah4){throw new Error(Ayy+Ah4.toFixed(
));},Aei:function(A7){throw new Error(Aon+A7.toFixed());},AqS:function(){A.ab5("%s"
,AIu);return 0;},H3:function(){A.ab5("%s",AIu);return 0;},_Init:function(aArg){this.
__proto__=C.EnumToCodeset;A.h7++;},_Done:function(){this.__proto__=null;A.h7--;}
,_ReInit:function(){},_Mark:function(D){var B;if((B=this.I)&&(B._cycle!=D))B._Mark(
B._cycle=D);},I:null,_cycle:0,_observers:null,_className:"Device::EnumToCodeset"
};C.M1={AmD:function(Ah4){var Bv;switch(Ah4){case 1:Bv=1;break;case 2:Bv=2;break;
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
Bv=0;}return Bv;},Aei:function(A7){var Bv=A7;var BJ=0;switch(Bv){case 0:BJ=0;break;
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
case 98:BJ=111;break;default:throw new Error(Ayz+Bv.toFixed());}return BJ;},AqS:
function(){return 0;},H3:function(){return 111;},_Init:function(aArg){C.EnumToCodeset.
_Init.call(this,aArg);this.__proto__=C.M1;},_className:"Device::BreedToHitCodeset"
};C.ReasonOfLeaving={Unknown:0,A$q:1,RN:2,A_Q:3,A68:4,BE3:5,A$F:6,A7D:7,A5v:8,A_M:
9,A7B:10,A5z:11,BFh:12,BFi:13,LAST:14};C.ReasonOfLeavingToString={BS:function(A7
){var AdC=A7;var To=A.jV;switch(AdC){case 0:To=A.aaR(A.acf.Unknown);break;case 1:
To=A.aaR(A.acf.A$q);break;case 2:To=A.aaR(A.acf.RN);break;case 3:To=A.aaR(A.acf.
A_Q);break;case 4:To=A.aaR(A.acf.A68);break;case 5:To=A.aaR(A.acf.BnV);break;case
6:To=A.aaR(A.acf.A$F);break;case 7:To=A.aaR(A.acf.A7D);break;case 8:To=A.aaR(A.acf.
A5v);break;case 9:To=A.aaR(A.acf.A_M);break;case 10:To=A.aaR(A.acf.A7B);break;case
11:To=A.aaR(A.acf.A5z);break;case 12:To=A.aaR(A.acf.Bn6);break;case 13:To=A.aaR(
A.acf.Bn5);break;default:throw new Error(AyA+AdC.toFixed());}return To;},_Init:function(
aArg){C.EnumToString._Init.call(this,aArg);this.__proto__=C.ReasonOfLeavingToString;
},_className:"Device::ReasonOfLeavingToString"};C.Ahy={AmD:function(Ah4){var Pf;
switch(Ah4){case 1:Pf=1;break;case 2:Pf=2;break;case 3:Pf=3;break;case 4:Pf=4;break;
case 5:Pf=5;break;case 6:Pf=6;break;case 7:Pf=7;break;case 8:Pf=8;break;case 9:Pf=
9;break;case 10:Pf=10;break;case 11:Pf=11;break;case 12:Pf=12;break;case 13:Pf=13;
break;default:Pf=0;}return Pf;},Aei:function(A7){var Pf=A7;var Jk=0;switch(Pf){case
0:Jk=0;break;case 2:Jk=2;break;case 8:Jk=8;break;case 11:Jk=11;break;case 4:Jk=4;
break;case 10:Jk=10;break;case 7:Jk=7;break;case 5:Jk=5;break;case 9:Jk=9;break;
case 3:Jk=3;break;case 12:Jk=12;break;case 13:Jk=13;break;case 1:Jk=1;break;case
6:Jk=6;break;default:throw new Error(AIv+Pf.toFixed());}return Jk;},AqS:function(
){return 0;},H3:function(){return 13;},_Init:function(aArg){C.EnumToCodeset._Init.
call(this,aArg);this.__proto__=C.Ahy;},_className:"Device::ReasonOfLeavingToCodeset"
};C.KX={AmD:function(Ah4){var K9;switch(Ah4){case 1:K9=1;break;case 2:K9=2;break;
case 3:K9=3;break;case 4:K9=4;break;case 5:K9=5;break;case 6:K9=6;break;case 7:K9=
7;break;case 8:K9=8;break;case 9:K9=9;break;case 10:K9=10;break;default:K9=0;}return K9;
},Aei:function(A7){var K9=A7;var Jk=0;switch(K9){case 0:Jk=0;break;case 2:Jk=2;break;
case 1:Jk=1;break;case 9:Jk=9;break;case 6:Jk=6;break;case 8:Jk=8;break;case 7:Jk=
7;break;case 5:Jk=5;break;case 10:Jk=10;break;case 4:Jk=4;break;case 3:Jk=3;break;
default:throw new Error(AIv+K9.toFixed());}return Jk;},AqS:function(){return 0;}
,H3:function(){return 10;},_Init:function(aArg){C.EnumToCodeset._Init.call(this,
aArg);this.__proto__=C.KX;},_className:"Device::WhereAboutsToCodeset"};C.AmL={_Init:
function(aArg){this.__proto__=C.AmL;A.h7++;},_Done:function(){this.__proto__=null;
A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((B=this.I)&&(B._cycle!=
D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:"Device::EmptyClass"
};C.CalfDeregistrationsTableFields={Year:0,Deregistrations:1,Deaths:2};C.CalfDeregistrations={
Deregistrations:0,Deaths:0,Year:0,E4:function(Ad,AH){var HD=C.Row.E4.call(this,Ad
,AH);if(HD&&!!AH){this.AkE(AH.CF(Ad,0));this.Awz(AH.CF(Ad,1));this.Awy(AH.CF(Ad,
2));}return HD;},Ch:function(AH){var HD=C.Row.Ch.call(this,AH);if(HD&&!!AH){var Jo=
AH.Oy();if(Jo<=0)A.ab5("%s",Xa);else{if(this.Am4())this.CL=AH.YB();AH.Hn(this.CL
,0,this.Year);AH.Hn(this.CL,1,this.Deregistrations);AH.Hn(this.CL,2,this.Deaths);
AH.OA(Jo);}}return HD;},Gq:function(){C.Row.Gq.call(this);this.AkE(-1);},E6:function(
){C.Row.E6.call(this);this.AkE(0);this.Awz(0);this.Awy(0);},Awz:function(E){if(this.
Deregistrations===E)return;this.Deregistrations=E;A.abo([this,this.BkJ,this.Awz]
,0);},Awy:function(E){if(this.Deaths===E)return;this.Deaths=E;A.abo([this,this.BkH
,this.Awy],0);},AkE:function(E){if(this.Year===E)return;this.Year=E;A.abo([this,
this.ArA,this.AkE],0);},BkJ:function(){return this.Deregistrations;},BkH:function(
){return this.Deaths;},ArA:function(){return this.Year;},_Init:function(aArg){C.
Row._Init.call(this,aArg);this.__proto__=C.CalfDeregistrations;this.TableId=4;},
_className:"Device::CalfDeregistrations"};C.AuX={Undefined:0,Display:1,A_V:2,A_8:
3,A$Z:4,BEf:5,BFu:6,BF6:7,BEB:8,BDt:9,BCR:10,A6u:11,A_X:12,BGe:13,A7G:14,BGh:15};
C.DeviceComponentToString={BS:function(A7){var BcR=A7;var Qk=A.jV;switch(BcR){case
0:Qk=AZv;break;case 10:Qk=A.aaR(A.acf.BgS);break;case 9:Qk=A.aaR(A.acf.Bhw);break;
case 1:Qk=A.aaR(A.acf.Bif);break;case 11:Qk=A.aaR(A.acf.A6u);break;case 5:Qk=A.aaR(
A.acf.Bqp);break;case 8:Qk=A.aaR(A.acf.Bih);break;case 14:Qk=A.aaR(A.acf.A7G);break;
case 2:Qk=A.aaR(A.acf.A_V);break;case 12:Qk=A.aaR(A.acf.A_X);break;case 6:Qk=A.aaR(
A.acf.Bn$);break;case 3:Qk=A.aaR(A.acf.A_8);break;case 7:Qk=A.aaR(A.acf.Bii);break;
case 13:Qk=A.aaR(A.acf.BhW);break;case 15:Qk=A.aaR(A.acf.Bqt);break;case 4:Qk=A.
aaR(A.acf.A$Z);break;default:throw new Error(AZw+BcR.toFixed());}return Qk;},_Init:
function(aArg){C.EnumToString._Init.call(this,aArg);this.__proto__=C.DeviceComponentToString;
},_className:"Device::DeviceComponentToString"};C.AgP={AmD:function(Ah4){return Ah4;
},Aei:function(A7){return A7;},AqS:function(){return 0;},H3:function(){return 4;
},_Init:function(aArg){C.EnumToCodeset._Init.call(this,aArg);this.__proto__=C.AgP;
},_className:"Device::EaseOfDeliveryToCodeset"};C.AeR={AsI:function(A7){return A.
aaL(A.ach.AP4);},AsJ:function(A7){var Bc3=A7;var RE=-1;switch(Bc3){case 0:RE=0;break;
case 1:RE=1;break;case 2:RE=2;break;default:throw new Error(AIw+Bc3.toFixed());}
return RE;},_Init:function(aArg){C.EnumToIcon._Init.call(this,aArg);this.__proto__=
C.AeR;},_className:"Device::MotherSelectionFilterModeToIcon"};C.WhereAboutsFilterCriterion={
A5:0,Abh:function(){var Av=A._NewObject(C.WhereAboutsFilterCriterion,0);Av.E$(this
);return Av;},E$:function(AI){C.FilterCriterion.E$.call(this,AI);var Av=(C.WhereAboutsFilterCriterion.
isPrototypeOf(AI)?AI:null);if(!!Av)this.A5=Av.A5;},Initialize:function(A4,Eb,A_,
Qd){this.EJ=A4;this.Operator=Eb;this.A5=A_;this.YE=Qd;return this;},_Init:function(
aArg){C.FilterCriterion._Init.call(this,aArg);this.__proto__=C.WhereAboutsFilterCriterion;
},_className:"Device::WhereAboutsFilterCriterion"};C.BEN={ANX:0,BDA:1,APG:2,LAST:
3};C.BFX={GL:0,AVF:1,Hj:2,Year:3,LAST:4};C.TimespanDaysToString={BS:function(A7){
var Bgp=A7;var ABj=A.jV;switch(Bgp){case 0:ABj=A.aaR(A.acf.A5M);break;case 1:ABj=
A.aaR(A.acf.AVF);break;case 2:ABj=A.aaR(A.acf.Hj);break;case 3:ABj=A.aaR(A.acf.Year
);break;default:throw new Error(AZx+Bgp.toFixed());}return ABj;},_Init:function(
aArg){C.EnumToString._Init.call(this,aArg);this.__proto__=C.TimespanDaysToString;
},_className:"Device::TimespanDaysToString"};C.ZX={BE0:0,BDH:1,BEh:2,BEk:3,BEj:4
,BDI:5,BEi:6,LAST:7};C.USBStateToString={BS:function(A7){var BgM=A7;var Bp=A.jV;
switch(BgM){case 0:Bp=AZy;break;case 2:Bp=AZz;break;case 1:Bp=AZA;break;case 5:Bp=
AZB;break;case 3:Bp=AZC;break;case 4:Bp=AZD;break;case 6:Bp=AZE;break;default:throw new
Error(AHR+BgM.toFixed());}return Bp;},_Init:function(aArg){C.EnumToString._Init.
call(this,aArg);this.__proto__=C.USBStateToString;},_className:"Device::USBStateToString"
};C.AgJ={BEg:0,BC3:1,BFj:2};C.AxC={ACm:A.jV,Timestamp:0,AD8:0,AEb:0,AGn:0,OnSetTimestamp:
function(E){if(this.Timestamp===E)return;this.Timestamp=E;},AFm:function(E){if(this.
AD8===E)return;this.AD8=E;},AFs:function(E){if(this.AEb===E)return;this.AEb=E;},
AFC:function(E){if(this.AGn===E)return;this.AGn=E;},AE3:function(E){if(this.ACm===
E)return;this.ACm=E;},_Init:function(aArg){this.__proto__=C.AxC;A.h7++;},_Done:function(
){this.__proto__=null;A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((
B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:
"Device::SoftwareVersionInformation"};C.Avr={Timestamp:0,ARA:0,ARB:0,AVi:0,AVj:0
,AVh:0,ARz:0,OnSetTimestamp:function(E){if(this.Timestamp===E)return;this.Timestamp=
E;},AFj:function(E){if(this.ARA===E)return;this.ARA=E;},AFk:function(E){if(this.
ARB===E)return;this.ARB=E;},AFQ:function(E){if(this.AVi===E)return;this.AVi=E;},
AFR:function(E){if(this.AVj===E)return;this.AVj=E;},AFP:function(E){if(this.AVh===
E)return;this.AVh=E;},AFi:function(E){if(this.ARz===E)return;this.ARz=E;},_Init:
function(aArg){this.__proto__=C.Avr;A.h7++;},_Done:function(){this.__proto__=null;
A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((B=this.I)&&(B._cycle!=
D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:"Device::HardwareVersionInformation"
};C.Aqq={Undefined:0,BD8:1,BDf:2};C.Agw={Manual:0,TransponderId:1,LAST:2};C.AnimalIdAutoGenerationMethodToString={
BS:function(A7){var Bcm=A7;var A1c=A.jV;switch(Bcm){case 0:A1c=A.aaR(A.acf.A5D);
break;case 1:A1c=A.aaR(A.acf.A5T);break;default:throw new Error(AIx+Bcm.toFixed(
));}return A1c;},_Init:function(aArg){C.EnumToString._Init.call(this,aArg);this.
__proto__=C.AnimalIdAutoGenerationMethodToString;},_className:"Device::AnimalIdAutoGenerationMethodToString"
};C.Hj={A5m:0,ADX:1,ACJ:2,AD9:3,ABL:4,AD$:5,ADZ:6,ADY:7,ABS:8,AGw:9,AEm:10,AEk:11
,ACu:12,LAST:13};C.MonthToString={BS:function(A7){var Bd5=A7;var Xz=A.jV;switch(
Bd5){case 1:Xz=A.aaR(A.act.ADX);break;case 2:Xz=A.aaR(A.act.ACJ);break;case 3:Xz=
A.aaR(A.act.AD9);break;case 4:Xz=A.aaR(A.act.ABL);break;case 5:Xz=A.aaR(A.act.AD$
);break;case 6:Xz=A.aaR(A.act.ADZ);break;case 7:Xz=A.aaR(A.act.ADY);break;case 8:
Xz=A.aaR(A.act.ABS);break;case 9:Xz=A.aaR(A.act.AGw);break;case 10:Xz=A.aaR(A.act.
AEm);break;case 11:Xz=A.aaR(A.act.AEk);break;case 12:Xz=A.aaR(A.act.ACu);break;default:
throw new Error(AZF+Bd5.toFixed());}return Xz;},_Init:function(aArg){C.EnumToString.
_Init.call(this,aArg);this.__proto__=C.MonthToString;},_className:"Device::MonthToString"
};C.VP={FileName:A.jV,AGp:0,EV:0,AgJ:0,E6:function(){this.Fc(0);this.AgJ=1;this.
FileName=A.jV;this.AGp=0;},Fc:function(E){if(this.EV===E)return;this.EV=E;A.abo([
this,this.SB,this.Fc],0);},SB:function(){return this.EV;},_Init:function(aArg){this.
__proto__=C.VP;A.h7++;},_Done:function(){this.__proto__=null;A.h7--;},_ReInit:function(
){},_Mark:function(D){var B;if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:
null,_cycle:0,_observers:null,_className:"Device::DataExportContext"};C.AVM={Init:
function(aArg){var B;A.zX([this,this.Bfi],[B=A._GetAutoObject(C.Device),B.A9f,B.
Bbn],0);this.Bfi(this);},Ch:function(){A._GetAutoObject(C.Device).Ar$(this.toString(
));},Bfi:function(G){this.E4(A._GetAutoObject(C.Device).AHd);A.we(this,0);},_Init:
function(aArg){C.Int32ArrayWrapper._Init.call(this,aArg);this.__proto__=C.AVM;this.
Zv(3);this.Init(aArg);},_className:"Device::WeightGainsLowClass"};C.AVL={Init:function(
aArg){var B;A.zX([this,this.Bfg],[B=A._GetAutoObject(C.Device),B.A9e,B.Bbm],0);this.
Bfg(this);},Ch:function(){A._GetAutoObject(C.Device).Ar_(this.toString());},Bfg:
function(G){this.E4(A._GetAutoObject(C.Device).AHc);A.we(this,0);},_Init:function(
aArg){C.Int32ArrayWrapper._Init.call(this,aArg);this.__proto__=C.AVL;this.Zv(3);
this.Init(aArg);},_className:"Device::WeightGainsHighClass"};C.AVO={Init:function(
aArg){var B;A.zX([this,this.Bfk],[B=A._GetAutoObject(C.Device),B.A9i,B.Bbq],0);this.
Bfk(this);},Ch:function(){A._GetAutoObject(C.Device).Asa(this.toString());},Bfk:
function(G){this.E4(A._GetAutoObject(C.Device).AHg);A.we(this,0);},_Init:function(
aArg){C.Int32ArrayWrapper._Init.call(this,aArg);this.__proto__=C.AVO;this.Zv(3);
this.Init(aArg);},_className:"Device::WeightValuesBirthClass"};C.AVK={Init:function(
aArg){var B;A.zX([this,this.Bfe],[B=A._GetAutoObject(C.Device),B.A9d,B.Bbl],0);this.
Bfe(this);},Ch:function(){A._GetAutoObject(C.Device).Ar9(this.toString());},Bfe:
function(G){this.E4(A._GetAutoObject(C.Device).AHb);A.we(this,0);},_Init:function(
aArg){C.Int32ArrayWrapper._Init.call(this,aArg);this.__proto__=C.AVK;this.Zv(3);
this.Init(aArg);},_className:"Device::WeightGainsAverageClass"};C.AMC={Init:function(
aArg){var B;A.zX([this,this.Bez],[B=A._GetAutoObject(C.Device),B.A8j,B.BaW],0);this.
Bez(this);},Bez:function(G){this.E4(A._GetAutoObject(C.Device).ABK);A.we(this,0);
},_Init:function(aArg){C.Int32ArrayWrapper._Init.call(this,aArg);this.__proto__=
C.AMC;this.Zv(3);this.Init(aArg);},_className:"Device::AnimalTypesWeightGainsClass"
};C.BEQ={BET:0,BEH:1,BDz:2,BGf:3,Unknown:4};C.BDd={None:0,BE1:1,BEV:2,BER:3,BES:
4};C.BF$={A7V:0,Manual:1,TransponderId:2,NaisId:3,LAST:4};C.TransponderLinkageIdChangeMethodToString={
BS:function(A7){var Bgu=A7;var ABl=A.jV;switch(Bgu){case 0:ABl=A.aaR(A.acf.A7V);
break;case 1:ABl=A.aaR(A.acf.A5D);break;case 2:ABl=A.aaR(A.acf.A5T);break;case 3:
ABl=A.aaR(A.acf.BhU);break;default:throw new Error(AZG+Bgu.toFixed());}return ABl;
},_Init:function(aArg){C.EnumToString._Init.call(this,aArg);this.__proto__=C.TransponderLinkageIdChangeMethodToString;
},_className:"Device::TransponderLinkageIdChangeMethodToString"};C.A_N={BBm:function(
AoI){var Kd=A.ab0(A.abV(AoI,15),0,10);var J7=A._GetAutoObject(C.Converter).S0(Kd
);if(!!J7){if(J7===10){if((AoI.length!==16)||!A._GetAutoObject(A.acj.VD).AVw(AoI
))return 0;else return Kd;}else return Kd;}else{J7=A._GetAutoObject(C.Converter).
S0(A._GetAutoObject(C.Device).PV);if(!!J7&&(J7===10)){if(!A._GetAutoObject(A.acj.
VD).AVw(AoI))return 0;if(AoI.length===12){var Bcl=A.ab0(A.abV(AoI,10),0,10);var AJ$=
A._GetAutoObject(C.Converter).Bp1(Bcl);if((Bcl>0)&&!!AJ$)return(A._GetAutoObject(
C.Converter).Aqx(J7)*1000000000000)+A.ab0(A.abV(AoI,10),0,10);}}}return 0;},Bfs:
function(J8){if((J8.length!==10)||!A._GetAutoObject(A.acj.VD).AVw(J8))return 0;var
AAN=A._NewObject(A.Core.Bs,0);var A3U=false;var A3Z=A.abW(J8,4,4);var AtO=A.wz(A3Z
,0,10);if((AtO<2000)||(AtO>2100)){A3Z=A.abV(J8,4);AtO=A.wz(A3Z,0,10);A3U=true;}if((
AtO<2000)||(AtO>2100))return 0;AAN.Year=AtO;var AKV;var AzV;if(A3U){AKV=A.abW(J8
,4,2);AzV=A.wz(AKV,0,10);}else{AKV=A.abW(J8,2,2);AzV=A.wz(AKV,0,10);}if((AzV<1)||(
AzV>12))return 0;AAN.Uo(AzV);var AKU;var AzU;if(A3U){AKU=A.abW(J8,6,2);AzU=A.wz(
AKU,0,10);}else{AKU=A.abV(J8,2);AzU=A.wz(AKU,0,10);}if((AzU<1)||(AzU>AAN.Zj()))return 0;
AAN.Lp(AzU);return AAN.JR();},_Init:function(aArg){this.__proto__=C.A_N;A.h7++;}
,_Done:function(){this.__proto__=null;A.h7--;},_ReInit:function(){},_Mark:function(
D){var B;if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:
null,_className:"Device::ParserClass"};C.AnJ={_Init:function(){C.A_N._Init.call(
this,0);},_ReInit:function(){},_variants:function(){return this;},_this:null};C.
AnimalTableFieldsToString={BS:function(A7){var Aal=A7;var MO=A.jV;switch(Aal){case
14:MO=A.aaR(A.acf.Afr);break;case 32:MO=A.aaR(A.acf.Breed);break;case 4:MO=A.aaR(
A.acf.Aed);break;case 28:MO=A.aaR(A.acf.A5r);break;case 33:MO=A.aaR(A.acf.AgG);break;
case 23:MO=A.aaR(A.acf.KI);break;case 7:MO=A.aaR(A.acf.Afm);break;case 2:MO=A.aaR(
A.acf.P);break;case 0:MO=A.aaR(A.acf.GN);break;case 8:MO=A.aaR(A.acf.Alarm);break;
case 9:MO=A.aaR(A.acf.ACf);break;case 38:MO=A.aaR(A.acf.Big);break;case 11:MO=A.
aaR(A.acf.Fever);break;case 29:MO=A.aaR(A.acf.ARo);break;case 18:MO=A.aaR(A.acf.
M3);break;case 26:MO=A.aaR(A.acf.Uf);break;case 22:MO=A.aaR(A.acf.Transponder);break;
case 1:MO=A.aaR(A.acf.GI);break;case 34:MO=A.aaR(A.acf.Jh);break;case 6:case 25:
case 27:case 10:case 37:case 12:case 17:case 5:case 3:case 35:case 36:case 15:case
16:case 24:case 31:case 20:case 30:case 21:case 19:case 13:MO=A.jV;break;default:
throw new Error(AZH+A7.toFixed());}return MO;},_Init:function(aArg){C.EnumToString.
_Init.call(this,aArg);this.__proto__=C.AnimalTableFieldsToString;},_className:"Device::AnimalTableFieldsToString"
};C.AD6={Bg:0,BFP:1,LAST:2};C.ListViewScopeToString={BS:function(A7){var Bz3=A7;
var A2B=A.jV;switch(Bz3){case 0:A2B=A.aaR(A.acf.Bg);break;case 1:A2B=A.aaR(A.acf.
Bo3);break;default:throw new Error(AZI+A7.toFixed());}return A2B;},_Init:function(
aArg){C.EnumToString._Init.call(this,aArg);this.__proto__=C.ListViewScopeToString;
},_className:"Device::ListViewScopeToString"};C.AHf={BGJ:0,BGI:1,BGH:2,LAST:3};C.
WeightValuePrecisionToString={BS:function(A7){var BCN=A7;var ALy=A.jV;switch(BCN
){case 0:ALy=AZJ+A.aaR(A.acf.Az9);break;case 1:ALy=AZK+A.acf.AiD;break;case 2:ALy=
AZL+A.acf.AiD;break;default:throw new Error(AIy+A7.toFixed());}return ALy;},_Init:
function(aArg){C.EnumToString._Init.call(this,aArg);this.__proto__=C.WeightValuePrecisionToString;
},_className:"Device::WeightValuePrecisionToString"};C.AgB={BS:function(A7){var AK3=
A7;if(AK3===1)return A.aaR(A.acf.Bje);else return C.AnimalTypeToString.BS.call(this
,A7);},_Init:function(aArg){C.AnimalTypeToString._Init.call(this,aArg);this.__proto__=
C.AgB;},_className:"Device::AnimalTypeToStringHeifer"};C.Y2={RN:0,BEX:1,LAST:2};
C.MassDeregistrationCriterionToString={BS:function(A7){var Bz6=A7;var A2G=A.jV;switch(
Bz6){case 0:A2G=A.aaR(A.acf.Bkk);break;case 1:A2G=A.aaR(A.acf.AR9);break;default:
throw new Error(AHu+A7.toFixed());}return A2G;},_Init:function(aArg){C.EnumToString.
_Init.call(this,aArg);this.__proto__=C.MassDeregistrationCriterionToString;},_className:
"Device::MassDeregistrationCriterionToString"};C.UInt64PartialFilterCriterion={A5:
A.jV,Zh:0,OB:0,Abh:function(){var Av=A._NewObject(C.UInt64PartialFilterCriterion
,0);Av.E$(this);return Av;},E$:function(AI){C.FilterCriterion.E$.call(this,AI);var
Av=(C.UInt64PartialFilterCriterion.isPrototypeOf(AI)?AI:null);if(!!Av){this.A5=Av.
A5;this.Zh=Av.Zh;this.OB=Av.OB;}},Initialize:function(A4,Eb,A_,Ato,AI3,Qd){this.
EJ=A4;this.Operator=Eb;this.A5=A_;this.YE=Qd;this.Zh=Ato;this.OB=AI3;return this;
},_Init:function(aArg){C.FilterCriterion._Init.call(this,aArg);this.__proto__=C.
UInt64PartialFilterCriterion;},_className:"Device::UInt64PartialFilterCriterion"
};C.BDE={Idle:0,BFq:1,BFB:2,BFS:3,Error:4};C.A$M={Ash:0,AsO:0,ZX:0,A_z:function(
E){if(this.ZX===E)return;this.ZX=E;A.abo([this,this.Blt,this.A_z],0);},A_B:function(
E){if(this.AsO===E)return;this.AsO=E;A.abo([this,this.Blv,this.A_B],0);},A_f:function(
E){if(this.Ash===E)return;this.Ash=E;A.abo([this,this.Bk7,this.A_f],0);},Blt:function(
){return this.ZX;},Blv:function(){return this.AsO;},Bk7:function(){return this.Ash;
},_Init:function(aArg){this.__proto__=C.A$M;A.h7++;},_Done:function(){this.__proto__=
null;A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((B=this.I)&&(B._cycle
!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:"Device::UsbDevice"
};
C._Init=function(){C.Int32FilterCriterion.__proto__=C.FilterCriterion;C.StringFilterCriterion.
__proto__=C.FilterCriterion;C.Table.__proto__=C.ITable;C.Animal.__proto__=C.Row;
C.Rating.__proto__=C.Row;C.HelperClass.__proto__=C.AmL;C.BoolFilterCriterion.__proto__=
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
C.AU9.__proto__=C.Int32ArrayWrapper;C.AU8.__proto__=C.Int32ArrayWrapper;C.AMB.__proto__=
C.Int32ArrayWrapper;C.UInt64FilterCriterion.__proto__=C.FilterCriterion;C.BooleanToAssignedUnassignedString.
__proto__=C.EnumToString;C.CountryToString.__proto__=C.EnumToString;C.EaseOfDeliveryToString.
__proto__=C.EnumToString;C.WhereAboutsToString.__proto__=C.EnumToString;C.BreedToString.
__proto__=C.EnumToString;C.AnimalIdGenerationMethodToString.__proto__=C.EnumToString;
C.DirectionOfCountingToString.__proto__=C.EnumToString;C.Aef.__proto__=C.EnumToIcon;
C.AdW.__proto__=C.EnumToIcon;C.GermanStateToString.__proto__=C.EnumToString;C.EartagNrAssignmentModeToString.
__proto__=C.EnumToString;C.M1.__proto__=C.EnumToCodeset;C.ReasonOfLeavingToString.
__proto__=C.EnumToString;C.Ahy.__proto__=C.EnumToCodeset;C.KX.__proto__=C.EnumToCodeset;
C.CalfDeregistrations.__proto__=C.Row;C.DeviceComponentToString.__proto__=C.EnumToString;
C.AgP.__proto__=C.EnumToCodeset;C.AeR.__proto__=C.EnumToIcon;C.WhereAboutsFilterCriterion.
__proto__=C.FilterCriterion;C.TimespanDaysToString.__proto__=C.EnumToString;C.USBStateToString.
__proto__=C.EnumToString;C.AnimalIdAutoGenerationMethodToString.__proto__=C.EnumToString;
C.MonthToString.__proto__=C.EnumToString;C.AVM.__proto__=C.Int32ArrayWrapper;C.AVL.
__proto__=C.Int32ArrayWrapper;C.AVO.__proto__=C.Int32ArrayWrapper;C.AVK.__proto__=
C.Int32ArrayWrapper;C.AMC.__proto__=C.Int32ArrayWrapper;C.TransponderLinkageIdChangeMethodToString.
__proto__=C.EnumToString;C.AnimalTableFieldsToString.__proto__=C.EnumToString;C.
ListViewScopeToString.__proto__=C.EnumToString;C.WeightValuePrecisionToString.__proto__=
C.EnumToString;C.AgB.__proto__=C.AnimalTypeToString;C.MassDeregistrationCriterionToString.
__proto__=C.EnumToString;C.UInt64PartialFilterCriterion.__proto__=C.FilterCriterion;
};C._ReInit=function(){var B;if((B=C.Device._this))B._ReInit(),C.Device._ReInit.
call(B);if((B=C.Converter._this))B._ReInit(),C.Converter._ReInit.call(B);if((B=C.
Helper._this))B._ReInit(),C.Helper._ReInit.call(B);if((B=C.AnJ._this))B._ReInit(
),C.AnJ._ReInit.call(B);};C.DH=function(D){var B;if((B=C.Device._this)&&(B._cycle
!=D))B._Done(C.Device._this=null);if((B=C.Converter._this)&&(B._cycle!=D))B._Done(
C.Converter._this=null);if((B=C.Helper._this)&&(B._cycle!=D))B._Done(C.Helper._this=
null);if((B=C.AnJ._this)&&(B._cycle!=D))B._Done(C.AnJ._this=null);};return C;})(
);

/* VitalControl demonstration application, © Urban GmbH & Co.KG 2023 */