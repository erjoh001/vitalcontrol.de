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
var Fn="ERROR: Body weight value is read only";var Nd="ERROR: Predicted temperature value is read only";
var OL="ERROR: TransferProgress is read only";var KH="ERROR: TransferTarget is read only";
var OM="ERROR: unhandled assessment.";var Ne="Unhandled enum BodyTemperature: ";
var ON="AU";var Ss="AT";var T$="BE";var Ze="BA";var Wb="BG";var IM="CA";var Ua="CN";
var Zf="TW";var Wc="HR";var Zg="CY";var Ub="CZ";var Zh="DK";var Zi="EE";var Uc="FI";
var Wd="FR";var QV="DE";var Zj="GR";var OO="HU";var PK="IE";var Ud="IT";var Zk="JP";
var We="LV";var Zl="LT";var Zm="LU";var Wf="MT";var Wg="NL";var St="NO";var Zn="PL";
var Zo="PT";var AbO="RO";var Su="RU";var AbP="SK";var AeN="SI";var Zp="ES";var Wh=
"SE";var Wi="CH";var AeO="TR";var AeP="UA";var JT="UK";var AeQ="US";var Li=".";var
Ag$="-";var Ang="ERROR: Unhandled mass unit: ";var N2=" ";var Wj="Unhandled gender";
var Anh="Unhandled animal type";var Aha="Unhandled Device::MassUnit.";var Ahb="Unhandled Device::AnimalListContent.";
var AbQ="Avid";var Ue="Ordicam / IER SA";var Ani="Agrident";var Anj="Datamars";var
Awl="Allflex";var Awm="Texas Instruments";var Aki="Nedap";var Awn="Digital Angel";
var AeR="null";var Arw="[ ";var OP=", ";var Sv=" ]";var Awo="Unhandled language";
var Sw="Unhandled Device::AnimalListAction.";var Arx="Temperature unit conversion not supported: ";
var Awp="->";var Awq="=";var Awr=">";var Ank="<";var Aws="!=";var Ary="WARNING: Unhandled operator.";
var KI="Unknown birth type";var Awt="Unhandled country: ";var AbR="ERROR: Cannot start transaction";
var Awu="ERROR: Table is null, cannot load row (";var AFk=")";var AFl="Table Id mismatch!";
var AFm="ERROR: Row index (";var AFn=") out of bounds [0,";var Awv="]";var ATj="ERROR: Table is full. Item limit: ";
var ATk="Device::ScanTransponder not set";var ATl="Unhandled TransponderType.";var
ATm="Unhandled ScanState.";var ATn="Could not load animal with transponder";var Arz=
"Birth type";var Aww="Time calving";var QW="Pend. reg. notice";var Awx="Perished";
var ATo="Rating temp.";var ATp=" mother";var ATq="Reason leaving";var ATr="Time alarm";
var AFo="Time first weighing";var AFp="Time control";var AeS="Time temp.";var Anl=
"Time watch";var ATs="Time weighing";var AFq="Assessment";var Akj="Time rating";
var AFr="ERROR: Unhandled AnimalTable filter field:";var Awy="Field ";var ATt="ERROR: Unhandled RatingTable filter field:";
var ATu="ERROR: Unhandled table ";var ATv=" filter fields.";var ATw="WARNING: Unhandled filter criterion type.";
var AbS="0";var ArA="No table specified";var AFs="Invalid animal id generation method: ";
var AFt="Unhandled AnimalIdGenerationMethod: ";var Awz="Invalid gender: ";var AFu=
"Invalid ear tag number assignment mode: ";var AwA=";";var ATx="Invalid animal creation error code: ";
var ATy="Invalid EartagNrAssignmentMode: ";var ATz="Unsupported exponent: ";var ATA=
"Unknown whereabouts type: ";var AFv="Unhandled Gender: ";var ATB="Unhandled AnimalIdAutoGenerationMethod: ";
var OQ="\n";var AwB="\n\n";var ATC="Bootloader:\nV\xA0";var ATD="Middleware:\nV\xA0";
var ATE="GUI:\nV\xA0";var ATF="Mainboard: ";var ATG="Torchboard: ";var ATH="Operator not supported.";
var ATI="Unhandled Device::TransponderAssignmentIdChangeMethod: ";var ArB="Unhandled enum value ";
var AwC="UNDEFINED";var AFw="Boot";var ATJ="Charge";var AFx="ChargeWarning";var ATK=
"ControlledPowerOff";var ATL="DeviceMain";var ATM="DeviceService";var ATN="DeviceInfo";
var AFy="DeviceBackup";var ATO="DeviceCheck";var AwD="Home";var AFz="Settings";var
AFA="DateTimeSettings";var ATP="UnitsSettings";var AFB="DataAcquisitionSettings";
var ATQ="RegistrationAutomaticSettings";var ATR="RegistrationPresettingsSettings";
var QX="TransponderAssignmentSettings";var Wk="TemperatureSettings";var ATS="WeightGainSettings";
var ATT="DeviceSettings";var ATU="RegistrationSettings";var ATV="InitializationSettings";
var ATW="PremisesSettings";var ATX="Sleep";var ATY="Sync";var Ahc="EditAnimalData";
var AFC="EditAnimalDataNaisId";var ATZ="AnimalList";var AT0="AnimalListFilter";var
AFD="AlarmListFilter";var AFE="WatchListFilter";var AwE="AnimalActionActions";var
QY="AnimalActionTemperature";var AT1="TemperatureMeasurement";var AT2="AnimalActionWeighing";
var AT3="AnimalActionRate";var ArC="AnimalActionUnregister";var AT4="AnimalActionPerished";
var AT5="AnimalActionNewBornCare";var AT6="AlarmList";var AT7="ControlMeasure";var
AT8="ControlList";var AT9="RangeTest";var ArD="ListsMain";var AT_="ListsIdManagement";
var AT$="WatchList";var AUa="AnimalListActions";var AUb="AlarmListActions";var AUc=
"ControlListActions";var AUd="WatchListActions";var AUe="EvaluationMenuMain";var
AUf="EvaluationMenuWeights";var AUg="EvaluationLosses";var AUh="EvaluationRatings";
var AFF="EvaluationTemperatures";var ArE="EvaluationWeights";var AUi="EvaluationWeightsRecent";
var AUj="EvaluationBirthWeights";var AUk="AnimalEvaluationFilter";var AwF="NewMenu";
var Akk="NewAnimals";var AeT="NewAnimalManualData";var ArF="MassRecording";var Akl=
"NewAnimalTransponderData";var Ahd="NewAnimalLoss";var AUl="AutoActionScanScreen";
var AwG="ManualActionScanScreen";var AFG="SetTransponderScreen";var AeU="SetSaveTransponderScreen";
var AFH="NewAnimalSetTransponderScreen";var Wl="NewAnimalsSetTransponderScreen";
var Akm="NewAnimalCalvingDataScreen";var Anm="WeightListScreen";var AUm="AnimalSingleInfoScreen";
var AUn="AnimalMultiInfoScreen";var AUo="AnimalRegistrationDetails";var AUp="MultiInfoActionsScreen";
var AUq="FreshCowListScreen";var ArG="FreshCowListActionsScreen";var AFI="FreshCowListFilterScreen";
var AFJ="DryCowListScreen";var AUr="DryCowListActionsScreen";var AUs="DryCowListFilterScreen";
var AUt="NoTransponderListScreen";var AUu="NoTransponderListActionsScreen";var AUv=
"NoTransponderListFilterScreen";var AUw="YoungNoTransponderListScreen";var AFK="YoungNoTransponderListActionsScreen";
var AUx="YoungNoTransponderListFilterScreen";var AwH="NoNaisIdListScreen";var AFL=
"NoNaisIdListActionsScreen";var AFM="NoNaisIdListFilterScreen";var AFN="RegistrationsListScreen";
var AFO="RegistrationsListActionsScreen";var AFP="RegistrationsListFilterScreen";
var AFQ="ActionListScreen";var AUy="ActionListActionsScreen";var AUz="ActionListFilterScreen";
var AUA="UpdateScreen";var AUB="MotherScanScreen";var AUC="SetSaveNaisIdScreen";
var AUD="PurchasedAnimalsList";var AUE="TextInput";var AwI="Unhandled display mode: ";
var AFR="None";var AUF="Actions Settings";var AFS="Auto Action";var Akn="Menu Item Settings";
var Zq="Rating Type";var AUG="Weighing settings";var AeV="Options";var AUH="AnimalSearch";
var AUI="AnimalSearchUnfiltered";var ArH="AnimalSearchDriedOff";var AeW="MeasurementReady";
var Ann="AnimalMultiInfoMenu";var AFT="MassRecordingDefaults";var AUJ="MassRecordingFields";
var OR="MassRecordingMenu";var AUK="PurchasedAnimalsListMenu";var AUL="BirthRegistrationsListMenu";
var AUM="Unhandled overlay menu: ";var AwJ="Error";var ArI="Idle";var AFU="IdScanned";
var AUN="NotFound";var AFV="Progress";var AFW="Unhandled scan state: ";var AUO="Prediction";
var AFX="Ready";var AUP="Unhandled measure state: ";var AUQ="Unhandled temperature unit: ";
var AUR="Unhandled species: ";var AFY="English";var AUS="Nederlands";var AFZ="Deutsch";
var AF0="Eesti";var AwK="Suomalainen";var AUT="Fran\xE7ais";var AUU="\u0395\u03BB\u03BB\u03B7\u03BD\u03B9\u03BA\u03AC";
var AUV="\u0411\u044A\u043B\u0433\u0430\u0440\u0441\u043A\u0438";var AUW="Italiano";
var AUX="\u0420\u0443\u0441\u0441\u043A\u0438\u0439";var AUY="Espa\xF1ol";var AUZ=
"T\xFCrk\xE7e";var AU0="\u6B63\u9AD4\u5B57/\u7E41\u9AD4\u5B57";var ArJ="\u010Ce\u0161tina";
var Ano="Bosanski";var AF1="Norsk";var AU1="\u0423\u043A\u0440\u0430\u0457\u043D\u0441\u044C\u043A\u0438\u0439";
var AF2="Unhandled language: ";var AU2="EN";var AU3="ET";var AU4="EL";var AU5="ZH";
var AU6="CS";var AU7="BS";var AU8="Unhandled gender: ";var AU9="Unhandled birth type: ";
var AU_="Exporting";var AU$="ImportFinish";var AVa="ImportStart";var AVb="Importing";
var AVc="Init";var AVd="Unhandled sync state: ";var AF3="Unhandled rating attribute: ";
var AVe="Unhandled assessment: ";var Ako="Illegal boolean value: ";var AwL="Unhandled popup ID:";
var AF4="Unknown";var AF5="Severe Error";var AF6="ErrorsDeviceDriverCheck";var AF7=
"Enter Sleep";var AwM="About";var AF8="InfoSoftwareVersions";var AVf="InfoHardwareVersions";
var AVg="InfoSerial";var AVh="ShutDown";var AF9="SuccessDataSync";var AVi="SuccessResetFactory";
var AVj="SuccessResetAnimalData";var AVk="SuccessCreateBackup";var AVl="SuccessRestoreBackup";
var AVm="CreateBackupInProgress";var AVn="RestoreBackupInProgress";var AVo="FailedCreateBackup";
var AVp="FailedRestoreBackup";var AwN="TechnicalDetails";var AVq="WarningDataSync";
var AVr="WarningFactory";var AwO="WarningResetAnimalData";var ArK="WarningRestart";
var Zr="WarningAutoAction";var ArL="WarningAutoActionNotApplicable";var AVs="WarningNoMenuItem";
var AVt="WarningEnterDemoMode";var AVu="NoAnimalsRegistered";var AF_="MaxNumAnimalsReached";
var AVv="MaxNumRatingsReached";var AF$="MaxNumCalfDeregistrationsReached";var AVw=
"ScanInTransponder";var AVx="WarningScanOverwriteNaisId";var AVy="EarTagNumberTooShort";
var ArM="NoValidCountryCode";var AVz="WarningOutdatedAnimalWeight";var AVA="WarningOutdatedAnimalWeights";
var AGa="WarningWeightEvaluationSingular";var AVB="WarningWeightEvaluationPlural";
var AVC="ScanError";var AVD="ScanNotFound";var AVE="ScannedAnimalNotFound";var AbT=
"ScannedTransponderNotFound";var AVF="AnimalNotFound";var AVG="SuccessUnregister";
var AVH="SuccessUnregisterPerished";var AVI="SuccessCreationNewAnimal";var AGb="SuccessCreationNewAnimals";
var AVJ="AnimalCreationInProgress";var AVK="EvaluationInProgress";var AVL="DataSyncInProgress";
var AVM="AddedToAlarm";var AVN="RemovedFromAlarm";var AVO="AddedToWatch";var AGc=
"RemovedFromWatch";var AVP="AddedToDryOff";var AVQ="RemovedFromDryOff";var AVR="AnimalIdAlreadyExists";
var AGd="AnimalIdAlreadyExistsContinuable";var AGe="MissingAnimalId";var AVS="MissingAnimalIdMother";
var AVT="MissingEartagNumber";var AVU="MissingTransponderId";var AVV="TransponderAlreadyRegistered";
var QZ="TransponderAlreadyRegisteredContinuable";var ArN="HelpAnimalInfoRating";
var AGf="CannotReassignTransponder";var AGg="CannotReassignNaisId";var Anp="WarningResetToDefaultValue";
var Anq="WarningResetThresholds";var AwP="WarningResetTempThresholds";var AVW="UpdateFirmware";
var AGh="UpdateFirmwareBatteryLow";var AVX="ConfirmFirmwareUpdated";var AVY="ConfirmBootloaderUpdated";
var AVZ="QuestionAddAnotherCalfMultiples";var AV0="RemovedAllBirthNoticesPending";
var AV1="RemovedAllPurchasedNoticePending";var AV2="RemovedFromBirthNoticePending";
var AV3="RemovedFromPurchasedNoticePending";var AV4="SuccessClearAnimalLoss";var
AV5="RemovedAnimalBirth";var AV6="RemovedAnimalPurchased";var AV7="WarningNoActionsForAnimalLoss";
var AV8="SuccessLinkTransponder";var AV9="SuccessUnlinkTransponder";var AV_="SuccessLinkNaisId";
var AV$="WarningDataExportHitBirthFailed";var AWa="SuccessDataExportHitBirth";var
AWb="SuccessDataExportHitBirthDownload";var Anr="WarningDataExportHitPurchasedFailed";
var AGi="SuccessDataExportHitPurchased";var AWc="SuccessDataExportHitPurchasedDownload";
var AGj="WarningDataExportAnimalsFailed";var AGk="SuccessDataExportAnimalsRatings";
var Zs="SuccessDataExportAnimalsDownload";var AGl="WarningNoPremisesID";var AWd=
"WarningNoFlashDrivePresent";var AGm="WarningNoBackupPathPresent";var AWe="WarningNoBackupFilePresent";
var AwQ="DemoFunctionNotAvailable";var AWf="WarningImpreciseTimeSetting";var AWg=
"ConfirmationRestoreBackup";var AwR="WarningParsedDateInFutureInvalid";var AWh="WarningParsingDateFailed";
var AWi="WarningParsingNaisIdFailed";var AWj="AnimalId";var AGn="FarmId";var Ans=
"GroupId";var AGo="PersonId";var AWk="Unhandled transponder type: ";var AGp="FDX";
var AGq="HDX";var Akp="HDX (Urban)";var AWl="Unhandled transponder protocol: ";var
Ant="Illegal RatingMode: ";var AWm="Unhandled mass unit: ";var AGr="Max array size is 10";
var AwS="Index out of bounds";var AWn="ERROR: Received more integers than expected!";
var AGs="Unhandled double scan action :";var AGt="Illegal WeightRecordingMode: ";
var AWo="Illegal WeightRecordingScope: ";var AWp="AnimalData";var AWq="Rating";var
AWr="Temperature";var AWs="Weight";var AWt="Alarm infos";var AWu="Control infos";
var AWv="Watch infos";var AWw="Fresh cow infos";var AWx="No transponder infos";var
AWy="Dry cow info";var AWz="No nais id infos";var AWA="Registrations infos";var AGu=
"Unhandled animal list content:";var Zt="Illegal AutoRegistrationMode: ";var AWB=
"Illegal FactoryResetScope: ";var Ahe="??";var AWC="Illegal EaseOfDelivery: ";var
AWD="Illegal Whereabouts: ";var AWE="Illegal breed: ";var AWF="Unisex";var AWG="Illegal animalIdGenerationMethod: ";
var AWH="Ascending";var ArO="Descending";var ArP="Illegal directionOfCountingName: ";
var Anu="Unhandled direction of counting: ";var Ahf="Unhandled German state: ";var
AwT="SH";var Anv="HH";var AWI="NI";var AGv="HB";var AWJ="NW";var AWK="HE";var AWL=
"RP";var AWM="BW";var AWN="BY";var AWO="SL";var AWP="BB";var AWQ="MV";var AWR="SN";
var AWS="ST";var AWT="TH";var AWU="One Range Male Female";var AWV="Two Ranges Male Female";
var ArQ="Illegal EartagAssignmentMode: ";var AWW="Unhandled code set value ";var
ArR="Implement in derived class";var AwU="Illegal HIT-Code: ";var AWX="Illegal ReasonOfLeaving: ";
var AGw="Illegal code: ";var AWY="Undefined";var AGx="Illegal DeviceComponent: ";
var AWZ="Unhandled Device::MotherSelectionFilterMode: ";var AW0="Illegal Device::TimespanDays: ";
var AW1="Not connected";var AW2="Host";var AW3="Device";var AW4="Device CDC";var
AW5="Host MSC";var AW6="Host HID";var AGy="Host CDC";var AW7="Illegal animalIdAutoGenerationMethod: ";
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
AL;if(!this.B8)this.B8=AL;},AMy:function(){return this.B8;},AMC:function(A_k){if(
!!A_k)return A_k.Af;return null;},D0:function(AG7,EE){var Av=this.B8;while(!!Av){
if(Av.ET===AG7){if(EE===1)return Av;else if(Av.Operator===EE)return Av;}Av=Av.Af;
}return null;},QF:function(AL){var Av=this.B8;while(!!Av){if(Av===AL){if(!!Av.AG
)Av.AG.Af=Av.Af;if(!!Av.Af)Av.Af.AG=Av.AG;if(this.B8===Av)this.B8=Av.Af;if(this.
B5===Av)this.B5=Av.AG;Av.Af=null;Av.AG=null;return;}Av=Av.Af;}},Gt:function(){var
Bb=A._NewObject(C.Filter,0);var Av=this.B8;while(!!Av){Bb.C0(Av.Adi());Av=Av.Af;
}return Bb;},_Init:function(aArg){this.__proto__=C.Filter;A.hJ++;},_Done:function(
){this.__proto__=null;A.hJ--;},_ReInit:function(){},_Mark:function(D){var B;if((
B=this.B8)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.B5)&&(B._cycle!=D))B._Mark(
B._cycle=D);if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:
null,_className:"Device::Filter"};C.FilterCriterion={Af:null,AG:null,ET:-1,Operator:
1,AaR:false,Adi:function(){return null;},Gt:function(AL){if(!AL)return;this.ET=AL.
ET;this.Operator=AL.Operator;this.AaR=AL.AaR;},_Init:function(aArg){this.__proto__=
C.FilterCriterion;A.hJ++;},_Done:function(){this.__proto__=null;A.hJ--;},_ReInit:
function(){},_Mark:function(D){var B;if((B=this.Af)&&(B._cycle!=D))B._Mark(B._cycle=
D);if((B=this.AG)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.I)&&(B._cycle!=D
))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:"Device::FilterCriterion"
};C.Int32FilterCriterion={A4:0,Adi:function(){var Av=A._NewObject(C.Int32FilterCriterion
,0);Av.Gt(this);return Av;},Gt:function(AL){C.FilterCriterion.Gt.call(this,AL);var
Av=(C.Int32FilterCriterion.isPrototypeOf(AL)?AL:null);if(!!Av)this.A4=Av.A4;},Initialize:
function(AX,EE,A1,Sz){this.ET=AX;this.Operator=EE;this.A4=A1;this.AaR=Sz;return this;
},_Init:function(aArg){C.FilterCriterion._Init.call(this,aArg);this.__proto__=C.
Int32FilterCriterion;},_className:"Device::Int32FilterCriterion"};C.DeviceClass={
ACn:0,ACm:0,Auz:0,YM:0,PD:null,R3:null,Qu:null,Sj:null,Rt:null,Ao:null,Bq:null,AfI:
null,AmT:null,Pa:null,Atb:A.jm,AutoActions:A.jm,AzS:A.jm,AEX:A.jm,AEY:A.jm,AgX:A.
jm,AFf:A.jm,AFg:A.jm,AzT:A.jm,AFe:A.jm,AFi:A.jm,AzM:A.jm,AzN:A.jm,Aaa:100,Kj:0,AKT:
75,Zb:3600,ARC:0,FQ:5,Fx:0,IK:50000,P8:0,AEa:0,Aiu:0,ApJ:0,ApI:0,APy:1,APx:1,Ai7:
0,APz:1,Av_:0,AeC:0,Apy:10,ASh:5,ACe:60,Auu:0,WhereAbouts:0,U4:0,Ag6:0,Av4:3,AAP:
0,AlD:0,AfK:1,Akd:0,Aa6:0,Apc:0,APL:12,ALL:11,Breed:0,EartagNrAssignmentMode:0,AtB:
0,AAI:0,AAH:0,Ia:5,AzL:2,Ape:0,APQ:8,AMp:2,AS2:0,D3:0,AJ3:0,JD:0,Gender:2,WeightRecordingScope:
1,WeightRecordingMode:1,AnimalType:0,MassUnit:0,AutoRegistrationMode:0,RatingMode:
0,SyncState:0,OverlayMenu:0,TemperatureUnit:0,Language:0,MeasureState:0,ScanState:
0,Ku:3,AdM:true,APk:false,Aly:true,AlZ:false,AlV:true,Hv:false,ASK:false,AlW:false
,AS0:false,Arq:false,ACl:false,AlK:false,UpdateActiveScreen:function(AI){if(this.
Ku===AI)return;this.Ku=AI;A.aat([this,this.ACz,this.A9A],0);},YA:function(E){if(
this.K&&this.K.YA)return this.K.YA.apply(this,arguments);else return C.DeviceClass.
BqG.apply(this,arguments);},BqG:function(E){},A9A:function(An){this.YA(An);},UpdateBatteryChargeState:
function(AI){if(this.Aaa===AI)return;this.Aaa=AI;A.aat([this,this.AuB,this.Aw0],
0);},AuY:function(E){if(this.K&&this.K.AuY)return this.K.AuY.apply(this,arguments
);else return C.DeviceClass.BqS.apply(this,arguments);},BqS:function(E){A.aa8("%s"
,BH);},Aw0:function(An){this.AuY(An);},UpdateChargeActive:function(AI){if(this.AlK===
AI)return;this.AlK=AI;A.aat([this,this.AuE,this.Aw1],0);},ACZ:function(E){if(this.
K&&this.K.ACZ)return this.K.ACZ.apply(this,arguments);else return C.DeviceClass.
BqY.apply(this,arguments);},BqY:function(E){A.aa8("%s",EV);},Aw1:function(An){this.
ACZ(An);},UpdateScanState:function(AI){var B;if(this.ScanState===AI)return;this.
ScanState=AI;A.aat([this,this.AQo,this.AXF],0);A._GetAutoObject(C.Helper).BwP(this
);},AqD:function(E){if(this.K&&this.K.AqD)return this.K.AqD.apply(this,arguments
);else return C.DeviceClass.BrC.apply(this,arguments);},BrC:function(E){A.aa8("%s"
,GT);},AXF:function(An){this.AqD(An);},UpdateMeasureState:function(AI){if(this.MeasureState===
AI)return;this.MeasureState=AI;A.aat([this,this.ACF,this.AGO],0);},Avk:function(
E){if(this.K&&this.K.Avk)return this.K.Avk.apply(this,arguments);else return C.DeviceClass.
Brk.apply(this,arguments);},Brk:function(E){A.aa8("%s",Jt);},AGO:function(An){this.
Avk(An);},UpdateTempValue:function(AI){if(this.Kj===AI)return;this.Kj=AI;A.aat([
this,this.ACI,this.AGQ],0);},Avu:function(E){if(this.K&&this.K.Avu)return this.K.
Avu.apply(this,arguments);else return C.DeviceClass.BrI.apply(this,arguments);},
BrI:function(E){A.aa8("%s",IL);},AGQ:function(An){this.Avu(An);},AmI:function(E){
if(this.K&&this.K.AmI)return this.K.AmI.apply(this,arguments);else return C.DeviceClass.
Brf.apply(this,arguments);},Brf:function(E){},A9P:function(An){this.AmI(An);},Avv:
function(E){if(this.K&&this.K.Avv)return this.K.Avv.apply(this,arguments);else return C.
DeviceClass.BrJ.apply(this,arguments);},BrJ:function(E){},ArV:function(An){this.
Avv(An);},ACX:function(E){if(this.K&&this.K.ACX)return this.K.ACX.apply(this,arguments
);else return C.DeviceClass.BqX.apply(this,arguments);},BqX:function(E){},A9I:function(
An){this.ACX(An);},ADt:function(E){if(this.K&&this.K.ADt)return this.K.ADt.apply(
this,arguments);else return C.DeviceClass.Brm.apply(this,arguments);},Brm:function(
E){},AXy:function(An){this.ADt(An);},UpdateMonitoring:function(AI){if(this.ACl===
AI)return;this.ACl=AI;A.aat([this,this.AQe,this.AXy],0);},UpdateDataTable:function(
A_l){var B;switch(A_l){case 0:A.ow([B=this.Ao,B.Ajv],this);break;case 1:A.ow([B=
this.Bq,B.Ajv],this);break;case 3:A.ow([B=this.AfI,B.Ajv],this);break;case 4:A.ow([
B=this.Pa,B.Ajv],this);break;case 2:A.aa8("%s",OK);break;default:A.aa8("%s%e",PJ
,A_l);}},Av3:function(){if(this.K&&this.K.Av3)return this.K.Av3.apply(this,arguments
);else return C.DeviceClass.Bsb.apply(this,arguments);},Bsb:function(){},Ag0:function(
){if(this.K&&this.K.Ag0)return this.K.Ag0.apply(this,arguments);else return C.DeviceClass.
Bse.apply(this,arguments);},Bse:function(){},Aes:function(){if(this.K&&this.K.Aes
)return this.K.Aes.apply(this,arguments);else return C.DeviceClass.Bsc.apply(this
,arguments);},Bsc:function(){},Am3:function(){if(this.K&&this.K.Am3)return this.
K.Am3.apply(this,arguments);else return C.DeviceClass.Bsf.apply(this,arguments);
},Bsf:function(){},UpdateLanguage:function(AI){if(this.Language===AI)return;this.
Language=AI;switch(AI){case 14:A._SetLanguage(1);break;case 13:A._SetLanguage(2);
break;case 6:A._SetLanguage(3);break;case 11:A._SetLanguage(4);break;case 0:A._SetLanguage(
0);break;case 10:A._SetLanguage(5);break;case 12:A._SetLanguage(6);break;case 5:
A._SetLanguage(7);break;case 3:A._SetLanguage(8);break;case 1:A._SetLanguage(9);
break;case 8:A._SetLanguage(10);break;case 4:A._SetLanguage(11);break;case 15:A.
_SetLanguage(13);break;case 9:A._SetLanguage(15);break;case 2:A._SetLanguage(16);
break;case 7:A._SetLanguage(17);break;case 16:A._SetLanguage(18);break;default:A.
_SetLanguage(0);}A.aat([this,this.A5L,this.A9P],0);},UpdateTemperatureUnit:function(
AI){if(this.TemperatureUnit===AI)return;this.TemperatureUnit=AI;A.aat([this,this.
Aqc,this.ArV],0);},UpdateBrightness:function(AI){if(this.AKT===AI)return;this.AKT=
AI;A.aat([this,this.A5A,this.A9I],0);},SetSystemTime:function(Ahp){if(this.K&&this.
K.SetSystemTime)return this.K.SetSystemTime.apply(this,arguments);else return C.
DeviceClass.Br$.apply(this,arguments);},Br$:function(Ahp){},AvZ:function(){if(this.
K&&this.K.AvZ)return this.K.AvZ.apply(this,arguments);else return C.DeviceClass.
A9q.apply(this,arguments);},A9q:function(){},AEn:function(){if(this.K&&this.K.AEn
)return this.K.AEn.apply(this,arguments);else return C.DeviceClass.A9o.apply(this
,arguments);},A9o:function(){},BkR:function(){},UpdateOverlayMenu:function(AI){if(
this.OverlayMenu===AI)return;this.OverlayMenu=AI;A.aat([this,this.AuQ,this.Aw9],
0);},Cm:function(E){if(this.K&&this.K.Cm)return this.K.Cm.apply(this,arguments);
else return C.DeviceClass.Brx.apply(this,arguments);},Brx:function(E){},Aw9:function(
An){this.Cm(An);},AvA:function(E){if(this.K&&this.K.AvA)return this.K.AvA.apply(
this,arguments);else return C.DeviceClass.BrS.apply(this,arguments);},BrS:function(
E){},A9Y:function(An){this.AvA(An);},UpdateUnderTemp:function(AI){if(this.Zb===AI
)return;this.Zb=AI;A.aat([this,this.A59,this.A9Y],0);},UpdateSyncState:function(
AI){if(this.SyncState===AI)return;this.SyncState=AI;A.aat([this,this.AQq,this.AXH
],0);},Abm:function(E){if(this.K&&this.K.Abm)return this.K.Abm.apply(this,arguments
);else return C.DeviceClass.BrH.apply(this,arguments);},BrH:function(E){A.aa8("%s"
,N1);},AXH:function(An){this.Abm(An);},AA$:function(){if(this.K&&this.K.AA$)return this.
K.AA$.apply(this,arguments);else return C.DeviceClass.Bqy.apply(this,arguments);
},Bqy:function(){return A.jm;},UpdatePopup:function(Kn,AYo,AYk,AYr){this.A5(Kn,AYo
,AYk,AYr,[this,this.Bwx]);},PopupStateChanged:function(Kn,Ae){if(this.K&&this.K.
PopupStateChanged)return this.K.PopupStateChanged.apply(this,arguments);else return C.
DeviceClass.Br4.apply(this,arguments);},Br4:function(Kn,Ae){},ADW:function(E){if(
this.K&&this.K.ADW)return this.K.ADW.apply(this,arguments);else return C.DeviceClass.
BrU.apply(this,arguments);},BrU:function(E){},A9Z:function(An){this.ADW(An);},UpdateVibrationOnKeypressEnabled:
function(AI){if(this.Arq===AI)return;this.Arq=AI;A.aat([this,this.A5_,this.A9Z],
0);},Ad8:function(E){if(this.K&&this.K.Ad8)return this.K.Ad8.apply(this,arguments
);else return C.DeviceClass.BrT.apply(this,arguments);},BrT:function(E){},AGR:function(
An){this.Ad8(An);},UpdateVibrationOn:function(A_N){if(this.AS0===A_N)return;this.
AS0=A_N;A.aat([this,this.ACJ,this.AGR],0);},A5:function(Kn,AYo,AYk,AYr,BtG){var Afy=
A._NewObject(C.PopupContext,0);Afy.Id=Kn;Afy.Show=AYo;Afy.AjQ=AYk;Afy.Aj$=AYr;Afy.
AD5=BtG;this.AmT.Trigger(Afy,false);},Bwx:function(H){var Ar=(C.PopupContext.isPrototypeOf(
H)?H:null);if(!!Ar)this.PopupStateChanged(Ar.Id,Ar.PopupState);},Avr:function(E){
if(this.K&&this.K.Avr)return this.K.Avr.apply(this,arguments);else return C.DeviceClass.
BrB.apply(this,arguments);},BrB:function(E){},AXE:function(An){this.Avr(An);},UpdateRatingMode:
function(AI){if(this.RatingMode===AI)return;this.RatingMode=AI;A.aat([this,this.
AQn,this.AXE],0);},Ad0:function(E){if(this.K&&this.K.Ad0)return this.K.Ad0.apply(
this,arguments);else return C.DeviceClass.Bq9.apply(this,arguments);},Bq9:function(
E){},ArU:function(An){this.Ad0(An);},UpdateFlashLightOn:function(A_t){if(this.AlW===
A_t)return;this.AlW=A_t;A.aat([this,this.Ap$,this.ArU],0);},VO:function(E){if(this.
K&&this.K.VO)return this.K.VO.apply(this,arguments);else return C.DeviceClass.BrM.
apply(this,arguments);},BrM:function(E){},AXI:function(An){this.VO(An);},UpdateTopLightOn:
function(A_I){if(this.ASK===A_I)return;this.ASK=A_I;A.aat([this,this.AQs,this.AXI
],0);},YH:function(E){if(this.K&&this.K.YH)return this.K.YH.apply(this,arguments
);else return C.DeviceClass.BrA.apply(this,arguments);},BrA:function(E){},Bsv:function(
An){this.YH(An);},UpdateRGBTopLight:function(A_D){if(this.ARC===A_D)return;this.
ARC=A_D;A.aat([this,this.BhG,this.Bsv],0);},AuX:function(E){if(this.K&&this.K.AuX
)return this.K.AuX.apply(this,arguments);else return C.DeviceClass.BqR.apply(this
,arguments);},BqR:function(E){},Bsn:function(An){this.AuX(An);},UpdateAutoRegistrationMode:
function(A_h){if(this.AutoRegistrationMode===A_h)return;this.AutoRegistrationMode=
A_h;A.aat([this,this.Bg7,this.Bsn],0);},AqE:function(E){if(this.K&&this.K.AqE)return this.
K.AqE.apply(this,arguments);else return C.DeviceClass.BrD.apply(this,arguments);
},BrD:function(E){A.aa8("%s",CJ);},AXG:function(An){this.AqE(An);},UpdateScanTransponder:
function(Kn,A_L,A_K){if(((this.PD.Id===Kn)&&(this.PD.TransponderType===A_L))&&(this.
PD.TransponderProtocol===A_K))return;this.PD.OnSetId(Kn);this.PD.ARf(A_L);this.PD.
ARe(A_K);A.aat([this,this.AQp,this.AXG],0);},Pz:function(E){if(this.K&&this.K.Pz
)return this.K.Pz.apply(this,arguments);else return C.DeviceClass.Bq1.apply(this
,arguments);},Bq1:function(E){},AbU:function(An){this.Pz(An);},UpdateDigitsID:function(
A_p){if(this.FQ===A_p)return;this.FQ=A_p;A.aat([this,this.Aa_,this.AbU],0);},Qz:
function(E){if(this.K&&this.K.Qz)return this.K.Qz.apply(this,arguments);else return C.
DeviceClass.Brw.apply(this,arguments);},Brw:function(E){},AbV:function(An){this.
Qz(An);},UpdateOffsetID:function(A_A){if(this.Fx===A_A)return;this.Fx=A_A;A.aat([
this,this.Aa$,this.AbV],0);},AD0:function(E){if(this.K&&this.K.AD0)return this.K.
AD0.apply(this,arguments);else return C.DeviceClass.Br1.apply(this,arguments);},
Br1:function(E){A.aa8("%s",Fn);},AGS:function(An){this.AD0(An);},UpdateWeightValue:
function(AI){if(this.IK===AI)return;this.IK=AI;A.aat([this,this.ACK,this.AGS],0);
},Avi:function(E){if(this.K&&this.K.Avi)return this.K.Avi.apply(this,arguments);
else return C.DeviceClass.Bri.apply(this,arguments);},Bri:function(E){},AXx:function(
An){this.Avi(An);},UpdateMassUnit:function(AI){if(this.MassUnit===AI)return;this.
MassUnit=AI;A.aat([this,this.AQd,this.AXx],0);},Aqf:function(E){if(this.K&&this.
K.Aqf)return this.K.Aqf.apply(this,arguments);else return C.DeviceClass.A9k.apply(
this,arguments);},A9k:function(E){},A9x:function(An){this.Aqf(An);},Aqg:function(
E){if(this.K&&this.K.Aqg)return this.K.Aqg.apply(this,arguments);else return C.DeviceClass.
A9l.apply(this,arguments);},A9l:function(E){},AXq:function(An){this.Aqg(An);},UpdateActiveActions:
function(AI){if(this.P8===AI)return;this.P8=AI;A.aat([this,this.A5k,this.A9x],0);
},UpdateActiveActionsOrder:function(AI){if(this.Atb===AI)return;this.Atb=AI;A.aat([
this,this.AP1,this.AXq],0);},Abc:function(E){if(this.K&&this.K.Abc)return this.K.
Abc.apply(this,arguments);else return C.DeviceClass.A9m.apply(this,arguments);},
A9m:function(E){},A9G:function(An){this.Abc(An);},UpdateAutoActions:function(AI){
if(this.AutoActions===AI)return;this.AutoActions=AI;A.aat([this,this.A5w,this.A9G
],0);},AEO:function(){if(this.K&&this.K.AEO)return this.K.AEO.apply(this,arguments
);else return C.DeviceClass.Bsd.apply(this,arguments);},Bsd:function(){},Arg:function(
){if(this.K&&this.K.Arg)return this.K.Arg.apply(this,arguments);else return C.DeviceClass.
Bsh.apply(this,arguments);},Bsh:function(){},DW:function(E){if(this.K&&this.K.DW
)return this.K.DW.apply(this,arguments);else return C.DeviceClass.BqO.apply(this
,arguments);},BqO:function(E){},Bsm:function(An){this.DW(An);},UpdateAnimalType:
function(Ee){if(this.AnimalType===Ee)return;this.AnimalType=Ee;A.aat([this,this.
Py,this.Bsm],0);},AvB:function(E){if(this.K&&this.K.AvB)return this.K.AvB.apply(
this,arguments);else return C.DeviceClass.BrZ.apply(this,arguments);},BrZ:function(
E){},A94:function(An){this.AvB(An);},UpdateWeightRecordingMode:function(A_P){if(
this.WeightRecordingMode===A_P)return;this.WeightRecordingMode=A_P;A.aat([this,this.
A6g,this.A94],0);},ADB:function(E){if(this.K&&this.K.ADB)return this.K.ADB.apply(
this,arguments);else return C.DeviceClass.Bry.apply(this,arguments);},Bry:function(
E){A.aa8("%s",Nd);},AXC:function(An){this.ADB(An);},UpdatePredictedTempValue:function(
AI){if(this.AEa===AI)return;this.AEa=AI;A.aat([this,this.AQk,this.AXC],0);},Se:function(
L0){if(this.K&&this.K.Se)return this.K.Se.apply(this,arguments);else return C.DeviceClass.
Br_.apply(this,arguments);},Br_:function(L0){},AC5:function(E){if(this.K&&this.K.
AC5)return this.K.AC5.apply(this,arguments);else return C.DeviceClass.Bq0.apply(
this,arguments);},Bq0:function(E){},AGM:function(An){this.AC5(An);},UpdateDemoMode:
function(AI){if(this.Hv===AI)return;this.Hv=AI;A.aat([this,this.ACD,this.AGM],0);
},ACO:function(E){if(this.K&&this.K.ACO)return this.K.ACO.apply(this,arguments);
else return C.DeviceClass.BqH.apply(this,arguments);},BqH:function(E){},A9B:function(
An){this.ACO(An);},UpdateAgeRegistration:function(A_z){if(this.Aiu===A_z)return;
this.Aiu=A_z;A.aat([this,this.A5p,this.A9B],0);},AvC:function(E){if(this.K&&this.
K.AvC)return this.K.AvC.apply(this,arguments);else return C.DeviceClass.Br0.apply(
this,arguments);},Br0:function(E){},A95:function(An){this.AvC(An);},UpdateWeightRecordingScope:
function(A_E){if(this.WeightRecordingScope===A_E)return;this.WeightRecordingScope=
A_E;A.aat([this,this.A6h,this.A95],0);},JM:function(E){if(this.K&&this.K.JM)return this.
K.JM.apply(this,arguments);else return C.DeviceClass.Brb.apply(this,arguments);}
,Brb:function(E){},AXw:function(An){this.JM(An);},UpdateGender:function(LY){if(this.
Gender===LY)return;this.Gender=LY;A.aat([this,this.VJ,this.AXw],0);},Aqv:function(
E){if(this.K&&this.K.Aqv)return this.K.Aqv.apply(this,arguments);else return C.DeviceClass.
Brd.apply(this,arguments);},Brd:function(E){},Aw5:function(An){this.Aqv(An);},UpdateIDLastUsedMale:
function(Q0){if(this.ApJ===Q0)return;this.ApJ=Q0;A.aat([this,this.AuK,this.Aw5],
0);},Aqu:function(E){if(this.K&&this.K.Aqu)return this.K.Aqu.apply(this,arguments
);else return C.DeviceClass.Brc.apply(this,arguments);},Brc:function(E){},Aw4:function(
An){this.Aqu(An);},UpdateIDLastUsedFemale:function(Q0){if(this.ApI===Q0)return;this.
ApI=Q0;A.aat([this,this.AuJ,this.Aw4],0);},Abb:function(E){if(this.K&&this.K.Abb
)return this.K.Abb.apply(this,arguments);else return C.DeviceClass.BqM.apply(this
,arguments);},BqM:function(E){},AGK:function(An){this.Abb(An);},UpdateAnimalListContent:
function(AI){if(this.JD===AI)return;this.JD=AI;A.aat([this,this.ACA,this.AGK],0);
},ACQ:function(E){if(this.K&&this.K.ACQ)return this.K.ACQ.apply(this,arguments);
else return C.DeviceClass.BqI.apply(this,arguments);},BqI:function(E){},A9C:function(
An){this.ACQ(An);},UpdateAlarmListAction:function(AI){if(this.AJ3===AI)return;this.
AJ3=AI;A.aat([this,this.A5r,this.A9C],0);},AC8:function(E){if(this.K&&this.K.AC8
)return this.K.AC8.apply(this,arguments);else return C.DeviceClass.Bq8.apply(this
,arguments);},Bq8:function(E){},A9L:function(An){this.AC8(An);},UpdateFlashLightInMeasureState:
function(A_u){if(this.AlV===A_u)return;this.AlV=A_u;A.aat([this,this.A5D,this.A9L
],0);},AdY:function(E){if(this.K&&this.K.AdY)return this.K.AdY.apply(this,arguments
);else return C.DeviceClass.BqL.apply(this,arguments);},BqL:function(E){},AXs:function(
An){this.AdY(An);},UpdateAnimalInfoContent:function(AI){if(this.D3===AI)return;this.
D3=AI;A.aat([this,this.AP3,this.AXs],0);},ADZ:function(E){if(this.K&&this.K.ADZ)
return this.K.ADZ.apply(this,arguments);else return C.DeviceClass.BrV.apply(this
,arguments);},BrV:function(E){},A90:function(An){this.ADZ(An);},UpdateWatchListAction:
function(AI){if(this.AS2===AI)return;this.AS2=AI;A.aat([this,this.A6c,this.A90],
0);},AC9:function(E){if(this.K&&this.K.AC9)return this.K.AC9.apply(this,arguments
);else return C.DeviceClass.Bq_.apply(this,arguments);},Bq_:function(E){},A9N:function(
An){this.AC9(An);},UpdateFreshCowListAction:function(AI){if(this.AMp===AI)return;
this.AMp=AI;A.aat([this,this.A5F,this.A9N],0);},AqZ:function(H){if(this.K&&this.
K.AqZ)return this.K.AqZ.apply(this,arguments);else return C.DeviceClass.Br5.apply(
this,arguments);},Br5:function(H){},BBU:function(s){this.AqZ(s);},Aq1:function(H
){if(this.K&&this.K.Aq1)return this.K.Aq1.apply(this,arguments);else return C.DeviceClass.
Br7.apply(this,arguments);},Br7:function(H){},BBW:function(s){this.Aq1(s);},AuV:
function(E){if(this.K&&this.K.AuV)return this.K.AuV.apply(this,arguments);else return C.
DeviceClass.BqP.apply(this,arguments);},BqP:function(E){},A9E:function(An){this.
AuV(An);},AqF:function(E){if(this.K&&this.K.AqF)return this.K.AqF.apply(this,arguments
);else return C.DeviceClass.BrK.apply(this,arguments);},BrK:function(E){},A9V:function(
An){this.AqF(An);},AqG:function(E){if(this.K&&this.K.AqG)return this.K.AqG.apply(
this,arguments);else return C.DeviceClass.BrL.apply(this,arguments);},BrL:function(
E){},A9W:function(An){this.AqG(An);},Aq3:function(H){if(this.K&&this.K.Aq3)return this.
K.Aq3.apply(this,arguments);else return C.DeviceClass.Br8.apply(this,arguments);
},Br8:function(H){},BBX:function(s){this.Aq3(s);},UpdateTemperaturesLowString:function(
AI){if(this.AEY===AI)return;this.AEY=AI;A.aat([this,this.A55,this.A9W],0);},UpdateTemperaturesHighString:
function(AI){if(this.AEX===AI)return;this.AEX=AI;A.aat([this,this.A54,this.A9V],
0);},UpdateAnimalTypesString:function(AI){if(this.AzS===AI)return;this.AzS=AI;A.
aat([this,this.A5u,this.A9E],0);},ADw:function(E){if(this.K&&this.K.ADw)return this.
K.ADw.apply(this,arguments);else return C.DeviceClass.Brv.apply(this,arguments);
},Brv:function(E){},AXA:function(An){this.ADw(An);},UpdateNoTransponderListAction:
function(AI){if(this.APQ===AI)return;this.APQ=AI;A.aat([this,this.AQh,this.AXA],
0);},Avd:function(E){if(this.K&&this.K.Avd)return this.K.Avd.apply(this,arguments
);else return C.DeviceClass.Bra.apply(this,arguments);},Bra:function(E){},Bsr:function(
An){this.Avd(An);},UpdateFreshCowsHideMeasured:function(AI){if(this.AlZ===AI)return;
this.AlZ=AI;A.aat([this,this.Bho,this.Bsr],0);},Aqz:function(E){if(this.K&&this.
K.Aqz)return this.K.Aqz.apply(this,arguments);else return C.DeviceClass.Brs.apply(
this,arguments);},Brs:function(E){},A9S:function(An){this.Aqz(An);},UpdateNaisIdLastUsedMale:
function(Wt){if(this.ACn===Wt)return;this.ACn=Wt;A.aat([this,this.A5S,this.A9S],
0);},Aqy:function(E){if(this.K&&this.K.Aqy)return this.K.Aqy.apply(this,arguments
);else return C.DeviceClass.Brr.apply(this,arguments);},Brr:function(E){},A9R:function(
An){this.Aqy(An);},UpdateNaisIdLastUsedFemale:function(Wt){if(this.ACm===Wt)return;
this.ACm=Wt;A.aat([this,this.A5R,this.A9R],0);},Avn:function(E){if(this.K&&this.
K.Avn)return this.K.Avn.apply(this,arguments);else return C.DeviceClass.Brp.apply(
this,arguments);},Brp:function(E){},Aw7:function(An){this.Avn(An);},UpdateNaisIdIncrementMale:
function(Aky){if(this.APy===Aky)return;this.APy=Aky;A.aat([this,this.AuN,this.Aw7
],0);},Avm:function(E){if(this.K&&this.K.Avm)return this.K.Avm.apply(this,arguments
);else return C.DeviceClass.Bro.apply(this,arguments);},Bro:function(E){},Aw6:function(
An){this.Avm(An);},UpdateNaisIdIncrementFemale:function(Aky){if(this.APx===Aky)return;
this.APx=Aky;A.aat([this,this.AuM,this.Aw6],0);},UpdateFirmware:function(){if(this.
K&&this.K.UpdateFirmware)return this.K.UpdateFirmware.apply(this,arguments);else
return C.DeviceClass.A9r.apply(this,arguments);},A9r:function(){},AmE:function(E
){if(this.K&&this.K.AmE)return this.K.AmE.apply(this,arguments);else return C.DeviceClass.
BqU.apply(this,arguments);},BqU:function(E){},A9H:function(An){this.AmE(An);},UpdateBootloaderMessage:
function(AI){if(this.Ape===AI)return;this.Ape=AI;A.aat([this,this.A5z,this.A9H],
0);},ACM:function(E){if(this.K&&this.K.ACM)return this.K.ACM.apply(this,arguments
);else return C.DeviceClass.BqC.apply(this,arguments);},BqC:function(E){},A9w:function(
An){this.ACM(An);},UpdateActionListAction:function(AI){if(this.AzL===AI)return;this.
AzL=AI;A.aat([this,this.A5j,this.A9w],0);},AuT:function(E){if(this.K&&this.K.AuT
)return this.K.AuT.apply(this,arguments);else return C.DeviceClass.BqD.apply(this
,arguments);},BqD:function(E){},Bsl:function(An){this.AuT(An);},UpdateActionListHideMeasured:
function(AI){if(this.Aly===AI)return;this.Aly=AI;A.aat([this,this.Bg3,this.Bsl],
0);},TC:function(E){if(this.K&&this.K.TC)return this.K.TC.apply(this,arguments);
else return C.DeviceClass.BqK.apply(this,arguments);},BqK:function(E){},Anx:function(
An){this.TC(An);},UpdateAnimalIdGenerationMethod:function(A_U){if(this.Ia===A_U)
return;this.Ia=A_U;A.aat([this,this.Amv,this.Anx],0);},Au7:function(E){if(this.K&&
this.K.Au7)return this.K.Au7.apply(this,arguments);else return C.DeviceClass.Bq2.
apply(this,arguments);},Bq2:function(E){},AXu:function(An){this.Au7(An);},UpdateDirectionOfCountingFemale:
function(Akr){if(this.AAH===Akr)return;this.AAH=Akr;A.aat([this,this.AP8,this.AXu
],0);},Au8:function(E){if(this.K&&this.K.Au8)return this.K.Au8.apply(this,arguments
);else return C.DeviceClass.Bq3.apply(this,arguments);},Bq3:function(E){},AXv:function(
An){this.Au8(An);},UpdateDirectionOfCountingMale:function(Akr){if(this.AAI===Akr
)return;this.AAI=Akr;A.aat([this,this.AP9,this.AXv],0);},Au9:function(E){if(this.
K&&this.K.Au9)return this.K.Au9.apply(this,arguments);else return C.DeviceClass.
Bq4.apply(this,arguments);},Bq4:function(E){},Aw2:function(An){this.Au9(An);},UpdateDirectionOfCountingUnisex:
function(Akr){if(this.AtB===Akr)return;this.AtB=Akr;A.aat([this,this.AuH,this.Aw2
],0);},Aqw:function(E){if(this.K&&this.K.Aqw)return this.K.Aqw.apply(this,arguments
);else return C.DeviceClass.Bre.apply(this,arguments);},Bre:function(E){},Any:function(
An){this.Aqw(An);},UpdateIDLastUsedUnisex:function(Q0){if(this.Ai7===Q0)return;this.
Ai7=Q0;A.aat([this,this.Amy,this.Any],0);},AqA:function(E){if(this.K&&this.K.AqA
)return this.K.AqA.apply(this,arguments);else return C.DeviceClass.Brt.apply(this
,arguments);},Brt:function(E){},AXz:function(An){this.AqA(An);},UpdateNaisIdLastUsedUnisex:
function(Wt){if(this.Auz===Wt)return;this.Auz=Wt;A.aat([this,this.AQf,this.AXz],
0);},Avo:function(E){if(this.K&&this.K.Avo)return this.K.Avo.apply(this,arguments
);else return C.DeviceClass.Brq.apply(this,arguments);},Brq:function(E){},Aw8:function(
An){this.Avo(An);},UpdateNaisIdIncrementUnisex:function(Aky){if(this.APz===Aky)return;
this.APz=Aky;A.aat([this,this.AuO,this.Aw8],0);},AjB:function(E){if(this.K&&this.
K.AjB)return this.K.AjB.apply(this,arguments);else return C.DeviceClass.Bq6.apply(
this,arguments);},Bq6:function(E){},Aw3:function(An){this.AjB(An);},UpdateEartagNrAssignmentMode:
function(Aks){if(this.EartagNrAssignmentMode===Aks)return;this.EartagNrAssignmentMode=
Aks;A.aat([this,this.AuI,this.Aw3],0);},NP:function(E){if(this.K&&this.K.NP)return this.
K.NP.apply(this,arguments);else return C.DeviceClass.BqW.apply(this,arguments);}
,BqW:function(E){},Bsp:function(An){this.NP(An);},UpdateBreed:function(Ab2){if(this.
Breed===Ab2)return;this.Breed=Ab2;A.aat([this,this.AuD,this.Bsp],0);},ADq:function(
E){if(this.K&&this.K.ADq)return this.K.ADq.apply(this,arguments);else return C.DeviceClass.
Brl.apply(this,arguments);},Brl:function(E){},Bst:function(An){this.ADq(An);},UpdateMiddlewareVersions:
function(PO,AYg,AYh,AYn,AX7){this.R3.OnSetTimestamp(PO);this.R3.ADl(AYg);this.R3.
ADs(AYh);this.R3.ADE(AYn);this.R3.AC3(AX7);A.aat([this,this.BhB,this.Bst],0);},ADk:
function(E){if(this.K&&this.K.ADk)return this.K.ADk.apply(this,arguments);else return C.
DeviceClass.Brg.apply(this,arguments);},Brg:function(E){},Bss:function(An){this.
ADk(An);},UpdateMainboardVersions:function(PO,AYe,AYf,AYd,AYt,AYu,AYs){this.Qu.OnSetTimestamp(
PO);this.Qu.ADi(AYe);this.Qu.ADj(AYf);this.Qu.ADh(AYd);this.Qu.ADR(AYt);this.Qu.
ADS(AYu);this.Qu.ADQ(AYs);A.aat([this,this.Bhz,this.Bss],0);},ADT:function(E){if(
this.K&&this.K.ADT)return this.K.ADT.apply(this,arguments);else return C.DeviceClass.
BrN.apply(this,arguments);},BrN:function(E){},Bsz:function(An){this.ADT(An);},UpdateTorchboardVersions:
function(PO,AYe,AYf,AYd,AYt,AYu,AYs){this.Sj.OnSetTimestamp(PO);this.Sj.ADi(AYe);
this.Sj.ADj(AYf);this.Sj.ADh(AYd);this.Sj.ADR(AYt);this.Sj.ADS(AYu);this.Sj.ADQ(
AYs);A.aat([this,this.BhY,this.Bsz],0);},ACT:function(E){if(this.K&&this.K.ACT)return this.
K.ACT.apply(this,arguments);else return C.DeviceClass.BqV.apply(this,arguments);
},BqV:function(E){},Bso:function(An){this.ACT(An);},UpdateBootloaderVersions:function(
PO,AYg,AYh,AYn,AX7){this.Rt.OnSetTimestamp(PO);this.Rt.ADl(AYg);this.Rt.ADs(AYh);
this.Rt.ADE(AYn);this.Rt.AC3(AX7);A.aat([this,this.Bg9,this.Bso],0);},AC6:function(
E){if(this.K&&this.K.AC6)return this.K.AC6.apply(this,arguments);else return C.DeviceClass.
Bq5.apply(this,arguments);},Bq5:function(E){},A9K:function(An){this.AC6(An);},UpdateDryCowListAction:
function(AI){if(this.ALL===AI)return;this.ALL=AI;A.aat([this,this.A5B,this.A9K],
0);},AHI:function(AX9){if(this.K&&this.K.AHI)return this.K.AHI.apply(this,arguments
);else return C.DeviceClass.BsL.apply(this,arguments);},BsL:function(AX9){return false;
},ADv:function(E){if(this.K&&this.K.ADv)return this.K.ADv.apply(this,arguments);
else return C.DeviceClass.Bru.apply(this,arguments);},Bru:function(E){},A9T:function(
An){this.ADv(An);},UpdateNoNaisIdListAction:function(AI){if(this.APL===AI)return;
this.APL=AI;A.aat([this,this.A5T,this.A9T],0);},ACS:function(E){if(this.K&&this.
K.ACS)return this.K.ACS.apply(this,arguments);else return C.DeviceClass.BqT.apply(
this,arguments);},BqT:function(E){},AGL:function(An){this.ACS(An);},UpdateBirthListView:
function(AI){if(this.Apc===AI)return;this.Apc=AI;A.aat([this,this.ACB,this.AGL],
0);},BatchResetBirthNoticePending:function(){var B4=A._NewObject(C.Animal,0);var
P;var Ah5=0;var Ack=A._GetAutoObject(C.Device).Ao.Filter;var Bb=A._GetAutoObject(
C.Helper).AMv();A._GetAutoObject(C.Device).Ao.Bl(Bb);for(P=0;P<A._GetAutoObject(
C.Device).Ao.Cj();P++){B4.EK(P,A._GetAutoObject(C.Device).Ao);B4.Ad3(false);B4.Cr(
A._GetAutoObject(C.Device).Ao);Ah5++;}A._GetAutoObject(C.Device).Ao.Bl(Ack);return Ah5;
},UpdateTransferProgress:function(AI){if(this.Av_===AI)return;this.Av_=AI;A.aat([
this,this.AQt,this.AXJ],0);},ADU:function(E){if(this.K&&this.K.ADU)return this.K.
ADU.apply(this,arguments);else return C.DeviceClass.BrO.apply(this,arguments);},
BrO:function(E){A.aa8("%s",OL);},AXJ:function(An){this.ADU(An);},UpdateTransferTarget:
function(AI){if(this.AeC===AI)return;this.AeC=AI;A.aat([this,this.A58,this.A9X],
0);},AqH:function(E){if(this.K&&this.K.AqH)return this.K.AqH.apply(this,arguments
);else return C.DeviceClass.BrP.apply(this,arguments);},BrP:function(E){A.aa8("%s"
,KH);},A9X:function(An){this.AqH(An);},Arf:function(){if(this.K&&this.K.Arf)return this.
K.Arf.apply(this,arguments);else return C.DeviceClass.Bsg.apply(this,arguments);
},Bsg:function(){},Avq:function(E){if(this.K&&this.K.Avq)return this.K.Avq.apply(
this,arguments);else return C.DeviceClass.Brz.apply(this,arguments);},Brz:function(
E){},AXD:function(An){this.Avq(An);},UpdatePremisesID:function(Q0){if(this.YM===
Q0)return;this.YM=Q0;A.aat([this,this.AQl,this.AXD],0);},Avl:function(E){if(this.
K&&this.K.Avl)return this.K.Avl.apply(this,arguments);else return C.DeviceClass.
Brn.apply(this,arguments);},Brn:function(E){},AGP:function(An){this.Avl(An);},UpdateMotherSelectionDriedOffFilter:
function(AI){if(this.Aa6===AI)return;this.Aa6=AI;A.aat([this,this.ACH,this.AGP],
0);},AC_:function(E){if(this.K&&this.K.AC_)return this.K.AC_.apply(this,arguments
);else return C.DeviceClass.Bq$.apply(this,arguments);},Bq$:function(E){},A9O:function(
An){this.AC_(An);},UpdateFreshCowSpan:function(AI){if(this.Apy===AI)return;this.
Apy=AI;A.aat([this,this.A5G,this.A9O],0);},UpdateUSBState:function(A_M){if(this.
Akd===A_M)return;this.Akd=A_M;A.aat([this,this.Aba,this.AbW],0);},ADV:function(E
){if(this.K&&this.K.ADV)return this.K.ADV.apply(this,arguments);else return C.DeviceClass.
BrR.apply(this,arguments);},BrR:function(E){A.aa8("%s",EV);},AbW:function(An){this.
ADV(An);},Am1:function(Ahj){if(this.K&&this.K.Am1)return this.K.Am1.apply(this,arguments
);else return C.DeviceClass.Bsa.apply(this,arguments);},Bsa:function(Ahj){return A.
_NewObject(C.AiN,0);},ApW:function(){if(this.K&&this.K.ApW)return this.K.ApW.apply(
this,arguments);else return C.DeviceClass.BqB.apply(this,arguments);},BqB:function(
){return false;},Apm:function(Ni){if(this.K&&this.K.Apm)return this.K.Apm.apply(
this,arguments);else return C.DeviceClass.Bqw.apply(this,arguments);},Bqw:function(
Ni){},ADH:function(E){if(this.K&&this.K.ADH)return this.K.ADH.apply(this,arguments
);else return C.DeviceClass.BrE.apply(this,arguments);},BrE:function(E){},Bsw:function(
An){this.ADH(An);},UpdateSerialNumber:function(AI){if(this.AgX===AI)return;this.
AgX=AI;A.aat([this,this.BhM,this.Bsw],0);},AuU:function(E){if(this.K&&this.K.AuU
)return this.K.AuU.apply(this,arguments);else return C.DeviceClass.BqJ.apply(this
,arguments);},BqJ:function(E){},AXr:function(An){this.AuU(An);},UpdateAnimalIdAutoGenerationMethod:
function(A_T){if(this.AfK===A_T)return;this.AfK=A_T;A.aat([this,this.AP2,this.AXr
],0);},AAv:function(){return false;},AEo:function(){return false;},ADJ:function(
E){if(this.K&&this.K.ADJ)return this.K.ADJ.apply(this,arguments);else return C.DeviceClass.
BrF.apply(this,arguments);},BrF:function(E){},A9U:function(An){this.ADJ(An);},UpdateShutdownTimer:
function(AI){if(this.ASh===AI)return;this.ASh=AI;A.aat([this,this.A51,this.A9U],
0);},Aqm:function(E){if(this.K&&this.K.Aqm)return this.K.Aqm.apply(this,arguments
);else return C.DeviceClass.BqN.apply(this,arguments);},BqN:function(E){},A9D:function(
An){this.Aqm(An);},UpdateAnimalListInfoItemMode:function(AI){if(this.AlD===AI)return;
this.AlD=AI;A.aat([this,this.A5s,this.A9D],0);},Aq4:function(H){if(this.K&&this.
K.Aq4)return this.K.Aq4.apply(this,arguments);else return C.DeviceClass.Br9.apply(
this,arguments);},Br9:function(H){},BBY:function(s){this.Aq4(s);},AqK:function(E
){if(this.K&&this.K.AqK)return this.K.AqK.apply(this,arguments);else return C.DeviceClass.
BrX.apply(this,arguments);},BrX:function(E){},A92:function(An){this.AqK(An);},AqL:
function(E){if(this.K&&this.K.AqL)return this.K.AqL.apply(this,arguments);else return C.
DeviceClass.BrY.apply(this,arguments);},BrY:function(E){},A93:function(An){this.
AqL(An);},UpdateWeightGainsLowString:function(AI){if(this.AFg===AI)return;this.AFg=
AI;A.aat([this,this.A6f,this.A93],0);},UpdateWeightGainsHighString:function(AI){
if(this.AFf===AI)return;this.AFf=AI;A.aat([this,this.A6e,this.A92],0);},AuW:function(
E){if(this.K&&this.K.AuW)return this.K.AuW.apply(this,arguments);else return C.DeviceClass.
BqQ.apply(this,arguments);},BqQ:function(E){},A9F:function(An){this.AuW(An);},UpdateAnimalTypesWeightGainsString:
function(AI){if(this.AzT===AI)return;this.AzT=AI;A.aat([this,this.A5v,this.A9F],
0);},AqJ:function(E){if(this.K&&this.K.AqJ)return this.K.AqJ.apply(this,arguments
);else return C.DeviceClass.BrW.apply(this,arguments);},BrW:function(E){},A91:function(
An){this.AqJ(An);},AqM:function(E){if(this.K&&this.K.AqM)return this.K.AqM.apply(
this,arguments);else return C.DeviceClass.Br2.apply(this,arguments);},Br2:function(
E){},A96:function(An){this.AqM(An);},UpdateWeightValueBirthString:function(AI){if(
this.AFi===AI)return;this.AFi=AI;A.aat([this,this.A6i,this.A96],0);},UpdateWeightGainsAverageString:
function(AI){if(this.AFe===AI)return;this.AFe=AI;A.aat([this,this.A6d,this.A91],
0);},Au_:function(E){if(this.K&&this.K.Au_)return this.K.Au_.apply(this,arguments
);else return C.DeviceClass.Bq7.apply(this,arguments);},Bq7:function(E){},Bsq:function(
An){this.Au_(An);},UpdateEvaluationAnimalType:function(Ee){if(this.AAP===Ee)return;
this.AAP=Ee;A.aat([this,this.Bhh,this.Bsq],0);},UpdateStartScreen:function(AI){if(
this.Av4===AI)return;this.Av4=AI;A.aat([this,this.BhO,this.Bsx],0);},Avt:function(
E){if(this.K&&this.K.Avt)return this.K.Avt.apply(this,arguments);else return C.DeviceClass.
BrG.apply(this,arguments);},BrG:function(E){},Bsx:function(An){this.Avt(An);},ABZ:
function(){if(this.K&&this.K.ABZ)return this.K.ABZ.apply(this,arguments);else return C.
DeviceClass.Bqz.apply(this,arguments);},Bqz:function(){return 1;},AB0:function(){
if(this.K&&this.K.AB0)return this.K.AB0.apply(this,arguments);else return C.DeviceClass.
BqA.apply(this,arguments);},BqA:function(){return 1;},GetCommitCount:function(){
return 1903;},GetCommitEpoch:function(){return 1692954318;},GetCommitHash:function(
){return A.kh.Bd1;},GetVersionMajor:function(){return 0;},GetVersionMinor:function(
){return 9;},GetVersionRev:function(){return 9;},ADp:function(E){if(this.K&&this.
K.ADp)return this.K.ADp.apply(this,arguments);else return C.DeviceClass.Brj.apply(
this,arguments);},Brj:function(E){},A9Q:function(An){this.ADp(An);},UpdateMaximumAgeNewOnFarm:
function(AI){if(this.ACe===AI)return;this.ACe=AI;A.aat([this,this.A5Q,this.A9Q],
0);},Avz:function(E){if(this.K&&this.K.Avz)return this.K.Avz.apply(this,arguments
);else return C.DeviceClass.BrQ.apply(this,arguments);},BrQ:function(E){},AXK:function(
An){this.Avz(An);},UpdateTransponderAssignmentIdChangeMethod:function(A_J){if(this.
Ag6===A_J)return;this.Ag6=A_J;A.aat([this,this.AQu,this.AXK],0);},BatchResetPurchasedNoticePending:
function(){var B4=A._NewObject(C.Animal,0);var P;var Ah5=0;var Ack=A._GetAutoObject(
C.Device).Ao.Filter;var Bb=A._GetAutoObject(C.Helper).AMF();A._GetAutoObject(C.Device
).Ao.Bl(Bb);for(P=0;P<A._GetAutoObject(C.Device).Ao.Cj();P++){B4.EK(P,A._GetAutoObject(
C.Device).Ao);B4.Ad3(false);B4.Cr(A._GetAutoObject(C.Device).Ao);Ah5++;}A._GetAutoObject(
C.Device).Ao.Bl(Ack);return Ah5;},AC4:function(E){if(this.K&&this.K.AC4)return this.
K.AC4.apply(this,arguments);else return C.DeviceClass.BqZ.apply(this,arguments);
},BqZ:function(E){},AXt:function(An){this.AC4(An);},UpdateDataExportDestination:
function(AI){if(this.U4===AI)return;this.U4=AI;A.aat([this,this.AP7,this.AXt],0);
},BjF:function(E){},UpdateMassRecordingAutomatic:function(AI){if(this.APk===AI)return;
this.APk=AI;A.aat([this,this.BhA,this.BjF],0);},M9:function(E){if(this.K&&this.K.
M9)return this.K.M9.apply(this,arguments);else return C.DeviceClass.Br3.apply(this
,arguments);},Br3:function(E){},BsA:function(An){this.M9(An);},UpdateWhereAbouts:
function(Ae2){if(this.WhereAbouts===Ae2)return;this.WhereAbouts=Ae2;A.aat([this,
this.AuR,this.BsA],0);},Aqi:function(E){if(this.K&&this.K.Aqi)return this.K.Aqi.
apply(this,arguments);else return C.DeviceClass.BqE.apply(this,arguments);},BqE:
function(E){},A9y:function(An){this.Aqi(An);},Aqj:function(E){if(this.K&&this.K.
Aqj)return this.K.Aqj.apply(this,arguments);else return C.DeviceClass.BqF.apply(
this,arguments);},BqF:function(E){},A9z:function(An){this.Aqj(An);},UpdateActiveMassRecordingFields:
function(AI){if(this.AzM===AI)return;this.AzM=AI;A.aat([this,this.A5l,this.A9y],
0);},UpdateActiveMassRecordingFieldsOrder:function(AI){if(this.AzN===AI)return;this.
AzN=AI;A.aat([this,this.A5m,this.A9z],0);},Aq0:function(H){if(this.K&&this.K.Aq0
)return this.K.Aq0.apply(this,arguments);else return C.DeviceClass.Br6.apply(this
,arguments);},Br6:function(H){},BBV:function(s){this.Aq0(s);},ADn:function(E){if(
this.K&&this.K.ADn)return this.K.ADn.apply(this,arguments);else return C.DeviceClass.
Brh.apply(this,arguments);},Brh:function(E){},AGN:function(An){this.ADn(An);},UpdateMassRecordingDateOfBirthMandatory:
function(AI){if(this.AdM===AI)return;this.AdM=AI;A.aat([this,this.ACE,this.AGN],
0);},ADm:function(E){this.UpdateMassRecordingCounter(E);},UpdateMassRecordingCounter:
function(AI){if(this.Auu===AI)return;this.Auu=AI;A.aat([this,this.A5P,this.ADm],
0);},ACz:function(){return this.Ku;},AuB:function(){return this.Aaa;},AuE:function(
){return this.AlK;},AQo:function(){return this.ScanState;},ACF:function(){return this.
MeasureState;},ACI:function(){return this.Kj;},A5L:function(){return this.Language;
},Aqc:function(){return this.TemperatureUnit;},A5A:function(){return this.AKT;},
AQe:function(){return this.ACl;},AuQ:function(){return this.OverlayMenu;},A59:function(
){return this.Zb;},AQq:function(){return this.SyncState;},A5_:function(){return this.
Arq;},ACJ:function(){return this.AS0;},AQn:function(){return this.RatingMode;},Ap$:
function(){return this.AlW;},AQs:function(){return this.ASK;},BhG:function(){return this.
ARC;},Bg7:function(){return this.AutoRegistrationMode;},AQp:function(){return this.
PD;},Aa_:function(){return this.FQ;},Aa$:function(){return this.Fx;},ACK:function(
){return this.IK;},AQd:function(){return this.MassUnit;},A5k:function(){return this.
P8;},AP1:function(){return this.Atb;},A5w:function(){return this.AutoActions;},Py:
function(){return this.AnimalType;},A6g:function(){return this.WeightRecordingMode;
},AQk:function(){return this.AEa;},ACD:function(){return this.Hv;},A5p:function(
){return this.Aiu;},A6h:function(){return this.WeightRecordingScope;},VJ:function(
){return this.Gender;},AuK:function(){return this.ApJ;},AuJ:function(){return this.
ApI;},ACA:function(){return this.JD;},A5r:function(){return this.AJ3;},A5D:function(
){return this.AlV;},AP3:function(){return this.D3;},A6c:function(){return this.AS2;
},A5F:function(){return this.AMp;},A5u:function(){return this.AzS;},A54:function(
){return this.AEX;},A55:function(){return this.AEY;},AQh:function(){return this.
APQ;},Bho:function(){return this.AlZ;},A5S:function(){return this.ACn;},A5R:function(
){return this.ACm;},AuN:function(){return this.APy;},AuM:function(){return this.
APx;},A5z:function(){return this.Ape;},A5j:function(){return this.AzL;},Bg3:function(
){return this.Aly;},Amv:function(){return this.Ia;},AP8:function(){return this.AAH;
},AP9:function(){return this.AAI;},AuH:function(){return this.AtB;},Amy:function(
){return this.Ai7;},AQf:function(){return this.Auz;},AuO:function(){return this.
APz;},AuI:function(){return this.EartagNrAssignmentMode;},AuD:function(){return this.
Breed;},BhB:function(){return this.R3;},Bhz:function(){return this.Qu;},BhY:function(
){return this.Sj;},Bg9:function(){return this.Rt;},A5B:function(){return this.ALL;
},A5T:function(){return this.APL;},ACB:function(){return this.Apc;},AQt:function(
){return this.Av_;},A58:function(){return this.AeC;},AQl:function(){return this.
YM;},ACH:function(){return this.Aa6;},A5G:function(){return this.Apy;},Aba:function(
){return this.Akd;},BhM:function(){return this.AgX;},AP2:function(){return this.
AfK;},A51:function(){return this.ASh;},A5s:function(){return this.AlD;},A6e:function(
){return this.AFf;},A6f:function(){return this.AFg;},A5v:function(){return this.
AzT;},A6d:function(){return this.AFe;},A6i:function(){return this.AFi;},Bhh:function(
){return this.AAP;},BhO:function(){return this.Av4;},A5Q:function(){return this.
ACe;},AQu:function(){return this.Ag6;},AP7:function(){return this.U4;},BhA:function(
){return this.APk;},AuR:function(){return this.WhereAbouts;},A5l:function(){return this.
AzM;},A5m:function(){return this.AzN;},ACE:function(){return this.AdM;},A5P:function(
){return this.Auu;},_Init:function(aArg){C.Table._Init.call(this.Ao={I:this},0);
C.Table._Init.call(this.Bq={I:this},0);C.Table._Init.call(this.AfI={I:this},0);A.
Core.A8f._Init.call(this.AmT={I:this},0);C.Table._Init.call(this.Pa={I:this},0);
this.__proto__=C.DeviceClass;this.Ao.OnSetId(0);this.Bq.OnSetId(1);this.AfI.OnSetId(
3);this.Pa.OnSetId(4);this.PD=A._NewObject(C.Transponder,0);this.R3=A._NewObject(
C.Av2,0);this.Qu=A._NewObject(C.At4,0);this.Sj=A._NewObject(C.At4,0);this.Rt=A._NewObject(
C.Av2,0);var Lj=this._variants();if(Lj){this.K={};Lj._Init.call(this,aArg);}A.hJ++;
},_Done:function(){if(this.K)this.K._Done.call(this);this.__proto__=null;this.Ao.
_Done();this.Bq._Done();this.AfI._Done();this.AmT._Done();this.Pa._Done();A.hJ--;
},_ReInit:function(){this.Ao._ReInit();this.Bq._ReInit();this.AfI._ReInit();this.
AmT._ReInit();this.Pa._ReInit();if(this.K)this.K._ReInit.call(this);},_Mark:function(
D){var B;if((B=this.PD)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.R3)&&(B._cycle
!=D))B._Mark(B._cycle=D);if((B=this.Qu)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=
this.Sj)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Rt)&&(B._cycle!=D))B._Mark(
B._cycle=D);if((B=this.Ao)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Bq)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.AfI)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AmT
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
Op.apply(this,arguments);},Or:function(AnJ){if(this.K&&this.K.Or)return this.K.Or.
apply(this,arguments);else return C.ITable.Or.apply(this,arguments);},XU:function(
){if(this.K&&this.K.XU)return this.K.XU.apply(this,arguments);else return C.ITable.
XU.apply(this,arguments);},YX:function(Ab,AX,CX){if(this.K&&this.K.YX)return this.
K.YX.apply(this,arguments);else return C.ITable.YX.apply(this,arguments);},G$:function(
Ab,AX,CX){if(this.K&&this.K.G$)return this.K.G$.apply(this,arguments);else return C.
ITable.G$.apply(this,arguments);},YW:function(Ab,AX,CX){if(this.K&&this.K.YW)return this.
K.YW.apply(this,arguments);else return C.ITable.YW.apply(this,arguments);},Na:function(
Ab,AX,CX){if(this.K&&this.K.Na)return this.K.Na.apply(this,arguments);else return C.
ITable.Na.apply(this,arguments);},YV:function(Ab,AX,CX){if(this.K&&this.K.YV)return this.
K.YV.apply(this,arguments);else return C.ITable.YV.apply(this,arguments);},K4:function(
aColumn,A1){if(this.K&&this.K.K4)return this.K.K4.apply(this,arguments);else return C.
ITable.K4.apply(this,arguments);},LD:function(Ab,AX){if(this.K&&this.K.LD)return this.
K.LD.apply(this,arguments);else return C.ITable.LD.apply(this,arguments);},TQ:function(
Ab,AX,CX){if(this.K&&this.K.TQ)return this.K.TQ.apply(this,arguments);else return C.
ITable.TQ.apply(this,arguments);},AiZ:function(aColumn,A1){if(this.K&&this.K.AiZ
)return this.K.AiZ.apply(this,arguments);else return C.ITable.AiZ.apply(this,arguments
);},G_:function(){if(this.K&&this.K.G_)return this.K.G_.apply(this,arguments);else
return C.ITable.G_.apply(this,arguments);},AiW:function(aColumn,A1){if(this.K&&this.
K.AiW)return this.K.AiW.apply(this,arguments);else return C.ITable.AiW.apply(this
,arguments);},Af5:function(aColumn,A1){if(this.K&&this.K.Af5)return this.K.Af5.apply(
this,arguments);else return C.ITable.Af5.apply(this,arguments);},Hz:function(){if(
this.K&&this.K.Hz)return this.K.Hz.apply(this,arguments);else return C.ITable.Hz.
apply(this,arguments);},Aaz:function(){if(this.K&&this.K.Aaz)return this.K.Aaz.apply(
this,arguments);else return C.ITable.Aaz.apply(this,arguments);},Qd:function(){if(
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
ConverterClass={MR:null,Aj9:function(AnH){var A$r;var As0=this.ASA(AnH/100,0,A._GetAutoObject(
C.Device).TemperatureUnit);A$r=A.aap(As0,0,1);return A$r;},A8o:function(Ng){if(Ng<=
0)return 0;else if(Ng<=1)return 5;else if(Ng<=2)return 3;else if(Ng<=4)return 2;
else if(Ng<=6)return 1;else if(Ng<=8)return 4;else return 0;},Ac1:function(Ng){var
a=0;switch(Ng){case 3:a=2;break;case 2:a=4;break;case 1:a=6;break;case 0:a=0;break;
case 4:a=8;break;case 5:a=1;break;default:A.aa8("%s",OM);}return a;},Arj:function(
Ee,Q3){var Nk=A._GetAutoObject(C.Converter).Aiv(Q3,Ee);switch(Nk){case 3:return 1;
case 2:return 2;case 1:return 3;case 0:return 4;default:throw new Error(Ne+Nk.toFixed(
));}},Ag4:function(){var B;var D2=A._NewObject(A.Core.Bu,0).Initialize(A._GetAutoObject(
C.Helper).DB());D2.AmH(0);D2.AmK(0);D2.AmN(0);return((B=(D2.JL()|0))<0)?B+0x100000000:
B;},Bd5:function(ArZ){var Dk;switch(ArZ){case 36:Dk=ON;break;case 40:Dk=Ss;break;
case 56:Dk=T$;break;case 70:Dk=Ze;break;case 100:Dk=Wb;break;case 124:Dk=IM;break;
case 156:Dk=Ua;break;case 158:Dk=Zf;break;case 191:Dk=Wc;break;case 196:Dk=Zg;break;
case 203:Dk=Ub;break;case 208:Dk=Zh;break;case 233:Dk=Zi;break;case 246:Dk=Uc;break;
case 250:Dk=Wd;break;case 276:Dk=QV;break;case 300:Dk=Zj;break;case 348:Dk=OO;break;
case 372:Dk=PK;break;case 380:Dk=Ud;break;case 392:Dk=Zk;break;case 428:Dk=We;break;
case 440:Dk=Zl;break;case 442:Dk=Zm;break;case 470:Dk=Wf;break;case 528:Dk=Wg;break;
case 578:Dk=St;break;case 616:Dk=Zn;break;case 620:Dk=Zo;break;case 642:Dk=AbO;break;
case 643:Dk=Su;break;case 703:Dk=AbP;break;case 705:Dk=AeN;break;case 724:Dk=Zp;
break;case 752:Dk=Wh;break;case 756:Dk=Wi;break;case 792:Dk=AeO;break;case 804:Dk=
AeP;break;case 826:Dk=JT;break;case 840:Dk=AeQ;break;default:Dk=ArZ.toFixed();}return Dk;
},Ane:function(N5){return this.N0(N5,1,false);},Awk:function(N5,AnX){return this.
N0(N5,AnX,false);},N0:function(N5,AnX,BvO){var B;var AkM=A.jm;switch(A._GetAutoObject(
C.Device).MassUnit){case 0:if(BvO)AkM=A.aaq(N5,0,0);else{var BaJ=N5<0;if(AnX<3)N5=
N5+(((BaJ?-1:1)*5)*(Math.pow(10,2-AnX)|0));AkM=(((((B=N5)>-2147483648)?Math.abs(
B):B)/1000)|0).toFixed();if(AnX>0)AkM=AkM+(Li+A.aaX(A.aaq((((B=N5)>-2147483648)?
Math.abs(B):B)%1000,3,10),AnX));if(BaJ)AkM=Ag$+AkM;}break;case 1:AkM=A.aap(N5/453.592
,0,AnX);break;default:A.aa8("%s%s",Ang,A._GetAutoObject(C.Device).MassUnit.toFixed(
));}return AkM;},T0:function(L1){var A1x=L1.toFixed();var BcS=A1x.length;if((BcS>=
14)&&(BcS<=15)){var AZD=this.Awa(L1);var BuG=A._GetAutoObject(C.Converter).Bd5(AZD
);A1x=(BuG+N2)+A.aar(A._GetAutoObject(C.Helper).U8(L1,0,12),12,10);}return A1x;}
,Al0:function(LY){switch(LY){case 0:return A.zW(A.abi.AOi);case 1:return A.zW(A.
abi.ABJ);case 2:return A.zW(A.abi.ABO);default:{A.aa8("%s%e",Wj,LY);return null;
}}},A2e:function(Bud){switch(Bud){case 0:return A.zW(A.abi.Aub);case 1:return A.
zW(A.abi.ABF);case 2:return A.zW(A.abi.AOc);default:throw new Error(Anh);}},AfN:
function(AHp){switch(AHp){case 0:return A.zW(A.abi.Ai8);case 2:return A.zW(A.abi.
Al9);case 1:return A.zW(A.abi.AaM);case 3:switch(A._GetAutoObject(C.Device).MassUnit
){case 0:return A.zW(A.abi.Auj);case 1:return A.zW(A.abi.Auk);default:throw new Error(
Aha+A._GetAutoObject(C.Device).MassUnit.toFixed());}break;case 4:return A.zW(A.abi.
AND);case 5:return A.zW(A.abi.ANE);case 6:return A.zW(A.abi.ANI);case 7:return A.
zW(A.abi.AM3);case 8:return A.zW(A.abi.AM_);case 9:return A.zW(A.abi.ABh);case 10:
return A.zW(A.abi.AM9);case 11:return A.zW(A.abi.AM$);default:throw new Error(Ahb+
AHp.toFixed());}},Bdp:function(Axn){switch(Axn){case 0:return A.zW(A.abi.ABM);case
3:return A.zW(A.abi.Al9);case 1:return A.zW(A.abi.AaM);case 2:return A._GetAutoObject(
A.abk.DM).A$P();default:throw new Error(Ahb+Axn.toFixed());}},Bd4:function(ArZ){
switch(ArZ){case 977:return AbQ;case 978:return Ue;case 980:return Ani;case 981:
return Anj;case 982:return Awl;case 983:return Awm;case 984:return Aki;case 985:
return Awn;default:return A.z2(A.abg.Unknown);}},Ben:function(Ab4){switch(Ab4){case
1:return 0x278A;case 2:return 0x278B;case 3:return 0x278C;case 4:return 0x278D;case
5:return 0x278E;case 6:return 0x278F;case 7:return 0x2790;case 8:return 0x2791;case
9:return 0x2792;case 10:return 0x2793;default:return 0x20;}},Bmg:function(L1){if(
!L1)return-1;return(L1%100000000)|0;},BeT:function(AnG,aFilter){var B;if(!aFilter
)return AeR;var An8=Arw;var Av=aFilter.AMy();while(!!Av){An8=An8+A._GetAutoObject(
C.Helper).A3X(AnG,Av);Av=aFilter.AMC(Av);if(!!Av)An8=An8+OP;}An8=An8+Sv;return An8;
},A4A:function(A_v){var Mz=0;switch(A_v){case 14:Mz=2;break;case 13:Mz=4;break;case
6:Mz=36;break;case 11:Mz=9;break;case 0:Mz=39;break;case 10:Mz=26;break;case 12:
Mz=12;break;case 5:Mz=14;break;case 3:Mz=15;break;case 1:Mz=10;break;case 8:Mz=16;
break;case 4:Mz=20;break;case 15:Mz=27;break;case 9:Mz=31;break;case 2:Mz=13;break;
case 7:Mz=35;break;case 16:Mz=37;break;default:A.aa8("%s%e",Awo,A_v);}return Mz;
},Bdo:function(Axn){switch(Axn){case 0:return 1;case 3:return 0;case 1:return 2;
case 2:switch(A._GetAutoObject(C.Device).MassUnit){case 0:return 3;case 1:return 4;
default:throw new Error(Aha+A._GetAutoObject(C.Device).MassUnit.toFixed());}break;
default:throw new Error(Ahb+Axn.toFixed());}},Bdq:function(AnO){switch(AnO){case
0:return A.zW(A.abi.ANA);case 1:return A.zW(A.abi.ABM);case 9:return A.zW(A.abi.
ANK);case 4:return A.zW(A.abi.AEm);case 6:return A.zW(A.abi.AqX);case 8:return A.
zW(A.abi.At9);case 2:return A.zW(A.abi.AaM);case 3:return A.zW(A.abi.Al9);case 7:
return A.zW(A.abj.K2);case 5:return A.zW(A.abj.K2);case 10:switch(A._GetAutoObject(
C.Device).MassUnit){case 0:return A.zW(A.abi.Auj);case 1:return A.zW(A.abi.Auk);
default:throw new Error(Aha+A._GetAutoObject(C.Device).MassUnit.toFixed());}break;
case 11:return A.zW(A.abj.K2);case 12:return A.zW(A.abj.K2);case 13:return A.zW(
A.abj.K2);case 14:return A.zW(A.abj.K2);case 18:return A.zW(A.abj.K2);case 15:return A.
zW(A.abj.K2);case 16:return A.zW(A.abj.K2);case 17:return A.zW(A.abj.K2);default:
throw new Error(Sw+AnO.toFixed());}},ALp:function(ArZ){switch(ArZ){case 40:return 1;
case 56:return 3;case 70:return 2;case 100:return 4;case 124:return 5;case 156:return 7;
case 158:return 36;case 191:return 17;case 196:return 8;case 203:return 9;case 208:
return 11;case 233:return 12;case 246:return 14;case 250:return 15;case 276:return 10;
case 300:return 16;case 348:return 18;case 372:return 19;case 380:return 20;case
392:return 21;case 428:return 24;case 440:return 22;case 442:return 23;case 470:
return 25;case 528:return 26;case 578:return 27;case 616:return 28;case 620:return 29;
case 642:return 30;case 643:return 31;case 703:return 34;case 705:return 33;case
724:return 13;case 752:return 32;case 756:return 6;case 792:return 35;case 804:return 37;
case 826:return 38;case 840:return 39;default:return 0;}},AeF:function(L1){var AZD=
this.Awa(L1);return this.ALp(AZD);},Awa:function(L1){return A._GetAutoObject(C.Helper
).U8(L1,12,3)|0;},A8G:function(AnL,Ee){if(AnL<A._GetAutoObject(C.Helper).ABd(Ee)
)return 1;else if(AnL<A._GetAutoObject(C.Helper).ABc(Ee))return 2;else return 3;
},AMu:function(BtV){switch(BtV){case 1:return 1;case 2:return 2;case 3:return 3;
case 4:return 4;case 5:return 5;case 6:return 6;case 7:return 7;case 8:return 8;
case 9:return 9;case 10:return 10;case 11:return 11;case 12:return 12;case 13:return 13;
case 14:return 14;case 15:return 15;case 16:return 16;default:return 0;}},ASA:function(
A1,AHc,AHd){if(AHc===AHd)return A1;if(!AHc&&(AHd===1)){var result=((A1*9)/5)+32;
return result;}if((AHc===1)&&!AHd){var result=((A1-32)*5)/9;return result;}throw new
Error(((Arx+AHc.toFixed())+Awp)+AHd.toFixed());},A3I:function(EE){switch(EE){case
0:return Awq;case 1:return A.jm;case 2:return Awr;case 3:return Ank;case 4:return A.
z2(A.abg.Contains);case 5:return Aws;default:{A.aa8("%s%e",Ary,EE);return A.jm;}
}},A2H:function(Ab2){return this.MR.Adk(Ab2);},BfB:function(Ab2){return this.MR.
AlM(Ab2);},BdO:function(ArY){var Ayy=0;switch(ArY){case 0:Ayy=1;break;case 1:Ayy=
2;break;case 2:Ayy=3;break;case 3:Ayy=4;break;default:A.aa8("%s%e",KI,ArY);}return Ayy;
},Aiv:function(AX1,Ee){if(AX1>=A._GetAutoObject(C.Helper).A3T(Ee))return 3;else if(
AX1>=A._GetAutoObject(C.Helper).At0(Ee))return 2;else if(AX1<A._GetAutoObject(C.
Device).Zb)return 0;else return 1;},Ats:function(Mz){var BN=-1;switch(Mz){case 0:
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
throw new Error(Awt+Mz.toFixed());}return BN;},_Init:function(aArg){C.MR._Init.call(
this.MR={I:this},0);this.__proto__=C.ConverterClass;A.hJ++;},_Done:function(){this.
__proto__=null;this.MR._Done();A.hJ--;},_ReInit:function(){this.MR._ReInit();},_Mark:
function(D){var B;if((B=this.MR)._cycle!=D)B._Mark(B._cycle=D);if((B=this.I)&&(B.
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
!AF){this.OnSetId(AF.CE(Ab,0));this.TH(AF.CE(Ab,1));this.Abh(AF.CE(Ab,2));this.AmJ(
AF.CE(Ab,3));this.R8(AF.Hy(Ab,4));this.JM(AF.AMA(Ab,7));this.Ajz(AF.Bfa(Ab,6));this.
DW(AF.Al1(Ab,14));this.M8(AF.LD(Ab,22));this.M7(AF.LD(Ab,26));this.AvD(AF.IX(Ab,
13));this.Ad1(AF.HW(Ab,8));this.Avw(AF.Hy(Ab,15));this.AQ$(AF.Hy(Ab,31));this.Ad6(
AF.A35(Ab,5));this.AQQ(AF.IX(Ab,17));this.TF(AF.HW(Ab,11));this.AQ_(AF.Hy(Ab,16)
);this.ARb(AF.Hy(Ab,30));this.AjH(AF.HW(Ab,9));this.Ad4(AF.HW(Ab,12));this.ARa(AF.
Hy(Ab,20));this.Avy(AF.Hy(Ab,21));this.AgG(AF.HW(Ab,10));this.Avf(AF.HW(Ab,27));
this.ADg(AF.AA9(Ab,18));this.ADM(AF.Hy(Ab,19));this.Avb(AF.AA9(Ab,23));this.Avx(
AF.Hy(Ab,24));this.AQH(AF.CE(Ab,25));this.Au4(AF.Hy(Ab,28));this.Avg(AF.CE(Ab,29
));this.Aqx(AF.HW(Ab,38));this.NP(AF.Bfb(Ab,32));this.AjC(AF.Bfe(Ab,33));this.AmL(
AF.LD(Ab,35));this.M9(AF.AMJ(Ab,34));this.Ad3(AF.HW(Ab,37));this.ADC(AF.Bfo(Ab,36
));}return Hs;},Cr:function(AF){var Hs=C.Row.Cr.call(this,AF);if(Hs&&!!AF){var Jg=
AF.Op();if(Jg<=0)A.aa8("%s",AbR);else{var Ayc=this.Amc();if(Ayc)this.CH=AF.XU();
else AF.G$(this.CH,0,this.Id);AF.G$(this.CH,1,this.VisualId);AF.G$(this.CH,2,this.
GroupId);AF.G$(this.CH,3,this.LocationId);AF.Abu(this.CH,4,this.DateOfBirth);AF.
Bk$(this.CH,7,this.Gender);AF.Bk7(this.CH,6,this.BirthType);AF.Bk5(this.CH,14,this.
AnimalType);AF.TQ(this.CH,22,this.TransponderId);AF.TQ(this.CH,26,this.NaisId);AF.
Aj0(this.CH,13,this.WorstAssessment);AF.Na(this.CH,8,this.IsAlarm);AF.Abu(this.CH
,15,this.TimestampAlarm);AF.Na(this.CH,11,this.IsFever);AF.Abu(this.CH,16,this.TimestampExpirationFeverAlarm
);AF.Na(this.CH,9,this.IsControl);AF.Na(this.CH,12,this.IsWatch);AF.Abu(this.CH,
20,this.TimestampLastControl);AF.Abu(this.CH,21,this.TimestampLastWatch);AF.Na(this.
CH,10,this.IsRegistered);AF.Na(this.CH,27,this.IsPerished);AF.Abu(this.CH,28,this.
DateOfLastCalving);AF.G$(this.CH,29,this.LactationNumber);AF.Na(this.CH,38,this.
IsDry);AF.Bk9(this.CH,32,this.Breed);AF.Bk_(this.CH,33,this.EaseOfDelivery);AF.TQ(
this.CH,35,this.NaisIdMother);AF.Blf(this.CH,34,this.WhereAbouts);AF.Na(this.CH,
37,this.IsRegistrationNoticePending);AF.Bld(this.CH,36,this.ReasonOfLeaving);Hs=
AF.Or(Jg);if(Ayc)this.OnSetId(AF.Aaz());}}return Hs;},Gd:function(){C.Row.Gd.call(
this);this.OnSetId(-1);this.AgG(true);},G_:function(){C.Row.G_.call(this);this.OnSetId(
0);this.TH(0);this.Abh(0);this.AmJ(0);this.R8(0);this.JM(A._GetAutoObject(C.Device
).Gender);this.Ajz(0);this.DW(A._GetAutoObject(C.Device).AnimalType);this.M8(0);
this.M7(0);this.AvD(0);this.Ad1(false);this.Avw(0);this.AQ$(0);this.Ad6(0);this.
AQQ(0);this.TF(false);this.ARb(0);this.AQ_(0);this.AjH(false);this.Ad4(false);this.
ARa(0);this.Avy(0);this.AgG(false);this.Avf(false);this.ADg(0);this.ADM(0);this.
Avb(0);this.Avx(0);this.AQH(-1);this.Au4(0);this.Avg(0);this.Aqx(false);this.NP(
0);this.AjC(0);this.AmL(0);this.M9(0);this.Ad3(false);this.ADC(0);},OnSetId:function(
E){if(this.Id===E)return;this.Id=E;A.aat([this,this.Qx,this.OnSetId],0);},TH:function(
E){if(this.VisualId===E)return;this.VisualId=E;A.aat([this,this.Aqd,this.TH],0);
},Abh:function(E){if(this.GroupId===E)return;this.GroupId=E;A.aat([this,this.Bhp
,this.Abh],0);},R8:function(E){if(this.DateOfBirth===E)return;this.DateOfBirth=E;
A.aat([this,this.AuF,this.R8],0);},JM:function(E){if(this.Gender===E)return;this.
Gender=E;A.aat([this,this.VJ,this.JM],0);},Ajz:function(E){if(this.BirthType===E
)return;this.BirthType=E;A.aat([this,this.AP5,this.Ajz],0);},AmJ:function(E){if(
this.LocationId===E)return;this.LocationId=E;A.aat([this,this.A5O,this.AmJ],0);}
,Ad6:function(E){if(this.LastTemperature===E)return;this.LastTemperature=E;A.aat([
this,this.A5N,this.Ad6],0);},Ad1:function(E){if(this.IsAlarm===E)return;this.IsAlarm=
E;A.aat([this,this.A5I,this.Ad1],0);},AjH:function(E){if(this.IsControl===E)return;
this.IsControl=E;A.aat([this,this.Bhs,this.AjH],0);},AgG:function(E){if(this.IsRegistered===
E)return;this.IsRegistered=E;A.aat([this,this.Bhv,this.AgG],0);},Ad4:function(E){
if(this.IsWatch===E)return;this.IsWatch=E;A.aat([this,this.A5K,this.Ad4],0);},AvD:
function(E){if(this.WorstAssessment===E)return;this.WorstAssessment=E;A.aat([this
,this.A6j,this.AvD],0);},TF:function(E){if(this.IsFever===E)return;this.IsFever=
E;A.aat([this,this.A5J,this.TF],0);},ARa:function(E){if(this.TimestampLastControl===
E)return;this.TimestampLastControl=E;A.aat([this,this.BhV,this.ARa],0);},Avy:function(
E){if(this.TimestampLastWatch===E)return;this.TimestampLastWatch=E;A.aat([this,this.
BhX,this.Avy],0);},AQQ:function(E){if(this.LastRatingTemperature===E)return;this.
LastRatingTemperature=E;A.aat([this,this.Bhy,this.AQQ],0);},AQ_:function(E){if(this.
TimestampExpirationFeverAlarm===E)return;this.TimestampExpirationFeverAlarm=E;A.
aat([this,this.BhT,this.AQ_],0);},Avw:function(E){if(this.TimestampAlarm===E)return;
this.TimestampAlarm=E;A.aat([this,this.BhS,this.Avw],0);},DW:function(E){if(this.
AnimalType===E)return;this.AnimalType=E;A.aat([this,this.Py,this.DW],0);},ADg:function(
E){if(this.LastBodyWeight===E)return;this.LastBodyWeight=E;A.aat([this,this.A5M,
this.ADg],0);},ADM:function(E){if(this.TimestampLastWeighing===E)return;this.TimestampLastWeighing=
E;A.aat([this,this.A57,this.ADM],0);},M8:function(E){if(this.TransponderId===E)return;
this.TransponderId=E;A.aat([this,this.Ajw,this.M8],0);},SY:function(){return A._GetAutoObject(
C.Helper).ME(this.DateOfBirth,A._GetAutoObject(C.Helper).DB());},Avb:function(E){
if(this.FirstBodyWeight===E)return;this.FirstBodyWeight=E;A.aat([this,this.AP$,this.
Avb],0);},Avx:function(E){if(this.TimestampFirstWeighing===E)return;this.TimestampFirstWeighing=
E;A.aat([this,this.AQr,this.Avx],0);},ApV:function(){var SG=A._NewObject(A.Core.
Bu,0);SG.Initialize(this.DateOfBirth);var AZq=A._NewObject(A.Core.Bu,0);AZq.Initialize(
this.TimestampFirstWeighing);if(((SG.Year===AZq.Year)&&(SG.Aa9()===AZq.Aa9()))&&(
this.FirstBodyWeight>0))return true;else return false;},Ag_:function(AG8){var WJ;
var AoZ;if(this.TimestampLastWeighing>0){AoZ=this.TimestampLastWeighing;WJ=this.
LastBodyWeight;}else if(this.AnimalType===1){AoZ=A._GetAutoObject(C.Helper).DB();
WJ=600000;}else{AoZ=this.DateOfBirth;WJ=A._GetAutoObject(C.Helper).Aay(this.AnimalType
);}return A._GetAutoObject(C.Helper).Ag_(WJ,AoZ,AG8,this.AnimalType);},AQH:function(
E){if(this.FirstBodyWeightId===E)return;this.FirstBodyWeightId=E;A.aat([this,this.
Bhn,this.AQH],0);},Am0:function(A_S){this.Ad1(A_S);if(A_S){if(!this.TimestampAlarm
)this.Avw(A._GetAutoObject(C.Helper).DB());}else this.Avw(0);},M7:function(E){if(
this.NaisId===E)return;this.NaisId=E;A.aat([this,this.Amz,this.M7],0);},AEz:function(
A_O){this.Ad4(A_O);if(A_O){if(!this.TimestampLastWatch)this.Avy(A._GetAutoObject(
C.Helper).DB());}else this.Avy(0);},Au4:function(E){if(this.DateOfLastCalving===
E)return;this.DateOfLastCalving=E;A.aat([this,this.Bhd,this.Au4],0);},Avg:function(
E){if(this.LactationNumber===E)return;this.LactationNumber=E;A.aat([this,this.Bhx
,this.Avg],0);},Avf:function(E){if(this.IsPerished===E)return;this.IsPerished=E;
A.aat([this,this.Bhu,this.Avf],0);},ARb:function(E){if(this.TimestampLastTemperature===
E)return;this.TimestampLastTemperature=E;A.aat([this,this.BhW,this.ARb],0);},AQ$:
function(E){if(this.TimestampLastAssessment===E)return;this.TimestampLastAssessment=
E;A.aat([this,this.BhU,this.AQ$],0);},NP:function(E){if(this.Breed===E)return;this.
Breed=E;A.aat([this,this.AuD,this.NP],0);},AjC:function(E){if(this.EaseOfDelivery===
E)return;this.EaseOfDelivery=E;A.aat([this,this.AP_,this.AjC],0);},M9:function(E
){if(this.WhereAbouts===E)return;this.WhereAbouts=E;A.aat([this,this.AuR,this.M9
],0);},AmL:function(E){if(this.NaisIdMother===E)return;this.NaisIdMother=E;A.aat([
this,this.AQg,this.AmL],0);},ADC:function(E){if(this.ReasonOfLeaving===E)return;
this.ReasonOfLeaving=E;A.aat([this,this.BhI,this.ADC],0);},Ad3:function(E){if(this.
IsRegistrationNoticePending===E)return;this.IsRegistrationNoticePending=E;A.aat([
this,this.Bhw,this.Ad3],0);},Aqx:function(E){if(this.IsDry===E)return;this.IsDry=
E;A.aat([this,this.Bht,this.Aqx],0);},Qx:function(){return this.Id;},Aqd:function(
){return this.VisualId;},Bhp:function(){return this.GroupId;},AuF:function(){return this.
DateOfBirth;},VJ:function(){return this.Gender;},AP5:function(){return this.BirthType;
},A5O:function(){return this.LocationId;},A5N:function(){return this.LastTemperature;
},A5I:function(){return this.IsAlarm;},Bhs:function(){return this.IsControl;},Bhv:
function(){return this.IsRegistered;},A5K:function(){return this.IsWatch;},A6j:function(
){return this.WorstAssessment;},A5J:function(){return this.IsFever;},BhV:function(
){return this.TimestampLastControl;},BhX:function(){return this.TimestampLastWatch;
},Bhy:function(){return this.LastRatingTemperature;},BhT:function(){return this.
TimestampExpirationFeverAlarm;},BhS:function(){return this.TimestampAlarm;},Py:function(
){return this.AnimalType;},A5M:function(){return this.LastBodyWeight;},A57:function(
){return this.TimestampLastWeighing;},Ajw:function(){return this.TransponderId;}
,AP$:function(){return this.FirstBodyWeight;},AQr:function(){return this.TimestampFirstWeighing;
},Bhn:function(){return this.FirstBodyWeightId;},Amz:function(){return this.NaisId;
},Bhd:function(){return this.DateOfLastCalving;},Bhx:function(){return this.LactationNumber;
},Bhu:function(){return this.IsPerished;},BhW:function(){return this.TimestampLastTemperature;
},BhU:function(){return this.TimestampLastAssessment;},AuD:function(){return this.
Breed;},AP_:function(){return this.EaseOfDelivery;},AuR:function(){return this.WhereAbouts;
},AQg:function(){return this.NaisIdMother;},BhI:function(){return this.ReasonOfLeaving;
},Bhw:function(){return this.IsRegistrationNoticePending;},Bht:function(){return this.
IsDry;},_Init:function(aArg){C.Row._Init.call(this,aArg);this.__proto__=C.Animal;
this.TableId=0;},_className:"Device::Animal"};C.Row={CH:-1,TableId:2,EK:function(
Ab,AF){if(!AF){A.aa8("%s",(Awu+this.CH.toFixed())+AFk);return false;}else if(AF.
Id!==this.TableId)throw new Error(AFl);else if((Ab<0)||(Ab>=AF.Cj())){A.aa8("%s"
,(((AFm+this.CH.toFixed())+AFn)+AF.Cj().toFixed())+Awv);return false;}this.CH=Ab;
return true;},Cr:function(AF){if(!AF){A.aa8("%s",(Awu+this.CH.toFixed())+AFk);return false;
}else if(AF.Id!==this.TableId)throw new Error(AFl);else if(this.Amc()&&AF.K8()){
A.aa8("%s",ATj+AF.Hz().toFixed());return false;}else if(!this.Amc()&&((this.CH<0
)||(this.CH>=AF.Cj()))){A.aa8("%s",(((AFm+this.CH.toFixed())+AFn)+AF.Cj().toFixed(
))+Awv);return false;}return true;},Gd:function(){this.G_();this.CH=-1;},Amc:function(
){return this.CH===-1;},G_:function(){this.CH=-2;},ApD:function(){return this.CH
!==-2;},A5V:function(){return this.CH;},A6_:function(E){this.CH=E;},_Init:function(
aArg){this.__proto__=C.Row;A.hJ++;},_Done:function(){this.__proto__=null;A.hJ--;
},_ReInit:function(){},_Mark:function(D){var B;if((B=this.I)&&(B._cycle!=D))B._Mark(
B._cycle=D);},I:null,_cycle:0,_observers:null,_className:"Device::Row"};C.Rating={
Temperature:0,Id:0,AnimalId:0,Timestamp:0,BodyWeight:0,RatingTemperature:0,Faeces:
0,Respiratory:0,Appearance:0,Feed:0,EK:function(Ab,AF){var Hs=C.Row.EK.call(this
,Ab,AF);if(Hs&&!!AF){this.OnSetId(AF.CE(Ab,0));this.OnSetAnimalId(AF.CE(Ab,1));this.
OnSetTimestamp(AF.Hy(Ab,6));this.OnSetFeed(AF.IX(Ab,2));this.OnSetAppearance(AF.
IX(Ab,3));this.OnSetRespiratory(AF.IX(Ab,4));this.OnSetFaeces(AF.IX(Ab,5));this.
OnSetTemperature(AF.A35(Ab,7));this.OnSetBodyWeight(AF.AA9(Ab,8));this.OnSetRatingTemperature(
AF.IX(Ab,9));}return Hs;},Cr:function(AF){if(this.K&&this.K.Cr)return this.K.Cr.
apply(this,arguments);else return C.Rating.A9p.apply(this,arguments);},A9p:function(
AF){var Hs=C.Row.Cr.call(this,AF);if((Hs&&!!AF)&&(AF.Id===1)){var Jg=AF.Op();if(
Jg<=0)A.aa8("%s",AbR);else{var Ayc=this.Amc();if(Ayc)this.CH=AF.XU();else AF.G$(
this.CH,0,this.Id);AF.G$(this.CH,1,this.AnimalId);AF.Abu(this.CH,6,this.Timestamp
);AF.Aj0(this.CH,2,this.Feed);AF.Aj0(this.CH,3,this.Appearance);AF.Aj0(this.CH,4
,this.Respiratory);AF.Aj0(this.CH,5,this.Faeces);AF.A71(this.CH,7,this.Temperature
);AF.AR4(this.CH,8,this.BodyWeight);AF.Aj0(this.CH,9,this.RatingTemperature);AF.
Or(Jg);if(Ayc)this.OnSetId(AF.Aaz());var Q5=A._GetAutoObject(C.Device).Ao;var Ab=
A._GetAutoObject(C.Device).Ao.K4(0,this.AnimalId);if(Ab>=0){var B4=A._NewObject(
C.Animal,0);B4.EK(Ab,Q5);if(this.Temperature>0)B4.TF(A._GetAutoObject(C.Helper).
A4u(this));if((this.Temperature>0)&&A._GetAutoObject(C.Helper).AEg(this)){var Oa=
A._GetAutoObject(C.Helper).AOQ(this);B4.AjH(Oa);B4.Am0(Oa);}else if(this.Temperature>
0){var Oa=(A._GetAutoObject(C.Helper).AOQ(this)||(B4.WorstAssessment===2))||(B4.
WorstAssessment===1);B4.AjH(Oa);B4.Am0(Oa);}else{var Oa=A._GetAutoObject(C.Helper
).AOQ(this)||B4.IsFever;B4.AjH(Oa);B4.Am0(Oa);}B4.Cr(Q5);}}}return Hs;},Gd:function(
){C.Row.Gd.call(this);this.OnSetTimestamp(A._GetAutoObject(C.Helper).DB());this.
OnSetId(-1);},G_:function(){C.Row.G_.call(this);this.OnSetTimestamp(0);this.OnSetId(
0);this.OnSetAnimalId(0);this.OnSetFeed(0);this.OnSetAppearance(0);this.OnSetRespiratory(
0);this.OnSetFaeces(0);this.OnSetTemperature(0);this.OnSetBodyWeight(0);this.OnSetRatingTemperature(
0);},OnSetTemperature:function(E){if(this.Temperature===E)return;this.Temperature=
E;A.aat([this,this.BhR,this.OnSetTemperature],0);},OnSetId:function(E){if(this.Id===
E)return;this.Id=E;A.aat([this,this.Qx,this.OnSetId],0);},OnSetAnimalId:function(
E){if(this.AnimalId===E)return;this.AnimalId=E;A.aat([this,this.Bg4,this.OnSetAnimalId
],0);},OnSetFeed:function(E){if(this.Feed===E)return;this.Feed=E;A.aat([this,this.
Bhk,this.OnSetFeed],0);},OnSetAppearance:function(E){if(this.Appearance===E)return;
this.Appearance=E;A.aat([this,this.Bg5,this.OnSetAppearance],0);},OnSetRespiratory:
function(E){if(this.Respiratory===E)return;this.Respiratory=E;A.aat([this,this.BhJ
,this.OnSetRespiratory],0);},OnSetFaeces:function(E){if(this.Faeces===E)return;this.
Faeces=E;A.aat([this,this.Bhi,this.OnSetFaeces],0);},OnSetTimestamp:function(E){
if(this.Timestamp===E)return;this.Timestamp=E;A.aat([this,this.A56,this.OnSetTimestamp
],0);},Bk6:function(Nh,A1){switch(Nh){case 2:this.OnSetAppearance(A1);break;case
1:this.OnSetFeed(A1);break;case 4:this.OnSetFaeces(A1);break;case 3:this.OnSetRespiratory(
A1);break;default:;}},Be_:function(Nh){switch(Nh){case 2:return this.Appearance;
case 1:return this.Feed;case 4:return this.Faeces;case 3:return this.Respiratory;
default:return 0;}},OnSetRatingTemperature:function(E){if(this.RatingTemperature===
E)return;this.RatingTemperature=E;A.aat([this,this.BhH,this.OnSetRatingTemperature
],0);},OnSetBodyWeight:function(E){if(this.BodyWeight===E)return;this.BodyWeight=
E;A.aat([this,this.Bg8,this.OnSetBodyWeight],0);},BhR:function(){return this.Temperature;
},Qx:function(){return this.Id;},Bg4:function(){return this.AnimalId;},Bhk:function(
){return this.Feed;},Bg5:function(){return this.Appearance;},BhJ:function(){return this.
Respiratory;},Bhi:function(){return this.Faeces;},A56:function(){return this.Timestamp;
},BhH:function(){return this.RatingTemperature;},Bg8:function(){return this.BodyWeight;
},_Init:function(aArg){C.Row._Init.call(this,aArg);this.__proto__=C.Rating;this.
TableId=1;var Lj=this._variants();if(Lj){this.K={};Lj._Init.call(this,aArg);}},_Done:
function(){if(this.K)this.K._Done.call(this);this.__proto__=C.Row;C.Row._Done.call(
this);},_ReInit:function(){C.Row._ReInit.call(this);if(this.K)this.K._ReInit.call(
this);},_Mark:function(D){C.Row._Mark.call(this,D);if(this.K)this.K._Mark(D);},_variants:
function(){return A.abt.Rating._variants();},K:null,_className:"Device::Rating"};
C.HelperClass={TP:null,AgU:null,ARX:null,ARY:null,V:null,Aq:null,Kr:null,Sh:null
,Ac0:null,TU:null,TT:null,Adm:null,AeK:null,AeJ:null,AeI:null,AeL:null,AfQ:null,
AES:0,Init:function(aArg){A.ow([this,this.ARu],this);},AjM:function(E){this.TP=E;
A.aat([this,this.Aqb,this.AjM],0);},ADF:function(E){this.AgU=E;A.aat([this,this.
A5W,this.ADF],0);},BwP:function(H){switch(A._GetAutoObject(C.Device).ScanState){
case 0:break;case 2:{var As5=A._GetAutoObject(C.Device).PD;if(!As5)throw new Error(
ATk);switch(As5.TransponderType){case 1:this.AjM(As5);break;case 2:this.AQ1(As5);
break;case 3:this.ADF(As5);break;case 4:this.AQ2(As5);break;case 0:break;default:
throw new Error(ATl);}}break;case 4:A._GetAutoObject(C.Device).A5(11,true,A.jm,2000
,null);break;case 3:A._GetAutoObject(C.Device).A5(12,true,A.jm,2000,null);break;
case 1:break;default:throw new Error(ATm);}},AjX:function(){this.AjM(null);this.
AQ1(null);this.ADF(null);this.AQ2(null);},ADK:function(E){if(this.K&&this.K.ADK)
return this.K.ADK.apply(this,arguments);else return C.HelperClass.A9n.apply(this
,arguments);},A9n:function(E){A.aat([this,this.Uf,this.Ug],0);A._GetAutoObject(C.
Device).SetSystemTime(E);},Ug:function(An){this.ADK(An);},DB:function(){if(this.
K&&this.K.DB)return this.K.DB.apply(this,arguments);else return C.HelperClass.A9j.
apply(this,arguments);},A9j:function(){var B;return((B=(this.Aq.A$N()|0))<0)?B+0x100000000:
B;},Uf:function(){return this.DB();},Aq2:function(){A._GetAutoObject(C.Device).Se(-
1);this.V.G_();A.vv(this.V,0);},A4I:function(L1){if(!L1){A.aa8("%s%U",ATn,L1);return false;
}var A9=A._GetAutoObject(C.Device).Ao.AiZ(22,L1);return this.HF(A9);},Al2:function(
AnG,AG7){switch(AnG){case 0:{var An7=AG7;switch(An7){case 14:return A.z2(A.abg.AeG
);case 6:return Arz;case 4:return A.z2(A.abg.AfW);case 28:return Aww;case 7:return A.
z2(A.abg.Aeq);case 2:return A.z2(A.abg.O);case 0:return A.z2(A.abg.HA);case 37:return QW;
case 8:return A.z2(A.abg.Alarm);case 9:return A.z2(A.abg.AAo);case 38:return A.z2(
A.abg.ALK);case 11:return A.z2(A.abg.Fever);case 27:return Awx;case 10:return A.
z2(A.abg.BkN);case 12:return A.z2(A.abg.AqN);case 29:return A.z2(A.abg.AO7);case
18:return A.z2(A.abg.Weighing);case 17:return ATo;case 5:return A.z2(A.abg.Temperature
);case 3:return A.z2(A.abg.Bge);case 26:return A.z2(A.abg.Yt);case 35:return A.z2(
A.abg.Yt)+ATp;case 36:return ATq;case 15:return ATr;case 24:return AFo;case 20:return AFp;
case 30:return AeS;case 21:return Anl;case 19:return ATs;case 22:return A.z2(A.abg.
Transponder);case 1:return A.z2(A.abg.Gr);case 34:return A.z2(A.abg.I$);case 13:
return AFq;case 31:return Akj;default:{A.aa8("%s",AFr+An7.toFixed());return Awy+
An7.toFixed();}}}case 1:{var An7=AG7;switch(An7){case 1:return A.z2(A.abg.Animal
);case 3:return A.z2(A.abg.AEf);case 8:return A.z2(A.abg.Ag9);case 5:return A.z2(
A.abg.AEh);case 2:return A.z2(A.abg.Feed);case 4:return A.z2(A.abg.AEi);case 7:return A.
z2(A.abg.Temperature);case 6:return A.z2(A.abg.Bu);default:{A.aa8("%s",ATt+An7.toFixed(
));return Awy+An7.toFixed();}}}default:A.aa8("%s",(ATu+AnG.toFixed())+ATv);}return A.
jm;},A3X:function(AnG,AL){var result=A.jm;if(!!AL){result=this.Al2(AnG,AL.ET);result=((
result+N2)+A._GetAutoObject(C.Converter).A3I(AL.Operator))+N2;if(!!(C.Int32FilterCriterion.
isPrototypeOf(AL)?AL:null))result=result+(C.Int32FilterCriterion.isPrototypeOf(AL
)?AL:null).A4.toFixed();else if(!!(C.UInt32FilterCriterion.isPrototypeOf(AL)?AL:
null))result=result+(C.UInt32FilterCriterion.isPrototypeOf(AL)?AL:null).A4.toFixed(
);else if(!!(C.StringFilterCriterion.isPrototypeOf(AL)?AL:null))result=result+(C.
StringFilterCriterion.isPrototypeOf(AL)?AL:null).A4;else if(!!(C.BoolFilterCriterion.
isPrototypeOf(AL)?AL:null)){if((C.BoolFilterCriterion.isPrototypeOf(AL)?AL:null).
A4)result=this.Al2(AnG,AL.ET);else result=A.jm;}else if(!!(C.GenderFilterCriterion.
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
AL)?AL:null).A4);}else A.aa8("%s",ATw);}return result;},NV:function(aString,A_B,
Btw){var result=A.jm;var Bb_=false;var index=0;var Bty=A_B.length;while(!Bb_){var
A0Y=aString.indexOf(A_B,index);if(A0Y!==-1){result=(result+A.aaY(aString,index,A0Y-
index))+Btw;index=A0Y+Bty;}else{var A_F=aString.length;if(index<A_F)result=result+
A.aa4(aString,A_F-index);Bb_=true;}}return result;},AQ1:function(E){this.ARX=E;A.
aat([this,this.BhK,this.AQ1],0);},AQ2:function(E){this.ARY=E;A.aat([this,this.BhL
,this.AQ2],0);},Bab:function(){return((A._GetAutoObject(C.Device).ScanState===2)&&
!!A._GetAutoObject(C.Device).PD)&&(A._GetAutoObject(C.Device).PD.TransponderType===
1);},Afj:function(H){if(!this.V.Amc()&&!!this.V.Id)this.Bgd(this.V.Id);},At0:function(
Ee){return A._GetAutoObject(C.Helper).TU.Get(Ee);},A3T:function(Ee){return A._GetAutoObject(
C.Helper).TT.Get(Ee);},A31:function(){var P=0;var min=32767;while(P<A._GetAutoObject(
C.Helper).TU.Mx){if(A._GetAutoObject(C.Helper).TU.Get(P)<min)min=A._GetAutoObject(
C.Helper).TU.Get(P);P=P+1;}return min;},ARu:function(H){A.y_([this,this.Afj],A._GetAutoObject(
C.Device).Ao,0);},AOQ:function(DX){if(!DX)return false;var BfN=(((this.Ax_(DX.Faeces
)||this.Ax_(DX.Feed))||this.Ax_(DX.Appearance))||this.Ax_(DX.Respiratory))||this.
Ax_(DX.RatingTemperature);return BfN||this.A4u(DX);},Ax_:function(A_f){return(A_f===
2)||(A_f===1);},A4u:function(DX){return!!DX&&(DX.Temperature>A._GetAutoObject(C.
Helper).At0(A._GetAutoObject(C.Helper).V.AnimalType));},HF:function(L0){var AZ2=
false;if(L0>=0){if(L0!==this.V.CH)A._GetAutoObject(C.Device).Se(L0);AZ2=this.V.EK(
L0,A._GetAutoObject(C.Device).Ao);if(AZ2)A.vv(this.V,0);}else{A._GetAutoObject(C.
Device).Se(-1);this.V.G_();A.vv(this.V,0);}return AZ2;},Ag2:function(Ahl){var B;
return(((B=(this.Aq.A$N()|0))<0)?B+0x100000000:B)-this.Atw(Ahl);},Arf:function(){
var B;A.ow([B=this.Kr,B.Av5],this);},BxX:function(H){A._GetAutoObject(C.Device).
A5(16,false,AbS,0,null);A._GetAutoObject(C.Device).A5(5,true,A.jm,0,null);},Bkg:
function(H){var Ar=(C.PopupContext.isPrototypeOf(H)?H:null);if(!!Ar&&(Ar.PopupState===
5))this.Arf();},Bj6:function(E){if(this.AES===E)return;this.AES=E;A._GetAutoObject(
C.Device).A5(16,true,this.AES.toFixed(),0,[this,this.Bkg]);},ME:function(Bs8,BtN
){var D2;var BcF=A._NewObject(A.Core.Am8,0);var Gp=A._NewObject(A.Core.Bu,0);var
KV=A._NewObject(A.Core.Bu,0);Gp.Initialize(Bs8);KV.Initialize(BtN);D2=KV.Bem(Gp);
BcF.Initialize2(0,D2.ABz,D2.ACk,D2.AEt);if(Gp.J(BcF).Gu===Gp.Gu)return D2.J9;else
return D2.J9+1;},BxZ:function(H){A._GetAutoObject(C.Device).UpdateMeasureState(3
);if((A._GetAutoObject(C.Device).Kj>=A._GetAutoObject(C.Device).Zb)&&(A._GetAutoObject(
C.Device).Kj<=A._GetAutoObject(C.Helper).At0(A._GetAutoObject(C.Helper).V.AnimalType
))){var Buf=A._GetAutoObject(C.Helper).V.Id;var Bxr=A._GetAutoObject(C.Device).Ao.
K4(0,Buf);A._GetAutoObject(C.Device).Ao.Na(Bxr,9,false);A._GetAutoObject(C.Device
).Ao.Bl(A._GetAutoObject(C.Device).Ao.Filter);}},AI5:function(H){var Bdt=A._GetAutoObject(
C.Helper).At0(A._GetAutoObject(C.Helper).V.AnimalType);var Bdn=A._GetAutoObject(
C.Helper).A3T(A._GetAutoObject(C.Helper).V.AnimalType);var AsZ=A.aaC(Bdt-100,Bdn+
100);this.A$s(AsZ);},Atw:function(Ahl){return Ahl*86400;},Akb:function(Kn){var B;
if(!!Kn&&(Kn<(((B=Math.trunc(Math.pow(10,A._GetAutoObject(C.Device).Fx)))<0)?B+0x10000000000000000:
B)))return-1;return A._GetAutoObject(C.Helper).U8(Kn,A._GetAutoObject(C.Device).
Fx&0xFF,A._GetAutoObject(C.Device).FQ&0xFF)|0;},AEg:function(DX){if(!DX)return false;
return((!!DX.Faeces||!!DX.Feed)||!!DX.Appearance)||!!DX.Respiratory;},Ag_:function(
AYb,A_H,AG8,Ee){var B;var AoK;if((AYb<650000)&&(A_H<this.DB())){var A_4=this.AfQ.
At2(Ee);var A_3=0;if(A_4>=0)A_3=this.AeI.Get(A_4);AoK=AYb+(this.ME(A_H,this.DB()
)*A_3);if(AG8>0){var AY_=this.Ay1(AG8);AoK=(Math.trunc(((((B=AoK)<0)?B+0x10000000000000000:
B)+Math.trunc(AY_/2))/AY_)*AY_)|0;}if(AoK>650000)AoK=650000;}else AoK=AYb;return AoK;
},ABe:function(DX){var Ao6=A._GetAutoObject(C.Converter).Ac1(DX.Faeces);if(Ao6<A.
_GetAutoObject(C.Converter).Ac1(DX.Feed))Ao6=A._GetAutoObject(C.Converter).Ac1(DX.
Feed);if(Ao6<A._GetAutoObject(C.Converter).Ac1(DX.Appearance))Ao6=A._GetAutoObject(
C.Converter).Ac1(DX.Appearance);if(Ao6<A._GetAutoObject(C.Converter).Ac1(DX.Respiratory
))Ao6=A._GetAutoObject(C.Converter).Ac1(DX.Respiratory);return A._GetAutoObject(
C.Converter).A8o(Ao6);},AvT:function(DX,Ng){if(!!DX){DX.OnSetFaeces(Ng);DX.OnSetFeed(
Ng);DX.OnSetAppearance(Ng);DX.OnSetRespiratory(Ng);}},Be8:function(AF,AHb,Ab_,Wu
,AeY){if(!AF)throw new Error(ArA);var Bb=A._NewObject(C.Filter,0);var Aov=AF.Filter;
var N6=A._NewObject(C.Int32FilterCriterion,0);N6.Operator=0;N6.ET=1;N6.A4=Ab_;Bb.
C0(N6);if(Wu>0){var Oj=A._NewObject(C.UInt32FilterCriterion,0);Oj.Operator=2;Oj.
ET=6;Oj.A4=Wu;Bb.C0(Oj);}if(AeY>0){var N$=A._NewObject(C.UInt32FilterCriterion,0
);N$.Operator=3;N$.ET=6;N$.A4=AeY;Bb.C0(N$);}AF.Bl(Bb);var L2=A._NewObject(C.Int32ArrayWrapper
,0);L2.YK(6);var P;for(P=0;P<L2.Mx;P=P+1)L2.Set(P,0);var Uo;for(P=0;P<AF.Cj();P=
P+1){Uo=AF.IX(P,AHb);L2.Set(Uo,L2.Get(Uo)+1);}AF.Bl(Aov);return L2;},Y2:function(
Ahl){var B;var Gp=A._NewObject(A.Core.Bu,0);var BcE=A._NewObject(A.Core.Am8,0);Gp.
Initialize(A._GetAutoObject(C.Converter).Ag4());BcE.Initialize2(Ahl,0,0,0);Gp=Gp.
Bly(BcE);return((B=(Gp.JL()|0))<0)?B+0x100000000:B;},A3U:function(AF,Ab_,AeY,Wu){
if(!AF)throw new Error(ArA);var Bb=A._NewObject(C.Filter,0);var Aov=AF.Filter;var
N6=A._NewObject(C.Int32FilterCriterion,0);N6.Operator=0;N6.ET=1;N6.A4=Ab_;Bb.C0(
N6);if(Wu>0){var Oj=A._NewObject(C.UInt32FilterCriterion,0);Oj.Operator=2;Oj.ET=
6;Oj.A4=Wu;Bb.C0(Oj);}if(AeY>0){var N$=A._NewObject(C.UInt32FilterCriterion,0);N$.
Operator=3;N$.ET=6;N$.A4=AeY;Bb.C0(N$);}AF.Bl(Bb);var L2=A._NewObject(C.Int32ArrayWrapper
,0);L2.YK(6);var P;for(P=0;P<L2.Mx;P=P+1)L2.Set(P,0);var AnV=A._NewObject(C.Rating
,0);var AY2;for(P=0;P<AF.Cj();P=P+1){AnV.EK(P,AF);if(A._GetAutoObject(C.Helper).
AEg(AnV)){AY2=A._GetAutoObject(C.Helper).ABe(AnV);L2.Set(AY2,L2.Get(AY2)+1);}}AF.
Bl(Aov);return L2;},AZy:function(AF,Ab_,BuR){if(!AF)throw new Error(ArA);var Bb=
A._NewObject(C.Filter,0);var Aov=AF.Filter;var N6=A._NewObject(C.Int32FilterCriterion
,0);N6.Operator=0;N6.ET=1;N6.A4=Ab_;Bb.C0(N6);var Wu=A._GetAutoObject(C.Converter
).Ag4()+A._GetAutoObject(C.Helper).Atw(BuR);var AeY=Wu+A._GetAutoObject(C.Helper
).Atw(1);var Oj=A._NewObject(C.UInt32FilterCriterion,0);Oj.Operator=2;Oj.ET=6;Oj.
A4=Wu;Bb.C0(Oj);var N$=A._NewObject(C.UInt32FilterCriterion,0);N$.Operator=3;N$.
ET=6;N$.A4=AeY;Bb.C0(N$);AF.Bl(Bb);var AnV=A._NewObject(C.Rating,0);var Uo;var Ly=
0;var P;for(P=0;P<AF.Cj();P=P+1){AnV.EK(P,AF);if(A._GetAutoObject(C.Helper).AEg(
AnV)){Uo=A._GetAutoObject(C.Helper).ABe(AnV);if(A._GetAutoObject(C.Converter).Ac1(
Uo)>A._GetAutoObject(C.Converter).Ac1(Ly))Ly=Uo;}}AF.Bl(Aov);return Ly;},Amb:function(
){if((A._GetAutoObject(C.Device).WeightRecordingScope===2)||(A._GetAutoObject(C.
Device).WeightRecordingScope===1))return true;else return false;},A4x:function(){
if((A._GetAutoObject(C.Device).WeightRecordingScope===2)||!A._GetAutoObject(C.Device
).WeightRecordingScope)return true;else return false;},Be9:function(AF,AHb,Ab_,Wu
,AeY){if(!AF)throw new Error(ArA);var Bb=A._NewObject(C.Filter,0);var Aov=AF.Filter;
var N6=A._NewObject(C.Int32FilterCriterion,0);N6.Operator=0;N6.ET=1;N6.A4=Ab_;Bb.
C0(N6);if(Wu>0){var Oj=A._NewObject(C.UInt32FilterCriterion,0);Oj.Operator=2;Oj.
ET=6;Oj.A4=Wu;Bb.C0(Oj);}if(AeY>0){var N$=A._NewObject(C.UInt32FilterCriterion,0
);N$.Operator=3;N$.ET=6;N$.A4=AeY;Bb.C0(N$);}AF.Bl(Bb);var L2=A._NewObject(C.Int32ArrayWrapper
,0);L2.YK(6);var P;for(P=0;P<L2.Mx;P=P+1)L2.Set(P,0);if(AF.Cj()>0){var Uo=AF.IX(
0,AHb);var AoO=AF.Hy(P,6);var Ad=A._NewObject(A.Core.Bu,0);Ad.Initialize(AoO);var
Ao5=Uo;var AH$=A._NewObject(A.Core.Bu,0);AH$.Initialize(Ad.JL());for(P=1;P<AF.Cj(
);P=P+1){Uo=AF.IX(P,AHb);AoO=AF.Hy(P,6);Ad.Initialize(AoO);if((Ad.Aa9()!==AH$.Aa9(
))||(Ad.Year!==AH$.Year)){L2.Set(Ao5,L2.Get(Ao5)+1);AH$.Initialize(Ad.JL());Ao5=
Uo;}else if(!!Uo&&(Uo<Ao5))Ao5=Uo;}L2.Set(Ao5,L2.Get(Ao5)+1);}AF.Bl(Aov);return L2;
},Apb:function(LX){var B;var Gp=A._NewObject(A.Core.Bu,0);Gp.Initialize(LX);Gp.AmH(
0);Gp.AmK(0);Gp.AmN(0);return((B=(Gp.JL()|0))<0)?B+0x100000000:B;},ALY:function(
LX){var B;LX=LX+86400;var Gp=A._NewObject(A.Core.Bu,0);Gp.Initialize(LX);Gp.AmH(
0);Gp.AmK(0);Gp.AmN(0);return((B=(Gp.JL()|0))<0)?B+0x100000000:B;},Be$:function(
BxW,Bu2,Alo,AkN){var A$n=A._GetAutoObject(C.Helper).ME(BxW,Bu2);if(A$n>0)return((
AkN-Alo)/A$n)|0;return 0;},Bl_:function(Bs9,BtO){var Gp=A._NewObject(A.Core.Bu,0
);var KV=A._NewObject(A.Core.Bu,0);Gp.Initialize(Bs9);KV.Initialize(BtO);return(
Gp.Year===KV.Year)&&(Gp.Aa9()===KV.Aa9());},A3Z:function(){var Bb=A._GetAutoObject(
C.Helper).MY();var Bao=A._NewObject(C.UInt32FilterCriterion,0);var BtX=A._GetAutoObject(
C.Helper).Y2(A._GetAutoObject(C.Device).Apy)-1;Bao.Initialize(28,2,BtX,true);Bb.
C0(Bao);var Uk=A._NewObject(C.AnimalTypeFilterCriterion,0);Uk.Initialize(14,0,1,
true);Bb.C0(Uk);if(A._GetAutoObject(C.Device).AlZ){var Ayn=A._NewObject(C.UInt32FilterCriterion
,0);var AZX=A._GetAutoObject(C.Helper).DB()-21600;Ayn.Initialize(30,3,AZX,true);
Bb.C0(Ayn);}return Bb;},BkQ:function(){var Jg=A._GetAutoObject(C.Device).Ao.Op();
if(Jg<=0)A.aa8("%s",AbR);else{A._GetAutoObject(C.Device).Ao.G_();A._GetAutoObject(
C.Device).Ao.Or(Jg);}Jg=A._GetAutoObject(C.Device).AfI.Op();if(Jg<=0)A.aa8("%s",
AbR);else{A._GetAutoObject(C.Device).AfI.G_();A._GetAutoObject(C.Device).AfI.Or(
Jg);}Jg=A._GetAutoObject(C.Device).Bq.Op();if(Jg<=0)A.aa8("%s",AbR);else{A._GetAutoObject(
C.Device).Bq.G_();A._GetAutoObject(C.Device).Bq.Or(Jg);}Jg=A._GetAutoObject(C.Device
).Pa.Op();if(Jg<=0)A.aa8("%s",AbR);else{A._GetAutoObject(C.Device).Pa.G_();A._GetAutoObject(
C.Device).Pa.Or(Jg);}},Bgd:function(Ab_){var A9=A._GetAutoObject(C.Device).Ao.K4(
0,Ab_);return this.HF(A9);},AOV:function(L1){var AhH=A._GetAutoObject(C.Device).
Ao.Af5(22,L1);return AhH;},AMD:function(){var Bb=A._GetAutoObject(C.Helper).MY();
var Aii=A._NewObject(C.UInt64FilterCriterion,0);Aii.Initialize(22,0,0,true);Bb.C0(
Aii);return Bb;},AMx:function(AnO,BuZ,Sz){var Zz=-1;switch(AnO){case 2:Zz=30;break;
case 3:Zz=31;break;case 10:Zz=19;break;default:A.aa8("%s%e",Sw,AnO);}if(Zz<0)return null;
var Acl=A._NewObject(C.UInt32FilterCriterion,0);Acl.Initialize(Zz,3,A._GetAutoObject(
C.Helper).DB()-BuZ,Sz);return Acl;},BkP:function(aFilter){var AL=aFilter.D0(30,3
);if(!!AL)aFilter.QF(AL);AL=aFilter.D0(31,3);if(!!AL)aFilter.QF(AL);AL=aFilter.D0(
19,3);if(!!AL)aFilter.QF(AL);},AYT:function(Ae7,Axc,AF){if(AF.K8())return 5;if(Ae7.
VisualId<=0)switch(Axc){case 0:if(!Ae7.NaisId)return 1;break;case 1:if(!Ae7.TransponderId
)return 1;break;case 3:case 2:case 5:case 4:return 1;default:throw new Error(AFs+
Axc.toFixed());}if((!Ae7.NaisId&&!Ae7.TransponderId)&&A._GetAutoObject(C.Device).
Ao.AiW(1,Ae7.VisualId))return 2;if(!!Ae7.NaisId&&A._GetAutoObject(C.Helper).AOT(
Ae7.NaisId))return 3;if(!!Ae7.TransponderId&&A._GetAutoObject(C.Helper).AOV(Ae7.
TransponderId))return 4;return 0;},Ao9:function(Eu){Eu.DW(A._GetAutoObject(C.Device
).AnimalType);Eu.NP(A._GetAutoObject(C.Device).Breed);Eu.R8(A._GetAutoObject(C.Helper
).DB()-A._GetAutoObject(C.Helper).Atw(A._GetAutoObject(C.Device).Aiu));Eu.JM(A._GetAutoObject(
C.Device).Gender);Eu.M9(A._GetAutoObject(C.Device).WhereAbouts);},AKc:function(Q1
,Eu){var GF=0;switch(Q1){case 0:GF=A._GetAutoObject(C.Helper).Akb(Eu.NaisId);break;
case 1:GF=A._GetAutoObject(C.Helper).Akb(Eu.TransponderId);break;case 3:GF=A._GetAutoObject(
C.Device).ApI;break;case 2:GF=A._GetAutoObject(C.Device).ApJ;break;case 4:case 5:
GF=A._GetAutoObject(C.Device).Ai7;break;default:throw new Error(AFt+Q1.toFixed()
);}return GF;},A8v:function(Aks,LY,BsV,A_j,Btr){var B;var PZ=null;var WG=null;switch(
Aks){case 0:{PZ=[B=A._GetAutoObject(C.Device),B.AQf,B.AXz];WG=[B=A._GetAutoObject(
C.Device),B.AuO,B.Aw8];}break;case 1:switch(LY){case 1:{PZ=[B=A._GetAutoObject(C.
Device),B.A5R,B.A9R];WG=[B=A._GetAutoObject(C.Device),B.AuM,B.Aw6];}break;case 0:{
PZ=[B=A._GetAutoObject(C.Device),B.A5S,B.A9S];WG=[B=A._GetAutoObject(C.Device),B.
AuN,B.Aw7];}break;case 2:{PZ=[B=A._GetAutoObject(C.Device),B.AQf,B.AXz];WG=[B=A.
_GetAutoObject(C.Device),B.AuO,B.Aw8];}break;default:throw new Error(Awz+LY.toFixed(
));}break;default:throw new Error(AFu+Aks.toFixed());}if(!!PZ&&!!WG){PZ[2].call(
PZ[0],BsV);if((WG[1].call(WG[0])>0)&&(A_j<Btr))PZ[2].call(PZ[0],PZ[1].call(PZ[0]
)+WG[1].call(WG[0]));else if((WG[1].call(WG[0])<0)&&(A_j>0))PZ[2].call(PZ[0],PZ[
1].call(PZ[0])+WG[1].call(WG[0]));return PZ[1].call(PZ[0]);}return 0;},AST:function(
Eu,Aks,Bs2){if(!Eu||(Bs2===true))return;switch(Aks){case 0:Eu.M7(A._GetAutoObject(
C.Device).Auz);break;case 1:switch(Eu.Gender){case 0:Eu.M7(A._GetAutoObject(C.Device
).ACn);break;case 1:Eu.M7(A._GetAutoObject(C.Device).ACm);break;case 2:Eu.M7(A._GetAutoObject(
C.Device).Auz);break;default:throw new Error(Awz+Eu.Gender.toFixed());}break;default:
throw new Error(AFu+Aks.toFixed());}},BfO:function(Q1,Eu){var result=false;switch(
Q1){case 0:result=!!Eu.NaisId;break;case 1:result=!!Eu.TransponderId;break;case 3:
case 2:case 4:case 5:result=false;break;default:throw new Error(AFt+Q1.toFixed()
);}return result;},AIm:function(Eu,A_e,Axc,Ar8,Ae1){switch(A_e){case 2:if(Ar8<=0
)A._GetAutoObject(C.Device).A5(21,true,Eu.VisualId.toFixed(),0,Ae1);else A._GetAutoObject(
C.Device).A5(48,true,(Eu.VisualId.toFixed()+AwA)+Ar8.toFixed(),0,Ae1);break;case
3:if(Ar8<=0)A._GetAutoObject(C.Device).A5(21,true,A._GetAutoObject(C.Converter).
T0(Eu.NaisId),0,Ae1);else A._GetAutoObject(C.Device).A5(48,true,(A._GetAutoObject(
C.Converter).T0(Eu.NaisId)+AwA)+Ar8.toFixed(),0,Ae1);break;case 4:if(Ar8<=0)A._GetAutoObject(
C.Device).A5(25,true,A._GetAutoObject(C.Converter).T0(Eu.TransponderId),0,Ae1);else
A._GetAutoObject(C.Device).A5(47,true,(A._GetAutoObject(C.Converter).T0(Eu.TransponderId
)+AwA)+Ar8.toFixed(),0,Ae1);break;case 1:switch(Axc){case 1:A._GetAutoObject(C.Device
).A5(42,true,A.jm,0,Ae1);break;case 0:A._GetAutoObject(C.Device).A5(43,true,A.jm
,0,Ae1);break;case 3:case 2:case 5:case 4:A._GetAutoObject(C.Device).A5(22,true,
A.jm,0,Ae1);break;default:throw new Error(AFs+Axc.toFixed());}break;case 5:A._GetAutoObject(
C.Device).A5(41,true,A._GetAutoObject(C.Device).Ao.Hz().toFixed(),0,Ae1);break;case
0:break;default:throw new Error(ATx+A_e.toFixed());}},A$R:function(A_q,LY){var B;
var Ayr=null;switch(A_q){case 0:Ayr=[B=A._GetAutoObject(C.Device),B.AuO,B.Aw8];break;
case 1:switch(LY){case 1:Ayr=[B=A._GetAutoObject(C.Device),B.AuM,B.Aw6];break;case
0:Ayr=[B=A._GetAutoObject(C.Device),B.AuN,B.Aw7];break;case 2:Ayr=[B=A._GetAutoObject(
C.Device),B.AuO,B.Aw8];break;default:throw new Error(Awz+LY.toFixed());}break;default:
throw new Error(ATy+A_q.toFixed());}return Ayr;},A39:function(PO,BtE){var ZX=A._NewObject(
A.Core.Bu,0);ZX.Initialize(PO);var AzH=ZX.Year;var A9=A._GetAutoObject(C.Device).
Pa.K4(0,AzH);var Un=A._NewObject(C.CalfDeregistrations,0);if(A9<0){if(A._GetAutoObject(
C.Device).Pa.K8())A._GetAutoObject(C.Device).A5(51,true,A._GetAutoObject(C.Device
).Pa.Hz().toFixed(),0,null);else{Un.Gd();Un.AjO(AzH);}}else Un.EK(A9,A._GetAutoObject(
C.Device).Pa);Un.Au6(Un.Deregistrations+1);if(BtE)Un.Au5(Un.Deaths+1);Un.Cr(A._GetAutoObject(
C.Device).Pa);},AKa:function(Ly,AkX,AkO){var AIJ=0;if((AkX&&(AkO===1))||(Ly===1)
)AIJ=1;else if((AkX&&(AkO===2))||(Ly===2))AIJ=2;else if(!!Ly&&(Ly!==5))AIJ=Ly;return AIJ;
},A$s:function(BtW){var B;if(A._GetAutoObject(C.Device).MeasureState===1){this.Sh.
Cv=A._GetAutoObject(C.Device).Zb;this.Sh.B1=BtW;this.Sh.AEN(this);}},AA5:function(
){var Bb=this.AMw();var Bad=A._NewObject(C.BoolFilterCriterion,0);Bad.Initialize(
38,0,true,true);Bb.C0(Bad);return Bb;},A3S:function(JU){var Bb=A._GetAutoObject(
C.Helper).MY();if(A._GetAutoObject(C.Device).Aly){var AZB=A._GetAutoObject(C.Helper
).AMx(JU,21600,true);Bb.C0(AZB);}return Bb;},A33:function(){var Bb=A._GetAutoObject(
C.Helper).MY();var BaD=A._NewObject(C.UInt64FilterCriterion,0);BaD.Initialize(26
,0,0,true);Bb.C0(BaD);return Bb;},A36:function(){var B;var Bb=A._GetAutoObject(C.
Helper).MY();var Ayx=(C.WhereAboutsFilterCriterion.isPrototypeOf(B=Bb.D0(34,3))?
B:null);if(!!Ayx)Bb.QF(Ayx);var BbS=A._NewObject(C.BoolFilterCriterion,0);BbS.Initialize(
37,0,true,true);Bb.C0(BbS);return Bb;},U8:function(A1,Btx,AYc){var B;A1=Math.trunc(
A1/this.Ay1(Btx));A1%=this.Ay1(AYc);return A1;},Ay1:function(A_r){switch(A_r){case
0:return 1;case 1:return 10;case 2:return 100;case 3:return 1000;case 4:return 10000;
case 5:return 100000;case 6:return 1000000;case 7:return 10000000;case 8:return 100000000;
case 9:return 1000000000;case 10:return 10000000000;case 11:return 100000000000;
case 12:return 1000000000000;case 13:return 10000000000000;case 14:return 100000000000000;
case 15:return 1000000000000000;default:throw new Error(ATz+A_r.toFixed());}},MY:
function(){var Bb=A._NewObject(C.Filter,0);var Bcc=A._NewObject(C.BoolFilterCriterion
,0);Bcc.Initialize(10,0,true,true);Bb.C0(Bcc);var Ayx=A._NewObject(C.WhereAboutsFilterCriterion
,0);Ayx.Initialize(34,3,6,true);Bb.C0(Ayx);return Bb;},ApU:function(aFilter){return!
this.AA8(aFilter);},AA8:function(aFilter){var Jw=0;var Av=aFilter.AMy();while(!!
Av){if(Av.AaR===false)Jw++;Av=aFilter.AMC(Av);}return Jw;},AMw:function(){var Bb=
this.MY();var Uk=A._NewObject(C.AnimalTypeFilterCriterion,0);Uk.Initialize(14,0,
1,true);Bb.C0(Uk);return Bb;},ABb:function(){var B;var A1o;var N8=this.Bfp();A1o=(((
B=A._GetAutoObject(C.Converter).Ats(N8))<0)?B+0x10000000000000000:B)*this.Ay1(12
);if((N8===10)&&(A._GetAutoObject(C.Device).YM>0)){var Bvl=A._GetAutoObject(C.Helper
).U8(A._GetAutoObject(C.Device).YM,10,2)*this.Ay1(8);A1o+=Bvl;}return A1o;},Bfp:
function(){var N8=0;if(A._GetAutoObject(C.Device).YM>0)N8=A._GetAutoObject(C.Converter
).AeF(A._GetAutoObject(C.Device).YM);if(!N8)N8=A._GetAutoObject(C.Converter).A4A(
A._GetAutoObject(C.Device).Language);return N8;},AOT:function(Wt){var AhH=A._GetAutoObject(
C.Device).Ao.Af5(26,Wt);return AhH;},Ajd:function(Ae2){switch(Ae2){case 0:case 1:
case 2:case 3:case 4:case 5:return false;case 6:case 7:case 8:case 9:case 10:return true;
default:throw new Error(ATA+Ae2.toFixed());}},Bdl:function(Q1,Eu){var GF=0;switch(
Q1){case 1:GF=A._GetAutoObject(C.Helper).Akb(Eu.TransponderId);break;case 0:if(!
A._GetAutoObject(C.Device).EartagNrAssignmentMode)GF=A._GetAutoObject(C.Device).
Ai7;else switch(Eu.Gender){case 0:GF=A._GetAutoObject(C.Device).ApJ;break;case 1:
GF=A._GetAutoObject(C.Device).ApI;break;case 2:GF=A._GetAutoObject(C.Device).Ai7;
break;default:throw new Error(AFv+Eu.Gender.toFixed());}break;default:throw new Error(
ATB+Q1.toFixed());}return GF;},BeX:function(){var B;var Ax8=(((((((A.z2(A.abg.AgX
)+A.z2(A.abg.Colon))+OQ)+A._GetAutoObject(C.Device).AgX)+AwB)+A.z2(A.abg.Bkx))+A.
z2(A.abg.Colon))+OQ)+A._GetAutoObject(A.abk.K1).BeV(((B=A._GetAutoObject(C.Device
).Qu.Timestamp)<0)?B+0x100000000:B);return Ax8;},BeY:function(){var B;var Ax8=((((((((((((((((((((((((((((
ATC+A._GetAutoObject(C.Device).Rt.ACb.toFixed())+Li)+A._GetAutoObject(C.Device).
Rt.ACj.toFixed())+Li)+A._GetAutoObject(C.Device).Rt.AEp.toFixed())+OP)+A._GetAutoObject(
C.Device).Rt.AAw)+OP)+A._GetAutoObject(A.abk.K1).Ai0(((B=A._GetAutoObject(C.Device
).Rt.Timestamp)<0)?B+0x100000000:B))+OQ)+ATD)+A._GetAutoObject(C.Device).R3.ACb.
toFixed())+Li)+A._GetAutoObject(C.Device).R3.ACj.toFixed())+Li)+A._GetAutoObject(
C.Device).R3.AEp.toFixed())+OP)+A._GetAutoObject(C.Device).R3.AAw)+OP)+A._GetAutoObject(
A.abk.K1).Ai0(((B=A._GetAutoObject(C.Device).R3.Timestamp)<0)?B+0x100000000:B))+
OQ)+ATE)+A._GetAutoObject(C.Helper).Bfs())+OP)+A._GetAutoObject(C.Device).GetCommitHash(
))+OP)+A._GetAutoObject(C.Device).GetCommitCount().toFixed())+OP)+A._GetAutoObject(
A.abk.K1).Ai0(A._GetAutoObject(C.Device).GetCommitEpoch());return Ax8;},BeW:function(
){var B;var Ax8=(((((((((((((((((((((ATF+A._GetAutoObject(C.Device).Qu.APg.toFixed(
))+Li)+A._GetAutoObject(C.Device).Qu.APh.toFixed())+Li)+A._GetAutoObject(C.Device
).Qu.APf.toFixed())+OQ)+A.z2(A.abg.A3L))+A.z2(A.abg.Colon))+N2)+A._GetAutoObject(
A.abk.K1).Ai0(((B=A._GetAutoObject(C.Device).Qu.Timestamp)<0)?B+0x100000000:B))+
AwB)+ATG)+A._GetAutoObject(C.Device).Sj.ASM.toFixed())+Li)+A._GetAutoObject(C.Device
).Sj.ASN.toFixed())+Li)+A._GetAutoObject(C.Device).Sj.ASL.toFixed())+OQ)+A.z2(A.
abg.A3L))+A.z2(A.abg.Colon))+N2)+A._GetAutoObject(A.abk.K1).Ai0(((B=A._GetAutoObject(
C.Device).Sj.Timestamp)<0)?B+0x100000000:B);return Ax8;},A34:function(AYc){var B;
var P;var Ay6=A.jm;for(P=1;P<=AYc;P=P+1)if(!!A.aaC(0,2))Ay6=Ay6+String.fromCharCode(
A.aaC(97,104)&0xFFFF);else Ay6=Ay6+String.fromCharCode(A.aaC(48,57)&0xFFFF);return Ay6;
},Aay:function(Ee){var Axs=0;if(Ee===1)Ee=0;var A_9=this.AfQ.At2(Ee);if(A_9>=0)Axs=
this.AeL.Get(A_9);return Axs;},ABd:function(Ee){var FM=0;var AzE=this.AfQ.At2(Ee
);if(AzE>=0)FM=this.AeK.Get(AzE);return FM;},ABc:function(Ee){var FM=0;var AzE=this.
AfQ.At2(Ee);if(AzE>=0)FM=this.AeJ.Get(AzE);return FM;},A3W:function(){var Bb=this.
MY();var Uk=A._NewObject(C.AnimalTypeFilterCriterion,0);Uk.Initialize(14,0,A._GetAutoObject(
C.Device).AAP,true);Bb.C0(Uk);return Bb;},AOW:function(Kn){var BN=Math.trunc(Kn/
1000000000000)|0;if(!BN)return 0;else if(BN>=900)return 1;else if(!A._GetAutoObject(
C.Converter).ALp(BN))return 2;else return 3;},A38:function(){var Bb=A._GetAutoObject(
C.Helper).AMD();var Akv=A._GetAutoObject(C.Helper).Be7(3,A._GetAutoObject(C.Device
).ACe);Akv.AaR=true;Bb.C0(Akv);return Bb;},Be7:function(EE,A_d){var Av=A._NewObject(
C.UInt32FilterCriterion,0);Av.ET=4;switch(EE){case 2:{Av.Operator=3;Av.A4=A._GetAutoObject(
C.Helper).Y2(A_d);}break;case 3:{Av.Operator=2;Av.A4=A._GetAutoObject(C.Helper).
Y2(A_d-1);}break;default:A.aa8("%s%e",ATH,EE);}return Av;},Bfs:function(){return(((
A._GetAutoObject(C.Device).GetVersionMajor().toFixed()+Li)+A._GetAutoObject(C.Device
).GetVersionMinor().toFixed())+Li)+A._GetAutoObject(C.Device).GetVersionRev().toFixed(
);},Bdm:function(Q1,Eu){var GF=0;switch(Q1){case 0:GF=Eu.VisualId;break;case 2:GF=
A._GetAutoObject(C.Helper).Akb(Eu.TransponderId);break;case 1:if(!A._GetAutoObject(
C.Device).EartagNrAssignmentMode)GF=A._GetAutoObject(C.Device).Ai7;else switch(Eu.
Gender){case 0:GF=A._GetAutoObject(C.Device).ApJ;break;case 1:GF=A._GetAutoObject(
C.Device).ApI;break;case 2:GF=A._GetAutoObject(C.Device).Ai7;break;default:throw new
Error(AFv+Eu.Gender.toFixed());}break;default:throw new Error(ATI+Q1.toFixed());
}return GF;},A8w:function(){var B;var IQ=null;var SI=0;if(!A._GetAutoObject(C.Device
).EartagNrAssignmentMode){IQ=[B=A._GetAutoObject(C.Device),B.Amy,B.Any];SI=A._GetAutoObject(
C.Device).AtB;}else switch(A._GetAutoObject(C.Helper).V.Gender){case 1:{IQ=[B=A.
_GetAutoObject(C.Device),B.AuJ,B.Aw4];SI=A._GetAutoObject(C.Device).AAH;}break;case
0:{IQ=[B=A._GetAutoObject(C.Device),B.AuK,B.Aw5];SI=A._GetAutoObject(C.Device).AAI;
}break;case 2:{IQ=[B=A._GetAutoObject(C.Device),B.Amy,B.Any];SI=A._GetAutoObject(
C.Device).AtB;}break;default:;}if(!!IQ)switch(SI){case 1:IQ[2].call(IQ[0],A._GetAutoObject(
C.Helper).V.VisualId-1);break;case 0:IQ[2].call(IQ[0],A._GetAutoObject(C.Helper).
V.VisualId+1);break;default:;}},A4y:function(Wt,Eu){return(Eu.NaisId!==Wt)&&this.
AOT(Wt);},BfX:function(L1,Eu){return(Eu.TransponderId!==L1)&&this.AOV(L1);},AMv:
function(){var Bb=A._GetAutoObject(C.Helper).A36();var Ayp=A._NewObject(C.UInt64FilterCriterion
,0);Ayp.Initialize(35,5,0,true);Bb.C0(Ayp);return Bb;},AMF:function(){var Bb=A._GetAutoObject(
C.Helper).A36();var Ayp=A._NewObject(C.UInt64FilterCriterion,0);Ayp.Initialize(35
,0,0,true);Bb.C0(Ayp);return Bb;},Mw:function(AX5,Ahk){AX5.Ai(Ahk);AX5.Ap(Ahk);AX5.
X(Ahk);},A2X:function(Ahm){var B;var Z;var A0c=false;var WA=Ahm.U9(null,0x1);while(
!!WA&&(((B=WA)?B.__proto__:null)!==A.Core.Y)){Z=(A.kh.Ck.isPrototypeOf(WA)?WA:null
);if(!!Z){Z.Be(A0c);A0c=!A0c;}WA=Ahm.U9(WA,0x1);}},Aqb:function(){return this.TP;
},A5W:function(){return this.AgU;},BhK:function(){return this.ARX;},BhL:function(
){return this.ARY;},BhP:function(){return this.AES;},_Init:function(aArg){C.AlT.
_Init.call(this,aArg);C.Animal._Init.call(this.V={I:this},0);A.Core.Bu._Init.call(
this.Aq={I:this},0);A.abm.F_._Init.call(this.Kr={I:this},0);A.abm.F_._Init.call(
this.Sh={I:this},0);C.AKw._Init.call(this.Ac0={I:this},0);C.ASC._Init.call(this.
TU={I:this},0);C.ASB._Init.call(this.TT={I:this},0);C.UT._Init.call(this.Adm={I:
this},0);C.ATb._Init.call(this.AeK={I:this},0);C.ATa._Init.call(this.AeJ={I:this
},0);C.AS$._Init.call(this.AeI={I:this},0);C.ATd._Init.call(this.AeL={I:this},0);
C.AKx._Init.call(this.AfQ={I:this},0);this.__proto__=C.HelperClass;var B;this.Kr.
IF(1);this.Kr.FA(3000);this.Kr.B1=100;this.Sh.Au$(10);this.Sh.VN(5);this.Sh.IF(1
);this.Sh.FA(4000);this.Adm.B1=false;this.Adm.Cv=true;this.Adm.IF(1);this.Adm.FA(
100);this.Kr.R5=[this,this.BxX];this.Kr.Q=[this,this.BhP,this.Bj6];this.Sh.R5=[this
,this.BxZ];this.Sh.Q=[B=A._GetAutoObject(C.Device),B.ACI,B.AGQ];this.Adm.Q=[B=A.
_GetAutoObject(C.Device),B.ACJ,B.AGR];this.Init(aArg);var Lj=this._variants();if(
Lj){this.K={};Lj._Init.call(this,aArg);}},_Done:function(){if(this.K)this.K._Done.
call(this);this.__proto__=C.AlT;this.V._Done();this.Aq._Done();this.Kr._Done();this.
Sh._Done();this.Ac0._Done();this.TU._Done();this.TT._Done();this.Adm._Done();this.
AeK._Done();this.AeJ._Done();this.AeI._Done();this.AeL._Done();this.AfQ._Done();
C.AlT._Done.call(this);},_ReInit:function(){C.AlT._ReInit.call(this);this.V._ReInit(
);this.Aq._ReInit();this.Kr._ReInit();this.Sh._ReInit();this.Ac0._ReInit();this.
TU._ReInit();this.TT._ReInit();this.Adm._ReInit();this.AeK._ReInit();this.AeJ._ReInit(
);this.AeI._ReInit();this.AeL._ReInit();this.AfQ._ReInit();if(this.K)this.K._ReInit.
call(this);},_Mark:function(D){var B;C.AlT._Mark.call(this,D);if((B=this.TP)&&(B.
_cycle!=D))B._Mark(B._cycle=D);if((B=this.AgU)&&(B._cycle!=D))B._Mark(B._cycle=D
);if((B=this.ARX)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.ARY)&&(B._cycle!=
D))B._Mark(B._cycle=D);if((B=this.V)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Aq
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Kr)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Sh)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ac0)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.TU)._cycle!=D)B._Mark(B._cycle=D);if((B=this.TT)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Adm)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AeK)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.AeJ)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
AeI)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AeL)._cycle!=D)B._Mark(B._cycle=D);
if((B=this.AfQ)._cycle!=D)B._Mark(B._cycle=D);if(this.K)this.K._Mark(D);},_variants:
function(){return A.abt.HelperClass._variants();},K:null,_className:"Device::HelperClass"
};C.Helper={_Init:function(){C.HelperClass._Init.call(this,0);},_variants:function(
){return this;},_this:null};C.BoolFilterCriterion={A4:false,Adi:function(){var Av=
A._NewObject(C.BoolFilterCriterion,0);Av.Gt(this);return Av;},Gt:function(AL){C.
FilterCriterion.Gt.call(this,AL);var Av=(C.BoolFilterCriterion.isPrototypeOf(AL)?
AL:null);if(!!Av)this.A4=Av.A4;},Initialize:function(AX,EE,A1,Sz){this.ET=AX;this.
Operator=EE;this.A4=A1;this.AaR=Sz;return this;},_Init:function(aArg){C.FilterCriterion.
_Init.call(this,aArg);this.__proto__=C.BoolFilterCriterion;},_className:"Device::BoolFilterCriterion"
};C.UInt32FilterCriterion={A4:0,Adi:function(){var Av=A._NewObject(C.UInt32FilterCriterion
,0);Av.Gt(this);return Av;},Gt:function(AL){C.FilterCriterion.Gt.call(this,AL);var
Av=(C.UInt32FilterCriterion.isPrototypeOf(AL)?AL:null);if(!!Av)this.A4=Av.A4;},Initialize:
function(AX,EE,A1,Sz){this.ET=AX;this.Operator=EE;this.A4=A1;this.AaR=Sz;return this;
},_Init:function(aArg){C.FilterCriterion._Init.call(this,aArg);this.__proto__=C.
UInt32FilterCriterion;},_className:"Device::UInt32FilterCriterion"};C.OverlayMenu={
None:0,Home:1,AutoAction:2,MenuItemSettings:3,RatingSettings:4,WeighingSettings:
5,Options:6,AnimalSearch:7,ActionSettings:8,MeasurementReady:9,AnimalMultiInfoMenu:
10,AnimalSearchUnfiltered:11,AnimalSearchDriedOff:12,MassRecordingMenu:13,MassRecordingDefaults:
14,MassRecordingFields:15,PurchasedAnimalsListMenu:16,BirthRegistrationsListMenu:
17,LAST:18};C.EnumToString={B0:function(A6){throw new Error(ArB+A6.toFixed());},
Lh:function(A6){return this.B0(A6);},_Init:function(aArg){this.__proto__=C.EnumToString;
A.hJ++;},_Done:function(){this.__proto__=null;A.hJ--;},_ReInit:function(){},_Mark:
function(D){var B;if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:
0,_observers:null,_className:"Device::EnumToString"};C.ScreenTypeToString={B0:function(
A6){var AH0=A6;var Bt;switch(AH0){case 3:Bt=A.z2(A.abg.At8);break;case 34:Bt=A.z2(
A.abg.O7);break;case 35:Bt=A.z2(A.abg.SW);break;case 47:Bt=A.z2(A.abg.AMt);break;
default:Bt=this.Bl$(A6);}return Bt;},Bl$:function(A6){var AH0=A6;var Bt=A.jm;switch(
AH0){case 0:Bt=AwC;break;case 2:Bt=AFw;break;case 4:Bt=ATJ;break;case 40:Bt=AFx;
break;case 39:Bt=ATK;break;case 72:Bt=ATL;break;case 73:Bt=ATM;break;case 93:Bt=
ATN;break;case 94:Bt=AFy;break;case 74:Bt=ATO;break;case 3:Bt=AwD;break;case 6:Bt=
AFz;break;case 16:Bt=AFA;break;case 22:Bt=ATP;break;case 46:Bt=AFB;break;case 100:
Bt=ATQ;break;case 99:Bt=ATR;break;case 101:Bt=QX;break;case 17:Bt=Wk;break;case 23:
Bt=ATS;break;case 18:Bt=ATT;break;case 19:Bt=ATU;break;case 38:Bt=ATV;break;case
87:Bt=ATW;break;case 1:Bt=ATX;break;case 5:Bt=ATY;break;case 7:Bt=Ahc;break;case
92:Bt=AFC;break;case 8:Bt=ATZ;break;case 9:Bt=AT0;break;case 41:Bt=AFD;break;case
42:Bt=AFE;break;case 24:Bt=AwE;break;case 10:Bt=QY;break;case 68:Bt=AT1;break;case
21:Bt=AT2;break;case 11:Bt=AT3;break;case 29:Bt=ArC;break;case 54:Bt=AT4;break;case
30:Bt=AT5;break;case 12:Bt=AT6;break;case 13:Bt=AT7;break;case 14:Bt=AT8;break;case
15:Bt=AT9;break;case 78:Bt=ArD;break;case 79:Bt=AT_;break;case 20:Bt=AT$;break;case
37:Bt=AUa;break;case 43:Bt=AUb;break;case 44:Bt=AUc;break;case 45:Bt=AUd;break;case
25:Bt=AUe;break;case 75:Bt=AUf;break;case 67:Bt=AUg;break;case 66:Bt=AUh;break;case
64:Bt=AFF;break;case 65:Bt=ArE;break;case 77:Bt=AUi;break;case 76:Bt=AUj;break;case
95:Bt=AUk;break;case 88:Bt=AwF;break;case 26:Bt=Akk;break;case 28:Bt=AeT;break;case
27:Bt=ArF;break;case 31:Bt=Akl;break;case 89:Bt=Ahd;break;case 34:Bt=AUl;break;case
35:Bt=AwG;break;case 32:Bt=AFG;break;case 50:Bt=AeU;break;case 55:Bt=AFH;break;case
63:Bt=Wl;break;case 62:Bt=Akm;break;case 33:Bt=Anm;break;case 36:Bt=AUm;break;case
56:Bt=AUn;break;case 86:Bt=AUo;break;case 57:Bt=AUp;break;case 47:Bt=AUq;break;case
49:Bt=ArG;break;case 48:Bt=AFI;break;case 69:Bt=AFJ;break;case 71:Bt=AUr;break;case
70:Bt=AUs;break;case 51:Bt=AUt;break;case 53:Bt=AUu;break;case 52:Bt=AUv;break;case
96:Bt=AUw;break;case 98:Bt=AFK;break;case 97:Bt=AUx;break;case 80:Bt=AwH;break;case
82:Bt=AFL;break;case 81:Bt=AFM;break;case 85:Bt=AFN;break;case 84:Bt=AFO;break;case
83:Bt=AFP;break;case 58:Bt=AFQ;break;case 60:Bt=AUy;break;case 59:Bt=AUz;break;case
61:Bt=AUA;break;case 90:Bt=AUB;break;case 91:Bt=AUC;break;case 102:Bt=AUD;break;
case 103:Bt=AUE;break;default:throw new Error(AwI+AH0.toFixed());}return Bt;},_Init:
function(aArg){C.EnumToString._Init.call(this,aArg);this.__proto__=C.ScreenTypeToString;
},_className:"Device::ScreenTypeToString"};C.OverlayMenuToString={B0:function(A6
){var BbO=A6;var Oe=A.jm;switch(BbO){case 0:Oe=AFR;break;case 1:Oe=AwD;break;case
8:Oe=AUF;break;case 2:Oe=AFS;break;case 3:Oe=Akn;break;case 4:Oe=Zq;break;case 5:
Oe=AUG;break;case 6:Oe=AeV;break;case 7:Oe=AUH;break;case 11:Oe=AUI;break;case 12:
Oe=ArH;break;case 9:Oe=AeW;break;case 10:Oe=Ann;break;case 14:Oe=AFT;break;case 15:
Oe=AUJ;break;case 13:Oe=OR;break;case 16:Oe=AUK;break;case 17:Oe=AUL;break;default:
throw new Error(AUM+BbO.toFixed());}return Oe;},_Init:function(aArg){C.EnumToString.
_Init.call(this,aArg);this.__proto__=C.OverlayMenuToString;},_className:"Device::OverlayMenuToString"
};C.ScanStateToString={B0:function(A6){var Bck=A6;var Bk=A.jm;switch(Bck){case 4:
Bk=AwJ;break;case 0:Bk=ArI;break;case 2:Bk=AFU;break;case 3:Bk=AUN;break;case 1:
Bk=AFV;break;default:throw new Error(AFW+Bck.toFixed());}return Bk;},_Init:function(
aArg){C.EnumToString._Init.call(this,aArg);this.__proto__=C.ScanStateToString;},
_className:"Device::ScanStateToString"};C.MeasureStateToString={B0:function(A6){
var Bax=A6;var Bk=A.jm;switch(Bax){case 4:Bk=AwJ;break;case 0:Bk=ArI;break;case 2:
Bk=AUO;break;case 1:Bk=AFV;break;case 3:Bk=AFX;break;default:throw new Error(AUP+
Bax.toFixed());}return Bk;},_Init:function(aArg){C.EnumToString._Init.call(this,
aArg);this.__proto__=C.MeasureStateToString;},_className:"Device::MeasureStateToString"
};C.TemperatureUnit={Celsius:0,Fahrenheit:1,LAST:2};C.TemperatureUnitToString={B0:
function(A6){var BcJ=A6;var Ao0=A.jm;switch(BcJ){case 0:Ao0=A.z2(A.abg.Bmq);break;
case 1:Ao0=A.z2(A.abg.Bmr);break;default:throw new Error(AUQ+BcJ.toFixed());}return Ao0;
},_Init:function(aArg){C.EnumToString._Init.call(this,aArg);this.__proto__=C.TemperatureUnitToString;
},_className:"Device::TemperatureUnitToString"};C.AnimalType={DairyCalf:0,DairyCow:
1,SheepLamb:2,LAST:3};C.AnimalTypeToString={B0:function(A6){var BcA=A6;var type=
A.jm;switch(BcA){case 0:type=A.z2(A.abg.BdT);break;case 1:type=A.z2(A.abg.Bd6);break;
case 2:type=A.z2(A.abg.Bf5);break;default:throw new Error(AUR+BcA.toFixed());}return type;
},_Init:function(aArg){C.EnumToString._Init.call(this,aArg);this.__proto__=C.AnimalTypeToString;
},_className:"Device::AnimalTypeToString"};C.Language={Default:0,German:1,Spanish:
2,French:3,Italian:4,Finnish:5,Chinese_TW:6,Turkish:7,Greek:8,Russian:9,Dutch:10
,Czech:11,Estonian:12,Bulgarian:13,Bosnian:14,Norwegian:15,Ukrainian:16,LAST:17};
C.LanguageToString={B0:function(A6){var Ayi=A6;var OX=A.jm;switch(Ayi){case 0:OX=
AFY;break;case 10:OX=AUS;break;case 1:OX=AFZ;break;case 12:OX=AF0;break;case 5:OX=
AwK;break;case 3:OX=AUT;break;case 8:OX=AUU;break;case 13:OX=AUV;break;case 4:OX=
AUW;break;case 9:OX=AUX;break;case 2:OX=AUY;break;case 7:OX=AUZ;break;case 6:OX=
AU0;break;case 11:OX=ArJ;break;case 14:OX=Ano;break;case 15:OX=AF1;break;case 16:
OX=AU1;break;default:throw new Error(AF2+Ayi.toFixed());}return OX;},Lh:function(
A6){var Ayi=A6;var Dk=A.jm;switch(Ayi){case 0:Dk=AU2;break;case 10:Dk=Wg;break;case
1:Dk=QV;break;case 12:Dk=AU3;break;case 5:Dk=Uc;break;case 3:Dk=Wd;break;case 8:
Dk=AU4;break;case 13:Dk=Wb;break;case 4:Dk=Ud;break;case 9:Dk=Su;break;case 2:Dk=
Zp;break;case 7:Dk=AeO;break;case 6:Dk=AU5;break;case 11:Dk=AU6;break;case 14:Dk=
AU7;break;case 15:Dk=St;break;case 16:Dk=JT;break;default:throw new Error(AF2+Ayi.
toFixed());}return Dk;},_Init:function(aArg){C.EnumToString._Init.call(this,aArg
);this.__proto__=C.LanguageToString;},_className:"Device::LanguageToString"};C.Gender={
Male:0,Female:1,Unknown:2,LAST:3};C.BirthType={Single:0,Twins:1,Triplets:2,Quadruplets:
3,LAST:4};C.GenderToString={B0:function(A6){var Aso=A6;var AIg=A.jm;switch(Aso){
case 0:AIg=A.z2(A.abg.Male);break;case 1:AIg=A.z2(A.abg.Female);break;case 2:AIg=
A.z2(A.abg.Unknown);break;default:throw new Error(AU8+Aso.toFixed());}return AIg;
},_Init:function(aArg){C.EnumToString._Init.call(this,aArg);this.__proto__=C.GenderToString;
},_className:"Device::GenderToString"};C.BirthTypeToString={B0:function(A6){var type=
A6;var Ae_=A.jm;switch(type){case 0:Ae_=A.z2(A.abg.Blp);break;case 1:Ae_=A.z2(A.
abg.Bmm);break;case 2:Ae_=A.z2(A.abg.Triplets);break;case 3:Ae_=A.z2(A.abg.Quadruplets
);break;default:throw new Error(AU9+type.toFixed());}return Ae_;},_Init:function(
aArg){C.EnumToString._Init.call(this,aArg);this.__proto__=C.BirthTypeToString;},
_className:"Device::BirthTypeToString"};C.SyncState={Idle:0,Init:1,Exporting:2,ImportStart:
3,Importing:4,ImportFinish:5,Ready:6,Error:7,LAST:8};C.SyncStateToString={B0:function(
A6){var BcD=A6;var Bk=A.jm;switch(BcD){case 7:Bk=AwJ;break;case 0:Bk=ArI;break;case
6:Bk=AFX;break;case 2:Bk=AU_;break;case 5:Bk=AU$;break;case 3:Bk=AVa;break;case 4:
Bk=AVb;break;case 1:Bk=AVc;break;default:throw new Error(AVd+BcD.toFixed());}return Bk;
},_Init:function(aArg){C.EnumToString._Init.call(this,aArg);this.__proto__=C.SyncStateToString;
},_className:"Device::SyncStateToString"};C.RatedAttributeToString={B0:function(
A6){var Ay7=A6;switch(Ay7){case 0:return A.jm;case 1:return A.z2(A.abg.BkG);case
4:return A.z2(A.abg.BkF);case 3:return A.z2(A.abg.BkH);case 2:return A.z2(A.abg.
BkE);default:throw new Error(AF3+Ay7.toFixed());}},Lh:function(A6){var Ay7=A6;switch(
Ay7){case 0:return A.jm;case 1:return A.z2(A.abg.Feed);case 4:return A.z2(A.abg.
AEh);case 3:return A.z2(A.abg.AEi);case 2:return A.z2(A.abg.AEf);default:throw new
Error(AF3+Ay7.toFixed());}},_Init:function(aArg){C.EnumToString._Init.call(this,
aArg);this.__proto__=C.RatedAttributeToString;},_className:"Device::RatedAttributeToString"
};C.AssesmentToString={B0:function(A6){var AkC=A6;var Axz=A.jm;switch(AkC){case 0:
case 5:Axz=A.jm;break;case 3:Axz=A.z2(A.abk.Blv);break;case 2:Axz=A.z2(A.abk.Blx
);break;case 1:Axz=A.z2(A.abk.Blw);break;default:throw new Error(AVe+AkC.toFixed(
));}return Axz;},_Init:function(aArg){C.EnumToString._Init.call(this,aArg);this.
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
8,Opened:9};C.PopupContext={AD5:null,AjQ:A.jm,Aj$:0,PopupState:1,Id:0,Show:false
,BjS:function(E){var B;if(this.PopupState===E)return;this.PopupState=E;if(!!this.
AD5)(B=this.AD5)?B[1].call(B[0],this):null;},_Init:function(aArg){this.__proto__=
C.PopupContext;A.hJ++;},_Done:function(){this.__proto__=null;A.hJ--;},_ReInit:function(
){},_Mark:function(D){var B;if((B=this.AD5)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=
D);if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:
null,_className:"Device::PopupContext"};C.Boolean={No:0,Yes:1,LAST:2};C.BooleanToYesNo={
B0:function(A6){switch(A6){case 0:return A.z2(A.abg.No);case 1:return A.z2(A.abg.
Yes);default:return Ako+A6.toFixed();}},_Init:function(aArg){C.EnumToString._Init.
call(this,aArg);this.__proto__=C.BooleanToYesNo;},_className:"Device::BooleanToYesNo"
};C.AnimalGroupTableFields={Id:0,GroupName:1};C.AnimalGroup={GroupName:AbS,Id:0,
EK:function(Ab,AF){var Hs=C.Row.EK.call(this,Ab,AF);if(Hs&&!!AF){this.OnSetId(AF.
CE(Ab,0));this.ADa(AF.Va(Ab,1));}return Hs;},Cr:function(AF){var Hs=C.Row.Cr.call(
this,AF);if(Hs&&!!AF){var Jg=AF.Op();if(Jg<=0)A.aa8("%s",AbR);else{if(this.Amc()
)this.CH=AF.XU();AF.G$(this.CH,0,this.Id);AF.YV(this.CH,1,this.GroupName);AF.Or(
Jg);}}return Hs;},Gd:function(){C.Row.Gd.call(this);this.OnSetId(-1);},G_:function(
){C.Row.G_.call(this);this.OnSetId(0);this.ADa(A.jm);},OnSetId:function(E){if(this.
Id===E)return;this.Id=E;A.aat([this,this.Qx,this.OnSetId],0);},ADa:function(E){if(
this.GroupName===E)return;this.GroupName=E;A.aat([this,this.Bhq,this.ADa],0);},Qx:
function(){return this.Id;},Bhq:function(){return this.GroupName;},_Init:function(
aArg){C.Row._Init.call(this,aArg);this.__proto__=C.AnimalGroup;this.TableId=3;},
_className:"Device::AnimalGroup"};C.PopupIdToString={B0:function(A6){var AcD=A6;
var Ax=A.jm;var AHY;AHY=A.z2(A.abg.BmJ)+OQ;switch(AcD){case 0:Ax=A.z2(A.abg.Unknown
);break;case 1:Ax=A.z2(A.abg.SevereError);break;case 58:Ax=A.z2(A.abg.BeK);break;
case 2:Ax=A.z2(A.abg.BeI);break;case 3:Ax=A.z2(A.abg.Bmv);break;case 77:Ax=A._GetAutoObject(
C.Helper).BeY();break;case 78:Ax=A._GetAutoObject(C.Helper).BeW();break;case 79:
Ax=A._GetAutoObject(C.Helper).BeX();break;case 9:Ax=A.z2(A.abg.BmT);break;case 5:
Ax=A.z2(A.abg.SuccessDataSync);break;case 8:Ax=A.z2(A.abg.SuccessResetFactorySettings
);break;case 34:Ax=A.z2(A.abg.SuccessResetAnimalData);break;case 10:Ax=A._GetAutoObject(
C.Device).AA$();break;case 82:Ax=A.z2(A.abg.BeM);break;case 83:Ax=A.z2(A.abg.BeN
);break;case 80:Ax=A.z2(A.abg.BlG);break;case 81:Ax=A.z2(A.abg.SuccessRestoreBackup
);break;case 92:Ax=A.z2(A.abg.BdJ);break;case 93:Ax=A.z2(A.abg.BkS);break;case 4:
Ax=A.z2(A.abg.WarningDataSync);break;case 7:Ax=A.z2(A.abg.BmQ);break;case 33:Ax=
A.z2(A.abg.WarningResetAnimalData);break;case 6:Ax=A.z2(A.abg.WarningRestart);break;
case 27:Ax=A.z2(A.abg.WarningNoActionDefined);break;case 64:Ax=A.z2(A.abg.WarningActionNotApplicable
);break;case 28:Ax=A.z2(A.abg.WarningNoMenuItemVisible);break;case 29:Ax=A.z2(A.
abg.WarningEnterPresentationMode);break;case 30:Ax=A.z2(A.abg.WarningNoAnimalsRegistered
);break;case 41:Ax=((AHY+A.z2(A.abg.APo))+OQ)+A.z2(A.abg.Bgk);break;case 50:Ax=((
AHY+A.z2(A.abg.APo))+OQ)+A.z2(A.abg.Bgm);break;case 51:Ax=((AHY+A.z2(A.abg.APo))+
OQ)+A.z2(A.abg.Bgl);break;case 42:Ax=A.z2(A.abg.BmS);break;case 91:Ax=A.z2(A.abg.
WarningScanOverwriteNaisId);break;case 45:Ax=A.z2(A.abg.BmN);break;case 46:Ax=A.
z2(A.abg.WarningNoValidCountryCode);break;case 57:Ax=A.z2(A.abg.WarningOutdatedAnimalWeight
);break;case 52:Ax=A.z2(A.abg.WarningOutdatedAnimalWeights);break;case 53:Ax=A.z2(
A.abg.WarningWeightEvaluationSingular);break;case 56:Ax=A.z2(A.abg.WarningWeightEvaluationPlural
);break;case 11:Ax=A.z2(A.abg.ScanError);break;case 12:Ax=A.z2(A.abg.ScanNotFound
);break;case 13:Ax=A.z2(A.abg.Bdu);break;case 36:Ax=A.z2(A.abg.Bmh);break;case 14:
Ax=A.z2(A.abg.AnimalNotFound);break;case 15:Ax=A.z2(A.abg.SuccessUnregister);break;
case 35:Ax=A.z2(A.abg.SuccessUnregisterPerished);break;case 26:Ax=A.z2(A.abg.SuccessCreationNewAnimal
);break;case 23:Ax=A.z2(A.abg.SuccessCreationNewAnimals);break;case 24:Ax=A.z2(A.
abg.Bd9);break;case 49:Ax=A.z2(A.abg.EvaluationInProgress);break;case 16:Ax=A.z2(
A.abg.Bed);break;case 17:Ax=A.z2(A.abg.Blz);break;case 18:Ax=A.z2(A.abg.BlL);break;
case 19:Ax=A.z2(A.abg.BlA);break;case 20:Ax=A.z2(A.abg.BlM);break;case 54:Ax=A.z2(
A.abg.BlH);break;case 55:Ax=A.z2(A.abg.BlK);break;case 21:Ax=A.z2(A.abg.A2b);break;
case 48:Ax=(A.z2(A.abg.A2b)+OQ)+A.z2(A.abg.A2Z);break;case 22:Ax=A.z2(A.abg.Bgr);
break;case 63:Ax=A.z2(A.abg.BmO);break;case 85:Ax=A.z2(A.abg.BmP);break;case 43:
Ax=A.z2(A.abg.Bgs);break;case 25:Ax=A.z2(A.abg.A8l);break;case 47:Ax=(A.z2(A.abg.
A8l)+OQ)+A.z2(A.abg.A2Z);break;case 31:{var BvK=(((((((((((((((((((A.z2(A.abg.Bd0
)+AwB)+A.z2(A.abg.ALk))+A.z2(A.abg.Colon))+N2)+A.z2(A.abg.Bd2))+OQ)+A.z2(A.abg.AMi
))+A.z2(A.abg.Colon))+N2)+A.z2(A.abg.BeS))+OQ)+A.z2(A.abg.ARI))+A.z2(A.abg.Colon
))+N2)+A.z2(A.abg.BkJ))+OQ)+A.z2(A.abg.ARH))+A.z2(A.abg.Colon))+N2)+A.z2(A.abg.BkI
);Ax=BvK;}break;case 32:Ax=A.z2(A.abg.Bmi);break;case 69:Ax=A.z2(A.abg.Bgz);break;
case 44:Ax=A.z2(A.abg.BmR);break;case 37:Ax=A.z2(A.abg.WarningResetWeightSettings
);break;case 38:Ax=A.z2(A.abg.WarningResetTempThresholds);break;case 39:Ax=A.z2(
A.abg.Bkz);break;case 76:Ax=(A.z2(A.abg.A2A)+OQ)+A.z2(A.abg.ARK);break;case 40:Ax=
A.z2(A.abg.BlI);break;case 75:Ax=A.z2(A.abg.BlB);break;case 59:Ax=A.z2(A.abg.QuestionAddAnotherCalfMultiples
);break;case 62:Ax=A.z2(A.abg.BlC);break;case 97:Ax=A.z2(A.abg.BlD);break;case 60:
Ax=A.z2(A.abg.BlE);break;case 99:Ax=A.z2(A.abg.BlF);break;case 61:Ax=A.z2(A.abg.
BlN);break;case 105:Ax=A.z2(A.abg.BlO);break;case 65:Ax=A.z2(A.abg.SuccessClearAnimalLoss
);break;case 66:Ax=A.z2(A.abg.WarningNoActionsForAnimalLoss);break;case 67:Ax=A.
z2(A.abg.SuccessLinkTransponder);break;case 86:Ax=A.z2(A.abg.SuccessUnlinkTransponder
);break;case 68:Ax=A.z2(A.abg.BlJ);break;case 70:Ax=A.z2(A.abg.BeO);break;case 71:
Ax=A.z2(A.abg.BlR);break;case 72:Ax=A.z2(A.abg.BlS);break;case 98:Ax=A.z2(A.abg.
BeQ);break;case 101:Ax=A.z2(A.abg.BlT);break;case 100:Ax=A.z2(A.abg.BlU);break;case
88:Ax=A.z2(A.abg.BeP);break;case 89:Ax=A.z2(A.abg.BlP);break;case 90:Ax=A.z2(A.abg.
BlQ);break;case 73:Ax=A.z2(A.abg.WarningNoPremisesID);break;case 74:Ax=A.z2(A.abg.
WarningNoFlashDrivePresent);break;case 95:Ax=A.z2(A.abg.WarningNoBackupPathPresent
);break;case 94:Ax=A.z2(A.abg.WarningNoBackupFilePresent);break;case 84:Ax=A.z2(
A.abg.Be5);break;case 87:Ax=A.z2(A.abg.BmV);break;case 96:Ax=A.z2(A.abg.BmM);break;
case 103:Ax=A.z2(A.abg.WarningParsedDateInFutureInvalid);break;case 102:Ax=A.z2(
A.abg.WarningParsingDateFailed);break;case 104:Ax=A.z2(A.abg.WarningParsingNaisIdFailed
);break;default:throw new Error(AwL+AcD.toFixed());}return Ax;},Lh:function(A6){
var AcD=A6;var Ax=A.jm;switch(AcD){case 0:Ax=AF4;break;case 1:Ax=AF5;break;case 58:
Ax=AF6;break;case 2:Ax=AF7;break;case 3:Ax=AwM;break;case 77:Ax=AF8;break;case 78:
Ax=AVf;break;case 79:Ax=AVg;break;case 9:Ax=AVh;break;case 5:Ax=AF9;break;case 8:
Ax=AVi;break;case 34:Ax=AVj;break;case 80:Ax=AVk;break;case 81:Ax=AVl;break;case
92:Ax=AVm;break;case 93:Ax=AVn;break;case 82:Ax=AVo;break;case 83:Ax=AVp;break;case
10:Ax=AwN;break;case 4:Ax=AVq;break;case 7:Ax=AVr;break;case 33:Ax=AwO;break;case
6:Ax=ArK;break;case 27:Ax=Zr;break;case 64:Ax=ArL;break;case 28:Ax=AVs;break;case
29:Ax=AVt;break;case 30:Ax=AVu;break;case 41:Ax=AF_;break;case 50:Ax=AVv;break;case
51:Ax=AF$;break;case 42:Ax=AVw;break;case 91:Ax=AVx;break;case 45:Ax=AVy;break;case
46:Ax=ArM;break;case 57:Ax=AVz;break;case 52:Ax=AVA;break;case 53:Ax=AGa;break;case
56:Ax=AVB;break;case 11:Ax=AVC;break;case 12:Ax=AVD;break;case 13:Ax=AVE;break;case
36:Ax=AbT;break;case 14:Ax=AVF;break;case 15:Ax=AVG;break;case 35:Ax=AVH;break;case
26:Ax=AVI;break;case 23:Ax=AGb;break;case 24:Ax=AVJ;break;case 49:Ax=AVK;break;case
16:Ax=AVL;break;case 17:Ax=AVM;break;case 18:Ax=AVN;break;case 19:Ax=AVO;break;case
20:Ax=AGc;break;case 54:Ax=AVP;break;case 55:Ax=AVQ;break;case 21:Ax=AVR;break;case
48:Ax=AGd;break;case 22:Ax=AGe;break;case 63:Ax=AVS;break;case 43:Ax=AVT;break;case
85:Ax=AVU;break;case 25:Ax=AVV;break;case 47:Ax=QZ;break;case 31:Ax=ArN;break;case
32:Ax=AGf;break;case 69:Ax=AGg;break;case 44:Ax=Anp;break;case 37:Ax=Anq;break;case
38:Ax=AwP;break;case 39:Ax=AVW;break;case 76:Ax=AGh;break;case 40:Ax=AVX;break;case
75:Ax=AVY;break;case 59:Ax=AVZ;break;case 62:Ax=AV0;break;case 97:Ax=AV1;break;case
60:Ax=AV2;break;case 99:Ax=AV3;break;case 65:Ax=AV4;break;case 61:Ax=AV5;break;case
105:Ax=AV6;break;case 66:Ax=AV7;break;case 67:Ax=AV8;break;case 86:Ax=AV9;break;
case 68:Ax=AV_;break;case 70:Ax=AV$;break;case 71:Ax=AWa;break;case 72:Ax=AWb;break;
case 98:Ax=Anr;break;case 101:Ax=AGi;break;case 100:Ax=AWc;break;case 88:Ax=AGj;
break;case 89:Ax=AGk;break;case 90:Ax=Zs;break;case 73:Ax=AGl;break;case 74:Ax=AWd;
break;case 95:Ax=AGm;break;case 94:Ax=AWe;break;case 84:Ax=AwQ;break;case 87:Ax=
AWf;break;case 96:Ax=AWg;break;case 103:Ax=AwR;break;case 102:Ax=AWh;break;case 104:
Ax=AWi;break;default:throw new Error(AwL+AcD.toFixed());}return Ax;},_Init:function(
aArg){C.EnumToString._Init.call(this,aArg);this.__proto__=C.PopupIdToString;},_className:
"Device::PopupIdToString"};C.PopupParamSeparator=";";C.RatingMode={Basic:0,Extended:
1,LAST:2};C.TransponderType={UNDEFINED:0,AnimalId:1,FarmId:2,GroupId:3,PersonId:
4,LAST:5};C.TransponderProtocol={UNDEFINED:0,FDX:1,HDX:2,HDX_URBAN:3,LAST:4};C.TransponderTypeToString={
B0:function(A6){var BcU=A6;var type=A.jm;switch(BcU){case 1:type=AWj;break;case 2:
type=AGn;break;case 3:type=Ans;break;case 4:type=AGo;break;case 0:type=AwC;break;
default:throw new Error(AWk+BcU.toFixed());}return type;},_Init:function(aArg){C.
EnumToString._Init.call(this,aArg);this.__proto__=C.TransponderTypeToString;},_className:
"Device::TransponderTypeToString"};C.TransponderProtocolToString={B0:function(A6
){var BcT=A6;var Ay4=A.jm;switch(BcT){case 1:Ay4=AGp;break;case 2:Ay4=AGq;break;
case 3:Ay4=Akp;break;case 0:Ay4=AwC;break;default:throw new Error(AWl+BcT.toFixed(
));}return Ay4;},_Init:function(aArg){C.EnumToString._Init.call(this,aArg);this.
__proto__=C.TransponderProtocolToString;},_className:"Device::TransponderProtocolToString"
};C.Transponder={Id:0,TransponderProtocol:0,TransponderType:0,ARf:function(E){if(
this.TransponderType===E)return;this.TransponderType=E;A.aat([this,this.Bh1,this.
ARf],0);},ARe:function(E){if(this.TransponderProtocol===E)return;this.TransponderProtocol=
E;A.aat([this,this.Bh0,this.ARe],0);},OnSetId:function(E){if(this.Id===E)return;
this.Id=E;A.aat([this,this.Qx,this.OnSetId],0);},AMH:function(){return A._GetAutoObject(
C.Converter).Bmg(this.Id);},Bfc:function(){return A._GetAutoObject(C.Converter).
Awa(this.Id);},Bh1:function(){return this.TransponderType;},Bh0:function(){return this.
TransponderProtocol;},Qx:function(){return this.Id;},_Init:function(aArg){this.__proto__=
C.Transponder;A.hJ++;},_Done:function(){this.__proto__=null;A.hJ--;},_ReInit:function(
){},_Mark:function(D){var B;if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:
null,_cycle:0,_observers:null,_className:"Device::Transponder"};C.RatingModeToString={
B0:function(A6){var Uw=A6;var Np=A.jm;switch(Uw){case 0:Np=A.z2(A.abg.Basic);break;
case 1:Np=A.z2(A.abg.Extended);break;default:throw new Error(Ant+Uw.toFixed());}
return Np;},_Init:function(aArg){C.EnumToString._Init.call(this,aArg);this.__proto__=
C.RatingModeToString;},_className:"Device::RatingModeToString"};C.TableRowsCount={
_Init:function(aArg){this.__proto__=C.TableRowsCount;A.hJ++;},_Done:function(){this.
__proto__=null;A.hJ--;},_ReInit:function(){},_Mark:function(D){var B;if((B=this.
I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:
"Device::TableRowsCount"};C.MassUnit={Kilogramm:0,Pound:1,LAST:2};C.MassUnitToString={
B0:function(A6){var Bau=A6;var Ao0=A.jm;switch(Bau){case 0:Ao0=A.z2(A.abg.Bf3);break;
case 1:Ao0=A.z2(A.abg.Pound);break;default:throw new Error(AWm+Bau.toFixed());}return Ao0;
},_Init:function(aArg){C.EnumToString._Init.call(this,aArg);this.__proto__=C.MassUnitToString;
},_className:"Device::MassUnitToString"};C.MinWeightGain=20;C.MaxWeightGain=2000;
C.WeightGainStep=10;C.Int32ArrayWrapper={Mx:10,Array:A.aan(10,0,null),YK:function(
E){if(this.Mx===E)return;if(E>10)throw new Error(AGr);this.Mx=E;},Set:function(aIndex
,AI){if((aIndex<0)||(aIndex>=this.Mx))throw new Error(AwS);this.Array.Set(aIndex
,AI);},Get:function(aIndex){if((aIndex<0)||(aIndex>=this.Mx))throw new Error(AwS
);return this.Array.Get(aIndex);},Al3:function(){var HS=0;var P;for(P=0;P<this.Mx;
P=P+1)HS=HS+this.Get(P);return HS;},toString:function(){var A0a=this.Array.Get(0
).toFixed();var P;for(P=1;P<this.Mx;P=P+1)A0a=(A0a+OP)+this.Array.Get(P).toFixed(
);return A0a;},EK:function(aString){var IN=aString.indexOf(String.fromCharCode(0x2C
),0);var AY1=A.jm;var P=0;while(P<10){if(aString===A.jm)this.Array.Set(P,0);else{
if(IN===-1){AY1=aString;aString=A.jm;}else{AY1=A.aaX(aString,IN);aString=A.aa3(aString
,0,IN+1);}this.Array.Set(P,A.vQ(AY1,0,10));IN=aString.indexOf(String.fromCharCode(
0x2C),0);}P=P+1;}if(aString!==A.jm)A.aa8("%s",AWn);},Cr:function(){},G_:function(
){var P;for(P=0;P<this.Mx;P=P+1)this.Set(P,0);},At2:function(A1){var P=0;while(P<
this.Mx){if(this.Array.Get(P)===A1)return P;P=P+1;}return-1;},Hh:function(){var P=
0;var max=-1;while(P<this.Mx){if(this.Array.Get(P)>max)max=this.Array.Get(P);P=P+
1;}return max;},_Init:function(aArg){(this.Array=[]).__proto__=C.Int32ArrayWrapper.
Array;this.__proto__=C.Int32ArrayWrapper;A.hJ++;},_Done:function(){this.__proto__=
null;A.hJ--;},_ReInit:function(){},_Mark:function(D){var B;if((B=this.I)&&(B._cycle
!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:"Device::Int32ArrayWrapper"
};C.ActionToString={B0:function(A6){var AxV=A6;var EL=A.jm;switch(AxV){case 4:EL=
A.z2(A.abg.Alarm);break;case 256:EL=A.z2(A.abg.Weighing);break;case 128:EL=A.z2(
A.abg.A3x);break;case 16:EL=A.z2(A.abg.AKd);break;case 1:EL=A.z2(A.abg.Temperature
);break;case 32:EL=A.z2(A.abg.AnimalLoss);break;case 2:EL=A.z2(A.abg.Rating);break;
case 8:EL=A.z2(A.abg.AqN);break;case 64:EL=A.z2(A.abg.Unregister);break;case 512:
EL=A.z2(A.abg.API);break;case 1024:EL=A.z2(A.abg.LinkTransponder);break;case 262144:
EL=A.z2(A.abg.UnlinkTransponder);break;case 2048:EL=A.z2(A.abg.O7);break;case 4096:
EL=A.z2(A.abg.Calving);break;case 8192:EL=A.z2(A.abg.DryOff);break;case 16384:EL=
A.z2(A.abg.A4F);break;case 32768:EL=A.z2(A.abg.AAi);break;case 524288:EL=A.z2(A.
abg.AAk);break;case 65536:EL=A.z2(A.abg.Delete);break;case 131072:EL=A.z2(A.abg.
A4G);break;case 0:EL=A.z2(A.abg.A43);break;default:throw new Error(AGs+AxV.toFixed(
));}return EL;},Lh:function(A6){var AxV=A6;var EL=A.jm;switch(AxV){case 4:EL=A.z2(
A.abg.Alarm);break;case 256:EL=A.z2(A.abg.Weighing);break;case 128:EL=A.z2(A.abg.
A3x);break;case 16:EL=A.z2(A.abg.AKd);break;case 1:EL=A.z2(A.abg.Temperature);break;
case 32:EL=A.z2(A.abg.AnimalLoss);break;case 2:EL=A.z2(A.abg.Rating);break;case 8:
EL=A.z2(A.abg.AqN);break;case 64:EL=A.z2(A.abg.Unregister);break;case 512:EL=A.z2(
A.abg.API);break;case 1024:EL=A.z2(A.abg.LinkTransponder);break;case 262144:EL=A.
z2(A.abg.UnlinkTransponder);break;case 2048:EL=A.z2(A.abg.O7);break;case 4096:EL=
A.z2(A.abg.Calving);break;case 8192:EL=A.z2(A.abg.DryOff);break;case 16384:EL=A.
z2(A.abg.A4E);break;case 32768:EL=A.z2(A.abg.AAi);break;case 524288:EL=A.z2(A.abg.
AAk);break;case 65536:EL=A.z2(A.abg.Delete);break;case 131072:EL=A.z2(A.abg.A4E);
break;case 0:EL=A.z2(A.abg.A43);break;default:throw new Error(AGs+AxV.toFixed());
}return EL;},_Init:function(aArg){C.EnumToString._Init.call(this,aArg);this.__proto__=
C.ActionToString;},_className:"Device::ActionToString"};C.ACTIONS_COUNT=19;C.PopupTimeout=
2000;C.ITable={Filter:null,Id:2,CE:function(Ab,AX){return 0;},Va:function(Ab,AX){
return A.jm;},Ajv:function(H){A.vv(this,0);A.ow([this,this.Eo],this);},HW:function(
Ab,AX){return false;},Hy:function(Ab,AX){return this.RQ(Ab,AX);},OnSetId:function(
E){if(this.Id===E)return;this.Id=E;},Cj:function(){return 0;},Bl:function(E){if(
this.Filter===E)return;this.Filter=E;A.aat([this,this.Fy,this.FD],0);},FD:function(
An){this.Bl(An);},IX:function(Ab,AX){var Bxe=this.Vb(Ab,AX);return A._GetAutoObject(
C.Converter).A8o(Bxe);},Vb:function(Ab,AX){return 0;},RQ:function(Ab,AX){return 0;
},A35:function(Ab,AX){return this.CE(Ab,AX);},Op:function(){var Jg=0;var BxY=this.
Id;return Jg;},Or:function(AnJ){var Hs=0;var BxY=this.Id;return Hs===1;},XU:function(
){return-1;},YX:function(Ab,AX,CX){return false;},G$:function(Ab,AX,CX){return false;
},YW:function(Ab,AX,CX){return false;},Na:function(Ab,AX,CX){return false;},YV:function(
Ab,AX,CX){return false;},Abu:function(Ab,AX,CX){return this.YW(Ab,AX,CX);},Aj0:function(
Ab,AX,CX){var Bxf=A._GetAutoObject(C.Converter).Ac1(CX);return this.YX(Ab,AX,Bxf
);},A71:function(Ab,AX,CX){return this.G$(Ab,AX,CX);},AMA:function(Ab,AX){return this.
CE(Ab,AX);},Bfa:function(Ab,AX){return this.CE(Ab,AX);},Bk$:function(Ab,AX,CX){return this.
G$(Ab,AX,CX);},Bk7:function(Ab,AX,CX){return this.G$(Ab,AX,CX);},K4:function(aColumn
,A1){return-1;},Al1:function(Ab,AX){return this.CE(Ab,AX);},Bk5:function(Ab,AX,CX
){return this.G$(Ab,AX,CX);},AA9:function(Ab,AX){return this.CE(Ab,AX);},AR4:function(
Ab,AX,N5){return this.G$(Ab,AX,N5);},Eo:function(H){this.Buq();},Buq:function(){
return-1;},LD:function(Ab,AX){return 0;},TQ:function(Ab,AX,CX){return false;},AiZ:
function(aColumn,A1){return-1;},G_:function(){return false;},Bfb:function(Ab,AX){
var Bxg=this.CE(Ab,AX);return A._GetAutoObject(C.Converter).BfB(Bxg);},Bfe:function(
Ab,AX){return this.CE(Ab,AX);},AMJ:function(Ab,AX){return this.CE(Ab,AX);},Bk9:function(
Ab,AX,CX){var Bxh=A._GetAutoObject(C.Converter).A2H(CX);return this.G$(Ab,AX,Bxh
);},Bk_:function(Ab,AX,CX){return this.G$(Ab,AX,CX);},Blf:function(Ab,AX,CX){return this.
G$(Ab,AX,CX);},AiW:function(aColumn,A1){return false;},Af5:function(aColumn,A1){
return false;},Bfo:function(Ab,AX){return this.CE(Ab,AX);},Bld:function(Ab,AX,CX
){return this.G$(Ab,AX,CX);},K8:function(){return this.Qd()>=this.Hz();},Hz:function(
){return 0;},Aaz:function(){return-1;},Qd:function(){return 0;},Fy:function(){return this.
Filter;},_Init:function(aArg){this.__proto__=C.ITable;A.hJ++;},_Done:function(){
this.__proto__=null;A.hJ--;},_ReInit:function(){},_Mark:function(D){var B;if((B=
this.Filter)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.I)&&(B._cycle!=D))B._Mark(
B._cycle=D);},I:null,_cycle:0,_observers:null,_className:"Device::ITable"};C.MaxAutoActionsCount=
4;C.WeightRecordingMode={Automatic:0,Manual:1,LAST:2};C.WeightRecordingModeToString={
B0:function(A6){var Uw=A6;var Np=A.jm;switch(Uw){case 0:Np=A.z2(A.abg.Automatic);
break;case 1:Np=A.z2(A.abg.Manual);break;default:throw new Error(AGt+Uw.toFixed(
));}return Np;},_Init:function(aArg){C.EnumToString._Init.call(this,aArg);this.__proto__=
C.WeightRecordingModeToString;},_className:"Device::WeightRecordingModeToString"
};C.BooleanToAutoOnOff={B0:function(A6){switch(A6){case 0:return A.z2(A.abg.Off);
case 1:return A.z2(A.abg.Z_);default:return Ako+A6.toFixed();}},_Init:function(aArg
){C.EnumToString._Init.call(this,aArg);this.__proto__=C.BooleanToAutoOnOff;},_className:
"Device::BooleanToAutoOnOff"};C.WeightStep=100;C.WeightRecordingScope={CurrentWeightOnly:
0,BirthWeightOnly:1,BirthAndCurrentWeight:2,NoWeightRecording:3,LAST:4};C.WeightRecordingScopeToString={
B0:function(A6){var Bcl=A6;var Azf=A.jm;switch(Bcl){case 0:Azf=A.z2(A.abg.Bd$);break;
case 1:Azf=A.z2(A.abg.BdP);break;case 2:Azf=A.z2(A.abg.BdM);break;case 3:Azf=A.z2(
A.abg.BgP);break;default:throw new Error(AWo+Bcl.toFixed());}return Azf;},_Init:
function(aArg){C.EnumToString._Init.call(this,aArg);this.__proto__=C.WeightRecordingScopeToString;
},_className:"Device::WeightRecordingScopeToString"};C.BodyTemperature={Undertemperature:
0,Normal:1,Elevated:2,Fever:3,LAST:4};C.JD={AcU:0,Temperature:1,Rating:2,Ag9:3,Byu:
4,By_:5,BBO:6,BzL:7,BAz:8,Bzj:9,BAy:10,BAY:11,LAST:12};C.AnimalListContentToString={
B0:function(A6){var A_Y=A6;var Ww=A.jm;switch(A_Y){case 0:Ww=AWp;break;case 2:Ww=
AWq;break;case 1:Ww=AWr;break;case 3:Ww=AWs;break;case 4:Ww=AWt;break;case 5:Ww=
AWu;break;case 6:Ww=AWv;break;case 7:Ww=AWw;break;case 8:Ww=AWx;break;case 9:Ww=
AWy;break;case 10:Ww=AWz;break;case 11:Ww=AWA;break;default:throw new Error(AGu+
A_Y.toFixed());}return Ww;},_Init:function(aArg){C.EnumToString._Init.call(this,
aArg);this.__proto__=C.AnimalListContentToString;},_className:"Device::AnimalListContentToString"
};C.GenderFilterCriterion={A4:0,Adi:function(){var Av=A._NewObject(C.GenderFilterCriterion
,0);Av.Gt(this);return Av;},Gt:function(AL){C.FilterCriterion.Gt.call(this,AL);var
Av=(C.GenderFilterCriterion.isPrototypeOf(AL)?AL:null);if(!!Av)this.A4=Av.A4;},_Init:
function(aArg){C.FilterCriterion._Init.call(this,aArg);this.__proto__=C.GenderFilterCriterion;
},_className:"Device::GenderFilterCriterion"};C.AnimalTypeFilterCriterion={A4:0,
Adi:function(){var Av=A._NewObject(C.AnimalTypeFilterCriterion,0);Av.Gt(this);return Av;
},Gt:function(AL){C.FilterCriterion.Gt.call(this,AL);var Av=(C.AnimalTypeFilterCriterion.
isPrototypeOf(AL)?AL:null);if(!!Av)this.A4=Av.A4;},Initialize:function(AX,EE,A1,
Sz){this.ET=AX;this.Operator=EE;this.A4=A1;this.AaR=Sz;return this;},_Init:function(
aArg){C.FilterCriterion._Init.call(this,aArg);this.__proto__=C.AnimalTypeFilterCriterion;
},_className:"Device::AnimalTypeFilterCriterion"};C.ByG={Aio:0,ByF:1,BAk:2,A7J:3
,A2Q:4,BBx:5,By9:6,BBw:7,LinkTransponder:8,O7:9,Weighing:10,Calving:11,LinkNaisId:
12,BAX:13,ClearBirthNoticePending:14,DeleteAnimal:15,ScanNaisId:16,Edit:17,ClearPurchaseNoticePending:
18};C.AutoRegistrationModeToString={B0:function(A6){var Uw=A6;var Np=A.jm;switch(
Uw){case 0:Np=A.z2(A.abg.Bd3);break;case 1:Np=A.z2(A.abg.BfF);break;case 2:Np=A.
z2(A.abg.Off);break;default:throw new Error(Zt+Uw.toFixed());}return Np;},_Init:
function(aArg){C.EnumToString._Init.call(this,aArg);this.__proto__=C.AutoRegistrationModeToString;
},_className:"Device::AutoRegistrationModeToString"};C.AutoRegistrationMode={UserConfirmed:
0,Background:1,Off:2,LAST:3};C.AssessmentFilterCriterion={A4:0,Adi:function(){var
Av=A._NewObject(C.AssessmentFilterCriterion,0);Av.Gt(this);return Av;},Gt:function(
AL){C.FilterCriterion.Gt.call(this,AL);var Av=(C.AssessmentFilterCriterion.isPrototypeOf(
AL)?AL:null);if(!!Av)this.A4=Av.A4;},Initialize:function(AX,EE,A1,Sz){this.ET=AX;
this.Operator=EE;this.A4=A1;this.AaR=Sz;return this;},_Init:function(aArg){C.FilterCriterion.
_Init.call(this,aArg);this.__proto__=C.AssessmentFilterCriterion;},_className:"Device::AssessmentFilterCriterion"
};C.D3={AcU:0,Temperature:1,Ag9:2,Rating:3,LAST:4};C.FactoryResetScope={DeviceAndAnimalData:
0,AnimalDataOnly:1,LAST:2};C.FactoryResetScopeToString={B0:function(A6){switch(A6
){case 0:return A.z2(A.abg.Bdj);case 1:return A.z2(A.abg.AnimalDataOnly);default:
return AWB+A6.toFixed();}},_Init:function(aArg){C.EnumToString._Init.call(this,aArg
);this.__proto__=C.FactoryResetScopeToString;},_className:"Device::FactoryResetScopeToString"
};C.ASC={Cr:function(){A._GetAutoObject(C.Device).AqG(this.toString());},Init:function(
aArg){var B;A.za([this,this.Bby],[B=A._GetAutoObject(C.Device),B.A55,B.A9W],0);this.
Bby(this);},Bby:function(H){this.EK(A._GetAutoObject(C.Device).AEY);A.vv(this,0);
},_Init:function(aArg){C.Int32ArrayWrapper._Init.call(this,aArg);this.__proto__=
C.ASC;this.YK(3);this.Init(aArg);},_className:"Device::TemperaturesLowClass"};C.
ASB={Init:function(aArg){var B;A.za([this,this.Bbw],[B=A._GetAutoObject(C.Device
),B.A54,B.A9V],0);this.Bbw(this);},Cr:function(){A._GetAutoObject(C.Device).AqF(
this.toString());},Bbw:function(H){this.EK(A._GetAutoObject(C.Device).AEX);A.vv(
this,0);},_Init:function(aArg){C.Int32ArrayWrapper._Init.call(this,aArg);this.__proto__=
C.ASB;this.YK(3);this.Init(aArg);},_className:"Device::TemperaturesHighClass"};C.
AKw={Init:function(aArg){var B;A.za([this,this.Ba2],[B=A._GetAutoObject(C.Device
),B.A5u,B.A9E],0);this.Ba2(this);},Ba2:function(H){this.EK(A._GetAutoObject(C.Device
).AzS);A.vv(this,0);},_Init:function(aArg){C.Int32ArrayWrapper._Init.call(this,aArg
);this.__proto__=C.AKw;this.YK(3);this.Init(aArg);},_className:"Device::AnimalTypesClass"
};C.UInt64FilterCriterion={A4:0,Adi:function(){var Av=A._NewObject(C.UInt64FilterCriterion
,0);Av.Gt(this);return Av;},Gt:function(AL){C.FilterCriterion.Gt.call(this,AL);var
Av=(C.UInt64FilterCriterion.isPrototypeOf(AL)?AL:null);if(!!Av)this.A4=Av.A4;},Initialize:
function(AX,EE,A1,Sz){this.ET=AX;this.Operator=EE;this.A4=A1;this.AaR=Sz;return this;
},_Init:function(aArg){C.FilterCriterion._Init.call(this,aArg);this.__proto__=C.
UInt64FilterCriterion;},_className:"Device::UInt64FilterCriterion"};C.BooleanToAssignedUnassignedString={
B0:function(A6){switch(A6){case 0:return A.z2(A.abg.Aju);case 1:return A.z2(A.abg.
Bdk);default:return Ako+A6.toFixed();}},_Init:function(aArg){C.EnumToString._Init.
call(this,aArg);this.__proto__=C.BooleanToAssignedUnassignedString;},_className:
"Device::BooleanToAssignedUnassignedString"};C.De={UNDEFINED:0,AT:1,BA:2,BE:3,ByL:
4,By0:5,By1:6,By2:7,By3:8,By4:9,Bzc:10,Bzd:11,Bzk:12,Bzl:13,BzA:14,FR:15,GR:16,BzN:
17,BzO:18,BzZ:19,Bz0:20,Bz5:21,Bz6:22,Bz7:23,Bz8:24,BAc:25,BAq:26,BAr:27,BAF:28,
BAG:29,BAV:30,BAW:31,BBa:32,BBb:33,BBc:34,BBq:35,BBr:36,BBH:37,A8p:38,BBI:39,LAST:
40};C.CountryToString={B0:function(A6){var N8=A6;var Fq=A.jm;switch(N8){case 1:Fq=
A.z2(A.abn.Bdy);break;case 2:Fq=A.z2(A.abn.BdQ);break;case 3:Fq=A.z2(A.abn.BdL);
break;case 4:Fq=A.abn.BdS;break;case 5:Fq=A.z2(A.abn.BdU);break;case 6:Fq=A.z2(A.
abn.BlY);break;case 7:Fq=A.z2(A.abn.BdX);break;case 8:Fq=A.z2(A.abn.Bea);break;case
9:Fq=A.z2(A.abn.Beb);break;case 10:Fq=A.z2(A.abn.Be6);break;case 11:Fq=A.z2(A.abn.
Bei);break;case 12:Fq=A.z2(A.abn.BeL);break;case 13:Fq=A.z2(A.abn.Bls);break;case
14:Fq=A.z2(A.abn.BeU);break;case 15:Fq=A.z2(A.abn.Be2);break;case 16:Fq=A.z2(A.abn.
Bfw);break;case 17:Fq=A.z2(A.abn.Bd_);break;case 18:Fq=A.z2(A.abn.BfC);break;case
19:Fq=A.z2(A.abn.BfM);break;case 20:Fq=A.z2(A.abn.BfY);break;case 21:Fq=A.z2(A.abn.
Bf0);break;case 22:Fq=A.z2(A.abn.Bgc);break;case 23:Fq=A.z2(A.abn.Bgg);break;case
24:Fq=A.z2(A.abn.Bga);break;case 25:Fq=A.abn.Bgi;break;case 26:Fq=A.z2(A.abn.BgA
);break;case 27:Fq=A.z2(A.abn.BgQ);break;case 28:Fq=A.z2(A.abn.Bks);break;case 29:
Fq=A.z2(A.abn.Bkt);break;case 30:Fq=A.z2(A.abn.BkT);break;case 31:Fq=A.z2(A.abn.
BkV);break;case 32:Fq=A.z2(A.abn.BlX);break;case 33:Fq=A.z2(A.abn.Blr);break;case
34:Fq=A.z2(A.abn.Blq);break;case 35:Fq=A.z2(A.abn.Bml);break;case 36:Fq=A.z2(A.abn.
Bl7);break;case 37:Fq=A.z2(A.abn.Bmp);break;case 38:Fq=A.z2(A.abn.A8p);break;case
39:Fq=A.z2(A.abn.Bmo);break;case 0:Fq=Ahe;break;default:throw new Error(Awt+N8.toFixed(
));}return Fq;},Lh:function(A6){var N8=A6;var BN=A.jm;switch(N8){case 1:BN=Ss;break;
case 2:BN=Ze;break;case 3:BN=T$;break;case 4:BN=Wb;break;case 5:BN=IM;break;case
6:BN=Wi;break;case 7:BN=Ua;break;case 8:BN=Zg;break;case 9:BN=Ub;break;case 10:BN=
QV;break;case 11:BN=Zh;break;case 12:BN=Zi;break;case 13:BN=Zp;break;case 14:BN=
Uc;break;case 15:BN=Wd;break;case 16:BN=Zj;break;case 17:BN=Wc;break;case 18:BN=
OO;break;case 19:BN=PK;break;case 20:BN=Ud;break;case 21:BN=Zk;break;case 22:BN=
Zl;break;case 23:BN=Zm;break;case 24:BN=We;break;case 25:BN=Wf;break;case 26:BN=
Wg;break;case 27:BN=St;break;case 28:BN=Zn;break;case 29:BN=Zo;break;case 30:BN=
AbO;break;case 31:BN=Su;break;case 32:BN=Wh;break;case 33:BN=AeN;break;case 34:BN=
AbP;break;case 35:BN=AeO;break;case 36:BN=Zf;break;case 37:BN=AeP;break;case 38:
BN=JT;break;case 39:BN=AeQ;break;case 0:BN=Ahe;break;default:throw new Error(Awt+
N8.toFixed());}return BN;},_Init:function(aArg){C.EnumToString._Init.call(this,aArg
);this.__proto__=C.CountryToString;},_className:"Device::CountryToString"};C.EaseOfDelivery={
Unspecified:0,Easy:1,Moderate:2,Difficult:3,Surgery:4,LAST:5};C.EaseOfDeliveryToString={
B0:function(A6){var A$v=A6;var Ash=A.jm;switch(A$v){case 0:Ash=A.z2(A.abg.Unspecified
);break;case 1:Ash=A.z2(A.abg.Easy);break;case 2:Ash=A.z2(A.abg.Moderate);break;
case 3:Ash=A.z2(A.abg.Difficult);break;case 4:Ash=A.z2(A.abg.Surgery);break;default:
throw new Error(AWC+A$v.toFixed());}return Ash;},_Init:function(aArg){C.EnumToString.
_Init.call(this,aArg);this.__proto__=C.EaseOfDeliveryToString;},_className:"Device::EaseOfDeliveryToString"
};C.WhereAbouts={UNB:0,EZU:1,EMA:2,VZU:3,VMA:4,VIV:5,TOT:6,V48:7,V3T:8,MGE:9,VKB:
10,LAST:11};C.WhereAboutsToString={B0:function(A6){var Bc$=A6;var Z0=A.jm;switch(
Bc$){case 0:Z0=A.z2(A.abg.Unknown);break;case 1:Z0=A.z2(A.abg.Bmx);break;case 2:
Z0=A.z2(A.abg.Bmw);break;case 3:Z0=A.z2(A.abg.BmF);break;case 4:Z0=A.z2(A.abg.BmE
);break;case 5:Z0=A.z2(A.abg.BmC);break;case 6:Z0=A.z2(A.abg.Bmz);break;case 7:Z0=
A.z2(A.abg.BmB);break;case 8:Z0=A.z2(A.abg.BmA);break;case 9:Z0=A.z2(A.abg.Bmy);
break;case 10:Z0=A.z2(A.abg.BmD);break;default:throw new Error(AWD+Bc$.toFixed()
);}return Z0;},_Init:function(aArg){C.EnumToString._Init.call(this,aArg);this.__proto__=
C.WhereAboutsToString;},_className:"Device::WhereAboutsToString"};C.Breed={UNKNOWN:
0,SBT:1,RBT:2,JER:3,BV:4,RVA:5,RV:6,RDN:7,DSN:8,FL:9,GV:10,PIN:11,HIN:12,MW:13,VW:
14,LMP:15,DBV:16,AS:17,VR:18,CHA:19,LIM:20,WBB:21,BA:22,MA:23,SAL:24,MON:25,AU:26
,PIE:27,CHI:28,ROM:29,MAR:30,WP:31,BB:32,DA:33,AA:34,HE:35,SH:36,HLD:37,WB:38,GAL:
39,LR:40,BGA:41,LG:42,BRA:43,NOR:44,UST:45,ZEB:46,GRV:47,DEX:48,WGA:49,LH:50,SD:
51,FR:52,TUX:53,TLM:54,FLF:55,UCK:56,BLA:57,WIT:58,LAK:59,RHV:60,AT:61,GR:62,PIF:
63,PS:64,GVF:65,BVF:66,RBF:67,HWF:68,MWF:69,VWF:70,LPF:71,BRN:72,BAZ:73,AO:74,BE:
75,WL:76,BIS:77,YAK:78,SON:79,TAU:80,IND:81,TIN:82,WAG:83,XFF:84,XFM:85,XMM:86,EVO:
87,BLH:88,TLH:89,MGR:90,WSH:91,MUR:92,EBS:93,ERI:94,PAR:95,XZF:96,XZM:97,XZZ:98,
LAST:99};C.BreedToString={B0:function(A6){var Bs=A6;var BJ=A.jm;switch(Bs){case 0:
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
XZZ);break;default:throw new Error(AWE+Bs.toFixed());}return BJ;},_Init:function(
aArg){C.EnumToString._Init.call(this,aArg);this.__proto__=C.BreedToString;},_className:
"Device::BreedToString"};C.UT={timer:null,Q:null,D9:0,Dq:0,Mp:0,Pd:1000,Pm:1000,
Bw:false,Cv:false,B1:true,L$:function(H){var F;if(!this.timer)return;if(this.D9<
0){this.Dq=this.timer.Bu;this.D9=0;}var Aq=(this.timer.Bu-this.Dq)|0;var Og=this.
Pd;var G0=this.Pm+this.Pd;var Lp=0;var Jw=this.D9;if(!Jw&&(Aq>=Og)){Jw=1;Aq=Aq-Og;
}if((Jw>0)&&(Aq>=G0)){var H7=(Aq/G0)|0;Aq=Aq-(H7*G0);Jw=Jw+H7;}if((Jw>2)&&!this.
Mp)Jw=1;if(Jw!==this.D9){this.Dq=this.timer.Bu-(((B=Aq)<0)?B+0x100000000:B);this.
D9=Jw;}if(Jw>0)Lp=this.Pm;var MG=(Jw>=this.Mp)&&(this.Mp>0);if(!!this.Q){if((!MG&&(
Aq>=Lp))&&((F=this.Q,F[1].call(F[0]))!==this.Cv))(F=this.Q,F[2].call(F[0],this.Cv
));if((MG||((Aq<Lp)&&(Jw>0)))&&((F=this.Q,F[1].call(F[0]))!==this.B1))(F=this.Q,
F[2].call(F[0],this.B1));}if(MG)this.Ap(false);},IF:function(E){if(E<0)E=0;this.
Mp=E;},FA:function(E){if(E<100)E=100;this.Pd=E;},VM:function(E){if(E<0)E=0;this.
Pm=E;},Ap:function(E){if(this.Bw===E)return;this.Bw=E;if(!E&&!!this.timer){A.zl([
this,this.L$],this.timer,0);this.timer=null;}if(E){this.timer=A._GetAutoObject(A.
abm.Af2);A.y_([this,this.L$],this.timer,0);this.D9=-1;}},_Init:function(aArg){this.
__proto__=C.UT;A.hJ++;},_Done:function(){this.__proto__=null;A.hJ--;},_ReInit:function(
){},_Mark:function(D){var B;if((B=this.timer)&&(B._cycle!=D))B._Mark(B._cycle=D);
if((B=this.Q)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.I)&&(B._cycle
!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:"Device::BoolEffect"
};C.Ia={AnimalId:0,TransponderId:1,BAf:2,BAe:3,BAi:4,BAh:5};C.AtA={ByJ:0,Bze:1};
C.AnimalIdGenerationMethodToString={B0:function(A6){var AkA=A6;var AnP=A.jm;switch(
AkA){case 0:AnP=A.z2(A.abg.Yt);break;case 1:AnP=A.z2(A.abg.Transponder);break;case
3:AnP=(A.z2(A.abg.Manual)+N2)+A.z2(A.abg.Male);break;case 2:AnP=(A.z2(A.abg.Manual
)+N2)+A.z2(A.abg.Female);break;case 4:AnP=(A.z2(A.abg.Manual)+N2)+A.z2(A.abg.Unknown
);break;case 5:AnP=(A.z2(A.abg.Manual)+N2)+AWF;break;default:throw new Error(AWG+
AkA.toFixed());}return AnP;},_Init:function(aArg){C.EnumToString._Init.call(this
,aArg);this.__proto__=C.AnimalIdGenerationMethodToString;},_className:"Device::AnimalIdGenerationMethodToString"
};C.DirectionOfCountingToString={B0:function(A6){var AxU=A6;var AY8=A.jm;switch(
AxU){case 0:AY8=AWH;break;case 1:AY8=ArO;break;default:throw new Error(ArP+AxU.toFixed(
));}return AY8;},_Init:function(aArg){C.EnumToString._Init.call(this,aArg);this.
__proto__=C.DirectionOfCountingToString;},_className:"Device::DirectionOfCountingToString"
};C.EnumToIcon={Arl:function(A6){throw new Error(ArB+A6.toFixed());},Arm:function(
A6){throw new Error(ArB+A6.toFixed());},_Init:function(aArg){this.__proto__=C.EnumToIcon;
A.hJ++;},_Done:function(){this.__proto__=null;A.hJ--;},_ReInit:function(){},_Mark:
function(D){var B;if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:
0,_observers:null,_className:"Device::EnumToIcon"};C.Adh={Arl:function(A6){return A.
zW(A.abi.ASp);},Arm:function(A6){var AxU=A6;var Ra=-1;switch(AxU){case 0:Ra=3;break;
case 1:Ra=2;break;default:throw new Error(Anu+AxU.toFixed());}return Ra;},_Init:
function(aArg){C.EnumToIcon._Init.call(this,aArg);this.__proto__=C.Adh;},_className:
"Device::DirectionOfCountingToIcon"};C.AcY={Arl:function(A6){return A.zW(A.abi.ASn
);},Arm:function(A6){var AkA=A6;var Ra=-1;switch(AkA){case 0:Ra=0;break;case 1:Ra=
6;break;case 3:Ra=4;break;case 2:Ra=5;break;case 4:Ra=2;break;case 5:Ra=3;break;
default:throw new Error(Anu+AkA.toFixed());}return Ra;},_Init:function(aArg){C.EnumToIcon.
_Init.call(this,aArg);this.__proto__=C.AcY;},_className:"Device::AnimalIdGenerationMethodToIcon"
};C.Ph={UNDEFINED:0,SH:1,AMM:2,APs:3,AML:4,A4X:5,HE:6,A7H:7,A2r:8,AKH:9,ARU:10,BE:
11,BB:12,A4L:13,ARV:14,ARW:15,ASu:16};C.GermanStateToString={B0:function(A6){var
Bk=A6;var Go=A.jm;switch(Bk){case 1:Go=A.z2(A.abp.SH);break;case 2:Go=A.z2(A.abp.
AMM);break;case 3:Go=A.z2(A.abp.APs);break;case 4:Go=A.z2(A.abp.AML);break;case 5:
Go=A.z2(A.abp.A4X);break;case 6:Go=A.z2(A.abp.HE);break;case 7:Go=A.z2(A.abp.A7H
);break;case 8:Go=A.z2(A.abp.A2r);break;case 9:Go=A.z2(A.abp.AKH);break;case 10:
Go=A.z2(A.abp.ARU);break;case 11:Go=A.z2(A.abp.BE);break;case 12:Go=A.z2(A.abp.BB
);break;case 13:Go=A.z2(A.abp.A4L);break;case 14:Go=A.z2(A.abp.ARV);break;case 15:
Go=A.z2(A.abp.ARW);break;case 16:Go=A.z2(A.abp.ASu);break;case 0:Go=Ahe;break;default:
throw new Error(Ahf+Bk.toFixed());}return Go;},Lh:function(A6){var Bk=A6;var Go=
A.jm;switch(Bk){case 1:Go=A.z2(A.abp.BkW);break;case 2:Go=A.z2(A.abp.AMM);break;
case 3:Go=A.z2(A.abp.APs);break;case 4:Go=A.z2(A.abp.AML);break;case 5:Go=A.z2(A.
abp.Bgx);break;case 6:Go=A.z2(A.abp.HE);break;case 7:Go=A.z2(A.abp.BkD);break;case
8:Go=A.z2(A.abp.BdB);break;case 9:Go=A.z2(A.abp.AKH);break;case 10:Go=A.z2(A.abp.
ARU);break;case 11:Go=A.z2(A.abp.BE);break;case 12:Go=A.z2(A.abp.BB);break;case 13:
Go=A.z2(A.abp.Bgh);break;case 14:Go=A.z2(A.abp.ARV);break;case 15:Go=A.z2(A.abp.
ARW);break;case 16:Go=A.z2(A.abp.ASu);break;case 0:Go=Ahe;break;default:throw new
Error(Ahf+Bk.toFixed());}return Go;},Bma:function(A6){var Bk=A6;var FX=-1;switch(
Bk){case 0:FX=0;break;case 1:FX=1;break;case 2:FX=2;break;case 3:FX=3;break;case
4:FX=4;break;case 5:FX=5;break;case 6:FX=6;break;case 7:FX=7;break;case 8:FX=8;break;
case 9:FX=9;break;case 10:FX=10;break;case 11:FX=11;break;case 12:FX=12;break;case
13:FX=13;break;case 14:FX=14;break;case 15:FX=15;break;case 16:FX=16;break;default:
throw new Error(Ahf+Bk.toFixed());}return FX;},Bmb:function(A6){var Bk=A6;var FX=
A.jm;switch(Bk){case 1:FX=AwT;break;case 2:FX=Anv;break;case 3:FX=AWI;break;case
4:FX=AGv;break;case 5:FX=AWJ;break;case 6:FX=AWK;break;case 7:FX=AWL;break;case 8:
FX=AWM;break;case 9:FX=AWN;break;case 10:FX=AWO;break;case 11:FX=T$;break;case 12:
FX=AWP;break;case 13:FX=AWQ;break;case 14:FX=AWR;break;case 15:FX=AWS;break;case
16:FX=AWT;break;case 0:FX=Ahe;break;default:throw new Error(Ahf+Bk.toFixed());}return FX;
},_Init:function(aArg){C.EnumToString._Init.call(this,aArg);this.__proto__=C.GermanStateToString;
},_className:"Device::GermanStateToString"};C.EartagNrAssignmentMode={OneSingleRange:
0,TwoNumberRanges:1,LAST:2};C.EartagNrAssignmentModeToString={Lh:function(A6){var
Uw=A6;var Np=A.jm;switch(Uw){case 0:Np=AWU;break;case 1:Np=AWV;break;default:throw new
Error(ArQ+Uw.toFixed());}return Np;},B0:function(A6){var Uw=A6;var Np=A.jm;switch(
Uw){case 0:Np=A.z2(A.abg.Bkl);break;case 1:Np=A.z2(A.abg.Bmn);break;default:throw new
Error(ArQ+Uw.toFixed());}return Np;},_Init:function(aArg){C.EnumToString._Init.call(
this,aArg);this.__proto__=C.EartagNrAssignmentModeToString;},_className:"Device::EartagNrAssignmentModeToString"
};C.ByD={BAw:0,BAm:1,Bzu:2,Bzv:3,Bzw:4,BBs:5};C.EnumToCodeset={AlM:function(Ahi){
throw new Error(AWW+Ahi.toFixed());},Adk:function(A6){throw new Error(ArB+A6.toFixed(
));},ApA:function(){A.aa8("%s",ArR);return 0;},Hh:function(){A.aa8("%s",ArR);return 0;
},_Init:function(aArg){this.__proto__=C.EnumToCodeset;A.hJ++;},_Done:function(){
this.__proto__=null;A.hJ--;},_ReInit:function(){},_Mark:function(D){var B;if((B=
this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:
"Device::EnumToCodeset"};C.MR={AlM:function(Ahi){var Bs;switch(Ahi){case 0:Bs=0;
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
AwU+Bs.toFixed());}return BM;},ApA:function(){return 0;},Hh:function(){return 111;
},_Init:function(aArg){C.EnumToCodeset._Init.call(this,aArg);this.__proto__=C.MR;
},_className:"Device::BreedToHitCodeset"};C.ReasonOfLeaving={Unknown:0,A8b:1,SY:
2,A7C:3,A4p:4,BAE:5,A8q:6,A4T:7,A2P:8,A7y:9,A4R:10,A2T:11,BAT:12,BAU:13,LAST:14};
C.ReasonOfLeavingToString={B0:function(A6){var AcE=A6;var SQ=A.jm;switch(AcE){case
0:SQ=A.z2(A.abg.Unknown);break;case 1:SQ=A.z2(A.abg.A8b);break;case 2:SQ=A.z2(A.
abg.SY);break;case 3:SQ=A.z2(A.abg.A7C);break;case 4:SQ=A.z2(A.abg.A4p);break;case
5:SQ=A.z2(A.abg.Bkm);break;case 6:SQ=A.z2(A.abg.A8q);break;case 7:SQ=A.z2(A.abg.
A4T);break;case 8:SQ=A.z2(A.abg.A2P);break;case 9:SQ=A.z2(A.abg.A7y);break;case 10:
SQ=A.z2(A.abg.A4R);break;case 11:SQ=A.z2(A.abg.A2T);break;case 12:SQ=A.z2(A.abg.
Bkw);break;case 13:SQ=A.z2(A.abg.Bkv);break;default:throw new Error(AWX+AcE.toFixed(
));}return SQ;},_Init:function(aArg){C.EnumToString._Init.call(this,aArg);this.__proto__=
C.ReasonOfLeavingToString;},_className:"Device::ReasonOfLeavingToString"};C.AgQ={
AlM:function(Ahi){var Oh;switch(Ahi){case 0:Oh=0;break;case 1:Oh=1;break;case 2:
Oh=2;break;case 3:Oh=3;break;case 4:Oh=4;break;case 5:Oh=5;break;case 6:Oh=6;break;
case 7:Oh=7;break;case 8:Oh=8;break;case 9:Oh=9;break;case 10:Oh=10;break;case 11:
Oh=11;break;case 12:Oh=12;break;case 13:Oh=13;break;default:Oh=0;}return Oh;},Adk:
function(A6){var Oh=A6;var Jb=0;switch(Oh){case 0:Jb=0;break;case 2:Jb=2;break;case
8:Jb=8;break;case 11:Jb=11;break;case 4:Jb=4;break;case 10:Jb=10;break;case 7:Jb=
7;break;case 5:Jb=5;break;case 9:Jb=9;break;case 3:Jb=3;break;case 12:Jb=12;break;
case 13:Jb=13;break;case 1:Jb=1;break;case 6:Jb=6;break;default:throw new Error(
AGw+Oh.toFixed());}return Jb;},ApA:function(){return 0;},Hh:function(){return 13;
},_Init:function(aArg){C.EnumToCodeset._Init.call(this,aArg);this.__proto__=C.AgQ;
},_className:"Device::ReasonOfLeavingToCodeset"};C.KG={AlM:function(Ahi){var Ks;
switch(Ahi){case 0:Ks=0;break;case 1:Ks=1;break;case 2:Ks=2;break;case 3:Ks=3;break;
case 4:Ks=4;break;case 5:Ks=5;break;case 6:Ks=6;break;case 7:Ks=7;break;case 8:Ks=
8;break;case 9:Ks=9;break;case 10:Ks=10;break;default:Ks=0;}return Ks;},Adk:function(
A6){var Ks=A6;var Jb=0;switch(Ks){case 0:Jb=0;break;case 2:Jb=2;break;case 1:Jb=
1;break;case 9:Jb=9;break;case 6:Jb=6;break;case 8:Jb=8;break;case 7:Jb=7;break;
case 5:Jb=5;break;case 10:Jb=10;break;case 4:Jb=4;break;case 3:Jb=3;break;default:
throw new Error(AGw+Ks.toFixed());}return Jb;},ApA:function(){return 0;},Hh:function(
){return 10;},_Init:function(aArg){C.EnumToCodeset._Init.call(this,aArg);this.__proto__=
C.KG;},_className:"Device::WhereAboutsToCodeset"};C.AlT={_Init:function(aArg){this.
__proto__=C.AlT;A.hJ++;},_Done:function(){this.__proto__=null;A.hJ--;},_ReInit:function(
){},_Mark:function(D){var B;if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:
null,_cycle:0,_observers:null,_className:"Device::EmptyClass"};C.CalfDeregistrationsTableFields={
Year:0,Deregistrations:1,Deaths:2};C.CalfDeregistrations={Deregistrations:0,Deaths:
0,Year:0,EK:function(Ab,AF){var Hs=C.Row.EK.call(this,Ab,AF);if(Hs&&!!AF){this.AjO(
AF.CE(Ab,0));this.Au6(AF.CE(Ab,1));this.Au5(AF.CE(Ab,2));}return Hs;},Cr:function(
AF){var Hs=C.Row.Cr.call(this,AF);if(Hs&&!!AF){var Jg=AF.Op();if(Jg<=0)A.aa8("%s"
,AbR);else{if(this.Amc())this.CH=AF.XU();AF.G$(this.CH,0,this.Year);AF.G$(this.CH
,1,this.Deregistrations);AF.G$(this.CH,2,this.Deaths);AF.Or(Jg);}}return Hs;},Gd:
function(){C.Row.Gd.call(this);this.AjO(-1);},G_:function(){C.Row.G_.call(this);
this.AjO(0);this.Au6(0);this.Au5(0);},Au6:function(E){if(this.Deregistrations===
E)return;this.Deregistrations=E;A.aat([this,this.Bhg,this.Au6],0);},Au5:function(
E){if(this.Deaths===E)return;this.Deaths=E;A.aat([this,this.Bhe,this.Au5],0);},AjO:
function(E){if(this.Year===E)return;this.Year=E;A.aat([this,this.Aqe,this.AjO],0
);},Bhg:function(){return this.Deregistrations;},Bhe:function(){return this.Deaths;
},Aqe:function(){return this.Year;},_Init:function(aArg){C.Row._Init.call(this,aArg
);this.__proto__=C.CalfDeregistrations;this.TableId=4;},_className:"Device::CalfDeregistrations"
};C.Aty={Undefined:0,Display:1,A7G:2,A7S:3,A8I:4,BzP:5,BA4:6,BBD:7,BAd:8,By5:9,Bys:
10,A3R:11,A7I:12,BBK:13,A4W:14,BBN:15};C.DeviceComponentToString={B0:function(A6
){var A$p=A6;var PU=A.jm;switch(A$p){case 0:PU=AWY;break;case 10:PU=A.z2(A.abg.Bda
);break;case 9:PU=A.z2(A.abg.BdW);break;case 1:PU=A.z2(A.abg.BeB);break;case 11:
PU=A.z2(A.abg.A3R);break;case 5:PU=A.z2(A.abg.BmG);break;case 8:PU=A.z2(A.abg.BeD
);break;case 14:PU=A.z2(A.abg.A4W);break;case 2:PU=A.z2(A.abg.A7G);break;case 12:
PU=A.z2(A.abg.A7I);break;case 6:PU=A.z2(A.abg.BkC);break;case 3:PU=A.z2(A.abg.A7S
);break;case 7:PU=A.z2(A.abg.BeE);break;case 13:PU=A.z2(A.abg.Bel);break;case 15:
PU=A.z2(A.abg.BmK);break;case 4:PU=A.z2(A.abg.A8I);break;default:throw new Error(
AGx+A$p.toFixed());}return PU;},_Init:function(aArg){C.EnumToString._Init.call(this
,aArg);this.__proto__=C.DeviceComponentToString;},_className:"Device::DeviceComponentToString"
};C.Af1={AlM:function(Ahi){return Ahi;},Adk:function(A6){return A6;},ApA:function(
){return 0;},Hh:function(){return 4;},_Init:function(aArg){C.EnumToCodeset._Init.
call(this,aArg);this.__proto__=C.Af1;},_className:"Device::EaseOfDeliveryToCodeset"
};C.AdT={Arl:function(A6){return A.zW(A.abi.ANT);},Arm:function(A6){var A$z=A6;var
Ra=-1;switch(A$z){case 0:Ra=0;break;case 1:Ra=1;break;case 2:Ra=2;break;default:
throw new Error(AWZ+A$z.toFixed());}return Ra;},_Init:function(aArg){C.EnumToIcon.
_Init.call(this,aArg);this.__proto__=C.AdT;},_className:"Device::MotherSelectionFilterModeToIcon"
};C.WhereAboutsFilterCriterion={A4:0,Adi:function(){var Av=A._NewObject(C.WhereAboutsFilterCriterion
,0);Av.Gt(this);return Av;},Gt:function(AL){C.FilterCriterion.Gt.call(this,AL);var
Av=(C.WhereAboutsFilterCriterion.isPrototypeOf(AL)?AL:null);if(!!Av)this.A4=Av.A4;
},Initialize:function(AX,EE,A1,Sz){this.ET=AX;this.Operator=EE;this.A4=A1;this.AaR=
Sz;return this;},_Init:function(aArg){C.FilterCriterion._Init.call(this,aArg);this.
__proto__=C.WhereAboutsFilterCriterion;},_className:"Device::WhereAboutsFilterCriterion"
};C.BAp={ALK:0,Bza:1,ANv:2,LAST:3};C.BBu={Gu:0,AS6:1,G6:2,Year:3,LAST:4};C.TimespanDaysToString={
B0:function(A6){var BcM=A6;var Azt=A.jm;switch(BcM){case 0:Azt=A.z2(A.abg.A28);break;
case 1:Azt=A.z2(A.abg.AS6);break;case 2:Azt=A.z2(A.abg.G6);break;case 3:Azt=A.z2(
A.abg.Year);break;default:throw new Error(AW0+BcM.toFixed());}return Azt;},_Init:
function(aArg){C.EnumToString._Init.call(this,aArg);this.__proto__=C.TimespanDaysToString;
},_className:"Device::TimespanDaysToString"};C.Akd={BAB:0,Bzf:1,BzV:2,BzY:3,BzX:
4,Bzg:5,BzW:6,LAST:7};C.USBStateToString={B0:function(A6){var Bc6=A6;var Bk=A.jm;
switch(Bc6){case 0:Bk=AW1;break;case 2:Bk=AW2;break;case 1:Bk=AW3;break;case 5:Bk=
AW4;break;case 3:Bk=AW5;break;case 4:Bk=AW6;break;case 6:Bk=AGy;break;default:throw new
Error(AFW+Bc6.toFixed());}return Bk;},_Init:function(aArg){C.EnumToString._Init.
call(this,aArg);this.__proto__=C.USBStateToString;},_className:"Device::USBStateToString"
};C.AAA={BzT:0,ByE:1,BzU:2,BzR:3};C.Av2={AAw:A.jm,Timestamp:0,ACb:0,ACj:0,AEp:0,
OnSetTimestamp:function(E){if(this.Timestamp===E)return;this.Timestamp=E;},ADl:function(
E){if(this.ACb===E)return;this.ACb=E;},ADs:function(E){if(this.ACj===E)return;this.
ACj=E;},ADE:function(E){if(this.AEp===E)return;this.AEp=E;},AC3:function(E){if(this.
AAw===E)return;this.AAw=E;},_Init:function(aArg){this.__proto__=C.Av2;A.hJ++;},_Done:
function(){this.__proto__=null;A.hJ--;},_ReInit:function(){},_Mark:function(D){var
B;if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:
null,_className:"Device::SoftwareVersionInformation"};C.At4={Timestamp:0,APg:0,APh:
0,ASM:0,ASN:0,ASL:0,APf:0,OnSetTimestamp:function(E){if(this.Timestamp===E)return;
this.Timestamp=E;},ADi:function(E){if(this.APg===E)return;this.APg=E;},ADj:function(
E){if(this.APh===E)return;this.APh=E;},ADR:function(E){if(this.ASM===E)return;this.
ASM=E;},ADS:function(E){if(this.ASN===E)return;this.ASN=E;},ADQ:function(E){if(this.
ASL===E)return;this.ASL=E;},ADh:function(E){if(this.APf===E)return;this.APf=E;},
_Init:function(aArg){this.__proto__=C.At4;A.hJ++;},_Done:function(){this.__proto__=
null;A.hJ--;},_ReInit:function(){},_Mark:function(D){var B;if((B=this.I)&&(B._cycle
!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:"Device::HardwareVersionInformation"
};C.Ape={Undefined:0,BzF:1,ByR:2};C.AfK={Manual:0,TransponderId:1,LAST:2};C.AnimalIdAutoGenerationMethodToString={
B0:function(A6){var A_W=A6;var AYB=A.jm;switch(A_W){case 0:AYB=A.z2(A.abg.A2Y);break;
case 1:AYB=A.z2(A.abg.A3c);break;default:throw new Error(AW7+A_W.toFixed());}return AYB;
},_Init:function(aArg){C.EnumToString._Init.call(this,aArg);this.__proto__=C.AnimalIdAutoGenerationMethodToString;
},_className:"Device::AnimalIdAutoGenerationMethodToString"};C.G6={A2F:0,AB2:1,AAT:
2,ACc:3,AzU:4,ACf:5,AB4:6,AB3:7,Az2:8,AEw:9,ACt:10,ACr:11,AAD:12,LAST:13};C.MonthToString={
B0:function(A6){var Baz=A6;var WM=A.jm;switch(Baz){case 1:WM=A.z2(A.abu.AB2);break;
case 2:WM=A.z2(A.abu.AAT);break;case 3:WM=A.z2(A.abu.ACc);break;case 4:WM=A.z2(A.
abu.AzU);break;case 5:WM=A.z2(A.abu.ACf);break;case 6:WM=A.z2(A.abu.AB4);break;case
7:WM=A.z2(A.abu.AB3);break;case 8:WM=A.z2(A.abu.Az2);break;case 9:WM=A.z2(A.abu.
AEw);break;case 10:WM=A.z2(A.abu.ACt);break;case 11:WM=A.z2(A.abu.ACr);break;case
12:WM=A.z2(A.abu.AAD);break;default:throw new Error(AW8+Baz.toFixed());}return WM;
},_Init:function(aArg){C.EnumToString._Init.call(this,aArg);this.__proto__=C.MonthToString;
},_className:"Device::MonthToString"};C.AiN={FileName:A.jm,AEr:0,AAA:0,Am4:false
,_Init:function(aArg){this.__proto__=C.AiN;A.hJ++;},_Done:function(){this.__proto__=
null;A.hJ--;},_ReInit:function(){},_Mark:function(D){var B;if((B=this.I)&&(B._cycle
!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:"Device::DataExportContext"
};C.AlD={BzM:0,BBj:1};C.ATb={Init:function(aArg){var B;A.za([this,this.BbI],[B=A.
_GetAutoObject(C.Device),B.A6f,B.A93],0);this.BbI(this);},Cr:function(){A._GetAutoObject(
C.Device).AqL(this.toString());},BbI:function(H){this.EK(A._GetAutoObject(C.Device
).AFg);A.vv(this,0);},_Init:function(aArg){C.Int32ArrayWrapper._Init.call(this,aArg
);this.__proto__=C.ATb;this.YK(2);this.Init(aArg);},_className:"Device::WeightGainsLowClass"
};C.ATa={Init:function(aArg){var B;A.za([this,this.BbG],[B=A._GetAutoObject(C.Device
),B.A6e,B.A92],0);this.BbG(this);},Cr:function(){A._GetAutoObject(C.Device).AqK(
this.toString());},BbG:function(H){this.EK(A._GetAutoObject(C.Device).AFf);A.vv(
this,0);},_Init:function(aArg){C.Int32ArrayWrapper._Init.call(this,aArg);this.__proto__=
C.ATa;this.YK(2);this.Init(aArg);},_className:"Device::WeightGainsHighClass"};C.
ATd={Init:function(aArg){var B;A.za([this,this.BbK],[B=A._GetAutoObject(C.Device
),B.A6i,B.A96],0);this.BbK(this);},Cr:function(){A._GetAutoObject(C.Device).AqM(
this.toString());},BbK:function(H){this.EK(A._GetAutoObject(C.Device).AFi);A.vv(
this,0);},_Init:function(aArg){C.Int32ArrayWrapper._Init.call(this,aArg);this.__proto__=
C.ATd;this.YK(2);this.Init(aArg);},_className:"Device::WeightValuesBirthClass"};
C.AS$={Init:function(aArg){var B;A.za([this,this.BbE],[B=A._GetAutoObject(C.Device
),B.A6d,B.A91],0);this.BbE(this);},Cr:function(){A._GetAutoObject(C.Device).AqJ(
this.toString());},BbE:function(H){this.EK(A._GetAutoObject(C.Device).AFe);A.vv(
this,0);},_Init:function(aArg){C.Int32ArrayWrapper._Init.call(this,aArg);this.__proto__=
C.AS$;this.YK(2);this.Init(aArg);},_className:"Device::WeightGainsAverageClass"};
C.AKx={Init:function(aArg){var B;A.za([this,this.Ba3],[B=A._GetAutoObject(C.Device
),B.A5v,B.A9F],0);this.Ba3(this);},Ba3:function(H){this.EK(A._GetAutoObject(C.Device
).AzT);A.vv(this,0);},_Init:function(aArg){C.Int32ArrayWrapper._Init.call(this,aArg
);this.__proto__=C.AKx;this.YK(2);this.Init(aArg);},_className:"Device::AnimalTypesWeightGainsClass"
};C.BAs={BAv:0,BAj:1,By$:2,BBL:3,Unknown:4};C.ByP={None:0,BAC:1,BAx:2,BAt:3,BAu:
4};C.Ag6={A47:0,Manual:1,TransponderId:2,LAST:3};C.TransponderAssignmentIdChangeMethodToString={
B0:function(A6){var BcQ=A6;var AJf=A.jm;switch(BcQ){case 0:AJf=A.z2(A.abg.A47);break;
case 1:AJf=A.z2(A.abg.A2Y);break;case 2:AJf=A.z2(A.abg.A3c);break;default:throw new
Error(AW9+BcQ.toFixed());}return AJf;},_Init:function(aArg){C.EnumToString._Init.
call(this,aArg);this.__proto__=C.TransponderAssignmentIdChangeMethodToString;},_className:
"Device::TransponderAssignmentIdChangeMethodToString"};C.A7z={Bw_:function(A_y){
var Nq=A.aa2(A.aaX(A_y,15),0,10);if(!A._GetAutoObject(C.Converter).AeF(Nq))return 0;
return A.aa2(A.aaX(A_y,15),0,10);},Bw9:function(AHS){if(AHS.length<8)return 0;var
AyX=A._NewObject(A.Core.Bu,0);var Bxy=A.aaY(AHS,4,4);var AZG=A.vQ(Bxy,0,10);if((
AZG<2000)||(AZG>2100))return 0;AyX.Year=AZG;var Bxx=A.aaY(AHS,2,2);var AZF=A.vQ(
Bxx,0,10);if((AZF<1)||(AZF>12))return 0;AyX.TG(AZF);var Bxw=A.aaX(AHS,2);var AZE=
A.vQ(Bxw,0,10);if((AZE<1)||(AZE>AyX.Yz()))return 0;AyX.Lb(AZE);return AyX.JL();}
,_Init:function(aArg){this.__proto__=C.A7z;A.hJ++;},_Done:function(){this.__proto__=
null;A.hJ--;},_ReInit:function(){},_Mark:function(D){var B;if((B=this.I)&&(B._cycle
!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:"Device::ParserClass"
};C.AvL={_Init:function(){C.A7z._Init.call(this,0);},_variants:function(){return this;
},_this:null};C.AnimalTableFieldsToString={B0:function(A6){var Zz=A6;var FF=A.jm;
switch(Zz){case 14:FF=A.z2(A.abg.AeG);break;case 6:FF=A.jm;break;case 32:FF=A.z2(
A.abg.Breed);break;case 4:FF=A.z2(A.abg.AfW);break;case 28:FF=A.z2(A.abg.A2L);break;
case 33:FF=A.z2(A.abg.AiJ);break;case 23:FF=A.z2(A.abg.Kv);break;case 25:FF=A.jm;
break;case 7:FF=A.z2(A.abg.Aeq);break;case 2:FF=A.z2(A.abg.O);break;case 0:FF=A.
z2(A.abg.HA);break;case 8:FF=A.z2(A.abg.Alarm);break;case 9:FF=A.z2(A.abg.AAo);break;
case 38:FF=A.z2(A.abg.BeC);break;case 11:FF=A.z2(A.abg.Fever);break;case 27:FF=A.
jm;break;case 10:FF=A.jm;break;case 37:FF=A.jm;break;case 12:FF=A.jm;break;case 29:
FF=A.z2(A.abg.AO7);break;case 18:FF=A.z2(A.abg.MT);break;case 17:FF=A.jm;break;case
5:FF=A.jm;break;case 3:FF=A.jm;break;case 26:FF=A.z2(A.abg.Yt);break;case 35:FF=
A.jm;break;case 36:FF=A.jm;break;case 15:FF=A.jm;break;case 16:FF=A.jm;break;case
24:FF=A.jm;break;case 31:FF=A.jm;break;case 20:FF=A.jm;break;case 30:FF=A.jm;break;
case 21:FF=A.jm;break;case 19:FF=A.jm;break;case 22:FF=A.z2(A.abg.Transponder);break;
case 1:FF=A.z2(A.abg.Gr);break;case 34:FF=A.z2(A.abg.I$);break;case 13:FF=A.jm;break;
default:throw new Error(AW_+A6.toFixed());}return FF;},_Init:function(aArg){C.EnumToString.
_Init.call(this,aArg);this.__proto__=C.AnimalTableFieldsToString;},_className:"Device::AnimalTableFieldsToString"
};C.U4={BzS:0,BzQ:1,LAST:2};C.DataExportDestinationToString={B0:function(A6){var
BuP=A6;var AY3=A.jm;switch(BuP){case 0:AY3=A.abg.Bfx;break;case 1:AY3=A.abg.Bec;
break;default:throw new Error(AW$+A6.toFixed());}return AY3;},_Init:function(aArg
){C.EnumToString._Init.call(this,aArg);this.__proto__=C.DataExportDestinationToString;
},_className:"Device::DataExportDestinationToString"};C.AB$={Bc:0,BBn:1,LAST:2};
C.ListViewScopeToString={B0:function(A6){var BvV=A6;var AZ1=A.jm;switch(BvV){case
0:AZ1=A.z2(A.abg.Bc);break;case 1:AZ1=A.z2(A.abg.Blo);break;default:throw new Error(
AXa+A6.toFixed());}return AZ1;},_Init:function(aArg){C.EnumToString._Init.call(this
,aArg);this.__proto__=C.ListViewScopeToString;},_className:"Device::ListViewScopeToString"
};
C._Init=function(){C.Int32FilterCriterion.__proto__=C.FilterCriterion;C.StringFilterCriterion.
__proto__=C.FilterCriterion;C.Table.__proto__=C.ITable;C.Animal.__proto__=C.Row;
C.Rating.__proto__=C.Row;C.HelperClass.__proto__=C.AlT;C.BoolFilterCriterion.__proto__=
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
C.ASC.__proto__=C.Int32ArrayWrapper;C.ASB.__proto__=C.Int32ArrayWrapper;C.AKw.__proto__=
C.Int32ArrayWrapper;C.UInt64FilterCriterion.__proto__=C.FilterCriterion;C.BooleanToAssignedUnassignedString.
__proto__=C.EnumToString;C.CountryToString.__proto__=C.EnumToString;C.EaseOfDeliveryToString.
__proto__=C.EnumToString;C.WhereAboutsToString.__proto__=C.EnumToString;C.BreedToString.
__proto__=C.EnumToString;C.AnimalIdGenerationMethodToString.__proto__=C.EnumToString;
C.DirectionOfCountingToString.__proto__=C.EnumToString;C.Adh.__proto__=C.EnumToIcon;
C.AcY.__proto__=C.EnumToIcon;C.GermanStateToString.__proto__=C.EnumToString;C.EartagNrAssignmentModeToString.
__proto__=C.EnumToString;C.MR.__proto__=C.EnumToCodeset;C.ReasonOfLeavingToString.
__proto__=C.EnumToString;C.AgQ.__proto__=C.EnumToCodeset;C.KG.__proto__=C.EnumToCodeset;
C.CalfDeregistrations.__proto__=C.Row;C.DeviceComponentToString.__proto__=C.EnumToString;
C.Af1.__proto__=C.EnumToCodeset;C.AdT.__proto__=C.EnumToIcon;C.WhereAboutsFilterCriterion.
__proto__=C.FilterCriterion;C.TimespanDaysToString.__proto__=C.EnumToString;C.USBStateToString.
__proto__=C.EnumToString;C.AnimalIdAutoGenerationMethodToString.__proto__=C.EnumToString;
C.MonthToString.__proto__=C.EnumToString;C.ATb.__proto__=C.Int32ArrayWrapper;C.ATa.
__proto__=C.Int32ArrayWrapper;C.ATd.__proto__=C.Int32ArrayWrapper;C.AS$.__proto__=
C.Int32ArrayWrapper;C.AKx.__proto__=C.Int32ArrayWrapper;C.TransponderAssignmentIdChangeMethodToString.
__proto__=C.EnumToString;C.AnimalTableFieldsToString.__proto__=C.EnumToString;C.
DataExportDestinationToString.__proto__=C.EnumToString;C.ListViewScopeToString.__proto__=
C.EnumToString;};C._ReInit=function(){var B;if((B=C.Device._this))B._ReInit();if((
B=C.Converter._this))B._ReInit();if((B=C.Helper._this))B._ReInit();if((B=C.AvL._this
))B._ReInit();};C.DE=function(D){var B;if((B=C.Device._this)&&(B._cycle!=D))B._Done(
C.Device._this=null);if((B=C.Converter._this)&&(B._cycle!=D))B._Done(C.Converter.
_this=null);if((B=C.Helper._this)&&(B._cycle!=D))B._Done(C.Helper._this=null);if((
B=C.AvL._this)&&(B._cycle!=D))B._Done(C.AvL._this=null);};return C;})();

/* VitalControl demonstration application, © Urban GmbH & Co.KG 2023 */