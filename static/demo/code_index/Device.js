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
var Ca="ERROR: Cannot add criterion, it is already in the list.";var BC="ERROR: BatteryChargeState is read only";
var EW="ERROR: UpdateChargeActive is read only";var Hh="ERROR: ScanState is read only.";
var I8="ERROR: MeasureState is read only.";var IJ="ERROR: Temperature value is read only";
var OW="ERROR: UpdateDataTable called for Undefined data table.";var PW="ERROR: UpdateDataTable called for unknown data table id=";
var PX="ERROR: SyncState is read only.";var CL="ERROR: ScanTransponder is read only.";
var E4="ERROR: Body weight value is read only";var Lq="ERROR: Predicted temperature value is read only";
var PY="ERROR: TransferProgress is read only";var Ks="ERROR: TransferTarget is read only";
var N8="ERROR: unhandled assessment.";var PZ="Unhandled enum BodyTemperature: ";
var MB="AU";var ST="AT";var UC="BE";var ZE="BA";var WG="BG";var IK="CA";var UD="CN";
var ZF="TW";var WH="HR";var ZG="CY";var WI="CZ";var ZH="DK";var ZI="EE";var UE="FI";
var WJ="FR";var Q9="DE";var ZJ="GR";var OX="HU";var Q_="IE";var WK="IT";var WM="JP";
var WN="LV";var WO="LT";var ZK="LU";var WQ="MT";var WR="NL";var SU="NO";var ZL="PL";
var ZM="PT";var Acq="RO";var UF="RU";var ZN="SK";var Afe="SI";var ZO="ES";var WS=
"SE";var ZP="CH";var ZQ="TR";var Aff="UA";var JP="UK";var Acr="US";var Lr=".";var
Ahz="-";var AnQ="ERROR: Unhandled mass unit: ";var N9=" ";var WT="Unhandled gender";
var AnR="Unhandled animal type";var AhA="Unhandled Device::MassUnit.";var AhB="Unhandled Device::AnimalListContent.";
var Acs="Avid";var UG="Ordicam / IER SA";var AnS="Agrident";var AnT="Datamars";var
AnU="Allflex";var AnV="Texas Instruments";var Afg="Nedap";var AnW="Digital Angel";
var Afh="null";var Asj="[ ";var OY=", ";var SV=" ]";var Axj="Unhandled language";
var SW="Unhandled Device::AnimalListAction.";var Ask="Temperature unit conversion not supported: ";
var Axk="->";var Axl="=";var Axm=">";var AnX="<";var Axn="!=";var Asl="WARNING: Unhandled operator.";
var JQ="Unknown birth type";var Axo="Unhandled country: ";var Act="ERROR: Cannot start transaction";
var Axp="ERROR: Table is null, cannot load row (";var AGF=")";var AGG="Table Id mismatch!";
var AGH="ERROR: Row index (";var AGI=") out of bounds [0,";var Axq="]";var AU_="ERROR: Table is full. Item limit: ";
var AU$="Device::ScanTransponder not set";var AVa="Unhandled TransponderType.";var
AVb="Unhandled ScanState.";var AVc="Could not load animal with transponder";var Asm=
"Birth type";var Axr="Time calving";var P0="Pend. reg. notice";var Axs="Perished";
var AVd="Rating temp.";var AVe="Location";var AVf=" mother";var AVg="Reason leaving";
var AGJ="Time alarm";var AGK="Time first weighing";var Afi="Time control";var AnY=
"Time temp.";var AVh="Time watch";var AGL="Time weighing";var AkO="Assessment";var
AGM="Time rating";var AGN="ERROR: Unhandled AnimalTable filter field:";var AGO="Field ";
var AVi="ERROR: Unhandled RatingTable filter field:";var AVj="ERROR: Unhandled table ";
var AVk=" filter fields.";var Acu="WARNING: Unhandled filter criterion type.";var
AGP="0";var Asn="No table specified";var AGQ="Invalid animal id generation method: ";
var AGR="Unhandled AnimalIdGenerationMethod: ";var Axt="Invalid gender: ";var AGS=
"Invalid ear tag number assignment mode: ";var Axu=";";var AVl="Invalid animal creation error code: ";
var AVm="Invalid EartagNrAssignmentMode: ";var AVn="Unsupported exponent: ";var AVo=
"Unknown whereabouts type: ";var AGT="Unhandled Gender: ";var AVp="Unhandled AnimalIdAutoGenerationMethod: ";
var OZ="\n";var Axv="\n\n";var AVq="Bootloader:\nV\xA0";var AVr="Middleware:\nV\xA0";
var AVs="GUI:\nV\xA0";var AVt="Mainboard: ";var AVu="Torchboard: ";var AVv="Operator not supported.";
var AVw="Unhandled Device::TransponderAssignmentIdChangeMethod: ";var AGU="Unhandled mass deregistration criterion: ";
var AnZ="Unhandled enum value ";var Axw="UNDEFINED";var AGV="Boot";var AVx="Charge";
var AVy="ChargeWarning";var AVz="ControlledPowerOff";var AVA="DeviceMain";var AGW=
"DeviceService";var AVB="DeviceInfo";var AGX="DeviceDataManagement";var AGY="DeviceAnimalDataMenu";
var AGZ="DeviceDeviceDataMenu";var AVC="DeviceCheck";var Axx="Home";var AVD="Settings";
var AVE="DateTimeSettings";var Q$="UnitsSettings";var WU="DataAcquisitionSettings";
var AVF="RegistrationAutomaticSettings";var AVG="RegistrationPresettingsSettings";
var AVH="TransponderAssignmentSettings";var AVI="TemperatureSettings";var AVJ="WeightGainSettings";
var AVK="DeviceSettings";var AVL="RegistrationSettings";var AhC="InitializationSettings";
var AG0="PremisesSettings";var AVM="Sleep";var AVN="Sync";var AG1="EditAnimalData";
var AG2="EditAnimalDataNaisId";var Axy="AnimalList";var P1="AnimalListFilter";var
AVO="AlarmListFilter";var AVP="WatchListFilter";var AVQ="AnimalActionActions";var
Aso="AnimalActionTemperature";var AVR="TemperatureMeasurement";var AVS="AnimalActionWeighing";
var AVT="AnimalActionRate";var AVU="AnimalActionUnregister";var AVV="AnimalActionPerished";
var AVW="AnimalActionNewBornCare";var Asp="AlarmList";var AVX="ControlMeasure";var
AVY="ControlList";var AVZ="RangeTest";var AV0="ListsMain";var AV1="ListsIdManagement";
var AV2="WatchList";var AV3="AnimalListActions";var AV4="AlarmListActions";var AV5=
"ControlListActions";var AV6="WatchListActions";var AG3="EvaluationMenuMain";var
AkP="EvaluationMenuWeights";var AV7="EvaluationLosses";var AV8="EvaluationRatings";
var AV9="EvaluationTemperatures";var Axz="EvaluationWeights";var AkQ="EvaluationWeightsRecent";
var AhD="EvaluationBirthWeights";var AxA="AnimalEvaluationFilter";var An0="NewMenu";
var AhE="NewAnimals";var AV_="NewAnimalManualData";var AxB="MassRecording";var AG4=
"NewAnimalTransponderData";var Afj="NewAnimalLoss";var AG5="AutoActionScanScreen";
var ZR="ManualActionScanScreen";var AkR="SetTransponderScreen";var An1="SetSaveTransponderScreen";
var AV$="NewAnimalSetTransponderScreen";var AWa="NewAnimalsSetTransponderScreen";
var AWb="NewAnimalCalvingDataScreen";var AWc="WeightListScreen";var AWd="AnimalSingleInfoScreen";
var Asq="AnimalMultiInfoScreen";var AG6="AnimalRegistrationDetails";var AG7="MultiInfoActionsScreen";
var AWe="FreshCowListScreen";var AWf="FreshCowListActionsScreen";var AWg="FreshCowListFilterScreen";
var AWh="DryCowListScreen";var AWi="DryCowListActionsScreen";var AWj="DryCowListFilterScreen";
var AG8="NoTransponderListScreen";var AWk="NoTransponderListActionsScreen";var AxC=
"NoTransponderListFilterScreen";var AG9="YoungNoTransponderListScreen";var AG_="YoungNoTransponderListActionsScreen";
var AG$="YoungNoTransponderListFilterScreen";var AHa="NoNaisIdListScreen";var AHb=
"NoNaisIdListActionsScreen";var AHc="NoNaisIdListFilterScreen";var AWl="RegistrationsListScreen";
var AWm="RegistrationsListActionsScreen";var AWn="RegistrationsListFilterScreen";
var AWo="ActionListScreen";var AWp="ActionListActionsScreen";var AWq="ActionListFilterScreen";
var AWr="UpdateScreen";var AxD="MotherScanScreen";var AHd="SetSaveNaisIdScreen";
var AWs="PurchasedAnimalsList";var AHe="TextInput";var AhF="Unhandled display mode: ";
var WV="None";var AWt="Actions Settings";var ZS="Auto Action";var AWu="Menu Item Settings";
var AWv="Rating Type";var An2="Weighing settings";var Afk="Options";var AkS="AnimalSearch";
var AHf="AnimalSearchUnfiltered";var AWw="AnimalSearchDriedOff";var O0="MeasurementReady";
var AWx="AnimalMultiInfoMenu";var AWy="MassRecordingDefaults";var AWz="MassRecordingFields";
var AWA="MassRecordingMenu";var AHg="PurchasedAnimalsListMenu";var AHh="BirthRegistrationsListMenu";
var AWB="Unhandled overlay menu: ";var AxE="Error";var AxF="Idle";var AWC="IdScanned";
var AWD="NotFound";var AHi="Progress";var AHj="Unhandled scan state: ";var AWE="Prediction";
var AxG="Ready";var AWF="Unhandled measure state: ";var AHk="Unhandled temperature unit: ";
var AHl="Unhandled species: ";var AxH="English";var AWG="Nederlands";var AWH="Deutsch";
var AWI="Eesti";var AWJ="Suomalainen";var AWK="Fran\xE7ais";var AWL="\u0395\u03BB\u03BB\u03B7\u03BD\u03B9\u03BA\u03AC";
var AWM="\u0411\u044A\u043B\u0433\u0430\u0440\u0441\u043A\u0438";var AWN="Italiano";
var Asr="\u0420\u0443\u0441\u0441\u043A\u0438\u0439";var Ass="Espa\xF1ol";var AHm=
"T\xFCrk\xE7e";var AWO="\u6B63\u9AD4\u5B57/\u7E41\u9AD4\u5B57";var AWP="\u010Ce\u0161tina";
var AWQ="Bosanski";var AWR="Norsk";var AWS="\u0423\u043A\u0440\u0430\u0457\u043D\u0441\u044C\u043A\u0438\u0439";
var AHn="Unhandled language: ";var AWT="EN";var AWU="ET";var AWV="EL";var AWW="ZH";
var AWX="CS";var AWY="BS";var AWZ="Unhandled gender: ";var AW0="Unhandled birth type: ";
var AW1="Exporting";var AW2="ImportFinish";var AW3="ImportStart";var AW4="Importing";
var AHo="Init";var AHp="Unhandled sync state: ";var AxI="Unhandled rating attribute: ";
var AHq="Unhandled assessment: ";var An3="Illegal boolean value: ";var Ast="Unhandled popup ID:";
var AHr="Unknown";var AW5="Severe Error";var AHs="ErrorsDeviceDriverCheck";var AW6=
"Enter Sleep";var AHt="About";var AW7="InfoSoftwareVersions";var AW8="InfoHardwareVersions";
var AW9="InfoSerial";var AW_="ShutDown";var AW$="SuccessDataSync";var AXa="SuccessResetFactory";
var AXb="SuccessResetAnimalData";var AXc="SuccessCreateBackup";var AXd="SuccessRestoreBackup";
var AXe="CreateBackupInProgress";var AXf="RestoreBackupInProgress";var AXg="FailedCreateBackup";
var AxJ="FailedRestoreBackup";var AXh="TechnicalDetails";var AXi="WarningDataSync";
var AxK="WarningFactory";var Asu="WarningResetAnimalData";var ZT="WarningRestart";
var Asv="WarningAutoAction";var AXj="WarningAutoActionNotApplicable";var AXk="WarningNoMenuItem";
var AXl="WarningEnterDemoMode";var AHu="NoAnimalsRegistered";var AXm="MaxNumAnimalsReached";
var AHv="MaxNumRatingsReached";var AXn="MaxNumCalfDeregistrationsReached";var AXo=
"MissingTransponder";var AXp="EarTagNumberTooShort";var Asw="NoValidCountryCode";
var AXq="WarningOutdatedAnimalWeight";var AXr="WarningOutdatedAnimalWeights";var
AHw="WarningWeightEvaluationSingular";var AXs="WarningWeightEvaluationPlural";var
AXt="ScanError";var AXu="ScanNotFound";var AXv="ScannedAnimalNotFound";var Acv="ScannedTransponderNotFound";
var AXw="AnimalNotFound";var AXx="SuccessUnregister";var AXy="SuccessUnregisterPerished";
var AXz="SuccessCreationNewAnimal";var AHx="SuccessCreationNewAnimals";var AXA="AnimalCreationInProgress";
var AXB="EvaluationInProgress";var AXC="DataSyncInProgress";var AXD="AddedToAlarm";
var AXE="RemovedFromAlarm";var AXF="AddedToWatch";var AHy="RemovedFromWatch";var
AXG="AddedToDryOff";var AXH="RemovedFromDryOff";var AXI="AnimalIdAlreadyExists";
var AHz="AnimalIdAlreadyExistsContinuable";var AHA="MissingAnimalId";var AXJ="MissingAnimalIdMother";
var AXK="MissingEartagNumber";var AXL="MissingTransponderId";var AXM="TransponderAlreadyRegistered";
var Ra="TransponderAlreadyRegisteredContinuable";var Asx="TransponderAlreadyRegisteredCapturable";
var AHB="HelpAnimalInfoRating";var AHC="WarningReassignTransponder";var An4="CannotReassignNaisId";
var An5="WarningResetToDefaultValue";var AxL="WarningResetThresholds";var AXN="WarningResetTempThresholds";
var AHD="UpdateFirmware";var AXO="UpdateFirmwareBatteryLow";var AXP="ConfirmFirmwareUpdated";
var AXQ="ConfirmBootloaderUpdated";var AXR="QuestionAddAnotherCalfMultiples";var
AXS="RemovedAllBirthNoticesPending";var AXT="RemovedAllPurchasedNoticePending";var
AXU="RemovedFromBirthNoticePending";var AXV="RemovedFromPurchasedNoticePending";
var AXW="SuccessClearAnimalLoss";var AXX="RemovedAnimalBirth";var AXY="RemovedAnimalPurchased";
var AXZ="WarningNoActionsForAnimalLoss";var AX0="SuccessLinkTransponder";var AX1=
"SuccessChangeTransponder";var AX2="SuccessUnlinkTransponder";var AX3="SuccessLinkNaisId";
var AX4="WarningDataExportHitBirthFailed";var An6="SuccessDataExportHitBirth";var
AHE="SuccessDataExportHitBirthDownload";var AX5="WarningDataExportHitPurchasedFailed";
var AHF="SuccessDataExportHitPurchased";var AHG="SuccessDataExportHitPurchasedDownload";
var ZU="WarningDataExportAnimalsFailed";var AHH="SuccessDataExportAnimalsRatings";
var AX6="SuccessDataExportAnimalsDownload";var AHI="WarningNoPremisesID";var AX7=
"WarningNoFlashDrivePresent";var AxM="WarningNoBackupPathPresent";var AX8="WarningNoBackupFilePresent";
var AX9="DemoFunctionNotAvailable";var AxN="WarningImpreciseTimeSetting";var AX_=
"ConfirmationRestoreBackup";var AX$="ConfirmationMassDeregistration";var AYa="SuccessMassDeregistration";
var AHJ="WarningParsedDateInFutureInvalid";var An7="WarningParsingDateFailed";var
AHK="WarningParsingNaisIdFailed";var AYb="WarningParsingShortNaisIdWithoutPremisesId";
var AHL="AnimalId";var AHM="FarmId";var AkT="GroupId";var AYc="PersonId";var An8=
"Unhandled transponder type: ";var AYd="FDX";var AHN="HDX";var AHO="HDX (Urban)";
var AYe="Unhandled transponder protocol: ";var AYf="Illegal RatingMode: ";var AHP=
"Unhandled mass unit: ";var AYg="Max array size is 10";var AHQ="Index out of bounds";
var AYh="ERROR: Received more integers than expected!";var AHR="Unhandled double scan action :";
var AYi="Illegal WeightRecordingMode: ";var AYj="Illegal WeightRecordingScope: ";
var AYk="AnimalData";var AYl="Rating";var AYm="Temperature";var AYn="Weight";var
AYo="Alarm infos";var AYp="Control infos";var AYq="Watch infos";var AYr="Fresh cow infos";
var AHS="No transponder infos";var ZV="Dry cow info";var AYs="No nais id infos";
var AxO="Birth registrations infos";var AYt="Purchased registrations infos";var AYu=
"Unhandled animal list content:";var AYv="Illegal AutoRegistrationMode: ";var AYw=
"Illegal FactoryResetScope: ";var An9="??";var AYx="Illegal EaseOfDelivery: ";var
Asy="Illegal Whereabouts: ";var Asz="Illegal breed: ";var AsA="Unisex";var AsB="Illegal animalIdGenerationMethod: ";
var AxP="Ascending";var An_="Descending";var AYy="Illegal directionOfCountingName: ";
var AHT="Unhandled direction of counting: ";var AsC="Unhandled German state: ";var
AYz="SH";var AYA="HH";var AYB="NI";var AYC="HB";var AYD="NW";var AYE="HE";var AYF=
"RP";var AYG="BW";var AYH="BY";var AYI="SL";var AYJ="BB";var AxQ="MV";var AYK="SN";
var AxR="ST";var AxS="TH";var AYL="One Range Male Female";var AYM="Two Ranges Male Female";
var AHU="Illegal EartagAssignmentMode: ";var AHV="Unhandled code set value ";var
AHW="Implement in derived class";var AYN="Illegal HIT-Code: ";var AYO="Illegal ReasonOfLeaving: ";
var AHX="Illegal code: ";var AYP="Undefined";var AYQ="Illegal DeviceComponent: ";
var AYR="Unhandled Device::MotherSelectionFilterMode: ";var AYS="Illegal Device::TimespanDays: ";
var AHY="Not connected";var AYT="Host";var AYU="Device";var AYV="Device CDC";var
AYW="Host MSC";var AYX="Host HID";var AYY="Host CDC";var AYZ="Illegal animalIdAutoGenerationMethod: ";
var AHZ="Unhandled month: ";var AY0="Illegal transponderAssignmentIdChangeMethod: ";
var AsD="Unhandled animal table field: ";var AY1="Unhandled data export destination: ";
var AY2="Unhandled list view scope: ";var AsE="1 ";var AxT="100 ";var AsF="10 ";
var AY3="Unhandled weight value precision: ";
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
B6:null,B7:null,CX:function(AM){if(!AM)return;var Az=this.B6;while(!!Az){if(Az===
AM)throw new Error(Ca);Az=Az.Ag;}AM.AH=this.B7;if(!!this.B7)this.B7.Ag=AM;this.B7=
AM;if(!this.B6)this.B6=AM;},AN8:function(){return this.B6;},AOb:function(BaT){if(
!!BaT)return BaT.Ag;return null;},DX:function(AIt,EG){var Az=this.B6;while(!!Az){
if(Az.ES===AIt){if(EG===1)return Az;else if(Az.Operator===EG)return Az;}Az=Az.Ag;
}return null;},QW:function(AM){var Az=this.B6;while(!!Az){if(Az===AM){if(!!Az.AH
)Az.AH.Ag=Az.Ag;if(!!Az.Ag)Az.Ag.AH=Az.AH;if(this.B6===Az)this.B6=Az.Ag;if(this.
B7===Az)this.B7=Az.AH;Az.Ag=null;Az.AH=null;return;}Az=Az.Ag;}},GA:function(){var
Ba=A._NewObject(C.Filter,0);var Az=this.B6;while(!!Az){Ba.CX(Az.AdV());Az=Az.Ag;
}return Ba;},_Init:function(aArg){this.__proto__=C.Filter;A.h7++;},_Done:function(
){this.__proto__=null;A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((
B=this.B6)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.B7)&&(B._cycle!=D))B._Mark(
B._cycle=D);if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:
null,_className:"Device::Filter"};C.FilterCriterion={Ag:null,AH:null,ES:-1,Operator:
1,Abi:false,AdV:function(){return null;},GA:function(AM){if(!AM)return;this.ES=AM.
ES;this.Operator=AM.Operator;this.Abi=AM.Abi;},_Init:function(aArg){this.__proto__=
C.FilterCriterion;A.h7++;},_Done:function(){this.__proto__=null;A.h7--;},_ReInit:
function(){},_Mark:function(D){var B;if((B=this.Ag)&&(B._cycle!=D))B._Mark(B._cycle=
D);if((B=this.AH)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.I)&&(B._cycle!=D
))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:"Device::FilterCriterion"
};C.Int32FilterCriterion={A7:0,AdV:function(){var Az=A._NewObject(C.Int32FilterCriterion
,0);Az.GA(this);return Az;},GA:function(AM){C.FilterCriterion.GA.call(this,AM);var
Az=(C.Int32FilterCriterion.isPrototypeOf(AM)?AM:null);if(!!Az)this.A7=Az.A7;},Initialize:
function(A0,EG,A3,SZ){this.ES=A0;this.Operator=EG;this.A7=A3;this.Abi=SZ;return this;
},_Init:function(aArg){C.FilterCriterion._Init.call(this,aArg);this.__proto__=C.
Int32FilterCriterion;},_className:"Device::Int32FilterCriterion"};C.DeviceClass={
ADB:0,ADA:0,Avp:0,Ug:0,OM:null,Sk:null,QM:null,SG:null,RK:null,Ap:null,Br:null,Af_:
null,Ano:null,Ph:null,At1:A.jV,AutoActions:A.jV,AAY:A.jV,AGd:A.jV,AGe:A.jV,Ahl:A.
jV,AGz:A.jV,AGA:A.jV,AAZ:A.jV,AGy:A.jV,AGD:A.jV,AAT:A.jV,AAU:A.jV,NoNaisIdListActions:
A.jV,NoTransponderListActions:A.jV,YoungNoTransponderListActions:A.jV,AaF:100,Ko:
0,AMm:75,ZA:3600,ATj:0,FP:5,Fy:0,KR:50000,Pc:0,AFv:0,Adv:0,Aqy:0,Aqx:0,AQ9:1,AQ8:
1,AjC:0,AQ_:1,Aw7:0,Ae5:0,Aqm:10,AT6:5,ADt:60,Avl:0,OG:1,WhereAbouts:0,Vs:0,Ahv:
0,AwZ:3,ABX:0,Al6:0,Aga:1,Ahw:0,Abx:0,ApZ:0,ANj:11,Breed:0,EartagNrAssignmentMode:
0,Aus:0,ABQ:0,ABP:0,Ib:5,AAS:2,Ap1:0,ANZ:2,AUR:0,D2:0,ALv:0,JB:0,Gender:2,WeightRecordingScope:
1,WeightRecordingMode:1,AnimalType:0,MassUnit:0,AutoRegistrationMode:0,RatingMode:
0,SyncState:0,OverlayMenu:0,TemperatureUnit:0,Language:0,MeasureState:0,ScanState:
0,KB:3,Aep:true,AQV:false,ApQ:true,Aqn:false,Amr:true,Hw:false,AUy:false,Ams:false
,AUP:false,Asd:false,ADz:false,Amd:false,UpdateActiveScreen:function(AI){if(this.
KB===AI)return;this.KB=AI;A.abo([this,this.ADN,this.A$6],0);},Y4:function(E){if(
this.K&&this.K.Y4)return this.K.Y4.apply(this,arguments);else return C.DeviceClass.
Bs8.apply(this,arguments);},Bs8:function(E){},A$6:function(Aq){this.Y4(Aq);},UpdateBatteryChargeState:
function(AI){if(this.AaF===AI)return;this.AaF=AI;A.abo([this,this.Avu,this.AxZ],
0);},AvQ:function(E){if(this.K&&this.K.AvQ)return this.K.AvQ.apply(this,arguments
);else return C.DeviceClass.Bti.apply(this,arguments);},Bti:function(E){A.ab5("%s"
,BC);},AxZ:function(Aq){this.AvQ(Aq);},UpdateChargeActive:function(AI){if(this.Amd===
AI)return;this.Amd=AI;A.abo([this,this.Avx,this.Ax0],0);},AEg:function(E){if(this.
K&&this.K.AEg)return this.K.AEg.apply(this,arguments);else return C.DeviceClass.
Bto.apply(this,arguments);},Bto:function(E){A.ab5("%s",EW);},Ax0:function(Aq){this.
AEg(Aq);},UpdateScanState:function(AI){var B;if(this.ScanState===AI)return;this.
ScanState=AI;A.abo([this,this.ARZ,this.AZt],0);A._GetAutoObject(C.Helper).Bzq(this
);},Ars:function(E){if(this.K&&this.K.Ars)return this.K.Ars.apply(this,arguments
);else return C.DeviceClass.Bt5.apply(this,arguments);},Bt5:function(E){A.ab5("%s"
,Hh);},AZt:function(Aq){this.Ars(Aq);},UpdateMeasureState:function(AI){if(this.MeasureState===
AI)return;this.MeasureState=AI;A.abo([this,this.ADV,this.AIc],0);},Awc:function(
E){if(this.K&&this.K.Awc)return this.K.Awc.apply(this,arguments);else return C.DeviceClass.
BtN.apply(this,arguments);},BtN:function(E){A.ab5("%s",I8);},AIc:function(Aq){this.
Awc(Aq);},UpdateTempValue:function(AI){if(this.Ko===AI)return;this.Ko=AI;A.abo([
this,this.ADY,this.AIe],0);},Awp:function(E){if(this.K&&this.K.Awp)return this.K.
Awp.apply(this,arguments);else return C.DeviceClass.Bt$.apply(this,arguments);},
Bt$:function(E){A.ab5("%s",IJ);},AIe:function(Aq){this.Awp(Aq);},And:function(E){
if(this.K&&this.K.And)return this.K.And.apply(this,arguments);else return C.DeviceClass.
BtH.apply(this,arguments);},BtH:function(E){},Bak:function(Aq){this.And(Aq);},Awq:
function(E){if(this.K&&this.K.Awq)return this.K.Awq.apply(this,arguments);else return C.
DeviceClass.Bua.apply(this,arguments);},Bua:function(E){},AsJ:function(Aq){this.
Awq(Aq);},AEe:function(E){if(this.K&&this.K.AEe)return this.K.AEe.apply(this,arguments
);else return C.DeviceClass.Btn.apply(this,arguments);},Btn:function(E){},Bac:function(
Aq){this.AEe(Aq);},AEQ:function(E){if(this.K&&this.K.AEQ)return this.K.AEQ.apply(
this,arguments);else return C.DeviceClass.BtP.apply(this,arguments);},BtP:function(
E){},AZn:function(Aq){this.AEQ(Aq);},UpdateMonitoring:function(AI){if(this.ADz===
AI)return;this.ADz=AI;A.abo([this,this.ARQ,this.AZn],0);},UpdateDataTable:function(
BaU){var B;switch(BaU){case 0:A.pe([B=this.Ap,B.Aj3],this);break;case 1:A.pe([B=
this.Br,B.Aj3],this);break;case 3:A.pe([B=this.Af_,B.Aj3],this);break;case 4:A.pe([
B=this.Ph,B.Aj3],this);break;case 2:A.ab5("%s",OW);break;default:A.ab5("%s%e",PW
,BaU);}},AwY:function(){if(this.K&&this.K.AwY)return this.K.AwY.apply(this,arguments
);else return C.DeviceClass.BuI.apply(this,arguments);},BuI:function(){},Ahp:function(
){if(this.K&&this.K.Ahp)return this.K.Ahp.apply(this,arguments);else return C.DeviceClass.
BuL.apply(this,arguments);},BuL:function(){},Ahm:function(){if(this.K&&this.K.Ahm
)return this.K.Ahm.apply(this,arguments);else return C.DeviceClass.BuJ.apply(this
,arguments);},BuJ:function(){},AnA:function(){if(this.K&&this.K.AnA)return this.
K.AnA.apply(this,arguments);else return C.DeviceClass.BuM.apply(this,arguments);
},BuM:function(){},UpdateLanguage:function(AI){if(this.Language===AI)return;this.
Language=AI;switch(AI){case 14:A._SetLanguage(1);break;case 13:A._SetLanguage(2);
break;case 6:A._SetLanguage(3);break;case 11:A._SetLanguage(4);break;case 10:A._SetLanguage(
5);break;case 12:A._SetLanguage(6);break;case 5:A._SetLanguage(7);break;case 3:A.
_SetLanguage(8);break;case 1:A._SetLanguage(9);break;case 8:A._SetLanguage(10);break;
case 4:A._SetLanguage(11);break;case 15:A._SetLanguage(13);break;case 9:A._SetLanguage(
15);break;case 2:A._SetLanguage(16);break;case 7:A._SetLanguage(17);break;case 16:
A._SetLanguage(18);break;default:A._SetLanguage(0);}A.abo([this,this.A72,this.Bak
],0);},UpdateTemperatureUnit:function(AI){if(this.TemperatureUnit===AI)return;this.
TemperatureUnit=AI;A.abo([this,this.Aq4,this.AsJ],0);},UpdateBrightness:function(
AI){if(this.AMm===AI)return;this.AMm=AI;A.abo([this,this.A7N,this.Bac],0);},SetSystemTime:
function(AhO){if(this.K&&this.K.SetSystemTime)return this.K.SetSystemTime.apply(
this,arguments);else return C.DeviceClass.BuG.apply(this,arguments);},BuG:function(
AhO){},AwS:function(){if(this.K&&this.K.AwS)return this.K.AwS.apply(this,arguments
);else return C.DeviceClass.A$V.apply(this,arguments);},A$V:function(){},AFJ:function(
){if(this.K&&this.K.AFJ)return this.K.AFJ.apply(this,arguments);else return C.DeviceClass.
A$T.apply(this,arguments);},A$T:function(){},Bm$:function(){},UpdateOverlayMenu:
function(AI){if(this.OverlayMenu===AI)return;this.OverlayMenu=AI;A.abo([this,this.
AvI,this.Ax7],0);},Dp:function(E){if(this.K&&this.K.Dp)return this.K.Dp.apply(this
,arguments);else return C.DeviceClass.Bt0.apply(this,arguments);},Bt0:function(E
){},Ax7:function(Aq){this.Dp(Aq);},Awv:function(E){if(this.K&&this.K.Awv)return this.
K.Awv.apply(this,arguments);else return C.DeviceClass.Buj.apply(this,arguments);
},Buj:function(E){},Bav:function(Aq){this.Awv(Aq);},UpdateUnderTemp:function(AI){
if(this.ZA===AI)return;this.ZA=AI;A.abo([this,this.A8v,this.Bav],0);},UpdateSyncState:
function(AI){if(this.SyncState===AI)return;this.SyncState=AI;A.abo([this,this.AR1
,this.AZv],0);},AbP:function(E){if(this.K&&this.K.AbP)return this.K.AbP.apply(this
,arguments);else return C.DeviceClass.Bt_.apply(this,arguments);},Bt_:function(E
){A.ab5("%s",PX);},AZv:function(Aq){this.AbP(Aq);},ACi:function(){if(this.K&&this.
K.ACi)return this.K.ACi.apply(this,arguments);else return C.DeviceClass.Bs0.apply(
this,arguments);},Bs0:function(){return A.jV;},UpdatePopup:function(JS,A0e,A0a,A0h
){this.A6(JS,A0e,A0a,A0h,[this,this.By_]);},PopupStateChanged:function(JS,Ae){if(
this.K&&this.K.PopupStateChanged)return this.K.PopupStateChanged.apply(this,arguments
);else return C.DeviceClass.Buw.apply(this,arguments);},Buw:function(JS,Ae){},AFg:
function(E){if(this.K&&this.K.AFg)return this.K.AFg.apply(this,arguments);else return C.
DeviceClass.Bul.apply(this,arguments);},Bul:function(E){},Baw:function(Aq){this.
AFg(Aq);},UpdateVibrationOnKeypressEnabled:function(AI){if(this.Asd===AI)return;
this.Asd=AI;A.abo([this,this.A8w,this.Baw],0);},AeL:function(E){if(this.K&&this.
K.AeL)return this.K.AeL.apply(this,arguments);else return C.DeviceClass.Buk.apply(
this,arguments);},Buk:function(E){},AIf:function(Aq){this.AeL(Aq);},UpdateVibrationOn:
function(Bbk){if(this.AUP===Bbk)return;this.AUP=Bbk;A.abo([this,this.ADZ,this.AIf
],0);},A6:function(JS,A0e,A0a,A0h,Bwa){var Af0=A._NewObject(C.PopupContext,0);Af0.
Id=JS;Af0.Show=A0e;Af0.Akl=A0a;Af0.AkF=A0h;Af0.AFo=Bwa;this.Ano.Trigger(Af0,false
);},By_:function(G){var As=(C.PopupContext.isPrototypeOf(G)?G:null);if(!!As)this.
PopupStateChanged(As.Id,As.PopupState);},Awm:function(E){if(this.K&&this.K.Awm)return this.
K.Awm.apply(this,arguments);else return C.DeviceClass.Bt4.apply(this,arguments);
},Bt4:function(E){},AZs:function(Aq){this.Awm(Aq);},UpdateRatingMode:function(AI
){if(this.RatingMode===AI)return;this.RatingMode=AI;A.abo([this,this.ARY,this.AZs
],0);},AeC:function(E){if(this.K&&this.K.AeC)return this.K.AeC.apply(this,arguments
);else return C.DeviceClass.Btz.apply(this,arguments);},Btz:function(E){},AsI:function(
Aq){this.AeC(Aq);},UpdateFlashLightOn:function(Ba3){if(this.Ams===Ba3)return;this.
Ams=Ba3;A.abo([this,this.Aq1,this.AsI],0);},Ua:function(E){if(this.K&&this.K.Ua)
return this.K.Ua.apply(this,arguments);else return C.DeviceClass.Bud.apply(this,
arguments);},Bud:function(E){},AZw:function(Aq){this.Ua(Aq);},UpdateTopLightOn:function(
Bbf){if(this.AUy===Bbf)return;this.AUy=Bbf;A.abo([this,this.AR3,this.AZw],0);},Wh:
function(E){if(this.K&&this.K.Wh)return this.K.Wh.apply(this,arguments);else return C.
DeviceClass.Bt3.apply(this,arguments);},Bt3:function(E){},Bu0:function(Aq){this.
Wh(Aq);},UpdateRGBTopLight:function(Bba){if(this.ATj===Bba)return;this.ATj=Bba;A.
abo([this,this.BjW,this.Bu0],0);},AvP:function(E){if(this.K&&this.K.AvP)return this.
K.AvP.apply(this,arguments);else return C.DeviceClass.Bth.apply(this,arguments);
},Bth:function(E){},BuT:function(Aq){this.AvP(Aq);},UpdateAutoRegistrationMode:function(
BaQ){if(this.AutoRegistrationMode===BaQ)return;this.AutoRegistrationMode=BaQ;A.abo([
this,this.Bjl,this.BuT],0);},Art:function(E){if(this.K&&this.K.Art)return this.K.
Art.apply(this,arguments);else return C.DeviceClass.Bt6.apply(this,arguments);},
Bt6:function(E){A.ab5("%s",CL);},AZu:function(Aq){this.Art(Aq);},UpdateScanTransponder:
function(JS,Bbi,Bbh){if(((this.OM.Id===JS)&&(this.OM.TransponderType===Bbi))&&(this.
OM.TransponderProtocol===Bbh))return;this.OM.OnSetId(JS);this.OM.ASY(Bbi);this.OM.
ASX(Bbh);A.abo([this,this.AR0,this.AZu],0);},PJ:function(E){if(this.K&&this.K.PJ
)return this.K.PJ.apply(this,arguments);else return C.DeviceClass.Btr.apply(this
,arguments);},Btr:function(E){},Acw:function(Aq){this.PJ(Aq);},UpdateDigitsID:function(
BaY){if(this.FP===BaY)return;this.FP=BaY;A.abo([this,this.AbD,this.Acw],0);},QS:
function(E){if(this.K&&this.K.QS)return this.K.QS.apply(this,arguments);else return C.
DeviceClass.BtZ.apply(this,arguments);},BtZ:function(E){},Acx:function(Aq){this.
QS(Aq);},UpdateOffsetID:function(Ba9){if(this.Fy===Ba9)return;this.Fy=Ba9;A.abo([
this,this.AbE,this.Acx],0);},AFk:function(E){if(this.K&&this.K.AFk)return this.K.
AFk.apply(this,arguments);else return C.DeviceClass.Bus.apply(this,arguments);},
Bus:function(E){A.ab5("%s",E4);},AIg:function(Aq){this.AFk(Aq);},UpdateWeightValue:
function(AI){if(this.KR===AI)return;this.KR=AI;A.abo([this,this.AD0,this.AIg],0);
},Av$:function(E){if(this.K&&this.K.Av$)return this.K.Av$.apply(this,arguments);
else return C.DeviceClass.BtK.apply(this,arguments);},BtK:function(E){},AZm:function(
Aq){this.Av$(Aq);},UpdateMassUnit:function(AI){if(this.MassUnit===AI)return;this.
MassUnit=AI;A.abo([this,this.ARP,this.AZm],0);},Aq7:function(E){if(this.K&&this.
K.Aq7)return this.K.Aq7.apply(this,arguments);else return C.DeviceClass.A$P.apply(
this,arguments);},A$P:function(E){},A$3:function(Aq){this.Aq7(Aq);},Aq8:function(
E){if(this.K&&this.K.Aq8)return this.K.Aq8.apply(this,arguments);else return C.DeviceClass.
A$Q.apply(this,arguments);},A$Q:function(E){},AZg:function(Aq){this.Aq8(Aq);},UpdateActiveActions:
function(AI){if(this.Pc===AI)return;this.Pc=AI;A.abo([this,this.A7x,this.A$3],0);
},UpdateActiveActionsOrder:function(AI){if(this.At1===AI)return;this.At1=AI;A.abo([
this,this.ARB,this.AZg],0);},Aj7:function(E){if(this.K&&this.K.Aj7)return this.K.
Aj7.apply(this,arguments);else return C.DeviceClass.A$R.apply(this,arguments);},
A$R:function(E){},Baa:function(Aq){this.Aj7(Aq);},UpdateAutoActions:function(AI){
if(this.AutoActions===AI)return;this.AutoActions=AI;A.abo([this,this.A7J,this.Baa
],0);},AF8:function(){if(this.K&&this.K.AF8)return this.K.AF8.apply(this,arguments
);else return C.DeviceClass.BuK.apply(this,arguments);},BuK:function(){},Ar7:function(
){if(this.K&&this.K.Ar7)return this.K.Ar7.apply(this,arguments);else return C.DeviceClass.
BuO.apply(this,arguments);},BuO:function(){},DT:function(E){if(this.K&&this.K.DT
)return this.K.DT.apply(this,arguments);else return C.DeviceClass.Bte.apply(this
,arguments);},Bte:function(E){},BuS:function(Aq){this.DT(Aq);},UpdateAnimalType:
function(Ee){if(this.AnimalType===Ee)return;this.AnimalType=Ee;A.abo([this,this.
PH,this.BuS],0);},Aww:function(E){if(this.K&&this.K.Aww)return this.K.Aww.apply(
this,arguments);else return C.DeviceClass.Buq.apply(this,arguments);},Buq:function(
E){},BaB:function(Aq){this.Aww(Aq);},UpdateWeightRecordingMode:function(Bbm){if(
this.WeightRecordingMode===Bbm)return;this.WeightRecordingMode=Bbm;A.abo([this,this.
A8E,this.BaB],0);},AEW:function(E){if(this.K&&this.K.AEW)return this.K.AEW.apply(
this,arguments);else return C.DeviceClass.Bt1.apply(this,arguments);},Bt1:function(
E){A.ab5("%s",Lq);},AZq:function(Aq){this.AEW(Aq);},UpdatePredictedTempValue:function(
AI){if(this.AFv===AI)return;this.AFv=AI;A.abo([this,this.ARV,this.AZq],0);},Sw:function(
L1){if(this.K&&this.K.Sw)return this.K.Sw.apply(this,arguments);else return C.DeviceClass.
BuF.apply(this,arguments);},BuF:function(L1){},AEm:function(E){if(this.K&&this.K.
AEm)return this.K.AEm.apply(this,arguments);else return C.DeviceClass.Btq.apply(
this,arguments);},Btq:function(E){},AH$:function(Aq){this.AEm(Aq);},UpdateDemoMode:
function(AI){if(this.Hw===AI)return;this.Hw=AI;A.abo([this,this.ADS,this.AH$],0);
},AD5:function(E){if(this.K&&this.K.AD5)return this.K.AD5.apply(this,arguments);
else return C.DeviceClass.Bs9.apply(this,arguments);},Bs9:function(E){},A$7:function(
Aq){this.AD5(Aq);},UpdateAgeRegistration:function(Ba8){if(this.Adv===Ba8)return;
this.Adv=Ba8;A.abo([this,this.A7C,this.A$7],0);},Awx:function(E){if(this.K&&this.
K.Awx)return this.K.Awx.apply(this,arguments);else return C.DeviceClass.Bur.apply(
this,arguments);},Bur:function(E){},BaC:function(Aq){this.Awx(Aq);},UpdateWeightRecordingScope:
function(Bbb){if(this.WeightRecordingScope===Bbb)return;this.WeightRecordingScope=
Bbb;A.abo([this,this.A8F,this.BaC],0);},JI:function(E){if(this.K&&this.K.JI)return this.
K.JI.apply(this,arguments);else return C.DeviceClass.BtD.apply(this,arguments);}
,BtD:function(E){},AZl:function(Aq){this.JI(Aq);},UpdateGender:function(LY){if(this.
Gender===LY)return;this.Gender=LY;A.abo([this,this.Wb,this.AZl],0);},Arl:function(
E){if(this.K&&this.K.Arl)return this.K.Arl.apply(this,arguments);else return C.DeviceClass.
BtF.apply(this,arguments);},BtF:function(E){},Ax3:function(Aq){this.Arl(Aq);},UpdateIDLastUsedMale:
function(Rb){if(this.Aqy===Rb)return;this.Aqy=Rb;A.abo([this,this.AvC,this.Ax3],
0);},Ark:function(E){if(this.K&&this.K.Ark)return this.K.Ark.apply(this,arguments
);else return C.DeviceClass.BtE.apply(this,arguments);},BtE:function(E){},Ax2:function(
Aq){this.Ark(Aq);},UpdateIDLastUsedFemale:function(Rb){if(this.Aqx===Rb)return;this.
Aqx=Rb;A.abo([this,this.AvB,this.Ax2],0);},AbG:function(E){if(this.K&&this.K.AbG
)return this.K.AbG.apply(this,arguments);else return C.DeviceClass.Btc.apply(this
,arguments);},Btc:function(E){},AH9:function(Aq){this.AbG(Aq);},UpdateAnimalListContent:
function(AI){if(this.JB===AI)return;this.JB=AI;A.abo([this,this.ADP,this.AH9],0);
},AD7:function(E){if(this.K&&this.K.AD7)return this.K.AD7.apply(this,arguments);
else return C.DeviceClass.Bs_.apply(this,arguments);},Bs_:function(E){},A$8:function(
Aq){this.AD7(Aq);},UpdateAlarmListAction:function(AI){if(this.ALv===AI)return;this.
ALv=AI;A.abo([this,this.A7E,this.A$8],0);},AEp:function(E){if(this.K&&this.K.AEp
)return this.K.AEp.apply(this,arguments);else return C.DeviceClass.Bty.apply(this
,arguments);},Bty:function(E){},Baf:function(Aq){this.AEp(Aq);},UpdateFlashLightInMeasureState:
function(Ba4){if(this.Amr===Ba4)return;this.Amr=Ba4;A.abo([this,this.A7Q,this.Baf
],0);},Aey:function(E){if(this.K&&this.K.Aey)return this.K.Aey.apply(this,arguments
);else return C.DeviceClass.Btb.apply(this,arguments);},Btb:function(E){},AH8:function(
Aq){this.Aey(Aq);},UpdateAnimalInfoContent:function(AI){if(this.D2===AI)return;this.
D2=AI;A.abo([this,this.ADO,this.AH8],0);},AFj:function(E){if(this.K&&this.K.AFj)
return this.K.AFj.apply(this,arguments);else return C.DeviceClass.Bum.apply(this
,arguments);},Bum:function(E){},Bax:function(Aq){this.AFj(Aq);},UpdateWatchListAction:
function(AI){if(this.AUR===AI)return;this.AUR=AI;A.abo([this,this.A8A,this.Bax],
0);},AEs:function(E){if(this.K&&this.K.AEs)return this.K.AEs.apply(this,arguments
);else return C.DeviceClass.BtA.apply(this,arguments);},BtA:function(E){},Bah:function(
Aq){this.AEs(Aq);},UpdateFreshCowListAction:function(AI){if(this.ANZ===AI)return;
this.ANZ=AI;A.abo([this,this.A7S,this.Bah],0);},ResetActiveActions:function(G){if(
this.K&&this.K.ResetActiveActions)return this.K.ResetActiveActions.apply(this,arguments
);else return C.DeviceClass.Bux.apply(this,arguments);},Bux:function(G){},BEI:function(
s){this.ResetActiveActions(s);},ResetAutoActions:function(G){if(this.K&&this.K.ResetAutoActions
)return this.K.ResetAutoActions.apply(this,arguments);else return C.DeviceClass.
Buz.apply(this,arguments);},Buz:function(G){},BEK:function(s){this.ResetAutoActions(
s);},AvN:function(E){if(this.K&&this.K.AvN)return this.K.AvN.apply(this,arguments
);else return C.DeviceClass.Btf.apply(this,arguments);},Btf:function(E){},A$_:function(
Aq){this.AvN(Aq);},Arv:function(E){if(this.K&&this.K.Arv)return this.K.Arv.apply(
this,arguments);else return C.DeviceClass.Bub.apply(this,arguments);},Bub:function(
E){},Bas:function(Aq){this.Arv(Aq);},Arw:function(E){if(this.K&&this.K.Arw)return this.
K.Arw.apply(this,arguments);else return C.DeviceClass.Buc.apply(this,arguments);
},Buc:function(E){},Bat:function(Aq){this.Arw(Aq);},ArS:function(G){if(this.K&&this.
K.ArS)return this.K.ArS.apply(this,arguments);else return C.DeviceClass.BuC.apply(
this,arguments);},BuC:function(G){},BEN:function(s){this.ArS(s);},UpdateTemperaturesLowString:
function(AI){if(this.AGe===AI)return;this.AGe=AI;A.abo([this,this.A8r,this.Bat],
0);},UpdateTemperaturesHighString:function(AI){if(this.AGd===AI)return;this.AGd=
AI;A.abo([this,this.A8q,this.Bas],0);},UpdateAnimalTypesString:function(AI){if(this.
AAY===AI)return;this.AAY=AI;A.abo([this,this.A7H,this.A$_],0);},Av5:function(E){
if(this.K&&this.K.Av5)return this.K.Av5.apply(this,arguments);else return C.DeviceClass.
BtC.apply(this,arguments);},BtC:function(E){},Baj:function(Aq){this.Av5(Aq);},UpdateFreshCowsHideMeasured:
function(AI){if(this.Aqn===AI)return;this.Aqn=AI;A.abo([this,this.A7U,this.Baj],
0);},Arp:function(E){if(this.K&&this.K.Arp)return this.K.Arp.apply(this,arguments
);else return C.DeviceClass.BtV.apply(this,arguments);},BtV:function(E){},Bao:function(
Aq){this.Arp(Aq);},UpdateNaisIdLastUsedMale:function(W3){if(this.ADB===W3)return;
this.ADB=W3;A.abo([this,this.A7_,this.Bao],0);},Aro:function(E){if(this.K&&this.
K.Aro)return this.K.Aro.apply(this,arguments);else return C.DeviceClass.BtU.apply(
this,arguments);},BtU:function(E){},Ban:function(Aq){this.Aro(Aq);},UpdateNaisIdLastUsedFemale:
function(W3){if(this.ADA===W3)return;this.ADA=W3;A.abo([this,this.A79,this.Ban],
0);},Awg:function(E){if(this.K&&this.K.Awg)return this.K.Awg.apply(this,arguments
);else return C.DeviceClass.BtS.apply(this,arguments);},BtS:function(E){},Ax5:function(
Aq){this.Awg(Aq);},UpdateNaisIdIncrementMale:function(Ak1){if(this.AQ9===Ak1)return;
this.AQ9=Ak1;A.abo([this,this.AvF,this.Ax5],0);},Awf:function(E){if(this.K&&this.
K.Awf)return this.K.Awf.apply(this,arguments);else return C.DeviceClass.BtR.apply(
this,arguments);},BtR:function(E){},Ax4:function(Aq){this.Awf(Aq);},UpdateNaisIdIncrementFemale:
function(Ak1){if(this.AQ8===Ak1)return;this.AQ8=Ak1;A.abo([this,this.AvE,this.Ax4
],0);},UpdateFirmware:function(){if(this.K&&this.K.UpdateFirmware)return this.K.
UpdateFirmware.apply(this,arguments);else return C.DeviceClass.A$W.apply(this,arguments
);},A$W:function(){},Am_:function(E){if(this.K&&this.K.Am_)return this.K.Am_.apply(
this,arguments);else return C.DeviceClass.Btk.apply(this,arguments);},Btk:function(
E){},Bab:function(Aq){this.Am_(Aq);},UpdateBootloaderMessage:function(AI){if(this.
Ap1===AI)return;this.Ap1=AI;A.abo([this,this.A7M,this.Bab],0);},AD2:function(E){
if(this.K&&this.K.AD2)return this.K.AD2.apply(this,arguments);else return C.DeviceClass.
Bs4.apply(this,arguments);},Bs4:function(E){},A$1:function(Aq){this.AD2(Aq);},UpdateActionListAction:
function(AI){if(this.AAS===AI)return;this.AAS=AI;A.abo([this,this.A7v,this.A$1],
0);},AvL:function(E){if(this.K&&this.K.AvL)return this.K.AvL.apply(this,arguments
);else return C.DeviceClass.Bs5.apply(this,arguments);},Bs5:function(E){},A$2:function(
Aq){this.AvL(Aq);},UpdateActionListHideMeasured:function(AI){if(this.ApQ===AI)return;
this.ApQ=AI;A.abo([this,this.A7w,this.A$2],0);},T6:function(E){if(this.K&&this.K.
T6)return this.K.T6.apply(this,arguments);else return C.DeviceClass.Bta.apply(this
,arguments);},Bta:function(E){},Aoa:function(Aq){this.T6(Aq);},UpdateAnimalIdGenerationMethod:
function(Bbr){if(this.Ib===Bbr)return;this.Ib=Bbr;A.abo([this,this.Am2,this.Aoa]
,0);},AvY:function(E){if(this.K&&this.K.AvY)return this.K.AvY.apply(this,arguments
);else return C.DeviceClass.Bts.apply(this,arguments);},Bts:function(E){},AZj:function(
Aq){this.AvY(Aq);},UpdateDirectionOfCountingFemale:function(AkV){if(this.ABP===AkV
)return;this.ABP=AkV;A.abo([this,this.ARI,this.AZj],0);},AvZ:function(E){if(this.
K&&this.K.AvZ)return this.K.AvZ.apply(this,arguments);else return C.DeviceClass.
Btt.apply(this,arguments);},Btt:function(E){},AZk:function(Aq){this.AvZ(Aq);},UpdateDirectionOfCountingMale:
function(AkV){if(this.ABQ===AkV)return;this.ABQ=AkV;A.abo([this,this.ARJ,this.AZk
],0);},Av0:function(E){if(this.K&&this.K.Av0)return this.K.Av0.apply(this,arguments
);else return C.DeviceClass.Btu.apply(this,arguments);},Btu:function(E){},AIa:function(
Aq){this.Av0(Aq);},UpdateDirectionOfCountingUnisex:function(AkV){if(this.Aus===AkV
)return;this.Aus=AkV;A.abo([this,this.ADT,this.AIa],0);},Arm:function(E){if(this.
K&&this.K.Arm)return this.K.Arm.apply(this,arguments);else return C.DeviceClass.
BtG.apply(this,arguments);},BtG:function(E){},Aob:function(Aq){this.Arm(Aq);},UpdateIDLastUsedUnisex:
function(Rb){if(this.AjC===Rb)return;this.AjC=Rb;A.abo([this,this.Am5,this.Aob],
0);},Arq:function(E){if(this.K&&this.K.Arq)return this.K.Arq.apply(this,arguments
);else return C.DeviceClass.BtW.apply(this,arguments);},BtW:function(E){},AZo:function(
Aq){this.Arq(Aq);},UpdateNaisIdLastUsedUnisex:function(W3){if(this.Avp===W3)return;
this.Avp=W3;A.abo([this,this.ARR,this.AZo],0);},Awh:function(E){if(this.K&&this.
K.Awh)return this.K.Awh.apply(this,arguments);else return C.DeviceClass.BtT.apply(
this,arguments);},BtT:function(E){},Ax6:function(Aq){this.Awh(Aq);},UpdateNaisIdIncrementUnisex:
function(Ak1){if(this.AQ_===Ak1)return;this.AQ_=Ak1;A.abo([this,this.AvG,this.Ax6
],0);},Aj_:function(E){if(this.K&&this.K.Aj_)return this.K.Aj_.apply(this,arguments
);else return C.DeviceClass.Btw.apply(this,arguments);},Btw:function(E){},Ax1:function(
Aq){this.Aj_(Aq);},UpdateEartagNrAssignmentMode:function(AkW){if(this.EartagNrAssignmentMode===
AkW)return;this.EartagNrAssignmentMode=AkW;A.abo([this,this.AvA,this.Ax1],0);},NT:
function(E){if(this.K&&this.K.NT)return this.K.NT.apply(this,arguments);else return C.
DeviceClass.Btm.apply(this,arguments);},Btm:function(E){},BuV:function(Aq){this.
NT(Aq);},UpdateBreed:function(AcE){if(this.Breed===AcE)return;this.Breed=AcE;A.abo([
this,this.Avw,this.BuV],0);},AEN:function(E){if(this.K&&this.K.AEN)return this.K.
AEN.apply(this,arguments);else return C.DeviceClass.BtO.apply(this,arguments);},
BtO:function(E){},BuY:function(Aq){this.AEN(Aq);},UpdateMiddlewareVersions:function(
P5,AZ8,AZ9,A0d,AZW){this.Sk.OnSetTimestamp(P5);this.Sk.AEI(AZ8);this.Sk.AEP(AZ9);
this.Sk.AEZ(A0d);this.Sk.AEk(AZW);A.abo([this,this.BjR,this.BuY],0);},AEH:function(
E){if(this.K&&this.K.AEH)return this.K.AEH.apply(this,arguments);else return C.DeviceClass.
BtI.apply(this,arguments);},BtI:function(E){},BuX:function(Aq){this.AEH(Aq);},UpdateMainboardVersions:
function(P5,AZ6,AZ7,AZ5,A0j,A0k,A0i){this.QM.OnSetTimestamp(P5);this.QM.AEF(AZ6);
this.QM.AEG(AZ7);this.QM.AEE(AZ5);this.QM.AFb(A0j);this.QM.AFc(A0k);this.QM.AFa(
A0i);A.abo([this,this.BjP,this.BuX],0);},AFd:function(E){if(this.K&&this.K.AFd)return this.
K.AFd.apply(this,arguments);else return C.DeviceClass.Bue.apply(this,arguments);
},Bue:function(E){},Bu4:function(Aq){this.AFd(Aq);},UpdateTorchboardVersions:function(
P5,AZ6,AZ7,AZ5,A0j,A0k,A0i){this.SG.OnSetTimestamp(P5);this.SG.AEF(AZ6);this.SG.
AEG(AZ7);this.SG.AEE(AZ5);this.SG.AFb(A0j);this.SG.AFc(A0k);this.SG.AFa(A0i);A.abo([
this,this.Bkb,this.Bu4],0);},AEa:function(E){if(this.K&&this.K.AEa)return this.K.
AEa.apply(this,arguments);else return C.DeviceClass.Btl.apply(this,arguments);},
Btl:function(E){},BuU:function(Aq){this.AEa(Aq);},UpdateBootloaderVersions:function(
P5,AZ8,AZ9,A0d,AZW){this.RK.OnSetTimestamp(P5);this.RK.AEI(AZ8);this.RK.AEP(AZ9);
this.RK.AEZ(A0d);this.RK.AEk(AZW);A.abo([this,this.Bjo,this.BuU],0);},AEn:function(
E){if(this.K&&this.K.AEn)return this.K.AEn.apply(this,arguments);else return C.DeviceClass.
Btv.apply(this,arguments);},Btv:function(E){},Bae:function(Aq){this.AEn(Aq);},UpdateDryCowListAction:
function(AI){if(this.ANj===AI)return;this.ANj=AI;A.abo([this,this.A7O,this.Bae],
0);},AI2:function(AZY){if(this.K&&this.K.AI2)return this.K.AI2.apply(this,arguments
);else return C.DeviceClass.Bve.apply(this,arguments);},Bve:function(AZY){return false;
},AD$:function(E){if(this.K&&this.K.AD$)return this.K.AD$.apply(this,arguments);
else return C.DeviceClass.Btj.apply(this,arguments);},Btj:function(E){},AH_:function(
Aq){this.AD$(Aq);},UpdateBirthListView:function(AI){if(this.ApZ===AI)return;this.
ApZ=AI;A.abo([this,this.ADQ,this.AH_],0);},BatchResetBirthNoticePending:function(
){var B8=A._NewObject(C.Animal,0);var P;var AiE=0;var AcZ=A._GetAutoObject(C.Device
).Ap.Filter;var Ba=A._GetAutoObject(C.Helper).AN4();A._GetAutoObject(C.Device).Ap.
Bi(Ba);for(P=0;P<A._GetAutoObject(C.Device).Ap.Cb();P++){B8.EC(P,A._GetAutoObject(
C.Device).Ap);B8.AeF(false);B8.Ck(A._GetAutoObject(C.Device).Ap);AiE++;}A._GetAutoObject(
C.Device).Ap.Bi(AcZ);return AiE;},UpdateTransferProgress:function(AI){if(this.Aw7===
AI)return;this.Aw7=AI;A.abo([this,this.AR4,this.AZx],0);},AFe:function(E){if(this.
K&&this.K.AFe)return this.K.AFe.apply(this,arguments);else return C.DeviceClass.
Buf.apply(this,arguments);},Buf:function(E){A.ab5("%s",PY);},AZx:function(Aq){this.
AFe(Aq);},UpdateTransferTarget:function(AI){if(this.Ae5===AI)return;this.Ae5=AI;
A.abo([this,this.A8u,this.Bau],0);},Arx:function(E){if(this.K&&this.K.Arx)return this.
K.Arx.apply(this,arguments);else return C.DeviceClass.Bug.apply(this,arguments);
},Bug:function(E){A.ab5("%s",Ks);},Bau:function(Aq){this.Arx(Aq);},Ar6:function(
){if(this.K&&this.K.Ar6)return this.K.Ar6.apply(this,arguments);else return C.DeviceClass.
BuN.apply(this,arguments);},BuN:function(){},Awl:function(E){if(this.K&&this.K.Awl
)return this.K.Awl.apply(this,arguments);else return C.DeviceClass.Bt2.apply(this
,arguments);},Bt2:function(E){},AZr:function(Aq){this.Awl(Aq);},UpdatePremisesID:
function(Rb){if(this.Ug===Rb)return;this.Ug=Rb;A.abo([this,this.ARW,this.AZr],0);
},Awe:function(E){if(this.K&&this.K.Awe)return this.K.Awe.apply(this,arguments);
else return C.DeviceClass.BtQ.apply(this,arguments);},BtQ:function(E){},AId:function(
Aq){this.Awe(Aq);},UpdateMotherSelectionDriedOffFilter:function(AI){if(this.Abx===
AI)return;this.Abx=AI;A.abo([this,this.ADX,this.AId],0);},AEt:function(E){if(this.
K&&this.K.AEt)return this.K.AEt.apply(this,arguments);else return C.DeviceClass.
BtB.apply(this,arguments);},BtB:function(E){},Bai:function(Aq){this.AEt(Aq);},UpdateFreshCowSpan:
function(AI){if(this.Aqm===AI)return;this.Aqm=AI;A.abo([this,this.A7T,this.Bai],
0);},UpdateUSBState:function(Bbj){if(this.Ahw===Bbj)return;this.Ahw=Bbj;A.abo([this
,this.Wc,this.WW],0);},AFf:function(E){if(this.K&&this.K.AFf)return this.K.AFf.apply(
this,arguments);else return C.DeviceClass.Bui.apply(this,arguments);},Bui:function(
E){A.ab5("%s",EW);},WW:function(Aq){this.AFf(Aq);},Anw:function(AhJ){if(this.K&&
this.K.Anw)return this.K.Anw.apply(this,arguments);else return C.DeviceClass.BuH.
apply(this,arguments);},BuH:function(AhJ){return A._NewObject(C.Ajl,0);},AqK:function(
){if(this.K&&this.K.AqK)return this.K.AqK.apply(this,arguments);else return C.DeviceClass.
Bs3.apply(this,arguments);},Bs3:function(){return false;},Ap_:function(Ni){if(this.
K&&this.K.Ap_)return this.K.Ap_.apply(this,arguments);else return C.DeviceClass.
BsY.apply(this,arguments);},BsY:function(Ni){},AE2:function(E){if(this.K&&this.K.
AE2)return this.K.AE2.apply(this,arguments);else return C.DeviceClass.Bt7.apply(
this,arguments);},Bt7:function(E){},Bu1:function(Aq){this.AE2(Aq);},UpdateSerialNumber:
function(AI){if(this.Ahl===AI)return;this.Ahl=AI;A.abo([this,this.Bj2,this.Bu1],
0);},AvM:function(E){if(this.K&&this.K.AvM)return this.K.AvM.apply(this,arguments
);else return C.DeviceClass.Bs$.apply(this,arguments);},Bs$:function(E){},AZh:function(
Aq){this.AvM(Aq);},UpdateAnimalIdAutoGenerationMethod:function(Bbq){if(this.Aga===
Bbq)return;this.Aga=Bbq;A.abo([this,this.ARC,this.AZh],0);},ABB:function(){return false;
},AFK:function(){return false;},AE4:function(E){if(this.K&&this.K.AE4)return this.
K.AE4.apply(this,arguments);else return C.DeviceClass.Bt8.apply(this,arguments);
},Bt8:function(E){},Bar:function(Aq){this.AE4(Aq);},UpdateShutdownTimer:function(
AI){if(this.AT6===AI)return;this.AT6=AI;A.abo([this,this.A8n,this.Bar],0);},Arb:
function(E){if(this.K&&this.K.Arb)return this.K.Arb.apply(this,arguments);else return C.
DeviceClass.Btd.apply(this,arguments);},Btd:function(E){},A$9:function(Aq){this.
Arb(Aq);},UpdateAnimalListInfoItemMode:function(AI){if(this.Al6===AI)return;this.
Al6=AI;A.abo([this,this.A7F,this.A$9],0);},ArT:function(G){if(this.K&&this.K.ArT
)return this.K.ArT.apply(this,arguments);else return C.DeviceClass.BuD.apply(this
,arguments);},BuD:function(G){},BEO:function(s){this.ArT(s);},ArA:function(E){if(
this.K&&this.K.ArA)return this.K.ArA.apply(this,arguments);else return C.DeviceClass.
Buo.apply(this,arguments);},Buo:function(E){},Baz:function(Aq){this.ArA(Aq);},ArB:
function(E){if(this.K&&this.K.ArB)return this.K.ArB.apply(this,arguments);else return C.
DeviceClass.Bup.apply(this,arguments);},Bup:function(E){},BaA:function(Aq){this.
ArB(Aq);},UpdateWeightGainsLowString:function(AI){if(this.AGA===AI)return;this.AGA=
AI;A.abo([this,this.A8D,this.BaA],0);},UpdateWeightGainsHighString:function(AI){
if(this.AGz===AI)return;this.AGz=AI;A.abo([this,this.A8C,this.Baz],0);},AvO:function(
E){if(this.K&&this.K.AvO)return this.K.AvO.apply(this,arguments);else return C.DeviceClass.
Btg.apply(this,arguments);},Btg:function(E){},A$$:function(Aq){this.AvO(Aq);},UpdateAnimalTypesWeightGainsString:
function(AI){if(this.AAZ===AI)return;this.AAZ=AI;A.abo([this,this.A7I,this.A$$],
0);},Arz:function(E){if(this.K&&this.K.Arz)return this.K.Arz.apply(this,arguments
);else return C.DeviceClass.Bun.apply(this,arguments);},Bun:function(E){},Bay:function(
Aq){this.Arz(Aq);},ArC:function(E){if(this.K&&this.K.ArC)return this.K.ArC.apply(
this,arguments);else return C.DeviceClass.But.apply(this,arguments);},But:function(
E){},BaD:function(Aq){this.ArC(Aq);},UpdateWeightValueBirthString:function(AI){if(
this.AGD===AI)return;this.AGD=AI;A.abo([this,this.A8G,this.BaD],0);},UpdateWeightGainsAverageString:
function(AI){if(this.AGy===AI)return;this.AGy=AI;A.abo([this,this.A8B,this.Bay],
0);},Av1:function(E){if(this.K&&this.K.Av1)return this.K.Av1.apply(this,arguments
);else return C.DeviceClass.Btx.apply(this,arguments);},Btx:function(E){},BuW:function(
Aq){this.Av1(Aq);},UpdateEvaluationAnimalType:function(Ee){if(this.ABX===Ee)return;
this.ABX=Ee;A.abo([this,this.Bjy,this.BuW],0);},UpdateStartScreen:function(AI){if(
this.AwZ===AI)return;this.AwZ=AI;A.abo([this,this.Bj3,this.Bu2],0);},Awo:function(
E){if(this.K&&this.K.Awo)return this.K.Awo.apply(this,arguments);else return C.DeviceClass.
Bt9.apply(this,arguments);},Bt9:function(E){},Bu2:function(Aq){this.Awo(Aq);},ADa:
function(){if(this.K&&this.K.ADa)return this.K.ADa.apply(this,arguments);else return C.
DeviceClass.Bs1.apply(this,arguments);},Bs1:function(){return 1;},ADb:function(){
if(this.K&&this.K.ADb)return this.K.ADb.apply(this,arguments);else return C.DeviceClass.
Bs2.apply(this,arguments);},Bs2:function(){return 1;},GetCommitCount:function(){
return 1995;},GetCommitEpoch:function(){return 1708590020;},GetCommitHash:function(
){return A.kR.Bgw;},GetVersionMajor:function(){return 0;},GetVersionMinor:function(
){return 9;},GetVersionRev:function(){return 9;},AEM:function(E){if(this.K&&this.
K.AEM)return this.K.AEM.apply(this,arguments);else return C.DeviceClass.BtM.apply(
this,arguments);},BtM:function(E){},Bam:function(Aq){this.AEM(Aq);},UpdateMaximumAgeNewOnFarm:
function(AI){if(this.ADt===AI)return;this.ADt=AI;A.abo([this,this.A78,this.Bam],
0);},Awu:function(E){if(this.K&&this.K.Awu)return this.K.Awu.apply(this,arguments
);else return C.DeviceClass.Buh.apply(this,arguments);},Buh:function(E){},AZy:function(
Aq){this.Awu(Aq);},UpdateTransponderAssignmentIdChangeMethod:function(Bbg){if(this.
Ahv===Bbg)return;this.Ahv=Bbg;A.abo([this,this.AR5,this.AZy],0);},BatchResetPurchasedNoticePending:
function(){var B8=A._NewObject(C.Animal,0);var P;var AiE=0;var AcZ=A._GetAutoObject(
C.Device).Ap.Filter;var Ba=A._GetAutoObject(C.Helper).AOd();A._GetAutoObject(C.Device
).Ap.Bi(Ba);for(P=0;P<A._GetAutoObject(C.Device).Ap.Cb();P++){B8.EC(P,A._GetAutoObject(
C.Device).Ap);B8.AeF(false);B8.Ck(A._GetAutoObject(C.Device).Ap);AiE++;}A._GetAutoObject(
C.Device).Ap.Bi(AcZ);return AiE;},AEl:function(E){if(this.K&&this.K.AEl)return this.
K.AEl.apply(this,arguments);else return C.DeviceClass.Btp.apply(this,arguments);
},Btp:function(E){},AZi:function(Aq){this.AEl(Aq);},UpdateDataExportDestination:
function(AI){if(this.Vs===AI)return;this.Vs=AI;A.abo([this,this.ARH,this.AZi],0);
},BlV:function(E){},UpdateMassRecordingAutomatic:function(AI){if(this.AQV===AI)return;
this.AQV=AI;A.abo([this,this.BjQ,this.BlV],0);},Nb:function(E){if(this.K&&this.K.
Nb)return this.K.Nb.apply(this,arguments);else return C.DeviceClass.Buu.apply(this
,arguments);},Buu:function(E){},Bu5:function(Aq){this.Nb(Aq);},UpdateWhereAbouts:
function(Afq){if(this.WhereAbouts===Afq)return;this.WhereAbouts=Afq;A.abo([this,
this.AvJ,this.Bu5],0);},Aq_:function(E){if(this.K&&this.K.Aq_)return this.K.Aq_.
apply(this,arguments);else return C.DeviceClass.Bs6.apply(this,arguments);},Bs6:
function(E){},A$4:function(Aq){this.Aq_(Aq);},Aq$:function(E){if(this.K&&this.K.
Aq$)return this.K.Aq$.apply(this,arguments);else return C.DeviceClass.Bs7.apply(
this,arguments);},Bs7:function(E){},A$5:function(Aq){this.Aq$(Aq);},UpdateActiveMassRecordingFields:
function(AI){if(this.AAT===AI)return;this.AAT=AI;A.abo([this,this.A7y,this.A$4],
0);},UpdateActiveMassRecordingFieldsOrder:function(AI){if(this.AAU===AI)return;this.
AAU=AI;A.abo([this,this.A7z,this.A$5],0);},ArQ:function(G){if(this.K&&this.K.ArQ
)return this.K.ArQ.apply(this,arguments);else return C.DeviceClass.Buy.apply(this
,arguments);},Buy:function(G){},BEJ:function(s){this.ArQ(s);},AEK:function(E){if(
this.K&&this.K.AEK)return this.K.AEK.apply(this,arguments);else return C.DeviceClass.
BtJ.apply(this,arguments);},BtJ:function(E){},AIb:function(Aq){this.AEK(Aq);},UpdateMassRecordingDateOfBirthMandatory:
function(AI){if(this.Aep===AI)return;this.Aep=AI;A.abo([this,this.ADU,this.AIb],
0);},AEJ:function(E){this.UpdateMassRecordingCounter(E);},UpdateMassRecordingCounter:
function(AI){if(this.Avl===AI)return;this.Avl=AI;A.abo([this,this.A76,this.AEJ],
0);},Ajf:function(){if(this.K&&this.K.Ajf)return this.K.Ajf.apply(this,arguments
);else return C.DeviceClass.BsW.apply(this,arguments);},BsW:function(){return false;
},ApX:function(){if(this.K&&this.K.ApX)return this.K.ApX.apply(this,arguments);else
return C.DeviceClass.BsV.apply(this,arguments);},BsV:function(){return false;},ApW:
function(){if(this.K&&this.K.ApW)return this.K.ApW.apply(this,arguments);else return C.
DeviceClass.BsU.apply(this,arguments);},BsU:function(){return false;},Auf:function(
){if(this.K&&this.K.Auf)return this.K.Auf.apply(this,arguments);else return C.DeviceClass.
BsX.apply(this,arguments);},BsX:function(){return false;},Awb:function(E){if(this.
K&&this.K.Awb)return this.K.Awb.apply(this,arguments);else return C.DeviceClass.
BtL.apply(this,arguments);},BtL:function(E){},Bal:function(Aq){this.Awb(Aq);},UpdateMaxWeightValuePrecision:
function(AI){if(this.OG===AI)return;this.OG=AI;A.abo([this,this.A77,this.Bal],0);
},Awi:function(E){if(this.K&&this.K.Awi)return this.K.Awi.apply(this,arguments);
else return C.DeviceClass.BtX.apply(this,arguments);},BtX:function(E){},Bap:function(
Aq){this.Awi(Aq);},UpdateNoNaisIdListActions:function(AI){if(this.NoNaisIdListActions===
AI)return;this.NoNaisIdListActions=AI;A.abo([this,this.A7$,this.Bap],0);},ResetNoNaisIdListActions:
function(G){if(this.K&&this.K.ResetNoNaisIdListActions)return this.K.ResetNoNaisIdListActions.
apply(this,arguments);else return C.DeviceClass.BuA.apply(this,arguments);},BuA:
function(G){},BEL:function(s){this.ResetNoNaisIdListActions(s);},Awj:function(E){
if(this.K&&this.K.Awj)return this.K.Awj.apply(this,arguments);else return C.DeviceClass.
BtY.apply(this,arguments);},BtY:function(E){},Baq:function(Aq){this.Awj(Aq);},UpdateNoTransponderListActions:
function(AI){if(this.NoTransponderListActions===AI)return;this.NoTransponderListActions=
AI;A.abo([this,this.A8a,this.Baq],0);},ResetNoTransponderListActions:function(G){
if(this.K&&this.K.ResetNoTransponderListActions)return this.K.ResetNoTransponderListActions.
apply(this,arguments);else return C.DeviceClass.BuB.apply(this,arguments);},BuB:
function(G){},BEM:function(s){this.ResetNoTransponderListActions(s);},Awz:function(
E){if(this.K&&this.K.Awz)return this.K.Awz.apply(this,arguments);else return C.DeviceClass.
Buv.apply(this,arguments);},Buv:function(E){},BaE:function(Aq){this.Awz(Aq);},UpdateYoungNoTransponderListActions:
function(AI){if(this.YoungNoTransponderListActions===AI)return;this.YoungNoTransponderListActions=
AI;A.abo([this,this.A8I,this.BaE],0);},ResetYoungNoTransponderListActions:function(
G){if(this.K&&this.K.ResetYoungNoTransponderListActions)return this.K.ResetYoungNoTransponderListActions.
apply(this,arguments);else return C.DeviceClass.BuE.apply(this,arguments);},BuE:
function(G){},BEP:function(s){this.ResetYoungNoTransponderListActions(s);},ADN:function(
){return this.KB;},Avu:function(){return this.AaF;},Avx:function(){return this.Amd;
},ARZ:function(){return this.ScanState;},ADV:function(){return this.MeasureState;
},ADY:function(){return this.Ko;},A72:function(){return this.Language;},Aq4:function(
){return this.TemperatureUnit;},A7N:function(){return this.AMm;},ARQ:function(){
return this.ADz;},AvI:function(){return this.OverlayMenu;},A8v:function(){return this.
ZA;},AR1:function(){return this.SyncState;},A8w:function(){return this.Asd;},ADZ:
function(){return this.AUP;},ARY:function(){return this.RatingMode;},Aq1:function(
){return this.Ams;},AR3:function(){return this.AUy;},BjW:function(){return this.
ATj;},Bjl:function(){return this.AutoRegistrationMode;},AR0:function(){return this.
OM;},AbD:function(){return this.FP;},AbE:function(){return this.Fy;},AD0:function(
){return this.KR;},ARP:function(){return this.MassUnit;},A7x:function(){return this.
Pc;},ARB:function(){return this.At1;},A7J:function(){return this.AutoActions;},PH:
function(){return this.AnimalType;},A8E:function(){return this.WeightRecordingMode;
},ARV:function(){return this.AFv;},ADS:function(){return this.Hw;},A7C:function(
){return this.Adv;},A8F:function(){return this.WeightRecordingScope;},Wb:function(
){return this.Gender;},AvC:function(){return this.Aqy;},AvB:function(){return this.
Aqx;},ADP:function(){return this.JB;},A7E:function(){return this.ALv;},A7Q:function(
){return this.Amr;},ADO:function(){return this.D2;},A8A:function(){return this.AUR;
},A7S:function(){return this.ANZ;},A7H:function(){return this.AAY;},A8q:function(
){return this.AGd;},A8r:function(){return this.AGe;},A7U:function(){return this.
Aqn;},A7_:function(){return this.ADB;},A79:function(){return this.ADA;},AvF:function(
){return this.AQ9;},AvE:function(){return this.AQ8;},A7M:function(){return this.
Ap1;},A7v:function(){return this.AAS;},A7w:function(){return this.ApQ;},Am2:function(
){return this.Ib;},ARI:function(){return this.ABP;},ARJ:function(){return this.ABQ;
},ADT:function(){return this.Aus;},Am5:function(){return this.AjC;},ARR:function(
){return this.Avp;},AvG:function(){return this.AQ_;},AvA:function(){return this.
EartagNrAssignmentMode;},Avw:function(){return this.Breed;},BjR:function(){return this.
Sk;},BjP:function(){return this.QM;},Bkb:function(){return this.SG;},Bjo:function(
){return this.RK;},A7O:function(){return this.ANj;},ADQ:function(){return this.ApZ;
},AR4:function(){return this.Aw7;},A8u:function(){return this.Ae5;},ARW:function(
){return this.Ug;},ADX:function(){return this.Abx;},A7T:function(){return this.Aqm;
},Wc:function(){return this.Ahw;},Bj2:function(){return this.Ahl;},ARC:function(
){return this.Aga;},A8n:function(){return this.AT6;},A7F:function(){return this.
Al6;},A8C:function(){return this.AGz;},A8D:function(){return this.AGA;},A7I:function(
){return this.AAZ;},A8B:function(){return this.AGy;},A8G:function(){return this.
AGD;},Bjy:function(){return this.ABX;},Bj3:function(){return this.AwZ;},A78:function(
){return this.ADt;},AR5:function(){return this.Ahv;},ARH:function(){return this.
Vs;},BjQ:function(){return this.AQV;},AvJ:function(){return this.WhereAbouts;},A7y:
function(){return this.AAT;},A7z:function(){return this.AAU;},ADU:function(){return this.
Aep;},A76:function(){return this.Avl;},A77:function(){return this.OG;},A7$:function(
){return this.NoNaisIdListActions;},A8a:function(){return this.NoTransponderListActions;
},A8I:function(){return this.YoungNoTransponderListActions;},_Init:function(aArg
){C.Table._Init.call(this.Ap={I:this},0);C.Table._Init.call(this.Br={I:this},0);
C.Table._Init.call(this.Af_={I:this},0);A.Core.A_I._Init.call(this.Ano={I:this},
0);C.Table._Init.call(this.Ph={I:this},0);this.__proto__=C.DeviceClass;this.Ap.OnSetId(
0);this.Br.OnSetId(1);this.Af_.OnSetId(3);this.Ph.OnSetId(4);this.OM=A._NewObject(
C.Transponder,0);this.Sk=A._NewObject(C.AwX,0);this.QM=A._NewObject(C.AuU,0);this.
SG=A._NewObject(C.AuU,0);this.RK=A._NewObject(C.AwX,0);var Ls=this._variants();if(
Ls){this.K={};Ls._Init.call(this,aArg);}A.h7++;},_Done:function(){if(this.K)this.
K._Done.call(this);this.__proto__=null;this.Ap._Done();this.Br._Done();this.Af_.
_Done();this.Ano._Done();this.Ph._Done();A.h7--;},_ReInit:function(){this.Ap._ReInit(
);this.Br._ReInit();this.Af_._ReInit();this.Ano._ReInit();this.Ph._ReInit();if(this.
K)this.K._ReInit.call(this);},_Mark:function(D){var B;if((B=this.OM)&&(B._cycle!=
D))B._Mark(B._cycle=D);if((B=this.Sk)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.
QM)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.SG)&&(B._cycle!=D))B._Mark(B._cycle=
D);if((B=this.RK)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Ap)._cycle!=D)B.
_Mark(B._cycle=D);if((B=this.Br)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Af_)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.Ano)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
Ph)._cycle!=D)B._Mark(B._cycle=D);if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=
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
A7:A.jV,AdV:function(){var Az=A._NewObject(C.StringFilterCriterion,0);Az.GA(this
);return Az;},GA:function(AM){C.FilterCriterion.GA.call(this,AM);var Az=(C.StringFilterCriterion.
isPrototypeOf(AM)?AM:null);if(!!Az)this.A7=Az.A7;},_Init:function(aArg){C.FilterCriterion.
_Init.call(this,aArg);this.__proto__=C.StringFilterCriterion;},_className:"Device::StringFilterCriterion"
};C.Table={CC:function(Ad,A0){if(this.K&&this.K.CC)return this.K.CC.apply(this,arguments
);else return C.ITable.CC.apply(this,arguments);},VA:function(Ad,A0){if(this.K&&
this.K.VA)return this.K.VA.apply(this,arguments);else return C.ITable.VA.apply(this
,arguments);},HW:function(Ad,A0){if(this.K&&this.K.HW)return this.K.HW.apply(this
,arguments);else return C.ITable.HW.apply(this,arguments);},OnSetId:function(E){
if(this.K&&this.K.OnSetId)return this.K.OnSetId.apply(this,arguments);else return C.
ITable.OnSetId.apply(this,arguments);},Cb:function(){if(this.K&&this.K.Cb)return this.
K.Cb.apply(this,arguments);else return C.ITable.Cb.apply(this,arguments);},Bi:function(
E){if(this.K&&this.K.Bi)return this.K.Bi.apply(this,arguments);else return C.ITable.
Bi.apply(this,arguments);},VB:function(Ad,A0){if(this.K&&this.K.VB)return this.K.
VB.apply(this,arguments);else return C.ITable.VB.apply(this,arguments);},R7:function(
Ad,A0){if(this.K&&this.K.R7)return this.K.R7.apply(this,arguments);else return C.
ITable.R7.apply(this,arguments);},Ov:function(){if(this.K&&this.K.Ov)return this.
K.Ov.apply(this,arguments);else return C.ITable.Ov.apply(this,arguments);},Ox:function(
Aop){if(this.K&&this.K.Ox)return this.K.Ox.apply(this,arguments);else return C.ITable.
Ox.apply(this,arguments);},Yj:function(){if(this.K&&this.K.Yj)return this.K.Yj.apply(
this,arguments);else return C.ITable.Yj.apply(this,arguments);},Zk:function(Ad,A0
,CV){if(this.K&&this.K.Zk)return this.K.Zk.apply(this,arguments);else return C.ITable.
Zk.apply(this,arguments);},He:function(Ad,A0,CV){if(this.K&&this.K.He)return this.
K.He.apply(this,arguments);else return C.ITable.He.apply(this,arguments);},Zj:function(
Ad,A0,CV){if(this.K&&this.K.Zj)return this.K.Zj.apply(this,arguments);else return C.
ITable.Zj.apply(this,arguments);},Mv:function(Ad,A0,CV){if(this.K&&this.K.Mv)return this.
K.Mv.apply(this,arguments);else return C.ITable.Mv.apply(this,arguments);},Zi:function(
Ad,A0,CV){if(this.K&&this.K.Zi)return this.K.Zi.apply(this,arguments);else return C.
ITable.Zi.apply(this,arguments);},K_:function(aColumn,A3){if(this.K&&this.K.K_)return this.
K.K_.apply(this,arguments);else return C.ITable.K_.apply(this,arguments);},LN:function(
Ad,A0){if(this.K&&this.K.LN)return this.K.LN.apply(this,arguments);else return C.
ITable.LN.apply(this,arguments);},Sx:function(Ad,A0,CV){if(this.K&&this.K.Sx)return this.
K.Sx.apply(this,arguments);else return C.ITable.Sx.apply(this,arguments);},Agy:function(
aColumn,A3){if(this.K&&this.K.Agy)return this.K.Agy.apply(this,arguments);else return C.
ITable.Agy.apply(this,arguments);},Hd:function(){if(this.K&&this.K.Hd)return this.
K.Hd.apply(this,arguments);else return C.ITable.Hd.apply(this,arguments);},Ajr:function(
aColumn,A3){if(this.K&&this.K.Ajr)return this.K.Ajr.apply(this,arguments);else return C.
ITable.Ajr.apply(this,arguments);},AdZ:function(aColumn,A3){if(this.K&&this.K.AdZ
)return this.K.AdZ.apply(this,arguments);else return C.ITable.AdZ.apply(this,arguments
);},HA:function(){if(this.K&&this.K.HA)return this.K.HA.apply(this,arguments);else
return C.ITable.HA.apply(this,arguments);},Aa3:function(){if(this.K&&this.K.Aa3)
return this.K.Aa3.apply(this,arguments);else return C.ITable.Aa3.apply(this,arguments
);},Qw:function(){if(this.K&&this.K.Qw)return this.K.Qw.apply(this,arguments);else
return C.ITable.Qw.apply(this,arguments);},_Init:function(aArg){C.ITable._Init.call(
this,aArg);this.__proto__=C.Table;var Ls=this._variants();if(Ls){this.K={};Ls._Init.
call(this,aArg);}},_Done:function(){if(this.K)this.K._Done.call(this);this.__proto__=
C.ITable;C.ITable._Done.call(this);},_ReInit:function(){C.ITable._ReInit.call(this
);if(this.K)this.K._ReInit.call(this);},_Mark:function(D){C.ITable._Mark.call(this
,D);if(this.K)this.K._Mark(D);},_variants:function(){return A.acr.Table._variants(
);},K:null,_className:"Device::Table"};C.TableId={Animal:0,Rating:1,Undefined:2,
AnimalGroup:3,CalfDeregistrations:4};C.ScanState={Idle:0,Progress:1,IdScanned:2,
NotFound:3,Error:4,LAST:5};C.RatedAttribute={None:0,Feed:1,Appearance:2,Respiratory:
3,Faeces:4};C.ConverterClass={MY:null,AkD:function(Aon){var BbZ;var AtN=this.AUn(
Aon/100,0,A._GetAutoObject(C.Device).TemperatureUnit);BbZ=A.abk(AtN,0,1);return BbZ;
},A_Q:function(Ng){if(Ng<=0)return 0;else if(Ng<=1)return 5;else if(Ng<=2)return 3;
else if(Ng<=4)return 2;else if(Ng<=6)return 1;else if(Ng<=8)return 4;else return 0;
},AdD:function(Ng){var a=0;switch(Ng){case 3:a=2;break;case 2:a=4;break;case 1:a=
6;break;case 0:a=0;break;case 4:a=8;break;case 5:a=1;break;default:A.ab5("%s",N8
);}return a;},Ar8:function(Ee,Rf){var Nj=A._GetAutoObject(C.Converter).Ai4(Rf,Ee
);switch(Nj){case 3:return 1;case 2:return 2;case 1:return 3;case 0:return 4;default:
throw new Error(PZ+Nj.toFixed());}},Aht:function(){var B;var D1=A._NewObject(A.Core.
Bt,0).Initialize(A._GetAutoObject(C.Helper).Dt());D1.Anc(0);D1.Anf(0);D1.Ani(0);
return((B=(D1.JH()|0))<0)?B+0x100000000:B;},BgA:function(AsM){var Dh;switch(AsM){
case 36:Dh=MB;break;case 40:Dh=ST;break;case 56:Dh=UC;break;case 70:Dh=ZE;break;
case 100:Dh=WG;break;case 124:Dh=IK;break;case 156:Dh=UD;break;case 158:Dh=ZF;break;
case 191:Dh=WH;break;case 196:Dh=ZG;break;case 203:Dh=WI;break;case 208:Dh=ZH;break;
case 233:Dh=ZI;break;case 246:Dh=UE;break;case 250:Dh=WJ;break;case 276:Dh=Q9;break;
case 300:Dh=ZJ;break;case 348:Dh=OX;break;case 372:Dh=Q_;break;case 380:Dh=WK;break;
case 392:Dh=WM;break;case 428:Dh=WN;break;case 440:Dh=WO;break;case 442:Dh=ZK;break;
case 470:Dh=WQ;break;case 528:Dh=WR;break;case 578:Dh=SU;break;case 616:Dh=ZL;break;
case 620:Dh=ZM;break;case 642:Dh=Acq;break;case 643:Dh=UF;break;case 703:Dh=ZN;break;
case 705:Dh=Afe;break;case 724:Dh=ZO;break;case 752:Dh=WS;break;case 756:Dh=ZP;break;
case 792:Dh=ZQ;break;case 804:Dh=Aff;break;case 826:Dh=JP;break;case 840:Dh=Acr;
break;default:Dh=AsM.toFixed();}return Dh;},AkL:function(MG){var Z6;if((MG<10000
)&&(A._GetAutoObject(C.Device).OG===2))Z6=2;else if((MG<100000)&&!!A._GetAutoObject(
C.Device).OG)Z6=1;else Z6=0;return this.SR(MG,Z6,false);},Axh:function(MG,Z6){return this.
SR(MG,Z6,false);},SR:function(MG,Z6,Byn){var B;var Alc=A.jV;switch(A._GetAutoObject(
C.Device).MassUnit){case 0:if(Byn)Alc=A.abl(MG,0,0);else{var Bdh=MG<0;if(Z6<3)MG=
MG+(((Bdh?-1:1)*5)*(Math.pow(10,2-Z6)|0));Alc=(((((B=MG)>-2147483648)?Math.abs(B
):B)/1000)|0).toFixed();if(Z6>0)Alc=Alc+(Lr+A.abV(A.abl((((B=MG)>-2147483648)?Math.
abs(B):B)%1000,3,10),Z6));if(Bdh)Alc=Ahz+Alc;}break;case 1:Alc=A.abk(MG/453.592,
0,Z6);break;default:A.ab5("%s%s",AnQ,A._GetAutoObject(C.Device).MassUnit.toFixed(
));}return Alc;},SK:function(I_){var A3w=I_.toFixed();var Bfo=A3w.length;if((Bfo>=
14)&&(Bfo<=15)){var A1q=this.Aw9(I_);var Bxc=A._GetAutoObject(C.Converter).BgA(A1q
);A3w=(Bxc+N9)+A.abm(A._GetAutoObject(C.Helper).TB(I_,0,12),12,10);}return A3w;}
,Amv:function(LY){switch(LY){case 0:return A.aaL(A.ach.APS);case 1:return A.aaL(
A.ach.ACU);case 2:return A.aaL(A.ach.ACZ);default:{A.ab5("%s%e",WT,LY);return null;
}}},A3_:function(BwL){switch(BwL){case 0:return A.aaL(A.ach.Au3);case 1:return A.
aaL(A.ach.ACQ);case 2:return A.aaL(A.ach.APM);default:throw new Error(AnR);}},AdB:
function(AIH){switch(AIH){case 0:return A.aaL(A.ach.AjD);case 2:return A.aaL(A.ach.
AmD);case 1:return A.aaL(A.ach.Abd);case 3:switch(A._GetAutoObject(C.Device).MassUnit
){case 0:return A.aaL(A.ach.Ava);case 1:return A.aaL(A.ach.Avb);default:throw new
Error(AhA+A._GetAutoObject(C.Device).MassUnit.toFixed());}break;case 4:return A.
aaL(A.ach.APc);case 5:return A.aaL(A.ach.APd);case 6:return A.aaL(A.ach.APh);case
7:return A.aaL(A.ach.AOD);case 8:return A.aaL(A.ach.AOK);case 9:return A.aaL(A.ach.
ACq);case 10:return A.aaL(A.ach.AOJ);case 12:return A.aaL(A.ach.AOL);case 11:return A.
aaL(A.ach.ACO);default:throw new Error(AhB+AIH.toFixed());}},Bf1:function(Ayl){switch(
Ayl){case 0:return A.aaL(A.ach.ACX);case 3:return A.aaL(A.ach.AmD);case 1:return A.
aaL(A.ach.Abd);case 2:return A._GetAutoObject(A.acj.DN).Bcl();default:throw new Error(
AhB+Ayl.toFixed());}},Bgz:function(AsM){switch(AsM){case 977:return Acs;case 978:
return UG;case 980:return AnS;case 981:return AnT;case 982:return AnU;case 983:return AnV;
case 984:return Afg;case 985:return AnW;default:return A.aaR(A.acf.Unknown);}},BgS:
function(AcF){switch(AcF){case 1:return 0x278A;case 2:return 0x278B;case 3:return 0x278C;
case 4:return 0x278D;case 5:return 0x278E;case 6:return 0x278F;case 7:return 0x2790;
case 8:return 0x2791;case 9:return 0x2792;case 10:return 0x2793;default:return 0x20;
}},BoD:function(I_){if(!I_)return-1;return(I_%100000000)|0;},Bhl:function(Aom,aFilter
){var B;if(!aFilter)return Afh;var AoR=Asj;var Az=aFilter.AN8();while(!!Az){AoR=
AoR+A._GetAutoObject(C.Helper).A5Z(Aom,Az);Az=aFilter.AOb(Az);if(!!Az)AoR=AoR+OY;
}AoR=AoR+SV;return AoR;},A6D:function(Ba5){var MD=0;switch(Ba5){case 14:MD=2;break;
case 13:MD=4;break;case 6:MD=36;break;case 11:MD=9;break;case 0:MD=39;break;case
10:MD=26;break;case 12:MD=12;break;case 5:MD=14;break;case 3:MD=15;break;case 1:
MD=10;break;case 8:MD=16;break;case 4:MD=20;break;case 15:MD=27;break;case 9:MD=
31;break;case 2:MD=13;break;case 7:MD=35;break;case 16:MD=37;break;default:A.ab5(
"%s%e",Axj,Ba5);}return MD;},Bf0:function(Ayl){switch(Ayl){case 0:return 1;case 3:
return 0;case 1:return 2;case 2:switch(A._GetAutoObject(C.Device).MassUnit){case
0:return 3;case 1:return 4;default:throw new Error(AhA+A._GetAutoObject(C.Device
).MassUnit.toFixed());}break;default:throw new Error(AhB+Ayl.toFixed());}},Bf2:function(
Aox){switch(Aox){case 0:return A.aaL(A.ach.AO$);case 1:return A.aaL(A.ach.ACX);case
9:return A.aaL(A.ach.APj);case 4:return A.aaL(A.ach.AFI);case 6:return A.aaL(A.ach.
ArO);case 8:return A.aaL(A.ach.AuZ);case 2:return A.aaL(A.ach.Abd);case 3:return A.
aaL(A.ach.AmD);case 10:switch(A._GetAutoObject(C.Device).MassUnit){case 0:return A.
aaL(A.ach.Ava);case 1:return A.aaL(A.ach.Avb);default:throw new Error(AhA+A._GetAutoObject(
C.Device).MassUnit.toFixed());}break;case 7:case 5:case 11:case 12:case 13:case 14:
case 18:case 15:case 16:case 17:return A.aaL(A.aci.Tz);default:throw new Error(SW+
Aox.toFixed());}},AMV:function(AsM){switch(AsM){case 40:return 1;case 56:return 3;
case 70:return 2;case 100:return 4;case 124:return 5;case 156:return 7;case 158:
return 36;case 191:return 17;case 196:return 8;case 203:return 9;case 208:return 11;
case 233:return 12;case 246:return 14;case 250:return 15;case 276:return 10;case
300:return 16;case 348:return 18;case 372:return 19;case 380:return 20;case 392:
return 21;case 428:return 24;case 440:return 22;case 442:return 23;case 470:return 25;
case 528:return 26;case 578:return 27;case 616:return 28;case 620:return 29;case
642:return 30;case 643:return 31;case 703:return 34;case 705:return 33;case 724:
return 13;case 752:return 32;case 756:return 6;case 792:return 35;case 804:return 37;
case 826:return 38;case 840:return 39;default:return 0;}},Acg:function(I_){var A1q=
this.Aw9(I_);return this.AMV(A1q);},Aw9:function(I_){return A._GetAutoObject(C.Helper
).TB(I_,12,3)|0;},A_9:function(Aor,Ee){if(Aor<A._GetAutoObject(C.Helper).ACm(Ee)
)return 1;else if(Aor<A._GetAutoObject(C.Helper).ACl(Ee))return 2;else return 3;
},AB$:function(Bwp){switch(Bwp){case 1:return 1;case 2:return 2;case 3:return 3;
case 4:return 4;case 5:return 5;case 6:return 6;case 7:return 7;case 8:return 8;
case 9:return 9;case 10:return 10;case 11:return 11;case 12:return 12;case 13:return 13;
case 14:return 14;case 15:return 15;case 16:return 16;default:return 0;}},AUn:function(
A3,AIA,AIB){if(AIA===AIB)return A3;if(!AIA&&(AIB===1)){var result=((A3*9)/5)+32;
return result;}if((AIA===1)&&!AIB){var result=((A3-32)*5)/9;return result;}throw new
Error(((Ask+AIA.toFixed())+Axk)+AIB.toFixed());},A5I:function(EG){switch(EG){case
0:return Axl;case 1:return A.jV;case 2:return Axm;case 3:return AnX;case 4:return A.
aaR(A.acf.Contains);case 5:return Axn;default:{A.ab5("%s%e",Asl,EG);return A.jV;
}}},A4I:function(AcE){return this.MY.AdY(AcE);},Bh5:function(AcE){return this.MY.
Amf(AcE);},Bgj:function(AsL){var AzG=0;switch(AsL){case 0:AzG=1;break;case 1:AzG=
2;break;case 2:AzG=3;break;case 3:AzG=4;break;default:A.ab5("%s%e",JQ,AsL);}return AzG;
},Ai4:function(AZQ,Ee){if(AZQ>=A._GetAutoObject(C.Helper).A5U(Ee))return 3;else if(
AZQ>=A._GetAutoObject(C.Helper).AuQ(Ee))return 2;else if(AZQ<A._GetAutoObject(C.
Device).ZA)return 0;else return 1;},Ap7:function(MD){var BM=-1;switch(MD){case 0:
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
throw new Error(Axo+MD.toFixed());}return BM;},BoH:function(I_){return A._GetAutoObject(
C.Helper).TB(I_,8,2)|0;},BoG:function(I_){var Byj=this.BoH(I_);return this.AB$(Byj
);},_Init:function(aArg){C.MY._Init.call(this.MY={I:this},0);this.__proto__=C.ConverterClass;
A.h7++;},_Done:function(){this.__proto__=null;this.MY._Done();A.h7--;},_ReInit:function(
){this.MY._ReInit();},_Mark:function(D){var B;if((B=this.MY)._cycle!=D)B._Mark(B.
_cycle=D);if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:
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
,IsRegistered:false,IsControl:false,IsAlarm:false,EC:function(Ad,AG){var Hv=C.Row.
EC.call(this,Ad,AG);if(Hv&&!!AG){this.OnSetId(AG.CC(Ad,0));this.Ub(AG.CC(Ad,1));
this.AbK(AG.CC(Ad,2));this.Ane(AG.CC(Ad,3));this.QR(AG.Hz(Ad,4));this.JI(AG.AN_(
Ad,7));this.Aj8(AG.BhD(Ad,6));this.DT(AG.Amw(Ad,14));this.NW(AG.LN(Ad,22));this.
Na(AG.LN(Ad,26));this.Awy(AG.IV(Ad,13));this.AeD(AG.HW(Ad,8));this.Awr(AG.Hz(Ad,
15));this.ASS(AG.Hz(Ad,31));this.AeI(AG.A57(Ad,5));this.ASp(AG.IV(Ad,17));this.T_(
AG.HW(Ad,11));this.ASR(AG.Hz(Ad,16));this.ASU(AG.Hz(Ad,30));this.Ake(AG.HW(Ad,9)
);this.AeG(AG.HW(Ad,12));this.AST(AG.Hz(Ad,20));this.Awt(AG.Hz(Ad,21));this.Ag8(
AG.HW(Ad,10));this.Av7(AG.HW(Ad,27));this.AED(AG.ACg(Ad,18));this.AE8(AG.Hz(Ad,19
));this.Av4(AG.ACg(Ad,23));this.Aws(AG.Hz(Ad,24));this.ASh(AG.CC(Ad,25));this.AvV(
AG.Hz(Ad,28));this.Av8(AG.CC(Ad,29));this.Arn(AG.HW(Ad,38));this.NT(AG.BhE(Ad,32
));this.Aj$(AG.BhJ(Ad,33));this.Ang(AG.LN(Ad,35));this.Nb(AG.AOh(Ad,34));this.AeF(
AG.HW(Ad,37));this.AEX(AG.BhS(Ad,36));}return Hv;},Ck:function(AG){var Hv=C.Row.
Ck.call(this,AG);if(Hv&&!!AG){var Jd=AG.Ov();if(Jd<=0)A.ab5("%s",Act);else{var Azj=
this.AmI();if(Azj)this.CH=AG.Yj();else AG.He(this.CH,0,this.Id);AG.He(this.CH,1,
this.VisualId);AG.He(this.CH,2,this.GroupId);AG.He(this.CH,3,this.LocationId);AG.
Ab3(this.CH,4,this.DateOfBirth);AG.Bnu(this.CH,7,this.Gender);AG.Bnq(this.CH,6,this.
BirthType);AG.Bno(this.CH,14,this.AnimalType);AG.Sx(this.CH,22,this.TransponderId
);AG.Sx(this.CH,26,this.NaisId);AG.Aku(this.CH,13,this.WorstAssessment);AG.Mv(this.
CH,8,this.IsAlarm);AG.Ab3(this.CH,15,this.TimestampAlarm);AG.Mv(this.CH,11,this.
IsFever);AG.Ab3(this.CH,16,this.TimestampExpirationFeverAlarm);AG.Mv(this.CH,9,this.
IsControl);AG.Mv(this.CH,12,this.IsWatch);AG.Ab3(this.CH,20,this.TimestampLastControl
);AG.Ab3(this.CH,21,this.TimestampLastWatch);AG.Mv(this.CH,10,this.IsRegistered);
AG.Mv(this.CH,27,this.IsPerished);AG.Ab3(this.CH,28,this.DateOfLastCalving);AG.He(
this.CH,29,this.LactationNumber);AG.Mv(this.CH,38,this.IsDry);AG.Bns(this.CH,32,
this.Breed);AG.Bnt(this.CH,33,this.EaseOfDelivery);AG.Sx(this.CH,35,this.NaisIdMother
);AG.BnA(this.CH,34,this.WhereAbouts);AG.Mv(this.CH,37,this.IsRegistrationNoticePending
);AG.Bny(this.CH,36,this.ReasonOfLeaving);Hv=AG.Ox(Jd);if(Azj)this.OnSetId(AG.Aa3(
));}}return Hv;},Gf:function(){C.Row.Gf.call(this);this.OnSetId(-1);this.Ag8(true
);},Hd:function(){C.Row.Hd.call(this);this.OnSetId(0);this.Ub(0);this.AbK(0);this.
Ane(0);this.QR(0);this.JI(A._GetAutoObject(C.Device).Gender);this.Aj8(0);this.DT(
A._GetAutoObject(C.Device).AnimalType);this.NW(0);this.Na(0);this.Awy(0);this.AeD(
false);this.Awr(0);this.ASS(0);this.AeI(0);this.ASp(0);this.T_(false);this.ASU(0
);this.ASR(0);this.Ake(false);this.AeG(false);this.AST(0);this.Awt(0);this.Ag8(false
);this.Av7(false);this.AED(0);this.AE8(0);this.Av4(0);this.Aws(0);this.ASh(-1);this.
AvV(0);this.Av8(0);this.Arn(false);this.NT(0);this.Aj$(0);this.Ang(0);this.Nb(0);
this.AeF(false);this.AEX(0);},OnSetId:function(E){if(this.Id===E)return;this.Id=
E;A.abo([this,this.QP,this.OnSetId],0);},Ub:function(E){if(this.VisualId===E)return;
this.VisualId=E;A.abo([this,this.Aq5,this.Ub],0);},AbK:function(E){if(this.GroupId===
E)return;this.GroupId=E;A.abo([this,this.BjF,this.AbK],0);},QR:function(E){if(this.
DateOfBirth===E)return;this.DateOfBirth=E;A.abo([this,this.Avy,this.QR],0);},JI:
function(E){if(this.Gender===E)return;this.Gender=E;A.abo([this,this.Wb,this.JI]
,0);},Aj8:function(E){if(this.BirthType===E)return;this.BirthType=E;A.abo([this,
this.ARF,this.Aj8],0);},Ane:function(E){if(this.LocationId===E)return;this.LocationId=
E;A.abo([this,this.A75,this.Ane],0);},AeI:function(E){if(this.LastTemperature===
E)return;this.LastTemperature=E;A.abo([this,this.A74,this.AeI],0);},AeD:function(
E){if(this.IsAlarm===E)return;this.IsAlarm=E;A.abo([this,this.A7W,this.AeD],0);}
,Ake:function(E){if(this.IsControl===E)return;this.IsControl=E;A.abo([this,this.
BjI,this.Ake],0);},Ag8:function(E){if(this.IsRegistered===E)return;this.IsRegistered=
E;A.abo([this,this.BjL,this.Ag8],0);},AeG:function(E){if(this.IsWatch===E)return;
this.IsWatch=E;A.abo([this,this.A70,this.AeG],0);},Awy:function(E){if(this.WorstAssessment===
E)return;this.WorstAssessment=E;A.abo([this,this.A8H,this.Awy],0);},T_:function(
E){if(this.IsFever===E)return;this.IsFever=E;A.abo([this,this.A7X,this.T_],0);},
AST:function(E){if(this.TimestampLastControl===E)return;this.TimestampLastControl=
E;A.abo([this,this.Bj_,this.AST],0);},Awt:function(E){if(this.TimestampLastWatch===
E)return;this.TimestampLastWatch=E;A.abo([this,this.Bka,this.Awt],0);},ASp:function(
E){if(this.LastRatingTemperature===E)return;this.LastRatingTemperature=E;A.abo([
this,this.BjO,this.ASp],0);},ASR:function(E){if(this.TimestampExpirationFeverAlarm===
E)return;this.TimestampExpirationFeverAlarm=E;A.abo([this,this.Bj8,this.ASR],0);
},Awr:function(E){if(this.TimestampAlarm===E)return;this.TimestampAlarm=E;A.abo([
this,this.Bj7,this.Awr],0);},DT:function(E){if(this.AnimalType===E)return;this.AnimalType=
E;A.abo([this,this.PH,this.DT],0);},AED:function(E){if(this.LastBodyWeight===E)return;
this.LastBodyWeight=E;A.abo([this,this.A73,this.AED],0);},AE8:function(E){if(this.
TimestampLastWeighing===E)return;this.TimestampLastWeighing=E;A.abo([this,this.A8t
,this.AE8],0);},NW:function(E){if(this.TransponderId===E)return;this.TransponderId=
E;A.abo([this,this.Aj4,this.NW],0);},Rz:function(){return A._GetAutoObject(C.Helper
).MK(this.DateOfBirth,A._GetAutoObject(C.Helper).Dt());},Av4:function(E){if(this.
FirstBodyWeight===E)return;this.FirstBodyWeight=E;A.abo([this,this.ARL,this.Av4]
,0);},Aws:function(E){if(this.TimestampFirstWeighing===E)return;this.TimestampFirstWeighing=
E;A.abo([this,this.AR2,this.Aws],0);},AqJ:function(){var S5=A._NewObject(A.Core.
Bt,0);S5.Initialize(this.DateOfBirth);var A1d=A._NewObject(A.Core.Bt,0);A1d.Initialize(
this.TimestampFirstWeighing);if(((S5.Year===A1d.Year)&&(S5.AbC()===A1d.AbC()))&&(
this.FirstBodyWeight>0))return true;else return false;},Ahy:function(AIu){var Aae;
var AtS;if(this.TimestampLastWeighing>0){AtS=this.TimestampLastWeighing;Aae=this.
LastBodyWeight;}else{AtS=this.DateOfBirth;Aae=A._GetAutoObject(C.Helper).Aa2(this.
AnimalType);}return A._GetAutoObject(C.Helper).Ahy(Aae,AtS,AIu,this.AnimalType);
},ASh:function(E){if(this.FirstBodyWeightId===E)return;this.FirstBodyWeightId=E;
A.abo([this,this.BjE,this.ASh],0);},Anu:function(Bbp){this.AeD(Bbp);if(Bbp){if(!
this.TimestampAlarm)this.Awr(A._GetAutoObject(C.Helper).Dt());}else this.Awr(0);
},Na:function(E){if(this.NaisId===E)return;this.NaisId=E;A.abo([this,this.Am6,this.
Na],0);},AFW:function(Bbl){this.AeG(Bbl);if(Bbl){if(!this.TimestampLastWatch)this.
Awt(A._GetAutoObject(C.Helper).Dt());}else this.Awt(0);},AvV:function(E){if(this.
DateOfLastCalving===E)return;this.DateOfLastCalving=E;A.abo([this,this.Bju,this.
AvV],0);},Av8:function(E){if(this.LactationNumber===E)return;this.LactationNumber=
E;A.abo([this,this.BjN,this.Av8],0);},Av7:function(E){if(this.IsPerished===E)return;
this.IsPerished=E;A.abo([this,this.BjK,this.Av7],0);},ASU:function(E){if(this.TimestampLastTemperature===
E)return;this.TimestampLastTemperature=E;A.abo([this,this.Bj$,this.ASU],0);},ASS:
function(E){if(this.TimestampLastAssessment===E)return;this.TimestampLastAssessment=
E;A.abo([this,this.Bj9,this.ASS],0);},NT:function(E){if(this.Breed===E)return;this.
Breed=E;A.abo([this,this.Avw,this.NT],0);},Aj$:function(E){if(this.EaseOfDelivery===
E)return;this.EaseOfDelivery=E;A.abo([this,this.ARK,this.Aj$],0);},Nb:function(E
){if(this.WhereAbouts===E)return;this.WhereAbouts=E;A.abo([this,this.AvJ,this.Nb
],0);},Ang:function(E){if(this.NaisIdMother===E)return;this.NaisIdMother=E;A.abo([
this,this.ARS,this.Ang],0);},AEX:function(E){if(this.ReasonOfLeaving===E)return;
this.ReasonOfLeaving=E;A.abo([this,this.BjY,this.AEX],0);},AeF:function(E){if(this.
IsRegistrationNoticePending===E)return;this.IsRegistrationNoticePending=E;A.abo([
this,this.BjM,this.AeF],0);},Arn:function(E){if(this.IsDry===E)return;this.IsDry=
E;A.abo([this,this.BjJ,this.Arn],0);},QP:function(){return this.Id;},Aq5:function(
){return this.VisualId;},BjF:function(){return this.GroupId;},Avy:function(){return this.
DateOfBirth;},Wb:function(){return this.Gender;},ARF:function(){return this.BirthType;
},A75:function(){return this.LocationId;},A74:function(){return this.LastTemperature;
},A7W:function(){return this.IsAlarm;},BjI:function(){return this.IsControl;},BjL:
function(){return this.IsRegistered;},A70:function(){return this.IsWatch;},A8H:function(
){return this.WorstAssessment;},A7X:function(){return this.IsFever;},Bj_:function(
){return this.TimestampLastControl;},Bka:function(){return this.TimestampLastWatch;
},BjO:function(){return this.LastRatingTemperature;},Bj8:function(){return this.
TimestampExpirationFeverAlarm;},Bj7:function(){return this.TimestampAlarm;},PH:function(
){return this.AnimalType;},A73:function(){return this.LastBodyWeight;},A8t:function(
){return this.TimestampLastWeighing;},Aj4:function(){return this.TransponderId;}
,ARL:function(){return this.FirstBodyWeight;},AR2:function(){return this.TimestampFirstWeighing;
},BjE:function(){return this.FirstBodyWeightId;},Am6:function(){return this.NaisId;
},Bju:function(){return this.DateOfLastCalving;},BjN:function(){return this.LactationNumber;
},BjK:function(){return this.IsPerished;},Bj$:function(){return this.TimestampLastTemperature;
},Bj9:function(){return this.TimestampLastAssessment;},Avw:function(){return this.
Breed;},ARK:function(){return this.EaseOfDelivery;},AvJ:function(){return this.WhereAbouts;
},ARS:function(){return this.NaisIdMother;},BjY:function(){return this.ReasonOfLeaving;
},BjM:function(){return this.IsRegistrationNoticePending;},BjJ:function(){return this.
IsDry;},_Init:function(aArg){C.Row._Init.call(this,aArg);this.__proto__=C.Animal;
this.TableId=0;},_className:"Device::Animal"};C.Row={CH:-1,TableId:2,EC:function(
Ad,AG){if(!AG){A.ab5("%s",(Axp+this.CH.toFixed())+AGF);return false;}else if(AG.
Id!==this.TableId)throw new Error(AGG);else if((Ad<0)||(Ad>=AG.Cb())){A.ab5("%s"
,(((AGH+this.CH.toFixed())+AGI)+AG.Cb().toFixed())+Axq);return false;}this.CH=Ad;
return true;},Ck:function(AG){if(!AG){A.ab5("%s",(Axp+this.CH.toFixed())+AGF);return false;
}else if(AG.Id!==this.TableId)throw new Error(AGG);else if(this.AmI()&&AG.Ld()){
A.ab5("%s",AU_+AG.HA().toFixed());return false;}else if(!this.AmI()&&((this.CH<0
)||(this.CH>=AG.Cb()))){A.ab5("%s",(((AGH+this.CH.toFixed())+AGI)+AG.Cb().toFixed(
))+Axq);return false;}return true;},Gf:function(){this.Hd();this.CH=-1;},AmI:function(
){return this.CH===-1;},Hd:function(){this.CH=-2;},Aqs:function(){return this.CH
!==-2;},A8h:function(){return this.CH;},A9z:function(E){this.CH=E;},_Init:function(
aArg){this.__proto__=C.Row;A.h7++;},_Done:function(){this.__proto__=null;A.h7--;
},_ReInit:function(){},_Mark:function(D){var B;if((B=this.I)&&(B._cycle!=D))B._Mark(
B._cycle=D);},I:null,_cycle:0,_observers:null,_className:"Device::Row"};C.Rating={
Temperature:0,Id:0,AnimalId:0,Timestamp:0,BodyWeight:0,RatingTemperature:0,Faeces:
0,Respiratory:0,Appearance:0,Feed:0,EC:function(Ad,AG){var Hv=C.Row.EC.call(this
,Ad,AG);if(Hv&&!!AG){this.OnSetId(AG.CC(Ad,0));this.OnSetAnimalId(AG.CC(Ad,1));this.
OnSetTimestamp(AG.Hz(Ad,6));this.OnSetFeed(AG.IV(Ad,2));this.OnSetAppearance(AG.
IV(Ad,3));this.OnSetRespiratory(AG.IV(Ad,4));this.OnSetFaeces(AG.IV(Ad,5));this.
OnSetTemperature(AG.A57(Ad,7));this.OnSetBodyWeight(AG.ACg(Ad,8));this.OnSetRatingTemperature(
AG.IV(Ad,9));}return Hv;},Ck:function(AG){if(this.K&&this.K.Ck)return this.K.Ck.
apply(this,arguments);else return C.Rating.A$U.apply(this,arguments);},A$U:function(
AG){var Hv=C.Row.Ck.call(this,AG);if((Hv&&!!AG)&&(AG.Id===1)){var Jd=AG.Ov();if(
Jd<=0)A.ab5("%s",Act);else{var Azj=this.AmI();if(Azj)this.CH=AG.Yj();else AG.He(
this.CH,0,this.Id);AG.He(this.CH,1,this.AnimalId);AG.Ab3(this.CH,6,this.Timestamp
);AG.Aku(this.CH,2,this.Feed);AG.Aku(this.CH,3,this.Appearance);AG.Aku(this.CH,4
,this.Respiratory);AG.Aku(this.CH,5,this.Faeces);AG.A_s(this.CH,7,this.Temperature
);AG.ATQ(this.CH,8,this.BodyWeight);AG.Aku(this.CH,9,this.RatingTemperature);AG.
Ox(Jd);if(Azj)this.OnSetId(AG.Aa3());var Rh=A._GetAutoObject(C.Device).Ap;var Ad=
A._GetAutoObject(C.Device).Ap.K_(0,this.AnimalId);if(Ad>=0){var B8=A._NewObject(
C.Animal,0);B8.EC(Ad,Rh);if(this.Temperature>0)B8.T_(A._GetAutoObject(C.Helper).
A6x(this));if((this.Temperature>0)&&A._GetAutoObject(C.Helper).AFC(this)){var Of=
A._GetAutoObject(C.Helper).AQo(this);B8.Ake(Of);B8.Anu(Of);}else if(this.Temperature>
0){var Of=(A._GetAutoObject(C.Helper).AQo(this)||(B8.WorstAssessment===2))||(B8.
WorstAssessment===1);B8.Ake(Of);B8.Anu(Of);}else{var Of=A._GetAutoObject(C.Helper
).AQo(this)||B8.IsFever;B8.Ake(Of);B8.Anu(Of);}B8.Ck(Rh);}}}return Hv;},Gf:function(
){C.Row.Gf.call(this);this.OnSetTimestamp(A._GetAutoObject(C.Helper).Dt());this.
OnSetId(-1);},Hd:function(){C.Row.Hd.call(this);this.OnSetTimestamp(0);this.OnSetId(
0);this.OnSetAnimalId(0);this.OnSetFeed(0);this.OnSetAppearance(0);this.OnSetRespiratory(
0);this.OnSetFaeces(0);this.OnSetTemperature(0);this.OnSetBodyWeight(0);this.OnSetRatingTemperature(
0);},OnSetTemperature:function(E){if(this.Temperature===E)return;this.Temperature=
E;A.abo([this,this.Bj6,this.OnSetTemperature],0);},OnSetId:function(E){if(this.Id===
E)return;this.Id=E;A.abo([this,this.QP,this.OnSetId],0);},OnSetAnimalId:function(
E){if(this.AnimalId===E)return;this.AnimalId=E;A.abo([this,this.Bji,this.OnSetAnimalId
],0);},OnSetFeed:function(E){if(this.Feed===E)return;this.Feed=E;A.abo([this,this.
BjB,this.OnSetFeed],0);},OnSetAppearance:function(E){if(this.Appearance===E)return;
this.Appearance=E;A.abo([this,this.Bjj,this.OnSetAppearance],0);},OnSetRespiratory:
function(E){if(this.Respiratory===E)return;this.Respiratory=E;A.abo([this,this.BjZ
,this.OnSetRespiratory],0);},OnSetFaeces:function(E){if(this.Faeces===E)return;this.
Faeces=E;A.abo([this,this.Bjz,this.OnSetFaeces],0);},OnSetTimestamp:function(E){
if(this.Timestamp===E)return;this.Timestamp=E;A.abo([this,this.A8s,this.OnSetTimestamp
],0);},Bnp:function(Nh,A3){switch(Nh){case 2:this.OnSetAppearance(A3);break;case
1:this.OnSetFeed(A3);break;case 4:this.OnSetFaeces(A3);break;case 3:this.OnSetRespiratory(
A3);break;default:;}},BhB:function(Nh){switch(Nh){case 2:return this.Appearance;
case 1:return this.Feed;case 4:return this.Faeces;case 3:return this.Respiratory;
default:return 0;}},OnSetRatingTemperature:function(E){if(this.RatingTemperature===
E)return;this.RatingTemperature=E;A.abo([this,this.BjX,this.OnSetRatingTemperature
],0);},OnSetBodyWeight:function(E){if(this.BodyWeight===E)return;this.BodyWeight=
E;A.abo([this,this.Bjn,this.OnSetBodyWeight],0);},Bj6:function(){return this.Temperature;
},QP:function(){return this.Id;},Bji:function(){return this.AnimalId;},BjB:function(
){return this.Feed;},Bjj:function(){return this.Appearance;},BjZ:function(){return this.
Respiratory;},Bjz:function(){return this.Faeces;},A8s:function(){return this.Timestamp;
},BjX:function(){return this.RatingTemperature;},Bjn:function(){return this.BodyWeight;
},_Init:function(aArg){C.Row._Init.call(this,aArg);this.__proto__=C.Rating;this.
TableId=1;var Ls=this._variants();if(Ls){this.K={};Ls._Init.call(this,aArg);}},_Done:
function(){if(this.K)this.K._Done.call(this);this.__proto__=C.Row;C.Row._Done.call(
this);},_ReInit:function(){C.Row._ReInit.call(this);if(this.K)this.K._ReInit.call(
this);},_Mark:function(D){C.Row._Mark.call(this,D);if(this.K)this.K._Mark(D);},_variants:
function(){return A.acr.Rating._variants();},K:null,_className:"Device::Rating"};
C.HelperClass={Uj:null,Ahi:null,ATJ:null,ATK:null,W:null,Au:null,Kz:null,SA:null
,AdC:null,Uq:null,Uo:null,Ad1:null,Afb:null,Afa:null,Ae$:null,Afc:null,Agg:null,
AF$:0,Init:function(aArg){A.pe([this,this.ATb],this);},Akh:function(E){this.Uj=E;
A.abo([this,this.Aq3,this.Akh],0);},AE0:function(E){this.Ahi=E;A.abo([this,this.
A8i,this.AE0],0);},Bzq:function(G){switch(A._GetAutoObject(C.Device).ScanState){
case 2:{var AtU=A._GetAutoObject(C.Device).OM;if(!AtU)throw new Error(AU$);switch(
AtU.TransponderType){case 1:this.Akh(AtU);break;case 2:this.ASI(AtU);break;case 3:
this.AE0(AtU);break;case 4:this.ASJ(AtU);break;case 0:break;default:throw new Error(
AVa);}}break;case 4:A._GetAutoObject(C.Device).A6(11,true,A.jV,2000,null);break;
case 3:A._GetAutoObject(C.Device).A6(12,true,A.jV,2000,null);break;case 0:case 1:
break;default:throw new Error(AVb);}},Akr:function(){this.Akh(null);this.ASI(null
);this.AE0(null);this.ASJ(null);},AE5:function(E){if(this.K&&this.K.AE5)return this.
K.AE5.apply(this,arguments);else return C.HelperClass.A$S.apply(this,arguments);
},A$S:function(E){A.abo([this,this.UH,this.UI],0);A._GetAutoObject(C.Device).SetSystemTime(
E);},UI:function(Aq){this.AE5(Aq);},Dt:function(){if(this.K&&this.K.Dt)return this.
K.Dt.apply(this,arguments);else return C.HelperClass.A$O.apply(this,arguments);}
,A$O:function(){var B;return((B=(this.Au.Bcj()|0))<0)?B+0x100000000:B;},UH:function(
){return this.Dt();},ArR:function(){A._GetAutoObject(C.Device).Sw(-1);this.W.Hd(
);A.we(this.W,0);},A6N:function(I_){if(!I_){A.ab5("%s%U",AVc,I_);return false;}var
Bb=A._GetAutoObject(C.Device).Ap.Agy(22,I_);return this.HF(Bb);},Amx:function(Aom
,AIt){switch(Aom){case 0:{var AoQ=AIt;switch(AoQ){case 14:return A.aaR(A.acf.Ae8
);case 6:return Asm;case 4:return A.aaR(A.acf.AdT);case 28:return Axr;case 7:return A.
aaR(A.acf.Ae0);case 2:return A.aaR(A.acf.O);case 0:return A.aaR(A.acf.GD);case 37:
return P0;case 8:return A.aaR(A.acf.Alarm);case 9:return A.aaR(A.acf.ABv);case 38:
return A.aaR(A.acf.ANi);case 11:return A.aaR(A.acf.Fever);case 27:return Axs;case
10:return A.aaR(A.acf.Bm5);case 12:return A.aaR(A.acf.ArD);case 29:return A.aaR(
A.acf.AQG);case 18:return A.aaR(A.acf.Weighing);case 17:return AVd;case 5:return A.
aaR(A.acf.Temperature);case 3:return AVe;case 26:return A.aaR(A.acf.YY);case 35:
return A.aaR(A.acf.YY)+AVf;case 36:return AVg;case 15:return AGJ;case 24:return AGK;
case 20:return Afi;case 30:return AnY;case 21:return AVh;case 19:return AGL;case
22:return A.aaR(A.acf.Transponder);case 1:return A.aaR(A.acf.Gx);case 34:return A.
aaR(A.acf.I7);case 13:return AkO;case 31:return AGM;default:{A.ab5("%s",AGN+AoQ.
toFixed());return AGO+AoQ.toFixed();}}}case 1:{var AoQ=AIt;switch(AoQ){case 1:return A.
aaR(A.acf.Animal);case 3:return A.aaR(A.acf.AFB);case 8:return A.aaR(A.acf.Ae_);
case 5:return A.aaR(A.acf.AFD);case 2:return A.aaR(A.acf.Feed);case 4:return A.aaR(
A.acf.AFE);case 7:return A.aaR(A.acf.Temperature);case 6:return A.aaR(A.acf.Bt);
default:{A.ab5("%s",AVi+AoQ.toFixed());return AGO+AoQ.toFixed();}}}default:A.ab5(
"%s",(AVj+Aom.toFixed())+AVk);}return A.jV;},A5Z:function(Aom,AM){var result=A.jV;
if(!!AM){result=this.Amx(Aom,AM.ES);result=((result+N9)+A._GetAutoObject(C.Converter
).A5I(AM.Operator))+N9;if(!!(C.Int32FilterCriterion.isPrototypeOf(AM)?AM:null))result=
result+(C.Int32FilterCriterion.isPrototypeOf(AM)?AM:null).A7.toFixed();else if(!
!(C.UInt32FilterCriterion.isPrototypeOf(AM)?AM:null))result=result+(C.UInt32FilterCriterion.
isPrototypeOf(AM)?AM:null).A7.toFixed();else if(!!(C.StringFilterCriterion.isPrototypeOf(
AM)?AM:null))result=result+(C.StringFilterCriterion.isPrototypeOf(AM)?AM:null).A7;
else if(!!(C.BoolFilterCriterion.isPrototypeOf(AM)?AM:null)){if((C.BoolFilterCriterion.
isPrototypeOf(AM)?AM:null).A7)result=this.Amx(Aom,AM.ES);else result=A.jV;}else if(
!!(C.GenderFilterCriterion.isPrototypeOf(AM)?AM:null)){var BxS=A._NewObject(C.GenderToString
,0);result=result+BxS.Lp((C.GenderFilterCriterion.isPrototypeOf(AM)?AM:null).A7);
}else if(!!(C.AnimalTypeFilterCriterion.isPrototypeOf(AM)?AM:null)){var BwN=A._NewObject(
C.AnimalTypeToString,0);result=result+BwN.Lp((C.AnimalTypeFilterCriterion.isPrototypeOf(
AM)?AM:null).A7);}else if(!!(C.AssessmentFilterCriterion.isPrototypeOf(AM)?AM:null
)){var BwQ=A._NewObject(C.AssesmentToString,0);result=result+BwQ.Lp((C.AssessmentFilterCriterion.
isPrototypeOf(AM)?AM:null).A7);}else if(!!(C.UInt64FilterCriterion.isPrototypeOf(
AM)?AM:null))result=result+(C.UInt64FilterCriterion.isPrototypeOf(AM)?AM:null).A7.
toFixed();else if(!!(C.WhereAboutsFilterCriterion.isPrototypeOf(AM)?AM:null)){var
BA$=A._NewObject(C.WhereAboutsToString,0);result=result+BA$.Lp((C.WhereAboutsFilterCriterion.
isPrototypeOf(AM)?AM:null).A7);}else A.ab5("%s",Acu);}return result;},Nd:function(
aString,Ba_,Bv2){var result=A.jV;var BeK=false;var index=0;var Bv4=Ba_.length;while(
!BeK){var A2R=aString.indexOf(Ba_,index);if(A2R!==-1){result=(result+A.abW(aString
,index,A2R-index))+Bv2;index=A2R+Bv4;}else{var Bbc=aString.length;if(index<Bbc)result=
result+A.ab2(aString,Bbc-index);BeK=true;}}return result;},ASI:function(E){this.
ATJ=E;A.abo([this,this.Bj0,this.ASI],0);},ASJ:function(E){this.ATK=E;A.abo([this
,this.Bj1,this.ASJ],0);},BcJ:function(){return((A._GetAutoObject(C.Device).ScanState===
2)&&!!A._GetAutoObject(C.Device).OM)&&(A._GetAutoObject(C.Device).OM.TransponderType===
1);},AfM:function(G){if(!this.W.AmI()&&!!this.W.Id)this.BiF(this.W.Id);},AuQ:function(
Ee){return A._GetAutoObject(C.Helper).Uq.Get(Ee);},A5U:function(Ee){return A._GetAutoObject(
C.Helper).Uo.Get(Ee);},A53:function(){var P=0;var min=32767;while(P<A._GetAutoObject(
C.Helper).Uq.Mx){if(A._GetAutoObject(C.Helper).Uq.Get(P)<min)min=A._GetAutoObject(
C.Helper).Uq.Get(P);P=P+1;}return min;},ATb:function(G){A.zV([this,this.AfM],A._GetAutoObject(
C.Device).Ap,0);},AQo:function(DU){if(!DU)return false;var Bif=(((this.Azf(DU.Faeces
)||this.Azf(DU.Feed))||this.Azf(DU.Appearance))||this.Azf(DU.Respiratory))||this.
Azf(DU.RatingTemperature);return Bif||this.A6x(DU);},Azf:function(BaO){return(BaO===
2)||(BaO===1);},A6x:function(DU){return!!DU&&(DU.Temperature>A._GetAutoObject(C.
Helper).AuQ(A._GetAutoObject(C.Helper).W.AnimalType));},HF:function(L1){var A1M=
false;if(L1>=0){if(L1!==this.W.CH)A._GetAutoObject(C.Device).Sw(L1);A1M=this.W.EC(
L1,A._GetAutoObject(C.Device).Ap);if(A1M)A.we(this.W,0);}else{A._GetAutoObject(C.
Device).Sw(-1);this.W.Hd();A.we(this.W,0);}return A1M;},Ahr:function(AhL){var B;
return(((B=(this.Au.Bcj()|0))<0)?B+0x100000000:B)-this.Amj(AhL);},Ar6:function(){
var B;A.pe([B=this.Kz,B.Anz],this);},BAA:function(G){A._GetAutoObject(C.Device).
A6(16,false,AGP,0,null);A._GetAutoObject(C.Device).A6(5,true,A.jV,0,null);},Bmz:
function(G){var As=(C.PopupContext.isPrototypeOf(G)?G:null);if(!!As&&(As.PopupState===
5))this.Ar6();},Bmn:function(E){if(this.AF$===E)return;this.AF$=E;A._GetAutoObject(
C.Device).A6(16,true,this.AF$.toFixed(),0,[this,this.Bmz]);},MK:function(BvC,Bwh
){var D1;var Bfb=A._NewObject(A.Core.AnG,0);var Gv=A._NewObject(A.Core.Bt,0);var
K1=A._NewObject(A.Core.Bt,0);Gv.Initialize(BvC);K1.Initialize(Bwh);D1=K1.BgR(Gv);
Bfb.Initialize2(0,D1.ACJ,D1.ADy,D1.AFP);if(Gv.J(Bfb).GB===Gv.GB)return D1.J8;else
return D1.J8+1;},BAC:function(G){A._GetAutoObject(C.Device).UpdateMeasureState(3
);if((A._GetAutoObject(C.Device).Ko>=A._GetAutoObject(C.Device).ZA)&&(A._GetAutoObject(
C.Device).Ko<=A._GetAutoObject(C.Helper).AuQ(A._GetAutoObject(C.Helper).W.AnimalType
))){var AIL=A._GetAutoObject(C.Helper).W.Id;var Bz4=A._GetAutoObject(C.Device).Ap.
K_(0,AIL);A._GetAutoObject(C.Device).Ap.Mv(Bz4,9,false);A._GetAutoObject(C.Device
).Ap.Bi(A._GetAutoObject(C.Device).Ap.Filter);}},AKp:function(G){var Bf5=A._GetAutoObject(
C.Helper).AuQ(A._GetAutoObject(C.Helper).W.AnimalType);var BfZ=A._GetAutoObject(
C.Helper).A5U(A._GetAutoObject(C.Helper).W.AnimalType);var Af1=A.abz(Bf5-100,BfZ+
100);this.Bb0(Af1);},Amj:function(AhL){return AhL*86400;},AkH:function(JS){var B;
if(!!JS&&(JS<(((B=Math.trunc(Math.pow(10,A._GetAutoObject(C.Device).Fy)))<0)?B+0x10000000000000000:
B)))return-1;return A._GetAutoObject(C.Helper).TB(JS,A._GetAutoObject(C.Device).
Fy&0xFF,A._GetAutoObject(C.Device).FP&0xFF)|0;},AFC:function(DU){if(!DU)return false;
return((!!DU.Faeces||!!DU.Feed)||!!DU.Appearance)||!!DU.Respiratory;},Ahy:function(
AZ3,Bbe,AIu,Ee){var B;var Aps;if((AZ3<650000)&&(Bbe<this.Dt())){var BbB=this.Agg.
AuS(Ee);var BbA=0;if(BbB>=0)BbA=this.Ae$.Get(BbB);Aps=AZ3+(this.MK(Bbe,this.Dt()
)*BbA);if(AIu>0){var A0X=this.Az8(AIu);Aps=(Math.trunc(((((B=Aps)<0)?B+0x10000000000000000:
B)+Math.trunc(A0X/2))/A0X)*A0X)|0;}if(Aps>650000)Aps=650000;}else Aps=AZ3;return Aps;
},ACn:function(DU){var ApP=A._GetAutoObject(C.Converter).AdD(DU.Faeces);if(ApP<A.
_GetAutoObject(C.Converter).AdD(DU.Feed))ApP=A._GetAutoObject(C.Converter).AdD(DU.
Feed);if(ApP<A._GetAutoObject(C.Converter).AdD(DU.Appearance))ApP=A._GetAutoObject(
C.Converter).AdD(DU.Appearance);if(ApP<A._GetAutoObject(C.Converter).AdD(DU.Respiratory
))ApP=A._GetAutoObject(C.Converter).AdD(DU.Respiratory);return A._GetAutoObject(
C.Converter).A_Q(ApP);},AwN:function(DU,Ng){if(!!DU){DU.OnSetFaeces(Ng);DU.OnSetFeed(
Ng);DU.OnSetAppearance(Ng);DU.OnSetRespiratory(Ng);}},Bhz:function(AG,AIz,AcL,W4
,Afm){if(!AG)throw new Error(Asn);var Ba=A._NewObject(C.Filter,0);var Ape=AG.Filter;
var Oa=A._NewObject(C.Int32FilterCriterion,0);Oa.Operator=0;Oa.ES=1;Oa.A7=AcL;Ba.
CX(Oa);if(W4>0){var Oo=A._NewObject(C.UInt32FilterCriterion,0);Oo.Operator=2;Oo.
ES=6;Oo.A7=W4;Ba.CX(Oo);}if(Afm>0){var Oe=A._NewObject(C.UInt32FilterCriterion,0
);Oe.Operator=3;Oe.ES=6;Oe.A7=Afm;Ba.CX(Oe);}AG.Bi(Ba);var L2=A._NewObject(C.Int32ArrayWrapper
,0);L2.Y$(6);var P;for(P=0;P<L2.Mx;P=P+1)L2.Set(P,0);var UP;for(P=0;P<AG.Cb();P=
P+1){UP=AG.IV(P,AIz);L2.Set(UP,L2.Get(UP)+1);}AG.Bi(Ape);return L2;},Zq:function(
AhL){var B;var Gv=A._NewObject(A.Core.Bt,0);var Bfa=A._NewObject(A.Core.AnG,0);Gv.
Initialize(A._GetAutoObject(C.Converter).Aht());Bfa.Initialize2(AhL,0,0,0);Gv=Gv.
BnT(Bfa);return((B=(Gv.JH()|0))<0)?B+0x100000000:B;},A5V:function(AG,AcL,Afm,W4){
if(!AG)throw new Error(Asn);var Ba=A._NewObject(C.Filter,0);var Ape=AG.Filter;var
Oa=A._NewObject(C.Int32FilterCriterion,0);Oa.Operator=0;Oa.ES=1;Oa.A7=AcL;Ba.CX(
Oa);if(W4>0){var Oo=A._NewObject(C.UInt32FilterCriterion,0);Oo.Operator=2;Oo.ES=
6;Oo.A7=W4;Ba.CX(Oo);}if(Afm>0){var Oe=A._NewObject(C.UInt32FilterCriterion,0);Oe.
Operator=3;Oe.ES=6;Oe.A7=Afm;Ba.CX(Oe);}AG.Bi(Ba);var L2=A._NewObject(C.Int32ArrayWrapper
,0);L2.Y$(6);var P;for(P=0;P<L2.Mx;P=P+1)L2.Set(P,0);var AoE=A._NewObject(C.Rating
,0);var A0P;for(P=0;P<AG.Cb();P=P+1){AoE.EC(P,AG);if(A._GetAutoObject(C.Helper).
AFC(AoE)){A0P=A._GetAutoObject(C.Helper).ACn(AoE);L2.Set(A0P,L2.Get(A0P)+1);}}AG.
Bi(Ape);return L2;},A1l:function(AG,AcL,Bxn){if(!AG)throw new Error(Asn);var Ba=
A._NewObject(C.Filter,0);var Ape=AG.Filter;var Oa=A._NewObject(C.Int32FilterCriterion
,0);Oa.Operator=0;Oa.ES=1;Oa.A7=AcL;Ba.CX(Oa);var W4=A._GetAutoObject(C.Converter
).Aht()+A._GetAutoObject(C.Helper).Amj(Bxn);var Afm=W4+A._GetAutoObject(C.Helper
).Amj(1);var Oo=A._NewObject(C.UInt32FilterCriterion,0);Oo.Operator=2;Oo.ES=6;Oo.
A7=W4;Ba.CX(Oo);var Oe=A._NewObject(C.UInt32FilterCriterion,0);Oe.Operator=3;Oe.
ES=6;Oe.A7=Afm;Ba.CX(Oe);AG.Bi(Ba);var AoE=A._NewObject(C.Rating,0);var UP;var LL=
0;var P;for(P=0;P<AG.Cb();P=P+1){AoE.EC(P,AG);if(A._GetAutoObject(C.Helper).AFC(
AoE)){UP=A._GetAutoObject(C.Helper).ACn(AoE);if(A._GetAutoObject(C.Converter).AdD(
UP)>A._GetAutoObject(C.Converter).AdD(LL))LL=UP;}}AG.Bi(Ape);return LL;},AmH:function(
){if((A._GetAutoObject(C.Device).WeightRecordingScope===2)||(A._GetAutoObject(C.
Device).WeightRecordingScope===1))return true;else return false;},A6A:function(){
if((A._GetAutoObject(C.Device).WeightRecordingScope===2)||!A._GetAutoObject(C.Device
).WeightRecordingScope)return true;else return false;},BhA:function(AG,AIz,AcL,W4
,Afm){if(!AG)throw new Error(Asn);var Ba=A._NewObject(C.Filter,0);var Ape=AG.Filter;
var Oa=A._NewObject(C.Int32FilterCriterion,0);Oa.Operator=0;Oa.ES=1;Oa.A7=AcL;Ba.
CX(Oa);if(W4>0){var Oo=A._NewObject(C.UInt32FilterCriterion,0);Oo.Operator=2;Oo.
ES=6;Oo.A7=W4;Ba.CX(Oo);}if(Afm>0){var Oe=A._NewObject(C.UInt32FilterCriterion,0
);Oe.Operator=3;Oe.ES=6;Oe.A7=Afm;Ba.CX(Oe);}AG.Bi(Ba);var L2=A._NewObject(C.Int32ArrayWrapper
,0);L2.Y$(6);var P;for(P=0;P<L2.Mx;P=P+1)L2.Set(P,0);if(AG.Cb()>0){var UP=AG.IV(
0,AIz);var Apx=AG.Hz(P,6);var Ac=A._NewObject(A.Core.Bt,0);Ac.Initialize(Apx);var
ApO=UP;var AJs=A._NewObject(A.Core.Bt,0);AJs.Initialize(Ac.JH());for(P=1;P<AG.Cb(
);P=P+1){UP=AG.IV(P,AIz);Apx=AG.Hz(P,6);Ac.Initialize(Apx);if((Ac.AbC()!==AJs.AbC(
))||(Ac.Year!==AJs.Year)){L2.Set(ApO,L2.Get(ApO)+1);AJs.Initialize(Ac.JH());ApO=
UP;}else if(!!UP&&(UP<ApO))ApO=UP;}L2.Set(ApO,L2.Get(ApO)+1);}AG.Bi(Ape);return L2;
},ApY:function(LX){var B;var Gv=A._NewObject(A.Core.Bt,0);Gv.Initialize(LX);Gv.Anc(
0);Gv.Anf(0);Gv.Ani(0);return((B=(Gv.JH()|0))<0)?B+0x100000000:B;},ANw:function(
LX){var B;LX=LX+86400;var Gv=A._NewObject(A.Core.Bt,0);Gv.Initialize(LX);Gv.Anc(
0);Gv.Anf(0);Gv.Ani(0);return((B=(Gv.JH()|0))<0)?B+0x100000000:B;},BhC:function(
BAy,Bxy,AlP,Ald){var BbV=A._GetAutoObject(C.Helper).MK(BAy,Bxy);if(BbV>0)return((
Ald-AlP)/BbV)|0;return 0;},Bov:function(BvD,Bwi){var Gv=A._NewObject(A.Core.Bt,0
);var K1=A._NewObject(A.Core.Bt,0);Gv.Initialize(BvD);K1.Initialize(Bwi);return(
Gv.Year===K1.Year)&&(Gv.AbC()===K1.AbC());},A51:function(){var Ba=A._GetAutoObject(
C.Helper).Mj();var BcX=A._NewObject(C.UInt32FilterCriterion,0);var Bwr=A._GetAutoObject(
C.Helper).Zq(A._GetAutoObject(C.Device).Aqm)-1;BcX.Initialize(28,2,Bwr,true);Ba.
CX(BcX);var UL=A._NewObject(C.AnimalTypeFilterCriterion,0);UL.Initialize(14,0,1,
true);Ba.CX(UL);if(A._GetAutoObject(C.Device).Aqn){var Azv=A._NewObject(C.UInt32FilterCriterion
,0);var A1H=A._GetAutoObject(C.Helper).Dt()-21600;Azv.Initialize(30,3,A1H,true);
Ba.CX(Azv);}return Ba;},Bm_:function(){var Jd=A._GetAutoObject(C.Device).Ap.Ov();
if(Jd<=0)A.ab5("%s",Act);else{A._GetAutoObject(C.Device).Ap.Hd();A._GetAutoObject(
C.Device).Ap.Ox(Jd);}Jd=A._GetAutoObject(C.Device).Af_.Ov();if(Jd<=0)A.ab5("%s",
Act);else{A._GetAutoObject(C.Device).Af_.Hd();A._GetAutoObject(C.Device).Af_.Ox(
Jd);}Jd=A._GetAutoObject(C.Device).Br.Ov();if(Jd<=0)A.ab5("%s",Act);else{A._GetAutoObject(
C.Device).Br.Hd();A._GetAutoObject(C.Device).Br.Ox(Jd);}Jd=A._GetAutoObject(C.Device
).Ph.Ov();if(Jd<=0)A.ab5("%s",Act);else{A._GetAutoObject(C.Device).Ph.Hd();A._GetAutoObject(
C.Device).Ph.Ox(Jd);}},BiF:function(AcL){var Bb=A._GetAutoObject(C.Device).Ap.K_(
0,AcL);return this.HF(Bb);},AQu:function(I_){var Aic=A._GetAutoObject(C.Device).
Ap.AdZ(22,I_);return Aic;},ACe:function(){var Ba=A._GetAutoObject(C.Helper).Mj();
var AiT=A._NewObject(C.UInt64FilterCriterion,0);AiT.Initialize(22,0,0,true);Ba.CX(
AiT);return Ba;},AN7:function(Aox,Bxv,SZ){var Z2=-1;switch(Aox){case 2:Z2=30;break;
case 3:Z2=31;break;case 10:Z2=19;break;default:A.ab5("%s%e",SW,Aox);}if(Z2<0)return null;
var Ac0=A._NewObject(C.UInt32FilterCriterion,0);Ac0.Initialize(Z2,3,A._GetAutoObject(
C.Helper).Dt()-Bxv,SZ);return Ac0;},Bm8:function(aFilter){var AM=aFilter.DX(30,3
);if(!!AM)aFilter.QW(AM);AM=aFilter.DX(31,3);if(!!AM)aFilter.QW(AM);AM=aFilter.DX(
19,3);if(!!AM)aFilter.QW(AM);},A0G:function(Afw,Aya,AG){if(AG.Ld())return 5;if(Afw.
VisualId<=0)switch(Aya){case 0:if(!Afw.NaisId)return 1;break;case 1:if(!Afw.TransponderId
)return 1;break;case 3:case 2:case 5:case 4:return 1;default:throw new Error(AGQ+
Aya.toFixed());}if((!Afw.NaisId&&!Afw.TransponderId)&&A._GetAutoObject(C.Device).
Ap.Ajr(1,Afw.VisualId))return 2;if(!!Afw.NaisId&&A._GetAutoObject(C.Helper).AQs(
Afw.NaisId))return 3;if(!!Afw.TransponderId&&A._GetAutoObject(C.Helper).AQu(Afw.
TransponderId))return 4;return 0;},ApT:function(EE){EE.DT(A._GetAutoObject(C.Device
).AnimalType);EE.NT(A._GetAutoObject(C.Device).Breed);EE.QR(A._GetAutoObject(C.Helper
).Dt()-A._GetAutoObject(C.Helper).Amj(A._GetAutoObject(C.Device).Adv));EE.JI(A._GetAutoObject(
C.Device).Gender);EE.Nb(A._GetAutoObject(C.Device).WhereAbouts);},ALG:function(Rc
,EE){var GK=0;switch(Rc){case 0:GK=A._GetAutoObject(C.Helper).AkH(EE.NaisId);break;
case 1:GK=A._GetAutoObject(C.Helper).AkH(EE.TransponderId);break;case 3:GK=A._GetAutoObject(
C.Device).Aqx;break;case 2:GK=A._GetAutoObject(C.Device).Aqy;break;case 4:case 5:
GK=A._GetAutoObject(C.Device).AjC;break;default:throw new Error(AGR+Rc.toFixed()
);}return GK;},A_X:function(AkW,LY,Bvp,BaS,BvX){var B;var Qe=null;var Xd=null;switch(
AkW){case 0:{Qe=[B=A._GetAutoObject(C.Device),B.ARR,B.AZo];Xd=[B=A._GetAutoObject(
C.Device),B.AvG,B.Ax6];}break;case 1:switch(LY){case 1:{Qe=[B=A._GetAutoObject(C.
Device),B.A79,B.Ban];Xd=[B=A._GetAutoObject(C.Device),B.AvE,B.Ax4];}break;case 0:{
Qe=[B=A._GetAutoObject(C.Device),B.A7_,B.Bao];Xd=[B=A._GetAutoObject(C.Device),B.
AvF,B.Ax5];}break;case 2:{Qe=[B=A._GetAutoObject(C.Device),B.ARR,B.AZo];Xd=[B=A.
_GetAutoObject(C.Device),B.AvG,B.Ax6];}break;default:throw new Error(Axt+LY.toFixed(
));}break;default:throw new Error(AGS+AkW.toFixed());}if(!!Qe&&!!Xd){Qe[2].call(
Qe[0],Bvp);if((Xd[1].call(Xd[0])>0)&&(BaS<BvX))Qe[2].call(Qe[0],Qe[1].call(Qe[0]
)+Xd[1].call(Xd[0]));else if((Xd[1].call(Xd[0])<0)&&(BaS>0))Qe[2].call(Qe[0],Qe[
1].call(Qe[0])+Xd[1].call(Xd[0]));return Qe[1].call(Qe[0]);}return 0;},AUH:function(
EE,AkW,Bvw){if(!EE||(Bvw===true))return;switch(AkW){case 0:EE.Na(A._GetAutoObject(
C.Device).Avp);break;case 1:switch(EE.Gender){case 0:EE.Na(A._GetAutoObject(C.Device
).ADB);break;case 1:EE.Na(A._GetAutoObject(C.Device).ADA);break;case 2:EE.Na(A._GetAutoObject(
C.Device).Avp);break;default:throw new Error(Axt+EE.Gender.toFixed());}break;default:
throw new Error(AGS+AkW.toFixed());}},Big:function(Rc,EE){var result=false;switch(
Rc){case 0:result=!!EE.NaisId;break;case 1:result=!!EE.TransponderId;break;case 3:
case 2:case 4:case 5:result=false;break;default:throw new Error(AGR+Rc.toFixed()
);}return result;},AJG:function(EE,BaN,Aya,AsY,Afp){switch(BaN){case 2:if(AsY<=0
)A._GetAutoObject(C.Device).A6(21,true,EE.VisualId.toFixed(),0,Afp);else A._GetAutoObject(
C.Device).A6(48,true,(EE.VisualId.toFixed()+Axu)+AsY.toFixed(),0,Afp);break;case
3:if(AsY<=0)A._GetAutoObject(C.Device).A6(21,true,A._GetAutoObject(C.Converter).
SK(EE.NaisId),0,Afp);else A._GetAutoObject(C.Device).A6(48,true,(A._GetAutoObject(
C.Converter).SK(EE.NaisId)+Axu)+AsY.toFixed(),0,Afp);break;case 4:if(AsY<=0)A._GetAutoObject(
C.Device).A6(25,true,A._GetAutoObject(C.Converter).SK(EE.TransponderId),0,Afp);else
A._GetAutoObject(C.Device).A6(47,true,(A._GetAutoObject(C.Converter).SK(EE.TransponderId
)+Axu)+AsY.toFixed(),0,Afp);break;case 1:switch(Aya){case 1:A._GetAutoObject(C.Device
).A6(42,true,A.jV,0,Afp);break;case 0:A._GetAutoObject(C.Device).A6(43,true,A.jV
,0,Afp);break;case 3:case 2:case 5:case 4:A._GetAutoObject(C.Device).A6(22,true,
A.jV,0,Afp);break;default:throw new Error(AGQ+Aya.toFixed());}break;case 5:A._GetAutoObject(
C.Device).A6(41,true,A._GetAutoObject(C.Device).Ap.HA().toFixed(),0,Afp);break;case
0:break;default:throw new Error(AVl+BaN.toFixed());}},Bcn:function(Ba0,LY){var B;
var Azz=null;switch(Ba0){case 0:Azz=[B=A._GetAutoObject(C.Device),B.AvG,B.Ax6];break;
case 1:switch(LY){case 1:Azz=[B=A._GetAutoObject(C.Device),B.AvE,B.Ax4];break;case
0:Azz=[B=A._GetAutoObject(C.Device),B.AvF,B.Ax5];break;case 2:Azz=[B=A._GetAutoObject(
C.Device),B.AvG,B.Ax6];break;default:throw new Error(Axt+LY.toFixed());}break;default:
throw new Error(AVm+Ba0.toFixed());}return Azz;},A5$:function(P5,Bv_){var Aap=A.
_NewObject(A.Core.Bt,0);Aap.Initialize(P5);var AAP=Aap.Year;var Bb=A._GetAutoObject(
C.Device).Ph.K_(0,AAP);var UO=A._NewObject(C.CalfDeregistrations,0);if(Bb<0){if(
A._GetAutoObject(C.Device).Ph.Ld())A._GetAutoObject(C.Device).A6(51,true,A._GetAutoObject(
C.Device).Ph.HA().toFixed(),0,null);else{UO.Gf();UO.Akj(AAP);}}else UO.EC(Bb,A._GetAutoObject(
C.Device).Ph);UO.AvX(UO.Deregistrations+1);if(Bv_)UO.AvW(UO.Deaths+1);UO.Ck(A._GetAutoObject(
C.Device).Ph);},ALE:function(LL,Aln,Ale){var AJ3=0;if((Aln&&(Ale===1))||(LL===1)
)AJ3=1;else if((Aln&&(Ale===2))||(LL===2))AJ3=2;else if(!!LL&&(LL!==5))AJ3=LL;return AJ3;
},Bb0:function(Bwq){var B;if(A._GetAutoObject(C.Device).MeasureState===1){this.SA.
Cr=A._GetAutoObject(C.Device).ZA;this.SA.B1=Bwq;this.SA.Anx(this);}},ACb:function(
){var Ba=this.AN6();var BcM=A._NewObject(C.BoolFilterCriterion,0);BcM.Initialize(
38,0,true,true);Ba.CX(BcM);return Ba;},A5S:function(Ev){var Ba=A._GetAutoObject(
C.Helper).Mj();if(A._GetAutoObject(C.Device).ApQ){var A1o=A._GetAutoObject(C.Helper
).AN7(Ev,21600,true);Ba.CX(A1o);}return Ba;},A55:function(){var Ba=A._GetAutoObject(
C.Helper).Mj();var Bdb=A._NewObject(C.UInt64FilterCriterion,0);Bdb.Initialize(26
,0,0,true);Ba.CX(Bdb);return Ba;},A58:function(){var B;var Ba=A._GetAutoObject(C.
Helper).Mj();var AzF=(C.WhereAboutsFilterCriterion.isPrototypeOf(B=Ba.DX(34,3))?
B:null);if(!!AzF)Ba.QW(AzF);var Bes=A._NewObject(C.BoolFilterCriterion,0);Bes.Initialize(
37,0,true,true);Ba.CX(Bes);return Ba;},TB:function(A3,Bv3,AZ4){var B;A3=Math.trunc(
A3/this.Az8(Bv3));A3%=this.Az8(AZ4);return A3;},Az8:function(Ba1){switch(Ba1){case
0:return 1;case 1:return 10;case 2:return 100;case 3:return 1000;case 4:return 10000;
case 5:return 100000;case 6:return 1000000;case 7:return 10000000;case 8:return 100000000;
case 9:return 1000000000;case 10:return 10000000000;case 11:return 100000000000;
case 12:return 1000000000000;case 13:return 10000000000000;case 14:return 100000000000000;
case 15:return 1000000000000000;default:throw new Error(AVn+Ba1.toFixed());}},Mj:
function(){var Ba=A._NewObject(C.Filter,0);var BeO=A._NewObject(C.BoolFilterCriterion
,0);BeO.Initialize(10,0,true,true);Ba.CX(BeO);var AzF=A._NewObject(C.WhereAboutsFilterCriterion
,0);AzF.Initialize(34,3,6,true);Ba.CX(AzF);return Ba;},AqI:function(aFilter){return!
this.ACf(aFilter);},ACf:function(aFilter){var Ja=0;var Az=aFilter.AN8();while(!!
Az){if(Az.Abi===false)Ja++;Az=aFilter.AOb(Az);}return Ja;},AN6:function(){var Ba=
this.Mj();var UL=A._NewObject(C.AnimalTypeFilterCriterion,0);UL.Initialize(14,0,
1,true);Ba.CX(UL);return Ba;},ACk:function(){var B;var A3n;var JU=this.BhT();A3n=(((
B=A._GetAutoObject(C.Converter).Ap7(JU))<0)?B+0x10000000000000000:B)*this.Az8(12
);if((JU===10)&&(A._GetAutoObject(C.Device).Ug>0)){var BxT=A._GetAutoObject(C.Helper
).TB(A._GetAutoObject(C.Device).Ug,10,2)*this.Az8(8);A3n+=BxT;}return A3n;},BhT:
function(){var JU=0;if(A._GetAutoObject(C.Device).Ug>0)JU=A._GetAutoObject(C.Converter
).Acg(A._GetAutoObject(C.Device).Ug);if(!JU)JU=A._GetAutoObject(C.Converter).A6D(
A._GetAutoObject(C.Device).Language);return JU;},AQs:function(W3){var Aic=A._GetAutoObject(
C.Device).Ap.AdZ(26,W3);return Aic;},AjK:function(Afq){switch(Afq){case 0:case 1:
case 2:case 3:case 4:case 5:return false;case 6:case 7:case 8:case 9:case 10:return true;
default:throw new Error(AVo+Afq.toFixed());}},BfX:function(Rc,EE){var GK=0;switch(
Rc){case 1:GK=A._GetAutoObject(C.Helper).AkH(EE.TransponderId);break;case 0:if(!
A._GetAutoObject(C.Device).EartagNrAssignmentMode)GK=A._GetAutoObject(C.Device).
AjC;else switch(EE.Gender){case 0:GK=A._GetAutoObject(C.Device).Aqy;break;case 1:
GK=A._GetAutoObject(C.Device).Aqx;break;case 2:GK=A._GetAutoObject(C.Device).AjC;
break;default:throw new Error(AGT+EE.Gender.toFixed());}break;default:throw new Error(
AVp+Rc.toFixed());}return GK;},Bhp:function(){var B;var Azc=(((((((A.aaR(A.acf.Ahl
)+A.aaR(A.acf.Colon))+OZ)+A._GetAutoObject(C.Device).Ahl)+Axv)+A.aaR(A.acf.BmQ))+
A.aaR(A.acf.Colon))+OZ)+A._GetAutoObject(A.acj.KE).Bhn(((B=A._GetAutoObject(C.Device
).QM.Timestamp)<0)?B+0x100000000:B);return Azc;},Bhq:function(){var B;var Azc=((((((((((((((((((((((((((((
AVq+A._GetAutoObject(C.Device).RK.ADq.toFixed())+Lr)+A._GetAutoObject(C.Device).
RK.ADx.toFixed())+Lr)+A._GetAutoObject(C.Device).RK.AFL.toFixed())+OY)+A._GetAutoObject(
C.Device).RK.ABC)+OY)+A._GetAutoObject(A.acj.KE).Aju(((B=A._GetAutoObject(C.Device
).RK.Timestamp)<0)?B+0x100000000:B))+OZ)+AVr)+A._GetAutoObject(C.Device).Sk.ADq.
toFixed())+Lr)+A._GetAutoObject(C.Device).Sk.ADx.toFixed())+Lr)+A._GetAutoObject(
C.Device).Sk.AFL.toFixed())+OY)+A._GetAutoObject(C.Device).Sk.ABC)+OY)+A._GetAutoObject(
A.acj.KE).Aju(((B=A._GetAutoObject(C.Device).Sk.Timestamp)<0)?B+0x100000000:B))+
OZ)+AVs)+A._GetAutoObject(C.Helper).BhW())+OY)+A._GetAutoObject(C.Device).GetCommitHash(
))+OY)+A._GetAutoObject(C.Device).GetCommitCount().toFixed())+OY)+A._GetAutoObject(
A.acj.KE).Aju(A._GetAutoObject(C.Device).GetCommitEpoch());return Azc;},Bho:function(
){var B;var Azc=(((((((((((((((((((((AVt+A._GetAutoObject(C.Device).QM.AQR.toFixed(
))+Lr)+A._GetAutoObject(C.Device).QM.AQS.toFixed())+Lr)+A._GetAutoObject(C.Device
).QM.AQQ.toFixed())+OZ)+A.aaR(A.acf.A5L))+A.aaR(A.acf.Colon))+N9)+A._GetAutoObject(
A.acj.KE).Aju(((B=A._GetAutoObject(C.Device).QM.Timestamp)<0)?B+0x100000000:B))+
Axv)+AVu)+A._GetAutoObject(C.Device).SG.AUA.toFixed())+Lr)+A._GetAutoObject(C.Device
).SG.AUB.toFixed())+Lr)+A._GetAutoObject(C.Device).SG.AUz.toFixed())+OZ)+A.aaR(A.
acf.A5L))+A.aaR(A.acf.Colon))+N9)+A._GetAutoObject(A.acj.KE).Aju(((B=A._GetAutoObject(
C.Device).SG.Timestamp)<0)?B+0x100000000:B);return Azc;},A56:function(AZ4){var B;
var P;var AAb=A.jV;for(P=1;P<=AZ4;P=P+1)if(!!A.abz(0,2))AAb=AAb+String.fromCharCode(
A.abz(97,104)&0xFFFF);else AAb=AAb+String.fromCharCode(A.abz(48,57)&0xFFFF);return AAb;
},Aa2:function(Ee){var Ays=0;if(Ee===1)Ee=0;var BbF=this.Agg.AuS(Ee);if(BbF>=0)Ays=
this.Afc.Get(BbF);return Ays;},ACm:function(Ee){var FK=0;var AAN=this.Agg.AuS(Ee
);if(AAN>=0)FK=this.Afb.Get(AAN);return FK;},ACl:function(Ee){var FK=0;var AAN=this.
Agg.AuS(Ee);if(AAN>=0)FK=this.Afa.Get(AAN);return FK;},A5Y:function(){var Ba=this.
Mj();var UL=A._NewObject(C.AnimalTypeFilterCriterion,0);UL.Initialize(14,0,A._GetAutoObject(
C.Device).ABX,true);Ba.CX(UL);return Ba;},AQv:function(JS){var BM=Math.trunc(JS/
1000000000000)|0;if(!BM)return 0;else if(BM>=900)return 1;else if(!A._GetAutoObject(
C.Converter).AMV(BM))return 2;else return 3;},A5_:function(){var Ba=A._GetAutoObject(
C.Helper).ACe();var Afv=A._GetAutoObject(C.Helper).A5T(3,A._GetAutoObject(C.Device
).ADt);Afv.Abi=true;Ba.CX(Afv);return Ba;},A5T:function(EG,BaM){var Az=A._NewObject(
C.UInt32FilterCriterion,0);Az.ES=4;switch(EG){case 2:{Az.Operator=3;Az.A7=A._GetAutoObject(
C.Helper).Zq(BaM);}break;case 3:{Az.Operator=2;Az.A7=A._GetAutoObject(C.Helper).
Zq(BaM-1);}break;default:A.ab5("%s%e",AVv,EG);}return Az;},BhW:function(){return(((
A._GetAutoObject(C.Device).GetVersionMajor().toFixed()+Lr)+A._GetAutoObject(C.Device
).GetVersionMinor().toFixed())+Lr)+A._GetAutoObject(C.Device).GetVersionRev().toFixed(
);},BfY:function(Rc,EE){var GK=0;switch(Rc){case 0:GK=EE.VisualId;break;case 2:GK=
A._GetAutoObject(C.Helper).AkH(EE.TransponderId);break;case 1:if(!A._GetAutoObject(
C.Device).EartagNrAssignmentMode)GK=A._GetAutoObject(C.Device).AjC;else switch(EE.
Gender){case 0:GK=A._GetAutoObject(C.Device).Aqy;break;case 1:GK=A._GetAutoObject(
C.Device).Aqx;break;case 2:GK=A._GetAutoObject(C.Device).AjC;break;default:throw new
Error(AGT+EE.Gender.toFixed());}break;default:throw new Error(AVw+Rc.toFixed());
}return GK;},A_Y:function(){var B;var IM=null;var S6=0;if(!A._GetAutoObject(C.Device
).EartagNrAssignmentMode){IM=[B=A._GetAutoObject(C.Device),B.Am5,B.Aob];S6=A._GetAutoObject(
C.Device).Aus;}else switch(A._GetAutoObject(C.Helper).W.Gender){case 1:{IM=[B=A.
_GetAutoObject(C.Device),B.AvB,B.Ax2];S6=A._GetAutoObject(C.Device).ABP;}break;case
0:{IM=[B=A._GetAutoObject(C.Device),B.AvC,B.Ax3];S6=A._GetAutoObject(C.Device).ABQ;
}break;case 2:{IM=[B=A._GetAutoObject(C.Device),B.Am5,B.Aob];S6=A._GetAutoObject(
C.Device).Aus;}break;default:;}if(!!IM)switch(S6){case 1:IM[2].call(IM[0],A._GetAutoObject(
C.Helper).W.VisualId-1);break;case 0:IM[2].call(IM[0],A._GetAutoObject(C.Helper).
W.VisualId+1);break;default:;}},A6B:function(W3,EE){return(EE.NaisId!==W3)&&this.
AQs(W3);},Bip:function(I_,EE){return(EE.TransponderId!==I_)&&this.AQu(I_);},AN4:
function(){var Ba=A._GetAutoObject(C.Helper).A58();var Azx=A._NewObject(C.UInt64FilterCriterion
,0);Azx.Initialize(35,5,0,true);Ba.CX(Azx);return Ba;},AOd:function(){var Ba=A._GetAutoObject(
C.Helper).A58();var Azx=A._NewObject(C.UInt64FilterCriterion,0);Azx.Initialize(35
,0,0,true);Ba.CX(Azx);return Ba;},Mw:function(AZU,AhK){AZU.Aj(AhK);AZU.Ar(AhK);AZU.
Y(AhK);},AMO:function(AhM){var B;var Aa;var A1Z=false;var W9=AhM.Vw(null,0x1);while(
!!W9&&(((B=W9)?B.__proto__:null)!==A.Core.Z)){Aa=(A.kR.Ci.isPrototypeOf(W9)?W9:null
);if(!!Aa){Aa.Bg(A1Z);A1Z=!A1Z;}W9=AhM.Vw(W9,0x1);}},Bm9:function(I_){var AhX=A.
_GetAutoObject(C.Device).Ap.Filter;A._GetAutoObject(C.Device).Ap.Bi(null);var A27=
A._GetAutoObject(C.Device).Ap.Agy(22,I_);A._GetAutoObject(C.Device).Ap.Sx(A27,22
,0);A._GetAutoObject(C.Device).Ap.Bi(AhX);},A5W:function(AsR){var Ba=null;switch(
AsR){case 0:Ba=this.BhH();break;case 1:Ba=this.ACe();break;default:throw new Error(
AGU+AsR.toFixed());}return Ba;},BhH:function(){var Ba=A._GetAutoObject(C.Helper).
Mj();var Afv=this.A5T(2,100);Ba.CX(Afv);return Ba;},BwP:function(AsR){var AhX=A.
_GetAutoObject(C.Device).Ap.Filter;A._GetAutoObject(C.Device).Ap.Bi(this.A5W(AsR
));var P;for(P=0;P<A._GetAutoObject(C.Device).Ap.Cb();P++)A._GetAutoObject(C.Device
).Ap.Mv(P,10,false);A._GetAutoObject(C.Device).Ap.Bi(AhX);},BhI:function(AsR){var
AhX=A._GetAutoObject(C.Device).Ap.Filter;A._GetAutoObject(C.Device).Ap.Bi(this.A5W(
AsR));var FX=A._GetAutoObject(C.Device).Ap.Cb();A._GetAutoObject(C.Device).Ap.Bi(
AhX);return FX;},Aq3:function(){return this.Uj;},A8i:function(){return this.Ahi;
},Bj0:function(){return this.ATJ;},Bj1:function(){return this.ATK;},Bj4:function(
){return this.AF$;},_Init:function(aArg){C.Amo._Init.call(this,aArg);C.Animal._Init.
call(this.W={I:this},0);A.Core.Bt._Init.call(this.Au={I:this},0);A.acl.Ga._Init.
call(this.Kz={I:this},0);A.acl.Ga._Init.call(this.SA={I:this},0);C.AL0._Init.call(
this.AdC={I:this},0);C.AUp._Init.call(this.Uq={I:this},0);C.AUo._Init.call(this.
Uo={I:this},0);C.Tu._Init.call(this.Ad1={I:this},0);C.AU2._Init.call(this.Afb={I:
this},0);C.AU1._Init.call(this.Afa={I:this},0);C.AU0._Init.call(this.Ae$={I:this
},0);C.AU4._Init.call(this.Afc={I:this},0);C.AL1._Init.call(this.Agg={I:this},0);
this.__proto__=C.HelperClass;var B;this.Kz.HG(1);this.Kz.Fe(3000);this.Kz.B1=100;
this.SA.Av2(10);this.SA.Wi(5);this.SA.HG(1);this.SA.Fe(4000);this.Ad1.B1=false;this.
Ad1.Cr=true;this.Ad1.HG(1);this.Ad1.Fe(100);this.Kz.Sl=[this,this.BAA];this.Kz.Q=[
this,this.Bj4,this.Bmn];this.SA.Sl=[this,this.BAC];this.SA.Q=[B=A._GetAutoObject(
C.Device),B.ADY,B.AIe];this.Ad1.Q=[B=A._GetAutoObject(C.Device),B.ADZ,B.AIf];this.
Init(aArg);var Ls=this._variants();if(Ls){this.K={};Ls._Init.call(this,aArg);}},
_Done:function(){if(this.K)this.K._Done.call(this);this.__proto__=C.Amo;this.W._Done(
);this.Au._Done();this.Kz._Done();this.SA._Done();this.AdC._Done();this.Uq._Done(
);this.Uo._Done();this.Ad1._Done();this.Afb._Done();this.Afa._Done();this.Ae$._Done(
);this.Afc._Done();this.Agg._Done();C.Amo._Done.call(this);},_ReInit:function(){
C.Amo._ReInit.call(this);this.W._ReInit();this.Au._ReInit();this.Kz._ReInit();this.
SA._ReInit();this.AdC._ReInit();this.Uq._ReInit();this.Uo._ReInit();this.Ad1._ReInit(
);this.Afb._ReInit();this.Afa._ReInit();this.Ae$._ReInit();this.Afc._ReInit();this.
Agg._ReInit();if(this.K)this.K._ReInit.call(this);},_Mark:function(D){var B;C.Amo.
_Mark.call(this,D);if((B=this.Uj)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.
Ahi)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.ATJ)&&(B._cycle!=D))B._Mark(B.
_cycle=D);if((B=this.ATK)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.W)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.Au)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
Kz)._cycle!=D)B._Mark(B._cycle=D);if((B=this.SA)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.AdC)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Uq)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Uo)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ad1)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Afb)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Afa)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.Ae$)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
Afc)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Agg)._cycle!=D)B._Mark(B._cycle=D);
if(this.K)this.K._Mark(D);},_variants:function(){return A.acr.HelperClass._variants(
);},K:null,_className:"Device::HelperClass"};C.Helper={_Init:function(){C.HelperClass.
_Init.call(this,0);},_ReInit:function(){},_variants:function(){return this;},_this:
null};C.BoolFilterCriterion={A7:false,AdV:function(){var Az=A._NewObject(C.BoolFilterCriterion
,0);Az.GA(this);return Az;},GA:function(AM){C.FilterCriterion.GA.call(this,AM);var
Az=(C.BoolFilterCriterion.isPrototypeOf(AM)?AM:null);if(!!Az)this.A7=Az.A7;},Initialize:
function(A0,EG,A3,SZ){this.ES=A0;this.Operator=EG;this.A7=A3;this.Abi=SZ;return this;
},_Init:function(aArg){C.FilterCriterion._Init.call(this,aArg);this.__proto__=C.
BoolFilterCriterion;},_className:"Device::BoolFilterCriterion"};C.UInt32FilterCriterion={
A7:0,AdV:function(){var Az=A._NewObject(C.UInt32FilterCriterion,0);Az.GA(this);return Az;
},GA:function(AM){C.FilterCriterion.GA.call(this,AM);var Az=(C.UInt32FilterCriterion.
isPrototypeOf(AM)?AM:null);if(!!Az)this.A7=Az.A7;},Initialize:function(A0,EG,A3,
SZ){this.ES=A0;this.Operator=EG;this.A7=A3;this.Abi=SZ;return this;},_Init:function(
aArg){C.FilterCriterion._Init.call(this,aArg);this.__proto__=C.UInt32FilterCriterion;
},_className:"Device::UInt32FilterCriterion"};C.OverlayMenu={None:0,Home:1,AutoAction:
2,MenuItemSettings:3,RatingSettings:4,WeighingSettings:5,Options:6,AnimalSearch:
7,ActionSettings:8,MeasurementReady:9,AnimalMultiInfoMenu:10,AnimalSearchUnfiltered:
11,AnimalSearchDriedOff:12,MassRecordingMenu:13,MassRecordingDefaults:14,MassRecordingFields:
15,PurchasedAnimalsListMenu:16,BirthRegistrationsListMenu:17,LAST:18};C.EnumToString={
BQ:function(A2){throw new Error(AnZ+A2.toFixed());},Lp:function(A2){return this.
BQ(A2);},_Init:function(aArg){this.__proto__=C.EnumToString;A.h7++;},_Done:function(
){this.__proto__=null;A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((
B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:
"Device::EnumToString"};C.ScreenTypeToString={BQ:function(A2){var AJh=A2;var Bp;
switch(AJh){case 3:Bp=A.aaR(A.acf.AuY);break;case 34:Bp=A.aaR(A.acf.Tj);break;case
35:Bp=A.aaR(A.acf.Tk);break;case 47:Bp=A.aaR(A.acf.AN3);break;default:Bp=this.Bow(
A2);}return Bp;},Bow:function(A2){var AJh=A2;var Bp=A.jV;switch(AJh){case 0:Bp=Axw;
break;case 2:Bp=AGV;break;case 4:Bp=AVx;break;case 40:Bp=AVy;break;case 39:Bp=AVz;
break;case 72:Bp=AVA;break;case 73:Bp=AGW;break;case 93:Bp=AVB;break;case 94:Bp=
AGX;break;case 104:Bp=AGY;break;case 105:Bp=AGZ;break;case 74:Bp=AVC;break;case 3:
Bp=Axx;break;case 6:Bp=AVD;break;case 16:Bp=AVE;break;case 22:Bp=Q$;break;case 46:
Bp=WU;break;case 100:Bp=AVF;break;case 99:Bp=AVG;break;case 101:Bp=AVH;break;case
17:Bp=AVI;break;case 23:Bp=AVJ;break;case 18:Bp=AVK;break;case 19:Bp=AVL;break;case
38:Bp=AhC;break;case 87:Bp=AG0;break;case 1:Bp=AVM;break;case 5:Bp=AVN;break;case
7:Bp=AG1;break;case 92:Bp=AG2;break;case 8:Bp=Axy;break;case 9:Bp=P1;break;case 41:
Bp=AVO;break;case 42:Bp=AVP;break;case 24:Bp=AVQ;break;case 10:Bp=Aso;break;case
68:Bp=AVR;break;case 21:Bp=AVS;break;case 11:Bp=AVT;break;case 29:Bp=AVU;break;case
54:Bp=AVV;break;case 30:Bp=AVW;break;case 12:Bp=Asp;break;case 13:Bp=AVX;break;case
14:Bp=AVY;break;case 15:Bp=AVZ;break;case 78:Bp=AV0;break;case 79:Bp=AV1;break;case
20:Bp=AV2;break;case 37:Bp=AV3;break;case 43:Bp=AV4;break;case 44:Bp=AV5;break;case
45:Bp=AV6;break;case 25:Bp=AG3;break;case 75:Bp=AkP;break;case 67:Bp=AV7;break;case
66:Bp=AV8;break;case 64:Bp=AV9;break;case 65:Bp=Axz;break;case 77:Bp=AkQ;break;case
76:Bp=AhD;break;case 95:Bp=AxA;break;case 88:Bp=An0;break;case 26:Bp=AhE;break;case
28:Bp=AV_;break;case 27:Bp=AxB;break;case 31:Bp=AG4;break;case 89:Bp=Afj;break;case
34:Bp=AG5;break;case 35:Bp=ZR;break;case 32:Bp=AkR;break;case 50:Bp=An1;break;case
55:Bp=AV$;break;case 63:Bp=AWa;break;case 62:Bp=AWb;break;case 33:Bp=AWc;break;case
36:Bp=AWd;break;case 56:Bp=Asq;break;case 86:Bp=AG6;break;case 57:Bp=AG7;break;case
47:Bp=AWe;break;case 49:Bp=AWf;break;case 48:Bp=AWg;break;case 69:Bp=AWh;break;case
71:Bp=AWi;break;case 70:Bp=AWj;break;case 51:Bp=AG8;break;case 53:Bp=AWk;break;case
52:Bp=AxC;break;case 96:Bp=AG9;break;case 98:Bp=AG_;break;case 97:Bp=AG$;break;case
80:Bp=AHa;break;case 82:Bp=AHb;break;case 81:Bp=AHc;break;case 85:Bp=AWl;break;case
84:Bp=AWm;break;case 83:Bp=AWn;break;case 58:Bp=AWo;break;case 60:Bp=AWp;break;case
59:Bp=AWq;break;case 61:Bp=AWr;break;case 90:Bp=AxD;break;case 91:Bp=AHd;break;case
102:Bp=AWs;break;case 103:Bp=AHe;break;default:throw new Error(AhF+AJh.toFixed()
);}return Bp;},_Init:function(aArg){C.EnumToString._Init.call(this,aArg);this.__proto__=
C.ScreenTypeToString;},_className:"Device::ScreenTypeToString"};C.OverlayMenuToString={
BQ:function(A2){var Beo=A2;var Oj=A.jV;switch(Beo){case 0:Oj=WV;break;case 1:Oj=
Axx;break;case 8:Oj=AWt;break;case 2:Oj=ZS;break;case 3:Oj=AWu;break;case 4:Oj=AWv;
break;case 5:Oj=An2;break;case 6:Oj=Afk;break;case 7:Oj=AkS;break;case 11:Oj=AHf;
break;case 12:Oj=AWw;break;case 9:Oj=O0;break;case 10:Oj=AWx;break;case 14:Oj=AWy;
break;case 15:Oj=AWz;break;case 13:Oj=AWA;break;case 16:Oj=AHg;break;case 17:Oj=
AHh;break;default:throw new Error(AWB+Beo.toFixed());}return Oj;},_Init:function(
aArg){C.EnumToString._Init.call(this,aArg);this.__proto__=C.OverlayMenuToString;
},_className:"Device::OverlayMenuToString"};C.ScanStateToString={BQ:function(A2){
var BeW=A2;var Bn=A.jV;switch(BeW){case 4:Bn=AxE;break;case 0:Bn=AxF;break;case 2:
Bn=AWC;break;case 3:Bn=AWD;break;case 1:Bn=AHi;break;default:throw new Error(AHj+
BeW.toFixed());}return Bn;},_Init:function(aArg){C.EnumToString._Init.call(this,
aArg);this.__proto__=C.ScanStateToString;},_className:"Device::ScanStateToString"
};C.MeasureStateToString={BQ:function(A2){var Bc7=A2;var Bn=A.jV;switch(Bc7){case
4:Bn=AxE;break;case 0:Bn=AxF;break;case 2:Bn=AWE;break;case 1:Bn=AHi;break;case 3:
Bn=AxG;break;default:throw new Error(AWF+Bc7.toFixed());}return Bn;},_Init:function(
aArg){C.EnumToString._Init.call(this,aArg);this.__proto__=C.MeasureStateToString;
},_className:"Device::MeasureStateToString"};C.TemperatureUnit={Celsius:0,Fahrenheit:
1,LAST:2};C.TemperatureUnitToString={BQ:function(A2){var Bff=A2;var ApI=A.jV;switch(
Bff){case 0:ApI=A.aaR(A.acf.BoP);break;case 1:ApI=A.aaR(A.acf.BoQ);break;default:
throw new Error(AHk+Bff.toFixed());}return ApI;},_Init:function(aArg){C.EnumToString.
_Init.call(this,aArg);this.__proto__=C.TemperatureUnitToString;},_className:"Device::TemperatureUnitToString"
};C.AnimalType={DairyCalf:0,DairyCow:1,SheepLamb:2,LAST:3};C.AnimalTypeToString={
BQ:function(A2){var AKq=A2;var type=A.jV;switch(AKq){case 0:type=A.aaR(A.acf.Bgo
);break;case 1:type=A.aaR(A.acf.BgB);break;case 2:type=A.aaR(A.acf.Bix);break;default:
throw new Error(AHl+AKq.toFixed());}return type;},_Init:function(aArg){C.EnumToString.
_Init.call(this,aArg);this.__proto__=C.AnimalTypeToString;},_className:"Device::AnimalTypeToString"
};C.Language={Default:0,German:1,Spanish:2,French:3,Italian:4,Finnish:5,Chinese_TW:
6,Turkish:7,Greek:8,Russian:9,Dutch:10,Czech:11,Estonian:12,Bulgarian:13,Bosnian:
14,Norwegian:15,Ukrainian:16,LAST:17};C.LanguageToString={BQ:function(A2){var Azq=
A2;var O6=A.jV;switch(Azq){case 0:O6=AxH;break;case 10:O6=AWG;break;case 1:O6=AWH;
break;case 12:O6=AWI;break;case 5:O6=AWJ;break;case 3:O6=AWK;break;case 8:O6=AWL;
break;case 13:O6=AWM;break;case 4:O6=AWN;break;case 9:O6=Asr;break;case 2:O6=Ass;
break;case 7:O6=AHm;break;case 6:O6=AWO;break;case 11:O6=AWP;break;case 14:O6=AWQ;
break;case 15:O6=AWR;break;case 16:O6=AWS;break;default:throw new Error(AHn+Azq.
toFixed());}return O6;},Lp:function(A2){var Azq=A2;var Dh=A.jV;switch(Azq){case 0:
Dh=AWT;break;case 10:Dh=WR;break;case 1:Dh=Q9;break;case 12:Dh=AWU;break;case 5:
Dh=UE;break;case 3:Dh=WJ;break;case 8:Dh=AWV;break;case 13:Dh=WG;break;case 4:Dh=
WK;break;case 9:Dh=UF;break;case 2:Dh=ZO;break;case 7:Dh=ZQ;break;case 6:Dh=AWW;
break;case 11:Dh=AWX;break;case 14:Dh=AWY;break;case 15:Dh=SU;break;case 16:Dh=JP;
break;default:throw new Error(AHn+Azq.toFixed());}return Dh;},_Init:function(aArg
){C.EnumToString._Init.call(this,aArg);this.__proto__=C.LanguageToString;},_className:
"Device::LanguageToString"};C.Gender={Male:0,Female:1,Unknown:2,LAST:3};C.BirthType={
Single:0,Twins:1,Triplets:2,Quadruplets:3,LAST:4};C.GenderToString={BQ:function(
A2){var Atd=A2;var AJz=A.jV;switch(Atd){case 0:AJz=A.aaR(A.acf.Male);break;case 1:
AJz=A.aaR(A.acf.Female);break;case 2:AJz=A.aaR(A.acf.Unknown);break;default:throw new
Error(AWZ+Atd.toFixed());}return AJz;},_Init:function(aArg){C.EnumToString._Init.
call(this,aArg);this.__proto__=C.GenderToString;},_className:"Device::GenderToString"
};C.BirthTypeToString={BQ:function(A2){var type=A2;var Afz=A.jV;switch(type){case
0:Afz=A.aaR(A.acf.BnK);break;case 1:Afz=A.aaR(A.acf.BoL);break;case 2:Afz=A.aaR(
A.acf.Triplets);break;case 3:Afz=A.aaR(A.acf.Quadruplets);break;default:throw new
Error(AW0+type.toFixed());}return Afz;},_Init:function(aArg){C.EnumToString._Init.
call(this,aArg);this.__proto__=C.BirthTypeToString;},_className:"Device::BirthTypeToString"
};C.SyncState={Idle:0,Init:1,Exporting:2,ImportStart:3,Importing:4,ImportFinish:
5,Ready:6,Error:7,LAST:8};C.SyncStateToString={BQ:function(A2){var Be$=A2;var Bn=
A.jV;switch(Be$){case 7:Bn=AxE;break;case 0:Bn=AxF;break;case 6:Bn=AxG;break;case
2:Bn=AW1;break;case 5:Bn=AW2;break;case 3:Bn=AW3;break;case 4:Bn=AW4;break;case 1:
Bn=AHo;break;default:throw new Error(AHp+Be$.toFixed());}return Bn;},_Init:function(
aArg){C.EnumToString._Init.call(this,aArg);this.__proto__=C.SyncStateToString;},
_className:"Device::SyncStateToString"};C.RatedAttributeToString={BQ:function(A2
){var AAc=A2;switch(AAc){case 0:return A.jV;case 1:return A.aaR(A.acf.BmY);case 4:
return A.aaR(A.acf.BmX);case 3:return A.aaR(A.acf.BmZ);case 2:return A.aaR(A.acf.
BmW);default:throw new Error(AxI+AAc.toFixed());}},Lp:function(A2){var AAc=A2;switch(
AAc){case 0:return A.jV;case 1:return A.aaR(A.acf.Feed);case 4:return A.aaR(A.acf.
AFD);case 3:return A.aaR(A.acf.AFE);case 2:return A.aaR(A.acf.AFB);default:throw new
Error(AxI+AAc.toFixed());}},_Init:function(aArg){C.EnumToString._Init.call(this,
aArg);this.__proto__=C.RatedAttributeToString;},_className:"Device::RatedAttributeToString"
};C.AssesmentToString={BQ:function(A2){var Ak5=A2;var Ayz=A.jV;switch(Ak5){case 0:
case 5:Ayz=A.jV;break;case 3:Ayz=A.aaR(A.acj.BnQ);break;case 2:Ayz=A.aaR(A.acj.BnS
);break;case 1:Ayz=A.aaR(A.acj.BnR);break;default:throw new Error(AHq+Ak5.toFixed(
));}return Ayz;},_Init:function(aArg){C.EnumToString._Init.call(this,aArg);this.
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
7,ClosedWithNo:8,Opened:9};C.PopupContext={AFo:null,Akl:A.jV,AkF:0,PopupState:1,
Id:0,Show:false,Bl9:function(E){var B;if(this.PopupState===E)return;this.PopupState=
E;if(!!this.AFo)(B=this.AFo)?B[1].call(B[0],this):null;},_Init:function(aArg){this.
__proto__=C.PopupContext;A.h7++;},_Done:function(){this.__proto__=null;A.h7--;},
_ReInit:function(){},_Mark:function(D){var B;if((B=this.AFo)&&((B=B[0])._cycle!=
D))B._Mark(B._cycle=D);if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null
,_cycle:0,_observers:null,_className:"Device::PopupContext"};C.Boolean={No:0,Yes:
1,LAST:2};C.BooleanToYesNo={BQ:function(A2){switch(A2){case 0:return A.aaR(A.acf.
No);case 1:return A.aaR(A.acf.Yes);default:return An3+A2.toFixed();}},_Init:function(
aArg){C.EnumToString._Init.call(this,aArg);this.__proto__=C.BooleanToYesNo;},_className:
"Device::BooleanToYesNo"};C.AnimalGroupTableFields={Id:0,GroupName:1};C.AnimalGroup={
GroupName:AGP,Id:0,EC:function(Ad,AG){var Hv=C.Row.EC.call(this,Ad,AG);if(Hv&&!!
AG){this.OnSetId(AG.CC(Ad,0));this.AEv(AG.VA(Ad,1));}return Hv;},Ck:function(AG){
var Hv=C.Row.Ck.call(this,AG);if(Hv&&!!AG){var Jd=AG.Ov();if(Jd<=0)A.ab5("%s",Act
);else{if(this.AmI())this.CH=AG.Yj();AG.He(this.CH,0,this.Id);AG.Zi(this.CH,1,this.
GroupName);AG.Ox(Jd);}}return Hv;},Gf:function(){C.Row.Gf.call(this);this.OnSetId(-
1);},Hd:function(){C.Row.Hd.call(this);this.OnSetId(0);this.AEv(A.jV);},OnSetId:
function(E){if(this.Id===E)return;this.Id=E;A.abo([this,this.QP,this.OnSetId],0);
},AEv:function(E){if(this.GroupName===E)return;this.GroupName=E;A.abo([this,this.
BjG,this.AEv],0);},QP:function(){return this.Id;},BjG:function(){return this.GroupName;
},_Init:function(aArg){C.Row._Init.call(this,aArg);this.__proto__=C.AnimalGroup;
this.TableId=3;},_className:"Device::AnimalGroup"};C.PopupIdToString={BQ:function(
A2){var Adg=A2;var Av=A.jV;var AJf;AJf=A.aaR(A.acf.Bo9)+OZ;switch(Adg){case 0:Av=
A.aaR(A.acf.Unknown);break;case 1:Av=A.aaR(A.acf.SevereError);break;case 58:Av=A.
aaR(A.acf.Bhc);break;case 2:Av=A.aaR(A.acf.Bha);break;case 3:Av=A.aaR(A.acf.BoV);
break;case 77:Av=A._GetAutoObject(C.Helper).Bhq();break;case 78:Av=A._GetAutoObject(
C.Helper).Bho();break;case 79:Av=A._GetAutoObject(C.Helper).Bhp();break;case 9:Av=
A.aaR(A.acf.Bpl);break;case 5:Av=A.aaR(A.acf.SuccessDataSync);break;case 8:Av=A.
aaR(A.acf.SuccessResetFactorySettings);break;case 34:Av=A.aaR(A.acf.SuccessResetAnimalData
);break;case 10:Av=A._GetAutoObject(C.Device).ACi();break;case 82:Av=A.aaR(A.acf.
Bhe);break;case 83:Av=A.aaR(A.acf.Bhf);break;case 80:Av=A.aaR(A.acf.Bn2);break;case
81:Av=A.aaR(A.acf.SuccessRestoreBackup);break;case 91:Av=A.aaR(A.acf.Bgc);break;
case 92:Av=A.aaR(A.acf.Bna);break;case 4:Av=A.aaR(A.acf.WarningDataSync);break;case
7:Av=A.aaR(A.acf.Bpj);break;case 33:Av=A.aaR(A.acf.WarningResetAnimalData);break;
case 6:Av=A.aaR(A.acf.WarningRestart);break;case 27:Av=A.aaR(A.acf.WarningNoActionDefined
);break;case 64:Av=A.aaR(A.acf.WarningActionNotApplicable);break;case 28:Av=A.aaR(
A.acf.WarningNoMenuItemVisible);break;case 29:Av=A.aaR(A.acf.WarningEnterPresentationMode
);break;case 30:Av=A.aaR(A.acf.WarningNoAnimalsRegistered);break;case 41:Av=((AJf+
A.aaR(A.acf.AQZ))+OZ)+A.aaR(A.acf.BiL);break;case 50:Av=((AJf+A.aaR(A.acf.AQZ))+
OZ)+A.aaR(A.acf.BiN);break;case 51:Av=((AJf+A.aaR(A.acf.AQZ))+OZ)+A.aaR(A.acf.BiM
);break;case 42:Av=A.aaR(A.acf.Bph);break;case 45:Av=A.aaR(A.acf.Bpb);break;case
46:Av=A.aaR(A.acf.WarningNoValidCountryCode);break;case 57:Av=A.aaR(A.acf.WarningOutdatedAnimalWeight
);break;case 52:Av=A.aaR(A.acf.WarningOutdatedAnimalWeights);break;case 53:Av=A.
aaR(A.acf.WarningWeightEvaluationSingular);break;case 56:Av=A.aaR(A.acf.WarningWeightEvaluationPlural
);break;case 11:Av=A.aaR(A.acf.ScanError);break;case 12:Av=A.aaR(A.acf.ScanNotFound
);break;case 13:Av=A.aaR(A.acf.Bf6);break;case 36:Av=A.aaR(A.acf.BoE);break;case
14:Av=A.aaR(A.acf.AnimalNotFound);break;case 15:Av=A.aaR(A.acf.SuccessUnregister
);break;case 35:Av=A.aaR(A.acf.SuccessUnregisterPerished);break;case 26:Av=A.aaR(
A.acf.SuccessCreationNewAnimal);break;case 23:Av=A.aaR(A.acf.SuccessCreationNewAnimals
);break;case 24:Av=A.aaR(A.acf.BgE);break;case 49:Av=A.aaR(A.acf.EvaluationInProgress
);break;case 16:Av=A.aaR(A.acf.BgK);break;case 17:Av=A.aaR(A.acf.BnU);break;case
18:Av=A.aaR(A.acf.Bn8);break;case 19:Av=A.aaR(A.acf.BnV);break;case 20:Av=A.aaR(
A.acf.Bn9);break;case 54:Av=A.aaR(A.acf.Bn3);break;case 55:Av=A.aaR(A.acf.Bn6);break;
case 21:Av=A.aaR(A.acf.A_2);break;case 48:Av=(A.aaR(A.acf.A_2)+OZ)+A.aaR(A.acf.A4Y
);break;case 22:Av=A.aaR(A.acf.Bpd);break;case 63:Av=A.aaR(A.acf.Bpe);break;case
85:Av=A.aaR(A.acf.Bpg);break;case 43:Av=A.aaR(A.acf.Bpf);break;case 25:Av=A.aaR(
A.acf.A_N);break;case 47:Av=(A.aaR(A.acf.A_N)+OZ)+A.aaR(A.acf.A4Y);break;case 107:
Av=A.aaR(A.acf.BoR);break;case 31:{var Byi=(((((((((((((((((((A.aaR(A.acf.Bgv)+Axv
)+A.aaR(A.acf.AMQ))+A.aaR(A.acf.Colon))+N9)+A.aaR(A.acf.Bgx))+OZ)+A.aaR(A.acf.ANS
))+A.aaR(A.acf.Colon))+N9)+A.aaR(A.acf.Bhk))+OZ)+A.aaR(A.acf.ATu))+A.aaR(A.acf.Colon
))+N9)+A.aaR(A.acf.Bm1))+OZ)+A.aaR(A.acf.ATt))+A.aaR(A.acf.Colon))+N9)+A.aaR(A.acf.
Bm0);Av=Byi;}break;case 32:Av=A.aaR(A.acf.BoF);break;case 69:Av=A.aaR(A.acf.BiY);
break;case 44:Av=A.aaR(A.acf.Bpk);break;case 37:Av=A.aaR(A.acf.WarningResetWeightSettings
);break;case 38:Av=A.aaR(A.acf.WarningResetTempThresholds);break;case 39:Av=A.aaR(
A.acf.BmR);break;case 76:Av=(A.aaR(A.acf.A4B)+OZ)+A.aaR(A.acf.ATw);break;case 40:
Av=A.aaR(A.acf.Bn4);break;case 75:Av=A.aaR(A.acf.BnW);break;case 59:Av=A.aaR(A.acf.
QuestionAddAnotherCalfMultiples);break;case 62:Av=A.aaR(A.acf.BnY);break;case 96:
Av=A.aaR(A.acf.BnZ);break;case 60:Av=A.aaR(A.acf.Bn0);break;case 98:Av=A.aaR(A.acf.
Bn1);break;case 61:Av=A.aaR(A.acf.Bn_);break;case 104:Av=A.aaR(A.acf.Bn$);break;
case 65:Av=A.aaR(A.acf.SuccessClearAnimalLoss);break;case 66:Av=A.aaR(A.acf.WarningNoActionsForAnimalLoss
);break;case 67:Av=A.aaR(A.acf.SuccessLinkTransponder);break;case 106:Av=A.aaR(A.
acf.BnX);break;case 86:Av=A.aaR(A.acf.SuccessUnlinkTransponder);break;case 68:Av=
A.aaR(A.acf.Bn5);break;case 70:Av=A.aaR(A.acf.Bhg);break;case 71:Av=A.aaR(A.acf.
Boc);break;case 72:Av=A.aaR(A.acf.Bod);break;case 97:Av=A.aaR(A.acf.Bhi);break;case
100:Av=A.aaR(A.acf.Boe);break;case 99:Av=A.aaR(A.acf.Bof);break;case 88:Av=A.aaR(
A.acf.Bhh);break;case 89:Av=A.aaR(A.acf.Boa);break;case 90:Av=A.aaR(A.acf.Bob);break;
case 73:Av=A.aaR(A.acf.WarningNoPremisesID);break;case 74:Av=A.aaR(A.acf.WarningNoFlashDrivePresent
);break;case 94:Av=A.aaR(A.acf.WarningNoBackupPathPresent);break;case 93:Av=A.aaR(
A.acf.WarningNoBackupFilePresent);break;case 84:Av=A.aaR(A.acf.Bhx);break;case 87:
Av=A.aaR(A.acf.Bpn);break;case 95:Av=A.aaR(A.acf.Bpa);break;case 108:Av=A.aaR(A.
acf.Bpc);break;case 109:Av=A.aaR(A.acf.SuccessMassDeregistration);break;case 102:
Av=A.aaR(A.acf.WarningParsedDateInFutureInvalid);break;case 101:Av=A.aaR(A.acf.WarningParsingDateFailed
);break;case 103:Av=A.aaR(A.acf.WarningParsingNaisIdFailed);break;case 105:Av=A.
aaR(A.acf.Bpi);break;default:throw new Error(Ast+Adg.toFixed());}return Av;},Lp:
function(A2){var Adg=A2;var Av=A.jV;switch(Adg){case 0:Av=AHr;break;case 1:Av=AW5;
break;case 58:Av=AHs;break;case 2:Av=AW6;break;case 3:Av=AHt;break;case 77:Av=AW7;
break;case 78:Av=AW8;break;case 79:Av=AW9;break;case 9:Av=AW_;break;case 5:Av=AW$;
break;case 8:Av=AXa;break;case 34:Av=AXb;break;case 80:Av=AXc;break;case 81:Av=AXd;
break;case 91:Av=AXe;break;case 92:Av=AXf;break;case 82:Av=AXg;break;case 83:Av=
AxJ;break;case 10:Av=AXh;break;case 4:Av=AXi;break;case 7:Av=AxK;break;case 33:Av=
Asu;break;case 6:Av=ZT;break;case 27:Av=Asv;break;case 64:Av=AXj;break;case 28:Av=
AXk;break;case 29:Av=AXl;break;case 30:Av=AHu;break;case 41:Av=AXm;break;case 50:
Av=AHv;break;case 51:Av=AXn;break;case 42:Av=AXo;break;case 45:Av=AXp;break;case
46:Av=Asw;break;case 57:Av=AXq;break;case 52:Av=AXr;break;case 53:Av=AHw;break;case
56:Av=AXs;break;case 11:Av=AXt;break;case 12:Av=AXu;break;case 13:Av=AXv;break;case
36:Av=Acv;break;case 14:Av=AXw;break;case 15:Av=AXx;break;case 35:Av=AXy;break;case
26:Av=AXz;break;case 23:Av=AHx;break;case 24:Av=AXA;break;case 49:Av=AXB;break;case
16:Av=AXC;break;case 17:Av=AXD;break;case 18:Av=AXE;break;case 19:Av=AXF;break;case
20:Av=AHy;break;case 54:Av=AXG;break;case 55:Av=AXH;break;case 21:Av=AXI;break;case
48:Av=AHz;break;case 22:Av=AHA;break;case 63:Av=AXJ;break;case 43:Av=AXK;break;case
85:Av=AXL;break;case 25:Av=AXM;break;case 47:Av=Ra;break;case 107:Av=Asx;break;case
31:Av=AHB;break;case 32:Av=AHC;break;case 69:Av=An4;break;case 44:Av=An5;break;case
37:Av=AxL;break;case 38:Av=AXN;break;case 39:Av=AHD;break;case 76:Av=AXO;break;case
40:Av=AXP;break;case 75:Av=AXQ;break;case 59:Av=AXR;break;case 62:Av=AXS;break;case
96:Av=AXT;break;case 60:Av=AXU;break;case 98:Av=AXV;break;case 65:Av=AXW;break;case
61:Av=AXX;break;case 104:Av=AXY;break;case 66:Av=AXZ;break;case 67:Av=AX0;break;
case 106:Av=AX1;break;case 86:Av=AX2;break;case 68:Av=AX3;break;case 70:Av=AX4;break;
case 71:Av=An6;break;case 72:Av=AHE;break;case 97:Av=AX5;break;case 100:Av=AHF;break;
case 99:Av=AHG;break;case 88:Av=ZU;break;case 89:Av=AHH;break;case 90:Av=AX6;break;
case 73:Av=AHI;break;case 74:Av=AX7;break;case 94:Av=AxM;break;case 93:Av=AX8;break;
case 84:Av=AX9;break;case 87:Av=AxN;break;case 95:Av=AX_;break;case 108:Av=AX$;break;
case 109:Av=AYa;break;case 102:Av=AHJ;break;case 101:Av=An7;break;case 103:Av=AHK;
break;case 105:Av=AYb;break;default:throw new Error(Ast+Adg.toFixed());}return Av;
},_Init:function(aArg){C.EnumToString._Init.call(this,aArg);this.__proto__=C.PopupIdToString;
},_className:"Device::PopupIdToString"};C.PopupParamSeparator=";";C.RatingMode={
Basic:0,Extended:1,LAST:2};C.TransponderType={UNDEFINED:0,AnimalId:1,FarmId:2,GroupId:
3,PersonId:4,LAST:5};C.TransponderProtocol={UNDEFINED:0,FDX:1,HDX:2,HDX_URBAN:3,
LAST:4};C.TransponderTypeToString={BQ:function(A2){var Bfr=A2;var type=A.jV;switch(
Bfr){case 1:type=AHL;break;case 2:type=AHM;break;case 3:type=AkT;break;case 4:type=
AYc;break;case 0:type=Axw;break;default:throw new Error(An8+Bfr.toFixed());}return type;
},_Init:function(aArg){C.EnumToString._Init.call(this,aArg);this.__proto__=C.TransponderTypeToString;
},_className:"Device::TransponderTypeToString"};C.TransponderProtocolToString={BQ:
function(A2){var Bfp=A2;var Az$=A.jV;switch(Bfp){case 1:Az$=AYd;break;case 2:Az$=
AHN;break;case 3:Az$=AHO;break;case 0:Az$=Axw;break;default:throw new Error(AYe+
Bfp.toFixed());}return Az$;},_Init:function(aArg){C.EnumToString._Init.call(this
,aArg);this.__proto__=C.TransponderProtocolToString;},_className:"Device::TransponderProtocolToString"
};C.Transponder={Id:0,TransponderProtocol:0,TransponderType:0,ASY:function(E){if(
this.TransponderType===E)return;this.TransponderType=E;A.abo([this,this.Bke,this.
ASY],0);},ASX:function(E){if(this.TransponderProtocol===E)return;this.TransponderProtocol=
E;A.abo([this,this.Bkd,this.ASX],0);},OnSetId:function(E){if(this.Id===E)return;
this.Id=E;A.abo([this,this.QP,this.OnSetId],0);},AOf:function(){return A._GetAutoObject(
C.Converter).BoD(this.Id);},BhF:function(){return A._GetAutoObject(C.Converter).
Aw9(this.Id);},Bke:function(){return this.TransponderType;},Bkd:function(){return this.
TransponderProtocol;},QP:function(){return this.Id;},_Init:function(aArg){this.__proto__=
C.Transponder;A.h7++;},_Done:function(){this.__proto__=null;A.h7--;},_ReInit:function(
){},_Mark:function(D){var B;if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:
null,_cycle:0,_observers:null,_className:"Device::Transponder"};C.RatingModeToString={
BQ:function(A2){var UW=A2;var Nm=A.jV;switch(UW){case 0:Nm=A.aaR(A.acf.Basic);break;
case 1:Nm=A.aaR(A.acf.Extended);break;default:throw new Error(AYf+UW.toFixed());
}return Nm;},_Init:function(aArg){C.EnumToString._Init.call(this,aArg);this.__proto__=
C.RatingModeToString;},_className:"Device::RatingModeToString"};C.TableRowsCount={
_Init:function(aArg){this.__proto__=C.TableRowsCount;A.h7++;},_Done:function(){this.
__proto__=null;A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((B=this.
I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:
"Device::TableRowsCount"};C.MassUnit={Kilogramm:0,Pound:1,LAST:2};C.MassUnitToString={
BQ:function(A2){var Bc3=A2;var ApI=A.jV;switch(Bc3){case 0:ApI=A.aaR(A.acf.Biv);
break;case 1:ApI=A.aaR(A.acf.Pound);break;default:throw new Error(AHP+Bc3.toFixed(
));}return ApI;},_Init:function(aArg){C.EnumToString._Init.call(this,aArg);this.
__proto__=C.MassUnitToString;},_className:"Device::MassUnitToString"};C.MinWeightGain=
20;C.MaxWeightGain=2000;C.WeightGainStep=10;C.Int32ArrayWrapper={Mx:10,Array:A.abi(
10,0,null),Y$:function(E){if(this.Mx===E)return;if(E>10)throw new Error(AYg);this.
Mx=E;},Set:function(aIndex,AI){if((aIndex<0)||(aIndex>=this.Mx))throw new Error(
AHQ);this.Array.Set(aIndex,AI);},Get:function(aIndex){if((aIndex<0)||(aIndex>=this.
Mx))throw new Error(AHQ);return this.Array.Get(aIndex);},Amy:function(){var Qk=0;
var P;for(P=0;P<this.Mx;P=P+1)Qk=Qk+this.Get(P);return Qk;},toString:function(){
var A1X=this.Array.Get(0).toFixed();var P;for(P=1;P<this.Mx;P=P+1)A1X=(A1X+OY)+this.
Array.Get(P).toFixed();return A1X;},EC:function(aString){var Hq=aString.indexOf(
String.fromCharCode(0x2C),0);var A0O=A.jV;var P=0;while(P<10){if(aString===A.jV)
this.Array.Set(P,0);else{if(Hq===-1){A0O=aString;aString=A.jV;}else{A0O=A.abV(aString
,Hq);aString=A.ab1(aString,0,Hq+1);}this.Array.Set(P,A.wz(A0O,0,10));Hq=aString.
indexOf(String.fromCharCode(0x2C),0);}P=P+1;}if(aString!==A.jV)A.ab5("%s",AYh);}
,Ck:function(){},Hd:function(){var P;for(P=0;P<this.Mx;P=P+1)this.Set(P,0);},AuS:
function(A3){var P=0;while(P<this.Mx){if(this.Array.Get(P)===A3)return P;P=P+1;}
return-1;},Hl:function(){var P=0;var max=-1;while(P<this.Mx){if(this.Array.Get(P
)>max)max=this.Array.Get(P);P=P+1;}return max;},_Init:function(aArg){(this.Array=[
]).__proto__=C.Int32ArrayWrapper.Array;this.__proto__=C.Int32ArrayWrapper;A.h7++;
},_Done:function(){this.__proto__=null;A.h7--;},_ReInit:function(){},_Mark:function(
D){var B;if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:
null,_className:"Device::Int32ArrayWrapper"};C.ActionToString={BQ:function(A2){var
AyV=A2;var EY=A.jV;switch(AyV){case 4:EY=A.aaR(A.acf.Alarm);break;case 256:EY=A.
aaR(A.acf.Weighing);break;case 128:EY=A.aaR(A.acf.A5x);break;case 16:EY=A.aaR(A.
acf.ALH);break;case 1:EY=A.aaR(A.acf.Temperature);break;case 32:EY=A.aaR(A.acf.AnimalLoss
);break;case 2:EY=A.aaR(A.acf.Rating);break;case 8:EY=A.aaR(A.acf.ArD);break;case
64:EY=A.aaR(A.acf.Unregister);break;case 512:EY=A.aaR(A.acf.ARh);break;case 1024:
EY=A.aaR(A.acf.LinkTransponder);break;case 262144:EY=A.aaR(A.acf.UnlinkTransponder
);break;case 2048:EY=A.aaR(A.acf.Tj);break;case 4096:EY=A.aaR(A.acf.Calving);break;
case 8192:EY=A.aaR(A.acf.DryOff);break;case 16384:EY=A.aaR(A.acf.A6K);break;case
32768:EY=A.aaR(A.acf.ABn);break;case 524288:EY=A.aaR(A.acf.ABp);break;case 65536:
EY=A.aaR(A.acf.Delete);break;case 131072:EY=A.aaR(A.acf.A6L);break;case 0:EY=A.aaR(
A.acf.A69);break;default:throw new Error(AHR+AyV.toFixed());}return EY;},Lp:function(
A2){var AyV=A2;var EY=A.jV;switch(AyV){case 4:EY=A.aaR(A.acf.Alarm);break;case 256:
EY=A.aaR(A.acf.Weighing);break;case 128:EY=A.aaR(A.acf.A5x);break;case 16:EY=A.aaR(
A.acf.ALH);break;case 1:EY=A.aaR(A.acf.Temperature);break;case 32:EY=A.aaR(A.acf.
AnimalLoss);break;case 2:EY=A.aaR(A.acf.Rating);break;case 8:EY=A.aaR(A.acf.ArD);
break;case 64:EY=A.aaR(A.acf.Unregister);break;case 512:EY=A.aaR(A.acf.ARh);break;
case 1024:EY=A.aaR(A.acf.LinkTransponder);break;case 262144:EY=A.aaR(A.acf.UnlinkTransponder
);break;case 2048:EY=A.aaR(A.acf.Tj);break;case 4096:EY=A.aaR(A.acf.Calving);break;
case 8192:EY=A.aaR(A.acf.DryOff);break;case 32768:EY=A.aaR(A.acf.ABn);break;case
524288:EY=A.aaR(A.acf.ABp);break;case 65536:EY=A.aaR(A.acf.Delete);break;case 16384:
case 131072:EY=A.aaR(A.acf.BiD);break;case 0:EY=A.aaR(A.acf.A69);break;default:throw new
Error(AHR+AyV.toFixed());}return EY;},_Init:function(aArg){C.EnumToString._Init.
call(this,aArg);this.__proto__=C.ActionToString;},_className:"Device::ActionToString"
};C.ACTIONS_COUNT=19;C.PopupTimeout=2000;C.ITable={Filter:null,Id:2,CC:function(
Ad,A0){return 0;},VA:function(Ad,A0){return A.jV;},Aj3:function(G){A.we(this,0);
A.pe([this,this.D$],this);},HW:function(Ad,A0){return false;},Hz:function(Ad,A0){
return this.R7(Ad,A0);},OnSetId:function(E){if(this.Id===E)return;this.Id=E;},Cb:
function(){return 0;},Bi:function(E){if(this.Filter===E)return;this.Filter=E;A.abo([
this,this.Fz,this.FD],0);},FD:function(Aq){this.Bi(Aq);},IV:function(Ad,A0){var BzS=
this.VB(Ad,A0);return A._GetAutoObject(C.Converter).A_Q(BzS);},VB:function(Ad,A0
){return 0;},R7:function(Ad,A0){return 0;},A57:function(Ad,A0){return this.CC(Ad
,A0);},Ov:function(){var Jd=0;var BAB=this.Id;return Jd;},Ox:function(Aop){var Hv=
0;var BAB=this.Id;return Hv===1;},Yj:function(){return-1;},Zk:function(Ad,A0,CV){
return false;},He:function(Ad,A0,CV){return false;},Zj:function(Ad,A0,CV){return false;
},Mv:function(Ad,A0,CV){return false;},Zi:function(Ad,A0,CV){return false;},Ab3:
function(Ad,A0,CV){return this.Zj(Ad,A0,CV);},Aku:function(Ad,A0,CV){var BzT=A._GetAutoObject(
C.Converter).AdD(CV);return this.Zk(Ad,A0,BzT);},A_s:function(Ad,A0,CV){return this.
He(Ad,A0,CV);},AN_:function(Ad,A0){return this.CC(Ad,A0);},BhD:function(Ad,A0){return this.
CC(Ad,A0);},Bnu:function(Ad,A0,CV){return this.He(Ad,A0,CV);},Bnq:function(Ad,A0
,CV){return this.He(Ad,A0,CV);},K_:function(aColumn,A3){return-1;},Amw:function(
Ad,A0){return this.CC(Ad,A0);},Bno:function(Ad,A0,CV){return this.He(Ad,A0,CV);}
,ACg:function(Ad,A0){return this.CC(Ad,A0);},ATQ:function(Ad,A0,MG){return this.
He(Ad,A0,MG);},D$:function(G){this.BwY();},BwY:function(){return-1;},LN:function(
Ad,A0){return 0;},Sx:function(Ad,A0,CV){return false;},Agy:function(aColumn,A3){
return-1;},Hd:function(){return false;},BhE:function(Ad,A0){var BzU=this.CC(Ad,A0
);return A._GetAutoObject(C.Converter).Bh5(BzU);},BhJ:function(Ad,A0){return this.
CC(Ad,A0);},AOh:function(Ad,A0){return this.CC(Ad,A0);},Bns:function(Ad,A0,CV){var
BzV=A._GetAutoObject(C.Converter).A4I(CV);return this.He(Ad,A0,BzV);},Bnt:function(
Ad,A0,CV){return this.He(Ad,A0,CV);},BnA:function(Ad,A0,CV){return this.He(Ad,A0
,CV);},Ajr:function(aColumn,A3){return false;},AdZ:function(aColumn,A3){return false;
},BhS:function(Ad,A0){return this.CC(Ad,A0);},Bny:function(Ad,A0,CV){return this.
He(Ad,A0,CV);},Ld:function(){return this.Qw()>=this.HA();},HA:function(){return 0;
},Aa3:function(){return-1;},Qw:function(){return 0;},Fz:function(){return this.Filter;
},_Init:function(aArg){this.__proto__=C.ITable;A.h7++;},_Done:function(){this.__proto__=
null;A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((B=this.Filter)&&(
B._cycle!=D))B._Mark(B._cycle=D);if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D
);},I:null,_cycle:0,_observers:null,_className:"Device::ITable"};C.MaxAutoActionsCount=
4;C.WeightRecordingMode={Automatic:0,Manual:1,LAST:2};C.WeightRecordingModeToString={
BQ:function(A2){var UW=A2;var Nm=A.jV;switch(UW){case 0:Nm=A.aaR(A.acf.Automatic
);break;case 1:Nm=A.aaR(A.acf.Manual);break;default:throw new Error(AYi+UW.toFixed(
));}return Nm;},_Init:function(aArg){C.EnumToString._Init.call(this,aArg);this.__proto__=
C.WeightRecordingModeToString;},_className:"Device::WeightRecordingModeToString"
};C.BooleanToAutoOnOff={BQ:function(A2){switch(A2){case 0:return A.aaR(A.acf.Off
);case 1:return A.aaR(A.acf.AaD);default:return An3+A2.toFixed();}},_Init:function(
aArg){C.EnumToString._Init.call(this,aArg);this.__proto__=C.BooleanToAutoOnOff;}
,_className:"Device::BooleanToAutoOnOff"};C.WeightStep=100;C.WeightRecordingScope={
CurrentWeightOnly:0,BirthWeightOnly:1,BirthAndCurrentWeight:2,NoWeightRecording:
3,LAST:4};C.WeightRecordingScopeToString={BQ:function(A2){var BeX=A2;var AAm=A.jV;
switch(BeX){case 0:AAm=A.aaR(A.acf.BgG);break;case 1:AAm=A.aaR(A.acf.Bgk);break;
case 2:AAm=A.aaR(A.acf.Bgg);break;case 3:AAm=A.aaR(A.acf.Bi5);break;default:throw new
Error(AYj+BeX.toFixed());}return AAm;},_Init:function(aArg){C.EnumToString._Init.
call(this,aArg);this.__proto__=C.WeightRecordingScopeToString;},_className:"Device::WeightRecordingScopeToString"
};C.BodyTemperature={Undertemperature:0,Normal:1,Elevated:2,Fever:3,LAST:4};C.JB={
Xv:0,Temperature:1,Rating:2,Ae_:3,BBe:4,BBU:5,BEC:6,BCx:7,BDm:8,BB7:9,BDk:10,BDM:
11,BDN:12,LAST:13};C.AnimalListContentToString={BQ:function(A2){var Bbv=A2;var UK=
A.jV;switch(Bbv){case 0:UK=AYk;break;case 2:UK=AYl;break;case 1:UK=AYm;break;case
3:UK=AYn;break;case 4:UK=AYo;break;case 5:UK=AYp;break;case 6:UK=AYq;break;case 7:
UK=AYr;break;case 8:UK=AHS;break;case 9:UK=ZV;break;case 10:UK=AYs;break;case 11:
UK=AxO;break;case 12:UK=AYt;break;default:throw new Error(AYu+Bbv.toFixed());}return UK;
},_Init:function(aArg){C.EnumToString._Init.call(this,aArg);this.__proto__=C.AnimalListContentToString;
},_className:"Device::AnimalListContentToString"};C.GenderFilterCriterion={A7:0,
AdV:function(){var Az=A._NewObject(C.GenderFilterCriterion,0);Az.GA(this);return Az;
},GA:function(AM){C.FilterCriterion.GA.call(this,AM);var Az=(C.GenderFilterCriterion.
isPrototypeOf(AM)?AM:null);if(!!Az)this.A7=Az.A7;},_Init:function(aArg){C.FilterCriterion.
_Init.call(this,aArg);this.__proto__=C.GenderFilterCriterion;},_className:"Device::GenderFilterCriterion"
};C.AnimalTypeFilterCriterion={A7:0,AdV:function(){var Az=A._NewObject(C.AnimalTypeFilterCriterion
,0);Az.GA(this);return Az;},GA:function(AM){C.FilterCriterion.GA.call(this,AM);var
Az=(C.AnimalTypeFilterCriterion.isPrototypeOf(AM)?AM:null);if(!!Az)this.A7=Az.A7;
},Initialize:function(A0,EG,A3,SZ){this.ES=A0;this.Operator=EG;this.A7=A3;this.Abi=
SZ;return this;},_Init:function(aArg){C.FilterCriterion._Init.call(this,aArg);this.
__proto__=C.AnimalTypeFilterCriterion;},_className:"Device::AnimalTypeFilterCriterion"
};C.BBq={At0:0,BBp:1,BC8:2,A9$:3,A4Q:4,BEl:5,BBT:6,BEk:7,LinkTransponder:8,Tj:9,
Weighing:10,Calving:11,LinkNaisId:12,BDL:13,ClearBirthNoticePending:14,DeleteAnimal:
15,ScanNaisId:16,Edit:17,ClearPurchaseNoticePending:18};C.AutoRegistrationModeToString={
BQ:function(A2){var UW=A2;var Nm=A.jV;switch(UW){case 0:Nm=A.aaR(A.acf.Bgy);break;
case 1:Nm=A.aaR(A.acf.Bh9);break;case 2:Nm=A.aaR(A.acf.Off);break;default:throw new
Error(AYv+UW.toFixed());}return Nm;},_Init:function(aArg){C.EnumToString._Init.call(
this,aArg);this.__proto__=C.AutoRegistrationModeToString;},_className:"Device::AutoRegistrationModeToString"
};C.AutoRegistrationMode={UserConfirmed:0,Background:1,Off:2,LAST:3};C.AssessmentFilterCriterion={
A7:0,AdV:function(){var Az=A._NewObject(C.AssessmentFilterCriterion,0);Az.GA(this
);return Az;},GA:function(AM){C.FilterCriterion.GA.call(this,AM);var Az=(C.AssessmentFilterCriterion.
isPrototypeOf(AM)?AM:null);if(!!Az)this.A7=Az.A7;},Initialize:function(A0,EG,A3,
SZ){this.ES=A0;this.Operator=EG;this.A7=A3;this.Abi=SZ;return this;},_Init:function(
aArg){C.FilterCriterion._Init.call(this,aArg);this.__proto__=C.AssessmentFilterCriterion;
},_className:"Device::AssessmentFilterCriterion"};C.D2={Xv:0,Temperature:1,Ae_:2
,Rating:3,LAST:4};C.FactoryResetScope={DeviceAndAnimalData:0,AnimalDataOnly:1,LAST:
2};C.FactoryResetScopeToString={BQ:function(A2){switch(A2){case 0:return A.aaR(A.
acf.DeviceAndAnimalData);case 1:return A.aaR(A.acf.AnimalDataOnly);default:return AYw+
A2.toFixed();}},_Init:function(aArg){C.EnumToString._Init.call(this,aArg);this.__proto__=
C.FactoryResetScopeToString;},_className:"Device::FactoryResetScopeToString"};C.
AUp={Ck:function(){A._GetAutoObject(C.Device).Arw(this.toString());},Init:function(
aArg){var B;A.zX([this,this.Bd_],[B=A._GetAutoObject(C.Device),B.A8r,B.Bat],0);this.
Bd_(this);},Bd_:function(G){this.EC(A._GetAutoObject(C.Device).AGe);A.we(this,0);
},_Init:function(aArg){C.Int32ArrayWrapper._Init.call(this,aArg);this.__proto__=
C.AUp;this.Y$(3);this.Init(aArg);},_className:"Device::TemperaturesLowClass"};C.
AUo={Init:function(aArg){var B;A.zX([this,this.Bd8],[B=A._GetAutoObject(C.Device
),B.A8q,B.Bas],0);this.Bd8(this);},Ck:function(){A._GetAutoObject(C.Device).Arv(
this.toString());},Bd8:function(G){this.EC(A._GetAutoObject(C.Device).AGd);A.we(
this,0);},_Init:function(aArg){C.Int32ArrayWrapper._Init.call(this,aArg);this.__proto__=
C.AUo;this.Y$(3);this.Init(aArg);},_className:"Device::TemperaturesHighClass"};C.
AL0={Init:function(aArg){var B;A.zX([this,this.BdB],[B=A._GetAutoObject(C.Device
),B.A7H,B.A$_],0);this.BdB(this);},BdB:function(G){this.EC(A._GetAutoObject(C.Device
).AAY);A.we(this,0);},_Init:function(aArg){C.Int32ArrayWrapper._Init.call(this,aArg
);this.__proto__=C.AL0;this.Y$(3);this.Init(aArg);},_className:"Device::AnimalTypesClass"
};C.UInt64FilterCriterion={A7:0,AdV:function(){var Az=A._NewObject(C.UInt64FilterCriterion
,0);Az.GA(this);return Az;},GA:function(AM){C.FilterCriterion.GA.call(this,AM);var
Az=(C.UInt64FilterCriterion.isPrototypeOf(AM)?AM:null);if(!!Az)this.A7=Az.A7;},Initialize:
function(A0,EG,A3,SZ){this.ES=A0;this.Operator=EG;this.A7=A3;this.Abi=SZ;return this;
},_Init:function(aArg){C.FilterCriterion._Init.call(this,aArg);this.__proto__=C.
UInt64FilterCriterion;},_className:"Device::UInt64FilterCriterion"};C.BooleanToAssignedUnassignedString={
BQ:function(A2){switch(A2){case 0:return A.aaR(A.acf.Aj2);case 1:return A.aaR(A.
acf.BfW);default:return An3+A2.toFixed();}},_Init:function(aArg){C.EnumToString.
_Init.call(this,aArg);this.__proto__=C.BooleanToAssignedUnassignedString;},_className:
"Device::BooleanToAssignedUnassignedString"};C.C3={UNDEFINED:0,AT:1,BA:2,BE:3,BBv:
4,BBK:5,BBL:6,BBM:7,BBN:8,BBO:9,BBY:10,BBZ:11,BB8:12,BB9:13,BCm:14,FR:15,GR:16,BCz:
17,BCA:18,BCL:19,BCM:20,BCR:21,BCS:22,BCT:23,BCU:24,BC0:25,BDc:26,BDd:27,BDs:28,
BDt:29,BDJ:30,BDK:31,BD0:32,BD1:33,BD2:34,BEe:35,BEf:36,BEv:37,A_R:38,BEw:39,LAST:
40};C.CountryToString={BQ:function(A2){var JU=A2;var Fq=A.jV;switch(JU){case 1:Fq=
A.aaR(A.acm.Bf_);break;case 2:Fq=A.aaR(A.acm.Bgl);break;case 3:Fq=A.aaR(A.acm.Bgf
);break;case 4:Fq=A.aaR(A.acm.Bgn);break;case 5:Fq=A.aaR(A.acm.Bgp);break;case 6:
Fq=A.aaR(A.acm.Boj);break;case 7:Fq=A.aaR(A.acm.Bgs);break;case 8:Fq=A.aaR(A.acm.
BgH);break;case 9:Fq=A.aaR(A.acm.BgI);break;case 10:Fq=A.aaR(A.acm.Bhy);break;case
11:Fq=A.aaR(A.acm.BgO);break;case 12:Fq=A.aaR(A.acm.Bhd);break;case 13:Fq=A.aaR(
A.acm.BnN);break;case 14:Fq=A.aaR(A.acm.Bhm);break;case 15:Fq=A.aaR(A.acm.Bhu);break;
case 16:Fq=A.aaR(A.acm.Bh0);break;case 17:Fq=A.aaR(A.acm.BgF);break;case 18:Fq=A.
aaR(A.acm.Bh6);break;case 19:Fq=A.aaR(A.acm.Bie);break;case 20:Fq=A.aaR(A.acm.Biq
);break;case 21:Fq=A.aaR(A.acm.Bis);break;case 22:Fq=A.aaR(A.acm.BiE);break;case
23:Fq=A.aaR(A.acm.BiH);break;case 24:Fq=A.aaR(A.acm.BiB);break;case 25:Fq=A.acm.
BiJ;break;case 26:Fq=A.aaR(A.acm.BiZ);break;case 27:Fq=A.aaR(A.acm.Bi6);break;case
28:Fq=A.aaR(A.acm.BmL);break;case 29:Fq=A.aaR(A.acm.BmM);break;case 30:Fq=A.aaR(
A.acm.Bnb);break;case 31:Fq=A.aaR(A.acm.Bnd);break;case 32:Fq=A.aaR(A.acm.Boi);break;
case 33:Fq=A.aaR(A.acm.BnM);break;case 34:Fq=A.aaR(A.acm.BnL);break;case 35:Fq=A.
aaR(A.acm.BoK);break;case 36:Fq=A.aaR(A.acm.Bos);break;case 37:Fq=A.aaR(A.acm.BoO
);break;case 38:Fq=A.aaR(A.acm.A_R);break;case 39:Fq=A.aaR(A.acm.BoN);break;case
0:Fq=An9;break;default:throw new Error(Axo+JU.toFixed());}return Fq;},Lp:function(
A2){var JU=A2;var BM=A.jV;switch(JU){case 1:BM=ST;break;case 2:BM=ZE;break;case 3:
BM=UC;break;case 4:BM=WG;break;case 5:BM=IK;break;case 6:BM=ZP;break;case 7:BM=UD;
break;case 8:BM=ZG;break;case 9:BM=WI;break;case 10:BM=Q9;break;case 11:BM=ZH;break;
case 12:BM=ZI;break;case 13:BM=ZO;break;case 14:BM=UE;break;case 15:BM=WJ;break;
case 16:BM=ZJ;break;case 17:BM=WH;break;case 18:BM=OX;break;case 19:BM=Q_;break;
case 20:BM=WK;break;case 21:BM=WM;break;case 22:BM=WO;break;case 23:BM=ZK;break;
case 24:BM=WN;break;case 25:BM=WQ;break;case 26:BM=WR;break;case 27:BM=SU;break;
case 28:BM=ZL;break;case 29:BM=ZM;break;case 30:BM=Acq;break;case 31:BM=UF;break;
case 32:BM=WS;break;case 33:BM=Afe;break;case 34:BM=ZN;break;case 35:BM=ZQ;break;
case 36:BM=ZF;break;case 37:BM=Aff;break;case 38:BM=JP;break;case 39:BM=Acr;break;
case 0:BM=An9;break;default:throw new Error(Axo+JU.toFixed());}return BM;},_Init:
function(aArg){C.EnumToString._Init.call(this,aArg);this.__proto__=C.CountryToString;
},_className:"Device::CountryToString"};C.EaseOfDelivery={Unspecified:0,Easy:1,Moderate:
2,Difficult:3,Surgery:4,LAST:5};C.EaseOfDeliveryToString={BQ:function(A2){var Bb3=
A2;var As9=A.jV;switch(Bb3){case 0:As9=A.aaR(A.acf.Unspecified);break;case 1:As9=
A.aaR(A.acf.Easy);break;case 2:As9=A.aaR(A.acf.Moderate);break;case 3:As9=A.aaR(
A.acf.Difficult);break;case 4:As9=A.aaR(A.acf.Surgery);break;default:throw new Error(
AYx+Bb3.toFixed());}return As9;},_Init:function(aArg){C.EnumToString._Init.call(
this,aArg);this.__proto__=C.EaseOfDeliveryToString;},_className:"Device::EaseOfDeliveryToString"
};C.WhereAbouts={UNB:0,EZU:1,EMA:2,VZU:3,VMA:4,VIV:5,TOT:6,V48:7,V3T:8,MGE:9,VKB:
10,LAST:11};C.WhereAboutsToString={BQ:function(A2){var BfJ=A2;var Aas=A.jV;switch(
BfJ){case 0:Aas=A.aaR(A.acf.Unknown);break;case 1:Aas=A.aaR(A.acf.BoX);break;case
2:Aas=A.aaR(A.acf.BoW);break;case 3:Aas=A.aaR(A.acf.Bo5);break;case 4:Aas=A.aaR(
A.acf.Bo4);break;case 5:Aas=A.aaR(A.acf.Bo2);break;case 6:Aas=A.aaR(A.acf.BoZ);break;
case 7:Aas=A.aaR(A.acf.Bo1);break;case 8:Aas=A.aaR(A.acf.Bo0);break;case 9:Aas=A.
aaR(A.acf.BoY);break;case 10:Aas=A.aaR(A.acf.Bo3);break;default:throw new Error(
Asy+BfJ.toFixed());}return Aas;},_Init:function(aArg){C.EnumToString._Init.call(
this,aArg);this.__proto__=C.WhereAboutsToString;},_className:"Device::WhereAboutsToString"
};C.Breed={UNKNOWN:0,SBT:1,RBT:2,JER:3,BV:4,RVA:5,RV:6,RDN:7,DSN:8,FL:9,GV:10,PIN:
11,HIN:12,MW:13,VW:14,LMP:15,DBV:16,AS:17,VR:18,CHA:19,LIM:20,WBB:21,BA:22,MA:23
,SAL:24,MON:25,AU:26,PIE:27,CHI:28,ROM:29,MAR:30,WP:31,BB:32,DA:33,AA:34,HE:35,SH:
36,HLD:37,WB:38,GAL:39,LR:40,BGA:41,LG:42,BRA:43,NOR:44,UST:45,ZEB:46,GRV:47,DEX:
48,WGA:49,LH:50,SD:51,FR:52,TUX:53,TLM:54,FLF:55,UCK:56,BLA:57,WIT:58,LAK:59,RHV:
60,AT:61,GR:62,PIF:63,PS:64,GVF:65,BVF:66,RBF:67,HWF:68,MWF:69,VWF:70,LPF:71,BRN:
72,BAZ:73,AO:74,BE:75,WL:76,BIS:77,YAK:78,SON:79,TAU:80,IND:81,TIN:82,WAG:83,XFF:
84,XFM:85,XMM:86,EVO:87,BLH:88,TLH:89,MGR:90,WSH:91,MUR:92,EBS:93,ERI:94,PAR:95,
XZF:96,XZM:97,XZZ:98,LAST:99};C.BreedToString={BQ:function(A2){var Bu=A2;var BG=
A.jV;switch(Bu){case 0:BG=A.aaR(A.acf.Unknown);break;case 1:BG=A.aaR(A.ack.SBT);
break;case 2:BG=A.aaR(A.ack.RBT);break;case 3:BG=A.aaR(A.ack.JER);break;case 4:BG=
A.aaR(A.ack.BV);break;case 5:BG=A.aaR(A.ack.RVA);break;case 6:BG=A.aaR(A.ack.RV);
break;case 7:BG=A.aaR(A.ack.RDN);break;case 8:BG=A.aaR(A.ack.DSN);break;case 9:BG=
A.aaR(A.ack.FL);break;case 10:BG=A.aaR(A.ack.GV);break;case 11:BG=A.aaR(A.ack.PIN
);break;case 12:BG=A.aaR(A.ack.HIN);break;case 13:BG=A.aaR(A.ack.MW);break;case 14:
BG=A.aaR(A.ack.VW);break;case 15:BG=A.aaR(A.ack.LMP);break;case 16:BG=A.aaR(A.ack.
DBV);break;case 17:BG=A.aaR(A.ack.AS);break;case 18:BG=A.aaR(A.ack.VR);break;case
19:BG=A.aaR(A.ack.CHA);break;case 20:BG=A.aaR(A.ack.LIM);break;case 21:BG=A.aaR(
A.ack.WBB);break;case 22:BG=A.aaR(A.ack.BA);break;case 23:BG=A.aaR(A.ack.MA);break;
case 24:BG=A.aaR(A.ack.SAL);break;case 25:BG=A.aaR(A.ack.MON);break;case 26:BG=A.
aaR(A.ack.AU);break;case 27:BG=A.aaR(A.ack.PIE);break;case 28:BG=A.aaR(A.ack.CHI
);break;case 29:BG=A.aaR(A.ack.ROM);break;case 30:BG=A.aaR(A.ack.MAR);break;case
31:BG=A.aaR(A.ack.WP);break;case 32:BG=A.aaR(A.ack.BB);break;case 33:BG=A.aaR(A.
ack.DA);break;case 34:BG=A.aaR(A.ack.AA);break;case 35:BG=A.aaR(A.ack.HE);break;
case 36:BG=A.aaR(A.ack.SH);break;case 37:BG=A.aaR(A.ack.HLD);break;case 38:BG=A.
aaR(A.ack.WB);break;case 39:BG=A.aaR(A.ack.GAL);break;case 40:BG=A.aaR(A.ack.LR);
break;case 41:BG=A.aaR(A.ack.BGA);break;case 42:BG=A.aaR(A.ack.LG);break;case 43:
BG=A.aaR(A.ack.BRA);break;case 44:BG=A.aaR(A.ack.NOR);break;case 45:BG=A.aaR(A.ack.
UST);break;case 46:BG=A.aaR(A.ack.ZEB);break;case 47:BG=A.aaR(A.ack.GRV);break;case
48:BG=A.aaR(A.ack.DEX);break;case 49:BG=A.aaR(A.ack.WGA);break;case 50:BG=A.aaR(
A.ack.LH);break;case 51:BG=A.aaR(A.ack.SD);break;case 52:BG=A.aaR(A.ack.FR);break;
case 53:BG=A.aaR(A.ack.TUX);break;case 54:BG=A.aaR(A.ack.TLM);break;case 55:BG=A.
aaR(A.ack.FLF);break;case 56:BG=A.aaR(A.ack.UCK);break;case 57:BG=A.aaR(A.ack.BLA
);break;case 58:BG=A.aaR(A.ack.WIT);break;case 59:BG=A.aaR(A.ack.LAK);break;case
60:BG=A.aaR(A.ack.RHV);break;case 61:BG=A.aaR(A.ack.AT);break;case 62:BG=A.aaR(A.
ack.GR);break;case 63:BG=A.aaR(A.ack.PIF);break;case 64:BG=A.aaR(A.ack.PS);break;
case 65:BG=A.aaR(A.ack.GVF);break;case 66:BG=A.aaR(A.ack.BVF);break;case 67:BG=A.
aaR(A.ack.RBF);break;case 68:BG=A.aaR(A.ack.HWF);break;case 69:BG=A.aaR(A.ack.MWF
);break;case 70:BG=A.aaR(A.ack.VWF);break;case 71:BG=A.aaR(A.ack.LPF);break;case
72:BG=A.aaR(A.ack.BRN);break;case 73:BG=A.aaR(A.ack.BAZ);break;case 74:BG=A.aaR(
A.ack.AO);break;case 75:BG=A.aaR(A.ack.BE);break;case 76:BG=A.aaR(A.ack.WL);break;
case 77:BG=A.aaR(A.ack.BIS);break;case 78:BG=A.aaR(A.ack.YAK);break;case 79:BG=A.
aaR(A.ack.SON);break;case 80:BG=A.aaR(A.ack.TAU);break;case 81:BG=A.aaR(A.ack.IND
);break;case 82:BG=A.aaR(A.ack.TIN);break;case 83:BG=A.aaR(A.ack.WAG);break;case
84:BG=A.aaR(A.ack.XFF);break;case 85:BG=A.aaR(A.ack.XFM);break;case 86:BG=A.aaR(
A.ack.XMM);break;case 87:BG=A.aaR(A.ack.EVO);break;case 88:BG=A.ack.BLH;break;case
89:BG=A.ack.TLH;break;case 90:BG=A.ack.MGR;break;case 91:BG=A.ack.WSH;break;case
92:BG=A.ack.MUR;break;case 93:BG=A.aaR(A.ack.EBS);break;case 94:BG=A.aaR(A.ack.ERI
);break;case 95:BG=A.ack.PAR;break;case 96:BG=A.aaR(A.ack.XZF);break;case 97:BG=
A.aaR(A.ack.XZM);break;case 98:BG=A.aaR(A.ack.XZZ);break;default:throw new Error(
Asz+Bu.toFixed());}return BG;},_Init:function(aArg){C.EnumToString._Init.call(this
,aArg);this.__proto__=C.BreedToString;},_className:"Device::BreedToString"};C.Tu={
timer:null,Q:null,D6:0,Dq:0,JG:0,Pk:1000,Pt:1000,Bv:false,Cr:false,B1:true,L9:function(
G){var F;if(!this.timer)return;if(this.D6<0){this.Dq=this.timer.Bt;this.D6=0;}var
Au=(this.timer.Bt-this.Dq)|0;var Om=this.Pk;var G7=this.Pt+this.Pk;var Lz=0;var Ja=
this.D6;if(!Ja&&(Au>=Om)){Ja=1;Au=Au-Om;}if((Ja>0)&&(Au>=G7)){var H_=(Au/G7)|0;Au=
Au-(H_*G7);Ja=Ja+H_;}if((Ja>2)&&!this.JG)Ja=1;if(Ja!==this.D6){this.Dq=this.timer.
Bt-(((B=Au)<0)?B+0x100000000:B);this.D6=Ja;}if(Ja>0)Lz=this.Pt;var Kw=(Ja>=this.
JG)&&(this.JG>0);if(!!this.Q){if((!Kw&&(Au>=Lz))&&((F=this.Q,F[1].call(F[0]))!==
this.Cr))(F=this.Q,F[2].call(F[0],this.Cr));if((Kw||((Au<Lz)&&(Ja>0)))&&((F=this.
Q,F[1].call(F[0]))!==this.B1))(F=this.Q,F[2].call(F[0],this.B1));}if(Kw)this.Ar(
false);},HG:function(E){if(E<0)E=0;this.JG=E;},Fe:function(E){if(E<100)E=100;this.
Pk=E;},T9:function(E){if(E<0)E=0;this.Pt=E;},Ar:function(E){if(this.Bv===E)return;
this.Bv=E;if(!E&&!!this.timer){A.z9([this,this.L9],this.timer,0);this.timer=null;
}if(E){this.timer=A._GetAutoObject(A.acl.AdW);A.zV([this,this.L9],this.timer,0);
this.D6=-1;}},_Init:function(aArg){this.__proto__=C.Tu;A.h7++;},_Done:function(){
this.__proto__=null;A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((B=
this.timer)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Q)&&((B=B[0])._cycle!=
D))B._Mark(B._cycle=D);if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null
,_cycle:0,_observers:null,_className:"Device::BoolEffect"};C.Ib={AnimalId:0,TransponderId:
1,BC3:2,BC2:3,BC6:4,BC5:5};C.Aur={BBt:0,BB1:1};C.AnimalIdGenerationMethodToString={
BQ:function(A2){var Ak3=A2;var Aoy=A.jV;switch(Ak3){case 0:Aoy=A.aaR(A.acf.YY);break;
case 1:Aoy=A.aaR(A.acf.Transponder);break;case 3:Aoy=(A.aaR(A.acf.Manual)+N9)+A.
aaR(A.acf.Male);break;case 2:Aoy=(A.aaR(A.acf.Manual)+N9)+A.aaR(A.acf.Female);break;
case 4:Aoy=(A.aaR(A.acf.Manual)+N9)+A.aaR(A.acf.Unknown);break;case 5:Aoy=(A.aaR(
A.acf.Manual)+N9)+AsA;break;default:throw new Error(AsB+Ak3.toFixed());}return Aoy;
},_Init:function(aArg){C.EnumToString._Init.call(this,aArg);this.__proto__=C.AnimalIdGenerationMethodToString;
},_className:"Device::AnimalIdGenerationMethodToString"};C.DirectionOfCountingToString={
BQ:function(A2){var AyU=A2;var A0V=A.jV;switch(AyU){case 0:A0V=AxP;break;case 1:
A0V=An_;break;default:throw new Error(AYy+AyU.toFixed());}return A0V;},_Init:function(
aArg){C.EnumToString._Init.call(this,aArg);this.__proto__=C.DirectionOfCountingToString;
},_className:"Device::DirectionOfCountingToString"};C.EnumToIcon={Ar_:function(A2
){throw new Error(AnZ+A2.toFixed());},Ar$:function(A2){throw new Error(AnZ+A2.toFixed(
));},_Init:function(aArg){this.__proto__=C.EnumToIcon;A.h7++;},_Done:function(){
this.__proto__=null;A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((B=
this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:
"Device::EnumToIcon"};C.AdU={Ar_:function(A2){return A.aaL(A.ach.AUc);},Ar$:function(
A2){var AyU=A2;var Rp=-1;switch(AyU){case 0:Rp=3;break;case 1:Rp=2;break;default:
throw new Error(AHT+AyU.toFixed());}return Rp;},_Init:function(aArg){C.EnumToIcon.
_Init.call(this,aArg);this.__proto__=C.AdU;},_className:"Device::DirectionOfCountingToIcon"
};C.AdA={Ar_:function(A2){return A.aaL(A.ach.AUa);},Ar$:function(A2){var Ak3=A2;
var Rp=-1;switch(Ak3){case 0:Rp=0;break;case 1:Rp=6;break;case 3:Rp=4;break;case
2:Rp=5;break;case 4:Rp=2;break;case 5:Rp=3;break;default:throw new Error(AHT+Ak3.
toFixed());}return Rp;},_Init:function(aArg){C.EnumToIcon._Init.call(this,aArg);
this.__proto__=C.AdA;},_className:"Device::AnimalIdGenerationMethodToIcon"};C.Pp={
UNDEFINED:0,SH:1,AOk:2,AQ3:3,AOj:4,A63:5,HE:6,A99:7,A4l:8,AL$:9,ATG:10,BE:11,BB:
12,A6Q:13,ATH:14,ATI:15,AUh:16};C.GermanStateToString={BQ:function(A2){var Bn=A2;
var Gu=A.jV;switch(Bn){case 1:Gu=A.aaR(A.aco.SH);break;case 2:Gu=A.aaR(A.aco.AOk
);break;case 3:Gu=A.aaR(A.aco.AQ3);break;case 4:Gu=A.aaR(A.aco.AOj);break;case 5:
Gu=A.aaR(A.aco.A63);break;case 6:Gu=A.aaR(A.aco.HE);break;case 7:Gu=A.aaR(A.aco.
A99);break;case 8:Gu=A.aaR(A.aco.A4l);break;case 9:Gu=A.aaR(A.aco.AL$);break;case
10:Gu=A.aaR(A.aco.ATG);break;case 11:Gu=A.aaR(A.aco.BE);break;case 12:Gu=A.aaR(A.
aco.BB);break;case 13:Gu=A.aaR(A.aco.A6Q);break;case 14:Gu=A.aaR(A.aco.ATH);break;
case 15:Gu=A.aaR(A.aco.ATI);break;case 16:Gu=A.aaR(A.aco.AUh);break;case 0:Gu=An9;
break;default:throw new Error(AsC+Bn.toFixed());}return Gu;},Lp:function(A2){var
Bn=A2;var Gu=A.jV;switch(Bn){case 1:Gu=A.aaR(A.aco.Bne);break;case 2:Gu=A.aaR(A.
aco.AOk);break;case 3:Gu=A.aaR(A.aco.AQ3);break;case 4:Gu=A.aaR(A.aco.AOj);break;
case 5:Gu=A.aaR(A.aco.BiW);break;case 6:Gu=A.aaR(A.aco.HE);break;case 7:Gu=A.aaR(
A.aco.BmV);break;case 8:Gu=A.aaR(A.aco.Bgb);break;case 9:Gu=A.aaR(A.aco.AL$);break;
case 10:Gu=A.aaR(A.aco.ATG);break;case 11:Gu=A.aaR(A.aco.BE);break;case 12:Gu=A.
aaR(A.aco.BB);break;case 13:Gu=A.aaR(A.aco.BiI);break;case 14:Gu=A.aaR(A.aco.ATH
);break;case 15:Gu=A.aaR(A.aco.ATI);break;case 16:Gu=A.aaR(A.aco.AUh);break;case
0:Gu=An9;break;default:throw new Error(AsC+Bn.toFixed());}return Gu;},Box:function(
A2){var Bn=A2;var FY=-1;switch(Bn){case 0:FY=0;break;case 1:FY=1;break;case 2:FY=
2;break;case 3:FY=3;break;case 4:FY=4;break;case 5:FY=5;break;case 6:FY=6;break;
case 7:FY=7;break;case 8:FY=8;break;case 9:FY=9;break;case 10:FY=10;break;case 11:
FY=11;break;case 12:FY=12;break;case 13:FY=13;break;case 14:FY=14;break;case 15:
FY=15;break;case 16:FY=16;break;default:throw new Error(AsC+Bn.toFixed());}return FY;
},Boy:function(A2){var Bn=A2;var FY=A.jV;switch(Bn){case 1:FY=AYz;break;case 2:FY=
AYA;break;case 3:FY=AYB;break;case 4:FY=AYC;break;case 5:FY=AYD;break;case 6:FY=
AYE;break;case 7:FY=AYF;break;case 8:FY=AYG;break;case 9:FY=AYH;break;case 10:FY=
AYI;break;case 11:FY=UC;break;case 12:FY=AYJ;break;case 13:FY=AxQ;break;case 14:
FY=AYK;break;case 15:FY=AxR;break;case 16:FY=AxS;break;case 0:FY=An9;break;default:
throw new Error(AsC+Bn.toFixed());}return FY;},_Init:function(aArg){C.EnumToString.
_Init.call(this,aArg);this.__proto__=C.GermanStateToString;},_className:"Device::GermanStateToString"
};C.EartagNrAssignmentMode={OneSingleRange:0,TwoNumberRanges:1,LAST:2};C.EartagNrAssignmentModeToString={
Lp:function(A2){var UW=A2;var Nm=A.jV;switch(UW){case 0:Nm=AYL;break;case 1:Nm=AYM;
break;default:throw new Error(AHU+UW.toFixed());}return Nm;},BQ:function(A2){var
UW=A2;var Nm=A.jV;switch(UW){case 0:Nm=A.aaR(A.acf.BmE);break;case 1:Nm=A.aaR(A.
acf.BoM);break;default:throw new Error(AHU+UW.toFixed());}return Nm;},_Init:function(
aArg){C.EnumToString._Init.call(this,aArg);this.__proto__=C.EartagNrAssignmentModeToString;
},_className:"Device::EartagNrAssignmentModeToString"};C.BBn={BDi:0,BC_:1,BCg:2,
BCh:3,BCi:4,BEg:5};C.EnumToCodeset={Amf:function(AhI){throw new Error(AHV+AhI.toFixed(
));},AdY:function(A2){throw new Error(AnZ+A2.toFixed());},Aqp:function(){A.ab5("%s"
,AHW);return 0;},Hl:function(){A.ab5("%s",AHW);return 0;},_Init:function(aArg){this.
__proto__=C.EnumToCodeset;A.h7++;},_Done:function(){this.__proto__=null;A.h7--;}
,_ReInit:function(){},_Mark:function(D){var B;if((B=this.I)&&(B._cycle!=D))B._Mark(
B._cycle=D);},I:null,_cycle:0,_observers:null,_className:"Device::EnumToCodeset"
};C.MY={Amf:function(AhI){var Bu;switch(AhI){case 1:Bu=1;break;case 2:Bu=2;break;
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
Bu=0;}return Bu;},AdY:function(A2){var Bu=A2;var BI=0;switch(Bu){case 0:BI=0;break;
case 1:BI=1;break;case 2:BI=2;break;case 3:BI=3;break;case 4:BI=4;break;case 5:BI=
5;break;case 6:BI=6;break;case 7:BI=9;break;case 8:BI=10;break;case 9:BI=11;break;
case 10:BI=12;break;case 11:BI=13;break;case 12:BI=14;break;case 13:BI=15;break;
case 14:BI=16;break;case 15:BI=17;break;case 16:BI=18;break;case 17:BI=19;break;
case 18:BI=20;break;case 19:BI=21;break;case 20:BI=22;break;case 21:BI=23;break;
case 22:BI=24;break;case 23:BI=25;break;case 24:BI=26;break;case 25:BI=27;break;
case 26:BI=28;break;case 27:BI=31;break;case 28:BI=32;break;case 29:BI=33;break;
case 30:BI=34;break;case 31:BI=35;break;case 32:BI=36;break;case 33:BI=41;break;
case 34:BI=42;break;case 35:BI=43;break;case 36:BI=44;break;case 37:BI=45;break;
case 38:BI=46;break;case 39:BI=47;break;case 40:BI=48;break;case 41:BI=49;break;
case 42:BI=50;break;case 43:BI=51;break;case 44:BI=52;break;case 45:BI=53;break;
case 46:BI=54;break;case 47:BI=55;break;case 48:BI=56;break;case 49:BI=57;break;
case 50:BI=58;break;case 51:BI=59;break;case 52:BI=60;break;case 53:BI=61;break;
case 54:BI=65;break;case 55:BI=66;break;case 56:BI=67;break;case 57:BI=68;break;
case 58:BI=69;break;case 59:BI=70;break;case 60:BI=71;break;case 61:BI=72;break;
case 62:BI=73;break;case 63:BI=74;break;case 64:BI=75;break;case 65:BI=76;break;
case 66:BI=77;break;case 67:BI=78;break;case 68:BI=79;break;case 69:BI=80;break;
case 70:BI=81;break;case 71:BI=82;break;case 72:BI=83;break;case 73:BI=84;break;
case 74:BI=85;break;case 75:BI=86;break;case 76:BI=87;break;case 77:BI=88;break;
case 78:BI=89;break;case 79:BI=90;break;case 80:BI=91;break;case 81:BI=92;break;
case 82:BI=93;break;case 83:BI=94;break;case 84:BI=97;break;case 85:BI=98;break;
case 86:BI=99;break;case 87:BI=100;break;case 88:BI=101;break;case 89:BI=102;break;
case 90:BI=103;break;case 91:BI=104;break;case 92:BI=105;break;case 93:BI=106;break;
case 94:BI=107;break;case 95:BI=108;break;case 96:BI=109;break;case 97:BI=110;break;
case 98:BI=111;break;default:throw new Error(AYN+Bu.toFixed());}return BI;},Aqp:
function(){return 0;},Hl:function(){return 111;},_Init:function(aArg){C.EnumToCodeset.
_Init.call(this,aArg);this.__proto__=C.MY;},_className:"Device::BreedToHitCodeset"
};C.ReasonOfLeaving={Unknown:0,A_D:1,Rz:2,A93:3,A6s:4,BDr:5,A_S:6,A6Z:7,A4P:8,A9Z:
9,A6X:10,A4T:11,BDH:12,BDI:13,LAST:14};C.ReasonOfLeavingToString={BQ:function(A2
){var Adh=A2;var Td=A.jV;switch(Adh){case 0:Td=A.aaR(A.acf.Unknown);break;case 1:
Td=A.aaR(A.acf.A_D);break;case 2:Td=A.aaR(A.acf.Rz);break;case 3:Td=A.aaR(A.acf.
A93);break;case 4:Td=A.aaR(A.acf.A6s);break;case 5:Td=A.aaR(A.acf.BmF);break;case
6:Td=A.aaR(A.acf.A_S);break;case 7:Td=A.aaR(A.acf.A6Z);break;case 8:Td=A.aaR(A.acf.
A4P);break;case 9:Td=A.aaR(A.acf.A9Z);break;case 10:Td=A.aaR(A.acf.A6X);break;case
11:Td=A.aaR(A.acf.A4T);break;case 12:Td=A.aaR(A.acf.BmP);break;case 13:Td=A.aaR(
A.acf.BmO);break;default:throw new Error(AYO+Adh.toFixed());}return Td;},_Init:function(
aArg){C.EnumToString._Init.call(this,aArg);this.__proto__=C.ReasonOfLeavingToString;
},_className:"Device::ReasonOfLeavingToString"};C.Ahf={Amf:function(AhI){var O9;
switch(AhI){case 1:O9=1;break;case 2:O9=2;break;case 3:O9=3;break;case 4:O9=4;break;
case 5:O9=5;break;case 6:O9=6;break;case 7:O9=7;break;case 8:O9=8;break;case 9:O9=
9;break;case 10:O9=10;break;case 11:O9=11;break;case 12:O9=12;break;case 13:O9=13;
break;default:O9=0;}return O9;},AdY:function(A2){var O9=A2;var I$=0;switch(O9){case
0:I$=0;break;case 2:I$=2;break;case 8:I$=8;break;case 11:I$=11;break;case 4:I$=4;
break;case 10:I$=10;break;case 7:I$=7;break;case 5:I$=5;break;case 9:I$=9;break;
case 3:I$=3;break;case 12:I$=12;break;case 13:I$=13;break;case 1:I$=1;break;case
6:I$=6;break;default:throw new Error(AHX+O9.toFixed());}return I$;},Aqp:function(
){return 0;},Hl:function(){return 13;},_Init:function(aArg){C.EnumToCodeset._Init.
call(this,aArg);this.__proto__=C.Ahf;},_className:"Device::ReasonOfLeavingToCodeset"
};C.KS={Amf:function(AhI){var K4;switch(AhI){case 1:K4=1;break;case 2:K4=2;break;
case 3:K4=3;break;case 4:K4=4;break;case 5:K4=5;break;case 6:K4=6;break;case 7:K4=
7;break;case 8:K4=8;break;case 9:K4=9;break;case 10:K4=10;break;default:K4=0;}return K4;
},AdY:function(A2){var K4=A2;var I$=0;switch(K4){case 0:I$=0;break;case 2:I$=2;break;
case 1:I$=1;break;case 9:I$=9;break;case 6:I$=6;break;case 8:I$=8;break;case 7:I$=
7;break;case 5:I$=5;break;case 10:I$=10;break;case 4:I$=4;break;case 3:I$=3;break;
default:throw new Error(AHX+K4.toFixed());}return I$;},Aqp:function(){return 0;}
,Hl:function(){return 10;},_Init:function(aArg){C.EnumToCodeset._Init.call(this,
aArg);this.__proto__=C.KS;},_className:"Device::WhereAboutsToCodeset"};C.Amo={_Init:
function(aArg){this.__proto__=C.Amo;A.h7++;},_Done:function(){this.__proto__=null;
A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((B=this.I)&&(B._cycle!=
D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:"Device::EmptyClass"
};C.CalfDeregistrationsTableFields={Year:0,Deregistrations:1,Deaths:2};C.CalfDeregistrations={
Deregistrations:0,Deaths:0,Year:0,EC:function(Ad,AG){var Hv=C.Row.EC.call(this,Ad
,AG);if(Hv&&!!AG){this.Akj(AG.CC(Ad,0));this.AvX(AG.CC(Ad,1));this.AvW(AG.CC(Ad,
2));}return Hv;},Ck:function(AG){var Hv=C.Row.Ck.call(this,AG);if(Hv&&!!AG){var Jd=
AG.Ov();if(Jd<=0)A.ab5("%s",Act);else{if(this.AmI())this.CH=AG.Yj();AG.He(this.CH
,0,this.Year);AG.He(this.CH,1,this.Deregistrations);AG.He(this.CH,2,this.Deaths);
AG.Ox(Jd);}}return Hv;},Gf:function(){C.Row.Gf.call(this);this.Akj(-1);},Hd:function(
){C.Row.Hd.call(this);this.Akj(0);this.AvX(0);this.AvW(0);},AvX:function(E){if(this.
Deregistrations===E)return;this.Deregistrations=E;A.abo([this,this.Bjx,this.AvX]
,0);},AvW:function(E){if(this.Deaths===E)return;this.Deaths=E;A.abo([this,this.Bjv
,this.AvW],0);},Akj:function(E){if(this.Year===E)return;this.Year=E;A.abo([this,
this.Aq6,this.Akj],0);},Bjx:function(){return this.Deregistrations;},Bjv:function(
){return this.Deaths;},Aq6:function(){return this.Year;},_Init:function(aArg){C.
Row._Init.call(this,aArg);this.__proto__=C.CalfDeregistrations;this.TableId=4;},
_className:"Device::CalfDeregistrations"};C.Aup={Undefined:0,Display:1,A98:2,A_i:
3,A_$:4,BCB:5,BDS:6,BEr:7,BC1:8,BBP:9,BBc:10,A5R:11,A9_:12,BEy:13,A62:14,BEB:15};
C.DeviceComponentToString={BQ:function(A2){var BbX=A2;var P_=A.jV;switch(BbX){case
0:P_=AYP;break;case 10:P_=A.aaR(A.acf.BfK);break;case 9:P_=A.aaR(A.acf.Bgr);break;
case 1:P_=A.aaR(A.acf.Bg5);break;case 11:P_=A.aaR(A.acf.A5R);break;case 5:P_=A.aaR(
A.acf.Bo6);break;case 8:P_=A.aaR(A.acf.Bg7);break;case 14:P_=A.aaR(A.acf.A62);break;
case 2:P_=A.aaR(A.acf.A98);break;case 12:P_=A.aaR(A.acf.A9_);break;case 6:P_=A.aaR(
A.acf.BmU);break;case 3:P_=A.aaR(A.acf.A_i);break;case 7:P_=A.aaR(A.acf.Bg8);break;
case 13:P_=A.aaR(A.acf.BgQ);break;case 15:P_=A.aaR(A.acf.Bo_);break;case 4:P_=A.
aaR(A.acf.A_$);break;default:throw new Error(AYQ+BbX.toFixed());}return P_;},_Init:
function(aArg){C.EnumToString._Init.call(this,aArg);this.__proto__=C.DeviceComponentToString;
},_className:"Device::DeviceComponentToString"};C.Ags={Amf:function(AhI){return AhI;
},AdY:function(A2){return A2;},Aqp:function(){return 0;},Hl:function(){return 4;
},_Init:function(aArg){C.EnumToCodeset._Init.call(this,aArg);this.__proto__=C.Ags;
},_className:"Device::EaseOfDeliveryToCodeset"};C.Aeu={Ar_:function(A2){return A.
aaL(A.ach.APr);},Ar$:function(A2){var Bb8=A2;var Rp=-1;switch(Bb8){case 0:Rp=0;break;
case 1:Rp=1;break;case 2:Rp=2;break;default:throw new Error(AYR+Bb8.toFixed());}
return Rp;},_Init:function(aArg){C.EnumToIcon._Init.call(this,aArg);this.__proto__=
C.Aeu;},_className:"Device::MotherSelectionFilterModeToIcon"};C.WhereAboutsFilterCriterion={
A7:0,AdV:function(){var Az=A._NewObject(C.WhereAboutsFilterCriterion,0);Az.GA(this
);return Az;},GA:function(AM){C.FilterCriterion.GA.call(this,AM);var Az=(C.WhereAboutsFilterCriterion.
isPrototypeOf(AM)?AM:null);if(!!Az)this.A7=Az.A7;},Initialize:function(A0,EG,A3,
SZ){this.ES=A0;this.Operator=EG;this.A7=A3;this.Abi=SZ;return this;},_Init:function(
aArg){C.FilterCriterion._Init.call(this,aArg);this.__proto__=C.WhereAboutsFilterCriterion;
},_className:"Device::WhereAboutsFilterCriterion"};C.BDb={ANi:0,BBW:1,AO6:2,LAST:
3};C.BEi={GB:0,AUV:1,Ha:2,Year:3,LAST:4};C.TimespanDaysToString={BQ:function(A2){
var Bfi=A2;var AAB=A.jV;switch(Bfi){case 0:AAB=A.aaR(A.acf.A47);break;case 1:AAB=
A.aaR(A.acf.AUV);break;case 2:AAB=A.aaR(A.acf.Ha);break;case 3:AAB=A.aaR(A.acf.Year
);break;default:throw new Error(AYS+Bfi.toFixed());}return AAB;},_Init:function(
aArg){C.EnumToString._Init.call(this,aArg);this.__proto__=C.TimespanDaysToString;
},_className:"Device::TimespanDaysToString"};C.Ahw={BDo:0,BB2:1,BCH:2,BCK:3,BCJ:
4,BB3:5,BCI:6,LAST:7};C.USBStateToString={BQ:function(A2){var BfE=A2;var Bn=A.jV;
switch(BfE){case 0:Bn=AHY;break;case 2:Bn=AYT;break;case 1:Bn=AYU;break;case 5:Bn=
AYV;break;case 3:Bn=AYW;break;case 4:Bn=AYX;break;case 6:Bn=AYY;break;default:throw new
Error(AHj+BfE.toFixed());}return Bn;},_Init:function(aArg){C.EnumToString._Init.
call(this,aArg);this.__proto__=C.USBStateToString;},_className:"Device::USBStateToString"
};C.ABI={BCF:0,BBo:1,BCG:2,BCD:3};C.AwX={ABC:A.jV,Timestamp:0,ADq:0,ADx:0,AFL:0,
OnSetTimestamp:function(E){if(this.Timestamp===E)return;this.Timestamp=E;},AEI:function(
E){if(this.ADq===E)return;this.ADq=E;},AEP:function(E){if(this.ADx===E)return;this.
ADx=E;},AEZ:function(E){if(this.AFL===E)return;this.AFL=E;},AEk:function(E){if(this.
ABC===E)return;this.ABC=E;},_Init:function(aArg){this.__proto__=C.AwX;A.h7++;},_Done:
function(){this.__proto__=null;A.h7--;},_ReInit:function(){},_Mark:function(D){var
B;if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:
null,_className:"Device::SoftwareVersionInformation"};C.AuU={Timestamp:0,AQR:0,AQS:
0,AUA:0,AUB:0,AUz:0,AQQ:0,OnSetTimestamp:function(E){if(this.Timestamp===E)return;
this.Timestamp=E;},AEF:function(E){if(this.AQR===E)return;this.AQR=E;},AEG:function(
E){if(this.AQS===E)return;this.AQS=E;},AFb:function(E){if(this.AUA===E)return;this.
AUA=E;},AFc:function(E){if(this.AUB===E)return;this.AUB=E;},AFa:function(E){if(this.
AUz===E)return;this.AUz=E;},AEE:function(E){if(this.AQQ===E)return;this.AQQ=E;},
_Init:function(aArg){this.__proto__=C.AuU;A.h7++;},_Done:function(){this.__proto__=
null;A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((B=this.I)&&(B._cycle
!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:"Device::HardwareVersionInformation"
};C.Ap1={Undefined:0,BCr:1,BBB:2};C.Aga={Manual:0,TransponderId:1,LAST:2};C.AnimalIdAutoGenerationMethodToString={
BQ:function(A2){var Bbt=A2;var A0p=A.jV;switch(Bbt){case 0:A0p=A.aaR(A.acf.A4X);
break;case 1:A0p=A.aaR(A.acf.A5b);break;default:throw new Error(AYZ+Bbt.toFixed(
));}return A0p;},_Init:function(aArg){C.EnumToString._Init.call(this,aArg);this.
__proto__=C.AnimalIdAutoGenerationMethodToString;},_className:"Device::AnimalIdAutoGenerationMethodToString"
};C.Ha={A4G:0,ADf:1,AB1:2,ADr:3,AA0:4,ADu:5,ADh:6,ADg:7,AA8:8,AFS:9,ADH:10,ADF:11
,ABL:12,LAST:13};C.MonthToString={BQ:function(A2){var Bc9=A2;var Xg=A.jV;switch(
Bc9){case 1:Xg=A.aaR(A.acs.ADf);break;case 2:Xg=A.aaR(A.acs.AB1);break;case 3:Xg=
A.aaR(A.acs.ADr);break;case 4:Xg=A.aaR(A.acs.AA0);break;case 5:Xg=A.aaR(A.acs.ADu
);break;case 6:Xg=A.aaR(A.acs.ADh);break;case 7:Xg=A.aaR(A.acs.ADg);break;case 8:
Xg=A.aaR(A.acs.AA8);break;case 9:Xg=A.aaR(A.acs.AFS);break;case 10:Xg=A.aaR(A.acs.
ADH);break;case 11:Xg=A.aaR(A.acs.ADF);break;case 12:Xg=A.aaR(A.acs.ABL);break;default:
throw new Error(AHZ+Bc9.toFixed());}return Xg;},_Init:function(aArg){C.EnumToString.
_Init.call(this,aArg);this.__proto__=C.MonthToString;},_className:"Device::MonthToString"
};C.Ajl={FileName:A.jV,AFN:0,ABI:0,AnB:false,_Init:function(aArg){this.__proto__=
C.Ajl;A.h7++;},_Done:function(){this.__proto__=null;A.h7--;},_ReInit:function(){
},_Mark:function(D){var B;if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null
,_cycle:0,_observers:null,_className:"Device::DataExportContext"};C.Al6={BCy:0,BD9:
1};C.AU2={Init:function(aArg){var B;A.zX([this,this.Bei],[B=A._GetAutoObject(C.Device
),B.A8D,B.BaA],0);this.Bei(this);},Ck:function(){A._GetAutoObject(C.Device).ArB(
this.toString());},Bei:function(G){this.EC(A._GetAutoObject(C.Device).AGA);A.we(
this,0);},_Init:function(aArg){C.Int32ArrayWrapper._Init.call(this,aArg);this.__proto__=
C.AU2;this.Y$(3);this.Init(aArg);},_className:"Device::WeightGainsLowClass"};C.AU1={
Init:function(aArg){var B;A.zX([this,this.Beg],[B=A._GetAutoObject(C.Device),B.A8C
,B.Baz],0);this.Beg(this);},Ck:function(){A._GetAutoObject(C.Device).ArA(this.toString(
));},Beg:function(G){this.EC(A._GetAutoObject(C.Device).AGz);A.we(this,0);},_Init:
function(aArg){C.Int32ArrayWrapper._Init.call(this,aArg);this.__proto__=C.AU1;this.
Y$(3);this.Init(aArg);},_className:"Device::WeightGainsHighClass"};C.AU4={Init:function(
aArg){var B;A.zX([this,this.Bek],[B=A._GetAutoObject(C.Device),B.A8G,B.BaD],0);this.
Bek(this);},Ck:function(){A._GetAutoObject(C.Device).ArC(this.toString());},Bek:
function(G){this.EC(A._GetAutoObject(C.Device).AGD);A.we(this,0);},_Init:function(
aArg){C.Int32ArrayWrapper._Init.call(this,aArg);this.__proto__=C.AU4;this.Y$(3);
this.Init(aArg);},_className:"Device::WeightValuesBirthClass"};C.AU0={Init:function(
aArg){var B;A.zX([this,this.Bee],[B=A._GetAutoObject(C.Device),B.A8B,B.Bay],0);this.
Bee(this);},Ck:function(){A._GetAutoObject(C.Device).Arz(this.toString());},Bee:
function(G){this.EC(A._GetAutoObject(C.Device).AGy);A.we(this,0);},_Init:function(
aArg){C.Int32ArrayWrapper._Init.call(this,aArg);this.__proto__=C.AU0;this.Y$(3);
this.Init(aArg);},_className:"Device::WeightGainsAverageClass"};C.AL1={Init:function(
aArg){var B;A.zX([this,this.BdC],[B=A._GetAutoObject(C.Device),B.A7I,B.A$$],0);this.
BdC(this);},BdC:function(G){this.EC(A._GetAutoObject(C.Device).AAZ);A.we(this,0);
},_Init:function(aArg){C.Int32ArrayWrapper._Init.call(this,aArg);this.__proto__=
C.AL1;this.Y$(3);this.Init(aArg);},_className:"Device::AnimalTypesWeightGainsClass"
};C.BDe={BDh:0,BC7:1,BBV:2,BEz:3,Unknown:4};C.BBz={None:0,BDp:1,BDj:2,BDf:3,BDg:
4};C.Ahv={A7g:0,Manual:1,TransponderId:2,LAST:3};C.TransponderAssignmentIdChangeMethodToString={
BQ:function(A2){var Bfm=A2;var AKC=A.jV;switch(Bfm){case 0:AKC=A.aaR(A.acf.A7g);
break;case 1:AKC=A.aaR(A.acf.A4X);break;case 2:AKC=A.aaR(A.acf.A5b);break;default:
throw new Error(AY0+Bfm.toFixed());}return AKC;},_Init:function(aArg){C.EnumToString.
_Init.call(this,aArg);this.__proto__=C.TransponderAssignmentIdChangeMethodToString;
},_className:"Device::TransponderAssignmentIdChangeMethodToString"};C.A90={BzL:function(
AsS){var MQ=A.ab0(A.abV(AsS,15),0,10);var JU=A._GetAutoObject(C.Converter).Acg(MQ
);if(!!JU){if((JU===10)&&(AsS.length>16))return 0;else return MQ;}else{JU=A._GetAutoObject(
C.Converter).Acg(A._GetAutoObject(C.Device).Ug);if(!!JU&&((JU===10)&&((AsS.length===
10)||(AsS.length===12)))){var AIL=A.ab0(A.abV(AsS,10),0,10);var AJA=A._GetAutoObject(
C.Converter).BoG(AIL);if((AIL>0)&&!!AJA)return(A._GetAutoObject(C.Converter).Ap7(
JU)*1000000000000)+A.ab0(A.abV(AsS,10),0,10);}}return 0;},BzK:function(AoG){if(AoG.
length<8)return 0;var Az4=A._NewObject(A.Core.Bt,0);var A23=false;var A28=A.abW(
AoG,4,4);var Ate=A.wz(A28,0,10);if((Ate<2000)||(Ate>2100)){A28=A.abV(AoG,4);Ate=
A.wz(A28,0,10);A23=true;}if((Ate<2000)||(Ate>2100))return 0;Az4.Year=Ate;var AKk;
var Azb;if(A23){AKk=A.abW(AoG,4,2);Azb=A.wz(AKk,0,10);}else{AKk=A.abW(AoG,2,2);Azb=
A.wz(AKk,0,10);}if((Azb<1)||(Azb>12))return 0;Az4.T$(Azb);var AKj;var Aza;if(A23
){AKj=A.abW(AoG,6,2);Aza=A.wz(AKj,0,10);}else{AKj=A.abV(AoG,2);Aza=A.wz(AKj,0,10
);}if((Aza<1)||(Aza>Az4.Y3()))return 0;Az4.Ll(Aza);return Az4.JH();},_Init:function(
aArg){this.__proto__=C.A90;A.h7++;},_Done:function(){this.__proto__=null;A.h7--;
},_ReInit:function(){},_Mark:function(D){var B;if((B=this.I)&&(B._cycle!=D))B._Mark(
B._cycle=D);},I:null,_cycle:0,_observers:null,_className:"Device::ParserClass"};
C.ArE={_Init:function(){C.A90._Init.call(this,0);},_ReInit:function(){},_variants:
function(){return this;},_this:null};C.AnimalTableFieldsToString={BQ:function(A2
){var Z2=A2;var MI=A.jV;switch(Z2){case 14:MI=A.aaR(A.acf.Ae8);break;case 32:MI=
A.aaR(A.acf.Breed);break;case 4:MI=A.aaR(A.acf.AdT);break;case 28:MI=A.aaR(A.acf.
A4L);break;case 33:MI=A.aaR(A.acf.Agk);break;case 23:MI=A.aaR(A.acf.KC);break;case
7:MI=A.aaR(A.acf.Ae0);break;case 2:MI=A.aaR(A.acf.O);break;case 0:MI=A.aaR(A.acf.
GD);break;case 8:MI=A.aaR(A.acf.Alarm);break;case 9:MI=A.aaR(A.acf.ABv);break;case
38:MI=A.aaR(A.acf.Bg6);break;case 11:MI=A.aaR(A.acf.Fever);break;case 29:MI=A.aaR(
A.acf.AQG);break;case 18:MI=A.aaR(A.acf.M0);break;case 26:MI=A.aaR(A.acf.YY);break;
case 22:MI=A.aaR(A.acf.Transponder);break;case 1:MI=A.aaR(A.acf.Gx);break;case 34:
MI=A.aaR(A.acf.I7);break;case 6:case 25:case 27:case 10:case 37:case 12:case 17:
case 5:case 3:case 35:case 36:case 15:case 16:case 24:case 31:case 20:case 30:case
21:case 19:case 13:MI=A.jV;break;default:throw new Error(AsD+A2.toFixed());}return MI;
},_Init:function(aArg){C.EnumToString._Init.call(this,aArg);this.__proto__=C.AnimalTableFieldsToString;
},_className:"Device::AnimalTableFieldsToString"};C.Vs={BCE:0,BCC:1,LAST:2};C.DataExportDestinationToString={
BQ:function(A2){var Bxl=A2;var A0Q=A.jV;switch(Bxl){case 0:A0Q=A.acf.Bh1;break;case
1:A0Q=A.acf.BgJ;break;default:throw new Error(AY1+A2.toFixed());}return A0Q;},_Init:
function(aArg){C.EnumToString._Init.call(this,aArg);this.__proto__=C.DataExportDestinationToString;
},_className:"Device::DataExportDestinationToString"};C.ADo={Bf:0,BEb:1,LAST:2};
C.ListViewScopeToString={BQ:function(A2){var Byu=A2;var A1L=A.jV;switch(Byu){case
0:A1L=A.aaR(A.acf.Bf);break;case 1:A1L=A.aaR(A.acf.BnJ);break;default:throw new Error(
AY2+A2.toFixed());}return A1L;},_Init:function(aArg){C.EnumToString._Init.call(this
,aArg);this.__proto__=C.ListViewScopeToString;},_className:"Device::ListViewScopeToString"
};C.AGC={BE0:0,BEZ:1,BEY:2,LAST:3};C.WeightValuePrecisionToString={BQ:function(A2
){var BA_=A2;var AKU=A.jV;switch(BA_){case 0:AKU=AsE+A.aaR(A.acf.Azo);break;case
1:AKU=AxT+A.acf.Aii;break;case 2:AKU=AsF+A.acf.Aii;break;default:throw new Error(
AY3+A2.toFixed());}return AKU;},_Init:function(aArg){C.EnumToString._Init.call(this
,aArg);this.__proto__=C.WeightValuePrecisionToString;},_className:"Device::WeightValuePrecisionToString"
};C.Agf={BQ:function(A2){var AKq=A2;if(AKq===1)return A.aaR(A.acf.Bh3);else return C.
AnimalTypeToString.BQ.call(this,A2);},_Init:function(aArg){C.AnimalTypeToString.
_Init.call(this,aArg);this.__proto__=C.Agf;},_className:"Device::AnimalTypeToStringHeifer"
};C.YK={Rz:0,BDl:1,LAST:2};C.MassDeregistrationCriterionToString={BQ:function(A2
){var Byx=A2;var A1Q=A.jV;switch(Byx){case 0:A1Q=A.aaR(A.acf.Bi9);break;case 1:A1Q=
A.aaR(A.acf.ARo);break;default:throw new Error(AGU+A2.toFixed());}return A1Q;},_Init:
function(aArg){C.EnumToString._Init.call(this,aArg);this.__proto__=C.MassDeregistrationCriterionToString;
},_className:"Device::MassDeregistrationCriterionToString"};
C._Init=function(){C.Int32FilterCriterion.__proto__=C.FilterCriterion;C.StringFilterCriterion.
__proto__=C.FilterCriterion;C.Table.__proto__=C.ITable;C.Animal.__proto__=C.Row;
C.Rating.__proto__=C.Row;C.HelperClass.__proto__=C.Amo;C.BoolFilterCriterion.__proto__=
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
C.AUp.__proto__=C.Int32ArrayWrapper;C.AUo.__proto__=C.Int32ArrayWrapper;C.AL0.__proto__=
C.Int32ArrayWrapper;C.UInt64FilterCriterion.__proto__=C.FilterCriterion;C.BooleanToAssignedUnassignedString.
__proto__=C.EnumToString;C.CountryToString.__proto__=C.EnumToString;C.EaseOfDeliveryToString.
__proto__=C.EnumToString;C.WhereAboutsToString.__proto__=C.EnumToString;C.BreedToString.
__proto__=C.EnumToString;C.AnimalIdGenerationMethodToString.__proto__=C.EnumToString;
C.DirectionOfCountingToString.__proto__=C.EnumToString;C.AdU.__proto__=C.EnumToIcon;
C.AdA.__proto__=C.EnumToIcon;C.GermanStateToString.__proto__=C.EnumToString;C.EartagNrAssignmentModeToString.
__proto__=C.EnumToString;C.MY.__proto__=C.EnumToCodeset;C.ReasonOfLeavingToString.
__proto__=C.EnumToString;C.Ahf.__proto__=C.EnumToCodeset;C.KS.__proto__=C.EnumToCodeset;
C.CalfDeregistrations.__proto__=C.Row;C.DeviceComponentToString.__proto__=C.EnumToString;
C.Ags.__proto__=C.EnumToCodeset;C.Aeu.__proto__=C.EnumToIcon;C.WhereAboutsFilterCriterion.
__proto__=C.FilterCriterion;C.TimespanDaysToString.__proto__=C.EnumToString;C.USBStateToString.
__proto__=C.EnumToString;C.AnimalIdAutoGenerationMethodToString.__proto__=C.EnumToString;
C.MonthToString.__proto__=C.EnumToString;C.AU2.__proto__=C.Int32ArrayWrapper;C.AU1.
__proto__=C.Int32ArrayWrapper;C.AU4.__proto__=C.Int32ArrayWrapper;C.AU0.__proto__=
C.Int32ArrayWrapper;C.AL1.__proto__=C.Int32ArrayWrapper;C.TransponderAssignmentIdChangeMethodToString.
__proto__=C.EnumToString;C.AnimalTableFieldsToString.__proto__=C.EnumToString;C.
DataExportDestinationToString.__proto__=C.EnumToString;C.ListViewScopeToString.__proto__=
C.EnumToString;C.WeightValuePrecisionToString.__proto__=C.EnumToString;C.Agf.__proto__=
C.AnimalTypeToString;C.MassDeregistrationCriterionToString.__proto__=C.EnumToString;
};C._ReInit=function(){var B;if((B=C.Device._this))B._ReInit(),C.Device._ReInit.
call(B);if((B=C.Converter._this))B._ReInit(),C.Converter._ReInit.call(B);if((B=C.
Helper._this))B._ReInit(),C.Helper._ReInit.call(B);if((B=C.ArE._this))B._ReInit(
),C.ArE._ReInit.call(B);};C.DB=function(D){var B;if((B=C.Device._this)&&(B._cycle
!=D))B._Done(C.Device._this=null);if((B=C.Converter._this)&&(B._cycle!=D))B._Done(
C.Converter._this=null);if((B=C.Helper._this)&&(B._cycle!=D))B._Done(C.Helper._this=
null);if((B=C.ArE._this)&&(B._cycle!=D))B._Done(C.ArE._this=null);};return C;})(
);

/* VitalControl demonstration application, © Urban GmbH & Co.KG 2023 */