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
var ON="AU";var Ss="AT";var T_="BE";var Wa="BA";var Wb="BG";var I$="CA";var T$="CN";
var Wc="TW";var Wd="HR";var Zg="CY";var St="CZ";var Zh="DK";var We="EE";var Ua="FI";
var Wf="FR";var QT="DE";var Wg="GR";var OO="HU";var PK="IE";var Ub="IT";var Zi="JP";
var Wh="LV";var Zj="LT";var Zk="LU";var Wi="MT";var Wj="NL";var Su="NO";var Zl="PL";
var Zm="PT";var AbO="RO";var Sv="RU";var AbP="SK";var AeN="SI";var Zn="ES";var Wk=
"SE";var Wl="CH";var AeO="TR";var AeP="UA";var JT="UK";var AbQ="US";var Li=".";var
Ag$="-";var Anc="ERROR: Unhandled mass unit: ";var N2=" ";var Wm="Unhandled gender";
var And="Unhandled animal type";var Aha="Unhandled Device::MassUnit.";var Ahb="Unhandled Device::AnimalListContent.";
var AbR="Avid";var Uc="Ordicam / IER SA";var Ane="Agrident";var Anf="Datamars";var
Awj="Allflex";var Awk="Texas Instruments";var Akh="Nedap";var Awl="Digital Angel";
var AeQ="null";var Art="[ ";var OP=", ";var Sw=" ]";var Awm="Unhandled language";
var Sx="Unhandled Device::AnimalListAction.";var Aru="Temperature unit conversion not supported: ";
var Awn="->";var Awo="=";var Awp=">";var Ang="<";var Awq="!=";var Arv="WARNING: Unhandled operator.";
var KI="Unknown birth type";var Awr="Unhandled country: ";var AbS="ERROR: Cannot start transaction";
var Aws="ERROR: Table is null, cannot load row (";var AFk=")";var AFl="Table Id mismatch!";
var AFm="ERROR: Row index (";var AFn=") out of bounds [0,";var Awt="]";var ATo="ERROR: Table is full. Item limit: ";
var ATp="Device::ScanTransponder not set";var ATq="Unhandled TransponderType.";var
ATr="Unhandled ScanState.";var ATs="Could not load animal with transponder";var Arw=
"Birth type";var Awu="Time calving";var QU="Pend. reg. notice";var Awv="Perished";
var ATt="Rating temp.";var ATu=" mother";var ATv="Reason leaving";var ATw="Time alarm";
var AFo="Time first weighing";var AFp="Time control";var AeR="Time temp.";var Anh=
"Time watch";var ATx="Time weighing";var AFq="Assessment";var Aki="Time rating";
var AFr="ERROR: Unhandled AnimalTable filter field:";var Aww="Field ";var ATy="ERROR: Unhandled RatingTable filter field:";
var ATz="ERROR: Unhandled table ";var ATA=" filter fields.";var ATB="WARNING: Unhandled filter criterion type.";
var AbT="0";var Arx="No table specified";var AFs="Invalid animal id generation method: ";
var AFt="Unhandled AnimalIdGenerationMethod: ";var Awx="Invalid gender: ";var AFu=
"Invalid ear tag number assignment mode: ";var Awy=";";var ATC="Invalid animal creation error code: ";
var ATD="Invalid EartagNrAssignmentMode: ";var ATE="Unsupported exponent: ";var ATF=
"Unknown whereabouts type: ";var AFv="Unhandled Gender: ";var ATG="Unhandled AnimalIdAutoGenerationMethod: ";
var OQ="\n";var Awz="\n\n";var ATH="Bootloader:\nV\xA0";var ATI="Middleware:\nV\xA0";
var ATJ="GUI:\nV\xA0";var ATK="Mainboard: ";var ATL="Torchboard: ";var ATM="Operator not supported.";
var ATN="Unhandled Device::TransponderAssignmentIdChangeMethod: ";var Ary="Unhandled enum value ";
var AwA="UNDEFINED";var AFw="Boot";var ATO="Charge";var AFx="ChargeWarning";var ATP=
"ControlledPowerOff";var ATQ="DeviceMain";var ATR="DeviceService";var ATS="DeviceInfo";
var AFy="DeviceBackup";var ATT="DeviceCheck";var AwB="Home";var AFz="Settings";var
AFA="DateTimeSettings";var ATU="UnitsSettings";var AFB="DataAcquisitionSettings";
var ATV="RegistrationAutomaticSettings";var ATW="RegistrationPresettingsSettings";
var QV="TransponderAssignmentSettings";var Wn="TemperatureSettings";var ATX="WeightGainSettings";
var ATY="DeviceSettings";var ATZ="RegistrationSettings";var AT0="InitializationSettings";
var AT1="PremisesSettings";var AT2="Sleep";var AT3="Sync";var Ahc="EditAnimalData";
var AFC="EditAnimalDataNaisId";var AT4="AnimalList";var AT5="AnimalListFilter";var
AFD="AlarmListFilter";var AFE="WatchListFilter";var AwC="AnimalActionActions";var
QW="AnimalActionTemperature";var AT6="TemperatureMeasurement";var AT7="AnimalActionWeighing";
var AT8="AnimalActionRate";var Arz="AnimalActionUnregister";var AT9="AnimalActionPerished";
var AT_="AnimalActionNewBornCare";var AT$="AlarmList";var AUa="ControlMeasure";var
AUb="ControlList";var AUc="RangeTest";var ArA="ListsMain";var AUd="ListsIdManagement";
var AUe="WatchList";var AUf="AnimalListActions";var AUg="AlarmListActions";var AUh=
"ControlListActions";var AUi="WatchListActions";var AUj="EvaluationMenuMain";var
AUk="EvaluationMenuWeights";var AUl="EvaluationLosses";var AUm="EvaluationRatings";
var AFF="EvaluationTemperatures";var ArB="EvaluationWeights";var AUn="EvaluationWeightsRecent";
var AUo="EvaluationBirthWeights";var AUp="AnimalEvaluationFilter";var AwD="NewMenu";
var Akj="NewAnimals";var AeS="NewAnimalManualData";var ArC="MassRecording";var Akk=
"NewAnimalTransponderData";var Ahd="NewAnimalLoss";var AUq="AutoActionScanScreen";
var ArD="ManualActionScanScreen";var AFG="SetTransponderScreen";var AeT="SetSaveTransponderScreen";
var AFH="NewAnimalSetTransponderScreen";var Wo="NewAnimalsSetTransponderScreen";
var Akl="NewAnimalCalvingDataScreen";var Ani="WeightListScreen";var AUr="AnimalSingleInfoScreen";
var AUs="AnimalMultiInfoScreen";var AUt="AnimalRegistrationDetails";var AUu="MultiInfoActionsScreen";
var AUv="FreshCowListScreen";var ArE="FreshCowListActionsScreen";var AFI="FreshCowListFilterScreen";
var AFJ="DryCowListScreen";var AUw="DryCowListActionsScreen";var AUx="DryCowListFilterScreen";
var AUy="NoTransponderListScreen";var AUz="NoTransponderListActionsScreen";var AUA=
"NoTransponderListFilterScreen";var AUB="YoungNoTransponderListScreen";var AFK="YoungNoTransponderListActionsScreen";
var AUC="YoungNoTransponderListFilterScreen";var AwE="NoNaisIdListScreen";var AFL=
"NoNaisIdListActionsScreen";var AFM="NoNaisIdListFilterScreen";var AFN="RegistrationsListScreen";
var AFO="RegistrationsListActionsScreen";var AFP="RegistrationsListFilterScreen";
var AFQ="ActionListScreen";var AUD="ActionListActionsScreen";var AUE="ActionListFilterScreen";
var AUF="UpdateScreen";var AUG="MotherScanScreen";var AUH="SetSaveNaisIdScreen";
var AUI="PurchasedAnimalsList";var AUJ="TextInput";var AwF="Unhandled display mode: ";
var AFR="None";var AUK="Actions Settings";var AFS="Auto Action";var Akm="Menu Item Settings";
var Zo="Rating Type";var AUL="Weighing settings";var AeU="Options";var AUM="AnimalSearch";
var AUN="AnimalSearchUnfiltered";var ArF="AnimalSearchDriedOff";var AeV="MeasurementReady";
var Anj="AnimalMultiInfoMenu";var AFT="MassRecordingDefaults";var AUO="MassRecordingFields";
var OR="MassRecordingMenu";var AUP="PurchasedAnimalsListMenu";var AUQ="BirthRegistrationsListMenu";
var AUR="Unhandled overlay menu: ";var AwG="Error";var ArG="Idle";var AFU="IdScanned";
var AUS="NotFound";var AFV="Progress";var AFW="Unhandled scan state: ";var AUT="Prediction";
var AFX="Ready";var AUU="Unhandled measure state: ";var AUV="Unhandled temperature unit: ";
var AUW="Unhandled species: ";var AFY="English";var AUX="Nederlands";var AFZ="Deutsch";
var AF0="Eesti";var AwH="Suomalainen";var AUY="Fran\xE7ais";var AUZ="\u0395\u03BB\u03BB\u03B7\u03BD\u03B9\u03BA\u03AC";
var AU0="\u0411\u044A\u043B\u0433\u0430\u0440\u0441\u043A\u0438";var AU1="Italiano";
var AU2="\u0420\u0443\u0441\u0441\u043A\u0438\u0439";var AU3="Espa\xF1ol";var AU4=
"T\xFCrk\xE7e";var AU5="\u6B63\u9AD4\u5B57/\u7E41\u9AD4\u5B57";var ArH="\u010Ce\u0161tina";
var Ank="Bosanski";var AF1="Norsk";var AU6="\u0423\u043A\u0440\u0430\u0457\u043D\u0441\u044C\u043A\u0438\u0439";
var AF2="Unhandled language: ";var AU7="Unhandled gender: ";var AU8="Unhandled birth type: ";
var AU9="Exporting";var AU_="ImportFinish";var AU$="ImportStart";var AVa="Importing";
var AVb="Init";var AVc="Unhandled sync state: ";var AF3="Unhandled rating attribute: ";
var AVd="Unhandled assessment: ";var AwI="Illegal boolean value: ";var AF4="Unhandled popup ID:";
var AVe="Unknown";var AVf="Severe Error";var AVg="ErrorsDeviceDriverCheck";var AVh=
"Enter Sleep";var ArI="About";var AF5="InfoSoftwareVersions";var AF6="InfoHardwareVersions";
var AF7="InfoSerial";var AF8="ShutDown";var AF9="SuccessDataSync";var AwJ="SuccessResetFactory";
var AF_="SuccessResetAnimalData";var AVi="SuccessCreateBackup";var AVj="SuccessRestoreBackup";
var AVk="CreateBackupInProgress";var AF$="RestoreBackupInProgress";var AVl="FailedCreateBackup";
var AVm="FailedRestoreBackup";var AVn="TechnicalDetails";var AVo="WarningDataSync";
var AVp="WarningFactory";var AVq="WarningResetAnimalData";var AVr="WarningRestart";
var AVs="WarningAutoAction";var AwK="WarningAutoActionNotApplicable";var AVt="WarningNoMenuItem";
var AVu="WarningEnterDemoMode";var AwL="NoAnimalsRegistered";var ArJ="MaxNumAnimalsReached";
var Zp="MaxNumRatingsReached";var ArK="MaxNumCalfDeregistrationsReached";var AVv=
"ScanInTransponder";var AVw="WarningScanOverwriteNaisId";var AVx="EarTagNumberTooShort";
var AGa="NoValidCountryCode";var AVy="WarningOutdatedAnimalWeight";var AGb="WarningOutdatedAnimalWeights";
var AVz="WarningWeightEvaluationSingular";var AVA="WarningWeightEvaluationPlural";
var AVB="ScanError";var ArL="ScanNotFound";var AVC="ScannedAnimalNotFound";var AVD=
"ScannedTransponderNotFound";var AGc="AnimalNotFound";var AVE="SuccessUnregister";
var AVF="SuccessUnregisterPerished";var AVG="SuccessCreationNewAnimal";var AVH="SuccessCreationNewAnimals";
var AbU="AnimalCreationInProgress";var AVI="EvaluationInProgress";var AVJ="DataSyncInProgress";
var AVK="AddedToAlarm";var AVL="RemovedFromAlarm";var AGd="AddedToWatch";var AVM=
"RemovedFromWatch";var AVN="AddedToDryOff";var AVO="RemovedFromDryOff";var AVP="AnimalIdAlreadyExists";
var AVQ="AnimalIdAlreadyExistsContinuable";var AVR="MissingAnimalId";var AGe="MissingAnimalIdMother";
var AVS="MissingEartagNumber";var AVT="MissingTransponderId";var AVU="TransponderAlreadyRegistered";
var AGf="TransponderAlreadyRegisteredContinuable";var AGg="HelpAnimalInfoRating";
var AVV="CannotReassignTransponder";var AVW="CannotReassignNaisId";var AVX="WarningResetToDefaultValue";
var AVY="WarningResetThresholds";var QX="WarningResetTempThresholds";var ArM="UpdateFirmware";
var AGh="UpdateFirmwareBatteryLow";var AGi="ConfirmFirmwareUpdated";var Anl="ConfirmBootloaderUpdated";
var Anm="QuestionAddAnotherCalfMultiples";var AwM="RemovedAllBirthNoticesPending";
var AVZ="RemovedAllPurchasedNoticePending";var AGj="RemovedFromBirthNoticePending";
var AV0="RemovedFromPurchasedNoticePending";var AV1="SuccessClearAnimalLoss";var
AV2="RemovedAnimal";var AV3="WarningNoActionsForAnimalLoss";var AV4="SuccessLinkTransponder";
var AV5="SuccessUnlinkTransponder";var AV6="SuccessLinkNaisId";var AV7="WarningDataExportHitBirthFailed";
var AV8="SuccessDataExportHitBirth";var AV9="SuccessDataExportHitBirthDownload";
var AV_="WarningDataExportHitPurchasedFailed";var AV$="SuccessDataExportHitPurchased";
var AWa="SuccessDataExportHitPurchasedDownload";var AWb="WarningDataExportAnimalsFailed";
var AWc="SuccessDataExportAnimalsRatings";var AWd="SuccessDataExportAnimalsDownload";
var AWe="WarningNoPremisesID";var Ann="WarningNoFlashDrivePresent";var AGk="WarningNoBackupPathPresent";
var AWf="WarningNoBackupFilePresent";var AGl="DemoFunctionNotAvailable";var AGm=
"WarningImpreciseTimeSetting";var Zq="ConfirmationRestoreBackup";var AGn="WarningParsedDateInFutureInvalid";
var AWg="WarningParsingDateFailed";var AGo="WarningParsingNaisIdFailed";var AWh=
"AnimalId";var AwN="FarmId";var AWi="GroupId";var AWj="PersonId";var AwO="Unhandled transponder type: ";
var AWk="FDX";var AWl="HDX";var AWm="HDX (Urban)";var AGp="Unhandled transponder protocol: ";
var Ano="Illegal RatingMode: ";var AGq="Unhandled mass unit: ";var AWn="Max array size is 10";
var AwP="Index out of bounds";var AGr="ERROR: Received more integers than expected!";
var Ahe="Unhandled double scan action :";var AWo="Illegal WeightRecordingMode: ";
var Anp="Illegal WeightRecordingScope: ";var AWp="AnimalData";var AGs="Rating";var
AGt="Temperature";var AWq="Weight";var AWr="Alarm infos";var AGu="Control infos";
var AWs="Watch infos";var AWt="Fresh cow infos";var AWu="No transponder infos";var
AWv="Dry cow info";var AWw="No nais id infos";var AWx="Registrations infos";var AWy=
"Unhandled animal list content:";var AWz="Illegal AutoRegistrationMode: ";var AWA=
"Illegal FactoryResetScope: ";var Anq="??";var AWB="Illegal EaseOfDelivery: ";var
AWC="Illegal Whereabouts: ";var AWD="Illegal breed: ";var AGv="Unisex";var Zr="Illegal animalIdGenerationMethod: ";
var AWE="Ascending";var AwQ="Descending";var AWF="Illegal directionOfCountingName: ";
var AGw="Unhandled direction of counting: ";var ArN="Unhandled German state: ";var
AWG="SH";var AWH="HH";var AWI="NI";var ArO="HB";var ArP="NW";var ArQ="HE";var ArR=
"RP";var AwR="BW";var Anr="BY";var AWJ="SL";var AGx="BB";var AWK="MV";var AWL="SN";
var AWM="ST";var AWN="TH";var AWO="One Range Male Female";var AWP="Two Ranges Male Female";
var AGy="Illegal EartagAssignmentMode: ";var AWQ="Unhandled code set value ";var
AGz="Implement in derived class";var AWR="Illegal HIT-Code: ";var AWS="Illegal ReasonOfLeaving: ";
var AGA="Illegal code: ";var AWT="Undefined";var AwS="Illegal DeviceComponent: ";
var AWU="Unhandled Device::MotherSelectionFilterMode: ";var AwT="Illegal Device::TimespanDays: ";
var AwU="Not connected";var AWV="Host";var AWW="Device";var AWX="Device CDC";var
AGB="Host MSC";var AWY="Illegal animalIdAutoGenerationMethod: ";var AWZ="Unhandled month: ";
var AW0="Illegal transponderAssignmentIdChangeMethod: ";var AW1="Unhandled animal table field: ";
var AW2="Unhandled data export destination: ";var AW3="Listenansicht";var AW4="Einzelansicht";
var AW5="Unhandled list view scope: ";
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
AL;if(!this.B7)this.B7=AL;},AMC:function(){return this.B7;},AMG:function(A_d){if(
!!A_d)return A_d.Af;return null;},D0:function(AG$,EE){var Av=this.B7;while(!!Av){
if(Av.ET===AG$){if(EE===1)return Av;else if(Av.Operator===EE)return Av;}Av=Av.Af;
}return null;},QD:function(AL){var Av=this.B7;while(!!Av){if(Av===AL){if(!!Av.AG
)Av.AG.Af=Av.Af;if(!!Av.Af)Av.Af.AG=Av.AG;if(this.B7===Av)this.B7=Av.Af;if(this.
B4===Av)this.B4=Av.AG;Av.Af=null;Av.AG=null;return;}Av=Av.Af;}},Gs:function(){var
Bb=A._NewObject(C.Filter,0);var Av=this.B7;while(!!Av){Bb.C0(Av.Adj());Av=Av.Af;
}return Bb;},_Init:function(aArg){this.__proto__=C.Filter;A.hJ++;},_Done:function(
){this.__proto__=null;A.hJ--;},_ReInit:function(){},_Mark:function(D){var B;if((
B=this.B7)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.B4)&&(B._cycle!=D))B._Mark(
B._cycle=D);if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:
null,_className:"Device::Filter"};C.FilterCriterion={Af:null,AG:null,ET:-1,Operator:
1,AaQ:false,Adj:function(){return null;},Gs:function(AL){if(!AL)return;this.ET=AL.
ET;this.Operator=AL.Operator;this.AaQ=AL.AaQ;},_Init:function(aArg){this.__proto__=
C.FilterCriterion;A.hJ++;},_Done:function(){this.__proto__=null;A.hJ--;},_ReInit:
function(){},_Mark:function(D){var B;if((B=this.Af)&&(B._cycle!=D))B._Mark(B._cycle=
D);if((B=this.AG)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.I)&&(B._cycle!=D
))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:"Device::FilterCriterion"
};C.Int32FilterCriterion={A4:0,Adj:function(){var Av=A._NewObject(C.Int32FilterCriterion
,0);Av.Gs(this);return Av;},Gs:function(AL){C.FilterCriterion.Gs.call(this,AL);var
Av=(C.Int32FilterCriterion.isPrototypeOf(AL)?AL:null);if(!!Av)this.A4=Av.A4;},Initialize:
function(AX,EE,A1,SA){this.ET=AX;this.Operator=EE;this.A4=A1;this.AaQ=SA;return this;
},_Init:function(aArg){C.FilterCriterion._Init.call(this,aArg);this.__proto__=C.
Int32FilterCriterion;},_className:"Device::Int32FilterCriterion"};C.DeviceClass={
ACn:0,ACm:0,Auy:0,YO:0,PD:null,R3:null,Qs:null,Sj:null,Rt:null,Ao:null,Bq:null,AfH:
null,AmP:null,Pa:null,Ata:A.jm,AutoActions:A.jm,AzS:A.jm,AEX:A.jm,AEY:A.jm,AgX:A.
jm,AFf:A.jm,AFg:A.jm,AzT:A.jm,AFe:A.jm,AFi:A.jm,AzM:A.jm,AzN:A.jm,Z$:100,Kj:0,AKX:
75,Zd:3600,ARH:0,FP:5,Fx:0,IK:50000,P7:0,AEb:0,Ait:0,ApG:0,ApF:0,APC:1,APB:1,Ai6:
0,APD:1,Av8:0,AeC:0,Apu:10,ASm:5,ACe:60,Aut:0,WhereAbouts:0,U4:0,Ag6:0,Av2:3,AAP:
0,AlA:0,AfJ:1,Akc:0,Aa5:0,Ao_:0,APP:12,ALP:11,Breed:0,EartagNrAssignmentMode:0,AtA:
0,AAI:0,AAH:0,Ia:5,AzL:2,Apa:0,APU:8,AMt:2,AS7:0,D3:0,AJ7:0,JD:0,Gender:2,WeightRecordingScope:
1,WeightRecordingMode:1,AnimalType:0,MassUnit:0,AutoRegistrationMode:0,RatingMode:
0,SyncState:0,OverlayMenu:0,TemperatureUnit:0,Language:0,MeasureState:0,ScanState:
0,Ku:3,AdN:true,APo:false,Alv:true,AlW:false,AlS:true,Hv:false,ASP:false,AlT:false
,AS5:false,Arn:false,ACl:false,AlH:false,UpdateActiveScreen:function(AI){if(this.
Ku===AI)return;this.Ku=AI;A.aat([this,this.ACz,this.A9t],0);},YC:function(E){if(
this.K&&this.K.YC)return this.K.YC.apply(this,arguments);else return C.DeviceClass.
BqC.apply(this,arguments);},BqC:function(E){},A9t:function(An){this.YC(An);},UpdateBatteryChargeState:
function(AI){if(this.Z$===AI)return;this.Z$=AI;A.aat([this,this.AuA,this.Aw0],0);
},AuW:function(E){if(this.K&&this.K.AuW)return this.K.AuW.apply(this,arguments);
else return C.DeviceClass.BqO.apply(this,arguments);},BqO:function(E){A.aa8("%s"
,BH);},Aw0:function(An){this.AuW(An);},UpdateChargeActive:function(AI){if(this.AlH===
AI)return;this.AlH=AI;A.aat([this,this.AuD,this.Aw1],0);},AC0:function(E){if(this.
K&&this.K.AC0)return this.K.AC0.apply(this,arguments);else return C.DeviceClass.
BqU.apply(this,arguments);},BqU:function(E){A.aa8("%s",EV);},Aw1:function(An){this.
AC0(An);},UpdateScanState:function(AI){var B;if(this.ScanState===AI)return;this.
ScanState=AI;A.aat([this,this.AQs,this.AXy],0);A._GetAutoObject(C.Helper).BwL(this
);},AqA:function(E){if(this.K&&this.K.AqA)return this.K.AqA.apply(this,arguments
);else return C.DeviceClass.Bry.apply(this,arguments);},Bry:function(E){A.aa8("%s"
,GS);},AXy:function(An){this.AqA(An);},UpdateMeasureState:function(AI){if(this.MeasureState===
AI)return;this.MeasureState=AI;A.aat([this,this.ACF,this.AGR],0);},Avi:function(
E){if(this.K&&this.K.Avi)return this.K.Avi.apply(this,arguments);else return C.DeviceClass.
Brg.apply(this,arguments);},Brg:function(E){A.aa8("%s",Jt);},AGR:function(An){this.
Avi(An);},UpdateTempValue:function(AI){if(this.Kj===AI)return;this.Kj=AI;A.aat([
this,this.ACJ,this.AGU],0);},Avs:function(E){if(this.K&&this.K.Avs)return this.K.
Avs.apply(this,arguments);else return C.DeviceClass.BrE.apply(this,arguments);},
BrE:function(E){A.aa8("%s",IL);},AGU:function(An){this.Avs(An);},AmE:function(E){
if(this.K&&this.K.AmE)return this.K.AmE.apply(this,arguments);else return C.DeviceClass.
Brb.apply(this,arguments);},Brb:function(E){},A9I:function(An){this.AmE(An);},Avt:
function(E){if(this.K&&this.K.Avt)return this.K.Avt.apply(this,arguments);else return C.
DeviceClass.BrF.apply(this,arguments);},BrF:function(E){},ArV:function(An){this.
Avt(An);},ACY:function(E){if(this.K&&this.K.ACY)return this.K.ACY.apply(this,arguments
);else return C.DeviceClass.BqT.apply(this,arguments);},BqT:function(E){},A9B:function(
An){this.ACY(An);},ADu:function(E){if(this.K&&this.K.ADu)return this.K.ADu.apply(
this,arguments);else return C.DeviceClass.Bri.apply(this,arguments);},Bri:function(
E){},AXr:function(An){this.ADu(An);},UpdateMonitoring:function(AI){if(this.ACl===
AI)return;this.ACl=AI;A.aat([this,this.AQi,this.AXr],0);},UpdateDataTable:function(
A_e){var B;switch(A_e){case 0:A.ow([B=this.Ao,B.Aju],this);break;case 1:A.ow([B=
this.Bq,B.Aju],this);break;case 3:A.ow([B=this.AfH,B.Aju],this);break;case 4:A.ow([
B=this.Pa,B.Aju],this);break;case 2:A.aa8("%s",OK);break;default:A.aa8("%s%e",PJ
,A_e);}},Av1:function(){if(this.K&&this.K.Av1)return this.K.Av1.apply(this,arguments
);else return C.DeviceClass.Br9.apply(this,arguments);},Br9:function(){},Ag0:function(
){if(this.K&&this.K.Ag0)return this.K.Ag0.apply(this,arguments);else return C.DeviceClass.
Bsa.apply(this,arguments);},Bsa:function(){},Aes:function(){if(this.K&&this.K.Aes
)return this.K.Aes.apply(this,arguments);else return C.DeviceClass.Br_.apply(this
,arguments);},Br_:function(){},AmZ:function(){if(this.K&&this.K.AmZ)return this.
K.AmZ.apply(this,arguments);else return C.DeviceClass.Bsb.apply(this,arguments);
},Bsb:function(){},UpdateLanguage:function(AI){if(this.Language===AI)return;this.
Language=AI;switch(AI){case 14:A._SetLanguage(1);break;case 13:A._SetLanguage(2);
break;case 6:A._SetLanguage(3);break;case 11:A._SetLanguage(4);break;case 0:A._SetLanguage(
0);break;case 10:A._SetLanguage(5);break;case 12:A._SetLanguage(6);break;case 5:
A._SetLanguage(7);break;case 3:A._SetLanguage(8);break;case 1:A._SetLanguage(9);
break;case 8:A._SetLanguage(10);break;case 4:A._SetLanguage(11);break;case 15:A.
_SetLanguage(13);break;case 9:A._SetLanguage(15);break;case 2:A._SetLanguage(16);
break;case 7:A._SetLanguage(17);break;case 16:A._SetLanguage(18);break;default:A.
_SetLanguage(0);}A.aat([this,this.A5D,this.A9I],0);},UpdateTemperatureUnit:function(
AI){if(this.TemperatureUnit===AI)return;this.TemperatureUnit=AI;A.aat([this,this.
Ap$,this.ArV],0);},UpdateBrightness:function(AI){if(this.AKX===AI)return;this.AKX=
AI;A.aat([this,this.A5s,this.A9B],0);},SetSystemTime:function(Aho){if(this.K&&this.
K.SetSystemTime)return this.K.SetSystemTime.apply(this,arguments);else return C.
DeviceClass.Br7.apply(this,arguments);},Br7:function(Aho){},AvX:function(){if(this.
K&&this.K.AvX)return this.K.AvX.apply(this,arguments);else return C.DeviceClass.
A9j.apply(this,arguments);},A9j:function(){},AEn:function(){if(this.K&&this.K.AEn
)return this.K.AEn.apply(this,arguments);else return C.DeviceClass.A9h.apply(this
,arguments);},A9h:function(){},BkJ:function(){},UpdateOverlayMenu:function(AI){if(
this.OverlayMenu===AI)return;this.OverlayMenu=AI;A.aat([this,this.ACI,this.AGT],
0);},Co:function(E){if(this.K&&this.K.Co)return this.K.Co.apply(this,arguments);
else return C.DeviceClass.Brt.apply(this,arguments);},Brt:function(E){},AGT:function(
An){this.Co(An);},Avy:function(E){if(this.K&&this.K.Avy)return this.K.Avy.apply(
this,arguments);else return C.DeviceClass.BrO.apply(this,arguments);},BrO:function(
E){},A9R:function(An){this.Avy(An);},UpdateUnderTemp:function(AI){if(this.Zd===AI
)return;this.Zd=AI;A.aat([this,this.A51,this.A9R],0);},UpdateSyncState:function(
AI){if(this.SyncState===AI)return;this.SyncState=AI;A.aat([this,this.AQu,this.AXA
],0);},Abm:function(E){if(this.K&&this.K.Abm)return this.K.Abm.apply(this,arguments
);else return C.DeviceClass.BrD.apply(this,arguments);},BrD:function(E){A.aa8("%s"
,N1);},AXA:function(An){this.Abm(An);},AA$:function(){if(this.K&&this.K.AA$)return this.
K.AA$.apply(this,arguments);else return C.DeviceClass.Bqu.apply(this,arguments);
},Bqu:function(){return A.jm;},UpdatePopup:function(Kn,AYh,AYd,AYk){this.A5(Kn,AYh
,AYd,AYk,[this,this.Bwt]);},PopupStateChanged:function(Kn,Ae){if(this.K&&this.K.
PopupStateChanged)return this.K.PopupStateChanged.apply(this,arguments);else return C.
DeviceClass.Br0.apply(this,arguments);},Br0:function(Kn,Ae){},ADX:function(E){if(
this.K&&this.K.ADX)return this.K.ADX.apply(this,arguments);else return C.DeviceClass.
BrQ.apply(this,arguments);},BrQ:function(E){},A9S:function(An){this.ADX(An);},UpdateVibrationOnKeypressEnabled:
function(AI){if(this.Arn===AI)return;this.Arn=AI;A.aat([this,this.A52,this.A9S],
0);},Ad8:function(E){if(this.K&&this.K.Ad8)return this.K.Ad8.apply(this,arguments
);else return C.DeviceClass.BrP.apply(this,arguments);},BrP:function(E){},AGV:function(
An){this.Ad8(An);},UpdateVibrationOn:function(A_G){if(this.AS5===A_G)return;this.
AS5=A_G;A.aat([this,this.ACK,this.AGV],0);},A5:function(Kn,AYh,AYd,AYk,BtC){var Afx=
A._NewObject(C.PopupContext,0);Afx.Id=Kn;Afx.Show=AYh;Afx.AjP=AYd;Afx.Aj_=AYk;Afx.
AD6=BtC;this.AmP.Trigger(Afx,false);},Bwt:function(H){var Ar=(C.PopupContext.isPrototypeOf(
H)?H:null);if(!!Ar)this.PopupStateChanged(Ar.Id,Ar.PopupState);},Avp:function(E){
if(this.K&&this.K.Avp)return this.K.Avp.apply(this,arguments);else return C.DeviceClass.
Brx.apply(this,arguments);},Brx:function(E){},AXx:function(An){this.Avp(An);},UpdateRatingMode:
function(AI){if(this.RatingMode===AI)return;this.RatingMode=AI;A.aat([this,this.
AQr,this.AXx],0);},Ad1:function(E){if(this.K&&this.K.Ad1)return this.K.Ad1.apply(
this,arguments);else return C.DeviceClass.Bq5.apply(this,arguments);},Bq5:function(
E){},ArU:function(An){this.Ad1(An);},UpdateFlashLightOn:function(A_m){if(this.AlT===
A_m)return;this.AlT=A_m;A.aat([this,this.Ap8,this.ArU],0);},YM:function(E){if(this.
K&&this.K.YM)return this.K.YM.apply(this,arguments);else return C.DeviceClass.BrI.
apply(this,arguments);},BrI:function(E){},AXB:function(An){this.YM(An);},UpdateTopLightOn:
function(A_B){if(this.ASP===A_B)return;this.ASP=A_B;A.aat([this,this.AQw,this.AXB
],0);},Abk:function(E){if(this.K&&this.K.Abk)return this.K.Abk.apply(this,arguments
);else return C.DeviceClass.Brw.apply(this,arguments);},Brw:function(E){},Bsr:function(
An){this.Abk(An);},UpdateRGBTopLight:function(A_w){if(this.ARH===A_w)return;this.
ARH=A_w;A.aat([this,this.Bhz,this.Bsr],0);},AuV:function(E){if(this.K&&this.K.AuV
)return this.K.AuV.apply(this,arguments);else return C.DeviceClass.BqN.apply(this
,arguments);},BqN:function(E){},Bsj:function(An){this.AuV(An);},UpdateAutoRegistrationMode:
function(A_a){if(this.AutoRegistrationMode===A_a)return;this.AutoRegistrationMode=
A_a;A.aat([this,this.Bg0,this.Bsj],0);},AqB:function(E){if(this.K&&this.K.AqB)return this.
K.AqB.apply(this,arguments);else return C.DeviceClass.Brz.apply(this,arguments);
},Brz:function(E){A.aa8("%s",CJ);},AXz:function(An){this.AqB(An);},UpdateScanTransponder:
function(Kn,A_E,A_D){if(((this.PD.Id===Kn)&&(this.PD.TransponderType===A_E))&&(this.
PD.TransponderProtocol===A_D))return;this.PD.OnSetId(Kn);this.PD.ARj(A_E);this.PD.
ARi(A_D);A.aat([this,this.AQt,this.AXz],0);},Pz:function(E){if(this.K&&this.K.Pz
)return this.K.Pz.apply(this,arguments);else return C.DeviceClass.BqX.apply(this
,arguments);},BqX:function(E){},AbV:function(An){this.Pz(An);},UpdateDigitsID:function(
A_i){if(this.FP===A_i)return;this.FP=A_i;A.aat([this,this.Aa9,this.AbV],0);},Qx:
function(E){if(this.K&&this.K.Qx)return this.K.Qx.apply(this,arguments);else return C.
DeviceClass.Brs.apply(this,arguments);},Brs:function(E){},AbW:function(An){this.
Qx(An);},UpdateOffsetID:function(A_t){if(this.Fx===A_t)return;this.Fx=A_t;A.aat([
this,this.Aa_,this.AbW],0);},AD1:function(E){if(this.K&&this.K.AD1)return this.K.
AD1.apply(this,arguments);else return C.DeviceClass.BrX.apply(this,arguments);},
BrX:function(E){A.aa8("%s",Fn);},AGW:function(An){this.AD1(An);},UpdateWeightValue:
function(AI){if(this.IK===AI)return;this.IK=AI;A.aat([this,this.ACL,this.AGW],0);
},Avg:function(E){if(this.K&&this.K.Avg)return this.K.Avg.apply(this,arguments);
else return C.DeviceClass.Bre.apply(this,arguments);},Bre:function(E){},AXq:function(
An){this.Avg(An);},UpdateMassUnit:function(AI){if(this.MassUnit===AI)return;this.
MassUnit=AI;A.aat([this,this.AQh,this.AXq],0);},Aqc:function(E){if(this.K&&this.
K.Aqc)return this.K.Aqc.apply(this,arguments);else return C.DeviceClass.A9d.apply(
this,arguments);},A9d:function(E){},A9q:function(An){this.Aqc(An);},Aqd:function(
E){if(this.K&&this.K.Aqd)return this.K.Aqd.apply(this,arguments);else return C.DeviceClass.
A9e.apply(this,arguments);},A9e:function(E){},AXj:function(An){this.Aqd(An);},UpdateActiveActions:
function(AI){if(this.P7===AI)return;this.P7=AI;A.aat([this,this.A5c,this.A9q],0);
},UpdateActiveActionsOrder:function(AI){if(this.Ata===AI)return;this.Ata=AI;A.aat([
this,this.AP5,this.AXj],0);},Abb:function(E){if(this.K&&this.K.Abb)return this.K.
Abb.apply(this,arguments);else return C.DeviceClass.A9f.apply(this,arguments);},
A9f:function(E){},A9z:function(An){this.Abb(An);},UpdateAutoActions:function(AI){
if(this.AutoActions===AI)return;this.AutoActions=AI;A.aat([this,this.A5o,this.A9z
],0);},AEO:function(){if(this.K&&this.K.AEO)return this.K.AEO.apply(this,arguments
);else return C.DeviceClass.Br$.apply(this,arguments);},Br$:function(){},Ard:function(
){if(this.K&&this.K.Ard)return this.K.Ard.apply(this,arguments);else return C.DeviceClass.
Bsd.apply(this,arguments);},Bsd:function(){},DV:function(E){if(this.K&&this.K.DV
)return this.K.DV.apply(this,arguments);else return C.DeviceClass.BqK.apply(this
,arguments);},BqK:function(E){},Bsi:function(An){this.DV(An);},UpdateAnimalType:
function(Ee){if(this.AnimalType===Ee)return;this.AnimalType=Ee;A.aat([this,this.
Py,this.Bsi],0);},Avz:function(E){if(this.K&&this.K.Avz)return this.K.Avz.apply(
this,arguments);else return C.DeviceClass.BrV.apply(this,arguments);},BrV:function(
E){},A9X:function(An){this.Avz(An);},UpdateWeightRecordingMode:function(A_I){if(
this.WeightRecordingMode===A_I)return;this.WeightRecordingMode=A_I;A.aat([this,this.
A5_,this.A9X],0);},ADC:function(E){if(this.K&&this.K.ADC)return this.K.ADC.apply(
this,arguments);else return C.DeviceClass.Bru.apply(this,arguments);},Bru:function(
E){A.aa8("%s",Nb);},AXv:function(An){this.ADC(An);},UpdatePredictedTempValue:function(
AI){if(this.AEb===AI)return;this.AEb=AI;A.aat([this,this.AQo,this.AXv],0);},Se:function(
L0){if(this.K&&this.K.Se)return this.K.Se.apply(this,arguments);else return C.DeviceClass.
Br6.apply(this,arguments);},Br6:function(L0){},AC6:function(E){if(this.K&&this.K.
AC6)return this.K.AC6.apply(this,arguments);else return C.DeviceClass.BqW.apply(
this,arguments);},BqW:function(E){},AGP:function(An){this.AC6(An);},UpdateDemoMode:
function(AI){if(this.Hv===AI)return;this.Hv=AI;A.aat([this,this.ACD,this.AGP],0);
},ACP:function(E){if(this.K&&this.K.ACP)return this.K.ACP.apply(this,arguments);
else return C.DeviceClass.BqD.apply(this,arguments);},BqD:function(E){},A9u:function(
An){this.ACP(An);},UpdateAgeRegistration:function(A_s){if(this.Ait===A_s)return;
this.Ait=A_s;A.aat([this,this.A5h,this.A9u],0);},AvA:function(E){if(this.K&&this.
K.AvA)return this.K.AvA.apply(this,arguments);else return C.DeviceClass.BrW.apply(
this,arguments);},BrW:function(E){},A9Y:function(An){this.AvA(An);},UpdateWeightRecordingScope:
function(A_x){if(this.WeightRecordingScope===A_x)return;this.WeightRecordingScope=
A_x;A.aat([this,this.A5$,this.A9Y],0);},JM:function(E){if(this.K&&this.K.JM)return this.
K.JM.apply(this,arguments);else return C.DeviceClass.Bq9.apply(this,arguments);}
,Bq9:function(E){},AXp:function(An){this.JM(An);},UpdateGender:function(LY){if(this.
Gender===LY)return;this.Gender=LY;A.aat([this,this.VJ,this.AXp],0);},Aqs:function(
E){if(this.K&&this.K.Aqs)return this.K.Aqs.apply(this,arguments);else return C.DeviceClass.
Bq$.apply(this,arguments);},Bq$:function(E){},Aw5:function(An){this.Aqs(An);},UpdateIDLastUsedMale:
function(QY){if(this.ApG===QY)return;this.ApG=QY;A.aat([this,this.AuJ,this.Aw5],
0);},Aqr:function(E){if(this.K&&this.K.Aqr)return this.K.Aqr.apply(this,arguments
);else return C.DeviceClass.Bq_.apply(this,arguments);},Bq_:function(E){},Aw4:function(
An){this.Aqr(An);},UpdateIDLastUsedFemale:function(QY){if(this.ApF===QY)return;this.
ApF=QY;A.aat([this,this.AuI,this.Aw4],0);},Aba:function(E){if(this.K&&this.K.Aba
)return this.K.Aba.apply(this,arguments);else return C.DeviceClass.BqI.apply(this
,arguments);},BqI:function(E){},AGN:function(An){this.Aba(An);},UpdateAnimalListContent:
function(AI){if(this.JD===AI)return;this.JD=AI;A.aat([this,this.ACA,this.AGN],0);
},ACR:function(E){if(this.K&&this.K.ACR)return this.K.ACR.apply(this,arguments);
else return C.DeviceClass.BqE.apply(this,arguments);},BqE:function(E){},A9v:function(
An){this.ACR(An);},UpdateAlarmListAction:function(AI){if(this.AJ7===AI)return;this.
AJ7=AI;A.aat([this,this.A5j,this.A9v],0);},AC9:function(E){if(this.K&&this.K.AC9
)return this.K.AC9.apply(this,arguments);else return C.DeviceClass.Bq4.apply(this
,arguments);},Bq4:function(E){},A9E:function(An){this.AC9(An);},UpdateFlashLightInMeasureState:
function(A_n){if(this.AlS===A_n)return;this.AlS=A_n;A.aat([this,this.A5v,this.A9E
],0);},AdZ:function(E){if(this.K&&this.K.AdZ)return this.K.AdZ.apply(this,arguments
);else return C.DeviceClass.BqH.apply(this,arguments);},BqH:function(E){},AXl:function(
An){this.AdZ(An);},UpdateAnimalInfoContent:function(AI){if(this.D3===AI)return;this.
D3=AI;A.aat([this,this.AP7,this.AXl],0);},AD0:function(E){if(this.K&&this.K.AD0)
return this.K.AD0.apply(this,arguments);else return C.DeviceClass.BrR.apply(this
,arguments);},BrR:function(E){},A9T:function(An){this.AD0(An);},UpdateWatchListAction:
function(AI){if(this.AS7===AI)return;this.AS7=AI;A.aat([this,this.A56,this.A9T],
0);},AC_:function(E){if(this.K&&this.K.AC_)return this.K.AC_.apply(this,arguments
);else return C.DeviceClass.Bq6.apply(this,arguments);},Bq6:function(E){},A9G:function(
An){this.AC_(An);},UpdateFreshCowListAction:function(AI){if(this.AMt===AI)return;
this.AMt=AI;A.aat([this,this.A5x,this.A9G],0);},AqW:function(H){if(this.K&&this.
K.AqW)return this.K.AqW.apply(this,arguments);else return C.DeviceClass.Br1.apply(
this,arguments);},Br1:function(H){},BBO:function(s){this.AqW(s);},AqY:function(H
){if(this.K&&this.K.AqY)return this.K.AqY.apply(this,arguments);else return C.DeviceClass.
Br3.apply(this,arguments);},Br3:function(H){},BBQ:function(s){this.AqY(s);},AuT:
function(E){if(this.K&&this.K.AuT)return this.K.AuT.apply(this,arguments);else return C.
DeviceClass.BqL.apply(this,arguments);},BqL:function(E){},A9x:function(An){this.
AuT(An);},AqC:function(E){if(this.K&&this.K.AqC)return this.K.AqC.apply(this,arguments
);else return C.DeviceClass.BrG.apply(this,arguments);},BrG:function(E){},A9O:function(
An){this.AqC(An);},AqD:function(E){if(this.K&&this.K.AqD)return this.K.AqD.apply(
this,arguments);else return C.DeviceClass.BrH.apply(this,arguments);},BrH:function(
E){},A9P:function(An){this.AqD(An);},Aq0:function(H){if(this.K&&this.K.Aq0)return this.
K.Aq0.apply(this,arguments);else return C.DeviceClass.Br4.apply(this,arguments);
},Br4:function(H){},BBR:function(s){this.Aq0(s);},UpdateTemperaturesLowString:function(
AI){if(this.AEY===AI)return;this.AEY=AI;A.aat([this,this.A5X,this.A9P],0);},UpdateTemperaturesHighString:
function(AI){if(this.AEX===AI)return;this.AEX=AI;A.aat([this,this.A5W,this.A9O],
0);},UpdateAnimalTypesString:function(AI){if(this.AzS===AI)return;this.AzS=AI;A.
aat([this,this.A5m,this.A9x],0);},ADx:function(E){if(this.K&&this.K.ADx)return this.
K.ADx.apply(this,arguments);else return C.DeviceClass.Brr.apply(this,arguments);
},Brr:function(E){},AXt:function(An){this.ADx(An);},UpdateNoTransponderListAction:
function(AI){if(this.APU===AI)return;this.APU=AI;A.aat([this,this.AQl,this.AXt],
0);},Avb:function(E){if(this.K&&this.K.Avb)return this.K.Avb.apply(this,arguments
);else return C.DeviceClass.Bq8.apply(this,arguments);},Bq8:function(E){},Bsn:function(
An){this.Avb(An);},UpdateFreshCowsHideMeasured:function(AI){if(this.AlW===AI)return;
this.AlW=AI;A.aat([this,this.Bhh,this.Bsn],0);},Aqw:function(E){if(this.K&&this.
K.Aqw)return this.K.Aqw.apply(this,arguments);else return C.DeviceClass.Bro.apply(
this,arguments);},Bro:function(E){},A9L:function(An){this.Aqw(An);},UpdateNaisIdLastUsedMale:
function(Ww){if(this.ACn===Ww)return;this.ACn=Ww;A.aat([this,this.A5K,this.A9L],
0);},Aqv:function(E){if(this.K&&this.K.Aqv)return this.K.Aqv.apply(this,arguments
);else return C.DeviceClass.Brn.apply(this,arguments);},Brn:function(E){},A9K:function(
An){this.Aqv(An);},UpdateNaisIdLastUsedFemale:function(Ww){if(this.ACm===Ww)return;
this.ACm=Ww;A.aat([this,this.A5J,this.A9K],0);},Avl:function(E){if(this.K&&this.
K.Avl)return this.K.Avl.apply(this,arguments);else return C.DeviceClass.Brl.apply(
this,arguments);},Brl:function(E){},Aw7:function(An){this.Avl(An);},UpdateNaisIdIncrementMale:
function(Akv){if(this.APC===Akv)return;this.APC=Akv;A.aat([this,this.AuM,this.Aw7
],0);},Avk:function(E){if(this.K&&this.K.Avk)return this.K.Avk.apply(this,arguments
);else return C.DeviceClass.Brk.apply(this,arguments);},Brk:function(E){},Aw6:function(
An){this.Avk(An);},UpdateNaisIdIncrementFemale:function(Akv){if(this.APB===Akv)return;
this.APB=Akv;A.aat([this,this.AuL,this.Aw6],0);},UpdateFirmware:function(){if(this.
K&&this.K.UpdateFirmware)return this.K.UpdateFirmware.apply(this,arguments);else
return C.DeviceClass.A9k.apply(this,arguments);},A9k:function(){},AmA:function(E
){if(this.K&&this.K.AmA)return this.K.AmA.apply(this,arguments);else return C.DeviceClass.
BqQ.apply(this,arguments);},BqQ:function(E){},A9A:function(An){this.AmA(An);},UpdateBootloaderMessage:
function(AI){if(this.Apa===AI)return;this.Apa=AI;A.aat([this,this.A5r,this.A9A],
0);},ACN:function(E){if(this.K&&this.K.ACN)return this.K.ACN.apply(this,arguments
);else return C.DeviceClass.Bqy.apply(this,arguments);},Bqy:function(E){},A9p:function(
An){this.ACN(An);},UpdateActionListAction:function(AI){if(this.AzL===AI)return;this.
AzL=AI;A.aat([this,this.A5b,this.A9p],0);},AuR:function(E){if(this.K&&this.K.AuR
)return this.K.AuR.apply(this,arguments);else return C.DeviceClass.Bqz.apply(this
,arguments);},Bqz:function(E){},Bsh:function(An){this.AuR(An);},UpdateActionListHideMeasured:
function(AI){if(this.Alv===AI)return;this.Alv=AI;A.aat([this,this.BgW,this.Bsh],
0);},TB:function(E){if(this.K&&this.K.TB)return this.K.TB.apply(this,arguments);
else return C.DeviceClass.BqG.apply(this,arguments);},BqG:function(E){},Ant:function(
An){this.TB(An);},UpdateAnimalIdGenerationMethod:function(A_N){if(this.Ia===A_N)
return;this.Ia=A_N;A.aat([this,this.Amr,this.Ant],0);},Au5:function(E){if(this.K&&
this.K.Au5)return this.K.Au5.apply(this,arguments);else return C.DeviceClass.BqY.
apply(this,arguments);},BqY:function(E){},AXn:function(An){this.Au5(An);},UpdateDirectionOfCountingFemale:
function(Ako){if(this.AAH===Ako)return;this.AAH=Ako;A.aat([this,this.AQa,this.AXn
],0);},Au6:function(E){if(this.K&&this.K.Au6)return this.K.Au6.apply(this,arguments
);else return C.DeviceClass.BqZ.apply(this,arguments);},BqZ:function(E){},AXo:function(
An){this.Au6(An);},UpdateDirectionOfCountingMale:function(Ako){if(this.AAI===Ako
)return;this.AAI=Ako;A.aat([this,this.AQb,this.AXo],0);},Au7:function(E){if(this.
K&&this.K.Au7)return this.K.Au7.apply(this,arguments);else return C.DeviceClass.
Bq0.apply(this,arguments);},Bq0:function(E){},Aw2:function(An){this.Au7(An);},UpdateDirectionOfCountingUnisex:
function(Ako){if(this.AtA===Ako)return;this.AtA=Ako;A.aat([this,this.AuG,this.Aw2
],0);},Aqt:function(E){if(this.K&&this.K.Aqt)return this.K.Aqt.apply(this,arguments
);else return C.DeviceClass.Bra.apply(this,arguments);},Bra:function(E){},Anu:function(
An){this.Aqt(An);},UpdateIDLastUsedUnisex:function(QY){if(this.Ai6===QY)return;this.
Ai6=QY;A.aat([this,this.Amu,this.Anu],0);},Aqx:function(E){if(this.K&&this.K.Aqx
)return this.K.Aqx.apply(this,arguments);else return C.DeviceClass.Brp.apply(this
,arguments);},Brp:function(E){},AXs:function(An){this.Aqx(An);},UpdateNaisIdLastUsedUnisex:
function(Ww){if(this.Auy===Ww)return;this.Auy=Ww;A.aat([this,this.AQj,this.AXs],
0);},Avm:function(E){if(this.K&&this.K.Avm)return this.K.Avm.apply(this,arguments
);else return C.DeviceClass.Brm.apply(this,arguments);},Brm:function(E){},Aw8:function(
An){this.Avm(An);},UpdateNaisIdIncrementUnisex:function(Akv){if(this.APD===Akv)return;
this.APD=Akv;A.aat([this,this.AuN,this.Aw8],0);},AjA:function(E){if(this.K&&this.
K.AjA)return this.K.AjA.apply(this,arguments);else return C.DeviceClass.Bq2.apply(
this,arguments);},Bq2:function(E){},Aw3:function(An){this.AjA(An);},UpdateEartagNrAssignmentMode:
function(Akp){if(this.EartagNrAssignmentMode===Akp)return;this.EartagNrAssignmentMode=
Akp;A.aat([this,this.AuH,this.Aw3],0);},NP:function(E){if(this.K&&this.K.NP)return this.
K.NP.apply(this,arguments);else return C.DeviceClass.BqS.apply(this,arguments);}
,BqS:function(E){},Bsl:function(An){this.NP(An);},UpdateBreed:function(Ab3){if(this.
Breed===Ab3)return;this.Breed=Ab3;A.aat([this,this.AuC,this.Bsl],0);},ADr:function(
E){if(this.K&&this.K.ADr)return this.K.ADr.apply(this,arguments);else return C.DeviceClass.
Brh.apply(this,arguments);},Brh:function(E){},Bsp:function(An){this.ADr(An);},UpdateMiddlewareVersions:
function(PO,AX$,AYa,AYg,AX0){this.R3.OnSetTimestamp(PO);this.R3.ADm(AX$);this.R3.
ADt(AYa);this.R3.ADF(AYg);this.R3.AC4(AX0);A.aat([this,this.Bhu,this.Bsp],0);},ADl:
function(E){if(this.K&&this.K.ADl)return this.K.ADl.apply(this,arguments);else return C.
DeviceClass.Brc.apply(this,arguments);},Brc:function(E){},Bso:function(An){this.
ADl(An);},UpdateMainboardVersions:function(PO,AX9,AX_,AX8,AYm,AYn,AYl){this.Qs.OnSetTimestamp(
PO);this.Qs.ADj(AX9);this.Qs.ADk(AX_);this.Qs.ADi(AX8);this.Qs.ADS(AYm);this.Qs.
ADT(AYn);this.Qs.ADR(AYl);A.aat([this,this.Bhs,this.Bso],0);},ADU:function(E){if(
this.K&&this.K.ADU)return this.K.ADU.apply(this,arguments);else return C.DeviceClass.
BrJ.apply(this,arguments);},BrJ:function(E){},Bsv:function(An){this.ADU(An);},UpdateTorchboardVersions:
function(PO,AX9,AX_,AX8,AYm,AYn,AYl){this.Sj.OnSetTimestamp(PO);this.Sj.ADj(AX9);
this.Sj.ADk(AX_);this.Sj.ADi(AX8);this.Sj.ADS(AYm);this.Sj.ADT(AYn);this.Sj.ADR(
AYl);A.aat([this,this.BhR,this.Bsv],0);},ACU:function(E){if(this.K&&this.K.ACU)return this.
K.ACU.apply(this,arguments);else return C.DeviceClass.BqR.apply(this,arguments);
},BqR:function(E){},Bsk:function(An){this.ACU(An);},UpdateBootloaderVersions:function(
PO,AX$,AYa,AYg,AX0){this.Rt.OnSetTimestamp(PO);this.Rt.ADm(AX$);this.Rt.ADt(AYa);
this.Rt.ADF(AYg);this.Rt.AC4(AX0);A.aat([this,this.Bg2,this.Bsk],0);},AC7:function(
E){if(this.K&&this.K.AC7)return this.K.AC7.apply(this,arguments);else return C.DeviceClass.
Bq1.apply(this,arguments);},Bq1:function(E){},A9D:function(An){this.AC7(An);},UpdateDryCowListAction:
function(AI){if(this.ALP===AI)return;this.ALP=AI;A.aat([this,this.A5t,this.A9D],
0);},AHM:function(AX2){if(this.K&&this.K.AHM)return this.K.AHM.apply(this,arguments
);else return C.DeviceClass.BsH.apply(this,arguments);},BsH:function(AX2){return false;
},ADw:function(E){if(this.K&&this.K.ADw)return this.K.ADw.apply(this,arguments);
else return C.DeviceClass.Brq.apply(this,arguments);},Brq:function(E){},A9M:function(
An){this.ADw(An);},UpdateNoNaisIdListAction:function(AI){if(this.APP===AI)return;
this.APP=AI;A.aat([this,this.A5L,this.A9M],0);},ACT:function(E){if(this.K&&this.
K.ACT)return this.K.ACT.apply(this,arguments);else return C.DeviceClass.BqP.apply(
this,arguments);},BqP:function(E){},AGO:function(An){this.ACT(An);},UpdateBirthListView:
function(AI){if(this.Ao_===AI)return;this.Ao_=AI;A.aat([this,this.ACB,this.AGO],
0);},BatchResetBirthNoticePending:function(){var B3=A._NewObject(C.Animal,0);var
P;var Ah4=0;var Acl=A._GetAutoObject(C.Device).Ao.Filter;var Bb=A._GetAutoObject(
C.Helper).AMz();A._GetAutoObject(C.Device).Ao.Bk(Bb);for(P=0;P<A._GetAutoObject(
C.Device).Ao.Cj();P++){B3.EK(P,A._GetAutoObject(C.Device).Ao);B3.AgG(false);B3.Cr(
A._GetAutoObject(C.Device).Ao);Ah4++;}A._GetAutoObject(C.Device).Ao.Bk(Acl);return Ah4;
},UpdateTransferProgress:function(AI){if(this.Av8===AI)return;this.Av8=AI;A.aat([
this,this.AQx,this.AXC],0);},ADV:function(E){if(this.K&&this.K.ADV)return this.K.
ADV.apply(this,arguments);else return C.DeviceClass.BrK.apply(this,arguments);},
BrK:function(E){A.aa8("%s",OL);},AXC:function(An){this.ADV(An);},UpdateTransferTarget:
function(AI){if(this.AeC===AI)return;this.AeC=AI;A.aat([this,this.A50,this.A9Q],
0);},AqE:function(E){if(this.K&&this.K.AqE)return this.K.AqE.apply(this,arguments
);else return C.DeviceClass.BrL.apply(this,arguments);},BrL:function(E){A.aa8("%s"
,KH);},A9Q:function(An){this.AqE(An);},Arc:function(){if(this.K&&this.K.Arc)return this.
K.Arc.apply(this,arguments);else return C.DeviceClass.Bsc.apply(this,arguments);
},Bsc:function(){},Avo:function(E){if(this.K&&this.K.Avo)return this.K.Avo.apply(
this,arguments);else return C.DeviceClass.Brv.apply(this,arguments);},Brv:function(
E){},AXw:function(An){this.Avo(An);},UpdatePremisesID:function(QY){if(this.YO===
QY)return;this.YO=QY;A.aat([this,this.AQp,this.AXw],0);},Avj:function(E){if(this.
K&&this.K.Avj)return this.K.Avj.apply(this,arguments);else return C.DeviceClass.
Brj.apply(this,arguments);},Brj:function(E){},AGS:function(An){this.Avj(An);},UpdateMotherSelectionDriedOffFilter:
function(AI){if(this.Aa5===AI)return;this.Aa5=AI;A.aat([this,this.ACH,this.AGS],
0);},AC$:function(E){if(this.K&&this.K.AC$)return this.K.AC$.apply(this,arguments
);else return C.DeviceClass.Bq7.apply(this,arguments);},Bq7:function(E){},A9H:function(
An){this.AC$(An);},UpdateFreshCowSpan:function(AI){if(this.Apu===AI)return;this.
Apu=AI;A.aat([this,this.A5y,this.A9H],0);},UpdateUSBState:function(A_F){if(this.
Akc===A_F)return;this.Akc=A_F;A.aat([this,this.Aa$,this.AbX],0);},ADW:function(E
){if(this.K&&this.K.ADW)return this.K.ADW.apply(this,arguments);else return C.DeviceClass.
BrN.apply(this,arguments);},BrN:function(E){A.aa8("%s",EV);},AbX:function(An){this.
ADW(An);},AmX:function(Ahi){if(this.K&&this.K.AmX)return this.K.AmX.apply(this,arguments
);else return C.DeviceClass.Br8.apply(this,arguments);},Br8:function(Ahi){return A.
_NewObject(C.AiM,0);},ApT:function(){if(this.K&&this.K.ApT)return this.K.ApT.apply(
this,arguments);else return C.DeviceClass.Bqx.apply(this,arguments);},Bqx:function(
){return false;},Api:function(Ng){if(this.K&&this.K.Api)return this.K.Api.apply(
this,arguments);else return C.DeviceClass.Bqs.apply(this,arguments);},Bqs:function(
Ng){},ADI:function(E){if(this.K&&this.K.ADI)return this.K.ADI.apply(this,arguments
);else return C.DeviceClass.BrA.apply(this,arguments);},BrA:function(E){},Bss:function(
An){this.ADI(An);},UpdateSerialNumber:function(AI){if(this.AgX===AI)return;this.
AgX=AI;A.aat([this,this.BhF,this.Bss],0);},AuS:function(E){if(this.K&&this.K.AuS
)return this.K.AuS.apply(this,arguments);else return C.DeviceClass.BqF.apply(this
,arguments);},BqF:function(E){},AXk:function(An){this.AuS(An);},UpdateAnimalIdAutoGenerationMethod:
function(A_M){if(this.AfJ===A_M)return;this.AfJ=A_M;A.aat([this,this.AP6,this.AXk
],0);},AAv:function(){return false;},AEo:function(){return false;},ADK:function(
E){if(this.K&&this.K.ADK)return this.K.ADK.apply(this,arguments);else return C.DeviceClass.
BrB.apply(this,arguments);},BrB:function(E){},A9N:function(An){this.ADK(An);},UpdateShutdownTimer:
function(AI){if(this.ASm===AI)return;this.ASm=AI;A.aat([this,this.A5T,this.A9N],
0);},Aqj:function(E){if(this.K&&this.K.Aqj)return this.K.Aqj.apply(this,arguments
);else return C.DeviceClass.BqJ.apply(this,arguments);},BqJ:function(E){},A9w:function(
An){this.Aqj(An);},UpdateAnimalListInfoItemMode:function(AI){if(this.AlA===AI)return;
this.AlA=AI;A.aat([this,this.A5k,this.A9w],0);},Aq1:function(H){if(this.K&&this.
K.Aq1)return this.K.Aq1.apply(this,arguments);else return C.DeviceClass.Br5.apply(
this,arguments);},Br5:function(H){},BBS:function(s){this.Aq1(s);},AqH:function(E
){if(this.K&&this.K.AqH)return this.K.AqH.apply(this,arguments);else return C.DeviceClass.
BrT.apply(this,arguments);},BrT:function(E){},A9V:function(An){this.AqH(An);},AqI:
function(E){if(this.K&&this.K.AqI)return this.K.AqI.apply(this,arguments);else return C.
DeviceClass.BrU.apply(this,arguments);},BrU:function(E){},A9W:function(An){this.
AqI(An);},UpdateWeightGainsLowString:function(AI){if(this.AFg===AI)return;this.AFg=
AI;A.aat([this,this.A59,this.A9W],0);},UpdateWeightGainsHighString:function(AI){
if(this.AFf===AI)return;this.AFf=AI;A.aat([this,this.A58,this.A9V],0);},AuU:function(
E){if(this.K&&this.K.AuU)return this.K.AuU.apply(this,arguments);else return C.DeviceClass.
BqM.apply(this,arguments);},BqM:function(E){},A9y:function(An){this.AuU(An);},UpdateAnimalTypesWeightGainsString:
function(AI){if(this.AzT===AI)return;this.AzT=AI;A.aat([this,this.A5n,this.A9y],
0);},AqG:function(E){if(this.K&&this.K.AqG)return this.K.AqG.apply(this,arguments
);else return C.DeviceClass.BrS.apply(this,arguments);},BrS:function(E){},A9U:function(
An){this.AqG(An);},AqJ:function(E){if(this.K&&this.K.AqJ)return this.K.AqJ.apply(
this,arguments);else return C.DeviceClass.BrY.apply(this,arguments);},BrY:function(
E){},A9Z:function(An){this.AqJ(An);},UpdateWeightValueBirthString:function(AI){if(
this.AFi===AI)return;this.AFi=AI;A.aat([this,this.A6a,this.A9Z],0);},UpdateWeightGainsAverageString:
function(AI){if(this.AFe===AI)return;this.AFe=AI;A.aat([this,this.A57,this.A9U],
0);},Au8:function(E){if(this.K&&this.K.Au8)return this.K.Au8.apply(this,arguments
);else return C.DeviceClass.Bq3.apply(this,arguments);},Bq3:function(E){},Bsm:function(
An){this.Au8(An);},UpdateEvaluationAnimalType:function(Ee){if(this.AAP===Ee)return;
this.AAP=Ee;A.aat([this,this.Bha,this.Bsm],0);},UpdateStartScreen:function(AI){if(
this.Av2===AI)return;this.Av2=AI;A.aat([this,this.BhH,this.Bst],0);},Avr:function(
E){if(this.K&&this.K.Avr)return this.K.Avr.apply(this,arguments);else return C.DeviceClass.
BrC.apply(this,arguments);},BrC:function(E){},Bst:function(An){this.Avr(An);},ABZ:
function(){if(this.K&&this.K.ABZ)return this.K.ABZ.apply(this,arguments);else return C.
DeviceClass.Bqv.apply(this,arguments);},Bqv:function(){return 1;},AB0:function(){
if(this.K&&this.K.AB0)return this.K.AB0.apply(this,arguments);else return C.DeviceClass.
Bqw.apply(this,arguments);},Bqw:function(){return 1;},GetCommitCount:function(){
return 1903;},GetCommitEpoch:function(){return 1692954318;},GetCommitHash:function(
){return A.kh.BdU;},GetVersionMajor:function(){return 0;},GetVersionMinor:function(
){return 9;},GetVersionRev:function(){return 9;},ADq:function(E){if(this.K&&this.
K.ADq)return this.K.ADq.apply(this,arguments);else return C.DeviceClass.Brf.apply(
this,arguments);},Brf:function(E){},A9J:function(An){this.ADq(An);},UpdateMaximumAgeNewOnFarm:
function(AI){if(this.ACe===AI)return;this.ACe=AI;A.aat([this,this.A5I,this.A9J],
0);},Avx:function(E){if(this.K&&this.K.Avx)return this.K.Avx.apply(this,arguments
);else return C.DeviceClass.BrM.apply(this,arguments);},BrM:function(E){},AXD:function(
An){this.Avx(An);},UpdateTransponderAssignmentIdChangeMethod:function(A_C){if(this.
Ag6===A_C)return;this.Ag6=A_C;A.aat([this,this.AQy,this.AXD],0);},BatchResetPurchasedNoticePending:
function(){var B3=A._NewObject(C.Animal,0);var P;var Ah4=0;var Acl=A._GetAutoObject(
C.Device).Ao.Filter;var Bb=A._GetAutoObject(C.Helper).AMJ();A._GetAutoObject(C.Device
).Ao.Bk(Bb);for(P=0;P<A._GetAutoObject(C.Device).Ao.Cj();P++){B3.EK(P,A._GetAutoObject(
C.Device).Ao);B3.AgG(false);B3.Cr(A._GetAutoObject(C.Device).Ao);Ah4++;}A._GetAutoObject(
C.Device).Ao.Bk(Acl);return Ah4;},AC5:function(E){if(this.K&&this.K.AC5)return this.
K.AC5.apply(this,arguments);else return C.DeviceClass.BqV.apply(this,arguments);
},BqV:function(E){},AXm:function(An){this.AC5(An);},UpdateDataExportDestination:
function(AI){if(this.U4===AI)return;this.U4=AI;A.aat([this,this.AP$,this.AXm],0);
},Bjy:function(E){},UpdateMassRecordingAutomatic:function(AI){if(this.APo===AI)return;
this.APo=AI;A.aat([this,this.Bht,this.Bjy],0);},M7:function(E){if(this.K&&this.K.
M7)return this.K.M7.apply(this,arguments);else return C.DeviceClass.BrZ.apply(this
,arguments);},BrZ:function(E){},Bsw:function(An){this.M7(An);},UpdateWhereAbouts:
function(Ae1){if(this.WhereAbouts===Ae1)return;this.WhereAbouts=Ae1;A.aat([this,
this.AuP,this.Bsw],0);},Aqf:function(E){if(this.K&&this.K.Aqf)return this.K.Aqf.
apply(this,arguments);else return C.DeviceClass.BqA.apply(this,arguments);},BqA:
function(E){},A9r:function(An){this.Aqf(An);},Aqg:function(E){if(this.K&&this.K.
Aqg)return this.K.Aqg.apply(this,arguments);else return C.DeviceClass.BqB.apply(
this,arguments);},BqB:function(E){},A9s:function(An){this.Aqg(An);},UpdateActiveMassRecordingFields:
function(AI){if(this.AzM===AI)return;this.AzM=AI;A.aat([this,this.A5d,this.A9r],
0);},UpdateActiveMassRecordingFieldsOrder:function(AI){if(this.AzN===AI)return;this.
AzN=AI;A.aat([this,this.A5e,this.A9s],0);},AqX:function(H){if(this.K&&this.K.AqX
)return this.K.AqX.apply(this,arguments);else return C.DeviceClass.Br2.apply(this
,arguments);},Br2:function(H){},BBP:function(s){this.AqX(s);},ADo:function(E){if(
this.K&&this.K.ADo)return this.K.ADo.apply(this,arguments);else return C.DeviceClass.
Brd.apply(this,arguments);},Brd:function(E){},AGQ:function(An){this.ADo(An);},UpdateMassRecordingDateOfBirthMandatory:
function(AI){if(this.AdN===AI)return;this.AdN=AI;A.aat([this,this.ACE,this.AGQ],
0);},ADn:function(E){this.UpdateMassRecordingCounter(E);},UpdateMassRecordingCounter:
function(AI){if(this.Aut===AI)return;this.Aut=AI;A.aat([this,this.A5H,this.ADn],
0);},ACz:function(){return this.Ku;},AuA:function(){return this.Z$;},AuD:function(
){return this.AlH;},AQs:function(){return this.ScanState;},ACF:function(){return this.
MeasureState;},ACJ:function(){return this.Kj;},A5D:function(){return this.Language;
},Ap$:function(){return this.TemperatureUnit;},A5s:function(){return this.AKX;},
AQi:function(){return this.ACl;},ACI:function(){return this.OverlayMenu;},A51:function(
){return this.Zd;},AQu:function(){return this.SyncState;},A52:function(){return this.
Arn;},ACK:function(){return this.AS5;},AQr:function(){return this.RatingMode;},Ap8:
function(){return this.AlT;},AQw:function(){return this.ASP;},Bhz:function(){return this.
ARH;},Bg0:function(){return this.AutoRegistrationMode;},AQt:function(){return this.
PD;},Aa9:function(){return this.FP;},Aa_:function(){return this.Fx;},ACL:function(
){return this.IK;},AQh:function(){return this.MassUnit;},A5c:function(){return this.
P7;},AP5:function(){return this.Ata;},A5o:function(){return this.AutoActions;},Py:
function(){return this.AnimalType;},A5_:function(){return this.WeightRecordingMode;
},AQo:function(){return this.AEb;},ACD:function(){return this.Hv;},A5h:function(
){return this.Ait;},A5$:function(){return this.WeightRecordingScope;},VJ:function(
){return this.Gender;},AuJ:function(){return this.ApG;},AuI:function(){return this.
ApF;},ACA:function(){return this.JD;},A5j:function(){return this.AJ7;},A5v:function(
){return this.AlS;},AP7:function(){return this.D3;},A56:function(){return this.AS7;
},A5x:function(){return this.AMt;},A5m:function(){return this.AzS;},A5W:function(
){return this.AEX;},A5X:function(){return this.AEY;},AQl:function(){return this.
APU;},Bhh:function(){return this.AlW;},A5K:function(){return this.ACn;},A5J:function(
){return this.ACm;},AuM:function(){return this.APC;},AuL:function(){return this.
APB;},A5r:function(){return this.Apa;},A5b:function(){return this.AzL;},BgW:function(
){return this.Alv;},Amr:function(){return this.Ia;},AQa:function(){return this.AAH;
},AQb:function(){return this.AAI;},AuG:function(){return this.AtA;},Amu:function(
){return this.Ai6;},AQj:function(){return this.Auy;},AuN:function(){return this.
APD;},AuH:function(){return this.EartagNrAssignmentMode;},AuC:function(){return this.
Breed;},Bhu:function(){return this.R3;},Bhs:function(){return this.Qs;},BhR:function(
){return this.Sj;},Bg2:function(){return this.Rt;},A5t:function(){return this.ALP;
},A5L:function(){return this.APP;},ACB:function(){return this.Ao_;},AQx:function(
){return this.Av8;},A50:function(){return this.AeC;},AQp:function(){return this.
YO;},ACH:function(){return this.Aa5;},A5y:function(){return this.Apu;},Aa$:function(
){return this.Akc;},BhF:function(){return this.AgX;},AP6:function(){return this.
AfJ;},A5T:function(){return this.ASm;},A5k:function(){return this.AlA;},A58:function(
){return this.AFf;},A59:function(){return this.AFg;},A5n:function(){return this.
AzT;},A57:function(){return this.AFe;},A6a:function(){return this.AFi;},Bha:function(
){return this.AAP;},BhH:function(){return this.Av2;},A5I:function(){return this.
ACe;},AQy:function(){return this.Ag6;},AP$:function(){return this.U4;},Bht:function(
){return this.APo;},AuP:function(){return this.WhereAbouts;},A5d:function(){return this.
AzM;},A5e:function(){return this.AzN;},ACE:function(){return this.AdN;},A5H:function(
){return this.Aut;},_Init:function(aArg){C.Table._Init.call(this.Ao={I:this},0);
C.Table._Init.call(this.Bq={I:this},0);C.Table._Init.call(this.AfH={I:this},0);A.
Core.A79._Init.call(this.AmP={I:this},0);C.Table._Init.call(this.Pa={I:this},0);
this.__proto__=C.DeviceClass;this.Ao.OnSetId(0);this.Bq.OnSetId(1);this.AfH.OnSetId(
3);this.Pa.OnSetId(4);this.PD=A._NewObject(C.Transponder,0);this.R3=A._NewObject(
C.Av0,0);this.Qs=A._NewObject(C.At3,0);this.Sj=A._NewObject(C.At3,0);this.Rt=A._NewObject(
C.Av0,0);var Lj=this._variants();if(Lj){this.K={};Lj._Init.call(this,aArg);}A.hJ++;
},_Done:function(){if(this.K)this.K._Done.call(this);this.__proto__=null;this.Ao.
_Done();this.Bq._Done();this.AfH._Done();this.AmP._Done();this.Pa._Done();A.hJ--;
},_ReInit:function(){this.Ao._ReInit();this.Bq._ReInit();this.AfH._ReInit();this.
AmP._ReInit();this.Pa._ReInit();if(this.K)this.K._ReInit.call(this);},_Mark:function(
D){var B;if((B=this.PD)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.R3)&&(B._cycle
!=D))B._Mark(B._cycle=D);if((B=this.Qs)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=
this.Sj)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Rt)&&(B._cycle!=D))B._Mark(
B._cycle=D);if((B=this.Ao)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Bq)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.AfH)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AmP
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
Op.apply(this,arguments);},Or:function(AnF){if(this.K&&this.K.Or)return this.K.Or.
apply(this,arguments);else return C.ITable.Or.apply(this,arguments);},XW:function(
){if(this.K&&this.K.XW)return this.K.XW.apply(this,arguments);else return C.ITable.
XW.apply(this,arguments);},YZ:function(Ab,AX,CX){if(this.K&&this.K.YZ)return this.
K.YZ.apply(this,arguments);else return C.ITable.YZ.apply(this,arguments);},G_:function(
Ab,AX,CX){if(this.K&&this.K.G_)return this.K.G_.apply(this,arguments);else return C.
ITable.G_.apply(this,arguments);},YY:function(Ab,AX,CX){if(this.K&&this.K.YY)return this.
K.YY.apply(this,arguments);else return C.ITable.YY.apply(this,arguments);},M_:function(
Ab,AX,CX){if(this.K&&this.K.M_)return this.K.M_.apply(this,arguments);else return C.
ITable.M_.apply(this,arguments);},YX:function(Ab,AX,CX){if(this.K&&this.K.YX)return this.
K.YX.apply(this,arguments);else return C.ITable.YX.apply(this,arguments);},K4:function(
aColumn,A1){if(this.K&&this.K.K4)return this.K.K4.apply(this,arguments);else return C.
ITable.K4.apply(this,arguments);},LD:function(Ab,AX){if(this.K&&this.K.LD)return this.
K.LD.apply(this,arguments);else return C.ITable.LD.apply(this,arguments);},TP:function(
Ab,AX,CX){if(this.K&&this.K.TP)return this.K.TP.apply(this,arguments);else return C.
ITable.TP.apply(this,arguments);},AiY:function(aColumn,A1){if(this.K&&this.K.AiY
)return this.K.AiY.apply(this,arguments);else return C.ITable.AiY.apply(this,arguments
);},G9:function(){if(this.K&&this.K.G9)return this.K.G9.apply(this,arguments);else
return C.ITable.G9.apply(this,arguments);},AiV:function(aColumn,A1){if(this.K&&this.
K.AiV)return this.K.AiV.apply(this,arguments);else return C.ITable.AiV.apply(this
,arguments);},Af4:function(aColumn,A1){if(this.K&&this.K.Af4)return this.K.Af4.apply(
this,arguments);else return C.ITable.Af4.apply(this,arguments);},Hz:function(){if(
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
ConverterClass={MQ:null,Aj8:function(AnD){var A$k;var AsZ=this.ASF(AnD/100,0,A._GetAutoObject(
C.Device).TemperatureUnit);A$k=A.aap(AsZ,0,1);return A$k;},A8g:function(Ne){if(Ne<=
0)return 0;else if(Ne<=1)return 5;else if(Ne<=2)return 3;else if(Ne<=4)return 2;
else if(Ne<=6)return 1;else if(Ne<=8)return 4;else return 0;},Ac2:function(Ne){var
a=0;switch(Ne){case 3:a=2;break;case 2:a=4;break;case 1:a=6;break;case 0:a=0;break;
case 4:a=8;break;case 5:a=1;break;default:A.aa8("%s",OM);}return a;},Arg:function(
Ee,Q1){var Ni=A._GetAutoObject(C.Converter).Aiu(Q1,Ee);switch(Ni){case 3:return 1;
case 2:return 2;case 1:return 3;case 0:return 4;default:throw new Error(Nc+Ni.toFixed(
));}},Ag4:function(){var B;var D2=A._NewObject(A.Core.Bu,0).Initialize(A._GetAutoObject(
C.Helper).DB());D2.AmD(0);D2.AmG(0);D2.AmJ(0);return((B=(D2.JL()|0))<0)?B+0x100000000:
B;},BdY:function(ArZ){var Dk;switch(ArZ){case 36:Dk=ON;break;case 40:Dk=Ss;break;
case 56:Dk=T_;break;case 70:Dk=Wa;break;case 100:Dk=Wb;break;case 124:Dk=I$;break;
case 156:Dk=T$;break;case 158:Dk=Wc;break;case 191:Dk=Wd;break;case 196:Dk=Zg;break;
case 203:Dk=St;break;case 208:Dk=Zh;break;case 233:Dk=We;break;case 246:Dk=Ua;break;
case 250:Dk=Wf;break;case 276:Dk=QT;break;case 300:Dk=Wg;break;case 348:Dk=OO;break;
case 372:Dk=PK;break;case 380:Dk=Ub;break;case 392:Dk=Zi;break;case 428:Dk=Wh;break;
case 440:Dk=Zj;break;case 442:Dk=Zk;break;case 470:Dk=Wi;break;case 528:Dk=Wj;break;
case 578:Dk=Su;break;case 616:Dk=Zl;break;case 620:Dk=Zm;break;case 642:Dk=AbO;break;
case 643:Dk=Sv;break;case 703:Dk=AbP;break;case 705:Dk=AeN;break;case 724:Dk=Zn;
break;case 752:Dk=Wk;break;case 756:Dk=Wl;break;case 792:Dk=AeO;break;case 804:Dk=
AeP;break;case 826:Dk=JT;break;case 840:Dk=AbQ;break;default:Dk=ArZ.toFixed();}return Dk;
},Ana:function(N5){return this.N0(N5,1,false);},Awi:function(N5,AnT){return this.
N0(N5,AnT,false);},N0:function(N5,AnT,BvK){var B;var AkJ=A.jm;switch(A._GetAutoObject(
C.Device).MassUnit){case 0:if(BvK)AkJ=A.aaq(N5,0,0);else{var BaC=N5<0;if(AnT<3)N5=
N5+(((BaC?-1:1)*5)*(Math.pow(10,2-AnT)|0));AkJ=(((((B=N5)>-2147483648)?Math.abs(
B):B)/1000)|0).toFixed();if(AnT>0)AkJ=AkJ+(Li+A.aaX(A.aaq((((B=N5)>-2147483648)?
Math.abs(B):B)%1000,3,10),AnT));if(BaC)AkJ=Ag$+AkJ;}break;case 1:AkJ=A.aap(N5/453.592
,0,AnT);break;default:A.aa8("%s%s",Anc,A._GetAutoObject(C.Device).MassUnit.toFixed(
));}return AkJ;},TZ:function(L1){var A1q=L1.toFixed();var BcL=A1q.length;if((BcL>=
14)&&(BcL<=15)){var AZw=this.Av_(L1);var BuC=A._GetAutoObject(C.Converter).BdY(AZw
);A1q=(BuC+N2)+A.aar(A._GetAutoObject(C.Helper).U8(L1,0,12),12,10);}return A1q;}
,AlX:function(LY){switch(LY){case 0:return A.zW(A.abi.AOm);case 1:return A.zW(A.
abi.ABJ);case 2:return A.zW(A.abi.ABO);default:{A.aa8("%s%e",Wm,LY);return null;
}}},A19:function(Bt$){switch(Bt$){case 0:return A.zW(A.abi.Aua);case 1:return A.
zW(A.abi.ABF);case 2:return A.zW(A.abi.AOg);default:throw new Error(And);}},AfM:
function(AHt){switch(AHt){case 0:return A.zW(A.abi.Ai7);case 2:return A.zW(A.abi.
Al5);case 1:return A.zW(A.abi.AaL);case 3:switch(A._GetAutoObject(C.Device).MassUnit
){case 0:return A.zW(A.abi.Aui);case 1:return A.zW(A.abi.Auj);default:throw new Error(
Aha+A._GetAutoObject(C.Device).MassUnit.toFixed());}break;case 4:return A.zW(A.abi.
ANH);case 5:return A.zW(A.abi.ANI);case 6:return A.zW(A.abi.ANM);case 7:return A.
zW(A.abi.AM7);case 8:return A.zW(A.abi.ANc);case 9:return A.zW(A.abi.ABh);case 10:
return A.zW(A.abi.ANb);case 11:return A.zW(A.abi.ANd);default:throw new Error(Ahb+
AHt.toFixed());}},Bdi:function(Axm){switch(Axm){case 0:return A.zW(A.abi.ABM);case
3:return A.zW(A.abi.Al5);case 1:return A.zW(A.abi.AaL);case 2:return A._GetAutoObject(
A.abk.DM).A$I();default:throw new Error(Ahb+Axm.toFixed());}},BdX:function(ArZ){
switch(ArZ){case 977:return AbR;case 978:return Uc;case 980:return Ane;case 981:
return Anf;case 982:return Awj;case 983:return Awk;case 984:return Akh;case 985:
return Awl;default:return A.z2(A.abg.Unknown);}},Beg:function(Ab5){switch(Ab5){case
1:return 0x278A;case 2:return 0x278B;case 3:return 0x278C;case 4:return 0x278D;case
5:return 0x278E;case 6:return 0x278F;case 7:return 0x2790;case 8:return 0x2791;case
9:return 0x2792;case 10:return 0x2793;default:return 0x20;}},Bl8:function(L1){if(
!L1)return-1;return(L1%100000000)|0;},BeL:function(AnC,aFilter){var B;if(!aFilter
)return AeQ;var An4=Art;var Av=aFilter.AMC();while(!!Av){An4=An4+A._GetAutoObject(
C.Helper).A3Q(AnC,Av);Av=aFilter.AMG(Av);if(!!Av)An4=An4+OP;}An4=An4+Sw;return An4;
},Bf0:function(A_o){var Mz=0;switch(A_o){case 14:Mz=2;break;case 13:Mz=4;break;case
6:Mz=36;break;case 11:Mz=9;break;case 0:Mz=0;break;case 10:Mz=26;break;case 12:Mz=
12;break;case 5:Mz=14;break;case 3:Mz=15;break;case 1:Mz=10;break;case 8:Mz=16;break;
case 4:Mz=20;break;case 15:Mz=27;break;case 9:Mz=31;break;case 2:Mz=13;break;case
7:Mz=35;break;case 16:Mz=37;break;default:A.aa8("%s%e",Awm,A_o);}return Mz;},Bdh:
function(Axm){switch(Axm){case 0:return 1;case 3:return 0;case 1:return 2;case 2:
switch(A._GetAutoObject(C.Device).MassUnit){case 0:return 3;case 1:return 4;default:
throw new Error(Aha+A._GetAutoObject(C.Device).MassUnit.toFixed());}break;default:
throw new Error(Ahb+Axm.toFixed());}},Bdj:function(AnK){switch(AnK){case 0:return A.
zW(A.abi.ANE);case 1:return A.zW(A.abi.ABM);case 9:return A.zW(A.abi.ANO);case 4:
return A.zW(A.abi.AEm);case 6:return A.zW(A.abi.AqU);case 8:return A.zW(A.abi.At8
);case 2:return A.zW(A.abi.AaL);case 3:return A.zW(A.abi.Al5);case 7:return A.zW(
A.abj.K2);case 5:return A.zW(A.abj.K2);case 10:switch(A._GetAutoObject(C.Device).
MassUnit){case 0:return A.zW(A.abi.Aui);case 1:return A.zW(A.abi.Auj);default:throw new
Error(Aha+A._GetAutoObject(C.Device).MassUnit.toFixed());}break;case 11:return A.
zW(A.abj.K2);case 12:return A.zW(A.abj.K2);case 13:return A.zW(A.abj.K2);case 14:
return A.zW(A.abj.K2);case 18:return A.zW(A.abj.K2);case 15:return A.zW(A.abj.K2
);case 16:return A.zW(A.abj.K2);case 17:return A.zW(A.abj.K2);default:throw new Error(
Sx+AnK.toFixed());}},ALt:function(ArZ){switch(ArZ){case 40:return 1;case 56:return 3;
case 70:return 2;case 100:return 4;case 124:return 5;case 156:return 7;case 158:
return 36;case 191:return 17;case 196:return 8;case 203:return 9;case 208:return 11;
case 233:return 12;case 246:return 14;case 250:return 15;case 276:return 10;case
300:return 16;case 348:return 18;case 372:return 19;case 380:return 20;case 392:
return 21;case 428:return 24;case 440:return 22;case 442:return 23;case 470:return 25;
case 528:return 26;case 578:return 27;case 616:return 28;case 620:return 29;case
642:return 30;case 643:return 31;case 703:return 34;case 705:return 33;case 724:
return 13;case 752:return 32;case 756:return 6;case 792:return 35;case 804:return 37;
case 826:return 38;case 840:return 39;default:return 0;}},AeF:function(L1){var AZw=
this.Av_(L1);return this.ALt(AZw);},Av_:function(L1){return A._GetAutoObject(C.Helper
).U8(L1,12,3)|0;},A8y:function(AnH,Ee){if(AnH<A._GetAutoObject(C.Helper).ABd(Ee)
)return 1;else if(AnH<A._GetAutoObject(C.Helper).ABc(Ee))return 2;else return 3;
},AMy:function(BtR){switch(BtR){case 1:return 1;case 2:return 2;case 3:return 3;
case 4:return 4;case 5:return 5;case 6:return 6;case 7:return 7;case 8:return 8;
case 9:return 9;case 10:return 10;case 11:return 11;case 12:return 12;case 13:return 13;
case 14:return 14;case 15:return 15;case 16:return 16;default:return 0;}},ASF:function(
A1,AHg,AHh){if(AHg===AHh)return A1;if(!AHg&&(AHh===1)){var result=((A1*9)/5)+32;
return result;}if((AHg===1)&&!AHh){var result=((A1-32)*5)/9;return result;}throw new
Error(((Aru+AHg.toFixed())+Awn)+AHh.toFixed());},A3B:function(EE){switch(EE){case
0:return Awo;case 1:return A.jm;case 2:return Awp;case 3:return Ang;case 4:return A.
z2(A.abg.Contains);case 5:return Awq;default:{A.aa8("%s%e",Arv,EE);return A.jm;}
}},A2A:function(Ab3){return this.MQ.Adl(Ab3);},Bft:function(Ab3){return this.MQ.
AlJ(Ab3);},BdH:function(ArY){var Ayx=0;switch(ArY){case 0:Ayx=1;break;case 1:Ayx=
2;break;case 2:Ayx=3;break;case 3:Ayx=4;break;default:A.aa8("%s%e",KI,ArY);}return Ayx;
},Aiu:function(AXU,Ee){if(AXU>=A._GetAutoObject(C.Helper).A3M(Ee))return 3;else if(
AXU>=A._GetAutoObject(C.Helper).AtZ(Ee))return 2;else if(AXU<A._GetAutoObject(C.
Device).Zd)return 0;else return 1;},Atr:function(Mz){var BN=-1;switch(Mz){case 0:
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
throw new Error(Awr+Mz.toFixed());}return BN;},_Init:function(aArg){C.MQ._Init.call(
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
!AF){this.OnSetId(AF.CE(Ab,0));this.TG(AF.CE(Ab,1));this.Abg(AF.CE(Ab,2));this.AmF(
AF.CE(Ab,3));this.R8(AF.Hy(Ab,4));this.JM(AF.AME(Ab,7));this.Ajy(AF.Be4(Ab,6));this.
DV(AF.AlY(Ab,14));this.M6(AF.LD(Ab,22));this.M5(AF.LD(Ab,26));this.AvB(AF.IW(Ab,
13));this.Ad2(AF.HV(Ab,8));this.Avu(AF.Hy(Ab,15));this.ARd(AF.Hy(Ab,31));this.Ad6(
AF.A3Y(Ab,5));this.AQU(AF.IW(Ab,17));this.TE(AF.HV(Ab,11));this.ARc(AF.Hy(Ab,16)
);this.ARf(AF.Hy(Ab,30));this.AjG(AF.HV(Ab,9));this.Ad4(AF.HV(Ab,12));this.ARe(AF.
Hy(Ab,20));this.Avw(AF.Hy(Ab,21));this.AgF(AF.HV(Ab,10));this.Avd(AF.HV(Ab,27));
this.ADh(AF.AA9(Ab,18));this.ADN(AF.Hy(Ab,19));this.Au$(AF.AA9(Ab,23));this.Avv(
AF.Hy(Ab,24));this.AQL(AF.CE(Ab,25));this.Au2(AF.Hy(Ab,28));this.Ave(AF.CE(Ab,29
));this.Aqu(AF.HV(Ab,38));this.NP(AF.Be5(Ab,32));this.AjB(AF.Be8(Ab,33));this.AmH(
AF.LD(Ab,35));this.M7(AF.AMN(Ab,34));this.AgG(AF.HV(Ab,37));this.ADD(AF.Bfg(Ab,36
));}return Hs;},Cr:function(AF){var Hs=C.Row.Cr.call(this,AF);if(Hs&&!!AF){var Jg=
AF.Op();if(Jg<=0)A.aa8("%s",AbS);else{var Ayb=this.Al_();if(Ayb)this.CH=AF.XW();
else AF.G_(this.CH,0,this.Id);AF.G_(this.CH,1,this.VisualId);AF.G_(this.CH,2,this.
GroupId);AF.G_(this.CH,3,this.LocationId);AF.Abu(this.CH,4,this.DateOfBirth);AF.
Bk3(this.CH,7,this.Gender);AF.BkZ(this.CH,6,this.BirthType);AF.BkX(this.CH,14,this.
AnimalType);AF.TP(this.CH,22,this.TransponderId);AF.TP(this.CH,26,this.NaisId);AF.
AjZ(this.CH,13,this.WorstAssessment);AF.M_(this.CH,8,this.IsAlarm);AF.Abu(this.CH
,15,this.TimestampAlarm);AF.M_(this.CH,11,this.IsFever);AF.Abu(this.CH,16,this.TimestampExpirationFeverAlarm
);AF.M_(this.CH,9,this.IsControl);AF.M_(this.CH,12,this.IsWatch);AF.Abu(this.CH,
20,this.TimestampLastControl);AF.Abu(this.CH,21,this.TimestampLastWatch);AF.M_(this.
CH,10,this.IsRegistered);AF.M_(this.CH,27,this.IsPerished);AF.Abu(this.CH,28,this.
DateOfLastCalving);AF.G_(this.CH,29,this.LactationNumber);AF.M_(this.CH,38,this.
IsDry);AF.Bk1(this.CH,32,this.Breed);AF.Bk2(this.CH,33,this.EaseOfDelivery);AF.TP(
this.CH,35,this.NaisIdMother);AF.Bk9(this.CH,34,this.WhereAbouts);AF.M_(this.CH,
37,this.IsRegistrationNoticePending);AF.Bk7(this.CH,36,this.ReasonOfLeaving);Hs=
AF.Or(Jg);if(Ayb)this.OnSetId(AF.Aay());}}return Hs;},Gd:function(){C.Row.Gd.call(
this);this.OnSetId(-1);this.AgF(true);},G9:function(){C.Row.G9.call(this);this.OnSetId(
0);this.TG(0);this.Abg(0);this.AmF(0);this.R8(0);this.JM(A._GetAutoObject(C.Device
).Gender);this.Ajy(0);this.DV(A._GetAutoObject(C.Device).AnimalType);this.M6(0);
this.M5(0);this.AvB(0);this.Ad2(false);this.Avu(0);this.ARd(0);this.Ad6(0);this.
AQU(0);this.TE(false);this.ARf(0);this.ARc(0);this.AjG(false);this.Ad4(false);this.
ARe(0);this.Avw(0);this.AgF(false);this.Avd(false);this.ADh(0);this.ADN(0);this.
Au$(0);this.Avv(0);this.AQL(-1);this.Au2(0);this.Ave(0);this.Aqu(false);this.NP(
0);this.AjB(0);this.AmH(0);this.M7(0);this.AgG(false);this.ADD(0);},OnSetId:function(
E){if(this.Id===E)return;this.Id=E;A.aat([this,this.Qv,this.OnSetId],0);},TG:function(
E){if(this.VisualId===E)return;this.VisualId=E;A.aat([this,this.Aqa,this.TG],0);
},Abg:function(E){if(this.GroupId===E)return;this.GroupId=E;A.aat([this,this.Bhi
,this.Abg],0);},R8:function(E){if(this.DateOfBirth===E)return;this.DateOfBirth=E;
A.aat([this,this.AuE,this.R8],0);},JM:function(E){if(this.Gender===E)return;this.
Gender=E;A.aat([this,this.VJ,this.JM],0);},Ajy:function(E){if(this.BirthType===E
)return;this.BirthType=E;A.aat([this,this.AP9,this.Ajy],0);},AmF:function(E){if(
this.LocationId===E)return;this.LocationId=E;A.aat([this,this.A5G,this.AmF],0);}
,Ad6:function(E){if(this.LastTemperature===E)return;this.LastTemperature=E;A.aat([
this,this.A5F,this.Ad6],0);},Ad2:function(E){if(this.IsAlarm===E)return;this.IsAlarm=
E;A.aat([this,this.A5A,this.Ad2],0);},AjG:function(E){if(this.IsControl===E)return;
this.IsControl=E;A.aat([this,this.Bhl,this.AjG],0);},AgF:function(E){if(this.IsRegistered===
E)return;this.IsRegistered=E;A.aat([this,this.Bho,this.AgF],0);},Ad4:function(E){
if(this.IsWatch===E)return;this.IsWatch=E;A.aat([this,this.A5C,this.Ad4],0);},AvB:
function(E){if(this.WorstAssessment===E)return;this.WorstAssessment=E;A.aat([this
,this.A6b,this.AvB],0);},TE:function(E){if(this.IsFever===E)return;this.IsFever=
E;A.aat([this,this.A5B,this.TE],0);},ARe:function(E){if(this.TimestampLastControl===
E)return;this.TimestampLastControl=E;A.aat([this,this.BhO,this.ARe],0);},Avw:function(
E){if(this.TimestampLastWatch===E)return;this.TimestampLastWatch=E;A.aat([this,this.
BhQ,this.Avw],0);},AQU:function(E){if(this.LastRatingTemperature===E)return;this.
LastRatingTemperature=E;A.aat([this,this.Bhr,this.AQU],0);},ARc:function(E){if(this.
TimestampExpirationFeverAlarm===E)return;this.TimestampExpirationFeverAlarm=E;A.
aat([this,this.BhM,this.ARc],0);},Avu:function(E){if(this.TimestampAlarm===E)return;
this.TimestampAlarm=E;A.aat([this,this.BhL,this.Avu],0);},DV:function(E){if(this.
AnimalType===E)return;this.AnimalType=E;A.aat([this,this.Py,this.DV],0);},ADh:function(
E){if(this.LastBodyWeight===E)return;this.LastBodyWeight=E;A.aat([this,this.A5E,
this.ADh],0);},ADN:function(E){if(this.TimestampLastWeighing===E)return;this.TimestampLastWeighing=
E;A.aat([this,this.A5Z,this.ADN],0);},M6:function(E){if(this.TransponderId===E)return;
this.TransponderId=E;A.aat([this,this.Ajv,this.M6],0);},SX:function(){return A._GetAutoObject(
C.Helper).ME(this.DateOfBirth,A._GetAutoObject(C.Helper).DB());},Au$:function(E){
if(this.FirstBodyWeight===E)return;this.FirstBodyWeight=E;A.aat([this,this.AQd,this.
Au$],0);},Avv:function(E){if(this.TimestampFirstWeighing===E)return;this.TimestampFirstWeighing=
E;A.aat([this,this.AQv,this.Avv],0);},ApS:function(){var SI=A._NewObject(A.Core.
Bu,0);SI.Initialize(this.DateOfBirth);var AZj=A._NewObject(A.Core.Bu,0);AZj.Initialize(
this.TimestampFirstWeighing);if(((SI.Year===AZj.Year)&&(SI.Aa8()===AZj.Aa8()))&&(
this.FirstBodyWeight>0))return true;else return false;},Ag_:function(AHa){var WN;
var AoV;if(this.TimestampLastWeighing>0){AoV=this.TimestampLastWeighing;WN=this.
LastBodyWeight;}else if(this.AnimalType===1){AoV=A._GetAutoObject(C.Helper).DB();
WN=600000;}else{AoV=this.DateOfBirth;WN=A._GetAutoObject(C.Helper).Aax(this.AnimalType
);}return A._GetAutoObject(C.Helper).Ag_(WN,AoV,AHa,this.AnimalType);},AQL:function(
E){if(this.FirstBodyWeightId===E)return;this.FirstBodyWeightId=E;A.aat([this,this.
Bhg,this.AQL],0);},AmW:function(A_L){this.Ad2(A_L);if(A_L){if(!this.TimestampAlarm
)this.Avu(A._GetAutoObject(C.Helper).DB());}else this.Avu(0);},M5:function(E){if(
this.NaisId===E)return;this.NaisId=E;A.aat([this,this.Amv,this.M5],0);},AEz:function(
A_H){this.Ad4(A_H);if(A_H){if(!this.TimestampLastWatch)this.Avw(A._GetAutoObject(
C.Helper).DB());}else this.Avw(0);},Au2:function(E){if(this.DateOfLastCalving===
E)return;this.DateOfLastCalving=E;A.aat([this,this.Bg8,this.Au2],0);},Ave:function(
E){if(this.LactationNumber===E)return;this.LactationNumber=E;A.aat([this,this.Bhq
,this.Ave],0);},Avd:function(E){if(this.IsPerished===E)return;this.IsPerished=E;
A.aat([this,this.Bhn,this.Avd],0);},ARf:function(E){if(this.TimestampLastTemperature===
E)return;this.TimestampLastTemperature=E;A.aat([this,this.BhP,this.ARf],0);},ARd:
function(E){if(this.TimestampLastAssessment===E)return;this.TimestampLastAssessment=
E;A.aat([this,this.BhN,this.ARd],0);},NP:function(E){if(this.Breed===E)return;this.
Breed=E;A.aat([this,this.AuC,this.NP],0);},AjB:function(E){if(this.EaseOfDelivery===
E)return;this.EaseOfDelivery=E;A.aat([this,this.AQc,this.AjB],0);},M7:function(E
){if(this.WhereAbouts===E)return;this.WhereAbouts=E;A.aat([this,this.AuP,this.M7
],0);},AmH:function(E){if(this.NaisIdMother===E)return;this.NaisIdMother=E;A.aat([
this,this.AQk,this.AmH],0);},ADD:function(E){if(this.ReasonOfLeaving===E)return;
this.ReasonOfLeaving=E;A.aat([this,this.BhB,this.ADD],0);},AgG:function(E){if(this.
IsRegistrationNoticePending===E)return;this.IsRegistrationNoticePending=E;A.aat([
this,this.Bhp,this.AgG],0);},Aqu:function(E){if(this.IsDry===E)return;this.IsDry=
E;A.aat([this,this.Bhm,this.Aqu],0);},Qv:function(){return this.Id;},Aqa:function(
){return this.VisualId;},Bhi:function(){return this.GroupId;},AuE:function(){return this.
DateOfBirth;},VJ:function(){return this.Gender;},AP9:function(){return this.BirthType;
},A5G:function(){return this.LocationId;},A5F:function(){return this.LastTemperature;
},A5A:function(){return this.IsAlarm;},Bhl:function(){return this.IsControl;},Bho:
function(){return this.IsRegistered;},A5C:function(){return this.IsWatch;},A6b:function(
){return this.WorstAssessment;},A5B:function(){return this.IsFever;},BhO:function(
){return this.TimestampLastControl;},BhQ:function(){return this.TimestampLastWatch;
},Bhr:function(){return this.LastRatingTemperature;},BhM:function(){return this.
TimestampExpirationFeverAlarm;},BhL:function(){return this.TimestampAlarm;},Py:function(
){return this.AnimalType;},A5E:function(){return this.LastBodyWeight;},A5Z:function(
){return this.TimestampLastWeighing;},Ajv:function(){return this.TransponderId;}
,AQd:function(){return this.FirstBodyWeight;},AQv:function(){return this.TimestampFirstWeighing;
},Bhg:function(){return this.FirstBodyWeightId;},Amv:function(){return this.NaisId;
},Bg8:function(){return this.DateOfLastCalving;},Bhq:function(){return this.LactationNumber;
},Bhn:function(){return this.IsPerished;},BhP:function(){return this.TimestampLastTemperature;
},BhN:function(){return this.TimestampLastAssessment;},AuC:function(){return this.
Breed;},AQc:function(){return this.EaseOfDelivery;},AuP:function(){return this.WhereAbouts;
},AQk:function(){return this.NaisIdMother;},BhB:function(){return this.ReasonOfLeaving;
},Bhp:function(){return this.IsRegistrationNoticePending;},Bhm:function(){return this.
IsDry;},_Init:function(aArg){C.Row._Init.call(this,aArg);this.__proto__=C.Animal;
this.TableId=0;},_className:"Device::Animal"};C.Row={CH:-1,TableId:2,EK:function(
Ab,AF){if(!AF){A.aa8("%s",(Aws+this.CH.toFixed())+AFk);return false;}else if(AF.
Id!==this.TableId)throw new Error(AFl);else if((Ab<0)||(Ab>=AF.Cj())){A.aa8("%s"
,(((AFm+this.CH.toFixed())+AFn)+AF.Cj().toFixed())+Awt);return false;}this.CH=Ab;
return true;},Cr:function(AF){if(!AF){A.aa8("%s",(Aws+this.CH.toFixed())+AFk);return false;
}else if(AF.Id!==this.TableId)throw new Error(AFl);else if(this.Al_()&&AF.K8()){
A.aa8("%s",ATo+AF.Hz().toFixed());return false;}else if(!this.Al_()&&((this.CH<0
)||(this.CH>=AF.Cj()))){A.aa8("%s",(((AFm+this.CH.toFixed())+AFn)+AF.Cj().toFixed(
))+Awt);return false;}return true;},Gd:function(){this.G9();this.CH=-1;},Al_:function(
){return this.CH===-1;},G9:function(){this.CH=-2;},Apz:function(){return this.CH
!==-2;},A5N:function(){return this.CH;},A62:function(E){this.CH=E;},_Init:function(
aArg){this.__proto__=C.Row;A.hJ++;},_Done:function(){this.__proto__=null;A.hJ--;
},_ReInit:function(){},_Mark:function(D){var B;if((B=this.I)&&(B._cycle!=D))B._Mark(
B._cycle=D);},I:null,_cycle:0,_observers:null,_className:"Device::Row"};C.Rating={
Temperature:0,Id:0,AnimalId:0,Timestamp:0,BodyWeight:0,RatingTemperature:0,Faeces:
0,Respiratory:0,Appearance:0,Feed:0,EK:function(Ab,AF){var Hs=C.Row.EK.call(this
,Ab,AF);if(Hs&&!!AF){this.OnSetId(AF.CE(Ab,0));this.OnSetAnimalId(AF.CE(Ab,1));this.
OnSetTimestamp(AF.Hy(Ab,6));this.OnSetFeed(AF.IW(Ab,2));this.OnSetAppearance(AF.
IW(Ab,3));this.OnSetRespiratory(AF.IW(Ab,4));this.OnSetFaeces(AF.IW(Ab,5));this.
OnSetTemperature(AF.A3Y(Ab,7));this.OnSetBodyWeight(AF.AA9(Ab,8));this.OnSetRatingTemperature(
AF.IW(Ab,9));}return Hs;},Cr:function(AF){if(this.K&&this.K.Cr)return this.K.Cr.
apply(this,arguments);else return C.Rating.A9i.apply(this,arguments);},A9i:function(
AF){var Hs=C.Row.Cr.call(this,AF);if((Hs&&!!AF)&&(AF.Id===1)){var Jg=AF.Op();if(
Jg<=0)A.aa8("%s",AbS);else{var Ayb=this.Al_();if(Ayb)this.CH=AF.XW();else AF.G_(
this.CH,0,this.Id);AF.G_(this.CH,1,this.AnimalId);AF.Abu(this.CH,6,this.Timestamp
);AF.AjZ(this.CH,2,this.Feed);AF.AjZ(this.CH,3,this.Appearance);AF.AjZ(this.CH,4
,this.Respiratory);AF.AjZ(this.CH,5,this.Faeces);AF.A7T(this.CH,7,this.Temperature
);AF.AR9(this.CH,8,this.BodyWeight);AF.AjZ(this.CH,9,this.RatingTemperature);AF.
Or(Jg);if(Ayb)this.OnSetId(AF.Aay());var Q3=A._GetAutoObject(C.Device).Ao;var Ab=
A._GetAutoObject(C.Device).Ao.K4(0,this.AnimalId);if(Ab>=0){var B3=A._NewObject(
C.Animal,0);B3.EK(Ab,Q3);if(this.Temperature>0)B3.TE(A._GetAutoObject(C.Helper).
A4n(this));if((this.Temperature>0)&&A._GetAutoObject(C.Helper).AEg(this)){var Oa=
A._GetAutoObject(C.Helper).AOU(this);B3.AjG(Oa);B3.AmW(Oa);}else if(this.Temperature>
0){var Oa=(A._GetAutoObject(C.Helper).AOU(this)||(B3.WorstAssessment===2))||(B3.
WorstAssessment===1);B3.AjG(Oa);B3.AmW(Oa);}else{var Oa=A._GetAutoObject(C.Helper
).AOU(this)||B3.IsFever;B3.AjG(Oa);B3.AmW(Oa);}B3.Cr(Q3);}}}return Hs;},Gd:function(
){C.Row.Gd.call(this);this.OnSetTimestamp(A._GetAutoObject(C.Helper).DB());this.
OnSetId(-1);},G9:function(){C.Row.G9.call(this);this.OnSetTimestamp(0);this.OnSetId(
0);this.OnSetAnimalId(0);this.OnSetFeed(0);this.OnSetAppearance(0);this.OnSetRespiratory(
0);this.OnSetFaeces(0);this.OnSetTemperature(0);this.OnSetBodyWeight(0);this.OnSetRatingTemperature(
0);},OnSetTemperature:function(E){if(this.Temperature===E)return;this.Temperature=
E;A.aat([this,this.BhK,this.OnSetTemperature],0);},OnSetId:function(E){if(this.Id===
E)return;this.Id=E;A.aat([this,this.Qv,this.OnSetId],0);},OnSetAnimalId:function(
E){if(this.AnimalId===E)return;this.AnimalId=E;A.aat([this,this.BgX,this.OnSetAnimalId
],0);},OnSetFeed:function(E){if(this.Feed===E)return;this.Feed=E;A.aat([this,this.
Bhd,this.OnSetFeed],0);},OnSetAppearance:function(E){if(this.Appearance===E)return;
this.Appearance=E;A.aat([this,this.BgY,this.OnSetAppearance],0);},OnSetRespiratory:
function(E){if(this.Respiratory===E)return;this.Respiratory=E;A.aat([this,this.BhC
,this.OnSetRespiratory],0);},OnSetFaeces:function(E){if(this.Faeces===E)return;this.
Faeces=E;A.aat([this,this.Bhb,this.OnSetFaeces],0);},OnSetTimestamp:function(E){
if(this.Timestamp===E)return;this.Timestamp=E;A.aat([this,this.A5Y,this.OnSetTimestamp
],0);},BkY:function(Nf,A1){switch(Nf){case 2:this.OnSetAppearance(A1);break;case
1:this.OnSetFeed(A1);break;case 4:this.OnSetFaeces(A1);break;case 3:this.OnSetRespiratory(
A1);break;default:;}},Be2:function(Nf){switch(Nf){case 2:return this.Appearance;
case 1:return this.Feed;case 4:return this.Faeces;case 3:return this.Respiratory;
default:return 0;}},OnSetRatingTemperature:function(E){if(this.RatingTemperature===
E)return;this.RatingTemperature=E;A.aat([this,this.BhA,this.OnSetRatingTemperature
],0);},OnSetBodyWeight:function(E){if(this.BodyWeight===E)return;this.BodyWeight=
E;A.aat([this,this.Bg1,this.OnSetBodyWeight],0);},BhK:function(){return this.Temperature;
},Qv:function(){return this.Id;},BgX:function(){return this.AnimalId;},Bhd:function(
){return this.Feed;},BgY:function(){return this.Appearance;},BhC:function(){return this.
Respiratory;},Bhb:function(){return this.Faeces;},A5Y:function(){return this.Timestamp;
},BhA:function(){return this.RatingTemperature;},Bg1:function(){return this.BodyWeight;
},_Init:function(aArg){C.Row._Init.call(this,aArg);this.__proto__=C.Rating;this.
TableId=1;var Lj=this._variants();if(Lj){this.K={};Lj._Init.call(this,aArg);}},_Done:
function(){if(this.K)this.K._Done.call(this);this.__proto__=C.Row;C.Row._Done.call(
this);},_ReInit:function(){C.Row._ReInit.call(this);if(this.K)this.K._ReInit.call(
this);},_Mark:function(D){C.Row._Mark.call(this,D);if(this.K)this.K._Mark(D);},_variants:
function(){return A.abt.Rating._variants();},K:null,_className:"Device::Rating"};
C.HelperClass={TO:null,AgU:null,AR2:null,AR3:null,V:null,Aq:null,Kr:null,Sh:null
,Ac1:null,TT:null,TS:null,Adn:null,AeK:null,AeJ:null,AeI:null,AeL:null,AfP:null,
AES:0,Init:function(aArg){A.ow([this,this.ARy],this);},AjL:function(E){this.TO=E;
A.aat([this,this.Ap_,this.AjL],0);},ADG:function(E){this.AgU=E;A.aat([this,this.
A5O,this.ADG],0);},BwL:function(H){switch(A._GetAutoObject(C.Device).ScanState){
case 0:break;case 2:{var As4=A._GetAutoObject(C.Device).PD;if(!As4)throw new Error(
ATp);switch(As4.TransponderType){case 1:this.AjL(As4);break;case 2:this.AQ5(As4);
break;case 3:this.ADG(As4);break;case 4:this.AQ6(As4);break;case 0:break;default:
throw new Error(ATq);}}break;case 4:A._GetAutoObject(C.Device).A5(11,true,A.jm,2000
,null);break;case 3:A._GetAutoObject(C.Device).A5(12,true,A.jm,2000,null);break;
case 1:break;default:throw new Error(ATr);}},AjW:function(){this.AjL(null);this.
AQ5(null);this.ADG(null);this.AQ6(null);},ADL:function(E){if(this.K&&this.K.ADL)
return this.K.ADL.apply(this,arguments);else return C.HelperClass.A9g.apply(this
,arguments);},A9g:function(E){A.aat([this,this.Ud,this.Ue],0);A._GetAutoObject(C.
Device).SetSystemTime(E);},Ue:function(An){this.ADL(An);},DB:function(){if(this.
K&&this.K.DB)return this.K.DB.apply(this,arguments);else return C.HelperClass.A9c.
apply(this,arguments);},A9c:function(){var B;return((B=(this.Aq.A$G()|0))<0)?B+0x100000000:
B;},Ud:function(){return this.DB();},AqZ:function(){A._GetAutoObject(C.Device).Se(-
1);this.V.G9();A.vv(this.V,0);},A4A:function(L1){if(!L1){A.aa8("%s%U",ATs,L1);return false;
}var A9=A._GetAutoObject(C.Device).Ao.AiY(22,L1);return this.HY(A9);},AlZ:function(
AnC,AG$){switch(AnC){case 0:{var An3=AG$;switch(An3){case 14:return A.z2(A.abg.AeG
);case 6:return Arw;case 4:return A.z2(A.abg.AfV);case 28:return Awu;case 7:return A.
z2(A.abg.Aeq);case 2:return A.z2(A.abg.O);case 0:return A.z2(A.abg.HA);case 37:return QU;
case 8:return A.z2(A.abg.Alarm);case 9:return A.z2(A.abg.AAo);case 38:return A.z2(
A.abg.ALO);case 11:return A.z2(A.abg.Fever);case 27:return Awv;case 10:return A.
z2(A.abg.BkF);case 12:return A.z2(A.abg.AqK);case 29:return A.z2(A.abg.AO$);case
18:return A.z2(A.abg.Weighing);case 17:return ATt;case 5:return A.z2(A.abg.Temperature
);case 3:return A.z2(A.abg.Bf9);case 26:return A.z2(A.abg.Yv);case 35:return A.z2(
A.abg.Yv)+ATu;case 36:return ATv;case 15:return ATw;case 24:return AFo;case 20:return AFp;
case 30:return AeR;case 21:return Anh;case 19:return ATx;case 22:return A.z2(A.abg.
Transponder);case 1:return A.z2(A.abg.Gq);case 34:return A.z2(A.abg.I_);case 13:
return AFq;case 31:return Aki;default:{A.aa8("%s",AFr+An3.toFixed());return Aww+
An3.toFixed();}}}case 1:{var An3=AG$;switch(An3){case 1:return A.z2(A.abg.Animal
);case 3:return A.z2(A.abg.AEf);case 8:return A.z2(A.abg.Ag9);case 5:return A.z2(
A.abg.AEh);case 2:return A.z2(A.abg.Feed);case 4:return A.z2(A.abg.AEi);case 7:return A.
z2(A.abg.Temperature);case 6:return A.z2(A.abg.Bu);default:{A.aa8("%s",ATy+An3.toFixed(
));return Aww+An3.toFixed();}}}default:A.aa8("%s",(ATz+AnC.toFixed())+ATA);}return A.
jm;},A3Q:function(AnC,AL){var result=A.jm;if(!!AL){result=this.AlZ(AnC,AL.ET);result=((
result+N2)+A._GetAutoObject(C.Converter).A3B(AL.Operator))+N2;if(!!(C.Int32FilterCriterion.
isPrototypeOf(AL)?AL:null))result=result+(C.Int32FilterCriterion.isPrototypeOf(AL
)?AL:null).A4.toFixed();else if(!!(C.UInt32FilterCriterion.isPrototypeOf(AL)?AL:
null))result=result+(C.UInt32FilterCriterion.isPrototypeOf(AL)?AL:null).A4.toFixed(
);else if(!!(C.StringFilterCriterion.isPrototypeOf(AL)?AL:null))result=result+(C.
StringFilterCriterion.isPrototypeOf(AL)?AL:null).A4;else if(!!(C.BoolFilterCriterion.
isPrototypeOf(AL)?AL:null)){if((C.BoolFilterCriterion.isPrototypeOf(AL)?AL:null).
A4)result=this.AlZ(AnC,AL.ET);else result=A.jm;}else if(!!(C.GenderFilterCriterion.
isPrototypeOf(AL)?AL:null)){var Bvg=A._NewObject(C.GenderToString,0);result=result+
Bvg.Lh((C.GenderFilterCriterion.isPrototypeOf(AL)?AL:null).A4);}else if(!!(C.AnimalTypeFilterCriterion.
isPrototypeOf(AL)?AL:null)){var Buc=A._NewObject(C.AnimalTypeToString,0);result=
result+Buc.Lh((C.AnimalTypeFilterCriterion.isPrototypeOf(AL)?AL:null).A4);}else if(
!!(C.AssessmentFilterCriterion.isPrototypeOf(AL)?AL:null)){var Bue=A._NewObject(
C.AssesmentToString,0);result=result+Bue.Lh((C.AssessmentFilterCriterion.isPrototypeOf(
AL)?AL:null).A4);}else if(!!(C.UInt64FilterCriterion.isPrototypeOf(AL)?AL:null))
result=result+(C.UInt64FilterCriterion.isPrototypeOf(AL)?AL:null).A4.toFixed();else
if(!!(C.WhereAboutsFilterCriterion.isPrototypeOf(AL)?AL:null)){var Byn=A._NewObject(
C.WhereAboutsToString,0);result=result+Byn.Lh((C.WhereAboutsFilterCriterion.isPrototypeOf(
AL)?AL:null).A4);}else A.aa8("%s",ATB);}return result;},NV:function(aString,A_u,
Bts){var result=A.jm;var Bb3=false;var index=0;var Btu=A_u.length;while(!Bb3){var
A0R=aString.indexOf(A_u,index);if(A0R!==-1){result=(result+A.aaY(aString,index,A0R-
index))+Bts;index=A0R+Btu;}else{var A_y=aString.length;if(index<A_y)result=result+
A.aa4(aString,A_y-index);Bb3=true;}}return result;},AQ5:function(E){this.AR2=E;A.
aat([this,this.BhD,this.AQ5],0);},AQ6:function(E){this.AR3=E;A.aat([this,this.BhE
,this.AQ6],0);},A$6:function(){return((A._GetAutoObject(C.Device).ScanState===2)&&
!!A._GetAutoObject(C.Device).PD)&&(A._GetAutoObject(C.Device).PD.TransponderType===
1);},Afi:function(H){if(!this.V.Al_()&&!!this.V.Id)this.Bf8(this.V.Id);},AtZ:function(
Ee){return A._GetAutoObject(C.Helper).TT.Get(Ee);},A3M:function(Ee){return A._GetAutoObject(
C.Helper).TS.Get(Ee);},A3U:function(){var P=0;var min=32767;while(P<A._GetAutoObject(
C.Helper).TT.Mx){if(A._GetAutoObject(C.Helper).TT.Get(P)<min)min=A._GetAutoObject(
C.Helper).TT.Get(P);P=P+1;}return min;},ARy:function(H){A.y_([this,this.Afi],A._GetAutoObject(
C.Device).Ao,0);},AOU:function(DW){if(!DW)return false;var BfF=(((this.Ax9(DW.Faeces
)||this.Ax9(DW.Feed))||this.Ax9(DW.Appearance))||this.Ax9(DW.Respiratory))||this.
Ax9(DW.RatingTemperature);return BfF||this.A4n(DW);},Ax9:function(A9_){return(A9_===
2)||(A9_===1);},A4n:function(DW){return!!DW&&(DW.Temperature>A._GetAutoObject(C.
Helper).AtZ(A._GetAutoObject(C.Helper).V.AnimalType));},HY:function(L0){var AZV=
false;if(L0>=0){if(L0!==this.V.CH)A._GetAutoObject(C.Device).Se(L0);AZV=this.V.EK(
L0,A._GetAutoObject(C.Device).Ao);if(AZV)A.vv(this.V,0);}else{A._GetAutoObject(C.
Device).Se(-1);this.V.G9();A.vv(this.V,0);}return AZV;},Ag2:function(Ahk){var B;
return(((B=(this.Aq.A$G()|0))<0)?B+0x100000000:B)-this.Atv(Ahk);},Arc:function(){
var B;A.ow([B=this.Kr,B.Av3],this);},BxT:function(H){A._GetAutoObject(C.Device).
A5(16,false,AbT,0,null);A._GetAutoObject(C.Device).A5(5,true,A.jm,0,null);},Bj$:
function(H){var Ar=(C.PopupContext.isPrototypeOf(H)?H:null);if(!!Ar&&(Ar.PopupState===
5))this.Arc();},BjZ:function(E){if(this.AES===E)return;this.AES=E;A._GetAutoObject(
C.Device).A5(16,true,this.AES.toFixed(),0,[this,this.Bj$]);},ME:function(Bs4,BtJ
){var D2;var Bcy=A._NewObject(A.Core.Am4,0);var Gp=A._NewObject(A.Core.Bu,0);var
KV=A._NewObject(A.Core.Bu,0);Gp.Initialize(Bs4);KV.Initialize(BtJ);D2=KV.Bef(Gp);
Bcy.Initialize2(0,D2.ABz,D2.ACk,D2.AEt);if(Gp.J(Bcy).Gt===Gp.Gt)return D2.J9;else
return D2.J9+1;},BxV:function(H){A._GetAutoObject(C.Device).UpdateMeasureState(3
);if((A._GetAutoObject(C.Device).Kj>=A._GetAutoObject(C.Device).Zd)&&(A._GetAutoObject(
C.Device).Kj<=A._GetAutoObject(C.Helper).AtZ(A._GetAutoObject(C.Helper).V.AnimalType
))){var Bub=A._GetAutoObject(C.Helper).V.Id;var Bxn=A._GetAutoObject(C.Device).Ao.
K4(0,Bub);A._GetAutoObject(C.Device).Ao.M_(Bxn,9,false);A._GetAutoObject(C.Device
).Ao.Bk(A._GetAutoObject(C.Device).Ao.Filter);}},AI9:function(H){var Bdm=A._GetAutoObject(
C.Helper).AtZ(A._GetAutoObject(C.Helper).V.AnimalType);var Bdg=A._GetAutoObject(
C.Helper).A3M(A._GetAutoObject(C.Helper).V.AnimalType);var AsY=A.aaC(Bdm-100,Bdg+
100);this.A$l(AsY);},Atv:function(Ahk){return Ahk*86400;},Aka:function(Kn){var B;
if(!!Kn&&(Kn<(((B=Math.trunc(Math.pow(10,A._GetAutoObject(C.Device).Fx)))<0)?B+0x10000000000000000:
B)))return-1;return A._GetAutoObject(C.Helper).U8(Kn,A._GetAutoObject(C.Device).
Fx&0xFF,A._GetAutoObject(C.Device).FP&0xFF)|0;},AEg:function(DW){if(!DW)return false;
return((!!DW.Faeces||!!DW.Feed)||!!DW.Appearance)||!!DW.Respiratory;},Ag_:function(
AX6,A_A,AHa,Ee){var B;var AoG;if((AX6<650000)&&(A_A<this.DB())){var A_X=this.AfP.
At1(Ee);var A_W=0;if(A_X>=0)A_W=this.AeI.Get(A_X);AoG=AX6+(this.ME(A_A,this.DB()
)*A_W);if(AHa>0){var AY3=this.Ay1(AHa);AoG=(Math.trunc(((((B=AoG)<0)?B+0x10000000000000000:
B)+Math.trunc(AY3/2))/AY3)*AY3)|0;}if(AoG>650000)AoG=650000;}else AoG=AX6;return AoG;
},ABe:function(DW){var Ao2=A._GetAutoObject(C.Converter).Ac2(DW.Faeces);if(Ao2<A.
_GetAutoObject(C.Converter).Ac2(DW.Feed))Ao2=A._GetAutoObject(C.Converter).Ac2(DW.
Feed);if(Ao2<A._GetAutoObject(C.Converter).Ac2(DW.Appearance))Ao2=A._GetAutoObject(
C.Converter).Ac2(DW.Appearance);if(Ao2<A._GetAutoObject(C.Converter).Ac2(DW.Respiratory
))Ao2=A._GetAutoObject(C.Converter).Ac2(DW.Respiratory);return A._GetAutoObject(
C.Converter).A8g(Ao2);},AvR:function(DW,Ne){if(!!DW){DW.OnSetFaeces(Ne);DW.OnSetFeed(
Ne);DW.OnSetAppearance(Ne);DW.OnSetRespiratory(Ne);}},Be0:function(AF,AHf,Ab$,Wx
,AeX){if(!AF)throw new Error(Arx);var Bb=A._NewObject(C.Filter,0);var Aor=AF.Filter;
var N6=A._NewObject(C.Int32FilterCriterion,0);N6.Operator=0;N6.ET=1;N6.A4=Ab$;Bb.
C0(N6);if(Wx>0){var Oj=A._NewObject(C.UInt32FilterCriterion,0);Oj.Operator=2;Oj.
ET=6;Oj.A4=Wx;Bb.C0(Oj);}if(AeX>0){var N$=A._NewObject(C.UInt32FilterCriterion,0
);N$.Operator=3;N$.ET=6;N$.A4=AeX;Bb.C0(N$);}AF.Bk(Bb);var L2=A._NewObject(C.Int32ArrayWrapper
,0);L2.YL(6);var P;for(P=0;P<L2.Mx;P=P+1)L2.Set(P,0);var Um;for(P=0;P<AF.Cj();P=
P+1){Um=AF.IW(P,AHf);L2.Set(Um,L2.Get(Um)+1);}AF.Bk(Aor);return L2;},Y4:function(
Ahk){var B;var Gp=A._NewObject(A.Core.Bu,0);var Bcx=A._NewObject(A.Core.Am4,0);Gp.
Initialize(A._GetAutoObject(C.Converter).Ag4());Bcx.Initialize2(Ahk,0,0,0);Gp=Gp.
Blp(Bcx);return((B=(Gp.JL()|0))<0)?B+0x100000000:B;},A3N:function(AF,Ab$,AeX,Wx){
if(!AF)throw new Error(Arx);var Bb=A._NewObject(C.Filter,0);var Aor=AF.Filter;var
N6=A._NewObject(C.Int32FilterCriterion,0);N6.Operator=0;N6.ET=1;N6.A4=Ab$;Bb.C0(
N6);if(Wx>0){var Oj=A._NewObject(C.UInt32FilterCriterion,0);Oj.Operator=2;Oj.ET=
6;Oj.A4=Wx;Bb.C0(Oj);}if(AeX>0){var N$=A._NewObject(C.UInt32FilterCriterion,0);N$.
Operator=3;N$.ET=6;N$.A4=AeX;Bb.C0(N$);}AF.Bk(Bb);var L2=A._NewObject(C.Int32ArrayWrapper
,0);L2.YL(6);var P;for(P=0;P<L2.Mx;P=P+1)L2.Set(P,0);var AnR=A._NewObject(C.Rating
,0);var AYV;for(P=0;P<AF.Cj();P=P+1){AnR.EK(P,AF);if(A._GetAutoObject(C.Helper).
AEg(AnR)){AYV=A._GetAutoObject(C.Helper).ABe(AnR);L2.Set(AYV,L2.Get(AYV)+1);}}AF.
Bk(Aor);return L2;},AZr:function(AF,Ab$,BuN){if(!AF)throw new Error(Arx);var Bb=
A._NewObject(C.Filter,0);var Aor=AF.Filter;var N6=A._NewObject(C.Int32FilterCriterion
,0);N6.Operator=0;N6.ET=1;N6.A4=Ab$;Bb.C0(N6);var Wx=A._GetAutoObject(C.Converter
).Ag4()+A._GetAutoObject(C.Helper).Atv(BuN);var AeX=Wx+A._GetAutoObject(C.Helper
).Atv(1);var Oj=A._NewObject(C.UInt32FilterCriterion,0);Oj.Operator=2;Oj.ET=6;Oj.
A4=Wx;Bb.C0(Oj);var N$=A._NewObject(C.UInt32FilterCriterion,0);N$.Operator=3;N$.
ET=6;N$.A4=AeX;Bb.C0(N$);AF.Bk(Bb);var AnR=A._NewObject(C.Rating,0);var Um;var Ly=
0;var P;for(P=0;P<AF.Cj();P=P+1){AnR.EK(P,AF);if(A._GetAutoObject(C.Helper).AEg(
AnR)){Um=A._GetAutoObject(C.Helper).ABe(AnR);if(A._GetAutoObject(C.Converter).Ac2(
Um)>A._GetAutoObject(C.Converter).Ac2(Ly))Ly=Um;}}AF.Bk(Aor);return Ly;},Al9:function(
){if((A._GetAutoObject(C.Device).WeightRecordingScope===2)||(A._GetAutoObject(C.
Device).WeightRecordingScope===1))return true;else return false;},A4q:function(){
if((A._GetAutoObject(C.Device).WeightRecordingScope===2)||!A._GetAutoObject(C.Device
).WeightRecordingScope)return true;else return false;},Be1:function(AF,AHf,Ab$,Wx
,AeX){if(!AF)throw new Error(Arx);var Bb=A._NewObject(C.Filter,0);var Aor=AF.Filter;
var N6=A._NewObject(C.Int32FilterCriterion,0);N6.Operator=0;N6.ET=1;N6.A4=Ab$;Bb.
C0(N6);if(Wx>0){var Oj=A._NewObject(C.UInt32FilterCriterion,0);Oj.Operator=2;Oj.
ET=6;Oj.A4=Wx;Bb.C0(Oj);}if(AeX>0){var N$=A._NewObject(C.UInt32FilterCriterion,0
);N$.Operator=3;N$.ET=6;N$.A4=AeX;Bb.C0(N$);}AF.Bk(Bb);var L2=A._NewObject(C.Int32ArrayWrapper
,0);L2.YL(6);var P;for(P=0;P<L2.Mx;P=P+1)L2.Set(P,0);if(AF.Cj()>0){var Um=AF.IW(
0,AHf);var AoK=AF.Hy(P,6);var Ad=A._NewObject(A.Core.Bu,0);Ad.Initialize(AoK);var
Ao1=Um;var AId=A._NewObject(A.Core.Bu,0);AId.Initialize(Ad.JL());for(P=1;P<AF.Cj(
);P=P+1){Um=AF.IW(P,AHf);AoK=AF.Hy(P,6);Ad.Initialize(AoK);if((Ad.Aa8()!==AId.Aa8(
))||(Ad.Year!==AId.Year)){L2.Set(Ao1,L2.Get(Ao1)+1);AId.Initialize(Ad.JL());Ao1=
Um;}else if(!!Um&&(Um<Ao1))Ao1=Um;}L2.Set(Ao1,L2.Get(Ao1)+1);}AF.Bk(Aor);return L2;
},Ao9:function(LX){var B;var Gp=A._NewObject(A.Core.Bu,0);Gp.Initialize(LX);Gp.AmD(
0);Gp.AmG(0);Gp.AmJ(0);return((B=(Gp.JL()|0))<0)?B+0x100000000:B;},AL2:function(
LX){var B;LX=LX+86400;var Gp=A._NewObject(A.Core.Bu,0);Gp.Initialize(LX);Gp.AmD(
0);Gp.AmG(0);Gp.AmJ(0);return((B=(Gp.JL()|0))<0)?B+0x100000000:B;},Be3:function(
BxS,BuY,All,AkK){var A$g=A._GetAutoObject(C.Helper).ME(BxS,BuY);if(A$g>0)return((
AkK-All)/A$g)|0;return 0;},Bl0:function(Bs5,BtK){var Gp=A._NewObject(A.Core.Bu,0
);var KV=A._NewObject(A.Core.Bu,0);Gp.Initialize(Bs5);KV.Initialize(BtK);return(
Gp.Year===KV.Year)&&(Gp.Aa8()===KV.Aa8());},A3S:function(){var Bb=A._GetAutoObject(
C.Helper).MX();var Bah=A._NewObject(C.UInt32FilterCriterion,0);var BtT=A._GetAutoObject(
C.Helper).Y4(A._GetAutoObject(C.Device).Apu)-1;Bah.Initialize(28,2,BtT,true);Bb.
C0(Bah);var Ui=A._NewObject(C.AnimalTypeFilterCriterion,0);Ui.Initialize(14,0,1,
true);Bb.C0(Ui);if(A._GetAutoObject(C.Device).AlW){var Aym=A._NewObject(C.UInt32FilterCriterion
,0);var AZQ=A._GetAutoObject(C.Helper).DB()-21600;Aym.Initialize(30,3,AZQ,true);
Bb.C0(Aym);}return Bb;},BkI:function(){var Jg=A._GetAutoObject(C.Device).Ao.Op();
if(Jg<=0)A.aa8("%s",AbS);else{A._GetAutoObject(C.Device).Ao.G9();A._GetAutoObject(
C.Device).Ao.Or(Jg);}Jg=A._GetAutoObject(C.Device).AfH.Op();if(Jg<=0)A.aa8("%s",
AbS);else{A._GetAutoObject(C.Device).AfH.G9();A._GetAutoObject(C.Device).AfH.Or(
Jg);}Jg=A._GetAutoObject(C.Device).Bq.Op();if(Jg<=0)A.aa8("%s",AbS);else{A._GetAutoObject(
C.Device).Bq.G9();A._GetAutoObject(C.Device).Bq.Or(Jg);}Jg=A._GetAutoObject(C.Device
).Pa.Op();if(Jg<=0)A.aa8("%s",AbS);else{A._GetAutoObject(C.Device).Pa.G9();A._GetAutoObject(
C.Device).Pa.Or(Jg);}},Bf8:function(Ab$){var A9=A._GetAutoObject(C.Device).Ao.K4(
0,Ab$);return this.HY(A9);},AOZ:function(L1){var AhG=A._GetAutoObject(C.Device).
Ao.Af4(22,L1);return AhG;},AMH:function(){var Bb=A._GetAutoObject(C.Helper).MX();
var Aih=A._NewObject(C.UInt64FilterCriterion,0);Aih.Initialize(22,0,0,true);Bb.C0(
Aih);return Bb;},AMB:function(AnK,BuV,SA){var Zx=-1;switch(AnK){case 2:Zx=30;break;
case 3:Zx=31;break;case 10:Zx=19;break;default:A.aa8("%s%e",Sx,AnK);}if(Zx<0)return null;
var Acm=A._NewObject(C.UInt32FilterCriterion,0);Acm.Initialize(Zx,3,A._GetAutoObject(
C.Helper).DB()-BuV,SA);return Acm;},BkH:function(aFilter){var AL=aFilter.D0(30,3
);if(!!AL)aFilter.QD(AL);AL=aFilter.D0(31,3);if(!!AL)aFilter.QD(AL);AL=aFilter.D0(
19,3);if(!!AL)aFilter.QD(AL);},AYM:function(Ae6,Axb,AF){if(AF.K8())return 5;if(Ae6.
VisualId<=0)switch(Axb){case 0:if(!Ae6.NaisId)return 1;break;case 1:if(!Ae6.TransponderId
)return 1;break;case 3:case 2:case 5:case 4:return 1;default:throw new Error(AFs+
Axb.toFixed());}if((!Ae6.NaisId&&!Ae6.TransponderId)&&A._GetAutoObject(C.Device).
Ao.AiV(1,Ae6.VisualId))return 2;if(!!Ae6.NaisId&&A._GetAutoObject(C.Helper).AOX(
Ae6.NaisId))return 3;if(!!Ae6.TransponderId&&A._GetAutoObject(C.Helper).AOZ(Ae6.
TransponderId))return 4;return 0;},Ao5:function(Eu){Eu.DV(A._GetAutoObject(C.Device
).AnimalType);Eu.NP(A._GetAutoObject(C.Device).Breed);Eu.R8(A._GetAutoObject(C.Helper
).DB()-A._GetAutoObject(C.Helper).Atv(A._GetAutoObject(C.Device).Ait));Eu.JM(A._GetAutoObject(
C.Device).Gender);Eu.M7(A._GetAutoObject(C.Device).WhereAbouts);},AKg:function(QZ
,Eu){var GE=0;switch(QZ){case 0:GE=A._GetAutoObject(C.Helper).Aka(Eu.NaisId);break;
case 1:GE=A._GetAutoObject(C.Helper).Aka(Eu.TransponderId);break;case 3:GE=A._GetAutoObject(
C.Device).ApF;break;case 2:GE=A._GetAutoObject(C.Device).ApG;break;case 4:case 5:
GE=A._GetAutoObject(C.Device).Ai6;break;default:throw new Error(AFt+QZ.toFixed()
);}return GE;},A8n:function(Akp,LY,BsR,A_c,Btn){var B;var PY=null;var WJ=null;switch(
Akp){case 0:{PY=[B=A._GetAutoObject(C.Device),B.AQj,B.AXs];WJ=[B=A._GetAutoObject(
C.Device),B.AuN,B.Aw8];}break;case 1:switch(LY){case 1:{PY=[B=A._GetAutoObject(C.
Device),B.A5J,B.A9K];WJ=[B=A._GetAutoObject(C.Device),B.AuL,B.Aw6];}break;case 0:{
PY=[B=A._GetAutoObject(C.Device),B.A5K,B.A9L];WJ=[B=A._GetAutoObject(C.Device),B.
AuM,B.Aw7];}break;case 2:{PY=[B=A._GetAutoObject(C.Device),B.AQj,B.AXs];WJ=[B=A.
_GetAutoObject(C.Device),B.AuN,B.Aw8];}break;default:throw new Error(Awx+LY.toFixed(
));}break;default:throw new Error(AFu+Akp.toFixed());}if(!!PY&&!!WJ){PY[2].call(
PY[0],BsR);if((WJ[1].call(WJ[0])>0)&&(A_c<Btn))PY[2].call(PY[0],PY[1].call(PY[0]
)+WJ[1].call(WJ[0]));else if((WJ[1].call(WJ[0])<0)&&(A_c>0))PY[2].call(PY[0],PY[
1].call(PY[0])+WJ[1].call(WJ[0]));return PY[1].call(PY[0]);}return 0;},ASY:function(
Eu,Akp,BsY){if(!Eu||(BsY===true))return;switch(Akp){case 0:Eu.M5(A._GetAutoObject(
C.Device).Auy);break;case 1:switch(Eu.Gender){case 0:Eu.M5(A._GetAutoObject(C.Device
).ACn);break;case 1:Eu.M5(A._GetAutoObject(C.Device).ACm);break;case 2:Eu.M5(A._GetAutoObject(
C.Device).Auy);break;default:throw new Error(Awx+Eu.Gender.toFixed());}break;default:
throw new Error(AFu+Akp.toFixed());}},BfG:function(QZ,Eu){var result=false;switch(
QZ){case 0:result=!!Eu.NaisId;break;case 1:result=!!Eu.TransponderId;break;case 3:
case 2:case 4:case 5:result=false;break;default:throw new Error(AFt+QZ.toFixed()
);}return result;},AIq:function(Eu,A99,Axb,Ar8,Ae0){switch(A99){case 2:if(Ar8<=0
)A._GetAutoObject(C.Device).A5(21,true,Eu.VisualId.toFixed(),0,Ae0);else A._GetAutoObject(
C.Device).A5(48,true,(Eu.VisualId.toFixed()+Awy)+Ar8.toFixed(),0,Ae0);break;case
3:if(Ar8<=0)A._GetAutoObject(C.Device).A5(21,true,A._GetAutoObject(C.Converter).
TZ(Eu.NaisId),0,Ae0);else A._GetAutoObject(C.Device).A5(48,true,(A._GetAutoObject(
C.Converter).TZ(Eu.NaisId)+Awy)+Ar8.toFixed(),0,Ae0);break;case 4:if(Ar8<=0)A._GetAutoObject(
C.Device).A5(25,true,A._GetAutoObject(C.Converter).TZ(Eu.TransponderId),0,Ae0);else
A._GetAutoObject(C.Device).A5(47,true,(A._GetAutoObject(C.Converter).TZ(Eu.TransponderId
)+Awy)+Ar8.toFixed(),0,Ae0);break;case 1:switch(Axb){case 1:A._GetAutoObject(C.Device
).A5(42,true,A.jm,0,Ae0);break;case 0:A._GetAutoObject(C.Device).A5(43,true,A.jm
,0,Ae0);break;case 3:case 2:case 5:case 4:A._GetAutoObject(C.Device).A5(22,true,
A.jm,0,Ae0);break;default:throw new Error(AFs+Axb.toFixed());}break;case 5:A._GetAutoObject(
C.Device).A5(41,true,A._GetAutoObject(C.Device).Ao.Hz().toFixed(),0,Ae0);break;case
0:break;default:throw new Error(ATC+A99.toFixed());}},A$K:function(A_j,LY){var B;
var Ayq=null;switch(A_j){case 0:Ayq=[B=A._GetAutoObject(C.Device),B.AuN,B.Aw8];break;
case 1:switch(LY){case 1:Ayq=[B=A._GetAutoObject(C.Device),B.AuL,B.Aw6];break;case
0:Ayq=[B=A._GetAutoObject(C.Device),B.AuM,B.Aw7];break;case 2:Ayq=[B=A._GetAutoObject(
C.Device),B.AuN,B.Aw8];break;default:throw new Error(Awx+LY.toFixed());}break;default:
throw new Error(ATD+A_j.toFixed());}return Ayq;},A32:function(PO,BtA){var ZV=A._NewObject(
A.Core.Bu,0);ZV.Initialize(PO);var AzH=ZV.Year;var A9=A._GetAutoObject(C.Device).
Pa.K4(0,AzH);var Ul=A._NewObject(C.CalfDeregistrations,0);if(A9<0){if(A._GetAutoObject(
C.Device).Pa.K8())A._GetAutoObject(C.Device).A5(51,true,A._GetAutoObject(C.Device
).Pa.Hz().toFixed(),0,null);else{Ul.Gd();Ul.AjN(AzH);}}else Ul.EK(A9,A._GetAutoObject(
C.Device).Pa);Ul.Au4(Ul.Deregistrations+1);if(BtA)Ul.Au3(Ul.Deaths+1);Ul.Cr(A._GetAutoObject(
C.Device).Pa);},AKe:function(Ly,AkU,AkL){var AIN=0;if((AkU&&(AkL===1))||(Ly===1)
)AIN=1;else if((AkU&&(AkL===2))||(Ly===2))AIN=2;else if(!!Ly&&(Ly!==5))AIN=Ly;return AIN;
},A$l:function(BtS){var B;if(A._GetAutoObject(C.Device).MeasureState===1){this.Sh.
Cv=A._GetAutoObject(C.Device).Zd;this.Sh.B0=BtS;this.Sh.AEN(this);}},AA5:function(
){var Bb=this.AMA();var A$8=A._NewObject(C.BoolFilterCriterion,0);A$8.Initialize(
38,0,true,true);Bb.C0(A$8);return Bb;},A3L:function(JU){var Bb=A._GetAutoObject(
C.Helper).MX();if(A._GetAutoObject(C.Device).Alv){var AZu=A._GetAutoObject(C.Helper
).AMB(JU,21600,true);Bb.C0(AZu);}return Bb;},A3W:function(){var Bb=A._GetAutoObject(
C.Helper).MX();var Baw=A._NewObject(C.UInt64FilterCriterion,0);Baw.Initialize(26
,0,0,true);Bb.C0(Baw);return Bb;},A3Z:function(){var B;var Bb=A._GetAutoObject(C.
Helper).MX();var Ayw=(C.WhereAboutsFilterCriterion.isPrototypeOf(B=Bb.D0(34,3))?
B:null);if(!!Ayw)Bb.QD(Ayw);var BbL=A._NewObject(C.BoolFilterCriterion,0);BbL.Initialize(
37,0,true,true);Bb.C0(BbL);return Bb;},U8:function(A1,Btt,AX7){var B;A1=Math.trunc(
A1/this.Ay1(Btt));A1%=this.Ay1(AX7);return A1;},Ay1:function(A_k){switch(A_k){case
0:return 1;case 1:return 10;case 2:return 100;case 3:return 1000;case 4:return 10000;
case 5:return 100000;case 6:return 1000000;case 7:return 10000000;case 8:return 100000000;
case 9:return 1000000000;case 10:return 10000000000;case 11:return 100000000000;
case 12:return 1000000000000;case 13:return 10000000000000;case 14:return 100000000000000;
case 15:return 1000000000000000;default:throw new Error(ATE+A_k.toFixed());}},MX:
function(){var Bb=A._NewObject(C.Filter,0);var Bb7=A._NewObject(C.BoolFilterCriterion
,0);Bb7.Initialize(10,0,true,true);Bb.C0(Bb7);var Ayw=A._NewObject(C.WhereAboutsFilterCriterion
,0);Ayw.Initialize(34,3,6,true);Bb.C0(Ayw);return Bb;},ApR:function(aFilter){return!
this.AA8(aFilter);},AA8:function(aFilter){var Jw=0;var Av=aFilter.AMC();while(!!
Av){if(Av.AaQ===false)Jw++;Av=aFilter.AMG(Av);}return Jw;},AMA:function(){var Bb=
this.MX();var Ui=A._NewObject(C.AnimalTypeFilterCriterion,0);Ui.Initialize(14,0,
1,true);Bb.C0(Ui);return Bb;},ABb:function(){var B;var A1h;var N8=this.Bfh();A1h=(((
B=A._GetAutoObject(C.Converter).Atr(N8))<0)?B+0x10000000000000000:B)*this.Ay1(12
);if((N8===10)&&(A._GetAutoObject(C.Device).YO>0)){var Bvh=A._GetAutoObject(C.Helper
).U8(A._GetAutoObject(C.Device).YO,10,2)*this.Ay1(8);A1h+=Bvh;}return A1h;},Bfh:
function(){var N8=0;if(A._GetAutoObject(C.Device).YO>0)N8=A._GetAutoObject(C.Converter
).AeF(A._GetAutoObject(C.Device).YO);if(!N8)N8=A._GetAutoObject(C.Converter).Bf0(
A._GetAutoObject(C.Device).Language);return N8;},AOX:function(Ww){var AhG=A._GetAutoObject(
C.Device).Ao.Af4(26,Ww);return AhG;},Ajc:function(Ae1){switch(Ae1){case 0:case 1:
case 2:case 3:case 4:case 5:return false;case 6:case 7:case 8:case 9:case 10:return true;
default:throw new Error(ATF+Ae1.toFixed());}},Bde:function(QZ,Eu){var GE=0;switch(
QZ){case 1:GE=A._GetAutoObject(C.Helper).Aka(Eu.TransponderId);break;case 0:if(!
A._GetAutoObject(C.Device).EartagNrAssignmentMode)GE=A._GetAutoObject(C.Device).
Ai6;else switch(Eu.Gender){case 0:GE=A._GetAutoObject(C.Device).ApG;break;case 1:
GE=A._GetAutoObject(C.Device).ApF;break;case 2:GE=A._GetAutoObject(C.Device).Ai6;
break;default:throw new Error(AFv+Eu.Gender.toFixed());}break;default:throw new Error(
ATG+QZ.toFixed());}return GE;},BeP:function(){var B;var Ax7=(((((((A.z2(A.abg.AgX
)+A.z2(A.abg.Colon))+OQ)+A._GetAutoObject(C.Device).AgX)+Awz)+A.z2(A.abg.Bkp))+A.
z2(A.abg.Colon))+OQ)+A._GetAutoObject(A.abk.K1).BeN(((B=A._GetAutoObject(C.Device
).Qs.Timestamp)<0)?B+0x100000000:B);return Ax7;},BeQ:function(){var B;var Ax7=((((((((((((((((((((((((((((
ATH+A._GetAutoObject(C.Device).Rt.ACb.toFixed())+Li)+A._GetAutoObject(C.Device).
Rt.ACj.toFixed())+Li)+A._GetAutoObject(C.Device).Rt.AEp.toFixed())+OP)+A._GetAutoObject(
C.Device).Rt.AAw)+OP)+A._GetAutoObject(A.abk.K1).AiZ(((B=A._GetAutoObject(C.Device
).Rt.Timestamp)<0)?B+0x100000000:B))+OQ)+ATI)+A._GetAutoObject(C.Device).R3.ACb.
toFixed())+Li)+A._GetAutoObject(C.Device).R3.ACj.toFixed())+Li)+A._GetAutoObject(
C.Device).R3.AEp.toFixed())+OP)+A._GetAutoObject(C.Device).R3.AAw)+OP)+A._GetAutoObject(
A.abk.K1).AiZ(((B=A._GetAutoObject(C.Device).R3.Timestamp)<0)?B+0x100000000:B))+
OQ)+ATJ)+A._GetAutoObject(C.Helper).Bfk())+OP)+A._GetAutoObject(C.Device).GetCommitHash(
))+OP)+A._GetAutoObject(C.Device).GetCommitCount().toFixed())+OP)+A._GetAutoObject(
A.abk.K1).AiZ(A._GetAutoObject(C.Device).GetCommitEpoch());return Ax7;},BeO:function(
){var B;var Ax7=(((((((((((((((((((((ATK+A._GetAutoObject(C.Device).Qs.APk.toFixed(
))+Li)+A._GetAutoObject(C.Device).Qs.APl.toFixed())+Li)+A._GetAutoObject(C.Device
).Qs.APj.toFixed())+OQ)+A.z2(A.abg.A3E))+A.z2(A.abg.Colon))+N2)+A._GetAutoObject(
A.abk.K1).AiZ(((B=A._GetAutoObject(C.Device).Qs.Timestamp)<0)?B+0x100000000:B))+
Awz)+ATL)+A._GetAutoObject(C.Device).Sj.ASR.toFixed())+Li)+A._GetAutoObject(C.Device
).Sj.ASS.toFixed())+Li)+A._GetAutoObject(C.Device).Sj.ASQ.toFixed())+OQ)+A.z2(A.
abg.A3E))+A.z2(A.abg.Colon))+N2)+A._GetAutoObject(A.abk.K1).AiZ(((B=A._GetAutoObject(
C.Device).Sj.Timestamp)<0)?B+0x100000000:B);return Ax7;},A3X:function(AX7){var B;
var P;var Ay6=A.jm;for(P=1;P<=AX7;P=P+1)if(!!A.aaC(0,2))Ay6=Ay6+String.fromCharCode(
A.aaC(97,104)&0xFFFF);else Ay6=Ay6+String.fromCharCode(A.aaC(48,57)&0xFFFF);return Ay6;
},Aax:function(Ee){var Axr=0;if(Ee===1)Ee=0;var A_2=this.AfP.At1(Ee);if(A_2>=0)Axr=
this.AeL.Get(A_2);return Axr;},ABd:function(Ee){var FK=0;var AzE=this.AfP.At1(Ee
);if(AzE>=0)FK=this.AeK.Get(AzE);return FK;},ABc:function(Ee){var FK=0;var AzE=this.
AfP.At1(Ee);if(AzE>=0)FK=this.AeJ.Get(AzE);return FK;},A3P:function(){var Bb=this.
MX();var Ui=A._NewObject(C.AnimalTypeFilterCriterion,0);Ui.Initialize(14,0,A._GetAutoObject(
C.Device).AAP,true);Bb.C0(Ui);return Bb;},AO0:function(Kn){var BN=Math.trunc(Kn/
1000000000000)|0;if(!BN)return 0;else if(BN>=900)return 1;else if(!A._GetAutoObject(
C.Converter).ALt(BN))return 2;else return 3;},A31:function(){var Bb=A._GetAutoObject(
C.Helper).AMH();var Aks=A._GetAutoObject(C.Helper).BeZ(3,A._GetAutoObject(C.Device
).ACe);Aks.AaQ=true;Bb.C0(Aks);return Bb;},BeZ:function(EE,A98){var Av=A._NewObject(
C.UInt32FilterCriterion,0);Av.ET=4;switch(EE){case 2:{Av.Operator=3;Av.A4=A._GetAutoObject(
C.Helper).Y4(A98);}break;case 3:{Av.Operator=2;Av.A4=A._GetAutoObject(C.Helper).
Y4(A98-1);}break;default:A.aa8("%s%e",ATM,EE);}return Av;},Bfk:function(){return(((
A._GetAutoObject(C.Device).GetVersionMajor().toFixed()+Li)+A._GetAutoObject(C.Device
).GetVersionMinor().toFixed())+Li)+A._GetAutoObject(C.Device).GetVersionRev().toFixed(
);},Bdf:function(QZ,Eu){var GE=0;switch(QZ){case 0:GE=Eu.VisualId;break;case 2:GE=
A._GetAutoObject(C.Helper).Aka(Eu.TransponderId);break;case 1:if(!A._GetAutoObject(
C.Device).EartagNrAssignmentMode)GE=A._GetAutoObject(C.Device).Ai6;else switch(Eu.
Gender){case 0:GE=A._GetAutoObject(C.Device).ApG;break;case 1:GE=A._GetAutoObject(
C.Device).ApF;break;case 2:GE=A._GetAutoObject(C.Device).Ai6;break;default:throw new
Error(AFv+Eu.Gender.toFixed());}break;default:throw new Error(ATN+QZ.toFixed());
}return GE;},A8o:function(){var B;var IP=null;var SJ=0;if(!A._GetAutoObject(C.Device
).EartagNrAssignmentMode){IP=[B=A._GetAutoObject(C.Device),B.Amu,B.Anu];SJ=A._GetAutoObject(
C.Device).AtA;}else switch(A._GetAutoObject(C.Helper).V.Gender){case 1:{IP=[B=A.
_GetAutoObject(C.Device),B.AuI,B.Aw4];SJ=A._GetAutoObject(C.Device).AAH;}break;case
0:{IP=[B=A._GetAutoObject(C.Device),B.AuJ,B.Aw5];SJ=A._GetAutoObject(C.Device).AAI;
}break;case 2:{IP=[B=A._GetAutoObject(C.Device),B.Amu,B.Anu];SJ=A._GetAutoObject(
C.Device).AtA;}break;default:;}if(!!IP)switch(SJ){case 1:IP[2].call(IP[0],A._GetAutoObject(
C.Helper).V.VisualId-1);break;case 0:IP[2].call(IP[0],A._GetAutoObject(C.Helper).
V.VisualId+1);break;default:;}},A4r:function(Ww,Eu){return(Eu.NaisId!==Ww)&&this.
AOX(Ww);},BfP:function(L1,Eu){return(Eu.TransponderId!==L1)&&this.AOZ(L1);},AMz:
function(){var Bb=A._GetAutoObject(C.Helper).A3Z();var Ayo=A._NewObject(C.UInt64FilterCriterion
,0);Ayo.Initialize(35,5,0,true);Bb.C0(Ayo);return Bb;},AMJ:function(){var Bb=A._GetAutoObject(
C.Helper).A3Z();var Ayo=A._NewObject(C.UInt64FilterCriterion,0);Ayo.Initialize(35
,0,0,true);Bb.C0(Ayo);return Bb;},Mw:function(AXY,Ahj){AXY.Ai(Ahj);AXY.Ap(Ahj);AXY.
X(Ahj);},A2Q:function(Ahl){var B;var Z;var AZ7=false;var WE=Ahl.U9(null,0x1);while(
!!WE&&(((B=WE)?B.__proto__:null)!==A.Core.Y)){Z=(A.kh.Ck.isPrototypeOf(WE)?WE:null
);if(!!Z){Z.Be(AZ7);AZ7=!AZ7;}WE=Ahl.U9(WE,0x1);}},Ap_:function(){return this.TO;
},A5O:function(){return this.AgU;},BhD:function(){return this.AR2;},BhE:function(
){return this.AR3;},BhI:function(){return this.AES;},_Init:function(aArg){C.AlQ.
_Init.call(this,aArg);C.Animal._Init.call(this.V={I:this},0);A.Core.Bu._Init.call(
this.Aq={I:this},0);A.abm.F_._Init.call(this.Kr={I:this},0);A.abm.F_._Init.call(
this.Sh={I:this},0);C.AKA._Init.call(this.Ac1={I:this},0);C.ASH._Init.call(this.
TT={I:this},0);C.ASG._Init.call(this.TS={I:this},0);C.UT._Init.call(this.Adn={I:
this},0);C.ATg._Init.call(this.AeK={I:this},0);C.ATf._Init.call(this.AeJ={I:this
},0);C.ATe._Init.call(this.AeI={I:this},0);C.ATi._Init.call(this.AeL={I:this},0);
C.AKB._Init.call(this.AfP={I:this},0);this.__proto__=C.HelperClass;var B;this.Kr.
IF(1);this.Kr.Fz(3000);this.Kr.B0=100;this.Sh.Au9(10);this.Sh.VN(5);this.Sh.IF(1
);this.Sh.Fz(4000);this.Adn.B0=false;this.Adn.Cv=true;this.Adn.IF(1);this.Adn.Fz(
100);this.Kr.R5=[this,this.BxT];this.Kr.Q=[this,this.BhI,this.BjZ];this.Sh.R5=[this
,this.BxV];this.Sh.Q=[B=A._GetAutoObject(C.Device),B.ACJ,B.AGU];this.Adn.Q=[B=A.
_GetAutoObject(C.Device),B.ACK,B.AGV];this.Init(aArg);var Lj=this._variants();if(
Lj){this.K={};Lj._Init.call(this,aArg);}},_Done:function(){if(this.K)this.K._Done.
call(this);this.__proto__=C.AlQ;this.V._Done();this.Aq._Done();this.Kr._Done();this.
Sh._Done();this.Ac1._Done();this.TT._Done();this.TS._Done();this.Adn._Done();this.
AeK._Done();this.AeJ._Done();this.AeI._Done();this.AeL._Done();this.AfP._Done();
C.AlQ._Done.call(this);},_ReInit:function(){C.AlQ._ReInit.call(this);this.V._ReInit(
);this.Aq._ReInit();this.Kr._ReInit();this.Sh._ReInit();this.Ac1._ReInit();this.
TT._ReInit();this.TS._ReInit();this.Adn._ReInit();this.AeK._ReInit();this.AeJ._ReInit(
);this.AeI._ReInit();this.AeL._ReInit();this.AfP._ReInit();if(this.K)this.K._ReInit.
call(this);},_Mark:function(D){var B;C.AlQ._Mark.call(this,D);if((B=this.TO)&&(B.
_cycle!=D))B._Mark(B._cycle=D);if((B=this.AgU)&&(B._cycle!=D))B._Mark(B._cycle=D
);if((B=this.AR2)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.AR3)&&(B._cycle!=
D))B._Mark(B._cycle=D);if((B=this.V)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Aq
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Kr)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Sh)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ac1)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.TT)._cycle!=D)B._Mark(B._cycle=D);if((B=this.TS)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Adn)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AeK)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.AeJ)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
AeI)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AeL)._cycle!=D)B._Mark(B._cycle=D);
if((B=this.AfP)._cycle!=D)B._Mark(B._cycle=D);if(this.K)this.K._Mark(D);},_variants:
function(){return A.abt.HelperClass._variants();},K:null,_className:"Device::HelperClass"
};C.Helper={_Init:function(){C.HelperClass._Init.call(this,0);},_variants:function(
){return this;},_this:null};C.BoolFilterCriterion={A4:false,Adj:function(){var Av=
A._NewObject(C.BoolFilterCriterion,0);Av.Gs(this);return Av;},Gs:function(AL){C.
FilterCriterion.Gs.call(this,AL);var Av=(C.BoolFilterCriterion.isPrototypeOf(AL)?
AL:null);if(!!Av)this.A4=Av.A4;},Initialize:function(AX,EE,A1,SA){this.ET=AX;this.
Operator=EE;this.A4=A1;this.AaQ=SA;return this;},_Init:function(aArg){C.FilterCriterion.
_Init.call(this,aArg);this.__proto__=C.BoolFilterCriterion;},_className:"Device::BoolFilterCriterion"
};C.UInt32FilterCriterion={A4:0,Adj:function(){var Av=A._NewObject(C.UInt32FilterCriterion
,0);Av.Gs(this);return Av;},Gs:function(AL){C.FilterCriterion.Gs.call(this,AL);var
Av=(C.UInt32FilterCriterion.isPrototypeOf(AL)?AL:null);if(!!Av)this.A4=Av.A4;},Initialize:
function(AX,EE,A1,SA){this.ET=AX;this.Operator=EE;this.A4=A1;this.AaQ=SA;return this;
},_Init:function(aArg){C.FilterCriterion._Init.call(this,aArg);this.__proto__=C.
UInt32FilterCriterion;},_className:"Device::UInt32FilterCriterion"};C.OverlayMenu={
None:0,Home:1,AutoAction:2,MenuItemSettings:3,RatingSettings:4,WeighingSettings:
5,Options:6,AnimalSearch:7,ActionSettings:8,MeasurementReady:9,AnimalMultiInfoMenu:
10,AnimalSearchUnfiltered:11,AnimalSearchDriedOff:12,MassRecordingMenu:13,MassRecordingDefaults:
14,MassRecordingFields:15,PurchasedAnimalsListMenu:16,BirthRegistrationsListMenu:
17,LAST:18};C.EnumToString={BZ:function(A6){throw new Error(Ary+A6.toFixed());},
Lh:function(A6){return this.BZ(A6);},_Init:function(aArg){this.__proto__=C.EnumToString;
A.hJ++;},_Done:function(){this.__proto__=null;A.hJ--;},_ReInit:function(){},_Mark:
function(D){var B;if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:
0,_observers:null,_className:"Device::EnumToString"};C.ScreenTypeToString={BZ:function(
A6){var AH4=A6;var Bt;switch(AH4){case 3:Bt=A.z2(A.abg.At7);break;case 34:Bt=A.z2(
A.abg.O7);break;case 35:Bt=A.z2(A.abg.UI);break;case 47:Bt=A.z2(A.abg.AMx);break;
default:Bt=this.Bl1(A6);}return Bt;},Bl1:function(A6){var AH4=A6;var Bt=A.jm;switch(
AH4){case 0:Bt=AwA;break;case 2:Bt=AFw;break;case 4:Bt=ATO;break;case 40:Bt=AFx;
break;case 39:Bt=ATP;break;case 72:Bt=ATQ;break;case 73:Bt=ATR;break;case 93:Bt=
ATS;break;case 94:Bt=AFy;break;case 74:Bt=ATT;break;case 3:Bt=AwB;break;case 6:Bt=
AFz;break;case 16:Bt=AFA;break;case 22:Bt=ATU;break;case 46:Bt=AFB;break;case 100:
Bt=ATV;break;case 99:Bt=ATW;break;case 101:Bt=QV;break;case 17:Bt=Wn;break;case 23:
Bt=ATX;break;case 18:Bt=ATY;break;case 19:Bt=ATZ;break;case 38:Bt=AT0;break;case
87:Bt=AT1;break;case 1:Bt=AT2;break;case 5:Bt=AT3;break;case 7:Bt=Ahc;break;case
92:Bt=AFC;break;case 8:Bt=AT4;break;case 9:Bt=AT5;break;case 41:Bt=AFD;break;case
42:Bt=AFE;break;case 24:Bt=AwC;break;case 10:Bt=QW;break;case 68:Bt=AT6;break;case
21:Bt=AT7;break;case 11:Bt=AT8;break;case 29:Bt=Arz;break;case 54:Bt=AT9;break;case
30:Bt=AT_;break;case 12:Bt=AT$;break;case 13:Bt=AUa;break;case 14:Bt=AUb;break;case
15:Bt=AUc;break;case 78:Bt=ArA;break;case 79:Bt=AUd;break;case 20:Bt=AUe;break;case
37:Bt=AUf;break;case 43:Bt=AUg;break;case 44:Bt=AUh;break;case 45:Bt=AUi;break;case
25:Bt=AUj;break;case 75:Bt=AUk;break;case 67:Bt=AUl;break;case 66:Bt=AUm;break;case
64:Bt=AFF;break;case 65:Bt=ArB;break;case 77:Bt=AUn;break;case 76:Bt=AUo;break;case
95:Bt=AUp;break;case 88:Bt=AwD;break;case 26:Bt=Akj;break;case 28:Bt=AeS;break;case
27:Bt=ArC;break;case 31:Bt=Akk;break;case 89:Bt=Ahd;break;case 34:Bt=AUq;break;case
35:Bt=ArD;break;case 32:Bt=AFG;break;case 50:Bt=AeT;break;case 55:Bt=AFH;break;case
63:Bt=Wo;break;case 62:Bt=Akl;break;case 33:Bt=Ani;break;case 36:Bt=AUr;break;case
56:Bt=AUs;break;case 86:Bt=AUt;break;case 57:Bt=AUu;break;case 47:Bt=AUv;break;case
49:Bt=ArE;break;case 48:Bt=AFI;break;case 69:Bt=AFJ;break;case 71:Bt=AUw;break;case
70:Bt=AUx;break;case 51:Bt=AUy;break;case 53:Bt=AUz;break;case 52:Bt=AUA;break;case
96:Bt=AUB;break;case 98:Bt=AFK;break;case 97:Bt=AUC;break;case 80:Bt=AwE;break;case
82:Bt=AFL;break;case 81:Bt=AFM;break;case 85:Bt=AFN;break;case 84:Bt=AFO;break;case
83:Bt=AFP;break;case 58:Bt=AFQ;break;case 60:Bt=AUD;break;case 59:Bt=AUE;break;case
61:Bt=AUF;break;case 90:Bt=AUG;break;case 91:Bt=AUH;break;case 102:Bt=AUI;break;
case 103:Bt=AUJ;break;default:throw new Error(AwF+AH4.toFixed());}return Bt;},_Init:
function(aArg){C.EnumToString._Init.call(this,aArg);this.__proto__=C.ScreenTypeToString;
},_className:"Device::ScreenTypeToString"};C.OverlayMenuToString={BZ:function(A6
){var BbH=A6;var Oe=A.jm;switch(BbH){case 0:Oe=AFR;break;case 1:Oe=AwB;break;case
8:Oe=AUK;break;case 2:Oe=AFS;break;case 3:Oe=Akm;break;case 4:Oe=Zo;break;case 5:
Oe=AUL;break;case 6:Oe=AeU;break;case 7:Oe=AUM;break;case 11:Oe=AUN;break;case 12:
Oe=ArF;break;case 9:Oe=AeV;break;case 10:Oe=Anj;break;case 14:Oe=AFT;break;case 15:
Oe=AUO;break;case 13:Oe=OR;break;case 16:Oe=AUP;break;case 17:Oe=AUQ;break;default:
throw new Error(AUR+BbH.toFixed());}return Oe;},_Init:function(aArg){C.EnumToString.
_Init.call(this,aArg);this.__proto__=C.OverlayMenuToString;},_className:"Device::OverlayMenuToString"
};C.ScanStateToString={BZ:function(A6){var Bcd=A6;var Bp=A.jm;switch(Bcd){case 4:
Bp=AwG;break;case 0:Bp=ArG;break;case 2:Bp=AFU;break;case 3:Bp=AUS;break;case 1:
Bp=AFV;break;default:throw new Error(AFW+Bcd.toFixed());}return Bp;},_Init:function(
aArg){C.EnumToString._Init.call(this,aArg);this.__proto__=C.ScanStateToString;},
_className:"Device::ScanStateToString"};C.MeasureStateToString={BZ:function(A6){
var Baq=A6;var Bp=A.jm;switch(Baq){case 4:Bp=AwG;break;case 0:Bp=ArG;break;case 2:
Bp=AUT;break;case 1:Bp=AFV;break;case 3:Bp=AFX;break;default:throw new Error(AUU+
Baq.toFixed());}return Bp;},_Init:function(aArg){C.EnumToString._Init.call(this,
aArg);this.__proto__=C.MeasureStateToString;},_className:"Device::MeasureStateToString"
};C.TemperatureUnit={Celsius:0,Fahrenheit:1,LAST:2};C.TemperatureUnitToString={BZ:
function(A6){var BcC=A6;var AoW=A.jm;switch(BcC){case 0:AoW=A.z2(A.abg.Bmg);break;
case 1:AoW=A.z2(A.abg.Bmh);break;default:throw new Error(AUV+BcC.toFixed());}return AoW;
},_Init:function(aArg){C.EnumToString._Init.call(this,aArg);this.__proto__=C.TemperatureUnitToString;
},_className:"Device::TemperatureUnitToString"};C.AnimalType={DairyCalf:0,DairyCow:
1,SheepLamb:2,LAST:3};C.AnimalTypeToString={BZ:function(A6){var Bct=A6;var type=
A.jm;switch(Bct){case 0:type=A.z2(A.abg.BdM);break;case 1:type=A.z2(A.abg.BdZ);break;
case 2:type=A.z2(A.abg.BfX);break;default:throw new Error(AUW+Bct.toFixed());}return type;
},_Init:function(aArg){C.EnumToString._Init.call(this,aArg);this.__proto__=C.AnimalTypeToString;
},_className:"Device::AnimalTypeToString"};C.Language={Default:0,German:1,Spanish:
2,French:3,Italian:4,Finnish:5,Chinese_TW:6,Turkish:7,Greek:8,Russian:9,Dutch:10
,Czech:11,Estonian:12,Bulgarian:13,Bosnian:14,Norwegian:15,Ukrainian:16,LAST:17};
C.LanguageToString={BZ:function(A6){var Ayh=A6;var OX=A.jm;switch(Ayh){case 0:OX=
AFY;break;case 10:OX=AUX;break;case 1:OX=AFZ;break;case 12:OX=AF0;break;case 5:OX=
AwH;break;case 3:OX=AUY;break;case 8:OX=AUZ;break;case 13:OX=AU0;break;case 4:OX=
AU1;break;case 9:OX=AU2;break;case 2:OX=AU3;break;case 7:OX=AU4;break;case 6:OX=
AU5;break;case 11:OX=ArH;break;case 14:OX=Ank;break;case 15:OX=AF1;break;case 16:
OX=AU6;break;default:throw new Error(AF2+Ayh.toFixed());}return OX;},Lh:function(
A6){var Ayh=A6;var Dk=A.jm;switch(Ayh){case 0:Dk=AbQ;break;case 10:Dk=Wj;break;case
1:Dk=QT;break;case 12:Dk=We;break;case 5:Dk=Ua;break;case 3:Dk=Wf;break;case 8:Dk=
Wg;break;case 13:Dk=Wb;break;case 4:Dk=Ub;break;case 9:Dk=Sv;break;case 2:Dk=Zn;
break;case 7:Dk=AeO;break;case 6:Dk=Wc;break;case 11:Dk=St;break;case 14:Dk=Wa;break;
case 15:Dk=Su;break;case 16:Dk=JT;break;default:throw new Error(AF2+Ayh.toFixed(
));}return Dk;},_Init:function(aArg){C.EnumToString._Init.call(this,aArg);this.__proto__=
C.LanguageToString;},_className:"Device::LanguageToString"};C.Gender={Male:0,Female:
1,Unknown:2,LAST:3};C.BirthType={Single:0,Twins:1,Triplets:2,Quadruplets:3,LAST:
4};C.GenderToString={BZ:function(A6){var Aso=A6;var AIk=A.jm;switch(Aso){case 0:
AIk=A.z2(A.abg.Male);break;case 1:AIk=A.z2(A.abg.Female);break;case 2:AIk=A.z2(A.
abg.Unknown);break;default:throw new Error(AU7+Aso.toFixed());}return AIk;},_Init:
function(aArg){C.EnumToString._Init.call(this,aArg);this.__proto__=C.GenderToString;
},_className:"Device::GenderToString"};C.BirthTypeToString={BZ:function(A6){var type=
A6;var Ae9=A.jm;switch(type){case 0:Ae9=A.z2(A.abg.Blg);break;case 1:Ae9=A.z2(A.
abg.Bmc);break;case 2:Ae9=A.z2(A.abg.Triplets);break;case 3:Ae9=A.z2(A.abg.Quadruplets
);break;default:throw new Error(AU8+type.toFixed());}return Ae9;},_Init:function(
aArg){C.EnumToString._Init.call(this,aArg);this.__proto__=C.BirthTypeToString;},
_className:"Device::BirthTypeToString"};C.SyncState={Idle:0,Init:1,Exporting:2,ImportStart:
3,Importing:4,ImportFinish:5,Ready:6,Error:7,LAST:8};C.SyncStateToString={BZ:function(
A6){var Bcw=A6;var Bp=A.jm;switch(Bcw){case 7:Bp=AwG;break;case 0:Bp=ArG;break;case
6:Bp=AFX;break;case 2:Bp=AU9;break;case 5:Bp=AU_;break;case 3:Bp=AU$;break;case 4:
Bp=AVa;break;case 1:Bp=AVb;break;default:throw new Error(AVc+Bcw.toFixed());}return Bp;
},_Init:function(aArg){C.EnumToString._Init.call(this,aArg);this.__proto__=C.SyncStateToString;
},_className:"Device::SyncStateToString"};C.RatedAttributeToString={BZ:function(
A6){var Ay7=A6;switch(Ay7){case 0:return A.jm;case 1:return A.z2(A.abg.Bky);case
4:return A.z2(A.abg.Bkx);case 3:return A.z2(A.abg.Bkz);case 2:return A.z2(A.abg.
Bkw);default:throw new Error(AF3+Ay7.toFixed());}},Lh:function(A6){var Ay7=A6;switch(
Ay7){case 0:return A.jm;case 1:return A.z2(A.abg.Feed);case 4:return A.z2(A.abg.
AEh);case 3:return A.z2(A.abg.AEi);case 2:return A.z2(A.abg.AEf);default:throw new
Error(AF3+Ay7.toFixed());}},_Init:function(aArg){C.EnumToString._Init.call(this,
aArg);this.__proto__=C.RatedAttributeToString;},_className:"Device::RatedAttributeToString"
};C.AssesmentToString={BZ:function(A6){var Akz=A6;var Axy=A.jm;switch(Akz){case 0:
case 5:Axy=A.jm;break;case 3:Axy=A.z2(A.abk.Blm);break;case 2:Axy=A.z2(A.abk.Blo
);break;case 1:Axy=A.z2(A.abk.Bln);break;default:throw new Error(AVd+Akz.toFixed(
));}return Axy;},_Init:function(aArg){C.EnumToString._Init.call(this,aArg);this.
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
9};C.PopupContext={AD6:null,AjP:A.jm,Aj_:0,PopupState:1,Id:0,Show:false,BjL:function(
E){var B;if(this.PopupState===E)return;this.PopupState=E;if(!!this.AD6)(B=this.AD6
)?B[1].call(B[0],this):null;},_Init:function(aArg){this.__proto__=C.PopupContext;
A.hJ++;},_Done:function(){this.__proto__=null;A.hJ--;},_ReInit:function(){},_Mark:
function(D){var B;if((B=this.AD6)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((
B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:
"Device::PopupContext"};C.Boolean={No:0,Yes:1,LAST:2};C.BooleanToYesNo={BZ:function(
A6){switch(A6){case 0:return A.z2(A.abg.No);case 1:return A.z2(A.abg.Yes);default:
return AwI+A6.toFixed();}},_Init:function(aArg){C.EnumToString._Init.call(this,aArg
);this.__proto__=C.BooleanToYesNo;},_className:"Device::BooleanToYesNo"};C.AnimalGroupTableFields={
Id:0,GroupName:1};C.AnimalGroup={GroupName:AbT,Id:0,EK:function(Ab,AF){var Hs=C.
Row.EK.call(this,Ab,AF);if(Hs&&!!AF){this.OnSetId(AF.CE(Ab,0));this.ADb(AF.Va(Ab
,1));}return Hs;},Cr:function(AF){var Hs=C.Row.Cr.call(this,AF);if(Hs&&!!AF){var
Jg=AF.Op();if(Jg<=0)A.aa8("%s",AbS);else{if(this.Al_())this.CH=AF.XW();AF.G_(this.
CH,0,this.Id);AF.YX(this.CH,1,this.GroupName);AF.Or(Jg);}}return Hs;},Gd:function(
){C.Row.Gd.call(this);this.OnSetId(-1);},G9:function(){C.Row.G9.call(this);this.
OnSetId(0);this.ADb(A.jm);},OnSetId:function(E){if(this.Id===E)return;this.Id=E;
A.aat([this,this.Qv,this.OnSetId],0);},ADb:function(E){if(this.GroupName===E)return;
this.GroupName=E;A.aat([this,this.Bhj,this.ADb],0);},Qv:function(){return this.Id;
},Bhj:function(){return this.GroupName;},_Init:function(aArg){C.Row._Init.call(this
,aArg);this.__proto__=C.AnimalGroup;this.TableId=3;},_className:"Device::AnimalGroup"
};C.PopupIdToString={BZ:function(A6){var AcE=A6;var Az=A.jm;var AH2;AH2=A.z2(A.abg.
Bmz)+OQ;switch(AcE){case 0:Az=A.z2(A.abg.Unknown);break;case 1:Az=A.z2(A.abg.SevereError
);break;case 58:Az=A.z2(A.abg.BeC);break;case 2:Az=A.z2(A.abg.BeA);break;case 3:
Az=A.z2(A.abg.Bml);break;case 77:Az=A._GetAutoObject(C.Helper).BeQ();break;case 78:
Az=A._GetAutoObject(C.Helper).BeO();break;case 79:Az=A._GetAutoObject(C.Helper).
BeP();break;case 9:Az=A.z2(A.abg.BmJ);break;case 5:Az=A.z2(A.abg.SuccessDataSync
);break;case 8:Az=A.z2(A.abg.SuccessResetFactorySettings);break;case 34:Az=A.z2(
A.abg.SuccessResetAnimalData);break;case 10:Az=A._GetAutoObject(C.Device).AA$();
break;case 82:Az=A.z2(A.abg.BeE);break;case 83:Az=A.z2(A.abg.BeF);break;case 80:
Az=A.z2(A.abg.Blx);break;case 81:Az=A.z2(A.abg.SuccessRestoreBackup);break;case 92:
Az=A.z2(A.abg.BdC);break;case 93:Az=A.z2(A.abg.BkK);break;case 4:Az=A.z2(A.abg.WarningDataSync
);break;case 7:Az=A.z2(A.abg.BmG);break;case 33:Az=A.z2(A.abg.WarningResetAnimalData
);break;case 6:Az=A.z2(A.abg.WarningRestart);break;case 27:Az=A.z2(A.abg.WarningNoActionDefined
);break;case 64:Az=A.z2(A.abg.WarningActionNotApplicable);break;case 28:Az=A.z2(
A.abg.WarningNoMenuItemVisible);break;case 29:Az=A.z2(A.abg.WarningEnterPresentationMode
);break;case 30:Az=A.z2(A.abg.WarningNoAnimalsRegistered);break;case 41:Az=((AH2+
A.z2(A.abg.APs))+OQ)+A.z2(A.abg.Bgd);break;case 50:Az=((AH2+A.z2(A.abg.APs))+OQ)+
A.z2(A.abg.Bgf);break;case 51:Az=((AH2+A.z2(A.abg.APs))+OQ)+A.z2(A.abg.Bge);break;
case 42:Az=A.z2(A.abg.BmI);break;case 91:Az=A.z2(A.abg.WarningScanOverwriteNaisId
);break;case 45:Az=A.z2(A.abg.BmD);break;case 46:Az=A.z2(A.abg.WarningNoValidCountryCode
);break;case 57:Az=A.z2(A.abg.WarningOutdatedAnimalWeight);break;case 52:Az=A.z2(
A.abg.WarningOutdatedAnimalWeights);break;case 53:Az=A.z2(A.abg.WarningWeightEvaluationSingular
);break;case 56:Az=A.z2(A.abg.WarningWeightEvaluationPlural);break;case 11:Az=A.
z2(A.abg.ScanError);break;case 12:Az=A.z2(A.abg.ScanNotFound);break;case 13:Az=A.
z2(A.abg.Bdn);break;case 36:Az=A.z2(A.abg.Bl9);break;case 14:Az=A.z2(A.abg.AnimalNotFound
);break;case 15:Az=A.z2(A.abg.SuccessUnregister);break;case 35:Az=A.z2(A.abg.SuccessUnregisterPerished
);break;case 26:Az=A.z2(A.abg.SuccessCreationNewAnimal);break;case 23:Az=A.z2(A.
abg.SuccessCreationNewAnimals);break;case 24:Az=A.z2(A.abg.Bd2);break;case 49:Az=
A.z2(A.abg.EvaluationInProgress);break;case 16:Az=A.z2(A.abg.Bd8);break;case 17:
Az=A.z2(A.abg.Blq);break;case 18:Az=A.z2(A.abg.BlC);break;case 19:Az=A.z2(A.abg.
Blr);break;case 20:Az=A.z2(A.abg.BlD);break;case 54:Az=A.z2(A.abg.Bly);break;case
55:Az=A.z2(A.abg.BlB);break;case 21:Az=A.z2(A.abg.A16);break;case 48:Az=(A.z2(A.
abg.A16)+OQ)+A.z2(A.abg.A2S);break;case 22:Az=A.z2(A.abg.Bgk);break;case 63:Az=A.
z2(A.abg.BmE);break;case 85:Az=A.z2(A.abg.BmF);break;case 43:Az=A.z2(A.abg.Bgl);
break;case 25:Az=A.z2(A.abg.A8d);break;case 47:Az=(A.z2(A.abg.A8d)+OQ)+A.z2(A.abg.
A2S);break;case 31:{var BvG=(((((((((((((((((((A.z2(A.abg.BdT)+Awz)+A.z2(A.abg.ALo
))+A.z2(A.abg.Colon))+N2)+A.z2(A.abg.BdV))+OQ)+A.z2(A.abg.AMm))+A.z2(A.abg.Colon
))+N2)+A.z2(A.abg.BeK))+OQ)+A.z2(A.abg.ARN))+A.z2(A.abg.Colon))+N2)+A.z2(A.abg.BkB
))+OQ)+A.z2(A.abg.ARM))+A.z2(A.abg.Colon))+N2)+A.z2(A.abg.BkA);Az=BvG;}break;case
32:Az=A.z2(A.abg.Bl_);break;case 69:Az=A.z2(A.abg.Bgs);break;case 44:Az=A.z2(A.abg.
BmH);break;case 37:Az=A.z2(A.abg.WarningResetWeightSettings);break;case 38:Az=A.
z2(A.abg.WarningResetTempThresholds);break;case 39:Az=A.z2(A.abg.Bkr);break;case
76:Az=(A.z2(A.abg.A2t)+OQ)+A.z2(A.abg.ARP);break;case 40:Az=A.z2(A.abg.Blz);break;
case 75:Az=A.z2(A.abg.Bls);break;case 59:Az=A.z2(A.abg.QuestionAddAnotherCalfMultiples
);break;case 62:Az=A.z2(A.abg.Blt);break;case 97:Az=A.z2(A.abg.Blu);break;case 60:
Az=A.z2(A.abg.Blv);break;case 99:Az=A.z2(A.abg.Blw);break;case 61:Az=A.z2(A.abg.
BlE);break;case 65:Az=A.z2(A.abg.SuccessClearAnimalLoss);break;case 66:Az=A.z2(A.
abg.WarningNoActionsForAnimalLoss);break;case 67:Az=A.z2(A.abg.SuccessLinkTransponder
);break;case 86:Az=A.z2(A.abg.SuccessUnlinkTransponder);break;case 68:Az=A.z2(A.
abg.BlA);break;case 70:Az=A.z2(A.abg.BeG);break;case 71:Az=A.z2(A.abg.BlH);break;
case 72:Az=A.z2(A.abg.BlI);break;case 98:Az=A.z2(A.abg.BeI);break;case 101:Az=A.
z2(A.abg.BlJ);break;case 100:Az=A.z2(A.abg.BlK);break;case 88:Az=A.z2(A.abg.BeH);
break;case 89:Az=A.z2(A.abg.BlF);break;case 90:Az=A.z2(A.abg.BlG);break;case 73:
Az=A.z2(A.abg.WarningNoPremisesID);break;case 74:Az=A.z2(A.abg.WarningNoFlashDrivePresent
);break;case 95:Az=A.z2(A.abg.WarningNoBackupPathPresent);break;case 94:Az=A.z2(
A.abg.WarningNoBackupFilePresent);break;case 84:Az=A.z2(A.abg.BeX);break;case 87:
Az=A.z2(A.abg.BmL);break;case 96:Az=A.z2(A.abg.BmC);break;case 103:Az=A.z2(A.abg.
WarningParsedDateInFutureInvalid);break;case 102:Az=A.z2(A.abg.WarningParsingDateFailed
);break;case 104:Az=A.z2(A.abg.WarningParsingNaisIdFailed);break;default:throw new
Error(AF4+AcE.toFixed());}return Az;},Lh:function(A6){var AcE=A6;var Az=A.jm;switch(
AcE){case 0:Az=AVe;break;case 1:Az=AVf;break;case 58:Az=AVg;break;case 2:Az=AVh;
break;case 3:Az=ArI;break;case 77:Az=AF5;break;case 78:Az=AF6;break;case 79:Az=AF7;
break;case 9:Az=AF8;break;case 5:Az=AF9;break;case 8:Az=AwJ;break;case 34:Az=AF_;
break;case 80:Az=AVi;break;case 81:Az=AVj;break;case 92:Az=AVk;break;case 93:Az=
AF$;break;case 82:Az=AVl;break;case 83:Az=AVm;break;case 10:Az=AVn;break;case 4:
Az=AVo;break;case 7:Az=AVp;break;case 33:Az=AVq;break;case 6:Az=AVr;break;case 27:
Az=AVs;break;case 64:Az=AwK;break;case 28:Az=AVt;break;case 29:Az=AVu;break;case
30:Az=AwL;break;case 41:Az=ArJ;break;case 50:Az=Zp;break;case 51:Az=ArK;break;case
42:Az=AVv;break;case 91:Az=AVw;break;case 45:Az=AVx;break;case 46:Az=AGa;break;case
57:Az=AVy;break;case 52:Az=AGb;break;case 53:Az=AVz;break;case 56:Az=AVA;break;case
11:Az=AVB;break;case 12:Az=ArL;break;case 13:Az=AVC;break;case 36:Az=AVD;break;case
14:Az=AGc;break;case 15:Az=AVE;break;case 35:Az=AVF;break;case 26:Az=AVG;break;case
23:Az=AVH;break;case 24:Az=AbU;break;case 49:Az=AVI;break;case 16:Az=AVJ;break;case
17:Az=AVK;break;case 18:Az=AVL;break;case 19:Az=AGd;break;case 20:Az=AVM;break;case
54:Az=AVN;break;case 55:Az=AVO;break;case 21:Az=AVP;break;case 48:Az=AVQ;break;case
22:Az=AVR;break;case 63:Az=AGe;break;case 43:Az=AVS;break;case 85:Az=AVT;break;case
25:Az=AVU;break;case 47:Az=AGf;break;case 31:Az=AGg;break;case 32:Az=AVV;break;case
69:Az=AVW;break;case 44:Az=AVX;break;case 37:Az=AVY;break;case 38:Az=QX;break;case
39:Az=ArM;break;case 76:Az=AGh;break;case 40:Az=AGi;break;case 75:Az=Anl;break;case
59:Az=Anm;break;case 62:Az=AwM;break;case 97:Az=AVZ;break;case 60:Az=AGj;break;case
99:Az=AV0;break;case 65:Az=AV1;break;case 61:Az=AV2;break;case 66:Az=AV3;break;case
67:Az=AV4;break;case 86:Az=AV5;break;case 68:Az=AV6;break;case 70:Az=AV7;break;case
71:Az=AV8;break;case 72:Az=AV9;break;case 98:Az=AV_;break;case 101:Az=AV$;break;
case 100:Az=AWa;break;case 88:Az=AWb;break;case 89:Az=AWc;break;case 90:Az=AWd;break;
case 73:Az=AWe;break;case 74:Az=Ann;break;case 95:Az=AGk;break;case 94:Az=AWf;break;
case 84:Az=AGl;break;case 87:Az=AGm;break;case 96:Az=Zq;break;case 103:Az=AGn;break;
case 102:Az=AWg;break;case 104:Az=AGo;break;default:throw new Error(AF4+AcE.toFixed(
));}return Az;},_Init:function(aArg){C.EnumToString._Init.call(this,aArg);this.__proto__=
C.PopupIdToString;},_className:"Device::PopupIdToString"};C.PopupParamSeparator=
";";C.RatingMode={Basic:0,Extended:1,LAST:2};C.TransponderType={UNDEFINED:0,AnimalId:
1,FarmId:2,GroupId:3,PersonId:4,LAST:5};C.TransponderProtocol={UNDEFINED:0,FDX:1
,HDX:2,HDX_URBAN:3,LAST:4};C.TransponderTypeToString={BZ:function(A6){var BcN=A6;
var type=A.jm;switch(BcN){case 1:type=AWh;break;case 2:type=AwN;break;case 3:type=
AWi;break;case 4:type=AWj;break;case 0:type=AwA;break;default:throw new Error(AwO+
BcN.toFixed());}return type;},_Init:function(aArg){C.EnumToString._Init.call(this
,aArg);this.__proto__=C.TransponderTypeToString;},_className:"Device::TransponderTypeToString"
};C.TransponderProtocolToString={BZ:function(A6){var BcM=A6;var Ay4=A.jm;switch(
BcM){case 1:Ay4=AWk;break;case 2:Ay4=AWl;break;case 3:Ay4=AWm;break;case 0:Ay4=AwA;
break;default:throw new Error(AGp+BcM.toFixed());}return Ay4;},_Init:function(aArg
){C.EnumToString._Init.call(this,aArg);this.__proto__=C.TransponderProtocolToString;
},_className:"Device::TransponderProtocolToString"};C.Transponder={Id:0,TransponderProtocol:
0,TransponderType:0,ARj:function(E){if(this.TransponderType===E)return;this.TransponderType=
E;A.aat([this,this.BhU,this.ARj],0);},ARi:function(E){if(this.TransponderProtocol===
E)return;this.TransponderProtocol=E;A.aat([this,this.BhT,this.ARi],0);},OnSetId:
function(E){if(this.Id===E)return;this.Id=E;A.aat([this,this.Qv,this.OnSetId],0);
},AML:function(){return A._GetAutoObject(C.Converter).Bl8(this.Id);},Be6:function(
){return A._GetAutoObject(C.Converter).Av_(this.Id);},BhU:function(){return this.
TransponderType;},BhT:function(){return this.TransponderProtocol;},Qv:function(){
return this.Id;},_Init:function(aArg){this.__proto__=C.Transponder;A.hJ++;},_Done:
function(){this.__proto__=null;A.hJ--;},_ReInit:function(){},_Mark:function(D){var
B;if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:
null,_className:"Device::Transponder"};C.RatingModeToString={BZ:function(A6){var
Uu=A6;var Nm=A.jm;switch(Uu){case 0:Nm=A.z2(A.abg.Basic);break;case 1:Nm=A.z2(A.
abg.Extended);break;default:throw new Error(Ano+Uu.toFixed());}return Nm;},_Init:
function(aArg){C.EnumToString._Init.call(this,aArg);this.__proto__=C.RatingModeToString;
},_className:"Device::RatingModeToString"};C.TableRowsCount={_Init:function(aArg
){this.__proto__=C.TableRowsCount;A.hJ++;},_Done:function(){this.__proto__=null;
A.hJ--;},_ReInit:function(){},_Mark:function(D){var B;if((B=this.I)&&(B._cycle!=
D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:"Device::TableRowsCount"
};C.MassUnit={Kilogramm:0,Pound:1,LAST:2};C.MassUnitToString={BZ:function(A6){var
Ban=A6;var AoW=A.jm;switch(Ban){case 0:AoW=A.z2(A.abg.BfV);break;case 1:AoW=A.z2(
A.abg.Pound);break;default:throw new Error(AGq+Ban.toFixed());}return AoW;},_Init:
function(aArg){C.EnumToString._Init.call(this,aArg);this.__proto__=C.MassUnitToString;
},_className:"Device::MassUnitToString"};C.MinWeightGain=20;C.MaxWeightGain=2000;
C.WeightGainStep=10;C.Int32ArrayWrapper={Mx:10,Array:A.aan(10,0,null),YL:function(
E){if(this.Mx===E)return;if(E>10)throw new Error(AWn);this.Mx=E;},Set:function(aIndex
,AI){if((aIndex<0)||(aIndex>=this.Mx))throw new Error(AwP);this.Array.Set(aIndex
,AI);},Get:function(aIndex){if((aIndex<0)||(aIndex>=this.Mx))throw new Error(AwP
);return this.Array.Get(aIndex);},Al0:function(){var HR=0;var P;for(P=0;P<this.Mx;
P=P+1)HR=HR+this.Get(P);return HR;},toString:function(){var AZ5=this.Array.Get(0
).toFixed();var P;for(P=1;P<this.Mx;P=P+1)AZ5=(AZ5+OP)+this.Array.Get(P).toFixed(
);return AZ5;},EK:function(aString){var IM=aString.indexOf(String.fromCharCode(0x2C
),0);var AYU=A.jm;var P=0;while(P<10){if(aString===A.jm)this.Array.Set(P,0);else{
if(IM===-1){AYU=aString;aString=A.jm;}else{AYU=A.aaX(aString,IM);aString=A.aa3(aString
,0,IM+1);}this.Array.Set(P,A.vQ(AYU,0,10));IM=aString.indexOf(String.fromCharCode(
0x2C),0);}P=P+1;}if(aString!==A.jm)A.aa8("%s",AGr);},Cr:function(){},G9:function(
){var P;for(P=0;P<this.Mx;P=P+1)this.Set(P,0);},At1:function(A1){var P=0;while(P<
this.Mx){if(this.Array.Get(P)===A1)return P;P=P+1;}return-1;},Hh:function(){var P=
0;var max=-1;while(P<this.Mx){if(this.Array.Get(P)>max)max=this.Array.Get(P);P=P+
1;}return max;},_Init:function(aArg){(this.Array=[]).__proto__=C.Int32ArrayWrapper.
Array;this.__proto__=C.Int32ArrayWrapper;A.hJ++;},_Done:function(){this.__proto__=
null;A.hJ--;},_ReInit:function(){},_Mark:function(D){var B;if((B=this.I)&&(B._cycle
!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:"Device::Int32ArrayWrapper"
};C.ActionToString={BZ:function(A6){var AxU=A6;var EL=A.jm;switch(AxU){case 4:EL=
A.z2(A.abg.Alarm);break;case 256:EL=A.z2(A.abg.Weighing);break;case 128:EL=A.z2(
A.abg.A3q);break;case 16:EL=A.z2(A.abg.AKh);break;case 1:EL=A.z2(A.abg.Temperature
);break;case 32:EL=A.z2(A.abg.AnimalLoss);break;case 2:EL=A.z2(A.abg.Rating);break;
case 8:EL=A.z2(A.abg.AqK);break;case 64:EL=A.z2(A.abg.Unregister);break;case 512:
EL=A.z2(A.abg.APM);break;case 1024:EL=A.z2(A.abg.LinkTransponder);break;case 262144:
EL=A.z2(A.abg.UnlinkTransponder);break;case 2048:EL=A.z2(A.abg.O7);break;case 4096:
EL=A.z2(A.abg.Calving);break;case 8192:EL=A.z2(A.abg.DryOff);break;case 16384:EL=
A.z2(A.abg.A4x);break;case 32768:EL=A.z2(A.abg.AAi);break;case 524288:EL=A.z2(A.
abg.AAk);break;case 65536:EL=A.z2(A.abg.Delete);break;case 131072:EL=A.z2(A.abg.
A4y);break;case 0:EL=A.z2(A.abg.A4V);break;default:throw new Error(Ahe+AxU.toFixed(
));}return EL;},Lh:function(A6){var AxU=A6;var EL=A.jm;switch(AxU){case 4:EL=A.z2(
A.abg.Alarm);break;case 256:EL=A.z2(A.abg.Weighing);break;case 128:EL=A.z2(A.abg.
A3q);break;case 16:EL=A.z2(A.abg.AKh);break;case 1:EL=A.z2(A.abg.Temperature);break;
case 32:EL=A.z2(A.abg.AnimalLoss);break;case 2:EL=A.z2(A.abg.Rating);break;case 8:
EL=A.z2(A.abg.AqK);break;case 64:EL=A.z2(A.abg.Unregister);break;case 512:EL=A.z2(
A.abg.APM);break;case 1024:EL=A.z2(A.abg.LinkTransponder);break;case 262144:EL=A.
z2(A.abg.UnlinkTransponder);break;case 2048:EL=A.z2(A.abg.O7);break;case 4096:EL=
A.z2(A.abg.Calving);break;case 8192:EL=A.z2(A.abg.DryOff);break;case 16384:EL=A.
z2(A.abg.A4w);break;case 32768:EL=A.z2(A.abg.AAi);break;case 524288:EL=A.z2(A.abg.
AAk);break;case 65536:EL=A.z2(A.abg.Delete);break;case 131072:EL=A.z2(A.abg.A4w);
break;case 0:EL=A.z2(A.abg.A4V);break;default:throw new Error(Ahe+AxU.toFixed());
}return EL;},_Init:function(aArg){C.EnumToString._Init.call(this,aArg);this.__proto__=
C.ActionToString;},_className:"Device::ActionToString"};C.ACTIONS_COUNT=19;C.PopupTimeout=
2000;C.ITable={Filter:null,Id:2,CE:function(Ab,AX){return 0;},Va:function(Ab,AX){
return A.jm;},Aju:function(H){A.vv(this,0);A.ow([this,this.Eo],this);},HV:function(
Ab,AX){return false;},Hy:function(Ab,AX){return this.RQ(Ab,AX);},OnSetId:function(
E){if(this.Id===E)return;this.Id=E;},Cj:function(){return 0;},Bk:function(E){if(
this.Filter===E)return;this.Filter=E;A.aat([this,this.Fy,this.FC],0);},FC:function(
An){this.Bk(An);},IW:function(Ab,AX){var Bxa=this.Vb(Ab,AX);return A._GetAutoObject(
C.Converter).A8g(Bxa);},Vb:function(Ab,AX){return 0;},RQ:function(Ab,AX){return 0;
},A3Y:function(Ab,AX){return this.CE(Ab,AX);},Op:function(){var Jg=0;var BxU=this.
Id;return Jg;},Or:function(AnF){var Hs=0;var BxU=this.Id;return Hs===1;},XW:function(
){return-1;},YZ:function(Ab,AX,CX){return false;},G_:function(Ab,AX,CX){return false;
},YY:function(Ab,AX,CX){return false;},M_:function(Ab,AX,CX){return false;},YX:function(
Ab,AX,CX){return false;},Abu:function(Ab,AX,CX){return this.YY(Ab,AX,CX);},AjZ:function(
Ab,AX,CX){var Bxb=A._GetAutoObject(C.Converter).Ac2(CX);return this.YZ(Ab,AX,Bxb
);},A7T:function(Ab,AX,CX){return this.G_(Ab,AX,CX);},AME:function(Ab,AX){return this.
CE(Ab,AX);},Be4:function(Ab,AX){return this.CE(Ab,AX);},Bk3:function(Ab,AX,CX){return this.
G_(Ab,AX,CX);},BkZ:function(Ab,AX,CX){return this.G_(Ab,AX,CX);},K4:function(aColumn
,A1){return-1;},AlY:function(Ab,AX){return this.CE(Ab,AX);},BkX:function(Ab,AX,CX
){return this.G_(Ab,AX,CX);},AA9:function(Ab,AX){return this.CE(Ab,AX);},AR9:function(
Ab,AX,N5){return this.G_(Ab,AX,N5);},Eo:function(H){this.Bum();},Bum:function(){
return-1;},LD:function(Ab,AX){return 0;},TP:function(Ab,AX,CX){return false;},AiY:
function(aColumn,A1){return-1;},G9:function(){return false;},Be5:function(Ab,AX){
var Bxc=this.CE(Ab,AX);return A._GetAutoObject(C.Converter).Bft(Bxc);},Be8:function(
Ab,AX){return this.CE(Ab,AX);},AMN:function(Ab,AX){return this.CE(Ab,AX);},Bk1:function(
Ab,AX,CX){var Bxd=A._GetAutoObject(C.Converter).A2A(CX);return this.G_(Ab,AX,Bxd
);},Bk2:function(Ab,AX,CX){return this.G_(Ab,AX,CX);},Bk9:function(Ab,AX,CX){return this.
G_(Ab,AX,CX);},AiV:function(aColumn,A1){return false;},Af4:function(aColumn,A1){
return false;},Bfg:function(Ab,AX){return this.CE(Ab,AX);},Bk7:function(Ab,AX,CX
){return this.G_(Ab,AX,CX);},K8:function(){return this.Qb()>=this.Hz();},Hz:function(
){return 0;},Aay:function(){return-1;},Qb:function(){return 0;},Fy:function(){return this.
Filter;},_Init:function(aArg){this.__proto__=C.ITable;A.hJ++;},_Done:function(){
this.__proto__=null;A.hJ--;},_ReInit:function(){},_Mark:function(D){var B;if((B=
this.Filter)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.I)&&(B._cycle!=D))B._Mark(
B._cycle=D);},I:null,_cycle:0,_observers:null,_className:"Device::ITable"};C.MaxAutoActionsCount=
4;C.WeightRecordingMode={Automatic:0,Manual:1,LAST:2};C.WeightRecordingModeToString={
BZ:function(A6){var Uu=A6;var Nm=A.jm;switch(Uu){case 0:Nm=A.z2(A.abg.Automatic);
break;case 1:Nm=A.z2(A.abg.Manual);break;default:throw new Error(AWo+Uu.toFixed(
));}return Nm;},_Init:function(aArg){C.EnumToString._Init.call(this,aArg);this.__proto__=
C.WeightRecordingModeToString;},_className:"Device::WeightRecordingModeToString"
};C.BooleanToAutoOnOff={BZ:function(A6){switch(A6){case 0:return A.z2(A.abg.Off);
case 1:return A.z2(A.abg.Z9);default:return AwI+A6.toFixed();}},_Init:function(aArg
){C.EnumToString._Init.call(this,aArg);this.__proto__=C.BooleanToAutoOnOff;},_className:
"Device::BooleanToAutoOnOff"};C.WeightStep=100;C.WeightRecordingScope={CurrentWeightOnly:
0,BirthWeightOnly:1,BirthAndCurrentWeight:2,NoWeightRecording:3,LAST:4};C.WeightRecordingScopeToString={
BZ:function(A6){var Bce=A6;var Azf=A.jm;switch(Bce){case 0:Azf=A.z2(A.abg.Bd4);break;
case 1:Azf=A.z2(A.abg.BdI);break;case 2:Azf=A.z2(A.abg.BdF);break;case 3:Azf=A.z2(
A.abg.BgI);break;default:throw new Error(Anp+Bce.toFixed());}return Azf;},_Init:
function(aArg){C.EnumToString._Init.call(this,aArg);this.__proto__=C.WeightRecordingScopeToString;
},_className:"Device::WeightRecordingScopeToString"};C.BodyTemperature={Undertemperature:
0,Normal:1,Elevated:2,Fever:3,LAST:4};C.JD={AcV:0,Temperature:1,Rating:2,Ag9:3,Byq:
4,By6:5,BBI:6,BzH:7,BAt:8,Bzf:9,BAs:10,BAS:11,LAST:12};C.AnimalListContentToString={
BZ:function(A6){var A_R=A6;var Wz=A.jm;switch(A_R){case 0:Wz=AWp;break;case 2:Wz=
AGs;break;case 1:Wz=AGt;break;case 3:Wz=AWq;break;case 4:Wz=AWr;break;case 5:Wz=
AGu;break;case 6:Wz=AWs;break;case 7:Wz=AWt;break;case 8:Wz=AWu;break;case 9:Wz=
AWv;break;case 10:Wz=AWw;break;case 11:Wz=AWx;break;default:throw new Error(AWy+
A_R.toFixed());}return Wz;},_Init:function(aArg){C.EnumToString._Init.call(this,
aArg);this.__proto__=C.AnimalListContentToString;},_className:"Device::AnimalListContentToString"
};C.GenderFilterCriterion={A4:0,Adj:function(){var Av=A._NewObject(C.GenderFilterCriterion
,0);Av.Gs(this);return Av;},Gs:function(AL){C.FilterCriterion.Gs.call(this,AL);var
Av=(C.GenderFilterCriterion.isPrototypeOf(AL)?AL:null);if(!!Av)this.A4=Av.A4;},_Init:
function(aArg){C.FilterCriterion._Init.call(this,aArg);this.__proto__=C.GenderFilterCriterion;
},_className:"Device::GenderFilterCriterion"};C.AnimalTypeFilterCriterion={A4:0,
Adj:function(){var Av=A._NewObject(C.AnimalTypeFilterCriterion,0);Av.Gs(this);return Av;
},Gs:function(AL){C.FilterCriterion.Gs.call(this,AL);var Av=(C.AnimalTypeFilterCriterion.
isPrototypeOf(AL)?AL:null);if(!!Av)this.A4=Av.A4;},Initialize:function(AX,EE,A1,
SA){this.ET=AX;this.Operator=EE;this.A4=A1;this.AaQ=SA;return this;},_Init:function(
aArg){C.FilterCriterion._Init.call(this,aArg);this.__proto__=C.AnimalTypeFilterCriterion;
},_className:"Device::AnimalTypeFilterCriterion"};C.ByC={Ain:0,ByB:1,BAe:2,A7B:3
,A2J:4,BBr:5,By5:6,BBq:7,LinkTransponder:8,O7:9,Weighing:10,Calving:11,LinkNaisId:
12,BAR:13,ClearBirthNoticePending:14,DeleteAnimal:15,ScanNaisId:16,Edit:17,ClearPurchaseNoticePending:
18};C.AutoRegistrationModeToString={BZ:function(A6){var Uu=A6;var Nm=A.jm;switch(
Uu){case 0:Nm=A.z2(A.abg.BdW);break;case 1:Nm=A.z2(A.abg.Bfx);break;case 2:Nm=A.
z2(A.abg.Off);break;default:throw new Error(AWz+Uu.toFixed());}return Nm;},_Init:
function(aArg){C.EnumToString._Init.call(this,aArg);this.__proto__=C.AutoRegistrationModeToString;
},_className:"Device::AutoRegistrationModeToString"};C.AutoRegistrationMode={UserConfirmed:
0,Background:1,Off:2,LAST:3};C.AssessmentFilterCriterion={A4:0,Adj:function(){var
Av=A._NewObject(C.AssessmentFilterCriterion,0);Av.Gs(this);return Av;},Gs:function(
AL){C.FilterCriterion.Gs.call(this,AL);var Av=(C.AssessmentFilterCriterion.isPrototypeOf(
AL)?AL:null);if(!!Av)this.A4=Av.A4;},Initialize:function(AX,EE,A1,SA){this.ET=AX;
this.Operator=EE;this.A4=A1;this.AaQ=SA;return this;},_Init:function(aArg){C.FilterCriterion.
_Init.call(this,aArg);this.__proto__=C.AssessmentFilterCriterion;},_className:"Device::AssessmentFilterCriterion"
};C.D3={AcV:0,Temperature:1,Ag9:2,Rating:3,LAST:4};C.FactoryResetScope={DeviceAndAnimalData:
0,AnimalDataOnly:1,LAST:2};C.FactoryResetScopeToString={BZ:function(A6){switch(A6
){case 0:return A.z2(A.abg.Bdc);case 1:return A.z2(A.abg.AnimalDataOnly);default:
return AWA+A6.toFixed();}},_Init:function(aArg){C.EnumToString._Init.call(this,aArg
);this.__proto__=C.FactoryResetScopeToString;},_className:"Device::FactoryResetScopeToString"
};C.ASH={Cr:function(){A._GetAutoObject(C.Device).AqD(this.toString());},Init:function(
aArg){var B;A.za([this,this.Bbr],[B=A._GetAutoObject(C.Device),B.A5X,B.A9P],0);this.
Bbr(this);},Bbr:function(H){this.EK(A._GetAutoObject(C.Device).AEY);A.vv(this,0);
},_Init:function(aArg){C.Int32ArrayWrapper._Init.call(this,aArg);this.__proto__=
C.ASH;this.YL(3);this.Init(aArg);},_className:"Device::TemperaturesLowClass"};C.
ASG={Init:function(aArg){var B;A.za([this,this.Bbp],[B=A._GetAutoObject(C.Device
),B.A5W,B.A9O],0);this.Bbp(this);},Cr:function(){A._GetAutoObject(C.Device).AqC(
this.toString());},Bbp:function(H){this.EK(A._GetAutoObject(C.Device).AEX);A.vv(
this,0);},_Init:function(aArg){C.Int32ArrayWrapper._Init.call(this,aArg);this.__proto__=
C.ASG;this.YL(3);this.Init(aArg);},_className:"Device::TemperaturesHighClass"};C.
AKA={Init:function(aArg){var B;A.za([this,this.BaV],[B=A._GetAutoObject(C.Device
),B.A5m,B.A9x],0);this.BaV(this);},BaV:function(H){this.EK(A._GetAutoObject(C.Device
).AzS);A.vv(this,0);},_Init:function(aArg){C.Int32ArrayWrapper._Init.call(this,aArg
);this.__proto__=C.AKA;this.YL(3);this.Init(aArg);},_className:"Device::AnimalTypesClass"
};C.UInt64FilterCriterion={A4:0,Adj:function(){var Av=A._NewObject(C.UInt64FilterCriterion
,0);Av.Gs(this);return Av;},Gs:function(AL){C.FilterCriterion.Gs.call(this,AL);var
Av=(C.UInt64FilterCriterion.isPrototypeOf(AL)?AL:null);if(!!Av)this.A4=Av.A4;},Initialize:
function(AX,EE,A1,SA){this.ET=AX;this.Operator=EE;this.A4=A1;this.AaQ=SA;return this;
},_Init:function(aArg){C.FilterCriterion._Init.call(this,aArg);this.__proto__=C.
UInt64FilterCriterion;},_className:"Device::UInt64FilterCriterion"};C.BooleanToAssignedUnassignedString={
BZ:function(A6){switch(A6){case 0:return A.z2(A.abg.Ajt);case 1:return A.z2(A.abg.
Bdd);default:return AwI+A6.toFixed();}},_Init:function(aArg){C.EnumToString._Init.
call(this,aArg);this.__proto__=C.BooleanToAssignedUnassignedString;},_className:
"Device::BooleanToAssignedUnassignedString"};C.De={UNDEFINED:0,AT:1,BA:2,BE:3,ByH:
4,ByW:5,ByX:6,ByY:7,ByZ:8,By0:9,By_:10,By$:11,Bzg:12,Bzh:13,Bzw:14,FR:15,GR:16,BzJ:
17,BzK:18,BzT:19,BzU:20,BzZ:21,Bz0:22,Bz1:23,Bz2:24,Bz8:25,BAk:26,BAl:27,BAz:28,
BAA:29,BAP:30,BAQ:31,BA6:32,BA7:33,BA8:34,BBk:35,BBl:36,BBB:37,A8h:38,BBC:39,LAST:
40};C.CountryToString={BZ:function(A6){var N8=A6;var Fq=A.jm;switch(N8){case 1:Fq=
A.z2(A.abn.Bdr);break;case 2:Fq=A.z2(A.abn.BdJ);break;case 3:Fq=A.z2(A.abn.BdE);
break;case 4:Fq=A.abn.BdL;break;case 5:Fq=A.z2(A.abn.BdN);break;case 6:Fq=A.z2(A.
abn.BlO);break;case 7:Fq=A.z2(A.abn.BdQ);break;case 8:Fq=A.z2(A.abn.Bd5);break;case
9:Fq=A.z2(A.abn.Bd6);break;case 10:Fq=A.z2(A.abn.BeY);break;case 11:Fq=A.z2(A.abn.
Beb);break;case 12:Fq=A.z2(A.abn.BeD);break;case 13:Fq=A.z2(A.abn.Blj);break;case
14:Fq=A.z2(A.abn.BeM);break;case 15:Fq=A.z2(A.abn.BeU);break;case 16:Fq=A.z2(A.abn.
Bfo);break;case 17:Fq=A.z2(A.abn.Bd3);break;case 18:Fq=A.z2(A.abn.Bfu);break;case
19:Fq=A.z2(A.abn.BfE);break;case 20:Fq=A.z2(A.abn.BfQ);break;case 21:Fq=A.z2(A.abn.
BfS);break;case 22:Fq=A.z2(A.abn.Bf7);break;case 23:Fq=A.z2(A.abn.Bf$);break;case
24:Fq=A.z2(A.abn.Bf5);break;case 25:Fq=A.abn.Bgb;break;case 26:Fq=A.z2(A.abn.Bgt
);break;case 27:Fq=A.z2(A.abn.BgJ);break;case 28:Fq=A.z2(A.abn.Bkk);break;case 29:
Fq=A.z2(A.abn.Bkl);break;case 30:Fq=A.z2(A.abn.BkL);break;case 31:Fq=A.z2(A.abn.
BkN);break;case 32:Fq=A.z2(A.abn.BlN);break;case 33:Fq=A.z2(A.abn.Bli);break;case
34:Fq=A.z2(A.abn.Blh);break;case 35:Fq=A.z2(A.abn.Bmb);break;case 36:Fq=A.z2(A.abn.
BlX);break;case 37:Fq=A.z2(A.abn.Bmf);break;case 38:Fq=A.z2(A.abn.A8h);break;case
39:Fq=A.z2(A.abn.Bme);break;case 0:Fq=Anq;break;default:throw new Error(Awr+N8.toFixed(
));}return Fq;},Lh:function(A6){var N8=A6;var BN=A.jm;switch(N8){case 1:BN=Ss;break;
case 2:BN=Wa;break;case 3:BN=T_;break;case 4:BN=Wb;break;case 5:BN=I$;break;case
6:BN=Wl;break;case 7:BN=T$;break;case 8:BN=Zg;break;case 9:BN=St;break;case 10:BN=
QT;break;case 11:BN=Zh;break;case 12:BN=We;break;case 13:BN=Zn;break;case 14:BN=
Ua;break;case 15:BN=Wf;break;case 16:BN=Wg;break;case 17:BN=Wd;break;case 18:BN=
OO;break;case 19:BN=PK;break;case 20:BN=Ub;break;case 21:BN=Zi;break;case 22:BN=
Zj;break;case 23:BN=Zk;break;case 24:BN=Wh;break;case 25:BN=Wi;break;case 26:BN=
Wj;break;case 27:BN=Su;break;case 28:BN=Zl;break;case 29:BN=Zm;break;case 30:BN=
AbO;break;case 31:BN=Sv;break;case 32:BN=Wk;break;case 33:BN=AeN;break;case 34:BN=
AbP;break;case 35:BN=AeO;break;case 36:BN=Wc;break;case 37:BN=AeP;break;case 38:
BN=JT;break;case 39:BN=AbQ;break;case 0:BN=Anq;break;default:throw new Error(Awr+
N8.toFixed());}return BN;},_Init:function(aArg){C.EnumToString._Init.call(this,aArg
);this.__proto__=C.CountryToString;},_className:"Device::CountryToString"};C.EaseOfDelivery={
Unspecified:0,Easy:1,Moderate:2,Difficult:3,Surgery:4,LAST:5};C.EaseOfDeliveryToString={
BZ:function(A6){var A$o=A6;var Ash=A.jm;switch(A$o){case 0:Ash=A.z2(A.abg.Unspecified
);break;case 1:Ash=A.z2(A.abg.Easy);break;case 2:Ash=A.z2(A.abg.Moderate);break;
case 3:Ash=A.z2(A.abg.Difficult);break;case 4:Ash=A.z2(A.abg.Surgery);break;default:
throw new Error(AWB+A$o.toFixed());}return Ash;},_Init:function(aArg){C.EnumToString.
_Init.call(this,aArg);this.__proto__=C.EaseOfDeliveryToString;},_className:"Device::EaseOfDeliveryToString"
};C.WhereAbouts={UNB:0,EZU:1,EMA:2,VZU:3,VMA:4,VIV:5,TOT:6,V48:7,V3T:8,MGE:9,VKB:
10,LAST:11};C.WhereAboutsToString={BZ:function(A6){var Bc4=A6;var ZY=A.jm;switch(
Bc4){case 0:ZY=A.z2(A.abg.Unknown);break;case 1:ZY=A.z2(A.abg.Bmn);break;case 2:
ZY=A.z2(A.abg.Bmm);break;case 3:ZY=A.z2(A.abg.Bmv);break;case 4:ZY=A.z2(A.abg.Bmu
);break;case 5:ZY=A.z2(A.abg.Bms);break;case 6:ZY=A.z2(A.abg.Bmp);break;case 7:ZY=
A.z2(A.abg.Bmr);break;case 8:ZY=A.z2(A.abg.Bmq);break;case 9:ZY=A.z2(A.abg.Bmo);
break;case 10:ZY=A.z2(A.abg.Bmt);break;default:throw new Error(AWC+Bc4.toFixed()
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
XZZ);break;default:throw new Error(AWD+Bs.toFixed());}return BJ;},_Init:function(
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
abm.Af1);A.y_([this,this.L$],this.timer,0);this.D9=-1;}},_Init:function(aArg){this.
__proto__=C.UT;A.hJ++;},_Done:function(){this.__proto__=null;A.hJ--;},_ReInit:function(
){},_Mark:function(D){var B;if((B=this.timer)&&(B._cycle!=D))B._Mark(B._cycle=D);
if((B=this.Q)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.I)&&(B._cycle
!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:"Device::BoolEffect"
};C.Ia={AnimalId:0,TransponderId:1,Bz$:2,Bz_:3,BAc:4,BAb:5};C.Atz={ByF:0,Bza:1};
C.AnimalIdGenerationMethodToString={BZ:function(A6){var Akx=A6;var AnL=A.jm;switch(
Akx){case 0:AnL=A.z2(A.abg.Yv);break;case 1:AnL=A.z2(A.abg.Transponder);break;case
3:AnL=(A.z2(A.abg.Manual)+N2)+A.z2(A.abg.Male);break;case 2:AnL=(A.z2(A.abg.Manual
)+N2)+A.z2(A.abg.Female);break;case 4:AnL=(A.z2(A.abg.Manual)+N2)+A.z2(A.abg.Unknown
);break;case 5:AnL=(A.z2(A.abg.Manual)+N2)+AGv;break;default:throw new Error(Zr+
Akx.toFixed());}return AnL;},_Init:function(aArg){C.EnumToString._Init.call(this
,aArg);this.__proto__=C.AnimalIdGenerationMethodToString;},_className:"Device::AnimalIdGenerationMethodToString"
};C.DirectionOfCountingToString={BZ:function(A6){var AxT=A6;var AY1=A.jm;switch(
AxT){case 0:AY1=AWE;break;case 1:AY1=AwQ;break;default:throw new Error(AWF+AxT.toFixed(
));}return AY1;},_Init:function(aArg){C.EnumToString._Init.call(this,aArg);this.
__proto__=C.DirectionOfCountingToString;},_className:"Device::DirectionOfCountingToString"
};C.EnumToIcon={Ari:function(A6){throw new Error(Ary+A6.toFixed());},Arj:function(
A6){throw new Error(Ary+A6.toFixed());},_Init:function(aArg){this.__proto__=C.EnumToIcon;
A.hJ++;},_Done:function(){this.__proto__=null;A.hJ--;},_ReInit:function(){},_Mark:
function(D){var B;if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:
0,_observers:null,_className:"Device::EnumToIcon"};C.Adi={Ari:function(A6){return A.
zW(A.abi.ASu);},Arj:function(A6){var AxT=A6;var Q$=-1;switch(AxT){case 0:Q$=3;break;
case 1:Q$=2;break;default:throw new Error(AGw+AxT.toFixed());}return Q$;},_Init:
function(aArg){C.EnumToIcon._Init.call(this,aArg);this.__proto__=C.Adi;},_className:
"Device::DirectionOfCountingToIcon"};C.AcZ={Ari:function(A6){return A.zW(A.abi.ASs
);},Arj:function(A6){var Akx=A6;var Q$=-1;switch(Akx){case 0:Q$=0;break;case 1:Q$=
6;break;case 3:Q$=4;break;case 2:Q$=5;break;case 4:Q$=2;break;case 5:Q$=3;break;
default:throw new Error(AGw+Akx.toFixed());}return Q$;},_Init:function(aArg){C.EnumToIcon.
_Init.call(this,aArg);this.__proto__=C.AcZ;},_className:"Device::AnimalIdGenerationMethodToIcon"
};C.Ph={UNDEFINED:0,SH:1,AMQ:2,APw:3,AMP:4,A4P:5,HE:6,A7z:7,A2k:8,AKL:9,ARZ:10,BE:
11,BB:12,A4D:13,AR0:14,AR1:15,ASz:16};C.GermanStateToString={BZ:function(A6){var
Bp=A6;var Go=A.jm;switch(Bp){case 1:Go=A.z2(A.abp.SH);break;case 2:Go=A.z2(A.abp.
AMQ);break;case 3:Go=A.z2(A.abp.APw);break;case 4:Go=A.z2(A.abp.AMP);break;case 5:
Go=A.z2(A.abp.A4P);break;case 6:Go=A.z2(A.abp.HE);break;case 7:Go=A.z2(A.abp.A7z
);break;case 8:Go=A.z2(A.abp.A2k);break;case 9:Go=A.z2(A.abp.AKL);break;case 10:
Go=A.z2(A.abp.ARZ);break;case 11:Go=A.z2(A.abp.BE);break;case 12:Go=A.z2(A.abp.BB
);break;case 13:Go=A.z2(A.abp.A4D);break;case 14:Go=A.z2(A.abp.AR0);break;case 15:
Go=A.z2(A.abp.AR1);break;case 16:Go=A.z2(A.abp.ASz);break;case 0:Go=Anq;break;default:
throw new Error(ArN+Bp.toFixed());}return Go;},Lh:function(A6){var Bp=A6;var Go=
A.jm;switch(Bp){case 1:Go=A.z2(A.abp.BkO);break;case 2:Go=A.z2(A.abp.AMQ);break;
case 3:Go=A.z2(A.abp.APw);break;case 4:Go=A.z2(A.abp.AMP);break;case 5:Go=A.z2(A.
abp.Bgq);break;case 6:Go=A.z2(A.abp.HE);break;case 7:Go=A.z2(A.abp.Bkv);break;case
8:Go=A.z2(A.abp.Bdu);break;case 9:Go=A.z2(A.abp.AKL);break;case 10:Go=A.z2(A.abp.
ARZ);break;case 11:Go=A.z2(A.abp.BE);break;case 12:Go=A.z2(A.abp.BB);break;case 13:
Go=A.z2(A.abp.Bga);break;case 14:Go=A.z2(A.abp.AR0);break;case 15:Go=A.z2(A.abp.
AR1);break;case 16:Go=A.z2(A.abp.ASz);break;case 0:Go=Anq;break;default:throw new
Error(ArN+Bp.toFixed());}return Go;},Bl2:function(A6){var Bp=A6;var FX=-1;switch(
Bp){case 0:FX=0;break;case 1:FX=1;break;case 2:FX=2;break;case 3:FX=3;break;case
4:FX=4;break;case 5:FX=5;break;case 6:FX=6;break;case 7:FX=7;break;case 8:FX=8;break;
case 9:FX=9;break;case 10:FX=10;break;case 11:FX=11;break;case 12:FX=12;break;case
13:FX=13;break;case 14:FX=14;break;case 15:FX=15;break;case 16:FX=16;break;default:
throw new Error(ArN+Bp.toFixed());}return FX;},Bl3:function(A6){var Bp=A6;var FX=
A.jm;switch(Bp){case 1:FX=AWG;break;case 2:FX=AWH;break;case 3:FX=AWI;break;case
4:FX=ArO;break;case 5:FX=ArP;break;case 6:FX=ArQ;break;case 7:FX=ArR;break;case 8:
FX=AwR;break;case 9:FX=Anr;break;case 10:FX=AWJ;break;case 11:FX=T_;break;case 12:
FX=AGx;break;case 13:FX=AWK;break;case 14:FX=AWL;break;case 15:FX=AWM;break;case
16:FX=AWN;break;case 0:FX=Anq;break;default:throw new Error(ArN+Bp.toFixed());}return FX;
},_Init:function(aArg){C.EnumToString._Init.call(this,aArg);this.__proto__=C.GermanStateToString;
},_className:"Device::GermanStateToString"};C.EartagNrAssignmentMode={OneSingleRange:
0,TwoNumberRanges:1,LAST:2};C.EartagNrAssignmentModeToString={Lh:function(A6){var
Uu=A6;var Nm=A.jm;switch(Uu){case 0:Nm=AWO;break;case 1:Nm=AWP;break;default:throw new
Error(AGy+Uu.toFixed());}return Nm;},BZ:function(A6){var Uu=A6;var Nm=A.jm;switch(
Uu){case 0:Nm=A.z2(A.abg.Bkd);break;case 1:Nm=A.z2(A.abg.Bmd);break;default:throw new
Error(AGy+Uu.toFixed());}return Nm;},_Init:function(aArg){C.EnumToString._Init.call(
this,aArg);this.__proto__=C.EartagNrAssignmentModeToString;},_className:"Device::EartagNrAssignmentModeToString"
};C.Byz={BAq:0,BAg:1,Bzq:2,Bzr:3,Bzs:4,BBm:5};C.EnumToCodeset={AlJ:function(Ahh){
throw new Error(AWQ+Ahh.toFixed());},Adl:function(A6){throw new Error(Ary+A6.toFixed(
));},Apw:function(){A.aa8("%s",AGz);return 0;},Hh:function(){A.aa8("%s",AGz);return 0;
},_Init:function(aArg){this.__proto__=C.EnumToCodeset;A.hJ++;},_Done:function(){
this.__proto__=null;A.hJ--;},_ReInit:function(){},_Mark:function(D){var B;if((B=
this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:
"Device::EnumToCodeset"};C.MQ={AlJ:function(Ahh){var Bs;switch(Ahh){case 0:Bs=0;
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
AWR+Bs.toFixed());}return BM;},Apw:function(){return 0;},Hh:function(){return 111;
},_Init:function(aArg){C.EnumToCodeset._Init.call(this,aArg);this.__proto__=C.MQ;
},_className:"Device::BreedToHitCodeset"};C.ReasonOfLeaving={Unknown:0,A75:1,SX:
2,A7u:3,A4i:4,BAy:5,A8i:6,A4L:7,A2I:8,A7q:9,A4J:10,A2M:11,BAN:12,BAO:13,LAST:14};
C.ReasonOfLeavingToString={BZ:function(A6){var AcF=A6;var SR=A.jm;switch(AcF){case
0:SR=A.z2(A.abg.Unknown);break;case 1:SR=A.z2(A.abg.A75);break;case 2:SR=A.z2(A.
abg.SX);break;case 3:SR=A.z2(A.abg.A7u);break;case 4:SR=A.z2(A.abg.A4i);break;case
5:SR=A.z2(A.abg.Bke);break;case 6:SR=A.z2(A.abg.A8i);break;case 7:SR=A.z2(A.abg.
A4L);break;case 8:SR=A.z2(A.abg.A2I);break;case 9:SR=A.z2(A.abg.A7q);break;case 10:
SR=A.z2(A.abg.A4J);break;case 11:SR=A.z2(A.abg.A2M);break;case 12:SR=A.z2(A.abg.
Bko);break;case 13:SR=A.z2(A.abg.Bkn);break;default:throw new Error(AWS+AcF.toFixed(
));}return SR;},_Init:function(aArg){C.EnumToString._Init.call(this,aArg);this.__proto__=
C.ReasonOfLeavingToString;},_className:"Device::ReasonOfLeavingToString"};C.AgQ={
AlJ:function(Ahh){var Oh;switch(Ahh){case 0:Oh=0;break;case 1:Oh=1;break;case 2:
Oh=2;break;case 3:Oh=3;break;case 4:Oh=4;break;case 5:Oh=5;break;case 6:Oh=6;break;
case 7:Oh=7;break;case 8:Oh=8;break;case 9:Oh=9;break;case 10:Oh=10;break;case 11:
Oh=11;break;case 12:Oh=12;break;case 13:Oh=13;break;default:Oh=0;}return Oh;},Adl:
function(A6){var Oh=A6;var Jb=0;switch(Oh){case 0:Jb=0;break;case 2:Jb=2;break;case
8:Jb=8;break;case 11:Jb=11;break;case 4:Jb=4;break;case 10:Jb=10;break;case 7:Jb=
7;break;case 5:Jb=5;break;case 9:Jb=9;break;case 3:Jb=3;break;case 12:Jb=12;break;
case 13:Jb=13;break;case 1:Jb=1;break;case 6:Jb=6;break;default:throw new Error(
AGA+Oh.toFixed());}return Jb;},Apw:function(){return 0;},Hh:function(){return 13;
},_Init:function(aArg){C.EnumToCodeset._Init.call(this,aArg);this.__proto__=C.AgQ;
},_className:"Device::ReasonOfLeavingToCodeset"};C.KG={AlJ:function(Ahh){var Ks;
switch(Ahh){case 0:Ks=0;break;case 1:Ks=1;break;case 2:Ks=2;break;case 3:Ks=3;break;
case 4:Ks=4;break;case 5:Ks=5;break;case 6:Ks=6;break;case 7:Ks=7;break;case 8:Ks=
8;break;case 9:Ks=9;break;case 10:Ks=10;break;default:Ks=0;}return Ks;},Adl:function(
A6){var Ks=A6;var Jb=0;switch(Ks){case 0:Jb=0;break;case 2:Jb=2;break;case 1:Jb=
1;break;case 9:Jb=9;break;case 6:Jb=6;break;case 8:Jb=8;break;case 7:Jb=7;break;
case 5:Jb=5;break;case 10:Jb=10;break;case 4:Jb=4;break;case 3:Jb=3;break;default:
throw new Error(AGA+Ks.toFixed());}return Jb;},Apw:function(){return 0;},Hh:function(
){return 10;},_Init:function(aArg){C.EnumToCodeset._Init.call(this,aArg);this.__proto__=
C.KG;},_className:"Device::WhereAboutsToCodeset"};C.AlQ={_Init:function(aArg){this.
__proto__=C.AlQ;A.hJ++;},_Done:function(){this.__proto__=null;A.hJ--;},_ReInit:function(
){},_Mark:function(D){var B;if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:
null,_cycle:0,_observers:null,_className:"Device::EmptyClass"};C.CalfDeregistrationsTableFields={
Year:0,Deregistrations:1,Deaths:2};C.CalfDeregistrations={Deregistrations:0,Deaths:
0,Year:0,EK:function(Ab,AF){var Hs=C.Row.EK.call(this,Ab,AF);if(Hs&&!!AF){this.AjN(
AF.CE(Ab,0));this.Au4(AF.CE(Ab,1));this.Au3(AF.CE(Ab,2));}return Hs;},Cr:function(
AF){var Hs=C.Row.Cr.call(this,AF);if(Hs&&!!AF){var Jg=AF.Op();if(Jg<=0)A.aa8("%s"
,AbS);else{if(this.Al_())this.CH=AF.XW();AF.G_(this.CH,0,this.Year);AF.G_(this.CH
,1,this.Deregistrations);AF.G_(this.CH,2,this.Deaths);AF.Or(Jg);}}return Hs;},Gd:
function(){C.Row.Gd.call(this);this.AjN(-1);},G9:function(){C.Row.G9.call(this);
this.AjN(0);this.Au4(0);this.Au3(0);},Au4:function(E){if(this.Deregistrations===
E)return;this.Deregistrations=E;A.aat([this,this.Bg$,this.Au4],0);},Au3:function(
E){if(this.Deaths===E)return;this.Deaths=E;A.aat([this,this.Bg9,this.Au3],0);},AjN:
function(E){if(this.Year===E)return;this.Year=E;A.aat([this,this.Aqb,this.AjN],0
);},Bg$:function(){return this.Deregistrations;},Bg9:function(){return this.Deaths;
},Aqb:function(){return this.Year;},_Init:function(aArg){C.Row._Init.call(this,aArg
);this.__proto__=C.CalfDeregistrations;this.TableId=4;},_className:"Device::CalfDeregistrations"
};C.Atx={Undefined:0,Display:1,A7y:2,A7K:3,A8A:4,BzL:5,BAX:6,BBx:7,Bz9:8,By1:9,Byo:
10,A3K:11,A7A:12,BBE:13,A4O:14,BBH:15};C.DeviceComponentToString={BZ:function(A6
){var A$i=A6;var PU=A.jm;switch(A$i){case 0:PU=AWT;break;case 10:PU=A.z2(A.abg.Bc5
);break;case 9:PU=A.z2(A.abg.BdP);break;case 1:PU=A.z2(A.abg.Bet);break;case 11:
PU=A.z2(A.abg.A3K);break;case 5:PU=A.z2(A.abg.Bmw);break;case 8:PU=A.z2(A.abg.Bev
);break;case 14:PU=A.z2(A.abg.A4O);break;case 2:PU=A.z2(A.abg.A7y);break;case 12:
PU=A.z2(A.abg.A7A);break;case 6:PU=A.z2(A.abg.Bku);break;case 3:PU=A.z2(A.abg.A7K
);break;case 7:PU=A.z2(A.abg.Bew);break;case 13:PU=A.z2(A.abg.Bee);break;case 15:
PU=A.z2(A.abg.BmA);break;case 4:PU=A.z2(A.abg.A8A);break;default:throw new Error(
AwS+A$i.toFixed());}return PU;},_Init:function(aArg){C.EnumToString._Init.call(this
,aArg);this.__proto__=C.DeviceComponentToString;},_className:"Device::DeviceComponentToString"
};C.Af0={AlJ:function(Ahh){return Ahh;},Adl:function(A6){return A6;},Apw:function(
){return 0;},Hh:function(){return 4;},_Init:function(aArg){C.EnumToCodeset._Init.
call(this,aArg);this.__proto__=C.Af0;},_className:"Device::EaseOfDeliveryToCodeset"
};C.AdU={Ari:function(A6){return A.zW(A.abi.ANX);},Arj:function(A6){var A$s=A6;var
Q$=-1;switch(A$s){case 0:Q$=0;break;case 1:Q$=1;break;case 2:Q$=2;break;default:
throw new Error(AWU+A$s.toFixed());}return Q$;},_Init:function(aArg){C.EnumToIcon.
_Init.call(this,aArg);this.__proto__=C.AdU;},_className:"Device::MotherSelectionFilterModeToIcon"
};C.WhereAboutsFilterCriterion={A4:0,Adj:function(){var Av=A._NewObject(C.WhereAboutsFilterCriterion
,0);Av.Gs(this);return Av;},Gs:function(AL){C.FilterCriterion.Gs.call(this,AL);var
Av=(C.WhereAboutsFilterCriterion.isPrototypeOf(AL)?AL:null);if(!!Av)this.A4=Av.A4;
},Initialize:function(AX,EE,A1,SA){this.ET=AX;this.Operator=EE;this.A4=A1;this.AaQ=
SA;return this;},_Init:function(aArg){C.FilterCriterion._Init.call(this,aArg);this.
__proto__=C.WhereAboutsFilterCriterion;},_className:"Device::WhereAboutsFilterCriterion"
};C.BAj={ALO:0,By8:1,ANz:2,LAST:3};C.BBo={Gt:0,AS$:1,G5:2,Year:3,LAST:4};C.TimespanDaysToString={
BZ:function(A6){var BcF=A6;var Azt=A.jm;switch(BcF){case 0:Azt=A.z2(A.abg.A21);break;
case 1:Azt=A.z2(A.abg.AS$);break;case 2:Azt=A.z2(A.abg.G5);break;case 3:Azt=A.z2(
A.abg.Year);break;default:throw new Error(AwT+BcF.toFixed());}return Azt;},_Init:
function(aArg){C.EnumToString._Init.call(this,aArg);this.__proto__=C.TimespanDaysToString;
},_className:"Device::TimespanDaysToString"};C.Akc={BAv:0,BzR:1,Bzb:2,BzS:3,Bzc:
4,LAST:5};C.USBStateToString={BZ:function(A6){var BcZ=A6;var Bp=A.jm;switch(BcZ){
case 0:Bp=AwU;break;case 1:Bp=AWV;break;case 2:Bp=AWW;break;case 4:Bp=AWX;break;
case 3:Bp=AGB;break;default:throw new Error(AFW+BcZ.toFixed());}return Bp;},_Init:
function(aArg){C.EnumToString._Init.call(this,aArg);this.__proto__=C.USBStateToString;
},_className:"Device::USBStateToString"};C.AAA={BzP:0,ByA:1,BzQ:2,BzN:3};C.Av0={
AAw:A.jm,Timestamp:0,ACb:0,ACj:0,AEp:0,OnSetTimestamp:function(E){if(this.Timestamp===
E)return;this.Timestamp=E;},ADm:function(E){if(this.ACb===E)return;this.ACb=E;},
ADt:function(E){if(this.ACj===E)return;this.ACj=E;},ADF:function(E){if(this.AEp===
E)return;this.AEp=E;},AC4:function(E){if(this.AAw===E)return;this.AAw=E;},_Init:
function(aArg){this.__proto__=C.Av0;A.hJ++;},_Done:function(){this.__proto__=null;
A.hJ--;},_ReInit:function(){},_Mark:function(D){var B;if((B=this.I)&&(B._cycle!=
D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:"Device::SoftwareVersionInformation"
};C.At3={Timestamp:0,APk:0,APl:0,ASR:0,ASS:0,ASQ:0,APj:0,OnSetTimestamp:function(
E){if(this.Timestamp===E)return;this.Timestamp=E;},ADj:function(E){if(this.APk===
E)return;this.APk=E;},ADk:function(E){if(this.APl===E)return;this.APl=E;},ADS:function(
E){if(this.ASR===E)return;this.ASR=E;},ADT:function(E){if(this.ASS===E)return;this.
ASS=E;},ADR:function(E){if(this.ASQ===E)return;this.ASQ=E;},ADi:function(E){if(this.
APj===E)return;this.APj=E;},_Init:function(aArg){this.__proto__=C.At3;A.hJ++;},_Done:
function(){this.__proto__=null;A.hJ--;},_ReInit:function(){},_Mark:function(D){var
B;if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:
null,_className:"Device::HardwareVersionInformation"};C.Apa={Undefined:0,BzB:1,ByN:
2};C.AfJ={Manual:0,TransponderId:1,LAST:2};C.AnimalIdAutoGenerationMethodToString={
BZ:function(A6){var A_P=A6;var AYu=A.jm;switch(A_P){case 0:AYu=A.z2(A.abg.A2R);break;
case 1:AYu=A.z2(A.abg.A27);break;default:throw new Error(AWY+A_P.toFixed());}return AYu;
},_Init:function(aArg){C.EnumToString._Init.call(this,aArg);this.__proto__=C.AnimalIdAutoGenerationMethodToString;
},_className:"Device::AnimalIdAutoGenerationMethodToString"};C.G5={A2y:0,AB2:1,AAT:
2,ACc:3,AzU:4,ACf:5,AB4:6,AB3:7,Az2:8,AEw:9,ACt:10,ACr:11,AAD:12,LAST:13};C.MonthToString={
BZ:function(A6){var Bas=A6;var WQ=A.jm;switch(Bas){case 1:WQ=A.z2(A.abu.AB2);break;
case 2:WQ=A.z2(A.abu.AAT);break;case 3:WQ=A.z2(A.abu.ACc);break;case 4:WQ=A.z2(A.
abu.AzU);break;case 5:WQ=A.z2(A.abu.ACf);break;case 6:WQ=A.z2(A.abu.AB4);break;case
7:WQ=A.z2(A.abu.AB3);break;case 8:WQ=A.z2(A.abu.Az2);break;case 9:WQ=A.z2(A.abu.
AEw);break;case 10:WQ=A.z2(A.abu.ACt);break;case 11:WQ=A.z2(A.abu.ACr);break;case
12:WQ=A.z2(A.abu.AAD);break;default:throw new Error(AWZ+Bas.toFixed());}return WQ;
},_Init:function(aArg){C.EnumToString._Init.call(this,aArg);this.__proto__=C.MonthToString;
},_className:"Device::MonthToString"};C.AiM={FileName:A.jm,AEr:0,AAA:0,Am0:false
,_Init:function(aArg){this.__proto__=C.AiM;A.hJ++;},_Done:function(){this.__proto__=
null;A.hJ--;},_ReInit:function(){},_Mark:function(D){var B;if((B=this.I)&&(B._cycle
!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:"Device::DataExportContext"
};C.AlA={BzI:0,BBd:1};C.ATg={Init:function(aArg){var B;A.za([this,this.BbB],[B=A.
_GetAutoObject(C.Device),B.A59,B.A9W],0);this.BbB(this);},Cr:function(){A._GetAutoObject(
C.Device).AqI(this.toString());},BbB:function(H){this.EK(A._GetAutoObject(C.Device
).AFg);A.vv(this,0);},_Init:function(aArg){C.Int32ArrayWrapper._Init.call(this,aArg
);this.__proto__=C.ATg;this.YL(2);this.Init(aArg);},_className:"Device::WeightGainsLowClass"
};C.ATf={Init:function(aArg){var B;A.za([this,this.Bbz],[B=A._GetAutoObject(C.Device
),B.A58,B.A9V],0);this.Bbz(this);},Cr:function(){A._GetAutoObject(C.Device).AqH(
this.toString());},Bbz:function(H){this.EK(A._GetAutoObject(C.Device).AFf);A.vv(
this,0);},_Init:function(aArg){C.Int32ArrayWrapper._Init.call(this,aArg);this.__proto__=
C.ATf;this.YL(2);this.Init(aArg);},_className:"Device::WeightGainsHighClass"};C.
ATi={Init:function(aArg){var B;A.za([this,this.BbD],[B=A._GetAutoObject(C.Device
),B.A6a,B.A9Z],0);this.BbD(this);},Cr:function(){A._GetAutoObject(C.Device).AqJ(
this.toString());},BbD:function(H){this.EK(A._GetAutoObject(C.Device).AFi);A.vv(
this,0);},_Init:function(aArg){C.Int32ArrayWrapper._Init.call(this,aArg);this.__proto__=
C.ATi;this.YL(2);this.Init(aArg);},_className:"Device::WeightValuesBirthClass"};
C.ATe={Init:function(aArg){var B;A.za([this,this.Bbx],[B=A._GetAutoObject(C.Device
),B.A57,B.A9U],0);this.Bbx(this);},Cr:function(){A._GetAutoObject(C.Device).AqG(
this.toString());},Bbx:function(H){this.EK(A._GetAutoObject(C.Device).AFe);A.vv(
this,0);},_Init:function(aArg){C.Int32ArrayWrapper._Init.call(this,aArg);this.__proto__=
C.ATe;this.YL(2);this.Init(aArg);},_className:"Device::WeightGainsAverageClass"};
C.AKB={Init:function(aArg){var B;A.za([this,this.BaW],[B=A._GetAutoObject(C.Device
),B.A5n,B.A9y],0);this.BaW(this);},BaW:function(H){this.EK(A._GetAutoObject(C.Device
).AzT);A.vv(this,0);},_Init:function(aArg){C.Int32ArrayWrapper._Init.call(this,aArg
);this.__proto__=C.AKB;this.YL(2);this.Init(aArg);},_className:"Device::AnimalTypesWeightGainsClass"
};C.BAm={BAp:0,BAd:1,By7:2,BBF:3,Unknown:4};C.ByL={None:0,BAw:1,BAr:2,BAn:3,BAo:
4};C.Ag6={A4Z:0,Manual:1,TransponderId:2,LAST:3};C.TransponderAssignmentIdChangeMethodToString={
BZ:function(A6){var BcJ=A6;var AJj=A.jm;switch(BcJ){case 0:AJj=A.z2(A.abg.A4Z);break;
case 1:AJj=A.z2(A.abg.A2R);break;case 2:AJj=A.z2(A.abg.A27);break;default:throw new
Error(AW0+BcJ.toFixed());}return AJj;},_Init:function(aArg){C.EnumToString._Init.
call(this,aArg);this.__proto__=C.TransponderAssignmentIdChangeMethodToString;},_className:
"Device::TransponderAssignmentIdChangeMethodToString"};C.A7r={Bw6:function(A_r){
var Nn=A.aa2(A.aaX(A_r,15),0,10);if(!A._GetAutoObject(C.Converter).AeF(Nn))return 0;
return A.aa2(A.aaX(A_r,15),0,10);},Bw5:function(AHW){if(AHW.length<8)return 0;var
AyX=A._NewObject(A.Core.Bu,0);var Bxu=A.aaY(AHW,4,4);var AZz=A.vQ(Bxu,0,10);if((
AZz<2000)||(AZz>2100))return 0;AyX.Year=AZz;var Bxt=A.aaY(AHW,2,2);var AZy=A.vQ(
Bxt,0,10);if((AZy<1)||(AZy>12))return 0;AyX.TF(AZy);var Bxs=A.aaX(AHW,2);var AZx=
A.vQ(Bxs,0,10);if((AZx<1)||(AZx>AyX.YB()))return 0;AyX.Lb(AZx);return AyX.JL();}
,_Init:function(aArg){this.__proto__=C.A7r;A.hJ++;},_Done:function(){this.__proto__=
null;A.hJ--;},_ReInit:function(){},_Mark:function(D){var B;if((B=this.I)&&(B._cycle
!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:"Device::ParserClass"
};C.AvJ={_Init:function(){C.A7r._Init.call(this,0);},_variants:function(){return this;
},_this:null};C.AnimalTableFieldsToString={BZ:function(A6){var Zx=A6;var FE=A.jm;
switch(Zx){case 14:FE=A.z2(A.abg.AeG);break;case 6:FE=A.jm;break;case 32:FE=A.z2(
A.abg.Breed);break;case 4:FE=A.z2(A.abg.AfV);break;case 28:FE=A.z2(A.abg.A2E);break;
case 33:FE=A.z2(A.abg.AiI);break;case 23:FE=A.z2(A.abg.Kv);break;case 25:FE=A.jm;
break;case 7:FE=A.z2(A.abg.Aeq);break;case 2:FE=A.z2(A.abg.O);break;case 0:FE=A.
z2(A.abg.HA);break;case 8:FE=A.z2(A.abg.Alarm);break;case 9:FE=A.z2(A.abg.AAo);break;
case 38:FE=A.z2(A.abg.Beu);break;case 11:FE=A.z2(A.abg.Fever);break;case 27:FE=A.
jm;break;case 10:FE=A.jm;break;case 37:FE=A.jm;break;case 12:FE=A.jm;break;case 29:
FE=A.z2(A.abg.AO$);break;case 18:FE=A.z2(A.abg.MS);break;case 17:FE=A.jm;break;case
5:FE=A.jm;break;case 3:FE=A.jm;break;case 26:FE=A.z2(A.abg.Yv);break;case 35:FE=
A.jm;break;case 36:FE=A.jm;break;case 15:FE=A.jm;break;case 16:FE=A.jm;break;case
24:FE=A.jm;break;case 31:FE=A.jm;break;case 20:FE=A.jm;break;case 30:FE=A.jm;break;
case 21:FE=A.jm;break;case 19:FE=A.jm;break;case 22:FE=A.z2(A.abg.Transponder);break;
case 1:FE=A.z2(A.abg.Gq);break;case 34:FE=A.z2(A.abg.I_);break;case 13:FE=A.jm;break;
default:throw new Error(AW1+A6.toFixed());}return FE;},_Init:function(aArg){C.EnumToString.
_Init.call(this,aArg);this.__proto__=C.AnimalTableFieldsToString;},_className:"Device::AnimalTableFieldsToString"
};C.U4={BzO:0,BzM:1,LAST:2};C.DataExportDestinationToString={BZ:function(A6){var
BuL=A6;var AYW=A.jm;switch(BuL){case 0:AYW=A.abg.Bfp;break;case 1:AYW=A.abg.Bd7;
break;default:throw new Error(AW2+A6.toFixed());}return AYW;},_Init:function(aArg
){C.EnumToString._Init.call(this,aArg);this.__proto__=C.DataExportDestinationToString;
},_className:"Device::DataExportDestinationToString"};C.AB$={Bc:0,BBh:1,LAST:2};
C.ListViewScopeToString={BZ:function(A6){var BvR=A6;var AZU=A.jm;switch(BvR){case
0:AZU=AW3;break;case 1:AZU=AW4;break;default:throw new Error(AW5+A6.toFixed());}
return AZU;},_Init:function(aArg){C.EnumToString._Init.call(this,aArg);this.__proto__=
C.ListViewScopeToString;},_className:"Device::ListViewScopeToString"};
C._Init=function(){C.Int32FilterCriterion.__proto__=C.FilterCriterion;C.StringFilterCriterion.
__proto__=C.FilterCriterion;C.Table.__proto__=C.ITable;C.Animal.__proto__=C.Row;
C.Rating.__proto__=C.Row;C.HelperClass.__proto__=C.AlQ;C.BoolFilterCriterion.__proto__=
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
C.ASH.__proto__=C.Int32ArrayWrapper;C.ASG.__proto__=C.Int32ArrayWrapper;C.AKA.__proto__=
C.Int32ArrayWrapper;C.UInt64FilterCriterion.__proto__=C.FilterCriterion;C.BooleanToAssignedUnassignedString.
__proto__=C.EnumToString;C.CountryToString.__proto__=C.EnumToString;C.EaseOfDeliveryToString.
__proto__=C.EnumToString;C.WhereAboutsToString.__proto__=C.EnumToString;C.BreedToString.
__proto__=C.EnumToString;C.AnimalIdGenerationMethodToString.__proto__=C.EnumToString;
C.DirectionOfCountingToString.__proto__=C.EnumToString;C.Adi.__proto__=C.EnumToIcon;
C.AcZ.__proto__=C.EnumToIcon;C.GermanStateToString.__proto__=C.EnumToString;C.EartagNrAssignmentModeToString.
__proto__=C.EnumToString;C.MQ.__proto__=C.EnumToCodeset;C.ReasonOfLeavingToString.
__proto__=C.EnumToString;C.AgQ.__proto__=C.EnumToCodeset;C.KG.__proto__=C.EnumToCodeset;
C.CalfDeregistrations.__proto__=C.Row;C.DeviceComponentToString.__proto__=C.EnumToString;
C.Af0.__proto__=C.EnumToCodeset;C.AdU.__proto__=C.EnumToIcon;C.WhereAboutsFilterCriterion.
__proto__=C.FilterCriterion;C.TimespanDaysToString.__proto__=C.EnumToString;C.USBStateToString.
__proto__=C.EnumToString;C.AnimalIdAutoGenerationMethodToString.__proto__=C.EnumToString;
C.MonthToString.__proto__=C.EnumToString;C.ATg.__proto__=C.Int32ArrayWrapper;C.ATf.
__proto__=C.Int32ArrayWrapper;C.ATi.__proto__=C.Int32ArrayWrapper;C.ATe.__proto__=
C.Int32ArrayWrapper;C.AKB.__proto__=C.Int32ArrayWrapper;C.TransponderAssignmentIdChangeMethodToString.
__proto__=C.EnumToString;C.AnimalTableFieldsToString.__proto__=C.EnumToString;C.
DataExportDestinationToString.__proto__=C.EnumToString;C.ListViewScopeToString.__proto__=
C.EnumToString;};C._ReInit=function(){var B;if((B=C.Device._this))B._ReInit();if((
B=C.Converter._this))B._ReInit();if((B=C.Helper._this))B._ReInit();if((B=C.AvJ._this
))B._ReInit();};C.DE=function(D){var B;if((B=C.Device._this)&&(B._cycle!=D))B._Done(
C.Device._this=null);if((B=C.Converter._this)&&(B._cycle!=D))B._Done(C.Converter.
_this=null);if((B=C.Helper._this)&&(B._cycle!=D))B._Done(C.Helper._this=null);if((
B=C.AvJ._this)&&(B._cycle!=D))B._Done(C.AvJ._this=null);};return C;})();

/* VitalControl demonstration application, © Urban GmbH & Co.KG 2023 */