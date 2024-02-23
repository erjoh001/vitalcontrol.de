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
* Version  : 13.00
* Profile  : WebGLDemonstrator
* Platform : Web.WebGL.RGBA8888
*
*******************************************************************************/

var index;if(!index)throw new Error("The application file '_project.js' isn't yet loaded!"
);if(index.Device)throw new Error("The unit file 'Device.js' included twice!");index.
Device=(function(){var A=index;var C={};
var Ca="ERROR: Cannot add criterion, it is already in the list.";var BD="ERROR: BatteryChargeState is read only";
var EW="ERROR: UpdateChargeActive is read only";var Hh="ERROR: ScanState is read only.";
var I8="ERROR: MeasureState is read only.";var IJ="ERROR: Temperature value is read only";
var OT="ERROR: UpdateDataTable called for Undefined data table.";var PV="ERROR: UpdateDataTable called for unknown data table id=";
var PW="ERROR: SyncState is read only.";var CM="ERROR: ScanTransponder is read only.";
var E4="ERROR: Body weight value is read only";var Lp="ERROR: Predicted temperature value is read only";
var PX="ERROR: TransferProgress is read only";var Kq="ERROR: TransferTarget is read only";
var N6="ERROR: unhandled assessment.";var PY="Unhandled enum BodyTemperature: ";
var MC="AU";var SV="AT";var UE="BE";var ZD="BA";var WG="BG";var IK="CA";var UF="CN";
var ZE="TW";var WH="HR";var ZF="CY";var WI="CZ";var ZG="DK";var ZH="EE";var UG="FI";
var WJ="FR";var Q9="DE";var ZI="GR";var OU="HU";var Q_="IE";var WK="IT";var WM="JP";
var WN="LV";var WO="LT";var ZJ="LU";var WQ="MT";var WR="NL";var SW="NO";var ZK="PL";
var ZL="PT";var Acp="RO";var UH="RU";var ZM="SK";var Afb="SI";var ZN="ES";var WS=
"SE";var ZO="CH";var ZP="TR";var Afc="UA";var JQ="UK";var Acq="US";var Lq=".";var
Ahw="-";var AnO="ERROR: Unhandled mass unit: ";var N7=" ";var WT="Unhandled gender";
var AnP="Unhandled animal type";var Ahx="Unhandled Device::MassUnit.";var Ahy="Unhandled Device::AnimalListContent.";
var Acr="Avid";var UI="Ordicam / IER SA";var AnQ="Agrident";var AnR="Datamars";var
AnS="Allflex";var AnT="Texas Instruments";var Afd="Nedap";var AnU="Digital Angel";
var Afe="null";var Ash="[ ";var OV=", ";var SX=" ]";var Axl="Unhandled language";
var SY="Unhandled Device::AnimalListAction.";var Asi="Temperature unit conversion not supported: ";
var Axm="->";var Axn="=";var Axo=">";var AnV="<";var Axp="!=";var Asj="WARNING: Unhandled operator.";
var JR="Unknown birth type";var Axq="Unhandled country: ";var Acs="ERROR: Cannot start transaction";
var Axr="ERROR: Table is null, cannot load row (";var AGy=")";var AGz="Table Id mismatch!";
var AGA="ERROR: Row index (";var AGB=") out of bounds [0,";var Axs="]";var AUT="ERROR: Table is full. Item limit: ";
var AUU="Device::ScanTransponder not set";var AUV="Unhandled TransponderType.";var
AUW="Unhandled ScanState.";var AUX="Could not load animal with transponder";var Ask=
"Birth type";var Axt="Time calving";var PZ="Pend. reg. notice";var Axu="Perished";
var AUY="Rating temp.";var AUZ="Location";var AU0=" mother";var AU1="Reason leaving";
var AGC="Time alarm";var AGD="Time first weighing";var Aff="Time control";var AnW=
"Time temp.";var AU2="Time watch";var AGE="Time weighing";var AkN="Assessment";var
AGF="Time rating";var AGG="ERROR: Unhandled AnimalTable filter field:";var AGH="Field ";
var AU3="ERROR: Unhandled RatingTable filter field:";var AU4="ERROR: Unhandled table ";
var AU5=" filter fields.";var Act="WARNING: Unhandled filter criterion type.";var
AGI="0";var Asl="No table specified";var AGJ="Invalid animal id generation method: ";
var AGK="Unhandled AnimalIdGenerationMethod: ";var Axv="Invalid gender: ";var AGL=
"Invalid ear tag number assignment mode: ";var Axw=";";var AU6="Invalid animal creation error code: ";
var AU7="Invalid EartagNrAssignmentMode: ";var AU8="Unsupported exponent: ";var AU9=
"Unknown whereabouts type: ";var AGM="Unhandled Gender: ";var AU_="Unhandled AnimalIdAutoGenerationMethod: ";
var OW="\n";var Axx="\n\n";var AU$="Bootloader:\nV\xA0";var AVa="Middleware:\nV\xA0";
var AVb="GUI:\nV\xA0";var AVc="Mainboard: ";var AVd="Torchboard: ";var AVe="Operator not supported.";
var AVf="Unhandled Device::TransponderAssignmentIdChangeMethod: ";var AGN="Unhandled mass deregistration criterion: ";
var AnX="Unhandled enum value ";var Axy="UNDEFINED";var AGO="Boot";var AVg="Charge";
var AVh="ChargeWarning";var AVi="ControlledPowerOff";var AVj="DeviceMain";var AGP=
"DeviceService";var AVk="DeviceInfo";var AGQ="DeviceDataManagement";var AGR="DeviceAnimalDataMenu";
var AGS="DeviceDeviceDataMenu";var AVl="DeviceCheck";var Axz="Home";var AVm="Settings";
var AVn="DateTimeSettings";var Q$="UnitsSettings";var WU="DataAcquisitionSettings";
var AVo="RegistrationAutomaticSettings";var AVp="RegistrationPresettingsSettings";
var AVq="TransponderAssignmentSettings";var AVr="TemperatureSettings";var AVs="WeightGainSettings";
var AVt="DeviceSettings";var AVu="RegistrationSettings";var Ahz="InitializationSettings";
var AGT="PremisesSettings";var AVv="Sleep";var AVw="Sync";var AGU="EditAnimalData";
var AGV="EditAnimalDataNaisId";var AxA="AnimalList";var P0="AnimalListFilter";var
AVx="AlarmListFilter";var AVy="WatchListFilter";var AVz="AnimalActionActions";var
Asm="AnimalActionTemperature";var AVA="TemperatureMeasurement";var AVB="AnimalActionWeighing";
var AVC="AnimalActionRate";var AVD="AnimalActionUnregister";var AVE="AnimalActionPerished";
var AVF="AnimalActionNewBornCare";var Asn="AlarmList";var AVG="ControlMeasure";var
AVH="ControlList";var AVI="RangeTest";var AVJ="ListsMain";var AVK="ListsIdManagement";
var AVL="WatchList";var AVM="AnimalListActions";var AVN="AlarmListActions";var AVO=
"ControlListActions";var AVP="WatchListActions";var AGW="EvaluationMenuMain";var
Aso="EvaluationMenuWeights";var AVQ="EvaluationLosses";var AVR="EvaluationRatings";
var AVS="EvaluationTemperatures";var AxB="EvaluationWeights";var AkO="EvaluationWeightsRecent";
var AhA="EvaluationBirthWeights";var AxC="AnimalEvaluationFilter";var AnY="NewMenu";
var AhB="NewAnimals";var AVT="NewAnimalManualData";var AxD="MassRecording";var AGX=
"NewAnimalTransponderData";var Afg="NewAnimalLoss";var AGY="AutoActionScanScreen";
var ZQ="ManualActionScanScreen";var AkP="SetTransponderScreen";var AnZ="SetSaveTransponderScreen";
var AVU="NewAnimalSetTransponderScreen";var AVV="NewAnimalsSetTransponderScreen";
var AVW="NewAnimalCalvingDataScreen";var AVX="WeightListScreen";var AVY="AnimalSingleInfoScreen";
var Asp="AnimalMultiInfoScreen";var AGZ="AnimalRegistrationDetails";var AG0="MultiInfoActionsScreen";
var AVZ="FreshCowListScreen";var AV0="FreshCowListActionsScreen";var AV1="FreshCowListFilterScreen";
var AV2="DryCowListScreen";var AV3="DryCowListActionsScreen";var AV4="DryCowListFilterScreen";
var AG1="NoTransponderListScreen";var AV5="NoTransponderListActionsScreen";var AxE=
"NoTransponderListFilterScreen";var AG2="YoungNoTransponderListScreen";var AG3="YoungNoTransponderListActionsScreen";
var AG4="YoungNoTransponderListFilterScreen";var AG5="NoNaisIdListScreen";var AG6=
"NoNaisIdListActionsScreen";var AG7="NoNaisIdListFilterScreen";var AV6="RegistrationsListScreen";
var AV7="RegistrationsListActionsScreen";var AV8="RegistrationsListFilterScreen";
var AV9="ActionListScreen";var AV_="ActionListActionsScreen";var AV$="ActionListFilterScreen";
var AWa="UpdateScreen";var AxF="MotherScanScreen";var AG8="SetSaveNaisIdScreen";
var AWb="PurchasedAnimalsList";var AG9="TextInput";var AhC="Unhandled display mode: ";
var WV="None";var AWc="Actions Settings";var ZR="Auto Action";var AWd="Menu Item Settings";
var AWe="Rating Type";var An0="Weighing settings";var Afh="Options";var AkQ="AnimalSearch";
var AG_="AnimalSearchUnfiltered";var AWf="AnimalSearchDriedOff";var OX="MeasurementReady";
var AWg="AnimalMultiInfoMenu";var AWh="MassRecordingDefaults";var AWi="MassRecordingFields";
var AWj="MassRecordingMenu";var AG$="PurchasedAnimalsListMenu";var AHa="BirthRegistrationsListMenu";
var AWk="Unhandled overlay menu: ";var AxG="Error";var AxH="Idle";var AWl="IdScanned";
var AWm="NotFound";var AHb="Progress";var AHc="Unhandled scan state: ";var AWn="Prediction";
var AxI="Ready";var AWo="Unhandled measure state: ";var AHd="Unhandled temperature unit: ";
var AHe="Unhandled species: ";var AxJ="English";var AWp="Nederlands";var AWq="Deutsch";
var AWr="Eesti";var AWs="Suomalainen";var AWt="Fran\xE7ais";var AWu="\u0395\u03BB\u03BB\u03B7\u03BD\u03B9\u03BA\u03AC";
var AWv="\u0411\u044A\u043B\u0433\u0430\u0440\u0441\u043A\u0438";var AWw="Italiano";
var Asq="\u0420\u0443\u0441\u0441\u043A\u0438\u0439";var Asr="Espa\xF1ol";var AHf=
"T\xFCrk\xE7e";var AWx="\u6B63\u9AD4\u5B57/\u7E41\u9AD4\u5B57";var AWy="\u010Ce\u0161tina";
var AWz="Bosanski";var AWA="Norsk";var AWB="\u0423\u043A\u0440\u0430\u0457\u043D\u0441\u044C\u043A\u0438\u0439";
var AHg="Unhandled language: ";var AWC="EN";var AWD="ET";var AWE="EL";var AWF="ZH";
var AWG="CS";var AWH="BS";var AWI="Unhandled gender: ";var AWJ="Unhandled birth type: ";
var AWK="Exporting";var AWL="ImportFinish";var AWM="ImportStart";var AWN="Importing";
var AHh="Init";var AHi="Unhandled sync state: ";var AxK="Unhandled rating attribute: ";
var AHj="Unhandled assessment: ";var An1="Illegal boolean value: ";var Ass="Unhandled popup ID:";
var AHk="Unknown";var AWO="Severe Error";var AHl="ErrorsDeviceDriverCheck";var AWP=
"Enter Sleep";var AHm="About";var AWQ="InfoSoftwareVersions";var AWR="InfoHardwareVersions";
var AWS="InfoSerial";var AWT="ShutDown";var AWU="SuccessDataSync";var AWV="SuccessResetFactory";
var AWW="SuccessResetAnimalData";var AWX="SuccessCreateBackup";var AWY="SuccessRestoreBackup";
var AWZ="CreateBackupInProgress";var AW0="RestoreBackupInProgress";var AW1="FailedCreateBackup";
var AxL="FailedRestoreBackup";var AW2="TechnicalDetails";var AW3="WarningDataSync";
var AxM="WarningFactory";var Ast="WarningResetAnimalData";var ZS="WarningRestart";
var Asu="WarningAutoAction";var AW4="WarningAutoActionNotApplicable";var AW5="WarningNoMenuItem";
var AW6="WarningEnterDemoMode";var AHn="NoAnimalsRegistered";var AW7="MaxNumAnimalsReached";
var AHo="MaxNumRatingsReached";var AW8="MaxNumCalfDeregistrationsReached";var AW9=
"MissingTransponder";var AW_="EarTagNumberTooShort";var Asv="NoValidCountryCode";
var AW$="WarningOutdatedAnimalWeight";var AXa="WarningOutdatedAnimalWeights";var
AHp="WarningWeightEvaluationSingular";var AXb="WarningWeightEvaluationPlural";var
AXc="ScanError";var AXd="ScanNotFound";var AXe="ScannedAnimalNotFound";var Acu="ScannedTransponderNotFound";
var AXf="AnimalNotFound";var AXg="SuccessUnregister";var AXh="SuccessUnregisterPerished";
var AXi="SuccessCreationNewAnimal";var AHq="SuccessCreationNewAnimals";var AXj="AnimalCreationInProgress";
var AXk="EvaluationInProgress";var AXl="DataSyncInProgress";var AXm="AddedToAlarm";
var AXn="RemovedFromAlarm";var AXo="AddedToWatch";var AHr="RemovedFromWatch";var
AXp="AddedToDryOff";var AXq="RemovedFromDryOff";var AXr="AnimalIdAlreadyExists";
var AHs="AnimalIdAlreadyExistsContinuable";var AHt="MissingAnimalId";var AXs="MissingAnimalIdMother";
var AXt="MissingEartagNumber";var AXu="MissingTransponderId";var AXv="TransponderAlreadyRegistered";
var Ra="TransponderAlreadyRegisteredContinuable";var Asw="TransponderAlreadyRegisteredCapturable";
var AHu="HelpAnimalInfoRating";var AHv="WarningReassignTransponder";var An2="CannotReassignNaisId";
var An3="WarningResetToDefaultValue";var AxN="WarningResetThresholds";var AXw="WarningResetTempThresholds";
var AHw="UpdateFirmware";var AXx="UpdateFirmwareBatteryLow";var AXy="ConfirmFirmwareUpdated";
var AXz="ConfirmBootloaderUpdated";var AXA="QuestionAddAnotherCalfMultiples";var
AXB="RemovedAllBirthNoticesPending";var AXC="RemovedAllPurchasedNoticePending";var
AXD="RemovedFromBirthNoticePending";var AXE="RemovedFromPurchasedNoticePending";
var AXF="SuccessClearAnimalLoss";var AXG="RemovedAnimalBirth";var AXH="RemovedAnimalPurchased";
var AXI="WarningNoActionsForAnimalLoss";var AXJ="SuccessLinkTransponder";var AXK=
"SuccessChangeTransponder";var AXL="SuccessUnlinkTransponder";var AXM="SuccessLinkNaisId";
var AXN="WarningDataExportHitBirthFailed";var An4="SuccessDataExportHitBirth";var
AHx="SuccessDataExportHitBirthDownload";var AXO="WarningDataExportHitPurchasedFailed";
var AHy="SuccessDataExportHitPurchased";var AHz="SuccessDataExportHitPurchasedDownload";
var ZT="WarningDataExportAnimalsFailed";var AHA="SuccessDataExportAnimalsRatings";
var AXP="SuccessDataExportAnimalsDownload";var AHB="WarningNoPremisesID";var AXQ=
"WarningNoFlashDrivePresent";var AxO="WarningNoBackupPathPresent";var AXR="WarningNoBackupFilePresent";
var AXS="DemoFunctionNotAvailable";var AxP="WarningImpreciseTimeSetting";var AXT=
"ConfirmationRestoreBackup";var AXU="ConfirmationMassDeregistration";var AXV="SuccessMassDeregistration";
var AHC="WarningParsedDateInFutureInvalid";var An5="WarningParsingDateFailed";var
AHD="WarningParsingNaisIdFailed";var AXW="WarningParsingShortNaisIdWithoutPremisesId";
var AHE="AnimalId";var AHF="FarmId";var AkR="GroupId";var AXX="PersonId";var An6=
"Unhandled transponder type: ";var AXY="FDX";var AHG="HDX";var AHH="HDX (Urban)";
var AXZ="Unhandled transponder protocol: ";var AX0="Illegal RatingMode: ";var AHI=
"Unhandled mass unit: ";var AX1="Max array size is 10";var AHJ="Index out of bounds";
var AX2="ERROR: Received more integers than expected!";var AHK="Unhandled double scan action :";
var AX3="Illegal WeightRecordingMode: ";var AX4="Illegal WeightRecordingScope: ";
var AX5="AnimalData";var AX6="Rating";var AX7="Temperature";var AX8="Weight";var
AX9="Alarm infos";var AX_="Control infos";var AX$="Watch infos";var AYa="Fresh cow infos";
var AHL="No transponder infos";var ZU="Dry cow info";var AYb="No nais id infos";
var AxQ="Registrations infos";var AYc="Unhandled animal list content:";var AYd="Illegal AutoRegistrationMode: ";
var AYe="Illegal FactoryResetScope: ";var An7="??";var AYf="Illegal EaseOfDelivery: ";
var AYg="Illegal Whereabouts: ";var Asx="Illegal breed: ";var Asy="Unisex";var Asz=
"Illegal animalIdGenerationMethod: ";var AsA="Ascending";var AxR="Descending";var
An8="Illegal directionOfCountingName: ";var AHM="Unhandled direction of counting: ";
var AsB="Unhandled German state: ";var AYh="SH";var AYi="HH";var AYj="NI";var AYk=
"HB";var AYl="NW";var AYm="HE";var AYn="RP";var AYo="BW";var AYp="BY";var AYq="SL";
var AYr="BB";var AYs="MV";var AxS="SN";var AYt="ST";var AxT="TH";var AxU="One Range Male Female";
var AYu="Two Ranges Male Female";var AHN="Illegal EartagAssignmentMode: ";var AYv=
"Unhandled code set value ";var AxV="Implement in derived class";var AYw="Illegal HIT-Code: ";
var AYx="Illegal ReasonOfLeaving: ";var AHO="Illegal code: ";var AYy="Undefined";
var AYz="Illegal DeviceComponent: ";var AYA="Unhandled Device::MotherSelectionFilterMode: ";
var AYB="Illegal Device::TimespanDays: ";var AYC="Not connected";var AHP="Host";
var AYD="Device";var AYE="Device CDC";var AYF="Host MSC";var AYG="Host HID";var AYH=
"Host CDC";var AYI="Illegal animalIdAutoGenerationMethod: ";var AYJ="Unhandled month: ";
var AHQ="Illegal transponderAssignmentIdChangeMethod: ";var AYK="Unhandled animal table field: ";
var AsC="Unhandled data export destination: ";var AYL="Unhandled list view scope: ";
var AYM="1 ";var AsD="100 ";var AxW="10 ";var AsE="Unhandled weight value precision: ";
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
B7:null,B8:null,CY:function(AM){if(!AM)return;var Az=this.B7;while(!!Az){if(Az===
AM)throw new Error(Ca);Az=Az.Ag;}AM.AH=this.B8;if(!!this.B8)this.B8.Ag=AM;this.B8=
AM;if(!this.B7)this.B7=AM;},ANZ:function(){return this.B7;},AN4:function(Bas){if(
!!Bas)return Bas.Ag;return null;},DX:function(AIj,EF){var Az=this.B7;while(!!Az){
if(Az.ES===AIj){if(EF===1)return Az;else if(Az.Operator===EF)return Az;}Az=Az.Ag;
}return null;},QW:function(AM){var Az=this.B7;while(!!Az){if(Az===AM){if(!!Az.AH
)Az.AH.Ag=Az.Ag;if(!!Az.Ag)Az.Ag.AH=Az.AH;if(this.B7===Az)this.B7=Az.Ag;if(this.
B8===Az)this.B8=Az.AH;Az.Ag=null;Az.AH=null;return;}Az=Az.Ag;}},GA:function(){var
A$=A._NewObject(C.Filter,0);var Az=this.B7;while(!!Az){A$.CY(Az.AdS());Az=Az.Ag;
}return A$;},_Init:function(aArg){this.__proto__=C.Filter;A.h7++;},_Done:function(
){this.__proto__=null;A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((
B=this.B7)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.B8)&&(B._cycle!=D))B._Mark(
B._cycle=D);if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:
null,_className:"Device::Filter"};C.FilterCriterion={Ag:null,AH:null,ES:-1,Operator:
1,Abh:false,AdS:function(){return null;},GA:function(AM){if(!AM)return;this.ES=AM.
ES;this.Operator=AM.Operator;this.Abh=AM.Abh;},_Init:function(aArg){this.__proto__=
C.FilterCriterion;A.h7++;},_Done:function(){this.__proto__=null;A.h7--;},_ReInit:
function(){},_Mark:function(D){var B;if((B=this.Ag)&&(B._cycle!=D))B._Mark(B._cycle=
D);if((B=this.AH)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.I)&&(B._cycle!=D
))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:"Device::FilterCriterion"
};C.Int32FilterCriterion={A6:0,AdS:function(){var Az=A._NewObject(C.Int32FilterCriterion
,0);Az.GA(this);return Az;},GA:function(AM){C.FilterCriterion.GA.call(this,AM);var
Az=(C.Int32FilterCriterion.isPrototypeOf(AM)?AM:null);if(!!Az)this.A6=Az.A6;},Initialize:
function(AZ,EF,A2,S1){this.ES=AZ;this.Operator=EF;this.A6=A2;this.Abh=S1;return this;
},_Init:function(aArg){C.FilterCriterion._Init.call(this,aArg);this.__proto__=C.
Int32FilterCriterion;},_className:"Device::Int32FilterCriterion"};C.DeviceClass={
ADy:0,ADx:0,Avp:0,Ui:0,OJ:null,Sl:null,QN:null,SJ:null,RK:null,Ap:null,Br:null,Af6:
null,Anm:null,Pe:null,At1:A.jV,AutoActions:A.jV,AA1:A.jV,AF8:A.jV,AF9:A.jV,Ahi:A.
jV,AGs:A.jV,AGt:A.jV,AA2:A.jV,AGr:A.jV,AGw:A.jV,AAW:A.jV,AAX:A.jV,NoNaisIdListActions:
A.jV,NoTransponderListActions:A.jV,YoungNoTransponderListActions:A.jV,AaE:100,Km:
0,AMc:75,Zz:3600,AS9:0,FP:5,Fy:0,KQ:50000,O$:0,AFo:0,Ai0:0,Aqt:0,Aqs:0,AQ1:1,AQ0:
1,AjB:0,AQ2:1,Aw9:0,Ae2:0,Aqi:10,ATP:5,ADq:60,Avl:0,OD:1,WhereAbouts:0,Vt:0,Ahs:
0,Aw1:3,ABZ:0,Al5:0,Af8:1,Aht:0,Abw:0,ApV:0,ANa:11,Breed:0,EartagNrAssignmentMode:
0,Aus:0,ABS:0,ABR:0,Ib:5,AAV:2,ApX:0,ANQ:2,AUA:0,D2:0,ALl:0,JB:0,Gender:2,WeightRecordingScope:
1,WeightRecordingMode:1,AnimalType:0,MassUnit:0,AutoRegistrationMode:0,RatingMode:
0,SyncState:0,OverlayMenu:0,TemperatureUnit:0,Language:0,MeasureState:0,ScanState:
0,KA:3,Ael:true,AQN:false,AlY:true,Ams:false,Amo:true,Hw:false,AUh:false,Amp:false
,AUy:false,Asb:false,ADw:false,Amc:false,UpdateActiveScreen:function(AI){if(this.
KA===AI)return;this.KA=AI;A.abo([this,this.ADK,this.A$G],0);},Y4:function(E){if(
this.K&&this.K.Y4)return this.K.Y4.apply(this,arguments);else return C.DeviceClass.
BsF.apply(this,arguments);},BsF:function(E){},A$G:function(Aq){this.Y4(Aq);},UpdateBatteryChargeState:
function(AI){if(this.AaE===AI)return;this.AaE=AI;A.abo([this,this.Avu,this.Ax2],
0);},AvQ:function(E){if(this.K&&this.K.AvQ)return this.K.AvQ.apply(this,arguments
);else return C.DeviceClass.BsR.apply(this,arguments);},BsR:function(E){A.ab5("%s"
,BD);},Ax2:function(Aq){this.AvQ(Aq);},UpdateChargeActive:function(AI){if(this.Amc===
AI)return;this.Amc=AI;A.abo([this,this.Avx,this.Ax3],0);},AEc:function(E){if(this.
K&&this.K.AEc)return this.K.AEc.apply(this,arguments);else return C.DeviceClass.
BsX.apply(this,arguments);},BsX:function(E){A.ab5("%s",EW);},Ax3:function(Aq){this.
AEc(Aq);},UpdateScanState:function(AI){var B;if(this.ScanState===AI)return;this.
ScanState=AI;A.abo([this,this.ARS,this.AZd],0);A._GetAutoObject(C.Helper).ByZ(this
);},Arn:function(E){if(this.K&&this.K.Arn)return this.K.Arn.apply(this,arguments
);else return C.DeviceClass.BtC.apply(this,arguments);},BtC:function(E){A.ab5("%s"
,Hh);},AZd:function(Aq){this.Arn(Aq);},UpdateMeasureState:function(AI){if(this.MeasureState===
AI)return;this.MeasureState=AI;A.abo([this,this.ADR,this.AH4],0);},Awb:function(
E){if(this.K&&this.K.Awb)return this.K.Awb.apply(this,arguments);else return C.DeviceClass.
Btk.apply(this,arguments);},Btk:function(E){A.ab5("%s",I8);},AH4:function(Aq){this.
Awb(Aq);},UpdateTempValue:function(AI){if(this.Km===AI)return;this.Km=AI;A.abo([
this,this.ADU,this.AH6],0);},Awo:function(E){if(this.K&&this.K.Awo)return this.K.
Awo.apply(this,arguments);else return C.DeviceClass.BtI.apply(this,arguments);},
BtI:function(E){A.ab5("%s",IJ);},AH6:function(Aq){this.Awo(Aq);},Anb:function(E){
if(this.K&&this.K.Anb)return this.K.Anb.apply(this,arguments);else return C.DeviceClass.
Bte.apply(this,arguments);},Bte:function(E){},A$V:function(Aq){this.Anb(Aq);},Awp:
function(E){if(this.K&&this.K.Awp)return this.K.Awp.apply(this,arguments);else return C.
DeviceClass.BtJ.apply(this,arguments);},BtJ:function(E){},AsI:function(Aq){this.
Awp(Aq);},AEa:function(E){if(this.K&&this.K.AEa)return this.K.AEa.apply(this,arguments
);else return C.DeviceClass.BsW.apply(this,arguments);},BsW:function(E){},A$O:function(
Aq){this.AEa(Aq);},AEK:function(E){if(this.K&&this.K.AEK)return this.K.AEK.apply(
this,arguments);else return C.DeviceClass.Btm.apply(this,arguments);},Btm:function(
E){},AY9:function(Aq){this.AEK(Aq);},UpdateMonitoring:function(AI){if(this.ADw===
AI)return;this.ADw=AI;A.abo([this,this.ARJ,this.AY9],0);},UpdateDataTable:function(
Bat){var B;switch(Bat){case 0:A.pe([B=this.Ap,B.Aj2],this);break;case 1:A.pe([B=
this.Br,B.Aj2],this);break;case 3:A.pe([B=this.Af6,B.Aj2],this);break;case 4:A.pe([
B=this.Pe,B.Aj2],this);break;case 2:A.ab5("%s",OT);break;default:A.ab5("%s%e",PV
,Bat);}},Aw0:function(){if(this.K&&this.K.Aw0)return this.K.Aw0.apply(this,arguments
);else return C.DeviceClass.Buf.apply(this,arguments);},Buf:function(){},Ahm:function(
){if(this.K&&this.K.Ahm)return this.K.Ahm.apply(this,arguments);else return C.DeviceClass.
Bui.apply(this,arguments);},Bui:function(){},Ahj:function(){if(this.K&&this.K.Ahj
)return this.K.Ahj.apply(this,arguments);else return C.DeviceClass.Bug.apply(this
,arguments);},Bug:function(){},Any:function(){if(this.K&&this.K.Any)return this.
K.Any.apply(this,arguments);else return C.DeviceClass.Buj.apply(this,arguments);
},Buj:function(){},UpdateLanguage:function(AI){if(this.Language===AI)return;this.
Language=AI;switch(AI){case 14:A._SetLanguage(1);break;case 13:A._SetLanguage(2);
break;case 6:A._SetLanguage(3);break;case 11:A._SetLanguage(4);break;case 10:A._SetLanguage(
5);break;case 12:A._SetLanguage(6);break;case 5:A._SetLanguage(7);break;case 3:A.
_SetLanguage(8);break;case 1:A._SetLanguage(9);break;case 8:A._SetLanguage(10);break;
case 4:A._SetLanguage(11);break;case 15:A._SetLanguage(13);break;case 9:A._SetLanguage(
15);break;case 2:A._SetLanguage(16);break;case 7:A._SetLanguage(17);break;case 16:
A._SetLanguage(18);break;default:A._SetLanguage(0);}A.abo([this,this.A7G,this.A$V
],0);},UpdateTemperatureUnit:function(AI){if(this.TemperatureUnit===AI)return;this.
TemperatureUnit=AI;A.abo([this,this.AqZ,this.AsI],0);},UpdateBrightness:function(
AI){if(this.AMc===AI)return;this.AMc=AI;A.abo([this,this.A7v,this.A$O],0);},SetSystemTime:
function(AhL){if(this.K&&this.K.SetSystemTime)return this.K.SetSystemTime.apply(
this,arguments);else return C.DeviceClass.Bud.apply(this,arguments);},Bud:function(
AhL){},AwU:function(){if(this.K&&this.K.AwU)return this.K.AwU.apply(this,arguments
);else return C.DeviceClass.A$w.apply(this,arguments);},A$w:function(){},AFC:function(
){if(this.K&&this.K.AFC)return this.K.AFC.apply(this,arguments);else return C.DeviceClass.
A$u.apply(this,arguments);},A$u:function(){},BmI:function(){},UpdateOverlayMenu:
function(AI){if(this.OverlayMenu===AI)return;this.OverlayMenu=AI;A.abo([this,this.
AvI,this.Ax_],0);},Cd:function(E){if(this.K&&this.K.Cd)return this.K.Cd.apply(this
,arguments);else return C.DeviceClass.Btx.apply(this,arguments);},Btx:function(E
){},Ax_:function(Aq){this.Cd(Aq);},Awu:function(E){if(this.K&&this.K.Awu)return this.
K.Awu.apply(this,arguments);else return C.DeviceClass.BtS.apply(this,arguments);
},BtS:function(E){},A$6:function(Aq){this.Awu(Aq);},UpdateUnderTemp:function(AI){
if(this.Zz===AI)return;this.Zz=AI;A.abo([this,this.A76,this.A$6],0);},UpdateSyncState:
function(AI){if(this.SyncState===AI)return;this.SyncState=AI;A.abo([this,this.ARU
,this.AZf],0);},AbO:function(E){if(this.K&&this.K.AbO)return this.K.AbO.apply(this
,arguments);else return C.DeviceClass.BtH.apply(this,arguments);},BtH:function(E
){A.ab5("%s",PW);},AZf:function(Aq){this.AbO(Aq);},ACk:function(){if(this.K&&this.
K.ACk)return this.K.ACk.apply(this,arguments);else return C.DeviceClass.Bsx.apply(
this,arguments);},Bsx:function(){return A.jV;},UpdatePopup:function(Kt,AZZ,AZV,AZ2
){this.A5(Kt,AZZ,AZV,AZ2,[this,this.ByH]);},PopupStateChanged:function(Kt,Ae){if(
this.K&&this.K.PopupStateChanged)return this.K.PopupStateChanged.apply(this,arguments
);else return C.DeviceClass.Bt5.apply(this,arguments);},Bt5:function(Kt,Ae){},AE$:
function(E){if(this.K&&this.K.AE$)return this.K.AE$.apply(this,arguments);else return C.
DeviceClass.BtU.apply(this,arguments);},BtU:function(E){},A$7:function(Aq){this.
AE$(Aq);},UpdateVibrationOnKeypressEnabled:function(AI){if(this.Asb===AI)return;
this.Asb=AI;A.abo([this,this.A77,this.A$7],0);},AeH:function(E){if(this.K&&this.
K.AeH)return this.K.AeH.apply(this,arguments);else return C.DeviceClass.BtT.apply(
this,arguments);},BtT:function(E){},AH7:function(Aq){this.AeH(Aq);},UpdateVibrationOn:
function(BaV){if(this.AUy===BaV)return;this.AUy=BaV;A.abo([this,this.ADV,this.AH7
],0);},A5:function(Kt,AZZ,AZV,AZ2,BvL){var AfX=A._NewObject(C.PopupContext,0);AfX.
Id=Kt;AfX.Show=AZZ;AfX.Akk=AZV;AfX.AkE=AZ2;AfX.AFh=BvL;this.Anm.Trigger(AfX,false
);},ByH:function(G){var As=(C.PopupContext.isPrototypeOf(G)?G:null);if(!!As)this.
PopupStateChanged(As.Id,As.PopupState);},Awl:function(E){if(this.K&&this.K.Awl)return this.
K.Awl.apply(this,arguments);else return C.DeviceClass.BtB.apply(this,arguments);
},BtB:function(E){},AZc:function(Aq){this.Awl(Aq);},UpdateRatingMode:function(AI
){if(this.RatingMode===AI)return;this.RatingMode=AI;A.abo([this,this.ARR,this.AZc
],0);},Aey:function(E){if(this.K&&this.K.Aey)return this.K.Aey.apply(this,arguments
);else return C.DeviceClass.Bs8.apply(this,arguments);},Bs8:function(E){},AsH:function(
Aq){this.Aey(Aq);},UpdateFlashLightOn:function(BaC){if(this.Amp===BaC)return;this.
Amp=BaC;A.abo([this,this.AqW,this.AsH],0);},Uc:function(E){if(this.K&&this.K.Uc)
return this.K.Uc.apply(this,arguments);else return C.DeviceClass.BtM.apply(this,
arguments);},BtM:function(E){},AZg:function(Aq){this.Uc(Aq);},UpdateTopLightOn:function(
BaQ){if(this.AUh===BaQ)return;this.AUh=BaQ;A.abo([this,this.ARW,this.AZg],0);},Wi:
function(E){if(this.K&&this.K.Wi)return this.K.Wi.apply(this,arguments);else return C.
DeviceClass.BtA.apply(this,arguments);},BtA:function(E){},Buz:function(Aq){this.
Wi(Aq);},UpdateRGBTopLight:function(BaL){if(this.AS9===BaL)return;this.AS9=BaL;A.
abo([this,this.Bju,this.Buz],0);},AvP:function(E){if(this.K&&this.K.AvP)return this.
K.AvP.apply(this,arguments);else return C.DeviceClass.BsQ.apply(this,arguments);
},BsQ:function(E){},Bur:function(Aq){this.AvP(Aq);},UpdateAutoRegistrationMode:function(
Bap){if(this.AutoRegistrationMode===Bap)return;this.AutoRegistrationMode=Bap;A.abo([
this,this.BiU,this.Bur],0);},Aro:function(E){if(this.K&&this.K.Aro)return this.K.
Aro.apply(this,arguments);else return C.DeviceClass.BtD.apply(this,arguments);},
BtD:function(E){A.ab5("%s",CM);},AZe:function(Aq){this.Aro(Aq);},UpdateScanTransponder:
function(Kt,BaT,BaS){if(((this.OJ.Id===Kt)&&(this.OJ.TransponderType===BaT))&&(this.
OJ.TransponderProtocol===BaS))return;this.OJ.OnSetId(Kt);this.OJ.ASM(BaT);this.OJ.
ASL(BaS);A.abo([this,this.ART,this.AZe],0);},PH:function(E){if(this.K&&this.K.PH
)return this.K.PH.apply(this,arguments);else return C.DeviceClass.Bs0.apply(this
,arguments);},Bs0:function(E){},Acv:function(Aq){this.PH(Aq);},UpdateDigitsID:function(
Bax){if(this.FP===Bax)return;this.FP=Bax;A.abo([this,this.AbC,this.Acv],0);},QS:
function(E){if(this.K&&this.K.QS)return this.K.QS.apply(this,arguments);else return C.
DeviceClass.Btw.apply(this,arguments);},Btw:function(E){},Acw:function(Aq){this.
QS(Aq);},UpdateOffsetID:function(BaI){if(this.Fy===BaI)return;this.Fy=BaI;A.abo([
this,this.AbD,this.Acw],0);},AFd:function(E){if(this.K&&this.K.AFd)return this.K.
AFd.apply(this,arguments);else return C.DeviceClass.Bt1.apply(this,arguments);},
Bt1:function(E){A.ab5("%s",E4);},AH8:function(Aq){this.AFd(Aq);},UpdateWeightValue:
function(AI){if(this.KQ===AI)return;this.KQ=AI;A.abo([this,this.ADW,this.AH8],0);
},Av_:function(E){if(this.K&&this.K.Av_)return this.K.Av_.apply(this,arguments);
else return C.DeviceClass.Bth.apply(this,arguments);},Bth:function(E){},AY8:function(
Aq){this.Av_(Aq);},UpdateMassUnit:function(AI){if(this.MassUnit===AI)return;this.
MassUnit=AI;A.abo([this,this.ARI,this.AY8],0);},Aq2:function(E){if(this.K&&this.
K.Aq2)return this.K.Aq2.apply(this,arguments);else return C.DeviceClass.A$q.apply(
this,arguments);},A$q:function(E){},A$D:function(Aq){this.Aq2(Aq);},Aq3:function(
E){if(this.K&&this.K.Aq3)return this.K.Aq3.apply(this,arguments);else return C.DeviceClass.
A$r.apply(this,arguments);},A$r:function(E){},AY1:function(Aq){this.Aq3(Aq);},UpdateActiveActions:
function(AI){if(this.O$===AI)return;this.O$=AI;A.abo([this,this.A7f,this.A$D],0);
},UpdateActiveActionsOrder:function(AI){if(this.At1===AI)return;this.At1=AI;A.abo([
this,this.ARt,this.AY1],0);},Aj6:function(E){if(this.K&&this.K.Aj6)return this.K.
Aj6.apply(this,arguments);else return C.DeviceClass.A$s.apply(this,arguments);},
A$s:function(E){},A$M:function(Aq){this.Aj6(Aq);},UpdateAutoActions:function(AI){
if(this.AutoActions===AI)return;this.AutoActions=AI;A.abo([this,this.A7r,this.A$M
],0);},AF1:function(){if(this.K&&this.K.AF1)return this.K.AF1.apply(this,arguments
);else return C.DeviceClass.Buh.apply(this,arguments);},Buh:function(){},Ar4:function(
){if(this.K&&this.K.Ar4)return this.K.Ar4.apply(this,arguments);else return C.DeviceClass.
Bul.apply(this,arguments);},Bul:function(){},DT:function(E){if(this.K&&this.K.DT
)return this.K.DT.apply(this,arguments);else return C.DeviceClass.BsN.apply(this
,arguments);},BsN:function(E){},Buq:function(Aq){this.DT(Aq);},UpdateAnimalType:
function(Ee){if(this.AnimalType===Ee)return;this.AnimalType=Ee;A.abo([this,this.
PG,this.Buq],0);},Awv:function(E){if(this.K&&this.K.Awv)return this.K.Awv.apply(
this,arguments);else return C.DeviceClass.BtZ.apply(this,arguments);},BtZ:function(
E){},Baa:function(Aq){this.Awv(Aq);},UpdateWeightRecordingMode:function(BaX){if(
this.WeightRecordingMode===BaX)return;this.WeightRecordingMode=BaX;A.abo([this,this.
A8d,this.Baa],0);},AEQ:function(E){if(this.K&&this.K.AEQ)return this.K.AEQ.apply(
this,arguments);else return C.DeviceClass.Bty.apply(this,arguments);},Bty:function(
E){A.ab5("%s",Lp);},AZa:function(Aq){this.AEQ(Aq);},UpdatePredictedTempValue:function(
AI){if(this.AFo===AI)return;this.AFo=AI;A.abo([this,this.ARO,this.AZa],0);},Sy:function(
L1){if(this.K&&this.K.Sy)return this.K.Sy.apply(this,arguments);else return C.DeviceClass.
Buc.apply(this,arguments);},Buc:function(L1){},AEi:function(E){if(this.K&&this.K.
AEi)return this.K.AEi.apply(this,arguments);else return C.DeviceClass.BsZ.apply(
this,arguments);},BsZ:function(E){},AH1:function(Aq){this.AEi(Aq);},UpdateDemoMode:
function(AI){if(this.Hw===AI)return;this.Hw=AI;A.abo([this,this.ADO,this.AH1],0);
},AD1:function(E){if(this.K&&this.K.AD1)return this.K.AD1.apply(this,arguments);
else return C.DeviceClass.BsG.apply(this,arguments);},BsG:function(E){},A$H:function(
Aq){this.AD1(Aq);},UpdateAgeRegistration:function(BaH){if(this.Ai0===BaH)return;
this.Ai0=BaH;A.abo([this,this.A7k,this.A$H],0);},Aww:function(E){if(this.K&&this.
K.Aww)return this.K.Aww.apply(this,arguments);else return C.DeviceClass.Bt0.apply(
this,arguments);},Bt0:function(E){},Bab:function(Aq){this.Aww(Aq);},UpdateWeightRecordingScope:
function(BaM){if(this.WeightRecordingScope===BaM)return;this.WeightRecordingScope=
BaM;A.abo([this,this.A8e,this.Bab],0);},JJ:function(E){if(this.K&&this.K.JJ)return this.
K.JJ.apply(this,arguments);else return C.DeviceClass.Bta.apply(this,arguments);}
,Bta:function(E){},AY7:function(Aq){this.JJ(Aq);},UpdateGender:function(LY){if(this.
Gender===LY)return;this.Gender=LY;A.abo([this,this.Wc,this.AY7],0);},Arg:function(
E){if(this.K&&this.K.Arg)return this.K.Arg.apply(this,arguments);else return C.DeviceClass.
Btc.apply(this,arguments);},Btc:function(E){},Ax6:function(Aq){this.Arg(Aq);},UpdateIDLastUsedMale:
function(Rb){if(this.Aqt===Rb)return;this.Aqt=Rb;A.abo([this,this.AvC,this.Ax6],
0);},Arf:function(E){if(this.K&&this.K.Arf)return this.K.Arf.apply(this,arguments
);else return C.DeviceClass.Btb.apply(this,arguments);},Btb:function(E){},Ax5:function(
Aq){this.Arf(Aq);},UpdateIDLastUsedFemale:function(Rb){if(this.Aqs===Rb)return;this.
Aqs=Rb;A.abo([this,this.AvB,this.Ax5],0);},AbF:function(E){if(this.K&&this.K.AbF
)return this.K.AbF.apply(this,arguments);else return C.DeviceClass.BsL.apply(this
,arguments);},BsL:function(E){},AHZ:function(Aq){this.AbF(Aq);},UpdateAnimalListContent:
function(AI){if(this.JB===AI)return;this.JB=AI;A.abo([this,this.ADL,this.AHZ],0);
},AD3:function(E){if(this.K&&this.K.AD3)return this.K.AD3.apply(this,arguments);
else return C.DeviceClass.BsH.apply(this,arguments);},BsH:function(E){},A$I:function(
Aq){this.AD3(Aq);},UpdateAlarmListAction:function(AI){if(this.ALl===AI)return;this.
ALl=AI;A.abo([this,this.A7m,this.A$I],0);},AEl:function(E){if(this.K&&this.K.AEl
)return this.K.AEl.apply(this,arguments);else return C.DeviceClass.Bs7.apply(this
,arguments);},Bs7:function(E){},A$R:function(Aq){this.AEl(Aq);},UpdateFlashLightInMeasureState:
function(BaD){if(this.Amo===BaD)return;this.Amo=BaD;A.abo([this,this.A7y,this.A$R
],0);},Aeu:function(E){if(this.K&&this.K.Aeu)return this.K.Aeu.apply(this,arguments
);else return C.DeviceClass.BsK.apply(this,arguments);},BsK:function(E){},AY3:function(
Aq){this.Aeu(Aq);},UpdateAnimalInfoContent:function(AI){if(this.D2===AI)return;this.
D2=AI;A.abo([this,this.ARv,this.AY3],0);},AFc:function(E){if(this.K&&this.K.AFc)
return this.K.AFc.apply(this,arguments);else return C.DeviceClass.BtV.apply(this
,arguments);},BtV:function(E){},A$8:function(Aq){this.AFc(Aq);},UpdateWatchListAction:
function(AI){if(this.AUA===AI)return;this.AUA=AI;A.abo([this,this.A7$,this.A$8],
0);},AEo:function(E){if(this.K&&this.K.AEo)return this.K.AEo.apply(this,arguments
);else return C.DeviceClass.Bs9.apply(this,arguments);},Bs9:function(E){},A$T:function(
Aq){this.AEo(Aq);},UpdateFreshCowListAction:function(AI){if(this.ANQ===AI)return;
this.ANQ=AI;A.abo([this,this.A7A,this.A$T],0);},ArL:function(G){if(this.K&&this.
K.ArL)return this.K.ArL.apply(this,arguments);else return C.DeviceClass.Bt6.apply(
this,arguments);},Bt6:function(G){},BEe:function(s){this.ArL(s);},ArN:function(G
){if(this.K&&this.K.ArN)return this.K.ArN.apply(this,arguments);else return C.DeviceClass.
Bt8.apply(this,arguments);},Bt8:function(G){},BEg:function(s){this.ArN(s);},AvN:
function(E){if(this.K&&this.K.AvN)return this.K.AvN.apply(this,arguments);else return C.
DeviceClass.BsO.apply(this,arguments);},BsO:function(E){},A$K:function(Aq){this.
AvN(Aq);},Arq:function(E){if(this.K&&this.K.Arq)return this.K.Arq.apply(this,arguments
);else return C.DeviceClass.BtK.apply(this,arguments);},BtK:function(E){},A$3:function(
Aq){this.Arq(Aq);},Arr:function(E){if(this.K&&this.K.Arr)return this.K.Arr.apply(
this,arguments);else return C.DeviceClass.BtL.apply(this,arguments);},BtL:function(
E){},A$4:function(Aq){this.Arr(Aq);},ArP:function(G){if(this.K&&this.K.ArP)return this.
K.ArP.apply(this,arguments);else return C.DeviceClass.Bt$.apply(this,arguments);
},Bt$:function(G){},BEj:function(s){this.ArP(s);},UpdateTemperaturesLowString:function(
AI){if(this.AF9===AI)return;this.AF9=AI;A.abo([this,this.A72,this.A$4],0);},UpdateTemperaturesHighString:
function(AI){if(this.AF8===AI)return;this.AF8=AI;A.abo([this,this.A71,this.A$3],
0);},UpdateAnimalTypesString:function(AI){if(this.AA1===AI)return;this.AA1=AI;A.
abo([this,this.A7p,this.A$K],0);},Av5:function(E){if(this.K&&this.K.Av5)return this.
K.Av5.apply(this,arguments);else return C.DeviceClass.Bs$.apply(this,arguments);
},Bs$:function(E){},Buv:function(Aq){this.Av5(Aq);},UpdateFreshCowsHideMeasured:
function(AI){if(this.Ams===AI)return;this.Ams=AI;A.abo([this,this.Bjc,this.Buv],
0);},Ark:function(E){if(this.K&&this.K.Ark)return this.K.Ark.apply(this,arguments
);else return C.DeviceClass.Bts.apply(this,arguments);},Bts:function(E){},A$Z:function(
Aq){this.Ark(Aq);},UpdateNaisIdLastUsedMale:function(W3){if(this.ADy===W3)return;
this.ADy=W3;A.abo([this,this.A7O,this.A$Z],0);},Arj:function(E){if(this.K&&this.
K.Arj)return this.K.Arj.apply(this,arguments);else return C.DeviceClass.Btr.apply(
this,arguments);},Btr:function(E){},A$Y:function(Aq){this.Arj(Aq);},UpdateNaisIdLastUsedFemale:
function(W3){if(this.ADx===W3)return;this.ADx=W3;A.abo([this,this.A7N,this.A$Y],
0);},Awf:function(E){if(this.K&&this.K.Awf)return this.K.Awf.apply(this,arguments
);else return C.DeviceClass.Btp.apply(this,arguments);},Btp:function(E){},Ax8:function(
Aq){this.Awf(Aq);},UpdateNaisIdIncrementMale:function(AkZ){if(this.AQ1===AkZ)return;
this.AQ1=AkZ;A.abo([this,this.AvF,this.Ax8],0);},Awe:function(E){if(this.K&&this.
K.Awe)return this.K.Awe.apply(this,arguments);else return C.DeviceClass.Bto.apply(
this,arguments);},Bto:function(E){},Ax7:function(Aq){this.Awe(Aq);},UpdateNaisIdIncrementFemale:
function(AkZ){if(this.AQ0===AkZ)return;this.AQ0=AkZ;A.abo([this,this.AvE,this.Ax7
],0);},UpdateFirmware:function(){if(this.K&&this.K.UpdateFirmware)return this.K.
UpdateFirmware.apply(this,arguments);else return C.DeviceClass.A$x.apply(this,arguments
);},A$x:function(){},Am8:function(E){if(this.K&&this.K.Am8)return this.K.Am8.apply(
this,arguments);else return C.DeviceClass.BsT.apply(this,arguments);},BsT:function(
E){},A$N:function(Aq){this.Am8(Aq);},UpdateBootloaderMessage:function(AI){if(this.
ApX===AI)return;this.ApX=AI;A.abo([this,this.A7u,this.A$N],0);},ADY:function(E){
if(this.K&&this.K.ADY)return this.K.ADY.apply(this,arguments);else return C.DeviceClass.
BsB.apply(this,arguments);},BsB:function(E){},A$C:function(Aq){this.ADY(Aq);},UpdateActionListAction:
function(AI){if(this.AAV===AI)return;this.AAV=AI;A.abo([this,this.A7e,this.A$C],
0);},AvL:function(E){if(this.K&&this.K.AvL)return this.K.AvL.apply(this,arguments
);else return C.DeviceClass.BsC.apply(this,arguments);},BsC:function(E){},Bup:function(
Aq){this.AvL(Aq);},UpdateActionListHideMeasured:function(AI){if(this.AlY===AI)return;
this.AlY=AI;A.abo([this,this.BiQ,this.Bup],0);},T8:function(E){if(this.K&&this.K.
T8)return this.K.T8.apply(this,arguments);else return C.DeviceClass.BsJ.apply(this
,arguments);},BsJ:function(E){},An_:function(Aq){this.T8(Aq);},UpdateAnimalIdGenerationMethod:
function(Ba2){if(this.Ib===Ba2)return;this.Ib=Ba2;A.abo([this,this.Am0,this.An_]
,0);},AvY:function(E){if(this.K&&this.K.AvY)return this.K.AvY.apply(this,arguments
);else return C.DeviceClass.Bs1.apply(this,arguments);},Bs1:function(E){},AY5:function(
Aq){this.AvY(Aq);},UpdateDirectionOfCountingFemale:function(AkT){if(this.ABR===AkT
)return;this.ABR=AkT;A.abo([this,this.ARB,this.AY5],0);},AvZ:function(E){if(this.
K&&this.K.AvZ)return this.K.AvZ.apply(this,arguments);else return C.DeviceClass.
Bs2.apply(this,arguments);},Bs2:function(E){},AY6:function(Aq){this.AvZ(Aq);},UpdateDirectionOfCountingMale:
function(AkT){if(this.ABS===AkT)return;this.ABS=AkT;A.abo([this,this.ARC,this.AY6
],0);},Av0:function(E){if(this.K&&this.K.Av0)return this.K.Av0.apply(this,arguments
);else return C.DeviceClass.Bs3.apply(this,arguments);},Bs3:function(E){},AH2:function(
Aq){this.Av0(Aq);},UpdateDirectionOfCountingUnisex:function(AkT){if(this.Aus===AkT
)return;this.Aus=AkT;A.abo([this,this.ADP,this.AH2],0);},Arh:function(E){if(this.
K&&this.K.Arh)return this.K.Arh.apply(this,arguments);else return C.DeviceClass.
Btd.apply(this,arguments);},Btd:function(E){},An$:function(Aq){this.Arh(Aq);},UpdateIDLastUsedUnisex:
function(Rb){if(this.AjB===Rb)return;this.AjB=Rb;A.abo([this,this.Am3,this.An$],
0);},Arl:function(E){if(this.K&&this.K.Arl)return this.K.Arl.apply(this,arguments
);else return C.DeviceClass.Btt.apply(this,arguments);},Btt:function(E){},AY_:function(
Aq){this.Arl(Aq);},UpdateNaisIdLastUsedUnisex:function(W3){if(this.Avp===W3)return;
this.Avp=W3;A.abo([this,this.ARK,this.AY_],0);},Awg:function(E){if(this.K&&this.
K.Awg)return this.K.Awg.apply(this,arguments);else return C.DeviceClass.Btq.apply(
this,arguments);},Btq:function(E){},Ax9:function(Aq){this.Awg(Aq);},UpdateNaisIdIncrementUnisex:
function(AkZ){if(this.AQ2===AkZ)return;this.AQ2=AkZ;A.abo([this,this.AvG,this.Ax9
],0);},Aj9:function(E){if(this.K&&this.K.Aj9)return this.K.Aj9.apply(this,arguments
);else return C.DeviceClass.Bs5.apply(this,arguments);},Bs5:function(E){},Ax4:function(
Aq){this.Aj9(Aq);},UpdateEartagNrAssignmentMode:function(AkU){if(this.EartagNrAssignmentMode===
AkU)return;this.EartagNrAssignmentMode=AkU;A.abo([this,this.AvA,this.Ax4],0);},NR:
function(E){if(this.K&&this.K.NR)return this.K.NR.apply(this,arguments);else return C.
DeviceClass.BsV.apply(this,arguments);},BsV:function(E){},But:function(Aq){this.
NR(Aq);},UpdateBreed:function(AcD){if(this.Breed===AcD)return;this.Breed=AcD;A.abo([
this,this.Avw,this.But],0);},AEH:function(E){if(this.K&&this.K.AEH)return this.K.
AEH.apply(this,arguments);else return C.DeviceClass.Btl.apply(this,arguments);},
Btl:function(E){},Bux:function(Aq){this.AEH(Aq);},UpdateMiddlewareVersions:function(
P4,AZR,AZS,AZY,AZG){this.Sl.OnSetTimestamp(P4);this.Sl.AEC(AZR);this.Sl.AEJ(AZS);
this.Sl.AET(AZY);this.Sl.AEg(AZG);A.abo([this,this.Bjp,this.Bux],0);},AEB:function(
E){if(this.K&&this.K.AEB)return this.K.AEB.apply(this,arguments);else return C.DeviceClass.
Btf.apply(this,arguments);},Btf:function(E){},Buw:function(Aq){this.AEB(Aq);},UpdateMainboardVersions:
function(P4,AZP,AZQ,AZO,AZ4,AZ5,AZ3){this.QN.OnSetTimestamp(P4);this.QN.AEz(AZP);
this.QN.AEA(AZQ);this.QN.AEy(AZO);this.QN.AE6(AZ4);this.QN.AE7(AZ5);this.QN.AE5(
AZ3);A.abo([this,this.Bjn,this.Buw],0);},AE8:function(E){if(this.K&&this.K.AE8)return this.
K.AE8.apply(this,arguments);else return C.DeviceClass.BtN.apply(this,arguments);
},BtN:function(E){},BuD:function(Aq){this.AE8(Aq);},UpdateTorchboardVersions:function(
P4,AZP,AZQ,AZO,AZ4,AZ5,AZ3){this.SJ.OnSetTimestamp(P4);this.SJ.AEz(AZP);this.SJ.
AEA(AZQ);this.SJ.AEy(AZO);this.SJ.AE6(AZ4);this.SJ.AE7(AZ5);this.SJ.AE5(AZ3);A.abo([
this,this.BjL,this.BuD],0);},AD8:function(E){if(this.K&&this.K.AD8)return this.K.
AD8.apply(this,arguments);else return C.DeviceClass.BsU.apply(this,arguments);},
BsU:function(E){},Bus:function(Aq){this.AD8(Aq);},UpdateBootloaderVersions:function(
P4,AZR,AZS,AZY,AZG){this.RK.OnSetTimestamp(P4);this.RK.AEC(AZR);this.RK.AEJ(AZS);
this.RK.AET(AZY);this.RK.AEg(AZG);A.abo([this,this.BiX,this.Bus],0);},AEj:function(
E){if(this.K&&this.K.AEj)return this.K.AEj.apply(this,arguments);else return C.DeviceClass.
Bs4.apply(this,arguments);},Bs4:function(E){},A$Q:function(Aq){this.AEj(Aq);},UpdateDryCowListAction:
function(AI){if(this.ANa===AI)return;this.ANa=AI;A.abo([this,this.A7w,this.A$Q],
0);},AIS:function(AZI){if(this.K&&this.K.AIS)return this.K.AIS.apply(this,arguments
);else return C.DeviceClass.BuP.apply(this,arguments);},BuP:function(AZI){return false;
},AD7:function(E){if(this.K&&this.K.AD7)return this.K.AD7.apply(this,arguments);
else return C.DeviceClass.BsS.apply(this,arguments);},BsS:function(E){},AH0:function(
Aq){this.AD7(Aq);},UpdateBirthListView:function(AI){if(this.ApV===AI)return;this.
ApV=AI;A.abo([this,this.ADM,this.AH0],0);},BatchResetBirthNoticePending:function(
){var B6=A._NewObject(C.Animal,0);var P;var AiA=0;var AcX=A._GetAutoObject(C.Device
).Ap.Filter;var A$=A._GetAutoObject(C.Helper).ANV();A._GetAutoObject(C.Device).Ap.
Bh(A$);for(P=0;P<A._GetAutoObject(C.Device).Ap.Cb();P++){B6.EB(P,A._GetAutoObject(
C.Device).Ap);B6.AeB(false);B6.Cl(A._GetAutoObject(C.Device).Ap);AiA++;}A._GetAutoObject(
C.Device).Ap.Bh(AcX);return AiA;},UpdateTransferProgress:function(AI){if(this.Aw9===
AI)return;this.Aw9=AI;A.abo([this,this.ARX,this.AZh],0);},AE9:function(E){if(this.
K&&this.K.AE9)return this.K.AE9.apply(this,arguments);else return C.DeviceClass.
BtO.apply(this,arguments);},BtO:function(E){A.ab5("%s",PX);},AZh:function(Aq){this.
AE9(Aq);},UpdateTransferTarget:function(AI){if(this.Ae2===AI)return;this.Ae2=AI;
A.abo([this,this.A75,this.A$5],0);},Ars:function(E){if(this.K&&this.K.Ars)return this.
K.Ars.apply(this,arguments);else return C.DeviceClass.BtP.apply(this,arguments);
},BtP:function(E){A.ab5("%s",Kq);},A$5:function(Aq){this.Ars(Aq);},Ar3:function(
){if(this.K&&this.K.Ar3)return this.K.Ar3.apply(this,arguments);else return C.DeviceClass.
Buk.apply(this,arguments);},Buk:function(){},Awk:function(E){if(this.K&&this.K.Awk
)return this.K.Awk.apply(this,arguments);else return C.DeviceClass.Btz.apply(this
,arguments);},Btz:function(E){},AZb:function(Aq){this.Awk(Aq);},UpdatePremisesID:
function(Rb){if(this.Ui===Rb)return;this.Ui=Rb;A.abo([this,this.ARP,this.AZb],0);
},Awd:function(E){if(this.K&&this.K.Awd)return this.K.Awd.apply(this,arguments);
else return C.DeviceClass.Btn.apply(this,arguments);},Btn:function(E){},AH5:function(
Aq){this.Awd(Aq);},UpdateMotherSelectionDriedOffFilter:function(AI){if(this.Abw===
AI)return;this.Abw=AI;A.abo([this,this.ADT,this.AH5],0);},AEp:function(E){if(this.
K&&this.K.AEp)return this.K.AEp.apply(this,arguments);else return C.DeviceClass.
Bs_.apply(this,arguments);},Bs_:function(E){},A$U:function(Aq){this.AEp(Aq);},UpdateFreshCowSpan:
function(AI){if(this.Aqi===AI)return;this.Aqi=AI;A.abo([this,this.A7B,this.A$U],
0);},UpdateUSBState:function(BaU){if(this.Aht===BaU)return;this.Aht=BaU;A.abo([this
,this.Wd,this.WW],0);},AE_:function(E){if(this.K&&this.K.AE_)return this.K.AE_.apply(
this,arguments);else return C.DeviceClass.BtR.apply(this,arguments);},BtR:function(
E){A.ab5("%s",EW);},WW:function(Aq){this.AE_(Aq);},Anu:function(AhG){if(this.K&&
this.K.Anu)return this.K.Anu.apply(this,arguments);else return C.DeviceClass.Bue.
apply(this,arguments);},Bue:function(AhG){return A._NewObject(C.Aji,0);},AqF:function(
){if(this.K&&this.K.AqF)return this.K.AqF.apply(this,arguments);else return C.DeviceClass.
BsA.apply(this,arguments);},BsA:function(){return false;},Ap7:function(Nj){if(this.
K&&this.K.Ap7)return this.K.Ap7.apply(this,arguments);else return C.DeviceClass.
Bsv.apply(this,arguments);},Bsv:function(Nj){},AEW:function(E){if(this.K&&this.K.
AEW)return this.K.AEW.apply(this,arguments);else return C.DeviceClass.BtE.apply(
this,arguments);},BtE:function(E){},BuA:function(Aq){this.AEW(Aq);},UpdateSerialNumber:
function(AI){if(this.Ahi===AI)return;this.Ahi=AI;A.abo([this,this.BjA,this.BuA],
0);},AvM:function(E){if(this.K&&this.K.AvM)return this.K.AvM.apply(this,arguments
);else return C.DeviceClass.BsI.apply(this,arguments);},BsI:function(E){},AY2:function(
Aq){this.AvM(Aq);},UpdateAnimalIdAutoGenerationMethod:function(Ba1){if(this.Af8===
Ba1)return;this.Af8=Ba1;A.abo([this,this.ARu,this.AY2],0);},ABD:function(){return false;
},AFD:function(){return false;},AEY:function(E){if(this.K&&this.K.AEY)return this.
K.AEY.apply(this,arguments);else return C.DeviceClass.BtF.apply(this,arguments);
},BtF:function(E){},A$2:function(Aq){this.AEY(Aq);},UpdateShutdownTimer:function(
AI){if(this.ATP===AI)return;this.ATP=AI;A.abo([this,this.A7Y,this.A$2],0);},Aq8:
function(E){if(this.K&&this.K.Aq8)return this.K.Aq8.apply(this,arguments);else return C.
DeviceClass.BsM.apply(this,arguments);},BsM:function(E){},A$J:function(Aq){this.
Aq8(Aq);},UpdateAnimalListInfoItemMode:function(AI){if(this.Al5===AI)return;this.
Al5=AI;A.abo([this,this.A7n,this.A$J],0);},ArQ:function(G){if(this.K&&this.K.ArQ
)return this.K.ArQ.apply(this,arguments);else return C.DeviceClass.Bua.apply(this
,arguments);},Bua:function(G){},BEk:function(s){this.ArQ(s);},Arv:function(E){if(
this.K&&this.K.Arv)return this.K.Arv.apply(this,arguments);else return C.DeviceClass.
BtX.apply(this,arguments);},BtX:function(E){},A$_:function(Aq){this.Arv(Aq);},Arw:
function(E){if(this.K&&this.K.Arw)return this.K.Arw.apply(this,arguments);else return C.
DeviceClass.BtY.apply(this,arguments);},BtY:function(E){},A$$:function(Aq){this.
Arw(Aq);},UpdateWeightGainsLowString:function(AI){if(this.AGt===AI)return;this.AGt=
AI;A.abo([this,this.A8c,this.A$$],0);},UpdateWeightGainsHighString:function(AI){
if(this.AGs===AI)return;this.AGs=AI;A.abo([this,this.A8b,this.A$_],0);},AvO:function(
E){if(this.K&&this.K.AvO)return this.K.AvO.apply(this,arguments);else return C.DeviceClass.
BsP.apply(this,arguments);},BsP:function(E){},A$L:function(Aq){this.AvO(Aq);},UpdateAnimalTypesWeightGainsString:
function(AI){if(this.AA2===AI)return;this.AA2=AI;A.abo([this,this.A7q,this.A$L],
0);},Aru:function(E){if(this.K&&this.K.Aru)return this.K.Aru.apply(this,arguments
);else return C.DeviceClass.BtW.apply(this,arguments);},BtW:function(E){},A$9:function(
Aq){this.Aru(Aq);},Arx:function(E){if(this.K&&this.K.Arx)return this.K.Arx.apply(
this,arguments);else return C.DeviceClass.Bt2.apply(this,arguments);},Bt2:function(
E){},Bac:function(Aq){this.Arx(Aq);},UpdateWeightValueBirthString:function(AI){if(
this.AGw===AI)return;this.AGw=AI;A.abo([this,this.A8f,this.Bac],0);},UpdateWeightGainsAverageString:
function(AI){if(this.AGr===AI)return;this.AGr=AI;A.abo([this,this.A8a,this.A$9],
0);},Av1:function(E){if(this.K&&this.K.Av1)return this.K.Av1.apply(this,arguments
);else return C.DeviceClass.Bs6.apply(this,arguments);},Bs6:function(E){},Buu:function(
Aq){this.Av1(Aq);},UpdateEvaluationAnimalType:function(Ee){if(this.ABZ===Ee)return;
this.ABZ=Ee;A.abo([this,this.Bi7,this.Buu],0);},UpdateStartScreen:function(AI){if(
this.Aw1===AI)return;this.Aw1=AI;A.abo([this,this.BjB,this.BuB],0);},Awn:function(
E){if(this.K&&this.K.Awn)return this.K.Awn.apply(this,arguments);else return C.DeviceClass.
BtG.apply(this,arguments);},BtG:function(E){},BuB:function(Aq){this.Awn(Aq);},AC$:
function(){if(this.K&&this.K.AC$)return this.K.AC$.apply(this,arguments);else return C.
DeviceClass.Bsy.apply(this,arguments);},Bsy:function(){return 1;},ADa:function(){
if(this.K&&this.K.ADa)return this.K.ADa.apply(this,arguments);else return C.DeviceClass.
Bsz.apply(this,arguments);},Bsz:function(){return 1;},GetCommitCount:function(){
return 1995;},GetCommitEpoch:function(){return 1708590020;},GetCommitHash:function(
){return A.kR.Bf4;},GetVersionMajor:function(){return 0;},GetVersionMinor:function(
){return 9;},GetVersionRev:function(){return 9;},AEG:function(E){if(this.K&&this.
K.AEG)return this.K.AEG.apply(this,arguments);else return C.DeviceClass.Btj.apply(
this,arguments);},Btj:function(E){},A$X:function(Aq){this.AEG(Aq);},UpdateMaximumAgeNewOnFarm:
function(AI){if(this.ADq===AI)return;this.ADq=AI;A.abo([this,this.A7M,this.A$X],
0);},Awt:function(E){if(this.K&&this.K.Awt)return this.K.Awt.apply(this,arguments
);else return C.DeviceClass.BtQ.apply(this,arguments);},BtQ:function(E){},AZi:function(
Aq){this.Awt(Aq);},UpdateTransponderAssignmentIdChangeMethod:function(BaR){if(this.
Ahs===BaR)return;this.Ahs=BaR;A.abo([this,this.ARY,this.AZi],0);},BatchResetPurchasedNoticePending:
function(){var B6=A._NewObject(C.Animal,0);var P;var AiA=0;var AcX=A._GetAutoObject(
C.Device).Ap.Filter;var A$=A._GetAutoObject(C.Helper).AN6();A._GetAutoObject(C.Device
).Ap.Bh(A$);for(P=0;P<A._GetAutoObject(C.Device).Ap.Cb();P++){B6.EB(P,A._GetAutoObject(
C.Device).Ap);B6.AeB(false);B6.Cl(A._GetAutoObject(C.Device).Ap);AiA++;}A._GetAutoObject(
C.Device).Ap.Bh(AcX);return AiA;},AEh:function(E){if(this.K&&this.K.AEh)return this.
K.AEh.apply(this,arguments);else return C.DeviceClass.BsY.apply(this,arguments);
},BsY:function(E){},AY4:function(Aq){this.AEh(Aq);},UpdateDataExportDestination:
function(AI){if(this.Vt===AI)return;this.Vt=AI;A.abo([this,this.ARA,this.AY4],0);
},Blt:function(E){},UpdateMassRecordingAutomatic:function(AI){if(this.AQN===AI)return;
this.AQN=AI;A.abo([this,this.Bjo,this.Blt],0);},Nc:function(E){if(this.K&&this.K.
Nc)return this.K.Nc.apply(this,arguments);else return C.DeviceClass.Bt3.apply(this
,arguments);},Bt3:function(E){},BuE:function(Aq){this.Nc(Aq);},UpdateWhereAbouts:
function(Afn){if(this.WhereAbouts===Afn)return;this.WhereAbouts=Afn;A.abo([this,
this.AvJ,this.BuE],0);},Aq5:function(E){if(this.K&&this.K.Aq5)return this.K.Aq5.
apply(this,arguments);else return C.DeviceClass.BsD.apply(this,arguments);},BsD:
function(E){},A$E:function(Aq){this.Aq5(Aq);},Aq6:function(E){if(this.K&&this.K.
Aq6)return this.K.Aq6.apply(this,arguments);else return C.DeviceClass.BsE.apply(
this,arguments);},BsE:function(E){},A$F:function(Aq){this.Aq6(Aq);},UpdateActiveMassRecordingFields:
function(AI){if(this.AAW===AI)return;this.AAW=AI;A.abo([this,this.A7g,this.A$E],
0);},UpdateActiveMassRecordingFieldsOrder:function(AI){if(this.AAX===AI)return;this.
AAX=AI;A.abo([this,this.A7h,this.A$F],0);},ArM:function(G){if(this.K&&this.K.ArM
)return this.K.ArM.apply(this,arguments);else return C.DeviceClass.Bt7.apply(this
,arguments);},Bt7:function(G){},BEf:function(s){this.ArM(s);},AEE:function(E){if(
this.K&&this.K.AEE)return this.K.AEE.apply(this,arguments);else return C.DeviceClass.
Btg.apply(this,arguments);},Btg:function(E){},AH3:function(Aq){this.AEE(Aq);},UpdateMassRecordingDateOfBirthMandatory:
function(AI){if(this.Ael===AI)return;this.Ael=AI;A.abo([this,this.ADQ,this.AH3],
0);},AED:function(E){this.UpdateMassRecordingCounter(E);},UpdateMassRecordingCounter:
function(AI){if(this.Avl===AI)return;this.Avl=AI;A.abo([this,this.A7K,this.AED],
0);},Ajc:function(){if(this.K&&this.K.Ajc)return this.K.Ajc.apply(this,arguments
);else return C.DeviceClass.Bst.apply(this,arguments);},Bst:function(){return false;
},ApT:function(){if(this.K&&this.K.ApT)return this.K.ApT.apply(this,arguments);else
return C.DeviceClass.Bss.apply(this,arguments);},Bss:function(){return false;},ApS:
function(){if(this.K&&this.K.ApS)return this.K.ApS.apply(this,arguments);else return C.
DeviceClass.Bsr.apply(this,arguments);},Bsr:function(){return false;},Aue:function(
){if(this.K&&this.K.Aue)return this.K.Aue.apply(this,arguments);else return C.DeviceClass.
Bsu.apply(this,arguments);},Bsu:function(){return false;},Awa:function(E){if(this.
K&&this.K.Awa)return this.K.Awa.apply(this,arguments);else return C.DeviceClass.
Bti.apply(this,arguments);},Bti:function(E){},A$W:function(Aq){this.Awa(Aq);},UpdateMaxWeightValuePrecision:
function(AI){if(this.OD===AI)return;this.OD=AI;A.abo([this,this.A7L,this.A$W],0);
},Awh:function(E){if(this.K&&this.K.Awh)return this.K.Awh.apply(this,arguments);
else return C.DeviceClass.Btu.apply(this,arguments);},Btu:function(E){},A$0:function(
Aq){this.Awh(Aq);},UpdateNoNaisIdListActions:function(AI){if(this.NoNaisIdListActions===
AI)return;this.NoNaisIdListActions=AI;A.abo([this,this.A7P,this.A$0],0);},AwK:function(
G){if(this.K&&this.K.AwK)return this.K.AwK.apply(this,arguments);else return C.DeviceClass.
Bt9.apply(this,arguments);},Bt9:function(G){},BEh:function(s){this.AwK(s);},Awi:
function(E){if(this.K&&this.K.Awi)return this.K.Awi.apply(this,arguments);else return C.
DeviceClass.Btv.apply(this,arguments);},Btv:function(E){},A$1:function(Aq){this.
Awi(Aq);},UpdateNoTransponderListActions:function(AI){if(this.NoTransponderListActions===
AI)return;this.NoTransponderListActions=AI;A.abo([this,this.A7Q,this.A$1],0);},AwL:
function(G){if(this.K&&this.K.AwL)return this.K.AwL.apply(this,arguments);else return C.
DeviceClass.Bt_.apply(this,arguments);},Bt_:function(G){},BEi:function(s){this.AwL(
s);},Awy:function(E){if(this.K&&this.K.Awy)return this.K.Awy.apply(this,arguments
);else return C.DeviceClass.Bt4.apply(this,arguments);},Bt4:function(E){},Bad:function(
Aq){this.Awy(Aq);},UpdateYoungNoTransponderListActions:function(AI){if(this.YoungNoTransponderListActions===
AI)return;this.YoungNoTransponderListActions=AI;A.abo([this,this.A8h,this.Bad],0
);},AwM:function(G){if(this.K&&this.K.AwM)return this.K.AwM.apply(this,arguments
);else return C.DeviceClass.Bub.apply(this,arguments);},Bub:function(G){},BEl:function(
s){this.AwM(s);},ADK:function(){return this.KA;},Avu:function(){return this.AaE;
},Avx:function(){return this.Amc;},ARS:function(){return this.ScanState;},ADR:function(
){return this.MeasureState;},ADU:function(){return this.Km;},A7G:function(){return this.
Language;},AqZ:function(){return this.TemperatureUnit;},A7v:function(){return this.
AMc;},ARJ:function(){return this.ADw;},AvI:function(){return this.OverlayMenu;},
A76:function(){return this.Zz;},ARU:function(){return this.SyncState;},A77:function(
){return this.Asb;},ADV:function(){return this.AUy;},ARR:function(){return this.
RatingMode;},AqW:function(){return this.Amp;},ARW:function(){return this.AUh;},Bju:
function(){return this.AS9;},BiU:function(){return this.AutoRegistrationMode;},ART:
function(){return this.OJ;},AbC:function(){return this.FP;},AbD:function(){return this.
Fy;},ADW:function(){return this.KQ;},ARI:function(){return this.MassUnit;},A7f:function(
){return this.O$;},ARt:function(){return this.At1;},A7r:function(){return this.AutoActions;
},PG:function(){return this.AnimalType;},A8d:function(){return this.WeightRecordingMode;
},ARO:function(){return this.AFo;},ADO:function(){return this.Hw;},A7k:function(
){return this.Ai0;},A8e:function(){return this.WeightRecordingScope;},Wc:function(
){return this.Gender;},AvC:function(){return this.Aqt;},AvB:function(){return this.
Aqs;},ADL:function(){return this.JB;},A7m:function(){return this.ALl;},A7y:function(
){return this.Amo;},ARv:function(){return this.D2;},A7$:function(){return this.AUA;
},A7A:function(){return this.ANQ;},A7p:function(){return this.AA1;},A71:function(
){return this.AF8;},A72:function(){return this.AF9;},Bjc:function(){return this.
Ams;},A7O:function(){return this.ADy;},A7N:function(){return this.ADx;},AvF:function(
){return this.AQ1;},AvE:function(){return this.AQ0;},A7u:function(){return this.
ApX;},A7e:function(){return this.AAV;},BiQ:function(){return this.AlY;},Am0:function(
){return this.Ib;},ARB:function(){return this.ABR;},ARC:function(){return this.ABS;
},ADP:function(){return this.Aus;},Am3:function(){return this.AjB;},ARK:function(
){return this.Avp;},AvG:function(){return this.AQ2;},AvA:function(){return this.
EartagNrAssignmentMode;},Avw:function(){return this.Breed;},Bjp:function(){return this.
Sl;},Bjn:function(){return this.QN;},BjL:function(){return this.SJ;},BiX:function(
){return this.RK;},A7w:function(){return this.ANa;},ADM:function(){return this.ApV;
},ARX:function(){return this.Aw9;},A75:function(){return this.Ae2;},ARP:function(
){return this.Ui;},ADT:function(){return this.Abw;},A7B:function(){return this.Aqi;
},Wd:function(){return this.Aht;},BjA:function(){return this.Ahi;},ARu:function(
){return this.Af8;},A7Y:function(){return this.ATP;},A7n:function(){return this.
Al5;},A8b:function(){return this.AGs;},A8c:function(){return this.AGt;},A7q:function(
){return this.AA2;},A8a:function(){return this.AGr;},A8f:function(){return this.
AGw;},Bi7:function(){return this.ABZ;},BjB:function(){return this.Aw1;},A7M:function(
){return this.ADq;},ARY:function(){return this.Ahs;},ARA:function(){return this.
Vt;},Bjo:function(){return this.AQN;},AvJ:function(){return this.WhereAbouts;},A7g:
function(){return this.AAW;},A7h:function(){return this.AAX;},ADQ:function(){return this.
Ael;},A7K:function(){return this.Avl;},A7L:function(){return this.OD;},A7P:function(
){return this.NoNaisIdListActions;},A7Q:function(){return this.NoTransponderListActions;
},A8h:function(){return this.YoungNoTransponderListActions;},_Init:function(aArg
){C.Table._Init.call(this.Ap={I:this},0);C.Table._Init.call(this.Br={I:this},0);
C.Table._Init.call(this.Af6={I:this},0);A.Core.A_j._Init.call(this.Anm={I:this},
0);C.Table._Init.call(this.Pe={I:this},0);this.__proto__=C.DeviceClass;this.Ap.OnSetId(
0);this.Br.OnSetId(1);this.Af6.OnSetId(3);this.Pe.OnSetId(4);this.OJ=A._NewObject(
C.Transponder,0);this.Sl=A._NewObject(C.AwZ,0);this.QN=A._NewObject(C.AuU,0);this.
SJ=A._NewObject(C.AuU,0);this.RK=A._NewObject(C.AwZ,0);var Lr=this._variants();if(
Lr){this.K={};Lr._Init.call(this,aArg);}A.h7++;},_Done:function(){if(this.K)this.
K._Done.call(this);this.__proto__=null;this.Ap._Done();this.Br._Done();this.Af6.
_Done();this.Anm._Done();this.Pe._Done();A.h7--;},_ReInit:function(){this.Ap._ReInit(
);this.Br._ReInit();this.Af6._ReInit();this.Anm._ReInit();this.Pe._ReInit();if(this.
K)this.K._ReInit.call(this);},_Mark:function(D){var B;if((B=this.OJ)&&(B._cycle!=
D))B._Mark(B._cycle=D);if((B=this.Sl)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.
QN)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.SJ)&&(B._cycle!=D))B._Mark(B._cycle=
D);if((B=this.RK)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Ap)._cycle!=D)B.
_Mark(B._cycle=D);if((B=this.Br)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Af6)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.Anm)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
Pe)._cycle!=D)B._Mark(B._cycle=D);if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=
D);if(this.K)this.K._Mark(D);},_variants:function(){return A.acr.DeviceClass._variants(
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
35,AnimalSingleInfoScreen:36,AnimalListActions:37,InitializationSettings:38,ControlledPowerOff:
39,ChargeWarning:40,AlarmListFilter:41,WatchListFilter:42,AlarmListActions:43,ControlListActions:
44,WatchListActions:45,DataAcquisitionSettings:46,FreshCowList:47,FreshCowListFilter:
48,FreshCowListActions:49,SetSaveTransponderScreen:50,NoTransponderList:51,NoTransponderListFilter:
52,NoTransponderListActions:53,AnimalActionPerished:54,NewAnimalSetTransponderScreen:
55,AnimalMultiInfoScreen:56,MultiInfoActionsScreen:57,ActionList:58,ActionListFilter:
59,ActionListActions:60,Update:61,NewAnimalCalvingData:62,NewAnimalsSetTransponderScreen:
63,EvaluationTemperatures:64,EvaluationWeights:65,EvaluationRatings:66,EvaluationLosses:
67,TemperatureMeasurement:68,DryCowList:69,DryCowListFilter:70,DryCowListActions:
71,DeviceMain:72,DeviceService:73,DeviceCheck:74,EvaluationMenuWeights:75,EvaluationBirthWeights:
76,EvaluationWeightsRecent:77,ListsMain:78,ListsIdManagement:79,NoNaisIdList:80,
NoNaisIdListFilter:81,NoNaisIdListActions:82,RegistrationsListFilter:83,RegistrationsListActions:
84,BirthRegistrationsList:85,AnimalRegistrationDetails:86,PremisesSettings:87,NewMenu:
88,NewAnimalLoss:89,MotherScanScreen:90,SetSaveNaisIdScreen:91,EditAnimalDataNaisId:
92,DeviceInfo:93,DeviceDatamanagement:94,AnimalEvaluationFilter:95,YoungNoTransponderList:
96,YoungNoTransponderListFilter:97,YoungNoTransponderListActions:98,RegistrationPresettingsSettings:
99,RegistrationAutomaticSettings:100,TransponderAssignmentSettings:101,PurchasedAnimalsList:
102,TextInput:103,DeviceAnimalDataMenu:104,DeviceDeviceDataMenu:105,LAST:106};C.
Operator={Equal:0,None:1,Greater:2,Less:3,Contains:4,Unequal:5};C.MeasureState={
Idle:0,Progress:1,Prediction:2,Ready:3,Error:4,LAST:5};C.StringFilterCriterion={
A6:A.jV,AdS:function(){var Az=A._NewObject(C.StringFilterCriterion,0);Az.GA(this
);return Az;},GA:function(AM){C.FilterCriterion.GA.call(this,AM);var Az=(C.StringFilterCriterion.
isPrototypeOf(AM)?AM:null);if(!!Az)this.A6=Az.A6;},_Init:function(aArg){C.FilterCriterion.
_Init.call(this,aArg);this.__proto__=C.StringFilterCriterion;},_className:"Device::StringFilterCriterion"
};C.Table={CD:function(Ac,AZ){if(this.K&&this.K.CD)return this.K.CD.apply(this,arguments
);else return C.ITable.CD.apply(this,arguments);},VB:function(Ac,AZ){if(this.K&&
this.K.VB)return this.K.VB.apply(this,arguments);else return C.ITable.VB.apply(this
,arguments);},HW:function(Ac,AZ){if(this.K&&this.K.HW)return this.K.HW.apply(this
,arguments);else return C.ITable.HW.apply(this,arguments);},OnSetId:function(E){
if(this.K&&this.K.OnSetId)return this.K.OnSetId.apply(this,arguments);else return C.
ITable.OnSetId.apply(this,arguments);},Cb:function(){if(this.K&&this.K.Cb)return this.
K.Cb.apply(this,arguments);else return C.ITable.Cb.apply(this,arguments);},Bh:function(
E){if(this.K&&this.K.Bh)return this.K.Bh.apply(this,arguments);else return C.ITable.
Bh.apply(this,arguments);},VC:function(Ac,AZ){if(this.K&&this.K.VC)return this.K.
VC.apply(this,arguments);else return C.ITable.VC.apply(this,arguments);},R7:function(
Ac,AZ){if(this.K&&this.K.R7)return this.K.R7.apply(this,arguments);else return C.
ITable.R7.apply(this,arguments);},Ot:function(){if(this.K&&this.K.Ot)return this.
K.Ot.apply(this,arguments);else return C.ITable.Ot.apply(this,arguments);},Ov:function(
Aon){if(this.K&&this.K.Ov)return this.K.Ov.apply(this,arguments);else return C.ITable.
Ov.apply(this,arguments);},Yj:function(){if(this.K&&this.K.Yj)return this.K.Yj.apply(
this,arguments);else return C.ITable.Yj.apply(this,arguments);},Zj:function(Ac,AZ
,CW){if(this.K&&this.K.Zj)return this.K.Zj.apply(this,arguments);else return C.ITable.
Zj.apply(this,arguments);},He:function(Ac,AZ,CW){if(this.K&&this.K.He)return this.
K.He.apply(this,arguments);else return C.ITable.He.apply(this,arguments);},Zi:function(
Ac,AZ,CW){if(this.K&&this.K.Zi)return this.K.Zi.apply(this,arguments);else return C.
ITable.Zi.apply(this,arguments);},Mw:function(Ac,AZ,CW){if(this.K&&this.K.Mw)return this.
K.Mw.apply(this,arguments);else return C.ITable.Mw.apply(this,arguments);},Zh:function(
Ac,AZ,CW){if(this.K&&this.K.Zh)return this.K.Zh.apply(this,arguments);else return C.
ITable.Zh.apply(this,arguments);},K9:function(aColumn,A2){if(this.K&&this.K.K9)return this.
K.K9.apply(this,arguments);else return C.ITable.K9.apply(this,arguments);},LM:function(
Ac,AZ){if(this.K&&this.K.LM)return this.K.LM.apply(this,arguments);else return C.
ITable.LM.apply(this,arguments);},Sz:function(Ac,AZ,CW){if(this.K&&this.K.Sz)return this.
K.Sz.apply(this,arguments);else return C.ITable.Sz.apply(this,arguments);},Agv:function(
aColumn,A2){if(this.K&&this.K.Agv)return this.K.Agv.apply(this,arguments);else return C.
ITable.Agv.apply(this,arguments);},Hd:function(){if(this.K&&this.K.Hd)return this.
K.Hd.apply(this,arguments);else return C.ITable.Hd.apply(this,arguments);},Ajp:function(
aColumn,A2){if(this.K&&this.K.Ajp)return this.K.Ajp.apply(this,arguments);else return C.
ITable.Ajp.apply(this,arguments);},AdW:function(aColumn,A2){if(this.K&&this.K.AdW
)return this.K.AdW.apply(this,arguments);else return C.ITable.AdW.apply(this,arguments
);},HA:function(){if(this.K&&this.K.HA)return this.K.HA.apply(this,arguments);else
return C.ITable.HA.apply(this,arguments);},Aa2:function(){if(this.K&&this.K.Aa2)
return this.K.Aa2.apply(this,arguments);else return C.ITable.Aa2.apply(this,arguments
);},Qx:function(){if(this.K&&this.K.Qx)return this.K.Qx.apply(this,arguments);else
return C.ITable.Qx.apply(this,arguments);},_Init:function(aArg){C.ITable._Init.call(
this,aArg);this.__proto__=C.Table;var Lr=this._variants();if(Lr){this.K={};Lr._Init.
call(this,aArg);}},_Done:function(){if(this.K)this.K._Done.call(this);this.__proto__=
C.ITable;C.ITable._Done.call(this);},_ReInit:function(){C.ITable._ReInit.call(this
);if(this.K)this.K._ReInit.call(this);},_Mark:function(D){C.ITable._Mark.call(this
,D);if(this.K)this.K._Mark(D);},_variants:function(){return A.acr.Table._variants(
);},K:null,_className:"Device::Table"};C.TableId={Animal:0,Rating:1,Undefined:2,
AnimalGroup:3,CalfDeregistrations:4};C.ScanState={Idle:0,Progress:1,IdScanned:2,
NotFound:3,Error:4,LAST:5};C.RatedAttribute={None:0,Feed:1,Appearance:2,Respiratory:
3,Faeces:4};C.ConverterClass={MZ:null,AkC:function(Aol){var Bby;var AtN=this.AT8(
Aol/100,0,A._GetAutoObject(C.Device).TemperatureUnit);Bby=A.abk(AtN,0,1);return Bby;
},A_r:function(Nh){if(Nh<=0)return 0;else if(Nh<=1)return 5;else if(Nh<=2)return 3;
else if(Nh<=4)return 2;else if(Nh<=6)return 1;else if(Nh<=8)return 4;else return 0;
},AdA:function(Nh){var a=0;switch(Nh){case 3:a=2;break;case 2:a=4;break;case 1:a=
6;break;case 0:a=0;break;case 4:a=8;break;case 5:a=1;break;default:A.ab5("%s",N6
);}return a;},Ar6:function(Ee,Rf){var Nk=A._GetAutoObject(C.Converter).Ai1(Rf,Ee
);switch(Nk){case 3:return 1;case 2:return 2;case 1:return 3;case 0:return 4;default:
throw new Error(PY+Nk.toFixed());}},Ahq:function(){var B;var D1=A._NewObject(A.Core.
Bt,0).Initialize(A._GetAutoObject(C.Helper).DF());D1.Ana(0);D1.And(0);D1.Ang(0);
return((B=(D1.JI()|0))<0)?B+0x100000000:B;},Bf8:function(AsL){var Di;switch(AsL){
case 36:Di=MC;break;case 40:Di=SV;break;case 56:Di=UE;break;case 70:Di=ZD;break;
case 100:Di=WG;break;case 124:Di=IK;break;case 156:Di=UF;break;case 158:Di=ZE;break;
case 191:Di=WH;break;case 196:Di=ZF;break;case 203:Di=WI;break;case 208:Di=ZG;break;
case 233:Di=ZH;break;case 246:Di=UG;break;case 250:Di=WJ;break;case 276:Di=Q9;break;
case 300:Di=ZI;break;case 348:Di=OU;break;case 372:Di=Q_;break;case 380:Di=WK;break;
case 392:Di=WM;break;case 428:Di=WN;break;case 440:Di=WO;break;case 442:Di=ZJ;break;
case 470:Di=WQ;break;case 528:Di=WR;break;case 578:Di=SW;break;case 616:Di=ZK;break;
case 620:Di=ZL;break;case 642:Di=Acp;break;case 643:Di=UH;break;case 703:Di=ZM;break;
case 705:Di=Afb;break;case 724:Di=ZN;break;case 752:Di=WS;break;case 756:Di=ZO;break;
case 792:Di=ZP;break;case 804:Di=Afc;break;case 826:Di=JQ;break;case 840:Di=Acq;
break;default:Di=AsL.toFixed();}return Di;},AkK:function(MH){var Z5;if((MH<10000
)&&(A._GetAutoObject(C.Device).OD===2))Z5=2;else if((MH<100000)&&!!A._GetAutoObject(
C.Device).OD)Z5=1;else Z5=0;return this.ST(MH,Z5,false);},Axj:function(MH,Z5){return this.
ST(MH,Z5,false);},ST:function(MH,Z5,BxW){var B;var Ala=A.jV;switch(A._GetAutoObject(
C.Device).MassUnit){case 0:if(BxW)Ala=A.abl(MH,0,0);else{var BcS=MH<0;if(Z5<3)MH=
MH+(((BcS?-1:1)*5)*(Math.pow(10,2-Z5)|0));Ala=(((((B=MH)>-2147483648)?Math.abs(B
):B)/1000)|0).toFixed();if(Z5>0)Ala=Ala+(Lq+A.abV(A.abl((((B=MH)>-2147483648)?Math.
abs(B):B)%1000,3,10),Z5));if(BcS)Ala=Ahw+Ala;}break;case 1:Ala=A.abk(MH/453.592,
0,Z5);break;default:A.ab5("%s%s",AnO,A._GetAutoObject(C.Device).MassUnit.toFixed(
));}return Ala;},SM:function(I_){var A3e=I_.toFixed();var BeY=A3e.length;if((BeY>=
14)&&(BeY<=15)){var A0$=this.Aw$(I_);var BwN=A._GetAutoObject(C.Converter).Bf8(A0$
);A3e=(BwN+N7)+A.abm(A._GetAutoObject(C.Helper).TD(I_,0,12),12,10);}return A3e;}
,Amt:function(LY){switch(LY){case 0:return A.aaL(A.ach.APL);case 1:return A.aaL(
A.ach.ACU);case 2:return A.aaL(A.ach.ACZ);default:{A.ab5("%s%e",WT,LY);return null;
}}},A3T:function(Bwk){switch(Bwk){case 0:return A.aaL(A.ach.Au3);case 1:return A.
aaL(A.ach.ACQ);case 2:return A.aaL(A.ach.APF);default:throw new Error(AnP);}},Af$:
function(AIx){switch(AIx){case 0:return A.aaL(A.ach.AjC);case 2:return A.aaL(A.ach.
AmB);case 1:return A.aaL(A.ach.Abc);case 3:switch(A._GetAutoObject(C.Device).MassUnit
){case 0:return A.aaL(A.ach.Ava);case 1:return A.aaL(A.ach.Avb);default:throw new
Error(Ahx+A._GetAutoObject(C.Device).MassUnit.toFixed());}break;case 4:return A.
aaL(A.ach.AO6);case 5:return A.aaL(A.ach.AO7);case 6:return A.aaL(A.ach.AO$);case
7:return A.aaL(A.ach.AOu);case 8:return A.aaL(A.ach.AOB);case 9:return A.aaL(A.ach.
ACs);case 10:return A.aaL(A.ach.AOA);case 11:return A.aaL(A.ach.AOC);default:throw new
Error(Ahy+AIx.toFixed());}},Bfy:function(Ayo){switch(Ayo){case 0:return A.aaL(A.
ach.ACX);case 3:return A.aaL(A.ach.AmB);case 1:return A.aaL(A.ach.Abc);case 2:return A.
_GetAutoObject(A.acj.DN).BbW();default:throw new Error(Ahy+Ayo.toFixed());}},Bf7:
function(AsL){switch(AsL){case 977:return Acr;case 978:return UI;case 980:return AnQ;
case 981:return AnR;case 982:return AnS;case 983:return AnT;case 984:return Afd;
case 985:return AnU;default:return A.aaR(A.acf.Unknown);}},Bgo:function(AcE){switch(
AcE){case 1:return 0x278A;case 2:return 0x278B;case 3:return 0x278C;case 4:return 0x278D;
case 5:return 0x278E;case 6:return 0x278F;case 7:return 0x2790;case 8:return 0x2791;
case 9:return 0x2792;case 10:return 0x2793;default:return 0x20;}},Boa:function(I_
){if(!I_)return-1;return(I_%100000000)|0;},BgT:function(Aok,aFilter){var B;if(!aFilter
)return Afe;var AoO=Ash;var Az=aFilter.ANZ();while(!!Az){AoO=AoO+A._GetAutoObject(
C.Helper).A5I(Aok,Az);Az=aFilter.AN4(Az);if(!!Az)AoO=AoO+OV;}AoO=AoO+SX;return AoO;
},A6m:function(BaE){var ME=0;switch(BaE){case 14:ME=2;break;case 13:ME=4;break;case
6:ME=36;break;case 11:ME=9;break;case 0:ME=39;break;case 10:ME=26;break;case 12:
ME=12;break;case 5:ME=14;break;case 3:ME=15;break;case 1:ME=10;break;case 8:ME=16;
break;case 4:ME=20;break;case 15:ME=27;break;case 9:ME=31;break;case 2:ME=13;break;
case 7:ME=35;break;case 16:ME=37;break;default:A.ab5("%s%e",Axl,BaE);}return ME;
},Bfx:function(Ayo){switch(Ayo){case 0:return 1;case 3:return 0;case 1:return 2;
case 2:switch(A._GetAutoObject(C.Device).MassUnit){case 0:return 3;case 1:return 4;
default:throw new Error(Ahx+A._GetAutoObject(C.Device).MassUnit.toFixed());}break;
default:throw new Error(Ahy+Ayo.toFixed());}},Bfz:function(Aou){switch(Aou){case
0:return A.aaL(A.ach.AO3);case 1:return A.aaL(A.ach.ACX);case 9:return A.aaL(A.ach.
APb);case 4:return A.aaL(A.ach.AFB);case 6:return A.aaL(A.ach.ArJ);case 8:return A.
aaL(A.ach.AuZ);case 2:return A.aaL(A.ach.Abc);case 3:return A.aaL(A.ach.AmB);case
10:switch(A._GetAutoObject(C.Device).MassUnit){case 0:return A.aaL(A.ach.Ava);case
1:return A.aaL(A.ach.Avb);default:throw new Error(Ahx+A._GetAutoObject(C.Device).
MassUnit.toFixed());}break;case 7:case 5:case 11:case 12:case 13:case 14:case 18:
case 15:case 16:case 17:return A.aaL(A.aci.TB);default:throw new Error(SY+Aou.toFixed(
));}},AMM:function(AsL){switch(AsL){case 40:return 1;case 56:return 3;case 70:return 2;
case 100:return 4;case 124:return 5;case 156:return 7;case 158:return 36;case 191:
return 17;case 196:return 8;case 203:return 9;case 208:return 11;case 233:return 12;
case 246:return 14;case 250:return 15;case 276:return 10;case 300:return 16;case
348:return 18;case 372:return 19;case 380:return 20;case 392:return 21;case 428:
return 24;case 440:return 22;case 442:return 23;case 470:return 25;case 528:return 26;
case 578:return 27;case 616:return 28;case 620:return 29;case 642:return 30;case
643:return 31;case 703:return 34;case 705:return 33;case 724:return 13;case 752:
return 32;case 756:return 6;case 792:return 35;case 804:return 37;case 826:return 38;
case 840:return 39;default:return 0;}},Acf:function(I_){var A0$=this.Aw$(I_);return this.
AMM(A0$);},Aw$:function(I_){return A._GetAutoObject(C.Helper).TD(I_,12,3)|0;},A_K:
function(Aop,Ee){if(Aop<A._GetAutoObject(C.Helper).ACo(Ee))return 1;else if(Aop<
A._GetAutoObject(C.Helper).ACn(Ee))return 2;else return 3;},ACb:function(Bv0){switch(
Bv0){case 1:return 1;case 2:return 2;case 3:return 3;case 4:return 4;case 5:return 5;
case 6:return 6;case 7:return 7;case 8:return 8;case 9:return 9;case 10:return 10;
case 11:return 11;case 12:return 12;case 13:return 13;case 14:return 14;case 15:
return 15;case 16:return 16;default:return 0;}},AT8:function(A2,AIq,AIr){if(AIq===
AIr)return A2;if(!AIq&&(AIr===1)){var result=((A2*9)/5)+32;return result;}if((AIq===
1)&&!AIr){var result=((A2-32)*5)/9;return result;}throw new Error(((Asi+AIq.toFixed(
))+Axm)+AIr.toFixed());},A5r:function(EF){switch(EF){case 0:return Axn;case 1:return A.
jV;case 2:return Axo;case 3:return AnV;case 4:return A.aaR(A.acf.Contains);case 5:
return Axp;default:{A.ab5("%s%e",Asj,EF);return A.jV;}}},A4r:function(AcD){return this.
MZ.AdV(AcD);},BhB:function(AcD){return this.MZ.Ame(AcD);},BfR:function(AsK){var AzJ=
0;switch(AsK){case 0:AzJ=1;break;case 1:AzJ=2;break;case 2:AzJ=3;break;case 3:AzJ=
4;break;default:A.ab5("%s%e",JR,AsK);}return AzJ;},Ai1:function(AZA,Ee){if(AZA>=
A._GetAutoObject(C.Helper).A5D(Ee))return 3;else if(AZA>=A._GetAutoObject(C.Helper
).AuQ(Ee))return 2;else if(AZA<A._GetAutoObject(C.Device).Zz)return 0;else return 1;
},Ap3:function(ME){var BM=-1;switch(ME){case 0:BM=0;break;case 1:BM=40;break;case
2:BM=70;break;case 3:BM=56;break;case 4:BM=100;break;case 5:BM=124;break;case 6:
BM=756;break;case 7:BM=156;break;case 8:BM=196;break;case 9:BM=203;break;case 10:
BM=276;break;case 11:BM=208;break;case 12:BM=233;break;case 13:BM=724;break;case
14:BM=246;break;case 15:BM=250;break;case 16:BM=300;break;case 17:BM=191;break;case
18:BM=348;break;case 19:BM=372;break;case 20:BM=380;break;case 21:BM=392;break;case
22:BM=440;break;case 23:BM=442;break;case 24:BM=428;break;case 25:BM=470;break;case
26:BM=528;break;case 27:BM=578;break;case 28:BM=616;break;case 29:BM=620;break;case
30:BM=642;break;case 31:BM=643;break;case 32:BM=752;break;case 33:BM=705;break;case
34:BM=703;break;case 35:BM=792;break;case 36:BM=158;break;case 37:BM=804;break;case
38:BM=826;break;case 39:BM=840;break;default:throw new Error(Axq+ME.toFixed());}
return BM;},Boe:function(I_){return A._GetAutoObject(C.Helper).TD(I_,8,2)|0;},Bod:
function(I_){var BxS=this.Boe(I_);return this.ACb(BxS);},_Init:function(aArg){C.
MZ._Init.call(this.MZ={I:this},0);this.__proto__=C.ConverterClass;A.h7++;},_Done:
function(){this.__proto__=null;this.MZ._Done();A.h7--;},_ReInit:function(){this.
MZ._ReInit();},_Mark:function(D){var B;if((B=this.MZ)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:
null,_className:"Device::ConverterClass"};C.Converter={_Init:function(){C.ConverterClass.
_Init.call(this,0);},_ReInit:function(){},_variants:function(){return this;},_this:
null};C.MinLowTemperature=3000;C.MaxHighTemperature=5000;C.TemperatureStep=10;C.
RatingTableFields={Id:0,AnimalId:1,FeedAssessment:2,AppearanceAssessment:3,RespiratoryAssessment:
4,FaecesAssessment:5,Timestamp:6,Temperature:7,BodyWeight:8,RatingTemperature:9};
C.Animal={TransponderId:0,NaisId:0,NaisIdMother:0,Id:0,VisualId:0,GroupId:0,DateOfBirth:
0,LocationId:0,LastTemperature:0,TimestampLastControl:0,TimestampLastWatch:0,TimestampExpirationFeverAlarm:
0,TimestampAlarm:0,LastBodyWeight:0,TimestampLastWeighing:0,FirstBodyWeight:0,TimestampFirstWeighing:
0,FirstBodyWeightId:0,DateOfLastCalving:0,LactationNumber:0,TimestampLastTemperature:
0,TimestampLastAssessment:0,ReasonOfLeaving:0,WhereAbouts:0,EaseOfDelivery:0,Breed:
0,AnimalType:0,LastRatingTemperature:0,WorstAssessment:0,BirthType:0,Gender:2,IsDry:
false,IsRegistrationNoticePending:false,IsPerished:false,IsFever:false,IsWatch:false
,IsRegistered:false,IsControl:false,IsAlarm:false,EB:function(Ac,AG){var Hv=C.Row.
EB.call(this,Ac,AG);if(Hv&&!!AG){this.OnSetId(AG.CD(Ac,0));this.Ud(AG.CD(Ac,1));
this.AbJ(AG.CD(Ac,2));this.Anc(AG.CD(Ac,3));this.Sp(AG.Hz(Ac,4));this.JJ(AG.AN1(
Ac,7));this.Aj7(AG.Bg$(Ac,6));this.DT(AG.Amu(Ac,14));this.NU(AG.LM(Ac,22));this.
Nb(AG.LM(Ac,26));this.Awx(AG.IV(Ac,13));this.Aez(AG.HW(Ac,8));this.Awq(AG.Hz(Ac,
15));this.ASG(AG.Hz(Ac,31));this.AeE(AG.A5Q(Ac,5));this.ASi(AG.IV(Ac,17));this.Ua(
AG.HW(Ac,11));this.ASF(AG.Hz(Ac,16));this.ASI(AG.Hz(Ac,30));this.Akd(AG.HW(Ac,9)
);this.AeC(AG.HW(Ac,12));this.ASH(AG.Hz(Ac,20));this.Aws(AG.Hz(Ac,21));this.Ag5(
AG.HW(Ac,10));this.Av6(AG.HW(Ac,27));this.AEx(AG.ACi(Ac,18));this.AE1(AG.Hz(Ac,19
));this.Av4(AG.ACi(Ac,23));this.Awr(AG.Hz(Ac,24));this.ASa(AG.CD(Ac,25));this.AvV(
AG.Hz(Ac,28));this.Av7(AG.CD(Ac,29));this.Ari(AG.HW(Ac,38));this.NR(AG.Bha(Ac,32
));this.Aj_(AG.Bhf(Ac,33));this.Ane(AG.LM(Ac,35));this.Nc(AG.AN_(Ac,34));this.AeB(
AG.HW(Ac,37));this.AER(AG.Bho(Ac,36));}return Hv;},Cl:function(AG){var Hv=C.Row.
Cl.call(this,AG);if(Hv&&!!AG){var Jd=AG.Ot();if(Jd<=0)A.ab5("%s",Acs);else{var Azm=
this.AmG();if(Azm)this.CI=AG.Yj();else AG.He(this.CI,0,this.Id);AG.He(this.CI,1,
this.VisualId);AG.He(this.CI,2,this.GroupId);AG.He(this.CI,3,this.LocationId);AG.
Ab2(this.CI,4,this.DateOfBirth);AG.Bm3(this.CI,7,this.Gender);AG.BmZ(this.CI,6,this.
BirthType);AG.BmX(this.CI,14,this.AnimalType);AG.Sz(this.CI,22,this.TransponderId
);AG.Sz(this.CI,26,this.NaisId);AG.Akt(this.CI,13,this.WorstAssessment);AG.Mw(this.
CI,8,this.IsAlarm);AG.Ab2(this.CI,15,this.TimestampAlarm);AG.Mw(this.CI,11,this.
IsFever);AG.Ab2(this.CI,16,this.TimestampExpirationFeverAlarm);AG.Mw(this.CI,9,this.
IsControl);AG.Mw(this.CI,12,this.IsWatch);AG.Ab2(this.CI,20,this.TimestampLastControl
);AG.Ab2(this.CI,21,this.TimestampLastWatch);AG.Mw(this.CI,10,this.IsRegistered);
AG.Mw(this.CI,27,this.IsPerished);AG.Ab2(this.CI,28,this.DateOfLastCalving);AG.He(
this.CI,29,this.LactationNumber);AG.Mw(this.CI,38,this.IsDry);AG.Bm1(this.CI,32,
this.Breed);AG.Bm2(this.CI,33,this.EaseOfDelivery);AG.Sz(this.CI,35,this.NaisIdMother
);AG.Bm9(this.CI,34,this.WhereAbouts);AG.Mw(this.CI,37,this.IsRegistrationNoticePending
);AG.Bm7(this.CI,36,this.ReasonOfLeaving);Hv=AG.Ov(Jd);if(Azm)this.OnSetId(AG.Aa2(
));}}return Hv;},Gf:function(){C.Row.Gf.call(this);this.OnSetId(-1);this.Ag5(true
);},Hd:function(){C.Row.Hd.call(this);this.OnSetId(0);this.Ud(0);this.AbJ(0);this.
Anc(0);this.Sp(0);this.JJ(A._GetAutoObject(C.Device).Gender);this.Aj7(0);this.DT(
A._GetAutoObject(C.Device).AnimalType);this.NU(0);this.Nb(0);this.Awx(0);this.Aez(
false);this.Awq(0);this.ASG(0);this.AeE(0);this.ASi(0);this.Ua(false);this.ASI(0
);this.ASF(0);this.Akd(false);this.AeC(false);this.ASH(0);this.Aws(0);this.Ag5(false
);this.Av6(false);this.AEx(0);this.AE1(0);this.Av4(0);this.Awr(0);this.ASa(-1);this.
AvV(0);this.Av7(0);this.Ari(false);this.NR(0);this.Aj_(0);this.Ane(0);this.Nc(0);
this.AeB(false);this.AER(0);},OnSetId:function(E){if(this.Id===E)return;this.Id=
E;A.abo([this,this.QQ,this.OnSetId],0);},Ud:function(E){if(this.VisualId===E)return;
this.VisualId=E;A.abo([this,this.Aq0,this.Ud],0);},AbJ:function(E){if(this.GroupId===
E)return;this.GroupId=E;A.abo([this,this.Bjd,this.AbJ],0);},Sp:function(E){if(this.
DateOfBirth===E)return;this.DateOfBirth=E;A.abo([this,this.Avy,this.Sp],0);},JJ:
function(E){if(this.Gender===E)return;this.Gender=E;A.abo([this,this.Wc,this.JJ]
,0);},Aj7:function(E){if(this.BirthType===E)return;this.BirthType=E;A.abo([this,
this.ARy,this.Aj7],0);},Anc:function(E){if(this.LocationId===E)return;this.LocationId=
E;A.abo([this,this.A7J,this.Anc],0);},AeE:function(E){if(this.LastTemperature===
E)return;this.LastTemperature=E;A.abo([this,this.A7I,this.AeE],0);},Aez:function(
E){if(this.IsAlarm===E)return;this.IsAlarm=E;A.abo([this,this.A7D,this.Aez],0);}
,Akd:function(E){if(this.IsControl===E)return;this.IsControl=E;A.abo([this,this.
Bjg,this.Akd],0);},Ag5:function(E){if(this.IsRegistered===E)return;this.IsRegistered=
E;A.abo([this,this.Bjj,this.Ag5],0);},AeC:function(E){if(this.IsWatch===E)return;
this.IsWatch=E;A.abo([this,this.A7F,this.AeC],0);},Awx:function(E){if(this.WorstAssessment===
E)return;this.WorstAssessment=E;A.abo([this,this.A8g,this.Awx],0);},Ua:function(
E){if(this.IsFever===E)return;this.IsFever=E;A.abo([this,this.A7E,this.Ua],0);},
ASH:function(E){if(this.TimestampLastControl===E)return;this.TimestampLastControl=
E;A.abo([this,this.BjI,this.ASH],0);},Aws:function(E){if(this.TimestampLastWatch===
E)return;this.TimestampLastWatch=E;A.abo([this,this.BjK,this.Aws],0);},ASi:function(
E){if(this.LastRatingTemperature===E)return;this.LastRatingTemperature=E;A.abo([
this,this.Bjm,this.ASi],0);},ASF:function(E){if(this.TimestampExpirationFeverAlarm===
E)return;this.TimestampExpirationFeverAlarm=E;A.abo([this,this.BjG,this.ASF],0);
},Awq:function(E){if(this.TimestampAlarm===E)return;this.TimestampAlarm=E;A.abo([
this,this.BjF,this.Awq],0);},DT:function(E){if(this.AnimalType===E)return;this.AnimalType=
E;A.abo([this,this.PG,this.DT],0);},AEx:function(E){if(this.LastBodyWeight===E)return;
this.LastBodyWeight=E;A.abo([this,this.A7H,this.AEx],0);},AE1:function(E){if(this.
TimestampLastWeighing===E)return;this.TimestampLastWeighing=E;A.abo([this,this.A74
,this.AE1],0);},NU:function(E){if(this.TransponderId===E)return;this.TransponderId=
E;A.abo([this,this.Aj3,this.NU],0);},Rz:function(){return A._GetAutoObject(C.Helper
).ML(this.DateOfBirth,A._GetAutoObject(C.Helper).DF());},Av4:function(E){if(this.
FirstBodyWeight===E)return;this.FirstBodyWeight=E;A.abo([this,this.ARE,this.Av4]
,0);},Awr:function(E){if(this.TimestampFirstWeighing===E)return;this.TimestampFirstWeighing=
E;A.abo([this,this.ARV,this.Awr],0);},AqE:function(){var S7=A._NewObject(A.Core.
Bt,0);S7.Initialize(this.DateOfBirth);var A0Y=A._NewObject(A.Core.Bt,0);A0Y.Initialize(
this.TimestampFirstWeighing);if(((S7.Year===A0Y.Year)&&(S7.AbB()===A0Y.AbB()))&&(
this.FirstBodyWeight>0))return true;else return false;},Ahv:function(AIk){var Aad;
var AtS;if(this.TimestampLastWeighing>0){AtS=this.TimestampLastWeighing;Aad=this.
LastBodyWeight;}else{AtS=this.DateOfBirth;Aad=A._GetAutoObject(C.Helper).Aa1(this.
AnimalType);}return A._GetAutoObject(C.Helper).Ahv(Aad,AtS,AIk,this.AnimalType);
},ASa:function(E){if(this.FirstBodyWeightId===E)return;this.FirstBodyWeightId=E;
A.abo([this,this.Bjb,this.ASa],0);},Ans:function(Ba0){this.Aez(Ba0);if(Ba0){if(!
this.TimestampAlarm)this.Awq(A._GetAutoObject(C.Helper).DF());}else this.Awq(0);
},Nb:function(E){if(this.NaisId===E)return;this.NaisId=E;A.abo([this,this.Am4,this.
Nb],0);},AFP:function(BaW){this.AeC(BaW);if(BaW){if(!this.TimestampLastWatch)this.
Aws(A._GetAutoObject(C.Helper).DF());}else this.Aws(0);},AvV:function(E){if(this.
DateOfLastCalving===E)return;this.DateOfLastCalving=E;A.abo([this,this.Bi3,this.
AvV],0);},Av7:function(E){if(this.LactationNumber===E)return;this.LactationNumber=
E;A.abo([this,this.Bjl,this.Av7],0);},Av6:function(E){if(this.IsPerished===E)return;
this.IsPerished=E;A.abo([this,this.Bji,this.Av6],0);},ASI:function(E){if(this.TimestampLastTemperature===
E)return;this.TimestampLastTemperature=E;A.abo([this,this.BjJ,this.ASI],0);},ASG:
function(E){if(this.TimestampLastAssessment===E)return;this.TimestampLastAssessment=
E;A.abo([this,this.BjH,this.ASG],0);},NR:function(E){if(this.Breed===E)return;this.
Breed=E;A.abo([this,this.Avw,this.NR],0);},Aj_:function(E){if(this.EaseOfDelivery===
E)return;this.EaseOfDelivery=E;A.abo([this,this.ARD,this.Aj_],0);},Nc:function(E
){if(this.WhereAbouts===E)return;this.WhereAbouts=E;A.abo([this,this.AvJ,this.Nc
],0);},Ane:function(E){if(this.NaisIdMother===E)return;this.NaisIdMother=E;A.abo([
this,this.ARL,this.Ane],0);},AER:function(E){if(this.ReasonOfLeaving===E)return;
this.ReasonOfLeaving=E;A.abo([this,this.Bjw,this.AER],0);},AeB:function(E){if(this.
IsRegistrationNoticePending===E)return;this.IsRegistrationNoticePending=E;A.abo([
this,this.Bjk,this.AeB],0);},Ari:function(E){if(this.IsDry===E)return;this.IsDry=
E;A.abo([this,this.Bjh,this.Ari],0);},QQ:function(){return this.Id;},Aq0:function(
){return this.VisualId;},Bjd:function(){return this.GroupId;},Avy:function(){return this.
DateOfBirth;},Wc:function(){return this.Gender;},ARy:function(){return this.BirthType;
},A7J:function(){return this.LocationId;},A7I:function(){return this.LastTemperature;
},A7D:function(){return this.IsAlarm;},Bjg:function(){return this.IsControl;},Bjj:
function(){return this.IsRegistered;},A7F:function(){return this.IsWatch;},A8g:function(
){return this.WorstAssessment;},A7E:function(){return this.IsFever;},BjI:function(
){return this.TimestampLastControl;},BjK:function(){return this.TimestampLastWatch;
},Bjm:function(){return this.LastRatingTemperature;},BjG:function(){return this.
TimestampExpirationFeverAlarm;},BjF:function(){return this.TimestampAlarm;},PG:function(
){return this.AnimalType;},A7H:function(){return this.LastBodyWeight;},A74:function(
){return this.TimestampLastWeighing;},Aj3:function(){return this.TransponderId;}
,ARE:function(){return this.FirstBodyWeight;},ARV:function(){return this.TimestampFirstWeighing;
},Bjb:function(){return this.FirstBodyWeightId;},Am4:function(){return this.NaisId;
},Bi3:function(){return this.DateOfLastCalving;},Bjl:function(){return this.LactationNumber;
},Bji:function(){return this.IsPerished;},BjJ:function(){return this.TimestampLastTemperature;
},BjH:function(){return this.TimestampLastAssessment;},Avw:function(){return this.
Breed;},ARD:function(){return this.EaseOfDelivery;},AvJ:function(){return this.WhereAbouts;
},ARL:function(){return this.NaisIdMother;},Bjw:function(){return this.ReasonOfLeaving;
},Bjk:function(){return this.IsRegistrationNoticePending;},Bjh:function(){return this.
IsDry;},_Init:function(aArg){C.Row._Init.call(this,aArg);this.__proto__=C.Animal;
this.TableId=0;},_className:"Device::Animal"};C.Row={CI:-1,TableId:2,EB:function(
Ac,AG){if(!AG){A.ab5("%s",(Axr+this.CI.toFixed())+AGy);return false;}else if(AG.
Id!==this.TableId)throw new Error(AGz);else if((Ac<0)||(Ac>=AG.Cb())){A.ab5("%s"
,(((AGA+this.CI.toFixed())+AGB)+AG.Cb().toFixed())+Axs);return false;}this.CI=Ac;
return true;},Cl:function(AG){if(!AG){A.ab5("%s",(Axr+this.CI.toFixed())+AGy);return false;
}else if(AG.Id!==this.TableId)throw new Error(AGz);else if(this.AmG()&&AG.Lc()){
A.ab5("%s",AUT+AG.HA().toFixed());return false;}else if(!this.AmG()&&((this.CI<0
)||(this.CI>=AG.Cb()))){A.ab5("%s",(((AGA+this.CI.toFixed())+AGB)+AG.Cb().toFixed(
))+Axs);return false;}return true;},Gf:function(){this.Hd();this.CI=-1;},AmG:function(
){return this.CI===-1;},Hd:function(){this.CI=-2;},Aqn:function(){return this.CI
!==-2;},A7S:function(){return this.CI;},A8_:function(E){this.CI=E;},_Init:function(
aArg){this.__proto__=C.Row;A.h7++;},_Done:function(){this.__proto__=null;A.h7--;
},_ReInit:function(){},_Mark:function(D){var B;if((B=this.I)&&(B._cycle!=D))B._Mark(
B._cycle=D);},I:null,_cycle:0,_observers:null,_className:"Device::Row"};C.Rating={
Temperature:0,Id:0,AnimalId:0,Timestamp:0,BodyWeight:0,RatingTemperature:0,Faeces:
0,Respiratory:0,Appearance:0,Feed:0,EB:function(Ac,AG){var Hv=C.Row.EB.call(this
,Ac,AG);if(Hv&&!!AG){this.OnSetId(AG.CD(Ac,0));this.OnSetAnimalId(AG.CD(Ac,1));this.
OnSetTimestamp(AG.Hz(Ac,6));this.OnSetFeed(AG.IV(Ac,2));this.OnSetAppearance(AG.
IV(Ac,3));this.OnSetRespiratory(AG.IV(Ac,4));this.OnSetFaeces(AG.IV(Ac,5));this.
OnSetTemperature(AG.A5Q(Ac,7));this.OnSetBodyWeight(AG.ACi(Ac,8));this.OnSetRatingTemperature(
AG.IV(Ac,9));}return Hv;},Cl:function(AG){if(this.K&&this.K.Cl)return this.K.Cl.
apply(this,arguments);else return C.Rating.A$v.apply(this,arguments);},A$v:function(
AG){var Hv=C.Row.Cl.call(this,AG);if((Hv&&!!AG)&&(AG.Id===1)){var Jd=AG.Ot();if(
Jd<=0)A.ab5("%s",Acs);else{var Azm=this.AmG();if(Azm)this.CI=AG.Yj();else AG.He(
this.CI,0,this.Id);AG.He(this.CI,1,this.AnimalId);AG.Ab2(this.CI,6,this.Timestamp
);AG.Akt(this.CI,2,this.Feed);AG.Akt(this.CI,3,this.Appearance);AG.Akt(this.CI,4
,this.Respiratory);AG.Akt(this.CI,5,this.Faeces);AG.A94(this.CI,7,this.Temperature
);AG.ATz(this.CI,8,this.BodyWeight);AG.Akt(this.CI,9,this.RatingTemperature);AG.
Ov(Jd);if(Azm)this.OnSetId(AG.Aa2());var Rh=A._GetAutoObject(C.Device).Ap;var Ac=
A._GetAutoObject(C.Device).Ap.K9(0,this.AnimalId);if(Ac>=0){var B6=A._NewObject(
C.Animal,0);B6.EB(Ac,Rh);if(this.Temperature>0)B6.Ua(A._GetAutoObject(C.Helper).
A6g(this));if((this.Temperature>0)&&A._GetAutoObject(C.Helper).AFv(this)){var Od=
A._GetAutoObject(C.Helper).AQh(this);B6.Akd(Od);B6.Ans(Od);}else if(this.Temperature>
0){var Od=(A._GetAutoObject(C.Helper).AQh(this)||(B6.WorstAssessment===2))||(B6.
WorstAssessment===1);B6.Akd(Od);B6.Ans(Od);}else{var Od=A._GetAutoObject(C.Helper
).AQh(this)||B6.IsFever;B6.Akd(Od);B6.Ans(Od);}B6.Cl(Rh);}}}return Hv;},Gf:function(
){C.Row.Gf.call(this);this.OnSetTimestamp(A._GetAutoObject(C.Helper).DF());this.
OnSetId(-1);},Hd:function(){C.Row.Hd.call(this);this.OnSetTimestamp(0);this.OnSetId(
0);this.OnSetAnimalId(0);this.OnSetFeed(0);this.OnSetAppearance(0);this.OnSetRespiratory(
0);this.OnSetFaeces(0);this.OnSetTemperature(0);this.OnSetBodyWeight(0);this.OnSetRatingTemperature(
0);},OnSetTemperature:function(E){if(this.Temperature===E)return;this.Temperature=
E;A.abo([this,this.BjE,this.OnSetTemperature],0);},OnSetId:function(E){if(this.Id===
E)return;this.Id=E;A.abo([this,this.QQ,this.OnSetId],0);},OnSetAnimalId:function(
E){if(this.AnimalId===E)return;this.AnimalId=E;A.abo([this,this.BiR,this.OnSetAnimalId
],0);},OnSetFeed:function(E){if(this.Feed===E)return;this.Feed=E;A.abo([this,this.
Bi_,this.OnSetFeed],0);},OnSetAppearance:function(E){if(this.Appearance===E)return;
this.Appearance=E;A.abo([this,this.BiS,this.OnSetAppearance],0);},OnSetRespiratory:
function(E){if(this.Respiratory===E)return;this.Respiratory=E;A.abo([this,this.Bjx
,this.OnSetRespiratory],0);},OnSetFaeces:function(E){if(this.Faeces===E)return;this.
Faeces=E;A.abo([this,this.Bi8,this.OnSetFaeces],0);},OnSetTimestamp:function(E){
if(this.Timestamp===E)return;this.Timestamp=E;A.abo([this,this.A73,this.OnSetTimestamp
],0);},BmY:function(Ni,A2){switch(Ni){case 2:this.OnSetAppearance(A2);break;case
1:this.OnSetFeed(A2);break;case 4:this.OnSetFaeces(A2);break;case 3:this.OnSetRespiratory(
A2);break;default:;}},Bg9:function(Ni){switch(Ni){case 2:return this.Appearance;
case 1:return this.Feed;case 4:return this.Faeces;case 3:return this.Respiratory;
default:return 0;}},OnSetRatingTemperature:function(E){if(this.RatingTemperature===
E)return;this.RatingTemperature=E;A.abo([this,this.Bjv,this.OnSetRatingTemperature
],0);},OnSetBodyWeight:function(E){if(this.BodyWeight===E)return;this.BodyWeight=
E;A.abo([this,this.BiW,this.OnSetBodyWeight],0);},BjE:function(){return this.Temperature;
},QQ:function(){return this.Id;},BiR:function(){return this.AnimalId;},Bi_:function(
){return this.Feed;},BiS:function(){return this.Appearance;},Bjx:function(){return this.
Respiratory;},Bi8:function(){return this.Faeces;},A73:function(){return this.Timestamp;
},Bjv:function(){return this.RatingTemperature;},BiW:function(){return this.BodyWeight;
},_Init:function(aArg){C.Row._Init.call(this,aArg);this.__proto__=C.Rating;this.
TableId=1;var Lr=this._variants();if(Lr){this.K={};Lr._Init.call(this,aArg);}},_Done:
function(){if(this.K)this.K._Done.call(this);this.__proto__=C.Row;C.Row._Done.call(
this);},_ReInit:function(){C.Row._ReInit.call(this);if(this.K)this.K._ReInit.call(
this);},_Mark:function(D){C.Row._Mark.call(this,D);if(this.K)this.K._Mark(D);},_variants:
function(){return A.acr.Rating._variants();},K:null,_className:"Device::Rating"};
C.HelperClass={Ul:null,Ahf:null,ATs:null,ATt:null,W:null,Au:null,Ky:null,SC:null
,Adz:null,Us:null,Ur:null,AdY:null,Ae_:null,Ae9:null,Ae8:null,Ae$:null,Agd:null,
AF4:0,Init:function(aArg){A.pe([this,this.AS1],this);},Akg:function(E){this.Ul=E;
A.abo([this,this.AqY,this.Akg],0);},AEU:function(E){this.Ahf=E;A.abo([this,this.
A7T,this.AEU],0);},ByZ:function(G){switch(A._GetAutoObject(C.Device).ScanState){
case 2:{var AtU=A._GetAutoObject(C.Device).OJ;if(!AtU)throw new Error(AUU);switch(
AtU.TransponderType){case 1:this.Akg(AtU);break;case 2:this.ASw(AtU);break;case 3:
this.AEU(AtU);break;case 4:this.ASx(AtU);break;case 0:break;default:throw new Error(
AUV);}}break;case 4:A._GetAutoObject(C.Device).A5(11,true,A.jV,2000,null);break;
case 3:A._GetAutoObject(C.Device).A5(12,true,A.jV,2000,null);break;case 0:case 1:
break;default:throw new Error(AUW);}},Akq:function(){this.Akg(null);this.ASw(null
);this.AEU(null);this.ASx(null);},AEZ:function(E){if(this.K&&this.K.AEZ)return this.
K.AEZ.apply(this,arguments);else return C.HelperClass.A$t.apply(this,arguments);
},A$t:function(E){A.abo([this,this.UJ,this.UK],0);A._GetAutoObject(C.Device).SetSystemTime(
E);},UK:function(Aq){this.AEZ(Aq);},DF:function(){if(this.K&&this.K.DF)return this.
K.DF.apply(this,arguments);else return C.HelperClass.A$p.apply(this,arguments);}
,A$p:function(){var B;return((B=(this.Au.BbU()|0))<0)?B+0x100000000:B;},UJ:function(
){return this.DF();},ArO:function(){A._GetAutoObject(C.Device).Sy(-1);this.W.Hd(
);A.we(this.W,0);},A6w:function(I_){if(!I_){A.ab5("%s%U",AUX,I_);return false;}var
Ba=A._GetAutoObject(C.Device).Ap.Agv(22,I_);return this.HF(Ba);},Amv:function(Aok
,AIj){switch(Aok){case 0:{var AoN=AIj;switch(AoN){case 14:return A.aaR(A.acf.Ae5
);case 6:return Ask;case 4:return A.aaR(A.acf.AdQ);case 28:return Axt;case 7:return A.
aaR(A.acf.AeX);case 2:return A.aaR(A.acf.O);case 0:return A.aaR(A.acf.GD);case 37:
return PZ;case 8:return A.aaR(A.acf.Alarm);case 9:return A.aaR(A.acf.ABx);case 38:
return A.aaR(A.acf.AM$);case 11:return A.aaR(A.acf.Fever);case 27:return Axu;case
10:return A.aaR(A.acf.BmC);case 12:return A.aaR(A.acf.Ary);case 29:return A.aaR(
A.acf.AQy);case 18:return A.aaR(A.acf.Weighing);case 17:return AUY;case 5:return A.
aaR(A.acf.Temperature);case 3:return AUZ;case 26:return A.aaR(A.acf.YY);case 35:
return A.aaR(A.acf.YY)+AU0;case 36:return AU1;case 15:return AGC;case 24:return AGD;
case 20:return Aff;case 30:return AnW;case 21:return AU2;case 19:return AGE;case
22:return A.aaR(A.acf.Transponder);case 1:return A.aaR(A.acf.Gx);case 34:return A.
aaR(A.acf.I7);case 13:return AkN;case 31:return AGF;default:{A.ab5("%s",AGG+AoN.
toFixed());return AGH+AoN.toFixed();}}}case 1:{var AoN=AIj;switch(AoN){case 1:return A.
aaR(A.acf.Animal);case 3:return A.aaR(A.acf.AFu);case 8:return A.aaR(A.acf.Ae7);
case 5:return A.aaR(A.acf.AFw);case 2:return A.aaR(A.acf.Feed);case 4:return A.aaR(
A.acf.AFx);case 7:return A.aaR(A.acf.Temperature);case 6:return A.aaR(A.acf.Bt);
default:{A.ab5("%s",AU3+AoN.toFixed());return AGH+AoN.toFixed();}}}default:A.ab5(
"%s",(AU4+Aok.toFixed())+AU5);}return A.jV;},A5I:function(Aok,AM){var result=A.jV;
if(!!AM){result=this.Amv(Aok,AM.ES);result=((result+N7)+A._GetAutoObject(C.Converter
).A5r(AM.Operator))+N7;if(!!(C.Int32FilterCriterion.isPrototypeOf(AM)?AM:null))result=
result+(C.Int32FilterCriterion.isPrototypeOf(AM)?AM:null).A6.toFixed();else if(!
!(C.UInt32FilterCriterion.isPrototypeOf(AM)?AM:null))result=result+(C.UInt32FilterCriterion.
isPrototypeOf(AM)?AM:null).A6.toFixed();else if(!!(C.StringFilterCriterion.isPrototypeOf(
AM)?AM:null))result=result+(C.StringFilterCriterion.isPrototypeOf(AM)?AM:null).A6;
else if(!!(C.BoolFilterCriterion.isPrototypeOf(AM)?AM:null)){if((C.BoolFilterCriterion.
isPrototypeOf(AM)?AM:null).A6)result=this.Amv(Aok,AM.ES);else result=A.jV;}else if(
!!(C.GenderFilterCriterion.isPrototypeOf(AM)?AM:null)){var Bxr=A._NewObject(C.GenderToString
,0);result=result+Bxr.Lo((C.GenderFilterCriterion.isPrototypeOf(AM)?AM:null).A6);
}else if(!!(C.AnimalTypeFilterCriterion.isPrototypeOf(AM)?AM:null)){var Bwm=A._NewObject(
C.AnimalTypeToString,0);result=result+Bwm.Lo((C.AnimalTypeFilterCriterion.isPrototypeOf(
AM)?AM:null).A6);}else if(!!(C.AssessmentFilterCriterion.isPrototypeOf(AM)?AM:null
)){var Bwp=A._NewObject(C.AssesmentToString,0);result=result+Bwp.Lo((C.AssessmentFilterCriterion.
isPrototypeOf(AM)?AM:null).A6);}else if(!!(C.UInt64FilterCriterion.isPrototypeOf(
AM)?AM:null))result=result+(C.UInt64FilterCriterion.isPrototypeOf(AM)?AM:null).A6.
toFixed();else if(!!(C.WhereAboutsFilterCriterion.isPrototypeOf(AM)?AM:null)){var
BAH=A._NewObject(C.WhereAboutsToString,0);result=result+BAH.Lo((C.WhereAboutsFilterCriterion.
isPrototypeOf(AM)?AM:null).A6);}else A.ab5("%s",Act);}return result;},Ne:function(
aString,BaJ,BvB){var result=A.jV;var Bei=false;var index=0;var BvD=BaJ.length;while(
!Bei){var A2z=aString.indexOf(BaJ,index);if(A2z!==-1){result=(result+A.abW(aString
,index,A2z-index))+BvB;index=A2z+BvD;}else{var BaN=aString.length;if(index<BaN)result=
result+A.ab2(aString,BaN-index);Bei=true;}}return result;},ASw:function(E){this.
ATs=E;A.abo([this,this.Bjy,this.ASw],0);},ASx:function(E){this.ATt=E;A.abo([this
,this.Bjz,this.ASx],0);},Bci:function(){return((A._GetAutoObject(C.Device).ScanState===
2)&&!!A._GetAutoObject(C.Device).OJ)&&(A._GetAutoObject(C.Device).OJ.TransponderType===
1);},AfJ:function(G){if(!this.W.AmG()&&!!this.W.Id)this.Bib(this.W.Id);},AuQ:function(
Ee){return A._GetAutoObject(C.Helper).Us.Get(Ee);},A5D:function(Ee){return A._GetAutoObject(
C.Helper).Ur.Get(Ee);},A5M:function(){var P=0;var min=32767;while(P<A._GetAutoObject(
C.Helper).Us.My){if(A._GetAutoObject(C.Helper).Us.Get(P)<min)min=A._GetAutoObject(
C.Helper).Us.Get(P);P=P+1;}return min;},AS1:function(G){A.zV([this,this.AfJ],A._GetAutoObject(
C.Device).Ap,0);},AQh:function(DU){if(!DU)return false;var BhN=(((this.Azi(DU.Faeces
)||this.Azi(DU.Feed))||this.Azi(DU.Appearance))||this.Azi(DU.Respiratory))||this.
Azi(DU.RatingTemperature);return BhN||this.A6g(DU);},Azi:function(Ban){return(Ban===
2)||(Ban===1);},A6g:function(DU){return!!DU&&(DU.Temperature>A._GetAutoObject(C.
Helper).AuQ(A._GetAutoObject(C.Helper).W.AnimalType));},HF:function(L1){var A1w=
false;if(L1>=0){if(L1!==this.W.CI)A._GetAutoObject(C.Device).Sy(L1);A1w=this.W.EB(
L1,A._GetAutoObject(C.Device).Ap);if(A1w)A.we(this.W,0);}else{A._GetAutoObject(C.
Device).Sy(-1);this.W.Hd();A.we(this.W,0);}return A1w;},Aho:function(AhI){var B;
return(((B=(this.Au.BbU()|0))<0)?B+0x100000000:B)-this.Aun(AhI);},Ar3:function(){
var B;A.pe([B=this.Ky,B.Anx],this);},Bz9:function(G){A._GetAutoObject(C.Device).
A5(16,false,AGI,0,null);A._GetAutoObject(C.Device).A5(5,true,A.jV,0,null);},Bl8:
function(G){var As=(C.PopupContext.isPrototypeOf(G)?G:null);if(!!As&&(As.PopupState===
5))this.Ar3();},BlW:function(E){if(this.AF4===E)return;this.AF4=E;A._GetAutoObject(
C.Device).A5(16,true,this.AF4.toFixed(),0,[this,this.Bl8]);},ML:function(Bvb,BvS
){var D1;var BeL=A._NewObject(A.Core.AnE,0);var Gv=A._NewObject(A.Core.Bt,0);var
K0=A._NewObject(A.Core.Bt,0);Gv.Initialize(Bvb);K0.Initialize(BvS);D1=K0.Bgn(Gv);
BeL.Initialize2(0,D1.ACK,D1.ADv,D1.AFI);if(Gv.J(BeL).GB===Gv.GB)return D1.J7;else
return D1.J7+1;},Bz$:function(G){A._GetAutoObject(C.Device).UpdateMeasureState(3
);if((A._GetAutoObject(C.Device).Km>=A._GetAutoObject(C.Device).Zz)&&(A._GetAutoObject(
C.Device).Km<=A._GetAutoObject(C.Helper).AuQ(A._GetAutoObject(C.Helper).W.AnimalType
))){var AIB=A._GetAutoObject(C.Helper).W.Id;var BzC=A._GetAutoObject(C.Device).Ap.
K9(0,AIB);A._GetAutoObject(C.Device).Ap.Mw(BzC,9,false);A._GetAutoObject(C.Device
).Ap.Bh(A._GetAutoObject(C.Device).Ap.Filter);}},AKf:function(G){var BfC=A._GetAutoObject(
C.Helper).AuQ(A._GetAutoObject(C.Helper).W.AnimalType);var Bfw=A._GetAutoObject(
C.Helper).A5D(A._GetAutoObject(C.Helper).W.AnimalType);var AtM=A.abz(BfC-100,Bfw+
100);this.Bbz(AtM);},Aun:function(AhI){return AhI*86400;},AkG:function(Kt){var B;
if(!!Kt&&(Kt<(((B=Math.trunc(Math.pow(10,A._GetAutoObject(C.Device).Fy)))<0)?B+0x10000000000000000:
B)))return-1;return A._GetAutoObject(C.Helper).TD(Kt,A._GetAutoObject(C.Device).
Fy&0xFF,A._GetAutoObject(C.Device).FP&0xFF)|0;},AFv:function(DU){if(!DU)return false;
return((!!DU.Faeces||!!DU.Feed)||!!DU.Appearance)||!!DU.Respiratory;},Ahv:function(
AZM,BaP,AIk,Ee){var B;var App;if((AZM<650000)&&(BaP<this.DF())){var Bba=this.Agd.
AuS(Ee);var Ba$=0;if(Bba>=0)Ba$=this.Ae8.Get(Bba);App=AZM+(this.ML(BaP,this.DF()
)*Ba$);if(AIk>0){var A0G=this.Az$(AIk);App=(Math.trunc(((((B=App)<0)?B+0x10000000000000000:
B)+Math.trunc(A0G/2))/A0G)*A0G)|0;}if(App>650000)App=650000;}else App=AZM;return App;
},ACp:function(DU){var ApM=A._GetAutoObject(C.Converter).AdA(DU.Faeces);if(ApM<A.
_GetAutoObject(C.Converter).AdA(DU.Feed))ApM=A._GetAutoObject(C.Converter).AdA(DU.
Feed);if(ApM<A._GetAutoObject(C.Converter).AdA(DU.Appearance))ApM=A._GetAutoObject(
C.Converter).AdA(DU.Appearance);if(ApM<A._GetAutoObject(C.Converter).AdA(DU.Respiratory
))ApM=A._GetAutoObject(C.Converter).AdA(DU.Respiratory);return A._GetAutoObject(
C.Converter).A_r(ApM);},AwP:function(DU,Nh){if(!!DU){DU.OnSetFaeces(Nh);DU.OnSetFeed(
Nh);DU.OnSetAppearance(Nh);DU.OnSetRespiratory(Nh);}},Bg7:function(AG,AIp,AcK,W4
,Afj){if(!AG)throw new Error(Asl);var A$=A._NewObject(C.Filter,0);var Apb=AG.Filter;
var N_=A._NewObject(C.Int32FilterCriterion,0);N_.Operator=0;N_.ES=1;N_.A6=AcK;A$.
CY(N_);if(W4>0){var Om=A._NewObject(C.UInt32FilterCriterion,0);Om.Operator=2;Om.
ES=6;Om.A6=W4;A$.CY(Om);}if(Afj>0){var Oc=A._NewObject(C.UInt32FilterCriterion,0
);Oc.Operator=3;Oc.ES=6;Oc.A6=Afj;A$.CY(Oc);}AG.Bh(A$);var L2=A._NewObject(C.Int32ArrayWrapper
,0);L2.Y$(6);var P;for(P=0;P<L2.My;P=P+1)L2.Set(P,0);var UQ;for(P=0;P<AG.Cb();P=
P+1){UQ=AG.IV(P,AIp);L2.Set(UQ,L2.Get(UQ)+1);}AG.Bh(Apb);return L2;},Zp:function(
AhI){var B;var Gv=A._NewObject(A.Core.Bt,0);var BeK=A._NewObject(A.Core.AnE,0);Gv.
Initialize(A._GetAutoObject(C.Converter).Ahq());BeK.Initialize2(AhI,0,0,0);Gv=Gv.
Bnq(BeK);return((B=(Gv.JI()|0))<0)?B+0x100000000:B;},A5E:function(AG,AcK,Afj,W4){
if(!AG)throw new Error(Asl);var A$=A._NewObject(C.Filter,0);var Apb=AG.Filter;var
N_=A._NewObject(C.Int32FilterCriterion,0);N_.Operator=0;N_.ES=1;N_.A6=AcK;A$.CY(
N_);if(W4>0){var Om=A._NewObject(C.UInt32FilterCriterion,0);Om.Operator=2;Om.ES=
6;Om.A6=W4;A$.CY(Om);}if(Afj>0){var Oc=A._NewObject(C.UInt32FilterCriterion,0);Oc.
Operator=3;Oc.ES=6;Oc.A6=Afj;A$.CY(Oc);}AG.Bh(A$);var L2=A._NewObject(C.Int32ArrayWrapper
,0);L2.Y$(6);var P;for(P=0;P<L2.My;P=P+1)L2.Set(P,0);var AoB=A._NewObject(C.Rating
,0);var A0y;for(P=0;P<AG.Cb();P=P+1){AoB.EB(P,AG);if(A._GetAutoObject(C.Helper).
AFv(AoB)){A0y=A._GetAutoObject(C.Helper).ACp(AoB);L2.Set(A0y,L2.Get(A0y)+1);}}AG.
Bh(Apb);return L2;},A06:function(AG,AcK,BwY){if(!AG)throw new Error(Asl);var A$=
A._NewObject(C.Filter,0);var Apb=AG.Filter;var N_=A._NewObject(C.Int32FilterCriterion
,0);N_.Operator=0;N_.ES=1;N_.A6=AcK;A$.CY(N_);var W4=A._GetAutoObject(C.Converter
).Ahq()+A._GetAutoObject(C.Helper).Aun(BwY);var Afj=W4+A._GetAutoObject(C.Helper
).Aun(1);var Om=A._NewObject(C.UInt32FilterCriterion,0);Om.Operator=2;Om.ES=6;Om.
A6=W4;A$.CY(Om);var Oc=A._NewObject(C.UInt32FilterCriterion,0);Oc.Operator=3;Oc.
ES=6;Oc.A6=Afj;A$.CY(Oc);AG.Bh(A$);var AoB=A._NewObject(C.Rating,0);var UQ;var LK=
0;var P;for(P=0;P<AG.Cb();P=P+1){AoB.EB(P,AG);if(A._GetAutoObject(C.Helper).AFv(
AoB)){UQ=A._GetAutoObject(C.Helper).ACp(AoB);if(A._GetAutoObject(C.Converter).AdA(
UQ)>A._GetAutoObject(C.Converter).AdA(LK))LK=UQ;}}AG.Bh(Apb);return LK;},AmF:function(
){if((A._GetAutoObject(C.Device).WeightRecordingScope===2)||(A._GetAutoObject(C.
Device).WeightRecordingScope===1))return true;else return false;},A6j:function(){
if((A._GetAutoObject(C.Device).WeightRecordingScope===2)||!A._GetAutoObject(C.Device
).WeightRecordingScope)return true;else return false;},Bg8:function(AG,AIp,AcK,W4
,Afj){if(!AG)throw new Error(Asl);var A$=A._NewObject(C.Filter,0);var Apb=AG.Filter;
var N_=A._NewObject(C.Int32FilterCriterion,0);N_.Operator=0;N_.ES=1;N_.A6=AcK;A$.
CY(N_);if(W4>0){var Om=A._NewObject(C.UInt32FilterCriterion,0);Om.Operator=2;Om.
ES=6;Om.A6=W4;A$.CY(Om);}if(Afj>0){var Oc=A._NewObject(C.UInt32FilterCriterion,0
);Oc.Operator=3;Oc.ES=6;Oc.A6=Afj;A$.CY(Oc);}AG.Bh(A$);var L2=A._NewObject(C.Int32ArrayWrapper
,0);L2.Y$(6);var P;for(P=0;P<L2.My;P=P+1)L2.Set(P,0);if(AG.Cb()>0){var UQ=AG.IV(
0,AIp);var Apu=AG.Hz(P,6);var Ad=A._NewObject(A.Core.Bt,0);Ad.Initialize(Apu);var
ApL=UQ;var AJi=A._NewObject(A.Core.Bt,0);AJi.Initialize(Ad.JI());for(P=1;P<AG.Cb(
);P=P+1){UQ=AG.IV(P,AIp);Apu=AG.Hz(P,6);Ad.Initialize(Apu);if((Ad.AbB()!==AJi.AbB(
))||(Ad.Year!==AJi.Year)){L2.Set(ApL,L2.Get(ApL)+1);AJi.Initialize(Ad.JI());ApL=
UQ;}else if(!!UQ&&(UQ<ApL))ApL=UQ;}L2.Set(ApL,L2.Get(ApL)+1);}AG.Bh(Apb);return L2;
},ApU:function(LX){var B;var Gv=A._NewObject(A.Core.Bt,0);Gv.Initialize(LX);Gv.Ana(
0);Gv.And(0);Gv.Ang(0);return((B=(Gv.JI()|0))<0)?B+0x100000000:B;},ANn:function(
LX){var B;LX=LX+86400;var Gv=A._NewObject(A.Core.Bt,0);Gv.Initialize(LX);Gv.Ana(
0);Gv.And(0);Gv.Ang(0);return((B=(Gv.JI()|0))<0)?B+0x100000000:B;},Bg_:function(
Bz7,Bw9,AlN,Alb){var Bbu=A._GetAutoObject(C.Helper).ML(Bz7,Bw9);if(Bbu>0)return((
Alb-AlN)/Bbu)|0;return 0;},Bn4:function(Bvc,BvT){var Gv=A._NewObject(A.Core.Bt,0
);var K0=A._NewObject(A.Core.Bt,0);Gv.Initialize(Bvc);K0.Initialize(BvT);return(
Gv.Year===K0.Year)&&(Gv.AbB()===K0.AbB());},A5K:function(){var A$=A._GetAutoObject(
C.Helper).Mk();var Bcw=A._NewObject(C.UInt32FilterCriterion,0);var Bv2=A._GetAutoObject(
C.Helper).Zp(A._GetAutoObject(C.Device).Aqi)-1;Bcw.Initialize(28,2,Bv2,true);A$.
CY(Bcw);var UM=A._NewObject(C.AnimalTypeFilterCriterion,0);UM.Initialize(14,0,1,
true);A$.CY(UM);if(A._GetAutoObject(C.Device).Ams){var Azy=A._NewObject(C.UInt32FilterCriterion
,0);var A1r=A._GetAutoObject(C.Helper).DF()-21600;Azy.Initialize(30,3,A1r,true);
A$.CY(Azy);}return A$;},BmH:function(){var Jd=A._GetAutoObject(C.Device).Ap.Ot();
if(Jd<=0)A.ab5("%s",Acs);else{A._GetAutoObject(C.Device).Ap.Hd();A._GetAutoObject(
C.Device).Ap.Ov(Jd);}Jd=A._GetAutoObject(C.Device).Af6.Ot();if(Jd<=0)A.ab5("%s",
Acs);else{A._GetAutoObject(C.Device).Af6.Hd();A._GetAutoObject(C.Device).Af6.Ov(
Jd);}Jd=A._GetAutoObject(C.Device).Br.Ot();if(Jd<=0)A.ab5("%s",Acs);else{A._GetAutoObject(
C.Device).Br.Hd();A._GetAutoObject(C.Device).Br.Ov(Jd);}Jd=A._GetAutoObject(C.Device
).Pe.Ot();if(Jd<=0)A.ab5("%s",Acs);else{A._GetAutoObject(C.Device).Pe.Hd();A._GetAutoObject(
C.Device).Pe.Ov(Jd);}},Bib:function(AcK){var Ba=A._GetAutoObject(C.Device).Ap.K9(
0,AcK);return this.HF(Ba);},AQm:function(I_){var AcW=A._GetAutoObject(C.Device).
Ap.AdW(22,I_);return AcW;},ACg:function(){var A$=A._GetAutoObject(C.Helper).Mk();
var AiP=A._NewObject(C.UInt64FilterCriterion,0);AiP.Initialize(22,0,0,true);A$.CY(
AiP);return A$;},ANY:function(Aou,Bw6,S1){var Z1=-1;switch(Aou){case 2:Z1=30;break;
case 3:Z1=31;break;case 10:Z1=19;break;default:A.ab5("%s%e",SY,Aou);}if(Z1<0)return null;
var AcY=A._NewObject(C.UInt32FilterCriterion,0);AcY.Initialize(Z1,3,A._GetAutoObject(
C.Helper).DF()-Bw6,S1);return AcY;},BmF:function(aFilter){var AM=aFilter.DX(30,3
);if(!!AM)aFilter.QW(AM);AM=aFilter.DX(31,3);if(!!AM)aFilter.QW(AM);AM=aFilter.DX(
19,3);if(!!AM)aFilter.QW(AM);},A0p:function(Aft,Ayd,AG){if(AG.Lc())return 5;if(Aft.
VisualId<=0)switch(Ayd){case 0:if(!Aft.NaisId)return 1;break;case 1:if(!Aft.TransponderId
)return 1;break;case 3:case 2:case 5:case 4:return 1;default:throw new Error(AGJ+
Ayd.toFixed());}if((!Aft.NaisId&&!Aft.TransponderId)&&A._GetAutoObject(C.Device).
Ap.Ajp(1,Aft.VisualId))return 2;if(!!Aft.NaisId&&A._GetAutoObject(C.Helper).AQk(
Aft.NaisId))return 3;if(!!Aft.TransponderId&&A._GetAutoObject(C.Helper).AQm(Aft.
TransponderId))return 4;return 0;},ApP:function(ED){ED.DT(A._GetAutoObject(C.Device
).AnimalType);ED.NR(A._GetAutoObject(C.Device).Breed);ED.Sp(A._GetAutoObject(C.Helper
).DF()-A._GetAutoObject(C.Helper).Aun(A._GetAutoObject(C.Device).Ai0));ED.JJ(A._GetAutoObject(
C.Device).Gender);ED.Nc(A._GetAutoObject(C.Device).WhereAbouts);},ALw:function(Rc
,ED){var GK=0;switch(Rc){case 0:GK=A._GetAutoObject(C.Helper).AkG(ED.NaisId);break;
case 1:GK=A._GetAutoObject(C.Helper).AkG(ED.TransponderId);break;case 3:GK=A._GetAutoObject(
C.Device).Aqs;break;case 2:GK=A._GetAutoObject(C.Device).Aqt;break;case 4:case 5:
GK=A._GetAutoObject(C.Device).AjB;break;default:throw new Error(AGK+Rc.toFixed()
);}return GK;},A_y:function(AkU,LY,Bu0,Bar,Bvw){var B;var Qf=null;var Xe=null;switch(
AkU){case 0:{Qf=[B=A._GetAutoObject(C.Device),B.ARK,B.AY_];Xe=[B=A._GetAutoObject(
C.Device),B.AvG,B.Ax9];}break;case 1:switch(LY){case 1:{Qf=[B=A._GetAutoObject(C.
Device),B.A7N,B.A$Y];Xe=[B=A._GetAutoObject(C.Device),B.AvE,B.Ax7];}break;case 0:{
Qf=[B=A._GetAutoObject(C.Device),B.A7O,B.A$Z];Xe=[B=A._GetAutoObject(C.Device),B.
AvF,B.Ax8];}break;case 2:{Qf=[B=A._GetAutoObject(C.Device),B.ARK,B.AY_];Xe=[B=A.
_GetAutoObject(C.Device),B.AvG,B.Ax9];}break;default:throw new Error(Axv+LY.toFixed(
));}break;default:throw new Error(AGL+AkU.toFixed());}if(!!Qf&&!!Xe){Qf[2].call(
Qf[0],Bu0);if((Xe[1].call(Xe[0])>0)&&(Bar<Bvw))Qf[2].call(Qf[0],Qf[1].call(Qf[0]
)+Xe[1].call(Xe[0]));else if((Xe[1].call(Xe[0])<0)&&(Bar>0))Qf[2].call(Qf[0],Qf[
1].call(Qf[0])+Xe[1].call(Xe[0]));return Qf[1].call(Qf[0]);}return 0;},AUq:function(
ED,AkU,Bu7){if(!ED||(Bu7===true))return;switch(AkU){case 0:ED.Nb(A._GetAutoObject(
C.Device).Avp);break;case 1:switch(ED.Gender){case 0:ED.Nb(A._GetAutoObject(C.Device
).ADy);break;case 1:ED.Nb(A._GetAutoObject(C.Device).ADx);break;case 2:ED.Nb(A._GetAutoObject(
C.Device).Avp);break;default:throw new Error(Axv+ED.Gender.toFixed());}break;default:
throw new Error(AGL+AkU.toFixed());}},BhO:function(Rc,ED){var result=false;switch(
Rc){case 0:result=!!ED.NaisId;break;case 1:result=!!ED.TransponderId;break;case 3:
case 2:case 4:case 5:result=false;break;default:throw new Error(AGK+Rc.toFixed()
);}return result;},AJw:function(ED,Bam,Ayd,AsX,Afm){switch(Bam){case 2:if(AsX<=0
)A._GetAutoObject(C.Device).A5(21,true,ED.VisualId.toFixed(),0,Afm);else A._GetAutoObject(
C.Device).A5(48,true,(ED.VisualId.toFixed()+Axw)+AsX.toFixed(),0,Afm);break;case
3:if(AsX<=0)A._GetAutoObject(C.Device).A5(21,true,A._GetAutoObject(C.Converter).
SM(ED.NaisId),0,Afm);else A._GetAutoObject(C.Device).A5(48,true,(A._GetAutoObject(
C.Converter).SM(ED.NaisId)+Axw)+AsX.toFixed(),0,Afm);break;case 4:if(AsX<=0)A._GetAutoObject(
C.Device).A5(25,true,A._GetAutoObject(C.Converter).SM(ED.TransponderId),0,Afm);else
A._GetAutoObject(C.Device).A5(47,true,(A._GetAutoObject(C.Converter).SM(ED.TransponderId
)+Axw)+AsX.toFixed(),0,Afm);break;case 1:switch(Ayd){case 1:A._GetAutoObject(C.Device
).A5(42,true,A.jV,0,Afm);break;case 0:A._GetAutoObject(C.Device).A5(43,true,A.jV
,0,Afm);break;case 3:case 2:case 5:case 4:A._GetAutoObject(C.Device).A5(22,true,
A.jV,0,Afm);break;default:throw new Error(AGJ+Ayd.toFixed());}break;case 5:A._GetAutoObject(
C.Device).A5(41,true,A._GetAutoObject(C.Device).Ap.HA().toFixed(),0,Afm);break;case
0:break;default:throw new Error(AU6+Bam.toFixed());}},BbY:function(Baz,LY){var B;
var AzC=null;switch(Baz){case 0:AzC=[B=A._GetAutoObject(C.Device),B.AvG,B.Ax9];break;
case 1:switch(LY){case 1:AzC=[B=A._GetAutoObject(C.Device),B.AvE,B.Ax7];break;case
0:AzC=[B=A._GetAutoObject(C.Device),B.AvF,B.Ax8];break;case 2:AzC=[B=A._GetAutoObject(
C.Device),B.AvG,B.Ax9];break;default:throw new Error(Axv+LY.toFixed());}break;default:
throw new Error(AU7+Baz.toFixed());}return AzC;},A5U:function(P4,BvJ){var Aao=A.
_NewObject(A.Core.Bt,0);Aao.Initialize(P4);var AAS=Aao.Year;var Ba=A._GetAutoObject(
C.Device).Pe.K9(0,AAS);var UP=A._NewObject(C.CalfDeregistrations,0);if(Ba<0){if(
A._GetAutoObject(C.Device).Pe.Lc())A._GetAutoObject(C.Device).A5(51,true,A._GetAutoObject(
C.Device).Pe.HA().toFixed(),0,null);else{UP.Gf();UP.Aki(AAS);}}else UP.EB(Ba,A._GetAutoObject(
C.Device).Pe);UP.AvX(UP.Deregistrations+1);if(BvJ)UP.AvW(UP.Deaths+1);UP.Cl(A._GetAutoObject(
C.Device).Pe);},ALu:function(LK,All,Alc){var AJT=0;if((All&&(Alc===1))||(LK===1)
)AJT=1;else if((All&&(Alc===2))||(LK===2))AJT=2;else if(!!LK&&(LK!==5))AJT=LK;return AJT;
},Bbz:function(Bv1){var B;if(A._GetAutoObject(C.Device).MeasureState===1){this.SC.
Cs=A._GetAutoObject(C.Device).Zz;this.SC.B0=Bv1;this.SC.Anv(this);}},ACd:function(
){var A$=this.ANX();var Bcl=A._NewObject(C.BoolFilterCriterion,0);Bcl.Initialize(
38,0,true,true);A$.CY(Bcl);return A$;},A5B:function(D$){var A$=A._GetAutoObject(
C.Helper).Mk();if(A._GetAutoObject(C.Device).AlY){var A09=A._GetAutoObject(C.Helper
).ANY(D$,21600,true);A$.CY(A09);}return A$;},A5O:function(){var A$=A._GetAutoObject(
C.Helper).Mk();var BcM=A._NewObject(C.UInt64FilterCriterion,0);BcM.Initialize(26
,0,0,true);A$.CY(BcM);return A$;},A5R:function(){var B;var A$=A._GetAutoObject(C.
Helper).Mk();var AzI=(C.WhereAboutsFilterCriterion.isPrototypeOf(B=A$.DX(34,3))?
B:null);if(!!AzI)A$.QW(AzI);var Bd2=A._NewObject(C.BoolFilterCriterion,0);Bd2.Initialize(
37,0,true,true);A$.CY(Bd2);return A$;},TD:function(A2,BvC,AZN){var B;A2=Math.trunc(
A2/this.Az$(BvC));A2%=this.Az$(AZN);return A2;},Az$:function(BaA){switch(BaA){case
0:return 1;case 1:return 10;case 2:return 100;case 3:return 1000;case 4:return 10000;
case 5:return 100000;case 6:return 1000000;case 7:return 10000000;case 8:return 100000000;
case 9:return 1000000000;case 10:return 10000000000;case 11:return 100000000000;
case 12:return 1000000000000;case 13:return 10000000000000;case 14:return 100000000000000;
case 15:return 1000000000000000;default:throw new Error(AU8+BaA.toFixed());}},Mk:
function(){var A$=A._NewObject(C.Filter,0);var Bem=A._NewObject(C.BoolFilterCriterion
,0);Bem.Initialize(10,0,true,true);A$.CY(Bem);var AzI=A._NewObject(C.WhereAboutsFilterCriterion
,0);AzI.Initialize(34,3,6,true);A$.CY(AzI);return A$;},AqD:function(aFilter){return!
this.ACh(aFilter);},ACh:function(aFilter){var Ja=0;var Az=aFilter.ANZ();while(!!
Az){if(Az.Abh===false)Ja++;Az=aFilter.AN4(Az);}return Ja;},ANX:function(){var A$=
this.Mk();var UM=A._NewObject(C.AnimalTypeFilterCriterion,0);UM.Initialize(14,0,
1,true);A$.CY(UM);return A$;},ACm:function(){var B;var A26;var JU=this.Bhp();A26=(((
B=A._GetAutoObject(C.Converter).Ap3(JU))<0)?B+0x10000000000000000:B)*this.Az$(12
);if((JU===10)&&(A._GetAutoObject(C.Device).Ui>0)){var Bxs=A._GetAutoObject(C.Helper
).TD(A._GetAutoObject(C.Device).Ui,10,2)*this.Az$(8);A26+=Bxs;}return A26;},Bhp:
function(){var JU=0;if(A._GetAutoObject(C.Device).Ui>0)JU=A._GetAutoObject(C.Converter
).Acf(A._GetAutoObject(C.Device).Ui);if(!JU)JU=A._GetAutoObject(C.Converter).A6m(
A._GetAutoObject(C.Device).Language);return JU;},AQk:function(W3){var AcW=A._GetAutoObject(
C.Device).Ap.AdW(26,W3);return AcW;},AjJ:function(Afn){switch(Afn){case 0:case 1:
case 2:case 3:case 4:case 5:return false;case 6:case 7:case 8:case 9:case 10:return true;
default:throw new Error(AU9+Afn.toFixed());}},Bfu:function(Rc,ED){var GK=0;switch(
Rc){case 1:GK=A._GetAutoObject(C.Helper).AkG(ED.TransponderId);break;case 0:if(!
A._GetAutoObject(C.Device).EartagNrAssignmentMode)GK=A._GetAutoObject(C.Device).
AjB;else switch(ED.Gender){case 0:GK=A._GetAutoObject(C.Device).Aqt;break;case 1:
GK=A._GetAutoObject(C.Device).Aqs;break;case 2:GK=A._GetAutoObject(C.Device).AjB;
break;default:throw new Error(AGM+ED.Gender.toFixed());}break;default:throw new Error(
AU_+Rc.toFixed());}return GK;},BgX:function(){var B;var Azf=(((((((A.aaR(A.acf.Ahi
)+A.aaR(A.acf.Colon))+OW)+A._GetAutoObject(C.Device).Ahi)+Axx)+A.aaR(A.acf.Bmn))+
A.aaR(A.acf.Colon))+OW)+A._GetAutoObject(A.acj.KD).BgV(((B=A._GetAutoObject(C.Device
).QN.Timestamp)<0)?B+0x100000000:B);return Azf;},BgY:function(){var B;var Azf=((((((((((((((((((((((((((((
AU$+A._GetAutoObject(C.Device).RK.ADn.toFixed())+Lq)+A._GetAutoObject(C.Device).
RK.ADu.toFixed())+Lq)+A._GetAutoObject(C.Device).RK.AFE.toFixed())+OV)+A._GetAutoObject(
C.Device).RK.ABE)+OV)+A._GetAutoObject(A.acj.KD).Ajs(((B=A._GetAutoObject(C.Device
).RK.Timestamp)<0)?B+0x100000000:B))+OW)+AVa)+A._GetAutoObject(C.Device).Sl.ADn.
toFixed())+Lq)+A._GetAutoObject(C.Device).Sl.ADu.toFixed())+Lq)+A._GetAutoObject(
C.Device).Sl.AFE.toFixed())+OV)+A._GetAutoObject(C.Device).Sl.ABE)+OV)+A._GetAutoObject(
A.acj.KD).Ajs(((B=A._GetAutoObject(C.Device).Sl.Timestamp)<0)?B+0x100000000:B))+
OW)+AVb)+A._GetAutoObject(C.Helper).Bhs())+OV)+A._GetAutoObject(C.Device).GetCommitHash(
))+OV)+A._GetAutoObject(C.Device).GetCommitCount().toFixed())+OV)+A._GetAutoObject(
A.acj.KD).Ajs(A._GetAutoObject(C.Device).GetCommitEpoch());return Azf;},BgW:function(
){var B;var Azf=(((((((((((((((((((((AVc+A._GetAutoObject(C.Device).QN.AQJ.toFixed(
))+Lq)+A._GetAutoObject(C.Device).QN.AQK.toFixed())+Lq)+A._GetAutoObject(C.Device
).QN.AQI.toFixed())+OW)+A.aaR(A.acf.A5u))+A.aaR(A.acf.Colon))+N7)+A._GetAutoObject(
A.acj.KD).Ajs(((B=A._GetAutoObject(C.Device).QN.Timestamp)<0)?B+0x100000000:B))+
Axx)+AVd)+A._GetAutoObject(C.Device).SJ.AUj.toFixed())+Lq)+A._GetAutoObject(C.Device
).SJ.AUk.toFixed())+Lq)+A._GetAutoObject(C.Device).SJ.AUi.toFixed())+OW)+A.aaR(A.
acf.A5u))+A.aaR(A.acf.Colon))+N7)+A._GetAutoObject(A.acj.KD).Ajs(((B=A._GetAutoObject(
C.Device).SJ.Timestamp)<0)?B+0x100000000:B);return Azf;},A5P:function(AZN){var B;
var P;var AAe=A.jV;for(P=1;P<=AZN;P=P+1)if(!!A.abz(0,2))AAe=AAe+String.fromCharCode(
A.abz(97,104)&0xFFFF);else AAe=AAe+String.fromCharCode(A.abz(48,57)&0xFFFF);return AAe;
},Aa1:function(Ee){var Ayv=0;if(Ee===1)Ee=0;var Bbe=this.Agd.AuS(Ee);if(Bbe>=0)Ayv=
this.Ae$.Get(Bbe);return Ayv;},ACo:function(Ee){var FK=0;var AAQ=this.Agd.AuS(Ee
);if(AAQ>=0)FK=this.Ae_.Get(AAQ);return FK;},ACn:function(Ee){var FK=0;var AAQ=this.
Agd.AuS(Ee);if(AAQ>=0)FK=this.Ae9.Get(AAQ);return FK;},A5H:function(){var A$=this.
Mk();var UM=A._NewObject(C.AnimalTypeFilterCriterion,0);UM.Initialize(14,0,A._GetAutoObject(
C.Device).ABZ,true);A$.CY(UM);return A$;},AQn:function(Kt){var BM=Math.trunc(Kt/
1000000000000)|0;if(!BM)return 0;else if(BM>=900)return 1;else if(!A._GetAutoObject(
C.Converter).AMM(BM))return 2;else return 3;},A5T:function(){var A$=A._GetAutoObject(
C.Helper).ACg();var Afs=A._GetAutoObject(C.Helper).A5C(3,A._GetAutoObject(C.Device
).ADq);Afs.Abh=true;A$.CY(Afs);return A$;},A5C:function(EF,Bal){var Az=A._NewObject(
C.UInt32FilterCriterion,0);Az.ES=4;switch(EF){case 2:{Az.Operator=3;Az.A6=A._GetAutoObject(
C.Helper).Zp(Bal);}break;case 3:{Az.Operator=2;Az.A6=A._GetAutoObject(C.Helper).
Zp(Bal-1);}break;default:A.ab5("%s%e",AVe,EF);}return Az;},Bhs:function(){return(((
A._GetAutoObject(C.Device).GetVersionMajor().toFixed()+Lq)+A._GetAutoObject(C.Device
).GetVersionMinor().toFixed())+Lq)+A._GetAutoObject(C.Device).GetVersionRev().toFixed(
);},Bfv:function(Rc,ED){var GK=0;switch(Rc){case 0:GK=ED.VisualId;break;case 2:GK=
A._GetAutoObject(C.Helper).AkG(ED.TransponderId);break;case 1:if(!A._GetAutoObject(
C.Device).EartagNrAssignmentMode)GK=A._GetAutoObject(C.Device).AjB;else switch(ED.
Gender){case 0:GK=A._GetAutoObject(C.Device).Aqt;break;case 1:GK=A._GetAutoObject(
C.Device).Aqs;break;case 2:GK=A._GetAutoObject(C.Device).AjB;break;default:throw new
Error(AGM+ED.Gender.toFixed());}break;default:throw new Error(AVf+Rc.toFixed());
}return GK;},A_z:function(){var B;var IM=null;var S8=0;if(!A._GetAutoObject(C.Device
).EartagNrAssignmentMode){IM=[B=A._GetAutoObject(C.Device),B.Am3,B.An$];S8=A._GetAutoObject(
C.Device).Aus;}else switch(A._GetAutoObject(C.Helper).W.Gender){case 1:{IM=[B=A.
_GetAutoObject(C.Device),B.AvB,B.Ax5];S8=A._GetAutoObject(C.Device).ABR;}break;case
0:{IM=[B=A._GetAutoObject(C.Device),B.AvC,B.Ax6];S8=A._GetAutoObject(C.Device).ABS;
}break;case 2:{IM=[B=A._GetAutoObject(C.Device),B.Am3,B.An$];S8=A._GetAutoObject(
C.Device).Aus;}break;default:;}if(!!IM)switch(S8){case 1:IM[2].call(IM[0],A._GetAutoObject(
C.Helper).W.VisualId-1);break;case 0:IM[2].call(IM[0],A._GetAutoObject(C.Helper).
W.VisualId+1);break;default:;}},A6k:function(W3,ED){return(ED.NaisId!==W3)&&this.
AQk(W3);},BhX:function(I_,ED){return(ED.TransponderId!==I_)&&this.AQm(I_);},ANV:
function(){var A$=A._GetAutoObject(C.Helper).A5R();var AzA=A._NewObject(C.UInt64FilterCriterion
,0);AzA.Initialize(35,5,0,true);A$.CY(AzA);return A$;},AN6:function(){var A$=A._GetAutoObject(
C.Helper).A5R();var AzA=A._NewObject(C.UInt64FilterCriterion,0);AzA.Initialize(35
,0,0,true);A$.CY(AzA);return A$;},Mx:function(AZE,AhH){AZE.Aj(AhH);AZE.Ar(AhH);AZE.
Y(AhH);},AMF:function(AhJ){var B;var Aa;var A1J=false;var W_=AhJ.Vx(null,0x1);while(
!!W_&&(((B=W_)?B.__proto__:null)!==A.Core.Z)){Aa=(A.kR.Cj.isPrototypeOf(W_)?W_:null
);if(!!Aa){Aa.Bf(A1J);A1J=!A1J;}W_=AhJ.Vx(W_,0x1);}},BmG:function(I_){var AhU=A.
_GetAutoObject(C.Device).Ap.Filter;A._GetAutoObject(C.Device).Ap.Bh(null);var A2P=
A._GetAutoObject(C.Device).Ap.Agv(22,I_);A._GetAutoObject(C.Device).Ap.Sz(A2P,22
,0);A._GetAutoObject(C.Device).Ap.Bh(AhU);},A5F:function(AsQ){var A$=null;switch(
AsQ){case 0:A$=this.Bhd();break;case 1:A$=this.ACg();break;default:throw new Error(
AGN+AsQ.toFixed());}return A$;},Bhd:function(){var A$=A._GetAutoObject(C.Helper).
Mk();var Afs=this.A5C(2,100);A$.CY(Afs);return A$;},Bwo:function(AsQ){var AhU=A.
_GetAutoObject(C.Device).Ap.Filter;A._GetAutoObject(C.Device).Ap.Bh(this.A5F(AsQ
));var P;for(P=0;P<A._GetAutoObject(C.Device).Ap.Cb();P++)A._GetAutoObject(C.Device
).Ap.Mw(P,10,false);A._GetAutoObject(C.Device).Ap.Bh(AhU);},Bhe:function(AsQ){var
AhU=A._GetAutoObject(C.Device).Ap.Filter;A._GetAutoObject(C.Device).Ap.Bh(this.A5F(
AsQ));var FX=A._GetAutoObject(C.Device).Ap.Cb();A._GetAutoObject(C.Device).Ap.Bh(
AhU);return FX;},AqY:function(){return this.Ul;},A7T:function(){return this.Ahf;
},Bjy:function(){return this.ATs;},Bjz:function(){return this.ATt;},BjC:function(
){return this.AF4;},_Init:function(aArg){C.Aml._Init.call(this,aArg);C.Animal._Init.
call(this.W={I:this},0);A.Core.Bt._Init.call(this.Au={I:this},0);A.acl.Ga._Init.
call(this.Ky={I:this},0);A.acl.Ga._Init.call(this.SC={I:this},0);C.ALQ._Init.call(
this.Adz={I:this},0);C.AT_._Init.call(this.Us={I:this},0);C.AT9._Init.call(this.
Ur={I:this},0);C.Tw._Init.call(this.AdY={I:this},0);C.AUL._Init.call(this.Ae_={I:
this},0);C.AUK._Init.call(this.Ae9={I:this},0);C.AUJ._Init.call(this.Ae8={I:this
},0);C.AUN._Init.call(this.Ae$={I:this},0);C.ALR._Init.call(this.Agd={I:this},0);
this.__proto__=C.HelperClass;var B;this.Ky.HG(1);this.Ky.Fe(3000);this.Ky.B0=100;
this.SC.Av2(10);this.SC.Wj(5);this.SC.HG(1);this.SC.Fe(4000);this.AdY.B0=false;this.
AdY.Cs=true;this.AdY.HG(1);this.AdY.Fe(100);this.Ky.Sm=[this,this.Bz9];this.Ky.Q=[
this,this.BjC,this.BlW];this.SC.Sm=[this,this.Bz$];this.SC.Q=[B=A._GetAutoObject(
C.Device),B.ADU,B.AH6];this.AdY.Q=[B=A._GetAutoObject(C.Device),B.ADV,B.AH7];this.
Init(aArg);var Lr=this._variants();if(Lr){this.K={};Lr._Init.call(this,aArg);}},
_Done:function(){if(this.K)this.K._Done.call(this);this.__proto__=C.Aml;this.W._Done(
);this.Au._Done();this.Ky._Done();this.SC._Done();this.Adz._Done();this.Us._Done(
);this.Ur._Done();this.AdY._Done();this.Ae_._Done();this.Ae9._Done();this.Ae8._Done(
);this.Ae$._Done();this.Agd._Done();C.Aml._Done.call(this);},_ReInit:function(){
C.Aml._ReInit.call(this);this.W._ReInit();this.Au._ReInit();this.Ky._ReInit();this.
SC._ReInit();this.Adz._ReInit();this.Us._ReInit();this.Ur._ReInit();this.AdY._ReInit(
);this.Ae_._ReInit();this.Ae9._ReInit();this.Ae8._ReInit();this.Ae$._ReInit();this.
Agd._ReInit();if(this.K)this.K._ReInit.call(this);},_Mark:function(D){var B;C.Aml.
_Mark.call(this,D);if((B=this.Ul)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.
Ahf)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.ATs)&&(B._cycle!=D))B._Mark(B.
_cycle=D);if((B=this.ATt)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.W)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.Au)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
Ky)._cycle!=D)B._Mark(B._cycle=D);if((B=this.SC)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Adz)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Us)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Ur)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AdY)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Ae_)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ae9)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.Ae8)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
Ae$)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Agd)._cycle!=D)B._Mark(B._cycle=D);
if(this.K)this.K._Mark(D);},_variants:function(){return A.acr.HelperClass._variants(
);},K:null,_className:"Device::HelperClass"};C.Helper={_Init:function(){C.HelperClass.
_Init.call(this,0);},_ReInit:function(){},_variants:function(){return this;},_this:
null};C.BoolFilterCriterion={A6:false,AdS:function(){var Az=A._NewObject(C.BoolFilterCriterion
,0);Az.GA(this);return Az;},GA:function(AM){C.FilterCriterion.GA.call(this,AM);var
Az=(C.BoolFilterCriterion.isPrototypeOf(AM)?AM:null);if(!!Az)this.A6=Az.A6;},Initialize:
function(AZ,EF,A2,S1){this.ES=AZ;this.Operator=EF;this.A6=A2;this.Abh=S1;return this;
},_Init:function(aArg){C.FilterCriterion._Init.call(this,aArg);this.__proto__=C.
BoolFilterCriterion;},_className:"Device::BoolFilterCriterion"};C.UInt32FilterCriterion={
A6:0,AdS:function(){var Az=A._NewObject(C.UInt32FilterCriterion,0);Az.GA(this);return Az;
},GA:function(AM){C.FilterCriterion.GA.call(this,AM);var Az=(C.UInt32FilterCriterion.
isPrototypeOf(AM)?AM:null);if(!!Az)this.A6=Az.A6;},Initialize:function(AZ,EF,A2,
S1){this.ES=AZ;this.Operator=EF;this.A6=A2;this.Abh=S1;return this;},_Init:function(
aArg){C.FilterCriterion._Init.call(this,aArg);this.__proto__=C.UInt32FilterCriterion;
},_className:"Device::UInt32FilterCriterion"};C.OverlayMenu={None:0,Home:1,AutoAction:
2,MenuItemSettings:3,RatingSettings:4,WeighingSettings:5,Options:6,AnimalSearch:
7,ActionSettings:8,MeasurementReady:9,AnimalMultiInfoMenu:10,AnimalSearchUnfiltered:
11,AnimalSearchDriedOff:12,MassRecordingMenu:13,MassRecordingDefaults:14,MassRecordingFields:
15,PurchasedAnimalsListMenu:16,BirthRegistrationsListMenu:17,LAST:18};C.EnumToString={
BP:function(A1){throw new Error(AnX+A1.toFixed());},Lo:function(A1){return this.
BP(A1);},_Init:function(aArg){this.__proto__=C.EnumToString;A.h7++;},_Done:function(
){this.__proto__=null;A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((
B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:
"Device::EnumToString"};C.ScreenTypeToString={BP:function(A1){var AI9=A1;var Bp;
switch(AI9){case 3:Bp=A.aaR(A.acf.AuY);break;case 34:Bp=A.aaR(A.acf.Tl);break;case
35:Bp=A.aaR(A.acf.Tm);break;case 47:Bp=A.aaR(A.acf.ANU);break;default:Bp=this.Bn5(
A1);}return Bp;},Bn5:function(A1){var AI9=A1;var Bp=A.jV;switch(AI9){case 0:Bp=Axy;
break;case 2:Bp=AGO;break;case 4:Bp=AVg;break;case 40:Bp=AVh;break;case 39:Bp=AVi;
break;case 72:Bp=AVj;break;case 73:Bp=AGP;break;case 93:Bp=AVk;break;case 94:Bp=
AGQ;break;case 104:Bp=AGR;break;case 105:Bp=AGS;break;case 74:Bp=AVl;break;case 3:
Bp=Axz;break;case 6:Bp=AVm;break;case 16:Bp=AVn;break;case 22:Bp=Q$;break;case 46:
Bp=WU;break;case 100:Bp=AVo;break;case 99:Bp=AVp;break;case 101:Bp=AVq;break;case
17:Bp=AVr;break;case 23:Bp=AVs;break;case 18:Bp=AVt;break;case 19:Bp=AVu;break;case
38:Bp=Ahz;break;case 87:Bp=AGT;break;case 1:Bp=AVv;break;case 5:Bp=AVw;break;case
7:Bp=AGU;break;case 92:Bp=AGV;break;case 8:Bp=AxA;break;case 9:Bp=P0;break;case 41:
Bp=AVx;break;case 42:Bp=AVy;break;case 24:Bp=AVz;break;case 10:Bp=Asm;break;case
68:Bp=AVA;break;case 21:Bp=AVB;break;case 11:Bp=AVC;break;case 29:Bp=AVD;break;case
54:Bp=AVE;break;case 30:Bp=AVF;break;case 12:Bp=Asn;break;case 13:Bp=AVG;break;case
14:Bp=AVH;break;case 15:Bp=AVI;break;case 78:Bp=AVJ;break;case 79:Bp=AVK;break;case
20:Bp=AVL;break;case 37:Bp=AVM;break;case 43:Bp=AVN;break;case 44:Bp=AVO;break;case
45:Bp=AVP;break;case 25:Bp=AGW;break;case 75:Bp=Aso;break;case 67:Bp=AVQ;break;case
66:Bp=AVR;break;case 64:Bp=AVS;break;case 65:Bp=AxB;break;case 77:Bp=AkO;break;case
76:Bp=AhA;break;case 95:Bp=AxC;break;case 88:Bp=AnY;break;case 26:Bp=AhB;break;case
28:Bp=AVT;break;case 27:Bp=AxD;break;case 31:Bp=AGX;break;case 89:Bp=Afg;break;case
34:Bp=AGY;break;case 35:Bp=ZQ;break;case 32:Bp=AkP;break;case 50:Bp=AnZ;break;case
55:Bp=AVU;break;case 63:Bp=AVV;break;case 62:Bp=AVW;break;case 33:Bp=AVX;break;case
36:Bp=AVY;break;case 56:Bp=Asp;break;case 86:Bp=AGZ;break;case 57:Bp=AG0;break;case
47:Bp=AVZ;break;case 49:Bp=AV0;break;case 48:Bp=AV1;break;case 69:Bp=AV2;break;case
71:Bp=AV3;break;case 70:Bp=AV4;break;case 51:Bp=AG1;break;case 53:Bp=AV5;break;case
52:Bp=AxE;break;case 96:Bp=AG2;break;case 98:Bp=AG3;break;case 97:Bp=AG4;break;case
80:Bp=AG5;break;case 82:Bp=AG6;break;case 81:Bp=AG7;break;case 85:Bp=AV6;break;case
84:Bp=AV7;break;case 83:Bp=AV8;break;case 58:Bp=AV9;break;case 60:Bp=AV_;break;case
59:Bp=AV$;break;case 61:Bp=AWa;break;case 90:Bp=AxF;break;case 91:Bp=AG8;break;case
102:Bp=AWb;break;case 103:Bp=AG9;break;default:throw new Error(AhC+AI9.toFixed()
);}return Bp;},_Init:function(aArg){C.EnumToString._Init.call(this,aArg);this.__proto__=
C.ScreenTypeToString;},_className:"Device::ScreenTypeToString"};C.OverlayMenuToString={
BP:function(A1){var BdY=A1;var Oh=A.jV;switch(BdY){case 0:Oh=WV;break;case 1:Oh=
Axz;break;case 8:Oh=AWc;break;case 2:Oh=ZR;break;case 3:Oh=AWd;break;case 4:Oh=AWe;
break;case 5:Oh=An0;break;case 6:Oh=Afh;break;case 7:Oh=AkQ;break;case 11:Oh=AG_;
break;case 12:Oh=AWf;break;case 9:Oh=OX;break;case 10:Oh=AWg;break;case 14:Oh=AWh;
break;case 15:Oh=AWi;break;case 13:Oh=AWj;break;case 16:Oh=AG$;break;case 17:Oh=
AHa;break;default:throw new Error(AWk+BdY.toFixed());}return Oh;},_Init:function(
aArg){C.EnumToString._Init.call(this,aArg);this.__proto__=C.OverlayMenuToString;
},_className:"Device::OverlayMenuToString"};C.ScanStateToString={BP:function(A1){
var Beu=A1;var Bn=A.jV;switch(Beu){case 4:Bn=AxG;break;case 0:Bn=AxH;break;case 2:
Bn=AWl;break;case 3:Bn=AWm;break;case 1:Bn=AHb;break;default:throw new Error(AHc+
Beu.toFixed());}return Bn;},_Init:function(aArg){C.EnumToString._Init.call(this,
aArg);this.__proto__=C.ScanStateToString;},_className:"Device::ScanStateToString"
};C.MeasureStateToString={BP:function(A1){var BcG=A1;var Bn=A.jV;switch(BcG){case
4:Bn=AxG;break;case 0:Bn=AxH;break;case 2:Bn=AWn;break;case 1:Bn=AHb;break;case 3:
Bn=AxI;break;default:throw new Error(AWo+BcG.toFixed());}return Bn;},_Init:function(
aArg){C.EnumToString._Init.call(this,aArg);this.__proto__=C.MeasureStateToString;
},_className:"Device::MeasureStateToString"};C.TemperatureUnit={Celsius:0,Fahrenheit:
1,LAST:2};C.TemperatureUnitToString={BP:function(A1){var BeP=A1;var ApF=A.jV;switch(
BeP){case 0:ApF=A.aaR(A.acf.Bom);break;case 1:ApF=A.aaR(A.acf.Bon);break;default:
throw new Error(AHd+BeP.toFixed());}return ApF;},_Init:function(aArg){C.EnumToString.
_Init.call(this,aArg);this.__proto__=C.TemperatureUnitToString;},_className:"Device::TemperatureUnitToString"
};C.AnimalType={DairyCalf:0,DairyCow:1,SheepLamb:2,LAST:3};C.AnimalTypeToString={
BP:function(A1){var AKg=A1;var type=A.jV;switch(AKg){case 0:type=A.aaR(A.acf.BfW
);break;case 1:type=A.aaR(A.acf.Bf9);break;case 2:type=A.aaR(A.acf.Bh5);break;default:
throw new Error(AHe+AKg.toFixed());}return type;},_Init:function(aArg){C.EnumToString.
_Init.call(this,aArg);this.__proto__=C.AnimalTypeToString;},_className:"Device::AnimalTypeToString"
};C.Language={Default:0,German:1,Spanish:2,French:3,Italian:4,Finnish:5,Chinese_TW:
6,Turkish:7,Greek:8,Russian:9,Dutch:10,Czech:11,Estonian:12,Bulgarian:13,Bosnian:
14,Norwegian:15,Ukrainian:16,LAST:17};C.LanguageToString={BP:function(A1){var Azt=
A1;var O3=A.jV;switch(Azt){case 0:O3=AxJ;break;case 10:O3=AWp;break;case 1:O3=AWq;
break;case 12:O3=AWr;break;case 5:O3=AWs;break;case 3:O3=AWt;break;case 8:O3=AWu;
break;case 13:O3=AWv;break;case 4:O3=AWw;break;case 9:O3=Asq;break;case 2:O3=Asr;
break;case 7:O3=AHf;break;case 6:O3=AWx;break;case 11:O3=AWy;break;case 14:O3=AWz;
break;case 15:O3=AWA;break;case 16:O3=AWB;break;default:throw new Error(AHg+Azt.
toFixed());}return O3;},Lo:function(A1){var Azt=A1;var Di=A.jV;switch(Azt){case 0:
Di=AWC;break;case 10:Di=WR;break;case 1:Di=Q9;break;case 12:Di=AWD;break;case 5:
Di=UG;break;case 3:Di=WJ;break;case 8:Di=AWE;break;case 13:Di=WG;break;case 4:Di=
WK;break;case 9:Di=UH;break;case 2:Di=ZN;break;case 7:Di=ZP;break;case 6:Di=AWF;
break;case 11:Di=AWG;break;case 14:Di=AWH;break;case 15:Di=SW;break;case 16:Di=JQ;
break;default:throw new Error(AHg+Azt.toFixed());}return Di;},_Init:function(aArg
){C.EnumToString._Init.call(this,aArg);this.__proto__=C.LanguageToString;},_className:
"Device::LanguageToString"};C.Gender={Male:0,Female:1,Unknown:2,LAST:3};C.BirthType={
Single:0,Twins:1,Triplets:2,Quadruplets:3,LAST:4};C.GenderToString={BP:function(
A1){var Atc=A1;var AJp=A.jV;switch(Atc){case 0:AJp=A.aaR(A.acf.Male);break;case 1:
AJp=A.aaR(A.acf.Female);break;case 2:AJp=A.aaR(A.acf.Unknown);break;default:throw new
Error(AWI+Atc.toFixed());}return AJp;},_Init:function(aArg){C.EnumToString._Init.
call(this,aArg);this.__proto__=C.GenderToString;},_className:"Device::GenderToString"
};C.BirthTypeToString={BP:function(A1){var type=A1;var Afw=A.jV;switch(type){case
0:Afw=A.aaR(A.acf.Bnh);break;case 1:Afw=A.aaR(A.acf.Boi);break;case 2:Afw=A.aaR(
A.acf.Triplets);break;case 3:Afw=A.aaR(A.acf.Quadruplets);break;default:throw new
Error(AWJ+type.toFixed());}return Afw;},_Init:function(aArg){C.EnumToString._Init.
call(this,aArg);this.__proto__=C.BirthTypeToString;},_className:"Device::BirthTypeToString"
};C.SyncState={Idle:0,Init:1,Exporting:2,ImportStart:3,Importing:4,ImportFinish:
5,Ready:6,Error:7,LAST:8};C.SyncStateToString={BP:function(A1){var BeJ=A1;var Bn=
A.jV;switch(BeJ){case 7:Bn=AxG;break;case 0:Bn=AxH;break;case 6:Bn=AxI;break;case
2:Bn=AWK;break;case 5:Bn=AWL;break;case 3:Bn=AWM;break;case 4:Bn=AWN;break;case 1:
Bn=AHh;break;default:throw new Error(AHi+BeJ.toFixed());}return Bn;},_Init:function(
aArg){C.EnumToString._Init.call(this,aArg);this.__proto__=C.SyncStateToString;},
_className:"Device::SyncStateToString"};C.RatedAttributeToString={BP:function(A1
){var AAf=A1;switch(AAf){case 0:return A.jV;case 1:return A.aaR(A.acf.Bmv);case 4:
return A.aaR(A.acf.Bmu);case 3:return A.aaR(A.acf.Bmw);case 2:return A.aaR(A.acf.
Bmt);default:throw new Error(AxK+AAf.toFixed());}},Lo:function(A1){var AAf=A1;switch(
AAf){case 0:return A.jV;case 1:return A.aaR(A.acf.Feed);case 4:return A.aaR(A.acf.
AFw);case 3:return A.aaR(A.acf.AFx);case 2:return A.aaR(A.acf.AFu);default:throw new
Error(AxK+AAf.toFixed());}},_Init:function(aArg){C.EnumToString._Init.call(this,
aArg);this.__proto__=C.RatedAttributeToString;},_className:"Device::RatedAttributeToString"
};C.AssesmentToString={BP:function(A1){var Ak3=A1;var AyC=A.jV;switch(Ak3){case 0:
case 5:AyC=A.jV;break;case 3:AyC=A.aaR(A.acj.Bnn);break;case 2:AyC=A.aaR(A.acj.Bnp
);break;case 1:AyC=A.aaR(A.acj.Bno);break;default:throw new Error(AHj+Ak3.toFixed(
));}return AyC;},_Init:function(aArg){C.EnumToString._Init.call(this,aArg);this.
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
96,WarningDataExportHitPurchasedFailed:97,RemovedFromPurchasedNoticePending:98,SuccessDataExportHitPurchasedDownload:
99,SuccessDataExportHitPurchased:100,WarningParsingDateFailed:101,WarningParsedDateInFutureInvalid:
102,WarningParsingNaisIdFailed:103,RemovedAnimalPurchased:104,WarningParsingShortNaisIdWithoutPremisesId:
105,SuccessChangeTransponder:106,TransponderAlreadyRegisteredCapturable:107,ConfirmationMassDeregistration:
108,SuccessMassDeregistration:109,LAST:110};C.PopupState={Queued:0,Unknown:1,Displayed:
2,ClosedAfterTimeOut:3,ClosedWithOk:4,ClosedWithCancel:5,ClosedByMiddleware:6,ClosedWithYes:
7,ClosedWithNo:8,Opened:9};C.PopupContext={AFh:null,Akk:A.jV,AkE:0,PopupState:1,
Id:0,Show:false,BlG:function(E){var B;if(this.PopupState===E)return;this.PopupState=
E;if(!!this.AFh)(B=this.AFh)?B[1].call(B[0],this):null;},_Init:function(aArg){this.
__proto__=C.PopupContext;A.h7++;},_Done:function(){this.__proto__=null;A.h7--;},
_ReInit:function(){},_Mark:function(D){var B;if((B=this.AFh)&&((B=B[0])._cycle!=
D))B._Mark(B._cycle=D);if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null
,_cycle:0,_observers:null,_className:"Device::PopupContext"};C.Boolean={No:0,Yes:
1,LAST:2};C.BooleanToYesNo={BP:function(A1){switch(A1){case 0:return A.aaR(A.acf.
No);case 1:return A.aaR(A.acf.Yes);default:return An1+A1.toFixed();}},_Init:function(
aArg){C.EnumToString._Init.call(this,aArg);this.__proto__=C.BooleanToYesNo;},_className:
"Device::BooleanToYesNo"};C.AnimalGroupTableFields={Id:0,GroupName:1};C.AnimalGroup={
GroupName:AGI,Id:0,EB:function(Ac,AG){var Hv=C.Row.EB.call(this,Ac,AG);if(Hv&&!!
AG){this.OnSetId(AG.CD(Ac,0));this.AEr(AG.VB(Ac,1));}return Hv;},Cl:function(AG){
var Hv=C.Row.Cl.call(this,AG);if(Hv&&!!AG){var Jd=AG.Ot();if(Jd<=0)A.ab5("%s",Acs
);else{if(this.AmG())this.CI=AG.Yj();AG.He(this.CI,0,this.Id);AG.Zh(this.CI,1,this.
GroupName);AG.Ov(Jd);}}return Hv;},Gf:function(){C.Row.Gf.call(this);this.OnSetId(-
1);},Hd:function(){C.Row.Hd.call(this);this.OnSetId(0);this.AEr(A.jV);},OnSetId:
function(E){if(this.Id===E)return;this.Id=E;A.abo([this,this.QQ,this.OnSetId],0);
},AEr:function(E){if(this.GroupName===E)return;this.GroupName=E;A.abo([this,this.
Bje,this.AEr],0);},QQ:function(){return this.Id;},Bje:function(){return this.GroupName;
},_Init:function(aArg){C.Row._Init.call(this,aArg);this.__proto__=C.AnimalGroup;
this.TableId=3;},_className:"Device::AnimalGroup"};C.PopupIdToString={BP:function(
A1){var Ade=A1;var Av=A.jV;var AI7;AI7=A.aaR(A.acf.BoG)+OW;switch(Ade){case 0:Av=
A.aaR(A.acf.Unknown);break;case 1:Av=A.aaR(A.acf.SevereError);break;case 58:Av=A.
aaR(A.acf.BgK);break;case 2:Av=A.aaR(A.acf.BgI);break;case 3:Av=A.aaR(A.acf.Bos);
break;case 77:Av=A._GetAutoObject(C.Helper).BgY();break;case 78:Av=A._GetAutoObject(
C.Helper).BgW();break;case 79:Av=A._GetAutoObject(C.Helper).BgX();break;case 9:Av=
A.aaR(A.acf.BoU);break;case 5:Av=A.aaR(A.acf.SuccessDataSync);break;case 8:Av=A.
aaR(A.acf.SuccessResetFactorySettings);break;case 34:Av=A.aaR(A.acf.SuccessResetAnimalData
);break;case 10:Av=A._GetAutoObject(C.Device).ACk();break;case 82:Av=A.aaR(A.acf.
BgM);break;case 83:Av=A.aaR(A.acf.BgN);break;case 80:Av=A.aaR(A.acf.Bnz);break;case
81:Av=A.aaR(A.acf.SuccessRestoreBackup);break;case 91:Av=A.aaR(A.acf.BfL);break;
case 92:Av=A.aaR(A.acf.BmJ);break;case 4:Av=A.aaR(A.acf.WarningDataSync);break;case
7:Av=A.aaR(A.acf.BoS);break;case 33:Av=A.aaR(A.acf.WarningResetAnimalData);break;
case 6:Av=A.aaR(A.acf.WarningRestart);break;case 27:Av=A.aaR(A.acf.WarningNoActionDefined
);break;case 64:Av=A.aaR(A.acf.WarningActionNotApplicable);break;case 28:Av=A.aaR(
A.acf.WarningNoMenuItemVisible);break;case 29:Av=A.aaR(A.acf.WarningEnterPresentationMode
);break;case 30:Av=A.aaR(A.acf.WarningNoAnimalsRegistered);break;case 41:Av=((AI7+
A.aaR(A.acf.AQR))+OW)+A.aaR(A.acf.Bih);break;case 50:Av=((AI7+A.aaR(A.acf.AQR))+
OW)+A.aaR(A.acf.Bij);break;case 51:Av=((AI7+A.aaR(A.acf.AQR))+OW)+A.aaR(A.acf.Bii
);break;case 42:Av=A.aaR(A.acf.BoQ);break;case 45:Av=A.aaR(A.acf.BoK);break;case
46:Av=A.aaR(A.acf.WarningNoValidCountryCode);break;case 57:Av=A.aaR(A.acf.WarningOutdatedAnimalWeight
);break;case 52:Av=A.aaR(A.acf.WarningOutdatedAnimalWeights);break;case 53:Av=A.
aaR(A.acf.WarningWeightEvaluationSingular);break;case 56:Av=A.aaR(A.acf.WarningWeightEvaluationPlural
);break;case 11:Av=A.aaR(A.acf.ScanError);break;case 12:Av=A.aaR(A.acf.ScanNotFound
);break;case 13:Av=A.aaR(A.acf.BfD);break;case 36:Av=A.aaR(A.acf.Bob);break;case
14:Av=A.aaR(A.acf.AnimalNotFound);break;case 15:Av=A.aaR(A.acf.SuccessUnregister
);break;case 35:Av=A.aaR(A.acf.SuccessUnregisterPerished);break;case 26:Av=A.aaR(
A.acf.SuccessCreationNewAnimal);break;case 23:Av=A.aaR(A.acf.SuccessCreationNewAnimals
);break;case 24:Av=A.aaR(A.acf.Bga);break;case 49:Av=A.aaR(A.acf.EvaluationInProgress
);break;case 16:Av=A.aaR(A.acf.Bgg);break;case 17:Av=A.aaR(A.acf.Bnr);break;case
18:Av=A.aaR(A.acf.BnF);break;case 19:Av=A.aaR(A.acf.Bns);break;case 20:Av=A.aaR(
A.acf.BnG);break;case 54:Av=A.aaR(A.acf.BnA);break;case 55:Av=A.aaR(A.acf.BnD);break;
case 21:Av=A.aaR(A.acf.A_D);break;case 48:Av=(A.aaR(A.acf.A_D)+OW)+A.aaR(A.acf.A4H
);break;case 22:Av=A.aaR(A.acf.BoM);break;case 63:Av=A.aaR(A.acf.BoN);break;case
85:Av=A.aaR(A.acf.BoP);break;case 43:Av=A.aaR(A.acf.BoO);break;case 25:Av=A.aaR(
A.acf.A_o);break;case 47:Av=(A.aaR(A.acf.A_o)+OW)+A.aaR(A.acf.A4H);break;case 107:
Av=A.aaR(A.acf.Boo);break;case 31:{var BxR=(((((((((((((((((((A.aaR(A.acf.Bf3)+Axx
)+A.aaR(A.acf.AMH))+A.aaR(A.acf.Colon))+N7)+A.aaR(A.acf.Bf5))+OW)+A.aaR(A.acf.ANJ
))+A.aaR(A.acf.Colon))+N7)+A.aaR(A.acf.BgS))+OW)+A.aaR(A.acf.ATd))+A.aaR(A.acf.Colon
))+N7)+A.aaR(A.acf.Bmy))+OW)+A.aaR(A.acf.ATc))+A.aaR(A.acf.Colon))+N7)+A.aaR(A.acf.
Bmx);Av=BxR;}break;case 32:Av=A.aaR(A.acf.Boc);break;case 69:Av=A.aaR(A.acf.Biu);
break;case 44:Av=A.aaR(A.acf.BoT);break;case 37:Av=A.aaR(A.acf.WarningResetWeightSettings
);break;case 38:Av=A.aaR(A.acf.WarningResetTempThresholds);break;case 39:Av=A.aaR(
A.acf.Bmo);break;case 76:Av=(A.aaR(A.acf.A4k)+OW)+A.aaR(A.acf.ATf);break;case 40:
Av=A.aaR(A.acf.BnB);break;case 75:Av=A.aaR(A.acf.Bnt);break;case 59:Av=A.aaR(A.acf.
QuestionAddAnotherCalfMultiples);break;case 62:Av=A.aaR(A.acf.Bnv);break;case 96:
Av=A.aaR(A.acf.Bnw);break;case 60:Av=A.aaR(A.acf.Bnx);break;case 98:Av=A.aaR(A.acf.
Bny);break;case 61:Av=A.aaR(A.acf.BnH);break;case 104:Av=A.aaR(A.acf.BnI);break;
case 65:Av=A.aaR(A.acf.SuccessClearAnimalLoss);break;case 66:Av=A.aaR(A.acf.WarningNoActionsForAnimalLoss
);break;case 67:Av=A.aaR(A.acf.SuccessLinkTransponder);break;case 106:Av=A.aaR(A.
acf.Bnu);break;case 86:Av=A.aaR(A.acf.SuccessUnlinkTransponder);break;case 68:Av=
A.aaR(A.acf.BnC);break;case 70:Av=A.aaR(A.acf.BgO);break;case 71:Av=A.aaR(A.acf.
BnL);break;case 72:Av=A.aaR(A.acf.BnM);break;case 97:Av=A.aaR(A.acf.BgQ);break;case
100:Av=A.aaR(A.acf.BnN);break;case 99:Av=A.aaR(A.acf.BnO);break;case 88:Av=A.aaR(
A.acf.BgP);break;case 89:Av=A.aaR(A.acf.BnJ);break;case 90:Av=A.aaR(A.acf.BnK);break;
case 73:Av=A.aaR(A.acf.WarningNoPremisesID);break;case 74:Av=A.aaR(A.acf.WarningNoFlashDrivePresent
);break;case 94:Av=A.aaR(A.acf.WarningNoBackupPathPresent);break;case 93:Av=A.aaR(
A.acf.WarningNoBackupFilePresent);break;case 84:Av=A.aaR(A.acf.Bg5);break;case 87:
Av=A.aaR(A.acf.BoW);break;case 95:Av=A.aaR(A.acf.BoJ);break;case 108:Av=A.aaR(A.
acf.BoL);break;case 109:Av=A.aaR(A.acf.SuccessMassDeregistration);break;case 102:
Av=A.aaR(A.acf.WarningParsedDateInFutureInvalid);break;case 101:Av=A.aaR(A.acf.WarningParsingDateFailed
);break;case 103:Av=A.aaR(A.acf.WarningParsingNaisIdFailed);break;case 105:Av=A.
aaR(A.acf.BoR);break;default:throw new Error(Ass+Ade.toFixed());}return Av;},Lo:
function(A1){var Ade=A1;var Av=A.jV;switch(Ade){case 0:Av=AHk;break;case 1:Av=AWO;
break;case 58:Av=AHl;break;case 2:Av=AWP;break;case 3:Av=AHm;break;case 77:Av=AWQ;
break;case 78:Av=AWR;break;case 79:Av=AWS;break;case 9:Av=AWT;break;case 5:Av=AWU;
break;case 8:Av=AWV;break;case 34:Av=AWW;break;case 80:Av=AWX;break;case 81:Av=AWY;
break;case 91:Av=AWZ;break;case 92:Av=AW0;break;case 82:Av=AW1;break;case 83:Av=
AxL;break;case 10:Av=AW2;break;case 4:Av=AW3;break;case 7:Av=AxM;break;case 33:Av=
Ast;break;case 6:Av=ZS;break;case 27:Av=Asu;break;case 64:Av=AW4;break;case 28:Av=
AW5;break;case 29:Av=AW6;break;case 30:Av=AHn;break;case 41:Av=AW7;break;case 50:
Av=AHo;break;case 51:Av=AW8;break;case 42:Av=AW9;break;case 45:Av=AW_;break;case
46:Av=Asv;break;case 57:Av=AW$;break;case 52:Av=AXa;break;case 53:Av=AHp;break;case
56:Av=AXb;break;case 11:Av=AXc;break;case 12:Av=AXd;break;case 13:Av=AXe;break;case
36:Av=Acu;break;case 14:Av=AXf;break;case 15:Av=AXg;break;case 35:Av=AXh;break;case
26:Av=AXi;break;case 23:Av=AHq;break;case 24:Av=AXj;break;case 49:Av=AXk;break;case
16:Av=AXl;break;case 17:Av=AXm;break;case 18:Av=AXn;break;case 19:Av=AXo;break;case
20:Av=AHr;break;case 54:Av=AXp;break;case 55:Av=AXq;break;case 21:Av=AXr;break;case
48:Av=AHs;break;case 22:Av=AHt;break;case 63:Av=AXs;break;case 43:Av=AXt;break;case
85:Av=AXu;break;case 25:Av=AXv;break;case 47:Av=Ra;break;case 107:Av=Asw;break;case
31:Av=AHu;break;case 32:Av=AHv;break;case 69:Av=An2;break;case 44:Av=An3;break;case
37:Av=AxN;break;case 38:Av=AXw;break;case 39:Av=AHw;break;case 76:Av=AXx;break;case
40:Av=AXy;break;case 75:Av=AXz;break;case 59:Av=AXA;break;case 62:Av=AXB;break;case
96:Av=AXC;break;case 60:Av=AXD;break;case 98:Av=AXE;break;case 65:Av=AXF;break;case
61:Av=AXG;break;case 104:Av=AXH;break;case 66:Av=AXI;break;case 67:Av=AXJ;break;
case 106:Av=AXK;break;case 86:Av=AXL;break;case 68:Av=AXM;break;case 70:Av=AXN;break;
case 71:Av=An4;break;case 72:Av=AHx;break;case 97:Av=AXO;break;case 100:Av=AHy;break;
case 99:Av=AHz;break;case 88:Av=ZT;break;case 89:Av=AHA;break;case 90:Av=AXP;break;
case 73:Av=AHB;break;case 74:Av=AXQ;break;case 94:Av=AxO;break;case 93:Av=AXR;break;
case 84:Av=AXS;break;case 87:Av=AxP;break;case 95:Av=AXT;break;case 108:Av=AXU;break;
case 109:Av=AXV;break;case 102:Av=AHC;break;case 101:Av=An5;break;case 103:Av=AHD;
break;case 105:Av=AXW;break;default:throw new Error(Ass+Ade.toFixed());}return Av;
},_Init:function(aArg){C.EnumToString._Init.call(this,aArg);this.__proto__=C.PopupIdToString;
},_className:"Device::PopupIdToString"};C.PopupParamSeparator=";";C.RatingMode={
Basic:0,Extended:1,LAST:2};C.TransponderType={UNDEFINED:0,AnimalId:1,FarmId:2,GroupId:
3,PersonId:4,LAST:5};C.TransponderProtocol={UNDEFINED:0,FDX:1,HDX:2,HDX_URBAN:3,
LAST:4};C.TransponderTypeToString={BP:function(A1){var Be1=A1;var type=A.jV;switch(
Be1){case 1:type=AHE;break;case 2:type=AHF;break;case 3:type=AkR;break;case 4:type=
AXX;break;case 0:type=Axy;break;default:throw new Error(An6+Be1.toFixed());}return type;
},_Init:function(aArg){C.EnumToString._Init.call(this,aArg);this.__proto__=C.TransponderTypeToString;
},_className:"Device::TransponderTypeToString"};C.TransponderProtocolToString={BP:
function(A1){var BeZ=A1;var AAc=A.jV;switch(BeZ){case 1:AAc=AXY;break;case 2:AAc=
AHG;break;case 3:AAc=AHH;break;case 0:AAc=Axy;break;default:throw new Error(AXZ+
BeZ.toFixed());}return AAc;},_Init:function(aArg){C.EnumToString._Init.call(this
,aArg);this.__proto__=C.TransponderProtocolToString;},_className:"Device::TransponderProtocolToString"
};C.Transponder={Id:0,TransponderProtocol:0,TransponderType:0,ASM:function(E){if(
this.TransponderType===E)return;this.TransponderType=E;A.abo([this,this.BjO,this.
ASM],0);},ASL:function(E){if(this.TransponderProtocol===E)return;this.TransponderProtocol=
E;A.abo([this,this.BjN,this.ASL],0);},OnSetId:function(E){if(this.Id===E)return;
this.Id=E;A.abo([this,this.QQ,this.OnSetId],0);},AN8:function(){return A._GetAutoObject(
C.Converter).Boa(this.Id);},Bhb:function(){return A._GetAutoObject(C.Converter).
Aw$(this.Id);},BjO:function(){return this.TransponderType;},BjN:function(){return this.
TransponderProtocol;},QQ:function(){return this.Id;},_Init:function(aArg){this.__proto__=
C.Transponder;A.h7++;},_Done:function(){this.__proto__=null;A.h7--;},_ReInit:function(
){},_Mark:function(D){var B;if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:
null,_cycle:0,_observers:null,_className:"Device::Transponder"};C.RatingModeToString={
BP:function(A1){var UX=A1;var Nn=A.jV;switch(UX){case 0:Nn=A.aaR(A.acf.Basic);break;
case 1:Nn=A.aaR(A.acf.Extended);break;default:throw new Error(AX0+UX.toFixed());
}return Nn;},_Init:function(aArg){C.EnumToString._Init.call(this,aArg);this.__proto__=
C.RatingModeToString;},_className:"Device::RatingModeToString"};C.TableRowsCount={
_Init:function(aArg){this.__proto__=C.TableRowsCount;A.h7++;},_Done:function(){this.
__proto__=null;A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((B=this.
I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:
"Device::TableRowsCount"};C.MassUnit={Kilogramm:0,Pound:1,LAST:2};C.MassUnitToString={
BP:function(A1){var BcC=A1;var ApF=A.jV;switch(BcC){case 0:ApF=A.aaR(A.acf.Bh3);
break;case 1:ApF=A.aaR(A.acf.Pound);break;default:throw new Error(AHI+BcC.toFixed(
));}return ApF;},_Init:function(aArg){C.EnumToString._Init.call(this,aArg);this.
__proto__=C.MassUnitToString;},_className:"Device::MassUnitToString"};C.MinWeightGain=
20;C.MaxWeightGain=2000;C.WeightGainStep=10;C.Int32ArrayWrapper={My:10,Array:A.abi(
10,0,null),Y$:function(E){if(this.My===E)return;if(E>10)throw new Error(AX1);this.
My=E;},Set:function(aIndex,AI){if((aIndex<0)||(aIndex>=this.My))throw new Error(
AHJ);this.Array.Set(aIndex,AI);},Get:function(aIndex){if((aIndex<0)||(aIndex>=this.
My))throw new Error(AHJ);return this.Array.Get(aIndex);},Amw:function(){var Ql=0;
var P;for(P=0;P<this.My;P=P+1)Ql=Ql+this.Get(P);return Ql;},toString:function(){
var A1H=this.Array.Get(0).toFixed();var P;for(P=1;P<this.My;P=P+1)A1H=(A1H+OV)+this.
Array.Get(P).toFixed();return A1H;},EB:function(aString){var Hq=aString.indexOf(
String.fromCharCode(0x2C),0);var A0x=A.jV;var P=0;while(P<10){if(aString===A.jV)
this.Array.Set(P,0);else{if(Hq===-1){A0x=aString;aString=A.jV;}else{A0x=A.abV(aString
,Hq);aString=A.ab1(aString,0,Hq+1);}this.Array.Set(P,A.wz(A0x,0,10));Hq=aString.
indexOf(String.fromCharCode(0x2C),0);}P=P+1;}if(aString!==A.jV)A.ab5("%s",AX2);}
,Cl:function(){},Hd:function(){var P;for(P=0;P<this.My;P=P+1)this.Set(P,0);},AuS:
function(A2){var P=0;while(P<this.My){if(this.Array.Get(P)===A2)return P;P=P+1;}
return-1;},Hl:function(){var P=0;var max=-1;while(P<this.My){if(this.Array.Get(P
)>max)max=this.Array.Get(P);P=P+1;}return max;},_Init:function(aArg){(this.Array=[
]).__proto__=C.Int32ArrayWrapper.Array;this.__proto__=C.Int32ArrayWrapper;A.h7++;
},_Done:function(){this.__proto__=null;A.h7--;},_ReInit:function(){},_Mark:function(
D){var B;if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:
null,_className:"Device::Int32ArrayWrapper"};C.ActionToString={BP:function(A1){var
AyY=A1;var EY=A.jV;switch(AyY){case 4:EY=A.aaR(A.acf.Alarm);break;case 256:EY=A.
aaR(A.acf.Weighing);break;case 128:EY=A.aaR(A.acf.A5g);break;case 16:EY=A.aaR(A.
acf.ALx);break;case 1:EY=A.aaR(A.acf.Temperature);break;case 32:EY=A.aaR(A.acf.AnimalLoss
);break;case 2:EY=A.aaR(A.acf.Rating);break;case 8:EY=A.aaR(A.acf.Ary);break;case
64:EY=A.aaR(A.acf.Unregister);break;case 512:EY=A.aaR(A.acf.AQ$);break;case 1024:
EY=A.aaR(A.acf.LinkTransponder);break;case 262144:EY=A.aaR(A.acf.UnlinkTransponder
);break;case 2048:EY=A.aaR(A.acf.Tl);break;case 4096:EY=A.aaR(A.acf.Calving);break;
case 8192:EY=A.aaR(A.acf.DryOff);break;case 16384:EY=A.aaR(A.acf.A6t);break;case
32768:EY=A.aaR(A.acf.ABp);break;case 524288:EY=A.aaR(A.acf.ABr);break;case 65536:
EY=A.aaR(A.acf.Delete);break;case 131072:EY=A.aaR(A.acf.A6u);break;case 0:EY=A.aaR(
A.acf.A6S);break;default:throw new Error(AHK+AyY.toFixed());}return EY;},Lo:function(
A1){var AyY=A1;var EY=A.jV;switch(AyY){case 4:EY=A.aaR(A.acf.Alarm);break;case 256:
EY=A.aaR(A.acf.Weighing);break;case 128:EY=A.aaR(A.acf.A5g);break;case 16:EY=A.aaR(
A.acf.ALx);break;case 1:EY=A.aaR(A.acf.Temperature);break;case 32:EY=A.aaR(A.acf.
AnimalLoss);break;case 2:EY=A.aaR(A.acf.Rating);break;case 8:EY=A.aaR(A.acf.Ary);
break;case 64:EY=A.aaR(A.acf.Unregister);break;case 512:EY=A.aaR(A.acf.AQ$);break;
case 1024:EY=A.aaR(A.acf.LinkTransponder);break;case 262144:EY=A.aaR(A.acf.UnlinkTransponder
);break;case 2048:EY=A.aaR(A.acf.Tl);break;case 4096:EY=A.aaR(A.acf.Calving);break;
case 8192:EY=A.aaR(A.acf.DryOff);break;case 32768:EY=A.aaR(A.acf.ABp);break;case
524288:EY=A.aaR(A.acf.ABr);break;case 65536:EY=A.aaR(A.acf.Delete);break;case 16384:
case 131072:EY=A.aaR(A.acf.Bh$);break;case 0:EY=A.aaR(A.acf.A6S);break;default:throw new
Error(AHK+AyY.toFixed());}return EY;},_Init:function(aArg){C.EnumToString._Init.
call(this,aArg);this.__proto__=C.ActionToString;},_className:"Device::ActionToString"
};C.ACTIONS_COUNT=19;C.PopupTimeout=2000;C.ITable={Filter:null,Id:2,CD:function(
Ac,AZ){return 0;},VB:function(Ac,AZ){return A.jV;},Aj2:function(G){A.we(this,0);
A.pe([this,this.Eq],this);},HW:function(Ac,AZ){return false;},Hz:function(Ac,AZ){
return this.R7(Ac,AZ);},OnSetId:function(E){if(this.Id===E)return;this.Id=E;},Cb:
function(){return 0;},Bh:function(E){if(this.Filter===E)return;this.Filter=E;A.abo([
this,this.Fz,this.FD],0);},FD:function(Aq){this.Bh(Aq);},IV:function(Ac,AZ){var Bzq=
this.VC(Ac,AZ);return A._GetAutoObject(C.Converter).A_r(Bzq);},VC:function(Ac,AZ
){return 0;},R7:function(Ac,AZ){return 0;},A5Q:function(Ac,AZ){return this.CD(Ac
,AZ);},Ot:function(){var Jd=0;var Bz_=this.Id;return Jd;},Ov:function(Aon){var Hv=
0;var Bz_=this.Id;return Hv===1;},Yj:function(){return-1;},Zj:function(Ac,AZ,CW){
return false;},He:function(Ac,AZ,CW){return false;},Zi:function(Ac,AZ,CW){return false;
},Mw:function(Ac,AZ,CW){return false;},Zh:function(Ac,AZ,CW){return false;},Ab2:
function(Ac,AZ,CW){return this.Zi(Ac,AZ,CW);},Akt:function(Ac,AZ,CW){var Bzr=A._GetAutoObject(
C.Converter).AdA(CW);return this.Zj(Ac,AZ,Bzr);},A94:function(Ac,AZ,CW){return this.
He(Ac,AZ,CW);},AN1:function(Ac,AZ){return this.CD(Ac,AZ);},Bg$:function(Ac,AZ){return this.
CD(Ac,AZ);},Bm3:function(Ac,AZ,CW){return this.He(Ac,AZ,CW);},BmZ:function(Ac,AZ
,CW){return this.He(Ac,AZ,CW);},K9:function(aColumn,A2){return-1;},Amu:function(
Ac,AZ){return this.CD(Ac,AZ);},BmX:function(Ac,AZ,CW){return this.He(Ac,AZ,CW);}
,ACi:function(Ac,AZ){return this.CD(Ac,AZ);},ATz:function(Ac,AZ,MH){return this.
He(Ac,AZ,MH);},Eq:function(G){this.Bwx();},Bwx:function(){return-1;},LM:function(
Ac,AZ){return 0;},Sz:function(Ac,AZ,CW){return false;},Agv:function(aColumn,A2){
return-1;},Hd:function(){return false;},Bha:function(Ac,AZ){var Bzs=this.CD(Ac,AZ
);return A._GetAutoObject(C.Converter).BhB(Bzs);},Bhf:function(Ac,AZ){return this.
CD(Ac,AZ);},AN_:function(Ac,AZ){return this.CD(Ac,AZ);},Bm1:function(Ac,AZ,CW){var
Bzt=A._GetAutoObject(C.Converter).A4r(CW);return this.He(Ac,AZ,Bzt);},Bm2:function(
Ac,AZ,CW){return this.He(Ac,AZ,CW);},Bm9:function(Ac,AZ,CW){return this.He(Ac,AZ
,CW);},Ajp:function(aColumn,A2){return false;},AdW:function(aColumn,A2){return false;
},Bho:function(Ac,AZ){return this.CD(Ac,AZ);},Bm7:function(Ac,AZ,CW){return this.
He(Ac,AZ,CW);},Lc:function(){return this.Qx()>=this.HA();},HA:function(){return 0;
},Aa2:function(){return-1;},Qx:function(){return 0;},Fz:function(){return this.Filter;
},_Init:function(aArg){this.__proto__=C.ITable;A.h7++;},_Done:function(){this.__proto__=
null;A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((B=this.Filter)&&(
B._cycle!=D))B._Mark(B._cycle=D);if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D
);},I:null,_cycle:0,_observers:null,_className:"Device::ITable"};C.MaxAutoActionsCount=
4;C.WeightRecordingMode={Automatic:0,Manual:1,LAST:2};C.WeightRecordingModeToString={
BP:function(A1){var UX=A1;var Nn=A.jV;switch(UX){case 0:Nn=A.aaR(A.acf.Automatic
);break;case 1:Nn=A.aaR(A.acf.Manual);break;default:throw new Error(AX3+UX.toFixed(
));}return Nn;},_Init:function(aArg){C.EnumToString._Init.call(this,aArg);this.__proto__=
C.WeightRecordingModeToString;},_className:"Device::WeightRecordingModeToString"
};C.BooleanToAutoOnOff={BP:function(A1){switch(A1){case 0:return A.aaR(A.acf.Off
);case 1:return A.aaR(A.acf.AaC);default:return An1+A1.toFixed();}},_Init:function(
aArg){C.EnumToString._Init.call(this,aArg);this.__proto__=C.BooleanToAutoOnOff;}
,_className:"Device::BooleanToAutoOnOff"};C.WeightStep=100;C.WeightRecordingScope={
CurrentWeightOnly:0,BirthWeightOnly:1,BirthAndCurrentWeight:2,NoWeightRecording:
3,LAST:4};C.WeightRecordingScopeToString={BP:function(A1){var Bev=A1;var AAp=A.jV;
switch(Bev){case 0:AAp=A.aaR(A.acf.Bgc);break;case 1:AAp=A.aaR(A.acf.BfS);break;
case 2:AAp=A.aaR(A.acf.BfP);break;case 3:AAp=A.aaR(A.acf.BiB);break;default:throw new
Error(AX4+Bev.toFixed());}return AAp;},_Init:function(aArg){C.EnumToString._Init.
call(this,aArg);this.__proto__=C.WeightRecordingScopeToString;},_className:"Device::WeightRecordingScopeToString"
};C.BodyTemperature={Undertemperature:0,Normal:1,Elevated:2,Fever:3,LAST:4};C.JB={
Xw:0,Temperature:1,Rating:2,Ae7:3,BAM:4,BBr:5,BD_:6,BB6:7,BCV:8,BBE:9,BCT:10,BDj:
11,LAST:12};C.AnimalListContentToString={BP:function(A1){var Ba6=A1;var W6=A.jV;
switch(Ba6){case 0:W6=AX5;break;case 2:W6=AX6;break;case 1:W6=AX7;break;case 3:W6=
AX8;break;case 4:W6=AX9;break;case 5:W6=AX_;break;case 6:W6=AX$;break;case 7:W6=
AYa;break;case 8:W6=AHL;break;case 9:W6=ZU;break;case 10:W6=AYb;break;case 11:W6=
AxQ;break;default:throw new Error(AYc+Ba6.toFixed());}return W6;},_Init:function(
aArg){C.EnumToString._Init.call(this,aArg);this.__proto__=C.AnimalListContentToString;
},_className:"Device::AnimalListContentToString"};C.GenderFilterCriterion={A6:0,
AdS:function(){var Az=A._NewObject(C.GenderFilterCriterion,0);Az.GA(this);return Az;
},GA:function(AM){C.FilterCriterion.GA.call(this,AM);var Az=(C.GenderFilterCriterion.
isPrototypeOf(AM)?AM:null);if(!!Az)this.A6=Az.A6;},_Init:function(aArg){C.FilterCriterion.
_Init.call(this,aArg);this.__proto__=C.GenderFilterCriterion;},_className:"Device::GenderFilterCriterion"
};C.AnimalTypeFilterCriterion={A6:0,AdS:function(){var Az=A._NewObject(C.AnimalTypeFilterCriterion
,0);Az.GA(this);return Az;},GA:function(AM){C.FilterCriterion.GA.call(this,AM);var
Az=(C.AnimalTypeFilterCriterion.isPrototypeOf(AM)?AM:null);if(!!Az)this.A6=Az.A6;
},Initialize:function(AZ,EF,A2,S1){this.ES=AZ;this.Operator=EF;this.A6=A2;this.Abh=
S1;return this;},_Init:function(aArg){C.FilterCriterion._Init.call(this,aArg);this.
__proto__=C.AnimalTypeFilterCriterion;},_className:"Device::AnimalTypeFilterCriterion"
};C.BAY={At0:0,BAX:1,BCF:2,A9L:3,A4z:4,BDT:5,BBq:6,BDS:7,LinkTransponder:8,Tl:9,
Weighing:10,Calving:11,LinkNaisId:12,BDi:13,ClearBirthNoticePending:14,DeleteAnimal:
15,ScanNaisId:16,Edit:17,ClearPurchaseNoticePending:18};C.AutoRegistrationModeToString={
BP:function(A1){var UX=A1;var Nn=A.jV;switch(UX){case 0:Nn=A.aaR(A.acf.Bf6);break;
case 1:Nn=A.aaR(A.acf.BhF);break;case 2:Nn=A.aaR(A.acf.Off);break;default:throw new
Error(AYd+UX.toFixed());}return Nn;},_Init:function(aArg){C.EnumToString._Init.call(
this,aArg);this.__proto__=C.AutoRegistrationModeToString;},_className:"Device::AutoRegistrationModeToString"
};C.AutoRegistrationMode={UserConfirmed:0,Background:1,Off:2,LAST:3};C.AssessmentFilterCriterion={
A6:0,AdS:function(){var Az=A._NewObject(C.AssessmentFilterCriterion,0);Az.GA(this
);return Az;},GA:function(AM){C.FilterCriterion.GA.call(this,AM);var Az=(C.AssessmentFilterCriterion.
isPrototypeOf(AM)?AM:null);if(!!Az)this.A6=Az.A6;},Initialize:function(AZ,EF,A2,
S1){this.ES=AZ;this.Operator=EF;this.A6=A2;this.Abh=S1;return this;},_Init:function(
aArg){C.FilterCriterion._Init.call(this,aArg);this.__proto__=C.AssessmentFilterCriterion;
},_className:"Device::AssessmentFilterCriterion"};C.D2={Xw:0,Temperature:1,Ae7:2
,Rating:3,LAST:4};C.FactoryResetScope={DeviceAndAnimalData:0,AnimalDataOnly:1,LAST:
2};C.FactoryResetScopeToString={BP:function(A1){switch(A1){case 0:return A.aaR(A.
acf.DeviceAndAnimalData);case 1:return A.aaR(A.acf.AnimalDataOnly);default:return AYe+
A1.toFixed();}},_Init:function(aArg){C.EnumToString._Init.call(this,aArg);this.__proto__=
C.FactoryResetScopeToString;},_className:"Device::FactoryResetScopeToString"};C.
AT_={Cl:function(){A._GetAutoObject(C.Device).Arr(this.toString());},Init:function(
aArg){var B;A.zX([this,this.BdI],[B=A._GetAutoObject(C.Device),B.A72,B.A$4],0);this.
BdI(this);},BdI:function(G){this.EB(A._GetAutoObject(C.Device).AF9);A.we(this,0);
},_Init:function(aArg){C.Int32ArrayWrapper._Init.call(this,aArg);this.__proto__=
C.AT_;this.Y$(3);this.Init(aArg);},_className:"Device::TemperaturesLowClass"};C.
AT9={Init:function(aArg){var B;A.zX([this,this.BdG],[B=A._GetAutoObject(C.Device
),B.A71,B.A$3],0);this.BdG(this);},Cl:function(){A._GetAutoObject(C.Device).Arq(
this.toString());},BdG:function(G){this.EB(A._GetAutoObject(C.Device).AF8);A.we(
this,0);},_Init:function(aArg){C.Int32ArrayWrapper._Init.call(this,aArg);this.__proto__=
C.AT9;this.Y$(3);this.Init(aArg);},_className:"Device::TemperaturesHighClass"};C.
ALQ={Init:function(aArg){var B;A.zX([this,this.Bc$],[B=A._GetAutoObject(C.Device
),B.A7p,B.A$K],0);this.Bc$(this);},Bc$:function(G){this.EB(A._GetAutoObject(C.Device
).AA1);A.we(this,0);},_Init:function(aArg){C.Int32ArrayWrapper._Init.call(this,aArg
);this.__proto__=C.ALQ;this.Y$(3);this.Init(aArg);},_className:"Device::AnimalTypesClass"
};C.UInt64FilterCriterion={A6:0,AdS:function(){var Az=A._NewObject(C.UInt64FilterCriterion
,0);Az.GA(this);return Az;},GA:function(AM){C.FilterCriterion.GA.call(this,AM);var
Az=(C.UInt64FilterCriterion.isPrototypeOf(AM)?AM:null);if(!!Az)this.A6=Az.A6;},Initialize:
function(AZ,EF,A2,S1){this.ES=AZ;this.Operator=EF;this.A6=A2;this.Abh=S1;return this;
},_Init:function(aArg){C.FilterCriterion._Init.call(this,aArg);this.__proto__=C.
UInt64FilterCriterion;},_className:"Device::UInt64FilterCriterion"};C.BooleanToAssignedUnassignedString={
BP:function(A1){switch(A1){case 0:return A.aaR(A.acf.Aj1);case 1:return A.aaR(A.
acf.Bft);default:return An1+A1.toFixed();}},_Init:function(aArg){C.EnumToString.
_Init.call(this,aArg);this.__proto__=C.BooleanToAssignedUnassignedString;},_className:
"Device::BooleanToAssignedUnassignedString"};C.C4={UNDEFINED:0,AT:1,BA:2,BE:3,BA4:
4,BBh:5,BBi:6,BBj:7,BBk:8,BBl:9,BBv:10,BBw:11,BBF:12,BBG:13,BBV:14,FR:15,GR:16,BB8:
17,BB9:18,BCi:19,BCj:20,BCo:21,BCp:22,BCq:23,BCr:24,BCx:25,BCL:26,BCM:27,BC1:28,
BC2:29,BDg:30,BDh:31,BDw:32,BDx:33,BDy:34,BDM:35,BDN:36,BD3:37,A_s:38,BD4:39,LAST:
40};C.CountryToString={BP:function(A1){var JU=A1;var Fr=A.jV;switch(JU){case 1:Fr=
A.aaR(A.acm.BfH);break;case 2:Fr=A.aaR(A.acm.BfT);break;case 3:Fr=A.aaR(A.acm.BfO
);break;case 4:Fr=A.aaR(A.acm.BfV);break;case 5:Fr=A.aaR(A.acm.BfX);break;case 6:
Fr=A.aaR(A.acm.BnS);break;case 7:Fr=A.aaR(A.acm.Bf0);break;case 8:Fr=A.aaR(A.acm.
Bgd);break;case 9:Fr=A.aaR(A.acm.Bge);break;case 10:Fr=A.aaR(A.acm.Bg6);break;case
11:Fr=A.aaR(A.acm.Bgk);break;case 12:Fr=A.aaR(A.acm.BgL);break;case 13:Fr=A.aaR(
A.acm.Bnk);break;case 14:Fr=A.aaR(A.acm.BgU);break;case 15:Fr=A.aaR(A.acm.Bg2);break;
case 16:Fr=A.aaR(A.acm.Bhw);break;case 17:Fr=A.aaR(A.acm.Bgb);break;case 18:Fr=A.
aaR(A.acm.BhC);break;case 19:Fr=A.aaR(A.acm.BhM);break;case 20:Fr=A.aaR(A.acm.BhY
);break;case 21:Fr=A.aaR(A.acm.Bh0);break;case 22:Fr=A.aaR(A.acm.Bia);break;case
23:Fr=A.aaR(A.acm.Bid);break;case 24:Fr=A.aaR(A.acm.Bh9);break;case 25:Fr=A.acm.
Bif;break;case 26:Fr=A.aaR(A.acm.Biv);break;case 27:Fr=A.aaR(A.acm.BiC);break;case
28:Fr=A.aaR(A.acm.Bmi);break;case 29:Fr=A.aaR(A.acm.Bmj);break;case 30:Fr=A.aaR(
A.acm.BmK);break;case 31:Fr=A.aaR(A.acm.BmM);break;case 32:Fr=A.aaR(A.acm.BnR);break;
case 33:Fr=A.aaR(A.acm.Bnj);break;case 34:Fr=A.aaR(A.acm.Bni);break;case 35:Fr=A.
aaR(A.acm.Boh);break;case 36:Fr=A.aaR(A.acm.Bn1);break;case 37:Fr=A.aaR(A.acm.Bol
);break;case 38:Fr=A.aaR(A.acm.A_s);break;case 39:Fr=A.aaR(A.acm.Bok);break;case
0:Fr=An7;break;default:throw new Error(Axq+JU.toFixed());}return Fr;},Lo:function(
A1){var JU=A1;var BM=A.jV;switch(JU){case 1:BM=SV;break;case 2:BM=ZD;break;case 3:
BM=UE;break;case 4:BM=WG;break;case 5:BM=IK;break;case 6:BM=ZO;break;case 7:BM=UF;
break;case 8:BM=ZF;break;case 9:BM=WI;break;case 10:BM=Q9;break;case 11:BM=ZG;break;
case 12:BM=ZH;break;case 13:BM=ZN;break;case 14:BM=UG;break;case 15:BM=WJ;break;
case 16:BM=ZI;break;case 17:BM=WH;break;case 18:BM=OU;break;case 19:BM=Q_;break;
case 20:BM=WK;break;case 21:BM=WM;break;case 22:BM=WO;break;case 23:BM=ZJ;break;
case 24:BM=WN;break;case 25:BM=WQ;break;case 26:BM=WR;break;case 27:BM=SW;break;
case 28:BM=ZK;break;case 29:BM=ZL;break;case 30:BM=Acp;break;case 31:BM=UH;break;
case 32:BM=WS;break;case 33:BM=Afb;break;case 34:BM=ZM;break;case 35:BM=ZP;break;
case 36:BM=ZE;break;case 37:BM=Afc;break;case 38:BM=JQ;break;case 39:BM=Acq;break;
case 0:BM=An7;break;default:throw new Error(Axq+JU.toFixed());}return BM;},_Init:
function(aArg){C.EnumToString._Init.call(this,aArg);this.__proto__=C.CountryToString;
},_className:"Device::CountryToString"};C.EaseOfDelivery={Unspecified:0,Easy:1,Moderate:
2,Difficult:3,Surgery:4,LAST:5};C.EaseOfDeliveryToString={BP:function(A1){var BbC=
A1;var As8=A.jV;switch(BbC){case 0:As8=A.aaR(A.acf.Unspecified);break;case 1:As8=
A.aaR(A.acf.Easy);break;case 2:As8=A.aaR(A.acf.Moderate);break;case 3:As8=A.aaR(
A.acf.Difficult);break;case 4:As8=A.aaR(A.acf.Surgery);break;default:throw new Error(
AYf+BbC.toFixed());}return As8;},_Init:function(aArg){C.EnumToString._Init.call(
this,aArg);this.__proto__=C.EaseOfDeliveryToString;},_className:"Device::EaseOfDeliveryToString"
};C.WhereAbouts={UNB:0,EZU:1,EMA:2,VZU:3,VMA:4,VIV:5,TOT:6,V48:7,V3T:8,MGE:9,VKB:
10,LAST:11};C.WhereAboutsToString={BP:function(A1){var Bfh=A1;var Aar=A.jV;switch(
Bfh){case 0:Aar=A.aaR(A.acf.Unknown);break;case 1:Aar=A.aaR(A.acf.Bou);break;case
2:Aar=A.aaR(A.acf.Bot);break;case 3:Aar=A.aaR(A.acf.BoC);break;case 4:Aar=A.aaR(
A.acf.BoB);break;case 5:Aar=A.aaR(A.acf.Boz);break;case 6:Aar=A.aaR(A.acf.Bow);break;
case 7:Aar=A.aaR(A.acf.Boy);break;case 8:Aar=A.aaR(A.acf.Box);break;case 9:Aar=A.
aaR(A.acf.Bov);break;case 10:Aar=A.aaR(A.acf.BoA);break;default:throw new Error(
AYg+Bfh.toFixed());}return Aar;},_Init:function(aArg){C.EnumToString._Init.call(
this,aArg);this.__proto__=C.WhereAboutsToString;},_className:"Device::WhereAboutsToString"
};C.Breed={UNKNOWN:0,SBT:1,RBT:2,JER:3,BV:4,RVA:5,RV:6,RDN:7,DSN:8,FL:9,GV:10,PIN:
11,HIN:12,MW:13,VW:14,LMP:15,DBV:16,AS:17,VR:18,CHA:19,LIM:20,WBB:21,BA:22,MA:23
,SAL:24,MON:25,AU:26,PIE:27,CHI:28,ROM:29,MAR:30,WP:31,BB:32,DA:33,AA:34,HE:35,SH:
36,HLD:37,WB:38,GAL:39,LR:40,BGA:41,LG:42,BRA:43,NOR:44,UST:45,ZEB:46,GRV:47,DEX:
48,WGA:49,LH:50,SD:51,FR:52,TUX:53,TLM:54,FLF:55,UCK:56,BLA:57,WIT:58,LAK:59,RHV:
60,AT:61,GR:62,PIF:63,PS:64,GVF:65,BVF:66,RBF:67,HWF:68,MWF:69,VWF:70,LPF:71,BRN:
72,BAZ:73,AO:74,BE:75,WL:76,BIS:77,YAK:78,SON:79,TAU:80,IND:81,TIN:82,WAG:83,XFF:
84,XFM:85,XMM:86,EVO:87,BLH:88,TLH:89,MGR:90,WSH:91,MUR:92,EBS:93,ERI:94,PAR:95,
XZF:96,XZM:97,XZZ:98,LAST:99};C.BreedToString={BP:function(A1){var Bu=A1;var BH=
A.jV;switch(Bu){case 0:BH=A.aaR(A.acf.Unknown);break;case 1:BH=A.aaR(A.ack.SBT);
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
);break;case 95:BH=A.ack.PAR;break;case 96:BH=A.aaR(A.ack.XZF);break;case 97:BH=
A.aaR(A.ack.XZM);break;case 98:BH=A.aaR(A.ack.XZZ);break;default:throw new Error(
Asx+Bu.toFixed());}return BH;},_Init:function(aArg){C.EnumToString._Init.call(this
,aArg);this.__proto__=C.BreedToString;},_className:"Device::BreedToString"};C.Tw={
timer:null,Q:null,D6:0,Dq:0,JH:0,Ph:1000,Ps:1000,Bv:false,Cs:false,B0:true,L_:function(
G){var F;if(!this.timer)return;if(this.D6<0){this.Dq=this.timer.Bt;this.D6=0;}var
Au=(this.timer.Bt-this.Dq)|0;var Oj=this.Ph;var G7=this.Ps+this.Ph;var Ly=0;var Ja=
this.D6;if(!Ja&&(Au>=Oj)){Ja=1;Au=Au-Oj;}if((Ja>0)&&(Au>=G7)){var H_=(Au/G7)|0;Au=
Au-(H_*G7);Ja=Ja+H_;}if((Ja>2)&&!this.JH)Ja=1;if(Ja!==this.D6){this.Dq=this.timer.
Bt-(((B=Au)<0)?B+0x100000000:B);this.D6=Ja;}if(Ja>0)Ly=this.Ps;var Kv=(Ja>=this.
JH)&&(this.JH>0);if(!!this.Q){if((!Kv&&(Au>=Ly))&&((F=this.Q,F[1].call(F[0]))!==
this.Cs))(F=this.Q,F[2].call(F[0],this.Cs));if((Kv||((Au<Ly)&&(Ja>0)))&&((F=this.
Q,F[1].call(F[0]))!==this.B0))(F=this.Q,F[2].call(F[0],this.B0));}if(Kv)this.Ar(
false);},HG:function(E){if(E<0)E=0;this.JH=E;},Fe:function(E){if(E<100)E=100;this.
Ph=E;},T$:function(E){if(E<0)E=0;this.Ps=E;},Ar:function(E){if(this.Bv===E)return;
this.Bv=E;if(!E&&!!this.timer){A.z9([this,this.L_],this.timer,0);this.timer=null;
}if(E){this.timer=A._GetAutoObject(A.acl.AdT);A.zV([this,this.L_],this.timer,0);
this.D6=-1;}},_Init:function(aArg){this.__proto__=C.Tw;A.h7++;},_Done:function(){
this.__proto__=null;A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((B=
this.timer)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Q)&&((B=B[0])._cycle!=
D))B._Mark(B._cycle=D);if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null
,_cycle:0,_observers:null,_className:"Device::BoolEffect"};C.Ib={AnimalId:0,TransponderId:
1,BCA:2,BCz:3,BCD:4,BCC:5};C.Aur={BA2:0,BBy:1};C.AnimalIdGenerationMethodToString={
BP:function(A1){var Ak1=A1;var Aov=A.jV;switch(Ak1){case 0:Aov=A.aaR(A.acf.YY);break;
case 1:Aov=A.aaR(A.acf.Transponder);break;case 3:Aov=(A.aaR(A.acf.Manual)+N7)+A.
aaR(A.acf.Male);break;case 2:Aov=(A.aaR(A.acf.Manual)+N7)+A.aaR(A.acf.Female);break;
case 4:Aov=(A.aaR(A.acf.Manual)+N7)+A.aaR(A.acf.Unknown);break;case 5:Aov=(A.aaR(
A.acf.Manual)+N7)+Asy;break;default:throw new Error(Asz+Ak1.toFixed());}return Aov;
},_Init:function(aArg){C.EnumToString._Init.call(this,aArg);this.__proto__=C.AnimalIdGenerationMethodToString;
},_className:"Device::AnimalIdGenerationMethodToString"};C.DirectionOfCountingToString={
BP:function(A1){var AyX=A1;var A0E=A.jV;switch(AyX){case 0:A0E=AsA;break;case 1:
A0E=AxR;break;default:throw new Error(An8+AyX.toFixed());}return A0E;},_Init:function(
aArg){C.EnumToString._Init.call(this,aArg);this.__proto__=C.DirectionOfCountingToString;
},_className:"Device::DirectionOfCountingToString"};C.EnumToIcon={Ar8:function(A1
){throw new Error(AnX+A1.toFixed());},Ar9:function(A1){throw new Error(AnX+A1.toFixed(
));},_Init:function(aArg){this.__proto__=C.EnumToIcon;A.h7++;},_Done:function(){
this.__proto__=null;A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((B=
this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:
"Device::EnumToIcon"};C.AdR={Ar8:function(A1){return A.aaL(A.ach.ATX);},Ar9:function(
A1){var AyX=A1;var Rp=-1;switch(AyX){case 0:Rp=3;break;case 1:Rp=2;break;default:
throw new Error(AHM+AyX.toFixed());}return Rp;},_Init:function(aArg){C.EnumToIcon.
_Init.call(this,aArg);this.__proto__=C.AdR;},_className:"Device::DirectionOfCountingToIcon"
};C.Ady={Ar8:function(A1){return A.aaL(A.ach.ATV);},Ar9:function(A1){var Ak1=A1;
var Rp=-1;switch(Ak1){case 0:Rp=0;break;case 1:Rp=6;break;case 3:Rp=4;break;case
2:Rp=5;break;case 4:Rp=2;break;case 5:Rp=3;break;default:throw new Error(AHM+Ak1.
toFixed());}return Rp;},_Init:function(aArg){C.EnumToIcon._Init.call(this,aArg);
this.__proto__=C.Ady;},_className:"Device::AnimalIdGenerationMethodToIcon"};C.Pm={
UNDEFINED:0,SH:1,AOb:2,AQV:3,AOa:4,A6M:5,HE:6,A9J:7,A36:8,AL1:9,ATp:10,BE:11,BB:
12,A6z:13,ATq:14,ATr:15,AT2:16};C.GermanStateToString={BP:function(A1){var Bn=A1;
var Gu=A.jV;switch(Bn){case 1:Gu=A.aaR(A.aco.SH);break;case 2:Gu=A.aaR(A.aco.AOb
);break;case 3:Gu=A.aaR(A.aco.AQV);break;case 4:Gu=A.aaR(A.aco.AOa);break;case 5:
Gu=A.aaR(A.aco.A6M);break;case 6:Gu=A.aaR(A.aco.HE);break;case 7:Gu=A.aaR(A.aco.
A9J);break;case 8:Gu=A.aaR(A.aco.A36);break;case 9:Gu=A.aaR(A.aco.AL1);break;case
10:Gu=A.aaR(A.aco.ATp);break;case 11:Gu=A.aaR(A.aco.BE);break;case 12:Gu=A.aaR(A.
aco.BB);break;case 13:Gu=A.aaR(A.aco.A6z);break;case 14:Gu=A.aaR(A.aco.ATq);break;
case 15:Gu=A.aaR(A.aco.ATr);break;case 16:Gu=A.aaR(A.aco.AT2);break;case 0:Gu=An7;
break;default:throw new Error(AsB+Bn.toFixed());}return Gu;},Lo:function(A1){var
Bn=A1;var Gu=A.jV;switch(Bn){case 1:Gu=A.aaR(A.aco.BmN);break;case 2:Gu=A.aaR(A.
aco.AOb);break;case 3:Gu=A.aaR(A.aco.AQV);break;case 4:Gu=A.aaR(A.aco.AOa);break;
case 5:Gu=A.aaR(A.aco.Bis);break;case 6:Gu=A.aaR(A.aco.HE);break;case 7:Gu=A.aaR(
A.aco.Bms);break;case 8:Gu=A.aaR(A.aco.BfK);break;case 9:Gu=A.aaR(A.aco.AL1);break;
case 10:Gu=A.aaR(A.aco.ATp);break;case 11:Gu=A.aaR(A.aco.BE);break;case 12:Gu=A.
aaR(A.aco.BB);break;case 13:Gu=A.aaR(A.aco.Bie);break;case 14:Gu=A.aaR(A.aco.ATq
);break;case 15:Gu=A.aaR(A.aco.ATr);break;case 16:Gu=A.aaR(A.aco.AT2);break;case
0:Gu=An7;break;default:throw new Error(AsB+Bn.toFixed());}return Gu;},Bn6:function(
A1){var Bn=A1;var FY=-1;switch(Bn){case 0:FY=0;break;case 1:FY=1;break;case 2:FY=
2;break;case 3:FY=3;break;case 4:FY=4;break;case 5:FY=5;break;case 6:FY=6;break;
case 7:FY=7;break;case 8:FY=8;break;case 9:FY=9;break;case 10:FY=10;break;case 11:
FY=11;break;case 12:FY=12;break;case 13:FY=13;break;case 14:FY=14;break;case 15:
FY=15;break;case 16:FY=16;break;default:throw new Error(AsB+Bn.toFixed());}return FY;
},Bn7:function(A1){var Bn=A1;var FY=A.jV;switch(Bn){case 1:FY=AYh;break;case 2:FY=
AYi;break;case 3:FY=AYj;break;case 4:FY=AYk;break;case 5:FY=AYl;break;case 6:FY=
AYm;break;case 7:FY=AYn;break;case 8:FY=AYo;break;case 9:FY=AYp;break;case 10:FY=
AYq;break;case 11:FY=UE;break;case 12:FY=AYr;break;case 13:FY=AYs;break;case 14:
FY=AxS;break;case 15:FY=AYt;break;case 16:FY=AxT;break;case 0:FY=An7;break;default:
throw new Error(AsB+Bn.toFixed());}return FY;},_Init:function(aArg){C.EnumToString.
_Init.call(this,aArg);this.__proto__=C.GermanStateToString;},_className:"Device::GermanStateToString"
};C.EartagNrAssignmentMode={OneSingleRange:0,TwoNumberRanges:1,LAST:2};C.EartagNrAssignmentModeToString={
Lo:function(A1){var UX=A1;var Nn=A.jV;switch(UX){case 0:Nn=AxU;break;case 1:Nn=AYu;
break;default:throw new Error(AHN+UX.toFixed());}return Nn;},BP:function(A1){var
UX=A1;var Nn=A.jV;switch(UX){case 0:Nn=A.aaR(A.acf.Bmb);break;case 1:Nn=A.aaR(A.
acf.Boj);break;default:throw new Error(AHN+UX.toFixed());}return Nn;},_Init:function(
aArg){C.EnumToString._Init.call(this,aArg);this.__proto__=C.EartagNrAssignmentModeToString;
},_className:"Device::EartagNrAssignmentModeToString"};C.BAV={BCR:0,BCH:1,BBP:2,
BBQ:3,BBR:4,BDO:5};C.EnumToCodeset={Ame:function(AhF){throw new Error(AYv+AhF.toFixed(
));},AdV:function(A1){throw new Error(AnX+A1.toFixed());},Aqk:function(){A.ab5("%s"
,AxV);return 0;},Hl:function(){A.ab5("%s",AxV);return 0;},_Init:function(aArg){this.
__proto__=C.EnumToCodeset;A.h7++;},_Done:function(){this.__proto__=null;A.h7--;}
,_ReInit:function(){},_Mark:function(D){var B;if((B=this.I)&&(B._cycle!=D))B._Mark(
B._cycle=D);},I:null,_cycle:0,_observers:null,_className:"Device::EnumToCodeset"
};C.MZ={Ame:function(AhF){var Bu;switch(AhF){case 1:Bu=1;break;case 2:Bu=2;break;
case 3:Bu=3;break;case 4:Bu=4;break;case 5:Bu=5;break;case 6:Bu=6;break;case 9:Bu=
7;break;case 10:Bu=8;break;case 11:Bu=9;break;case 12:Bu=10;break;case 13:Bu=11;
break;case 14:Bu=12;break;case 15:Bu=13;break;case 16:Bu=14;break;case 17:Bu=15;
break;case 18:Bu=16;break;case 19:Bu=17;break;case 20:Bu=18;break;case 21:Bu=19;
break;case 22:Bu=20;break;case 23:Bu=21;break;case 24:Bu=22;break;case 25:Bu=23;
break;case 26:Bu=24;break;case 27:Bu=25;break;case 28:Bu=26;break;case 31:Bu=27;
break;case 32:Bu=28;break;case 33:Bu=29;break;case 34:Bu=30;break;case 35:Bu=31;
break;case 36:Bu=32;break;case 41:Bu=33;break;case 42:Bu=34;break;case 43:Bu=35;
break;case 44:Bu=36;break;case 45:Bu=37;break;case 46:Bu=38;break;case 47:Bu=39;
break;case 48:Bu=40;break;case 49:Bu=41;break;case 50:Bu=42;break;case 51:Bu=43;
break;case 52:Bu=44;break;case 53:Bu=45;break;case 54:Bu=46;break;case 55:Bu=47;
break;case 56:Bu=48;break;case 57:Bu=49;break;case 58:Bu=50;break;case 59:Bu=51;
break;case 60:Bu=52;break;case 61:Bu=53;break;case 65:Bu=54;break;case 66:Bu=55;
break;case 67:Bu=56;break;case 68:Bu=57;break;case 69:Bu=58;break;case 70:Bu=59;
break;case 71:Bu=60;break;case 72:Bu=61;break;case 73:Bu=62;break;case 74:Bu=63;
break;case 75:Bu=64;break;case 76:Bu=65;break;case 77:Bu=66;break;case 78:Bu=67;
break;case 79:Bu=68;break;case 80:Bu=69;break;case 81:Bu=70;break;case 82:Bu=71;
break;case 83:Bu=72;break;case 84:Bu=73;break;case 85:Bu=74;break;case 86:Bu=75;
break;case 87:Bu=76;break;case 88:Bu=77;break;case 89:Bu=78;break;case 90:Bu=79;
break;case 91:Bu=80;break;case 92:Bu=81;break;case 93:Bu=82;break;case 94:Bu=83;
break;case 97:Bu=84;break;case 98:Bu=85;break;case 99:Bu=86;break;case 100:Bu=87;
break;case 101:Bu=88;break;case 102:Bu=89;break;case 103:Bu=90;break;case 104:Bu=
91;break;case 105:Bu=92;break;case 106:Bu=93;break;case 107:Bu=94;break;case 108:
Bu=95;break;case 109:Bu=96;break;case 110:Bu=97;break;case 111:Bu=98;break;default:
Bu=0;}return Bu;},AdV:function(A1){var Bu=A1;var BJ=0;switch(Bu){case 0:BJ=0;break;
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
case 98:BJ=111;break;default:throw new Error(AYw+Bu.toFixed());}return BJ;},Aqk:
function(){return 0;},Hl:function(){return 111;},_Init:function(aArg){C.EnumToCodeset.
_Init.call(this,aArg);this.__proto__=C.MZ;},_className:"Device::BreedToHitCodeset"
};C.ReasonOfLeaving={Unknown:0,A_e:1,Rz:2,A9D:3,A6b:4,BC0:5,A_t:6,A6I:7,A4y:8,A9z:
9,A6G:10,A4C:11,BDe:12,BDf:13,LAST:14};C.ReasonOfLeavingToString={BP:function(A1
){var Adf=A1;var Tf=A.jV;switch(Adf){case 0:Tf=A.aaR(A.acf.Unknown);break;case 1:
Tf=A.aaR(A.acf.A_e);break;case 2:Tf=A.aaR(A.acf.Rz);break;case 3:Tf=A.aaR(A.acf.
A9D);break;case 4:Tf=A.aaR(A.acf.A6b);break;case 5:Tf=A.aaR(A.acf.Bmc);break;case
6:Tf=A.aaR(A.acf.A_t);break;case 7:Tf=A.aaR(A.acf.A6I);break;case 8:Tf=A.aaR(A.acf.
A4y);break;case 9:Tf=A.aaR(A.acf.A9z);break;case 10:Tf=A.aaR(A.acf.A6G);break;case
11:Tf=A.aaR(A.acf.A4C);break;case 12:Tf=A.aaR(A.acf.Bmm);break;case 13:Tf=A.aaR(
A.acf.Bml);break;default:throw new Error(AYx+Adf.toFixed());}return Tf;},_Init:function(
aArg){C.EnumToString._Init.call(this,aArg);this.__proto__=C.ReasonOfLeavingToString;
},_className:"Device::ReasonOfLeavingToString"};C.Ahc={Ame:function(AhF){var O6;
switch(AhF){case 1:O6=1;break;case 2:O6=2;break;case 3:O6=3;break;case 4:O6=4;break;
case 5:O6=5;break;case 6:O6=6;break;case 7:O6=7;break;case 8:O6=8;break;case 9:O6=
9;break;case 10:O6=10;break;case 11:O6=11;break;case 12:O6=12;break;case 13:O6=13;
break;default:O6=0;}return O6;},AdV:function(A1){var O6=A1;var I$=0;switch(O6){case
0:I$=0;break;case 2:I$=2;break;case 8:I$=8;break;case 11:I$=11;break;case 4:I$=4;
break;case 10:I$=10;break;case 7:I$=7;break;case 5:I$=5;break;case 9:I$=9;break;
case 3:I$=3;break;case 12:I$=12;break;case 13:I$=13;break;case 1:I$=1;break;case
6:I$=6;break;default:throw new Error(AHO+O6.toFixed());}return I$;},Aqk:function(
){return 0;},Hl:function(){return 13;},_Init:function(aArg){C.EnumToCodeset._Init.
call(this,aArg);this.__proto__=C.Ahc;},_className:"Device::ReasonOfLeavingToCodeset"
};C.KR={Ame:function(AhF){var K3;switch(AhF){case 1:K3=1;break;case 2:K3=2;break;
case 3:K3=3;break;case 4:K3=4;break;case 5:K3=5;break;case 6:K3=6;break;case 7:K3=
7;break;case 8:K3=8;break;case 9:K3=9;break;case 10:K3=10;break;default:K3=0;}return K3;
},AdV:function(A1){var K3=A1;var I$=0;switch(K3){case 0:I$=0;break;case 2:I$=2;break;
case 1:I$=1;break;case 9:I$=9;break;case 6:I$=6;break;case 8:I$=8;break;case 7:I$=
7;break;case 5:I$=5;break;case 10:I$=10;break;case 4:I$=4;break;case 3:I$=3;break;
default:throw new Error(AHO+K3.toFixed());}return I$;},Aqk:function(){return 0;}
,Hl:function(){return 10;},_Init:function(aArg){C.EnumToCodeset._Init.call(this,
aArg);this.__proto__=C.KR;},_className:"Device::WhereAboutsToCodeset"};C.Aml={_Init:
function(aArg){this.__proto__=C.Aml;A.h7++;},_Done:function(){this.__proto__=null;
A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((B=this.I)&&(B._cycle!=
D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:"Device::EmptyClass"
};C.CalfDeregistrationsTableFields={Year:0,Deregistrations:1,Deaths:2};C.CalfDeregistrations={
Deregistrations:0,Deaths:0,Year:0,EB:function(Ac,AG){var Hv=C.Row.EB.call(this,Ac
,AG);if(Hv&&!!AG){this.Aki(AG.CD(Ac,0));this.AvX(AG.CD(Ac,1));this.AvW(AG.CD(Ac,
2));}return Hv;},Cl:function(AG){var Hv=C.Row.Cl.call(this,AG);if(Hv&&!!AG){var Jd=
AG.Ot();if(Jd<=0)A.ab5("%s",Acs);else{if(this.AmG())this.CI=AG.Yj();AG.He(this.CI
,0,this.Year);AG.He(this.CI,1,this.Deregistrations);AG.He(this.CI,2,this.Deaths);
AG.Ov(Jd);}}return Hv;},Gf:function(){C.Row.Gf.call(this);this.Aki(-1);},Hd:function(
){C.Row.Hd.call(this);this.Aki(0);this.AvX(0);this.AvW(0);},AvX:function(E){if(this.
Deregistrations===E)return;this.Deregistrations=E;A.abo([this,this.Bi6,this.AvX]
,0);},AvW:function(E){if(this.Deaths===E)return;this.Deaths=E;A.abo([this,this.Bi4
,this.AvW],0);},Aki:function(E){if(this.Year===E)return;this.Year=E;A.abo([this,
this.Aq1,this.Aki],0);},Bi6:function(){return this.Deregistrations;},Bi4:function(
){return this.Deaths;},Aq1:function(){return this.Year;},_Init:function(aArg){C.
Row._Init.call(this,aArg);this.__proto__=C.CalfDeregistrations;this.TableId=4;},
_className:"Device::CalfDeregistrations"};C.Aup={Undefined:0,Display:1,A9I:2,A9U:
3,A_M:4,BB_:5,BDo:6,BDZ:7,BCy:8,BBm:9,BAK:10,A5A:11,A9K:12,BD6:13,A6L:14,BD9:15};
C.DeviceComponentToString={BP:function(A1){var Bbw=A1;var P$=A.jV;switch(Bbw){case
0:P$=AYy;break;case 10:P$=A.aaR(A.acf.Bfi);break;case 9:P$=A.aaR(A.acf.BfZ);break;
case 1:P$=A.aaR(A.acf.BgB);break;case 11:P$=A.aaR(A.acf.A5A);break;case 5:P$=A.aaR(
A.acf.BoD);break;case 8:P$=A.aaR(A.acf.BgD);break;case 14:P$=A.aaR(A.acf.A6L);break;
case 2:P$=A.aaR(A.acf.A9I);break;case 12:P$=A.aaR(A.acf.A9K);break;case 6:P$=A.aaR(
A.acf.Bmr);break;case 3:P$=A.aaR(A.acf.A9U);break;case 7:P$=A.aaR(A.acf.BgE);break;
case 13:P$=A.aaR(A.acf.Bgm);break;case 15:P$=A.aaR(A.acf.BoH);break;case 4:P$=A.
aaR(A.acf.A_M);break;default:throw new Error(AYz+Bbw.toFixed());}return P$;},_Init:
function(aArg){C.EnumToString._Init.call(this,aArg);this.__proto__=C.DeviceComponentToString;
},_className:"Device::DeviceComponentToString"};C.Agp={Ame:function(AhF){return AhF;
},AdV:function(A1){return A1;},Aqk:function(){return 0;},Hl:function(){return 4;
},_Init:function(aArg){C.EnumToCodeset._Init.call(this,aArg);this.__proto__=C.Agp;
},_className:"Device::EaseOfDeliveryToCodeset"};C.Aeq={Ar8:function(A1){return A.
aaL(A.ach.APk);},Ar9:function(A1){var BbH=A1;var Rp=-1;switch(BbH){case 0:Rp=0;break;
case 1:Rp=1;break;case 2:Rp=2;break;default:throw new Error(AYA+BbH.toFixed());}
return Rp;},_Init:function(aArg){C.EnumToIcon._Init.call(this,aArg);this.__proto__=
C.Aeq;},_className:"Device::MotherSelectionFilterModeToIcon"};C.WhereAboutsFilterCriterion={
A6:0,AdS:function(){var Az=A._NewObject(C.WhereAboutsFilterCriterion,0);Az.GA(this
);return Az;},GA:function(AM){C.FilterCriterion.GA.call(this,AM);var Az=(C.WhereAboutsFilterCriterion.
isPrototypeOf(AM)?AM:null);if(!!Az)this.A6=Az.A6;},Initialize:function(AZ,EF,A2,
S1){this.ES=AZ;this.Operator=EF;this.A6=A2;this.Abh=S1;return this;},_Init:function(
aArg){C.FilterCriterion._Init.call(this,aArg);this.__proto__=C.WhereAboutsFilterCriterion;
},_className:"Device::WhereAboutsFilterCriterion"};C.BCK={AM$:0,BBt:1,AOY:2,LAST:
3};C.BDQ={GB:0,AUE:1,Ha:2,Year:3,LAST:4};C.TimespanDaysToString={BP:function(A1){
var BeS=A1;var AAE=A.jV;switch(BeS){case 0:AAE=A.aaR(A.acf.A4Q);break;case 1:AAE=
A.aaR(A.acf.AUE);break;case 2:AAE=A.aaR(A.acf.Ha);break;case 3:AAE=A.aaR(A.acf.Year
);break;default:throw new Error(AYB+BeS.toFixed());}return AAE;},_Init:function(
aArg){C.EnumToString._Init.call(this,aArg);this.__proto__=C.TimespanDaysToString;
},_className:"Device::TimespanDaysToString"};C.Aht={BCX:0,BBz:1,BCe:2,BCh:3,BCg:
4,BBA:5,BCf:6,LAST:7};C.USBStateToString={BP:function(A1){var Bfc=A1;var Bn=A.jV;
switch(Bfc){case 0:Bn=AYC;break;case 2:Bn=AHP;break;case 1:Bn=AYD;break;case 5:Bn=
AYE;break;case 3:Bn=AYF;break;case 4:Bn=AYG;break;case 6:Bn=AYH;break;default:throw new
Error(AHc+Bfc.toFixed());}return Bn;},_Init:function(aArg){C.EnumToString._Init.
call(this,aArg);this.__proto__=C.USBStateToString;},_className:"Device::USBStateToString"
};C.ABK={BCc:0,BAW:1,BCd:2,BCa:3};C.AwZ={ABE:A.jV,Timestamp:0,ADn:0,ADu:0,AFE:0,
OnSetTimestamp:function(E){if(this.Timestamp===E)return;this.Timestamp=E;},AEC:function(
E){if(this.ADn===E)return;this.ADn=E;},AEJ:function(E){if(this.ADu===E)return;this.
ADu=E;},AET:function(E){if(this.AFE===E)return;this.AFE=E;},AEg:function(E){if(this.
ABE===E)return;this.ABE=E;},_Init:function(aArg){this.__proto__=C.AwZ;A.h7++;},_Done:
function(){this.__proto__=null;A.h7--;},_ReInit:function(){},_Mark:function(D){var
B;if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:
null,_className:"Device::SoftwareVersionInformation"};C.AuU={Timestamp:0,AQJ:0,AQK:
0,AUj:0,AUk:0,AUi:0,AQI:0,OnSetTimestamp:function(E){if(this.Timestamp===E)return;
this.Timestamp=E;},AEz:function(E){if(this.AQJ===E)return;this.AQJ=E;},AEA:function(
E){if(this.AQK===E)return;this.AQK=E;},AE6:function(E){if(this.AUj===E)return;this.
AUj=E;},AE7:function(E){if(this.AUk===E)return;this.AUk=E;},AE5:function(E){if(this.
AUi===E)return;this.AUi=E;},AEy:function(E){if(this.AQI===E)return;this.AQI=E;},
_Init:function(aArg){this.__proto__=C.AuU;A.h7++;},_Done:function(){this.__proto__=
null;A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((B=this.I)&&(B._cycle
!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:"Device::HardwareVersionInformation"
};C.ApX={Undefined:0,BB0:1,BA_:2};C.Af8={Manual:0,TransponderId:1,LAST:2};C.AnimalIdAutoGenerationMethodToString={
BP:function(A1){var Ba4=A1;var AZ_=A.jV;switch(Ba4){case 0:AZ_=A.aaR(A.acf.A4G);
break;case 1:AZ_=A.aaR(A.acf.A4W);break;default:throw new Error(AYI+Ba4.toFixed(
));}return AZ_;},_Init:function(aArg){C.EnumToString._Init.call(this,aArg);this.
__proto__=C.AnimalIdAutoGenerationMethodToString;},_className:"Device::AnimalIdAutoGenerationMethodToString"
};C.Ha={A4p:0,ADc:1,AB3:2,ADo:3,AA3:4,ADr:5,ADe:6,ADd:7,AA$:8,AFL:9,ADE:10,ADC:11
,ABN:12,LAST:13};C.MonthToString={BP:function(A1){var BcI=A1;var Xh=A.jV;switch(
BcI){case 1:Xh=A.aaR(A.acs.ADc);break;case 2:Xh=A.aaR(A.acs.AB3);break;case 3:Xh=
A.aaR(A.acs.ADo);break;case 4:Xh=A.aaR(A.acs.AA3);break;case 5:Xh=A.aaR(A.acs.ADr
);break;case 6:Xh=A.aaR(A.acs.ADe);break;case 7:Xh=A.aaR(A.acs.ADd);break;case 8:
Xh=A.aaR(A.acs.AA$);break;case 9:Xh=A.aaR(A.acs.AFL);break;case 10:Xh=A.aaR(A.acs.
ADE);break;case 11:Xh=A.aaR(A.acs.ADC);break;case 12:Xh=A.aaR(A.acs.ABN);break;default:
throw new Error(AYJ+BcI.toFixed());}return Xh;},_Init:function(aArg){C.EnumToString.
_Init.call(this,aArg);this.__proto__=C.MonthToString;},_className:"Device::MonthToString"
};C.Aji={FileName:A.jV,AFG:0,ABK:0,Anz:false,_Init:function(aArg){this.__proto__=
C.Aji;A.h7++;},_Done:function(){this.__proto__=null;A.h7--;},_ReInit:function(){
},_Mark:function(D){var B;if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null
,_cycle:0,_observers:null,_className:"Device::DataExportContext"};C.Al5={BB7:0,BDF:
1};C.AUL={Init:function(aArg){var B;A.zX([this,this.BdS],[B=A._GetAutoObject(C.Device
),B.A8c,B.A$$],0);this.BdS(this);},Cl:function(){A._GetAutoObject(C.Device).Arw(
this.toString());},BdS:function(G){this.EB(A._GetAutoObject(C.Device).AGt);A.we(
this,0);},_Init:function(aArg){C.Int32ArrayWrapper._Init.call(this,aArg);this.__proto__=
C.AUL;this.Y$(3);this.Init(aArg);},_className:"Device::WeightGainsLowClass"};C.AUK={
Init:function(aArg){var B;A.zX([this,this.BdQ],[B=A._GetAutoObject(C.Device),B.A8b
,B.A$_],0);this.BdQ(this);},Cl:function(){A._GetAutoObject(C.Device).Arv(this.toString(
));},BdQ:function(G){this.EB(A._GetAutoObject(C.Device).AGs);A.we(this,0);},_Init:
function(aArg){C.Int32ArrayWrapper._Init.call(this,aArg);this.__proto__=C.AUK;this.
Y$(3);this.Init(aArg);},_className:"Device::WeightGainsHighClass"};C.AUN={Init:function(
aArg){var B;A.zX([this,this.BdU],[B=A._GetAutoObject(C.Device),B.A8f,B.Bac],0);this.
BdU(this);},Cl:function(){A._GetAutoObject(C.Device).Arx(this.toString());},BdU:
function(G){this.EB(A._GetAutoObject(C.Device).AGw);A.we(this,0);},_Init:function(
aArg){C.Int32ArrayWrapper._Init.call(this,aArg);this.__proto__=C.AUN;this.Y$(3);
this.Init(aArg);},_className:"Device::WeightValuesBirthClass"};C.AUJ={Init:function(
aArg){var B;A.zX([this,this.BdO],[B=A._GetAutoObject(C.Device),B.A8a,B.A$9],0);this.
BdO(this);},Cl:function(){A._GetAutoObject(C.Device).Aru(this.toString());},BdO:
function(G){this.EB(A._GetAutoObject(C.Device).AGr);A.we(this,0);},_Init:function(
aArg){C.Int32ArrayWrapper._Init.call(this,aArg);this.__proto__=C.AUJ;this.Y$(3);
this.Init(aArg);},_className:"Device::WeightGainsAverageClass"};C.ALR={Init:function(
aArg){var B;A.zX([this,this.Bda],[B=A._GetAutoObject(C.Device),B.A7q,B.A$L],0);this.
Bda(this);},Bda:function(G){this.EB(A._GetAutoObject(C.Device).AA2);A.we(this,0);
},_Init:function(aArg){C.Int32ArrayWrapper._Init.call(this,aArg);this.__proto__=
C.ALR;this.Y$(3);this.Init(aArg);},_className:"Device::AnimalTypesWeightGainsClass"
};C.BCN={BCQ:0,BCE:1,BBs:2,BD7:3,Unknown:4};C.BA8={None:0,BCY:1,BCS:2,BCO:3,BCP:
4};C.Ahs={A61:0,Manual:1,TransponderId:2,LAST:3};C.TransponderAssignmentIdChangeMethodToString={
BP:function(A1){var BeW=A1;var AKs=A.jV;switch(BeW){case 0:AKs=A.aaR(A.acf.A61);
break;case 1:AKs=A.aaR(A.acf.A4G);break;case 2:AKs=A.aaR(A.acf.A4W);break;default:
throw new Error(AHQ+BeW.toFixed());}return AKs;},_Init:function(aArg){C.EnumToString.
_Init.call(this,aArg);this.__proto__=C.TransponderAssignmentIdChangeMethodToString;
},_className:"Device::TransponderAssignmentIdChangeMethodToString"};C.A9A={Bzj:function(
AsR){var MR=A.ab0(A.abV(AsR,15),0,10);var JU=A._GetAutoObject(C.Converter).Acf(MR
);if(!!JU){if((JU===10)&&(AsR.length>16))return 0;else return MR;}else{JU=A._GetAutoObject(
C.Converter).Acf(A._GetAutoObject(C.Device).Ui);if(!!JU&&((JU===10)&&((AsR.length===
10)||(AsR.length===12)))){var AIB=A.ab0(A.abV(AsR,10),0,10);var AJq=A._GetAutoObject(
C.Converter).Bod(AIB);if((AIB>0)&&!!AJq)return(A._GetAutoObject(C.Converter).Ap3(
JU)*1000000000000)+A.ab0(A.abV(AsR,10),0,10);}}return 0;},Bzi:function(AoD){if(AoD.
length<8)return 0;var Az7=A._NewObject(A.Core.Bt,0);var A2L=false;var A2Q=A.abW(
AoD,4,4);var Atd=A.wz(A2Q,0,10);if((Atd<2000)||(Atd>2100)){A2Q=A.abV(AoD,4);Atd=
A.wz(A2Q,0,10);A2L=true;}if((Atd<2000)||(Atd>2100))return 0;Az7.Year=Atd;var AKa;
var Aze;if(A2L){AKa=A.abW(AoD,4,2);Aze=A.wz(AKa,0,10);}else{AKa=A.abW(AoD,2,2);Aze=
A.wz(AKa,0,10);}if((Aze<1)||(Aze>12))return 0;Az7.Ub(Aze);var AJ$;var Azd;if(A2L
){AJ$=A.abW(AoD,6,2);Azd=A.wz(AJ$,0,10);}else{AJ$=A.abV(AoD,2);Azd=A.wz(AJ$,0,10
);}if((Azd<1)||(Azd>Az7.Y3()))return 0;Az7.Lk(Azd);return Az7.JI();},_Init:function(
aArg){this.__proto__=C.A9A;A.h7++;},_Done:function(){this.__proto__=null;A.h7--;
},_ReInit:function(){},_Mark:function(D){var B;if((B=this.I)&&(B._cycle!=D))B._Mark(
B._cycle=D);},I:null,_cycle:0,_observers:null,_className:"Device::ParserClass"};
C.Arz={_Init:function(){C.A9A._Init.call(this,0);},_ReInit:function(){},_variants:
function(){return this;},_this:null};C.AnimalTableFieldsToString={BP:function(A1
){var Z1=A1;var MJ=A.jV;switch(Z1){case 14:MJ=A.aaR(A.acf.Ae5);break;case 32:MJ=
A.aaR(A.acf.Breed);break;case 4:MJ=A.aaR(A.acf.AdQ);break;case 28:MJ=A.aaR(A.acf.
A4u);break;case 33:MJ=A.aaR(A.acf.Agh);break;case 23:MJ=A.aaR(A.acf.KB);break;case
7:MJ=A.aaR(A.acf.AeX);break;case 2:MJ=A.aaR(A.acf.O);break;case 0:MJ=A.aaR(A.acf.
GD);break;case 8:MJ=A.aaR(A.acf.Alarm);break;case 9:MJ=A.aaR(A.acf.ABx);break;case
38:MJ=A.aaR(A.acf.BgC);break;case 11:MJ=A.aaR(A.acf.Fever);break;case 29:MJ=A.aaR(
A.acf.AQy);break;case 18:MJ=A.aaR(A.acf.M1);break;case 26:MJ=A.aaR(A.acf.YY);break;
case 22:MJ=A.aaR(A.acf.Transponder);break;case 1:MJ=A.aaR(A.acf.Gx);break;case 34:
MJ=A.aaR(A.acf.I7);break;case 6:case 25:case 27:case 10:case 37:case 12:case 17:
case 5:case 3:case 35:case 36:case 15:case 16:case 24:case 31:case 20:case 30:case
21:case 19:case 13:MJ=A.jV;break;default:throw new Error(AYK+A1.toFixed());}return MJ;
},_Init:function(aArg){C.EnumToString._Init.call(this,aArg);this.__proto__=C.AnimalTableFieldsToString;
},_className:"Device::AnimalTableFieldsToString"};C.Vt={BCb:0,BB$:1,LAST:2};C.DataExportDestinationToString={
BP:function(A1){var BwW=A1;var A0z=A.jV;switch(BwW){case 0:A0z=A.acf.Bhx;break;case
1:A0z=A.acf.Bgf;break;default:throw new Error(AsC+A1.toFixed());}return A0z;},_Init:
function(aArg){C.EnumToString._Init.call(this,aArg);this.__proto__=C.DataExportDestinationToString;
},_className:"Device::DataExportDestinationToString"};C.ADl={Be:0,BDJ:1,LAST:2};
C.ListViewScopeToString={BP:function(A1){var Bx3=A1;var A1v=A.jV;switch(Bx3){case
0:A1v=A.aaR(A.acf.Be);break;case 1:A1v=A.aaR(A.acf.Bng);break;default:throw new Error(
AYL+A1.toFixed());}return A1v;},_Init:function(aArg){C.EnumToString._Init.call(this
,aArg);this.__proto__=C.ListViewScopeToString;},_className:"Device::ListViewScopeToString"
};C.AGv={BEw:0,BEv:1,BEu:2,LAST:3};C.WeightValuePrecisionToString={BP:function(A1
){var BAG=A1;var AKK=A.jV;switch(BAG){case 0:AKK=AYM+A.aaR(A.acf.Azr);break;case
1:AKK=AsD+A.acf.Aie;break;case 2:AKK=AxW+A.acf.Aie;break;default:throw new Error(
AsE+A1.toFixed());}return AKK;},_Init:function(aArg){C.EnumToString._Init.call(this
,aArg);this.__proto__=C.WeightValuePrecisionToString;},_className:"Device::WeightValuePrecisionToString"
};C.Agc={BP:function(A1){var AKg=A1;if(AKg===1)return A.aaR(A.acf.Bhz);else return C.
AnimalTypeToString.BP.call(this,A1);},_Init:function(aArg){C.AnimalTypeToString.
_Init.call(this,aArg);this.__proto__=C.Agc;},_className:"Device::AnimalTypeToStringHeifer"
};C.YK={Rz:0,BCU:1,LAST:2};C.MassDeregistrationCriterionToString={BP:function(A1
){var Bx6=A1;var A1A=A.jV;switch(Bx6){case 0:A1A=A.aaR(A.acf.BiF);break;case 1:A1A=
A.aaR(A.acf.ARg);break;default:throw new Error(AGN+A1.toFixed());}return A1A;},_Init:
function(aArg){C.EnumToString._Init.call(this,aArg);this.__proto__=C.MassDeregistrationCriterionToString;
},_className:"Device::MassDeregistrationCriterionToString"};
C._Init=function(){C.Int32FilterCriterion.__proto__=C.FilterCriterion;C.StringFilterCriterion.
__proto__=C.FilterCriterion;C.Table.__proto__=C.ITable;C.Animal.__proto__=C.Row;
C.Rating.__proto__=C.Row;C.HelperClass.__proto__=C.Aml;C.BoolFilterCriterion.__proto__=
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
C.AT_.__proto__=C.Int32ArrayWrapper;C.AT9.__proto__=C.Int32ArrayWrapper;C.ALQ.__proto__=
C.Int32ArrayWrapper;C.UInt64FilterCriterion.__proto__=C.FilterCriterion;C.BooleanToAssignedUnassignedString.
__proto__=C.EnumToString;C.CountryToString.__proto__=C.EnumToString;C.EaseOfDeliveryToString.
__proto__=C.EnumToString;C.WhereAboutsToString.__proto__=C.EnumToString;C.BreedToString.
__proto__=C.EnumToString;C.AnimalIdGenerationMethodToString.__proto__=C.EnumToString;
C.DirectionOfCountingToString.__proto__=C.EnumToString;C.AdR.__proto__=C.EnumToIcon;
C.Ady.__proto__=C.EnumToIcon;C.GermanStateToString.__proto__=C.EnumToString;C.EartagNrAssignmentModeToString.
__proto__=C.EnumToString;C.MZ.__proto__=C.EnumToCodeset;C.ReasonOfLeavingToString.
__proto__=C.EnumToString;C.Ahc.__proto__=C.EnumToCodeset;C.KR.__proto__=C.EnumToCodeset;
C.CalfDeregistrations.__proto__=C.Row;C.DeviceComponentToString.__proto__=C.EnumToString;
C.Agp.__proto__=C.EnumToCodeset;C.Aeq.__proto__=C.EnumToIcon;C.WhereAboutsFilterCriterion.
__proto__=C.FilterCriterion;C.TimespanDaysToString.__proto__=C.EnumToString;C.USBStateToString.
__proto__=C.EnumToString;C.AnimalIdAutoGenerationMethodToString.__proto__=C.EnumToString;
C.MonthToString.__proto__=C.EnumToString;C.AUL.__proto__=C.Int32ArrayWrapper;C.AUK.
__proto__=C.Int32ArrayWrapper;C.AUN.__proto__=C.Int32ArrayWrapper;C.AUJ.__proto__=
C.Int32ArrayWrapper;C.ALR.__proto__=C.Int32ArrayWrapper;C.TransponderAssignmentIdChangeMethodToString.
__proto__=C.EnumToString;C.AnimalTableFieldsToString.__proto__=C.EnumToString;C.
DataExportDestinationToString.__proto__=C.EnumToString;C.ListViewScopeToString.__proto__=
C.EnumToString;C.WeightValuePrecisionToString.__proto__=C.EnumToString;C.Agc.__proto__=
C.AnimalTypeToString;C.MassDeregistrationCriterionToString.__proto__=C.EnumToString;
};C._ReInit=function(){var B;if((B=C.Device._this))B._ReInit(),C.Device._ReInit.
call(B);if((B=C.Converter._this))B._ReInit(),C.Converter._ReInit.call(B);if((B=C.
Helper._this))B._ReInit(),C.Helper._ReInit.call(B);if((B=C.Arz._this))B._ReInit(
),C.Arz._ReInit.call(B);};C.Dz=function(D){var B;if((B=C.Device._this)&&(B._cycle
!=D))B._Done(C.Device._this=null);if((B=C.Converter._this)&&(B._cycle!=D))B._Done(
C.Converter._this=null);if((B=C.Helper._this)&&(B._cycle!=D))B._Done(C.Helper._this=
null);if((B=C.Arz._this)&&(B._cycle!=D))B._Done(C.Arz._this=null);};return C;})(
);

/* VitalControl demonstration application, © Urban GmbH & Co.KG 2023 */