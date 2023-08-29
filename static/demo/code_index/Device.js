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
var B9="ERROR: Cannot add criterion, it is already in the list.";var BG="ERROR: BatteryChargeState is read only";
var EV="ERROR: UpdateChargeActive is read only";var GS="ERROR: ScanState is read only.";
var Js="ERROR: MeasureState is read only.";var IL="ERROR: Temperature value is read only";
var OJ="ERROR: UpdateDataTable called for Undefined data table.";var PH="ERROR: UpdateDataTable called for unknown data table id=";
var N0="ERROR: SyncState is read only.";var CJ="ERROR: ScanTransponder is read only.";
var Fn="ERROR: Body weight value is read only";var N1="ERROR: Predicted temperature value is read only";
var OK="ERROR: TransferProgress is read only";var KF="ERROR: TransferTarget is read only";
var OL="ERROR: unhandled assessment.";var Nc="Unhandled enum BodyTemperature: ";
var OM="AU";var Sr="AT";var T8="BE";var V8="BA";var V9="BG";var I_="CA";var T9="CN";
var V_="TW";var V$="HR";var Y5="CY";var Ss="CZ";var Y6="DK";var Wa="EE";var T_="FI";
var T$="FR";var QS="DE";var Wb="GR";var ON="HU";var PJ="IE";var Ua="IT";var Y7="JP";
var Wc="LV";var Y8="LT";var Y9="LU";var Wd="MT";var We="NL";var St="NO";var Y_="PL";
var Y$="PT";var Abz="RO";var Su="RU";var AbA="SK";var AbB="SI";var Za="ES";var Wf=
"SE";var Zb="CH";var AeG="TR";var AeH="UA";var LV="UK";var AbC="US";var Lg=".";var
Ag3="-";var Am4="ERROR: Unhandled mass unit: ";var N2=" ";var Wg="Unhandled gender";
var Am5="Unhandled animal type";var Ag4="Unhandled Device::MassUnit.";var Ag5="Unhandled Device::AnimalListContent.";
var AbD="Avid";var Zc="Ordicam / IER SA";var Av_="Agrident";var Av$="Datamars";var
Awa="Allflex";var Awb="Texas Instruments";var Aj8="Nedap";var Awc="Digital Angel";
var AeI="null";var Ari="[ ";var OO=", ";var Sv=" ]";var Awd="Unhandled language";
var Sw="Unhandled Device::AnimalListAction.";var Arj="Temperature unit conversion not supported: ";
var Awe="->";var Awf="=";var Awg=">";var Am6="<";var Awh="!=";var Ark="WARNING: Unhandled operator.";
var KG="Unknown birth type";var Awi="Unhandled country: ";var AbE="ERROR: Cannot start transaction";
var Awj="ERROR: Table is null, cannot load row (";var AFa=")";var AFb="Table Id mismatch!";
var AFc="ERROR: Row index (";var AFd=") out of bounds [0,";var Awk="]";var AS$="ERROR: Table is full. Item limit: ";
var ATa="Device::ScanTransponder not set";var ATb="Unhandled TransponderType.";var
ATc="Unhandled ScanState.";var ATd="Could not load animal with transponder";var Arl=
"Birth type";var Awl="Time calving";var QT="Pend. reg. notice";var Awm="Perished";
var ATe="Rating temp.";var ATf=" mother";var ATg="Reason leaving";var ATh="Time alarm";
var AFe="Time first weighing";var AFf="Time control";var AeJ="Time temp.";var Am7=
"Time watch";var ATi="Time weighing";var AFg="Assessment";var Aj9="Time rating";
var AFh="ERROR: Unhandled AnimalTable filter field:";var Awn="Field ";var ATj="ERROR: Unhandled RatingTable filter field:";
var ATk="ERROR: Unhandled table ";var ATl=" filter fields.";var ATm="WARNING: Unhandled filter criterion type.";
var AbF="0";var Arm="No table specified";var AFi="Invalid animal id generation method: ";
var AFj="Unhandled AnimalIdGenerationMethod: ";var Awo="Invalid gender: ";var AFk=
"Invalid ear tag number assignment mode: ";var Awp=";";var ATn="Invalid animal creation error code: ";
var ATo="Invalid EartagNrAssignmentMode: ";var ATp="Unsupported exponent: ";var ATq=
"Unknown whereabouts type: ";var AFl="Unhandled Gender: ";var ATr="Unhandled AnimalIdAutoGenerationMethod: ";
var OP="\n";var Awq="\n\n";var ATs="Bootloader:\nV\xA0";var ATt="Middleware:\nV\xA0";
var ATu="GUI:\nV\xA0";var ATv="Mainboard: ";var ATw="Torchboard: ";var ATx="Operator not supported.";
var ATy="Unhandled Device::TransponderAssignmentIdChangeMethod: ";var Arn="Unhandled enum value ";
var Awr="UNDEFINED";var AFm="Boot";var ATz="Charge";var AFn="ChargeWarning";var ATA=
"ControlledPowerOff";var ATB="DeviceMain";var ATC="DeviceService";var ATD="DeviceInfo";
var AFo="DeviceBackup";var ATE="DeviceCheck";var Aws="Home";var AFp="Settings";var
AFq="DateTimeSettings";var ATF="UnitsSettings";var AFr="DataAcquisitionSettings";
var ATG="RegistrationAutomaticSettings";var ATH="RegistrationPresettingsSettings";
var QU="TransponderAssignmentSettings";var Wh="TemperatureSettings";var ATI="WeightGainSettings";
var ATJ="DeviceSettings";var ATK="RegistrationSettings";var ATL="InitializationSettings";
var ATM="PremisesSettings";var ATN="Sleep";var ATO="Sync";var Ag6="EditAnimalData";
var AFs="EditAnimalDataNaisId";var ATP="AnimalList";var ATQ="AnimalListFilter";var
AFt="AlarmListFilter";var AFu="WatchListFilter";var Awt="AnimalActionActions";var
QV="AnimalActionTemperature";var ATR="TemperatureMeasurement";var ATS="AnimalActionWeighing";
var ATT="AnimalActionRate";var Aro="AnimalActionUnregister";var ATU="AnimalActionPerished";
var ATV="AnimalActionNewBornCare";var ATW="AlarmList";var ATX="ControlMeasure";var
ATY="ControlList";var ATZ="RangeTest";var Arp="ListsMain";var AT0="ListsIdManagement";
var AT1="WatchList";var AT2="AnimalListActions";var AT3="AlarmListActions";var AT4=
"ControlListActions";var AT5="WatchListActions";var AT6="EvaluationMenuMain";var
AT7="EvaluationMenuWeights";var AT8="EvaluationLosses";var AT9="EvaluationRatings";
var AFv="EvaluationTemperatures";var Arq="EvaluationWeights";var AT_="EvaluationWeightsRecent";
var AT$="EvaluationBirthWeights";var AUa="AnimalEvaluationFilter";var Awu="NewMenu";
var Aj_="NewAnimals";var AeK="NewAnimalManualData";var Arr="MassRecording";var Aj$=
"NewAnimalTransponderData";var Ag7="NewAnimalLoss";var AUb="AutoActionScanScreen";
var Ars="ManualActionScanScreen";var AFw="SetTransponderScreen";var AeL="SetSaveTransponderScreen";
var AFx="NewAnimalSetTransponderScreen";var Wi="NewAnimalsSetTransponderScreen";
var Aka="NewAnimalCalvingDataScreen";var Am8="WeightListScreen";var AUc="AnimalSingleInfoScreen";
var AUd="AnimalMultiInfoScreen";var AUe="AnimalRegistrationDetails";var AUf="MultiInfoActionsScreen";
var AUg="FreshCowListScreen";var Art="FreshCowListActionsScreen";var AFy="FreshCowListFilterScreen";
var AFz="DryCowListScreen";var AUh="DryCowListActionsScreen";var AUi="DryCowListFilterScreen";
var AUj="NoTransponderListScreen";var AUk="NoTransponderListActionsScreen";var AUl=
"NoTransponderListFilterScreen";var AUm="YoungNoTransponderListScreen";var AFA="YoungNoTransponderListActionsScreen";
var AUn="YoungNoTransponderListFilterScreen";var Awv="NoNaisIdListScreen";var AFB=
"NoNaisIdListActionsScreen";var AFC="NoNaisIdListFilterScreen";var AFD="RegistrationsListScreen";
var AFE="RegistrationsListActionsScreen";var AFF="RegistrationsListFilterScreen";
var AFG="ActionListScreen";var AUo="ActionListActionsScreen";var AUp="ActionListFilterScreen";
var AUq="UpdateScreen";var AUr="MotherScanScreen";var AUs="SetSaveNaisIdScreen";
var AUt="PurchasedAnimalsList";var AUu="TextInput";var Aww="Unhandled display mode: ";
var AFH="None";var AUv="Actions Settings";var AFI="Auto Action";var Akb="Menu Item Settings";
var Zd="Rating Type";var AUw="Weighing settings";var AeM="Options";var AUx="AnimalSearch";
var AUy="AnimalSearchUnfiltered";var Aru="AnimalSearchDriedOff";var AeN="MeasurementReady";
var Am9="AnimalMultiInfoMenu";var AFJ="MassRecordingDefaults";var AUz="MassRecordingFields";
var OQ="MassRecordingMenu";var AUA="Unhandled overlay menu: ";var Awx="Error";var
Awy="Idle";var AUB="IdScanned";var AFK="NotFound";var Awz="Progress";var AFL="Unhandled scan state: ";
var AUC="Prediction";var AFM="Ready";var AUD="Unhandled measure state: ";var AUE=
"Unhandled temperature unit: ";var AUF="Unhandled species: ";var AUG="English";var
AUH="Nederlands";var AFN="Deutsch";var AUI="Eesti";var AFO="Suomalainen";var AFP=
"Fran\xE7ais";var AwA="\u0395\u03BB\u03BB\u03B7\u03BD\u03B9\u03BA\u03AC";var AUJ=
"\u0411\u044A\u043B\u0433\u0430\u0440\u0441\u043A\u0438";var AUK="Italiano";var AUL=
"\u0420\u0443\u0441\u0441\u043A\u0438\u0439";var AUM="Espa\xF1ol";var AUN="T\xFCrk\xE7e";
var AUO="\u6B63\u9AD4\u5B57/\u7E41\u9AD4\u5B57";var AUP="\u010Ce\u0161tina";var AUQ=
"Bosanski";var Arv="Norsk";var Am_="\u0423\u043A\u0440\u0430\u0457\u043D\u0441\u044C\u043A\u0438\u0439";
var AwB="Unhandled language: ";var AUR="Unhandled gender: ";var AUS="Unhandled birth type: ";
var AUT="Exporting";var AUU="ImportFinish";var AUV="ImportStart";var AUW="Importing";
var AUX="Init";var AUY="Unhandled sync state: ";var AFQ="Unhandled rating attribute: ";
var AUZ="Unhandled assessment: ";var AwC="Illegal boolean value: ";var AFR="Unhandled popup ID:";
var AU0="Unknown";var AU1="Severe Error";var AU2="ErrorsDeviceDriverCheck";var AU3=
"Enter Sleep";var AU4="About";var AU5="InfoSoftwareVersions";var Arw="InfoHardwareVersions";
var AFS="InfoSerial";var AFT="ShutDown";var AFU="SuccessDataSync";var AFV="SuccessResetFactory";
var AFW="SuccessResetAnimalData";var AwD="SuccessCreateBackup";var AFX="SuccessRestoreBackup";
var AU6="CreateBackupInProgress";var AU7="RestoreBackupInProgress";var AU8="FailedCreateBackup";
var AFY="FailedRestoreBackup";var AU9="TechnicalDetails";var AU_="WarningDataSync";
var AU$="WarningFactory";var AVa="WarningResetAnimalData";var AVb="WarningRestart";
var AVc="WarningAutoAction";var AVd="WarningAutoActionNotApplicable";var AVe="WarningNoMenuItem";
var AwE="WarningEnterDemoMode";var AVf="NoAnimalsRegistered";var AVg="MaxNumAnimalsReached";
var AwF="MaxNumRatingsReached";var Arx="MaxNumCalfDeregistrationsReached";var Ze=
"ScanInTransponder";var Ary="WarningScanOverwriteNaisId";var AVh="EarTagNumberTooShort";
var AVi="NoValidCountryCode";var AVj="WarningOutdatedAnimalWeight";var AFZ="WarningOutdatedAnimalWeights";
var AVk="WarningWeightEvaluationSingular";var AF0="WarningWeightEvaluationPlural";
var AVl="ScanError";var AVm="ScanNotFound";var AVn="ScannedAnimalNotFound";var Arz=
"ScannedTransponderNotFound";var AVo="AnimalNotFound";var AVp="SuccessUnregister";
var AF1="SuccessUnregisterPerished";var AVq="SuccessCreationNewAnimal";var AVr="SuccessCreationNewAnimals";
var AVs="AnimalCreationInProgress";var AVt="EvaluationInProgress";var AbG="DataSyncInProgress";
var AVu="AddedToAlarm";var AVv="RemovedFromAlarm";var AVw="AddedToWatch";var AVx=
"RemovedFromWatch";var AF2="AddedToDryOff";var AVy="RemovedFromDryOff";var AVz="AnimalIdAlreadyExists";
var AVA="AnimalIdAlreadyExistsContinuable";var AVB="MissingAnimalId";var AVC="MissingAnimalIdMother";
var AVD="MissingEartagNumber";var AF3="MissingTransponderId";var AVE="TransponderAlreadyRegistered";
var AVF="TransponderAlreadyRegisteredContinuable";var AVG="HelpAnimalInfoRating";
var AF4="CannotReassignTransponder";var AF5="CannotReassignNaisId";var AVH="WarningResetToDefaultValue";
var AVI="WarningResetThresholds";var AVJ="WarningResetTempThresholds";var AVK="UpdateFirmware";
var QW="UpdateFirmwareBatteryLow";var ArA="ConfirmFirmwareUpdated";var AF6="ConfirmBootloaderUpdated";
var AF7="QuestionAddAnotherCalfMultiples";var Am$="RemovedAllBirthNoticesPending";
var Ana="RemovedAllPurchasedNoticePending";var AwG="RemovedFromBirthNoticePending";
var AVL="RemovedFromPurchasedNoticePending";var AF8="SuccessClearAnimalLoss";var
AVM="RemovedAnimal";var AVN="WarningNoActionsForAnimalLoss";var AVO="SuccessLinkTransponder";
var AVP="SuccessUnlinkTransponder";var AVQ="SuccessLinkNaisId";var AVR="WarningDataExportHitBirthFailed";
var AVS="SuccessDataExportHitBirth";var AVT="SuccessDataExportHitBirthDownload";
var AVU="WarningDataExportHitPurchasedFailed";var AVV="SuccessDataExportHitPurchased";
var AVW="SuccessDataExportHitPurchasedDownload";var AVX="WarningDataExportAnimalsFailed";
var AVY="SuccessDataExportAnimalsRatings";var AVZ="SuccessDataExportAnimalsDownload";
var AV0="WarningNoPremisesID";var AV1="WarningNoFlashDrivePresent";var AV2="WarningNoBackupPathPresent";
var Anb="WarningNoBackupFilePresent";var AF9="DemoFunctionNotAvailable";var AV3=
"WarningImpreciseTimeSetting";var AF_="ConfirmationRestoreBackup";var AF$="WarningParsedDateInFutureInvalid";
var AbH="WarningParsingDateFailed";var AGa="WarningParsingNaisIdFailed";var AV4=
"AnimalId";var AGb="FarmId";var AV5="GroupId";var AwH="PersonId";var AV6="Unhandled transponder type: ";
var AV7="FDX";var AwI="HDX";var AV8="HDX (Urban)";var AV9="Unhandled transponder protocol: ";
var AV_="Illegal RatingMode: ";var AGc="Unhandled mass unit: ";var Anc="Max array size is 10";
var AwJ="Index out of bounds";var AV$="ERROR: Received more integers than expected!";
var AwK="Unhandled double scan action :";var AGd="Illegal WeightRecordingMode: ";
var Akc="Illegal WeightRecordingScope: ";var AWa="AnimalData";var And="Rating";var
AWb="Temperature";var AGe="Weight";var AGf="Alarm infos";var AWc="Control infos";
var AWd="Watch infos";var AGg="Fresh cow infos";var AWe="No transponder infos";var
AWf="Dry cow info";var AWg="No nais id infos";var AWh="Registrations infos";var AWi=
"Unhandled animal list content:";var AWj="Illegal AutoRegistrationMode: ";var AWk=
"Illegal FactoryResetScope: ";var Ane="??";var AWl="Illegal EaseOfDelivery: ";var
AWm="Illegal Whereabouts: ";var AWn="Illegal breed: ";var AWo="Unisex";var AWp="Illegal animalIdGenerationMethod: ";
var AGh="Ascending";var Zf="Descending";var AWq="Illegal directionOfCountingName: ";
var ArB="Unhandled direction of counting: ";var ArC="Unhandled German state: ";var
AWr="SH";var AWs="HH";var AWt="NI";var AWu="HB";var AWv="NW";var ArD="HE";var ArE=
"RP";var ArF="BW";var ArG="BY";var AwL="SL";var Anf="BB";var AWw="MV";var AGi="SN";
var AWx="ST";var AWy="TH";var AWz="One Range Male Female";var AWA="Two Ranges Male Female";
var AGj="Illegal EartagAssignmentMode: ";var AWB="Unhandled code set value ";var
AGk="Implement in derived class";var AWC="Illegal HIT-Code: ";var AWD="Illegal ReasonOfLeaving: ";
var AGl="Illegal code: ";var AWE="Undefined";var AWF="Illegal DeviceComponent: ";
var AWG="Unhandled Device::MotherSelectionFilterMode: ";var AwM="Illegal Device::TimespanDays: ";
var AWH="Not connected";var AwN="Host";var AwO="Device";var AWI="Device CDC";var
AWJ="Host MSC";var AWK="Illegal animalIdAutoGenerationMethod: ";var AGm="Unhandled month: ";
var AWL="Illegal transponderAssignmentIdChangeMethod: ";var AWM="Unhandled animal table field: ";
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
B6:null,B2:null,CZ:function(AL){if(!AL)return;var Au=this.B6;while(!!Au){if(Au===
AL)throw new Error(B9);Au=Au.Af;}AL.AG=this.B2;if(!!this.B2)this.B2.Af=AL;this.B2=
AL;if(!this.B6)this.B6=AL;},AMl:function(){return this.B6;},AMp:function(A9Z){if(
!!A9Z)return A9Z.Af;return null;},D0:function(AGU,EF){var Au=this.B6;while(!!Au){
if(Au.ES===AGU){if(EF===1)return Au;else if(Au.Operator===EF)return Au;}Au=Au.Af;
}return null;},QC:function(AL){var Au=this.B6;while(!!Au){if(Au===AL){if(!!Au.AG
)Au.AG.Af=Au.Af;if(!!Au.Af)Au.Af.AG=Au.AG;if(this.B6===Au)this.B6=Au.Af;if(this.
B2===Au)this.B2=Au.AG;Au.Af=null;Au.AG=null;return;}Au=Au.Af;}},Gt:function(){var
Bb=A._NewObject(C.Filter,0);var Au=this.B6;while(!!Au){Bb.CZ(Au.Ac$());Au=Au.Af;
}return Bb;},_Init:function(aArg){this.__proto__=C.Filter;A.hJ++;},_Done:function(
){this.__proto__=null;A.hJ--;},_ReInit:function(){},_Mark:function(D){var B;if((
B=this.B6)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.B2)&&(B._cycle!=D))B._Mark(
B._cycle=D);if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:
null,_className:"Device::Filter"};C.FilterCriterion={Af:null,AG:null,ES:-1,Operator:
1,AaC:false,Ac$:function(){return null;},Gt:function(AL){if(!AL)return;this.ES=AL.
ES;this.Operator=AL.Operator;this.AaC=AL.AaC;},_Init:function(aArg){this.__proto__=
C.FilterCriterion;A.hJ++;},_Done:function(){this.__proto__=null;A.hJ--;},_ReInit:
function(){},_Mark:function(D){var B;if((B=this.Af)&&(B._cycle!=D))B._Mark(B._cycle=
D);if((B=this.AG)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.I)&&(B._cycle!=D
))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:"Device::FilterCriterion"
};C.Int32FilterCriterion={A3:0,Ac$:function(){var Au=A._NewObject(C.Int32FilterCriterion
,0);Au.Gt(this);return Au;},Gt:function(AL){C.FilterCriterion.Gt.call(this,AL);var
Au=(C.Int32FilterCriterion.isPrototypeOf(AL)?AL:null);if(!!Au)this.A3=Au.A3;},Initialize:
function(AX,EF,A4,Sz){this.ES=AX;this.Operator=EF;this.A3=A4;this.AaC=Sz;return this;
},_Init:function(aArg){C.FilterCriterion._Init.call(this,aArg);this.__proto__=C.
Int32FilterCriterion;},_className:"Device::Int32FilterCriterion"};C.DeviceClass={
ACf:0,ACe:0,Aun:0,YB:0,PC:null,R2:null,Qs:null,Si:null,Rs:null,Ao:null,Bq:null,Afy:
null,AmH:null,O$:null,As2:A.jm,AutoActions:A.jm,AzK:A.jm,AEN:A.jm,AEO:A.jm,AgP:A.
jm,AE7:A.jm,AE8:A.jm,AzL:A.jm,AE6:A.jm,AE_:A.jm,AzE:A.jm,AzF:A.jm,ZY:100,Ki:0,AKG:
75,Y2:3600,ARr:0,FO:5,Fx:0,IK:50000,P7:0,AD4:0,Aij:0,Apt:0,Aps:0,APn:1,APm:1,AiV:
0,APo:1,AvX:0,Aev:0,Aph:10,AR9:5,AB8:60,Aui:0,WhereAbouts:0,ARp:17,AgY:0,AvR:3,AAH:
0,Alt:0,AfA:1,Aj4:0,AaQ:0,AKy:13,APA:12,ALy:11,Breed:0,EartagNrAssignmentMode:0,
Atq:0,AAA:0,AAz:0,H$:5,AzD:2,AoY:0,APF:8,AMc:2,ASS:0,D3:0,AJQ:0,JC:0,Gender:2,WeightRecordingScope:
1,WeightRecordingMode:1,AnimalType:0,MassUnit:0,AutoRegistrationMode:0,RatingMode:
0,SyncState:0,OverlayMenu:0,TemperatureUnit:0,Language:0,MeasureState:0,ScanState:
0,Kt:3,AdD:true,AO$:false,Alo:true,AlP:false,AlL:true,Ht:false,ASA:false,AlM:false
,ASQ:false,Arc:false,ACd:false,AlA:false,UpdateActiveScreen:function(AI){if(this.
Kt===AI)return;this.Kt=AI;A.aat([this,this.ACr,this.A9b],0);},Yr:function(E){if(
this.K&&this.K.Yr)return this.K.Yr.apply(this,arguments);else return C.DeviceClass.
Bqr.apply(this,arguments);},Bqr:function(E){},A9b:function(An){this.Yr(An);},UpdateBatteryChargeState:
function(AI){if(this.ZY===AI)return;this.ZY=AI;A.aat([this,this.Aup,this.AwU],0);
},AuL:function(E){if(this.K&&this.K.AuL)return this.K.AuL.apply(this,arguments);
else return C.DeviceClass.BqD.apply(this,arguments);},BqD:function(E){A.aa8("%s"
,BG);},AwU:function(An){this.AuL(An);},UpdateChargeActive:function(AI){if(this.AlA===
AI)return;this.AlA=AI;A.aat([this,this.Aus,this.AwV],0);},ACR:function(E){if(this.
K&&this.K.ACR)return this.K.ACR.apply(this,arguments);else return C.DeviceClass.
BqJ.apply(this,arguments);},BqJ:function(E){A.aa8("%s",EV);},AwV:function(An){this.
ACR(An);},UpdateScanState:function(AI){var B;if(this.ScanState===AI)return;this.
ScanState=AI;A.aat([this,this.AQc,this.AXe],0);A._GetAutoObject(C.Helper).Bwv(this
);},Aqn:function(E){if(this.K&&this.K.Aqn)return this.K.Aqn.apply(this,arguments
);else return C.DeviceClass.Brn.apply(this,arguments);},Brn:function(E){A.aa8("%s"
,GS);},AXe:function(An){this.Aqn(An);},UpdateMeasureState:function(AI){if(this.MeasureState===
AI)return;this.MeasureState=AI;A.aat([this,this.ACw,this.AGB],0);},Au9:function(
E){if(this.K&&this.K.Au9)return this.K.Au9.apply(this,arguments);else return C.DeviceClass.
Bq6.apply(this,arguments);},Bq6:function(E){A.aa8("%s",Js);},AGB:function(An){this.
Au9(An);},UpdateTempValue:function(AI){if(this.Ki===AI)return;this.Ki=AI;A.aat([
this,this.ACA,this.AGE],0);},Avh:function(E){if(this.K&&this.K.Avh)return this.K.
Avh.apply(this,arguments);else return C.DeviceClass.Brt.apply(this,arguments);},
Brt:function(E){A.aa8("%s",IL);},AGE:function(An){this.Avh(An);},Amw:function(E){
if(this.K&&this.K.Amw)return this.K.Amw.apply(this,arguments);else return C.DeviceClass.
Bq1.apply(this,arguments);},Bq1:function(E){},A9r:function(An){this.Amw(An);},Avi:
function(E){if(this.K&&this.K.Avi)return this.K.Avi.apply(this,arguments);else return C.
DeviceClass.Bru.apply(this,arguments);},Bru:function(E){},ArK:function(An){this.
Avi(An);},ACP:function(E){if(this.K&&this.K.ACP)return this.K.ACP.apply(this,arguments
);else return C.DeviceClass.BqI.apply(this,arguments);},BqI:function(E){},A9k:function(
An){this.ACP(An);},ADk:function(E){if(this.K&&this.K.ADk)return this.K.ADk.apply(
this,arguments);else return C.DeviceClass.Bq8.apply(this,arguments);},Bq8:function(
E){},AW9:function(An){this.ADk(An);},UpdateMonitoring:function(AI){if(this.ACd===
AI)return;this.ACd=AI;A.aat([this,this.AP4,this.AW9],0);},UpdateDataTable:function(
A90){var B;switch(A90){case 0:A.ow([B=this.Ao,B.Ajk],this);break;case 1:A.ow([B=
this.Bq,B.Ajk],this);break;case 3:A.ow([B=this.Afy,B.Ajk],this);break;case 4:A.ow([
B=this.O$,B.Ajk],this);break;case 2:A.aa8("%s",OJ);break;default:A.aa8("%s%e",PH
,A90);}},AvQ:function(){if(this.K&&this.K.AvQ)return this.K.AvQ.apply(this,arguments
);else return C.DeviceClass.BrY.apply(this,arguments);},BrY:function(){},AgS:function(
){if(this.K&&this.K.AgS)return this.K.AgS.apply(this,arguments);else return C.DeviceClass.
Br1.apply(this,arguments);},Br1:function(){},Ael:function(){if(this.K&&this.K.Ael
)return this.K.Ael.apply(this,arguments);else return C.DeviceClass.BrZ.apply(this
,arguments);},BrZ:function(){},AmQ:function(){if(this.K&&this.K.AmQ)return this.
K.AmQ.apply(this,arguments);else return C.DeviceClass.Br2.apply(this,arguments);
},Br2:function(){},UpdateLanguage:function(AI){if(this.Language===AI)return;this.
Language=AI;switch(AI){case 14:A._SetLanguage(1);break;case 13:A._SetLanguage(2);
break;case 6:A._SetLanguage(3);break;case 11:A._SetLanguage(4);break;case 0:A._SetLanguage(
0);break;case 10:A._SetLanguage(5);break;case 12:A._SetLanguage(6);break;case 5:
A._SetLanguage(7);break;case 3:A._SetLanguage(8);break;case 1:A._SetLanguage(9);
break;case 8:A._SetLanguage(10);break;case 4:A._SetLanguage(11);break;case 15:A.
_SetLanguage(13);break;case 9:A._SetLanguage(15);break;case 2:A._SetLanguage(16);
break;case 7:A._SetLanguage(17);break;case 16:A._SetLanguage(18);break;default:A.
_SetLanguage(0);}A.aat([this,this.A5i,this.A9r],0);},UpdateTemperatureUnit:function(
AI){if(this.TemperatureUnit===AI)return;this.TemperatureUnit=AI;A.aat([this,this.
ApY,this.ArK],0);},UpdateBrightness:function(AI){if(this.AKG===AI)return;this.AKG=
AI;A.aat([this,this.A49,this.A9k],0);},SetSystemTime:function(Ahf){if(this.K&&this.
K.SetSystemTime)return this.K.SetSystemTime.apply(this,arguments);else return C.
DeviceClass.BrW.apply(this,arguments);},BrW:function(Ahf){},AvM:function(){if(this.
K&&this.K.AvM)return this.K.AvM.apply(this,arguments);else return C.DeviceClass.
A83.apply(this,arguments);},A83:function(){},AEe:function(){if(this.K&&this.K.AEe
)return this.K.AEe.apply(this,arguments);else return C.DeviceClass.A81.apply(this
,arguments);},A81:function(){},Bkt:function(){},UpdateOverlayMenu:function(AI){if(
this.OverlayMenu===AI)return;this.OverlayMenu=AI;A.aat([this,this.ACz,this.AGD],
0);},Cg:function(E){if(this.K&&this.K.Cg)return this.K.Cg.apply(this,arguments);
else return C.DeviceClass.Brh.apply(this,arguments);},Brh:function(E){},AGD:function(
An){this.Cg(An);},Avn:function(E){if(this.K&&this.K.Avn)return this.K.Avn.apply(
this,arguments);else return C.DeviceClass.BrD.apply(this,arguments);},BrD:function(
E){},A9B:function(An){this.Avn(An);},UpdateUnderTemp:function(AI){if(this.Y2===AI
)return;this.Y2=AI;A.aat([this,this.A5H,this.A9B],0);},UpdateSyncState:function(
AI){if(this.SyncState===AI)return;this.SyncState=AI;A.aat([this,this.AQe,this.AXg
],0);},Aa9:function(E){if(this.K&&this.K.Aa9)return this.K.Aa9.apply(this,arguments
);else return C.DeviceClass.Brs.apply(this,arguments);},Brs:function(E){A.aa8("%s"
,N0);},AXg:function(An){this.Aa9(An);},AA4:function(){if(this.K&&this.K.AA4)return this.
K.AA4.apply(this,arguments);else return C.DeviceClass.Bqj.apply(this,arguments);
},Bqj:function(){return A.jm;},UpdatePopup:function(Km,AX0,AXW,AX3){this.A5(Km,AX0
,AXW,AX3,[this,this.Bwd]);},PopupStateChanged:function(Km,Ae){if(this.K&&this.K.
PopupStateChanged)return this.K.PopupStateChanged.apply(this,arguments);else return C.
DeviceClass.BrP.apply(this,arguments);},BrP:function(Km,Ae){},ADO:function(E){if(
this.K&&this.K.ADO)return this.K.ADO.apply(this,arguments);else return C.DeviceClass.
BrF.apply(this,arguments);},BrF:function(E){},A9C:function(An){this.ADO(An);},UpdateVibrationOnKeypressEnabled:
function(AI){if(this.Arc===AI)return;this.Arc=AI;A.aat([this,this.A5I,this.A9C],
0);},Ad1:function(E){if(this.K&&this.K.Ad1)return this.K.Ad1.apply(this,arguments
);else return C.DeviceClass.BrE.apply(this,arguments);},BrE:function(E){},AGF:function(
An){this.Ad1(An);},UpdateVibrationOn:function(A_q){if(this.ASQ===A_q)return;this.
ASQ=A_q;A.aat([this,this.ACB,this.AGF],0);},A5:function(Km,AX0,AXW,AX3,Btr){var Afo=
A._NewObject(C.PopupContext,0);Afo.Id=Km;Afo.Show=AX0;Afo.AjE=AXW;Afo.Aj0=AX3;Afo.
ADX=Btr;this.AmH.Trigger(Afo,false);},Bwd:function(H){var Ar=(C.PopupContext.isPrototypeOf(
H)?H:null);if(!!Ar)this.PopupStateChanged(Ar.Id,Ar.PopupState);},Ave:function(E){
if(this.K&&this.K.Ave)return this.K.Ave.apply(this,arguments);else return C.DeviceClass.
Brm.apply(this,arguments);},Brm:function(E){},AXd:function(An){this.Ave(An);},UpdateRatingMode:
function(AI){if(this.RatingMode===AI)return;this.RatingMode=AI;A.aat([this,this.
AQb,this.AXd],0);},AdR:function(E){if(this.K&&this.K.AdR)return this.K.AdR.apply(
this,arguments);else return C.DeviceClass.BqT.apply(this,arguments);},BqT:function(
E){},ArJ:function(An){this.AdR(An);},UpdateFlashLightOn:function(A98){if(this.AlM===
A98)return;this.AlM=A98;A.aat([this,this.ApV,this.ArJ],0);},Yz:function(E){if(this.
K&&this.K.Yz)return this.K.Yz.apply(this,arguments);else return C.DeviceClass.Brx.
apply(this,arguments);},Brx:function(E){},AXh:function(An){this.Yz(An);},UpdateTopLightOn:
function(A_l){if(this.ASA===A_l)return;this.ASA=A_l;A.aat([this,this.AQg,this.AXh
],0);},Aa7:function(E){if(this.K&&this.K.Aa7)return this.K.Aa7.apply(this,arguments
);else return C.DeviceClass.Brl.apply(this,arguments);},Brl:function(E){},Bsg:function(
An){this.Aa7(An);},UpdateRGBTopLight:function(A_g){if(this.ARr===A_g)return;this.
ARr=A_g;A.aat([this,this.Bhk,this.Bsg],0);},AuK:function(E){if(this.K&&this.K.AuK
)return this.K.AuK.apply(this,arguments);else return C.DeviceClass.BqC.apply(this
,arguments);},BqC:function(E){},Br_:function(An){this.AuK(An);},UpdateAutoRegistrationMode:
function(A9W){if(this.AutoRegistrationMode===A9W)return;this.AutoRegistrationMode=
A9W;A.aat([this,this.BgL,this.Br_],0);},Aqo:function(E){if(this.K&&this.K.Aqo)return this.
K.Aqo.apply(this,arguments);else return C.DeviceClass.Bro.apply(this,arguments);
},Bro:function(E){A.aa8("%s",CJ);},AXf:function(An){this.Aqo(An);},UpdateScanTransponder:
function(Km,A_o,A_n){if(((this.PC.Id===Km)&&(this.PC.TransponderType===A_o))&&(this.
PC.TransponderProtocol===A_n))return;this.PC.OnSetId(Km);this.PC.AQ5(A_o);this.PC.
AQ4(A_n);A.aat([this,this.AQd,this.AXf],0);},Py:function(E){if(this.K&&this.K.Py
)return this.K.Py.apply(this,arguments);else return C.DeviceClass.BqL.apply(this
,arguments);},BqL:function(E){},AbI:function(An){this.Py(An);},UpdateDigitsID:function(
A94){if(this.FO===A94)return;this.FO=A94;A.aat([this,this.AaU,this.AbI],0);},Qx:
function(E){if(this.K&&this.K.Qx)return this.K.Qx.apply(this,arguments);else return C.
DeviceClass.Brg.apply(this,arguments);},Brg:function(E){},AbJ:function(An){this.
Qx(An);},UpdateOffsetID:function(A_d){if(this.Fx===A_d)return;this.Fx=A_d;A.aat([
this,this.AaV,this.AbJ],0);},ADS:function(E){if(this.K&&this.K.ADS)return this.K.
ADS.apply(this,arguments);else return C.DeviceClass.BrM.apply(this,arguments);},
BrM:function(E){A.aa8("%s",Fn);},AGG:function(An){this.ADS(An);},UpdateWeightValue:
function(AI){if(this.IK===AI)return;this.IK=AI;A.aat([this,this.ACC,this.AGG],0);
},Au7:function(E){if(this.K&&this.K.Au7)return this.K.Au7.apply(this,arguments);
else return C.DeviceClass.Bq4.apply(this,arguments);},Bq4:function(E){},AW8:function(
An){this.Au7(An);},UpdateMassUnit:function(AI){if(this.MassUnit===AI)return;this.
MassUnit=AI;A.aat([this,this.AP3,this.AW8],0);},Ap1:function(E){if(this.K&&this.
K.Ap1)return this.K.Ap1.apply(this,arguments);else return C.DeviceClass.A8X.apply(
this,arguments);},A8X:function(E){},A8_:function(An){this.Ap1(An);},Ap2:function(
E){if(this.K&&this.K.Ap2)return this.K.Ap2.apply(this,arguments);else return C.DeviceClass.
A8Y.apply(this,arguments);},A8Y:function(E){},AW2:function(An){this.Ap2(An);},UpdateActiveActions:
function(AI){if(this.P7===AI)return;this.P7=AI;A.aat([this,this.A4S,this.A8_],0);
},UpdateActiveActionsOrder:function(AI){if(this.As2===AI)return;this.As2=AI;A.aat([
this,this.APQ,this.AW2],0);},AaY:function(E){if(this.K&&this.K.AaY)return this.K.
AaY.apply(this,arguments);else return C.DeviceClass.A8Z.apply(this,arguments);},
A8Z:function(E){},A9h:function(An){this.AaY(An);},UpdateAutoActions:function(AI){
if(this.AutoActions===AI)return;this.AutoActions=AI;A.aat([this,this.A44,this.A9h
],0);},AEE:function(){if(this.K&&this.K.AEE)return this.K.AEE.apply(this,arguments
);else return C.DeviceClass.Br0.apply(this,arguments);},Br0:function(){},Aq3:function(
){if(this.K&&this.K.Aq3)return this.K.Aq3.apply(this,arguments);else return C.DeviceClass.
Br4.apply(this,arguments);},Br4:function(){},DU:function(E){if(this.K&&this.K.DU
)return this.K.DU.apply(this,arguments);else return C.DeviceClass.Bqz.apply(this
,arguments);},Bqz:function(E){},Br9:function(An){this.DU(An);},UpdateAnimalType:
function(Eg){if(this.AnimalType===Eg)return;this.AnimalType=Eg;A.aat([this,this.
Px,this.Br9],0);},Avo:function(E){if(this.K&&this.K.Avo)return this.K.Avo.apply(
this,arguments);else return C.DeviceClass.BrK.apply(this,arguments);},BrK:function(
E){},A9H:function(An){this.Avo(An);},UpdateWeightRecordingMode:function(A_s){if(
this.WeightRecordingMode===A_s)return;this.WeightRecordingMode=A_s;A.aat([this,this.
A5Q,this.A9H],0);},ADs:function(E){if(this.K&&this.K.ADs)return this.K.ADs.apply(
this,arguments);else return C.DeviceClass.Bri.apply(this,arguments);},Bri:function(
E){A.aa8("%s",N1);},AXb:function(An){this.ADs(An);},UpdatePredictedTempValue:function(
AI){if(this.AD4===AI)return;this.AD4=AI;A.aat([this,this.AP_,this.AXb],0);},Sd:function(
L0){if(this.K&&this.K.Sd)return this.K.Sd.apply(this,arguments);else return C.DeviceClass.
BrV.apply(this,arguments);},BrV:function(L0){},ACW:function(E){if(this.K&&this.K.
ACW)return this.K.ACW.apply(this,arguments);else return C.DeviceClass.BqK.apply(
this,arguments);},BqK:function(E){},AGz:function(An){this.ACW(An);},UpdateDemoMode:
function(AI){if(this.Ht===AI)return;this.Ht=AI;A.aat([this,this.ACu,this.AGz],0);
},ACG:function(E){if(this.K&&this.K.ACG)return this.K.ACG.apply(this,arguments);
else return C.DeviceClass.Bqs.apply(this,arguments);},Bqs:function(E){},A9c:function(
An){this.ACG(An);},UpdateAgeRegistration:function(A_c){if(this.Aij===A_c)return;
this.Aij=A_c;A.aat([this,this.A4X,this.A9c],0);},Avp:function(E){if(this.K&&this.
K.Avp)return this.K.Avp.apply(this,arguments);else return C.DeviceClass.BrL.apply(
this,arguments);},BrL:function(E){},A9I:function(An){this.Avp(An);},UpdateWeightRecordingScope:
function(A_h){if(this.WeightRecordingScope===A_h)return;this.WeightRecordingScope=
A_h;A.aat([this,this.A5R,this.A9I],0);},JM:function(E){if(this.K&&this.K.JM)return this.
K.JM.apply(this,arguments);else return C.DeviceClass.BqX.apply(this,arguments);}
,BqX:function(E){},AW7:function(An){this.JM(An);},UpdateGender:function(LY){if(this.
Gender===LY)return;this.Gender=LY;A.aat([this,this.VF,this.AW7],0);},Aqf:function(
E){if(this.K&&this.K.Aqf)return this.K.Aqf.apply(this,arguments);else return C.DeviceClass.
BqZ.apply(this,arguments);},BqZ:function(E){},AwZ:function(An){this.Aqf(An);},UpdateIDLastUsedMale:
function(QY){if(this.Apt===QY)return;this.Apt=QY;A.aat([this,this.Auy,this.AwZ],
0);},Aqe:function(E){if(this.K&&this.K.Aqe)return this.K.Aqe.apply(this,arguments
);else return C.DeviceClass.BqY.apply(this,arguments);},BqY:function(E){},AwY:function(
An){this.Aqe(An);},UpdateIDLastUsedFemale:function(QY){if(this.Aps===QY)return;this.
Aps=QY;A.aat([this,this.Aux,this.AwY],0);},AaX:function(E){if(this.K&&this.K.AaX
)return this.K.AaX.apply(this,arguments);else return C.DeviceClass.Bqx.apply(this
,arguments);},Bqx:function(E){},AGy:function(An){this.AaX(An);},UpdateAnimalListContent:
function(AI){if(this.JC===AI)return;this.JC=AI;A.aat([this,this.ACs,this.AGy],0);
},ACI:function(E){if(this.K&&this.K.ACI)return this.K.ACI.apply(this,arguments);
else return C.DeviceClass.Bqt.apply(this,arguments);},Bqt:function(E){},A9d:function(
An){this.ACI(An);},UpdateAlarmListAction:function(AI){if(this.AJQ===AI)return;this.
AJQ=AI;A.aat([this,this.A4Z,this.A9d],0);},ACZ:function(E){if(this.K&&this.K.ACZ
)return this.K.ACZ.apply(this,arguments);else return C.DeviceClass.BqS.apply(this
,arguments);},BqS:function(E){},A9n:function(An){this.ACZ(An);},UpdateFlashLightInMeasureState:
function(A99){if(this.AlL===A99)return;this.AlL=A99;A.aat([this,this.A5a,this.A9n
],0);},AdP:function(E){if(this.K&&this.K.AdP)return this.K.AdP.apply(this,arguments
);else return C.DeviceClass.Bqw.apply(this,arguments);},Bqw:function(E){},AW4:function(
An){this.AdP(An);},UpdateAnimalInfoContent:function(AI){if(this.D3===AI)return;this.
D3=AI;A.aat([this,this.APS,this.AW4],0);},ADR:function(E){if(this.K&&this.K.ADR)
return this.K.ADR.apply(this,arguments);else return C.DeviceClass.BrG.apply(this
,arguments);},BrG:function(E){},A9D:function(An){this.ADR(An);},UpdateWatchListAction:
function(AI){if(this.ASS===AI)return;this.ASS=AI;A.aat([this,this.A5M,this.A9D],
0);},AC0:function(E){if(this.K&&this.K.AC0)return this.K.AC0.apply(this,arguments
);else return C.DeviceClass.BqU.apply(this,arguments);},BqU:function(E){},A9p:function(
An){this.AC0(An);},UpdateFreshCowListAction:function(AI){if(this.AMc===AI)return;
this.AMc=AI;A.aat([this,this.A5c,this.A9p],0);},AqJ:function(H){if(this.K&&this.
K.AqJ)return this.K.AqJ.apply(this,arguments);else return C.DeviceClass.BrQ.apply(
this,arguments);},BrQ:function(H){},BBu:function(s){this.AqJ(s);},AqL:function(H
){if(this.K&&this.K.AqL)return this.K.AqL.apply(this,arguments);else return C.DeviceClass.
BrS.apply(this,arguments);},BrS:function(H){},BBw:function(s){this.AqL(s);},AuI:
function(E){if(this.K&&this.K.AuI)return this.K.AuI.apply(this,arguments);else return C.
DeviceClass.BqA.apply(this,arguments);},BqA:function(E){},A9f:function(An){this.
AuI(An);},Aqp:function(E){if(this.K&&this.K.Aqp)return this.K.Aqp.apply(this,arguments
);else return C.DeviceClass.Brv.apply(this,arguments);},Brv:function(E){},A9y:function(
An){this.Aqp(An);},Aqq:function(E){if(this.K&&this.K.Aqq)return this.K.Aqq.apply(
this,arguments);else return C.DeviceClass.Brw.apply(this,arguments);},Brw:function(
E){},A9z:function(An){this.Aqq(An);},AqN:function(H){if(this.K&&this.K.AqN)return this.
K.AqN.apply(this,arguments);else return C.DeviceClass.BrT.apply(this,arguments);
},BrT:function(H){},BBx:function(s){this.AqN(s);},UpdateTemperaturesLowString:function(
AI){if(this.AEO===AI)return;this.AEO=AI;A.aat([this,this.A5D,this.A9z],0);},UpdateTemperaturesHighString:
function(AI){if(this.AEN===AI)return;this.AEN=AI;A.aat([this,this.A5C,this.A9y],
0);},UpdateAnimalTypesString:function(AI){if(this.AzK===AI)return;this.AzK=AI;A.
aat([this,this.A42,this.A9f],0);},ADn:function(E){if(this.K&&this.K.ADn)return this.
K.ADn.apply(this,arguments);else return C.DeviceClass.Brf.apply(this,arguments);
},Brf:function(E){},AW$:function(An){this.ADn(An);},UpdateNoTransponderListAction:
function(AI){if(this.APF===AI)return;this.APF=AI;A.aat([this,this.AP7,this.AW$],
0);},Au2:function(E){if(this.K&&this.K.Au2)return this.K.Au2.apply(this,arguments
);else return C.DeviceClass.BqW.apply(this,arguments);},BqW:function(E){},Bsc:function(
An){this.Au2(An);},UpdateFreshCowsHideMeasured:function(AI){if(this.AlP===AI)return;
this.AlP=AI;A.aat([this,this.Bg4,this.Bsc],0);},Aqj:function(E){if(this.K&&this.
K.Aqj)return this.K.Aqj.apply(this,arguments);else return C.DeviceClass.Brc.apply(
this,arguments);},Brc:function(E){},A9u:function(An){this.Aqj(An);},UpdateNaisIdLastUsedMale:
function(Wq){if(this.ACf===Wq)return;this.ACf=Wq;A.aat([this,this.A5p,this.A9u],
0);},Aqi:function(E){if(this.K&&this.K.Aqi)return this.K.Aqi.apply(this,arguments
);else return C.DeviceClass.Brb.apply(this,arguments);},Brb:function(E){},A9t:function(
An){this.Aqi(An);},UpdateNaisIdLastUsedFemale:function(Wq){if(this.ACe===Wq)return;
this.ACe=Wq;A.aat([this,this.A5o,this.A9t],0);},Ava:function(E){if(this.K&&this.
K.Ava)return this.K.Ava.apply(this,arguments);else return C.DeviceClass.Bq$.apply(
this,arguments);},Bq$:function(E){},Aw1:function(An){this.Ava(An);},UpdateNaisIdIncrementMale:
function(Akl){if(this.APn===Akl)return;this.APn=Akl;A.aat([this,this.AuB,this.Aw1
],0);},Au$:function(E){if(this.K&&this.K.Au$)return this.K.Au$.apply(this,arguments
);else return C.DeviceClass.Bq_.apply(this,arguments);},Bq_:function(E){},Aw0:function(
An){this.Au$(An);},UpdateNaisIdIncrementFemale:function(Akl){if(this.APm===Akl)return;
this.APm=Akl;A.aat([this,this.AuA,this.Aw0],0);},UpdateFirmware:function(){if(this.
K&&this.K.UpdateFirmware)return this.K.UpdateFirmware.apply(this,arguments);else
return C.DeviceClass.A84.apply(this,arguments);},A84:function(){},Ams:function(E
){if(this.K&&this.K.Ams)return this.K.Ams.apply(this,arguments);else return C.DeviceClass.
BqF.apply(this,arguments);},BqF:function(E){},A9j:function(An){this.Ams(An);},UpdateBootloaderMessage:
function(AI){if(this.AoY===AI)return;this.AoY=AI;A.aat([this,this.A48,this.A9j],
0);},ACE:function(E){if(this.K&&this.K.ACE)return this.K.ACE.apply(this,arguments
);else return C.DeviceClass.Bqn.apply(this,arguments);},Bqn:function(E){},A89:function(
An){this.ACE(An);},UpdateActionListAction:function(AI){if(this.AzD===AI)return;this.
AzD=AI;A.aat([this,this.A4R,this.A89],0);},AuG:function(E){if(this.K&&this.K.AuG
)return this.K.AuG.apply(this,arguments);else return C.DeviceClass.Bqo.apply(this
,arguments);},Bqo:function(E){},Br8:function(An){this.AuG(An);},UpdateActionListHideMeasured:
function(AI){if(this.Alo===AI)return;this.Alo=AI;A.aat([this,this.BgH,this.Br8],
0);},Tz:function(E){if(this.K&&this.K.Tz)return this.K.Tz.apply(this,arguments);
else return C.DeviceClass.Bqv.apply(this,arguments);},Bqv:function(E){},Anh:function(
An){this.Tz(An);},UpdateAnimalIdGenerationMethod:function(A_x){if(this.H$===A_x)
return;this.H$=A_x;A.aat([this,this.Amk,this.Anh],0);},AuU:function(E){if(this.K&&
this.K.AuU)return this.K.AuU.apply(this,arguments);else return C.DeviceClass.BqM.
apply(this,arguments);},BqM:function(E){},AW5:function(An){this.AuU(An);},UpdateDirectionOfCountingFemale:
function(Ake){if(this.AAz===Ake)return;this.AAz=Ake;A.aat([this,this.APW,this.AW5
],0);},AuV:function(E){if(this.K&&this.K.AuV)return this.K.AuV.apply(this,arguments
);else return C.DeviceClass.BqN.apply(this,arguments);},BqN:function(E){},AW6:function(
An){this.AuV(An);},UpdateDirectionOfCountingMale:function(Ake){if(this.AAA===Ake
)return;this.AAA=Ake;A.aat([this,this.APX,this.AW6],0);},AuW:function(E){if(this.
K&&this.K.AuW)return this.K.AuW.apply(this,arguments);else return C.DeviceClass.
BqO.apply(this,arguments);},BqO:function(E){},AwW:function(An){this.AuW(An);},UpdateDirectionOfCountingUnisex:
function(Ake){if(this.Atq===Ake)return;this.Atq=Ake;A.aat([this,this.Auv,this.AwW
],0);},Aqg:function(E){if(this.K&&this.K.Aqg)return this.K.Aqg.apply(this,arguments
);else return C.DeviceClass.Bq0.apply(this,arguments);},Bq0:function(E){},Ani:function(
An){this.Aqg(An);},UpdateIDLastUsedUnisex:function(QY){if(this.AiV===QY)return;this.
AiV=QY;A.aat([this,this.Amn,this.Ani],0);},Aqk:function(E){if(this.K&&this.K.Aqk
)return this.K.Aqk.apply(this,arguments);else return C.DeviceClass.Brd.apply(this
,arguments);},Brd:function(E){},AW_:function(An){this.Aqk(An);},UpdateNaisIdLastUsedUnisex:
function(Wq){if(this.Aun===Wq)return;this.Aun=Wq;A.aat([this,this.AP5,this.AW_],
0);},Avb:function(E){if(this.K&&this.K.Avb)return this.K.Avb.apply(this,arguments
);else return C.DeviceClass.Bra.apply(this,arguments);},Bra:function(E){},Aw2:function(
An){this.Avb(An);},UpdateNaisIdIncrementUnisex:function(Akl){if(this.APo===Akl)return;
this.APo=Akl;A.aat([this,this.AuC,this.Aw2],0);},Ajq:function(E){if(this.K&&this.
K.Ajq)return this.K.Ajq.apply(this,arguments);else return C.DeviceClass.BqQ.apply(
this,arguments);},BqQ:function(E){},AwX:function(An){this.Ajq(An);},UpdateEartagNrAssignmentMode:
function(Akf){if(this.EartagNrAssignmentMode===Akf)return;this.EartagNrAssignmentMode=
Akf;A.aat([this,this.Auw,this.AwX],0);},NO:function(E){if(this.K&&this.K.NO)return this.
K.NO.apply(this,arguments);else return C.DeviceClass.BqH.apply(this,arguments);}
,BqH:function(E){},Bsa:function(An){this.NO(An);},UpdateBreed:function(AbQ){if(this.
Breed===AbQ)return;this.Breed=AbQ;A.aat([this,this.Aur,this.Bsa],0);},ADh:function(
E){if(this.K&&this.K.ADh)return this.K.ADh.apply(this,arguments);else return C.DeviceClass.
Bq7.apply(this,arguments);},Bq7:function(E){},Bse:function(An){this.ADh(An);},UpdateMiddlewareVersions:
function(PN,AXS,AXT,AXZ,AXH){this.R2.OnSetTimestamp(PN);this.R2.ADc(AXS);this.R2.
ADj(AXT);this.R2.ADw(AXZ);this.R2.ACV(AXH);A.aat([this,this.Bhf,this.Bse],0);},ADb:
function(E){if(this.K&&this.K.ADb)return this.K.ADb.apply(this,arguments);else return C.
DeviceClass.Bq2.apply(this,arguments);},Bq2:function(E){},Bsd:function(An){this.
ADb(An);},UpdateMainboardVersions:function(PN,AXQ,AXR,AXP,AX5,AX6,AX4){this.Qs.OnSetTimestamp(
PN);this.Qs.AC$(AXQ);this.Qs.ADa(AXR);this.Qs.AC_(AXP);this.Qs.ADJ(AX5);this.Qs.
ADK(AX6);this.Qs.ADI(AX4);A.aat([this,this.Bhd,this.Bsd],0);},ADL:function(E){if(
this.K&&this.K.ADL)return this.K.ADL.apply(this,arguments);else return C.DeviceClass.
Bry.apply(this,arguments);},Bry:function(E){},Bsk:function(An){this.ADL(An);},UpdateTorchboardVersions:
function(PN,AXQ,AXR,AXP,AX5,AX6,AX4){this.Si.OnSetTimestamp(PN);this.Si.AC$(AXQ);
this.Si.ADa(AXR);this.Si.AC_(AXP);this.Si.ADJ(AX5);this.Si.ADK(AX6);this.Si.ADI(
AX4);A.aat([this,this.BhC,this.Bsk],0);},ACL:function(E){if(this.K&&this.K.ACL)return this.
K.ACL.apply(this,arguments);else return C.DeviceClass.BqG.apply(this,arguments);
},BqG:function(E){},Br$:function(An){this.ACL(An);},UpdateBootloaderVersions:function(
PN,AXS,AXT,AXZ,AXH){this.Rs.OnSetTimestamp(PN);this.Rs.ADc(AXS);this.Rs.ADj(AXT);
this.Rs.ADw(AXZ);this.Rs.ACV(AXH);A.aat([this,this.BgN,this.Br$],0);},ACX:function(
E){if(this.K&&this.K.ACX)return this.K.ACX.apply(this,arguments);else return C.DeviceClass.
BqP.apply(this,arguments);},BqP:function(E){},A9m:function(An){this.ACX(An);},UpdateDryCowListAction:
function(AI){if(this.ALy===AI)return;this.ALy=AI;A.aat([this,this.A4_,this.A9m],
0);},AHv:function(AXJ){if(this.K&&this.K.AHv)return this.K.AHv.apply(this,arguments
);else return C.DeviceClass.Bsw.apply(this,arguments);},Bsw:function(AXJ){return false;
},ADm:function(E){if(this.K&&this.K.ADm)return this.K.ADm.apply(this,arguments);
else return C.DeviceClass.Bre.apply(this,arguments);},Bre:function(E){},A9v:function(
An){this.ADm(An);},UpdateNoNaisIdListAction:function(AI){if(this.APA===AI)return;
this.APA=AI;A.aat([this,this.A5q,this.A9v],0);},ACK:function(E){if(this.K&&this.
K.ACK)return this.K.ACK.apply(this,arguments);else return C.DeviceClass.BqE.apply(
this,arguments);},BqE:function(E){},A9i:function(An){this.ACK(An);},UpdateBirthListAction:
function(AI){if(this.AKy===AI)return;this.AKy=AI;A.aat([this,this.A46,this.A9i],
0);},BatchResetBirthNoticePending:function(){var B_=A._NewObject(C.Animal,0);var
P;var AhU=0;var Ab$=A._GetAutoObject(C.Device).Ao.Filter;var Bb=A._GetAutoObject(
C.Helper).AMi();A._GetAutoObject(C.Device).Ao.Bk(Bb);for(P=0;P<A._GetAutoObject(
C.Device).Ao.Ci();P++){B_.EU(P,A._GetAutoObject(C.Device).Ao);B_.Agy(false);B_.Cp(
A._GetAutoObject(C.Device).Ao);AhU++;}A._GetAutoObject(C.Device).Ao.Bk(Ab$);return AhU;
},UpdateTransferProgress:function(AI){if(this.AvX===AI)return;this.AvX=AI;A.aat([
this,this.AQh,this.AXi],0);},ADM:function(E){if(this.K&&this.K.ADM)return this.K.
ADM.apply(this,arguments);else return C.DeviceClass.Brz.apply(this,arguments);},
Brz:function(E){A.aa8("%s",OK);},AXi:function(An){this.ADM(An);},UpdateTransferTarget:
function(AI){if(this.Aev===AI)return;this.Aev=AI;A.aat([this,this.A5G,this.A9A],
0);},Aqr:function(E){if(this.K&&this.K.Aqr)return this.K.Aqr.apply(this,arguments
);else return C.DeviceClass.BrA.apply(this,arguments);},BrA:function(E){A.aa8("%s"
,KF);},A9A:function(An){this.Aqr(An);},Aq2:function(){if(this.K&&this.K.Aq2)return this.
K.Aq2.apply(this,arguments);else return C.DeviceClass.Br3.apply(this,arguments);
},Br3:function(){},Avd:function(E){if(this.K&&this.K.Avd)return this.K.Avd.apply(
this,arguments);else return C.DeviceClass.Brj.apply(this,arguments);},Brj:function(
E){},AXc:function(An){this.Avd(An);},UpdatePremisesID:function(QY){if(this.YB===
QY)return;this.YB=QY;A.aat([this,this.AP$,this.AXc],0);},Au_:function(E){if(this.
K&&this.K.Au_)return this.K.Au_.apply(this,arguments);else return C.DeviceClass.
Bq9.apply(this,arguments);},Bq9:function(E){},AGC:function(An){this.Au_(An);},UpdateMotherSelectionDriedOffFilter:
function(AI){if(this.AaQ===AI)return;this.AaQ=AI;A.aat([this,this.ACy,this.AGC],
0);},AC1:function(E){if(this.K&&this.K.AC1)return this.K.AC1.apply(this,arguments
);else return C.DeviceClass.BqV.apply(this,arguments);},BqV:function(E){},A9q:function(
An){this.AC1(An);},UpdateFreshCowSpan:function(AI){if(this.Aph===AI)return;this.
Aph=AI;A.aat([this,this.A5d,this.A9q],0);},UpdateUSBState:function(A_p){if(this.
Aj4===A_p)return;this.Aj4=A_p;A.aat([this,this.AaW,this.AbK],0);},ADN:function(E
){if(this.K&&this.K.ADN)return this.K.ADN.apply(this,arguments);else return C.DeviceClass.
BrC.apply(this,arguments);},BrC:function(E){A.aa8("%s",EV);},AbK:function(An){this.
ADN(An);},Aq1:function(Ag$){if(this.K&&this.K.Aq1)return this.K.Aq1.apply(this,arguments
);else return C.DeviceClass.BrX.apply(this,arguments);},BrX:function(Ag$){return A.
_NewObject(C.AiC,0);},ApG:function(){if(this.K&&this.K.ApG)return this.K.ApG.apply(
this,arguments);else return C.DeviceClass.Bqm.apply(this,arguments);},Bqm:function(
){return false;},Ao6:function(QX){if(this.K&&this.K.Ao6)return this.K.Ao6.apply(
this,arguments);else return C.DeviceClass.Bqh.apply(this,arguments);},Bqh:function(
QX){},ADz:function(E){if(this.K&&this.K.ADz)return this.K.ADz.apply(this,arguments
);else return C.DeviceClass.Brp.apply(this,arguments);},Brp:function(E){},Bsh:function(
An){this.ADz(An);},UpdateSerialNumber:function(AI){if(this.AgP===AI)return;this.
AgP=AI;A.aat([this,this.Bhq,this.Bsh],0);},AuH:function(E){if(this.K&&this.K.AuH
)return this.K.AuH.apply(this,arguments);else return C.DeviceClass.Bqu.apply(this
,arguments);},Bqu:function(E){},AW3:function(An){this.AuH(An);},UpdateAnimalIdAutoGenerationMethod:
function(A_w){if(this.AfA===A_w)return;this.AfA=A_w;A.aat([this,this.APR,this.AW3
],0);},AAn:function(){return false;},AEf:function(){return false;},ADB:function(
E){if(this.K&&this.K.ADB)return this.K.ADB.apply(this,arguments);else return C.DeviceClass.
Brq.apply(this,arguments);},Brq:function(E){},A9x:function(An){this.ADB(An);},UpdateShutdownTimer:
function(AI){if(this.AR9===AI)return;this.AR9=AI;A.aat([this,this.A5z,this.A9x],
0);},Ap8:function(E){if(this.K&&this.K.Ap8)return this.K.Ap8.apply(this,arguments
);else return C.DeviceClass.Bqy.apply(this,arguments);},Bqy:function(E){},A9e:function(
An){this.Ap8(An);},UpdateAnimalListInfoItemMode:function(AI){if(this.Alt===AI)return;
this.Alt=AI;A.aat([this,this.A40,this.A9e],0);},AqO:function(H){if(this.K&&this.
K.AqO)return this.K.AqO.apply(this,arguments);else return C.DeviceClass.BrU.apply(
this,arguments);},BrU:function(H){},BBy:function(s){this.AqO(s);},Aqu:function(E
){if(this.K&&this.K.Aqu)return this.K.Aqu.apply(this,arguments);else return C.DeviceClass.
BrI.apply(this,arguments);},BrI:function(E){},A9F:function(An){this.Aqu(An);},Aqv:
function(E){if(this.K&&this.K.Aqv)return this.K.Aqv.apply(this,arguments);else return C.
DeviceClass.BrJ.apply(this,arguments);},BrJ:function(E){},A9G:function(An){this.
Aqv(An);},UpdateWeightGainsLowString:function(AI){if(this.AE8===AI)return;this.AE8=
AI;A.aat([this,this.A5P,this.A9G],0);},UpdateWeightGainsHighString:function(AI){
if(this.AE7===AI)return;this.AE7=AI;A.aat([this,this.A5O,this.A9F],0);},AuJ:function(
E){if(this.K&&this.K.AuJ)return this.K.AuJ.apply(this,arguments);else return C.DeviceClass.
BqB.apply(this,arguments);},BqB:function(E){},A9g:function(An){this.AuJ(An);},UpdateAnimalTypesWeightGainsString:
function(AI){if(this.AzL===AI)return;this.AzL=AI;A.aat([this,this.A43,this.A9g],
0);},Aqt:function(E){if(this.K&&this.K.Aqt)return this.K.Aqt.apply(this,arguments
);else return C.DeviceClass.BrH.apply(this,arguments);},BrH:function(E){},A9E:function(
An){this.Aqt(An);},Aqw:function(E){if(this.K&&this.K.Aqw)return this.K.Aqw.apply(
this,arguments);else return C.DeviceClass.BrN.apply(this,arguments);},BrN:function(
E){},A9J:function(An){this.Aqw(An);},UpdateWeightValueBirthString:function(AI){if(
this.AE_===AI)return;this.AE_=AI;A.aat([this,this.A5S,this.A9J],0);},UpdateWeightGainsAverageString:
function(AI){if(this.AE6===AI)return;this.AE6=AI;A.aat([this,this.A5N,this.A9E],
0);},AuX:function(E){if(this.K&&this.K.AuX)return this.K.AuX.apply(this,arguments
);else return C.DeviceClass.BqR.apply(this,arguments);},BqR:function(E){},Bsb:function(
An){this.AuX(An);},UpdateEvaluationAnimalType:function(Eg){if(this.AAH===Eg)return;
this.AAH=Eg;A.aat([this,this.BgX,this.Bsb],0);},UpdateStartScreen:function(AI){if(
this.AvR===AI)return;this.AvR=AI;A.aat([this,this.Bhs,this.Bsi],0);},Avg:function(
E){if(this.K&&this.K.Avg)return this.K.Avg.apply(this,arguments);else return C.DeviceClass.
Brr.apply(this,arguments);},Brr:function(E){},Bsi:function(An){this.Avg(An);},ABS:
function(){if(this.K&&this.K.ABS)return this.K.ABS.apply(this,arguments);else return C.
DeviceClass.Bqk.apply(this,arguments);},Bqk:function(){return 1;},ABT:function(){
if(this.K&&this.K.ABT)return this.K.ABT.apply(this,arguments);else return C.DeviceClass.
Bql.apply(this,arguments);},Bql:function(){return 1;},GetCommitCount:function(){
return 1903;},GetCommitEpoch:function(){return 1692954318;},GetCommitHash:function(
){return A.kh.BdH;},GetVersionMajor:function(){return 0;},GetVersionMinor:function(
){return 9;},GetVersionRev:function(){return 9;},ADg:function(E){if(this.K&&this.
K.ADg)return this.K.ADg.apply(this,arguments);else return C.DeviceClass.Bq5.apply(
this,arguments);},Bq5:function(E){},A9s:function(An){this.ADg(An);},UpdateMaximumAgeNewOnFarm:
function(AI){if(this.AB8===AI)return;this.AB8=AI;A.aat([this,this.A5n,this.A9s],
0);},Avm:function(E){if(this.K&&this.K.Avm)return this.K.Avm.apply(this,arguments
);else return C.DeviceClass.BrB.apply(this,arguments);},BrB:function(E){},AXj:function(
An){this.Avm(An);},UpdateTransponderAssignmentIdChangeMethod:function(A_m){if(this.
AgY===A_m)return;this.AgY=A_m;A.aat([this,this.AQi,this.AXj],0);},BatchResetPurchasedNoticePending:
function(){var B_=A._NewObject(C.Animal,0);var P;var AhU=0;var Ab$=A._GetAutoObject(
C.Device).Ao.Filter;var Bb=A._GetAutoObject(C.Helper).AMs();A._GetAutoObject(C.Device
).Ao.Bk(Bb);for(P=0;P<A._GetAutoObject(C.Device).Ao.Ci();P++){B_.EU(P,A._GetAutoObject(
C.Device).Ao);B_.Agy(false);B_.Cp(A._GetAutoObject(C.Device).Ao);AhU++;}A._GetAutoObject(
C.Device).Ao.Bk(Ab$);return AhU;},ADt:function(E){if(this.K&&this.K.ADt)return this.
K.ADt.apply(this,arguments);else return C.DeviceClass.Brk.apply(this,arguments);
},Brk:function(E){},A9w:function(An){this.ADt(An);},UpdatePurchasedAnimalsListAction:
function(AI){if(this.ARp===AI)return;this.ARp=AI;A.aat([this,this.A5s,this.A9w],
0);},Bjh:function(E){},UpdateMassRecordingAutomatic:function(AI){if(this.AO$===AI
)return;this.AO$=AI;A.aat([this,this.Bhe,this.Bjh],0);},M8:function(E){if(this.K&&
this.K.M8)return this.K.M8.apply(this,arguments);else return C.DeviceClass.BrO.apply(
this,arguments);},BrO:function(E){},Bsl:function(An){this.M8(An);},UpdateWhereAbouts:
function(AeT){if(this.WhereAbouts===AeT)return;this.WhereAbouts=AeT;A.aat([this,
this.AuE,this.Bsl],0);},Ap4:function(E){if(this.K&&this.K.Ap4)return this.K.Ap4.
apply(this,arguments);else return C.DeviceClass.Bqp.apply(this,arguments);},Bqp:
function(E){},A8$:function(An){this.Ap4(An);},Ap5:function(E){if(this.K&&this.K.
Ap5)return this.K.Ap5.apply(this,arguments);else return C.DeviceClass.Bqq.apply(
this,arguments);},Bqq:function(E){},A9a:function(An){this.Ap5(An);},UpdateActiveMassRecordingFields:
function(AI){if(this.AzE===AI)return;this.AzE=AI;A.aat([this,this.A4T,this.A8$],
0);},UpdateActiveMassRecordingFieldsOrder:function(AI){if(this.AzF===AI)return;this.
AzF=AI;A.aat([this,this.A4U,this.A9a],0);},AqK:function(H){if(this.K&&this.K.AqK
)return this.K.AqK.apply(this,arguments);else return C.DeviceClass.BrR.apply(this
,arguments);},BrR:function(H){},BBv:function(s){this.AqK(s);},ADe:function(E){if(
this.K&&this.K.ADe)return this.K.ADe.apply(this,arguments);else return C.DeviceClass.
Bq3.apply(this,arguments);},Bq3:function(E){},AGA:function(An){this.ADe(An);},UpdateMassRecordingDateOfBirthMandatory:
function(AI){if(this.AdD===AI)return;this.AdD=AI;A.aat([this,this.ACv,this.AGA],
0);},ADd:function(E){this.UpdateMassRecordingCounter(E);},UpdateMassRecordingCounter:
function(AI){if(this.Aui===AI)return;this.Aui=AI;A.aat([this,this.A5m,this.ADd],
0);},ACr:function(){return this.Kt;},Aup:function(){return this.ZY;},Aus:function(
){return this.AlA;},AQc:function(){return this.ScanState;},ACw:function(){return this.
MeasureState;},ACA:function(){return this.Ki;},A5i:function(){return this.Language;
},ApY:function(){return this.TemperatureUnit;},A49:function(){return this.AKG;},
AP4:function(){return this.ACd;},ACz:function(){return this.OverlayMenu;},A5H:function(
){return this.Y2;},AQe:function(){return this.SyncState;},A5I:function(){return this.
Arc;},ACB:function(){return this.ASQ;},AQb:function(){return this.RatingMode;},ApV:
function(){return this.AlM;},AQg:function(){return this.ASA;},Bhk:function(){return this.
ARr;},BgL:function(){return this.AutoRegistrationMode;},AQd:function(){return this.
PC;},AaU:function(){return this.FO;},AaV:function(){return this.Fx;},ACC:function(
){return this.IK;},AP3:function(){return this.MassUnit;},A4S:function(){return this.
P7;},APQ:function(){return this.As2;},A44:function(){return this.AutoActions;},Px:
function(){return this.AnimalType;},A5Q:function(){return this.WeightRecordingMode;
},AP_:function(){return this.AD4;},ACu:function(){return this.Ht;},A4X:function(
){return this.Aij;},A5R:function(){return this.WeightRecordingScope;},VF:function(
){return this.Gender;},Auy:function(){return this.Apt;},Aux:function(){return this.
Aps;},ACs:function(){return this.JC;},A4Z:function(){return this.AJQ;},A5a:function(
){return this.AlL;},APS:function(){return this.D3;},A5M:function(){return this.ASS;
},A5c:function(){return this.AMc;},A42:function(){return this.AzK;},A5C:function(
){return this.AEN;},A5D:function(){return this.AEO;},AP7:function(){return this.
APF;},Bg4:function(){return this.AlP;},A5p:function(){return this.ACf;},A5o:function(
){return this.ACe;},AuB:function(){return this.APn;},AuA:function(){return this.
APm;},A48:function(){return this.AoY;},A4R:function(){return this.AzD;},BgH:function(
){return this.Alo;},Amk:function(){return this.H$;},APW:function(){return this.AAz;
},APX:function(){return this.AAA;},Auv:function(){return this.Atq;},Amn:function(
){return this.AiV;},AP5:function(){return this.Aun;},AuC:function(){return this.
APo;},Auw:function(){return this.EartagNrAssignmentMode;},Aur:function(){return this.
Breed;},Bhf:function(){return this.R2;},Bhd:function(){return this.Qs;},BhC:function(
){return this.Si;},BgN:function(){return this.Rs;},A4_:function(){return this.ALy;
},A5q:function(){return this.APA;},A46:function(){return this.AKy;},AQh:function(
){return this.AvX;},A5G:function(){return this.Aev;},AP$:function(){return this.
YB;},ACy:function(){return this.AaQ;},A5d:function(){return this.Aph;},AaW:function(
){return this.Aj4;},Bhq:function(){return this.AgP;},APR:function(){return this.
AfA;},A5z:function(){return this.AR9;},A40:function(){return this.Alt;},A5O:function(
){return this.AE7;},A5P:function(){return this.AE8;},A43:function(){return this.
AzL;},A5N:function(){return this.AE6;},A5S:function(){return this.AE_;},BgX:function(
){return this.AAH;},Bhs:function(){return this.AvR;},A5n:function(){return this.
AB8;},AQi:function(){return this.AgY;},A5s:function(){return this.ARp;},Bhe:function(
){return this.AO$;},AuE:function(){return this.WhereAbouts;},A4T:function(){return this.
AzE;},A4U:function(){return this.AzF;},ACv:function(){return this.AdD;},A5m:function(
){return this.Aui;},_Init:function(aArg){C.Table._Init.call(this.Ao={I:this},0);
C.Table._Init.call(this.Bq={I:this},0);C.Table._Init.call(this.Afy={I:this},0);A.
Core.A7R._Init.call(this.AmH={I:this},0);C.Table._Init.call(this.O$={I:this},0);
this.__proto__=C.DeviceClass;this.Ao.OnSetId(0);this.Bq.OnSetId(1);this.Afy.OnSetId(
3);this.O$.OnSetId(4);this.PC=A._NewObject(C.Transponder,0);this.R2=A._NewObject(
C.AvP,0);this.Qs=A._NewObject(C.AtS,0);this.Si=A._NewObject(C.AtS,0);this.Rs=A._NewObject(
C.AvP,0);var Lh=this._variants();if(Lh){this.K={};Lh._Init.call(this,aArg);}A.hJ++;
},_Done:function(){if(this.K)this.K._Done.call(this);this.__proto__=null;this.Ao.
_Done();this.Bq._Done();this.Afy._Done();this.AmH._Done();this.O$._Done();A.hJ--;
},_ReInit:function(){this.Ao._ReInit();this.Bq._ReInit();this.Afy._ReInit();this.
AmH._ReInit();this.O$._ReInit();if(this.K)this.K._ReInit.call(this);},_Mark:function(
D){var B;if((B=this.PC)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.R2)&&(B._cycle
!=D))B._Mark(B._cycle=D);if((B=this.Qs)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=
this.Si)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Rs)&&(B._cycle!=D))B._Mark(
B._cycle=D);if((B=this.Ao)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Bq)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.Afy)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AmH
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.O$)._cycle!=D)B._Mark(B._cycle=D);if((
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
5};C.StringFilterCriterion={A3:A.jm,Ac$:function(){var Au=A._NewObject(C.StringFilterCriterion
,0);Au.Gt(this);return Au;},Gt:function(AL){C.FilterCriterion.Gt.call(this,AL);var
Au=(C.StringFilterCriterion.isPrototypeOf(AL)?AL:null);if(!!Au)this.A3=Au.A3;},_Init:
function(aArg){C.FilterCriterion._Init.call(this,aArg);this.__proto__=C.StringFilterCriterion;
},_className:"Device::StringFilterCriterion"};C.Table={CE:function(Ab,AX){if(this.
K&&this.K.CE)return this.K.CE.apply(this,arguments);else return C.ITable.CE.apply(
this,arguments);},U9:function(Ab,AX){if(this.K&&this.K.U9)return this.K.U9.apply(
this,arguments);else return C.ITable.U9.apply(this,arguments);},HT:function(Ab,AX
){if(this.K&&this.K.HT)return this.K.HT.apply(this,arguments);else return C.ITable.
HT.apply(this,arguments);},OnSetId:function(E){if(this.K&&this.K.OnSetId)return this.
K.OnSetId.apply(this,arguments);else return C.ITable.OnSetId.apply(this,arguments
);},Ci:function(){if(this.K&&this.K.Ci)return this.K.Ci.apply(this,arguments);else
return C.ITable.Ci.apply(this,arguments);},Bk:function(E){if(this.K&&this.K.Bk)return this.
K.Bk.apply(this,arguments);else return C.ITable.Bk.apply(this,arguments);},U_:function(
Ab,AX){if(this.K&&this.K.U_)return this.K.U_.apply(this,arguments);else return C.
ITable.U_.apply(this,arguments);},RP:function(Ab,AX){if(this.K&&this.K.RP)return this.
K.RP.apply(this,arguments);else return C.ITable.RP.apply(this,arguments);},Oo:function(
){if(this.K&&this.K.Oo)return this.K.Oo.apply(this,arguments);else return C.ITable.
Oo.apply(this,arguments);},Oq:function(Ant){if(this.K&&this.K.Oq)return this.K.Oq.
apply(this,arguments);else return C.ITable.Oq.apply(this,arguments);},XN:function(
){if(this.K&&this.K.XN)return this.K.XN.apply(this,arguments);else return C.ITable.
XN.apply(this,arguments);},YM:function(Ab,AX,CW){if(this.K&&this.K.YM)return this.
K.YM.apply(this,arguments);else return C.ITable.YM.apply(this,arguments);},G$:function(
Ab,AX,CW){if(this.K&&this.K.G$)return this.K.G$.apply(this,arguments);else return C.
ITable.G$.apply(this,arguments);},YL:function(Ab,AX,CW){if(this.K&&this.K.YL)return this.
K.YL.apply(this,arguments);else return C.ITable.YL.apply(this,arguments);},M$:function(
Ab,AX,CW){if(this.K&&this.K.M$)return this.K.M$.apply(this,arguments);else return C.
ITable.M$.apply(this,arguments);},YK:function(Ab,AX,CW){if(this.K&&this.K.YK)return this.
K.YK.apply(this,arguments);else return C.ITable.YK.apply(this,arguments);},K2:function(
aColumn,A4){if(this.K&&this.K.K2)return this.K.K2.apply(this,arguments);else return C.
ITable.K2.apply(this,arguments);},LB:function(Ab,AX){if(this.K&&this.K.LB)return this.
K.LB.apply(this,arguments);else return C.ITable.LB.apply(this,arguments);},TN:function(
Ab,AX,CW){if(this.K&&this.K.TN)return this.K.TN.apply(this,arguments);else return C.
ITable.TN.apply(this,arguments);},AiN:function(aColumn,A4){if(this.K&&this.K.AiN
)return this.K.AiN.apply(this,arguments);else return C.ITable.AiN.apply(this,arguments
);},G_:function(){if(this.K&&this.K.G_)return this.K.G_.apply(this,arguments);else
return C.ITable.G_.apply(this,arguments);},AiL:function(aColumn,A4){if(this.K&&this.
K.AiL)return this.K.AiL.apply(this,arguments);else return C.ITable.AiL.apply(this
,arguments);},AfV:function(aColumn,A4){if(this.K&&this.K.AfV)return this.K.AfV.apply(
this,arguments);else return C.ITable.AfV.apply(this,arguments);},Hx:function(){if(
this.K&&this.K.Hx)return this.K.Hx.apply(this,arguments);else return C.ITable.Hx.
apply(this,arguments);},Aak:function(){if(this.K&&this.K.Aak)return this.K.Aak.apply(
this,arguments);else return C.ITable.Aak.apply(this,arguments);},Qb:function(){if(
this.K&&this.K.Qb)return this.K.Qb.apply(this,arguments);else return C.ITable.Qb.
apply(this,arguments);},_Init:function(aArg){C.ITable._Init.call(this,aArg);this.
__proto__=C.Table;var Lh=this._variants();if(Lh){this.K={};Lh._Init.call(this,aArg
);}},_Done:function(){if(this.K)this.K._Done.call(this);this.__proto__=C.ITable;
C.ITable._Done.call(this);},_ReInit:function(){C.ITable._ReInit.call(this);if(this.
K)this.K._ReInit.call(this);},_Mark:function(D){C.ITable._Mark.call(this,D);if(this.
K)this.K._Mark(D);},_variants:function(){return A.abt.Table._variants();},K:null
,_className:"Device::Table"};C.TableId={Animal:0,Rating:1,Undefined:2,AnimalGroup:
3,CalfDeregistrations:4};C.ScanState={Idle:0,Progress:1,IdScanned:2,NotFound:3,Error:
4,LAST:5};C.RatedAttribute={None:0,Feed:1,Appearance:2,Respiratory:3,Faeces:4};C.
ConverterClass={MR:null,AjY:function(Anr){var A_6;var AsP=this.ASq(Anr/100,0,A._GetAutoObject(
C.Device).TemperatureUnit);A_6=A.aap(AsP,0,1);return A_6;},A70:function(Ne){if(Ne<=
0)return 0;else if(Ne<=1)return 5;else if(Ne<=2)return 3;else if(Ne<=4)return 2;
else if(Ne<=6)return 1;else if(Ne<=8)return 4;else return 0;},AcS:function(Ne){var
a=0;switch(Ne){case 3:a=2;break;case 2:a=4;break;case 1:a=6;break;case 0:a=0;break;
case 4:a=8;break;case 5:a=1;break;default:A.aa8("%s",OL);}return a;},Aq7:function(
Eg,Q1){var Nh=A._GetAutoObject(C.Converter).Aik(Q1,Eg);switch(Nh){case 3:return 1;
case 2:return 2;case 1:return 3;case 0:return 4;default:throw new Error(Nc+Nh.toFixed(
));}},AgW:function(){var B;var D2=A._NewObject(A.Core.Bu,0).Initialize(A._GetAutoObject(
C.Helper).DK());D2.Amv(0);D2.Amy(0);D2.AmB(0);return((B=(D2.JL()|0))<0)?B+0x100000000:
B;},BdL:function(ArO){var Dj;switch(ArO){case 36:Dj=OM;break;case 40:Dj=Sr;break;
case 56:Dj=T8;break;case 70:Dj=V8;break;case 100:Dj=V9;break;case 124:Dj=I_;break;
case 156:Dj=T9;break;case 158:Dj=V_;break;case 191:Dj=V$;break;case 196:Dj=Y5;break;
case 203:Dj=Ss;break;case 208:Dj=Y6;break;case 233:Dj=Wa;break;case 246:Dj=T_;break;
case 250:Dj=T$;break;case 276:Dj=QS;break;case 300:Dj=Wb;break;case 348:Dj=ON;break;
case 372:Dj=PJ;break;case 380:Dj=Ua;break;case 392:Dj=Y7;break;case 428:Dj=Wc;break;
case 440:Dj=Y8;break;case 442:Dj=Y9;break;case 470:Dj=Wd;break;case 528:Dj=We;break;
case 578:Dj=St;break;case 616:Dj=Y_;break;case 620:Dj=Y$;break;case 642:Dj=Abz;break;
case 643:Dj=Su;break;case 703:Dj=AbA;break;case 705:Dj=AbB;break;case 724:Dj=Za;
break;case 752:Dj=Wf;break;case 756:Dj=Zb;break;case 792:Dj=AeG;break;case 804:Dj=
AeH;break;case 826:Dj=LV;break;case 840:Dj=AbC;break;default:Dj=ArO.toFixed();}return Dj;
},Am2:function(N5){return this.NZ(N5,1,false);},Av9:function(N5,AnH){return this.
NZ(N5,AnH,false);},NZ:function(N5,AnH,Bvv){var B;var Akz=A.jm;switch(A._GetAutoObject(
C.Device).MassUnit){case 0:if(Bvv)Akz=A.aaq(N5,0,0);else{var Bap=N5<0;if(AnH<3)N5=
N5+(((Bap?-1:1)*5)*(Math.pow(10,2-AnH)|0));Akz=(((((B=N5)>-2147483648)?Math.abs(
B):B)/1000)|0).toFixed();if(AnH>0)Akz=Akz+(Lg+A.aaX(A.aaq((((B=N5)>-2147483648)?
Math.abs(B):B)%1000,3,10),AnH));if(Bap)Akz=Ag3+Akz;}break;case 1:Akz=A.aap(N5/453.592
,0,AnH);break;default:A.aa8("%s%s",Am4,A._GetAutoObject(C.Device).MassUnit.toFixed(
));}return Akz;},TX:function(L1){var A07=L1.toFixed();var Bcy=A07.length;if((Bcy>=
14)&&(Bcy<=15)){var AZc=this.AvZ(L1);var Bur=A._GetAutoObject(C.Converter).BdL(AZc
);A07=(Bur+N2)+A.aar(A._GetAutoObject(C.Helper).U5(L1,0,12),12,10);}return A07;}
,AlQ:function(LY){switch(LY){case 0:return A.zW(A.abi.AN7);case 1:return A.zW(A.
abi.ABC);case 2:return A.zW(A.abi.ABH);default:{A.aa8("%s%e",Wg,LY);return null;
}}},A1O:function(Bt0){switch(Bt0){case 0:return A.zW(A.abi.At1);case 1:return A.
zW(A.abi.ABy);case 2:return A.zW(A.abi.AN1);default:throw new Error(Am5);}},AfD:
function(AHc){switch(AHc){case 0:return A.zW(A.abi.AiW);case 2:return A.zW(A.abi.
AlY);case 1:return A.zW(A.abi.Aax);case 3:switch(A._GetAutoObject(C.Device).MassUnit
){case 0:return A.zW(A.abi.At9);case 1:return A.zW(A.abi.At_);default:throw new Error(
Ag4+A._GetAutoObject(C.Device).MassUnit.toFixed());}break;case 4:return A.zW(A.abi.
ANq);case 5:return A.zW(A.abi.ANr);case 6:return A.zW(A.abi.ANv);case 7:return A.
zW(A.abi.AMQ);case 8:return A.zW(A.abi.AMX);case 9:return A.zW(A.abi.ABa);case 10:
return A.zW(A.abi.AMW);case 11:return A.zW(A.abi.AMY);default:throw new Error(Ag5+
AHc.toFixed());}},Bc7:function(Axg){switch(Axg){case 0:return A.zW(A.abi.ABF);case
3:return A.zW(A.abi.AlY);case 1:return A.zW(A.abi.Aax);case 2:return A._GetAutoObject(
A.abk.DM).A$v();default:throw new Error(Ag5+Axg.toFixed());}},BdK:function(ArO){
switch(ArO){case 977:return AbD;case 978:return Zc;case 980:return Av_;case 981:
return Av$;case 982:return Awa;case 983:return Awb;case 984:return Aj8;case 985:
return Awc;default:return A.z2(A.abg.Unknown);}},Bd4:function(AbS){switch(AbS){case
1:return 0x278A;case 2:return 0x278B;case 3:return 0x278C;case 4:return 0x278D;case
5:return 0x278E;case 6:return 0x278F;case 7:return 0x2790;case 8:return 0x2791;case
9:return 0x2792;case 10:return 0x2793;default:return 0x20;}},BlS:function(L1){if(
!L1)return-1;return(L1%100000000)|0;},Bex:function(Anq,aFilter){var B;if(!aFilter
)return AeI;var AnS=Ari;var Au=aFilter.AMl();while(!!Au){AnS=AnS+A._GetAutoObject(
C.Helper).A3t(Anq,Au);Au=aFilter.AMp(Au);if(!!Au)AnS=AnS+OO;}AnS=AnS+Sv;return AnS;
},BfL:function(A9_){var Mz=0;switch(A9_){case 14:Mz=2;break;case 13:Mz=4;break;case
6:Mz=36;break;case 11:Mz=9;break;case 0:Mz=0;break;case 10:Mz=26;break;case 12:Mz=
12;break;case 5:Mz=14;break;case 3:Mz=15;break;case 1:Mz=10;break;case 8:Mz=16;break;
case 4:Mz=20;break;case 15:Mz=27;break;case 9:Mz=31;break;case 2:Mz=13;break;case
7:Mz=35;break;case 16:Mz=37;break;default:A.aa8("%s%e",Awd,A9_);}return Mz;},Bc6:
function(Axg){switch(Axg){case 0:return 1;case 3:return 0;case 1:return 2;case 2:
switch(A._GetAutoObject(C.Device).MassUnit){case 0:return 3;case 1:return 4;default:
throw new Error(Ag4+A._GetAutoObject(C.Device).MassUnit.toFixed());}break;default:
throw new Error(Ag5+Axg.toFixed());}},Bc8:function(Any){switch(Any){case 0:return A.
zW(A.abi.ANn);case 1:return A.zW(A.abi.ABF);case 9:return A.zW(A.abi.ANx);case 4:
return A.zW(A.abi.AEd);case 6:return A.zW(A.abi.AqH);case 8:return A.zW(A.abi.AtX
);case 2:return A.zW(A.abi.Aax);case 3:return A.zW(A.abi.AlY);case 7:return A.zW(
A.abj.K0);case 5:return A.zW(A.abj.K0);case 10:switch(A._GetAutoObject(C.Device).
MassUnit){case 0:return A.zW(A.abi.At9);case 1:return A.zW(A.abi.At_);default:throw new
Error(Ag4+A._GetAutoObject(C.Device).MassUnit.toFixed());}break;case 11:return A.
zW(A.abj.K0);case 12:return A.zW(A.abj.K0);case 13:return A.zW(A.abj.K0);case 14:
return A.zW(A.abj.K0);case 18:return A.zW(A.abj.K0);case 15:return A.zW(A.abj.K0
);case 16:return A.zW(A.abj.K0);case 17:return A.zW(A.abj.K0);default:throw new Error(
Sw+Any.toFixed());}},ALc:function(ArO){switch(ArO){case 40:return 1;case 56:return 3;
case 70:return 2;case 100:return 4;case 124:return 5;case 156:return 7;case 158:
return 36;case 191:return 17;case 196:return 8;case 203:return 9;case 208:return 11;
case 233:return 12;case 246:return 14;case 250:return 15;case 276:return 10;case
300:return 16;case 348:return 18;case 372:return 19;case 380:return 20;case 392:
return 21;case 428:return 24;case 440:return 22;case 442:return 23;case 470:return 25;
case 528:return 26;case 578:return 27;case 616:return 28;case 620:return 29;case
642:return 30;case 643:return 31;case 703:return 34;case 705:return 33;case 724:
return 13;case 752:return 32;case 756:return 6;case 792:return 35;case 804:return 37;
case 826:return 38;case 840:return 39;default:return 0;}},Aey:function(L1){var AZc=
this.AvZ(L1);return this.ALc(AZc);},AvZ:function(L1){return A._GetAutoObject(C.Helper
).U5(L1,12,3)|0;},A8g:function(Anv,Eg){if(Anv<A._GetAutoObject(C.Helper).AA8(Eg)
)return 1;else if(Anv<A._GetAutoObject(C.Helper).AA7(Eg))return 2;else return 3;
},AMh:function(BtG){switch(BtG){case 1:return 1;case 2:return 2;case 3:return 3;
case 4:return 4;case 5:return 5;case 6:return 6;case 7:return 7;case 8:return 8;
case 9:return 9;case 10:return 10;case 11:return 11;case 12:return 12;case 13:return 13;
case 14:return 14;case 15:return 15;case 16:return 16;default:return 0;}},ASq:function(
A4,AG1,AG2){if(AG1===AG2)return A4;if(!AG1&&(AG2===1)){var result=((A4*9)/5)+32;
return result;}if((AG1===1)&&!AG2){var result=((A4-32)*5)/9;return result;}throw new
Error(((Arj+AG1.toFixed())+Awe)+AG2.toFixed());},A3e:function(EF){switch(EF){case
0:return Awf;case 1:return A.jm;case 2:return Awg;case 3:return Am6;case 4:return A.
z2(A.abg.Contains);case 5:return Awh;default:{A.aa8("%s%e",Ark,EF);return A.jm;}
}},A2f:function(AbQ){return this.MR.Adb(AbQ);},Bfe:function(AbQ){return this.MR.
AlC(AbQ);},Bdu:function(ArN){var Ayq=0;switch(ArN){case 0:Ayq=1;break;case 1:Ayq=
2;break;case 2:Ayq=3;break;case 3:Ayq=4;break;default:A.aa8("%s%e",KG,ArN);}return Ayq;
},Aik:function(AXB,Eg){if(AXB>=A._GetAutoObject(C.Helper).A3p(Eg))return 3;else if(
AXB>=A._GetAutoObject(C.Helper).AtO(Eg))return 2;else if(AXB<A._GetAutoObject(C.
Device).Y2)return 0;else return 1;},Ath:function(Mz){var BM=-1;switch(Mz){case 0:
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
throw new Error(Awi+Mz.toFixed());}return BM;},_Init:function(aArg){C.MR._Init.call(
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
false,IsAlarm:false,EU:function(Ab,AF){var Hq=C.Row.EU.call(this,Ab,AF);if(Hq&&!
!AF){this.OnSetId(AF.CE(Ab,0));this.TE(AF.CE(Ab,1));this.Aa3(AF.CE(Ab,2));this.Amx(
AF.CE(Ab,3));this.R7(AF.Hw(Ab,4));this.JM(AF.AMn(Ab,7));this.Ajo(AF.BeQ(Ab,6));this.
DU(AF.AlR(Ab,14));this.M7(AF.LB(Ab,22));this.M6(AF.LB(Ab,26));this.Avq(AF.IW(Ab,
13));this.AdU(AF.HT(Ab,8));this.Avj(AF.Hw(Ab,15));this.AQZ(AF.Hw(Ab,31));this.AdY(
AF.A3B(Ab,5));this.AQE(AF.IW(Ab,17));this.TC(AF.HT(Ab,11));this.AQY(AF.Hw(Ab,16)
);this.AQ1(AF.Hw(Ab,30));this.Ajw(AF.HT(Ab,9));this.AdW(AF.HT(Ab,12));this.AQ0(AF.
Hw(Ab,20));this.Avl(AF.Hw(Ab,21));this.Agx(AF.HT(Ab,10));this.Au4(AF.HT(Ab,27));
this.AC9(AF.AA2(Ab,18));this.ADE(AF.Hw(Ab,19));this.Au0(AF.AA2(Ab,23));this.Avk(
AF.Hw(Ab,24));this.AQv(AF.CE(Ab,25));this.AuR(AF.Hw(Ab,28));this.Au5(AF.CE(Ab,29
));this.Aqh(AF.HT(Ab,38));this.NO(AF.BeR(Ab,32));this.Ajr(AF.BeU(Ab,33));this.Amz(
AF.LB(Ab,35));this.M8(AF.AMw(Ab,34));this.Agy(AF.HT(Ab,37));this.ADu(AF.Be4(Ab,36
));}return Hq;},Cp:function(AF){var Hq=C.Row.Cp.call(this,AF);if(Hq&&!!AF){var Jf=
AF.Oo();if(Jf<=0)A.aa8("%s",AbE);else{var Ax6=this.Al3();if(Ax6)this.CH=AF.XN();
else AF.G$(this.CH,0,this.Id);AF.G$(this.CH,1,this.VisualId);AF.G$(this.CH,2,this.
GroupId);AF.G$(this.CH,3,this.LocationId);AF.Abf(this.CH,4,this.DateOfBirth);AF.
BkN(this.CH,7,this.Gender);AF.BkJ(this.CH,6,this.BirthType);AF.BkH(this.CH,14,this.
AnimalType);AF.TN(this.CH,22,this.TransponderId);AF.TN(this.CH,26,this.NaisId);AF.
AjP(this.CH,13,this.WorstAssessment);AF.M$(this.CH,8,this.IsAlarm);AF.Abf(this.CH
,15,this.TimestampAlarm);AF.M$(this.CH,11,this.IsFever);AF.Abf(this.CH,16,this.TimestampExpirationFeverAlarm
);AF.M$(this.CH,9,this.IsControl);AF.M$(this.CH,12,this.IsWatch);AF.Abf(this.CH,
20,this.TimestampLastControl);AF.Abf(this.CH,21,this.TimestampLastWatch);AF.M$(this.
CH,10,this.IsRegistered);AF.M$(this.CH,27,this.IsPerished);AF.Abf(this.CH,28,this.
DateOfLastCalving);AF.G$(this.CH,29,this.LactationNumber);AF.M$(this.CH,38,this.
IsDry);AF.BkL(this.CH,32,this.Breed);AF.BkM(this.CH,33,this.EaseOfDelivery);AF.TN(
this.CH,35,this.NaisIdMother);AF.BkT(this.CH,34,this.WhereAbouts);AF.M$(this.CH,
37,this.IsRegistrationNoticePending);AF.BkR(this.CH,36,this.ReasonOfLeaving);Hq=
AF.Oq(Jf);if(Ax6)this.OnSetId(AF.Aak());}}return Hq;},Gd:function(){C.Row.Gd.call(
this);this.OnSetId(-1);this.Agx(true);},G_:function(){C.Row.G_.call(this);this.OnSetId(
0);this.TE(0);this.Aa3(0);this.Amx(0);this.R7(0);this.JM(A._GetAutoObject(C.Device
).Gender);this.Ajo(0);this.DU(A._GetAutoObject(C.Device).AnimalType);this.M7(0);
this.M6(0);this.Avq(0);this.AdU(false);this.Avj(0);this.AQZ(0);this.AdY(0);this.
AQE(0);this.TC(false);this.AQ1(0);this.AQY(0);this.Ajw(false);this.AdW(false);this.
AQ0(0);this.Avl(0);this.Agx(false);this.Au4(false);this.AC9(0);this.ADE(0);this.
Au0(0);this.Avk(0);this.AQv(-1);this.AuR(0);this.Au5(0);this.Aqh(false);this.NO(
0);this.Ajr(0);this.Amz(0);this.M8(0);this.Agy(false);this.ADu(0);},OnSetId:function(
E){if(this.Id===E)return;this.Id=E;A.aat([this,this.Qv,this.OnSetId],0);},TE:function(
E){if(this.VisualId===E)return;this.VisualId=E;A.aat([this,this.ApZ,this.TE],0);
},Aa3:function(E){if(this.GroupId===E)return;this.GroupId=E;A.aat([this,this.Bg5
,this.Aa3],0);},R7:function(E){if(this.DateOfBirth===E)return;this.DateOfBirth=E;
A.aat([this,this.Aut,this.R7],0);},JM:function(E){if(this.Gender===E)return;this.
Gender=E;A.aat([this,this.VF,this.JM],0);},Ajo:function(E){if(this.BirthType===E
)return;this.BirthType=E;A.aat([this,this.APU,this.Ajo],0);},Amx:function(E){if(
this.LocationId===E)return;this.LocationId=E;A.aat([this,this.A5l,this.Amx],0);}
,AdY:function(E){if(this.LastTemperature===E)return;this.LastTemperature=E;A.aat([
this,this.A5k,this.AdY],0);},AdU:function(E){if(this.IsAlarm===E)return;this.IsAlarm=
E;A.aat([this,this.A5f,this.AdU],0);},Ajw:function(E){if(this.IsControl===E)return;
this.IsControl=E;A.aat([this,this.Bg8,this.Ajw],0);},Agx:function(E){if(this.IsRegistered===
E)return;this.IsRegistered=E;A.aat([this,this.Bg$,this.Agx],0);},AdW:function(E){
if(this.IsWatch===E)return;this.IsWatch=E;A.aat([this,this.A5h,this.AdW],0);},Avq:
function(E){if(this.WorstAssessment===E)return;this.WorstAssessment=E;A.aat([this
,this.A5T,this.Avq],0);},TC:function(E){if(this.IsFever===E)return;this.IsFever=
E;A.aat([this,this.A5g,this.TC],0);},AQ0:function(E){if(this.TimestampLastControl===
E)return;this.TimestampLastControl=E;A.aat([this,this.Bhz,this.AQ0],0);},Avl:function(
E){if(this.TimestampLastWatch===E)return;this.TimestampLastWatch=E;A.aat([this,this.
BhB,this.Avl],0);},AQE:function(E){if(this.LastRatingTemperature===E)return;this.
LastRatingTemperature=E;A.aat([this,this.Bhc,this.AQE],0);},AQY:function(E){if(this.
TimestampExpirationFeverAlarm===E)return;this.TimestampExpirationFeverAlarm=E;A.
aat([this,this.Bhx,this.AQY],0);},Avj:function(E){if(this.TimestampAlarm===E)return;
this.TimestampAlarm=E;A.aat([this,this.Bhw,this.Avj],0);},DU:function(E){if(this.
AnimalType===E)return;this.AnimalType=E;A.aat([this,this.Px,this.DU],0);},AC9:function(
E){if(this.LastBodyWeight===E)return;this.LastBodyWeight=E;A.aat([this,this.A5j,
this.AC9],0);},ADE:function(E){if(this.TimestampLastWeighing===E)return;this.TimestampLastWeighing=
E;A.aat([this,this.A5F,this.ADE],0);},M7:function(E){if(this.TransponderId===E)return;
this.TransponderId=E;A.aat([this,this.Ajl,this.M7],0);},SV:function(){return A._GetAutoObject(
C.Helper).ME(this.DateOfBirth,A._GetAutoObject(C.Helper).DK());},Au0:function(E){
if(this.FirstBodyWeight===E)return;this.FirstBodyWeight=E;A.aat([this,this.APZ,this.
Au0],0);},Avk:function(E){if(this.TimestampFirstWeighing===E)return;this.TimestampFirstWeighing=
E;A.aat([this,this.AQf,this.Avk],0);},ApF:function(){var SF=A._NewObject(A.Core.
Bu,0);SF.Initialize(this.DateOfBirth);var AY1=A._NewObject(A.Core.Bu,0);AY1.Initialize(
this.TimestampFirstWeighing);if(((SF.Year===AY1.Year)&&(SF.AaT()===AY1.AaT()))&&(
this.FirstBodyWeight>0))return true;else return false;},Ag2:function(AGV){var WG;
var AoI;if(this.TimestampLastWeighing>0){AoI=this.TimestampLastWeighing;WG=this.
LastBodyWeight;}else if(this.AnimalType===1){AoI=A._GetAutoObject(C.Helper).DK();
WG=600000;}else{AoI=this.DateOfBirth;WG=A._GetAutoObject(C.Helper).Aaj(this.AnimalType
);}return A._GetAutoObject(C.Helper).Ag2(WG,AoI,AGV,this.AnimalType);},AQv:function(
E){if(this.FirstBodyWeightId===E)return;this.FirstBodyWeightId=E;A.aat([this,this.
Bg3,this.AQv],0);},AmO:function(A_v){this.AdU(A_v);if(A_v){if(!this.TimestampAlarm
)this.Avj(A._GetAutoObject(C.Helper).DK());}else this.Avj(0);},M6:function(E){if(
this.NaisId===E)return;this.NaisId=E;A.aat([this,this.Amo,this.M6],0);},AEp:function(
A_r){this.AdW(A_r);if(A_r){if(!this.TimestampLastWatch)this.Avl(A._GetAutoObject(
C.Helper).DK());}else this.Avl(0);},AuR:function(E){if(this.DateOfLastCalving===
E)return;this.DateOfLastCalving=E;A.aat([this,this.BgT,this.AuR],0);},Au5:function(
E){if(this.LactationNumber===E)return;this.LactationNumber=E;A.aat([this,this.Bhb
,this.Au5],0);},Au4:function(E){if(this.IsPerished===E)return;this.IsPerished=E;
A.aat([this,this.Bg_,this.Au4],0);},AQ1:function(E){if(this.TimestampLastTemperature===
E)return;this.TimestampLastTemperature=E;A.aat([this,this.BhA,this.AQ1],0);},AQZ:
function(E){if(this.TimestampLastAssessment===E)return;this.TimestampLastAssessment=
E;A.aat([this,this.Bhy,this.AQZ],0);},NO:function(E){if(this.Breed===E)return;this.
Breed=E;A.aat([this,this.Aur,this.NO],0);},Ajr:function(E){if(this.EaseOfDelivery===
E)return;this.EaseOfDelivery=E;A.aat([this,this.APY,this.Ajr],0);},M8:function(E
){if(this.WhereAbouts===E)return;this.WhereAbouts=E;A.aat([this,this.AuE,this.M8
],0);},Amz:function(E){if(this.NaisIdMother===E)return;this.NaisIdMother=E;A.aat([
this,this.AP6,this.Amz],0);},ADu:function(E){if(this.ReasonOfLeaving===E)return;
this.ReasonOfLeaving=E;A.aat([this,this.Bhm,this.ADu],0);},Agy:function(E){if(this.
IsRegistrationNoticePending===E)return;this.IsRegistrationNoticePending=E;A.aat([
this,this.Bha,this.Agy],0);},Aqh:function(E){if(this.IsDry===E)return;this.IsDry=
E;A.aat([this,this.Bg9,this.Aqh],0);},Qv:function(){return this.Id;},ApZ:function(
){return this.VisualId;},Bg5:function(){return this.GroupId;},Aut:function(){return this.
DateOfBirth;},VF:function(){return this.Gender;},APU:function(){return this.BirthType;
},A5l:function(){return this.LocationId;},A5k:function(){return this.LastTemperature;
},A5f:function(){return this.IsAlarm;},Bg8:function(){return this.IsControl;},Bg$:
function(){return this.IsRegistered;},A5h:function(){return this.IsWatch;},A5T:function(
){return this.WorstAssessment;},A5g:function(){return this.IsFever;},Bhz:function(
){return this.TimestampLastControl;},BhB:function(){return this.TimestampLastWatch;
},Bhc:function(){return this.LastRatingTemperature;},Bhx:function(){return this.
TimestampExpirationFeverAlarm;},Bhw:function(){return this.TimestampAlarm;},Px:function(
){return this.AnimalType;},A5j:function(){return this.LastBodyWeight;},A5F:function(
){return this.TimestampLastWeighing;},Ajl:function(){return this.TransponderId;}
,APZ:function(){return this.FirstBodyWeight;},AQf:function(){return this.TimestampFirstWeighing;
},Bg3:function(){return this.FirstBodyWeightId;},Amo:function(){return this.NaisId;
},BgT:function(){return this.DateOfLastCalving;},Bhb:function(){return this.LactationNumber;
},Bg_:function(){return this.IsPerished;},BhA:function(){return this.TimestampLastTemperature;
},Bhy:function(){return this.TimestampLastAssessment;},Aur:function(){return this.
Breed;},APY:function(){return this.EaseOfDelivery;},AuE:function(){return this.WhereAbouts;
},AP6:function(){return this.NaisIdMother;},Bhm:function(){return this.ReasonOfLeaving;
},Bha:function(){return this.IsRegistrationNoticePending;},Bg9:function(){return this.
IsDry;},_Init:function(aArg){C.Row._Init.call(this,aArg);this.__proto__=C.Animal;
this.TableId=0;},_className:"Device::Animal"};C.Row={CH:-1,TableId:2,EU:function(
Ab,AF){if(!AF){A.aa8("%s",(Awj+this.CH.toFixed())+AFa);return false;}else if(AF.
Id!==this.TableId)throw new Error(AFb);else if((Ab<0)||(Ab>=AF.Ci())){A.aa8("%s"
,(((AFc+this.CH.toFixed())+AFd)+AF.Ci().toFixed())+Awk);return false;}this.CH=Ab;
return true;},Cp:function(AF){if(!AF){A.aa8("%s",(Awj+this.CH.toFixed())+AFa);return false;
}else if(AF.Id!==this.TableId)throw new Error(AFb);else if(this.Al3()&&AF.K6()){
A.aa8("%s",AS$+AF.Hx().toFixed());return false;}else if(!this.Al3()&&((this.CH<0
)||(this.CH>=AF.Ci()))){A.aa8("%s",(((AFc+this.CH.toFixed())+AFd)+AF.Ci().toFixed(
))+Awk);return false;}return true;},Gd:function(){this.G_();this.CH=-1;},Al3:function(
){return this.CH===-1;},G_:function(){this.CH=-2;},Apm:function(){return this.CH
!==-2;},A5t:function(){return this.CH;},A6K:function(E){this.CH=E;},_Init:function(
aArg){this.__proto__=C.Row;A.hJ++;},_Done:function(){this.__proto__=null;A.hJ--;
},_ReInit:function(){},_Mark:function(D){var B;if((B=this.I)&&(B._cycle!=D))B._Mark(
B._cycle=D);},I:null,_cycle:0,_observers:null,_className:"Device::Row"};C.Rating={
Temperature:0,Id:0,AnimalId:0,Timestamp:0,BodyWeight:0,RatingTemperature:0,Faeces:
0,Respiratory:0,Appearance:0,Feed:0,EU:function(Ab,AF){var Hq=C.Row.EU.call(this
,Ab,AF);if(Hq&&!!AF){this.OnSetId(AF.CE(Ab,0));this.OnSetAnimalId(AF.CE(Ab,1));this.
OnSetTimestamp(AF.Hw(Ab,6));this.OnSetFeed(AF.IW(Ab,2));this.OnSetAppearance(AF.
IW(Ab,3));this.OnSetRespiratory(AF.IW(Ab,4));this.OnSetFaeces(AF.IW(Ab,5));this.
OnSetTemperature(AF.A3B(Ab,7));this.OnSetBodyWeight(AF.AA2(Ab,8));this.OnSetRatingTemperature(
AF.IW(Ab,9));}return Hq;},Cp:function(AF){if(this.K&&this.K.Cp)return this.K.Cp.
apply(this,arguments);else return C.Rating.A82.apply(this,arguments);},A82:function(
AF){var Hq=C.Row.Cp.call(this,AF);if((Hq&&!!AF)&&(AF.Id===1)){var Jf=AF.Oo();if(
Jf<=0)A.aa8("%s",AbE);else{var Ax6=this.Al3();if(Ax6)this.CH=AF.XN();else AF.G$(
this.CH,0,this.Id);AF.G$(this.CH,1,this.AnimalId);AF.Abf(this.CH,6,this.Timestamp
);AF.AjP(this.CH,2,this.Feed);AF.AjP(this.CH,3,this.Appearance);AF.AjP(this.CH,4
,this.Respiratory);AF.AjP(this.CH,5,this.Faeces);AF.A7B(this.CH,7,this.Temperature
);AF.ARU(this.CH,8,this.BodyWeight);AF.AjP(this.CH,9,this.RatingTemperature);AF.
Oq(Jf);if(Ax6)this.OnSetId(AF.Aak());var Q3=A._GetAutoObject(C.Device).Ao;var Ab=
A._GetAutoObject(C.Device).Ao.K2(0,this.AnimalId);if(Ab>=0){var B_=A._NewObject(
C.Animal,0);B_.EU(Ab,Q3);if(this.Temperature>0)B_.TC(A._GetAutoObject(C.Helper).
A32(this));if((this.Temperature>0)&&A._GetAutoObject(C.Helper).AD9(this)){var Oa=
A._GetAutoObject(C.Helper).AOF(this);B_.Ajw(Oa);B_.AmO(Oa);}else if(this.Temperature>
0){var Oa=(A._GetAutoObject(C.Helper).AOF(this)||(B_.WorstAssessment===2))||(B_.
WorstAssessment===1);B_.Ajw(Oa);B_.AmO(Oa);}else{var Oa=A._GetAutoObject(C.Helper
).AOF(this)||B_.IsFever;B_.Ajw(Oa);B_.AmO(Oa);}B_.Cp(Q3);}}}return Hq;},Gd:function(
){C.Row.Gd.call(this);this.OnSetTimestamp(A._GetAutoObject(C.Helper).DK());this.
OnSetId(-1);},G_:function(){C.Row.G_.call(this);this.OnSetTimestamp(0);this.OnSetId(
0);this.OnSetAnimalId(0);this.OnSetFeed(0);this.OnSetAppearance(0);this.OnSetRespiratory(
0);this.OnSetFaeces(0);this.OnSetTemperature(0);this.OnSetBodyWeight(0);this.OnSetRatingTemperature(
0);},OnSetTemperature:function(E){if(this.Temperature===E)return;this.Temperature=
E;A.aat([this,this.Bhv,this.OnSetTemperature],0);},OnSetId:function(E){if(this.Id===
E)return;this.Id=E;A.aat([this,this.Qv,this.OnSetId],0);},OnSetAnimalId:function(
E){if(this.AnimalId===E)return;this.AnimalId=E;A.aat([this,this.BgI,this.OnSetAnimalId
],0);},OnSetFeed:function(E){if(this.Feed===E)return;this.Feed=E;A.aat([this,this.
Bg0,this.OnSetFeed],0);},OnSetAppearance:function(E){if(this.Appearance===E)return;
this.Appearance=E;A.aat([this,this.BgJ,this.OnSetAppearance],0);},OnSetRespiratory:
function(E){if(this.Respiratory===E)return;this.Respiratory=E;A.aat([this,this.Bhn
,this.OnSetRespiratory],0);},OnSetFaeces:function(E){if(this.Faeces===E)return;this.
Faeces=E;A.aat([this,this.BgY,this.OnSetFaeces],0);},OnSetTimestamp:function(E){
if(this.Timestamp===E)return;this.Timestamp=E;A.aat([this,this.A5E,this.OnSetTimestamp
],0);},BkI:function(Nf,A4){switch(Nf){case 2:this.OnSetAppearance(A4);break;case
1:this.OnSetFeed(A4);break;case 4:this.OnSetFaeces(A4);break;case 3:this.OnSetRespiratory(
A4);break;default:;}},BeO:function(Nf){switch(Nf){case 2:return this.Appearance;
case 1:return this.Feed;case 4:return this.Faeces;case 3:return this.Respiratory;
default:return 0;}},OnSetRatingTemperature:function(E){if(this.RatingTemperature===
E)return;this.RatingTemperature=E;A.aat([this,this.Bhl,this.OnSetRatingTemperature
],0);},OnSetBodyWeight:function(E){if(this.BodyWeight===E)return;this.BodyWeight=
E;A.aat([this,this.BgM,this.OnSetBodyWeight],0);},Bhv:function(){return this.Temperature;
},Qv:function(){return this.Id;},BgI:function(){return this.AnimalId;},Bg0:function(
){return this.Feed;},BgJ:function(){return this.Appearance;},Bhn:function(){return this.
Respiratory;},BgY:function(){return this.Faeces;},A5E:function(){return this.Timestamp;
},Bhl:function(){return this.RatingTemperature;},BgM:function(){return this.BodyWeight;
},_Init:function(aArg){C.Row._Init.call(this,aArg);this.__proto__=C.Rating;this.
TableId=1;var Lh=this._variants();if(Lh){this.K={};Lh._Init.call(this,aArg);}},_Done:
function(){if(this.K)this.K._Done.call(this);this.__proto__=C.Row;C.Row._Done.call(
this);},_ReInit:function(){C.Row._ReInit.call(this);if(this.K)this.K._ReInit.call(
this);},_Mark:function(D){C.Row._Mark.call(this,D);if(this.K)this.K._Mark(D);},_variants:
function(){return A.abt.Rating._variants();},K:null,_className:"Device::Rating"};
C.HelperClass={TM:null,AgM:null,ARN:null,ARO:null,V:null,Aq:null,Kq:null,Sg:null
,AcR:null,TR:null,TQ:null,Add:null,AeD:null,AeC:null,AeB:null,AeE:null,AfG:null,
AEI:0,Init:function(aArg){A.ow([this,this.ARi],this);},AjA:function(E){this.TM=E;
A.aat([this,this.ApX,this.AjA],0);},ADx:function(E){this.AgM=E;A.aat([this,this.
A5u,this.ADx],0);},Bwv:function(H){switch(A._GetAutoObject(C.Device).ScanState){
case 0:break;case 2:{var AsU=A._GetAutoObject(C.Device).PC;if(!AsU)throw new Error(
ATa);switch(AsU.TransponderType){case 1:this.AjA(AsU);break;case 2:this.AQP(AsU);
break;case 3:this.ADx(AsU);break;case 4:this.AQQ(AsU);break;case 0:break;default:
throw new Error(ATb);}}break;case 4:A._GetAutoObject(C.Device).A5(11,true,A.jm,2000
,null);break;case 3:A._GetAutoObject(C.Device).A5(12,true,A.jm,2000,null);break;
case 1:break;default:throw new Error(ATc);}},AjM:function(){this.AjA(null);this.
AQP(null);this.ADx(null);this.AQQ(null);},ADC:function(E){if(this.K&&this.K.ADC)
return this.K.ADC.apply(this,arguments);else return C.HelperClass.A80.apply(this
,arguments);},A80:function(E){A.aat([this,this.Ub,this.Uc],0);A._GetAutoObject(C.
Device).SetSystemTime(E);},Uc:function(An){this.ADC(An);},DK:function(){if(this.
K&&this.K.DK)return this.K.DK.apply(this,arguments);else return C.HelperClass.A8W.
apply(this,arguments);},A8W:function(){var B;return((B=(this.Aq.A$t()|0))<0)?B+0x100000000:
B;},Ub:function(){return this.DK();},AqM:function(){A._GetAutoObject(C.Device).Sd(-
1);this.V.G_();A.vv(this.V,0);},A4d:function(L1){if(!L1){A.aa8("%s%U",ATd,L1);return false;
}var A8=A._GetAutoObject(C.Device).Ao.AiN(22,L1);return this.HX(A8);},AlS:function(
Anq,AGU){switch(Anq){case 0:{var AnR=AGU;switch(AnR){case 14:return A.z2(A.abg.Aez
);case 6:return Arl;case 4:return A.z2(A.abg.AfM);case 28:return Awl;case 7:return A.
z2(A.abg.Aej);case 2:return A.z2(A.abg.O);case 0:return A.z2(A.abg.Hy);case 37:return QT;
case 8:return A.z2(A.abg.Alarm);case 9:return A.z2(A.abg.AAg);case 38:return A.z2(
A.abg.ALx);case 11:return A.z2(A.abg.Fever);case 27:return Awm;case 10:return A.
z2(A.abg.Bkp);case 12:return A.z2(A.abg.Aqx);case 29:return A.z2(A.abg.AOW);case
18:return A.z2(A.abg.Weighing);case 17:return ATe;case 5:return A.z2(A.abg.Temperature
);case 3:return A.z2(A.abg.BfU);case 26:return A.z2(A.abg.Yk);case 35:return A.z2(
A.abg.Yk)+ATf;case 36:return ATg;case 15:return ATh;case 24:return AFe;case 20:return AFf;
case 30:return AeJ;case 21:return Am7;case 19:return ATi;case 22:return A.z2(A.abg.
Transponder);case 1:return A.z2(A.abg.Gr);case 34:return A.z2(A.abg.I9);case 13:
return AFg;case 31:return Aj9;default:{A.aa8("%s",AFh+AnR.toFixed());return Awn+
AnR.toFixed();}}}case 1:{var AnR=AGU;switch(AnR){case 1:return A.z2(A.abg.Animal
);case 3:return A.z2(A.abg.AD8);case 8:return A.z2(A.abg.Ag1);case 5:return A.z2(
A.abg.AD_);case 2:return A.z2(A.abg.Feed);case 4:return A.z2(A.abg.AD$);case 7:return A.
z2(A.abg.Temperature);case 6:return A.z2(A.abg.Bu);default:{A.aa8("%s",ATj+AnR.toFixed(
));return Awn+AnR.toFixed();}}}default:A.aa8("%s",(ATk+Anq.toFixed())+ATl);}return A.
jm;},A3t:function(Anq,AL){var result=A.jm;if(!!AL){result=this.AlS(Anq,AL.ES);result=((
result+N2)+A._GetAutoObject(C.Converter).A3e(AL.Operator))+N2;if(!!(C.Int32FilterCriterion.
isPrototypeOf(AL)?AL:null))result=result+(C.Int32FilterCriterion.isPrototypeOf(AL
)?AL:null).A3.toFixed();else if(!!(C.UInt32FilterCriterion.isPrototypeOf(AL)?AL:
null))result=result+(C.UInt32FilterCriterion.isPrototypeOf(AL)?AL:null).A3.toFixed(
);else if(!!(C.StringFilterCriterion.isPrototypeOf(AL)?AL:null))result=result+(C.
StringFilterCriterion.isPrototypeOf(AL)?AL:null).A3;else if(!!(C.BoolFilterCriterion.
isPrototypeOf(AL)?AL:null)){if((C.BoolFilterCriterion.isPrototypeOf(AL)?AL:null).
A3)result=this.AlS(Anq,AL.ES);else result=A.jm;}else if(!!(C.GenderFilterCriterion.
isPrototypeOf(AL)?AL:null)){var Bu3=A._NewObject(C.GenderToString,0);result=result+
Bu3.Lf((C.GenderFilterCriterion.isPrototypeOf(AL)?AL:null).A3);}else if(!!(C.AnimalTypeFilterCriterion.
isPrototypeOf(AL)?AL:null)){var Bt3=A._NewObject(C.AnimalTypeToString,0);result=
result+Bt3.Lf((C.AnimalTypeFilterCriterion.isPrototypeOf(AL)?AL:null).A3);}else if(
!!(C.AssessmentFilterCriterion.isPrototypeOf(AL)?AL:null)){var Bt5=A._NewObject(
C.AssesmentToString,0);result=result+Bt5.Lf((C.AssessmentFilterCriterion.isPrototypeOf(
AL)?AL:null).A3);}else if(!!(C.UInt64FilterCriterion.isPrototypeOf(AL)?AL:null))
result=result+(C.UInt64FilterCriterion.isPrototypeOf(AL)?AL:null).A3.toFixed();else
if(!!(C.WhereAboutsFilterCriterion.isPrototypeOf(AL)?AL:null)){var Bx9=A._NewObject(
C.WhereAboutsToString,0);result=result+Bx9.Lf((C.WhereAboutsFilterCriterion.isPrototypeOf(
AL)?AL:null).A3);}else A.aa8("%s",ATm);}return result;},NU:function(aString,A_e,
Bth){var result=A.jm;var BbQ=false;var index=0;var Btj=A_e.length;while(!BbQ){var
A0w=aString.indexOf(A_e,index);if(A0w!==-1){result=(result+A.aaY(aString,index,A0w-
index))+Bth;index=A0w+Btj;}else{var A_i=aString.length;if(index<A_i)result=result+
A.aa4(aString,A_i-index);BbQ=true;}}return result;},AQP:function(E){this.ARN=E;A.
aat([this,this.Bho,this.AQP],0);},AQQ:function(E){this.ARO=E;A.aat([this,this.Bhp
,this.AQQ],0);},A$T:function(){return((A._GetAutoObject(C.Device).ScanState===2)&&
!!A._GetAutoObject(C.Device).PC)&&(A._GetAutoObject(C.Device).PC.TransponderType===
1);},Ae$:function(H){if(!this.V.Al3()&&!!this.V.Id)this.BfT(this.V.Id);},AtO:function(
Eg){return A._GetAutoObject(C.Helper).TR.Get(Eg);},A3p:function(Eg){return A._GetAutoObject(
C.Helper).TQ.Get(Eg);},A3x:function(){var P=0;var min=32767;while(P<A._GetAutoObject(
C.Helper).TR.Mx){if(A._GetAutoObject(C.Helper).TR.Get(P)<min)min=A._GetAutoObject(
C.Helper).TR.Get(P);P=P+1;}return min;},ARi:function(H){A.y_([this,this.Ae$],A._GetAutoObject(
C.Device).Ao,0);},AOF:function(DV){if(!DV)return false;var Bfq=(((this.Ax2(DV.Faeces
)||this.Ax2(DV.Feed))||this.Ax2(DV.Appearance))||this.Ax2(DV.Respiratory))||this.
Ax2(DV.RatingTemperature);return Bfq||this.A32(DV);},Ax2:function(A9U){return(A9U===
2)||(A9U===1);},A32:function(DV){return!!DV&&(DV.Temperature>A._GetAutoObject(C.
Helper).AtO(A._GetAutoObject(C.Helper).V.AnimalType));},HX:function(L0){var AZA=
false;if(L0>=0){if(L0!==this.V.CH)A._GetAutoObject(C.Device).Sd(L0);AZA=this.V.EU(
L0,A._GetAutoObject(C.Device).Ao);if(AZA)A.vv(this.V,0);}else{A._GetAutoObject(C.
Device).Sd(-1);this.V.G_();A.vv(this.V,0);}return AZA;},AgU:function(Ahb){var B;
return(((B=(this.Aq.A$t()|0))<0)?B+0x100000000:B)-this.Atl(Ahb);},Aq2:function(){
var B;A.ow([B=this.Kq,B.AvS],this);},BxD:function(H){A._GetAutoObject(C.Device).
A5(16,false,AbF,0,null);A._GetAutoObject(C.Device).A5(5,true,A.jm,0,null);},BjU:
function(H){var Ar=(C.PopupContext.isPrototypeOf(H)?H:null);if(!!Ar&&(Ar.PopupState===
5))this.Aq2();},BjI:function(E){if(this.AEI===E)return;this.AEI=E;A._GetAutoObject(
C.Device).A5(16,true,this.AEI.toFixed(),0,[this,this.BjU]);},ME:function(BsT,Bty
){var D2;var Bcl=A._NewObject(A.Core.AmU,0);var Gq=A._NewObject(A.Core.Bu,0);var
KT=A._NewObject(A.Core.Bu,0);Gq.Initialize(BsT);KT.Initialize(Bty);D2=KT.Bd3(Gq);
Bcl.Initialize2(0,D2.ABs,D2.ACc,D2.AEj);if(Gq.J(Bcl).Gu===Gq.Gu)return D2.J8;else
return D2.J8+1;},BxF:function(H){A._GetAutoObject(C.Device).UpdateMeasureState(3
);if((A._GetAutoObject(C.Device).Ki>=A._GetAutoObject(C.Device).Y2)&&(A._GetAutoObject(
C.Device).Ki<=A._GetAutoObject(C.Helper).AtO(A._GetAutoObject(C.Helper).V.AnimalType
))){var Bt2=A._GetAutoObject(C.Helper).V.Id;var Bw9=A._GetAutoObject(C.Device).Ao.
K2(0,Bt2);A._GetAutoObject(C.Device).Ao.M$(Bw9,9,false);A._GetAutoObject(C.Device
).Ao.Bk(A._GetAutoObject(C.Device).Ao.Filter);}},AIS:function(H){var Bc$=A._GetAutoObject(
C.Helper).AtO(A._GetAutoObject(C.Helper).V.AnimalType);var Bc5=A._GetAutoObject(
C.Helper).A3p(A._GetAutoObject(C.Helper).V.AnimalType);var AsO=A.aaC(Bc$-100,Bc5+
100);this.A_7(AsO);},Atl:function(Ahb){return Ahb*86400;},Aj2:function(Km){var B;
if(!!Km&&(Km<(((B=Math.trunc(Math.pow(10,A._GetAutoObject(C.Device).Fx)))<0)?B+0x10000000000000000:
B)))return-1;return A._GetAutoObject(C.Helper).U5(Km,A._GetAutoObject(C.Device).
Fx&0xFF,A._GetAutoObject(C.Device).FO&0xFF)|0;},AD9:function(DV){if(!DV)return false;
return((!!DV.Faeces||!!DV.Feed)||!!DV.Appearance)||!!DV.Respiratory;},Ag2:function(
AXN,A_k,AGV,Eg){var B;var Aot;if((AXN<650000)&&(A_k<this.DK())){var A_H=this.AfG.
AtQ(Eg);var A_G=0;if(A_H>=0)A_G=this.AeB.Get(A_H);Aot=AXN+(this.ME(A_k,this.DK()
)*A_G);if(AGV>0){var AYJ=this.AyT(AGV);Aot=(Math.trunc(((((B=Aot)<0)?B+0x10000000000000000:
B)+Math.trunc(AYJ/2))/AYJ)*AYJ)|0;}if(Aot>650000)Aot=650000;}else Aot=AXN;return Aot;
},AA9:function(DV){var AoP=A._GetAutoObject(C.Converter).AcS(DV.Faeces);if(AoP<A.
_GetAutoObject(C.Converter).AcS(DV.Feed))AoP=A._GetAutoObject(C.Converter).AcS(DV.
Feed);if(AoP<A._GetAutoObject(C.Converter).AcS(DV.Appearance))AoP=A._GetAutoObject(
C.Converter).AcS(DV.Appearance);if(AoP<A._GetAutoObject(C.Converter).AcS(DV.Respiratory
))AoP=A._GetAutoObject(C.Converter).AcS(DV.Respiratory);return A._GetAutoObject(
C.Converter).A70(AoP);},AvG:function(DV,Ne){if(!!DV){DV.OnSetFaeces(Ne);DV.OnSetFeed(
Ne);DV.OnSetAppearance(Ne);DV.OnSetRespiratory(Ne);}},BeM:function(AF,AG0,AbY,Wr
,AeP){if(!AF)throw new Error(Arm);var Bb=A._NewObject(C.Filter,0);var Aof=AF.Filter;
var N6=A._NewObject(C.Int32FilterCriterion,0);N6.Operator=0;N6.ES=1;N6.A3=AbY;Bb.
CZ(N6);if(Wr>0){var Oi=A._NewObject(C.UInt32FilterCriterion,0);Oi.Operator=2;Oi.
ES=6;Oi.A3=Wr;Bb.CZ(Oi);}if(AeP>0){var N$=A._NewObject(C.UInt32FilterCriterion,0
);N$.Operator=3;N$.ES=6;N$.A3=AeP;Bb.CZ(N$);}AF.Bk(Bb);var L2=A._NewObject(C.Int32ArrayWrapper
,0);L2.Yy(6);var P;for(P=0;P<L2.Mx;P=P+1)L2.Set(P,0);var Uk;for(P=0;P<AF.Ci();P=
P+1){Uk=AF.IW(P,AG0);L2.Set(Uk,L2.Get(Uk)+1);}AF.Bk(Aof);return L2;},YR:function(
Ahb){var B;var Gq=A._NewObject(A.Core.Bu,0);var Bck=A._NewObject(A.Core.AmU,0);Gq.
Initialize(A._GetAutoObject(C.Converter).AgW());Bck.Initialize2(Ahb,0,0,0);Gq=Gq.
Bk$(Bck);return((B=(Gq.JL()|0))<0)?B+0x100000000:B;},A3q:function(AF,AbY,AeP,Wr){
if(!AF)throw new Error(Arm);var Bb=A._NewObject(C.Filter,0);var Aof=AF.Filter;var
N6=A._NewObject(C.Int32FilterCriterion,0);N6.Operator=0;N6.ES=1;N6.A3=AbY;Bb.CZ(
N6);if(Wr>0){var Oi=A._NewObject(C.UInt32FilterCriterion,0);Oi.Operator=2;Oi.ES=
6;Oi.A3=Wr;Bb.CZ(Oi);}if(AeP>0){var N$=A._NewObject(C.UInt32FilterCriterion,0);N$.
Operator=3;N$.ES=6;N$.A3=AeP;Bb.CZ(N$);}AF.Bk(Bb);var L2=A._NewObject(C.Int32ArrayWrapper
,0);L2.Yy(6);var P;for(P=0;P<L2.Mx;P=P+1)L2.Set(P,0);var AnF=A._NewObject(C.Rating
,0);var AYC;for(P=0;P<AF.Ci();P=P+1){AnF.EU(P,AF);if(A._GetAutoObject(C.Helper).
AD9(AnF)){AYC=A._GetAutoObject(C.Helper).AA9(AnF);L2.Set(AYC,L2.Get(AYC)+1);}}AF.
Bk(Aof);return L2;},AY9:function(AF,AbY,BuA){if(!AF)throw new Error(Arm);var Bb=
A._NewObject(C.Filter,0);var Aof=AF.Filter;var N6=A._NewObject(C.Int32FilterCriterion
,0);N6.Operator=0;N6.ES=1;N6.A3=AbY;Bb.CZ(N6);var Wr=A._GetAutoObject(C.Converter
).AgW()+A._GetAutoObject(C.Helper).Atl(BuA);var AeP=Wr+A._GetAutoObject(C.Helper
).Atl(1);var Oi=A._NewObject(C.UInt32FilterCriterion,0);Oi.Operator=2;Oi.ES=6;Oi.
A3=Wr;Bb.CZ(Oi);var N$=A._NewObject(C.UInt32FilterCriterion,0);N$.Operator=3;N$.
ES=6;N$.A3=AeP;Bb.CZ(N$);AF.Bk(Bb);var AnF=A._NewObject(C.Rating,0);var Uk;var Lw=
0;var P;for(P=0;P<AF.Ci();P=P+1){AnF.EU(P,AF);if(A._GetAutoObject(C.Helper).AD9(
AnF)){Uk=A._GetAutoObject(C.Helper).AA9(AnF);if(A._GetAutoObject(C.Converter).AcS(
Uk)>A._GetAutoObject(C.Converter).AcS(Lw))Lw=Uk;}}AF.Bk(Aof);return Lw;},Al2:function(
){if((A._GetAutoObject(C.Device).WeightRecordingScope===2)||(A._GetAutoObject(C.
Device).WeightRecordingScope===1))return true;else return false;},A35:function(){
if((A._GetAutoObject(C.Device).WeightRecordingScope===2)||!A._GetAutoObject(C.Device
).WeightRecordingScope)return true;else return false;},BeN:function(AF,AG0,AbY,Wr
,AeP){if(!AF)throw new Error(Arm);var Bb=A._NewObject(C.Filter,0);var Aof=AF.Filter;
var N6=A._NewObject(C.Int32FilterCriterion,0);N6.Operator=0;N6.ES=1;N6.A3=AbY;Bb.
CZ(N6);if(Wr>0){var Oi=A._NewObject(C.UInt32FilterCriterion,0);Oi.Operator=2;Oi.
ES=6;Oi.A3=Wr;Bb.CZ(Oi);}if(AeP>0){var N$=A._NewObject(C.UInt32FilterCriterion,0
);N$.Operator=3;N$.ES=6;N$.A3=AeP;Bb.CZ(N$);}AF.Bk(Bb);var L2=A._NewObject(C.Int32ArrayWrapper
,0);L2.Yy(6);var P;for(P=0;P<L2.Mx;P=P+1)L2.Set(P,0);if(AF.Ci()>0){var Uk=AF.IW(
0,AG0);var Aox=AF.Hw(P,6);var Ad=A._NewObject(A.Core.Bu,0);Ad.Initialize(Aox);var
AoO=Uk;var AHZ=A._NewObject(A.Core.Bu,0);AHZ.Initialize(Ad.JL());for(P=1;P<AF.Ci(
);P=P+1){Uk=AF.IW(P,AG0);Aox=AF.Hw(P,6);Ad.Initialize(Aox);if((Ad.AaT()!==AHZ.AaT(
))||(Ad.Year!==AHZ.Year)){L2.Set(AoO,L2.Get(AoO)+1);AHZ.Initialize(Ad.JL());AoO=
Uk;}else if(!!Uk&&(Uk<AoO))AoO=Uk;}L2.Set(AoO,L2.Get(AoO)+1);}AF.Bk(Aof);return L2;
},AoW:function(LX){var B;var Gq=A._NewObject(A.Core.Bu,0);Gq.Initialize(LX);Gq.Amv(
0);Gq.Amy(0);Gq.AmB(0);return((B=(Gq.JL()|0))<0)?B+0x100000000:B;},ALL:function(
LX){var B;LX=LX+86400;var Gq=A._NewObject(A.Core.Bu,0);Gq.Initialize(LX);Gq.Amv(
0);Gq.Amy(0);Gq.AmB(0);return((B=(Gq.JL()|0))<0)?B+0x100000000:B;},BeP:function(
BxC,BuL,Ale,AkA){var A_2=A._GetAutoObject(C.Helper).ME(BxC,BuL);if(A_2>0)return((
AkA-Ale)/A_2)|0;return 0;},BlK:function(BsU,Btz){var Gq=A._NewObject(A.Core.Bu,0
);var KT=A._NewObject(A.Core.Bu,0);Gq.Initialize(BsU);KT.Initialize(Btz);return(
Gq.Year===KT.Year)&&(Gq.AaT()===KT.AaT());},A3v:function(){var Bb=A._GetAutoObject(
C.Helper).MY();var A$6=A._NewObject(C.UInt32FilterCriterion,0);var BtI=A._GetAutoObject(
C.Helper).YR(A._GetAutoObject(C.Device).Aph)-1;A$6.Initialize(28,2,BtI,true);Bb.
CZ(A$6);var Ug=A._NewObject(C.AnimalTypeFilterCriterion,0);Ug.Initialize(14,0,1,
true);Bb.CZ(Ug);if(A._GetAutoObject(C.Device).AlP){var Ayf=A._NewObject(C.UInt32FilterCriterion
,0);var AZw=A._GetAutoObject(C.Helper).DK()-21600;Ayf.Initialize(30,3,AZw,true);
Bb.CZ(Ayf);}return Bb;},Bks:function(){var Jf=A._GetAutoObject(C.Device).Ao.Oo();
if(Jf<=0)A.aa8("%s",AbE);else{A._GetAutoObject(C.Device).Ao.G_();A._GetAutoObject(
C.Device).Ao.Oq(Jf);}Jf=A._GetAutoObject(C.Device).Afy.Oo();if(Jf<=0)A.aa8("%s",
AbE);else{A._GetAutoObject(C.Device).Afy.G_();A._GetAutoObject(C.Device).Afy.Oq(
Jf);}Jf=A._GetAutoObject(C.Device).Bq.Oo();if(Jf<=0)A.aa8("%s",AbE);else{A._GetAutoObject(
C.Device).Bq.G_();A._GetAutoObject(C.Device).Bq.Oq(Jf);}Jf=A._GetAutoObject(C.Device
).O$.Oo();if(Jf<=0)A.aa8("%s",AbE);else{A._GetAutoObject(C.Device).O$.G_();A._GetAutoObject(
C.Device).O$.Oq(Jf);}},BfT:function(AbY){var A8=A._GetAutoObject(C.Device).Ao.K2(
0,AbY);return this.HX(A8);},AOK:function(L1){var Ahx=A._GetAutoObject(C.Device).
Ao.AfV(22,L1);return Ahx;},AMq:function(){var Bb=A._GetAutoObject(C.Helper).MY();
var Ah9=A._NewObject(C.UInt64FilterCriterion,0);Ah9.Initialize(22,0,0,true);Bb.CZ(
Ah9);return Bb;},AMk:function(Any,BuI,Sz){var Zl=-1;switch(Any){case 2:Zl=30;break;
case 3:Zl=31;break;case 10:Zl=19;break;default:A.aa8("%s%e",Sw,Any);}if(Zl<0)return null;
var Aca=A._NewObject(C.UInt32FilterCriterion,0);Aca.Initialize(Zl,3,A._GetAutoObject(
C.Helper).DK()-BuI,Sz);return Aca;},Bkr:function(aFilter){var AL=aFilter.D0(30,3
);if(!!AL)aFilter.QC(AL);AL=aFilter.D0(31,3);if(!!AL)aFilter.QC(AL);AL=aFilter.D0(
19,3);if(!!AL)aFilter.QC(AL);},AYt:function(AeY,Aw7,AF){if(AF.K6())return 5;if(AeY.
VisualId<=0)switch(Aw7){case 0:if(!AeY.NaisId)return 1;break;case 1:if(!AeY.TransponderId
)return 1;break;case 3:case 2:case 5:case 4:return 1;default:throw new Error(AFi+
Aw7.toFixed());}if((!AeY.NaisId&&!AeY.TransponderId)&&A._GetAutoObject(C.Device).
Ao.AiL(1,AeY.VisualId))return 2;if(!!AeY.NaisId&&A._GetAutoObject(C.Helper).AOI(
AeY.NaisId))return 3;if(!!AeY.TransponderId&&A._GetAutoObject(C.Helper).AOK(AeY.
TransponderId))return 4;return 0;},AoS:function(Ew){Ew.DU(A._GetAutoObject(C.Device
).AnimalType);Ew.NO(A._GetAutoObject(C.Device).Breed);Ew.R7(A._GetAutoObject(C.Helper
).DK()-A._GetAutoObject(C.Helper).Atl(A._GetAutoObject(C.Device).Aij));Ew.JM(A._GetAutoObject(
C.Device).Gender);Ew.M8(A._GetAutoObject(C.Device).WhereAbouts);},AJ1:function(QZ
,Ew){var GE=0;switch(QZ){case 0:GE=A._GetAutoObject(C.Helper).Aj2(Ew.NaisId);break;
case 1:GE=A._GetAutoObject(C.Helper).Aj2(Ew.TransponderId);break;case 3:GE=A._GetAutoObject(
C.Device).Aps;break;case 2:GE=A._GetAutoObject(C.Device).Apt;break;case 4:case 5:
GE=A._GetAutoObject(C.Device).AiV;break;default:throw new Error(AFj+QZ.toFixed()
);}return GE;},A77:function(Akf,LY,BsG,A9Y,Btc){var B;var PX=null;var WD=null;switch(
Akf){case 0:{PX=[B=A._GetAutoObject(C.Device),B.AP5,B.AW_];WD=[B=A._GetAutoObject(
C.Device),B.AuC,B.Aw2];}break;case 1:switch(LY){case 1:{PX=[B=A._GetAutoObject(C.
Device),B.A5o,B.A9t];WD=[B=A._GetAutoObject(C.Device),B.AuA,B.Aw0];}break;case 0:{
PX=[B=A._GetAutoObject(C.Device),B.A5p,B.A9u];WD=[B=A._GetAutoObject(C.Device),B.
AuB,B.Aw1];}break;case 2:{PX=[B=A._GetAutoObject(C.Device),B.AP5,B.AW_];WD=[B=A.
_GetAutoObject(C.Device),B.AuC,B.Aw2];}break;default:throw new Error(Awo+LY.toFixed(
));}break;default:throw new Error(AFk+Akf.toFixed());}if(!!PX&&!!WD){PX[2].call(
PX[0],BsG);if((WD[1].call(WD[0])>0)&&(A9Y<Btc))PX[2].call(PX[0],PX[1].call(PX[0]
)+WD[1].call(WD[0]));else if((WD[1].call(WD[0])<0)&&(A9Y>0))PX[2].call(PX[0],PX[
1].call(PX[0])+WD[1].call(WD[0]));return PX[1].call(PX[0]);}return 0;},ASJ:function(
Ew,Akf,BsN){if(!Ew||(BsN===true))return;switch(Akf){case 0:Ew.M6(A._GetAutoObject(
C.Device).Aun);break;case 1:switch(Ew.Gender){case 0:Ew.M6(A._GetAutoObject(C.Device
).ACf);break;case 1:Ew.M6(A._GetAutoObject(C.Device).ACe);break;case 2:Ew.M6(A._GetAutoObject(
C.Device).Aun);break;default:throw new Error(Awo+Ew.Gender.toFixed());}break;default:
throw new Error(AFk+Akf.toFixed());}},Bfr:function(QZ,Ew){var result=false;switch(
QZ){case 0:result=!!Ew.NaisId;break;case 1:result=!!Ew.TransponderId;break;case 3:
case 2:case 4:case 5:result=false;break;default:throw new Error(AFj+QZ.toFixed()
);}return result;},AH$:function(Ew,A9T,Aw7,ArX,AeS){switch(A9T){case 2:if(ArX<=0
)A._GetAutoObject(C.Device).A5(21,true,Ew.VisualId.toFixed(),0,AeS);else A._GetAutoObject(
C.Device).A5(48,true,(Ew.VisualId.toFixed()+Awp)+ArX.toFixed(),0,AeS);break;case
3:if(ArX<=0)A._GetAutoObject(C.Device).A5(21,true,A._GetAutoObject(C.Converter).
TX(Ew.NaisId),0,AeS);else A._GetAutoObject(C.Device).A5(48,true,(A._GetAutoObject(
C.Converter).TX(Ew.NaisId)+Awp)+ArX.toFixed(),0,AeS);break;case 4:if(ArX<=0)A._GetAutoObject(
C.Device).A5(25,true,A._GetAutoObject(C.Converter).TX(Ew.TransponderId),0,AeS);else
A._GetAutoObject(C.Device).A5(47,true,(A._GetAutoObject(C.Converter).TX(Ew.TransponderId
)+Awp)+ArX.toFixed(),0,AeS);break;case 1:switch(Aw7){case 1:A._GetAutoObject(C.Device
).A5(42,true,A.jm,0,AeS);break;case 0:A._GetAutoObject(C.Device).A5(43,true,A.jm
,0,AeS);break;case 3:case 2:case 5:case 4:A._GetAutoObject(C.Device).A5(22,true,
A.jm,0,AeS);break;default:throw new Error(AFi+Aw7.toFixed());}break;case 5:A._GetAutoObject(
C.Device).A5(41,true,A._GetAutoObject(C.Device).Ao.Hx().toFixed(),0,AeS);break;case
0:break;default:throw new Error(ATn+A9T.toFixed());}},A$x:function(A95,LY){var B;
var Ayj=null;switch(A95){case 0:Ayj=[B=A._GetAutoObject(C.Device),B.AuC,B.Aw2];break;
case 1:switch(LY){case 1:Ayj=[B=A._GetAutoObject(C.Device),B.AuA,B.Aw0];break;case
0:Ayj=[B=A._GetAutoObject(C.Device),B.AuB,B.Aw1];break;case 2:Ayj=[B=A._GetAutoObject(
C.Device),B.AuC,B.Aw2];break;default:throw new Error(Awo+LY.toFixed());}break;default:
throw new Error(ATo+A95.toFixed());}return Ayj;},A3F:function(PN,Btp){var ZJ=A._NewObject(
A.Core.Bu,0);ZJ.Initialize(PN);var Azz=ZJ.Year;var A8=A._GetAutoObject(C.Device).
O$.K2(0,Azz);var Uj=A._NewObject(C.CalfDeregistrations,0);if(A8<0){if(A._GetAutoObject(
C.Device).O$.K6())A._GetAutoObject(C.Device).A5(51,true,A._GetAutoObject(C.Device
).O$.Hx().toFixed(),0,null);else{Uj.Gd();Uj.AjC(Azz);}}else Uj.EU(A8,A._GetAutoObject(
C.Device).O$);Uj.AuT(Uj.Deregistrations+1);if(Btp)Uj.AuS(Uj.Deaths+1);Uj.Cp(A._GetAutoObject(
C.Device).O$);},AJZ:function(Lw,AkM,AkC){var AIw=0;if((AkM&&(AkC===1))||(Lw===1)
)AIw=1;else if((AkM&&(AkC===2))||(Lw===2))AIw=2;else if(!!Lw&&(Lw!==5))AIw=Lw;return AIw;
},A_7:function(BtH){var B;if(A._GetAutoObject(C.Device).MeasureState===1){this.Sg.
Cv=A._GetAutoObject(C.Device).Y2;this.Sg.BZ=BtH;this.Sg.AED(this);}},AAY:function(
){var Bb=this.AMj();var A$V=A._NewObject(C.BoolFilterCriterion,0);A$V.Initialize(
38,0,true,true);Bb.CZ(A$V);return Bb;},A3o:function(JT){var Bb=A._GetAutoObject(
C.Helper).MY();if(A._GetAutoObject(C.Device).Alo){var AZa=A._GetAutoObject(C.Helper
).AMk(JT,21600,true);Bb.CZ(AZa);}return Bb;},A3z:function(){var Bb=A._GetAutoObject(
C.Helper).MY();var Baj=A._NewObject(C.UInt64FilterCriterion,0);Baj.Initialize(26
,0,0,true);Bb.CZ(Baj);return Bb;},A3C:function(){var B;var Bb=A._GetAutoObject(C.
Helper).MY();var Ayp=(C.WhereAboutsFilterCriterion.isPrototypeOf(B=Bb.D0(34,3))?
B:null);if(!!Ayp)Bb.QC(Ayp);var Bby=A._NewObject(C.BoolFilterCriterion,0);Bby.Initialize(
37,0,true,true);Bb.CZ(Bby);return Bb;},U5:function(A4,Bti,AXO){var B;A4=Math.trunc(
A4/this.AyT(Bti));A4%=this.AyT(AXO);return A4;},AyT:function(A96){switch(A96){case
0:return 1;case 1:return 10;case 2:return 100;case 3:return 1000;case 4:return 10000;
case 5:return 100000;case 6:return 1000000;case 7:return 10000000;case 8:return 100000000;
case 9:return 1000000000;case 10:return 10000000000;case 11:return 100000000000;
case 12:return 1000000000000;case 13:return 10000000000000;case 14:return 100000000000000;
case 15:return 1000000000000000;default:throw new Error(ATp+A96.toFixed());}},MY:
function(){var Bb=A._NewObject(C.Filter,0);var BbU=A._NewObject(C.BoolFilterCriterion
,0);BbU.Initialize(10,0,true,true);Bb.CZ(BbU);var Ayp=A._NewObject(C.WhereAboutsFilterCriterion
,0);Ayp.Initialize(34,3,6,true);Bb.CZ(Ayp);return Bb;},ApE:function(aFilter){return!
this.AA1(aFilter);},AA1:function(aFilter){var Jv=0;var Au=aFilter.AMl();while(!!
Au){if(Au.AaC===false)Jv++;Au=aFilter.AMp(Au);}return Jv;},AMj:function(){var Bb=
this.MY();var Ug=A._NewObject(C.AnimalTypeFilterCriterion,0);Ug.Initialize(14,0,
1,true);Bb.CZ(Ug);return Bb;},AA6:function(){var B;var A0Y;var N8=this.Be5();A0Y=(((
B=A._GetAutoObject(C.Converter).Ath(N8))<0)?B+0x10000000000000000:B)*this.AyT(12
);if((N8===10)&&(A._GetAutoObject(C.Device).YB>0)){var Bu4=A._GetAutoObject(C.Helper
).U5(A._GetAutoObject(C.Device).YB,10,2)*this.AyT(8);A0Y+=Bu4;}return A0Y;},Be5:
function(){var N8=0;if(A._GetAutoObject(C.Device).YB>0)N8=A._GetAutoObject(C.Converter
).Aey(A._GetAutoObject(C.Device).YB);if(!N8)N8=A._GetAutoObject(C.Converter).BfL(
A._GetAutoObject(C.Device).Language);return N8;},AOI:function(Wq){var Ahx=A._GetAutoObject(
C.Device).Ao.AfV(26,Wq);return Ahx;},Ai4:function(AeT){switch(AeT){case 0:case 1:
case 2:case 3:case 4:case 5:return false;case 6:case 7:case 8:case 9:case 10:return true;
default:throw new Error(ATq+AeT.toFixed());}},Bc3:function(QZ,Ew){var GE=0;switch(
QZ){case 1:GE=A._GetAutoObject(C.Helper).Aj2(Ew.TransponderId);break;case 0:if(!
A._GetAutoObject(C.Device).EartagNrAssignmentMode)GE=A._GetAutoObject(C.Device).
AiV;else switch(Ew.Gender){case 0:GE=A._GetAutoObject(C.Device).Apt;break;case 1:
GE=A._GetAutoObject(C.Device).Aps;break;case 2:GE=A._GetAutoObject(C.Device).AiV;
break;default:throw new Error(AFl+Ew.Gender.toFixed());}break;default:throw new Error(
ATr+QZ.toFixed());}return GE;},BeB:function(){var B;var Ax0=(((((((A.z2(A.abg.AgP
)+A.z2(A.abg.Colon))+OP)+A._GetAutoObject(C.Device).AgP)+Awq)+A.z2(A.abg.Bj$))+A.
z2(A.abg.Colon))+OP)+A._GetAutoObject(A.abk.KZ).Bez(((B=A._GetAutoObject(C.Device
).Qs.Timestamp)<0)?B+0x100000000:B);return Ax0;},BeC:function(){var B;var Ax0=((((((((((((((((((((((((((((
ATs+A._GetAutoObject(C.Device).Rs.AB5.toFixed())+Lg)+A._GetAutoObject(C.Device).
Rs.ACb.toFixed())+Lg)+A._GetAutoObject(C.Device).Rs.AEg.toFixed())+OO)+A._GetAutoObject(
C.Device).Rs.AAo)+OO)+A._GetAutoObject(A.abk.KZ).AiO(((B=A._GetAutoObject(C.Device
).Rs.Timestamp)<0)?B+0x100000000:B))+OP)+ATt)+A._GetAutoObject(C.Device).R2.AB5.
toFixed())+Lg)+A._GetAutoObject(C.Device).R2.ACb.toFixed())+Lg)+A._GetAutoObject(
C.Device).R2.AEg.toFixed())+OO)+A._GetAutoObject(C.Device).R2.AAo)+OO)+A._GetAutoObject(
A.abk.KZ).AiO(((B=A._GetAutoObject(C.Device).R2.Timestamp)<0)?B+0x100000000:B))+
OP)+ATu)+A._GetAutoObject(C.Helper).Be8())+OO)+A._GetAutoObject(C.Device).GetCommitHash(
))+OO)+A._GetAutoObject(C.Device).GetCommitCount().toFixed())+OO)+A._GetAutoObject(
A.abk.KZ).AiO(A._GetAutoObject(C.Device).GetCommitEpoch());return Ax0;},BeA:function(
){var B;var Ax0=(((((((((((((((((((((ATv+A._GetAutoObject(C.Device).Qs.AO7.toFixed(
))+Lg)+A._GetAutoObject(C.Device).Qs.AO8.toFixed())+Lg)+A._GetAutoObject(C.Device
).Qs.AO6.toFixed())+OP)+A.z2(A.abg.A3h))+A.z2(A.abg.Colon))+N2)+A._GetAutoObject(
A.abk.KZ).AiO(((B=A._GetAutoObject(C.Device).Qs.Timestamp)<0)?B+0x100000000:B))+
Awq)+ATw)+A._GetAutoObject(C.Device).Si.ASC.toFixed())+Lg)+A._GetAutoObject(C.Device
).Si.ASD.toFixed())+Lg)+A._GetAutoObject(C.Device).Si.ASB.toFixed())+OP)+A.z2(A.
abg.A3h))+A.z2(A.abg.Colon))+N2)+A._GetAutoObject(A.abk.KZ).AiO(((B=A._GetAutoObject(
C.Device).Si.Timestamp)<0)?B+0x100000000:B);return Ax0;},A3A:function(AXO){var B;
var P;var AyY=A.jm;for(P=1;P<=AXO;P=P+1)if(!!A.aaC(0,2))AyY=AyY+String.fromCharCode(
A.aaC(97,104)&0xFFFF);else AyY=AyY+String.fromCharCode(A.aaC(48,57)&0xFFFF);return AyY;
},Aaj:function(Eg){var Axl=0;if(Eg===1)Eg=0;var A_M=this.AfG.AtQ(Eg);if(A_M>=0)Axl=
this.AeE.Get(A_M);return Axl;},AA8:function(Eg){var FJ=0;var Azw=this.AfG.AtQ(Eg
);if(Azw>=0)FJ=this.AeD.Get(Azw);return FJ;},AA7:function(Eg){var FJ=0;var Azw=this.
AfG.AtQ(Eg);if(Azw>=0)FJ=this.AeC.Get(Azw);return FJ;},A3s:function(){var Bb=this.
MY();var Ug=A._NewObject(C.AnimalTypeFilterCriterion,0);Ug.Initialize(14,0,A._GetAutoObject(
C.Device).AAH,true);Bb.CZ(Ug);return Bb;},AOL:function(Km){var BM=Math.trunc(Km/
1000000000000)|0;if(!BM)return 0;else if(BM>=900)return 1;else if(!A._GetAutoObject(
C.Converter).ALc(BM))return 2;else return 3;},A3E:function(){var Bb=A._GetAutoObject(
C.Helper).AMq();var Aki=A._GetAutoObject(C.Helper).BeL(3,A._GetAutoObject(C.Device
).AB8);Aki.AaC=true;Bb.CZ(Aki);return Bb;},BeL:function(EF,A9S){var Au=A._NewObject(
C.UInt32FilterCriterion,0);Au.ES=4;switch(EF){case 2:{Au.Operator=3;Au.A3=A._GetAutoObject(
C.Helper).YR(A9S);}break;case 3:{Au.Operator=2;Au.A3=A._GetAutoObject(C.Helper).
YR(A9S-1);}break;default:A.aa8("%s%e",ATx,EF);}return Au;},Be8:function(){return(((
A._GetAutoObject(C.Device).GetVersionMajor().toFixed()+Lg)+A._GetAutoObject(C.Device
).GetVersionMinor().toFixed())+Lg)+A._GetAutoObject(C.Device).GetVersionRev().toFixed(
);},Bc4:function(QZ,Ew){var GE=0;switch(QZ){case 0:GE=Ew.VisualId;break;case 2:GE=
A._GetAutoObject(C.Helper).Aj2(Ew.TransponderId);break;case 1:if(!A._GetAutoObject(
C.Device).EartagNrAssignmentMode)GE=A._GetAutoObject(C.Device).AiV;else switch(Ew.
Gender){case 0:GE=A._GetAutoObject(C.Device).Apt;break;case 1:GE=A._GetAutoObject(
C.Device).Aps;break;case 2:GE=A._GetAutoObject(C.Device).AiV;break;default:throw new
Error(AFl+Ew.Gender.toFixed());}break;default:throw new Error(ATy+QZ.toFixed());
}return GE;},A78:function(){var B;var IP=null;var SG=0;if(!A._GetAutoObject(C.Device
).EartagNrAssignmentMode){IP=[B=A._GetAutoObject(C.Device),B.Amn,B.Ani];SG=A._GetAutoObject(
C.Device).Atq;}else switch(A._GetAutoObject(C.Helper).V.Gender){case 1:{IP=[B=A.
_GetAutoObject(C.Device),B.Aux,B.AwY];SG=A._GetAutoObject(C.Device).AAz;}break;case
0:{IP=[B=A._GetAutoObject(C.Device),B.Auy,B.AwZ];SG=A._GetAutoObject(C.Device).AAA;
}break;case 2:{IP=[B=A._GetAutoObject(C.Device),B.Amn,B.Ani];SG=A._GetAutoObject(
C.Device).Atq;}break;default:;}if(!!IP)switch(SG){case 1:IP[2].call(IP[0],A._GetAutoObject(
C.Helper).V.VisualId-1);break;case 0:IP[2].call(IP[0],A._GetAutoObject(C.Helper).
V.VisualId+1);break;default:;}},A36:function(Wq,Ew){return(Ew.NaisId!==Wq)&&this.
AOI(Wq);},BfA:function(L1,Ew){return(Ew.TransponderId!==L1)&&this.AOK(L1);},AMi:
function(){var Bb=A._GetAutoObject(C.Helper).A3C();var Ayh=A._NewObject(C.UInt64FilterCriterion
,0);Ayh.Initialize(35,5,0,true);Bb.CZ(Ayh);return Bb;},AMs:function(){var Bb=A._GetAutoObject(
C.Helper).A3C();var Ayh=A._NewObject(C.UInt64FilterCriterion,0);Ayh.Initialize(35
,0,0,true);Bb.CZ(Ayh);return Bb;},Mw:function(AXF,Aha){AXF.Ai(Aha);AXF.Ap(Aha);AXF.
X(Aha);},A2u:function(Ahc){var B;var Z;var AZM=false;var Wx=Ahc.U6(null,0x1);while(
!!Wx&&(((B=Wx)?B.__proto__:null)!==A.Core.Y)){Z=(A.kh.Cf.isPrototypeOf(Wx)?Wx:null
);if(!!Z){Z.Be(AZM);AZM=!AZM;}Wx=Ahc.U6(Wx,0x1);}},ApX:function(){return this.TM;
},A5u:function(){return this.AgM;},Bho:function(){return this.ARN;},Bhp:function(
){return this.ARO;},Bht:function(){return this.AEI;},_Init:function(aArg){C.AlJ.
_Init.call(this,aArg);C.Animal._Init.call(this.V={I:this},0);A.Core.Bu._Init.call(
this.Aq={I:this},0);A.abm.F_._Init.call(this.Kq={I:this},0);A.abm.F_._Init.call(
this.Sg={I:this},0);C.AKj._Init.call(this.AcR={I:this},0);C.ASs._Init.call(this.
TR={I:this},0);C.ASr._Init.call(this.TQ={I:this},0);C.UR._Init.call(this.Add={I:
this},0);C.AS3._Init.call(this.AeD={I:this},0);C.AS2._Init.call(this.AeC={I:this
},0);C.AS1._Init.call(this.AeB={I:this},0);C.AS5._Init.call(this.AeE={I:this},0);
C.AKk._Init.call(this.AfG={I:this},0);this.__proto__=C.HelperClass;var B;this.Kq.
IF(1);this.Kq.Fz(3000);this.Kq.BZ=100;this.Sg.AuY(10);this.Sg.VJ(5);this.Sg.IF(1
);this.Sg.Fz(4000);this.Add.BZ=false;this.Add.Cv=true;this.Add.IF(1);this.Add.Fz(
100);this.Kq.R4=[this,this.BxD];this.Kq.Q=[this,this.Bht,this.BjI];this.Sg.R4=[this
,this.BxF];this.Sg.Q=[B=A._GetAutoObject(C.Device),B.ACA,B.AGE];this.Add.Q=[B=A.
_GetAutoObject(C.Device),B.ACB,B.AGF];this.Init(aArg);var Lh=this._variants();if(
Lh){this.K={};Lh._Init.call(this,aArg);}},_Done:function(){if(this.K)this.K._Done.
call(this);this.__proto__=C.AlJ;this.V._Done();this.Aq._Done();this.Kq._Done();this.
Sg._Done();this.AcR._Done();this.TR._Done();this.TQ._Done();this.Add._Done();this.
AeD._Done();this.AeC._Done();this.AeB._Done();this.AeE._Done();this.AfG._Done();
C.AlJ._Done.call(this);},_ReInit:function(){C.AlJ._ReInit.call(this);this.V._ReInit(
);this.Aq._ReInit();this.Kq._ReInit();this.Sg._ReInit();this.AcR._ReInit();this.
TR._ReInit();this.TQ._ReInit();this.Add._ReInit();this.AeD._ReInit();this.AeC._ReInit(
);this.AeB._ReInit();this.AeE._ReInit();this.AfG._ReInit();if(this.K)this.K._ReInit.
call(this);},_Mark:function(D){var B;C.AlJ._Mark.call(this,D);if((B=this.TM)&&(B.
_cycle!=D))B._Mark(B._cycle=D);if((B=this.AgM)&&(B._cycle!=D))B._Mark(B._cycle=D
);if((B=this.ARN)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.ARO)&&(B._cycle!=
D))B._Mark(B._cycle=D);if((B=this.V)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Aq
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Kq)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Sg)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AcR)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.TR)._cycle!=D)B._Mark(B._cycle=D);if((B=this.TQ)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Add)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AeD)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.AeC)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
AeB)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AeE)._cycle!=D)B._Mark(B._cycle=D);
if((B=this.AfG)._cycle!=D)B._Mark(B._cycle=D);if(this.K)this.K._Mark(D);},_variants:
function(){return A.abt.HelperClass._variants();},K:null,_className:"Device::HelperClass"
};C.Helper={_Init:function(){C.HelperClass._Init.call(this,0);},_variants:function(
){return this;},_this:null};C.BoolFilterCriterion={A3:false,Ac$:function(){var Au=
A._NewObject(C.BoolFilterCriterion,0);Au.Gt(this);return Au;},Gt:function(AL){C.
FilterCriterion.Gt.call(this,AL);var Au=(C.BoolFilterCriterion.isPrototypeOf(AL)?
AL:null);if(!!Au)this.A3=Au.A3;},Initialize:function(AX,EF,A4,Sz){this.ES=AX;this.
Operator=EF;this.A3=A4;this.AaC=Sz;return this;},_Init:function(aArg){C.FilterCriterion.
_Init.call(this,aArg);this.__proto__=C.BoolFilterCriterion;},_className:"Device::BoolFilterCriterion"
};C.UInt32FilterCriterion={A3:0,Ac$:function(){var Au=A._NewObject(C.UInt32FilterCriterion
,0);Au.Gt(this);return Au;},Gt:function(AL){C.FilterCriterion.Gt.call(this,AL);var
Au=(C.UInt32FilterCriterion.isPrototypeOf(AL)?AL:null);if(!!Au)this.A3=Au.A3;},Initialize:
function(AX,EF,A4,Sz){this.ES=AX;this.Operator=EF;this.A3=A4;this.AaC=Sz;return this;
},_Init:function(aArg){C.FilterCriterion._Init.call(this,aArg);this.__proto__=C.
UInt32FilterCriterion;},_className:"Device::UInt32FilterCriterion"};C.OverlayMenu={
None:0,Home:1,AutoAction:2,MenuItemSettings:3,RatingSettings:4,WeighingSettings:
5,Options:6,AnimalSearch:7,ActionSettings:8,MeasurementReady:9,AnimalMultiInfoMenu:
10,AnimalSearchUnfiltered:11,AnimalSearchDriedOff:12,MassRecordingMenu:13,MassRecordingDefaults:
14,MassRecordingFields:15,LAST:16};C.EnumToString={Ca:function(A$){throw new Error(
Arn+A$.toFixed());},Lf:function(A$){return this.Ca(A$);},_Init:function(aArg){this.
__proto__=C.EnumToString;A.hJ++;},_Done:function(){this.__proto__=null;A.hJ--;},
_ReInit:function(){},_Mark:function(D){var B;if((B=this.I)&&(B._cycle!=D))B._Mark(
B._cycle=D);},I:null,_cycle:0,_observers:null,_className:"Device::EnumToString"};
C.ScreenTypeToString={Ca:function(A$){var AHN=A$;var Bt;switch(AHN){case 3:Bt=A.
z2(A.abg.AtW);break;case 34:Bt=A.z2(A.abg.O6);break;case 35:Bt=A.z2(A.abg.UG);break;
case 47:Bt=A.z2(A.abg.AMg);break;default:Bt=this.BlL(A$);}return Bt;},BlL:function(
A$){var AHN=A$;var Bt=A.jm;switch(AHN){case 0:Bt=Awr;break;case 2:Bt=AFm;break;case
4:Bt=ATz;break;case 40:Bt=AFn;break;case 39:Bt=ATA;break;case 72:Bt=ATB;break;case
73:Bt=ATC;break;case 93:Bt=ATD;break;case 94:Bt=AFo;break;case 74:Bt=ATE;break;case
3:Bt=Aws;break;case 6:Bt=AFp;break;case 16:Bt=AFq;break;case 22:Bt=ATF;break;case
46:Bt=AFr;break;case 100:Bt=ATG;break;case 99:Bt=ATH;break;case 101:Bt=QU;break;
case 17:Bt=Wh;break;case 23:Bt=ATI;break;case 18:Bt=ATJ;break;case 19:Bt=ATK;break;
case 38:Bt=ATL;break;case 87:Bt=ATM;break;case 1:Bt=ATN;break;case 5:Bt=ATO;break;
case 7:Bt=Ag6;break;case 92:Bt=AFs;break;case 8:Bt=ATP;break;case 9:Bt=ATQ;break;
case 41:Bt=AFt;break;case 42:Bt=AFu;break;case 24:Bt=Awt;break;case 10:Bt=QV;break;
case 68:Bt=ATR;break;case 21:Bt=ATS;break;case 11:Bt=ATT;break;case 29:Bt=Aro;break;
case 54:Bt=ATU;break;case 30:Bt=ATV;break;case 12:Bt=ATW;break;case 13:Bt=ATX;break;
case 14:Bt=ATY;break;case 15:Bt=ATZ;break;case 78:Bt=Arp;break;case 79:Bt=AT0;break;
case 20:Bt=AT1;break;case 37:Bt=AT2;break;case 43:Bt=AT3;break;case 44:Bt=AT4;break;
case 45:Bt=AT5;break;case 25:Bt=AT6;break;case 75:Bt=AT7;break;case 67:Bt=AT8;break;
case 66:Bt=AT9;break;case 64:Bt=AFv;break;case 65:Bt=Arq;break;case 77:Bt=AT_;break;
case 76:Bt=AT$;break;case 95:Bt=AUa;break;case 88:Bt=Awu;break;case 26:Bt=Aj_;break;
case 28:Bt=AeK;break;case 27:Bt=Arr;break;case 31:Bt=Aj$;break;case 89:Bt=Ag7;break;
case 34:Bt=AUb;break;case 35:Bt=Ars;break;case 32:Bt=AFw;break;case 50:Bt=AeL;break;
case 55:Bt=AFx;break;case 63:Bt=Wi;break;case 62:Bt=Aka;break;case 33:Bt=Am8;break;
case 36:Bt=AUc;break;case 56:Bt=AUd;break;case 86:Bt=AUe;break;case 57:Bt=AUf;break;
case 47:Bt=AUg;break;case 49:Bt=Art;break;case 48:Bt=AFy;break;case 69:Bt=AFz;break;
case 71:Bt=AUh;break;case 70:Bt=AUi;break;case 51:Bt=AUj;break;case 53:Bt=AUk;break;
case 52:Bt=AUl;break;case 96:Bt=AUm;break;case 98:Bt=AFA;break;case 97:Bt=AUn;break;
case 80:Bt=Awv;break;case 82:Bt=AFB;break;case 81:Bt=AFC;break;case 85:Bt=AFD;break;
case 84:Bt=AFE;break;case 83:Bt=AFF;break;case 58:Bt=AFG;break;case 60:Bt=AUo;break;
case 59:Bt=AUp;break;case 61:Bt=AUq;break;case 90:Bt=AUr;break;case 91:Bt=AUs;break;
case 102:Bt=AUt;break;case 103:Bt=AUu;break;default:throw new Error(Aww+AHN.toFixed(
));}return Bt;},_Init:function(aArg){C.EnumToString._Init.call(this,aArg);this.__proto__=
C.ScreenTypeToString;},_className:"Device::ScreenTypeToString"};C.OverlayMenuToString={
Ca:function(A$){var Bbu=A$;var PZ=A.jm;switch(Bbu){case 0:PZ=AFH;break;case 1:PZ=
Aws;break;case 8:PZ=AUv;break;case 2:PZ=AFI;break;case 3:PZ=Akb;break;case 4:PZ=
Zd;break;case 5:PZ=AUw;break;case 6:PZ=AeM;break;case 7:PZ=AUx;break;case 11:PZ=
AUy;break;case 12:PZ=Aru;break;case 9:PZ=AeN;break;case 10:PZ=Am9;break;case 14:
PZ=AFJ;break;case 15:PZ=AUz;break;case 13:PZ=OQ;break;default:throw new Error(AUA+
Bbu.toFixed());}return PZ;},_Init:function(aArg){C.EnumToString._Init.call(this,
aArg);this.__proto__=C.OverlayMenuToString;},_className:"Device::OverlayMenuToString"
};C.ScanStateToString={Ca:function(A$){var Bb2=A$;var Bp=A.jm;switch(Bb2){case 4:
Bp=Awx;break;case 0:Bp=Awy;break;case 2:Bp=AUB;break;case 3:Bp=AFK;break;case 1:
Bp=Awz;break;default:throw new Error(AFL+Bb2.toFixed());}return Bp;},_Init:function(
aArg){C.EnumToString._Init.call(this,aArg);this.__proto__=C.ScanStateToString;},
_className:"Device::ScanStateToString"};C.MeasureStateToString={Ca:function(A$){
var Bad=A$;var Bp=A.jm;switch(Bad){case 4:Bp=Awx;break;case 0:Bp=Awy;break;case 2:
Bp=AUC;break;case 1:Bp=Awz;break;case 3:Bp=AFM;break;default:throw new Error(AUD+
Bad.toFixed());}return Bp;},_Init:function(aArg){C.EnumToString._Init.call(this,
aArg);this.__proto__=C.MeasureStateToString;},_className:"Device::MeasureStateToString"
};C.TemperatureUnit={Celsius:0,Fahrenheit:1,LAST:2};C.TemperatureUnitToString={Ca:
function(A$){var Bcp=A$;var AoJ=A.jm;switch(Bcp){case 0:AoJ=A.z2(A.abg.Bl2);break;
case 1:AoJ=A.z2(A.abg.Bl3);break;default:throw new Error(AUE+Bcp.toFixed());}return AoJ;
},_Init:function(aArg){C.EnumToString._Init.call(this,aArg);this.__proto__=C.TemperatureUnitToString;
},_className:"Device::TemperatureUnitToString"};C.AnimalType={DairyCalf:0,DairyCow:
1,SheepLamb:2,LAST:3};C.AnimalTypeToString={Ca:function(A$){var Bcg=A$;var type=
A.jm;switch(Bcg){case 0:type=A.z2(A.abg.Bdz);break;case 1:type=A.z2(A.abg.BdM);break;
case 2:type=A.z2(A.abg.BfI);break;default:throw new Error(AUF+Bcg.toFixed());}return type;
},_Init:function(aArg){C.EnumToString._Init.call(this,aArg);this.__proto__=C.AnimalTypeToString;
},_className:"Device::AnimalTypeToString"};C.Language={Default:0,German:1,Spanish:
2,French:3,Italian:4,Finnish:5,Chinese_TW:6,Turkish:7,Greek:8,Russian:9,Dutch:10
,Czech:11,Estonian:12,Bulgarian:13,Bosnian:14,Norwegian:15,Ukrainian:16,LAST:17};
C.LanguageToString={Ca:function(A$){var Aya=A$;var OW=A.jm;switch(Aya){case 0:OW=
AUG;break;case 10:OW=AUH;break;case 1:OW=AFN;break;case 12:OW=AUI;break;case 5:OW=
AFO;break;case 3:OW=AFP;break;case 8:OW=AwA;break;case 13:OW=AUJ;break;case 4:OW=
AUK;break;case 9:OW=AUL;break;case 2:OW=AUM;break;case 7:OW=AUN;break;case 6:OW=
AUO;break;case 11:OW=AUP;break;case 14:OW=AUQ;break;case 15:OW=Arv;break;case 16:
OW=Am_;break;default:throw new Error(AwB+Aya.toFixed());}return OW;},Lf:function(
A$){var Aya=A$;var Dj=A.jm;switch(Aya){case 0:Dj=AbC;break;case 10:Dj=We;break;case
1:Dj=QS;break;case 12:Dj=Wa;break;case 5:Dj=T_;break;case 3:Dj=T$;break;case 8:Dj=
Wb;break;case 13:Dj=V9;break;case 4:Dj=Ua;break;case 9:Dj=Su;break;case 2:Dj=Za;
break;case 7:Dj=AeG;break;case 6:Dj=V_;break;case 11:Dj=Ss;break;case 14:Dj=V8;break;
case 15:Dj=St;break;case 16:Dj=LV;break;default:throw new Error(AwB+Aya.toFixed(
));}return Dj;},_Init:function(aArg){C.EnumToString._Init.call(this,aArg);this.__proto__=
C.LanguageToString;},_className:"Device::LanguageToString"};C.Gender={Male:0,Female:
1,Unknown:2,LAST:3};C.BirthType={Single:0,Twins:1,Triplets:2,Quadruplets:3,LAST:
4};C.GenderToString={Ca:function(A$){var Asd=A$;var AH5=A.jm;switch(Asd){case 0:
AH5=A.z2(A.abg.Male);break;case 1:AH5=A.z2(A.abg.Female);break;case 2:AH5=A.z2(A.
abg.Unknown);break;default:throw new Error(AUR+Asd.toFixed());}return AH5;},_Init:
function(aArg){C.EnumToString._Init.call(this,aArg);this.__proto__=C.GenderToString;
},_className:"Device::GenderToString"};C.BirthTypeToString={Ca:function(A$){var type=
A$;var Ae1=A.jm;switch(type){case 0:Ae1=A.z2(A.abg.Bk2);break;case 1:Ae1=A.z2(A.
abg.BlY);break;case 2:Ae1=A.z2(A.abg.Triplets);break;case 3:Ae1=A.z2(A.abg.Quadruplets
);break;default:throw new Error(AUS+type.toFixed());}return Ae1;},_Init:function(
aArg){C.EnumToString._Init.call(this,aArg);this.__proto__=C.BirthTypeToString;},
_className:"Device::BirthTypeToString"};C.SyncState={Idle:0,Init:1,Exporting:2,ImportStart:
3,Importing:4,ImportFinish:5,Ready:6,Error:7,LAST:8};C.SyncStateToString={Ca:function(
A$){var Bcj=A$;var Bp=A.jm;switch(Bcj){case 7:Bp=Awx;break;case 0:Bp=Awy;break;case
6:Bp=AFM;break;case 2:Bp=AUT;break;case 5:Bp=AUU;break;case 3:Bp=AUV;break;case 4:
Bp=AUW;break;case 1:Bp=AUX;break;default:throw new Error(AUY+Bcj.toFixed());}return Bp;
},_Init:function(aArg){C.EnumToString._Init.call(this,aArg);this.__proto__=C.SyncStateToString;
},_className:"Device::SyncStateToString"};C.RatedAttributeToString={Ca:function(
A$){var AyZ=A$;switch(AyZ){case 0:return A.jm;case 1:return A.z2(A.abg.Bki);case
4:return A.z2(A.abg.Bkh);case 3:return A.z2(A.abg.Bkj);case 2:return A.z2(A.abg.
Bkg);default:throw new Error(AFQ+AyZ.toFixed());}},Lf:function(A$){var AyZ=A$;switch(
AyZ){case 0:return A.jm;case 1:return A.z2(A.abg.Feed);case 4:return A.z2(A.abg.
AD_);case 3:return A.z2(A.abg.AD$);case 2:return A.z2(A.abg.AD8);default:throw new
Error(AFQ+AyZ.toFixed());}},_Init:function(aArg){C.EnumToString._Init.call(this,
aArg);this.__proto__=C.RatedAttributeToString;},_className:"Device::RatedAttributeToString"
};C.AssesmentToString={Ca:function(A$){var Akp=A$;var Axs=A.jm;switch(Akp){case 0:
case 5:Axs=A.jm;break;case 3:Axs=A.z2(A.abk.Bk8);break;case 2:Axs=A.z2(A.abk.Bk_
);break;case 1:Axs=A.z2(A.abk.Bk9);break;default:throw new Error(AUZ+Akp.toFixed(
));}return Axs;},_Init:function(aArg){C.EnumToString._Init.call(this,aArg);this.
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
9};C.PopupContext={ADX:null,AjE:A.jm,Aj0:0,PopupState:1,Id:0,Show:false,Bju:function(
E){var B;if(this.PopupState===E)return;this.PopupState=E;if(!!this.ADX)(B=this.ADX
)?B[1].call(B[0],this):null;},_Init:function(aArg){this.__proto__=C.PopupContext;
A.hJ++;},_Done:function(){this.__proto__=null;A.hJ--;},_ReInit:function(){},_Mark:
function(D){var B;if((B=this.ADX)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((
B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:
"Device::PopupContext"};C.Boolean={No:0,Yes:1,LAST:2};C.BooleanToYesNo={Ca:function(
A$){switch(A$){case 0:return A.z2(A.abg.No);case 1:return A.z2(A.abg.Yes);default:
return AwC+A$.toFixed();}},_Init:function(aArg){C.EnumToString._Init.call(this,aArg
);this.__proto__=C.BooleanToYesNo;},_className:"Device::BooleanToYesNo"};C.AnimalGroupTableFields={
Id:0,GroupName:1};C.AnimalGroup={GroupName:AbF,Id:0,EU:function(Ab,AF){var Hq=C.
Row.EU.call(this,Ab,AF);if(Hq&&!!AF){this.OnSetId(AF.CE(Ab,0));this.AC3(AF.U9(Ab
,1));}return Hq;},Cp:function(AF){var Hq=C.Row.Cp.call(this,AF);if(Hq&&!!AF){var
Jf=AF.Oo();if(Jf<=0)A.aa8("%s",AbE);else{if(this.Al3())this.CH=AF.XN();AF.G$(this.
CH,0,this.Id);AF.YK(this.CH,1,this.GroupName);AF.Oq(Jf);}}return Hq;},Gd:function(
){C.Row.Gd.call(this);this.OnSetId(-1);},G_:function(){C.Row.G_.call(this);this.
OnSetId(0);this.AC3(A.jm);},OnSetId:function(E){if(this.Id===E)return;this.Id=E;
A.aat([this,this.Qv,this.OnSetId],0);},AC3:function(E){if(this.GroupName===E)return;
this.GroupName=E;A.aat([this,this.Bg6,this.AC3],0);},Qv:function(){return this.Id;
},Bg6:function(){return this.GroupName;},_Init:function(aArg){C.Row._Init.call(this
,aArg);this.__proto__=C.AnimalGroup;this.TableId=3;},_className:"Device::AnimalGroup"
};C.PopupIdToString={Ca:function(A$){var Act=A$;var Ax=A.jm;var AHL;AHL=A.z2(A.abg.
Bmj)+OP;switch(Act){case 0:Ax=A.z2(A.abg.Unknown);break;case 1:Ax=A.z2(A.abg.SevereError
);break;case 58:Ax=A.z2(A.abg.Beo);break;case 2:Ax=A.z2(A.abg.Bem);break;case 3:
Ax=A.z2(A.abg.Bl7);break;case 77:Ax=A._GetAutoObject(C.Helper).BeC();break;case 78:
Ax=A._GetAutoObject(C.Helper).BeA();break;case 79:Ax=A._GetAutoObject(C.Helper).
BeB();break;case 9:Ax=A.z2(A.abg.Bmt);break;case 5:Ax=A.z2(A.abg.SuccessDataSync
);break;case 8:Ax=A.z2(A.abg.SuccessResetFactorySettings);break;case 34:Ax=A.z2(
A.abg.SuccessResetAnimalData);break;case 10:Ax=A._GetAutoObject(C.Device).AA4();
break;case 82:Ax=A.z2(A.abg.Beq);break;case 83:Ax=A.z2(A.abg.Ber);break;case 80:
Ax=A.z2(A.abg.Blh);break;case 81:Ax=A.z2(A.abg.SuccessRestoreBackup);break;case 92:
Ax=A.z2(A.abg.Bdp);break;case 93:Ax=A.z2(A.abg.Bku);break;case 4:Ax=A.z2(A.abg.WarningDataSync
);break;case 7:Ax=A.z2(A.abg.Bmq);break;case 33:Ax=A.z2(A.abg.WarningResetAnimalData
);break;case 6:Ax=A.z2(A.abg.WarningRestart);break;case 27:Ax=A.z2(A.abg.WarningNoActionDefined
);break;case 64:Ax=A.z2(A.abg.WarningActionNotApplicable);break;case 28:Ax=A.z2(
A.abg.WarningNoMenuItemVisible);break;case 29:Ax=A.z2(A.abg.WarningEnterPresentationMode
);break;case 30:Ax=A.z2(A.abg.WarningNoAnimalsRegistered);break;case 41:Ax=((AHL+
A.z2(A.abg.APd))+OP)+A.z2(A.abg.Bf0);break;case 50:Ax=((AHL+A.z2(A.abg.APd))+OP)+
A.z2(A.abg.Bf2);break;case 51:Ax=((AHL+A.z2(A.abg.APd))+OP)+A.z2(A.abg.Bf1);break;
case 42:Ax=A.z2(A.abg.Bms);break;case 91:Ax=A.z2(A.abg.WarningScanOverwriteNaisId
);break;case 45:Ax=A.z2(A.abg.Bmn);break;case 46:Ax=A.z2(A.abg.WarningNoValidCountryCode
);break;case 57:Ax=A.z2(A.abg.WarningOutdatedAnimalWeight);break;case 52:Ax=A.z2(
A.abg.WarningOutdatedAnimalWeights);break;case 53:Ax=A.z2(A.abg.WarningWeightEvaluationSingular
);break;case 56:Ax=A.z2(A.abg.WarningWeightEvaluationPlural);break;case 11:Ax=A.
z2(A.abg.ScanError);break;case 12:Ax=A.z2(A.abg.ScanNotFound);break;case 13:Ax=A.
z2(A.abg.Bda);break;case 36:Ax=A.z2(A.abg.BlT);break;case 14:Ax=A.z2(A.abg.AnimalNotFound
);break;case 15:Ax=A.z2(A.abg.SuccessUnregister);break;case 35:Ax=A.z2(A.abg.SuccessUnregisterPerished
);break;case 26:Ax=A.z2(A.abg.SuccessCreationNewAnimal);break;case 23:Ax=A.z2(A.
abg.SuccessCreationNewAnimals);break;case 24:Ax=A.z2(A.abg.BdP);break;case 49:Ax=
A.z2(A.abg.EvaluationInProgress);break;case 16:Ax=A.z2(A.abg.BdU);break;case 17:
Ax=A.z2(A.abg.Bla);break;case 18:Ax=A.z2(A.abg.Blm);break;case 19:Ax=A.z2(A.abg.
Blb);break;case 20:Ax=A.z2(A.abg.Bln);break;case 54:Ax=A.z2(A.abg.Bli);break;case
55:Ax=A.z2(A.abg.Bll);break;case 21:Ax=A.z2(A.abg.A1L);break;case 48:Ax=(A.z2(A.
abg.A1L)+OP)+A.z2(A.abg.A2w);break;case 22:Ax=A.z2(A.abg.Bf7);break;case 63:Ax=A.
z2(A.abg.Bmo);break;case 85:Ax=A.z2(A.abg.Bmp);break;case 43:Ax=A.z2(A.abg.Bf8);
break;case 25:Ax=A.z2(A.abg.A7X);break;case 47:Ax=(A.z2(A.abg.A7X)+OP)+A.z2(A.abg.
A2w);break;case 31:{var Bvr=(((((((((((((((((((A.z2(A.abg.BdG)+Awq)+A.z2(A.abg.AK9
))+A.z2(A.abg.Colon))+N2)+A.z2(A.abg.BdI))+OP)+A.z2(A.abg.AL7))+A.z2(A.abg.Colon
))+N2)+A.z2(A.abg.Bew))+OP)+A.z2(A.abg.ARx))+A.z2(A.abg.Colon))+N2)+A.z2(A.abg.Bkl
))+OP)+A.z2(A.abg.ARw))+A.z2(A.abg.Colon))+N2)+A.z2(A.abg.Bkk);Ax=Bvr;}break;case
32:Ax=A.z2(A.abg.BlU);break;case 69:Ax=A.z2(A.abg.Bgd);break;case 44:Ax=A.z2(A.abg.
Bmr);break;case 37:Ax=A.z2(A.abg.WarningResetWeightSettings);break;case 38:Ax=A.
z2(A.abg.WarningResetTempThresholds);break;case 39:Ax=A.z2(A.abg.Bkb);break;case
76:Ax=(A.z2(A.abg.A1_)+OP)+A.z2(A.abg.ARz);break;case 40:Ax=A.z2(A.abg.Blj);break;
case 75:Ax=A.z2(A.abg.Blc);break;case 59:Ax=A.z2(A.abg.QuestionAddAnotherCalfMultiples
);break;case 62:Ax=A.z2(A.abg.Bld);break;case 97:Ax=A.z2(A.abg.Ble);break;case 60:
Ax=A.z2(A.abg.Blf);break;case 99:Ax=A.z2(A.abg.Blg);break;case 61:Ax=A.z2(A.abg.
Blo);break;case 65:Ax=A.z2(A.abg.SuccessClearAnimalLoss);break;case 66:Ax=A.z2(A.
abg.WarningNoActionsForAnimalLoss);break;case 67:Ax=A.z2(A.abg.SuccessLinkTransponder
);break;case 86:Ax=A.z2(A.abg.SuccessUnlinkTransponder);break;case 68:Ax=A.z2(A.
abg.Blk);break;case 70:Ax=A.z2(A.abg.Bes);break;case 71:Ax=A.z2(A.abg.Blr);break;
case 72:Ax=A.z2(A.abg.Bls);break;case 98:Ax=A.z2(A.abg.Beu);break;case 101:Ax=A.
z2(A.abg.Blt);break;case 100:Ax=A.z2(A.abg.Blu);break;case 88:Ax=A.z2(A.abg.Bet);
break;case 89:Ax=A.z2(A.abg.Blp);break;case 90:Ax=A.z2(A.abg.Blq);break;case 73:
Ax=A.z2(A.abg.WarningNoPremisesID);break;case 74:Ax=A.z2(A.abg.WarningNoFlashDrivePresent
);break;case 95:Ax=A.z2(A.abg.WarningNoBackupPathPresent);break;case 94:Ax=A.z2(
A.abg.WarningNoBackupFilePresent);break;case 84:Ax=A.z2(A.abg.BeJ);break;case 87:
Ax=A.z2(A.abg.Bmv);break;case 96:Ax=A.z2(A.abg.Bmm);break;case 103:Ax=A.z2(A.abg.
WarningParsedDateInFutureInvalid);break;case 102:Ax=A.z2(A.abg.WarningParsingDateFailed
);break;case 104:Ax=A.z2(A.abg.WarningParsingNaisIdFailed);break;default:throw new
Error(AFR+Act.toFixed());}return Ax;},Lf:function(A$){var Act=A$;var Ax=A.jm;switch(
Act){case 0:Ax=AU0;break;case 1:Ax=AU1;break;case 58:Ax=AU2;break;case 2:Ax=AU3;
break;case 3:Ax=AU4;break;case 77:Ax=AU5;break;case 78:Ax=Arw;break;case 79:Ax=AFS;
break;case 9:Ax=AFT;break;case 5:Ax=AFU;break;case 8:Ax=AFV;break;case 34:Ax=AFW;
break;case 80:Ax=AwD;break;case 81:Ax=AFX;break;case 92:Ax=AU6;break;case 93:Ax=
AU7;break;case 82:Ax=AU8;break;case 83:Ax=AFY;break;case 10:Ax=AU9;break;case 4:
Ax=AU_;break;case 7:Ax=AU$;break;case 33:Ax=AVa;break;case 6:Ax=AVb;break;case 27:
Ax=AVc;break;case 64:Ax=AVd;break;case 28:Ax=AVe;break;case 29:Ax=AwE;break;case
30:Ax=AVf;break;case 41:Ax=AVg;break;case 50:Ax=AwF;break;case 51:Ax=Arx;break;case
42:Ax=Ze;break;case 91:Ax=Ary;break;case 45:Ax=AVh;break;case 46:Ax=AVi;break;case
57:Ax=AVj;break;case 52:Ax=AFZ;break;case 53:Ax=AVk;break;case 56:Ax=AF0;break;case
11:Ax=AVl;break;case 12:Ax=AVm;break;case 13:Ax=AVn;break;case 36:Ax=Arz;break;case
14:Ax=AVo;break;case 15:Ax=AVp;break;case 35:Ax=AF1;break;case 26:Ax=AVq;break;case
23:Ax=AVr;break;case 24:Ax=AVs;break;case 49:Ax=AVt;break;case 16:Ax=AbG;break;case
17:Ax=AVu;break;case 18:Ax=AVv;break;case 19:Ax=AVw;break;case 20:Ax=AVx;break;case
54:Ax=AF2;break;case 55:Ax=AVy;break;case 21:Ax=AVz;break;case 48:Ax=AVA;break;case
22:Ax=AVB;break;case 63:Ax=AVC;break;case 43:Ax=AVD;break;case 85:Ax=AF3;break;case
25:Ax=AVE;break;case 47:Ax=AVF;break;case 31:Ax=AVG;break;case 32:Ax=AF4;break;case
69:Ax=AF5;break;case 44:Ax=AVH;break;case 37:Ax=AVI;break;case 38:Ax=AVJ;break;case
39:Ax=AVK;break;case 76:Ax=QW;break;case 40:Ax=ArA;break;case 75:Ax=AF6;break;case
59:Ax=AF7;break;case 62:Ax=Am$;break;case 97:Ax=Ana;break;case 60:Ax=AwG;break;case
99:Ax=AVL;break;case 65:Ax=AF8;break;case 61:Ax=AVM;break;case 66:Ax=AVN;break;case
67:Ax=AVO;break;case 86:Ax=AVP;break;case 68:Ax=AVQ;break;case 70:Ax=AVR;break;case
71:Ax=AVS;break;case 72:Ax=AVT;break;case 98:Ax=AVU;break;case 101:Ax=AVV;break;
case 100:Ax=AVW;break;case 88:Ax=AVX;break;case 89:Ax=AVY;break;case 90:Ax=AVZ;break;
case 73:Ax=AV0;break;case 74:Ax=AV1;break;case 95:Ax=AV2;break;case 94:Ax=Anb;break;
case 84:Ax=AF9;break;case 87:Ax=AV3;break;case 96:Ax=AF_;break;case 103:Ax=AF$;break;
case 102:Ax=AbH;break;case 104:Ax=AGa;break;default:throw new Error(AFR+Act.toFixed(
));}return Ax;},_Init:function(aArg){C.EnumToString._Init.call(this,aArg);this.__proto__=
C.PopupIdToString;},_className:"Device::PopupIdToString"};C.PopupParamSeparator=
";";C.RatingMode={Basic:0,Extended:1,LAST:2};C.TransponderType={UNDEFINED:0,AnimalId:
1,FarmId:2,GroupId:3,PersonId:4,LAST:5};C.TransponderProtocol={UNDEFINED:0,FDX:1
,HDX:2,HDX_URBAN:3,LAST:4};C.TransponderTypeToString={Ca:function(A$){var BcA=A$;
var type=A.jm;switch(BcA){case 1:type=AV4;break;case 2:type=AGb;break;case 3:type=
AV5;break;case 4:type=AwH;break;case 0:type=Awr;break;default:throw new Error(AV6+
BcA.toFixed());}return type;},_Init:function(aArg){C.EnumToString._Init.call(this
,aArg);this.__proto__=C.TransponderTypeToString;},_className:"Device::TransponderTypeToString"
};C.TransponderProtocolToString={Ca:function(A$){var Bcz=A$;var AyW=A.jm;switch(
Bcz){case 1:AyW=AV7;break;case 2:AyW=AwI;break;case 3:AyW=AV8;break;case 0:AyW=Awr;
break;default:throw new Error(AV9+Bcz.toFixed());}return AyW;},_Init:function(aArg
){C.EnumToString._Init.call(this,aArg);this.__proto__=C.TransponderProtocolToString;
},_className:"Device::TransponderProtocolToString"};C.Transponder={Id:0,TransponderProtocol:
0,TransponderType:0,AQ5:function(E){if(this.TransponderType===E)return;this.TransponderType=
E;A.aat([this,this.BhF,this.AQ5],0);},AQ4:function(E){if(this.TransponderProtocol===
E)return;this.TransponderProtocol=E;A.aat([this,this.BhE,this.AQ4],0);},OnSetId:
function(E){if(this.Id===E)return;this.Id=E;A.aat([this,this.Qv,this.OnSetId],0);
},AMu:function(){return A._GetAutoObject(C.Converter).BlS(this.Id);},BeS:function(
){return A._GetAutoObject(C.Converter).AvZ(this.Id);},BhF:function(){return this.
TransponderType;},BhE:function(){return this.TransponderProtocol;},Qv:function(){
return this.Id;},_Init:function(aArg){this.__proto__=C.Transponder;A.hJ++;},_Done:
function(){this.__proto__=null;A.hJ--;},_ReInit:function(){},_Mark:function(D){var
B;if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:
null,_className:"Device::Transponder"};C.RatingModeToString={Ca:function(A$){var
Us=A$;var Nl=A.jm;switch(Us){case 0:Nl=A.z2(A.abg.Basic);break;case 1:Nl=A.z2(A.
abg.Extended);break;default:throw new Error(AV_+Us.toFixed());}return Nl;},_Init:
function(aArg){C.EnumToString._Init.call(this,aArg);this.__proto__=C.RatingModeToString;
},_className:"Device::RatingModeToString"};C.TableRowsCount={_Init:function(aArg
){this.__proto__=C.TableRowsCount;A.hJ++;},_Done:function(){this.__proto__=null;
A.hJ--;},_ReInit:function(){},_Mark:function(D){var B;if((B=this.I)&&(B._cycle!=
D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:"Device::TableRowsCount"
};C.MassUnit={Kilogramm:0,Pound:1,LAST:2};C.MassUnitToString={Ca:function(A$){var
Baa=A$;var AoJ=A.jm;switch(Baa){case 0:AoJ=A.z2(A.abg.BfG);break;case 1:AoJ=A.z2(
A.abg.Pound);break;default:throw new Error(AGc+Baa.toFixed());}return AoJ;},_Init:
function(aArg){C.EnumToString._Init.call(this,aArg);this.__proto__=C.MassUnitToString;
},_className:"Device::MassUnitToString"};C.MinWeightGain=20;C.MaxWeightGain=2000;
C.WeightGainStep=10;C.Int32ArrayWrapper={Mx:10,Array:A.aan(10,0,null),Yy:function(
E){if(this.Mx===E)return;if(E>10)throw new Error(Anc);this.Mx=E;},Set:function(aIndex
,AI){if((aIndex<0)||(aIndex>=this.Mx))throw new Error(AwJ);this.Array.Set(aIndex
,AI);},Get:function(aIndex){if((aIndex<0)||(aIndex>=this.Mx))throw new Error(AwJ
);return this.Array.Get(aIndex);},AlT:function(){var HP=0;var P;for(P=0;P<this.Mx;
P=P+1)HP=HP+this.Get(P);return HP;},toString:function(){var AZK=this.Array.Get(0
).toFixed();var P;for(P=1;P<this.Mx;P=P+1)AZK=(AZK+OO)+this.Array.Get(P).toFixed(
);return AZK;},EU:function(aString){var IM=aString.indexOf(String.fromCharCode(0x2C
),0);var AYB=A.jm;var P=0;while(P<10){if(aString===A.jm)this.Array.Set(P,0);else{
if(IM===-1){AYB=aString;aString=A.jm;}else{AYB=A.aaX(aString,IM);aString=A.aa3(aString
,0,IM+1);}this.Array.Set(P,A.vQ(AYB,0,10));IM=aString.indexOf(String.fromCharCode(
0x2C),0);}P=P+1;}if(aString!==A.jm)A.aa8("%s",AV$);},Cp:function(){},G_:function(
){var P;for(P=0;P<this.Mx;P=P+1)this.Set(P,0);},AtQ:function(A4){var P=0;while(P<
this.Mx){if(this.Array.Get(P)===A4)return P;P=P+1;}return-1;},HU:function(){var P=
0;var max=-1;while(P<this.Mx){if(this.Array.Get(P)>max)max=this.Array.Get(P);P=P+
1;}return max;},_Init:function(aArg){(this.Array=[]).__proto__=C.Int32ArrayWrapper.
Array;this.__proto__=C.Int32ArrayWrapper;A.hJ++;},_Done:function(){this.__proto__=
null;A.hJ--;},_ReInit:function(){},_Mark:function(D){var B;if((B=this.I)&&(B._cycle
!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:"Device::Int32ArrayWrapper"
};C.ActionToString={Ca:function(A$){var AxO=A$;var EK=A.jm;switch(AxO){case 4:EK=
A.z2(A.abg.Alarm);break;case 256:EK=A.z2(A.abg.Weighing);break;case 128:EK=A.z2(
A.abg.A25);break;case 16:EK=A.z2(A.abg.AJ2);break;case 1:EK=A.z2(A.abg.Temperature
);break;case 32:EK=A.z2(A.abg.AnimalLoss);break;case 2:EK=A.z2(A.abg.Rating);break;
case 8:EK=A.z2(A.abg.Aqx);break;case 64:EK=A.z2(A.abg.Unregister);break;case 512:
EK=A.z2(A.abg.APx);break;case 1024:EK=A.z2(A.abg.LinkTransponder);break;case 262144:
EK=A.z2(A.abg.UnlinkTransponder);break;case 2048:EK=A.z2(A.abg.O6);break;case 4096:
EK=A.z2(A.abg.Calving);break;case 8192:EK=A.z2(A.abg.DryOff);break;case 16384:EK=
A.z2(A.abg.A4a);break;case 32768:EK=A.z2(A.abg.AAa);break;case 524288:EK=A.z2(A.
abg.AAc);break;case 65536:EK=A.z2(A.abg.Delete);break;case 131072:EK=A.z2(A.abg.
A4b);break;case 0:EK=A.z2(A.abg.A4y);break;default:throw new Error(AwK+AxO.toFixed(
));}return EK;},Lf:function(A$){var AxO=A$;var EK=A.jm;switch(AxO){case 4:EK=A.z2(
A.abg.Alarm);break;case 256:EK=A.z2(A.abg.Weighing);break;case 128:EK=A.z2(A.abg.
A25);break;case 16:EK=A.z2(A.abg.AJ2);break;case 1:EK=A.z2(A.abg.Temperature);break;
case 32:EK=A.z2(A.abg.AnimalLoss);break;case 2:EK=A.z2(A.abg.Rating);break;case 8:
EK=A.z2(A.abg.Aqx);break;case 64:EK=A.z2(A.abg.Unregister);break;case 512:EK=A.z2(
A.abg.APx);break;case 1024:EK=A.z2(A.abg.LinkTransponder);break;case 262144:EK=A.
z2(A.abg.UnlinkTransponder);break;case 2048:EK=A.z2(A.abg.O6);break;case 4096:EK=
A.z2(A.abg.Calving);break;case 8192:EK=A.z2(A.abg.DryOff);break;case 16384:EK=A.
z2(A.abg.A3$);break;case 32768:EK=A.z2(A.abg.AAa);break;case 524288:EK=A.z2(A.abg.
AAc);break;case 65536:EK=A.z2(A.abg.Delete);break;case 131072:EK=A.z2(A.abg.A3$);
break;case 0:EK=A.z2(A.abg.A4y);break;default:throw new Error(AwK+AxO.toFixed());
}return EK;},_Init:function(aArg){C.EnumToString._Init.call(this,aArg);this.__proto__=
C.ActionToString;},_className:"Device::ActionToString"};C.ACTIONS_COUNT=19;C.PopupTimeout=
2000;C.ITable={Filter:null,Id:2,CE:function(Ab,AX){return 0;},U9:function(Ab,AX){
return A.jm;},Ajk:function(H){A.vv(this,0);A.ow([this,this.Eq],this);},HT:function(
Ab,AX){return false;},Hw:function(Ab,AX){return this.RP(Ab,AX);},OnSetId:function(
E){if(this.Id===E)return;this.Id=E;},Ci:function(){return 0;},Bk:function(E){if(
this.Filter===E)return;this.Filter=E;A.aat([this,this.Fy,this.FB],0);},FB:function(
An){this.Bk(An);},IW:function(Ab,AX){var BwW=this.U_(Ab,AX);return A._GetAutoObject(
C.Converter).A70(BwW);},U_:function(Ab,AX){return 0;},RP:function(Ab,AX){return 0;
},A3B:function(Ab,AX){return this.CE(Ab,AX);},Oo:function(){var Jf=0;var BxE=this.
Id;return Jf;},Oq:function(Ant){var Hq=0;var BxE=this.Id;return Hq===1;},XN:function(
){return-1;},YM:function(Ab,AX,CW){return false;},G$:function(Ab,AX,CW){return false;
},YL:function(Ab,AX,CW){return false;},M$:function(Ab,AX,CW){return false;},YK:function(
Ab,AX,CW){return false;},Abf:function(Ab,AX,CW){return this.YL(Ab,AX,CW);},AjP:function(
Ab,AX,CW){var BwX=A._GetAutoObject(C.Converter).AcS(CW);return this.YM(Ab,AX,BwX
);},A7B:function(Ab,AX,CW){return this.G$(Ab,AX,CW);},AMn:function(Ab,AX){return this.
CE(Ab,AX);},BeQ:function(Ab,AX){return this.CE(Ab,AX);},BkN:function(Ab,AX,CW){return this.
G$(Ab,AX,CW);},BkJ:function(Ab,AX,CW){return this.G$(Ab,AX,CW);},K2:function(aColumn
,A4){return-1;},AlR:function(Ab,AX){return this.CE(Ab,AX);},BkH:function(Ab,AX,CW
){return this.G$(Ab,AX,CW);},AA2:function(Ab,AX){return this.CE(Ab,AX);},ARU:function(
Ab,AX,N5){return this.G$(Ab,AX,N5);},Eq:function(H){this.Bub();},Bub:function(){
return-1;},LB:function(Ab,AX){return 0;},TN:function(Ab,AX,CW){return false;},AiN:
function(aColumn,A4){return-1;},G_:function(){return false;},BeR:function(Ab,AX){
var BwY=this.CE(Ab,AX);return A._GetAutoObject(C.Converter).Bfe(BwY);},BeU:function(
Ab,AX){return this.CE(Ab,AX);},AMw:function(Ab,AX){return this.CE(Ab,AX);},BkL:function(
Ab,AX,CW){var BwZ=A._GetAutoObject(C.Converter).A2f(CW);return this.G$(Ab,AX,BwZ
);},BkM:function(Ab,AX,CW){return this.G$(Ab,AX,CW);},BkT:function(Ab,AX,CW){return this.
G$(Ab,AX,CW);},AiL:function(aColumn,A4){return false;},AfV:function(aColumn,A4){
return false;},Be4:function(Ab,AX){return this.CE(Ab,AX);},BkR:function(Ab,AX,CW
){return this.G$(Ab,AX,CW);},K6:function(){return this.Qb()>=this.Hx();},Hx:function(
){return 0;},Aak:function(){return-1;},Qb:function(){return 0;},Fy:function(){return this.
Filter;},_Init:function(aArg){this.__proto__=C.ITable;A.hJ++;},_Done:function(){
this.__proto__=null;A.hJ--;},_ReInit:function(){},_Mark:function(D){var B;if((B=
this.Filter)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.I)&&(B._cycle!=D))B._Mark(
B._cycle=D);},I:null,_cycle:0,_observers:null,_className:"Device::ITable"};C.MaxAutoActionsCount=
4;C.WeightRecordingMode={Automatic:0,Manual:1,LAST:2};C.WeightRecordingModeToString={
Ca:function(A$){var Us=A$;var Nl=A.jm;switch(Us){case 0:Nl=A.z2(A.abg.Automatic);
break;case 1:Nl=A.z2(A.abg.Manual);break;default:throw new Error(AGd+Us.toFixed(
));}return Nl;},_Init:function(aArg){C.EnumToString._Init.call(this,aArg);this.__proto__=
C.WeightRecordingModeToString;},_className:"Device::WeightRecordingModeToString"
};C.BooleanToAutoOnOff={Ca:function(A$){switch(A$){case 0:return A.z2(A.abg.Off);
case 1:return A.z2(A.abg.ZW);default:return AwC+A$.toFixed();}},_Init:function(aArg
){C.EnumToString._Init.call(this,aArg);this.__proto__=C.BooleanToAutoOnOff;},_className:
"Device::BooleanToAutoOnOff"};C.WeightStep=100;C.WeightRecordingScope={CurrentWeightOnly:
0,BirthWeightOnly:1,BirthAndCurrentWeight:2,NoWeightRecording:3,LAST:4};C.WeightRecordingScopeToString={
Ca:function(A$){var Bb3=A$;var Ay9=A.jm;switch(Bb3){case 0:Ay9=A.z2(A.abg.BdR);break;
case 1:Ay9=A.z2(A.abg.Bdv);break;case 2:Ay9=A.z2(A.abg.Bds);break;case 3:Ay9=A.z2(
A.abg.Bgt);break;default:throw new Error(Akc+Bb3.toFixed());}return Ay9;},_Init:
function(aArg){C.EnumToString._Init.call(this,aArg);this.__proto__=C.WeightRecordingScopeToString;
},_className:"Device::WeightRecordingScopeToString"};C.BodyTemperature={Undertemperature:
0,Normal:1,Elevated:2,Fever:3,LAST:4};C.JC={AcL:0,Temperature:1,Rating:2,Ag1:3,Bya:
4,ByQ:5,BBo:6,Bzr:7,BAa:8,By1:9,Bz$:10,BAz:11,LAST:12};C.AnimalListContentToString={
Ca:function(A$){var A_B=A$;var Wt=A.jm;switch(A_B){case 0:Wt=AWa;break;case 2:Wt=
And;break;case 1:Wt=AWb;break;case 3:Wt=AGe;break;case 4:Wt=AGf;break;case 5:Wt=
AWc;break;case 6:Wt=AWd;break;case 7:Wt=AGg;break;case 8:Wt=AWe;break;case 9:Wt=
AWf;break;case 10:Wt=AWg;break;case 11:Wt=AWh;break;default:throw new Error(AWi+
A_B.toFixed());}return Wt;},_Init:function(aArg){C.EnumToString._Init.call(this,
aArg);this.__proto__=C.AnimalListContentToString;},_className:"Device::AnimalListContentToString"
};C.GenderFilterCriterion={A3:0,Ac$:function(){var Au=A._NewObject(C.GenderFilterCriterion
,0);Au.Gt(this);return Au;},Gt:function(AL){C.FilterCriterion.Gt.call(this,AL);var
Au=(C.GenderFilterCriterion.isPrototypeOf(AL)?AL:null);if(!!Au)this.A3=Au.A3;},_Init:
function(aArg){C.FilterCriterion._Init.call(this,aArg);this.__proto__=C.GenderFilterCriterion;
},_className:"Device::GenderFilterCriterion"};C.AnimalTypeFilterCriterion={A3:0,
Ac$:function(){var Au=A._NewObject(C.AnimalTypeFilterCriterion,0);Au.Gt(this);return Au;
},Gt:function(AL){C.FilterCriterion.Gt.call(this,AL);var Au=(C.AnimalTypeFilterCriterion.
isPrototypeOf(AL)?AL:null);if(!!Au)this.A3=Au.A3;},Initialize:function(AX,EF,A4,
Sz){this.ES=AX;this.Operator=EF;this.A3=A4;this.AaC=Sz;return this;},_Init:function(
aArg){C.FilterCriterion._Init.call(this,aArg);this.__proto__=C.AnimalTypeFilterCriterion;
},_className:"Device::AnimalTypeFilterCriterion"};C.Bym={AcG:0,Byl:1,BzX:2,A7j:3
,A2n:4,BA9:5,ByP:6,BA8:7,LinkTransponder:8,O6:9,Weighing:10,Calving:11,LinkNaisId:
12,BAy:13,ClearBirthNoticePending:14,DeleteAnimal:15,ScanNaisId:16,Edit:17,ClearPurchaseNoticePending:
18};C.AutoRegistrationModeToString={Ca:function(A$){var Us=A$;var Nl=A.jm;switch(
Us){case 0:Nl=A.z2(A.abg.BdJ);break;case 1:Nl=A.z2(A.abg.Bfi);break;case 2:Nl=A.
z2(A.abg.Off);break;default:throw new Error(AWj+Us.toFixed());}return Nl;},_Init:
function(aArg){C.EnumToString._Init.call(this,aArg);this.__proto__=C.AutoRegistrationModeToString;
},_className:"Device::AutoRegistrationModeToString"};C.AutoRegistrationMode={UserConfirmed:
0,Background:1,Off:2,LAST:3};C.AssessmentFilterCriterion={A3:0,Ac$:function(){var
Au=A._NewObject(C.AssessmentFilterCriterion,0);Au.Gt(this);return Au;},Gt:function(
AL){C.FilterCriterion.Gt.call(this,AL);var Au=(C.AssessmentFilterCriterion.isPrototypeOf(
AL)?AL:null);if(!!Au)this.A3=Au.A3;},Initialize:function(AX,EF,A4,Sz){this.ES=AX;
this.Operator=EF;this.A3=A4;this.AaC=Sz;return this;},_Init:function(aArg){C.FilterCriterion.
_Init.call(this,aArg);this.__proto__=C.AssessmentFilterCriterion;},_className:"Device::AssessmentFilterCriterion"
};C.D3={AcL:0,Temperature:1,Ag1:2,Rating:3,LAST:4};C.FactoryResetScope={DeviceAndAnimalData:
0,AnimalDataOnly:1,LAST:2};C.FactoryResetScopeToString={Ca:function(A$){switch(A$
){case 0:return A.z2(A.abg.Bc1);case 1:return A.z2(A.abg.AnimalDataOnly);default:
return AWk+A$.toFixed();}},_Init:function(aArg){C.EnumToString._Init.call(this,aArg
);this.__proto__=C.FactoryResetScopeToString;},_className:"Device::FactoryResetScopeToString"
};C.ASs={Cp:function(){A._GetAutoObject(C.Device).Aqq(this.toString());},Init:function(
aArg){var B;A.za([this,this.Bbe],[B=A._GetAutoObject(C.Device),B.A5D,B.A9z],0);this.
Bbe(this);},Bbe:function(H){this.EU(A._GetAutoObject(C.Device).AEO);A.vv(this,0);
},_Init:function(aArg){C.Int32ArrayWrapper._Init.call(this,aArg);this.__proto__=
C.ASs;this.Yy(3);this.Init(aArg);},_className:"Device::TemperaturesLowClass"};C.
ASr={Init:function(aArg){var B;A.za([this,this.Bbc],[B=A._GetAutoObject(C.Device
),B.A5C,B.A9y],0);this.Bbc(this);},Cp:function(){A._GetAutoObject(C.Device).Aqp(
this.toString());},Bbc:function(H){this.EU(A._GetAutoObject(C.Device).AEN);A.vv(
this,0);},_Init:function(aArg){C.Int32ArrayWrapper._Init.call(this,aArg);this.__proto__=
C.ASr;this.Yy(3);this.Init(aArg);},_className:"Device::TemperaturesHighClass"};C.
AKj={Init:function(aArg){var B;A.za([this,this.BaI],[B=A._GetAutoObject(C.Device
),B.A42,B.A9f],0);this.BaI(this);},BaI:function(H){this.EU(A._GetAutoObject(C.Device
).AzK);A.vv(this,0);},_Init:function(aArg){C.Int32ArrayWrapper._Init.call(this,aArg
);this.__proto__=C.AKj;this.Yy(3);this.Init(aArg);},_className:"Device::AnimalTypesClass"
};C.UInt64FilterCriterion={A3:0,Ac$:function(){var Au=A._NewObject(C.UInt64FilterCriterion
,0);Au.Gt(this);return Au;},Gt:function(AL){C.FilterCriterion.Gt.call(this,AL);var
Au=(C.UInt64FilterCriterion.isPrototypeOf(AL)?AL:null);if(!!Au)this.A3=Au.A3;},Initialize:
function(AX,EF,A4,Sz){this.ES=AX;this.Operator=EF;this.A3=A4;this.AaC=Sz;return this;
},_Init:function(aArg){C.FilterCriterion._Init.call(this,aArg);this.__proto__=C.
UInt64FilterCriterion;},_className:"Device::UInt64FilterCriterion"};C.BooleanToAssignedUnassignedString={
Ca:function(A$){switch(A$){case 0:return A.z2(A.abg.Ajj);case 1:return A.z2(A.abg.
Bc2);default:return AwC+A$.toFixed();}},_Init:function(aArg){C.EnumToString._Init.
call(this,aArg);this.__proto__=C.BooleanToAssignedUnassignedString;},_className:
"Device::BooleanToAssignedUnassignedString"};C.Dd={UNDEFINED:0,AT:1,BA:2,BE:3,Byr:
4,ByG:5,ByH:6,ByI:7,ByJ:8,ByK:9,ByU:10,ByV:11,By2:12,By3:13,Bzg:14,FR:15,GR:16,Bzt:
17,Bzu:18,BzA:19,BzB:20,BzG:21,BzH:22,BzI:23,BzJ:24,BzP:25,Bz3:26,Bz4:27,BAg:28,
BAh:29,BAw:30,BAx:31,BAM:32,BAN:33,BAO:34,BA2:35,BA3:36,BBh:37,A71:38,BBi:39,LAST:
40};C.CountryToString={Ca:function(A$){var N8=A$;var Fq=A.jm;switch(N8){case 1:Fq=
A.z2(A.abn.Bde);break;case 2:Fq=A.z2(A.abn.Bdw);break;case 3:Fq=A.z2(A.abn.Bdr);
break;case 4:Fq=A.abn.Bdy;break;case 5:Fq=A.z2(A.abn.BdA);break;case 6:Fq=A.z2(A.
abn.Bly);break;case 7:Fq=A.z2(A.abn.BdD);break;case 8:Fq=A.z2(A.abn.BdS);break;case
9:Fq=A.z2(A.abn.BdT);break;case 10:Fq=A.z2(A.abn.BeK);break;case 11:Fq=A.z2(A.abn.
BdZ);break;case 12:Fq=A.z2(A.abn.Bep);break;case 13:Fq=A.z2(A.abn.Bk5);break;case
14:Fq=A.z2(A.abn.Bey);break;case 15:Fq=A.z2(A.abn.BeG);break;case 16:Fq=A.z2(A.abn.
Bfa);break;case 17:Fq=A.z2(A.abn.BdQ);break;case 18:Fq=A.z2(A.abn.Bff);break;case
19:Fq=A.z2(A.abn.Bfp);break;case 20:Fq=A.z2(A.abn.BfB);break;case 21:Fq=A.z2(A.abn.
BfD);break;case 22:Fq=A.z2(A.abn.BfS);break;case 23:Fq=A.z2(A.abn.BfW);break;case
24:Fq=A.z2(A.abn.BfQ);break;case 25:Fq=A.abn.BfY;break;case 26:Fq=A.z2(A.abn.Bge
);break;case 27:Fq=A.z2(A.abn.Bgu);break;case 28:Fq=A.z2(A.abn.Bj6);break;case 29:
Fq=A.z2(A.abn.Bj7);break;case 30:Fq=A.z2(A.abn.Bkv);break;case 31:Fq=A.z2(A.abn.
Bkx);break;case 32:Fq=A.z2(A.abn.Blx);break;case 33:Fq=A.z2(A.abn.Bk4);break;case
34:Fq=A.z2(A.abn.Bk3);break;case 35:Fq=A.z2(A.abn.BlX);break;case 36:Fq=A.z2(A.abn.
BlH);break;case 37:Fq=A.z2(A.abn.Bl1);break;case 38:Fq=A.z2(A.abn.A71);break;case
39:Fq=A.z2(A.abn.Bl0);break;case 0:Fq=Ane;break;default:throw new Error(Awi+N8.toFixed(
));}return Fq;},Lf:function(A$){var N8=A$;var BM=A.jm;switch(N8){case 1:BM=Sr;break;
case 2:BM=V8;break;case 3:BM=T8;break;case 4:BM=V9;break;case 5:BM=I_;break;case
6:BM=Zb;break;case 7:BM=T9;break;case 8:BM=Y5;break;case 9:BM=Ss;break;case 10:BM=
QS;break;case 11:BM=Y6;break;case 12:BM=Wa;break;case 13:BM=Za;break;case 14:BM=
T_;break;case 15:BM=T$;break;case 16:BM=Wb;break;case 17:BM=V$;break;case 18:BM=
ON;break;case 19:BM=PJ;break;case 20:BM=Ua;break;case 21:BM=Y7;break;case 22:BM=
Y8;break;case 23:BM=Y9;break;case 24:BM=Wc;break;case 25:BM=Wd;break;case 26:BM=
We;break;case 27:BM=St;break;case 28:BM=Y_;break;case 29:BM=Y$;break;case 30:BM=
Abz;break;case 31:BM=Su;break;case 32:BM=Wf;break;case 33:BM=AbB;break;case 34:BM=
AbA;break;case 35:BM=AeG;break;case 36:BM=V_;break;case 37:BM=AeH;break;case 38:
BM=LV;break;case 39:BM=AbC;break;case 0:BM=Ane;break;default:throw new Error(Awi+
N8.toFixed());}return BM;},_Init:function(aArg){C.EnumToString._Init.call(this,aArg
);this.__proto__=C.CountryToString;},_className:"Device::CountryToString"};C.EaseOfDelivery={
Unspecified:0,Easy:1,Moderate:2,Difficult:3,Surgery:4,LAST:5};C.EaseOfDeliveryToString={
Ca:function(A$){var A__=A$;var Ar8=A.jm;switch(A__){case 0:Ar8=A.z2(A.abg.Unspecified
);break;case 1:Ar8=A.z2(A.abg.Easy);break;case 2:Ar8=A.z2(A.abg.Moderate);break;
case 3:Ar8=A.z2(A.abg.Difficult);break;case 4:Ar8=A.z2(A.abg.Surgery);break;default:
throw new Error(AWl+A__.toFixed());}return Ar8;},_Init:function(aArg){C.EnumToString.
_Init.call(this,aArg);this.__proto__=C.EaseOfDeliveryToString;},_className:"Device::EaseOfDeliveryToString"
};C.WhereAbouts={UNB:0,EZU:1,EMA:2,VZU:3,VMA:4,VIV:5,TOT:6,V48:7,V3T:8,MGE:9,VKB:
10,LAST:11};C.WhereAboutsToString={Ca:function(A$){var BcR=A$;var ZM=A.jm;switch(
BcR){case 0:ZM=A.z2(A.abg.Unknown);break;case 1:ZM=A.z2(A.abg.Bl9);break;case 2:
ZM=A.z2(A.abg.Bl8);break;case 3:ZM=A.z2(A.abg.Bmf);break;case 4:ZM=A.z2(A.abg.Bme
);break;case 5:ZM=A.z2(A.abg.Bmc);break;case 6:ZM=A.z2(A.abg.Bl$);break;case 7:ZM=
A.z2(A.abg.Bmb);break;case 8:ZM=A.z2(A.abg.Bma);break;case 9:ZM=A.z2(A.abg.Bl_);
break;case 10:ZM=A.z2(A.abg.Bmd);break;default:throw new Error(AWm+BcR.toFixed()
);}return ZM;},_Init:function(aArg){C.EnumToString._Init.call(this,aArg);this.__proto__=
C.WhereAboutsToString;},_className:"Device::WhereAboutsToString"};C.Breed={UNKNOWN:
0,SBT:1,RBT:2,JER:3,BV:4,RVA:5,RV:6,RDN:7,DSN:8,FL:9,GV:10,PIN:11,HIN:12,MW:13,VW:
14,LMP:15,DBV:16,AS:17,VR:18,CHA:19,LIM:20,WBB:21,BA:22,MA:23,SAL:24,MON:25,AU:26
,PIE:27,CHI:28,ROM:29,MAR:30,WP:31,BB:32,DA:33,AA:34,HE:35,SH:36,HLD:37,WB:38,GAL:
39,LR:40,BGA:41,LG:42,BRA:43,NOR:44,UST:45,ZEB:46,GRV:47,DEX:48,WGA:49,LH:50,SD:
51,FR:52,TUX:53,TLM:54,FLF:55,UCK:56,BLA:57,WIT:58,LAK:59,RHV:60,AT:61,GR:62,PIF:
63,PS:64,GVF:65,BVF:66,RBF:67,HWF:68,MWF:69,VWF:70,LPF:71,BRN:72,BAZ:73,AO:74,BE:
75,WL:76,BIS:77,YAK:78,SON:79,TAU:80,IND:81,TIN:82,WAG:83,XFF:84,XFM:85,XMM:86,EVO:
87,BLH:88,TLH:89,MGR:90,WSH:91,MUR:92,EBS:93,ERI:94,PAR:95,XZF:96,XZM:97,XZZ:98,
LAST:99};C.BreedToString={Ca:function(A$){var Bs=A$;var BI=A.jm;switch(Bs){case 0:
BI=A.z2(A.abg.Unknown);break;case 1:BI=A.z2(A.abl.SBT);break;case 2:BI=A.z2(A.abl.
RBT);break;case 3:BI=A.z2(A.abl.JER);break;case 4:BI=A.z2(A.abl.BV);break;case 5:
BI=A.z2(A.abl.RVA);break;case 6:BI=A.z2(A.abl.RV);break;case 7:BI=A.z2(A.abl.RDN
);break;case 8:BI=A.z2(A.abl.DSN);break;case 9:BI=A.z2(A.abl.FL);break;case 10:BI=
A.z2(A.abl.GV);break;case 11:BI=A.z2(A.abl.PIN);break;case 12:BI=A.z2(A.abl.HIN);
break;case 13:BI=A.z2(A.abl.MW);break;case 14:BI=A.z2(A.abl.VW);break;case 15:BI=
A.z2(A.abl.LMP);break;case 16:BI=A.z2(A.abl.DBV);break;case 17:BI=A.z2(A.abl.AS);
break;case 18:BI=A.z2(A.abl.VR);break;case 19:BI=A.z2(A.abl.CHA);break;case 20:BI=
A.z2(A.abl.LIM);break;case 21:BI=A.z2(A.abl.WBB);break;case 22:BI=A.z2(A.abl.BA);
break;case 23:BI=A.z2(A.abl.MA);break;case 24:BI=A.z2(A.abl.SAL);break;case 25:BI=
A.z2(A.abl.MON);break;case 26:BI=A.z2(A.abl.AU);break;case 27:BI=A.z2(A.abl.PIE);
break;case 28:BI=A.z2(A.abl.CHI);break;case 29:BI=A.z2(A.abl.ROM);break;case 30:
BI=A.z2(A.abl.MAR);break;case 31:BI=A.z2(A.abl.WP);break;case 32:BI=A.z2(A.abl.BB
);break;case 33:BI=A.z2(A.abl.DA);break;case 34:BI=A.z2(A.abl.AA);break;case 35:
BI=A.z2(A.abl.HE);break;case 36:BI=A.z2(A.abl.SH);break;case 37:BI=A.z2(A.abl.HLD
);break;case 38:BI=A.z2(A.abl.WB);break;case 39:BI=A.z2(A.abl.GAL);break;case 40:
BI=A.z2(A.abl.LR);break;case 41:BI=A.z2(A.abl.BGA);break;case 42:BI=A.z2(A.abl.LG
);break;case 43:BI=A.z2(A.abl.BRA);break;case 44:BI=A.z2(A.abl.NOR);break;case 45:
BI=A.z2(A.abl.UST);break;case 46:BI=A.z2(A.abl.ZEB);break;case 47:BI=A.z2(A.abl.
GRV);break;case 48:BI=A.z2(A.abl.DEX);break;case 49:BI=A.z2(A.abl.WGA);break;case
50:BI=A.z2(A.abl.LH);break;case 51:BI=A.z2(A.abl.SD);break;case 52:BI=A.z2(A.abl.
FR);break;case 53:BI=A.z2(A.abl.TUX);break;case 54:BI=A.z2(A.abl.TLM);break;case
55:BI=A.z2(A.abl.FLF);break;case 56:BI=A.z2(A.abl.UCK);break;case 57:BI=A.z2(A.abl.
BLA);break;case 58:BI=A.z2(A.abl.WIT);break;case 59:BI=A.z2(A.abl.LAK);break;case
60:BI=A.z2(A.abl.RHV);break;case 61:BI=A.z2(A.abl.AT);break;case 62:BI=A.z2(A.abl.
GR);break;case 63:BI=A.z2(A.abl.PIF);break;case 64:BI=A.z2(A.abl.PS);break;case 65:
BI=A.z2(A.abl.GVF);break;case 66:BI=A.z2(A.abl.BVF);break;case 67:BI=A.z2(A.abl.
RBF);break;case 68:BI=A.z2(A.abl.HWF);break;case 69:BI=A.z2(A.abl.MWF);break;case
70:BI=A.z2(A.abl.VWF);break;case 71:BI=A.z2(A.abl.LPF);break;case 72:BI=A.z2(A.abl.
BRN);break;case 73:BI=A.z2(A.abl.BAZ);break;case 74:BI=A.z2(A.abl.AO);break;case
75:BI=A.z2(A.abl.BE);break;case 76:BI=A.z2(A.abl.WL);break;case 77:BI=A.z2(A.abl.
BIS);break;case 78:BI=A.z2(A.abl.YAK);break;case 79:BI=A.z2(A.abl.SON);break;case
80:BI=A.z2(A.abl.TAU);break;case 81:BI=A.z2(A.abl.IND);break;case 82:BI=A.z2(A.abl.
TIN);break;case 83:BI=A.z2(A.abl.WAG);break;case 84:BI=A.z2(A.abl.XFF);break;case
85:BI=A.z2(A.abl.XFM);break;case 86:BI=A.z2(A.abl.XMM);break;case 87:BI=A.z2(A.abl.
EVO);break;case 88:BI=A.abl.BLH;break;case 89:BI=A.abl.TLH;break;case 90:BI=A.abl.
MGR;break;case 91:BI=A.abl.WSH;break;case 92:BI=A.abl.MUR;break;case 93:BI=A.z2(
A.abl.EBS);break;case 94:BI=A.z2(A.abl.ERI);break;case 95:BI=A.abl.PAR;break;case
96:BI=A.z2(A.abl.XZF);break;case 97:BI=A.z2(A.abl.XZM);break;case 98:BI=A.z2(A.abl.
XZZ);break;default:throw new Error(AWn+Bs.toFixed());}return BI;},_Init:function(
aArg){C.EnumToString._Init.call(this,aArg);this.__proto__=C.BreedToString;},_className:
"Device::BreedToString"};C.UR={timer:null,Q:null,D_:0,Dq:0,Mp:0,Pc:1000,Pl:1000,
Bv:false,Cv:false,BZ:true,L$:function(H){var F;if(!this.timer)return;if(this.D_<
0){this.Dq=this.timer.Bu;this.D_=0;}var Aq=(this.timer.Bu-this.Dq)|0;var Of=this.
Pc;var GZ=this.Pl+this.Pc;var Ln=0;var Jv=this.D_;if(!Jv&&(Aq>=Of)){Jv=1;Aq=Aq-Of;
}if((Jv>0)&&(Aq>=GZ)){var H6=(Aq/GZ)|0;Aq=Aq-(H6*GZ);Jv=Jv+H6;}if((Jv>2)&&!this.
Mp)Jv=1;if(Jv!==this.D_){this.Dq=this.timer.Bu-(((B=Aq)<0)?B+0x100000000:B);this.
D_=Jv;}if(Jv>0)Ln=this.Pl;var MG=(Jv>=this.Mp)&&(this.Mp>0);if(!!this.Q){if((!MG&&(
Aq>=Ln))&&((F=this.Q,F[1].call(F[0]))!==this.Cv))(F=this.Q,F[2].call(F[0],this.Cv
));if((MG||((Aq<Ln)&&(Jv>0)))&&((F=this.Q,F[1].call(F[0]))!==this.BZ))(F=this.Q,
F[2].call(F[0],this.BZ));}if(MG)this.Ap(false);},IF:function(E){if(E<0)E=0;this.
Mp=E;},Fz:function(E){if(E<100)E=100;this.Pc=E;},VI:function(E){if(E<0)E=0;this.
Pl=E;},Ap:function(E){if(this.Bv===E)return;this.Bv=E;if(!E&&!!this.timer){A.zl([
this,this.L$],this.timer,0);this.timer=null;}if(E){this.timer=A._GetAutoObject(A.
abm.AfS);A.y_([this,this.L$],this.timer,0);this.D_=-1;}},_Init:function(aArg){this.
__proto__=C.UR;A.hJ++;},_Done:function(){this.__proto__=null;A.hJ--;},_ReInit:function(
){},_Mark:function(D){var B;if((B=this.timer)&&(B._cycle!=D))B._Mark(B._cycle=D);
if((B=this.Q)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.I)&&(B._cycle
!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:"Device::BoolEffect"
};C.H$={AnimalId:0,TransponderId:1,BzS:2,BzR:3,BzV:4,BzU:5};C.Atp={Byp:0,ByW:1};
C.AnimalIdGenerationMethodToString={Ca:function(A$){var Akn=A$;var Anz=A.jm;switch(
Akn){case 0:Anz=A.z2(A.abg.Yk);break;case 1:Anz=A.z2(A.abg.Transponder);break;case
3:Anz=(A.z2(A.abg.Manual)+N2)+A.z2(A.abg.Male);break;case 2:Anz=(A.z2(A.abg.Manual
)+N2)+A.z2(A.abg.Female);break;case 4:Anz=(A.z2(A.abg.Manual)+N2)+A.z2(A.abg.Unknown
);break;case 5:Anz=(A.z2(A.abg.Manual)+N2)+AWo;break;default:throw new Error(AWp+
Akn.toFixed());}return Anz;},_Init:function(aArg){C.EnumToString._Init.call(this
,aArg);this.__proto__=C.AnimalIdGenerationMethodToString;},_className:"Device::AnimalIdGenerationMethodToString"
};C.DirectionOfCountingToString={Ca:function(A$){var AxN=A$;var AYH=A.jm;switch(
AxN){case 0:AYH=AGh;break;case 1:AYH=Zf;break;default:throw new Error(AWq+AxN.toFixed(
));}return AYH;},_Init:function(aArg){C.EnumToString._Init.call(this,aArg);this.
__proto__=C.DirectionOfCountingToString;},_className:"Device::DirectionOfCountingToString"
};C.EnumToIcon={Aq9:function(A$){throw new Error(Arn+A$.toFixed());},Aq_:function(
A$){throw new Error(Arn+A$.toFixed());},_Init:function(aArg){this.__proto__=C.EnumToIcon;
A.hJ++;},_Done:function(){this.__proto__=null;A.hJ--;},_ReInit:function(){},_Mark:
function(D){var B;if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:
0,_observers:null,_className:"Device::EnumToIcon"};C.Ac_={Aq9:function(A$){return A.
zW(A.abi.ASf);},Aq_:function(A$){var AxN=A$;var Q$=-1;switch(AxN){case 0:Q$=3;break;
case 1:Q$=2;break;default:throw new Error(ArB+AxN.toFixed());}return Q$;},_Init:
function(aArg){C.EnumToIcon._Init.call(this,aArg);this.__proto__=C.Ac_;},_className:
"Device::DirectionOfCountingToIcon"};C.AcP={Aq9:function(A$){return A.zW(A.abi.ASd
);},Aq_:function(A$){var Akn=A$;var Q$=-1;switch(Akn){case 0:Q$=0;break;case 1:Q$=
6;break;case 3:Q$=4;break;case 2:Q$=5;break;case 4:Q$=2;break;case 5:Q$=3;break;
default:throw new Error(ArB+Akn.toFixed());}return Q$;},_Init:function(aArg){C.EnumToIcon.
_Init.call(this,aArg);this.__proto__=C.AcP;},_className:"Device::AnimalIdGenerationMethodToIcon"
};C.Pg={UNDEFINED:0,SH:1,AMz:2,APh:3,AMy:4,A4s:5,HE:6,A7h:7,A11:8,AKu:9,ARK:10,BE:
11,BB:12,A4g:13,ARL:14,ARM:15,ASk:16};C.GermanStateToString={Ca:function(A$){var
Bp=A$;var Gp=A.jm;switch(Bp){case 1:Gp=A.z2(A.abp.SH);break;case 2:Gp=A.z2(A.abp.
AMz);break;case 3:Gp=A.z2(A.abp.APh);break;case 4:Gp=A.z2(A.abp.AMy);break;case 5:
Gp=A.z2(A.abp.A4s);break;case 6:Gp=A.z2(A.abp.HE);break;case 7:Gp=A.z2(A.abp.A7h
);break;case 8:Gp=A.z2(A.abp.A11);break;case 9:Gp=A.z2(A.abp.AKu);break;case 10:
Gp=A.z2(A.abp.ARK);break;case 11:Gp=A.z2(A.abp.BE);break;case 12:Gp=A.z2(A.abp.BB
);break;case 13:Gp=A.z2(A.abp.A4g);break;case 14:Gp=A.z2(A.abp.ARL);break;case 15:
Gp=A.z2(A.abp.ARM);break;case 16:Gp=A.z2(A.abp.ASk);break;case 0:Gp=Ane;break;default:
throw new Error(ArC+Bp.toFixed());}return Gp;},Lf:function(A$){var Bp=A$;var Gp=
A.jm;switch(Bp){case 1:Gp=A.z2(A.abp.Bky);break;case 2:Gp=A.z2(A.abp.AMz);break;
case 3:Gp=A.z2(A.abp.APh);break;case 4:Gp=A.z2(A.abp.AMy);break;case 5:Gp=A.z2(A.
abp.Bgb);break;case 6:Gp=A.z2(A.abp.HE);break;case 7:Gp=A.z2(A.abp.Bkf);break;case
8:Gp=A.z2(A.abp.Bdh);break;case 9:Gp=A.z2(A.abp.AKu);break;case 10:Gp=A.z2(A.abp.
ARK);break;case 11:Gp=A.z2(A.abp.BE);break;case 12:Gp=A.z2(A.abp.BB);break;case 13:
Gp=A.z2(A.abp.BfX);break;case 14:Gp=A.z2(A.abp.ARL);break;case 15:Gp=A.z2(A.abp.
ARM);break;case 16:Gp=A.z2(A.abp.ASk);break;case 0:Gp=Ane;break;default:throw new
Error(ArC+Bp.toFixed());}return Gp;},BlM:function(A$){var Bp=A$;var FX=-1;switch(
Bp){case 0:FX=0;break;case 1:FX=1;break;case 2:FX=2;break;case 3:FX=3;break;case
4:FX=4;break;case 5:FX=5;break;case 6:FX=6;break;case 7:FX=7;break;case 8:FX=8;break;
case 9:FX=9;break;case 10:FX=10;break;case 11:FX=11;break;case 12:FX=12;break;case
13:FX=13;break;case 14:FX=14;break;case 15:FX=15;break;case 16:FX=16;break;default:
throw new Error(ArC+Bp.toFixed());}return FX;},BlN:function(A$){var Bp=A$;var FX=
A.jm;switch(Bp){case 1:FX=AWr;break;case 2:FX=AWs;break;case 3:FX=AWt;break;case
4:FX=AWu;break;case 5:FX=AWv;break;case 6:FX=ArD;break;case 7:FX=ArE;break;case 8:
FX=ArF;break;case 9:FX=ArG;break;case 10:FX=AwL;break;case 11:FX=T8;break;case 12:
FX=Anf;break;case 13:FX=AWw;break;case 14:FX=AGi;break;case 15:FX=AWx;break;case
16:FX=AWy;break;case 0:FX=Ane;break;default:throw new Error(ArC+Bp.toFixed());}return FX;
},_Init:function(aArg){C.EnumToString._Init.call(this,aArg);this.__proto__=C.GermanStateToString;
},_className:"Device::GermanStateToString"};C.EartagNrAssignmentMode={OneSingleRange:
0,TwoNumberRanges:1,LAST:2};C.EartagNrAssignmentModeToString={Lf:function(A$){var
Us=A$;var Nl=A.jm;switch(Us){case 0:Nl=AWz;break;case 1:Nl=AWA;break;default:throw new
Error(AGj+Us.toFixed());}return Nl;},Ca:function(A$){var Us=A$;var Nl=A.jm;switch(
Us){case 0:Nl=A.z2(A.abg.BjZ);break;case 1:Nl=A.z2(A.abg.BlZ);break;default:throw new
Error(AGj+Us.toFixed());}return Nl;},_Init:function(aArg){C.EnumToString._Init.call(
this,aArg);this.__proto__=C.EartagNrAssignmentModeToString;},_className:"Device::EartagNrAssignmentModeToString"
};C.Byj={Bz9:0,BzZ:1,Bza:2,Bzb:3,Bzc:4,BA4:5};C.EnumToCodeset={AlC:function(Ag_){
throw new Error(AWB+Ag_.toFixed());},Adb:function(A$){throw new Error(Arn+A$.toFixed(
));},Apj:function(){A.aa8("%s",AGk);return 0;},HU:function(){A.aa8("%s",AGk);return 0;
},_Init:function(aArg){this.__proto__=C.EnumToCodeset;A.hJ++;},_Done:function(){
this.__proto__=null;A.hJ--;},_ReInit:function(){},_Mark:function(D){var B;if((B=
this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:
"Device::EnumToCodeset"};C.MR={AlC:function(Ag_){var Bs;switch(Ag_){case 0:Bs=0;
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
Bs=97;break;case 111:Bs=98;break;default:Bs=0;}return Bs;},Adb:function(A$){var Bs=
A$;var BL=0;switch(Bs){case 0:BL=0;break;case 1:BL=1;break;case 2:BL=2;break;case
3:BL=3;break;case 4:BL=4;break;case 5:BL=5;break;case 6:BL=6;break;case 7:BL=9;break;
case 8:BL=10;break;case 9:BL=11;break;case 10:BL=12;break;case 11:BL=13;break;case
12:BL=14;break;case 13:BL=15;break;case 14:BL=16;break;case 15:BL=17;break;case 16:
BL=18;break;case 17:BL=19;break;case 18:BL=20;break;case 19:BL=21;break;case 20:
BL=22;break;case 21:BL=23;break;case 22:BL=24;break;case 23:BL=25;break;case 24:
BL=26;break;case 25:BL=27;break;case 26:BL=28;break;case 27:BL=31;break;case 28:
BL=32;break;case 29:BL=33;break;case 30:BL=34;break;case 31:BL=35;break;case 32:
BL=36;break;case 33:BL=41;break;case 34:BL=42;break;case 35:BL=43;break;case 36:
BL=44;break;case 37:BL=45;break;case 38:BL=46;break;case 39:BL=47;break;case 40:
BL=48;break;case 41:BL=49;break;case 42:BL=50;break;case 43:BL=51;break;case 44:
BL=52;break;case 45:BL=53;break;case 46:BL=54;break;case 47:BL=55;break;case 48:
BL=56;break;case 49:BL=57;break;case 50:BL=58;break;case 51:BL=59;break;case 52:
BL=60;break;case 53:BL=61;break;case 54:BL=65;break;case 55:BL=66;break;case 56:
BL=67;break;case 57:BL=68;break;case 58:BL=69;break;case 59:BL=70;break;case 60:
BL=71;break;case 61:BL=72;break;case 62:BL=73;break;case 63:BL=74;break;case 64:
BL=75;break;case 65:BL=76;break;case 66:BL=77;break;case 67:BL=78;break;case 68:
BL=79;break;case 69:BL=80;break;case 70:BL=81;break;case 71:BL=82;break;case 72:
BL=83;break;case 73:BL=84;break;case 74:BL=85;break;case 75:BL=86;break;case 76:
BL=87;break;case 77:BL=88;break;case 78:BL=89;break;case 79:BL=90;break;case 80:
BL=91;break;case 81:BL=92;break;case 82:BL=93;break;case 83:BL=94;break;case 84:
BL=97;break;case 85:BL=98;break;case 86:BL=99;break;case 87:BL=100;break;case 88:
BL=101;break;case 89:BL=102;break;case 90:BL=103;break;case 91:BL=104;break;case
92:BL=105;break;case 93:BL=106;break;case 94:BL=107;break;case 95:BL=108;break;case
96:BL=109;break;case 97:BL=110;break;case 98:BL=111;break;default:throw new Error(
AWC+Bs.toFixed());}return BL;},Apj:function(){return 0;},HU:function(){return 111;
},_Init:function(aArg){C.EnumToCodeset._Init.call(this,aArg);this.__proto__=C.MR;
},_className:"Device::BreedToHitCodeset"};C.ReasonOfLeaving={Unknown:0,A7N:1,SV:
2,A7c:3,A3X:4,BAf:5,A72:6,A4o:7,A2m:8,A6_:9,A4m:10,A2q:11,BAu:12,BAv:13,LAST:14};
C.ReasonOfLeavingToString={Ca:function(A$){var Acu=A$;var SP=A.jm;switch(Acu){case
0:SP=A.z2(A.abg.Unknown);break;case 1:SP=A.z2(A.abg.A7N);break;case 2:SP=A.z2(A.
abg.SV);break;case 3:SP=A.z2(A.abg.A7c);break;case 4:SP=A.z2(A.abg.A3X);break;case
5:SP=A.z2(A.abg.Bj0);break;case 6:SP=A.z2(A.abg.A72);break;case 7:SP=A.z2(A.abg.
A4o);break;case 8:SP=A.z2(A.abg.A2m);break;case 9:SP=A.z2(A.abg.A6_);break;case 10:
SP=A.z2(A.abg.A4m);break;case 11:SP=A.z2(A.abg.A2q);break;case 12:SP=A.z2(A.abg.
Bj_);break;case 13:SP=A.z2(A.abg.Bj9);break;default:throw new Error(AWD+Acu.toFixed(
));}return SP;},_Init:function(aArg){C.EnumToString._Init.call(this,aArg);this.__proto__=
C.ReasonOfLeavingToString;},_className:"Device::ReasonOfLeavingToString"};C.AgI={
AlC:function(Ag_){var Og;switch(Ag_){case 0:Og=0;break;case 1:Og=1;break;case 2:
Og=2;break;case 3:Og=3;break;case 4:Og=4;break;case 5:Og=5;break;case 6:Og=6;break;
case 7:Og=7;break;case 8:Og=8;break;case 9:Og=9;break;case 10:Og=10;break;case 11:
Og=11;break;case 12:Og=12;break;case 13:Og=13;break;default:Og=0;}return Og;},Adb:
function(A$){var Og=A$;var Ja=0;switch(Og){case 0:Ja=0;break;case 2:Ja=2;break;case
8:Ja=8;break;case 11:Ja=11;break;case 4:Ja=4;break;case 10:Ja=10;break;case 7:Ja=
7;break;case 5:Ja=5;break;case 9:Ja=9;break;case 3:Ja=3;break;case 12:Ja=12;break;
case 13:Ja=13;break;case 1:Ja=1;break;case 6:Ja=6;break;default:throw new Error(
AGl+Og.toFixed());}return Ja;},Apj:function(){return 0;},HU:function(){return 13;
},_Init:function(aArg){C.EnumToCodeset._Init.call(this,aArg);this.__proto__=C.AgI;
},_className:"Device::ReasonOfLeavingToCodeset"};C.KE={AlC:function(Ag_){var Kr;
switch(Ag_){case 0:Kr=0;break;case 1:Kr=1;break;case 2:Kr=2;break;case 3:Kr=3;break;
case 4:Kr=4;break;case 5:Kr=5;break;case 6:Kr=6;break;case 7:Kr=7;break;case 8:Kr=
8;break;case 9:Kr=9;break;case 10:Kr=10;break;default:Kr=0;}return Kr;},Adb:function(
A$){var Kr=A$;var Ja=0;switch(Kr){case 0:Ja=0;break;case 2:Ja=2;break;case 1:Ja=
1;break;case 9:Ja=9;break;case 6:Ja=6;break;case 8:Ja=8;break;case 7:Ja=7;break;
case 5:Ja=5;break;case 10:Ja=10;break;case 4:Ja=4;break;case 3:Ja=3;break;default:
throw new Error(AGl+Kr.toFixed());}return Ja;},Apj:function(){return 0;},HU:function(
){return 10;},_Init:function(aArg){C.EnumToCodeset._Init.call(this,aArg);this.__proto__=
C.KE;},_className:"Device::WhereAboutsToCodeset"};C.AlJ={_Init:function(aArg){this.
__proto__=C.AlJ;A.hJ++;},_Done:function(){this.__proto__=null;A.hJ--;},_ReInit:function(
){},_Mark:function(D){var B;if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:
null,_cycle:0,_observers:null,_className:"Device::EmptyClass"};C.CalfDeregistrationsTableFields={
Year:0,Deregistrations:1,Deaths:2};C.CalfDeregistrations={Deregistrations:0,Deaths:
0,Year:0,EU:function(Ab,AF){var Hq=C.Row.EU.call(this,Ab,AF);if(Hq&&!!AF){this.AjC(
AF.CE(Ab,0));this.AuT(AF.CE(Ab,1));this.AuS(AF.CE(Ab,2));}return Hq;},Cp:function(
AF){var Hq=C.Row.Cp.call(this,AF);if(Hq&&!!AF){var Jf=AF.Oo();if(Jf<=0)A.aa8("%s"
,AbE);else{if(this.Al3())this.CH=AF.XN();AF.G$(this.CH,0,this.Year);AF.G$(this.CH
,1,this.Deregistrations);AF.G$(this.CH,2,this.Deaths);AF.Oq(Jf);}}return Hq;},Gd:
function(){C.Row.Gd.call(this);this.AjC(-1);},G_:function(){C.Row.G_.call(this);
this.AjC(0);this.AuT(0);this.AuS(0);},AuT:function(E){if(this.Deregistrations===
E)return;this.Deregistrations=E;A.aat([this,this.BgW,this.AuT],0);},AuS:function(
E){if(this.Deaths===E)return;this.Deaths=E;A.aat([this,this.BgU,this.AuS],0);},AjC:
function(E){if(this.Year===E)return;this.Year=E;A.aat([this,this.Ap0,this.AjC],0
);},BgW:function(){return this.Deregistrations;},BgU:function(){return this.Deaths;
},Ap0:function(){return this.Year;},_Init:function(aArg){C.Row._Init.call(this,aArg
);this.__proto__=C.CalfDeregistrations;this.TableId=4;},_className:"Device::CalfDeregistrations"
};C.Atn={Undefined:0,Display:1,A7g:2,A7s:3,A8i:4,Bzv:5,BAE:6,BBd:7,BzQ:8,ByL:9,Bx_:
10,A3n:11,A7i:12,BBk:13,A4r:14,BBn:15};C.DeviceComponentToString={Ca:function(A$
){var A_4=A$;var PT=A.jm;switch(A_4){case 0:PT=AWE;break;case 10:PT=A.z2(A.abg.BcS
);break;case 9:PT=A.z2(A.abg.BdC);break;case 1:PT=A.z2(A.abg.Bef);break;case 11:
PT=A.z2(A.abg.A3n);break;case 5:PT=A.z2(A.abg.Bmg);break;case 8:PT=A.z2(A.abg.Beh
);break;case 14:PT=A.z2(A.abg.A4r);break;case 2:PT=A.z2(A.abg.A7g);break;case 12:
PT=A.z2(A.abg.A7i);break;case 6:PT=A.z2(A.abg.Bke);break;case 3:PT=A.z2(A.abg.A7s
);break;case 7:PT=A.z2(A.abg.Bei);break;case 13:PT=A.z2(A.abg.Bd2);break;case 15:
PT=A.z2(A.abg.Bmk);break;case 4:PT=A.z2(A.abg.A8i);break;default:throw new Error(
AWF+A_4.toFixed());}return PT;},_Init:function(aArg){C.EnumToString._Init.call(this
,aArg);this.__proto__=C.DeviceComponentToString;},_className:"Device::DeviceComponentToString"
};C.AfR={AlC:function(Ag_){return Ag_;},Adb:function(A$){return A$;},Apj:function(
){return 0;},HU:function(){return 4;},_Init:function(aArg){C.EnumToCodeset._Init.
call(this,aArg);this.__proto__=C.AfR;},_className:"Device::EaseOfDeliveryToCodeset"
};C.AdK={Aq9:function(A$){return A.zW(A.abi.ANG);},Aq_:function(A$){var A$c=A$;var
Q$=-1;switch(A$c){case 0:Q$=0;break;case 1:Q$=1;break;case 2:Q$=2;break;default:
throw new Error(AWG+A$c.toFixed());}return Q$;},_Init:function(aArg){C.EnumToIcon.
_Init.call(this,aArg);this.__proto__=C.AdK;},_className:"Device::MotherSelectionFilterModeToIcon"
};C.WhereAboutsFilterCriterion={A3:0,Ac$:function(){var Au=A._NewObject(C.WhereAboutsFilterCriterion
,0);Au.Gt(this);return Au;},Gt:function(AL){C.FilterCriterion.Gt.call(this,AL);var
Au=(C.WhereAboutsFilterCriterion.isPrototypeOf(AL)?AL:null);if(!!Au)this.A3=Au.A3;
},Initialize:function(AX,EF,A4,Sz){this.ES=AX;this.Operator=EF;this.A3=A4;this.AaC=
Sz;return this;},_Init:function(aArg){C.FilterCriterion._Init.call(this,aArg);this.
__proto__=C.WhereAboutsFilterCriterion;},_className:"Device::WhereAboutsFilterCriterion"
};C.Bz2={ALx:0,ByS:1,ANi:2,LAST:3};C.BA6={Gu:0,ASW:1,G6:2,Year:3,LAST:4};C.TimespanDaysToString={
Ca:function(A$){var Bcs=A$;var Azl=A.jm;switch(Bcs){case 0:Azl=A.z2(A.abg.A2E);break;
case 1:Azl=A.z2(A.abg.ASW);break;case 2:Azl=A.z2(A.abg.G6);break;case 3:Azl=A.z2(
A.abg.Year);break;default:throw new Error(AwM+Bcs.toFixed());}return Azl;},_Init:
function(aArg){C.EnumToString._Init.call(this,aArg);this.__proto__=C.TimespanDaysToString;
},_className:"Device::TimespanDaysToString"};C.Aj4={BAc:0,Bzy:1,ByX:2,Bzz:3,ByY:
4,LAST:5};C.USBStateToString={Ca:function(A$){var BcM=A$;var Bp=A.jm;switch(BcM){
case 0:Bp=AWH;break;case 1:Bp=AwN;break;case 2:Bp=AwO;break;case 4:Bp=AWI;break;
case 3:Bp=AWJ;break;default:throw new Error(AFL+BcM.toFixed());}return Bp;},_Init:
function(aArg){C.EnumToString._Init.call(this,aArg);this.__proto__=C.USBStateToString;
},_className:"Device::USBStateToString"};C.AAs={Bzw:0,Byk:1,Bzx:2};C.AvP={AAo:A.
jm,Timestamp:0,AB5:0,ACb:0,AEg:0,OnSetTimestamp:function(E){if(this.Timestamp===
E)return;this.Timestamp=E;},ADc:function(E){if(this.AB5===E)return;this.AB5=E;},
ADj:function(E){if(this.ACb===E)return;this.ACb=E;},ADw:function(E){if(this.AEg===
E)return;this.AEg=E;},ACV:function(E){if(this.AAo===E)return;this.AAo=E;},_Init:
function(aArg){this.__proto__=C.AvP;A.hJ++;},_Done:function(){this.__proto__=null;
A.hJ--;},_ReInit:function(){},_Mark:function(D){var B;if((B=this.I)&&(B._cycle!=
D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:"Device::SoftwareVersionInformation"
};C.AtS={Timestamp:0,AO7:0,AO8:0,ASC:0,ASD:0,ASB:0,AO6:0,OnSetTimestamp:function(
E){if(this.Timestamp===E)return;this.Timestamp=E;},AC$:function(E){if(this.AO7===
E)return;this.AO7=E;},ADa:function(E){if(this.AO8===E)return;this.AO8=E;},ADJ:function(
E){if(this.ASC===E)return;this.ASC=E;},ADK:function(E){if(this.ASD===E)return;this.
ASD=E;},ADI:function(E){if(this.ASB===E)return;this.ASB=E;},AC_:function(E){if(this.
AO6===E)return;this.AO6=E;},_Init:function(aArg){this.__proto__=C.AtS;A.hJ++;},_Done:
function(){this.__proto__=null;A.hJ--;},_ReInit:function(){},_Mark:function(D){var
B;if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:
null,_className:"Device::HardwareVersionInformation"};C.AoY={Undefined:0,Bzl:1,Byx:
2};C.AfA={Manual:0,TransponderId:1,LAST:2};C.AnimalIdAutoGenerationMethodToString={
Ca:function(A$){var A_z=A$;var AYb=A.jm;switch(A_z){case 0:AYb=A.z2(A.abg.A2v);break;
case 1:AYb=A.z2(A.abg.A2K);break;default:throw new Error(AWK+A_z.toFixed());}return AYb;
},_Init:function(aArg){C.EnumToString._Init.call(this,aArg);this.__proto__=C.AnimalIdAutoGenerationMethodToString;
},_className:"Device::AnimalIdAutoGenerationMethodToString"};C.G6={A2d:0,ABV:1,AAM:
2,AB6:3,AzM:4,AB9:5,ABX:6,ABW:7,AzU:8,AEm:9,ACl:10,ACj:11,AAv:12,LAST:13};C.MonthToString={
Ca:function(A$){var Baf=A$;var WI=A.jm;switch(Baf){case 1:WI=A.z2(A.abu.ABV);break;
case 2:WI=A.z2(A.abu.AAM);break;case 3:WI=A.z2(A.abu.AB6);break;case 4:WI=A.z2(A.
abu.AzM);break;case 5:WI=A.z2(A.abu.AB9);break;case 6:WI=A.z2(A.abu.ABX);break;case
7:WI=A.z2(A.abu.ABW);break;case 8:WI=A.z2(A.abu.AzU);break;case 9:WI=A.z2(A.abu.
AEm);break;case 10:WI=A.z2(A.abu.ACl);break;case 11:WI=A.z2(A.abu.ACj);break;case
12:WI=A.z2(A.abu.AAv);break;default:throw new Error(AGm+Baf.toFixed());}return WI;
},_Init:function(aArg){C.EnumToString._Init.call(this,aArg);this.__proto__=C.MonthToString;
},_className:"Device::MonthToString"};C.AiC={FileName:A.jm,ARJ:0,AAs:0,Aq5:false
,_Init:function(aArg){this.__proto__=C.AiC;A.hJ++;},_Done:function(){this.__proto__=
null;A.hJ--;},_ReInit:function(){},_Mark:function(D){var B;if((B=this.I)&&(B._cycle
!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:"Device::DataExportContext"
};C.Alt={Bzs:0,BAV:1};C.AS3={Init:function(aArg){var B;A.za([this,this.Bbo],[B=A.
_GetAutoObject(C.Device),B.A5P,B.A9G],0);this.Bbo(this);},Cp:function(){A._GetAutoObject(
C.Device).Aqv(this.toString());},Bbo:function(H){this.EU(A._GetAutoObject(C.Device
).AE8);A.vv(this,0);},_Init:function(aArg){C.Int32ArrayWrapper._Init.call(this,aArg
);this.__proto__=C.AS3;this.Yy(2);this.Init(aArg);},_className:"Device::WeightGainsLowClass"
};C.AS2={Init:function(aArg){var B;A.za([this,this.Bbm],[B=A._GetAutoObject(C.Device
),B.A5O,B.A9F],0);this.Bbm(this);},Cp:function(){A._GetAutoObject(C.Device).Aqu(
this.toString());},Bbm:function(H){this.EU(A._GetAutoObject(C.Device).AE7);A.vv(
this,0);},_Init:function(aArg){C.Int32ArrayWrapper._Init.call(this,aArg);this.__proto__=
C.AS2;this.Yy(2);this.Init(aArg);},_className:"Device::WeightGainsHighClass"};C.
AS5={Init:function(aArg){var B;A.za([this,this.Bbq],[B=A._GetAutoObject(C.Device
),B.A5S,B.A9J],0);this.Bbq(this);},Cp:function(){A._GetAutoObject(C.Device).Aqw(
this.toString());},Bbq:function(H){this.EU(A._GetAutoObject(C.Device).AE_);A.vv(
this,0);},_Init:function(aArg){C.Int32ArrayWrapper._Init.call(this,aArg);this.__proto__=
C.AS5;this.Yy(2);this.Init(aArg);},_className:"Device::WeightValuesBirthClass"};
C.AS1={Init:function(aArg){var B;A.za([this,this.Bbk],[B=A._GetAutoObject(C.Device
),B.A5N,B.A9E],0);this.Bbk(this);},Cp:function(){A._GetAutoObject(C.Device).Aqt(
this.toString());},Bbk:function(H){this.EU(A._GetAutoObject(C.Device).AE6);A.vv(
this,0);},_Init:function(aArg){C.Int32ArrayWrapper._Init.call(this,aArg);this.__proto__=
C.AS1;this.Yy(2);this.Init(aArg);},_className:"Device::WeightGainsAverageClass"};
C.AKk={Init:function(aArg){var B;A.za([this,this.BaJ],[B=A._GetAutoObject(C.Device
),B.A43,B.A9g],0);this.BaJ(this);},BaJ:function(H){this.EU(A._GetAutoObject(C.Device
).AzL);A.vv(this,0);},_Init:function(aArg){C.Int32ArrayWrapper._Init.call(this,aArg
);this.__proto__=C.AKk;this.Yy(2);this.Init(aArg);},_className:"Device::AnimalTypesWeightGainsClass"
};C.Bz5={Bz8:0,BzW:1,ByR:2,BBl:3,Unknown:4};C.Byv={None:0,BAd:1,Bz_:2,Bz6:3,Bz7:
4};C.AgY={A4C:0,Manual:1,TransponderId:2,LAST:3};C.TransponderAssignmentIdChangeMethodToString={
Ca:function(A$){var Bcw=A$;var AI4=A.jm;switch(Bcw){case 0:AI4=A.z2(A.abg.A4C);break;
case 1:AI4=A.z2(A.abg.A2v);break;case 2:AI4=A.z2(A.abg.A2K);break;default:throw new
Error(AWL+Bcw.toFixed());}return AI4;},_Init:function(aArg){C.EnumToString._Init.
call(this,aArg);this.__proto__=C.TransponderAssignmentIdChangeMethodToString;},_className:
"Device::TransponderAssignmentIdChangeMethodToString"};C.A6$={BwQ:function(A_b){
var Nm=A.aa2(A.aaX(A_b,15),0,10);if(!A._GetAutoObject(C.Converter).Aey(Nm))return 0;
return A.aa2(A.aaX(A_b,15),0,10);},BwP:function(AHF){if(AHF.length<8)return 0;var
AyP=A._NewObject(A.Core.Bu,0);var Bxe=A.aaY(AHF,4,4);var AZf=A.vQ(Bxe,0,10);if((
AZf<2000)||(AZf>2100))return 0;AyP.Year=AZf;var Bxd=A.aaY(AHF,2,2);var AZe=A.vQ(
Bxd,0,10);if((AZe<1)||(AZe>12))return 0;AyP.TD(AZe);var Bxc=A.aaX(AHF,2);var AZd=
A.vQ(Bxc,0,10);if((AZd<1)||(AZd>AyP.Yq()))return 0;AyP.K$(AZd);return AyP.JL();}
,_Init:function(aArg){this.__proto__=C.A6$;A.hJ++;},_Done:function(){this.__proto__=
null;A.hJ--;},_ReInit:function(){},_Mark:function(D){var B;if((B=this.I)&&(B._cycle
!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:"Device::ParserClass"
};C.Avy={_Init:function(){C.A6$._Init.call(this,0);},_variants:function(){return this;
},_this:null};C.AnimalTableFieldsToString={Ca:function(A$){var Zl=A$;var FD=A.jm;
switch(Zl){case 14:FD=A.z2(A.abg.Aez);break;case 6:FD=A.jm;break;case 32:FD=A.z2(
A.abg.Breed);break;case 4:FD=A.z2(A.abg.AfM);break;case 28:FD=A.z2(A.abg.A2i);break;
case 33:FD=A.z2(A.abg.Aiy);break;case 23:FD=A.z2(A.abg.Ku);break;case 25:FD=A.jm;
break;case 7:FD=A.z2(A.abg.Aej);break;case 2:FD=A.z2(A.abg.O);break;case 0:FD=A.
z2(A.abg.Hy);break;case 8:FD=A.z2(A.abg.Alarm);break;case 9:FD=A.z2(A.abg.AAg);break;
case 38:FD=A.z2(A.abg.Beg);break;case 11:FD=A.z2(A.abg.Fever);break;case 27:FD=A.
jm;break;case 10:FD=A.jm;break;case 37:FD=A.jm;break;case 12:FD=A.jm;break;case 29:
FD=A.z2(A.abg.AOW);break;case 18:FD=A.z2(A.abg.MT);break;case 17:FD=A.jm;break;case
5:FD=A.jm;break;case 3:FD=A.jm;break;case 26:FD=A.z2(A.abg.Yk);break;case 35:FD=
A.jm;break;case 36:FD=A.jm;break;case 15:FD=A.jm;break;case 16:FD=A.jm;break;case
24:FD=A.jm;break;case 31:FD=A.jm;break;case 20:FD=A.jm;break;case 30:FD=A.jm;break;
case 21:FD=A.jm;break;case 19:FD=A.jm;break;case 22:FD=A.z2(A.abg.Transponder);break;
case 1:FD=A.z2(A.abg.Gr);break;case 34:FD=A.z2(A.abg.I9);break;case 13:FD=A.jm;break;
default:throw new Error(AWM+A$.toFixed());}return FD;},_Init:function(aArg){C.EnumToString.
_Init.call(this,aArg);this.__proto__=C.AnimalTableFieldsToString;},_className:"Device::AnimalTableFieldsToString"
};
C._Init=function(){C.Int32FilterCriterion.__proto__=C.FilterCriterion;C.StringFilterCriterion.
__proto__=C.FilterCriterion;C.Table.__proto__=C.ITable;C.Animal.__proto__=C.Row;
C.Rating.__proto__=C.Row;C.HelperClass.__proto__=C.AlJ;C.BoolFilterCriterion.__proto__=
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
C.ASs.__proto__=C.Int32ArrayWrapper;C.ASr.__proto__=C.Int32ArrayWrapper;C.AKj.__proto__=
C.Int32ArrayWrapper;C.UInt64FilterCriterion.__proto__=C.FilterCriterion;C.BooleanToAssignedUnassignedString.
__proto__=C.EnumToString;C.CountryToString.__proto__=C.EnumToString;C.EaseOfDeliveryToString.
__proto__=C.EnumToString;C.WhereAboutsToString.__proto__=C.EnumToString;C.BreedToString.
__proto__=C.EnumToString;C.AnimalIdGenerationMethodToString.__proto__=C.EnumToString;
C.DirectionOfCountingToString.__proto__=C.EnumToString;C.Ac_.__proto__=C.EnumToIcon;
C.AcP.__proto__=C.EnumToIcon;C.GermanStateToString.__proto__=C.EnumToString;C.EartagNrAssignmentModeToString.
__proto__=C.EnumToString;C.MR.__proto__=C.EnumToCodeset;C.ReasonOfLeavingToString.
__proto__=C.EnumToString;C.AgI.__proto__=C.EnumToCodeset;C.KE.__proto__=C.EnumToCodeset;
C.CalfDeregistrations.__proto__=C.Row;C.DeviceComponentToString.__proto__=C.EnumToString;
C.AfR.__proto__=C.EnumToCodeset;C.AdK.__proto__=C.EnumToIcon;C.WhereAboutsFilterCriterion.
__proto__=C.FilterCriterion;C.TimespanDaysToString.__proto__=C.EnumToString;C.USBStateToString.
__proto__=C.EnumToString;C.AnimalIdAutoGenerationMethodToString.__proto__=C.EnumToString;
C.MonthToString.__proto__=C.EnumToString;C.AS3.__proto__=C.Int32ArrayWrapper;C.AS2.
__proto__=C.Int32ArrayWrapper;C.AS5.__proto__=C.Int32ArrayWrapper;C.AS1.__proto__=
C.Int32ArrayWrapper;C.AKk.__proto__=C.Int32ArrayWrapper;C.TransponderAssignmentIdChangeMethodToString.
__proto__=C.EnumToString;C.AnimalTableFieldsToString.__proto__=C.EnumToString;};
C._ReInit=function(){var B;if((B=C.Device._this))B._ReInit();if((B=C.Converter._this
))B._ReInit();if((B=C.Helper._this))B._ReInit();if((B=C.Avy._this))B._ReInit();};
C.DB=function(D){var B;if((B=C.Device._this)&&(B._cycle!=D))B._Done(C.Device._this=
null);if((B=C.Converter._this)&&(B._cycle!=D))B._Done(C.Converter._this=null);if((
B=C.Helper._this)&&(B._cycle!=D))B._Done(C.Helper._this=null);if((B=C.Avy._this)&&(
B._cycle!=D))B._Done(C.Avy._this=null);};return C;})();

/* VitalControl demonstration application, © Urban GmbH & Co.KG 2023 */