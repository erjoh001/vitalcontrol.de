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
var E6="ERROR: UpdateChargeActive is read only";var Hq="ERROR: ScanState is read only.";
var IT="ERROR: MeasureState is read only.";var Is="ERROR: Temperature value is read only";
var O2="ERROR: UpdateDataTable called for Undefined data table.";var P7="ERROR: UpdateDataTable called for unknown data table id=";
var P8="ERROR: SyncState is read only.";var CQ="ERROR: ScanTransponder is read only.";
var Fe="ERROR: Body weight value is read only";var L1="ERROR: Predicted temperature value is read only";
var P9="ERROR: TransferProgress is read only";var J1="ERROR: TransferTarget is read only";
var N$="ERROR: unhandled assessment.";var P_="Unhandled enum BodyTemperature: ";
var MG="AU";var S9="AT";var UQ="BE";var Z1="BA";var W1="BG";var It="CA";var UR="CN";
var Z2="TW";var W2="HR";var Z3="CY";var W3="CZ";var Z4="DK";var Z5="EE";var US="FI";
var W4="FR";var O3="DE";var Z6="GR";var O4="HU";var Rl="IE";var W5="IT";var W6="JP";
var UT="LV";var Z7="LT";var Z8="LU";var W7="MT";var W8="NL";var S_="NO";var UU="PL";
var UV="PT";var AcK="RO";var S$="RU";var Z9="SK";var Afz="SI";var Z_="ES";var W9=
"SE";var Z$="CH";var W_="TR";var AhS="UA";var KY="UK";var AcL="US";var Lv=".";var
AhT="-";var An$="ERROR: Unhandled mass unit: ";var Oa=" ";var W$="Unhandled gender";
var Aaa="Unhandled animal type";var AhU="Unhandled Device::MassUnit.";var AhV="Unhandled Device::AnimalListContent.";
var AcM="Avid";var UW="Ordicam / IER SA";var Aoa="Agrident";var Aob="Datamars";var
Aoc="Allflex";var Aod="Texas Instruments";var Ak_="Nedap";var AsT="Digital Angel";
var Ax0="null";var Ax1="[ ";var O5=", ";var Rm=" ]";var Ax2="Unhandled language";
var UX="Unhandled Device::AnimalListAction.";var AsU="Temperature unit conversion not supported: ";
var Ax3="->";var Ax4="=";var Ax5=">";var Aoe="<";var AfA="!=";var Aof="WARNING: Unhandled operator.";
var IU="Unknown birth type";var Aog="Unhandled country: ";var Xa="ERROR: Cannot start transaction";
var Aoh="ERROR: Table is null, cannot load row (";var AsV=")";var AsW="Table Id mismatch!";
var AsX="ERROR: Row index (";var Aoi=") out of bounds [0,";var Aoj="]";var AsY="ERROR: Table is full. Item limit: ";
var Ax6="Device::ScanTransponder not set";var Ax7="Unhandled TransponderType.";var
Ax8="Unhandled ScanState.";var AsZ="Could not load animal with transponder";var Ax9=
"Birth type";var P$="Time calving";var Ax_="Pend. reg. notice";var AVJ="Perished";
var AVK="Rating temp.";var AVL="Location";var AVM=" mother";var AHe="Reason leaving";
var AHf="Time alarm";var AfB="Time first weighing";var Aok="Time control";var AVN=
"Time temp.";var AHg="Time watch";var Ak$="Time weighing";var AHh="Assessment";var
AHi="Time rating";var AVO="ERROR: Unhandled AnimalTable filter field:";var AHj="Field ";
var AVP="ERROR: Unhandled RatingTable filter field:";var AVQ="ERROR: Unhandled table ";
var AcN=" filter fields.";var AVR=" [";var AVS="WARNING: Unhandled filter criterion type.";
var AHk="0";var As0="No table specified";var AHl="Invalid animal id generation method: ";
var AHm="Unhandled AnimalIdGenerationMethod: ";var Ax$="Invalid gender: ";var AHn=
"Invalid ear tag number assignment mode: ";var Aya=";";var AVT="Invalid animal creation error code: ";
var AVU="Invalid EartagNrAssignmentMode: ";var AVV="Unsupported exponent: ";var AVW=
"Unknown whereabouts type: ";var AHo="Unhandled Gender: ";var AVX="Unhandled AnimalIdAutoGenerationMethod: ";
var O6="\n";var Ayb="\n\n";var AVY="Bootloader:\nV\xA0";var AVZ="Middleware:\nV\xA0";
var AV0="GUI:\nV\xA0";var AV1="Mainboard: ";var AV2="Torchboard: ";var AV3="Operator not supported.";
var AHp="Unhandled Device::TransponderAssignmentIdChangeMethod: ";var AHq="Unhandled mass deregistration criterion: ";
var Aol="Unhandled enum value ";var Ayc="UNDEFINED";var AV4="Boot";var AV5="Charge";
var AV6="ChargeWarning";var AHr="ControlledPowerOff";var AV7="DeviceMain";var AHs=
"DeviceService";var AHt="DeviceInfo";var AHu="DeviceDataManagement";var AV8="DeviceAnimalDataMenu";
var AHv="DeviceDeviceDataMenu";var AV9="DeviceCheck";var AHw="Home";var Rn="Settings";
var Xb="DateTimeSettings";var AV_="UnitsSettings";var AV$="DataAcquisitionSettings";
var AWa="RegistrationAutomaticSettings";var AWb="RegistrationPresettingsSettings";
var AWc="TransponderAssignmentSettings";var AWd="TransponderUnlinkSettings";var AWe=
"TemperatureSettings";var AhW="WeightGainSettings";var AHx="DeviceSettings";var AWf=
"RegistrationSettings";var AWg="InitializationSettings";var AHy="PremisesSettings";
var AHz="Sleep";var Ayd="Sync";var Qa="EditAnimalData";var AWh="EditAnimalDataNaisId";
var AWi="AnimalList";var AWj="AnimalListFilter";var As1="AlarmListFilter";var AWk=
"WatchListFilter";var AWl="AnimalActionActions";var AWm="AnimalActionTemperature";
var AWn="TemperatureMeasurement";var AWo="AnimalActionWeighing";var AWp="AnimalActionRate";
var As2="AnimalActionUnregister";var AWq="AnimalActionPerished";var AWr="AnimalActionNewBornCare";
var AWs="AlarmList";var AWt="ControlMeasure";var AWu="ControlList";var AWv="RangeTest";
var AWw="ListsMain";var AWx="ListsIdManagement";var AWy="WatchList";var AWz="EvaluationMenuMain";
var AHA="EvaluationMenuWeights";var Ala="EvaluationLosses";var AWA="EvaluationRatings";
var AWB="EvaluationTemperatures";var AWC="EvaluationWeights";var Aye="EvaluationWeightsRecent";
var Alb="EvaluationBirthWeights";var AhX="AnimalEvaluationFilter";var Ayf="NewMenu";
var Aom="NewAnimals";var AhY="NewAnimalManualData";var AWD="MassRecording";var Ayg=
"NewAnimalTransponderData";var AHB="NewAnimalLoss";var AfC="AutoActionScanScreen";
var AHC="ManualActionScanScreen";var Aab="SetTransponderScreen";var Alc="SetSaveTransponderScreen";
var Aon="NewAnimalSetTransponderScreen";var AWE="NewAnimalsSetTransponderScreen";
var AWF="NewAnimalCalvingDataScreen";var AWG="WeightListScreen";var AWH="AnimalSingleInfoScreen";
var AWI="AnimalMultiInfoScreen";var As3="AnimalRegistrationDetails";var AHD="FreshCowListScreen";
var AHE="FreshCowListFilterScreen";var AWJ="DryCowListScreen";var AWK="DryCowListFilterScreen";
var AWL="NoTransponderListScreen";var AWM="NoTransponderListFilterScreen";var AWN=
"YoungNoTransponderListScreen";var AWO="YoungNoTransponderListFilterScreen";var AWP=
"NoNaisIdListScreen";var AWQ="NoNaisIdListFilterScreen";var AWR="RegistrationsListScreen";
var AWS="RegistrationsListFilterScreen";var AWT="ActionListScreen";var Ayh="ActionListFilterScreen";
var AHF="UpdateScreen";var AHG="MotherScanScreen";var AHH="SetSaveNaisIdScreen";
var AHI="PurchasedAnimalsList";var AHJ="TextInput";var AHK="AnimalActions";var AWU=
"Unhandled display mode: ";var AWV="None";var AWW="Actions Settings";var AWX="Auto Action";
var AWY="Menu Item Settings";var AWZ="Rating Type";var AW0="Weighing settings";var
Ayi="Options";var AHL="AnimalSearch";var AW1="AnimalSearchUnfiltered";var AHM="AnimalSearchDriedOff";
var AhZ="MeasurementReady";var UY="AnimalMultiInfoMenu";var AW2="MassRecordingDefaults";
var Aac="MassRecordingFields";var AW3="MassRecordingMenu";var AW4="BirthRegistrationsListMenu";
var Ald="Unhandled overlay menu: ";var Aad="Error";var AcO="Idle";var Ayj="IdScanned";
var AW5="NotFound";var Ob="Progress";var AHN="Unhandled scan state: ";var AW6="Prediction";
var AHO="Ready";var AW7="Unhandled measure state: ";var AHP="Unhandled temperature unit: ";
var AHQ="Unhandled species: ";var AW8="English";var AW9="Nederlands";var AW_="Deutsch";
var AW$="Eesti";var AXa="Suomalainen";var AXb="Fran\xE7ais";var AXc="\u0395\u03BB\u03BB\u03B7\u03BD\u03B9\u03BA\u03AC";
var AXd="\u0411\u044A\u043B\u0433\u0430\u0440\u0441\u043A\u0438";var AHR="Italiano";
var AXe="\u0420\u0443\u0441\u0441\u043A\u0438\u0439";var AHS="Espa\xF1ol";var AHT=
"T\xFCrk\xE7e";var Ayk="\u6B63\u9AD4\u5B57/\u7E41\u9AD4\u5B57";var AXf="\u010Ce\u0161tina";
var AXg="Bosanski";var AXh="Norsk";var AXi="\u0423\u043A\u0440\u0430\u0457\u043D\u0441\u044C\u043A\u0438\u0439";
var AHU="Unhandled language: ";var AXj="EN";var AXk="ET";var AXl="EL";var As4="ZH";
var As5="CS";var AHV="BS";var AXm="Unhandled gender: ";var AXn="Unhandled birth type: ";
var AXo="Exporting";var AXp="ImportFinish";var AXq="ImportStart";var AXr="Importing";
var AXs="Init";var AXt="Unhandled sync state: ";var AHW="Unhandled rating attribute: ";
var AXu="Unhandled assessment: ";var Ayl="Illegal boolean value: ";var AHX="Unhandled popup ID:";
var AXv="Unknown";var AXw="Severe Error";var AXx="ErrorsDeviceDriverCheck";var AXy=
"Enter Sleep";var AXz="About";var AXA="InfoSoftwareVersions";var AHY="InfoHardwareVersions";
var AHZ="InfoSerial";var AH0="ShutDown";var AH1="SuccessDataSync";var Aym="SuccessResetFactory";
var Ayn="SuccessResetAnimalData";var AH2="SuccessCreateBackup";var AXB="SuccessRestoreBackup";
var AH3="CreateBackupInProgress";var AXC="RestoreBackupInProgress";var AH4="FailedCreateBackup";
var AXD="FailedRestoreBackup";var AXE="TechnicalDetails";var AXF="WarningDataSync";
var AXG="WarningFactory";var AXH="WarningResetAnimalData";var AXI="WarningRestart";
var AXJ="WarningAutoAction";var AXK="WarningAutoActionNotApplicable";var AXL="WarningNoMenuItem";
var AXM="WarningEnterDemoMode";var AXN="NoAnimalsRegistered";var AXO="MaxNumAnimalsReached";
var Ayo="MaxNumRatingsReached";var AXP="MaxNumCalfDeregistrationsReached";var AXQ=
"MissingTransponder";var Ayp="EarTagNumberTooShort";var As6="NoValidCountryCode";
var UZ="WarningOutdatedAnimalWeight";var As7="WarningOutdatedAnimalWeights";var AXR=
"WarningWeightEvaluationSingular";var AXS="WarningWeightEvaluationPlural";var AXT=
"ScanError";var AH5="ScanNotFound";var AXU="ScannedAnimalNotFound";var AH6="ScannedTransponderNotFound";
var AXV="AnimalNotFound";var AXW="SuccessUnregister";var AXX="SuccessUnregisterPerished";
var As8="SuccessCreationNewAnimal";var AXY="SuccessCreationNewAnimals";var AXZ="AnimalCreationInProgress";
var AH7="EvaluationInProgress";var AX0="DataSyncInProgress";var AX1="AddedToAlarm";
var AX2="RemovedFromAlarm";var AX3="AddedToWatch";var AcP="RemovedFromWatch";var
AX4="AddedToDryOff";var AX5="RemovedFromDryOff";var AX6="AnimalIdAlreadyExists";
var AX7="AnimalIdAlreadyExistsContinuable";var AH8="MissingAnimalId";var AX8="MissingAnimalIdMother";
var AX9="MissingEartagNumber";var AX_="MissingTransponderId";var AX$="TransponderAlreadyRegistered";
var AYa="TransponderAlreadyRegisteredContinuable";var AYb="TransponderAlreadyRegisteredCapturable";
var AH9="HelpAnimalInfoRating";var AYc="WarningReassignTransponder";var AYd="CannotReassignNaisId";
var AYe="WarningResetToDefaultValue";var AH_="WarningResetThresholds";var AH$="WarningResetTempThresholds";
var AYf="UpdateFirmware";var AYg="UpdateFirmwareBatteryLow";var AYh="ConfirmFirmwareUpdated";
var AYi="ConfirmBootloaderUpdated";var Ro="QuestionAddAnotherCalfMultiples";var As9=
"RemovedAllBirthNoticesPending";var AIa="RemovedAllPurchasedNoticePending";var AIb=
"RemovedFromBirthNoticePending";var Aoo="RemovedFromPurchasedNoticePending";var Aop=
"SuccessClearAnimalLoss";var Ayq="RemovedAnimalBirth";var AYj="RemovedAnimalPurchased";
var AIc="WarningNoActionsForAnimalLoss";var AYk="SuccessLinkTransponder";var AYl=
"SuccessChangeTransponder";var AYm="SuccessUnlinkTransponder";var AYn="SuccessLinkNaisId";
var AYo="WarningDataExportHitBirthFailed";var AYp="SuccessDataExportHitBirth";var
AYq="SuccessDataExportHitBirthDownload";var AYr="WarningDataExportPurchasedFailed";
var AYs="SuccessDataExportPurchased";var AYt="SuccessDataExportPurchasedDownload";
var AYu="WarningDataExportAnimalsFailed";var AYv="SuccessDataExportAnimalsRatings";
var AYw="SuccessDataExportAnimalsDownload";var AYx="WarningNoPremisesID";var AYy=
"WarningNoFlashDrivePresent";var AYz="WarningNoBackupPathPresent";var AYA="WarningNoBackupFilePresent";
var Aoq="DemoFunctionNotAvailable";var AId="WarningImpreciseTimeSetting";var AYB=
"ConfirmationRestoreBackup";var AIe="ConfirmationMassDeregistration";var AIf="SuccessMassDeregistration";
var AcQ="WarningParsedDateInFutureInvalid";var AIg="WarningParsingDateFailed";var
AYC="WarningParsingNaisIdFailed";var AIh="WarningParsingShortNaisIdWithoutPremisesId";
var AYD="DataExportInProgress";var Ayr="BarcodeScannerConnectedSwitchScreen";var
AYE="BarcodeScannerDisconnectedSwitchScreen";var AYF="AnimalId";var Ays="FarmId";
var AYG="GroupId";var AYH="PersonId";var AYI="Unhandled transponder type: ";var AIi=
"FDX";var Aor="HDX";var AIj="HDX (Urban)";var AYJ="Unhandled transponder protocol: ";
var AIk="Illegal RatingMode: ";var AIl="Unhandled mass unit: ";var Ale="Max array size is 10";
var AIm="Index out of bounds";var Aos="ERROR: Received more integers than expected!";
var AIn="Unhandled double scan action :";var AIo="Illegal WeightRecordingMode: ";
var AIp="Illegal WeightRecordingScope: ";var AYK="AnimalDataGenderType";var AYL=
"AnimalDataShortNaisId";var AIq="Rating";var AYM="Temperature";var AYN="Weight";
var AYO="Alarm infos";var AYP="Control infos";var AYQ="Watch infos";var AYR="Fresh cow infos";
var AYS="No transponder infos";var AYT="Dry cow info";var AYU="No nais id infos";
var AYV="Birth registrations infos";var AYW="Purchased registrations infos";var AYX=
"Young no transponder infos";var AYY="Unhandled animal list content:";var AYZ="Illegal AutoRegistrationMode: ";
var AIr="Illegal FactoryResetScope: ";var Rp="??";var AY0="Illegal EaseOfDelivery: ";
var Ayt="Illegal Whereabouts: ";var AY1="Illegal breed: ";var AY2="Unisex";var AY3=
"Illegal animalIdGenerationMethod: ";var AY4="Ascending";var AY5="Descending";var
AY6="Illegal directionOfCountingName: ";var Aot="Unhandled direction of counting: ";
var Ah0="Unhandled German state: ";var As_="SH";var As$="HH";var Ayu="NI";var Aou=
"HB";var AY7="NW";var AY8="HE";var AY9="RP";var AY_="BW";var AY$="BY";var AZa="SL";
var AZb="BB";var AZc="MV";var AZd="SN";var AZe="ST";var AZf="TH";var AZg="One Range Male Female";
var AZh="Two Ranges Male Female";var AIs="Illegal EartagAssignmentMode: ";var AZi=
"Unhandled code set value ";var Ata="Implement in derived class";var AZj="Illegal HIT-Code: ";
var Ayv="Illegal ReasonOfLeaving: ";var Atb="Illegal code: ";var AZk="Undefined";
var AZl="Illegal DeviceComponent: ";var AZm="Unhandled Device::MotherSelectionFilterMode: ";
var AIt="Illegal Device::TimespanDays: ";var AZn="Not connected";var AZo="Host";
var AZp="Device";var AZq="Device CDC";var AZr="Host MSC";var AZs="Host HID";var AZt=
"Host CDC";var AZu="Illegal animalIdAutoGenerationMethod: ";var AIu="Unhandled month: ";
var AZv="Illegal transponderAssignmentIdChangeMethod: ";var AZw="Unhandled animal table field: ";
var AZx="Unhandled list view scope: ";var AZy="1 ";var AZz="100 ";var AZA="10 ";
var AZB="Unhandled weight value precision: ";
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
AI;if(!this.B7)this.B7=AI;},AOF:function(){return this.B7;},AOK:function(Bby){if(
!!Bby)return Bby.Ah;return null;},DL:function(AI2,Eb){var Av=this.B7;while(!!Av){
if(Av.EJ===AI2){if(Eb===1)return Av;else if(Av.Operator===Eb)return Av;}Av=Av.Ah;
}return null;},Ni:function(AI){var Av=this.B7;while(!!Av){if(Av===AI){if(!!Av.AJ
)Av.AJ.Ah=Av.Ah;if(!!Av.Ah)Av.Ah.AJ=Av.AJ;if(this.B7===Av)this.B7=Av.Ah;if(this.
B8===Av)this.B8=Av.AJ;Av.Ah=null;Av.AJ=null;return;}Av=Av.Ah;}},E_:function(){var
Be=A._NewObject(C.Filter,0);var Av=this.B7;while(!!Av){Be.CW(Av.Abg());Av=Av.Ah;
}return Be;},_Init:function(aArg){this.__proto__=C.Filter;A.h7++;},_Done:function(
){this.__proto__=null;A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((
B=this.B7)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.B8)&&(B._cycle!=D))B._Mark(
B._cycle=D);if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:
null,_className:"Device::Filter"};C.FilterCriterion={Ah:null,AJ:null,EJ:-1,Operator:
1,YE:false,Abg:function(){return null;},E_:function(AI){if(!AI)return;this.EJ=AI.
EJ;this.Operator=AI.Operator;this.YE=AI.YE;},_Init:function(aArg){this.__proto__=
C.FilterCriterion;A.h7++;},_Done:function(){this.__proto__=null;A.h7--;},_ReInit:
function(){},_Mark:function(D){var B;if((B=this.Ah)&&(B._cycle!=D))B._Mark(B._cycle=
D);if((B=this.AJ)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.I)&&(B._cycle!=D
))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:"Device::FilterCriterion"
};C.Int32FilterCriterion={A4:0,Abg:function(){var Av=A._NewObject(C.Int32FilterCriterion
,0);Av.E_(this);return Av;},E_:function(AI){C.FilterCriterion.E_.call(this,AI);var
Av=(C.Int32FilterCriterion.isPrototypeOf(AI)?AI:null);if(!!Av)this.A4=Av.A4;},Initialize:
function(A3,Eb,A_,Qd){this.EJ=A3;this.Operator=Eb;this.A4=A_;this.YE=Qd;return this;
},_Init:function(aArg){C.FilterCriterion._Init.call(this,aArg);this.__proto__=C.
Int32FilterCriterion;},_className:"Device::Int32FilterCriterion"};C.DeviceClass={
AEc:0,AEb:0,Av0:0,PV:0,OR:null,Sz:null,QZ:null,SY:null,R0:null,P1:null,GC:null,An:
null,Bt:null,Agu:null,AnJ:null,Po:null,Auy:A.jV,AutoActions:A.jV,ABE:A.jV,AGP:A.
jV,AGQ:A.jV,AhG:A.jV,AG_:A.jV,AG$:A.jV,ABF:A.jV,AG9:A.jV,AHc:A.jV,ABy:A.jV,ABz:A.
jV,ARV:A.jV,AR0:A.jV,AVG:A.jV,Aa2:100,Lt:0,AMX:75,AcD:3600,ATT:0,A1:5,AF:0,KW:50000
,Pk:0,AF5:0,AdQ:0,Aq1:0,Aq0:0,ARI:1,ARH:1,AjR:0,ARJ:1,AxL:0,Afp:0,AqN:10,AUD:5,AvV:
60,AvT:0,An1:0,OK:1,WhereAbouts:0,Ak1:0,AxD:3,ACA:0,Agw:1,AbS:0,Aqm:0,ANV:11,Breed:
0,EartagNrAssignmentMode:0,AuY:0,ACt:0,ACs:0,Ij:5,ABx:2,Aqo:0,AOx:2,AVr:0,D9:0,AL7:
0,Kj:0,Gender:2,WeightRecordingScope:1,WeightRecordingMode:1,AnimalType:0,MassUnit:
0,AutoRegistrationMode:0,RatingMode:0,SyncState:0,OverlayMenu:0,TemperatureUnit:
0,Language:0,MeasureState:0,ScanState:0,Ii:3,AeM:true,ARu:false,Aqa:true,AqO:false
,AmL:true,HF:false,AU7:false,AmM:false,AVp:false,AsN:false,AEa:false,Amy:false,UpdateActiveScreen:
function(AL){if(this.Ii===AL)return;this.Ii=AL;A.abo([this,this.AEo,this.BaJ],0);
},Zk:function(E){if(this.K&&this.K.Zk)return this.K.Zk.apply(this,arguments);else
return C.DeviceClass.Bun.apply(this,arguments);},Bun:function(E){},BaJ:function(
Aq){this.Zk(Aq);},UpdateBatteryChargeState:function(AL){if(this.Aa2===AL)return;
this.Aa2=AL;A.abo([this,this.Av5,this.AyB],0);},Awq:function(E){if(this.K&&this.
K.Awq)return this.K.Awq.apply(this,arguments);else return C.DeviceClass.Buy.apply(
this,arguments);},Buy:function(E){A.ab5("%s",BD);},AyB:function(Aq){this.Awq(Aq);
},UpdateChargeActive:function(AL){if(this.Amy===AL)return;this.Amy=AL;A.abo([this
,this.Av8,this.AyC],0);},AEV:function(E){if(this.K&&this.K.AEV)return this.K.AEV.
apply(this,arguments);else return C.DeviceClass.BuE.apply(this,arguments);},BuE:
function(E){A.ab5("%s",E6);},AyC:function(Aq){this.AEV(Aq);},UpdateScanState:function(
AL){var B;if(this.ScanState===AL)return;this.ScanState=AL;A.abo([this,this.ASx,this.
AZ7],0);A._GetAutoObject(C.Helper).BAJ(this);},ArY:function(E){if(this.K&&this.K.
ArY)return this.K.ArY.apply(this,arguments);else return C.DeviceClass.Bvi.apply(
this,arguments);},Bvi:function(E){A.ab5("%s",Hq);},AZ7:function(Aq){this.ArY(Aq);
},UpdateMeasureState:function(AL){if(this.MeasureState===AL)return;this.MeasureState=
AL;A.abo([this,this.AEw,this.AIL],0);},AwP:function(E){if(this.K&&this.K.AwP)return this.
K.AwP.apply(this,arguments);else return C.DeviceClass.Bu2.apply(this,arguments);
},Bu2:function(E){A.ab5("%s",IT);},AIL:function(Aq){this.AwP(Aq);},UpdateTempValue:
function(AL){if(this.Lt===AL)return;this.Lt=AL;A.abo([this,this.AEA,this.AIN],0);
},Aw3:function(E){if(this.K&&this.K.Aw3)return this.K.Aw3.apply(this,arguments);
else return C.DeviceClass.Bvo.apply(this,arguments);},Bvo:function(E){A.ab5("%s"
,Is);},AIN:function(Aq){this.Aw3(Aq);},Anx:function(E){if(this.K&&this.K.Anx)return this.
K.Anx.apply(this,arguments);else return C.DeviceClass.BuW.apply(this,arguments);
},BuW:function(E){},BaY:function(Aq){this.Anx(Aq);},Aw4:function(E){if(this.K&&this.
K.Aw4)return this.K.Aw4.apply(this,arguments);else return C.DeviceClass.Bvp.apply(
this,arguments);},Bvp:function(E){},Atf:function(Aq){this.Aw4(Aq);},AET:function(
E){if(this.K&&this.K.AET)return this.K.AET.apply(this,arguments);else return C.DeviceClass.
BuD.apply(this,arguments);},BuD:function(E){},BaQ:function(Aq){this.AET(Aq);},AFp:
function(E){if(this.K&&this.K.AFp)return this.K.AFp.apply(this,arguments);else return C.
DeviceClass.Bu4.apply(this,arguments);},Bu4:function(E){},AZ1:function(Aq){this.
AFp(Aq);},UpdateMonitoring:function(AL){if(this.AEa===AL)return;this.AEa=AL;A.abo([
this,this.ASo,this.AZ1],0);},UpdateDataTable:function(BbA){var B;switch(BbA){case
0:A.pe([B=this.An,B.Akk],this);break;case 1:A.pe([B=this.Bt,B.Akk],this);break;case
3:A.pe([B=this.Agu,B.Akk],this);break;case 4:A.pe([B=this.Po,B.Akk],this);break;
case 2:A.ab5("%s",O2);break;default:A.ab5("%s%e",P7,BbA);}},AxC:function(){if(this.
K&&this.K.AxC)return this.K.AxC.apply(this,arguments);else return C.DeviceClass.
BvZ.apply(this,arguments);},BvZ:function(){},AhK:function(){if(this.K&&this.K.AhK
)return this.K.AhK.apply(this,arguments);else return C.DeviceClass.Bv2.apply(this
,arguments);},Bv2:function(){},AhH:function(){if(this.K&&this.K.AhH)return this.
K.AhH.apply(this,arguments);else return C.DeviceClass.Bv0.apply(this,arguments);
},Bv0:function(){},AnV:function(){if(this.K&&this.K.AnV)return this.K.AnV.apply(
this,arguments);else return C.DeviceClass.Bv3.apply(this,arguments);},Bv3:function(
){},UpdateLanguage:function(AL){if(this.Language===AL)return;this.Language=AL;switch(
AL){case 14:A._SetLanguage(1);break;case 13:A._SetLanguage(2);break;case 6:A._SetLanguage(
3);break;case 11:A._SetLanguage(4);break;case 10:A._SetLanguage(5);break;case 12:
A._SetLanguage(6);break;case 5:A._SetLanguage(7);break;case 3:A._SetLanguage(8);
break;case 1:A._SetLanguage(9);break;case 8:A._SetLanguage(10);break;case 4:A._SetLanguage(
11);break;case 15:A._SetLanguage(13);break;case 9:A._SetLanguage(15);break;case 2:
A._SetLanguage(16);break;case 7:A._SetLanguage(17);break;case 16:A._SetLanguage(
18);break;default:A._SetLanguage(0);}A.abo([this,this.A8w,this.BaY],0);},UpdateTemperatureUnit:
function(AL){if(this.TemperatureUnit===AL)return;this.TemperatureUnit=AL;A.abo([
this,this.Aru,this.Atf],0);},UpdateBrightness:function(AL){if(this.AMX===AL)return;
this.AMX=AL;A.abo([this,this.A8h,this.BaQ],0);},SetSystemTime:function(Ah8){if(this.
K&&this.K.SetSystemTime)return this.K.SetSystemTime.apply(this,arguments);else return C.
DeviceClass.BvX.apply(this,arguments);},BvX:function(Ah8){},Axv:function(){if(this.
K&&this.K.Axv)return this.K.Axv.apply(this,arguments);else return C.DeviceClass.
Bax.apply(this,arguments);},Bax:function(){},AGh:function(){if(this.K&&this.K.AGh
)return this.K.AGh.apply(this,arguments);else return C.DeviceClass.Bav.apply(this
,arguments);},Bav:function(){},Boc:function(){},UpdateOverlayMenu:function(AL){if(
this.OverlayMenu===AL)return;this.OverlayMenu=AL;A.abo([this,this.Awi,this.AyJ],
0);},Dw:function(E){if(this.K&&this.K.Dw)return this.K.Dw.apply(this,arguments);
else return C.DeviceClass.Bvd.apply(this,arguments);},Bvd:function(E){},AyJ:function(
Aq){this.Dw(Aq);},Aw_:function(E){if(this.K&&this.K.Aw_)return this.K.Aw_.apply(
this,arguments);else return C.DeviceClass.Bvz.apply(this,arguments);},Bvz:function(
E){},Ba9:function(Aq){this.Aw_(Aq);},UpdateUnderTemp:function(AL){if(this.AcD===
AL)return;this.AcD=AL;A.abo([this,this.A80,this.Ba9],0);},UpdateSyncState:function(
AL){if(this.SyncState===AL)return;this.SyncState=AL;A.abo([this,this.ASz,this.AZ9
],0);},Ab6:function(E){if(this.K&&this.K.Ab6)return this.K.Ab6.apply(this,arguments
);else return C.DeviceClass.Bvn.apply(this,arguments);},Bvn:function(E){A.ab5("%s"
,P8);},AZ9:function(Aq){this.Ab6(Aq);},ACY:function(){if(this.K&&this.K.ACY)return this.
K.ACY.apply(this,arguments);else return C.DeviceClass.Buf.apply(this,arguments);
},Buf:function(){return A.jV;},UpdatePopup:function(J4,A0T,A0O,A0W){this.A5(J4,A0T
,A0O,A0W,[this,this.BAp]);},PopupStateChanged:function(J4,Ae){if(this.K&&this.K.
PopupStateChanged)return this.K.PopupStateChanged.apply(this,arguments);else return C.
DeviceClass.BvM.apply(this,arguments);},BvM:function(J4,Ae){},AFQ:function(E){if(
this.K&&this.K.AFQ)return this.K.AFQ.apply(this,arguments);else return C.DeviceClass.
BvB.apply(this,arguments);},BvB:function(E){},Ba_:function(Aq){this.AFQ(Aq);},UpdateVibrationOnKeypressEnabled:
function(AL){if(this.AsN===AL)return;this.AsN=AL;A.abo([this,this.A81,this.Ba_],
0);},Ae_:function(E){if(this.K&&this.K.Ae_)return this.K.Ae_.apply(this,arguments
);else return C.DeviceClass.BvA.apply(this,arguments);},BvA:function(E){},AIO:function(
Aq){this.Ae_(Aq);},UpdateVibrationOn:function(Bb3){if(this.AVp===Bb3)return;this.
AVp=Bb3;A.abo([this,this.AEB,this.AIO],0);},A5:function(J4,A0T,A0O,A0W,A0P){var Agl=
A._NewObject(C.PopupContext,0);Agl.Id=J4;Agl.Show=A0T;Agl.AkF=A0O;Agl.Ak0=A0W;Agl.
AFY=A0P;this.AnJ.Trigger(Agl,false);},BAp:function(G){var As=(C.PopupContext.isPrototypeOf(
G)?G:null);if(!!As)this.PopupStateChanged(As.Id,As.PopupState);},AwZ:function(E){
if(this.K&&this.K.AwZ)return this.K.AwZ.apply(this,arguments);else return C.DeviceClass.
Bvh.apply(this,arguments);},Bvh:function(E){},AZ6:function(Aq){this.AwZ(Aq);},UpdateRatingMode:
function(AL){if(this.RatingMode===AL)return;this.RatingMode=AL;A.abo([this,this.
ASw,this.AZ6],0);},Ae0:function(E){if(this.K&&this.K.Ae0)return this.K.Ae0.apply(
this,arguments);else return C.DeviceClass.BuO.apply(this,arguments);},BuO:function(
E){},Ate:function(Aq){this.Ae0(Aq);},UpdateFlashLightOn:function(BbJ){if(this.AmM===
BbJ)return;this.AmM=BbJ;A.abo([this,this.Arr,this.Ate],0);},Uq:function(E){if(this.
K&&this.K.Uq)return this.K.Uq.apply(this,arguments);else return C.DeviceClass.Bvs.
apply(this,arguments);},Bvs:function(E){},AZ_:function(Aq){this.Uq(Aq);},UpdateTopLightOn:
function(BbY){if(this.AU7===BbY)return;this.AU7=BbY;A.abo([this,this.ASB,this.AZ_
],0);},WA:function(E){if(this.K&&this.K.WA)return this.K.WA.apply(this,arguments
);else return C.DeviceClass.Bvg.apply(this,arguments);},Bvg:function(E){},Bwe:function(
Aq){this.WA(Aq);},UpdateRGBTopLight:function(BbT){if(this.ATT===BbT)return;this.
ATT=BbT;A.abo([this,this.BkU,this.Bwe],0);},Awp:function(E){if(this.K&&this.K.Awp
)return this.K.Awp.apply(this,arguments);else return C.DeviceClass.Bux.apply(this
,arguments);},Bux:function(E){},Bv9:function(Aq){this.Awp(Aq);},UpdateAutoRegistrationMode:
function(Bbw){if(this.AutoRegistrationMode===Bbw)return;this.AutoRegistrationMode=
Bbw;A.abo([this,this.Bkh,this.Bv9],0);},ArZ:function(E){if(this.K&&this.K.ArZ)return this.
K.ArZ.apply(this,arguments);else return C.DeviceClass.Bvj.apply(this,arguments);
},Bvj:function(E){A.ab5("%s",CQ);},AZ8:function(Aq){this.ArZ(Aq);},UpdateScanTransponder:
function(J4,Bb0,BbZ){if(((this.OR.Id===J4)&&(this.OR.TransponderType===Bb0))&&(this.
OR.TransponderProtocol===BbZ))return;this.OR.OnSetId(J4);this.OR.ATy(Bb0);this.OR.
ATx(BbZ);A.abo([this,this.ASy,this.AZ8],0);},OM:function(E){if(this.K&&this.K.OM
)return this.K.OM.apply(this,arguments);else return C.DeviceClass.BuG.apply(this
,arguments);},BuG:function(E){},U1:function(Aq){this.OM(Aq);},UpdateDigitsID:function(
BbE){if(this.A1===BbE)return;this.A1=BbE;A.abo([this,this.Uh,this.U1],0);},PQ:function(
E){if(this.K&&this.K.PQ)return this.K.PQ.apply(this,arguments);else return C.DeviceClass.
Bvc.apply(this,arguments);},Bvc:function(E){},U2:function(Aq){this.PQ(Aq);},UpdateOffsetID:
function(BbP){if(this.AF===BbP)return;this.AF=BbP;A.abo([this,this.Ui,this.U2],0
);},AFU:function(E){if(this.K&&this.K.AFU)return this.K.AFU.apply(this,arguments
);else return C.DeviceClass.BvI.apply(this,arguments);},BvI:function(E){A.ab5("%s"
,Fe);},AIP:function(Aq){this.AFU(Aq);},UpdateWeightValue:function(AL){if(this.KW===
AL)return;this.KW=AL;A.abo([this,this.AEC,this.AIP],0);},AwM:function(E){if(this.
K&&this.K.AwM)return this.K.AwM.apply(this,arguments);else return C.DeviceClass.
BuZ.apply(this,arguments);},BuZ:function(E){},AZ0:function(Aq){this.AwM(Aq);},UpdateMassUnit:
function(AL){if(this.MassUnit===AL)return;this.MassUnit=AL;A.abo([this,this.ASn,
this.AZ0],0);},Ary:function(E){if(this.K&&this.K.Ary)return this.K.Ary.apply(this
,arguments);else return C.DeviceClass.Bar.apply(this,arguments);},Bar:function(E
){},BaG:function(Aq){this.Ary(Aq);},Arz:function(E){if(this.K&&this.K.Arz)return this.
K.Arz.apply(this,arguments);else return C.DeviceClass.Bas.apply(this,arguments);
},Bas:function(E){},AZV:function(Aq){this.Arz(Aq);},UpdateActiveActions:function(
AL){if(this.Pk===AL)return;this.Pk=AL;A.abo([this,this.A74,this.BaG],0);},UpdateActiveActionsOrder:
function(AL){if(this.Auy===AL)return;this.Auy=AL;A.abo([this,this.ASa,this.AZV],
0);},Akr:function(E){if(this.K&&this.K.Akr)return this.K.Akr.apply(this,arguments
);else return C.DeviceClass.Bat.apply(this,arguments);},Bat:function(E){},BaO:function(
Aq){this.Akr(Aq);},UpdateAutoActions:function(AL){if(this.AutoActions===AL)return;
this.AutoActions=AL;A.abo([this,this.A8d,this.BaO],0);},AGI:function(){if(this.K&&
this.K.AGI)return this.K.AGI.apply(this,arguments);else return C.DeviceClass.Bv1.
apply(this,arguments);},Bv1:function(){},AsD:function(){if(this.K&&this.K.AsD)return this.
K.AsD.apply(this,arguments);else return C.DeviceClass.Bv5.apply(this,arguments);
},Bv5:function(){},EB:function(E){if(this.K&&this.K.EB)return this.K.EB.apply(this
,arguments);else return C.DeviceClass.Buu.apply(this,arguments);},Buu:function(E
){},Bv8:function(Aq){this.EB(Aq);},UpdateAnimalType:function(En){if(this.AnimalType===
En)return;this.AnimalType=En;A.abo([this,this.PP,this.Bv8],0);},Aw$:function(E){
if(this.K&&this.K.Aw$)return this.K.Aw$.apply(this,arguments);else return C.DeviceClass.
BvG.apply(this,arguments);},BvG:function(E){},Bbd:function(Aq){this.Aw$(Aq);},UpdateWeightRecordingMode:
function(Bb5){if(this.WeightRecordingMode===Bb5)return;this.WeightRecordingMode=
Bb5;A.abo([this,this.A89,this.Bbd],0);},AFu:function(E){if(this.K&&this.K.AFu)return this.
K.AFu.apply(this,arguments);else return C.DeviceClass.Bve.apply(this,arguments);
},Bve:function(E){A.ab5("%s",L1);},AZ4:function(Aq){this.AFu(Aq);},UpdatePredictedTempValue:
function(AL){if(this.AF5===AL)return;this.AF5=AL;A.abo([this,this.ASt,this.AZ4],
0);},SP:function(L7){if(this.K&&this.K.SP)return this.K.SP.apply(this,arguments);
else return C.DeviceClass.BvW.apply(this,arguments);},BvW:function(L7){},AE0:function(
E){if(this.K&&this.K.AE0)return this.K.AE0.apply(this,arguments);else return C.DeviceClass.
BuF.apply(this,arguments);},BuF:function(E){},AII:function(Aq){this.AE0(Aq);},UpdateDemoMode:
function(AL){if(this.HF===AL)return;this.HF=AL;A.abo([this,this.AEt,this.AII],0);
},AEI:function(E){if(this.K&&this.K.AEI)return this.K.AEI.apply(this,arguments);
else return C.DeviceClass.Buo.apply(this,arguments);},Buo:function(E){},BaK:function(
Aq){this.AEI(Aq);},UpdateAgeRegistration:function(BbO){if(this.AdQ===BbO)return;
this.AdQ=BbO;A.abo([this,this.A79,this.BaK],0);},Axa:function(E){if(this.K&&this.
K.Axa)return this.K.Axa.apply(this,arguments);else return C.DeviceClass.BvH.apply(
this,arguments);},BvH:function(E){},Bbe:function(Aq){this.Axa(Aq);},UpdateWeightRecordingScope:
function(BbU){if(this.WeightRecordingScope===BbU)return;this.WeightRecordingScope=
BbU;A.abo([this,this.A8_,this.Bbe],0);},JS:function(E){if(this.K&&this.K.JS)return this.
K.JS.apply(this,arguments);else return C.DeviceClass.BuS.apply(this,arguments);}
,BuS:function(E){},AZZ:function(Aq){this.JS(Aq);},UpdateGender:function(L4){if(this.
Gender===L4)return;this.Gender=L4;A.abo([this,this.Wv,this.AZZ],0);},ArO:function(
E){if(this.K&&this.K.ArO)return this.K.ArO.apply(this,arguments);else return C.DeviceClass.
BuU.apply(this,arguments);},BuU:function(E){},AyF:function(Aq){this.ArO(Aq);},UpdateIDLastUsedMale:
function(Rq){if(this.Aq1===Rq)return;this.Aq1=Rq;A.abo([this,this.Awb,this.AyF],
0);},ArN:function(E){if(this.K&&this.K.ArN)return this.K.ArN.apply(this,arguments
);else return C.DeviceClass.BuT.apply(this,arguments);},BuT:function(E){},AyE:function(
Aq){this.ArN(Aq);},UpdateIDLastUsedFemale:function(Rq){if(this.Aq0===Rq)return;this.
Aq0=Rq;A.abo([this,this.Awa,this.AyE],0);},Zl:function(E){if(this.K&&this.K.Zl)return this.
K.Zl.apply(this,arguments);else return C.DeviceClass.But.apply(this,arguments);}
,But:function(E){},AIG:function(Aq){this.Zl(Aq);},UpdateAnimalListContent:function(
AL){if(this.Kj===AL)return;this.Kj=AL;A.abo([this,this.AEq,this.AIG],0);},AEK:function(
E){if(this.K&&this.K.AEK)return this.K.AEK.apply(this,arguments);else return C.DeviceClass.
Bup.apply(this,arguments);},Bup:function(E){},BaL:function(Aq){this.AEK(Aq);},UpdateAlarmListAction:
function(AL){if(this.AL7===AL)return;this.AL7=AL;A.abo([this,this.A7$,this.BaL],
0);},AE3:function(E){if(this.K&&this.K.AE3)return this.K.AE3.apply(this,arguments
);else return C.DeviceClass.BuN.apply(this,arguments);},BuN:function(E){},BaT:function(
Aq){this.AE3(Aq);},UpdateFlashLightInMeasureState:function(BbK){if(this.AmL===BbK
)return;this.AmL=BbK;A.abo([this,this.A8k,this.BaT],0);},AeV:function(E){if(this.
K&&this.K.AeV)return this.K.AeV.apply(this,arguments);else return C.DeviceClass.
Bus.apply(this,arguments);},Bus:function(E){},AIF:function(Aq){this.AeV(Aq);},UpdateAnimalInfoContent:
function(AL){if(this.D9===AL)return;this.D9=AL;A.abo([this,this.AEp,this.AIF],0);
},AFT:function(E){if(this.K&&this.K.AFT)return this.K.AFT.apply(this,arguments);
else return C.DeviceClass.BvC.apply(this,arguments);},BvC:function(E){},Ba$:function(
Aq){this.AFT(Aq);},UpdateWatchListAction:function(AL){if(this.AVr===AL)return;this.
AVr=AL;A.abo([this,this.A85,this.Ba$],0);},AE5:function(E){if(this.K&&this.K.AE5
)return this.K.AE5.apply(this,arguments);else return C.DeviceClass.BuP.apply(this
,arguments);},BuP:function(E){},BaV:function(Aq){this.AE5(Aq);},UpdateFreshCowListAction:
function(AL){if(this.AOx===AL)return;this.AOx=AL;A.abo([this,this.A8m,this.BaV],
0);},ResetActiveActions:function(G){if(this.K&&this.K.ResetActiveActions)return this.
K.ResetActiveActions.apply(this,arguments);else return C.DeviceClass.BvO.apply(this
,arguments);},BvO:function(G){},BF8:function(s){this.ResetActiveActions(s);},ResetAutoActions:
function(G){if(this.K&&this.K.ResetAutoActions)return this.K.ResetAutoActions.apply(
this,arguments);else return C.DeviceClass.BvQ.apply(this,arguments);},BvQ:function(
G){},BF_:function(s){this.ResetAutoActions(s);},Awn:function(E){if(this.K&&this.
K.Awn)return this.K.Awn.apply(this,arguments);else return C.DeviceClass.Buv.apply(
this,arguments);},Buv:function(E){},BaM:function(Aq){this.Awn(Aq);},Ar2:function(
E){if(this.K&&this.K.Ar2)return this.K.Ar2.apply(this,arguments);else return C.DeviceClass.
Bvq.apply(this,arguments);},Bvq:function(E){},Ba6:function(Aq){this.Ar2(Aq);},Ar3:
function(E){if(this.K&&this.K.Ar3)return this.K.Ar3.apply(this,arguments);else return C.
DeviceClass.Bvr.apply(this,arguments);},Bvr:function(E){},Ba7:function(Aq){this.
Ar3(Aq);},Aso:function(G){if(this.K&&this.K.Aso)return this.K.Aso.apply(this,arguments
);else return C.DeviceClass.BvT.apply(this,arguments);},BvT:function(G){},BGb:function(
s){this.Aso(s);},UpdateTemperaturesLowString:function(AL){if(this.AGQ===AL)return;
this.AGQ=AL;A.abo([this,this.A8W,this.Ba7],0);},UpdateTemperaturesHighString:function(
AL){if(this.AGP===AL)return;this.AGP=AL;A.abo([this,this.A8V,this.Ba6],0);},UpdateAnimalTypesString:
function(AL){if(this.ABE===AL)return;this.ABE=AL;A.abo([this,this.A8b,this.BaM],
0);},AwG:function(E){if(this.K&&this.K.AwG)return this.K.AwG.apply(this,arguments
);else return C.DeviceClass.BuR.apply(this,arguments);},BuR:function(E){},BaX:function(
Aq){this.AwG(Aq);},UpdateFreshCowsHideMeasured:function(AL){if(this.AqO===AL)return;
this.AqO=AL;A.abo([this,this.A8o,this.BaX],0);},ArU:function(E){if(this.K&&this.
K.ArU)return this.K.ArU.apply(this,arguments);else return C.DeviceClass.Bu_.apply(
this,arguments);},Bu_:function(E){},Ba2:function(Aq){this.ArU(Aq);},UpdateNaisIdLastUsedMale:
function(Xj){if(this.AEc===Xj)return;this.AEc=Xj;A.abo([this,this.A8E,this.Ba2],
0);},ArT:function(E){if(this.K&&this.K.ArT)return this.K.ArT.apply(this,arguments
);else return C.DeviceClass.Bu9.apply(this,arguments);},Bu9:function(E){},Ba1:function(
Aq){this.ArT(Aq);},UpdateNaisIdLastUsedFemale:function(Xj){if(this.AEb===Xj)return;
this.AEb=Xj;A.abo([this,this.A8D,this.Ba1],0);},AwT:function(E){if(this.K&&this.
K.AwT)return this.K.AwT.apply(this,arguments);else return C.DeviceClass.Bu7.apply(
this,arguments);},Bu7:function(E){},AyH:function(Aq){this.AwT(Aq);},UpdateNaisIdIncrementMale:
function(Alm){if(this.ARI===Alm)return;this.ARI=Alm;A.abo([this,this.Awf,this.AyH
],0);},AwS:function(E){if(this.K&&this.K.AwS)return this.K.AwS.apply(this,arguments
);else return C.DeviceClass.Bu6.apply(this,arguments);},Bu6:function(E){},AyG:function(
Aq){this.AwS(Aq);},UpdateNaisIdIncrementFemale:function(Alm){if(this.ARH===Alm)return;
this.ARH=Alm;A.abo([this,this.Awe,this.AyG],0);},UpdateFirmware:function(){if(this.
K&&this.K.UpdateFirmware)return this.K.UpdateFirmware.apply(this,arguments);else
return C.DeviceClass.Bay.apply(this,arguments);},Bay:function(){},Ans:function(E
){if(this.K&&this.K.Ans)return this.K.Ans.apply(this,arguments);else return C.DeviceClass.
BuA.apply(this,arguments);},BuA:function(E){},BaP:function(Aq){this.Ans(Aq);},UpdateBootloaderMessage:
function(AL){if(this.Aqo===AL)return;this.Aqo=AL;A.abo([this,this.A8g,this.BaP],
0);},AEF:function(E){if(this.K&&this.K.AEF)return this.K.AEF.apply(this,arguments
);else return C.DeviceClass.Buj.apply(this,arguments);},Buj:function(E){},BaE:function(
Aq){this.AEF(Aq);},UpdateActionListAction:function(AL){if(this.ABx===AL)return;this.
ABx=AL;A.abo([this,this.A72,this.BaE],0);},Awl:function(E){if(this.K&&this.K.Awl
)return this.K.Awl.apply(this,arguments);else return C.DeviceClass.Buk.apply(this
,arguments);},Buk:function(E){},BaF:function(Aq){this.Awl(Aq);},UpdateActionListHideMeasured:
function(AL){if(this.Aqa===AL)return;this.Aqa=AL;A.abo([this,this.A73,this.BaF],
0);},Uj:function(E){if(this.K&&this.K.Uj)return this.K.Uj.apply(this,arguments);
else return C.DeviceClass.Bur.apply(this,arguments);},Bur:function(E){},Aow:function(
Aq){this.Uj(Aq);},UpdateAnimalIdGenerationMethod:function(Bb_){if(this.Ij===Bb_)
return;this.Ij=Bb_;A.abo([this,this.Anl,this.Aow],0);},Awy:function(E){if(this.K&&
this.K.Awy)return this.K.Awy.apply(this,arguments);else return C.DeviceClass.BuH.
apply(this,arguments);},BuH:function(E){},AZX:function(Aq){this.Awy(Aq);},UpdateDirectionOfCountingFemale:
function(Alg){if(this.ACs===Alg)return;this.ACs=Alg;A.abo([this,this.ASg,this.AZX
],0);},Awz:function(E){if(this.K&&this.K.Awz)return this.K.Awz.apply(this,arguments
);else return C.DeviceClass.BuI.apply(this,arguments);},BuI:function(E){},AZY:function(
Aq){this.Awz(Aq);},UpdateDirectionOfCountingMale:function(Alg){if(this.ACt===Alg
)return;this.ACt=Alg;A.abo([this,this.ASh,this.AZY],0);},AwA:function(E){if(this.
K&&this.K.AwA)return this.K.AwA.apply(this,arguments);else return C.DeviceClass.
BuJ.apply(this,arguments);},BuJ:function(E){},AIJ:function(Aq){this.AwA(Aq);},UpdateDirectionOfCountingUnisex:
function(Alg){if(this.AuY===Alg)return;this.AuY=Alg;A.abo([this,this.AEu,this.AIJ
],0);},ArP:function(E){if(this.K&&this.K.ArP)return this.K.ArP.apply(this,arguments
);else return C.DeviceClass.BuV.apply(this,arguments);},BuV:function(E){},Aox:function(
Aq){this.ArP(Aq);},UpdateIDLastUsedUnisex:function(Rq){if(this.AjR===Rq)return;this.
AjR=Rq;A.abo([this,this.Ano,this.Aox],0);},ArV:function(E){if(this.K&&this.K.ArV
)return this.K.ArV.apply(this,arguments);else return C.DeviceClass.Bu$.apply(this
,arguments);},Bu$:function(E){},AZ2:function(Aq){this.ArV(Aq);},UpdateNaisIdLastUsedUnisex:
function(Xj){if(this.Av0===Xj)return;this.Av0=Xj;A.abo([this,this.ASp,this.AZ2],
0);},AwU:function(E){if(this.K&&this.K.AwU)return this.K.AwU.apply(this,arguments
);else return C.DeviceClass.Bu8.apply(this,arguments);},Bu8:function(E){},AyI:function(
Aq){this.AwU(Aq);},UpdateNaisIdIncrementUnisex:function(Alm){if(this.ARJ===Alm)return;
this.ARJ=Alm;A.abo([this,this.Awg,this.AyI],0);},Akt:function(E){if(this.K&&this.
K.Akt)return this.K.Akt.apply(this,arguments);else return C.DeviceClass.BuL.apply(
this,arguments);},BuL:function(E){},AyD:function(Aq){this.Akt(Aq);},UpdateEartagNrAssignmentMode:
function(Alh){if(this.EartagNrAssignmentMode===Alh)return;this.EartagNrAssignmentMode=
Alh;A.abo([this,this.Av$,this.AyD],0);},NZ:function(E){if(this.K&&this.K.NZ)return this.
K.NZ.apply(this,arguments);else return C.DeviceClass.BuC.apply(this,arguments);}
,BuC:function(E){},Bv$:function(Aq){this.NZ(Aq);},UpdateBreed:function(AcX){if(this.
Breed===AcX)return;this.Breed=AcX;A.abo([this,this.Av7,this.Bv$],0);},AFn:function(
E){if(this.K&&this.K.AFn)return this.K.AFn.apply(this,arguments);else return C.DeviceClass.
Bu3.apply(this,arguments);},Bu3:function(E){},Bwc:function(Aq){this.AFn(Aq);},UpdateMiddlewareVersions:
function(Qf,A0K,A0L,A0S,A0z){this.Sz.OnSetTimestamp(Qf);this.Sz.AFi(A0K);this.Sz.
AFo(A0L);this.Sz.AFx(A0S);this.Sz.AEZ(A0z);A.abo([this,this.BkO,this.Bwc],0);},AFh:
function(E){if(this.K&&this.K.AFh)return this.K.AFh.apply(this,arguments);else return C.
DeviceClass.BuX.apply(this,arguments);},BuX:function(E){},Bwb:function(Aq){this.
AFh(Aq);},UpdateMainboardVersions:function(Qf,A0I,A0J,A0H,A0Y,A0Z,A0X){this.QZ.OnSetTimestamp(
Qf);this.QZ.AFf(A0I);this.QZ.AFg(A0J);this.QZ.AFe(A0H);this.QZ.AFL(A0Y);this.QZ.
AFM(A0Z);this.QZ.AFK(A0X);A.abo([this,this.BkM,this.Bwb],0);},AFN:function(E){if(
this.K&&this.K.AFN)return this.K.AFN.apply(this,arguments);else return C.DeviceClass.
Bvt.apply(this,arguments);},Bvt:function(E){},Bwi:function(Aq){this.AFN(Aq);},UpdateTorchboardVersions:
function(Qf,A0I,A0J,A0H,A0Y,A0Z,A0X){this.SY.OnSetTimestamp(Qf);this.SY.AFf(A0I);
this.SY.AFg(A0J);this.SY.AFe(A0H);this.SY.AFL(A0Y);this.SY.AFM(A0Z);this.SY.AFK(
A0X);A.abo([this,this.Bla,this.Bwi],0);},AEP:function(E){if(this.K&&this.K.AEP)return this.
K.AEP.apply(this,arguments);else return C.DeviceClass.BuB.apply(this,arguments);
},BuB:function(E){},Bv_:function(Aq){this.AEP(Aq);},UpdateBootloaderVersions:function(
Qf,A0K,A0L,A0S,A0z){this.R0.OnSetTimestamp(Qf);this.R0.AFi(A0K);this.R0.AFo(A0L);
this.R0.AFx(A0S);this.R0.AEZ(A0z);A.abo([this,this.Bkk,this.Bv_],0);},AE1:function(
E){if(this.K&&this.K.AE1)return this.K.AE1.apply(this,arguments);else return C.DeviceClass.
BuK.apply(this,arguments);},BuK:function(E){},BaS:function(Aq){this.AE1(Aq);},UpdateDryCowListAction:
function(AL){if(this.ANV===AL)return;this.ANV=AL;A.abo([this,this.A8i,this.BaS],
0);},AJz:function(A0A){if(this.K&&this.K.AJz)return this.K.AJz.apply(this,arguments
);else return C.DeviceClass.Bwu.apply(this,arguments);},Bwu:function(A0A){return false;
},AEO:function(E){if(this.K&&this.K.AEO)return this.K.AEO.apply(this,arguments);
else return C.DeviceClass.Buz.apply(this,arguments);},Buz:function(E){},AIH:function(
Aq){this.AEO(Aq);},UpdateBirthListView:function(AL){if(this.Aqm===AL)return;this.
Aqm=AL;A.abo([this,this.AEr,this.AIH],0);},BatchResetBirthNoticePending:function(
){var O;var AiV=0;var Adg=A._GetAutoObject(C.Device).An.Filter;var Be=A._GetAutoObject(
C.Helper).AOB();A._GetAutoObject(C.Device).An.Bk(Be);for(O=0;O<A._GetAutoObject(
C.Device).An.B9();O++){A._GetAutoObject(C.Helper).G7(O);A._GetAutoObject(C.Helper
).W.Ae4(false);A._GetAutoObject(C.Helper).W.Ch(A._GetAutoObject(C.Device).An);AiV++;
}A._GetAutoObject(C.Device).An.Bk(Adg);return AiV;},UpdateTransferProgress:function(
AL){if(this.AxL===AL)return;this.AxL=AL;A.abo([this,this.ASC,this.AZ$],0);},AFO:
function(E){if(this.K&&this.K.AFO)return this.K.AFO.apply(this,arguments);else return C.
DeviceClass.Bvu.apply(this,arguments);},Bvu:function(E){A.ab5("%s",P9);},AZ$:function(
Aq){this.AFO(Aq);},UpdateTransferTarget:function(AL){if(this.Afp===AL)return;this.
Afp=AL;A.abo([this,this.A8Z,this.Ba8],0);},Ar4:function(E){if(this.K&&this.K.Ar4
)return this.K.Ar4.apply(this,arguments);else return C.DeviceClass.Bvv.apply(this
,arguments);},Bvv:function(E){A.ab5("%s",J1);},Ba8:function(Aq){this.Ar4(Aq);},AsC:
function(){if(this.K&&this.K.AsC)return this.K.AsC.apply(this,arguments);else return C.
DeviceClass.Bv4.apply(this,arguments);},Bv4:function(){},AwY:function(E){if(this.
K&&this.K.AwY)return this.K.AwY.apply(this,arguments);else return C.DeviceClass.
Bvf.apply(this,arguments);},Bvf:function(E){},AZ5:function(Aq){this.AwY(Aq);},UpdatePremisesID:
function(Rq){if(this.PV===Rq)return;this.PV=Rq;A.abo([this,this.ASu,this.AZ5],0);
},AwR:function(E){if(this.K&&this.K.AwR)return this.K.AwR.apply(this,arguments);
else return C.DeviceClass.Bu5.apply(this,arguments);},Bu5:function(E){},AIM:function(
Aq){this.AwR(Aq);},UpdateMotherSelectionDriedOffFilter:function(AL){if(this.AbS===
AL)return;this.AbS=AL;A.abo([this,this.AEy,this.AIM],0);},AE6:function(E){if(this.
K&&this.K.AE6)return this.K.AE6.apply(this,arguments);else return C.DeviceClass.
BuQ.apply(this,arguments);},BuQ:function(E){},BaW:function(Aq){this.AE6(Aq);},UpdateFreshCowSpan:
function(AL){if(this.AqN===AL)return;this.AqN=AL;A.abo([this,this.A8n,this.BaW],
0);},UpdateUSBDevice:function(Bb1,Bb2,BbS){if(((this.P1.ZX===Bb1)&&(this.P1.AsM===
Bb2))&&(this.P1.Ase===BbS))return;this.P1.A_p(Bb1);this.P1.A_r(Bb2);this.P1.A97(
BbS);A.abo([this,this.Ww,this.Xc],0);},AFP:function(E){if(this.K&&this.K.AFP)return this.
K.AFP.apply(this,arguments);else return C.DeviceClass.Bvy.apply(this,arguments);
},Bvy:function(E){A.ab5("%s",E6);},Xc:function(Aq){this.AFP(Aq);},AxB:function(){
if(this.K&&this.K.AxB)return this.K.AxB.apply(this,arguments);else return C.DeviceClass.
BvY.apply(this,arguments);},BvY:function(){},Arb:function(){if(this.K&&this.K.Arb
)return this.K.Arb.apply(this,arguments);else return C.DeviceClass.Bui.apply(this
,arguments);},Bui:function(){return false;},Aqy:function(){if(this.K&&this.K.Aqy
)return this.K.Aqy.apply(this,arguments);else return C.DeviceClass.Bud.apply(this
,arguments);},Bud:function(){},AFA:function(E){if(this.K&&this.K.AFA)return this.
K.AFA.apply(this,arguments);else return C.DeviceClass.Bvk.apply(this,arguments);
},Bvk:function(E){},Bwf:function(Aq){this.AFA(Aq);},UpdateSerialNumber:function(
AL){if(this.AhG===AL)return;this.AhG=AL;A.abo([this,this.Bk1,this.Bwf],0);},Awm:
function(E){if(this.K&&this.K.Awm)return this.K.Awm.apply(this,arguments);else return C.
DeviceClass.Buq.apply(this,arguments);},Buq:function(E){},AZW:function(Aq){this.
Awm(Aq);},UpdateAnimalIdAutoGenerationMethod:function(Bb9){if(this.Agw===Bb9)return;
this.Agw=Bb9;A.abo([this,this.ASb,this.AZW],0);},ACg:function(){return false;},AGi:
function(){return false;},AFC:function(E){if(this.K&&this.K.AFC)return this.K.AFC.
apply(this,arguments);else return C.DeviceClass.Bvl.apply(this,arguments);},Bvl:
function(E){},Ba5:function(Aq){this.AFC(Aq);},UpdateShutdownTimer:function(AL){if(
this.AUD===AL)return;this.AUD=AL;A.abo([this,this.A8S,this.Ba5],0);},Asp:function(
G){if(this.K&&this.K.Asp)return this.K.Asp.apply(this,arguments);else return C.DeviceClass.
BvU.apply(this,arguments);},BvU:function(G){},BGc:function(s){this.Asp(s);},Ar7:
function(E){if(this.K&&this.K.Ar7)return this.K.Ar7.apply(this,arguments);else return C.
DeviceClass.BvE.apply(this,arguments);},BvE:function(E){},Bbb:function(Aq){this.
Ar7(Aq);},Ar8:function(E){if(this.K&&this.K.Ar8)return this.K.Ar8.apply(this,arguments
);else return C.DeviceClass.BvF.apply(this,arguments);},BvF:function(E){},Bbc:function(
Aq){this.Ar8(Aq);},UpdateWeightGainsLowString:function(AL){if(this.AG$===AL)return;
this.AG$=AL;A.abo([this,this.A88,this.Bbc],0);},UpdateWeightGainsHighString:function(
AL){if(this.AG_===AL)return;this.AG_=AL;A.abo([this,this.A87,this.Bbb],0);},Awo:
function(E){if(this.K&&this.K.Awo)return this.K.Awo.apply(this,arguments);else return C.
DeviceClass.Buw.apply(this,arguments);},Buw:function(E){},BaN:function(Aq){this.
Awo(Aq);},UpdateAnimalTypesWeightGainsString:function(AL){if(this.ABF===AL)return;
this.ABF=AL;A.abo([this,this.A8c,this.BaN],0);},Ar6:function(E){if(this.K&&this.
K.Ar6)return this.K.Ar6.apply(this,arguments);else return C.DeviceClass.BvD.apply(
this,arguments);},BvD:function(E){},Bba:function(Aq){this.Ar6(Aq);},Ar9:function(
E){if(this.K&&this.K.Ar9)return this.K.Ar9.apply(this,arguments);else return C.DeviceClass.
BvJ.apply(this,arguments);},BvJ:function(E){},Bbf:function(Aq){this.Ar9(Aq);},UpdateWeightValueBirthString:
function(AL){if(this.AHc===AL)return;this.AHc=AL;A.abo([this,this.A8$,this.Bbf],
0);},UpdateWeightGainsAverageString:function(AL){if(this.AG9===AL)return;this.AG9=
AL;A.abo([this,this.A86,this.Bba],0);},AwB:function(E){if(this.K&&this.K.AwB)return this.
K.AwB.apply(this,arguments);else return C.DeviceClass.BuM.apply(this,arguments);
},BuM:function(E){},Bwa:function(Aq){this.AwB(Aq);},UpdateEvaluationAnimalType:function(
En){if(this.ACA===En)return;this.ACA=En;A.abo([this,this.Bkv,this.Bwa],0);},UpdateStartScreen:
function(AL){if(this.AxD===AL)return;this.AxD=AL;A.abo([this,this.Bk2,this.Bwg],
0);},Aw2:function(E){if(this.K&&this.K.Aw2)return this.K.Aw2.apply(this,arguments
);else return C.DeviceClass.Bvm.apply(this,arguments);},Bvm:function(E){},Bwg:function(
Aq){this.Aw2(Aq);},ADP:function(){if(this.K&&this.K.ADP)return this.K.ADP.apply(
this,arguments);else return C.DeviceClass.Bug.apply(this,arguments);},Bug:function(
){return 1;},ADQ:function(){if(this.K&&this.K.ADQ)return this.K.ADQ.apply(this,arguments
);else return C.DeviceClass.Buh.apply(this,arguments);},Buh:function(){return 1;
},GetCommitCount:function(){return 1953;},GetCommitEpoch:function(){return 1711385184;
},GetCommitHash:function(){return A.kR.Bhr;},GetVersionMajor:function(){return 0;
},GetVersionMinor:function(){return 9;},GetVersionRev:function(){return 9;},AFm:
function(E){if(this.K&&this.K.AFm)return this.K.AFm.apply(this,arguments);else return C.
DeviceClass.Bu1.apply(this,arguments);},Bu1:function(E){},Ba0:function(Aq){this.
AFm(Aq);},UpdateMaximumAgeNewOnFarm:function(AL){if(this.AvV===AL)return;this.AvV=
AL;A.abo([this,this.A8C,this.Ba0],0);},Aw8:function(E){if(this.K&&this.K.Aw8)return this.
K.Aw8.apply(this,arguments);else return C.DeviceClass.Bvw.apply(this,arguments);
},Bvw:function(E){},A0a:function(Aq){this.Aw8(Aq);},UpdateTransponderAssignmentIdChangeMethod:
function(AyY){if(this.Ak1===AyY)return;this.Ak1=AyY;A.abo([this,this.ASD,this.A0a
],0);},BatchResetPurchasedNoticePending:function(){var O;var AiV=0;var Adg=A._GetAutoObject(
C.Device).An.Filter;var Be=A._GetAutoObject(C.Helper).Avm();A._GetAutoObject(C.Device
).An.Bk(Be);for(O=0;O<A._GetAutoObject(C.Device).An.B9();O++){A._GetAutoObject(C.
Helper).G7(O);A._GetAutoObject(C.Helper).W.Ae4(false);A._GetAutoObject(C.Helper).
W.Ch(A._GetAutoObject(C.Device).An);AiV++;}A._GetAutoObject(C.Device).An.Bk(Adg);
return AiV;},BmQ:function(E){},UpdateMassRecordingAutomatic:function(AL){if(this.
ARu===AL)return;this.ARu=AL;A.abo([this,this.BkN,this.BmQ],0);},Nf:function(E){if(
this.K&&this.K.Nf)return this.K.Nf.apply(this,arguments);else return C.DeviceClass.
BvK.apply(this,arguments);},BvK:function(E){},Bwj:function(Aq){this.Nf(Aq);},UpdateWhereAbouts:
function(AfJ){if(this.WhereAbouts===AfJ)return;this.WhereAbouts=AfJ;A.abo([this,
this.Awj,this.Bwj],0);},ArB:function(E){if(this.K&&this.K.ArB)return this.K.ArB.
apply(this,arguments);else return C.DeviceClass.Bul.apply(this,arguments);},Bul:
function(E){},BaH:function(Aq){this.ArB(Aq);},ArC:function(E){if(this.K&&this.K.
ArC)return this.K.ArC.apply(this,arguments);else return C.DeviceClass.Bum.apply(
this,arguments);},Bum:function(E){},BaI:function(Aq){this.ArC(Aq);},UpdateActiveMassRecordingFields:
function(AL){if(this.ABy===AL)return;this.ABy=AL;A.abo([this,this.A75,this.BaH],
0);},UpdateActiveMassRecordingFieldsOrder:function(AL){if(this.ABz===AL)return;this.
ABz=AL;A.abo([this,this.A76,this.BaI],0);},Asm:function(G){if(this.K&&this.K.Asm
)return this.K.Asm.apply(this,arguments);else return C.DeviceClass.BvP.apply(this
,arguments);},BvP:function(G){},BF9:function(s){this.Asm(s);},AFk:function(E){if(
this.K&&this.K.AFk)return this.K.AFk.apply(this,arguments);else return C.DeviceClass.
BuY.apply(this,arguments);},BuY:function(E){},AIK:function(Aq){this.AFk(Aq);},UpdateMassRecordingDateOfBirthMandatory:
function(AL){if(this.AeM===AL)return;this.AeM=AL;A.abo([this,this.AEv,this.AIK],
0);},AFj:function(E){this.UpdateMassRecordingCounter(E);},UpdateMassRecordingCounter:
function(AL){if(this.AvT===AL)return;this.AvT=AL;A.abo([this,this.A8A,this.AFj],
0);},Ajy:function(){if(this.K&&this.K.Ajy)return this.K.Ajy.apply(this,arguments
);else return C.DeviceClass.Bub.apply(this,arguments);},Bub:function(){return false;
},Aqk:function(){if(this.K&&this.K.Aqk)return this.K.Aqk.apply(this,arguments);else
return C.DeviceClass.Bua.apply(this,arguments);},Bua:function(){return false;},Aqj:
function(){if(this.K&&this.K.Aqj)return this.K.Aqj.apply(this,arguments);else return C.
DeviceClass.Bt$.apply(this,arguments);},Bt$:function(){return false;},AuM:function(
){if(this.K&&this.K.AuM)return this.K.AuM.apply(this,arguments);else return C.DeviceClass.
Buc.apply(this,arguments);},Buc:function(){return false;},AwO:function(E){if(this.
K&&this.K.AwO)return this.K.AwO.apply(this,arguments);else return C.DeviceClass.
Bu0.apply(this,arguments);},Bu0:function(E){},BaZ:function(Aq){this.AwO(Aq);},UpdateMaxWeightValuePrecision:
function(AL){if(this.OK===AL)return;this.OK=AL;A.abo([this,this.A8B,this.BaZ],0);
},AwV:function(E){if(this.K&&this.K.AwV)return this.K.AwV.apply(this,arguments);
else return C.DeviceClass.Bva.apply(this,arguments);},Bva:function(E){},Ba3:function(
Aq){this.AwV(Aq);},UpdateNoNaisIdListActions:function(AL){if(this.ARV===AL)return;
this.ARV=AL;A.abo([this,this.A8F,this.Ba3],0);},ResetNoNaisIdListActions:function(
G){if(this.K&&this.K.ResetNoNaisIdListActions)return this.K.ResetNoNaisIdListActions.
apply(this,arguments);else return C.DeviceClass.BvR.apply(this,arguments);},BvR:
function(G){},BF$:function(s){this.ResetNoNaisIdListActions(s);},AwW:function(E){
if(this.K&&this.K.AwW)return this.K.AwW.apply(this,arguments);else return C.DeviceClass.
Bvb.apply(this,arguments);},Bvb:function(E){},Ba4:function(Aq){this.AwW(Aq);},UpdateNoTransponderListActions:
function(AL){if(this.AR0===AL)return;this.AR0=AL;A.abo([this,this.A8G,this.Ba4],
0);},ResetNoTransponderListActions:function(G){if(this.K&&this.K.ResetNoTransponderListActions
)return this.K.ResetNoTransponderListActions.apply(this,arguments);else return C.
DeviceClass.BvS.apply(this,arguments);},BvS:function(G){},BGa:function(s){this.ResetNoTransponderListActions(
s);},Axc:function(E){if(this.K&&this.K.Axc)return this.K.Axc.apply(this,arguments
);else return C.DeviceClass.BvL.apply(this,arguments);},BvL:function(E){},Bbg:function(
Aq){this.Axc(Aq);},UpdateYoungNoTransponderListActions:function(AL){if(this.AVG===
AL)return;this.AVG=AL;A.abo([this,this.A9b,this.Bbg],0);},ResetYoungNoTransponderListActions:
function(G){if(this.K&&this.K.ResetYoungNoTransponderListActions)return this.K.ResetYoungNoTransponderListActions.
apply(this,arguments);else return C.DeviceClass.BvV.apply(this,arguments);},BvV:
function(G){},BGd:function(s){this.ResetYoungNoTransponderListActions(s);},Aw9:function(
E){if(this.K&&this.K.Aw9)return this.K.Aw9.apply(this,arguments);else return C.DeviceClass.
Bvx.apply(this,arguments);},Bvx:function(E){},A0b:function(Aq){this.Aw9(Aq);},UpdateTransponderUnlinkIdChangeMethod:
function(AyY){if(this.An1===AyY)return;this.An1=AyY;A.abo([this,this.ASE,this.A0b
],0);},Asl:function(AoA){if(this.K&&this.K.Asl)return this.K.Asl.apply(this,arguments
);else return C.DeviceClass.BvN.apply(this,arguments);},BvN:function(AoA){this.GC.
E5();this.GC.AgJ=AoA;this.GC.Fb(1);A._GetAutoObject(C.Device).A5(110,true,A.jV,0
,[this,this.Bz_]);},Bz_:function(G){var As=(C.PopupContext.isPrototypeOf(G)?G:null
);if(!!As&&(As.PopupState===9))A.aaS([this,this.BBP],this);},BBP:function(G){this.
GC.Fb(2);this.AxB();A._GetAutoObject(C.Device).A5(110,false,A.jV,0,null);},AEo:function(
){return this.Ii;},Av5:function(){return this.Aa2;},Av8:function(){return this.Amy;
},ASx:function(){return this.ScanState;},AEw:function(){return this.MeasureState;
},AEA:function(){return this.Lt;},A8w:function(){return this.Language;},Aru:function(
){return this.TemperatureUnit;},A8h:function(){return this.AMX;},ASo:function(){
return this.AEa;},Awi:function(){return this.OverlayMenu;},A80:function(){return this.
AcD;},ASz:function(){return this.SyncState;},A81:function(){return this.AsN;},AEB:
function(){return this.AVp;},ASw:function(){return this.RatingMode;},Arr:function(
){return this.AmM;},ASB:function(){return this.AU7;},BkU:function(){return this.
ATT;},Bkh:function(){return this.AutoRegistrationMode;},ASy:function(){return this.
OR;},Uh:function(){return this.A1;},Ui:function(){return this.AF;},AEC:function(
){return this.KW;},ASn:function(){return this.MassUnit;},A74:function(){return this.
Pk;},ASa:function(){return this.Auy;},A8d:function(){return this.AutoActions;},PP:
function(){return this.AnimalType;},A89:function(){return this.WeightRecordingMode;
},ASt:function(){return this.AF5;},AEt:function(){return this.HF;},A79:function(
){return this.AdQ;},A8_:function(){return this.WeightRecordingScope;},Wv:function(
){return this.Gender;},Awb:function(){return this.Aq1;},Awa:function(){return this.
Aq0;},AEq:function(){return this.Kj;},A7$:function(){return this.AL7;},A8k:function(
){return this.AmL;},AEp:function(){return this.D9;},A85:function(){return this.AVr;
},A8m:function(){return this.AOx;},A8b:function(){return this.ABE;},A8V:function(
){return this.AGP;},A8W:function(){return this.AGQ;},A8o:function(){return this.
AqO;},A8E:function(){return this.AEc;},A8D:function(){return this.AEb;},Awf:function(
){return this.ARI;},Awe:function(){return this.ARH;},A8g:function(){return this.
Aqo;},A72:function(){return this.ABx;},A73:function(){return this.Aqa;},Anl:function(
){return this.Ij;},ASg:function(){return this.ACs;},ASh:function(){return this.ACt;
},AEu:function(){return this.AuY;},Ano:function(){return this.AjR;},ASp:function(
){return this.Av0;},Awg:function(){return this.ARJ;},Av$:function(){return this.
EartagNrAssignmentMode;},Av7:function(){return this.Breed;},BkO:function(){return this.
Sz;},BkM:function(){return this.QZ;},Bla:function(){return this.SY;},Bkk:function(
){return this.R0;},A8i:function(){return this.ANV;},AEr:function(){return this.Aqm;
},ASC:function(){return this.AxL;},A8Z:function(){return this.Afp;},ASu:function(
){return this.PV;},AEy:function(){return this.AbS;},A8n:function(){return this.AqN;
},Ww:function(){return this.P1;},Bk1:function(){return this.AhG;},ASb:function(){
return this.Agw;},A8S:function(){return this.AUD;},A87:function(){return this.AG_;
},A88:function(){return this.AG$;},A8c:function(){return this.ABF;},A86:function(
){return this.AG9;},A8$:function(){return this.AHc;},Bkv:function(){return this.
ACA;},Bk2:function(){return this.AxD;},A8C:function(){return this.AvV;},ASD:function(
){return this.Ak1;},BkN:function(){return this.ARu;},Awj:function(){return this.
WhereAbouts;},A75:function(){return this.ABy;},A76:function(){return this.ABz;},
AEv:function(){return this.AeM;},A8A:function(){return this.AvT;},A8B:function(){
return this.OK;},A8F:function(){return this.ARV;},A8G:function(){return this.AR0;
},A9b:function(){return this.AVG;},ASE:function(){return this.An1;},_Init:function(
aArg){C.Table._Init.call(this.An={I:this},0);C.Table._Init.call(this.Bt={I:this}
,0);C.Table._Init.call(this.Agu={I:this},0);A.Core.A$l._Init.call(this.AnJ={I:this
},0);C.Table._Init.call(this.Po={I:this},0);this.__proto__=C.DeviceClass;this.An.
OnSetId(0);this.Bt.OnSetId(1);this.Agu.OnSetId(3);this.Po.OnSetId(4);this.OR=A._NewObject(
C.Transponder,0);this.Sz=A._NewObject(C.AxA,0);this.QZ=A._NewObject(C.Avp,0);this.
SY=A._NewObject(C.Avp,0);this.R0=A._NewObject(C.AxA,0);this.P1=A._NewObject(C.A$C
,0);this.GC=A._NewObject(C.VP,0);var J2=this._variants();if(J2){this.K={};J2._Init.
call(this,aArg);}A.h7++;},_Done:function(){if(this.K)this.K._Done.call(this);this.
__proto__=null;this.An._Done();this.Bt._Done();this.Agu._Done();this.AnJ._Done();
this.Po._Done();A.h7--;},_ReInit:function(){this.An._ReInit();this.Bt._ReInit();
this.Agu._ReInit();this.AnJ._ReInit();this.Po._ReInit();if(this.K)this.K._ReInit.
call(this);},_Mark:function(D){var B;if((B=this.OR)&&(B._cycle!=D))B._Mark(B._cycle=
D);if((B=this.Sz)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.QZ)&&(B._cycle!=
D))B._Mark(B._cycle=D);if((B=this.SY)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.
R0)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.P1)&&(B._cycle!=D))B._Mark(B._cycle=
D);if((B=this.GC)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.An)._cycle!=D)B.
_Mark(B._cycle=D);if((B=this.Bt)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Agu)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.AnJ)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
Po)._cycle!=D)B._Mark(B._cycle=D);if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=
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
A4:A.jV,Abg:function(){var Av=A._NewObject(C.StringFilterCriterion,0);Av.E_(this
);return Av;},E_:function(AI){C.FilterCriterion.E_.call(this,AI);var Av=(C.StringFilterCriterion.
isPrototypeOf(AI)?AI:null);if(!!Av)this.A4=Av.A4;},_Init:function(aArg){C.FilterCriterion.
_Init.call(this,aArg);this.__proto__=C.StringFilterCriterion;},_className:"Device::StringFilterCriterion"
};C.Table={CF:function(Ad,A3){if(this.K&&this.K.CF)return this.K.CF.apply(this,arguments
);else return C.ITable.CF.apply(this,arguments);},VY:function(Ad,A3){if(this.K&&
this.K.VY)return this.K.VY.apply(this,arguments);else return C.ITable.VY.apply(this
,arguments);},H2:function(Ad,A3){if(this.K&&this.K.H2)return this.K.H2.apply(this
,arguments);else return C.ITable.H2.apply(this,arguments);},OnSetId:function(E){
if(this.K&&this.K.OnSetId)return this.K.OnSetId.apply(this,arguments);else return C.
ITable.OnSetId.apply(this,arguments);},B9:function(){if(this.K&&this.K.B9)return this.
K.B9.apply(this,arguments);else return C.ITable.B9.apply(this,arguments);},Bk:function(
E){if(this.K&&this.K.Bk)return this.K.Bk.apply(this,arguments);else return C.ITable.
Bk.apply(this,arguments);},VZ:function(Ad,A3){if(this.K&&this.K.VZ)return this.K.
VZ.apply(this,arguments);else return C.ITable.VZ.apply(this,arguments);},Sk:function(
Ad,A3){if(this.K&&this.K.Sk)return this.K.Sk.apply(this,arguments);else return C.
ITable.Sk.apply(this,arguments);},Oy:function(){if(this.K&&this.K.Oy)return this.
K.Oy.apply(this,arguments);else return C.ITable.Oy.apply(this,arguments);},OA:function(
AoM){if(this.K&&this.K.OA)return this.K.OA.apply(this,arguments);else return C.ITable.
OA.apply(this,arguments);},YB:function(){if(this.K&&this.K.YB)return this.K.YB.apply(
this,arguments);else return C.ITable.YB.apply(this,arguments);},ZH:function(Ad,A3
,CZ){if(this.K&&this.K.ZH)return this.K.ZH.apply(this,arguments);else return C.ITable.
ZH.apply(this,arguments);},Hn:function(Ad,A3,CZ){if(this.K&&this.K.Hn)return this.
K.Hn.apply(this,arguments);else return C.ITable.Hn.apply(this,arguments);},ZG:function(
Ad,A3,CZ){if(this.K&&this.K.ZG)return this.K.ZG.apply(this,arguments);else return C.
ITable.ZG.apply(this,arguments);},N5:function(Ad,A3,CZ){if(this.K&&this.K.N5)return this.
K.N5.apply(this,arguments);else return C.ITable.N5.apply(this,arguments);},ZF:function(
Ad,A3,CZ){if(this.K&&this.K.ZF)return this.K.ZF.apply(this,arguments);else return C.
ITable.ZF.apply(this,arguments);},LS:function(aColumn,A_){if(this.K&&this.K.LS)return this.
K.LS.apply(this,arguments);else return C.ITable.LS.apply(this,arguments);},KN:function(
Ad,A3){if(this.K&&this.K.KN)return this.K.KN.apply(this,arguments);else return C.
ITable.KN.apply(this,arguments);},Uy:function(Ad,A3,CZ){if(this.K&&this.K.Uy)return this.
K.Uy.apply(this,arguments);else return C.ITable.Uy.apply(this,arguments);},AgV:function(
aColumn,A_){if(this.K&&this.K.AgV)return this.K.AgV.apply(this,arguments);else return C.
ITable.AgV.apply(this,arguments);},E5:function(){if(this.K&&this.K.E5)return this.
K.E5.apply(this,arguments);else return C.ITable.E5.apply(this,arguments);},AjH:function(
aColumn,A_){if(this.K&&this.K.AjH)return this.K.AjH.apply(this,arguments);else return C.
ITable.AjH.apply(this,arguments);},Aej:function(aColumn,A_){if(this.K&&this.K.Aej
)return this.K.Aej.apply(this,arguments);else return C.ITable.Aej.apply(this,arguments
);},HI:function(){if(this.K&&this.K.HI)return this.K.HI.apply(this,arguments);else
return C.ITable.HI.apply(this,arguments);},Abo:function(){if(this.K&&this.K.Abo)
return this.K.Abo.apply(this,arguments);else return C.ITable.Abo.apply(this,arguments
);},QI:function(){if(this.K&&this.K.QI)return this.K.QI.apply(this,arguments);else
return C.ITable.QI.apply(this,arguments);},_Init:function(aArg){C.ITable._Init.call(
this,aArg);this.__proto__=C.Table;var J2=this._variants();if(J2){this.K={};J2._Init.
call(this,aArg);}},_Done:function(){if(this.K)this.K._Done.call(this);this.__proto__=
C.ITable;C.ITable._Done.call(this);},_ReInit:function(){C.ITable._ReInit.call(this
);if(this.K)this.K._ReInit.call(this);},_Mark:function(D){C.ITable._Mark.call(this
,D);if(this.K)this.K._Mark(D);},_variants:function(){return A.acs.Table._variants(
);},K:null,_className:"Device::Table"};C.TableId={Animal:0,Rating:1,Undefined:2,
AnimalGroup:3,CalfDeregistrations:4};C.ScanState={Idle:0,Progress:1,IdScanned:2,
NotFound:3,Error:4,LAST:5};C.RatedAttribute={None:0,Feed:1,Appearance:2,Respiratory:
3,Faeces:4};C.ConverterClass={M0:null,AkY:function(AoK){var BcI;var Auk=this.AUW(
AoK/100,0,A._GetAutoObject(C.Device).TemperatureUnit);BcI=A.abk(Auk,0,1);return BcI;
},A$t:function(Nn){if(Nn<=0)return 0;else if(Nn<=1)return 5;else if(Nn<=2)return 3;
else if(Nn<=4)return 2;else if(Nn<=6)return 1;else if(Nn<=8)return 4;else return 0;
},AdZ:function(Nn){var a=0;switch(Nn){case 3:a=2;break;case 2:a=4;break;case 1:a=
6;break;case 0:a=0;break;case 4:a=8;break;case 5:a=1;break;default:A.ab5("%s",N$
);}return a;},AsE:function(En,Ru){var Nq=A._GetAutoObject(C.Converter).Ajk(Ru,En
);switch(Nq){case 3:return 1;case 2:return 2;case 1:return 3;case 0:return 4;default:
throw new Error(P_+Nq.toFixed());}},AhO:function(){var B;var D8=A._NewObject(A.Core.
Bs,0).Initialize(A._GetAutoObject(C.Helper).Dv());D8.Anw(0);D8.Anz(0);D8.AnC(0);
return((B=(D8.JQ()|0))<0)?B+0x100000000:B;},Bhv:function(Ati){var Do;switch(Ati){
case 36:Do=MG;break;case 40:Do=S9;break;case 56:Do=UQ;break;case 70:Do=Z1;break;
case 100:Do=W1;break;case 124:Do=It;break;case 156:Do=UR;break;case 158:Do=Z2;break;
case 191:Do=W2;break;case 196:Do=Z3;break;case 203:Do=W3;break;case 208:Do=Z4;break;
case 233:Do=Z5;break;case 246:Do=US;break;case 250:Do=W4;break;case 276:Do=O3;break;
case 300:Do=Z6;break;case 348:Do=O4;break;case 372:Do=Rl;break;case 380:Do=W5;break;
case 392:Do=W6;break;case 428:Do=UT;break;case 440:Do=Z7;break;case 442:Do=Z8;break;
case 470:Do=W7;break;case 528:Do=W8;break;case 578:Do=S_;break;case 616:Do=UU;break;
case 620:Do=UV;break;case 642:Do=AcK;break;case 643:Do=S$;break;case 703:Do=Z9;break;
case 705:Do=Afz;break;case 724:Do=Z_;break;case 752:Do=W9;break;case 756:Do=Z$;break;
case 792:Do=W_;break;case 804:Do=AhS;break;case 826:Do=KY;break;case 840:Do=AcL;
break;default:Do=Ati.toFixed();}return Do;},Ak7:function(ML){var Aao;if((ML<10000
)&&(A._GetAutoObject(C.Device).OK===2))Aao=2;else if((ML<100000)&&!!A._GetAutoObject(
C.Device).OK)Aao=1;else Aao=0;return this.S8(ML,Aao,false);},AxY:function(ML,Aao
){return this.S8(ML,Aao,false);},S8:function(ML,Aao,BzD){var B;var Alz=A.jV;switch(
A._GetAutoObject(C.Device).MassUnit){case 0:if(BzD)Alz=A.abl(ML,0,0);else{var Bd5=
ML<0;if(Aao<3)ML=ML+(((Bd5?-1:1)*5)*(Math.pow(10,2-Aao)|0));Alz=(((((B=ML)>-2147483648
)?Math.abs(B):B)/1000)|0).toFixed();if(Aao>0)Alz=Alz+(Lv+A.abV(A.abl((((B=ML)>-2147483648
)?Math.abs(B):B)%1000,3,10),Aao));if(Bd5)Alz=AhT+Alz;}break;case 1:Alz=A.abk(ML/
453.592,0,Aao);break;default:A.ab5("%s%s",An$,A._GetAutoObject(C.Device).MassUnit.
toFixed());}return Alz;},Rh:function(Ji){var A4d=Ji.toFixed();var Bgk=A4d.length;
if((Bgk>=14)&&(Bgk<=15)){var A16=this.AxO(Ji);var Byu=A._GetAutoObject(C.Converter
).Bhv(A16);A4d=(Byu+Oa)+A.abm(A._GetAutoObject(C.Helper).Si(Ji,0,12),12,10);}return A4d;
},AmP:function(L4){switch(L4){case 0:return A.aaL(A.ach.AQp);case 1:return A.aaL(
A.ach.ADx);case 2:return A.aaL(A.ach.ADC);default:{A.ab5("%s%e",W$,L4);return null;
}}},A4R:function(Bx2){switch(Bx2){case 0:return A.aaL(A.ach.Avz);case 1:return A.
aaL(A.ach.ADt);case 2:return A.aaL(A.ach.AQj);default:throw new Error(Aaa);}},AdX:
function(AJf){switch(AJf){case 0:case 14:return A.aaL(A.ach.AjS);case 2:return A.
aaL(A.ach.AmX);case 1:return A.aaL(A.ach.Abz);case 3:switch(A._GetAutoObject(C.Device
).MassUnit){case 0:return A.aaL(A.ach.AvI);case 1:return A.aaL(A.ach.AvJ);default:
throw new Error(AhU+A._GetAutoObject(C.Device).MassUnit.toFixed());}break;case 4:
return A.aaL(A.ach.APL);case 5:return A.aaL(A.ach.APM);case 6:return A.aaL(A.ach.
APR);case 7:return A.aaL(A.ach.AO$);case 8:case 13:return A.aaL(A.ach.APg);case 9:
return A.aaL(A.ach.AC5);case 10:return A.aaL(A.ach.APf);case 12:return A.aaL(A.ach.
APh);case 11:return A.aaL(A.ach.ADr);default:throw new Error(AhV+AJf.toFixed());
}},BgW:function(Ay2){switch(Ay2){case 0:return A.aaL(A.ach.ADA);case 3:return A.
aaL(A.ach.AmX);case 1:return A.aaL(A.ach.Abz);case 2:return A._GetAutoObject(A.acj.
DU).Bc7();default:throw new Error(AhV+Ay2.toFixed());}},Bhu:function(Ati){switch(
Ati){case 977:return AcM;case 978:return UW;case 980:return Aoa;case 981:return Aob;
case 982:return Aoc;case 983:return Aod;case 984:return Ak_;case 985:return AsT;
default:return A.aaR(A.acf.Unknown);}},BhN:function(AcZ){switch(AcZ){case 1:return 0x278A;
case 2:return 0x278B;case 3:return 0x278C;case 4:return 0x278D;case 5:return 0x278E;
case 6:return 0x278F;case 7:return 0x2790;case 8:return 0x2791;case 9:return 0x2792;
case 10:return 0x2793;default:return 0x20;}},BpH:function(Ji){if(!Ji)return-1;return(
Ji%100000000)|0;},Bij:function(AoJ,aFilter){var B;if(!aFilter)return Ax0;var Apb=
Ax1;var Av=aFilter.AOF();while(!!Av){Apb=Apb+A._GetAutoObject(C.Helper).A6v(AoJ,
Av);Av=aFilter.AOK(Av);if(!!Av)Apb=Apb+O5;}Apb=Apb+Rm;return Apb;},A7a:function(
BbL){var MI=0;switch(BbL){case 14:MI=2;break;case 13:MI=4;break;case 6:MI=36;break;
case 11:MI=9;break;case 0:MI=39;break;case 10:MI=26;break;case 12:MI=12;break;case
5:MI=14;break;case 3:MI=15;break;case 1:MI=10;break;case 8:MI=16;break;case 4:MI=
20;break;case 15:MI=27;break;case 9:MI=31;break;case 2:MI=13;break;case 7:MI=35;
break;case 16:MI=37;break;default:A.ab5("%s%e",Ax2,BbL);}return MI;},BgV:function(
Ay2){switch(Ay2){case 0:return 1;case 3:return 0;case 1:return 2;case 2:switch(A.
_GetAutoObject(C.Device).MassUnit){case 0:return 3;case 1:return 4;default:throw new
Error(AhU+A._GetAutoObject(C.Device).MassUnit.toFixed());}break;default:throw new
Error(AhV+Ay2.toFixed());}},BgX:function(AoU){switch(AoU){case 0:return A.aaL(A.
ach.API);case 1:return A.aaL(A.ach.ADA);case 9:return A.aaL(A.ach.APT);case 4:return A.
aaL(A.ach.AGg);case 6:return A.aaL(A.ach.Asj);case 8:return A.aaL(A.ach.Avt);case
2:return A.aaL(A.ach.Abz);case 3:return A.aaL(A.ach.AmX);case 10:switch(A._GetAutoObject(
C.Device).MassUnit){case 0:return A.aaL(A.ach.AvI);case 1:return A.aaL(A.ach.AvJ
);default:throw new Error(AhU+A._GetAutoObject(C.Device).MassUnit.toFixed());}break;
case 7:case 5:case 11:case 12:case 13:case 14:case 18:case 15:case 16:case 17:return A.
aaL(A.aci.TL);default:throw new Error(UX+AoU.toFixed());}},ANu:function(Ati){switch(
Ati){case 40:return 1;case 56:return 3;case 70:return 2;case 100:return 4;case 124:
return 5;case 156:return 7;case 158:return 36;case 191:return 17;case 196:return 8;
case 203:return 9;case 208:return 11;case 233:return 12;case 246:return 14;case 250:
return 15;case 276:return 10;case 300:return 16;case 348:return 18;case 372:return 19;
case 380:return 20;case 392:return 21;case 428:return 24;case 440:return 22;case
442:return 23;case 470:return 25;case 528:return 26;case 578:return 27;case 616:
return 28;case 620:return 29;case 642:return 30;case 643:return 31;case 703:return 34;
case 705:return 33;case 724:return 13;case 752:return 32;case 756:return 6;case 792:
return 35;case 804:return 37;case 826:return 38;case 840:return 39;default:return 0;
}},S1:function(Ji){var A16=this.AxO(Ji);return this.ANu(A16);},AxO:function(Ji){
return A._GetAutoObject(C.Helper).Si(Ji,12,3)|0;},A$N:function(AoO,En){if(AoO<A.
_GetAutoObject(C.Helper).AC1(En))return 1;else if(AoO<A._GetAutoObject(C.Helper).
AC0(En))return 2;else return 3;},ACO:function(BxG){switch(BxG){case 1:return 1;case
2:return 2;case 3:return 3;case 4:return 4;case 5:return 5;case 6:return 6;case 7:
return 7;case 8:return 8;case 9:return 9;case 10:return 10;case 11:return 11;case
12:return 12;case 13:return 13;case 14:return 14;case 15:return 15;case 16:return 16;
default:return 0;}},AUW:function(A_,AI9,AI_){if(AI9===AI_)return A_;if(!AI9&&(AI_===
1)){var result=((A_*9)/5)+32;return result;}if((AI9===1)&&!AI_){var result=((A_-
32)*5)/9;return result;}throw new Error(((AsU+AI9.toFixed())+Ax3)+AI_.toFixed());
},A6e:function(Eb){switch(Eb){case 0:return Ax4;case 1:return A.jV;case 2:return Ax5;
case 3:return Aoe;case 4:return A.aaR(A.acf.Contains);case 5:return AfA;default:{
A.ab5("%s%e",Aof,Eb);return A.jV;}}},A5e:function(AcX){return this.M0.Aei(AcX);}
,Bi4:function(AcX){return this.M0.AmA(AcX);},Bhc:function(Ath){var AAk=0;switch(
Ath){case 0:AAk=1;break;case 1:AAk=2;break;case 2:AAk=3;break;case 3:AAk=4;break;
default:A.ab5("%s%e",IU,Ath);}return AAk;},Ajk:function(A0t,En){if(A0t>=A._GetAutoObject(
C.Helper).A6q(En))return 3;else if(A0t>=A._GetAutoObject(C.Helper).ACP(En))return 2;
else if(A0t<A._GetAutoObject(C.Device).AcD)return 0;else return 1;},Aqv:function(
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
39:BM=840;break;default:throw new Error(Aog+MI.toFixed());}return BM;},BpL:function(
Ji){return A._GetAutoObject(C.Helper).Si(Ji,8,2)|0;},BpK:function(Ji){var Bzz=this.
BpL(Ji);return this.ACO(Bzz);},_Init:function(aArg){C.M0._Init.call(this.M0={I:this
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
!AH){this.OnSetId(AH.CF(Ad,0));this.SI(AH.CF(Ad,1));this.Ab1(AH.CF(Ad,2));this.Any(
AH.CF(Ad,3));this.Q4(AH.Hu(Ad,4));this.JS(AH.AOH(Ad,7));this.Aks(AH.BiB(Ad,6));this.
EB(AH.AmQ(Ad,14));this.PT(AH.KN(Ad,22));this.Nd(AH.KN(Ad,26));this.Axb(AH.I5(Ad,
13));this.Ae1(AH.H2(Ad,8));this.Aw5(AH.Hu(Ad,15));this.ATs(AH.Hu(Ad,31));this.Ae7(
AH.A6F(Ad,5));this.AS2(AH.I5(Ad,17));this.Un(AH.H2(Ad,11));this.ATr(AH.Hu(Ad,16)
);this.ATu(AH.Hu(Ad,30));this.Aky(AH.H2(Ad,9));this.Ae5(AH.H2(Ad,12));this.ATt(AH.
Hu(Ad,20));this.Aw7(AH.Hu(Ad,21));this.Ae3(AH.H2(Ad,10));this.AwJ(AH.H2(Ad,27));
this.AFd(AH.ACW(Ad,18));this.AFG(AH.Hu(Ad,19));this.AwE(AH.ACW(Ad,23));this.Aw6(
AH.Hu(Ad,24));this.ASU(AH.CF(Ad,25));this.Awv(AH.Hu(Ad,28));this.AwK(AH.CF(Ad,29
));this.ArQ(AH.H2(Ad,38));this.NZ(AH.BiC(Ad,32));this.Aku(AH.BiH(Ad,33));this.AnA(
AH.KN(Ad,35));this.Nf(AH.AOP(Ad,34));this.Ae4(AH.H2(Ad,37));this.AFv(AH.BiQ(Ad,36
));}return HD;},Ch:function(AH){var HD=C.Row.Ch.call(this,AH);if(HD&&!!AH){var Jn=
AH.Oy();if(Jn<=0)A.ab5("%s",Xa);else{var AzZ=this.Am2();if(AzZ)this.CL=AH.YB();else
AH.Hn(this.CL,0,this.Id);AH.Hn(this.CL,1,this.VisualId);AH.Hn(this.CL,2,this.GroupId
);AH.Hn(this.CL,3,this.LocationId);AH.Ack(this.CL,4,this.DateOfBirth);AH.Boz(this.
CL,7,this.Gender);AH.Bov(this.CL,6,this.BirthType);AH.Bot(this.CL,14,this.AnimalType
);AH.Uy(this.CL,22,this.TransponderId);AH.Uy(this.CL,26,this.NaisId);AH.AkP(this.
CL,13,this.WorstAssessment);AH.N5(this.CL,8,this.IsAlarm);AH.Ack(this.CL,15,this.
TimestampAlarm);AH.N5(this.CL,11,this.IsFever);AH.Ack(this.CL,16,this.TimestampExpirationFeverAlarm
);AH.N5(this.CL,9,this.IsControl);AH.N5(this.CL,12,this.IsWatch);AH.Ack(this.CL,
20,this.TimestampLastControl);AH.Ack(this.CL,21,this.TimestampLastWatch);AH.N5(this.
CL,10,this.IsRegistered);AH.N5(this.CL,27,this.IsPerished);AH.Ack(this.CL,28,this.
DateOfLastCalving);AH.Hn(this.CL,29,this.LactationNumber);AH.N5(this.CL,38,this.
IsDry);AH.Box(this.CL,32,this.Breed);AH.Boy(this.CL,33,this.EaseOfDelivery);AH.Uy(
this.CL,35,this.NaisIdMother);AH.BoF(this.CL,34,this.WhereAbouts);AH.N5(this.CL,
37,this.IsRegistrationNoticePending);AH.BoD(this.CL,36,this.ReasonOfLeaving);HD=
AH.OA(Jn);if(AzZ)this.OnSetId(AH.Abo());}}return HD;},Gp:function(){C.Row.Gp.call(
this);this.OnSetId(-1);this.Ae3(true);},E5:function(){C.Row.E5.call(this);this.OnSetId(
0);this.SI(0);this.Ab1(0);this.Any(0);this.Q4(0);this.JS(A._GetAutoObject(C.Device
).Gender);this.Aks(0);this.EB(A._GetAutoObject(C.Device).AnimalType);this.PT(0);
this.Nd(0);this.Axb(0);this.Ae1(false);this.Aw5(0);this.ATs(0);this.Ae7(0);this.
AS2(0);this.Un(false);this.ATu(0);this.ATr(0);this.Aky(false);this.Ae5(false);this.
ATt(0);this.Aw7(0);this.Ae3(false);this.AwJ(false);this.AFd(0);this.AFG(0);this.
AwE(0);this.Aw6(0);this.ASU(-1);this.Awv(0);this.AwK(0);this.ArQ(false);this.NZ(
0);this.Aku(0);this.AnA(0);this.Nf(0);this.Ae4(false);this.AFv(0);},OnSetId:function(
E){if(this.Id===E)return;this.Id=E;A.abo([this,this.Q2,this.OnSetId],0);},SI:function(
E){if(this.VisualId===E)return;this.VisualId=E;A.abo([this,this.Arw,this.SI],0);
},Ab1:function(E){if(this.GroupId===E)return;this.GroupId=E;A.abo([this,this.BkC
,this.Ab1],0);},Q4:function(E){if(this.DateOfBirth===E)return;this.DateOfBirth=E;
A.abo([this,this.Av9,this.Q4],0);},JS:function(E){if(this.Gender===E)return;this.
Gender=E;A.abo([this,this.Wv,this.JS],0);},Aks:function(E){if(this.BirthType===E
)return;this.BirthType=E;A.abo([this,this.ASe,this.Aks],0);},Any:function(E){if(
this.LocationId===E)return;this.LocationId=E;A.abo([this,this.A8z,this.Any],0);}
,Ae7:function(E){if(this.LastTemperature===E)return;this.LastTemperature=E;A.abo([
this,this.A8y,this.Ae7],0);},Ae1:function(E){if(this.IsAlarm===E)return;this.IsAlarm=
E;A.abo([this,this.A8q,this.Ae1],0);},Aky:function(E){if(this.IsControl===E)return;
this.IsControl=E;A.abo([this,this.BkF,this.Aky],0);},Ae3:function(E){if(this.IsRegistered===
E)return;this.IsRegistered=E;A.abo([this,this.BkI,this.Ae3],0);},Ae5:function(E){
if(this.IsWatch===E)return;this.IsWatch=E;A.abo([this,this.A8u,this.Ae5],0);},Axb:
function(E){if(this.WorstAssessment===E)return;this.WorstAssessment=E;A.abo([this
,this.A9a,this.Axb],0);},Un:function(E){if(this.IsFever===E)return;this.IsFever=
E;A.abo([this,this.A8r,this.Un],0);},ATt:function(E){if(this.TimestampLastControl===
E)return;this.TimestampLastControl=E;A.abo([this,this.Bk9,this.ATt],0);},Aw7:function(
E){if(this.TimestampLastWatch===E)return;this.TimestampLastWatch=E;A.abo([this,this.
Bk$,this.Aw7],0);},AS2:function(E){if(this.LastRatingTemperature===E)return;this.
LastRatingTemperature=E;A.abo([this,this.BkL,this.AS2],0);},ATr:function(E){if(this.
TimestampExpirationFeverAlarm===E)return;this.TimestampExpirationFeverAlarm=E;A.
abo([this,this.Bk7,this.ATr],0);},Aw5:function(E){if(this.TimestampAlarm===E)return;
this.TimestampAlarm=E;A.abo([this,this.Bk6,this.Aw5],0);},EB:function(E){if(this.
AnimalType===E)return;this.AnimalType=E;A.abo([this,this.PP,this.EB],0);},AFd:function(
E){if(this.LastBodyWeight===E)return;this.LastBodyWeight=E;A.abo([this,this.A8x,
this.AFd],0);},AFG:function(E){if(this.TimestampLastWeighing===E)return;this.TimestampLastWeighing=
E;A.abo([this,this.A8Y,this.AFG],0);},PT:function(E){if(this.TransponderId===E)return;
this.TransponderId=E;A.abo([this,this.Arv,this.PT],0);},RO:function(){return A._GetAutoObject(
C.Helper).L9(this.DateOfBirth,A._GetAutoObject(C.Helper).Dv());},AwE:function(E){
if(this.FirstBodyWeight===E)return;this.FirstBodyWeight=E;A.abo([this,this.ASj,this.
AwE],0);},Aw6:function(E){if(this.TimestampFirstWeighing===E)return;this.TimestampFirstWeighing=
E;A.abo([this,this.ASA,this.Aw6],0);},Ara:function(){var O_=A._NewObject(A.Core.
Bs,0);O_.Initialize(this.DateOfBirth);var A1S=A._NewObject(A.Core.Bs,0);A1S.Initialize(
this.TimestampFirstWeighing);if(((O_.Year===A1S.Year)&&(O_.AbX()===A1S.AbX()))&&(
this.FirstBodyWeight>0))return true;else return false;},AhR:function(AI3){var Aay;
var Aup;if(this.TimestampLastWeighing>0){Aup=this.TimestampLastWeighing;Aay=this.
LastBodyWeight;}else{Aup=this.DateOfBirth;Aay=A._GetAutoObject(C.Helper).Abn(this.
AnimalType);}return A._GetAutoObject(C.Helper).AhR(Aay,Aup,AI3,this.AnimalType);
},ASU:function(E){if(this.FirstBodyWeightId===E)return;this.FirstBodyWeightId=E;
A.abo([this,this.BkB,this.ASU],0);},AnQ:function(Bb8){this.Ae1(Bb8);if(Bb8){if(!
this.TimestampAlarm)this.Aw5(A._GetAutoObject(C.Helper).Dv());}else this.Aw5(0);
},Nd:function(E){if(this.NaisId===E)return;this.NaisId=E;A.abo([this,this.Anp,this.
Nd],0);},AGw:function(Bb4){this.Ae5(Bb4);if(Bb4){if(!this.TimestampLastWatch)this.
Aw7(A._GetAutoObject(C.Helper).Dv());}else this.Aw7(0);},Awv:function(E){if(this.
DateOfLastCalving===E)return;this.DateOfLastCalving=E;A.abo([this,this.Bkr,this.
Awv],0);},AwK:function(E){if(this.LactationNumber===E)return;this.LactationNumber=
E;A.abo([this,this.BkK,this.AwK],0);},AwJ:function(E){if(this.IsPerished===E)return;
this.IsPerished=E;A.abo([this,this.BkH,this.AwJ],0);},ATu:function(E){if(this.TimestampLastTemperature===
E)return;this.TimestampLastTemperature=E;A.abo([this,this.Bk_,this.ATu],0);},ATs:
function(E){if(this.TimestampLastAssessment===E)return;this.TimestampLastAssessment=
E;A.abo([this,this.Bk8,this.ATs],0);},NZ:function(E){if(this.Breed===E)return;this.
Breed=E;A.abo([this,this.Av7,this.NZ],0);},Aku:function(E){if(this.EaseOfDelivery===
E)return;this.EaseOfDelivery=E;A.abo([this,this.ASi,this.Aku],0);},Nf:function(E
){if(this.WhereAbouts===E)return;this.WhereAbouts=E;A.abo([this,this.Awj,this.Nf
],0);},AnA:function(E){if(this.NaisIdMother===E)return;this.NaisIdMother=E;A.abo([
this,this.ASq,this.AnA],0);},AFv:function(E){if(this.ReasonOfLeaving===E)return;
this.ReasonOfLeaving=E;A.abo([this,this.BkW,this.AFv],0);},Ae4:function(E){if(this.
IsRegistrationNoticePending===E)return;this.IsRegistrationNoticePending=E;A.abo([
this,this.BkJ,this.Ae4],0);},ArQ:function(E){if(this.IsDry===E)return;this.IsDry=
E;A.abo([this,this.BkG,this.ArQ],0);},Q2:function(){return this.Id;},Arw:function(
){return this.VisualId;},BkC:function(){return this.GroupId;},Av9:function(){return this.
DateOfBirth;},Wv:function(){return this.Gender;},ASe:function(){return this.BirthType;
},A8z:function(){return this.LocationId;},A8y:function(){return this.LastTemperature;
},A8q:function(){return this.IsAlarm;},BkF:function(){return this.IsControl;},BkI:
function(){return this.IsRegistered;},A8u:function(){return this.IsWatch;},A9a:function(
){return this.WorstAssessment;},A8r:function(){return this.IsFever;},Bk9:function(
){return this.TimestampLastControl;},Bk$:function(){return this.TimestampLastWatch;
},BkL:function(){return this.LastRatingTemperature;},Bk7:function(){return this.
TimestampExpirationFeverAlarm;},Bk6:function(){return this.TimestampAlarm;},PP:function(
){return this.AnimalType;},A8x:function(){return this.LastBodyWeight;},A8Y:function(
){return this.TimestampLastWeighing;},Arv:function(){return this.TransponderId;}
,ASj:function(){return this.FirstBodyWeight;},ASA:function(){return this.TimestampFirstWeighing;
},BkB:function(){return this.FirstBodyWeightId;},Anp:function(){return this.NaisId;
},Bkr:function(){return this.DateOfLastCalving;},BkK:function(){return this.LactationNumber;
},BkH:function(){return this.IsPerished;},Bk_:function(){return this.TimestampLastTemperature;
},Bk8:function(){return this.TimestampLastAssessment;},Av7:function(){return this.
Breed;},ASi:function(){return this.EaseOfDelivery;},Awj:function(){return this.WhereAbouts;
},ASq:function(){return this.NaisIdMother;},BkW:function(){return this.ReasonOfLeaving;
},BkJ:function(){return this.IsRegistrationNoticePending;},BkG:function(){return this.
IsDry;},_Init:function(aArg){C.Row._Init.call(this,aArg);this.__proto__=C.Animal;
this.TableId=0;},_className:"Device::Animal"};C.Row={CL:-1,TableId:2,E3:function(
Ad,AH){if(!AH){A.ab5("%s",(Aoh+this.CL.toFixed())+AsV);return false;}else if(AH.
Id!==this.TableId)throw new Error(AsW);else if((Ad<0)||(Ad>=AH.B9())){A.ab5("%s"
,(((AsX+this.CL.toFixed())+Aoi)+AH.B9().toFixed())+Aoj);return false;}this.CL=Ad;
return true;},Ch:function(AH){if(!AH){A.ab5("%s",(Aoh+this.CL.toFixed())+AsV);return false;
}else if(AH.Id!==this.TableId)throw new Error(AsW);else if(this.Am2()&&AH.Lg()){
A.ab5("%s",AsY+AH.HI().toFixed());return false;}else if(!this.Am2()&&((this.CL<0
)||(this.CL>=AH.B9()))){A.ab5("%s",(((AsX+this.CL.toFixed())+Aoi)+AH.B9().toFixed(
))+Aoj);return false;}return true;},Gp:function(){this.E5();this.CL=-1;},Am2:function(
){return this.CL===-1;},E5:function(){this.CL=-2;},AqU:function(){return this.CL
!==-2;},A8M:function(){return this.CL;},A9_:function(E){this.CL=E;},_Init:function(
aArg){this.__proto__=C.Row;A.h7++;},_Done:function(){this.__proto__=null;A.h7--;
},_ReInit:function(){},_Mark:function(D){var B;if((B=this.I)&&(B._cycle!=D))B._Mark(
B._cycle=D);},I:null,_cycle:0,_observers:null,_className:"Device::Row"};C.Rating={
Temperature:0,Id:0,AnimalId:0,Timestamp:0,BodyWeight:0,RatingTemperature:0,Faeces:
0,Respiratory:0,Appearance:0,Feed:0,E3:function(Ad,AH){var HD=C.Row.E3.call(this
,Ad,AH);if(HD&&!!AH){this.OnSetId(AH.CF(Ad,0));this.OnSetAnimalId(AH.CF(Ad,1));this.
OnSetTimestamp(AH.Hu(Ad,6));this.OnSetFeed(AH.I5(Ad,2));this.OnSetAppearance(AH.
I5(Ad,3));this.OnSetRespiratory(AH.I5(Ad,4));this.OnSetFaeces(AH.I5(Ad,5));this.
OnSetTemperature(AH.A6F(Ad,7));this.OnSetBodyWeight(AH.ACW(Ad,8));this.OnSetRatingTemperature(
AH.I5(Ad,9));}return HD;},Ch:function(AH){if(this.K&&this.K.Ch)return this.K.Ch.
apply(this,arguments);else return C.Rating.Baw.apply(this,arguments);},Baw:function(
AH){var HD=C.Row.Ch.call(this,AH);if((HD&&!!AH)&&(AH.Id===1)){var Jn=AH.Oy();if(
Jn<=0)A.ab5("%s",Xa);else{var AzZ=this.Am2();if(AzZ)this.CL=AH.YB();else AH.Hn(this.
CL,0,this.Id);AH.Hn(this.CL,1,this.AnimalId);AH.Ack(this.CL,6,this.Timestamp);AH.
AkP(this.CL,2,this.Feed);AH.AkP(this.CL,3,this.Appearance);AH.AkP(this.CL,4,this.
Respiratory);AH.AkP(this.CL,5,this.Faeces);AH.A_7(this.CL,7,this.Temperature);AH.
AUn(this.CL,8,this.BodyWeight);AH.AkP(this.CL,9,this.RatingTemperature);AH.OA(Jn
);if(AzZ)this.OnSetId(AH.Abo());var Rx=A._GetAutoObject(C.Device).An;var Ad=A._GetAutoObject(
C.Device).An.LS(0,this.AnimalId);if(Ad>=0){var Cy=A._NewObject(C.Animal,0);Cy.E3(
Ad,Rx);if(this.Temperature>0)Cy.Un(A._GetAutoObject(C.Helper).A66(this));if((this.
Temperature>0)&&A._GetAutoObject(C.Helper).AGa(this)){var Oj=A._GetAutoObject(C.
Helper).AQX(this);Cy.Aky(Oj);Cy.AnQ(Oj);}else if(this.Temperature>0){var Oj=(A._GetAutoObject(
C.Helper).AQX(this)||(Cy.WorstAssessment===2))||(Cy.WorstAssessment===1);Cy.Aky(
Oj);Cy.AnQ(Oj);}else{var Oj=A._GetAutoObject(C.Helper).AQX(this)||Cy.IsFever;Cy.
Aky(Oj);Cy.AnQ(Oj);}Cy.Ch(Rx);}}}return HD;},Gp:function(){C.Row.Gp.call(this);this.
OnSetTimestamp(A._GetAutoObject(C.Helper).Dv());this.OnSetId(-1);},E5:function(){
C.Row.E5.call(this);this.OnSetTimestamp(0);this.OnSetId(0);this.OnSetAnimalId(0);
this.OnSetFeed(0);this.OnSetAppearance(0);this.OnSetRespiratory(0);this.OnSetFaeces(
0);this.OnSetTemperature(0);this.OnSetBodyWeight(0);this.OnSetRatingTemperature(
0);},OnSetTemperature:function(E){if(this.Temperature===E)return;this.Temperature=
E;A.abo([this,this.Bk5,this.OnSetTemperature],0);},OnSetId:function(E){if(this.Id===
E)return;this.Id=E;A.abo([this,this.Q2,this.OnSetId],0);},OnSetAnimalId:function(
E){if(this.AnimalId===E)return;this.AnimalId=E;A.abo([this,this.Bke,this.OnSetAnimalId
],0);},OnSetFeed:function(E){if(this.Feed===E)return;this.Feed=E;A.abo([this,this.
Bky,this.OnSetFeed],0);},OnSetAppearance:function(E){if(this.Appearance===E)return;
this.Appearance=E;A.abo([this,this.Bkf,this.OnSetAppearance],0);},OnSetRespiratory:
function(E){if(this.Respiratory===E)return;this.Respiratory=E;A.abo([this,this.BkX
,this.OnSetRespiratory],0);},OnSetFaeces:function(E){if(this.Faeces===E)return;this.
Faeces=E;A.abo([this,this.Bkw,this.OnSetFaeces],0);},OnSetTimestamp:function(E){
if(this.Timestamp===E)return;this.Timestamp=E;A.abo([this,this.A8X,this.OnSetTimestamp
],0);},Bou:function(Np,A_){switch(Np){case 2:this.OnSetAppearance(A_);break;case
1:this.OnSetFeed(A_);break;case 4:this.OnSetFaeces(A_);break;case 3:this.OnSetRespiratory(
A_);break;default:;}},Biz:function(Np){switch(Np){case 2:return this.Appearance;
case 1:return this.Feed;case 4:return this.Faeces;case 3:return this.Respiratory;
default:return 0;}},OnSetRatingTemperature:function(E){if(this.RatingTemperature===
E)return;this.RatingTemperature=E;A.abo([this,this.BkV,this.OnSetRatingTemperature
],0);},OnSetBodyWeight:function(E){if(this.BodyWeight===E)return;this.BodyWeight=
E;A.abo([this,this.Bkj,this.OnSetBodyWeight],0);},Bk5:function(){return this.Temperature;
},Q2:function(){return this.Id;},Bke:function(){return this.AnimalId;},Bky:function(
){return this.Feed;},Bkf:function(){return this.Appearance;},BkX:function(){return this.
Respiratory;},Bkw:function(){return this.Faeces;},A8X:function(){return this.Timestamp;
},BkV:function(){return this.RatingTemperature;},Bkj:function(){return this.BodyWeight;
},_Init:function(aArg){C.Row._Init.call(this,aArg);this.__proto__=C.Rating;this.
TableId=1;var J2=this._variants();if(J2){this.K={};J2._Init.call(this,aArg);}},_Done:
function(){if(this.K)this.K._Done.call(this);this.__proto__=C.Row;C.Row._Done.call(
this);},_ReInit:function(){C.Row._ReInit.call(this);if(this.K)this.K._ReInit.call(
this);},_Mark:function(D){C.Row._Mark.call(this,D);if(this.K)this.K._Mark(D);},_variants:
function(){return A.acs.Rating._variants();},K:null,_className:"Device::Rating"};
C.HelperClass={Ux:null,AhD:null,AUg:null,AUh:null,W:null,Au:null,KG:null,SS:null
,AdY:null,UE:null,UD:null,Ael:null,Afw:null,Afv:null,Afu:null,Afx:null,AgC:null,
AGL:0,Init:function(aArg){A.pe([this,this.ATM],this);},AkB:function(E){this.Ux=E;
A.abo([this,this.Art,this.AkB],0);},AFy:function(E){this.AhD=E;A.abo([this,this.
A8N,this.AFy],0);},BAJ:function(G){switch(A._GetAutoObject(C.Device).ScanState){
case 2:{var Aur=A._GetAutoObject(C.Device).OR;if(!Aur)throw new Error(Ax6);switch(
Aur.TransponderType){case 1:this.AkB(Aur);break;case 2:this.ATi(Aur);break;case 3:
this.AFy(Aur);break;case 4:this.ATj(Aur);break;case 0:break;default:throw new Error(
Ax7);}}break;case 4:A._GetAutoObject(C.Device).A5(11,true,A.jV,2000,null);break;
case 3:A._GetAutoObject(C.Device).A5(12,true,A.jV,2000,null);break;case 0:case 1:
break;default:throw new Error(Ax8);}},AkM:function(){this.AkB(null);this.ATi(null
);this.AFy(null);this.ATj(null);},AFD:function(E){if(this.K&&this.K.AFD)return this.
K.AFD.apply(this,arguments);else return C.HelperClass.Bau.apply(this,arguments);
},Bau:function(E){A.abo([this,this.U0,this.U3],0);A._GetAutoObject(C.Device).SetSystemTime(
E);},U3:function(Aq){this.AFD(Aq);},Dv:function(){if(this.K&&this.K.Dv)return this.
K.Dv.apply(this,arguments);else return C.HelperClass.Baq.apply(this,arguments);}
,Baq:function(){var B;return((B=(this.Au.Bc5()|0))<0)?B+0x100000000:B;},U0:function(
){return this.Dv();},Asn:function(){A._GetAutoObject(C.Device).SP(-1);this.W.E5(
);A.we(this.W,0);},A7k:function(Ji){if(!Ji){A.ab5("%s%U",AsZ,Ji);return false;}var
Bf=A._GetAutoObject(C.Device).An.AgV(22,Ji);return this.G7(Bf);},AmR:function(AoJ
,AI2){switch(AoJ){case 0:{var Apa=AI2;switch(Apa){case 14:return A.aaR(A.acf.Afr
);case 6:return Ax9;case 4:return A.aaR(A.acf.Aed);case 28:return P$;case 7:return A.
aaR(A.acf.Afm);case 2:return A.aaR(A.acf.P);case 0:return A.aaR(A.acf.GM);case 37:
return Ax_;case 8:return A.aaR(A.acf.Alarm);case 9:return A.aaR(A.acf.ACa);case 38:
return A.aaR(A.acf.ANU);case 11:return A.aaR(A.acf.Fever);case 27:return AVJ;case
10:return A.aaR(A.acf.Bn8);case 12:return A.aaR(A.acf.Ar_);case 29:return A.aaR(
A.acf.ARe);case 18:return A.aaR(A.acf.Weighing);case 17:return AVK;case 5:return A.
aaR(A.acf.Temperature);case 3:return AVL;case 26:return A.aaR(A.acf.Uf);case 35:
return A.aaR(A.acf.Uf)+AVM;case 36:return AHe;case 15:return AHf;case 24:return AfB;
case 20:return Aok;case 30:return AVN;case 21:return AHg;case 19:return Ak$;case
22:return A.aaR(A.acf.Transponder);case 1:return A.aaR(A.acf.GI);case 34:return A.
aaR(A.acf.Jg);case 13:return AHh;case 31:return AHi;default:{A.ab5("%s",AVO+Apa.
toFixed());return AHj+Apa.toFixed();}}}case 1:{var Apa=AI2;switch(Apa){case 1:return A.
aaR(A.acf.Animal);case 3:return A.aaR(A.acf.AF$);case 8:return A.aaR(A.acf.Aft);
case 5:return A.aaR(A.acf.AGb);case 2:return A.aaR(A.acf.Feed);case 4:return A.aaR(
A.acf.AGc);case 7:return A.aaR(A.acf.Temperature);case 6:return A.aaR(A.acf.Bs);
default:{A.ab5("%s",AVP+Apa.toFixed());return AHj+Apa.toFixed();}}}default:A.ab5(
"%s",(AVQ+AoJ.toFixed())+AcN);}return A.jV;},A6v:function(AoJ,AI){var result=A.jV;
if(!!AI){result=this.AmR(AoJ,AI.EJ);result=((result+Oa)+A._GetAutoObject(C.Converter
).A6e(AI.Operator))+Oa;if(!!(C.Int32FilterCriterion.isPrototypeOf(AI)?AI:null))result=
result+(C.Int32FilterCriterion.isPrototypeOf(AI)?AI:null).A4.toFixed();else if(!
!(C.UInt32FilterCriterion.isPrototypeOf(AI)?AI:null))result=result+(C.UInt32FilterCriterion.
isPrototypeOf(AI)?AI:null).A4.toFixed();else if(!!(C.StringFilterCriterion.isPrototypeOf(
AI)?AI:null))result=result+(C.StringFilterCriterion.isPrototypeOf(AI)?AI:null).A4;
else if(!!(C.BoolFilterCriterion.isPrototypeOf(AI)?AI:null)){if((C.BoolFilterCriterion.
isPrototypeOf(AI)?AI:null).A4)result=this.AmR(AoJ,AI.EJ);else result=A.jV;}else if(
!!(C.GenderFilterCriterion.isPrototypeOf(AI)?AI:null)){var By8=A._NewObject(C.GenderToString
,0);result=result+By8.Lu((C.GenderFilterCriterion.isPrototypeOf(AI)?AI:null).A4);
}else if(!!(C.AnimalTypeFilterCriterion.isPrototypeOf(AI)?AI:null)){var Bx4=A._NewObject(
C.AnimalTypeToString,0);result=result+Bx4.Lu((C.AnimalTypeFilterCriterion.isPrototypeOf(
AI)?AI:null).A4);}else if(!!(C.AssessmentFilterCriterion.isPrototypeOf(AI)?AI:null
)){var Bx7=A._NewObject(C.AssesmentToString,0);result=result+Bx7.Lu((C.AssessmentFilterCriterion.
isPrototypeOf(AI)?AI:null).A4);}else if(!!(C.UInt64FilterCriterion.isPrototypeOf(
AI)?AI:null))result=result+(C.UInt64FilterCriterion.isPrototypeOf(AI)?AI:null).A4.
toFixed();else if(!!(C.UInt64PartialFilterCriterion.isPrototypeOf(AI)?AI:null)){
var Av=(C.UInt64PartialFilterCriterion.isPrototypeOf(AI)?AI:null);result=(((((result+
Av.A4)+AVR)+Av.OB.toFixed())+O5)+Av.Zh.toFixed())+Aoj;}else if(!!(C.WhereAboutsFilterCriterion.
isPrototypeOf(AI)?AI:null)){var BCv=A._NewObject(C.WhereAboutsToString,0);result=
result+BCv.Lu((C.WhereAboutsFilterCriterion.isPrototypeOf(AI)?AI:null).A4);}else
A.ab5("%s",AVS);}return result;},Nk:function(aString,BbQ,Bxi){var result=A.jV;var
BfB=false;var index=0;var Bxk=BbQ.length;while(!BfB){var A3A=aString.indexOf(BbQ
,index);if(A3A!==-1){result=(result+A.abW(aString,index,A3A-index))+Bxi;index=A3A+
Bxk;}else{var BbV=aString.length;if(index<BbV)result=result+A.ab2(aString,BbV-index
);BfB=true;}}return result;},ATi:function(E){this.AUg=E;A.abo([this,this.BkZ,this.
ATi],0);},ATj:function(E){this.AUh=E;A.abo([this,this.Bk0,this.ATj],0);},Bdt:function(
){return((A._GetAutoObject(C.Device).ScanState===2)&&!!A._GetAutoObject(C.Device
).OR)&&(A._GetAutoObject(C.Device).OR.TransponderType===1);},Af8:function(G){if(
!this.W.Am2()&&!!this.W.Id)this.BjD(this.W.Id);},ACP:function(En){return A._GetAutoObject(
C.Helper).UE.Get(En);},A6q:function(En){return A._GetAutoObject(C.Helper).UD.Get(
En);},A6B:function(){var O=0;var min=32767;while(O<A._GetAutoObject(C.Helper).UE.
MD){if(A._GetAutoObject(C.Helper).UE.Get(O)<min)min=A._GetAutoObject(C.Helper).UE.
Get(O);O=O+1;}return min;},ATM:function(G){A.zV([this,this.Af8],A._GetAutoObject(
C.Device).An,0);},AQX:function(D3){if(!D3)return false;var Bjd=(((this.AzV(D3.Faeces
)||this.AzV(D3.Feed))||this.AzV(D3.Appearance))||this.AzV(D3.Respiratory))||this.
AzV(D3.RatingTemperature);return Bjd||this.A66(D3);},AzV:function(Bbu){return(Bbu===
2)||(Bbu===1);},A66:function(D3){return!!D3&&(D3.Temperature>A._GetAutoObject(C.
Helper).ACP(A._GetAutoObject(C.Helper).W.AnimalType));},G7:function(L7){var A2s=
false;if(L7>=0){if(L7!==this.W.CL)A._GetAutoObject(C.Device).SP(L7);A2s=this.W.E3(
L7,A._GetAutoObject(C.Device).An);if(A2s)A.we(this.W,0);}else{A._GetAutoObject(C.
Device).SP(-1);this.W.E5();A.we(this.W,0);}return A2s;},AhM:function(Ah5){var B;
return(((B=(this.Au.Bc5()|0))<0)?B+0x100000000:B)-this.AmD(Ah5);},AsC:function(){
var B;A.pe([B=this.KG,B.AnU],this);},BBW:function(G){A._GetAutoObject(C.Device).
A5(16,false,AHk,0,null);A._GetAutoObject(C.Device).A5(5,true,A.jV,0,null);},BnA:
function(G){var As=(C.PopupContext.isPrototypeOf(G)?G:null);if(!!As&&(As.PopupState===
5))this.AsC();},Bnk:function(E){if(this.AGL===E)return;this.AGL=E;A._GetAutoObject(
C.Device).A5(16,true,this.AGL.toFixed(),0,[this,this.BnA]);},L9:function(BwU,Bxy
){var D8;var Bf9=A._NewObject(A.Core.An0,0);var GG=A._NewObject(A.Core.Bs,0);var
K6=A._NewObject(A.Core.Bs,0);GG.Initialize(BwU);K6.Initialize(Bxy);D8=K6.BhM(GG);
Bf9.Initialize2(0,D8.ADn,D8.AD$,D8.AGp);if(GG.J(Bf9).GK===GG.GK)return D8.Kl;else
return D8.Kl+1;},BBY:function(G){A._GetAutoObject(C.Device).UpdateMeasureState(3
);},AKZ:function(G){var BgY=A._GetAutoObject(C.Helper).ACP(A._GetAutoObject(C.Helper
).W.AnimalType);var BgU=A._GetAutoObject(C.Helper).A6q(A._GetAutoObject(C.Helper
).W.AnimalType);var Agn=A.abz(BgY-100,BgU+100);this.BcJ(Agn);},AmD:function(Ah5){
return Ah5*86400;},Ak3:function(J4){var B;if(!!J4&&(J4<(((B=Math.trunc(Math.pow(
10,A._GetAutoObject(C.Device).AF)))<0)?B+0x10000000000000000:B)))return-1;return A.
_GetAutoObject(C.Helper).Si(J4,A._GetAutoObject(C.Device).AF&0xFF,A._GetAutoObject(
C.Device).A1&0xFF)|0;},AGa:function(D3){if(!D3)return false;return((!!D3.Faeces||
!!D3.Feed)||!!D3.Appearance)||!!D3.Respiratory;},AhR:function(A0F,BbX,AI3,En){var
B;var ApO;if((A0F<650000)&&(BbX<this.Dv())){var Bcj=this.AgC.Avl(En);var Bci=0;if(
Bcj>=0)Bci=this.Afu.Get(Bcj);ApO=A0F+(this.L9(BbX,this.Dv())*Bci);if(AI3>0){var A1A=
this.ApN(AI3);ApO=(Math.trunc(((((B=ApO)<0)?B+0x10000000000000000:B)+Math.trunc(
A1A/2))/A1A)*A1A)|0;}if(ApO>650000)ApO=650000;}else ApO=A0F;return ApO;},AC2:function(
D3){var Ap$=A._GetAutoObject(C.Converter).AdZ(D3.Faeces);if(Ap$<A._GetAutoObject(
C.Converter).AdZ(D3.Feed))Ap$=A._GetAutoObject(C.Converter).AdZ(D3.Feed);if(Ap$<
A._GetAutoObject(C.Converter).AdZ(D3.Appearance))Ap$=A._GetAutoObject(C.Converter
).AdZ(D3.Appearance);if(Ap$<A._GetAutoObject(C.Converter).AdZ(D3.Respiratory))Ap$=
A._GetAutoObject(C.Converter).AdZ(D3.Respiratory);return A._GetAutoObject(C.Converter
).A$t(Ap$);},Axq:function(D3,Nn){if(!!D3){D3.OnSetFaeces(Nn);D3.OnSetFeed(Nn);D3.
OnSetAppearance(Nn);D3.OnSetRespiratory(Nn);}},Bix:function(AH,AI8,Ac5,Xk,AfF){if(
!AH)throw new Error(As0);var Be=A._NewObject(C.Filter,0);var ApB=AH.Filter;var Oe=
A._NewObject(C.Int32FilterCriterion,0);Oe.Operator=0;Oe.EJ=1;Oe.A4=Ac5;Be.CW(Oe);
if(Xk>0){var Or=A._NewObject(C.UInt32FilterCriterion,0);Or.Operator=2;Or.EJ=6;Or.
A4=Xk;Be.CW(Or);}if(AfF>0){var Oi=A._NewObject(C.UInt32FilterCriterion,0);Oi.Operator=
3;Oi.EJ=6;Oi.A4=AfF;Be.CW(Oi);}AH.Bk(Be);var L8=A._NewObject(C.Int32ArrayWrapper
,0);L8.Zv(6);var O;for(O=0;O<L8.MD;O=O+1)L8.Set(O,0);var U9;for(O=0;O<AH.B9();O=
O+1){U9=AH.I5(O,AI8);L8.Set(U9,L8.Get(U9)+1);}AH.Bk(ApB);return L8;},ZN:function(
Ah5){var B;var GG=A._NewObject(A.Core.Bs,0);var Bf8=A._NewObject(A.Core.An0,0);GG.
Initialize(A._GetAutoObject(C.Converter).AhO());Bf8.Initialize2(Ah5,0,0,0);GG=GG.
BoX(Bf8);return((B=(GG.JQ()|0))<0)?B+0x100000000:B;},A6r:function(AH,Ac5,AfF,Xk){
if(!AH)throw new Error(As0);var Be=A._NewObject(C.Filter,0);var ApB=AH.Filter;var
Oe=A._NewObject(C.Int32FilterCriterion,0);Oe.Operator=0;Oe.EJ=1;Oe.A4=Ac5;Be.CW(
Oe);if(Xk>0){var Or=A._NewObject(C.UInt32FilterCriterion,0);Or.Operator=2;Or.EJ=
6;Or.A4=Xk;Be.CW(Or);}if(AfF>0){var Oi=A._NewObject(C.UInt32FilterCriterion,0);Oi.
Operator=3;Oi.EJ=6;Oi.A4=AfF;Be.CW(Oi);}AH.Bk(Be);var L8=A._NewObject(C.Int32ArrayWrapper
,0);L8.Zv(6);var O;for(O=0;O<L8.MD;O=O+1)L8.Set(O,0);var Ao1=A._NewObject(C.Rating
,0);var A1s;for(O=0;O<AH.B9();O=O+1){Ao1.E3(O,AH);if(A._GetAutoObject(C.Helper).
AGa(Ao1)){A1s=A._GetAutoObject(C.Helper).AC2(Ao1);L8.Set(A1s,L8.Get(A1s)+1);}}AH.
Bk(ApB);return L8;},A11:function(AH,Ac5,ByD){if(!AH)throw new Error(As0);var Be=
A._NewObject(C.Filter,0);var ApB=AH.Filter;var Oe=A._NewObject(C.Int32FilterCriterion
,0);Oe.Operator=0;Oe.EJ=1;Oe.A4=Ac5;Be.CW(Oe);var Xk=A._GetAutoObject(C.Converter
).AhO()+A._GetAutoObject(C.Helper).AmD(ByD);var AfF=Xk+A._GetAutoObject(C.Helper
).AmD(1);var Or=A._NewObject(C.UInt32FilterCriterion,0);Or.Operator=2;Or.EJ=6;Or.
A4=Xk;Be.CW(Or);var Oi=A._NewObject(C.UInt32FilterCriterion,0);Oi.Operator=3;Oi.
EJ=6;Oi.A4=AfF;Be.CW(Oi);AH.Bk(Be);var Ao1=A._NewObject(C.Rating,0);var U9;var LP=
0;var O;for(O=0;O<AH.B9();O=O+1){Ao1.E3(O,AH);if(A._GetAutoObject(C.Helper).AGa(
Ao1)){U9=A._GetAutoObject(C.Helper).AC2(Ao1);if(A._GetAutoObject(C.Converter).AdZ(
U9)>A._GetAutoObject(C.Converter).AdZ(LP))LP=U9;}}AH.Bk(ApB);return LP;},Am1:function(
){if((A._GetAutoObject(C.Device).WeightRecordingScope===2)||(A._GetAutoObject(C.
Device).WeightRecordingScope===1))return true;else return false;},A69:function(){
if((A._GetAutoObject(C.Device).WeightRecordingScope===2)||!A._GetAutoObject(C.Device
).WeightRecordingScope)return true;else return false;},Biy:function(AH,AI8,Ac5,Xk
,AfF){if(!AH)throw new Error(As0);var Be=A._NewObject(C.Filter,0);var ApB=AH.Filter;
var Oe=A._NewObject(C.Int32FilterCriterion,0);Oe.Operator=0;Oe.EJ=1;Oe.A4=Ac5;Be.
CW(Oe);if(Xk>0){var Or=A._NewObject(C.UInt32FilterCriterion,0);Or.Operator=2;Or.
EJ=6;Or.A4=Xk;Be.CW(Or);}if(AfF>0){var Oi=A._NewObject(C.UInt32FilterCriterion,0
);Oi.Operator=3;Oi.EJ=6;Oi.A4=AfF;Be.CW(Oi);}AH.Bk(Be);var L8=A._NewObject(C.Int32ArrayWrapper
,0);L8.Zv(6);var O;for(O=0;O<L8.MD;O=O+1)L8.Set(O,0);if(AH.B9()>0){var U9=AH.I5(
0,AI8);var ApT=AH.Hu(O,6);var Ac=A._NewObject(A.Core.Bs,0);Ac.Initialize(ApT);var
Ap_=U9;var AJ1=A._NewObject(A.Core.Bs,0);AJ1.Initialize(Ac.JQ());for(O=1;O<AH.B9(
);O=O+1){U9=AH.I5(O,AI8);ApT=AH.Hu(O,6);Ac.Initialize(ApT);if((Ac.AbX()!==AJ1.AbX(
))||(Ac.Year!==AJ1.Year)){L8.Set(Ap_,L8.Get(Ap_)+1);AJ1.Initialize(Ac.JQ());Ap_=
U9;}else if(!!U9&&(U9<Ap_))Ap_=U9;}L8.Set(Ap_,L8.Get(Ap_)+1);}AH.Bk(ApB);return L8;
},Aql:function(L3){var B;var GG=A._NewObject(A.Core.Bs,0);GG.Initialize(L3);GG.Anw(
0);GG.Anz(0);GG.AnC(0);return((B=(GG.JQ()|0))<0)?B+0x100000000:B;},AN7:function(
L3){var B;L3=L3+86400;var GG=A._NewObject(A.Core.Bs,0);GG.Initialize(L3);GG.Anw(
0);GG.Anz(0);GG.AnC(0);return((B=(GG.JQ()|0))<0)?B+0x100000000:B;},BiA:function(
BBU,ByO,Amb,AlA){var BcE=A._GetAutoObject(C.Helper).L9(BBU,ByO);if(BcE>0)return((
AlA-Amb)/BcE)|0;return 0;},Bpz:function(BwV,Bxz){var GG=A._NewObject(A.Core.Bs,0
);var K6=A._NewObject(A.Core.Bs,0);GG.Initialize(BwV);K6.Initialize(Bxz);return(
GG.Year===K6.Year)&&(GG.AbX()===K6.AbX());},A6x:function(){var Be=A._GetAutoObject(
C.Helper).Mq();var BdH=A._NewObject(C.UInt32FilterCriterion,0);var BxI=A._GetAutoObject(
C.Helper).ZN(A._GetAutoObject(C.Device).AqN)-1;BdH.Initialize(28,2,BxI,true);Be.
CW(BdH);var U5=A._NewObject(C.AnimalTypeFilterCriterion,0);U5.Initialize(14,0,1,
true);Be.CW(U5);if(A._GetAutoObject(C.Device).AqO){var Az$=A._NewObject(C.UInt32FilterCriterion
,0);var A2m=A._GetAutoObject(C.Helper).Dv()-21600;Az$.Initialize(30,3,A2m,true);
Be.CW(Az$);}return Be;},Bob:function(){var Jn=A._GetAutoObject(C.Device).An.Oy();
if(Jn<=0)A.ab5("%s",Xa);else{A._GetAutoObject(C.Device).An.E5();A._GetAutoObject(
C.Device).An.OA(Jn);}Jn=A._GetAutoObject(C.Device).Agu.Oy();if(Jn<=0)A.ab5("%s",
Xa);else{A._GetAutoObject(C.Device).Agu.E5();A._GetAutoObject(C.Device).Agu.OA(Jn
);}Jn=A._GetAutoObject(C.Device).Bt.Oy();if(Jn<=0)A.ab5("%s",Xa);else{A._GetAutoObject(
C.Device).Bt.E5();A._GetAutoObject(C.Device).Bt.OA(Jn);}Jn=A._GetAutoObject(C.Device
).Po.Oy();if(Jn<=0)A.ab5("%s",Xa);else{A._GetAutoObject(C.Device).Po.E5();A._GetAutoObject(
C.Device).Po.OA(Jn);}},BjD:function(Ac5){var Bf=A._GetAutoObject(C.Device).An.LS(
0,Ac5);return this.G7(Bf);},AQ4:function(Ji){var Aix=A._GetAutoObject(C.Device).
An.Aej(22,Ji);return Aix;},ACU:function(){var Be=A._GetAutoObject(C.Helper).Mq();
var Ai$=A._NewObject(C.UInt64FilterCriterion,0);Ai$.Initialize(22,0,0,true);Be.CW(
Ai$);return Be;},AOE:function(AoU,ByL,Qd){var Aak=-1;switch(AoU){case 2:Aak=30;break;
case 3:Aak=31;break;case 10:Aak=19;break;default:A.ab5("%s%e",UX,AoU);}if(Aak<0)
return null;var Adh=A._NewObject(C.UInt32FilterCriterion,0);Adh.Initialize(Aak,3
,A._GetAutoObject(C.Helper).Dv()-ByL,Qd);return Adh;},Bn$:function(aFilter){var AI=
aFilter.DL(30,3);if(!!AI)aFilter.Ni(AI);AI=aFilter.DL(31,3);if(!!AI)aFilter.Ni(AI
);AI=aFilter.DL(19,3);if(!!AI)aFilter.Ni(AI);},A1j:function(AfP,AyP,AH){if(AH.Lg(
))return 5;if(AfP.VisualId<=0)switch(AyP){case 0:if(!AfP.NaisId)return 1;break;case
1:if(!AfP.TransponderId)return 1;break;case 3:case 2:case 5:case 4:return 1;default:
throw new Error(AHl+AyP.toFixed());}if((!AfP.NaisId&&!AfP.TransponderId)&&A._GetAutoObject(
C.Device).An.AjH(1,AfP.VisualId))return 2;if(!!AfP.NaisId&&A._GetAutoObject(C.Helper
).AQ2(AfP.NaisId))return 3;if(!!AfP.TransponderId&&A._GetAutoObject(C.Helper).AQ4(
AfP.TransponderId))return 4;return 0;},Aqe:function(Em){Em.EB(A._GetAutoObject(C.
Device).AnimalType);Em.NZ(A._GetAutoObject(C.Device).Breed);Em.Q4(A._GetAutoObject(
C.Helper).Dv()-A._GetAutoObject(C.Helper).AmD(A._GetAutoObject(C.Device).AdQ));Em.
JS(A._GetAutoObject(C.Device).Gender);Em.Nf(A._GetAutoObject(C.Device).WhereAbouts
);},AMf:function(Rr,Em){var Gt=0;switch(Rr){case 0:Gt=A._GetAutoObject(C.Helper).
Ak3(Em.NaisId);break;case 1:Gt=A._GetAutoObject(C.Helper).Ak3(Em.TransponderId);
break;case 3:Gt=A._GetAutoObject(C.Device).Aq0;break;case 2:Gt=A._GetAutoObject(
C.Device).Aq1;break;case 4:case 5:Gt=A._GetAutoObject(C.Device).AjR;break;default:
throw new Error(AHm+Rr.toFixed());}return Gt;},A$A:function(Alh,L4,Bbz,BwG,Bxd){
var B;var Qq=null;var Xw=null;switch(Alh){case 0:{Qq=[B=A._GetAutoObject(C.Device
),B.ASp,B.AZ2];Xw=[B=A._GetAutoObject(C.Device),B.Awg,B.AyI];}break;case 1:switch(
L4){case 1:{Qq=[B=A._GetAutoObject(C.Device),B.A8D,B.Ba1];Xw=[B=A._GetAutoObject(
C.Device),B.Awe,B.AyG];}break;case 0:{Qq=[B=A._GetAutoObject(C.Device),B.A8E,B.Ba2
];Xw=[B=A._GetAutoObject(C.Device),B.Awf,B.AyH];}break;case 2:{Qq=[B=A._GetAutoObject(
C.Device),B.ASp,B.AZ2];Xw=[B=A._GetAutoObject(C.Device),B.Awg,B.AyI];}break;default:
throw new Error(Ax$+L4.toFixed());}break;default:throw new Error(AHn+Alh.toFixed(
));}if(!!Qq&&!!Xw){Qq[2].call(Qq[0],Bbz);if(Bbz>0){if((Xw[1].call(Xw[0])>0)&&(BwG<
Bxd))Qq[2].call(Qq[0],Qq[1].call(Qq[0])+Xw[1].call(Xw[0]));else if(Xw[1].call(Xw[
0])<0)Qq[2].call(Qq[0],Qq[1].call(Qq[0])+Xw[1].call(Xw[0]));}return Qq[1].call(Qq[
0]);}return 0;},AVg:function(Em,Alh,BwO){if(!Em||(BwO===true))return;switch(Alh){
case 0:Em.Nd(A._GetAutoObject(C.Device).Av0);break;case 1:switch(Em.Gender){case
0:Em.Nd(A._GetAutoObject(C.Device).AEc);break;case 1:Em.Nd(A._GetAutoObject(C.Device
).AEb);break;case 2:Em.Nd(A._GetAutoObject(C.Device).Av0);break;default:throw new
Error(Ax$+Em.Gender.toFixed());}break;default:throw new Error(AHn+Alh.toFixed());
}},Bje:function(Rr,Em){var result=false;switch(Rr){case 0:result=!!Em.NaisId;break;
case 1:result=!!Em.TransponderId;break;case 3:case 2:case 4:case 5:result=false;
break;default:throw new Error(AHm+Rr.toFixed());}return result;},AKc:function(Em
,Bbs,AyP,Atv,AfI){switch(Bbs){case 2:if(Atv<=0)A._GetAutoObject(C.Device).A5(21,
true,Em.VisualId.toFixed(),0,AfI);else A._GetAutoObject(C.Device).A5(48,true,(Em.
VisualId.toFixed()+Aya)+Atv.toFixed(),0,AfI);break;case 3:if(Atv<=0)A._GetAutoObject(
C.Device).A5(21,true,A._GetAutoObject(C.Converter).Rh(Em.NaisId),0,AfI);else A._GetAutoObject(
C.Device).A5(48,true,(A._GetAutoObject(C.Converter).Rh(Em.NaisId)+Aya)+Atv.toFixed(
),0,AfI);break;case 4:if(Atv<=0)A._GetAutoObject(C.Device).A5(25,true,A._GetAutoObject(
C.Converter).Rh(Em.TransponderId),0,AfI);else A._GetAutoObject(C.Device).A5(47,true
,(A._GetAutoObject(C.Converter).Rh(Em.TransponderId)+Aya)+Atv.toFixed(),0,AfI);break;
case 1:switch(AyP){case 1:A._GetAutoObject(C.Device).A5(42,true,A.jV,0,AfI);break;
case 0:A._GetAutoObject(C.Device).A5(43,true,A.jV,0,AfI);break;case 3:case 2:case
5:case 4:A._GetAutoObject(C.Device).A5(22,true,A.jV,0,AfI);break;default:throw new
Error(AHl+AyP.toFixed());}break;case 5:A._GetAutoObject(C.Device).A5(41,true,A._GetAutoObject(
C.Device).An.HI().toFixed(),0,AfI);break;case 0:break;default:throw new Error(AVT+
Bbs.toFixed());}},Bc9:function(BbG,L4){var B;var AAd=null;switch(BbG){case 0:AAd=[
B=A._GetAutoObject(C.Device),B.Awg,B.AyI];break;case 1:switch(L4){case 1:AAd=[B=
A._GetAutoObject(C.Device),B.Awe,B.AyG];break;case 0:AAd=[B=A._GetAutoObject(C.Device
),B.Awf,B.AyH];break;case 2:AAd=[B=A._GetAutoObject(C.Device),B.Awg,B.AyI];break;
default:throw new Error(Ax$+L4.toFixed());}break;default:throw new Error(AVU+BbG.
toFixed());}return AAd;},A6J:function(Qf,Bxq){var AaL=A._NewObject(A.Core.Bs,0);
AaL.Initialize(Qf);var ABu=AaL.Year;var Bf=A._GetAutoObject(C.Device).Po.LS(0,ABu
);var U8=A._NewObject(C.CalfDeregistrations,0);if(Bf<0){if(A._GetAutoObject(C.Device
).Po.Lg())A._GetAutoObject(C.Device).A5(51,true,A._GetAutoObject(C.Device).Po.HI(
).toFixed(),0,null);else{U8.Gp();U8.AkD(ABu);}}else U8.E3(Bf,A._GetAutoObject(C.
Device).Po);U8.Awx(U8.Deregistrations+1);if(Bxq)U8.Aww(U8.Deaths+1);U8.Ch(A._GetAutoObject(
C.Device).Po);},AMd:function(LP,AlK,AlB){var AKz=0;if((AlK&&(AlB===1))||(LP===1)
)AKz=1;else if((AlK&&(AlB===2))||(LP===2))AKz=2;else if(!!LP&&(LP!==5))AKz=LP;return AKz;
},BcJ:function(BxH){var B;if(A._GetAutoObject(C.Device).MeasureState===1){this.SS.
Cw=A._GetAutoObject(C.Device).AcD;this.SS.B1=BxH;this.SS.AnS(this);}},ACR:function(
){var Be=this.AOD();var Bdw=A._NewObject(C.BoolFilterCriterion,0);Bdw.Initialize(
38,0,true,true);Be.CW(Bdw);return Be;},A6o:function(ED){var Be=A._GetAutoObject(
C.Helper).Mq();if(A._GetAutoObject(C.Device).Aqa){var A14=A._GetAutoObject(C.Helper
).AOE(ED,21600,true);Be.CW(A14);}return Be;},A6D:function(){var Be=A._GetAutoObject(
C.Helper).Mq();var BdY=A._NewObject(C.UInt64FilterCriterion,0);BdY.Initialize(26
,0,0,true);Be.CW(BdY);return Be;},A6G:function(){var B;var Be=A._GetAutoObject(C.
Helper).Mq();var AAj=(C.WhereAboutsFilterCriterion.isPrototypeOf(B=Be.DL(34,3))?
B:null);if(!!AAj)Be.Ni(AAj);var Bfi=A._NewObject(C.BoolFilterCriterion,0);Bfi.Initialize(
37,0,true,true);Be.CW(Bfi);return Be;},Si:function(A_,Ato,A0G){var B;A_=Math.trunc(
A_/this.ApN(Ato));A_%=this.ApN(A0G);return A_;},ApN:function(BbH){switch(BbH){case
0:return 1;case 1:return 10;case 2:return 100;case 3:return 1000;case 4:return 10000;
case 5:return 100000;case 6:return 1000000;case 7:return 10000000;case 8:return 100000000;
case 9:return 1000000000;case 10:return 10000000000;case 11:return 100000000000;
case 12:return 1000000000000;case 13:return 10000000000000;case 14:return 100000000000000;
case 15:return 1000000000000000;default:throw new Error(AVV+BbH.toFixed());}},Mq:
function(){var Be=A._NewObject(C.Filter,0);var BfF=A._NewObject(C.BoolFilterCriterion
,0);BfF.Initialize(10,0,true,true);Be.CW(BfF);var AAj=A._NewObject(C.WhereAboutsFilterCriterion
,0);AAj.Initialize(34,3,6,true);Be.CW(AAj);return Be;},Aq$:function(aFilter){return!
this.ACV(aFilter);},ACV:function(aFilter){var Jk=0;var Av=aFilter.AOF();while(!!
Av){if(Av.YE===false)Jk++;Av=aFilter.AOK(Av);}return Jk;},AOD:function(){var Be=
this.Mq();var U5=A._NewObject(C.AnimalTypeFilterCriterion,0);U5.Initialize(14,0,
1,true);Be.CW(U5);return Be;},ACZ:function(){var B;var A36;var J6=this.BiR();A36=(((
B=A._GetAutoObject(C.Converter).Aqv(J6))<0)?B+0x10000000000000000:B)*this.ApN(12
);if((J6===10)&&(A._GetAutoObject(C.Device).PV>0)){var By9=A._GetAutoObject(C.Helper
).Si(A._GetAutoObject(C.Device).PV,10,2)*this.ApN(8);A36+=By9;}return A36;},BiR:
function(){var J6=0;if(A._GetAutoObject(C.Device).PV>0)J6=A._GetAutoObject(C.Converter
).S1(A._GetAutoObject(C.Device).PV);if(!J6)J6=A._GetAutoObject(C.Converter).A7a(
A._GetAutoObject(C.Device).Language);return J6;},AQ2:function(Xj){var Aix=A._GetAutoObject(
C.Device).An.Aej(26,Xj);return Aix;},Aj3:function(AfJ){switch(AfJ){case 0:case 1:
case 2:case 3:case 4:case 5:return false;case 6:case 7:case 8:case 9:case 10:return true;
default:throw new Error(AVW+AfJ.toFixed());}},BgT:function(Rr,Em){var Gt=0;switch(
Rr){case 1:Gt=A._GetAutoObject(C.Helper).Ak3(Em.TransponderId);break;case 0:if(!
A._GetAutoObject(C.Device).EartagNrAssignmentMode)Gt=A._GetAutoObject(C.Device).
AjR;else switch(Em.Gender){case 0:Gt=A._GetAutoObject(C.Device).Aq1;break;case 1:
Gt=A._GetAutoObject(C.Device).Aq0;break;case 2:Gt=A._GetAutoObject(C.Device).AjR;
break;default:throw new Error(AHo+Em.Gender.toFixed());}break;default:throw new Error(
AVX+Rr.toFixed());}return Gt;},Bin:function(){var B;var AzR=(((((((A.aaR(A.acf.AhG
)+A.aaR(A.acf.Colon))+O6)+A._GetAutoObject(C.Device).AhG)+Ayb)+A.aaR(A.acf.BnS))+
A.aaR(A.acf.Colon))+O6)+A._GetAutoObject(A.acj.KK).Bil(((B=A._GetAutoObject(C.Device
).QZ.Timestamp)<0)?B+0x100000000:B);return AzR;},Bio:function(){var B;var AzR=((((((((((((((((((((((((((((
AVY+A._GetAutoObject(C.Device).R0.AD5.toFixed())+Lv)+A._GetAutoObject(C.Device).
R0.AD_.toFixed())+Lv)+A._GetAutoObject(C.Device).R0.AGj.toFixed())+O5)+A._GetAutoObject(
C.Device).R0.ACh)+O5)+A._GetAutoObject(A.acj.KK).AjJ(((B=A._GetAutoObject(C.Device
).R0.Timestamp)<0)?B+0x100000000:B))+O6)+AVZ)+A._GetAutoObject(C.Device).Sz.AD5.
toFixed())+Lv)+A._GetAutoObject(C.Device).Sz.AD_.toFixed())+Lv)+A._GetAutoObject(
C.Device).Sz.AGj.toFixed())+O5)+A._GetAutoObject(C.Device).Sz.ACh)+O5)+A._GetAutoObject(
A.acj.KK).AjJ(((B=A._GetAutoObject(C.Device).Sz.Timestamp)<0)?B+0x100000000:B))+
O6)+AV0)+A._GetAutoObject(C.Helper).BiU())+O5)+A._GetAutoObject(C.Device).GetCommitHash(
))+O5)+A._GetAutoObject(C.Device).GetCommitCount().toFixed())+O5)+A._GetAutoObject(
A.acj.KK).AjJ(A._GetAutoObject(C.Device).GetCommitEpoch());return AzR;},Bim:function(
){var B;var AzR=(((((((((((((((((((((AV1+A._GetAutoObject(C.Device).QZ.ARq.toFixed(
))+Lv)+A._GetAutoObject(C.Device).QZ.ARr.toFixed())+Lv)+A._GetAutoObject(C.Device
).QZ.ARp.toFixed())+O6)+A.aaR(A.acf.A6h))+A.aaR(A.acf.Colon))+Oa)+A._GetAutoObject(
A.acj.KK).AjJ(((B=A._GetAutoObject(C.Device).QZ.Timestamp)<0)?B+0x100000000:B))+
Ayb)+AV2)+A._GetAutoObject(C.Device).SY.AU9.toFixed())+Lv)+A._GetAutoObject(C.Device
).SY.AU_.toFixed())+Lv)+A._GetAutoObject(C.Device).SY.AU8.toFixed())+O6)+A.aaR(A.
acf.A6h))+A.aaR(A.acf.Colon))+Oa)+A._GetAutoObject(A.acj.KK).AjJ(((B=A._GetAutoObject(
C.Device).SY.Timestamp)<0)?B+0x100000000:B);return AzR;},A6E:function(A0G){var B;
var O;var AAQ=A.jV;for(O=1;O<=A0G;O=O+1)if(!!A.abz(0,2))AAQ=AAQ+String.fromCharCode(
A.abz(97,104)&0xFFFF);else AAQ=AAQ+String.fromCharCode(A.abz(48,57)&0xFFFF);return AAQ;
},Abn:function(En){var Ay9=0;if(En===1)En=0;var Bco=this.AgC.Avl(En);if(Bco>=0)Ay9=
this.Afx.Get(Bco);return Ay9;},AC1:function(En){var FV=0;var ABs=this.AgC.Avl(En
);if(ABs>=0)FV=this.Afw.Get(ABs);return FV;},AC0:function(En){var FV=0;var ABs=this.
AgC.Avl(En);if(ABs>=0)FV=this.Afv.Get(ABs);return FV;},A6u:function(){var Be=this.
Mq();var U5=A._NewObject(C.AnimalTypeFilterCriterion,0);U5.Initialize(14,0,A._GetAutoObject(
C.Device).ACA,true);Be.CW(U5);return Be;},AQ5:function(J4){var BM=Math.trunc(J4/
1000000000000)|0;if(!BM)return 0;else if(BM>=900)return 1;else if(!A._GetAutoObject(
C.Converter).ANu(BM))return 2;else return 3;},A6I:function(BzO){var Be=A._GetAutoObject(
C.Helper).ACU();var AfO=A._GetAutoObject(C.Helper).A6p(3,BzO);AfO.YE=true;Be.CW(
AfO);return Be;},A6p:function(Eb,Bbr){var Av=A._NewObject(C.UInt32FilterCriterion
,0);Av.EJ=4;switch(Eb){case 2:{Av.Operator=3;Av.A4=A._GetAutoObject(C.Helper).ZN(
Bbr);}break;case 3:{Av.Operator=2;Av.A4=A._GetAutoObject(C.Helper).ZN(Bbr-1);}break;
default:A.ab5("%s%e",AV3,Eb);}return Av;},BiU:function(){return(((A._GetAutoObject(
C.Device).GetVersionMajor().toFixed()+Lv)+A._GetAutoObject(C.Device).GetVersionMinor(
).toFixed())+Lv)+A._GetAutoObject(C.Device).GetVersionRev().toFixed();},A4O:function(
Rr,Em){var Gt=0;switch(Rr){case 0:Gt=Em.VisualId;break;case 2:Gt=A._GetAutoObject(
C.Helper).Ak3(Em.TransponderId);break;case 3:if(Em.NaisId>0)Gt=A._GetAutoObject(
C.Helper).Ak3(Em.NaisId);else Gt=Em.VisualId;break;case 1:if(!A._GetAutoObject(C.
Device).EartagNrAssignmentMode)Gt=A._GetAutoObject(C.Device).AjR;else switch(Em.
Gender){case 0:Gt=A._GetAutoObject(C.Device).Aq1;break;case 1:Gt=A._GetAutoObject(
C.Device).Aq0;break;case 2:Gt=A._GetAutoObject(C.Device).AjR;break;default:throw new
Error(AHo+Em.Gender.toFixed());}break;default:throw new Error(AHp+Rr.toFixed());
}return Gt;},A$B:function(){var B;var IW=null;var Tg=0;if(!A._GetAutoObject(C.Device
).EartagNrAssignmentMode){IW=[B=A._GetAutoObject(C.Device),B.Ano,B.Aox];Tg=A._GetAutoObject(
C.Device).AuY;}else switch(A._GetAutoObject(C.Helper).W.Gender){case 1:{IW=[B=A.
_GetAutoObject(C.Device),B.Awa,B.AyE];Tg=A._GetAutoObject(C.Device).ACs;}break;case
0:{IW=[B=A._GetAutoObject(C.Device),B.Awb,B.AyF];Tg=A._GetAutoObject(C.Device).ACt;
}break;case 2:{IW=[B=A._GetAutoObject(C.Device),B.Ano,B.Aox];Tg=A._GetAutoObject(
C.Device).AuY;}break;default:;}if(!!IW)switch(Tg){case 1:IW[2].call(IW[0],A._GetAutoObject(
C.Helper).W.VisualId-1);break;case 0:IW[2].call(IW[0],A._GetAutoObject(C.Helper).
W.VisualId+1);break;default:;}},A6_:function(Xj,Em){return(Em.NaisId!==Xj)&&this.
AQ2(Xj);},Bjo:function(Ji,Em){return(Em.TransponderId!==Ji)&&this.AQ4(Ji);},AOB:
function(){var Be=A._GetAutoObject(C.Helper).A6G();var AAb=A._NewObject(C.UInt64FilterCriterion
,0);AAb.Initialize(35,5,0,true);Be.CW(AAb);return Be;},Avm:function(){var Be=A._GetAutoObject(
C.Helper).A6G();var AAb=A._NewObject(C.UInt64FilterCriterion,0);AAb.Initialize(35
,0,0,true);Be.CW(AAb);return Be;},JY:function(A0x,Ah4){A0x.Aj(Ah4);A0x.Ar(Ah4);A0x.
Z(Ah4);},ANo:function(Ah6){var B;var Aa;var A2H=false;var Xq=Ah6.TN(null,0x1);while(
!!Xq&&(((B=Xq)?B.__proto__:null)!==A.Core.Y)){Aa=(A.kR.Co.isPrototypeOf(Xq)?Xq:null
);if(!!Aa){Aa.Bi(A2H);A2H=!A2H;}Xq=Ah6.TN(Xq,0x1);}},Boa:function(Ji){var Xm=A._GetAutoObject(
C.Device).An.Filter;A._GetAutoObject(C.Device).An.Bk(null);var A3O=A._GetAutoObject(
C.Device).An.AgV(22,Ji);var Cy=A._NewObject(C.Animal,0);Cy.E3(A3O,A._GetAutoObject(
C.Device).An);Cy.PT(0);Cy.Ch(A._GetAutoObject(C.Device).An);A._GetAutoObject(C.Device
).An.Bk(Xm);},A6s:function(Atn){var Be=null;switch(Atn){case 0:Be=this.BiF();break;
case 1:Be=this.ACU();break;default:throw new Error(AHq+Atn.toFixed());}return Be;
},BiF:function(){var Be=A._GetAutoObject(C.Helper).Mq();var AfO=this.A6p(2,100);
Be.CW(AfO);return Be;},Bx6:function(Atn){var Xm=A._GetAutoObject(C.Device).An.Filter;
A._GetAutoObject(C.Device).An.Bk(this.A6s(Atn));var CB=A._GetAutoObject(C.Device
).An.B9();var O;for(O=CB-1;O>=0;O--){A._GetAutoObject(C.Helper).G7(O);A._GetAutoObject(
C.Helper).W.Ae3(false);A._GetAutoObject(C.Helper).W.Ch(A._GetAutoObject(C.Device
).An);}A._GetAutoObject(C.Device).An.Bk(Xm);},BiG:function(Atn){var Xm=A._GetAutoObject(
C.Device).An.Filter;A._GetAutoObject(C.Device).An.Bk(this.A6s(Atn));var Gf=A._GetAutoObject(
C.Device).An.B9();A._GetAutoObject(C.Device).An.Bk(Xm);return Gf;},A6A:function(
AH){var Xm=AH.Filter;AH.Bk(this.Avm());var O;var A2x=4294967295;for(O=0;O<AH.B9(
);O++){var O_=AH.Hu(O,4);if(O_<A2x)A2x=O_;}AH.Bk(Xm);return A._GetAutoObject(C.Helper
).L9(A2x,A._GetAutoObject(C.Helper).Dv());},Bjl:function(){if(A._GetAutoObject(C.
Device).P1.ZX!==6)return false;if((A._GetAutoObject(C.Device).P1.AsM===1529)&&(A.
_GetAutoObject(C.Device).P1.Ase===16900))return true;return false;},Art:function(
){return this.Ux;},A8N:function(){return this.AhD;},BkZ:function(){return this.AUg;
},Bk0:function(){return this.AUh;},Bk3:function(){return this.AGL;},_Init:function(
aArg){C.AmI._Init.call(this,aArg);C.Animal._Init.call(this.W={I:this},0);A.Core.
Bs._Init.call(this.Au={I:this},0);A.acl.Gk._Init.call(this.KG={I:this},0);A.acl.
Gk._Init.call(this.SS={I:this},0);C.AMz._Init.call(this.AdY={I:this},0);C.AUY._Init.
call(this.UE={I:this},0);C.AUX._Init.call(this.UD={I:this},0);C.TG._Init.call(this.
Ael={I:this},0);C.AVB._Init.call(this.Afw={I:this},0);C.AVA._Init.call(this.Afv={
I:this},0);C.AVz._Init.call(this.Afu={I:this},0);C.AVD._Init.call(this.Afx={I:this
},0);C.AMA._Init.call(this.AgC={I:this},0);this.__proto__=C.HelperClass;var B;this.
KG.HM(1);this.KG.Fp(3000);this.KG.B1=100;this.SS.AwC(10);this.SS.WC(5);this.SS.HM(
1);this.SS.Fp(4000);this.Ael.B1=false;this.Ael.Cw=true;this.Ael.HM(1);this.Ael.Fp(
100);this.KG.SA=[this,this.BBW];this.KG.Q=[this,this.Bk3,this.Bnk];this.SS.SA=[this
,this.BBY];this.SS.Q=[B=A._GetAutoObject(C.Device),B.AEA,B.AIN];this.Ael.Q=[B=A.
_GetAutoObject(C.Device),B.AEB,B.AIO];this.Init(aArg);var J2=this._variants();if(
J2){this.K={};J2._Init.call(this,aArg);}},_Done:function(){if(this.K)this.K._Done.
call(this);this.__proto__=C.AmI;this.W._Done();this.Au._Done();this.KG._Done();this.
SS._Done();this.AdY._Done();this.UE._Done();this.UD._Done();this.Ael._Done();this.
Afw._Done();this.Afv._Done();this.Afu._Done();this.Afx._Done();this.AgC._Done();
C.AmI._Done.call(this);},_ReInit:function(){C.AmI._ReInit.call(this);this.W._ReInit(
);this.Au._ReInit();this.KG._ReInit();this.SS._ReInit();this.AdY._ReInit();this.
UE._ReInit();this.UD._ReInit();this.Ael._ReInit();this.Afw._ReInit();this.Afv._ReInit(
);this.Afu._ReInit();this.Afx._ReInit();this.AgC._ReInit();if(this.K)this.K._ReInit.
call(this);},_Mark:function(D){var B;C.AmI._Mark.call(this,D);if((B=this.Ux)&&(B.
_cycle!=D))B._Mark(B._cycle=D);if((B=this.AhD)&&(B._cycle!=D))B._Mark(B._cycle=D
);if((B=this.AUg)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.AUh)&&(B._cycle!=
D))B._Mark(B._cycle=D);if((B=this.W)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Au
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.KG)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.SS)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AdY)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.UE)._cycle!=D)B._Mark(B._cycle=D);if((B=this.UD)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Ael)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Afw)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.Afv)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
Afu)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Afx)._cycle!=D)B._Mark(B._cycle=D);
if((B=this.AgC)._cycle!=D)B._Mark(B._cycle=D);if(this.K)this.K._Mark(D);},_variants:
function(){return A.acs.HelperClass._variants();},K:null,_className:"Device::HelperClass"
};C.Helper={_Init:function(){C.HelperClass._Init.call(this,0);},_ReInit:function(
){},_variants:function(){return this;},_this:null};C.BoolFilterCriterion={A4:false
,Abg:function(){var Av=A._NewObject(C.BoolFilterCriterion,0);Av.E_(this);return Av;
},E_:function(AI){C.FilterCriterion.E_.call(this,AI);var Av=(C.BoolFilterCriterion.
isPrototypeOf(AI)?AI:null);if(!!Av)this.A4=Av.A4;},Initialize:function(A3,Eb,A_,
Qd){this.EJ=A3;this.Operator=Eb;this.A4=A_;this.YE=Qd;return this;},_Init:function(
aArg){C.FilterCriterion._Init.call(this,aArg);this.__proto__=C.BoolFilterCriterion;
},_className:"Device::BoolFilterCriterion"};C.UInt32FilterCriterion={A4:0,Abg:function(
){var Av=A._NewObject(C.UInt32FilterCriterion,0);Av.E_(this);return Av;},E_:function(
AI){C.FilterCriterion.E_.call(this,AI);var Av=(C.UInt32FilterCriterion.isPrototypeOf(
AI)?AI:null);if(!!Av)this.A4=Av.A4;},Initialize:function(A3,Eb,A_,Qd){this.EJ=A3;
this.Operator=Eb;this.A4=A_;this.YE=Qd;return this;},_Init:function(aArg){C.FilterCriterion.
_Init.call(this,aArg);this.__proto__=C.UInt32FilterCriterion;},_className:"Device::UInt32FilterCriterion"
};C.OverlayMenu={None:0,Home:1,AutoAction:2,MenuItemSettings:3,RatingSettings:4,
WeighingSettings:5,Options:6,AnimalSearch:7,ActionSettings:8,MeasurementReady:9,
AnimalMultiInfoMenu:10,AnimalSearchUnfiltered:11,AnimalSearchDriedOff:12,MassRecordingMenu:
13,MassRecordingDefaults:14,MassRecordingFields:15,BirthRegistrationsListMenu:16
,LAST:17};C.EnumToString={BR:function(A7){throw new Error(Aol+A7.toFixed());},Lu:
function(A7){return this.BR(A7);},_Init:function(aArg){this.__proto__=C.EnumToString;
A.h7++;},_Done:function(){this.__proto__=null;A.h7--;},_ReInit:function(){},_Mark:
function(D){var B;if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:
0,_observers:null,_className:"Device::EnumToString"};C.ScreenTypeToString={BR:function(
A7){var AJP=A7;var BC;switch(AJP){case 3:BC=A.aaR(A.acf.Avs);break;case 34:BC=A.
aaR(A.acf.Tv);break;case 35:BC=A.aaR(A.acf.Vt);break;case 43:BC=A.aaR(A.acf.AOA);
break;default:BC=this.BpA(A7);}return BC;},BpA:function(A7){var AJP=A7;var BC=A.
jV;switch(AJP){case 0:BC=Ayc;break;case 2:BC=AV4;break;case 4:BC=AV5;break;case 39:
BC=AV6;break;case 38:BC=AHr;break;case 63:BC=AV7;break;case 64:BC=AHs;break;case
82:BC=AHt;break;case 83:BC=AHu;break;case 92:BC=AV8;break;case 93:BC=AHv;break;case
65:BC=AV9;break;case 3:BC=AHw;break;case 6:BC=Rn;break;case 16:BC=Xb;break;case 22:
BC=AV_;break;case 42:BC=AV$;break;case 88:BC=AWa;break;case 87:BC=AWb;break;case
89:BC=AWc;break;case 95:BC=AWd;break;case 17:BC=AWe;break;case 23:BC=AhW;break;case
18:BC=AHx;break;case 19:BC=AWf;break;case 37:BC=AWg;break;case 76:BC=AHy;break;case
1:BC=AHz;break;case 5:BC=Ayd;break;case 7:BC=Qa;break;case 81:BC=AWh;break;case 8:
BC=AWi;break;case 9:BC=AWj;break;case 40:BC=As1;break;case 41:BC=AWk;break;case 24:
BC=AWl;break;case 10:BC=AWm;break;case 60:BC=AWn;break;case 21:BC=AWo;break;case
11:BC=AWp;break;case 29:BC=As2;break;case 48:BC=AWq;break;case 30:BC=AWr;break;case
12:BC=AWs;break;case 13:BC=AWt;break;case 14:BC=AWu;break;case 15:BC=AWv;break;case
69:BC=AWw;break;case 70:BC=AWx;break;case 20:BC=AWy;break;case 25:BC=AWz;break;case
66:BC=AHA;break;case 59:BC=Ala;break;case 58:BC=AWA;break;case 56:BC=AWB;break;case
57:BC=AWC;break;case 68:BC=Aye;break;case 67:BC=Alb;break;case 84:BC=AhX;break;case
77:BC=Ayf;break;case 26:BC=Aom;break;case 28:BC=AhY;break;case 27:BC=AWD;break;case
31:BC=Ayg;break;case 78:BC=AHB;break;case 34:BC=AfC;break;case 35:BC=AHC;break;case
32:BC=Aab;break;case 45:BC=Alc;break;case 49:BC=Aon;break;case 55:BC=AWE;break;case
54:BC=AWF;break;case 33:BC=AWG;break;case 36:BC=AWH;break;case 50:BC=AWI;break;case
75:BC=As3;break;case 43:BC=AHD;break;case 44:BC=AHE;break;case 61:BC=AWJ;break;case
62:BC=AWK;break;case 46:BC=AWL;break;case 47:BC=AWM;break;case 85:BC=AWN;break;case
86:BC=AWO;break;case 71:BC=AWP;break;case 72:BC=AWQ;break;case 74:BC=AWR;break;case
73:BC=AWS;break;case 51:BC=AWT;break;case 52:BC=Ayh;break;case 53:BC=AHF;break;case
79:BC=AHG;break;case 80:BC=AHH;break;case 90:BC=AHI;break;case 91:BC=AHJ;break;case
94:BC=AHK;break;default:throw new Error(AWU+AJP.toFixed());}return BC;},_Init:function(
aArg){C.EnumToString._Init.call(this,aArg);this.__proto__=C.ScreenTypeToString;}
,_className:"Device::ScreenTypeToString"};C.OverlayMenuToString={BR:function(A7){
var Bfd=A7;var Pc=A.jV;switch(Bfd){case 0:Pc=AWV;break;case 1:Pc=AHw;break;case 8:
Pc=AWW;break;case 2:Pc=AWX;break;case 3:Pc=AWY;break;case 4:Pc=AWZ;break;case 5:
Pc=AW0;break;case 6:Pc=Ayi;break;case 7:Pc=AHL;break;case 11:Pc=AW1;break;case 12:
Pc=AHM;break;case 9:Pc=AhZ;break;case 10:Pc=UY;break;case 14:Pc=AW2;break;case 15:
Pc=Aac;break;case 13:Pc=AW3;break;case 16:Pc=AW4;break;default:throw new Error(Ald+
Bfd.toFixed());}return Pc;},_Init:function(aArg){C.EnumToString._Init.call(this,
aArg);this.__proto__=C.OverlayMenuToString;},_className:"Device::OverlayMenuToString"
};C.ScanStateToString={BR:function(A7){var BfO=A7;var Bp=A.jV;switch(BfO){case 4:
Bp=Aad;break;case 0:Bp=AcO;break;case 2:Bp=Ayj;break;case 3:Bp=AW5;break;case 1:
Bp=Ob;break;default:throw new Error(AHN+BfO.toFixed());}return Bp;},_Init:function(
aArg){C.EnumToString._Init.call(this,aArg);this.__proto__=C.ScanStateToString;},
_className:"Device::ScanStateToString"};C.MeasureStateToString={BR:function(A7){
var BdS=A7;var Bp=A.jV;switch(BdS){case 4:Bp=Aad;break;case 0:Bp=AcO;break;case 2:
Bp=AW6;break;case 1:Bp=Ob;break;case 3:Bp=AHO;break;default:throw new Error(AW7+
BdS.toFixed());}return Bp;},_Init:function(aArg){C.EnumToString._Init.call(this,
aArg);this.__proto__=C.MeasureStateToString;},_className:"Device::MeasureStateToString"
};C.TemperatureUnit={Celsius:0,Fahrenheit:1,LAST:2};C.TemperatureUnitToString={BR:
function(A7){var Bgb=A7;var Ap4=A.jV;switch(Bgb){case 0:Ap4=A.aaR(A.acf.BpT);break;
case 1:Ap4=A.aaR(A.acf.BpU);break;default:throw new Error(AHP+Bgb.toFixed());}return Ap4;
},_Init:function(aArg){C.EnumToString._Init.call(this,aArg);this.__proto__=C.TemperatureUnitToString;
},_className:"Device::TemperatureUnitToString"};C.AnimalType={DairyCalf:0,DairyCow:
1,SheepLamb:2,LAST:3};C.AnimalTypeToString={BR:function(A7){var AK0=A7;var type=
A.jV;switch(AK0){case 0:type=A.aaR(A.acf.Bhi);break;case 1:type=A.aaR(A.acf.Bhw);
break;case 2:type=A.aaR(A.acf.Bjw);break;default:throw new Error(AHQ+AK0.toFixed(
));}return type;},_Init:function(aArg){C.EnumToString._Init.call(this,aArg);this.
__proto__=C.AnimalTypeToString;},_className:"Device::AnimalTypeToString"};C.Language={
Default:0,German:1,Spanish:2,French:3,Italian:4,Finnish:5,Chinese_TW:6,Turkish:7
,Greek:8,Russian:9,Dutch:10,Czech:11,Estonian:12,Bulgarian:13,Bosnian:14,Norwegian:
15,Ukrainian:16,LAST:17};C.LanguageToString={BR:function(A7){var Az6=A7;var Pb=A.
jV;switch(Az6){case 0:Pb=AW8;break;case 10:Pb=AW9;break;case 1:Pb=AW_;break;case
12:Pb=AW$;break;case 5:Pb=AXa;break;case 3:Pb=AXb;break;case 8:Pb=AXc;break;case
13:Pb=AXd;break;case 4:Pb=AHR;break;case 9:Pb=AXe;break;case 2:Pb=AHS;break;case
7:Pb=AHT;break;case 6:Pb=Ayk;break;case 11:Pb=AXf;break;case 14:Pb=AXg;break;case
15:Pb=AXh;break;case 16:Pb=AXi;break;default:throw new Error(AHU+Az6.toFixed());
}return Pb;},Lu:function(A7){var Az6=A7;var Do=A.jV;switch(Az6){case 0:Do=AXj;break;
case 10:Do=W8;break;case 1:Do=O3;break;case 12:Do=AXk;break;case 5:Do=US;break;case
3:Do=W4;break;case 8:Do=AXl;break;case 13:Do=W1;break;case 4:Do=W5;break;case 9:
Do=S$;break;case 2:Do=Z_;break;case 7:Do=W_;break;case 6:Do=As4;break;case 11:Do=
As5;break;case 14:Do=AHV;break;case 15:Do=S_;break;case 16:Do=KY;break;default:throw new
Error(AHU+Az6.toFixed());}return Do;},_Init:function(aArg){C.EnumToString._Init.
call(this,aArg);this.__proto__=C.LanguageToString;},_className:"Device::LanguageToString"
};C.Gender={Male:0,Female:1,Unknown:2,LAST:3};C.BirthType={Single:0,Twins:1,Triplets:
2,Quadruplets:3,LAST:4};C.GenderToString={BR:function(A7){var AtN=A7;var AJ7=A.jV;
switch(AtN){case 0:AJ7=A.aaR(A.acf.Male);break;case 1:AJ7=A.aaR(A.acf.Female);break;
case 2:AJ7=A.aaR(A.acf.Unknown);break;default:throw new Error(AXm+AtN.toFixed());
}return AJ7;},_Init:function(aArg){C.EnumToString._Init.call(this,aArg);this.__proto__=
C.GenderToString;},_className:"Device::GenderToString"};C.BirthTypeToString={BR:
function(A7){var type=A7;var AfS=A.jV;switch(type){case 0:AfS=A.aaR(A.acf.BoO);break;
case 1:AfS=A.aaR(A.acf.BpP);break;case 2:AfS=A.aaR(A.acf.Triplets);break;case 3:
AfS=A.aaR(A.acf.Quadruplets);break;default:throw new Error(AXn+type.toFixed());}
return AfS;},_Init:function(aArg){C.EnumToString._Init.call(this,aArg);this.__proto__=
C.BirthTypeToString;},_className:"Device::BirthTypeToString"};C.SyncState={Idle:
0,Init:1,Exporting:2,ImportStart:3,Importing:4,ImportFinish:5,Ready:6,Error:7,LAST:
8};C.SyncStateToString={BR:function(A7){var Bf7=A7;var Bp=A.jV;switch(Bf7){case 7:
Bp=Aad;break;case 0:Bp=AcO;break;case 6:Bp=AHO;break;case 2:Bp=AXo;break;case 5:
Bp=AXp;break;case 3:Bp=AXq;break;case 4:Bp=AXr;break;case 1:Bp=AXs;break;default:
throw new Error(AXt+Bf7.toFixed());}return Bp;},_Init:function(aArg){C.EnumToString.
_Init.call(this,aArg);this.__proto__=C.SyncStateToString;},_className:"Device::SyncStateToString"
};C.RatedAttributeToString={BR:function(A7){var AAR=A7;switch(AAR){case 0:return A.
jV;case 1:return A.aaR(A.acf.Bn0);case 4:return A.aaR(A.acf.BnZ);case 3:return A.
aaR(A.acf.Bn1);case 2:return A.aaR(A.acf.BnY);default:throw new Error(AHW+AAR.toFixed(
));}},Lu:function(A7){var AAR=A7;switch(AAR){case 0:return A.jV;case 1:return A.
aaR(A.acf.Feed);case 4:return A.aaR(A.acf.AGb);case 3:return A.aaR(A.acf.AGc);case
2:return A.aaR(A.acf.AF$);default:throw new Error(AHW+AAR.toFixed());}},_Init:function(
aArg){C.EnumToString._Init.call(this,aArg);this.__proto__=C.RatedAttributeToString;
},_className:"Device::RatedAttributeToString"};C.AssesmentToString={BR:function(
A7){var Alq=A7;var Aze=A.jV;switch(Alq){case 0:case 5:Aze=A.jV;break;case 3:Aze=
A.aaR(A.acj.BoU);break;case 2:Aze=A.aaR(A.acj.BoW);break;case 1:Aze=A.aaR(A.acj.
BoV);break;default:throw new Error(AXu+Alq.toFixed());}return Aze;},_Init:function(
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
111,BarcodeScannerDisconnectedSwitchScreen:112,LAST:113};C.PopupState={Queued:0,
Unknown:1,Displayed:2,ClosedAfterTimeOut:3,ClosedWithOk:4,ClosedWithCancel:5,ClosedByMiddleware:
6,ClosedWithYes:7,ClosedWithNo:8,Opened:9};C.PopupContext={AFY:null,AkF:A.jV,Ak0:
0,PopupState:1,Id:0,Show:false,Bm5:function(E){var B;if(this.PopupState===E)return;
this.PopupState=E;if(!!this.AFY)(B=this.AFY)?B[1].call(B[0],this):null;},_Init:function(
aArg){this.__proto__=C.PopupContext;A.h7++;},_Done:function(){this.__proto__=null;
A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((B=this.AFY)&&((B=B[0]).
_cycle!=D))B._Mark(B._cycle=D);if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);
},I:null,_cycle:0,_observers:null,_className:"Device::PopupContext"};C.Boolean={
No:0,Yes:1,LAST:2};C.BooleanToYesNo={BR:function(A7){switch(A7){case 0:return A.
aaR(A.acf.No);case 1:return A.aaR(A.acf.Yes);default:return Ayl+A7.toFixed();}},
_Init:function(aArg){C.EnumToString._Init.call(this,aArg);this.__proto__=C.BooleanToYesNo;
},_className:"Device::BooleanToYesNo"};C.AnimalGroupTableFields={Id:0,GroupName:
1};C.AnimalGroup={GroupName:AHk,Id:0,E3:function(Ad,AH){var HD=C.Row.E3.call(this
,Ad,AH);if(HD&&!!AH){this.OnSetId(AH.CF(Ad,0));this.AE8(AH.VY(Ad,1));}return HD;
},Ch:function(AH){var HD=C.Row.Ch.call(this,AH);if(HD&&!!AH){var Jn=AH.Oy();if(Jn<=
0)A.ab5("%s",Xa);else{if(this.Am2())this.CL=AH.YB();AH.Hn(this.CL,0,this.Id);AH.
ZF(this.CL,1,this.GroupName);AH.OA(Jn);}}return HD;},Gp:function(){C.Row.Gp.call(
this);this.OnSetId(-1);},E5:function(){C.Row.E5.call(this);this.OnSetId(0);this.
AE8(A.jV);},OnSetId:function(E){if(this.Id===E)return;this.Id=E;A.abo([this,this.
Q2,this.OnSetId],0);},AE8:function(E){if(this.GroupName===E)return;this.GroupName=
E;A.abo([this,this.BkD,this.AE8],0);},Q2:function(){return this.Id;},BkD:function(
){return this.GroupName;},_Init:function(aArg){C.Row._Init.call(this,aArg);this.
__proto__=C.AnimalGroup;this.TableId=3;},_className:"Device::AnimalGroup"};C.PopupIdToString={
BR:function(A7){var AdB=A7;var Aw=A.jV;var AJN;AJN=A.aaR(A.acf.Bqb)+O6;switch(AdB
){case 0:Aw=A.aaR(A.acf.Unknown);break;case 1:Aw=A.aaR(A.acf.SevereError);break;
case 58:Aw=A.aaR(A.acf.Bia);break;case 2:Aw=A.aaR(A.acf.Bh_);break;case 3:Aw=A.aaR(
A.acf.BpZ);break;case 77:Aw=A._GetAutoObject(C.Helper).Bio();break;case 78:Aw=A.
_GetAutoObject(C.Helper).Bim();break;case 79:Aw=A._GetAutoObject(C.Helper).Bin();
break;case 9:Aw=A.aaR(A.acf.Bqp);break;case 5:Aw=A.aaR(A.acf.SuccessDataSync);break;
case 8:Aw=A.aaR(A.acf.SuccessResetFactorySettings);break;case 34:Aw=A.aaR(A.acf.
SuccessResetAnimalData);break;case 10:Aw=A._GetAutoObject(C.Device).ACY();break;
case 82:Aw=A.aaR(A.acf.Bic);break;case 83:Aw=A.aaR(A.acf.Bid);break;case 80:Aw=A.
aaR(A.acf.Bo6);break;case 81:Aw=A.aaR(A.acf.SuccessRestoreBackup);break;case 91:
Aw=A.aaR(A.acf.Bg7);break;case 92:Aw=A.aaR(A.acf.Bod);break;case 4:Aw=A.aaR(A.acf.
WarningDataSync);break;case 7:Aw=A.aaR(A.acf.Bqn);break;case 33:Aw=A.aaR(A.acf.WarningResetAnimalData
);break;case 6:Aw=A.aaR(A.acf.WarningRestart);break;case 27:Aw=A.aaR(A.acf.WarningNoActionDefined
);break;case 64:Aw=A.aaR(A.acf.WarningActionNotApplicable);break;case 28:Aw=A.aaR(
A.acf.WarningNoMenuItemVisible);break;case 29:Aw=A.aaR(A.acf.WarningEnterPresentationMode
);break;case 30:Aw=A.aaR(A.acf.WarningNoAnimalsRegistered);break;case 41:Aw=((AJN+
A.aaR(A.acf.ARy))+O6)+A.aaR(A.acf.BjJ);break;case 50:Aw=((AJN+A.aaR(A.acf.ARy))+
O6)+A.aaR(A.acf.BjL);break;case 51:Aw=((AJN+A.aaR(A.acf.ARy))+O6)+A.aaR(A.acf.BjK
);break;case 42:Aw=A.aaR(A.acf.Bql);break;case 45:Aw=A.aaR(A.acf.Bqf);break;case
46:Aw=A.aaR(A.acf.WarningNoValidCountryCode);break;case 57:Aw=A.aaR(A.acf.WarningOutdatedAnimalWeight
);break;case 52:Aw=A.aaR(A.acf.WarningOutdatedAnimalWeights);break;case 53:Aw=A.
aaR(A.acf.WarningWeightEvaluationSingular);break;case 56:Aw=A.aaR(A.acf.WarningWeightEvaluationPlural
);break;case 11:Aw=A.aaR(A.acf.ScanError);break;case 12:Aw=A.aaR(A.acf.ScanNotFound
);break;case 13:Aw=A.aaR(A.acf.BgZ);break;case 36:Aw=A.aaR(A.acf.BpI);break;case
14:Aw=A.aaR(A.acf.AnimalNotFound);break;case 15:Aw=A.aaR(A.acf.SuccessUnregister
);break;case 35:Aw=A.aaR(A.acf.SuccessUnregisterPerished);break;case 26:Aw=A.aaR(
A.acf.SuccessCreationNewAnimal);break;case 23:Aw=A.aaR(A.acf.SuccessCreationNewAnimals
);break;case 24:Aw=A.aaR(A.acf.Bhz);break;case 49:Aw=A.aaR(A.acf.EvaluationInProgress
);break;case 16:Aw=A.aaR(A.acf.BhE);break;case 17:Aw=A.aaR(A.acf.BoY);break;case
18:Aw=A.aaR(A.acf.Bpa);break;case 19:Aw=A.aaR(A.acf.BoZ);break;case 20:Aw=A.aaR(
A.acf.Bpb);break;case 54:Aw=A.aaR(A.acf.Bo7);break;case 55:Aw=A.aaR(A.acf.Bo_);break;
case 21:Aw=A.aaR(A.acf.A$G);break;case 48:Aw=(A.aaR(A.acf.A$G)+O6)+A.aaR(A.acf.A5u
);break;case 22:Aw=A.aaR(A.acf.Bqh);break;case 63:Aw=A.aaR(A.acf.Bqi);break;case
85:Aw=A.aaR(A.acf.Bqk);break;case 43:Aw=A.aaR(A.acf.Bqj);break;case 25:Aw=A.aaR(
A.acf.A$q);break;case 47:Aw=(A.aaR(A.acf.A$q)+O6)+A.aaR(A.acf.A5u);break;case 107:
Aw=A.aaR(A.acf.BpV);break;case 31:{var Bzy=(((((((((((((((((((A.aaR(A.acf.Bhq)+Ayb
)+A.aaR(A.acf.ANq))+A.aaR(A.acf.Colon))+Oa)+A.aaR(A.acf.Bhs))+O6)+A.aaR(A.acf.AOq
))+A.aaR(A.acf.Colon))+Oa)+A.aaR(A.acf.Bii))+O6)+A.aaR(A.acf.AT3))+A.aaR(A.acf.Colon
))+Oa)+A.aaR(A.acf.Bn3))+O6)+A.aaR(A.acf.AT2))+A.aaR(A.acf.Colon))+Oa)+A.aaR(A.acf.
Bn2);Aw=Bzy;}break;case 32:Aw=A.aaR(A.acf.BpJ);break;case 69:Aw=A.aaR(A.acf.BjW);
break;case 44:Aw=A.aaR(A.acf.Bqo);break;case 37:Aw=A.aaR(A.acf.WarningResetWeightSettings
);break;case 38:Aw=A.aaR(A.acf.WarningResetTempThresholds);break;case 39:Aw=A.aaR(
A.acf.BnT);break;case 76:Aw=(A.aaR(A.acf.A49)+O6)+A.aaR(A.acf.AT5);break;case 40:
Aw=A.aaR(A.acf.Bo8);break;case 75:Aw=A.aaR(A.acf.Bo0);break;case 59:Aw=A.aaR(A.acf.
QuestionAddAnotherCalfMultiples);break;case 62:Aw=A.aaR(A.acf.Bo2);break;case 96:
Aw=A.aaR(A.acf.Bo3);break;case 60:Aw=A.aaR(A.acf.Bo4);break;case 98:Aw=A.aaR(A.acf.
Bo5);break;case 61:Aw=A.aaR(A.acf.Bpc);break;case 104:Aw=A.aaR(A.acf.Bpd);break;
case 65:Aw=A.aaR(A.acf.SuccessClearAnimalLoss);break;case 66:Aw=A.aaR(A.acf.WarningNoActionsForAnimalLoss
);break;case 67:Aw=A.aaR(A.acf.SuccessLinkTransponder);break;case 106:Aw=A.aaR(A.
acf.Bo1);break;case 86:Aw=A.aaR(A.acf.SuccessUnlinkTransponder);break;case 68:Aw=
A.aaR(A.acf.Bo9);break;case 70:Aw=A.aaR(A.acf.Bie);break;case 71:Aw=A.aaR(A.acf.
Bpg);break;case 72:Aw=A.aaR(A.acf.Bph);break;case 97:Aw=A.aaR(A.acf.Big);break;case
100:Aw=A.aaR(A.acf.Bpi);break;case 99:Aw=A.aaR(A.acf.Bpj);break;case 88:Aw=A.aaR(
A.acf.Bif);break;case 89:Aw=A.aaR(A.acf.Bpe);break;case 90:Aw=A.aaR(A.acf.Bpf);break;
case 73:Aw=A.aaR(A.acf.WarningNoPremisesID);break;case 74:Aw=A.aaR(A.acf.WarningNoFlashDrivePresent
);break;case 94:Aw=A.aaR(A.acf.WarningNoBackupPathPresent);break;case 93:Aw=A.aaR(
A.acf.WarningNoBackupFilePresent);break;case 84:Aw=A.aaR(A.acf.Biv);break;case 87:
Aw=A.aaR(A.acf.Bqr);break;case 95:Aw=A.aaR(A.acf.Bqe);break;case 108:Aw=A.aaR(A.
acf.Bqg);break;case 109:Aw=A.aaR(A.acf.SuccessMassDeregistration);break;case 102:
Aw=A.aaR(A.acf.WarningParsedDateInFutureInvalid);break;case 101:Aw=A.aaR(A.acf.WarningParsingDateFailed
);break;case 103:Aw=A.aaR(A.acf.WarningParsingNaisIdFailed);break;case 105:Aw=A.
aaR(A.acf.Bqm);break;case 110:Aw=A.aaR(A.acf.Bhh);break;case 111:Aw=A.aaR(A.acf.
Bop);break;case 112:Aw=A.aaR(A.acf.Boq);break;default:throw new Error(AHX+AdB.toFixed(
));}return Aw;},Lu:function(A7){var AdB=A7;var Aw=A.jV;switch(AdB){case 0:Aw=AXv;
break;case 1:Aw=AXw;break;case 58:Aw=AXx;break;case 2:Aw=AXy;break;case 3:Aw=AXz;
break;case 77:Aw=AXA;break;case 78:Aw=AHY;break;case 79:Aw=AHZ;break;case 9:Aw=AH0;
break;case 5:Aw=AH1;break;case 8:Aw=Aym;break;case 34:Aw=Ayn;break;case 80:Aw=AH2;
break;case 81:Aw=AXB;break;case 91:Aw=AH3;break;case 92:Aw=AXC;break;case 82:Aw=
AH4;break;case 83:Aw=AXD;break;case 10:Aw=AXE;break;case 4:Aw=AXF;break;case 7:Aw=
AXG;break;case 33:Aw=AXH;break;case 6:Aw=AXI;break;case 27:Aw=AXJ;break;case 64:
Aw=AXK;break;case 28:Aw=AXL;break;case 29:Aw=AXM;break;case 30:Aw=AXN;break;case
41:Aw=AXO;break;case 50:Aw=Ayo;break;case 51:Aw=AXP;break;case 42:Aw=AXQ;break;case
45:Aw=Ayp;break;case 46:Aw=As6;break;case 57:Aw=UZ;break;case 52:Aw=As7;break;case
53:Aw=AXR;break;case 56:Aw=AXS;break;case 11:Aw=AXT;break;case 12:Aw=AH5;break;case
13:Aw=AXU;break;case 36:Aw=AH6;break;case 14:Aw=AXV;break;case 15:Aw=AXW;break;case
35:Aw=AXX;break;case 26:Aw=As8;break;case 23:Aw=AXY;break;case 24:Aw=AXZ;break;case
49:Aw=AH7;break;case 16:Aw=AX0;break;case 17:Aw=AX1;break;case 18:Aw=AX2;break;case
19:Aw=AX3;break;case 20:Aw=AcP;break;case 54:Aw=AX4;break;case 55:Aw=AX5;break;case
21:Aw=AX6;break;case 48:Aw=AX7;break;case 22:Aw=AH8;break;case 63:Aw=AX8;break;case
43:Aw=AX9;break;case 85:Aw=AX_;break;case 25:Aw=AX$;break;case 47:Aw=AYa;break;case
107:Aw=AYb;break;case 31:Aw=AH9;break;case 32:Aw=AYc;break;case 69:Aw=AYd;break;
case 44:Aw=AYe;break;case 37:Aw=AH_;break;case 38:Aw=AH$;break;case 39:Aw=AYf;break;
case 76:Aw=AYg;break;case 40:Aw=AYh;break;case 75:Aw=AYi;break;case 59:Aw=Ro;break;
case 62:Aw=As9;break;case 96:Aw=AIa;break;case 60:Aw=AIb;break;case 98:Aw=Aoo;break;
case 65:Aw=Aop;break;case 61:Aw=Ayq;break;case 104:Aw=AYj;break;case 66:Aw=AIc;break;
case 67:Aw=AYk;break;case 106:Aw=AYl;break;case 86:Aw=AYm;break;case 68:Aw=AYn;break;
case 70:Aw=AYo;break;case 71:Aw=AYp;break;case 72:Aw=AYq;break;case 97:Aw=AYr;break;
case 100:Aw=AYs;break;case 99:Aw=AYt;break;case 88:Aw=AYu;break;case 89:Aw=AYv;break;
case 90:Aw=AYw;break;case 73:Aw=AYx;break;case 74:Aw=AYy;break;case 94:Aw=AYz;break;
case 93:Aw=AYA;break;case 84:Aw=Aoq;break;case 87:Aw=AId;break;case 95:Aw=AYB;break;
case 108:Aw=AIe;break;case 109:Aw=AIf;break;case 102:Aw=AcQ;break;case 101:Aw=AIg;
break;case 103:Aw=AYC;break;case 105:Aw=AIh;break;case 110:Aw=AYD;break;case 111:
Aw=Ayr;break;case 112:Aw=AYE;break;default:throw new Error(AHX+AdB.toFixed());}return Aw;
},_Init:function(aArg){C.EnumToString._Init.call(this,aArg);this.__proto__=C.PopupIdToString;
},_className:"Device::PopupIdToString"};C.PopupParamSeparator=";";C.RatingMode={
Basic:0,Extended:1,LAST:2};C.TransponderType={UNDEFINED:0,AnimalId:1,FarmId:2,GroupId:
3,PersonId:4,LAST:5};C.TransponderProtocol={UNDEFINED:0,FDX:1,HDX:2,HDX_URBAN:3,
LAST:4};C.TransponderTypeToString={BR:function(A7){var Bgn=A7;var type=A.jV;switch(
Bgn){case 1:type=AYF;break;case 2:type=Ays;break;case 3:type=AYG;break;case 4:type=
AYH;break;case 0:type=Ayc;break;default:throw new Error(AYI+Bgn.toFixed());}return type;
},_Init:function(aArg){C.EnumToString._Init.call(this,aArg);this.__proto__=C.TransponderTypeToString;
},_className:"Device::TransponderTypeToString"};C.TransponderProtocolToString={BR:
function(A7){var Bgl=A7;var AAO=A.jV;switch(Bgl){case 1:AAO=AIi;break;case 2:AAO=
Aor;break;case 3:AAO=AIj;break;case 0:AAO=Ayc;break;default:throw new Error(AYJ+
Bgl.toFixed());}return AAO;},_Init:function(aArg){C.EnumToString._Init.call(this
,aArg);this.__proto__=C.TransponderProtocolToString;},_className:"Device::TransponderProtocolToString"
};C.Transponder={Id:0,TransponderProtocol:0,TransponderType:0,ATy:function(E){if(
this.TransponderType===E)return;this.TransponderType=E;A.abo([this,this.Bld,this.
ATy],0);},ATx:function(E){if(this.TransponderProtocol===E)return;this.TransponderProtocol=
E;A.abo([this,this.Blc,this.ATx],0);},OnSetId:function(E){if(this.Id===E)return;
this.Id=E;A.abo([this,this.Q2,this.OnSetId],0);},AON:function(){return A._GetAutoObject(
C.Converter).BpH(this.Id);},BiD:function(){return A._GetAutoObject(C.Converter).
AxO(this.Id);},Bld:function(){return this.TransponderType;},Blc:function(){return this.
TransponderProtocol;},Q2:function(){return this.Id;},_Init:function(aArg){this.__proto__=
C.Transponder;A.h7++;},_Done:function(){this.__proto__=null;A.h7--;},_ReInit:function(
){},_Mark:function(D){var B;if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:
null,_cycle:0,_observers:null,_className:"Device::Transponder"};C.RatingModeToString={
BR:function(A7){var Ve=A7;var Nt=A.jV;switch(Ve){case 0:Nt=A.aaR(A.acf.Basic);break;
case 1:Nt=A.aaR(A.acf.Extended);break;default:throw new Error(AIk+Ve.toFixed());
}return Nt;},_Init:function(aArg){C.EnumToString._Init.call(this,aArg);this.__proto__=
C.RatingModeToString;},_className:"Device::RatingModeToString"};C.TableRowsCount={
_Init:function(aArg){this.__proto__=C.TableRowsCount;A.h7++;},_Done:function(){this.
__proto__=null;A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((B=this.
I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:
"Device::TableRowsCount"};C.MassUnit={Kilogramm:0,Pound:1,LAST:2};C.MassUnitToString={
BR:function(A7){var BdO=A7;var Ap4=A.jV;switch(BdO){case 0:Ap4=A.aaR(A.acf.Bju);
break;case 1:Ap4=A.aaR(A.acf.Pound);break;default:throw new Error(AIl+BdO.toFixed(
));}return Ap4;},_Init:function(aArg){C.EnumToString._Init.call(this,aArg);this.
__proto__=C.MassUnitToString;},_className:"Device::MassUnitToString"};C.MinWeightGain=
20;C.MaxWeightGain=2000;C.WeightGainStep=10;C.Int32ArrayWrapper={MD:10,Array:A.abi(
10,0,null),Zv:function(E){if(this.MD===E)return;if(E>10)throw new Error(Ale);this.
MD=E;},Set:function(aIndex,AL){if((aIndex<0)||(aIndex>=this.MD))throw new Error(
AIm);this.Array.Set(aIndex,AL);},Get:function(aIndex){if((aIndex<0)||(aIndex>=this.
MD))throw new Error(AIm);return this.Array.Get(aIndex);},AmS:function(){var Qw=0;
var O;for(O=0;O<this.MD;O=O+1)Qw=Qw+this.Get(O);return Qw;},toString:function(){
var A2F=this.Array.Get(0).toFixed();var O;for(O=1;O<this.MD;O=O+1)A2F=(A2F+O5)+this.
Array.Get(O).toFixed();return A2F;},E3:function(aString){var Hz=aString.indexOf(
String.fromCharCode(0x2C),0);var A1r=A.jV;var O=0;while(O<10){if(aString===A.jV)
this.Array.Set(O,0);else{if(Hz===-1){A1r=aString;aString=A.jV;}else{A1r=A.abV(aString
,Hz);aString=A.ab1(aString,0,Hz+1);}this.Array.Set(O,A.wz(A1r,0,10));Hz=aString.
indexOf(String.fromCharCode(0x2C),0);}O=O+1;}if(aString!==A.jV)A.ab5("%s",Aos);}
,Ch:function(){},E5:function(){var O;for(O=0;O<this.MD;O=O+1)this.Set(O,0);},Avl:
function(A_){var O=0;while(O<this.MD){if(this.Array.Get(O)===A_)return O;O=O+1;}
return-1;},H3:function(){var O=0;var max=-1;while(O<this.MD){if(this.Array.Get(O
)>max)max=this.Array.Get(O);O=O+1;}return max;},_Init:function(aArg){(this.Array=[
]).__proto__=C.Int32ArrayWrapper.Array;this.__proto__=C.Int32ArrayWrapper;A.h7++;
},_Done:function(){this.__proto__=null;A.h7--;},_ReInit:function(){},_Mark:function(
D){var B;if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:
null,_className:"Device::Int32ArrayWrapper"};C.ActionToString={BR:function(A7){var
Azz=A7;var E8=A.jV;switch(Azz){case 4:E8=A.aaR(A.acf.Alarm);break;case 256:E8=A.
aaR(A.acf.Weighing);break;case 128:E8=A.aaR(A.acf.A55);break;case 16:E8=A.aaR(A.
acf.AMg);break;case 1:E8=A.aaR(A.acf.Temperature);break;case 32:E8=A.aaR(A.acf.AnimalLoss
);break;case 2:E8=A.aaR(A.acf.Rating);break;case 8:E8=A.aaR(A.acf.Ar_);break;case
64:E8=A.aaR(A.acf.Unregister);break;case 512:E8=A.aaR(A.acf.ARS);break;case 1024:
E8=A.aaR(A.acf.LinkTransponder);break;case 262144:E8=A.aaR(A.acf.UnlinkTransponder
);break;case 2048:E8=A.aaR(A.acf.Tv);break;case 4096:E8=A.aaR(A.acf.Calving);break;
case 8192:E8=A.aaR(A.acf.DryOff);break;case 16384:E8=A.aaR(A.acf.A7h);break;case
32768:E8=A.aaR(A.acf.AB4);break;case 524288:E8=A.aaR(A.acf.AB6);break;case 65536:
E8=A.aaR(A.acf.Delete);break;case 131072:E8=A.aaR(A.acf.A7i);break;case 0:E8=A.aaR(
A.acf.A7F);break;default:throw new Error(AIn+Azz.toFixed());}return E8;},Lu:function(
A7){var Azz=A7;var E8=A.jV;switch(Azz){case 4:E8=A.aaR(A.acf.Alarm);break;case 256:
E8=A.aaR(A.acf.Weighing);break;case 128:E8=A.aaR(A.acf.A55);break;case 16:E8=A.aaR(
A.acf.AMg);break;case 1:E8=A.aaR(A.acf.Temperature);break;case 32:E8=A.aaR(A.acf.
AnimalLoss);break;case 2:E8=A.aaR(A.acf.Rating);break;case 8:E8=A.aaR(A.acf.Ar_);
break;case 64:E8=A.aaR(A.acf.Unregister);break;case 512:E8=A.aaR(A.acf.ARS);break;
case 1024:E8=A.aaR(A.acf.LinkTransponder);break;case 262144:E8=A.aaR(A.acf.UnlinkTransponder
);break;case 2048:E8=A.aaR(A.acf.Tv);break;case 4096:E8=A.aaR(A.acf.Calving);break;
case 8192:E8=A.aaR(A.acf.DryOff);break;case 32768:E8=A.aaR(A.acf.AB4);break;case
524288:E8=A.aaR(A.acf.AB6);break;case 65536:E8=A.aaR(A.acf.Delete);break;case 16384:
case 131072:E8=A.aaR(A.acf.BjB);break;case 0:E8=A.aaR(A.acf.A7F);break;default:throw new
Error(AIn+Azz.toFixed());}return E8;},_Init:function(aArg){C.EnumToString._Init.
call(this,aArg);this.__proto__=C.ActionToString;},_className:"Device::ActionToString"
};C.ACTIONS_COUNT=19;C.PopupTimeout=2000;C.ITable={Filter:null,Id:2,CF:function(
Ad,A3){return 0;},VY:function(Ad,A3){return A.jV;},Akk:function(G){A.we(this,0);
A.pe([this,this.DX],this);},H2:function(Ad,A3){return false;},Hu:function(Ad,A3){
return this.Sk(Ad,A3);},OnSetId:function(E){if(this.Id===E)return;this.Id=E;},B9:
function(){return 0;},Bk:function(E){if(this.Filter===E)return;this.Filter=E;A.abo([
this,this.Fn,this.Fr],0);},Fr:function(Aq){this.Bk(Aq);},I5:function(Ad,A3){var BBa=
this.VZ(Ad,A3);return A._GetAutoObject(C.Converter).A$t(BBa);},VZ:function(Ad,A3
){return 0;},Sk:function(Ad,A3){return 0;},A6F:function(Ad,A3){return this.CF(Ad
,A3);},Oy:function(){var Jn=0;var BBX=this.Id;return Jn;},OA:function(AoM){var HD=
0;var BBX=this.Id;return HD===1;},YB:function(){return-1;},ZH:function(Ad,A3,CZ){
return false;},Hn:function(Ad,A3,CZ){return false;},ZG:function(Ad,A3,CZ){return false;
},N5:function(Ad,A3,CZ){return false;},ZF:function(Ad,A3,CZ){return false;},Ack:
function(Ad,A3,CZ){return this.ZG(Ad,A3,CZ);},AkP:function(Ad,A3,CZ){var BBb=A._GetAutoObject(
C.Converter).AdZ(CZ);return this.ZH(Ad,A3,BBb);},A_7:function(Ad,A3,CZ){return this.
Hn(Ad,A3,CZ);},AOH:function(Ad,A3){return this.CF(Ad,A3);},BiB:function(Ad,A3){return this.
CF(Ad,A3);},Boz:function(Ad,A3,CZ){return this.Hn(Ad,A3,CZ);},Bov:function(Ad,A3
,CZ){return this.Hn(Ad,A3,CZ);},LS:function(aColumn,A_){return-1;},AmQ:function(
Ad,A3){return this.CF(Ad,A3);},Bot:function(Ad,A3,CZ){return this.Hn(Ad,A3,CZ);}
,ACW:function(Ad,A3){return this.CF(Ad,A3);},AUn:function(Ad,A3,ML){return this.
Hn(Ad,A3,ML);},DX:function(G){this.Byd();},Byd:function(){return-1;},KN:function(
Ad,A3){return 0;},Uy:function(Ad,A3,CZ){return false;},AgV:function(aColumn,A_){
return-1;},E5:function(){return false;},BiC:function(Ad,A3){var BBc=this.CF(Ad,A3
);return A._GetAutoObject(C.Converter).Bi4(BBc);},BiH:function(Ad,A3){return this.
CF(Ad,A3);},AOP:function(Ad,A3){return this.CF(Ad,A3);},Box:function(Ad,A3,CZ){var
BBd=A._GetAutoObject(C.Converter).A5e(CZ);return this.Hn(Ad,A3,BBd);},Boy:function(
Ad,A3,CZ){return this.Hn(Ad,A3,CZ);},BoF:function(Ad,A3,CZ){return this.Hn(Ad,A3
,CZ);},AjH:function(aColumn,A_){return false;},Aej:function(aColumn,A_){return false;
},BiQ:function(Ad,A3){return this.CF(Ad,A3);},BoD:function(Ad,A3,CZ){return this.
Hn(Ad,A3,CZ);},Lg:function(){return this.QI()>=this.HI();},HI:function(){return 0;
},Abo:function(){return-1;},QI:function(){return 0;},Fn:function(){return this.Filter;
},_Init:function(aArg){this.__proto__=C.ITable;A.h7++;},_Done:function(){this.__proto__=
null;A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((B=this.Filter)&&(
B._cycle!=D))B._Mark(B._cycle=D);if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D
);},I:null,_cycle:0,_observers:null,_className:"Device::ITable"};C.MaxAutoActionsCount=
4;C.WeightRecordingMode={Automatic:0,Manual:1,LAST:2};C.WeightRecordingModeToString={
BR:function(A7){var Ve=A7;var Nt=A.jV;switch(Ve){case 0:Nt=A.aaR(A.acf.Automatic
);break;case 1:Nt=A.aaR(A.acf.Manual);break;default:throw new Error(AIo+Ve.toFixed(
));}return Nt;},_Init:function(aArg){C.EnumToString._Init.call(this,aArg);this.__proto__=
C.WeightRecordingModeToString;},_className:"Device::WeightRecordingModeToString"
};C.BooleanToAutoOnOff={BR:function(A7){switch(A7){case 0:return A.aaR(A.acf.Off
);case 1:return A.aaR(A.acf.Aa0);default:return Ayl+A7.toFixed();}},_Init:function(
aArg){C.EnumToString._Init.call(this,aArg);this.__proto__=C.BooleanToAutoOnOff;}
,_className:"Device::BooleanToAutoOnOff"};C.WeightStep=100;C.WeightRecordingScope={
CurrentWeightOnly:0,BirthWeightOnly:1,BirthAndCurrentWeight:2,NoWeightRecording:
3,LAST:4};C.WeightRecordingScopeToString={BR:function(A7){var BfP=A7;var AA3=A.jV;
switch(BfP){case 0:AA3=A.aaR(A.acf.BhB);break;case 1:AA3=A.aaR(A.acf.Bhd);break;
case 2:AA3=A.aaR(A.acf.Bg$);break;case 3:AA3=A.aaR(A.acf.Bj3);break;default:throw new
Error(AIp+BfP.toFixed());}return AA3;},_Init:function(aArg){C.EnumToString._Init.
call(this,aArg);this.__proto__=C.WeightRecordingScopeToString;},_className:"Device::WeightRecordingScopeToString"
};C.BodyTemperature={Undertemperature:0,Normal:1,Elevated:2,Fever:3,LAST:4};C.Kj={
A4N:0,Temperature:1,Rating:2,Aft:3,BCA:4,BDf:5,BF1:6,BDV:7,BEF:8,BDt:9,BED:10,BE6:
11,BE7:12,BF6:13,BCL:14,LAST:15};C.AnimalListContentToString={BR:function(A7){var
Bcd=A7;var Rw=A.jV;switch(Bcd){case 0:Rw=AYK;break;case 14:Rw=AYL;break;case 2:Rw=
AIq;break;case 1:Rw=AYM;break;case 3:Rw=AYN;break;case 4:Rw=AYO;break;case 5:Rw=
AYP;break;case 6:Rw=AYQ;break;case 7:Rw=AYR;break;case 8:Rw=AYS;break;case 9:Rw=
AYT;break;case 10:Rw=AYU;break;case 11:Rw=AYV;break;case 12:Rw=AYW;break;case 13:
Rw=AYX;break;default:throw new Error(AYY+Bcd.toFixed());}return Rw;},_Init:function(
aArg){C.EnumToString._Init.call(this,aArg);this.__proto__=C.AnimalListContentToString;
},_className:"Device::AnimalListContentToString"};C.GenderFilterCriterion={A4:0,
Abg:function(){var Av=A._NewObject(C.GenderFilterCriterion,0);Av.E_(this);return Av;
},E_:function(AI){C.FilterCriterion.E_.call(this,AI);var Av=(C.GenderFilterCriterion.
isPrototypeOf(AI)?AI:null);if(!!Av)this.A4=Av.A4;},_Init:function(aArg){C.FilterCriterion.
_Init.call(this,aArg);this.__proto__=C.GenderFilterCriterion;},_className:"Device::GenderFilterCriterion"
};C.AnimalTypeFilterCriterion={A4:0,Abg:function(){var Av=A._NewObject(C.AnimalTypeFilterCriterion
,0);Av.E_(this);return Av;},E_:function(AI){C.FilterCriterion.E_.call(this,AI);var
Av=(C.AnimalTypeFilterCriterion.isPrototypeOf(AI)?AI:null);if(!!Av)this.A4=Av.A4;
},Initialize:function(A3,Eb,A_,Qd){this.EJ=A3;this.Operator=Eb;this.A4=A_;this.YE=
Qd;return this;},_Init:function(aArg){C.FilterCriterion._Init.call(this,aArg);this.
__proto__=C.AnimalTypeFilterCriterion;},_className:"Device::AnimalTypeFilterCriterion"
};C.BCN={Aux:0,BCM:1,BEp:2,A_O:3,A5m:4,BFH:5,BDe:6,BFG:7,LinkTransponder:8,Tv:9,
Weighing:10,Calving:11,LinkNaisId:12,BE5:13,ClearBirthNoticePending:14,DeleteAnimal:
15,ScanNaisId:16,Edit:17,ClearPurchaseNoticePending:18};C.AutoRegistrationModeToString={
BR:function(A7){var Ve=A7;var Nt=A.jV;switch(Ve){case 0:Nt=A.aaR(A.acf.Bht);break;
case 1:Nt=A.aaR(A.acf.Bi8);break;case 2:Nt=A.aaR(A.acf.Off);break;default:throw new
Error(AYZ+Ve.toFixed());}return Nt;},_Init:function(aArg){C.EnumToString._Init.call(
this,aArg);this.__proto__=C.AutoRegistrationModeToString;},_className:"Device::AutoRegistrationModeToString"
};C.AutoRegistrationMode={UserConfirmed:0,Background:1,Off:2,LAST:3};C.AssessmentFilterCriterion={
A4:0,Abg:function(){var Av=A._NewObject(C.AssessmentFilterCriterion,0);Av.E_(this
);return Av;},E_:function(AI){C.FilterCriterion.E_.call(this,AI);var Av=(C.AssessmentFilterCriterion.
isPrototypeOf(AI)?AI:null);if(!!Av)this.A4=Av.A4;},Initialize:function(A3,Eb,A_,
Qd){this.EJ=A3;this.Operator=Eb;this.A4=A_;this.YE=Qd;return this;},_Init:function(
aArg){C.FilterCriterion._Init.call(this,aArg);this.__proto__=C.AssessmentFilterCriterion;
},_className:"Device::AssessmentFilterCriterion"};C.D9={AdS:0,Temperature:1,Aft:
2,Rating:3,LAST:4};C.FactoryResetScope={DeviceAndAnimalData:0,AnimalDataOnly:1,LAST:
2};C.FactoryResetScopeToString={BR:function(A7){switch(A7){case 0:return A.aaR(A.
acf.DeviceAndAnimalData);case 1:return A.aaR(A.acf.AnimalDataOnly);default:return AIr+
A7.toFixed();}},_Init:function(aArg){C.EnumToString._Init.call(this,aArg);this.__proto__=
C.FactoryResetScopeToString;},_className:"Device::FactoryResetScopeToString"};C.
AUY={Ch:function(){A._GetAutoObject(C.Device).Ar3(this.toString());},Init:function(
aArg){var B;A.zX([this,this.BeW],[B=A._GetAutoObject(C.Device),B.A8W,B.Ba7],0);this.
BeW(this);},BeW:function(G){this.E3(A._GetAutoObject(C.Device).AGQ);A.we(this,0);
},_Init:function(aArg){C.Int32ArrayWrapper._Init.call(this,aArg);this.__proto__=
C.AUY;this.Zv(3);this.Init(aArg);},_className:"Device::TemperaturesLowClass"};C.
AUX={Init:function(aArg){var B;A.zX([this,this.BeU],[B=A._GetAutoObject(C.Device
),B.A8V,B.Ba6],0);this.BeU(this);},Ch:function(){A._GetAutoObject(C.Device).Ar2(
this.toString());},BeU:function(G){this.E3(A._GetAutoObject(C.Device).AGP);A.we(
this,0);},_Init:function(aArg){C.Int32ArrayWrapper._Init.call(this,aArg);this.__proto__=
C.AUX;this.Zv(3);this.Init(aArg);},_className:"Device::TemperaturesHighClass"};C.
AMz={Init:function(aArg){var B;A.zX([this,this.Ben],[B=A._GetAutoObject(C.Device
),B.A8b,B.BaM],0);this.Ben(this);},Ben:function(G){this.E3(A._GetAutoObject(C.Device
).ABE);A.we(this,0);},_Init:function(aArg){C.Int32ArrayWrapper._Init.call(this,aArg
);this.__proto__=C.AMz;this.Zv(3);this.Init(aArg);},_className:"Device::AnimalTypesClass"
};C.UInt64FilterCriterion={A4:0,Abg:function(){var Av=A._NewObject(C.UInt64FilterCriterion
,0);Av.E_(this);return Av;},E_:function(AI){C.FilterCriterion.E_.call(this,AI);var
Av=(C.UInt64FilterCriterion.isPrototypeOf(AI)?AI:null);if(!!Av)this.A4=Av.A4;},Initialize:
function(A3,Eb,A_,Qd){this.EJ=A3;this.Operator=Eb;this.A4=A_;this.YE=Qd;return this;
},_Init:function(aArg){C.FilterCriterion._Init.call(this,aArg);this.__proto__=C.
UInt64FilterCriterion;},_className:"Device::UInt64FilterCriterion"};C.BooleanToAssignedUnassignedString={
BR:function(A7){switch(A7){case 0:return A.aaR(A.acf.Akj);case 1:return A.aaR(A.
acf.BgR);default:return Ayl+A7.toFixed();}},_Init:function(aArg){C.EnumToString.
_Init.call(this,aArg);this.__proto__=C.BooleanToAssignedUnassignedString;},_className:
"Device::BooleanToAssignedUnassignedString"};C.C6={UNDEFINED:0,AT:1,BA:2,BE:3,BCS:
4,BC7:5,BC8:6,BC9:7,BC_:8,BC$:9,BDj:10,BDk:11,BDu:12,BDv:13,BDK:14,FR:15,GR:16,BDW:
17,BDX:18,BD4:19,BD5:20,BD_:21,BD$:22,BEa:23,BEb:24,BEh:25,BEv:26,BEw:27,BEL:28,
BEM:29,BE3:30,BE4:31,BFk:32,BFl:33,BFm:34,BFA:35,BFB:36,BFU:37,A$u:38,BFV:39,LAST:
40};C.CountryToString={BR:function(A7){var J6=A7;var FF=A.jV;switch(J6){case 1:FF=
A.aaR(A.acm.Bg3);break;case 2:FF=A.aaR(A.acm.Bhe);break;case 3:FF=A.aaR(A.acm.Bg_
);break;case 4:FF=A.aaR(A.acm.Bhg);break;case 5:FF=A.aaR(A.acm.Bhj);break;case 6:
FF=A.aaR(A.acm.Bpn);break;case 7:FF=A.aaR(A.acm.Bhm);break;case 8:FF=A.aaR(A.acm.
BhC);break;case 9:FF=A.aaR(A.acm.BhD);break;case 10:FF=A.aaR(A.acm.Biw);break;case
11:FF=A.aaR(A.acm.BhI);break;case 12:FF=A.aaR(A.acm.Bib);break;case 13:FF=A.aaR(
A.acm.BoR);break;case 14:FF=A.aaR(A.acm.Bik);break;case 15:FF=A.aaR(A.acm.Bis);break;
case 16:FF=A.aaR(A.acm.BiY);break;case 17:FF=A.aaR(A.acm.BhA);break;case 18:FF=A.
aaR(A.acm.Bi5);break;case 19:FF=A.aaR(A.acm.Bjc);break;case 20:FF=A.aaR(A.acm.Bjp
);break;case 21:FF=A.aaR(A.acm.Bjr);break;case 22:FF=A.aaR(A.acm.BjC);break;case
23:FF=A.aaR(A.acm.BjF);break;case 24:FF=A.aaR(A.acm.Bjz);break;case 25:FF=A.aaR(
A.acm.BjH);break;case 26:FF=A.aaR(A.acm.BjX);break;case 27:FF=A.aaR(A.acm.Bj4);break;
case 28:FF=A.aaR(A.acm.BnM);break;case 29:FF=A.aaR(A.acm.BnN);break;case 30:FF=A.
aaR(A.acm.Boe);break;case 31:FF=A.aaR(A.acm.Bog);break;case 32:FF=A.aaR(A.acm.Bpm
);break;case 33:FF=A.aaR(A.acm.BoQ);break;case 34:FF=A.aaR(A.acm.BoP);break;case
35:FF=A.aaR(A.acm.BpO);break;case 36:FF=A.aaR(A.acm.Bpw);break;case 37:FF=A.aaR(
A.acm.BpS);break;case 38:FF=A.aaR(A.acm.A$u);break;case 39:FF=A.aaR(A.acm.BpR);break;
case 0:FF=Rp;break;default:throw new Error(Aog+J6.toFixed());}return FF;},Lu:function(
A7){var J6=A7;var BM=A.jV;switch(J6){case 1:BM=S9;break;case 2:BM=Z1;break;case 3:
BM=UQ;break;case 4:BM=W1;break;case 5:BM=It;break;case 6:BM=Z$;break;case 7:BM=UR;
break;case 8:BM=Z3;break;case 9:BM=W3;break;case 10:BM=O3;break;case 11:BM=Z4;break;
case 12:BM=Z5;break;case 13:BM=Z_;break;case 14:BM=US;break;case 15:BM=W4;break;
case 16:BM=Z6;break;case 17:BM=W2;break;case 18:BM=O4;break;case 19:BM=Rl;break;
case 20:BM=W5;break;case 21:BM=W6;break;case 22:BM=Z7;break;case 23:BM=Z8;break;
case 24:BM=UT;break;case 25:BM=W7;break;case 26:BM=W8;break;case 27:BM=S_;break;
case 28:BM=UU;break;case 29:BM=UV;break;case 30:BM=AcK;break;case 31:BM=S$;break;
case 32:BM=W9;break;case 33:BM=Afz;break;case 34:BM=Z9;break;case 35:BM=W_;break;
case 36:BM=Z2;break;case 37:BM=AhS;break;case 38:BM=KY;break;case 39:BM=AcL;break;
case 0:BM=Rp;break;default:throw new Error(Aog+J6.toFixed());}return BM;},_Init:
function(aArg){C.EnumToString._Init.call(this,aArg);this.__proto__=C.CountryToString;
},_className:"Device::CountryToString"};C.EaseOfDelivery={Unspecified:0,Easy:1,Moderate:
2,Difficult:3,Surgery:4,LAST:5};C.EaseOfDeliveryToString={BR:function(A7){var BcN=
A7;var AtH=A.jV;switch(BcN){case 0:AtH=A.aaR(A.acf.Unspecified);break;case 1:AtH=
A.aaR(A.acf.Easy);break;case 2:AtH=A.aaR(A.acf.Moderate);break;case 3:AtH=A.aaR(
A.acf.Difficult);break;case 4:AtH=A.aaR(A.acf.Surgery);break;default:throw new Error(
AY0+BcN.toFixed());}return AtH;},_Init:function(aArg){C.EnumToString._Init.call(
this,aArg);this.__proto__=C.EaseOfDeliveryToString;},_className:"Device::EaseOfDeliveryToString"
};C.WhereAbouts={UNB:0,EZU:1,EMA:2,VZU:3,VMA:4,VIV:5,TOT:6,V48:7,V3T:8,MGE:9,VKB:
10,LAST:11};C.WhereAboutsToString={BR:function(A7){var BgF=A7;var AaO=A.jV;switch(
BgF){case 0:AaO=A.aaR(A.acf.Unknown);break;case 1:AaO=A.aaR(A.acf.Bp1);break;case
2:AaO=A.aaR(A.acf.Bp0);break;case 3:AaO=A.aaR(A.acf.Bp9);break;case 4:AaO=A.aaR(
A.acf.Bp8);break;case 5:AaO=A.aaR(A.acf.Bp6);break;case 6:AaO=A.aaR(A.acf.Bp3);break;
case 7:AaO=A.aaR(A.acf.Bp5);break;case 8:AaO=A.aaR(A.acf.Bp4);break;case 9:AaO=A.
aaR(A.acf.Bp2);break;case 10:AaO=A.aaR(A.acf.Bp7);break;default:throw new Error(
Ayt+BgF.toFixed());}return AaO;},_Init:function(aArg){C.EnumToString._Init.call(
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
Error(AY1+Bv.toFixed());}return BH;},_Init:function(aArg){C.EnumToString._Init.call(
this,aArg);this.__proto__=C.BreedToString;},_className:"Device::BreedToString"};
C.TG={timer:null,Q:null,Ec:0,Dx:0,JP:0,Pr:1000,PA:1000,Bw:false,Cw:false,B1:true
,Me:function(G){var F;if(!this.timer)return;if(this.Ec<0){this.Dx=this.timer.Bs;
this.Ec=0;}var Au=(this.timer.Bs-this.Dx)|0;var Op=this.Pr;var Hf=this.PA+this.Pr;
var LD=0;var Jk=this.Ec;if(!Jk&&(Au>=Op)){Jk=1;Au=Au-Op;}if((Jk>0)&&(Au>=Hf)){var
Ie=(Au/Hf)|0;Au=Au-(Ie*Hf);Jk=Jk+Ie;}if((Jk>2)&&!this.JP)Jk=1;if(Jk!==this.Ec){this.
Dx=this.timer.Bs-(((B=Au)<0)?B+0x100000000:B);this.Ec=Jk;}if(Jk>0)LD=this.PA;var
KD=(Jk>=this.JP)&&(this.JP>0);if(!!this.Q){if((!KD&&(Au>=LD))&&((F=this.Q,F[1].call(
F[0]))!==this.Cw))(F=this.Q,F[2].call(F[0],this.Cw));if((KD||((Au<LD)&&(Jk>0)))&&((
F=this.Q,F[1].call(F[0]))!==this.B1))(F=this.Q,F[2].call(F[0],this.B1));}if(KD)this.
Ar(false);},HM:function(E){if(E<0)E=0;this.JP=E;},Fp:function(E){if(E<100)E=100;
this.Pr=E;},Um:function(E){if(E<0)E=0;this.PA=E;},Ar:function(E){if(this.Bw===E)
return;this.Bw=E;if(!E&&!!this.timer){A.z9([this,this.Me],this.timer,0);this.timer=
null;}if(E){this.timer=A._GetAutoObject(A.acl.Aeg);A.zV([this,this.Me],this.timer
,0);this.Ec=-1;}},_Init:function(aArg){this.__proto__=C.TG;A.h7++;},_Done:function(
){this.__proto__=null;A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((
B=this.timer)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Q)&&((B=B[0])._cycle
!=D))B._Mark(B._cycle=D);if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null
,_cycle:0,_observers:null,_className:"Device::BoolEffect"};C.Ij={AnimalId:0,TransponderId:
1,BEk:2,BEj:3,BEn:4,BEm:5};C.AuX={BCQ:0,BDn:1};C.AnimalIdGenerationMethodToString={
BR:function(A7){var Alo=A7;var AoV=A.jV;switch(Alo){case 0:AoV=A.aaR(A.acf.Uf);break;
case 1:AoV=A.aaR(A.acf.Transponder);break;case 3:AoV=(A.aaR(A.acf.Manual)+Oa)+A.
aaR(A.acf.Male);break;case 2:AoV=(A.aaR(A.acf.Manual)+Oa)+A.aaR(A.acf.Female);break;
case 4:AoV=(A.aaR(A.acf.Manual)+Oa)+A.aaR(A.acf.Unknown);break;case 5:AoV=(A.aaR(
A.acf.Manual)+Oa)+AY2;break;default:throw new Error(AY3+Alo.toFixed());}return AoV;
},_Init:function(aArg){C.EnumToString._Init.call(this,aArg);this.__proto__=C.AnimalIdGenerationMethodToString;
},_className:"Device::AnimalIdGenerationMethodToString"};C.DirectionOfCountingToString={
BR:function(A7){var Azy=A7;var A1y=A.jV;switch(Azy){case 0:A1y=AY4;break;case 1:
A1y=AY5;break;default:throw new Error(AY6+Azy.toFixed());}return A1y;},_Init:function(
aArg){C.EnumToString._Init.call(this,aArg);this.__proto__=C.DirectionOfCountingToString;
},_className:"Device::DirectionOfCountingToString"};C.EnumToIcon={AsG:function(A7
){throw new Error(Aol+A7.toFixed());},AsH:function(A7){throw new Error(Aol+A7.toFixed(
));},_Init:function(aArg){this.__proto__=C.EnumToIcon;A.h7++;},_Done:function(){
this.__proto__=null;A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((B=
this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:
"Device::EnumToIcon"};C.Aef={AsG:function(A7){return A.aaL(A.ach.AUL);},AsH:function(
A7){var Azy=A7;var RF=-1;switch(Azy){case 0:RF=3;break;case 1:RF=2;break;default:
throw new Error(Aot+Azy.toFixed());}return RF;},_Init:function(aArg){C.EnumToIcon.
_Init.call(this,aArg);this.__proto__=C.Aef;},_className:"Device::DirectionOfCountingToIcon"
};C.AdW={AsG:function(A7){return A.aaL(A.ach.AUJ);},AsH:function(A7){var Alo=A7;
var RF=-1;switch(Alo){case 0:RF=0;break;case 1:RF=6;break;case 3:RF=4;break;case
2:RF=5;break;case 4:RF=2;break;case 5:RF=3;break;default:throw new Error(Aot+Alo.
toFixed());}return RF;},_Init:function(aArg){C.EnumToIcon._Init.call(this,aArg);
this.__proto__=C.AdW;},_className:"Device::AnimalIdGenerationMethodToIcon"};C.Pw={
UNDEFINED:0,SH:1,AOS:2,ARC:3,AOR:4,A7A:5,HE:6,A_M:7,A44:8,AMK:9,AUd:10,BE:11,BB:
12,A7n:13,AUe:14,AUf:15,AUQ:16};C.GermanStateToString={BR:function(A7){var Bp=A7;
var GF=A.jV;switch(Bp){case 1:GF=A.aaR(A.acp.SH);break;case 2:GF=A.aaR(A.acp.AOS
);break;case 3:GF=A.aaR(A.acp.ARC);break;case 4:GF=A.aaR(A.acp.AOR);break;case 5:
GF=A.aaR(A.acp.A7A);break;case 6:GF=A.aaR(A.acp.HE);break;case 7:GF=A.aaR(A.acp.
A_M);break;case 8:GF=A.aaR(A.acp.A44);break;case 9:GF=A.aaR(A.acp.AMK);break;case
10:GF=A.aaR(A.acp.AUd);break;case 11:GF=A.aaR(A.acp.BE);break;case 12:GF=A.aaR(A.
acp.BB);break;case 13:GF=A.aaR(A.acp.A7n);break;case 14:GF=A.aaR(A.acp.AUe);break;
case 15:GF=A.aaR(A.acp.AUf);break;case 16:GF=A.aaR(A.acp.AUQ);break;case 0:GF=Rp;
break;default:throw new Error(Ah0+Bp.toFixed());}return GF;},Lu:function(A7){var
Bp=A7;var GF=A.jV;switch(Bp){case 1:GF=A.aaR(A.acp.Boh);break;case 2:GF=A.aaR(A.
acp.AOS);break;case 3:GF=A.aaR(A.acp.ARC);break;case 4:GF=A.aaR(A.acp.AOR);break;
case 5:GF=A.aaR(A.acp.BjU);break;case 6:GF=A.aaR(A.acp.HE);break;case 7:GF=A.aaR(
A.acp.BnX);break;case 8:GF=A.aaR(A.acp.Bg6);break;case 9:GF=A.aaR(A.acp.AMK);break;
case 10:GF=A.aaR(A.acp.AUd);break;case 11:GF=A.aaR(A.acp.BE);break;case 12:GF=A.
aaR(A.acp.BB);break;case 13:GF=A.aaR(A.acp.BjG);break;case 14:GF=A.aaR(A.acp.AUe
);break;case 15:GF=A.aaR(A.acp.AUf);break;case 16:GF=A.aaR(A.acp.AUQ);break;case
0:GF=Rp;break;default:throw new Error(Ah0+Bp.toFixed());}return GF;},BpB:function(
A7){var Bp=A7;var Gg=-1;switch(Bp){case 0:Gg=0;break;case 1:Gg=1;break;case 2:Gg=
2;break;case 3:Gg=3;break;case 4:Gg=4;break;case 5:Gg=5;break;case 6:Gg=6;break;
case 7:Gg=7;break;case 8:Gg=8;break;case 9:Gg=9;break;case 10:Gg=10;break;case 11:
Gg=11;break;case 12:Gg=12;break;case 13:Gg=13;break;case 14:Gg=14;break;case 15:
Gg=15;break;case 16:Gg=16;break;default:throw new Error(Ah0+Bp.toFixed());}return Gg;
},BpC:function(A7){var Bp=A7;var Gg=A.jV;switch(Bp){case 1:Gg=As_;break;case 2:Gg=
As$;break;case 3:Gg=Ayu;break;case 4:Gg=Aou;break;case 5:Gg=AY7;break;case 6:Gg=
AY8;break;case 7:Gg=AY9;break;case 8:Gg=AY_;break;case 9:Gg=AY$;break;case 10:Gg=
AZa;break;case 11:Gg=UQ;break;case 12:Gg=AZb;break;case 13:Gg=AZc;break;case 14:
Gg=AZd;break;case 15:Gg=AZe;break;case 16:Gg=AZf;break;case 0:Gg=Rp;break;default:
throw new Error(Ah0+Bp.toFixed());}return Gg;},_Init:function(aArg){C.EnumToString.
_Init.call(this,aArg);this.__proto__=C.GermanStateToString;},_className:"Device::GermanStateToString"
};C.EartagNrAssignmentMode={OneSingleRange:0,TwoNumberRanges:1,LAST:2};C.EartagNrAssignmentModeToString={
Lu:function(A7){var Ve=A7;var Nt=A.jV;switch(Ve){case 0:Nt=AZg;break;case 1:Nt=AZh;
break;default:throw new Error(AIs+Ve.toFixed());}return Nt;},BR:function(A7){var
Ve=A7;var Nt=A.jV;switch(Ve){case 0:Nt=A.aaR(A.acf.BnF);break;case 1:Nt=A.aaR(A.
acf.BpQ);break;default:throw new Error(AIs+Ve.toFixed());}return Nt;},_Init:function(
aArg){C.EnumToString._Init.call(this,aArg);this.__proto__=C.EartagNrAssignmentModeToString;
},_className:"Device::EartagNrAssignmentModeToString"};C.BCJ={BEB:0,BEr:1,BDE:2,
BDF:3,BDG:4,BFC:5};C.EnumToCodeset={AmA:function(Ah3){throw new Error(AZi+Ah3.toFixed(
));},Aei:function(A7){throw new Error(Aol+A7.toFixed());},AqQ:function(){A.ab5("%s"
,Ata);return 0;},H3:function(){A.ab5("%s",Ata);return 0;},_Init:function(aArg){this.
__proto__=C.EnumToCodeset;A.h7++;},_Done:function(){this.__proto__=null;A.h7--;}
,_ReInit:function(){},_Mark:function(D){var B;if((B=this.I)&&(B._cycle!=D))B._Mark(
B._cycle=D);},I:null,_cycle:0,_observers:null,_className:"Device::EnumToCodeset"
};C.M0={AmA:function(Ah3){var Bv;switch(Ah3){case 1:Bv=1;break;case 2:Bv=2;break;
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
case 98:BJ=111;break;default:throw new Error(AZj+Bv.toFixed());}return BJ;},AqQ:
function(){return 0;},H3:function(){return 111;},_Init:function(aArg){C.EnumToCodeset.
_Init.call(this,aArg);this.__proto__=C.M0;},_className:"Device::BreedToHitCodeset"
};C.ReasonOfLeaving={Unknown:0,A$g:1,RO:2,A_G:3,A61:4,BEK:5,A$v:6,A7w:7,A5l:8,A_C:
9,A7u:10,A5p:11,BE0:12,BE1:13,LAST:14};C.ReasonOfLeavingToString={BR:function(A7
){var AdC=A7;var Tp=A.jV;switch(AdC){case 0:Tp=A.aaR(A.acf.Unknown);break;case 1:
Tp=A.aaR(A.acf.A$g);break;case 2:Tp=A.aaR(A.acf.RO);break;case 3:Tp=A.aaR(A.acf.
A_G);break;case 4:Tp=A.aaR(A.acf.A61);break;case 5:Tp=A.aaR(A.acf.BnG);break;case
6:Tp=A.aaR(A.acf.A$v);break;case 7:Tp=A.aaR(A.acf.A7w);break;case 8:Tp=A.aaR(A.acf.
A5l);break;case 9:Tp=A.aaR(A.acf.A_C);break;case 10:Tp=A.aaR(A.acf.A7u);break;case
11:Tp=A.aaR(A.acf.A5p);break;case 12:Tp=A.aaR(A.acf.BnR);break;case 13:Tp=A.aaR(
A.acf.BnQ);break;default:throw new Error(Ayv+AdC.toFixed());}return Tp;},_Init:function(
aArg){C.EnumToString._Init.call(this,aArg);this.__proto__=C.ReasonOfLeavingToString;
},_className:"Device::ReasonOfLeavingToString"};C.Ahx={AmA:function(Ah3){var Pf;
switch(Ah3){case 1:Pf=1;break;case 2:Pf=2;break;case 3:Pf=3;break;case 4:Pf=4;break;
case 5:Pf=5;break;case 6:Pf=6;break;case 7:Pf=7;break;case 8:Pf=8;break;case 9:Pf=
9;break;case 10:Pf=10;break;case 11:Pf=11;break;case 12:Pf=12;break;case 13:Pf=13;
break;default:Pf=0;}return Pf;},Aei:function(A7){var Pf=A7;var Jj=0;switch(Pf){case
0:Jj=0;break;case 2:Jj=2;break;case 8:Jj=8;break;case 11:Jj=11;break;case 4:Jj=4;
break;case 10:Jj=10;break;case 7:Jj=7;break;case 5:Jj=5;break;case 9:Jj=9;break;
case 3:Jj=3;break;case 12:Jj=12;break;case 13:Jj=13;break;case 1:Jj=1;break;case
6:Jj=6;break;default:throw new Error(Atb+Pf.toFixed());}return Jj;},AqQ:function(
){return 0;},H3:function(){return 13;},_Init:function(aArg){C.EnumToCodeset._Init.
call(this,aArg);this.__proto__=C.Ahx;},_className:"Device::ReasonOfLeavingToCodeset"
};C.KX={AmA:function(Ah3){var K9;switch(Ah3){case 1:K9=1;break;case 2:K9=2;break;
case 3:K9=3;break;case 4:K9=4;break;case 5:K9=5;break;case 6:K9=6;break;case 7:K9=
7;break;case 8:K9=8;break;case 9:K9=9;break;case 10:K9=10;break;default:K9=0;}return K9;
},Aei:function(A7){var K9=A7;var Jj=0;switch(K9){case 0:Jj=0;break;case 2:Jj=2;break;
case 1:Jj=1;break;case 9:Jj=9;break;case 6:Jj=6;break;case 8:Jj=8;break;case 7:Jj=
7;break;case 5:Jj=5;break;case 10:Jj=10;break;case 4:Jj=4;break;case 3:Jj=3;break;
default:throw new Error(Atb+K9.toFixed());}return Jj;},AqQ:function(){return 0;}
,H3:function(){return 10;},_Init:function(aArg){C.EnumToCodeset._Init.call(this,
aArg);this.__proto__=C.KX;},_className:"Device::WhereAboutsToCodeset"};C.AmI={_Init:
function(aArg){this.__proto__=C.AmI;A.h7++;},_Done:function(){this.__proto__=null;
A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((B=this.I)&&(B._cycle!=
D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:"Device::EmptyClass"
};C.CalfDeregistrationsTableFields={Year:0,Deregistrations:1,Deaths:2};C.CalfDeregistrations={
Deregistrations:0,Deaths:0,Year:0,E3:function(Ad,AH){var HD=C.Row.E3.call(this,Ad
,AH);if(HD&&!!AH){this.AkD(AH.CF(Ad,0));this.Awx(AH.CF(Ad,1));this.Aww(AH.CF(Ad,
2));}return HD;},Ch:function(AH){var HD=C.Row.Ch.call(this,AH);if(HD&&!!AH){var Jn=
AH.Oy();if(Jn<=0)A.ab5("%s",Xa);else{if(this.Am2())this.CL=AH.YB();AH.Hn(this.CL
,0,this.Year);AH.Hn(this.CL,1,this.Deregistrations);AH.Hn(this.CL,2,this.Deaths);
AH.OA(Jn);}}return HD;},Gp:function(){C.Row.Gp.call(this);this.AkD(-1);},E5:function(
){C.Row.E5.call(this);this.AkD(0);this.Awx(0);this.Aww(0);},Awx:function(E){if(this.
Deregistrations===E)return;this.Deregistrations=E;A.abo([this,this.Bku,this.Awx]
,0);},Aww:function(E){if(this.Deaths===E)return;this.Deaths=E;A.abo([this,this.Bks
,this.Aww],0);},AkD:function(E){if(this.Year===E)return;this.Year=E;A.abo([this,
this.Arx,this.AkD],0);},Bku:function(){return this.Deregistrations;},Bks:function(
){return this.Deaths;},Arx:function(){return this.Year;},_Init:function(aArg){C.
Row._Init.call(this,aArg);this.__proto__=C.CalfDeregistrations;this.TableId=4;},
_className:"Device::CalfDeregistrations"};C.AuV={Undefined:0,Display:1,A_L:2,A_Y:
3,A$P:4,BDY:5,BFb:6,BFN:7,BEi:8,BDa:9,BCy:10,A6n:11,A_N:12,BFX:13,A7z:14,BF0:15};
C.DeviceComponentToString={BR:function(A7){var BcG=A7;var Qk=A.jV;switch(BcG){case
0:Qk=AZk;break;case 10:Qk=A.aaR(A.acf.BgG);break;case 9:Qk=A.aaR(A.acf.Bhl);break;
case 1:Qk=A.aaR(A.acf.Bh2);break;case 11:Qk=A.aaR(A.acf.A6n);break;case 5:Qk=A.aaR(
A.acf.Bp_);break;case 8:Qk=A.aaR(A.acf.Bh4);break;case 14:Qk=A.aaR(A.acf.A7z);break;
case 2:Qk=A.aaR(A.acf.A_L);break;case 12:Qk=A.aaR(A.acf.A_N);break;case 6:Qk=A.aaR(
A.acf.BnW);break;case 3:Qk=A.aaR(A.acf.A_Y);break;case 7:Qk=A.aaR(A.acf.Bh5);break;
case 13:Qk=A.aaR(A.acf.BhL);break;case 15:Qk=A.aaR(A.acf.Bqc);break;case 4:Qk=A.
aaR(A.acf.A$P);break;default:throw new Error(AZl+BcG.toFixed());}return Qk;},_Init:
function(aArg){C.EnumToString._Init.call(this,aArg);this.__proto__=C.DeviceComponentToString;
},_className:"Device::DeviceComponentToString"};C.AgP={AmA:function(Ah3){return Ah3;
},Aei:function(A7){return A7;},AqQ:function(){return 0;},H3:function(){return 4;
},_Init:function(aArg){C.EnumToCodeset._Init.call(this,aArg);this.__proto__=C.AgP;
},_className:"Device::EaseOfDeliveryToCodeset"};C.AeR={AsG:function(A7){return A.
aaL(A.ach.AP0);},AsH:function(A7){var BcS=A7;var RF=-1;switch(BcS){case 0:RF=0;break;
case 1:RF=1;break;case 2:RF=2;break;default:throw new Error(AZm+BcS.toFixed());}
return RF;},_Init:function(aArg){C.EnumToIcon._Init.call(this,aArg);this.__proto__=
C.AeR;},_className:"Device::MotherSelectionFilterModeToIcon"};C.WhereAboutsFilterCriterion={
A4:0,Abg:function(){var Av=A._NewObject(C.WhereAboutsFilterCriterion,0);Av.E_(this
);return Av;},E_:function(AI){C.FilterCriterion.E_.call(this,AI);var Av=(C.WhereAboutsFilterCriterion.
isPrototypeOf(AI)?AI:null);if(!!Av)this.A4=Av.A4;},Initialize:function(A3,Eb,A_,
Qd){this.EJ=A3;this.Operator=Eb;this.A4=A_;this.YE=Qd;return this;},_Init:function(
aArg){C.FilterCriterion._Init.call(this,aArg);this.__proto__=C.WhereAboutsFilterCriterion;
},_className:"Device::WhereAboutsFilterCriterion"};C.BEu={ANU:0,BDh:1,APD:2,LAST:
3};C.BFE={GK:0,AVu:1,Hj:2,Year:3,LAST:4};C.TimespanDaysToString={BR:function(A7){
var Bge=A7;var ABe=A.jV;switch(Bge){case 0:ABe=A.aaR(A.acf.A5C);break;case 1:ABe=
A.aaR(A.acf.AVu);break;case 2:ABe=A.aaR(A.acf.Hj);break;case 3:ABe=A.aaR(A.acf.Year
);break;default:throw new Error(AIt+Bge.toFixed());}return ABe;},_Init:function(
aArg){C.EnumToString._Init.call(this,aArg);this.__proto__=C.TimespanDaysToString;
},_className:"Device::TimespanDaysToString"};C.ZX={BEH:0,BDo:1,BD0:2,BD3:3,BD2:4
,BDp:5,BD1:6,LAST:7};C.USBStateToString={BR:function(A7){var BgA=A7;var Bp=A.jV;
switch(BgA){case 0:Bp=AZn;break;case 2:Bp=AZo;break;case 1:Bp=AZp;break;case 5:Bp=
AZq;break;case 3:Bp=AZr;break;case 4:Bp=AZs;break;case 6:Bp=AZt;break;default:throw new
Error(AHN+BgA.toFixed());}return Bp;},_Init:function(aArg){C.EnumToString._Init.
call(this,aArg);this.__proto__=C.USBStateToString;},_className:"Device::USBStateToString"
};C.AgJ={BDZ:0,BCK:1,BE2:2};C.AxA={ACh:A.jV,Timestamp:0,AD5:0,AD_:0,AGj:0,OnSetTimestamp:
function(E){if(this.Timestamp===E)return;this.Timestamp=E;},AFi:function(E){if(this.
AD5===E)return;this.AD5=E;},AFo:function(E){if(this.AD_===E)return;this.AD_=E;},
AFx:function(E){if(this.AGj===E)return;this.AGj=E;},AEZ:function(E){if(this.ACh===
E)return;this.ACh=E;},_Init:function(aArg){this.__proto__=C.AxA;A.h7++;},_Done:function(
){this.__proto__=null;A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((
B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:
"Device::SoftwareVersionInformation"};C.Avp={Timestamp:0,ARq:0,ARr:0,AU9:0,AU_:0
,AU8:0,ARp:0,OnSetTimestamp:function(E){if(this.Timestamp===E)return;this.Timestamp=
E;},AFf:function(E){if(this.ARq===E)return;this.ARq=E;},AFg:function(E){if(this.
ARr===E)return;this.ARr=E;},AFL:function(E){if(this.AU9===E)return;this.AU9=E;},
AFM:function(E){if(this.AU_===E)return;this.AU_=E;},AFK:function(E){if(this.AU8===
E)return;this.AU8=E;},AFe:function(E){if(this.ARp===E)return;this.ARp=E;},_Init:
function(aArg){this.__proto__=C.Avp;A.h7++;},_Done:function(){this.__proto__=null;
A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((B=this.I)&&(B._cycle!=
D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:"Device::HardwareVersionInformation"
};C.Aqo={Undefined:0,BDP:1,BCY:2};C.Agw={Manual:0,TransponderId:1,LAST:2};C.AnimalIdAutoGenerationMethodToString={
BR:function(A7){var Bcb=A7;var A04=A.jV;switch(Bcb){case 0:A04=A.aaR(A.acf.A5t);
break;case 1:A04=A.aaR(A.acf.A5I);break;default:throw new Error(AZu+Bcb.toFixed(
));}return A04;},_Init:function(aArg){C.EnumToString._Init.call(this,aArg);this.
__proto__=C.AnimalIdAutoGenerationMethodToString;},_className:"Device::AnimalIdAutoGenerationMethodToString"
};C.Hj={A5c:0,ADU:1,ACE:2,AD6:3,ABG:4,AD8:5,ADW:6,ADV:7,ABN:8,AGs:9,AEj:10,AEh:11
,ACp:12,LAST:13};C.MonthToString={BR:function(A7){var BdU=A7;var Xz=A.jV;switch(
BdU){case 1:Xz=A.aaR(A.act.ADU);break;case 2:Xz=A.aaR(A.act.ACE);break;case 3:Xz=
A.aaR(A.act.AD6);break;case 4:Xz=A.aaR(A.act.ABG);break;case 5:Xz=A.aaR(A.act.AD8
);break;case 6:Xz=A.aaR(A.act.ADW);break;case 7:Xz=A.aaR(A.act.ADV);break;case 8:
Xz=A.aaR(A.act.ABN);break;case 9:Xz=A.aaR(A.act.AGs);break;case 10:Xz=A.aaR(A.act.
AEj);break;case 11:Xz=A.aaR(A.act.AEh);break;case 12:Xz=A.aaR(A.act.ACp);break;default:
throw new Error(AIu+BdU.toFixed());}return Xz;},_Init:function(aArg){C.EnumToString.
_Init.call(this,aArg);this.__proto__=C.MonthToString;},_className:"Device::MonthToString"
};C.VP={FileName:A.jV,AGl:0,EV:0,AgJ:0,E5:function(){this.Fb(0);this.AgJ=1;this.
FileName=A.jV;this.AGl=0;},Fb:function(E){if(this.EV===E)return;this.EV=E;A.abo([
this,this.SC,this.Fb],0);},SC:function(){return this.EV;},_Init:function(aArg){this.
__proto__=C.VP;A.h7++;},_Done:function(){this.__proto__=null;A.h7--;},_ReInit:function(
){},_Mark:function(D){var B;if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:
null,_cycle:0,_observers:null,_className:"Device::DataExportContext"};C.AVB={Init:
function(aArg){var B;A.zX([this,this.Be9],[B=A._GetAutoObject(C.Device),B.A88,B.
Bbc],0);this.Be9(this);},Ch:function(){A._GetAutoObject(C.Device).Ar8(this.toString(
));},Be9:function(G){this.E3(A._GetAutoObject(C.Device).AG$);A.we(this,0);},_Init:
function(aArg){C.Int32ArrayWrapper._Init.call(this,aArg);this.__proto__=C.AVB;this.
Zv(3);this.Init(aArg);},_className:"Device::WeightGainsLowClass"};C.AVA={Init:function(
aArg){var B;A.zX([this,this.Be7],[B=A._GetAutoObject(C.Device),B.A87,B.Bbb],0);this.
Be7(this);},Ch:function(){A._GetAutoObject(C.Device).Ar7(this.toString());},Be7:
function(G){this.E3(A._GetAutoObject(C.Device).AG_);A.we(this,0);},_Init:function(
aArg){C.Int32ArrayWrapper._Init.call(this,aArg);this.__proto__=C.AVA;this.Zv(3);
this.Init(aArg);},_className:"Device::WeightGainsHighClass"};C.AVD={Init:function(
aArg){var B;A.zX([this,this.Be$],[B=A._GetAutoObject(C.Device),B.A8$,B.Bbf],0);this.
Be$(this);},Ch:function(){A._GetAutoObject(C.Device).Ar9(this.toString());},Be$:
function(G){this.E3(A._GetAutoObject(C.Device).AHc);A.we(this,0);},_Init:function(
aArg){C.Int32ArrayWrapper._Init.call(this,aArg);this.__proto__=C.AVD;this.Zv(3);
this.Init(aArg);},_className:"Device::WeightValuesBirthClass"};C.AVz={Init:function(
aArg){var B;A.zX([this,this.Be5],[B=A._GetAutoObject(C.Device),B.A86,B.Bba],0);this.
Be5(this);},Ch:function(){A._GetAutoObject(C.Device).Ar6(this.toString());},Be5:
function(G){this.E3(A._GetAutoObject(C.Device).AG9);A.we(this,0);},_Init:function(
aArg){C.Int32ArrayWrapper._Init.call(this,aArg);this.__proto__=C.AVz;this.Zv(3);
this.Init(aArg);},_className:"Device::WeightGainsAverageClass"};C.AMA={Init:function(
aArg){var B;A.zX([this,this.Beo],[B=A._GetAutoObject(C.Device),B.A8c,B.BaN],0);this.
Beo(this);},Beo:function(G){this.E3(A._GetAutoObject(C.Device).ABF);A.we(this,0);
},_Init:function(aArg){C.Int32ArrayWrapper._Init.call(this,aArg);this.__proto__=
C.AMA;this.Zv(3);this.Init(aArg);},_className:"Device::AnimalTypesWeightGainsClass"
};C.BEx={BEA:0,BEo:1,BDg:2,BFY:3,Unknown:4};C.BCW={None:0,BEI:1,BEC:2,BEy:3,BEz:
4};C.BFS={A7O:0,Manual:1,TransponderId:2,NaisId:3,LAST:4};C.TransponderLinkageIdChangeMethodToString={
BR:function(A7){var Bgi=A7;var ABg=A.jV;switch(Bgi){case 0:ABg=A.aaR(A.acf.A7O);
break;case 1:ABg=A.aaR(A.acf.A5t);break;case 2:ABg=A.aaR(A.acf.A5I);break;case 3:
ABg=A.aaR(A.acf.BhJ);break;default:throw new Error(AZv+Bgi.toFixed());}return ABg;
},_Init:function(aArg){C.EnumToString._Init.call(this,aArg);this.__proto__=C.TransponderLinkageIdChangeMethodToString;
},_className:"Device::TransponderLinkageIdChangeMethodToString"};C.A_D={BA5:function(
AoG){var Kc=A.ab0(A.abV(AoG,15),0,10);var J6=A._GetAutoObject(C.Converter).S1(Kc
);if(!!J6){if(J6===10){if((AoG.length!==16)||!A._GetAutoObject(A.acj.VD).AVl(AoG
))return 0;else return Kc;}else return Kc;}else{J6=A._GetAutoObject(C.Converter).
S1(A._GetAutoObject(C.Device).PV);if(!!J6&&(J6===10)){if(!A._GetAutoObject(A.acj.
VD).AVl(AoG))return 0;if(AoG.length===12){var Bca=A.ab0(A.abV(AoG,10),0,10);var AJ8=
A._GetAutoObject(C.Converter).BpK(Bca);if((Bca>0)&&!!AJ8)return(A._GetAutoObject(
C.Converter).Aqv(J6)*1000000000000)+A.ab0(A.abV(AoG,10),0,10);}}}return 0;},Bfh:
function(J7){if((J7.length!==10)||!A._GetAutoObject(A.acj.VD).AVl(J7))return 0;var
AAI=A._NewObject(A.Core.Bs,0);var A3K=false;var A3P=A.abW(J7,4,4);var AtO=A.wz(A3P
,0,10);if((AtO<2000)||(AtO>2100)){A3P=A.abV(J7,4);AtO=A.wz(A3P,0,10);A3K=true;}if((
AtO<2000)||(AtO>2100))return 0;AAI.Year=AtO;var AKS;var AzQ;if(A3K){AKS=A.abW(J7
,4,2);AzQ=A.wz(AKS,0,10);}else{AKS=A.abW(J7,2,2);AzQ=A.wz(AKS,0,10);}if((AzQ<1)||(
AzQ>12))return 0;AAI.Uo(AzQ);var AKR;var AzP;if(A3K){AKR=A.abW(J7,6,2);AzP=A.wz(
AKR,0,10);}else{AKR=A.abV(J7,2);AzP=A.wz(AKR,0,10);}if((AzP<1)||(AzP>AAI.Zj()))return 0;
AAI.Lp(AzP);return AAI.JQ();},_Init:function(aArg){this.__proto__=C.A_D;A.h7++;}
,_Done:function(){this.__proto__=null;A.h7--;},_ReInit:function(){},_Mark:function(
D){var B;if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:
null,_className:"Device::ParserClass"};C.AnH={_Init:function(){C.A_D._Init.call(
this,0);},_ReInit:function(){},_variants:function(){return this;},_this:null};C.
AnimalTableFieldsToString={BR:function(A7){var Aak=A7;var MN=A.jV;switch(Aak){case
14:MN=A.aaR(A.acf.Afr);break;case 32:MN=A.aaR(A.acf.Breed);break;case 4:MN=A.aaR(
A.acf.Aed);break;case 28:MN=A.aaR(A.acf.A5h);break;case 33:MN=A.aaR(A.acf.AgG);break;
case 23:MN=A.aaR(A.acf.KI);break;case 7:MN=A.aaR(A.acf.Afm);break;case 2:MN=A.aaR(
A.acf.P);break;case 0:MN=A.aaR(A.acf.GM);break;case 8:MN=A.aaR(A.acf.Alarm);break;
case 9:MN=A.aaR(A.acf.ACa);break;case 38:MN=A.aaR(A.acf.Bh3);break;case 11:MN=A.
aaR(A.acf.Fever);break;case 29:MN=A.aaR(A.acf.ARe);break;case 18:MN=A.aaR(A.acf.
M2);break;case 26:MN=A.aaR(A.acf.Uf);break;case 22:MN=A.aaR(A.acf.Transponder);break;
case 1:MN=A.aaR(A.acf.GI);break;case 34:MN=A.aaR(A.acf.Jg);break;case 6:case 25:
case 27:case 10:case 37:case 12:case 17:case 5:case 3:case 35:case 36:case 15:case
16:case 24:case 31:case 20:case 30:case 21:case 19:case 13:MN=A.jV;break;default:
throw new Error(AZw+A7.toFixed());}return MN;},_Init:function(aArg){C.EnumToString.
_Init.call(this,aArg);this.__proto__=C.AnimalTableFieldsToString;},_className:"Device::AnimalTableFieldsToString"
};C.AD3={Bg:0,BFw:1,LAST:2};C.ListViewScopeToString={BR:function(A7){var BzK=A7;
var A2r=A.jV;switch(BzK){case 0:A2r=A.aaR(A.acf.Bg);break;case 1:A2r=A.aaR(A.acf.
BoN);break;default:throw new Error(AZx+A7.toFixed());}return A2r;},_Init:function(
aArg){C.EnumToString._Init.call(this,aArg);this.__proto__=C.ListViewScopeToString;
},_className:"Device::ListViewScopeToString"};C.AHb={BGp:0,BGo:1,BGn:2,LAST:3};C.
WeightValuePrecisionToString={BR:function(A7){var BCu=A7;var ALv=A.jV;switch(BCu
){case 0:ALv=AZy+A.aaR(A.acf.Az4);break;case 1:ALv=AZz+A.acf.AiC;break;case 2:ALv=
AZA+A.acf.AiC;break;default:throw new Error(AZB+A7.toFixed());}return ALv;},_Init:
function(aArg){C.EnumToString._Init.call(this,aArg);this.__proto__=C.WeightValuePrecisionToString;
},_className:"Device::WeightValuePrecisionToString"};C.AgB={BR:function(A7){var AK0=
A7;if(AK0===1)return A.aaR(A.acf.Bi1);else return C.AnimalTypeToString.BR.call(this
,A7);},_Init:function(aArg){C.AnimalTypeToString._Init.call(this,aArg);this.__proto__=
C.AgB;},_className:"Device::AnimalTypeToStringHeifer"};C.Y2={RO:0,BEE:1,LAST:2};
C.MassDeregistrationCriterionToString={BR:function(A7){var BzN=A7;var A2w=A.jV;switch(
BzN){case 0:A2w=A.aaR(A.acf.Bj7);break;case 1:A2w=A.aaR(A.acf.ARZ);break;default:
throw new Error(AHq+A7.toFixed());}return A2w;},_Init:function(aArg){C.EnumToString.
_Init.call(this,aArg);this.__proto__=C.MassDeregistrationCriterionToString;},_className:
"Device::MassDeregistrationCriterionToString"};C.UInt64PartialFilterCriterion={A4:
A.jV,Zh:0,OB:0,Abg:function(){var Av=A._NewObject(C.UInt64PartialFilterCriterion
,0);Av.E_(this);return Av;},E_:function(AI){C.FilterCriterion.E_.call(this,AI);var
Av=(C.UInt64PartialFilterCriterion.isPrototypeOf(AI)?AI:null);if(!!Av){this.A4=Av.
A4;this.Zh=Av.Zh;this.OB=Av.OB;}},Initialize:function(A3,Eb,A_,Ato,AI0,Qd){this.
EJ=A3;this.Operator=Eb;this.A4=A_;this.YE=Qd;this.Zh=Ato;this.OB=AI0;return this;
},_Init:function(aArg){C.FilterCriterion._Init.call(this,aArg);this.__proto__=C.
UInt64PartialFilterCriterion;},_className:"Device::UInt64PartialFilterCriterion"
};C.BDl={Idle:0,BE9:1,BFi:2,BFz:3,Error:4};C.A$C={Ase:0,AsM:0,ZX:0,A_p:function(
E){if(this.ZX===E)return;this.ZX=E;A.abo([this,this.Ble,this.A_p],0);},A_r:function(
E){if(this.AsM===E)return;this.AsM=E;A.abo([this,this.Blg,this.A_r],0);},A97:function(
E){if(this.Ase===E)return;this.Ase=E;A.abo([this,this.BkS,this.A97],0);},Ble:function(
){return this.ZX;},Blg:function(){return this.AsM;},BkS:function(){return this.Ase;
},_Init:function(aArg){this.__proto__=C.A$C;A.h7++;},_Done:function(){this.__proto__=
null;A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((B=this.I)&&(B._cycle
!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:"Device::UsbDevice"
};
C._Init=function(){C.Int32FilterCriterion.__proto__=C.FilterCriterion;C.StringFilterCriterion.
__proto__=C.FilterCriterion;C.Table.__proto__=C.ITable;C.Animal.__proto__=C.Row;
C.Rating.__proto__=C.Row;C.HelperClass.__proto__=C.AmI;C.BoolFilterCriterion.__proto__=
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
C.AUY.__proto__=C.Int32ArrayWrapper;C.AUX.__proto__=C.Int32ArrayWrapper;C.AMz.__proto__=
C.Int32ArrayWrapper;C.UInt64FilterCriterion.__proto__=C.FilterCriterion;C.BooleanToAssignedUnassignedString.
__proto__=C.EnumToString;C.CountryToString.__proto__=C.EnumToString;C.EaseOfDeliveryToString.
__proto__=C.EnumToString;C.WhereAboutsToString.__proto__=C.EnumToString;C.BreedToString.
__proto__=C.EnumToString;C.AnimalIdGenerationMethodToString.__proto__=C.EnumToString;
C.DirectionOfCountingToString.__proto__=C.EnumToString;C.Aef.__proto__=C.EnumToIcon;
C.AdW.__proto__=C.EnumToIcon;C.GermanStateToString.__proto__=C.EnumToString;C.EartagNrAssignmentModeToString.
__proto__=C.EnumToString;C.M0.__proto__=C.EnumToCodeset;C.ReasonOfLeavingToString.
__proto__=C.EnumToString;C.Ahx.__proto__=C.EnumToCodeset;C.KX.__proto__=C.EnumToCodeset;
C.CalfDeregistrations.__proto__=C.Row;C.DeviceComponentToString.__proto__=C.EnumToString;
C.AgP.__proto__=C.EnumToCodeset;C.AeR.__proto__=C.EnumToIcon;C.WhereAboutsFilterCriterion.
__proto__=C.FilterCriterion;C.TimespanDaysToString.__proto__=C.EnumToString;C.USBStateToString.
__proto__=C.EnumToString;C.AnimalIdAutoGenerationMethodToString.__proto__=C.EnumToString;
C.MonthToString.__proto__=C.EnumToString;C.AVB.__proto__=C.Int32ArrayWrapper;C.AVA.
__proto__=C.Int32ArrayWrapper;C.AVD.__proto__=C.Int32ArrayWrapper;C.AVz.__proto__=
C.Int32ArrayWrapper;C.AMA.__proto__=C.Int32ArrayWrapper;C.TransponderLinkageIdChangeMethodToString.
__proto__=C.EnumToString;C.AnimalTableFieldsToString.__proto__=C.EnumToString;C.
ListViewScopeToString.__proto__=C.EnumToString;C.WeightValuePrecisionToString.__proto__=
C.EnumToString;C.AgB.__proto__=C.AnimalTypeToString;C.MassDeregistrationCriterionToString.
__proto__=C.EnumToString;C.UInt64PartialFilterCriterion.__proto__=C.FilterCriterion;
};C._ReInit=function(){var B;if((B=C.Device._this))B._ReInit(),C.Device._ReInit.
call(B);if((B=C.Converter._this))B._ReInit(),C.Converter._ReInit.call(B);if((B=C.
Helper._this))B._ReInit(),C.Helper._ReInit.call(B);if((B=C.AnH._this))B._ReInit(
),C.AnH._ReInit.call(B);};C.DH=function(D){var B;if((B=C.Device._this)&&(B._cycle
!=D))B._Done(C.Device._this=null);if((B=C.Converter._this)&&(B._cycle!=D))B._Done(
C.Converter._this=null);if((B=C.Helper._this)&&(B._cycle!=D))B._Done(C.Helper._this=
null);if((B=C.AnH._this)&&(B._cycle!=D))B._Done(C.AnH._this=null);};return C;})(
);

/* VitalControl demonstration application, © Urban GmbH & Co.KG 2023 */