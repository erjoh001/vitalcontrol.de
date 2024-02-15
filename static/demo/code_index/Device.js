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
var B9="ERROR: Cannot add criterion, it is already in the list.";var BC="ERROR: BatteryChargeState is read only";
var EW="ERROR: UpdateChargeActive is read only";var He="ERROR: ScanState is read only.";
var I7="ERROR: MeasureState is read only.";var IH="ERROR: Temperature value is read only";
var OM="ERROR: UpdateDataTable called for Undefined data table.";var PQ="ERROR: UpdateDataTable called for unknown data table id=";
var PR="ERROR: SyncState is read only.";var CO="ERROR: ScanTransponder is read only.";
var E4="ERROR: Body weight value is read only";var Ln="ERROR: Predicted temperature value is read only";
var PT="ERROR: TransferProgress is read only";var Ko="ERROR: TransferTarget is read only";
var NY="ERROR: unhandled assessment.";var PU="Unhandled enum BodyTemperature: ";
var Mw="AU";var SL="AT";var Uu="BE";var Zs="BA";var Ww="BG";var II="CA";var Uv="CN";
var Zt="TW";var Wx="HR";var Zu="CY";var Uw="CZ";var Zv="DK";var Zw="EE";var Ux="FI";
var Wy="FR";var Q4="DE";var Zx="GR";var ON="HU";var PV="IE";var Wz="IT";var WA="JP";
var WC="LV";var Zy="LT";var Zz="LU";var WD="MT";var WE="NL";var SM="NO";var ZA="PL";
var ZB="PT";var Acf="RO";var Uy="RU";var ZC="SK";var Ae2="SI";var ZD="ES";var WF=
"SE";var WG="CH";var ZE="TR";var Ae3="UA";var JN="UK";var Ae4="US";var Lo=".";var
Ahk="-";var AnJ="ERROR: Unhandled mass unit: ";var NZ=" ";var WH="Unhandled gender";
var AnK="Unhandled animal type";var Ahl="Unhandled Device::MassUnit.";var Ahm="Unhandled Device::AnimalListContent.";
var Acg="Avid";var Uz="Ordicam / IER SA";var AnL="Agrident";var AnM="Datamars";var
Aw3="Allflex";var Aw4="Texas Instruments";var AkG="Nedap";var Aw5="Digital Angel";
var Ae5="null";var Asa="[ ";var OO=", ";var SN=" ]";var Aw6="Unhandled language";
var SO="Unhandled Device::AnimalListAction.";var Asb="Temperature unit conversion not supported: ";
var Aw7="->";var Aw8="=";var Aw9=">";var AnN="<";var Aw_="!=";var Asc="WARNING: Unhandled operator.";
var KP="Unknown birth type";var Aw$="Unhandled country: ";var Ach="ERROR: Cannot start transaction";
var Axa="ERROR: Table is null, cannot load row (";var AF7=")";var AF8="Table Id mismatch!";
var AF9="ERROR: Row index (";var AF_=") out of bounds [0,";var Axb="]";var AUc="ERROR: Table is full. Item limit: ";
var AUd="Device::ScanTransponder not set";var AUe="Unhandled TransponderType.";var
AUf="Unhandled ScanState.";var AUg="Could not load animal with transponder";var Asd=
"Birth type";var Axc="Time calving";var PW="Pend. reg. notice";var Axd="Perished";
var AUh="Rating temp.";var AUi="Location";var AUj=" mother";var AUk="Reason leaving";
var AF$="Time alarm";var AGa="Time first weighing";var Ae6="Time control";var AnO=
"Time temp.";var AUl="Time watch";var AGb="Time weighing";var AkH="Assessment";var
AGc="Time rating";var AGd="ERROR: Unhandled AnimalTable filter field:";var AGe="Field ";
var AUm="ERROR: Unhandled RatingTable filter field:";var AUn="ERROR: Unhandled table ";
var AUo=" filter fields.";var Ae7="WARNING: Unhandled filter criterion type.";var
AGf="0";var Ase="No table specified";var AGg="Invalid animal id generation method: ";
var AGh="Unhandled AnimalIdGenerationMethod: ";var Axe="Invalid gender: ";var AGi=
"Invalid ear tag number assignment mode: ";var Axf=";";var AUp="Invalid animal creation error code: ";
var AUq="Invalid EartagNrAssignmentMode: ";var AUr="Unsupported exponent: ";var AUs=
"Unknown whereabouts type: ";var AGj="Unhandled Gender: ";var AUt="Unhandled AnimalIdAutoGenerationMethod: ";
var OP="\n";var Axg="\n\n";var AUu="Bootloader:\nV\xA0";var AUv="Middleware:\nV\xA0";
var AUw="GUI:\nV\xA0";var AUx="Mainboard: ";var AUy="Torchboard: ";var AUz="Operator not supported.";
var AUA="Unhandled Device::TransponderAssignmentIdChangeMethod: ";var Asf="Unhandled enum value ";
var Asg="UNDEFINED";var AUB="Boot";var AGk="Charge";var AUC="ChargeWarning";var AUD=
"ControlledPowerOff";var AUE="DeviceMain";var AUF="DeviceService";var AGl="DeviceInfo";
var AUG="DeviceBackup";var AGm="DeviceCheck";var Axh="Home";var AGn="Settings";var
AUH="DateTimeSettings";var AGo="UnitsSettings";var AUI="DataAcquisitionSettings";
var AUJ="RegistrationAutomaticSettings";var Q5="RegistrationPresettingsSettings";
var WI="TransponderAssignmentSettings";var AUK="TemperatureSettings";var AUL="WeightGainSettings";
var AUM="DeviceSettings";var AUN="RegistrationSettings";var AUO="InitializationSettings";
var AUP="PremisesSettings";var AUQ="Sleep";var Ahn="Sync";var AGp="EditAnimalData";
var AUR="EditAnimalDataNaisId";var AUS="AnimalList";var AGq="AnimalListFilter";var
AGr="AlarmListFilter";var Axi="WatchListFilter";var Q6="AnimalActionActions";var
AUT="AnimalActionTemperature";var AUU="TemperatureMeasurement";var AUV="AnimalActionWeighing";
var Ash="AnimalActionRate";var AUW="AnimalActionUnregister";var AUX="AnimalActionPerished";
var AUY="AnimalActionNewBornCare";var AUZ="AlarmList";var AU0="ControlMeasure";var
AU1="ControlList";var Asi="RangeTest";var AU2="ListsMain";var AU3="ListsIdManagement";
var AU4="WatchList";var AU5="AnimalListActions";var AU6="AlarmListActions";var AU7=
"ControlListActions";var AU8="WatchListActions";var AU9="EvaluationMenuMain";var
AU_="EvaluationMenuWeights";var AU$="EvaluationLosses";var AGs="EvaluationRatings";
var Asj="EvaluationTemperatures";var AVa="EvaluationWeights";var AVb="EvaluationWeightsRecent";
var AVc="EvaluationBirthWeights";var Axj="AnimalEvaluationFilter";var AkI="NewMenu";
var Aho="NewAnimals";var Axk="NewAnimalManualData";var AnP="MassRecording";var Ahp=
"NewAnimalTransponderData";var AVd="NewAnimalLoss";var Axl="AutoActionScanScreen";
var AGt="ManualActionScanScreen";var Ae8="SetTransponderScreen";var AGu="SetSaveTransponderScreen";
var WJ="NewAnimalSetTransponderScreen";var AkJ="NewAnimalsSetTransponderScreen";
var AnQ="NewAnimalCalvingDataScreen";var AVe="WeightListScreen";var AVf="AnimalSingleInfoScreen";
var AVg="AnimalMultiInfoScreen";var AVh="AnimalRegistrationDetails";var AVi="MultiInfoActionsScreen";
var Ask="FreshCowListScreen";var AGv="FreshCowListActionsScreen";var AGw="FreshCowListFilterScreen";
var AVj="DryCowListScreen";var AVk="DryCowListActionsScreen";var AVl="DryCowListFilterScreen";
var AVm="NoTransponderListScreen";var AVn="NoTransponderListActionsScreen";var AVo=
"NoTransponderListFilterScreen";var AGx="YoungNoTransponderListScreen";var AVp="YoungNoTransponderListActionsScreen";
var Axm="YoungNoTransponderListFilterScreen";var AGy="NoNaisIdListScreen";var AGz=
"NoNaisIdListActionsScreen";var AGA="NoNaisIdListFilterScreen";var AGB="RegistrationsListScreen";
var AGC="RegistrationsListActionsScreen";var AGD="RegistrationsListFilterScreen";
var AVq="ActionListScreen";var AVr="ActionListActionsScreen";var AVs="ActionListFilterScreen";
var AVt="UpdateScreen";var AVu="MotherScanScreen";var AVv="SetSaveNaisIdScreen";
var AVw="PurchasedAnimalsList";var Axn="TextInput";var AGE="Unhandled display mode: ";
var AVx="None";var AGF="Actions Settings";var Ahq="Auto Action";var WK="Menu Item Settings";
var AVy="Rating Type";var ZF="Weighing settings";var AVz="Options";var AVA="AnimalSearch";
var AnR="AnimalSearchUnfiltered";var Ae9="AnimalSearchDriedOff";var AkK="MeasurementReady";
var AGG="AnimalMultiInfoMenu";var AVB="MassRecordingDefaults";var OQ="MassRecordingFields";
var AVC="MassRecordingMenu";var AVD="PurchasedAnimalsListMenu";var AVE="BirthRegistrationsListMenu";
var AVF="Unhandled overlay menu: ";var Asl="Error";var Asm="Idle";var AVG="IdScanned";
var AVH="NotFound";var AGH="Progress";var AGI="Unhandled scan state: ";var AVI="Prediction";
var AGJ="Ready";var AVJ="Unhandled measure state: ";var AVK="Unhandled temperature unit: ";
var AGK="Unhandled species: ";var AVL="English";var AGL="Nederlands";var AGM="Deutsch";
var Axo="Eesti";var AVM="Suomalainen";var AVN="Fran\xE7ais";var AVO="\u0395\u03BB\u03BB\u03B7\u03BD\u03B9\u03BA\u03AC";
var AVP="\u0411\u044A\u043B\u0433\u0430\u0440\u0441\u043A\u0438";var AVQ="Italiano";
var AVR="\u0420\u0443\u0441\u0441\u043A\u0438\u0439";var AVS="Espa\xF1ol";var AVT=
"T\xFCrk\xE7e";var Asn="\u6B63\u9AD4\u5B57/\u7E41\u9AD4\u5B57";var Aso="\u010Ce\u0161tina";
var AGN="Bosanski";var AVU="Norsk";var AVV="\u0423\u043A\u0440\u0430\u0457\u043D\u0441\u044C\u043A\u0438\u0439";
var AGO="Unhandled language: ";var AVW="EN";var AVX="ET";var AVY="EL";var AVZ="ZH";
var AV0="CS";var AV1="BS";var AV2="Unhandled gender: ";var AV3="Unhandled birth type: ";
var AV4="Exporting";var AV5="ImportFinish";var AV6="ImportStart";var AV7="Importing";
var AV8="Init";var AV9="Unhandled sync state: ";var AGP="Unhandled rating attribute: ";
var AGQ="Unhandled assessment: ";var Asp="Illegal boolean value: ";var Axp="Unhandled popup ID:";
var AGR="Unknown";var Axq="Severe Error";var Axr="ErrorsDeviceDriverCheck";var AGS=
"Enter Sleep";var AV_="About";var AV$="InfoSoftwareVersions";var AWa="InfoHardwareVersions";
var AGT="InfoSerial";var AWb="ShutDown";var AWc="SuccessDataSync";var AWd="SuccessResetFactory";
var AWe="SuccessResetAnimalData";var AWf="SuccessCreateBackup";var AWg="SuccessRestoreBackup";
var AWh="CreateBackupInProgress";var AWi="RestoreBackupInProgress";var Axs="FailedCreateBackup";
var AWj="FailedRestoreBackup";var AWk="TechnicalDetails";var Axt="WarningDataSync";
var Asq="WarningFactory";var ZG="WarningResetAnimalData";var Asr="WarningRestart";
var AWl="WarningAutoAction";var AWm="WarningAutoActionNotApplicable";var AWn="WarningNoMenuItem";
var AGU="WarningEnterDemoMode";var AWo="NoAnimalsRegistered";var AGV="MaxNumAnimalsReached";
var AWp="MaxNumRatingsReached";var AWq="MaxNumCalfDeregistrationsReached";var AWr=
"ScanInTransponder";var Ass="WarningScanOverwriteNaisId";var AWs="EarTagNumberTooShort";
var AWt="NoValidCountryCode";var AGW="WarningOutdatedAnimalWeight";var AWu="WarningOutdatedAnimalWeights";
var AWv="WarningWeightEvaluationSingular";var AWw="WarningWeightEvaluationPlural";
var AWx="ScanError";var Aci="ScanNotFound";var AWy="ScannedAnimalNotFound";var AWz=
"ScannedTransponderNotFound";var AWA="AnimalNotFound";var AWB="SuccessUnregister";
var AGX="SuccessUnregisterPerished";var AWC="SuccessCreationNewAnimal";var AWD="SuccessCreationNewAnimals";
var AWE="AnimalCreationInProgress";var AWF="EvaluationInProgress";var AWG="DataSyncInProgress";
var AWH="AddedToAlarm";var AGY="RemovedFromAlarm";var AWI="AddedToWatch";var AWJ=
"RemovedFromWatch";var AWK="AddedToDryOff";var AGZ="RemovedFromDryOff";var AG0="AnimalIdAlreadyExists";
var AWL="AnimalIdAlreadyExistsContinuable";var AWM="MissingAnimalId";var AWN="MissingAnimalIdMother";
var AWO="MissingEartagNumber";var Q7="MissingTransponderId";var Ast="TransponderAlreadyRegistered";
var AG1="TransponderAlreadyRegisteredContinuable";var AG2="HelpAnimalInfoRating";
var AnS="CannotReassignTransponder";var AnT="CannotReassignNaisId";var Axu="WarningResetToDefaultValue";
var AWP="WarningResetThresholds";var AG3="WarningResetTempThresholds";var AWQ="UpdateFirmware";
var AWR="UpdateFirmwareBatteryLow";var AWS="ConfirmFirmwareUpdated";var AWT="ConfirmBootloaderUpdated";
var AWU="QuestionAddAnotherCalfMultiples";var AWV="RemovedAllBirthNoticesPending";
var AWW="RemovedAllPurchasedNoticePending";var AWX="RemovedFromBirthNoticePending";
var AWY="RemovedFromPurchasedNoticePending";var AWZ="SuccessClearAnimalLoss";var
AW0="RemovedAnimalBirth";var AW1="RemovedAnimalPurchased";var AW2="WarningNoActionsForAnimalLoss";
var AW3="SuccessLinkTransponder";var AW4="SuccessUnlinkTransponder";var AW5="SuccessLinkNaisId";
var AW6="WarningDataExportHitBirthFailed";var AnU="SuccessDataExportHitBirth";var
AG4="SuccessDataExportHitBirthDownload";var AW7="WarningDataExportHitPurchasedFailed";
var AG5="SuccessDataExportHitPurchased";var AG6="SuccessDataExportHitPurchasedDownload";
var ZH="WarningDataExportAnimalsFailed";var AG7="SuccessDataExportAnimalsRatings";
var AW8="SuccessDataExportAnimalsDownload";var AG8="WarningNoPremisesID";var AW9=
"WarningNoFlashDrivePresent";var Axv="WarningNoBackupPathPresent";var AW_="WarningNoBackupFilePresent";
var AW$="DemoFunctionNotAvailable";var Axw="WarningImpreciseTimeSetting";var AXa=
"ConfirmationRestoreBackup";var AXb="WarningParsedDateInFutureInvalid";var AXc="WarningParsingDateFailed";
var AG9="WarningParsingNaisIdFailed";var AnV="WarningParsingShortNaisIdWithoutPremisesId";
var AG_="AnimalId";var AXd="FarmId";var AG$="GroupId";var AHa="PersonId";var AkL=
"Unhandled transponder type: ";var AXe="FDX";var AnW="HDX";var AXf="HDX (Urban)";
var AHb="Unhandled transponder protocol: ";var AHc="Illegal RatingMode: ";var AXg=
"Unhandled mass unit: ";var AXh="Max array size is 10";var Axx="Index out of bounds";
var AXi="ERROR: Received more integers than expected!";var AHd="Unhandled double scan action :";
var AXj="Illegal WeightRecordingMode: ";var AXk="Illegal WeightRecordingScope: ";
var AXl="AnimalData";var AXm="Rating";var AXn="Temperature";var AXo="Weight";var
AXp="Alarm infos";var AXq="Control infos";var AXr="Watch infos";var AXs="Fresh cow infos";
var AXt="No transponder infos";var AXu="Dry cow info";var AHe="No nais id infos";
var ZI="Registrations infos";var AXv="Unhandled animal list content:";var Axy="Illegal AutoRegistrationMode: ";
var AXw="Illegal FactoryResetScope: ";var AnX="??";var AXx="Illegal EaseOfDelivery: ";
var AXy="Illegal Whereabouts: ";var AXz="Illegal breed: ";var AXA="Unisex";var Asu=
"Illegal animalIdGenerationMethod: ";var Asv="Ascending";var Asw="Descending";var
Asx="Illegal directionOfCountingName: ";var Asy="Unhandled direction of counting: ";
var Ae_="Unhandled German state: ";var AXB="SH";var AXC="HH";var AXD="NI";var AXE=
"HB";var AXF="NW";var AXG="HE";var AXH="RP";var AXI="BW";var AXJ="BY";var AXK="SL";
var AXL="BB";var AXM="MV";var AXN="SN";var AXO="ST";var Axz="TH";var AXP="One Range Male Female";
var AxA="Two Ranges Male Female";var Asz="Illegal EartagAssignmentMode: ";var AXQ=
"Unhandled code set value ";var AHf="Implement in derived class";var AXR="Illegal HIT-Code: ";
var AHg="Illegal ReasonOfLeaving: ";var AHh="Illegal code: ";var AXS="Undefined";
var AXT="Illegal DeviceComponent: ";var AXU="Unhandled Device::MotherSelectionFilterMode: ";
var AXV="Illegal Device::TimespanDays: ";var AXW="Not connected";var AXX="Host";
var AXY="Device";var AHi="Device CDC";var AXZ="Host MSC";var AX0="Host HID";var AX1=
"Host CDC";var AX2="Illegal animalIdAutoGenerationMethod: ";var AX3="Unhandled month: ";
var AX4="Illegal transponderAssignmentIdChangeMethod: ";var AX5="Unhandled animal table field: ";
var AHj="Unhandled data export destination: ";var AX6="Unhandled list view scope: ";
var AsA="1 ";var AX7="100 ";var AX8="10 ";var AsB="Unhandled weight value precision: ";
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
B6:null,B7:null,CZ:function(AM){if(!AM)return;var Ay=this.B6;while(!!Ay){if(Ay===
AM)throw new Error(B9);Ay=Ay.Ag;}AM.AH=this.B7;if(!!this.B7)this.B7.Ag=AM;this.B7=
AM;if(!this.B6)this.B6=AM;},ANj:function(){return this.B6;},ANo:function(A$D){if(
!!A$D)return A$D.Ag;return null;},DX:function(AHP,ED){var Ay=this.B6;while(!!Ay){
if(Ay.ET===AHP){if(ED===1)return Ay;else if(Ay.Operator===ED)return Ay;}Ay=Ay.Ag;
}return null;},QQ:function(AM){var Ay=this.B6;while(!!Ay){if(Ay===AM){if(!!Ay.AH
)Ay.AH.Ag=Ay.Ag;if(!!Ay.Ag)Ay.Ag.AH=Ay.AH;if(this.B6===Ay)this.B6=Ay.Ag;if(this.
B7===Ay)this.B7=Ay.AH;Ay.Ag=null;Ay.AH=null;return;}Ay=Ay.Ag;}},Gy:function(){var
Bc=A._NewObject(C.Filter,0);var Ay=this.B6;while(!!Ay){Bc.CZ(Ay.AdH());Ay=Ay.Ag;
}return Bc;},_Init:function(aArg){this.__proto__=C.Filter;A.h7++;},_Done:function(
){this.__proto__=null;A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((
B=this.B6)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.B7)&&(B._cycle!=D))B._Mark(
B._cycle=D);if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:
null,_className:"Device::Filter"};C.FilterCriterion={Ag:null,AH:null,ET:-1,Operator:
1,Aa6:false,AdH:function(){return null;},Gy:function(AM){if(!AM)return;this.ET=AM.
ET;this.Operator=AM.Operator;this.Aa6=AM.Aa6;},_Init:function(aArg){this.__proto__=
C.FilterCriterion;A.h7++;},_Done:function(){this.__proto__=null;A.h7--;},_ReInit:
function(){},_Mark:function(D){var B;if((B=this.Ag)&&(B._cycle!=D))B._Mark(B._cycle=
D);if((B=this.AH)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.I)&&(B._cycle!=D
))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:"Device::FilterCriterion"
};C.Int32FilterCriterion={A4:0,AdH:function(){var Ay=A._NewObject(C.Int32FilterCriterion
,0);Ay.Gy(this);return Ay;},Gy:function(AM){C.FilterCriterion.Gy.call(this,AM);var
Ay=(C.Int32FilterCriterion.isPrototypeOf(AM)?AM:null);if(!!Ay)this.A4=Ay.A4;},Initialize:
function(AZ,ED,A1,SR){this.ET=AZ;this.Operator=ED;this.A4=A1;this.Aa6=SR;return this;
},_Init:function(aArg){C.FilterCriterion._Init.call(this,aArg);this.__proto__=C.
Int32FilterCriterion;},_className:"Device::Int32FilterCriterion"};C.DeviceClass={
AC9:0,AC8:0,Avi:0,T_:0,OC:null,Sd:null,QH:null,Sy:null,RD:null,Aq:null,Bq:null,AfW:
null,Ani:null,O$:null,AtU:A.jV,AutoActions:A.jV,AAD:A.jV,AFF:A.jV,AFG:A.jV,Ag9:A.
jV,AF1:A.jV,AF2:A.jV,AAE:A.jV,AF0:A.jV,AF5:A.jV,AAy:A.jV,AAz:A.jV,Aar:100,Kk:0,ALC:
75,Zo:3600,ASt:0,FN:5,Fw:0,KN:50000,O6:0,AEZ:0,AiQ:0,Aqj:0,Aqi:0,AQk:1,AQj:1,Ajs:
0,AQl:1,AwQ:0,AeR:0,Ap_:10,AS_:5,AC1:60,Ave:0,Ow:1,WhereAbouts:0,Vl:0,Ahh:0,AwJ:
3,ABA:0,Al0:0,AfY:1,AkA:0,Abk:0,ApM:0,AQx:12,AMw:11,Breed:0,EartagNrAssignmentMode:
0,Aum:0,ABt:0,ABs:0,H_:5,AAx:2,ApO:0,AQC:8,ANa:2,ATV:0,D2:0,AKL:0,Jy:0,Gender:2,
WeightRecordingScope:1,WeightRecordingMode:1,AnimalType:0,MassUnit:0,AutoRegistrationMode:
0,RatingMode:0,SyncState:0,OverlayMenu:0,TemperatureUnit:0,Language:0,MeasureState:
0,ScanState:0,Ky:3,Aea:true,AP8:false,AlU:true,Amn:false,Amj:true,Hv:false,ATC:false
,Amk:false,ATT:false,Ar6:false,AC7:false,Al9:false,UpdateActiveScreen:function(AJ
){if(this.Ky===AJ)return;this.Ky=AJ;A.abo([this,this.ADj,this.A_S],0);},YT:function(
E){if(this.K&&this.K.YT)return this.K.YT.apply(this,arguments);else return C.DeviceClass.
BrI.apply(this,arguments);},BrI:function(E){},A_S:function(Ap){this.YT(Ap);},UpdateBatteryChargeState:
function(AJ){if(this.Aar===AJ)return;this.Aar=AJ;A.abo([this,this.Avl,this.AxG],
0);},AvH:function(E){if(this.K&&this.K.AvH)return this.K.AvH.apply(this,arguments
);else return C.DeviceClass.BrU.apply(this,arguments);},BrU:function(E){A.ab5("%s"
,BC);},AxG:function(Ap){this.AvH(Ap);},UpdateChargeActive:function(AJ){if(this.Al9===
AJ)return;this.Al9=AJ;A.abo([this,this.Avo,this.AxH],0);},ADL:function(E){if(this.
K&&this.K.ADL)return this.K.ADL.apply(this,arguments);else return C.DeviceClass.
Br0.apply(this,arguments);},Br0:function(E){A.ab5("%s",EW);},AxH:function(Ap){this.
ADL(Ap);},UpdateScanState:function(AJ){var B;if(this.ScanState===AJ)return;this.
ScanState=AJ;A.abo([this,this.ARd,this.AYB],0);A._GetAutoObject(C.Helper).BxS(this
);},Arf:function(E){if(this.K&&this.K.Arf)return this.K.Arf.apply(this,arguments
);else return C.DeviceClass.BsF.apply(this,arguments);},BsF:function(E){A.ab5("%s"
,He);},AYB:function(Ap){this.Arf(Ap);},UpdateMeasureState:function(AJ){if(this.MeasureState===
AJ)return;this.MeasureState=AJ;A.abo([this,this.ADq,this.AHy],0);},Av3:function(
E){if(this.K&&this.K.Av3)return this.K.Av3.apply(this,arguments);else return C.DeviceClass.
Bsn.apply(this,arguments);},Bsn:function(E){A.ab5("%s",I7);},AHy:function(Ap){this.
Av3(Ap);},UpdateTempValue:function(AJ){if(this.Kk===AJ)return;this.Kk=AJ;A.abo([
this,this.ADt,this.AHA],0);},Awb:function(E){if(this.K&&this.K.Awb)return this.K.
Awb.apply(this,arguments);else return C.DeviceClass.BsL.apply(this,arguments);},
BsL:function(E){A.ab5("%s",IH);},AHA:function(Ap){this.Awb(Ap);},Am9:function(E){
if(this.K&&this.K.Am9)return this.K.Am9.apply(this,arguments);else return C.DeviceClass.
Bsh.apply(this,arguments);},Bsh:function(E){},A_7:function(Ap){this.Am9(Ap);},Awc:
function(E){if(this.K&&this.K.Awc)return this.K.Awc.apply(this,arguments);else return C.
DeviceClass.BsM.apply(this,arguments);},BsM:function(E){},AsF:function(Ap){this.
Awc(Ap);},ADJ:function(E){if(this.K&&this.K.ADJ)return this.K.ADJ.apply(this,arguments
);else return C.DeviceClass.BrZ.apply(this,arguments);},BrZ:function(E){},A_0:function(
Ap){this.ADJ(Ap);},AEh:function(E){if(this.K&&this.K.AEh)return this.K.AEh.apply(
this,arguments);else return C.DeviceClass.Bsp.apply(this,arguments);},Bsp:function(
E){},AYu:function(Ap){this.AEh(Ap);},UpdateMonitoring:function(AJ){if(this.AC7===
AJ)return;this.AC7=AJ;A.abo([this,this.AQ5,this.AYu],0);},UpdateDataTable:function(
A$E){var B;switch(A$E){case 0:A.pe([B=this.Aq,B.AjT],this);break;case 1:A.pe([B=
this.Bq,B.AjT],this);break;case 3:A.pe([B=this.AfW,B.AjT],this);break;case 4:A.pe([
B=this.O$,B.AjT],this);break;case 2:A.ab5("%s",OM);break;default:A.ab5("%s%e",PQ
,A$E);}},AwI:function(){if(this.K&&this.K.AwI)return this.K.AwI.apply(this,arguments
);else return C.DeviceClass.Bte.apply(this,arguments);},Bte:function(){},Aha:function(
){if(this.K&&this.K.Aha)return this.K.Aha.apply(this,arguments);else return C.DeviceClass.
Bth.apply(this,arguments);},Bth:function(){},AeN:function(){if(this.K&&this.K.AeN
)return this.K.AeN.apply(this,arguments);else return C.DeviceClass.Btf.apply(this
,arguments);},Btf:function(){},Anu:function(){if(this.K&&this.K.Anu)return this.
K.Anu.apply(this,arguments);else return C.DeviceClass.Bti.apply(this,arguments);
},Bti:function(){},UpdateLanguage:function(AJ){if(this.Language===AJ)return;this.
Language=AJ;switch(AJ){case 14:A._SetLanguage(1);break;case 13:A._SetLanguage(2);
break;case 6:A._SetLanguage(3);break;case 11:A._SetLanguage(4);break;case 10:A._SetLanguage(
5);break;case 12:A._SetLanguage(6);break;case 5:A._SetLanguage(7);break;case 3:A.
_SetLanguage(8);break;case 1:A._SetLanguage(9);break;case 8:A._SetLanguage(10);break;
case 4:A._SetLanguage(11);break;case 15:A._SetLanguage(13);break;case 9:A._SetLanguage(
15);break;case 2:A._SetLanguage(16);break;case 7:A._SetLanguage(17);break;case 16:
A._SetLanguage(18);break;default:A._SetLanguage(0);}A.abo([this,this.A60,this.A_7
],0);},UpdateTemperatureUnit:function(AJ){if(this.TemperatureUnit===AJ)return;this.
TemperatureUnit=AJ;A.abo([this,this.AqP,this.AsF],0);},UpdateBrightness:function(
AJ){if(this.ALC===AJ)return;this.ALC=AJ;A.abo([this,this.A6P,this.A_0],0);},SetSystemTime:
function(Ahz){if(this.K&&this.K.SetSystemTime)return this.K.SetSystemTime.apply(
this,arguments);else return C.DeviceClass.Btc.apply(this,arguments);},Btc:function(
Ahz){},AwC:function(){if(this.K&&this.K.AwC)return this.K.AwC.apply(this,arguments
);else return C.DeviceClass.A_I.apply(this,arguments);},A_I:function(){},AFa:function(
){if(this.K&&this.K.AFa)return this.K.AFa.apply(this,arguments);else return C.DeviceClass.
A_G.apply(this,arguments);},A_G:function(){},BlP:function(){},UpdateOverlayMenu:
function(AJ){if(this.OverlayMenu===AJ)return;this.OverlayMenu=AJ;A.abo([this,this.
Avz,this.AxO],0);},Cj:function(E){if(this.K&&this.K.Cj)return this.K.Cj.apply(this
,arguments);else return C.DeviceClass.BsA.apply(this,arguments);},BsA:function(E
){},AxO:function(Ap){this.Cj(Ap);},Awh:function(E){if(this.K&&this.K.Awh)return this.
K.Awh.apply(this,arguments);else return C.DeviceClass.BsV.apply(this,arguments);
},BsV:function(E){},A$f:function(Ap){this.Awh(Ap);},UpdateUnderTemp:function(AJ){
if(this.Zo===AJ)return;this.Zo=AJ;A.abo([this,this.A7n,this.A$f],0);},UpdateSyncState:
function(AJ){if(this.SyncState===AJ)return;this.SyncState=AJ;A.abo([this,this.ARf
,this.AYD],0);},AbE:function(E){if(this.K&&this.K.AbE)return this.K.AbE.apply(this
,arguments);else return C.DeviceClass.BsK.apply(this,arguments);},BsK:function(E
){A.ab5("%s",PR);},AYD:function(Ap){this.AbE(Ap);},ABW:function(){if(this.K&&this.
K.ABW)return this.K.ABW.apply(this,arguments);else return C.DeviceClass.BrA.apply(
this,arguments);},BrA:function(){return A.jV;},UpdatePopup:function(Kr,AZk,AZg,AZn
){this.A6(Kr,AZk,AZg,AZn,[this,this.BxA]);},PopupStateChanged:function(Kr,Ae){if(
this.K&&this.K.PopupStateChanged)return this.K.PopupStateChanged.apply(this,arguments
);else return C.DeviceClass.Bs7.apply(this,arguments);},Bs7:function(Kr,Ae){},AEK:
function(E){if(this.K&&this.K.AEK)return this.K.AEK.apply(this,arguments);else return C.
DeviceClass.BsX.apply(this,arguments);},BsX:function(E){},A$g:function(Ap){this.
AEK(Ap);},UpdateVibrationOnKeypressEnabled:function(AJ){if(this.Ar6===AJ)return;
this.Ar6=AJ;A.abo([this,this.A7o,this.A$g],0);},Aev:function(E){if(this.K&&this.
K.Aev)return this.K.Aev.apply(this,arguments);else return C.DeviceClass.BsW.apply(
this,arguments);},BsW:function(E){},AHB:function(Ap){this.Aev(Ap);},UpdateVibrationOn:
function(A$6){if(this.ATT===A$6)return;this.ATT=A$6;A.abo([this,this.ADu,this.AHB
],0);},A6:function(Kr,AZk,AZg,AZn,BuJ){var AfN=A._NewObject(C.PopupContext,0);AfN.
Id=Kr;AfN.Show=AZk;AfN.Akc=AZg;AfN.Akw=AZn;AfN.AES=BuJ;this.Ani.Trigger(AfN,false
);},BxA:function(G){var As=(C.PopupContext.isPrototypeOf(G)?G:null);if(!!As)this.
PopupStateChanged(As.Id,As.PopupState);},Av_:function(E){if(this.K&&this.K.Av_)return this.
K.Av_.apply(this,arguments);else return C.DeviceClass.BsE.apply(this,arguments);
},BsE:function(E){},AYA:function(Ap){this.Av_(Ap);},UpdateRatingMode:function(AJ
){if(this.RatingMode===AJ)return;this.RatingMode=AJ;A.abo([this,this.ARc,this.AYA
],0);},Aem:function(E){if(this.K&&this.K.Aem)return this.K.Aem.apply(this,arguments
);else return C.DeviceClass.Br$.apply(this,arguments);},Br$:function(E){},AsE:function(
Ap){this.Aem(Ap);},UpdateFlashLightOn:function(A$N){if(this.Amk===A$N)return;this.
Amk=A$N;A.abo([this,this.AqM,this.AsE],0);},T4:function(E){if(this.K&&this.K.T4)
return this.K.T4.apply(this,arguments);else return C.DeviceClass.BsP.apply(this,
arguments);},BsP:function(E){},AYE:function(Ap){this.T4(Ap);},UpdateTopLightOn:function(
A$1){if(this.ATC===A$1)return;this.ATC=A$1;A.abo([this,this.ARh,this.AYE],0);},V$:
function(E){if(this.K&&this.K.V$)return this.K.V$.apply(this,arguments);else return C.
DeviceClass.BsD.apply(this,arguments);},BsD:function(E){},Bty:function(Ap){this.
V$(Ap);},UpdateRGBTopLight:function(A$W){if(this.ASt===A$W)return;this.ASt=A$W;A.
abo([this,this.BiF,this.Bty],0);},AvG:function(E){if(this.K&&this.K.AvG)return this.
K.AvG.apply(this,arguments);else return C.DeviceClass.BrT.apply(this,arguments);
},BrT:function(E){},Btq:function(Ap){this.AvG(Ap);},UpdateAutoRegistrationMode:function(
A$A){if(this.AutoRegistrationMode===A$A)return;this.AutoRegistrationMode=A$A;A.abo([
this,this.Bh5,this.Btq],0);},Arg:function(E){if(this.K&&this.K.Arg)return this.K.
Arg.apply(this,arguments);else return C.DeviceClass.BsG.apply(this,arguments);},
BsG:function(E){A.ab5("%s",CO);},AYC:function(Ap){this.Arg(Ap);},UpdateScanTransponder:
function(Kr,A$4,A$3){if(((this.OC.Id===Kr)&&(this.OC.TransponderType===A$4))&&(this.
OC.TransponderProtocol===A$3))return;this.OC.OnSetId(Kr);this.OC.AR8(A$4);this.OC.
AR7(A$3);A.abo([this,this.ARe,this.AYC],0);},PB:function(E){if(this.K&&this.K.PB
)return this.K.PB.apply(this,arguments);else return C.DeviceClass.Br3.apply(this
,arguments);},Br3:function(E){},Acj:function(Ap){this.PB(Ap);},UpdateDigitsID:function(
A$I){if(this.FN===A$I)return;this.FN=A$I;A.abo([this,this.Abq,this.Acj],0);},QM:
function(E){if(this.K&&this.K.QM)return this.K.QM.apply(this,arguments);else return C.
DeviceClass.Bsz.apply(this,arguments);},Bsz:function(E){},Ack:function(Ap){this.
QM(Ap);},UpdateOffsetID:function(A$T){if(this.Fw===A$T)return;this.Fw=A$T;A.abo([
this,this.Abr,this.Ack],0);},AEO:function(E){if(this.K&&this.K.AEO)return this.K.
AEO.apply(this,arguments);else return C.DeviceClass.Bs4.apply(this,arguments);},
Bs4:function(E){A.ab5("%s",E4);},AHC:function(Ap){this.AEO(Ap);},UpdateWeightValue:
function(AJ){if(this.KN===AJ)return;this.KN=AJ;A.abo([this,this.ADv,this.AHC],0);
},Av0:function(E){if(this.K&&this.K.Av0)return this.K.Av0.apply(this,arguments);
else return C.DeviceClass.Bsk.apply(this,arguments);},Bsk:function(E){},AYt:function(
Ap){this.Av0(Ap);},UpdateMassUnit:function(AJ){if(this.MassUnit===AJ)return;this.
MassUnit=AJ;A.abo([this,this.AQ4,this.AYt],0);},AqS:function(E){if(this.K&&this.
K.AqS)return this.K.AqS.apply(this,arguments);else return C.DeviceClass.A_C.apply(
this,arguments);},A_C:function(E){},A_P:function(Ap){this.AqS(Ap);},AqT:function(
E){if(this.K&&this.K.AqT)return this.K.AqT.apply(this,arguments);else return C.DeviceClass.
A_D.apply(this,arguments);},A_D:function(E){},AYm:function(Ap){this.AqT(Ap);},UpdateActiveActions:
function(AJ){if(this.O6===AJ)return;this.O6=AJ;A.abo([this,this.A6z,this.A_P],0);
},UpdateActiveActionsOrder:function(AJ){if(this.AtU===AJ)return;this.AtU=AJ;A.abo([
this,this.AQP,this.AYm],0);},Abv:function(E){if(this.K&&this.K.Abv)return this.K.
Abv.apply(this,arguments);else return C.DeviceClass.A_E.apply(this,arguments);},
A_E:function(E){},A_Y:function(Ap){this.Abv(Ap);},UpdateAutoActions:function(AJ){
if(this.AutoActions===AJ)return;this.AutoActions=AJ;A.abo([this,this.A6L,this.A_Y
],0);},AFy:function(){if(this.K&&this.K.AFy)return this.K.AFy.apply(this,arguments
);else return C.DeviceClass.Btg.apply(this,arguments);},Btg:function(){},ArX:function(
){if(this.K&&this.K.ArX)return this.K.ArX.apply(this,arguments);else return C.DeviceClass.
Btk.apply(this,arguments);},Btk:function(){},DT:function(E){if(this.K&&this.K.DT
)return this.K.DT.apply(this,arguments);else return C.DeviceClass.BrQ.apply(this
,arguments);},BrQ:function(E){},Btp:function(Ap){this.DT(Ap);},UpdateAnimalType:
function(Ec){if(this.AnimalType===Ec)return;this.AnimalType=Ec;A.abo([this,this.
PA,this.Btp],0);},Awi:function(E){if(this.K&&this.K.Awi)return this.K.Awi.apply(
this,arguments);else return C.DeviceClass.Bs2.apply(this,arguments);},Bs2:function(
E){},A$l:function(Ap){this.Awi(Ap);},UpdateWeightRecordingMode:function(A$8){if(
this.WeightRecordingMode===A$8)return;this.WeightRecordingMode=A$8;A.abo([this,this.
A7w,this.A$l],0);},AEp:function(E){if(this.K&&this.K.AEp)return this.K.AEp.apply(
this,arguments);else return C.DeviceClass.BsB.apply(this,arguments);},BsB:function(
E){A.ab5("%s",Ln);},AYy:function(Ap){this.AEp(Ap);},UpdatePredictedTempValue:function(
AJ){if(this.AEZ===AJ)return;this.AEZ=AJ;A.abo([this,this.AQ$,this.AYy],0);},Sq:function(
L0){if(this.K&&this.K.Sq)return this.K.Sq.apply(this,arguments);else return C.DeviceClass.
Btb.apply(this,arguments);},Btb:function(L0){},ADR:function(E){if(this.K&&this.K.
ADR)return this.K.ADR.apply(this,arguments);else return C.DeviceClass.Br2.apply(
this,arguments);},Br2:function(E){},AHv:function(Ap){this.ADR(Ap);},UpdateDemoMode:
function(AJ){if(this.Hv===AJ)return;this.Hv=AJ;A.abo([this,this.ADn,this.AHv],0);
},ADz:function(E){if(this.K&&this.K.ADz)return this.K.ADz.apply(this,arguments);
else return C.DeviceClass.BrJ.apply(this,arguments);},BrJ:function(E){},A_T:function(
Ap){this.ADz(Ap);},UpdateAgeRegistration:function(A$S){if(this.AiQ===A$S)return;
this.AiQ=A$S;A.abo([this,this.A6E,this.A_T],0);},Awj:function(E){if(this.K&&this.
K.Awj)return this.K.Awj.apply(this,arguments);else return C.DeviceClass.Bs3.apply(
this,arguments);},Bs3:function(E){},A$m:function(Ap){this.Awj(Ap);},UpdateWeightRecordingScope:
function(A$X){if(this.WeightRecordingScope===A$X)return;this.WeightRecordingScope=
A$X;A.abo([this,this.A7x,this.A$m],0);},JG:function(E){if(this.K&&this.K.JG)return this.
K.JG.apply(this,arguments);else return C.DeviceClass.Bsd.apply(this,arguments);}
,Bsd:function(E){},AYs:function(Ap){this.JG(Ap);},UpdateGender:function(LX){if(this.
Gender===LX)return;this.Gender=LX;A.abo([this,this.V6,this.AYs],0);},Aq9:function(
E){if(this.K&&this.K.Aq9)return this.K.Aq9.apply(this,arguments);else return C.DeviceClass.
Bsf.apply(this,arguments);},Bsf:function(E){},AxK:function(Ap){this.Aq9(Ap);},UpdateIDLastUsedMale:
function(Q8){if(this.Aqj===Q8)return;this.Aqj=Q8;A.abo([this,this.Avt,this.AxK],
0);},Aq8:function(E){if(this.K&&this.K.Aq8)return this.K.Aq8.apply(this,arguments
);else return C.DeviceClass.Bse.apply(this,arguments);},Bse:function(E){},AxJ:function(
Ap){this.Aq8(Ap);},UpdateIDLastUsedFemale:function(Q8){if(this.Aqi===Q8)return;this.
Aqi=Q8;A.abo([this,this.Avs,this.AxJ],0);},Abu:function(E){if(this.K&&this.K.Abu
)return this.K.Abu.apply(this,arguments);else return C.DeviceClass.BrO.apply(this
,arguments);},BrO:function(E){},AHt:function(Ap){this.Abu(Ap);},UpdateAnimalListContent:
function(AJ){if(this.Jy===AJ)return;this.Jy=AJ;A.abo([this,this.ADk,this.AHt],0);
},ADB:function(E){if(this.K&&this.K.ADB)return this.K.ADB.apply(this,arguments);
else return C.DeviceClass.BrK.apply(this,arguments);},BrK:function(E){},A_U:function(
Ap){this.ADB(Ap);},UpdateAlarmListAction:function(AJ){if(this.AKL===AJ)return;this.
AKL=AJ;A.abo([this,this.A6G,this.A_U],0);},ADU:function(E){if(this.K&&this.K.ADU
)return this.K.ADU.apply(this,arguments);else return C.DeviceClass.Br_.apply(this
,arguments);},Br_:function(E){},A_3:function(Ap){this.ADU(Ap);},UpdateFlashLightInMeasureState:
function(A$O){if(this.Amj===A$O)return;this.Amj=A$O;A.abo([this,this.A6S,this.A_3
],0);},Aei:function(E){if(this.K&&this.K.Aei)return this.K.Aei.apply(this,arguments
);else return C.DeviceClass.BrN.apply(this,arguments);},BrN:function(E){},AYo:function(
Ap){this.Aei(Ap);},UpdateAnimalInfoContent:function(AJ){if(this.D2===AJ)return;this.
D2=AJ;A.abo([this,this.AQR,this.AYo],0);},AEN:function(E){if(this.K&&this.K.AEN)
return this.K.AEN.apply(this,arguments);else return C.DeviceClass.BsY.apply(this
,arguments);},BsY:function(E){},A$h:function(Ap){this.AEN(Ap);},UpdateWatchListAction:
function(AJ){if(this.ATV===AJ)return;this.ATV=AJ;A.abo([this,this.A7s,this.A$h],
0);},ADX:function(E){if(this.K&&this.K.ADX)return this.K.ADX.apply(this,arguments
);else return C.DeviceClass.Bsa.apply(this,arguments);},Bsa:function(E){},A_5:function(
Ap){this.ADX(Ap);},UpdateFreshCowListAction:function(AJ){if(this.ANa===AJ)return;
this.ANa=AJ;A.abo([this,this.A6U,this.A_5],0);},ArE:function(G){if(this.K&&this.
K.ArE)return this.K.ArE.apply(this,arguments);else return C.DeviceClass.Bs8.apply(
this,arguments);},Bs8:function(G){},BC1:function(s){this.ArE(s);},ArG:function(G
){if(this.K&&this.K.ArG)return this.K.ArG.apply(this,arguments);else return C.DeviceClass.
Bs_.apply(this,arguments);},Bs_:function(G){},BC3:function(s){this.ArG(s);},AvE:
function(E){if(this.K&&this.K.AvE)return this.K.AvE.apply(this,arguments);else return C.
DeviceClass.BrR.apply(this,arguments);},BrR:function(E){},A_W:function(Ap){this.
AvE(Ap);},Ari:function(E){if(this.K&&this.K.Ari)return this.K.Ari.apply(this,arguments
);else return C.DeviceClass.BsN.apply(this,arguments);},BsN:function(E){},A$c:function(
Ap){this.Ari(Ap);},Arj:function(E){if(this.K&&this.K.Arj)return this.K.Arj.apply(
this,arguments);else return C.DeviceClass.BsO.apply(this,arguments);},BsO:function(
E){},A$d:function(Ap){this.Arj(Ap);},ArI:function(G){if(this.K&&this.K.ArI)return this.
K.ArI.apply(this,arguments);else return C.DeviceClass.Bs$.apply(this,arguments);
},Bs$:function(G){},BC4:function(s){this.ArI(s);},UpdateTemperaturesLowString:function(
AJ){if(this.AFG===AJ)return;this.AFG=AJ;A.abo([this,this.A7j,this.A$d],0);},UpdateTemperaturesHighString:
function(AJ){if(this.AFF===AJ)return;this.AFF=AJ;A.abo([this,this.A7i,this.A$c],
0);},UpdateAnimalTypesString:function(AJ){if(this.AAD===AJ)return;this.AAD=AJ;A.
abo([this,this.A6J,this.A_W],0);},AEk:function(E){if(this.K&&this.K.AEk)return this.
K.AEk.apply(this,arguments);else return C.DeviceClass.Bsy.apply(this,arguments);
},Bsy:function(E){},AYw:function(Ap){this.AEk(Ap);},UpdateNoTransponderListAction:
function(AJ){if(this.AQC===AJ)return;this.AQC=AJ;A.abo([this,this.AQ8,this.AYw],
0);},AvW:function(E){if(this.K&&this.K.AvW)return this.K.AvW.apply(this,arguments
);else return C.DeviceClass.Bsc.apply(this,arguments);},Bsc:function(E){},Btu:function(
Ap){this.AvW(Ap);},UpdateFreshCowsHideMeasured:function(AJ){if(this.Amn===AJ)return;
this.Amn=AJ;A.abo([this,this.Bin,this.Btu],0);},Arb:function(E){if(this.K&&this.
K.Arb)return this.K.Arb.apply(this,arguments);else return C.DeviceClass.Bsv.apply(
this,arguments);},Bsv:function(E){},A_$:function(Ap){this.Arb(Ap);},UpdateNaisIdLastUsedMale:
function(WU){if(this.AC9===WU)return;this.AC9=WU;A.abo([this,this.A68,this.A_$],
0);},Ara:function(E){if(this.K&&this.K.Ara)return this.K.Ara.apply(this,arguments
);else return C.DeviceClass.Bsu.apply(this,arguments);},Bsu:function(E){},A__:function(
Ap){this.Ara(Ap);},UpdateNaisIdLastUsedFemale:function(WU){if(this.AC8===WU)return;
this.AC8=WU;A.abo([this,this.A67,this.A__],0);},Av6:function(E){if(this.K&&this.
K.Av6)return this.K.Av6.apply(this,arguments);else return C.DeviceClass.Bss.apply(
this,arguments);},Bss:function(E){},AxM:function(Ap){this.Av6(Ap);},UpdateNaisIdIncrementMale:
function(AkU){if(this.AQk===AkU)return;this.AQk=AkU;A.abo([this,this.Avw,this.AxM
],0);},Av5:function(E){if(this.K&&this.K.Av5)return this.K.Av5.apply(this,arguments
);else return C.DeviceClass.Bsr.apply(this,arguments);},Bsr:function(E){},AxL:function(
Ap){this.Av5(Ap);},UpdateNaisIdIncrementFemale:function(AkU){if(this.AQj===AkU)return;
this.AQj=AkU;A.abo([this,this.Avv,this.AxL],0);},UpdateFirmware:function(){if(this.
K&&this.K.UpdateFirmware)return this.K.UpdateFirmware.apply(this,arguments);else
return C.DeviceClass.A_J.apply(this,arguments);},A_J:function(){},Am4:function(E
){if(this.K&&this.K.Am4)return this.K.Am4.apply(this,arguments);else return C.DeviceClass.
BrW.apply(this,arguments);},BrW:function(E){},A_Z:function(Ap){this.Am4(Ap);},UpdateBootloaderMessage:
function(AJ){if(this.ApO===AJ)return;this.ApO=AJ;A.abo([this,this.A6O,this.A_Z],
0);},ADx:function(E){if(this.K&&this.K.ADx)return this.K.ADx.apply(this,arguments
);else return C.DeviceClass.BrE.apply(this,arguments);},BrE:function(E){},A_O:function(
Ap){this.ADx(Ap);},UpdateActionListAction:function(AJ){if(this.AAx===AJ)return;this.
AAx=AJ;A.abo([this,this.A6y,this.A_O],0);},AvC:function(E){if(this.K&&this.K.AvC
)return this.K.AvC.apply(this,arguments);else return C.DeviceClass.BrF.apply(this
,arguments);},BrF:function(E){},Bto:function(Ap){this.AvC(Ap);},UpdateActionListHideMeasured:
function(AJ){if(this.AlU===AJ)return;this.AlU=AJ;A.abo([this,this.Bh1,this.Bto],
0);},TY:function(E){if(this.K&&this.K.TY)return this.K.TY.apply(this,arguments);
else return C.DeviceClass.BrM.apply(this,arguments);},BrM:function(E){},AnZ:function(
Ap){this.TY(Ap);},UpdateAnimalIdGenerationMethod:function(Bab){if(this.H_===Bab)
return;this.H_=Bab;A.abo([this,this.AmV,this.AnZ],0);},AvP:function(E){if(this.K&&
this.K.AvP)return this.K.AvP.apply(this,arguments);else return C.DeviceClass.Br4.
apply(this,arguments);},Br4:function(E){},AYq:function(Ap){this.AvP(Ap);},UpdateDirectionOfCountingFemale:
function(AkN){if(this.ABs===AkN)return;this.ABs=AkN;A.abo([this,this.AQX,this.AYq
],0);},AvQ:function(E){if(this.K&&this.K.AvQ)return this.K.AvQ.apply(this,arguments
);else return C.DeviceClass.Br5.apply(this,arguments);},Br5:function(E){},AYr:function(
Ap){this.AvQ(Ap);},UpdateDirectionOfCountingMale:function(AkN){if(this.ABt===AkN
)return;this.ABt=AkN;A.abo([this,this.AQY,this.AYr],0);},AvR:function(E){if(this.
K&&this.K.AvR)return this.K.AvR.apply(this,arguments);else return C.DeviceClass.
Br6.apply(this,arguments);},Br6:function(E){},AHw:function(Ap){this.AvR(Ap);},UpdateDirectionOfCountingUnisex:
function(AkN){if(this.Aum===AkN)return;this.Aum=AkN;A.abo([this,this.ADo,this.AHw
],0);},Aq_:function(E){if(this.K&&this.K.Aq_)return this.K.Aq_.apply(this,arguments
);else return C.DeviceClass.Bsg.apply(this,arguments);},Bsg:function(E){},An0:function(
Ap){this.Aq_(Ap);},UpdateIDLastUsedUnisex:function(Q8){if(this.Ajs===Q8)return;this.
Ajs=Q8;A.abo([this,this.AmY,this.An0],0);},Arc:function(E){if(this.K&&this.K.Arc
)return this.K.Arc.apply(this,arguments);else return C.DeviceClass.Bsw.apply(this
,arguments);},Bsw:function(E){},AYv:function(Ap){this.Arc(Ap);},UpdateNaisIdLastUsedUnisex:
function(WU){if(this.Avi===WU)return;this.Avi=WU;A.abo([this,this.AQ6,this.AYv],
0);},Av7:function(E){if(this.K&&this.K.Av7)return this.K.Av7.apply(this,arguments
);else return C.DeviceClass.Bst.apply(this,arguments);},Bst:function(E){},AxN:function(
Ap){this.Av7(Ap);},UpdateNaisIdIncrementUnisex:function(AkU){if(this.AQl===AkU)return;
this.AQl=AkU;A.abo([this,this.Avx,this.AxN],0);},AjZ:function(E){if(this.K&&this.
K.AjZ)return this.K.AjZ.apply(this,arguments);else return C.DeviceClass.Br8.apply(
this,arguments);},Br8:function(E){},AxI:function(Ap){this.AjZ(Ap);},UpdateEartagNrAssignmentMode:
function(AkO){if(this.EartagNrAssignmentMode===AkO)return;this.EartagNrAssignmentMode=
AkO;A.abo([this,this.Avr,this.AxI],0);},NM:function(E){if(this.K&&this.K.NM)return this.
K.NM.apply(this,arguments);else return C.DeviceClass.BrY.apply(this,arguments);}
,BrY:function(E){},Bts:function(Ap){this.NM(Ap);},UpdateBreed:function(Acr){if(this.
Breed===Acr)return;this.Breed=Acr;A.abo([this,this.Avn,this.Bts],0);},AEe:function(
E){if(this.K&&this.K.AEe)return this.K.AEe.apply(this,arguments);else return C.DeviceClass.
Bso.apply(this,arguments);},Bso:function(E){},Btw:function(Ap){this.AEe(Ap);},UpdateMiddlewareVersions:
function(P0,AZc,AZd,AZj,AY3){this.Sd.OnSetTimestamp(P0);this.Sd.AD$(AZc);this.Sd.
AEg(AZd);this.Sd.AEs(AZj);this.Sd.ADP(AY3);A.abo([this,this.BiA,this.Btw],0);},AD_:
function(E){if(this.K&&this.K.AD_)return this.K.AD_.apply(this,arguments);else return C.
DeviceClass.Bsi.apply(this,arguments);},Bsi:function(E){},Btv:function(Ap){this.
AD_(Ap);},UpdateMainboardVersions:function(P0,AZa,AZb,AY$,AZp,AZq,AZo){this.QH.OnSetTimestamp(
P0);this.QH.AD8(AZa);this.QH.AD9(AZb);this.QH.AD7(AY$);this.QH.AEF(AZp);this.QH.
AEG(AZq);this.QH.AEE(AZo);A.abo([this,this.Biy,this.Btv],0);},AEH:function(E){if(
this.K&&this.K.AEH)return this.K.AEH.apply(this,arguments);else return C.DeviceClass.
BsQ.apply(this,arguments);},BsQ:function(E){},BtC:function(Ap){this.AEH(Ap);},UpdateTorchboardVersions:
function(P0,AZa,AZb,AY$,AZp,AZq,AZo){this.Sy.OnSetTimestamp(P0);this.Sy.AD8(AZa);
this.Sy.AD9(AZb);this.Sy.AD7(AY$);this.Sy.AEF(AZp);this.Sy.AEG(AZq);this.Sy.AEE(
AZo);A.abo([this,this.BiW,this.BtC],0);},ADF:function(E){if(this.K&&this.K.ADF)return this.
K.ADF.apply(this,arguments);else return C.DeviceClass.BrX.apply(this,arguments);
},BrX:function(E){},Btr:function(Ap){this.ADF(Ap);},UpdateBootloaderVersions:function(
P0,AZc,AZd,AZj,AY3){this.RD.OnSetTimestamp(P0);this.RD.AD$(AZc);this.RD.AEg(AZd);
this.RD.AEs(AZj);this.RD.ADP(AY3);A.abo([this,this.Bh8,this.Btr],0);},ADS:function(
E){if(this.K&&this.K.ADS)return this.K.ADS.apply(this,arguments);else return C.DeviceClass.
Br7.apply(this,arguments);},Br7:function(E){},A_2:function(Ap){this.ADS(Ap);},UpdateDryCowListAction:
function(AJ){if(this.AMw===AJ)return;this.AMw=AJ;A.abo([this,this.A6Q,this.A_2],
0);},AIl:function(AY5){if(this.K&&this.K.AIl)return this.K.AIl.apply(this,arguments
);else return C.DeviceClass.BtO.apply(this,arguments);},BtO:function(AY5){return false;
},AEj:function(E){if(this.K&&this.K.AEj)return this.K.AEj.apply(this,arguments);
else return C.DeviceClass.Bsx.apply(this,arguments);},Bsx:function(E){},A$a:function(
Ap){this.AEj(Ap);},UpdateNoNaisIdListAction:function(AJ){if(this.AQx===AJ)return;
this.AQx=AJ;A.abo([this,this.A69,this.A$a],0);},ADE:function(E){if(this.K&&this.
K.ADE)return this.K.ADE.apply(this,arguments);else return C.DeviceClass.BrV.apply(
this,arguments);},BrV:function(E){},AHu:function(Ap){this.ADE(Ap);},UpdateBirthListView:
function(AJ){if(this.ApM===AJ)return;this.ApM=AJ;A.abo([this,this.ADl,this.AHu],
0);},BatchResetBirthNoticePending:function(){var B5=A._NewObject(C.Animal,0);var
P;var Aio=0;var AcK=A._GetAutoObject(C.Device).Aq.Filter;var Bc=A._GetAutoObject(
C.Helper).ANf();A._GetAutoObject(C.Device).Aq.Bm(Bc);for(P=0;P<A._GetAutoObject(
C.Device).Aq.Ch();P++){B5.EK(P,A._GetAutoObject(C.Device).Aq);B5.Aep(false);B5.Cp(
A._GetAutoObject(C.Device).Aq);Aio++;}A._GetAutoObject(C.Device).Aq.Bm(AcK);return Aio;
},UpdateTransferProgress:function(AJ){if(this.AwQ===AJ)return;this.AwQ=AJ;A.abo([
this,this.ARi,this.AYF],0);},AEI:function(E){if(this.K&&this.K.AEI)return this.K.
AEI.apply(this,arguments);else return C.DeviceClass.BsR.apply(this,arguments);},
BsR:function(E){A.ab5("%s",PT);},AYF:function(Ap){this.AEI(Ap);},UpdateTransferTarget:
function(AJ){if(this.AeR===AJ)return;this.AeR=AJ;A.abo([this,this.A7m,this.A$e],
0);},Ark:function(E){if(this.K&&this.K.Ark)return this.K.Ark.apply(this,arguments
);else return C.DeviceClass.BsS.apply(this,arguments);},BsS:function(E){A.ab5("%s"
,Ko);},A$e:function(Ap){this.Ark(Ap);},ArW:function(){if(this.K&&this.K.ArW)return this.
K.ArW.apply(this,arguments);else return C.DeviceClass.Btj.apply(this,arguments);
},Btj:function(){},Av9:function(E){if(this.K&&this.K.Av9)return this.K.Av9.apply(
this,arguments);else return C.DeviceClass.BsC.apply(this,arguments);},BsC:function(
E){},AYz:function(Ap){this.Av9(Ap);},UpdatePremisesID:function(Q8){if(this.T_===
Q8)return;this.T_=Q8;A.abo([this,this.ARa,this.AYz],0);},Av4:function(E){if(this.
K&&this.K.Av4)return this.K.Av4.apply(this,arguments);else return C.DeviceClass.
Bsq.apply(this,arguments);},Bsq:function(E){},AHz:function(Ap){this.Av4(Ap);},UpdateMotherSelectionDriedOffFilter:
function(AJ){if(this.Abk===AJ)return;this.Abk=AJ;A.abo([this,this.ADs,this.AHz],
0);},ADY:function(E){if(this.K&&this.K.ADY)return this.K.ADY.apply(this,arguments
);else return C.DeviceClass.Bsb.apply(this,arguments);},Bsb:function(E){},A_6:function(
Ap){this.ADY(Ap);},UpdateFreshCowSpan:function(AJ){if(this.Ap_===AJ)return;this.
Ap_=AJ;A.abo([this,this.A6V,this.A_6],0);},UpdateUSBState:function(A$5){if(this.
AkA===A$5)return;this.AkA=A$5;A.abo([this,this.Abs,this.Acl],0);},AEJ:function(E
){if(this.K&&this.K.AEJ)return this.K.AEJ.apply(this,arguments);else return C.DeviceClass.
BsU.apply(this,arguments);},BsU:function(E){A.ab5("%s",EW);},Acl:function(Ap){this.
AEJ(Ap);},Anq:function(Ahu){if(this.K&&this.K.Anq)return this.K.Anq.apply(this,arguments
);else return C.DeviceClass.Btd.apply(this,arguments);},Btd:function(Ahu){return A.
_NewObject(C.Ai_,0);},Aqv:function(){if(this.K&&this.K.Aqv)return this.K.Aqv.apply(
this,arguments);else return C.DeviceClass.BrD.apply(this,arguments);},BrD:function(
){return false;},ApX:function(Ng){if(this.K&&this.K.ApX)return this.K.ApX.apply(
this,arguments);else return C.DeviceClass.Bry.apply(this,arguments);},Bry:function(
Ng){},AEv:function(E){if(this.K&&this.K.AEv)return this.K.AEv.apply(this,arguments
);else return C.DeviceClass.BsH.apply(this,arguments);},BsH:function(E){},Btz:function(
Ap){this.AEv(Ap);},UpdateSerialNumber:function(AJ){if(this.Ag9===AJ)return;this.
Ag9=AJ;A.abo([this,this.BiL,this.Btz],0);},AvD:function(E){if(this.K&&this.K.AvD
)return this.K.AvD.apply(this,arguments);else return C.DeviceClass.BrL.apply(this
,arguments);},BrL:function(E){},AYn:function(Ap){this.AvD(Ap);},UpdateAnimalIdAutoGenerationMethod:
function(Baa){if(this.AfY===Baa)return;this.AfY=Baa;A.abo([this,this.AQQ,this.AYn
],0);},ABf:function(){return false;},AFb:function(){return false;},AEx:function(
E){if(this.K&&this.K.AEx)return this.K.AEx.apply(this,arguments);else return C.DeviceClass.
BsI.apply(this,arguments);},BsI:function(E){},A$b:function(Ap){this.AEx(Ap);},UpdateShutdownTimer:
function(AJ){if(this.AS_===AJ)return;this.AS_=AJ;A.abo([this,this.A7f,this.A$b],
0);},AqZ:function(E){if(this.K&&this.K.AqZ)return this.K.AqZ.apply(this,arguments
);else return C.DeviceClass.BrP.apply(this,arguments);},BrP:function(E){},A_V:function(
Ap){this.AqZ(Ap);},UpdateAnimalListInfoItemMode:function(AJ){if(this.Al0===AJ)return;
this.Al0=AJ;A.abo([this,this.A6H,this.A_V],0);},ArJ:function(G){if(this.K&&this.
K.ArJ)return this.K.ArJ.apply(this,arguments);else return C.DeviceClass.Bta.apply(
this,arguments);},Bta:function(G){},BC5:function(s){this.ArJ(s);},Arn:function(E
){if(this.K&&this.K.Arn)return this.K.Arn.apply(this,arguments);else return C.DeviceClass.
Bs0.apply(this,arguments);},Bs0:function(E){},A$j:function(Ap){this.Arn(Ap);},Aro:
function(E){if(this.K&&this.K.Aro)return this.K.Aro.apply(this,arguments);else return C.
DeviceClass.Bs1.apply(this,arguments);},Bs1:function(E){},A$k:function(Ap){this.
Aro(Ap);},UpdateWeightGainsLowString:function(AJ){if(this.AF2===AJ)return;this.AF2=
AJ;A.abo([this,this.A7v,this.A$k],0);},UpdateWeightGainsHighString:function(AJ){
if(this.AF1===AJ)return;this.AF1=AJ;A.abo([this,this.A7u,this.A$j],0);},AvF:function(
E){if(this.K&&this.K.AvF)return this.K.AvF.apply(this,arguments);else return C.DeviceClass.
BrS.apply(this,arguments);},BrS:function(E){},A_X:function(Ap){this.AvF(Ap);},UpdateAnimalTypesWeightGainsString:
function(AJ){if(this.AAE===AJ)return;this.AAE=AJ;A.abo([this,this.A6K,this.A_X],
0);},Arm:function(E){if(this.K&&this.K.Arm)return this.K.Arm.apply(this,arguments
);else return C.DeviceClass.BsZ.apply(this,arguments);},BsZ:function(E){},A$i:function(
Ap){this.Arm(Ap);},Arp:function(E){if(this.K&&this.K.Arp)return this.K.Arp.apply(
this,arguments);else return C.DeviceClass.Bs5.apply(this,arguments);},Bs5:function(
E){},A$n:function(Ap){this.Arp(Ap);},UpdateWeightValueBirthString:function(AJ){if(
this.AF5===AJ)return;this.AF5=AJ;A.abo([this,this.A7y,this.A$n],0);},UpdateWeightGainsAverageString:
function(AJ){if(this.AF0===AJ)return;this.AF0=AJ;A.abo([this,this.A7t,this.A$i],
0);},AvS:function(E){if(this.K&&this.K.AvS)return this.K.AvS.apply(this,arguments
);else return C.DeviceClass.Br9.apply(this,arguments);},Br9:function(E){},Btt:function(
Ap){this.AvS(Ap);},UpdateEvaluationAnimalType:function(Ec){if(this.ABA===Ec)return;
this.ABA=Ec;A.abo([this,this.Big,this.Btt],0);},UpdateStartScreen:function(AJ){if(
this.AwJ===AJ)return;this.AwJ=AJ;A.abo([this,this.BiM,this.BtA],0);},Awa:function(
E){if(this.K&&this.K.Awa)return this.K.Awa.apply(this,arguments);else return C.DeviceClass.
BsJ.apply(this,arguments);},BsJ:function(E){},BtA:function(Ap){this.Awa(Ap);},ACK:
function(){if(this.K&&this.K.ACK)return this.K.ACK.apply(this,arguments);else return C.
DeviceClass.BrB.apply(this,arguments);},BrB:function(){return 1;},ACL:function(){
if(this.K&&this.K.ACL)return this.K.ACL.apply(this,arguments);else return C.DeviceClass.
BrC.apply(this,arguments);},BrC:function(){return 1;},GetCommitCount:function(){
return 1971;},GetCommitEpoch:function(){return 1708002292;},GetCommitHash:function(
){return A.kR.Bfd;},GetVersionMajor:function(){return 0;},GetVersionMinor:function(
){return 9;},GetVersionRev:function(){return 9;},AEd:function(E){if(this.K&&this.
K.AEd)return this.K.AEd.apply(this,arguments);else return C.DeviceClass.Bsm.apply(
this,arguments);},Bsm:function(E){},A_9:function(Ap){this.AEd(Ap);},UpdateMaximumAgeNewOnFarm:
function(AJ){if(this.AC1===AJ)return;this.AC1=AJ;A.abo([this,this.A66,this.A_9],
0);},Awg:function(E){if(this.K&&this.K.Awg)return this.K.Awg.apply(this,arguments
);else return C.DeviceClass.BsT.apply(this,arguments);},BsT:function(E){},AYG:function(
Ap){this.Awg(Ap);},UpdateTransponderAssignmentIdChangeMethod:function(A$2){if(this.
Ahh===A$2)return;this.Ahh=A$2;A.abo([this,this.ARj,this.AYG],0);},BatchResetPurchasedNoticePending:
function(){var B5=A._NewObject(C.Animal,0);var P;var Aio=0;var AcK=A._GetAutoObject(
C.Device).Aq.Filter;var Bc=A._GetAutoObject(C.Helper).ANr();A._GetAutoObject(C.Device
).Aq.Bm(Bc);for(P=0;P<A._GetAutoObject(C.Device).Aq.Ch();P++){B5.EK(P,A._GetAutoObject(
C.Device).Aq);B5.Aep(false);B5.Cp(A._GetAutoObject(C.Device).Aq);Aio++;}A._GetAutoObject(
C.Device).Aq.Bm(AcK);return Aio;},ADQ:function(E){if(this.K&&this.K.ADQ)return this.
K.ADQ.apply(this,arguments);else return C.DeviceClass.Br1.apply(this,arguments);
},Br1:function(E){},AYp:function(Ap){this.ADQ(Ap);},UpdateDataExportDestination:
function(AJ){if(this.Vl===AJ)return;this.Vl=AJ;A.abo([this,this.AQW,this.AYp],0);
},BkE:function(E){},UpdateMassRecordingAutomatic:function(AJ){if(this.AP8===AJ)return;
this.AP8=AJ;A.abo([this,this.Biz,this.BkE],0);},M_:function(E){if(this.K&&this.K.
M_)return this.K.M_.apply(this,arguments);else return C.DeviceClass.Bs6.apply(this
,arguments);},Bs6:function(E){},BtD:function(Ap){this.M_(Ap);},UpdateWhereAbouts:
function(Afe){if(this.WhereAbouts===Afe)return;this.WhereAbouts=Afe;A.abo([this,
this.AvA,this.BtD],0);},AqV:function(E){if(this.K&&this.K.AqV)return this.K.AqV.
apply(this,arguments);else return C.DeviceClass.BrG.apply(this,arguments);},BrG:
function(E){},A_Q:function(Ap){this.AqV(Ap);},AqW:function(E){if(this.K&&this.K.
AqW)return this.K.AqW.apply(this,arguments);else return C.DeviceClass.BrH.apply(
this,arguments);},BrH:function(E){},A_R:function(Ap){this.AqW(Ap);},UpdateActiveMassRecordingFields:
function(AJ){if(this.AAy===AJ)return;this.AAy=AJ;A.abo([this,this.A6A,this.A_Q],
0);},UpdateActiveMassRecordingFieldsOrder:function(AJ){if(this.AAz===AJ)return;this.
AAz=AJ;A.abo([this,this.A6B,this.A_R],0);},ArF:function(G){if(this.K&&this.K.ArF
)return this.K.ArF.apply(this,arguments);else return C.DeviceClass.Bs9.apply(this
,arguments);},Bs9:function(G){},BC2:function(s){this.ArF(s);},AEb:function(E){if(
this.K&&this.K.AEb)return this.K.AEb.apply(this,arguments);else return C.DeviceClass.
Bsj.apply(this,arguments);},Bsj:function(E){},AHx:function(Ap){this.AEb(Ap);},UpdateMassRecordingDateOfBirthMandatory:
function(AJ){if(this.Aea===AJ)return;this.Aea=AJ;A.abo([this,this.ADp,this.AHx],
0);},AEa:function(E){this.UpdateMassRecordingCounter(E);},UpdateMassRecordingCounter:
function(AJ){if(this.Ave===AJ)return;this.Ave=AJ;A.abo([this,this.A64,this.AEa],
0);},Ai4:function(){if(this.K&&this.K.Ai4)return this.K.Ai4.apply(this,arguments
);else return C.DeviceClass.Brw.apply(this,arguments);},Brw:function(){return false;
},ApK:function(){if(this.K&&this.K.ApK)return this.K.ApK.apply(this,arguments);else
return C.DeviceClass.Brv.apply(this,arguments);},Brv:function(){return false;},ApJ:
function(){if(this.K&&this.K.ApJ)return this.K.ApJ.apply(this,arguments);else return C.
DeviceClass.Bru.apply(this,arguments);},Bru:function(){return false;},At9:function(
){if(this.K&&this.K.At9)return this.K.At9.apply(this,arguments);else return C.DeviceClass.
Brx.apply(this,arguments);},Brx:function(){return false;},Av2:function(E){if(this.
K&&this.K.Av2)return this.K.Av2.apply(this,arguments);else return C.DeviceClass.
Bsl.apply(this,arguments);},Bsl:function(E){},A_8:function(Ap){this.Av2(Ap);},UpdateMaxWeightValuePrecision:
function(AJ){if(this.Ow===AJ)return;this.Ow=AJ;A.abo([this,this.A65,this.A_8],0);
},ADj:function(){return this.Ky;},Avl:function(){return this.Aar;},Avo:function(
){return this.Al9;},ARd:function(){return this.ScanState;},ADq:function(){return this.
MeasureState;},ADt:function(){return this.Kk;},A60:function(){return this.Language;
},AqP:function(){return this.TemperatureUnit;},A6P:function(){return this.ALC;},
AQ5:function(){return this.AC7;},Avz:function(){return this.OverlayMenu;},A7n:function(
){return this.Zo;},ARf:function(){return this.SyncState;},A7o:function(){return this.
Ar6;},ADu:function(){return this.ATT;},ARc:function(){return this.RatingMode;},AqM:
function(){return this.Amk;},ARh:function(){return this.ATC;},BiF:function(){return this.
ASt;},Bh5:function(){return this.AutoRegistrationMode;},ARe:function(){return this.
OC;},Abq:function(){return this.FN;},Abr:function(){return this.Fw;},ADv:function(
){return this.KN;},AQ4:function(){return this.MassUnit;},A6z:function(){return this.
O6;},AQP:function(){return this.AtU;},A6L:function(){return this.AutoActions;},PA:
function(){return this.AnimalType;},A7w:function(){return this.WeightRecordingMode;
},AQ$:function(){return this.AEZ;},ADn:function(){return this.Hv;},A6E:function(
){return this.AiQ;},A7x:function(){return this.WeightRecordingScope;},V6:function(
){return this.Gender;},Avt:function(){return this.Aqj;},Avs:function(){return this.
Aqi;},ADk:function(){return this.Jy;},A6G:function(){return this.AKL;},A6S:function(
){return this.Amj;},AQR:function(){return this.D2;},A7s:function(){return this.ATV;
},A6U:function(){return this.ANa;},A6J:function(){return this.AAD;},A7i:function(
){return this.AFF;},A7j:function(){return this.AFG;},AQ8:function(){return this.
AQC;},Bin:function(){return this.Amn;},A68:function(){return this.AC9;},A67:function(
){return this.AC8;},Avw:function(){return this.AQk;},Avv:function(){return this.
AQj;},A6O:function(){return this.ApO;},A6y:function(){return this.AAx;},Bh1:function(
){return this.AlU;},AmV:function(){return this.H_;},AQX:function(){return this.ABs;
},AQY:function(){return this.ABt;},ADo:function(){return this.Aum;},AmY:function(
){return this.Ajs;},AQ6:function(){return this.Avi;},Avx:function(){return this.
AQl;},Avr:function(){return this.EartagNrAssignmentMode;},Avn:function(){return this.
Breed;},BiA:function(){return this.Sd;},Biy:function(){return this.QH;},BiW:function(
){return this.Sy;},Bh8:function(){return this.RD;},A6Q:function(){return this.AMw;
},A69:function(){return this.AQx;},ADl:function(){return this.ApM;},ARi:function(
){return this.AwQ;},A7m:function(){return this.AeR;},ARa:function(){return this.
T_;},ADs:function(){return this.Abk;},A6V:function(){return this.Ap_;},Abs:function(
){return this.AkA;},BiL:function(){return this.Ag9;},AQQ:function(){return this.
AfY;},A7f:function(){return this.AS_;},A6H:function(){return this.Al0;},A7u:function(
){return this.AF1;},A7v:function(){return this.AF2;},A6K:function(){return this.
AAE;},A7t:function(){return this.AF0;},A7y:function(){return this.AF5;},Big:function(
){return this.ABA;},BiM:function(){return this.AwJ;},A66:function(){return this.
AC1;},ARj:function(){return this.Ahh;},AQW:function(){return this.Vl;},Biz:function(
){return this.AP8;},AvA:function(){return this.WhereAbouts;},A6A:function(){return this.
AAy;},A6B:function(){return this.AAz;},ADp:function(){return this.Aea;},A64:function(
){return this.Ave;},A65:function(){return this.Ow;},_Init:function(aArg){C.Table.
_Init.call(this.Aq={I:this},0);C.Table._Init.call(this.Bq={I:this},0);C.Table._Init.
call(this.AfW={I:this},0);A.Core.A9z._Init.call(this.Ani={I:this},0);C.Table._Init.
call(this.O$={I:this},0);this.__proto__=C.DeviceClass;this.Aq.OnSetId(0);this.Bq.
OnSetId(1);this.AfW.OnSetId(3);this.O$.OnSetId(4);this.OC=A._NewObject(C.Transponder
,0);this.Sd=A._NewObject(C.AwH,0);this.QH=A._NewObject(C.AuO,0);this.Sy=A._NewObject(
C.AuO,0);this.RD=A._NewObject(C.AwH,0);var Lp=this._variants();if(Lp){this.K={};
Lp._Init.call(this,aArg);}A.h7++;},_Done:function(){if(this.K)this.K._Done.call(
this);this.__proto__=null;this.Aq._Done();this.Bq._Done();this.AfW._Done();this.
Ani._Done();this.O$._Done();A.h7--;},_ReInit:function(){this.Aq._ReInit();this.Bq.
_ReInit();this.AfW._ReInit();this.Ani._ReInit();this.O$._ReInit();if(this.K)this.
K._ReInit.call(this);},_Mark:function(D){var B;if((B=this.OC)&&(B._cycle!=D))B._Mark(
B._cycle=D);if((B=this.Sd)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.QH)&&(B.
_cycle!=D))B._Mark(B._cycle=D);if((B=this.Sy)&&(B._cycle!=D))B._Mark(B._cycle=D);
if((B=this.RD)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Aq)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Bq)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AfW)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.Ani)._cycle!=D)B._Mark(B._cycle=D);if((B=this.O$
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);
if(this.K)this.K._Mark(D);},_variants:function(){return A.acr.DeviceClass._variants(
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
102,TextInput:103,LAST:104};C.Operator={Equal:0,None:1,Greater:2,Less:3,Contains:
4,Unequal:5};C.MeasureState={Idle:0,Progress:1,Prediction:2,Ready:3,Error:4,LAST:
5};C.StringFilterCriterion={A4:A.jV,AdH:function(){var Ay=A._NewObject(C.StringFilterCriterion
,0);Ay.Gy(this);return Ay;},Gy:function(AM){C.FilterCriterion.Gy.call(this,AM);var
Ay=(C.StringFilterCriterion.isPrototypeOf(AM)?AM:null);if(!!Ay)this.A4=Ay.A4;},_Init:
function(aArg){C.FilterCriterion._Init.call(this,aArg);this.__proto__=C.StringFilterCriterion;
},_className:"Device::StringFilterCriterion"};C.Table={CA:function(Ac,AZ){if(this.
K&&this.K.CA)return this.K.CA.apply(this,arguments);else return C.ITable.CA.apply(
this,arguments);},Vu:function(Ac,AZ){if(this.K&&this.K.Vu)return this.K.Vu.apply(
this,arguments);else return C.ITable.Vu.apply(this,arguments);},HU:function(Ac,AZ
){if(this.K&&this.K.HU)return this.K.HU.apply(this,arguments);else return C.ITable.
HU.apply(this,arguments);},OnSetId:function(E){if(this.K&&this.K.OnSetId)return this.
K.OnSetId.apply(this,arguments);else return C.ITable.OnSetId.apply(this,arguments
);},Ch:function(){if(this.K&&this.K.Ch)return this.K.Ch.apply(this,arguments);else
return C.ITable.Ch.apply(this,arguments);},Bm:function(E){if(this.K&&this.K.Bm)return this.
K.Bm.apply(this,arguments);else return C.ITable.Bm.apply(this,arguments);},Vv:function(
Ac,AZ){if(this.K&&this.K.Vv)return this.K.Vv.apply(this,arguments);else return C.
ITable.Vv.apply(this,arguments);},R0:function(Ac,AZ){if(this.K&&this.K.R0)return this.
K.R0.apply(this,arguments);else return C.ITable.R0.apply(this,arguments);},Ol:function(
){if(this.K&&this.K.Ol)return this.K.Ol.apply(this,arguments);else return C.ITable.
Ol.apply(this,arguments);},On:function(Aoc){if(this.K&&this.K.On)return this.K.On.
apply(this,arguments);else return C.ITable.On.apply(this,arguments);},Ya:function(
){if(this.K&&this.K.Ya)return this.K.Ya.apply(this,arguments);else return C.ITable.
Ya.apply(this,arguments);},Y_:function(Ac,AZ,CV){if(this.K&&this.K.Y_)return this.
K.Y_.apply(this,arguments);else return C.ITable.Y_.apply(this,arguments);},Hb:function(
Ac,AZ,CV){if(this.K&&this.K.Hb)return this.K.Hb.apply(this,arguments);else return C.
ITable.Hb.apply(this,arguments);},Y9:function(Ac,AZ,CV){if(this.K&&this.K.Y9)return this.
K.Y9.apply(this,arguments);else return C.ITable.Y9.apply(this,arguments);},Na:function(
Ac,AZ,CV){if(this.K&&this.K.Na)return this.K.Na.apply(this,arguments);else return C.
ITable.Na.apply(this,arguments);},Y8:function(Ac,AZ,CV){if(this.K&&this.K.Y8)return this.
K.Y8.apply(this,arguments);else return C.ITable.Y8.apply(this,arguments);},K7:function(
aColumn,A1){if(this.K&&this.K.K7)return this.K.K7.apply(this,arguments);else return C.
ITable.K7.apply(this,arguments);},LL:function(Ac,AZ){if(this.K&&this.K.LL)return this.
K.LL.apply(this,arguments);else return C.ITable.LL.apply(this,arguments);},Uc:function(
Ac,AZ,CV){if(this.K&&this.K.Uc)return this.K.Uc.apply(this,arguments);else return C.
ITable.Uc.apply(this,arguments);},Aji:function(aColumn,A1){if(this.K&&this.K.Aji
)return this.K.Aji.apply(this,arguments);else return C.ITable.Aji.apply(this,arguments
);},Ha:function(){if(this.K&&this.K.Ha)return this.K.Ha.apply(this,arguments);else
return C.ITable.Ha.apply(this,arguments);},Ajf:function(aColumn,A1){if(this.K&&this.
K.Ajf)return this.K.Ajf.apply(this,arguments);else return C.ITable.Ajf.apply(this
,arguments);},AdL:function(aColumn,A1){if(this.K&&this.K.AdL)return this.K.AdL.apply(
this,arguments);else return C.ITable.AdL.apply(this,arguments);},Hz:function(){if(
this.K&&this.K.Hz)return this.K.Hz.apply(this,arguments);else return C.ITable.Hz.
apply(this,arguments);},AaP:function(){if(this.K&&this.K.AaP)return this.K.AaP.apply(
this,arguments);else return C.ITable.AaP.apply(this,arguments);},Qr:function(){if(
this.K&&this.K.Qr)return this.K.Qr.apply(this,arguments);else return C.ITable.Qr.
apply(this,arguments);},_Init:function(aArg){C.ITable._Init.call(this,aArg);this.
__proto__=C.Table;var Lp=this._variants();if(Lp){this.K={};Lp._Init.call(this,aArg
);}},_Done:function(){if(this.K)this.K._Done.call(this);this.__proto__=C.ITable;
C.ITable._Done.call(this);},_ReInit:function(){C.ITable._ReInit.call(this);if(this.
K)this.K._ReInit.call(this);},_Mark:function(D){C.ITable._Mark.call(this,D);if(this.
K)this.K._Mark(D);},_variants:function(){return A.acr.Table._variants();},K:null
,_className:"Device::Table"};C.TableId={Animal:0,Rating:1,Undefined:2,AnimalGroup:
3,CalfDeregistrations:4};C.ScanState={Idle:0,Progress:1,IdScanned:2,NotFound:3,Error:
4,LAST:5};C.RatedAttribute={None:0,Feed:1,Appearance:2,Respiratory:3,Faeces:4};C.
ConverterClass={MS:null,Aku:function(Aoa){var BaJ;var AtI=this.ATr(Aoa/100,0,A._GetAutoObject(
C.Device).TemperatureUnit);BaJ=A.abk(AtI,0,1);return BaJ;},A9H:function(Ne){if(Ne<=
0)return 0;else if(Ne<=1)return 5;else if(Ne<=2)return 3;else if(Ne<=4)return 2;
else if(Ne<=6)return 1;else if(Ne<=8)return 4;else return 0;},Adp:function(Ne){var
a=0;switch(Ne){case 3:a=2;break;case 2:a=4;break;case 1:a=6;break;case 0:a=0;break;
case 4:a=8;break;case 5:a=1;break;default:A.ab5("%s",NY);}return a;},ArZ:function(
Ec,Ra){var Nh=A._GetAutoObject(C.Converter).AiR(Ra,Ec);switch(Nh){case 3:return 1;
case 2:return 2;case 1:return 3;case 0:return 4;default:throw new Error(PU+Nh.toFixed(
));}},Ahf:function(){var B;var D1=A._NewObject(A.Core.Bt,0).Initialize(A._GetAutoObject(
C.Helper).Dy());D1.Am8(0);D1.Am$(0);D1.Anc(0);return((B=(D1.JF()|0))<0)?B+0x100000000:
B;},Bfh:function(AsI){var Dh;switch(AsI){case 36:Dh=Mw;break;case 40:Dh=SL;break;
case 56:Dh=Uu;break;case 70:Dh=Zs;break;case 100:Dh=Ww;break;case 124:Dh=II;break;
case 156:Dh=Uv;break;case 158:Dh=Zt;break;case 191:Dh=Wx;break;case 196:Dh=Zu;break;
case 203:Dh=Uw;break;case 208:Dh=Zv;break;case 233:Dh=Zw;break;case 246:Dh=Ux;break;
case 250:Dh=Wy;break;case 276:Dh=Q4;break;case 300:Dh=Zx;break;case 348:Dh=ON;break;
case 372:Dh=PV;break;case 380:Dh=Wz;break;case 392:Dh=WA;break;case 428:Dh=WC;break;
case 440:Dh=Zy;break;case 442:Dh=Zz;break;case 470:Dh=WD;break;case 528:Dh=WE;break;
case 578:Dh=SM;break;case 616:Dh=ZA;break;case 620:Dh=ZB;break;case 642:Dh=Acf;break;
case 643:Dh=Uy;break;case 703:Dh=ZC;break;case 705:Dh=Ae2;break;case 724:Dh=ZD;break;
case 752:Dh=WF;break;case 756:Dh=WG;break;case 792:Dh=ZE;break;case 804:Dh=Ae3;break;
case 826:Dh=JN;break;case 840:Dh=Ae4;break;default:Dh=AsI.toFixed();}return Dh;}
,AkD:function(MB){var ZT;if((MB<10000)&&(A._GetAutoObject(C.Device).Ow===2))ZT=2;
else if((MB<100000)&&!!A._GetAutoObject(C.Device).Ow)ZT=1;else ZT=0;return this.
SJ(MB,ZT,false);},Aw2:function(MB,ZT){return this.SJ(MB,ZT,false);},SJ:function(
MB,ZT,BwR){var B;var Ak7=A.jV;switch(A._GetAutoObject(C.Device).MassUnit){case 0:
if(BwR)Ak7=A.abl(MB,0,0);else{var Bb2=MB<0;if(ZT<3)MB=MB+(((Bb2?-1:1)*5)*(Math.pow(
10,2-ZT)|0));Ak7=(((((B=MB)>-2147483648)?Math.abs(B):B)/1000)|0).toFixed();if(ZT>
0)Ak7=Ak7+(Lo+A.abV(A.abl((((B=MB)>-2147483648)?Math.abs(B):B)%1000,3,10),ZT));if(
Bb2)Ak7=Ahk+Ak7;}break;case 1:Ak7=A.abk(MB/453.592,0,ZT);break;default:A.ab5("%s%s"
,AnJ,A._GetAutoObject(C.Device).MassUnit.toFixed());}return Ak7;},Q1:function(JR
){var A2y=JR.toFixed();var Bd$=A2y.length;if((Bd$>=14)&&(Bd$<=15)){var A0x=this.
AwS(JR);var BvI=A._GetAutoObject(C.Converter).Bfh(A0x);A2y=(BvI+NZ)+A.abm(A._GetAutoObject(
C.Helper).Tu(JR,0,12),12,10);}return A2y;},Amo:function(LX){switch(LX){case 0:return A.
aaL(A.ach.AO6);case 1:return A.aaL(A.ach.ACu);case 2:return A.aaL(A.ach.ACz);default:{
A.ab5("%s%e",WH,LX);return null;}}},A3c:function(Bvg){switch(Bvg){case 0:return A.
aaL(A.ach.AuX);case 1:return A.aaL(A.ach.ACq);case 2:return A.aaL(A.ach.AO0);default:
throw new Error(AnK);}},Af1:function(AH3){switch(AH3){case 0:return A.aaL(A.ach.
Ajt);case 2:return A.aaL(A.ach.Amw);case 1:return A.aaL(A.ach.Aa1);case 3:switch(
A._GetAutoObject(C.Device).MassUnit){case 0:return A.aaL(A.ach.Au6);case 1:return A.
aaL(A.ach.Au7);default:throw new Error(Ahl+A._GetAutoObject(C.Device).MassUnit.toFixed(
));}break;case 4:return A.aaL(A.ach.AOp);case 5:return A.aaL(A.ach.AOq);case 6:return A.
aaL(A.ach.AOu);case 7:return A.aaL(A.ach.ANP);case 8:return A.aaL(A.ach.ANW);case
9:return A.aaL(A.ach.AB4);case 10:return A.aaL(A.ach.ANV);case 11:return A.aaL(A.
ach.ANX);default:throw new Error(Ahm+AH3.toFixed());}},BeJ:function(Ax4){switch(
Ax4){case 0:return A.aaL(A.ach.ACx);case 3:return A.aaL(A.ach.Amw);case 1:return A.
aaL(A.ach.Aa1);case 2:return A._GetAutoObject(A.acj.DM).Ba7();default:throw new Error(
Ahm+Ax4.toFixed());}},Bfg:function(AsI){switch(AsI){case 977:return Acg;case 978:
return Uz;case 980:return AnL;case 981:return AnM;case 982:return Aw3;case 983:return Aw4;
case 984:return AkG;case 985:return Aw5;default:return A.aaR(A.acf.Unknown);}},Bfz:
function(Acs){switch(Acs){case 1:return 0x278A;case 2:return 0x278B;case 3:return 0x278C;
case 4:return 0x278D;case 5:return 0x278E;case 6:return 0x278F;case 7:return 0x2790;
case 8:return 0x2791;case 9:return 0x2792;case 10:return 0x2793;default:return 0x20;
}},Bng:function(JR){if(!JR)return-1;return(JR%100000000)|0;},Bf5:function(An$,aFilter
){var B;if(!aFilter)return Ae5;var AoD=Asa;var Ay=aFilter.ANj();while(!!Ay){AoD=
AoD+A._GetAutoObject(C.Helper).A40(An$,Ay);Ay=aFilter.ANo(Ay);if(!!Ay)AoD=AoD+OO;
}AoD=AoD+SN;return AoD;},A5F:function(A$P){var Mx=0;switch(A$P){case 14:Mx=2;break;
case 13:Mx=4;break;case 6:Mx=36;break;case 11:Mx=9;break;case 0:Mx=39;break;case
10:Mx=26;break;case 12:Mx=12;break;case 5:Mx=14;break;case 3:Mx=15;break;case 1:
Mx=10;break;case 8:Mx=16;break;case 4:Mx=20;break;case 15:Mx=27;break;case 9:Mx=
31;break;case 2:Mx=13;break;case 7:Mx=35;break;case 16:Mx=37;break;default:A.ab5(
"%s%e",Aw6,A$P);}return Mx;},BeI:function(Ax4){switch(Ax4){case 0:return 1;case 3:
return 0;case 1:return 2;case 2:switch(A._GetAutoObject(C.Device).MassUnit){case
0:return 3;case 1:return 4;default:throw new Error(Ahl+A._GetAutoObject(C.Device
).MassUnit.toFixed());}break;default:throw new Error(Ahm+Ax4.toFixed());}},BeK:function(
Aoj){switch(Aoj){case 0:return A.aaL(A.ach.AOm);case 1:return A.aaL(A.ach.ACx);case
9:return A.aaL(A.ach.AOw);case 4:return A.aaL(A.ach.AE$);case 6:return A.aaL(A.ach.
ArC);case 8:return A.aaL(A.ach.AuT);case 2:return A.aaL(A.ach.Aa1);case 3:return A.
aaL(A.ach.Amw);case 10:switch(A._GetAutoObject(C.Device).MassUnit){case 0:return A.
aaL(A.ach.Au6);case 1:return A.aaL(A.ach.Au7);default:throw new Error(Ahl+A._GetAutoObject(
C.Device).MassUnit.toFixed());}break;case 7:case 5:case 11:case 12:case 13:case 14:
case 18:case 15:case 16:case 17:return A.aaL(A.aci.Ts);default:throw new Error(SO+
Aoj.toFixed());}},AL$:function(AsI){switch(AsI){case 40:return 1;case 56:return 3;
case 70:return 2;case 100:return 4;case 124:return 5;case 156:return 7;case 158:
return 36;case 191:return 17;case 196:return 8;case 203:return 9;case 208:return 11;
case 233:return 12;case 246:return 14;case 250:return 15;case 276:return 10;case
300:return 16;case 348:return 18;case 372:return 19;case 380:return 20;case 392:
return 21;case 428:return 24;case 440:return 22;case 442:return 23;case 470:return 25;
case 528:return 26;case 578:return 27;case 616:return 28;case 620:return 29;case
642:return 30;case 643:return 31;case 703:return 34;case 705:return 33;case 724:
return 13;case 752:return 32;case 756:return 6;case 792:return 35;case 804:return 37;
case 826:return 38;case 840:return 39;default:return 0;}},Ab7:function(JR){var A0x=
this.AwS(JR);return this.AL$(A0x);},AwS:function(JR){return A._GetAutoObject(C.Helper
).Tu(JR,12,3)|0;},A9X:function(Aoe,Ec){if(Aoe<A._GetAutoObject(C.Helper).AB0(Ec)
)return 1;else if(Aoe<A._GetAutoObject(C.Helper).ABZ(Ec))return 2;else return 3;
},ABO:function(BuY){switch(BuY){case 1:return 1;case 2:return 2;case 3:return 3;
case 4:return 4;case 5:return 5;case 6:return 6;case 7:return 7;case 8:return 8;
case 9:return 9;case 10:return 10;case 11:return 11;case 12:return 12;case 13:return 13;
case 14:return 14;case 15:return 15;case 16:return 16;default:return 0;}},ATr:function(
A1,AHW,AHX){if(AHW===AHX)return A1;if(!AHW&&(AHX===1)){var result=((A1*9)/5)+32;
return result;}if((AHW===1)&&!AHX){var result=((A1-32)*5)/9;return result;}throw new
Error(((Asb+AHW.toFixed())+Aw7)+AHX.toFixed());},A4M:function(ED){switch(ED){case
0:return Aw8;case 1:return A.jV;case 2:return Aw9;case 3:return AnN;case 4:return A.
aaR(A.acf.Contains);case 5:return Aw_;default:{A.ab5("%s%e",Asc,ED);return A.jV;
}}},A3M:function(Acr){return this.MS.AdK(Acr);},BgL:function(Acr){return this.MS.
Al$(Acr);},Be2:function(AsH){var Azm=0;switch(AsH){case 0:Azm=1;break;case 1:Azm=
2;break;case 2:Azm=3;break;case 3:Azm=4;break;default:A.ab5("%s%e",KP,AsH);}return Azm;
},AiR:function(AYX,Ec){if(AYX>=A._GetAutoObject(C.Helper).A4X(Ec))return 3;else if(
AYX>=A._GetAutoObject(C.Helper).AuK(Ec))return 2;else if(AYX<A._GetAutoObject(C.
Device).Zo)return 0;else return 1;},ApT:function(Mx){var BL=-1;switch(Mx){case 0:
BL=0;break;case 1:BL=40;break;case 2:BL=70;break;case 3:BL=56;break;case 4:BL=100;
break;case 5:BL=124;break;case 6:BL=756;break;case 7:BL=156;break;case 8:BL=196;
break;case 9:BL=203;break;case 10:BL=276;break;case 11:BL=208;break;case 12:BL=233;
break;case 13:BL=724;break;case 14:BL=246;break;case 15:BL=250;break;case 16:BL=
300;break;case 17:BL=191;break;case 18:BL=348;break;case 19:BL=372;break;case 20:
BL=380;break;case 21:BL=392;break;case 22:BL=440;break;case 23:BL=442;break;case
24:BL=428;break;case 25:BL=470;break;case 26:BL=528;break;case 27:BL=578;break;case
28:BL=616;break;case 29:BL=620;break;case 30:BL=642;break;case 31:BL=643;break;case
32:BL=752;break;case 33:BL=705;break;case 34:BL=703;break;case 35:BL=792;break;case
36:BL=158;break;case 37:BL=804;break;case 38:BL=826;break;case 39:BL=840;break;default:
throw new Error(Aw$+Mx.toFixed());}return BL;},Bnk:function(JR){return A._GetAutoObject(
C.Helper).Tu(JR,8,2)|0;},Bnj:function(JR){var BwN=this.Bnk(JR);return this.ABO(BwN
);},_Init:function(aArg){C.MS._Init.call(this.MS={I:this},0);this.__proto__=C.ConverterClass;
A.h7++;},_Done:function(){this.__proto__=null;this.MS._Done();A.h7--;},_ReInit:function(
){this.MS._ReInit();},_Mark:function(D){var B;if((B=this.MS)._cycle!=D)B._Mark(B.
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
,IsRegistered:false,IsControl:false,IsAlarm:false,EK:function(Ac,AG){var Ht=C.Row.
EK.call(this,Ac,AG);if(Ht&&!!AG){this.OnSetId(AG.CA(Ac,0));this.T5(AG.CA(Ac,1));
this.Abz(AG.CA(Ac,2));this.Am_(AG.CA(Ac,3));this.Sh(AG.Hy(Ac,4));this.JG(AG.ANl(
Ac,7));this.AjX(AG.Bgm(Ac,6));this.DT(AG.Amp(Ac,14));this.M9(AG.LL(Ac,22));this.
M8(AG.LL(Ac,26));this.Awk(AG.IU(Ac,13));this.Aen(AG.HU(Ac,8));this.Awd(AG.Hy(Ac,
15));this.AR2(AG.Hy(Ac,31));this.Aes(AG.A48(Ac,5));this.ARF(AG.IU(Ac,17));this.T2(
AG.HU(Ac,11));this.AR1(AG.Hy(Ac,16));this.AR4(AG.Hy(Ac,30));this.Aj5(AG.HU(Ac,9)
);this.Aeq(AG.HU(Ac,12));this.AR3(AG.Hy(Ac,20));this.Awf(AG.Hy(Ac,21));this.AgU(
AG.HU(Ac,10));this.AvX(AG.HU(Ac,27));this.AD6(AG.ABU(Ac,18));this.AEA(AG.Hy(Ac,19
));this.AvV(AG.ABU(Ac,23));this.Awe(AG.Hy(Ac,24));this.ARx(AG.CA(Ac,25));this.AvM(
AG.Hy(Ac,28));this.AvY(AG.CA(Ac,29));this.Aq$(AG.HU(Ac,38));this.NM(AG.Bgn(Ac,32
));this.Aj0(AG.Bgq(Ac,33));this.Ana(AG.LL(Ac,35));this.M_(AG.ANv(Ac,34));this.Aep(
AG.HU(Ac,37));this.AEq(AG.Bgz(Ac,36));}return Ht;},Cp:function(AG){var Ht=C.Row.
Cp.call(this,AG);if(Ht&&!!AG){var Jc=AG.Ol();if(Jc<=0)A.ab5("%s",Ach);else{var Ay1=
this.AmB();if(Ay1)this.CF=AG.Ya();else AG.Hb(this.CF,0,this.Id);AG.Hb(this.CF,1,
this.VisualId);AG.Hb(this.CF,2,this.GroupId);AG.Hb(this.CF,3,this.LocationId);AG.
AbS(this.CF,4,this.DateOfBirth);AG.Bl_(this.CF,7,this.Gender);AG.Bl6(this.CF,6,this.
BirthType);AG.Bl4(this.CF,14,this.AnimalType);AG.Uc(this.CF,22,this.TransponderId
);AG.Uc(this.CF,26,this.NaisId);AG.Akl(this.CF,13,this.WorstAssessment);AG.Na(this.
CF,8,this.IsAlarm);AG.AbS(this.CF,15,this.TimestampAlarm);AG.Na(this.CF,11,this.
IsFever);AG.AbS(this.CF,16,this.TimestampExpirationFeverAlarm);AG.Na(this.CF,9,this.
IsControl);AG.Na(this.CF,12,this.IsWatch);AG.AbS(this.CF,20,this.TimestampLastControl
);AG.AbS(this.CF,21,this.TimestampLastWatch);AG.Na(this.CF,10,this.IsRegistered);
AG.Na(this.CF,27,this.IsPerished);AG.AbS(this.CF,28,this.DateOfLastCalving);AG.Hb(
this.CF,29,this.LactationNumber);AG.Na(this.CF,38,this.IsDry);AG.Bl8(this.CF,32,
this.Breed);AG.Bl9(this.CF,33,this.EaseOfDelivery);AG.Uc(this.CF,35,this.NaisIdMother
);AG.Bme(this.CF,34,this.WhereAbouts);AG.Na(this.CF,37,this.IsRegistrationNoticePending
);AG.Bmc(this.CF,36,this.ReasonOfLeaving);Ht=AG.On(Jc);if(Ay1)this.OnSetId(AG.AaP(
));}}return Ht;},Gb:function(){C.Row.Gb.call(this);this.OnSetId(-1);this.AgU(true
);},Ha:function(){C.Row.Ha.call(this);this.OnSetId(0);this.T5(0);this.Abz(0);this.
Am_(0);this.Sh(0);this.JG(A._GetAutoObject(C.Device).Gender);this.AjX(0);this.DT(
A._GetAutoObject(C.Device).AnimalType);this.M9(0);this.M8(0);this.Awk(0);this.Aen(
false);this.Awd(0);this.AR2(0);this.Aes(0);this.ARF(0);this.T2(false);this.AR4(0
);this.AR1(0);this.Aj5(false);this.Aeq(false);this.AR3(0);this.Awf(0);this.AgU(false
);this.AvX(false);this.AD6(0);this.AEA(0);this.AvV(0);this.Awe(0);this.ARx(-1);this.
AvM(0);this.AvY(0);this.Aq$(false);this.NM(0);this.Aj0(0);this.Ana(0);this.M_(0);
this.Aep(false);this.AEq(0);},OnSetId:function(E){if(this.Id===E)return;this.Id=
E;A.abo([this,this.QK,this.OnSetId],0);},T5:function(E){if(this.VisualId===E)return;
this.VisualId=E;A.abo([this,this.AqQ,this.T5],0);},Abz:function(E){if(this.GroupId===
E)return;this.GroupId=E;A.abo([this,this.Bio,this.Abz],0);},Sh:function(E){if(this.
DateOfBirth===E)return;this.DateOfBirth=E;A.abo([this,this.Avp,this.Sh],0);},JG:
function(E){if(this.Gender===E)return;this.Gender=E;A.abo([this,this.V6,this.JG]
,0);},AjX:function(E){if(this.BirthType===E)return;this.BirthType=E;A.abo([this,
this.AQU,this.AjX],0);},Am_:function(E){if(this.LocationId===E)return;this.LocationId=
E;A.abo([this,this.A63,this.Am_],0);},Aes:function(E){if(this.LastTemperature===
E)return;this.LastTemperature=E;A.abo([this,this.A62,this.Aes],0);},Aen:function(
E){if(this.IsAlarm===E)return;this.IsAlarm=E;A.abo([this,this.A6X,this.Aen],0);}
,Aj5:function(E){if(this.IsControl===E)return;this.IsControl=E;A.abo([this,this.
Bir,this.Aj5],0);},AgU:function(E){if(this.IsRegistered===E)return;this.IsRegistered=
E;A.abo([this,this.Biu,this.AgU],0);},Aeq:function(E){if(this.IsWatch===E)return;
this.IsWatch=E;A.abo([this,this.A6Z,this.Aeq],0);},Awk:function(E){if(this.WorstAssessment===
E)return;this.WorstAssessment=E;A.abo([this,this.A7z,this.Awk],0);},T2:function(
E){if(this.IsFever===E)return;this.IsFever=E;A.abo([this,this.A6Y,this.T2],0);},
AR3:function(E){if(this.TimestampLastControl===E)return;this.TimestampLastControl=
E;A.abo([this,this.BiT,this.AR3],0);},Awf:function(E){if(this.TimestampLastWatch===
E)return;this.TimestampLastWatch=E;A.abo([this,this.BiV,this.Awf],0);},ARF:function(
E){if(this.LastRatingTemperature===E)return;this.LastRatingTemperature=E;A.abo([
this,this.Bix,this.ARF],0);},AR1:function(E){if(this.TimestampExpirationFeverAlarm===
E)return;this.TimestampExpirationFeverAlarm=E;A.abo([this,this.BiR,this.AR1],0);
},Awd:function(E){if(this.TimestampAlarm===E)return;this.TimestampAlarm=E;A.abo([
this,this.BiQ,this.Awd],0);},DT:function(E){if(this.AnimalType===E)return;this.AnimalType=
E;A.abo([this,this.PA,this.DT],0);},AD6:function(E){if(this.LastBodyWeight===E)return;
this.LastBodyWeight=E;A.abo([this,this.A61,this.AD6],0);},AEA:function(E){if(this.
TimestampLastWeighing===E)return;this.TimestampLastWeighing=E;A.abo([this,this.A7l
,this.AEA],0);},M9:function(E){if(this.TransponderId===E)return;this.TransponderId=
E;A.abo([this,this.AjU,this.M9],0);},Td:function(){return A._GetAutoObject(C.Helper
).MF(this.DateOfBirth,A._GetAutoObject(C.Helper).Dy());},AvV:function(E){if(this.
FirstBodyWeight===E)return;this.FirstBodyWeight=E;A.abo([this,this.AQ0,this.AvV]
,0);},Awe:function(E){if(this.TimestampFirstWeighing===E)return;this.TimestampFirstWeighing=
E;A.abo([this,this.ARg,this.Awe],0);},Aqu:function(){var SX=A._NewObject(A.Core.
Bt,0);SX.Initialize(this.DateOfBirth);var A0k=A._NewObject(A.Core.Bt,0);A0k.Initialize(
this.TimestampFirstWeighing);if(((SX.Year===A0k.Year)&&(SX.Abp()===A0k.Abp()))&&(
this.FirstBodyWeight>0))return true;else return false;},Ahj:function(AHQ){var W9;
var Apv;if(this.TimestampLastWeighing>0){Apv=this.TimestampLastWeighing;W9=this.
LastBodyWeight;}else if(this.AnimalType===1){Apv=A._GetAutoObject(C.Helper).Dy();
W9=600000;}else{Apv=this.DateOfBirth;W9=A._GetAutoObject(C.Helper).AaO(this.AnimalType
);}return A._GetAutoObject(C.Helper).Ahj(W9,Apv,AHQ,this.AnimalType);},ARx:function(
E){if(this.FirstBodyWeightId===E)return;this.FirstBodyWeightId=E;A.abo([this,this.
Bim,this.ARx],0);},Ano:function(A$$){this.Aen(A$$);if(A$$){if(!this.TimestampAlarm
)this.Awd(A._GetAutoObject(C.Helper).Dy());}else this.Awd(0);},M8:function(E){if(
this.NaisId===E)return;this.NaisId=E;A.abo([this,this.AmZ,this.M8],0);},AFm:function(
A$7){this.Aeq(A$7);if(A$7){if(!this.TimestampLastWatch)this.Awf(A._GetAutoObject(
C.Helper).Dy());}else this.Awf(0);},AvM:function(E){if(this.DateOfLastCalving===
E)return;this.DateOfLastCalving=E;A.abo([this,this.Bic,this.AvM],0);},AvY:function(
E){if(this.LactationNumber===E)return;this.LactationNumber=E;A.abo([this,this.Biw
,this.AvY],0);},AvX:function(E){if(this.IsPerished===E)return;this.IsPerished=E;
A.abo([this,this.Bit,this.AvX],0);},AR4:function(E){if(this.TimestampLastTemperature===
E)return;this.TimestampLastTemperature=E;A.abo([this,this.BiU,this.AR4],0);},AR2:
function(E){if(this.TimestampLastAssessment===E)return;this.TimestampLastAssessment=
E;A.abo([this,this.BiS,this.AR2],0);},NM:function(E){if(this.Breed===E)return;this.
Breed=E;A.abo([this,this.Avn,this.NM],0);},Aj0:function(E){if(this.EaseOfDelivery===
E)return;this.EaseOfDelivery=E;A.abo([this,this.AQZ,this.Aj0],0);},M_:function(E
){if(this.WhereAbouts===E)return;this.WhereAbouts=E;A.abo([this,this.AvA,this.M_
],0);},Ana:function(E){if(this.NaisIdMother===E)return;this.NaisIdMother=E;A.abo([
this,this.AQ7,this.Ana],0);},AEq:function(E){if(this.ReasonOfLeaving===E)return;
this.ReasonOfLeaving=E;A.abo([this,this.BiH,this.AEq],0);},Aep:function(E){if(this.
IsRegistrationNoticePending===E)return;this.IsRegistrationNoticePending=E;A.abo([
this,this.Biv,this.Aep],0);},Aq$:function(E){if(this.IsDry===E)return;this.IsDry=
E;A.abo([this,this.Bis,this.Aq$],0);},QK:function(){return this.Id;},AqQ:function(
){return this.VisualId;},Bio:function(){return this.GroupId;},Avp:function(){return this.
DateOfBirth;},V6:function(){return this.Gender;},AQU:function(){return this.BirthType;
},A63:function(){return this.LocationId;},A62:function(){return this.LastTemperature;
},A6X:function(){return this.IsAlarm;},Bir:function(){return this.IsControl;},Biu:
function(){return this.IsRegistered;},A6Z:function(){return this.IsWatch;},A7z:function(
){return this.WorstAssessment;},A6Y:function(){return this.IsFever;},BiT:function(
){return this.TimestampLastControl;},BiV:function(){return this.TimestampLastWatch;
},Bix:function(){return this.LastRatingTemperature;},BiR:function(){return this.
TimestampExpirationFeverAlarm;},BiQ:function(){return this.TimestampAlarm;},PA:function(
){return this.AnimalType;},A61:function(){return this.LastBodyWeight;},A7l:function(
){return this.TimestampLastWeighing;},AjU:function(){return this.TransponderId;}
,AQ0:function(){return this.FirstBodyWeight;},ARg:function(){return this.TimestampFirstWeighing;
},Bim:function(){return this.FirstBodyWeightId;},AmZ:function(){return this.NaisId;
},Bic:function(){return this.DateOfLastCalving;},Biw:function(){return this.LactationNumber;
},Bit:function(){return this.IsPerished;},BiU:function(){return this.TimestampLastTemperature;
},BiS:function(){return this.TimestampLastAssessment;},Avn:function(){return this.
Breed;},AQZ:function(){return this.EaseOfDelivery;},AvA:function(){return this.WhereAbouts;
},AQ7:function(){return this.NaisIdMother;},BiH:function(){return this.ReasonOfLeaving;
},Biv:function(){return this.IsRegistrationNoticePending;},Bis:function(){return this.
IsDry;},_Init:function(aArg){C.Row._Init.call(this,aArg);this.__proto__=C.Animal;
this.TableId=0;},_className:"Device::Animal"};C.Row={CF:-1,TableId:2,EK:function(
Ac,AG){if(!AG){A.ab5("%s",(Axa+this.CF.toFixed())+AF7);return false;}else if(AG.
Id!==this.TableId)throw new Error(AF8);else if((Ac<0)||(Ac>=AG.Ch())){A.ab5("%s"
,(((AF9+this.CF.toFixed())+AF_)+AG.Ch().toFixed())+Axb);return false;}this.CF=Ac;
return true;},Cp:function(AG){if(!AG){A.ab5("%s",(Axa+this.CF.toFixed())+AF7);return false;
}else if(AG.Id!==this.TableId)throw new Error(AF8);else if(this.AmB()&&AG.La()){
A.ab5("%s",AUc+AG.Hz().toFixed());return false;}else if(!this.AmB()&&((this.CF<0
)||(this.CF>=AG.Ch()))){A.ab5("%s",(((AF9+this.CF.toFixed())+AF_)+AG.Ch().toFixed(
))+Axb);return false;}return true;},Gb:function(){this.Ha();this.CF=-1;},AmB:function(
){return this.CF===-1;},Ha:function(){this.CF=-2;},Aqd:function(){return this.CF
!==-2;},A6$:function(){return this.CF;},A8q:function(E){this.CF=E;},_Init:function(
aArg){this.__proto__=C.Row;A.h7++;},_Done:function(){this.__proto__=null;A.h7--;
},_ReInit:function(){},_Mark:function(D){var B;if((B=this.I)&&(B._cycle!=D))B._Mark(
B._cycle=D);},I:null,_cycle:0,_observers:null,_className:"Device::Row"};C.Rating={
Temperature:0,Id:0,AnimalId:0,Timestamp:0,BodyWeight:0,RatingTemperature:0,Faeces:
0,Respiratory:0,Appearance:0,Feed:0,EK:function(Ac,AG){var Ht=C.Row.EK.call(this
,Ac,AG);if(Ht&&!!AG){this.OnSetId(AG.CA(Ac,0));this.OnSetAnimalId(AG.CA(Ac,1));this.
OnSetTimestamp(AG.Hy(Ac,6));this.OnSetFeed(AG.IU(Ac,2));this.OnSetAppearance(AG.
IU(Ac,3));this.OnSetRespiratory(AG.IU(Ac,4));this.OnSetFaeces(AG.IU(Ac,5));this.
OnSetTemperature(AG.A48(Ac,7));this.OnSetBodyWeight(AG.ABU(Ac,8));this.OnSetRatingTemperature(
AG.IU(Ac,9));}return Ht;},Cp:function(AG){if(this.K&&this.K.Cp)return this.K.Cp.
apply(this,arguments);else return C.Rating.A_H.apply(this,arguments);},A_H:function(
AG){var Ht=C.Row.Cp.call(this,AG);if((Ht&&!!AG)&&(AG.Id===1)){var Jc=AG.Ol();if(
Jc<=0)A.ab5("%s",Ach);else{var Ay1=this.AmB();if(Ay1)this.CF=AG.Ya();else AG.Hb(
this.CF,0,this.Id);AG.Hb(this.CF,1,this.AnimalId);AG.AbS(this.CF,6,this.Timestamp
);AG.Akl(this.CF,2,this.Feed);AG.Akl(this.CF,3,this.Appearance);AG.Akl(this.CF,4
,this.Respiratory);AG.Akl(this.CF,5,this.Faeces);AG.A9j(this.CF,7,this.Temperature
);AG.ASV(this.CF,8,this.BodyWeight);AG.Akl(this.CF,9,this.RatingTemperature);AG.
On(Jc);if(Ay1)this.OnSetId(AG.AaP());var Rc=A._GetAutoObject(C.Device).Aq;var Ac=
A._GetAutoObject(C.Device).Aq.K7(0,this.AnimalId);if(Ac>=0){var B5=A._NewObject(
C.Animal,0);B5.EK(Ac,Rc);if(this.Temperature>0)B5.T2(A._GetAutoObject(C.Helper).
A5z(this));if((this.Temperature>0)&&A._GetAutoObject(C.Helper).AE5(this)){var N7=
A._GetAutoObject(C.Helper).APC(this);B5.Aj5(N7);B5.Ano(N7);}else if(this.Temperature>
0){var N7=(A._GetAutoObject(C.Helper).APC(this)||(B5.WorstAssessment===2))||(B5.
WorstAssessment===1);B5.Aj5(N7);B5.Ano(N7);}else{var N7=A._GetAutoObject(C.Helper
).APC(this)||B5.IsFever;B5.Aj5(N7);B5.Ano(N7);}B5.Cp(Rc);}}}return Ht;},Gb:function(
){C.Row.Gb.call(this);this.OnSetTimestamp(A._GetAutoObject(C.Helper).Dy());this.
OnSetId(-1);},Ha:function(){C.Row.Ha.call(this);this.OnSetTimestamp(0);this.OnSetId(
0);this.OnSetAnimalId(0);this.OnSetFeed(0);this.OnSetAppearance(0);this.OnSetRespiratory(
0);this.OnSetFaeces(0);this.OnSetTemperature(0);this.OnSetBodyWeight(0);this.OnSetRatingTemperature(
0);},OnSetTemperature:function(E){if(this.Temperature===E)return;this.Temperature=
E;A.abo([this,this.BiP,this.OnSetTemperature],0);},OnSetId:function(E){if(this.Id===
E)return;this.Id=E;A.abo([this,this.QK,this.OnSetId],0);},OnSetAnimalId:function(
E){if(this.AnimalId===E)return;this.AnimalId=E;A.abo([this,this.Bh2,this.OnSetAnimalId
],0);},OnSetFeed:function(E){if(this.Feed===E)return;this.Feed=E;A.abo([this,this.
Bij,this.OnSetFeed],0);},OnSetAppearance:function(E){if(this.Appearance===E)return;
this.Appearance=E;A.abo([this,this.Bh3,this.OnSetAppearance],0);},OnSetRespiratory:
function(E){if(this.Respiratory===E)return;this.Respiratory=E;A.abo([this,this.BiI
,this.OnSetRespiratory],0);},OnSetFaeces:function(E){if(this.Faeces===E)return;this.
Faeces=E;A.abo([this,this.Bih,this.OnSetFaeces],0);},OnSetTimestamp:function(E){
if(this.Timestamp===E)return;this.Timestamp=E;A.abo([this,this.A7k,this.OnSetTimestamp
],0);},Bl5:function(Nf,A1){switch(Nf){case 2:this.OnSetAppearance(A1);break;case
1:this.OnSetFeed(A1);break;case 4:this.OnSetFaeces(A1);break;case 3:this.OnSetRespiratory(
A1);break;default:;}},Bgk:function(Nf){switch(Nf){case 2:return this.Appearance;
case 1:return this.Feed;case 4:return this.Faeces;case 3:return this.Respiratory;
default:return 0;}},OnSetRatingTemperature:function(E){if(this.RatingTemperature===
E)return;this.RatingTemperature=E;A.abo([this,this.BiG,this.OnSetRatingTemperature
],0);},OnSetBodyWeight:function(E){if(this.BodyWeight===E)return;this.BodyWeight=
E;A.abo([this,this.Bh7,this.OnSetBodyWeight],0);},BiP:function(){return this.Temperature;
},QK:function(){return this.Id;},Bh2:function(){return this.AnimalId;},Bij:function(
){return this.Feed;},Bh3:function(){return this.Appearance;},BiI:function(){return this.
Respiratory;},Bih:function(){return this.Faeces;},A7k:function(){return this.Timestamp;
},BiG:function(){return this.RatingTemperature;},Bh7:function(){return this.BodyWeight;
},_Init:function(aArg){C.Row._Init.call(this,aArg);this.__proto__=C.Rating;this.
TableId=1;var Lp=this._variants();if(Lp){this.K={};Lp._Init.call(this,aArg);}},_Done:
function(){if(this.K)this.K._Done.call(this);this.__proto__=C.Row;C.Row._Done.call(
this);},_ReInit:function(){C.Row._ReInit.call(this);if(this.K)this.K._ReInit.call(
this);},_Mark:function(D){C.Row._Mark.call(this,D);if(this.K)this.K._Mark(D);},_variants:
function(){return A.acr.Rating._variants();},K:null,_className:"Device::Rating"};
C.HelperClass={Ub:null,Ag6:null,ASO:null,ASP:null,W:null,At:null,Kw:null,St:null
,Ado:null,Uh:null,Ug:null,AdN:null,AeZ:null,AeY:null,AeX:null,Ae0:null,Af4:null,
AFB:0,Init:function(aArg){A.pe([this,this.ASl],this);},Aj_:function(E){this.Ub=E;
A.abo([this,this.AqO,this.Aj_],0);},AEt:function(E){this.Ag6=E;A.abo([this,this.
A7a,this.AEt],0);},BxS:function(G){switch(A._GetAutoObject(C.Device).ScanState){
case 2:{var AtO=A._GetAutoObject(C.Device).OC;if(!AtO)throw new Error(AUd);switch(
AtO.TransponderType){case 1:this.Aj_(AtO);break;case 2:this.ARS(AtO);break;case 3:
this.AEt(AtO);break;case 4:this.ART(AtO);break;case 0:break;default:throw new Error(
AUe);}}break;case 4:A._GetAutoObject(C.Device).A6(11,true,A.jV,2000,null);break;
case 3:A._GetAutoObject(C.Device).A6(12,true,A.jV,2000,null);break;case 0:case 1:
break;default:throw new Error(AUf);}},Aki:function(){this.Aj_(null);this.ARS(null
);this.AEt(null);this.ART(null);},AEy:function(E){if(this.K&&this.K.AEy)return this.
K.AEy.apply(this,arguments);else return C.HelperClass.A_F.apply(this,arguments);
},A_F:function(E){A.abo([this,this.UA,this.UB],0);A._GetAutoObject(C.Device).SetSystemTime(
E);},UB:function(Ap){this.AEy(Ap);},Dy:function(){if(this.K&&this.K.Dy)return this.
K.Dy.apply(this,arguments);else return C.HelperClass.A_B.apply(this,arguments);}
,A_B:function(){var B;return((B=(this.At.Ba5()|0))<0)?B+0x100000000:B;},UA:function(
){return this.Dy();},ArH:function(){A._GetAutoObject(C.Device).Sq(-1);this.W.Ha(
);A.we(this.W,0);},A5P:function(JR){if(!JR){A.ab5("%s%U",AUg,JR);return false;}var
A$=A._GetAutoObject(C.Device).Aq.Aji(22,JR);return this.HD(A$);},Amq:function(An$
,AHP){switch(An$){case 0:{var AoC=AHP;switch(AoC){case 14:return A.aaR(A.acf.AeU
);case 6:return Asd;case 4:return A.aaR(A.acf.AdF);case 28:return Axc;case 7:return A.
aaR(A.acf.AeL);case 2:return A.aaR(A.acf.O);case 0:return A.aaR(A.acf.GB);case 37:
return PW;case 8:return A.aaR(A.acf.Alarm);case 9:return A.aaR(A.acf.AA$);case 38:
return A.aaR(A.acf.AMv);case 11:return A.aaR(A.acf.Fever);case 27:return Axd;case
10:return A.aaR(A.acf.BlL);case 12:return A.aaR(A.acf.Arq);case 29:return A.aaR(
A.acf.APT);case 18:return A.aaR(A.acf.Weighing);case 17:return AUh;case 5:return A.
aaR(A.acf.Temperature);case 3:return AUi;case 26:return A.aaR(A.acf.YN);case 35:
return A.aaR(A.acf.YN)+AUj;case 36:return AUk;case 15:return AF$;case 24:return AGa;
case 20:return Ae6;case 30:return AnO;case 21:return AUl;case 19:return AGb;case
22:return A.aaR(A.acf.Transponder);case 1:return A.aaR(A.acf.Gv);case 34:return A.
aaR(A.acf.I6);case 13:return AkH;case 31:return AGc;default:{A.ab5("%s",AGd+AoC.
toFixed());return AGe+AoC.toFixed();}}}case 1:{var AoC=AHP;switch(AoC){case 1:return A.
aaR(A.acf.Animal);case 3:return A.aaR(A.acf.AE4);case 8:return A.aaR(A.acf.AeW);
case 5:return A.aaR(A.acf.AE6);case 2:return A.aaR(A.acf.Feed);case 4:return A.aaR(
A.acf.AE7);case 7:return A.aaR(A.acf.Temperature);case 6:return A.aaR(A.acf.Bt);
default:{A.ab5("%s",AUm+AoC.toFixed());return AGe+AoC.toFixed();}}}default:A.ab5(
"%s",(AUn+An$.toFixed())+AUo);}return A.jV;},A40:function(An$,AM){var result=A.jV;
if(!!AM){result=this.Amq(An$,AM.ET);result=((result+NZ)+A._GetAutoObject(C.Converter
).A4M(AM.Operator))+NZ;if(!!(C.Int32FilterCriterion.isPrototypeOf(AM)?AM:null))result=
result+(C.Int32FilterCriterion.isPrototypeOf(AM)?AM:null).A4.toFixed();else if(!
!(C.UInt32FilterCriterion.isPrototypeOf(AM)?AM:null))result=result+(C.UInt32FilterCriterion.
isPrototypeOf(AM)?AM:null).A4.toFixed();else if(!!(C.StringFilterCriterion.isPrototypeOf(
AM)?AM:null))result=result+(C.StringFilterCriterion.isPrototypeOf(AM)?AM:null).A4;
else if(!!(C.BoolFilterCriterion.isPrototypeOf(AM)?AM:null)){if((C.BoolFilterCriterion.
isPrototypeOf(AM)?AM:null).A4)result=this.Amq(An$,AM.ET);else result=A.jV;}else if(
!!(C.GenderFilterCriterion.isPrototypeOf(AM)?AM:null)){var Bwm=A._NewObject(C.GenderToString
,0);result=result+Bwm.Lm((C.GenderFilterCriterion.isPrototypeOf(AM)?AM:null).A4);
}else if(!!(C.AnimalTypeFilterCriterion.isPrototypeOf(AM)?AM:null)){var Bvi=A._NewObject(
C.AnimalTypeToString,0);result=result+Bvi.Lm((C.AnimalTypeFilterCriterion.isPrototypeOf(
AM)?AM:null).A4);}else if(!!(C.AssessmentFilterCriterion.isPrototypeOf(AM)?AM:null
)){var Bvk=A._NewObject(C.AssesmentToString,0);result=result+Bvk.Lm((C.AssessmentFilterCriterion.
isPrototypeOf(AM)?AM:null).A4);}else if(!!(C.UInt64FilterCriterion.isPrototypeOf(
AM)?AM:null))result=result+(C.UInt64FilterCriterion.isPrototypeOf(AM)?AM:null).A4.
toFixed();else if(!!(C.WhereAboutsFilterCriterion.isPrototypeOf(AM)?AM:null)){var
Bzt=A._NewObject(C.WhereAboutsToString,0);result=result+Bzt.Lm((C.WhereAboutsFilterCriterion.
isPrototypeOf(AM)?AM:null).A4);}else A.ab5("%s",Ae7);}return result;},Nb:function(
aString,A$U,Buz){var result=A.jV;var Bdr=false;var index=0;var BuB=A$U.length;while(
!Bdr){var A1W=aString.indexOf(A$U,index);if(A1W!==-1){result=(result+A.abW(aString
,index,A1W-index))+Buz;index=A1W+BuB;}else{var A$Y=aString.length;if(index<A$Y)result=
result+A.ab2(aString,A$Y-index);Bdr=true;}}return result;},ARS:function(E){this.
ASO=E;A.abo([this,this.BiJ,this.ARS],0);},ART:function(E){this.ASP=E;A.abo([this
,this.BiK,this.ART],0);},Bbt:function(){return((A._GetAutoObject(C.Device).ScanState===
2)&&!!A._GetAutoObject(C.Device).OC)&&(A._GetAutoObject(C.Device).OC.TransponderType===
1);},Afz:function(G){if(!this.W.AmB()&&!!this.W.Id)this.Bhl(this.W.Id);},AuK:function(
Ec){return A._GetAutoObject(C.Helper).Uh.Get(Ec);},A4X:function(Ec){return A._GetAutoObject(
C.Helper).Ug.Get(Ec);},A44:function(){var P=0;var min=32767;while(P<A._GetAutoObject(
C.Helper).Uh.Mt){if(A._GetAutoObject(C.Helper).Uh.Get(P)<min)min=A._GetAutoObject(
C.Helper).Uh.Get(P);P=P+1;}return min;},ASl:function(G){A.zV([this,this.Afz],A._GetAutoObject(
C.Device).Aq,0);},APC:function(DU){if(!DU)return false;var BgX=(((this.AyX(DU.Faeces
)||this.AyX(DU.Feed))||this.AyX(DU.Appearance))||this.AyX(DU.Respiratory))||this.
AyX(DU.RatingTemperature);return BgX||this.A5z(DU);},AyX:function(A$y){return(A$y===
2)||(A$y===1);},A5z:function(DU){return!!DU&&(DU.Temperature>A._GetAutoObject(C.
Helper).AuK(A._GetAutoObject(C.Helper).W.AnimalType));},HD:function(L0){var A0V=
false;if(L0>=0){if(L0!==this.W.CF)A._GetAutoObject(C.Device).Sq(L0);A0V=this.W.EK(
L0,A._GetAutoObject(C.Device).Aq);if(A0V)A.we(this.W,0);}else{A._GetAutoObject(C.
Device).Sq(-1);this.W.Ha();A.we(this.W,0);}return A0V;},Ahd:function(Ahw){var B;
return(((B=(this.At.Ba5()|0))<0)?B+0x100000000:B)-this.Auh(Ahw);},ArW:function(){
var B;A.pe([B=this.Kw,B.Ant],this);},ByY:function(G){A._GetAutoObject(C.Device).
A6(16,false,AGf,0,null);A._GetAutoObject(C.Device).A6(5,true,A.jV,0,null);},Blf:
function(G){var As=(C.PopupContext.isPrototypeOf(G)?G:null);if(!!As&&(As.PopupState===
5))this.ArW();},Bk5:function(E){if(this.AFB===E)return;this.AFB=E;A._GetAutoObject(
C.Device).A6(16,true,this.AFB.toFixed(),0,[this,this.Blf]);},MF:function(Bt$,BuQ
){var D1;var BdY=A._NewObject(A.Core.Anz,0);var Gt=A._NewObject(A.Core.Bt,0);var
KY=A._NewObject(A.Core.Bt,0);Gt.Initialize(Bt$);KY.Initialize(BuQ);D1=KY.Bfy(Gt);
BdY.Initialize2(0,D1.ACk,D1.AC6,D1.AFg);if(Gt.J(BdY).Gz===Gt.Gz)return D1.J5;else
return D1.J5+1;},By0:function(G){A._GetAutoObject(C.Device).UpdateMeasureState(3
);if((A._GetAutoObject(C.Device).Kk>=A._GetAutoObject(C.Device).Zo)&&(A._GetAutoObject(
C.Device).Kk<=A._GetAutoObject(C.Helper).AuK(A._GetAutoObject(C.Helper).W.AnimalType
))){var AH7=A._GetAutoObject(C.Helper).W.Id;var Byv=A._GetAutoObject(C.Device).Aq.
K7(0,AH7);A._GetAutoObject(C.Device).Aq.Na(Byv,9,false);A._GetAutoObject(C.Device
).Aq.Bm(A._GetAutoObject(C.Device).Aq.Filter);}},AJK:function(G){var BeN=A._GetAutoObject(
C.Helper).AuK(A._GetAutoObject(C.Helper).W.AnimalType);var BeH=A._GetAutoObject(
C.Helper).A4X(A._GetAutoObject(C.Helper).W.AnimalType);var AtH=A.abz(BeN-100,BeH+
100);this.BaK(AtH);},Auh:function(Ahw){return Ahw*86400;},Aky:function(Kr){var B;
if(!!Kr&&(Kr<(((B=Math.trunc(Math.pow(10,A._GetAutoObject(C.Device).Fw)))<0)?B+0x10000000000000000:
B)))return-1;return A._GetAutoObject(C.Helper).Tu(Kr,A._GetAutoObject(C.Device).
Fw&0xFF,A._GetAutoObject(C.Device).FN&0xFF)|0;},AE5:function(DU){if(!DU)return false;
return((!!DU.Faeces||!!DU.Feed)||!!DU.Appearance)||!!DU.Respiratory;},Ahj:function(
AY9,A$0,AHQ,Ec){var B;var Apf;if((AY9<650000)&&(A$0<this.Dy())){var Bal=this.Af4.
AuM(Ec);var Bak=0;if(Bal>=0)Bak=this.AeX.Get(Bal);Apf=AY9+(this.MF(A$0,this.Dy()
)*Bak);if(AHQ>0){var AZ4=this.AzO(AHQ);Apf=(Math.trunc(((((B=Apf)<0)?B+0x10000000000000000:
B)+Math.trunc(AZ4/2))/AZ4)*AZ4)|0;}if(Apf>650000)Apf=650000;}else Apf=AY9;return Apf;
},AB1:function(DU){var ApD=A._GetAutoObject(C.Converter).Adp(DU.Faeces);if(ApD<A.
_GetAutoObject(C.Converter).Adp(DU.Feed))ApD=A._GetAutoObject(C.Converter).Adp(DU.
Feed);if(ApD<A._GetAutoObject(C.Converter).Adp(DU.Appearance))ApD=A._GetAutoObject(
C.Converter).Adp(DU.Appearance);if(ApD<A._GetAutoObject(C.Converter).Adp(DU.Respiratory
))ApD=A._GetAutoObject(C.Converter).Adp(DU.Respiratory);return A._GetAutoObject(
C.Converter).A9H(ApD);},Awy:function(DU,Ne){if(!!DU){DU.OnSetFaeces(Ne);DU.OnSetFeed(
Ne);DU.OnSetAppearance(Ne);DU.OnSetRespiratory(Ne);}},Bgi:function(AG,AHV,Acy,WV
,Afa){if(!AG)throw new Error(Ase);var Bc=A._NewObject(C.Filter,0);var Ao2=AG.Filter;
var N2=A._NewObject(C.Int32FilterCriterion,0);N2.Operator=0;N2.ET=1;N2.A4=Acy;Bc.
CZ(N2);if(WV>0){var Od=A._NewObject(C.UInt32FilterCriterion,0);Od.Operator=2;Od.
ET=6;Od.A4=WV;Bc.CZ(Od);}if(Afa>0){var N6=A._NewObject(C.UInt32FilterCriterion,0
);N6.Operator=3;N6.ET=6;N6.A4=Afa;Bc.CZ(N6);}AG.Bm(Bc);var L1=A._NewObject(C.Int32ArrayWrapper
,0);L1.Y0(6);var P;for(P=0;P<L1.Mt;P=P+1)L1.Set(P,0);var UK;for(P=0;P<AG.Ch();P=
P+1){UK=AG.IU(P,AHV);L1.Set(UK,L1.Get(UK)+1);}AG.Bm(Ao2);return L1;},Ze:function(
Ahw){var B;var Gt=A._NewObject(A.Core.Bt,0);var BdX=A._NewObject(A.Core.Anz,0);Gt.
Initialize(A._GetAutoObject(C.Converter).Ahf());BdX.Initialize2(Ahw,0,0,0);Gt=Gt.
Bmx(BdX);return((B=(Gt.JF()|0))<0)?B+0x100000000:B;},A4Y:function(AG,Acy,Afa,WV){
if(!AG)throw new Error(Ase);var Bc=A._NewObject(C.Filter,0);var Ao2=AG.Filter;var
N2=A._NewObject(C.Int32FilterCriterion,0);N2.Operator=0;N2.ET=1;N2.A4=Acy;Bc.CZ(
N2);if(WV>0){var Od=A._NewObject(C.UInt32FilterCriterion,0);Od.Operator=2;Od.ET=
6;Od.A4=WV;Bc.CZ(Od);}if(Afa>0){var N6=A._NewObject(C.UInt32FilterCriterion,0);N6.
Operator=3;N6.ET=6;N6.A4=Afa;Bc.CZ(N6);}AG.Bm(Bc);var L1=A._NewObject(C.Int32ArrayWrapper
,0);L1.Y0(6);var P;for(P=0;P<L1.Mt;P=P+1)L1.Set(P,0);var Aoq=A._NewObject(C.Rating
,0);var AZW;for(P=0;P<AG.Ch();P=P+1){Aoq.EK(P,AG);if(A._GetAutoObject(C.Helper).
AE5(Aoq)){AZW=A._GetAutoObject(C.Helper).AB1(Aoq);L1.Set(AZW,L1.Get(AZW)+1);}}AG.
Bm(Ao2);return L1;},A0s:function(AG,Acy,BvT){if(!AG)throw new Error(Ase);var Bc=
A._NewObject(C.Filter,0);var Ao2=AG.Filter;var N2=A._NewObject(C.Int32FilterCriterion
,0);N2.Operator=0;N2.ET=1;N2.A4=Acy;Bc.CZ(N2);var WV=A._GetAutoObject(C.Converter
).Ahf()+A._GetAutoObject(C.Helper).Auh(BvT);var Afa=WV+A._GetAutoObject(C.Helper
).Auh(1);var Od=A._NewObject(C.UInt32FilterCriterion,0);Od.Operator=2;Od.ET=6;Od.
A4=WV;Bc.CZ(Od);var N6=A._NewObject(C.UInt32FilterCriterion,0);N6.Operator=3;N6.
ET=6;N6.A4=Afa;Bc.CZ(N6);AG.Bm(Bc);var Aoq=A._NewObject(C.Rating,0);var UK;var LJ=
0;var P;for(P=0;P<AG.Ch();P=P+1){Aoq.EK(P,AG);if(A._GetAutoObject(C.Helper).AE5(
Aoq)){UK=A._GetAutoObject(C.Helper).AB1(Aoq);if(A._GetAutoObject(C.Converter).Adp(
UK)>A._GetAutoObject(C.Converter).Adp(LJ))LJ=UK;}}AG.Bm(Ao2);return LJ;},AmA:function(
){if((A._GetAutoObject(C.Device).WeightRecordingScope===2)||(A._GetAutoObject(C.
Device).WeightRecordingScope===1))return true;else return false;},A5C:function(){
if((A._GetAutoObject(C.Device).WeightRecordingScope===2)||!A._GetAutoObject(C.Device
).WeightRecordingScope)return true;else return false;},Bgj:function(AG,AHV,Acy,WV
,Afa){if(!AG)throw new Error(Ase);var Bc=A._NewObject(C.Filter,0);var Ao2=AG.Filter;
var N2=A._NewObject(C.Int32FilterCriterion,0);N2.Operator=0;N2.ET=1;N2.A4=Acy;Bc.
CZ(N2);if(WV>0){var Od=A._NewObject(C.UInt32FilterCriterion,0);Od.Operator=2;Od.
ET=6;Od.A4=WV;Bc.CZ(Od);}if(Afa>0){var N6=A._NewObject(C.UInt32FilterCriterion,0
);N6.Operator=3;N6.ET=6;N6.A4=Afa;Bc.CZ(N6);}AG.Bm(Bc);var L1=A._NewObject(C.Int32ArrayWrapper
,0);L1.Y0(6);var P;for(P=0;P<L1.Mt;P=P+1)L1.Set(P,0);if(AG.Ch()>0){var UK=AG.IU(
0,AHV);var Apk=AG.Hy(P,6);var Ad=A._NewObject(A.Core.Bt,0);Ad.Initialize(Apk);var
ApC=UK;var AIN=A._NewObject(A.Core.Bt,0);AIN.Initialize(Ad.JF());for(P=1;P<AG.Ch(
);P=P+1){UK=AG.IU(P,AHV);Apk=AG.Hy(P,6);Ad.Initialize(Apk);if((Ad.Abp()!==AIN.Abp(
))||(Ad.Year!==AIN.Year)){L1.Set(ApC,L1.Get(ApC)+1);AIN.Initialize(Ad.JF());ApC=
UK;}else if(!!UK&&(UK<ApC))ApC=UK;}L1.Set(ApC,L1.Get(ApC)+1);}AG.Bm(Ao2);return L1;
},ApL:function(LW){var B;var Gt=A._NewObject(A.Core.Bt,0);Gt.Initialize(LW);Gt.Am8(
0);Gt.Am$(0);Gt.Anc(0);return((B=(Gt.JF()|0))<0)?B+0x100000000:B;},AMJ:function(
LW){var B;LW=LW+86400;var Gt=A._NewObject(A.Core.Bt,0);Gt.Initialize(LW);Gt.Am8(
0);Gt.Am$(0);Gt.Anc(0);return((B=(Gt.JF()|0))<0)?B+0x100000000:B;},Bgl:function(
ByX,Bv4,AlJ,Ak8){var BaF=A._GetAutoObject(C.Helper).MF(ByX,Bv4);if(BaF>0)return((
Ak8-AlJ)/BaF)|0;return 0;},Bm_:function(Bua,BuR){var Gt=A._NewObject(A.Core.Bt,0
);var KY=A._NewObject(A.Core.Bt,0);Gt.Initialize(Bua);KY.Initialize(BuR);return(
Gt.Year===KY.Year)&&(Gt.Abp()===KY.Abp());},A42:function(){var Bc=A._GetAutoObject(
C.Helper).MZ();var BbG=A._NewObject(C.UInt32FilterCriterion,0);var Bu0=A._GetAutoObject(
C.Helper).Ze(A._GetAutoObject(C.Device).Ap_)-1;BbG.Initialize(28,2,Bu0,true);Bc.
CZ(BbG);var UG=A._NewObject(C.AnimalTypeFilterCriterion,0);UG.Initialize(14,0,1,
true);Bc.CZ(UG);if(A._GetAutoObject(C.Device).Amn){var Azb=A._NewObject(C.UInt32FilterCriterion
,0);var A0Q=A._GetAutoObject(C.Helper).Dy()-21600;Azb.Initialize(30,3,A0Q,true);
Bc.CZ(Azb);}return Bc;},BlO:function(){var Jc=A._GetAutoObject(C.Device).Aq.Ol();
if(Jc<=0)A.ab5("%s",Ach);else{A._GetAutoObject(C.Device).Aq.Ha();A._GetAutoObject(
C.Device).Aq.On(Jc);}Jc=A._GetAutoObject(C.Device).AfW.Ol();if(Jc<=0)A.ab5("%s",
Ach);else{A._GetAutoObject(C.Device).AfW.Ha();A._GetAutoObject(C.Device).AfW.On(
Jc);}Jc=A._GetAutoObject(C.Device).Bq.Ol();if(Jc<=0)A.ab5("%s",Ach);else{A._GetAutoObject(
C.Device).Bq.Ha();A._GetAutoObject(C.Device).Bq.On(Jc);}Jc=A._GetAutoObject(C.Device
).O$.Ol();if(Jc<=0)A.ab5("%s",Ach);else{A._GetAutoObject(C.Device).O$.Ha();A._GetAutoObject(
C.Device).O$.On(Jc);}},Bhl:function(Acy){var A$=A._GetAutoObject(C.Device).Aq.K7(
0,Acy);return this.HD(A$);},APH:function(JR){var AhY=A._GetAutoObject(C.Device).
Aq.AdL(22,JR);return AhY;},ANp:function(){var Bc=A._GetAutoObject(C.Helper).MZ();
var AiD=A._NewObject(C.UInt64FilterCriterion,0);AiD.Initialize(22,0,0,true);Bc.CZ(
AiD);return Bc;},ANi:function(Aoj,Bv1,SR){var ZP=-1;switch(Aoj){case 2:ZP=30;break;
case 3:ZP=31;break;case 10:ZP=19;break;default:A.ab5("%s%e",SO,Aoj);}if(ZP<0)return null;
var AcL=A._NewObject(C.UInt32FilterCriterion,0);AcL.Initialize(ZP,3,A._GetAutoObject(
C.Helper).Dy()-Bv1,SR);return AcL;},BlN:function(aFilter){var AM=aFilter.DX(30,3
);if(!!AM)aFilter.QQ(AM);AM=aFilter.DX(31,3);if(!!AM)aFilter.QQ(AM);AM=aFilter.DX(
19,3);if(!!AM)aFilter.QQ(AM);},AZN:function(Afj,AxT,AG){if(AG.La())return 5;if(Afj.
VisualId<=0)switch(AxT){case 0:if(!Afj.NaisId)return 1;break;case 1:if(!Afj.TransponderId
)return 1;break;case 3:case 2:case 5:case 4:return 1;default:throw new Error(AGg+
AxT.toFixed());}if((!Afj.NaisId&&!Afj.TransponderId)&&A._GetAutoObject(C.Device).
Aq.Ajf(1,Afj.VisualId))return 2;if(!!Afj.NaisId&&A._GetAutoObject(C.Helper).APF(
Afj.NaisId))return 3;if(!!Afj.TransponderId&&A._GetAutoObject(C.Helper).APH(Afj.
TransponderId))return 4;return 0;},ApG:function(EB){EB.DT(A._GetAutoObject(C.Device
).AnimalType);EB.NM(A._GetAutoObject(C.Device).Breed);EB.Sh(A._GetAutoObject(C.Helper
).Dy()-A._GetAutoObject(C.Helper).Auh(A._GetAutoObject(C.Device).AiQ));EB.JG(A._GetAutoObject(
C.Device).Gender);EB.M_(A._GetAutoObject(C.Device).WhereAbouts);},AKW:function(Q9
,EB){var GH=0;switch(Q9){case 0:GH=A._GetAutoObject(C.Helper).Aky(EB.NaisId);break;
case 1:GH=A._GetAutoObject(C.Helper).Aky(EB.TransponderId);break;case 3:GH=A._GetAutoObject(
C.Device).Aqi;break;case 2:GH=A._GetAutoObject(C.Device).Aqj;break;case 4:case 5:
GH=A._GetAutoObject(C.Device).Ajs;break;default:throw new Error(AGh+Q9.toFixed()
);}return GH;},A9N:function(AkO,LX,BtY,A$C,Buu){var B;var P$=null;var W7=null;switch(
AkO){case 0:{P$=[B=A._GetAutoObject(C.Device),B.AQ6,B.AYv];W7=[B=A._GetAutoObject(
C.Device),B.Avx,B.AxN];}break;case 1:switch(LX){case 1:{P$=[B=A._GetAutoObject(C.
Device),B.A67,B.A__];W7=[B=A._GetAutoObject(C.Device),B.Avv,B.AxL];}break;case 0:{
P$=[B=A._GetAutoObject(C.Device),B.A68,B.A_$];W7=[B=A._GetAutoObject(C.Device),B.
Avw,B.AxM];}break;case 2:{P$=[B=A._GetAutoObject(C.Device),B.AQ6,B.AYv];W7=[B=A.
_GetAutoObject(C.Device),B.Avx,B.AxN];}break;default:throw new Error(Axe+LX.toFixed(
));}break;default:throw new Error(AGi+AkO.toFixed());}if(!!P$&&!!W7){P$[2].call(
P$[0],BtY);if((W7[1].call(W7[0])>0)&&(A$C<Buu))P$[2].call(P$[0],P$[1].call(P$[0]
)+W7[1].call(W7[0]));else if((W7[1].call(W7[0])<0)&&(A$C>0))P$[2].call(P$[0],P$[
1].call(P$[0])+W7[1].call(W7[0]));return P$[1].call(P$[0]);}return 0;},ATL:function(
EB,AkO,Bt5){if(!EB||(Bt5===true))return;switch(AkO){case 0:EB.M8(A._GetAutoObject(
C.Device).Avi);break;case 1:switch(EB.Gender){case 0:EB.M8(A._GetAutoObject(C.Device
).AC9);break;case 1:EB.M8(A._GetAutoObject(C.Device).AC8);break;case 2:EB.M8(A._GetAutoObject(
C.Device).Avi);break;default:throw new Error(Axe+EB.Gender.toFixed());}break;default:
throw new Error(AGi+AkO.toFixed());}},BgY:function(Q9,EB){var result=false;switch(
Q9){case 0:result=!!EB.NaisId;break;case 1:result=!!EB.TransponderId;break;case 3:
case 2:case 4:case 5:result=false;break;default:throw new Error(AGh+Q9.toFixed()
);}return result;},AI1:function(EB,A$x,AxT,AsT,Afd){switch(A$x){case 2:if(AsT<=0
)A._GetAutoObject(C.Device).A6(21,true,EB.VisualId.toFixed(),0,Afd);else A._GetAutoObject(
C.Device).A6(48,true,(EB.VisualId.toFixed()+Axf)+AsT.toFixed(),0,Afd);break;case
3:if(AsT<=0)A._GetAutoObject(C.Device).A6(21,true,A._GetAutoObject(C.Converter).
Q1(EB.NaisId),0,Afd);else A._GetAutoObject(C.Device).A6(48,true,(A._GetAutoObject(
C.Converter).Q1(EB.NaisId)+Axf)+AsT.toFixed(),0,Afd);break;case 4:if(AsT<=0)A._GetAutoObject(
C.Device).A6(25,true,A._GetAutoObject(C.Converter).Q1(EB.TransponderId),0,Afd);else
A._GetAutoObject(C.Device).A6(47,true,(A._GetAutoObject(C.Converter).Q1(EB.TransponderId
)+Axf)+AsT.toFixed(),0,Afd);break;case 1:switch(AxT){case 1:A._GetAutoObject(C.Device
).A6(42,true,A.jV,0,Afd);break;case 0:A._GetAutoObject(C.Device).A6(43,true,A.jV
,0,Afd);break;case 3:case 2:case 5:case 4:A._GetAutoObject(C.Device).A6(22,true,
A.jV,0,Afd);break;default:throw new Error(AGg+AxT.toFixed());}break;case 5:A._GetAutoObject(
C.Device).A6(41,true,A._GetAutoObject(C.Device).Aq.Hz().toFixed(),0,Afd);break;case
0:break;default:throw new Error(AUp+A$x.toFixed());}},Ba9:function(A$K,LX){var B;
var Azf=null;switch(A$K){case 0:Azf=[B=A._GetAutoObject(C.Device),B.Avx,B.AxN];break;
case 1:switch(LX){case 1:Azf=[B=A._GetAutoObject(C.Device),B.Avv,B.AxL];break;case
0:Azf=[B=A._GetAutoObject(C.Device),B.Avw,B.AxM];break;case 2:Azf=[B=A._GetAutoObject(
C.Device),B.Avx,B.AxN];break;default:throw new Error(Axe+LX.toFixed());}break;default:
throw new Error(AUq+A$K.toFixed());}return Azf;},A5a:function(P0,BuH){var Aab=A.
_NewObject(A.Core.Bt,0);Aab.Initialize(P0);var AAu=Aab.Year;var A$=A._GetAutoObject(
C.Device).O$.K7(0,AAu);var UJ=A._NewObject(C.CalfDeregistrations,0);if(A$<0){if(
A._GetAutoObject(C.Device).O$.La())A._GetAutoObject(C.Device).A6(51,true,A._GetAutoObject(
C.Device).O$.Hz().toFixed(),0,null);else{UJ.Gb();UJ.Aka(AAu);}}else UJ.EK(A$,A._GetAutoObject(
C.Device).O$);UJ.AvO(UJ.Deregistrations+1);if(BuH)UJ.AvN(UJ.Deaths+1);UJ.Cp(A._GetAutoObject(
C.Device).O$);},AKU:function(LJ,Alg,Ak9){var AJm=0;if((Alg&&(Ak9===1))||(LJ===1)
)AJm=1;else if((Alg&&(Ak9===2))||(LJ===2))AJm=2;else if(!!LJ&&(LJ!==5))AJm=LJ;return AJm;
},BaK:function(BuZ){var B;if(A._GetAutoObject(C.Device).MeasureState===1){this.St.
Cq=A._GetAutoObject(C.Device).Zo;this.St.BY=BuZ;this.St.Anr(this);}},ABQ:function(
){var Bc=this.ANh();var Bbv=A._NewObject(C.BoolFilterCriterion,0);Bbv.Initialize(
38,0,true,true);Bc.CZ(Bbv);return Bc;},A4W:function(JO){var Bc=A._GetAutoObject(
C.Helper).MZ();if(A._GetAutoObject(C.Device).AlU){var A0v=A._GetAutoObject(C.Helper
).ANi(JO,21600,true);Bc.CZ(A0v);}return Bc;},A46:function(){var Bc=A._GetAutoObject(
C.Helper).MZ();var BbW=A._NewObject(C.UInt64FilterCriterion,0);BbW.Initialize(26
,0,0,true);Bc.CZ(BbW);return Bc;},A49:function(){var B;var Bc=A._GetAutoObject(C.
Helper).MZ();var Azl=(C.WhereAboutsFilterCriterion.isPrototypeOf(B=Bc.DX(34,3))?
B:null);if(!!Azl)Bc.QQ(Azl);var Bc$=A._NewObject(C.BoolFilterCriterion,0);Bc$.Initialize(
37,0,true,true);Bc.CZ(Bc$);return Bc;},Tu:function(A1,BuA,AY_){var B;A1=Math.trunc(
A1/this.AzO(BuA));A1%=this.AzO(AY_);return A1;},AzO:function(A$L){switch(A$L){case
0:return 1;case 1:return 10;case 2:return 100;case 3:return 1000;case 4:return 10000;
case 5:return 100000;case 6:return 1000000;case 7:return 10000000;case 8:return 100000000;
case 9:return 1000000000;case 10:return 10000000000;case 11:return 100000000000;
case 12:return 1000000000000;case 13:return 10000000000000;case 14:return 100000000000000;
case 15:return 1000000000000000;default:throw new Error(AUr+A$L.toFixed());}},MZ:
function(){var Bc=A._NewObject(C.Filter,0);var Bdv=A._NewObject(C.BoolFilterCriterion
,0);Bdv.Initialize(10,0,true,true);Bc.CZ(Bdv);var Azl=A._NewObject(C.WhereAboutsFilterCriterion
,0);Azl.Initialize(34,3,6,true);Bc.CZ(Azl);return Bc;},Aqt:function(aFilter){return!
this.ABT(aFilter);},ABT:function(aFilter){var I_=0;var Ay=aFilter.ANj();while(!!
Ay){if(Ay.Aa6===false)I_++;Ay=aFilter.ANo(Ay);}return I_;},ANh:function(){var Bc=
this.MZ();var UG=A._NewObject(C.AnimalTypeFilterCriterion,0);UG.Initialize(14,0,
1,true);Bc.CZ(UG);return Bc;},ABY:function(){var B;var A2p;var JS=this.BgA();A2p=(((
B=A._GetAutoObject(C.Converter).ApT(JS))<0)?B+0x10000000000000000:B)*this.AzO(12
);if((JS===10)&&(A._GetAutoObject(C.Device).T_>0)){var Bwn=A._GetAutoObject(C.Helper
).Tu(A._GetAutoObject(C.Device).T_,10,2)*this.AzO(8);A2p+=Bwn;}return A2p;},BgA:
function(){var JS=0;if(A._GetAutoObject(C.Device).T_>0)JS=A._GetAutoObject(C.Converter
).Ab7(A._GetAutoObject(C.Device).T_);if(!JS)JS=A._GetAutoObject(C.Converter).A5F(
A._GetAutoObject(C.Device).Language);return JS;},APF:function(WU){var AhY=A._GetAutoObject(
C.Device).Aq.AdL(26,WU);return AhY;},AjA:function(Afe){switch(Afe){case 0:case 1:
case 2:case 3:case 4:case 5:return false;case 6:case 7:case 8:case 9:case 10:return true;
default:throw new Error(AUs+Afe.toFixed());}},BeF:function(Q9,EB){var GH=0;switch(
Q9){case 1:GH=A._GetAutoObject(C.Helper).Aky(EB.TransponderId);break;case 0:if(!
A._GetAutoObject(C.Device).EartagNrAssignmentMode)GH=A._GetAutoObject(C.Device).
Ajs;else switch(EB.Gender){case 0:GH=A._GetAutoObject(C.Device).Aqj;break;case 1:
GH=A._GetAutoObject(C.Device).Aqi;break;case 2:GH=A._GetAutoObject(C.Device).Ajs;
break;default:throw new Error(AGj+EB.Gender.toFixed());}break;default:throw new Error(
AUt+Q9.toFixed());}return GH;},Bf9:function(){var B;var AyV=(((((((A.aaR(A.acf.Ag9
)+A.aaR(A.acf.Colon))+OP)+A._GetAutoObject(C.Device).Ag9)+Axg)+A.aaR(A.acf.Blw))+
A.aaR(A.acf.Colon))+OP)+A._GetAutoObject(A.acj.KB).Bf7(((B=A._GetAutoObject(C.Device
).QH.Timestamp)<0)?B+0x100000000:B);return AyV;},Bf_:function(){var B;var AyV=((((((((((((((((((((((((((((
AUu+A._GetAutoObject(C.Device).RD.ACY.toFixed())+Lo)+A._GetAutoObject(C.Device).
RD.AC5.toFixed())+Lo)+A._GetAutoObject(C.Device).RD.AFc.toFixed())+OO)+A._GetAutoObject(
C.Device).RD.ABg)+OO)+A._GetAutoObject(A.acj.KB).Ajj(((B=A._GetAutoObject(C.Device
).RD.Timestamp)<0)?B+0x100000000:B))+OP)+AUv)+A._GetAutoObject(C.Device).Sd.ACY.
toFixed())+Lo)+A._GetAutoObject(C.Device).Sd.AC5.toFixed())+Lo)+A._GetAutoObject(
C.Device).Sd.AFc.toFixed())+OO)+A._GetAutoObject(C.Device).Sd.ABg)+OO)+A._GetAutoObject(
A.acj.KB).Ajj(((B=A._GetAutoObject(C.Device).Sd.Timestamp)<0)?B+0x100000000:B))+
OP)+AUw)+A._GetAutoObject(C.Helper).BgD())+OO)+A._GetAutoObject(C.Device).GetCommitHash(
))+OO)+A._GetAutoObject(C.Device).GetCommitCount().toFixed())+OO)+A._GetAutoObject(
A.acj.KB).Ajj(A._GetAutoObject(C.Device).GetCommitEpoch());return AyV;},Bf8:function(
){var B;var AyV=(((((((((((((((((((((AUx+A._GetAutoObject(C.Device).QH.AP4.toFixed(
))+Lo)+A._GetAutoObject(C.Device).QH.AP5.toFixed())+Lo)+A._GetAutoObject(C.Device
).QH.AP3.toFixed())+OP)+A.aaR(A.acf.A4P))+A.aaR(A.acf.Colon))+NZ)+A._GetAutoObject(
A.acj.KB).Ajj(((B=A._GetAutoObject(C.Device).QH.Timestamp)<0)?B+0x100000000:B))+
Axg)+AUy)+A._GetAutoObject(C.Device).Sy.ATE.toFixed())+Lo)+A._GetAutoObject(C.Device
).Sy.ATF.toFixed())+Lo)+A._GetAutoObject(C.Device).Sy.ATD.toFixed())+OP)+A.aaR(A.
acf.A4P))+A.aaR(A.acf.Colon))+NZ)+A._GetAutoObject(A.acj.KB).Ajj(((B=A._GetAutoObject(
C.Device).Sy.Timestamp)<0)?B+0x100000000:B);return AyV;},A47:function(AY_){var B;
var P;var AzT=A.jV;for(P=1;P<=AY_;P=P+1)if(!!A.abz(0,2))AzT=AzT+String.fromCharCode(
A.abz(97,104)&0xFFFF);else AzT=AzT+String.fromCharCode(A.abz(48,57)&0xFFFF);return AzT;
},AaO:function(Ec){var Ax$=0;if(Ec===1)Ec=0;var Bap=this.Af4.AuM(Ec);if(Bap>=0)Ax$=
this.Ae0.Get(Bap);return Ax$;},AB0:function(Ec){var FI=0;var AAs=this.Af4.AuM(Ec
);if(AAs>=0)FI=this.AeZ.Get(AAs);return FI;},ABZ:function(Ec){var FI=0;var AAs=this.
Af4.AuM(Ec);if(AAs>=0)FI=this.AeY.Get(AAs);return FI;},A4Z:function(){var Bc=this.
MZ();var UG=A._NewObject(C.AnimalTypeFilterCriterion,0);UG.Initialize(14,0,A._GetAutoObject(
C.Device).ABA,true);Bc.CZ(UG);return Bc;},API:function(Kr){var BL=Math.trunc(Kr/
1000000000000)|0;if(!BL)return 0;else if(BL>=900)return 1;else if(!A._GetAutoObject(
C.Converter).AL$(BL))return 2;else return 3;},A4$:function(){var Bc=A._GetAutoObject(
C.Helper).ANp();var AkR=A._GetAutoObject(C.Helper).Bgh(3,A._GetAutoObject(C.Device
).AC1);AkR.Aa6=true;Bc.CZ(AkR);return Bc;},Bgh:function(ED,A$w){var Ay=A._NewObject(
C.UInt32FilterCriterion,0);Ay.ET=4;switch(ED){case 2:{Ay.Operator=3;Ay.A4=A._GetAutoObject(
C.Helper).Ze(A$w);}break;case 3:{Ay.Operator=2;Ay.A4=A._GetAutoObject(C.Helper).
Ze(A$w-1);}break;default:A.ab5("%s%e",AUz,ED);}return Ay;},BgD:function(){return(((
A._GetAutoObject(C.Device).GetVersionMajor().toFixed()+Lo)+A._GetAutoObject(C.Device
).GetVersionMinor().toFixed())+Lo)+A._GetAutoObject(C.Device).GetVersionRev().toFixed(
);},BeG:function(Q9,EB){var GH=0;switch(Q9){case 0:GH=EB.VisualId;break;case 2:GH=
A._GetAutoObject(C.Helper).Aky(EB.TransponderId);break;case 1:if(!A._GetAutoObject(
C.Device).EartagNrAssignmentMode)GH=A._GetAutoObject(C.Device).Ajs;else switch(EB.
Gender){case 0:GH=A._GetAutoObject(C.Device).Aqj;break;case 1:GH=A._GetAutoObject(
C.Device).Aqi;break;case 2:GH=A._GetAutoObject(C.Device).Ajs;break;default:throw new
Error(AGj+EB.Gender.toFixed());}break;default:throw new Error(AUA+Q9.toFixed());
}return GH;},A9O:function(){var B;var IM=null;var SY=0;if(!A._GetAutoObject(C.Device
).EartagNrAssignmentMode){IM=[B=A._GetAutoObject(C.Device),B.AmY,B.An0];SY=A._GetAutoObject(
C.Device).Aum;}else switch(A._GetAutoObject(C.Helper).W.Gender){case 1:{IM=[B=A.
_GetAutoObject(C.Device),B.Avs,B.AxJ];SY=A._GetAutoObject(C.Device).ABs;}break;case
0:{IM=[B=A._GetAutoObject(C.Device),B.Avt,B.AxK];SY=A._GetAutoObject(C.Device).ABt;
}break;case 2:{IM=[B=A._GetAutoObject(C.Device),B.AmY,B.An0];SY=A._GetAutoObject(
C.Device).Aum;}break;default:;}if(!!IM)switch(SY){case 1:IM[2].call(IM[0],A._GetAutoObject(
C.Helper).W.VisualId-1);break;case 0:IM[2].call(IM[0],A._GetAutoObject(C.Helper).
W.VisualId+1);break;default:;}},A5D:function(WU,EB){return(EB.NaisId!==WU)&&this.
APF(WU);},Bg7:function(JR,EB){return(EB.TransponderId!==JR)&&this.APH(JR);},ANf:
function(){var Bc=A._GetAutoObject(C.Helper).A49();var Azd=A._NewObject(C.UInt64FilterCriterion
,0);Azd.Initialize(35,5,0,true);Bc.CZ(Azd);return Bc;},ANr:function(){var Bc=A._GetAutoObject(
C.Helper).A49();var Azd=A._NewObject(C.UInt64FilterCriterion,0);Azd.Initialize(35
,0,0,true);Bc.CZ(Azd);return Bc;},Ms:function(AY1,Ahv){AY1.Aj(Ahv);AY1.Ar(Ahv);AY1.
Y(Ahv);},A31:function(Ahx){var B;var Aa;var A07=false;var W1=Ahx.Vp(null,0x1);while(
!!W1&&(((B=W1)?B.__proto__:null)!==A.Core.Z)){Aa=(A.kR.Ci.isPrototypeOf(W1)?W1:null
);if(!!Aa){Aa.Bf(A07);A07=!A07;}W1=Ahx.Vp(W1,0x1);}},AqO:function(){return this.
Ub;},A7a:function(){return this.Ag6;},BiJ:function(){return this.ASO;},BiK:function(
){return this.ASP;},BiN:function(){return this.AFB;},_Init:function(aArg){C.Amg.
_Init.call(this,aArg);C.Animal._Init.call(this.W={I:this},0);A.Core.Bt._Init.call(
this.At={I:this},0);A.acl.FZ._Init.call(this.Kw={I:this},0);A.acl.FZ._Init.call(
this.St={I:this},0);C.ALe._Init.call(this.Ado={I:this},0);C.ATt._Init.call(this.
Uh={I:this},0);C.ATs._Init.call(this.Ug={I:this},0);C.Tn._Init.call(this.AdN={I:
this},0);C.AT6._Init.call(this.AeZ={I:this},0);C.AT5._Init.call(this.AeY={I:this
},0);C.AT4._Init.call(this.AeX={I:this},0);C.AT8._Init.call(this.Ae0={I:this},0);
C.ALf._Init.call(this.Af4={I:this},0);this.__proto__=C.HelperClass;var B;this.Kw.
HF(1);this.Kw.Ff(3000);this.Kw.BY=100;this.St.AvT(10);this.St.Wa(5);this.St.HF(1
);this.St.Ff(4000);this.AdN.BY=false;this.AdN.Cq=true;this.AdN.HF(1);this.AdN.Ff(
100);this.Kw.Se=[this,this.ByY];this.Kw.Q=[this,this.BiN,this.Bk5];this.St.Se=[this
,this.By0];this.St.Q=[B=A._GetAutoObject(C.Device),B.ADt,B.AHA];this.AdN.Q=[B=A.
_GetAutoObject(C.Device),B.ADu,B.AHB];this.Init(aArg);var Lp=this._variants();if(
Lp){this.K={};Lp._Init.call(this,aArg);}},_Done:function(){if(this.K)this.K._Done.
call(this);this.__proto__=C.Amg;this.W._Done();this.At._Done();this.Kw._Done();this.
St._Done();this.Ado._Done();this.Uh._Done();this.Ug._Done();this.AdN._Done();this.
AeZ._Done();this.AeY._Done();this.AeX._Done();this.Ae0._Done();this.Af4._Done();
C.Amg._Done.call(this);},_ReInit:function(){C.Amg._ReInit.call(this);this.W._ReInit(
);this.At._ReInit();this.Kw._ReInit();this.St._ReInit();this.Ado._ReInit();this.
Uh._ReInit();this.Ug._ReInit();this.AdN._ReInit();this.AeZ._ReInit();this.AeY._ReInit(
);this.AeX._ReInit();this.Ae0._ReInit();this.Af4._ReInit();if(this.K)this.K._ReInit.
call(this);},_Mark:function(D){var B;C.Amg._Mark.call(this,D);if((B=this.Ub)&&(B.
_cycle!=D))B._Mark(B._cycle=D);if((B=this.Ag6)&&(B._cycle!=D))B._Mark(B._cycle=D
);if((B=this.ASO)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.ASP)&&(B._cycle!=
D))B._Mark(B._cycle=D);if((B=this.W)._cycle!=D)B._Mark(B._cycle=D);if((B=this.At
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Kw)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.St)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ado)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Uh)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ug)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.AdN)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AeZ)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.AeY)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
AeX)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ae0)._cycle!=D)B._Mark(B._cycle=D);
if((B=this.Af4)._cycle!=D)B._Mark(B._cycle=D);if(this.K)this.K._Mark(D);},_variants:
function(){return A.acr.HelperClass._variants();},K:null,_className:"Device::HelperClass"
};C.Helper={_Init:function(){C.HelperClass._Init.call(this,0);},_ReInit:function(
){},_variants:function(){return this;},_this:null};C.BoolFilterCriterion={A4:false
,AdH:function(){var Ay=A._NewObject(C.BoolFilterCriterion,0);Ay.Gy(this);return Ay;
},Gy:function(AM){C.FilterCriterion.Gy.call(this,AM);var Ay=(C.BoolFilterCriterion.
isPrototypeOf(AM)?AM:null);if(!!Ay)this.A4=Ay.A4;},Initialize:function(AZ,ED,A1,
SR){this.ET=AZ;this.Operator=ED;this.A4=A1;this.Aa6=SR;return this;},_Init:function(
aArg){C.FilterCriterion._Init.call(this,aArg);this.__proto__=C.BoolFilterCriterion;
},_className:"Device::BoolFilterCriterion"};C.UInt32FilterCriterion={A4:0,AdH:function(
){var Ay=A._NewObject(C.UInt32FilterCriterion,0);Ay.Gy(this);return Ay;},Gy:function(
AM){C.FilterCriterion.Gy.call(this,AM);var Ay=(C.UInt32FilterCriterion.isPrototypeOf(
AM)?AM:null);if(!!Ay)this.A4=Ay.A4;},Initialize:function(AZ,ED,A1,SR){this.ET=AZ;
this.Operator=ED;this.A4=A1;this.Aa6=SR;return this;},_Init:function(aArg){C.FilterCriterion.
_Init.call(this,aArg);this.__proto__=C.UInt32FilterCriterion;},_className:"Device::UInt32FilterCriterion"
};C.OverlayMenu={None:0,Home:1,AutoAction:2,MenuItemSettings:3,RatingSettings:4,
WeighingSettings:5,Options:6,AnimalSearch:7,ActionSettings:8,MeasurementReady:9,
AnimalMultiInfoMenu:10,AnimalSearchUnfiltered:11,AnimalSearchDriedOff:12,MassRecordingMenu:
13,MassRecordingDefaults:14,MassRecordingFields:15,PurchasedAnimalsListMenu:16,BirthRegistrationsListMenu:
17,LAST:18};C.EnumToString={BX:function(A7){throw new Error(Asf+A7.toFixed());},
Lm:function(A7){return this.BX(A7);},_Init:function(aArg){this.__proto__=C.EnumToString;
A.h7++;},_Done:function(){this.__proto__=null;A.h7--;},_ReInit:function(){},_Mark:
function(D){var B;if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:
0,_observers:null,_className:"Device::EnumToString"};C.ScreenTypeToString={BX:function(
A7){var AIC=A7;var Bs;switch(AIC){case 3:Bs=A.aaR(A.acf.AuS);break;case 34:Bs=A.
aaR(A.acf.O5);break;case 35:Bs=A.aaR(A.acf.Tb);break;case 47:Bs=A.aaR(A.acf.ANe);
break;default:Bs=this.Bm$(A7);}return Bs;},Bm$:function(A7){var AIC=A7;var Bs=A.
jV;switch(AIC){case 0:Bs=Asg;break;case 2:Bs=AUB;break;case 4:Bs=AGk;break;case 40:
Bs=AUC;break;case 39:Bs=AUD;break;case 72:Bs=AUE;break;case 73:Bs=AUF;break;case
93:Bs=AGl;break;case 94:Bs=AUG;break;case 74:Bs=AGm;break;case 3:Bs=Axh;break;case
6:Bs=AGn;break;case 16:Bs=AUH;break;case 22:Bs=AGo;break;case 46:Bs=AUI;break;case
100:Bs=AUJ;break;case 99:Bs=Q5;break;case 101:Bs=WI;break;case 17:Bs=AUK;break;case
23:Bs=AUL;break;case 18:Bs=AUM;break;case 19:Bs=AUN;break;case 38:Bs=AUO;break;case
87:Bs=AUP;break;case 1:Bs=AUQ;break;case 5:Bs=Ahn;break;case 7:Bs=AGp;break;case
92:Bs=AUR;break;case 8:Bs=AUS;break;case 9:Bs=AGq;break;case 41:Bs=AGr;break;case
42:Bs=Axi;break;case 24:Bs=Q6;break;case 10:Bs=AUT;break;case 68:Bs=AUU;break;case
21:Bs=AUV;break;case 11:Bs=Ash;break;case 29:Bs=AUW;break;case 54:Bs=AUX;break;case
30:Bs=AUY;break;case 12:Bs=AUZ;break;case 13:Bs=AU0;break;case 14:Bs=AU1;break;case
15:Bs=Asi;break;case 78:Bs=AU2;break;case 79:Bs=AU3;break;case 20:Bs=AU4;break;case
37:Bs=AU5;break;case 43:Bs=AU6;break;case 44:Bs=AU7;break;case 45:Bs=AU8;break;case
25:Bs=AU9;break;case 75:Bs=AU_;break;case 67:Bs=AU$;break;case 66:Bs=AGs;break;case
64:Bs=Asj;break;case 65:Bs=AVa;break;case 77:Bs=AVb;break;case 76:Bs=AVc;break;case
95:Bs=Axj;break;case 88:Bs=AkI;break;case 26:Bs=Aho;break;case 28:Bs=Axk;break;case
27:Bs=AnP;break;case 31:Bs=Ahp;break;case 89:Bs=AVd;break;case 34:Bs=Axl;break;case
35:Bs=AGt;break;case 32:Bs=Ae8;break;case 50:Bs=AGu;break;case 55:Bs=WJ;break;case
63:Bs=AkJ;break;case 62:Bs=AnQ;break;case 33:Bs=AVe;break;case 36:Bs=AVf;break;case
56:Bs=AVg;break;case 86:Bs=AVh;break;case 57:Bs=AVi;break;case 47:Bs=Ask;break;case
49:Bs=AGv;break;case 48:Bs=AGw;break;case 69:Bs=AVj;break;case 71:Bs=AVk;break;case
70:Bs=AVl;break;case 51:Bs=AVm;break;case 53:Bs=AVn;break;case 52:Bs=AVo;break;case
96:Bs=AGx;break;case 98:Bs=AVp;break;case 97:Bs=Axm;break;case 80:Bs=AGy;break;case
82:Bs=AGz;break;case 81:Bs=AGA;break;case 85:Bs=AGB;break;case 84:Bs=AGC;break;case
83:Bs=AGD;break;case 58:Bs=AVq;break;case 60:Bs=AVr;break;case 59:Bs=AVs;break;case
61:Bs=AVt;break;case 90:Bs=AVu;break;case 91:Bs=AVv;break;case 102:Bs=AVw;break;
case 103:Bs=Axn;break;default:throw new Error(AGE+AIC.toFixed());}return Bs;},_Init:
function(aArg){C.EnumToString._Init.call(this,aArg);this.__proto__=C.ScreenTypeToString;
},_className:"Device::ScreenTypeToString"};C.OverlayMenuToString={BX:function(A7
){var Bc7=A7;var N$=A.jV;switch(Bc7){case 0:N$=AVx;break;case 1:N$=Axh;break;case
8:N$=AGF;break;case 2:N$=Ahq;break;case 3:N$=WK;break;case 4:N$=AVy;break;case 5:
N$=ZF;break;case 6:N$=AVz;break;case 7:N$=AVA;break;case 11:N$=AnR;break;case 12:
N$=Ae9;break;case 9:N$=AkK;break;case 10:N$=AGG;break;case 14:N$=AVB;break;case 15:
N$=OQ;break;case 13:N$=AVC;break;case 16:N$=AVD;break;case 17:N$=AVE;break;default:
throw new Error(AVF+Bc7.toFixed());}return N$;},_Init:function(aArg){C.EnumToString.
_Init.call(this,aArg);this.__proto__=C.OverlayMenuToString;},_className:"Device::OverlayMenuToString"
};C.ScanStateToString={BX:function(A7){var BdD=A7;var Bl=A.jV;switch(BdD){case 4:
Bl=Asl;break;case 0:Bl=Asm;break;case 2:Bl=AVG;break;case 3:Bl=AVH;break;case 1:
Bl=AGH;break;default:throw new Error(AGI+BdD.toFixed());}return Bl;},_Init:function(
aArg){C.EnumToString._Init.call(this,aArg);this.__proto__=C.ScanStateToString;},
_className:"Device::ScanStateToString"};C.MeasureStateToString={BX:function(A7){
var BbQ=A7;var Bl=A.jV;switch(BbQ){case 4:Bl=Asl;break;case 0:Bl=Asm;break;case 2:
Bl=AVI;break;case 1:Bl=AGH;break;case 3:Bl=AGJ;break;default:throw new Error(AVJ+
BbQ.toFixed());}return Bl;},_Init:function(aArg){C.EnumToString._Init.call(this,
aArg);this.__proto__=C.MeasureStateToString;},_className:"Device::MeasureStateToString"
};C.TemperatureUnit={Celsius:0,Fahrenheit:1,LAST:2};C.TemperatureUnitToString={BX:
function(A7){var Bd2=A7;var Apw=A.jV;switch(Bd2){case 0:Apw=A.aaR(A.acf.Bns);break;
case 1:Apw=A.aaR(A.acf.Bnt);break;default:throw new Error(AVK+Bd2.toFixed());}return Apw;
},_Init:function(aArg){C.EnumToString._Init.call(this,aArg);this.__proto__=C.TemperatureUnitToString;
},_className:"Device::TemperatureUnitToString"};C.AnimalType={DairyCalf:0,DairyCow:
1,SheepLamb:2,LAST:3};C.AnimalTypeToString={BX:function(A7){var BdT=A7;var type=
A.jV;switch(BdT){case 0:type=A.aaR(A.acf.Be7);break;case 1:type=A.aaR(A.acf.Bfi);
break;case 2:type=A.aaR(A.acf.Bhd);break;default:throw new Error(AGK+BdT.toFixed(
));}return type;},_Init:function(aArg){C.EnumToString._Init.call(this,aArg);this.
__proto__=C.AnimalTypeToString;},_className:"Device::AnimalTypeToString"};C.Language={
Default:0,German:1,Spanish:2,French:3,Italian:4,Finnish:5,Chinese_TW:6,Turkish:7
,Greek:8,Russian:9,Dutch:10,Czech:11,Estonian:12,Bulgarian:13,Bosnian:14,Norwegian:
15,Ukrainian:16,LAST:17};C.LanguageToString={BX:function(A7){var Ay8=A7;var OW=A.
jV;switch(Ay8){case 0:OW=AVL;break;case 10:OW=AGL;break;case 1:OW=AGM;break;case
12:OW=Axo;break;case 5:OW=AVM;break;case 3:OW=AVN;break;case 8:OW=AVO;break;case
13:OW=AVP;break;case 4:OW=AVQ;break;case 9:OW=AVR;break;case 2:OW=AVS;break;case
7:OW=AVT;break;case 6:OW=Asn;break;case 11:OW=Aso;break;case 14:OW=AGN;break;case
15:OW=AVU;break;case 16:OW=AVV;break;default:throw new Error(AGO+Ay8.toFixed());
}return OW;},Lm:function(A7){var Ay8=A7;var Dh=A.jV;switch(Ay8){case 0:Dh=AVW;break;
case 10:Dh=WE;break;case 1:Dh=Q4;break;case 12:Dh=AVX;break;case 5:Dh=Ux;break;case
3:Dh=Wy;break;case 8:Dh=AVY;break;case 13:Dh=Ww;break;case 4:Dh=Wz;break;case 9:
Dh=Uy;break;case 2:Dh=ZD;break;case 7:Dh=ZE;break;case 6:Dh=AVZ;break;case 11:Dh=
AV0;break;case 14:Dh=AV1;break;case 15:Dh=SM;break;case 16:Dh=JN;break;default:throw new
Error(AGO+Ay8.toFixed());}return Dh;},_Init:function(aArg){C.EnumToString._Init.
call(this,aArg);this.__proto__=C.LanguageToString;},_className:"Device::LanguageToString"
};C.Gender={Male:0,Female:1,Unknown:2,LAST:3};C.BirthType={Single:0,Twins:1,Triplets:
2,Quadruplets:3,LAST:4};C.GenderToString={BX:function(A7){var As_=A7;var AIU=A.jV;
switch(As_){case 0:AIU=A.aaR(A.acf.Male);break;case 1:AIU=A.aaR(A.acf.Female);break;
case 2:AIU=A.aaR(A.acf.Unknown);break;default:throw new Error(AV2+As_.toFixed());
}return AIU;},_Init:function(aArg){C.EnumToString._Init.call(this,aArg);this.__proto__=
C.GenderToString;},_className:"Device::GenderToString"};C.BirthTypeToString={BX:
function(A7){var type=A7;var Afm=A.jV;switch(type){case 0:Afm=A.aaR(A.acf.Bmo);break;
case 1:Afm=A.aaR(A.acf.Bno);break;case 2:Afm=A.aaR(A.acf.Triplets);break;case 3:
Afm=A.aaR(A.acf.Quadruplets);break;default:throw new Error(AV3+type.toFixed());}
return Afm;},_Init:function(aArg){C.EnumToString._Init.call(this,aArg);this.__proto__=
C.BirthTypeToString;},_className:"Device::BirthTypeToString"};C.SyncState={Idle:
0,Init:1,Exporting:2,ImportStart:3,Importing:4,ImportFinish:5,Ready:6,Error:7,LAST:
8};C.SyncStateToString={BX:function(A7){var BdW=A7;var Bl=A.jV;switch(BdW){case 7:
Bl=Asl;break;case 0:Bl=Asm;break;case 6:Bl=AGJ;break;case 2:Bl=AV4;break;case 5:
Bl=AV5;break;case 3:Bl=AV6;break;case 4:Bl=AV7;break;case 1:Bl=AV8;break;default:
throw new Error(AV9+BdW.toFixed());}return Bl;},_Init:function(aArg){C.EnumToString.
_Init.call(this,aArg);this.__proto__=C.SyncStateToString;},_className:"Device::SyncStateToString"
};C.RatedAttributeToString={BX:function(A7){var AzU=A7;switch(AzU){case 0:return A.
jV;case 1:return A.aaR(A.acf.BlE);case 4:return A.aaR(A.acf.BlD);case 3:return A.
aaR(A.acf.BlF);case 2:return A.aaR(A.acf.BlC);default:throw new Error(AGP+AzU.toFixed(
));}},Lm:function(A7){var AzU=A7;switch(AzU){case 0:return A.jV;case 1:return A.
aaR(A.acf.Feed);case 4:return A.aaR(A.acf.AE6);case 3:return A.aaR(A.acf.AE7);case
2:return A.aaR(A.acf.AE4);default:throw new Error(AGP+AzU.toFixed());}},_Init:function(
aArg){C.EnumToString._Init.call(this,aArg);this.__proto__=C.RatedAttributeToString;
},_className:"Device::RatedAttributeToString"};C.AssesmentToString={BX:function(
A7){var AkY=A7;var Ayg=A.jV;switch(AkY){case 0:case 5:Ayg=A.jV;break;case 3:Ayg=
A.aaR(A.acj.Bmu);break;case 2:Ayg=A.aaR(A.acj.Bmw);break;case 1:Ayg=A.aaR(A.acj.
Bmv);break;default:throw new Error(AGQ+AkY.toFixed());}return Ayg;},_Init:function(
aArg){C.EnumToString._Init.call(this,aArg);this.__proto__=C.AssesmentToString;},
_className:"Device::AssesmentToString"};C.PopupId={Unknown:0,SevereError:1,EnterSleep:
2,About:3,WarningDataSync:4,SuccessDataSync:5,WarningRestart:6,WarningFactorySettings:
7,SuccessResetFactorySettings:8,ShutDown:9,TechnicalDetails:10,ScanError:11,ScanNotFound:
12,ScannedAnimalNotFound:13,AnimalNotFound:14,SuccessUnregister:15,DataSynchInProgress:
16,AddedToAlarm:17,RemovedFromAlarm:18,AddedToWatch:19,RemovedFromWatch:20,AnimalIdAlreadyExists:
21,MissingAnimalId:22,SuccessCreationNewAnimals:23,AnimalCreationInProgress:24,TransponderAlreadyRegistered:
25,SuccessCreationNewAnimal:26,WarningNoActionDefined:27,WarningNoMenuItemVisible:
28,WarningEnterPresentationMode:29,WarningNoAnimalsRegistered:30,HelpAnimalInfoRating:
31,CannotReassignTransponder:32,WarningResetAnimalData:33,SuccessResetAnimalData:
34,SuccessUnregisterPerished:35,ScannedTransponderNotFound:36,WarningResetWeightSettings:
37,WarningResetTempThresholds:38,UpdateFirmware:39,ConfirmFirmwareUpdated:40,WarningMaxNumAnimalsReached:
41,WarningScanTransponder:42,MissingEartagNumber:43,WarningResetToDefault:44,WarningEartagNumberTooShort:
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
90,WarningScanOverwriteNaisId:91,CreateBackupInProgress:92,RestoreBackupInProgress:
93,WarningNoBackupFilePresent:94,WarningNoBackupPathPresent:95,ConfirmationRestoreBackup:
96,RemovedAllPurchasedNoticesPending:97,WarningDataExportHitPurchasedFailed:98,RemovedFromPurchasedNoticePending:
99,SuccessDataExportHitPurchasedDownload:100,SuccessDataExportHitPurchased:101,WarningParsingDateFailed:
102,WarningParsedDateInFutureInvalid:103,WarningParsingNaisIdFailed:104,RemovedAnimalPurchased:
105,WarningParsingShortNaisIdWithoutPremisesId:106,LAST:107};C.PopupState={Queued:
0,Unknown:1,Displayed:2,ClosedAfterTimeOut:3,ClosedWithOk:4,ClosedWithCancel:5,ClosedByMiddleware:
6,ClosedWithYes:7,ClosedWithNo:8,Opened:9};C.PopupContext={AES:null,Akc:A.jV,Akw:
0,PopupState:1,Id:0,Show:false,BkR:function(E){var B;if(this.PopupState===E)return;
this.PopupState=E;if(!!this.AES)(B=this.AES)?B[1].call(B[0],this):null;},_Init:function(
aArg){this.__proto__=C.PopupContext;A.h7++;},_Done:function(){this.__proto__=null;
A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((B=this.AES)&&((B=B[0]).
_cycle!=D))B._Mark(B._cycle=D);if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);
},I:null,_cycle:0,_observers:null,_className:"Device::PopupContext"};C.Boolean={
No:0,Yes:1,LAST:2};C.BooleanToYesNo={BX:function(A7){switch(A7){case 0:return A.
aaR(A.acf.No);case 1:return A.aaR(A.acf.Yes);default:return Asp+A7.toFixed();}},
_Init:function(aArg){C.EnumToString._Init.call(this,aArg);this.__proto__=C.BooleanToYesNo;
},_className:"Device::BooleanToYesNo"};C.AnimalGroupTableFields={Id:0,GroupName:
1};C.AnimalGroup={GroupName:AGf,Id:0,EK:function(Ac,AG){var Ht=C.Row.EK.call(this
,Ac,AG);if(Ht&&!!AG){this.OnSetId(AG.CA(Ac,0));this.AD0(AG.Vu(Ac,1));}return Ht;
},Cp:function(AG){var Ht=C.Row.Cp.call(this,AG);if(Ht&&!!AG){var Jc=AG.Ol();if(Jc<=
0)A.ab5("%s",Ach);else{if(this.AmB())this.CF=AG.Ya();AG.Hb(this.CF,0,this.Id);AG.
Y8(this.CF,1,this.GroupName);AG.On(Jc);}}return Ht;},Gb:function(){C.Row.Gb.call(
this);this.OnSetId(-1);},Ha:function(){C.Row.Ha.call(this);this.OnSetId(0);this.
AD0(A.jV);},OnSetId:function(E){if(this.Id===E)return;this.Id=E;A.abo([this,this.
QK,this.OnSetId],0);},AD0:function(E){if(this.GroupName===E)return;this.GroupName=
E;A.abo([this,this.Bip,this.AD0],0);},QK:function(){return this.Id;},Bip:function(
){return this.GroupName;},_Init:function(aArg){C.Row._Init.call(this,aArg);this.
__proto__=C.AnimalGroup;this.TableId=3;},_className:"Device::AnimalGroup"};C.PopupIdToString={
BX:function(A7){var Ac3=A7;var Az=A.jV;var AIA;AIA=A.aaR(A.acf.BnL)+OP;switch(Ac3
){case 0:Az=A.aaR(A.acf.Unknown);break;case 1:Az=A.aaR(A.acf.SevereError);break;
case 58:Az=A.aaR(A.acf.BfW);break;case 2:Az=A.aaR(A.acf.BfU);break;case 3:Az=A.aaR(
A.acf.Bnx);break;case 77:Az=A._GetAutoObject(C.Helper).Bf_();break;case 78:Az=A.
_GetAutoObject(C.Helper).Bf8();break;case 79:Az=A._GetAutoObject(C.Helper).Bf9();
break;case 9:Az=A.aaR(A.acf.BnW);break;case 5:Az=A.aaR(A.acf.SuccessDataSync);break;
case 8:Az=A.aaR(A.acf.SuccessResetFactorySettings);break;case 34:Az=A.aaR(A.acf.
SuccessResetAnimalData);break;case 10:Az=A._GetAutoObject(C.Device).ABW();break;
case 82:Az=A.aaR(A.acf.BfY);break;case 83:Az=A.aaR(A.acf.BfZ);break;case 80:Az=A.
aaR(A.acf.BmF);break;case 81:Az=A.aaR(A.acf.SuccessRestoreBackup);break;case 92:
Az=A.aaR(A.acf.BeW);break;case 93:Az=A.aaR(A.acf.BlQ);break;case 4:Az=A.aaR(A.acf.
WarningDataSync);break;case 7:Az=A.aaR(A.acf.BnT);break;case 33:Az=A.aaR(A.acf.WarningResetAnimalData
);break;case 6:Az=A.aaR(A.acf.WarningRestart);break;case 27:Az=A.aaR(A.acf.WarningNoActionDefined
);break;case 64:Az=A.aaR(A.acf.WarningActionNotApplicable);break;case 28:Az=A.aaR(
A.acf.WarningNoMenuItemVisible);break;case 29:Az=A.aaR(A.acf.WarningEnterPresentationMode
);break;case 30:Az=A.aaR(A.acf.WarningNoAnimalsRegistered);break;case 41:Az=((AIA+
A.aaR(A.acf.AQa))+OP)+A.aaR(A.acf.Bhr);break;case 50:Az=((AIA+A.aaR(A.acf.AQa))+
OP)+A.aaR(A.acf.Bht);break;case 51:Az=((AIA+A.aaR(A.acf.AQa))+OP)+A.aaR(A.acf.Bhs
);break;case 42:Az=A.aaR(A.acf.BnV);break;case 91:Az=A.aaR(A.acf.WarningScanOverwriteNaisId
);break;case 45:Az=A.aaR(A.acf.BnP);break;case 46:Az=A.aaR(A.acf.WarningNoValidCountryCode
);break;case 57:Az=A.aaR(A.acf.WarningOutdatedAnimalWeight);break;case 52:Az=A.aaR(
A.acf.WarningOutdatedAnimalWeights);break;case 53:Az=A.aaR(A.acf.WarningWeightEvaluationSingular
);break;case 56:Az=A.aaR(A.acf.WarningWeightEvaluationPlural);break;case 11:Az=A.
aaR(A.acf.ScanError);break;case 12:Az=A.aaR(A.acf.ScanNotFound);break;case 13:Az=
A.aaR(A.acf.BeO);break;case 36:Az=A.aaR(A.acf.Bnh);break;case 14:Az=A.aaR(A.acf.
AnimalNotFound);break;case 15:Az=A.aaR(A.acf.SuccessUnregister);break;case 35:Az=
A.aaR(A.acf.SuccessUnregisterPerished);break;case 26:Az=A.aaR(A.acf.SuccessCreationNewAnimal
);break;case 23:Az=A.aaR(A.acf.SuccessCreationNewAnimals);break;case 24:Az=A.aaR(
A.acf.Bfl);break;case 49:Az=A.aaR(A.acf.EvaluationInProgress);break;case 16:Az=A.
aaR(A.acf.Bfr);break;case 17:Az=A.aaR(A.acf.Bmy);break;case 18:Az=A.aaR(A.acf.BmL
);break;case 19:Az=A.aaR(A.acf.Bmz);break;case 20:Az=A.aaR(A.acf.BmM);break;case
54:Az=A.aaR(A.acf.BmG);break;case 55:Az=A.aaR(A.acf.BmJ);break;case 21:Az=A.aaR(
A.acf.A2$);break;case 48:Az=(A.aaR(A.acf.A2$)+OP)+A.aaR(A.acf.A33);break;case 22:
Az=A.aaR(A.acf.Bhy);break;case 63:Az=A.aaR(A.acf.BnQ);break;case 85:Az=A.aaR(A.acf.
BnR);break;case 43:Az=A.aaR(A.acf.Bhz);break;case 25:Az=A.aaR(A.acf.A9E);break;case
47:Az=(A.aaR(A.acf.A9E)+OP)+A.aaR(A.acf.A33);break;case 31:{var BwM=(((((((((((((((((((
A.aaR(A.acf.Bfc)+Axg)+A.aaR(A.acf.AL6))+A.aaR(A.acf.Colon))+NZ)+A.aaR(A.acf.Bfe)
)+OP)+A.aaR(A.acf.AM5))+A.aaR(A.acf.Colon))+NZ)+A.aaR(A.acf.Bf4))+OP)+A.aaR(A.acf.
ASz))+A.aaR(A.acf.Colon))+NZ)+A.aaR(A.acf.BlH))+OP)+A.aaR(A.acf.ASy))+A.aaR(A.acf.
Colon))+NZ)+A.aaR(A.acf.BlG);Az=BwM;}break;case 32:Az=A.aaR(A.acf.Bni);break;case
69:Az=A.aaR(A.acf.BhG);break;case 44:Az=A.aaR(A.acf.BnU);break;case 37:Az=A.aaR(
A.acf.WarningResetWeightSettings);break;case 38:Az=A.aaR(A.acf.WarningResetTempThresholds
);break;case 39:Az=A.aaR(A.acf.Blx);break;case 76:Az=(A.aaR(A.acf.A3F)+OP)+A.aaR(
A.acf.ASB);break;case 40:Az=A.aaR(A.acf.BmH);break;case 75:Az=A.aaR(A.acf.BmA);break;
case 59:Az=A.aaR(A.acf.QuestionAddAnotherCalfMultiples);break;case 62:Az=A.aaR(A.
acf.BmB);break;case 97:Az=A.aaR(A.acf.BmC);break;case 60:Az=A.aaR(A.acf.BmD);break;
case 99:Az=A.aaR(A.acf.BmE);break;case 61:Az=A.aaR(A.acf.BmN);break;case 105:Az=
A.aaR(A.acf.BmO);break;case 65:Az=A.aaR(A.acf.SuccessClearAnimalLoss);break;case
66:Az=A.aaR(A.acf.WarningNoActionsForAnimalLoss);break;case 67:Az=A.aaR(A.acf.SuccessLinkTransponder
);break;case 86:Az=A.aaR(A.acf.SuccessUnlinkTransponder);break;case 68:Az=A.aaR(
A.acf.BmI);break;case 70:Az=A.aaR(A.acf.Bf0);break;case 71:Az=A.aaR(A.acf.BmR);break;
case 72:Az=A.aaR(A.acf.BmS);break;case 98:Az=A.aaR(A.acf.Bf2);break;case 101:Az=
A.aaR(A.acf.BmT);break;case 100:Az=A.aaR(A.acf.BmU);break;case 88:Az=A.aaR(A.acf.
Bf1);break;case 89:Az=A.aaR(A.acf.BmP);break;case 90:Az=A.aaR(A.acf.BmQ);break;case
73:Az=A.aaR(A.acf.WarningNoPremisesID);break;case 74:Az=A.aaR(A.acf.WarningNoFlashDrivePresent
);break;case 95:Az=A.aaR(A.acf.WarningNoBackupPathPresent);break;case 94:Az=A.aaR(
A.acf.WarningNoBackupFilePresent);break;case 84:Az=A.aaR(A.acf.Bgf);break;case 87:
Az=A.aaR(A.acf.BnY);break;case 96:Az=A.aaR(A.acf.BnO);break;case 103:Az=A.aaR(A.
acf.WarningParsedDateInFutureInvalid);break;case 102:Az=A.aaR(A.acf.WarningParsingDateFailed
);break;case 104:Az=A.aaR(A.acf.WarningParsingNaisIdFailed);break;case 106:Az=A.
aaR(A.acf.BnS);break;default:throw new Error(Axp+Ac3.toFixed());}return Az;},Lm:
function(A7){var Ac3=A7;var Az=A.jV;switch(Ac3){case 0:Az=AGR;break;case 1:Az=Axq;
break;case 58:Az=Axr;break;case 2:Az=AGS;break;case 3:Az=AV_;break;case 77:Az=AV$;
break;case 78:Az=AWa;break;case 79:Az=AGT;break;case 9:Az=AWb;break;case 5:Az=AWc;
break;case 8:Az=AWd;break;case 34:Az=AWe;break;case 80:Az=AWf;break;case 81:Az=AWg;
break;case 92:Az=AWh;break;case 93:Az=AWi;break;case 82:Az=Axs;break;case 83:Az=
AWj;break;case 10:Az=AWk;break;case 4:Az=Axt;break;case 7:Az=Asq;break;case 33:Az=
ZG;break;case 6:Az=Asr;break;case 27:Az=AWl;break;case 64:Az=AWm;break;case 28:Az=
AWn;break;case 29:Az=AGU;break;case 30:Az=AWo;break;case 41:Az=AGV;break;case 50:
Az=AWp;break;case 51:Az=AWq;break;case 42:Az=AWr;break;case 91:Az=Ass;break;case
45:Az=AWs;break;case 46:Az=AWt;break;case 57:Az=AGW;break;case 52:Az=AWu;break;case
53:Az=AWv;break;case 56:Az=AWw;break;case 11:Az=AWx;break;case 12:Az=Aci;break;case
13:Az=AWy;break;case 36:Az=AWz;break;case 14:Az=AWA;break;case 15:Az=AWB;break;case
35:Az=AGX;break;case 26:Az=AWC;break;case 23:Az=AWD;break;case 24:Az=AWE;break;case
49:Az=AWF;break;case 16:Az=AWG;break;case 17:Az=AWH;break;case 18:Az=AGY;break;case
19:Az=AWI;break;case 20:Az=AWJ;break;case 54:Az=AWK;break;case 55:Az=AGZ;break;case
21:Az=AG0;break;case 48:Az=AWL;break;case 22:Az=AWM;break;case 63:Az=AWN;break;case
43:Az=AWO;break;case 85:Az=Q7;break;case 25:Az=Ast;break;case 47:Az=AG1;break;case
31:Az=AG2;break;case 32:Az=AnS;break;case 69:Az=AnT;break;case 44:Az=Axu;break;case
37:Az=AWP;break;case 38:Az=AG3;break;case 39:Az=AWQ;break;case 76:Az=AWR;break;case
40:Az=AWS;break;case 75:Az=AWT;break;case 59:Az=AWU;break;case 62:Az=AWV;break;case
97:Az=AWW;break;case 60:Az=AWX;break;case 99:Az=AWY;break;case 65:Az=AWZ;break;case
61:Az=AW0;break;case 105:Az=AW1;break;case 66:Az=AW2;break;case 67:Az=AW3;break;
case 86:Az=AW4;break;case 68:Az=AW5;break;case 70:Az=AW6;break;case 71:Az=AnU;break;
case 72:Az=AG4;break;case 98:Az=AW7;break;case 101:Az=AG5;break;case 100:Az=AG6;
break;case 88:Az=ZH;break;case 89:Az=AG7;break;case 90:Az=AW8;break;case 73:Az=AG8;
break;case 74:Az=AW9;break;case 95:Az=Axv;break;case 94:Az=AW_;break;case 84:Az=
AW$;break;case 87:Az=Axw;break;case 96:Az=AXa;break;case 103:Az=AXb;break;case 102:
Az=AXc;break;case 104:Az=AG9;break;case 106:Az=AnV;break;default:throw new Error(
Axp+Ac3.toFixed());}return Az;},_Init:function(aArg){C.EnumToString._Init.call(this
,aArg);this.__proto__=C.PopupIdToString;},_className:"Device::PopupIdToString"};
C.PopupParamSeparator=";";C.RatingMode={Basic:0,Extended:1,LAST:2};C.TransponderType={
UNDEFINED:0,AnimalId:1,FarmId:2,GroupId:3,PersonId:4,LAST:5};C.TransponderProtocol={
UNDEFINED:0,FDX:1,HDX:2,HDX_URBAN:3,LAST:4};C.TransponderTypeToString={BX:function(
A7){var Beb=A7;var type=A.jV;switch(Beb){case 1:type=AG_;break;case 2:type=AXd;break;
case 3:type=AG$;break;case 4:type=AHa;break;case 0:type=Asg;break;default:throw new
Error(AkL+Beb.toFixed());}return type;},_Init:function(aArg){C.EnumToString._Init.
call(this,aArg);this.__proto__=C.TransponderTypeToString;},_className:"Device::TransponderTypeToString"
};C.TransponderProtocolToString={BX:function(A7){var Bea=A7;var AzR=A.jV;switch(
Bea){case 1:AzR=AXe;break;case 2:AzR=AnW;break;case 3:AzR=AXf;break;case 0:AzR=Asg;
break;default:throw new Error(AHb+Bea.toFixed());}return AzR;},_Init:function(aArg
){C.EnumToString._Init.call(this,aArg);this.__proto__=C.TransponderProtocolToString;
},_className:"Device::TransponderProtocolToString"};C.Transponder={Id:0,TransponderProtocol:
0,TransponderType:0,AR8:function(E){if(this.TransponderType===E)return;this.TransponderType=
E;A.abo([this,this.BiZ,this.AR8],0);},AR7:function(E){if(this.TransponderProtocol===
E)return;this.TransponderProtocol=E;A.abo([this,this.BiY,this.AR7],0);},OnSetId:
function(E){if(this.Id===E)return;this.Id=E;A.abo([this,this.QK,this.OnSetId],0);
},ANt:function(){return A._GetAutoObject(C.Converter).Bng(this.Id);},Bgo:function(
){return A._GetAutoObject(C.Converter).AwS(this.Id);},BiZ:function(){return this.
TransponderType;},BiY:function(){return this.TransponderProtocol;},QK:function(){
return this.Id;},_Init:function(aArg){this.__proto__=C.Transponder;A.h7++;},_Done:
function(){this.__proto__=null;A.h7--;},_ReInit:function(){},_Mark:function(D){var
B;if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:
null,_className:"Device::Transponder"};C.RatingModeToString={BX:function(A7){var
UR=A7;var Nk=A.jV;switch(UR){case 0:Nk=A.aaR(A.acf.Basic);break;case 1:Nk=A.aaR(
A.acf.Extended);break;default:throw new Error(AHc+UR.toFixed());}return Nk;},_Init:
function(aArg){C.EnumToString._Init.call(this,aArg);this.__proto__=C.RatingModeToString;
},_className:"Device::RatingModeToString"};C.TableRowsCount={_Init:function(aArg
){this.__proto__=C.TableRowsCount;A.h7++;},_Done:function(){this.__proto__=null;
A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((B=this.I)&&(B._cycle!=
D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:"Device::TableRowsCount"
};C.MassUnit={Kilogramm:0,Pound:1,LAST:2};C.MassUnitToString={BX:function(A7){var
BbM=A7;var Apw=A.jV;switch(BbM){case 0:Apw=A.aaR(A.acf.Bhb);break;case 1:Apw=A.aaR(
A.acf.Pound);break;default:throw new Error(AXg+BbM.toFixed());}return Apw;},_Init:
function(aArg){C.EnumToString._Init.call(this,aArg);this.__proto__=C.MassUnitToString;
},_className:"Device::MassUnitToString"};C.MinWeightGain=20;C.MaxWeightGain=2000;
C.WeightGainStep=10;C.Int32ArrayWrapper={Mt:10,Array:A.abi(10,0,null),Y0:function(
E){if(this.Mt===E)return;if(E>10)throw new Error(AXh);this.Mt=E;},Set:function(aIndex
,AJ){if((aIndex<0)||(aIndex>=this.Mt))throw new Error(Axx);this.Array.Set(aIndex
,AJ);},Get:function(aIndex){if((aIndex<0)||(aIndex>=this.Mt))throw new Error(Axx
);return this.Array.Get(aIndex);},Amr:function(){var Qf=0;var P;for(P=0;P<this.Mt;
P=P+1)Qf=Qf+this.Get(P);return Qf;},toString:function(){var A05=this.Array.Get(0
).toFixed();var P;for(P=1;P<this.Mt;P=P+1)A05=(A05+OO)+this.Array.Get(P).toFixed(
);return A05;},EK:function(aString){var IJ=aString.indexOf(String.fromCharCode(0x2C
),0);var AZV=A.jV;var P=0;while(P<10){if(aString===A.jV)this.Array.Set(P,0);else{
if(IJ===-1){AZV=aString;aString=A.jV;}else{AZV=A.abV(aString,IJ);aString=A.ab1(aString
,0,IJ+1);}this.Array.Set(P,A.wz(AZV,0,10));IJ=aString.indexOf(String.fromCharCode(
0x2C),0);}P=P+1;}if(aString!==A.jV)A.ab5("%s",AXi);},Cp:function(){},Ha:function(
){var P;for(P=0;P<this.Mt;P=P+1)this.Set(P,0);},AuM:function(A1){var P=0;while(P<
this.Mt){if(this.Array.Get(P)===A1)return P;P=P+1;}return-1;},Hj:function(){var P=
0;var max=-1;while(P<this.Mt){if(this.Array.Get(P)>max)max=this.Array.Get(P);P=P+
1;}return max;},_Init:function(aArg){(this.Array=[]).__proto__=C.Int32ArrayWrapper.
Array;this.__proto__=C.Int32ArrayWrapper;A.h7++;},_Done:function(){this.__proto__=
null;A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((B=this.I)&&(B._cycle
!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:"Device::Int32ArrayWrapper"
};C.ActionToString={BX:function(A7){var AyC=A7;var EY=A.jV;switch(AyC){case 4:EY=
A.aaR(A.acf.Alarm);break;case 256:EY=A.aaR(A.acf.Weighing);break;case 128:EY=A.aaR(
A.acf.A4B);break;case 16:EY=A.aaR(A.acf.AKX);break;case 1:EY=A.aaR(A.acf.Temperature
);break;case 32:EY=A.aaR(A.acf.AnimalLoss);break;case 2:EY=A.aaR(A.acf.Rating);break;
case 8:EY=A.aaR(A.acf.Arq);break;case 64:EY=A.aaR(A.acf.Unregister);break;case 512:
EY=A.aaR(A.acf.AQu);break;case 1024:EY=A.aaR(A.acf.LinkTransponder);break;case 262144:
EY=A.aaR(A.acf.UnlinkTransponder);break;case 2048:EY=A.aaR(A.acf.O5);break;case 4096:
EY=A.aaR(A.acf.Calving);break;case 8192:EY=A.aaR(A.acf.DryOff);break;case 16384:
EY=A.aaR(A.acf.A5M);break;case 32768:EY=A.aaR(A.acf.AA3);break;case 524288:EY=A.
aaR(A.acf.AA5);break;case 65536:EY=A.aaR(A.acf.Delete);break;case 131072:EY=A.aaR(
A.acf.A5N);break;case 0:EY=A.aaR(A.acf.A5$);break;default:throw new Error(AHd+AyC.
toFixed());}return EY;},Lm:function(A7){var AyC=A7;var EY=A.jV;switch(AyC){case 4:
EY=A.aaR(A.acf.Alarm);break;case 256:EY=A.aaR(A.acf.Weighing);break;case 128:EY=
A.aaR(A.acf.A4B);break;case 16:EY=A.aaR(A.acf.AKX);break;case 1:EY=A.aaR(A.acf.Temperature
);break;case 32:EY=A.aaR(A.acf.AnimalLoss);break;case 2:EY=A.aaR(A.acf.Rating);break;
case 8:EY=A.aaR(A.acf.Arq);break;case 64:EY=A.aaR(A.acf.Unregister);break;case 512:
EY=A.aaR(A.acf.AQu);break;case 1024:EY=A.aaR(A.acf.LinkTransponder);break;case 262144:
EY=A.aaR(A.acf.UnlinkTransponder);break;case 2048:EY=A.aaR(A.acf.O5);break;case 4096:
EY=A.aaR(A.acf.Calving);break;case 8192:EY=A.aaR(A.acf.DryOff);break;case 32768:
EY=A.aaR(A.acf.AA3);break;case 524288:EY=A.aaR(A.acf.AA5);break;case 65536:EY=A.
aaR(A.acf.Delete);break;case 16384:case 131072:EY=A.aaR(A.acf.Bhj);break;case 0:
EY=A.aaR(A.acf.A5$);break;default:throw new Error(AHd+AyC.toFixed());}return EY;
},_Init:function(aArg){C.EnumToString._Init.call(this,aArg);this.__proto__=C.ActionToString;
},_className:"Device::ActionToString"};C.ACTIONS_COUNT=19;C.PopupTimeout=2000;C.
ITable={Filter:null,Id:2,CA:function(Ac,AZ){return 0;},Vu:function(Ac,AZ){return A.
jV;},AjT:function(G){A.we(this,0);A.pe([this,this.Eo],this);},HU:function(Ac,AZ){
return false;},Hy:function(Ac,AZ){return this.R0(Ac,AZ);},OnSetId:function(E){if(
this.Id===E)return;this.Id=E;},Ch:function(){return 0;},Bm:function(E){if(this.Filter===
E)return;this.Filter=E;A.abo([this,this.Fx,this.FB],0);},FB:function(Ap){this.Bm(
Ap);},IU:function(Ac,AZ){var Byi=this.Vv(Ac,AZ);return A._GetAutoObject(C.Converter
).A9H(Byi);},Vv:function(Ac,AZ){return 0;},R0:function(Ac,AZ){return 0;},A48:function(
Ac,AZ){return this.CA(Ac,AZ);},Ol:function(){var Jc=0;var ByZ=this.Id;return Jc;
},On:function(Aoc){var Ht=0;var ByZ=this.Id;return Ht===1;},Ya:function(){return-
1;},Y_:function(Ac,AZ,CV){return false;},Hb:function(Ac,AZ,CV){return false;},Y9:
function(Ac,AZ,CV){return false;},Na:function(Ac,AZ,CV){return false;},Y8:function(
Ac,AZ,CV){return false;},AbS:function(Ac,AZ,CV){return this.Y9(Ac,AZ,CV);},Akl:function(
Ac,AZ,CV){var Byj=A._GetAutoObject(C.Converter).Adp(CV);return this.Y_(Ac,AZ,Byj
);},A9j:function(Ac,AZ,CV){return this.Hb(Ac,AZ,CV);},ANl:function(Ac,AZ){return this.
CA(Ac,AZ);},Bgm:function(Ac,AZ){return this.CA(Ac,AZ);},Bl_:function(Ac,AZ,CV){return this.
Hb(Ac,AZ,CV);},Bl6:function(Ac,AZ,CV){return this.Hb(Ac,AZ,CV);},K7:function(aColumn
,A1){return-1;},Amp:function(Ac,AZ){return this.CA(Ac,AZ);},Bl4:function(Ac,AZ,CV
){return this.Hb(Ac,AZ,CV);},ABU:function(Ac,AZ){return this.CA(Ac,AZ);},ASV:function(
Ac,AZ,MB){return this.Hb(Ac,AZ,MB);},Eo:function(G){this.Bvs();},Bvs:function(){
return-1;},LL:function(Ac,AZ){return 0;},Uc:function(Ac,AZ,CV){return false;},Aji:
function(aColumn,A1){return-1;},Ha:function(){return false;},Bgn:function(Ac,AZ){
var Byk=this.CA(Ac,AZ);return A._GetAutoObject(C.Converter).BgL(Byk);},Bgq:function(
Ac,AZ){return this.CA(Ac,AZ);},ANv:function(Ac,AZ){return this.CA(Ac,AZ);},Bl8:function(
Ac,AZ,CV){var Byl=A._GetAutoObject(C.Converter).A3M(CV);return this.Hb(Ac,AZ,Byl
);},Bl9:function(Ac,AZ,CV){return this.Hb(Ac,AZ,CV);},Bme:function(Ac,AZ,CV){return this.
Hb(Ac,AZ,CV);},Ajf:function(aColumn,A1){return false;},AdL:function(aColumn,A1){
return false;},Bgz:function(Ac,AZ){return this.CA(Ac,AZ);},Bmc:function(Ac,AZ,CV
){return this.Hb(Ac,AZ,CV);},La:function(){return this.Qr()>=this.Hz();},Hz:function(
){return 0;},AaP:function(){return-1;},Qr:function(){return 0;},Fx:function(){return this.
Filter;},_Init:function(aArg){this.__proto__=C.ITable;A.h7++;},_Done:function(){
this.__proto__=null;A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((B=
this.Filter)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.I)&&(B._cycle!=D))B._Mark(
B._cycle=D);},I:null,_cycle:0,_observers:null,_className:"Device::ITable"};C.MaxAutoActionsCount=
4;C.WeightRecordingMode={Automatic:0,Manual:1,LAST:2};C.WeightRecordingModeToString={
BX:function(A7){var UR=A7;var Nk=A.jV;switch(UR){case 0:Nk=A.aaR(A.acf.Automatic
);break;case 1:Nk=A.aaR(A.acf.Manual);break;default:throw new Error(AXj+UR.toFixed(
));}return Nk;},_Init:function(aArg){C.EnumToString._Init.call(this,aArg);this.__proto__=
C.WeightRecordingModeToString;},_className:"Device::WeightRecordingModeToString"
};C.BooleanToAutoOnOff={BX:function(A7){switch(A7){case 0:return A.aaR(A.acf.Off
);case 1:return A.aaR(A.acf.Aap);default:return Asp+A7.toFixed();}},_Init:function(
aArg){C.EnumToString._Init.call(this,aArg);this.__proto__=C.BooleanToAutoOnOff;}
,_className:"Device::BooleanToAutoOnOff"};C.WeightStep=100;C.WeightRecordingScope={
CurrentWeightOnly:0,BirthWeightOnly:1,BirthAndCurrentWeight:2,NoWeightRecording:
3,LAST:4};C.WeightRecordingScopeToString={BX:function(A7){var BdE=A7;var Az4=A.jV;
switch(BdE){case 0:Az4=A.aaR(A.acf.Bfn);break;case 1:Az4=A.aaR(A.acf.Be3);break;
case 2:Az4=A.aaR(A.acf.Be0);break;case 3:Az4=A.aaR(A.acf.BhN);break;default:throw new
Error(AXk+BdE.toFixed());}return Az4;},_Init:function(aArg){C.EnumToString._Init.
call(this,aArg);this.__proto__=C.WeightRecordingScopeToString;},_className:"Device::WeightRecordingScopeToString"
};C.BodyTemperature={Undertemperature:0,Normal:1,Elevated:2,Fever:3,LAST:4};C.Jy={
Adj:0,Temperature:1,Rating:2,AeW:3,Bzy:4,BAc:5,BCV:6,BAR:7,BBG:8,BAp:9,BBF:10,BB6:
11,LAST:12};C.AnimalListContentToString={BX:function(A7){var Baf=A7;var WX=A.jV;
switch(Baf){case 0:WX=AXl;break;case 2:WX=AXm;break;case 1:WX=AXn;break;case 3:WX=
AXo;break;case 4:WX=AXp;break;case 5:WX=AXq;break;case 6:WX=AXr;break;case 7:WX=
AXs;break;case 8:WX=AXt;break;case 9:WX=AXu;break;case 10:WX=AHe;break;case 11:WX=
ZI;break;default:throw new Error(AXv+Baf.toFixed());}return WX;},_Init:function(
aArg){C.EnumToString._Init.call(this,aArg);this.__proto__=C.AnimalListContentToString;
},_className:"Device::AnimalListContentToString"};C.GenderFilterCriterion={A4:0,
AdH:function(){var Ay=A._NewObject(C.GenderFilterCriterion,0);Ay.Gy(this);return Ay;
},Gy:function(AM){C.FilterCriterion.Gy.call(this,AM);var Ay=(C.GenderFilterCriterion.
isPrototypeOf(AM)?AM:null);if(!!Ay)this.A4=Ay.A4;},_Init:function(aArg){C.FilterCriterion.
_Init.call(this,aArg);this.__proto__=C.GenderFilterCriterion;},_className:"Device::GenderFilterCriterion"
};C.AnimalTypeFilterCriterion={A4:0,AdH:function(){var Ay=A._NewObject(C.AnimalTypeFilterCriterion
,0);Ay.Gy(this);return Ay;},Gy:function(AM){C.FilterCriterion.Gy.call(this,AM);var
Ay=(C.AnimalTypeFilterCriterion.isPrototypeOf(AM)?AM:null);if(!!Ay)this.A4=Ay.A4;
},Initialize:function(AZ,ED,A1,SR){this.ET=AZ;this.Operator=ED;this.A4=A1;this.Aa6=
SR;return this;},_Init:function(aArg){C.FilterCriterion._Init.call(this,aArg);this.
__proto__=C.AnimalTypeFilterCriterion;},_className:"Device::AnimalTypeFilterCriterion"
};C.BzK={AiK:0,BzJ:1,BBr:2,A82:3,A3U:4,BCE:5,BAb:6,BCD:7,LinkTransponder:8,O5:9,
Weighing:10,Calving:11,LinkNaisId:12,BB5:13,ClearBirthNoticePending:14,DeleteAnimal:
15,ScanNaisId:16,Edit:17,ClearPurchaseNoticePending:18};C.AutoRegistrationModeToString={
BX:function(A7){var UR=A7;var Nk=A.jV;switch(UR){case 0:Nk=A.aaR(A.acf.Bff);break;
case 1:Nk=A.aaR(A.acf.BgP);break;case 2:Nk=A.aaR(A.acf.Off);break;default:throw new
Error(Axy+UR.toFixed());}return Nk;},_Init:function(aArg){C.EnumToString._Init.call(
this,aArg);this.__proto__=C.AutoRegistrationModeToString;},_className:"Device::AutoRegistrationModeToString"
};C.AutoRegistrationMode={UserConfirmed:0,Background:1,Off:2,LAST:3};C.AssessmentFilterCriterion={
A4:0,AdH:function(){var Ay=A._NewObject(C.AssessmentFilterCriterion,0);Ay.Gy(this
);return Ay;},Gy:function(AM){C.FilterCriterion.Gy.call(this,AM);var Ay=(C.AssessmentFilterCriterion.
isPrototypeOf(AM)?AM:null);if(!!Ay)this.A4=Ay.A4;},Initialize:function(AZ,ED,A1,
SR){this.ET=AZ;this.Operator=ED;this.A4=A1;this.Aa6=SR;return this;},_Init:function(
aArg){C.FilterCriterion._Init.call(this,aArg);this.__proto__=C.AssessmentFilterCriterion;
},_className:"Device::AssessmentFilterCriterion"};C.D2={Adj:0,Temperature:1,AeW:
2,Rating:3,LAST:4};C.FactoryResetScope={DeviceAndAnimalData:0,AnimalDataOnly:1,LAST:
2};C.FactoryResetScopeToString={BX:function(A7){switch(A7){case 0:return A.aaR(A.
acf.BeD);case 1:return A.aaR(A.acf.AnimalDataOnly);default:return AXw+A7.toFixed(
);}},_Init:function(aArg){C.EnumToString._Init.call(this,aArg);this.__proto__=C.
FactoryResetScopeToString;},_className:"Device::FactoryResetScopeToString"};C.ATt={
Cp:function(){A._GetAutoObject(C.Device).Arj(this.toString());},Init:function(aArg
){var B;A.zX([this,this.BcR],[B=A._GetAutoObject(C.Device),B.A7j,B.A$d],0);this.
BcR(this);},BcR:function(G){this.EK(A._GetAutoObject(C.Device).AFG);A.we(this,0);
},_Init:function(aArg){C.Int32ArrayWrapper._Init.call(this,aArg);this.__proto__=
C.ATt;this.Y0(3);this.Init(aArg);},_className:"Device::TemperaturesLowClass"};C.
ATs={Init:function(aArg){var B;A.zX([this,this.BcP],[B=A._GetAutoObject(C.Device
),B.A7i,B.A$c],0);this.BcP(this);},Cp:function(){A._GetAutoObject(C.Device).Ari(
this.toString());},BcP:function(G){this.EK(A._GetAutoObject(C.Device).AFF);A.we(
this,0);},_Init:function(aArg){C.Int32ArrayWrapper._Init.call(this,aArg);this.__proto__=
C.ATs;this.Y0(3);this.Init(aArg);},_className:"Device::TemperaturesHighClass"};C.
ALe={Init:function(aArg){var B;A.zX([this,this.Bcj],[B=A._GetAutoObject(C.Device
),B.A6J,B.A_W],0);this.Bcj(this);},Bcj:function(G){this.EK(A._GetAutoObject(C.Device
).AAD);A.we(this,0);},_Init:function(aArg){C.Int32ArrayWrapper._Init.call(this,aArg
);this.__proto__=C.ALe;this.Y0(3);this.Init(aArg);},_className:"Device::AnimalTypesClass"
};C.UInt64FilterCriterion={A4:0,AdH:function(){var Ay=A._NewObject(C.UInt64FilterCriterion
,0);Ay.Gy(this);return Ay;},Gy:function(AM){C.FilterCriterion.Gy.call(this,AM);var
Ay=(C.UInt64FilterCriterion.isPrototypeOf(AM)?AM:null);if(!!Ay)this.A4=Ay.A4;},Initialize:
function(AZ,ED,A1,SR){this.ET=AZ;this.Operator=ED;this.A4=A1;this.Aa6=SR;return this;
},_Init:function(aArg){C.FilterCriterion._Init.call(this,aArg);this.__proto__=C.
UInt64FilterCriterion;},_className:"Device::UInt64FilterCriterion"};C.BooleanToAssignedUnassignedString={
BX:function(A7){switch(A7){case 0:return A.aaR(A.acf.AjS);case 1:return A.aaR(A.
acf.BeE);default:return Asp+A7.toFixed();}},_Init:function(aArg){C.EnumToString.
_Init.call(this,aArg);this.__proto__=C.BooleanToAssignedUnassignedString;},_className:
"Device::BooleanToAssignedUnassignedString"};C.C4={UNDEFINED:0,AT:1,BA:2,BE:3,BzP:
4,Bz4:5,Bz5:6,Bz6:7,Bz7:8,Bz8:9,BAg:10,BAh:11,BAq:12,BAr:13,BAG:14,FR:15,GR:16,BAT:
17,BAU:18,BA6:19,BA7:20,BBa:21,BBb:22,BBc:23,BBd:24,BBj:25,BBx:26,BBy:27,BBM:28,
BBN:29,BB3:30,BB4:31,BCh:32,BCi:33,BCj:34,BCx:35,BCy:36,BCO:37,A9I:38,BCP:39,LAST:
40};C.CountryToString={BX:function(A7){var JS=A7;var Fr=A.jV;switch(JS){case 1:Fr=
A.aaR(A.acm.BeS);break;case 2:Fr=A.aaR(A.acm.Be4);break;case 3:Fr=A.aaR(A.acm.BeZ
);break;case 4:Fr=A.aaR(A.acm.Be6);break;case 5:Fr=A.aaR(A.acm.Be8);break;case 6:
Fr=A.aaR(A.acm.BmY);break;case 7:Fr=A.aaR(A.acm.Be$);break;case 8:Fr=A.aaR(A.acm.
Bfo);break;case 9:Fr=A.aaR(A.acm.Bfp);break;case 10:Fr=A.aaR(A.acm.Bgg);break;case
11:Fr=A.aaR(A.acm.Bfv);break;case 12:Fr=A.aaR(A.acm.BfX);break;case 13:Fr=A.aaR(
A.acm.Bmr);break;case 14:Fr=A.aaR(A.acm.Bf6);break;case 15:Fr=A.aaR(A.acm.Bgc);break;
case 16:Fr=A.aaR(A.acm.BgH);break;case 17:Fr=A.aaR(A.acm.Bfm);break;case 18:Fr=A.
aaR(A.acm.BgM);break;case 19:Fr=A.aaR(A.acm.BgW);break;case 20:Fr=A.aaR(A.acm.Bg8
);break;case 21:Fr=A.aaR(A.acm.Bg_);break;case 22:Fr=A.aaR(A.acm.Bhk);break;case
23:Fr=A.aaR(A.acm.Bhn);break;case 24:Fr=A.aaR(A.acm.Bhh);break;case 25:Fr=A.acm.
Bhp;break;case 26:Fr=A.aaR(A.acm.BhH);break;case 27:Fr=A.aaR(A.acm.BhO);break;case
28:Fr=A.aaR(A.acm.Blr);break;case 29:Fr=A.aaR(A.acm.Bls);break;case 30:Fr=A.aaR(
A.acm.BlR);break;case 31:Fr=A.aaR(A.acm.BlT);break;case 32:Fr=A.aaR(A.acm.BmX);break;
case 33:Fr=A.aaR(A.acm.Bmq);break;case 34:Fr=A.aaR(A.acm.Bmp);break;case 35:Fr=A.
aaR(A.acm.Bnn);break;case 36:Fr=A.aaR(A.acm.Bm7);break;case 37:Fr=A.aaR(A.acm.Bnr
);break;case 38:Fr=A.aaR(A.acm.A9I);break;case 39:Fr=A.aaR(A.acm.Bnq);break;case
0:Fr=AnX;break;default:throw new Error(Aw$+JS.toFixed());}return Fr;},Lm:function(
A7){var JS=A7;var BL=A.jV;switch(JS){case 1:BL=SL;break;case 2:BL=Zs;break;case 3:
BL=Uu;break;case 4:BL=Ww;break;case 5:BL=II;break;case 6:BL=WG;break;case 7:BL=Uv;
break;case 8:BL=Zu;break;case 9:BL=Uw;break;case 10:BL=Q4;break;case 11:BL=Zv;break;
case 12:BL=Zw;break;case 13:BL=ZD;break;case 14:BL=Ux;break;case 15:BL=Wy;break;
case 16:BL=Zx;break;case 17:BL=Wx;break;case 18:BL=ON;break;case 19:BL=PV;break;
case 20:BL=Wz;break;case 21:BL=WA;break;case 22:BL=Zy;break;case 23:BL=Zz;break;
case 24:BL=WC;break;case 25:BL=WD;break;case 26:BL=WE;break;case 27:BL=SM;break;
case 28:BL=ZA;break;case 29:BL=ZB;break;case 30:BL=Acf;break;case 31:BL=Uy;break;
case 32:BL=WF;break;case 33:BL=Ae2;break;case 34:BL=ZC;break;case 35:BL=ZE;break;
case 36:BL=Zt;break;case 37:BL=Ae3;break;case 38:BL=JN;break;case 39:BL=Ae4;break;
case 0:BL=AnX;break;default:throw new Error(Aw$+JS.toFixed());}return BL;},_Init:
function(aArg){C.EnumToString._Init.call(this,aArg);this.__proto__=C.CountryToString;
},_className:"Device::CountryToString"};C.EaseOfDelivery={Unspecified:0,Easy:1,Moderate:
2,Difficult:3,Surgery:4,LAST:5};C.EaseOfDeliveryToString={BX:function(A7){var BaN=
A7;var As4=A.jV;switch(BaN){case 0:As4=A.aaR(A.acf.Unspecified);break;case 1:As4=
A.aaR(A.acf.Easy);break;case 2:As4=A.aaR(A.acf.Moderate);break;case 3:As4=A.aaR(
A.acf.Difficult);break;case 4:As4=A.aaR(A.acf.Surgery);break;default:throw new Error(
AXx+BaN.toFixed());}return As4;},_Init:function(aArg){C.EnumToString._Init.call(
this,aArg);this.__proto__=C.EaseOfDeliveryToString;},_className:"Device::EaseOfDeliveryToString"
};C.WhereAbouts={UNB:0,EZU:1,EMA:2,VZU:3,VMA:4,VIV:5,TOT:6,V48:7,V3T:8,MGE:9,VKB:
10,LAST:11};C.WhereAboutsToString={BX:function(A7){var Bet=A7;var Aae=A.jV;switch(
Bet){case 0:Aae=A.aaR(A.acf.Unknown);break;case 1:Aae=A.aaR(A.acf.Bnz);break;case
2:Aae=A.aaR(A.acf.Bny);break;case 3:Aae=A.aaR(A.acf.BnH);break;case 4:Aae=A.aaR(
A.acf.BnG);break;case 5:Aae=A.aaR(A.acf.BnE);break;case 6:Aae=A.aaR(A.acf.BnB);break;
case 7:Aae=A.aaR(A.acf.BnD);break;case 8:Aae=A.aaR(A.acf.BnC);break;case 9:Aae=A.
aaR(A.acf.BnA);break;case 10:Aae=A.aaR(A.acf.BnF);break;default:throw new Error(
AXy+Bet.toFixed());}return Aae;},_Init:function(aArg){C.EnumToString._Init.call(
this,aArg);this.__proto__=C.WhereAboutsToString;},_className:"Device::WhereAboutsToString"
};C.Breed={UNKNOWN:0,SBT:1,RBT:2,JER:3,BV:4,RVA:5,RV:6,RDN:7,DSN:8,FL:9,GV:10,PIN:
11,HIN:12,MW:13,VW:14,LMP:15,DBV:16,AS:17,VR:18,CHA:19,LIM:20,WBB:21,BA:22,MA:23
,SAL:24,MON:25,AU:26,PIE:27,CHI:28,ROM:29,MAR:30,WP:31,BB:32,DA:33,AA:34,HE:35,SH:
36,HLD:37,WB:38,GAL:39,LR:40,BGA:41,LG:42,BRA:43,NOR:44,UST:45,ZEB:46,GRV:47,DEX:
48,WGA:49,LH:50,SD:51,FR:52,TUX:53,TLM:54,FLF:55,UCK:56,BLA:57,WIT:58,LAK:59,RHV:
60,AT:61,GR:62,PIF:63,PS:64,GVF:65,BVF:66,RBF:67,HWF:68,MWF:69,VWF:70,LPF:71,BRN:
72,BAZ:73,AO:74,BE:75,WL:76,BIS:77,YAK:78,SON:79,TAU:80,IND:81,TIN:82,WAG:83,XFF:
84,XFM:85,XMM:86,EVO:87,BLH:88,TLH:89,MGR:90,WSH:91,MUR:92,EBS:93,ERI:94,PAR:95,
XZF:96,XZM:97,XZZ:98,LAST:99};C.BreedToString={BX:function(A7){var Bu=A7;var BG=
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
AXz+Bu.toFixed());}return BG;},_Init:function(aArg){C.EnumToString._Init.call(this
,aArg);this.__proto__=C.BreedToString;},_className:"Device::BreedToString"};C.Tn={
timer:null,Q:null,D5:0,Dm:0,JE:0,Pc:1000,Pl:1000,Bv:false,Cq:false,BY:true,L8:function(
G){var F;if(!this.timer)return;if(this.D5<0){this.Dm=this.timer.Bt;this.D5=0;}var
At=(this.timer.Bt-this.Dm)|0;var Ob=this.Pc;var G3=this.Pl+this.Pc;var Lw=0;var I_=
this.D5;if(!I_&&(At>=Ob)){I_=1;At=At-Ob;}if((I_>0)&&(At>=G3)){var H7=(At/G3)|0;At=
At-(H7*G3);I_=I_+H7;}if((I_>2)&&!this.JE)I_=1;if(I_!==this.D5){this.Dm=this.timer.
Bt-(((B=At)<0)?B+0x100000000:B);this.D5=I_;}if(I_>0)Lw=this.Pl;var Kt=(I_>=this.
JE)&&(this.JE>0);if(!!this.Q){if((!Kt&&(At>=Lw))&&((F=this.Q,F[1].call(F[0]))!==
this.Cq))(F=this.Q,F[2].call(F[0],this.Cq));if((Kt||((At<Lw)&&(I_>0)))&&((F=this.
Q,F[1].call(F[0]))!==this.BY))(F=this.Q,F[2].call(F[0],this.BY));}if(Kt)this.Ar(
false);},HF:function(E){if(E<0)E=0;this.JE=E;},Ff:function(E){if(E<100)E=100;this.
Pc=E;},T1:function(E){if(E<0)E=0;this.Pl=E;},Ar:function(E){if(this.Bv===E)return;
this.Bv=E;if(!E&&!!this.timer){A.z9([this,this.L8],this.timer,0);this.timer=null;
}if(E){this.timer=A._GetAutoObject(A.acl.AdI);A.zV([this,this.L8],this.timer,0);
this.D5=-1;}},_Init:function(aArg){this.__proto__=C.Tn;A.h7++;},_Done:function(){
this.__proto__=null;A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((B=
this.timer)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Q)&&((B=B[0])._cycle!=
D))B._Mark(B._cycle=D);if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null
,_cycle:0,_observers:null,_className:"Device::BoolEffect"};C.H_={AnimalId:0,TransponderId:
1,BBm:2,BBl:3,BBp:4,BBo:5};C.Aul={BzN:0,BAj:1};C.AnimalIdGenerationMethodToString={
BX:function(A7){var AkW=A7;var Aok=A.jV;switch(AkW){case 0:Aok=A.aaR(A.acf.YN);break;
case 1:Aok=A.aaR(A.acf.Transponder);break;case 3:Aok=(A.aaR(A.acf.Manual)+NZ)+A.
aaR(A.acf.Male);break;case 2:Aok=(A.aaR(A.acf.Manual)+NZ)+A.aaR(A.acf.Female);break;
case 4:Aok=(A.aaR(A.acf.Manual)+NZ)+A.aaR(A.acf.Unknown);break;case 5:Aok=(A.aaR(
A.acf.Manual)+NZ)+AXA;break;default:throw new Error(Asu+AkW.toFixed());}return Aok;
},_Init:function(aArg){C.EnumToString._Init.call(this,aArg);this.__proto__=C.AnimalIdGenerationMethodToString;
},_className:"Device::AnimalIdGenerationMethodToString"};C.DirectionOfCountingToString={
BX:function(A7){var AyB=A7;var AZ2=A.jV;switch(AyB){case 0:AZ2=Asv;break;case 1:
AZ2=Asw;break;default:throw new Error(Asx+AyB.toFixed());}return AZ2;},_Init:function(
aArg){C.EnumToString._Init.call(this,aArg);this.__proto__=C.DirectionOfCountingToString;
},_className:"Device::DirectionOfCountingToString"};C.EnumToIcon={Ar1:function(A7
){throw new Error(Asf+A7.toFixed());},Ar2:function(A7){throw new Error(Asf+A7.toFixed(
));},_Init:function(aArg){this.__proto__=C.EnumToIcon;A.h7++;},_Done:function(){
this.__proto__=null;A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((B=
this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:
"Device::EnumToIcon"};C.AdG={Ar1:function(A7){return A.aaL(A.ach.ATg);},Ar2:function(
A7){var AyB=A7;var Rk=-1;switch(AyB){case 0:Rk=3;break;case 1:Rk=2;break;default:
throw new Error(Asy+AyB.toFixed());}return Rk;},_Init:function(aArg){C.EnumToIcon.
_Init.call(this,aArg);this.__proto__=C.AdG;},_className:"Device::DirectionOfCountingToIcon"
};C.Adn={Ar1:function(A7){return A.aaL(A.ach.ATe);},Ar2:function(A7){var AkW=A7;
var Rk=-1;switch(AkW){case 0:Rk=0;break;case 1:Rk=6;break;case 3:Rk=4;break;case
2:Rk=5;break;case 4:Rk=2;break;case 5:Rk=3;break;default:throw new Error(Asy+AkW.
toFixed());}return Rk;},_Init:function(aArg){C.EnumToIcon._Init.call(this,aArg);
this.__proto__=C.Adn;},_className:"Device::AnimalIdGenerationMethodToIcon"};C.Ph={
UNDEFINED:0,SH:1,ANy:2,AQe:3,ANx:4,A55:5,HE:6,A80:7,A3p:8,ALp:9,ASL:10,BE:11,BB:
12,A5S:13,ASM:14,ASN:15,ATl:16};C.GermanStateToString={BX:function(A7){var Bl=A7;
var Gs=A.jV;switch(Bl){case 1:Gs=A.aaR(A.aco.SH);break;case 2:Gs=A.aaR(A.aco.ANy
);break;case 3:Gs=A.aaR(A.aco.AQe);break;case 4:Gs=A.aaR(A.aco.ANx);break;case 5:
Gs=A.aaR(A.aco.A55);break;case 6:Gs=A.aaR(A.aco.HE);break;case 7:Gs=A.aaR(A.aco.
A80);break;case 8:Gs=A.aaR(A.aco.A3p);break;case 9:Gs=A.aaR(A.aco.ALp);break;case
10:Gs=A.aaR(A.aco.ASL);break;case 11:Gs=A.aaR(A.aco.BE);break;case 12:Gs=A.aaR(A.
aco.BB);break;case 13:Gs=A.aaR(A.aco.A5S);break;case 14:Gs=A.aaR(A.aco.ASM);break;
case 15:Gs=A.aaR(A.aco.ASN);break;case 16:Gs=A.aaR(A.aco.ATl);break;case 0:Gs=AnX;
break;default:throw new Error(Ae_+Bl.toFixed());}return Gs;},Lm:function(A7){var
Bl=A7;var Gs=A.jV;switch(Bl){case 1:Gs=A.aaR(A.aco.BlU);break;case 2:Gs=A.aaR(A.
aco.ANy);break;case 3:Gs=A.aaR(A.aco.AQe);break;case 4:Gs=A.aaR(A.aco.ANx);break;
case 5:Gs=A.aaR(A.aco.BhE);break;case 6:Gs=A.aaR(A.aco.HE);break;case 7:Gs=A.aaR(
A.aco.BlB);break;case 8:Gs=A.aaR(A.aco.BeV);break;case 9:Gs=A.aaR(A.aco.ALp);break;
case 10:Gs=A.aaR(A.aco.ASL);break;case 11:Gs=A.aaR(A.aco.BE);break;case 12:Gs=A.
aaR(A.aco.BB);break;case 13:Gs=A.aaR(A.aco.Bho);break;case 14:Gs=A.aaR(A.aco.ASM
);break;case 15:Gs=A.aaR(A.aco.ASN);break;case 16:Gs=A.aaR(A.aco.ATl);break;case
0:Gs=AnX;break;default:throw new Error(Ae_+Bl.toFixed());}return Gs;},Bna:function(
A7){var Bl=A7;var FV=-1;switch(Bl){case 0:FV=0;break;case 1:FV=1;break;case 2:FV=
2;break;case 3:FV=3;break;case 4:FV=4;break;case 5:FV=5;break;case 6:FV=6;break;
case 7:FV=7;break;case 8:FV=8;break;case 9:FV=9;break;case 10:FV=10;break;case 11:
FV=11;break;case 12:FV=12;break;case 13:FV=13;break;case 14:FV=14;break;case 15:
FV=15;break;case 16:FV=16;break;default:throw new Error(Ae_+Bl.toFixed());}return FV;
},Bnb:function(A7){var Bl=A7;var FV=A.jV;switch(Bl){case 1:FV=AXB;break;case 2:FV=
AXC;break;case 3:FV=AXD;break;case 4:FV=AXE;break;case 5:FV=AXF;break;case 6:FV=
AXG;break;case 7:FV=AXH;break;case 8:FV=AXI;break;case 9:FV=AXJ;break;case 10:FV=
AXK;break;case 11:FV=Uu;break;case 12:FV=AXL;break;case 13:FV=AXM;break;case 14:
FV=AXN;break;case 15:FV=AXO;break;case 16:FV=Axz;break;case 0:FV=AnX;break;default:
throw new Error(Ae_+Bl.toFixed());}return FV;},_Init:function(aArg){C.EnumToString.
_Init.call(this,aArg);this.__proto__=C.GermanStateToString;},_className:"Device::GermanStateToString"
};C.EartagNrAssignmentMode={OneSingleRange:0,TwoNumberRanges:1,LAST:2};C.EartagNrAssignmentModeToString={
Lm:function(A7){var UR=A7;var Nk=A.jV;switch(UR){case 0:Nk=AXP;break;case 1:Nk=AxA;
break;default:throw new Error(Asz+UR.toFixed());}return Nk;},BX:function(A7){var
UR=A7;var Nk=A.jV;switch(UR){case 0:Nk=A.aaR(A.acf.Blk);break;case 1:Nk=A.aaR(A.
acf.Bnp);break;default:throw new Error(Asz+UR.toFixed());}return Nk;},_Init:function(
aArg){C.EnumToString._Init.call(this,aArg);this.__proto__=C.EartagNrAssignmentModeToString;
},_className:"Device::EartagNrAssignmentModeToString"};C.BzH={BBD:0,BBt:1,BAA:2,
BAB:3,BAC:4,BCz:5};C.EnumToCodeset={Al$:function(Aht){throw new Error(AXQ+Aht.toFixed(
));},AdK:function(A7){throw new Error(Asf+A7.toFixed());},Aqa:function(){A.ab5("%s"
,AHf);return 0;},Hj:function(){A.ab5("%s",AHf);return 0;},_Init:function(aArg){this.
__proto__=C.EnumToCodeset;A.h7++;},_Done:function(){this.__proto__=null;A.h7--;}
,_ReInit:function(){},_Mark:function(D){var B;if((B=this.I)&&(B._cycle!=D))B._Mark(
B._cycle=D);},I:null,_cycle:0,_observers:null,_className:"Device::EnumToCodeset"
};C.MS={Al$:function(Aht){var Bu;switch(Aht){case 1:Bu=1;break;case 2:Bu=2;break;
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
Bu=0;}return Bu;},AdK:function(A7){var Bu=A7;var BI=0;switch(Bu){case 0:BI=0;break;
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
case 98:BI=111;break;default:throw new Error(AXR+Bu.toFixed());}return BI;},Aqa:
function(){return 0;},Hj:function(){return 111;},_Init:function(aArg){C.EnumToCodeset.
_Init.call(this,aArg);this.__proto__=C.MS;},_className:"Device::BreedToHitCodeset"
};C.ReasonOfLeaving={Unknown:0,A9v:1,Td:2,A8U:3,A5t:4,BBL:5,A9J:6,A51:7,A3T:8,A8Q:
9,A5Z:10,A3X:11,BB1:12,BB2:13,LAST:14};C.ReasonOfLeavingToString={BX:function(A7
){var Ac4=A7;var S7=A.jV;switch(Ac4){case 0:S7=A.aaR(A.acf.Unknown);break;case 1:
S7=A.aaR(A.acf.A9v);break;case 2:S7=A.aaR(A.acf.Td);break;case 3:S7=A.aaR(A.acf.
A8U);break;case 4:S7=A.aaR(A.acf.A5t);break;case 5:S7=A.aaR(A.acf.Bll);break;case
6:S7=A.aaR(A.acf.A9J);break;case 7:S7=A.aaR(A.acf.A51);break;case 8:S7=A.aaR(A.acf.
A3T);break;case 9:S7=A.aaR(A.acf.A8Q);break;case 10:S7=A.aaR(A.acf.A5Z);break;case
11:S7=A.aaR(A.acf.A3X);break;case 12:S7=A.aaR(A.acf.Blv);break;case 13:S7=A.aaR(
A.acf.Blu);break;default:throw new Error(AHg+Ac4.toFixed());}return S7;},_Init:function(
aArg){C.EnumToString._Init.call(this,aArg);this.__proto__=C.ReasonOfLeavingToString;
},_className:"Device::ReasonOfLeavingToString"};C.Ag3={Al$:function(Aht){var O0;
switch(Aht){case 1:O0=1;break;case 2:O0=2;break;case 3:O0=3;break;case 4:O0=4;break;
case 5:O0=5;break;case 6:O0=6;break;case 7:O0=7;break;case 8:O0=8;break;case 9:O0=
9;break;case 10:O0=10;break;case 11:O0=11;break;case 12:O0=12;break;case 13:O0=13;
break;default:O0=0;}return O0;},AdK:function(A7){var O0=A7;var I9=0;switch(O0){case
0:I9=0;break;case 2:I9=2;break;case 8:I9=8;break;case 11:I9=11;break;case 4:I9=4;
break;case 10:I9=10;break;case 7:I9=7;break;case 5:I9=5;break;case 9:I9=9;break;
case 3:I9=3;break;case 12:I9=12;break;case 13:I9=13;break;case 1:I9=1;break;case
6:I9=6;break;default:throw new Error(AHh+O0.toFixed());}return I9;},Aqa:function(
){return 0;},Hj:function(){return 13;},_Init:function(aArg){C.EnumToCodeset._Init.
call(this,aArg);this.__proto__=C.Ag3;},_className:"Device::ReasonOfLeavingToCodeset"
};C.KO={Al$:function(Aht){var K1;switch(Aht){case 1:K1=1;break;case 2:K1=2;break;
case 3:K1=3;break;case 4:K1=4;break;case 5:K1=5;break;case 6:K1=6;break;case 7:K1=
7;break;case 8:K1=8;break;case 9:K1=9;break;case 10:K1=10;break;default:K1=0;}return K1;
},AdK:function(A7){var K1=A7;var I9=0;switch(K1){case 0:I9=0;break;case 2:I9=2;break;
case 1:I9=1;break;case 9:I9=9;break;case 6:I9=6;break;case 8:I9=8;break;case 7:I9=
7;break;case 5:I9=5;break;case 10:I9=10;break;case 4:I9=4;break;case 3:I9=3;break;
default:throw new Error(AHh+K1.toFixed());}return I9;},Aqa:function(){return 0;}
,Hj:function(){return 10;},_Init:function(aArg){C.EnumToCodeset._Init.call(this,
aArg);this.__proto__=C.KO;},_className:"Device::WhereAboutsToCodeset"};C.Amg={_Init:
function(aArg){this.__proto__=C.Amg;A.h7++;},_Done:function(){this.__proto__=null;
A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((B=this.I)&&(B._cycle!=
D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:"Device::EmptyClass"
};C.CalfDeregistrationsTableFields={Year:0,Deregistrations:1,Deaths:2};C.CalfDeregistrations={
Deregistrations:0,Deaths:0,Year:0,EK:function(Ac,AG){var Ht=C.Row.EK.call(this,Ac
,AG);if(Ht&&!!AG){this.Aka(AG.CA(Ac,0));this.AvO(AG.CA(Ac,1));this.AvN(AG.CA(Ac,
2));}return Ht;},Cp:function(AG){var Ht=C.Row.Cp.call(this,AG);if(Ht&&!!AG){var Jc=
AG.Ol();if(Jc<=0)A.ab5("%s",Ach);else{if(this.AmB())this.CF=AG.Ya();AG.Hb(this.CF
,0,this.Year);AG.Hb(this.CF,1,this.Deregistrations);AG.Hb(this.CF,2,this.Deaths);
AG.On(Jc);}}return Ht;},Gb:function(){C.Row.Gb.call(this);this.Aka(-1);},Ha:function(
){C.Row.Ha.call(this);this.Aka(0);this.AvO(0);this.AvN(0);},AvO:function(E){if(this.
Deregistrations===E)return;this.Deregistrations=E;A.abo([this,this.Bif,this.AvO]
,0);},AvN:function(E){if(this.Deaths===E)return;this.Deaths=E;A.abo([this,this.Bid
,this.AvN],0);},Aka:function(E){if(this.Year===E)return;this.Year=E;A.abo([this,
this.AqR,this.Aka],0);},Bif:function(){return this.Deregistrations;},Bid:function(
){return this.Deaths;},AqR:function(){return this.Year;},_Init:function(aArg){C.
Row._Init.call(this,aArg);this.__proto__=C.CalfDeregistrations;this.TableId=4;},
_className:"Device::CalfDeregistrations"};C.Auj={Undefined:0,Display:1,A8Z:2,A8$:
3,A9Z:4,BAV:5,BB$:6,BCK:7,BBk:8,Bz9:9,Bzw:10,A4V:11,A81:12,BCR:13,A54:14,BCU:15};
C.DeviceComponentToString={BX:function(A7){var BaH=A7;var P5=A.jV;switch(BaH){case
0:P5=AXS;break;case 10:P5=A.aaR(A.acf.Beu);break;case 9:P5=A.aaR(A.acf.Be_);break;
case 1:P5=A.aaR(A.acf.BfN);break;case 11:P5=A.aaR(A.acf.A4V);break;case 5:P5=A.aaR(
A.acf.BnI);break;case 8:P5=A.aaR(A.acf.BfP);break;case 14:P5=A.aaR(A.acf.A54);break;
case 2:P5=A.aaR(A.acf.A8Z);break;case 12:P5=A.aaR(A.acf.A81);break;case 6:P5=A.aaR(
A.acf.BlA);break;case 3:P5=A.aaR(A.acf.A8$);break;case 7:P5=A.aaR(A.acf.BfQ);break;
case 13:P5=A.aaR(A.acf.Bfx);break;case 15:P5=A.aaR(A.acf.BnM);break;case 4:P5=A.
aaR(A.acf.A9Z);break;default:throw new Error(AXT+BaH.toFixed());}return P5;},_Init:
function(aArg){C.EnumToString._Init.call(this,aArg);this.__proto__=C.DeviceComponentToString;
},_className:"Device::DeviceComponentToString"};C.Age={Al$:function(Aht){return Aht;
},AdK:function(A7){return A7;},Aqa:function(){return 0;},Hj:function(){return 4;
},_Init:function(aArg){C.EnumToCodeset._Init.call(this,aArg);this.__proto__=C.Age;
},_className:"Device::EaseOfDeliveryToCodeset"};C.Aef={Ar1:function(A7){return A.
aaL(A.ach.AOF);},Ar2:function(A7){var BaS=A7;var Rk=-1;switch(BaS){case 0:Rk=0;break;
case 1:Rk=1;break;case 2:Rk=2;break;default:throw new Error(AXU+BaS.toFixed());}
return Rk;},_Init:function(aArg){C.EnumToIcon._Init.call(this,aArg);this.__proto__=
C.Aef;},_className:"Device::MotherSelectionFilterModeToIcon"};C.WhereAboutsFilterCriterion={
A4:0,AdH:function(){var Ay=A._NewObject(C.WhereAboutsFilterCriterion,0);Ay.Gy(this
);return Ay;},Gy:function(AM){C.FilterCriterion.Gy.call(this,AM);var Ay=(C.WhereAboutsFilterCriterion.
isPrototypeOf(AM)?AM:null);if(!!Ay)this.A4=Ay.A4;},Initialize:function(AZ,ED,A1,
SR){this.ET=AZ;this.Operator=ED;this.A4=A1;this.Aa6=SR;return this;},_Init:function(
aArg){C.FilterCriterion._Init.call(this,aArg);this.__proto__=C.WhereAboutsFilterCriterion;
},_className:"Device::WhereAboutsFilterCriterion"};C.BBw={AMv:0,BAe:1,AOh:2,LAST:
3};C.BCB={Gz:0,ATZ:1,G9:2,Year:3,LAST:4};C.TimespanDaysToString={BX:function(A7){
var Bd5=A7;var AAg=A.jV;switch(Bd5){case 0:AAg=A.aaR(A.acf.A4a);break;case 1:AAg=
A.aaR(A.acf.ATZ);break;case 2:AAg=A.aaR(A.acf.G9);break;case 3:AAg=A.aaR(A.acf.Year
);break;default:throw new Error(AXV+Bd5.toFixed());}return AAg;},_Init:function(
aArg){C.EnumToString._Init.call(this,aArg);this.__proto__=C.TimespanDaysToString;
},_className:"Device::TimespanDaysToString"};C.AkA={BBI:0,BAk:1,BA2:2,BA5:3,BA4:
4,BAl:5,BA3:6,LAST:7};C.USBStateToString={BX:function(A7){var Beo=A7;var Bl=A.jV;
switch(Beo){case 0:Bl=AXW;break;case 2:Bl=AXX;break;case 1:Bl=AXY;break;case 5:Bl=
AHi;break;case 3:Bl=AXZ;break;case 4:Bl=AX0;break;case 6:Bl=AX1;break;default:throw new
Error(AGI+Beo.toFixed());}return Bl;},_Init:function(aArg){C.EnumToString._Init.
call(this,aArg);this.__proto__=C.USBStateToString;},_className:"Device::USBStateToString"
};C.ABl={BA0:0,BzI:1,BA1:2,BAX:3};C.AwH={ABg:A.jV,Timestamp:0,ACY:0,AC5:0,AFc:0,
OnSetTimestamp:function(E){if(this.Timestamp===E)return;this.Timestamp=E;},AD$:function(
E){if(this.ACY===E)return;this.ACY=E;},AEg:function(E){if(this.AC5===E)return;this.
AC5=E;},AEs:function(E){if(this.AFc===E)return;this.AFc=E;},ADP:function(E){if(this.
ABg===E)return;this.ABg=E;},_Init:function(aArg){this.__proto__=C.AwH;A.h7++;},_Done:
function(){this.__proto__=null;A.h7--;},_ReInit:function(){},_Mark:function(D){var
B;if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:
null,_className:"Device::SoftwareVersionInformation"};C.AuO={Timestamp:0,AP4:0,AP5:
0,ATE:0,ATF:0,ATD:0,AP3:0,OnSetTimestamp:function(E){if(this.Timestamp===E)return;
this.Timestamp=E;},AD8:function(E){if(this.AP4===E)return;this.AP4=E;},AD9:function(
E){if(this.AP5===E)return;this.AP5=E;},AEF:function(E){if(this.ATE===E)return;this.
ATE=E;},AEG:function(E){if(this.ATF===E)return;this.ATF=E;},AEE:function(E){if(this.
ATD===E)return;this.ATD=E;},AD7:function(E){if(this.AP3===E)return;this.AP3=E;},
_Init:function(aArg){this.__proto__=C.AuO;A.h7++;},_Done:function(){this.__proto__=
null;A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((B=this.I)&&(B._cycle
!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:"Device::HardwareVersionInformation"
};C.ApO={Undefined:0,BAL:1,BzV:2};C.AfY={Manual:0,TransponderId:1,LAST:2};C.AnimalIdAutoGenerationMethodToString={
BX:function(A7){var Bad=A7;var AZv=A.jV;switch(Bad){case 0:AZv=A.aaR(A.acf.A32);
break;case 1:AZv=A.aaR(A.acf.A4g);break;default:throw new Error(AX2+Bad.toFixed(
));}return AZv;},_Init:function(aArg){C.EnumToString._Init.call(this,aArg);this.
__proto__=C.AnimalIdAutoGenerationMethodToString;},_className:"Device::AnimalIdAutoGenerationMethodToString"
};C.G9={A3K:0,ACN:1,ABE:2,ACZ:3,AAF:4,AC2:5,ACP:6,ACO:7,AAN:8,AFj:9,ADd:10,ADb:11
,ABo:12,LAST:13};C.MonthToString={BX:function(A7){var BbS=A7;var W$=A.jV;switch(
BbS){case 1:W$=A.aaR(A.acs.ACN);break;case 2:W$=A.aaR(A.acs.ABE);break;case 3:W$=
A.aaR(A.acs.ACZ);break;case 4:W$=A.aaR(A.acs.AAF);break;case 5:W$=A.aaR(A.acs.AC2
);break;case 6:W$=A.aaR(A.acs.ACP);break;case 7:W$=A.aaR(A.acs.ACO);break;case 8:
W$=A.aaR(A.acs.AAN);break;case 9:W$=A.aaR(A.acs.AFj);break;case 10:W$=A.aaR(A.acs.
ADd);break;case 11:W$=A.aaR(A.acs.ADb);break;case 12:W$=A.aaR(A.acs.ABo);break;default:
throw new Error(AX3+BbS.toFixed());}return W$;},_Init:function(aArg){C.EnumToString.
_Init.call(this,aArg);this.__proto__=C.MonthToString;},_className:"Device::MonthToString"
};C.Ai_={FileName:A.jV,AFe:0,ABl:0,Anv:false,_Init:function(aArg){this.__proto__=
C.Ai_;A.h7++;},_Done:function(){this.__proto__=null;A.h7--;},_ReInit:function(){
},_Mark:function(D){var B;if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null
,_cycle:0,_observers:null,_className:"Device::DataExportContext"};C.Al0={BAS:0,BCq:
1};C.AT6={Init:function(aArg){var B;A.zX([this,this.Bc1],[B=A._GetAutoObject(C.Device
),B.A7v,B.A$k],0);this.Bc1(this);},Cp:function(){A._GetAutoObject(C.Device).Aro(
this.toString());},Bc1:function(G){this.EK(A._GetAutoObject(C.Device).AF2);A.we(
this,0);},_Init:function(aArg){C.Int32ArrayWrapper._Init.call(this,aArg);this.__proto__=
C.AT6;this.Y0(2);this.Init(aArg);},_className:"Device::WeightGainsLowClass"};C.AT5={
Init:function(aArg){var B;A.zX([this,this.BcZ],[B=A._GetAutoObject(C.Device),B.A7u
,B.A$j],0);this.BcZ(this);},Cp:function(){A._GetAutoObject(C.Device).Arn(this.toString(
));},BcZ:function(G){this.EK(A._GetAutoObject(C.Device).AF1);A.we(this,0);},_Init:
function(aArg){C.Int32ArrayWrapper._Init.call(this,aArg);this.__proto__=C.AT5;this.
Y0(2);this.Init(aArg);},_className:"Device::WeightGainsHighClass"};C.AT8={Init:function(
aArg){var B;A.zX([this,this.Bc3],[B=A._GetAutoObject(C.Device),B.A7y,B.A$n],0);this.
Bc3(this);},Cp:function(){A._GetAutoObject(C.Device).Arp(this.toString());},Bc3:
function(G){this.EK(A._GetAutoObject(C.Device).AF5);A.we(this,0);},_Init:function(
aArg){C.Int32ArrayWrapper._Init.call(this,aArg);this.__proto__=C.AT8;this.Y0(2);
this.Init(aArg);},_className:"Device::WeightValuesBirthClass"};C.AT4={Init:function(
aArg){var B;A.zX([this,this.BcX],[B=A._GetAutoObject(C.Device),B.A7t,B.A$i],0);this.
BcX(this);},Cp:function(){A._GetAutoObject(C.Device).Arm(this.toString());},BcX:
function(G){this.EK(A._GetAutoObject(C.Device).AF0);A.we(this,0);},_Init:function(
aArg){C.Int32ArrayWrapper._Init.call(this,aArg);this.__proto__=C.AT4;this.Y0(2);
this.Init(aArg);},_className:"Device::WeightGainsAverageClass"};C.ALf={Init:function(
aArg){var B;A.zX([this,this.Bck],[B=A._GetAutoObject(C.Device),B.A6K,B.A_X],0);this.
Bck(this);},Bck:function(G){this.EK(A._GetAutoObject(C.Device).AAE);A.we(this,0);
},_Init:function(aArg){C.Int32ArrayWrapper._Init.call(this,aArg);this.__proto__=
C.ALf;this.Y0(2);this.Init(aArg);},_className:"Device::AnimalTypesWeightGainsClass"
};C.BBz={BBC:0,BBq:1,BAd:2,BCS:3,Unknown:4};C.BzT={None:0,BBJ:1,BBE:2,BBA:3,BBB:
4};C.Ahh={A6i:0,Manual:1,TransponderId:2,LAST:3};C.TransponderAssignmentIdChangeMethodToString={
BX:function(A7){var Bd9=A7;var AJW=A.jV;switch(Bd9){case 0:AJW=A.aaR(A.acf.A6i);
break;case 1:AJW=A.aaR(A.acf.A32);break;case 2:AJW=A.aaR(A.acf.A4g);break;default:
throw new Error(AX4+Bd9.toFixed());}return AJW;},_Init:function(aArg){C.EnumToString.
_Init.call(this,aArg);this.__proto__=C.TransponderAssignmentIdChangeMethodToString;
},_className:"Device::TransponderAssignmentIdChangeMethodToString"};C.A8R={Byb:function(
AsN){var ML=A.ab0(A.abV(AsN,15),0,10);var JS=A._GetAutoObject(C.Converter).Ab7(ML
);if(!!JS){if((JS===10)&&(AsN.length>16))return 0;else return ML;}else{JS=A._GetAutoObject(
C.Converter).Ab7(A._GetAutoObject(C.Device).T_);if(!!JS&&((JS===10)&&((AsN.length===
10)||(AsN.length===12)))){var AH7=A.ab0(A.abV(AsN,10),0,10);var AIV=A._GetAutoObject(
C.Converter).Bnj(AH7);if((AH7>0)&&!!AIV)return(A._GetAutoObject(C.Converter).ApT(
JS)*1000000000000)+A.ab0(A.abV(AsN,10),0,10);}}return 0;},Bya:function(Aos){if(Aos.
length<8)return 0;var AzK=A._NewObject(A.Core.Bt,0);var A18=false;var A2a=A.abW(
Aos,4,4);var As$=A.wz(A2a,0,10);if((As$<2000)||(As$>2100)){A2a=A.abV(Aos,4);As$=
A.wz(A2a,0,10);A18=true;}if((As$<2000)||(As$>2100))return 0;AzK.Year=As$;var AJF;
var AyU;if(A18){AJF=A.abW(Aos,4,2);AyU=A.wz(AJF,0,10);}else{AJF=A.abW(Aos,2,2);AyU=
A.wz(AJF,0,10);}if((AyU<1)||(AyU>12))return 0;AzK.T3(AyU);var AJE;var AyT;if(A18
){AJE=A.abW(Aos,6,2);AyT=A.wz(AJE,0,10);}else{AJE=A.abV(Aos,2);AyT=A.wz(AJE,0,10
);}if((AyT<1)||(AyT>AzK.YS()))return 0;AzK.Li(AyT);return AzK.JF();},_Init:function(
aArg){this.__proto__=C.A8R;A.h7++;},_Done:function(){this.__proto__=null;A.h7--;
},_ReInit:function(){},_Mark:function(D){var B;if((B=this.I)&&(B._cycle!=D))B._Mark(
B._cycle=D);},I:null,_cycle:0,_observers:null,_className:"Device::ParserClass"};
C.Arr={_Init:function(){C.A8R._Init.call(this,0);},_ReInit:function(){},_variants:
function(){return this;},_this:null};C.AnimalTableFieldsToString={BX:function(A7
){var ZP=A7;var MD=A.jV;switch(ZP){case 14:MD=A.aaR(A.acf.AeU);break;case 32:MD=
A.aaR(A.acf.Breed);break;case 4:MD=A.aaR(A.acf.AdF);break;case 28:MD=A.aaR(A.acf.
A3P);break;case 33:MD=A.aaR(A.acf.Af8);break;case 23:MD=A.aaR(A.acf.Kz);break;case
7:MD=A.aaR(A.acf.AeL);break;case 2:MD=A.aaR(A.acf.O);break;case 0:MD=A.aaR(A.acf.
GB);break;case 8:MD=A.aaR(A.acf.Alarm);break;case 9:MD=A.aaR(A.acf.AA$);break;case
38:MD=A.aaR(A.acf.BfO);break;case 11:MD=A.aaR(A.acf.Fever);break;case 29:MD=A.aaR(
A.acf.APT);break;case 18:MD=A.aaR(A.acf.MU);break;case 26:MD=A.aaR(A.acf.YN);break;
case 22:MD=A.aaR(A.acf.Transponder);break;case 1:MD=A.aaR(A.acf.Gv);break;case 34:
MD=A.aaR(A.acf.I6);break;case 6:case 25:case 27:case 10:case 37:case 12:case 17:
case 5:case 3:case 35:case 36:case 15:case 16:case 24:case 31:case 20:case 30:case
21:case 19:case 13:MD=A.jV;break;default:throw new Error(AX5+A7.toFixed());}return MD;
},_Init:function(aArg){C.EnumToString._Init.call(this,aArg);this.__proto__=C.AnimalTableFieldsToString;
},_className:"Device::AnimalTableFieldsToString"};C.Vl={BAY:0,BAW:1,LAST:2};C.DataExportDestinationToString={
BX:function(A7){var BvR=A7;var AZX=A.jV;switch(BvR){case 0:AZX=A.acf.BgI;break;case
1:AZX=A.acf.Bfq;break;default:throw new Error(AHj+A7.toFixed());}return AZX;},_Init:
function(aArg){C.EnumToString._Init.call(this,aArg);this.__proto__=C.DataExportDestinationToString;
},_className:"Device::DataExportDestinationToString"};C.ACW={Be:0,BCu:1,LAST:2};
C.ListViewScopeToString={BX:function(A7){var BwY=A7;var A0U=A.jV;switch(BwY){case
0:A0U=A.aaR(A.acf.Be);break;case 1:A0U=A.aaR(A.acf.Bmn);break;default:throw new Error(
AX6+A7.toFixed());}return A0U;},_Init:function(aArg){C.EnumToString._Init.call(this
,aArg);this.__proto__=C.ListViewScopeToString;},_className:"Device::ListViewScopeToString"
};C.AF4={BDe:0,BDd:1,BDc:2,LAST:3};C.WeightValuePrecisionToString={BX:function(A7
){var Bzs=A7;var AKb=A.jV;switch(Bzs){case 0:AKb=AsA+A.aaR(A.acf.Ay6);break;case
1:AKb=AX7+A.acf.Ah4;break;case 2:AKb=AX8+A.acf.Ah4;break;default:throw new Error(
AsB+A7.toFixed());}return AKb;},_Init:function(aArg){C.EnumToString._Init.call(this
,aArg);this.__proto__=C.WeightValuePrecisionToString;},_className:"Device::WeightValuePrecisionToString"
};
C._Init=function(){C.Int32FilterCriterion.__proto__=C.FilterCriterion;C.StringFilterCriterion.
__proto__=C.FilterCriterion;C.Table.__proto__=C.ITable;C.Animal.__proto__=C.Row;
C.Rating.__proto__=C.Row;C.HelperClass.__proto__=C.Amg;C.BoolFilterCriterion.__proto__=
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
C.ATt.__proto__=C.Int32ArrayWrapper;C.ATs.__proto__=C.Int32ArrayWrapper;C.ALe.__proto__=
C.Int32ArrayWrapper;C.UInt64FilterCriterion.__proto__=C.FilterCriterion;C.BooleanToAssignedUnassignedString.
__proto__=C.EnumToString;C.CountryToString.__proto__=C.EnumToString;C.EaseOfDeliveryToString.
__proto__=C.EnumToString;C.WhereAboutsToString.__proto__=C.EnumToString;C.BreedToString.
__proto__=C.EnumToString;C.AnimalIdGenerationMethodToString.__proto__=C.EnumToString;
C.DirectionOfCountingToString.__proto__=C.EnumToString;C.AdG.__proto__=C.EnumToIcon;
C.Adn.__proto__=C.EnumToIcon;C.GermanStateToString.__proto__=C.EnumToString;C.EartagNrAssignmentModeToString.
__proto__=C.EnumToString;C.MS.__proto__=C.EnumToCodeset;C.ReasonOfLeavingToString.
__proto__=C.EnumToString;C.Ag3.__proto__=C.EnumToCodeset;C.KO.__proto__=C.EnumToCodeset;
C.CalfDeregistrations.__proto__=C.Row;C.DeviceComponentToString.__proto__=C.EnumToString;
C.Age.__proto__=C.EnumToCodeset;C.Aef.__proto__=C.EnumToIcon;C.WhereAboutsFilterCriterion.
__proto__=C.FilterCriterion;C.TimespanDaysToString.__proto__=C.EnumToString;C.USBStateToString.
__proto__=C.EnumToString;C.AnimalIdAutoGenerationMethodToString.__proto__=C.EnumToString;
C.MonthToString.__proto__=C.EnumToString;C.AT6.__proto__=C.Int32ArrayWrapper;C.AT5.
__proto__=C.Int32ArrayWrapper;C.AT8.__proto__=C.Int32ArrayWrapper;C.AT4.__proto__=
C.Int32ArrayWrapper;C.ALf.__proto__=C.Int32ArrayWrapper;C.TransponderAssignmentIdChangeMethodToString.
__proto__=C.EnumToString;C.AnimalTableFieldsToString.__proto__=C.EnumToString;C.
DataExportDestinationToString.__proto__=C.EnumToString;C.ListViewScopeToString.__proto__=
C.EnumToString;C.WeightValuePrecisionToString.__proto__=C.EnumToString;};C._ReInit=
function(){var B;if((B=C.Device._this))B._ReInit(),C.Device._ReInit.call(B);if((
B=C.Converter._this))B._ReInit(),C.Converter._ReInit.call(B);if((B=C.Helper._this
))B._ReInit(),C.Helper._ReInit.call(B);if((B=C.Arr._this))B._ReInit(),C.Arr._ReInit.
call(B);};C.DB=function(D){var B;if((B=C.Device._this)&&(B._cycle!=D))B._Done(C.
Device._this=null);if((B=C.Converter._this)&&(B._cycle!=D))B._Done(C.Converter._this=
null);if((B=C.Helper._this)&&(B._cycle!=D))B._Done(C.Helper._this=null);if((B=C.
Arr._this)&&(B._cycle!=D))B._Done(C.Arr._this=null);};return C;})();

/* VitalControl demonstration application, © Urban GmbH & Co.KG 2023 */