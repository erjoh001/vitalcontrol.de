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
var EY="ERROR: UpdateChargeActive is read only";var Hi="ERROR: ScanState is read only.";
var I7="ERROR: MeasureState is read only.";var Ik="ERROR: Temperature value is read only";
var O0="ERROR: UpdateDataTable called for Undefined data table.";var PZ="ERROR: UpdateDataTable called for unknown data table id=";
var P0="ERROR: SyncState is read only.";var CO="ERROR: ScanTransponder is read only.";
var E7="ERROR: Body weight value is read only";var Ls="ERROR: Predicted temperature value is read only";
var P1="ERROR: TransferProgress is read only";var Ks="ERROR: TransferTarget is read only";
var N$="ERROR: unhandled assessment.";var P2="Unhandled enum BodyTemperature: ";
var ME="AU";var SY="AT";var UJ="BE";var ZM="BA";var WN="BG";var IJ="CA";var UK="CN";
var ZN="TW";var WO="HR";var ZO="CY";var WQ="CZ";var ZP="DK";var ZQ="EE";var UL="FI";
var WR="FR";var Rd="DE";var ZR="GR";var O1="HU";var Re="IE";var WS="IT";var WT="JP";
var WU="LV";var WV="LT";var ZS="LU";var WW="MT";var WX="NL";var SZ="NO";var ZT="PL";
var ZU="PT";var Acu="RO";var UM="RU";var ZV="SK";var Afk="SI";var ZW="ES";var WY=
"SE";var ZX="CH";var ZY="TR";var Afl="UA";var JR="UK";var Acv="US";var Lt=".";var
AhF="-";var AnY="ERROR: Unhandled mass unit: ";var Oa=" ";var WZ="Unhandled gender";
var AnZ="Unhandled animal type";var AhG="Unhandled Device::MassUnit.";var AhH="Unhandled Device::AnimalListContent.";
var Acw="Avid";var UN="Ordicam / IER SA";var An0="Agrident";var An1="Datamars";var
An2="Allflex";var An3="Texas Instruments";var Afm="Nedap";var An4="Digital Angel";
var Afn="null";var Asq="[ ";var Ob=", ";var S0=" ]";var Axx="Unhandled language";
var S1="Unhandled Device::AnimalListAction.";var Asr="Temperature unit conversion not supported: ";
var Axy="->";var Axz="=";var AxA=">";var An5="<";var AxB="!=";var Ass="WARNING: Unhandled operator.";
var JS="Unknown birth type";var AxC="Unhandled country: ";var Acx="ERROR: Cannot start transaction";
var AxD="ERROR: Table is null, cannot load row (";var AGT=")";var AGU="Table Id mismatch!";
var AGV="ERROR: Row index (";var AGW=") out of bounds [0,";var Ast="]";var AVm="ERROR: Table is full. Item limit: ";
var AVn="Device::ScanTransponder not set";var AVo="Unhandled TransponderType.";var
AVp="Unhandled ScanState.";var AVq="Could not load animal with transponder";var Asu=
"Birth type";var AxE="Time calving";var P3="Pend. reg. notice";var AxF="Perished";
var AVr="Rating temp.";var AVs="Location";var AVt=" mother";var AVu="Reason leaving";
var AGX="Time alarm";var AGY="Time first weighing";var Afo="Time control";var An6=
"Time temp.";var AVv="Time watch";var AGZ="Time weighing";var AkT="Assessment";var
AG0="Time rating";var AG1="ERROR: Unhandled AnimalTable filter field:";var AG2="Field ";
var AVw="ERROR: Unhandled RatingTable filter field:";var AVx="ERROR: Unhandled table ";
var AVy=" filter fields.";var Acy=" [";var AVz="WARNING: Unhandled filter criterion type.";
var AG3="0";var Asv="No table specified";var AG4="Invalid animal id generation method: ";
var AG5="Unhandled AnimalIdGenerationMethod: ";var AxG="Invalid gender: ";var AG6=
"Invalid ear tag number assignment mode: ";var AxH=";";var AVA="Invalid animal creation error code: ";
var AVB="Invalid EartagNrAssignmentMode: ";var AVC="Unsupported exponent: ";var AVD=
"Unknown whereabouts type: ";var AG7="Unhandled Gender: ";var AVE="Unhandled AnimalIdAutoGenerationMethod: ";
var O2="\n";var AxI="\n\n";var AVF="Bootloader:\nV\xA0";var AVG="Middleware:\nV\xA0";
var AVH="GUI:\nV\xA0";var AVI="Mainboard: ";var AVJ="Torchboard: ";var AVK="Operator not supported.";
var AVL="Unhandled Device::TransponderAssignmentIdChangeMethod: ";var AxJ="Unhandled mass deregistration criterion: ";
var Asw="Unhandled enum value ";var Asx="UNDEFINED";var AVM="Boot";var AVN="Charge";
var AVO="ChargeWarning";var AVP="ControlledPowerOff";var AG8="DeviceMain";var AVQ=
"DeviceService";var AG9="DeviceInfo";var AG_="DeviceDataManagement";var AG$="DeviceAnimalDataMenu";
var AVR="DeviceDeviceDataMenu";var AHa="DeviceCheck";var AHb="Home";var AVS="Settings";
var Rf="DateTimeSettings";var W0="UnitsSettings";var AVT="DataAcquisitionSettings";
var AVU="RegistrationAutomaticSettings";var AVV="RegistrationPresettingsSettings";
var AVW="TransponderAssignmentSettings";var AVX="TemperatureSettings";var AVY="WeightGainSettings";
var AVZ="DeviceSettings";var AhI="RegistrationSettings";var AHc="InitializationSettings";
var AV0="PremisesSettings";var AV1="Sleep";var AHd="Sync";var AHe="EditAnimalData";
var AxK="EditAnimalDataNaisId";var P4="AnimalList";var AV2="AnimalListFilter";var
AV3="AlarmListFilter";var AV4="WatchListFilter";var Asy="AnimalActionActions";var
AV5="AnimalActionTemperature";var AV6="TemperatureMeasurement";var AV7="AnimalActionWeighing";
var AV8="AnimalActionRate";var AV9="AnimalActionUnregister";var AV_="AnimalActionPerished";
var Asz="AnimalActionNewBornCare";var AV$="AlarmList";var AWa="ControlMeasure";var
AWb="ControlList";var AWc="RangeTest";var AWd="ListsMain";var AWe="ListsIdManagement";
var AWf="WatchList";var AWg="AnimalListActions";var AWh="AlarmListActions";var AWi=
"ControlListActions";var AHf="WatchListActions";var AkU="EvaluationMenuMain";var
AWj="EvaluationMenuWeights";var AWk="EvaluationLosses";var AWl="EvaluationRatings";
var AxL="EvaluationTemperatures";var AkV="EvaluationWeights";var AhJ="EvaluationWeightsRecent";
var AxM="EvaluationBirthWeights";var An7="AnimalEvaluationFilter";var AhK="NewMenu";
var AWm="NewAnimals";var AxN="NewAnimalManualData";var AHg="MassRecording";var Afp=
"NewAnimalTransponderData";var AHh="NewAnimalLoss";var ZZ="AutoActionScanScreen";
var AkW="ManualActionScanScreen";var An8="SetTransponderScreen";var AWn="SetSaveTransponderScreen";
var AWo="NewAnimalSetTransponderScreen";var AWp="NewAnimalsSetTransponderScreen";
var AWq="NewAnimalCalvingDataScreen";var AWr="WeightListScreen";var AsA="AnimalSingleInfoScreen";
var AHi="AnimalMultiInfoScreen";var AHj="AnimalRegistrationDetails";var AWs="MultiInfoActionsScreen";
var AWt="FreshCowListScreen";var AWu="FreshCowListActionsScreen";var AWv="FreshCowListFilterScreen";
var AWw="DryCowListScreen";var AWx="DryCowListActionsScreen";var AWy="DryCowListFilterScreen";
var AWz="NoTransponderListScreen";var AWA="NoTransponderListActionsScreen";var AWB=
"NoTransponderListFilterScreen";var AWC="YoungNoTransponderListScreen";var AxO="YoungNoTransponderListActionsScreen";
var AHk="YoungNoTransponderListFilterScreen";var AHl="NoNaisIdListScreen";var AHm=
"NoNaisIdListActionsScreen";var AHn="NoNaisIdListFilterScreen";var AHo="RegistrationsListScreen";
var AHp="RegistrationsListActionsScreen";var AWD="RegistrationsListFilterScreen";
var AWE="ActionListScreen";var AWF="ActionListActionsScreen";var AWG="ActionListFilterScreen";
var AWH="UpdateScreen";var AWI="MotherScanScreen";var AWJ="SetSaveNaisIdScreen";
var AxP="PurchasedAnimalsList";var AHq="TextInput";var AWK="Unhandled display mode: ";
var AHr="None";var AhL="Actions Settings";var W1="Auto Action";var AWL="Menu Item Settings";
var Z0="Rating Type";var AWM="Weighing settings";var AWN="Options";var An9="AnimalSearch";
var Afq="AnimalSearchUnfiltered";var AkX="AnimalSearchDriedOff";var AHs="MeasurementReady";
var AWO="AnimalMultiInfoMenu";var O3="MassRecordingDefaults";var AWP="MassRecordingFields";
var AWQ="MassRecordingMenu";var AWR="PurchasedAnimalsListMenu";var AWS="BirthRegistrationsListMenu";
var AHt="Unhandled overlay menu: ";var AsB="Error";var AxQ="Idle";var AWT="IdScanned";
var AWU="NotFound";var AHu="Progress";var AHv="Unhandled scan state: ";var AWV="Prediction";
var AHw="Ready";var AWW="Unhandled measure state: ";var AHx="Unhandled temperature unit: ";
var AWX="Unhandled species: ";var AHy="English";var AHz="Nederlands";var AxR="Deutsch";
var AWY="Eesti";var AWZ="Suomalainen";var AW0="Fran\xE7ais";var AW1="\u0395\u03BB\u03BB\u03B7\u03BD\u03B9\u03BA\u03AC";
var AW2="\u0411\u044A\u043B\u0433\u0430\u0440\u0441\u043A\u0438";var AW3="Italiano";
var AW4="\u0420\u0443\u0441\u0441\u043A\u0438\u0439";var AW5="Espa\xF1ol";var AsC=
"T\xFCrk\xE7e";var AsD="\u6B63\u9AD4\u5B57/\u7E41\u9AD4\u5B57";var AHA="\u010Ce\u0161tina";
var AW6="Bosanski";var AW7="Norsk";var AW8="\u0423\u043A\u0440\u0430\u0457\u043D\u0441\u044C\u043A\u0438\u0439";
var AHB="Unhandled language: ";var AW9="EN";var AW_="ET";var AW$="EL";var AXa="ZH";
var AXb="CS";var AXc="BS";var AXd="Unhandled gender: ";var AXe="Unhandled birth type: ";
var AXf="Exporting";var AXg="ImportFinish";var AXh="ImportStart";var AXi="Importing";
var AXj="Init";var AXk="Unhandled sync state: ";var AxS="Unhandled rating attribute: ";
var AHC="Unhandled assessment: ";var AsE="Illegal boolean value: ";var AxT="Unhandled popup ID:";
var AxU="Unknown";var AxV="Severe Error";var AHD="ErrorsDeviceDriverCheck";var AXl=
"Enter Sleep";var AHE="About";var AXm="InfoSoftwareVersions";var AHF="InfoHardwareVersions";
var AXn="InfoSerial";var AXo="ShutDown";var AXp="SuccessDataSync";var AXq="SuccessResetFactory";
var AXr="SuccessResetAnimalData";var AXs="SuccessCreateBackup";var AXt="SuccessRestoreBackup";
var AXu="CreateBackupInProgress";var AXv="RestoreBackupInProgress";var AXw="FailedCreateBackup";
var AXx="FailedRestoreBackup";var AXy="TechnicalDetails";var AxW="WarningDataSync";
var AXz="WarningFactory";var AXA="WarningResetAnimalData";var AxX="WarningRestart";
var AsF="WarningAutoAction";var UO="WarningAutoActionNotApplicable";var AsG="WarningNoMenuItem";
var AXB="WarningEnterDemoMode";var AXC="NoAnimalsRegistered";var AXD="MaxNumAnimalsReached";
var AHG="MaxNumRatingsReached";var AXE="MaxNumCalfDeregistrationsReached";var AHH=
"MissingTransponder";var AXF="EarTagNumberTooShort";var AXG="NoValidCountryCode";
var AXH="WarningOutdatedAnimalWeight";var AsH="WarningOutdatedAnimalWeights";var
AXI="WarningWeightEvaluationSingular";var AXJ="WarningWeightEvaluationPlural";var
AHI="ScanError";var AXK="ScanNotFound";var AXL="ScannedAnimalNotFound";var AXM="ScannedTransponderNotFound";
var AXN="AnimalNotFound";var AXO="SuccessUnregister";var Acz="SuccessUnregisterPerished";
var AXP="SuccessCreationNewAnimal";var AXQ="SuccessCreationNewAnimals";var AXR="AnimalCreationInProgress";
var AHJ="EvaluationInProgress";var AXS="DataSyncInProgress";var AXT="AddedToAlarm";
var AXU="RemovedFromAlarm";var AXV="AddedToWatch";var AXW="RemovedFromWatch";var
AXX="AddedToDryOff";var AHK="RemovedFromDryOff";var AXY="AnimalIdAlreadyExists";
var AXZ="AnimalIdAlreadyExistsContinuable";var AX0="MissingAnimalId";var AHL="MissingAnimalIdMother";
var AHM="MissingEartagNumber";var AX1="MissingTransponderId";var AX2="TransponderAlreadyRegistered";
var AX3="TransponderAlreadyRegisteredContinuable";var AX4="TransponderAlreadyRegisteredCapturable";
var Rg="HelpAnimalInfoRating";var AsI="WarningReassignTransponder";var AHN="CannotReassignNaisId";
var AHO="WarningResetToDefaultValue";var An_="WarningResetThresholds";var An$="WarningResetTempThresholds";
var AxY="UpdateFirmware";var AX5="UpdateFirmwareBatteryLow";var AHP="ConfirmFirmwareUpdated";
var AX6="ConfirmBootloaderUpdated";var AX7="QuestionAddAnotherCalfMultiples";var
AX8="RemovedAllBirthNoticesPending";var AX9="RemovedAllPurchasedNoticePending";var
AX_="RemovedFromBirthNoticePending";var AX$="RemovedFromPurchasedNoticePending";
var AYa="SuccessClearAnimalLoss";var AYb="RemovedAnimalBirth";var AYc="RemovedAnimalPurchased";
var AYd="WarningNoActionsForAnimalLoss";var AYe="SuccessLinkTransponder";var AYf=
"SuccessChangeTransponder";var AYg="SuccessUnlinkTransponder";var AYh="SuccessLinkNaisId";
var AYi="WarningDataExportHitBirthFailed";var AYj="SuccessDataExportHitBirth";var
AYk="SuccessDataExportHitBirthDownload";var Aoa="WarningDataExportHitPurchasedFailed";
var AHQ="SuccessDataExportHitPurchased";var AYl="SuccessDataExportHitPurchasedDownload";
var AHR="WarningDataExportAnimalsFailed";var AHS="SuccessDataExportAnimalsRatings";
var Z1="SuccessDataExportAnimalsDownload";var AHT="WarningNoPremisesID";var AYm=
"WarningNoFlashDrivePresent";var AHU="WarningNoBackupPathPresent";var AYn="WarningNoBackupFilePresent";
var AxZ="DemoFunctionNotAvailable";var AYo="WarningImpreciseTimeSetting";var AYp=
"ConfirmationRestoreBackup";var Ax0="ConfirmationMassDeregistration";var AYq="SuccessMassDeregistration";
var AYr="WarningParsedDateInFutureInvalid";var AYs="WarningParsingDateFailed";var
AHV="WarningParsingNaisIdFailed";var Aob="WarningParsingShortNaisIdWithoutPremisesId";
var AHW="AnimalId";var AYt="FarmId";var AHX="GroupId";var AHY="PersonId";var AkY=
"Unhandled transponder type: ";var AYu="FDX";var Aoc="HDX";var AYv="HDX (Urban)";
var AHZ="Unhandled transponder protocol: ";var AH0="Illegal RatingMode: ";var AYw=
"Unhandled mass unit: ";var AYx="Max array size is 10";var Ax1="Index out of bounds";
var AYy="ERROR: Received more integers than expected!";var AH1="Unhandled double scan action :";
var AYz="Illegal WeightRecordingMode: ";var AYA="Illegal WeightRecordingScope: ";
var AYB="AnimalData";var AYC="Rating";var AYD="Temperature";var AYE="Weight";var
AYF="Alarm infos";var AYG="Control infos";var AYH="Watch infos";var AYI="Fresh cow infos";
var AYJ="No transponder infos";var AYK="Dry cow info";var AH2="No nais id infos";
var Z2="Birth registrations infos";var AYL="Purchased registrations infos";var Ax2=
"Young no transponder infos";var AYM="Unhandled animal list content:";var AYN="Illegal AutoRegistrationMode: ";
var AYO="Illegal FactoryResetScope: ";var Aod="??";var AYP="Illegal EaseOfDelivery: ";
var AYQ="Illegal Whereabouts: ";var AsJ="Illegal breed: ";var AsK="Unisex";var AsL=
"Illegal animalIdGenerationMethod: ";var AsM="Ascending";var Ax3="Descending";var
Aoe="Illegal directionOfCountingName: ";var AH3="Unhandled direction of counting: ";
var AsN="Unhandled German state: ";var AYR="SH";var AYS="HH";var AYT="NI";var AYU=
"HB";var AYV="NW";var AYW="HE";var AYX="RP";var AYY="BW";var AYZ="BY";var AY0="SL";
var AY1="BB";var AY2="MV";var Ax4="SN";var AY3="ST";var Ax5="TH";var Ax6="One Range Male Female";
var AY4="Two Ranges Male Female";var AH4="Illegal EartagAssignmentMode: ";var AY5=
"Unhandled code set value ";var Ax7="Implement in derived class";var AY6="Illegal HIT-Code: ";
var AY7="Illegal ReasonOfLeaving: ";var AH5="Illegal code: ";var AY8="Undefined";
var AY9="Illegal DeviceComponent: ";var AY_="Unhandled Device::MotherSelectionFilterMode: ";
var AY$="Illegal Device::TimespanDays: ";var AZa="Not connected";var AH6="Host";
var AZb="Device";var AZc="Device CDC";var AZd="Host MSC";var AZe="Host HID";var AZf=
"Host CDC";var AZg="Illegal animalIdAutoGenerationMethod: ";var AZh="Unhandled month: ";
var AH7="Illegal transponderAssignmentIdChangeMethod: ";var AZi="Unhandled animal table field: ";
var AsO="Unhandled data export destination: ";var AZj="Unhandled list view scope: ";
var AZk="1 ";var AsP="100 ";var Ax8="10 ";var AsQ="Unhandled weight value precision: ";
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
B8:null,B9:null,CV:function(AH){if(!AH)return;var Au=this.B8;while(!!Au){if(Au===
AH)throw new Error(Cc);Au=Au.Ah;}AH.AJ=this.B9;if(!!this.B9)this.B9.Ah=AH;this.B9=
AH;if(!this.B8)this.B8=AH;},AOg:function(){return this.B8;},AOl:function(Bbe){if(
!!Bbe)return Bbe.Ah;return null;},DN:function(AIB,D9){var Au=this.B8;while(!!Au){
if(Au.EE===AIB){if(D9===1)return Au;else if(Au.Operator===D9)return Au;}Au=Au.Ah;
}return null;},N3:function(AH){var Au=this.B8;while(!!Au){if(Au===AH){if(!!Au.AJ
)Au.AJ.Ah=Au.Ah;if(!!Au.Ah)Au.Ah.AJ=Au.AJ;if(this.B8===Au)this.B8=Au.Ah;if(this.
B9===Au)this.B9=Au.AJ;Au.Ah=null;Au.AJ=null;return;}Au=Au.Ah;}},Fc:function(){var
Be=A._NewObject(C.Filter,0);var Au=this.B8;while(!!Au){Be.CV(Au.Aa3());Au=Au.Ah;
}return Be;},_Init:function(aArg){this.__proto__=C.Filter;A.h7++;},_Done:function(
){this.__proto__=null;A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((
B=this.B8)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.B9)&&(B._cycle!=D))B._Mark(
B._cycle=D);if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:
null,_className:"Device::Filter"};C.FilterCriterion={Ah:null,AJ:null,EE:-1,Operator:
1,Ys:false,Aa3:function(){return null;},Fc:function(AH){if(!AH)return;this.EE=AH.
EE;this.Operator=AH.Operator;this.Ys=AH.Ys;},_Init:function(aArg){this.__proto__=
C.FilterCriterion;A.h7++;},_Done:function(){this.__proto__=null;A.h7--;},_ReInit:
function(){},_Mark:function(D){var B;if((B=this.Ah)&&(B._cycle!=D))B._Mark(B._cycle=
D);if((B=this.AJ)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.I)&&(B._cycle!=D
))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:"Device::FilterCriterion"
};C.Int32FilterCriterion={A5:0,Aa3:function(){var Au=A._NewObject(C.Int32FilterCriterion
,0);Au.Fc(this);return Au;},Fc:function(AH){C.FilterCriterion.Fc.call(this,AH);var
Au=(C.Int32FilterCriterion.isPrototypeOf(AH)?AH:null);if(!!Au)this.A5=Au.A5;},Initialize:
function(A4,D9,A6,P7){this.EE=A4;this.Operator=D9;this.A5=A6;this.Ys=P7;return this;
},_Init:function(aArg){C.FilterCriterion._Init.call(this,aArg);this.__proto__=C.
Int32FilterCriterion;},_className:"Device::Int32FilterCriterion"};C.DeviceClass={
ADQ:0,ADP:0,AvA:0,Un:0,OP:null,Sq:null,QS:null,SN:null,RQ:null,Ao:null,Bu:null,Agf:
null,Anv:null,Pk:null,Aub:A.jV,AutoActions:A.jV,ABa:A.jV,AGr:A.jV,AGs:A.jV,Ahr:A.
jV,AGN:A.jV,AGO:A.jV,ABb:A.jV,AGM:A.jV,AGR:A.jV,AA7:A.jV,AA8:A.jV,NoNaisIdListActions:
A.jV,NoTransponderListActions:A.jV,YoungNoTransponderListActions:A.jV,AaM:100,Ko:
0,AMw:75,ZI:3600,ATw:0,A0:5,AF:0,KU:50000,Pf:0,AFJ:0,Adz:0,AqF:0,AqE:0,ARj:1,ARi:
1,AjI:0,ARk:1,Axj:0,Ae$:0,Aqt:10,AUi:5,ADI:60,Avw:0,OJ:1,WhereAbouts:0,Vz:0,AhB:
0,Axb:3,ACa:0,Al$:0,Agh:1,AhC:0,AbE:0,Ap6:0,ANt:11,Breed:0,EartagNrAssignmentMode:
0,AuD:0,AB5:0,AB4:0,Ia:5,AA6:2,Ap8:0,AN9:2,AU5:0,D5:0,ALF:0,JA:0,Gender:2,WeightRecordingScope:
1,WeightRecordingMode:1,AnimalType:0,MassUnit:0,AutoRegistrationMode:0,RatingMode:
0,SyncState:0,OverlayMenu:0,TemperatureUnit:0,Language:0,MeasureState:0,ScanState:
0,KD:3,Aes:true,AQ7:false,ApX:true,Aqu:false,Amx:true,Hy:false,AUM:false,Amy:false
,AU3:false,Ask:false,ADO:false,Amj:false,UpdateActiveScreen:function(AK){if(this.
KD===AK)return;this.KD=AK;A.abo([this,this.AD1,this.Baq],0);},Y_:function(E){if(
this.K&&this.K.Y_)return this.K.Y_.apply(this,arguments);else return C.DeviceClass.
BtE.apply(this,arguments);},BtE:function(E){},Baq:function(Aq){this.Y_(Aq);},UpdateBatteryChargeState:
function(AK){if(this.AaM===AK)return;this.AaM=AK;A.abo([this,this.AvF,this.Ayc],
0);},Av2:function(E){if(this.K&&this.K.Av2)return this.K.Av2.apply(this,arguments
);else return C.DeviceClass.BtQ.apply(this,arguments);},BtQ:function(E){A.ab5("%s"
,BF);},Ayc:function(Aq){this.Av2(Aq);},UpdateChargeActive:function(AK){if(this.Amj===
AK)return;this.Amj=AK;A.abo([this,this.AvI,this.Ayd],0);},AEv:function(E){if(this.
K&&this.K.AEv)return this.K.AEv.apply(this,arguments);else return C.DeviceClass.
BtW.apply(this,arguments);},BtW:function(E){A.ab5("%s",EY);},Ayd:function(Aq){this.
AEv(Aq);},UpdateScanState:function(AK){var B;if(this.ScanState===AK)return;this.
ScanState=AK;A.abo([this,this.AR$,this.AZP],0);A._GetAutoObject(C.Helper).Bz0(this
);},Arz:function(E){if(this.K&&this.K.Arz)return this.K.Arz.apply(this,arguments
);else return C.DeviceClass.BuB.apply(this,arguments);},BuB:function(E){A.ab5("%s"
,Hi);},AZP:function(Aq){this.Arz(Aq);},UpdateMeasureState:function(AK){if(this.MeasureState===
AK)return;this.MeasureState=AK;A.abo([this,this.AD9,this.AIk],0);},Awp:function(
E){if(this.K&&this.K.Awp)return this.K.Awp.apply(this,arguments);else return C.DeviceClass.
Buj.apply(this,arguments);},Buj:function(E){A.ab5("%s",I7);},AIk:function(Aq){this.
Awp(Aq);},UpdateTempValue:function(AK){if(this.Ko===AK)return;this.Ko=AK;A.abo([
this,this.AEa,this.AIm],0);},AwD:function(E){if(this.K&&this.K.AwD)return this.K.
AwD.apply(this,arguments);else return C.DeviceClass.BuH.apply(this,arguments);},
BuH:function(E){A.ab5("%s",Ik);},AIm:function(Aq){this.AwD(Aq);},Ank:function(E){
if(this.K&&this.K.Ank)return this.K.Ank.apply(this,arguments);else return C.DeviceClass.
Bud.apply(this,arguments);},Bud:function(E){},BaG:function(Aq){this.Ank(Aq);},AwE:
function(E){if(this.K&&this.K.AwE)return this.K.AwE.apply(this,arguments);else return C.
DeviceClass.BuI.apply(this,arguments);},BuI:function(E){},AsU:function(Aq){this.
AwE(Aq);},AEt:function(E){if(this.K&&this.K.AEt)return this.K.AEt.apply(this,arguments
);else return C.DeviceClass.BtV.apply(this,arguments);},BtV:function(E){},Bay:function(
Aq){this.AEt(Aq);},AE4:function(E){if(this.K&&this.K.AE4)return this.K.AE4.apply(
this,arguments);else return C.DeviceClass.Bul.apply(this,arguments);},Bul:function(
E){},AZJ:function(Aq){this.AE4(Aq);},UpdateMonitoring:function(AK){if(this.ADO===
AK)return;this.ADO=AK;A.abo([this,this.AR2,this.AZJ],0);},UpdateDataTable:function(
Bbf){var B;switch(Bbf){case 0:A.pe([B=this.Ao,B.Aj_],this);break;case 1:A.pe([B=
this.Bu,B.Aj_],this);break;case 3:A.pe([B=this.Agf,B.Aj_],this);break;case 4:A.pe([
B=this.Pk,B.Aj_],this);break;case 2:A.ab5("%s",O0);break;default:A.ab5("%s%e",PZ
,Bbf);}},Axa:function(){if(this.K&&this.K.Axa)return this.K.Axa.apply(this,arguments
);else return C.DeviceClass.Bve.apply(this,arguments);},Bve:function(){},Ahv:function(
){if(this.K&&this.K.Ahv)return this.K.Ahv.apply(this,arguments);else return C.DeviceClass.
Bvh.apply(this,arguments);},Bvh:function(){},Ahs:function(){if(this.K&&this.K.Ahs
)return this.K.Ahs.apply(this,arguments);else return C.DeviceClass.Bvf.apply(this
,arguments);},Bvf:function(){},AnH:function(){if(this.K&&this.K.AnH)return this.
K.AnH.apply(this,arguments);else return C.DeviceClass.Bvi.apply(this,arguments);
},Bvi:function(){},UpdateLanguage:function(AK){if(this.Language===AK)return;this.
Language=AK;switch(AK){case 14:A._SetLanguage(1);break;case 13:A._SetLanguage(2);
break;case 6:A._SetLanguage(3);break;case 11:A._SetLanguage(4);break;case 10:A._SetLanguage(
5);break;case 12:A._SetLanguage(6);break;case 5:A._SetLanguage(7);break;case 3:A.
_SetLanguage(8);break;case 1:A._SetLanguage(9);break;case 8:A._SetLanguage(10);break;
case 4:A._SetLanguage(11);break;case 15:A._SetLanguage(13);break;case 9:A._SetLanguage(
15);break;case 2:A._SetLanguage(16);break;case 7:A._SetLanguage(17);break;case 16:
A._SetLanguage(18);break;default:A._SetLanguage(0);}A.abo([this,this.A8p,this.BaG
],0);},UpdateTemperatureUnit:function(AK){if(this.TemperatureUnit===AK)return;this.
TemperatureUnit=AK;A.abo([this,this.Aq$,this.AsU],0);},UpdateBrightness:function(
AK){if(this.AMw===AK)return;this.AMw=AK;A.abo([this,this.A8a,this.Bay],0);},SetSystemTime:
function(AhU){if(this.K&&this.K.SetSystemTime)return this.K.SetSystemTime.apply(
this,arguments);else return C.DeviceClass.Bvc.apply(this,arguments);},Bvc:function(
AhU){},Aw6:function(){if(this.K&&this.K.Aw6)return this.K.Aw6.apply(this,arguments
);else return C.DeviceClass.Baf.apply(this,arguments);},Baf:function(){},AFX:function(
){if(this.K&&this.K.AFX)return this.K.AFX.apply(this,arguments);else return C.DeviceClass.
Bad.apply(this,arguments);},Bad:function(){},BnB:function(){},UpdateOverlayMenu:
function(AK){if(this.OverlayMenu===AK)return;this.OverlayMenu=AK;A.abo([this,this.
AvU,this.Ayk],0);},Ds:function(E){if(this.K&&this.K.Ds)return this.K.Ds.apply(this
,arguments);else return C.DeviceClass.Buw.apply(this,arguments);},Buw:function(E
){},Ayk:function(Aq){this.Ds(Aq);},AwJ:function(E){if(this.K&&this.K.AwJ)return this.
K.AwJ.apply(this,arguments);else return C.DeviceClass.BuR.apply(this,arguments);
},BuR:function(E){},BaR:function(Aq){this.AwJ(Aq);},UpdateUnderTemp:function(AK){
if(this.ZI===AK)return;this.ZI=AK;A.abo([this,this.A8U,this.BaR],0);},UpdateSyncState:
function(AK){if(this.SyncState===AK)return;this.SyncState=AK;A.abo([this,this.ASb
,this.AZR],0);},AbV:function(E){if(this.K&&this.K.AbV)return this.K.AbV.apply(this
,arguments);else return C.DeviceClass.BuG.apply(this,arguments);},BuG:function(E
){A.ab5("%s",P0);},AZR:function(Aq){this.AbV(Aq);},ACx:function(){if(this.K&&this.
K.ACx)return this.K.ACx.apply(this,arguments);else return C.DeviceClass.Btw.apply(
this,arguments);},Btw:function(){return A.jV;},UpdatePopup:function(JU,A0A,A0w,A0D
){this.A_(JU,A0A,A0w,A0D,[this,this.BzI]);},PopupStateChanged:function(JU,Ae){if(
this.K&&this.K.PopupStateChanged)return this.K.PopupStateChanged.apply(this,arguments
);else return C.DeviceClass.Bu4.apply(this,arguments);},Bu4:function(JU,Ae){},AFu:
function(E){if(this.K&&this.K.AFu)return this.K.AFu.apply(this,arguments);else return C.
DeviceClass.BuT.apply(this,arguments);},BuT:function(E){},BaS:function(Aq){this.
AFu(Aq);},UpdateVibrationOnKeypressEnabled:function(AK){if(this.Ask===AK)return;
this.Ask=AK;A.abo([this,this.A8V,this.BaS],0);},AeR:function(E){if(this.K&&this.
K.AeR)return this.K.AeR.apply(this,arguments);else return C.DeviceClass.BuS.apply(
this,arguments);},BuS:function(E){},AIn:function(Aq){this.AeR(Aq);},UpdateVibrationOn:
function(BbI){if(this.AU3===BbI)return;this.AU3=BbI;A.abo([this,this.AEb,this.AIn
],0);},A_:function(JU,A0A,A0w,A0D,BwJ){var Af7=A._NewObject(C.PopupContext,0);Af7.
Id=JU;Af7.Show=A0A;Af7.Akr=A0w;Af7.AkL=A0D;Af7.AFC=BwJ;this.Anv.Trigger(Af7,false
);},BzI:function(G){var At=(C.PopupContext.isPrototypeOf(G)?G:null);if(!!At)this.
PopupStateChanged(At.Id,At.PopupState);},Awz:function(E){if(this.K&&this.K.Awz)return this.
K.Awz.apply(this,arguments);else return C.DeviceClass.BuA.apply(this,arguments);
},BuA:function(E){},AZO:function(Aq){this.Awz(Aq);},UpdateRatingMode:function(AK
){if(this.RatingMode===AK)return;this.RatingMode=AK;A.abo([this,this.AR_,this.AZO
],0);},AeI:function(E){if(this.K&&this.K.AeI)return this.K.AeI.apply(this,arguments
);else return C.DeviceClass.Bt7.apply(this,arguments);},Bt7:function(E){},AsT:function(
Aq){this.AeI(Aq);},UpdateFlashLightOn:function(Bbo){if(this.Amy===Bbo)return;this.
Amy=Bbo;A.abo([this,this.Aq8,this.AsT],0);},Uh:function(E){if(this.K&&this.K.Uh)
return this.K.Uh.apply(this,arguments);else return C.DeviceClass.BuL.apply(this,
arguments);},BuL:function(E){},AZS:function(Aq){this.Uh(Aq);},UpdateTopLightOn:function(
BbD){if(this.AUM===BbD)return;this.AUM=BbD;A.abo([this,this.ASd,this.AZS],0);},Wn:
function(E){if(this.K&&this.K.Wn)return this.K.Wn.apply(this,arguments);else return C.
DeviceClass.Buz.apply(this,arguments);},Buz:function(E){},Bvw:function(Aq){this.
Wn(Aq);},UpdateRGBTopLight:function(Bby){if(this.ATw===Bby)return;this.ATw=Bby;A.
abo([this,this.Bkk,this.Bvw],0);},Av1:function(E){if(this.K&&this.K.Av1)return this.
K.Av1.apply(this,arguments);else return C.DeviceClass.BtP.apply(this,arguments);
},BtP:function(E){},Bvp:function(Aq){this.Av1(Aq);},UpdateAutoRegistrationMode:function(
Bbb){if(this.AutoRegistrationMode===Bbb)return;this.AutoRegistrationMode=Bbb;A.abo([
this,this.BjL,this.Bvp],0);},ArA:function(E){if(this.K&&this.K.ArA)return this.K.
ArA.apply(this,arguments);else return C.DeviceClass.BuC.apply(this,arguments);},
BuC:function(E){A.ab5("%s",CO);},AZQ:function(Aq){this.ArA(Aq);},UpdateScanTransponder:
function(JU,BbG,BbF){if(((this.OP.Id===JU)&&(this.OP.TransponderType===BbG))&&(this.
OP.TransponderProtocol===BbF))return;this.OP.OnSetId(JU);this.OP.AS$(BbG);this.OP.
AS_(BbF);A.abo([this,this.ASa,this.AZQ],0);},PM:function(E){if(this.K&&this.K.PM
)return this.K.PM.apply(this,arguments);else return C.DeviceClass.BtZ.apply(this
,arguments);},BtZ:function(E){},AcA:function(Aq){this.PM(Aq);},UpdateDigitsID:function(
Bbj){if(this.A0===Bbj)return;this.A0=Bbj;A.abo([this,this.AbK,this.AcA],0);},QY:
function(E){if(this.K&&this.K.QY)return this.K.QY.apply(this,arguments);else return C.
DeviceClass.Buv.apply(this,arguments);},Buv:function(E){},AcB:function(Aq){this.
QY(Aq);},UpdateOffsetID:function(Bbv){if(this.AF===Bbv)return;this.AF=Bbv;A.abo([
this,this.AbL,this.AcB],0);},AFy:function(E){if(this.K&&this.K.AFy)return this.K.
AFy.apply(this,arguments);else return C.DeviceClass.Bu0.apply(this,arguments);},
Bu0:function(E){A.ab5("%s",E7);},AIo:function(Aq){this.AFy(Aq);},UpdateWeightValue:
function(AK){if(this.KU===AK)return;this.KU=AK;A.abo([this,this.AEc,this.AIo],0);
},Awm:function(E){if(this.K&&this.K.Awm)return this.K.Awm.apply(this,arguments);
else return C.DeviceClass.Bug.apply(this,arguments);},Bug:function(E){},AZI:function(
Aq){this.Awm(Aq);},UpdateMassUnit:function(AK){if(this.MassUnit===AK)return;this.
MassUnit=AK;A.abo([this,this.AR1,this.AZI],0);},Arc:function(E){if(this.K&&this.
K.Arc)return this.K.Arc.apply(this,arguments);else return C.DeviceClass.A$$.apply(
this,arguments);},A$$:function(E){},Ban:function(Aq){this.Arc(Aq);},Ard:function(
E){if(this.K&&this.K.Ard)return this.K.Ard.apply(this,arguments);else return C.DeviceClass.
Baa.apply(this,arguments);},Baa:function(E){},AZC:function(Aq){this.Ard(Aq);},UpdateActiveActions:
function(AK){if(this.Pf===AK)return;this.Pf=AK;A.abo([this,this.A7W,this.Ban],0);
},UpdateActiveActionsOrder:function(AK){if(this.Aub===AK)return;this.Aub=AK;A.abo([
this,this.ARN,this.AZC],0);},Akd:function(E){if(this.K&&this.K.Akd)return this.K.
Akd.apply(this,arguments);else return C.DeviceClass.Bab.apply(this,arguments);},
Bab:function(E){},Baw:function(Aq){this.Akd(Aq);},UpdateAutoActions:function(AK){
if(this.AutoActions===AK)return;this.AutoActions=AK;A.abo([this,this.A78,this.Baw
],0);},AGk:function(){if(this.K&&this.K.AGk)return this.K.AGk.apply(this,arguments
);else return C.DeviceClass.Bvg.apply(this,arguments);},Bvg:function(){},Asc:function(
){if(this.K&&this.K.Asc)return this.K.Asc.apply(this,arguments);else return C.DeviceClass.
Bvk.apply(this,arguments);},Bvk:function(){},Ew:function(E){if(this.K&&this.K.Ew
)return this.K.Ew.apply(this,arguments);else return C.DeviceClass.BtM.apply(this
,arguments);},BtM:function(E){},Bvo:function(Aq){this.Ew(Aq);},UpdateAnimalType:
function(Eh){if(this.AnimalType===Eh)return;this.AnimalType=Eh;A.abo([this,this.
PL,this.Bvo],0);},AwK:function(E){if(this.K&&this.K.AwK)return this.K.AwK.apply(
this,arguments);else return C.DeviceClass.BuY.apply(this,arguments);},BuY:function(
E){},BaX:function(Aq){this.AwK(Aq);},UpdateWeightRecordingMode:function(BbK){if(
this.WeightRecordingMode===BbK)return;this.WeightRecordingMode=BbK;A.abo([this,this.
A83,this.BaX],0);},AE_:function(E){if(this.K&&this.K.AE_)return this.K.AE_.apply(
this,arguments);else return C.DeviceClass.Bux.apply(this,arguments);},Bux:function(
E){A.ab5("%s",Ls);},AZM:function(Aq){this.AE_(Aq);},UpdatePredictedTempValue:function(
AK){if(this.AFJ===AK)return;this.AFJ=AK;A.abo([this,this.AR7,this.AZM],0);},SB:function(
L3){if(this.K&&this.K.SB)return this.K.SB.apply(this,arguments);else return C.DeviceClass.
Bvb.apply(this,arguments);},Bvb:function(L3){},AEB:function(E){if(this.K&&this.K.
AEB)return this.K.AEB.apply(this,arguments);else return C.DeviceClass.BtY.apply(
this,arguments);},BtY:function(E){},AIh:function(Aq){this.AEB(Aq);},UpdateDemoMode:
function(AK){if(this.Hy===AK)return;this.Hy=AK;A.abo([this,this.AD6,this.AIh],0);
},AEi:function(E){if(this.K&&this.K.AEi)return this.K.AEi.apply(this,arguments);
else return C.DeviceClass.BtF.apply(this,arguments);},BtF:function(E){},Bar:function(
Aq){this.AEi(Aq);},UpdateAgeRegistration:function(Bbu){if(this.Adz===Bbu)return;
this.Adz=Bbu;A.abo([this,this.A71,this.Bar],0);},AwL:function(E){if(this.K&&this.
K.AwL)return this.K.AwL.apply(this,arguments);else return C.DeviceClass.BuZ.apply(
this,arguments);},BuZ:function(E){},BaY:function(Aq){this.AwL(Aq);},UpdateWeightRecordingScope:
function(Bbz){if(this.WeightRecordingScope===Bbz)return;this.WeightRecordingScope=
Bbz;A.abo([this,this.A84,this.BaY],0);},JJ:function(E){if(this.K&&this.K.JJ)return this.
K.JJ.apply(this,arguments);else return C.DeviceClass.Bt$.apply(this,arguments);}
,Bt$:function(E){},AZH:function(Aq){this.JJ(Aq);},UpdateGender:function(L0){if(this.
Gender===L0)return;this.Gender=L0;A.abo([this,this.Wg,this.AZH],0);},Ars:function(
E){if(this.K&&this.K.Ars)return this.K.Ars.apply(this,arguments);else return C.DeviceClass.
Bub.apply(this,arguments);},Bub:function(E){},Ayg:function(Aq){this.Ars(Aq);},UpdateIDLastUsedMale:
function(Rh){if(this.AqF===Rh)return;this.AqF=Rh;A.abo([this,this.AvN,this.Ayg],
0);},Arr:function(E){if(this.K&&this.K.Arr)return this.K.Arr.apply(this,arguments
);else return C.DeviceClass.Bua.apply(this,arguments);},Bua:function(E){},Ayf:function(
Aq){this.Arr(Aq);},UpdateIDLastUsedFemale:function(Rh){if(this.AqE===Rh)return;this.
AqE=Rh;A.abo([this,this.AvM,this.Ayf],0);},AbN:function(E){if(this.K&&this.K.AbN
)return this.K.AbN.apply(this,arguments);else return C.DeviceClass.BtK.apply(this
,arguments);},BtK:function(E){},AIf:function(Aq){this.AbN(Aq);},UpdateAnimalListContent:
function(AK){if(this.JA===AK)return;this.JA=AK;A.abo([this,this.AD3,this.AIf],0);
},AEk:function(E){if(this.K&&this.K.AEk)return this.K.AEk.apply(this,arguments);
else return C.DeviceClass.BtG.apply(this,arguments);},BtG:function(E){},Bas:function(
Aq){this.AEk(Aq);},UpdateAlarmListAction:function(AK){if(this.ALF===AK)return;this.
ALF=AK;A.abo([this,this.A73,this.Bas],0);},AEE:function(E){if(this.K&&this.K.AEE
)return this.K.AEE.apply(this,arguments);else return C.DeviceClass.Bt6.apply(this
,arguments);},Bt6:function(E){},BaB:function(Aq){this.AEE(Aq);},UpdateFlashLightInMeasureState:
function(Bbp){if(this.Amx===Bbp)return;this.Amx=Bbp;A.abo([this,this.A8d,this.BaB
],0);},AeC:function(E){if(this.K&&this.K.AeC)return this.K.AeC.apply(this,arguments
);else return C.DeviceClass.BtJ.apply(this,arguments);},BtJ:function(E){},AIe:function(
Aq){this.AeC(Aq);},UpdateAnimalInfoContent:function(AK){if(this.D5===AK)return;this.
D5=AK;A.abo([this,this.AD2,this.AIe],0);},AFx:function(E){if(this.K&&this.K.AFx)
return this.K.AFx.apply(this,arguments);else return C.DeviceClass.BuU.apply(this
,arguments);},BuU:function(E){},BaT:function(Aq){this.AFx(Aq);},UpdateWatchListAction:
function(AK){if(this.AU5===AK)return;this.AU5=AK;A.abo([this,this.A8Z,this.BaT],
0);},AEH:function(E){if(this.K&&this.K.AEH)return this.K.AEH.apply(this,arguments
);else return C.DeviceClass.Bt8.apply(this,arguments);},Bt8:function(E){},BaD:function(
Aq){this.AEH(Aq);},UpdateFreshCowListAction:function(AK){if(this.AN9===AK)return;
this.AN9=AK;A.abo([this,this.A8f,this.BaD],0);},ResetActiveActions:function(G){if(
this.K&&this.K.ResetActiveActions)return this.K.ResetActiveActions.apply(this,arguments
);else return C.DeviceClass.Bu5.apply(this,arguments);},Bu5:function(G){},BFh:function(
s){this.ResetActiveActions(s);},ResetAutoActions:function(G){if(this.K&&this.K.ResetAutoActions
)return this.K.ResetAutoActions.apply(this,arguments);else return C.DeviceClass.
Bu7.apply(this,arguments);},Bu7:function(G){},BFj:function(s){this.ResetAutoActions(
s);},AvZ:function(E){if(this.K&&this.K.AvZ)return this.K.AvZ.apply(this,arguments
);else return C.DeviceClass.BtN.apply(this,arguments);},BtN:function(E){},Bau:function(
Aq){this.AvZ(Aq);},ArC:function(E){if(this.K&&this.K.ArC)return this.K.ArC.apply(
this,arguments);else return C.DeviceClass.BuJ.apply(this,arguments);},BuJ:function(
E){},BaO:function(Aq){this.ArC(Aq);},ArD:function(E){if(this.K&&this.K.ArD)return this.
K.ArD.apply(this,arguments);else return C.DeviceClass.BuK.apply(this,arguments);
},BuK:function(E){},BaP:function(Aq){this.ArD(Aq);},ArZ:function(G){if(this.K&&this.
K.ArZ)return this.K.ArZ.apply(this,arguments);else return C.DeviceClass.Bu_.apply(
this,arguments);},Bu_:function(G){},BFm:function(s){this.ArZ(s);},UpdateTemperaturesLowString:
function(AK){if(this.AGs===AK)return;this.AGs=AK;A.abo([this,this.A8Q,this.BaP],
0);},UpdateTemperaturesHighString:function(AK){if(this.AGr===AK)return;this.AGr=
AK;A.abo([this,this.A8P,this.BaO],0);},UpdateAnimalTypesString:function(AK){if(this.
ABa===AK)return;this.ABa=AK;A.abo([this,this.A76,this.Bau],0);},Awf:function(E){
if(this.K&&this.K.Awf)return this.K.Awf.apply(this,arguments);else return C.DeviceClass.
Bt_.apply(this,arguments);},Bt_:function(E){},BaF:function(Aq){this.Awf(Aq);},UpdateFreshCowsHideMeasured:
function(AK){if(this.Aqu===AK)return;this.Aqu=AK;A.abo([this,this.A8h,this.BaF],
0);},Arw:function(E){if(this.K&&this.K.Arw)return this.K.Arw.apply(this,arguments
);else return C.DeviceClass.Bur.apply(this,arguments);},Bur:function(E){},BaK:function(
Aq){this.Arw(Aq);},UpdateNaisIdLastUsedMale:function(W9){if(this.ADQ===W9)return;
this.ADQ=W9;A.abo([this,this.A8x,this.BaK],0);},Arv:function(E){if(this.K&&this.
K.Arv)return this.K.Arv.apply(this,arguments);else return C.DeviceClass.Buq.apply(
this,arguments);},Buq:function(E){},BaJ:function(Aq){this.Arv(Aq);},UpdateNaisIdLastUsedFemale:
function(W9){if(this.ADP===W9)return;this.ADP=W9;A.abo([this,this.A8w,this.BaJ],
0);},Awt:function(E){if(this.K&&this.K.Awt)return this.K.Awt.apply(this,arguments
);else return C.DeviceClass.Buo.apply(this,arguments);},Buo:function(E){},Ayi:function(
Aq){this.Awt(Aq);},UpdateNaisIdIncrementMale:function(Ak6){if(this.ARj===Ak6)return;
this.ARj=Ak6;A.abo([this,this.AvR,this.Ayi],0);},Aws:function(E){if(this.K&&this.
K.Aws)return this.K.Aws.apply(this,arguments);else return C.DeviceClass.Bun.apply(
this,arguments);},Bun:function(E){},Ayh:function(Aq){this.Aws(Aq);},UpdateNaisIdIncrementFemale:
function(Ak6){if(this.ARi===Ak6)return;this.ARi=Ak6;A.abo([this,this.AvQ,this.Ayh
],0);},UpdateFirmware:function(){if(this.K&&this.K.UpdateFirmware)return this.K.
UpdateFirmware.apply(this,arguments);else return C.DeviceClass.Bag.apply(this,arguments
);},Bag:function(){},Anf:function(E){if(this.K&&this.K.Anf)return this.K.Anf.apply(
this,arguments);else return C.DeviceClass.BtS.apply(this,arguments);},BtS:function(
E){},Bax:function(Aq){this.Anf(Aq);},UpdateBootloaderMessage:function(AK){if(this.
Ap8===AK)return;this.Ap8=AK;A.abo([this,this.A7$,this.Bax],0);},AEf:function(E){
if(this.K&&this.K.AEf)return this.K.AEf.apply(this,arguments);else return C.DeviceClass.
BtA.apply(this,arguments);},BtA:function(E){},Bal:function(Aq){this.AEf(Aq);},UpdateActionListAction:
function(AK){if(this.AA6===AK)return;this.AA6=AK;A.abo([this,this.A7U,this.Bal],
0);},AvX:function(E){if(this.K&&this.K.AvX)return this.K.AvX.apply(this,arguments
);else return C.DeviceClass.BtB.apply(this,arguments);},BtB:function(E){},Bam:function(
Aq){this.AvX(Aq);},UpdateActionListHideMeasured:function(AK){if(this.ApX===AK)return;
this.ApX=AK;A.abo([this,this.A7V,this.Bam],0);},Ub:function(E){if(this.K&&this.K.
Ub)return this.K.Ub.apply(this,arguments);else return C.DeviceClass.BtI.apply(this
,arguments);},BtI:function(E){},Aog:function(Aq){this.Ub(Aq);},UpdateAnimalIdGenerationMethod:
function(BbP){if(this.Ia===BbP)return;this.Ia=BbP;A.abo([this,this.Am9,this.Aog]
,0);},Av_:function(E){if(this.K&&this.K.Av_)return this.K.Av_.apply(this,arguments
);else return C.DeviceClass.Bt0.apply(this,arguments);},Bt0:function(E){},AZF:function(
Aq){this.Av_(Aq);},UpdateDirectionOfCountingFemale:function(Ak0){if(this.AB4===Ak0
)return;this.AB4=Ak0;A.abo([this,this.ARU,this.AZF],0);},Av$:function(E){if(this.
K&&this.K.Av$)return this.K.Av$.apply(this,arguments);else return C.DeviceClass.
Bt1.apply(this,arguments);},Bt1:function(E){},AZG:function(Aq){this.Av$(Aq);},UpdateDirectionOfCountingMale:
function(Ak0){if(this.AB5===Ak0)return;this.AB5=Ak0;A.abo([this,this.ARV,this.AZG
],0);},Awa:function(E){if(this.K&&this.K.Awa)return this.K.Awa.apply(this,arguments
);else return C.DeviceClass.Bt2.apply(this,arguments);},Bt2:function(E){},AIi:function(
Aq){this.Awa(Aq);},UpdateDirectionOfCountingUnisex:function(Ak0){if(this.AuD===Ak0
)return;this.AuD=Ak0;A.abo([this,this.AD7,this.AIi],0);},Art:function(E){if(this.
K&&this.K.Art)return this.K.Art.apply(this,arguments);else return C.DeviceClass.
Buc.apply(this,arguments);},Buc:function(E){},Aoh:function(Aq){this.Art(Aq);},UpdateIDLastUsedUnisex:
function(Rh){if(this.AjI===Rh)return;this.AjI=Rh;A.abo([this,this.Ana,this.Aoh],
0);},Arx:function(E){if(this.K&&this.K.Arx)return this.K.Arx.apply(this,arguments
);else return C.DeviceClass.Bus.apply(this,arguments);},Bus:function(E){},AZK:function(
Aq){this.Arx(Aq);},UpdateNaisIdLastUsedUnisex:function(W9){if(this.AvA===W9)return;
this.AvA=W9;A.abo([this,this.AR3,this.AZK],0);},Awu:function(E){if(this.K&&this.
K.Awu)return this.K.Awu.apply(this,arguments);else return C.DeviceClass.Bup.apply(
this,arguments);},Bup:function(E){},Ayj:function(Aq){this.Awu(Aq);},UpdateNaisIdIncrementUnisex:
function(Ak6){if(this.ARk===Ak6)return;this.ARk=Ak6;A.abo([this,this.AvS,this.Ayj
],0);},Akf:function(E){if(this.K&&this.K.Akf)return this.K.Akf.apply(this,arguments
);else return C.DeviceClass.Bt4.apply(this,arguments);},Bt4:function(E){},Aye:function(
Aq){this.Akf(Aq);},UpdateEartagNrAssignmentMode:function(Ak1){if(this.EartagNrAssignmentMode===
Ak1)return;this.EartagNrAssignmentMode=Ak1;A.abo([this,this.AvL,this.Aye],0);},NU:
function(E){if(this.K&&this.K.NU)return this.K.NU.apply(this,arguments);else return C.
DeviceClass.BtU.apply(this,arguments);},BtU:function(E){},Bvr:function(Aq){this.
NU(Aq);},UpdateBreed:function(AcI){if(this.Breed===AcI)return;this.Breed=AcI;A.abo([
this,this.AvH,this.Bvr],0);},AE1:function(E){if(this.K&&this.K.AE1)return this.K.
AE1.apply(this,arguments);else return C.DeviceClass.Buk.apply(this,arguments);},
Buk:function(E){},Bvu:function(Aq){this.AE1(Aq);},UpdateMiddlewareVersions:function(
P9,A0s,A0t,A0z,A0g){this.Sq.OnSetTimestamp(P9);this.Sq.AEW(A0s);this.Sq.AE3(A0t);
this.Sq.AFb(A0z);this.Sq.AEz(A0g);A.abo([this,this.Bkf,this.Bvu],0);},AEV:function(
E){if(this.K&&this.K.AEV)return this.K.AEV.apply(this,arguments);else return C.DeviceClass.
Bue.apply(this,arguments);},Bue:function(E){},Bvt:function(Aq){this.AEV(Aq);},UpdateMainboardVersions:
function(P9,A0q,A0r,A0p,A0F,A0G,A0E){this.QS.OnSetTimestamp(P9);this.QS.AET(A0q);
this.QS.AEU(A0r);this.QS.AES(A0p);this.QS.AFp(A0F);this.QS.AFq(A0G);this.QS.AFo(
A0E);A.abo([this,this.Bkd,this.Bvt],0);},AFr:function(E){if(this.K&&this.K.AFr)return this.
K.AFr.apply(this,arguments);else return C.DeviceClass.BuM.apply(this,arguments);
},BuM:function(E){},BvA:function(Aq){this.AFr(Aq);},UpdateTorchboardVersions:function(
P9,A0q,A0r,A0p,A0F,A0G,A0E){this.SN.OnSetTimestamp(P9);this.SN.AET(A0q);this.SN.
AEU(A0r);this.SN.AES(A0p);this.SN.AFp(A0F);this.SN.AFq(A0G);this.SN.AFo(A0E);A.abo([
this,this.BkB,this.BvA],0);},AEp:function(E){if(this.K&&this.K.AEp)return this.K.
AEp.apply(this,arguments);else return C.DeviceClass.BtT.apply(this,arguments);},
BtT:function(E){},Bvq:function(Aq){this.AEp(Aq);},UpdateBootloaderVersions:function(
P9,A0s,A0t,A0z,A0g){this.RQ.OnSetTimestamp(P9);this.RQ.AEW(A0s);this.RQ.AE3(A0t);
this.RQ.AFb(A0z);this.RQ.AEz(A0g);A.abo([this,this.BjO,this.Bvq],0);},AEC:function(
E){if(this.K&&this.K.AEC)return this.K.AEC.apply(this,arguments);else return C.DeviceClass.
Bt3.apply(this,arguments);},Bt3:function(E){},BaA:function(Aq){this.AEC(Aq);},UpdateDryCowListAction:
function(AK){if(this.ANt===AK)return;this.ANt=AK;A.abo([this,this.A8b,this.BaA],
0);},AI_:function(A0i){if(this.K&&this.K.AI_)return this.K.AI_.apply(this,arguments
);else return C.DeviceClass.BvM.apply(this,arguments);},BvM:function(A0i){return false;
},AEo:function(E){if(this.K&&this.K.AEo)return this.K.AEo.apply(this,arguments);
else return C.DeviceClass.BtR.apply(this,arguments);},BtR:function(E){},AIg:function(
Aq){this.AEo(Aq);},UpdateBirthListView:function(AK){if(this.Ap6===AK)return;this.
Ap6=AK;A.abo([this,this.AD4,this.AIg],0);},BatchResetBirthNoticePending:function(
){var B_=A._NewObject(C.Animal,0);var P;var AiK=0;var Ac3=A._GetAutoObject(C.Device
).Ao.Filter;var Be=A._GetAutoObject(C.Helper).AOc();A._GetAutoObject(C.Device).Ao.
Bl(Be);for(P=0;P<A._GetAutoObject(C.Device).Ao.Cd();P++){B_.EG(P,A._GetAutoObject(
C.Device).Ao);B_.AeL(false);B_.Cn(A._GetAutoObject(C.Device).Ao);AiK++;}A._GetAutoObject(
C.Device).Ao.Bl(Ac3);return AiK;},UpdateTransferProgress:function(AK){if(this.Axj===
AK)return;this.Axj=AK;A.abo([this,this.ASe,this.AZT],0);},AFs:function(E){if(this.
K&&this.K.AFs)return this.K.AFs.apply(this,arguments);else return C.DeviceClass.
BuN.apply(this,arguments);},BuN:function(E){A.ab5("%s",P1);},AZT:function(Aq){this.
AFs(Aq);},UpdateTransferTarget:function(AK){if(this.Ae$===AK)return;this.Ae$=AK;
A.abo([this,this.A8T,this.BaQ],0);},ArE:function(E){if(this.K&&this.K.ArE)return this.
K.ArE.apply(this,arguments);else return C.DeviceClass.BuO.apply(this,arguments);
},BuO:function(E){A.ab5("%s",Ks);},BaQ:function(Aq){this.ArE(Aq);},Asb:function(
){if(this.K&&this.K.Asb)return this.K.Asb.apply(this,arguments);else return C.DeviceClass.
Bvj.apply(this,arguments);},Bvj:function(){},Awy:function(E){if(this.K&&this.K.Awy
)return this.K.Awy.apply(this,arguments);else return C.DeviceClass.Buy.apply(this
,arguments);},Buy:function(E){},AZN:function(Aq){this.Awy(Aq);},UpdatePremisesID:
function(Rh){if(this.Un===Rh)return;this.Un=Rh;A.abo([this,this.AR8,this.AZN],0);
},Awr:function(E){if(this.K&&this.K.Awr)return this.K.Awr.apply(this,arguments);
else return C.DeviceClass.Bum.apply(this,arguments);},Bum:function(E){},AIl:function(
Aq){this.Awr(Aq);},UpdateMotherSelectionDriedOffFilter:function(AK){if(this.AbE===
AK)return;this.AbE=AK;A.abo([this,this.AD$,this.AIl],0);},AEI:function(E){if(this.
K&&this.K.AEI)return this.K.AEI.apply(this,arguments);else return C.DeviceClass.
Bt9.apply(this,arguments);},Bt9:function(E){},BaE:function(Aq){this.AEI(Aq);},UpdateFreshCowSpan:
function(AK){if(this.Aqt===AK)return;this.Aqt=AK;A.abo([this,this.A8g,this.BaE],
0);},UpdateUSBState:function(BbH){if(this.AhC===BbH)return;this.AhC=BbH;A.abo([this
,this.Wh,this.W2],0);},AFt:function(E){if(this.K&&this.K.AFt)return this.K.AFt.apply(
this,arguments);else return C.DeviceClass.BuQ.apply(this,arguments);},BuQ:function(
E){A.ab5("%s",EY);},W2:function(Aq){this.AFt(Aq);},AnD:function(AhP){if(this.K&&
this.K.AnD)return this.K.AnD.apply(this,arguments);else return C.DeviceClass.Bvd.
apply(this,arguments);},Bvd:function(AhP){return A._NewObject(C.Ajs,0);},AqR:function(
){if(this.K&&this.K.AqR)return this.K.AqR.apply(this,arguments);else return C.DeviceClass.
Btz.apply(this,arguments);},Btz:function(){return false;},Aqf:function(Nj){if(this.
K&&this.K.Aqf)return this.K.Aqf.apply(this,arguments);else return C.DeviceClass.
Btu.apply(this,arguments);},Btu:function(Nj){},AFe:function(E){if(this.K&&this.K.
AFe)return this.K.AFe.apply(this,arguments);else return C.DeviceClass.BuD.apply(
this,arguments);},BuD:function(E){},Bvx:function(Aq){this.AFe(Aq);},UpdateSerialNumber:
function(AK){if(this.Ahr===AK)return;this.Ahr=AK;A.abo([this,this.Bkq,this.Bvx],
0);},AvY:function(E){if(this.K&&this.K.AvY)return this.K.AvY.apply(this,arguments
);else return C.DeviceClass.BtH.apply(this,arguments);},BtH:function(E){},AZD:function(
Aq){this.AvY(Aq);},UpdateAnimalIdAutoGenerationMethod:function(BbO){if(this.Agh===
BbO)return;this.Agh=BbO;A.abo([this,this.ARO,this.AZD],0);},ABQ:function(){return false;
},AFY:function(){return false;},AFg:function(E){if(this.K&&this.K.AFg)return this.
K.AFg.apply(this,arguments);else return C.DeviceClass.BuE.apply(this,arguments);
},BuE:function(E){},BaN:function(Aq){this.AFg(Aq);},UpdateShutdownTimer:function(
AK){if(this.AUi===AK)return;this.AUi=AK;A.abo([this,this.A8M,this.BaN],0);},Ari:
function(E){if(this.K&&this.K.Ari)return this.K.Ari.apply(this,arguments);else return C.
DeviceClass.BtL.apply(this,arguments);},BtL:function(E){},Bat:function(Aq){this.
Ari(Aq);},UpdateAnimalListInfoItemMode:function(AK){if(this.Al$===AK)return;this.
Al$=AK;A.abo([this,this.A74,this.Bat],0);},Ar0:function(G){if(this.K&&this.K.Ar0
)return this.K.Ar0.apply(this,arguments);else return C.DeviceClass.Bu$.apply(this
,arguments);},Bu$:function(G){},BFn:function(s){this.Ar0(s);},ArH:function(E){if(
this.K&&this.K.ArH)return this.K.ArH.apply(this,arguments);else return C.DeviceClass.
BuW.apply(this,arguments);},BuW:function(E){},BaV:function(Aq){this.ArH(Aq);},ArI:
function(E){if(this.K&&this.K.ArI)return this.K.ArI.apply(this,arguments);else return C.
DeviceClass.BuX.apply(this,arguments);},BuX:function(E){},BaW:function(Aq){this.
ArI(Aq);},UpdateWeightGainsLowString:function(AK){if(this.AGO===AK)return;this.AGO=
AK;A.abo([this,this.A82,this.BaW],0);},UpdateWeightGainsHighString:function(AK){
if(this.AGN===AK)return;this.AGN=AK;A.abo([this,this.A81,this.BaV],0);},Av0:function(
E){if(this.K&&this.K.Av0)return this.K.Av0.apply(this,arguments);else return C.DeviceClass.
BtO.apply(this,arguments);},BtO:function(E){},Bav:function(Aq){this.Av0(Aq);},UpdateAnimalTypesWeightGainsString:
function(AK){if(this.ABb===AK)return;this.ABb=AK;A.abo([this,this.A77,this.Bav],
0);},ArG:function(E){if(this.K&&this.K.ArG)return this.K.ArG.apply(this,arguments
);else return C.DeviceClass.BuV.apply(this,arguments);},BuV:function(E){},BaU:function(
Aq){this.ArG(Aq);},ArJ:function(E){if(this.K&&this.K.ArJ)return this.K.ArJ.apply(
this,arguments);else return C.DeviceClass.Bu1.apply(this,arguments);},Bu1:function(
E){},BaZ:function(Aq){this.ArJ(Aq);},UpdateWeightValueBirthString:function(AK){if(
this.AGR===AK)return;this.AGR=AK;A.abo([this,this.A85,this.BaZ],0);},UpdateWeightGainsAverageString:
function(AK){if(this.AGM===AK)return;this.AGM=AK;A.abo([this,this.A80,this.BaU],
0);},Awb:function(E){if(this.K&&this.K.Awb)return this.K.Awb.apply(this,arguments
);else return C.DeviceClass.Bt5.apply(this,arguments);},Bt5:function(E){},Bvs:function(
Aq){this.Awb(Aq);},UpdateEvaluationAnimalType:function(Eh){if(this.ACa===Eh)return;
this.ACa=Eh;A.abo([this,this.BjY,this.Bvs],0);},UpdateStartScreen:function(AK){if(
this.Axb===AK)return;this.Axb=AK;A.abo([this,this.Bkr,this.Bvy],0);},AwC:function(
E){if(this.K&&this.K.AwC)return this.K.AwC.apply(this,arguments);else return C.DeviceClass.
BuF.apply(this,arguments);},BuF:function(E){},Bvy:function(Aq){this.AwC(Aq);},ADp:
function(){if(this.K&&this.K.ADp)return this.K.ADp.apply(this,arguments);else return C.
DeviceClass.Btx.apply(this,arguments);},Btx:function(){return 1;},ADq:function(){
if(this.K&&this.K.ADq)return this.K.ADq.apply(this,arguments);else return C.DeviceClass.
Bty.apply(this,arguments);},Bty:function(){return 1;},GetCommitCount:function(){
return 2021;},GetCommitEpoch:function(){return 1709636410;},GetCommitHash:function(
){return A.kR.BgW;},GetVersionMajor:function(){return 0;},GetVersionMinor:function(
){return 9;},GetVersionRev:function(){return 9;},AE0:function(E){if(this.K&&this.
K.AE0)return this.K.AE0.apply(this,arguments);else return C.DeviceClass.Bui.apply(
this,arguments);},Bui:function(E){},BaI:function(Aq){this.AE0(Aq);},UpdateMaximumAgeNewOnFarm:
function(AK){if(this.ADI===AK)return;this.ADI=AK;A.abo([this,this.A8v,this.BaI],
0);},AwI:function(E){if(this.K&&this.K.AwI)return this.K.AwI.apply(this,arguments
);else return C.DeviceClass.BuP.apply(this,arguments);},BuP:function(E){},AZU:function(
Aq){this.AwI(Aq);},UpdateTransponderAssignmentIdChangeMethod:function(BbE){if(this.
AhB===BbE)return;this.AhB=BbE;A.abo([this,this.ASf,this.AZU],0);},BatchResetPurchasedNoticePending:
function(){var B_=A._NewObject(C.Animal,0);var P;var AiK=0;var Ac3=A._GetAutoObject(
C.Device).Ao.Filter;var Be=A._GetAutoObject(C.Helper).AOn();A._GetAutoObject(C.Device
).Ao.Bl(Be);for(P=0;P<A._GetAutoObject(C.Device).Ao.Cd();P++){B_.EG(P,A._GetAutoObject(
C.Device).Ao);B_.AeL(false);B_.Cn(A._GetAutoObject(C.Device).Ao);AiK++;}A._GetAutoObject(
C.Device).Ao.Bl(Ac3);return AiK;},AEA:function(E){if(this.K&&this.K.AEA)return this.
K.AEA.apply(this,arguments);else return C.DeviceClass.BtX.apply(this,arguments);
},BtX:function(E){},AZE:function(Aq){this.AEA(Aq);},UpdateDataExportDestination:
function(AK){if(this.Vz===AK)return;this.Vz=AK;A.abo([this,this.ART,this.AZE],0);
},Bmk:function(E){},UpdateMassRecordingAutomatic:function(AK){if(this.AQ7===AK)return;
this.AQ7=AK;A.abo([this,this.Bke,this.Bmk],0);},Nc:function(E){if(this.K&&this.K.
Nc)return this.K.Nc.apply(this,arguments);else return C.DeviceClass.Bu2.apply(this
,arguments);},Bu2:function(E){},BvB:function(Aq){this.Nc(Aq);},UpdateWhereAbouts:
function(Afw){if(this.WhereAbouts===Afw)return;this.WhereAbouts=Afw;A.abo([this,
this.AvV,this.BvB],0);},Arf:function(E){if(this.K&&this.K.Arf)return this.K.Arf.
apply(this,arguments);else return C.DeviceClass.BtC.apply(this,arguments);},BtC:
function(E){},Bao:function(Aq){this.Arf(Aq);},Arg:function(E){if(this.K&&this.K.
Arg)return this.K.Arg.apply(this,arguments);else return C.DeviceClass.BtD.apply(
this,arguments);},BtD:function(E){},Bap:function(Aq){this.Arg(Aq);},UpdateActiveMassRecordingFields:
function(AK){if(this.AA7===AK)return;this.AA7=AK;A.abo([this,this.A7X,this.Bao],
0);},UpdateActiveMassRecordingFieldsOrder:function(AK){if(this.AA8===AK)return;this.
AA8=AK;A.abo([this,this.A7Y,this.Bap],0);},ArX:function(G){if(this.K&&this.K.ArX
)return this.K.ArX.apply(this,arguments);else return C.DeviceClass.Bu6.apply(this
,arguments);},Bu6:function(G){},BFi:function(s){this.ArX(s);},AEY:function(E){if(
this.K&&this.K.AEY)return this.K.AEY.apply(this,arguments);else return C.DeviceClass.
Buf.apply(this,arguments);},Buf:function(E){},AIj:function(Aq){this.AEY(Aq);},UpdateMassRecordingDateOfBirthMandatory:
function(AK){if(this.Aes===AK)return;this.Aes=AK;A.abo([this,this.AD8,this.AIj],
0);},AEX:function(E){this.UpdateMassRecordingCounter(E);},UpdateMassRecordingCounter:
function(AK){if(this.Avw===AK)return;this.Avw=AK;A.abo([this,this.A8t,this.AEX],
0);},Ajn:function(){if(this.K&&this.K.Ajn)return this.K.Ajn.apply(this,arguments
);else return C.DeviceClass.Bts.apply(this,arguments);},Bts:function(){return false;
},Ap4:function(){if(this.K&&this.K.Ap4)return this.K.Ap4.apply(this,arguments);else
return C.DeviceClass.Btr.apply(this,arguments);},Btr:function(){return false;},Ap3:
function(){if(this.K&&this.K.Ap3)return this.K.Ap3.apply(this,arguments);else return C.
DeviceClass.Btq.apply(this,arguments);},Btq:function(){return false;},Auq:function(
){if(this.K&&this.K.Auq)return this.K.Auq.apply(this,arguments);else return C.DeviceClass.
Btt.apply(this,arguments);},Btt:function(){return false;},Awo:function(E){if(this.
K&&this.K.Awo)return this.K.Awo.apply(this,arguments);else return C.DeviceClass.
Buh.apply(this,arguments);},Buh:function(E){},BaH:function(Aq){this.Awo(Aq);},UpdateMaxWeightValuePrecision:
function(AK){if(this.OJ===AK)return;this.OJ=AK;A.abo([this,this.A8u,this.BaH],0);
},Awv:function(E){if(this.K&&this.K.Awv)return this.K.Awv.apply(this,arguments);
else return C.DeviceClass.But.apply(this,arguments);},But:function(E){},BaL:function(
Aq){this.Awv(Aq);},UpdateNoNaisIdListActions:function(AK){if(this.NoNaisIdListActions===
AK)return;this.NoNaisIdListActions=AK;A.abo([this,this.A8y,this.BaL],0);},ResetNoNaisIdListActions:
function(G){if(this.K&&this.K.ResetNoNaisIdListActions)return this.K.ResetNoNaisIdListActions.
apply(this,arguments);else return C.DeviceClass.Bu8.apply(this,arguments);},Bu8:
function(G){},BFk:function(s){this.ResetNoNaisIdListActions(s);},Aww:function(E){
if(this.K&&this.K.Aww)return this.K.Aww.apply(this,arguments);else return C.DeviceClass.
Buu.apply(this,arguments);},Buu:function(E){},BaM:function(Aq){this.Aww(Aq);},UpdateNoTransponderListActions:
function(AK){if(this.NoTransponderListActions===AK)return;this.NoTransponderListActions=
AK;A.abo([this,this.A8z,this.BaM],0);},ResetNoTransponderListActions:function(G){
if(this.K&&this.K.ResetNoTransponderListActions)return this.K.ResetNoTransponderListActions.
apply(this,arguments);else return C.DeviceClass.Bu9.apply(this,arguments);},Bu9:
function(G){},BFl:function(s){this.ResetNoTransponderListActions(s);},AwN:function(
E){if(this.K&&this.K.AwN)return this.K.AwN.apply(this,arguments);else return C.DeviceClass.
Bu3.apply(this,arguments);},Bu3:function(E){},Ba0:function(Aq){this.AwN(Aq);},UpdateYoungNoTransponderListActions:
function(AK){if(this.YoungNoTransponderListActions===AK)return;this.YoungNoTransponderListActions=
AK;A.abo([this,this.A87,this.Ba0],0);},ResetYoungNoTransponderListActions:function(
G){if(this.K&&this.K.ResetYoungNoTransponderListActions)return this.K.ResetYoungNoTransponderListActions.
apply(this,arguments);else return C.DeviceClass.Bva.apply(this,arguments);},Bva:
function(G){},BFo:function(s){this.ResetYoungNoTransponderListActions(s);},AD1:function(
){return this.KD;},AvF:function(){return this.AaM;},AvI:function(){return this.Amj;
},AR$:function(){return this.ScanState;},AD9:function(){return this.MeasureState;
},AEa:function(){return this.Ko;},A8p:function(){return this.Language;},Aq$:function(
){return this.TemperatureUnit;},A8a:function(){return this.AMw;},AR2:function(){
return this.ADO;},AvU:function(){return this.OverlayMenu;},A8U:function(){return this.
ZI;},ASb:function(){return this.SyncState;},A8V:function(){return this.Ask;},AEb:
function(){return this.AU3;},AR_:function(){return this.RatingMode;},Aq8:function(
){return this.Amy;},ASd:function(){return this.AUM;},Bkk:function(){return this.
ATw;},BjL:function(){return this.AutoRegistrationMode;},ASa:function(){return this.
OP;},AbK:function(){return this.A0;},AbL:function(){return this.AF;},AEc:function(
){return this.KU;},AR1:function(){return this.MassUnit;},A7W:function(){return this.
Pf;},ARN:function(){return this.Aub;},A78:function(){return this.AutoActions;},PL:
function(){return this.AnimalType;},A83:function(){return this.WeightRecordingMode;
},AR7:function(){return this.AFJ;},AD6:function(){return this.Hy;},A71:function(
){return this.Adz;},A84:function(){return this.WeightRecordingScope;},Wg:function(
){return this.Gender;},AvN:function(){return this.AqF;},AvM:function(){return this.
AqE;},AD3:function(){return this.JA;},A73:function(){return this.ALF;},A8d:function(
){return this.Amx;},AD2:function(){return this.D5;},A8Z:function(){return this.AU5;
},A8f:function(){return this.AN9;},A76:function(){return this.ABa;},A8P:function(
){return this.AGr;},A8Q:function(){return this.AGs;},A8h:function(){return this.
Aqu;},A8x:function(){return this.ADQ;},A8w:function(){return this.ADP;},AvR:function(
){return this.ARj;},AvQ:function(){return this.ARi;},A7$:function(){return this.
Ap8;},A7U:function(){return this.AA6;},A7V:function(){return this.ApX;},Am9:function(
){return this.Ia;},ARU:function(){return this.AB4;},ARV:function(){return this.AB5;
},AD7:function(){return this.AuD;},Ana:function(){return this.AjI;},AR3:function(
){return this.AvA;},AvS:function(){return this.ARk;},AvL:function(){return this.
EartagNrAssignmentMode;},AvH:function(){return this.Breed;},Bkf:function(){return this.
Sq;},Bkd:function(){return this.QS;},BkB:function(){return this.SN;},BjO:function(
){return this.RQ;},A8b:function(){return this.ANt;},AD4:function(){return this.Ap6;
},ASe:function(){return this.Axj;},A8T:function(){return this.Ae$;},AR8:function(
){return this.Un;},AD$:function(){return this.AbE;},A8g:function(){return this.Aqt;
},Wh:function(){return this.AhC;},Bkq:function(){return this.Ahr;},ARO:function(
){return this.Agh;},A8M:function(){return this.AUi;},A74:function(){return this.
Al$;},A81:function(){return this.AGN;},A82:function(){return this.AGO;},A77:function(
){return this.ABb;},A80:function(){return this.AGM;},A85:function(){return this.
AGR;},BjY:function(){return this.ACa;},Bkr:function(){return this.Axb;},A8v:function(
){return this.ADI;},ASf:function(){return this.AhB;},ART:function(){return this.
Vz;},Bke:function(){return this.AQ7;},AvV:function(){return this.WhereAbouts;},A7X:
function(){return this.AA7;},A7Y:function(){return this.AA8;},AD8:function(){return this.
Aes;},A8t:function(){return this.Avw;},A8u:function(){return this.OJ;},A8y:function(
){return this.NoNaisIdListActions;},A8z:function(){return this.NoTransponderListActions;
},A87:function(){return this.YoungNoTransponderListActions;},_Init:function(aArg
){C.Table._Init.call(this.Ao={I:this},0);C.Table._Init.call(this.Bu={I:this},0);
C.Table._Init.call(this.Agf={I:this},0);A.Core.A_7._Init.call(this.Anv={I:this},
0);C.Table._Init.call(this.Pk={I:this},0);this.__proto__=C.DeviceClass;this.Ao.OnSetId(
0);this.Bu.OnSetId(1);this.Agf.OnSetId(3);this.Pk.OnSetId(4);this.OP=A._NewObject(
C.Transponder,0);this.Sq=A._NewObject(C.Aw$,0);this.QS=A._NewObject(C.Au5,0);this.
SN=A._NewObject(C.Au5,0);this.RQ=A._NewObject(C.Aw$,0);var Lu=this._variants();if(
Lu){this.K={};Lu._Init.call(this,aArg);}A.h7++;},_Done:function(){if(this.K)this.
K._Done.call(this);this.__proto__=null;this.Ao._Done();this.Bu._Done();this.Agf.
_Done();this.Anv._Done();this.Pk._Done();A.h7--;},_ReInit:function(){this.Ao._ReInit(
);this.Bu._ReInit();this.Agf._ReInit();this.Anv._ReInit();this.Pk._ReInit();if(this.
K)this.K._ReInit.call(this);},_Mark:function(D){var B;if((B=this.OP)&&(B._cycle!=
D))B._Mark(B._cycle=D);if((B=this.Sq)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.
QS)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.SN)&&(B._cycle!=D))B._Mark(B._cycle=
D);if((B=this.RQ)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Ao)._cycle!=D)B.
_Mark(B._cycle=D);if((B=this.Bu)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Agf)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.Anv)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
Pk)._cycle!=D)B._Mark(B._cycle=D);if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=
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
A5:A.jV,Aa3:function(){var Au=A._NewObject(C.StringFilterCriterion,0);Au.Fc(this
);return Au;},Fc:function(AH){C.FilterCriterion.Fc.call(this,AH);var Au=(C.StringFilterCriterion.
isPrototypeOf(AH)?AH:null);if(!!Au)this.A5=Au.A5;},_Init:function(aArg){C.FilterCriterion.
_Init.call(this,aArg);this.__proto__=C.StringFilterCriterion;},_className:"Device::StringFilterCriterion"
};C.Table={CE:function(Ad,A4){if(this.K&&this.K.CE)return this.K.CE.apply(this,arguments
);else return C.ITable.CE.apply(this,arguments);},VG:function(Ad,A4){if(this.K&&
this.K.VG)return this.K.VG.apply(this,arguments);else return C.ITable.VG.apply(this
,arguments);},HX:function(Ad,A4){if(this.K&&this.K.HX)return this.K.HX.apply(this
,arguments);else return C.ITable.HX.apply(this,arguments);},OnSetId:function(E){
if(this.K&&this.K.OnSetId)return this.K.OnSetId.apply(this,arguments);else return C.
ITable.OnSetId.apply(this,arguments);},Cd:function(){if(this.K&&this.K.Cd)return this.
K.Cd.apply(this,arguments);else return C.ITable.Cd.apply(this,arguments);},Bl:function(
E){if(this.K&&this.K.Bl)return this.K.Bl.apply(this,arguments);else return C.ITable.
Bl.apply(this,arguments);},VH:function(Ad,A4){if(this.K&&this.K.VH)return this.K.
VH.apply(this,arguments);else return C.ITable.VH.apply(this,arguments);},Sb:function(
Ad,A4){if(this.K&&this.K.Sb)return this.K.Sb.apply(this,arguments);else return C.
ITable.Sb.apply(this,arguments);},Oy:function(){if(this.K&&this.K.Oy)return this.
K.Oy.apply(this,arguments);else return C.ITable.Oy.apply(this,arguments);},OA:function(
Aov){if(this.K&&this.K.OA)return this.K.OA.apply(this,arguments);else return C.ITable.
OA.apply(this,arguments);},Yp:function(){if(this.K&&this.K.Yp)return this.K.Yp.apply(
this,arguments);else return C.ITable.Yp.apply(this,arguments);},Zq:function(Ad,A4
,C0){if(this.K&&this.K.Zq)return this.K.Zq.apply(this,arguments);else return C.ITable.
Zq.apply(this,arguments);},Hf:function(Ad,A4,C0){if(this.K&&this.K.Hf)return this.
K.Hf.apply(this,arguments);else return C.ITable.Hf.apply(this,arguments);},Zp:function(
Ad,A4,C0){if(this.K&&this.K.Zp)return this.K.Zp.apply(this,arguments);else return C.
ITable.Zp.apply(this,arguments);},My:function(Ad,A4,C0){if(this.K&&this.K.My)return this.
K.My.apply(this,arguments);else return C.ITable.My.apply(this,arguments);},Zo:function(
Ad,A4,C0){if(this.K&&this.K.Zo)return this.K.Zo.apply(this,arguments);else return C.
ITable.Zo.apply(this,arguments);},La:function(aColumn,A6){if(this.K&&this.K.La)return this.
K.La.apply(this,arguments);else return C.ITable.La.apply(this,arguments);},KJ:function(
Ad,A4){if(this.K&&this.K.KJ)return this.K.KJ.apply(this,arguments);else return C.
ITable.KJ.apply(this,arguments);},SC:function(Ad,A4,C0){if(this.K&&this.K.SC)return this.
K.SC.apply(this,arguments);else return C.ITable.SC.apply(this,arguments);},AgF:function(
aColumn,A6){if(this.K&&this.K.AgF)return this.K.AgF.apply(this,arguments);else return C.
ITable.AgF.apply(this,arguments);},He:function(){if(this.K&&this.K.He)return this.
K.He.apply(this,arguments);else return C.ITable.He.apply(this,arguments);},Ajx:function(
aColumn,A6){if(this.K&&this.K.Ajx)return this.K.Ajx.apply(this,arguments);else return C.
ITable.Ajx.apply(this,arguments);},Ad2:function(aColumn,A6){if(this.K&&this.K.Ad2
)return this.K.Ad2.apply(this,arguments);else return C.ITable.Ad2.apply(this,arguments
);},HC:function(){if(this.K&&this.K.HC)return this.K.HC.apply(this,arguments);else
return C.ITable.HC.apply(this,arguments);},Aa$:function(){if(this.K&&this.K.Aa$)
return this.K.Aa$.apply(this,arguments);else return C.ITable.Aa$.apply(this,arguments
);},QB:function(){if(this.K&&this.K.QB)return this.K.QB.apply(this,arguments);else
return C.ITable.QB.apply(this,arguments);},_Init:function(aArg){C.ITable._Init.call(
this,aArg);this.__proto__=C.Table;var Lu=this._variants();if(Lu){this.K={};Lu._Init.
call(this,aArg);}},_Done:function(){if(this.K)this.K._Done.call(this);this.__proto__=
C.ITable;C.ITable._Done.call(this);},_ReInit:function(){C.ITable._ReInit.call(this
);if(this.K)this.K._ReInit.call(this);},_Mark:function(D){C.ITable._Mark.call(this
,D);if(this.K)this.K._Mark(D);},_variants:function(){return A.acr.Table._variants(
);},K:null,_className:"Device::Table"};C.TableId={Animal:0,Rating:1,Undefined:2,
AnimalGroup:3,CalfDeregistrations:4};C.ScanState={Idle:0,Progress:1,IdScanned:2,
NotFound:3,Error:4,LAST:5};C.RatedAttribute={None:0,Feed:1,Appearance:2,Respiratory:
3,Faeces:4};C.ConverterClass={M0:null,AkJ:function(Aot){var Bcl;var AtZ=this.AUB(
Aot/100,0,A._GetAutoObject(C.Device).TemperatureUnit);Bcl=A.abk(AtZ,0,1);return Bcl;
},A$d:function(Nh){if(Nh<=0)return 0;else if(Nh<=1)return 5;else if(Nh<=2)return 3;
else if(Nh<=4)return 2;else if(Nh<=6)return 1;else if(Nh<=8)return 4;else return 0;
},AdH:function(Nh){var a=0;switch(Nh){case 3:a=2;break;case 2:a=4;break;case 1:a=
6;break;case 0:a=0;break;case 4:a=8;break;case 5:a=1;break;default:A.ab5("%s",N$
);}return a;},Asd:function(Eh,Rl){var Nk=A._GetAutoObject(C.Converter).Aja(Rl,Eh
);switch(Nk){case 3:return 1;case 2:return 2;case 1:return 3;case 0:return 4;default:
throw new Error(P2+Nk.toFixed());}},Ahz:function(){var B;var D4=A._NewObject(A.Core.
Bw,0).Initialize(A._GetAutoObject(C.Helper).Dw());D4.Anj(0);D4.Anm(0);D4.Anp(0);
return((B=(D4.JI()|0))<0)?B+0x100000000:B;},Bg0:function(AsX){var Dl;switch(AsX){
case 36:Dl=ME;break;case 40:Dl=SY;break;case 56:Dl=UJ;break;case 70:Dl=ZM;break;
case 100:Dl=WN;break;case 124:Dl=IJ;break;case 156:Dl=UK;break;case 158:Dl=ZN;break;
case 191:Dl=WO;break;case 196:Dl=ZO;break;case 203:Dl=WQ;break;case 208:Dl=ZP;break;
case 233:Dl=ZQ;break;case 246:Dl=UL;break;case 250:Dl=WR;break;case 276:Dl=Rd;break;
case 300:Dl=ZR;break;case 348:Dl=O1;break;case 372:Dl=Re;break;case 380:Dl=WS;break;
case 392:Dl=WT;break;case 428:Dl=WU;break;case 440:Dl=WV;break;case 442:Dl=ZS;break;
case 470:Dl=WW;break;case 528:Dl=WX;break;case 578:Dl=SZ;break;case 616:Dl=ZT;break;
case 620:Dl=ZU;break;case 642:Dl=Acu;break;case 643:Dl=UM;break;case 703:Dl=ZV;break;
case 705:Dl=Afk;break;case 724:Dl=ZW;break;case 752:Dl=WY;break;case 756:Dl=ZX;break;
case 792:Dl=ZY;break;case 804:Dl=Afl;break;case 826:Dl=JR;break;case 840:Dl=Acv;
break;default:Dl=AsX.toFixed();}return Dl;},AkQ:function(MJ){var Aab;if((MJ<10000
)&&(A._GetAutoObject(C.Device).OJ===2))Aab=2;else if((MJ<100000)&&!!A._GetAutoObject(
C.Device).OJ)Aab=1;else Aab=0;return this.SW(MJ,Aab,false);},Axv:function(MJ,Aab
){return this.SW(MJ,Aab,false);},SW:function(MJ,Aab,ByX){var B;var Alh=A.jV;switch(
A._GetAutoObject(C.Device).MassUnit){case 0:if(ByX)Alh=A.abl(MJ,0,0);else{var BdH=
MJ<0;if(Aab<3)MJ=MJ+(((BdH?-1:1)*5)*(Math.pow(10,2-Aab)|0));Alh=(((((B=MJ)>-2147483648
)?Math.abs(B):B)/1000)|0).toFixed();if(Aab>0)Alh=Alh+(Lt+A.abV(A.abl((((B=MJ)>-2147483648
)?Math.abs(B):B)%1000,3,10),Aab));if(BdH)Alh=AhF+Alh;}break;case 1:Alh=A.abk(MJ/
453.592,0,Aab);break;default:A.ab5("%s%s",AnY,A._GetAutoObject(C.Device).MassUnit.
toFixed());}return Alh;},Ra:function(I9){var A3T=I9.toFixed();var BfO=A3T.length;
if((BfO>=14)&&(BfO<=15)){var A1M=this.Axl(I9);var BxM=A._GetAutoObject(C.Converter
).Bg0(A1M);A3T=(BxM+Oa)+A.abm(A._GetAutoObject(C.Helper).R$(I9,0,12),12,10);}return A3T;
},AmB:function(L0){switch(L0){case 0:return A.aaL(A.ach.AP3);case 1:return A.aaL(
A.ach.AC9);case 2:return A.aaL(A.ach.ADc);default:{A.ab5("%s%e",WZ,L0);return null;
}}},A4v:function(Bxi){switch(Bxi){case 0:return A.aaL(A.ach.Avc);case 1:return A.
aaL(A.ach.AC5);case 2:return A.aaL(A.ach.APX);default:throw new Error(AnZ);}},AdF:
function(AIP){switch(AIP){case 0:return A.aaL(A.ach.AjJ);case 2:return A.aaL(A.ach.
AmK);case 1:return A.aaL(A.ach.Abl);case 3:switch(A._GetAutoObject(C.Device).MassUnit
){case 0:return A.aaL(A.ach.Avl);case 1:return A.aaL(A.ach.Avm);default:throw new
Error(AhG+A._GetAutoObject(C.Device).MassUnit.toFixed());}break;case 4:return A.
aaL(A.ach.APn);case 5:return A.aaL(A.ach.APo);case 6:return A.aaL(A.ach.APs);case
7:return A.aaL(A.ach.AON);case 8:case 13:return A.aaL(A.ach.AOU);case 9:return A.
aaL(A.ach.ACF);case 10:return A.aaL(A.ach.AOT);case 12:return A.aaL(A.ach.AOV);case
11:return A.aaL(A.ach.AC3);default:throw new Error(AhH+AIP.toFixed());}},Bgp:function(
AyA){switch(AyA){case 0:return A.aaL(A.ach.ADa);case 3:return A.aaL(A.ach.AmK);case
1:return A.aaL(A.ach.Abl);case 2:return A._GetAutoObject(A.acj.DS).BcJ();default:
throw new Error(AhH+AyA.toFixed());}},BgZ:function(AsX){switch(AsX){case 977:return Acw;
case 978:return UN;case 980:return An0;case 981:return An1;case 982:return An2;case
983:return An3;case 984:return Afm;case 985:return An4;default:return A.aaR(A.acf.
Unknown);}},Bhg:function(AcJ){switch(AcJ){case 1:return 0x278A;case 2:return 0x278B;
case 3:return 0x278C;case 4:return 0x278D;case 5:return 0x278E;case 6:return 0x278F;
case 7:return 0x2790;case 8:return 0x2791;case 9:return 0x2792;case 10:return 0x2793;
default:return 0x20;}},Bo5:function(I9){if(!I9)return-1;return(I9%100000000)|0;}
,BhL:function(Aos,aFilter){var B;if(!aFilter)return Afn;var AoX=Asq;var Au=aFilter.
AOg();while(!!Au){AoX=AoX+A._GetAutoObject(C.Helper).A6l(Aos,Au);Au=aFilter.AOl(
Au);if(!!Au)AoX=AoX+Ob;}AoX=AoX+S0;return AoX;},A62:function(Bbq){var MG=0;switch(
Bbq){case 14:MG=2;break;case 13:MG=4;break;case 6:MG=36;break;case 11:MG=9;break;
case 0:MG=39;break;case 10:MG=26;break;case 12:MG=12;break;case 5:MG=14;break;case
3:MG=15;break;case 1:MG=10;break;case 8:MG=16;break;case 4:MG=20;break;case 15:MG=
27;break;case 9:MG=31;break;case 2:MG=13;break;case 7:MG=35;break;case 16:MG=37;
break;default:A.ab5("%s%e",Axx,Bbq);}return MG;},Bgo:function(AyA){switch(AyA){case
0:return 1;case 3:return 0;case 1:return 2;case 2:switch(A._GetAutoObject(C.Device
).MassUnit){case 0:return 3;case 1:return 4;default:throw new Error(AhG+A._GetAutoObject(
C.Device).MassUnit.toFixed());}break;default:throw new Error(AhH+AyA.toFixed());
}},Bgq:function(AoD){switch(AoD){case 0:return A.aaL(A.ach.APk);case 1:return A.
aaL(A.ach.ADa);case 9:return A.aaL(A.ach.APu);case 4:return A.aaL(A.ach.AFW);case
6:return A.aaL(A.ach.ArV);case 8:return A.aaL(A.ach.Au9);case 2:return A.aaL(A.ach.
Abl);case 3:return A.aaL(A.ach.AmK);case 10:switch(A._GetAutoObject(C.Device).MassUnit
){case 0:return A.aaL(A.ach.Avl);case 1:return A.aaL(A.ach.Avm);default:throw new
Error(AhG+A._GetAutoObject(C.Device).MassUnit.toFixed());}break;case 7:case 5:case
11:case 12:case 13:case 14:case 18:case 15:case 16:case 17:return A.aaL(A.aci.TE
);default:throw new Error(S1+AoD.toFixed());}},AM5:function(AsX){switch(AsX){case
40:return 1;case 56:return 3;case 70:return 2;case 100:return 4;case 124:return 5;
case 156:return 7;case 158:return 36;case 191:return 17;case 196:return 8;case 203:
return 9;case 208:return 11;case 233:return 12;case 246:return 14;case 250:return 15;
case 276:return 10;case 300:return 16;case 348:return 18;case 372:return 19;case
380:return 20;case 392:return 21;case 428:return 24;case 440:return 22;case 442:
return 23;case 470:return 25;case 528:return 26;case 578:return 27;case 616:return 28;
case 620:return 29;case 642:return 30;case 643:return 31;case 703:return 34;case
705:return 33;case 724:return 13;case 752:return 32;case 756:return 6;case 792:return 35;
case 804:return 37;case 826:return 38;case 840:return 39;default:return 0;}},ZG:
function(I9){var A1M=this.Axl(I9);return this.AM5(A1M);},Axl:function(I9){return A.
_GetAutoObject(C.Helper).R$(I9,12,3)|0;},A$w:function(Aox,Eh){if(Aox<A._GetAutoObject(
C.Helper).ACB(Eh))return 1;else if(Aox<A._GetAutoObject(C.Helper).ACA(Eh))return 2;
else return 3;},ACo:function(BwY){switch(BwY){case 1:return 1;case 2:return 2;case
3:return 3;case 4:return 4;case 5:return 5;case 6:return 6;case 7:return 7;case 8:
return 8;case 9:return 9;case 10:return 10;case 11:return 11;case 12:return 12;case
13:return 13;case 14:return 14;case 15:return 15;case 16:return 16;default:return 0;
}},AUB:function(A6,AII,AIJ){if(AII===AIJ)return A6;if(!AII&&(AIJ===1)){var result=((
A6*9)/5)+32;return result;}if((AII===1)&&!AIJ){var result=((A6-32)*5)/9;return result;
}throw new Error(((Asr+AII.toFixed())+Axy)+AIJ.toFixed());},A56:function(D9){switch(
D9){case 0:return Axz;case 1:return A.jV;case 2:return AxA;case 3:return An5;case
4:return A.aaR(A.acf.Contains);case 5:return AxB;default:{A.ab5("%s%e",Ass,D9);return A.
jV;}}},A45:function(AcI){return this.M0.Ad1(AcI);},Bit:function(AcI){return this.
M0.Aml(AcI);},BgJ:function(AsW){var AzV=0;switch(AsW){case 0:AzV=1;break;case 1:
AzV=2;break;case 2:AzV=3;break;case 3:AzV=4;break;default:A.ab5("%s%e",JS,AsW);}
return AzV;},Aja:function(A0a,Eh){if(A0a>=A._GetAutoObject(C.Helper).A6g(Eh))return 3;
else if(A0a>=A._GetAutoObject(C.Helper).Au1(Eh))return 2;else if(A0a<A._GetAutoObject(
C.Device).ZI)return 0;else return 1;},Aqc:function(MG){var BO=-1;switch(MG){case
0:BO=0;break;case 1:BO=40;break;case 2:BO=70;break;case 3:BO=56;break;case 4:BO=
100;break;case 5:BO=124;break;case 6:BO=756;break;case 7:BO=156;break;case 8:BO=
196;break;case 9:BO=203;break;case 10:BO=276;break;case 11:BO=208;break;case 12:
BO=233;break;case 13:BO=724;break;case 14:BO=246;break;case 15:BO=250;break;case
16:BO=300;break;case 17:BO=191;break;case 18:BO=348;break;case 19:BO=372;break;case
20:BO=380;break;case 21:BO=392;break;case 22:BO=440;break;case 23:BO=442;break;case
24:BO=428;break;case 25:BO=470;break;case 26:BO=528;break;case 27:BO=578;break;case
28:BO=616;break;case 29:BO=620;break;case 30:BO=642;break;case 31:BO=643;break;case
32:BO=752;break;case 33:BO=705;break;case 34:BO=703;break;case 35:BO=792;break;case
36:BO=158;break;case 37:BO=804;break;case 38:BO=826;break;case 39:BO=840;break;default:
throw new Error(AxC+MG.toFixed());}return BO;},Bo9:function(I9){return A._GetAutoObject(
C.Helper).R$(I9,8,2)|0;},Bo8:function(I9){var ByT=this.Bo9(I9);return this.ACo(ByT
);},_Init:function(aArg){C.M0._Init.call(this.M0={I:this},0);this.__proto__=C.ConverterClass;
A.h7++;},_Done:function(){this.__proto__=null;this.M0._Done();A.h7--;},_ReInit:function(
){this.M0._ReInit();},_Mark:function(D){var B;if((B=this.M0)._cycle!=D)B._Mark(B.
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
,IsRegistered:false,IsControl:false,IsAlarm:false,EG:function(Ad,AI){var Hx=C.Row.
EG.call(this,Ad,AI);if(Hx&&!!AI){this.OnSetId(AI.CE(Ad,0));this.Ui(AI.CE(Ad,1));
this.AbQ(AI.CE(Ad,2));this.Anl(AI.CE(Ad,3));this.QX(AI.HB(Ad,4));this.JJ(AI.AOi(
Ad,7));this.Ake(AI.Bh3(Ad,6));this.Ew(AI.AmC(Ad,14));this.NX(AI.KJ(Ad,22));this.
Nb(AI.KJ(Ad,26));this.AwM(AI.IU(Ad,13));this.AeJ(AI.HX(Ad,8));this.AwF(AI.HB(Ad,
15));this.AS5(AI.HB(Ad,31));this.AeO(AI.A6u(Ad,5));this.ASC(AI.IU(Ad,17));this.Uf(
AI.HX(Ad,11));this.AS4(AI.HB(Ad,16));this.AS7(AI.HB(Ad,30));this.Akk(AI.HX(Ad,9)
);this.AeM(AI.HX(Ad,12));this.AS6(AI.HB(Ad,20));this.AwH(AI.HB(Ad,21));this.Ahc(
AI.HX(Ad,10));this.Awi(AI.HX(Ad,27));this.AER(AI.ACv(Ad,18));this.AFk(AI.HB(Ad,19
));this.Awe(AI.ACv(Ad,23));this.AwG(AI.HB(Ad,24));this.ASt(AI.CE(Ad,25));this.Av7(
AI.HB(Ad,28));this.Awj(AI.CE(Ad,29));this.Aru(AI.HX(Ad,38));this.NU(AI.Bh4(Ad,32
));this.Akg(AI.Bh9(Ad,33));this.Ann(AI.KJ(Ad,35));this.Nc(AI.AOr(Ad,34));this.AeL(
AI.HX(Ad,37));this.AE$(AI.Big(Ad,36));}return Hx;},Cn:function(AI){var Hx=C.Row.
Cn.call(this,AI);if(Hx&&!!AI){var Jc=AI.Oy();if(Jc<=0)A.ab5("%s",Acx);else{var Azy=
this.AmP();if(Azy)this.CK=AI.Yp();else AI.Hf(this.CK,0,this.Id);AI.Hf(this.CK,1,
this.VisualId);AI.Hf(this.CK,2,this.GroupId);AI.Hf(this.CK,3,this.LocationId);AI.
Ab9(this.CK,4,this.DateOfBirth);AI.BnW(this.CK,7,this.Gender);AI.BnS(this.CK,6,this.
BirthType);AI.BnQ(this.CK,14,this.AnimalType);AI.SC(this.CK,22,this.TransponderId
);AI.SC(this.CK,26,this.NaisId);AI.AkA(this.CK,13,this.WorstAssessment);AI.My(this.
CK,8,this.IsAlarm);AI.Ab9(this.CK,15,this.TimestampAlarm);AI.My(this.CK,11,this.
IsFever);AI.Ab9(this.CK,16,this.TimestampExpirationFeverAlarm);AI.My(this.CK,9,this.
IsControl);AI.My(this.CK,12,this.IsWatch);AI.Ab9(this.CK,20,this.TimestampLastControl
);AI.Ab9(this.CK,21,this.TimestampLastWatch);AI.My(this.CK,10,this.IsRegistered);
AI.My(this.CK,27,this.IsPerished);AI.Ab9(this.CK,28,this.DateOfLastCalving);AI.Hf(
this.CK,29,this.LactationNumber);AI.My(this.CK,38,this.IsDry);AI.BnU(this.CK,32,
this.Breed);AI.BnV(this.CK,33,this.EaseOfDelivery);AI.SC(this.CK,35,this.NaisIdMother
);AI.Bn2(this.CK,34,this.WhereAbouts);AI.My(this.CK,37,this.IsRegistrationNoticePending
);AI.Bn0(this.CK,36,this.ReasonOfLeaving);Hx=AI.OA(Jc);if(Azy)this.OnSetId(AI.Aa$(
));}}return Hx;},Gh:function(){C.Row.Gh.call(this);this.OnSetId(-1);this.Ahc(true
);},He:function(){C.Row.He.call(this);this.OnSetId(0);this.Ui(0);this.AbQ(0);this.
Anl(0);this.QX(0);this.JJ(A._GetAutoObject(C.Device).Gender);this.Ake(0);this.Ew(
A._GetAutoObject(C.Device).AnimalType);this.NX(0);this.Nb(0);this.AwM(0);this.AeJ(
false);this.AwF(0);this.AS5(0);this.AeO(0);this.ASC(0);this.Uf(false);this.AS7(0
);this.AS4(0);this.Akk(false);this.AeM(false);this.AS6(0);this.AwH(0);this.Ahc(false
);this.Awi(false);this.AER(0);this.AFk(0);this.Awe(0);this.AwG(0);this.ASt(-1);this.
Av7(0);this.Awj(0);this.Aru(false);this.NU(0);this.Akg(0);this.Ann(0);this.Nc(0);
this.AeL(false);this.AE$(0);},OnSetId:function(E){if(this.Id===E)return;this.Id=
E;A.abo([this,this.QV,this.OnSetId],0);},Ui:function(E){if(this.VisualId===E)return;
this.VisualId=E;A.abo([this,this.Ara,this.Ui],0);},AbQ:function(E){if(this.GroupId===
E)return;this.GroupId=E;A.abo([this,this.Bj5,this.AbQ],0);},QX:function(E){if(this.
DateOfBirth===E)return;this.DateOfBirth=E;A.abo([this,this.AvJ,this.QX],0);},JJ:
function(E){if(this.Gender===E)return;this.Gender=E;A.abo([this,this.Wg,this.JJ]
,0);},Ake:function(E){if(this.BirthType===E)return;this.BirthType=E;A.abo([this,
this.ARR,this.Ake],0);},Anl:function(E){if(this.LocationId===E)return;this.LocationId=
E;A.abo([this,this.A8s,this.Anl],0);},AeO:function(E){if(this.LastTemperature===
E)return;this.LastTemperature=E;A.abo([this,this.A8r,this.AeO],0);},AeJ:function(
E){if(this.IsAlarm===E)return;this.IsAlarm=E;A.abo([this,this.A8j,this.AeJ],0);}
,Akk:function(E){if(this.IsControl===E)return;this.IsControl=E;A.abo([this,this.
Bj8,this.Akk],0);},Ahc:function(E){if(this.IsRegistered===E)return;this.IsRegistered=
E;A.abo([this,this.Bj$,this.Ahc],0);},AeM:function(E){if(this.IsWatch===E)return;
this.IsWatch=E;A.abo([this,this.A8n,this.AeM],0);},AwM:function(E){if(this.WorstAssessment===
E)return;this.WorstAssessment=E;A.abo([this,this.A86,this.AwM],0);},Uf:function(
E){if(this.IsFever===E)return;this.IsFever=E;A.abo([this,this.A8k,this.Uf],0);},
AS6:function(E){if(this.TimestampLastControl===E)return;this.TimestampLastControl=
E;A.abo([this,this.Bky,this.AS6],0);},AwH:function(E){if(this.TimestampLastWatch===
E)return;this.TimestampLastWatch=E;A.abo([this,this.BkA,this.AwH],0);},ASC:function(
E){if(this.LastRatingTemperature===E)return;this.LastRatingTemperature=E;A.abo([
this,this.Bkc,this.ASC],0);},AS4:function(E){if(this.TimestampExpirationFeverAlarm===
E)return;this.TimestampExpirationFeverAlarm=E;A.abo([this,this.Bkw,this.AS4],0);
},AwF:function(E){if(this.TimestampAlarm===E)return;this.TimestampAlarm=E;A.abo([
this,this.Bkv,this.AwF],0);},Ew:function(E){if(this.AnimalType===E)return;this.AnimalType=
E;A.abo([this,this.PL,this.Ew],0);},AER:function(E){if(this.LastBodyWeight===E)return;
this.LastBodyWeight=E;A.abo([this,this.A8q,this.AER],0);},AFk:function(E){if(this.
TimestampLastWeighing===E)return;this.TimestampLastWeighing=E;A.abo([this,this.A8S
,this.AFk],0);},NX:function(E){if(this.TransponderId===E)return;this.TransponderId=
E;A.abo([this,this.Aka,this.NX],0);},RF:function(){return A._GetAutoObject(C.Helper
).MN(this.DateOfBirth,A._GetAutoObject(C.Helper).Dw());},Awe:function(E){if(this.
FirstBodyWeight===E)return;this.FirstBodyWeight=E;A.abo([this,this.ARX,this.Awe]
,0);},AwG:function(E){if(this.TimestampFirstWeighing===E)return;this.TimestampFirstWeighing=
E;A.abo([this,this.ASc,this.AwG],0);},AqQ:function(){var S_=A._NewObject(A.Core.
Bw,0);S_.Initialize(this.DateOfBirth);var A1z=A._NewObject(A.Core.Bw,0);A1z.Initialize(
this.TimestampFirstWeighing);if(((S_.Year===A1z.Year)&&(S_.AbJ()===A1z.AbJ()))&&(
this.FirstBodyWeight>0))return true;else return false;},AhE:function(AIC){var Aal;
var At4;if(this.TimestampLastWeighing>0){At4=this.TimestampLastWeighing;Aal=this.
LastBodyWeight;}else{At4=this.DateOfBirth;Aal=A._GetAutoObject(C.Helper).Aa_(this.
AnimalType);}return A._GetAutoObject(C.Helper).AhE(Aal,At4,AIC,this.AnimalType);
},ASt:function(E){if(this.FirstBodyWeightId===E)return;this.FirstBodyWeightId=E;
A.abo([this,this.Bj4,this.ASt],0);},AnB:function(BbN){this.AeJ(BbN);if(BbN){if(!
this.TimestampAlarm)this.AwF(A._GetAutoObject(C.Helper).Dw());}else this.AwF(0);
},Nb:function(E){if(this.NaisId===E)return;this.NaisId=E;A.abo([this,this.Anb,this.
Nb],0);},AF_:function(BbJ){this.AeM(BbJ);if(BbJ){if(!this.TimestampLastWatch)this.
AwH(A._GetAutoObject(C.Helper).Dw());}else this.AwH(0);},Av7:function(E){if(this.
DateOfLastCalving===E)return;this.DateOfLastCalving=E;A.abo([this,this.BjU,this.
Av7],0);},Awj:function(E){if(this.LactationNumber===E)return;this.LactationNumber=
E;A.abo([this,this.Bkb,this.Awj],0);},Awi:function(E){if(this.IsPerished===E)return;
this.IsPerished=E;A.abo([this,this.Bj_,this.Awi],0);},AS7:function(E){if(this.TimestampLastTemperature===
E)return;this.TimestampLastTemperature=E;A.abo([this,this.Bkz,this.AS7],0);},AS5:
function(E){if(this.TimestampLastAssessment===E)return;this.TimestampLastAssessment=
E;A.abo([this,this.Bkx,this.AS5],0);},NU:function(E){if(this.Breed===E)return;this.
Breed=E;A.abo([this,this.AvH,this.NU],0);},Akg:function(E){if(this.EaseOfDelivery===
E)return;this.EaseOfDelivery=E;A.abo([this,this.ARW,this.Akg],0);},Nc:function(E
){if(this.WhereAbouts===E)return;this.WhereAbouts=E;A.abo([this,this.AvV,this.Nc
],0);},Ann:function(E){if(this.NaisIdMother===E)return;this.NaisIdMother=E;A.abo([
this,this.AR4,this.Ann],0);},AE$:function(E){if(this.ReasonOfLeaving===E)return;
this.ReasonOfLeaving=E;A.abo([this,this.Bkm,this.AE$],0);},AeL:function(E){if(this.
IsRegistrationNoticePending===E)return;this.IsRegistrationNoticePending=E;A.abo([
this,this.Bka,this.AeL],0);},Aru:function(E){if(this.IsDry===E)return;this.IsDry=
E;A.abo([this,this.Bj9,this.Aru],0);},QV:function(){return this.Id;},Ara:function(
){return this.VisualId;},Bj5:function(){return this.GroupId;},AvJ:function(){return this.
DateOfBirth;},Wg:function(){return this.Gender;},ARR:function(){return this.BirthType;
},A8s:function(){return this.LocationId;},A8r:function(){return this.LastTemperature;
},A8j:function(){return this.IsAlarm;},Bj8:function(){return this.IsControl;},Bj$:
function(){return this.IsRegistered;},A8n:function(){return this.IsWatch;},A86:function(
){return this.WorstAssessment;},A8k:function(){return this.IsFever;},Bky:function(
){return this.TimestampLastControl;},BkA:function(){return this.TimestampLastWatch;
},Bkc:function(){return this.LastRatingTemperature;},Bkw:function(){return this.
TimestampExpirationFeverAlarm;},Bkv:function(){return this.TimestampAlarm;},PL:function(
){return this.AnimalType;},A8q:function(){return this.LastBodyWeight;},A8S:function(
){return this.TimestampLastWeighing;},Aka:function(){return this.TransponderId;}
,ARX:function(){return this.FirstBodyWeight;},ASc:function(){return this.TimestampFirstWeighing;
},Bj4:function(){return this.FirstBodyWeightId;},Anb:function(){return this.NaisId;
},BjU:function(){return this.DateOfLastCalving;},Bkb:function(){return this.LactationNumber;
},Bj_:function(){return this.IsPerished;},Bkz:function(){return this.TimestampLastTemperature;
},Bkx:function(){return this.TimestampLastAssessment;},AvH:function(){return this.
Breed;},ARW:function(){return this.EaseOfDelivery;},AvV:function(){return this.WhereAbouts;
},AR4:function(){return this.NaisIdMother;},Bkm:function(){return this.ReasonOfLeaving;
},Bka:function(){return this.IsRegistrationNoticePending;},Bj9:function(){return this.
IsDry;},_Init:function(aArg){C.Row._Init.call(this,aArg);this.__proto__=C.Animal;
this.TableId=0;},_className:"Device::Animal"};C.Row={CK:-1,TableId:2,EG:function(
Ad,AI){if(!AI){A.ab5("%s",(AxD+this.CK.toFixed())+AGT);return false;}else if(AI.
Id!==this.TableId)throw new Error(AGU);else if((Ad<0)||(Ad>=AI.Cd())){A.ab5("%s"
,(((AGV+this.CK.toFixed())+AGW)+AI.Cd().toFixed())+Ast);return false;}this.CK=Ad;
return true;},Cn:function(AI){if(!AI){A.ab5("%s",(AxD+this.CK.toFixed())+AGT);return false;
}else if(AI.Id!==this.TableId)throw new Error(AGU);else if(this.AmP()&&AI.Lf()){
A.ab5("%s",AVm+AI.HC().toFixed());return false;}else if(!this.AmP()&&((this.CK<0
)||(this.CK>=AI.Cd()))){A.ab5("%s",(((AGV+this.CK.toFixed())+AGW)+AI.Cd().toFixed(
))+Ast);return false;}return true;},Gh:function(){this.He();this.CK=-1;},AmP:function(
){return this.CK===-1;},He:function(){this.CK=-2;},Aqz:function(){return this.CK
!==-2;},A8G:function(){return this.CK;},A9X:function(E){this.CK=E;},_Init:function(
aArg){this.__proto__=C.Row;A.h7++;},_Done:function(){this.__proto__=null;A.h7--;
},_ReInit:function(){},_Mark:function(D){var B;if((B=this.I)&&(B._cycle!=D))B._Mark(
B._cycle=D);},I:null,_cycle:0,_observers:null,_className:"Device::Row"};C.Rating={
Temperature:0,Id:0,AnimalId:0,Timestamp:0,BodyWeight:0,RatingTemperature:0,Faeces:
0,Respiratory:0,Appearance:0,Feed:0,EG:function(Ad,AI){var Hx=C.Row.EG.call(this
,Ad,AI);if(Hx&&!!AI){this.OnSetId(AI.CE(Ad,0));this.OnSetAnimalId(AI.CE(Ad,1));this.
OnSetTimestamp(AI.HB(Ad,6));this.OnSetFeed(AI.IU(Ad,2));this.OnSetAppearance(AI.
IU(Ad,3));this.OnSetRespiratory(AI.IU(Ad,4));this.OnSetFaeces(AI.IU(Ad,5));this.
OnSetTemperature(AI.A6u(Ad,7));this.OnSetBodyWeight(AI.ACv(Ad,8));this.OnSetRatingTemperature(
AI.IU(Ad,9));}return Hx;},Cn:function(AI){if(this.K&&this.K.Cn)return this.K.Cn.
apply(this,arguments);else return C.Rating.Bae.apply(this,arguments);},Bae:function(
AI){var Hx=C.Row.Cn.call(this,AI);if((Hx&&!!AI)&&(AI.Id===1)){var Jc=AI.Oy();if(
Jc<=0)A.ab5("%s",Acx);else{var Azy=this.AmP();if(Azy)this.CK=AI.Yp();else AI.Hf(
this.CK,0,this.Id);AI.Hf(this.CK,1,this.AnimalId);AI.Ab9(this.CK,6,this.Timestamp
);AI.AkA(this.CK,2,this.Feed);AI.AkA(this.CK,3,this.Appearance);AI.AkA(this.CK,4
,this.Respiratory);AI.AkA(this.CK,5,this.Faeces);AI.A_R(this.CK,7,this.Temperature
);AI.AT4(this.CK,8,this.BodyWeight);AI.AkA(this.CK,9,this.RatingTemperature);AI.
OA(Jc);if(Azy)this.OnSetId(AI.Aa$());var Rn=A._GetAutoObject(C.Device).Ao;var Ad=
A._GetAutoObject(C.Device).Ao.La(0,this.AnimalId);if(Ad>=0){var B_=A._NewObject(
C.Animal,0);B_.EG(Ad,Rn);if(this.Temperature>0)B_.Uf(A._GetAutoObject(C.Helper).
A6W(this));if((this.Temperature>0)&&A._GetAutoObject(C.Helper).AFQ(this)){var Oj=
A._GetAutoObject(C.Helper).AQz(this);B_.Akk(Oj);B_.AnB(Oj);}else if(this.Temperature>
0){var Oj=(A._GetAutoObject(C.Helper).AQz(this)||(B_.WorstAssessment===2))||(B_.
WorstAssessment===1);B_.Akk(Oj);B_.AnB(Oj);}else{var Oj=A._GetAutoObject(C.Helper
).AQz(this)||B_.IsFever;B_.Akk(Oj);B_.AnB(Oj);}B_.Cn(Rn);}}}return Hx;},Gh:function(
){C.Row.Gh.call(this);this.OnSetTimestamp(A._GetAutoObject(C.Helper).Dw());this.
OnSetId(-1);},He:function(){C.Row.He.call(this);this.OnSetTimestamp(0);this.OnSetId(
0);this.OnSetAnimalId(0);this.OnSetFeed(0);this.OnSetAppearance(0);this.OnSetRespiratory(
0);this.OnSetFaeces(0);this.OnSetTemperature(0);this.OnSetBodyWeight(0);this.OnSetRatingTemperature(
0);},OnSetTemperature:function(E){if(this.Temperature===E)return;this.Temperature=
E;A.abo([this,this.Bku,this.OnSetTemperature],0);},OnSetId:function(E){if(this.Id===
E)return;this.Id=E;A.abo([this,this.QV,this.OnSetId],0);},OnSetAnimalId:function(
E){if(this.AnimalId===E)return;this.AnimalId=E;A.abo([this,this.BjI,this.OnSetAnimalId
],0);},OnSetFeed:function(E){if(this.Feed===E)return;this.Feed=E;A.abo([this,this.
Bj1,this.OnSetFeed],0);},OnSetAppearance:function(E){if(this.Appearance===E)return;
this.Appearance=E;A.abo([this,this.BjJ,this.OnSetAppearance],0);},OnSetRespiratory:
function(E){if(this.Respiratory===E)return;this.Respiratory=E;A.abo([this,this.Bkn
,this.OnSetRespiratory],0);},OnSetFaeces:function(E){if(this.Faeces===E)return;this.
Faeces=E;A.abo([this,this.BjZ,this.OnSetFaeces],0);},OnSetTimestamp:function(E){
if(this.Timestamp===E)return;this.Timestamp=E;A.abo([this,this.A8R,this.OnSetTimestamp
],0);},BnR:function(Ni,A6){switch(Ni){case 2:this.OnSetAppearance(A6);break;case
1:this.OnSetFeed(A6);break;case 4:this.OnSetFaeces(A6);break;case 3:this.OnSetRespiratory(
A6);break;default:;}},Bh1:function(Ni){switch(Ni){case 2:return this.Appearance;
case 1:return this.Feed;case 4:return this.Faeces;case 3:return this.Respiratory;
default:return 0;}},OnSetRatingTemperature:function(E){if(this.RatingTemperature===
E)return;this.RatingTemperature=E;A.abo([this,this.Bkl,this.OnSetRatingTemperature
],0);},OnSetBodyWeight:function(E){if(this.BodyWeight===E)return;this.BodyWeight=
E;A.abo([this,this.BjN,this.OnSetBodyWeight],0);},Bku:function(){return this.Temperature;
},QV:function(){return this.Id;},BjI:function(){return this.AnimalId;},Bj1:function(
){return this.Feed;},BjJ:function(){return this.Appearance;},Bkn:function(){return this.
Respiratory;},BjZ:function(){return this.Faeces;},A8R:function(){return this.Timestamp;
},Bkl:function(){return this.RatingTemperature;},BjN:function(){return this.BodyWeight;
},_Init:function(aArg){C.Row._Init.call(this,aArg);this.__proto__=C.Rating;this.
TableId=1;var Lu=this._variants();if(Lu){this.K={};Lu._Init.call(this,aArg);}},_Done:
function(){if(this.K)this.K._Done.call(this);this.__proto__=C.Row;C.Row._Done.call(
this);},_ReInit:function(){C.Row._ReInit.call(this);if(this.K)this.K._ReInit.call(
this);},_Mark:function(D){C.Row._Mark.call(this,D);if(this.K)this.K._Mark(D);},_variants:
function(){return A.acr.Rating._variants();},K:null,_className:"Device::Rating"};
C.HelperClass={Ur:null,Aho:null,ATX:null,ATY:null,W:null,Av:null,KB:null,SG:null
,AdG:null,Ux:null,Uw:null,Ad4:null,Afh:null,Afg:null,Aff:null,Afi:null,Agn:null,
AGn:0,Init:function(aArg){A.pe([this,this.ATo],this);},Akn:function(E){this.Ur=E;
A.abo([this,this.Aq_,this.Akn],0);},AFc:function(E){this.Aho=E;A.abo([this,this.
A8H,this.AFc],0);},Bz0:function(G){switch(A._GetAutoObject(C.Device).ScanState){
case 2:{var At6=A._GetAutoObject(C.Device).OP;if(!At6)throw new Error(AVn);switch(
At6.TransponderType){case 1:this.Akn(At6);break;case 2:this.ASV(At6);break;case 3:
this.AFc(At6);break;case 4:this.ASW(At6);break;case 0:break;default:throw new Error(
AVo);}}break;case 4:A._GetAutoObject(C.Device).A_(11,true,A.jV,2000,null);break;
case 3:A._GetAutoObject(C.Device).A_(12,true,A.jV,2000,null);break;case 0:case 1:
break;default:throw new Error(AVp);}},Akx:function(){this.Akn(null);this.ASV(null
);this.AFc(null);this.ASW(null);},AFh:function(E){if(this.K&&this.K.AFh)return this.
K.AFh.apply(this,arguments);else return C.HelperClass.Bac.apply(this,arguments);
},Bac:function(E){A.abo([this,this.UP,this.UQ],0);A._GetAutoObject(C.Device).SetSystemTime(
E);},UQ:function(Aq){this.AFh(Aq);},Dw:function(){if(this.K&&this.K.Dw)return this.
K.Dw.apply(this,arguments);else return C.HelperClass.A$_.apply(this,arguments);}
,A$_:function(){var B;return((B=(this.Av.BcH()|0))<0)?B+0x100000000:B;},UP:function(
){return this.Dw();},ArY:function(){A._GetAutoObject(C.Device).SB(-1);this.W.He(
);A.we(this.W,0);},A7a:function(I9){if(!I9){A.ab5("%s%U",AVq,I9);return false;}var
Bf=A._GetAutoObject(C.Device).Ao.AgF(22,I9);return this.HH(Bf);},AmD:function(Aos
,AIB){switch(Aos){case 0:{var AoW=AIB;switch(AoW){case 14:return A.aaR(A.acf.Afc
);case 6:return Asu;case 4:return A.aaR(A.acf.AdX);case 28:return AxE;case 7:return A.
aaR(A.acf.Ae6);case 2:return A.aaR(A.acf.O);case 0:return A.aaR(A.acf.GF);case 37:
return P3;case 8:return A.aaR(A.acf.Alarm);case 9:return A.aaR(A.acf.ABK);case 38:
return A.aaR(A.acf.ANs);case 11:return A.aaR(A.acf.Fever);case 27:return AxF;case
10:return A.aaR(A.acf.Bnv);case 12:return A.aaR(A.acf.ArK);case 29:return A.aaR(
A.acf.AQS);case 18:return A.aaR(A.acf.Weighing);case 17:return AVr;case 5:return A.
aaR(A.acf.Temperature);case 3:return AVs;case 26:return A.aaR(A.acf.T$);case 35:
return A.aaR(A.acf.T$)+AVt;case 36:return AVu;case 15:return AGX;case 24:return AGY;
case 20:return Afo;case 30:return An6;case 21:return AVv;case 19:return AGZ;case
22:return A.aaR(A.acf.Transponder);case 1:return A.aaR(A.acf.GA);case 34:return A.
aaR(A.acf.I6);case 13:return AkT;case 31:return AG0;default:{A.ab5("%s",AG1+AoW.
toFixed());return AG2+AoW.toFixed();}}}case 1:{var AoW=AIB;switch(AoW){case 1:return A.
aaR(A.acf.Animal);case 3:return A.aaR(A.acf.AFP);case 8:return A.aaR(A.acf.Afe);
case 5:return A.aaR(A.acf.AFR);case 2:return A.aaR(A.acf.Feed);case 4:return A.aaR(
A.acf.AFS);case 7:return A.aaR(A.acf.Temperature);case 6:return A.aaR(A.acf.Bw);
default:{A.ab5("%s",AVw+AoW.toFixed());return AG2+AoW.toFixed();}}}default:A.ab5(
"%s",(AVx+Aos.toFixed())+AVy);}return A.jV;},A6l:function(Aos,AH){var result=A.jV;
if(!!AH){result=this.AmD(Aos,AH.EE);result=((result+Oa)+A._GetAutoObject(C.Converter
).A56(AH.Operator))+Oa;if(!!(C.Int32FilterCriterion.isPrototypeOf(AH)?AH:null))result=
result+(C.Int32FilterCriterion.isPrototypeOf(AH)?AH:null).A5.toFixed();else if(!
!(C.UInt32FilterCriterion.isPrototypeOf(AH)?AH:null))result=result+(C.UInt32FilterCriterion.
isPrototypeOf(AH)?AH:null).A5.toFixed();else if(!!(C.StringFilterCriterion.isPrototypeOf(
AH)?AH:null))result=result+(C.StringFilterCriterion.isPrototypeOf(AH)?AH:null).A5;
else if(!!(C.BoolFilterCriterion.isPrototypeOf(AH)?AH:null)){if((C.BoolFilterCriterion.
isPrototypeOf(AH)?AH:null).A5)result=this.AmD(Aos,AH.EE);else result=A.jV;}else if(
!!(C.GenderFilterCriterion.isPrototypeOf(AH)?AH:null)){var Byq=A._NewObject(C.GenderToString
,0);result=result+Byq.Lr((C.GenderFilterCriterion.isPrototypeOf(AH)?AH:null).A5);
}else if(!!(C.AnimalTypeFilterCriterion.isPrototypeOf(AH)?AH:null)){var Bxk=A._NewObject(
C.AnimalTypeToString,0);result=result+Bxk.Lr((C.AnimalTypeFilterCriterion.isPrototypeOf(
AH)?AH:null).A5);}else if(!!(C.AssessmentFilterCriterion.isPrototypeOf(AH)?AH:null
)){var Bxn=A._NewObject(C.AssesmentToString,0);result=result+Bxn.Lr((C.AssessmentFilterCriterion.
isPrototypeOf(AH)?AH:null).A5);}else if(!!(C.UInt64FilterCriterion.isPrototypeOf(
AH)?AH:null))result=result+(C.UInt64FilterCriterion.isPrototypeOf(AH)?AH:null).A5.
toFixed();else if(!!(C.UInt64PartialFilterCriterion.isPrototypeOf(AH)?AH:null)){
var Au=(C.UInt64PartialFilterCriterion.isPrototypeOf(AH)?AH:null);result=(((((result+
Au.A5)+Acy)+Au.TF.toFixed())+Ob)+Au.Aez.toFixed())+Ast;}else if(!!(C.WhereAboutsFilterCriterion.
isPrototypeOf(AH)?AH:null)){var BBJ=A._NewObject(C.WhereAboutsToString,0);result=
result+BBJ.Lr((C.WhereAboutsFilterCriterion.isPrototypeOf(AH)?AH:null).A5);}else
A.ab5("%s",AVz);}return result;},Ne:function(aString,Bbw,Bwz){var result=A.jV;var
Be9=false;var index=0;var BwB=Bbw.length;while(!Be9){var A3d=aString.indexOf(Bbw
,index);if(A3d!==-1){result=(result+A.abW(aString,index,A3d-index))+Bwz;index=A3d+
BwB;}else{var BbA=aString.length;if(index<BbA)result=result+A.ab2(aString,BbA-index
);Be9=true;}}return result;},ASV:function(E){this.ATX=E;A.abo([this,this.Bko,this.
ASV],0);},ASW:function(E){this.ATY=E;A.abo([this,this.Bkp,this.ASW],0);},Bc7:function(
){return((A._GetAutoObject(C.Device).ScanState===2)&&!!A._GetAutoObject(C.Device
).OP)&&(A._GetAutoObject(C.Device).OP.TransponderType===1);},AfT:function(G){if(
!this.W.AmP()&&!!this.W.Id)this.Bi5(this.W.Id);},Au1:function(Eh){return A._GetAutoObject(
C.Helper).Ux.Get(Eh);},A6g:function(Eh){return A._GetAutoObject(C.Helper).Uw.Get(
Eh);},A6q:function(){var P=0;var min=32767;while(P<A._GetAutoObject(C.Helper).Ux.
MB){if(A._GetAutoObject(C.Helper).Ux.Get(P)<min)min=A._GetAutoObject(C.Helper).Ux.
Get(P);P=P+1;}return min;},ATo:function(G){A.zV([this,this.AfT],A._GetAutoObject(
C.Device).Ao,0);},AQz:function(DZ){if(!DZ)return false;var BiF=(((this.Azu(DZ.Faeces
)||this.Azu(DZ.Feed))||this.Azu(DZ.Appearance))||this.Azu(DZ.Respiratory))||this.
Azu(DZ.RatingTemperature);return BiF||this.A6W(DZ);},Azu:function(Ba$){return(Ba$===
2)||(Ba$===1);},A6W:function(DZ){return!!DZ&&(DZ.Temperature>A._GetAutoObject(C.
Helper).Au1(A._GetAutoObject(C.Helper).W.AnimalType));},HH:function(L3){var A18=
false;if(L3>=0){if(L3!==this.W.CK)A._GetAutoObject(C.Device).SB(L3);A18=this.W.EG(
L3,A._GetAutoObject(C.Device).Ao);if(A18)A.we(this.W,0);}else{A._GetAutoObject(C.
Device).SB(-1);this.W.He();A.we(this.W,0);}return A18;},Ahx:function(AhR){var B;
return(((B=(this.Av.BcH()|0))<0)?B+0x100000000:B)-this.Amp(AhR);},Asb:function(){
var B;A.pe([B=this.KB,B.AnG],this);},BA$:function(G){A._GetAutoObject(C.Device).
A_(16,false,AG3,0,null);A._GetAutoObject(C.Device).A_(5,true,A.jV,0,null);},Bm1:
function(G){var At=(C.PopupContext.isPrototypeOf(G)?G:null);if(!!At&&(At.PopupState===
5))this.Asb();},BmP:function(E){if(this.AGn===E)return;this.AGn=E;A._GetAutoObject(
C.Device).A_(16,true,this.AGn.toFixed(),0,[this,this.Bm1]);},MN:function(Bv$,BwQ
){var D4;var BfB=A._NewObject(A.Core.AnN,0);var Gy=A._NewObject(A.Core.Bw,0);var
K3=A._NewObject(A.Core.Bw,0);Gy.Initialize(Bv$);K3.Initialize(BwQ);D4=K3.Bhf(Gy);
BfB.Initialize2(0,D4.ACZ,D4.ADN,D4.AF3);if(Gy.J(BfB).GD===Gy.GD)return D4.J_;else
return D4.J_+1;},BBb:function(G){A._GetAutoObject(C.Device).UpdateMeasureState(3
);if((A._GetAutoObject(C.Device).Ko>=A._GetAutoObject(C.Device).ZI)&&(A._GetAutoObject(
C.Device).Ko<=A._GetAutoObject(C.Helper).Au1(A._GetAutoObject(C.Helper).W.AnimalType
))){var AIT=A._GetAutoObject(C.Helper).W.Id;var BAC=A._GetAutoObject(C.Device).Ao.
La(0,AIT);A._GetAutoObject(C.Device).Ao.My(BAC,9,false);A._GetAutoObject(C.Device
).Ao.Bl(A._GetAutoObject(C.Device).Ao.Filter);}},AKy:function(G){var Bgt=A._GetAutoObject(
C.Helper).Au1(A._GetAutoObject(C.Helper).W.AnimalType);var Bgn=A._GetAutoObject(
C.Helper).A6g(A._GetAutoObject(C.Helper).W.AnimalType);var Af8=A.abz(Bgt-100,Bgn+
100);this.Bcm(Af8);},Amp:function(AhR){return AhR*86400;},AnO:function(JU){var B;
if(!!JU&&(JU<(((B=Math.trunc(Math.pow(10,A._GetAutoObject(C.Device).AF)))<0)?B+0x10000000000000000:
B)))return-1;return A._GetAutoObject(C.Helper).R$(JU,A._GetAutoObject(C.Device).
AF&0xFF,A._GetAutoObject(C.Device).A0&0xFF)|0;},AFQ:function(DZ){if(!DZ)return false;
return((!!DZ.Faeces||!!DZ.Feed)||!!DZ.Appearance)||!!DZ.Respiratory;},AhE:function(
A0n,BbC,AIC,Eh){var B;var Apz;if((A0n<650000)&&(BbC<this.Dw())){var BbZ=this.Agn.
Au3(Eh);var BbY=0;if(BbZ>=0)BbY=this.Aff.Get(BbZ);Apz=A0n+(this.MN(BbC,this.Dw()
)*BbY);if(AIC>0){var A1h=this.Apy(AIC);Apz=(Math.trunc(((((B=Apz)<0)?B+0x10000000000000000:
B)+Math.trunc(A1h/2))/A1h)*A1h)|0;}if(Apz>650000)Apz=650000;}else Apz=A0n;return Apz;
},ACC:function(DZ){var ApW=A._GetAutoObject(C.Converter).AdH(DZ.Faeces);if(ApW<A.
_GetAutoObject(C.Converter).AdH(DZ.Feed))ApW=A._GetAutoObject(C.Converter).AdH(DZ.
Feed);if(ApW<A._GetAutoObject(C.Converter).AdH(DZ.Appearance))ApW=A._GetAutoObject(
C.Converter).AdH(DZ.Appearance);if(ApW<A._GetAutoObject(C.Converter).AdH(DZ.Respiratory
))ApW=A._GetAutoObject(C.Converter).AdH(DZ.Respiratory);return A._GetAutoObject(
C.Converter).A$d(ApW);},Aw1:function(DZ,Nh){if(!!DZ){DZ.OnSetFaeces(Nh);DZ.OnSetFeed(
Nh);DZ.OnSetAppearance(Nh);DZ.OnSetRespiratory(Nh);}},BhZ:function(AI,AIH,AcP,W_
,Afs){if(!AI)throw new Error(Asv);var Be=A._NewObject(C.Filter,0);var Apk=AI.Filter;
var Oe=A._NewObject(C.Int32FilterCriterion,0);Oe.Operator=0;Oe.EE=1;Oe.A5=AcP;Be.
CV(Oe);if(W_>0){var Os=A._NewObject(C.UInt32FilterCriterion,0);Os.Operator=2;Os.
EE=6;Os.A5=W_;Be.CV(Os);}if(Afs>0){var Oi=A._NewObject(C.UInt32FilterCriterion,0
);Oi.Operator=3;Oi.EE=6;Oi.A5=Afs;Be.CV(Oi);}AI.Bl(Be);var L4=A._NewObject(C.Int32ArrayWrapper
,0);L4.Zf(6);var P;for(P=0;P<L4.MB;P=P+1)L4.Set(P,0);var UW;for(P=0;P<AI.Cd();P=
P+1){UW=AI.IU(P,AIH);L4.Set(UW,L4.Get(UW)+1);}AI.Bl(Apk);return L4;},Zw:function(
AhR){var B;var Gy=A._NewObject(A.Core.Bw,0);var BfA=A._NewObject(A.Core.AnN,0);Gy.
Initialize(A._GetAutoObject(C.Converter).Ahz());BfA.Initialize2(AhR,0,0,0);Gy=Gy.
Boj(BfA);return((B=(Gy.JI()|0))<0)?B+0x100000000:B;},A6h:function(AI,AcP,Afs,W_){
if(!AI)throw new Error(Asv);var Be=A._NewObject(C.Filter,0);var Apk=AI.Filter;var
Oe=A._NewObject(C.Int32FilterCriterion,0);Oe.Operator=0;Oe.EE=1;Oe.A5=AcP;Be.CV(
Oe);if(W_>0){var Os=A._NewObject(C.UInt32FilterCriterion,0);Os.Operator=2;Os.EE=
6;Os.A5=W_;Be.CV(Os);}if(Afs>0){var Oi=A._NewObject(C.UInt32FilterCriterion,0);Oi.
Operator=3;Oi.EE=6;Oi.A5=Afs;Be.CV(Oi);}AI.Bl(Be);var L4=A._NewObject(C.Int32ArrayWrapper
,0);L4.Zf(6);var P;for(P=0;P<L4.MB;P=P+1)L4.Set(P,0);var AoK=A._NewObject(C.Rating
,0);var A0$;for(P=0;P<AI.Cd();P=P+1){AoK.EG(P,AI);if(A._GetAutoObject(C.Helper).
AFQ(AoK)){A0$=A._GetAutoObject(C.Helper).ACC(AoK);L4.Set(A0$,L4.Get(A0$)+1);}}AI.
Bl(Apk);return L4;},A1H:function(AI,AcP,BxX){if(!AI)throw new Error(Asv);var Be=
A._NewObject(C.Filter,0);var Apk=AI.Filter;var Oe=A._NewObject(C.Int32FilterCriterion
,0);Oe.Operator=0;Oe.EE=1;Oe.A5=AcP;Be.CV(Oe);var W_=A._GetAutoObject(C.Converter
).Ahz()+A._GetAutoObject(C.Helper).Amp(BxX);var Afs=W_+A._GetAutoObject(C.Helper
).Amp(1);var Os=A._NewObject(C.UInt32FilterCriterion,0);Os.Operator=2;Os.EE=6;Os.
A5=W_;Be.CV(Os);var Oi=A._NewObject(C.UInt32FilterCriterion,0);Oi.Operator=3;Oi.
EE=6;Oi.A5=Afs;Be.CV(Oi);AI.Bl(Be);var AoK=A._NewObject(C.Rating,0);var UW;var LN=
0;var P;for(P=0;P<AI.Cd();P=P+1){AoK.EG(P,AI);if(A._GetAutoObject(C.Helper).AFQ(
AoK)){UW=A._GetAutoObject(C.Helper).ACC(AoK);if(A._GetAutoObject(C.Converter).AdH(
UW)>A._GetAutoObject(C.Converter).AdH(LN))LN=UW;}}AI.Bl(Apk);return LN;},AmO:function(
){if((A._GetAutoObject(C.Device).WeightRecordingScope===2)||(A._GetAutoObject(C.
Device).WeightRecordingScope===1))return true;else return false;},A6Z:function(){
if((A._GetAutoObject(C.Device).WeightRecordingScope===2)||!A._GetAutoObject(C.Device
).WeightRecordingScope)return true;else return false;},Bh0:function(AI,AIH,AcP,W_
,Afs){if(!AI)throw new Error(Asv);var Be=A._NewObject(C.Filter,0);var Apk=AI.Filter;
var Oe=A._NewObject(C.Int32FilterCriterion,0);Oe.Operator=0;Oe.EE=1;Oe.A5=AcP;Be.
CV(Oe);if(W_>0){var Os=A._NewObject(C.UInt32FilterCriterion,0);Os.Operator=2;Os.
EE=6;Os.A5=W_;Be.CV(Os);}if(Afs>0){var Oi=A._NewObject(C.UInt32FilterCriterion,0
);Oi.Operator=3;Oi.EE=6;Oi.A5=Afs;Be.CV(Oi);}AI.Bl(Be);var L4=A._NewObject(C.Int32ArrayWrapper
,0);L4.Zf(6);var P;for(P=0;P<L4.MB;P=P+1)L4.Set(P,0);if(AI.Cd()>0){var UW=AI.IU(
0,AIH);var ApE=AI.HB(P,6);var Ac=A._NewObject(A.Core.Bw,0);Ac.Initialize(ApE);var
ApV=UW;var AJA=A._NewObject(A.Core.Bw,0);AJA.Initialize(Ac.JI());for(P=1;P<AI.Cd(
);P=P+1){UW=AI.IU(P,AIH);ApE=AI.HB(P,6);Ac.Initialize(ApE);if((Ac.AbJ()!==AJA.AbJ(
))||(Ac.Year!==AJA.Year)){L4.Set(ApV,L4.Get(ApV)+1);AJA.Initialize(Ac.JI());ApV=
UW;}else if(!!UW&&(UW<ApV))ApV=UW;}L4.Set(ApV,L4.Get(ApV)+1);}AI.Bl(Apk);return L4;
},Ap5:function(LZ){var B;var Gy=A._NewObject(A.Core.Bw,0);Gy.Initialize(LZ);Gy.Anj(
0);Gy.Anm(0);Gy.Anp(0);return((B=(Gy.JI()|0))<0)?B+0x100000000:B;},ANG:function(
LZ){var B;LZ=LZ+86400;var Gy=A._NewObject(A.Core.Bw,0);Gy.Initialize(LZ);Gy.Anj(
0);Gy.Anm(0);Gy.Anp(0);return((B=(Gy.JI()|0))<0)?B+0x100000000:B;},Bh2:function(
BA9,Bx8,AlU,Ali){var Bch=A._GetAutoObject(C.Helper).MN(BA9,Bx8);if(Bch>0)return((
Ali-AlU)/Bch)|0;return 0;},BoX:function(Bwa,BwR){var Gy=A._NewObject(A.Core.Bw,0
);var K3=A._NewObject(A.Core.Bw,0);Gy.Initialize(Bwa);K3.Initialize(BwR);return(
Gy.Year===K3.Year)&&(Gy.AbJ()===K3.AbJ());},A6n:function(){var Be=A._GetAutoObject(
C.Helper).Mm();var Bdj=A._NewObject(C.UInt32FilterCriterion,0);var Bw0=A._GetAutoObject(
C.Helper).Zw(A._GetAutoObject(C.Device).Aqt)-1;Bdj.Initialize(28,2,Bw0,true);Be.
CV(Bdj);var US=A._NewObject(C.AnimalTypeFilterCriterion,0);US.Initialize(14,0,1,
true);Be.CV(US);if(A._GetAutoObject(C.Device).Aqu){var AzK=A._NewObject(C.UInt32FilterCriterion
,0);var A13=A._GetAutoObject(C.Helper).Dw()-21600;AzK.Initialize(30,3,A13,true);
Be.CV(AzK);}return Be;},BnA:function(){var Jc=A._GetAutoObject(C.Device).Ao.Oy();
if(Jc<=0)A.ab5("%s",Acx);else{A._GetAutoObject(C.Device).Ao.He();A._GetAutoObject(
C.Device).Ao.OA(Jc);}Jc=A._GetAutoObject(C.Device).Agf.Oy();if(Jc<=0)A.ab5("%s",
Acx);else{A._GetAutoObject(C.Device).Agf.He();A._GetAutoObject(C.Device).Agf.OA(
Jc);}Jc=A._GetAutoObject(C.Device).Bu.Oy();if(Jc<=0)A.ab5("%s",Acx);else{A._GetAutoObject(
C.Device).Bu.He();A._GetAutoObject(C.Device).Bu.OA(Jc);}Jc=A._GetAutoObject(C.Device
).Pk.Oy();if(Jc<=0)A.ab5("%s",Acx);else{A._GetAutoObject(C.Device).Pk.He();A._GetAutoObject(
C.Device).Pk.OA(Jc);}},Bi5:function(AcP){var Bf=A._GetAutoObject(C.Device).Ao.La(
0,AcP);return this.HH(Bf);},AQG:function(I9){var Aii=A._GetAutoObject(C.Device).
Ao.Ad2(22,I9);return Aii;},ACt:function(){var Be=A._GetAutoObject(C.Helper).Mm();
var Ai0=A._NewObject(C.UInt64FilterCriterion,0);Ai0.Initialize(22,0,0,true);Be.CV(
Ai0);return Be;},AOf:function(AoD,Bx5,P7){var Z9=-1;switch(AoD){case 2:Z9=30;break;
case 3:Z9=31;break;case 10:Z9=19;break;default:A.ab5("%s%e",S1,AoD);}if(Z9<0)return null;
var Ac4=A._NewObject(C.UInt32FilterCriterion,0);Ac4.Initialize(Z9,3,A._GetAutoObject(
C.Helper).Dw()-Bx5,P7);return Ac4;},Bny:function(aFilter){var AH=aFilter.DN(30,3
);if(!!AH)aFilter.N3(AH);AH=aFilter.DN(31,3);if(!!AH)aFilter.N3(AH);AH=aFilter.DN(
19,3);if(!!AH)aFilter.N3(AH);},A02:function(AfC,Ayq,AI){if(AI.Lf())return 5;if(AfC.
VisualId<=0)switch(Ayq){case 0:if(!AfC.NaisId)return 1;break;case 1:if(!AfC.TransponderId
)return 1;break;case 3:case 2:case 5:case 4:return 1;default:throw new Error(AG4+
Ayq.toFixed());}if((!AfC.NaisId&&!AfC.TransponderId)&&A._GetAutoObject(C.Device).
Ao.Ajx(1,AfC.VisualId))return 2;if(!!AfC.NaisId&&A._GetAutoObject(C.Helper).AQE(
AfC.NaisId))return 3;if(!!AfC.TransponderId&&A._GetAutoObject(C.Helper).AQG(AfC.
TransponderId))return 4;return 0;},Ap0:function(EI){EI.Ew(A._GetAutoObject(C.Device
).AnimalType);EI.NU(A._GetAutoObject(C.Device).Breed);EI.QX(A._GetAutoObject(C.Helper
).Dw()-A._GetAutoObject(C.Helper).Amp(A._GetAutoObject(C.Device).Adz));EI.JJ(A._GetAutoObject(
C.Device).Gender);EI.Nc(A._GetAutoObject(C.Device).WhereAbouts);},ALQ:function(Ri
,EI){var GM=0;switch(Ri){case 0:GM=A._GetAutoObject(C.Helper).AnO(EI.NaisId);break;
case 1:GM=A._GetAutoObject(C.Helper).AnO(EI.TransponderId);break;case 3:GM=A._GetAutoObject(
C.Device).AqE;break;case 2:GM=A._GetAutoObject(C.Device).AqF;break;case 4:case 5:
GM=A._GetAutoObject(C.Device).AjI;break;default:throw new Error(AG5+Ri.toFixed()
);}return GM;},A$k:function(Ak1,L0,BvX,Bbd,Bwu){var B;var Qi=null;var Xj=null;switch(
Ak1){case 0:{Qi=[B=A._GetAutoObject(C.Device),B.AR3,B.AZK];Xj=[B=A._GetAutoObject(
C.Device),B.AvS,B.Ayj];}break;case 1:switch(L0){case 1:{Qi=[B=A._GetAutoObject(C.
Device),B.A8w,B.BaJ];Xj=[B=A._GetAutoObject(C.Device),B.AvQ,B.Ayh];}break;case 0:{
Qi=[B=A._GetAutoObject(C.Device),B.A8x,B.BaK];Xj=[B=A._GetAutoObject(C.Device),B.
AvR,B.Ayi];}break;case 2:{Qi=[B=A._GetAutoObject(C.Device),B.AR3,B.AZK];Xj=[B=A.
_GetAutoObject(C.Device),B.AvS,B.Ayj];}break;default:throw new Error(AxG+L0.toFixed(
));}break;default:throw new Error(AG6+Ak1.toFixed());}if(!!Qi&&!!Xj){Qi[2].call(
Qi[0],BvX);if((Xj[1].call(Xj[0])>0)&&(Bbd<Bwu))Qi[2].call(Qi[0],Qi[1].call(Qi[0]
)+Xj[1].call(Xj[0]));else if((Xj[1].call(Xj[0])<0)&&(Bbd>0))Qi[2].call(Qi[0],Qi[
1].call(Qi[0])+Xj[1].call(Xj[0]));return Qi[1].call(Qi[0]);}return 0;},AUV:function(
EI,Ak1,Bv5){if(!EI||(Bv5===true))return;switch(Ak1){case 0:EI.Nb(A._GetAutoObject(
C.Device).AvA);break;case 1:switch(EI.Gender){case 0:EI.Nb(A._GetAutoObject(C.Device
).ADQ);break;case 1:EI.Nb(A._GetAutoObject(C.Device).ADP);break;case 2:EI.Nb(A._GetAutoObject(
C.Device).AvA);break;default:throw new Error(AxG+EI.Gender.toFixed());}break;default:
throw new Error(AG6+Ak1.toFixed());}},BiG:function(Ri,EI){var result=false;switch(
Ri){case 0:result=!!EI.NaisId;break;case 1:result=!!EI.TransponderId;break;case 3:
case 2:case 4:case 5:result=false;break;default:throw new Error(AG5+Ri.toFixed()
);}return result;},AJO:function(EI,Ba9,Ayq,As_,Afv){switch(Ba9){case 2:if(As_<=0
)A._GetAutoObject(C.Device).A_(21,true,EI.VisualId.toFixed(),0,Afv);else A._GetAutoObject(
C.Device).A_(48,true,(EI.VisualId.toFixed()+AxH)+As_.toFixed(),0,Afv);break;case
3:if(As_<=0)A._GetAutoObject(C.Device).A_(21,true,A._GetAutoObject(C.Converter).
Ra(EI.NaisId),0,Afv);else A._GetAutoObject(C.Device).A_(48,true,(A._GetAutoObject(
C.Converter).Ra(EI.NaisId)+AxH)+As_.toFixed(),0,Afv);break;case 4:if(As_<=0)A._GetAutoObject(
C.Device).A_(25,true,A._GetAutoObject(C.Converter).Ra(EI.TransponderId),0,Afv);else
A._GetAutoObject(C.Device).A_(47,true,(A._GetAutoObject(C.Converter).Ra(EI.TransponderId
)+AxH)+As_.toFixed(),0,Afv);break;case 1:switch(Ayq){case 1:A._GetAutoObject(C.Device
).A_(42,true,A.jV,0,Afv);break;case 0:A._GetAutoObject(C.Device).A_(43,true,A.jV
,0,Afv);break;case 3:case 2:case 5:case 4:A._GetAutoObject(C.Device).A_(22,true,
A.jV,0,Afv);break;default:throw new Error(AG4+Ayq.toFixed());}break;case 5:A._GetAutoObject(
C.Device).A_(41,true,A._GetAutoObject(C.Device).Ao.HC().toFixed(),0,Afv);break;case
0:break;default:throw new Error(AVA+Ba9.toFixed());}},BcL:function(Bbl,L0){var B;
var AzO=null;switch(Bbl){case 0:AzO=[B=A._GetAutoObject(C.Device),B.AvS,B.Ayj];break;
case 1:switch(L0){case 1:AzO=[B=A._GetAutoObject(C.Device),B.AvQ,B.Ayh];break;case
0:AzO=[B=A._GetAutoObject(C.Device),B.AvR,B.Ayi];break;case 2:AzO=[B=A._GetAutoObject(
C.Device),B.AvS,B.Ayj];break;default:throw new Error(AxG+L0.toFixed());}break;default:
throw new Error(AVB+Bbl.toFixed());}return AzO;},A6y:function(P9,BwH){var Aaw=A.
_NewObject(A.Core.Bw,0);Aaw.Initialize(P9);var AA3=Aaw.Year;var Bf=A._GetAutoObject(
C.Device).Pk.La(0,AA3);var UV=A._NewObject(C.CalfDeregistrations,0);if(Bf<0){if(
A._GetAutoObject(C.Device).Pk.Lf())A._GetAutoObject(C.Device).A_(51,true,A._GetAutoObject(
C.Device).Pk.HC().toFixed(),0,null);else{UV.Gh();UV.Akp(AA3);}}else UV.EG(Bf,A._GetAutoObject(
C.Device).Pk);UV.Av9(UV.Deregistrations+1);if(BwH)UV.Av8(UV.Deaths+1);UV.Cn(A._GetAutoObject(
C.Device).Pk);},ALO:function(LN,Als,Alj){var AJ$=0;if((Als&&(Alj===1))||(LN===1)
)AJ$=1;else if((Als&&(Alj===2))||(LN===2))AJ$=2;else if(!!LN&&(LN!==5))AJ$=LN;return AJ$;
},Bcm:function(BwZ){var B;if(A._GetAutoObject(C.Device).MeasureState===1){this.SG.
Cu=A._GetAutoObject(C.Device).ZI;this.SG.B3=BwZ;this.SG.AnE(this);}},ACq:function(
){var Be=this.AOe();var Bc_=A._NewObject(C.BoolFilterCriterion,0);Bc_.Initialize(
38,0,true,true);Be.CV(Bc_);return Be;},A6e:function(Ey){var Be=A._GetAutoObject(
C.Helper).Mm();if(A._GetAutoObject(C.Device).ApX){var A1K=A._GetAutoObject(C.Helper
).AOf(Ey,21600,true);Be.CV(A1K);}return Be;},A6s:function(){var Be=A._GetAutoObject(
C.Helper).Mm();var BdA=A._NewObject(C.UInt64FilterCriterion,0);BdA.Initialize(26
,0,0,true);Be.CV(BdA);return Be;},A6v:function(){var B;var Be=A._GetAutoObject(C.
Helper).Mm();var AzU=(C.WhereAboutsFilterCriterion.isPrototypeOf(B=Be.DN(34,3))?
B:null);if(!!AzU)Be.N3(AzU);var BeR=A._NewObject(C.BoolFilterCriterion,0);BeR.Initialize(
37,0,true,true);Be.CV(BeR);return Be;},R$:function(A6,As4,A0o){var B;A6=Math.trunc(
A6/this.Apy(As4));A6%=this.Apy(A0o);return A6;},Apy:function(Bbm){switch(Bbm){case
0:return 1;case 1:return 10;case 2:return 100;case 3:return 1000;case 4:return 10000;
case 5:return 100000;case 6:return 1000000;case 7:return 10000000;case 8:return 100000000;
case 9:return 1000000000;case 10:return 10000000000;case 11:return 100000000000;
case 12:return 1000000000000;case 13:return 10000000000000;case 14:return 100000000000000;
case 15:return 1000000000000000;default:throw new Error(AVC+Bbm.toFixed());}},Mm:
function(){var Be=A._NewObject(C.Filter,0);var Bfb=A._NewObject(C.BoolFilterCriterion
,0);Bfb.Initialize(10,0,true,true);Be.CV(Bfb);var AzU=A._NewObject(C.WhereAboutsFilterCriterion
,0);AzU.Initialize(34,3,6,true);Be.CV(AzU);return Be;},AqP:function(aFilter){return!
this.ACu(aFilter);},ACu:function(aFilter){var I$=0;var Au=aFilter.AOg();while(!!
Au){if(Au.Ys===false)I$++;Au=aFilter.AOl(Au);}return I$;},AOe:function(){var Be=
this.Mm();var US=A._NewObject(C.AnimalTypeFilterCriterion,0);US.Initialize(14,0,
1,true);Be.CV(US);return Be;},ACz:function(){var B;var A3K;var JW=this.Bih();A3K=(((
B=A._GetAutoObject(C.Converter).Aqc(JW))<0)?B+0x10000000000000000:B)*this.Apy(12
);if((JW===10)&&(A._GetAutoObject(C.Device).Un>0)){var Byr=A._GetAutoObject(C.Helper
).R$(A._GetAutoObject(C.Device).Un,10,2)*this.Apy(8);A3K+=Byr;}return A3K;},Bih:
function(){var JW=0;if(A._GetAutoObject(C.Device).Un>0)JW=A._GetAutoObject(C.Converter
).ZG(A._GetAutoObject(C.Device).Un);if(!JW)JW=A._GetAutoObject(C.Converter).A62(
A._GetAutoObject(C.Device).Language);return JW;},AQE:function(W9){var Aii=A._GetAutoObject(
C.Device).Ao.Ad2(26,W9);return Aii;},AjR:function(Afw){switch(Afw){case 0:case 1:
case 2:case 3:case 4:case 5:return false;case 6:case 7:case 8:case 9:case 10:return true;
default:throw new Error(AVD+Afw.toFixed());}},Bgl:function(Ri,EI){var GM=0;switch(
Ri){case 1:GM=A._GetAutoObject(C.Helper).AnO(EI.TransponderId);break;case 0:if(!
A._GetAutoObject(C.Device).EartagNrAssignmentMode)GM=A._GetAutoObject(C.Device).
AjI;else switch(EI.Gender){case 0:GM=A._GetAutoObject(C.Device).AqF;break;case 1:
GM=A._GetAutoObject(C.Device).AqE;break;case 2:GM=A._GetAutoObject(C.Device).AjI;
break;default:throw new Error(AG7+EI.Gender.toFixed());}break;default:throw new Error(
AVE+Ri.toFixed());}return GM;},BhP:function(){var B;var Azr=(((((((A.aaR(A.acf.Ahr
)+A.aaR(A.acf.Colon))+O2)+A._GetAutoObject(C.Device).Ahr)+AxI)+A.aaR(A.acf.Bng))+
A.aaR(A.acf.Colon))+O2)+A._GetAutoObject(A.acj.KG).BhN(((B=A._GetAutoObject(C.Device
).QS.Timestamp)<0)?B+0x100000000:B);return Azr;},BhQ:function(){var B;var Azr=((((((((((((((((((((((((((((
AVF+A._GetAutoObject(C.Device).RQ.ADF.toFixed())+Lt)+A._GetAutoObject(C.Device).
RQ.ADM.toFixed())+Lt)+A._GetAutoObject(C.Device).RQ.AFZ.toFixed())+Ob)+A._GetAutoObject(
C.Device).RQ.ABR)+Ob)+A._GetAutoObject(A.acj.KG).AjA(((B=A._GetAutoObject(C.Device
).RQ.Timestamp)<0)?B+0x100000000:B))+O2)+AVG)+A._GetAutoObject(C.Device).Sq.ADF.
toFixed())+Lt)+A._GetAutoObject(C.Device).Sq.ADM.toFixed())+Lt)+A._GetAutoObject(
C.Device).Sq.AFZ.toFixed())+Ob)+A._GetAutoObject(C.Device).Sq.ABR)+Ob)+A._GetAutoObject(
A.acj.KG).AjA(((B=A._GetAutoObject(C.Device).Sq.Timestamp)<0)?B+0x100000000:B))+
O2)+AVH)+A._GetAutoObject(C.Helper).Bik())+Ob)+A._GetAutoObject(C.Device).GetCommitHash(
))+Ob)+A._GetAutoObject(C.Device).GetCommitCount().toFixed())+Ob)+A._GetAutoObject(
A.acj.KG).AjA(A._GetAutoObject(C.Device).GetCommitEpoch());return Azr;},BhO:function(
){var B;var Azr=(((((((((((((((((((((AVI+A._GetAutoObject(C.Device).QS.AQ3.toFixed(
))+Lt)+A._GetAutoObject(C.Device).QS.AQ4.toFixed())+Lt)+A._GetAutoObject(C.Device
).QS.AQ2.toFixed())+O2)+A.aaR(A.acf.A59))+A.aaR(A.acf.Colon))+Oa)+A._GetAutoObject(
A.acj.KG).AjA(((B=A._GetAutoObject(C.Device).QS.Timestamp)<0)?B+0x100000000:B))+
AxI)+AVJ)+A._GetAutoObject(C.Device).SN.AUO.toFixed())+Lt)+A._GetAutoObject(C.Device
).SN.AUP.toFixed())+Lt)+A._GetAutoObject(C.Device).SN.AUN.toFixed())+O2)+A.aaR(A.
acf.A59))+A.aaR(A.acf.Colon))+Oa)+A._GetAutoObject(A.acj.KG).AjA(((B=A._GetAutoObject(
C.Device).SN.Timestamp)<0)?B+0x100000000:B);return Azr;},A6t:function(A0o){var B;
var P;var AAp=A.jV;for(P=1;P<=A0o;P=P+1)if(!!A.abz(0,2))AAp=AAp+String.fromCharCode(
A.abz(97,104)&0xFFFF);else AAp=AAp+String.fromCharCode(A.abz(48,57)&0xFFFF);return AAp;
},Aa_:function(Eh){var AyH=0;if(Eh===1)Eh=0;var Bb3=this.Agn.Au3(Eh);if(Bb3>=0)AyH=
this.Afi.Get(Bb3);return AyH;},ACB:function(Eh){var FO=0;var AA1=this.Agn.Au3(Eh
);if(AA1>=0)FO=this.Afh.Get(AA1);return FO;},ACA:function(Eh){var FO=0;var AA1=this.
Agn.Au3(Eh);if(AA1>=0)FO=this.Afg.Get(AA1);return FO;},A6k:function(){var Be=this.
Mm();var US=A._NewObject(C.AnimalTypeFilterCriterion,0);US.Initialize(14,0,A._GetAutoObject(
C.Device).ACa,true);Be.CV(US);return Be;},AQH:function(JU){var BO=Math.trunc(JU/
1000000000000)|0;if(!BO)return 0;else if(BO>=900)return 1;else if(!A._GetAutoObject(
C.Converter).AM5(BO))return 2;else return 3;},A6x:function(){var Be=A._GetAutoObject(
C.Helper).ACt();var AfB=A._GetAutoObject(C.Helper).A6f(3,A._GetAutoObject(C.Device
).ADI);AfB.Ys=true;Be.CV(AfB);return Be;},A6f:function(D9,Ba8){var Au=A._NewObject(
C.UInt32FilterCriterion,0);Au.EE=4;switch(D9){case 2:{Au.Operator=3;Au.A5=A._GetAutoObject(
C.Helper).Zw(Ba8);}break;case 3:{Au.Operator=2;Au.A5=A._GetAutoObject(C.Helper).
Zw(Ba8-1);}break;default:A.ab5("%s%e",AVK,D9);}return Au;},Bik:function(){return(((
A._GetAutoObject(C.Device).GetVersionMajor().toFixed()+Lt)+A._GetAutoObject(C.Device
).GetVersionMinor().toFixed())+Lt)+A._GetAutoObject(C.Device).GetVersionRev().toFixed(
);},Bgm:function(Ri,EI){var GM=0;switch(Ri){case 0:GM=EI.VisualId;break;case 2:GM=
A._GetAutoObject(C.Helper).AnO(EI.TransponderId);break;case 1:if(!A._GetAutoObject(
C.Device).EartagNrAssignmentMode)GM=A._GetAutoObject(C.Device).AjI;else switch(EI.
Gender){case 0:GM=A._GetAutoObject(C.Device).AqF;break;case 1:GM=A._GetAutoObject(
C.Device).AqE;break;case 2:GM=A._GetAutoObject(C.Device).AjI;break;default:throw new
Error(AG7+EI.Gender.toFixed());}break;default:throw new Error(AVL+Ri.toFixed());
}return GM;},A$l:function(){var B;var IL=null;var S$=0;if(!A._GetAutoObject(C.Device
).EartagNrAssignmentMode){IL=[B=A._GetAutoObject(C.Device),B.Ana,B.Aoh];S$=A._GetAutoObject(
C.Device).AuD;}else switch(A._GetAutoObject(C.Helper).W.Gender){case 1:{IL=[B=A.
_GetAutoObject(C.Device),B.AvM,B.Ayf];S$=A._GetAutoObject(C.Device).AB4;}break;case
0:{IL=[B=A._GetAutoObject(C.Device),B.AvN,B.Ayg];S$=A._GetAutoObject(C.Device).AB5;
}break;case 2:{IL=[B=A._GetAutoObject(C.Device),B.Ana,B.Aoh];S$=A._GetAutoObject(
C.Device).AuD;}break;default:;}if(!!IL)switch(S$){case 1:IL[2].call(IL[0],A._GetAutoObject(
C.Helper).W.VisualId-1);break;case 0:IL[2].call(IL[0],A._GetAutoObject(C.Helper).
W.VisualId+1);break;default:;}},A60:function(W9,EI){return(EI.NaisId!==W9)&&this.
AQE(W9);},BiP:function(I9,EI){return(EI.TransponderId!==I9)&&this.AQG(I9);},AOc:
function(){var Be=A._GetAutoObject(C.Helper).A6v();var AzM=A._NewObject(C.UInt64FilterCriterion
,0);AzM.Initialize(35,5,0,true);Be.CV(AzM);return Be;},AOn:function(){var Be=A._GetAutoObject(
C.Helper).A6v();var AzM=A._NewObject(C.UInt64FilterCriterion,0);AzM.Initialize(35
,0,0,true);Be.CV(AzM);return Be;},Mz:function(A0e,AhQ){A0e.Aj(AhQ);A0e.Ar(AhQ);A0e.
Y(AhQ);},AMY:function(AhS){var B;var Aa;var A2k=false;var Xd=AhS.TH(null,0x1);while(
!!Xd&&(((B=Xd)?B.__proto__:null)!==A.Core.Z)){Aa=(A.kR.Cl.isPrototypeOf(Xd)?Xd:null
);if(!!Aa){Aa.Bi(A2k);A2k=!A2k;}Xd=AhS.TH(Xd,0x1);}},Bnz:function(I9){var Ah3=A.
_GetAutoObject(C.Device).Ao.Filter;A._GetAutoObject(C.Device).Ao.Bl(null);var A3s=
A._GetAutoObject(C.Device).Ao.AgF(22,I9);A._GetAutoObject(C.Device).Ao.SC(A3s,22
,0);A._GetAutoObject(C.Device).Ao.Bl(Ah3);},A6i:function(As2){var Be=null;switch(
As2){case 0:Be=this.Bh7();break;case 1:Be=this.ACt();break;default:throw new Error(
AxJ+As2.toFixed());}return Be;},Bh7:function(){var Be=A._GetAutoObject(C.Helper).
Mm();var AfB=this.A6f(2,100);Be.CV(AfB);return Be;},Bxm:function(As2){var Ah3=A.
_GetAutoObject(C.Device).Ao.Filter;A._GetAutoObject(C.Device).Ao.Bl(this.A6i(As2
));var P;for(P=0;P<A._GetAutoObject(C.Device).Ao.Cd();P++)A._GetAutoObject(C.Device
).Ao.My(P,10,false);A._GetAutoObject(C.Device).Ao.Bl(Ah3);},Bh8:function(As2){var
Ah3=A._GetAutoObject(C.Device).Ao.Filter;A._GetAutoObject(C.Device).Ao.Bl(this.A6i(
As2));var F0=A._GetAutoObject(C.Device).Ao.Cd();A._GetAutoObject(C.Device).Ao.Bl(
Ah3);return F0;},Aq_:function(){return this.Ur;},A8H:function(){return this.Aho;
},Bko:function(){return this.ATX;},Bkp:function(){return this.ATY;},Bks:function(
){return this.AGn;},_Init:function(aArg){C.Amu._Init.call(this,aArg);C.Animal._Init.
call(this.W={I:this},0);A.Core.Bw._Init.call(this.Av={I:this},0);A.acl.Gc._Init.
call(this.KB={I:this},0);A.acl.Gc._Init.call(this.SG={I:this},0);C.AL_._Init.call(
this.AdG={I:this},0);C.AUD._Init.call(this.Ux={I:this},0);C.AUC._Init.call(this.
Uw={I:this},0);C.Tz._Init.call(this.Ad4={I:this},0);C.AVe._Init.call(this.Afh={I:
this},0);C.AVd._Init.call(this.Afg={I:this},0);C.AVc._Init.call(this.Aff={I:this
},0);C.AVg._Init.call(this.Afi={I:this},0);C.AL$._Init.call(this.Agn={I:this},0);
this.__proto__=C.HelperClass;var B;this.KB.HI(1);this.KB.Fi(3000);this.KB.B3=100;
this.SG.Awc(10);this.SG.Wo(5);this.SG.HI(1);this.SG.Fi(4000);this.Ad4.B3=false;this.
Ad4.Cu=true;this.Ad4.HI(1);this.Ad4.Fi(100);this.KB.Sr=[this,this.BA$];this.KB.Q=[
this,this.Bks,this.BmP];this.SG.Sr=[this,this.BBb];this.SG.Q=[B=A._GetAutoObject(
C.Device),B.AEa,B.AIm];this.Ad4.Q=[B=A._GetAutoObject(C.Device),B.AEb,B.AIn];this.
Init(aArg);var Lu=this._variants();if(Lu){this.K={};Lu._Init.call(this,aArg);}},
_Done:function(){if(this.K)this.K._Done.call(this);this.__proto__=C.Amu;this.W._Done(
);this.Av._Done();this.KB._Done();this.SG._Done();this.AdG._Done();this.Ux._Done(
);this.Uw._Done();this.Ad4._Done();this.Afh._Done();this.Afg._Done();this.Aff._Done(
);this.Afi._Done();this.Agn._Done();C.Amu._Done.call(this);},_ReInit:function(){
C.Amu._ReInit.call(this);this.W._ReInit();this.Av._ReInit();this.KB._ReInit();this.
SG._ReInit();this.AdG._ReInit();this.Ux._ReInit();this.Uw._ReInit();this.Ad4._ReInit(
);this.Afh._ReInit();this.Afg._ReInit();this.Aff._ReInit();this.Afi._ReInit();this.
Agn._ReInit();if(this.K)this.K._ReInit.call(this);},_Mark:function(D){var B;C.Amu.
_Mark.call(this,D);if((B=this.Ur)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.
Aho)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.ATX)&&(B._cycle!=D))B._Mark(B.
_cycle=D);if((B=this.ATY)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.W)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.Av)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
KB)._cycle!=D)B._Mark(B._cycle=D);if((B=this.SG)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.AdG)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ux)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Uw)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ad4)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Afh)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Afg)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.Aff)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
Afi)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Agn)._cycle!=D)B._Mark(B._cycle=D);
if(this.K)this.K._Mark(D);},_variants:function(){return A.acr.HelperClass._variants(
);},K:null,_className:"Device::HelperClass"};C.Helper={_Init:function(){C.HelperClass.
_Init.call(this,0);},_ReInit:function(){},_variants:function(){return this;},_this:
null};C.BoolFilterCriterion={A5:false,Aa3:function(){var Au=A._NewObject(C.BoolFilterCriterion
,0);Au.Fc(this);return Au;},Fc:function(AH){C.FilterCriterion.Fc.call(this,AH);var
Au=(C.BoolFilterCriterion.isPrototypeOf(AH)?AH:null);if(!!Au)this.A5=Au.A5;},Initialize:
function(A4,D9,A6,P7){this.EE=A4;this.Operator=D9;this.A5=A6;this.Ys=P7;return this;
},_Init:function(aArg){C.FilterCriterion._Init.call(this,aArg);this.__proto__=C.
BoolFilterCriterion;},_className:"Device::BoolFilterCriterion"};C.UInt32FilterCriterion={
A5:0,Aa3:function(){var Au=A._NewObject(C.UInt32FilterCriterion,0);Au.Fc(this);return Au;
},Fc:function(AH){C.FilterCriterion.Fc.call(this,AH);var Au=(C.UInt32FilterCriterion.
isPrototypeOf(AH)?AH:null);if(!!Au)this.A5=Au.A5;},Initialize:function(A4,D9,A6,
P7){this.EE=A4;this.Operator=D9;this.A5=A6;this.Ys=P7;return this;},_Init:function(
aArg){C.FilterCriterion._Init.call(this,aArg);this.__proto__=C.UInt32FilterCriterion;
},_className:"Device::UInt32FilterCriterion"};C.OverlayMenu={None:0,Home:1,AutoAction:
2,MenuItemSettings:3,RatingSettings:4,WeighingSettings:5,Options:6,AnimalSearch:
7,ActionSettings:8,MeasurementReady:9,AnimalMultiInfoMenu:10,AnimalSearchUnfiltered:
11,AnimalSearchDriedOff:12,MassRecordingMenu:13,MassRecordingDefaults:14,MassRecordingFields:
15,PurchasedAnimalsListMenu:16,BirthRegistrationsListMenu:17,LAST:18};C.EnumToString={
BS:function(A8){throw new Error(Asw+A8.toFixed());},Lr:function(A8){return this.
BS(A8);},_Init:function(aArg){this.__proto__=C.EnumToString;A.h7++;},_Done:function(
){this.__proto__=null;A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((
B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:
"Device::EnumToString"};C.ScreenTypeToString={BS:function(A8){var AJp=A8;var Bs;
switch(AJp){case 3:Bs=A.aaR(A.acf.Au8);break;case 34:Bs=A.aaR(A.acf.To);break;case
35:Bs=A.aaR(A.acf.Tp);break;case 47:Bs=A.aaR(A.acf.AOb);break;default:Bs=this.BoY(
A8);}return Bs;},BoY:function(A8){var AJp=A8;var Bs=A.jV;switch(AJp){case 0:Bs=Asx;
break;case 2:Bs=AVM;break;case 4:Bs=AVN;break;case 40:Bs=AVO;break;case 39:Bs=AVP;
break;case 72:Bs=AG8;break;case 73:Bs=AVQ;break;case 93:Bs=AG9;break;case 94:Bs=
AG_;break;case 104:Bs=AG$;break;case 105:Bs=AVR;break;case 74:Bs=AHa;break;case 3:
Bs=AHb;break;case 6:Bs=AVS;break;case 16:Bs=Rf;break;case 22:Bs=W0;break;case 46:
Bs=AVT;break;case 100:Bs=AVU;break;case 99:Bs=AVV;break;case 101:Bs=AVW;break;case
17:Bs=AVX;break;case 23:Bs=AVY;break;case 18:Bs=AVZ;break;case 19:Bs=AhI;break;case
38:Bs=AHc;break;case 87:Bs=AV0;break;case 1:Bs=AV1;break;case 5:Bs=AHd;break;case
7:Bs=AHe;break;case 92:Bs=AxK;break;case 8:Bs=P4;break;case 9:Bs=AV2;break;case 41:
Bs=AV3;break;case 42:Bs=AV4;break;case 24:Bs=Asy;break;case 10:Bs=AV5;break;case
68:Bs=AV6;break;case 21:Bs=AV7;break;case 11:Bs=AV8;break;case 29:Bs=AV9;break;case
54:Bs=AV_;break;case 30:Bs=Asz;break;case 12:Bs=AV$;break;case 13:Bs=AWa;break;case
14:Bs=AWb;break;case 15:Bs=AWc;break;case 78:Bs=AWd;break;case 79:Bs=AWe;break;case
20:Bs=AWf;break;case 37:Bs=AWg;break;case 43:Bs=AWh;break;case 44:Bs=AWi;break;case
45:Bs=AHf;break;case 25:Bs=AkU;break;case 75:Bs=AWj;break;case 67:Bs=AWk;break;case
66:Bs=AWl;break;case 64:Bs=AxL;break;case 65:Bs=AkV;break;case 77:Bs=AhJ;break;case
76:Bs=AxM;break;case 95:Bs=An7;break;case 88:Bs=AhK;break;case 26:Bs=AWm;break;case
28:Bs=AxN;break;case 27:Bs=AHg;break;case 31:Bs=Afp;break;case 89:Bs=AHh;break;case
34:Bs=ZZ;break;case 35:Bs=AkW;break;case 32:Bs=An8;break;case 50:Bs=AWn;break;case
55:Bs=AWo;break;case 63:Bs=AWp;break;case 62:Bs=AWq;break;case 33:Bs=AWr;break;case
36:Bs=AsA;break;case 56:Bs=AHi;break;case 86:Bs=AHj;break;case 57:Bs=AWs;break;case
47:Bs=AWt;break;case 49:Bs=AWu;break;case 48:Bs=AWv;break;case 69:Bs=AWw;break;case
71:Bs=AWx;break;case 70:Bs=AWy;break;case 51:Bs=AWz;break;case 53:Bs=AWA;break;case
52:Bs=AWB;break;case 96:Bs=AWC;break;case 98:Bs=AxO;break;case 97:Bs=AHk;break;case
80:Bs=AHl;break;case 82:Bs=AHm;break;case 81:Bs=AHn;break;case 85:Bs=AHo;break;case
84:Bs=AHp;break;case 83:Bs=AWD;break;case 58:Bs=AWE;break;case 60:Bs=AWF;break;case
59:Bs=AWG;break;case 61:Bs=AWH;break;case 90:Bs=AWI;break;case 91:Bs=AWJ;break;case
102:Bs=AxP;break;case 103:Bs=AHq;break;default:throw new Error(AWK+AJp.toFixed()
);}return Bs;},_Init:function(aArg){C.EnumToString._Init.call(this,aArg);this.__proto__=
C.ScreenTypeToString;},_className:"Device::ScreenTypeToString"};C.OverlayMenuToString={
BS:function(A8){var BeN=A8;var Oo=A.jV;switch(BeN){case 0:Oo=AHr;break;case 1:Oo=
AHb;break;case 8:Oo=AhL;break;case 2:Oo=W1;break;case 3:Oo=AWL;break;case 4:Oo=Z0;
break;case 5:Oo=AWM;break;case 6:Oo=AWN;break;case 7:Oo=An9;break;case 11:Oo=Afq;
break;case 12:Oo=AkX;break;case 9:Oo=AHs;break;case 10:Oo=AWO;break;case 14:Oo=O3;
break;case 15:Oo=AWP;break;case 13:Oo=AWQ;break;case 16:Oo=AWR;break;case 17:Oo=
AWS;break;default:throw new Error(AHt+BeN.toFixed());}return Oo;},_Init:function(
aArg){C.EnumToString._Init.call(this,aArg);this.__proto__=C.OverlayMenuToString;
},_className:"Device::OverlayMenuToString"};C.ScanStateToString={BS:function(A8){
var Bfk=A8;var Bq=A.jV;switch(Bfk){case 4:Bq=AsB;break;case 0:Bq=AxQ;break;case 2:
Bq=AWT;break;case 3:Bq=AWU;break;case 1:Bq=AHu;break;default:throw new Error(AHv+
Bfk.toFixed());}return Bq;},_Init:function(aArg){C.EnumToString._Init.call(this,
aArg);this.__proto__=C.ScanStateToString;},_className:"Device::ScanStateToString"
};C.MeasureStateToString={BS:function(A8){var Bdu=A8;var Bq=A.jV;switch(Bdu){case
4:Bq=AsB;break;case 0:Bq=AxQ;break;case 2:Bq=AWV;break;case 1:Bq=AHu;break;case 3:
Bq=AHw;break;default:throw new Error(AWW+Bdu.toFixed());}return Bq;},_Init:function(
aArg){C.EnumToString._Init.call(this,aArg);this.__proto__=C.MeasureStateToString;
},_className:"Device::MeasureStateToString"};C.TemperatureUnit={Celsius:0,Fahrenheit:
1,LAST:2};C.TemperatureUnitToString={BS:function(A8){var BfF=A8;var ApP=A.jV;switch(
BfF){case 0:ApP=A.aaR(A.acf.Bpf);break;case 1:ApP=A.aaR(A.acf.Bpg);break;default:
throw new Error(AHx+BfF.toFixed());}return ApP;},_Init:function(aArg){C.EnumToString.
_Init.call(this,aArg);this.__proto__=C.TemperatureUnitToString;},_className:"Device::TemperatureUnitToString"
};C.AnimalType={DairyCalf:0,DairyCow:1,SheepLamb:2,LAST:3};C.AnimalTypeToString={
BS:function(A8){var AKz=A8;var type=A.jV;switch(AKz){case 0:type=A.aaR(A.acf.BgO
);break;case 1:type=A.aaR(A.acf.Bg1);break;case 2:type=A.aaR(A.acf.BiX);break;default:
throw new Error(AWX+AKz.toFixed());}return type;},_Init:function(aArg){C.EnumToString.
_Init.call(this,aArg);this.__proto__=C.AnimalTypeToString;},_className:"Device::AnimalTypeToString"
};C.Language={Default:0,German:1,Spanish:2,French:3,Italian:4,Finnish:5,Chinese_TW:
6,Turkish:7,Greek:8,Russian:9,Dutch:10,Czech:11,Estonian:12,Bulgarian:13,Bosnian:
14,Norwegian:15,Ukrainian:16,LAST:17};C.LanguageToString={BS:function(A8){var AzF=
A8;var O9=A.jV;switch(AzF){case 0:O9=AHy;break;case 10:O9=AHz;break;case 1:O9=AxR;
break;case 12:O9=AWY;break;case 5:O9=AWZ;break;case 3:O9=AW0;break;case 8:O9=AW1;
break;case 13:O9=AW2;break;case 4:O9=AW3;break;case 9:O9=AW4;break;case 2:O9=AW5;
break;case 7:O9=AsC;break;case 6:O9=AsD;break;case 11:O9=AHA;break;case 14:O9=AW6;
break;case 15:O9=AW7;break;case 16:O9=AW8;break;default:throw new Error(AHB+AzF.
toFixed());}return O9;},Lr:function(A8){var AzF=A8;var Dl=A.jV;switch(AzF){case 0:
Dl=AW9;break;case 10:Dl=WX;break;case 1:Dl=Rd;break;case 12:Dl=AW_;break;case 5:
Dl=UL;break;case 3:Dl=WR;break;case 8:Dl=AW$;break;case 13:Dl=WN;break;case 4:Dl=
WS;break;case 9:Dl=UM;break;case 2:Dl=ZW;break;case 7:Dl=ZY;break;case 6:Dl=AXa;
break;case 11:Dl=AXb;break;case 14:Dl=AXc;break;case 15:Dl=SZ;break;case 16:Dl=JR;
break;default:throw new Error(AHB+AzF.toFixed());}return Dl;},_Init:function(aArg
){C.EnumToString._Init.call(this,aArg);this.__proto__=C.LanguageToString;},_className:
"Device::LanguageToString"};C.Gender={Male:0,Female:1,Unknown:2,LAST:3};C.BirthType={
Single:0,Twins:1,Triplets:2,Quadruplets:3,LAST:4};C.GenderToString={BS:function(
A8){var Atp=A8;var AJH=A.jV;switch(Atp){case 0:AJH=A.aaR(A.acf.Male);break;case 1:
AJH=A.aaR(A.acf.Female);break;case 2:AJH=A.aaR(A.acf.Unknown);break;default:throw new
Error(AXd+Atp.toFixed());}return AJH;},_Init:function(aArg){C.EnumToString._Init.
call(this,aArg);this.__proto__=C.GenderToString;},_className:"Device::GenderToString"
};C.BirthTypeToString={BS:function(A8){var type=A8;var AfF=A.jV;switch(type){case
0:AfF=A.aaR(A.acf.Boa);break;case 1:AfF=A.aaR(A.acf.Bpb);break;case 2:AfF=A.aaR(
A.acf.Triplets);break;case 3:AfF=A.aaR(A.acf.Quadruplets);break;default:throw new
Error(AXe+type.toFixed());}return AfF;},_Init:function(aArg){C.EnumToString._Init.
call(this,aArg);this.__proto__=C.BirthTypeToString;},_className:"Device::BirthTypeToString"
};C.SyncState={Idle:0,Init:1,Exporting:2,ImportStart:3,Importing:4,ImportFinish:
5,Ready:6,Error:7,LAST:8};C.SyncStateToString={BS:function(A8){var Bfz=A8;var Bq=
A.jV;switch(Bfz){case 7:Bq=AsB;break;case 0:Bq=AxQ;break;case 6:Bq=AHw;break;case
2:Bq=AXf;break;case 5:Bq=AXg;break;case 3:Bq=AXh;break;case 4:Bq=AXi;break;case 1:
Bq=AXj;break;default:throw new Error(AXk+Bfz.toFixed());}return Bq;},_Init:function(
aArg){C.EnumToString._Init.call(this,aArg);this.__proto__=C.SyncStateToString;},
_className:"Device::SyncStateToString"};C.RatedAttributeToString={BS:function(A8
){var AAq=A8;switch(AAq){case 0:return A.jV;case 1:return A.aaR(A.acf.Bno);case 4:
return A.aaR(A.acf.Bnn);case 3:return A.aaR(A.acf.Bnp);case 2:return A.aaR(A.acf.
Bnm);default:throw new Error(AxS+AAq.toFixed());}},Lr:function(A8){var AAq=A8;switch(
AAq){case 0:return A.jV;case 1:return A.aaR(A.acf.Feed);case 4:return A.aaR(A.acf.
AFR);case 3:return A.aaR(A.acf.AFS);case 2:return A.aaR(A.acf.AFP);default:throw new
Error(AxS+AAq.toFixed());}},_Init:function(aArg){C.EnumToString._Init.call(this,
aArg);this.__proto__=C.RatedAttributeToString;},_className:"Device::RatedAttributeToString"
};C.AssesmentToString={BS:function(A8){var Ak_=A8;var AyO=A.jV;switch(Ak_){case 0:
case 5:AyO=A.jV;break;case 3:AyO=A.aaR(A.acj.Bog);break;case 2:AyO=A.aaR(A.acj.Boi
);break;case 1:AyO=A.aaR(A.acj.Boh);break;default:throw new Error(AHC+Ak_.toFixed(
));}return AyO;},_Init:function(aArg){C.EnumToString._Init.call(this,aArg);this.
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
7,ClosedWithNo:8,Opened:9};C.PopupContext={AFC:null,Akr:A.jV,AkL:0,PopupState:1,
Id:0,Show:false,Bmy:function(E){var B;if(this.PopupState===E)return;this.PopupState=
E;if(!!this.AFC)(B=this.AFC)?B[1].call(B[0],this):null;},_Init:function(aArg){this.
__proto__=C.PopupContext;A.h7++;},_Done:function(){this.__proto__=null;A.h7--;},
_ReInit:function(){},_Mark:function(D){var B;if((B=this.AFC)&&((B=B[0])._cycle!=
D))B._Mark(B._cycle=D);if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null
,_cycle:0,_observers:null,_className:"Device::PopupContext"};C.Boolean={No:0,Yes:
1,LAST:2};C.BooleanToYesNo={BS:function(A8){switch(A8){case 0:return A.aaR(A.acf.
No);case 1:return A.aaR(A.acf.Yes);default:return AsE+A8.toFixed();}},_Init:function(
aArg){C.EnumToString._Init.call(this,aArg);this.__proto__=C.BooleanToYesNo;},_className:
"Device::BooleanToYesNo"};C.AnimalGroupTableFields={Id:0,GroupName:1};C.AnimalGroup={
GroupName:AG3,Id:0,EG:function(Ad,AI){var Hx=C.Row.EG.call(this,Ad,AI);if(Hx&&!!
AI){this.OnSetId(AI.CE(Ad,0));this.AEK(AI.VG(Ad,1));}return Hx;},Cn:function(AI){
var Hx=C.Row.Cn.call(this,AI);if(Hx&&!!AI){var Jc=AI.Oy();if(Jc<=0)A.ab5("%s",Acx
);else{if(this.AmP())this.CK=AI.Yp();AI.Hf(this.CK,0,this.Id);AI.Zo(this.CK,1,this.
GroupName);AI.OA(Jc);}}return Hx;},Gh:function(){C.Row.Gh.call(this);this.OnSetId(-
1);},He:function(){C.Row.He.call(this);this.OnSetId(0);this.AEK(A.jV);},OnSetId:
function(E){if(this.Id===E)return;this.Id=E;A.abo([this,this.QV,this.OnSetId],0);
},AEK:function(E){if(this.GroupName===E)return;this.GroupName=E;A.abo([this,this.
Bj6,this.AEK],0);},QV:function(){return this.Id;},Bj6:function(){return this.GroupName;
},_Init:function(aArg){C.Row._Init.call(this,aArg);this.__proto__=C.AnimalGroup;
this.TableId=3;},_className:"Device::AnimalGroup"};C.PopupIdToString={BS:function(
A8){var Adk=A8;var Aw=A.jV;var AJn;AJn=A.aaR(A.acf.Bpz)+O2;switch(Adk){case 0:Aw=
A.aaR(A.acf.Unknown);break;case 1:Aw=A.aaR(A.acf.SevereError);break;case 58:Aw=A.
aaR(A.acf.BhC);break;case 2:Aw=A.aaR(A.acf.BhA);break;case 3:Aw=A.aaR(A.acf.Bpl);
break;case 77:Aw=A._GetAutoObject(C.Helper).BhQ();break;case 78:Aw=A._GetAutoObject(
C.Helper).BhO();break;case 79:Aw=A._GetAutoObject(C.Helper).BhP();break;case 9:Aw=
A.aaR(A.acf.BpN);break;case 5:Aw=A.aaR(A.acf.SuccessDataSync);break;case 8:Aw=A.
aaR(A.acf.SuccessResetFactorySettings);break;case 34:Aw=A.aaR(A.acf.SuccessResetAnimalData
);break;case 10:Aw=A._GetAutoObject(C.Device).ACx();break;case 82:Aw=A.aaR(A.acf.
BhE);break;case 83:Aw=A.aaR(A.acf.BhF);break;case 80:Aw=A.aaR(A.acf.Bos);break;case
81:Aw=A.aaR(A.acf.SuccessRestoreBackup);break;case 91:Aw=A.aaR(A.acf.BgC);break;
case 92:Aw=A.aaR(A.acf.BnC);break;case 4:Aw=A.aaR(A.acf.WarningDataSync);break;case
7:Aw=A.aaR(A.acf.BpL);break;case 33:Aw=A.aaR(A.acf.WarningResetAnimalData);break;
case 6:Aw=A.aaR(A.acf.WarningRestart);break;case 27:Aw=A.aaR(A.acf.WarningNoActionDefined
);break;case 64:Aw=A.aaR(A.acf.WarningActionNotApplicable);break;case 28:Aw=A.aaR(
A.acf.WarningNoMenuItemVisible);break;case 29:Aw=A.aaR(A.acf.WarningEnterPresentationMode
);break;case 30:Aw=A.aaR(A.acf.WarningNoAnimalsRegistered);break;case 41:Aw=((AJn+
A.aaR(A.acf.AQ$))+O2)+A.aaR(A.acf.Bi$);break;case 50:Aw=((AJn+A.aaR(A.acf.AQ$))+
O2)+A.aaR(A.acf.Bjb);break;case 51:Aw=((AJn+A.aaR(A.acf.AQ$))+O2)+A.aaR(A.acf.Bja
);break;case 42:Aw=A.aaR(A.acf.BpJ);break;case 45:Aw=A.aaR(A.acf.BpD);break;case
46:Aw=A.aaR(A.acf.WarningNoValidCountryCode);break;case 57:Aw=A.aaR(A.acf.WarningOutdatedAnimalWeight
);break;case 52:Aw=A.aaR(A.acf.WarningOutdatedAnimalWeights);break;case 53:Aw=A.
aaR(A.acf.WarningWeightEvaluationSingular);break;case 56:Aw=A.aaR(A.acf.WarningWeightEvaluationPlural
);break;case 11:Aw=A.aaR(A.acf.ScanError);break;case 12:Aw=A.aaR(A.acf.ScanNotFound
);break;case 13:Aw=A.aaR(A.acf.Bgu);break;case 36:Aw=A.aaR(A.acf.Bo6);break;case
14:Aw=A.aaR(A.acf.AnimalNotFound);break;case 15:Aw=A.aaR(A.acf.SuccessUnregister
);break;case 35:Aw=A.aaR(A.acf.SuccessUnregisterPerished);break;case 26:Aw=A.aaR(
A.acf.SuccessCreationNewAnimal);break;case 23:Aw=A.aaR(A.acf.SuccessCreationNewAnimals
);break;case 24:Aw=A.aaR(A.acf.Bg4);break;case 49:Aw=A.aaR(A.acf.EvaluationInProgress
);break;case 16:Aw=A.aaR(A.acf.Bg_);break;case 17:Aw=A.aaR(A.acf.Bok);break;case
18:Aw=A.aaR(A.acf.Boy);break;case 19:Aw=A.aaR(A.acf.Bol);break;case 20:Aw=A.aaR(
A.acf.Boz);break;case 54:Aw=A.aaR(A.acf.Bot);break;case 55:Aw=A.aaR(A.acf.Bow);break;
case 21:Aw=A.aaR(A.acf.A$p);break;case 48:Aw=(A.aaR(A.acf.A$p)+O2)+A.aaR(A.acf.A5j
);break;case 22:Aw=A.aaR(A.acf.BpF);break;case 63:Aw=A.aaR(A.acf.BpG);break;case
85:Aw=A.aaR(A.acf.BpI);break;case 43:Aw=A.aaR(A.acf.BpH);break;case 25:Aw=A.aaR(
A.acf.A$a);break;case 47:Aw=(A.aaR(A.acf.A$a)+O2)+A.aaR(A.acf.A5j);break;case 107:
Aw=A.aaR(A.acf.Bph);break;case 31:{var ByS=(((((((((((((((((((A.aaR(A.acf.BgV)+AxI
)+A.aaR(A.acf.AM0))+A.aaR(A.acf.Colon))+Oa)+A.aaR(A.acf.BgX))+O2)+A.aaR(A.acf.AN2
))+A.aaR(A.acf.Colon))+Oa)+A.aaR(A.acf.BhK))+O2)+A.aaR(A.acf.ATH))+A.aaR(A.acf.Colon
))+Oa)+A.aaR(A.acf.Bnr))+O2)+A.aaR(A.acf.ATG))+A.aaR(A.acf.Colon))+Oa)+A.aaR(A.acf.
Bnq);Aw=ByS;}break;case 32:Aw=A.aaR(A.acf.Bo7);break;case 69:Aw=A.aaR(A.acf.Bjm);
break;case 44:Aw=A.aaR(A.acf.BpM);break;case 37:Aw=A.aaR(A.acf.WarningResetWeightSettings
);break;case 38:Aw=A.aaR(A.acf.WarningResetTempThresholds);break;case 39:Aw=A.aaR(
A.acf.Bnh);break;case 76:Aw=(A.aaR(A.acf.A4Y)+O2)+A.aaR(A.acf.ATJ);break;case 40:
Aw=A.aaR(A.acf.Bou);break;case 75:Aw=A.aaR(A.acf.Bom);break;case 59:Aw=A.aaR(A.acf.
QuestionAddAnotherCalfMultiples);break;case 62:Aw=A.aaR(A.acf.Boo);break;case 96:
Aw=A.aaR(A.acf.Bop);break;case 60:Aw=A.aaR(A.acf.Boq);break;case 98:Aw=A.aaR(A.acf.
Bor);break;case 61:Aw=A.aaR(A.acf.BoA);break;case 104:Aw=A.aaR(A.acf.BoB);break;
case 65:Aw=A.aaR(A.acf.SuccessClearAnimalLoss);break;case 66:Aw=A.aaR(A.acf.WarningNoActionsForAnimalLoss
);break;case 67:Aw=A.aaR(A.acf.SuccessLinkTransponder);break;case 106:Aw=A.aaR(A.
acf.Bon);break;case 86:Aw=A.aaR(A.acf.SuccessUnlinkTransponder);break;case 68:Aw=
A.aaR(A.acf.Bov);break;case 70:Aw=A.aaR(A.acf.BhG);break;case 71:Aw=A.aaR(A.acf.
BoE);break;case 72:Aw=A.aaR(A.acf.BoF);break;case 97:Aw=A.aaR(A.acf.BhI);break;case
100:Aw=A.aaR(A.acf.BoG);break;case 99:Aw=A.aaR(A.acf.BoH);break;case 88:Aw=A.aaR(
A.acf.BhH);break;case 89:Aw=A.aaR(A.acf.BoC);break;case 90:Aw=A.aaR(A.acf.BoD);break;
case 73:Aw=A.aaR(A.acf.WarningNoPremisesID);break;case 74:Aw=A.aaR(A.acf.WarningNoFlashDrivePresent
);break;case 94:Aw=A.aaR(A.acf.WarningNoBackupPathPresent);break;case 93:Aw=A.aaR(
A.acf.WarningNoBackupFilePresent);break;case 84:Aw=A.aaR(A.acf.BhX);break;case 87:
Aw=A.aaR(A.acf.BpP);break;case 95:Aw=A.aaR(A.acf.BpC);break;case 108:Aw=A.aaR(A.
acf.BpE);break;case 109:Aw=A.aaR(A.acf.SuccessMassDeregistration);break;case 102:
Aw=A.aaR(A.acf.WarningParsedDateInFutureInvalid);break;case 101:Aw=A.aaR(A.acf.WarningParsingDateFailed
);break;case 103:Aw=A.aaR(A.acf.WarningParsingNaisIdFailed);break;case 105:Aw=A.
aaR(A.acf.BpK);break;default:throw new Error(AxT+Adk.toFixed());}return Aw;},Lr:
function(A8){var Adk=A8;var Aw=A.jV;switch(Adk){case 0:Aw=AxU;break;case 1:Aw=AxV;
break;case 58:Aw=AHD;break;case 2:Aw=AXl;break;case 3:Aw=AHE;break;case 77:Aw=AXm;
break;case 78:Aw=AHF;break;case 79:Aw=AXn;break;case 9:Aw=AXo;break;case 5:Aw=AXp;
break;case 8:Aw=AXq;break;case 34:Aw=AXr;break;case 80:Aw=AXs;break;case 81:Aw=AXt;
break;case 91:Aw=AXu;break;case 92:Aw=AXv;break;case 82:Aw=AXw;break;case 83:Aw=
AXx;break;case 10:Aw=AXy;break;case 4:Aw=AxW;break;case 7:Aw=AXz;break;case 33:Aw=
AXA;break;case 6:Aw=AxX;break;case 27:Aw=AsF;break;case 64:Aw=UO;break;case 28:Aw=
AsG;break;case 29:Aw=AXB;break;case 30:Aw=AXC;break;case 41:Aw=AXD;break;case 50:
Aw=AHG;break;case 51:Aw=AXE;break;case 42:Aw=AHH;break;case 45:Aw=AXF;break;case
46:Aw=AXG;break;case 57:Aw=AXH;break;case 52:Aw=AsH;break;case 53:Aw=AXI;break;case
56:Aw=AXJ;break;case 11:Aw=AHI;break;case 12:Aw=AXK;break;case 13:Aw=AXL;break;case
36:Aw=AXM;break;case 14:Aw=AXN;break;case 15:Aw=AXO;break;case 35:Aw=Acz;break;case
26:Aw=AXP;break;case 23:Aw=AXQ;break;case 24:Aw=AXR;break;case 49:Aw=AHJ;break;case
16:Aw=AXS;break;case 17:Aw=AXT;break;case 18:Aw=AXU;break;case 19:Aw=AXV;break;case
20:Aw=AXW;break;case 54:Aw=AXX;break;case 55:Aw=AHK;break;case 21:Aw=AXY;break;case
48:Aw=AXZ;break;case 22:Aw=AX0;break;case 63:Aw=AHL;break;case 43:Aw=AHM;break;case
85:Aw=AX1;break;case 25:Aw=AX2;break;case 47:Aw=AX3;break;case 107:Aw=AX4;break;
case 31:Aw=Rg;break;case 32:Aw=AsI;break;case 69:Aw=AHN;break;case 44:Aw=AHO;break;
case 37:Aw=An_;break;case 38:Aw=An$;break;case 39:Aw=AxY;break;case 76:Aw=AX5;break;
case 40:Aw=AHP;break;case 75:Aw=AX6;break;case 59:Aw=AX7;break;case 62:Aw=AX8;break;
case 96:Aw=AX9;break;case 60:Aw=AX_;break;case 98:Aw=AX$;break;case 65:Aw=AYa;break;
case 61:Aw=AYb;break;case 104:Aw=AYc;break;case 66:Aw=AYd;break;case 67:Aw=AYe;break;
case 106:Aw=AYf;break;case 86:Aw=AYg;break;case 68:Aw=AYh;break;case 70:Aw=AYi;break;
case 71:Aw=AYj;break;case 72:Aw=AYk;break;case 97:Aw=Aoa;break;case 100:Aw=AHQ;break;
case 99:Aw=AYl;break;case 88:Aw=AHR;break;case 89:Aw=AHS;break;case 90:Aw=Z1;break;
case 73:Aw=AHT;break;case 74:Aw=AYm;break;case 94:Aw=AHU;break;case 93:Aw=AYn;break;
case 84:Aw=AxZ;break;case 87:Aw=AYo;break;case 95:Aw=AYp;break;case 108:Aw=Ax0;break;
case 109:Aw=AYq;break;case 102:Aw=AYr;break;case 101:Aw=AYs;break;case 103:Aw=AHV;
break;case 105:Aw=Aob;break;default:throw new Error(AxT+Adk.toFixed());}return Aw;
},_Init:function(aArg){C.EnumToString._Init.call(this,aArg);this.__proto__=C.PopupIdToString;
},_className:"Device::PopupIdToString"};C.PopupParamSeparator=";";C.RatingMode={
Basic:0,Extended:1,LAST:2};C.TransponderType={UNDEFINED:0,AnimalId:1,FarmId:2,GroupId:
3,PersonId:4,LAST:5};C.TransponderProtocol={UNDEFINED:0,FDX:1,HDX:2,HDX_URBAN:3,
LAST:4};C.TransponderTypeToString={BS:function(A8){var BfR=A8;var type=A.jV;switch(
BfR){case 1:type=AHW;break;case 2:type=AYt;break;case 3:type=AHX;break;case 4:type=
AHY;break;case 0:type=Asx;break;default:throw new Error(AkY+BfR.toFixed());}return type;
},_Init:function(aArg){C.EnumToString._Init.call(this,aArg);this.__proto__=C.TransponderTypeToString;
},_className:"Device::TransponderTypeToString"};C.TransponderProtocolToString={BS:
function(A8){var BfP=A8;var AAn=A.jV;switch(BfP){case 1:AAn=AYu;break;case 2:AAn=
Aoc;break;case 3:AAn=AYv;break;case 0:AAn=Asx;break;default:throw new Error(AHZ+
BfP.toFixed());}return AAn;},_Init:function(aArg){C.EnumToString._Init.call(this
,aArg);this.__proto__=C.TransponderProtocolToString;},_className:"Device::TransponderProtocolToString"
};C.Transponder={Id:0,TransponderProtocol:0,TransponderType:0,AS$:function(E){if(
this.TransponderType===E)return;this.TransponderType=E;A.abo([this,this.BkE,this.
AS$],0);},AS_:function(E){if(this.TransponderProtocol===E)return;this.TransponderProtocol=
E;A.abo([this,this.BkD,this.AS_],0);},OnSetId:function(E){if(this.Id===E)return;
this.Id=E;A.abo([this,this.QV,this.OnSetId],0);},AOp:function(){return A._GetAutoObject(
C.Converter).Bo5(this.Id);},Bh5:function(){return A._GetAutoObject(C.Converter).
Axl(this.Id);},BkE:function(){return this.TransponderType;},BkD:function(){return this.
TransponderProtocol;},QV:function(){return this.Id;},_Init:function(aArg){this.__proto__=
C.Transponder;A.h7++;},_Done:function(){this.__proto__=null;A.h7--;},_ReInit:function(
){},_Mark:function(D){var B;if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:
null,_cycle:0,_observers:null,_className:"Device::Transponder"};C.RatingModeToString={
BS:function(A8){var U3=A8;var Nn=A.jV;switch(U3){case 0:Nn=A.aaR(A.acf.Basic);break;
case 1:Nn=A.aaR(A.acf.Extended);break;default:throw new Error(AH0+U3.toFixed());
}return Nn;},_Init:function(aArg){C.EnumToString._Init.call(this,aArg);this.__proto__=
C.RatingModeToString;},_className:"Device::RatingModeToString"};C.TableRowsCount={
_Init:function(aArg){this.__proto__=C.TableRowsCount;A.h7++;},_Done:function(){this.
__proto__=null;A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((B=this.
I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:
"Device::TableRowsCount"};C.MassUnit={Kilogramm:0,Pound:1,LAST:2};C.MassUnitToString={
BS:function(A8){var Bdq=A8;var ApP=A.jV;switch(Bdq){case 0:ApP=A.aaR(A.acf.BiV);
break;case 1:ApP=A.aaR(A.acf.Pound);break;default:throw new Error(AYw+Bdq.toFixed(
));}return ApP;},_Init:function(aArg){C.EnumToString._Init.call(this,aArg);this.
__proto__=C.MassUnitToString;},_className:"Device::MassUnitToString"};C.MinWeightGain=
20;C.MaxWeightGain=2000;C.WeightGainStep=10;C.Int32ArrayWrapper={MB:10,Array:A.abi(
10,0,null),Zf:function(E){if(this.MB===E)return;if(E>10)throw new Error(AYx);this.
MB=E;},Set:function(aIndex,AK){if((aIndex<0)||(aIndex>=this.MB))throw new Error(
Ax1);this.Array.Set(aIndex,AK);},Get:function(aIndex){if((aIndex<0)||(aIndex>=this.
MB))throw new Error(Ax1);return this.Array.Get(aIndex);},AmE:function(){var Qo=0;
var P;for(P=0;P<this.MB;P=P+1)Qo=Qo+this.Get(P);return Qo;},toString:function(){
var A2i=this.Array.Get(0).toFixed();var P;for(P=1;P<this.MB;P=P+1)A2i=(A2i+Ob)+this.
Array.Get(P).toFixed();return A2i;},EG:function(aString){var Ht=aString.indexOf(
String.fromCharCode(0x2C),0);var A0_=A.jV;var P=0;while(P<10){if(aString===A.jV)
this.Array.Set(P,0);else{if(Ht===-1){A0_=aString;aString=A.jV;}else{A0_=A.abV(aString
,Ht);aString=A.ab1(aString,0,Ht+1);}this.Array.Set(P,A.wz(A0_,0,10));Ht=aString.
indexOf(String.fromCharCode(0x2C),0);}P=P+1;}if(aString!==A.jV)A.ab5("%s",AYy);}
,Cn:function(){},He:function(){var P;for(P=0;P<this.MB;P=P+1)this.Set(P,0);},Au3:
function(A6){var P=0;while(P<this.MB){if(this.Array.Get(P)===A6)return P;P=P+1;}
return-1;},Hn:function(){var P=0;var max=-1;while(P<this.MB){if(this.Array.Get(P
)>max)max=this.Array.Get(P);P=P+1;}return max;},_Init:function(aArg){(this.Array=[
]).__proto__=C.Int32ArrayWrapper.Array;this.__proto__=C.Int32ArrayWrapper;A.h7++;
},_Done:function(){this.__proto__=null;A.h7--;},_ReInit:function(){},_Mark:function(
D){var B;if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:
null,_className:"Device::Int32ArrayWrapper"};C.ActionToString={BS:function(A8){var
Ay_=A8;var E0=A.jV;switch(Ay_){case 4:E0=A.aaR(A.acf.Alarm);break;case 256:E0=A.
aaR(A.acf.Weighing);break;case 128:E0=A.aaR(A.acf.A5V);break;case 16:E0=A.aaR(A.
acf.ALR);break;case 1:E0=A.aaR(A.acf.Temperature);break;case 32:E0=A.aaR(A.acf.AnimalLoss
);break;case 2:E0=A.aaR(A.acf.Rating);break;case 8:E0=A.aaR(A.acf.ArK);break;case
64:E0=A.aaR(A.acf.Unregister);break;case 512:E0=A.aaR(A.acf.ARt);break;case 1024:
E0=A.aaR(A.acf.LinkTransponder);break;case 262144:E0=A.aaR(A.acf.UnlinkTransponder
);break;case 2048:E0=A.aaR(A.acf.To);break;case 4096:E0=A.aaR(A.acf.Calving);break;
case 8192:E0=A.aaR(A.acf.DryOff);break;case 16384:E0=A.aaR(A.acf.A69);break;case
32768:E0=A.aaR(A.acf.ABC);break;case 524288:E0=A.aaR(A.acf.ABE);break;case 65536:
E0=A.aaR(A.acf.Delete);break;case 131072:E0=A.aaR(A.acf.A6_);break;case 0:E0=A.aaR(
A.acf.A7w);break;default:throw new Error(AH1+Ay_.toFixed());}return E0;},Lr:function(
A8){var Ay_=A8;var E0=A.jV;switch(Ay_){case 4:E0=A.aaR(A.acf.Alarm);break;case 256:
E0=A.aaR(A.acf.Weighing);break;case 128:E0=A.aaR(A.acf.A5V);break;case 16:E0=A.aaR(
A.acf.ALR);break;case 1:E0=A.aaR(A.acf.Temperature);break;case 32:E0=A.aaR(A.acf.
AnimalLoss);break;case 2:E0=A.aaR(A.acf.Rating);break;case 8:E0=A.aaR(A.acf.ArK);
break;case 64:E0=A.aaR(A.acf.Unregister);break;case 512:E0=A.aaR(A.acf.ARt);break;
case 1024:E0=A.aaR(A.acf.LinkTransponder);break;case 262144:E0=A.aaR(A.acf.UnlinkTransponder
);break;case 2048:E0=A.aaR(A.acf.To);break;case 4096:E0=A.aaR(A.acf.Calving);break;
case 8192:E0=A.aaR(A.acf.DryOff);break;case 32768:E0=A.aaR(A.acf.ABC);break;case
524288:E0=A.aaR(A.acf.ABE);break;case 65536:E0=A.aaR(A.acf.Delete);break;case 16384:
case 131072:E0=A.aaR(A.acf.Bi3);break;case 0:E0=A.aaR(A.acf.A7w);break;default:throw new
Error(AH1+Ay_.toFixed());}return E0;},_Init:function(aArg){C.EnumToString._Init.
call(this,aArg);this.__proto__=C.ActionToString;},_className:"Device::ActionToString"
};C.ACTIONS_COUNT=19;C.PopupTimeout=2000;C.ITable={Filter:null,Id:2,CE:function(
Ad,A4){return 0;},VG:function(Ad,A4){return A.jV;},Aj_:function(G){A.we(this,0);
A.pe([this,this.D2],this);},HX:function(Ad,A4){return false;},HB:function(Ad,A4){
return this.Sb(Ad,A4);},OnSetId:function(E){if(this.Id===E)return;this.Id=E;},Cd:
function(){return 0;},Bl:function(E){if(this.Filter===E)return;this.Filter=E;A.abo([
this,this.Fg,this.Fk],0);},Fk:function(Aq){this.Bl(Aq);},IU:function(Ad,A4){var BAq=
this.VH(Ad,A4);return A._GetAutoObject(C.Converter).A$d(BAq);},VH:function(Ad,A4
){return 0;},Sb:function(Ad,A4){return 0;},A6u:function(Ad,A4){return this.CE(Ad
,A4);},Oy:function(){var Jc=0;var BBa=this.Id;return Jc;},OA:function(Aov){var Hx=
0;var BBa=this.Id;return Hx===1;},Yp:function(){return-1;},Zq:function(Ad,A4,C0){
return false;},Hf:function(Ad,A4,C0){return false;},Zp:function(Ad,A4,C0){return false;
},My:function(Ad,A4,C0){return false;},Zo:function(Ad,A4,C0){return false;},Ab9:
function(Ad,A4,C0){return this.Zp(Ad,A4,C0);},AkA:function(Ad,A4,C0){var BAr=A._GetAutoObject(
C.Converter).AdH(C0);return this.Zq(Ad,A4,BAr);},A_R:function(Ad,A4,C0){return this.
Hf(Ad,A4,C0);},AOi:function(Ad,A4){return this.CE(Ad,A4);},Bh3:function(Ad,A4){return this.
CE(Ad,A4);},BnW:function(Ad,A4,C0){return this.Hf(Ad,A4,C0);},BnS:function(Ad,A4
,C0){return this.Hf(Ad,A4,C0);},La:function(aColumn,A6){return-1;},AmC:function(
Ad,A4){return this.CE(Ad,A4);},BnQ:function(Ad,A4,C0){return this.Hf(Ad,A4,C0);}
,ACv:function(Ad,A4){return this.CE(Ad,A4);},AT4:function(Ad,A4,MJ){return this.
Hf(Ad,A4,MJ);},D2:function(G){this.Bxv();},Bxv:function(){return-1;},KJ:function(
Ad,A4){return 0;},SC:function(Ad,A4,C0){return false;},AgF:function(aColumn,A6){
return-1;},He:function(){return false;},Bh4:function(Ad,A4){var BAs=this.CE(Ad,A4
);return A._GetAutoObject(C.Converter).Bit(BAs);},Bh9:function(Ad,A4){return this.
CE(Ad,A4);},AOr:function(Ad,A4){return this.CE(Ad,A4);},BnU:function(Ad,A4,C0){var
BAt=A._GetAutoObject(C.Converter).A45(C0);return this.Hf(Ad,A4,BAt);},BnV:function(
Ad,A4,C0){return this.Hf(Ad,A4,C0);},Bn2:function(Ad,A4,C0){return this.Hf(Ad,A4
,C0);},Ajx:function(aColumn,A6){return false;},Ad2:function(aColumn,A6){return false;
},Big:function(Ad,A4){return this.CE(Ad,A4);},Bn0:function(Ad,A4,C0){return this.
Hf(Ad,A4,C0);},Lf:function(){return this.QB()>=this.HC();},HC:function(){return 0;
},Aa$:function(){return-1;},QB:function(){return 0;},Fg:function(){return this.Filter;
},_Init:function(aArg){this.__proto__=C.ITable;A.h7++;},_Done:function(){this.__proto__=
null;A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((B=this.Filter)&&(
B._cycle!=D))B._Mark(B._cycle=D);if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D
);},I:null,_cycle:0,_observers:null,_className:"Device::ITable"};C.MaxAutoActionsCount=
4;C.WeightRecordingMode={Automatic:0,Manual:1,LAST:2};C.WeightRecordingModeToString={
BS:function(A8){var U3=A8;var Nn=A.jV;switch(U3){case 0:Nn=A.aaR(A.acf.Automatic
);break;case 1:Nn=A.aaR(A.acf.Manual);break;default:throw new Error(AYz+U3.toFixed(
));}return Nn;},_Init:function(aArg){C.EnumToString._Init.call(this,aArg);this.__proto__=
C.WeightRecordingModeToString;},_className:"Device::WeightRecordingModeToString"
};C.BooleanToAutoOnOff={BS:function(A8){switch(A8){case 0:return A.aaR(A.acf.Off
);case 1:return A.aaR(A.acf.AaK);default:return AsE+A8.toFixed();}},_Init:function(
aArg){C.EnumToString._Init.call(this,aArg);this.__proto__=C.BooleanToAutoOnOff;}
,_className:"Device::BooleanToAutoOnOff"};C.WeightStep=100;C.WeightRecordingScope={
CurrentWeightOnly:0,BirthWeightOnly:1,BirthAndCurrentWeight:2,NoWeightRecording:
3,LAST:4};C.WeightRecordingScopeToString={BS:function(A8){var Bfl=A8;var AAB=A.jV;
switch(Bfl){case 0:AAB=A.aaR(A.acf.Bg6);break;case 1:AAB=A.aaR(A.acf.BgK);break;
case 2:AAB=A.aaR(A.acf.BgG);break;case 3:AAB=A.aaR(A.acf.Bjt);break;default:throw new
Error(AYA+Bfl.toFixed());}return AAB;},_Init:function(aArg){C.EnumToString._Init.
call(this,aArg);this.__proto__=C.WeightRecordingScopeToString;},_className:"Device::WeightRecordingScopeToString"
};C.BodyTemperature={Undertemperature:0,Normal:1,Elevated:2,Fever:3,LAST:4};C.JA={
XB:0,Temperature:1,Rating:2,Afe:3,BBO:4,BCs:5,BFa:6,BC7:7,BDW:8,BCF:9,BDU:10,BEk:
11,BEl:12,BFf:13,LAST:14};C.AnimalListContentToString={BS:function(A8){var BbT=A8;
var S6=A.jV;switch(BbT){case 0:S6=AYB;break;case 2:S6=AYC;break;case 1:S6=AYD;break;
case 3:S6=AYE;break;case 4:S6=AYF;break;case 5:S6=AYG;break;case 6:S6=AYH;break;
case 7:S6=AYI;break;case 8:S6=AYJ;break;case 9:S6=AYK;break;case 10:S6=AH2;break;
case 11:S6=Z2;break;case 12:S6=AYL;break;case 13:S6=Ax2;break;default:throw new Error(
AYM+BbT.toFixed());}return S6;},_Init:function(aArg){C.EnumToString._Init.call(this
,aArg);this.__proto__=C.AnimalListContentToString;},_className:"Device::AnimalListContentToString"
};C.GenderFilterCriterion={A5:0,Aa3:function(){var Au=A._NewObject(C.GenderFilterCriterion
,0);Au.Fc(this);return Au;},Fc:function(AH){C.FilterCriterion.Fc.call(this,AH);var
Au=(C.GenderFilterCriterion.isPrototypeOf(AH)?AH:null);if(!!Au)this.A5=Au.A5;},_Init:
function(aArg){C.FilterCriterion._Init.call(this,aArg);this.__proto__=C.GenderFilterCriterion;
},_className:"Device::GenderFilterCriterion"};C.AnimalTypeFilterCriterion={A5:0,
Aa3:function(){var Au=A._NewObject(C.AnimalTypeFilterCriterion,0);Au.Fc(this);return Au;
},Fc:function(AH){C.FilterCriterion.Fc.call(this,AH);var Au=(C.AnimalTypeFilterCriterion.
isPrototypeOf(AH)?AH:null);if(!!Au)this.A5=Au.A5;},Initialize:function(A4,D9,A6,
P7){this.EE=A4;this.Operator=D9;this.A5=A6;this.Ys=P7;return this;},_Init:function(
aArg){C.FilterCriterion._Init.call(this,aArg);this.__proto__=C.AnimalTypeFilterCriterion;
},_className:"Device::AnimalTypeFilterCriterion"};C.BB0={Aua:0,BBZ:1,BDG:2,A_x:3
,A5b:4,BEV:5,BCr:6,BEU:7,LinkTransponder:8,To:9,Weighing:10,Calving:11,LinkNaisId:
12,BEj:13,ClearBirthNoticePending:14,DeleteAnimal:15,ScanNaisId:16,Edit:17,ClearPurchaseNoticePending:
18};C.AutoRegistrationModeToString={BS:function(A8){var U3=A8;var Nn=A.jV;switch(
U3){case 0:Nn=A.aaR(A.acf.BgY);break;case 1:Nn=A.aaR(A.acf.Bix);break;case 2:Nn=
A.aaR(A.acf.Off);break;default:throw new Error(AYN+U3.toFixed());}return Nn;},_Init:
function(aArg){C.EnumToString._Init.call(this,aArg);this.__proto__=C.AutoRegistrationModeToString;
},_className:"Device::AutoRegistrationModeToString"};C.AutoRegistrationMode={UserConfirmed:
0,Background:1,Off:2,LAST:3};C.AssessmentFilterCriterion={A5:0,Aa3:function(){var
Au=A._NewObject(C.AssessmentFilterCriterion,0);Au.Fc(this);return Au;},Fc:function(
AH){C.FilterCriterion.Fc.call(this,AH);var Au=(C.AssessmentFilterCriterion.isPrototypeOf(
AH)?AH:null);if(!!Au)this.A5=Au.A5;},Initialize:function(A4,D9,A6,P7){this.EE=A4;
this.Operator=D9;this.A5=A6;this.Ys=P7;return this;},_Init:function(aArg){C.FilterCriterion.
_Init.call(this,aArg);this.__proto__=C.AssessmentFilterCriterion;},_className:"Device::AssessmentFilterCriterion"
};C.D5={XB:0,Temperature:1,Afe:2,Rating:3,LAST:4};C.FactoryResetScope={DeviceAndAnimalData:
0,AnimalDataOnly:1,LAST:2};C.FactoryResetScopeToString={BS:function(A8){switch(A8
){case 0:return A.aaR(A.acf.DeviceAndAnimalData);case 1:return A.aaR(A.acf.AnimalDataOnly
);default:return AYO+A8.toFixed();}},_Init:function(aArg){C.EnumToString._Init.call(
this,aArg);this.__proto__=C.FactoryResetScopeToString;},_className:"Device::FactoryResetScopeToString"
};C.AUD={Cn:function(){A._GetAutoObject(C.Device).ArD(this.toString());},Init:function(
aArg){var B;A.zX([this,this.Bex],[B=A._GetAutoObject(C.Device),B.A8Q,B.BaP],0);this.
Bex(this);},Bex:function(G){this.EG(A._GetAutoObject(C.Device).AGs);A.we(this,0);
},_Init:function(aArg){C.Int32ArrayWrapper._Init.call(this,aArg);this.__proto__=
C.AUD;this.Zf(3);this.Init(aArg);},_className:"Device::TemperaturesLowClass"};C.
AUC={Init:function(aArg){var B;A.zX([this,this.Bev],[B=A._GetAutoObject(C.Device
),B.A8P,B.BaO],0);this.Bev(this);},Cn:function(){A._GetAutoObject(C.Device).ArC(
this.toString());},Bev:function(G){this.EG(A._GetAutoObject(C.Device).AGr);A.we(
this,0);},_Init:function(aArg){C.Int32ArrayWrapper._Init.call(this,aArg);this.__proto__=
C.AUC;this.Zf(3);this.Init(aArg);},_className:"Device::TemperaturesHighClass"};C.
AL_={Init:function(aArg){var B;A.zX([this,this.Bd1],[B=A._GetAutoObject(C.Device
),B.A76,B.Bau],0);this.Bd1(this);},Bd1:function(G){this.EG(A._GetAutoObject(C.Device
).ABa);A.we(this,0);},_Init:function(aArg){C.Int32ArrayWrapper._Init.call(this,aArg
);this.__proto__=C.AL_;this.Zf(3);this.Init(aArg);},_className:"Device::AnimalTypesClass"
};C.UInt64FilterCriterion={A5:0,Aa3:function(){var Au=A._NewObject(C.UInt64FilterCriterion
,0);Au.Fc(this);return Au;},Fc:function(AH){C.FilterCriterion.Fc.call(this,AH);var
Au=(C.UInt64FilterCriterion.isPrototypeOf(AH)?AH:null);if(!!Au)this.A5=Au.A5;},Initialize:
function(A4,D9,A6,P7){this.EE=A4;this.Operator=D9;this.A5=A6;this.Ys=P7;return this;
},_Init:function(aArg){C.FilterCriterion._Init.call(this,aArg);this.__proto__=C.
UInt64FilterCriterion;},_className:"Device::UInt64FilterCriterion"};C.BooleanToAssignedUnassignedString={
BS:function(A8){switch(A8){case 0:return A.aaR(A.acf.Aj9);case 1:return A.aaR(A.
acf.Bgk);default:return AsE+A8.toFixed();}},_Init:function(aArg){C.EnumToString.
_Init.call(this,aArg);this.__proto__=C.BooleanToAssignedUnassignedString;},_className:
"Device::BooleanToAssignedUnassignedString"};C.C6={UNDEFINED:0,AT:1,BA:2,BE:3,BB5:
4,BCi:5,BCj:6,BCk:7,BCl:8,BCm:9,BCw:10,BCx:11,BCG:12,BCH:13,BCW:14,FR:15,GR:16,BC9:
17,BC_:18,BDj:19,BDk:20,BDp:21,BDq:22,BDr:23,BDs:24,BDy:25,BDM:26,BDN:27,BD2:28,
BD3:29,BEh:30,BEi:31,BEy:32,BEz:33,BEA:34,BEO:35,BEP:36,BE5:37,A$e:38,BE6:39,LAST:
40};C.CountryToString={BS:function(A8){var JW=A8;var Fw=A.jV;switch(JW){case 1:Fw=
A.aaR(A.acm.Bgy);break;case 2:Fw=A.aaR(A.acm.BgL);break;case 3:Fw=A.aaR(A.acm.BgF
);break;case 4:Fw=A.aaR(A.acm.BgN);break;case 5:Fw=A.aaR(A.acm.BgP);break;case 6:
Fw=A.aaR(A.acm.BoL);break;case 7:Fw=A.aaR(A.acm.BgS);break;case 8:Fw=A.aaR(A.acm.
Bg7);break;case 9:Fw=A.aaR(A.acm.Bg8);break;case 10:Fw=A.aaR(A.acm.BhY);break;case
11:Fw=A.aaR(A.acm.Bhc);break;case 12:Fw=A.aaR(A.acm.BhD);break;case 13:Fw=A.aaR(
A.acm.Bod);break;case 14:Fw=A.aaR(A.acm.BhM);break;case 15:Fw=A.aaR(A.acm.BhU);break;
case 16:Fw=A.aaR(A.acm.Bio);break;case 17:Fw=A.aaR(A.acm.Bg5);break;case 18:Fw=A.
aaR(A.acm.Biu);break;case 19:Fw=A.aaR(A.acm.BiE);break;case 20:Fw=A.aaR(A.acm.BiQ
);break;case 21:Fw=A.aaR(A.acm.BiS);break;case 22:Fw=A.aaR(A.acm.Bi4);break;case
23:Fw=A.aaR(A.acm.Bi7);break;case 24:Fw=A.aaR(A.acm.Bi1);break;case 25:Fw=A.acm.
Bi9;break;case 26:Fw=A.aaR(A.acm.Bjn);break;case 27:Fw=A.aaR(A.acm.Bju);break;case
28:Fw=A.aaR(A.acm.Bnb);break;case 29:Fw=A.aaR(A.acm.Bnc);break;case 30:Fw=A.aaR(
A.acm.BnD);break;case 31:Fw=A.aaR(A.acm.BnF);break;case 32:Fw=A.aaR(A.acm.BoK);break;
case 33:Fw=A.aaR(A.acm.Boc);break;case 34:Fw=A.aaR(A.acm.Bob);break;case 35:Fw=A.
aaR(A.acm.Bpa);break;case 36:Fw=A.aaR(A.acm.BoU);break;case 37:Fw=A.aaR(A.acm.Bpe
);break;case 38:Fw=A.aaR(A.acm.A$e);break;case 39:Fw=A.aaR(A.acm.Bpd);break;case
0:Fw=Aod;break;default:throw new Error(AxC+JW.toFixed());}return Fw;},Lr:function(
A8){var JW=A8;var BO=A.jV;switch(JW){case 1:BO=SY;break;case 2:BO=ZM;break;case 3:
BO=UJ;break;case 4:BO=WN;break;case 5:BO=IJ;break;case 6:BO=ZX;break;case 7:BO=UK;
break;case 8:BO=ZO;break;case 9:BO=WQ;break;case 10:BO=Rd;break;case 11:BO=ZP;break;
case 12:BO=ZQ;break;case 13:BO=ZW;break;case 14:BO=UL;break;case 15:BO=WR;break;
case 16:BO=ZR;break;case 17:BO=WO;break;case 18:BO=O1;break;case 19:BO=Re;break;
case 20:BO=WS;break;case 21:BO=WT;break;case 22:BO=WV;break;case 23:BO=ZS;break;
case 24:BO=WU;break;case 25:BO=WW;break;case 26:BO=WX;break;case 27:BO=SZ;break;
case 28:BO=ZT;break;case 29:BO=ZU;break;case 30:BO=Acu;break;case 31:BO=UM;break;
case 32:BO=WY;break;case 33:BO=Afk;break;case 34:BO=ZV;break;case 35:BO=ZY;break;
case 36:BO=ZN;break;case 37:BO=Afl;break;case 38:BO=JR;break;case 39:BO=Acv;break;
case 0:BO=Aod;break;default:throw new Error(AxC+JW.toFixed());}return BO;},_Init:
function(aArg){C.EnumToString._Init.call(this,aArg);this.__proto__=C.CountryToString;
},_className:"Device::CountryToString"};C.EaseOfDelivery={Unspecified:0,Easy:1,Moderate:
2,Difficult:3,Surgery:4,LAST:5};C.EaseOfDeliveryToString={BS:function(A8){var Bcp=
A8;var Atj=A.jV;switch(Bcp){case 0:Atj=A.aaR(A.acf.Unspecified);break;case 1:Atj=
A.aaR(A.acf.Easy);break;case 2:Atj=A.aaR(A.acf.Moderate);break;case 3:Atj=A.aaR(
A.acf.Difficult);break;case 4:Atj=A.aaR(A.acf.Surgery);break;default:throw new Error(
AYP+Bcp.toFixed());}return Atj;},_Init:function(aArg){C.EnumToString._Init.call(
this,aArg);this.__proto__=C.EaseOfDeliveryToString;},_className:"Device::EaseOfDeliveryToString"
};C.WhereAbouts={UNB:0,EZU:1,EMA:2,VZU:3,VMA:4,VIV:5,TOT:6,V48:7,V3T:8,MGE:9,VKB:
10,LAST:11};C.WhereAboutsToString={BS:function(A8){var Bf9=A8;var Aaz=A.jV;switch(
Bf9){case 0:Aaz=A.aaR(A.acf.Unknown);break;case 1:Aaz=A.aaR(A.acf.Bpn);break;case
2:Aaz=A.aaR(A.acf.Bpm);break;case 3:Aaz=A.aaR(A.acf.Bpv);break;case 4:Aaz=A.aaR(
A.acf.Bpu);break;case 5:Aaz=A.aaR(A.acf.Bps);break;case 6:Aaz=A.aaR(A.acf.Bpp);break;
case 7:Aaz=A.aaR(A.acf.Bpr);break;case 8:Aaz=A.aaR(A.acf.Bpq);break;case 9:Aaz=A.
aaR(A.acf.Bpo);break;case 10:Aaz=A.aaR(A.acf.Bpt);break;default:throw new Error(
AYQ+Bf9.toFixed());}return Aaz;},_Init:function(aArg){C.EnumToString._Init.call(
this,aArg);this.__proto__=C.WhereAboutsToString;},_className:"Device::WhereAboutsToString"
};C.Breed={UNKNOWN:0,SBT:1,RBT:2,JER:3,BV:4,RVA:5,RV:6,RDN:7,DSN:8,FL:9,GV:10,PIN:
11,HIN:12,MW:13,VW:14,LMP:15,DBV:16,AS:17,VR:18,CHA:19,LIM:20,WBB:21,BA:22,MA:23
,SAL:24,MON:25,AU:26,PIE:27,CHI:28,ROM:29,MAR:30,WP:31,BB:32,DA:33,AA:34,HE:35,SH:
36,HLD:37,WB:38,GAL:39,LR:40,BGA:41,LG:42,BRA:43,NOR:44,UST:45,ZEB:46,GRV:47,DEX:
48,WGA:49,LH:50,SD:51,FR:52,TUX:53,TLM:54,FLF:55,UCK:56,BLA:57,WIT:58,LAK:59,RHV:
60,AT:61,GR:62,PIF:63,PS:64,GVF:65,BVF:66,RBF:67,HWF:68,MWF:69,VWF:70,LPF:71,BRN:
72,BAZ:73,AO:74,BE:75,WL:76,BIS:77,YAK:78,SON:79,TAU:80,IND:81,TIN:82,WAG:83,XFF:
84,XFM:85,XMM:86,EVO:87,BLH:88,TLH:89,MGR:90,WSH:91,MUR:92,EBS:93,ERI:94,PAR:95,
XZF:96,XZM:97,XZZ:98,LAST:99};C.BreedToString={BS:function(A8){var Bx=A8;var BI=
A.jV;switch(Bx){case 0:BI=A.aaR(A.acf.Unknown);break;case 1:BI=A.aaR(A.ack.SBT);
break;case 2:BI=A.aaR(A.ack.RBT);break;case 3:BI=A.aaR(A.ack.JER);break;case 4:BI=
A.aaR(A.ack.BV);break;case 5:BI=A.aaR(A.ack.RVA);break;case 6:BI=A.aaR(A.ack.RV);
break;case 7:BI=A.aaR(A.ack.RDN);break;case 8:BI=A.aaR(A.ack.DSN);break;case 9:BI=
A.aaR(A.ack.FL);break;case 10:BI=A.aaR(A.ack.GV);break;case 11:BI=A.aaR(A.ack.PIN
);break;case 12:BI=A.aaR(A.ack.HIN);break;case 13:BI=A.aaR(A.ack.MW);break;case 14:
BI=A.aaR(A.ack.VW);break;case 15:BI=A.aaR(A.ack.LMP);break;case 16:BI=A.aaR(A.ack.
DBV);break;case 17:BI=A.aaR(A.ack.AS);break;case 18:BI=A.aaR(A.ack.VR);break;case
19:BI=A.aaR(A.ack.CHA);break;case 20:BI=A.aaR(A.ack.LIM);break;case 21:BI=A.aaR(
A.ack.WBB);break;case 22:BI=A.aaR(A.ack.BA);break;case 23:BI=A.aaR(A.ack.MA);break;
case 24:BI=A.aaR(A.ack.SAL);break;case 25:BI=A.aaR(A.ack.MON);break;case 26:BI=A.
aaR(A.ack.AU);break;case 27:BI=A.aaR(A.ack.PIE);break;case 28:BI=A.aaR(A.ack.CHI
);break;case 29:BI=A.aaR(A.ack.ROM);break;case 30:BI=A.aaR(A.ack.MAR);break;case
31:BI=A.aaR(A.ack.WP);break;case 32:BI=A.aaR(A.ack.BB);break;case 33:BI=A.aaR(A.
ack.DA);break;case 34:BI=A.aaR(A.ack.AA);break;case 35:BI=A.aaR(A.ack.HE);break;
case 36:BI=A.aaR(A.ack.SH);break;case 37:BI=A.aaR(A.ack.HLD);break;case 38:BI=A.
aaR(A.ack.WB);break;case 39:BI=A.aaR(A.ack.GAL);break;case 40:BI=A.aaR(A.ack.LR);
break;case 41:BI=A.aaR(A.ack.BGA);break;case 42:BI=A.aaR(A.ack.LG);break;case 43:
BI=A.aaR(A.ack.BRA);break;case 44:BI=A.aaR(A.ack.NOR);break;case 45:BI=A.aaR(A.ack.
UST);break;case 46:BI=A.aaR(A.ack.ZEB);break;case 47:BI=A.aaR(A.ack.GRV);break;case
48:BI=A.aaR(A.ack.DEX);break;case 49:BI=A.aaR(A.ack.WGA);break;case 50:BI=A.aaR(
A.ack.LH);break;case 51:BI=A.aaR(A.ack.SD);break;case 52:BI=A.aaR(A.ack.FR);break;
case 53:BI=A.aaR(A.ack.TUX);break;case 54:BI=A.aaR(A.ack.TLM);break;case 55:BI=A.
aaR(A.ack.FLF);break;case 56:BI=A.aaR(A.ack.UCK);break;case 57:BI=A.aaR(A.ack.BLA
);break;case 58:BI=A.aaR(A.ack.WIT);break;case 59:BI=A.aaR(A.ack.LAK);break;case
60:BI=A.aaR(A.ack.RHV);break;case 61:BI=A.aaR(A.ack.AT);break;case 62:BI=A.aaR(A.
ack.GR);break;case 63:BI=A.aaR(A.ack.PIF);break;case 64:BI=A.aaR(A.ack.PS);break;
case 65:BI=A.aaR(A.ack.GVF);break;case 66:BI=A.aaR(A.ack.BVF);break;case 67:BI=A.
aaR(A.ack.RBF);break;case 68:BI=A.aaR(A.ack.HWF);break;case 69:BI=A.aaR(A.ack.MWF
);break;case 70:BI=A.aaR(A.ack.VWF);break;case 71:BI=A.aaR(A.ack.LPF);break;case
72:BI=A.aaR(A.ack.BRN);break;case 73:BI=A.aaR(A.ack.BAZ);break;case 74:BI=A.aaR(
A.ack.AO);break;case 75:BI=A.aaR(A.ack.BE);break;case 76:BI=A.aaR(A.ack.WL);break;
case 77:BI=A.aaR(A.ack.BIS);break;case 78:BI=A.aaR(A.ack.YAK);break;case 79:BI=A.
aaR(A.ack.SON);break;case 80:BI=A.aaR(A.ack.TAU);break;case 81:BI=A.aaR(A.ack.IND
);break;case 82:BI=A.aaR(A.ack.TIN);break;case 83:BI=A.aaR(A.ack.WAG);break;case
84:BI=A.aaR(A.ack.XFF);break;case 85:BI=A.aaR(A.ack.XFM);break;case 86:BI=A.aaR(
A.ack.XMM);break;case 87:BI=A.aaR(A.ack.EVO);break;case 88:BI=A.ack.BLH;break;case
89:BI=A.ack.TLH;break;case 90:BI=A.ack.MGR;break;case 91:BI=A.ack.WSH;break;case
92:BI=A.ack.MUR;break;case 93:BI=A.aaR(A.ack.EBS);break;case 94:BI=A.aaR(A.ack.ERI
);break;case 95:BI=A.ack.PAR;break;case 96:BI=A.aaR(A.ack.XZF);break;case 97:BI=
A.aaR(A.ack.XZM);break;case 98:BI=A.aaR(A.ack.XZZ);break;default:throw new Error(
AsJ+Bx.toFixed());}return BI;},_Init:function(aArg){C.EnumToString._Init.call(this
,aArg);this.__proto__=C.BreedToString;},_className:"Device::BreedToString"};C.Tz={
timer:null,Q:null,D_:0,Dt:0,JH:0,Pn:1000,Pw:1000,By:false,Cu:false,B3:true,L$:function(
G){var F;if(!this.timer)return;if(this.D_<0){this.Dt=this.timer.Bw;this.D_=0;}var
Av=(this.timer.Bw-this.Dt)|0;var Oq=this.Pn;var G9=this.Pw+this.Pn;var LB=0;var I$=
this.D_;if(!I$&&(Av>=Oq)){I$=1;Av=Av-Oq;}if((I$>0)&&(Av>=G9)){var H9=(Av/G9)|0;Av=
Av-(H9*G9);I$=I$+H9;}if((I$>2)&&!this.JH)I$=1;if(I$!==this.D_){this.Dt=this.timer.
Bw-(((B=Av)<0)?B+0x100000000:B);this.D_=I$;}if(I$>0)LB=this.Pw;var Kw=(I$>=this.
JH)&&(this.JH>0);if(!!this.Q){if((!Kw&&(Av>=LB))&&((F=this.Q,F[1].call(F[0]))!==
this.Cu))(F=this.Q,F[2].call(F[0],this.Cu));if((Kw||((Av<LB)&&(I$>0)))&&((F=this.
Q,F[1].call(F[0]))!==this.B3))(F=this.Q,F[2].call(F[0],this.B3));}if(Kw)this.Ar(
false);},HI:function(E){if(E<0)E=0;this.JH=E;},Fi:function(E){if(E<100)E=100;this.
Pn=E;},Ue:function(E){if(E<0)E=0;this.Pw=E;},Ar:function(E){if(this.By===E)return;
this.By=E;if(!E&&!!this.timer){A.z9([this,this.L$],this.timer,0);this.timer=null;
}if(E){this.timer=A._GetAutoObject(A.acl.AdZ);A.zV([this,this.L$],this.timer,0);
this.D_=-1;}},_Init:function(aArg){this.__proto__=C.Tz;A.h7++;},_Done:function(){
this.__proto__=null;A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((B=
this.timer)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Q)&&((B=B[0])._cycle!=
D))B._Mark(B._cycle=D);if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null
,_cycle:0,_observers:null,_className:"Device::BoolEffect"};C.Ia={AnimalId:0,TransponderId:
1,BDB:2,BDA:3,BDE:4,BDD:5};C.AuC={BB3:0,BCz:1};C.AnimalIdGenerationMethodToString={
BS:function(A8){var Ak8=A8;var AoE=A.jV;switch(Ak8){case 0:AoE=A.aaR(A.acf.T$);break;
case 1:AoE=A.aaR(A.acf.Transponder);break;case 3:AoE=(A.aaR(A.acf.Manual)+Oa)+A.
aaR(A.acf.Male);break;case 2:AoE=(A.aaR(A.acf.Manual)+Oa)+A.aaR(A.acf.Female);break;
case 4:AoE=(A.aaR(A.acf.Manual)+Oa)+A.aaR(A.acf.Unknown);break;case 5:AoE=(A.aaR(
A.acf.Manual)+Oa)+AsK;break;default:throw new Error(AsL+Ak8.toFixed());}return AoE;
},_Init:function(aArg){C.EnumToString._Init.call(this,aArg);this.__proto__=C.AnimalIdGenerationMethodToString;
},_className:"Device::AnimalIdGenerationMethodToString"};C.DirectionOfCountingToString={
BS:function(A8){var Ay9=A8;var A1f=A.jV;switch(Ay9){case 0:A1f=AsM;break;case 1:
A1f=Ax3;break;default:throw new Error(Aoe+Ay9.toFixed());}return A1f;},_Init:function(
aArg){C.EnumToString._Init.call(this,aArg);this.__proto__=C.DirectionOfCountingToString;
},_className:"Device::DirectionOfCountingToString"};C.EnumToIcon={Asf:function(A8
){throw new Error(Asw+A8.toFixed());},Asg:function(A8){throw new Error(Asw+A8.toFixed(
));},_Init:function(aArg){this.__proto__=C.EnumToIcon;A.h7++;},_Done:function(){
this.__proto__=null;A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((B=
this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:
"Device::EnumToIcon"};C.AdY={Asf:function(A8){return A.aaL(A.ach.AUq);},Asg:function(
A8){var Ay9=A8;var Rv=-1;switch(Ay9){case 0:Rv=3;break;case 1:Rv=2;break;default:
throw new Error(AH3+Ay9.toFixed());}return Rv;},_Init:function(aArg){C.EnumToIcon.
_Init.call(this,aArg);this.__proto__=C.AdY;},_className:"Device::DirectionOfCountingToIcon"
};C.AdE={Asf:function(A8){return A.aaL(A.ach.AUo);},Asg:function(A8){var Ak8=A8;
var Rv=-1;switch(Ak8){case 0:Rv=0;break;case 1:Rv=6;break;case 3:Rv=4;break;case
2:Rv=5;break;case 4:Rv=2;break;case 5:Rv=3;break;default:throw new Error(AH3+Ak8.
toFixed());}return Rv;},_Init:function(aArg){C.EnumToIcon._Init.call(this,aArg);
this.__proto__=C.AdE;},_className:"Device::AnimalIdGenerationMethodToIcon"};C.Ps={
UNDEFINED:0,SH:1,AOu:2,ARd:3,AOt:4,A7q:5,HE:6,A_v:7,A4I:8,AMj:9,ATU:10,BE:11,BB:
12,A7d:13,ATV:14,ATW:15,AUv:16};C.GermanStateToString={BS:function(A8){var Bq=A8;
var Gx=A.jV;switch(Bq){case 1:Gx=A.aaR(A.aco.SH);break;case 2:Gx=A.aaR(A.aco.AOu
);break;case 3:Gx=A.aaR(A.aco.ARd);break;case 4:Gx=A.aaR(A.aco.AOt);break;case 5:
Gx=A.aaR(A.aco.A7q);break;case 6:Gx=A.aaR(A.aco.HE);break;case 7:Gx=A.aaR(A.aco.
A_v);break;case 8:Gx=A.aaR(A.aco.A4I);break;case 9:Gx=A.aaR(A.aco.AMj);break;case
10:Gx=A.aaR(A.aco.ATU);break;case 11:Gx=A.aaR(A.aco.BE);break;case 12:Gx=A.aaR(A.
aco.BB);break;case 13:Gx=A.aaR(A.aco.A7d);break;case 14:Gx=A.aaR(A.aco.ATV);break;
case 15:Gx=A.aaR(A.aco.ATW);break;case 16:Gx=A.aaR(A.aco.AUv);break;case 0:Gx=Aod;
break;default:throw new Error(AsN+Bq.toFixed());}return Gx;},Lr:function(A8){var
Bq=A8;var Gx=A.jV;switch(Bq){case 1:Gx=A.aaR(A.aco.BnG);break;case 2:Gx=A.aaR(A.
aco.AOu);break;case 3:Gx=A.aaR(A.aco.ARd);break;case 4:Gx=A.aaR(A.aco.AOt);break;
case 5:Gx=A.aaR(A.aco.Bjk);break;case 6:Gx=A.aaR(A.aco.HE);break;case 7:Gx=A.aaR(
A.aco.Bnl);break;case 8:Gx=A.aaR(A.aco.BgB);break;case 9:Gx=A.aaR(A.aco.AMj);break;
case 10:Gx=A.aaR(A.aco.ATU);break;case 11:Gx=A.aaR(A.aco.BE);break;case 12:Gx=A.
aaR(A.aco.BB);break;case 13:Gx=A.aaR(A.aco.Bi8);break;case 14:Gx=A.aaR(A.aco.ATV
);break;case 15:Gx=A.aaR(A.aco.ATW);break;case 16:Gx=A.aaR(A.aco.AUv);break;case
0:Gx=Aod;break;default:throw new Error(AsN+Bq.toFixed());}return Gx;},BoZ:function(
A8){var Bq=A8;var F_=-1;switch(Bq){case 0:F_=0;break;case 1:F_=1;break;case 2:F_=
2;break;case 3:F_=3;break;case 4:F_=4;break;case 5:F_=5;break;case 6:F_=6;break;
case 7:F_=7;break;case 8:F_=8;break;case 9:F_=9;break;case 10:F_=10;break;case 11:
F_=11;break;case 12:F_=12;break;case 13:F_=13;break;case 14:F_=14;break;case 15:
F_=15;break;case 16:F_=16;break;default:throw new Error(AsN+Bq.toFixed());}return F_;
},Bo0:function(A8){var Bq=A8;var F_=A.jV;switch(Bq){case 1:F_=AYR;break;case 2:F_=
AYS;break;case 3:F_=AYT;break;case 4:F_=AYU;break;case 5:F_=AYV;break;case 6:F_=
AYW;break;case 7:F_=AYX;break;case 8:F_=AYY;break;case 9:F_=AYZ;break;case 10:F_=
AY0;break;case 11:F_=UJ;break;case 12:F_=AY1;break;case 13:F_=AY2;break;case 14:
F_=Ax4;break;case 15:F_=AY3;break;case 16:F_=Ax5;break;case 0:F_=Aod;break;default:
throw new Error(AsN+Bq.toFixed());}return F_;},_Init:function(aArg){C.EnumToString.
_Init.call(this,aArg);this.__proto__=C.GermanStateToString;},_className:"Device::GermanStateToString"
};C.EartagNrAssignmentMode={OneSingleRange:0,TwoNumberRanges:1,LAST:2};C.EartagNrAssignmentModeToString={
Lr:function(A8){var U3=A8;var Nn=A.jV;switch(U3){case 0:Nn=Ax6;break;case 1:Nn=AY4;
break;default:throw new Error(AH4+U3.toFixed());}return Nn;},BS:function(A8){var
U3=A8;var Nn=A.jV;switch(U3){case 0:Nn=A.aaR(A.acf.Bm6);break;case 1:Nn=A.aaR(A.
acf.Bpc);break;default:throw new Error(AH4+U3.toFixed());}return Nn;},_Init:function(
aArg){C.EnumToString._Init.call(this,aArg);this.__proto__=C.EartagNrAssignmentModeToString;
},_className:"Device::EartagNrAssignmentModeToString"};C.BBX={BDS:0,BDI:1,BCQ:2,
BCR:3,BCS:4,BEQ:5};C.EnumToCodeset={Aml:function(AhO){throw new Error(AY5+AhO.toFixed(
));},Ad1:function(A8){throw new Error(Asw+A8.toFixed());},Aqw:function(){A.ab5("%s"
,Ax7);return 0;},Hn:function(){A.ab5("%s",Ax7);return 0;},_Init:function(aArg){this.
__proto__=C.EnumToCodeset;A.h7++;},_Done:function(){this.__proto__=null;A.h7--;}
,_ReInit:function(){},_Mark:function(D){var B;if((B=this.I)&&(B._cycle!=D))B._Mark(
B._cycle=D);},I:null,_cycle:0,_observers:null,_className:"Device::EnumToCodeset"
};C.M0={Aml:function(AhO){var Bx;switch(AhO){case 1:Bx=1;break;case 2:Bx=2;break;
case 3:Bx=3;break;case 4:Bx=4;break;case 5:Bx=5;break;case 6:Bx=6;break;case 9:Bx=
7;break;case 10:Bx=8;break;case 11:Bx=9;break;case 12:Bx=10;break;case 13:Bx=11;
break;case 14:Bx=12;break;case 15:Bx=13;break;case 16:Bx=14;break;case 17:Bx=15;
break;case 18:Bx=16;break;case 19:Bx=17;break;case 20:Bx=18;break;case 21:Bx=19;
break;case 22:Bx=20;break;case 23:Bx=21;break;case 24:Bx=22;break;case 25:Bx=23;
break;case 26:Bx=24;break;case 27:Bx=25;break;case 28:Bx=26;break;case 31:Bx=27;
break;case 32:Bx=28;break;case 33:Bx=29;break;case 34:Bx=30;break;case 35:Bx=31;
break;case 36:Bx=32;break;case 41:Bx=33;break;case 42:Bx=34;break;case 43:Bx=35;
break;case 44:Bx=36;break;case 45:Bx=37;break;case 46:Bx=38;break;case 47:Bx=39;
break;case 48:Bx=40;break;case 49:Bx=41;break;case 50:Bx=42;break;case 51:Bx=43;
break;case 52:Bx=44;break;case 53:Bx=45;break;case 54:Bx=46;break;case 55:Bx=47;
break;case 56:Bx=48;break;case 57:Bx=49;break;case 58:Bx=50;break;case 59:Bx=51;
break;case 60:Bx=52;break;case 61:Bx=53;break;case 65:Bx=54;break;case 66:Bx=55;
break;case 67:Bx=56;break;case 68:Bx=57;break;case 69:Bx=58;break;case 70:Bx=59;
break;case 71:Bx=60;break;case 72:Bx=61;break;case 73:Bx=62;break;case 74:Bx=63;
break;case 75:Bx=64;break;case 76:Bx=65;break;case 77:Bx=66;break;case 78:Bx=67;
break;case 79:Bx=68;break;case 80:Bx=69;break;case 81:Bx=70;break;case 82:Bx=71;
break;case 83:Bx=72;break;case 84:Bx=73;break;case 85:Bx=74;break;case 86:Bx=75;
break;case 87:Bx=76;break;case 88:Bx=77;break;case 89:Bx=78;break;case 90:Bx=79;
break;case 91:Bx=80;break;case 92:Bx=81;break;case 93:Bx=82;break;case 94:Bx=83;
break;case 97:Bx=84;break;case 98:Bx=85;break;case 99:Bx=86;break;case 100:Bx=87;
break;case 101:Bx=88;break;case 102:Bx=89;break;case 103:Bx=90;break;case 104:Bx=
91;break;case 105:Bx=92;break;case 106:Bx=93;break;case 107:Bx=94;break;case 108:
Bx=95;break;case 109:Bx=96;break;case 110:Bx=97;break;case 111:Bx=98;break;default:
Bx=0;}return Bx;},Ad1:function(A8){var Bx=A8;var BK=0;switch(Bx){case 0:BK=0;break;
case 1:BK=1;break;case 2:BK=2;break;case 3:BK=3;break;case 4:BK=4;break;case 5:BK=
5;break;case 6:BK=6;break;case 7:BK=9;break;case 8:BK=10;break;case 9:BK=11;break;
case 10:BK=12;break;case 11:BK=13;break;case 12:BK=14;break;case 13:BK=15;break;
case 14:BK=16;break;case 15:BK=17;break;case 16:BK=18;break;case 17:BK=19;break;
case 18:BK=20;break;case 19:BK=21;break;case 20:BK=22;break;case 21:BK=23;break;
case 22:BK=24;break;case 23:BK=25;break;case 24:BK=26;break;case 25:BK=27;break;
case 26:BK=28;break;case 27:BK=31;break;case 28:BK=32;break;case 29:BK=33;break;
case 30:BK=34;break;case 31:BK=35;break;case 32:BK=36;break;case 33:BK=41;break;
case 34:BK=42;break;case 35:BK=43;break;case 36:BK=44;break;case 37:BK=45;break;
case 38:BK=46;break;case 39:BK=47;break;case 40:BK=48;break;case 41:BK=49;break;
case 42:BK=50;break;case 43:BK=51;break;case 44:BK=52;break;case 45:BK=53;break;
case 46:BK=54;break;case 47:BK=55;break;case 48:BK=56;break;case 49:BK=57;break;
case 50:BK=58;break;case 51:BK=59;break;case 52:BK=60;break;case 53:BK=61;break;
case 54:BK=65;break;case 55:BK=66;break;case 56:BK=67;break;case 57:BK=68;break;
case 58:BK=69;break;case 59:BK=70;break;case 60:BK=71;break;case 61:BK=72;break;
case 62:BK=73;break;case 63:BK=74;break;case 64:BK=75;break;case 65:BK=76;break;
case 66:BK=77;break;case 67:BK=78;break;case 68:BK=79;break;case 69:BK=80;break;
case 70:BK=81;break;case 71:BK=82;break;case 72:BK=83;break;case 73:BK=84;break;
case 74:BK=85;break;case 75:BK=86;break;case 76:BK=87;break;case 77:BK=88;break;
case 78:BK=89;break;case 79:BK=90;break;case 80:BK=91;break;case 81:BK=92;break;
case 82:BK=93;break;case 83:BK=94;break;case 84:BK=97;break;case 85:BK=98;break;
case 86:BK=99;break;case 87:BK=100;break;case 88:BK=101;break;case 89:BK=102;break;
case 90:BK=103;break;case 91:BK=104;break;case 92:BK=105;break;case 93:BK=106;break;
case 94:BK=107;break;case 95:BK=108;break;case 96:BK=109;break;case 97:BK=110;break;
case 98:BK=111;break;default:throw new Error(AY6+Bx.toFixed());}return BK;},Aqw:
function(){return 0;},Hn:function(){return 111;},_Init:function(aArg){C.EnumToCodeset.
_Init.call(this,aArg);this.__proto__=C.M0;},_className:"Device::BreedToHitCodeset"
};C.ReasonOfLeaving={Unknown:0,A_2:1,RF:2,A_p:3,A6R:4,BD1:5,A$f:6,A7m:7,A5a:8,A_l:
9,A7k:10,A5e:11,BEf:12,BEg:13,LAST:14};C.ReasonOfLeavingToString={BS:function(A8
){var Adl=A8;var Ti=A.jV;switch(Adl){case 0:Ti=A.aaR(A.acf.Unknown);break;case 1:
Ti=A.aaR(A.acf.A_2);break;case 2:Ti=A.aaR(A.acf.RF);break;case 3:Ti=A.aaR(A.acf.
A_p);break;case 4:Ti=A.aaR(A.acf.A6R);break;case 5:Ti=A.aaR(A.acf.Bm7);break;case
6:Ti=A.aaR(A.acf.A$f);break;case 7:Ti=A.aaR(A.acf.A7m);break;case 8:Ti=A.aaR(A.acf.
A5a);break;case 9:Ti=A.aaR(A.acf.A_l);break;case 10:Ti=A.aaR(A.acf.A7k);break;case
11:Ti=A.aaR(A.acf.A5e);break;case 12:Ti=A.aaR(A.acf.Bnf);break;case 13:Ti=A.aaR(
A.acf.Bne);break;default:throw new Error(AY7+Adl.toFixed());}return Ti;},_Init:function(
aArg){C.EnumToString._Init.call(this,aArg);this.__proto__=C.ReasonOfLeavingToString;
},_className:"Device::ReasonOfLeavingToString"};C.Ahl={Aml:function(AhO){var Pa;
switch(AhO){case 1:Pa=1;break;case 2:Pa=2;break;case 3:Pa=3;break;case 4:Pa=4;break;
case 5:Pa=5;break;case 6:Pa=6;break;case 7:Pa=7;break;case 8:Pa=8;break;case 9:Pa=
9;break;case 10:Pa=10;break;case 11:Pa=11;break;case 12:Pa=12;break;case 13:Pa=13;
break;default:Pa=0;}return Pa;},Ad1:function(A8){var Pa=A8;var I_=0;switch(Pa){case
0:I_=0;break;case 2:I_=2;break;case 8:I_=8;break;case 11:I_=11;break;case 4:I_=4;
break;case 10:I_=10;break;case 7:I_=7;break;case 5:I_=5;break;case 9:I_=9;break;
case 3:I_=3;break;case 12:I_=12;break;case 13:I_=13;break;case 1:I_=1;break;case
6:I_=6;break;default:throw new Error(AH5+Pa.toFixed());}return I_;},Aqw:function(
){return 0;},Hn:function(){return 13;},_Init:function(aArg){C.EnumToCodeset._Init.
call(this,aArg);this.__proto__=C.Ahl;},_className:"Device::ReasonOfLeavingToCodeset"
};C.KV={Aml:function(AhO){var K6;switch(AhO){case 1:K6=1;break;case 2:K6=2;break;
case 3:K6=3;break;case 4:K6=4;break;case 5:K6=5;break;case 6:K6=6;break;case 7:K6=
7;break;case 8:K6=8;break;case 9:K6=9;break;case 10:K6=10;break;default:K6=0;}return K6;
},Ad1:function(A8){var K6=A8;var I_=0;switch(K6){case 0:I_=0;break;case 2:I_=2;break;
case 1:I_=1;break;case 9:I_=9;break;case 6:I_=6;break;case 8:I_=8;break;case 7:I_=
7;break;case 5:I_=5;break;case 10:I_=10;break;case 4:I_=4;break;case 3:I_=3;break;
default:throw new Error(AH5+K6.toFixed());}return I_;},Aqw:function(){return 0;}
,Hn:function(){return 10;},_Init:function(aArg){C.EnumToCodeset._Init.call(this,
aArg);this.__proto__=C.KV;},_className:"Device::WhereAboutsToCodeset"};C.Amu={_Init:
function(aArg){this.__proto__=C.Amu;A.h7++;},_Done:function(){this.__proto__=null;
A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((B=this.I)&&(B._cycle!=
D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:"Device::EmptyClass"
};C.CalfDeregistrationsTableFields={Year:0,Deregistrations:1,Deaths:2};C.CalfDeregistrations={
Deregistrations:0,Deaths:0,Year:0,EG:function(Ad,AI){var Hx=C.Row.EG.call(this,Ad
,AI);if(Hx&&!!AI){this.Akp(AI.CE(Ad,0));this.Av9(AI.CE(Ad,1));this.Av8(AI.CE(Ad,
2));}return Hx;},Cn:function(AI){var Hx=C.Row.Cn.call(this,AI);if(Hx&&!!AI){var Jc=
AI.Oy();if(Jc<=0)A.ab5("%s",Acx);else{if(this.AmP())this.CK=AI.Yp();AI.Hf(this.CK
,0,this.Year);AI.Hf(this.CK,1,this.Deregistrations);AI.Hf(this.CK,2,this.Deaths);
AI.OA(Jc);}}return Hx;},Gh:function(){C.Row.Gh.call(this);this.Akp(-1);},He:function(
){C.Row.He.call(this);this.Akp(0);this.Av9(0);this.Av8(0);},Av9:function(E){if(this.
Deregistrations===E)return;this.Deregistrations=E;A.abo([this,this.BjX,this.Av9]
,0);},Av8:function(E){if(this.Deaths===E)return;this.Deaths=E;A.abo([this,this.BjV
,this.Av8],0);},Akp:function(E){if(this.Year===E)return;this.Year=E;A.abo([this,
this.Arb,this.Akp],0);},BjX:function(){return this.Deregistrations;},BjV:function(
){return this.Deaths;},Arb:function(){return this.Year;},_Init:function(aArg){C.
Row._Init.call(this,aArg);this.__proto__=C.CalfDeregistrations;this.TableId=4;},
_className:"Device::CalfDeregistrations"};C.AuA={Undefined:0,Display:1,A_u:2,A_H:
3,A$y:4,BC$:5,BEq:6,BE1:7,BDz:8,BCn:9,BBM:10,A6d:11,A_w:12,BE8:13,A7p:14,BE$:15};
C.DeviceComponentToString={BS:function(A8){var Bcj=A8;var Qc=A.jV;switch(Bcj){case
0:Qc=AY8;break;case 10:Qc=A.aaR(A.acf.Bf_);break;case 9:Qc=A.aaR(A.acf.BgR);break;
case 1:Qc=A.aaR(A.acf.Bht);break;case 11:Qc=A.aaR(A.acf.A6d);break;case 5:Qc=A.aaR(
A.acf.Bpw);break;case 8:Qc=A.aaR(A.acf.Bhv);break;case 14:Qc=A.aaR(A.acf.A7p);break;
case 2:Qc=A.aaR(A.acf.A_u);break;case 12:Qc=A.aaR(A.acf.A_w);break;case 6:Qc=A.aaR(
A.acf.Bnk);break;case 3:Qc=A.aaR(A.acf.A_H);break;case 7:Qc=A.aaR(A.acf.Bhw);break;
case 13:Qc=A.aaR(A.acf.Bhe);break;case 15:Qc=A.aaR(A.acf.BpA);break;case 4:Qc=A.
aaR(A.acf.A$y);break;default:throw new Error(AY9+Bcj.toFixed());}return Qc;},_Init:
function(aArg){C.EnumToString._Init.call(this,aArg);this.__proto__=C.DeviceComponentToString;
},_className:"Device::DeviceComponentToString"};C.Agz={Aml:function(AhO){return AhO;
},Ad1:function(A8){return A8;},Aqw:function(){return 0;},Hn:function(){return 4;
},_Init:function(aArg){C.EnumToCodeset._Init.call(this,aArg);this.__proto__=C.Agz;
},_className:"Device::EaseOfDeliveryToCodeset"};C.Aex={Asf:function(A8){return A.
aaL(A.ach.APC);},Asg:function(A8){var Bcu=A8;var Rv=-1;switch(Bcu){case 0:Rv=0;break;
case 1:Rv=1;break;case 2:Rv=2;break;default:throw new Error(AY_+Bcu.toFixed());}
return Rv;},_Init:function(aArg){C.EnumToIcon._Init.call(this,aArg);this.__proto__=
C.Aex;},_className:"Device::MotherSelectionFilterModeToIcon"};C.WhereAboutsFilterCriterion={
A5:0,Aa3:function(){var Au=A._NewObject(C.WhereAboutsFilterCriterion,0);Au.Fc(this
);return Au;},Fc:function(AH){C.FilterCriterion.Fc.call(this,AH);var Au=(C.WhereAboutsFilterCriterion.
isPrototypeOf(AH)?AH:null);if(!!Au)this.A5=Au.A5;},Initialize:function(A4,D9,A6,
P7){this.EE=A4;this.Operator=D9;this.A5=A6;this.Ys=P7;return this;},_Init:function(
aArg){C.FilterCriterion._Init.call(this,aArg);this.__proto__=C.WhereAboutsFilterCriterion;
},_className:"Device::WhereAboutsFilterCriterion"};C.BDL={ANs:0,BCu:1,APf:2,LAST:
3};C.BES={GD:0,AU9:1,Hb:2,Year:3,LAST:4};C.TimespanDaysToString={BS:function(A8){
var BfI=A8;var AAP=A.jV;switch(BfI){case 0:AAP=A.aaR(A.acf.A5s);break;case 1:AAP=
A.aaR(A.acf.AU9);break;case 2:AAP=A.aaR(A.acf.Hb);break;case 3:AAP=A.aaR(A.acf.Year
);break;default:throw new Error(AY$+BfI.toFixed());}return AAP;},_Init:function(
aArg){C.EnumToString._Init.call(this,aArg);this.__proto__=C.TimespanDaysToString;
},_className:"Device::TimespanDaysToString"};C.AhC={BDY:0,BCA:1,BDf:2,BDi:3,BDh:
4,BCB:5,BDg:6,LAST:7};C.USBStateToString={BS:function(A8){var Bf4=A8;var Bq=A.jV;
switch(Bf4){case 0:Bq=AZa;break;case 2:Bq=AH6;break;case 1:Bq=AZb;break;case 5:Bq=
AZc;break;case 3:Bq=AZd;break;case 4:Bq=AZe;break;case 6:Bq=AZf;break;default:throw new
Error(AHv+Bf4.toFixed());}return Bq;},_Init:function(aArg){C.EnumToString._Init.
call(this,aArg);this.__proto__=C.USBStateToString;},_className:"Device::USBStateToString"
};C.ABX={BDd:0,BBY:1,BDe:2,BDb:3};C.Aw$={ABR:A.jV,Timestamp:0,ADF:0,ADM:0,AFZ:0,
OnSetTimestamp:function(E){if(this.Timestamp===E)return;this.Timestamp=E;},AEW:function(
E){if(this.ADF===E)return;this.ADF=E;},AE3:function(E){if(this.ADM===E)return;this.
ADM=E;},AFb:function(E){if(this.AFZ===E)return;this.AFZ=E;},AEz:function(E){if(this.
ABR===E)return;this.ABR=E;},_Init:function(aArg){this.__proto__=C.Aw$;A.h7++;},_Done:
function(){this.__proto__=null;A.h7--;},_ReInit:function(){},_Mark:function(D){var
B;if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:
null,_className:"Device::SoftwareVersionInformation"};C.Au5={Timestamp:0,AQ3:0,AQ4:
0,AUO:0,AUP:0,AUN:0,AQ2:0,OnSetTimestamp:function(E){if(this.Timestamp===E)return;
this.Timestamp=E;},AET:function(E){if(this.AQ3===E)return;this.AQ3=E;},AEU:function(
E){if(this.AQ4===E)return;this.AQ4=E;},AFp:function(E){if(this.AUO===E)return;this.
AUO=E;},AFq:function(E){if(this.AUP===E)return;this.AUP=E;},AFo:function(E){if(this.
AUN===E)return;this.AUN=E;},AES:function(E){if(this.AQ2===E)return;this.AQ2=E;},
_Init:function(aArg){this.__proto__=C.Au5;A.h7++;},_Done:function(){this.__proto__=
null;A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((B=this.I)&&(B._cycle
!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:"Device::HardwareVersionInformation"
};C.Ap8={Undefined:0,BC1:1,BB$:2};C.Agh={Manual:0,TransponderId:1,LAST:2};C.AnimalIdAutoGenerationMethodToString={
BS:function(A8){var BbR=A8;var A0L=A.jV;switch(BbR){case 0:A0L=A.aaR(A.acf.A5i);
break;case 1:A0L=A.aaR(A.acf.A5y);break;default:throw new Error(AZg+BbR.toFixed(
));}return A0L;},_Init:function(aArg){C.EnumToString._Init.call(this,aArg);this.
__proto__=C.AnimalIdAutoGenerationMethodToString;},_className:"Device::AnimalIdAutoGenerationMethodToString"
};C.Hb={A43:0,ADu:1,ACe:2,ADG:3,ABc:4,ADJ:5,ADw:6,ADv:7,ABk:8,AF6:9,ADW:10,ADU:11
,AB0:12,LAST:13};C.MonthToString={BS:function(A8){var Bdw=A8;var Xm=A.jV;switch(
Bdw){case 1:Xm=A.aaR(A.acs.ADu);break;case 2:Xm=A.aaR(A.acs.ACe);break;case 3:Xm=
A.aaR(A.acs.ADG);break;case 4:Xm=A.aaR(A.acs.ABc);break;case 5:Xm=A.aaR(A.acs.ADJ
);break;case 6:Xm=A.aaR(A.acs.ADw);break;case 7:Xm=A.aaR(A.acs.ADv);break;case 8:
Xm=A.aaR(A.acs.ABk);break;case 9:Xm=A.aaR(A.acs.AF6);break;case 10:Xm=A.aaR(A.acs.
ADW);break;case 11:Xm=A.aaR(A.acs.ADU);break;case 12:Xm=A.aaR(A.acs.AB0);break;default:
throw new Error(AZh+Bdw.toFixed());}return Xm;},_Init:function(aArg){C.EnumToString.
_Init.call(this,aArg);this.__proto__=C.MonthToString;},_className:"Device::MonthToString"
};C.Ajs={FileName:A.jV,AF1:0,ABX:0,AnI:false,_Init:function(aArg){this.__proto__=
C.Ajs;A.h7++;},_Done:function(){this.__proto__=null;A.h7--;},_ReInit:function(){
},_Mark:function(D){var B;if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null
,_cycle:0,_observers:null,_className:"Device::DataExportContext"};C.Al$={BC8:0,BEH:
1};C.AVe={Init:function(aArg){var B;A.zX([this,this.BeH],[B=A._GetAutoObject(C.Device
),B.A82,B.BaW],0);this.BeH(this);},Cn:function(){A._GetAutoObject(C.Device).ArI(
this.toString());},BeH:function(G){this.EG(A._GetAutoObject(C.Device).AGO);A.we(
this,0);},_Init:function(aArg){C.Int32ArrayWrapper._Init.call(this,aArg);this.__proto__=
C.AVe;this.Zf(3);this.Init(aArg);},_className:"Device::WeightGainsLowClass"};C.AVd={
Init:function(aArg){var B;A.zX([this,this.BeF],[B=A._GetAutoObject(C.Device),B.A81
,B.BaV],0);this.BeF(this);},Cn:function(){A._GetAutoObject(C.Device).ArH(this.toString(
));},BeF:function(G){this.EG(A._GetAutoObject(C.Device).AGN);A.we(this,0);},_Init:
function(aArg){C.Int32ArrayWrapper._Init.call(this,aArg);this.__proto__=C.AVd;this.
Zf(3);this.Init(aArg);},_className:"Device::WeightGainsHighClass"};C.AVg={Init:function(
aArg){var B;A.zX([this,this.BeJ],[B=A._GetAutoObject(C.Device),B.A85,B.BaZ],0);this.
BeJ(this);},Cn:function(){A._GetAutoObject(C.Device).ArJ(this.toString());},BeJ:
function(G){this.EG(A._GetAutoObject(C.Device).AGR);A.we(this,0);},_Init:function(
aArg){C.Int32ArrayWrapper._Init.call(this,aArg);this.__proto__=C.AVg;this.Zf(3);
this.Init(aArg);},_className:"Device::WeightValuesBirthClass"};C.AVc={Init:function(
aArg){var B;A.zX([this,this.BeD],[B=A._GetAutoObject(C.Device),B.A80,B.BaU],0);this.
BeD(this);},Cn:function(){A._GetAutoObject(C.Device).ArG(this.toString());},BeD:
function(G){this.EG(A._GetAutoObject(C.Device).AGM);A.we(this,0);},_Init:function(
aArg){C.Int32ArrayWrapper._Init.call(this,aArg);this.__proto__=C.AVc;this.Zf(3);
this.Init(aArg);},_className:"Device::WeightGainsAverageClass"};C.AL$={Init:function(
aArg){var B;A.zX([this,this.Bd2],[B=A._GetAutoObject(C.Device),B.A77,B.Bav],0);this.
Bd2(this);},Bd2:function(G){this.EG(A._GetAutoObject(C.Device).ABb);A.we(this,0);
},_Init:function(aArg){C.Int32ArrayWrapper._Init.call(this,aArg);this.__proto__=
C.AL$;this.Zf(3);this.Init(aArg);},_className:"Device::AnimalTypesWeightGainsClass"
};C.BDO={BDR:0,BDF:1,BCt:2,BE9:3,Unknown:4};C.BB9={None:0,BDZ:1,BDT:2,BDP:3,BDQ:
4};C.AhB={A7F:0,Manual:1,TransponderId:2,LAST:3};C.TransponderAssignmentIdChangeMethodToString={
BS:function(A8){var BfM=A8;var AKL=A.jV;switch(BfM){case 0:AKL=A.aaR(A.acf.A7F);
break;case 1:AKL=A.aaR(A.acf.A5i);break;case 2:AKL=A.aaR(A.acf.A5y);break;default:
throw new Error(AH7+BfM.toFixed());}return AKL;},_Init:function(aArg){C.EnumToString.
_Init.call(this,aArg);this.__proto__=C.TransponderAssignmentIdChangeMethodToString;
},_className:"Device::TransponderAssignmentIdChangeMethodToString"};C.A_m={BAj:function(
As3){var Kz=A.ab0(A.abV(As3,15),0,10);var JW=A._GetAutoObject(C.Converter).ZG(Kz
);if(!!JW){if((JW===10)&&(As3.length>16))return 0;else return Kz;}else{JW=A._GetAutoObject(
C.Converter).ZG(A._GetAutoObject(C.Device).Un);if(!!JW&&((JW===10)&&((As3.length===
10)||(As3.length===12)))){var AIT=A.ab0(A.abV(As3,10),0,10);var AJI=A._GetAutoObject(
C.Converter).Bo8(AIT);if((AIT>0)&&!!AJI)return(A._GetAutoObject(C.Converter).Aqc(
JW)*1000000000000)+A.ab0(A.abV(As3,10),0,10);}}return 0;},BAi:function(AoM){if(AoM.
length<8)return 0;var AAh=A._NewObject(A.Core.Bw,0);var A3o=false;var A3t=A.abW(
AoM,4,4);var Atq=A.wz(A3t,0,10);if((Atq<2000)||(Atq>2100)){A3t=A.abV(AoM,4);Atq=
A.wz(A3t,0,10);A3o=true;}if((Atq<2000)||(Atq>2100))return 0;AAh.Year=Atq;var AKs;
var Azq;if(A3o){AKs=A.abW(AoM,4,2);Azq=A.wz(AKs,0,10);}else{AKs=A.abW(AoM,2,2);Azq=
A.wz(AKs,0,10);}if((Azq<1)||(Azq>12))return 0;AAh.Ug(Azq);var AKr;var Azp;if(A3o
){AKr=A.abW(AoM,6,2);Azp=A.wz(AKr,0,10);}else{AKr=A.abV(AoM,2);Azp=A.wz(AKr,0,10
);}if((Azp<1)||(Azp>AAh.Y9()))return 0;AAh.Ln(Azp);return AAh.JI();},_Init:function(
aArg){this.__proto__=C.A_m;A.h7++;},_Done:function(){this.__proto__=null;A.h7--;
},_ReInit:function(){},_Mark:function(D){var B;if((B=this.I)&&(B._cycle!=D))B._Mark(
B._cycle=D);},I:null,_cycle:0,_observers:null,_className:"Device::ParserClass"};
C.ArL={_Init:function(){C.A_m._Init.call(this,0);},_ReInit:function(){},_variants:
function(){return this;},_this:null};C.AnimalTableFieldsToString={BS:function(A8
){var Z9=A8;var ML=A.jV;switch(Z9){case 14:ML=A.aaR(A.acf.Afc);break;case 32:ML=
A.aaR(A.acf.Breed);break;case 4:ML=A.aaR(A.acf.AdX);break;case 28:ML=A.aaR(A.acf.
A48);break;case 33:ML=A.aaR(A.acf.Agr);break;case 23:ML=A.aaR(A.acf.KE);break;case
7:ML=A.aaR(A.acf.Ae6);break;case 2:ML=A.aaR(A.acf.O);break;case 0:ML=A.aaR(A.acf.
GF);break;case 8:ML=A.aaR(A.acf.Alarm);break;case 9:ML=A.aaR(A.acf.ABK);break;case
38:ML=A.aaR(A.acf.Bhu);break;case 11:ML=A.aaR(A.acf.Fever);break;case 29:ML=A.aaR(
A.acf.AQS);break;case 18:ML=A.aaR(A.acf.M2);break;case 26:ML=A.aaR(A.acf.T$);break;
case 22:ML=A.aaR(A.acf.Transponder);break;case 1:ML=A.aaR(A.acf.GA);break;case 34:
ML=A.aaR(A.acf.I6);break;case 6:case 25:case 27:case 10:case 37:case 12:case 17:
case 5:case 3:case 35:case 36:case 15:case 16:case 24:case 31:case 20:case 30:case
21:case 19:case 13:ML=A.jV;break;default:throw new Error(AZi+A8.toFixed());}return ML;
},_Init:function(aArg){C.EnumToString._Init.call(this,aArg);this.__proto__=C.AnimalTableFieldsToString;
},_className:"Device::AnimalTableFieldsToString"};C.Vz={BDc:0,BDa:1,LAST:2};C.DataExportDestinationToString={
BS:function(A8){var BxV=A8;var A1a=A.jV;switch(BxV){case 0:A1a=A.acf.Bip;break;case
1:A1a=A.acf.Bg9;break;default:throw new Error(AsO+A8.toFixed());}return A1a;},_Init:
function(aArg){C.EnumToString._Init.call(this,aArg);this.__proto__=C.DataExportDestinationToString;
},_className:"Device::DataExportDestinationToString"};C.ADD={Bh:0,BEL:1,LAST:2};
C.ListViewScopeToString={BS:function(A8){var By4=A8;var A17=A.jV;switch(By4){case
0:A17=A.aaR(A.acf.Bh);break;case 1:A17=A.aaR(A.acf.Bn$);break;default:throw new Error(
AZj+A8.toFixed());}return A17;},_Init:function(aArg){C.EnumToString._Init.call(this
,aArg);this.__proto__=C.ListViewScopeToString;},_className:"Device::ListViewScopeToString"
};C.AGQ={BFz:0,BFy:1,BFx:2,LAST:3};C.WeightValuePrecisionToString={BS:function(A8
){var BBI=A8;var AK4=A.jV;switch(BBI){case 0:AK4=AZk+A.aaR(A.acf.AzD);break;case
1:AK4=AsP+A.acf.Aio;break;case 2:AK4=Ax8+A.acf.Aio;break;default:throw new Error(
AsQ+A8.toFixed());}return AK4;},_Init:function(aArg){C.EnumToString._Init.call(this
,aArg);this.__proto__=C.WeightValuePrecisionToString;},_className:"Device::WeightValuePrecisionToString"
};C.Agm={BS:function(A8){var AKz=A8;if(AKz===1)return A.aaR(A.acf.Bir);else return C.
AnimalTypeToString.BS.call(this,A8);},_Init:function(aArg){C.AnimalTypeToString.
_Init.call(this,aArg);this.__proto__=C.Agm;},_className:"Device::AnimalTypeToStringHeifer"
};C.YR={RF:0,BDV:1,LAST:2};C.MassDeregistrationCriterionToString={BS:function(A8
){var By7=A8;var A2a=A.jV;switch(By7){case 0:A2a=A.aaR(A.acf.Bjx);break;case 1:A2a=
A.aaR(A.acf.ARA);break;default:throw new Error(AxJ+A8.toFixed());}return A2a;},_Init:
function(aArg){C.EnumToString._Init.call(this,aArg);this.__proto__=C.MassDeregistrationCriterionToString;
},_className:"Device::MassDeregistrationCriterionToString"};C.UInt64PartialFilterCriterion={
A5:A.jV,Aez:0,TF:0,Aa3:function(){var Au=A._NewObject(C.UInt64PartialFilterCriterion
,0);Au.Fc(this);return Au;},Fc:function(AH){C.FilterCriterion.Fc.call(this,AH);var
Au=(C.UInt64PartialFilterCriterion.isPrototypeOf(AH)?AH:null);if(!!Au){this.A5=Au.
A5;this.Aez=Au.Aez;this.TF=Au.TF;}},Initialize:function(A4,D9,A6,As4,AIz,P7){this.
EE=A4;this.Operator=D9;this.A5=A6;this.Ys=P7;this.Aez=As4;this.TF=AIz;return this;
},_Init:function(aArg){C.FilterCriterion._Init.call(this,aArg);this.__proto__=C.
UInt64PartialFilterCriterion;},_className:"Device::UInt64PartialFilterCriterion"
};
C._Init=function(){C.Int32FilterCriterion.__proto__=C.FilterCriterion;C.StringFilterCriterion.
__proto__=C.FilterCriterion;C.Table.__proto__=C.ITable;C.Animal.__proto__=C.Row;
C.Rating.__proto__=C.Row;C.HelperClass.__proto__=C.Amu;C.BoolFilterCriterion.__proto__=
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
C.AUD.__proto__=C.Int32ArrayWrapper;C.AUC.__proto__=C.Int32ArrayWrapper;C.AL_.__proto__=
C.Int32ArrayWrapper;C.UInt64FilterCriterion.__proto__=C.FilterCriterion;C.BooleanToAssignedUnassignedString.
__proto__=C.EnumToString;C.CountryToString.__proto__=C.EnumToString;C.EaseOfDeliveryToString.
__proto__=C.EnumToString;C.WhereAboutsToString.__proto__=C.EnumToString;C.BreedToString.
__proto__=C.EnumToString;C.AnimalIdGenerationMethodToString.__proto__=C.EnumToString;
C.DirectionOfCountingToString.__proto__=C.EnumToString;C.AdY.__proto__=C.EnumToIcon;
C.AdE.__proto__=C.EnumToIcon;C.GermanStateToString.__proto__=C.EnumToString;C.EartagNrAssignmentModeToString.
__proto__=C.EnumToString;C.M0.__proto__=C.EnumToCodeset;C.ReasonOfLeavingToString.
__proto__=C.EnumToString;C.Ahl.__proto__=C.EnumToCodeset;C.KV.__proto__=C.EnumToCodeset;
C.CalfDeregistrations.__proto__=C.Row;C.DeviceComponentToString.__proto__=C.EnumToString;
C.Agz.__proto__=C.EnumToCodeset;C.Aex.__proto__=C.EnumToIcon;C.WhereAboutsFilterCriterion.
__proto__=C.FilterCriterion;C.TimespanDaysToString.__proto__=C.EnumToString;C.USBStateToString.
__proto__=C.EnumToString;C.AnimalIdAutoGenerationMethodToString.__proto__=C.EnumToString;
C.MonthToString.__proto__=C.EnumToString;C.AVe.__proto__=C.Int32ArrayWrapper;C.AVd.
__proto__=C.Int32ArrayWrapper;C.AVg.__proto__=C.Int32ArrayWrapper;C.AVc.__proto__=
C.Int32ArrayWrapper;C.AL$.__proto__=C.Int32ArrayWrapper;C.TransponderAssignmentIdChangeMethodToString.
__proto__=C.EnumToString;C.AnimalTableFieldsToString.__proto__=C.EnumToString;C.
DataExportDestinationToString.__proto__=C.EnumToString;C.ListViewScopeToString.__proto__=
C.EnumToString;C.WeightValuePrecisionToString.__proto__=C.EnumToString;C.Agm.__proto__=
C.AnimalTypeToString;C.MassDeregistrationCriterionToString.__proto__=C.EnumToString;
C.UInt64PartialFilterCriterion.__proto__=C.FilterCriterion;};C._ReInit=function(
){var B;if((B=C.Device._this))B._ReInit(),C.Device._ReInit.call(B);if((B=C.Converter.
_this))B._ReInit(),C.Converter._ReInit.call(B);if((B=C.Helper._this))B._ReInit()
,C.Helper._ReInit.call(B);if((B=C.ArL._this))B._ReInit(),C.ArL._ReInit.call(B);};
C.DE=function(D){var B;if((B=C.Device._this)&&(B._cycle!=D))B._Done(C.Device._this=
null);if((B=C.Converter._this)&&(B._cycle!=D))B._Done(C.Converter._this=null);if((
B=C.Helper._this)&&(B._cycle!=D))B._Done(C.Helper._this=null);if((B=C.ArL._this)&&(
B._cycle!=D))B._Done(C.ArL._this=null);};return C;})();

/* VitalControl demonstration application, © Urban GmbH & Co.KG 2023 */