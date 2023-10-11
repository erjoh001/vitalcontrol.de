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
* Version  : 12.05
* Profile  : WebGLDemonstrator
* Platform : Web.WebGL.RGBA8888
*
*******************************************************************************/

var index;if(!index)throw new Error("The application file '_project.js' isn't yet loaded!"
);if(index.Device)throw new Error("The unit file 'Device.js' included twice!");index.
Device=(function(){var A=index;var C={};
var B$="ERROR: Cannot add criterion, it is already in the list.";var BH="ERROR: BatteryChargeState is read only";
var EV="ERROR: UpdateChargeActive is read only";var GT="ERROR: ScanState is read only.";
var Jt="ERROR: MeasureState is read only.";var IL="ERROR: Temperature value is read only";
var OK="ERROR: UpdateDataTable called for Undefined data table.";var PJ="ERROR: UpdateDataTable called for unknown data table id=";
var N1="ERROR: SyncState is read only.";var CJ="ERROR: ScanTransponder is read only.";
var Fn="ERROR: Body weight value is read only";var LW="ERROR: Predicted temperature value is read only";
var OL="ERROR: TransferProgress is read only";var KH="ERROR: TransferTarget is read only";
var OM="ERROR: unhandled assessment.";var Ne="Unhandled enum BodyTemperature: ";
var ON="AU";var Ss="AT";var T$="BE";var Zg="BA";var Wb="BG";var IM="CA";var Ua="CN";
var Zh="TW";var Wc="HR";var Zi="CY";var Ub="CZ";var Zj="DK";var Zk="EE";var Uc="FI";
var Wd="FR";var QV="DE";var Zl="GR";var OO="HU";var PK="IE";var Ud="IT";var Zm="JP";
var We="LV";var Zn="LT";var Zo="LU";var Wf="MT";var Wg="NL";var St="NO";var Zp="PL";
var Zq="PT";var AbO="RO";var Su="RU";var AbP="SK";var AeO="SI";var Zr="ES";var Wh=
"SE";var Wi="CH";var AeP="TR";var AeQ="UA";var JT="UK";var AeR="US";var Li=".";var
Ag_="-";var Ane="ERROR: Unhandled mass unit: ";var N2=" ";var Wj="Unhandled gender";
var Anf="Unhandled animal type";var Ag$="Unhandled Device::MassUnit.";var Aha="Unhandled Device::AnimalListContent.";
var AbQ="Avid";var Ue="Ordicam / IER SA";var Ang="Agrident";var Anh="Datamars";var
Awj="Allflex";var Awk="Texas Instruments";var Akj="Nedap";var Awl="Digital Angel";
var AeS="null";var Arv="[ ";var OP=", ";var Sv=" ]";var Awm="Unhandled language";
var Sw="Unhandled Device::AnimalListAction.";var Arw="Temperature unit conversion not supported: ";
var Awn="->";var Awo="=";var Awp=">";var Ani="<";var Awq="!=";var Arx="WARNING: Unhandled operator.";
var KI="Unknown birth type";var Awr="Unhandled country: ";var AbR="ERROR: Cannot start transaction";
var Aws="ERROR: Table is null, cannot load row (";var AFl=")";var AFm="Table Id mismatch!";
var AFn="ERROR: Row index (";var AFo=") out of bounds [0,";var Awt="]";var ATi="ERROR: Table is full. Item limit: ";
var ATj="Device::ScanTransponder not set";var ATk="Unhandled TransponderType.";var
ATl="Unhandled ScanState.";var ATm="Could not load animal with transponder";var Ary=
"Birth type";var Awu="Time calving";var QW="Pend. reg. notice";var Awv="Perished";
var ATn="Rating temp.";var ATo=" mother";var ATp="Reason leaving";var ATq="Time alarm";
var AFp="Time first weighing";var AFq="Time control";var AeT="Time temp.";var Anj=
"Time watch";var ATr="Time weighing";var AFr="Assessment";var Akk="Time rating";
var AFs="ERROR: Unhandled AnimalTable filter field:";var Aww="Field ";var ATs="ERROR: Unhandled RatingTable filter field:";
var ATt="ERROR: Unhandled table ";var ATu=" filter fields.";var ATv="WARNING: Unhandled filter criterion type.";
var AbS="0";var Arz="No table specified";var AFt="Invalid animal id generation method: ";
var AFu="Unhandled AnimalIdGenerationMethod: ";var Awx="Invalid gender: ";var AFv=
"Invalid ear tag number assignment mode: ";var Awy=";";var ATw="Invalid animal creation error code: ";
var ATx="Invalid EartagNrAssignmentMode: ";var ATy="Unsupported exponent: ";var ATz=
"Unknown whereabouts type: ";var AFw="Unhandled Gender: ";var ATA="Unhandled AnimalIdAutoGenerationMethod: ";
var OQ="\n";var Awz="\n\n";var ATB="Bootloader:\nV\xA0";var ATC="Middleware:\nV\xA0";
var ATD="GUI:\nV\xA0";var ATE="Mainboard: ";var ATF="Torchboard: ";var ATG="Operator not supported.";
var ATH="Unhandled Device::TransponderAssignmentIdChangeMethod: ";var ArA="Unhandled enum value ";
var AwA="UNDEFINED";var AFx="Boot";var ATI="Charge";var AFy="ChargeWarning";var ATJ=
"ControlledPowerOff";var ATK="DeviceMain";var ATL="DeviceService";var ATM="DeviceInfo";
var AFz="DeviceBackup";var ATN="DeviceCheck";var AwB="Home";var AFA="Settings";var
AFB="DateTimeSettings";var ATO="UnitsSettings";var AFC="DataAcquisitionSettings";
var ATP="RegistrationAutomaticSettings";var ATQ="RegistrationPresettingsSettings";
var QX="TransponderAssignmentSettings";var Wk="TemperatureSettings";var ATR="WeightGainSettings";
var ATS="DeviceSettings";var ATT="RegistrationSettings";var ATU="InitializationSettings";
var ATV="PremisesSettings";var ATW="Sleep";var ATX="Sync";var Ahb="EditAnimalData";
var AFD="EditAnimalDataNaisId";var ATY="AnimalList";var ATZ="AnimalListFilter";var
AFE="AlarmListFilter";var AFF="WatchListFilter";var AwC="AnimalActionActions";var
QY="AnimalActionTemperature";var AT0="TemperatureMeasurement";var AT1="AnimalActionWeighing";
var AT2="AnimalActionRate";var ArB="AnimalActionUnregister";var AT3="AnimalActionPerished";
var AT4="AnimalActionNewBornCare";var AT5="AlarmList";var AT6="ControlMeasure";var
AT7="ControlList";var AT8="RangeTest";var ArC="ListsMain";var AT9="ListsIdManagement";
var AT_="WatchList";var AT$="AnimalListActions";var AUa="AlarmListActions";var AUb=
"ControlListActions";var AUc="WatchListActions";var AUd="EvaluationMenuMain";var
AUe="EvaluationMenuWeights";var AUf="EvaluationLosses";var AUg="EvaluationRatings";
var AFG="EvaluationTemperatures";var ArD="EvaluationWeights";var AUh="EvaluationWeightsRecent";
var AUi="EvaluationBirthWeights";var AUj="AnimalEvaluationFilter";var AwD="NewMenu";
var Akl="NewAnimals";var Ahc="NewAnimalManualData";var AwE="MassRecording";var Ank=
"NewAnimalTransponderData";var Ahd="NewAnimalLoss";var AUk="AutoActionScanScreen";
var AwF="ManualActionScanScreen";var AFH="SetTransponderScreen";var AeU="SetSaveTransponderScreen";
var AFI="NewAnimalSetTransponderScreen";var Wl="NewAnimalsSetTransponderScreen";
var Akm="NewAnimalCalvingDataScreen";var Anl="WeightListScreen";var AUl="AnimalSingleInfoScreen";
var AUm="AnimalMultiInfoScreen";var AUn="AnimalRegistrationDetails";var AUo="MultiInfoActionsScreen";
var AUp="FreshCowListScreen";var ArE="FreshCowListActionsScreen";var AFJ="FreshCowListFilterScreen";
var AFK="DryCowListScreen";var AUq="DryCowListActionsScreen";var AUr="DryCowListFilterScreen";
var AUs="NoTransponderListScreen";var AUt="NoTransponderListActionsScreen";var AUu=
"NoTransponderListFilterScreen";var AUv="YoungNoTransponderListScreen";var AFL="YoungNoTransponderListActionsScreen";
var AUw="YoungNoTransponderListFilterScreen";var AwG="NoNaisIdListScreen";var AFM=
"NoNaisIdListActionsScreen";var AFN="NoNaisIdListFilterScreen";var AFO="RegistrationsListScreen";
var AFP="RegistrationsListActionsScreen";var AFQ="RegistrationsListFilterScreen";
var AFR="ActionListScreen";var AUx="ActionListActionsScreen";var AUy="ActionListFilterScreen";
var AUz="UpdateScreen";var AUA="MotherScanScreen";var AUB="SetSaveNaisIdScreen";
var AUC="PurchasedAnimalsList";var AUD="TextInput";var AwH="Unhandled display mode: ";
var AFS="None";var AUE="Actions Settings";var AFT="Auto Action";var Ahe="Menu Item Settings";
var Wm="Rating Type";var AUF="Weighing settings";var AbT="Options";var AUG="AnimalSearch";
var AUH="AnimalSearchUnfiltered";var Anm="AnimalSearchDriedOff";var AeV="MeasurementReady";
var Ann="AnimalMultiInfoMenu";var AFU="MassRecordingDefaults";var AUI="MassRecordingFields";
var OR="MassRecordingMenu";var AUJ="PurchasedAnimalsListMenu";var AUK="BirthRegistrationsListMenu";
var AUL="Unhandled overlay menu: ";var AwI="Error";var ArF="Idle";var AFV="IdScanned";
var AUM="NotFound";var AFW="Progress";var AFX="Unhandled scan state: ";var AUN="Prediction";
var AFY="Ready";var AUO="Unhandled measure state: ";var AUP="Unhandled temperature unit: ";
var AUQ="Unhandled species: ";var AFZ="English";var AUR="Nederlands";var AF0="Deutsch";
var AF1="Eesti";var AwJ="Suomalainen";var AUS="Fran\xE7ais";var AUT="\u0395\u03BB\u03BB\u03B7\u03BD\u03B9\u03BA\u03AC";
var AUU="\u0411\u044A\u043B\u0433\u0430\u0440\u0441\u043A\u0438";var AUV="Italiano";
var AUW="\u0420\u0443\u0441\u0441\u043A\u0438\u0439";var AUX="Espa\xF1ol";var AUY=
"T\xFCrk\xE7e";var AUZ="\u6B63\u9AD4\u5B57/\u7E41\u9AD4\u5B57";var ArG="\u010Ce\u0161tina";
var ArH="Bosanski";var AF2="Norsk";var AU0="\u0423\u043A\u0440\u0430\u0457\u043D\u0441\u044C\u043A\u0438\u0439";
var AF3="Unhandled language: ";var AU1="EN";var AU2="ET";var AU3="EL";var AU4="ZH";
var AU5="CS";var AU6="BS";var AU7="Unhandled gender: ";var AU8="Unhandled birth type: ";
var AU9="Exporting";var AU_="ImportFinish";var AU$="ImportStart";var AVa="Importing";
var AVb="Init";var AVc="Unhandled sync state: ";var AF4="Unhandled rating attribute: ";
var AVd="Unhandled assessment: ";var ArI="Illegal boolean value: ";var AwK="Unhandled popup ID:";
var AF5="Unknown";var AF6="Severe Error";var AwL="ErrorsDeviceDriverCheck";var AwM=
"Enter Sleep";var AF7="About";var AVe="InfoSoftwareVersions";var AVf="InfoHardwareVersions";
var AVg="InfoSerial";var AF8="ShutDown";var AVh="SuccessDataSync";var AVi="SuccessResetFactory";
var AVj="SuccessResetAnimalData";var AVk="SuccessCreateBackup";var AVl="SuccessRestoreBackup";
var AVm="CreateBackupInProgress";var AVn="RestoreBackupInProgress";var AVo="FailedCreateBackup";
var AwN="FailedRestoreBackup";var AVp="TechnicalDetails";var AVq="WarningDataSync";
var AwO="WarningFactory";var ArJ="WarningResetAnimalData";var Zs="WarningRestart";
var ArK="WarningAutoAction";var AVr="WarningAutoActionNotApplicable";var AVs="WarningNoMenuItem";
var AVt="WarningEnterDemoMode";var AF9="NoAnimalsRegistered";var AVu="MaxNumAnimalsReached";
var AF_="MaxNumRatingsReached";var AVv="MaxNumCalfDeregistrationsReached";var AVw=
"ScanInTransponder";var AVx="WarningScanOverwriteNaisId";var ArL="EarTagNumberTooShort";
var AVy="NoValidCountryCode";var AVz="WarningOutdatedAnimalWeight";var AF$="WarningOutdatedAnimalWeights";
var AVA="WarningWeightEvaluationSingular";var AVB="WarningWeightEvaluationPlural";
var AVC="ScanError";var AVD="ScanNotFound";var AbU="ScannedAnimalNotFound";var AVE=
"ScannedTransponderNotFound";var AVF="AnimalNotFound";var AVG="SuccessUnregister";
var AVH="SuccessUnregisterPerished";var AGa="SuccessCreationNewAnimal";var AVI="SuccessCreationNewAnimals";
var AVJ="AnimalCreationInProgress";var AVK="EvaluationInProgress";var AVL="DataSyncInProgress";
var AVM="AddedToAlarm";var AVN="RemovedFromAlarm";var AGb="AddedToWatch";var AVO=
"RemovedFromWatch";var AVP="AddedToDryOff";var AVQ="RemovedFromDryOff";var AGc="AnimalIdAlreadyExists";
var AGd="AnimalIdAlreadyExistsContinuable";var AVR="MissingAnimalId";var AVS="MissingAnimalIdMother";
var AVT="MissingEartagNumber";var AVU="MissingTransponderId";var QZ="TransponderAlreadyRegistered";
var ArM="TransponderAlreadyRegisteredContinuable";var AGe="HelpAnimalInfoRating";
var AGf="CannotReassignTransponder";var Ano="CannotReassignNaisId";var Anp="WarningResetToDefaultValue";
var AwP="WarningResetThresholds";var AVV="WarningResetTempThresholds";var AGg="UpdateFirmware";
var AVW="UpdateFirmwareBatteryLow";var AVX="ConfirmFirmwareUpdated";var AVY="ConfirmBootloaderUpdated";
var AVZ="QuestionAddAnotherCalfMultiples";var AV0="RemovedAllBirthNoticesPending";
var AV1="RemovedAllPurchasedNoticePending";var AV2="RemovedFromBirthNoticePending";
var AV3="RemovedFromPurchasedNoticePending";var AV4="SuccessClearAnimalLoss";var
AV5="RemovedAnimalBirth";var AV6="RemovedAnimalPurchased";var AV7="WarningNoActionsForAnimalLoss";
var AV8="SuccessLinkTransponder";var AV9="SuccessUnlinkTransponder";var AV_="SuccessLinkNaisId";
var AV$="WarningDataExportHitBirthFailed";var AWa="SuccessDataExportHitBirth";var
Anq="SuccessDataExportHitBirthDownload";var AGh="WarningDataExportHitPurchasedFailed";
var AWb="SuccessDataExportHitPurchased";var AGi="SuccessDataExportHitPurchasedDownload";
var AGj="WarningDataExportAnimalsFailed";var Zt="SuccessDataExportAnimalsRatings";
var AGk="SuccessDataExportAnimalsDownload";var AWc="WarningNoPremisesID";var AGl=
"WarningNoFlashDrivePresent";var AWd="WarningNoBackupPathPresent";var AwQ="WarningNoBackupFilePresent";
var AWe="DemoFunctionNotAvailable";var AWf="WarningImpreciseTimeSetting";var AwR=
"ConfirmationRestoreBackup";var AWg="WarningParsedDateInFutureInvalid";var AWh="WarningParsingDateFailed";
var AWi="WarningParsingNaisIdFailed";var AGm="AnimalId";var Anr="FarmId";var AGn=
"GroupId";var AWj="PersonId";var AGo="Unhandled transponder type: ";var AGp="FDX";
var Akn="HDX";var AWk="HDX (Urban)";var Ans="Unhandled transponder protocol: ";var
AWl="Illegal RatingMode: ";var AGq="Unhandled mass unit: ";var AGr="Max array size is 10";
var AGs="Index out of bounds";var AWm="ERROR: Received more integers than expected!";
var AwS="Unhandled double scan action :";var AWn="Illegal WeightRecordingMode: ";
var AWo="Illegal WeightRecordingScope: ";var AWp="AnimalData";var AWq="Rating";var
AWr="Temperature";var AWs="Weight";var AWt="Alarm infos";var AWu="Control infos";
var AWv="Watch infos";var AWw="Fresh cow infos";var AWx="No transponder infos";var
AWy="Dry cow info";var AWz="No nais id infos";var AWA="Registrations infos";var AGt=
"Unhandled animal list content:";var Zu="Illegal AutoRegistrationMode: ";var AWB=
"Illegal FactoryResetScope: ";var Ahf="??";var AWC="Illegal EaseOfDelivery: ";var
AWD="Illegal Whereabouts: ";var AWE="Illegal breed: ";var AWF="Unisex";var AWG="Illegal animalIdGenerationMethod: ";
var AWH="Ascending";var ArN="Descending";var ArO="Illegal directionOfCountingName: ";
var Ant="Unhandled direction of counting: ";var Ahg="Unhandled German state: ";var
AwT="SH";var Anu="HH";var AWI="NI";var AWJ="HB";var AWK="NW";var AWL="HE";var AWM=
"RP";var AWN="BW";var AWO="BY";var AWP="SL";var AWQ="BB";var AWR="MV";var AWS="SN";
var AWT="ST";var AWU="TH";var AWV="One Range Male Female";var AwU="Two Ranges Male Female";
var AGu="Illegal EartagAssignmentMode: ";var AwV="Unhandled code set value ";var
ArP="Implement in derived class";var AWW="Illegal HIT-Code: ";var AWX="Illegal ReasonOfLeaving: ";
var AGv="Illegal code: ";var AGw="Undefined";var AWY="Illegal DeviceComponent: ";
var AWZ="Unhandled Device::MotherSelectionFilterMode: ";var AW0="Illegal Device::TimespanDays: ";
var AW1="Not connected";var AW2="Host";var AW3="Device";var AW4="Device CDC";var
AW5="Host MSC";var AGx="Host HID";var AW6="Host CDC";var AW7="Illegal animalIdAutoGenerationMethod: ";
var AW8="Unhandled month: ";var AW9="Illegal transponderAssignmentIdChangeMethod: ";
var AW_="Unhandled animal table field: ";var AW$="Unhandled data export destination: ";
var AXa="Unhandled list view scope: ";
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
B8:null,B5:null,C0:function(AL){if(!AL)return;var Av=this.B8;while(!!Av){if(Av===
AL)throw new Error(B$);Av=Av.Af;}AL.AG=this.B5;if(!!this.B5)this.B5.Af=AL;this.B5=
AL;if(!this.B8)this.B8=AL;},AMx:function(){return this.B8;},AMB:function(A_m){if(
!!A_m)return A_m.Af;return null;},D0:function(AG6,EE){var Av=this.B8;while(!!Av){
if(Av.ET===AG6){if(EE===1)return Av;else if(Av.Operator===EE)return Av;}Av=Av.Af;
}return null;},QF:function(AL){var Av=this.B8;while(!!Av){if(Av===AL){if(!!Av.AG
)Av.AG.Af=Av.Af;if(!!Av.Af)Av.Af.AG=Av.AG;if(this.B8===Av)this.B8=Av.Af;if(this.
B5===Av)this.B5=Av.AG;Av.Af=null;Av.AG=null;return;}Av=Av.Af;}},Gt:function(){var
Bb=A._NewObject(C.Filter,0);var Av=this.B8;while(!!Av){Bb.C0(Av.Adj());Av=Av.Af;
}return Bb;},_Init:function(aArg){this.__proto__=C.Filter;A.hJ++;},_Done:function(
){this.__proto__=null;A.hJ--;},_ReInit:function(){},_Mark:function(D){var B;if((
B=this.B8)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.B5)&&(B._cycle!=D))B._Mark(
B._cycle=D);if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:
null,_className:"Device::Filter"};C.FilterCriterion={Af:null,AG:null,ET:-1,Operator:
1,AaS:false,Adj:function(){return null;},Gt:function(AL){if(!AL)return;this.ET=AL.
ET;this.Operator=AL.Operator;this.AaS=AL.AaS;},_Init:function(aArg){this.__proto__=
C.FilterCriterion;A.hJ++;},_Done:function(){this.__proto__=null;A.hJ--;},_ReInit:
function(){},_Mark:function(D){var B;if((B=this.Af)&&(B._cycle!=D))B._Mark(B._cycle=
D);if((B=this.AG)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.I)&&(B._cycle!=D
))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:"Device::FilterCriterion"
};C.Int32FilterCriterion={A4:0,Adj:function(){var Av=A._NewObject(C.Int32FilterCriterion
,0);Av.Gt(this);return Av;},Gt:function(AL){C.FilterCriterion.Gt.call(this,AL);var
Av=(C.Int32FilterCriterion.isPrototypeOf(AL)?AL:null);if(!!Av)this.A4=Av.A4;},Initialize:
function(AX,EE,A1,Sz){this.ET=AX;this.Operator=EE;this.A4=A1;this.AaS=Sz;return this;
},_Init:function(aArg){C.FilterCriterion._Init.call(this,aArg);this.__proto__=C.
Int32FilterCriterion;},_className:"Device::Int32FilterCriterion"};C.DeviceClass={
ACo:0,ACn:0,Aux:0,YO:0,PD:null,R3:null,Qu:null,Sj:null,Rt:null,Ao:null,Bq:null,AfH:
null,AmR:null,Pa:null,As$:A.jm,AutoActions:A.jm,AzT:A.jm,AEY:A.jm,AEZ:A.jm,AgW:A.
jm,AFg:A.jm,AFh:A.jm,AzU:A.jm,AFf:A.jm,AFj:A.jm,AzN:A.jm,AzO:A.jm,Aab:100,Kj:0,AKS:
75,Zd:3600,ARB:0,FQ:5,Fx:0,IK:50000,P8:0,AEb:0,Aiv:0,ApI:0,ApH:0,APx:1,APw:1,Ai8:
0,APy:1,Av8:0,AeD:0,Apx:10,ASg:5,ACf:60,Aus:0,WhereAbouts:0,U4:0,Ag5:0,Av2:3,AAQ:
0,AlB:0,AfJ:1,Ake:0,Aa6:0,Apb:0,APK:12,ALK:11,Breed:0,EartagNrAssignmentMode:0,Atz:
0,AAJ:0,AAI:0,Ia:5,AzM:2,Apd:0,APP:8,AMo:2,AS1:0,D3:0,AJ2:0,JD:0,Gender:2,WeightRecordingScope:
1,WeightRecordingMode:1,AnimalType:0,MassUnit:0,AutoRegistrationMode:0,RatingMode:
0,SyncState:0,OverlayMenu:0,TemperatureUnit:0,Language:0,MeasureState:0,ScanState:
0,Ku:3,AdN:true,APj:false,Alw:true,AlX:false,AlT:true,Hv:false,ASJ:false,AlU:false
,ASZ:false,Arp:false,ACm:false,AlI:false,UpdateActiveScreen:function(AI){if(this.
Ku===AI)return;this.Ku=AI;A.aat([this,this.ACA,this.A9C],0);},YC:function(E){if(
this.K&&this.K.YC)return this.K.YC.apply(this,arguments);else return C.DeviceClass.
BqG.apply(this,arguments);},BqG:function(E){},A9C:function(An){this.YC(An);},UpdateBatteryChargeState:
function(AI){if(this.Aab===AI)return;this.Aab=AI;A.aat([this,this.Auz,this.Aw1],
0);},AuW:function(E){if(this.K&&this.K.AuW)return this.K.AuW.apply(this,arguments
);else return C.DeviceClass.BqS.apply(this,arguments);},BqS:function(E){A.aa8("%s"
,BH);},Aw1:function(An){this.AuW(An);},UpdateChargeActive:function(AI){if(this.AlI===
AI)return;this.AlI=AI;A.aat([this,this.AuC,this.Aw2],0);},AC0:function(E){if(this.
K&&this.K.AC0)return this.K.AC0.apply(this,arguments);else return C.DeviceClass.
BqY.apply(this,arguments);},BqY:function(E){A.aa8("%s",EV);},Aw2:function(An){this.
AC0(An);},UpdateScanState:function(AI){var B;if(this.ScanState===AI)return;this.
ScanState=AI;A.aat([this,this.AQn,this.AXF],0);A._GetAutoObject(C.Helper).BwP(this
);},AqC:function(E){if(this.K&&this.K.AqC)return this.K.AqC.apply(this,arguments
);else return C.DeviceClass.BrC.apply(this,arguments);},BrC:function(E){A.aa8("%s"
,GT);},AXF:function(An){this.AqC(An);},UpdateMeasureState:function(AI){if(this.MeasureState===
AI)return;this.MeasureState=AI;A.aat([this,this.ACG,this.AGN],0);},Avi:function(
E){if(this.K&&this.K.Avi)return this.K.Avi.apply(this,arguments);else return C.DeviceClass.
Brk.apply(this,arguments);},Brk:function(E){A.aa8("%s",Jt);},AGN:function(An){this.
Avi(An);},UpdateTempValue:function(AI){if(this.Kj===AI)return;this.Kj=AI;A.aat([
this,this.ACJ,this.AGP],0);},Avs:function(E){if(this.K&&this.K.Avs)return this.K.
Avs.apply(this,arguments);else return C.DeviceClass.BrI.apply(this,arguments);},
BrI:function(E){A.aa8("%s",IL);},AGP:function(An){this.Avs(An);},AmG:function(E){
if(this.K&&this.K.AmG)return this.K.AmG.apply(this,arguments);else return C.DeviceClass.
Brf.apply(this,arguments);},Brf:function(E){},A9R:function(An){this.AmG(An);},Avt:
function(E){if(this.K&&this.K.Avt)return this.K.Avt.apply(this,arguments);else return C.
DeviceClass.BrJ.apply(this,arguments);},BrJ:function(E){},ArT:function(An){this.
Avt(An);},ACY:function(E){if(this.K&&this.K.ACY)return this.K.ACY.apply(this,arguments
);else return C.DeviceClass.BqX.apply(this,arguments);},BqX:function(E){},A9K:function(
An){this.ACY(An);},ADu:function(E){if(this.K&&this.K.ADu)return this.K.ADu.apply(
this,arguments);else return C.DeviceClass.Brm.apply(this,arguments);},Brm:function(
E){},AXy:function(An){this.ADu(An);},UpdateMonitoring:function(AI){if(this.ACm===
AI)return;this.ACm=AI;A.aat([this,this.AQd,this.AXy],0);},UpdateDataTable:function(
A_n){var B;switch(A_n){case 0:A.ow([B=this.Ao,B.Ajw],this);break;case 1:A.ow([B=
this.Bq,B.Ajw],this);break;case 3:A.ow([B=this.AfH,B.Ajw],this);break;case 4:A.ow([
B=this.Pa,B.Ajw],this);break;case 2:A.aa8("%s",OK);break;default:A.aa8("%s%e",PJ
,A_n);}},Av1:function(){if(this.K&&this.K.Av1)return this.K.Av1.apply(this,arguments
);else return C.DeviceClass.Bsb.apply(this,arguments);},Bsb:function(){},AgZ:function(
){if(this.K&&this.K.AgZ)return this.K.AgZ.apply(this,arguments);else return C.DeviceClass.
Bse.apply(this,arguments);},Bse:function(){},Aet:function(){if(this.K&&this.K.Aet
)return this.K.Aet.apply(this,arguments);else return C.DeviceClass.Bsc.apply(this
,arguments);},Bsc:function(){},Am1:function(){if(this.K&&this.K.Am1)return this.
K.Am1.apply(this,arguments);else return C.DeviceClass.Bsf.apply(this,arguments);
},Bsf:function(){},UpdateLanguage:function(AI){if(this.Language===AI)return;this.
Language=AI;switch(AI){case 14:A._SetLanguage(1);break;case 13:A._SetLanguage(2);
break;case 6:A._SetLanguage(3);break;case 11:A._SetLanguage(4);break;case 0:A._SetLanguage(
0);break;case 10:A._SetLanguage(5);break;case 12:A._SetLanguage(6);break;case 5:
A._SetLanguage(7);break;case 3:A._SetLanguage(8);break;case 1:A._SetLanguage(9);
break;case 8:A._SetLanguage(10);break;case 4:A._SetLanguage(11);break;case 15:A.
_SetLanguage(13);break;case 9:A._SetLanguage(15);break;case 2:A._SetLanguage(16);
break;case 7:A._SetLanguage(17);break;case 16:A._SetLanguage(18);break;default:A.
_SetLanguage(0);}A.aat([this,this.A5M,this.A9R],0);},UpdateTemperatureUnit:function(
AI){if(this.TemperatureUnit===AI)return;this.TemperatureUnit=AI;A.aat([this,this.
Aqb,this.ArT],0);},UpdateBrightness:function(AI){if(this.AKS===AI)return;this.AKS=
AI;A.aat([this,this.A5B,this.A9K],0);},SetSystemTime:function(Ahq){if(this.K&&this.
K.SetSystemTime)return this.K.SetSystemTime.apply(this,arguments);else return C.
DeviceClass.Br$.apply(this,arguments);},Br$:function(Ahq){},AvX:function(){if(this.
K&&this.K.AvX)return this.K.AvX.apply(this,arguments);else return C.DeviceClass.
A9s.apply(this,arguments);},A9s:function(){},AEo:function(){if(this.K&&this.K.AEo
)return this.K.AEo.apply(this,arguments);else return C.DeviceClass.A9q.apply(this
,arguments);},A9q:function(){},BkS:function(){},UpdateOverlayMenu:function(AI){if(
this.OverlayMenu===AI)return;this.OverlayMenu=AI;A.aat([this,this.AuO,this.Aw_],
0);},Cm:function(E){if(this.K&&this.K.Cm)return this.K.Cm.apply(this,arguments);
else return C.DeviceClass.Brx.apply(this,arguments);},Brx:function(E){},Aw_:function(
An){this.Cm(An);},Avy:function(E){if(this.K&&this.K.Avy)return this.K.Avy.apply(
this,arguments);else return C.DeviceClass.BrS.apply(this,arguments);},BrS:function(
E){},A90:function(An){this.Avy(An);},UpdateUnderTemp:function(AI){if(this.Zd===AI
)return;this.Zd=AI;A.aat([this,this.A5_,this.A90],0);},UpdateSyncState:function(
AI){if(this.SyncState===AI)return;this.SyncState=AI;A.aat([this,this.AQp,this.AXH
],0);},Abm:function(E){if(this.K&&this.K.Abm)return this.K.Abm.apply(this,arguments
);else return C.DeviceClass.BrH.apply(this,arguments);},BrH:function(E){A.aa8("%s"
,N1);},AXH:function(An){this.Abm(An);},ABa:function(){if(this.K&&this.K.ABa)return this.
K.ABa.apply(this,arguments);else return C.DeviceClass.Bqy.apply(this,arguments);
},Bqy:function(){return A.jm;},UpdatePopup:function(Kn,AYo,AYk,AYr){this.A5(Kn,AYo
,AYk,AYr,[this,this.Bwx]);},PopupStateChanged:function(Kn,Ae){if(this.K&&this.K.
PopupStateChanged)return this.K.PopupStateChanged.apply(this,arguments);else return C.
DeviceClass.Br4.apply(this,arguments);},Br4:function(Kn,Ae){},ADX:function(E){if(
this.K&&this.K.ADX)return this.K.ADX.apply(this,arguments);else return C.DeviceClass.
BrU.apply(this,arguments);},BrU:function(E){},A91:function(An){this.ADX(An);},UpdateVibrationOnKeypressEnabled:
function(AI){if(this.Arp===AI)return;this.Arp=AI;A.aat([this,this.A5$,this.A91],
0);},Ad9:function(E){if(this.K&&this.K.Ad9)return this.K.Ad9.apply(this,arguments
);else return C.DeviceClass.BrT.apply(this,arguments);},BrT:function(E){},AGQ:function(
An){this.Ad9(An);},UpdateVibrationOn:function(A_P){if(this.ASZ===A_P)return;this.
ASZ=A_P;A.aat([this,this.ACK,this.AGQ],0);},A5:function(Kn,AYo,AYk,AYr,BtG){var Afx=
A._NewObject(C.PopupContext,0);Afx.Id=Kn;Afx.Show=AYo;Afx.AjR=AYk;Afx.Aka=AYr;Afx.
AD6=BtG;this.AmR.Trigger(Afx,false);},Bwx:function(H){var Ar=(C.PopupContext.isPrototypeOf(
H)?H:null);if(!!Ar)this.PopupStateChanged(Ar.Id,Ar.PopupState);},Avp:function(E){
if(this.K&&this.K.Avp)return this.K.Avp.apply(this,arguments);else return C.DeviceClass.
BrB.apply(this,arguments);},BrB:function(E){},AXE:function(An){this.Avp(An);},UpdateRatingMode:
function(AI){if(this.RatingMode===AI)return;this.RatingMode=AI;A.aat([this,this.
AQm,this.AXE],0);},Ad1:function(E){if(this.K&&this.K.Ad1)return this.K.Ad1.apply(
this,arguments);else return C.DeviceClass.Bq9.apply(this,arguments);},Bq9:function(
E){},ArS:function(An){this.Ad1(An);},UpdateFlashLightOn:function(A_v){if(this.AlU===
A_v)return;this.AlU=A_v;A.aat([this,this.Ap_,this.ArS],0);},VO:function(E){if(this.
K&&this.K.VO)return this.K.VO.apply(this,arguments);else return C.DeviceClass.BrM.
apply(this,arguments);},BrM:function(E){},AXI:function(An){this.VO(An);},UpdateTopLightOn:
function(A_K){if(this.ASJ===A_K)return;this.ASJ=A_K;A.aat([this,this.AQr,this.AXI
],0);},YJ:function(E){if(this.K&&this.K.YJ)return this.K.YJ.apply(this,arguments
);else return C.DeviceClass.BrA.apply(this,arguments);},BrA:function(E){},Bsv:function(
An){this.YJ(An);},UpdateRGBTopLight:function(A_F){if(this.ARB===A_F)return;this.
ARB=A_F;A.aat([this,this.BhH,this.Bsv],0);},AuV:function(E){if(this.K&&this.K.AuV
)return this.K.AuV.apply(this,arguments);else return C.DeviceClass.BqR.apply(this
,arguments);},BqR:function(E){},Bsn:function(An){this.AuV(An);},UpdateAutoRegistrationMode:
function(A_j){if(this.AutoRegistrationMode===A_j)return;this.AutoRegistrationMode=
A_j;A.aat([this,this.Bg8,this.Bsn],0);},AqD:function(E){if(this.K&&this.K.AqD)return this.
K.AqD.apply(this,arguments);else return C.DeviceClass.BrD.apply(this,arguments);
},BrD:function(E){A.aa8("%s",CJ);},AXG:function(An){this.AqD(An);},UpdateScanTransponder:
function(Kn,A_N,A_M){if(((this.PD.Id===Kn)&&(this.PD.TransponderType===A_N))&&(this.
PD.TransponderProtocol===A_M))return;this.PD.OnSetId(Kn);this.PD.ARe(A_N);this.PD.
ARd(A_M);A.aat([this,this.AQo,this.AXG],0);},Pz:function(E){if(this.K&&this.K.Pz
)return this.K.Pz.apply(this,arguments);else return C.DeviceClass.Bq1.apply(this
,arguments);},Bq1:function(E){},AbV:function(An){this.Pz(An);},UpdateDigitsID:function(
A_r){if(this.FQ===A_r)return;this.FQ=A_r;A.aat([this,this.Aa_,this.AbV],0);},Qz:
function(E){if(this.K&&this.K.Qz)return this.K.Qz.apply(this,arguments);else return C.
DeviceClass.Brw.apply(this,arguments);},Brw:function(E){},AbW:function(An){this.
Qz(An);},UpdateOffsetID:function(A_C){if(this.Fx===A_C)return;this.Fx=A_C;A.aat([
this,this.Aa$,this.AbW],0);},AD1:function(E){if(this.K&&this.K.AD1)return this.K.
AD1.apply(this,arguments);else return C.DeviceClass.Br1.apply(this,arguments);},
Br1:function(E){A.aa8("%s",Fn);},AGR:function(An){this.AD1(An);},UpdateWeightValue:
function(AI){if(this.IK===AI)return;this.IK=AI;A.aat([this,this.ACL,this.AGR],0);
},Avg:function(E){if(this.K&&this.K.Avg)return this.K.Avg.apply(this,arguments);
else return C.DeviceClass.Bri.apply(this,arguments);},Bri:function(E){},AXx:function(
An){this.Avg(An);},UpdateMassUnit:function(AI){if(this.MassUnit===AI)return;this.
MassUnit=AI;A.aat([this,this.AQc,this.AXx],0);},Aqe:function(E){if(this.K&&this.
K.Aqe)return this.K.Aqe.apply(this,arguments);else return C.DeviceClass.A9m.apply(
this,arguments);},A9m:function(E){},A9z:function(An){this.Aqe(An);},Aqf:function(
E){if(this.K&&this.K.Aqf)return this.K.Aqf.apply(this,arguments);else return C.DeviceClass.
A9n.apply(this,arguments);},A9n:function(E){},AXq:function(An){this.Aqf(An);},UpdateActiveActions:
function(AI){if(this.P8===AI)return;this.P8=AI;A.aat([this,this.A5l,this.A9z],0);
},UpdateActiveActionsOrder:function(AI){if(this.As$===AI)return;this.As$=AI;A.aat([
this,this.AP0,this.AXq],0);},Abc:function(E){if(this.K&&this.K.Abc)return this.K.
Abc.apply(this,arguments);else return C.DeviceClass.A9o.apply(this,arguments);},
A9o:function(E){},A9I:function(An){this.Abc(An);},UpdateAutoActions:function(AI){
if(this.AutoActions===AI)return;this.AutoActions=AI;A.aat([this,this.A5x,this.A9I
],0);},AEP:function(){if(this.K&&this.K.AEP)return this.K.AEP.apply(this,arguments
);else return C.DeviceClass.Bsd.apply(this,arguments);},Bsd:function(){},Arf:function(
){if(this.K&&this.K.Arf)return this.K.Arf.apply(this,arguments);else return C.DeviceClass.
Bsh.apply(this,arguments);},Bsh:function(){},DW:function(E){if(this.K&&this.K.DW
)return this.K.DW.apply(this,arguments);else return C.DeviceClass.BqO.apply(this
,arguments);},BqO:function(E){},Bsm:function(An){this.DW(An);},UpdateAnimalType:
function(Ee){if(this.AnimalType===Ee)return;this.AnimalType=Ee;A.aat([this,this.
Py,this.Bsm],0);},Avz:function(E){if(this.K&&this.K.Avz)return this.K.Avz.apply(
this,arguments);else return C.DeviceClass.BrZ.apply(this,arguments);},BrZ:function(
E){},A96:function(An){this.Avz(An);},UpdateWeightRecordingMode:function(A_R){if(
this.WeightRecordingMode===A_R)return;this.WeightRecordingMode=A_R;A.aat([this,this.
A6h,this.A96],0);},ADC:function(E){if(this.K&&this.K.ADC)return this.K.ADC.apply(
this,arguments);else return C.DeviceClass.Bry.apply(this,arguments);},Bry:function(
E){A.aa8("%s",LW);},AXC:function(An){this.ADC(An);},UpdatePredictedTempValue:function(
AI){if(this.AEb===AI)return;this.AEb=AI;A.aat([this,this.AQj,this.AXC],0);},Se:function(
L1){if(this.K&&this.K.Se)return this.K.Se.apply(this,arguments);else return C.DeviceClass.
Br_.apply(this,arguments);},Br_:function(L1){},AC6:function(E){if(this.K&&this.K.
AC6)return this.K.AC6.apply(this,arguments);else return C.DeviceClass.Bq0.apply(
this,arguments);},Bq0:function(E){},AGL:function(An){this.AC6(An);},UpdateDemoMode:
function(AI){if(this.Hv===AI)return;this.Hv=AI;A.aat([this,this.ACE,this.AGL],0);
},ACP:function(E){if(this.K&&this.K.ACP)return this.K.ACP.apply(this,arguments);
else return C.DeviceClass.BqH.apply(this,arguments);},BqH:function(E){},A9D:function(
An){this.ACP(An);},UpdateAgeRegistration:function(A_B){if(this.Aiv===A_B)return;
this.Aiv=A_B;A.aat([this,this.A5q,this.A9D],0);},AvA:function(E){if(this.K&&this.
K.AvA)return this.K.AvA.apply(this,arguments);else return C.DeviceClass.Br0.apply(
this,arguments);},Br0:function(E){},A97:function(An){this.AvA(An);},UpdateWeightRecordingScope:
function(A_G){if(this.WeightRecordingScope===A_G)return;this.WeightRecordingScope=
A_G;A.aat([this,this.A6i,this.A97],0);},JM:function(E){if(this.K&&this.K.JM)return this.
K.JM.apply(this,arguments);else return C.DeviceClass.Brb.apply(this,arguments);}
,Brb:function(E){},AXw:function(An){this.JM(An);},UpdateGender:function(LZ){if(this.
Gender===LZ)return;this.Gender=LZ;A.aat([this,this.VJ,this.AXw],0);},Aqu:function(
E){if(this.K&&this.K.Aqu)return this.K.Aqu.apply(this,arguments);else return C.DeviceClass.
Brd.apply(this,arguments);},Brd:function(E){},Aw6:function(An){this.Aqu(An);},UpdateIDLastUsedMale:
function(Q0){if(this.ApI===Q0)return;this.ApI=Q0;A.aat([this,this.AuI,this.Aw6],
0);},Aqt:function(E){if(this.K&&this.K.Aqt)return this.K.Aqt.apply(this,arguments
);else return C.DeviceClass.Brc.apply(this,arguments);},Brc:function(E){},Aw5:function(
An){this.Aqt(An);},UpdateIDLastUsedFemale:function(Q0){if(this.ApH===Q0)return;this.
ApH=Q0;A.aat([this,this.AuH,this.Aw5],0);},Abb:function(E){if(this.K&&this.K.Abb
)return this.K.Abb.apply(this,arguments);else return C.DeviceClass.BqM.apply(this
,arguments);},BqM:function(E){},AGJ:function(An){this.Abb(An);},UpdateAnimalListContent:
function(AI){if(this.JD===AI)return;this.JD=AI;A.aat([this,this.ACB,this.AGJ],0);
},ACR:function(E){if(this.K&&this.K.ACR)return this.K.ACR.apply(this,arguments);
else return C.DeviceClass.BqI.apply(this,arguments);},BqI:function(E){},A9E:function(
An){this.ACR(An);},UpdateAlarmListAction:function(AI){if(this.AJ2===AI)return;this.
AJ2=AI;A.aat([this,this.A5s,this.A9E],0);},AC9:function(E){if(this.K&&this.K.AC9
)return this.K.AC9.apply(this,arguments);else return C.DeviceClass.Bq8.apply(this
,arguments);},Bq8:function(E){},A9N:function(An){this.AC9(An);},UpdateFlashLightInMeasureState:
function(A_w){if(this.AlT===A_w)return;this.AlT=A_w;A.aat([this,this.A5E,this.A9N
],0);},AdZ:function(E){if(this.K&&this.K.AdZ)return this.K.AdZ.apply(this,arguments
);else return C.DeviceClass.BqL.apply(this,arguments);},BqL:function(E){},AXs:function(
An){this.AdZ(An);},UpdateAnimalInfoContent:function(AI){if(this.D3===AI)return;this.
D3=AI;A.aat([this,this.AP2,this.AXs],0);},AD0:function(E){if(this.K&&this.K.AD0)
return this.K.AD0.apply(this,arguments);else return C.DeviceClass.BrV.apply(this
,arguments);},BrV:function(E){},A92:function(An){this.AD0(An);},UpdateWatchListAction:
function(AI){if(this.AS1===AI)return;this.AS1=AI;A.aat([this,this.A6d,this.A92],
0);},AC_:function(E){if(this.K&&this.K.AC_)return this.K.AC_.apply(this,arguments
);else return C.DeviceClass.Bq_.apply(this,arguments);},Bq_:function(E){},A9P:function(
An){this.AC_(An);},UpdateFreshCowListAction:function(AI){if(this.AMo===AI)return;
this.AMo=AI;A.aat([this,this.A5G,this.A9P],0);},AqY:function(H){if(this.K&&this.
K.AqY)return this.K.AqY.apply(this,arguments);else return C.DeviceClass.Br5.apply(
this,arguments);},Br5:function(H){},BBU:function(s){this.AqY(s);},Aq0:function(H
){if(this.K&&this.K.Aq0)return this.K.Aq0.apply(this,arguments);else return C.DeviceClass.
Br7.apply(this,arguments);},Br7:function(H){},BBW:function(s){this.Aq0(s);},AuT:
function(E){if(this.K&&this.K.AuT)return this.K.AuT.apply(this,arguments);else return C.
DeviceClass.BqP.apply(this,arguments);},BqP:function(E){},A9G:function(An){this.
AuT(An);},AqE:function(E){if(this.K&&this.K.AqE)return this.K.AqE.apply(this,arguments
);else return C.DeviceClass.BrK.apply(this,arguments);},BrK:function(E){},A9X:function(
An){this.AqE(An);},AqF:function(E){if(this.K&&this.K.AqF)return this.K.AqF.apply(
this,arguments);else return C.DeviceClass.BrL.apply(this,arguments);},BrL:function(
E){},A9Y:function(An){this.AqF(An);},Aq2:function(H){if(this.K&&this.K.Aq2)return this.
K.Aq2.apply(this,arguments);else return C.DeviceClass.Br8.apply(this,arguments);
},Br8:function(H){},BBX:function(s){this.Aq2(s);},UpdateTemperaturesLowString:function(
AI){if(this.AEZ===AI)return;this.AEZ=AI;A.aat([this,this.A56,this.A9Y],0);},UpdateTemperaturesHighString:
function(AI){if(this.AEY===AI)return;this.AEY=AI;A.aat([this,this.A55,this.A9X],
0);},UpdateAnimalTypesString:function(AI){if(this.AzT===AI)return;this.AzT=AI;A.
aat([this,this.A5v,this.A9G],0);},ADx:function(E){if(this.K&&this.K.ADx)return this.
K.ADx.apply(this,arguments);else return C.DeviceClass.Brv.apply(this,arguments);
},Brv:function(E){},AXA:function(An){this.ADx(An);},UpdateNoTransponderListAction:
function(AI){if(this.APP===AI)return;this.APP=AI;A.aat([this,this.AQg,this.AXA],
0);},Avb:function(E){if(this.K&&this.K.Avb)return this.K.Avb.apply(this,arguments
);else return C.DeviceClass.Bra.apply(this,arguments);},Bra:function(E){},Bsr:function(
An){this.Avb(An);},UpdateFreshCowsHideMeasured:function(AI){if(this.AlX===AI)return;
this.AlX=AI;A.aat([this,this.Bhp,this.Bsr],0);},Aqy:function(E){if(this.K&&this.
K.Aqy)return this.K.Aqy.apply(this,arguments);else return C.DeviceClass.Brs.apply(
this,arguments);},Brs:function(E){},A9U:function(An){this.Aqy(An);},UpdateNaisIdLastUsedMale:
function(Wu){if(this.ACo===Wu)return;this.ACo=Wu;A.aat([this,this.A5T,this.A9U],
0);},Aqx:function(E){if(this.K&&this.K.Aqx)return this.K.Aqx.apply(this,arguments
);else return C.DeviceClass.Brr.apply(this,arguments);},Brr:function(E){},A9T:function(
An){this.Aqx(An);},UpdateNaisIdLastUsedFemale:function(Wu){if(this.ACn===Wu)return;
this.ACn=Wu;A.aat([this,this.A5S,this.A9T],0);},Avl:function(E){if(this.K&&this.
K.Avl)return this.K.Avl.apply(this,arguments);else return C.DeviceClass.Brp.apply(
this,arguments);},Brp:function(E){},Aw8:function(An){this.Avl(An);},UpdateNaisIdIncrementMale:
function(Akw){if(this.APx===Akw)return;this.APx=Akw;A.aat([this,this.AuL,this.Aw8
],0);},Avk:function(E){if(this.K&&this.K.Avk)return this.K.Avk.apply(this,arguments
);else return C.DeviceClass.Bro.apply(this,arguments);},Bro:function(E){},Aw7:function(
An){this.Avk(An);},UpdateNaisIdIncrementFemale:function(Akw){if(this.APw===Akw)return;
this.APw=Akw;A.aat([this,this.AuK,this.Aw7],0);},UpdateFirmware:function(){if(this.
K&&this.K.UpdateFirmware)return this.K.UpdateFirmware.apply(this,arguments);else
return C.DeviceClass.A9t.apply(this,arguments);},A9t:function(){},AmC:function(E
){if(this.K&&this.K.AmC)return this.K.AmC.apply(this,arguments);else return C.DeviceClass.
BqU.apply(this,arguments);},BqU:function(E){},A9J:function(An){this.AmC(An);},UpdateBootloaderMessage:
function(AI){if(this.Apd===AI)return;this.Apd=AI;A.aat([this,this.A5A,this.A9J],
0);},ACN:function(E){if(this.K&&this.K.ACN)return this.K.ACN.apply(this,arguments
);else return C.DeviceClass.BqC.apply(this,arguments);},BqC:function(E){},A9y:function(
An){this.ACN(An);},UpdateActionListAction:function(AI){if(this.AzM===AI)return;this.
AzM=AI;A.aat([this,this.A5k,this.A9y],0);},AuR:function(E){if(this.K&&this.K.AuR
)return this.K.AuR.apply(this,arguments);else return C.DeviceClass.BqD.apply(this
,arguments);},BqD:function(E){},Bsl:function(An){this.AuR(An);},UpdateActionListHideMeasured:
function(AI){if(this.Alw===AI)return;this.Alw=AI;A.aat([this,this.Bg4,this.Bsl],
0);},TC:function(E){if(this.K&&this.K.TC)return this.K.TC.apply(this,arguments);
else return C.DeviceClass.BqK.apply(this,arguments);},BqK:function(E){},Anw:function(
An){this.TC(An);},UpdateAnimalIdGenerationMethod:function(A_W){if(this.Ia===A_W)
return;this.Ia=A_W;A.aat([this,this.Amt,this.Anw],0);},Au5:function(E){if(this.K&&
this.K.Au5)return this.K.Au5.apply(this,arguments);else return C.DeviceClass.Bq2.
apply(this,arguments);},Bq2:function(E){},AXu:function(An){this.Au5(An);},UpdateDirectionOfCountingFemale:
function(Akp){if(this.AAI===Akp)return;this.AAI=Akp;A.aat([this,this.AP7,this.AXu
],0);},Au6:function(E){if(this.K&&this.K.Au6)return this.K.Au6.apply(this,arguments
);else return C.DeviceClass.Bq3.apply(this,arguments);},Bq3:function(E){},AXv:function(
An){this.Au6(An);},UpdateDirectionOfCountingMale:function(Akp){if(this.AAJ===Akp
)return;this.AAJ=Akp;A.aat([this,this.AP8,this.AXv],0);},Au7:function(E){if(this.
K&&this.K.Au7)return this.K.Au7.apply(this,arguments);else return C.DeviceClass.
Bq4.apply(this,arguments);},Bq4:function(E){},Aw3:function(An){this.Au7(An);},UpdateDirectionOfCountingUnisex:
function(Akp){if(this.Atz===Akp)return;this.Atz=Akp;A.aat([this,this.AuF,this.Aw3
],0);},Aqv:function(E){if(this.K&&this.K.Aqv)return this.K.Aqv.apply(this,arguments
);else return C.DeviceClass.Bre.apply(this,arguments);},Bre:function(E){},Anx:function(
An){this.Aqv(An);},UpdateIDLastUsedUnisex:function(Q0){if(this.Ai8===Q0)return;this.
Ai8=Q0;A.aat([this,this.Amw,this.Anx],0);},Aqz:function(E){if(this.K&&this.K.Aqz
)return this.K.Aqz.apply(this,arguments);else return C.DeviceClass.Brt.apply(this
,arguments);},Brt:function(E){},AXz:function(An){this.Aqz(An);},UpdateNaisIdLastUsedUnisex:
function(Wu){if(this.Aux===Wu)return;this.Aux=Wu;A.aat([this,this.AQe,this.AXz],
0);},Avm:function(E){if(this.K&&this.K.Avm)return this.K.Avm.apply(this,arguments
);else return C.DeviceClass.Brq.apply(this,arguments);},Brq:function(E){},Aw9:function(
An){this.Avm(An);},UpdateNaisIdIncrementUnisex:function(Akw){if(this.APy===Akw)return;
this.APy=Akw;A.aat([this,this.AuM,this.Aw9],0);},AjC:function(E){if(this.K&&this.
K.AjC)return this.K.AjC.apply(this,arguments);else return C.DeviceClass.Bq6.apply(
this,arguments);},Bq6:function(E){},Aw4:function(An){this.AjC(An);},UpdateEartagNrAssignmentMode:
function(Akq){if(this.EartagNrAssignmentMode===Akq)return;this.EartagNrAssignmentMode=
Akq;A.aat([this,this.AuG,this.Aw4],0);},NP:function(E){if(this.K&&this.K.NP)return this.
K.NP.apply(this,arguments);else return C.DeviceClass.BqW.apply(this,arguments);}
,BqW:function(E){},Bsp:function(An){this.NP(An);},UpdateBreed:function(Ab3){if(this.
Breed===Ab3)return;this.Breed=Ab3;A.aat([this,this.AuB,this.Bsp],0);},ADr:function(
E){if(this.K&&this.K.ADr)return this.K.ADr.apply(this,arguments);else return C.DeviceClass.
Brl.apply(this,arguments);},Brl:function(E){},Bst:function(An){this.ADr(An);},UpdateMiddlewareVersions:
function(PO,AYg,AYh,AYn,AX7){this.R3.OnSetTimestamp(PO);this.R3.ADm(AYg);this.R3.
ADt(AYh);this.R3.ADF(AYn);this.R3.AC4(AX7);A.aat([this,this.BhC,this.Bst],0);},ADl:
function(E){if(this.K&&this.K.ADl)return this.K.ADl.apply(this,arguments);else return C.
DeviceClass.Brg.apply(this,arguments);},Brg:function(E){},Bss:function(An){this.
ADl(An);},UpdateMainboardVersions:function(PO,AYe,AYf,AYd,AYt,AYu,AYs){this.Qu.OnSetTimestamp(
PO);this.Qu.ADj(AYe);this.Qu.ADk(AYf);this.Qu.ADi(AYd);this.Qu.ADS(AYt);this.Qu.
ADT(AYu);this.Qu.ADR(AYs);A.aat([this,this.BhA,this.Bss],0);},ADU:function(E){if(
this.K&&this.K.ADU)return this.K.ADU.apply(this,arguments);else return C.DeviceClass.
BrN.apply(this,arguments);},BrN:function(E){},Bsz:function(An){this.ADU(An);},UpdateTorchboardVersions:
function(PO,AYe,AYf,AYd,AYt,AYu,AYs){this.Sj.OnSetTimestamp(PO);this.Sj.ADj(AYe);
this.Sj.ADk(AYf);this.Sj.ADi(AYd);this.Sj.ADS(AYt);this.Sj.ADT(AYu);this.Sj.ADR(
AYs);A.aat([this,this.BhZ,this.Bsz],0);},ACU:function(E){if(this.K&&this.K.ACU)return this.
K.ACU.apply(this,arguments);else return C.DeviceClass.BqV.apply(this,arguments);
},BqV:function(E){},Bso:function(An){this.ACU(An);},UpdateBootloaderVersions:function(
PO,AYg,AYh,AYn,AX7){this.Rt.OnSetTimestamp(PO);this.Rt.ADm(AYg);this.Rt.ADt(AYh);
this.Rt.ADF(AYn);this.Rt.AC4(AX7);A.aat([this,this.Bg_,this.Bso],0);},AC7:function(
E){if(this.K&&this.K.AC7)return this.K.AC7.apply(this,arguments);else return C.DeviceClass.
Bq5.apply(this,arguments);},Bq5:function(E){},A9M:function(An){this.AC7(An);},UpdateDryCowListAction:
function(AI){if(this.ALK===AI)return;this.ALK=AI;A.aat([this,this.A5C,this.A9M],
0);},AHH:function(AX9){if(this.K&&this.K.AHH)return this.K.AHH.apply(this,arguments
);else return C.DeviceClass.BsL.apply(this,arguments);},BsL:function(AX9){return false;
},ADw:function(E){if(this.K&&this.K.ADw)return this.K.ADw.apply(this,arguments);
else return C.DeviceClass.Bru.apply(this,arguments);},Bru:function(E){},A9V:function(
An){this.ADw(An);},UpdateNoNaisIdListAction:function(AI){if(this.APK===AI)return;
this.APK=AI;A.aat([this,this.A5U,this.A9V],0);},ACT:function(E){if(this.K&&this.
K.ACT)return this.K.ACT.apply(this,arguments);else return C.DeviceClass.BqT.apply(
this,arguments);},BqT:function(E){},AGK:function(An){this.ACT(An);},UpdateBirthListView:
function(AI){if(this.Apb===AI)return;this.Apb=AI;A.aat([this,this.ACC,this.AGK],
0);},BatchResetBirthNoticePending:function(){var B4=A._NewObject(C.Animal,0);var
P;var Ah6=0;var Acl=A._GetAutoObject(C.Device).Ao.Filter;var Bb=A._GetAutoObject(
C.Helper).AMu();A._GetAutoObject(C.Device).Ao.Bl(Bb);for(P=0;P<A._GetAutoObject(
C.Device).Ao.Cj();P++){B4.EK(P,A._GetAutoObject(C.Device).Ao);B4.Ad4(false);B4.Cr(
A._GetAutoObject(C.Device).Ao);Ah6++;}A._GetAutoObject(C.Device).Ao.Bl(Acl);return Ah6;
},UpdateTransferProgress:function(AI){if(this.Av8===AI)return;this.Av8=AI;A.aat([
this,this.AQs,this.AXJ],0);},ADV:function(E){if(this.K&&this.K.ADV)return this.K.
ADV.apply(this,arguments);else return C.DeviceClass.BrO.apply(this,arguments);},
BrO:function(E){A.aa8("%s",OL);},AXJ:function(An){this.ADV(An);},UpdateTransferTarget:
function(AI){if(this.AeD===AI)return;this.AeD=AI;A.aat([this,this.A59,this.A9Z],
0);},AqG:function(E){if(this.K&&this.K.AqG)return this.K.AqG.apply(this,arguments
);else return C.DeviceClass.BrP.apply(this,arguments);},BrP:function(E){A.aa8("%s"
,KH);},A9Z:function(An){this.AqG(An);},Are:function(){if(this.K&&this.K.Are)return this.
K.Are.apply(this,arguments);else return C.DeviceClass.Bsg.apply(this,arguments);
},Bsg:function(){},Avo:function(E){if(this.K&&this.K.Avo)return this.K.Avo.apply(
this,arguments);else return C.DeviceClass.Brz.apply(this,arguments);},Brz:function(
E){},AXD:function(An){this.Avo(An);},UpdatePremisesID:function(Q0){if(this.YO===
Q0)return;this.YO=Q0;A.aat([this,this.AQk,this.AXD],0);},Avj:function(E){if(this.
K&&this.K.Avj)return this.K.Avj.apply(this,arguments);else return C.DeviceClass.
Brn.apply(this,arguments);},Brn:function(E){},AGO:function(An){this.Avj(An);},UpdateMotherSelectionDriedOffFilter:
function(AI){if(this.Aa6===AI)return;this.Aa6=AI;A.aat([this,this.ACI,this.AGO],
0);},AC$:function(E){if(this.K&&this.K.AC$)return this.K.AC$.apply(this,arguments
);else return C.DeviceClass.Bq$.apply(this,arguments);},Bq$:function(E){},A9Q:function(
An){this.AC$(An);},UpdateFreshCowSpan:function(AI){if(this.Apx===AI)return;this.
Apx=AI;A.aat([this,this.A5H,this.A9Q],0);},UpdateUSBState:function(A_O){if(this.
Ake===A_O)return;this.Ake=A_O;A.aat([this,this.Aba,this.AbX],0);},ADW:function(E
){if(this.K&&this.K.ADW)return this.K.ADW.apply(this,arguments);else return C.DeviceClass.
BrR.apply(this,arguments);},BrR:function(E){A.aa8("%s",EV);},AbX:function(An){this.
ADW(An);},AmZ:function(Ahk){if(this.K&&this.K.AmZ)return this.K.AmZ.apply(this,arguments
);else return C.DeviceClass.Bsa.apply(this,arguments);},Bsa:function(Ahk){return A.
_NewObject(C.AiO,0);},ApV:function(){if(this.K&&this.K.ApV)return this.K.ApV.apply(
this,arguments);else return C.DeviceClass.BqB.apply(this,arguments);},BqB:function(
){return false;},Apl:function(Ni){if(this.K&&this.K.Apl)return this.K.Apl.apply(
this,arguments);else return C.DeviceClass.Bqw.apply(this,arguments);},Bqw:function(
Ni){},ADI:function(E){if(this.K&&this.K.ADI)return this.K.ADI.apply(this,arguments
);else return C.DeviceClass.BrE.apply(this,arguments);},BrE:function(E){},Bsw:function(
An){this.ADI(An);},UpdateSerialNumber:function(AI){if(this.AgW===AI)return;this.
AgW=AI;A.aat([this,this.BhN,this.Bsw],0);},AuS:function(E){if(this.K&&this.K.AuS
)return this.K.AuS.apply(this,arguments);else return C.DeviceClass.BqJ.apply(this
,arguments);},BqJ:function(E){},AXr:function(An){this.AuS(An);},UpdateAnimalIdAutoGenerationMethod:
function(A_V){if(this.AfJ===A_V)return;this.AfJ=A_V;A.aat([this,this.AP1,this.AXr
],0);},AAw:function(){return false;},AEp:function(){return false;},ADK:function(
E){if(this.K&&this.K.ADK)return this.K.ADK.apply(this,arguments);else return C.DeviceClass.
BrF.apply(this,arguments);},BrF:function(E){},A9W:function(An){this.ADK(An);},UpdateShutdownTimer:
function(AI){if(this.ASg===AI)return;this.ASg=AI;A.aat([this,this.A52,this.A9W],
0);},Aql:function(E){if(this.K&&this.K.Aql)return this.K.Aql.apply(this,arguments
);else return C.DeviceClass.BqN.apply(this,arguments);},BqN:function(E){},A9F:function(
An){this.Aql(An);},UpdateAnimalListInfoItemMode:function(AI){if(this.AlB===AI)return;
this.AlB=AI;A.aat([this,this.A5t,this.A9F],0);},Aq3:function(H){if(this.K&&this.
K.Aq3)return this.K.Aq3.apply(this,arguments);else return C.DeviceClass.Br9.apply(
this,arguments);},Br9:function(H){},BBY:function(s){this.Aq3(s);},AqJ:function(E
){if(this.K&&this.K.AqJ)return this.K.AqJ.apply(this,arguments);else return C.DeviceClass.
BrX.apply(this,arguments);},BrX:function(E){},A94:function(An){this.AqJ(An);},AqK:
function(E){if(this.K&&this.K.AqK)return this.K.AqK.apply(this,arguments);else return C.
DeviceClass.BrY.apply(this,arguments);},BrY:function(E){},A95:function(An){this.
AqK(An);},UpdateWeightGainsLowString:function(AI){if(this.AFh===AI)return;this.AFh=
AI;A.aat([this,this.A6g,this.A95],0);},UpdateWeightGainsHighString:function(AI){
if(this.AFg===AI)return;this.AFg=AI;A.aat([this,this.A6f,this.A94],0);},AuU:function(
E){if(this.K&&this.K.AuU)return this.K.AuU.apply(this,arguments);else return C.DeviceClass.
BqQ.apply(this,arguments);},BqQ:function(E){},A9H:function(An){this.AuU(An);},UpdateAnimalTypesWeightGainsString:
function(AI){if(this.AzU===AI)return;this.AzU=AI;A.aat([this,this.A5w,this.A9H],
0);},AqI:function(E){if(this.K&&this.K.AqI)return this.K.AqI.apply(this,arguments
);else return C.DeviceClass.BrW.apply(this,arguments);},BrW:function(E){},A93:function(
An){this.AqI(An);},AqL:function(E){if(this.K&&this.K.AqL)return this.K.AqL.apply(
this,arguments);else return C.DeviceClass.Br2.apply(this,arguments);},Br2:function(
E){},A98:function(An){this.AqL(An);},UpdateWeightValueBirthString:function(AI){if(
this.AFj===AI)return;this.AFj=AI;A.aat([this,this.A6j,this.A98],0);},UpdateWeightGainsAverageString:
function(AI){if(this.AFf===AI)return;this.AFf=AI;A.aat([this,this.A6e,this.A93],
0);},Au8:function(E){if(this.K&&this.K.Au8)return this.K.Au8.apply(this,arguments
);else return C.DeviceClass.Bq7.apply(this,arguments);},Bq7:function(E){},Bsq:function(
An){this.Au8(An);},UpdateEvaluationAnimalType:function(Ee){if(this.AAQ===Ee)return;
this.AAQ=Ee;A.aat([this,this.Bhi,this.Bsq],0);},UpdateStartScreen:function(AI){if(
this.Av2===AI)return;this.Av2=AI;A.aat([this,this.BhP,this.Bsx],0);},Avr:function(
E){if(this.K&&this.K.Avr)return this.K.Avr.apply(this,arguments);else return C.DeviceClass.
BrG.apply(this,arguments);},BrG:function(E){},Bsx:function(An){this.Avr(An);},AB0:
function(){if(this.K&&this.K.AB0)return this.K.AB0.apply(this,arguments);else return C.
DeviceClass.Bqz.apply(this,arguments);},Bqz:function(){return 1;},AB1:function(){
if(this.K&&this.K.AB1)return this.K.AB1.apply(this,arguments);else return C.DeviceClass.
BqA.apply(this,arguments);},BqA:function(){return 1;},GetCommitCount:function(){
return 1903;},GetCommitEpoch:function(){return 1692954318;},GetCommitHash:function(
){return A.kh.Bd3;},GetVersionMajor:function(){return 0;},GetVersionMinor:function(
){return 9;},GetVersionRev:function(){return 9;},ADq:function(E){if(this.K&&this.
K.ADq)return this.K.ADq.apply(this,arguments);else return C.DeviceClass.Brj.apply(
this,arguments);},Brj:function(E){},A9S:function(An){this.ADq(An);},UpdateMaximumAgeNewOnFarm:
function(AI){if(this.ACf===AI)return;this.ACf=AI;A.aat([this,this.A5R,this.A9S],
0);},Avx:function(E){if(this.K&&this.K.Avx)return this.K.Avx.apply(this,arguments
);else return C.DeviceClass.BrQ.apply(this,arguments);},BrQ:function(E){},AXK:function(
An){this.Avx(An);},UpdateTransponderAssignmentIdChangeMethod:function(A_L){if(this.
Ag5===A_L)return;this.Ag5=A_L;A.aat([this,this.AQt,this.AXK],0);},BatchResetPurchasedNoticePending:
function(){var B4=A._NewObject(C.Animal,0);var P;var Ah6=0;var Acl=A._GetAutoObject(
C.Device).Ao.Filter;var Bb=A._GetAutoObject(C.Helper).AME();A._GetAutoObject(C.Device
).Ao.Bl(Bb);for(P=0;P<A._GetAutoObject(C.Device).Ao.Cj();P++){B4.EK(P,A._GetAutoObject(
C.Device).Ao);B4.Ad4(false);B4.Cr(A._GetAutoObject(C.Device).Ao);Ah6++;}A._GetAutoObject(
C.Device).Ao.Bl(Acl);return Ah6;},AC5:function(E){if(this.K&&this.K.AC5)return this.
K.AC5.apply(this,arguments);else return C.DeviceClass.BqZ.apply(this,arguments);
},BqZ:function(E){},AXt:function(An){this.AC5(An);},UpdateDataExportDestination:
function(AI){if(this.U4===AI)return;this.U4=AI;A.aat([this,this.AP6,this.AXt],0);
},BjG:function(E){},UpdateMassRecordingAutomatic:function(AI){if(this.APj===AI)return;
this.APj=AI;A.aat([this,this.BhB,this.BjG],0);},M_:function(E){if(this.K&&this.K.
M_)return this.K.M_.apply(this,arguments);else return C.DeviceClass.Br3.apply(this
,arguments);},Br3:function(E){},BsA:function(An){this.M_(An);},UpdateWhereAbouts:
function(Ae1){if(this.WhereAbouts===Ae1)return;this.WhereAbouts=Ae1;A.aat([this,
this.AuP,this.BsA],0);},Aqh:function(E){if(this.K&&this.K.Aqh)return this.K.Aqh.
apply(this,arguments);else return C.DeviceClass.BqE.apply(this,arguments);},BqE:
function(E){},A9A:function(An){this.Aqh(An);},Aqi:function(E){if(this.K&&this.K.
Aqi)return this.K.Aqi.apply(this,arguments);else return C.DeviceClass.BqF.apply(
this,arguments);},BqF:function(E){},A9B:function(An){this.Aqi(An);},UpdateActiveMassRecordingFields:
function(AI){if(this.AzN===AI)return;this.AzN=AI;A.aat([this,this.A5m,this.A9A],
0);},UpdateActiveMassRecordingFieldsOrder:function(AI){if(this.AzO===AI)return;this.
AzO=AI;A.aat([this,this.A5n,this.A9B],0);},AqZ:function(H){if(this.K&&this.K.AqZ
)return this.K.AqZ.apply(this,arguments);else return C.DeviceClass.Br6.apply(this
,arguments);},Br6:function(H){},BBV:function(s){this.AqZ(s);},ADo:function(E){if(
this.K&&this.K.ADo)return this.K.ADo.apply(this,arguments);else return C.DeviceClass.
Brh.apply(this,arguments);},Brh:function(E){},AGM:function(An){this.ADo(An);},UpdateMassRecordingDateOfBirthMandatory:
function(AI){if(this.AdN===AI)return;this.AdN=AI;A.aat([this,this.ACF,this.AGM],
0);},ADn:function(E){this.UpdateMassRecordingCounter(E);},UpdateMassRecordingCounter:
function(AI){if(this.Aus===AI)return;this.Aus=AI;A.aat([this,this.A5Q,this.ADn],
0);},ACA:function(){return this.Ku;},Auz:function(){return this.Aab;},AuC:function(
){return this.AlI;},AQn:function(){return this.ScanState;},ACG:function(){return this.
MeasureState;},ACJ:function(){return this.Kj;},A5M:function(){return this.Language;
},Aqb:function(){return this.TemperatureUnit;},A5B:function(){return this.AKS;},
AQd:function(){return this.ACm;},AuO:function(){return this.OverlayMenu;},A5_:function(
){return this.Zd;},AQp:function(){return this.SyncState;},A5$:function(){return this.
Arp;},ACK:function(){return this.ASZ;},AQm:function(){return this.RatingMode;},Ap_:
function(){return this.AlU;},AQr:function(){return this.ASJ;},BhH:function(){return this.
ARB;},Bg8:function(){return this.AutoRegistrationMode;},AQo:function(){return this.
PD;},Aa_:function(){return this.FQ;},Aa$:function(){return this.Fx;},ACL:function(
){return this.IK;},AQc:function(){return this.MassUnit;},A5l:function(){return this.
P8;},AP0:function(){return this.As$;},A5x:function(){return this.AutoActions;},Py:
function(){return this.AnimalType;},A6h:function(){return this.WeightRecordingMode;
},AQj:function(){return this.AEb;},ACE:function(){return this.Hv;},A5q:function(
){return this.Aiv;},A6i:function(){return this.WeightRecordingScope;},VJ:function(
){return this.Gender;},AuI:function(){return this.ApI;},AuH:function(){return this.
ApH;},ACB:function(){return this.JD;},A5s:function(){return this.AJ2;},A5E:function(
){return this.AlT;},AP2:function(){return this.D3;},A6d:function(){return this.AS1;
},A5G:function(){return this.AMo;},A5v:function(){return this.AzT;},A55:function(
){return this.AEY;},A56:function(){return this.AEZ;},AQg:function(){return this.
APP;},Bhp:function(){return this.AlX;},A5T:function(){return this.ACo;},A5S:function(
){return this.ACn;},AuL:function(){return this.APx;},AuK:function(){return this.
APw;},A5A:function(){return this.Apd;},A5k:function(){return this.AzM;},Bg4:function(
){return this.Alw;},Amt:function(){return this.Ia;},AP7:function(){return this.AAI;
},AP8:function(){return this.AAJ;},AuF:function(){return this.Atz;},Amw:function(
){return this.Ai8;},AQe:function(){return this.Aux;},AuM:function(){return this.
APy;},AuG:function(){return this.EartagNrAssignmentMode;},AuB:function(){return this.
Breed;},BhC:function(){return this.R3;},BhA:function(){return this.Qu;},BhZ:function(
){return this.Sj;},Bg_:function(){return this.Rt;},A5C:function(){return this.ALK;
},A5U:function(){return this.APK;},ACC:function(){return this.Apb;},AQs:function(
){return this.Av8;},A59:function(){return this.AeD;},AQk:function(){return this.
YO;},ACI:function(){return this.Aa6;},A5H:function(){return this.Apx;},Aba:function(
){return this.Ake;},BhN:function(){return this.AgW;},AP1:function(){return this.
AfJ;},A52:function(){return this.ASg;},A5t:function(){return this.AlB;},A6f:function(
){return this.AFg;},A6g:function(){return this.AFh;},A5w:function(){return this.
AzU;},A6e:function(){return this.AFf;},A6j:function(){return this.AFj;},Bhi:function(
){return this.AAQ;},BhP:function(){return this.Av2;},A5R:function(){return this.
ACf;},AQt:function(){return this.Ag5;},AP6:function(){return this.U4;},BhB:function(
){return this.APj;},AuP:function(){return this.WhereAbouts;},A5m:function(){return this.
AzN;},A5n:function(){return this.AzO;},ACF:function(){return this.AdN;},A5Q:function(
){return this.Aus;},_Init:function(aArg){C.Table._Init.call(this.Ao={I:this},0);
C.Table._Init.call(this.Bq={I:this},0);C.Table._Init.call(this.AfH={I:this},0);A.
Core.A8g._Init.call(this.AmR={I:this},0);C.Table._Init.call(this.Pa={I:this},0);
this.__proto__=C.DeviceClass;this.Ao.OnSetId(0);this.Bq.OnSetId(1);this.AfH.OnSetId(
3);this.Pa.OnSetId(4);this.PD=A._NewObject(C.Transponder,0);this.R3=A._NewObject(
C.Av0,0);this.Qu=A._NewObject(C.At2,0);this.Sj=A._NewObject(C.At2,0);this.Rt=A._NewObject(
C.Av0,0);var Lj=this._variants();if(Lj){this.K={};Lj._Init.call(this,aArg);}A.hJ++;
},_Done:function(){if(this.K)this.K._Done.call(this);this.__proto__=null;this.Ao.
_Done();this.Bq._Done();this.AfH._Done();this.AmR._Done();this.Pa._Done();A.hJ--;
},_ReInit:function(){this.Ao._ReInit();this.Bq._ReInit();this.AfH._ReInit();this.
AmR._ReInit();this.Pa._ReInit();if(this.K)this.K._ReInit.call(this);},_Mark:function(
D){var B;if((B=this.PD)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.R3)&&(B._cycle
!=D))B._Mark(B._cycle=D);if((B=this.Qu)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=
this.Sj)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Rt)&&(B._cycle!=D))B._Mark(
B._cycle=D);if((B=this.Ao)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Bq)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.AfH)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AmR
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Pa)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);if(this.K)this.K._Mark(D);},_variants:
function(){return A.abt.DeviceClass._variants();},K:null,I:null,_cycle:0,_observers:
null,_className:"Device::DeviceClass"};C.Device={_Init:function(){C.DeviceClass.
_Init.call(this,0);},_variants:function(){return this;},_this:null};C.ScreenType={
UNDEFINED:0,Sleep:1,Boot:2,Home:3,Charge:4,Sync:5,Settings:6,EditAnimalData:7,AnimalList:
8,AnimalListFilter:9,AnimalActionTemperature:10,AnimalActionRate:11,AlarmList:12
,ControlMeasure:13,ControlList:14,RangeTest:15,DateTimeSettings:16,TemperatureSettings:
17,DeviceSettings:18,RegistrationSettings:19,WatchList:20,AnimalActionWeighing:21
,UnitsSettings:22,WeightGainSettings:23,AnimalActionActions:24,EvaluationMenuMain:
25,NewAnimals:26,MassRecordingScreen:27,NewAnimalManualData:28,AnimalActionUnregister:
29,AnimalActionNewbornCare:30,NewAnimalTransponderData:31,SetTransponderScreen:32
,WeightListScreen:33,AutoActionScanScreen:34,ManualActionScanScreen:35,AnimalSingleInfoScreen:
36,AnimalListActions:37,InitializationSettings:38,ControlledPowerOff:39,ChargeWarning:
40,AlarmListFilter:41,WatchListFilter:42,AlarmListActions:43,ControlListActions:
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
5};C.StringFilterCriterion={A4:A.jm,Adj:function(){var Av=A._NewObject(C.StringFilterCriterion
,0);Av.Gt(this);return Av;},Gt:function(AL){C.FilterCriterion.Gt.call(this,AL);var
Av=(C.StringFilterCriterion.isPrototypeOf(AL)?AL:null);if(!!Av)this.A4=Av.A4;},_Init:
function(aArg){C.FilterCriterion._Init.call(this,aArg);this.__proto__=C.StringFilterCriterion;
},_className:"Device::StringFilterCriterion"};C.Table={CE:function(Ab,AX){if(this.
K&&this.K.CE)return this.K.CE.apply(this,arguments);else return C.ITable.CE.apply(
this,arguments);},Va:function(Ab,AX){if(this.K&&this.K.Va)return this.K.Va.apply(
this,arguments);else return C.ITable.Va.apply(this,arguments);},HW:function(Ab,AX
){if(this.K&&this.K.HW)return this.K.HW.apply(this,arguments);else return C.ITable.
HW.apply(this,arguments);},OnSetId:function(E){if(this.K&&this.K.OnSetId)return this.
K.OnSetId.apply(this,arguments);else return C.ITable.OnSetId.apply(this,arguments
);},Cj:function(){if(this.K&&this.K.Cj)return this.K.Cj.apply(this,arguments);else
return C.ITable.Cj.apply(this,arguments);},Bl:function(E){if(this.K&&this.K.Bl)return this.
K.Bl.apply(this,arguments);else return C.ITable.Bl.apply(this,arguments);},Vb:function(
Ab,AX){if(this.K&&this.K.Vb)return this.K.Vb.apply(this,arguments);else return C.
ITable.Vb.apply(this,arguments);},RQ:function(Ab,AX){if(this.K&&this.K.RQ)return this.
K.RQ.apply(this,arguments);else return C.ITable.RQ.apply(this,arguments);},Op:function(
){if(this.K&&this.K.Op)return this.K.Op.apply(this,arguments);else return C.ITable.
Op.apply(this,arguments);},Or:function(AnI){if(this.K&&this.K.Or)return this.K.Or.
apply(this,arguments);else return C.ITable.Or.apply(this,arguments);},XV:function(
){if(this.K&&this.K.XV)return this.K.XV.apply(this,arguments);else return C.ITable.
XV.apply(this,arguments);},YZ:function(Ab,AX,CX){if(this.K&&this.K.YZ)return this.
K.YZ.apply(this,arguments);else return C.ITable.YZ.apply(this,arguments);},G$:function(
Ab,AX,CX){if(this.K&&this.K.G$)return this.K.G$.apply(this,arguments);else return C.
ITable.G$.apply(this,arguments);},YY:function(Ab,AX,CX){if(this.K&&this.K.YY)return this.
K.YY.apply(this,arguments);else return C.ITable.YY.apply(this,arguments);},Nb:function(
Ab,AX,CX){if(this.K&&this.K.Nb)return this.K.Nb.apply(this,arguments);else return C.
ITable.Nb.apply(this,arguments);},YX:function(Ab,AX,CX){if(this.K&&this.K.YX)return this.
K.YX.apply(this,arguments);else return C.ITable.YX.apply(this,arguments);},K4:function(
aColumn,A1){if(this.K&&this.K.K4)return this.K.K4.apply(this,arguments);else return C.
ITable.K4.apply(this,arguments);},LD:function(Ab,AX){if(this.K&&this.K.LD)return this.
K.LD.apply(this,arguments);else return C.ITable.LD.apply(this,arguments);},TQ:function(
Ab,AX,CX){if(this.K&&this.K.TQ)return this.K.TQ.apply(this,arguments);else return C.
ITable.TQ.apply(this,arguments);},Ai0:function(aColumn,A1){if(this.K&&this.K.Ai0
)return this.K.Ai0.apply(this,arguments);else return C.ITable.Ai0.apply(this,arguments
);},G_:function(){if(this.K&&this.K.G_)return this.K.G_.apply(this,arguments);else
return C.ITable.G_.apply(this,arguments);},AiX:function(aColumn,A1){if(this.K&&this.
K.AiX)return this.K.AiX.apply(this,arguments);else return C.ITable.AiX.apply(this
,arguments);},Af4:function(aColumn,A1){if(this.K&&this.K.Af4)return this.K.Af4.apply(
this,arguments);else return C.ITable.Af4.apply(this,arguments);},Hz:function(){if(
this.K&&this.K.Hz)return this.K.Hz.apply(this,arguments);else return C.ITable.Hz.
apply(this,arguments);},AaA:function(){if(this.K&&this.K.AaA)return this.K.AaA.apply(
this,arguments);else return C.ITable.AaA.apply(this,arguments);},Qd:function(){if(
this.K&&this.K.Qd)return this.K.Qd.apply(this,arguments);else return C.ITable.Qd.
apply(this,arguments);},_Init:function(aArg){C.ITable._Init.call(this,aArg);this.
__proto__=C.Table;var Lj=this._variants();if(Lj){this.K={};Lj._Init.call(this,aArg
);}},_Done:function(){if(this.K)this.K._Done.call(this);this.__proto__=C.ITable;
C.ITable._Done.call(this);},_ReInit:function(){C.ITable._ReInit.call(this);if(this.
K)this.K._ReInit.call(this);},_Mark:function(D){C.ITable._Mark.call(this,D);if(this.
K)this.K._Mark(D);},_variants:function(){return A.abt.Table._variants();},K:null
,_className:"Device::Table"};C.TableId={Animal:0,Rating:1,Undefined:2,AnimalGroup:
3,CalfDeregistrations:4};C.ScanState={Idle:0,Progress:1,IdScanned:2,NotFound:3,Error:
4,LAST:5};C.RatedAttribute={None:0,Feed:1,Appearance:2,Respiratory:3,Faeces:4};C.
ConverterClass={MS:null,Aj_:function(AnG){var A$t;var AsY=this.ASz(AnG/100,0,A._GetAutoObject(
C.Device).TemperatureUnit);A$t=A.aap(AsY,0,1);return A$t;},A8p:function(Ng){if(Ng<=
0)return 0;else if(Ng<=1)return 5;else if(Ng<=2)return 3;else if(Ng<=4)return 2;
else if(Ng<=6)return 1;else if(Ng<=8)return 4;else return 0;},Ac2:function(Ng){var
a=0;switch(Ng){case 3:a=2;break;case 2:a=4;break;case 1:a=6;break;case 0:a=0;break;
case 4:a=8;break;case 5:a=1;break;default:A.aa8("%s",OM);}return a;},Ari:function(
Ee,Q3){var Nk=A._GetAutoObject(C.Converter).Aiw(Q3,Ee);switch(Nk){case 3:return 1;
case 2:return 2;case 1:return 3;case 0:return 4;default:throw new Error(Ne+Nk.toFixed(
));}},Ag3:function(){var B;var D2=A._NewObject(A.Core.Bu,0).Initialize(A._GetAutoObject(
C.Helper).DB());D2.AmF(0);D2.AmI(0);D2.AmL(0);return((B=(D2.JL()|0))<0)?B+0x100000000:
B;},Bd7:function(ArX){var Dk;switch(ArX){case 36:Dk=ON;break;case 40:Dk=Ss;break;
case 56:Dk=T$;break;case 70:Dk=Zg;break;case 100:Dk=Wb;break;case 124:Dk=IM;break;
case 156:Dk=Ua;break;case 158:Dk=Zh;break;case 191:Dk=Wc;break;case 196:Dk=Zi;break;
case 203:Dk=Ub;break;case 208:Dk=Zj;break;case 233:Dk=Zk;break;case 246:Dk=Uc;break;
case 250:Dk=Wd;break;case 276:Dk=QV;break;case 300:Dk=Zl;break;case 348:Dk=OO;break;
case 372:Dk=PK;break;case 380:Dk=Ud;break;case 392:Dk=Zm;break;case 428:Dk=We;break;
case 440:Dk=Zn;break;case 442:Dk=Zo;break;case 470:Dk=Wf;break;case 528:Dk=Wg;break;
case 578:Dk=St;break;case 616:Dk=Zp;break;case 620:Dk=Zq;break;case 642:Dk=AbO;break;
case 643:Dk=Su;break;case 703:Dk=AbP;break;case 705:Dk=AeO;break;case 724:Dk=Zr;
break;case 752:Dk=Wh;break;case 756:Dk=Wi;break;case 792:Dk=AeP;break;case 804:Dk=
AeQ;break;case 826:Dk=JT;break;case 840:Dk=AeR;break;default:Dk=ArX.toFixed();}return Dk;
},Anc:function(N5){return this.N0(N5,1,false);},Awi:function(N5,AnW){return this.
N0(N5,AnW,false);},N0:function(N5,AnW,BvO){var B;var AkK=A.jm;switch(A._GetAutoObject(
C.Device).MassUnit){case 0:if(BvO)AkK=A.aaq(N5,0,0);else{var BaL=N5<0;if(AnW<3)N5=
N5+(((BaL?-1:1)*5)*(Math.pow(10,2-AnW)|0));AkK=(((((B=N5)>-2147483648)?Math.abs(
B):B)/1000)|0).toFixed();if(AnW>0)AkK=AkK+(Li+A.aaX(A.aaq((((B=N5)>-2147483648)?
Math.abs(B):B)%1000,3,10),AnW));if(BaL)AkK=Ag_+AkK;}break;case 1:AkK=A.aap(N5/453.592
,0,AnW);break;default:A.aa8("%s%s",Ane,A._GetAutoObject(C.Device).MassUnit.toFixed(
));}return AkK;},T0:function(L2){var A1x=L2.toFixed();var BcU=A1x.length;if((BcU>=
14)&&(BcU<=15)){var AZD=this.Av_(L2);var BuG=A._GetAutoObject(C.Converter).Bd7(AZD
);A1x=(BuG+N2)+A.aar(A._GetAutoObject(C.Helper).U8(L2,0,12),12,10);}return A1x;}
,AlY:function(LZ){switch(LZ){case 0:return A.zW(A.abi.AOh);case 1:return A.zW(A.
abi.ABK);case 2:return A.zW(A.abi.ABP);default:{A.aa8("%s%e",Wj,LZ);return null;
}}},A2e:function(Bud){switch(Bud){case 0:return A.zW(A.abi.At$);case 1:return A.
zW(A.abi.ABG);case 2:return A.zW(A.abi.AOb);default:throw new Error(Anf);}},AfM:
function(AHo){switch(AHo){case 0:return A.zW(A.abi.Ai9);case 2:return A.zW(A.abi.
Al7);case 1:return A.zW(A.abi.AaN);case 3:switch(A._GetAutoObject(C.Device).MassUnit
){case 0:return A.zW(A.abi.Auh);case 1:return A.zW(A.abi.Aui);default:throw new Error(
Ag$+A._GetAutoObject(C.Device).MassUnit.toFixed());}break;case 4:return A.zW(A.abi.
ANC);case 5:return A.zW(A.abi.AND);case 6:return A.zW(A.abi.ANH);case 7:return A.
zW(A.abi.AM2);case 8:return A.zW(A.abi.AM9);case 9:return A.zW(A.abi.ABi);case 10:
return A.zW(A.abi.AM8);case 11:return A.zW(A.abi.AM_);default:throw new Error(Aha+
AHo.toFixed());}},Bdr:function(Axo){switch(Axo){case 0:return A.zW(A.abi.ABN);case
3:return A.zW(A.abi.Al7);case 1:return A.zW(A.abi.AaN);case 2:return A._GetAutoObject(
A.abk.DM).A$R();default:throw new Error(Aha+Axo.toFixed());}},Bd6:function(ArX){
switch(ArX){case 977:return AbQ;case 978:return Ue;case 980:return Ang;case 981:
return Anh;case 982:return Awj;case 983:return Awk;case 984:return Akj;case 985:
return Awl;default:return A.z2(A.abg.Unknown);}},Bep:function(Ab5){switch(Ab5){case
1:return 0x278A;case 2:return 0x278B;case 3:return 0x278C;case 4:return 0x278D;case
5:return 0x278E;case 6:return 0x278F;case 7:return 0x2790;case 8:return 0x2791;case
9:return 0x2792;case 10:return 0x2793;default:return 0x20;}},Bmh:function(L2){if(
!L2)return-1;return(L2%100000000)|0;},BeV:function(AnF,aFilter){var B;if(!aFilter
)return AeS;var An7=Arv;var Av=aFilter.AMx();while(!!Av){An7=An7+A._GetAutoObject(
C.Helper).A3X(AnF,Av);Av=aFilter.AMB(Av);if(!!Av)An7=An7+OP;}An7=An7+Sv;return An7;
},A4B:function(A_x){var MB=0;switch(A_x){case 14:MB=2;break;case 13:MB=4;break;case
6:MB=36;break;case 11:MB=9;break;case 0:MB=39;break;case 10:MB=26;break;case 12:
MB=12;break;case 5:MB=14;break;case 3:MB=15;break;case 1:MB=10;break;case 8:MB=16;
break;case 4:MB=20;break;case 15:MB=27;break;case 9:MB=31;break;case 2:MB=13;break;
case 7:MB=35;break;case 16:MB=37;break;default:A.aa8("%s%e",Awm,A_x);}return MB;
},Bdq:function(Axo){switch(Axo){case 0:return 1;case 3:return 0;case 1:return 2;
case 2:switch(A._GetAutoObject(C.Device).MassUnit){case 0:return 3;case 1:return 4;
default:throw new Error(Ag$+A._GetAutoObject(C.Device).MassUnit.toFixed());}break;
default:throw new Error(Aha+Axo.toFixed());}},Bds:function(AnN){switch(AnN){case
0:return A.zW(A.abi.ANz);case 1:return A.zW(A.abi.ABN);case 9:return A.zW(A.abi.
ANJ);case 4:return A.zW(A.abi.AEn);case 6:return A.zW(A.abi.AqW);case 8:return A.
zW(A.abi.At7);case 2:return A.zW(A.abi.AaN);case 3:return A.zW(A.abi.Al7);case 7:
return A.zW(A.abj.K2);case 5:return A.zW(A.abj.K2);case 10:switch(A._GetAutoObject(
C.Device).MassUnit){case 0:return A.zW(A.abi.Auh);case 1:return A.zW(A.abi.Aui);
default:throw new Error(Ag$+A._GetAutoObject(C.Device).MassUnit.toFixed());}break;
case 11:return A.zW(A.abj.K2);case 12:return A.zW(A.abj.K2);case 13:return A.zW(
A.abj.K2);case 14:return A.zW(A.abj.K2);case 18:return A.zW(A.abj.K2);case 15:return A.
zW(A.abj.K2);case 16:return A.zW(A.abj.K2);case 17:return A.zW(A.abj.K2);default:
throw new Error(Sw+AnN.toFixed());}},ALo:function(ArX){switch(ArX){case 40:return 1;
case 56:return 3;case 70:return 2;case 100:return 4;case 124:return 5;case 156:return 7;
case 158:return 36;case 191:return 17;case 196:return 8;case 203:return 9;case 208:
return 11;case 233:return 12;case 246:return 14;case 250:return 15;case 276:return 10;
case 300:return 16;case 348:return 18;case 372:return 19;case 380:return 20;case
392:return 21;case 428:return 24;case 440:return 22;case 442:return 23;case 470:
return 25;case 528:return 26;case 578:return 27;case 616:return 28;case 620:return 29;
case 642:return 30;case 643:return 31;case 703:return 34;case 705:return 33;case
724:return 13;case 752:return 32;case 756:return 6;case 792:return 35;case 804:return 37;
case 826:return 38;case 840:return 39;default:return 0;}},AeG:function(L2){var AZD=
this.Av_(L2);return this.ALo(AZD);},Av_:function(L2){return A._GetAutoObject(C.Helper
).U8(L2,12,3)|0;},A8H:function(AnK,Ee){if(AnK<A._GetAutoObject(C.Helper).ABe(Ee)
)return 1;else if(AnK<A._GetAutoObject(C.Helper).ABd(Ee))return 2;else return 3;
},AMt:function(BtV){switch(BtV){case 1:return 1;case 2:return 2;case 3:return 3;
case 4:return 4;case 5:return 5;case 6:return 6;case 7:return 7;case 8:return 8;
case 9:return 9;case 10:return 10;case 11:return 11;case 12:return 12;case 13:return 13;
case 14:return 14;case 15:return 15;case 16:return 16;default:return 0;}},ASz:function(
A1,AHb,AHc){if(AHb===AHc)return A1;if(!AHb&&(AHc===1)){var result=((A1*9)/5)+32;
return result;}if((AHb===1)&&!AHc){var result=((A1-32)*5)/9;return result;}throw new
Error(((Arw+AHb.toFixed())+Awn)+AHc.toFixed());},A3I:function(EE){switch(EE){case
0:return Awo;case 1:return A.jm;case 2:return Awp;case 3:return Ani;case 4:return A.
z2(A.abg.Contains);case 5:return Awq;default:{A.aa8("%s%e",Arx,EE);return A.jm;}
}},A2H:function(Ab3){return this.MS.Adl(Ab3);},BfC:function(Ab3){return this.MS.
AlK(Ab3);},BdQ:function(ArW){var Ayz=0;switch(ArW){case 0:Ayz=1;break;case 1:Ayz=
2;break;case 2:Ayz=3;break;case 3:Ayz=4;break;default:A.aa8("%s%e",KI,ArW);}return Ayz;
},Aiw:function(AX1,Ee){if(AX1>=A._GetAutoObject(C.Helper).A3T(Ee))return 3;else if(
AX1>=A._GetAutoObject(C.Helper).AtY(Ee))return 2;else if(AX1<A._GetAutoObject(C.
Device).Zd)return 0;else return 1;},Atq:function(MB){var BN=-1;switch(MB){case 0:
BN=0;break;case 1:BN=40;break;case 2:BN=70;break;case 3:BN=56;break;case 4:BN=100;
break;case 5:BN=124;break;case 6:BN=756;break;case 7:BN=156;break;case 8:BN=196;
break;case 9:BN=203;break;case 10:BN=276;break;case 11:BN=208;break;case 12:BN=233;
break;case 13:BN=724;break;case 14:BN=246;break;case 15:BN=250;break;case 16:BN=
300;break;case 17:BN=191;break;case 18:BN=348;break;case 19:BN=372;break;case 20:
BN=380;break;case 21:BN=392;break;case 22:BN=440;break;case 23:BN=442;break;case
24:BN=428;break;case 25:BN=470;break;case 26:BN=528;break;case 27:BN=578;break;case
28:BN=616;break;case 29:BN=620;break;case 30:BN=642;break;case 31:BN=643;break;case
32:BN=752;break;case 33:BN=705;break;case 34:BN=703;break;case 35:BN=792;break;case
36:BN=158;break;case 37:BN=804;break;case 38:BN=826;break;case 39:BN=840;break;default:
throw new Error(Awr+MB.toFixed());}return BN;},_Init:function(aArg){C.MS._Init.call(
this.MS={I:this},0);this.__proto__=C.ConverterClass;A.hJ++;},_Done:function(){this.
__proto__=null;this.MS._Done();A.hJ--;},_ReInit:function(){this.MS._ReInit();},_Mark:
function(D){var B;if((B=this.MS)._cycle!=D)B._Mark(B._cycle=D);if((B=this.I)&&(B.
_cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:"Device::ConverterClass"
};C.Converter={_Init:function(){C.ConverterClass._Init.call(this,0);},_variants:
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
false,IsAlarm:false,EK:function(Ab,AF){var Hs=C.Row.EK.call(this,Ab,AF);if(Hs&&!
!AF){this.OnSetId(AF.CE(Ab,0));this.TH(AF.CE(Ab,1));this.Abh(AF.CE(Ab,2));this.AmH(
AF.CE(Ab,3));this.R8(AF.Hy(Ab,4));this.JM(AF.AMz(Ab,7));this.AjA(AF.Bfc(Ab,6));this.
DW(AF.AlZ(Ab,14));this.M9(AF.LD(Ab,22));this.M8(AF.LD(Ab,26));this.AvB(AF.IX(Ab,
13));this.Ad2(AF.HW(Ab,8));this.Avu(AF.Hy(Ab,15));this.AQ_(AF.Hy(Ab,31));this.Ad7(
AF.A35(Ab,5));this.AQP(AF.IX(Ab,17));this.TF(AF.HW(Ab,11));this.AQ9(AF.Hy(Ab,16)
);this.ARa(AF.Hy(Ab,30));this.AjI(AF.HW(Ab,9));this.Ad5(AF.HW(Ab,12));this.AQ$(AF.
Hy(Ab,20));this.Avw(AF.Hy(Ab,21));this.AgF(AF.HW(Ab,10));this.Avd(AF.HW(Ab,27));
this.ADh(AF.AA_(Ab,18));this.ADN(AF.Hy(Ab,19));this.Au$(AF.AA_(Ab,23));this.Avv(
AF.Hy(Ab,24));this.AQG(AF.CE(Ab,25));this.Au2(AF.Hy(Ab,28));this.Ave(AF.CE(Ab,29
));this.Aqw(AF.HW(Ab,38));this.NP(AF.Bfd(Ab,32));this.AjD(AF.Bfg(Ab,33));this.AmJ(
AF.LD(Ab,35));this.M_(AF.AMI(Ab,34));this.Ad4(AF.HW(Ab,37));this.ADD(AF.Bfq(Ab,36
));}return Hs;},Cr:function(AF){var Hs=C.Row.Cr.call(this,AF);if(Hs&&!!AF){var Jg=
AF.Op();if(Jg<=0)A.aa8("%s",AbR);else{var Ayd=this.Ama();if(Ayd)this.CH=AF.XV();
else AF.G$(this.CH,0,this.Id);AF.G$(this.CH,1,this.VisualId);AF.G$(this.CH,2,this.
GroupId);AF.G$(this.CH,3,this.LocationId);AF.Abu(this.CH,4,this.DateOfBirth);AF.
Bla(this.CH,7,this.Gender);AF.Bk8(this.CH,6,this.BirthType);AF.Bk6(this.CH,14,this.
AnimalType);AF.TQ(this.CH,22,this.TransponderId);AF.TQ(this.CH,26,this.NaisId);AF.
Aj1(this.CH,13,this.WorstAssessment);AF.Nb(this.CH,8,this.IsAlarm);AF.Abu(this.CH
,15,this.TimestampAlarm);AF.Nb(this.CH,11,this.IsFever);AF.Abu(this.CH,16,this.TimestampExpirationFeverAlarm
);AF.Nb(this.CH,9,this.IsControl);AF.Nb(this.CH,12,this.IsWatch);AF.Abu(this.CH,
20,this.TimestampLastControl);AF.Abu(this.CH,21,this.TimestampLastWatch);AF.Nb(this.
CH,10,this.IsRegistered);AF.Nb(this.CH,27,this.IsPerished);AF.Abu(this.CH,28,this.
DateOfLastCalving);AF.G$(this.CH,29,this.LactationNumber);AF.Nb(this.CH,38,this.
IsDry);AF.Bk_(this.CH,32,this.Breed);AF.Bk$(this.CH,33,this.EaseOfDelivery);AF.TQ(
this.CH,35,this.NaisIdMother);AF.Blg(this.CH,34,this.WhereAbouts);AF.Nb(this.CH,
37,this.IsRegistrationNoticePending);AF.Ble(this.CH,36,this.ReasonOfLeaving);Hs=
AF.Or(Jg);if(Ayd)this.OnSetId(AF.AaA());}}return Hs;},Gd:function(){C.Row.Gd.call(
this);this.OnSetId(-1);this.AgF(true);},G_:function(){C.Row.G_.call(this);this.OnSetId(
0);this.TH(0);this.Abh(0);this.AmH(0);this.R8(0);this.JM(A._GetAutoObject(C.Device
).Gender);this.AjA(0);this.DW(A._GetAutoObject(C.Device).AnimalType);this.M9(0);
this.M8(0);this.AvB(0);this.Ad2(false);this.Avu(0);this.AQ_(0);this.Ad7(0);this.
AQP(0);this.TF(false);this.ARa(0);this.AQ9(0);this.AjI(false);this.Ad5(false);this.
AQ$(0);this.Avw(0);this.AgF(false);this.Avd(false);this.ADh(0);this.ADN(0);this.
Au$(0);this.Avv(0);this.AQG(-1);this.Au2(0);this.Ave(0);this.Aqw(false);this.NP(
0);this.AjD(0);this.AmJ(0);this.M_(0);this.Ad4(false);this.ADD(0);},OnSetId:function(
E){if(this.Id===E)return;this.Id=E;A.aat([this,this.Qx,this.OnSetId],0);},TH:function(
E){if(this.VisualId===E)return;this.VisualId=E;A.aat([this,this.Aqc,this.TH],0);
},Abh:function(E){if(this.GroupId===E)return;this.GroupId=E;A.aat([this,this.Bhq
,this.Abh],0);},R8:function(E){if(this.DateOfBirth===E)return;this.DateOfBirth=E;
A.aat([this,this.AuD,this.R8],0);},JM:function(E){if(this.Gender===E)return;this.
Gender=E;A.aat([this,this.VJ,this.JM],0);},AjA:function(E){if(this.BirthType===E
)return;this.BirthType=E;A.aat([this,this.AP4,this.AjA],0);},AmH:function(E){if(
this.LocationId===E)return;this.LocationId=E;A.aat([this,this.A5P,this.AmH],0);}
,Ad7:function(E){if(this.LastTemperature===E)return;this.LastTemperature=E;A.aat([
this,this.A5O,this.Ad7],0);},Ad2:function(E){if(this.IsAlarm===E)return;this.IsAlarm=
E;A.aat([this,this.A5J,this.Ad2],0);},AjI:function(E){if(this.IsControl===E)return;
this.IsControl=E;A.aat([this,this.Bht,this.AjI],0);},AgF:function(E){if(this.IsRegistered===
E)return;this.IsRegistered=E;A.aat([this,this.Bhw,this.AgF],0);},Ad5:function(E){
if(this.IsWatch===E)return;this.IsWatch=E;A.aat([this,this.A5L,this.Ad5],0);},AvB:
function(E){if(this.WorstAssessment===E)return;this.WorstAssessment=E;A.aat([this
,this.A6k,this.AvB],0);},TF:function(E){if(this.IsFever===E)return;this.IsFever=
E;A.aat([this,this.A5K,this.TF],0);},AQ$:function(E){if(this.TimestampLastControl===
E)return;this.TimestampLastControl=E;A.aat([this,this.BhW,this.AQ$],0);},Avw:function(
E){if(this.TimestampLastWatch===E)return;this.TimestampLastWatch=E;A.aat([this,this.
BhY,this.Avw],0);},AQP:function(E){if(this.LastRatingTemperature===E)return;this.
LastRatingTemperature=E;A.aat([this,this.Bhz,this.AQP],0);},AQ9:function(E){if(this.
TimestampExpirationFeverAlarm===E)return;this.TimestampExpirationFeverAlarm=E;A.
aat([this,this.BhU,this.AQ9],0);},Avu:function(E){if(this.TimestampAlarm===E)return;
this.TimestampAlarm=E;A.aat([this,this.BhT,this.Avu],0);},DW:function(E){if(this.
AnimalType===E)return;this.AnimalType=E;A.aat([this,this.Py,this.DW],0);},ADh:function(
E){if(this.LastBodyWeight===E)return;this.LastBodyWeight=E;A.aat([this,this.A5N,
this.ADh],0);},ADN:function(E){if(this.TimestampLastWeighing===E)return;this.TimestampLastWeighing=
E;A.aat([this,this.A58,this.ADN],0);},M9:function(E){if(this.TransponderId===E)return;
this.TransponderId=E;A.aat([this,this.Ajx,this.M9],0);},SY:function(){return A._GetAutoObject(
C.Helper).MF(this.DateOfBirth,A._GetAutoObject(C.Helper).DB());},Au$:function(E){
if(this.FirstBodyWeight===E)return;this.FirstBodyWeight=E;A.aat([this,this.AP_,this.
Au$],0);},Avv:function(E){if(this.TimestampFirstWeighing===E)return;this.TimestampFirstWeighing=
E;A.aat([this,this.AQq,this.Avv],0);},ApU:function(){var SG=A._NewObject(A.Core.
Bu,0);SG.Initialize(this.DateOfBirth);var AZq=A._NewObject(A.Core.Bu,0);AZq.Initialize(
this.TimestampFirstWeighing);if(((SG.Year===AZq.Year)&&(SG.Aa9()===AZq.Aa9()))&&(
this.FirstBodyWeight>0))return true;else return false;},Ag9:function(AG7){var WK;
var AoY;if(this.TimestampLastWeighing>0){AoY=this.TimestampLastWeighing;WK=this.
LastBodyWeight;}else if(this.AnimalType===1){AoY=A._GetAutoObject(C.Helper).DB();
WK=600000;}else{AoY=this.DateOfBirth;WK=A._GetAutoObject(C.Helper).Aaz(this.AnimalType
);}return A._GetAutoObject(C.Helper).Ag9(WK,AoY,AG7,this.AnimalType);},AQG:function(
E){if(this.FirstBodyWeightId===E)return;this.FirstBodyWeightId=E;A.aat([this,this.
Bho,this.AQG],0);},AmY:function(A_U){this.Ad2(A_U);if(A_U){if(!this.TimestampAlarm
)this.Avu(A._GetAutoObject(C.Helper).DB());}else this.Avu(0);},M8:function(E){if(
this.NaisId===E)return;this.NaisId=E;A.aat([this,this.Amx,this.M8],0);},AEA:function(
A_Q){this.Ad5(A_Q);if(A_Q){if(!this.TimestampLastWatch)this.Avw(A._GetAutoObject(
C.Helper).DB());}else this.Avw(0);},Au2:function(E){if(this.DateOfLastCalving===
E)return;this.DateOfLastCalving=E;A.aat([this,this.Bhe,this.Au2],0);},Ave:function(
E){if(this.LactationNumber===E)return;this.LactationNumber=E;A.aat([this,this.Bhy
,this.Ave],0);},Avd:function(E){if(this.IsPerished===E)return;this.IsPerished=E;
A.aat([this,this.Bhv,this.Avd],0);},ARa:function(E){if(this.TimestampLastTemperature===
E)return;this.TimestampLastTemperature=E;A.aat([this,this.BhX,this.ARa],0);},AQ_:
function(E){if(this.TimestampLastAssessment===E)return;this.TimestampLastAssessment=
E;A.aat([this,this.BhV,this.AQ_],0);},NP:function(E){if(this.Breed===E)return;this.
Breed=E;A.aat([this,this.AuB,this.NP],0);},AjD:function(E){if(this.EaseOfDelivery===
E)return;this.EaseOfDelivery=E;A.aat([this,this.AP9,this.AjD],0);},M_:function(E
){if(this.WhereAbouts===E)return;this.WhereAbouts=E;A.aat([this,this.AuP,this.M_
],0);},AmJ:function(E){if(this.NaisIdMother===E)return;this.NaisIdMother=E;A.aat([
this,this.AQf,this.AmJ],0);},ADD:function(E){if(this.ReasonOfLeaving===E)return;
this.ReasonOfLeaving=E;A.aat([this,this.BhJ,this.ADD],0);},Ad4:function(E){if(this.
IsRegistrationNoticePending===E)return;this.IsRegistrationNoticePending=E;A.aat([
this,this.Bhx,this.Ad4],0);},Aqw:function(E){if(this.IsDry===E)return;this.IsDry=
E;A.aat([this,this.Bhu,this.Aqw],0);},Qx:function(){return this.Id;},Aqc:function(
){return this.VisualId;},Bhq:function(){return this.GroupId;},AuD:function(){return this.
DateOfBirth;},VJ:function(){return this.Gender;},AP4:function(){return this.BirthType;
},A5P:function(){return this.LocationId;},A5O:function(){return this.LastTemperature;
},A5J:function(){return this.IsAlarm;},Bht:function(){return this.IsControl;},Bhw:
function(){return this.IsRegistered;},A5L:function(){return this.IsWatch;},A6k:function(
){return this.WorstAssessment;},A5K:function(){return this.IsFever;},BhW:function(
){return this.TimestampLastControl;},BhY:function(){return this.TimestampLastWatch;
},Bhz:function(){return this.LastRatingTemperature;},BhU:function(){return this.
TimestampExpirationFeverAlarm;},BhT:function(){return this.TimestampAlarm;},Py:function(
){return this.AnimalType;},A5N:function(){return this.LastBodyWeight;},A58:function(
){return this.TimestampLastWeighing;},Ajx:function(){return this.TransponderId;}
,AP_:function(){return this.FirstBodyWeight;},AQq:function(){return this.TimestampFirstWeighing;
},Bho:function(){return this.FirstBodyWeightId;},Amx:function(){return this.NaisId;
},Bhe:function(){return this.DateOfLastCalving;},Bhy:function(){return this.LactationNumber;
},Bhv:function(){return this.IsPerished;},BhX:function(){return this.TimestampLastTemperature;
},BhV:function(){return this.TimestampLastAssessment;},AuB:function(){return this.
Breed;},AP9:function(){return this.EaseOfDelivery;},AuP:function(){return this.WhereAbouts;
},AQf:function(){return this.NaisIdMother;},BhJ:function(){return this.ReasonOfLeaving;
},Bhx:function(){return this.IsRegistrationNoticePending;},Bhu:function(){return this.
IsDry;},_Init:function(aArg){C.Row._Init.call(this,aArg);this.__proto__=C.Animal;
this.TableId=0;},_className:"Device::Animal"};C.Row={CH:-1,TableId:2,EK:function(
Ab,AF){if(!AF){A.aa8("%s",(Aws+this.CH.toFixed())+AFl);return false;}else if(AF.
Id!==this.TableId)throw new Error(AFm);else if((Ab<0)||(Ab>=AF.Cj())){A.aa8("%s"
,(((AFn+this.CH.toFixed())+AFo)+AF.Cj().toFixed())+Awt);return false;}this.CH=Ab;
return true;},Cr:function(AF){if(!AF){A.aa8("%s",(Aws+this.CH.toFixed())+AFl);return false;
}else if(AF.Id!==this.TableId)throw new Error(AFm);else if(this.Ama()&&AF.K8()){
A.aa8("%s",ATi+AF.Hz().toFixed());return false;}else if(!this.Ama()&&((this.CH<0
)||(this.CH>=AF.Cj()))){A.aa8("%s",(((AFn+this.CH.toFixed())+AFo)+AF.Cj().toFixed(
))+Awt);return false;}return true;},Gd:function(){this.G_();this.CH=-1;},Ama:function(
){return this.CH===-1;},G_:function(){this.CH=-2;},ApC:function(){return this.CH
!==-2;},A5W:function(){return this.CH;},A6$:function(E){this.CH=E;},_Init:function(
aArg){this.__proto__=C.Row;A.hJ++;},_Done:function(){this.__proto__=null;A.hJ--;
},_ReInit:function(){},_Mark:function(D){var B;if((B=this.I)&&(B._cycle!=D))B._Mark(
B._cycle=D);},I:null,_cycle:0,_observers:null,_className:"Device::Row"};C.Rating={
Temperature:0,Id:0,AnimalId:0,Timestamp:0,BodyWeight:0,RatingTemperature:0,Faeces:
0,Respiratory:0,Appearance:0,Feed:0,EK:function(Ab,AF){var Hs=C.Row.EK.call(this
,Ab,AF);if(Hs&&!!AF){this.OnSetId(AF.CE(Ab,0));this.OnSetAnimalId(AF.CE(Ab,1));this.
OnSetTimestamp(AF.Hy(Ab,6));this.OnSetFeed(AF.IX(Ab,2));this.OnSetAppearance(AF.
IX(Ab,3));this.OnSetRespiratory(AF.IX(Ab,4));this.OnSetFaeces(AF.IX(Ab,5));this.
OnSetTemperature(AF.A35(Ab,7));this.OnSetBodyWeight(AF.AA_(Ab,8));this.OnSetRatingTemperature(
AF.IX(Ab,9));}return Hs;},Cr:function(AF){if(this.K&&this.K.Cr)return this.K.Cr.
apply(this,arguments);else return C.Rating.A9r.apply(this,arguments);},A9r:function(
AF){var Hs=C.Row.Cr.call(this,AF);if((Hs&&!!AF)&&(AF.Id===1)){var Jg=AF.Op();if(
Jg<=0)A.aa8("%s",AbR);else{var Ayd=this.Ama();if(Ayd)this.CH=AF.XV();else AF.G$(
this.CH,0,this.Id);AF.G$(this.CH,1,this.AnimalId);AF.Abu(this.CH,6,this.Timestamp
);AF.Aj1(this.CH,2,this.Feed);AF.Aj1(this.CH,3,this.Appearance);AF.Aj1(this.CH,4
,this.Respiratory);AF.Aj1(this.CH,5,this.Faeces);AF.A72(this.CH,7,this.Temperature
);AF.AR3(this.CH,8,this.BodyWeight);AF.Aj1(this.CH,9,this.RatingTemperature);AF.
Or(Jg);if(Ayd)this.OnSetId(AF.AaA());var Q5=A._GetAutoObject(C.Device).Ao;var Ab=
A._GetAutoObject(C.Device).Ao.K4(0,this.AnimalId);if(Ab>=0){var B4=A._NewObject(
C.Animal,0);B4.EK(Ab,Q5);if(this.Temperature>0)B4.TF(A._GetAutoObject(C.Helper).
A4v(this));if((this.Temperature>0)&&A._GetAutoObject(C.Helper).AEh(this)){var Oa=
A._GetAutoObject(C.Helper).AOP(this);B4.AjI(Oa);B4.AmY(Oa);}else if(this.Temperature>
0){var Oa=(A._GetAutoObject(C.Helper).AOP(this)||(B4.WorstAssessment===2))||(B4.
WorstAssessment===1);B4.AjI(Oa);B4.AmY(Oa);}else{var Oa=A._GetAutoObject(C.Helper
).AOP(this)||B4.IsFever;B4.AjI(Oa);B4.AmY(Oa);}B4.Cr(Q5);}}}return Hs;},Gd:function(
){C.Row.Gd.call(this);this.OnSetTimestamp(A._GetAutoObject(C.Helper).DB());this.
OnSetId(-1);},G_:function(){C.Row.G_.call(this);this.OnSetTimestamp(0);this.OnSetId(
0);this.OnSetAnimalId(0);this.OnSetFeed(0);this.OnSetAppearance(0);this.OnSetRespiratory(
0);this.OnSetFaeces(0);this.OnSetTemperature(0);this.OnSetBodyWeight(0);this.OnSetRatingTemperature(
0);},OnSetTemperature:function(E){if(this.Temperature===E)return;this.Temperature=
E;A.aat([this,this.BhS,this.OnSetTemperature],0);},OnSetId:function(E){if(this.Id===
E)return;this.Id=E;A.aat([this,this.Qx,this.OnSetId],0);},OnSetAnimalId:function(
E){if(this.AnimalId===E)return;this.AnimalId=E;A.aat([this,this.Bg5,this.OnSetAnimalId
],0);},OnSetFeed:function(E){if(this.Feed===E)return;this.Feed=E;A.aat([this,this.
Bhl,this.OnSetFeed],0);},OnSetAppearance:function(E){if(this.Appearance===E)return;
this.Appearance=E;A.aat([this,this.Bg6,this.OnSetAppearance],0);},OnSetRespiratory:
function(E){if(this.Respiratory===E)return;this.Respiratory=E;A.aat([this,this.BhK
,this.OnSetRespiratory],0);},OnSetFaeces:function(E){if(this.Faeces===E)return;this.
Faeces=E;A.aat([this,this.Bhj,this.OnSetFaeces],0);},OnSetTimestamp:function(E){
if(this.Timestamp===E)return;this.Timestamp=E;A.aat([this,this.A57,this.OnSetTimestamp
],0);},Bk7:function(Nh,A1){switch(Nh){case 2:this.OnSetAppearance(A1);break;case
1:this.OnSetFeed(A1);break;case 4:this.OnSetFaeces(A1);break;case 3:this.OnSetRespiratory(
A1);break;default:;}},Bfa:function(Nh){switch(Nh){case 2:return this.Appearance;
case 1:return this.Feed;case 4:return this.Faeces;case 3:return this.Respiratory;
default:return 0;}},OnSetRatingTemperature:function(E){if(this.RatingTemperature===
E)return;this.RatingTemperature=E;A.aat([this,this.BhI,this.OnSetRatingTemperature
],0);},OnSetBodyWeight:function(E){if(this.BodyWeight===E)return;this.BodyWeight=
E;A.aat([this,this.Bg9,this.OnSetBodyWeight],0);},BhS:function(){return this.Temperature;
},Qx:function(){return this.Id;},Bg5:function(){return this.AnimalId;},Bhl:function(
){return this.Feed;},Bg6:function(){return this.Appearance;},BhK:function(){return this.
Respiratory;},Bhj:function(){return this.Faeces;},A57:function(){return this.Timestamp;
},BhI:function(){return this.RatingTemperature;},Bg9:function(){return this.BodyWeight;
},_Init:function(aArg){C.Row._Init.call(this,aArg);this.__proto__=C.Rating;this.
TableId=1;var Lj=this._variants();if(Lj){this.K={};Lj._Init.call(this,aArg);}},_Done:
function(){if(this.K)this.K._Done.call(this);this.__proto__=C.Row;C.Row._Done.call(
this);},_ReInit:function(){C.Row._ReInit.call(this);if(this.K)this.K._ReInit.call(
this);},_Mark:function(D){C.Row._Mark.call(this,D);if(this.K)this.K._Mark(D);},_variants:
function(){return A.abt.Rating._variants();},K:null,_className:"Device::Rating"};
C.HelperClass={TP:null,AgT:null,ARW:null,ARX:null,V:null,Aq:null,Kr:null,Sh:null
,Ac1:null,TU:null,TT:null,Adn:null,AeL:null,AeK:null,AeJ:null,AeM:null,AfP:null,
AET:0,Init:function(aArg){A.ow([this,this.ARt],this);},AjN:function(E){this.TP=E;
A.aat([this,this.Aqa,this.AjN],0);},ADG:function(E){this.AgT=E;A.aat([this,this.
A5X,this.ADG],0);},BwP:function(H){switch(A._GetAutoObject(C.Device).ScanState){
case 0:break;case 2:{var As3=A._GetAutoObject(C.Device).PD;if(!As3)throw new Error(
ATj);switch(As3.TransponderType){case 1:this.AjN(As3);break;case 2:this.AQ0(As3);
break;case 3:this.ADG(As3);break;case 4:this.AQ1(As3);break;case 0:break;default:
throw new Error(ATk);}}break;case 4:A._GetAutoObject(C.Device).A5(11,true,A.jm,2000
,null);break;case 3:A._GetAutoObject(C.Device).A5(12,true,A.jm,2000,null);break;
case 1:break;default:throw new Error(ATl);}},AjY:function(){this.AjN(null);this.
AQ0(null);this.ADG(null);this.AQ1(null);},ADL:function(E){if(this.K&&this.K.ADL)
return this.K.ADL.apply(this,arguments);else return C.HelperClass.A9p.apply(this
,arguments);},A9p:function(E){A.aat([this,this.Uf,this.Ug],0);A._GetAutoObject(C.
Device).SetSystemTime(E);},Ug:function(An){this.ADL(An);},DB:function(){if(this.
K&&this.K.DB)return this.K.DB.apply(this,arguments);else return C.HelperClass.A9l.
apply(this,arguments);},A9l:function(){var B;return((B=(this.Aq.A$P()|0))<0)?B+0x100000000:
B;},Uf:function(){return this.DB();},Aq1:function(){A._GetAutoObject(C.Device).Se(-
1);this.V.G_();A.vv(this.V,0);},A4J:function(L2){if(!L2){A.aa8("%s%U",ATm,L2);return false;
}var A9=A._GetAutoObject(C.Device).Ao.Ai0(22,L2);return this.HF(A9);},Al0:function(
AnF,AG6){switch(AnF){case 0:{var An6=AG6;switch(An6){case 14:return A.z2(A.abg.AeH
);case 6:return Ary;case 4:return A.z2(A.abg.AfV);case 28:return Awu;case 7:return A.
z2(A.abg.Aer);case 2:return A.z2(A.abg.O);case 0:return A.z2(A.abg.HA);case 37:return QW;
case 8:return A.z2(A.abg.Alarm);case 9:return A.z2(A.abg.AAp);case 38:return A.z2(
A.abg.ALJ);case 11:return A.z2(A.abg.Fever);case 27:return Awv;case 10:return A.
z2(A.abg.BkO);case 12:return A.z2(A.abg.AqM);case 29:return A.z2(A.abg.AO6);case
18:return A.z2(A.abg.Weighing);case 17:return ATn;case 5:return A.z2(A.abg.Temperature
);case 3:return A.z2(A.abg.Bgf);case 26:return A.z2(A.abg.Yv);case 35:return A.z2(
A.abg.Yv)+ATo;case 36:return ATp;case 15:return ATq;case 24:return AFp;case 20:return AFq;
case 30:return AeT;case 21:return Anj;case 19:return ATr;case 22:return A.z2(A.abg.
Transponder);case 1:return A.z2(A.abg.Gr);case 34:return A.z2(A.abg.I$);case 13:
return AFr;case 31:return Akk;default:{A.aa8("%s",AFs+An6.toFixed());return Aww+
An6.toFixed();}}}case 1:{var An6=AG6;switch(An6){case 1:return A.z2(A.abg.Animal
);case 3:return A.z2(A.abg.AEg);case 8:return A.z2(A.abg.Ag8);case 5:return A.z2(
A.abg.AEi);case 2:return A.z2(A.abg.Feed);case 4:return A.z2(A.abg.AEj);case 7:return A.
z2(A.abg.Temperature);case 6:return A.z2(A.abg.Bu);default:{A.aa8("%s",ATs+An6.toFixed(
));return Aww+An6.toFixed();}}}default:A.aa8("%s",(ATt+AnF.toFixed())+ATu);}return A.
jm;},A3X:function(AnF,AL){var result=A.jm;if(!!AL){result=this.Al0(AnF,AL.ET);result=((
result+N2)+A._GetAutoObject(C.Converter).A3I(AL.Operator))+N2;if(!!(C.Int32FilterCriterion.
isPrototypeOf(AL)?AL:null))result=result+(C.Int32FilterCriterion.isPrototypeOf(AL
)?AL:null).A4.toFixed();else if(!!(C.UInt32FilterCriterion.isPrototypeOf(AL)?AL:
null))result=result+(C.UInt32FilterCriterion.isPrototypeOf(AL)?AL:null).A4.toFixed(
);else if(!!(C.StringFilterCriterion.isPrototypeOf(AL)?AL:null))result=result+(C.
StringFilterCriterion.isPrototypeOf(AL)?AL:null).A4;else if(!!(C.BoolFilterCriterion.
isPrototypeOf(AL)?AL:null)){if((C.BoolFilterCriterion.isPrototypeOf(AL)?AL:null).
A4)result=this.Al0(AnF,AL.ET);else result=A.jm;}else if(!!(C.GenderFilterCriterion.
isPrototypeOf(AL)?AL:null)){var Bvk=A._NewObject(C.GenderToString,0);result=result+
Bvk.Lh((C.GenderFilterCriterion.isPrototypeOf(AL)?AL:null).A4);}else if(!!(C.AnimalTypeFilterCriterion.
isPrototypeOf(AL)?AL:null)){var Bug=A._NewObject(C.AnimalTypeToString,0);result=
result+Bug.Lh((C.AnimalTypeFilterCriterion.isPrototypeOf(AL)?AL:null).A4);}else if(
!!(C.AssessmentFilterCriterion.isPrototypeOf(AL)?AL:null)){var Bui=A._NewObject(
C.AssesmentToString,0);result=result+Bui.Lh((C.AssessmentFilterCriterion.isPrototypeOf(
AL)?AL:null).A4);}else if(!!(C.UInt64FilterCriterion.isPrototypeOf(AL)?AL:null))
result=result+(C.UInt64FilterCriterion.isPrototypeOf(AL)?AL:null).A4.toFixed();else
if(!!(C.WhereAboutsFilterCriterion.isPrototypeOf(AL)?AL:null)){var Byr=A._NewObject(
C.WhereAboutsToString,0);result=result+Byr.Lh((C.WhereAboutsFilterCriterion.isPrototypeOf(
AL)?AL:null).A4);}else A.aa8("%s",ATv);}return result;},NV:function(aString,A_D,
Btw){var result=A.jm;var Bca=false;var index=0;var Bty=A_D.length;while(!Bca){var
A0Y=aString.indexOf(A_D,index);if(A0Y!==-1){result=(result+A.aaY(aString,index,A0Y-
index))+Btw;index=A0Y+Bty;}else{var A_H=aString.length;if(index<A_H)result=result+
A.aa4(aString,A_H-index);Bca=true;}}return result;},AQ0:function(E){this.ARW=E;A.
aat([this,this.BhL,this.AQ0],0);},AQ1:function(E){this.ARX=E;A.aat([this,this.BhM
,this.AQ1],0);},Bad:function(){return((A._GetAutoObject(C.Device).ScanState===2)&&
!!A._GetAutoObject(C.Device).PD)&&(A._GetAutoObject(C.Device).PD.TransponderType===
1);},Afi:function(H){if(!this.V.Ama()&&!!this.V.Id)this.Bge(this.V.Id);},AtY:function(
Ee){return A._GetAutoObject(C.Helper).TU.Get(Ee);},A3T:function(Ee){return A._GetAutoObject(
C.Helper).TT.Get(Ee);},A31:function(){var P=0;var min=32767;while(P<A._GetAutoObject(
C.Helper).TU.My){if(A._GetAutoObject(C.Helper).TU.Get(P)<min)min=A._GetAutoObject(
C.Helper).TU.Get(P);P=P+1;}return min;},ARt:function(H){A.y_([this,this.Afi],A._GetAutoObject(
C.Device).Ao,0);},AOP:function(DX){if(!DX)return false;var BfO=(((this.Ax$(DX.Faeces
)||this.Ax$(DX.Feed))||this.Ax$(DX.Appearance))||this.Ax$(DX.Respiratory))||this.
Ax$(DX.RatingTemperature);return BfO||this.A4v(DX);},Ax$:function(A_h){return(A_h===
2)||(A_h===1);},A4v:function(DX){return!!DX&&(DX.Temperature>A._GetAutoObject(C.
Helper).AtY(A._GetAutoObject(C.Helper).V.AnimalType));},HF:function(L1){var AZ2=
false;if(L1>=0){if(L1!==this.V.CH)A._GetAutoObject(C.Device).Se(L1);AZ2=this.V.EK(
L1,A._GetAutoObject(C.Device).Ao);if(AZ2)A.vv(this.V,0);}else{A._GetAutoObject(C.
Device).Se(-1);this.V.G_();A.vv(this.V,0);}return AZ2;},Ag1:function(Ahm){var B;
return(((B=(this.Aq.A$P()|0))<0)?B+0x100000000:B)-this.Atu(Ahm);},Are:function(){
var B;A.ow([B=this.Kr,B.Av3],this);},BxX:function(H){A._GetAutoObject(C.Device).
A5(16,false,AbS,0,null);A._GetAutoObject(C.Device).A5(5,true,A.jm,0,null);},Bkh:
function(H){var Ar=(C.PopupContext.isPrototypeOf(H)?H:null);if(!!Ar&&(Ar.PopupState===
5))this.Are();},Bj7:function(E){if(this.AET===E)return;this.AET=E;A._GetAutoObject(
C.Device).A5(16,true,this.AET.toFixed(),0,[this,this.Bkh]);},MF:function(Bs8,BtN
){var D2;var BcH=A._NewObject(A.Core.Am6,0);var Gp=A._NewObject(A.Core.Bu,0);var
KV=A._NewObject(A.Core.Bu,0);Gp.Initialize(Bs8);KV.Initialize(BtN);D2=KV.Beo(Gp);
BcH.Initialize2(0,D2.ABA,D2.ACl,D2.AEu);if(Gp.J(BcH).Gu===Gp.Gu)return D2.J9;else
return D2.J9+1;},BxZ:function(H){A._GetAutoObject(C.Device).UpdateMeasureState(3
);if((A._GetAutoObject(C.Device).Kj>=A._GetAutoObject(C.Device).Zd)&&(A._GetAutoObject(
C.Device).Kj<=A._GetAutoObject(C.Helper).AtY(A._GetAutoObject(C.Helper).V.AnimalType
))){var Buf=A._GetAutoObject(C.Helper).V.Id;var Bxr=A._GetAutoObject(C.Device).Ao.
K4(0,Buf);A._GetAutoObject(C.Device).Ao.Nb(Bxr,9,false);A._GetAutoObject(C.Device
).Ao.Bl(A._GetAutoObject(C.Device).Ao.Filter);}},AI4:function(H){var Bdv=A._GetAutoObject(
C.Helper).AtY(A._GetAutoObject(C.Helper).V.AnimalType);var Bdp=A._GetAutoObject(
C.Helper).A3T(A._GetAutoObject(C.Helper).V.AnimalType);var AsX=A.aaC(Bdv-100,Bdp+
100);this.A$u(AsX);},Atu:function(Ahm){return Ahm*86400;},Akc:function(Kn){var B;
if(!!Kn&&(Kn<(((B=Math.trunc(Math.pow(10,A._GetAutoObject(C.Device).Fx)))<0)?B+0x10000000000000000:
B)))return-1;return A._GetAutoObject(C.Helper).U8(Kn,A._GetAutoObject(C.Device).
Fx&0xFF,A._GetAutoObject(C.Device).FQ&0xFF)|0;},AEh:function(DX){if(!DX)return false;
return((!!DX.Faeces||!!DX.Feed)||!!DX.Appearance)||!!DX.Respiratory;},Ag9:function(
AYb,A_J,AG7,Ee){var B;var AoJ;if((AYb<650000)&&(A_J<this.DB())){var A_6=this.AfP.
At0(Ee);var A_5=0;if(A_6>=0)A_5=this.AeJ.Get(A_6);AoJ=AYb+(this.MF(A_J,this.DB()
)*A_5);if(AG7>0){var AY_=this.Ay2(AG7);AoJ=(Math.trunc(((((B=AoJ)<0)?B+0x10000000000000000:
B)+Math.trunc(AY_/2))/AY_)*AY_)|0;}if(AoJ>650000)AoJ=650000;}else AoJ=AYb;return AoJ;
},ABf:function(DX){var Ao5=A._GetAutoObject(C.Converter).Ac2(DX.Faeces);if(Ao5<A.
_GetAutoObject(C.Converter).Ac2(DX.Feed))Ao5=A._GetAutoObject(C.Converter).Ac2(DX.
Feed);if(Ao5<A._GetAutoObject(C.Converter).Ac2(DX.Appearance))Ao5=A._GetAutoObject(
C.Converter).Ac2(DX.Appearance);if(Ao5<A._GetAutoObject(C.Converter).Ac2(DX.Respiratory
))Ao5=A._GetAutoObject(C.Converter).Ac2(DX.Respiratory);return A._GetAutoObject(
C.Converter).A8p(Ao5);},AvR:function(DX,Ng){if(!!DX){DX.OnSetFaeces(Ng);DX.OnSetFeed(
Ng);DX.OnSetAppearance(Ng);DX.OnSetRespiratory(Ng);}},Be_:function(AF,AHa,Ab$,Wv
,AeX){if(!AF)throw new Error(Arz);var Bb=A._NewObject(C.Filter,0);var Aou=AF.Filter;
var N6=A._NewObject(C.Int32FilterCriterion,0);N6.Operator=0;N6.ET=1;N6.A4=Ab$;Bb.
C0(N6);if(Wv>0){var Oj=A._NewObject(C.UInt32FilterCriterion,0);Oj.Operator=2;Oj.
ET=6;Oj.A4=Wv;Bb.C0(Oj);}if(AeX>0){var N$=A._NewObject(C.UInt32FilterCriterion,0
);N$.Operator=3;N$.ET=6;N$.A4=AeX;Bb.C0(N$);}AF.Bl(Bb);var L3=A._NewObject(C.Int32ArrayWrapper
,0);L3.YM(6);var P;for(P=0;P<L3.My;P=P+1)L3.Set(P,0);var Uo;for(P=0;P<AF.Cj();P=
P+1){Uo=AF.IX(P,AHa);L3.Set(Uo,L3.Get(Uo)+1);}AF.Bl(Aou);return L3;},Y4:function(
Ahm){var B;var Gp=A._NewObject(A.Core.Bu,0);var BcG=A._NewObject(A.Core.Am6,0);Gp.
Initialize(A._GetAutoObject(C.Converter).Ag3());BcG.Initialize2(Ahm,0,0,0);Gp=Gp.
Blz(BcG);return((B=(Gp.JL()|0))<0)?B+0x100000000:B;},A3U:function(AF,Ab$,AeX,Wv){
if(!AF)throw new Error(Arz);var Bb=A._NewObject(C.Filter,0);var Aou=AF.Filter;var
N6=A._NewObject(C.Int32FilterCriterion,0);N6.Operator=0;N6.ET=1;N6.A4=Ab$;Bb.C0(
N6);if(Wv>0){var Oj=A._NewObject(C.UInt32FilterCriterion,0);Oj.Operator=2;Oj.ET=
6;Oj.A4=Wv;Bb.C0(Oj);}if(AeX>0){var N$=A._NewObject(C.UInt32FilterCriterion,0);N$.
Operator=3;N$.ET=6;N$.A4=AeX;Bb.C0(N$);}AF.Bl(Bb);var L3=A._NewObject(C.Int32ArrayWrapper
,0);L3.YM(6);var P;for(P=0;P<L3.My;P=P+1)L3.Set(P,0);var AnU=A._NewObject(C.Rating
,0);var AY2;for(P=0;P<AF.Cj();P=P+1){AnU.EK(P,AF);if(A._GetAutoObject(C.Helper).
AEh(AnU)){AY2=A._GetAutoObject(C.Helper).ABf(AnU);L3.Set(AY2,L3.Get(AY2)+1);}}AF.
Bl(Aou);return L3;},AZy:function(AF,Ab$,BuR){if(!AF)throw new Error(Arz);var Bb=
A._NewObject(C.Filter,0);var Aou=AF.Filter;var N6=A._NewObject(C.Int32FilterCriterion
,0);N6.Operator=0;N6.ET=1;N6.A4=Ab$;Bb.C0(N6);var Wv=A._GetAutoObject(C.Converter
).Ag3()+A._GetAutoObject(C.Helper).Atu(BuR);var AeX=Wv+A._GetAutoObject(C.Helper
).Atu(1);var Oj=A._NewObject(C.UInt32FilterCriterion,0);Oj.Operator=2;Oj.ET=6;Oj.
A4=Wv;Bb.C0(Oj);var N$=A._NewObject(C.UInt32FilterCriterion,0);N$.Operator=3;N$.
ET=6;N$.A4=AeX;Bb.C0(N$);AF.Bl(Bb);var AnU=A._NewObject(C.Rating,0);var Uo;var Ly=
0;var P;for(P=0;P<AF.Cj();P=P+1){AnU.EK(P,AF);if(A._GetAutoObject(C.Helper).AEh(
AnU)){Uo=A._GetAutoObject(C.Helper).ABf(AnU);if(A._GetAutoObject(C.Converter).Ac2(
Uo)>A._GetAutoObject(C.Converter).Ac2(Ly))Ly=Uo;}}AF.Bl(Aou);return Ly;},Al$:function(
){if((A._GetAutoObject(C.Device).WeightRecordingScope===2)||(A._GetAutoObject(C.
Device).WeightRecordingScope===1))return true;else return false;},A4y:function(){
if((A._GetAutoObject(C.Device).WeightRecordingScope===2)||!A._GetAutoObject(C.Device
).WeightRecordingScope)return true;else return false;},Be$:function(AF,AHa,Ab$,Wv
,AeX){if(!AF)throw new Error(Arz);var Bb=A._NewObject(C.Filter,0);var Aou=AF.Filter;
var N6=A._NewObject(C.Int32FilterCriterion,0);N6.Operator=0;N6.ET=1;N6.A4=Ab$;Bb.
C0(N6);if(Wv>0){var Oj=A._NewObject(C.UInt32FilterCriterion,0);Oj.Operator=2;Oj.
ET=6;Oj.A4=Wv;Bb.C0(Oj);}if(AeX>0){var N$=A._NewObject(C.UInt32FilterCriterion,0
);N$.Operator=3;N$.ET=6;N$.A4=AeX;Bb.C0(N$);}AF.Bl(Bb);var L3=A._NewObject(C.Int32ArrayWrapper
,0);L3.YM(6);var P;for(P=0;P<L3.My;P=P+1)L3.Set(P,0);if(AF.Cj()>0){var Uo=AF.IX(
0,AHa);var AoN=AF.Hy(P,6);var Ad=A._NewObject(A.Core.Bu,0);Ad.Initialize(AoN);var
Ao4=Uo;var AH_=A._NewObject(A.Core.Bu,0);AH_.Initialize(Ad.JL());for(P=1;P<AF.Cj(
);P=P+1){Uo=AF.IX(P,AHa);AoN=AF.Hy(P,6);Ad.Initialize(AoN);if((Ad.Aa9()!==AH_.Aa9(
))||(Ad.Year!==AH_.Year)){L3.Set(Ao4,L3.Get(Ao4)+1);AH_.Initialize(Ad.JL());Ao4=
Uo;}else if(!!Uo&&(Uo<Ao4))Ao4=Uo;}L3.Set(Ao4,L3.Get(Ao4)+1);}AF.Bl(Aou);return L3;
},Apa:function(LY){var B;var Gp=A._NewObject(A.Core.Bu,0);Gp.Initialize(LY);Gp.AmF(
0);Gp.AmI(0);Gp.AmL(0);return((B=(Gp.JL()|0))<0)?B+0x100000000:B;},ALX:function(
LY){var B;LY=LY+86400;var Gp=A._NewObject(A.Core.Bu,0);Gp.Initialize(LY);Gp.AmF(
0);Gp.AmI(0);Gp.AmL(0);return((B=(Gp.JL()|0))<0)?B+0x100000000:B;},Bfb:function(
BxW,Bu2,Alm,AkL){var A$p=A._GetAutoObject(C.Helper).MF(BxW,Bu2);if(A$p>0)return((
AkL-Alm)/A$p)|0;return 0;},Bl$:function(Bs9,BtO){var Gp=A._NewObject(A.Core.Bu,0
);var KV=A._NewObject(A.Core.Bu,0);Gp.Initialize(Bs9);KV.Initialize(BtO);return(
Gp.Year===KV.Year)&&(Gp.Aa9()===KV.Aa9());},A3Z:function(){var Bb=A._GetAutoObject(
C.Helper).MZ();var Baq=A._NewObject(C.UInt32FilterCriterion,0);var BtX=A._GetAutoObject(
C.Helper).Y4(A._GetAutoObject(C.Device).Apx)-1;Baq.Initialize(28,2,BtX,true);Bb.
C0(Baq);var Uk=A._NewObject(C.AnimalTypeFilterCriterion,0);Uk.Initialize(14,0,1,
true);Bb.C0(Uk);if(A._GetAutoObject(C.Device).AlX){var Ayo=A._NewObject(C.UInt32FilterCriterion
,0);var AZX=A._GetAutoObject(C.Helper).DB()-21600;Ayo.Initialize(30,3,AZX,true);
Bb.C0(Ayo);}return Bb;},BkR:function(){var Jg=A._GetAutoObject(C.Device).Ao.Op();
if(Jg<=0)A.aa8("%s",AbR);else{A._GetAutoObject(C.Device).Ao.G_();A._GetAutoObject(
C.Device).Ao.Or(Jg);}Jg=A._GetAutoObject(C.Device).AfH.Op();if(Jg<=0)A.aa8("%s",
AbR);else{A._GetAutoObject(C.Device).AfH.G_();A._GetAutoObject(C.Device).AfH.Or(
Jg);}Jg=A._GetAutoObject(C.Device).Bq.Op();if(Jg<=0)A.aa8("%s",AbR);else{A._GetAutoObject(
C.Device).Bq.G_();A._GetAutoObject(C.Device).Bq.Or(Jg);}Jg=A._GetAutoObject(C.Device
).Pa.Op();if(Jg<=0)A.aa8("%s",AbR);else{A._GetAutoObject(C.Device).Pa.G_();A._GetAutoObject(
C.Device).Pa.Or(Jg);}},Bge:function(Ab$){var A9=A._GetAutoObject(C.Device).Ao.K4(
0,Ab$);return this.HF(A9);},AOU:function(L2){var AhI=A._GetAutoObject(C.Device).
Ao.Af4(22,L2);return AhI;},AMC:function(){var Bb=A._GetAutoObject(C.Helper).MZ();
var Aij=A._NewObject(C.UInt64FilterCriterion,0);Aij.Initialize(22,0,0,true);Bb.C0(
Aij);return Bb;},AMw:function(AnN,BuZ,Sz){var ZA=-1;switch(AnN){case 2:ZA=30;break;
case 3:ZA=31;break;case 10:ZA=19;break;default:A.aa8("%s%e",Sw,AnN);}if(ZA<0)return null;
var Acm=A._NewObject(C.UInt32FilterCriterion,0);Acm.Initialize(ZA,3,A._GetAutoObject(
C.Helper).DB()-BuZ,Sz);return Acm;},BkQ:function(aFilter){var AL=aFilter.D0(30,3
);if(!!AL)aFilter.QF(AL);AL=aFilter.D0(31,3);if(!!AL)aFilter.QF(AL);AL=aFilter.D0(
19,3);if(!!AL)aFilter.QF(AL);},AYT:function(Ae6,Axd,AF){if(AF.K8())return 5;if(Ae6.
VisualId<=0)switch(Axd){case 0:if(!Ae6.NaisId)return 1;break;case 1:if(!Ae6.TransponderId
)return 1;break;case 3:case 2:case 5:case 4:return 1;default:throw new Error(AFt+
Axd.toFixed());}if((!Ae6.NaisId&&!Ae6.TransponderId)&&A._GetAutoObject(C.Device).
Ao.AiX(1,Ae6.VisualId))return 2;if(!!Ae6.NaisId&&A._GetAutoObject(C.Helper).AOS(
Ae6.NaisId))return 3;if(!!Ae6.TransponderId&&A._GetAutoObject(C.Helper).AOU(Ae6.
TransponderId))return 4;return 0;},Ao8:function(Eu){Eu.DW(A._GetAutoObject(C.Device
).AnimalType);Eu.NP(A._GetAutoObject(C.Device).Breed);Eu.R8(A._GetAutoObject(C.Helper
).DB()-A._GetAutoObject(C.Helper).Atu(A._GetAutoObject(C.Device).Aiv));Eu.JM(A._GetAutoObject(
C.Device).Gender);Eu.M_(A._GetAutoObject(C.Device).WhereAbouts);},AKb:function(Q1
,Eu){var GF=0;switch(Q1){case 0:GF=A._GetAutoObject(C.Helper).Akc(Eu.NaisId);break;
case 1:GF=A._GetAutoObject(C.Helper).Akc(Eu.TransponderId);break;case 3:GF=A._GetAutoObject(
C.Device).ApH;break;case 2:GF=A._GetAutoObject(C.Device).ApI;break;case 4:case 5:
GF=A._GetAutoObject(C.Device).Ai8;break;default:throw new Error(AFu+Q1.toFixed()
);}return GF;},A8w:function(Akq,LZ,BsV,A_l,Btr){var B;var PZ=null;var WH=null;switch(
Akq){case 0:{PZ=[B=A._GetAutoObject(C.Device),B.AQe,B.AXz];WH=[B=A._GetAutoObject(
C.Device),B.AuM,B.Aw9];}break;case 1:switch(LZ){case 1:{PZ=[B=A._GetAutoObject(C.
Device),B.A5S,B.A9T];WH=[B=A._GetAutoObject(C.Device),B.AuK,B.Aw7];}break;case 0:{
PZ=[B=A._GetAutoObject(C.Device),B.A5T,B.A9U];WH=[B=A._GetAutoObject(C.Device),B.
AuL,B.Aw8];}break;case 2:{PZ=[B=A._GetAutoObject(C.Device),B.AQe,B.AXz];WH=[B=A.
_GetAutoObject(C.Device),B.AuM,B.Aw9];}break;default:throw new Error(Awx+LZ.toFixed(
));}break;default:throw new Error(AFv+Akq.toFixed());}if(!!PZ&&!!WH){PZ[2].call(
PZ[0],BsV);if((WH[1].call(WH[0])>0)&&(A_l<Btr))PZ[2].call(PZ[0],PZ[1].call(PZ[0]
)+WH[1].call(WH[0]));else if((WH[1].call(WH[0])<0)&&(A_l>0))PZ[2].call(PZ[0],PZ[
1].call(PZ[0])+WH[1].call(WH[0]));return PZ[1].call(PZ[0]);}return 0;},ASS:function(
Eu,Akq,Bs2){if(!Eu||(Bs2===true))return;switch(Akq){case 0:Eu.M8(A._GetAutoObject(
C.Device).Aux);break;case 1:switch(Eu.Gender){case 0:Eu.M8(A._GetAutoObject(C.Device
).ACo);break;case 1:Eu.M8(A._GetAutoObject(C.Device).ACn);break;case 2:Eu.M8(A._GetAutoObject(
C.Device).Aux);break;default:throw new Error(Awx+Eu.Gender.toFixed());}break;default:
throw new Error(AFv+Akq.toFixed());}},BfP:function(Q1,Eu){var result=false;switch(
Q1){case 0:result=!!Eu.NaisId;break;case 1:result=!!Eu.TransponderId;break;case 3:
case 2:case 4:case 5:result=false;break;default:throw new Error(AFu+Q1.toFixed()
);}return result;},AIl:function(Eu,A_g,Axd,Ar6,Ae0){switch(A_g){case 2:if(Ar6<=0
)A._GetAutoObject(C.Device).A5(21,true,Eu.VisualId.toFixed(),0,Ae0);else A._GetAutoObject(
C.Device).A5(48,true,(Eu.VisualId.toFixed()+Awy)+Ar6.toFixed(),0,Ae0);break;case
3:if(Ar6<=0)A._GetAutoObject(C.Device).A5(21,true,A._GetAutoObject(C.Converter).
T0(Eu.NaisId),0,Ae0);else A._GetAutoObject(C.Device).A5(48,true,(A._GetAutoObject(
C.Converter).T0(Eu.NaisId)+Awy)+Ar6.toFixed(),0,Ae0);break;case 4:if(Ar6<=0)A._GetAutoObject(
C.Device).A5(25,true,A._GetAutoObject(C.Converter).T0(Eu.TransponderId),0,Ae0);else
A._GetAutoObject(C.Device).A5(47,true,(A._GetAutoObject(C.Converter).T0(Eu.TransponderId
)+Awy)+Ar6.toFixed(),0,Ae0);break;case 1:switch(Axd){case 1:A._GetAutoObject(C.Device
).A5(42,true,A.jm,0,Ae0);break;case 0:A._GetAutoObject(C.Device).A5(43,true,A.jm
,0,Ae0);break;case 3:case 2:case 5:case 4:A._GetAutoObject(C.Device).A5(22,true,
A.jm,0,Ae0);break;default:throw new Error(AFt+Axd.toFixed());}break;case 5:A._GetAutoObject(
C.Device).A5(41,true,A._GetAutoObject(C.Device).Ao.Hz().toFixed(),0,Ae0);break;case
0:break;default:throw new Error(ATw+A_g.toFixed());}},A$T:function(A_s,LZ){var B;
var Ays=null;switch(A_s){case 0:Ays=[B=A._GetAutoObject(C.Device),B.AuM,B.Aw9];break;
case 1:switch(LZ){case 1:Ays=[B=A._GetAutoObject(C.Device),B.AuK,B.Aw7];break;case
0:Ays=[B=A._GetAutoObject(C.Device),B.AuL,B.Aw8];break;case 2:Ays=[B=A._GetAutoObject(
C.Device),B.AuM,B.Aw9];break;default:throw new Error(Awx+LZ.toFixed());}break;default:
throw new Error(ATx+A_s.toFixed());}return Ays;},A39:function(PO,BtE){var ZY=A._NewObject(
A.Core.Bu,0);ZY.Initialize(PO);var AzI=ZY.Year;var A9=A._GetAutoObject(C.Device).
Pa.K4(0,AzI);var Un=A._NewObject(C.CalfDeregistrations,0);if(A9<0){if(A._GetAutoObject(
C.Device).Pa.K8())A._GetAutoObject(C.Device).A5(51,true,A._GetAutoObject(C.Device
).Pa.Hz().toFixed(),0,null);else{Un.Gd();Un.AjP(AzI);}}else Un.EK(A9,A._GetAutoObject(
C.Device).Pa);Un.Au4(Un.Deregistrations+1);if(BtE)Un.Au3(Un.Deaths+1);Un.Cr(A._GetAutoObject(
C.Device).Pa);},AJ$:function(Ly,AkV,AkM){var AII=0;if((AkV&&(AkM===1))||(Ly===1)
)AII=1;else if((AkV&&(AkM===2))||(Ly===2))AII=2;else if(!!Ly&&(Ly!==5))AII=Ly;return AII;
},A$u:function(BtW){var B;if(A._GetAutoObject(C.Device).MeasureState===1){this.Sh.
Cv=A._GetAutoObject(C.Device).Zd;this.Sh.B1=BtW;this.Sh.AEO(this);}},AA6:function(
){var Bb=this.AMv();var Baf=A._NewObject(C.BoolFilterCriterion,0);Baf.Initialize(
38,0,true,true);Bb.C0(Baf);return Bb;},A3S:function(JU){var Bb=A._GetAutoObject(
C.Helper).MZ();if(A._GetAutoObject(C.Device).Alw){var AZB=A._GetAutoObject(C.Helper
).AMw(JU,21600,true);Bb.C0(AZB);}return Bb;},A33:function(){var Bb=A._GetAutoObject(
C.Helper).MZ();var BaF=A._NewObject(C.UInt64FilterCriterion,0);BaF.Initialize(26
,0,0,true);Bb.C0(BaF);return Bb;},A36:function(){var B;var Bb=A._GetAutoObject(C.
Helper).MZ();var Ayy=(C.WhereAboutsFilterCriterion.isPrototypeOf(B=Bb.D0(34,3))?
B:null);if(!!Ayy)Bb.QF(Ayy);var BbU=A._NewObject(C.BoolFilterCriterion,0);BbU.Initialize(
37,0,true,true);Bb.C0(BbU);return Bb;},U8:function(A1,Btx,AYc){var B;A1=Math.trunc(
A1/this.Ay2(Btx));A1%=this.Ay2(AYc);return A1;},Ay2:function(A_t){switch(A_t){case
0:return 1;case 1:return 10;case 2:return 100;case 3:return 1000;case 4:return 10000;
case 5:return 100000;case 6:return 1000000;case 7:return 10000000;case 8:return 100000000;
case 9:return 1000000000;case 10:return 10000000000;case 11:return 100000000000;
case 12:return 1000000000000;case 13:return 10000000000000;case 14:return 100000000000000;
case 15:return 1000000000000000;default:throw new Error(ATy+A_t.toFixed());}},MZ:
function(){var Bb=A._NewObject(C.Filter,0);var Bce=A._NewObject(C.BoolFilterCriterion
,0);Bce.Initialize(10,0,true,true);Bb.C0(Bce);var Ayy=A._NewObject(C.WhereAboutsFilterCriterion
,0);Ayy.Initialize(34,3,6,true);Bb.C0(Ayy);return Bb;},ApT:function(aFilter){return!
this.AA9(aFilter);},AA9:function(aFilter){var Jw=0;var Av=aFilter.AMx();while(!!
Av){if(Av.AaS===false)Jw++;Av=aFilter.AMB(Av);}return Jw;},AMv:function(){var Bb=
this.MZ();var Uk=A._NewObject(C.AnimalTypeFilterCriterion,0);Uk.Initialize(14,0,
1,true);Bb.C0(Uk);return Bb;},ABc:function(){var B;var A1o;var N8=this.Bfr();A1o=(((
B=A._GetAutoObject(C.Converter).Atq(N8))<0)?B+0x10000000000000000:B)*this.Ay2(12
);if((N8===10)&&(A._GetAutoObject(C.Device).YO>0)){var Bvl=A._GetAutoObject(C.Helper
).U8(A._GetAutoObject(C.Device).YO,10,2)*this.Ay2(8);A1o+=Bvl;}return A1o;},Bfr:
function(){var N8=0;if(A._GetAutoObject(C.Device).YO>0)N8=A._GetAutoObject(C.Converter
).AeG(A._GetAutoObject(C.Device).YO);if(!N8)N8=A._GetAutoObject(C.Converter).A4B(
A._GetAutoObject(C.Device).Language);return N8;},AOS:function(Wu){var AhI=A._GetAutoObject(
C.Device).Ao.Af4(26,Wu);return AhI;},Aje:function(Ae1){switch(Ae1){case 0:case 1:
case 2:case 3:case 4:case 5:return false;case 6:case 7:case 8:case 9:case 10:return true;
default:throw new Error(ATz+Ae1.toFixed());}},Bdn:function(Q1,Eu){var GF=0;switch(
Q1){case 1:GF=A._GetAutoObject(C.Helper).Akc(Eu.TransponderId);break;case 0:if(!
A._GetAutoObject(C.Device).EartagNrAssignmentMode)GF=A._GetAutoObject(C.Device).
Ai8;else switch(Eu.Gender){case 0:GF=A._GetAutoObject(C.Device).ApI;break;case 1:
GF=A._GetAutoObject(C.Device).ApH;break;case 2:GF=A._GetAutoObject(C.Device).Ai8;
break;default:throw new Error(AFw+Eu.Gender.toFixed());}break;default:throw new Error(
ATA+Q1.toFixed());}return GF;},BeZ:function(){var B;var Ax9=(((((((A.z2(A.abg.AgW
)+A.z2(A.abg.Colon))+OQ)+A._GetAutoObject(C.Device).AgW)+Awz)+A.z2(A.abg.Bky))+A.
z2(A.abg.Colon))+OQ)+A._GetAutoObject(A.abk.K1).BeX(((B=A._GetAutoObject(C.Device
).Qu.Timestamp)<0)?B+0x100000000:B);return Ax9;},Be0:function(){var B;var Ax9=((((((((((((((((((((((((((((
ATB+A._GetAutoObject(C.Device).Rt.ACc.toFixed())+Li)+A._GetAutoObject(C.Device).
Rt.ACk.toFixed())+Li)+A._GetAutoObject(C.Device).Rt.AEq.toFixed())+OP)+A._GetAutoObject(
C.Device).Rt.AAx)+OP)+A._GetAutoObject(A.abk.K1).Ai1(((B=A._GetAutoObject(C.Device
).Rt.Timestamp)<0)?B+0x100000000:B))+OQ)+ATC)+A._GetAutoObject(C.Device).R3.ACc.
toFixed())+Li)+A._GetAutoObject(C.Device).R3.ACk.toFixed())+Li)+A._GetAutoObject(
C.Device).R3.AEq.toFixed())+OP)+A._GetAutoObject(C.Device).R3.AAx)+OP)+A._GetAutoObject(
A.abk.K1).Ai1(((B=A._GetAutoObject(C.Device).R3.Timestamp)<0)?B+0x100000000:B))+
OQ)+ATD)+A._GetAutoObject(C.Helper).Bfu())+OP)+A._GetAutoObject(C.Device).GetCommitHash(
))+OP)+A._GetAutoObject(C.Device).GetCommitCount().toFixed())+OP)+A._GetAutoObject(
A.abk.K1).Ai1(A._GetAutoObject(C.Device).GetCommitEpoch());return Ax9;},BeY:function(
){var B;var Ax9=(((((((((((((((((((((ATE+A._GetAutoObject(C.Device).Qu.APf.toFixed(
))+Li)+A._GetAutoObject(C.Device).Qu.APg.toFixed())+Li)+A._GetAutoObject(C.Device
).Qu.APe.toFixed())+OQ)+A.z2(A.abg.A3L))+A.z2(A.abg.Colon))+N2)+A._GetAutoObject(
A.abk.K1).Ai1(((B=A._GetAutoObject(C.Device).Qu.Timestamp)<0)?B+0x100000000:B))+
Awz)+ATF)+A._GetAutoObject(C.Device).Sj.ASL.toFixed())+Li)+A._GetAutoObject(C.Device
).Sj.ASM.toFixed())+Li)+A._GetAutoObject(C.Device).Sj.ASK.toFixed())+OQ)+A.z2(A.
abg.A3L))+A.z2(A.abg.Colon))+N2)+A._GetAutoObject(A.abk.K1).Ai1(((B=A._GetAutoObject(
C.Device).Sj.Timestamp)<0)?B+0x100000000:B);return Ax9;},A34:function(AYc){var B;
var P;var Ay7=A.jm;for(P=1;P<=AYc;P=P+1)if(!!A.aaC(0,2))Ay7=Ay7+String.fromCharCode(
A.aaC(97,104)&0xFFFF);else Ay7=Ay7+String.fromCharCode(A.aaC(48,57)&0xFFFF);return Ay7;
},Aaz:function(Ee){var Axt=0;if(Ee===1)Ee=0;var A_$=this.AfP.At0(Ee);if(A_$>=0)Axt=
this.AeM.Get(A_$);return Axt;},ABe:function(Ee){var FM=0;var AzF=this.AfP.At0(Ee
);if(AzF>=0)FM=this.AeL.Get(AzF);return FM;},ABd:function(Ee){var FM=0;var AzF=this.
AfP.At0(Ee);if(AzF>=0)FM=this.AeK.Get(AzF);return FM;},A3W:function(){var Bb=this.
MZ();var Uk=A._NewObject(C.AnimalTypeFilterCriterion,0);Uk.Initialize(14,0,A._GetAutoObject(
C.Device).AAQ,true);Bb.C0(Uk);return Bb;},AOV:function(Kn){var BN=Math.trunc(Kn/
1000000000000)|0;if(!BN)return 0;else if(BN>=900)return 1;else if(!A._GetAutoObject(
C.Converter).ALo(BN))return 2;else return 3;},A38:function(){var Bb=A._GetAutoObject(
C.Helper).AMC();var Akt=A._GetAutoObject(C.Helper).Be9(3,A._GetAutoObject(C.Device
).ACf);Akt.AaS=true;Bb.C0(Akt);return Bb;},Be9:function(EE,A_f){var Av=A._NewObject(
C.UInt32FilterCriterion,0);Av.ET=4;switch(EE){case 2:{Av.Operator=3;Av.A4=A._GetAutoObject(
C.Helper).Y4(A_f);}break;case 3:{Av.Operator=2;Av.A4=A._GetAutoObject(C.Helper).
Y4(A_f-1);}break;default:A.aa8("%s%e",ATG,EE);}return Av;},Bfu:function(){return(((
A._GetAutoObject(C.Device).GetVersionMajor().toFixed()+Li)+A._GetAutoObject(C.Device
).GetVersionMinor().toFixed())+Li)+A._GetAutoObject(C.Device).GetVersionRev().toFixed(
);},Bdo:function(Q1,Eu){var GF=0;switch(Q1){case 0:GF=Eu.VisualId;break;case 2:GF=
A._GetAutoObject(C.Helper).Akc(Eu.TransponderId);break;case 1:if(!A._GetAutoObject(
C.Device).EartagNrAssignmentMode)GF=A._GetAutoObject(C.Device).Ai8;else switch(Eu.
Gender){case 0:GF=A._GetAutoObject(C.Device).ApI;break;case 1:GF=A._GetAutoObject(
C.Device).ApH;break;case 2:GF=A._GetAutoObject(C.Device).Ai8;break;default:throw new
Error(AFw+Eu.Gender.toFixed());}break;default:throw new Error(ATH+Q1.toFixed());
}return GF;},A8x:function(){var B;var IQ=null;var SI=0;if(!A._GetAutoObject(C.Device
).EartagNrAssignmentMode){IQ=[B=A._GetAutoObject(C.Device),B.Amw,B.Anx];SI=A._GetAutoObject(
C.Device).Atz;}else switch(A._GetAutoObject(C.Helper).V.Gender){case 1:{IQ=[B=A.
_GetAutoObject(C.Device),B.AuH,B.Aw5];SI=A._GetAutoObject(C.Device).AAI;}break;case
0:{IQ=[B=A._GetAutoObject(C.Device),B.AuI,B.Aw6];SI=A._GetAutoObject(C.Device).AAJ;
}break;case 2:{IQ=[B=A._GetAutoObject(C.Device),B.Amw,B.Anx];SI=A._GetAutoObject(
C.Device).Atz;}break;default:;}if(!!IQ)switch(SI){case 1:IQ[2].call(IQ[0],A._GetAutoObject(
C.Helper).V.VisualId-1);break;case 0:IQ[2].call(IQ[0],A._GetAutoObject(C.Helper).
V.VisualId+1);break;default:;}},A4z:function(Wu,Eu){return(Eu.NaisId!==Wu)&&this.
AOS(Wu);},BfY:function(L2,Eu){return(Eu.TransponderId!==L2)&&this.AOU(L2);},AMu:
function(){var Bb=A._GetAutoObject(C.Helper).A36();var Ayq=A._NewObject(C.UInt64FilterCriterion
,0);Ayq.Initialize(35,5,0,true);Bb.C0(Ayq);return Bb;},AME:function(){var Bb=A._GetAutoObject(
C.Helper).A36();var Ayq=A._NewObject(C.UInt64FilterCriterion,0);Ayq.Initialize(35
,0,0,true);Bb.C0(Ayq);return Bb;},Mx:function(AX5,Ahl){AX5.Ai(Ahl);AX5.Ap(Ahl);AX5.
X(Ahl);},A2X:function(Ahn){var B;var Z;var A0c=false;var WC=Ahn.U9(null,0x1);while(
!!WC&&(((B=WC)?B.__proto__:null)!==A.Core.Y)){Z=(A.kh.Ck.isPrototypeOf(WC)?WC:null
);if(!!Z){Z.Be(A0c);A0c=!A0c;}WC=Ahn.U9(WC,0x1);}},Aqa:function(){return this.TP;
},A5X:function(){return this.AgT;},BhL:function(){return this.ARW;},BhM:function(
){return this.ARX;},BhQ:function(){return this.AET;},_Init:function(aArg){C.AlR.
_Init.call(this,aArg);C.Animal._Init.call(this.V={I:this},0);A.Core.Bu._Init.call(
this.Aq={I:this},0);A.abm.F_._Init.call(this.Kr={I:this},0);A.abm.F_._Init.call(
this.Sh={I:this},0);C.AKv._Init.call(this.Ac1={I:this},0);C.ASB._Init.call(this.
TU={I:this},0);C.ASA._Init.call(this.TT={I:this},0);C.UT._Init.call(this.Adn={I:
this},0);C.ATa._Init.call(this.AeL={I:this},0);C.AS$._Init.call(this.AeK={I:this
},0);C.AS_._Init.call(this.AeJ={I:this},0);C.ATc._Init.call(this.AeM={I:this},0);
C.AKw._Init.call(this.AfP={I:this},0);this.__proto__=C.HelperClass;var B;this.Kr.
IF(1);this.Kr.FA(3000);this.Kr.B1=100;this.Sh.Au9(10);this.Sh.VN(5);this.Sh.IF(1
);this.Sh.FA(4000);this.Adn.B1=false;this.Adn.Cv=true;this.Adn.IF(1);this.Adn.FA(
100);this.Kr.R5=[this,this.BxX];this.Kr.Q=[this,this.BhQ,this.Bj7];this.Sh.R5=[this
,this.BxZ];this.Sh.Q=[B=A._GetAutoObject(C.Device),B.ACJ,B.AGP];this.Adn.Q=[B=A.
_GetAutoObject(C.Device),B.ACK,B.AGQ];this.Init(aArg);var Lj=this._variants();if(
Lj){this.K={};Lj._Init.call(this,aArg);}},_Done:function(){if(this.K)this.K._Done.
call(this);this.__proto__=C.AlR;this.V._Done();this.Aq._Done();this.Kr._Done();this.
Sh._Done();this.Ac1._Done();this.TU._Done();this.TT._Done();this.Adn._Done();this.
AeL._Done();this.AeK._Done();this.AeJ._Done();this.AeM._Done();this.AfP._Done();
C.AlR._Done.call(this);},_ReInit:function(){C.AlR._ReInit.call(this);this.V._ReInit(
);this.Aq._ReInit();this.Kr._ReInit();this.Sh._ReInit();this.Ac1._ReInit();this.
TU._ReInit();this.TT._ReInit();this.Adn._ReInit();this.AeL._ReInit();this.AeK._ReInit(
);this.AeJ._ReInit();this.AeM._ReInit();this.AfP._ReInit();if(this.K)this.K._ReInit.
call(this);},_Mark:function(D){var B;C.AlR._Mark.call(this,D);if((B=this.TP)&&(B.
_cycle!=D))B._Mark(B._cycle=D);if((B=this.AgT)&&(B._cycle!=D))B._Mark(B._cycle=D
);if((B=this.ARW)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.ARX)&&(B._cycle!=
D))B._Mark(B._cycle=D);if((B=this.V)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Aq
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Kr)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Sh)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ac1)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.TU)._cycle!=D)B._Mark(B._cycle=D);if((B=this.TT)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Adn)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AeL)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.AeK)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
AeJ)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AeM)._cycle!=D)B._Mark(B._cycle=D);
if((B=this.AfP)._cycle!=D)B._Mark(B._cycle=D);if(this.K)this.K._Mark(D);},_variants:
function(){return A.abt.HelperClass._variants();},K:null,_className:"Device::HelperClass"
};C.Helper={_Init:function(){C.HelperClass._Init.call(this,0);},_variants:function(
){return this;},_this:null};C.BoolFilterCriterion={A4:false,Adj:function(){var Av=
A._NewObject(C.BoolFilterCriterion,0);Av.Gt(this);return Av;},Gt:function(AL){C.
FilterCriterion.Gt.call(this,AL);var Av=(C.BoolFilterCriterion.isPrototypeOf(AL)?
AL:null);if(!!Av)this.A4=Av.A4;},Initialize:function(AX,EE,A1,Sz){this.ET=AX;this.
Operator=EE;this.A4=A1;this.AaS=Sz;return this;},_Init:function(aArg){C.FilterCriterion.
_Init.call(this,aArg);this.__proto__=C.BoolFilterCriterion;},_className:"Device::BoolFilterCriterion"
};C.UInt32FilterCriterion={A4:0,Adj:function(){var Av=A._NewObject(C.UInt32FilterCriterion
,0);Av.Gt(this);return Av;},Gt:function(AL){C.FilterCriterion.Gt.call(this,AL);var
Av=(C.UInt32FilterCriterion.isPrototypeOf(AL)?AL:null);if(!!Av)this.A4=Av.A4;},Initialize:
function(AX,EE,A1,Sz){this.ET=AX;this.Operator=EE;this.A4=A1;this.AaS=Sz;return this;
},_Init:function(aArg){C.FilterCriterion._Init.call(this,aArg);this.__proto__=C.
UInt32FilterCriterion;},_className:"Device::UInt32FilterCriterion"};C.OverlayMenu={
None:0,Home:1,AutoAction:2,MenuItemSettings:3,RatingSettings:4,WeighingSettings:
5,Options:6,AnimalSearch:7,ActionSettings:8,MeasurementReady:9,AnimalMultiInfoMenu:
10,AnimalSearchUnfiltered:11,AnimalSearchDriedOff:12,MassRecordingMenu:13,MassRecordingDefaults:
14,MassRecordingFields:15,PurchasedAnimalsListMenu:16,BirthRegistrationsListMenu:
17,LAST:18};C.EnumToString={B0:function(A6){throw new Error(ArA+A6.toFixed());},
Lh:function(A6){return this.B0(A6);},_Init:function(aArg){this.__proto__=C.EnumToString;
A.hJ++;},_Done:function(){this.__proto__=null;A.hJ--;},_ReInit:function(){},_Mark:
function(D){var B;if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:
0,_observers:null,_className:"Device::EnumToString"};C.ScreenTypeToString={B0:function(
A6){var AHZ=A6;var Bt;switch(AHZ){case 3:Bt=A.z2(A.abg.At6);break;case 34:Bt=A.z2(
A.abg.O7);break;case 35:Bt=A.z2(A.abg.SW);break;case 47:Bt=A.z2(A.abg.AMs);break;
default:Bt=this.Bma(A6);}return Bt;},Bma:function(A6){var AHZ=A6;var Bt=A.jm;switch(
AHZ){case 0:Bt=AwA;break;case 2:Bt=AFx;break;case 4:Bt=ATI;break;case 40:Bt=AFy;
break;case 39:Bt=ATJ;break;case 72:Bt=ATK;break;case 73:Bt=ATL;break;case 93:Bt=
ATM;break;case 94:Bt=AFz;break;case 74:Bt=ATN;break;case 3:Bt=AwB;break;case 6:Bt=
AFA;break;case 16:Bt=AFB;break;case 22:Bt=ATO;break;case 46:Bt=AFC;break;case 100:
Bt=ATP;break;case 99:Bt=ATQ;break;case 101:Bt=QX;break;case 17:Bt=Wk;break;case 23:
Bt=ATR;break;case 18:Bt=ATS;break;case 19:Bt=ATT;break;case 38:Bt=ATU;break;case
87:Bt=ATV;break;case 1:Bt=ATW;break;case 5:Bt=ATX;break;case 7:Bt=Ahb;break;case
92:Bt=AFD;break;case 8:Bt=ATY;break;case 9:Bt=ATZ;break;case 41:Bt=AFE;break;case
42:Bt=AFF;break;case 24:Bt=AwC;break;case 10:Bt=QY;break;case 68:Bt=AT0;break;case
21:Bt=AT1;break;case 11:Bt=AT2;break;case 29:Bt=ArB;break;case 54:Bt=AT3;break;case
30:Bt=AT4;break;case 12:Bt=AT5;break;case 13:Bt=AT6;break;case 14:Bt=AT7;break;case
15:Bt=AT8;break;case 78:Bt=ArC;break;case 79:Bt=AT9;break;case 20:Bt=AT_;break;case
37:Bt=AT$;break;case 43:Bt=AUa;break;case 44:Bt=AUb;break;case 45:Bt=AUc;break;case
25:Bt=AUd;break;case 75:Bt=AUe;break;case 67:Bt=AUf;break;case 66:Bt=AUg;break;case
64:Bt=AFG;break;case 65:Bt=ArD;break;case 77:Bt=AUh;break;case 76:Bt=AUi;break;case
95:Bt=AUj;break;case 88:Bt=AwD;break;case 26:Bt=Akl;break;case 28:Bt=Ahc;break;case
27:Bt=AwE;break;case 31:Bt=Ank;break;case 89:Bt=Ahd;break;case 34:Bt=AUk;break;case
35:Bt=AwF;break;case 32:Bt=AFH;break;case 50:Bt=AeU;break;case 55:Bt=AFI;break;case
63:Bt=Wl;break;case 62:Bt=Akm;break;case 33:Bt=Anl;break;case 36:Bt=AUl;break;case
56:Bt=AUm;break;case 86:Bt=AUn;break;case 57:Bt=AUo;break;case 47:Bt=AUp;break;case
49:Bt=ArE;break;case 48:Bt=AFJ;break;case 69:Bt=AFK;break;case 71:Bt=AUq;break;case
70:Bt=AUr;break;case 51:Bt=AUs;break;case 53:Bt=AUt;break;case 52:Bt=AUu;break;case
96:Bt=AUv;break;case 98:Bt=AFL;break;case 97:Bt=AUw;break;case 80:Bt=AwG;break;case
82:Bt=AFM;break;case 81:Bt=AFN;break;case 85:Bt=AFO;break;case 84:Bt=AFP;break;case
83:Bt=AFQ;break;case 58:Bt=AFR;break;case 60:Bt=AUx;break;case 59:Bt=AUy;break;case
61:Bt=AUz;break;case 90:Bt=AUA;break;case 91:Bt=AUB;break;case 102:Bt=AUC;break;
case 103:Bt=AUD;break;default:throw new Error(AwH+AHZ.toFixed());}return Bt;},_Init:
function(aArg){C.EnumToString._Init.call(this,aArg);this.__proto__=C.ScreenTypeToString;
},_className:"Device::ScreenTypeToString"};C.OverlayMenuToString={B0:function(A6
){var BbQ=A6;var Oe=A.jm;switch(BbQ){case 0:Oe=AFS;break;case 1:Oe=AwB;break;case
8:Oe=AUE;break;case 2:Oe=AFT;break;case 3:Oe=Ahe;break;case 4:Oe=Wm;break;case 5:
Oe=AUF;break;case 6:Oe=AbT;break;case 7:Oe=AUG;break;case 11:Oe=AUH;break;case 12:
Oe=Anm;break;case 9:Oe=AeV;break;case 10:Oe=Ann;break;case 14:Oe=AFU;break;case 15:
Oe=AUI;break;case 13:Oe=OR;break;case 16:Oe=AUJ;break;case 17:Oe=AUK;break;default:
throw new Error(AUL+BbQ.toFixed());}return Oe;},_Init:function(aArg){C.EnumToString.
_Init.call(this,aArg);this.__proto__=C.OverlayMenuToString;},_className:"Device::OverlayMenuToString"
};C.ScanStateToString={B0:function(A6){var Bcm=A6;var Bk=A.jm;switch(Bcm){case 4:
Bk=AwI;break;case 0:Bk=ArF;break;case 2:Bk=AFV;break;case 3:Bk=AUM;break;case 1:
Bk=AFW;break;default:throw new Error(AFX+Bcm.toFixed());}return Bk;},_Init:function(
aArg){C.EnumToString._Init.call(this,aArg);this.__proto__=C.ScanStateToString;},
_className:"Device::ScanStateToString"};C.MeasureStateToString={B0:function(A6){
var Baz=A6;var Bk=A.jm;switch(Baz){case 4:Bk=AwI;break;case 0:Bk=ArF;break;case 2:
Bk=AUN;break;case 1:Bk=AFW;break;case 3:Bk=AFY;break;default:throw new Error(AUO+
Baz.toFixed());}return Bk;},_Init:function(aArg){C.EnumToString._Init.call(this,
aArg);this.__proto__=C.MeasureStateToString;},_className:"Device::MeasureStateToString"
};C.TemperatureUnit={Celsius:0,Fahrenheit:1,LAST:2};C.TemperatureUnitToString={B0:
function(A6){var BcL=A6;var AoZ=A.jm;switch(BcL){case 0:AoZ=A.z2(A.abg.Bmr);break;
case 1:AoZ=A.z2(A.abg.Bms);break;default:throw new Error(AUP+BcL.toFixed());}return AoZ;
},_Init:function(aArg){C.EnumToString._Init.call(this,aArg);this.__proto__=C.TemperatureUnitToString;
},_className:"Device::TemperatureUnitToString"};C.AnimalType={DairyCalf:0,DairyCow:
1,SheepLamb:2,LAST:3};C.AnimalTypeToString={B0:function(A6){var BcC=A6;var type=
A.jm;switch(BcC){case 0:type=A.z2(A.abg.BdV);break;case 1:type=A.z2(A.abg.Bd8);break;
case 2:type=A.z2(A.abg.Bf6);break;default:throw new Error(AUQ+BcC.toFixed());}return type;
},_Init:function(aArg){C.EnumToString._Init.call(this,aArg);this.__proto__=C.AnimalTypeToString;
},_className:"Device::AnimalTypeToString"};C.Language={Default:0,German:1,Spanish:
2,French:3,Italian:4,Finnish:5,Chinese_TW:6,Turkish:7,Greek:8,Russian:9,Dutch:10
,Czech:11,Estonian:12,Bulgarian:13,Bosnian:14,Norwegian:15,Ukrainian:16,LAST:17};
C.LanguageToString={B0:function(A6){var Ayj=A6;var OX=A.jm;switch(Ayj){case 0:OX=
AFZ;break;case 10:OX=AUR;break;case 1:OX=AF0;break;case 12:OX=AF1;break;case 5:OX=
AwJ;break;case 3:OX=AUS;break;case 8:OX=AUT;break;case 13:OX=AUU;break;case 4:OX=
AUV;break;case 9:OX=AUW;break;case 2:OX=AUX;break;case 7:OX=AUY;break;case 6:OX=
AUZ;break;case 11:OX=ArG;break;case 14:OX=ArH;break;case 15:OX=AF2;break;case 16:
OX=AU0;break;default:throw new Error(AF3+Ayj.toFixed());}return OX;},Lh:function(
A6){var Ayj=A6;var Dk=A.jm;switch(Ayj){case 0:Dk=AU1;break;case 10:Dk=Wg;break;case
1:Dk=QV;break;case 12:Dk=AU2;break;case 5:Dk=Uc;break;case 3:Dk=Wd;break;case 8:
Dk=AU3;break;case 13:Dk=Wb;break;case 4:Dk=Ud;break;case 9:Dk=Su;break;case 2:Dk=
Zr;break;case 7:Dk=AeP;break;case 6:Dk=AU4;break;case 11:Dk=AU5;break;case 14:Dk=
AU6;break;case 15:Dk=St;break;case 16:Dk=JT;break;default:throw new Error(AF3+Ayj.
toFixed());}return Dk;},_Init:function(aArg){C.EnumToString._Init.call(this,aArg
);this.__proto__=C.LanguageToString;},_className:"Device::LanguageToString"};C.Gender={
Male:0,Female:1,Unknown:2,LAST:3};C.BirthType={Single:0,Twins:1,Triplets:2,Quadruplets:
3,LAST:4};C.GenderToString={B0:function(A6){var Asm=A6;var AIf=A.jm;switch(Asm){
case 0:AIf=A.z2(A.abg.Male);break;case 1:AIf=A.z2(A.abg.Female);break;case 2:AIf=
A.z2(A.abg.Unknown);break;default:throw new Error(AU7+Asm.toFixed());}return AIf;
},_Init:function(aArg){C.EnumToString._Init.call(this,aArg);this.__proto__=C.GenderToString;
},_className:"Device::GenderToString"};C.BirthTypeToString={B0:function(A6){var type=
A6;var Ae9=A.jm;switch(type){case 0:Ae9=A.z2(A.abg.Blq);break;case 1:Ae9=A.z2(A.
abg.Bmn);break;case 2:Ae9=A.z2(A.abg.Triplets);break;case 3:Ae9=A.z2(A.abg.Quadruplets
);break;default:throw new Error(AU8+type.toFixed());}return Ae9;},_Init:function(
aArg){C.EnumToString._Init.call(this,aArg);this.__proto__=C.BirthTypeToString;},
_className:"Device::BirthTypeToString"};C.SyncState={Idle:0,Init:1,Exporting:2,ImportStart:
3,Importing:4,ImportFinish:5,Ready:6,Error:7,LAST:8};C.SyncStateToString={B0:function(
A6){var BcF=A6;var Bk=A.jm;switch(BcF){case 7:Bk=AwI;break;case 0:Bk=ArF;break;case
6:Bk=AFY;break;case 2:Bk=AU9;break;case 5:Bk=AU_;break;case 3:Bk=AU$;break;case 4:
Bk=AVa;break;case 1:Bk=AVb;break;default:throw new Error(AVc+BcF.toFixed());}return Bk;
},_Init:function(aArg){C.EnumToString._Init.call(this,aArg);this.__proto__=C.SyncStateToString;
},_className:"Device::SyncStateToString"};C.RatedAttributeToString={B0:function(
A6){var Ay8=A6;switch(Ay8){case 0:return A.jm;case 1:return A.z2(A.abg.BkH);case
4:return A.z2(A.abg.BkG);case 3:return A.z2(A.abg.BkI);case 2:return A.z2(A.abg.
BkF);default:throw new Error(AF4+Ay8.toFixed());}},Lh:function(A6){var Ay8=A6;switch(
Ay8){case 0:return A.jm;case 1:return A.z2(A.abg.Feed);case 4:return A.z2(A.abg.
AEi);case 3:return A.z2(A.abg.AEj);case 2:return A.z2(A.abg.AEg);default:throw new
Error(AF4+Ay8.toFixed());}},_Init:function(aArg){C.EnumToString._Init.call(this,
aArg);this.__proto__=C.RatedAttributeToString;},_className:"Device::RatedAttributeToString"
};C.AssesmentToString={B0:function(A6){var AkA=A6;var AxA=A.jm;switch(AkA){case 0:
case 5:AxA=A.jm;break;case 3:AxA=A.z2(A.abk.Blw);break;case 2:AxA=A.z2(A.abk.Bly
);break;case 1:AxA=A.z2(A.abk.Blx);break;default:throw new Error(AVd+AkA.toFixed(
));}return AxA;},_Init:function(aArg){C.EnumToString._Init.call(this,aArg);this.
__proto__=C.AssesmentToString;},_className:"Device::AssesmentToString"};C.PopupId={
Unknown:0,SevereError:1,EnterSleep:2,About:3,WarningDataSync:4,SuccessDataSync:5
,WarningRestart:6,WarningFactorySettings:7,SuccessResetFactorySettings:8,ShutDown:
9,TechnicalDetails:10,ScanError:11,ScanNotFound:12,ScannedAnimalNotFound:13,AnimalNotFound:
14,SuccessUnregister:15,DataSynchInProgress:16,AddedToAlarm:17,RemovedFromAlarm:
18,AddedToWatch:19,RemovedFromWatch:20,AnimalIdAlreadyExists:21,MissingAnimalId:
22,SuccessCreationNewAnimals:23,AnimalCreationInProgress:24,TransponderAlreadyRegistered:
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
105,LAST:106};C.PopupState={Queued:0,Unknown:1,Displayed:2,ClosedAfterTimeOut:3,
ClosedWithOk:4,ClosedWithCancel:5,ClosedByMiddleware:6,ClosedWithYes:7,ClosedWithNo:
8,Opened:9};C.PopupContext={AD6:null,AjR:A.jm,Aka:0,PopupState:1,Id:0,Show:false
,BjT:function(E){var B;if(this.PopupState===E)return;this.PopupState=E;if(!!this.
AD6)(B=this.AD6)?B[1].call(B[0],this):null;},_Init:function(aArg){this.__proto__=
C.PopupContext;A.hJ++;},_Done:function(){this.__proto__=null;A.hJ--;},_ReInit:function(
){},_Mark:function(D){var B;if((B=this.AD6)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=
D);if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:
null,_className:"Device::PopupContext"};C.Boolean={No:0,Yes:1,LAST:2};C.BooleanToYesNo={
B0:function(A6){switch(A6){case 0:return A.z2(A.abg.No);case 1:return A.z2(A.abg.
Yes);default:return ArI+A6.toFixed();}},_Init:function(aArg){C.EnumToString._Init.
call(this,aArg);this.__proto__=C.BooleanToYesNo;},_className:"Device::BooleanToYesNo"
};C.AnimalGroupTableFields={Id:0,GroupName:1};C.AnimalGroup={GroupName:AbS,Id:0,
EK:function(Ab,AF){var Hs=C.Row.EK.call(this,Ab,AF);if(Hs&&!!AF){this.OnSetId(AF.
CE(Ab,0));this.ADb(AF.Va(Ab,1));}return Hs;},Cr:function(AF){var Hs=C.Row.Cr.call(
this,AF);if(Hs&&!!AF){var Jg=AF.Op();if(Jg<=0)A.aa8("%s",AbR);else{if(this.Ama()
)this.CH=AF.XV();AF.G$(this.CH,0,this.Id);AF.YX(this.CH,1,this.GroupName);AF.Or(
Jg);}}return Hs;},Gd:function(){C.Row.Gd.call(this);this.OnSetId(-1);},G_:function(
){C.Row.G_.call(this);this.OnSetId(0);this.ADb(A.jm);},OnSetId:function(E){if(this.
Id===E)return;this.Id=E;A.aat([this,this.Qx,this.OnSetId],0);},ADb:function(E){if(
this.GroupName===E)return;this.GroupName=E;A.aat([this,this.Bhr,this.ADb],0);},Qx:
function(){return this.Id;},Bhr:function(){return this.GroupName;},_Init:function(
aArg){C.Row._Init.call(this,aArg);this.__proto__=C.AnimalGroup;this.TableId=3;},
_className:"Device::AnimalGroup"};C.PopupIdToString={B0:function(A6){var AcE=A6;
var Ax=A.jm;var AHX;AHX=A.z2(A.abg.BmK)+OQ;switch(AcE){case 0:Ax=A.z2(A.abg.Unknown
);break;case 1:Ax=A.z2(A.abg.SevereError);break;case 58:Ax=A.z2(A.abg.BeM);break;
case 2:Ax=A.z2(A.abg.BeK);break;case 3:Ax=A.z2(A.abg.Bmw);break;case 77:Ax=A._GetAutoObject(
C.Helper).Be0();break;case 78:Ax=A._GetAutoObject(C.Helper).BeY();break;case 79:
Ax=A._GetAutoObject(C.Helper).BeZ();break;case 9:Ax=A.z2(A.abg.BmU);break;case 5:
Ax=A.z2(A.abg.SuccessDataSync);break;case 8:Ax=A.z2(A.abg.SuccessResetFactorySettings
);break;case 34:Ax=A.z2(A.abg.SuccessResetAnimalData);break;case 10:Ax=A._GetAutoObject(
C.Device).ABa();break;case 82:Ax=A.z2(A.abg.BeO);break;case 83:Ax=A.z2(A.abg.BeP
);break;case 80:Ax=A.z2(A.abg.BlH);break;case 81:Ax=A.z2(A.abg.SuccessRestoreBackup
);break;case 92:Ax=A.z2(A.abg.BdL);break;case 93:Ax=A.z2(A.abg.BkT);break;case 4:
Ax=A.z2(A.abg.WarningDataSync);break;case 7:Ax=A.z2(A.abg.BmR);break;case 33:Ax=
A.z2(A.abg.WarningResetAnimalData);break;case 6:Ax=A.z2(A.abg.WarningRestart);break;
case 27:Ax=A.z2(A.abg.WarningNoActionDefined);break;case 64:Ax=A.z2(A.abg.WarningActionNotApplicable
);break;case 28:Ax=A.z2(A.abg.WarningNoMenuItemVisible);break;case 29:Ax=A.z2(A.
abg.WarningEnterPresentationMode);break;case 30:Ax=A.z2(A.abg.WarningNoAnimalsRegistered
);break;case 41:Ax=((AHX+A.z2(A.abg.APn))+OQ)+A.z2(A.abg.Bgl);break;case 50:Ax=((
AHX+A.z2(A.abg.APn))+OQ)+A.z2(A.abg.Bgn);break;case 51:Ax=((AHX+A.z2(A.abg.APn))+
OQ)+A.z2(A.abg.Bgm);break;case 42:Ax=A.z2(A.abg.BmT);break;case 91:Ax=A.z2(A.abg.
WarningScanOverwriteNaisId);break;case 45:Ax=A.z2(A.abg.BmO);break;case 46:Ax=A.
z2(A.abg.WarningNoValidCountryCode);break;case 57:Ax=A.z2(A.abg.WarningOutdatedAnimalWeight
);break;case 52:Ax=A.z2(A.abg.WarningOutdatedAnimalWeights);break;case 53:Ax=A.z2(
A.abg.WarningWeightEvaluationSingular);break;case 56:Ax=A.z2(A.abg.WarningWeightEvaluationPlural
);break;case 11:Ax=A.z2(A.abg.ScanError);break;case 12:Ax=A.z2(A.abg.ScanNotFound
);break;case 13:Ax=A.z2(A.abg.Bdw);break;case 36:Ax=A.z2(A.abg.Bmi);break;case 14:
Ax=A.z2(A.abg.AnimalNotFound);break;case 15:Ax=A.z2(A.abg.SuccessUnregister);break;
case 35:Ax=A.z2(A.abg.SuccessUnregisterPerished);break;case 26:Ax=A.z2(A.abg.SuccessCreationNewAnimal
);break;case 23:Ax=A.z2(A.abg.SuccessCreationNewAnimals);break;case 24:Ax=A.z2(A.
abg.Bd$);break;case 49:Ax=A.z2(A.abg.EvaluationInProgress);break;case 16:Ax=A.z2(
A.abg.Bef);break;case 17:Ax=A.z2(A.abg.BlA);break;case 18:Ax=A.z2(A.abg.BlM);break;
case 19:Ax=A.z2(A.abg.BlB);break;case 20:Ax=A.z2(A.abg.BlN);break;case 54:Ax=A.z2(
A.abg.BlI);break;case 55:Ax=A.z2(A.abg.BlL);break;case 21:Ax=A.z2(A.abg.A2b);break;
case 48:Ax=(A.z2(A.abg.A2b)+OQ)+A.z2(A.abg.A2Z);break;case 22:Ax=A.z2(A.abg.Bgs);
break;case 63:Ax=A.z2(A.abg.BmP);break;case 85:Ax=A.z2(A.abg.BmQ);break;case 43:
Ax=A.z2(A.abg.Bgt);break;case 25:Ax=A.z2(A.abg.A8m);break;case 47:Ax=(A.z2(A.abg.
A8m)+OQ)+A.z2(A.abg.A2Z);break;case 31:{var BvK=(((((((((((((((((((A.z2(A.abg.Bd2
)+Awz)+A.z2(A.abg.ALj))+A.z2(A.abg.Colon))+N2)+A.z2(A.abg.Bd4))+OQ)+A.z2(A.abg.AMh
))+A.z2(A.abg.Colon))+N2)+A.z2(A.abg.BeU))+OQ)+A.z2(A.abg.ARH))+A.z2(A.abg.Colon
))+N2)+A.z2(A.abg.BkK))+OQ)+A.z2(A.abg.ARG))+A.z2(A.abg.Colon))+N2)+A.z2(A.abg.BkJ
);Ax=BvK;}break;case 32:Ax=A.z2(A.abg.Bmj);break;case 69:Ax=A.z2(A.abg.BgA);break;
case 44:Ax=A.z2(A.abg.BmS);break;case 37:Ax=A.z2(A.abg.WarningResetWeightSettings
);break;case 38:Ax=A.z2(A.abg.WarningResetTempThresholds);break;case 39:Ax=A.z2(
A.abg.BkA);break;case 76:Ax=(A.z2(A.abg.A2A)+OQ)+A.z2(A.abg.ARJ);break;case 40:Ax=
A.z2(A.abg.BlJ);break;case 75:Ax=A.z2(A.abg.BlC);break;case 59:Ax=A.z2(A.abg.QuestionAddAnotherCalfMultiples
);break;case 62:Ax=A.z2(A.abg.BlD);break;case 97:Ax=A.z2(A.abg.BlE);break;case 60:
Ax=A.z2(A.abg.BlF);break;case 99:Ax=A.z2(A.abg.BlG);break;case 61:Ax=A.z2(A.abg.
BlO);break;case 105:Ax=A.z2(A.abg.BlP);break;case 65:Ax=A.z2(A.abg.SuccessClearAnimalLoss
);break;case 66:Ax=A.z2(A.abg.WarningNoActionsForAnimalLoss);break;case 67:Ax=A.
z2(A.abg.SuccessLinkTransponder);break;case 86:Ax=A.z2(A.abg.SuccessUnlinkTransponder
);break;case 68:Ax=A.z2(A.abg.BlK);break;case 70:Ax=A.z2(A.abg.BeQ);break;case 71:
Ax=A.z2(A.abg.BlS);break;case 72:Ax=A.z2(A.abg.BlT);break;case 98:Ax=A.z2(A.abg.
BeS);break;case 101:Ax=A.z2(A.abg.BlU);break;case 100:Ax=A.z2(A.abg.BlV);break;case
88:Ax=A.z2(A.abg.BeR);break;case 89:Ax=A.z2(A.abg.BlQ);break;case 90:Ax=A.z2(A.abg.
BlR);break;case 73:Ax=A.z2(A.abg.WarningNoPremisesID);break;case 74:Ax=A.z2(A.abg.
WarningNoFlashDrivePresent);break;case 95:Ax=A.z2(A.abg.WarningNoBackupPathPresent
);break;case 94:Ax=A.z2(A.abg.WarningNoBackupFilePresent);break;case 84:Ax=A.z2(
A.abg.Be7);break;case 87:Ax=A.z2(A.abg.BmW);break;case 96:Ax=A.z2(A.abg.BmN);break;
case 103:Ax=A.z2(A.abg.WarningParsedDateInFutureInvalid);break;case 102:Ax=A.z2(
A.abg.WarningParsingDateFailed);break;case 104:Ax=A.z2(A.abg.WarningParsingNaisIdFailed
);break;default:throw new Error(AwK+AcE.toFixed());}return Ax;},Lh:function(A6){
var AcE=A6;var Ax=A.jm;switch(AcE){case 0:Ax=AF5;break;case 1:Ax=AF6;break;case 58:
Ax=AwL;break;case 2:Ax=AwM;break;case 3:Ax=AF7;break;case 77:Ax=AVe;break;case 78:
Ax=AVf;break;case 79:Ax=AVg;break;case 9:Ax=AF8;break;case 5:Ax=AVh;break;case 8:
Ax=AVi;break;case 34:Ax=AVj;break;case 80:Ax=AVk;break;case 81:Ax=AVl;break;case
92:Ax=AVm;break;case 93:Ax=AVn;break;case 82:Ax=AVo;break;case 83:Ax=AwN;break;case
10:Ax=AVp;break;case 4:Ax=AVq;break;case 7:Ax=AwO;break;case 33:Ax=ArJ;break;case
6:Ax=Zs;break;case 27:Ax=ArK;break;case 64:Ax=AVr;break;case 28:Ax=AVs;break;case
29:Ax=AVt;break;case 30:Ax=AF9;break;case 41:Ax=AVu;break;case 50:Ax=AF_;break;case
51:Ax=AVv;break;case 42:Ax=AVw;break;case 91:Ax=AVx;break;case 45:Ax=ArL;break;case
46:Ax=AVy;break;case 57:Ax=AVz;break;case 52:Ax=AF$;break;case 53:Ax=AVA;break;case
56:Ax=AVB;break;case 11:Ax=AVC;break;case 12:Ax=AVD;break;case 13:Ax=AbU;break;case
36:Ax=AVE;break;case 14:Ax=AVF;break;case 15:Ax=AVG;break;case 35:Ax=AVH;break;case
26:Ax=AGa;break;case 23:Ax=AVI;break;case 24:Ax=AVJ;break;case 49:Ax=AVK;break;case
16:Ax=AVL;break;case 17:Ax=AVM;break;case 18:Ax=AVN;break;case 19:Ax=AGb;break;case
20:Ax=AVO;break;case 54:Ax=AVP;break;case 55:Ax=AVQ;break;case 21:Ax=AGc;break;case
48:Ax=AGd;break;case 22:Ax=AVR;break;case 63:Ax=AVS;break;case 43:Ax=AVT;break;case
85:Ax=AVU;break;case 25:Ax=QZ;break;case 47:Ax=ArM;break;case 31:Ax=AGe;break;case
32:Ax=AGf;break;case 69:Ax=Ano;break;case 44:Ax=Anp;break;case 37:Ax=AwP;break;case
38:Ax=AVV;break;case 39:Ax=AGg;break;case 76:Ax=AVW;break;case 40:Ax=AVX;break;case
75:Ax=AVY;break;case 59:Ax=AVZ;break;case 62:Ax=AV0;break;case 97:Ax=AV1;break;case
60:Ax=AV2;break;case 99:Ax=AV3;break;case 65:Ax=AV4;break;case 61:Ax=AV5;break;case
105:Ax=AV6;break;case 66:Ax=AV7;break;case 67:Ax=AV8;break;case 86:Ax=AV9;break;
case 68:Ax=AV_;break;case 70:Ax=AV$;break;case 71:Ax=AWa;break;case 72:Ax=Anq;break;
case 98:Ax=AGh;break;case 101:Ax=AWb;break;case 100:Ax=AGi;break;case 88:Ax=AGj;
break;case 89:Ax=Zt;break;case 90:Ax=AGk;break;case 73:Ax=AWc;break;case 74:Ax=AGl;
break;case 95:Ax=AWd;break;case 94:Ax=AwQ;break;case 84:Ax=AWe;break;case 87:Ax=
AWf;break;case 96:Ax=AwR;break;case 103:Ax=AWg;break;case 102:Ax=AWh;break;case 104:
Ax=AWi;break;default:throw new Error(AwK+AcE.toFixed());}return Ax;},_Init:function(
aArg){C.EnumToString._Init.call(this,aArg);this.__proto__=C.PopupIdToString;},_className:
"Device::PopupIdToString"};C.PopupParamSeparator=";";C.RatingMode={Basic:0,Extended:
1,LAST:2};C.TransponderType={UNDEFINED:0,AnimalId:1,FarmId:2,GroupId:3,PersonId:
4,LAST:5};C.TransponderProtocol={UNDEFINED:0,FDX:1,HDX:2,HDX_URBAN:3,LAST:4};C.TransponderTypeToString={
B0:function(A6){var BcW=A6;var type=A.jm;switch(BcW){case 1:type=AGm;break;case 2:
type=Anr;break;case 3:type=AGn;break;case 4:type=AWj;break;case 0:type=AwA;break;
default:throw new Error(AGo+BcW.toFixed());}return type;},_Init:function(aArg){C.
EnumToString._Init.call(this,aArg);this.__proto__=C.TransponderTypeToString;},_className:
"Device::TransponderTypeToString"};C.TransponderProtocolToString={B0:function(A6
){var BcV=A6;var Ay5=A.jm;switch(BcV){case 1:Ay5=AGp;break;case 2:Ay5=Akn;break;
case 3:Ay5=AWk;break;case 0:Ay5=AwA;break;default:throw new Error(Ans+BcV.toFixed(
));}return Ay5;},_Init:function(aArg){C.EnumToString._Init.call(this,aArg);this.
__proto__=C.TransponderProtocolToString;},_className:"Device::TransponderProtocolToString"
};C.Transponder={Id:0,TransponderProtocol:0,TransponderType:0,ARe:function(E){if(
this.TransponderType===E)return;this.TransponderType=E;A.aat([this,this.Bh2,this.
ARe],0);},ARd:function(E){if(this.TransponderProtocol===E)return;this.TransponderProtocol=
E;A.aat([this,this.Bh1,this.ARd],0);},OnSetId:function(E){if(this.Id===E)return;
this.Id=E;A.aat([this,this.Qx,this.OnSetId],0);},AMG:function(){return A._GetAutoObject(
C.Converter).Bmh(this.Id);},Bfe:function(){return A._GetAutoObject(C.Converter).
Av_(this.Id);},Bh2:function(){return this.TransponderType;},Bh1:function(){return this.
TransponderProtocol;},Qx:function(){return this.Id;},_Init:function(aArg){this.__proto__=
C.Transponder;A.hJ++;},_Done:function(){this.__proto__=null;A.hJ--;},_ReInit:function(
){},_Mark:function(D){var B;if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:
null,_cycle:0,_observers:null,_className:"Device::Transponder"};C.RatingModeToString={
B0:function(A6){var Uw=A6;var Np=A.jm;switch(Uw){case 0:Np=A.z2(A.abg.Basic);break;
case 1:Np=A.z2(A.abg.Extended);break;default:throw new Error(AWl+Uw.toFixed());}
return Np;},_Init:function(aArg){C.EnumToString._Init.call(this,aArg);this.__proto__=
C.RatingModeToString;},_className:"Device::RatingModeToString"};C.TableRowsCount={
_Init:function(aArg){this.__proto__=C.TableRowsCount;A.hJ++;},_Done:function(){this.
__proto__=null;A.hJ--;},_ReInit:function(){},_Mark:function(D){var B;if((B=this.
I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:
"Device::TableRowsCount"};C.MassUnit={Kilogramm:0,Pound:1,LAST:2};C.MassUnitToString={
B0:function(A6){var Baw=A6;var AoZ=A.jm;switch(Baw){case 0:AoZ=A.z2(A.abg.Bf4);break;
case 1:AoZ=A.z2(A.abg.Pound);break;default:throw new Error(AGq+Baw.toFixed());}return AoZ;
},_Init:function(aArg){C.EnumToString._Init.call(this,aArg);this.__proto__=C.MassUnitToString;
},_className:"Device::MassUnitToString"};C.MinWeightGain=20;C.MaxWeightGain=2000;
C.WeightGainStep=10;C.Int32ArrayWrapper={My:10,Array:A.aan(10,0,null),YM:function(
E){if(this.My===E)return;if(E>10)throw new Error(AGr);this.My=E;},Set:function(aIndex
,AI){if((aIndex<0)||(aIndex>=this.My))throw new Error(AGs);this.Array.Set(aIndex
,AI);},Get:function(aIndex){if((aIndex<0)||(aIndex>=this.My))throw new Error(AGs
);return this.Array.Get(aIndex);},Al1:function(){var HS=0;var P;for(P=0;P<this.My;
P=P+1)HS=HS+this.Get(P);return HS;},toString:function(){var A0a=this.Array.Get(0
).toFixed();var P;for(P=1;P<this.My;P=P+1)A0a=(A0a+OP)+this.Array.Get(P).toFixed(
);return A0a;},EK:function(aString){var IN=aString.indexOf(String.fromCharCode(0x2C
),0);var AY1=A.jm;var P=0;while(P<10){if(aString===A.jm)this.Array.Set(P,0);else{
if(IN===-1){AY1=aString;aString=A.jm;}else{AY1=A.aaX(aString,IN);aString=A.aa3(aString
,0,IN+1);}this.Array.Set(P,A.vQ(AY1,0,10));IN=aString.indexOf(String.fromCharCode(
0x2C),0);}P=P+1;}if(aString!==A.jm)A.aa8("%s",AWm);},Cr:function(){},G_:function(
){var P;for(P=0;P<this.My;P=P+1)this.Set(P,0);},At0:function(A1){var P=0;while(P<
this.My){if(this.Array.Get(P)===A1)return P;P=P+1;}return-1;},Hh:function(){var P=
0;var max=-1;while(P<this.My){if(this.Array.Get(P)>max)max=this.Array.Get(P);P=P+
1;}return max;},_Init:function(aArg){(this.Array=[]).__proto__=C.Int32ArrayWrapper.
Array;this.__proto__=C.Int32ArrayWrapper;A.hJ++;},_Done:function(){this.__proto__=
null;A.hJ--;},_ReInit:function(){},_Mark:function(D){var B;if((B=this.I)&&(B._cycle
!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:"Device::Int32ArrayWrapper"
};C.ActionToString={B0:function(A6){var AxW=A6;var EL=A.jm;switch(AxW){case 4:EL=
A.z2(A.abg.Alarm);break;case 256:EL=A.z2(A.abg.Weighing);break;case 128:EL=A.z2(
A.abg.A3x);break;case 16:EL=A.z2(A.abg.AKc);break;case 1:EL=A.z2(A.abg.Temperature
);break;case 32:EL=A.z2(A.abg.AnimalLoss);break;case 2:EL=A.z2(A.abg.Rating);break;
case 8:EL=A.z2(A.abg.AqM);break;case 64:EL=A.z2(A.abg.Unregister);break;case 512:
EL=A.z2(A.abg.APH);break;case 1024:EL=A.z2(A.abg.LinkTransponder);break;case 262144:
EL=A.z2(A.abg.UnlinkTransponder);break;case 2048:EL=A.z2(A.abg.O7);break;case 4096:
EL=A.z2(A.abg.Calving);break;case 8192:EL=A.z2(A.abg.DryOff);break;case 16384:EL=
A.z2(A.abg.A4G);break;case 32768:EL=A.z2(A.abg.AAj);break;case 524288:EL=A.z2(A.
abg.AAl);break;case 65536:EL=A.z2(A.abg.Delete);break;case 131072:EL=A.z2(A.abg.
A4H);break;case 0:EL=A.z2(A.abg.A44);break;default:throw new Error(AwS+AxW.toFixed(
));}return EL;},Lh:function(A6){var AxW=A6;var EL=A.jm;switch(AxW){case 4:EL=A.z2(
A.abg.Alarm);break;case 256:EL=A.z2(A.abg.Weighing);break;case 128:EL=A.z2(A.abg.
A3x);break;case 16:EL=A.z2(A.abg.AKc);break;case 1:EL=A.z2(A.abg.Temperature);break;
case 32:EL=A.z2(A.abg.AnimalLoss);break;case 2:EL=A.z2(A.abg.Rating);break;case 8:
EL=A.z2(A.abg.AqM);break;case 64:EL=A.z2(A.abg.Unregister);break;case 512:EL=A.z2(
A.abg.APH);break;case 1024:EL=A.z2(A.abg.LinkTransponder);break;case 262144:EL=A.
z2(A.abg.UnlinkTransponder);break;case 2048:EL=A.z2(A.abg.O7);break;case 4096:EL=
A.z2(A.abg.Calving);break;case 8192:EL=A.z2(A.abg.DryOff);break;case 16384:EL=A.
z2(A.abg.A4F);break;case 32768:EL=A.z2(A.abg.AAj);break;case 524288:EL=A.z2(A.abg.
AAl);break;case 65536:EL=A.z2(A.abg.Delete);break;case 131072:EL=A.z2(A.abg.A4F);
break;case 0:EL=A.z2(A.abg.A44);break;default:throw new Error(AwS+AxW.toFixed());
}return EL;},_Init:function(aArg){C.EnumToString._Init.call(this,aArg);this.__proto__=
C.ActionToString;},_className:"Device::ActionToString"};C.ACTIONS_COUNT=19;C.PopupTimeout=
2000;C.ITable={Filter:null,Id:2,CE:function(Ab,AX){return 0;},Va:function(Ab,AX){
return A.jm;},Ajw:function(H){A.vv(this,0);A.ow([this,this.Eo],this);},HW:function(
Ab,AX){return false;},Hy:function(Ab,AX){return this.RQ(Ab,AX);},OnSetId:function(
E){if(this.Id===E)return;this.Id=E;},Cj:function(){return 0;},Bl:function(E){if(
this.Filter===E)return;this.Filter=E;A.aat([this,this.Fy,this.FD],0);},FD:function(
An){this.Bl(An);},IX:function(Ab,AX){var Bxe=this.Vb(Ab,AX);return A._GetAutoObject(
C.Converter).A8p(Bxe);},Vb:function(Ab,AX){return 0;},RQ:function(Ab,AX){return 0;
},A35:function(Ab,AX){return this.CE(Ab,AX);},Op:function(){var Jg=0;var BxY=this.
Id;return Jg;},Or:function(AnI){var Hs=0;var BxY=this.Id;return Hs===1;},XV:function(
){return-1;},YZ:function(Ab,AX,CX){return false;},G$:function(Ab,AX,CX){return false;
},YY:function(Ab,AX,CX){return false;},Nb:function(Ab,AX,CX){return false;},YX:function(
Ab,AX,CX){return false;},Abu:function(Ab,AX,CX){return this.YY(Ab,AX,CX);},Aj1:function(
Ab,AX,CX){var Bxf=A._GetAutoObject(C.Converter).Ac2(CX);return this.YZ(Ab,AX,Bxf
);},A72:function(Ab,AX,CX){return this.G$(Ab,AX,CX);},AMz:function(Ab,AX){return this.
CE(Ab,AX);},Bfc:function(Ab,AX){return this.CE(Ab,AX);},Bla:function(Ab,AX,CX){return this.
G$(Ab,AX,CX);},Bk8:function(Ab,AX,CX){return this.G$(Ab,AX,CX);},K4:function(aColumn
,A1){return-1;},AlZ:function(Ab,AX){return this.CE(Ab,AX);},Bk6:function(Ab,AX,CX
){return this.G$(Ab,AX,CX);},AA_:function(Ab,AX){return this.CE(Ab,AX);},AR3:function(
Ab,AX,N5){return this.G$(Ab,AX,N5);},Eo:function(H){this.Buq();},Buq:function(){
return-1;},LD:function(Ab,AX){return 0;},TQ:function(Ab,AX,CX){return false;},Ai0:
function(aColumn,A1){return-1;},G_:function(){return false;},Bfd:function(Ab,AX){
var Bxg=this.CE(Ab,AX);return A._GetAutoObject(C.Converter).BfC(Bxg);},Bfg:function(
Ab,AX){return this.CE(Ab,AX);},AMI:function(Ab,AX){return this.CE(Ab,AX);},Bk_:function(
Ab,AX,CX){var Bxh=A._GetAutoObject(C.Converter).A2H(CX);return this.G$(Ab,AX,Bxh
);},Bk$:function(Ab,AX,CX){return this.G$(Ab,AX,CX);},Blg:function(Ab,AX,CX){return this.
G$(Ab,AX,CX);},AiX:function(aColumn,A1){return false;},Af4:function(aColumn,A1){
return false;},Bfq:function(Ab,AX){return this.CE(Ab,AX);},Ble:function(Ab,AX,CX
){return this.G$(Ab,AX,CX);},K8:function(){return this.Qd()>=this.Hz();},Hz:function(
){return 0;},AaA:function(){return-1;},Qd:function(){return 0;},Fy:function(){return this.
Filter;},_Init:function(aArg){this.__proto__=C.ITable;A.hJ++;},_Done:function(){
this.__proto__=null;A.hJ--;},_ReInit:function(){},_Mark:function(D){var B;if((B=
this.Filter)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.I)&&(B._cycle!=D))B._Mark(
B._cycle=D);},I:null,_cycle:0,_observers:null,_className:"Device::ITable"};C.MaxAutoActionsCount=
4;C.WeightRecordingMode={Automatic:0,Manual:1,LAST:2};C.WeightRecordingModeToString={
B0:function(A6){var Uw=A6;var Np=A.jm;switch(Uw){case 0:Np=A.z2(A.abg.Automatic);
break;case 1:Np=A.z2(A.abg.Manual);break;default:throw new Error(AWn+Uw.toFixed(
));}return Np;},_Init:function(aArg){C.EnumToString._Init.call(this,aArg);this.__proto__=
C.WeightRecordingModeToString;},_className:"Device::WeightRecordingModeToString"
};C.BooleanToAutoOnOff={B0:function(A6){switch(A6){case 0:return A.z2(A.abg.Off);
case 1:return A.z2(A.abg.Z$);default:return ArI+A6.toFixed();}},_Init:function(aArg
){C.EnumToString._Init.call(this,aArg);this.__proto__=C.BooleanToAutoOnOff;},_className:
"Device::BooleanToAutoOnOff"};C.WeightStep=100;C.WeightRecordingScope={CurrentWeightOnly:
0,BirthWeightOnly:1,BirthAndCurrentWeight:2,NoWeightRecording:3,LAST:4};C.WeightRecordingScopeToString={
B0:function(A6){var Bcn=A6;var Azg=A.jm;switch(Bcn){case 0:Azg=A.z2(A.abg.Beb);break;
case 1:Azg=A.z2(A.abg.BdR);break;case 2:Azg=A.z2(A.abg.BdO);break;case 3:Azg=A.z2(
A.abg.BgQ);break;default:throw new Error(AWo+Bcn.toFixed());}return Azg;},_Init:
function(aArg){C.EnumToString._Init.call(this,aArg);this.__proto__=C.WeightRecordingScopeToString;
},_className:"Device::WeightRecordingScopeToString"};C.BodyTemperature={Undertemperature:
0,Normal:1,Elevated:2,Fever:3,LAST:4};C.JD={AcV:0,Temperature:1,Rating:2,Ag8:3,Byu:
4,By_:5,BBO:6,BzL:7,BAz:8,Bzj:9,BAy:10,BAY:11,LAST:12};C.AnimalListContentToString={
B0:function(A6){var A_0=A6;var Wx=A.jm;switch(A_0){case 0:Wx=AWp;break;case 2:Wx=
AWq;break;case 1:Wx=AWr;break;case 3:Wx=AWs;break;case 4:Wx=AWt;break;case 5:Wx=
AWu;break;case 6:Wx=AWv;break;case 7:Wx=AWw;break;case 8:Wx=AWx;break;case 9:Wx=
AWy;break;case 10:Wx=AWz;break;case 11:Wx=AWA;break;default:throw new Error(AGt+
A_0.toFixed());}return Wx;},_Init:function(aArg){C.EnumToString._Init.call(this,
aArg);this.__proto__=C.AnimalListContentToString;},_className:"Device::AnimalListContentToString"
};C.GenderFilterCriterion={A4:0,Adj:function(){var Av=A._NewObject(C.GenderFilterCriterion
,0);Av.Gt(this);return Av;},Gt:function(AL){C.FilterCriterion.Gt.call(this,AL);var
Av=(C.GenderFilterCriterion.isPrototypeOf(AL)?AL:null);if(!!Av)this.A4=Av.A4;},_Init:
function(aArg){C.FilterCriterion._Init.call(this,aArg);this.__proto__=C.GenderFilterCriterion;
},_className:"Device::GenderFilterCriterion"};C.AnimalTypeFilterCriterion={A4:0,
Adj:function(){var Av=A._NewObject(C.AnimalTypeFilterCriterion,0);Av.Gt(this);return Av;
},Gt:function(AL){C.FilterCriterion.Gt.call(this,AL);var Av=(C.AnimalTypeFilterCriterion.
isPrototypeOf(AL)?AL:null);if(!!Av)this.A4=Av.A4;},Initialize:function(AX,EE,A1,
Sz){this.ET=AX;this.Operator=EE;this.A4=A1;this.AaS=Sz;return this;},_Init:function(
aArg){C.FilterCriterion._Init.call(this,aArg);this.__proto__=C.AnimalTypeFilterCriterion;
},_className:"Device::AnimalTypeFilterCriterion"};C.ByG={Aip:0,ByF:1,BAk:2,A7K:3
,A2Q:4,BBx:5,By9:6,BBw:7,LinkTransponder:8,O7:9,Weighing:10,Calving:11,LinkNaisId:
12,BAX:13,ClearBirthNoticePending:14,DeleteAnimal:15,ScanNaisId:16,Edit:17,ClearPurchaseNoticePending:
18};C.AutoRegistrationModeToString={B0:function(A6){var Uw=A6;var Np=A.jm;switch(
Uw){case 0:Np=A.z2(A.abg.Bd5);break;case 1:Np=A.z2(A.abg.BfG);break;case 2:Np=A.
z2(A.abg.Off);break;default:throw new Error(Zu+Uw.toFixed());}return Np;},_Init:
function(aArg){C.EnumToString._Init.call(this,aArg);this.__proto__=C.AutoRegistrationModeToString;
},_className:"Device::AutoRegistrationModeToString"};C.AutoRegistrationMode={UserConfirmed:
0,Background:1,Off:2,LAST:3};C.AssessmentFilterCriterion={A4:0,Adj:function(){var
Av=A._NewObject(C.AssessmentFilterCriterion,0);Av.Gt(this);return Av;},Gt:function(
AL){C.FilterCriterion.Gt.call(this,AL);var Av=(C.AssessmentFilterCriterion.isPrototypeOf(
AL)?AL:null);if(!!Av)this.A4=Av.A4;},Initialize:function(AX,EE,A1,Sz){this.ET=AX;
this.Operator=EE;this.A4=A1;this.AaS=Sz;return this;},_Init:function(aArg){C.FilterCriterion.
_Init.call(this,aArg);this.__proto__=C.AssessmentFilterCriterion;},_className:"Device::AssessmentFilterCriterion"
};C.D3={AcV:0,Temperature:1,Ag8:2,Rating:3,LAST:4};C.FactoryResetScope={DeviceAndAnimalData:
0,AnimalDataOnly:1,LAST:2};C.FactoryResetScopeToString={B0:function(A6){switch(A6
){case 0:return A.z2(A.abg.Bdl);case 1:return A.z2(A.abg.AnimalDataOnly);default:
return AWB+A6.toFixed();}},_Init:function(aArg){C.EnumToString._Init.call(this,aArg
);this.__proto__=C.FactoryResetScopeToString;},_className:"Device::FactoryResetScopeToString"
};C.ASB={Cr:function(){A._GetAutoObject(C.Device).AqF(this.toString());},Init:function(
aArg){var B;A.za([this,this.BbA],[B=A._GetAutoObject(C.Device),B.A56,B.A9Y],0);this.
BbA(this);},BbA:function(H){this.EK(A._GetAutoObject(C.Device).AEZ);A.vv(this,0);
},_Init:function(aArg){C.Int32ArrayWrapper._Init.call(this,aArg);this.__proto__=
C.ASB;this.YM(3);this.Init(aArg);},_className:"Device::TemperaturesLowClass"};C.
ASA={Init:function(aArg){var B;A.za([this,this.Bby],[B=A._GetAutoObject(C.Device
),B.A55,B.A9X],0);this.Bby(this);},Cr:function(){A._GetAutoObject(C.Device).AqE(
this.toString());},Bby:function(H){this.EK(A._GetAutoObject(C.Device).AEY);A.vv(
this,0);},_Init:function(aArg){C.Int32ArrayWrapper._Init.call(this,aArg);this.__proto__=
C.ASA;this.YM(3);this.Init(aArg);},_className:"Device::TemperaturesHighClass"};C.
AKv={Init:function(aArg){var B;A.za([this,this.Ba4],[B=A._GetAutoObject(C.Device
),B.A5v,B.A9G],0);this.Ba4(this);},Ba4:function(H){this.EK(A._GetAutoObject(C.Device
).AzT);A.vv(this,0);},_Init:function(aArg){C.Int32ArrayWrapper._Init.call(this,aArg
);this.__proto__=C.AKv;this.YM(3);this.Init(aArg);},_className:"Device::AnimalTypesClass"
};C.UInt64FilterCriterion={A4:0,Adj:function(){var Av=A._NewObject(C.UInt64FilterCriterion
,0);Av.Gt(this);return Av;},Gt:function(AL){C.FilterCriterion.Gt.call(this,AL);var
Av=(C.UInt64FilterCriterion.isPrototypeOf(AL)?AL:null);if(!!Av)this.A4=Av.A4;},Initialize:
function(AX,EE,A1,Sz){this.ET=AX;this.Operator=EE;this.A4=A1;this.AaS=Sz;return this;
},_Init:function(aArg){C.FilterCriterion._Init.call(this,aArg);this.__proto__=C.
UInt64FilterCriterion;},_className:"Device::UInt64FilterCriterion"};C.BooleanToAssignedUnassignedString={
B0:function(A6){switch(A6){case 0:return A.z2(A.abg.Ajv);case 1:return A.z2(A.abg.
Bdm);default:return ArI+A6.toFixed();}},_Init:function(aArg){C.EnumToString._Init.
call(this,aArg);this.__proto__=C.BooleanToAssignedUnassignedString;},_className:
"Device::BooleanToAssignedUnassignedString"};C.De={UNDEFINED:0,AT:1,BA:2,BE:3,ByL:
4,By0:5,By1:6,By2:7,By3:8,By4:9,Bzc:10,Bzd:11,Bzk:12,Bzl:13,BzA:14,FR:15,GR:16,BzN:
17,BzO:18,BzZ:19,Bz0:20,Bz5:21,Bz6:22,Bz7:23,Bz8:24,BAc:25,BAq:26,BAr:27,BAF:28,
BAG:29,BAV:30,BAW:31,BBa:32,BBb:33,BBc:34,BBq:35,BBr:36,BBH:37,A8q:38,BBI:39,LAST:
40};C.CountryToString={B0:function(A6){var N8=A6;var Fq=A.jm;switch(N8){case 1:Fq=
A.z2(A.abn.BdA);break;case 2:Fq=A.z2(A.abn.BdS);break;case 3:Fq=A.z2(A.abn.BdN);
break;case 4:Fq=A.z2(A.abn.BdU);break;case 5:Fq=A.z2(A.abn.BdW);break;case 6:Fq=
A.z2(A.abn.BlZ);break;case 7:Fq=A.z2(A.abn.BdZ);break;case 8:Fq=A.z2(A.abn.Bec);
break;case 9:Fq=A.z2(A.abn.Bed);break;case 10:Fq=A.z2(A.abn.Be8);break;case 11:Fq=
A.z2(A.abn.Bek);break;case 12:Fq=A.z2(A.abn.BeN);break;case 13:Fq=A.z2(A.abn.Blt
);break;case 14:Fq=A.z2(A.abn.BeW);break;case 15:Fq=A.z2(A.abn.Be4);break;case 16:
Fq=A.z2(A.abn.Bfy);break;case 17:Fq=A.z2(A.abn.Bea);break;case 18:Fq=A.z2(A.abn.
BfD);break;case 19:Fq=A.z2(A.abn.BfN);break;case 20:Fq=A.z2(A.abn.BfZ);break;case
21:Fq=A.z2(A.abn.Bf1);break;case 22:Fq=A.z2(A.abn.Bgd);break;case 23:Fq=A.z2(A.abn.
Bgh);break;case 24:Fq=A.z2(A.abn.Bgb);break;case 25:Fq=A.abn.Bgj;break;case 26:Fq=
A.z2(A.abn.BgB);break;case 27:Fq=A.z2(A.abn.BgR);break;case 28:Fq=A.z2(A.abn.Bkt
);break;case 29:Fq=A.z2(A.abn.Bku);break;case 30:Fq=A.z2(A.abn.BkU);break;case 31:
Fq=A.z2(A.abn.BkW);break;case 32:Fq=A.z2(A.abn.BlY);break;case 33:Fq=A.z2(A.abn.
Bls);break;case 34:Fq=A.z2(A.abn.Blr);break;case 35:Fq=A.z2(A.abn.Bmm);break;case
36:Fq=A.z2(A.abn.Bl8);break;case 37:Fq=A.z2(A.abn.Bmq);break;case 38:Fq=A.z2(A.abn.
A8q);break;case 39:Fq=A.z2(A.abn.Bmp);break;case 0:Fq=Ahf;break;default:throw new
Error(Awr+N8.toFixed());}return Fq;},Lh:function(A6){var N8=A6;var BN=A.jm;switch(
N8){case 1:BN=Ss;break;case 2:BN=Zg;break;case 3:BN=T$;break;case 4:BN=Wb;break;
case 5:BN=IM;break;case 6:BN=Wi;break;case 7:BN=Ua;break;case 8:BN=Zi;break;case
9:BN=Ub;break;case 10:BN=QV;break;case 11:BN=Zj;break;case 12:BN=Zk;break;case 13:
BN=Zr;break;case 14:BN=Uc;break;case 15:BN=Wd;break;case 16:BN=Zl;break;case 17:
BN=Wc;break;case 18:BN=OO;break;case 19:BN=PK;break;case 20:BN=Ud;break;case 21:
BN=Zm;break;case 22:BN=Zn;break;case 23:BN=Zo;break;case 24:BN=We;break;case 25:
BN=Wf;break;case 26:BN=Wg;break;case 27:BN=St;break;case 28:BN=Zp;break;case 29:
BN=Zq;break;case 30:BN=AbO;break;case 31:BN=Su;break;case 32:BN=Wh;break;case 33:
BN=AeO;break;case 34:BN=AbP;break;case 35:BN=AeP;break;case 36:BN=Zh;break;case 37:
BN=AeQ;break;case 38:BN=JT;break;case 39:BN=AeR;break;case 0:BN=Ahf;break;default:
throw new Error(Awr+N8.toFixed());}return BN;},_Init:function(aArg){C.EnumToString.
_Init.call(this,aArg);this.__proto__=C.CountryToString;},_className:"Device::CountryToString"
};C.EaseOfDelivery={Unspecified:0,Easy:1,Moderate:2,Difficult:3,Surgery:4,LAST:5
};C.EaseOfDeliveryToString={B0:function(A6){var A$x=A6;var Asf=A.jm;switch(A$x){
case 0:Asf=A.z2(A.abg.Unspecified);break;case 1:Asf=A.z2(A.abg.Easy);break;case 2:
Asf=A.z2(A.abg.Moderate);break;case 3:Asf=A.z2(A.abg.Difficult);break;case 4:Asf=
A.z2(A.abg.Surgery);break;default:throw new Error(AWC+A$x.toFixed());}return Asf;
},_Init:function(aArg){C.EnumToString._Init.call(this,aArg);this.__proto__=C.EaseOfDeliveryToString;
},_className:"Device::EaseOfDeliveryToString"};C.WhereAbouts={UNB:0,EZU:1,EMA:2,
VZU:3,VMA:4,VIV:5,TOT:6,V48:7,V3T:8,MGE:9,VKB:10,LAST:11};C.WhereAboutsToString={
B0:function(A6){var Bdb=A6;var Z1=A.jm;switch(Bdb){case 0:Z1=A.z2(A.abg.Unknown);
break;case 1:Z1=A.z2(A.abg.Bmy);break;case 2:Z1=A.z2(A.abg.Bmx);break;case 3:Z1=
A.z2(A.abg.BmG);break;case 4:Z1=A.z2(A.abg.BmF);break;case 5:Z1=A.z2(A.abg.BmD);
break;case 6:Z1=A.z2(A.abg.BmA);break;case 7:Z1=A.z2(A.abg.BmC);break;case 8:Z1=
A.z2(A.abg.BmB);break;case 9:Z1=A.z2(A.abg.Bmz);break;case 10:Z1=A.z2(A.abg.BmE);
break;default:throw new Error(AWD+Bdb.toFixed());}return Z1;},_Init:function(aArg
){C.EnumToString._Init.call(this,aArg);this.__proto__=C.WhereAboutsToString;},_className:
"Device::WhereAboutsToString"};C.Breed={UNKNOWN:0,SBT:1,RBT:2,JER:3,BV:4,RVA:5,RV:
6,RDN:7,DSN:8,FL:9,GV:10,PIN:11,HIN:12,MW:13,VW:14,LMP:15,DBV:16,AS:17,VR:18,CHA:
19,LIM:20,WBB:21,BA:22,MA:23,SAL:24,MON:25,AU:26,PIE:27,CHI:28,ROM:29,MAR:30,WP:
31,BB:32,DA:33,AA:34,HE:35,SH:36,HLD:37,WB:38,GAL:39,LR:40,BGA:41,LG:42,BRA:43,NOR:
44,UST:45,ZEB:46,GRV:47,DEX:48,WGA:49,LH:50,SD:51,FR:52,TUX:53,TLM:54,FLF:55,UCK:
56,BLA:57,WIT:58,LAK:59,RHV:60,AT:61,GR:62,PIF:63,PS:64,GVF:65,BVF:66,RBF:67,HWF:
68,MWF:69,VWF:70,LPF:71,BRN:72,BAZ:73,AO:74,BE:75,WL:76,BIS:77,YAK:78,SON:79,TAU:
80,IND:81,TIN:82,WAG:83,XFF:84,XFM:85,XMM:86,EVO:87,BLH:88,TLH:89,MGR:90,WSH:91,
MUR:92,EBS:93,ERI:94,PAR:95,XZF:96,XZM:97,XZZ:98,LAST:99};C.BreedToString={B0:function(
A6){var Bs=A6;var BJ=A.jm;switch(Bs){case 0:BJ=A.z2(A.abg.Unknown);break;case 1:
BJ=A.z2(A.abl.SBT);break;case 2:BJ=A.z2(A.abl.RBT);break;case 3:BJ=A.z2(A.abl.JER
);break;case 4:BJ=A.z2(A.abl.BV);break;case 5:BJ=A.z2(A.abl.RVA);break;case 6:BJ=
A.z2(A.abl.RV);break;case 7:BJ=A.z2(A.abl.RDN);break;case 8:BJ=A.z2(A.abl.DSN);break;
case 9:BJ=A.z2(A.abl.FL);break;case 10:BJ=A.z2(A.abl.GV);break;case 11:BJ=A.z2(A.
abl.PIN);break;case 12:BJ=A.z2(A.abl.HIN);break;case 13:BJ=A.z2(A.abl.MW);break;
case 14:BJ=A.z2(A.abl.VW);break;case 15:BJ=A.z2(A.abl.LMP);break;case 16:BJ=A.z2(
A.abl.DBV);break;case 17:BJ=A.z2(A.abl.AS);break;case 18:BJ=A.z2(A.abl.VR);break;
case 19:BJ=A.z2(A.abl.CHA);break;case 20:BJ=A.z2(A.abl.LIM);break;case 21:BJ=A.z2(
A.abl.WBB);break;case 22:BJ=A.z2(A.abl.BA);break;case 23:BJ=A.z2(A.abl.MA);break;
case 24:BJ=A.z2(A.abl.SAL);break;case 25:BJ=A.z2(A.abl.MON);break;case 26:BJ=A.z2(
A.abl.AU);break;case 27:BJ=A.z2(A.abl.PIE);break;case 28:BJ=A.z2(A.abl.CHI);break;
case 29:BJ=A.z2(A.abl.ROM);break;case 30:BJ=A.z2(A.abl.MAR);break;case 31:BJ=A.z2(
A.abl.WP);break;case 32:BJ=A.z2(A.abl.BB);break;case 33:BJ=A.z2(A.abl.DA);break;
case 34:BJ=A.z2(A.abl.AA);break;case 35:BJ=A.z2(A.abl.HE);break;case 36:BJ=A.z2(
A.abl.SH);break;case 37:BJ=A.z2(A.abl.HLD);break;case 38:BJ=A.z2(A.abl.WB);break;
case 39:BJ=A.z2(A.abl.GAL);break;case 40:BJ=A.z2(A.abl.LR);break;case 41:BJ=A.z2(
A.abl.BGA);break;case 42:BJ=A.z2(A.abl.LG);break;case 43:BJ=A.z2(A.abl.BRA);break;
case 44:BJ=A.z2(A.abl.NOR);break;case 45:BJ=A.z2(A.abl.UST);break;case 46:BJ=A.z2(
A.abl.ZEB);break;case 47:BJ=A.z2(A.abl.GRV);break;case 48:BJ=A.z2(A.abl.DEX);break;
case 49:BJ=A.z2(A.abl.WGA);break;case 50:BJ=A.z2(A.abl.LH);break;case 51:BJ=A.z2(
A.abl.SD);break;case 52:BJ=A.z2(A.abl.FR);break;case 53:BJ=A.z2(A.abl.TUX);break;
case 54:BJ=A.z2(A.abl.TLM);break;case 55:BJ=A.z2(A.abl.FLF);break;case 56:BJ=A.z2(
A.abl.UCK);break;case 57:BJ=A.z2(A.abl.BLA);break;case 58:BJ=A.z2(A.abl.WIT);break;
case 59:BJ=A.z2(A.abl.LAK);break;case 60:BJ=A.z2(A.abl.RHV);break;case 61:BJ=A.z2(
A.abl.AT);break;case 62:BJ=A.z2(A.abl.GR);break;case 63:BJ=A.z2(A.abl.PIF);break;
case 64:BJ=A.z2(A.abl.PS);break;case 65:BJ=A.z2(A.abl.GVF);break;case 66:BJ=A.z2(
A.abl.BVF);break;case 67:BJ=A.z2(A.abl.RBF);break;case 68:BJ=A.z2(A.abl.HWF);break;
case 69:BJ=A.z2(A.abl.MWF);break;case 70:BJ=A.z2(A.abl.VWF);break;case 71:BJ=A.z2(
A.abl.LPF);break;case 72:BJ=A.z2(A.abl.BRN);break;case 73:BJ=A.z2(A.abl.BAZ);break;
case 74:BJ=A.z2(A.abl.AO);break;case 75:BJ=A.z2(A.abl.BE);break;case 76:BJ=A.z2(
A.abl.WL);break;case 77:BJ=A.z2(A.abl.BIS);break;case 78:BJ=A.z2(A.abl.YAK);break;
case 79:BJ=A.z2(A.abl.SON);break;case 80:BJ=A.z2(A.abl.TAU);break;case 81:BJ=A.z2(
A.abl.IND);break;case 82:BJ=A.z2(A.abl.TIN);break;case 83:BJ=A.z2(A.abl.WAG);break;
case 84:BJ=A.z2(A.abl.XFF);break;case 85:BJ=A.z2(A.abl.XFM);break;case 86:BJ=A.z2(
A.abl.XMM);break;case 87:BJ=A.z2(A.abl.EVO);break;case 88:BJ=A.abl.BLH;break;case
89:BJ=A.abl.TLH;break;case 90:BJ=A.abl.MGR;break;case 91:BJ=A.abl.WSH;break;case
92:BJ=A.abl.MUR;break;case 93:BJ=A.z2(A.abl.EBS);break;case 94:BJ=A.z2(A.abl.ERI
);break;case 95:BJ=A.abl.PAR;break;case 96:BJ=A.z2(A.abl.XZF);break;case 97:BJ=A.
z2(A.abl.XZM);break;case 98:BJ=A.z2(A.abl.XZZ);break;default:throw new Error(AWE+
Bs.toFixed());}return BJ;},_Init:function(aArg){C.EnumToString._Init.call(this,aArg
);this.__proto__=C.BreedToString;},_className:"Device::BreedToString"};C.UT={timer:
null,Q:null,D9:0,Dq:0,Mq:0,Pd:1000,Pm:1000,Bw:false,Cv:false,B1:true,Ma:function(
H){var F;if(!this.timer)return;if(this.D9<0){this.Dq=this.timer.Bu;this.D9=0;}var
Aq=(this.timer.Bu-this.Dq)|0;var Og=this.Pd;var G0=this.Pm+this.Pd;var Lp=0;var Jw=
this.D9;if(!Jw&&(Aq>=Og)){Jw=1;Aq=Aq-Og;}if((Jw>0)&&(Aq>=G0)){var H7=(Aq/G0)|0;Aq=
Aq-(H7*G0);Jw=Jw+H7;}if((Jw>2)&&!this.Mq)Jw=1;if(Jw!==this.D9){this.Dq=this.timer.
Bu-(((B=Aq)<0)?B+0x100000000:B);this.D9=Jw;}if(Jw>0)Lp=this.Pm;var MH=(Jw>=this.
Mq)&&(this.Mq>0);if(!!this.Q){if((!MH&&(Aq>=Lp))&&((F=this.Q,F[1].call(F[0]))!==
this.Cv))(F=this.Q,F[2].call(F[0],this.Cv));if((MH||((Aq<Lp)&&(Jw>0)))&&((F=this.
Q,F[1].call(F[0]))!==this.B1))(F=this.Q,F[2].call(F[0],this.B1));}if(MH)this.Ap(
false);},IF:function(E){if(E<0)E=0;this.Mq=E;},FA:function(E){if(E<100)E=100;this.
Pd=E;},VM:function(E){if(E<0)E=0;this.Pm=E;},Ap:function(E){if(this.Bw===E)return;
this.Bw=E;if(!E&&!!this.timer){A.zl([this,this.Ma],this.timer,0);this.timer=null;
}if(E){this.timer=A._GetAutoObject(A.abm.Af1);A.y_([this,this.Ma],this.timer,0);
this.D9=-1;}},_Init:function(aArg){this.__proto__=C.UT;A.hJ++;},_Done:function(){
this.__proto__=null;A.hJ--;},_ReInit:function(){},_Mark:function(D){var B;if((B=
this.timer)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Q)&&((B=B[0])._cycle!=
D))B._Mark(B._cycle=D);if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null
,_cycle:0,_observers:null,_className:"Device::BoolEffect"};C.Ia={AnimalId:0,TransponderId:
1,BAf:2,BAe:3,BAi:4,BAh:5};C.Aty={ByJ:0,Bze:1};C.AnimalIdGenerationMethodToString={
B0:function(A6){var Aky=A6;var AnO=A.jm;switch(Aky){case 0:AnO=A.z2(A.abg.Yv);break;
case 1:AnO=A.z2(A.abg.Transponder);break;case 3:AnO=(A.z2(A.abg.Manual)+N2)+A.z2(
A.abg.Male);break;case 2:AnO=(A.z2(A.abg.Manual)+N2)+A.z2(A.abg.Female);break;case
4:AnO=(A.z2(A.abg.Manual)+N2)+A.z2(A.abg.Unknown);break;case 5:AnO=(A.z2(A.abg.Manual
)+N2)+AWF;break;default:throw new Error(AWG+Aky.toFixed());}return AnO;},_Init:function(
aArg){C.EnumToString._Init.call(this,aArg);this.__proto__=C.AnimalIdGenerationMethodToString;
},_className:"Device::AnimalIdGenerationMethodToString"};C.DirectionOfCountingToString={
B0:function(A6){var AxV=A6;var AY8=A.jm;switch(AxV){case 0:AY8=AWH;break;case 1:
AY8=ArN;break;default:throw new Error(ArO+AxV.toFixed());}return AY8;},_Init:function(
aArg){C.EnumToString._Init.call(this,aArg);this.__proto__=C.DirectionOfCountingToString;
},_className:"Device::DirectionOfCountingToString"};C.EnumToIcon={Ark:function(A6
){throw new Error(ArA+A6.toFixed());},Arl:function(A6){throw new Error(ArA+A6.toFixed(
));},_Init:function(aArg){this.__proto__=C.EnumToIcon;A.hJ++;},_Done:function(){
this.__proto__=null;A.hJ--;},_ReInit:function(){},_Mark:function(D){var B;if((B=
this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:
"Device::EnumToIcon"};C.Adi={Ark:function(A6){return A.zW(A.abi.ASo);},Arl:function(
A6){var AxV=A6;var Ra=-1;switch(AxV){case 0:Ra=3;break;case 1:Ra=2;break;default:
throw new Error(Ant+AxV.toFixed());}return Ra;},_Init:function(aArg){C.EnumToIcon.
_Init.call(this,aArg);this.__proto__=C.Adi;},_className:"Device::DirectionOfCountingToIcon"
};C.AcZ={Ark:function(A6){return A.zW(A.abi.ASm);},Arl:function(A6){var Aky=A6;var
Ra=-1;switch(Aky){case 0:Ra=0;break;case 1:Ra=6;break;case 3:Ra=4;break;case 2:Ra=
5;break;case 4:Ra=2;break;case 5:Ra=3;break;default:throw new Error(Ant+Aky.toFixed(
));}return Ra;},_Init:function(aArg){C.EnumToIcon._Init.call(this,aArg);this.__proto__=
C.AcZ;},_className:"Device::AnimalIdGenerationMethodToIcon"};C.Ph={UNDEFINED:0,SH:
1,AML:2,APr:3,AMK:4,A4Y:5,HE:6,A7I:7,A2r:8,AKG:9,ART:10,BE:11,BB:12,A4M:13,ARU:14
,ARV:15,ASt:16};C.GermanStateToString={B0:function(A6){var Bk=A6;var Go=A.jm;switch(
Bk){case 1:Go=A.z2(A.abp.SH);break;case 2:Go=A.z2(A.abp.AML);break;case 3:Go=A.z2(
A.abp.APr);break;case 4:Go=A.z2(A.abp.AMK);break;case 5:Go=A.z2(A.abp.A4Y);break;
case 6:Go=A.z2(A.abp.HE);break;case 7:Go=A.z2(A.abp.A7I);break;case 8:Go=A.z2(A.
abp.A2r);break;case 9:Go=A.z2(A.abp.AKG);break;case 10:Go=A.z2(A.abp.ART);break;
case 11:Go=A.z2(A.abp.BE);break;case 12:Go=A.z2(A.abp.BB);break;case 13:Go=A.z2(
A.abp.A4M);break;case 14:Go=A.z2(A.abp.ARU);break;case 15:Go=A.z2(A.abp.ARV);break;
case 16:Go=A.z2(A.abp.ASt);break;case 0:Go=Ahf;break;default:throw new Error(Ahg+
Bk.toFixed());}return Go;},Lh:function(A6){var Bk=A6;var Go=A.jm;switch(Bk){case
1:Go=A.z2(A.abp.BkX);break;case 2:Go=A.z2(A.abp.AML);break;case 3:Go=A.z2(A.abp.
APr);break;case 4:Go=A.z2(A.abp.AMK);break;case 5:Go=A.z2(A.abp.Bgy);break;case 6:
Go=A.z2(A.abp.HE);break;case 7:Go=A.z2(A.abp.BkE);break;case 8:Go=A.z2(A.abp.BdD
);break;case 9:Go=A.z2(A.abp.AKG);break;case 10:Go=A.z2(A.abp.ART);break;case 11:
Go=A.z2(A.abp.BE);break;case 12:Go=A.z2(A.abp.BB);break;case 13:Go=A.z2(A.abp.Bgi
);break;case 14:Go=A.z2(A.abp.ARU);break;case 15:Go=A.z2(A.abp.ARV);break;case 16:
Go=A.z2(A.abp.ASt);break;case 0:Go=Ahf;break;default:throw new Error(Ahg+Bk.toFixed(
));}return Go;},Bmb:function(A6){var Bk=A6;var FX=-1;switch(Bk){case 0:FX=0;break;
case 1:FX=1;break;case 2:FX=2;break;case 3:FX=3;break;case 4:FX=4;break;case 5:FX=
5;break;case 6:FX=6;break;case 7:FX=7;break;case 8:FX=8;break;case 9:FX=9;break;
case 10:FX=10;break;case 11:FX=11;break;case 12:FX=12;break;case 13:FX=13;break;
case 14:FX=14;break;case 15:FX=15;break;case 16:FX=16;break;default:throw new Error(
Ahg+Bk.toFixed());}return FX;},Bmc:function(A6){var Bk=A6;var FX=A.jm;switch(Bk){
case 1:FX=AwT;break;case 2:FX=Anu;break;case 3:FX=AWI;break;case 4:FX=AWJ;break;
case 5:FX=AWK;break;case 6:FX=AWL;break;case 7:FX=AWM;break;case 8:FX=AWN;break;
case 9:FX=AWO;break;case 10:FX=AWP;break;case 11:FX=T$;break;case 12:FX=AWQ;break;
case 13:FX=AWR;break;case 14:FX=AWS;break;case 15:FX=AWT;break;case 16:FX=AWU;break;
case 0:FX=Ahf;break;default:throw new Error(Ahg+Bk.toFixed());}return FX;},_Init:
function(aArg){C.EnumToString._Init.call(this,aArg);this.__proto__=C.GermanStateToString;
},_className:"Device::GermanStateToString"};C.EartagNrAssignmentMode={OneSingleRange:
0,TwoNumberRanges:1,LAST:2};C.EartagNrAssignmentModeToString={Lh:function(A6){var
Uw=A6;var Np=A.jm;switch(Uw){case 0:Np=AWV;break;case 1:Np=AwU;break;default:throw new
Error(AGu+Uw.toFixed());}return Np;},B0:function(A6){var Uw=A6;var Np=A.jm;switch(
Uw){case 0:Np=A.z2(A.abg.Bkm);break;case 1:Np=A.z2(A.abg.Bmo);break;default:throw new
Error(AGu+Uw.toFixed());}return Np;},_Init:function(aArg){C.EnumToString._Init.call(
this,aArg);this.__proto__=C.EartagNrAssignmentModeToString;},_className:"Device::EartagNrAssignmentModeToString"
};C.ByD={BAw:0,BAm:1,Bzu:2,Bzv:3,Bzw:4,BBs:5};C.EnumToCodeset={AlK:function(Ahj){
throw new Error(AwV+Ahj.toFixed());},Adl:function(A6){throw new Error(ArA+A6.toFixed(
));},Apz:function(){A.aa8("%s",ArP);return 0;},Hh:function(){A.aa8("%s",ArP);return 0;
},_Init:function(aArg){this.__proto__=C.EnumToCodeset;A.hJ++;},_Done:function(){
this.__proto__=null;A.hJ--;},_ReInit:function(){},_Mark:function(D){var B;if((B=
this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:
"Device::EnumToCodeset"};C.MS={AlK:function(Ahj){var Bs;switch(Ahj){case 0:Bs=0;
break;case 1:Bs=1;break;case 2:Bs=2;break;case 3:Bs=3;break;case 4:Bs=4;break;case
5:Bs=5;break;case 6:Bs=6;break;case 9:Bs=7;break;case 10:Bs=8;break;case 11:Bs=9;
break;case 12:Bs=10;break;case 13:Bs=11;break;case 14:Bs=12;break;case 15:Bs=13;
break;case 16:Bs=14;break;case 17:Bs=15;break;case 18:Bs=16;break;case 19:Bs=17;
break;case 20:Bs=18;break;case 21:Bs=19;break;case 22:Bs=20;break;case 23:Bs=21;
break;case 24:Bs=22;break;case 25:Bs=23;break;case 26:Bs=24;break;case 27:Bs=25;
break;case 28:Bs=26;break;case 31:Bs=27;break;case 32:Bs=28;break;case 33:Bs=29;
break;case 34:Bs=30;break;case 35:Bs=31;break;case 36:Bs=32;break;case 41:Bs=33;
break;case 42:Bs=34;break;case 43:Bs=35;break;case 44:Bs=36;break;case 45:Bs=37;
break;case 46:Bs=38;break;case 47:Bs=39;break;case 48:Bs=40;break;case 49:Bs=41;
break;case 50:Bs=42;break;case 51:Bs=43;break;case 52:Bs=44;break;case 53:Bs=45;
break;case 54:Bs=46;break;case 55:Bs=47;break;case 56:Bs=48;break;case 57:Bs=49;
break;case 58:Bs=50;break;case 59:Bs=51;break;case 60:Bs=52;break;case 61:Bs=53;
break;case 65:Bs=54;break;case 66:Bs=55;break;case 67:Bs=56;break;case 68:Bs=57;
break;case 69:Bs=58;break;case 70:Bs=59;break;case 71:Bs=60;break;case 72:Bs=61;
break;case 73:Bs=62;break;case 74:Bs=63;break;case 75:Bs=64;break;case 76:Bs=65;
break;case 77:Bs=66;break;case 78:Bs=67;break;case 79:Bs=68;break;case 80:Bs=69;
break;case 81:Bs=70;break;case 82:Bs=71;break;case 83:Bs=72;break;case 84:Bs=73;
break;case 85:Bs=74;break;case 86:Bs=75;break;case 87:Bs=76;break;case 88:Bs=77;
break;case 89:Bs=78;break;case 90:Bs=79;break;case 91:Bs=80;break;case 92:Bs=81;
break;case 93:Bs=82;break;case 94:Bs=83;break;case 97:Bs=84;break;case 98:Bs=85;
break;case 99:Bs=86;break;case 100:Bs=87;break;case 101:Bs=88;break;case 102:Bs=
89;break;case 103:Bs=90;break;case 104:Bs=91;break;case 105:Bs=92;break;case 106:
Bs=93;break;case 107:Bs=94;break;case 108:Bs=95;break;case 109:Bs=96;break;case 110:
Bs=97;break;case 111:Bs=98;break;default:Bs=0;}return Bs;},Adl:function(A6){var Bs=
A6;var BM=0;switch(Bs){case 0:BM=0;break;case 1:BM=1;break;case 2:BM=2;break;case
3:BM=3;break;case 4:BM=4;break;case 5:BM=5;break;case 6:BM=6;break;case 7:BM=9;break;
case 8:BM=10;break;case 9:BM=11;break;case 10:BM=12;break;case 11:BM=13;break;case
12:BM=14;break;case 13:BM=15;break;case 14:BM=16;break;case 15:BM=17;break;case 16:
BM=18;break;case 17:BM=19;break;case 18:BM=20;break;case 19:BM=21;break;case 20:
BM=22;break;case 21:BM=23;break;case 22:BM=24;break;case 23:BM=25;break;case 24:
BM=26;break;case 25:BM=27;break;case 26:BM=28;break;case 27:BM=31;break;case 28:
BM=32;break;case 29:BM=33;break;case 30:BM=34;break;case 31:BM=35;break;case 32:
BM=36;break;case 33:BM=41;break;case 34:BM=42;break;case 35:BM=43;break;case 36:
BM=44;break;case 37:BM=45;break;case 38:BM=46;break;case 39:BM=47;break;case 40:
BM=48;break;case 41:BM=49;break;case 42:BM=50;break;case 43:BM=51;break;case 44:
BM=52;break;case 45:BM=53;break;case 46:BM=54;break;case 47:BM=55;break;case 48:
BM=56;break;case 49:BM=57;break;case 50:BM=58;break;case 51:BM=59;break;case 52:
BM=60;break;case 53:BM=61;break;case 54:BM=65;break;case 55:BM=66;break;case 56:
BM=67;break;case 57:BM=68;break;case 58:BM=69;break;case 59:BM=70;break;case 60:
BM=71;break;case 61:BM=72;break;case 62:BM=73;break;case 63:BM=74;break;case 64:
BM=75;break;case 65:BM=76;break;case 66:BM=77;break;case 67:BM=78;break;case 68:
BM=79;break;case 69:BM=80;break;case 70:BM=81;break;case 71:BM=82;break;case 72:
BM=83;break;case 73:BM=84;break;case 74:BM=85;break;case 75:BM=86;break;case 76:
BM=87;break;case 77:BM=88;break;case 78:BM=89;break;case 79:BM=90;break;case 80:
BM=91;break;case 81:BM=92;break;case 82:BM=93;break;case 83:BM=94;break;case 84:
BM=97;break;case 85:BM=98;break;case 86:BM=99;break;case 87:BM=100;break;case 88:
BM=101;break;case 89:BM=102;break;case 90:BM=103;break;case 91:BM=104;break;case
92:BM=105;break;case 93:BM=106;break;case 94:BM=107;break;case 95:BM=108;break;case
96:BM=109;break;case 97:BM=110;break;case 98:BM=111;break;default:throw new Error(
AWW+Bs.toFixed());}return BM;},Apz:function(){return 0;},Hh:function(){return 111;
},_Init:function(aArg){C.EnumToCodeset._Init.call(this,aArg);this.__proto__=C.MS;
},_className:"Device::BreedToHitCodeset"};C.ReasonOfLeaving={Unknown:0,A8c:1,SY:
2,A7D:3,A4q:4,BAE:5,A8r:6,A4U:7,A2P:8,A7z:9,A4S:10,A2T:11,BAT:12,BAU:13,LAST:14};
C.ReasonOfLeavingToString={B0:function(A6){var AcF=A6;var SQ=A.jm;switch(AcF){case
0:SQ=A.z2(A.abg.Unknown);break;case 1:SQ=A.z2(A.abg.A8c);break;case 2:SQ=A.z2(A.
abg.SY);break;case 3:SQ=A.z2(A.abg.A7D);break;case 4:SQ=A.z2(A.abg.A4q);break;case
5:SQ=A.z2(A.abg.Bkn);break;case 6:SQ=A.z2(A.abg.A8r);break;case 7:SQ=A.z2(A.abg.
A4U);break;case 8:SQ=A.z2(A.abg.A2P);break;case 9:SQ=A.z2(A.abg.A7z);break;case 10:
SQ=A.z2(A.abg.A4S);break;case 11:SQ=A.z2(A.abg.A2T);break;case 12:SQ=A.z2(A.abg.
Bkx);break;case 13:SQ=A.z2(A.abg.Bkw);break;default:throw new Error(AWX+AcF.toFixed(
));}return SQ;},_Init:function(aArg){C.EnumToString._Init.call(this,aArg);this.__proto__=
C.ReasonOfLeavingToString;},_className:"Device::ReasonOfLeavingToString"};C.AgP={
AlK:function(Ahj){var Oh;switch(Ahj){case 0:Oh=0;break;case 1:Oh=1;break;case 2:
Oh=2;break;case 3:Oh=3;break;case 4:Oh=4;break;case 5:Oh=5;break;case 6:Oh=6;break;
case 7:Oh=7;break;case 8:Oh=8;break;case 9:Oh=9;break;case 10:Oh=10;break;case 11:
Oh=11;break;case 12:Oh=12;break;case 13:Oh=13;break;default:Oh=0;}return Oh;},Adl:
function(A6){var Oh=A6;var Jb=0;switch(Oh){case 0:Jb=0;break;case 2:Jb=2;break;case
8:Jb=8;break;case 11:Jb=11;break;case 4:Jb=4;break;case 10:Jb=10;break;case 7:Jb=
7;break;case 5:Jb=5;break;case 9:Jb=9;break;case 3:Jb=3;break;case 12:Jb=12;break;
case 13:Jb=13;break;case 1:Jb=1;break;case 6:Jb=6;break;default:throw new Error(
AGv+Oh.toFixed());}return Jb;},Apz:function(){return 0;},Hh:function(){return 13;
},_Init:function(aArg){C.EnumToCodeset._Init.call(this,aArg);this.__proto__=C.AgP;
},_className:"Device::ReasonOfLeavingToCodeset"};C.KG={AlK:function(Ahj){var Ks;
switch(Ahj){case 0:Ks=0;break;case 1:Ks=1;break;case 2:Ks=2;break;case 3:Ks=3;break;
case 4:Ks=4;break;case 5:Ks=5;break;case 6:Ks=6;break;case 7:Ks=7;break;case 8:Ks=
8;break;case 9:Ks=9;break;case 10:Ks=10;break;default:Ks=0;}return Ks;},Adl:function(
A6){var Ks=A6;var Jb=0;switch(Ks){case 0:Jb=0;break;case 2:Jb=2;break;case 1:Jb=
1;break;case 9:Jb=9;break;case 6:Jb=6;break;case 8:Jb=8;break;case 7:Jb=7;break;
case 5:Jb=5;break;case 10:Jb=10;break;case 4:Jb=4;break;case 3:Jb=3;break;default:
throw new Error(AGv+Ks.toFixed());}return Jb;},Apz:function(){return 0;},Hh:function(
){return 10;},_Init:function(aArg){C.EnumToCodeset._Init.call(this,aArg);this.__proto__=
C.KG;},_className:"Device::WhereAboutsToCodeset"};C.AlR={_Init:function(aArg){this.
__proto__=C.AlR;A.hJ++;},_Done:function(){this.__proto__=null;A.hJ--;},_ReInit:function(
){},_Mark:function(D){var B;if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:
null,_cycle:0,_observers:null,_className:"Device::EmptyClass"};C.CalfDeregistrationsTableFields={
Year:0,Deregistrations:1,Deaths:2};C.CalfDeregistrations={Deregistrations:0,Deaths:
0,Year:0,EK:function(Ab,AF){var Hs=C.Row.EK.call(this,Ab,AF);if(Hs&&!!AF){this.AjP(
AF.CE(Ab,0));this.Au4(AF.CE(Ab,1));this.Au3(AF.CE(Ab,2));}return Hs;},Cr:function(
AF){var Hs=C.Row.Cr.call(this,AF);if(Hs&&!!AF){var Jg=AF.Op();if(Jg<=0)A.aa8("%s"
,AbR);else{if(this.Ama())this.CH=AF.XV();AF.G$(this.CH,0,this.Year);AF.G$(this.CH
,1,this.Deregistrations);AF.G$(this.CH,2,this.Deaths);AF.Or(Jg);}}return Hs;},Gd:
function(){C.Row.Gd.call(this);this.AjP(-1);},G_:function(){C.Row.G_.call(this);
this.AjP(0);this.Au4(0);this.Au3(0);},Au4:function(E){if(this.Deregistrations===
E)return;this.Deregistrations=E;A.aat([this,this.Bhh,this.Au4],0);},Au3:function(
E){if(this.Deaths===E)return;this.Deaths=E;A.aat([this,this.Bhf,this.Au3],0);},AjP:
function(E){if(this.Year===E)return;this.Year=E;A.aat([this,this.Aqd,this.AjP],0
);},Bhh:function(){return this.Deregistrations;},Bhf:function(){return this.Deaths;
},Aqd:function(){return this.Year;},_Init:function(aArg){C.Row._Init.call(this,aArg
);this.__proto__=C.CalfDeregistrations;this.TableId=4;},_className:"Device::CalfDeregistrations"
};C.Atw={Undefined:0,Display:1,A7H:2,A7T:3,A8J:4,BzP:5,BA4:6,BBD:7,BAd:8,By5:9,Bys:
10,A3R:11,A7J:12,BBK:13,A4X:14,BBN:15};C.DeviceComponentToString={B0:function(A6
){var A$r=A6;var PU=A.jm;switch(A$r){case 0:PU=AGw;break;case 10:PU=A.z2(A.abg.Bdc
);break;case 9:PU=A.z2(A.abg.BdY);break;case 1:PU=A.z2(A.abg.BeD);break;case 11:
PU=A.z2(A.abg.A3R);break;case 5:PU=A.z2(A.abg.BmH);break;case 8:PU=A.z2(A.abg.BeF
);break;case 14:PU=A.z2(A.abg.A4X);break;case 2:PU=A.z2(A.abg.A7H);break;case 12:
PU=A.z2(A.abg.A7J);break;case 6:PU=A.z2(A.abg.BkD);break;case 3:PU=A.z2(A.abg.A7T
);break;case 7:PU=A.z2(A.abg.BeG);break;case 13:PU=A.z2(A.abg.Ben);break;case 15:
PU=A.z2(A.abg.BmL);break;case 4:PU=A.z2(A.abg.A8J);break;default:throw new Error(
AWY+A$r.toFixed());}return PU;},_Init:function(aArg){C.EnumToString._Init.call(this
,aArg);this.__proto__=C.DeviceComponentToString;},_className:"Device::DeviceComponentToString"
};C.Af0={AlK:function(Ahj){return Ahj;},Adl:function(A6){return A6;},Apz:function(
){return 0;},Hh:function(){return 4;},_Init:function(aArg){C.EnumToCodeset._Init.
call(this,aArg);this.__proto__=C.Af0;},_className:"Device::EaseOfDeliveryToCodeset"
};C.AdU={Ark:function(A6){return A.zW(A.abi.ANS);},Arl:function(A6){var A$B=A6;var
Ra=-1;switch(A$B){case 0:Ra=0;break;case 1:Ra=1;break;case 2:Ra=2;break;default:
throw new Error(AWZ+A$B.toFixed());}return Ra;},_Init:function(aArg){C.EnumToIcon.
_Init.call(this,aArg);this.__proto__=C.AdU;},_className:"Device::MotherSelectionFilterModeToIcon"
};C.WhereAboutsFilterCriterion={A4:0,Adj:function(){var Av=A._NewObject(C.WhereAboutsFilterCriterion
,0);Av.Gt(this);return Av;},Gt:function(AL){C.FilterCriterion.Gt.call(this,AL);var
Av=(C.WhereAboutsFilterCriterion.isPrototypeOf(AL)?AL:null);if(!!Av)this.A4=Av.A4;
},Initialize:function(AX,EE,A1,Sz){this.ET=AX;this.Operator=EE;this.A4=A1;this.AaS=
Sz;return this;},_Init:function(aArg){C.FilterCriterion._Init.call(this,aArg);this.
__proto__=C.WhereAboutsFilterCriterion;},_className:"Device::WhereAboutsFilterCriterion"
};C.BAp={ALJ:0,Bza:1,ANu:2,LAST:3};C.BBu={Gu:0,AS5:1,G6:2,Year:3,LAST:4};C.TimespanDaysToString={
B0:function(A6){var BcO=A6;var Azu=A.jm;switch(BcO){case 0:Azu=A.z2(A.abg.A28);break;
case 1:Azu=A.z2(A.abg.AS5);break;case 2:Azu=A.z2(A.abg.G6);break;case 3:Azu=A.z2(
A.abg.Year);break;default:throw new Error(AW0+BcO.toFixed());}return Azu;},_Init:
function(aArg){C.EnumToString._Init.call(this,aArg);this.__proto__=C.TimespanDaysToString;
},_className:"Device::TimespanDaysToString"};C.Ake={BAB:0,Bzf:1,BzV:2,BzY:3,BzX:
4,Bzg:5,BzW:6,LAST:7};C.USBStateToString={B0:function(A6){var Bc8=A6;var Bk=A.jm;
switch(Bc8){case 0:Bk=AW1;break;case 2:Bk=AW2;break;case 1:Bk=AW3;break;case 5:Bk=
AW4;break;case 3:Bk=AW5;break;case 4:Bk=AGx;break;case 6:Bk=AW6;break;default:throw new
Error(AFX+Bc8.toFixed());}return Bk;},_Init:function(aArg){C.EnumToString._Init.
call(this,aArg);this.__proto__=C.USBStateToString;},_className:"Device::USBStateToString"
};C.AAB={BzT:0,ByE:1,BzU:2,BzR:3};C.Av0={AAx:A.jm,Timestamp:0,ACc:0,ACk:0,AEq:0,
OnSetTimestamp:function(E){if(this.Timestamp===E)return;this.Timestamp=E;},ADm:function(
E){if(this.ACc===E)return;this.ACc=E;},ADt:function(E){if(this.ACk===E)return;this.
ACk=E;},ADF:function(E){if(this.AEq===E)return;this.AEq=E;},AC4:function(E){if(this.
AAx===E)return;this.AAx=E;},_Init:function(aArg){this.__proto__=C.Av0;A.hJ++;},_Done:
function(){this.__proto__=null;A.hJ--;},_ReInit:function(){},_Mark:function(D){var
B;if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:
null,_className:"Device::SoftwareVersionInformation"};C.At2={Timestamp:0,APf:0,APg:
0,ASL:0,ASM:0,ASK:0,APe:0,OnSetTimestamp:function(E){if(this.Timestamp===E)return;
this.Timestamp=E;},ADj:function(E){if(this.APf===E)return;this.APf=E;},ADk:function(
E){if(this.APg===E)return;this.APg=E;},ADS:function(E){if(this.ASL===E)return;this.
ASL=E;},ADT:function(E){if(this.ASM===E)return;this.ASM=E;},ADR:function(E){if(this.
ASK===E)return;this.ASK=E;},ADi:function(E){if(this.APe===E)return;this.APe=E;},
_Init:function(aArg){this.__proto__=C.At2;A.hJ++;},_Done:function(){this.__proto__=
null;A.hJ--;},_ReInit:function(){},_Mark:function(D){var B;if((B=this.I)&&(B._cycle
!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:"Device::HardwareVersionInformation"
};C.Apd={Undefined:0,BzF:1,ByR:2};C.AfJ={Manual:0,TransponderId:1,LAST:2};C.AnimalIdAutoGenerationMethodToString={
B0:function(A6){var A_Y=A6;var AYB=A.jm;switch(A_Y){case 0:AYB=A.z2(A.abg.A2Y);break;
case 1:AYB=A.z2(A.abg.A3c);break;default:throw new Error(AW7+A_Y.toFixed());}return AYB;
},_Init:function(aArg){C.EnumToString._Init.call(this,aArg);this.__proto__=C.AnimalIdAutoGenerationMethodToString;
},_className:"Device::AnimalIdAutoGenerationMethodToString"};C.G6={A2F:0,AB3:1,AAU:
2,ACd:3,AzV:4,ACg:5,AB5:6,AB4:7,Az3:8,AEx:9,ACu:10,ACs:11,AAE:12,LAST:13};C.MonthToString={
B0:function(A6){var BaB=A6;var WN=A.jm;switch(BaB){case 1:WN=A.z2(A.abu.AB3);break;
case 2:WN=A.z2(A.abu.AAU);break;case 3:WN=A.z2(A.abu.ACd);break;case 4:WN=A.z2(A.
abu.AzV);break;case 5:WN=A.z2(A.abu.ACg);break;case 6:WN=A.z2(A.abu.AB5);break;case
7:WN=A.z2(A.abu.AB4);break;case 8:WN=A.z2(A.abu.Az3);break;case 9:WN=A.z2(A.abu.
AEx);break;case 10:WN=A.z2(A.abu.ACu);break;case 11:WN=A.z2(A.abu.ACs);break;case
12:WN=A.z2(A.abu.AAE);break;default:throw new Error(AW8+BaB.toFixed());}return WN;
},_Init:function(aArg){C.EnumToString._Init.call(this,aArg);this.__proto__=C.MonthToString;
},_className:"Device::MonthToString"};C.AiO={FileName:A.jm,AEs:0,AAB:0,Am2:false
,_Init:function(aArg){this.__proto__=C.AiO;A.hJ++;},_Done:function(){this.__proto__=
null;A.hJ--;},_ReInit:function(){},_Mark:function(D){var B;if((B=this.I)&&(B._cycle
!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:"Device::DataExportContext"
};C.AlB={BzM:0,BBj:1};C.ATa={Init:function(aArg){var B;A.za([this,this.BbK],[B=A.
_GetAutoObject(C.Device),B.A6g,B.A95],0);this.BbK(this);},Cr:function(){A._GetAutoObject(
C.Device).AqK(this.toString());},BbK:function(H){this.EK(A._GetAutoObject(C.Device
).AFh);A.vv(this,0);},_Init:function(aArg){C.Int32ArrayWrapper._Init.call(this,aArg
);this.__proto__=C.ATa;this.YM(2);this.Init(aArg);},_className:"Device::WeightGainsLowClass"
};C.AS$={Init:function(aArg){var B;A.za([this,this.BbI],[B=A._GetAutoObject(C.Device
),B.A6f,B.A94],0);this.BbI(this);},Cr:function(){A._GetAutoObject(C.Device).AqJ(
this.toString());},BbI:function(H){this.EK(A._GetAutoObject(C.Device).AFg);A.vv(
this,0);},_Init:function(aArg){C.Int32ArrayWrapper._Init.call(this,aArg);this.__proto__=
C.AS$;this.YM(2);this.Init(aArg);},_className:"Device::WeightGainsHighClass"};C.
ATc={Init:function(aArg){var B;A.za([this,this.BbM],[B=A._GetAutoObject(C.Device
),B.A6j,B.A98],0);this.BbM(this);},Cr:function(){A._GetAutoObject(C.Device).AqL(
this.toString());},BbM:function(H){this.EK(A._GetAutoObject(C.Device).AFj);A.vv(
this,0);},_Init:function(aArg){C.Int32ArrayWrapper._Init.call(this,aArg);this.__proto__=
C.ATc;this.YM(2);this.Init(aArg);},_className:"Device::WeightValuesBirthClass"};
C.AS_={Init:function(aArg){var B;A.za([this,this.BbG],[B=A._GetAutoObject(C.Device
),B.A6e,B.A93],0);this.BbG(this);},Cr:function(){A._GetAutoObject(C.Device).AqI(
this.toString());},BbG:function(H){this.EK(A._GetAutoObject(C.Device).AFf);A.vv(
this,0);},_Init:function(aArg){C.Int32ArrayWrapper._Init.call(this,aArg);this.__proto__=
C.AS_;this.YM(2);this.Init(aArg);},_className:"Device::WeightGainsAverageClass"};
C.AKw={Init:function(aArg){var B;A.za([this,this.Ba5],[B=A._GetAutoObject(C.Device
),B.A5w,B.A9H],0);this.Ba5(this);},Ba5:function(H){this.EK(A._GetAutoObject(C.Device
).AzU);A.vv(this,0);},_Init:function(aArg){C.Int32ArrayWrapper._Init.call(this,aArg
);this.__proto__=C.AKw;this.YM(2);this.Init(aArg);},_className:"Device::AnimalTypesWeightGainsClass"
};C.BAs={BAv:0,BAj:1,By$:2,BBL:3,Unknown:4};C.ByP={None:0,BAC:1,BAx:2,BAt:3,BAu:
4};C.Ag5={A48:0,Manual:1,TransponderId:2,LAST:3};C.TransponderAssignmentIdChangeMethodToString={
B0:function(A6){var BcS=A6;var AJe=A.jm;switch(BcS){case 0:AJe=A.z2(A.abg.A48);break;
case 1:AJe=A.z2(A.abg.A2Y);break;case 2:AJe=A.z2(A.abg.A3c);break;default:throw new
Error(AW9+BcS.toFixed());}return AJe;},_Init:function(aArg){C.EnumToString._Init.
call(this,aArg);this.__proto__=C.TransponderAssignmentIdChangeMethodToString;},_className:
"Device::TransponderAssignmentIdChangeMethodToString"};C.A7A={Bw_:function(A_A){
var Nq=A.aa2(A.aaX(A_A,15),0,10);if(!A._GetAutoObject(C.Converter).AeG(Nq))return 0;
return A.aa2(A.aaX(A_A,15),0,10);},Bw9:function(AHR){if(AHR.length<8)return 0;var
AyY=A._NewObject(A.Core.Bu,0);var Bxy=A.aaY(AHR,4,4);var AZG=A.vQ(Bxy,0,10);if((
AZG<2000)||(AZG>2100))return 0;AyY.Year=AZG;var Bxx=A.aaY(AHR,2,2);var AZF=A.vQ(
Bxx,0,10);if((AZF<1)||(AZF>12))return 0;AyY.TG(AZF);var Bxw=A.aaX(AHR,2);var AZE=
A.vQ(Bxw,0,10);if((AZE<1)||(AZE>AyY.YB()))return 0;AyY.Lb(AZE);return AyY.JL();}
,_Init:function(aArg){this.__proto__=C.A7A;A.hJ++;},_Done:function(){this.__proto__=
null;A.hJ--;},_ReInit:function(){},_Mark:function(D){var B;if((B=this.I)&&(B._cycle
!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:"Device::ParserClass"
};C.AvJ={_Init:function(){C.A7A._Init.call(this,0);},_variants:function(){return this;
},_this:null};C.AnimalTableFieldsToString={B0:function(A6){var ZA=A6;var FF=A.jm;
switch(ZA){case 14:FF=A.z2(A.abg.AeH);break;case 6:FF=A.jm;break;case 32:FF=A.z2(
A.abg.Breed);break;case 4:FF=A.z2(A.abg.AfV);break;case 28:FF=A.z2(A.abg.A2L);break;
case 33:FF=A.z2(A.abg.AiK);break;case 23:FF=A.z2(A.abg.Kv);break;case 25:FF=A.jm;
break;case 7:FF=A.z2(A.abg.Aer);break;case 2:FF=A.z2(A.abg.O);break;case 0:FF=A.
z2(A.abg.HA);break;case 8:FF=A.z2(A.abg.Alarm);break;case 9:FF=A.z2(A.abg.AAp);break;
case 38:FF=A.z2(A.abg.BeE);break;case 11:FF=A.z2(A.abg.Fever);break;case 27:FF=A.
jm;break;case 10:FF=A.jm;break;case 37:FF=A.jm;break;case 12:FF=A.jm;break;case 29:
FF=A.z2(A.abg.AO6);break;case 18:FF=A.z2(A.abg.MU);break;case 17:FF=A.jm;break;case
5:FF=A.jm;break;case 3:FF=A.jm;break;case 26:FF=A.z2(A.abg.Yv);break;case 35:FF=
A.jm;break;case 36:FF=A.jm;break;case 15:FF=A.jm;break;case 16:FF=A.jm;break;case
24:FF=A.jm;break;case 31:FF=A.jm;break;case 20:FF=A.jm;break;case 30:FF=A.jm;break;
case 21:FF=A.jm;break;case 19:FF=A.jm;break;case 22:FF=A.z2(A.abg.Transponder);break;
case 1:FF=A.z2(A.abg.Gr);break;case 34:FF=A.z2(A.abg.I$);break;case 13:FF=A.jm;break;
default:throw new Error(AW_+A6.toFixed());}return FF;},_Init:function(aArg){C.EnumToString.
_Init.call(this,aArg);this.__proto__=C.AnimalTableFieldsToString;},_className:"Device::AnimalTableFieldsToString"
};C.U4={BzS:0,BzQ:1,LAST:2};C.DataExportDestinationToString={B0:function(A6){var
BuP=A6;var AY3=A.jm;switch(BuP){case 0:AY3=A.abg.Bfz;break;case 1:AY3=A.abg.Bee;
break;default:throw new Error(AW$+A6.toFixed());}return AY3;},_Init:function(aArg
){C.EnumToString._Init.call(this,aArg);this.__proto__=C.DataExportDestinationToString;
},_className:"Device::DataExportDestinationToString"};C.ACa={Bc:0,BBn:1,LAST:2};
C.ListViewScopeToString={B0:function(A6){var BvV=A6;var AZ1=A.jm;switch(BvV){case
0:AZ1=A.z2(A.abg.Bc);break;case 1:AZ1=A.z2(A.abg.Blp);break;default:throw new Error(
AXa+A6.toFixed());}return AZ1;},_Init:function(aArg){C.EnumToString._Init.call(this
,aArg);this.__proto__=C.ListViewScopeToString;},_className:"Device::ListViewScopeToString"
};
C._Init=function(){C.Int32FilterCriterion.__proto__=C.FilterCriterion;C.StringFilterCriterion.
__proto__=C.FilterCriterion;C.Table.__proto__=C.ITable;C.Animal.__proto__=C.Row;
C.Rating.__proto__=C.Row;C.HelperClass.__proto__=C.AlR;C.BoolFilterCriterion.__proto__=
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
C.ASB.__proto__=C.Int32ArrayWrapper;C.ASA.__proto__=C.Int32ArrayWrapper;C.AKv.__proto__=
C.Int32ArrayWrapper;C.UInt64FilterCriterion.__proto__=C.FilterCriterion;C.BooleanToAssignedUnassignedString.
__proto__=C.EnumToString;C.CountryToString.__proto__=C.EnumToString;C.EaseOfDeliveryToString.
__proto__=C.EnumToString;C.WhereAboutsToString.__proto__=C.EnumToString;C.BreedToString.
__proto__=C.EnumToString;C.AnimalIdGenerationMethodToString.__proto__=C.EnumToString;
C.DirectionOfCountingToString.__proto__=C.EnumToString;C.Adi.__proto__=C.EnumToIcon;
C.AcZ.__proto__=C.EnumToIcon;C.GermanStateToString.__proto__=C.EnumToString;C.EartagNrAssignmentModeToString.
__proto__=C.EnumToString;C.MS.__proto__=C.EnumToCodeset;C.ReasonOfLeavingToString.
__proto__=C.EnumToString;C.AgP.__proto__=C.EnumToCodeset;C.KG.__proto__=C.EnumToCodeset;
C.CalfDeregistrations.__proto__=C.Row;C.DeviceComponentToString.__proto__=C.EnumToString;
C.Af0.__proto__=C.EnumToCodeset;C.AdU.__proto__=C.EnumToIcon;C.WhereAboutsFilterCriterion.
__proto__=C.FilterCriterion;C.TimespanDaysToString.__proto__=C.EnumToString;C.USBStateToString.
__proto__=C.EnumToString;C.AnimalIdAutoGenerationMethodToString.__proto__=C.EnumToString;
C.MonthToString.__proto__=C.EnumToString;C.ATa.__proto__=C.Int32ArrayWrapper;C.AS$.
__proto__=C.Int32ArrayWrapper;C.ATc.__proto__=C.Int32ArrayWrapper;C.AS_.__proto__=
C.Int32ArrayWrapper;C.AKw.__proto__=C.Int32ArrayWrapper;C.TransponderAssignmentIdChangeMethodToString.
__proto__=C.EnumToString;C.AnimalTableFieldsToString.__proto__=C.EnumToString;C.
DataExportDestinationToString.__proto__=C.EnumToString;C.ListViewScopeToString.__proto__=
C.EnumToString;};C._ReInit=function(){var B;if((B=C.Device._this))B._ReInit();if((
B=C.Converter._this))B._ReInit();if((B=C.Helper._this))B._ReInit();if((B=C.AvJ._this
))B._ReInit();};C.DE=function(D){var B;if((B=C.Device._this)&&(B._cycle!=D))B._Done(
C.Device._this=null);if((B=C.Converter._this)&&(B._cycle!=D))B._Done(C.Converter.
_this=null);if((B=C.Helper._this)&&(B._cycle!=D))B._Done(C.Helper._this=null);if((
B=C.AvJ._this)&&(B._cycle!=D))B._Done(C.AvJ._this=null);};return C;})();

/* VitalControl demonstration application, © Urban GmbH & Co.KG 2023 */