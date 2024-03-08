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
var EZ="ERROR: UpdateChargeActive is read only";var Hj="ERROR: ScanState is read only.";
var I$="ERROR: MeasureState is read only.";var Io="ERROR: Temperature value is read only";
var OZ="ERROR: UpdateDataTable called for Undefined data table.";var P0="ERROR: UpdateDataTable called for unknown data table id=";
var P1="ERROR: SyncState is read only.";var CO="ERROR: ScanTransponder is read only.";
var E8="ERROR: Body weight value is read only";var Lt="ERROR: Predicted temperature value is read only";
var P2="ERROR: TransferProgress is read only";var JX="ERROR: TransferTarget is read only";
var N$="ERROR: unhandled assessment.";var P3="Unhandled enum BodyTemperature: ";
var MF="AU";var S2="AT";var UM="BE";var ZU="BA";var WT="BG";var Ip="CA";var UN="CN";
var ZV="TW";var WU="HR";var ZW="CY";var WV="CZ";var ZX="DK";var ZY="EE";var UO="FI";
var WW="FR";var Rf="DE";var ZZ="GR";var O0="HU";var Rg="IE";var WX="IT";var WY="JP";
var WZ="LV";var W0="LT";var Z0="LU";var W1="MT";var W2="NL";var S3="NO";var UP="PL";
var Z1="PT";var AcD="RO";var S4="RU";var Z2="SK";var Afp="SI";var Z3="ES";var W3=
"SE";var Z4="CH";var Z5="TR";var Ak0="UA";var JY="UK";var Z6="US";var Lu=".";var
AhK="-";var An8="ERROR: Unhandled mass unit: ";var Oa=" ";var W4="Unhandled gender";
var An9="Unhandled animal type";var AhL="Unhandled Device::MassUnit.";var AhM="Unhandled Device::AnimalListContent.";
var AcE="Avid";var UQ="Ordicam / IER SA";var An_="Agrident";var An$="Datamars";var
Aoa="Allflex";var Aob="Texas Instruments";var Afq="Nedap";var Ak1="Digital Angel";
var AxP="null";var AxQ="[ ";var O1=", ";var Rh=" ]";var AxR="Unhandled language";
var UR="Unhandled Device::AnimalListAction.";var AsD="Temperature unit conversion not supported: ";
var AxS="->";var AxT="=";var AxU=">";var Aoc="<";var Afr="!=";var Aod="WARNING: Unhandled operator.";
var IN="Unknown birth type";var Aoe="Unhandled country: ";var W5="ERROR: Cannot start transaction";
var Ak2="ERROR: Table is null, cannot load row (";var AsE=")";var AsF="Table Id mismatch!";
var AsG="ERROR: Row index (";var AsH=") out of bounds [0,";var Ak3="]";var AsI="ERROR: Table is full. Item limit: ";
var AxV="Device::ScanTransponder not set";var AxW="Unhandled TransponderType.";var
AVE="Unhandled ScanState.";var AVF="Could not load animal with transponder";var AsJ=
"Birth type";var AxX="Time calving";var P4="Pend. reg. notice";var AxY="Perished";
var AVG="Rating temp.";var AVH="Location";var AVI=" mother";var AVJ="Reason leaving";
var AHb="Time alarm";var AHc="Time first weighing";var Afs="Time control";var Aof=
"Time temp.";var AVK="Time watch";var AHd="Time weighing";var Ak4="Assessment";var
AHe="Time rating";var AHf="ERROR: Unhandled AnimalTable filter field:";var AHg="Field ";
var AVL="ERROR: Unhandled RatingTable filter field:";var AVM="ERROR: Unhandled table ";
var AVN=" filter fields.";var AcF=" [";var AVO="WARNING: Unhandled filter criterion type.";
var AHh="0";var AsK="No table specified";var AHi="Invalid animal id generation method: ";
var AHj="Unhandled AnimalIdGenerationMethod: ";var AxZ="Invalid gender: ";var AHk=
"Invalid ear tag number assignment mode: ";var Ax0=";";var AVP="Invalid animal creation error code: ";
var AVQ="Invalid EartagNrAssignmentMode: ";var AVR="Unsupported exponent: ";var AVS=
"Unknown whereabouts type: ";var AHl="Unhandled Gender: ";var AVT="Unhandled AnimalIdAutoGenerationMethod: ";
var O2="\n";var Ax1="\n\n";var AVU="Bootloader:\nV\xA0";var AVV="Middleware:\nV\xA0";
var AVW="GUI:\nV\xA0";var AVX="Mainboard: ";var AVY="Torchboard: ";var AVZ="Operator not supported.";
var AV0="Unhandled Device::TransponderAssignmentIdChangeMethod: ";var Ax2="Unhandled mass deregistration criterion: ";
var AsL="Unhandled enum value ";var AsM="UNDEFINED";var AV1="Boot";var AV2="Charge";
var AV3="ChargeWarning";var AV4="ControlledPowerOff";var AHm="DeviceMain";var AV5=
"DeviceService";var AHn="DeviceInfo";var AHo="DeviceDataManagement";var AHp="DeviceAnimalDataMenu";
var AV6="DeviceDeviceDataMenu";var AHq="DeviceCheck";var AHr="Home";var AV7="Settings";
var Ri="DateTimeSettings";var W6="UnitsSettings";var AV8="DataAcquisitionSettings";
var AV9="RegistrationAutomaticSettings";var AV_="RegistrationPresettingsSettings";
var AV$="TransponderAssignmentSettings";var AWa="TemperatureSettings";var AWb="WeightGainSettings";
var AWc="DeviceSettings";var AhN="RegistrationSettings";var AHs="InitializationSettings";
var AWd="PremisesSettings";var AWe="Sleep";var AHt="Sync";var AHu="EditAnimalData";
var Ax3="EditAnimalDataNaisId";var P5="AnimalList";var AWf="AnimalListFilter";var
AWg="AlarmListFilter";var AWh="WatchListFilter";var AsN="AnimalActionActions";var
AWi="AnimalActionTemperature";var AWj="TemperatureMeasurement";var AWk="AnimalActionWeighing";
var AWl="AnimalActionRate";var AWm="AnimalActionUnregister";var AWn="AnimalActionPerished";
var AsO="AnimalActionNewBornCare";var AWo="AlarmList";var AWp="ControlMeasure";var
AWq="ControlList";var AWr="RangeTest";var AWs="ListsMain";var AWt="ListsIdManagement";
var AWu="WatchList";var AWv="AnimalListActions";var AWw="AlarmListActions";var AWx=
"ControlListActions";var AHv="WatchListActions";var Ak5="EvaluationMenuMain";var
AWy="EvaluationMenuWeights";var AWz="EvaluationLosses";var AWA="EvaluationRatings";
var Ax4="EvaluationTemperatures";var Ak6="EvaluationWeights";var AhO="EvaluationWeightsRecent";
var Ax5="EvaluationBirthWeights";var Aog="AnimalEvaluationFilter";var AhP="NewMenu";
var AWB="NewAnimals";var Ax6="NewAnimalManualData";var AHw="MassRecording";var Aft=
"NewAnimalTransponderData";var AHx="NewAnimalLoss";var Z7="AutoActionScanScreen";
var Ak7="ManualActionScanScreen";var Aoh="SetTransponderScreen";var AWC="SetSaveTransponderScreen";
var AWD="NewAnimalSetTransponderScreen";var AWE="NewAnimalsSetTransponderScreen";
var AWF="NewAnimalCalvingDataScreen";var AWG="WeightListScreen";var AsP="AnimalSingleInfoScreen";
var AHy="AnimalMultiInfoScreen";var AHz="AnimalRegistrationDetails";var AWH="MultiInfoActionsScreen";
var AWI="FreshCowListScreen";var AWJ="FreshCowListActionsScreen";var AWK="FreshCowListFilterScreen";
var AWL="DryCowListScreen";var AWM="DryCowListActionsScreen";var AWN="DryCowListFilterScreen";
var AWO="NoTransponderListScreen";var AWP="NoTransponderListActionsScreen";var AWQ=
"NoTransponderListFilterScreen";var AWR="YoungNoTransponderListScreen";var Ax7="YoungNoTransponderListActionsScreen";
var AHA="YoungNoTransponderListFilterScreen";var AHB="NoNaisIdListScreen";var AHC=
"NoNaisIdListActionsScreen";var AHD="NoNaisIdListFilterScreen";var AHE="RegistrationsListScreen";
var AHF="RegistrationsListActionsScreen";var AWS="RegistrationsListFilterScreen";
var AWT="ActionListScreen";var AWU="ActionListActionsScreen";var AWV="ActionListFilterScreen";
var AWW="UpdateScreen";var AWX="MotherScanScreen";var AWY="SetSaveNaisIdScreen";
var Ax8="PurchasedAnimalsList";var AHG="TextInput";var AWZ="Unhandled display mode: ";
var AHH="None";var AhQ="Actions Settings";var W7="Auto Action";var AW0="Menu Item Settings";
var Z8="Rating Type";var AW1="Weighing settings";var AW2="Options";var Aoi="AnimalSearch";
var Afu="AnimalSearchUnfiltered";var Ak8="AnimalSearchDriedOff";var AHI="MeasurementReady";
var AW3="AnimalMultiInfoMenu";var O3="MassRecordingDefaults";var AW4="MassRecordingFields";
var AW5="MassRecordingMenu";var AW6="PurchasedAnimalsListMenu";var AW7="BirthRegistrationsListMenu";
var AHJ="Unhandled overlay menu: ";var AsQ="Error";var Ax9="Idle";var AW8="IdScanned";
var AW9="NotFound";var AHK="Progress";var AHL="Unhandled scan state: ";var AW_="Prediction";
var AHM="Ready";var AW$="Unhandled measure state: ";var AHN="Unhandled temperature unit: ";
var AXa="Unhandled species: ";var AHO="English";var AHP="Nederlands";var Ax_="Deutsch";
var AXb="Eesti";var AXc="Suomalainen";var AXd="Fran\xE7ais";var AXe="\u0395\u03BB\u03BB\u03B7\u03BD\u03B9\u03BA\u03AC";
var AXf="\u0411\u044A\u043B\u0433\u0430\u0440\u0441\u043A\u0438";var AXg="Italiano";
var AXh="\u0420\u0443\u0441\u0441\u043A\u0438\u0439";var AXi="Espa\xF1ol";var AsR=
"T\xFCrk\xE7e";var AsS="\u6B63\u9AD4\u5B57/\u7E41\u9AD4\u5B57";var AHQ="\u010Ce\u0161tina";
var AXj="Bosanski";var AXk="Norsk";var AXl="\u0423\u043A\u0440\u0430\u0457\u043D\u0441\u044C\u043A\u0438\u0439";
var AHR="Unhandled language: ";var AXm="EN";var AXn="ET";var AXo="EL";var AXp="ZH";
var AXq="CS";var AXr="BS";var AXs="Unhandled gender: ";var AXt="Unhandled birth type: ";
var AXu="Exporting";var AXv="ImportFinish";var AXw="ImportStart";var AXx="Importing";
var AXy="Init";var AXz="Unhandled sync state: ";var Ax$="Unhandled rating attribute: ";
var AHS="Unhandled assessment: ";var AsT="Illegal boolean value: ";var Aya="Unhandled popup ID:";
var Ayb="Unknown";var Ayc="Severe Error";var AHT="ErrorsDeviceDriverCheck";var AXA=
"Enter Sleep";var AHU="About";var AXB="InfoSoftwareVersions";var AHV="InfoHardwareVersions";
var AXC="InfoSerial";var AXD="ShutDown";var AXE="SuccessDataSync";var AXF="SuccessResetFactory";
var AXG="SuccessResetAnimalData";var AXH="SuccessCreateBackup";var AXI="SuccessRestoreBackup";
var AXJ="CreateBackupInProgress";var AXK="RestoreBackupInProgress";var AXL="FailedCreateBackup";
var AXM="FailedRestoreBackup";var AXN="TechnicalDetails";var Ayd="WarningDataSync";
var AXO="WarningFactory";var AXP="WarningResetAnimalData";var Aye="WarningRestart";
var AsU="WarningAutoAction";var US="WarningAutoActionNotApplicable";var AsV="WarningNoMenuItem";
var AXQ="WarningEnterDemoMode";var AXR="NoAnimalsRegistered";var AXS="MaxNumAnimalsReached";
var AHW="MaxNumRatingsReached";var AXT="MaxNumCalfDeregistrationsReached";var AHX=
"MissingTransponder";var AXU="EarTagNumberTooShort";var AXV="NoValidCountryCode";
var AXW="WarningOutdatedAnimalWeight";var AsW="WarningOutdatedAnimalWeights";var
AXX="WarningWeightEvaluationSingular";var AXY="WarningWeightEvaluationPlural";var
AHY="ScanError";var AXZ="ScanNotFound";var AX0="ScannedAnimalNotFound";var AX1="ScannedTransponderNotFound";
var AX2="AnimalNotFound";var AcG="SuccessUnregister";var AX3="SuccessUnregisterPerished";
var AX4="SuccessCreationNewAnimal";var AX5="SuccessCreationNewAnimals";var AX6="AnimalCreationInProgress";
var AHZ="EvaluationInProgress";var AX7="DataSyncInProgress";var AX8="AddedToAlarm";
var AX9="RemovedFromAlarm";var AX_="AddedToWatch";var AX$="RemovedFromWatch";var
AYa="AddedToDryOff";var AH0="RemovedFromDryOff";var AYb="AnimalIdAlreadyExists";
var AYc="AnimalIdAlreadyExistsContinuable";var AYd="MissingAnimalId";var AH1="MissingAnimalIdMother";
var AH2="MissingEartagNumber";var AYe="MissingTransponderId";var AYf="TransponderAlreadyRegistered";
var AYg="TransponderAlreadyRegisteredContinuable";var AYh="TransponderAlreadyRegisteredCapturable";
var Rj="HelpAnimalInfoRating";var AsX="WarningReassignTransponder";var AH3="CannotReassignNaisId";
var AH4="WarningResetToDefaultValue";var Aoj="WarningResetThresholds";var Aok="WarningResetTempThresholds";
var Ayf="UpdateFirmware";var AYi="UpdateFirmwareBatteryLow";var AH5="ConfirmFirmwareUpdated";
var AYj="ConfirmBootloaderUpdated";var AYk="QuestionAddAnotherCalfMultiples";var
AYl="RemovedAllBirthNoticesPending";var AYm="RemovedAllPurchasedNoticePending";var
AYn="RemovedFromBirthNoticePending";var AYo="RemovedFromPurchasedNoticePending";
var AYp="SuccessClearAnimalLoss";var AYq="RemovedAnimalBirth";var AYr="RemovedAnimalPurchased";
var AYs="WarningNoActionsForAnimalLoss";var AYt="SuccessLinkTransponder";var AYu=
"SuccessChangeTransponder";var AYv="SuccessUnlinkTransponder";var AYw="SuccessLinkNaisId";
var AYx="WarningDataExportHitBirthFailed";var AYy="SuccessDataExportHitBirth";var
AYz="SuccessDataExportHitBirthDownload";var Aol="WarningDataExportHitPurchasedFailed";
var AH6="SuccessDataExportHitPurchased";var AYA="SuccessDataExportHitPurchasedDownload";
var AH7="WarningDataExportAnimalsFailed";var AH8="SuccessDataExportAnimalsRatings";
var Z9="SuccessDataExportAnimalsDownload";var AH9="WarningNoPremisesID";var AYB=
"WarningNoFlashDrivePresent";var AH_="WarningNoBackupPathPresent";var AYC="WarningNoBackupFilePresent";
var Ayg="DemoFunctionNotAvailable";var AYD="WarningImpreciseTimeSetting";var AYE=
"ConfirmationRestoreBackup";var Ayh="ConfirmationMassDeregistration";var AYF="SuccessMassDeregistration";
var AYG="WarningParsedDateInFutureInvalid";var AYH="WarningParsingDateFailed";var
AH$="WarningParsingNaisIdFailed";var Aom="WarningParsingShortNaisIdWithoutPremisesId";
var AIa="AnimalId";var AYI="FarmId";var AIb="GroupId";var AIc="PersonId";var Ak9=
"Unhandled transponder type: ";var AYJ="FDX";var Aon="HDX";var AYK="HDX (Urban)";
var AId="Unhandled transponder protocol: ";var AIe="Illegal RatingMode: ";var AYL=
"Unhandled mass unit: ";var AYM="Max array size is 10";var Ayi="Index out of bounds";
var AYN="ERROR: Received more integers than expected!";var AIf="Unhandled double scan action :";
var AYO="Illegal WeightRecordingMode: ";var AYP="Illegal WeightRecordingScope: ";
var AYQ="AnimalData";var AYR="Rating";var AYS="Temperature";var AYT="Weight";var
AYU="Alarm infos";var AYV="Control infos";var AYW="Watch infos";var AYX="Fresh cow infos";
var AYY="No transponder infos";var AYZ="Dry cow info";var AIg="No nais id infos";
var Z_="Birth registrations infos";var AY0="Purchased registrations infos";var Ayj=
"Young no transponder infos";var AY1="Unhandled animal list content:";var AY2="Illegal AutoRegistrationMode: ";
var AY3="Illegal FactoryResetScope: ";var Aoo="??";var AY4="Illegal EaseOfDelivery: ";
var AY5="Illegal Whereabouts: ";var AsY="Illegal breed: ";var AsZ="Unisex";var As0=
"Illegal animalIdGenerationMethod: ";var As1="Ascending";var Ayk="Descending";var
Aop="Illegal directionOfCountingName: ";var AIh="Unhandled direction of counting: ";
var As2="Unhandled German state: ";var AY6="SH";var AY7="HH";var AY8="NI";var AY9=
"HB";var AY_="NW";var AY$="HE";var AZa="RP";var AZb="BW";var AZc="BY";var AZd="SL";
var AZe="BB";var AZf="MV";var Ayl="SN";var AZg="ST";var Aym="TH";var Ayn="One Range Male Female";
var AZh="Two Ranges Male Female";var AIi="Illegal EartagAssignmentMode: ";var AZi=
"Unhandled code set value ";var Ayo="Implement in derived class";var AZj="Illegal HIT-Code: ";
var AZk="Illegal ReasonOfLeaving: ";var AIj="Illegal code: ";var AZl="Undefined";
var AZm="Illegal DeviceComponent: ";var AZn="Unhandled Device::MotherSelectionFilterMode: ";
var AZo="Illegal Device::TimespanDays: ";var AZp="Not connected";var AIk="Host";
var AZq="Device";var AZr="Device CDC";var AZs="Host MSC";var AZt="Host HID";var AZu=
"Host CDC";var AZv="Illegal animalIdAutoGenerationMethod: ";var AZw="Unhandled month: ";
var AIl="Illegal transponderAssignmentIdChangeMethod: ";var AZx="Unhandled animal table field: ";
var As3="Unhandled data export destination: ";var AZy="Unhandled list view scope: ";
var AZz="1 ";var As4="100 ";var Ayp="10 ";var As5="Unhandled weight value precision: ";
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
B8:null,B9:null,CW:function(AH){if(!AH)return;var Av=this.B8;while(!!Av){if(Av===
AH)throw new Error(Cc);Av=Av.Ah;}AH.AJ=this.B9;if(!!this.B9)this.B9.Ah=AH;this.B9=
AH;if(!this.B8)this.B8=AH;},AOy:function(){return this.B8;},AOD:function(BbF){if(
!!BbF)return BbF.Ah;return null;},DN:function(AIR,D$){var Av=this.B8;while(!!Av){
if(Av.EF===AIR){if(D$===1)return Av;else if(Av.Operator===D$)return Av;}Av=Av.Ah;
}return null;},N3:function(AH){var Av=this.B8;while(!!Av){if(Av===AH){if(!!Av.AJ
)Av.AJ.Ah=Av.Ah;if(!!Av.Ah)Av.Ah.AJ=Av.AJ;if(this.B8===Av)this.B8=Av.Ah;if(this.
B9===Av)this.B9=Av.AJ;Av.Ah=null;Av.AJ=null;return;}Av=Av.Ah;}},Fd:function(){var
Be=A._NewObject(C.Filter,0);var Av=this.B8;while(!!Av){Be.CW(Av.Aa_());Av=Av.Ah;
}return Be;},_Init:function(aArg){this.__proto__=C.Filter;A.h7++;},_Done:function(
){this.__proto__=null;A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((
B=this.B8)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.B9)&&(B._cycle!=D))B._Mark(
B._cycle=D);if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:
null,_className:"Device::Filter"};C.FilterCriterion={Ah:null,AJ:null,EF:-1,Operator:
1,YA:false,Aa_:function(){return null;},Fd:function(AH){if(!AH)return;this.EF=AH.
EF;this.Operator=AH.Operator;this.YA=AH.YA;},_Init:function(aArg){this.__proto__=
C.FilterCriterion;A.h7++;},_Done:function(){this.__proto__=null;A.h7--;},_ReInit:
function(){},_Mark:function(D){var B;if((B=this.Ah)&&(B._cycle!=D))B._Mark(B._cycle=
D);if((B=this.AJ)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.I)&&(B._cycle!=D
))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:"Device::FilterCriterion"
};C.Int32FilterCriterion={A5:0,Aa_:function(){var Av=A._NewObject(C.Int32FilterCriterion
,0);Av.Fd(this);return Av;},Fd:function(AH){C.FilterCriterion.Fd.call(this,AH);var
Av=(C.Int32FilterCriterion.isPrototypeOf(AH)?AH:null);if(!!Av)this.A5=Av.A5;},Initialize:
function(A4,D$,A7,P8){this.EF=A4;this.Operator=D$;this.A5=A7;this.YA=P8;return this;
},_Init:function(aArg){C.FilterCriterion._Init.call(this,aArg);this.__proto__=C.
Int32FilterCriterion;},_className:"Device::Int32FilterCriterion"};C.DeviceClass={
AD8:0,AD7:0,AvS:0,Ur:0,OO:null,St:null,QT:null,SQ:null,RT:null,Ao:null,Bv:null,Agj:
null,AnF:null,Pl:null,Auq:A.jV,AutoActions:A.jV,ABu:A.jV,AGL:A.jV,AGM:A.jV,Ahw:A.
jV,AG7:A.jV,AG8:A.jV,ABv:A.jV,AG6:A.jV,AG$:A.jV,ABp:A.jV,ABq:A.jV,NoNaisIdListActions:
A.jV,NoTransponderListActions:A.jV,YoungNoTransponderListActions:A.jV,AaT:100,Ks:
0,AMM:75,ZQ:3600,ATO:0,A0:5,AF:0,KW:50000,Pg:0,AF1:0,AdG:0,AqQ:0,AqP:0,ARA:1,ARz:
1,AjN:0,ARB:1,AxB:0,Aff:0,AqD:10,AUA:5,AD0:60,AvN:0,OI:1,WhereAbouts:0,VE:0,AhG:
0,Axt:3,ACu:0,Amk:0,Agl:1,AhH:0,AbK:0,Aqe:0,ANL:11,Breed:0,EartagNrAssignmentMode:
0,AuS:0,ACn:0,ACm:0,If:5,ABo:2,Aqg:0,AOp:2,AVl:0,D7:0,ALV:0,JE:0,Gender:2,WeightRecordingScope:
1,WeightRecordingMode:1,AnimalType:0,MassUnit:0,AutoRegistrationMode:0,RatingMode:
0,SyncState:0,OverlayMenu:0,TemperatureUnit:0,Language:0,MeasureState:0,ScanState:
0,KF:3,AeB:true,ARm:false,Ap7:true,AqE:false,AmG:true,HA:false,AU4:false,AmH:false
,AVj:false,Asx:false,AD6:false,Amt:false,UpdateActiveScreen:function(AK){if(this.
KF===AK)return;this.KF=AK;A.abo([this,this.AEh,this.BaQ],0);},Zg:function(E){if(
this.K&&this.K.Zg)return this.K.Zg.apply(this,arguments);else return C.DeviceClass.
Bt9.apply(this,arguments);},Bt9:function(E){},BaQ:function(Aq){this.Zg(Aq);},UpdateBatteryChargeState:
function(AK){if(this.AaT===AK)return;this.AaT=AK;A.abo([this,this.AvX,this.Ayv],
0);},Awi:function(E){if(this.K&&this.K.Awi)return this.K.Awi.apply(this,arguments
);else return C.DeviceClass.Buj.apply(this,arguments);},Buj:function(E){A.ab5("%s"
,BF);},Ayv:function(Aq){this.Awi(Aq);},UpdateChargeActive:function(AK){if(this.Amt===
AK)return;this.Amt=AK;A.abo([this,this.Av0,this.Ayw],0);},AEO:function(E){if(this.
K&&this.K.AEO)return this.K.AEO.apply(this,arguments);else return C.DeviceClass.
Bup.apply(this,arguments);},Bup:function(E){A.ab5("%s",EZ);},Ayw:function(Aq){this.
AEO(Aq);},UpdateScanState:function(AK){var B;if(this.ScanState===AK)return;this.
ScanState=AK;A.abo([this,this.ASq,this.AZ4],0);A._GetAutoObject(C.Helper).BAu(this
);},ArN:function(E){if(this.K&&this.K.ArN)return this.K.ArN.apply(this,arguments
);else return C.DeviceClass.Bu6.apply(this,arguments);},Bu6:function(E){A.ab5("%s"
,Hj);},AZ4:function(Aq){this.ArN(Aq);},UpdateMeasureState:function(AK){if(this.MeasureState===
AK)return;this.MeasureState=AK;A.abo([this,this.AEp,this.AIA],0);},AwH:function(
E){if(this.K&&this.K.AwH)return this.K.AwH.apply(this,arguments);else return C.DeviceClass.
BuO.apply(this,arguments);},BuO:function(E){A.ab5("%s",I$);},AIA:function(Aq){this.
AwH(Aq);},UpdateTempValue:function(AK){if(this.Ks===AK)return;this.Ks=AK;A.abo([
this,this.AEt,this.AIC],0);},AwV:function(E){if(this.K&&this.K.AwV)return this.K.
AwV.apply(this,arguments);else return C.DeviceClass.Bva.apply(this,arguments);},
Bva:function(E){A.ab5("%s",Io);},AIC:function(Aq){this.AwV(Aq);},Ant:function(E){
if(this.K&&this.K.Ant)return this.K.Ant.apply(this,arguments);else return C.DeviceClass.
BuI.apply(this,arguments);},BuI:function(E){},Ba6:function(Aq){this.Ant(Aq);},AwW:
function(E){if(this.K&&this.K.AwW)return this.K.AwW.apply(this,arguments);else return C.
DeviceClass.Bvb.apply(this,arguments);},Bvb:function(E){},As9:function(Aq){this.
AwW(Aq);},AEM:function(E){if(this.K&&this.K.AEM)return this.K.AEM.apply(this,arguments
);else return C.DeviceClass.Buo.apply(this,arguments);},Buo:function(E){},BaY:function(
Aq){this.AEM(Aq);},AFj:function(E){if(this.K&&this.K.AFj)return this.K.AFj.apply(
this,arguments);else return C.DeviceClass.BuQ.apply(this,arguments);},BuQ:function(
E){},AZY:function(Aq){this.AFj(Aq);},UpdateMonitoring:function(AK){if(this.AD6===
AK)return;this.AD6=AK;A.abo([this,this.ASh,this.AZY],0);},UpdateDataTable:function(
BbG){var B;switch(BbG){case 0:A.pe([B=this.Ao,B.Akd],this);break;case 1:A.pe([B=
this.Bv,B.Akd],this);break;case 3:A.pe([B=this.Agj,B.Akd],this);break;case 4:A.pe([
B=this.Pl,B.Akd],this);break;case 2:A.ab5("%s",OZ);break;default:A.ab5("%s%e",P0
,BbG);}},Axs:function(){if(this.K&&this.K.Axs)return this.K.Axs.apply(this,arguments
);else return C.DeviceClass.BvJ.apply(this,arguments);},BvJ:function(){},AhA:function(
){if(this.K&&this.K.AhA)return this.K.AhA.apply(this,arguments);else return C.DeviceClass.
BvM.apply(this,arguments);},BvM:function(){},Ahx:function(){if(this.K&&this.K.Ahx
)return this.K.Ahx.apply(this,arguments);else return C.DeviceClass.BvK.apply(this
,arguments);},BvK:function(){},AnR:function(){if(this.K&&this.K.AnR)return this.
K.AnR.apply(this,arguments);else return C.DeviceClass.BvN.apply(this,arguments);
},BvN:function(){},UpdateLanguage:function(AK){if(this.Language===AK)return;this.
Language=AK;switch(AK){case 14:A._SetLanguage(1);break;case 13:A._SetLanguage(2);
break;case 6:A._SetLanguage(3);break;case 11:A._SetLanguage(4);break;case 10:A._SetLanguage(
5);break;case 12:A._SetLanguage(6);break;case 5:A._SetLanguage(7);break;case 3:A.
_SetLanguage(8);break;case 1:A._SetLanguage(9);break;case 8:A._SetLanguage(10);break;
case 4:A._SetLanguage(11);break;case 15:A._SetLanguage(13);break;case 9:A._SetLanguage(
15);break;case 2:A._SetLanguage(16);break;case 7:A._SetLanguage(17);break;case 16:
A._SetLanguage(18);break;default:A._SetLanguage(0);}A.abo([this,this.A8I,this.Ba6
],0);},UpdateTemperatureUnit:function(AK){if(this.TemperatureUnit===AK)return;this.
TemperatureUnit=AK;A.abo([this,this.Arj,this.As9],0);},UpdateBrightness:function(
AK){if(this.AMM===AK)return;this.AMM=AK;A.abo([this,this.A8t,this.BaY],0);},SetSystemTime:
function(AhZ){if(this.K&&this.K.SetSystemTime)return this.K.SetSystemTime.apply(
this,arguments);else return C.DeviceClass.BvH.apply(this,arguments);},BvH:function(
AhZ){},Axm:function(){if(this.K&&this.K.Axm)return this.K.Axm.apply(this,arguments
);else return C.DeviceClass.BaF.apply(this,arguments);},BaF:function(){},AGd:function(
){if(this.K&&this.K.AGd)return this.K.AGd.apply(this,arguments);else return C.DeviceClass.
BaD.apply(this,arguments);},BaD:function(){},Bn6:function(){},UpdateOverlayMenu:
function(AK){if(this.OverlayMenu===AK)return;this.OverlayMenu=AK;A.abo([this,this.
Awa,this.AyD],0);},Dt:function(E){if(this.K&&this.K.Dt)return this.K.Dt.apply(this
,arguments);else return C.DeviceClass.Bu1.apply(this,arguments);},Bu1:function(E
){},AyD:function(Aq){this.Dt(Aq);},Aw1:function(E){if(this.K&&this.K.Aw1)return this.
K.Aw1.apply(this,arguments);else return C.DeviceClass.Bvk.apply(this,arguments);
},Bvk:function(E){},Bbf:function(Aq){this.Aw1(Aq);},UpdateUnderTemp:function(AK){
if(this.ZQ===AK)return;this.ZQ=AK;A.abo([this,this.A9b,this.Bbf],0);},UpdateSyncState:
function(AK){if(this.SyncState===AK)return;this.SyncState=AK;A.abo([this,this.ASs
,this.AZ6],0);},Ab1:function(E){if(this.K&&this.K.Ab1)return this.K.Ab1.apply(this
,arguments);else return C.DeviceClass.Bu$.apply(this,arguments);},Bu$:function(E
){A.ab5("%s",P1);},AZ6:function(Aq){this.Ab1(Aq);},ACQ:function(){if(this.K&&this.
K.ACQ)return this.K.ACQ.apply(this,arguments);else return C.DeviceClass.Bt1.apply(
this,arguments);},Bt1:function(){return A.jV;},UpdatePopup:function(J0,A0O,A0K,A0R
){this.A_(J0,A0O,A0K,A0R,[this,this.BAc]);},PopupStateChanged:function(J0,Ae){if(
this.K&&this.K.PopupStateChanged)return this.K.PopupStateChanged.apply(this,arguments
);else return C.DeviceClass.Bvx.apply(this,arguments);},Bvx:function(J0,Ae){},AFM:
function(E){if(this.K&&this.K.AFM)return this.K.AFM.apply(this,arguments);else return C.
DeviceClass.Bvm.apply(this,arguments);},Bvm:function(E){},Bbg:function(Aq){this.
AFM(Aq);},UpdateVibrationOnKeypressEnabled:function(AK){if(this.Asx===AK)return;
this.Asx=AK;A.abo([this,this.A9c,this.Bbg],0);},Ae0:function(E){if(this.K&&this.
K.Ae0)return this.K.Ae0.apply(this,arguments);else return C.DeviceClass.Bvl.apply(
this,arguments);},Bvl:function(E){},AID:function(Aq){this.Ae0(Aq);},UpdateVibrationOn:
function(Bb9){if(this.AVj===Bb9)return;this.AVj=Bb9;A.abo([this,this.AEu,this.AID
],0);},A_:function(J0,A0O,A0K,A0R,Bxd){var Aga=A._NewObject(C.PopupContext,0);Aga.
Id=J0;Aga.Show=A0O;Aga.Aky=A0K;Aga.AkS=A0R;Aga.AFU=Bxd;this.AnF.Trigger(Aga,false
);},BAc:function(G){var At=(C.PopupContext.isPrototypeOf(G)?G:null);if(!!At)this.
PopupStateChanged(At.Id,At.PopupState);},AwR:function(E){if(this.K&&this.K.AwR)return this.
K.AwR.apply(this,arguments);else return C.DeviceClass.Bu5.apply(this,arguments);
},Bu5:function(E){},AZ3:function(Aq){this.AwR(Aq);},UpdateRatingMode:function(AK
){if(this.RatingMode===AK)return;this.RatingMode=AK;A.abo([this,this.ASp,this.AZ3
],0);},AeR:function(E){if(this.K&&this.K.AeR)return this.K.AeR.apply(this,arguments
);else return C.DeviceClass.BuA.apply(this,arguments);},BuA:function(E){},As8:function(
Aq){this.AeR(Aq);},UpdateFlashLightOn:function(BbP){if(this.AmH===BbP)return;this.
AmH=BbP;A.abo([this,this.Arg,this.As8],0);},Uk:function(E){if(this.K&&this.K.Uk)
return this.K.Uk.apply(this,arguments);else return C.DeviceClass.Bve.apply(this,
arguments);},Bve:function(E){},AZ7:function(Aq){this.Uk(Aq);},UpdateTopLightOn:function(
Bb4){if(this.AU4===Bb4)return;this.AU4=Bb4;A.abo([this,this.ASu,this.AZ7],0);},Ws:
function(E){if(this.K&&this.K.Ws)return this.K.Ws.apply(this,arguments);else return C.
DeviceClass.Bu4.apply(this,arguments);},Bu4:function(E){},Bv1:function(Aq){this.
Ws(Aq);},UpdateRGBTopLight:function(BbZ){if(this.ATO===BbZ)return;this.ATO=BbZ;A.
abo([this,this.BkU,this.Bv1],0);},Awh:function(E){if(this.K&&this.K.Awh)return this.
K.Awh.apply(this,arguments);else return C.DeviceClass.Bui.apply(this,arguments);
},Bui:function(E){},BvU:function(Aq){this.Awh(Aq);},UpdateAutoRegistrationMode:function(
BbC){if(this.AutoRegistrationMode===BbC)return;this.AutoRegistrationMode=BbC;A.abo([
this,this.Bki,this.BvU],0);},ArO:function(E){if(this.K&&this.K.ArO)return this.K.
ArO.apply(this,arguments);else return C.DeviceClass.Bu7.apply(this,arguments);},
Bu7:function(E){A.ab5("%s",CO);},AZ5:function(Aq){this.ArO(Aq);},UpdateScanTransponder:
function(J0,Bb7,Bb6){if(((this.OO.Id===J0)&&(this.OO.TransponderType===Bb7))&&(this.
OO.TransponderProtocol===Bb6))return;this.OO.OnSetId(J0);this.OO.ATr(Bb7);this.OO.
ATq(Bb6);A.abo([this,this.ASr,this.AZ5],0);},PN:function(E){if(this.K&&this.K.PN
)return this.K.PN.apply(this,arguments);else return C.DeviceClass.Bus.apply(this
,arguments);},Bus:function(E){},AcH:function(Aq){this.PN(Aq);},UpdateDigitsID:function(
BbK){if(this.A0===BbK)return;this.A0=BbK;A.abo([this,this.AbQ,this.AcH],0);},QZ:
function(E){if(this.K&&this.K.QZ)return this.K.QZ.apply(this,arguments);else return C.
DeviceClass.Bu0.apply(this,arguments);},Bu0:function(E){},AcI:function(Aq){this.
QZ(Aq);},UpdateOffsetID:function(BbW){if(this.AF===BbW)return;this.AF=BbW;A.abo([
this,this.AbR,this.AcI],0);},AFQ:function(E){if(this.K&&this.K.AFQ)return this.K.
AFQ.apply(this,arguments);else return C.DeviceClass.Bvt.apply(this,arguments);},
Bvt:function(E){A.ab5("%s",E8);},AIE:function(Aq){this.AFQ(Aq);},UpdateWeightValue:
function(AK){if(this.KW===AK)return;this.KW=AK;A.abo([this,this.AEv,this.AIE],0);
},AwE:function(E){if(this.K&&this.K.AwE)return this.K.AwE.apply(this,arguments);
else return C.DeviceClass.BuL.apply(this,arguments);},BuL:function(E){},AZX:function(
Aq){this.AwE(Aq);},UpdateMassUnit:function(AK){if(this.MassUnit===AK)return;this.
MassUnit=AK;A.abo([this,this.ASg,this.AZX],0);},Arn:function(E){if(this.K&&this.
K.Arn)return this.K.Arn.apply(this,arguments);else return C.DeviceClass.Baz.apply(
this,arguments);},Baz:function(E){},BaN:function(Aq){this.Arn(Aq);},Aro:function(
E){if(this.K&&this.K.Aro)return this.K.Aro.apply(this,arguments);else return C.DeviceClass.
BaA.apply(this,arguments);},BaA:function(E){},AZR:function(Aq){this.Aro(Aq);},UpdateActiveActions:
function(AK){if(this.Pg===AK)return;this.Pg=AK;A.abo([this,this.A8d,this.BaN],0);
},UpdateActiveActionsOrder:function(AK){if(this.Auq===AK)return;this.Auq=AK;A.abo([
this,this.AR4,this.AZR],0);},Akk:function(E){if(this.K&&this.K.Akk)return this.K.
Akk.apply(this,arguments);else return C.DeviceClass.BaB.apply(this,arguments);},
BaB:function(E){},BaW:function(Aq){this.Akk(Aq);},UpdateAutoActions:function(AK){
if(this.AutoActions===AK)return;this.AutoActions=AK;A.abo([this,this.A8p,this.BaW
],0);},AGE:function(){if(this.K&&this.K.AGE)return this.K.AGE.apply(this,arguments
);else return C.DeviceClass.BvL.apply(this,arguments);},BvL:function(){},Asp:function(
){if(this.K&&this.K.Asp)return this.K.Asp.apply(this,arguments);else return C.DeviceClass.
BvP.apply(this,arguments);},BvP:function(){},Ex:function(E){if(this.K&&this.K.Ex
)return this.K.Ex.apply(this,arguments);else return C.DeviceClass.Buf.apply(this
,arguments);},Buf:function(E){},BvT:function(Aq){this.Ex(Aq);},UpdateAnimalType:
function(Ek){if(this.AnimalType===Ek)return;this.AnimalType=Ek;A.abo([this,this.
PM,this.BvT],0);},Aw2:function(E){if(this.K&&this.K.Aw2)return this.K.Aw2.apply(
this,arguments);else return C.DeviceClass.Bvr.apply(this,arguments);},Bvr:function(
E){},Bbl:function(Aq){this.Aw2(Aq);},UpdateWeightRecordingMode:function(Bb$){if(
this.WeightRecordingMode===Bb$)return;this.WeightRecordingMode=Bb$;A.abo([this,this.
A9k,this.Bbl],0);},AFp:function(E){if(this.K&&this.K.AFp)return this.K.AFp.apply(
this,arguments);else return C.DeviceClass.Bu2.apply(this,arguments);},Bu2:function(
E){A.ab5("%s",Lt);},AZ1:function(Aq){this.AFp(Aq);},UpdatePredictedTempValue:function(
AK){if(this.AF1===AK)return;this.AF1=AK;A.abo([this,this.ASm,this.AZ1],0);},SF:function(
L6){if(this.K&&this.K.SF)return this.K.SF.apply(this,arguments);else return C.DeviceClass.
BvG.apply(this,arguments);},BvG:function(L6){},AEU:function(E){if(this.K&&this.K.
AEU)return this.K.AEU.apply(this,arguments);else return C.DeviceClass.Bur.apply(
this,arguments);},Bur:function(E){},AIx:function(Aq){this.AEU(Aq);},UpdateDemoMode:
function(AK){if(this.HA===AK)return;this.HA=AK;A.abo([this,this.AEm,this.AIx],0);
},AEB:function(E){if(this.K&&this.K.AEB)return this.K.AEB.apply(this,arguments);
else return C.DeviceClass.Bt_.apply(this,arguments);},Bt_:function(E){},BaR:function(
Aq){this.AEB(Aq);},UpdateAgeRegistration:function(BbV){if(this.AdG===BbV)return;
this.AdG=BbV;A.abo([this,this.A8i,this.BaR],0);},Aw3:function(E){if(this.K&&this.
K.Aw3)return this.K.Aw3.apply(this,arguments);else return C.DeviceClass.Bvs.apply(
this,arguments);},Bvs:function(E){},Bbm:function(Aq){this.Aw3(Aq);},UpdateWeightRecordingScope:
function(Bb0){if(this.WeightRecordingScope===Bb0)return;this.WeightRecordingScope=
Bb0;A.abo([this,this.A9l,this.Bbm],0);},JO:function(E){if(this.K&&this.K.JO)return this.
K.JO.apply(this,arguments);else return C.DeviceClass.BuE.apply(this,arguments);}
,BuE:function(E){},AZW:function(Aq){this.JO(Aq);},UpdateGender:function(L3){if(this.
Gender===L3)return;this.Gender=L3;A.abo([this,this.Wl,this.AZW],0);},ArE:function(
E){if(this.K&&this.K.ArE)return this.K.ArE.apply(this,arguments);else return C.DeviceClass.
BuG.apply(this,arguments);},BuG:function(E){},Ayz:function(Aq){this.ArE(Aq);},UpdateIDLastUsedMale:
function(Rk){if(this.AqQ===Rk)return;this.AqQ=Rk;A.abo([this,this.Av5,this.Ayz],
0);},ArD:function(E){if(this.K&&this.K.ArD)return this.K.ArD.apply(this,arguments
);else return C.DeviceClass.BuF.apply(this,arguments);},BuF:function(E){},Ayy:function(
Aq){this.ArD(Aq);},UpdateIDLastUsedFemale:function(Rk){if(this.AqP===Rk)return;this.
AqP=Rk;A.abo([this,this.Av4,this.Ayy],0);},AbT:function(E){if(this.K&&this.K.AbT
)return this.K.AbT.apply(this,arguments);else return C.DeviceClass.Bud.apply(this
,arguments);},Bud:function(E){},AIv:function(Aq){this.AbT(Aq);},UpdateAnimalListContent:
function(AK){if(this.JE===AK)return;this.JE=AK;A.abo([this,this.AEj,this.AIv],0);
},AED:function(E){if(this.K&&this.K.AED)return this.K.AED.apply(this,arguments);
else return C.DeviceClass.Bt$.apply(this,arguments);},Bt$:function(E){},BaS:function(
Aq){this.AED(Aq);},UpdateAlarmListAction:function(AK){if(this.ALV===AK)return;this.
ALV=AK;A.abo([this,this.A8k,this.BaS],0);},AEX:function(E){if(this.K&&this.K.AEX
)return this.K.AEX.apply(this,arguments);else return C.DeviceClass.Buz.apply(this
,arguments);},Buz:function(E){},Ba1:function(Aq){this.AEX(Aq);},UpdateFlashLightInMeasureState:
function(BbQ){if(this.AmG===BbQ)return;this.AmG=BbQ;A.abo([this,this.A8w,this.Ba1
],0);},AeL:function(E){if(this.K&&this.K.AeL)return this.K.AeL.apply(this,arguments
);else return C.DeviceClass.Buc.apply(this,arguments);},Buc:function(E){},AIu:function(
Aq){this.AeL(Aq);},UpdateAnimalInfoContent:function(AK){if(this.D7===AK)return;this.
D7=AK;A.abo([this,this.AEi,this.AIu],0);},AFP:function(E){if(this.K&&this.K.AFP)
return this.K.AFP.apply(this,arguments);else return C.DeviceClass.Bvn.apply(this
,arguments);},Bvn:function(E){},Bbh:function(Aq){this.AFP(Aq);},UpdateWatchListAction:
function(AK){if(this.AVl===AK)return;this.AVl=AK;A.abo([this,this.A9g,this.Bbh],
0);},AEZ:function(E){if(this.K&&this.K.AEZ)return this.K.AEZ.apply(this,arguments
);else return C.DeviceClass.BuB.apply(this,arguments);},BuB:function(E){},Ba3:function(
Aq){this.AEZ(Aq);},UpdateFreshCowListAction:function(AK){if(this.AOp===AK)return;
this.AOp=AK;A.abo([this,this.A8y,this.Ba3],0);},ResetActiveActions:function(G){if(
this.K&&this.K.ResetActiveActions)return this.K.ResetActiveActions.apply(this,arguments
);else return C.DeviceClass.Bvy.apply(this,arguments);},Bvy:function(G){},BFO:function(
s){this.ResetActiveActions(s);},ResetAutoActions:function(G){if(this.K&&this.K.ResetAutoActions
)return this.K.ResetAutoActions.apply(this,arguments);else return C.DeviceClass.
BvA.apply(this,arguments);},BvA:function(G){},BFQ:function(s){this.ResetAutoActions(
s);},Awf:function(E){if(this.K&&this.K.Awf)return this.K.Awf.apply(this,arguments
);else return C.DeviceClass.Bug.apply(this,arguments);},Bug:function(E){},BaU:function(
Aq){this.Awf(Aq);},ArQ:function(E){if(this.K&&this.K.ArQ)return this.K.ArQ.apply(
this,arguments);else return C.DeviceClass.Bvc.apply(this,arguments);},Bvc:function(
E){},Bbc:function(Aq){this.ArQ(Aq);},ArR:function(E){if(this.K&&this.K.ArR)return this.
K.ArR.apply(this,arguments);else return C.DeviceClass.Bvd.apply(this,arguments);
},Bvd:function(E){},Bbd:function(Aq){this.ArR(Aq);},Asa:function(G){if(this.K&&this.
K.Asa)return this.K.Asa.apply(this,arguments);else return C.DeviceClass.BvD.apply(
this,arguments);},BvD:function(G){},BFT:function(s){this.Asa(s);},UpdateTemperaturesLowString:
function(AK){if(this.AGM===AK)return;this.AGM=AK;A.abo([this,this.A89,this.Bbd],
0);},UpdateTemperaturesHighString:function(AK){if(this.AGL===AK)return;this.AGL=
AK;A.abo([this,this.A88,this.Bbc],0);},UpdateAnimalTypesString:function(AK){if(this.
ABu===AK)return;this.ABu=AK;A.abo([this,this.A8n,this.BaU],0);},Awy:function(E){
if(this.K&&this.K.Awy)return this.K.Awy.apply(this,arguments);else return C.DeviceClass.
BuD.apply(this,arguments);},BuD:function(E){},Ba5:function(Aq){this.Awy(Aq);},UpdateFreshCowsHideMeasured:
function(AK){if(this.AqE===AK)return;this.AqE=AK;A.abo([this,this.A8A,this.Ba5],
0);},ArK:function(E){if(this.K&&this.K.ArK)return this.K.ArK.apply(this,arguments
);else return C.DeviceClass.BuW.apply(this,arguments);},BuW:function(E){},Ba_:function(
Aq){this.ArK(Aq);},UpdateNaisIdLastUsedMale:function(Xd){if(this.AD8===Xd)return;
this.AD8=Xd;A.abo([this,this.A8Q,this.Ba_],0);},ArJ:function(E){if(this.K&&this.
K.ArJ)return this.K.ArJ.apply(this,arguments);else return C.DeviceClass.BuV.apply(
this,arguments);},BuV:function(E){},Ba9:function(Aq){this.ArJ(Aq);},UpdateNaisIdLastUsedFemale:
function(Xd){if(this.AD7===Xd)return;this.AD7=Xd;A.abo([this,this.A8P,this.Ba9],
0);},AwL:function(E){if(this.K&&this.K.AwL)return this.K.AwL.apply(this,arguments
);else return C.DeviceClass.BuT.apply(this,arguments);},BuT:function(E){},AyB:function(
Aq){this.AwL(Aq);},UpdateNaisIdIncrementMale:function(Alf){if(this.ARA===Alf)return;
this.ARA=Alf;A.abo([this,this.Av9,this.AyB],0);},AwK:function(E){if(this.K&&this.
K.AwK)return this.K.AwK.apply(this,arguments);else return C.DeviceClass.BuS.apply(
this,arguments);},BuS:function(E){},AyA:function(Aq){this.AwK(Aq);},UpdateNaisIdIncrementFemale:
function(Alf){if(this.ARz===Alf)return;this.ARz=Alf;A.abo([this,this.Av8,this.AyA
],0);},UpdateFirmware:function(){if(this.K&&this.K.UpdateFirmware)return this.K.
UpdateFirmware.apply(this,arguments);else return C.DeviceClass.BaG.apply(this,arguments
);},BaG:function(){},Ano:function(E){if(this.K&&this.K.Ano)return this.K.Ano.apply(
this,arguments);else return C.DeviceClass.Bul.apply(this,arguments);},Bul:function(
E){},BaX:function(Aq){this.Ano(Aq);},UpdateBootloaderMessage:function(AK){if(this.
Aqg===AK)return;this.Aqg=AK;A.abo([this,this.A8s,this.BaX],0);},AEy:function(E){
if(this.K&&this.K.AEy)return this.K.AEy.apply(this,arguments);else return C.DeviceClass.
Bt5.apply(this,arguments);},Bt5:function(E){},BaL:function(Aq){this.AEy(Aq);},UpdateActionListAction:
function(AK){if(this.ABo===AK)return;this.ABo=AK;A.abo([this,this.A8b,this.BaL],
0);},Awd:function(E){if(this.K&&this.K.Awd)return this.K.Awd.apply(this,arguments
);else return C.DeviceClass.Bt6.apply(this,arguments);},Bt6:function(E){},BaM:function(
Aq){this.Awd(Aq);},UpdateActionListHideMeasured:function(AK){if(this.Ap7===AK)return;
this.Ap7=AK;A.abo([this,this.A8c,this.BaM],0);},Ue:function(E){if(this.K&&this.K.
Ue)return this.K.Ue.apply(this,arguments);else return C.DeviceClass.Bub.apply(this
,arguments);},Bub:function(E){},Aor:function(Aq){this.Ue(Aq);},UpdateAnimalIdGenerationMethod:
function(Bce){if(this.If===Bce)return;this.If=Bce;A.abo([this,this.Ang,this.Aor]
,0);},Awq:function(E){if(this.K&&this.K.Awq)return this.K.Awq.apply(this,arguments
);else return C.DeviceClass.But.apply(this,arguments);},But:function(E){},AZU:function(
Aq){this.Awq(Aq);},UpdateDirectionOfCountingFemale:function(Ak$){if(this.ACm===Ak$
)return;this.ACm=Ak$;A.abo([this,this.AR$,this.AZU],0);},Awr:function(E){if(this.
K&&this.K.Awr)return this.K.Awr.apply(this,arguments);else return C.DeviceClass.
Buu.apply(this,arguments);},Buu:function(E){},AZV:function(Aq){this.Awr(Aq);},UpdateDirectionOfCountingMale:
function(Ak$){if(this.ACn===Ak$)return;this.ACn=Ak$;A.abo([this,this.ASa,this.AZV
],0);},Aws:function(E){if(this.K&&this.K.Aws)return this.K.Aws.apply(this,arguments
);else return C.DeviceClass.Buv.apply(this,arguments);},Buv:function(E){},AIy:function(
Aq){this.Aws(Aq);},UpdateDirectionOfCountingUnisex:function(Ak$){if(this.AuS===Ak$
)return;this.AuS=Ak$;A.abo([this,this.AEn,this.AIy],0);},ArF:function(E){if(this.
K&&this.K.ArF)return this.K.ArF.apply(this,arguments);else return C.DeviceClass.
BuH.apply(this,arguments);},BuH:function(E){},Aos:function(Aq){this.ArF(Aq);},UpdateIDLastUsedUnisex:
function(Rk){if(this.AjN===Rk)return;this.AjN=Rk;A.abo([this,this.Anj,this.Aos],
0);},ArL:function(E){if(this.K&&this.K.ArL)return this.K.ArL.apply(this,arguments
);else return C.DeviceClass.BuX.apply(this,arguments);},BuX:function(E){},AZZ:function(
Aq){this.ArL(Aq);},UpdateNaisIdLastUsedUnisex:function(Xd){if(this.AvS===Xd)return;
this.AvS=Xd;A.abo([this,this.ASi,this.AZZ],0);},AwM:function(E){if(this.K&&this.
K.AwM)return this.K.AwM.apply(this,arguments);else return C.DeviceClass.BuU.apply(
this,arguments);},BuU:function(E){},AyC:function(Aq){this.AwM(Aq);},UpdateNaisIdIncrementUnisex:
function(Alf){if(this.ARB===Alf)return;this.ARB=Alf;A.abo([this,this.Av_,this.AyC
],0);},Akm:function(E){if(this.K&&this.K.Akm)return this.K.Akm.apply(this,arguments
);else return C.DeviceClass.Bux.apply(this,arguments);},Bux:function(E){},Ayx:function(
Aq){this.Akm(Aq);},UpdateEartagNrAssignmentMode:function(Ala){if(this.EartagNrAssignmentMode===
Ala)return;this.EartagNrAssignmentMode=Ala;A.abo([this,this.Av3,this.Ayx],0);},NW:
function(E){if(this.K&&this.K.NW)return this.K.NW.apply(this,arguments);else return C.
DeviceClass.Bun.apply(this,arguments);},Bun:function(E){},BvW:function(Aq){this.
NW(Aq);},UpdateBreed:function(AcP){if(this.Breed===AcP)return;this.Breed=AcP;A.abo([
this,this.AvZ,this.BvW],0);},AFh:function(E){if(this.K&&this.K.AFh)return this.K.
AFh.apply(this,arguments);else return C.DeviceClass.BuP.apply(this,arguments);},
BuP:function(E){},BvZ:function(Aq){this.AFh(Aq);},UpdateMiddlewareVersions:function(
P_,A0G,A0H,A0N,A0v){this.St.OnSetTimestamp(P_);this.St.AFc(A0G);this.St.AFi(A0H);
this.St.AFs(A0N);this.St.AES(A0v);A.abo([this,this.BkP,this.BvZ],0);},AFb:function(
E){if(this.K&&this.K.AFb)return this.K.AFb.apply(this,arguments);else return C.DeviceClass.
BuJ.apply(this,arguments);},BuJ:function(E){},BvY:function(Aq){this.AFb(Aq);},UpdateMainboardVersions:
function(P_,A0E,A0F,A0D,A0T,A0U,A0S){this.QT.OnSetTimestamp(P_);this.QT.AE$(A0E);
this.QT.AFa(A0F);this.QT.AE_(A0D);this.QT.AFH(A0T);this.QT.AFI(A0U);this.QT.AFG(
A0S);A.abo([this,this.BkN,this.BvY],0);},AFJ:function(E){if(this.K&&this.K.AFJ)return this.
K.AFJ.apply(this,arguments);else return C.DeviceClass.Bvf.apply(this,arguments);
},Bvf:function(E){},Bv5:function(Aq){this.AFJ(Aq);},UpdateTorchboardVersions:function(
P_,A0E,A0F,A0D,A0T,A0U,A0S){this.SQ.OnSetTimestamp(P_);this.SQ.AE$(A0E);this.SQ.
AFa(A0F);this.SQ.AE_(A0D);this.SQ.AFH(A0T);this.SQ.AFI(A0U);this.SQ.AFG(A0S);A.abo([
this,this.Bla,this.Bv5],0);},AEI:function(E){if(this.K&&this.K.AEI)return this.K.
AEI.apply(this,arguments);else return C.DeviceClass.Bum.apply(this,arguments);},
Bum:function(E){},BvV:function(Aq){this.AEI(Aq);},UpdateBootloaderVersions:function(
P_,A0G,A0H,A0N,A0v){this.RT.OnSetTimestamp(P_);this.RT.AFc(A0G);this.RT.AFi(A0H);
this.RT.AFs(A0N);this.RT.AES(A0v);A.abo([this,this.Bkl,this.BvV],0);},AEV:function(
E){if(this.K&&this.K.AEV)return this.K.AEV.apply(this,arguments);else return C.DeviceClass.
Buw.apply(this,arguments);},Buw:function(E){},Ba0:function(Aq){this.AEV(Aq);},UpdateDryCowListAction:
function(AK){if(this.ANL===AK)return;this.ANL=AK;A.abo([this,this.A8u,this.Ba0],
0);},AJo:function(A0w){if(this.K&&this.K.AJo)return this.K.AJo.apply(this,arguments
);else return C.DeviceClass.Bwf.apply(this,arguments);},Bwf:function(A0w){return false;
},AEH:function(E){if(this.K&&this.K.AEH)return this.K.AEH.apply(this,arguments);
else return C.DeviceClass.Buk.apply(this,arguments);},Buk:function(E){},AIw:function(
Aq){this.AEH(Aq);},UpdateBirthListView:function(AK){if(this.Aqe===AK)return;this.
Aqe=AK;A.abo([this,this.AEk,this.AIw],0);},BatchResetBirthNoticePending:function(
){var B_=A._NewObject(C.Animal,0);var P;var AiO=0;var Ac_=A._GetAutoObject(C.Device
).Ao.Filter;var Be=A._GetAutoObject(C.Helper).AOu();A._GetAutoObject(C.Device).Ao.
Bl(Be);for(P=0;P<A._GetAutoObject(C.Device).Ao.Cd();P++){B_.EH(P,A._GetAutoObject(
C.Device).Ao);B_.AeU(false);B_.Co(A._GetAutoObject(C.Device).Ao);AiO++;}A._GetAutoObject(
C.Device).Ao.Bl(Ac_);return AiO;},UpdateTransferProgress:function(AK){if(this.AxB===
AK)return;this.AxB=AK;A.abo([this,this.ASv,this.AZ8],0);},AFK:function(E){if(this.
K&&this.K.AFK)return this.K.AFK.apply(this,arguments);else return C.DeviceClass.
Bvg.apply(this,arguments);},Bvg:function(E){A.ab5("%s",P2);},AZ8:function(Aq){this.
AFK(Aq);},UpdateTransferTarget:function(AK){if(this.Aff===AK)return;this.Aff=AK;
A.abo([this,this.A9a,this.Bbe],0);},ArS:function(E){if(this.K&&this.K.ArS)return this.
K.ArS.apply(this,arguments);else return C.DeviceClass.Bvh.apply(this,arguments);
},Bvh:function(E){A.ab5("%s",JX);},Bbe:function(Aq){this.ArS(Aq);},Aso:function(
){if(this.K&&this.K.Aso)return this.K.Aso.apply(this,arguments);else return C.DeviceClass.
BvO.apply(this,arguments);},BvO:function(){},AwQ:function(E){if(this.K&&this.K.AwQ
)return this.K.AwQ.apply(this,arguments);else return C.DeviceClass.Bu3.apply(this
,arguments);},Bu3:function(E){},AZ2:function(Aq){this.AwQ(Aq);},UpdatePremisesID:
function(Rk){if(this.Ur===Rk)return;this.Ur=Rk;A.abo([this,this.ASn,this.AZ2],0);
},AwJ:function(E){if(this.K&&this.K.AwJ)return this.K.AwJ.apply(this,arguments);
else return C.DeviceClass.BuR.apply(this,arguments);},BuR:function(E){},AIB:function(
Aq){this.AwJ(Aq);},UpdateMotherSelectionDriedOffFilter:function(AK){if(this.AbK===
AK)return;this.AbK=AK;A.abo([this,this.AEr,this.AIB],0);},AE0:function(E){if(this.
K&&this.K.AE0)return this.K.AE0.apply(this,arguments);else return C.DeviceClass.
BuC.apply(this,arguments);},BuC:function(E){},Ba4:function(Aq){this.AE0(Aq);},UpdateFreshCowSpan:
function(AK){if(this.AqD===AK)return;this.AqD=AK;A.abo([this,this.A8z,this.Ba4],
0);},UpdateUSBState:function(Bb8){if(this.AhH===Bb8)return;this.AhH=Bb8;A.abo([this
,this.Wm,this.W8],0);},AFL:function(E){if(this.K&&this.K.AFL)return this.K.AFL.apply(
this,arguments);else return C.DeviceClass.Bvj.apply(this,arguments);},Bvj:function(
E){A.ab5("%s",EZ);},W8:function(Aq){this.AFL(Aq);},AnN:function(AhU){if(this.K&&
this.K.AnN)return this.K.AnN.apply(this,arguments);else return C.DeviceClass.BvI.
apply(this,arguments);},BvI:function(AhU){return A._NewObject(C.Ajx,0);},Aq2:function(
){if(this.K&&this.K.Aq2)return this.K.Aq2.apply(this,arguments);else return C.DeviceClass.
Bt4.apply(this,arguments);},Bt4:function(){return false;},Aqp:function(Nl){if(this.
K&&this.K.Aqp)return this.K.Aqp.apply(this,arguments);else return C.DeviceClass.
BtZ.apply(this,arguments);},BtZ:function(Nl){},AFw:function(E){if(this.K&&this.K.
AFw)return this.K.AFw.apply(this,arguments);else return C.DeviceClass.Bu8.apply(
this,arguments);},Bu8:function(E){},Bv2:function(Aq){this.AFw(Aq);},UpdateSerialNumber:
function(AK){if(this.Ahw===AK)return;this.Ahw=AK;A.abo([this,this.Bk1,this.Bv2],
0);},Awe:function(E){if(this.K&&this.K.Awe)return this.K.Awe.apply(this,arguments
);else return C.DeviceClass.Bua.apply(this,arguments);},Bua:function(E){},AZS:function(
Aq){this.Awe(Aq);},UpdateAnimalIdAutoGenerationMethod:function(Bcd){if(this.Agl===
Bcd)return;this.Agl=Bcd;A.abo([this,this.AR5,this.AZS],0);},AB_:function(){return false;
},AGe:function(){return false;},AFy:function(E){if(this.K&&this.K.AFy)return this.
K.AFy.apply(this,arguments);else return C.DeviceClass.Bu9.apply(this,arguments);
},Bu9:function(E){},Bbb:function(Aq){this.AFy(Aq);},UpdateShutdownTimer:function(
AK){if(this.AUA===AK)return;this.AUA=AK;A.abo([this,this.A85,this.Bbb],0);},Art:
function(E){if(this.K&&this.K.Art)return this.K.Art.apply(this,arguments);else return C.
DeviceClass.Bue.apply(this,arguments);},Bue:function(E){},BaT:function(Aq){this.
Art(Aq);},UpdateAnimalListInfoItemMode:function(AK){if(this.Amk===AK)return;this.
Amk=AK;A.abo([this,this.A8l,this.BaT],0);},Asb:function(G){if(this.K&&this.K.Asb
)return this.K.Asb.apply(this,arguments);else return C.DeviceClass.BvE.apply(this
,arguments);},BvE:function(G){},BFU:function(s){this.Asb(s);},ArV:function(E){if(
this.K&&this.K.ArV)return this.K.ArV.apply(this,arguments);else return C.DeviceClass.
Bvp.apply(this,arguments);},Bvp:function(E){},Bbj:function(Aq){this.ArV(Aq);},ArW:
function(E){if(this.K&&this.K.ArW)return this.K.ArW.apply(this,arguments);else return C.
DeviceClass.Bvq.apply(this,arguments);},Bvq:function(E){},Bbk:function(Aq){this.
ArW(Aq);},UpdateWeightGainsLowString:function(AK){if(this.AG8===AK)return;this.AG8=
AK;A.abo([this,this.A9j,this.Bbk],0);},UpdateWeightGainsHighString:function(AK){
if(this.AG7===AK)return;this.AG7=AK;A.abo([this,this.A9i,this.Bbj],0);},Awg:function(
E){if(this.K&&this.K.Awg)return this.K.Awg.apply(this,arguments);else return C.DeviceClass.
Buh.apply(this,arguments);},Buh:function(E){},BaV:function(Aq){this.Awg(Aq);},UpdateAnimalTypesWeightGainsString:
function(AK){if(this.ABv===AK)return;this.ABv=AK;A.abo([this,this.A8o,this.BaV],
0);},ArU:function(E){if(this.K&&this.K.ArU)return this.K.ArU.apply(this,arguments
);else return C.DeviceClass.Bvo.apply(this,arguments);},Bvo:function(E){},Bbi:function(
Aq){this.ArU(Aq);},ArX:function(E){if(this.K&&this.K.ArX)return this.K.ArX.apply(
this,arguments);else return C.DeviceClass.Bvu.apply(this,arguments);},Bvu:function(
E){},Bbn:function(Aq){this.ArX(Aq);},UpdateWeightValueBirthString:function(AK){if(
this.AG$===AK)return;this.AG$=AK;A.abo([this,this.A9m,this.Bbn],0);},UpdateWeightGainsAverageString:
function(AK){if(this.AG6===AK)return;this.AG6=AK;A.abo([this,this.A9h,this.Bbi],
0);},Awt:function(E){if(this.K&&this.K.Awt)return this.K.Awt.apply(this,arguments
);else return C.DeviceClass.Buy.apply(this,arguments);},Buy:function(E){},BvX:function(
Aq){this.Awt(Aq);},UpdateEvaluationAnimalType:function(Ek){if(this.ACu===Ek)return;
this.ACu=Ek;A.abo([this,this.Bkw,this.BvX],0);},UpdateStartScreen:function(AK){if(
this.Axt===AK)return;this.Axt=AK;A.abo([this,this.Bk2,this.Bv3],0);},AwU:function(
E){if(this.K&&this.K.AwU)return this.K.AwU.apply(this,arguments);else return C.DeviceClass.
Bu_.apply(this,arguments);},Bu_:function(E){},Bv3:function(Aq){this.AwU(Aq);},ADH:
function(){if(this.K&&this.K.ADH)return this.K.ADH.apply(this,arguments);else return C.
DeviceClass.Bt2.apply(this,arguments);},Bt2:function(){return 1;},ADI:function(){
if(this.K&&this.K.ADI)return this.K.ADI.apply(this,arguments);else return C.DeviceClass.
Bt3.apply(this,arguments);},Bt3:function(){return 1;},GetCommitCount:function(){
return 2021;},GetCommitEpoch:function(){return 1709636410;},GetCommitHash:function(
){return A.kR.Bht;},GetVersionMajor:function(){return 0;},GetVersionMinor:function(
){return 9;},GetVersionRev:function(){return 9;},AFg:function(E){if(this.K&&this.
K.AFg)return this.K.AFg.apply(this,arguments);else return C.DeviceClass.BuN.apply(
this,arguments);},BuN:function(E){},Ba8:function(Aq){this.AFg(Aq);},UpdateMaximumAgeNewOnFarm:
function(AK){if(this.AD0===AK)return;this.AD0=AK;A.abo([this,this.A8O,this.Ba8],
0);},Aw0:function(E){if(this.K&&this.K.Aw0)return this.K.Aw0.apply(this,arguments
);else return C.DeviceClass.Bvi.apply(this,arguments);},Bvi:function(E){},AZ9:function(
Aq){this.Aw0(Aq);},UpdateTransponderAssignmentIdChangeMethod:function(Bb5){if(this.
AhG===Bb5)return;this.AhG=Bb5;A.abo([this,this.ASw,this.AZ9],0);},BatchResetPurchasedNoticePending:
function(){var B_=A._NewObject(C.Animal,0);var P;var AiO=0;var Ac_=A._GetAutoObject(
C.Device).Ao.Filter;var Be=A._GetAutoObject(C.Helper).AOF();A._GetAutoObject(C.Device
).Ao.Bl(Be);for(P=0;P<A._GetAutoObject(C.Device).Ao.Cd();P++){B_.EH(P,A._GetAutoObject(
C.Device).Ao);B_.AeU(false);B_.Co(A._GetAutoObject(C.Device).Ao);AiO++;}A._GetAutoObject(
C.Device).Ao.Bl(Ac_);return AiO;},AET:function(E){if(this.K&&this.K.AET)return this.
K.AET.apply(this,arguments);else return C.DeviceClass.Buq.apply(this,arguments);
},Buq:function(E){},AZT:function(Aq){this.AET(Aq);},UpdateDataExportDestination:
function(AK){if(this.VE===AK)return;this.VE=AK;A.abo([this,this.AR_,this.AZT],0);
},BmO:function(E){},UpdateMassRecordingAutomatic:function(AK){if(this.ARm===AK)return;
this.ARm=AK;A.abo([this,this.BkO,this.BmO],0);},Nd:function(E){if(this.K&&this.K.
Nd)return this.K.Nd.apply(this,arguments);else return C.DeviceClass.Bvv.apply(this
,arguments);},Bvv:function(E){},Bv6:function(Aq){this.Nd(Aq);},UpdateWhereAbouts:
function(AfA){if(this.WhereAbouts===AfA)return;this.WhereAbouts=AfA;A.abo([this,
this.Awb,this.Bv6],0);},Arq:function(E){if(this.K&&this.K.Arq)return this.K.Arq.
apply(this,arguments);else return C.DeviceClass.Bt7.apply(this,arguments);},Bt7:
function(E){},BaO:function(Aq){this.Arq(Aq);},Arr:function(E){if(this.K&&this.K.
Arr)return this.K.Arr.apply(this,arguments);else return C.DeviceClass.Bt8.apply(
this,arguments);},Bt8:function(E){},BaP:function(Aq){this.Arr(Aq);},UpdateActiveMassRecordingFields:
function(AK){if(this.ABp===AK)return;this.ABp=AK;A.abo([this,this.A8e,this.BaO],
0);},UpdateActiveMassRecordingFieldsOrder:function(AK){if(this.ABq===AK)return;this.
ABq=AK;A.abo([this,this.A8f,this.BaP],0);},Ar_:function(G){if(this.K&&this.K.Ar_
)return this.K.Ar_.apply(this,arguments);else return C.DeviceClass.Bvz.apply(this
,arguments);},Bvz:function(G){},BFP:function(s){this.Ar_(s);},AFe:function(E){if(
this.K&&this.K.AFe)return this.K.AFe.apply(this,arguments);else return C.DeviceClass.
BuK.apply(this,arguments);},BuK:function(E){},AIz:function(Aq){this.AFe(Aq);},UpdateMassRecordingDateOfBirthMandatory:
function(AK){if(this.AeB===AK)return;this.AeB=AK;A.abo([this,this.AEo,this.AIz],
0);},AFd:function(E){this.UpdateMassRecordingCounter(E);},UpdateMassRecordingCounter:
function(AK){if(this.AvN===AK)return;this.AvN=AK;A.abo([this,this.A8M,this.AFd],
0);},Ajs:function(){if(this.K&&this.K.Ajs)return this.K.Ajs.apply(this,arguments
);else return C.DeviceClass.BtX.apply(this,arguments);},BtX:function(){return false;
},Aqc:function(){if(this.K&&this.K.Aqc)return this.K.Aqc.apply(this,arguments);else
return C.DeviceClass.BtW.apply(this,arguments);},BtW:function(){return false;},Aqb:
function(){if(this.K&&this.K.Aqb)return this.K.Aqb.apply(this,arguments);else return C.
DeviceClass.BtV.apply(this,arguments);},BtV:function(){return false;},AuF:function(
){if(this.K&&this.K.AuF)return this.K.AuF.apply(this,arguments);else return C.DeviceClass.
BtY.apply(this,arguments);},BtY:function(){return false;},AwG:function(E){if(this.
K&&this.K.AwG)return this.K.AwG.apply(this,arguments);else return C.DeviceClass.
BuM.apply(this,arguments);},BuM:function(E){},Ba7:function(Aq){this.AwG(Aq);},UpdateMaxWeightValuePrecision:
function(AK){if(this.OI===AK)return;this.OI=AK;A.abo([this,this.A8N,this.Ba7],0);
},AwN:function(E){if(this.K&&this.K.AwN)return this.K.AwN.apply(this,arguments);
else return C.DeviceClass.BuY.apply(this,arguments);},BuY:function(E){},Ba$:function(
Aq){this.AwN(Aq);},UpdateNoNaisIdListActions:function(AK){if(this.NoNaisIdListActions===
AK)return;this.NoNaisIdListActions=AK;A.abo([this,this.A8R,this.Ba$],0);},ResetNoNaisIdListActions:
function(G){if(this.K&&this.K.ResetNoNaisIdListActions)return this.K.ResetNoNaisIdListActions.
apply(this,arguments);else return C.DeviceClass.BvB.apply(this,arguments);},BvB:
function(G){},BFR:function(s){this.ResetNoNaisIdListActions(s);},AwO:function(E){
if(this.K&&this.K.AwO)return this.K.AwO.apply(this,arguments);else return C.DeviceClass.
BuZ.apply(this,arguments);},BuZ:function(E){},Bba:function(Aq){this.AwO(Aq);},UpdateNoTransponderListActions:
function(AK){if(this.NoTransponderListActions===AK)return;this.NoTransponderListActions=
AK;A.abo([this,this.A8S,this.Bba],0);},ResetNoTransponderListActions:function(G){
if(this.K&&this.K.ResetNoTransponderListActions)return this.K.ResetNoTransponderListActions.
apply(this,arguments);else return C.DeviceClass.BvC.apply(this,arguments);},BvC:
function(G){},BFS:function(s){this.ResetNoTransponderListActions(s);},Aw5:function(
E){if(this.K&&this.K.Aw5)return this.K.Aw5.apply(this,arguments);else return C.DeviceClass.
Bvw.apply(this,arguments);},Bvw:function(E){},Bbo:function(Aq){this.Aw5(Aq);},UpdateYoungNoTransponderListActions:
function(AK){if(this.YoungNoTransponderListActions===AK)return;this.YoungNoTransponderListActions=
AK;A.abo([this,this.A9o,this.Bbo],0);},ResetYoungNoTransponderListActions:function(
G){if(this.K&&this.K.ResetYoungNoTransponderListActions)return this.K.ResetYoungNoTransponderListActions.
apply(this,arguments);else return C.DeviceClass.BvF.apply(this,arguments);},BvF:
function(G){},BFV:function(s){this.ResetYoungNoTransponderListActions(s);},AEh:function(
){return this.KF;},AvX:function(){return this.AaT;},Av0:function(){return this.Amt;
},ASq:function(){return this.ScanState;},AEp:function(){return this.MeasureState;
},AEt:function(){return this.Ks;},A8I:function(){return this.Language;},Arj:function(
){return this.TemperatureUnit;},A8t:function(){return this.AMM;},ASh:function(){
return this.AD6;},Awa:function(){return this.OverlayMenu;},A9b:function(){return this.
ZQ;},ASs:function(){return this.SyncState;},A9c:function(){return this.Asx;},AEu:
function(){return this.AVj;},ASp:function(){return this.RatingMode;},Arg:function(
){return this.AmH;},ASu:function(){return this.AU4;},BkU:function(){return this.
ATO;},Bki:function(){return this.AutoRegistrationMode;},ASr:function(){return this.
OO;},AbQ:function(){return this.A0;},AbR:function(){return this.AF;},AEv:function(
){return this.KW;},ASg:function(){return this.MassUnit;},A8d:function(){return this.
Pg;},AR4:function(){return this.Auq;},A8p:function(){return this.AutoActions;},PM:
function(){return this.AnimalType;},A9k:function(){return this.WeightRecordingMode;
},ASm:function(){return this.AF1;},AEm:function(){return this.HA;},A8i:function(
){return this.AdG;},A9l:function(){return this.WeightRecordingScope;},Wl:function(
){return this.Gender;},Av5:function(){return this.AqQ;},Av4:function(){return this.
AqP;},AEj:function(){return this.JE;},A8k:function(){return this.ALV;},A8w:function(
){return this.AmG;},AEi:function(){return this.D7;},A9g:function(){return this.AVl;
},A8y:function(){return this.AOp;},A8n:function(){return this.ABu;},A88:function(
){return this.AGL;},A89:function(){return this.AGM;},A8A:function(){return this.
AqE;},A8Q:function(){return this.AD8;},A8P:function(){return this.AD7;},Av9:function(
){return this.ARA;},Av8:function(){return this.ARz;},A8s:function(){return this.
Aqg;},A8b:function(){return this.ABo;},A8c:function(){return this.Ap7;},Ang:function(
){return this.If;},AR$:function(){return this.ACm;},ASa:function(){return this.ACn;
},AEn:function(){return this.AuS;},Anj:function(){return this.AjN;},ASi:function(
){return this.AvS;},Av_:function(){return this.ARB;},Av3:function(){return this.
EartagNrAssignmentMode;},AvZ:function(){return this.Breed;},BkP:function(){return this.
St;},BkN:function(){return this.QT;},Bla:function(){return this.SQ;},Bkl:function(
){return this.RT;},A8u:function(){return this.ANL;},AEk:function(){return this.Aqe;
},ASv:function(){return this.AxB;},A9a:function(){return this.Aff;},ASn:function(
){return this.Ur;},AEr:function(){return this.AbK;},A8z:function(){return this.AqD;
},Wm:function(){return this.AhH;},Bk1:function(){return this.Ahw;},AR5:function(
){return this.Agl;},A85:function(){return this.AUA;},A8l:function(){return this.
Amk;},A9i:function(){return this.AG7;},A9j:function(){return this.AG8;},A8o:function(
){return this.ABv;},A9h:function(){return this.AG6;},A9m:function(){return this.
AG$;},Bkw:function(){return this.ACu;},Bk2:function(){return this.Axt;},A8O:function(
){return this.AD0;},ASw:function(){return this.AhG;},AR_:function(){return this.
VE;},BkO:function(){return this.ARm;},Awb:function(){return this.WhereAbouts;},A8e:
function(){return this.ABp;},A8f:function(){return this.ABq;},AEo:function(){return this.
AeB;},A8M:function(){return this.AvN;},A8N:function(){return this.OI;},A8R:function(
){return this.NoNaisIdListActions;},A8S:function(){return this.NoTransponderListActions;
},A9o:function(){return this.YoungNoTransponderListActions;},_Init:function(aArg
){C.Table._Init.call(this.Ao={I:this},0);C.Table._Init.call(this.Bv={I:this},0);
C.Table._Init.call(this.Agj={I:this},0);A.Core.A$v._Init.call(this.AnF={I:this},
0);C.Table._Init.call(this.Pl={I:this},0);this.__proto__=C.DeviceClass;this.Ao.OnSetId(
0);this.Bv.OnSetId(1);this.Agj.OnSetId(3);this.Pl.OnSetId(4);this.OO=A._NewObject(
C.Transponder,0);this.St=A._NewObject(C.Axr,0);this.QT=A._NewObject(C.Avj,0);this.
SQ=A._NewObject(C.Avj,0);this.RT=A._NewObject(C.Axr,0);var Lv=this._variants();if(
Lv){this.K={};Lv._Init.call(this,aArg);}A.h7++;},_Done:function(){if(this.K)this.
K._Done.call(this);this.__proto__=null;this.Ao._Done();this.Bv._Done();this.Agj.
_Done();this.AnF._Done();this.Pl._Done();A.h7--;},_ReInit:function(){this.Ao._ReInit(
);this.Bv._ReInit();this.Agj._ReInit();this.AnF._ReInit();this.Pl._ReInit();if(this.
K)this.K._ReInit.call(this);},_Mark:function(D){var B;if((B=this.OO)&&(B._cycle!=
D))B._Mark(B._cycle=D);if((B=this.St)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.
QT)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.SQ)&&(B._cycle!=D))B._Mark(B._cycle=
D);if((B=this.RT)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Ao)._cycle!=D)B.
_Mark(B._cycle=D);if((B=this.Bv)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Agj)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.AnF)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
Pl)._cycle!=D)B._Mark(B._cycle=D);if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=
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
A5:A.jV,Aa_:function(){var Av=A._NewObject(C.StringFilterCriterion,0);Av.Fd(this
);return Av;},Fd:function(AH){C.FilterCriterion.Fd.call(this,AH);var Av=(C.StringFilterCriterion.
isPrototypeOf(AH)?AH:null);if(!!Av)this.A5=Av.A5;},_Init:function(aArg){C.FilterCriterion.
_Init.call(this,aArg);this.__proto__=C.StringFilterCriterion;},_className:"Device::StringFilterCriterion"
};C.Table={CE:function(Ad,A4){if(this.K&&this.K.CE)return this.K.CE.apply(this,arguments
);else return C.ITable.CE.apply(this,arguments);},VL:function(Ad,A4){if(this.K&&
this.K.VL)return this.K.VL.apply(this,arguments);else return C.ITable.VL.apply(this
,arguments);},HZ:function(Ad,A4){if(this.K&&this.K.HZ)return this.K.HZ.apply(this
,arguments);else return C.ITable.HZ.apply(this,arguments);},OnSetId:function(E){
if(this.K&&this.K.OnSetId)return this.K.OnSetId.apply(this,arguments);else return C.
ITable.OnSetId.apply(this,arguments);},Cd:function(){if(this.K&&this.K.Cd)return this.
K.Cd.apply(this,arguments);else return C.ITable.Cd.apply(this,arguments);},Bl:function(
E){if(this.K&&this.K.Bl)return this.K.Bl.apply(this,arguments);else return C.ITable.
Bl.apply(this,arguments);},VM:function(Ad,A4){if(this.K&&this.K.VM)return this.K.
VM.apply(this,arguments);else return C.ITable.VM.apply(this,arguments);},Se:function(
Ad,A4){if(this.K&&this.K.Se)return this.K.Se.apply(this,arguments);else return C.
ITable.Se.apply(this,arguments);},Ox:function(){if(this.K&&this.K.Ox)return this.
K.Ox.apply(this,arguments);else return C.ITable.Ox.apply(this,arguments);},Oz:function(
AoG){if(this.K&&this.K.Oz)return this.K.Oz.apply(this,arguments);else return C.ITable.
Oz.apply(this,arguments);},Yx:function(){if(this.K&&this.K.Yx)return this.K.Yx.apply(
this,arguments);else return C.ITable.Yx.apply(this,arguments);},Zz:function(Ad,A4
,C1){if(this.K&&this.K.Zz)return this.K.Zz.apply(this,arguments);else return C.ITable.
Zz.apply(this,arguments);},Hg:function(Ad,A4,C1){if(this.K&&this.K.Hg)return this.
K.Hg.apply(this,arguments);else return C.ITable.Hg.apply(this,arguments);},Zy:function(
Ad,A4,C1){if(this.K&&this.K.Zy)return this.K.Zy.apply(this,arguments);else return C.
ITable.Zy.apply(this,arguments);},MB:function(Ad,A4,C1){if(this.K&&this.K.MB)return this.
K.MB.apply(this,arguments);else return C.ITable.MB.apply(this,arguments);},Zx:function(
Ad,A4,C1){if(this.K&&this.K.Zx)return this.K.Zx.apply(this,arguments);else return C.
ITable.Zx.apply(this,arguments);},Lb:function(aColumn,A7){if(this.K&&this.K.Lb)return this.
K.Lb.apply(this,arguments);else return C.ITable.Lb.apply(this,arguments);},KL:function(
Ad,A4){if(this.K&&this.K.KL)return this.K.KL.apply(this,arguments);else return C.
ITable.KL.apply(this,arguments);},SG:function(Ad,A4,C1){if(this.K&&this.K.SG)return this.
K.SG.apply(this,arguments);else return C.ITable.SG.apply(this,arguments);},AgJ:function(
aColumn,A7){if(this.K&&this.K.AgJ)return this.K.AgJ.apply(this,arguments);else return C.
ITable.AgJ.apply(this,arguments);},Hf:function(){if(this.K&&this.K.Hf)return this.
K.Hf.apply(this,arguments);else return C.ITable.Hf.apply(this,arguments);},AjC:function(
aColumn,A7){if(this.K&&this.K.AjC)return this.K.AjC.apply(this,arguments);else return C.
ITable.AjC.apply(this,arguments);},Ad_:function(aColumn,A7){if(this.K&&this.K.Ad_
)return this.K.Ad_.apply(this,arguments);else return C.ITable.Ad_.apply(this,arguments
);},HF:function(){if(this.K&&this.K.HF)return this.K.HF.apply(this,arguments);else
return C.ITable.HF.apply(this,arguments);},Abg:function(){if(this.K&&this.K.Abg)
return this.K.Abg.apply(this,arguments);else return C.ITable.Abg.apply(this,arguments
);},QC:function(){if(this.K&&this.K.QC)return this.K.QC.apply(this,arguments);else
return C.ITable.QC.apply(this,arguments);},_Init:function(aArg){C.ITable._Init.call(
this,aArg);this.__proto__=C.Table;var Lv=this._variants();if(Lv){this.K={};Lv._Init.
call(this,aArg);}},_Done:function(){if(this.K)this.K._Done.call(this);this.__proto__=
C.ITable;C.ITable._Done.call(this);},_ReInit:function(){C.ITable._ReInit.call(this
);if(this.K)this.K._ReInit.call(this);},_Mark:function(D){C.ITable._Mark.call(this
,D);if(this.K)this.K._Mark(D);},_variants:function(){return A.acs.Table._variants(
);},K:null,_className:"Device::Table"};C.TableId={Animal:0,Rating:1,Undefined:2,
AnimalGroup:3,CalfDeregistrations:4};C.ScanState={Idle:0,Progress:1,IdScanned:2,
NotFound:3,Error:4,LAST:5};C.RatedAttribute={None:0,Feed:1,Appearance:2,Respiratory:
3,Faeces:4};C.ConverterClass={M0:null,AkQ:function(AoE){var BcM;var Auc=this.AUT(
AoE/100,0,A._GetAutoObject(C.Device).TemperatureUnit);BcM=A.abk(Auc,0,1);return BcM;
},A$D:function(Nj){if(Nj<=0)return 0;else if(Nj<=1)return 5;else if(Nj<=2)return 3;
else if(Nj<=4)return 2;else if(Nj<=6)return 1;else if(Nj<=8)return 4;else return 0;
},AdO:function(Nj){var a=0;switch(Nj){case 3:a=2;break;case 2:a=4;break;case 1:a=
6;break;case 0:a=0;break;case 4:a=8;break;case 5:a=1;break;default:A.ab5("%s",N$
);}return a;},Asq:function(Ek,Ro){var Nm=A._GetAutoObject(C.Converter).Aje(Ro,Ek
);switch(Nm){case 3:return 1;case 2:return 2;case 1:return 3;case 0:return 4;default:
throw new Error(P3+Nm.toFixed());}},AhE:function(){var B;var D6=A._NewObject(A.Core.
Bu,0).Initialize(A._GetAutoObject(C.Helper).Ds());D6.Ans(0);D6.Anv(0);D6.Any(0);
return((B=(D6.JM()|0))<0)?B+0x100000000:B;},Bhx:function(Ata){var Dl;switch(Ata){
case 36:Dl=MF;break;case 40:Dl=S2;break;case 56:Dl=UM;break;case 70:Dl=ZU;break;
case 100:Dl=WT;break;case 124:Dl=Ip;break;case 156:Dl=UN;break;case 158:Dl=ZV;break;
case 191:Dl=WU;break;case 196:Dl=ZW;break;case 203:Dl=WV;break;case 208:Dl=ZX;break;
case 233:Dl=ZY;break;case 246:Dl=UO;break;case 250:Dl=WW;break;case 276:Dl=Rf;break;
case 300:Dl=ZZ;break;case 348:Dl=O0;break;case 372:Dl=Rg;break;case 380:Dl=WX;break;
case 392:Dl=WY;break;case 428:Dl=WZ;break;case 440:Dl=W0;break;case 442:Dl=Z0;break;
case 470:Dl=W1;break;case 528:Dl=W2;break;case 578:Dl=S3;break;case 616:Dl=UP;break;
case 620:Dl=Z1;break;case 642:Dl=AcD;break;case 643:Dl=S4;break;case 703:Dl=Z2;break;
case 705:Dl=Afp;break;case 724:Dl=Z3;break;case 752:Dl=W3;break;case 756:Dl=Z4;break;
case 792:Dl=Z5;break;case 804:Dl=Ak0;break;case 826:Dl=JY;break;case 840:Dl=Z6;break;
default:Dl=Ata.toFixed();}return Dl;},AkX:function(MK){var Aaj;if((MK<10000)&&(A.
_GetAutoObject(C.Device).OI===2))Aaj=2;else if((MK<100000)&&!!A._GetAutoObject(C.
Device).OI)Aaj=1;else Aaj=0;return this.S0(MK,Aaj,false);},AxN:function(MK,Aaj){
return this.S0(MK,Aaj,false);},S0:function(MK,Aaj,Bzr){var B;var Als=A.jV;switch(
A._GetAutoObject(C.Device).MassUnit){case 0:if(Bzr)Als=A.abl(MK,0,0);else{var Bd9=
MK<0;if(Aaj<3)MK=MK+(((Bd9?-1:1)*5)*(Math.pow(10,2-Aaj)|0));Als=(((((B=MK)>-2147483648
)?Math.abs(B):B)/1000)|0).toFixed();if(Aaj>0)Als=Als+(Lu+A.abV(A.abl((((B=MK)>-2147483648
)?Math.abs(B):B)%1000,3,10),Aaj));if(Bd9)Als=AhK+Als;}break;case 1:Als=A.abk(MK/
453.592,0,Aaj);break;default:A.ab5("%s%s",An8,A._GetAutoObject(C.Device).MassUnit.
toFixed());}return Als;},Rc:function(Jb){var A3$=Jb.toFixed();var Bgl=A3$.length;
if((Bgl>=14)&&(Bgl<=15)){var A13=this.AxD(Jb);var Byg=A._GetAutoObject(C.Converter
).Bhx(A13);A3$=(Byg+Oa)+A.abm(A._GetAutoObject(C.Helper).Sc(Jb,0,12),12,10);}return A3$;
},AmK:function(L3){switch(L3){case 0:return A.aaL(A.ach.AQi);case 1:return A.aaL(
A.ach.ADp);case 2:return A.aaL(A.ach.ADu);default:{A.ab5("%s%e",W4,L3);return null;
}}},A4N:function(BxO){switch(BxO){case 0:return A.aaL(A.ach.Avt);case 1:return A.
aaL(A.ach.ADl);case 2:return A.aaL(A.ach.AQc);default:throw new Error(An9);}},AdM:
function(AI5){switch(AI5){case 0:return A.aaL(A.ach.AjO);case 2:return A.aaL(A.ach.
AmT);case 1:return A.aaL(A.ach.Abs);case 3:switch(A._GetAutoObject(C.Device).MassUnit
){case 0:return A.aaL(A.ach.AvC);case 1:return A.aaL(A.ach.AvD);default:throw new
Error(AhL+A._GetAutoObject(C.Device).MassUnit.toFixed());}break;case 4:return A.
aaL(A.ach.APF);case 5:return A.aaL(A.ach.APG);case 6:return A.aaL(A.ach.APK);case
7:return A.aaL(A.ach.AO5);case 8:case 13:return A.aaL(A.ach.APa);case 9:return A.
aaL(A.ach.ACX);case 10:return A.aaL(A.ach.AO$);case 12:return A.aaL(A.ach.APb);case
11:return A.aaL(A.ach.ADj);default:throw new Error(AhM+AI5.toFixed());}},BgY:function(
AyU){switch(AyU){case 0:return A.aaL(A.ach.ADs);case 3:return A.aaL(A.ach.AmT);case
1:return A.aaL(A.ach.Abs);case 2:return A._GetAutoObject(A.acj.DU).Bc$();default:
throw new Error(AhM+AyU.toFixed());}},Bhw:function(Ata){switch(Ata){case 977:return AcE;
case 978:return UQ;case 980:return An_;case 981:return An$;case 982:return Aoa;case
983:return Aob;case 984:return Afq;case 985:return Ak1;default:return A.aaR(A.acf.
Unknown);}},BhP:function(AcQ){switch(AcQ){case 1:return 0x278A;case 2:return 0x278B;
case 3:return 0x278C;case 4:return 0x278D;case 5:return 0x278E;case 6:return 0x278F;
case 7:return 0x2790;case 8:return 0x2791;case 9:return 0x2792;case 10:return 0x2793;
default:return 0x20;}},Bpy:function(Jb){if(!Jb)return-1;return(Jb%100000000)|0;}
,Bii:function(AoD,aFilter){var B;if(!aFilter)return AxP;var Ao7=AxQ;var Av=aFilter.
AOy();while(!!Av){Ao7=Ao7+A._GetAutoObject(C.Helper).A6E(AoD,Av);Av=aFilter.AOD(
Av);if(!!Av)Ao7=Ao7+O1;}Ao7=Ao7+Rh;return Ao7;},A7j:function(BbR){var MH=0;switch(
BbR){case 14:MH=2;break;case 13:MH=4;break;case 6:MH=36;break;case 11:MH=9;break;
case 0:MH=39;break;case 10:MH=26;break;case 12:MH=12;break;case 5:MH=14;break;case
3:MH=15;break;case 1:MH=10;break;case 8:MH=16;break;case 4:MH=20;break;case 15:MH=
27;break;case 9:MH=31;break;case 2:MH=13;break;case 7:MH=35;break;case 16:MH=37;
break;default:A.ab5("%s%e",AxR,BbR);}return MH;},BgX:function(AyU){switch(AyU){case
0:return 1;case 3:return 0;case 1:return 2;case 2:switch(A._GetAutoObject(C.Device
).MassUnit){case 0:return 3;case 1:return 4;default:throw new Error(AhL+A._GetAutoObject(
C.Device).MassUnit.toFixed());}break;default:throw new Error(AhM+AyU.toFixed());
}},BgZ:function(AoO){switch(AoO){case 0:return A.aaL(A.ach.APC);case 1:return A.
aaL(A.ach.ADs);case 9:return A.aaL(A.ach.APM);case 4:return A.aaL(A.ach.AGc);case
6:return A.aaL(A.ach.Ar8);case 8:return A.aaL(A.ach.Avn);case 2:return A.aaL(A.ach.
Abs);case 3:return A.aaL(A.ach.AmT);case 10:switch(A._GetAutoObject(C.Device).MassUnit
){case 0:return A.aaL(A.ach.AvC);case 1:return A.aaL(A.ach.AvD);default:throw new
Error(AhL+A._GetAutoObject(C.Device).MassUnit.toFixed());}break;case 7:case 5:case
11:case 12:case 13:case 14:case 18:case 15:case 16:case 17:return A.aaL(A.aci.TH
);default:throw new Error(UR+AoO.toFixed());}},ANj:function(Ata){switch(Ata){case
40:return 1;case 56:return 3;case 70:return 2;case 100:return 4;case 124:return 5;
case 156:return 7;case 158:return 36;case 191:return 17;case 196:return 8;case 203:
return 9;case 208:return 11;case 233:return 12;case 246:return 14;case 250:return 15;
case 276:return 10;case 300:return 16;case 348:return 18;case 372:return 19;case
380:return 20;case 392:return 21;case 428:return 24;case 440:return 22;case 442:
return 23;case 470:return 25;case 528:return 26;case 578:return 27;case 616:return 28;
case 620:return 29;case 642:return 30;case 643:return 31;case 703:return 34;case
705:return 33;case 724:return 13;case 752:return 32;case 756:return 6;case 792:return 35;
case 804:return 37;case 826:return 38;case 840:return 39;default:return 0;}},ZO:
function(Jb){var A13=this.AxD(Jb);return this.ANj(A13);},AxD:function(Jb){return A.
_GetAutoObject(C.Helper).Sc(Jb,12,3)|0;},A$W:function(AoI,Ek){if(AoI<A._GetAutoObject(
C.Helper).ACT(Ek))return 1;else if(AoI<A._GetAutoObject(C.Helper).ACS(Ek))return 2;
else return 3;},ACI:function(Bxs){switch(Bxs){case 1:return 1;case 2:return 2;case
3:return 3;case 4:return 4;case 5:return 5;case 6:return 6;case 7:return 7;case 8:
return 8;case 9:return 9;case 10:return 10;case 11:return 11;case 12:return 12;case
13:return 13;case 14:return 14;case 15:return 15;case 16:return 16;default:return 0;
}},AUT:function(A7,AIY,AIZ){if(AIY===AIZ)return A7;if(!AIY&&(AIZ===1)){var result=((
A7*9)/5)+32;return result;}if((AIY===1)&&!AIZ){var result=((A7-32)*5)/9;return result;
}throw new Error(((AsD+AIY.toFixed())+AxS)+AIZ.toFixed());},A6n:function(D$){switch(
D$){case 0:return AxT;case 1:return A.jV;case 2:return AxU;case 3:return Aoc;case
4:return A.aaR(A.acf.Contains);case 5:return Afr;default:{A.ab5("%s%e",Aod,D$);return A.
jV;}}},A5m:function(AcP){return this.M0.Ad9(AcP);},Bi2:function(AcP){return this.
M0.Amv(AcP);},Bhg:function(As$){var AAd=0;switch(As$){case 0:AAd=1;break;case 1:
AAd=2;break;case 2:AAd=3;break;case 3:AAd=4;break;default:A.ab5("%s%e",IN,As$);}
return AAd;},Aje:function(A0p,Ek){if(A0p>=A._GetAutoObject(C.Helper).A6z(Ek))return 3;
else if(A0p>=A._GetAutoObject(C.Helper).Ave(Ek))return 2;else if(A0p<A._GetAutoObject(
C.Device).ZQ)return 0;else return 1;},Aqm:function(MH){var BP=-1;switch(MH){case
0:BP=0;break;case 1:BP=40;break;case 2:BP=70;break;case 3:BP=56;break;case 4:BP=
100;break;case 5:BP=124;break;case 6:BP=756;break;case 7:BP=156;break;case 8:BP=
196;break;case 9:BP=203;break;case 10:BP=276;break;case 11:BP=208;break;case 12:
BP=233;break;case 13:BP=724;break;case 14:BP=246;break;case 15:BP=250;break;case
16:BP=300;break;case 17:BP=191;break;case 18:BP=348;break;case 19:BP=372;break;case
20:BP=380;break;case 21:BP=392;break;case 22:BP=440;break;case 23:BP=442;break;case
24:BP=428;break;case 25:BP=470;break;case 26:BP=528;break;case 27:BP=578;break;case
28:BP=616;break;case 29:BP=620;break;case 30:BP=642;break;case 31:BP=643;break;case
32:BP=752;break;case 33:BP=705;break;case 34:BP=703;break;case 35:BP=792;break;case
36:BP=158;break;case 37:BP=804;break;case 38:BP=826;break;case 39:BP=840;break;default:
throw new Error(Aoe+MH.toFixed());}return BP;},BpC:function(Jb){return A._GetAutoObject(
C.Helper).Sc(Jb,8,2)|0;},BpB:function(Jb){var Bzn=this.BpC(Jb);return this.ACI(Bzn
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
,IsRegistered:false,IsControl:false,IsAlarm:false,EH:function(Ad,AI){var Hz=C.Row.
EH.call(this,Ad,AI);if(Hz&&!!AI){this.OnSetId(AI.CE(Ad,0));this.Ul(AI.CE(Ad,1));
this.AbW(AI.CE(Ad,2));this.Anu(AI.CE(Ad,3));this.QY(AI.HD(Ad,4));this.JO(AI.AOA(
Ad,7));this.Akl(AI.BiA(Ad,6));this.Ex(AI.AmL(Ad,14));this.Q1(AI.KL(Ad,22));this.
Nc(AI.KL(Ad,26));this.Aw4(AI.IY(Ad,13));this.AeS(AI.HZ(Ad,8));this.AwX(AI.HD(Ad,
15));this.ATl(AI.HD(Ad,31));this.AeX(AI.A6N(Ad,5));this.ASU(AI.IY(Ad,17));this.Ui(
AI.HZ(Ad,11));this.ATk(AI.HD(Ad,16));this.ATn(AI.HD(Ad,30));this.Akr(AI.HZ(Ad,9)
);this.AeV(AI.HZ(Ad,12));this.ATm(AI.HD(Ad,20));this.AwZ(AI.HD(Ad,21));this.Ahe(
AI.HZ(Ad,10));this.AwB(AI.HZ(Ad,27));this.AE9(AI.ACO(Ad,18));this.AFC(AI.HD(Ad,19
));this.Aww(AI.ACO(Ad,23));this.AwY(AI.HD(Ad,24));this.ASM(AI.CE(Ad,25));this.Awn(
AI.HD(Ad,28));this.AwC(AI.CE(Ad,29));this.ArG(AI.HZ(Ad,38));this.NW(AI.BiB(Ad,32
));this.Akn(AI.BiG(Ad,33));this.Anw(AI.KL(Ad,35));this.Nd(AI.AOJ(Ad,34));this.AeU(
AI.HZ(Ad,37));this.AFq(AI.BiP(Ad,36));}return Hz;},Co:function(AI){var Hz=C.Row.
Co.call(this,AI);if(Hz&&!!AI){var Jg=AI.Ox();if(Jg<=0)A.ab5("%s",W5);else{var AzS=
this.AmY();if(AzS)this.CK=AI.Yx();else AI.Hg(this.CK,0,this.Id);AI.Hg(this.CK,1,
this.VisualId);AI.Hg(this.CK,2,this.GroupId);AI.Hg(this.CK,3,this.LocationId);AI.
Ace(this.CK,4,this.DateOfBirth);AI.Bop(this.CK,7,this.Gender);AI.Bol(this.CK,6,this.
BirthType);AI.Boj(this.CK,14,this.AnimalType);AI.SG(this.CK,22,this.TransponderId
);AI.SG(this.CK,26,this.NaisId);AI.AkH(this.CK,13,this.WorstAssessment);AI.MB(this.
CK,8,this.IsAlarm);AI.Ace(this.CK,15,this.TimestampAlarm);AI.MB(this.CK,11,this.
IsFever);AI.Ace(this.CK,16,this.TimestampExpirationFeverAlarm);AI.MB(this.CK,9,this.
IsControl);AI.MB(this.CK,12,this.IsWatch);AI.Ace(this.CK,20,this.TimestampLastControl
);AI.Ace(this.CK,21,this.TimestampLastWatch);AI.MB(this.CK,10,this.IsRegistered);
AI.MB(this.CK,27,this.IsPerished);AI.Ace(this.CK,28,this.DateOfLastCalving);AI.Hg(
this.CK,29,this.LactationNumber);AI.MB(this.CK,38,this.IsDry);AI.Bon(this.CK,32,
this.Breed);AI.Boo(this.CK,33,this.EaseOfDelivery);AI.SG(this.CK,35,this.NaisIdMother
);AI.Bov(this.CK,34,this.WhereAbouts);AI.MB(this.CK,37,this.IsRegistrationNoticePending
);AI.Bot(this.CK,36,this.ReasonOfLeaving);Hz=AI.Oz(Jg);if(AzS)this.OnSetId(AI.Abg(
));}}return Hz;},Gj:function(){C.Row.Gj.call(this);this.OnSetId(-1);this.Ahe(true
);},Hf:function(){C.Row.Hf.call(this);this.OnSetId(0);this.Ul(0);this.AbW(0);this.
Anu(0);this.QY(0);this.JO(A._GetAutoObject(C.Device).Gender);this.Akl(0);this.Ex(
A._GetAutoObject(C.Device).AnimalType);this.Q1(0);this.Nc(0);this.Aw4(0);this.AeS(
false);this.AwX(0);this.ATl(0);this.AeX(0);this.ASU(0);this.Ui(false);this.ATn(0
);this.ATk(0);this.Akr(false);this.AeV(false);this.ATm(0);this.AwZ(0);this.Ahe(false
);this.AwB(false);this.AE9(0);this.AFC(0);this.Aww(0);this.AwY(0);this.ASM(-1);this.
Awn(0);this.AwC(0);this.ArG(false);this.NW(0);this.Akn(0);this.Anw(0);this.Nd(0);
this.AeU(false);this.AFq(0);},OnSetId:function(E){if(this.Id===E)return;this.Id=
E;A.abo([this,this.QW,this.OnSetId],0);},Ul:function(E){if(this.VisualId===E)return;
this.VisualId=E;A.abo([this,this.Arl,this.Ul],0);},AbW:function(E){if(this.GroupId===
E)return;this.GroupId=E;A.abo([this,this.BkD,this.AbW],0);},QY:function(E){if(this.
DateOfBirth===E)return;this.DateOfBirth=E;A.abo([this,this.Av1,this.QY],0);},JO:
function(E){if(this.Gender===E)return;this.Gender=E;A.abo([this,this.Wl,this.JO]
,0);},Akl:function(E){if(this.BirthType===E)return;this.BirthType=E;A.abo([this,
this.AR8,this.Akl],0);},Anu:function(E){if(this.LocationId===E)return;this.LocationId=
E;A.abo([this,this.A8L,this.Anu],0);},AeX:function(E){if(this.LastTemperature===
E)return;this.LastTemperature=E;A.abo([this,this.A8K,this.AeX],0);},AeS:function(
E){if(this.IsAlarm===E)return;this.IsAlarm=E;A.abo([this,this.A8C,this.AeS],0);}
,Akr:function(E){if(this.IsControl===E)return;this.IsControl=E;A.abo([this,this.
BkG,this.Akr],0);},Ahe:function(E){if(this.IsRegistered===E)return;this.IsRegistered=
E;A.abo([this,this.BkJ,this.Ahe],0);},AeV:function(E){if(this.IsWatch===E)return;
this.IsWatch=E;A.abo([this,this.A8G,this.AeV],0);},Aw4:function(E){if(this.WorstAssessment===
E)return;this.WorstAssessment=E;A.abo([this,this.A9n,this.Aw4],0);},Ui:function(
E){if(this.IsFever===E)return;this.IsFever=E;A.abo([this,this.A8D,this.Ui],0);},
ATm:function(E){if(this.TimestampLastControl===E)return;this.TimestampLastControl=
E;A.abo([this,this.Bk9,this.ATm],0);},AwZ:function(E){if(this.TimestampLastWatch===
E)return;this.TimestampLastWatch=E;A.abo([this,this.Bk$,this.AwZ],0);},ASU:function(
E){if(this.LastRatingTemperature===E)return;this.LastRatingTemperature=E;A.abo([
this,this.BkM,this.ASU],0);},ATk:function(E){if(this.TimestampExpirationFeverAlarm===
E)return;this.TimestampExpirationFeverAlarm=E;A.abo([this,this.Bk7,this.ATk],0);
},AwX:function(E){if(this.TimestampAlarm===E)return;this.TimestampAlarm=E;A.abo([
this,this.Bk6,this.AwX],0);},Ex:function(E){if(this.AnimalType===E)return;this.AnimalType=
E;A.abo([this,this.PM,this.Ex],0);},AE9:function(E){if(this.LastBodyWeight===E)return;
this.LastBodyWeight=E;A.abo([this,this.A8J,this.AE9],0);},AFC:function(E){if(this.
TimestampLastWeighing===E)return;this.TimestampLastWeighing=E;A.abo([this,this.A8$
,this.AFC],0);},Q1:function(E){if(this.TransponderId===E)return;this.TransponderId=
E;A.abo([this,this.Ark,this.Q1],0);},RI:function(){return A._GetAutoObject(C.Helper
).MN(this.DateOfBirth,A._GetAutoObject(C.Helper).Ds());},Aww:function(E){if(this.
FirstBodyWeight===E)return;this.FirstBodyWeight=E;A.abo([this,this.ASc,this.Aww]
,0);},AwY:function(E){if(this.TimestampFirstWeighing===E)return;this.TimestampFirstWeighing=
E;A.abo([this,this.ASt,this.AwY],0);},Aq1:function(){var Tb=A._NewObject(A.Core.
Bu,0);Tb.Initialize(this.DateOfBirth);var A1Q=A._NewObject(A.Core.Bu,0);A1Q.Initialize(
this.TimestampFirstWeighing);if(((Tb.Year===A1Q.Year)&&(Tb.AbP()===A1Q.AbP()))&&(
this.FirstBodyWeight>0))return true;else return false;},AhJ:function(AIS){var Aat;
var Auh;if(this.TimestampLastWeighing>0){Auh=this.TimestampLastWeighing;Aat=this.
LastBodyWeight;}else{Auh=this.DateOfBirth;Aat=A._GetAutoObject(C.Helper).Abf(this.
AnimalType);}return A._GetAutoObject(C.Helper).AhJ(Aat,Auh,AIS,this.AnimalType);
},ASM:function(E){if(this.FirstBodyWeightId===E)return;this.FirstBodyWeightId=E;
A.abo([this,this.BkC,this.ASM],0);},AnL:function(Bcc){this.AeS(Bcc);if(Bcc){if(!
this.TimestampAlarm)this.AwX(A._GetAutoObject(C.Helper).Ds());}else this.AwX(0);
},Nc:function(E){if(this.NaisId===E)return;this.NaisId=E;A.abo([this,this.Ank,this.
Nc],0);},AGs:function(Bb_){this.AeV(Bb_);if(Bb_){if(!this.TimestampLastWatch)this.
AwZ(A._GetAutoObject(C.Helper).Ds());}else this.AwZ(0);},Awn:function(E){if(this.
DateOfLastCalving===E)return;this.DateOfLastCalving=E;A.abo([this,this.Bks,this.
Awn],0);},AwC:function(E){if(this.LactationNumber===E)return;this.LactationNumber=
E;A.abo([this,this.BkL,this.AwC],0);},AwB:function(E){if(this.IsPerished===E)return;
this.IsPerished=E;A.abo([this,this.BkI,this.AwB],0);},ATn:function(E){if(this.TimestampLastTemperature===
E)return;this.TimestampLastTemperature=E;A.abo([this,this.Bk_,this.ATn],0);},ATl:
function(E){if(this.TimestampLastAssessment===E)return;this.TimestampLastAssessment=
E;A.abo([this,this.Bk8,this.ATl],0);},NW:function(E){if(this.Breed===E)return;this.
Breed=E;A.abo([this,this.AvZ,this.NW],0);},Akn:function(E){if(this.EaseOfDelivery===
E)return;this.EaseOfDelivery=E;A.abo([this,this.ASb,this.Akn],0);},Nd:function(E
){if(this.WhereAbouts===E)return;this.WhereAbouts=E;A.abo([this,this.Awb,this.Nd
],0);},Anw:function(E){if(this.NaisIdMother===E)return;this.NaisIdMother=E;A.abo([
this,this.ASj,this.Anw],0);},AFq:function(E){if(this.ReasonOfLeaving===E)return;
this.ReasonOfLeaving=E;A.abo([this,this.BkW,this.AFq],0);},AeU:function(E){if(this.
IsRegistrationNoticePending===E)return;this.IsRegistrationNoticePending=E;A.abo([
this,this.BkK,this.AeU],0);},ArG:function(E){if(this.IsDry===E)return;this.IsDry=
E;A.abo([this,this.BkH,this.ArG],0);},QW:function(){return this.Id;},Arl:function(
){return this.VisualId;},BkD:function(){return this.GroupId;},Av1:function(){return this.
DateOfBirth;},Wl:function(){return this.Gender;},AR8:function(){return this.BirthType;
},A8L:function(){return this.LocationId;},A8K:function(){return this.LastTemperature;
},A8C:function(){return this.IsAlarm;},BkG:function(){return this.IsControl;},BkJ:
function(){return this.IsRegistered;},A8G:function(){return this.IsWatch;},A9n:function(
){return this.WorstAssessment;},A8D:function(){return this.IsFever;},Bk9:function(
){return this.TimestampLastControl;},Bk$:function(){return this.TimestampLastWatch;
},BkM:function(){return this.LastRatingTemperature;},Bk7:function(){return this.
TimestampExpirationFeverAlarm;},Bk6:function(){return this.TimestampAlarm;},PM:function(
){return this.AnimalType;},A8J:function(){return this.LastBodyWeight;},A8$:function(
){return this.TimestampLastWeighing;},Ark:function(){return this.TransponderId;}
,ASc:function(){return this.FirstBodyWeight;},ASt:function(){return this.TimestampFirstWeighing;
},BkC:function(){return this.FirstBodyWeightId;},Ank:function(){return this.NaisId;
},Bks:function(){return this.DateOfLastCalving;},BkL:function(){return this.LactationNumber;
},BkI:function(){return this.IsPerished;},Bk_:function(){return this.TimestampLastTemperature;
},Bk8:function(){return this.TimestampLastAssessment;},AvZ:function(){return this.
Breed;},ASb:function(){return this.EaseOfDelivery;},Awb:function(){return this.WhereAbouts;
},ASj:function(){return this.NaisIdMother;},BkW:function(){return this.ReasonOfLeaving;
},BkK:function(){return this.IsRegistrationNoticePending;},BkH:function(){return this.
IsDry;},_Init:function(aArg){C.Row._Init.call(this,aArg);this.__proto__=C.Animal;
this.TableId=0;},_className:"Device::Animal"};C.Row={CK:-1,TableId:2,EH:function(
Ad,AI){if(!AI){A.ab5("%s",(Ak2+this.CK.toFixed())+AsE);return false;}else if(AI.
Id!==this.TableId)throw new Error(AsF);else if((Ad<0)||(Ad>=AI.Cd())){A.ab5("%s"
,(((AsG+this.CK.toFixed())+AsH)+AI.Cd().toFixed())+Ak3);return false;}this.CK=Ad;
return true;},Co:function(AI){if(!AI){A.ab5("%s",(Ak2+this.CK.toFixed())+AsE);return false;
}else if(AI.Id!==this.TableId)throw new Error(AsF);else if(this.AmY()&&AI.Lg()){
A.ab5("%s",AsI+AI.HF().toFixed());return false;}else if(!this.AmY()&&((this.CK<0
)||(this.CK>=AI.Cd()))){A.ab5("%s",(((AsG+this.CK.toFixed())+AsH)+AI.Cd().toFixed(
))+Ak3);return false;}return true;},Gj:function(){this.Hf();this.CK=-1;},AmY:function(
){return this.CK===-1;},Hf:function(){this.CK=-2;},AqK:function(){return this.CK
!==-2;},A8Z:function(){return this.CK;},A_k:function(E){this.CK=E;},_Init:function(
aArg){this.__proto__=C.Row;A.h7++;},_Done:function(){this.__proto__=null;A.h7--;
},_ReInit:function(){},_Mark:function(D){var B;if((B=this.I)&&(B._cycle!=D))B._Mark(
B._cycle=D);},I:null,_cycle:0,_observers:null,_className:"Device::Row"};C.Rating={
Temperature:0,Id:0,AnimalId:0,Timestamp:0,BodyWeight:0,RatingTemperature:0,Faeces:
0,Respiratory:0,Appearance:0,Feed:0,EH:function(Ad,AI){var Hz=C.Row.EH.call(this
,Ad,AI);if(Hz&&!!AI){this.OnSetId(AI.CE(Ad,0));this.OnSetAnimalId(AI.CE(Ad,1));this.
OnSetTimestamp(AI.HD(Ad,6));this.OnSetFeed(AI.IY(Ad,2));this.OnSetAppearance(AI.
IY(Ad,3));this.OnSetRespiratory(AI.IY(Ad,4));this.OnSetFaeces(AI.IY(Ad,5));this.
OnSetTemperature(AI.A6N(Ad,7));this.OnSetBodyWeight(AI.ACO(Ad,8));this.OnSetRatingTemperature(
AI.IY(Ad,9));}return Hz;},Co:function(AI){if(this.K&&this.K.Co)return this.K.Co.
apply(this,arguments);else return C.Rating.BaE.apply(this,arguments);},BaE:function(
AI){var Hz=C.Row.Co.call(this,AI);if((Hz&&!!AI)&&(AI.Id===1)){var Jg=AI.Ox();if(
Jg<=0)A.ab5("%s",W5);else{var AzS=this.AmY();if(AzS)this.CK=AI.Yx();else AI.Hg(this.
CK,0,this.Id);AI.Hg(this.CK,1,this.AnimalId);AI.Ace(this.CK,6,this.Timestamp);AI.
AkH(this.CK,2,this.Feed);AI.AkH(this.CK,3,this.Appearance);AI.AkH(this.CK,4,this.
Respiratory);AI.AkH(this.CK,5,this.Faeces);AI.A$f(this.CK,7,this.Temperature);AI.
AUk(this.CK,8,this.BodyWeight);AI.AkH(this.CK,9,this.RatingTemperature);AI.Oz(Jg
);if(AzS)this.OnSetId(AI.Abg());var Rq=A._GetAutoObject(C.Device).Ao;var Ad=A._GetAutoObject(
C.Device).Ao.Lb(0,this.AnimalId);if(Ad>=0){var B_=A._NewObject(C.Animal,0);B_.EH(
Ad,Rq);if(this.Temperature>0)B_.Ui(A._GetAutoObject(C.Helper).A7d(this));if((this.
Temperature>0)&&A._GetAutoObject(C.Helper).AF8(this)){var Oi=A._GetAutoObject(C.
Helper).AQQ(this);B_.Akr(Oi);B_.AnL(Oi);}else if(this.Temperature>0){var Oi=(A._GetAutoObject(
C.Helper).AQQ(this)||(B_.WorstAssessment===2))||(B_.WorstAssessment===1);B_.Akr(
Oi);B_.AnL(Oi);}else{var Oi=A._GetAutoObject(C.Helper).AQQ(this)||B_.IsFever;B_.
Akr(Oi);B_.AnL(Oi);}B_.Co(Rq);}}}return Hz;},Gj:function(){C.Row.Gj.call(this);this.
OnSetTimestamp(A._GetAutoObject(C.Helper).Ds());this.OnSetId(-1);},Hf:function(){
C.Row.Hf.call(this);this.OnSetTimestamp(0);this.OnSetId(0);this.OnSetAnimalId(0);
this.OnSetFeed(0);this.OnSetAppearance(0);this.OnSetRespiratory(0);this.OnSetFaeces(
0);this.OnSetTemperature(0);this.OnSetBodyWeight(0);this.OnSetRatingTemperature(
0);},OnSetTemperature:function(E){if(this.Temperature===E)return;this.Temperature=
E;A.abo([this,this.Bk5,this.OnSetTemperature],0);},OnSetId:function(E){if(this.Id===
E)return;this.Id=E;A.abo([this,this.QW,this.OnSetId],0);},OnSetAnimalId:function(
E){if(this.AnimalId===E)return;this.AnimalId=E;A.abo([this,this.Bkf,this.OnSetAnimalId
],0);},OnSetFeed:function(E){if(this.Feed===E)return;this.Feed=E;A.abo([this,this.
Bkz,this.OnSetFeed],0);},OnSetAppearance:function(E){if(this.Appearance===E)return;
this.Appearance=E;A.abo([this,this.Bkg,this.OnSetAppearance],0);},OnSetRespiratory:
function(E){if(this.Respiratory===E)return;this.Respiratory=E;A.abo([this,this.BkX
,this.OnSetRespiratory],0);},OnSetFaeces:function(E){if(this.Faeces===E)return;this.
Faeces=E;A.abo([this,this.Bkx,this.OnSetFaeces],0);},OnSetTimestamp:function(E){
if(this.Timestamp===E)return;this.Timestamp=E;A.abo([this,this.A8_,this.OnSetTimestamp
],0);},Bok:function(Nk,A7){switch(Nk){case 2:this.OnSetAppearance(A7);break;case
1:this.OnSetFeed(A7);break;case 4:this.OnSetFaeces(A7);break;case 3:this.OnSetRespiratory(
A7);break;default:;}},Biy:function(Nk){switch(Nk){case 2:return this.Appearance;
case 1:return this.Feed;case 4:return this.Faeces;case 3:return this.Respiratory;
default:return 0;}},OnSetRatingTemperature:function(E){if(this.RatingTemperature===
E)return;this.RatingTemperature=E;A.abo([this,this.BkV,this.OnSetRatingTemperature
],0);},OnSetBodyWeight:function(E){if(this.BodyWeight===E)return;this.BodyWeight=
E;A.abo([this,this.Bkk,this.OnSetBodyWeight],0);},Bk5:function(){return this.Temperature;
},QW:function(){return this.Id;},Bkf:function(){return this.AnimalId;},Bkz:function(
){return this.Feed;},Bkg:function(){return this.Appearance;},BkX:function(){return this.
Respiratory;},Bkx:function(){return this.Faeces;},A8_:function(){return this.Timestamp;
},BkV:function(){return this.RatingTemperature;},Bkk:function(){return this.BodyWeight;
},_Init:function(aArg){C.Row._Init.call(this,aArg);this.__proto__=C.Rating;this.
TableId=1;var Lv=this._variants();if(Lv){this.K={};Lv._Init.call(this,aArg);}},_Done:
function(){if(this.K)this.K._Done.call(this);this.__proto__=C.Row;C.Row._Done.call(
this);},_ReInit:function(){C.Row._ReInit.call(this);if(this.K)this.K._ReInit.call(
this);},_Mark:function(D){C.Row._Mark.call(this,D);if(this.K)this.K._Mark(D);},_variants:
function(){return A.acs.Rating._variants();},K:null,_className:"Device::Rating"};
C.HelperClass={Uu:null,Aht:null,AUd:null,AUe:null,W:null,Au:null,KD:null,SK:null
,AdN:null,UA:null,Uz:null,Aea:null,Afm:null,Afl:null,Afk:null,Afn:null,Agr:null,
AGH:0,Init:function(aArg){A.pe([this,this.ATG],this);},Aku:function(E){this.Uu=E;
A.abo([this,this.Ari,this.Aku],0);},AFu:function(E){this.Aht=E;A.abo([this,this.
A80,this.AFu],0);},BAu:function(G){switch(A._GetAutoObject(C.Device).ScanState){
case 2:{var Auj=A._GetAutoObject(C.Device).OO;if(!Auj)throw new Error(AxV);switch(
Auj.TransponderType){case 1:this.Aku(Auj);break;case 2:this.ATb(Auj);break;case 3:
this.AFu(Auj);break;case 4:this.ATc(Auj);break;case 0:break;default:throw new Error(
AxW);}}break;case 4:A._GetAutoObject(C.Device).A_(11,true,A.jV,2000,null);break;
case 3:A._GetAutoObject(C.Device).A_(12,true,A.jV,2000,null);break;case 0:case 1:
break;default:throw new Error(AVE);}},AkE:function(){this.Aku(null);this.ATb(null
);this.AFu(null);this.ATc(null);},AFz:function(E){if(this.K&&this.K.AFz)return this.
K.AFz.apply(this,arguments);else return C.HelperClass.BaC.apply(this,arguments);
},BaC:function(E){A.abo([this,this.UT,this.UU],0);A._GetAutoObject(C.Device).SetSystemTime(
E);},UU:function(Aq){this.AFz(Aq);},Ds:function(){if(this.K&&this.K.Ds)return this.
K.Ds.apply(this,arguments);else return C.HelperClass.Bay.apply(this,arguments);}
,Bay:function(){var B;return((B=(this.Au.Bc9()|0))<0)?B+0x100000000:B;},UT:function(
){return this.Ds();},Ar$:function(){A._GetAutoObject(C.Device).SF(-1);this.W.Hf(
);A.we(this.W,0);},A7t:function(Jb){if(!Jb){A.ab5("%s%U",AVF,Jb);return false;}var
Bf=A._GetAutoObject(C.Device).Ao.AgJ(22,Jb);return this.HJ(Bf);},AmM:function(AoD
,AIR){switch(AoD){case 0:{var Ao6=AIR;switch(Ao6){case 14:return A.aaR(A.acf.Afh
);case 6:return AsJ;case 4:return A.aaR(A.acf.Ad4);case 28:return AxX;case 7:return A.
aaR(A.acf.Afc);case 2:return A.aaR(A.acf.O);case 0:return A.aaR(A.acf.GG);case 37:
return P4;case 8:return A.aaR(A.acf.Alarm);case 9:return A.aaR(A.acf.AB4);case 38:
return A.aaR(A.acf.ANK);case 11:return A.aaR(A.acf.Fever);case 27:return AxY;case
10:return A.aaR(A.acf.Bn0);case 12:return A.aaR(A.acf.ArY);case 29:return A.aaR(
A.acf.AQ9);case 18:return A.aaR(A.acf.Weighing);case 17:return AVG;case 5:return A.
aaR(A.acf.Temperature);case 3:return AVH;case 26:return A.aaR(A.acf.Uc);case 35:
return A.aaR(A.acf.Uc)+AVI;case 36:return AVJ;case 15:return AHb;case 24:return AHc;
case 20:return Afs;case 30:return Aof;case 21:return AVK;case 19:return AHd;case
22:return A.aaR(A.acf.Transponder);case 1:return A.aaR(A.acf.GB);case 34:return A.
aaR(A.acf.I_);case 13:return Ak4;case 31:return AHe;default:{A.ab5("%s",AHf+Ao6.
toFixed());return AHg+Ao6.toFixed();}}}case 1:{var Ao6=AIR;switch(Ao6){case 1:return A.
aaR(A.acf.Animal);case 3:return A.aaR(A.acf.AF7);case 8:return A.aaR(A.acf.Afj);
case 5:return A.aaR(A.acf.AF9);case 2:return A.aaR(A.acf.Feed);case 4:return A.aaR(
A.acf.AF_);case 7:return A.aaR(A.acf.Temperature);case 6:return A.aaR(A.acf.Bu);
default:{A.ab5("%s",AVL+Ao6.toFixed());return AHg+Ao6.toFixed();}}}default:A.ab5(
"%s",(AVM+AoD.toFixed())+AVN);}return A.jV;},A6E:function(AoD,AH){var result=A.jV;
if(!!AH){result=this.AmM(AoD,AH.EF);result=((result+Oa)+A._GetAutoObject(C.Converter
).A6n(AH.Operator))+Oa;if(!!(C.Int32FilterCriterion.isPrototypeOf(AH)?AH:null))result=
result+(C.Int32FilterCriterion.isPrototypeOf(AH)?AH:null).A5.toFixed();else if(!
!(C.UInt32FilterCriterion.isPrototypeOf(AH)?AH:null))result=result+(C.UInt32FilterCriterion.
isPrototypeOf(AH)?AH:null).A5.toFixed();else if(!!(C.StringFilterCriterion.isPrototypeOf(
AH)?AH:null))result=result+(C.StringFilterCriterion.isPrototypeOf(AH)?AH:null).A5;
else if(!!(C.BoolFilterCriterion.isPrototypeOf(AH)?AH:null)){if((C.BoolFilterCriterion.
isPrototypeOf(AH)?AH:null).A5)result=this.AmM(AoD,AH.EF);else result=A.jV;}else if(
!!(C.GenderFilterCriterion.isPrototypeOf(AH)?AH:null)){var ByW=A._NewObject(C.GenderToString
,0);result=result+ByW.Ls((C.GenderFilterCriterion.isPrototypeOf(AH)?AH:null).A5);
}else if(!!(C.AnimalTypeFilterCriterion.isPrototypeOf(AH)?AH:null)){var BxQ=A._NewObject(
C.AnimalTypeToString,0);result=result+BxQ.Ls((C.AnimalTypeFilterCriterion.isPrototypeOf(
AH)?AH:null).A5);}else if(!!(C.AssessmentFilterCriterion.isPrototypeOf(AH)?AH:null
)){var BxT=A._NewObject(C.AssesmentToString,0);result=result+BxT.Ls((C.AssessmentFilterCriterion.
isPrototypeOf(AH)?AH:null).A5);}else if(!!(C.UInt64FilterCriterion.isPrototypeOf(
AH)?AH:null))result=result+(C.UInt64FilterCriterion.isPrototypeOf(AH)?AH:null).A5.
toFixed();else if(!!(C.UInt64PartialFilterCriterion.isPrototypeOf(AH)?AH:null)){
var Av=(C.UInt64PartialFilterCriterion.isPrototypeOf(AH)?AH:null);result=(((((result+
Av.A5)+AcF)+Av.TI.toFixed())+O1)+Av.AeI.toFixed())+Ak3;}else if(!!(C.WhereAboutsFilterCriterion.
isPrototypeOf(AH)?AH:null)){var BCe=A._NewObject(C.WhereAboutsToString,0);result=
result+BCe.Ls((C.WhereAboutsFilterCriterion.isPrototypeOf(AH)?AH:null).A5);}else
A.ab5("%s",AVO);}return result;},Ng:function(aString,BbX,Bw5){var result=A.jV;var
BfE=false;var index=0;var Bw7=BbX.length;while(!BfE){var A3u=aString.indexOf(BbX
,index);if(A3u!==-1){result=(result+A.abW(aString,index,A3u-index))+Bw5;index=A3u+
Bw7;}else{var Bb1=aString.length;if(index<Bb1)result=result+A.ab2(aString,Bb1-index
);BfE=true;}}return result;},ATb:function(E){this.AUd=E;A.abo([this,this.BkZ,this.
ATb],0);},ATc:function(E){this.AUe=E;A.abo([this,this.Bk0,this.ATc],0);},Bdx:function(
){return((A._GetAutoObject(C.Device).ScanState===2)&&!!A._GetAutoObject(C.Device
).OO)&&(A._GetAutoObject(C.Device).OO.TransponderType===1);},AfY:function(G){if(
!this.W.AmY()&&!!this.W.Id)this.BjC(this.W.Id);},Ave:function(Ek){return A._GetAutoObject(
C.Helper).UA.Get(Ek);},A6z:function(Ek){return A._GetAutoObject(C.Helper).Uz.Get(
Ek);},A6J:function(){var P=0;var min=32767;while(P<A._GetAutoObject(C.Helper).UA.
MC){if(A._GetAutoObject(C.Helper).UA.Get(P)<min)min=A._GetAutoObject(C.Helper).UA.
Get(P);P=P+1;}return min;},ATG:function(G){A.zV([this,this.AfY],A._GetAutoObject(
C.Device).Ao,0);},AQQ:function(D0){if(!D0)return false;var Bjc=(((this.AzO(D0.Faeces
)||this.AzO(D0.Feed))||this.AzO(D0.Appearance))||this.AzO(D0.Respiratory))||this.
AzO(D0.RatingTemperature);return Bjc||this.A7d(D0);},AzO:function(BbA){return(BbA===
2)||(BbA===1);},A7d:function(D0){return!!D0&&(D0.Temperature>A._GetAutoObject(C.
Helper).Ave(A._GetAutoObject(C.Helper).W.AnimalType));},HJ:function(L6){var A2n=
false;if(L6>=0){if(L6!==this.W.CK)A._GetAutoObject(C.Device).SF(L6);A2n=this.W.EH(
L6,A._GetAutoObject(C.Device).Ao);if(A2n)A.we(this.W,0);}else{A._GetAutoObject(C.
Device).SF(-1);this.W.Hf();A.we(this.W,0);}return A2n;},AhC:function(AhW){var B;
return(((B=(this.Au.Bc9()|0))<0)?B+0x100000000:B)-this.Amy(AhW);},Aso:function(){
var B;A.pe([B=this.KD,B.AnQ],this);},BBG:function(G){A._GetAutoObject(C.Device).
A_(16,false,AHh,0,null);A._GetAutoObject(C.Device).A_(5,true,A.jV,0,null);},Bnu:
function(G){var At=(C.PopupContext.isPrototypeOf(G)?G:null);if(!!At&&(At.PopupState===
5))this.Aso();},Bni:function(E){if(this.AGH===E)return;this.AGH=E;A._GetAutoObject(
C.Device).A_(16,true,this.AGH.toFixed(),0,[this,this.Bnu]);},MN:function(BwF,Bxk
){var D6;var Bf_=A._NewObject(A.Core.AnX,0);var Gz=A._NewObject(A.Core.Bu,0);var
K5=A._NewObject(A.Core.Bu,0);Gz.Initialize(BwF);K5.Initialize(Bxk);D6=K5.BhO(Gz);
Bf_.Initialize2(0,D6.ADf,D6.AD5,D6.AGl);if(Gz.J(Bf_).GE===Gz.GE)return D6.Ke;else
return D6.Ke+1;},BBI:function(G){A._GetAutoObject(C.Device).UpdateMeasureState(3
);if((A._GetAutoObject(C.Device).Ks>=A._GetAutoObject(C.Device).ZQ)&&(A._GetAutoObject(
C.Device).Ks<=A._GetAutoObject(C.Helper).Ave(A._GetAutoObject(C.Helper).W.AnimalType
))){var AI9=A._GetAutoObject(C.Helper).W.Id;var BA8=A._GetAutoObject(C.Device).Ao.
Lb(0,AI9);A._GetAutoObject(C.Device).Ao.MB(BA8,9,false);A._GetAutoObject(C.Device
).Ao.Bl(A._GetAutoObject(C.Device).Ao.Filter);}},AKO:function(G){var Bg2=A._GetAutoObject(
C.Helper).Ave(A._GetAutoObject(C.Helper).W.AnimalType);var BgW=A._GetAutoObject(
C.Helper).A6z(A._GetAutoObject(C.Helper).W.AnimalType);var Agb=A.abz(Bg2-100,BgW+
100);this.BcN(Agb);},Amy:function(AhW){return AhW*86400;},AnY:function(J0){var B;
if(!!J0&&(J0<(((B=Math.trunc(Math.pow(10,A._GetAutoObject(C.Device).AF)))<0)?B+0x10000000000000000:
B)))return-1;return A._GetAutoObject(C.Helper).Sc(J0,A._GetAutoObject(C.Device).
AF&0xFF,A._GetAutoObject(C.Device).A0&0xFF)|0;},AF8:function(D0){if(!D0)return false;
return((!!D0.Faeces||!!D0.Feed)||!!D0.Appearance)||!!D0.Respiratory;},AhJ:function(
A0B,Bb3,AIS,Ek){var B;var ApJ;if((A0B<650000)&&(Bb3<this.Ds())){var Bco=this.Agr.
Avg(Ek);var Bcn=0;if(Bco>=0)Bcn=this.Afk.Get(Bco);ApJ=A0B+(this.MN(Bb3,this.Ds()
)*Bcn);if(AIS>0){var A1y=this.ApI(AIS);ApJ=(Math.trunc(((((B=ApJ)<0)?B+0x10000000000000000:
B)+Math.trunc(A1y/2))/A1y)*A1y)|0;}if(ApJ>650000)ApJ=650000;}else ApJ=A0B;return ApJ;
},ACU:function(D0){var Ap6=A._GetAutoObject(C.Converter).AdO(D0.Faeces);if(Ap6<A.
_GetAutoObject(C.Converter).AdO(D0.Feed))Ap6=A._GetAutoObject(C.Converter).AdO(D0.
Feed);if(Ap6<A._GetAutoObject(C.Converter).AdO(D0.Appearance))Ap6=A._GetAutoObject(
C.Converter).AdO(D0.Appearance);if(Ap6<A._GetAutoObject(C.Converter).AdO(D0.Respiratory
))Ap6=A._GetAutoObject(C.Converter).AdO(D0.Respiratory);return A._GetAutoObject(
C.Converter).A$D(Ap6);},Axh:function(D0,Nj){if(!!D0){D0.OnSetFaeces(Nj);D0.OnSetFeed(
Nj);D0.OnSetAppearance(Nj);D0.OnSetRespiratory(Nj);}},Biw:function(AI,AIX,AcW,Xe
,Afw){if(!AI)throw new Error(AsK);var Be=A._NewObject(C.Filter,0);var Apu=AI.Filter;
var Od=A._NewObject(C.Int32FilterCriterion,0);Od.Operator=0;Od.EF=1;Od.A5=AcW;Be.
CW(Od);if(Xe>0){var Or=A._NewObject(C.UInt32FilterCriterion,0);Or.Operator=2;Or.
EF=6;Or.A5=Xe;Be.CW(Or);}if(Afw>0){var Oh=A._NewObject(C.UInt32FilterCriterion,0
);Oh.Operator=3;Oh.EF=6;Oh.A5=Afw;Be.CW(Oh);}AI.Bl(Be);var L7=A._NewObject(C.Int32ArrayWrapper
,0);L7.Zn(6);var P;for(P=0;P<L7.MC;P=P+1)L7.Set(P,0);var U0;for(P=0;P<AI.Cd();P=
P+1){U0=AI.IY(P,AIX);L7.Set(U0,L7.Get(U0)+1);}AI.Bl(Apu);return L7;},ZF:function(
AhW){var B;var Gz=A._NewObject(A.Core.Bu,0);var Bf9=A._NewObject(A.Core.AnX,0);Gz.
Initialize(A._GetAutoObject(C.Converter).AhE());Bf9.Initialize2(AhW,0,0,0);Gz=Gz.
BoO(Bf9);return((B=(Gz.JM()|0))<0)?B+0x100000000:B;},A6A:function(AI,AcW,Afw,Xe){
if(!AI)throw new Error(AsK);var Be=A._NewObject(C.Filter,0);var Apu=AI.Filter;var
Od=A._NewObject(C.Int32FilterCriterion,0);Od.Operator=0;Od.EF=1;Od.A5=AcW;Be.CW(
Od);if(Xe>0){var Or=A._NewObject(C.UInt32FilterCriterion,0);Or.Operator=2;Or.EF=
6;Or.A5=Xe;Be.CW(Or);}if(Afw>0){var Oh=A._NewObject(C.UInt32FilterCriterion,0);Oh.
Operator=3;Oh.EF=6;Oh.A5=Afw;Be.CW(Oh);}AI.Bl(Be);var L7=A._NewObject(C.Int32ArrayWrapper
,0);L7.Zn(6);var P;for(P=0;P<L7.MC;P=P+1)L7.Set(P,0);var AoV=A._NewObject(C.Rating
,0);var A1p;for(P=0;P<AI.Cd();P=P+1){AoV.EH(P,AI);if(A._GetAutoObject(C.Helper).
AF8(AoV)){A1p=A._GetAutoObject(C.Helper).ACU(AoV);L7.Set(A1p,L7.Get(A1p)+1);}}AI.
Bl(Apu);return L7;},A1Y:function(AI,AcW,Byr){if(!AI)throw new Error(AsK);var Be=
A._NewObject(C.Filter,0);var Apu=AI.Filter;var Od=A._NewObject(C.Int32FilterCriterion
,0);Od.Operator=0;Od.EF=1;Od.A5=AcW;Be.CW(Od);var Xe=A._GetAutoObject(C.Converter
).AhE()+A._GetAutoObject(C.Helper).Amy(Byr);var Afw=Xe+A._GetAutoObject(C.Helper
).Amy(1);var Or=A._NewObject(C.UInt32FilterCriterion,0);Or.Operator=2;Or.EF=6;Or.
A5=Xe;Be.CW(Or);var Oh=A._NewObject(C.UInt32FilterCriterion,0);Oh.Operator=3;Oh.
EF=6;Oh.A5=Afw;Be.CW(Oh);AI.Bl(Be);var AoV=A._NewObject(C.Rating,0);var U0;var LP=
0;var P;for(P=0;P<AI.Cd();P=P+1){AoV.EH(P,AI);if(A._GetAutoObject(C.Helper).AF8(
AoV)){U0=A._GetAutoObject(C.Helper).ACU(AoV);if(A._GetAutoObject(C.Converter).AdO(
U0)>A._GetAutoObject(C.Converter).AdO(LP))LP=U0;}}AI.Bl(Apu);return LP;},AmX:function(
){if((A._GetAutoObject(C.Device).WeightRecordingScope===2)||(A._GetAutoObject(C.
Device).WeightRecordingScope===1))return true;else return false;},A7g:function(){
if((A._GetAutoObject(C.Device).WeightRecordingScope===2)||!A._GetAutoObject(C.Device
).WeightRecordingScope)return true;else return false;},Bix:function(AI,AIX,AcW,Xe
,Afw){if(!AI)throw new Error(AsK);var Be=A._NewObject(C.Filter,0);var Apu=AI.Filter;
var Od=A._NewObject(C.Int32FilterCriterion,0);Od.Operator=0;Od.EF=1;Od.A5=AcW;Be.
CW(Od);if(Xe>0){var Or=A._NewObject(C.UInt32FilterCriterion,0);Or.Operator=2;Or.
EF=6;Or.A5=Xe;Be.CW(Or);}if(Afw>0){var Oh=A._NewObject(C.UInt32FilterCriterion,0
);Oh.Operator=3;Oh.EF=6;Oh.A5=Afw;Be.CW(Oh);}AI.Bl(Be);var L7=A._NewObject(C.Int32ArrayWrapper
,0);L7.Zn(6);var P;for(P=0;P<L7.MC;P=P+1)L7.Set(P,0);if(AI.Cd()>0){var U0=AI.IY(
0,AIX);var ApO=AI.HD(P,6);var Ac=A._NewObject(A.Core.Bu,0);Ac.Initialize(ApO);var
Ap5=U0;var AJQ=A._NewObject(A.Core.Bu,0);AJQ.Initialize(Ac.JM());for(P=1;P<AI.Cd(
);P=P+1){U0=AI.IY(P,AIX);ApO=AI.HD(P,6);Ac.Initialize(ApO);if((Ac.AbP()!==AJQ.AbP(
))||(Ac.Year!==AJQ.Year)){L7.Set(Ap5,L7.Get(Ap5)+1);AJQ.Initialize(Ac.JM());Ap5=
U0;}else if(!!U0&&(U0<Ap5))Ap5=U0;}L7.Set(Ap5,L7.Get(Ap5)+1);}AI.Bl(Apu);return L7;
},Aqd:function(L2){var B;var Gz=A._NewObject(A.Core.Bu,0);Gz.Initialize(L2);Gz.Ans(
0);Gz.Anv(0);Gz.Any(0);return((B=(Gz.JM()|0))<0)?B+0x100000000:B;},ANY:function(
L2){var B;L2=L2+86400;var Gz=A._NewObject(A.Core.Bu,0);Gz.Initialize(L2);Gz.Ans(
0);Gz.Anv(0);Gz.Any(0);return((B=(Gz.JM()|0))<0)?B+0x100000000:B;},Biz:function(
BBE,ByC,Al5,Alt){var BcI=A._GetAutoObject(C.Helper).MN(BBE,ByC);if(BcI>0)return((
Alt-Al5)/BcI)|0;return 0;},Bpq:function(BwG,Bxl){var Gz=A._NewObject(A.Core.Bu,0
);var K5=A._NewObject(A.Core.Bu,0);Gz.Initialize(BwG);K5.Initialize(Bxl);return(
Gz.Year===K5.Year)&&(Gz.AbP()===K5.AbP());},A6G:function(){var Be=A._GetAutoObject(
C.Helper).Mo();var BdL=A._NewObject(C.UInt32FilterCriterion,0);var Bxu=A._GetAutoObject(
C.Helper).ZF(A._GetAutoObject(C.Device).AqD)-1;BdL.Initialize(28,2,Bxu,true);Be.
CW(BdL);var UW=A._NewObject(C.AnimalTypeFilterCriterion,0);UW.Initialize(14,0,1,
true);Be.CW(UW);if(A._GetAutoObject(C.Device).AqE){var Az4=A._NewObject(C.UInt32FilterCriterion
,0);var A2i=A._GetAutoObject(C.Helper).Ds()-21600;Az4.Initialize(30,3,A2i,true);
Be.CW(Az4);}return Be;},Bn5:function(){var Jg=A._GetAutoObject(C.Device).Ao.Ox();
if(Jg<=0)A.ab5("%s",W5);else{A._GetAutoObject(C.Device).Ao.Hf();A._GetAutoObject(
C.Device).Ao.Oz(Jg);}Jg=A._GetAutoObject(C.Device).Agj.Ox();if(Jg<=0)A.ab5("%s",
W5);else{A._GetAutoObject(C.Device).Agj.Hf();A._GetAutoObject(C.Device).Agj.Oz(Jg
);}Jg=A._GetAutoObject(C.Device).Bv.Ox();if(Jg<=0)A.ab5("%s",W5);else{A._GetAutoObject(
C.Device).Bv.Hf();A._GetAutoObject(C.Device).Bv.Oz(Jg);}Jg=A._GetAutoObject(C.Device
).Pl.Ox();if(Jg<=0)A.ab5("%s",W5);else{A._GetAutoObject(C.Device).Pl.Hf();A._GetAutoObject(
C.Device).Pl.Oz(Jg);}},BjC:function(AcW){var Bf=A._GetAutoObject(C.Device).Ao.Lb(
0,AcW);return this.HJ(Bf);},AQX:function(Jb){var Ain=A._GetAutoObject(C.Device).
Ao.Ad_(22,Jb);return Ain;},ACM:function(){var Be=A._GetAutoObject(C.Helper).Mo();
var Ai4=A._NewObject(C.UInt64FilterCriterion,0);Ai4.Initialize(22,0,0,true);Be.CW(
Ai4);return Be;},AOx:function(AoO,Byz,P8){var Aaf=-1;switch(AoO){case 2:Aaf=30;break;
case 3:Aaf=31;break;case 10:Aaf=19;break;default:A.ab5("%s%e",UR,AoO);}if(Aaf<0)
return null;var Ac$=A._NewObject(C.UInt32FilterCriterion,0);Ac$.Initialize(Aaf,3
,A._GetAutoObject(C.Helper).Ds()-Byz,P8);return Ac$;},Bn3:function(aFilter){var AH=
aFilter.DN(30,3);if(!!AH)aFilter.N3(AH);AH=aFilter.DN(31,3);if(!!AH)aFilter.N3(AH
);AH=aFilter.DN(19,3);if(!!AH)aFilter.N3(AH);},A1g:function(AfG,AyJ,AI){if(AI.Lg(
))return 5;if(AfG.VisualId<=0)switch(AyJ){case 0:if(!AfG.NaisId)return 1;break;case
1:if(!AfG.TransponderId)return 1;break;case 3:case 2:case 5:case 4:return 1;default:
throw new Error(AHi+AyJ.toFixed());}if((!AfG.NaisId&&!AfG.TransponderId)&&A._GetAutoObject(
C.Device).Ao.AjC(1,AfG.VisualId))return 2;if(!!AfG.NaisId&&A._GetAutoObject(C.Helper
).AQV(AfG.NaisId))return 3;if(!!AfG.TransponderId&&A._GetAutoObject(C.Helper).AQX(
AfG.TransponderId))return 4;return 0;},Ap_:function(EJ){EJ.Ex(A._GetAutoObject(C.
Device).AnimalType);EJ.NW(A._GetAutoObject(C.Device).Breed);EJ.QY(A._GetAutoObject(
C.Helper).Ds()-A._GetAutoObject(C.Helper).Amy(A._GetAutoObject(C.Device).AdG));EJ.
JO(A._GetAutoObject(C.Device).Gender);EJ.Nd(A._GetAutoObject(C.Device).WhereAbouts
);},AL6:function(Rl,EJ){var GO=0;switch(Rl){case 0:GO=A._GetAutoObject(C.Helper).
AnY(EJ.NaisId);break;case 1:GO=A._GetAutoObject(C.Helper).AnY(EJ.TransponderId);
break;case 3:GO=A._GetAutoObject(C.Device).AqP;break;case 2:GO=A._GetAutoObject(
C.Device).AqQ;break;case 4:case 5:GO=A._GetAutoObject(C.Device).AjN;break;default:
throw new Error(AHj+Rl.toFixed());}return GO;},A$K:function(Ala,L3,Bwr,BbE,Bw0){
var B;var Qj=null;var Xp=null;switch(Ala){case 0:{Qj=[B=A._GetAutoObject(C.Device
),B.ASi,B.AZZ];Xp=[B=A._GetAutoObject(C.Device),B.Av_,B.AyC];}break;case 1:switch(
L3){case 1:{Qj=[B=A._GetAutoObject(C.Device),B.A8P,B.Ba9];Xp=[B=A._GetAutoObject(
C.Device),B.Av8,B.AyA];}break;case 0:{Qj=[B=A._GetAutoObject(C.Device),B.A8Q,B.Ba_
];Xp=[B=A._GetAutoObject(C.Device),B.Av9,B.AyB];}break;case 2:{Qj=[B=A._GetAutoObject(
C.Device),B.ASi,B.AZZ];Xp=[B=A._GetAutoObject(C.Device),B.Av_,B.AyC];}break;default:
throw new Error(AxZ+L3.toFixed());}break;default:throw new Error(AHk+Ala.toFixed(
));}if(!!Qj&&!!Xp){Qj[2].call(Qj[0],Bwr);if((Xp[1].call(Xp[0])>0)&&(BbE<Bw0))Qj[
2].call(Qj[0],Qj[1].call(Qj[0])+Xp[1].call(Xp[0]));else if((Xp[1].call(Xp[0])<0)&&(
BbE>0))Qj[2].call(Qj[0],Qj[1].call(Qj[0])+Xp[1].call(Xp[0]));return Qj[1].call(Qj[
0]);}return 0;},AVb:function(EJ,Ala,Bwz){if(!EJ||(Bwz===true))return;switch(Ala){
case 0:EJ.Nc(A._GetAutoObject(C.Device).AvS);break;case 1:switch(EJ.Gender){case
0:EJ.Nc(A._GetAutoObject(C.Device).AD8);break;case 1:EJ.Nc(A._GetAutoObject(C.Device
).AD7);break;case 2:EJ.Nc(A._GetAutoObject(C.Device).AvS);break;default:throw new
Error(AxZ+EJ.Gender.toFixed());}break;default:throw new Error(AHk+Ala.toFixed());
}},Bjd:function(Rl,EJ){var result=false;switch(Rl){case 0:result=!!EJ.NaisId;break;
case 1:result=!!EJ.TransponderId;break;case 3:case 2:case 4:case 5:result=false;
break;default:throw new Error(AHj+Rl.toFixed());}return result;},AJ4:function(EJ
,Bby,AyJ,Atn,Afz){switch(Bby){case 2:if(Atn<=0)A._GetAutoObject(C.Device).A_(21,
true,EJ.VisualId.toFixed(),0,Afz);else A._GetAutoObject(C.Device).A_(48,true,(EJ.
VisualId.toFixed()+Ax0)+Atn.toFixed(),0,Afz);break;case 3:if(Atn<=0)A._GetAutoObject(
C.Device).A_(21,true,A._GetAutoObject(C.Converter).Rc(EJ.NaisId),0,Afz);else A._GetAutoObject(
C.Device).A_(48,true,(A._GetAutoObject(C.Converter).Rc(EJ.NaisId)+Ax0)+Atn.toFixed(
),0,Afz);break;case 4:if(Atn<=0)A._GetAutoObject(C.Device).A_(25,true,A._GetAutoObject(
C.Converter).Rc(EJ.TransponderId),0,Afz);else A._GetAutoObject(C.Device).A_(47,true
,(A._GetAutoObject(C.Converter).Rc(EJ.TransponderId)+Ax0)+Atn.toFixed(),0,Afz);break;
case 1:switch(AyJ){case 1:A._GetAutoObject(C.Device).A_(42,true,A.jV,0,Afz);break;
case 0:A._GetAutoObject(C.Device).A_(43,true,A.jV,0,Afz);break;case 3:case 2:case
5:case 4:A._GetAutoObject(C.Device).A_(22,true,A.jV,0,Afz);break;default:throw new
Error(AHi+AyJ.toFixed());}break;case 5:A._GetAutoObject(C.Device).A_(41,true,A._GetAutoObject(
C.Device).Ao.HF().toFixed(),0,Afz);break;case 0:break;default:throw new Error(AVP+
Bby.toFixed());}},Bdb:function(BbM,L3){var B;var Az8=null;switch(BbM){case 0:Az8=[
B=A._GetAutoObject(C.Device),B.Av_,B.AyC];break;case 1:switch(L3){case 1:Az8=[B=
A._GetAutoObject(C.Device),B.Av8,B.AyA];break;case 0:Az8=[B=A._GetAutoObject(C.Device
),B.Av9,B.AyB];break;case 2:Az8=[B=A._GetAutoObject(C.Device),B.Av_,B.AyC];break;
default:throw new Error(AxZ+L3.toFixed());}break;default:throw new Error(AVQ+BbM.
toFixed());}return Az8;},A6R:function(P_,Bxb){var AaE=A._NewObject(A.Core.Bu,0);
AaE.Initialize(P_);var ABl=AaE.Year;var Bf=A._GetAutoObject(C.Device).Pl.Lb(0,ABl
);var UZ=A._NewObject(C.CalfDeregistrations,0);if(Bf<0){if(A._GetAutoObject(C.Device
).Pl.Lg())A._GetAutoObject(C.Device).A_(51,true,A._GetAutoObject(C.Device).Pl.HF(
).toFixed(),0,null);else{UZ.Gj();UZ.Akw(ABl);}}else UZ.EH(Bf,A._GetAutoObject(C.
Device).Pl);UZ.Awp(UZ.Deregistrations+1);if(Bxb)UZ.Awo(UZ.Deaths+1);UZ.Co(A._GetAutoObject(
C.Device).Pl);},AL4:function(LP,AlD,Alu){var AKp=0;if((AlD&&(Alu===1))||(LP===1)
)AKp=1;else if((AlD&&(Alu===2))||(LP===2))AKp=2;else if(!!LP&&(LP!==5))AKp=LP;return AKp;
},BcN:function(Bxt){var B;if(A._GetAutoObject(C.Device).MeasureState===1){this.SK.
Cw=A._GetAutoObject(C.Device).ZQ;this.SK.B3=Bxt;this.SK.AnO(this);}},ACK:function(
){var Be=this.AOw();var BdA=A._NewObject(C.BoolFilterCriterion,0);BdA.Initialize(
38,0,true,true);Be.CW(BdA);return Be;},A6x:function(Ez){var Be=A._GetAutoObject(
C.Helper).Mo();if(A._GetAutoObject(C.Device).Ap7){var A11=A._GetAutoObject(C.Helper
).AOx(Ez,21600,true);Be.CW(A11);}return Be;},A6L:function(){var Be=A._GetAutoObject(
C.Helper).Mo();var Bd2=A._NewObject(C.UInt64FilterCriterion,0);Bd2.Initialize(26
,0,0,true);Be.CW(Bd2);return Be;},A6O:function(){var B;var Be=A._GetAutoObject(C.
Helper).Mo();var AAc=(C.WhereAboutsFilterCriterion.isPrototypeOf(B=Be.DN(34,3))?
B:null);if(!!AAc)Be.N3(AAc);var Bfl=A._NewObject(C.BoolFilterCriterion,0);Bfl.Initialize(
37,0,true,true);Be.CW(Bfl);return Be;},Sc:function(A7,Ath,A0C){var B;A7=Math.trunc(
A7/this.ApI(Ath));A7%=this.ApI(A0C);return A7;},ApI:function(BbN){switch(BbN){case
0:return 1;case 1:return 10;case 2:return 100;case 3:return 1000;case 4:return 10000;
case 5:return 100000;case 6:return 1000000;case 7:return 10000000;case 8:return 100000000;
case 9:return 1000000000;case 10:return 10000000000;case 11:return 100000000000;
case 12:return 1000000000000;case 13:return 10000000000000;case 14:return 100000000000000;
case 15:return 1000000000000000;default:throw new Error(AVR+BbN.toFixed());}},Mo:
function(){var Be=A._NewObject(C.Filter,0);var BfI=A._NewObject(C.BoolFilterCriterion
,0);BfI.Initialize(10,0,true,true);Be.CW(BfI);var AAc=A._NewObject(C.WhereAboutsFilterCriterion
,0);AAc.Initialize(34,3,6,true);Be.CW(AAc);return Be;},Aq0:function(aFilter){return!
this.ACN(aFilter);},ACN:function(aFilter){var Jd=0;var Av=aFilter.AOy();while(!!
Av){if(Av.YA===false)Jd++;Av=aFilter.AOD(Av);}return Jd;},AOw:function(){var Be=
this.Mo();var UW=A._NewObject(C.AnimalTypeFilterCriterion,0);UW.Initialize(14,0,
1,true);Be.CW(UW);return Be;},ACR:function(){var B;var A32;var J2=this.BiQ();A32=(((
B=A._GetAutoObject(C.Converter).Aqm(J2))<0)?B+0x10000000000000000:B)*this.ApI(12
);if((J2===10)&&(A._GetAutoObject(C.Device).Ur>0)){var ByX=A._GetAutoObject(C.Helper
).Sc(A._GetAutoObject(C.Device).Ur,10,2)*this.ApI(8);A32+=ByX;}return A32;},BiQ:
function(){var J2=0;if(A._GetAutoObject(C.Device).Ur>0)J2=A._GetAutoObject(C.Converter
).ZO(A._GetAutoObject(C.Device).Ur);if(!J2)J2=A._GetAutoObject(C.Converter).A7j(
A._GetAutoObject(C.Device).Language);return J2;},AQV:function(Xd){var Ain=A._GetAutoObject(
C.Device).Ao.Ad_(26,Xd);return Ain;},AjW:function(AfA){switch(AfA){case 0:case 1:
case 2:case 3:case 4:case 5:return false;case 6:case 7:case 8:case 9:case 10:return true;
default:throw new Error(AVS+AfA.toFixed());}},BgU:function(Rl,EJ){var GO=0;switch(
Rl){case 1:GO=A._GetAutoObject(C.Helper).AnY(EJ.TransponderId);break;case 0:if(!
A._GetAutoObject(C.Device).EartagNrAssignmentMode)GO=A._GetAutoObject(C.Device).
AjN;else switch(EJ.Gender){case 0:GO=A._GetAutoObject(C.Device).AqQ;break;case 1:
GO=A._GetAutoObject(C.Device).AqP;break;case 2:GO=A._GetAutoObject(C.Device).AjN;
break;default:throw new Error(AHl+EJ.Gender.toFixed());}break;default:throw new Error(
AVT+Rl.toFixed());}return GO;},Bim:function(){var B;var AzL=(((((((A.aaR(A.acf.Ahw
)+A.aaR(A.acf.Colon))+O2)+A._GetAutoObject(C.Device).Ahw)+Ax1)+A.aaR(A.acf.BnL))+
A.aaR(A.acf.Colon))+O2)+A._GetAutoObject(A.acj.KI).Bik(((B=A._GetAutoObject(C.Device
).QT.Timestamp)<0)?B+0x100000000:B);return AzL;},Bin:function(){var B;var AzL=((((((((((((((((((((((((((((
AVU+A._GetAutoObject(C.Device).RT.ADX.toFixed())+Lu)+A._GetAutoObject(C.Device).
RT.AD4.toFixed())+Lu)+A._GetAutoObject(C.Device).RT.AGf.toFixed())+O1)+A._GetAutoObject(
C.Device).RT.AB$)+O1)+A._GetAutoObject(A.acj.KI).AjF(((B=A._GetAutoObject(C.Device
).RT.Timestamp)<0)?B+0x100000000:B))+O2)+AVV)+A._GetAutoObject(C.Device).St.ADX.
toFixed())+Lu)+A._GetAutoObject(C.Device).St.AD4.toFixed())+Lu)+A._GetAutoObject(
C.Device).St.AGf.toFixed())+O1)+A._GetAutoObject(C.Device).St.AB$)+O1)+A._GetAutoObject(
A.acj.KI).AjF(((B=A._GetAutoObject(C.Device).St.Timestamp)<0)?B+0x100000000:B))+
O2)+AVW)+A._GetAutoObject(C.Helper).BiT())+O1)+A._GetAutoObject(C.Device).GetCommitHash(
))+O1)+A._GetAutoObject(C.Device).GetCommitCount().toFixed())+O1)+A._GetAutoObject(
A.acj.KI).AjF(A._GetAutoObject(C.Device).GetCommitEpoch());return AzL;},Bil:function(
){var B;var AzL=(((((((((((((((((((((AVX+A._GetAutoObject(C.Device).QT.ARi.toFixed(
))+Lu)+A._GetAutoObject(C.Device).QT.ARj.toFixed())+Lu)+A._GetAutoObject(C.Device
).QT.ARh.toFixed())+O2)+A.aaR(A.acf.A6q))+A.aaR(A.acf.Colon))+Oa)+A._GetAutoObject(
A.acj.KI).AjF(((B=A._GetAutoObject(C.Device).QT.Timestamp)<0)?B+0x100000000:B))+
Ax1)+AVY)+A._GetAutoObject(C.Device).SQ.AU6.toFixed())+Lu)+A._GetAutoObject(C.Device
).SQ.AU7.toFixed())+Lu)+A._GetAutoObject(C.Device).SQ.AU5.toFixed())+O2)+A.aaR(A.
acf.A6q))+A.aaR(A.acf.Colon))+Oa)+A._GetAutoObject(A.acj.KI).AjF(((B=A._GetAutoObject(
C.Device).SQ.Timestamp)<0)?B+0x100000000:B);return AzL;},A6M:function(A0C){var B;
var P;var AAJ=A.jV;for(P=1;P<=A0C;P=P+1)if(!!A.abz(0,2))AAJ=AAJ+String.fromCharCode(
A.abz(97,104)&0xFFFF);else AAJ=AAJ+String.fromCharCode(A.abz(48,57)&0xFFFF);return AAJ;
},Abf:function(Ek){var Ay1=0;if(Ek===1)Ek=0;var Bcs=this.Agr.Avg(Ek);if(Bcs>=0)Ay1=
this.Afn.Get(Bcs);return Ay1;},ACT:function(Ek){var FP=0;var ABj=this.Agr.Avg(Ek
);if(ABj>=0)FP=this.Afm.Get(ABj);return FP;},ACS:function(Ek){var FP=0;var ABj=this.
Agr.Avg(Ek);if(ABj>=0)FP=this.Afl.Get(ABj);return FP;},A6D:function(){var Be=this.
Mo();var UW=A._NewObject(C.AnimalTypeFilterCriterion,0);UW.Initialize(14,0,A._GetAutoObject(
C.Device).ACu,true);Be.CW(UW);return Be;},AQY:function(J0){var BP=Math.trunc(J0/
1000000000000)|0;if(!BP)return 0;else if(BP>=900)return 1;else if(!A._GetAutoObject(
C.Converter).ANj(BP))return 2;else return 3;},A6Q:function(){var Be=A._GetAutoObject(
C.Helper).ACM();var AfF=A._GetAutoObject(C.Helper).A6y(3,A._GetAutoObject(C.Device
).AD0);AfF.YA=true;Be.CW(AfF);return Be;},A6y:function(D$,Bbx){var Av=A._NewObject(
C.UInt32FilterCriterion,0);Av.EF=4;switch(D$){case 2:{Av.Operator=3;Av.A5=A._GetAutoObject(
C.Helper).ZF(Bbx);}break;case 3:{Av.Operator=2;Av.A5=A._GetAutoObject(C.Helper).
ZF(Bbx-1);}break;default:A.ab5("%s%e",AVZ,D$);}return Av;},BiT:function(){return(((
A._GetAutoObject(C.Device).GetVersionMajor().toFixed()+Lu)+A._GetAutoObject(C.Device
).GetVersionMinor().toFixed())+Lu)+A._GetAutoObject(C.Device).GetVersionRev().toFixed(
);},BgV:function(Rl,EJ){var GO=0;switch(Rl){case 0:GO=EJ.VisualId;break;case 2:GO=
A._GetAutoObject(C.Helper).AnY(EJ.TransponderId);break;case 1:if(!A._GetAutoObject(
C.Device).EartagNrAssignmentMode)GO=A._GetAutoObject(C.Device).AjN;else switch(EJ.
Gender){case 0:GO=A._GetAutoObject(C.Device).AqQ;break;case 1:GO=A._GetAutoObject(
C.Device).AqP;break;case 2:GO=A._GetAutoObject(C.Device).AjN;break;default:throw new
Error(AHl+EJ.Gender.toFixed());}break;default:throw new Error(AV0+Rl.toFixed());
}return GO;},A$L:function(){var B;var IP=null;var Tc=0;if(!A._GetAutoObject(C.Device
).EartagNrAssignmentMode){IP=[B=A._GetAutoObject(C.Device),B.Anj,B.Aos];Tc=A._GetAutoObject(
C.Device).AuS;}else switch(A._GetAutoObject(C.Helper).W.Gender){case 1:{IP=[B=A.
_GetAutoObject(C.Device),B.Av4,B.Ayy];Tc=A._GetAutoObject(C.Device).ACm;}break;case
0:{IP=[B=A._GetAutoObject(C.Device),B.Av5,B.Ayz];Tc=A._GetAutoObject(C.Device).ACn;
}break;case 2:{IP=[B=A._GetAutoObject(C.Device),B.Anj,B.Aos];Tc=A._GetAutoObject(
C.Device).AuS;}break;default:;}if(!!IP)switch(Tc){case 1:IP[2].call(IP[0],A._GetAutoObject(
C.Helper).W.VisualId-1);break;case 0:IP[2].call(IP[0],A._GetAutoObject(C.Helper).
W.VisualId+1);break;default:;}},A7h:function(Xd,EJ){return(EJ.NaisId!==Xd)&&this.
AQV(Xd);},Bjm:function(Jb,EJ){return(EJ.TransponderId!==Jb)&&this.AQX(Jb);},AOu:
function(){var Be=A._GetAutoObject(C.Helper).A6O();var Az6=A._NewObject(C.UInt64FilterCriterion
,0);Az6.Initialize(35,5,0,true);Be.CW(Az6);return Be;},AOF:function(){var Be=A._GetAutoObject(
C.Helper).A6O();var Az6=A._NewObject(C.UInt64FilterCriterion,0);Az6.Initialize(35
,0,0,true);Be.CW(Az6);return Be;},L0:function(A0t,AhV){A0t.Aj(AhV);A0t.Ar(AhV);A0t.
Z(AhV);},ANc:function(AhX){var B;var Aa;var A2B=false;var Xj=AhX.TK(null,0x1);while(
!!Xj&&(((B=Xj)?B.__proto__:null)!==A.Core.Y)){Aa=(A.kR.Cm.isPrototypeOf(Xj)?Xj:null
);if(!!Aa){Aa.Bj(A2B);A2B=!A2B;}Xj=AhX.TK(Xj,0x1);}},Bn4:function(Jb){var Ah8=A.
_GetAutoObject(C.Device).Ao.Filter;A._GetAutoObject(C.Device).Ao.Bl(null);var A3J=
A._GetAutoObject(C.Device).Ao.AgJ(22,Jb);A._GetAutoObject(C.Device).Ao.SG(A3J,22
,0);A._GetAutoObject(C.Device).Ao.Bl(Ah8);},A6B:function(Atf){var Be=null;switch(
Atf){case 0:Be=this.BiE();break;case 1:Be=this.ACM();break;default:throw new Error(
Ax2+Atf.toFixed());}return Be;},BiE:function(){var Be=A._GetAutoObject(C.Helper).
Mo();var AfF=this.A6y(2,100);Be.CW(AfF);return Be;},BxS:function(Atf){var Ah8=A.
_GetAutoObject(C.Device).Ao.Filter;A._GetAutoObject(C.Device).Ao.Bl(this.A6B(Atf
));var P;for(P=0;P<A._GetAutoObject(C.Device).Ao.Cd();P++)A._GetAutoObject(C.Device
).Ao.MB(P,10,false);A._GetAutoObject(C.Device).Ao.Bl(Ah8);},BiF:function(Atf){var
Ah8=A._GetAutoObject(C.Device).Ao.Filter;A._GetAutoObject(C.Device).Ao.Bl(this.A6B(
Atf));var F$=A._GetAutoObject(C.Device).Ao.Cd();A._GetAutoObject(C.Device).Ao.Bl(
Ah8);return F$;},Ari:function(){return this.Uu;},A80:function(){return this.Aht;
},BkZ:function(){return this.AUd;},Bk0:function(){return this.AUe;},Bk3:function(
){return this.AGH;},_Init:function(aArg){C.AmD._Init.call(this,aArg);C.Animal._Init.
call(this.W={I:this},0);A.Core.Bu._Init.call(this.Au={I:this},0);A.acl.Ge._Init.
call(this.KD={I:this},0);A.acl.Ge._Init.call(this.SK={I:this},0);C.AMo._Init.call(
this.AdN={I:this},0);C.AUV._Init.call(this.UA={I:this},0);C.AUU._Init.call(this.
Uz={I:this},0);C.TC._Init.call(this.Aea={I:this},0);C.AVw._Init.call(this.Afm={I:
this},0);C.AVv._Init.call(this.Afl={I:this},0);C.AVu._Init.call(this.Afk={I:this
},0);C.AVy._Init.call(this.Afn={I:this},0);C.AMp._Init.call(this.Agr={I:this},0);
this.__proto__=C.HelperClass;var B;this.KD.HK(1);this.KD.Fj(3000);this.KD.B3=100;
this.SK.Awu(10);this.SK.Wt(5);this.SK.HK(1);this.SK.Fj(4000);this.Aea.B3=false;this.
Aea.Cw=true;this.Aea.HK(1);this.Aea.Fj(100);this.KD.Su=[this,this.BBG];this.KD.Q=[
this,this.Bk3,this.Bni];this.SK.Su=[this,this.BBI];this.SK.Q=[B=A._GetAutoObject(
C.Device),B.AEt,B.AIC];this.Aea.Q=[B=A._GetAutoObject(C.Device),B.AEu,B.AID];this.
Init(aArg);var Lv=this._variants();if(Lv){this.K={};Lv._Init.call(this,aArg);}},
_Done:function(){if(this.K)this.K._Done.call(this);this.__proto__=C.AmD;this.W._Done(
);this.Au._Done();this.KD._Done();this.SK._Done();this.AdN._Done();this.UA._Done(
);this.Uz._Done();this.Aea._Done();this.Afm._Done();this.Afl._Done();this.Afk._Done(
);this.Afn._Done();this.Agr._Done();C.AmD._Done.call(this);},_ReInit:function(){
C.AmD._ReInit.call(this);this.W._ReInit();this.Au._ReInit();this.KD._ReInit();this.
SK._ReInit();this.AdN._ReInit();this.UA._ReInit();this.Uz._ReInit();this.Aea._ReInit(
);this.Afm._ReInit();this.Afl._ReInit();this.Afk._ReInit();this.Afn._ReInit();this.
Agr._ReInit();if(this.K)this.K._ReInit.call(this);},_Mark:function(D){var B;C.AmD.
_Mark.call(this,D);if((B=this.Uu)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.
Aht)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.AUd)&&(B._cycle!=D))B._Mark(B.
_cycle=D);if((B=this.AUe)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.W)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.Au)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
KD)._cycle!=D)B._Mark(B._cycle=D);if((B=this.SK)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.AdN)._cycle!=D)B._Mark(B._cycle=D);if((B=this.UA)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Uz)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Aea)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Afm)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Afl)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.Afk)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
Afn)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Agr)._cycle!=D)B._Mark(B._cycle=D);
if(this.K)this.K._Mark(D);},_variants:function(){return A.acs.HelperClass._variants(
);},K:null,_className:"Device::HelperClass"};C.Helper={_Init:function(){C.HelperClass.
_Init.call(this,0);},_ReInit:function(){},_variants:function(){return this;},_this:
null};C.BoolFilterCriterion={A5:false,Aa_:function(){var Av=A._NewObject(C.BoolFilterCriterion
,0);Av.Fd(this);return Av;},Fd:function(AH){C.FilterCriterion.Fd.call(this,AH);var
Av=(C.BoolFilterCriterion.isPrototypeOf(AH)?AH:null);if(!!Av)this.A5=Av.A5;},Initialize:
function(A4,D$,A7,P8){this.EF=A4;this.Operator=D$;this.A5=A7;this.YA=P8;return this;
},_Init:function(aArg){C.FilterCriterion._Init.call(this,aArg);this.__proto__=C.
BoolFilterCriterion;},_className:"Device::BoolFilterCriterion"};C.UInt32FilterCriterion={
A5:0,Aa_:function(){var Av=A._NewObject(C.UInt32FilterCriterion,0);Av.Fd(this);return Av;
},Fd:function(AH){C.FilterCriterion.Fd.call(this,AH);var Av=(C.UInt32FilterCriterion.
isPrototypeOf(AH)?AH:null);if(!!Av)this.A5=Av.A5;},Initialize:function(A4,D$,A7,
P8){this.EF=A4;this.Operator=D$;this.A5=A7;this.YA=P8;return this;},_Init:function(
aArg){C.FilterCriterion._Init.call(this,aArg);this.__proto__=C.UInt32FilterCriterion;
},_className:"Device::UInt32FilterCriterion"};C.OverlayMenu={None:0,Home:1,AutoAction:
2,MenuItemSettings:3,RatingSettings:4,WeighingSettings:5,Options:6,AnimalSearch:
7,ActionSettings:8,MeasurementReady:9,AnimalMultiInfoMenu:10,AnimalSearchUnfiltered:
11,AnimalSearchDriedOff:12,MassRecordingMenu:13,MassRecordingDefaults:14,MassRecordingFields:
15,PurchasedAnimalsListMenu:16,BirthRegistrationsListMenu:17,LAST:18};C.EnumToString={
BO:function(A6){throw new Error(AsL+A6.toFixed());},Ls:function(A6){return this.
BO(A6);},_Init:function(aArg){this.__proto__=C.EnumToString;A.h7++;},_Done:function(
){this.__proto__=null;A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((
B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:
"Device::EnumToString"};C.ScreenTypeToString={BO:function(A6){var AJF=A6;var Bs;
switch(AJF){case 3:Bs=A.aaR(A.acf.Avm);break;case 34:Bs=A.aaR(A.acf.Tr);break;case
35:Bs=A.aaR(A.acf.Ts);break;case 47:Bs=A.aaR(A.acf.AOt);break;default:Bs=this.Bpr(
A6);}return Bs;},Bpr:function(A6){var AJF=A6;var Bs=A.jV;switch(AJF){case 0:Bs=AsM;
break;case 2:Bs=AV1;break;case 4:Bs=AV2;break;case 40:Bs=AV3;break;case 39:Bs=AV4;
break;case 72:Bs=AHm;break;case 73:Bs=AV5;break;case 93:Bs=AHn;break;case 94:Bs=
AHo;break;case 104:Bs=AHp;break;case 105:Bs=AV6;break;case 74:Bs=AHq;break;case 3:
Bs=AHr;break;case 6:Bs=AV7;break;case 16:Bs=Ri;break;case 22:Bs=W6;break;case 46:
Bs=AV8;break;case 100:Bs=AV9;break;case 99:Bs=AV_;break;case 101:Bs=AV$;break;case
17:Bs=AWa;break;case 23:Bs=AWb;break;case 18:Bs=AWc;break;case 19:Bs=AhN;break;case
38:Bs=AHs;break;case 87:Bs=AWd;break;case 1:Bs=AWe;break;case 5:Bs=AHt;break;case
7:Bs=AHu;break;case 92:Bs=Ax3;break;case 8:Bs=P5;break;case 9:Bs=AWf;break;case 41:
Bs=AWg;break;case 42:Bs=AWh;break;case 24:Bs=AsN;break;case 10:Bs=AWi;break;case
68:Bs=AWj;break;case 21:Bs=AWk;break;case 11:Bs=AWl;break;case 29:Bs=AWm;break;case
54:Bs=AWn;break;case 30:Bs=AsO;break;case 12:Bs=AWo;break;case 13:Bs=AWp;break;case
14:Bs=AWq;break;case 15:Bs=AWr;break;case 78:Bs=AWs;break;case 79:Bs=AWt;break;case
20:Bs=AWu;break;case 37:Bs=AWv;break;case 43:Bs=AWw;break;case 44:Bs=AWx;break;case
45:Bs=AHv;break;case 25:Bs=Ak5;break;case 75:Bs=AWy;break;case 67:Bs=AWz;break;case
66:Bs=AWA;break;case 64:Bs=Ax4;break;case 65:Bs=Ak6;break;case 77:Bs=AhO;break;case
76:Bs=Ax5;break;case 95:Bs=Aog;break;case 88:Bs=AhP;break;case 26:Bs=AWB;break;case
28:Bs=Ax6;break;case 27:Bs=AHw;break;case 31:Bs=Aft;break;case 89:Bs=AHx;break;case
34:Bs=Z7;break;case 35:Bs=Ak7;break;case 32:Bs=Aoh;break;case 50:Bs=AWC;break;case
55:Bs=AWD;break;case 63:Bs=AWE;break;case 62:Bs=AWF;break;case 33:Bs=AWG;break;case
36:Bs=AsP;break;case 56:Bs=AHy;break;case 86:Bs=AHz;break;case 57:Bs=AWH;break;case
47:Bs=AWI;break;case 49:Bs=AWJ;break;case 48:Bs=AWK;break;case 69:Bs=AWL;break;case
71:Bs=AWM;break;case 70:Bs=AWN;break;case 51:Bs=AWO;break;case 53:Bs=AWP;break;case
52:Bs=AWQ;break;case 96:Bs=AWR;break;case 98:Bs=Ax7;break;case 97:Bs=AHA;break;case
80:Bs=AHB;break;case 82:Bs=AHC;break;case 81:Bs=AHD;break;case 85:Bs=AHE;break;case
84:Bs=AHF;break;case 83:Bs=AWS;break;case 58:Bs=AWT;break;case 60:Bs=AWU;break;case
59:Bs=AWV;break;case 61:Bs=AWW;break;case 90:Bs=AWX;break;case 91:Bs=AWY;break;case
102:Bs=Ax8;break;case 103:Bs=AHG;break;default:throw new Error(AWZ+AJF.toFixed()
);}return Bs;},_Init:function(aArg){C.EnumToString._Init.call(this,aArg);this.__proto__=
C.ScreenTypeToString;},_className:"Device::ScreenTypeToString"};C.OverlayMenuToString={
BO:function(A6){var Bfg=A6;var On=A.jV;switch(Bfg){case 0:On=AHH;break;case 1:On=
AHr;break;case 8:On=AhQ;break;case 2:On=W7;break;case 3:On=AW0;break;case 4:On=Z8;
break;case 5:On=AW1;break;case 6:On=AW2;break;case 7:On=Aoi;break;case 11:On=Afu;
break;case 12:On=Ak8;break;case 9:On=AHI;break;case 10:On=AW3;break;case 14:On=O3;
break;case 15:On=AW4;break;case 13:On=AW5;break;case 16:On=AW6;break;case 17:On=
AW7;break;default:throw new Error(AHJ+Bfg.toFixed());}return On;},_Init:function(
aArg){C.EnumToString._Init.call(this,aArg);this.__proto__=C.OverlayMenuToString;
},_className:"Device::OverlayMenuToString"};C.ScanStateToString={BO:function(A6){
var BfR=A6;var Bq=A.jV;switch(BfR){case 4:Bq=AsQ;break;case 0:Bq=Ax9;break;case 2:
Bq=AW8;break;case 3:Bq=AW9;break;case 1:Bq=AHK;break;default:throw new Error(AHL+
BfR.toFixed());}return Bq;},_Init:function(aArg){C.EnumToString._Init.call(this,
aArg);this.__proto__=C.ScanStateToString;},_className:"Device::ScanStateToString"
};C.MeasureStateToString={BO:function(A6){var BdW=A6;var Bq=A.jV;switch(BdW){case
4:Bq=AsQ;break;case 0:Bq=Ax9;break;case 2:Bq=AW_;break;case 1:Bq=AHK;break;case 3:
Bq=AHM;break;default:throw new Error(AW$+BdW.toFixed());}return Bq;},_Init:function(
aArg){C.EnumToString._Init.call(this,aArg);this.__proto__=C.MeasureStateToString;
},_className:"Device::MeasureStateToString"};C.TemperatureUnit={Celsius:0,Fahrenheit:
1,LAST:2};C.TemperatureUnitToString={BO:function(A6){var Bgc=A6;var ApZ=A.jV;switch(
Bgc){case 0:ApZ=A.aaR(A.acf.BpK);break;case 1:ApZ=A.aaR(A.acf.BpL);break;default:
throw new Error(AHN+Bgc.toFixed());}return ApZ;},_Init:function(aArg){C.EnumToString.
_Init.call(this,aArg);this.__proto__=C.TemperatureUnitToString;},_className:"Device::TemperatureUnitToString"
};C.AnimalType={DairyCalf:0,DairyCow:1,SheepLamb:2,LAST:3};C.AnimalTypeToString={
BO:function(A6){var AKP=A6;var type=A.jV;switch(AKP){case 0:type=A.aaR(A.acf.Bhl
);break;case 1:type=A.aaR(A.acf.Bhy);break;case 2:type=A.aaR(A.acf.Bju);break;default:
throw new Error(AXa+AKP.toFixed());}return type;},_Init:function(aArg){C.EnumToString.
_Init.call(this,aArg);this.__proto__=C.AnimalTypeToString;},_className:"Device::AnimalTypeToString"
};C.Language={Default:0,German:1,Spanish:2,French:3,Italian:4,Finnish:5,Chinese_TW:
6,Turkish:7,Greek:8,Russian:9,Dutch:10,Czech:11,Estonian:12,Bulgarian:13,Bosnian:
14,Norwegian:15,Ukrainian:16,LAST:17};C.LanguageToString={BO:function(A6){var AzZ=
A6;var O_=A.jV;switch(AzZ){case 0:O_=AHO;break;case 10:O_=AHP;break;case 1:O_=Ax_;
break;case 12:O_=AXb;break;case 5:O_=AXc;break;case 3:O_=AXd;break;case 8:O_=AXe;
break;case 13:O_=AXf;break;case 4:O_=AXg;break;case 9:O_=AXh;break;case 2:O_=AXi;
break;case 7:O_=AsR;break;case 6:O_=AsS;break;case 11:O_=AHQ;break;case 14:O_=AXj;
break;case 15:O_=AXk;break;case 16:O_=AXl;break;default:throw new Error(AHR+AzZ.
toFixed());}return O_;},Ls:function(A6){var AzZ=A6;var Dl=A.jV;switch(AzZ){case 0:
Dl=AXm;break;case 10:Dl=W2;break;case 1:Dl=Rf;break;case 12:Dl=AXn;break;case 5:
Dl=UO;break;case 3:Dl=WW;break;case 8:Dl=AXo;break;case 13:Dl=WT;break;case 4:Dl=
WX;break;case 9:Dl=S4;break;case 2:Dl=Z3;break;case 7:Dl=Z5;break;case 6:Dl=AXp;
break;case 11:Dl=AXq;break;case 14:Dl=AXr;break;case 15:Dl=S3;break;case 16:Dl=JY;
break;default:throw new Error(AHR+AzZ.toFixed());}return Dl;},_Init:function(aArg
){C.EnumToString._Init.call(this,aArg);this.__proto__=C.LanguageToString;},_className:
"Device::LanguageToString"};C.Gender={Male:0,Female:1,Unknown:2,LAST:3};C.BirthType={
Single:0,Twins:1,Triplets:2,Quadruplets:3,LAST:4};C.GenderToString={BO:function(
A6){var AtE=A6;var AJX=A.jV;switch(AtE){case 0:AJX=A.aaR(A.acf.Male);break;case 1:
AJX=A.aaR(A.acf.Female);break;case 2:AJX=A.aaR(A.acf.Unknown);break;default:throw new
Error(AXs+AtE.toFixed());}return AJX;},_Init:function(aArg){C.EnumToString._Init.
call(this,aArg);this.__proto__=C.GenderToString;},_className:"Device::GenderToString"
};C.BirthTypeToString={BO:function(A6){var type=A6;var AfJ=A.jV;switch(type){case
0:AfJ=A.aaR(A.acf.BoF);break;case 1:AfJ=A.aaR(A.acf.BpG);break;case 2:AfJ=A.aaR(
A.acf.Triplets);break;case 3:AfJ=A.aaR(A.acf.Quadruplets);break;default:throw new
Error(AXt+type.toFixed());}return AfJ;},_Init:function(aArg){C.EnumToString._Init.
call(this,aArg);this.__proto__=C.BirthTypeToString;},_className:"Device::BirthTypeToString"
};C.SyncState={Idle:0,Init:1,Exporting:2,ImportStart:3,Importing:4,ImportFinish:
5,Ready:6,Error:7,LAST:8};C.SyncStateToString={BO:function(A6){var Bf8=A6;var Bq=
A.jV;switch(Bf8){case 7:Bq=AsQ;break;case 0:Bq=Ax9;break;case 6:Bq=AHM;break;case
2:Bq=AXu;break;case 5:Bq=AXv;break;case 3:Bq=AXw;break;case 4:Bq=AXx;break;case 1:
Bq=AXy;break;default:throw new Error(AXz+Bf8.toFixed());}return Bq;},_Init:function(
aArg){C.EnumToString._Init.call(this,aArg);this.__proto__=C.SyncStateToString;},
_className:"Device::SyncStateToString"};C.RatedAttributeToString={BO:function(A6
){var AAK=A6;switch(AAK){case 0:return A.jV;case 1:return A.aaR(A.acf.BnT);case 4:
return A.aaR(A.acf.BnS);case 3:return A.aaR(A.acf.BnU);case 2:return A.aaR(A.acf.
BnR);default:throw new Error(Ax$+AAK.toFixed());}},Ls:function(A6){var AAK=A6;switch(
AAK){case 0:return A.jV;case 1:return A.aaR(A.acf.Feed);case 4:return A.aaR(A.acf.
AF9);case 3:return A.aaR(A.acf.AF_);case 2:return A.aaR(A.acf.AF7);default:throw new
Error(Ax$+AAK.toFixed());}},_Init:function(aArg){C.EnumToString._Init.call(this,
aArg);this.__proto__=C.RatedAttributeToString;},_className:"Device::RatedAttributeToString"
};C.AssesmentToString={BO:function(A6){var Alj=A6;var Ay8=A.jV;switch(Alj){case 0:
case 5:Ay8=A.jV;break;case 3:Ay8=A.aaR(A.acj.BoL);break;case 2:Ay8=A.aaR(A.acj.BoN
);break;case 1:Ay8=A.aaR(A.acj.BoM);break;default:throw new Error(AHS+Alj.toFixed(
));}return Ay8;},_Init:function(aArg){C.EnumToString._Init.call(this,aArg);this.
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
7,ClosedWithNo:8,Opened:9};C.PopupContext={AFU:null,Aky:A.jV,AkS:0,PopupState:1,
Id:0,Show:false,Bm3:function(E){var B;if(this.PopupState===E)return;this.PopupState=
E;if(!!this.AFU)(B=this.AFU)?B[1].call(B[0],this):null;},_Init:function(aArg){this.
__proto__=C.PopupContext;A.h7++;},_Done:function(){this.__proto__=null;A.h7--;},
_ReInit:function(){},_Mark:function(D){var B;if((B=this.AFU)&&((B=B[0])._cycle!=
D))B._Mark(B._cycle=D);if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null
,_cycle:0,_observers:null,_className:"Device::PopupContext"};C.Boolean={No:0,Yes:
1,LAST:2};C.BooleanToYesNo={BO:function(A6){switch(A6){case 0:return A.aaR(A.acf.
No);case 1:return A.aaR(A.acf.Yes);default:return AsT+A6.toFixed();}},_Init:function(
aArg){C.EnumToString._Init.call(this,aArg);this.__proto__=C.BooleanToYesNo;},_className:
"Device::BooleanToYesNo"};C.AnimalGroupTableFields={Id:0,GroupName:1};C.AnimalGroup={
GroupName:AHh,Id:0,EH:function(Ad,AI){var Hz=C.Row.EH.call(this,Ad,AI);if(Hz&&!!
AI){this.OnSetId(AI.CE(Ad,0));this.AE2(AI.VL(Ad,1));}return Hz;},Co:function(AI){
var Hz=C.Row.Co.call(this,AI);if(Hz&&!!AI){var Jg=AI.Ox();if(Jg<=0)A.ab5("%s",W5
);else{if(this.AmY())this.CK=AI.Yx();AI.Hg(this.CK,0,this.Id);AI.Zx(this.CK,1,this.
GroupName);AI.Oz(Jg);}}return Hz;},Gj:function(){C.Row.Gj.call(this);this.OnSetId(-
1);},Hf:function(){C.Row.Hf.call(this);this.OnSetId(0);this.AE2(A.jV);},OnSetId:
function(E){if(this.Id===E)return;this.Id=E;A.abo([this,this.QW,this.OnSetId],0);
},AE2:function(E){if(this.GroupName===E)return;this.GroupName=E;A.abo([this,this.
BkE,this.AE2],0);},QW:function(){return this.Id;},BkE:function(){return this.GroupName;
},_Init:function(aArg){C.Row._Init.call(this,aArg);this.__proto__=C.AnimalGroup;
this.TableId=3;},_className:"Device::AnimalGroup"};C.PopupIdToString={BO:function(
A6){var Adr=A6;var Ax=A.jV;var AJD;AJD=A.aaR(A.acf.Bp4)+O2;switch(Adr){case 0:Ax=
A.aaR(A.acf.Unknown);break;case 1:Ax=A.aaR(A.acf.SevereError);break;case 58:Ax=A.
aaR(A.acf.Bh$);break;case 2:Ax=A.aaR(A.acf.Bh9);break;case 3:Ax=A.aaR(A.acf.BpQ);
break;case 77:Ax=A._GetAutoObject(C.Helper).Bin();break;case 78:Ax=A._GetAutoObject(
C.Helper).Bil();break;case 79:Ax=A._GetAutoObject(C.Helper).Bim();break;case 9:Ax=
A.aaR(A.acf.Bqg);break;case 5:Ax=A.aaR(A.acf.SuccessDataSync);break;case 8:Ax=A.
aaR(A.acf.SuccessResetFactorySettings);break;case 34:Ax=A.aaR(A.acf.SuccessResetAnimalData
);break;case 10:Ax=A._GetAutoObject(C.Device).ACQ();break;case 82:Ax=A.aaR(A.acf.
Bib);break;case 83:Ax=A.aaR(A.acf.Bic);break;case 80:Ax=A.aaR(A.acf.BoX);break;case
81:Ax=A.aaR(A.acf.SuccessRestoreBackup);break;case 91:Ax=A.aaR(A.acf.Bg$);break;
case 92:Ax=A.aaR(A.acf.Bn7);break;case 4:Ax=A.aaR(A.acf.WarningDataSync);break;case
7:Ax=A.aaR(A.acf.Bqe);break;case 33:Ax=A.aaR(A.acf.WarningResetAnimalData);break;
case 6:Ax=A.aaR(A.acf.WarningRestart);break;case 27:Ax=A.aaR(A.acf.WarningNoActionDefined
);break;case 64:Ax=A.aaR(A.acf.WarningActionNotApplicable);break;case 28:Ax=A.aaR(
A.acf.WarningNoMenuItemVisible);break;case 29:Ax=A.aaR(A.acf.WarningEnterPresentationMode
);break;case 30:Ax=A.aaR(A.acf.WarningNoAnimalsRegistered);break;case 41:Ax=((AJD+
A.aaR(A.acf.ARq))+O2)+A.aaR(A.acf.BjI);break;case 50:Ax=((AJD+A.aaR(A.acf.ARq))+
O2)+A.aaR(A.acf.BjK);break;case 51:Ax=((AJD+A.aaR(A.acf.ARq))+O2)+A.aaR(A.acf.BjJ
);break;case 42:Ax=A.aaR(A.acf.Bqc);break;case 45:Ax=A.aaR(A.acf.Bp8);break;case
46:Ax=A.aaR(A.acf.WarningNoValidCountryCode);break;case 57:Ax=A.aaR(A.acf.WarningOutdatedAnimalWeight
);break;case 52:Ax=A.aaR(A.acf.WarningOutdatedAnimalWeights);break;case 53:Ax=A.
aaR(A.acf.WarningWeightEvaluationSingular);break;case 56:Ax=A.aaR(A.acf.WarningWeightEvaluationPlural
);break;case 11:Ax=A.aaR(A.acf.ScanError);break;case 12:Ax=A.aaR(A.acf.ScanNotFound
);break;case 13:Ax=A.aaR(A.acf.Bg3);break;case 36:Ax=A.aaR(A.acf.Bpz);break;case
14:Ax=A.aaR(A.acf.AnimalNotFound);break;case 15:Ax=A.aaR(A.acf.SuccessUnregister
);break;case 35:Ax=A.aaR(A.acf.SuccessUnregisterPerished);break;case 26:Ax=A.aaR(
A.acf.SuccessCreationNewAnimal);break;case 23:Ax=A.aaR(A.acf.SuccessCreationNewAnimals
);break;case 24:Ax=A.aaR(A.acf.BhB);break;case 49:Ax=A.aaR(A.acf.EvaluationInProgress
);break;case 16:Ax=A.aaR(A.acf.BhH);break;case 17:Ax=A.aaR(A.acf.BoP);break;case
18:Ax=A.aaR(A.acf.Bo3);break;case 19:Ax=A.aaR(A.acf.BoQ);break;case 20:Ax=A.aaR(
A.acf.Bo4);break;case 54:Ax=A.aaR(A.acf.BoY);break;case 55:Ax=A.aaR(A.acf.Bo1);break;
case 21:Ax=A.aaR(A.acf.A$P);break;case 48:Ax=(A.aaR(A.acf.A$P)+O2)+A.aaR(A.acf.A5C
);break;case 22:Ax=A.aaR(A.acf.Bp_);break;case 63:Ax=A.aaR(A.acf.Bp$);break;case
85:Ax=A.aaR(A.acf.Bqb);break;case 43:Ax=A.aaR(A.acf.Bqa);break;case 25:Ax=A.aaR(
A.acf.A$A);break;case 47:Ax=(A.aaR(A.acf.A$A)+O2)+A.aaR(A.acf.A5C);break;case 107:
Ax=A.aaR(A.acf.BpM);break;case 31:{var Bzm=(((((((((((((((((((A.aaR(A.acf.Bhs)+Ax1
)+A.aaR(A.acf.ANe))+A.aaR(A.acf.Colon))+Oa)+A.aaR(A.acf.Bhu))+O2)+A.aaR(A.acf.AOi
))+A.aaR(A.acf.Colon))+Oa)+A.aaR(A.acf.Bih))+O2)+A.aaR(A.acf.ATZ))+A.aaR(A.acf.Colon
))+Oa)+A.aaR(A.acf.BnW))+O2)+A.aaR(A.acf.ATY))+A.aaR(A.acf.Colon))+Oa)+A.aaR(A.acf.
BnV);Ax=Bzm;}break;case 32:Ax=A.aaR(A.acf.BpA);break;case 69:Ax=A.aaR(A.acf.BjV);
break;case 44:Ax=A.aaR(A.acf.Bqf);break;case 37:Ax=A.aaR(A.acf.WarningResetWeightSettings
);break;case 38:Ax=A.aaR(A.acf.WarningResetTempThresholds);break;case 39:Ax=A.aaR(
A.acf.BnM);break;case 76:Ax=(A.aaR(A.acf.A5f)+O2)+A.aaR(A.acf.AT1);break;case 40:
Ax=A.aaR(A.acf.BoZ);break;case 75:Ax=A.aaR(A.acf.BoR);break;case 59:Ax=A.aaR(A.acf.
QuestionAddAnotherCalfMultiples);break;case 62:Ax=A.aaR(A.acf.BoT);break;case 96:
Ax=A.aaR(A.acf.BoU);break;case 60:Ax=A.aaR(A.acf.BoV);break;case 98:Ax=A.aaR(A.acf.
BoW);break;case 61:Ax=A.aaR(A.acf.Bo5);break;case 104:Ax=A.aaR(A.acf.Bo6);break;
case 65:Ax=A.aaR(A.acf.SuccessClearAnimalLoss);break;case 66:Ax=A.aaR(A.acf.WarningNoActionsForAnimalLoss
);break;case 67:Ax=A.aaR(A.acf.SuccessLinkTransponder);break;case 106:Ax=A.aaR(A.
acf.BoS);break;case 86:Ax=A.aaR(A.acf.SuccessUnlinkTransponder);break;case 68:Ax=
A.aaR(A.acf.Bo0);break;case 70:Ax=A.aaR(A.acf.Bid);break;case 71:Ax=A.aaR(A.acf.
Bo9);break;case 72:Ax=A.aaR(A.acf.Bo_);break;case 97:Ax=A.aaR(A.acf.Bif);break;case
100:Ax=A.aaR(A.acf.Bo$);break;case 99:Ax=A.aaR(A.acf.Bpa);break;case 88:Ax=A.aaR(
A.acf.Bie);break;case 89:Ax=A.aaR(A.acf.Bo7);break;case 90:Ax=A.aaR(A.acf.Bo8);break;
case 73:Ax=A.aaR(A.acf.WarningNoPremisesID);break;case 74:Ax=A.aaR(A.acf.WarningNoFlashDrivePresent
);break;case 94:Ax=A.aaR(A.acf.WarningNoBackupPathPresent);break;case 93:Ax=A.aaR(
A.acf.WarningNoBackupFilePresent);break;case 84:Ax=A.aaR(A.acf.Biu);break;case 87:
Ax=A.aaR(A.acf.Bqi);break;case 95:Ax=A.aaR(A.acf.Bp7);break;case 108:Ax=A.aaR(A.
acf.Bp9);break;case 109:Ax=A.aaR(A.acf.SuccessMassDeregistration);break;case 102:
Ax=A.aaR(A.acf.WarningParsedDateInFutureInvalid);break;case 101:Ax=A.aaR(A.acf.WarningParsingDateFailed
);break;case 103:Ax=A.aaR(A.acf.WarningParsingNaisIdFailed);break;case 105:Ax=A.
aaR(A.acf.Bqd);break;default:throw new Error(Aya+Adr.toFixed());}return Ax;},Ls:
function(A6){var Adr=A6;var Ax=A.jV;switch(Adr){case 0:Ax=Ayb;break;case 1:Ax=Ayc;
break;case 58:Ax=AHT;break;case 2:Ax=AXA;break;case 3:Ax=AHU;break;case 77:Ax=AXB;
break;case 78:Ax=AHV;break;case 79:Ax=AXC;break;case 9:Ax=AXD;break;case 5:Ax=AXE;
break;case 8:Ax=AXF;break;case 34:Ax=AXG;break;case 80:Ax=AXH;break;case 81:Ax=AXI;
break;case 91:Ax=AXJ;break;case 92:Ax=AXK;break;case 82:Ax=AXL;break;case 83:Ax=
AXM;break;case 10:Ax=AXN;break;case 4:Ax=Ayd;break;case 7:Ax=AXO;break;case 33:Ax=
AXP;break;case 6:Ax=Aye;break;case 27:Ax=AsU;break;case 64:Ax=US;break;case 28:Ax=
AsV;break;case 29:Ax=AXQ;break;case 30:Ax=AXR;break;case 41:Ax=AXS;break;case 50:
Ax=AHW;break;case 51:Ax=AXT;break;case 42:Ax=AHX;break;case 45:Ax=AXU;break;case
46:Ax=AXV;break;case 57:Ax=AXW;break;case 52:Ax=AsW;break;case 53:Ax=AXX;break;case
56:Ax=AXY;break;case 11:Ax=AHY;break;case 12:Ax=AXZ;break;case 13:Ax=AX0;break;case
36:Ax=AX1;break;case 14:Ax=AX2;break;case 15:Ax=AcG;break;case 35:Ax=AX3;break;case
26:Ax=AX4;break;case 23:Ax=AX5;break;case 24:Ax=AX6;break;case 49:Ax=AHZ;break;case
16:Ax=AX7;break;case 17:Ax=AX8;break;case 18:Ax=AX9;break;case 19:Ax=AX_;break;case
20:Ax=AX$;break;case 54:Ax=AYa;break;case 55:Ax=AH0;break;case 21:Ax=AYb;break;case
48:Ax=AYc;break;case 22:Ax=AYd;break;case 63:Ax=AH1;break;case 43:Ax=AH2;break;case
85:Ax=AYe;break;case 25:Ax=AYf;break;case 47:Ax=AYg;break;case 107:Ax=AYh;break;
case 31:Ax=Rj;break;case 32:Ax=AsX;break;case 69:Ax=AH3;break;case 44:Ax=AH4;break;
case 37:Ax=Aoj;break;case 38:Ax=Aok;break;case 39:Ax=Ayf;break;case 76:Ax=AYi;break;
case 40:Ax=AH5;break;case 75:Ax=AYj;break;case 59:Ax=AYk;break;case 62:Ax=AYl;break;
case 96:Ax=AYm;break;case 60:Ax=AYn;break;case 98:Ax=AYo;break;case 65:Ax=AYp;break;
case 61:Ax=AYq;break;case 104:Ax=AYr;break;case 66:Ax=AYs;break;case 67:Ax=AYt;break;
case 106:Ax=AYu;break;case 86:Ax=AYv;break;case 68:Ax=AYw;break;case 70:Ax=AYx;break;
case 71:Ax=AYy;break;case 72:Ax=AYz;break;case 97:Ax=Aol;break;case 100:Ax=AH6;break;
case 99:Ax=AYA;break;case 88:Ax=AH7;break;case 89:Ax=AH8;break;case 90:Ax=Z9;break;
case 73:Ax=AH9;break;case 74:Ax=AYB;break;case 94:Ax=AH_;break;case 93:Ax=AYC;break;
case 84:Ax=Ayg;break;case 87:Ax=AYD;break;case 95:Ax=AYE;break;case 108:Ax=Ayh;break;
case 109:Ax=AYF;break;case 102:Ax=AYG;break;case 101:Ax=AYH;break;case 103:Ax=AH$;
break;case 105:Ax=Aom;break;default:throw new Error(Aya+Adr.toFixed());}return Ax;
},_Init:function(aArg){C.EnumToString._Init.call(this,aArg);this.__proto__=C.PopupIdToString;
},_className:"Device::PopupIdToString"};C.PopupParamSeparator=";";C.RatingMode={
Basic:0,Extended:1,LAST:2};C.TransponderType={UNDEFINED:0,AnimalId:1,FarmId:2,GroupId:
3,PersonId:4,LAST:5};C.TransponderProtocol={UNDEFINED:0,FDX:1,HDX:2,HDX_URBAN:3,
LAST:4};C.TransponderTypeToString={BO:function(A6){var Bgo=A6;var type=A.jV;switch(
Bgo){case 1:type=AIa;break;case 2:type=AYI;break;case 3:type=AIb;break;case 4:type=
AIc;break;case 0:type=AsM;break;default:throw new Error(Ak9+Bgo.toFixed());}return type;
},_Init:function(aArg){C.EnumToString._Init.call(this,aArg);this.__proto__=C.TransponderTypeToString;
},_className:"Device::TransponderTypeToString"};C.TransponderProtocolToString={BO:
function(A6){var Bgm=A6;var AAH=A.jV;switch(Bgm){case 1:AAH=AYJ;break;case 2:AAH=
Aon;break;case 3:AAH=AYK;break;case 0:AAH=AsM;break;default:throw new Error(AId+
Bgm.toFixed());}return AAH;},_Init:function(aArg){C.EnumToString._Init.call(this
,aArg);this.__proto__=C.TransponderProtocolToString;},_className:"Device::TransponderProtocolToString"
};C.Transponder={Id:0,TransponderProtocol:0,TransponderType:0,ATr:function(E){if(
this.TransponderType===E)return;this.TransponderType=E;A.abo([this,this.Bld,this.
ATr],0);},ATq:function(E){if(this.TransponderProtocol===E)return;this.TransponderProtocol=
E;A.abo([this,this.Blc,this.ATq],0);},OnSetId:function(E){if(this.Id===E)return;
this.Id=E;A.abo([this,this.QW,this.OnSetId],0);},AOH:function(){return A._GetAutoObject(
C.Converter).Bpy(this.Id);},BiC:function(){return A._GetAutoObject(C.Converter).
AxD(this.Id);},Bld:function(){return this.TransponderType;},Blc:function(){return this.
TransponderProtocol;},QW:function(){return this.Id;},_Init:function(aArg){this.__proto__=
C.Transponder;A.h7++;},_Done:function(){this.__proto__=null;A.h7--;},_ReInit:function(
){},_Mark:function(D){var B;if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:
null,_cycle:0,_observers:null,_className:"Device::Transponder"};C.RatingModeToString={
BO:function(A6){var U7=A6;var Nq=A.jV;switch(U7){case 0:Nq=A.aaR(A.acf.Basic);break;
case 1:Nq=A.aaR(A.acf.Extended);break;default:throw new Error(AIe+U7.toFixed());
}return Nq;},_Init:function(aArg){C.EnumToString._Init.call(this,aArg);this.__proto__=
C.RatingModeToString;},_className:"Device::RatingModeToString"};C.TableRowsCount={
_Init:function(aArg){this.__proto__=C.TableRowsCount;A.h7++;},_Done:function(){this.
__proto__=null;A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((B=this.
I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:
"Device::TableRowsCount"};C.MassUnit={Kilogramm:0,Pound:1,LAST:2};C.MassUnitToString={
BO:function(A6){var BdS=A6;var ApZ=A.jV;switch(BdS){case 0:ApZ=A.aaR(A.acf.Bjs);
break;case 1:ApZ=A.aaR(A.acf.Pound);break;default:throw new Error(AYL+BdS.toFixed(
));}return ApZ;},_Init:function(aArg){C.EnumToString._Init.call(this,aArg);this.
__proto__=C.MassUnitToString;},_className:"Device::MassUnitToString"};C.MinWeightGain=
20;C.MaxWeightGain=2000;C.WeightGainStep=10;C.Int32ArrayWrapper={MC:10,Array:A.abi(
10,0,null),Zn:function(E){if(this.MC===E)return;if(E>10)throw new Error(AYM);this.
MC=E;},Set:function(aIndex,AK){if((aIndex<0)||(aIndex>=this.MC))throw new Error(
Ayi);this.Array.Set(aIndex,AK);},Get:function(aIndex){if((aIndex<0)||(aIndex>=this.
MC))throw new Error(Ayi);return this.Array.Get(aIndex);},AmN:function(){var Qp=0;
var P;for(P=0;P<this.MC;P=P+1)Qp=Qp+this.Get(P);return Qp;},toString:function(){
var A2z=this.Array.Get(0).toFixed();var P;for(P=1;P<this.MC;P=P+1)A2z=(A2z+O1)+this.
Array.Get(P).toFixed();return A2z;},EH:function(aString){var Hv=aString.indexOf(
String.fromCharCode(0x2C),0);var A1o=A.jV;var P=0;while(P<10){if(aString===A.jV)
this.Array.Set(P,0);else{if(Hv===-1){A1o=aString;aString=A.jV;}else{A1o=A.abV(aString
,Hv);aString=A.ab1(aString,0,Hv+1);}this.Array.Set(P,A.wz(A1o,0,10));Hv=aString.
indexOf(String.fromCharCode(0x2C),0);}P=P+1;}if(aString!==A.jV)A.ab5("%s",AYN);}
,Co:function(){},Hf:function(){var P;for(P=0;P<this.MC;P=P+1)this.Set(P,0);},Avg:
function(A7){var P=0;while(P<this.MC){if(this.Array.Get(P)===A7)return P;P=P+1;}
return-1;},Hp:function(){var P=0;var max=-1;while(P<this.MC){if(this.Array.Get(P
)>max)max=this.Array.Get(P);P=P+1;}return max;},_Init:function(aArg){(this.Array=[
]).__proto__=C.Int32ArrayWrapper.Array;this.__proto__=C.Int32ArrayWrapper;A.h7++;
},_Done:function(){this.__proto__=null;A.h7--;},_ReInit:function(){},_Mark:function(
D){var B;if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:
null,_className:"Device::Int32ArrayWrapper"};C.ActionToString={BO:function(A6){var
Azs=A6;var E1=A.jV;switch(Azs){case 4:E1=A.aaR(A.acf.Alarm);break;case 256:E1=A.
aaR(A.acf.Weighing);break;case 128:E1=A.aaR(A.acf.A6c);break;case 16:E1=A.aaR(A.
acf.AL7);break;case 1:E1=A.aaR(A.acf.Temperature);break;case 32:E1=A.aaR(A.acf.AnimalLoss
);break;case 2:E1=A.aaR(A.acf.Rating);break;case 8:E1=A.aaR(A.acf.ArY);break;case
64:E1=A.aaR(A.acf.Unregister);break;case 512:E1=A.aaR(A.acf.ARK);break;case 1024:
E1=A.aaR(A.acf.LinkTransponder);break;case 262144:E1=A.aaR(A.acf.UnlinkTransponder
);break;case 2048:E1=A.aaR(A.acf.Tr);break;case 4096:E1=A.aaR(A.acf.Calving);break;
case 8192:E1=A.aaR(A.acf.DryOff);break;case 16384:E1=A.aaR(A.acf.A7q);break;case
32768:E1=A.aaR(A.acf.ABW);break;case 524288:E1=A.aaR(A.acf.ABY);break;case 65536:
E1=A.aaR(A.acf.Delete);break;case 131072:E1=A.aaR(A.acf.A7r);break;case 0:E1=A.aaR(
A.acf.A7P);break;default:throw new Error(AIf+Azs.toFixed());}return E1;},Ls:function(
A6){var Azs=A6;var E1=A.jV;switch(Azs){case 4:E1=A.aaR(A.acf.Alarm);break;case 256:
E1=A.aaR(A.acf.Weighing);break;case 128:E1=A.aaR(A.acf.A6c);break;case 16:E1=A.aaR(
A.acf.AL7);break;case 1:E1=A.aaR(A.acf.Temperature);break;case 32:E1=A.aaR(A.acf.
AnimalLoss);break;case 2:E1=A.aaR(A.acf.Rating);break;case 8:E1=A.aaR(A.acf.ArY);
break;case 64:E1=A.aaR(A.acf.Unregister);break;case 512:E1=A.aaR(A.acf.ARK);break;
case 1024:E1=A.aaR(A.acf.LinkTransponder);break;case 262144:E1=A.aaR(A.acf.UnlinkTransponder
);break;case 2048:E1=A.aaR(A.acf.Tr);break;case 4096:E1=A.aaR(A.acf.Calving);break;
case 8192:E1=A.aaR(A.acf.DryOff);break;case 32768:E1=A.aaR(A.acf.ABW);break;case
524288:E1=A.aaR(A.acf.ABY);break;case 65536:E1=A.aaR(A.acf.Delete);break;case 16384:
case 131072:E1=A.aaR(A.acf.BjA);break;case 0:E1=A.aaR(A.acf.A7P);break;default:throw new
Error(AIf+Azs.toFixed());}return E1;},_Init:function(aArg){C.EnumToString._Init.
call(this,aArg);this.__proto__=C.ActionToString;},_className:"Device::ActionToString"
};C.ACTIONS_COUNT=19;C.PopupTimeout=2000;C.ITable={Filter:null,Id:2,CE:function(
Ad,A4){return 0;},VL:function(Ad,A4){return A.jV;},Akd:function(G){A.we(this,0);
A.pe([this,this.D3],this);},HZ:function(Ad,A4){return false;},HD:function(Ad,A4){
return this.Se(Ad,A4);},OnSetId:function(E){if(this.Id===E)return;this.Id=E;},Cd:
function(){return 0;},Bl:function(E){if(this.Filter===E)return;this.Filter=E;A.abo([
this,this.Fh,this.Fl],0);},Fl:function(Aq){this.Bl(Aq);},IY:function(Ad,A4){var BAV=
this.VM(Ad,A4);return A._GetAutoObject(C.Converter).A$D(BAV);},VM:function(Ad,A4
){return 0;},Se:function(Ad,A4){return 0;},A6N:function(Ad,A4){return this.CE(Ad
,A4);},Ox:function(){var Jg=0;var BBH=this.Id;return Jg;},Oz:function(AoG){var Hz=
0;var BBH=this.Id;return Hz===1;},Yx:function(){return-1;},Zz:function(Ad,A4,C1){
return false;},Hg:function(Ad,A4,C1){return false;},Zy:function(Ad,A4,C1){return false;
},MB:function(Ad,A4,C1){return false;},Zx:function(Ad,A4,C1){return false;},Ace:
function(Ad,A4,C1){return this.Zy(Ad,A4,C1);},AkH:function(Ad,A4,C1){var BAW=A._GetAutoObject(
C.Converter).AdO(C1);return this.Zz(Ad,A4,BAW);},A$f:function(Ad,A4,C1){return this.
Hg(Ad,A4,C1);},AOA:function(Ad,A4){return this.CE(Ad,A4);},BiA:function(Ad,A4){return this.
CE(Ad,A4);},Bop:function(Ad,A4,C1){return this.Hg(Ad,A4,C1);},Bol:function(Ad,A4
,C1){return this.Hg(Ad,A4,C1);},Lb:function(aColumn,A7){return-1;},AmL:function(
Ad,A4){return this.CE(Ad,A4);},Boj:function(Ad,A4,C1){return this.Hg(Ad,A4,C1);}
,ACO:function(Ad,A4){return this.CE(Ad,A4);},AUk:function(Ad,A4,MK){return this.
Hg(Ad,A4,MK);},D3:function(G){this.Bx1();},Bx1:function(){return-1;},KL:function(
Ad,A4){return 0;},SG:function(Ad,A4,C1){return false;},AgJ:function(aColumn,A7){
return-1;},Hf:function(){return false;},BiB:function(Ad,A4){var BAX=this.CE(Ad,A4
);return A._GetAutoObject(C.Converter).Bi2(BAX);},BiG:function(Ad,A4){return this.
CE(Ad,A4);},AOJ:function(Ad,A4){return this.CE(Ad,A4);},Bon:function(Ad,A4,C1){var
BAY=A._GetAutoObject(C.Converter).A5m(C1);return this.Hg(Ad,A4,BAY);},Boo:function(
Ad,A4,C1){return this.Hg(Ad,A4,C1);},Bov:function(Ad,A4,C1){return this.Hg(Ad,A4
,C1);},AjC:function(aColumn,A7){return false;},Ad_:function(aColumn,A7){return false;
},BiP:function(Ad,A4){return this.CE(Ad,A4);},Bot:function(Ad,A4,C1){return this.
Hg(Ad,A4,C1);},Lg:function(){return this.QC()>=this.HF();},HF:function(){return 0;
},Abg:function(){return-1;},QC:function(){return 0;},Fh:function(){return this.Filter;
},_Init:function(aArg){this.__proto__=C.ITable;A.h7++;},_Done:function(){this.__proto__=
null;A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((B=this.Filter)&&(
B._cycle!=D))B._Mark(B._cycle=D);if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D
);},I:null,_cycle:0,_observers:null,_className:"Device::ITable"};C.MaxAutoActionsCount=
4;C.WeightRecordingMode={Automatic:0,Manual:1,LAST:2};C.WeightRecordingModeToString={
BO:function(A6){var U7=A6;var Nq=A.jV;switch(U7){case 0:Nq=A.aaR(A.acf.Automatic
);break;case 1:Nq=A.aaR(A.acf.Manual);break;default:throw new Error(AYO+U7.toFixed(
));}return Nq;},_Init:function(aArg){C.EnumToString._Init.call(this,aArg);this.__proto__=
C.WeightRecordingModeToString;},_className:"Device::WeightRecordingModeToString"
};C.BooleanToAutoOnOff={BO:function(A6){switch(A6){case 0:return A.aaR(A.acf.Off
);case 1:return A.aaR(A.acf.AaR);default:return AsT+A6.toFixed();}},_Init:function(
aArg){C.EnumToString._Init.call(this,aArg);this.__proto__=C.BooleanToAutoOnOff;}
,_className:"Device::BooleanToAutoOnOff"};C.WeightStep=100;C.WeightRecordingScope={
CurrentWeightOnly:0,BirthWeightOnly:1,BirthAndCurrentWeight:2,NoWeightRecording:
3,LAST:4};C.WeightRecordingScopeToString={BO:function(A6){var BfS=A6;var AAV=A.jV;
switch(BfS){case 0:AAV=A.aaR(A.acf.BhD);break;case 1:AAV=A.aaR(A.acf.Bhh);break;
case 2:AAV=A.aaR(A.acf.Bhd);break;case 3:AAV=A.aaR(A.acf.Bj2);break;default:throw new
Error(AYP+BfS.toFixed());}return AAV;},_Init:function(aArg){C.EnumToString._Init.
call(this,aArg);this.__proto__=C.WeightRecordingScopeToString;},_className:"Device::WeightRecordingScopeToString"
};C.BodyTemperature={Undertemperature:0,Normal:1,Elevated:2,Fever:3,LAST:4};C.JE={
XI:0,Temperature:1,Rating:2,Afj:3,BCj:4,BCZ:5,BFH:6,BDC:7,BEr:8,BDa:9,BEp:10,BER:
11,BES:12,BFM:13,LAST:14};C.AnimalListContentToString={BO:function(A6){var Bci=A6;
var S9=A.jV;switch(Bci){case 0:S9=AYQ;break;case 2:S9=AYR;break;case 1:S9=AYS;break;
case 3:S9=AYT;break;case 4:S9=AYU;break;case 5:S9=AYV;break;case 6:S9=AYW;break;
case 7:S9=AYX;break;case 8:S9=AYY;break;case 9:S9=AYZ;break;case 10:S9=AIg;break;
case 11:S9=Z_;break;case 12:S9=AY0;break;case 13:S9=Ayj;break;default:throw new Error(
AY1+Bci.toFixed());}return S9;},_Init:function(aArg){C.EnumToString._Init.call(this
,aArg);this.__proto__=C.AnimalListContentToString;},_className:"Device::AnimalListContentToString"
};C.GenderFilterCriterion={A5:0,Aa_:function(){var Av=A._NewObject(C.GenderFilterCriterion
,0);Av.Fd(this);return Av;},Fd:function(AH){C.FilterCriterion.Fd.call(this,AH);var
Av=(C.GenderFilterCriterion.isPrototypeOf(AH)?AH:null);if(!!Av)this.A5=Av.A5;},_Init:
function(aArg){C.FilterCriterion._Init.call(this,aArg);this.__proto__=C.GenderFilterCriterion;
},_className:"Device::GenderFilterCriterion"};C.AnimalTypeFilterCriterion={A5:0,
Aa_:function(){var Av=A._NewObject(C.AnimalTypeFilterCriterion,0);Av.Fd(this);return Av;
},Fd:function(AH){C.FilterCriterion.Fd.call(this,AH);var Av=(C.AnimalTypeFilterCriterion.
isPrototypeOf(AH)?AH:null);if(!!Av)this.A5=Av.A5;},Initialize:function(A4,D$,A7,
P8){this.EF=A4;this.Operator=D$;this.A5=A7;this.YA=P8;return this;},_Init:function(
aArg){C.FilterCriterion._Init.call(this,aArg);this.__proto__=C.AnimalTypeFilterCriterion;
},_className:"Device::AnimalTypeFilterCriterion"};C.BCv={Aup:0,BCu:1,BEb:2,A_X:3
,A5u:4,BFq:5,BCY:6,BFp:7,LinkTransponder:8,Tr:9,Weighing:10,Calving:11,LinkNaisId:
12,BEQ:13,ClearBirthNoticePending:14,DeleteAnimal:15,ScanNaisId:16,Edit:17,ClearPurchaseNoticePending:
18};C.AutoRegistrationModeToString={BO:function(A6){var U7=A6;var Nq=A.jV;switch(
U7){case 0:Nq=A.aaR(A.acf.Bhv);break;case 1:Nq=A.aaR(A.acf.Bi6);break;case 2:Nq=
A.aaR(A.acf.Off);break;default:throw new Error(AY2+U7.toFixed());}return Nq;},_Init:
function(aArg){C.EnumToString._Init.call(this,aArg);this.__proto__=C.AutoRegistrationModeToString;
},_className:"Device::AutoRegistrationModeToString"};C.AutoRegistrationMode={UserConfirmed:
0,Background:1,Off:2,LAST:3};C.AssessmentFilterCriterion={A5:0,Aa_:function(){var
Av=A._NewObject(C.AssessmentFilterCriterion,0);Av.Fd(this);return Av;},Fd:function(
AH){C.FilterCriterion.Fd.call(this,AH);var Av=(C.AssessmentFilterCriterion.isPrototypeOf(
AH)?AH:null);if(!!Av)this.A5=Av.A5;},Initialize:function(A4,D$,A7,P8){this.EF=A4;
this.Operator=D$;this.A5=A7;this.YA=P8;return this;},_Init:function(aArg){C.FilterCriterion.
_Init.call(this,aArg);this.__proto__=C.AssessmentFilterCriterion;},_className:"Device::AssessmentFilterCriterion"
};C.D7={XI:0,Temperature:1,Afj:2,Rating:3,LAST:4};C.FactoryResetScope={DeviceAndAnimalData:
0,AnimalDataOnly:1,LAST:2};C.FactoryResetScopeToString={BO:function(A6){switch(A6
){case 0:return A.aaR(A.acf.DeviceAndAnimalData);case 1:return A.aaR(A.acf.AnimalDataOnly
);default:return AY3+A6.toFixed();}},_Init:function(aArg){C.EnumToString._Init.call(
this,aArg);this.__proto__=C.FactoryResetScopeToString;},_className:"Device::FactoryResetScopeToString"
};C.AUV={Co:function(){A._GetAutoObject(C.Device).ArR(this.toString());},Init:function(
aArg){var B;A.zX([this,this.Be0],[B=A._GetAutoObject(C.Device),B.A89,B.Bbd],0);this.
Be0(this);},Be0:function(G){this.EH(A._GetAutoObject(C.Device).AGM);A.we(this,0);
},_Init:function(aArg){C.Int32ArrayWrapper._Init.call(this,aArg);this.__proto__=
C.AUV;this.Zn(3);this.Init(aArg);},_className:"Device::TemperaturesLowClass"};C.
AUU={Init:function(aArg){var B;A.zX([this,this.BeY],[B=A._GetAutoObject(C.Device
),B.A88,B.Bbc],0);this.BeY(this);},Co:function(){A._GetAutoObject(C.Device).ArQ(
this.toString());},BeY:function(G){this.EH(A._GetAutoObject(C.Device).AGL);A.we(
this,0);},_Init:function(aArg){C.Int32ArrayWrapper._Init.call(this,aArg);this.__proto__=
C.AUU;this.Zn(3);this.Init(aArg);},_className:"Device::TemperaturesHighClass"};C.
AMo={Init:function(aArg){var B;A.zX([this,this.Ber],[B=A._GetAutoObject(C.Device
),B.A8n,B.BaU],0);this.Ber(this);},Ber:function(G){this.EH(A._GetAutoObject(C.Device
).ABu);A.we(this,0);},_Init:function(aArg){C.Int32ArrayWrapper._Init.call(this,aArg
);this.__proto__=C.AMo;this.Zn(3);this.Init(aArg);},_className:"Device::AnimalTypesClass"
};C.UInt64FilterCriterion={A5:0,Aa_:function(){var Av=A._NewObject(C.UInt64FilterCriterion
,0);Av.Fd(this);return Av;},Fd:function(AH){C.FilterCriterion.Fd.call(this,AH);var
Av=(C.UInt64FilterCriterion.isPrototypeOf(AH)?AH:null);if(!!Av)this.A5=Av.A5;},Initialize:
function(A4,D$,A7,P8){this.EF=A4;this.Operator=D$;this.A5=A7;this.YA=P8;return this;
},_Init:function(aArg){C.FilterCriterion._Init.call(this,aArg);this.__proto__=C.
UInt64FilterCriterion;},_className:"Device::UInt64FilterCriterion"};C.BooleanToAssignedUnassignedString={
BO:function(A6){switch(A6){case 0:return A.aaR(A.acf.Akc);case 1:return A.aaR(A.
acf.BgT);default:return AsT+A6.toFixed();}},_Init:function(aArg){C.EnumToString.
_Init.call(this,aArg);this.__proto__=C.BooleanToAssignedUnassignedString;},_className:
"Device::BooleanToAssignedUnassignedString"};C.C6={UNDEFINED:0,AT:1,BA:2,BE:3,BCA:
4,BCP:5,BCQ:6,BCR:7,BCS:8,BCT:9,BC3:10,BC4:11,BDb:12,BDc:13,BDr:14,FR:15,GR:16,BDE:
17,BDF:18,BDQ:19,BDR:20,BDW:21,BDX:22,BDY:23,BDZ:24,BD5:25,BEh:26,BEi:27,BEx:28,
BEy:29,BEO:30,BEP:31,BE5:32,BE6:33,BE7:34,BFj:35,BFk:36,BFA:37,A$E:38,BFB:39,LAST:
40};C.CountryToString={BO:function(A6){var J2=A6;var Fx=A.jV;switch(J2){case 1:Fx=
A.aaR(A.acm.Bg7);break;case 2:Fx=A.aaR(A.acm.Bhi);break;case 3:Fx=A.aaR(A.acm.Bhc
);break;case 4:Fx=A.aaR(A.acm.Bhk);break;case 5:Fx=A.aaR(A.acm.Bhm);break;case 6:
Fx=A.aaR(A.acm.Bpe);break;case 7:Fx=A.aaR(A.acm.Bhp);break;case 8:Fx=A.aaR(A.acm.
BhE);break;case 9:Fx=A.aaR(A.acm.BhF);break;case 10:Fx=A.aaR(A.acm.Biv);break;case
11:Fx=A.aaR(A.acm.BhL);break;case 12:Fx=A.aaR(A.acm.Bia);break;case 13:Fx=A.aaR(
A.acm.BoI);break;case 14:Fx=A.aaR(A.acm.Bij);break;case 15:Fx=A.aaR(A.acm.Bir);break;
case 16:Fx=A.aaR(A.acm.BiX);break;case 17:Fx=A.aaR(A.acm.BhC);break;case 18:Fx=A.
aaR(A.acm.Bi3);break;case 19:Fx=A.aaR(A.acm.Bjb);break;case 20:Fx=A.aaR(A.acm.Bjn
);break;case 21:Fx=A.aaR(A.acm.Bjp);break;case 22:Fx=A.aaR(A.acm.BjB);break;case
23:Fx=A.aaR(A.acm.BjE);break;case 24:Fx=A.aaR(A.acm.Bjy);break;case 25:Fx=A.acm.
BjG;break;case 26:Fx=A.aaR(A.acm.BjW);break;case 27:Fx=A.aaR(A.acm.Bj3);break;case
28:Fx=A.aaR(A.acm.BnG);break;case 29:Fx=A.aaR(A.acm.BnH);break;case 30:Fx=A.aaR(
A.acm.Bn8);break;case 31:Fx=A.aaR(A.acm.Bn_);break;case 32:Fx=A.aaR(A.acm.Bpd);break;
case 33:Fx=A.aaR(A.acm.BoH);break;case 34:Fx=A.aaR(A.acm.BoG);break;case 35:Fx=A.
aaR(A.acm.BpF);break;case 36:Fx=A.aaR(A.acm.Bpn);break;case 37:Fx=A.aaR(A.acm.BpJ
);break;case 38:Fx=A.aaR(A.acm.A$E);break;case 39:Fx=A.aaR(A.acm.BpI);break;case
0:Fx=Aoo;break;default:throw new Error(Aoe+J2.toFixed());}return Fx;},Ls:function(
A6){var J2=A6;var BP=A.jV;switch(J2){case 1:BP=S2;break;case 2:BP=ZU;break;case 3:
BP=UM;break;case 4:BP=WT;break;case 5:BP=Ip;break;case 6:BP=Z4;break;case 7:BP=UN;
break;case 8:BP=ZW;break;case 9:BP=WV;break;case 10:BP=Rf;break;case 11:BP=ZX;break;
case 12:BP=ZY;break;case 13:BP=Z3;break;case 14:BP=UO;break;case 15:BP=WW;break;
case 16:BP=ZZ;break;case 17:BP=WU;break;case 18:BP=O0;break;case 19:BP=Rg;break;
case 20:BP=WX;break;case 21:BP=WY;break;case 22:BP=W0;break;case 23:BP=Z0;break;
case 24:BP=WZ;break;case 25:BP=W1;break;case 26:BP=W2;break;case 27:BP=S3;break;
case 28:BP=UP;break;case 29:BP=Z1;break;case 30:BP=AcD;break;case 31:BP=S4;break;
case 32:BP=W3;break;case 33:BP=Afp;break;case 34:BP=Z2;break;case 35:BP=Z5;break;
case 36:BP=ZV;break;case 37:BP=Ak0;break;case 38:BP=JY;break;case 39:BP=Z6;break;
case 0:BP=Aoo;break;default:throw new Error(Aoe+J2.toFixed());}return BP;},_Init:
function(aArg){C.EnumToString._Init.call(this,aArg);this.__proto__=C.CountryToString;
},_className:"Device::CountryToString"};C.EaseOfDelivery={Unspecified:0,Easy:1,Moderate:
2,Difficult:3,Surgery:4,LAST:5};C.EaseOfDeliveryToString={BO:function(A6){var BcR=
A6;var Aty=A.jV;switch(BcR){case 0:Aty=A.aaR(A.acf.Unspecified);break;case 1:Aty=
A.aaR(A.acf.Easy);break;case 2:Aty=A.aaR(A.acf.Moderate);break;case 3:Aty=A.aaR(
A.acf.Difficult);break;case 4:Aty=A.aaR(A.acf.Surgery);break;default:throw new Error(
AY4+BcR.toFixed());}return Aty;},_Init:function(aArg){C.EnumToString._Init.call(
this,aArg);this.__proto__=C.EaseOfDeliveryToString;},_className:"Device::EaseOfDeliveryToString"
};C.WhereAbouts={UNB:0,EZU:1,EMA:2,VZU:3,VMA:4,VIV:5,TOT:6,V48:7,V3T:8,MGE:9,VKB:
10,LAST:11};C.WhereAboutsToString={BO:function(A6){var BgG=A6;var AaH=A.jV;switch(
BgG){case 0:AaH=A.aaR(A.acf.Unknown);break;case 1:AaH=A.aaR(A.acf.BpS);break;case
2:AaH=A.aaR(A.acf.BpR);break;case 3:AaH=A.aaR(A.acf.Bp0);break;case 4:AaH=A.aaR(
A.acf.BpZ);break;case 5:AaH=A.aaR(A.acf.BpX);break;case 6:AaH=A.aaR(A.acf.BpU);break;
case 7:AaH=A.aaR(A.acf.BpW);break;case 8:AaH=A.aaR(A.acf.BpV);break;case 9:AaH=A.
aaR(A.acf.BpT);break;case 10:AaH=A.aaR(A.acf.BpY);break;default:throw new Error(
AY5+BgG.toFixed());}return AaH;},_Init:function(aArg){C.EnumToString._Init.call(
this,aArg);this.__proto__=C.WhereAboutsToString;},_className:"Device::WhereAboutsToString"
};C.Breed={UNKNOWN:0,SBT:1,RBT:2,JER:3,BV:4,RVA:5,RV:6,RDN:7,DSN:8,FL:9,GV:10,PIN:
11,HIN:12,MW:13,VW:14,LMP:15,DBV:16,AS:17,VR:18,CHA:19,LIM:20,WBB:21,BA:22,MA:23
,SAL:24,MON:25,AU:26,PIE:27,CHI:28,ROM:29,MAR:30,WP:31,BB:32,DA:33,AA:34,HE:35,SH:
36,HLD:37,WB:38,GAL:39,LR:40,BGA:41,LG:42,BRA:43,NOR:44,UST:45,ZEB:46,GRV:47,DEX:
48,WGA:49,LH:50,SD:51,FR:52,TUX:53,TLM:54,FLF:55,UCK:56,BLA:57,WIT:58,LAK:59,RHV:
60,AT:61,GR:62,PIF:63,PS:64,GVF:65,BVF:66,RBF:67,HWF:68,MWF:69,VWF:70,LPF:71,BRN:
72,BAZ:73,AO:74,BE:75,WL:76,BIS:77,YAK:78,SON:79,TAU:80,IND:81,TIN:82,WAG:83,XFF:
84,XFM:85,XMM:86,EVO:87,BLH:88,TLH:89,MGR:90,WSH:91,MUR:92,EBS:93,ERI:94,PAR:95,
XZF:96,XZM:97,XZZ:98,LAST:99};C.BreedToString={BO:function(A6){var Bx=A6;var BI=
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
AsY+Bx.toFixed());}return BI;},_Init:function(aArg){C.EnumToString._Init.call(this
,aArg);this.__proto__=C.BreedToString;},_className:"Device::BreedToString"};C.TC={
timer:null,Q:null,Ea:0,Du:0,JL:0,Po:1000,Px:1000,By:false,Cw:false,B3:true,Mc:function(
G){var F;if(!this.timer)return;if(this.Ea<0){this.Du=this.timer.Bu;this.Ea=0;}var
Au=(this.timer.Bu-this.Du)|0;var Op=this.Po;var G_=this.Px+this.Po;var LD=0;var Jd=
this.Ea;if(!Jd&&(Au>=Op)){Jd=1;Au=Au-Op;}if((Jd>0)&&(Au>=G_)){var H$=(Au/G_)|0;Au=
Au-(H$*G_);Jd=Jd+H$;}if((Jd>2)&&!this.JL)Jd=1;if(Jd!==this.Ea){this.Du=this.timer.
Bu-(((B=Au)<0)?B+0x100000000:B);this.Ea=Jd;}if(Jd>0)LD=this.Px;var Kz=(Jd>=this.
JL)&&(this.JL>0);if(!!this.Q){if((!Kz&&(Au>=LD))&&((F=this.Q,F[1].call(F[0]))!==
this.Cw))(F=this.Q,F[2].call(F[0],this.Cw));if((Kz||((Au<LD)&&(Jd>0)))&&((F=this.
Q,F[1].call(F[0]))!==this.B3))(F=this.Q,F[2].call(F[0],this.B3));}if(Kz)this.Ar(
false);},HK:function(E){if(E<0)E=0;this.JL=E;},Fj:function(E){if(E<100)E=100;this.
Po=E;},Uh:function(E){if(E<0)E=0;this.Px=E;},Ar:function(E){if(this.By===E)return;
this.By=E;if(!E&&!!this.timer){A.z9([this,this.Mc],this.timer,0);this.timer=null;
}if(E){this.timer=A._GetAutoObject(A.acl.Ad7);A.zV([this,this.Mc],this.timer,0);
this.Ea=-1;}},_Init:function(aArg){this.__proto__=C.TC;A.h7++;},_Done:function(){
this.__proto__=null;A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((B=
this.timer)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Q)&&((B=B[0])._cycle!=
D))B._Mark(B._cycle=D);if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null
,_cycle:0,_observers:null,_className:"Device::BoolEffect"};C.If={AnimalId:0,TransponderId:
1,BD8:2,BD7:3,BD$:4,BD_:5};C.AuR={BCy:0,BC6:1};C.AnimalIdGenerationMethodToString={
BO:function(A6){var Alh=A6;var AoP=A.jV;switch(Alh){case 0:AoP=A.aaR(A.acf.Uc);break;
case 1:AoP=A.aaR(A.acf.Transponder);break;case 3:AoP=(A.aaR(A.acf.Manual)+Oa)+A.
aaR(A.acf.Male);break;case 2:AoP=(A.aaR(A.acf.Manual)+Oa)+A.aaR(A.acf.Female);break;
case 4:AoP=(A.aaR(A.acf.Manual)+Oa)+A.aaR(A.acf.Unknown);break;case 5:AoP=(A.aaR(
A.acf.Manual)+Oa)+AsZ;break;default:throw new Error(As0+Alh.toFixed());}return AoP;
},_Init:function(aArg){C.EnumToString._Init.call(this,aArg);this.__proto__=C.AnimalIdGenerationMethodToString;
},_className:"Device::AnimalIdGenerationMethodToString"};C.DirectionOfCountingToString={
BO:function(A6){var Azr=A6;var A1w=A.jV;switch(Azr){case 0:A1w=As1;break;case 1:
A1w=Ayk;break;default:throw new Error(Aop+Azr.toFixed());}return A1w;},_Init:function(
aArg){C.EnumToString._Init.call(this,aArg);this.__proto__=C.DirectionOfCountingToString;
},_className:"Device::DirectionOfCountingToString"};C.EnumToIcon={Ass:function(A6
){throw new Error(AsL+A6.toFixed());},Ast:function(A6){throw new Error(AsL+A6.toFixed(
));},_Init:function(aArg){this.__proto__=C.EnumToIcon;A.h7++;},_Done:function(){
this.__proto__=null;A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((B=
this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:
"Device::EnumToIcon"};C.Ad6={Ass:function(A6){return A.aaL(A.ach.AUI);},Ast:function(
A6){var Azr=A6;var Ry=-1;switch(Azr){case 0:Ry=3;break;case 1:Ry=2;break;default:
throw new Error(AIh+Azr.toFixed());}return Ry;},_Init:function(aArg){C.EnumToIcon.
_Init.call(this,aArg);this.__proto__=C.Ad6;},_className:"Device::DirectionOfCountingToIcon"
};C.AdL={Ass:function(A6){return A.aaL(A.ach.AUG);},Ast:function(A6){var Alh=A6;
var Ry=-1;switch(Alh){case 0:Ry=0;break;case 1:Ry=6;break;case 3:Ry=4;break;case
2:Ry=5;break;case 4:Ry=2;break;case 5:Ry=3;break;default:throw new Error(AIh+Alh.
toFixed());}return Ry;},_Init:function(aArg){C.EnumToIcon._Init.call(this,aArg);
this.__proto__=C.AdL;},_className:"Device::AnimalIdGenerationMethodToIcon"};C.Pt={
UNDEFINED:0,SH:1,AOM:2,ARu:3,AOL:4,A7J:5,HE:6,A_V:7,A40:8,AMz:9,AUa:10,BE:11,BB:
12,A7w:13,AUb:14,AUc:15,AUN:16};C.GermanStateToString={BO:function(A6){var Bq=A6;
var Gy=A.jV;switch(Bq){case 1:Gy=A.aaR(A.acp.SH);break;case 2:Gy=A.aaR(A.acp.AOM
);break;case 3:Gy=A.aaR(A.acp.ARu);break;case 4:Gy=A.aaR(A.acp.AOL);break;case 5:
Gy=A.aaR(A.acp.A7J);break;case 6:Gy=A.aaR(A.acp.HE);break;case 7:Gy=A.aaR(A.acp.
A_V);break;case 8:Gy=A.aaR(A.acp.A40);break;case 9:Gy=A.aaR(A.acp.AMz);break;case
10:Gy=A.aaR(A.acp.AUa);break;case 11:Gy=A.aaR(A.acp.BE);break;case 12:Gy=A.aaR(A.
acp.BB);break;case 13:Gy=A.aaR(A.acp.A7w);break;case 14:Gy=A.aaR(A.acp.AUb);break;
case 15:Gy=A.aaR(A.acp.AUc);break;case 16:Gy=A.aaR(A.acp.AUN);break;case 0:Gy=Aoo;
break;default:throw new Error(As2+Bq.toFixed());}return Gy;},Ls:function(A6){var
Bq=A6;var Gy=A.jV;switch(Bq){case 1:Gy=A.aaR(A.acp.Bn$);break;case 2:Gy=A.aaR(A.
acp.AOM);break;case 3:Gy=A.aaR(A.acp.ARu);break;case 4:Gy=A.aaR(A.acp.AOL);break;
case 5:Gy=A.aaR(A.acp.BjT);break;case 6:Gy=A.aaR(A.acp.HE);break;case 7:Gy=A.aaR(
A.acp.BnQ);break;case 8:Gy=A.aaR(A.acp.Bg_);break;case 9:Gy=A.aaR(A.acp.AMz);break;
case 10:Gy=A.aaR(A.acp.AUa);break;case 11:Gy=A.aaR(A.acp.BE);break;case 12:Gy=A.
aaR(A.acp.BB);break;case 13:Gy=A.aaR(A.acp.BjF);break;case 14:Gy=A.aaR(A.acp.AUb
);break;case 15:Gy=A.aaR(A.acp.AUc);break;case 16:Gy=A.aaR(A.acp.AUN);break;case
0:Gy=Aoo;break;default:throw new Error(As2+Bq.toFixed());}return Gy;},Bps:function(
A6){var Bq=A6;var Ga=-1;switch(Bq){case 0:Ga=0;break;case 1:Ga=1;break;case 2:Ga=
2;break;case 3:Ga=3;break;case 4:Ga=4;break;case 5:Ga=5;break;case 6:Ga=6;break;
case 7:Ga=7;break;case 8:Ga=8;break;case 9:Ga=9;break;case 10:Ga=10;break;case 11:
Ga=11;break;case 12:Ga=12;break;case 13:Ga=13;break;case 14:Ga=14;break;case 15:
Ga=15;break;case 16:Ga=16;break;default:throw new Error(As2+Bq.toFixed());}return Ga;
},Bpt:function(A6){var Bq=A6;var Ga=A.jV;switch(Bq){case 1:Ga=AY6;break;case 2:Ga=
AY7;break;case 3:Ga=AY8;break;case 4:Ga=AY9;break;case 5:Ga=AY_;break;case 6:Ga=
AY$;break;case 7:Ga=AZa;break;case 8:Ga=AZb;break;case 9:Ga=AZc;break;case 10:Ga=
AZd;break;case 11:Ga=UM;break;case 12:Ga=AZe;break;case 13:Ga=AZf;break;case 14:
Ga=Ayl;break;case 15:Ga=AZg;break;case 16:Ga=Aym;break;case 0:Ga=Aoo;break;default:
throw new Error(As2+Bq.toFixed());}return Ga;},_Init:function(aArg){C.EnumToString.
_Init.call(this,aArg);this.__proto__=C.GermanStateToString;},_className:"Device::GermanStateToString"
};C.EartagNrAssignmentMode={OneSingleRange:0,TwoNumberRanges:1,LAST:2};C.EartagNrAssignmentModeToString={
Ls:function(A6){var U7=A6;var Nq=A.jV;switch(U7){case 0:Nq=Ayn;break;case 1:Nq=AZh;
break;default:throw new Error(AIi+U7.toFixed());}return Nq;},BO:function(A6){var
U7=A6;var Nq=A.jV;switch(U7){case 0:Nq=A.aaR(A.acf.Bnz);break;case 1:Nq=A.aaR(A.
acf.BpH);break;default:throw new Error(AIi+U7.toFixed());}return Nq;},_Init:function(
aArg){C.EnumToString._Init.call(this,aArg);this.__proto__=C.EartagNrAssignmentModeToString;
},_className:"Device::EartagNrAssignmentModeToString"};C.BCs={BEn:0,BEd:1,BDl:2,
BDm:3,BDn:4,BFl:5};C.EnumToCodeset={Amv:function(AhT){throw new Error(AZi+AhT.toFixed(
));},Ad9:function(A6){throw new Error(AsL+A6.toFixed());},AqG:function(){A.ab5("%s"
,Ayo);return 0;},Hp:function(){A.ab5("%s",Ayo);return 0;},_Init:function(aArg){this.
__proto__=C.EnumToCodeset;A.h7++;},_Done:function(){this.__proto__=null;A.h7--;}
,_ReInit:function(){},_Mark:function(D){var B;if((B=this.I)&&(B._cycle!=D))B._Mark(
B._cycle=D);},I:null,_cycle:0,_observers:null,_className:"Device::EnumToCodeset"
};C.M0={Amv:function(AhT){var Bx;switch(AhT){case 1:Bx=1;break;case 2:Bx=2;break;
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
Bx=0;}return Bx;},Ad9:function(A6){var Bx=A6;var BK=0;switch(Bx){case 0:BK=0;break;
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
case 98:BK=111;break;default:throw new Error(AZj+Bx.toFixed());}return BK;},AqG:
function(){return 0;},Hp:function(){return 111;},_Init:function(aArg){C.EnumToCodeset.
_Init.call(this,aArg);this.__proto__=C.M0;},_className:"Device::BreedToHitCodeset"
};C.ReasonOfLeaving={Unknown:0,A$q:1,RI:2,A_P:3,A6_:4,BEw:5,A$F:6,A7F:7,A5t:8,A_L:
9,A7D:10,A5x:11,BEM:12,BEN:13,LAST:14};C.ReasonOfLeavingToString={BO:function(A6
){var Ads=A6;var Tl=A.jV;switch(Ads){case 0:Tl=A.aaR(A.acf.Unknown);break;case 1:
Tl=A.aaR(A.acf.A$q);break;case 2:Tl=A.aaR(A.acf.RI);break;case 3:Tl=A.aaR(A.acf.
A_P);break;case 4:Tl=A.aaR(A.acf.A6_);break;case 5:Tl=A.aaR(A.acf.BnA);break;case
6:Tl=A.aaR(A.acf.A$F);break;case 7:Tl=A.aaR(A.acf.A7F);break;case 8:Tl=A.aaR(A.acf.
A5t);break;case 9:Tl=A.aaR(A.acf.A_L);break;case 10:Tl=A.aaR(A.acf.A7D);break;case
11:Tl=A.aaR(A.acf.A5x);break;case 12:Tl=A.aaR(A.acf.BnK);break;case 13:Tl=A.aaR(
A.acf.BnJ);break;default:throw new Error(AZk+Ads.toFixed());}return Tl;},_Init:function(
aArg){C.EnumToString._Init.call(this,aArg);this.__proto__=C.ReasonOfLeavingToString;
},_className:"Device::ReasonOfLeavingToString"};C.Ahn={Amv:function(AhT){var Pb;
switch(AhT){case 1:Pb=1;break;case 2:Pb=2;break;case 3:Pb=3;break;case 4:Pb=4;break;
case 5:Pb=5;break;case 6:Pb=6;break;case 7:Pb=7;break;case 8:Pb=8;break;case 9:Pb=
9;break;case 10:Pb=10;break;case 11:Pb=11;break;case 12:Pb=12;break;case 13:Pb=13;
break;default:Pb=0;}return Pb;},Ad9:function(A6){var Pb=A6;var Jc=0;switch(Pb){case
0:Jc=0;break;case 2:Jc=2;break;case 8:Jc=8;break;case 11:Jc=11;break;case 4:Jc=4;
break;case 10:Jc=10;break;case 7:Jc=7;break;case 5:Jc=5;break;case 9:Jc=9;break;
case 3:Jc=3;break;case 12:Jc=12;break;case 13:Jc=13;break;case 1:Jc=1;break;case
6:Jc=6;break;default:throw new Error(AIj+Pb.toFixed());}return Jc;},AqG:function(
){return 0;},Hp:function(){return 13;},_Init:function(aArg){C.EnumToCodeset._Init.
call(this,aArg);this.__proto__=C.Ahn;},_className:"Device::ReasonOfLeavingToCodeset"
};C.KX={Amv:function(AhT){var K8;switch(AhT){case 1:K8=1;break;case 2:K8=2;break;
case 3:K8=3;break;case 4:K8=4;break;case 5:K8=5;break;case 6:K8=6;break;case 7:K8=
7;break;case 8:K8=8;break;case 9:K8=9;break;case 10:K8=10;break;default:K8=0;}return K8;
},Ad9:function(A6){var K8=A6;var Jc=0;switch(K8){case 0:Jc=0;break;case 2:Jc=2;break;
case 1:Jc=1;break;case 9:Jc=9;break;case 6:Jc=6;break;case 8:Jc=8;break;case 7:Jc=
7;break;case 5:Jc=5;break;case 10:Jc=10;break;case 4:Jc=4;break;case 3:Jc=3;break;
default:throw new Error(AIj+K8.toFixed());}return Jc;},AqG:function(){return 0;}
,Hp:function(){return 10;},_Init:function(aArg){C.EnumToCodeset._Init.call(this,
aArg);this.__proto__=C.KX;},_className:"Device::WhereAboutsToCodeset"};C.AmD={_Init:
function(aArg){this.__proto__=C.AmD;A.h7++;},_Done:function(){this.__proto__=null;
A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((B=this.I)&&(B._cycle!=
D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:"Device::EmptyClass"
};C.CalfDeregistrationsTableFields={Year:0,Deregistrations:1,Deaths:2};C.CalfDeregistrations={
Deregistrations:0,Deaths:0,Year:0,EH:function(Ad,AI){var Hz=C.Row.EH.call(this,Ad
,AI);if(Hz&&!!AI){this.Akw(AI.CE(Ad,0));this.Awp(AI.CE(Ad,1));this.Awo(AI.CE(Ad,
2));}return Hz;},Co:function(AI){var Hz=C.Row.Co.call(this,AI);if(Hz&&!!AI){var Jg=
AI.Ox();if(Jg<=0)A.ab5("%s",W5);else{if(this.AmY())this.CK=AI.Yx();AI.Hg(this.CK
,0,this.Year);AI.Hg(this.CK,1,this.Deregistrations);AI.Hg(this.CK,2,this.Deaths);
AI.Oz(Jg);}}return Hz;},Gj:function(){C.Row.Gj.call(this);this.Akw(-1);},Hf:function(
){C.Row.Hf.call(this);this.Akw(0);this.Awp(0);this.Awo(0);},Awp:function(E){if(this.
Deregistrations===E)return;this.Deregistrations=E;A.abo([this,this.Bkv,this.Awp]
,0);},Awo:function(E){if(this.Deaths===E)return;this.Deaths=E;A.abo([this,this.Bkt
,this.Awo],0);},Akw:function(E){if(this.Year===E)return;this.Year=E;A.abo([this,
this.Arm,this.Akw],0);},Bkv:function(){return this.Deregistrations;},Bkt:function(
){return this.Deaths;},Arm:function(){return this.Year;},_Init:function(aArg){C.
Row._Init.call(this,aArg);this.__proto__=C.CalfDeregistrations;this.TableId=4;},
_className:"Device::CalfDeregistrations"};C.AuP={Undefined:0,Display:1,A_U:2,A_7:
3,A$Y:4,BDG:5,BEX:6,BFw:7,BD6:8,BCU:9,BCh:10,A6w:11,A_W:12,BFD:13,A7I:14,BFG:15};
C.DeviceComponentToString={BO:function(A6){var BcK=A6;var Qd=A.jV;switch(BcK){case
0:Qd=AZl;break;case 10:Qd=A.aaR(A.acf.BgH);break;case 9:Qd=A.aaR(A.acf.Bho);break;
case 1:Qd=A.aaR(A.acf.Bh2);break;case 11:Qd=A.aaR(A.acf.A6w);break;case 5:Qd=A.aaR(
A.acf.Bp1);break;case 8:Qd=A.aaR(A.acf.Bh4);break;case 14:Qd=A.aaR(A.acf.A7I);break;
case 2:Qd=A.aaR(A.acf.A_U);break;case 12:Qd=A.aaR(A.acf.A_W);break;case 6:Qd=A.aaR(
A.acf.BnP);break;case 3:Qd=A.aaR(A.acf.A_7);break;case 7:Qd=A.aaR(A.acf.Bh5);break;
case 13:Qd=A.aaR(A.acf.BhN);break;case 15:Qd=A.aaR(A.acf.Bp5);break;case 4:Qd=A.
aaR(A.acf.A$Y);break;default:throw new Error(AZm+BcK.toFixed());}return Qd;},_Init:
function(aArg){C.EnumToString._Init.call(this,aArg);this.__proto__=C.DeviceComponentToString;
},_className:"Device::DeviceComponentToString"};C.AgD={Amv:function(AhT){return AhT;
},Ad9:function(A6){return A6;},AqG:function(){return 0;},Hp:function(){return 4;
},_Init:function(aArg){C.EnumToCodeset._Init.call(this,aArg);this.__proto__=C.AgD;
},_className:"Device::EaseOfDeliveryToCodeset"};C.AeG={Ass:function(A6){return A.
aaL(A.ach.APT);},Ast:function(A6){var BcW=A6;var Ry=-1;switch(BcW){case 0:Ry=0;break;
case 1:Ry=1;break;case 2:Ry=2;break;default:throw new Error(AZn+BcW.toFixed());}
return Ry;},_Init:function(aArg){C.EnumToIcon._Init.call(this,aArg);this.__proto__=
C.AeG;},_className:"Device::MotherSelectionFilterModeToIcon"};C.WhereAboutsFilterCriterion={
A5:0,Aa_:function(){var Av=A._NewObject(C.WhereAboutsFilterCriterion,0);Av.Fd(this
);return Av;},Fd:function(AH){C.FilterCriterion.Fd.call(this,AH);var Av=(C.WhereAboutsFilterCriterion.
isPrototypeOf(AH)?AH:null);if(!!Av)this.A5=Av.A5;},Initialize:function(A4,D$,A7,
P8){this.EF=A4;this.Operator=D$;this.A5=A7;this.YA=P8;return this;},_Init:function(
aArg){C.FilterCriterion._Init.call(this,aArg);this.__proto__=C.WhereAboutsFilterCriterion;
},_className:"Device::WhereAboutsFilterCriterion"};C.BEg={ANK:0,BC1:1,APx:2,LAST:
3};C.BFn={GE:0,AVp:1,Hc:2,Year:3,LAST:4};C.TimespanDaysToString={BO:function(A6){
var Bgf=A6;var AA8=A.jV;switch(Bgf){case 0:AA8=A.aaR(A.acf.A5L);break;case 1:AA8=
A.aaR(A.acf.AVp);break;case 2:AA8=A.aaR(A.acf.Hc);break;case 3:AA8=A.aaR(A.acf.Year
);break;default:throw new Error(AZo+Bgf.toFixed());}return AA8;},_Init:function(
aArg){C.EnumToString._Init.call(this,aArg);this.__proto__=C.TimespanDaysToString;
},_className:"Device::TimespanDaysToString"};C.AhH={BEt:0,BC7:1,BDM:2,BDP:3,BDO:
4,BC8:5,BDN:6,LAST:7};C.USBStateToString={BO:function(A6){var BgB=A6;var Bq=A.jV;
switch(BgB){case 0:Bq=AZp;break;case 2:Bq=AIk;break;case 1:Bq=AZq;break;case 5:Bq=
AZr;break;case 3:Bq=AZs;break;case 4:Bq=AZt;break;case 6:Bq=AZu;break;default:throw new
Error(AHL+BgB.toFixed());}return Bq;},_Init:function(aArg){C.EnumToString._Init.
call(this,aArg);this.__proto__=C.USBStateToString;},_className:"Device::USBStateToString"
};C.ACf={BDK:0,BCt:1,BDL:2,BDI:3};C.Axr={AB$:A.jV,Timestamp:0,ADX:0,AD4:0,AGf:0,
OnSetTimestamp:function(E){if(this.Timestamp===E)return;this.Timestamp=E;},AFc:function(
E){if(this.ADX===E)return;this.ADX=E;},AFi:function(E){if(this.AD4===E)return;this.
AD4=E;},AFs:function(E){if(this.AGf===E)return;this.AGf=E;},AES:function(E){if(this.
AB$===E)return;this.AB$=E;},_Init:function(aArg){this.__proto__=C.Axr;A.h7++;},_Done:
function(){this.__proto__=null;A.h7--;},_ReInit:function(){},_Mark:function(D){var
B;if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:
null,_className:"Device::SoftwareVersionInformation"};C.Avj={Timestamp:0,ARi:0,ARj:
0,AU6:0,AU7:0,AU5:0,ARh:0,OnSetTimestamp:function(E){if(this.Timestamp===E)return;
this.Timestamp=E;},AE$:function(E){if(this.ARi===E)return;this.ARi=E;},AFa:function(
E){if(this.ARj===E)return;this.ARj=E;},AFH:function(E){if(this.AU6===E)return;this.
AU6=E;},AFI:function(E){if(this.AU7===E)return;this.AU7=E;},AFG:function(E){if(this.
AU5===E)return;this.AU5=E;},AE_:function(E){if(this.ARh===E)return;this.ARh=E;},
_Init:function(aArg){this.__proto__=C.Avj;A.h7++;},_Done:function(){this.__proto__=
null;A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((B=this.I)&&(B._cycle
!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:"Device::HardwareVersionInformation"
};C.Aqg={Undefined:0,BDw:1,BCG:2};C.Agl={Manual:0,TransponderId:1,LAST:2};C.AnimalIdAutoGenerationMethodToString={
BO:function(A6){var Bcg=A6;var A00=A.jV;switch(Bcg){case 0:A00=A.aaR(A.acf.A5B);
break;case 1:A00=A.aaR(A.acf.A5R);break;default:throw new Error(AZv+Bcg.toFixed(
));}return A00;},_Init:function(aArg){C.EnumToString._Init.call(this,aArg);this.
__proto__=C.AnimalIdAutoGenerationMethodToString;},_className:"Device::AnimalIdAutoGenerationMethodToString"
};C.Hc={A5k:0,ADM:1,ACy:2,ADY:3,ABw:4,AD1:5,ADO:6,ADN:7,ABE:8,AGo:9,AEc:10,AEa:11
,ACi:12,LAST:13};C.MonthToString={BO:function(A6){var BdY=A6;var Xs=A.jV;switch(
BdY){case 1:Xs=A.aaR(A.act.ADM);break;case 2:Xs=A.aaR(A.act.ACy);break;case 3:Xs=
A.aaR(A.act.ADY);break;case 4:Xs=A.aaR(A.act.ABw);break;case 5:Xs=A.aaR(A.act.AD1
);break;case 6:Xs=A.aaR(A.act.ADO);break;case 7:Xs=A.aaR(A.act.ADN);break;case 8:
Xs=A.aaR(A.act.ABE);break;case 9:Xs=A.aaR(A.act.AGo);break;case 10:Xs=A.aaR(A.act.
AEc);break;case 11:Xs=A.aaR(A.act.AEa);break;case 12:Xs=A.aaR(A.act.ACi);break;default:
throw new Error(AZw+BdY.toFixed());}return Xs;},_Init:function(aArg){C.EnumToString.
_Init.call(this,aArg);this.__proto__=C.MonthToString;},_className:"Device::MonthToString"
};C.Ajx={FileName:A.jV,AGh:0,ACf:0,AnS:false,_Init:function(aArg){this.__proto__=
C.Ajx;A.h7++;},_Done:function(){this.__proto__=null;A.h7--;},_ReInit:function(){
},_Mark:function(D){var B;if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null
,_cycle:0,_observers:null,_className:"Device::DataExportContext"};C.Amk={BDD:0,BFc:
1};C.AVw={Init:function(aArg){var B;A.zX([this,this.Bfa],[B=A._GetAutoObject(C.Device
),B.A9j,B.Bbk],0);this.Bfa(this);},Co:function(){A._GetAutoObject(C.Device).ArW(
this.toString());},Bfa:function(G){this.EH(A._GetAutoObject(C.Device).AG8);A.we(
this,0);},_Init:function(aArg){C.Int32ArrayWrapper._Init.call(this,aArg);this.__proto__=
C.AVw;this.Zn(3);this.Init(aArg);},_className:"Device::WeightGainsLowClass"};C.AVv={
Init:function(aArg){var B;A.zX([this,this.Be_],[B=A._GetAutoObject(C.Device),B.A9i
,B.Bbj],0);this.Be_(this);},Co:function(){A._GetAutoObject(C.Device).ArV(this.toString(
));},Be_:function(G){this.EH(A._GetAutoObject(C.Device).AG7);A.we(this,0);},_Init:
function(aArg){C.Int32ArrayWrapper._Init.call(this,aArg);this.__proto__=C.AVv;this.
Zn(3);this.Init(aArg);},_className:"Device::WeightGainsHighClass"};C.AVy={Init:function(
aArg){var B;A.zX([this,this.Bfc],[B=A._GetAutoObject(C.Device),B.A9m,B.Bbn],0);this.
Bfc(this);},Co:function(){A._GetAutoObject(C.Device).ArX(this.toString());},Bfc:
function(G){this.EH(A._GetAutoObject(C.Device).AG$);A.we(this,0);},_Init:function(
aArg){C.Int32ArrayWrapper._Init.call(this,aArg);this.__proto__=C.AVy;this.Zn(3);
this.Init(aArg);},_className:"Device::WeightValuesBirthClass"};C.AVu={Init:function(
aArg){var B;A.zX([this,this.Be8],[B=A._GetAutoObject(C.Device),B.A9h,B.Bbi],0);this.
Be8(this);},Co:function(){A._GetAutoObject(C.Device).ArU(this.toString());},Be8:
function(G){this.EH(A._GetAutoObject(C.Device).AG6);A.we(this,0);},_Init:function(
aArg){C.Int32ArrayWrapper._Init.call(this,aArg);this.__proto__=C.AVu;this.Zn(3);
this.Init(aArg);},_className:"Device::WeightGainsAverageClass"};C.AMp={Init:function(
aArg){var B;A.zX([this,this.Bes],[B=A._GetAutoObject(C.Device),B.A8o,B.BaV],0);this.
Bes(this);},Bes:function(G){this.EH(A._GetAutoObject(C.Device).ABv);A.we(this,0);
},_Init:function(aArg){C.Int32ArrayWrapper._Init.call(this,aArg);this.__proto__=
C.AMp;this.Zn(3);this.Init(aArg);},_className:"Device::AnimalTypesWeightGainsClass"
};C.BEj={BEm:0,BEa:1,BC0:2,BFE:3,Unknown:4};C.BCE={None:0,BEu:1,BEo:2,BEk:3,BEl:
4};C.AhG={A7Y:0,Manual:1,TransponderId:2,LAST:3};C.TransponderAssignmentIdChangeMethodToString={
BO:function(A6){var Bgj=A6;var AK1=A.jV;switch(Bgj){case 0:AK1=A.aaR(A.acf.A7Y);
break;case 1:AK1=A.aaR(A.acf.A5B);break;case 2:AK1=A.aaR(A.acf.A5R);break;default:
throw new Error(AIl+Bgj.toFixed());}return AK1;},_Init:function(aArg){C.EnumToString.
_Init.call(this,aArg);this.__proto__=C.TransponderAssignmentIdChangeMethodToString;
},_className:"Device::TransponderAssignmentIdChangeMethodToString"};C.A_M={BAO:function(
Atg){var KB=A.ab0(A.abV(Atg,15),0,10);var J2=A._GetAutoObject(C.Converter).ZO(KB
);if(!!J2){if((J2===10)&&(Atg.length>16))return 0;else return KB;}else{J2=A._GetAutoObject(
C.Converter).ZO(A._GetAutoObject(C.Device).Ur);if(!!J2&&((J2===10)&&((Atg.length===
10)||(Atg.length===12)))){var AI9=A.ab0(A.abV(Atg,10),0,10);var AJY=A._GetAutoObject(
C.Converter).BpB(AI9);if((AI9>0)&&!!AJY)return(A._GetAutoObject(C.Converter).Aqm(
J2)*1000000000000)+A.ab0(A.abV(Atg,10),0,10);}}return 0;},Bfk:function(O8){if(O8.
length<8)return 0;var AAB=A._NewObject(A.Core.Bu,0);var A3F=false;var A3K=A.abW(
O8,4,4);var AtF=A.wz(A3K,0,10);if((AtF<2000)||(AtF>2100)){A3K=A.abV(O8,4);AtF=A.
wz(A3K,0,10);A3F=true;}if((AtF<2000)||(AtF>2100))return 0;AAB.Year=AtF;var AKI;var
AzK;if(A3F){AKI=A.abW(O8,4,2);AzK=A.wz(AKI,0,10);}else{AKI=A.abW(O8,2,2);AzK=A.wz(
AKI,0,10);}if((AzK<1)||(AzK>12))return 0;AAB.Uj(AzK);var AKH;var AzJ;if(A3F){AKH=
A.abW(O8,6,2);AzJ=A.wz(AKH,0,10);}else{AKH=A.abV(O8,2);AzJ=A.wz(AKH,0,10);}if((AzJ<
1)||(AzJ>AAB.Zf()))return 0;AAB.Lo(AzJ);return AAB.JM();},_Init:function(aArg){this.
__proto__=C.A_M;A.h7++;},_Done:function(){this.__proto__=null;A.h7--;},_ReInit:function(
){},_Mark:function(D){var B;if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:
null,_cycle:0,_observers:null,_className:"Device::ParserClass"};C.AnD={_Init:function(
){C.A_M._Init.call(this,0);},_ReInit:function(){},_variants:function(){return this;
},_this:null};C.AnimalTableFieldsToString={BO:function(A6){var Aaf=A6;var MM=A.jV;
switch(Aaf){case 14:MM=A.aaR(A.acf.Afh);break;case 32:MM=A.aaR(A.acf.Breed);break;
case 4:MM=A.aaR(A.acf.Ad4);break;case 28:MM=A.aaR(A.acf.A5p);break;case 33:MM=A.
aaR(A.acf.Agv);break;case 23:MM=A.aaR(A.acf.KG);break;case 7:MM=A.aaR(A.acf.Afc);
break;case 2:MM=A.aaR(A.acf.O);break;case 0:MM=A.aaR(A.acf.GG);break;case 8:MM=A.
aaR(A.acf.Alarm);break;case 9:MM=A.aaR(A.acf.AB4);break;case 38:MM=A.aaR(A.acf.Bh3
);break;case 11:MM=A.aaR(A.acf.Fever);break;case 29:MM=A.aaR(A.acf.AQ9);break;case
18:MM=A.aaR(A.acf.M2);break;case 26:MM=A.aaR(A.acf.Uc);break;case 22:MM=A.aaR(A.
acf.Transponder);break;case 1:MM=A.aaR(A.acf.GB);break;case 34:MM=A.aaR(A.acf.I_
);break;case 6:case 25:case 27:case 10:case 37:case 12:case 17:case 5:case 3:case
35:case 36:case 15:case 16:case 24:case 31:case 20:case 30:case 21:case 19:case 13:
MM=A.jV;break;default:throw new Error(AZx+A6.toFixed());}return MM;},_Init:function(
aArg){C.EnumToString._Init.call(this,aArg);this.__proto__=C.AnimalTableFieldsToString;
},_className:"Device::AnimalTableFieldsToString"};C.VE={BDJ:0,BDH:1,LAST:2};C.DataExportDestinationToString={
BO:function(A6){var Byp=A6;var A1q=A.jV;switch(Byp){case 0:A1q=A.acf.BiY;break;case
1:A1q=A.acf.BhG;break;default:throw new Error(As3+A6.toFixed());}return A1q;},_Init:
function(aArg){C.EnumToString._Init.call(this,aArg);this.__proto__=C.DataExportDestinationToString;
},_className:"Device::DataExportDestinationToString"};C.ADV={Bh:0,BFg:1,LAST:2};
C.ListViewScopeToString={BO:function(A6){var Bzy=A6;var A2m=A.jV;switch(Bzy){case
0:A2m=A.aaR(A.acf.Bh);break;case 1:A2m=A.aaR(A.acf.BoE);break;default:throw new Error(
AZy+A6.toFixed());}return A2m;},_Init:function(aArg){C.EnumToString._Init.call(this
,aArg);this.__proto__=C.ListViewScopeToString;},_className:"Device::ListViewScopeToString"
};C.AG_={BF6:0,BF5:1,BF4:2,LAST:3};C.WeightValuePrecisionToString={BO:function(A6
){var BCd=A6;var ALi=A.jV;switch(BCd){case 0:ALi=AZz+A.aaR(A.acf.AzX);break;case
1:ALi=As4+A.acf.Ait;break;case 2:ALi=Ayp+A.acf.Ait;break;default:throw new Error(
As5+A6.toFixed());}return ALi;},_Init:function(aArg){C.EnumToString._Init.call(this
,aArg);this.__proto__=C.WeightValuePrecisionToString;},_className:"Device::WeightValuePrecisionToString"
};C.Agq={BO:function(A6){var AKP=A6;if(AKP===1)return A.aaR(A.acf.Bi0);else return C.
AnimalTypeToString.BO.call(this,A6);},_Init:function(aArg){C.AnimalTypeToString.
_Init.call(this,aArg);this.__proto__=C.Agq;},_className:"Device::AnimalTypeToStringHeifer"
};C.YZ={RI:0,BEq:1,LAST:2};C.MassDeregistrationCriterionToString={BO:function(A6
){var BzB=A6;var A2r=A.jV;switch(BzB){case 0:A2r=A.aaR(A.acf.Bj6);break;case 1:A2r=
A.aaR(A.acf.ARR);break;default:throw new Error(Ax2+A6.toFixed());}return A2r;},_Init:
function(aArg){C.EnumToString._Init.call(this,aArg);this.__proto__=C.MassDeregistrationCriterionToString;
},_className:"Device::MassDeregistrationCriterionToString"};C.UInt64PartialFilterCriterion={
A5:A.jV,AeI:0,TI:0,Aa_:function(){var Av=A._NewObject(C.UInt64PartialFilterCriterion
,0);Av.Fd(this);return Av;},Fd:function(AH){C.FilterCriterion.Fd.call(this,AH);var
Av=(C.UInt64PartialFilterCriterion.isPrototypeOf(AH)?AH:null);if(!!Av){this.A5=Av.
A5;this.AeI=Av.AeI;this.TI=Av.TI;}},Initialize:function(A4,D$,A7,Ath,AIP,P8){this.
EF=A4;this.Operator=D$;this.A5=A7;this.YA=P8;this.AeI=Ath;this.TI=AIP;return this;
},_Init:function(aArg){C.FilterCriterion._Init.call(this,aArg);this.__proto__=C.
UInt64PartialFilterCriterion;},_className:"Device::UInt64PartialFilterCriterion"
};
C._Init=function(){C.Int32FilterCriterion.__proto__=C.FilterCriterion;C.StringFilterCriterion.
__proto__=C.FilterCriterion;C.Table.__proto__=C.ITable;C.Animal.__proto__=C.Row;
C.Rating.__proto__=C.Row;C.HelperClass.__proto__=C.AmD;C.BoolFilterCriterion.__proto__=
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
C.AUV.__proto__=C.Int32ArrayWrapper;C.AUU.__proto__=C.Int32ArrayWrapper;C.AMo.__proto__=
C.Int32ArrayWrapper;C.UInt64FilterCriterion.__proto__=C.FilterCriterion;C.BooleanToAssignedUnassignedString.
__proto__=C.EnumToString;C.CountryToString.__proto__=C.EnumToString;C.EaseOfDeliveryToString.
__proto__=C.EnumToString;C.WhereAboutsToString.__proto__=C.EnumToString;C.BreedToString.
__proto__=C.EnumToString;C.AnimalIdGenerationMethodToString.__proto__=C.EnumToString;
C.DirectionOfCountingToString.__proto__=C.EnumToString;C.Ad6.__proto__=C.EnumToIcon;
C.AdL.__proto__=C.EnumToIcon;C.GermanStateToString.__proto__=C.EnumToString;C.EartagNrAssignmentModeToString.
__proto__=C.EnumToString;C.M0.__proto__=C.EnumToCodeset;C.ReasonOfLeavingToString.
__proto__=C.EnumToString;C.Ahn.__proto__=C.EnumToCodeset;C.KX.__proto__=C.EnumToCodeset;
C.CalfDeregistrations.__proto__=C.Row;C.DeviceComponentToString.__proto__=C.EnumToString;
C.AgD.__proto__=C.EnumToCodeset;C.AeG.__proto__=C.EnumToIcon;C.WhereAboutsFilterCriterion.
__proto__=C.FilterCriterion;C.TimespanDaysToString.__proto__=C.EnumToString;C.USBStateToString.
__proto__=C.EnumToString;C.AnimalIdAutoGenerationMethodToString.__proto__=C.EnumToString;
C.MonthToString.__proto__=C.EnumToString;C.AVw.__proto__=C.Int32ArrayWrapper;C.AVv.
__proto__=C.Int32ArrayWrapper;C.AVy.__proto__=C.Int32ArrayWrapper;C.AVu.__proto__=
C.Int32ArrayWrapper;C.AMp.__proto__=C.Int32ArrayWrapper;C.TransponderAssignmentIdChangeMethodToString.
__proto__=C.EnumToString;C.AnimalTableFieldsToString.__proto__=C.EnumToString;C.
DataExportDestinationToString.__proto__=C.EnumToString;C.ListViewScopeToString.__proto__=
C.EnumToString;C.WeightValuePrecisionToString.__proto__=C.EnumToString;C.Agq.__proto__=
C.AnimalTypeToString;C.MassDeregistrationCriterionToString.__proto__=C.EnumToString;
C.UInt64PartialFilterCriterion.__proto__=C.FilterCriterion;};C._ReInit=function(
){var B;if((B=C.Device._this))B._ReInit(),C.Device._ReInit.call(B);if((B=C.Converter.
_this))B._ReInit(),C.Converter._ReInit.call(B);if((B=C.Helper._this))B._ReInit()
,C.Helper._ReInit.call(B);if((B=C.AnD._this))B._ReInit(),C.AnD._ReInit.call(B);};
C.DF=function(D){var B;if((B=C.Device._this)&&(B._cycle!=D))B._Done(C.Device._this=
null);if((B=C.Converter._this)&&(B._cycle!=D))B._Done(C.Converter._this=null);if((
B=C.Helper._this)&&(B._cycle!=D))B._Done(C.Helper._this=null);if((B=C.AnD._this)&&(
B._cycle!=D))B._Done(C.AnD._this=null);};return C;})();

/* VitalControl demonstration application, © Urban GmbH & Co.KG 2023 */