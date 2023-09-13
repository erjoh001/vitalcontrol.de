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
var B_="ERROR: Cannot add criterion, it is already in the list.";var BH="ERROR: BatteryChargeState is read only";
var EV="ERROR: UpdateChargeActive is read only";var GS="ERROR: ScanState is read only.";
var Jt="ERROR: MeasureState is read only.";var IL="ERROR: Temperature value is read only";
var OK="ERROR: UpdateDataTable called for Undefined data table.";var PJ="ERROR: UpdateDataTable called for unknown data table id=";
var N1="ERROR: SyncState is read only.";var CJ="ERROR: ScanTransponder is read only.";
var Fn="ERROR: Body weight value is read only";var Nb="ERROR: Predicted temperature value is read only";
var OL="ERROR: TransferProgress is read only";var KH="ERROR: TransferTarget is read only";
var OM="ERROR: unhandled assessment.";var Nc="Unhandled enum BodyTemperature: ";
var ON="AU";var Ss="AT";var T9="BE";var Zc="BA";var Wa="BG";var I$="CA";var T_="CN";
var Zd="TW";var Wb="HR";var Ze="CY";var T$="CZ";var Zf="DK";var Zg="EE";var Ua="FI";
var Wc="FR";var QT="DE";var Zh="GR";var OO="HU";var PK="IE";var Ub="IT";var Zi="JP";
var Wd="LV";var Zj="LT";var Zk="LU";var We="MT";var Wf="NL";var St="NO";var Zl="PL";
var Zm="PT";var AbO="RO";var Su="RU";var AbP="SK";var AeN="SI";var Zn="ES";var Wg=
"SE";var Wh="CH";var AeO="TR";var AeP="UA";var JT="UK";var AeQ="US";var Li=".";var
Ag$="-";var Anf="ERROR: Unhandled mass unit: ";var N2=" ";var Wi="Unhandled gender";
var Ang="Unhandled animal type";var Aha="Unhandled Device::MassUnit.";var Ahb="Unhandled Device::AnimalListContent.";
var AbQ="Avid";var Uc="Ordicam / IER SA";var Anh="Agrident";var Ani="Datamars";var
Awi="Allflex";var Awj="Texas Instruments";var Akh="Nedap";var Awk="Digital Angel";
var AeR="null";var Arw="[ ";var OP=", ";var Sv=" ]";var Awl="Unhandled language";
var Sw="Unhandled Device::AnimalListAction.";var Arx="Temperature unit conversion not supported: ";
var Awm="->";var Awn="=";var Awo=">";var Anj="<";var Awp="!=";var Ary="WARNING: Unhandled operator.";
var KI="Unknown birth type";var Awq="Unhandled country: ";var AbR="ERROR: Cannot start transaction";
var Awr="ERROR: Table is null, cannot load row (";var AFk=")";var AFl="Table Id mismatch!";
var AFm="ERROR: Row index (";var AFn=") out of bounds [0,";var Aws="]";var ATm="ERROR: Table is full. Item limit: ";
var ATn="Device::ScanTransponder not set";var ATo="Unhandled TransponderType.";var
ATp="Unhandled ScanState.";var ATq="Could not load animal with transponder";var Arz=
"Birth type";var Awt="Time calving";var QU="Pend. reg. notice";var Awu="Perished";
var ATr="Rating temp.";var ATs=" mother";var ATt="Reason leaving";var ATu="Time alarm";
var AFo="Time first weighing";var AFp="Time control";var AeS="Time temp.";var Ank=
"Time watch";var ATv="Time weighing";var AFq="Assessment";var Aki="Time rating";
var AFr="ERROR: Unhandled AnimalTable filter field:";var Awv="Field ";var ATw="ERROR: Unhandled RatingTable filter field:";
var ATx="ERROR: Unhandled table ";var ATy=" filter fields.";var ATz="WARNING: Unhandled filter criterion type.";
var AbS="0";var ArA="No table specified";var AFs="Invalid animal id generation method: ";
var AFt="Unhandled AnimalIdGenerationMethod: ";var Aww="Invalid gender: ";var AFu=
"Invalid ear tag number assignment mode: ";var Awx=";";var ATA="Invalid animal creation error code: ";
var ATB="Invalid EartagNrAssignmentMode: ";var ATC="Unsupported exponent: ";var ATD=
"Unknown whereabouts type: ";var AFv="Unhandled Gender: ";var ATE="Unhandled AnimalIdAutoGenerationMethod: ";
var OQ="\n";var Awy="\n\n";var ATF="Bootloader:\nV\xA0";var ATG="Middleware:\nV\xA0";
var ATH="GUI:\nV\xA0";var ATI="Mainboard: ";var ATJ="Torchboard: ";var ATK="Operator not supported.";
var ATL="Unhandled Device::TransponderAssignmentIdChangeMethod: ";var ArB="Unhandled enum value ";
var Awz="UNDEFINED";var AFw="Boot";var ATM="Charge";var AFx="ChargeWarning";var ATN=
"ControlledPowerOff";var ATO="DeviceMain";var ATP="DeviceService";var ATQ="DeviceInfo";
var AFy="DeviceBackup";var ATR="DeviceCheck";var AwA="Home";var AFz="Settings";var
AFA="DateTimeSettings";var ATS="UnitsSettings";var AFB="DataAcquisitionSettings";
var ATT="RegistrationAutomaticSettings";var ATU="RegistrationPresettingsSettings";
var QV="TransponderAssignmentSettings";var Wj="TemperatureSettings";var ATV="WeightGainSettings";
var ATW="DeviceSettings";var ATX="RegistrationSettings";var ATY="InitializationSettings";
var ATZ="PremisesSettings";var AT0="Sleep";var AT1="Sync";var Ahc="EditAnimalData";
var AFC="EditAnimalDataNaisId";var AT2="AnimalList";var AT3="AnimalListFilter";var
AFD="AlarmListFilter";var AFE="WatchListFilter";var AwB="AnimalActionActions";var
QW="AnimalActionTemperature";var AT4="TemperatureMeasurement";var AT5="AnimalActionWeighing";
var AT6="AnimalActionRate";var ArC="AnimalActionUnregister";var AT7="AnimalActionPerished";
var AT8="AnimalActionNewBornCare";var AT9="AlarmList";var AT_="ControlMeasure";var
AT$="ControlList";var AUa="RangeTest";var ArD="ListsMain";var AUb="ListsIdManagement";
var AUc="WatchList";var AUd="AnimalListActions";var AUe="AlarmListActions";var AUf=
"ControlListActions";var AUg="WatchListActions";var AUh="EvaluationMenuMain";var
AUi="EvaluationMenuWeights";var AUj="EvaluationLosses";var AUk="EvaluationRatings";
var AFF="EvaluationTemperatures";var ArE="EvaluationWeights";var AUl="EvaluationWeightsRecent";
var AUm="EvaluationBirthWeights";var AUn="AnimalEvaluationFilter";var AwC="NewMenu";
var Akj="NewAnimals";var AeT="NewAnimalManualData";var ArF="MassRecording";var Akk=
"NewAnimalTransponderData";var Ahd="NewAnimalLoss";var AUo="AutoActionScanScreen";
var ArG="ManualActionScanScreen";var AFG="SetTransponderScreen";var AeU="SetSaveTransponderScreen";
var AFH="NewAnimalSetTransponderScreen";var Wk="NewAnimalsSetTransponderScreen";
var Akl="NewAnimalCalvingDataScreen";var Anl="WeightListScreen";var AUp="AnimalSingleInfoScreen";
var AUq="AnimalMultiInfoScreen";var AUr="AnimalRegistrationDetails";var AUs="MultiInfoActionsScreen";
var AUt="FreshCowListScreen";var ArH="FreshCowListActionsScreen";var AFI="FreshCowListFilterScreen";
var AFJ="DryCowListScreen";var AUu="DryCowListActionsScreen";var AUv="DryCowListFilterScreen";
var AUw="NoTransponderListScreen";var AUx="NoTransponderListActionsScreen";var AUy=
"NoTransponderListFilterScreen";var AUz="YoungNoTransponderListScreen";var AFK="YoungNoTransponderListActionsScreen";
var AUA="YoungNoTransponderListFilterScreen";var AwD="NoNaisIdListScreen";var AFL=
"NoNaisIdListActionsScreen";var AFM="NoNaisIdListFilterScreen";var AFN="RegistrationsListScreen";
var AFO="RegistrationsListActionsScreen";var AFP="RegistrationsListFilterScreen";
var AFQ="ActionListScreen";var AUB="ActionListActionsScreen";var AUC="ActionListFilterScreen";
var AUD="UpdateScreen";var AUE="MotherScanScreen";var AUF="SetSaveNaisIdScreen";
var AUG="PurchasedAnimalsList";var AUH="TextInput";var AwE="Unhandled display mode: ";
var AFR="None";var AUI="Actions Settings";var AFS="Auto Action";var Akm="Menu Item Settings";
var Zo="Rating Type";var AUJ="Weighing settings";var AeV="Options";var AUK="AnimalSearch";
var AUL="AnimalSearchUnfiltered";var ArI="AnimalSearchDriedOff";var AeW="MeasurementReady";
var Anm="AnimalMultiInfoMenu";var AFT="MassRecordingDefaults";var AUM="MassRecordingFields";
var OR="MassRecordingMenu";var AUN="PurchasedAnimalsListMenu";var AUO="BirthRegistrationsListMenu";
var AUP="Unhandled overlay menu: ";var AwF="Error";var ArJ="Idle";var AFU="IdScanned";
var AUQ="NotFound";var AFV="Progress";var AFW="Unhandled scan state: ";var AUR="Prediction";
var AFX="Ready";var AUS="Unhandled measure state: ";var AUT="Unhandled temperature unit: ";
var AUU="Unhandled species: ";var AFY="English";var AUV="Nederlands";var AFZ="Deutsch";
var AF0="Eesti";var AwG="Suomalainen";var AUW="Fran\xE7ais";var AUX="\u0395\u03BB\u03BB\u03B7\u03BD\u03B9\u03BA\u03AC";
var AUY="\u0411\u044A\u043B\u0433\u0430\u0440\u0441\u043A\u0438";var AUZ="Italiano";
var AU0="\u0420\u0443\u0441\u0441\u043A\u0438\u0439";var AU1="Espa\xF1ol";var AU2=
"T\xFCrk\xE7e";var AU3="\u6B63\u9AD4\u5B57/\u7E41\u9AD4\u5B57";var ArK="\u010Ce\u0161tina";
var Ann="Bosanski";var AF1="Norsk";var AU4="\u0423\u043A\u0440\u0430\u0457\u043D\u0441\u044C\u043A\u0438\u0439";
var AF2="Unhandled language: ";var AU5="EN";var AU6="ET";var AU7="EL";var AU8="ZH";
var AU9="CS";var AU_="BS";var AU$="Unhandled gender: ";var AVa="Unhandled birth type: ";
var AVb="Exporting";var AVc="ImportFinish";var AVd="ImportStart";var AVe="Importing";
var AVf="Init";var AVg="Unhandled sync state: ";var AF3="Unhandled rating attribute: ";
var AVh="Unhandled assessment: ";var Akn="Illegal boolean value: ";var AwH="Unhandled popup ID:";
var AF4="Unknown";var AF5="Severe Error";var AF6="ErrorsDeviceDriverCheck";var AF7=
"Enter Sleep";var AwI="About";var AF8="InfoSoftwareVersions";var AVi="InfoHardwareVersions";
var AVj="InfoSerial";var AVk="ShutDown";var AF9="SuccessDataSync";var AVl="SuccessResetFactory";
var AVm="SuccessResetAnimalData";var AVn="SuccessCreateBackup";var AVo="SuccessRestoreBackup";
var AVp="CreateBackupInProgress";var AVq="RestoreBackupInProgress";var AVr="FailedCreateBackup";
var AVs="FailedRestoreBackup";var AwJ="TechnicalDetails";var AVt="WarningDataSync";
var AVu="WarningFactory";var AwK="WarningResetAnimalData";var ArL="WarningRestart";
var Zp="WarningAutoAction";var ArM="WarningAutoActionNotApplicable";var AVv="WarningNoMenuItem";
var AVw="WarningEnterDemoMode";var AVx="NoAnimalsRegistered";var AF_="MaxNumAnimalsReached";
var AVy="MaxNumRatingsReached";var AF$="MaxNumCalfDeregistrationsReached";var AVz=
"ScanInTransponder";var AVA="WarningScanOverwriteNaisId";var AVB="EarTagNumberTooShort";
var ArN="NoValidCountryCode";var AVC="WarningOutdatedAnimalWeight";var AVD="WarningOutdatedAnimalWeights";
var AGa="WarningWeightEvaluationSingular";var AVE="WarningWeightEvaluationPlural";
var AVF="ScanError";var AVG="ScanNotFound";var AVH="ScannedAnimalNotFound";var AbT=
"ScannedTransponderNotFound";var AVI="AnimalNotFound";var AVJ="SuccessUnregister";
var AVK="SuccessUnregisterPerished";var AVL="SuccessCreationNewAnimal";var AGb="SuccessCreationNewAnimals";
var AVM="AnimalCreationInProgress";var AVN="EvaluationInProgress";var AVO="DataSyncInProgress";
var AVP="AddedToAlarm";var AVQ="RemovedFromAlarm";var AVR="AddedToWatch";var AGc=
"RemovedFromWatch";var AVS="AddedToDryOff";var AVT="RemovedFromDryOff";var AVU="AnimalIdAlreadyExists";
var AGd="AnimalIdAlreadyExistsContinuable";var AGe="MissingAnimalId";var AVV="MissingAnimalIdMother";
var AVW="MissingEartagNumber";var AVX="MissingTransponderId";var AVY="TransponderAlreadyRegistered";
var QX="TransponderAlreadyRegisteredContinuable";var ArO="HelpAnimalInfoRating";
var AGf="CannotReassignTransponder";var AGg="CannotReassignNaisId";var Ano="WarningResetToDefaultValue";
var Anp="WarningResetThresholds";var AwL="WarningResetTempThresholds";var AVZ="UpdateFirmware";
var AGh="UpdateFirmwareBatteryLow";var AV0="ConfirmFirmwareUpdated";var AV1="ConfirmBootloaderUpdated";
var AV2="QuestionAddAnotherCalfMultiples";var AV3="RemovedAllBirthNoticesPending";
var AV4="RemovedAllPurchasedNoticePending";var AV5="RemovedFromBirthNoticePending";
var AV6="RemovedFromPurchasedNoticePending";var AV7="SuccessClearAnimalLoss";var
AV8="RemovedAnimal";var AV9="WarningNoActionsForAnimalLoss";var AV_="SuccessLinkTransponder";
var AV$="SuccessUnlinkTransponder";var AWa="SuccessLinkNaisId";var AWb="WarningDataExportHitBirthFailed";
var AWc="SuccessDataExportHitBirth";var AWd="SuccessDataExportHitBirthDownload";
var AWe="WarningDataExportHitPurchasedFailed";var Anq="SuccessDataExportHitPurchased";
var AGi="SuccessDataExportHitPurchasedDownload";var AWf="WarningDataExportAnimalsFailed";
var AGj="SuccessDataExportAnimalsRatings";var AGk="SuccessDataExportAnimalsDownload";
var Zq="WarningNoPremisesID";var AGl="WarningNoFlashDrivePresent";var AWg="WarningNoBackupPathPresent";
var AGm="WarningNoBackupFilePresent";var AWh="DemoFunctionNotAvailable";var AwM=
"WarningImpreciseTimeSetting";var AWi="ConfirmationRestoreBackup";var AWj="WarningParsedDateInFutureInvalid";
var AwN="WarningParsingDateFailed";var AWk="WarningParsingNaisIdFailed";var AWl=
"AnimalId";var AWm="FarmId";var AGn="GroupId";var Anr="PersonId";var AGo="Unhandled transponder type: ";
var AWn="FDX";var AGp="HDX";var AGq="HDX (Urban)";var Ako="Unhandled transponder protocol: ";
var AWo="Illegal RatingMode: ";var Ans="Unhandled mass unit: ";var AWp="Max array size is 10";
var AwO="Index out of bounds";var AGr="ERROR: Received more integers than expected!";
var AGs="Unhandled double scan action :";var AWq="Illegal WeightRecordingMode: ";
var AGt="Illegal WeightRecordingScope: ";var AWr="AnimalData";var AWs="Rating";var
AWt="Temperature";var AWu="Weight";var AWv="Alarm infos";var AWw="Control infos";
var AWx="Watch infos";var AWy="Fresh cow infos";var AWz="No transponder infos";var
AWA="Dry cow info";var AWB="No nais id infos";var AWC="Registrations infos";var AWD=
"Unhandled animal list content:";var AGu="Illegal AutoRegistrationMode: ";var Zr=
"Illegal FactoryResetScope: ";var Ant="??";var AwP="Illegal EaseOfDelivery: ";var
AWE="Illegal Whereabouts: ";var AWF="Illegal breed: ";var AWG="Unisex";var AWH="Illegal animalIdGenerationMethod: ";
var AWI="Ascending";var AWJ="Descending";var ArP="Illegal directionOfCountingName: ";
var Anu="Unhandled direction of counting: ";var Ahe="Unhandled German state: ";var
ArQ="SH";var AwQ="HH";var Anv="NI";var AWK="HB";var AGv="NW";var AWL="HE";var AWM=
"RP";var AWN="BW";var AWO="BY";var AWP="SL";var AWQ="BB";var AWR="MV";var AWS="SN";
var AWT="ST";var AWU="TH";var AWV="One Range Male Female";var AWW="Two Ranges Male Female";
var AGw="Illegal EartagAssignmentMode: ";var AwR="Unhandled code set value ";var
AGx="Implement in derived class";var AwS="Illegal HIT-Code: ";var AwT="Illegal ReasonOfLeaving: ";
var AGy="Illegal code: ";var AWX="Undefined";var AWY="Illegal DeviceComponent: ";
var AGz="Unhandled Device::MotherSelectionFilterMode: ";var AWZ="Illegal Device::TimespanDays: ";
var AW0="Not connected";var AW1="Host";var AW2="Device";var AW3="Device CDC";var
AW4="Host MSC";var AW5="Host HID";var AW6="Illegal animalIdAutoGenerationMethod: ";
var AGA="Unhandled month: ";var AW7="Illegal transponderAssignmentIdChangeMethod: ";
var AW8="Unhandled animal table field: ";var AW9="Unhandled data export destination: ";
var AW_="Unhandled list view scope: ";
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
B7:null,B4:null,C0:function(AL){if(!AL)return;var Av=this.B7;while(!!Av){if(Av===
AL)throw new Error(B_);Av=Av.Af;}AL.AG=this.B4;if(!!this.B4)this.B4.Af=AL;this.B4=
AL;if(!this.B7)this.B7=AL;},AMB:function(){return this.B7;},AMF:function(A_i){if(
!!A_i)return A_i.Af;return null;},D0:function(AG_,EE){var Av=this.B7;while(!!Av){
if(Av.ET===AG_){if(EE===1)return Av;else if(Av.Operator===EE)return Av;}Av=Av.Af;
}return null;},QD:function(AL){var Av=this.B7;while(!!Av){if(Av===AL){if(!!Av.AG
)Av.AG.Af=Av.Af;if(!!Av.Af)Av.Af.AG=Av.AG;if(this.B7===Av)this.B7=Av.Af;if(this.
B4===Av)this.B4=Av.AG;Av.Af=null;Av.AG=null;return;}Av=Av.Af;}},Gs:function(){var
Bb=A._NewObject(C.Filter,0);var Av=this.B7;while(!!Av){Bb.C0(Av.Adi());Av=Av.Af;
}return Bb;},_Init:function(aArg){this.__proto__=C.Filter;A.hJ++;},_Done:function(
){this.__proto__=null;A.hJ--;},_ReInit:function(){},_Mark:function(D){var B;if((
B=this.B7)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.B4)&&(B._cycle!=D))B._Mark(
B._cycle=D);if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:
null,_className:"Device::Filter"};C.FilterCriterion={Af:null,AG:null,ET:-1,Operator:
1,AaQ:false,Adi:function(){return null;},Gs:function(AL){if(!AL)return;this.ET=AL.
ET;this.Operator=AL.Operator;this.AaQ=AL.AaQ;},_Init:function(aArg){this.__proto__=
C.FilterCriterion;A.hJ++;},_Done:function(){this.__proto__=null;A.hJ--;},_ReInit:
function(){},_Mark:function(D){var B;if((B=this.Af)&&(B._cycle!=D))B._Mark(B._cycle=
D);if((B=this.AG)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.I)&&(B._cycle!=D
))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:"Device::FilterCriterion"
};C.Int32FilterCriterion={A4:0,Adi:function(){var Av=A._NewObject(C.Int32FilterCriterion
,0);Av.Gs(this);return Av;},Gs:function(AL){C.FilterCriterion.Gs.call(this,AL);var
Av=(C.Int32FilterCriterion.isPrototypeOf(AL)?AL:null);if(!!Av)this.A4=Av.A4;},Initialize:
function(AX,EE,A1,Sz){this.ET=AX;this.Operator=EE;this.A4=A1;this.AaQ=Sz;return this;
},_Init:function(aArg){C.FilterCriterion._Init.call(this,aArg);this.__proto__=C.
Int32FilterCriterion;},_className:"Device::Int32FilterCriterion"};C.DeviceClass={
ACm:0,ACl:0,Aux:0,YK:0,PD:null,R3:null,Qs:null,Sj:null,Rt:null,Ao:null,Bq:null,AfI:
null,AmS:null,Pa:null,As$:A.jm,AutoActions:A.jm,AzR:A.jm,AEX:A.jm,AEY:A.jm,AgX:A.
jm,AFf:A.jm,AFg:A.jm,AzS:A.jm,AFe:A.jm,AFi:A.jm,AzL:A.jm,AzM:A.jm,Z$:100,Kj:0,AKW:
75,Y$:3600,ARF:0,FP:5,Fx:0,IK:50000,P7:0,AEa:0,Ait:0,ApJ:0,ApI:0,APB:1,APA:1,Ai6:
0,APC:1,Av7:0,AeC:0,Apy:10,ASk:5,ACd:60,Aus:0,WhereAbouts:0,U4:0,Ag6:0,Av1:3,AAO:
0,AlC:0,AfK:1,Akc:0,Aa5:0,Apc:0,APO:12,ALO:11,Breed:0,EartagNrAssignmentMode:0,Atz:
0,AAH:0,AAG:0,Ia:5,AzK:2,Ape:0,APT:8,AMs:2,AS5:0,D3:0,AJ6:0,JD:0,Gender:2,WeightRecordingScope:
1,WeightRecordingMode:1,AnimalType:0,MassUnit:0,AutoRegistrationMode:0,RatingMode:
0,SyncState:0,OverlayMenu:0,TemperatureUnit:0,Language:0,MeasureState:0,ScanState:
0,Ku:3,AdM:true,APn:false,Alx:true,AlY:false,AlU:true,Hv:false,ASN:false,AlV:false
,AS3:false,Arq:false,ACk:false,AlJ:false,UpdateActiveScreen:function(AI){if(this.
Ku===AI)return;this.Ku=AI;A.aat([this,this.ACy,this.A9y],0);},Yy:function(E){if(
this.K&&this.K.Yy)return this.K.Yy.apply(this,arguments);else return C.DeviceClass.
BqD.apply(this,arguments);},BqD:function(E){},A9y:function(An){this.Yy(An);},UpdateBatteryChargeState:
function(AI){if(this.Z$===AI)return;this.Z$=AI;A.aat([this,this.Auz,this.AwZ],0);
},AuV:function(E){if(this.K&&this.K.AuV)return this.K.AuV.apply(this,arguments);
else return C.DeviceClass.BqP.apply(this,arguments);},BqP:function(E){A.aa8("%s"
,BH);},AwZ:function(An){this.AuV(An);},UpdateChargeActive:function(AI){if(this.AlJ===
AI)return;this.AlJ=AI;A.aat([this,this.AuC,this.Aw0],0);},ACZ:function(E){if(this.
K&&this.K.ACZ)return this.K.ACZ.apply(this,arguments);else return C.DeviceClass.
BqV.apply(this,arguments);},BqV:function(E){A.aa8("%s",EV);},Aw0:function(An){this.
ACZ(An);},UpdateScanState:function(AI){var B;if(this.ScanState===AI)return;this.
ScanState=AI;A.aat([this,this.AQr,this.AXD],0);A._GetAutoObject(C.Helper).BwM(this
);},AqD:function(E){if(this.K&&this.K.AqD)return this.K.AqD.apply(this,arguments
);else return C.DeviceClass.Brz.apply(this,arguments);},Brz:function(E){A.aa8("%s"
,GS);},AXD:function(An){this.AqD(An);},UpdateMeasureState:function(AI){if(this.MeasureState===
AI)return;this.MeasureState=AI;A.aat([this,this.ACE,this.AGQ],0);},Avh:function(
E){if(this.K&&this.K.Avh)return this.K.Avh.apply(this,arguments);else return C.DeviceClass.
Brh.apply(this,arguments);},Brh:function(E){A.aa8("%s",Jt);},AGQ:function(An){this.
Avh(An);},UpdateTempValue:function(AI){if(this.Kj===AI)return;this.Kj=AI;A.aat([
this,this.ACI,this.AGT],0);},Avr:function(E){if(this.K&&this.K.Avr)return this.K.
Avr.apply(this,arguments);else return C.DeviceClass.BrF.apply(this,arguments);},
BrF:function(E){A.aa8("%s",IL);},AGT:function(An){this.Avr(An);},AmH:function(E){
if(this.K&&this.K.AmH)return this.K.AmH.apply(this,arguments);else return C.DeviceClass.
Brc.apply(this,arguments);},Brc:function(E){},A9N:function(An){this.AmH(An);},Avs:
function(E){if(this.K&&this.K.Avs)return this.K.Avs.apply(this,arguments);else return C.
DeviceClass.BrG.apply(this,arguments);},BrG:function(E){},ArU:function(An){this.
Avs(An);},ACX:function(E){if(this.K&&this.K.ACX)return this.K.ACX.apply(this,arguments
);else return C.DeviceClass.BqU.apply(this,arguments);},BqU:function(E){},A9G:function(
An){this.ACX(An);},ADt:function(E){if(this.K&&this.K.ADt)return this.K.ADt.apply(
this,arguments);else return C.DeviceClass.Brj.apply(this,arguments);},Brj:function(
E){},AXw:function(An){this.ADt(An);},UpdateMonitoring:function(AI){if(this.ACk===
AI)return;this.ACk=AI;A.aat([this,this.AQh,this.AXw],0);},UpdateDataTable:function(
A_j){var B;switch(A_j){case 0:A.ow([B=this.Ao,B.Aju],this);break;case 1:A.ow([B=
this.Bq,B.Aju],this);break;case 3:A.ow([B=this.AfI,B.Aju],this);break;case 4:A.ow([
B=this.Pa,B.Aju],this);break;case 2:A.aa8("%s",OK);break;default:A.aa8("%s%e",PJ
,A_j);}},Av0:function(){if(this.K&&this.K.Av0)return this.K.Av0.apply(this,arguments
);else return C.DeviceClass.Br_.apply(this,arguments);},Br_:function(){},Ag0:function(
){if(this.K&&this.K.Ag0)return this.K.Ag0.apply(this,arguments);else return C.DeviceClass.
Bsb.apply(this,arguments);},Bsb:function(){},Aes:function(){if(this.K&&this.K.Aes
)return this.K.Aes.apply(this,arguments);else return C.DeviceClass.Br$.apply(this
,arguments);},Br$:function(){},Am2:function(){if(this.K&&this.K.Am2)return this.
K.Am2.apply(this,arguments);else return C.DeviceClass.Bsc.apply(this,arguments);
},Bsc:function(){},UpdateLanguage:function(AI){if(this.Language===AI)return;this.
Language=AI;switch(AI){case 14:A._SetLanguage(1);break;case 13:A._SetLanguage(2);
break;case 6:A._SetLanguage(3);break;case 11:A._SetLanguage(4);break;case 0:A._SetLanguage(
0);break;case 10:A._SetLanguage(5);break;case 12:A._SetLanguage(6);break;case 5:
A._SetLanguage(7);break;case 3:A._SetLanguage(8);break;case 1:A._SetLanguage(9);
break;case 8:A._SetLanguage(10);break;case 4:A._SetLanguage(11);break;case 15:A.
_SetLanguage(13);break;case 9:A._SetLanguage(15);break;case 2:A._SetLanguage(16);
break;case 7:A._SetLanguage(17);break;case 16:A._SetLanguage(18);break;default:A.
_SetLanguage(0);}A.aat([this,this.A5J,this.A9N],0);},UpdateTemperatureUnit:function(
AI){if(this.TemperatureUnit===AI)return;this.TemperatureUnit=AI;A.aat([this,this.
Aqc,this.ArU],0);},UpdateBrightness:function(AI){if(this.AKW===AI)return;this.AKW=
AI;A.aat([this,this.A5y,this.A9G],0);},SetSystemTime:function(Aho){if(this.K&&this.
K.SetSystemTime)return this.K.SetSystemTime.apply(this,arguments);else return C.
DeviceClass.Br8.apply(this,arguments);},Br8:function(Aho){},AvW:function(){if(this.
K&&this.K.AvW)return this.K.AvW.apply(this,arguments);else return C.DeviceClass.
A9o.apply(this,arguments);},A9o:function(){},AEn:function(){if(this.K&&this.K.AEn
)return this.K.AEn.apply(this,arguments);else return C.DeviceClass.A9m.apply(this
,arguments);},A9m:function(){},BkN:function(){},UpdateOverlayMenu:function(AI){if(
this.OverlayMenu===AI)return;this.OverlayMenu=AI;A.aat([this,this.ACH,this.AGS],
0);},Co:function(E){if(this.K&&this.K.Co)return this.K.Co.apply(this,arguments);
else return C.DeviceClass.Bru.apply(this,arguments);},Bru:function(E){},AGS:function(
An){this.Co(An);},Avx:function(E){if(this.K&&this.K.Avx)return this.K.Avx.apply(
this,arguments);else return C.DeviceClass.BrP.apply(this,arguments);},BrP:function(
E){},A9W:function(An){this.Avx(An);},UpdateUnderTemp:function(AI){if(this.Y$===AI
)return;this.Y$=AI;A.aat([this,this.A57,this.A9W],0);},UpdateSyncState:function(
AI){if(this.SyncState===AI)return;this.SyncState=AI;A.aat([this,this.AQt,this.AXF
],0);},Abm:function(E){if(this.K&&this.K.Abm)return this.K.Abm.apply(this,arguments
);else return C.DeviceClass.BrE.apply(this,arguments);},BrE:function(E){A.aa8("%s"
,N1);},AXF:function(An){this.Abm(An);},AA_:function(){if(this.K&&this.K.AA_)return this.
K.AA_.apply(this,arguments);else return C.DeviceClass.Bqv.apply(this,arguments);
},Bqv:function(){return A.jm;},UpdatePopup:function(Kn,AYm,AYi,AYp){this.A5(Kn,AYm
,AYi,AYp,[this,this.Bwu]);},PopupStateChanged:function(Kn,Ae){if(this.K&&this.K.
PopupStateChanged)return this.K.PopupStateChanged.apply(this,arguments);else return C.
DeviceClass.Br1.apply(this,arguments);},Br1:function(Kn,Ae){},ADW:function(E){if(
this.K&&this.K.ADW)return this.K.ADW.apply(this,arguments);else return C.DeviceClass.
BrR.apply(this,arguments);},BrR:function(E){},A9X:function(An){this.ADW(An);},UpdateVibrationOnKeypressEnabled:
function(AI){if(this.Arq===AI)return;this.Arq=AI;A.aat([this,this.A58,this.A9X],
0);},Ad8:function(E){if(this.K&&this.K.Ad8)return this.K.Ad8.apply(this,arguments
);else return C.DeviceClass.BrQ.apply(this,arguments);},BrQ:function(E){},AGU:function(
An){this.Ad8(An);},UpdateVibrationOn:function(A_L){if(this.AS3===A_L)return;this.
AS3=A_L;A.aat([this,this.ACJ,this.AGU],0);},A5:function(Kn,AYm,AYi,AYp,BtD){var Afy=
A._NewObject(C.PopupContext,0);Afy.Id=Kn;Afy.Show=AYm;Afy.AjP=AYi;Afy.Aj_=AYp;Afy.
AD5=BtD;this.AmS.Trigger(Afy,false);},Bwu:function(H){var Ar=(C.PopupContext.isPrototypeOf(
H)?H:null);if(!!Ar)this.PopupStateChanged(Ar.Id,Ar.PopupState);},Avo:function(E){
if(this.K&&this.K.Avo)return this.K.Avo.apply(this,arguments);else return C.DeviceClass.
Bry.apply(this,arguments);},Bry:function(E){},AXC:function(An){this.Avo(An);},UpdateRatingMode:
function(AI){if(this.RatingMode===AI)return;this.RatingMode=AI;A.aat([this,this.
AQq,this.AXC],0);},Ad0:function(E){if(this.K&&this.K.Ad0)return this.K.Ad0.apply(
this,arguments);else return C.DeviceClass.Bq6.apply(this,arguments);},Bq6:function(
E){},ArT:function(An){this.Ad0(An);},UpdateFlashLightOn:function(A_r){if(this.AlV===
A_r)return;this.AlV=A_r;A.aat([this,this.Ap$,this.ArT],0);},YI:function(E){if(this.
K&&this.K.YI)return this.K.YI.apply(this,arguments);else return C.DeviceClass.BrJ.
apply(this,arguments);},BrJ:function(E){},AXG:function(An){this.YI(An);},UpdateTopLightOn:
function(A_G){if(this.ASN===A_G)return;this.ASN=A_G;A.aat([this,this.AQv,this.AXG
],0);},Abk:function(E){if(this.K&&this.K.Abk)return this.K.Abk.apply(this,arguments
);else return C.DeviceClass.Brx.apply(this,arguments);},Brx:function(E){},Bss:function(
An){this.Abk(An);},UpdateRGBTopLight:function(A_B){if(this.ARF===A_B)return;this.
ARF=A_B;A.aat([this,this.BhD,this.Bss],0);},AuU:function(E){if(this.K&&this.K.AuU
)return this.K.AuU.apply(this,arguments);else return C.DeviceClass.BqO.apply(this
,arguments);},BqO:function(E){},Bsk:function(An){this.AuU(An);},UpdateAutoRegistrationMode:
function(A_f){if(this.AutoRegistrationMode===A_f)return;this.AutoRegistrationMode=
A_f;A.aat([this,this.Bg4,this.Bsk],0);},AqE:function(E){if(this.K&&this.K.AqE)return this.
K.AqE.apply(this,arguments);else return C.DeviceClass.BrA.apply(this,arguments);
},BrA:function(E){A.aa8("%s",CJ);},AXE:function(An){this.AqE(An);},UpdateScanTransponder:
function(Kn,A_J,A_I){if(((this.PD.Id===Kn)&&(this.PD.TransponderType===A_J))&&(this.
PD.TransponderProtocol===A_I))return;this.PD.OnSetId(Kn);this.PD.ARi(A_J);this.PD.
ARh(A_I);A.aat([this,this.AQs,this.AXE],0);},Pz:function(E){if(this.K&&this.K.Pz
)return this.K.Pz.apply(this,arguments);else return C.DeviceClass.BqY.apply(this
,arguments);},BqY:function(E){},AbU:function(An){this.Pz(An);},UpdateDigitsID:function(
A_n){if(this.FP===A_n)return;this.FP=A_n;A.aat([this,this.Aa9,this.AbU],0);},Qx:
function(E){if(this.K&&this.K.Qx)return this.K.Qx.apply(this,arguments);else return C.
DeviceClass.Brt.apply(this,arguments);},Brt:function(E){},AbV:function(An){this.
Qx(An);},UpdateOffsetID:function(A_y){if(this.Fx===A_y)return;this.Fx=A_y;A.aat([
this,this.Aa_,this.AbV],0);},AD0:function(E){if(this.K&&this.K.AD0)return this.K.
AD0.apply(this,arguments);else return C.DeviceClass.BrY.apply(this,arguments);},
BrY:function(E){A.aa8("%s",Fn);},AGV:function(An){this.AD0(An);},UpdateWeightValue:
function(AI){if(this.IK===AI)return;this.IK=AI;A.aat([this,this.ACK,this.AGV],0);
},Avf:function(E){if(this.K&&this.K.Avf)return this.K.Avf.apply(this,arguments);
else return C.DeviceClass.Brf.apply(this,arguments);},Brf:function(E){},AXv:function(
An){this.Avf(An);},UpdateMassUnit:function(AI){if(this.MassUnit===AI)return;this.
MassUnit=AI;A.aat([this,this.AQg,this.AXv],0);},Aqf:function(E){if(this.K&&this.
K.Aqf)return this.K.Aqf.apply(this,arguments);else return C.DeviceClass.A9i.apply(
this,arguments);},A9i:function(E){},A9v:function(An){this.Aqf(An);},Aqg:function(
E){if(this.K&&this.K.Aqg)return this.K.Aqg.apply(this,arguments);else return C.DeviceClass.
A9j.apply(this,arguments);},A9j:function(E){},AXo:function(An){this.Aqg(An);},UpdateActiveActions:
function(AI){if(this.P7===AI)return;this.P7=AI;A.aat([this,this.A5i,this.A9v],0);
},UpdateActiveActionsOrder:function(AI){if(this.As$===AI)return;this.As$=AI;A.aat([
this,this.AP4,this.AXo],0);},Abb:function(E){if(this.K&&this.K.Abb)return this.K.
Abb.apply(this,arguments);else return C.DeviceClass.A9k.apply(this,arguments);},
A9k:function(E){},A9E:function(An){this.Abb(An);},UpdateAutoActions:function(AI){
if(this.AutoActions===AI)return;this.AutoActions=AI;A.aat([this,this.A5u,this.A9E
],0);},AEO:function(){if(this.K&&this.K.AEO)return this.K.AEO.apply(this,arguments
);else return C.DeviceClass.Bsa.apply(this,arguments);},Bsa:function(){},Arg:function(
){if(this.K&&this.K.Arg)return this.K.Arg.apply(this,arguments);else return C.DeviceClass.
Bse.apply(this,arguments);},Bse:function(){},DV:function(E){if(this.K&&this.K.DV
)return this.K.DV.apply(this,arguments);else return C.DeviceClass.BqL.apply(this
,arguments);},BqL:function(E){},Bsj:function(An){this.DV(An);},UpdateAnimalType:
function(Ee){if(this.AnimalType===Ee)return;this.AnimalType=Ee;A.aat([this,this.
Py,this.Bsj],0);},Avy:function(E){if(this.K&&this.K.Avy)return this.K.Avy.apply(
this,arguments);else return C.DeviceClass.BrW.apply(this,arguments);},BrW:function(
E){},A92:function(An){this.Avy(An);},UpdateWeightRecordingMode:function(A_N){if(
this.WeightRecordingMode===A_N)return;this.WeightRecordingMode=A_N;A.aat([this,this.
A6e,this.A92],0);},ADB:function(E){if(this.K&&this.K.ADB)return this.K.ADB.apply(
this,arguments);else return C.DeviceClass.Brv.apply(this,arguments);},Brv:function(
E){A.aa8("%s",Nb);},AXA:function(An){this.ADB(An);},UpdatePredictedTempValue:function(
AI){if(this.AEa===AI)return;this.AEa=AI;A.aat([this,this.AQn,this.AXA],0);},Se:function(
L0){if(this.K&&this.K.Se)return this.K.Se.apply(this,arguments);else return C.DeviceClass.
Br7.apply(this,arguments);},Br7:function(L0){},AC5:function(E){if(this.K&&this.K.
AC5)return this.K.AC5.apply(this,arguments);else return C.DeviceClass.BqX.apply(
this,arguments);},BqX:function(E){},AGO:function(An){this.AC5(An);},UpdateDemoMode:
function(AI){if(this.Hv===AI)return;this.Hv=AI;A.aat([this,this.ACC,this.AGO],0);
},ACO:function(E){if(this.K&&this.K.ACO)return this.K.ACO.apply(this,arguments);
else return C.DeviceClass.BqE.apply(this,arguments);},BqE:function(E){},A9z:function(
An){this.ACO(An);},UpdateAgeRegistration:function(A_x){if(this.Ait===A_x)return;
this.Ait=A_x;A.aat([this,this.A5n,this.A9z],0);},Avz:function(E){if(this.K&&this.
K.Avz)return this.K.Avz.apply(this,arguments);else return C.DeviceClass.BrX.apply(
this,arguments);},BrX:function(E){},A93:function(An){this.Avz(An);},UpdateWeightRecordingScope:
function(A_C){if(this.WeightRecordingScope===A_C)return;this.WeightRecordingScope=
A_C;A.aat([this,this.A6f,this.A93],0);},JM:function(E){if(this.K&&this.K.JM)return this.
K.JM.apply(this,arguments);else return C.DeviceClass.Bq_.apply(this,arguments);}
,Bq_:function(E){},AXu:function(An){this.JM(An);},UpdateGender:function(LY){if(this.
Gender===LY)return;this.Gender=LY;A.aat([this,this.VJ,this.AXu],0);},Aqv:function(
E){if(this.K&&this.K.Aqv)return this.K.Aqv.apply(this,arguments);else return C.DeviceClass.
Bra.apply(this,arguments);},Bra:function(E){},Aw4:function(An){this.Aqv(An);},UpdateIDLastUsedMale:
function(QY){if(this.ApJ===QY)return;this.ApJ=QY;A.aat([this,this.AuI,this.Aw4],
0);},Aqu:function(E){if(this.K&&this.K.Aqu)return this.K.Aqu.apply(this,arguments
);else return C.DeviceClass.Bq$.apply(this,arguments);},Bq$:function(E){},Aw3:function(
An){this.Aqu(An);},UpdateIDLastUsedFemale:function(QY){if(this.ApI===QY)return;this.
ApI=QY;A.aat([this,this.AuH,this.Aw3],0);},Aba:function(E){if(this.K&&this.K.Aba
)return this.K.Aba.apply(this,arguments);else return C.DeviceClass.BqJ.apply(this
,arguments);},BqJ:function(E){},AGM:function(An){this.Aba(An);},UpdateAnimalListContent:
function(AI){if(this.JD===AI)return;this.JD=AI;A.aat([this,this.ACz,this.AGM],0);
},ACQ:function(E){if(this.K&&this.K.ACQ)return this.K.ACQ.apply(this,arguments);
else return C.DeviceClass.BqF.apply(this,arguments);},BqF:function(E){},A9A:function(
An){this.ACQ(An);},UpdateAlarmListAction:function(AI){if(this.AJ6===AI)return;this.
AJ6=AI;A.aat([this,this.A5p,this.A9A],0);},AC8:function(E){if(this.K&&this.K.AC8
)return this.K.AC8.apply(this,arguments);else return C.DeviceClass.Bq5.apply(this
,arguments);},Bq5:function(E){},A9J:function(An){this.AC8(An);},UpdateFlashLightInMeasureState:
function(A_s){if(this.AlU===A_s)return;this.AlU=A_s;A.aat([this,this.A5B,this.A9J
],0);},AdY:function(E){if(this.K&&this.K.AdY)return this.K.AdY.apply(this,arguments
);else return C.DeviceClass.BqI.apply(this,arguments);},BqI:function(E){},AXq:function(
An){this.AdY(An);},UpdateAnimalInfoContent:function(AI){if(this.D3===AI)return;this.
D3=AI;A.aat([this,this.AP6,this.AXq],0);},ADZ:function(E){if(this.K&&this.K.ADZ)
return this.K.ADZ.apply(this,arguments);else return C.DeviceClass.BrS.apply(this
,arguments);},BrS:function(E){},A9Y:function(An){this.ADZ(An);},UpdateWatchListAction:
function(AI){if(this.AS5===AI)return;this.AS5=AI;A.aat([this,this.A6a,this.A9Y],
0);},AC9:function(E){if(this.K&&this.K.AC9)return this.K.AC9.apply(this,arguments
);else return C.DeviceClass.Bq7.apply(this,arguments);},Bq7:function(E){},A9L:function(
An){this.AC9(An);},UpdateFreshCowListAction:function(AI){if(this.AMs===AI)return;
this.AMs=AI;A.aat([this,this.A5D,this.A9L],0);},AqZ:function(H){if(this.K&&this.
K.AqZ)return this.K.AqZ.apply(this,arguments);else return C.DeviceClass.Br2.apply(
this,arguments);},Br2:function(H){},BBQ:function(s){this.AqZ(s);},Aq1:function(H
){if(this.K&&this.K.Aq1)return this.K.Aq1.apply(this,arguments);else return C.DeviceClass.
Br4.apply(this,arguments);},Br4:function(H){},BBS:function(s){this.Aq1(s);},AuS:
function(E){if(this.K&&this.K.AuS)return this.K.AuS.apply(this,arguments);else return C.
DeviceClass.BqM.apply(this,arguments);},BqM:function(E){},A9C:function(An){this.
AuS(An);},AqF:function(E){if(this.K&&this.K.AqF)return this.K.AqF.apply(this,arguments
);else return C.DeviceClass.BrH.apply(this,arguments);},BrH:function(E){},A9T:function(
An){this.AqF(An);},AqG:function(E){if(this.K&&this.K.AqG)return this.K.AqG.apply(
this,arguments);else return C.DeviceClass.BrI.apply(this,arguments);},BrI:function(
E){},A9U:function(An){this.AqG(An);},Aq3:function(H){if(this.K&&this.K.Aq3)return this.
K.Aq3.apply(this,arguments);else return C.DeviceClass.Br5.apply(this,arguments);
},Br5:function(H){},BBT:function(s){this.Aq3(s);},UpdateTemperaturesLowString:function(
AI){if(this.AEY===AI)return;this.AEY=AI;A.aat([this,this.A53,this.A9U],0);},UpdateTemperaturesHighString:
function(AI){if(this.AEX===AI)return;this.AEX=AI;A.aat([this,this.A52,this.A9T],
0);},UpdateAnimalTypesString:function(AI){if(this.AzR===AI)return;this.AzR=AI;A.
aat([this,this.A5s,this.A9C],0);},ADw:function(E){if(this.K&&this.K.ADw)return this.
K.ADw.apply(this,arguments);else return C.DeviceClass.Brs.apply(this,arguments);
},Brs:function(E){},AXy:function(An){this.ADw(An);},UpdateNoTransponderListAction:
function(AI){if(this.APT===AI)return;this.APT=AI;A.aat([this,this.AQk,this.AXy],
0);},Ava:function(E){if(this.K&&this.K.Ava)return this.K.Ava.apply(this,arguments
);else return C.DeviceClass.Bq9.apply(this,arguments);},Bq9:function(E){},Bso:function(
An){this.Ava(An);},UpdateFreshCowsHideMeasured:function(AI){if(this.AlY===AI)return;
this.AlY=AI;A.aat([this,this.Bhl,this.Bso],0);},Aqz:function(E){if(this.K&&this.
K.Aqz)return this.K.Aqz.apply(this,arguments);else return C.DeviceClass.Brp.apply(
this,arguments);},Brp:function(E){},A9Q:function(An){this.Aqz(An);},UpdateNaisIdLastUsedMale:
function(Ws){if(this.ACm===Ws)return;this.ACm=Ws;A.aat([this,this.A5Q,this.A9Q],
0);},Aqy:function(E){if(this.K&&this.K.Aqy)return this.K.Aqy.apply(this,arguments
);else return C.DeviceClass.Bro.apply(this,arguments);},Bro:function(E){},A9P:function(
An){this.Aqy(An);},UpdateNaisIdLastUsedFemale:function(Ws){if(this.ACl===Ws)return;
this.ACl=Ws;A.aat([this,this.A5P,this.A9P],0);},Avk:function(E){if(this.K&&this.
K.Avk)return this.K.Avk.apply(this,arguments);else return C.DeviceClass.Brm.apply(
this,arguments);},Brm:function(E){},Aw6:function(An){this.Avk(An);},UpdateNaisIdIncrementMale:
function(Akx){if(this.APB===Akx)return;this.APB=Akx;A.aat([this,this.AuL,this.Aw6
],0);},Avj:function(E){if(this.K&&this.K.Avj)return this.K.Avj.apply(this,arguments
);else return C.DeviceClass.Brl.apply(this,arguments);},Brl:function(E){},Aw5:function(
An){this.Avj(An);},UpdateNaisIdIncrementFemale:function(Akx){if(this.APA===Akx)return;
this.APA=Akx;A.aat([this,this.AuK,this.Aw5],0);},UpdateFirmware:function(){if(this.
K&&this.K.UpdateFirmware)return this.K.UpdateFirmware.apply(this,arguments);else
return C.DeviceClass.A9p.apply(this,arguments);},A9p:function(){},AmD:function(E
){if(this.K&&this.K.AmD)return this.K.AmD.apply(this,arguments);else return C.DeviceClass.
BqR.apply(this,arguments);},BqR:function(E){},A9F:function(An){this.AmD(An);},UpdateBootloaderMessage:
function(AI){if(this.Ape===AI)return;this.Ape=AI;A.aat([this,this.A5x,this.A9F],
0);},ACM:function(E){if(this.K&&this.K.ACM)return this.K.ACM.apply(this,arguments
);else return C.DeviceClass.Bqz.apply(this,arguments);},Bqz:function(E){},A9u:function(
An){this.ACM(An);},UpdateActionListAction:function(AI){if(this.AzK===AI)return;this.
AzK=AI;A.aat([this,this.A5h,this.A9u],0);},AuQ:function(E){if(this.K&&this.K.AuQ
)return this.K.AuQ.apply(this,arguments);else return C.DeviceClass.BqA.apply(this
,arguments);},BqA:function(E){},Bsi:function(An){this.AuQ(An);},UpdateActionListHideMeasured:
function(AI){if(this.Alx===AI)return;this.Alx=AI;A.aat([this,this.Bg0,this.Bsi],
0);},TA:function(E){if(this.K&&this.K.TA)return this.K.TA.apply(this,arguments);
else return C.DeviceClass.BqH.apply(this,arguments);},BqH:function(E){},Anx:function(
An){this.TA(An);},UpdateAnimalIdGenerationMethod:function(A_S){if(this.Ia===A_S)
return;this.Ia=A_S;A.aat([this,this.Amu,this.Anx],0);},Au4:function(E){if(this.K&&
this.K.Au4)return this.K.Au4.apply(this,arguments);else return C.DeviceClass.BqZ.
apply(this,arguments);},BqZ:function(E){},AXs:function(An){this.Au4(An);},UpdateDirectionOfCountingFemale:
function(Akq){if(this.AAG===Akq)return;this.AAG=Akq;A.aat([this,this.AP$,this.AXs
],0);},Au5:function(E){if(this.K&&this.K.Au5)return this.K.Au5.apply(this,arguments
);else return C.DeviceClass.Bq0.apply(this,arguments);},Bq0:function(E){},AXt:function(
An){this.Au5(An);},UpdateDirectionOfCountingMale:function(Akq){if(this.AAH===Akq
)return;this.AAH=Akq;A.aat([this,this.AQa,this.AXt],0);},Au6:function(E){if(this.
K&&this.K.Au6)return this.K.Au6.apply(this,arguments);else return C.DeviceClass.
Bq1.apply(this,arguments);},Bq1:function(E){},Aw1:function(An){this.Au6(An);},UpdateDirectionOfCountingUnisex:
function(Akq){if(this.Atz===Akq)return;this.Atz=Akq;A.aat([this,this.AuF,this.Aw1
],0);},Aqw:function(E){if(this.K&&this.K.Aqw)return this.K.Aqw.apply(this,arguments
);else return C.DeviceClass.Brb.apply(this,arguments);},Brb:function(E){},Any:function(
An){this.Aqw(An);},UpdateIDLastUsedUnisex:function(QY){if(this.Ai6===QY)return;this.
Ai6=QY;A.aat([this,this.Amx,this.Any],0);},AqA:function(E){if(this.K&&this.K.AqA
)return this.K.AqA.apply(this,arguments);else return C.DeviceClass.Brq.apply(this
,arguments);},Brq:function(E){},AXx:function(An){this.AqA(An);},UpdateNaisIdLastUsedUnisex:
function(Ws){if(this.Aux===Ws)return;this.Aux=Ws;A.aat([this,this.AQi,this.AXx],
0);},Avl:function(E){if(this.K&&this.K.Avl)return this.K.Avl.apply(this,arguments
);else return C.DeviceClass.Brn.apply(this,arguments);},Brn:function(E){},Aw7:function(
An){this.Avl(An);},UpdateNaisIdIncrementUnisex:function(Akx){if(this.APC===Akx)return;
this.APC=Akx;A.aat([this,this.AuM,this.Aw7],0);},AjA:function(E){if(this.K&&this.
K.AjA)return this.K.AjA.apply(this,arguments);else return C.DeviceClass.Bq3.apply(
this,arguments);},Bq3:function(E){},Aw2:function(An){this.AjA(An);},UpdateEartagNrAssignmentMode:
function(Akr){if(this.EartagNrAssignmentMode===Akr)return;this.EartagNrAssignmentMode=
Akr;A.aat([this,this.AuG,this.Aw2],0);},NP:function(E){if(this.K&&this.K.NP)return this.
K.NP.apply(this,arguments);else return C.DeviceClass.BqT.apply(this,arguments);}
,BqT:function(E){},Bsm:function(An){this.NP(An);},UpdateBreed:function(Ab2){if(this.
Breed===Ab2)return;this.Breed=Ab2;A.aat([this,this.AuB,this.Bsm],0);},ADq:function(
E){if(this.K&&this.K.ADq)return this.K.ADq.apply(this,arguments);else return C.DeviceClass.
Bri.apply(this,arguments);},Bri:function(E){},Bsq:function(An){this.ADq(An);},UpdateMiddlewareVersions:
function(PO,AYe,AYf,AYl,AX5){this.R3.OnSetTimestamp(PO);this.R3.ADl(AYe);this.R3.
ADs(AYf);this.R3.ADE(AYl);this.R3.AC3(AX5);A.aat([this,this.Bhy,this.Bsq],0);},ADk:
function(E){if(this.K&&this.K.ADk)return this.K.ADk.apply(this,arguments);else return C.
DeviceClass.Brd.apply(this,arguments);},Brd:function(E){},Bsp:function(An){this.
ADk(An);},UpdateMainboardVersions:function(PO,AYc,AYd,AYb,AYr,AYs,AYq){this.Qs.OnSetTimestamp(
PO);this.Qs.ADi(AYc);this.Qs.ADj(AYd);this.Qs.ADh(AYb);this.Qs.ADR(AYr);this.Qs.
ADS(AYs);this.Qs.ADQ(AYq);A.aat([this,this.Bhw,this.Bsp],0);},ADT:function(E){if(
this.K&&this.K.ADT)return this.K.ADT.apply(this,arguments);else return C.DeviceClass.
BrK.apply(this,arguments);},BrK:function(E){},Bsw:function(An){this.ADT(An);},UpdateTorchboardVersions:
function(PO,AYc,AYd,AYb,AYr,AYs,AYq){this.Sj.OnSetTimestamp(PO);this.Sj.ADi(AYc);
this.Sj.ADj(AYd);this.Sj.ADh(AYb);this.Sj.ADR(AYr);this.Sj.ADS(AYs);this.Sj.ADQ(
AYq);A.aat([this,this.BhV,this.Bsw],0);},ACT:function(E){if(this.K&&this.K.ACT)return this.
K.ACT.apply(this,arguments);else return C.DeviceClass.BqS.apply(this,arguments);
},BqS:function(E){},Bsl:function(An){this.ACT(An);},UpdateBootloaderVersions:function(
PO,AYe,AYf,AYl,AX5){this.Rt.OnSetTimestamp(PO);this.Rt.ADl(AYe);this.Rt.ADs(AYf);
this.Rt.ADE(AYl);this.Rt.AC3(AX5);A.aat([this,this.Bg6,this.Bsl],0);},AC6:function(
E){if(this.K&&this.K.AC6)return this.K.AC6.apply(this,arguments);else return C.DeviceClass.
Bq2.apply(this,arguments);},Bq2:function(E){},A9I:function(An){this.AC6(An);},UpdateDryCowListAction:
function(AI){if(this.ALO===AI)return;this.ALO=AI;A.aat([this,this.A5z,this.A9I],
0);},AHL:function(AX7){if(this.K&&this.K.AHL)return this.K.AHL.apply(this,arguments
);else return C.DeviceClass.BsI.apply(this,arguments);},BsI:function(AX7){return false;
},ADv:function(E){if(this.K&&this.K.ADv)return this.K.ADv.apply(this,arguments);
else return C.DeviceClass.Brr.apply(this,arguments);},Brr:function(E){},A9R:function(
An){this.ADv(An);},UpdateNoNaisIdListAction:function(AI){if(this.APO===AI)return;
this.APO=AI;A.aat([this,this.A5R,this.A9R],0);},ACS:function(E){if(this.K&&this.
K.ACS)return this.K.ACS.apply(this,arguments);else return C.DeviceClass.BqQ.apply(
this,arguments);},BqQ:function(E){},AGN:function(An){this.ACS(An);},UpdateBirthListView:
function(AI){if(this.Apc===AI)return;this.Apc=AI;A.aat([this,this.ACA,this.AGN],
0);},BatchResetBirthNoticePending:function(){var B3=A._NewObject(C.Animal,0);var
P;var Ah4=0;var Ack=A._GetAutoObject(C.Device).Ao.Filter;var Bb=A._GetAutoObject(
C.Helper).AMy();A._GetAutoObject(C.Device).Ao.Bk(Bb);for(P=0;P<A._GetAutoObject(
C.Device).Ao.Cj();P++){B3.EK(P,A._GetAutoObject(C.Device).Ao);B3.Ad3(false);B3.Cr(
A._GetAutoObject(C.Device).Ao);Ah4++;}A._GetAutoObject(C.Device).Ao.Bk(Ack);return Ah4;
},UpdateTransferProgress:function(AI){if(this.Av7===AI)return;this.Av7=AI;A.aat([
this,this.AQw,this.AXH],0);},ADU:function(E){if(this.K&&this.K.ADU)return this.K.
ADU.apply(this,arguments);else return C.DeviceClass.BrL.apply(this,arguments);},
BrL:function(E){A.aa8("%s",OL);},AXH:function(An){this.ADU(An);},UpdateTransferTarget:
function(AI){if(this.AeC===AI)return;this.AeC=AI;A.aat([this,this.A56,this.A9V],
0);},AqH:function(E){if(this.K&&this.K.AqH)return this.K.AqH.apply(this,arguments
);else return C.DeviceClass.BrM.apply(this,arguments);},BrM:function(E){A.aa8("%s"
,KH);},A9V:function(An){this.AqH(An);},Arf:function(){if(this.K&&this.K.Arf)return this.
K.Arf.apply(this,arguments);else return C.DeviceClass.Bsd.apply(this,arguments);
},Bsd:function(){},Avn:function(E){if(this.K&&this.K.Avn)return this.K.Avn.apply(
this,arguments);else return C.DeviceClass.Brw.apply(this,arguments);},Brw:function(
E){},AXB:function(An){this.Avn(An);},UpdatePremisesID:function(QY){if(this.YK===
QY)return;this.YK=QY;A.aat([this,this.AQo,this.AXB],0);},Avi:function(E){if(this.
K&&this.K.Avi)return this.K.Avi.apply(this,arguments);else return C.DeviceClass.
Brk.apply(this,arguments);},Brk:function(E){},AGR:function(An){this.Avi(An);},UpdateMotherSelectionDriedOffFilter:
function(AI){if(this.Aa5===AI)return;this.Aa5=AI;A.aat([this,this.ACG,this.AGR],
0);},AC_:function(E){if(this.K&&this.K.AC_)return this.K.AC_.apply(this,arguments
);else return C.DeviceClass.Bq8.apply(this,arguments);},Bq8:function(E){},A9M:function(
An){this.AC_(An);},UpdateFreshCowSpan:function(AI){if(this.Apy===AI)return;this.
Apy=AI;A.aat([this,this.A5E,this.A9M],0);},UpdateUSBState:function(A_K){if(this.
Akc===A_K)return;this.Akc=A_K;A.aat([this,this.Aa$,this.AbW],0);},ADV:function(E
){if(this.K&&this.K.ADV)return this.K.ADV.apply(this,arguments);else return C.DeviceClass.
BrO.apply(this,arguments);},BrO:function(E){A.aa8("%s",EV);},AbW:function(An){this.
ADV(An);},Am0:function(Ahi){if(this.K&&this.K.Am0)return this.K.Am0.apply(this,arguments
);else return C.DeviceClass.Br9.apply(this,arguments);},Br9:function(Ahi){return A.
_NewObject(C.AiM,0);},ApW:function(){if(this.K&&this.K.ApW)return this.K.ApW.apply(
this,arguments);else return C.DeviceClass.Bqy.apply(this,arguments);},Bqy:function(
){return false;},Apm:function(Ng){if(this.K&&this.K.Apm)return this.K.Apm.apply(
this,arguments);else return C.DeviceClass.Bqt.apply(this,arguments);},Bqt:function(
Ng){},ADH:function(E){if(this.K&&this.K.ADH)return this.K.ADH.apply(this,arguments
);else return C.DeviceClass.BrB.apply(this,arguments);},BrB:function(E){},Bst:function(
An){this.ADH(An);},UpdateSerialNumber:function(AI){if(this.AgX===AI)return;this.
AgX=AI;A.aat([this,this.BhJ,this.Bst],0);},AuR:function(E){if(this.K&&this.K.AuR
)return this.K.AuR.apply(this,arguments);else return C.DeviceClass.BqG.apply(this
,arguments);},BqG:function(E){},AXp:function(An){this.AuR(An);},UpdateAnimalIdAutoGenerationMethod:
function(A_R){if(this.AfK===A_R)return;this.AfK=A_R;A.aat([this,this.AP5,this.AXp
],0);},AAu:function(){return false;},AEo:function(){return false;},ADJ:function(
E){if(this.K&&this.K.ADJ)return this.K.ADJ.apply(this,arguments);else return C.DeviceClass.
BrC.apply(this,arguments);},BrC:function(E){},A9S:function(An){this.ADJ(An);},UpdateShutdownTimer:
function(AI){if(this.ASk===AI)return;this.ASk=AI;A.aat([this,this.A5Z,this.A9S],
0);},Aqm:function(E){if(this.K&&this.K.Aqm)return this.K.Aqm.apply(this,arguments
);else return C.DeviceClass.BqK.apply(this,arguments);},BqK:function(E){},A9B:function(
An){this.Aqm(An);},UpdateAnimalListInfoItemMode:function(AI){if(this.AlC===AI)return;
this.AlC=AI;A.aat([this,this.A5q,this.A9B],0);},Aq4:function(H){if(this.K&&this.
K.Aq4)return this.K.Aq4.apply(this,arguments);else return C.DeviceClass.Br6.apply(
this,arguments);},Br6:function(H){},BBU:function(s){this.Aq4(s);},AqK:function(E
){if(this.K&&this.K.AqK)return this.K.AqK.apply(this,arguments);else return C.DeviceClass.
BrU.apply(this,arguments);},BrU:function(E){},A90:function(An){this.AqK(An);},AqL:
function(E){if(this.K&&this.K.AqL)return this.K.AqL.apply(this,arguments);else return C.
DeviceClass.BrV.apply(this,arguments);},BrV:function(E){},A91:function(An){this.
AqL(An);},UpdateWeightGainsLowString:function(AI){if(this.AFg===AI)return;this.AFg=
AI;A.aat([this,this.A6d,this.A91],0);},UpdateWeightGainsHighString:function(AI){
if(this.AFf===AI)return;this.AFf=AI;A.aat([this,this.A6c,this.A90],0);},AuT:function(
E){if(this.K&&this.K.AuT)return this.K.AuT.apply(this,arguments);else return C.DeviceClass.
BqN.apply(this,arguments);},BqN:function(E){},A9D:function(An){this.AuT(An);},UpdateAnimalTypesWeightGainsString:
function(AI){if(this.AzS===AI)return;this.AzS=AI;A.aat([this,this.A5t,this.A9D],
0);},AqJ:function(E){if(this.K&&this.K.AqJ)return this.K.AqJ.apply(this,arguments
);else return C.DeviceClass.BrT.apply(this,arguments);},BrT:function(E){},A9Z:function(
An){this.AqJ(An);},AqM:function(E){if(this.K&&this.K.AqM)return this.K.AqM.apply(
this,arguments);else return C.DeviceClass.BrZ.apply(this,arguments);},BrZ:function(
E){},A94:function(An){this.AqM(An);},UpdateWeightValueBirthString:function(AI){if(
this.AFi===AI)return;this.AFi=AI;A.aat([this,this.A6g,this.A94],0);},UpdateWeightGainsAverageString:
function(AI){if(this.AFe===AI)return;this.AFe=AI;A.aat([this,this.A6b,this.A9Z],
0);},Au7:function(E){if(this.K&&this.K.Au7)return this.K.Au7.apply(this,arguments
);else return C.DeviceClass.Bq4.apply(this,arguments);},Bq4:function(E){},Bsn:function(
An){this.Au7(An);},UpdateEvaluationAnimalType:function(Ee){if(this.AAO===Ee)return;
this.AAO=Ee;A.aat([this,this.Bhe,this.Bsn],0);},UpdateStartScreen:function(AI){if(
this.Av1===AI)return;this.Av1=AI;A.aat([this,this.BhL,this.Bsu],0);},Avq:function(
E){if(this.K&&this.K.Avq)return this.K.Avq.apply(this,arguments);else return C.DeviceClass.
BrD.apply(this,arguments);},BrD:function(E){},Bsu:function(An){this.Avq(An);},ABY:
function(){if(this.K&&this.K.ABY)return this.K.ABY.apply(this,arguments);else return C.
DeviceClass.Bqw.apply(this,arguments);},Bqw:function(){return 1;},ABZ:function(){
if(this.K&&this.K.ABZ)return this.K.ABZ.apply(this,arguments);else return C.DeviceClass.
Bqx.apply(this,arguments);},Bqx:function(){return 1;},GetCommitCount:function(){
return 1903;},GetCommitEpoch:function(){return 1692954318;},GetCommitHash:function(
){return A.kh.BdZ;},GetVersionMajor:function(){return 0;},GetVersionMinor:function(
){return 9;},GetVersionRev:function(){return 9;},ADp:function(E){if(this.K&&this.
K.ADp)return this.K.ADp.apply(this,arguments);else return C.DeviceClass.Brg.apply(
this,arguments);},Brg:function(E){},A9O:function(An){this.ADp(An);},UpdateMaximumAgeNewOnFarm:
function(AI){if(this.ACd===AI)return;this.ACd=AI;A.aat([this,this.A5O,this.A9O],
0);},Avw:function(E){if(this.K&&this.K.Avw)return this.K.Avw.apply(this,arguments
);else return C.DeviceClass.BrN.apply(this,arguments);},BrN:function(E){},AXI:function(
An){this.Avw(An);},UpdateTransponderAssignmentIdChangeMethod:function(A_H){if(this.
Ag6===A_H)return;this.Ag6=A_H;A.aat([this,this.AQx,this.AXI],0);},BatchResetPurchasedNoticePending:
function(){var B3=A._NewObject(C.Animal,0);var P;var Ah4=0;var Ack=A._GetAutoObject(
C.Device).Ao.Filter;var Bb=A._GetAutoObject(C.Helper).AMI();A._GetAutoObject(C.Device
).Ao.Bk(Bb);for(P=0;P<A._GetAutoObject(C.Device).Ao.Cj();P++){B3.EK(P,A._GetAutoObject(
C.Device).Ao);B3.Ad3(false);B3.Cr(A._GetAutoObject(C.Device).Ao);Ah4++;}A._GetAutoObject(
C.Device).Ao.Bk(Ack);return Ah4;},AC4:function(E){if(this.K&&this.K.AC4)return this.
K.AC4.apply(this,arguments);else return C.DeviceClass.BqW.apply(this,arguments);
},BqW:function(E){},AXr:function(An){this.AC4(An);},UpdateDataExportDestination:
function(AI){if(this.U4===AI)return;this.U4=AI;A.aat([this,this.AP_,this.AXr],0);
},BjC:function(E){},UpdateMassRecordingAutomatic:function(AI){if(this.APn===AI)return;
this.APn=AI;A.aat([this,this.Bhx,this.BjC],0);},M7:function(E){if(this.K&&this.K.
M7)return this.K.M7.apply(this,arguments);else return C.DeviceClass.Br0.apply(this
,arguments);},Br0:function(E){},Bsx:function(An){this.M7(An);},UpdateWhereAbouts:
function(Ae2){if(this.WhereAbouts===Ae2)return;this.WhereAbouts=Ae2;A.aat([this,
this.AuO,this.Bsx],0);},Aqi:function(E){if(this.K&&this.K.Aqi)return this.K.Aqi.
apply(this,arguments);else return C.DeviceClass.BqB.apply(this,arguments);},BqB:
function(E){},A9w:function(An){this.Aqi(An);},Aqj:function(E){if(this.K&&this.K.
Aqj)return this.K.Aqj.apply(this,arguments);else return C.DeviceClass.BqC.apply(
this,arguments);},BqC:function(E){},A9x:function(An){this.Aqj(An);},UpdateActiveMassRecordingFields:
function(AI){if(this.AzL===AI)return;this.AzL=AI;A.aat([this,this.A5j,this.A9w],
0);},UpdateActiveMassRecordingFieldsOrder:function(AI){if(this.AzM===AI)return;this.
AzM=AI;A.aat([this,this.A5k,this.A9x],0);},Aq0:function(H){if(this.K&&this.K.Aq0
)return this.K.Aq0.apply(this,arguments);else return C.DeviceClass.Br3.apply(this
,arguments);},Br3:function(H){},BBR:function(s){this.Aq0(s);},ADn:function(E){if(
this.K&&this.K.ADn)return this.K.ADn.apply(this,arguments);else return C.DeviceClass.
Bre.apply(this,arguments);},Bre:function(E){},AGP:function(An){this.ADn(An);},UpdateMassRecordingDateOfBirthMandatory:
function(AI){if(this.AdM===AI)return;this.AdM=AI;A.aat([this,this.ACD,this.AGP],
0);},ADm:function(E){this.UpdateMassRecordingCounter(E);},UpdateMassRecordingCounter:
function(AI){if(this.Aus===AI)return;this.Aus=AI;A.aat([this,this.A5N,this.ADm],
0);},ACy:function(){return this.Ku;},Auz:function(){return this.Z$;},AuC:function(
){return this.AlJ;},AQr:function(){return this.ScanState;},ACE:function(){return this.
MeasureState;},ACI:function(){return this.Kj;},A5J:function(){return this.Language;
},Aqc:function(){return this.TemperatureUnit;},A5y:function(){return this.AKW;},
AQh:function(){return this.ACk;},ACH:function(){return this.OverlayMenu;},A57:function(
){return this.Y$;},AQt:function(){return this.SyncState;},A58:function(){return this.
Arq;},ACJ:function(){return this.AS3;},AQq:function(){return this.RatingMode;},Ap$:
function(){return this.AlV;},AQv:function(){return this.ASN;},BhD:function(){return this.
ARF;},Bg4:function(){return this.AutoRegistrationMode;},AQs:function(){return this.
PD;},Aa9:function(){return this.FP;},Aa_:function(){return this.Fx;},ACK:function(
){return this.IK;},AQg:function(){return this.MassUnit;},A5i:function(){return this.
P7;},AP4:function(){return this.As$;},A5u:function(){return this.AutoActions;},Py:
function(){return this.AnimalType;},A6e:function(){return this.WeightRecordingMode;
},AQn:function(){return this.AEa;},ACC:function(){return this.Hv;},A5n:function(
){return this.Ait;},A6f:function(){return this.WeightRecordingScope;},VJ:function(
){return this.Gender;},AuI:function(){return this.ApJ;},AuH:function(){return this.
ApI;},ACz:function(){return this.JD;},A5p:function(){return this.AJ6;},A5B:function(
){return this.AlU;},AP6:function(){return this.D3;},A6a:function(){return this.AS5;
},A5D:function(){return this.AMs;},A5s:function(){return this.AzR;},A52:function(
){return this.AEX;},A53:function(){return this.AEY;},AQk:function(){return this.
APT;},Bhl:function(){return this.AlY;},A5Q:function(){return this.ACm;},A5P:function(
){return this.ACl;},AuL:function(){return this.APB;},AuK:function(){return this.
APA;},A5x:function(){return this.Ape;},A5h:function(){return this.AzK;},Bg0:function(
){return this.Alx;},Amu:function(){return this.Ia;},AP$:function(){return this.AAG;
},AQa:function(){return this.AAH;},AuF:function(){return this.Atz;},Amx:function(
){return this.Ai6;},AQi:function(){return this.Aux;},AuM:function(){return this.
APC;},AuG:function(){return this.EartagNrAssignmentMode;},AuB:function(){return this.
Breed;},Bhy:function(){return this.R3;},Bhw:function(){return this.Qs;},BhV:function(
){return this.Sj;},Bg6:function(){return this.Rt;},A5z:function(){return this.ALO;
},A5R:function(){return this.APO;},ACA:function(){return this.Apc;},AQw:function(
){return this.Av7;},A56:function(){return this.AeC;},AQo:function(){return this.
YK;},ACG:function(){return this.Aa5;},A5E:function(){return this.Apy;},Aa$:function(
){return this.Akc;},BhJ:function(){return this.AgX;},AP5:function(){return this.
AfK;},A5Z:function(){return this.ASk;},A5q:function(){return this.AlC;},A6c:function(
){return this.AFf;},A6d:function(){return this.AFg;},A5t:function(){return this.
AzS;},A6b:function(){return this.AFe;},A6g:function(){return this.AFi;},Bhe:function(
){return this.AAO;},BhL:function(){return this.Av1;},A5O:function(){return this.
ACd;},AQx:function(){return this.Ag6;},AP_:function(){return this.U4;},Bhx:function(
){return this.APn;},AuO:function(){return this.WhereAbouts;},A5j:function(){return this.
AzL;},A5k:function(){return this.AzM;},ACD:function(){return this.AdM;},A5N:function(
){return this.Aus;},_Init:function(aArg){C.Table._Init.call(this.Ao={I:this},0);
C.Table._Init.call(this.Bq={I:this},0);C.Table._Init.call(this.AfI={I:this},0);A.
Core.A8d._Init.call(this.AmS={I:this},0);C.Table._Init.call(this.Pa={I:this},0);
this.__proto__=C.DeviceClass;this.Ao.OnSetId(0);this.Bq.OnSetId(1);this.AfI.OnSetId(
3);this.Pa.OnSetId(4);this.PD=A._NewObject(C.Transponder,0);this.R3=A._NewObject(
C.AvZ,0);this.Qs=A._NewObject(C.At2,0);this.Sj=A._NewObject(C.At2,0);this.Rt=A._NewObject(
C.AvZ,0);var Lj=this._variants();if(Lj){this.K={};Lj._Init.call(this,aArg);}A.hJ++;
},_Done:function(){if(this.K)this.K._Done.call(this);this.__proto__=null;this.Ao.
_Done();this.Bq._Done();this.AfI._Done();this.AmS._Done();this.Pa._Done();A.hJ--;
},_ReInit:function(){this.Ao._ReInit();this.Bq._ReInit();this.AfI._ReInit();this.
AmS._ReInit();this.Pa._ReInit();if(this.K)this.K._ReInit.call(this);},_Mark:function(
D){var B;if((B=this.PD)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.R3)&&(B._cycle
!=D))B._Mark(B._cycle=D);if((B=this.Qs)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=
this.Sj)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Rt)&&(B._cycle!=D))B._Mark(
B._cycle=D);if((B=this.Ao)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Bq)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.AfI)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AmS
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
5};C.StringFilterCriterion={A4:A.jm,Adi:function(){var Av=A._NewObject(C.StringFilterCriterion
,0);Av.Gs(this);return Av;},Gs:function(AL){C.FilterCriterion.Gs.call(this,AL);var
Av=(C.StringFilterCriterion.isPrototypeOf(AL)?AL:null);if(!!Av)this.A4=Av.A4;},_Init:
function(aArg){C.FilterCriterion._Init.call(this,aArg);this.__proto__=C.StringFilterCriterion;
},_className:"Device::StringFilterCriterion"};C.Table={CE:function(Ab,AX){if(this.
K&&this.K.CE)return this.K.CE.apply(this,arguments);else return C.ITable.CE.apply(
this,arguments);},Va:function(Ab,AX){if(this.K&&this.K.Va)return this.K.Va.apply(
this,arguments);else return C.ITable.Va.apply(this,arguments);},HV:function(Ab,AX
){if(this.K&&this.K.HV)return this.K.HV.apply(this,arguments);else return C.ITable.
HV.apply(this,arguments);},OnSetId:function(E){if(this.K&&this.K.OnSetId)return this.
K.OnSetId.apply(this,arguments);else return C.ITable.OnSetId.apply(this,arguments
);},Cj:function(){if(this.K&&this.K.Cj)return this.K.Cj.apply(this,arguments);else
return C.ITable.Cj.apply(this,arguments);},Bk:function(E){if(this.K&&this.K.Bk)return this.
K.Bk.apply(this,arguments);else return C.ITable.Bk.apply(this,arguments);},Vb:function(
Ab,AX){if(this.K&&this.K.Vb)return this.K.Vb.apply(this,arguments);else return C.
ITable.Vb.apply(this,arguments);},RQ:function(Ab,AX){if(this.K&&this.K.RQ)return this.
K.RQ.apply(this,arguments);else return C.ITable.RQ.apply(this,arguments);},Op:function(
){if(this.K&&this.K.Op)return this.K.Op.apply(this,arguments);else return C.ITable.
Op.apply(this,arguments);},Or:function(AnJ){if(this.K&&this.K.Or)return this.K.Or.
apply(this,arguments);else return C.ITable.Or.apply(this,arguments);},XS:function(
){if(this.K&&this.K.XS)return this.K.XS.apply(this,arguments);else return C.ITable.
XS.apply(this,arguments);},YV:function(Ab,AX,CX){if(this.K&&this.K.YV)return this.
K.YV.apply(this,arguments);else return C.ITable.YV.apply(this,arguments);},G_:function(
Ab,AX,CX){if(this.K&&this.K.G_)return this.K.G_.apply(this,arguments);else return C.
ITable.G_.apply(this,arguments);},YU:function(Ab,AX,CX){if(this.K&&this.K.YU)return this.
K.YU.apply(this,arguments);else return C.ITable.YU.apply(this,arguments);},M_:function(
Ab,AX,CX){if(this.K&&this.K.M_)return this.K.M_.apply(this,arguments);else return C.
ITable.M_.apply(this,arguments);},YT:function(Ab,AX,CX){if(this.K&&this.K.YT)return this.
K.YT.apply(this,arguments);else return C.ITable.YT.apply(this,arguments);},K4:function(
aColumn,A1){if(this.K&&this.K.K4)return this.K.K4.apply(this,arguments);else return C.
ITable.K4.apply(this,arguments);},LD:function(Ab,AX){if(this.K&&this.K.LD)return this.
K.LD.apply(this,arguments);else return C.ITable.LD.apply(this,arguments);},TO:function(
Ab,AX,CX){if(this.K&&this.K.TO)return this.K.TO.apply(this,arguments);else return C.
ITable.TO.apply(this,arguments);},AiY:function(aColumn,A1){if(this.K&&this.K.AiY
)return this.K.AiY.apply(this,arguments);else return C.ITable.AiY.apply(this,arguments
);},G9:function(){if(this.K&&this.K.G9)return this.K.G9.apply(this,arguments);else
return C.ITable.G9.apply(this,arguments);},AiV:function(aColumn,A1){if(this.K&&this.
K.AiV)return this.K.AiV.apply(this,arguments);else return C.ITable.AiV.apply(this
,arguments);},Af5:function(aColumn,A1){if(this.K&&this.K.Af5)return this.K.Af5.apply(
this,arguments);else return C.ITable.Af5.apply(this,arguments);},Hz:function(){if(
this.K&&this.K.Hz)return this.K.Hz.apply(this,arguments);else return C.ITable.Hz.
apply(this,arguments);},Aay:function(){if(this.K&&this.K.Aay)return this.K.Aay.apply(
this,arguments);else return C.ITable.Aay.apply(this,arguments);},Qb:function(){if(
this.K&&this.K.Qb)return this.K.Qb.apply(this,arguments);else return C.ITable.Qb.
apply(this,arguments);},_Init:function(aArg){C.ITable._Init.call(this,aArg);this.
__proto__=C.Table;var Lj=this._variants();if(Lj){this.K={};Lj._Init.call(this,aArg
);}},_Done:function(){if(this.K)this.K._Done.call(this);this.__proto__=C.ITable;
C.ITable._Done.call(this);},_ReInit:function(){C.ITable._ReInit.call(this);if(this.
K)this.K._ReInit.call(this);},_Mark:function(D){C.ITable._Mark.call(this,D);if(this.
K)this.K._Mark(D);},_variants:function(){return A.abt.Table._variants();},K:null
,_className:"Device::Table"};C.TableId={Animal:0,Rating:1,Undefined:2,AnimalGroup:
3,CalfDeregistrations:4};C.ScanState={Idle:0,Progress:1,IdScanned:2,NotFound:3,Error:
4,LAST:5};C.RatedAttribute={None:0,Feed:1,Appearance:2,Respiratory:3,Faeces:4};C.
ConverterClass={MQ:null,Aj8:function(AnH){var A$p;var AsY=this.ASD(AnH/100,0,A._GetAutoObject(
C.Device).TemperatureUnit);A$p=A.aap(AsY,0,1);return A$p;},A8m:function(Ne){if(Ne<=
0)return 0;else if(Ne<=1)return 5;else if(Ne<=2)return 3;else if(Ne<=4)return 2;
else if(Ne<=6)return 1;else if(Ne<=8)return 4;else return 0;},Ac1:function(Ne){var
a=0;switch(Ne){case 3:a=2;break;case 2:a=4;break;case 1:a=6;break;case 0:a=0;break;
case 4:a=8;break;case 5:a=1;break;default:A.aa8("%s",OM);}return a;},Arj:function(
Ee,Q1){var Ni=A._GetAutoObject(C.Converter).Aiu(Q1,Ee);switch(Ni){case 3:return 1;
case 2:return 2;case 1:return 3;case 0:return 4;default:throw new Error(Nc+Ni.toFixed(
));}},Ag4:function(){var B;var D2=A._NewObject(A.Core.Bu,0).Initialize(A._GetAutoObject(
C.Helper).DB());D2.AmG(0);D2.AmJ(0);D2.AmM(0);return((B=(D2.JL()|0))<0)?B+0x100000000:
B;},Bd3:function(ArY){var Dk;switch(ArY){case 36:Dk=ON;break;case 40:Dk=Ss;break;
case 56:Dk=T9;break;case 70:Dk=Zc;break;case 100:Dk=Wa;break;case 124:Dk=I$;break;
case 156:Dk=T_;break;case 158:Dk=Zd;break;case 191:Dk=Wb;break;case 196:Dk=Ze;break;
case 203:Dk=T$;break;case 208:Dk=Zf;break;case 233:Dk=Zg;break;case 246:Dk=Ua;break;
case 250:Dk=Wc;break;case 276:Dk=QT;break;case 300:Dk=Zh;break;case 348:Dk=OO;break;
case 372:Dk=PK;break;case 380:Dk=Ub;break;case 392:Dk=Zi;break;case 428:Dk=Wd;break;
case 440:Dk=Zj;break;case 442:Dk=Zk;break;case 470:Dk=We;break;case 528:Dk=Wf;break;
case 578:Dk=St;break;case 616:Dk=Zl;break;case 620:Dk=Zm;break;case 642:Dk=AbO;break;
case 643:Dk=Su;break;case 703:Dk=AbP;break;case 705:Dk=AeN;break;case 724:Dk=Zn;
break;case 752:Dk=Wg;break;case 756:Dk=Wh;break;case 792:Dk=AeO;break;case 804:Dk=
AeP;break;case 826:Dk=JT;break;case 840:Dk=AeQ;break;default:Dk=ArY.toFixed();}return Dk;
},And:function(N5){return this.N0(N5,1,false);},Awh:function(N5,AnX){return this.
N0(N5,AnX,false);},N0:function(N5,AnX,BvL){var B;var AkL=A.jm;switch(A._GetAutoObject(
C.Device).MassUnit){case 0:if(BvL)AkL=A.aaq(N5,0,0);else{var BaH=N5<0;if(AnX<3)N5=
N5+(((BaH?-1:1)*5)*(Math.pow(10,2-AnX)|0));AkL=(((((B=N5)>-2147483648)?Math.abs(
B):B)/1000)|0).toFixed();if(AnX>0)AkL=AkL+(Li+A.aaX(A.aaq((((B=N5)>-2147483648)?
Math.abs(B):B)%1000,3,10),AnX));if(BaH)AkL=Ag$+AkL;}break;case 1:AkL=A.aap(N5/453.592
,0,AnX);break;default:A.aa8("%s%s",Anf,A._GetAutoObject(C.Device).MassUnit.toFixed(
));}return AkL;},TY:function(L1){var A1v=L1.toFixed();var BcQ=A1v.length;if((BcQ>=
14)&&(BcQ<=15)){var AZB=this.Av9(L1);var BuD=A._GetAutoObject(C.Converter).Bd3(AZB
);A1v=(BuD+N2)+A.aar(A._GetAutoObject(C.Helper).U8(L1,0,12),12,10);}return A1v;}
,AlZ:function(LY){switch(LY){case 0:return A.zW(A.abi.AOl);case 1:return A.zW(A.
abi.ABI);case 2:return A.zW(A.abi.ABN);default:{A.aa8("%s%e",Wi,LY);return null;
}}},A2c:function(Bua){switch(Bua){case 0:return A.zW(A.abi.At$);case 1:return A.
zW(A.abi.ABE);case 2:return A.zW(A.abi.AOf);default:throw new Error(Ang);}},AfN:
function(AHs){switch(AHs){case 0:return A.zW(A.abi.Ai7);case 2:return A.zW(A.abi.
Al8);case 1:return A.zW(A.abi.AaL);case 3:switch(A._GetAutoObject(C.Device).MassUnit
){case 0:return A.zW(A.abi.Auh);case 1:return A.zW(A.abi.Aui);default:throw new Error(
Aha+A._GetAutoObject(C.Device).MassUnit.toFixed());}break;case 4:return A.zW(A.abi.
ANG);case 5:return A.zW(A.abi.ANH);case 6:return A.zW(A.abi.ANL);case 7:return A.
zW(A.abi.AM6);case 8:return A.zW(A.abi.ANb);case 9:return A.zW(A.abi.ABg);case 10:
return A.zW(A.abi.ANa);case 11:return A.zW(A.abi.ANc);default:throw new Error(Ahb+
AHs.toFixed());}},Bdn:function(Axl){switch(Axl){case 0:return A.zW(A.abi.ABL);case
3:return A.zW(A.abi.Al8);case 1:return A.zW(A.abi.AaL);case 2:return A._GetAutoObject(
A.abk.DM).A$N();default:throw new Error(Ahb+Axl.toFixed());}},Bd2:function(ArY){
switch(ArY){case 977:return AbQ;case 978:return Uc;case 980:return Anh;case 981:
return Ani;case 982:return Awi;case 983:return Awj;case 984:return Akh;case 985:
return Awk;default:return A.z2(A.abg.Unknown);}},Bel:function(Ab4){switch(Ab4){case
1:return 0x278A;case 2:return 0x278B;case 3:return 0x278C;case 4:return 0x278D;case
5:return 0x278E;case 6:return 0x278F;case 7:return 0x2790;case 8:return 0x2791;case
9:return 0x2792;case 10:return 0x2793;default:return 0x20;}},Bmb:function(L1){if(
!L1)return-1;return(L1%100000000)|0;},BeQ:function(AnG,aFilter){var B;if(!aFilter
)return AeR;var An8=Arw;var Av=aFilter.AMB();while(!!Av){An8=An8+A._GetAutoObject(
C.Helper).A3V(AnG,Av);Av=aFilter.AMF(Av);if(!!Av)An8=An8+OP;}An8=An8+Sv;return An8;
},A4y:function(A_t){var Mz=0;switch(A_t){case 14:Mz=2;break;case 13:Mz=4;break;case
6:Mz=36;break;case 11:Mz=9;break;case 0:Mz=39;break;case 10:Mz=26;break;case 12:
Mz=12;break;case 5:Mz=14;break;case 3:Mz=15;break;case 1:Mz=10;break;case 8:Mz=16;
break;case 4:Mz=20;break;case 15:Mz=27;break;case 9:Mz=31;break;case 2:Mz=13;break;
case 7:Mz=35;break;case 16:Mz=37;break;default:A.aa8("%s%e",Awl,A_t);}return Mz;
},Bdm:function(Axl){switch(Axl){case 0:return 1;case 3:return 0;case 1:return 2;
case 2:switch(A._GetAutoObject(C.Device).MassUnit){case 0:return 3;case 1:return 4;
default:throw new Error(Aha+A._GetAutoObject(C.Device).MassUnit.toFixed());}break;
default:throw new Error(Ahb+Axl.toFixed());}},Bdo:function(AnO){switch(AnO){case
0:return A.zW(A.abi.AND);case 1:return A.zW(A.abi.ABL);case 9:return A.zW(A.abi.
ANN);case 4:return A.zW(A.abi.AEm);case 6:return A.zW(A.abi.AqX);case 8:return A.
zW(A.abi.At7);case 2:return A.zW(A.abi.AaL);case 3:return A.zW(A.abi.Al8);case 7:
return A.zW(A.abj.K2);case 5:return A.zW(A.abj.K2);case 10:switch(A._GetAutoObject(
C.Device).MassUnit){case 0:return A.zW(A.abi.Auh);case 1:return A.zW(A.abi.Aui);
default:throw new Error(Aha+A._GetAutoObject(C.Device).MassUnit.toFixed());}break;
case 11:return A.zW(A.abj.K2);case 12:return A.zW(A.abj.K2);case 13:return A.zW(
A.abj.K2);case 14:return A.zW(A.abj.K2);case 18:return A.zW(A.abj.K2);case 15:return A.
zW(A.abj.K2);case 16:return A.zW(A.abj.K2);case 17:return A.zW(A.abj.K2);default:
throw new Error(Sw+AnO.toFixed());}},ALs:function(ArY){switch(ArY){case 40:return 1;
case 56:return 3;case 70:return 2;case 100:return 4;case 124:return 5;case 156:return 7;
case 158:return 36;case 191:return 17;case 196:return 8;case 203:return 9;case 208:
return 11;case 233:return 12;case 246:return 14;case 250:return 15;case 276:return 10;
case 300:return 16;case 348:return 18;case 372:return 19;case 380:return 20;case
392:return 21;case 428:return 24;case 440:return 22;case 442:return 23;case 470:
return 25;case 528:return 26;case 578:return 27;case 616:return 28;case 620:return 29;
case 642:return 30;case 643:return 31;case 703:return 34;case 705:return 33;case
724:return 13;case 752:return 32;case 756:return 6;case 792:return 35;case 804:return 37;
case 826:return 38;case 840:return 39;default:return 0;}},AeF:function(L1){var AZB=
this.Av9(L1);return this.ALs(AZB);},Av9:function(L1){return A._GetAutoObject(C.Helper
).U8(L1,12,3)|0;},A8E:function(AnL,Ee){if(AnL<A._GetAutoObject(C.Helper).ABc(Ee)
)return 1;else if(AnL<A._GetAutoObject(C.Helper).ABb(Ee))return 2;else return 3;
},AMx:function(BtS){switch(BtS){case 1:return 1;case 2:return 2;case 3:return 3;
case 4:return 4;case 5:return 5;case 6:return 6;case 7:return 7;case 8:return 8;
case 9:return 9;case 10:return 10;case 11:return 11;case 12:return 12;case 13:return 13;
case 14:return 14;case 15:return 15;case 16:return 16;default:return 0;}},ASD:function(
A1,AHf,AHg){if(AHf===AHg)return A1;if(!AHf&&(AHg===1)){var result=((A1*9)/5)+32;
return result;}if((AHf===1)&&!AHg){var result=((A1-32)*5)/9;return result;}throw new
Error(((Arx+AHf.toFixed())+Awm)+AHg.toFixed());},A3G:function(EE){switch(EE){case
0:return Awn;case 1:return A.jm;case 2:return Awo;case 3:return Anj;case 4:return A.
z2(A.abg.Contains);case 5:return Awp;default:{A.aa8("%s%e",Ary,EE);return A.jm;}
}},A2F:function(Ab2){return this.MQ.Adk(Ab2);},Bfy:function(Ab2){return this.MQ.
AlL(Ab2);},BdM:function(ArX){var Ayw=0;switch(ArX){case 0:Ayw=1;break;case 1:Ayw=
2;break;case 2:Ayw=3;break;case 3:Ayw=4;break;default:A.aa8("%s%e",KI,ArX);}return Ayw;
},Aiu:function(AXZ,Ee){if(AXZ>=A._GetAutoObject(C.Helper).A3R(Ee))return 3;else if(
AXZ>=A._GetAutoObject(C.Helper).AtY(Ee))return 2;else if(AXZ<A._GetAutoObject(C.
Device).Y$)return 0;else return 1;},Atq:function(Mz){var BN=-1;switch(Mz){case 0:
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
throw new Error(Awq+Mz.toFixed());}return BN;},_Init:function(aArg){C.MQ._Init.call(
this.MQ={I:this},0);this.__proto__=C.ConverterClass;A.hJ++;},_Done:function(){this.
__proto__=null;this.MQ._Done();A.hJ--;},_ReInit:function(){this.MQ._ReInit();},_Mark:
function(D){var B;if((B=this.MQ)._cycle!=D)B._Mark(B._cycle=D);if((B=this.I)&&(B.
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
!AF){this.OnSetId(AF.CE(Ab,0));this.TF(AF.CE(Ab,1));this.Abg(AF.CE(Ab,2));this.AmI(
AF.CE(Ab,3));this.R8(AF.Hy(Ab,4));this.JM(AF.AMD(Ab,7));this.Ajy(AF.Be9(Ab,6));this.
DV(AF.Al0(Ab,14));this.M6(AF.LD(Ab,22));this.M5(AF.LD(Ab,26));this.AvA(AF.IW(Ab,
13));this.Ad1(AF.HV(Ab,8));this.Avt(AF.Hy(Ab,15));this.ARc(AF.Hy(Ab,31));this.Ad6(
AF.A33(Ab,5));this.AQT(AF.IW(Ab,17));this.TD(AF.HV(Ab,11));this.ARb(AF.Hy(Ab,16)
);this.ARe(AF.Hy(Ab,30));this.AjG(AF.HV(Ab,9));this.Ad4(AF.HV(Ab,12));this.ARd(AF.
Hy(Ab,20));this.Avv(AF.Hy(Ab,21));this.AgG(AF.HV(Ab,10));this.Avc(AF.HV(Ab,27));
this.ADg(AF.AA8(Ab,18));this.ADM(AF.Hy(Ab,19));this.Au_(AF.AA8(Ab,23));this.Avu(
AF.Hy(Ab,24));this.AQK(AF.CE(Ab,25));this.Au1(AF.Hy(Ab,28));this.Avd(AF.CE(Ab,29
));this.Aqx(AF.HV(Ab,38));this.NP(AF.Be_(Ab,32));this.AjB(AF.Bfb(Ab,33));this.AmK(
AF.LD(Ab,35));this.M7(AF.AMM(Ab,34));this.Ad3(AF.HV(Ab,37));this.ADC(AF.Bfl(Ab,36
));}return Hs;},Cr:function(AF){var Hs=C.Row.Cr.call(this,AF);if(Hs&&!!AF){var Jg=
AF.Op();if(Jg<=0)A.aa8("%s",AbR);else{var Aya=this.Amb();if(Aya)this.CH=AF.XS();
else AF.G_(this.CH,0,this.Id);AF.G_(this.CH,1,this.VisualId);AF.G_(this.CH,2,this.
GroupId);AF.G_(this.CH,3,this.LocationId);AF.Abu(this.CH,4,this.DateOfBirth);AF.
Bk7(this.CH,7,this.Gender);AF.Bk3(this.CH,6,this.BirthType);AF.Bk1(this.CH,14,this.
AnimalType);AF.TO(this.CH,22,this.TransponderId);AF.TO(this.CH,26,this.NaisId);AF.
AjZ(this.CH,13,this.WorstAssessment);AF.M_(this.CH,8,this.IsAlarm);AF.Abu(this.CH
,15,this.TimestampAlarm);AF.M_(this.CH,11,this.IsFever);AF.Abu(this.CH,16,this.TimestampExpirationFeverAlarm
);AF.M_(this.CH,9,this.IsControl);AF.M_(this.CH,12,this.IsWatch);AF.Abu(this.CH,
20,this.TimestampLastControl);AF.Abu(this.CH,21,this.TimestampLastWatch);AF.M_(this.
CH,10,this.IsRegistered);AF.M_(this.CH,27,this.IsPerished);AF.Abu(this.CH,28,this.
DateOfLastCalving);AF.G_(this.CH,29,this.LactationNumber);AF.M_(this.CH,38,this.
IsDry);AF.Bk5(this.CH,32,this.Breed);AF.Bk6(this.CH,33,this.EaseOfDelivery);AF.TO(
this.CH,35,this.NaisIdMother);AF.Blb(this.CH,34,this.WhereAbouts);AF.M_(this.CH,
37,this.IsRegistrationNoticePending);AF.Bk$(this.CH,36,this.ReasonOfLeaving);Hs=
AF.Or(Jg);if(Aya)this.OnSetId(AF.Aay());}}return Hs;},Gd:function(){C.Row.Gd.call(
this);this.OnSetId(-1);this.AgG(true);},G9:function(){C.Row.G9.call(this);this.OnSetId(
0);this.TF(0);this.Abg(0);this.AmI(0);this.R8(0);this.JM(A._GetAutoObject(C.Device
).Gender);this.Ajy(0);this.DV(A._GetAutoObject(C.Device).AnimalType);this.M6(0);
this.M5(0);this.AvA(0);this.Ad1(false);this.Avt(0);this.ARc(0);this.Ad6(0);this.
AQT(0);this.TD(false);this.ARe(0);this.ARb(0);this.AjG(false);this.Ad4(false);this.
ARd(0);this.Avv(0);this.AgG(false);this.Avc(false);this.ADg(0);this.ADM(0);this.
Au_(0);this.Avu(0);this.AQK(-1);this.Au1(0);this.Avd(0);this.Aqx(false);this.NP(
0);this.AjB(0);this.AmK(0);this.M7(0);this.Ad3(false);this.ADC(0);},OnSetId:function(
E){if(this.Id===E)return;this.Id=E;A.aat([this,this.Qv,this.OnSetId],0);},TF:function(
E){if(this.VisualId===E)return;this.VisualId=E;A.aat([this,this.Aqd,this.TF],0);
},Abg:function(E){if(this.GroupId===E)return;this.GroupId=E;A.aat([this,this.Bhm
,this.Abg],0);},R8:function(E){if(this.DateOfBirth===E)return;this.DateOfBirth=E;
A.aat([this,this.AuD,this.R8],0);},JM:function(E){if(this.Gender===E)return;this.
Gender=E;A.aat([this,this.VJ,this.JM],0);},Ajy:function(E){if(this.BirthType===E
)return;this.BirthType=E;A.aat([this,this.AP8,this.Ajy],0);},AmI:function(E){if(
this.LocationId===E)return;this.LocationId=E;A.aat([this,this.A5M,this.AmI],0);}
,Ad6:function(E){if(this.LastTemperature===E)return;this.LastTemperature=E;A.aat([
this,this.A5L,this.Ad6],0);},Ad1:function(E){if(this.IsAlarm===E)return;this.IsAlarm=
E;A.aat([this,this.A5G,this.Ad1],0);},AjG:function(E){if(this.IsControl===E)return;
this.IsControl=E;A.aat([this,this.Bhp,this.AjG],0);},AgG:function(E){if(this.IsRegistered===
E)return;this.IsRegistered=E;A.aat([this,this.Bhs,this.AgG],0);},Ad4:function(E){
if(this.IsWatch===E)return;this.IsWatch=E;A.aat([this,this.A5I,this.Ad4],0);},AvA:
function(E){if(this.WorstAssessment===E)return;this.WorstAssessment=E;A.aat([this
,this.A6h,this.AvA],0);},TD:function(E){if(this.IsFever===E)return;this.IsFever=
E;A.aat([this,this.A5H,this.TD],0);},ARd:function(E){if(this.TimestampLastControl===
E)return;this.TimestampLastControl=E;A.aat([this,this.BhS,this.ARd],0);},Avv:function(
E){if(this.TimestampLastWatch===E)return;this.TimestampLastWatch=E;A.aat([this,this.
BhU,this.Avv],0);},AQT:function(E){if(this.LastRatingTemperature===E)return;this.
LastRatingTemperature=E;A.aat([this,this.Bhv,this.AQT],0);},ARb:function(E){if(this.
TimestampExpirationFeverAlarm===E)return;this.TimestampExpirationFeverAlarm=E;A.
aat([this,this.BhQ,this.ARb],0);},Avt:function(E){if(this.TimestampAlarm===E)return;
this.TimestampAlarm=E;A.aat([this,this.BhP,this.Avt],0);},DV:function(E){if(this.
AnimalType===E)return;this.AnimalType=E;A.aat([this,this.Py,this.DV],0);},ADg:function(
E){if(this.LastBodyWeight===E)return;this.LastBodyWeight=E;A.aat([this,this.A5K,
this.ADg],0);},ADM:function(E){if(this.TimestampLastWeighing===E)return;this.TimestampLastWeighing=
E;A.aat([this,this.A55,this.ADM],0);},M6:function(E){if(this.TransponderId===E)return;
this.TransponderId=E;A.aat([this,this.Ajv,this.M6],0);},SW:function(){return A._GetAutoObject(
C.Helper).ME(this.DateOfBirth,A._GetAutoObject(C.Helper).DB());},Au_:function(E){
if(this.FirstBodyWeight===E)return;this.FirstBodyWeight=E;A.aat([this,this.AQc,this.
Au_],0);},Avu:function(E){if(this.TimestampFirstWeighing===E)return;this.TimestampFirstWeighing=
E;A.aat([this,this.AQu,this.Avu],0);},ApV:function(){var SG=A._NewObject(A.Core.
Bu,0);SG.Initialize(this.DateOfBirth);var AZo=A._NewObject(A.Core.Bu,0);AZo.Initialize(
this.TimestampFirstWeighing);if(((SG.Year===AZo.Year)&&(SG.Aa8()===AZo.Aa8()))&&(
this.FirstBodyWeight>0))return true;else return false;},Ag_:function(AG$){var WI;
var AoZ;if(this.TimestampLastWeighing>0){AoZ=this.TimestampLastWeighing;WI=this.
LastBodyWeight;}else if(this.AnimalType===1){AoZ=A._GetAutoObject(C.Helper).DB();
WI=600000;}else{AoZ=this.DateOfBirth;WI=A._GetAutoObject(C.Helper).Aax(this.AnimalType
);}return A._GetAutoObject(C.Helper).Ag_(WI,AoZ,AG$,this.AnimalType);},AQK:function(
E){if(this.FirstBodyWeightId===E)return;this.FirstBodyWeightId=E;A.aat([this,this.
Bhk,this.AQK],0);},AmZ:function(A_Q){this.Ad1(A_Q);if(A_Q){if(!this.TimestampAlarm
)this.Avt(A._GetAutoObject(C.Helper).DB());}else this.Avt(0);},M5:function(E){if(
this.NaisId===E)return;this.NaisId=E;A.aat([this,this.Amy,this.M5],0);},AEz:function(
A_M){this.Ad4(A_M);if(A_M){if(!this.TimestampLastWatch)this.Avv(A._GetAutoObject(
C.Helper).DB());}else this.Avv(0);},Au1:function(E){if(this.DateOfLastCalving===
E)return;this.DateOfLastCalving=E;A.aat([this,this.Bha,this.Au1],0);},Avd:function(
E){if(this.LactationNumber===E)return;this.LactationNumber=E;A.aat([this,this.Bhu
,this.Avd],0);},Avc:function(E){if(this.IsPerished===E)return;this.IsPerished=E;
A.aat([this,this.Bhr,this.Avc],0);},ARe:function(E){if(this.TimestampLastTemperature===
E)return;this.TimestampLastTemperature=E;A.aat([this,this.BhT,this.ARe],0);},ARc:
function(E){if(this.TimestampLastAssessment===E)return;this.TimestampLastAssessment=
E;A.aat([this,this.BhR,this.ARc],0);},NP:function(E){if(this.Breed===E)return;this.
Breed=E;A.aat([this,this.AuB,this.NP],0);},AjB:function(E){if(this.EaseOfDelivery===
E)return;this.EaseOfDelivery=E;A.aat([this,this.AQb,this.AjB],0);},M7:function(E
){if(this.WhereAbouts===E)return;this.WhereAbouts=E;A.aat([this,this.AuO,this.M7
],0);},AmK:function(E){if(this.NaisIdMother===E)return;this.NaisIdMother=E;A.aat([
this,this.AQj,this.AmK],0);},ADC:function(E){if(this.ReasonOfLeaving===E)return;
this.ReasonOfLeaving=E;A.aat([this,this.BhF,this.ADC],0);},Ad3:function(E){if(this.
IsRegistrationNoticePending===E)return;this.IsRegistrationNoticePending=E;A.aat([
this,this.Bht,this.Ad3],0);},Aqx:function(E){if(this.IsDry===E)return;this.IsDry=
E;A.aat([this,this.Bhq,this.Aqx],0);},Qv:function(){return this.Id;},Aqd:function(
){return this.VisualId;},Bhm:function(){return this.GroupId;},AuD:function(){return this.
DateOfBirth;},VJ:function(){return this.Gender;},AP8:function(){return this.BirthType;
},A5M:function(){return this.LocationId;},A5L:function(){return this.LastTemperature;
},A5G:function(){return this.IsAlarm;},Bhp:function(){return this.IsControl;},Bhs:
function(){return this.IsRegistered;},A5I:function(){return this.IsWatch;},A6h:function(
){return this.WorstAssessment;},A5H:function(){return this.IsFever;},BhS:function(
){return this.TimestampLastControl;},BhU:function(){return this.TimestampLastWatch;
},Bhv:function(){return this.LastRatingTemperature;},BhQ:function(){return this.
TimestampExpirationFeverAlarm;},BhP:function(){return this.TimestampAlarm;},Py:function(
){return this.AnimalType;},A5K:function(){return this.LastBodyWeight;},A55:function(
){return this.TimestampLastWeighing;},Ajv:function(){return this.TransponderId;}
,AQc:function(){return this.FirstBodyWeight;},AQu:function(){return this.TimestampFirstWeighing;
},Bhk:function(){return this.FirstBodyWeightId;},Amy:function(){return this.NaisId;
},Bha:function(){return this.DateOfLastCalving;},Bhu:function(){return this.LactationNumber;
},Bhr:function(){return this.IsPerished;},BhT:function(){return this.TimestampLastTemperature;
},BhR:function(){return this.TimestampLastAssessment;},AuB:function(){return this.
Breed;},AQb:function(){return this.EaseOfDelivery;},AuO:function(){return this.WhereAbouts;
},AQj:function(){return this.NaisIdMother;},BhF:function(){return this.ReasonOfLeaving;
},Bht:function(){return this.IsRegistrationNoticePending;},Bhq:function(){return this.
IsDry;},_Init:function(aArg){C.Row._Init.call(this,aArg);this.__proto__=C.Animal;
this.TableId=0;},_className:"Device::Animal"};C.Row={CH:-1,TableId:2,EK:function(
Ab,AF){if(!AF){A.aa8("%s",(Awr+this.CH.toFixed())+AFk);return false;}else if(AF.
Id!==this.TableId)throw new Error(AFl);else if((Ab<0)||(Ab>=AF.Cj())){A.aa8("%s"
,(((AFm+this.CH.toFixed())+AFn)+AF.Cj().toFixed())+Aws);return false;}this.CH=Ab;
return true;},Cr:function(AF){if(!AF){A.aa8("%s",(Awr+this.CH.toFixed())+AFk);return false;
}else if(AF.Id!==this.TableId)throw new Error(AFl);else if(this.Amb()&&AF.K8()){
A.aa8("%s",ATm+AF.Hz().toFixed());return false;}else if(!this.Amb()&&((this.CH<0
)||(this.CH>=AF.Cj()))){A.aa8("%s",(((AFm+this.CH.toFixed())+AFn)+AF.Cj().toFixed(
))+Aws);return false;}return true;},Gd:function(){this.G9();this.CH=-1;},Amb:function(
){return this.CH===-1;},G9:function(){this.CH=-2;},ApD:function(){return this.CH
!==-2;},A5T:function(){return this.CH;},A68:function(E){this.CH=E;},_Init:function(
aArg){this.__proto__=C.Row;A.hJ++;},_Done:function(){this.__proto__=null;A.hJ--;
},_ReInit:function(){},_Mark:function(D){var B;if((B=this.I)&&(B._cycle!=D))B._Mark(
B._cycle=D);},I:null,_cycle:0,_observers:null,_className:"Device::Row"};C.Rating={
Temperature:0,Id:0,AnimalId:0,Timestamp:0,BodyWeight:0,RatingTemperature:0,Faeces:
0,Respiratory:0,Appearance:0,Feed:0,EK:function(Ab,AF){var Hs=C.Row.EK.call(this
,Ab,AF);if(Hs&&!!AF){this.OnSetId(AF.CE(Ab,0));this.OnSetAnimalId(AF.CE(Ab,1));this.
OnSetTimestamp(AF.Hy(Ab,6));this.OnSetFeed(AF.IW(Ab,2));this.OnSetAppearance(AF.
IW(Ab,3));this.OnSetRespiratory(AF.IW(Ab,4));this.OnSetFaeces(AF.IW(Ab,5));this.
OnSetTemperature(AF.A33(Ab,7));this.OnSetBodyWeight(AF.AA8(Ab,8));this.OnSetRatingTemperature(
AF.IW(Ab,9));}return Hs;},Cr:function(AF){if(this.K&&this.K.Cr)return this.K.Cr.
apply(this,arguments);else return C.Rating.A9n.apply(this,arguments);},A9n:function(
AF){var Hs=C.Row.Cr.call(this,AF);if((Hs&&!!AF)&&(AF.Id===1)){var Jg=AF.Op();if(
Jg<=0)A.aa8("%s",AbR);else{var Aya=this.Amb();if(Aya)this.CH=AF.XS();else AF.G_(
this.CH,0,this.Id);AF.G_(this.CH,1,this.AnimalId);AF.Abu(this.CH,6,this.Timestamp
);AF.AjZ(this.CH,2,this.Feed);AF.AjZ(this.CH,3,this.Appearance);AF.AjZ(this.CH,4
,this.Respiratory);AF.AjZ(this.CH,5,this.Faeces);AF.A7Z(this.CH,7,this.Temperature
);AF.AR7(this.CH,8,this.BodyWeight);AF.AjZ(this.CH,9,this.RatingTemperature);AF.
Or(Jg);if(Aya)this.OnSetId(AF.Aay());var Q3=A._GetAutoObject(C.Device).Ao;var Ab=
A._GetAutoObject(C.Device).Ao.K4(0,this.AnimalId);if(Ab>=0){var B3=A._NewObject(
C.Animal,0);B3.EK(Ab,Q3);if(this.Temperature>0)B3.TD(A._GetAutoObject(C.Helper).
A4s(this));if((this.Temperature>0)&&A._GetAutoObject(C.Helper).AEg(this)){var Oa=
A._GetAutoObject(C.Helper).AOT(this);B3.AjG(Oa);B3.AmZ(Oa);}else if(this.Temperature>
0){var Oa=(A._GetAutoObject(C.Helper).AOT(this)||(B3.WorstAssessment===2))||(B3.
WorstAssessment===1);B3.AjG(Oa);B3.AmZ(Oa);}else{var Oa=A._GetAutoObject(C.Helper
).AOT(this)||B3.IsFever;B3.AjG(Oa);B3.AmZ(Oa);}B3.Cr(Q3);}}}return Hs;},Gd:function(
){C.Row.Gd.call(this);this.OnSetTimestamp(A._GetAutoObject(C.Helper).DB());this.
OnSetId(-1);},G9:function(){C.Row.G9.call(this);this.OnSetTimestamp(0);this.OnSetId(
0);this.OnSetAnimalId(0);this.OnSetFeed(0);this.OnSetAppearance(0);this.OnSetRespiratory(
0);this.OnSetFaeces(0);this.OnSetTemperature(0);this.OnSetBodyWeight(0);this.OnSetRatingTemperature(
0);},OnSetTemperature:function(E){if(this.Temperature===E)return;this.Temperature=
E;A.aat([this,this.BhO,this.OnSetTemperature],0);},OnSetId:function(E){if(this.Id===
E)return;this.Id=E;A.aat([this,this.Qv,this.OnSetId],0);},OnSetAnimalId:function(
E){if(this.AnimalId===E)return;this.AnimalId=E;A.aat([this,this.Bg1,this.OnSetAnimalId
],0);},OnSetFeed:function(E){if(this.Feed===E)return;this.Feed=E;A.aat([this,this.
Bhh,this.OnSetFeed],0);},OnSetAppearance:function(E){if(this.Appearance===E)return;
this.Appearance=E;A.aat([this,this.Bg2,this.OnSetAppearance],0);},OnSetRespiratory:
function(E){if(this.Respiratory===E)return;this.Respiratory=E;A.aat([this,this.BhG
,this.OnSetRespiratory],0);},OnSetFaeces:function(E){if(this.Faeces===E)return;this.
Faeces=E;A.aat([this,this.Bhf,this.OnSetFaeces],0);},OnSetTimestamp:function(E){
if(this.Timestamp===E)return;this.Timestamp=E;A.aat([this,this.A54,this.OnSetTimestamp
],0);},Bk2:function(Nf,A1){switch(Nf){case 2:this.OnSetAppearance(A1);break;case
1:this.OnSetFeed(A1);break;case 4:this.OnSetFaeces(A1);break;case 3:this.OnSetRespiratory(
A1);break;default:;}},Be7:function(Nf){switch(Nf){case 2:return this.Appearance;
case 1:return this.Feed;case 4:return this.Faeces;case 3:return this.Respiratory;
default:return 0;}},OnSetRatingTemperature:function(E){if(this.RatingTemperature===
E)return;this.RatingTemperature=E;A.aat([this,this.BhE,this.OnSetRatingTemperature
],0);},OnSetBodyWeight:function(E){if(this.BodyWeight===E)return;this.BodyWeight=
E;A.aat([this,this.Bg5,this.OnSetBodyWeight],0);},BhO:function(){return this.Temperature;
},Qv:function(){return this.Id;},Bg1:function(){return this.AnimalId;},Bhh:function(
){return this.Feed;},Bg2:function(){return this.Appearance;},BhG:function(){return this.
Respiratory;},Bhf:function(){return this.Faeces;},A54:function(){return this.Timestamp;
},BhE:function(){return this.RatingTemperature;},Bg5:function(){return this.BodyWeight;
},_Init:function(aArg){C.Row._Init.call(this,aArg);this.__proto__=C.Rating;this.
TableId=1;var Lj=this._variants();if(Lj){this.K={};Lj._Init.call(this,aArg);}},_Done:
function(){if(this.K)this.K._Done.call(this);this.__proto__=C.Row;C.Row._Done.call(
this);},_ReInit:function(){C.Row._ReInit.call(this);if(this.K)this.K._ReInit.call(
this);},_Mark:function(D){C.Row._Mark.call(this,D);if(this.K)this.K._Mark(D);},_variants:
function(){return A.abt.Rating._variants();},K:null,_className:"Device::Rating"};
C.HelperClass={TN:null,AgU:null,AR0:null,AR1:null,V:null,Aq:null,Kr:null,Sh:null
,Ac0:null,TS:null,TR:null,Adm:null,AeK:null,AeJ:null,AeI:null,AeL:null,AfQ:null,
AES:0,Init:function(aArg){A.ow([this,this.ARx],this);},AjL:function(E){this.TN=E;
A.aat([this,this.Aqb,this.AjL],0);},ADF:function(E){this.AgU=E;A.aat([this,this.
A5U,this.ADF],0);},BwM:function(H){switch(A._GetAutoObject(C.Device).ScanState){
case 0:break;case 2:{var As3=A._GetAutoObject(C.Device).PD;if(!As3)throw new Error(
ATn);switch(As3.TransponderType){case 1:this.AjL(As3);break;case 2:this.AQ4(As3);
break;case 3:this.ADF(As3);break;case 4:this.AQ5(As3);break;case 0:break;default:
throw new Error(ATo);}}break;case 4:A._GetAutoObject(C.Device).A5(11,true,A.jm,2000
,null);break;case 3:A._GetAutoObject(C.Device).A5(12,true,A.jm,2000,null);break;
case 1:break;default:throw new Error(ATp);}},AjW:function(){this.AjL(null);this.
AQ4(null);this.ADF(null);this.AQ5(null);},ADK:function(E){if(this.K&&this.K.ADK)
return this.K.ADK.apply(this,arguments);else return C.HelperClass.A9l.apply(this
,arguments);},A9l:function(E){A.aat([this,this.Ud,this.Ue],0);A._GetAutoObject(C.
Device).SetSystemTime(E);},Ue:function(An){this.ADK(An);},DB:function(){if(this.
K&&this.K.DB)return this.K.DB.apply(this,arguments);else return C.HelperClass.A9h.
apply(this,arguments);},A9h:function(){var B;return((B=(this.Aq.A$L()|0))<0)?B+0x100000000:
B;},Ud:function(){return this.DB();},Aq2:function(){A._GetAutoObject(C.Device).Se(-
1);this.V.G9();A.vv(this.V,0);},A4G:function(L1){if(!L1){A.aa8("%s%U",ATq,L1);return false;
}var A9=A._GetAutoObject(C.Device).Ao.AiY(22,L1);return this.HY(A9);},Al1:function(
AnG,AG_){switch(AnG){case 0:{var An7=AG_;switch(An7){case 14:return A.z2(A.abg.AeG
);case 6:return Arz;case 4:return A.z2(A.abg.AfW);case 28:return Awt;case 7:return A.
z2(A.abg.Aeq);case 2:return A.z2(A.abg.O);case 0:return A.z2(A.abg.HA);case 37:return QU;
case 8:return A.z2(A.abg.Alarm);case 9:return A.z2(A.abg.AAn);case 38:return A.z2(
A.abg.ALN);case 11:return A.z2(A.abg.Fever);case 27:return Awu;case 10:return A.
z2(A.abg.BkJ);case 12:return A.z2(A.abg.AqN);case 29:return A.z2(A.abg.AO_);case
18:return A.z2(A.abg.Weighing);case 17:return ATr;case 5:return A.z2(A.abg.Temperature
);case 3:return A.z2(A.abg.Bgb);case 26:return A.z2(A.abg.Yr);case 35:return A.z2(
A.abg.Yr)+ATs;case 36:return ATt;case 15:return ATu;case 24:return AFo;case 20:return AFp;
case 30:return AeS;case 21:return Ank;case 19:return ATv;case 22:return A.z2(A.abg.
Transponder);case 1:return A.z2(A.abg.Gq);case 34:return A.z2(A.abg.I_);case 13:
return AFq;case 31:return Aki;default:{A.aa8("%s",AFr+An7.toFixed());return Awv+
An7.toFixed();}}}case 1:{var An7=AG_;switch(An7){case 1:return A.z2(A.abg.Animal
);case 3:return A.z2(A.abg.AEf);case 8:return A.z2(A.abg.Ag9);case 5:return A.z2(
A.abg.AEh);case 2:return A.z2(A.abg.Feed);case 4:return A.z2(A.abg.AEi);case 7:return A.
z2(A.abg.Temperature);case 6:return A.z2(A.abg.Bu);default:{A.aa8("%s",ATw+An7.toFixed(
));return Awv+An7.toFixed();}}}default:A.aa8("%s",(ATx+AnG.toFixed())+ATy);}return A.
jm;},A3V:function(AnG,AL){var result=A.jm;if(!!AL){result=this.Al1(AnG,AL.ET);result=((
result+N2)+A._GetAutoObject(C.Converter).A3G(AL.Operator))+N2;if(!!(C.Int32FilterCriterion.
isPrototypeOf(AL)?AL:null))result=result+(C.Int32FilterCriterion.isPrototypeOf(AL
)?AL:null).A4.toFixed();else if(!!(C.UInt32FilterCriterion.isPrototypeOf(AL)?AL:
null))result=result+(C.UInt32FilterCriterion.isPrototypeOf(AL)?AL:null).A4.toFixed(
);else if(!!(C.StringFilterCriterion.isPrototypeOf(AL)?AL:null))result=result+(C.
StringFilterCriterion.isPrototypeOf(AL)?AL:null).A4;else if(!!(C.BoolFilterCriterion.
isPrototypeOf(AL)?AL:null)){if((C.BoolFilterCriterion.isPrototypeOf(AL)?AL:null).
A4)result=this.Al1(AnG,AL.ET);else result=A.jm;}else if(!!(C.GenderFilterCriterion.
isPrototypeOf(AL)?AL:null)){var Bvh=A._NewObject(C.GenderToString,0);result=result+
Bvh.Lh((C.GenderFilterCriterion.isPrototypeOf(AL)?AL:null).A4);}else if(!!(C.AnimalTypeFilterCriterion.
isPrototypeOf(AL)?AL:null)){var Bud=A._NewObject(C.AnimalTypeToString,0);result=
result+Bud.Lh((C.AnimalTypeFilterCriterion.isPrototypeOf(AL)?AL:null).A4);}else if(
!!(C.AssessmentFilterCriterion.isPrototypeOf(AL)?AL:null)){var Buf=A._NewObject(
C.AssesmentToString,0);result=result+Buf.Lh((C.AssessmentFilterCriterion.isPrototypeOf(
AL)?AL:null).A4);}else if(!!(C.UInt64FilterCriterion.isPrototypeOf(AL)?AL:null))
result=result+(C.UInt64FilterCriterion.isPrototypeOf(AL)?AL:null).A4.toFixed();else
if(!!(C.WhereAboutsFilterCriterion.isPrototypeOf(AL)?AL:null)){var Byo=A._NewObject(
C.WhereAboutsToString,0);result=result+Byo.Lh((C.WhereAboutsFilterCriterion.isPrototypeOf(
AL)?AL:null).A4);}else A.aa8("%s",ATz);}return result;},NV:function(aString,A_z,
Btt){var result=A.jm;var Bb8=false;var index=0;var Btv=A_z.length;while(!Bb8){var
A0W=aString.indexOf(A_z,index);if(A0W!==-1){result=(result+A.aaY(aString,index,A0W-
index))+Btt;index=A0W+Btv;}else{var A_D=aString.length;if(index<A_D)result=result+
A.aa4(aString,A_D-index);Bb8=true;}}return result;},AQ4:function(E){this.AR0=E;A.
aat([this,this.BhH,this.AQ4],0);},AQ5:function(E){this.AR1=E;A.aat([this,this.BhI
,this.AQ5],0);},A$$:function(){return((A._GetAutoObject(C.Device).ScanState===2)&&
!!A._GetAutoObject(C.Device).PD)&&(A._GetAutoObject(C.Device).PD.TransponderType===
1);},Afj:function(H){if(!this.V.Amb()&&!!this.V.Id)this.Bga(this.V.Id);},AtY:function(
Ee){return A._GetAutoObject(C.Helper).TS.Get(Ee);},A3R:function(Ee){return A._GetAutoObject(
C.Helper).TR.Get(Ee);},A3Z:function(){var P=0;var min=32767;while(P<A._GetAutoObject(
C.Helper).TS.Mx){if(A._GetAutoObject(C.Helper).TS.Get(P)<min)min=A._GetAutoObject(
C.Helper).TS.Get(P);P=P+1;}return min;},ARx:function(H){A.y_([this,this.Afj],A._GetAutoObject(
C.Device).Ao,0);},AOT:function(DW){if(!DW)return false;var BfK=(((this.Ax8(DW.Faeces
)||this.Ax8(DW.Feed))||this.Ax8(DW.Appearance))||this.Ax8(DW.Respiratory))||this.
Ax8(DW.RatingTemperature);return BfK||this.A4s(DW);},Ax8:function(A_d){return(A_d===
2)||(A_d===1);},A4s:function(DW){return!!DW&&(DW.Temperature>A._GetAutoObject(C.
Helper).AtY(A._GetAutoObject(C.Helper).V.AnimalType));},HY:function(L0){var AZ0=
false;if(L0>=0){if(L0!==this.V.CH)A._GetAutoObject(C.Device).Se(L0);AZ0=this.V.EK(
L0,A._GetAutoObject(C.Device).Ao);if(AZ0)A.vv(this.V,0);}else{A._GetAutoObject(C.
Device).Se(-1);this.V.G9();A.vv(this.V,0);}return AZ0;},Ag2:function(Ahk){var B;
return(((B=(this.Aq.A$L()|0))<0)?B+0x100000000:B)-this.Atu(Ahk);},Arf:function(){
var B;A.ow([B=this.Kr,B.Av2],this);},BxU:function(H){A._GetAutoObject(C.Device).
A5(16,false,AbS,0,null);A._GetAutoObject(C.Device).A5(5,true,A.jm,0,null);},Bkd:
function(H){var Ar=(C.PopupContext.isPrototypeOf(H)?H:null);if(!!Ar&&(Ar.PopupState===
5))this.Arf();},Bj3:function(E){if(this.AES===E)return;this.AES=E;A._GetAutoObject(
C.Device).A5(16,true,this.AES.toFixed(),0,[this,this.Bkd]);},ME:function(Bs5,BtK
){var D2;var BcD=A._NewObject(A.Core.Am7,0);var Gp=A._NewObject(A.Core.Bu,0);var
KV=A._NewObject(A.Core.Bu,0);Gp.Initialize(Bs5);KV.Initialize(BtK);D2=KV.Bek(Gp);
BcD.Initialize2(0,D2.ABy,D2.ACj,D2.AEt);if(Gp.J(BcD).Gt===Gp.Gt)return D2.J9;else
return D2.J9+1;},BxW:function(H){A._GetAutoObject(C.Device).UpdateMeasureState(3
);if((A._GetAutoObject(C.Device).Kj>=A._GetAutoObject(C.Device).Y$)&&(A._GetAutoObject(
C.Device).Kj<=A._GetAutoObject(C.Helper).AtY(A._GetAutoObject(C.Helper).V.AnimalType
))){var Buc=A._GetAutoObject(C.Helper).V.Id;var Bxo=A._GetAutoObject(C.Device).Ao.
K4(0,Buc);A._GetAutoObject(C.Device).Ao.M_(Bxo,9,false);A._GetAutoObject(C.Device
).Ao.Bk(A._GetAutoObject(C.Device).Ao.Filter);}},AI8:function(H){var Bdr=A._GetAutoObject(
C.Helper).AtY(A._GetAutoObject(C.Helper).V.AnimalType);var Bdl=A._GetAutoObject(
C.Helper).A3R(A._GetAutoObject(C.Helper).V.AnimalType);var AsX=A.aaC(Bdr-100,Bdl+
100);this.A$q(AsX);},Atu:function(Ahk){return Ahk*86400;},Aka:function(Kn){var B;
if(!!Kn&&(Kn<(((B=Math.trunc(Math.pow(10,A._GetAutoObject(C.Device).Fx)))<0)?B+0x10000000000000000:
B)))return-1;return A._GetAutoObject(C.Helper).U8(Kn,A._GetAutoObject(C.Device).
Fx&0xFF,A._GetAutoObject(C.Device).FP&0xFF)|0;},AEg:function(DW){if(!DW)return false;
return((!!DW.Faeces||!!DW.Feed)||!!DW.Appearance)||!!DW.Respiratory;},Ag_:function(
AX$,A_F,AG$,Ee){var B;var AoK;if((AX$<650000)&&(A_F<this.DB())){var A_2=this.AfQ.
At0(Ee);var A_1=0;if(A_2>=0)A_1=this.AeI.Get(A_2);AoK=AX$+(this.ME(A_F,this.DB()
)*A_1);if(AG$>0){var AY8=this.Ay0(AG$);AoK=(Math.trunc(((((B=AoK)<0)?B+0x10000000000000000:
B)+Math.trunc(AY8/2))/AY8)*AY8)|0;}if(AoK>650000)AoK=650000;}else AoK=AX$;return AoK;
},ABd:function(DW){var Ao6=A._GetAutoObject(C.Converter).Ac1(DW.Faeces);if(Ao6<A.
_GetAutoObject(C.Converter).Ac1(DW.Feed))Ao6=A._GetAutoObject(C.Converter).Ac1(DW.
Feed);if(Ao6<A._GetAutoObject(C.Converter).Ac1(DW.Appearance))Ao6=A._GetAutoObject(
C.Converter).Ac1(DW.Appearance);if(Ao6<A._GetAutoObject(C.Converter).Ac1(DW.Respiratory
))Ao6=A._GetAutoObject(C.Converter).Ac1(DW.Respiratory);return A._GetAutoObject(
C.Converter).A8m(Ao6);},AvQ:function(DW,Ne){if(!!DW){DW.OnSetFaeces(Ne);DW.OnSetFeed(
Ne);DW.OnSetAppearance(Ne);DW.OnSetRespiratory(Ne);}},Be5:function(AF,AHe,Ab_,Wt
,AeY){if(!AF)throw new Error(ArA);var Bb=A._NewObject(C.Filter,0);var Aov=AF.Filter;
var N6=A._NewObject(C.Int32FilterCriterion,0);N6.Operator=0;N6.ET=1;N6.A4=Ab_;Bb.
C0(N6);if(Wt>0){var Oj=A._NewObject(C.UInt32FilterCriterion,0);Oj.Operator=2;Oj.
ET=6;Oj.A4=Wt;Bb.C0(Oj);}if(AeY>0){var N$=A._NewObject(C.UInt32FilterCriterion,0
);N$.Operator=3;N$.ET=6;N$.A4=AeY;Bb.C0(N$);}AF.Bk(Bb);var L2=A._NewObject(C.Int32ArrayWrapper
,0);L2.YH(6);var P;for(P=0;P<L2.Mx;P=P+1)L2.Set(P,0);var Um;for(P=0;P<AF.Cj();P=
P+1){Um=AF.IW(P,AHe);L2.Set(Um,L2.Get(Um)+1);}AF.Bk(Aov);return L2;},Y0:function(
Ahk){var B;var Gp=A._NewObject(A.Core.Bu,0);var BcC=A._NewObject(A.Core.Am7,0);Gp.
Initialize(A._GetAutoObject(C.Converter).Ag4());BcC.Initialize2(Ahk,0,0,0);Gp=Gp.
Blu(BcC);return((B=(Gp.JL()|0))<0)?B+0x100000000:B;},A3S:function(AF,Ab_,AeY,Wt){
if(!AF)throw new Error(ArA);var Bb=A._NewObject(C.Filter,0);var Aov=AF.Filter;var
N6=A._NewObject(C.Int32FilterCriterion,0);N6.Operator=0;N6.ET=1;N6.A4=Ab_;Bb.C0(
N6);if(Wt>0){var Oj=A._NewObject(C.UInt32FilterCriterion,0);Oj.Operator=2;Oj.ET=
6;Oj.A4=Wt;Bb.C0(Oj);}if(AeY>0){var N$=A._NewObject(C.UInt32FilterCriterion,0);N$.
Operator=3;N$.ET=6;N$.A4=AeY;Bb.C0(N$);}AF.Bk(Bb);var L2=A._NewObject(C.Int32ArrayWrapper
,0);L2.YH(6);var P;for(P=0;P<L2.Mx;P=P+1)L2.Set(P,0);var AnV=A._NewObject(C.Rating
,0);var AY0;for(P=0;P<AF.Cj();P=P+1){AnV.EK(P,AF);if(A._GetAutoObject(C.Helper).
AEg(AnV)){AY0=A._GetAutoObject(C.Helper).ABd(AnV);L2.Set(AY0,L2.Get(AY0)+1);}}AF.
Bk(Aov);return L2;},AZw:function(AF,Ab_,BuO){if(!AF)throw new Error(ArA);var Bb=
A._NewObject(C.Filter,0);var Aov=AF.Filter;var N6=A._NewObject(C.Int32FilterCriterion
,0);N6.Operator=0;N6.ET=1;N6.A4=Ab_;Bb.C0(N6);var Wt=A._GetAutoObject(C.Converter
).Ag4()+A._GetAutoObject(C.Helper).Atu(BuO);var AeY=Wt+A._GetAutoObject(C.Helper
).Atu(1);var Oj=A._NewObject(C.UInt32FilterCriterion,0);Oj.Operator=2;Oj.ET=6;Oj.
A4=Wt;Bb.C0(Oj);var N$=A._NewObject(C.UInt32FilterCriterion,0);N$.Operator=3;N$.
ET=6;N$.A4=AeY;Bb.C0(N$);AF.Bk(Bb);var AnV=A._NewObject(C.Rating,0);var Um;var Ly=
0;var P;for(P=0;P<AF.Cj();P=P+1){AnV.EK(P,AF);if(A._GetAutoObject(C.Helper).AEg(
AnV)){Um=A._GetAutoObject(C.Helper).ABd(AnV);if(A._GetAutoObject(C.Converter).Ac1(
Um)>A._GetAutoObject(C.Converter).Ac1(Ly))Ly=Um;}}AF.Bk(Aov);return Ly;},Ama:function(
){if((A._GetAutoObject(C.Device).WeightRecordingScope===2)||(A._GetAutoObject(C.
Device).WeightRecordingScope===1))return true;else return false;},A4v:function(){
if((A._GetAutoObject(C.Device).WeightRecordingScope===2)||!A._GetAutoObject(C.Device
).WeightRecordingScope)return true;else return false;},Be6:function(AF,AHe,Ab_,Wt
,AeY){if(!AF)throw new Error(ArA);var Bb=A._NewObject(C.Filter,0);var Aov=AF.Filter;
var N6=A._NewObject(C.Int32FilterCriterion,0);N6.Operator=0;N6.ET=1;N6.A4=Ab_;Bb.
C0(N6);if(Wt>0){var Oj=A._NewObject(C.UInt32FilterCriterion,0);Oj.Operator=2;Oj.
ET=6;Oj.A4=Wt;Bb.C0(Oj);}if(AeY>0){var N$=A._NewObject(C.UInt32FilterCriterion,0
);N$.Operator=3;N$.ET=6;N$.A4=AeY;Bb.C0(N$);}AF.Bk(Bb);var L2=A._NewObject(C.Int32ArrayWrapper
,0);L2.YH(6);var P;for(P=0;P<L2.Mx;P=P+1)L2.Set(P,0);if(AF.Cj()>0){var Um=AF.IW(
0,AHe);var AoO=AF.Hy(P,6);var Ad=A._NewObject(A.Core.Bu,0);Ad.Initialize(AoO);var
Ao5=Um;var AIc=A._NewObject(A.Core.Bu,0);AIc.Initialize(Ad.JL());for(P=1;P<AF.Cj(
);P=P+1){Um=AF.IW(P,AHe);AoO=AF.Hy(P,6);Ad.Initialize(AoO);if((Ad.Aa8()!==AIc.Aa8(
))||(Ad.Year!==AIc.Year)){L2.Set(Ao5,L2.Get(Ao5)+1);AIc.Initialize(Ad.JL());Ao5=
Um;}else if(!!Um&&(Um<Ao5))Ao5=Um;}L2.Set(Ao5,L2.Get(Ao5)+1);}AF.Bk(Aov);return L2;
},Apb:function(LX){var B;var Gp=A._NewObject(A.Core.Bu,0);Gp.Initialize(LX);Gp.AmG(
0);Gp.AmJ(0);Gp.AmM(0);return((B=(Gp.JL()|0))<0)?B+0x100000000:B;},AL1:function(
LX){var B;LX=LX+86400;var Gp=A._NewObject(A.Core.Bu,0);Gp.Initialize(LX);Gp.AmG(
0);Gp.AmJ(0);Gp.AmM(0);return((B=(Gp.JL()|0))<0)?B+0x100000000:B;},Be8:function(
BxT,BuZ,Aln,AkM){var A$l=A._GetAutoObject(C.Helper).ME(BxT,BuZ);if(A$l>0)return((
AkM-Aln)/A$l)|0;return 0;},Bl5:function(Bs6,BtL){var Gp=A._NewObject(A.Core.Bu,0
);var KV=A._NewObject(A.Core.Bu,0);Gp.Initialize(Bs6);KV.Initialize(BtL);return(
Gp.Year===KV.Year)&&(Gp.Aa8()===KV.Aa8());},A3X:function(){var Bb=A._GetAutoObject(
C.Helper).MX();var Bam=A._NewObject(C.UInt32FilterCriterion,0);var BtU=A._GetAutoObject(
C.Helper).Y0(A._GetAutoObject(C.Device).Apy)-1;Bam.Initialize(28,2,BtU,true);Bb.
C0(Bam);var Ui=A._NewObject(C.AnimalTypeFilterCriterion,0);Ui.Initialize(14,0,1,
true);Bb.C0(Ui);if(A._GetAutoObject(C.Device).AlY){var Ayl=A._NewObject(C.UInt32FilterCriterion
,0);var AZV=A._GetAutoObject(C.Helper).DB()-21600;Ayl.Initialize(30,3,AZV,true);
Bb.C0(Ayl);}return Bb;},BkM:function(){var Jg=A._GetAutoObject(C.Device).Ao.Op();
if(Jg<=0)A.aa8("%s",AbR);else{A._GetAutoObject(C.Device).Ao.G9();A._GetAutoObject(
C.Device).Ao.Or(Jg);}Jg=A._GetAutoObject(C.Device).AfI.Op();if(Jg<=0)A.aa8("%s",
AbR);else{A._GetAutoObject(C.Device).AfI.G9();A._GetAutoObject(C.Device).AfI.Or(
Jg);}Jg=A._GetAutoObject(C.Device).Bq.Op();if(Jg<=0)A.aa8("%s",AbR);else{A._GetAutoObject(
C.Device).Bq.G9();A._GetAutoObject(C.Device).Bq.Or(Jg);}Jg=A._GetAutoObject(C.Device
).Pa.Op();if(Jg<=0)A.aa8("%s",AbR);else{A._GetAutoObject(C.Device).Pa.G9();A._GetAutoObject(
C.Device).Pa.Or(Jg);}},Bga:function(Ab_){var A9=A._GetAutoObject(C.Device).Ao.K4(
0,Ab_);return this.HY(A9);},AOY:function(L1){var AhG=A._GetAutoObject(C.Device).
Ao.Af5(22,L1);return AhG;},AMG:function(){var Bb=A._GetAutoObject(C.Helper).MX();
var Aih=A._NewObject(C.UInt64FilterCriterion,0);Aih.Initialize(22,0,0,true);Bb.C0(
Aih);return Bb;},AMA:function(AnO,BuW,Sz){var Zx=-1;switch(AnO){case 2:Zx=30;break;
case 3:Zx=31;break;case 10:Zx=19;break;default:A.aa8("%s%e",Sw,AnO);}if(Zx<0)return null;
var Acl=A._NewObject(C.UInt32FilterCriterion,0);Acl.Initialize(Zx,3,A._GetAutoObject(
C.Helper).DB()-BuW,Sz);return Acl;},BkL:function(aFilter){var AL=aFilter.D0(30,3
);if(!!AL)aFilter.QD(AL);AL=aFilter.D0(31,3);if(!!AL)aFilter.QD(AL);AL=aFilter.D0(
19,3);if(!!AL)aFilter.QD(AL);},AYR:function(Ae7,Axa,AF){if(AF.K8())return 5;if(Ae7.
VisualId<=0)switch(Axa){case 0:if(!Ae7.NaisId)return 1;break;case 1:if(!Ae7.TransponderId
)return 1;break;case 3:case 2:case 5:case 4:return 1;default:throw new Error(AFs+
Axa.toFixed());}if((!Ae7.NaisId&&!Ae7.TransponderId)&&A._GetAutoObject(C.Device).
Ao.AiV(1,Ae7.VisualId))return 2;if(!!Ae7.NaisId&&A._GetAutoObject(C.Helper).AOW(
Ae7.NaisId))return 3;if(!!Ae7.TransponderId&&A._GetAutoObject(C.Helper).AOY(Ae7.
TransponderId))return 4;return 0;},Ao9:function(Eu){Eu.DV(A._GetAutoObject(C.Device
).AnimalType);Eu.NP(A._GetAutoObject(C.Device).Breed);Eu.R8(A._GetAutoObject(C.Helper
).DB()-A._GetAutoObject(C.Helper).Atu(A._GetAutoObject(C.Device).Ait));Eu.JM(A._GetAutoObject(
C.Device).Gender);Eu.M7(A._GetAutoObject(C.Device).WhereAbouts);},AKf:function(QZ
,Eu){var GE=0;switch(QZ){case 0:GE=A._GetAutoObject(C.Helper).Aka(Eu.NaisId);break;
case 1:GE=A._GetAutoObject(C.Helper).Aka(Eu.TransponderId);break;case 3:GE=A._GetAutoObject(
C.Device).ApI;break;case 2:GE=A._GetAutoObject(C.Device).ApJ;break;case 4:case 5:
GE=A._GetAutoObject(C.Device).Ai6;break;default:throw new Error(AFt+QZ.toFixed()
);}return GE;},A8t:function(Akr,LY,BsS,A_h,Bto){var B;var PY=null;var WF=null;switch(
Akr){case 0:{PY=[B=A._GetAutoObject(C.Device),B.AQi,B.AXx];WF=[B=A._GetAutoObject(
C.Device),B.AuM,B.Aw7];}break;case 1:switch(LY){case 1:{PY=[B=A._GetAutoObject(C.
Device),B.A5P,B.A9P];WF=[B=A._GetAutoObject(C.Device),B.AuK,B.Aw5];}break;case 0:{
PY=[B=A._GetAutoObject(C.Device),B.A5Q,B.A9Q];WF=[B=A._GetAutoObject(C.Device),B.
AuL,B.Aw6];}break;case 2:{PY=[B=A._GetAutoObject(C.Device),B.AQi,B.AXx];WF=[B=A.
_GetAutoObject(C.Device),B.AuM,B.Aw7];}break;default:throw new Error(Aww+LY.toFixed(
));}break;default:throw new Error(AFu+Akr.toFixed());}if(!!PY&&!!WF){PY[2].call(
PY[0],BsS);if((WF[1].call(WF[0])>0)&&(A_h<Bto))PY[2].call(PY[0],PY[1].call(PY[0]
)+WF[1].call(WF[0]));else if((WF[1].call(WF[0])<0)&&(A_h>0))PY[2].call(PY[0],PY[
1].call(PY[0])+WF[1].call(WF[0]));return PY[1].call(PY[0]);}return 0;},ASW:function(
Eu,Akr,BsZ){if(!Eu||(BsZ===true))return;switch(Akr){case 0:Eu.M5(A._GetAutoObject(
C.Device).Aux);break;case 1:switch(Eu.Gender){case 0:Eu.M5(A._GetAutoObject(C.Device
).ACm);break;case 1:Eu.M5(A._GetAutoObject(C.Device).ACl);break;case 2:Eu.M5(A._GetAutoObject(
C.Device).Aux);break;default:throw new Error(Aww+Eu.Gender.toFixed());}break;default:
throw new Error(AFu+Akr.toFixed());}},BfL:function(QZ,Eu){var result=false;switch(
QZ){case 0:result=!!Eu.NaisId;break;case 1:result=!!Eu.TransponderId;break;case 3:
case 2:case 4:case 5:result=false;break;default:throw new Error(AFt+QZ.toFixed()
);}return result;},AIp:function(Eu,A_c,Axa,Ar7,Ae1){switch(A_c){case 2:if(Ar7<=0
)A._GetAutoObject(C.Device).A5(21,true,Eu.VisualId.toFixed(),0,Ae1);else A._GetAutoObject(
C.Device).A5(48,true,(Eu.VisualId.toFixed()+Awx)+Ar7.toFixed(),0,Ae1);break;case
3:if(Ar7<=0)A._GetAutoObject(C.Device).A5(21,true,A._GetAutoObject(C.Converter).
TY(Eu.NaisId),0,Ae1);else A._GetAutoObject(C.Device).A5(48,true,(A._GetAutoObject(
C.Converter).TY(Eu.NaisId)+Awx)+Ar7.toFixed(),0,Ae1);break;case 4:if(Ar7<=0)A._GetAutoObject(
C.Device).A5(25,true,A._GetAutoObject(C.Converter).TY(Eu.TransponderId),0,Ae1);else
A._GetAutoObject(C.Device).A5(47,true,(A._GetAutoObject(C.Converter).TY(Eu.TransponderId
)+Awx)+Ar7.toFixed(),0,Ae1);break;case 1:switch(Axa){case 1:A._GetAutoObject(C.Device
).A5(42,true,A.jm,0,Ae1);break;case 0:A._GetAutoObject(C.Device).A5(43,true,A.jm
,0,Ae1);break;case 3:case 2:case 5:case 4:A._GetAutoObject(C.Device).A5(22,true,
A.jm,0,Ae1);break;default:throw new Error(AFs+Axa.toFixed());}break;case 5:A._GetAutoObject(
C.Device).A5(41,true,A._GetAutoObject(C.Device).Ao.Hz().toFixed(),0,Ae1);break;case
0:break;default:throw new Error(ATA+A_c.toFixed());}},A$P:function(A_o,LY){var B;
var Ayp=null;switch(A_o){case 0:Ayp=[B=A._GetAutoObject(C.Device),B.AuM,B.Aw7];break;
case 1:switch(LY){case 1:Ayp=[B=A._GetAutoObject(C.Device),B.AuK,B.Aw5];break;case
0:Ayp=[B=A._GetAutoObject(C.Device),B.AuL,B.Aw6];break;case 2:Ayp=[B=A._GetAutoObject(
C.Device),B.AuM,B.Aw7];break;default:throw new Error(Aww+LY.toFixed());}break;default:
throw new Error(ATB+A_o.toFixed());}return Ayp;},A37:function(PO,BtB){var ZV=A._NewObject(
A.Core.Bu,0);ZV.Initialize(PO);var AzG=ZV.Year;var A9=A._GetAutoObject(C.Device).
Pa.K4(0,AzG);var Ul=A._NewObject(C.CalfDeregistrations,0);if(A9<0){if(A._GetAutoObject(
C.Device).Pa.K8())A._GetAutoObject(C.Device).A5(51,true,A._GetAutoObject(C.Device
).Pa.Hz().toFixed(),0,null);else{Ul.Gd();Ul.AjN(AzG);}}else Ul.EK(A9,A._GetAutoObject(
C.Device).Pa);Ul.Au3(Ul.Deregistrations+1);if(BtB)Ul.Au2(Ul.Deaths+1);Ul.Cr(A._GetAutoObject(
C.Device).Pa);},AKd:function(Ly,AkW,AkN){var AIM=0;if((AkW&&(AkN===1))||(Ly===1)
)AIM=1;else if((AkW&&(AkN===2))||(Ly===2))AIM=2;else if(!!Ly&&(Ly!==5))AIM=Ly;return AIM;
},A$q:function(BtT){var B;if(A._GetAutoObject(C.Device).MeasureState===1){this.Sh.
Cv=A._GetAutoObject(C.Device).Y$;this.Sh.B0=BtT;this.Sh.AEN(this);}},AA4:function(
){var Bb=this.AMz();var Bab=A._NewObject(C.BoolFilterCriterion,0);Bab.Initialize(
38,0,true,true);Bb.C0(Bab);return Bb;},A3Q:function(JU){var Bb=A._GetAutoObject(
C.Helper).MX();if(A._GetAutoObject(C.Device).Alx){var AZz=A._GetAutoObject(C.Helper
).AMA(JU,21600,true);Bb.C0(AZz);}return Bb;},A31:function(){var Bb=A._GetAutoObject(
C.Helper).MX();var BaB=A._NewObject(C.UInt64FilterCriterion,0);BaB.Initialize(26
,0,0,true);Bb.C0(BaB);return Bb;},A34:function(){var B;var Bb=A._GetAutoObject(C.
Helper).MX();var Ayv=(C.WhereAboutsFilterCriterion.isPrototypeOf(B=Bb.D0(34,3))?
B:null);if(!!Ayv)Bb.QD(Ayv);var BbQ=A._NewObject(C.BoolFilterCriterion,0);BbQ.Initialize(
37,0,true,true);Bb.C0(BbQ);return Bb;},U8:function(A1,Btu,AYa){var B;A1=Math.trunc(
A1/this.Ay0(Btu));A1%=this.Ay0(AYa);return A1;},Ay0:function(A_p){switch(A_p){case
0:return 1;case 1:return 10;case 2:return 100;case 3:return 1000;case 4:return 10000;
case 5:return 100000;case 6:return 1000000;case 7:return 10000000;case 8:return 100000000;
case 9:return 1000000000;case 10:return 10000000000;case 11:return 100000000000;
case 12:return 1000000000000;case 13:return 10000000000000;case 14:return 100000000000000;
case 15:return 1000000000000000;default:throw new Error(ATC+A_p.toFixed());}},MX:
function(){var Bb=A._NewObject(C.Filter,0);var Bca=A._NewObject(C.BoolFilterCriterion
,0);Bca.Initialize(10,0,true,true);Bb.C0(Bca);var Ayv=A._NewObject(C.WhereAboutsFilterCriterion
,0);Ayv.Initialize(34,3,6,true);Bb.C0(Ayv);return Bb;},ApU:function(aFilter){return!
this.AA7(aFilter);},AA7:function(aFilter){var Jw=0;var Av=aFilter.AMB();while(!!
Av){if(Av.AaQ===false)Jw++;Av=aFilter.AMF(Av);}return Jw;},AMz:function(){var Bb=
this.MX();var Ui=A._NewObject(C.AnimalTypeFilterCriterion,0);Ui.Initialize(14,0,
1,true);Bb.C0(Ui);return Bb;},ABa:function(){var B;var A1m;var N8=this.Bfm();A1m=(((
B=A._GetAutoObject(C.Converter).Atq(N8))<0)?B+0x10000000000000000:B)*this.Ay0(12
);if((N8===10)&&(A._GetAutoObject(C.Device).YK>0)){var Bvi=A._GetAutoObject(C.Helper
).U8(A._GetAutoObject(C.Device).YK,10,2)*this.Ay0(8);A1m+=Bvi;}return A1m;},Bfm:
function(){var N8=0;if(A._GetAutoObject(C.Device).YK>0)N8=A._GetAutoObject(C.Converter
).AeF(A._GetAutoObject(C.Device).YK);if(!N8)N8=A._GetAutoObject(C.Converter).A4y(
A._GetAutoObject(C.Device).Language);return N8;},AOW:function(Ws){var AhG=A._GetAutoObject(
C.Device).Ao.Af5(26,Ws);return AhG;},Ajc:function(Ae2){switch(Ae2){case 0:case 1:
case 2:case 3:case 4:case 5:return false;case 6:case 7:case 8:case 9:case 10:return true;
default:throw new Error(ATD+Ae2.toFixed());}},Bdj:function(QZ,Eu){var GE=0;switch(
QZ){case 1:GE=A._GetAutoObject(C.Helper).Aka(Eu.TransponderId);break;case 0:if(!
A._GetAutoObject(C.Device).EartagNrAssignmentMode)GE=A._GetAutoObject(C.Device).
Ai6;else switch(Eu.Gender){case 0:GE=A._GetAutoObject(C.Device).ApJ;break;case 1:
GE=A._GetAutoObject(C.Device).ApI;break;case 2:GE=A._GetAutoObject(C.Device).Ai6;
break;default:throw new Error(AFv+Eu.Gender.toFixed());}break;default:throw new Error(
ATE+QZ.toFixed());}return GE;},BeU:function(){var B;var Ax6=(((((((A.z2(A.abg.AgX
)+A.z2(A.abg.Colon))+OQ)+A._GetAutoObject(C.Device).AgX)+Awy)+A.z2(A.abg.Bkt))+A.
z2(A.abg.Colon))+OQ)+A._GetAutoObject(A.abk.K1).BeS(((B=A._GetAutoObject(C.Device
).Qs.Timestamp)<0)?B+0x100000000:B);return Ax6;},BeV:function(){var B;var Ax6=((((((((((((((((((((((((((((
ATF+A._GetAutoObject(C.Device).Rt.ACa.toFixed())+Li)+A._GetAutoObject(C.Device).
Rt.ACi.toFixed())+Li)+A._GetAutoObject(C.Device).Rt.AEp.toFixed())+OP)+A._GetAutoObject(
C.Device).Rt.AAv)+OP)+A._GetAutoObject(A.abk.K1).AiZ(((B=A._GetAutoObject(C.Device
).Rt.Timestamp)<0)?B+0x100000000:B))+OQ)+ATG)+A._GetAutoObject(C.Device).R3.ACa.
toFixed())+Li)+A._GetAutoObject(C.Device).R3.ACi.toFixed())+Li)+A._GetAutoObject(
C.Device).R3.AEp.toFixed())+OP)+A._GetAutoObject(C.Device).R3.AAv)+OP)+A._GetAutoObject(
A.abk.K1).AiZ(((B=A._GetAutoObject(C.Device).R3.Timestamp)<0)?B+0x100000000:B))+
OQ)+ATH)+A._GetAutoObject(C.Helper).Bfp())+OP)+A._GetAutoObject(C.Device).GetCommitHash(
))+OP)+A._GetAutoObject(C.Device).GetCommitCount().toFixed())+OP)+A._GetAutoObject(
A.abk.K1).AiZ(A._GetAutoObject(C.Device).GetCommitEpoch());return Ax6;},BeT:function(
){var B;var Ax6=(((((((((((((((((((((ATI+A._GetAutoObject(C.Device).Qs.APj.toFixed(
))+Li)+A._GetAutoObject(C.Device).Qs.APk.toFixed())+Li)+A._GetAutoObject(C.Device
).Qs.APi.toFixed())+OQ)+A.z2(A.abg.A3J))+A.z2(A.abg.Colon))+N2)+A._GetAutoObject(
A.abk.K1).AiZ(((B=A._GetAutoObject(C.Device).Qs.Timestamp)<0)?B+0x100000000:B))+
Awy)+ATJ)+A._GetAutoObject(C.Device).Sj.ASP.toFixed())+Li)+A._GetAutoObject(C.Device
).Sj.ASQ.toFixed())+Li)+A._GetAutoObject(C.Device).Sj.ASO.toFixed())+OQ)+A.z2(A.
abg.A3J))+A.z2(A.abg.Colon))+N2)+A._GetAutoObject(A.abk.K1).AiZ(((B=A._GetAutoObject(
C.Device).Sj.Timestamp)<0)?B+0x100000000:B);return Ax6;},A32:function(AYa){var B;
var P;var Ay5=A.jm;for(P=1;P<=AYa;P=P+1)if(!!A.aaC(0,2))Ay5=Ay5+String.fromCharCode(
A.aaC(97,104)&0xFFFF);else Ay5=Ay5+String.fromCharCode(A.aaC(48,57)&0xFFFF);return Ay5;
},Aax:function(Ee){var Axq=0;if(Ee===1)Ee=0;var A_7=this.AfQ.At0(Ee);if(A_7>=0)Axq=
this.AeL.Get(A_7);return Axq;},ABc:function(Ee){var FK=0;var AzD=this.AfQ.At0(Ee
);if(AzD>=0)FK=this.AeK.Get(AzD);return FK;},ABb:function(Ee){var FK=0;var AzD=this.
AfQ.At0(Ee);if(AzD>=0)FK=this.AeJ.Get(AzD);return FK;},A3U:function(){var Bb=this.
MX();var Ui=A._NewObject(C.AnimalTypeFilterCriterion,0);Ui.Initialize(14,0,A._GetAutoObject(
C.Device).AAO,true);Bb.C0(Ui);return Bb;},AOZ:function(Kn){var BN=Math.trunc(Kn/
1000000000000)|0;if(!BN)return 0;else if(BN>=900)return 1;else if(!A._GetAutoObject(
C.Converter).ALs(BN))return 2;else return 3;},A36:function(){var Bb=A._GetAutoObject(
C.Helper).AMG();var Aku=A._GetAutoObject(C.Helper).Be4(3,A._GetAutoObject(C.Device
).ACd);Aku.AaQ=true;Bb.C0(Aku);return Bb;},Be4:function(EE,A_b){var Av=A._NewObject(
C.UInt32FilterCriterion,0);Av.ET=4;switch(EE){case 2:{Av.Operator=3;Av.A4=A._GetAutoObject(
C.Helper).Y0(A_b);}break;case 3:{Av.Operator=2;Av.A4=A._GetAutoObject(C.Helper).
Y0(A_b-1);}break;default:A.aa8("%s%e",ATK,EE);}return Av;},Bfp:function(){return(((
A._GetAutoObject(C.Device).GetVersionMajor().toFixed()+Li)+A._GetAutoObject(C.Device
).GetVersionMinor().toFixed())+Li)+A._GetAutoObject(C.Device).GetVersionRev().toFixed(
);},Bdk:function(QZ,Eu){var GE=0;switch(QZ){case 0:GE=Eu.VisualId;break;case 2:GE=
A._GetAutoObject(C.Helper).Aka(Eu.TransponderId);break;case 1:if(!A._GetAutoObject(
C.Device).EartagNrAssignmentMode)GE=A._GetAutoObject(C.Device).Ai6;else switch(Eu.
Gender){case 0:GE=A._GetAutoObject(C.Device).ApJ;break;case 1:GE=A._GetAutoObject(
C.Device).ApI;break;case 2:GE=A._GetAutoObject(C.Device).Ai6;break;default:throw new
Error(AFv+Eu.Gender.toFixed());}break;default:throw new Error(ATL+QZ.toFixed());
}return GE;},A8u:function(){var B;var IP=null;var SI=0;if(!A._GetAutoObject(C.Device
).EartagNrAssignmentMode){IP=[B=A._GetAutoObject(C.Device),B.Amx,B.Any];SI=A._GetAutoObject(
C.Device).Atz;}else switch(A._GetAutoObject(C.Helper).V.Gender){case 1:{IP=[B=A.
_GetAutoObject(C.Device),B.AuH,B.Aw3];SI=A._GetAutoObject(C.Device).AAG;}break;case
0:{IP=[B=A._GetAutoObject(C.Device),B.AuI,B.Aw4];SI=A._GetAutoObject(C.Device).AAH;
}break;case 2:{IP=[B=A._GetAutoObject(C.Device),B.Amx,B.Any];SI=A._GetAutoObject(
C.Device).Atz;}break;default:;}if(!!IP)switch(SI){case 1:IP[2].call(IP[0],A._GetAutoObject(
C.Helper).V.VisualId-1);break;case 0:IP[2].call(IP[0],A._GetAutoObject(C.Helper).
V.VisualId+1);break;default:;}},A4w:function(Ws,Eu){return(Eu.NaisId!==Ws)&&this.
AOW(Ws);},BfU:function(L1,Eu){return(Eu.TransponderId!==L1)&&this.AOY(L1);},AMy:
function(){var Bb=A._GetAutoObject(C.Helper).A34();var Ayn=A._NewObject(C.UInt64FilterCriterion
,0);Ayn.Initialize(35,5,0,true);Bb.C0(Ayn);return Bb;},AMI:function(){var Bb=A._GetAutoObject(
C.Helper).A34();var Ayn=A._NewObject(C.UInt64FilterCriterion,0);Ayn.Initialize(35
,0,0,true);Bb.C0(Ayn);return Bb;},Mw:function(AX3,Ahj){AX3.Ai(Ahj);AX3.Ap(Ahj);AX3.
X(Ahj);},A2V:function(Ahl){var B;var Z;var A0a=false;var Wz=Ahl.U9(null,0x1);while(
!!Wz&&(((B=Wz)?B.__proto__:null)!==A.Core.Y)){Z=(A.kh.Ck.isPrototypeOf(Wz)?Wz:null
);if(!!Z){Z.Be(A0a);A0a=!A0a;}Wz=Ahl.U9(Wz,0x1);}},Aqb:function(){return this.TN;
},A5U:function(){return this.AgU;},BhH:function(){return this.AR0;},BhI:function(
){return this.AR1;},BhM:function(){return this.AES;},_Init:function(aArg){C.AlS.
_Init.call(this,aArg);C.Animal._Init.call(this.V={I:this},0);A.Core.Bu._Init.call(
this.Aq={I:this},0);A.abm.F_._Init.call(this.Kr={I:this},0);A.abm.F_._Init.call(
this.Sh={I:this},0);C.AKz._Init.call(this.Ac0={I:this},0);C.ASF._Init.call(this.
TS={I:this},0);C.ASE._Init.call(this.TR={I:this},0);C.UT._Init.call(this.Adm={I:
this},0);C.ATe._Init.call(this.AeK={I:this},0);C.ATd._Init.call(this.AeJ={I:this
},0);C.ATc._Init.call(this.AeI={I:this},0);C.ATg._Init.call(this.AeL={I:this},0);
C.AKA._Init.call(this.AfQ={I:this},0);this.__proto__=C.HelperClass;var B;this.Kr.
IF(1);this.Kr.Fz(3000);this.Kr.B0=100;this.Sh.Au8(10);this.Sh.VN(5);this.Sh.IF(1
);this.Sh.Fz(4000);this.Adm.B0=false;this.Adm.Cv=true;this.Adm.IF(1);this.Adm.Fz(
100);this.Kr.R5=[this,this.BxU];this.Kr.Q=[this,this.BhM,this.Bj3];this.Sh.R5=[this
,this.BxW];this.Sh.Q=[B=A._GetAutoObject(C.Device),B.ACI,B.AGT];this.Adm.Q=[B=A.
_GetAutoObject(C.Device),B.ACJ,B.AGU];this.Init(aArg);var Lj=this._variants();if(
Lj){this.K={};Lj._Init.call(this,aArg);}},_Done:function(){if(this.K)this.K._Done.
call(this);this.__proto__=C.AlS;this.V._Done();this.Aq._Done();this.Kr._Done();this.
Sh._Done();this.Ac0._Done();this.TS._Done();this.TR._Done();this.Adm._Done();this.
AeK._Done();this.AeJ._Done();this.AeI._Done();this.AeL._Done();this.AfQ._Done();
C.AlS._Done.call(this);},_ReInit:function(){C.AlS._ReInit.call(this);this.V._ReInit(
);this.Aq._ReInit();this.Kr._ReInit();this.Sh._ReInit();this.Ac0._ReInit();this.
TS._ReInit();this.TR._ReInit();this.Adm._ReInit();this.AeK._ReInit();this.AeJ._ReInit(
);this.AeI._ReInit();this.AeL._ReInit();this.AfQ._ReInit();if(this.K)this.K._ReInit.
call(this);},_Mark:function(D){var B;C.AlS._Mark.call(this,D);if((B=this.TN)&&(B.
_cycle!=D))B._Mark(B._cycle=D);if((B=this.AgU)&&(B._cycle!=D))B._Mark(B._cycle=D
);if((B=this.AR0)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.AR1)&&(B._cycle!=
D))B._Mark(B._cycle=D);if((B=this.V)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Aq
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Kr)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Sh)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ac0)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.TS)._cycle!=D)B._Mark(B._cycle=D);if((B=this.TR)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Adm)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AeK)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.AeJ)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
AeI)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AeL)._cycle!=D)B._Mark(B._cycle=D);
if((B=this.AfQ)._cycle!=D)B._Mark(B._cycle=D);if(this.K)this.K._Mark(D);},_variants:
function(){return A.abt.HelperClass._variants();},K:null,_className:"Device::HelperClass"
};C.Helper={_Init:function(){C.HelperClass._Init.call(this,0);},_variants:function(
){return this;},_this:null};C.BoolFilterCriterion={A4:false,Adi:function(){var Av=
A._NewObject(C.BoolFilterCriterion,0);Av.Gs(this);return Av;},Gs:function(AL){C.
FilterCriterion.Gs.call(this,AL);var Av=(C.BoolFilterCriterion.isPrototypeOf(AL)?
AL:null);if(!!Av)this.A4=Av.A4;},Initialize:function(AX,EE,A1,Sz){this.ET=AX;this.
Operator=EE;this.A4=A1;this.AaQ=Sz;return this;},_Init:function(aArg){C.FilterCriterion.
_Init.call(this,aArg);this.__proto__=C.BoolFilterCriterion;},_className:"Device::BoolFilterCriterion"
};C.UInt32FilterCriterion={A4:0,Adi:function(){var Av=A._NewObject(C.UInt32FilterCriterion
,0);Av.Gs(this);return Av;},Gs:function(AL){C.FilterCriterion.Gs.call(this,AL);var
Av=(C.UInt32FilterCriterion.isPrototypeOf(AL)?AL:null);if(!!Av)this.A4=Av.A4;},Initialize:
function(AX,EE,A1,Sz){this.ET=AX;this.Operator=EE;this.A4=A1;this.AaQ=Sz;return this;
},_Init:function(aArg){C.FilterCriterion._Init.call(this,aArg);this.__proto__=C.
UInt32FilterCriterion;},_className:"Device::UInt32FilterCriterion"};C.OverlayMenu={
None:0,Home:1,AutoAction:2,MenuItemSettings:3,RatingSettings:4,WeighingSettings:
5,Options:6,AnimalSearch:7,ActionSettings:8,MeasurementReady:9,AnimalMultiInfoMenu:
10,AnimalSearchUnfiltered:11,AnimalSearchDriedOff:12,MassRecordingMenu:13,MassRecordingDefaults:
14,MassRecordingFields:15,PurchasedAnimalsListMenu:16,BirthRegistrationsListMenu:
17,LAST:18};C.EnumToString={BZ:function(A6){throw new Error(ArB+A6.toFixed());},
Lh:function(A6){return this.BZ(A6);},_Init:function(aArg){this.__proto__=C.EnumToString;
A.hJ++;},_Done:function(){this.__proto__=null;A.hJ--;},_ReInit:function(){},_Mark:
function(D){var B;if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:
0,_observers:null,_className:"Device::EnumToString"};C.ScreenTypeToString={BZ:function(
A6){var AH3=A6;var Bt;switch(AH3){case 3:Bt=A.z2(A.abg.At6);break;case 34:Bt=A.z2(
A.abg.O7);break;case 35:Bt=A.z2(A.abg.UI);break;case 47:Bt=A.z2(A.abg.AMw);break;
default:Bt=this.Bl6(A6);}return Bt;},Bl6:function(A6){var AH3=A6;var Bt=A.jm;switch(
AH3){case 0:Bt=Awz;break;case 2:Bt=AFw;break;case 4:Bt=ATM;break;case 40:Bt=AFx;
break;case 39:Bt=ATN;break;case 72:Bt=ATO;break;case 73:Bt=ATP;break;case 93:Bt=
ATQ;break;case 94:Bt=AFy;break;case 74:Bt=ATR;break;case 3:Bt=AwA;break;case 6:Bt=
AFz;break;case 16:Bt=AFA;break;case 22:Bt=ATS;break;case 46:Bt=AFB;break;case 100:
Bt=ATT;break;case 99:Bt=ATU;break;case 101:Bt=QV;break;case 17:Bt=Wj;break;case 23:
Bt=ATV;break;case 18:Bt=ATW;break;case 19:Bt=ATX;break;case 38:Bt=ATY;break;case
87:Bt=ATZ;break;case 1:Bt=AT0;break;case 5:Bt=AT1;break;case 7:Bt=Ahc;break;case
92:Bt=AFC;break;case 8:Bt=AT2;break;case 9:Bt=AT3;break;case 41:Bt=AFD;break;case
42:Bt=AFE;break;case 24:Bt=AwB;break;case 10:Bt=QW;break;case 68:Bt=AT4;break;case
21:Bt=AT5;break;case 11:Bt=AT6;break;case 29:Bt=ArC;break;case 54:Bt=AT7;break;case
30:Bt=AT8;break;case 12:Bt=AT9;break;case 13:Bt=AT_;break;case 14:Bt=AT$;break;case
15:Bt=AUa;break;case 78:Bt=ArD;break;case 79:Bt=AUb;break;case 20:Bt=AUc;break;case
37:Bt=AUd;break;case 43:Bt=AUe;break;case 44:Bt=AUf;break;case 45:Bt=AUg;break;case
25:Bt=AUh;break;case 75:Bt=AUi;break;case 67:Bt=AUj;break;case 66:Bt=AUk;break;case
64:Bt=AFF;break;case 65:Bt=ArE;break;case 77:Bt=AUl;break;case 76:Bt=AUm;break;case
95:Bt=AUn;break;case 88:Bt=AwC;break;case 26:Bt=Akj;break;case 28:Bt=AeT;break;case
27:Bt=ArF;break;case 31:Bt=Akk;break;case 89:Bt=Ahd;break;case 34:Bt=AUo;break;case
35:Bt=ArG;break;case 32:Bt=AFG;break;case 50:Bt=AeU;break;case 55:Bt=AFH;break;case
63:Bt=Wk;break;case 62:Bt=Akl;break;case 33:Bt=Anl;break;case 36:Bt=AUp;break;case
56:Bt=AUq;break;case 86:Bt=AUr;break;case 57:Bt=AUs;break;case 47:Bt=AUt;break;case
49:Bt=ArH;break;case 48:Bt=AFI;break;case 69:Bt=AFJ;break;case 71:Bt=AUu;break;case
70:Bt=AUv;break;case 51:Bt=AUw;break;case 53:Bt=AUx;break;case 52:Bt=AUy;break;case
96:Bt=AUz;break;case 98:Bt=AFK;break;case 97:Bt=AUA;break;case 80:Bt=AwD;break;case
82:Bt=AFL;break;case 81:Bt=AFM;break;case 85:Bt=AFN;break;case 84:Bt=AFO;break;case
83:Bt=AFP;break;case 58:Bt=AFQ;break;case 60:Bt=AUB;break;case 59:Bt=AUC;break;case
61:Bt=AUD;break;case 90:Bt=AUE;break;case 91:Bt=AUF;break;case 102:Bt=AUG;break;
case 103:Bt=AUH;break;default:throw new Error(AwE+AH3.toFixed());}return Bt;},_Init:
function(aArg){C.EnumToString._Init.call(this,aArg);this.__proto__=C.ScreenTypeToString;
},_className:"Device::ScreenTypeToString"};C.OverlayMenuToString={BZ:function(A6
){var BbM=A6;var Oe=A.jm;switch(BbM){case 0:Oe=AFR;break;case 1:Oe=AwA;break;case
8:Oe=AUI;break;case 2:Oe=AFS;break;case 3:Oe=Akm;break;case 4:Oe=Zo;break;case 5:
Oe=AUJ;break;case 6:Oe=AeV;break;case 7:Oe=AUK;break;case 11:Oe=AUL;break;case 12:
Oe=ArI;break;case 9:Oe=AeW;break;case 10:Oe=Anm;break;case 14:Oe=AFT;break;case 15:
Oe=AUM;break;case 13:Oe=OR;break;case 16:Oe=AUN;break;case 17:Oe=AUO;break;default:
throw new Error(AUP+BbM.toFixed());}return Oe;},_Init:function(aArg){C.EnumToString.
_Init.call(this,aArg);this.__proto__=C.OverlayMenuToString;},_className:"Device::OverlayMenuToString"
};C.ScanStateToString={BZ:function(A6){var Bci=A6;var Bn=A.jm;switch(Bci){case 4:
Bn=AwF;break;case 0:Bn=ArJ;break;case 2:Bn=AFU;break;case 3:Bn=AUQ;break;case 1:
Bn=AFV;break;default:throw new Error(AFW+Bci.toFixed());}return Bn;},_Init:function(
aArg){C.EnumToString._Init.call(this,aArg);this.__proto__=C.ScanStateToString;},
_className:"Device::ScanStateToString"};C.MeasureStateToString={BZ:function(A6){
var Bav=A6;var Bn=A.jm;switch(Bav){case 4:Bn=AwF;break;case 0:Bn=ArJ;break;case 2:
Bn=AUR;break;case 1:Bn=AFV;break;case 3:Bn=AFX;break;default:throw new Error(AUS+
Bav.toFixed());}return Bn;},_Init:function(aArg){C.EnumToString._Init.call(this,
aArg);this.__proto__=C.MeasureStateToString;},_className:"Device::MeasureStateToString"
};C.TemperatureUnit={Celsius:0,Fahrenheit:1,LAST:2};C.TemperatureUnitToString={BZ:
function(A6){var BcH=A6;var Ao0=A.jm;switch(BcH){case 0:Ao0=A.z2(A.abg.Bml);break;
case 1:Ao0=A.z2(A.abg.Bmm);break;default:throw new Error(AUT+BcH.toFixed());}return Ao0;
},_Init:function(aArg){C.EnumToString._Init.call(this,aArg);this.__proto__=C.TemperatureUnitToString;
},_className:"Device::TemperatureUnitToString"};C.AnimalType={DairyCalf:0,DairyCow:
1,SheepLamb:2,LAST:3};C.AnimalTypeToString={BZ:function(A6){var Bcy=A6;var type=
A.jm;switch(Bcy){case 0:type=A.z2(A.abg.BdR);break;case 1:type=A.z2(A.abg.Bd4);break;
case 2:type=A.z2(A.abg.Bf2);break;default:throw new Error(AUU+Bcy.toFixed());}return type;
},_Init:function(aArg){C.EnumToString._Init.call(this,aArg);this.__proto__=C.AnimalTypeToString;
},_className:"Device::AnimalTypeToString"};C.Language={Default:0,German:1,Spanish:
2,French:3,Italian:4,Finnish:5,Chinese_TW:6,Turkish:7,Greek:8,Russian:9,Dutch:10
,Czech:11,Estonian:12,Bulgarian:13,Bosnian:14,Norwegian:15,Ukrainian:16,LAST:17};
C.LanguageToString={BZ:function(A6){var Ayg=A6;var OX=A.jm;switch(Ayg){case 0:OX=
AFY;break;case 10:OX=AUV;break;case 1:OX=AFZ;break;case 12:OX=AF0;break;case 5:OX=
AwG;break;case 3:OX=AUW;break;case 8:OX=AUX;break;case 13:OX=AUY;break;case 4:OX=
AUZ;break;case 9:OX=AU0;break;case 2:OX=AU1;break;case 7:OX=AU2;break;case 6:OX=
AU3;break;case 11:OX=ArK;break;case 14:OX=Ann;break;case 15:OX=AF1;break;case 16:
OX=AU4;break;default:throw new Error(AF2+Ayg.toFixed());}return OX;},Lh:function(
A6){var Ayg=A6;var Dk=A.jm;switch(Ayg){case 0:Dk=AU5;break;case 10:Dk=Wf;break;case
1:Dk=QT;break;case 12:Dk=AU6;break;case 5:Dk=Ua;break;case 3:Dk=Wc;break;case 8:
Dk=AU7;break;case 13:Dk=Wa;break;case 4:Dk=Ub;break;case 9:Dk=Su;break;case 2:Dk=
Zn;break;case 7:Dk=AeO;break;case 6:Dk=AU8;break;case 11:Dk=AU9;break;case 14:Dk=
AU_;break;case 15:Dk=St;break;case 16:Dk=JT;break;default:throw new Error(AF2+Ayg.
toFixed());}return Dk;},_Init:function(aArg){C.EnumToString._Init.call(this,aArg
);this.__proto__=C.LanguageToString;},_className:"Device::LanguageToString"};C.Gender={
Male:0,Female:1,Unknown:2,LAST:3};C.BirthType={Single:0,Twins:1,Triplets:2,Quadruplets:
3,LAST:4};C.GenderToString={BZ:function(A6){var Asn=A6;var AIj=A.jm;switch(Asn){
case 0:AIj=A.z2(A.abg.Male);break;case 1:AIj=A.z2(A.abg.Female);break;case 2:AIj=
A.z2(A.abg.Unknown);break;default:throw new Error(AU$+Asn.toFixed());}return AIj;
},_Init:function(aArg){C.EnumToString._Init.call(this,aArg);this.__proto__=C.GenderToString;
},_className:"Device::GenderToString"};C.BirthTypeToString={BZ:function(A6){var type=
A6;var Ae_=A.jm;switch(type){case 0:Ae_=A.z2(A.abg.Bll);break;case 1:Ae_=A.z2(A.
abg.Bmh);break;case 2:Ae_=A.z2(A.abg.Triplets);break;case 3:Ae_=A.z2(A.abg.Quadruplets
);break;default:throw new Error(AVa+type.toFixed());}return Ae_;},_Init:function(
aArg){C.EnumToString._Init.call(this,aArg);this.__proto__=C.BirthTypeToString;},
_className:"Device::BirthTypeToString"};C.SyncState={Idle:0,Init:1,Exporting:2,ImportStart:
3,Importing:4,ImportFinish:5,Ready:6,Error:7,LAST:8};C.SyncStateToString={BZ:function(
A6){var BcB=A6;var Bn=A.jm;switch(BcB){case 7:Bn=AwF;break;case 0:Bn=ArJ;break;case
6:Bn=AFX;break;case 2:Bn=AVb;break;case 5:Bn=AVc;break;case 3:Bn=AVd;break;case 4:
Bn=AVe;break;case 1:Bn=AVf;break;default:throw new Error(AVg+BcB.toFixed());}return Bn;
},_Init:function(aArg){C.EnumToString._Init.call(this,aArg);this.__proto__=C.SyncStateToString;
},_className:"Device::SyncStateToString"};C.RatedAttributeToString={BZ:function(
A6){var Ay6=A6;switch(Ay6){case 0:return A.jm;case 1:return A.z2(A.abg.BkC);case
4:return A.z2(A.abg.BkB);case 3:return A.z2(A.abg.BkD);case 2:return A.z2(A.abg.
BkA);default:throw new Error(AF3+Ay6.toFixed());}},Lh:function(A6){var Ay6=A6;switch(
Ay6){case 0:return A.jm;case 1:return A.z2(A.abg.Feed);case 4:return A.z2(A.abg.
AEh);case 3:return A.z2(A.abg.AEi);case 2:return A.z2(A.abg.AEf);default:throw new
Error(AF3+Ay6.toFixed());}},_Init:function(aArg){C.EnumToString._Init.call(this,
aArg);this.__proto__=C.RatedAttributeToString;},_className:"Device::RatedAttributeToString"
};C.AssesmentToString={BZ:function(A6){var AkB=A6;var Axx=A.jm;switch(AkB){case 0:
case 5:Axx=A.jm;break;case 3:Axx=A.z2(A.abk.Blr);break;case 2:Axx=A.z2(A.abk.Blt
);break;case 1:Axx=A.z2(A.abk.Bls);break;default:throw new Error(AVh+AkB.toFixed(
));}return Axx;},_Init:function(aArg){C.EnumToString._Init.call(this,aArg);this.
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
60,RemovedAnimal:61,RemovedAllBirthNoticesPending:62,MissingAnimalIdMother:63,WarningActionNotApplicable:
64,SuccessClearAnimalLoss:65,WarningNoActionsForAnimalLoss:66,SuccessLinkTransponder:
67,SuccessLinkNaisId:68,CannotReassignNaisId:69,WarningDataExportHitBirthFailed:
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
102,WarningParsedDateInFutureInvalid:103,WarningParsingNaisIdFailed:104,LAST:105
};C.PopupState={Queued:0,Unknown:1,Displayed:2,ClosedAfterTimeOut:3,ClosedWithOk:
4,ClosedWithCancel:5,ClosedByMiddleware:6,ClosedWithYes:7,ClosedWithNo:8,Opened:
9};C.PopupContext={AD5:null,AjP:A.jm,Aj_:0,PopupState:1,Id:0,Show:false,BjP:function(
E){var B;if(this.PopupState===E)return;this.PopupState=E;if(!!this.AD5)(B=this.AD5
)?B[1].call(B[0],this):null;},_Init:function(aArg){this.__proto__=C.PopupContext;
A.hJ++;},_Done:function(){this.__proto__=null;A.hJ--;},_ReInit:function(){},_Mark:
function(D){var B;if((B=this.AD5)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((
B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:
"Device::PopupContext"};C.Boolean={No:0,Yes:1,LAST:2};C.BooleanToYesNo={BZ:function(
A6){switch(A6){case 0:return A.z2(A.abg.No);case 1:return A.z2(A.abg.Yes);default:
return Akn+A6.toFixed();}},_Init:function(aArg){C.EnumToString._Init.call(this,aArg
);this.__proto__=C.BooleanToYesNo;},_className:"Device::BooleanToYesNo"};C.AnimalGroupTableFields={
Id:0,GroupName:1};C.AnimalGroup={GroupName:AbS,Id:0,EK:function(Ab,AF){var Hs=C.
Row.EK.call(this,Ab,AF);if(Hs&&!!AF){this.OnSetId(AF.CE(Ab,0));this.ADa(AF.Va(Ab
,1));}return Hs;},Cr:function(AF){var Hs=C.Row.Cr.call(this,AF);if(Hs&&!!AF){var
Jg=AF.Op();if(Jg<=0)A.aa8("%s",AbR);else{if(this.Amb())this.CH=AF.XS();AF.G_(this.
CH,0,this.Id);AF.YT(this.CH,1,this.GroupName);AF.Or(Jg);}}return Hs;},Gd:function(
){C.Row.Gd.call(this);this.OnSetId(-1);},G9:function(){C.Row.G9.call(this);this.
OnSetId(0);this.ADa(A.jm);},OnSetId:function(E){if(this.Id===E)return;this.Id=E;
A.aat([this,this.Qv,this.OnSetId],0);},ADa:function(E){if(this.GroupName===E)return;
this.GroupName=E;A.aat([this,this.Bhn,this.ADa],0);},Qv:function(){return this.Id;
},Bhn:function(){return this.GroupName;},_Init:function(aArg){C.Row._Init.call(this
,aArg);this.__proto__=C.AnimalGroup;this.TableId=3;},_className:"Device::AnimalGroup"
};C.PopupIdToString={BZ:function(A6){var AcD=A6;var Az=A.jm;var AH1;AH1=A.z2(A.abg.
BmE)+OQ;switch(AcD){case 0:Az=A.z2(A.abg.Unknown);break;case 1:Az=A.z2(A.abg.SevereError
);break;case 58:Az=A.z2(A.abg.BeH);break;case 2:Az=A.z2(A.abg.BeF);break;case 3:
Az=A.z2(A.abg.Bmq);break;case 77:Az=A._GetAutoObject(C.Helper).BeV();break;case 78:
Az=A._GetAutoObject(C.Helper).BeT();break;case 79:Az=A._GetAutoObject(C.Helper).
BeU();break;case 9:Az=A.z2(A.abg.BmO);break;case 5:Az=A.z2(A.abg.SuccessDataSync
);break;case 8:Az=A.z2(A.abg.SuccessResetFactorySettings);break;case 34:Az=A.z2(
A.abg.SuccessResetAnimalData);break;case 10:Az=A._GetAutoObject(C.Device).AA_();
break;case 82:Az=A.z2(A.abg.BeJ);break;case 83:Az=A.z2(A.abg.BeK);break;case 80:
Az=A.z2(A.abg.BlC);break;case 81:Az=A.z2(A.abg.SuccessRestoreBackup);break;case 92:
Az=A.z2(A.abg.BdH);break;case 93:Az=A.z2(A.abg.BkO);break;case 4:Az=A.z2(A.abg.WarningDataSync
);break;case 7:Az=A.z2(A.abg.BmL);break;case 33:Az=A.z2(A.abg.WarningResetAnimalData
);break;case 6:Az=A.z2(A.abg.WarningRestart);break;case 27:Az=A.z2(A.abg.WarningNoActionDefined
);break;case 64:Az=A.z2(A.abg.WarningActionNotApplicable);break;case 28:Az=A.z2(
A.abg.WarningNoMenuItemVisible);break;case 29:Az=A.z2(A.abg.WarningEnterPresentationMode
);break;case 30:Az=A.z2(A.abg.WarningNoAnimalsRegistered);break;case 41:Az=((AH1+
A.z2(A.abg.APr))+OQ)+A.z2(A.abg.Bgh);break;case 50:Az=((AH1+A.z2(A.abg.APr))+OQ)+
A.z2(A.abg.Bgj);break;case 51:Az=((AH1+A.z2(A.abg.APr))+OQ)+A.z2(A.abg.Bgi);break;
case 42:Az=A.z2(A.abg.BmN);break;case 91:Az=A.z2(A.abg.WarningScanOverwriteNaisId
);break;case 45:Az=A.z2(A.abg.BmI);break;case 46:Az=A.z2(A.abg.WarningNoValidCountryCode
);break;case 57:Az=A.z2(A.abg.WarningOutdatedAnimalWeight);break;case 52:Az=A.z2(
A.abg.WarningOutdatedAnimalWeights);break;case 53:Az=A.z2(A.abg.WarningWeightEvaluationSingular
);break;case 56:Az=A.z2(A.abg.WarningWeightEvaluationPlural);break;case 11:Az=A.
z2(A.abg.ScanError);break;case 12:Az=A.z2(A.abg.ScanNotFound);break;case 13:Az=A.
z2(A.abg.Bds);break;case 36:Az=A.z2(A.abg.Bmc);break;case 14:Az=A.z2(A.abg.AnimalNotFound
);break;case 15:Az=A.z2(A.abg.SuccessUnregister);break;case 35:Az=A.z2(A.abg.SuccessUnregisterPerished
);break;case 26:Az=A.z2(A.abg.SuccessCreationNewAnimal);break;case 23:Az=A.z2(A.
abg.SuccessCreationNewAnimals);break;case 24:Az=A.z2(A.abg.Bd7);break;case 49:Az=
A.z2(A.abg.EvaluationInProgress);break;case 16:Az=A.z2(A.abg.Beb);break;case 17:
Az=A.z2(A.abg.Blv);break;case 18:Az=A.z2(A.abg.BlH);break;case 19:Az=A.z2(A.abg.
Blw);break;case 20:Az=A.z2(A.abg.BlI);break;case 54:Az=A.z2(A.abg.BlD);break;case
55:Az=A.z2(A.abg.BlG);break;case 21:Az=A.z2(A.abg.A1$);break;case 48:Az=(A.z2(A.
abg.A1$)+OQ)+A.z2(A.abg.A2X);break;case 22:Az=A.z2(A.abg.Bgo);break;case 63:Az=A.
z2(A.abg.BmJ);break;case 85:Az=A.z2(A.abg.BmK);break;case 43:Az=A.z2(A.abg.Bgp);
break;case 25:Az=A.z2(A.abg.A8j);break;case 47:Az=(A.z2(A.abg.A8j)+OQ)+A.z2(A.abg.
A2X);break;case 31:{var BvH=(((((((((((((((((((A.z2(A.abg.BdY)+Awy)+A.z2(A.abg.ALn
))+A.z2(A.abg.Colon))+N2)+A.z2(A.abg.Bd0))+OQ)+A.z2(A.abg.AMl))+A.z2(A.abg.Colon
))+N2)+A.z2(A.abg.BeP))+OQ)+A.z2(A.abg.ARL))+A.z2(A.abg.Colon))+N2)+A.z2(A.abg.BkF
))+OQ)+A.z2(A.abg.ARK))+A.z2(A.abg.Colon))+N2)+A.z2(A.abg.BkE);Az=BvH;}break;case
32:Az=A.z2(A.abg.Bmd);break;case 69:Az=A.z2(A.abg.Bgw);break;case 44:Az=A.z2(A.abg.
BmM);break;case 37:Az=A.z2(A.abg.WarningResetWeightSettings);break;case 38:Az=A.
z2(A.abg.WarningResetTempThresholds);break;case 39:Az=A.z2(A.abg.Bkv);break;case
76:Az=(A.z2(A.abg.A2y)+OQ)+A.z2(A.abg.ARN);break;case 40:Az=A.z2(A.abg.BlE);break;
case 75:Az=A.z2(A.abg.Blx);break;case 59:Az=A.z2(A.abg.QuestionAddAnotherCalfMultiples
);break;case 62:Az=A.z2(A.abg.Bly);break;case 97:Az=A.z2(A.abg.Blz);break;case 60:
Az=A.z2(A.abg.BlA);break;case 99:Az=A.z2(A.abg.BlB);break;case 61:Az=A.z2(A.abg.
BlJ);break;case 65:Az=A.z2(A.abg.SuccessClearAnimalLoss);break;case 66:Az=A.z2(A.
abg.WarningNoActionsForAnimalLoss);break;case 67:Az=A.z2(A.abg.SuccessLinkTransponder
);break;case 86:Az=A.z2(A.abg.SuccessUnlinkTransponder);break;case 68:Az=A.z2(A.
abg.BlF);break;case 70:Az=A.z2(A.abg.BeL);break;case 71:Az=A.z2(A.abg.BlM);break;
case 72:Az=A.z2(A.abg.BlN);break;case 98:Az=A.z2(A.abg.BeN);break;case 101:Az=A.
z2(A.abg.BlO);break;case 100:Az=A.z2(A.abg.BlP);break;case 88:Az=A.z2(A.abg.BeM);
break;case 89:Az=A.z2(A.abg.BlK);break;case 90:Az=A.z2(A.abg.BlL);break;case 73:
Az=A.z2(A.abg.WarningNoPremisesID);break;case 74:Az=A.z2(A.abg.WarningNoFlashDrivePresent
);break;case 95:Az=A.z2(A.abg.WarningNoBackupPathPresent);break;case 94:Az=A.z2(
A.abg.WarningNoBackupFilePresent);break;case 84:Az=A.z2(A.abg.Be2);break;case 87:
Az=A.z2(A.abg.BmQ);break;case 96:Az=A.z2(A.abg.BmH);break;case 103:Az=A.z2(A.abg.
WarningParsedDateInFutureInvalid);break;case 102:Az=A.z2(A.abg.WarningParsingDateFailed
);break;case 104:Az=A.z2(A.abg.WarningParsingNaisIdFailed);break;default:throw new
Error(AwH+AcD.toFixed());}return Az;},Lh:function(A6){var AcD=A6;var Az=A.jm;switch(
AcD){case 0:Az=AF4;break;case 1:Az=AF5;break;case 58:Az=AF6;break;case 2:Az=AF7;
break;case 3:Az=AwI;break;case 77:Az=AF8;break;case 78:Az=AVi;break;case 79:Az=AVj;
break;case 9:Az=AVk;break;case 5:Az=AF9;break;case 8:Az=AVl;break;case 34:Az=AVm;
break;case 80:Az=AVn;break;case 81:Az=AVo;break;case 92:Az=AVp;break;case 93:Az=
AVq;break;case 82:Az=AVr;break;case 83:Az=AVs;break;case 10:Az=AwJ;break;case 4:
Az=AVt;break;case 7:Az=AVu;break;case 33:Az=AwK;break;case 6:Az=ArL;break;case 27:
Az=Zp;break;case 64:Az=ArM;break;case 28:Az=AVv;break;case 29:Az=AVw;break;case 30:
Az=AVx;break;case 41:Az=AF_;break;case 50:Az=AVy;break;case 51:Az=AF$;break;case
42:Az=AVz;break;case 91:Az=AVA;break;case 45:Az=AVB;break;case 46:Az=ArN;break;case
57:Az=AVC;break;case 52:Az=AVD;break;case 53:Az=AGa;break;case 56:Az=AVE;break;case
11:Az=AVF;break;case 12:Az=AVG;break;case 13:Az=AVH;break;case 36:Az=AbT;break;case
14:Az=AVI;break;case 15:Az=AVJ;break;case 35:Az=AVK;break;case 26:Az=AVL;break;case
23:Az=AGb;break;case 24:Az=AVM;break;case 49:Az=AVN;break;case 16:Az=AVO;break;case
17:Az=AVP;break;case 18:Az=AVQ;break;case 19:Az=AVR;break;case 20:Az=AGc;break;case
54:Az=AVS;break;case 55:Az=AVT;break;case 21:Az=AVU;break;case 48:Az=AGd;break;case
22:Az=AGe;break;case 63:Az=AVV;break;case 43:Az=AVW;break;case 85:Az=AVX;break;case
25:Az=AVY;break;case 47:Az=QX;break;case 31:Az=ArO;break;case 32:Az=AGf;break;case
69:Az=AGg;break;case 44:Az=Ano;break;case 37:Az=Anp;break;case 38:Az=AwL;break;case
39:Az=AVZ;break;case 76:Az=AGh;break;case 40:Az=AV0;break;case 75:Az=AV1;break;case
59:Az=AV2;break;case 62:Az=AV3;break;case 97:Az=AV4;break;case 60:Az=AV5;break;case
99:Az=AV6;break;case 65:Az=AV7;break;case 61:Az=AV8;break;case 66:Az=AV9;break;case
67:Az=AV_;break;case 86:Az=AV$;break;case 68:Az=AWa;break;case 70:Az=AWb;break;case
71:Az=AWc;break;case 72:Az=AWd;break;case 98:Az=AWe;break;case 101:Az=Anq;break;
case 100:Az=AGi;break;case 88:Az=AWf;break;case 89:Az=AGj;break;case 90:Az=AGk;break;
case 73:Az=Zq;break;case 74:Az=AGl;break;case 95:Az=AWg;break;case 94:Az=AGm;break;
case 84:Az=AWh;break;case 87:Az=AwM;break;case 96:Az=AWi;break;case 103:Az=AWj;break;
case 102:Az=AwN;break;case 104:Az=AWk;break;default:throw new Error(AwH+AcD.toFixed(
));}return Az;},_Init:function(aArg){C.EnumToString._Init.call(this,aArg);this.__proto__=
C.PopupIdToString;},_className:"Device::PopupIdToString"};C.PopupParamSeparator=
";";C.RatingMode={Basic:0,Extended:1,LAST:2};C.TransponderType={UNDEFINED:0,AnimalId:
1,FarmId:2,GroupId:3,PersonId:4,LAST:5};C.TransponderProtocol={UNDEFINED:0,FDX:1
,HDX:2,HDX_URBAN:3,LAST:4};C.TransponderTypeToString={BZ:function(A6){var BcS=A6;
var type=A.jm;switch(BcS){case 1:type=AWl;break;case 2:type=AWm;break;case 3:type=
AGn;break;case 4:type=Anr;break;case 0:type=Awz;break;default:throw new Error(AGo+
BcS.toFixed());}return type;},_Init:function(aArg){C.EnumToString._Init.call(this
,aArg);this.__proto__=C.TransponderTypeToString;},_className:"Device::TransponderTypeToString"
};C.TransponderProtocolToString={BZ:function(A6){var BcR=A6;var Ay3=A.jm;switch(
BcR){case 1:Ay3=AWn;break;case 2:Ay3=AGp;break;case 3:Ay3=AGq;break;case 0:Ay3=Awz;
break;default:throw new Error(Ako+BcR.toFixed());}return Ay3;},_Init:function(aArg
){C.EnumToString._Init.call(this,aArg);this.__proto__=C.TransponderProtocolToString;
},_className:"Device::TransponderProtocolToString"};C.Transponder={Id:0,TransponderProtocol:
0,TransponderType:0,ARi:function(E){if(this.TransponderType===E)return;this.TransponderType=
E;A.aat([this,this.BhY,this.ARi],0);},ARh:function(E){if(this.TransponderProtocol===
E)return;this.TransponderProtocol=E;A.aat([this,this.BhX,this.ARh],0);},OnSetId:
function(E){if(this.Id===E)return;this.Id=E;A.aat([this,this.Qv,this.OnSetId],0);
},AMK:function(){return A._GetAutoObject(C.Converter).Bmb(this.Id);},Be$:function(
){return A._GetAutoObject(C.Converter).Av9(this.Id);},BhY:function(){return this.
TransponderType;},BhX:function(){return this.TransponderProtocol;},Qv:function(){
return this.Id;},_Init:function(aArg){this.__proto__=C.Transponder;A.hJ++;},_Done:
function(){this.__proto__=null;A.hJ--;},_ReInit:function(){},_Mark:function(D){var
B;if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:
null,_className:"Device::Transponder"};C.RatingModeToString={BZ:function(A6){var
Uu=A6;var Nm=A.jm;switch(Uu){case 0:Nm=A.z2(A.abg.Basic);break;case 1:Nm=A.z2(A.
abg.Extended);break;default:throw new Error(AWo+Uu.toFixed());}return Nm;},_Init:
function(aArg){C.EnumToString._Init.call(this,aArg);this.__proto__=C.RatingModeToString;
},_className:"Device::RatingModeToString"};C.TableRowsCount={_Init:function(aArg
){this.__proto__=C.TableRowsCount;A.hJ++;},_Done:function(){this.__proto__=null;
A.hJ--;},_ReInit:function(){},_Mark:function(D){var B;if((B=this.I)&&(B._cycle!=
D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:"Device::TableRowsCount"
};C.MassUnit={Kilogramm:0,Pound:1,LAST:2};C.MassUnitToString={BZ:function(A6){var
Bas=A6;var Ao0=A.jm;switch(Bas){case 0:Ao0=A.z2(A.abg.Bf0);break;case 1:Ao0=A.z2(
A.abg.Pound);break;default:throw new Error(Ans+Bas.toFixed());}return Ao0;},_Init:
function(aArg){C.EnumToString._Init.call(this,aArg);this.__proto__=C.MassUnitToString;
},_className:"Device::MassUnitToString"};C.MinWeightGain=20;C.MaxWeightGain=2000;
C.WeightGainStep=10;C.Int32ArrayWrapper={Mx:10,Array:A.aan(10,0,null),YH:function(
E){if(this.Mx===E)return;if(E>10)throw new Error(AWp);this.Mx=E;},Set:function(aIndex
,AI){if((aIndex<0)||(aIndex>=this.Mx))throw new Error(AwO);this.Array.Set(aIndex
,AI);},Get:function(aIndex){if((aIndex<0)||(aIndex>=this.Mx))throw new Error(AwO
);return this.Array.Get(aIndex);},Al2:function(){var HR=0;var P;for(P=0;P<this.Mx;
P=P+1)HR=HR+this.Get(P);return HR;},toString:function(){var AZ_=this.Array.Get(0
).toFixed();var P;for(P=1;P<this.Mx;P=P+1)AZ_=(AZ_+OP)+this.Array.Get(P).toFixed(
);return AZ_;},EK:function(aString){var IM=aString.indexOf(String.fromCharCode(0x2C
),0);var AYZ=A.jm;var P=0;while(P<10){if(aString===A.jm)this.Array.Set(P,0);else{
if(IM===-1){AYZ=aString;aString=A.jm;}else{AYZ=A.aaX(aString,IM);aString=A.aa3(aString
,0,IM+1);}this.Array.Set(P,A.vQ(AYZ,0,10));IM=aString.indexOf(String.fromCharCode(
0x2C),0);}P=P+1;}if(aString!==A.jm)A.aa8("%s",AGr);},Cr:function(){},G9:function(
){var P;for(P=0;P<this.Mx;P=P+1)this.Set(P,0);},At0:function(A1){var P=0;while(P<
this.Mx){if(this.Array.Get(P)===A1)return P;P=P+1;}return-1;},Hh:function(){var P=
0;var max=-1;while(P<this.Mx){if(this.Array.Get(P)>max)max=this.Array.Get(P);P=P+
1;}return max;},_Init:function(aArg){(this.Array=[]).__proto__=C.Int32ArrayWrapper.
Array;this.__proto__=C.Int32ArrayWrapper;A.hJ++;},_Done:function(){this.__proto__=
null;A.hJ--;},_ReInit:function(){},_Mark:function(D){var B;if((B=this.I)&&(B._cycle
!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:"Device::Int32ArrayWrapper"
};C.ActionToString={BZ:function(A6){var AxT=A6;var EL=A.jm;switch(AxT){case 4:EL=
A.z2(A.abg.Alarm);break;case 256:EL=A.z2(A.abg.Weighing);break;case 128:EL=A.z2(
A.abg.A3v);break;case 16:EL=A.z2(A.abg.AKg);break;case 1:EL=A.z2(A.abg.Temperature
);break;case 32:EL=A.z2(A.abg.AnimalLoss);break;case 2:EL=A.z2(A.abg.Rating);break;
case 8:EL=A.z2(A.abg.AqN);break;case 64:EL=A.z2(A.abg.Unregister);break;case 512:
EL=A.z2(A.abg.APL);break;case 1024:EL=A.z2(A.abg.LinkTransponder);break;case 262144:
EL=A.z2(A.abg.UnlinkTransponder);break;case 2048:EL=A.z2(A.abg.O7);break;case 4096:
EL=A.z2(A.abg.Calving);break;case 8192:EL=A.z2(A.abg.DryOff);break;case 16384:EL=
A.z2(A.abg.A4D);break;case 32768:EL=A.z2(A.abg.AAh);break;case 524288:EL=A.z2(A.
abg.AAj);break;case 65536:EL=A.z2(A.abg.Delete);break;case 131072:EL=A.z2(A.abg.
A4E);break;case 0:EL=A.z2(A.abg.A41);break;default:throw new Error(AGs+AxT.toFixed(
));}return EL;},Lh:function(A6){var AxT=A6;var EL=A.jm;switch(AxT){case 4:EL=A.z2(
A.abg.Alarm);break;case 256:EL=A.z2(A.abg.Weighing);break;case 128:EL=A.z2(A.abg.
A3v);break;case 16:EL=A.z2(A.abg.AKg);break;case 1:EL=A.z2(A.abg.Temperature);break;
case 32:EL=A.z2(A.abg.AnimalLoss);break;case 2:EL=A.z2(A.abg.Rating);break;case 8:
EL=A.z2(A.abg.AqN);break;case 64:EL=A.z2(A.abg.Unregister);break;case 512:EL=A.z2(
A.abg.APL);break;case 1024:EL=A.z2(A.abg.LinkTransponder);break;case 262144:EL=A.
z2(A.abg.UnlinkTransponder);break;case 2048:EL=A.z2(A.abg.O7);break;case 4096:EL=
A.z2(A.abg.Calving);break;case 8192:EL=A.z2(A.abg.DryOff);break;case 16384:EL=A.
z2(A.abg.A4C);break;case 32768:EL=A.z2(A.abg.AAh);break;case 524288:EL=A.z2(A.abg.
AAj);break;case 65536:EL=A.z2(A.abg.Delete);break;case 131072:EL=A.z2(A.abg.A4C);
break;case 0:EL=A.z2(A.abg.A41);break;default:throw new Error(AGs+AxT.toFixed());
}return EL;},_Init:function(aArg){C.EnumToString._Init.call(this,aArg);this.__proto__=
C.ActionToString;},_className:"Device::ActionToString"};C.ACTIONS_COUNT=19;C.PopupTimeout=
2000;C.ITable={Filter:null,Id:2,CE:function(Ab,AX){return 0;},Va:function(Ab,AX){
return A.jm;},Aju:function(H){A.vv(this,0);A.ow([this,this.Eo],this);},HV:function(
Ab,AX){return false;},Hy:function(Ab,AX){return this.RQ(Ab,AX);},OnSetId:function(
E){if(this.Id===E)return;this.Id=E;},Cj:function(){return 0;},Bk:function(E){if(
this.Filter===E)return;this.Filter=E;A.aat([this,this.Fy,this.FC],0);},FC:function(
An){this.Bk(An);},IW:function(Ab,AX){var Bxb=this.Vb(Ab,AX);return A._GetAutoObject(
C.Converter).A8m(Bxb);},Vb:function(Ab,AX){return 0;},RQ:function(Ab,AX){return 0;
},A33:function(Ab,AX){return this.CE(Ab,AX);},Op:function(){var Jg=0;var BxV=this.
Id;return Jg;},Or:function(AnJ){var Hs=0;var BxV=this.Id;return Hs===1;},XS:function(
){return-1;},YV:function(Ab,AX,CX){return false;},G_:function(Ab,AX,CX){return false;
},YU:function(Ab,AX,CX){return false;},M_:function(Ab,AX,CX){return false;},YT:function(
Ab,AX,CX){return false;},Abu:function(Ab,AX,CX){return this.YU(Ab,AX,CX);},AjZ:function(
Ab,AX,CX){var Bxc=A._GetAutoObject(C.Converter).Ac1(CX);return this.YV(Ab,AX,Bxc
);},A7Z:function(Ab,AX,CX){return this.G_(Ab,AX,CX);},AMD:function(Ab,AX){return this.
CE(Ab,AX);},Be9:function(Ab,AX){return this.CE(Ab,AX);},Bk7:function(Ab,AX,CX){return this.
G_(Ab,AX,CX);},Bk3:function(Ab,AX,CX){return this.G_(Ab,AX,CX);},K4:function(aColumn
,A1){return-1;},Al0:function(Ab,AX){return this.CE(Ab,AX);},Bk1:function(Ab,AX,CX
){return this.G_(Ab,AX,CX);},AA8:function(Ab,AX){return this.CE(Ab,AX);},AR7:function(
Ab,AX,N5){return this.G_(Ab,AX,N5);},Eo:function(H){this.Bun();},Bun:function(){
return-1;},LD:function(Ab,AX){return 0;},TO:function(Ab,AX,CX){return false;},AiY:
function(aColumn,A1){return-1;},G9:function(){return false;},Be_:function(Ab,AX){
var Bxd=this.CE(Ab,AX);return A._GetAutoObject(C.Converter).Bfy(Bxd);},Bfb:function(
Ab,AX){return this.CE(Ab,AX);},AMM:function(Ab,AX){return this.CE(Ab,AX);},Bk5:function(
Ab,AX,CX){var Bxe=A._GetAutoObject(C.Converter).A2F(CX);return this.G_(Ab,AX,Bxe
);},Bk6:function(Ab,AX,CX){return this.G_(Ab,AX,CX);},Blb:function(Ab,AX,CX){return this.
G_(Ab,AX,CX);},AiV:function(aColumn,A1){return false;},Af5:function(aColumn,A1){
return false;},Bfl:function(Ab,AX){return this.CE(Ab,AX);},Bk$:function(Ab,AX,CX
){return this.G_(Ab,AX,CX);},K8:function(){return this.Qb()>=this.Hz();},Hz:function(
){return 0;},Aay:function(){return-1;},Qb:function(){return 0;},Fy:function(){return this.
Filter;},_Init:function(aArg){this.__proto__=C.ITable;A.hJ++;},_Done:function(){
this.__proto__=null;A.hJ--;},_ReInit:function(){},_Mark:function(D){var B;if((B=
this.Filter)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.I)&&(B._cycle!=D))B._Mark(
B._cycle=D);},I:null,_cycle:0,_observers:null,_className:"Device::ITable"};C.MaxAutoActionsCount=
4;C.WeightRecordingMode={Automatic:0,Manual:1,LAST:2};C.WeightRecordingModeToString={
BZ:function(A6){var Uu=A6;var Nm=A.jm;switch(Uu){case 0:Nm=A.z2(A.abg.Automatic);
break;case 1:Nm=A.z2(A.abg.Manual);break;default:throw new Error(AWq+Uu.toFixed(
));}return Nm;},_Init:function(aArg){C.EnumToString._Init.call(this,aArg);this.__proto__=
C.WeightRecordingModeToString;},_className:"Device::WeightRecordingModeToString"
};C.BooleanToAutoOnOff={BZ:function(A6){switch(A6){case 0:return A.z2(A.abg.Off);
case 1:return A.z2(A.abg.Z9);default:return Akn+A6.toFixed();}},_Init:function(aArg
){C.EnumToString._Init.call(this,aArg);this.__proto__=C.BooleanToAutoOnOff;},_className:
"Device::BooleanToAutoOnOff"};C.WeightStep=100;C.WeightRecordingScope={CurrentWeightOnly:
0,BirthWeightOnly:1,BirthAndCurrentWeight:2,NoWeightRecording:3,LAST:4};C.WeightRecordingScopeToString={
BZ:function(A6){var Bcj=A6;var Aze=A.jm;switch(Bcj){case 0:Aze=A.z2(A.abg.Bd9);break;
case 1:Aze=A.z2(A.abg.BdN);break;case 2:Aze=A.z2(A.abg.BdK);break;case 3:Aze=A.z2(
A.abg.BgM);break;default:throw new Error(AGt+Bcj.toFixed());}return Aze;},_Init:
function(aArg){C.EnumToString._Init.call(this,aArg);this.__proto__=C.WeightRecordingScopeToString;
},_className:"Device::WeightRecordingScopeToString"};C.BodyTemperature={Undertemperature:
0,Normal:1,Elevated:2,Fever:3,LAST:4};C.JD={AcU:0,Temperature:1,Rating:2,Ag9:3,Byr:
4,By7:5,BBK:6,BzI:7,BAv:8,Bzg:9,BAu:10,BAU:11,LAST:12};C.AnimalListContentToString={
BZ:function(A6){var A_W=A6;var Wv=A.jm;switch(A_W){case 0:Wv=AWr;break;case 2:Wv=
AWs;break;case 1:Wv=AWt;break;case 3:Wv=AWu;break;case 4:Wv=AWv;break;case 5:Wv=
AWw;break;case 6:Wv=AWx;break;case 7:Wv=AWy;break;case 8:Wv=AWz;break;case 9:Wv=
AWA;break;case 10:Wv=AWB;break;case 11:Wv=AWC;break;default:throw new Error(AWD+
A_W.toFixed());}return Wv;},_Init:function(aArg){C.EnumToString._Init.call(this,
aArg);this.__proto__=C.AnimalListContentToString;},_className:"Device::AnimalListContentToString"
};C.GenderFilterCriterion={A4:0,Adi:function(){var Av=A._NewObject(C.GenderFilterCriterion
,0);Av.Gs(this);return Av;},Gs:function(AL){C.FilterCriterion.Gs.call(this,AL);var
Av=(C.GenderFilterCriterion.isPrototypeOf(AL)?AL:null);if(!!Av)this.A4=Av.A4;},_Init:
function(aArg){C.FilterCriterion._Init.call(this,aArg);this.__proto__=C.GenderFilterCriterion;
},_className:"Device::GenderFilterCriterion"};C.AnimalTypeFilterCriterion={A4:0,
Adi:function(){var Av=A._NewObject(C.AnimalTypeFilterCriterion,0);Av.Gs(this);return Av;
},Gs:function(AL){C.FilterCriterion.Gs.call(this,AL);var Av=(C.AnimalTypeFilterCriterion.
isPrototypeOf(AL)?AL:null);if(!!Av)this.A4=Av.A4;},Initialize:function(AX,EE,A1,
Sz){this.ET=AX;this.Operator=EE;this.A4=A1;this.AaQ=Sz;return this;},_Init:function(
aArg){C.FilterCriterion._Init.call(this,aArg);this.__proto__=C.AnimalTypeFilterCriterion;
},_className:"Device::AnimalTypeFilterCriterion"};C.ByD={Ain:0,ByC:1,BAg:2,A7H:3
,A2O:4,BBt:5,By6:6,BBs:7,LinkTransponder:8,O7:9,Weighing:10,Calving:11,LinkNaisId:
12,BAT:13,ClearBirthNoticePending:14,DeleteAnimal:15,ScanNaisId:16,Edit:17,ClearPurchaseNoticePending:
18};C.AutoRegistrationModeToString={BZ:function(A6){var Uu=A6;var Nm=A.jm;switch(
Uu){case 0:Nm=A.z2(A.abg.Bd1);break;case 1:Nm=A.z2(A.abg.BfC);break;case 2:Nm=A.
z2(A.abg.Off);break;default:throw new Error(AGu+Uu.toFixed());}return Nm;},_Init:
function(aArg){C.EnumToString._Init.call(this,aArg);this.__proto__=C.AutoRegistrationModeToString;
},_className:"Device::AutoRegistrationModeToString"};C.AutoRegistrationMode={UserConfirmed:
0,Background:1,Off:2,LAST:3};C.AssessmentFilterCriterion={A4:0,Adi:function(){var
Av=A._NewObject(C.AssessmentFilterCriterion,0);Av.Gs(this);return Av;},Gs:function(
AL){C.FilterCriterion.Gs.call(this,AL);var Av=(C.AssessmentFilterCriterion.isPrototypeOf(
AL)?AL:null);if(!!Av)this.A4=Av.A4;},Initialize:function(AX,EE,A1,Sz){this.ET=AX;
this.Operator=EE;this.A4=A1;this.AaQ=Sz;return this;},_Init:function(aArg){C.FilterCriterion.
_Init.call(this,aArg);this.__proto__=C.AssessmentFilterCriterion;},_className:"Device::AssessmentFilterCriterion"
};C.D3={AcU:0,Temperature:1,Ag9:2,Rating:3,LAST:4};C.FactoryResetScope={DeviceAndAnimalData:
0,AnimalDataOnly:1,LAST:2};C.FactoryResetScopeToString={BZ:function(A6){switch(A6
){case 0:return A.z2(A.abg.Bdh);case 1:return A.z2(A.abg.AnimalDataOnly);default:
return Zr+A6.toFixed();}},_Init:function(aArg){C.EnumToString._Init.call(this,aArg
);this.__proto__=C.FactoryResetScopeToString;},_className:"Device::FactoryResetScopeToString"
};C.ASF={Cr:function(){A._GetAutoObject(C.Device).AqG(this.toString());},Init:function(
aArg){var B;A.za([this,this.Bbw],[B=A._GetAutoObject(C.Device),B.A53,B.A9U],0);this.
Bbw(this);},Bbw:function(H){this.EK(A._GetAutoObject(C.Device).AEY);A.vv(this,0);
},_Init:function(aArg){C.Int32ArrayWrapper._Init.call(this,aArg);this.__proto__=
C.ASF;this.YH(3);this.Init(aArg);},_className:"Device::TemperaturesLowClass"};C.
ASE={Init:function(aArg){var B;A.za([this,this.Bbu],[B=A._GetAutoObject(C.Device
),B.A52,B.A9T],0);this.Bbu(this);},Cr:function(){A._GetAutoObject(C.Device).AqF(
this.toString());},Bbu:function(H){this.EK(A._GetAutoObject(C.Device).AEX);A.vv(
this,0);},_Init:function(aArg){C.Int32ArrayWrapper._Init.call(this,aArg);this.__proto__=
C.ASE;this.YH(3);this.Init(aArg);},_className:"Device::TemperaturesHighClass"};C.
AKz={Init:function(aArg){var B;A.za([this,this.Ba0],[B=A._GetAutoObject(C.Device
),B.A5s,B.A9C],0);this.Ba0(this);},Ba0:function(H){this.EK(A._GetAutoObject(C.Device
).AzR);A.vv(this,0);},_Init:function(aArg){C.Int32ArrayWrapper._Init.call(this,aArg
);this.__proto__=C.AKz;this.YH(3);this.Init(aArg);},_className:"Device::AnimalTypesClass"
};C.UInt64FilterCriterion={A4:0,Adi:function(){var Av=A._NewObject(C.UInt64FilterCriterion
,0);Av.Gs(this);return Av;},Gs:function(AL){C.FilterCriterion.Gs.call(this,AL);var
Av=(C.UInt64FilterCriterion.isPrototypeOf(AL)?AL:null);if(!!Av)this.A4=Av.A4;},Initialize:
function(AX,EE,A1,Sz){this.ET=AX;this.Operator=EE;this.A4=A1;this.AaQ=Sz;return this;
},_Init:function(aArg){C.FilterCriterion._Init.call(this,aArg);this.__proto__=C.
UInt64FilterCriterion;},_className:"Device::UInt64FilterCriterion"};C.BooleanToAssignedUnassignedString={
BZ:function(A6){switch(A6){case 0:return A.z2(A.abg.Ajt);case 1:return A.z2(A.abg.
Bdi);default:return Akn+A6.toFixed();}},_Init:function(aArg){C.EnumToString._Init.
call(this,aArg);this.__proto__=C.BooleanToAssignedUnassignedString;},_className:
"Device::BooleanToAssignedUnassignedString"};C.De={UNDEFINED:0,AT:1,BA:2,BE:3,ByI:
4,ByX:5,ByY:6,ByZ:7,By0:8,By1:9,By$:10,Bza:11,Bzh:12,Bzi:13,Bzx:14,FR:15,GR:16,BzK:
17,BzL:18,BzV:19,BzW:20,Bz1:21,Bz2:22,Bz3:23,Bz4:24,Bz_:25,BAm:26,BAn:27,BAB:28,
BAC:29,BAR:30,BAS:31,BA8:32,BA9:33,BA_:34,BBm:35,BBn:36,BBD:37,A8n:38,BBE:39,LAST:
40};C.CountryToString={BZ:function(A6){var N8=A6;var Fq=A.jm;switch(N8){case 1:Fq=
A.z2(A.abn.Bdw);break;case 2:Fq=A.z2(A.abn.BdO);break;case 3:Fq=A.z2(A.abn.BdJ);
break;case 4:Fq=A.abn.BdQ;break;case 5:Fq=A.z2(A.abn.BdS);break;case 6:Fq=A.z2(A.
abn.BlT);break;case 7:Fq=A.z2(A.abn.BdV);break;case 8:Fq=A.z2(A.abn.Bd_);break;case
9:Fq=A.z2(A.abn.Bd$);break;case 10:Fq=A.z2(A.abn.Be3);break;case 11:Fq=A.z2(A.abn.
Beg);break;case 12:Fq=A.z2(A.abn.BeI);break;case 13:Fq=A.z2(A.abn.Blo);break;case
14:Fq=A.z2(A.abn.BeR);break;case 15:Fq=A.z2(A.abn.BeZ);break;case 16:Fq=A.z2(A.abn.
Bft);break;case 17:Fq=A.z2(A.abn.Bd8);break;case 18:Fq=A.z2(A.abn.Bfz);break;case
19:Fq=A.z2(A.abn.BfJ);break;case 20:Fq=A.z2(A.abn.BfV);break;case 21:Fq=A.z2(A.abn.
BfX);break;case 22:Fq=A.z2(A.abn.Bf$);break;case 23:Fq=A.z2(A.abn.Bgd);break;case
24:Fq=A.z2(A.abn.Bf9);break;case 25:Fq=A.abn.Bgf;break;case 26:Fq=A.z2(A.abn.Bgx
);break;case 27:Fq=A.z2(A.abn.BgN);break;case 28:Fq=A.z2(A.abn.Bko);break;case 29:
Fq=A.z2(A.abn.Bkp);break;case 30:Fq=A.z2(A.abn.BkP);break;case 31:Fq=A.z2(A.abn.
BkR);break;case 32:Fq=A.z2(A.abn.BlS);break;case 33:Fq=A.z2(A.abn.Bln);break;case
34:Fq=A.z2(A.abn.Blm);break;case 35:Fq=A.z2(A.abn.Bmg);break;case 36:Fq=A.z2(A.abn.
Bl2);break;case 37:Fq=A.z2(A.abn.Bmk);break;case 38:Fq=A.z2(A.abn.A8n);break;case
39:Fq=A.z2(A.abn.Bmj);break;case 0:Fq=Ant;break;default:throw new Error(Awq+N8.toFixed(
));}return Fq;},Lh:function(A6){var N8=A6;var BN=A.jm;switch(N8){case 1:BN=Ss;break;
case 2:BN=Zc;break;case 3:BN=T9;break;case 4:BN=Wa;break;case 5:BN=I$;break;case
6:BN=Wh;break;case 7:BN=T_;break;case 8:BN=Ze;break;case 9:BN=T$;break;case 10:BN=
QT;break;case 11:BN=Zf;break;case 12:BN=Zg;break;case 13:BN=Zn;break;case 14:BN=
Ua;break;case 15:BN=Wc;break;case 16:BN=Zh;break;case 17:BN=Wb;break;case 18:BN=
OO;break;case 19:BN=PK;break;case 20:BN=Ub;break;case 21:BN=Zi;break;case 22:BN=
Zj;break;case 23:BN=Zk;break;case 24:BN=Wd;break;case 25:BN=We;break;case 26:BN=
Wf;break;case 27:BN=St;break;case 28:BN=Zl;break;case 29:BN=Zm;break;case 30:BN=
AbO;break;case 31:BN=Su;break;case 32:BN=Wg;break;case 33:BN=AeN;break;case 34:BN=
AbP;break;case 35:BN=AeO;break;case 36:BN=Zd;break;case 37:BN=AeP;break;case 38:
BN=JT;break;case 39:BN=AeQ;break;case 0:BN=Ant;break;default:throw new Error(Awq+
N8.toFixed());}return BN;},_Init:function(aArg){C.EnumToString._Init.call(this,aArg
);this.__proto__=C.CountryToString;},_className:"Device::CountryToString"};C.EaseOfDelivery={
Unspecified:0,Easy:1,Moderate:2,Difficult:3,Surgery:4,LAST:5};C.EaseOfDeliveryToString={
BZ:function(A6){var A$t=A6;var Asg=A.jm;switch(A$t){case 0:Asg=A.z2(A.abg.Unspecified
);break;case 1:Asg=A.z2(A.abg.Easy);break;case 2:Asg=A.z2(A.abg.Moderate);break;
case 3:Asg=A.z2(A.abg.Difficult);break;case 4:Asg=A.z2(A.abg.Surgery);break;default:
throw new Error(AwP+A$t.toFixed());}return Asg;},_Init:function(aArg){C.EnumToString.
_Init.call(this,aArg);this.__proto__=C.EaseOfDeliveryToString;},_className:"Device::EaseOfDeliveryToString"
};C.WhereAbouts={UNB:0,EZU:1,EMA:2,VZU:3,VMA:4,VIV:5,TOT:6,V48:7,V3T:8,MGE:9,VKB:
10,LAST:11};C.WhereAboutsToString={BZ:function(A6){var Bc9=A6;var ZY=A.jm;switch(
Bc9){case 0:ZY=A.z2(A.abg.Unknown);break;case 1:ZY=A.z2(A.abg.Bms);break;case 2:
ZY=A.z2(A.abg.Bmr);break;case 3:ZY=A.z2(A.abg.BmA);break;case 4:ZY=A.z2(A.abg.Bmz
);break;case 5:ZY=A.z2(A.abg.Bmx);break;case 6:ZY=A.z2(A.abg.Bmu);break;case 7:ZY=
A.z2(A.abg.Bmw);break;case 8:ZY=A.z2(A.abg.Bmv);break;case 9:ZY=A.z2(A.abg.Bmt);
break;case 10:ZY=A.z2(A.abg.Bmy);break;default:throw new Error(AWE+Bc9.toFixed()
);}return ZY;},_Init:function(aArg){C.EnumToString._Init.call(this,aArg);this.__proto__=
C.WhereAboutsToString;},_className:"Device::WhereAboutsToString"};C.Breed={UNKNOWN:
0,SBT:1,RBT:2,JER:3,BV:4,RVA:5,RV:6,RDN:7,DSN:8,FL:9,GV:10,PIN:11,HIN:12,MW:13,VW:
14,LMP:15,DBV:16,AS:17,VR:18,CHA:19,LIM:20,WBB:21,BA:22,MA:23,SAL:24,MON:25,AU:26
,PIE:27,CHI:28,ROM:29,MAR:30,WP:31,BB:32,DA:33,AA:34,HE:35,SH:36,HLD:37,WB:38,GAL:
39,LR:40,BGA:41,LG:42,BRA:43,NOR:44,UST:45,ZEB:46,GRV:47,DEX:48,WGA:49,LH:50,SD:
51,FR:52,TUX:53,TLM:54,FLF:55,UCK:56,BLA:57,WIT:58,LAK:59,RHV:60,AT:61,GR:62,PIF:
63,PS:64,GVF:65,BVF:66,RBF:67,HWF:68,MWF:69,VWF:70,LPF:71,BRN:72,BAZ:73,AO:74,BE:
75,WL:76,BIS:77,YAK:78,SON:79,TAU:80,IND:81,TIN:82,WAG:83,XFF:84,XFM:85,XMM:86,EVO:
87,BLH:88,TLH:89,MGR:90,WSH:91,MUR:92,EBS:93,ERI:94,PAR:95,XZF:96,XZM:97,XZZ:98,
LAST:99};C.BreedToString={BZ:function(A6){var Bs=A6;var BJ=A.jm;switch(Bs){case 0:
BJ=A.z2(A.abg.Unknown);break;case 1:BJ=A.z2(A.abl.SBT);break;case 2:BJ=A.z2(A.abl.
RBT);break;case 3:BJ=A.z2(A.abl.JER);break;case 4:BJ=A.z2(A.abl.BV);break;case 5:
BJ=A.z2(A.abl.RVA);break;case 6:BJ=A.z2(A.abl.RV);break;case 7:BJ=A.z2(A.abl.RDN
);break;case 8:BJ=A.z2(A.abl.DSN);break;case 9:BJ=A.z2(A.abl.FL);break;case 10:BJ=
A.z2(A.abl.GV);break;case 11:BJ=A.z2(A.abl.PIN);break;case 12:BJ=A.z2(A.abl.HIN);
break;case 13:BJ=A.z2(A.abl.MW);break;case 14:BJ=A.z2(A.abl.VW);break;case 15:BJ=
A.z2(A.abl.LMP);break;case 16:BJ=A.z2(A.abl.DBV);break;case 17:BJ=A.z2(A.abl.AS);
break;case 18:BJ=A.z2(A.abl.VR);break;case 19:BJ=A.z2(A.abl.CHA);break;case 20:BJ=
A.z2(A.abl.LIM);break;case 21:BJ=A.z2(A.abl.WBB);break;case 22:BJ=A.z2(A.abl.BA);
break;case 23:BJ=A.z2(A.abl.MA);break;case 24:BJ=A.z2(A.abl.SAL);break;case 25:BJ=
A.z2(A.abl.MON);break;case 26:BJ=A.z2(A.abl.AU);break;case 27:BJ=A.z2(A.abl.PIE);
break;case 28:BJ=A.z2(A.abl.CHI);break;case 29:BJ=A.z2(A.abl.ROM);break;case 30:
BJ=A.z2(A.abl.MAR);break;case 31:BJ=A.z2(A.abl.WP);break;case 32:BJ=A.z2(A.abl.BB
);break;case 33:BJ=A.z2(A.abl.DA);break;case 34:BJ=A.z2(A.abl.AA);break;case 35:
BJ=A.z2(A.abl.HE);break;case 36:BJ=A.z2(A.abl.SH);break;case 37:BJ=A.z2(A.abl.HLD
);break;case 38:BJ=A.z2(A.abl.WB);break;case 39:BJ=A.z2(A.abl.GAL);break;case 40:
BJ=A.z2(A.abl.LR);break;case 41:BJ=A.z2(A.abl.BGA);break;case 42:BJ=A.z2(A.abl.LG
);break;case 43:BJ=A.z2(A.abl.BRA);break;case 44:BJ=A.z2(A.abl.NOR);break;case 45:
BJ=A.z2(A.abl.UST);break;case 46:BJ=A.z2(A.abl.ZEB);break;case 47:BJ=A.z2(A.abl.
GRV);break;case 48:BJ=A.z2(A.abl.DEX);break;case 49:BJ=A.z2(A.abl.WGA);break;case
50:BJ=A.z2(A.abl.LH);break;case 51:BJ=A.z2(A.abl.SD);break;case 52:BJ=A.z2(A.abl.
FR);break;case 53:BJ=A.z2(A.abl.TUX);break;case 54:BJ=A.z2(A.abl.TLM);break;case
55:BJ=A.z2(A.abl.FLF);break;case 56:BJ=A.z2(A.abl.UCK);break;case 57:BJ=A.z2(A.abl.
BLA);break;case 58:BJ=A.z2(A.abl.WIT);break;case 59:BJ=A.z2(A.abl.LAK);break;case
60:BJ=A.z2(A.abl.RHV);break;case 61:BJ=A.z2(A.abl.AT);break;case 62:BJ=A.z2(A.abl.
GR);break;case 63:BJ=A.z2(A.abl.PIF);break;case 64:BJ=A.z2(A.abl.PS);break;case 65:
BJ=A.z2(A.abl.GVF);break;case 66:BJ=A.z2(A.abl.BVF);break;case 67:BJ=A.z2(A.abl.
RBF);break;case 68:BJ=A.z2(A.abl.HWF);break;case 69:BJ=A.z2(A.abl.MWF);break;case
70:BJ=A.z2(A.abl.VWF);break;case 71:BJ=A.z2(A.abl.LPF);break;case 72:BJ=A.z2(A.abl.
BRN);break;case 73:BJ=A.z2(A.abl.BAZ);break;case 74:BJ=A.z2(A.abl.AO);break;case
75:BJ=A.z2(A.abl.BE);break;case 76:BJ=A.z2(A.abl.WL);break;case 77:BJ=A.z2(A.abl.
BIS);break;case 78:BJ=A.z2(A.abl.YAK);break;case 79:BJ=A.z2(A.abl.SON);break;case
80:BJ=A.z2(A.abl.TAU);break;case 81:BJ=A.z2(A.abl.IND);break;case 82:BJ=A.z2(A.abl.
TIN);break;case 83:BJ=A.z2(A.abl.WAG);break;case 84:BJ=A.z2(A.abl.XFF);break;case
85:BJ=A.z2(A.abl.XFM);break;case 86:BJ=A.z2(A.abl.XMM);break;case 87:BJ=A.z2(A.abl.
EVO);break;case 88:BJ=A.abl.BLH;break;case 89:BJ=A.abl.TLH;break;case 90:BJ=A.abl.
MGR;break;case 91:BJ=A.abl.WSH;break;case 92:BJ=A.abl.MUR;break;case 93:BJ=A.z2(
A.abl.EBS);break;case 94:BJ=A.z2(A.abl.ERI);break;case 95:BJ=A.abl.PAR;break;case
96:BJ=A.z2(A.abl.XZF);break;case 97:BJ=A.z2(A.abl.XZM);break;case 98:BJ=A.z2(A.abl.
XZZ);break;default:throw new Error(AWF+Bs.toFixed());}return BJ;},_Init:function(
aArg){C.EnumToString._Init.call(this,aArg);this.__proto__=C.BreedToString;},_className:
"Device::BreedToString"};C.UT={timer:null,Q:null,D9:0,Dq:0,Mp:0,Pd:1000,Pm:1000,
Bw:false,Cv:false,B0:true,L$:function(H){var F;if(!this.timer)return;if(this.D9<
0){this.Dq=this.timer.Bu;this.D9=0;}var Aq=(this.timer.Bu-this.Dq)|0;var Og=this.
Pd;var GZ=this.Pm+this.Pd;var Lp=0;var Jw=this.D9;if(!Jw&&(Aq>=Og)){Jw=1;Aq=Aq-Og;
}if((Jw>0)&&(Aq>=GZ)){var H7=(Aq/GZ)|0;Aq=Aq-(H7*GZ);Jw=Jw+H7;}if((Jw>2)&&!this.
Mp)Jw=1;if(Jw!==this.D9){this.Dq=this.timer.Bu-(((B=Aq)<0)?B+0x100000000:B);this.
D9=Jw;}if(Jw>0)Lp=this.Pm;var MG=(Jw>=this.Mp)&&(this.Mp>0);if(!!this.Q){if((!MG&&(
Aq>=Lp))&&((F=this.Q,F[1].call(F[0]))!==this.Cv))(F=this.Q,F[2].call(F[0],this.Cv
));if((MG||((Aq<Lp)&&(Jw>0)))&&((F=this.Q,F[1].call(F[0]))!==this.B0))(F=this.Q,
F[2].call(F[0],this.B0));}if(MG)this.Ap(false);},IF:function(E){if(E<0)E=0;this.
Mp=E;},Fz:function(E){if(E<100)E=100;this.Pd=E;},VM:function(E){if(E<0)E=0;this.
Pm=E;},Ap:function(E){if(this.Bw===E)return;this.Bw=E;if(!E&&!!this.timer){A.zl([
this,this.L$],this.timer,0);this.timer=null;}if(E){this.timer=A._GetAutoObject(A.
abm.Af2);A.y_([this,this.L$],this.timer,0);this.D9=-1;}},_Init:function(aArg){this.
__proto__=C.UT;A.hJ++;},_Done:function(){this.__proto__=null;A.hJ--;},_ReInit:function(
){},_Mark:function(D){var B;if((B=this.timer)&&(B._cycle!=D))B._Mark(B._cycle=D);
if((B=this.Q)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.I)&&(B._cycle
!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:"Device::BoolEffect"
};C.Ia={AnimalId:0,TransponderId:1,BAb:2,BAa:3,BAe:4,BAd:5};C.Aty={ByG:0,Bzb:1};
C.AnimalIdGenerationMethodToString={BZ:function(A6){var Akz=A6;var AnP=A.jm;switch(
Akz){case 0:AnP=A.z2(A.abg.Yr);break;case 1:AnP=A.z2(A.abg.Transponder);break;case
3:AnP=(A.z2(A.abg.Manual)+N2)+A.z2(A.abg.Male);break;case 2:AnP=(A.z2(A.abg.Manual
)+N2)+A.z2(A.abg.Female);break;case 4:AnP=(A.z2(A.abg.Manual)+N2)+A.z2(A.abg.Unknown
);break;case 5:AnP=(A.z2(A.abg.Manual)+N2)+AWG;break;default:throw new Error(AWH+
Akz.toFixed());}return AnP;},_Init:function(aArg){C.EnumToString._Init.call(this
,aArg);this.__proto__=C.AnimalIdGenerationMethodToString;},_className:"Device::AnimalIdGenerationMethodToString"
};C.DirectionOfCountingToString={BZ:function(A6){var AxS=A6;var AY6=A.jm;switch(
AxS){case 0:AY6=AWI;break;case 1:AY6=AWJ;break;default:throw new Error(ArP+AxS.toFixed(
));}return AY6;},_Init:function(aArg){C.EnumToString._Init.call(this,aArg);this.
__proto__=C.DirectionOfCountingToString;},_className:"Device::DirectionOfCountingToString"
};C.EnumToIcon={Arl:function(A6){throw new Error(ArB+A6.toFixed());},Arm:function(
A6){throw new Error(ArB+A6.toFixed());},_Init:function(aArg){this.__proto__=C.EnumToIcon;
A.hJ++;},_Done:function(){this.__proto__=null;A.hJ--;},_ReInit:function(){},_Mark:
function(D){var B;if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:
0,_observers:null,_className:"Device::EnumToIcon"};C.Adh={Arl:function(A6){return A.
zW(A.abi.ASs);},Arm:function(A6){var AxS=A6;var Q$=-1;switch(AxS){case 0:Q$=3;break;
case 1:Q$=2;break;default:throw new Error(Anu+AxS.toFixed());}return Q$;},_Init:
function(aArg){C.EnumToIcon._Init.call(this,aArg);this.__proto__=C.Adh;},_className:
"Device::DirectionOfCountingToIcon"};C.AcY={Arl:function(A6){return A.zW(A.abi.ASq
);},Arm:function(A6){var Akz=A6;var Q$=-1;switch(Akz){case 0:Q$=0;break;case 1:Q$=
6;break;case 3:Q$=4;break;case 2:Q$=5;break;case 4:Q$=2;break;case 5:Q$=3;break;
default:throw new Error(Anu+Akz.toFixed());}return Q$;},_Init:function(aArg){C.EnumToIcon.
_Init.call(this,aArg);this.__proto__=C.AcY;},_className:"Device::AnimalIdGenerationMethodToIcon"
};C.Ph={UNDEFINED:0,SH:1,AMP:2,APv:3,AMO:4,A4V:5,HE:6,A7F:7,A2p:8,AKK:9,ARX:10,BE:
11,BB:12,A4J:13,ARY:14,ARZ:15,ASx:16};C.GermanStateToString={BZ:function(A6){var
Bn=A6;var Go=A.jm;switch(Bn){case 1:Go=A.z2(A.abp.SH);break;case 2:Go=A.z2(A.abp.
AMP);break;case 3:Go=A.z2(A.abp.APv);break;case 4:Go=A.z2(A.abp.AMO);break;case 5:
Go=A.z2(A.abp.A4V);break;case 6:Go=A.z2(A.abp.HE);break;case 7:Go=A.z2(A.abp.A7F
);break;case 8:Go=A.z2(A.abp.A2p);break;case 9:Go=A.z2(A.abp.AKK);break;case 10:
Go=A.z2(A.abp.ARX);break;case 11:Go=A.z2(A.abp.BE);break;case 12:Go=A.z2(A.abp.BB
);break;case 13:Go=A.z2(A.abp.A4J);break;case 14:Go=A.z2(A.abp.ARY);break;case 15:
Go=A.z2(A.abp.ARZ);break;case 16:Go=A.z2(A.abp.ASx);break;case 0:Go=Ant;break;default:
throw new Error(Ahe+Bn.toFixed());}return Go;},Lh:function(A6){var Bn=A6;var Go=
A.jm;switch(Bn){case 1:Go=A.z2(A.abp.BkS);break;case 2:Go=A.z2(A.abp.AMP);break;
case 3:Go=A.z2(A.abp.APv);break;case 4:Go=A.z2(A.abp.AMO);break;case 5:Go=A.z2(A.
abp.Bgu);break;case 6:Go=A.z2(A.abp.HE);break;case 7:Go=A.z2(A.abp.Bkz);break;case
8:Go=A.z2(A.abp.Bdz);break;case 9:Go=A.z2(A.abp.AKK);break;case 10:Go=A.z2(A.abp.
ARX);break;case 11:Go=A.z2(A.abp.BE);break;case 12:Go=A.z2(A.abp.BB);break;case 13:
Go=A.z2(A.abp.Bge);break;case 14:Go=A.z2(A.abp.ARY);break;case 15:Go=A.z2(A.abp.
ARZ);break;case 16:Go=A.z2(A.abp.ASx);break;case 0:Go=Ant;break;default:throw new
Error(Ahe+Bn.toFixed());}return Go;},Bl7:function(A6){var Bn=A6;var FX=-1;switch(
Bn){case 0:FX=0;break;case 1:FX=1;break;case 2:FX=2;break;case 3:FX=3;break;case
4:FX=4;break;case 5:FX=5;break;case 6:FX=6;break;case 7:FX=7;break;case 8:FX=8;break;
case 9:FX=9;break;case 10:FX=10;break;case 11:FX=11;break;case 12:FX=12;break;case
13:FX=13;break;case 14:FX=14;break;case 15:FX=15;break;case 16:FX=16;break;default:
throw new Error(Ahe+Bn.toFixed());}return FX;},Bl8:function(A6){var Bn=A6;var FX=
A.jm;switch(Bn){case 1:FX=ArQ;break;case 2:FX=AwQ;break;case 3:FX=Anv;break;case
4:FX=AWK;break;case 5:FX=AGv;break;case 6:FX=AWL;break;case 7:FX=AWM;break;case 8:
FX=AWN;break;case 9:FX=AWO;break;case 10:FX=AWP;break;case 11:FX=T9;break;case 12:
FX=AWQ;break;case 13:FX=AWR;break;case 14:FX=AWS;break;case 15:FX=AWT;break;case
16:FX=AWU;break;case 0:FX=Ant;break;default:throw new Error(Ahe+Bn.toFixed());}return FX;
},_Init:function(aArg){C.EnumToString._Init.call(this,aArg);this.__proto__=C.GermanStateToString;
},_className:"Device::GermanStateToString"};C.EartagNrAssignmentMode={OneSingleRange:
0,TwoNumberRanges:1,LAST:2};C.EartagNrAssignmentModeToString={Lh:function(A6){var
Uu=A6;var Nm=A.jm;switch(Uu){case 0:Nm=AWV;break;case 1:Nm=AWW;break;default:throw new
Error(AGw+Uu.toFixed());}return Nm;},BZ:function(A6){var Uu=A6;var Nm=A.jm;switch(
Uu){case 0:Nm=A.z2(A.abg.Bkh);break;case 1:Nm=A.z2(A.abg.Bmi);break;default:throw new
Error(AGw+Uu.toFixed());}return Nm;},_Init:function(aArg){C.EnumToString._Init.call(
this,aArg);this.__proto__=C.EartagNrAssignmentModeToString;},_className:"Device::EartagNrAssignmentModeToString"
};C.ByA={BAs:0,BAi:1,Bzr:2,Bzs:3,Bzt:4,BBo:5};C.EnumToCodeset={AlL:function(Ahh){
throw new Error(AwR+Ahh.toFixed());},Adk:function(A6){throw new Error(ArB+A6.toFixed(
));},ApA:function(){A.aa8("%s",AGx);return 0;},Hh:function(){A.aa8("%s",AGx);return 0;
},_Init:function(aArg){this.__proto__=C.EnumToCodeset;A.hJ++;},_Done:function(){
this.__proto__=null;A.hJ--;},_ReInit:function(){},_Mark:function(D){var B;if((B=
this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:
"Device::EnumToCodeset"};C.MQ={AlL:function(Ahh){var Bs;switch(Ahh){case 0:Bs=0;
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
Bs=97;break;case 111:Bs=98;break;default:Bs=0;}return Bs;},Adk:function(A6){var Bs=
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
AwS+Bs.toFixed());}return BM;},ApA:function(){return 0;},Hh:function(){return 111;
},_Init:function(aArg){C.EnumToCodeset._Init.call(this,aArg);this.__proto__=C.MQ;
},_className:"Device::BreedToHitCodeset"};C.ReasonOfLeaving={Unknown:0,A7$:1,SW:
2,A7A:3,A4n:4,BAA:5,A8o:6,A4R:7,A2N:8,A7w:9,A4P:10,A2R:11,BAP:12,BAQ:13,LAST:14};
C.ReasonOfLeavingToString={BZ:function(A6){var AcE=A6;var SQ=A.jm;switch(AcE){case
0:SQ=A.z2(A.abg.Unknown);break;case 1:SQ=A.z2(A.abg.A7$);break;case 2:SQ=A.z2(A.
abg.SW);break;case 3:SQ=A.z2(A.abg.A7A);break;case 4:SQ=A.z2(A.abg.A4n);break;case
5:SQ=A.z2(A.abg.Bki);break;case 6:SQ=A.z2(A.abg.A8o);break;case 7:SQ=A.z2(A.abg.
A4R);break;case 8:SQ=A.z2(A.abg.A2N);break;case 9:SQ=A.z2(A.abg.A7w);break;case 10:
SQ=A.z2(A.abg.A4P);break;case 11:SQ=A.z2(A.abg.A2R);break;case 12:SQ=A.z2(A.abg.
Bks);break;case 13:SQ=A.z2(A.abg.Bkr);break;default:throw new Error(AwT+AcE.toFixed(
));}return SQ;},_Init:function(aArg){C.EnumToString._Init.call(this,aArg);this.__proto__=
C.ReasonOfLeavingToString;},_className:"Device::ReasonOfLeavingToString"};C.AgQ={
AlL:function(Ahh){var Oh;switch(Ahh){case 0:Oh=0;break;case 1:Oh=1;break;case 2:
Oh=2;break;case 3:Oh=3;break;case 4:Oh=4;break;case 5:Oh=5;break;case 6:Oh=6;break;
case 7:Oh=7;break;case 8:Oh=8;break;case 9:Oh=9;break;case 10:Oh=10;break;case 11:
Oh=11;break;case 12:Oh=12;break;case 13:Oh=13;break;default:Oh=0;}return Oh;},Adk:
function(A6){var Oh=A6;var Jb=0;switch(Oh){case 0:Jb=0;break;case 2:Jb=2;break;case
8:Jb=8;break;case 11:Jb=11;break;case 4:Jb=4;break;case 10:Jb=10;break;case 7:Jb=
7;break;case 5:Jb=5;break;case 9:Jb=9;break;case 3:Jb=3;break;case 12:Jb=12;break;
case 13:Jb=13;break;case 1:Jb=1;break;case 6:Jb=6;break;default:throw new Error(
AGy+Oh.toFixed());}return Jb;},ApA:function(){return 0;},Hh:function(){return 13;
},_Init:function(aArg){C.EnumToCodeset._Init.call(this,aArg);this.__proto__=C.AgQ;
},_className:"Device::ReasonOfLeavingToCodeset"};C.KG={AlL:function(Ahh){var Ks;
switch(Ahh){case 0:Ks=0;break;case 1:Ks=1;break;case 2:Ks=2;break;case 3:Ks=3;break;
case 4:Ks=4;break;case 5:Ks=5;break;case 6:Ks=6;break;case 7:Ks=7;break;case 8:Ks=
8;break;case 9:Ks=9;break;case 10:Ks=10;break;default:Ks=0;}return Ks;},Adk:function(
A6){var Ks=A6;var Jb=0;switch(Ks){case 0:Jb=0;break;case 2:Jb=2;break;case 1:Jb=
1;break;case 9:Jb=9;break;case 6:Jb=6;break;case 8:Jb=8;break;case 7:Jb=7;break;
case 5:Jb=5;break;case 10:Jb=10;break;case 4:Jb=4;break;case 3:Jb=3;break;default:
throw new Error(AGy+Ks.toFixed());}return Jb;},ApA:function(){return 0;},Hh:function(
){return 10;},_Init:function(aArg){C.EnumToCodeset._Init.call(this,aArg);this.__proto__=
C.KG;},_className:"Device::WhereAboutsToCodeset"};C.AlS={_Init:function(aArg){this.
__proto__=C.AlS;A.hJ++;},_Done:function(){this.__proto__=null;A.hJ--;},_ReInit:function(
){},_Mark:function(D){var B;if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:
null,_cycle:0,_observers:null,_className:"Device::EmptyClass"};C.CalfDeregistrationsTableFields={
Year:0,Deregistrations:1,Deaths:2};C.CalfDeregistrations={Deregistrations:0,Deaths:
0,Year:0,EK:function(Ab,AF){var Hs=C.Row.EK.call(this,Ab,AF);if(Hs&&!!AF){this.AjN(
AF.CE(Ab,0));this.Au3(AF.CE(Ab,1));this.Au2(AF.CE(Ab,2));}return Hs;},Cr:function(
AF){var Hs=C.Row.Cr.call(this,AF);if(Hs&&!!AF){var Jg=AF.Op();if(Jg<=0)A.aa8("%s"
,AbR);else{if(this.Amb())this.CH=AF.XS();AF.G_(this.CH,0,this.Year);AF.G_(this.CH
,1,this.Deregistrations);AF.G_(this.CH,2,this.Deaths);AF.Or(Jg);}}return Hs;},Gd:
function(){C.Row.Gd.call(this);this.AjN(-1);},G9:function(){C.Row.G9.call(this);
this.AjN(0);this.Au3(0);this.Au2(0);},Au3:function(E){if(this.Deregistrations===
E)return;this.Deregistrations=E;A.aat([this,this.Bhd,this.Au3],0);},Au2:function(
E){if(this.Deaths===E)return;this.Deaths=E;A.aat([this,this.Bhb,this.Au2],0);},AjN:
function(E){if(this.Year===E)return;this.Year=E;A.aat([this,this.Aqe,this.AjN],0
);},Bhd:function(){return this.Deregistrations;},Bhb:function(){return this.Deaths;
},Aqe:function(){return this.Year;},_Init:function(aArg){C.Row._Init.call(this,aArg
);this.__proto__=C.CalfDeregistrations;this.TableId=4;},_className:"Device::CalfDeregistrations"
};C.Atw={Undefined:0,Display:1,A7E:2,A7Q:3,A8G:4,BzM:5,BA0:6,BBz:7,Bz$:8,By2:9,Byp:
10,A3P:11,A7G:12,BBG:13,A4U:14,BBJ:15};C.DeviceComponentToString={BZ:function(A6
){var A$n=A6;var PU=A.jm;switch(A$n){case 0:PU=AWX;break;case 10:PU=A.z2(A.abg.Bc_
);break;case 9:PU=A.z2(A.abg.BdU);break;case 1:PU=A.z2(A.abg.Bey);break;case 11:
PU=A.z2(A.abg.A3P);break;case 5:PU=A.z2(A.abg.BmB);break;case 8:PU=A.z2(A.abg.BeA
);break;case 14:PU=A.z2(A.abg.A4U);break;case 2:PU=A.z2(A.abg.A7E);break;case 12:
PU=A.z2(A.abg.A7G);break;case 6:PU=A.z2(A.abg.Bky);break;case 3:PU=A.z2(A.abg.A7Q
);break;case 7:PU=A.z2(A.abg.BeB);break;case 13:PU=A.z2(A.abg.Bej);break;case 15:
PU=A.z2(A.abg.BmF);break;case 4:PU=A.z2(A.abg.A8G);break;default:throw new Error(
AWY+A$n.toFixed());}return PU;},_Init:function(aArg){C.EnumToString._Init.call(this
,aArg);this.__proto__=C.DeviceComponentToString;},_className:"Device::DeviceComponentToString"
};C.Af1={AlL:function(Ahh){return Ahh;},Adk:function(A6){return A6;},ApA:function(
){return 0;},Hh:function(){return 4;},_Init:function(aArg){C.EnumToCodeset._Init.
call(this,aArg);this.__proto__=C.Af1;},_className:"Device::EaseOfDeliveryToCodeset"
};C.AdT={Arl:function(A6){return A.zW(A.abi.ANW);},Arm:function(A6){var A$x=A6;var
Q$=-1;switch(A$x){case 0:Q$=0;break;case 1:Q$=1;break;case 2:Q$=2;break;default:
throw new Error(AGz+A$x.toFixed());}return Q$;},_Init:function(aArg){C.EnumToIcon.
_Init.call(this,aArg);this.__proto__=C.AdT;},_className:"Device::MotherSelectionFilterModeToIcon"
};C.WhereAboutsFilterCriterion={A4:0,Adi:function(){var Av=A._NewObject(C.WhereAboutsFilterCriterion
,0);Av.Gs(this);return Av;},Gs:function(AL){C.FilterCriterion.Gs.call(this,AL);var
Av=(C.WhereAboutsFilterCriterion.isPrototypeOf(AL)?AL:null);if(!!Av)this.A4=Av.A4;
},Initialize:function(AX,EE,A1,Sz){this.ET=AX;this.Operator=EE;this.A4=A1;this.AaQ=
Sz;return this;},_Init:function(aArg){C.FilterCriterion._Init.call(this,aArg);this.
__proto__=C.WhereAboutsFilterCriterion;},_className:"Device::WhereAboutsFilterCriterion"
};C.BAl={ALN:0,By9:1,ANy:2,LAST:3};C.BBq={Gt:0,AS9:1,G5:2,Year:3,LAST:4};C.TimespanDaysToString={
BZ:function(A6){var BcK=A6;var Azs=A.jm;switch(BcK){case 0:Azs=A.z2(A.abg.A26);break;
case 1:Azs=A.z2(A.abg.AS9);break;case 2:Azs=A.z2(A.abg.G5);break;case 3:Azs=A.z2(
A.abg.Year);break;default:throw new Error(AWZ+BcK.toFixed());}return Azs;},_Init:
function(aArg){C.EnumToString._Init.call(this,aArg);this.__proto__=C.TimespanDaysToString;
},_className:"Device::TimespanDaysToString"};C.Akc={BAx:0,Bzc:1,BzS:2,BzU:3,BzT:
4,Bzd:5,LAST:6};C.USBStateToString={BZ:function(A6){var Bc4=A6;var Bn=A.jm;switch(
Bc4){case 0:Bn=AW0;break;case 2:Bn=AW1;break;case 1:Bn=AW2;break;case 5:Bn=AW3;break;
case 3:Bn=AW4;break;case 4:Bn=AW5;break;default:throw new Error(AFW+Bc4.toFixed(
));}return Bn;},_Init:function(aArg){C.EnumToString._Init.call(this,aArg);this.__proto__=
C.USBStateToString;},_className:"Device::USBStateToString"};C.AAz={BzQ:0,ByB:1,BzR:
2,BzO:3};C.AvZ={AAv:A.jm,Timestamp:0,ACa:0,ACi:0,AEp:0,OnSetTimestamp:function(E
){if(this.Timestamp===E)return;this.Timestamp=E;},ADl:function(E){if(this.ACa===
E)return;this.ACa=E;},ADs:function(E){if(this.ACi===E)return;this.ACi=E;},ADE:function(
E){if(this.AEp===E)return;this.AEp=E;},AC3:function(E){if(this.AAv===E)return;this.
AAv=E;},_Init:function(aArg){this.__proto__=C.AvZ;A.hJ++;},_Done:function(){this.
__proto__=null;A.hJ--;},_ReInit:function(){},_Mark:function(D){var B;if((B=this.
I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:
"Device::SoftwareVersionInformation"};C.At2={Timestamp:0,APj:0,APk:0,ASP:0,ASQ:0
,ASO:0,APi:0,OnSetTimestamp:function(E){if(this.Timestamp===E)return;this.Timestamp=
E;},ADi:function(E){if(this.APj===E)return;this.APj=E;},ADj:function(E){if(this.
APk===E)return;this.APk=E;},ADR:function(E){if(this.ASP===E)return;this.ASP=E;},
ADS:function(E){if(this.ASQ===E)return;this.ASQ=E;},ADQ:function(E){if(this.ASO===
E)return;this.ASO=E;},ADh:function(E){if(this.APi===E)return;this.APi=E;},_Init:
function(aArg){this.__proto__=C.At2;A.hJ++;},_Done:function(){this.__proto__=null;
A.hJ--;},_ReInit:function(){},_Mark:function(D){var B;if((B=this.I)&&(B._cycle!=
D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:"Device::HardwareVersionInformation"
};C.Ape={Undefined:0,BzC:1,ByO:2};C.AfK={Manual:0,TransponderId:1,LAST:2};C.AnimalIdAutoGenerationMethodToString={
BZ:function(A6){var A_U=A6;var AYz=A.jm;switch(A_U){case 0:AYz=A.z2(A.abg.A2W);break;
case 1:AYz=A.z2(A.abg.A3a);break;default:throw new Error(AW6+A_U.toFixed());}return AYz;
},_Init:function(aArg){C.EnumToString._Init.call(this,aArg);this.__proto__=C.AnimalIdAutoGenerationMethodToString;
},_className:"Device::AnimalIdAutoGenerationMethodToString"};C.G5={A2D:0,AB1:1,AAS:
2,ACb:3,AzT:4,ACe:5,AB3:6,AB2:7,Az1:8,AEw:9,ACs:10,ACq:11,AAC:12,LAST:13};C.MonthToString={
BZ:function(A6){var Bax=A6;var WK=A.jm;switch(Bax){case 1:WK=A.z2(A.abu.AB1);break;
case 2:WK=A.z2(A.abu.AAS);break;case 3:WK=A.z2(A.abu.ACb);break;case 4:WK=A.z2(A.
abu.AzT);break;case 5:WK=A.z2(A.abu.ACe);break;case 6:WK=A.z2(A.abu.AB3);break;case
7:WK=A.z2(A.abu.AB2);break;case 8:WK=A.z2(A.abu.Az1);break;case 9:WK=A.z2(A.abu.
AEw);break;case 10:WK=A.z2(A.abu.ACs);break;case 11:WK=A.z2(A.abu.ACq);break;case
12:WK=A.z2(A.abu.AAC);break;default:throw new Error(AGA+Bax.toFixed());}return WK;
},_Init:function(aArg){C.EnumToString._Init.call(this,aArg);this.__proto__=C.MonthToString;
},_className:"Device::MonthToString"};C.AiM={FileName:A.jm,AEr:0,AAz:0,Am3:false
,_Init:function(aArg){this.__proto__=C.AiM;A.hJ++;},_Done:function(){this.__proto__=
null;A.hJ--;},_ReInit:function(){},_Mark:function(D){var B;if((B=this.I)&&(B._cycle
!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:"Device::DataExportContext"
};C.AlC={BzJ:0,BBf:1};C.ATe={Init:function(aArg){var B;A.za([this,this.BbG],[B=A.
_GetAutoObject(C.Device),B.A6d,B.A91],0);this.BbG(this);},Cr:function(){A._GetAutoObject(
C.Device).AqL(this.toString());},BbG:function(H){this.EK(A._GetAutoObject(C.Device
).AFg);A.vv(this,0);},_Init:function(aArg){C.Int32ArrayWrapper._Init.call(this,aArg
);this.__proto__=C.ATe;this.YH(2);this.Init(aArg);},_className:"Device::WeightGainsLowClass"
};C.ATd={Init:function(aArg){var B;A.za([this,this.BbE],[B=A._GetAutoObject(C.Device
),B.A6c,B.A90],0);this.BbE(this);},Cr:function(){A._GetAutoObject(C.Device).AqK(
this.toString());},BbE:function(H){this.EK(A._GetAutoObject(C.Device).AFf);A.vv(
this,0);},_Init:function(aArg){C.Int32ArrayWrapper._Init.call(this,aArg);this.__proto__=
C.ATd;this.YH(2);this.Init(aArg);},_className:"Device::WeightGainsHighClass"};C.
ATg={Init:function(aArg){var B;A.za([this,this.BbI],[B=A._GetAutoObject(C.Device
),B.A6g,B.A94],0);this.BbI(this);},Cr:function(){A._GetAutoObject(C.Device).AqM(
this.toString());},BbI:function(H){this.EK(A._GetAutoObject(C.Device).AFi);A.vv(
this,0);},_Init:function(aArg){C.Int32ArrayWrapper._Init.call(this,aArg);this.__proto__=
C.ATg;this.YH(2);this.Init(aArg);},_className:"Device::WeightValuesBirthClass"};
C.ATc={Init:function(aArg){var B;A.za([this,this.BbC],[B=A._GetAutoObject(C.Device
),B.A6b,B.A9Z],0);this.BbC(this);},Cr:function(){A._GetAutoObject(C.Device).AqJ(
this.toString());},BbC:function(H){this.EK(A._GetAutoObject(C.Device).AFe);A.vv(
this,0);},_Init:function(aArg){C.Int32ArrayWrapper._Init.call(this,aArg);this.__proto__=
C.ATc;this.YH(2);this.Init(aArg);},_className:"Device::WeightGainsAverageClass"};
C.AKA={Init:function(aArg){var B;A.za([this,this.Ba1],[B=A._GetAutoObject(C.Device
),B.A5t,B.A9D],0);this.Ba1(this);},Ba1:function(H){this.EK(A._GetAutoObject(C.Device
).AzS);A.vv(this,0);},_Init:function(aArg){C.Int32ArrayWrapper._Init.call(this,aArg
);this.__proto__=C.AKA;this.YH(2);this.Init(aArg);},_className:"Device::AnimalTypesWeightGainsClass"
};C.BAo={BAr:0,BAf:1,By8:2,BBH:3,Unknown:4};C.ByM={None:0,BAy:1,BAt:2,BAp:3,BAq:
4};C.Ag6={A45:0,Manual:1,TransponderId:2,LAST:3};C.TransponderAssignmentIdChangeMethodToString={
BZ:function(A6){var BcO=A6;var AJi=A.jm;switch(BcO){case 0:AJi=A.z2(A.abg.A45);break;
case 1:AJi=A.z2(A.abg.A2W);break;case 2:AJi=A.z2(A.abg.A3a);break;default:throw new
Error(AW7+BcO.toFixed());}return AJi;},_Init:function(aArg){C.EnumToString._Init.
call(this,aArg);this.__proto__=C.TransponderAssignmentIdChangeMethodToString;},_className:
"Device::TransponderAssignmentIdChangeMethodToString"};C.A7x={Bw7:function(A_w){
var Nn=A.aa2(A.aaX(A_w,15),0,10);if(!A._GetAutoObject(C.Converter).AeF(Nn))return 0;
return A.aa2(A.aaX(A_w,15),0,10);},Bw6:function(AHV){if(AHV.length<8)return 0;var
AyW=A._NewObject(A.Core.Bu,0);var Bxv=A.aaY(AHV,4,4);var AZE=A.vQ(Bxv,0,10);if((
AZE<2000)||(AZE>2100))return 0;AyW.Year=AZE;var Bxu=A.aaY(AHV,2,2);var AZD=A.vQ(
Bxu,0,10);if((AZD<1)||(AZD>12))return 0;AyW.TE(AZD);var Bxt=A.aaX(AHV,2);var AZC=
A.vQ(Bxt,0,10);if((AZC<1)||(AZC>AyW.Yx()))return 0;AyW.Lb(AZC);return AyW.JL();}
,_Init:function(aArg){this.__proto__=C.A7x;A.hJ++;},_Done:function(){this.__proto__=
null;A.hJ--;},_ReInit:function(){},_Mark:function(D){var B;if((B=this.I)&&(B._cycle
!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:"Device::ParserClass"
};C.AvI={_Init:function(){C.A7x._Init.call(this,0);},_variants:function(){return this;
},_this:null};C.AnimalTableFieldsToString={BZ:function(A6){var Zx=A6;var FE=A.jm;
switch(Zx){case 14:FE=A.z2(A.abg.AeG);break;case 6:FE=A.jm;break;case 32:FE=A.z2(
A.abg.Breed);break;case 4:FE=A.z2(A.abg.AfW);break;case 28:FE=A.z2(A.abg.A2J);break;
case 33:FE=A.z2(A.abg.AiI);break;case 23:FE=A.z2(A.abg.Kv);break;case 25:FE=A.jm;
break;case 7:FE=A.z2(A.abg.Aeq);break;case 2:FE=A.z2(A.abg.O);break;case 0:FE=A.
z2(A.abg.HA);break;case 8:FE=A.z2(A.abg.Alarm);break;case 9:FE=A.z2(A.abg.AAn);break;
case 38:FE=A.z2(A.abg.Bez);break;case 11:FE=A.z2(A.abg.Fever);break;case 27:FE=A.
jm;break;case 10:FE=A.jm;break;case 37:FE=A.jm;break;case 12:FE=A.jm;break;case 29:
FE=A.z2(A.abg.AO_);break;case 18:FE=A.z2(A.abg.MS);break;case 17:FE=A.jm;break;case
5:FE=A.jm;break;case 3:FE=A.jm;break;case 26:FE=A.z2(A.abg.Yr);break;case 35:FE=
A.jm;break;case 36:FE=A.jm;break;case 15:FE=A.jm;break;case 16:FE=A.jm;break;case
24:FE=A.jm;break;case 31:FE=A.jm;break;case 20:FE=A.jm;break;case 30:FE=A.jm;break;
case 21:FE=A.jm;break;case 19:FE=A.jm;break;case 22:FE=A.z2(A.abg.Transponder);break;
case 1:FE=A.z2(A.abg.Gq);break;case 34:FE=A.z2(A.abg.I_);break;case 13:FE=A.jm;break;
default:throw new Error(AW8+A6.toFixed());}return FE;},_Init:function(aArg){C.EnumToString.
_Init.call(this,aArg);this.__proto__=C.AnimalTableFieldsToString;},_className:"Device::AnimalTableFieldsToString"
};C.U4={BzP:0,BzN:1,LAST:2};C.DataExportDestinationToString={BZ:function(A6){var
BuM=A6;var AY1=A.jm;switch(BuM){case 0:AY1=A.abg.Bfu;break;case 1:AY1=A.abg.Bea;
break;default:throw new Error(AW9+A6.toFixed());}return AY1;},_Init:function(aArg
){C.EnumToString._Init.call(this,aArg);this.__proto__=C.DataExportDestinationToString;
},_className:"Device::DataExportDestinationToString"};C.AB_={Bc:0,BBj:1,LAST:2};
C.ListViewScopeToString={BZ:function(A6){var BvS=A6;var AZZ=A.jm;switch(BvS){case
0:AZZ=A.z2(A.abg.Bc);break;case 1:AZZ=A.z2(A.abg.Blk);break;default:throw new Error(
AW_+A6.toFixed());}return AZZ;},_Init:function(aArg){C.EnumToString._Init.call(this
,aArg);this.__proto__=C.ListViewScopeToString;},_className:"Device::ListViewScopeToString"
};
C._Init=function(){C.Int32FilterCriterion.__proto__=C.FilterCriterion;C.StringFilterCriterion.
__proto__=C.FilterCriterion;C.Table.__proto__=C.ITable;C.Animal.__proto__=C.Row;
C.Rating.__proto__=C.Row;C.HelperClass.__proto__=C.AlS;C.BoolFilterCriterion.__proto__=
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
C.ASF.__proto__=C.Int32ArrayWrapper;C.ASE.__proto__=C.Int32ArrayWrapper;C.AKz.__proto__=
C.Int32ArrayWrapper;C.UInt64FilterCriterion.__proto__=C.FilterCriterion;C.BooleanToAssignedUnassignedString.
__proto__=C.EnumToString;C.CountryToString.__proto__=C.EnumToString;C.EaseOfDeliveryToString.
__proto__=C.EnumToString;C.WhereAboutsToString.__proto__=C.EnumToString;C.BreedToString.
__proto__=C.EnumToString;C.AnimalIdGenerationMethodToString.__proto__=C.EnumToString;
C.DirectionOfCountingToString.__proto__=C.EnumToString;C.Adh.__proto__=C.EnumToIcon;
C.AcY.__proto__=C.EnumToIcon;C.GermanStateToString.__proto__=C.EnumToString;C.EartagNrAssignmentModeToString.
__proto__=C.EnumToString;C.MQ.__proto__=C.EnumToCodeset;C.ReasonOfLeavingToString.
__proto__=C.EnumToString;C.AgQ.__proto__=C.EnumToCodeset;C.KG.__proto__=C.EnumToCodeset;
C.CalfDeregistrations.__proto__=C.Row;C.DeviceComponentToString.__proto__=C.EnumToString;
C.Af1.__proto__=C.EnumToCodeset;C.AdT.__proto__=C.EnumToIcon;C.WhereAboutsFilterCriterion.
__proto__=C.FilterCriterion;C.TimespanDaysToString.__proto__=C.EnumToString;C.USBStateToString.
__proto__=C.EnumToString;C.AnimalIdAutoGenerationMethodToString.__proto__=C.EnumToString;
C.MonthToString.__proto__=C.EnumToString;C.ATe.__proto__=C.Int32ArrayWrapper;C.ATd.
__proto__=C.Int32ArrayWrapper;C.ATg.__proto__=C.Int32ArrayWrapper;C.ATc.__proto__=
C.Int32ArrayWrapper;C.AKA.__proto__=C.Int32ArrayWrapper;C.TransponderAssignmentIdChangeMethodToString.
__proto__=C.EnumToString;C.AnimalTableFieldsToString.__proto__=C.EnumToString;C.
DataExportDestinationToString.__proto__=C.EnumToString;C.ListViewScopeToString.__proto__=
C.EnumToString;};C._ReInit=function(){var B;if((B=C.Device._this))B._ReInit();if((
B=C.Converter._this))B._ReInit();if((B=C.Helper._this))B._ReInit();if((B=C.AvI._this
))B._ReInit();};C.DE=function(D){var B;if((B=C.Device._this)&&(B._cycle!=D))B._Done(
C.Device._this=null);if((B=C.Converter._this)&&(B._cycle!=D))B._Done(C.Converter.
_this=null);if((B=C.Helper._this)&&(B._cycle!=D))B._Done(C.Helper._this=null);if((
B=C.AvI._this)&&(B._cycle!=D))B._Done(C.AvI._this=null);};return C;})();

/* VitalControl demonstration application, © Urban GmbH & Co.KG 2023 */