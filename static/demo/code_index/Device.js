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
var EU="ERROR: UpdateChargeActive is read only";var Hd="ERROR: ScanState is read only.";
var I7="ERROR: MeasureState is read only.";var II="ERROR: Temperature value is read only";
var OI="ERROR: UpdateDataTable called for Undefined data table.";var PM="ERROR: UpdateDataTable called for unknown data table id=";
var PN="ERROR: SyncState is read only.";var CJ="ERROR: ScanTransponder is read only.";
var E2="ERROR: Body weight value is read only";var Li="ERROR: Predicted temperature value is read only";
var PO="ERROR: TransferProgress is read only";var Km="ERROR: TransferTarget is read only";
var NV="ERROR: unhandled assessment.";var PP="Unhandled enum BodyTemperature: ";
var Mt="AU";var SF="AT";var Uk="BE";var Zn="BA";var Wr="BG";var IJ="CA";var Ul="CN";
var Zo="TW";var Ws="HR";var Zp="CY";var Um="CZ";var Zq="DK";var Zr="EE";var Un="FI";
var Wt="FR";var QZ="DE";var Zs="GR";var OJ="HU";var PQ="IE";var Wu="IT";var Wv="JP";
var Ww="LV";var Zt="LT";var Zu="LU";var Wx="MT";var Wy="NL";var SG="NO";var Zv="PL";
var Zw="PT";var Ab7="RO";var Uo="RU";var Zx="SK";var AeS="SI";var Zy="ES";var Wz=
"SE";var WA="CH";var Zz="TR";var AeT="UA";var JN="UK";var AeU="US";var Lj=".";var
Aha="-";var Anw="ERROR: Unhandled mass unit: ";var NW=" ";var WC="Unhandled gender";
var Anx="Unhandled animal type";var Ahb="Unhandled Device::MassUnit.";var Ahc="Unhandled Device::AnimalListContent.";
var Ab8="Avid";var Uq="Ordicam / IER SA";var Any="Agrident";var Anz="Datamars";var
AwF="Allflex";var AwG="Texas Instruments";var Akv="Nedap";var AwH="Digital Angel";
var AeV="null";var ArW="[ ";var OK=", ";var SI=" ]";var AwI="Unhandled language";
var SJ="Unhandled Device::AnimalListAction.";var ArX="Temperature unit conversion not supported: ";
var AwJ="->";var AwK="=";var AwL=">";var AnA="<";var AwM="!=";var ArY="WARNING: Unhandled operator.";
var KL="Unknown birth type";var AwN="Unhandled country: ";var Ab9="ERROR: Cannot start transaction";
var AwO="ERROR: Table is null, cannot load row (";var AFF=")";var AFG="Table Id mismatch!";
var AFH="ERROR: Row index (";var AFI=") out of bounds [0,";var AwP="]";var ATA="ERROR: Table is full. Item limit: ";
var ATB="Device::ScanTransponder not set";var ATC="Unhandled TransponderType.";var
ATD="Unhandled ScanState.";var ATE="Could not load animal with transponder";var ArZ=
"Birth type";var AwQ="Time calving";var Q0="Pend. reg. notice";var AwR="Perished";
var ATF="Rating temp.";var ATG=" mother";var ATH="Reason leaving";var ATI="Time alarm";
var AFJ="Time first weighing";var AFK="Time control";var AeW="Time temp.";var AnB=
"Time watch";var ATJ="Time weighing";var AFL="Assessment";var Akw="Time rating";
var AFM="ERROR: Unhandled AnimalTable filter field:";var AwS="Field ";var ATK="ERROR: Unhandled RatingTable filter field:";
var ATL="ERROR: Unhandled table ";var ATM=" filter fields.";var ATN="WARNING: Unhandled filter criterion type.";
var Ab_="0";var Ar0="No table specified";var AFN="Invalid animal id generation method: ";
var AFO="Unhandled AnimalIdGenerationMethod: ";var AwT="Invalid gender: ";var AFP=
"Invalid ear tag number assignment mode: ";var AwU=";";var ATO="Invalid animal creation error code: ";
var ATP="Invalid EartagNrAssignmentMode: ";var ATQ="Unsupported exponent: ";var ATR=
"Unknown whereabouts type: ";var AFQ="Unhandled Gender: ";var ATS="Unhandled AnimalIdAutoGenerationMethod: ";
var OL="\n";var AwV="\n\n";var ATT="Bootloader:\nV\xA0";var ATU="Middleware:\nV\xA0";
var ATV="GUI:\nV\xA0";var ATW="Mainboard: ";var ATX="Torchboard: ";var ATY="Operator not supported.";
var ATZ="Unhandled Device::TransponderAssignmentIdChangeMethod: ";var Ar1="Unhandled enum value ";
var AwW="UNDEFINED";var AFR="Boot";var AT0="Charge";var AFS="ChargeWarning";var AT1=
"ControlledPowerOff";var AT2="DeviceMain";var AT3="DeviceService";var AT4="DeviceInfo";
var AFT="DeviceBackup";var AT5="DeviceCheck";var AwX="Home";var AFU="Settings";var
AFV="DateTimeSettings";var AT6="UnitsSettings";var AFW="DataAcquisitionSettings";
var AT7="RegistrationAutomaticSettings";var AT8="RegistrationPresettingsSettings";
var Q1="TransponderAssignmentSettings";var WD="TemperatureSettings";var AT9="WeightGainSettings";
var AT_="DeviceSettings";var AT$="RegistrationSettings";var AUa="InitializationSettings";
var AUb="PremisesSettings";var AUc="Sleep";var AUd="Sync";var Ahd="EditAnimalData";
var AFX="EditAnimalDataNaisId";var AUe="AnimalList";var AUf="AnimalListFilter";var
AFY="AlarmListFilter";var AFZ="WatchListFilter";var AwY="AnimalActionActions";var
Q2="AnimalActionTemperature";var AUg="TemperatureMeasurement";var AUh="AnimalActionWeighing";
var AUi="AnimalActionRate";var Ar2="AnimalActionUnregister";var AUj="AnimalActionPerished";
var AUk="AnimalActionNewBornCare";var AUl="AlarmList";var AUm="ControlMeasure";var
AUn="ControlList";var AUo="RangeTest";var Ar3="ListsMain";var AUp="ListsIdManagement";
var AUq="WatchList";var AUr="AnimalListActions";var AUs="AlarmListActions";var AUt=
"ControlListActions";var AUu="WatchListActions";var AUv="EvaluationMenuMain";var
AUw="EvaluationMenuWeights";var AUx="EvaluationLosses";var AUy="EvaluationRatings";
var AF0="EvaluationTemperatures";var Ar4="EvaluationWeights";var AUz="EvaluationWeightsRecent";
var AUA="EvaluationBirthWeights";var AUB="AnimalEvaluationFilter";var AwZ="NewMenu";
var Akx="NewAnimals";var Ahe="NewAnimalManualData";var Aw0="MassRecording";var AnC=
"NewAnimalTransponderData";var Ahf="NewAnimalLoss";var AUC="AutoActionScanScreen";
var Aw1="ManualActionScanScreen";var AF1="SetTransponderScreen";var AeX="SetSaveTransponderScreen";
var AF2="NewAnimalSetTransponderScreen";var WE="NewAnimalsSetTransponderScreen";
var Aky="NewAnimalCalvingDataScreen";var AnD="WeightListScreen";var AUD="AnimalSingleInfoScreen";
var AUE="AnimalMultiInfoScreen";var AUF="AnimalRegistrationDetails";var AUG="MultiInfoActionsScreen";
var AUH="FreshCowListScreen";var Ar5="FreshCowListActionsScreen";var AF3="FreshCowListFilterScreen";
var AF4="DryCowListScreen";var AUI="DryCowListActionsScreen";var AUJ="DryCowListFilterScreen";
var AUK="NoTransponderListScreen";var AUL="NoTransponderListActionsScreen";var AUM=
"NoTransponderListFilterScreen";var AUN="YoungNoTransponderListScreen";var AF5="YoungNoTransponderListActionsScreen";
var AUO="YoungNoTransponderListFilterScreen";var Aw2="NoNaisIdListScreen";var AF6=
"NoNaisIdListActionsScreen";var AF7="NoNaisIdListFilterScreen";var AF8="RegistrationsListScreen";
var AF9="RegistrationsListActionsScreen";var AF_="RegistrationsListFilterScreen";
var AF$="ActionListScreen";var AUP="ActionListActionsScreen";var AUQ="ActionListFilterScreen";
var AUR="UpdateScreen";var AUS="MotherScanScreen";var AUT="SetSaveNaisIdScreen";
var AUU="PurchasedAnimalsList";var AUV="TextInput";var Aw3="Unhandled display mode: ";
var AGa="None";var AUW="Actions Settings";var AGb="Auto Action";var Ahg="Menu Item Settings";
var WF="Rating Type";var AUX="Weighing settings";var Ab$="Options";var AUY="AnimalSearch";
var AUZ="AnimalSearchUnfiltered";var AnE="AnimalSearchDriedOff";var AeY="MeasurementReady";
var AnF="AnimalMultiInfoMenu";var AGc="MassRecordingDefaults";var AU0="MassRecordingFields";
var OM="MassRecordingMenu";var AU1="PurchasedAnimalsListMenu";var AU2="BirthRegistrationsListMenu";
var AU3="Unhandled overlay menu: ";var Aw4="Error";var Ar6="Idle";var AGd="IdScanned";
var AU4="NotFound";var AGe="Progress";var AGf="Unhandled scan state: ";var AU5="Prediction";
var AGg="Ready";var AU6="Unhandled measure state: ";var AU7="Unhandled temperature unit: ";
var AU8="Unhandled species: ";var AGh="English";var AU9="Nederlands";var AGi="Deutsch";
var AGj="Eesti";var Aw5="Suomalainen";var AU_="Fran\xE7ais";var AU$="\u0395\u03BB\u03BB\u03B7\u03BD\u03B9\u03BA\u03AC";
var AVa="\u0411\u044A\u043B\u0433\u0430\u0440\u0441\u043A\u0438";var AVb="Italiano";
var AVc="\u0420\u0443\u0441\u0441\u043A\u0438\u0439";var AVd="Espa\xF1ol";var AVe=
"T\xFCrk\xE7e";var AVf="\u6B63\u9AD4\u5B57/\u7E41\u9AD4\u5B57";var Ar7="\u010Ce\u0161tina";
var Ar8="Bosanski";var AGk="Norsk";var AVg="\u0423\u043A\u0440\u0430\u0457\u043D\u0441\u044C\u043A\u0438\u0439";
var AGl="Unhandled language: ";var AVh="EN";var AVi="ET";var AVj="EL";var AVk="ZH";
var AVl="CS";var AVm="BS";var AVn="Unhandled gender: ";var AVo="Unhandled birth type: ";
var AVp="Exporting";var AVq="ImportFinish";var AVr="ImportStart";var AVs="Importing";
var AVt="Init";var AVu="Unhandled sync state: ";var AGm="Unhandled rating attribute: ";
var AVv="Unhandled assessment: ";var Ar9="Illegal boolean value: ";var Aw6="Unhandled popup ID:";
var AGn="Unknown";var AGo="Severe Error";var Aw7="ErrorsDeviceDriverCheck";var Aw8=
"Enter Sleep";var AGp="About";var AVw="InfoSoftwareVersions";var AVx="InfoHardwareVersions";
var AVy="InfoSerial";var AGq="ShutDown";var AVz="SuccessDataSync";var AVA="SuccessResetFactory";
var AVB="SuccessResetAnimalData";var AVC="SuccessCreateBackup";var AVD="SuccessRestoreBackup";
var AVE="CreateBackupInProgress";var AVF="RestoreBackupInProgress";var AVG="FailedCreateBackup";
var Aw9="FailedRestoreBackup";var AVH="TechnicalDetails";var AVI="WarningDataSync";
var Aw_="WarningFactory";var Ar_="WarningResetAnimalData";var ZA="WarningRestart";
var Ar$="WarningAutoAction";var AVJ="WarningAutoActionNotApplicable";var AVK="WarningNoMenuItem";
var AVL="WarningEnterDemoMode";var AGr="NoAnimalsRegistered";var AVM="MaxNumAnimalsReached";
var AGs="MaxNumRatingsReached";var AVN="MaxNumCalfDeregistrationsReached";var AVO=
"ScanInTransponder";var AVP="WarningScanOverwriteNaisId";var Asa="EarTagNumberTooShort";
var AVQ="NoValidCountryCode";var AVR="WarningOutdatedAnimalWeight";var AGt="WarningOutdatedAnimalWeights";
var AVS="WarningWeightEvaluationSingular";var AVT="WarningWeightEvaluationPlural";
var AVU="ScanError";var AVV="ScanNotFound";var Aca="ScannedAnimalNotFound";var AVW=
"ScannedTransponderNotFound";var AVX="AnimalNotFound";var AVY="SuccessUnregister";
var AVZ="SuccessUnregisterPerished";var AGu="SuccessCreationNewAnimal";var AV0="SuccessCreationNewAnimals";
var AV1="AnimalCreationInProgress";var AV2="EvaluationInProgress";var AV3="DataSyncInProgress";
var AV4="AddedToAlarm";var AV5="RemovedFromAlarm";var AGv="AddedToWatch";var AV6=
"RemovedFromWatch";var AV7="AddedToDryOff";var AV8="RemovedFromDryOff";var AGw="AnimalIdAlreadyExists";
var AGx="AnimalIdAlreadyExistsContinuable";var AV9="MissingAnimalId";var AV_="MissingAnimalIdMother";
var AV$="MissingEartagNumber";var AWa="MissingTransponderId";var Q3="TransponderAlreadyRegistered";
var Asb="TransponderAlreadyRegisteredContinuable";var AGy="HelpAnimalInfoRating";
var AGz="CannotReassignTransponder";var AnG="CannotReassignNaisId";var AnH="WarningResetToDefaultValue";
var Aw$="WarningResetThresholds";var AWb="WarningResetTempThresholds";var AGA="UpdateFirmware";
var AWc="UpdateFirmwareBatteryLow";var AWd="ConfirmFirmwareUpdated";var AWe="ConfirmBootloaderUpdated";
var AWf="QuestionAddAnotherCalfMultiples";var AWg="RemovedAllBirthNoticesPending";
var AWh="RemovedAllPurchasedNoticePending";var AWi="RemovedFromBirthNoticePending";
var AWj="RemovedFromPurchasedNoticePending";var AWk="SuccessClearAnimalLoss";var
AWl="RemovedAnimalBirth";var AWm="RemovedAnimalPurchased";var AWn="WarningNoActionsForAnimalLoss";
var AWo="SuccessLinkTransponder";var AWp="SuccessUnlinkTransponder";var AWq="SuccessLinkNaisId";
var AWr="WarningDataExportHitBirthFailed";var AWs="SuccessDataExportHitBirth";var
AnI="SuccessDataExportHitBirthDownload";var AGB="WarningDataExportHitPurchasedFailed";
var AWt="SuccessDataExportHitPurchased";var AGC="SuccessDataExportHitPurchasedDownload";
var AGD="WarningDataExportAnimalsFailed";var ZB="SuccessDataExportAnimalsRatings";
var AGE="SuccessDataExportAnimalsDownload";var AWu="WarningNoPremisesID";var AGF=
"WarningNoFlashDrivePresent";var AWv="WarningNoBackupPathPresent";var Axa="WarningNoBackupFilePresent";
var AWw="DemoFunctionNotAvailable";var AWx="WarningImpreciseTimeSetting";var Axb=
"ConfirmationRestoreBackup";var AWy="WarningParsedDateInFutureInvalid";var AWz="WarningParsingDateFailed";
var AWA="WarningParsingNaisIdFailed";var AGG="AnimalId";var AnJ="FarmId";var AGH=
"GroupId";var AWB="PersonId";var AGI="Unhandled transponder type: ";var AGJ="FDX";
var Akz="HDX";var AWC="HDX (Urban)";var AnK="Unhandled transponder protocol: ";var
AWD="Illegal RatingMode: ";var AGK="Unhandled mass unit: ";var AGL="Max array size is 10";
var AGM="Index out of bounds";var AWE="ERROR: Received more integers than expected!";
var Axc="Unhandled double scan action :";var AWF="Illegal WeightRecordingMode: ";
var AWG="Illegal WeightRecordingScope: ";var AWH="AnimalData";var AWI="Rating";var
AWJ="Temperature";var AWK="Weight";var AWL="Alarm infos";var AWM="Control infos";
var AWN="Watch infos";var AWO="Fresh cow infos";var AWP="No transponder infos";var
AWQ="Dry cow info";var AWR="No nais id infos";var AWS="Registrations infos";var AGN=
"Unhandled animal list content:";var ZC="Illegal AutoRegistrationMode: ";var AWT=
"Illegal FactoryResetScope: ";var Ahh="??";var AWU="Illegal EaseOfDelivery: ";var
AWV="Illegal Whereabouts: ";var AWW="Illegal breed: ";var AWX="Unisex";var AWY="Illegal animalIdGenerationMethod: ";
var AWZ="Ascending";var Asc="Descending";var Asd="Illegal directionOfCountingName: ";
var AnL="Unhandled direction of counting: ";var Ahi="Unhandled German state: ";var
Axd="SH";var AnM="HH";var AW0="NI";var AW1="HB";var AW2="NW";var AW3="HE";var AW4=
"RP";var AW5="BW";var AW6="BY";var AW7="SL";var AW8="BB";var AW9="MV";var AW_="SN";
var AW$="ST";var AXa="TH";var AXb="One Range Male Female";var Axe="Two Ranges Male Female";
var AGO="Illegal EartagAssignmentMode: ";var Axf="Unhandled code set value ";var
Ase="Implement in derived class";var AXc="Illegal HIT-Code: ";var AXd="Illegal ReasonOfLeaving: ";
var AGP="Illegal code: ";var AGQ="Undefined";var AXe="Illegal DeviceComponent: ";
var AXf="Unhandled Device::MotherSelectionFilterMode: ";var AXg="Illegal Device::TimespanDays: ";
var AXh="Not connected";var AXi="Host";var AXj="Device";var AXk="Device CDC";var
AXl="Host MSC";var AGR="Host HID";var AXm="Host CDC";var AXn="Illegal animalIdAutoGenerationMethod: ";
var AXo="Unhandled month: ";var AXp="Illegal transponderAssignmentIdChangeMethod: ";
var AXq="Unhandled animal table field: ";var AXr="Unhandled data export destination: ";
var AXs="Unhandled list view scope: ";
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
AM;if(!this.B6)this.B6=AM;},AMN:function(){return this.B6;},AMS:function(A_Y){if(
!!A_Y)return A_Y.Ag;return null;},DW:function(AHo,EC){var Ay=this.B6;while(!!Ay){
if(Ay.ES===AHo){if(EC===1)return Ay;else if(Ay.Operator===EC)return Ay;}Ay=Ay.Ag;
}return null;},QM:function(AM){var Ay=this.B6;while(!!Ay){if(Ay===AM){if(!!Ay.AH
)Ay.AH.Ag=Ay.Ag;if(!!Ay.Ag)Ay.Ag.AH=Ay.AH;if(this.B6===Ay)this.B6=Ay.Ag;if(this.
B7===Ay)this.B7=Ay.AH;Ay.Ag=null;Ay.AH=null;return;}Ay=Ay.Ag;}},Gu:function(){var
Bc=A._NewObject(C.Filter,0);var Ay=this.B6;while(!!Ay){Bc.CZ(Ay.Adz());Ay=Ay.Ag;
}return Bc;},_Init:function(aArg){this.__proto__=C.Filter;A.h7++;},_Done:function(
){this.__proto__=null;A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((
B=this.B6)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.B7)&&(B._cycle!=D))B._Mark(
B._cycle=D);if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:
null,_className:"Device::Filter"};C.FilterCriterion={Ag:null,AH:null,ES:-1,Operator:
1,AaZ:false,Adz:function(){return null;},Gu:function(AM){if(!AM)return;this.ES=AM.
ES;this.Operator=AM.Operator;this.AaZ=AM.AaZ;},_Init:function(aArg){this.__proto__=
C.FilterCriterion;A.h7++;},_Done:function(){this.__proto__=null;A.h7--;},_ReInit:
function(){},_Mark:function(D){var B;if((B=this.Ag)&&(B._cycle!=D))B._Mark(B._cycle=
D);if((B=this.AH)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.I)&&(B._cycle!=D
))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:"Device::FilterCriterion"
};C.Int32FilterCriterion={A4:0,Adz:function(){var Ay=A._NewObject(C.Int32FilterCriterion
,0);Ay.Gu(this);return Ay;},Gu:function(AM){C.FilterCriterion.Gu.call(this,AM);var
Ay=(C.Int32FilterCriterion.isPrototypeOf(AM)?AM:null);if(!!Ay)this.A4=Ay.A4;},Initialize:
function(AX,EC,A1,SM){this.ES=AX;this.Operator=EC;this.A4=A1;this.AaZ=SM;return this;
},_Init:function(aArg){C.FilterCriterion._Init.call(this,aArg);this.__proto__=C.
Int32FilterCriterion;},_className:"Device::Int32FilterCriterion"};C.DeviceClass={
ACH:0,ACG:0,AuW:0,YV:0,Oz:null,R$:null,QC:null,Su:null,Rz:null,Aq:null,Bq:null,AfK:
null,Am7:null,O7:null,Atw:A.jV,AutoActions:A.jV,AAe:A.jV,AFe:A.jV,AFf:A.jV,AgZ:A.
jV,AFA:A.jV,AFB:A.jV,AAf:A.jV,AFz:A.jV,AFD:A.jV,Az$:A.jV,AAa:A.jV,Aak:100,Ki:0,AK6:
75,Zj:3600,ARS:0,FM:5,Fv:0,IH:50000,O2:0,AEw:0,AiH:0,Ap6:0,Ap5:0,APO:1,APN:1,Aji:
0,APP:1,Aws:0,AeG:0,ApV:10,ASx:5,ACz:60,AuS:0,WhereAbouts:0,Ve:0,Ag9:0,Awl:3,AA$:
0,AlN:0,AfM:1,Akq:0,Abd:0,Apy:0,AP1:12,AL0:11,Breed:0,EartagNrAssignmentMode:0,At0:
0,AA4:0,AA3:0,H9:5,Az_:2,ApA:0,AP6:8,AME:2,ATh:0,D1:0,AKf:0,Jz:0,Gender:2,WeightRecordingScope:
1,WeightRecordingMode:1,AnimalType:0,MassUnit:0,AutoRegistrationMode:0,RatingMode:
0,SyncState:0,OverlayMenu:0,TemperatureUnit:0,Language:0,MeasureState:0,ScanState:
0,Kv:3,Ad3:true,APA:false,AlH:true,Ama:false,Al8:true,Hv:false,AS0:false,Al9:false
,ATf:false,ArQ:false,ACF:false,AlW:false,UpdateActiveScreen:function(AJ){if(this.
Kv===AJ)return;this.Kv=AJ;A.abo([this,this.ACT,this.A_c],0);},YN:function(E){if(
this.K&&this.K.YN)return this.K.YN.apply(this,arguments);else return C.DeviceClass.
BqX.apply(this,arguments);},BqX:function(E){},A_c:function(Ap){this.YN(Ap);},UpdateBatteryChargeState:
function(AJ){if(this.Aak===AJ)return;this.Aak=AJ;A.abo([this,this.AuZ,this.Axl],
0);},Avj:function(E){if(this.K&&this.K.Avj)return this.K.Avj.apply(this,arguments
);else return C.DeviceClass.Bq9.apply(this,arguments);},Bq9:function(E){A.ab5("%s"
,BC);},Axl:function(Ap){this.Avj(Ap);},UpdateChargeActive:function(AJ){if(this.AlW===
AJ)return;this.AlW=AJ;A.abo([this,this.Au2,this.Axm],0);},ADi:function(E){if(this.
K&&this.K.ADi)return this.K.ADi.apply(this,arguments);else return C.DeviceClass.
Brd.apply(this,arguments);},Brd:function(E){A.ab5("%s",EU);},Axm:function(Ap){this.
ADi(Ap);},UpdateScanState:function(AJ){var B;if(this.ScanState===AJ)return;this.
ScanState=AJ;A.abo([this,this.AQF,this.AXX],0);A._GetAutoObject(C.Helper).Bw6(this
);},Aq1:function(E){if(this.K&&this.K.Aq1)return this.K.Aq1.apply(this,arguments
);else return C.DeviceClass.BrT.apply(this,arguments);},BrT:function(E){A.ab5("%s"
,Hd);},AXX:function(Ap){this.Aq1(Ap);},UpdateMeasureState:function(AJ){if(this.MeasureState===
AJ)return;this.MeasureState=AJ;A.abo([this,this.AC0,this.AG8],0);},AvF:function(
E){if(this.K&&this.K.AvF)return this.K.AvF.apply(this,arguments);else return C.DeviceClass.
BrB.apply(this,arguments);},BrB:function(E){A.ab5("%s",I7);},AG8:function(Ap){this.
AvF(Ap);},UpdateTempValue:function(AJ){if(this.Ki===AJ)return;this.Ki=AJ;A.abo([
this,this.AC3,this.AG_],0);},AvP:function(E){if(this.K&&this.K.AvP)return this.K.
AvP.apply(this,arguments);else return C.DeviceClass.BrZ.apply(this,arguments);},
BrZ:function(E){A.ab5("%s",II);},AG_:function(Ap){this.AvP(Ap);},AmW:function(E){
if(this.K&&this.K.AmW)return this.K.AmW.apply(this,arguments);else return C.DeviceClass.
Brw.apply(this,arguments);},Brw:function(E){},A_r:function(Ap){this.AmW(Ap);},AvQ:
function(E){if(this.K&&this.K.AvQ)return this.K.AvQ.apply(this,arguments);else return C.
DeviceClass.Br0.apply(this,arguments);},Br0:function(E){},Asi:function(Ap){this.
AvQ(Ap);},ADg:function(E){if(this.K&&this.K.ADg)return this.K.ADg.apply(this,arguments
);else return C.DeviceClass.Brc.apply(this,arguments);},Brc:function(E){},A_k:function(
Ap){this.ADg(Ap);},ADQ:function(E){if(this.K&&this.K.ADQ)return this.K.ADQ.apply(
this,arguments);else return C.DeviceClass.BrD.apply(this,arguments);},BrD:function(
E){},AXQ:function(Ap){this.ADQ(Ap);},UpdateMonitoring:function(AJ){if(this.ACF===
AJ)return;this.ACF=AJ;A.abo([this,this.AQv,this.AXQ],0);},UpdateDataTable:function(
A_Z){var B;switch(A_Z){case 0:A.pe([B=this.Aq,B.AjJ],this);break;case 1:A.pe([B=
this.Bq,B.AjJ],this);break;case 3:A.pe([B=this.AfK,B.AjJ],this);break;case 4:A.pe([
B=this.O7,B.AjJ],this);break;case 2:A.ab5("%s",OI);break;default:A.ab5("%s%e",PM
,A_Z);}},Awk:function(){if(this.K&&this.K.Awk)return this.K.Awk.apply(this,arguments
);else return C.DeviceClass.Bss.apply(this,arguments);},Bss:function(){},Ag2:function(
){if(this.K&&this.K.Ag2)return this.K.Ag2.apply(this,arguments);else return C.DeviceClass.
Bsv.apply(this,arguments);},Bsv:function(){},AeC:function(){if(this.K&&this.K.AeC
)return this.K.AeC.apply(this,arguments);else return C.DeviceClass.Bst.apply(this
,arguments);},Bst:function(){},Ang:function(){if(this.K&&this.K.Ang)return this.
K.Ang.apply(this,arguments);else return C.DeviceClass.Bsw.apply(this,arguments);
},Bsw:function(){},UpdateLanguage:function(AJ){if(this.Language===AJ)return;this.
Language=AJ;switch(AJ){case 14:A._SetLanguage(1);break;case 13:A._SetLanguage(2);
break;case 6:A._SetLanguage(3);break;case 11:A._SetLanguage(4);break;case 10:A._SetLanguage(
5);break;case 12:A._SetLanguage(6);break;case 5:A._SetLanguage(7);break;case 3:A.
_SetLanguage(8);break;case 1:A._SetLanguage(9);break;case 8:A._SetLanguage(10);break;
case 4:A._SetLanguage(11);break;case 15:A._SetLanguage(13);break;case 9:A._SetLanguage(
15);break;case 2:A._SetLanguage(16);break;case 7:A._SetLanguage(17);break;case 16:
A._SetLanguage(18);break;default:A._SetLanguage(0);}A.abo([this,this.A6k,this.A_r
],0);},UpdateTemperatureUnit:function(AJ){if(this.TemperatureUnit===AJ)return;this.
TemperatureUnit=AJ;A.abo([this,this.AqA,this.Asi],0);},UpdateBrightness:function(
AJ){if(this.AK6===AJ)return;this.AK6=AJ;A.abo([this,this.A5$,this.A_k],0);},SetSystemTime:
function(Ahr){if(this.K&&this.K.SetSystemTime)return this.K.SetSystemTime.apply(
this,arguments);else return C.DeviceClass.Bsq.apply(this,arguments);},Bsq:function(
Ahr){},Awe:function(){if(this.K&&this.K.Awe)return this.K.Awe.apply(this,arguments
);else return C.DeviceClass.A94.apply(this,arguments);},A94:function(){},AEJ:function(
){if(this.K&&this.K.AEJ)return this.K.AEJ.apply(this,arguments);else return C.DeviceClass.
A92.apply(this,arguments);},A92:function(){},Bk$:function(){},UpdateOverlayMenu:
function(AJ){if(this.OverlayMenu===AJ)return;this.OverlayMenu=AJ;A.abo([this,this.
Avb,this.Axt],0);},Cj:function(E){if(this.K&&this.K.Cj)return this.K.Cj.apply(this
,arguments);else return C.DeviceClass.BrO.apply(this,arguments);},BrO:function(E
){},Axt:function(Ap){this.Cj(Ap);},AvV:function(E){if(this.K&&this.K.AvV)return this.
K.AvV.apply(this,arguments);else return C.DeviceClass.Br9.apply(this,arguments);
},Br9:function(E){},A_A:function(Ap){this.AvV(Ap);},UpdateUnderTemp:function(AJ){
if(this.Zj===AJ)return;this.Zj=AJ;A.abo([this,this.A6I,this.A_A],0);},UpdateSyncState:
function(AJ){if(this.SyncState===AJ)return;this.SyncState=AJ;A.abo([this,this.AQH
,this.AXZ],0);},Abw:function(E){if(this.K&&this.K.Abw)return this.K.Abw.apply(this
,arguments);else return C.DeviceClass.BrY.apply(this,arguments);},BrY:function(E
){A.ab5("%s",PN);},AXZ:function(Ap){this.Abw(Ap);},ABu:function(){if(this.K&&this.
K.ABu)return this.K.ABu.apply(this,arguments);else return C.DeviceClass.BqP.apply(
this,arguments);},BqP:function(){return A.jV;},UpdatePopup:function(Kp,AYG,AYC,AYJ
){this.A6(Kp,AYG,AYC,AYJ,[this,this.BwO]);},PopupStateChanged:function(Kp,Ae){if(
this.K&&this.K.PopupStateChanged)return this.K.PopupStateChanged.apply(this,arguments
);else return C.DeviceClass.Bsj.apply(this,arguments);},Bsj:function(Kp,Ae){},AEh:
function(E){if(this.K&&this.K.AEh)return this.K.AEh.apply(this,arguments);else return C.
DeviceClass.Br$.apply(this,arguments);},Br$:function(E){},A_B:function(Ap){this.
AEh(Ap);},UpdateVibrationOnKeypressEnabled:function(AJ){if(this.ArQ===AJ)return;
this.ArQ=AJ;A.abo([this,this.A6J,this.A_B],0);},Aek:function(E){if(this.K&&this.
K.Aek)return this.K.Aek.apply(this,arguments);else return C.DeviceClass.Br_.apply(
this,arguments);},Br_:function(E){},AG$:function(Ap){this.Aek(Ap);},UpdateVibrationOn:
function(A$q){if(this.ATf===A$q)return;this.ATf=A$q;A.abo([this,this.AC4,this.AG$
],0);},A6:function(Kp,AYG,AYC,AYJ,BtX){var AfB=A._NewObject(C.PopupContext,0);AfB.
Id=Kp;AfB.Show=AYG;AfB.Aj4=AYC;AfB.Akm=AYJ;AfB.AEp=BtX;this.Am7.Trigger(AfB,false
);},BwO:function(H){var At=(C.PopupContext.isPrototypeOf(H)?H:null);if(!!At)this.
PopupStateChanged(At.Id,At.PopupState);},AvM:function(E){if(this.K&&this.K.AvM)return this.
K.AvM.apply(this,arguments);else return C.DeviceClass.BrS.apply(this,arguments);
},BrS:function(E){},AXW:function(Ap){this.AvM(Ap);},UpdateRatingMode:function(AJ
){if(this.RatingMode===AJ)return;this.RatingMode=AJ;A.abo([this,this.AQE,this.AXW
],0);},Aeb:function(E){if(this.K&&this.K.Aeb)return this.K.Aeb.apply(this,arguments
);else return C.DeviceClass.Bro.apply(this,arguments);},Bro:function(E){},Ash:function(
Ap){this.Aeb(Ap);},UpdateFlashLightOn:function(A_8){if(this.Al9===A_8)return;this.
Al9=A_8;A.abo([this,this.Aqx,this.Ash],0);},TT:function(E){if(this.K&&this.K.TT)
return this.K.TT.apply(this,arguments);else return C.DeviceClass.Br3.apply(this,
arguments);},Br3:function(E){},AX0:function(Ap){this.TT(Ap);},UpdateTopLightOn:function(
A$l){if(this.AS0===A$l)return;this.AS0=A$l;A.abo([this,this.AQJ,this.AX0],0);},V6:
function(E){if(this.K&&this.K.V6)return this.K.V6.apply(this,arguments);else return C.
DeviceClass.BrR.apply(this,arguments);},BrR:function(E){},BsM:function(Ap){this.
V6(Ap);},UpdateRGBTopLight:function(A$g){if(this.ARS===A$g)return;this.ARS=A$g;A.
abo([this,this.Bh3,this.BsM],0);},Avi:function(E){if(this.K&&this.K.Avi)return this.
K.Avi.apply(this,arguments);else return C.DeviceClass.Bq8.apply(this,arguments);
},Bq8:function(E){},BsE:function(Ap){this.Avi(Ap);},UpdateAutoRegistrationMode:function(
A_V){if(this.AutoRegistrationMode===A_V)return;this.AutoRegistrationMode=A_V;A.abo([
this,this.Bhs,this.BsE],0);},Aq2:function(E){if(this.K&&this.K.Aq2)return this.K.
Aq2.apply(this,arguments);else return C.DeviceClass.BrU.apply(this,arguments);},
BrU:function(E){A.ab5("%s",CJ);},AXY:function(Ap){this.Aq2(Ap);},UpdateScanTransponder:
function(Kp,A$o,A$n){if(((this.Oz.Id===Kp)&&(this.Oz.TransponderType===A$o))&&(this.
Oz.TransponderProtocol===A$n))return;this.Oz.OnSetId(Kp);this.Oz.ARv(A$o);this.Oz.
ARu(A$n);A.abo([this,this.AQG,this.AXY],0);},Py:function(E){if(this.K&&this.K.Py
)return this.K.Py.apply(this,arguments);else return C.DeviceClass.Brg.apply(this
,arguments);},Brg:function(E){},Acb:function(Ap){this.Py(Ap);},UpdateDigitsID:function(
A_3){if(this.FM===A_3)return;this.FM=A_3;A.abo([this,this.Abj,this.Acb],0);},QH:
function(E){if(this.K&&this.K.QH)return this.K.QH.apply(this,arguments);else return C.
DeviceClass.BrN.apply(this,arguments);},BrN:function(E){},Acc:function(Ap){this.
QH(Ap);},UpdateOffsetID:function(A$d){if(this.Fv===A$d)return;this.Fv=A$d;A.abo([
this,this.Abk,this.Acc],0);},AEl:function(E){if(this.K&&this.K.AEl)return this.K.
AEl.apply(this,arguments);else return C.DeviceClass.Bsg.apply(this,arguments);},
Bsg:function(E){A.ab5("%s",E2);},AHa:function(Ap){this.AEl(Ap);},UpdateWeightValue:
function(AJ){if(this.IH===AJ)return;this.IH=AJ;A.abo([this,this.AC5,this.AHa],0);
},AvD:function(E){if(this.K&&this.K.AvD)return this.K.AvD.apply(this,arguments);
else return C.DeviceClass.Brz.apply(this,arguments);},Brz:function(E){},AXP:function(
Ap){this.AvD(Ap);},UpdateMassUnit:function(AJ){if(this.MassUnit===AJ)return;this.
MassUnit=AJ;A.abo([this,this.AQu,this.AXP],0);},AqD:function(E){if(this.K&&this.
K.AqD)return this.K.AqD.apply(this,arguments);else return C.DeviceClass.A9Y.apply(
this,arguments);},A9Y:function(E){},A9$:function(Ap){this.AqD(Ap);},AqE:function(
E){if(this.K&&this.K.AqE)return this.K.AqE.apply(this,arguments);else return C.DeviceClass.
A9Z.apply(this,arguments);},A9Z:function(E){},AXI:function(Ap){this.AqE(Ap);},UpdateActiveActions:
function(AJ){if(this.O2===AJ)return;this.O2=AJ;A.abo([this,this.A5V,this.A9$],0);
},UpdateActiveActionsOrder:function(AJ){if(this.Atw===AJ)return;this.Atw=AJ;A.abo([
this,this.AQg,this.AXI],0);},Abn:function(E){if(this.K&&this.K.Abn)return this.K.
Abn.apply(this,arguments);else return C.DeviceClass.A90.apply(this,arguments);},
A90:function(E){},A_i:function(Ap){this.Abn(Ap);},UpdateAutoActions:function(AJ){
if(this.AutoActions===AJ)return;this.AutoActions=AJ;A.abo([this,this.A57,this.A_i
],0);},AE8:function(){if(this.K&&this.K.AE8)return this.K.AE8.apply(this,arguments
);else return C.DeviceClass.Bsu.apply(this,arguments);},Bsu:function(){},ArH:function(
){if(this.K&&this.K.ArH)return this.K.ArH.apply(this,arguments);else return C.DeviceClass.
Bsy.apply(this,arguments);},Bsy:function(){},DS:function(E){if(this.K&&this.K.DS
)return this.K.DS.apply(this,arguments);else return C.DeviceClass.Bq5.apply(this
,arguments);},Bq5:function(E){},BsD:function(Ap){this.DS(Ap);},UpdateAnimalType:
function(Eb){if(this.AnimalType===Eb)return;this.AnimalType=Eb;A.abo([this,this.
Px,this.BsD],0);},AvW:function(E){if(this.K&&this.K.AvW)return this.K.AvW.apply(
this,arguments);else return C.DeviceClass.Bse.apply(this,arguments);},Bse:function(
E){},A_G:function(Ap){this.AvW(Ap);},UpdateWeightRecordingMode:function(A$s){if(
this.WeightRecordingMode===A$s)return;this.WeightRecordingMode=A$s;A.abo([this,this.
A6R,this.A_G],0);},ADY:function(E){if(this.K&&this.K.ADY)return this.K.ADY.apply(
this,arguments);else return C.DeviceClass.BrP.apply(this,arguments);},BrP:function(
E){A.ab5("%s",Li);},AXU:function(Ap){this.ADY(Ap);},UpdatePredictedTempValue:function(
AJ){if(this.AEw===AJ)return;this.AEw=AJ;A.abo([this,this.AQB,this.AXU],0);},Sm:function(
LW){if(this.K&&this.K.Sm)return this.K.Sm.apply(this,arguments);else return C.DeviceClass.
Bsp.apply(this,arguments);},Bsp:function(LW){},ADo:function(E){if(this.K&&this.K.
ADo)return this.K.ADo.apply(this,arguments);else return C.DeviceClass.Brf.apply(
this,arguments);},Brf:function(E){},AG5:function(Ap){this.ADo(Ap);},UpdateDemoMode:
function(AJ){if(this.Hv===AJ)return;this.Hv=AJ;A.abo([this,this.ACX,this.AG5],0);
},AC9:function(E){if(this.K&&this.K.AC9)return this.K.AC9.apply(this,arguments);
else return C.DeviceClass.BqY.apply(this,arguments);},BqY:function(E){},A_d:function(
Ap){this.AC9(Ap);},UpdateAgeRegistration:function(A$c){if(this.AiH===A$c)return;
this.AiH=A$c;A.abo([this,this.A50,this.A_d],0);},AvX:function(E){if(this.K&&this.
K.AvX)return this.K.AvX.apply(this,arguments);else return C.DeviceClass.Bsf.apply(
this,arguments);},Bsf:function(E){},A_H:function(Ap){this.AvX(Ap);},UpdateWeightRecordingScope:
function(A$h){if(this.WeightRecordingScope===A$h)return;this.WeightRecordingScope=
A$h;A.abo([this,this.A6S,this.A_H],0);},JG:function(E){if(this.K&&this.K.JG)return this.
K.JG.apply(this,arguments);else return C.DeviceClass.Brs.apply(this,arguments);}
,Brs:function(E){},AXO:function(Ap){this.JG(Ap);},UpdateGender:function(LT){if(this.
Gender===LT)return;this.Gender=LT;A.abo([this,this.V0,this.AXO],0);},AqT:function(
E){if(this.K&&this.K.AqT)return this.K.AqT.apply(this,arguments);else return C.DeviceClass.
Bru.apply(this,arguments);},Bru:function(E){},Axp:function(Ap){this.AqT(Ap);},UpdateIDLastUsedMale:
function(Q4){if(this.Ap6===Q4)return;this.Ap6=Q4;A.abo([this,this.Au7,this.Axp],
0);},AqS:function(E){if(this.K&&this.K.AqS)return this.K.AqS.apply(this,arguments
);else return C.DeviceClass.Brt.apply(this,arguments);},Brt:function(E){},Axo:function(
Ap){this.AqS(Ap);},UpdateIDLastUsedFemale:function(Q4){if(this.Ap5===Q4)return;this.
Ap5=Q4;A.abo([this,this.Au6,this.Axo],0);},Abm:function(E){if(this.K&&this.K.Abm
)return this.K.Abm.apply(this,arguments);else return C.DeviceClass.Bq3.apply(this
,arguments);},Bq3:function(E){},AG3:function(Ap){this.Abm(Ap);},UpdateAnimalListContent:
function(AJ){if(this.Jz===AJ)return;this.Jz=AJ;A.abo([this,this.ACU,this.AG3],0);
},AC$:function(E){if(this.K&&this.K.AC$)return this.K.AC$.apply(this,arguments);
else return C.DeviceClass.BqZ.apply(this,arguments);},BqZ:function(E){},A_e:function(
Ap){this.AC$(Ap);},UpdateAlarmListAction:function(AJ){if(this.AKf===AJ)return;this.
AKf=AJ;A.abo([this,this.A52,this.A_e],0);},ADr:function(E){if(this.K&&this.K.ADr
)return this.K.ADr.apply(this,arguments);else return C.DeviceClass.Brn.apply(this
,arguments);},Brn:function(E){},A_n:function(Ap){this.ADr(Ap);},UpdateFlashLightInMeasureState:
function(A_9){if(this.Al8===A_9)return;this.Al8=A_9;A.abo([this,this.A6c,this.A_n
],0);},Ad_:function(E){if(this.K&&this.K.Ad_)return this.K.Ad_.apply(this,arguments
);else return C.DeviceClass.Bq2.apply(this,arguments);},Bq2:function(E){},AXK:function(
Ap){this.Ad_(Ap);},UpdateAnimalInfoContent:function(AJ){if(this.D1===AJ)return;this.
D1=AJ;A.abo([this,this.AQi,this.AXK],0);},AEk:function(E){if(this.K&&this.K.AEk)
return this.K.AEk.apply(this,arguments);else return C.DeviceClass.Bsa.apply(this
,arguments);},Bsa:function(E){},A_C:function(Ap){this.AEk(Ap);},UpdateWatchListAction:
function(AJ){if(this.ATh===AJ)return;this.ATh=AJ;A.abo([this,this.A6N,this.A_C],
0);},ADu:function(E){if(this.K&&this.K.ADu)return this.K.ADu.apply(this,arguments
);else return C.DeviceClass.Brp.apply(this,arguments);},Brp:function(E){},A_p:function(
Ap){this.ADu(Ap);},UpdateFreshCowListAction:function(AJ){if(this.AME===AJ)return;
this.AME=AJ;A.abo([this,this.A6e,this.A_p],0);},Aro:function(H){if(this.K&&this.
K.Aro)return this.K.Aro.apply(this,arguments);else return C.DeviceClass.Bsk.apply(
this,arguments);},Bsk:function(H){},BCe:function(s){this.Aro(s);},Arq:function(H
){if(this.K&&this.K.Arq)return this.K.Arq.apply(this,arguments);else return C.DeviceClass.
Bsm.apply(this,arguments);},Bsm:function(H){},BCg:function(s){this.Arq(s);},Avg:
function(E){if(this.K&&this.K.Avg)return this.K.Avg.apply(this,arguments);else return C.
DeviceClass.Bq6.apply(this,arguments);},Bq6:function(E){},A_g:function(Ap){this.
Avg(Ap);},Aq4:function(E){if(this.K&&this.K.Aq4)return this.K.Aq4.apply(this,arguments
);else return C.DeviceClass.Br1.apply(this,arguments);},Br1:function(E){},A_x:function(
Ap){this.Aq4(Ap);},Aq5:function(E){if(this.K&&this.K.Aq5)return this.K.Aq5.apply(
this,arguments);else return C.DeviceClass.Br2.apply(this,arguments);},Br2:function(
E){},A_y:function(Ap){this.Aq5(Ap);},Ars:function(H){if(this.K&&this.K.Ars)return this.
K.Ars.apply(this,arguments);else return C.DeviceClass.Bsn.apply(this,arguments);
},Bsn:function(H){},BCh:function(s){this.Ars(s);},UpdateTemperaturesLowString:function(
AJ){if(this.AFf===AJ)return;this.AFf=AJ;A.abo([this,this.A6E,this.A_y],0);},UpdateTemperaturesHighString:
function(AJ){if(this.AFe===AJ)return;this.AFe=AJ;A.abo([this,this.A6D,this.A_x],
0);},UpdateAnimalTypesString:function(AJ){if(this.AAe===AJ)return;this.AAe=AJ;A.
abo([this,this.A55,this.A_g],0);},ADT:function(E){if(this.K&&this.K.ADT)return this.
K.ADT.apply(this,arguments);else return C.DeviceClass.BrM.apply(this,arguments);
},BrM:function(E){},AXS:function(Ap){this.ADT(Ap);},UpdateNoTransponderListAction:
function(AJ){if(this.AP6===AJ)return;this.AP6=AJ;A.abo([this,this.AQy,this.AXS],
0);},Avz:function(E){if(this.K&&this.K.Avz)return this.K.Avz.apply(this,arguments
);else return C.DeviceClass.Brr.apply(this,arguments);},Brr:function(E){},BsI:function(
Ap){this.Avz(Ap);},UpdateFreshCowsHideMeasured:function(AJ){if(this.Ama===AJ)return;
this.Ama=AJ;A.abo([this,this.BhL,this.BsI],0);},AqX:function(E){if(this.K&&this.
K.AqX)return this.K.AqX.apply(this,arguments);else return C.DeviceClass.BrJ.apply(
this,arguments);},BrJ:function(E){},A_u:function(Ap){this.AqX(Ap);},UpdateNaisIdLastUsedMale:
function(WO){if(this.ACH===WO)return;this.ACH=WO;A.abo([this,this.A6r,this.A_u],
0);},AqW:function(E){if(this.K&&this.K.AqW)return this.K.AqW.apply(this,arguments
);else return C.DeviceClass.BrI.apply(this,arguments);},BrI:function(E){},A_t:function(
Ap){this.AqW(Ap);},UpdateNaisIdLastUsedFemale:function(WO){if(this.ACG===WO)return;
this.ACG=WO;A.abo([this,this.A6q,this.A_t],0);},AvI:function(E){if(this.K&&this.
K.AvI)return this.K.AvI.apply(this,arguments);else return C.DeviceClass.BrG.apply(
this,arguments);},BrG:function(E){},Axr:function(Ap){this.AvI(Ap);},UpdateNaisIdIncrementMale:
function(AkI){if(this.APO===AkI)return;this.APO=AkI;A.abo([this,this.Au_,this.Axr
],0);},AvH:function(E){if(this.K&&this.K.AvH)return this.K.AvH.apply(this,arguments
);else return C.DeviceClass.BrF.apply(this,arguments);},BrF:function(E){},Axq:function(
Ap){this.AvH(Ap);},UpdateNaisIdIncrementFemale:function(AkI){if(this.APN===AkI)return;
this.APN=AkI;A.abo([this,this.Au9,this.Axq],0);},UpdateFirmware:function(){if(this.
K&&this.K.UpdateFirmware)return this.K.UpdateFirmware.apply(this,arguments);else
return C.DeviceClass.A95.apply(this,arguments);},A95:function(){},AmR:function(E
){if(this.K&&this.K.AmR)return this.K.AmR.apply(this,arguments);else return C.DeviceClass.
Bq$.apply(this,arguments);},Bq$:function(E){},A_j:function(Ap){this.AmR(Ap);},UpdateBootloaderMessage:
function(AJ){if(this.ApA===AJ)return;this.ApA=AJ;A.abo([this,this.A5_,this.A_j],
0);},AC7:function(E){if(this.K&&this.K.AC7)return this.K.AC7.apply(this,arguments
);else return C.DeviceClass.BqT.apply(this,arguments);},BqT:function(E){},A9_:function(
Ap){this.AC7(Ap);},UpdateActionListAction:function(AJ){if(this.Az_===AJ)return;this.
Az_=AJ;A.abo([this,this.A5U,this.A9_],0);},Ave:function(E){if(this.K&&this.K.Ave
)return this.K.Ave.apply(this,arguments);else return C.DeviceClass.BqU.apply(this
,arguments);},BqU:function(E){},BsC:function(Ap){this.Ave(Ap);},UpdateActionListHideMeasured:
function(AJ){if(this.AlH===AJ)return;this.AlH=AJ;A.abo([this,this.Bho,this.BsC],
0);},TO:function(E){if(this.K&&this.K.TO)return this.K.TO.apply(this,arguments);
else return C.DeviceClass.Bq1.apply(this,arguments);},Bq1:function(E){},AnO:function(
Ap){this.TO(Ap);},UpdateAnimalIdGenerationMethod:function(A$x){if(this.H9===A$x)
return;this.H9=A$x;A.abo([this,this.AmI,this.AnO],0);},Avs:function(E){if(this.K&&
this.K.Avs)return this.K.Avs.apply(this,arguments);else return C.DeviceClass.Brh.
apply(this,arguments);},Brh:function(E){},AXM:function(Ap){this.Avs(Ap);},UpdateDirectionOfCountingFemale:
function(AkB){if(this.AA3===AkB)return;this.AA3=AkB;A.abo([this,this.AQn,this.AXM
],0);},Avt:function(E){if(this.K&&this.K.Avt)return this.K.Avt.apply(this,arguments
);else return C.DeviceClass.Bri.apply(this,arguments);},Bri:function(E){},AXN:function(
Ap){this.Avt(Ap);},UpdateDirectionOfCountingMale:function(AkB){if(this.AA4===AkB
)return;this.AA4=AkB;A.abo([this,this.AQo,this.AXN],0);},Avu:function(E){if(this.
K&&this.K.Avu)return this.K.Avu.apply(this,arguments);else return C.DeviceClass.
Brj.apply(this,arguments);},Brj:function(E){},AG6:function(Ap){this.Avu(Ap);},UpdateDirectionOfCountingUnisex:
function(AkB){if(this.At0===AkB)return;this.At0=AkB;A.abo([this,this.ACY,this.AG6
],0);},AqU:function(E){if(this.K&&this.K.AqU)return this.K.AqU.apply(this,arguments
);else return C.DeviceClass.Brv.apply(this,arguments);},Brv:function(E){},AnP:function(
Ap){this.AqU(Ap);},UpdateIDLastUsedUnisex:function(Q4){if(this.Aji===Q4)return;this.
Aji=Q4;A.abo([this,this.AmL,this.AnP],0);},AqY:function(E){if(this.K&&this.K.AqY
)return this.K.AqY.apply(this,arguments);else return C.DeviceClass.BrK.apply(this
,arguments);},BrK:function(E){},AXR:function(Ap){this.AqY(Ap);},UpdateNaisIdLastUsedUnisex:
function(WO){if(this.AuW===WO)return;this.AuW=WO;A.abo([this,this.AQw,this.AXR],
0);},AvJ:function(E){if(this.K&&this.K.AvJ)return this.K.AvJ.apply(this,arguments
);else return C.DeviceClass.BrH.apply(this,arguments);},BrH:function(E){},Axs:function(
Ap){this.AvJ(Ap);},UpdateNaisIdIncrementUnisex:function(AkI){if(this.APP===AkI)return;
this.APP=AkI;A.abo([this,this.Au$,this.Axs],0);},AjP:function(E){if(this.K&&this.
K.AjP)return this.K.AjP.apply(this,arguments);else return C.DeviceClass.Brl.apply(
this,arguments);},Brl:function(E){},Axn:function(Ap){this.AjP(Ap);},UpdateEartagNrAssignmentMode:
function(AkC){if(this.EartagNrAssignmentMode===AkC)return;this.EartagNrAssignmentMode=
AkC;A.abo([this,this.Au5,this.Axn],0);},NH:function(E){if(this.K&&this.K.NH)return this.
K.NH.apply(this,arguments);else return C.DeviceClass.Brb.apply(this,arguments);}
,Brb:function(E){},BsG:function(Ap){this.NH(Ap);},UpdateBreed:function(Acj){if(this.
Breed===Acj)return;this.Breed=Acj;A.abo([this,this.Au1,this.BsG],0);},ADN:function(
E){if(this.K&&this.K.ADN)return this.K.ADN.apply(this,arguments);else return C.DeviceClass.
BrC.apply(this,arguments);},BrC:function(E){},BsK:function(Ap){this.ADN(Ap);},UpdateMiddlewareVersions:
function(PV,AYy,AYz,AYF,AYn){this.R$.OnSetTimestamp(PV);this.R$.ADI(AYy);this.R$.
ADP(AYz);this.R$.AD1(AYF);this.R$.ADm(AYn);A.abo([this,this.BhY,this.BsK],0);},ADH:
function(E){if(this.K&&this.K.ADH)return this.K.ADH.apply(this,arguments);else return C.
DeviceClass.Brx.apply(this,arguments);},Brx:function(E){},BsJ:function(Ap){this.
ADH(Ap);},UpdateMainboardVersions:function(PV,AYw,AYx,AYv,AYL,AYM,AYK){this.QC.OnSetTimestamp(
PV);this.QC.ADF(AYw);this.QC.ADG(AYx);this.QC.ADE(AYv);this.QC.AEc(AYL);this.QC.
AEd(AYM);this.QC.AEb(AYK);A.abo([this,this.BhW,this.BsJ],0);},AEe:function(E){if(
this.K&&this.K.AEe)return this.K.AEe.apply(this,arguments);else return C.DeviceClass.
Br4.apply(this,arguments);},Br4:function(E){},BsQ:function(Ap){this.AEe(Ap);},UpdateTorchboardVersions:
function(PV,AYw,AYx,AYv,AYL,AYM,AYK){this.Su.OnSetTimestamp(PV);this.Su.ADF(AYw);
this.Su.ADG(AYx);this.Su.ADE(AYv);this.Su.AEc(AYL);this.Su.AEd(AYM);this.Su.AEb(
AYK);A.abo([this,this.Bii,this.BsQ],0);},ADc:function(E){if(this.K&&this.K.ADc)return this.
K.ADc.apply(this,arguments);else return C.DeviceClass.Bra.apply(this,arguments);
},Bra:function(E){},BsF:function(Ap){this.ADc(Ap);},UpdateBootloaderVersions:function(
PV,AYy,AYz,AYF,AYn){this.Rz.OnSetTimestamp(PV);this.Rz.ADI(AYy);this.Rz.ADP(AYz);
this.Rz.AD1(AYF);this.Rz.ADm(AYn);A.abo([this,this.Bhu,this.BsF],0);},ADp:function(
E){if(this.K&&this.K.ADp)return this.K.ADp.apply(this,arguments);else return C.DeviceClass.
Brk.apply(this,arguments);},Brk:function(E){},A_m:function(Ap){this.ADp(Ap);},UpdateDryCowListAction:
function(AJ){if(this.AL0===AJ)return;this.AL0=AJ;A.abo([this,this.A6a,this.A_m],
0);},AHV:function(AYp){if(this.K&&this.K.AHV)return this.K.AHV.apply(this,arguments
);else return C.DeviceClass.Bs2.apply(this,arguments);},Bs2:function(AYp){return false;
},ADS:function(E){if(this.K&&this.K.ADS)return this.K.ADS.apply(this,arguments);
else return C.DeviceClass.BrL.apply(this,arguments);},BrL:function(E){},A_v:function(
Ap){this.ADS(Ap);},UpdateNoNaisIdListAction:function(AJ){if(this.AP1===AJ)return;
this.AP1=AJ;A.abo([this,this.A6s,this.A_v],0);},ADb:function(E){if(this.K&&this.
K.ADb)return this.K.ADb.apply(this,arguments);else return C.DeviceClass.Bq_.apply(
this,arguments);},Bq_:function(E){},AG4:function(Ap){this.ADb(Ap);},UpdateBirthListView:
function(AJ){if(this.Apy===AJ)return;this.Apy=AJ;A.abo([this,this.ACV,this.AG4],
0);},BatchResetBirthNoticePending:function(){var B5=A._NewObject(C.Animal,0);var
P;var Aif=0;var AcC=A._GetAutoObject(C.Device).Aq.Filter;var Bc=A._GetAutoObject(
C.Helper).AMK();A._GetAutoObject(C.Device).Aq.Bm(Bc);for(P=0;P<A._GetAutoObject(
C.Device).Aq.Ch();P++){B5.EJ(P,A._GetAutoObject(C.Device).Aq);B5.Aee(false);B5.Co(
A._GetAutoObject(C.Device).Aq);Aif++;}A._GetAutoObject(C.Device).Aq.Bm(AcC);return Aif;
},UpdateTransferProgress:function(AJ){if(this.Aws===AJ)return;this.Aws=AJ;A.abo([
this,this.AQK,this.AX1],0);},AEf:function(E){if(this.K&&this.K.AEf)return this.K.
AEf.apply(this,arguments);else return C.DeviceClass.Br5.apply(this,arguments);},
Br5:function(E){A.ab5("%s",PO);},AX1:function(Ap){this.AEf(Ap);},UpdateTransferTarget:
function(AJ){if(this.AeG===AJ)return;this.AeG=AJ;A.abo([this,this.A6H,this.A_z],
0);},Aq6:function(E){if(this.K&&this.K.Aq6)return this.K.Aq6.apply(this,arguments
);else return C.DeviceClass.Br6.apply(this,arguments);},Br6:function(E){A.ab5("%s"
,Km);},A_z:function(Ap){this.Aq6(Ap);},ArG:function(){if(this.K&&this.K.ArG)return this.
K.ArG.apply(this,arguments);else return C.DeviceClass.Bsx.apply(this,arguments);
},Bsx:function(){},AvL:function(E){if(this.K&&this.K.AvL)return this.K.AvL.apply(
this,arguments);else return C.DeviceClass.BrQ.apply(this,arguments);},BrQ:function(
E){},AXV:function(Ap){this.AvL(Ap);},UpdatePremisesID:function(Q4){if(this.YV===
Q4)return;this.YV=Q4;A.abo([this,this.AQC,this.AXV],0);},AvG:function(E){if(this.
K&&this.K.AvG)return this.K.AvG.apply(this,arguments);else return C.DeviceClass.
BrE.apply(this,arguments);},BrE:function(E){},AG9:function(Ap){this.AvG(Ap);},UpdateMotherSelectionDriedOffFilter:
function(AJ){if(this.Abd===AJ)return;this.Abd=AJ;A.abo([this,this.AC2,this.AG9],
0);},ADv:function(E){if(this.K&&this.K.ADv)return this.K.ADv.apply(this,arguments
);else return C.DeviceClass.Brq.apply(this,arguments);},Brq:function(E){},A_q:function(
Ap){this.ADv(Ap);},UpdateFreshCowSpan:function(AJ){if(this.ApV===AJ)return;this.
ApV=AJ;A.abo([this,this.A6f,this.A_q],0);},UpdateUSBState:function(A$p){if(this.
Akq===A$p)return;this.Akq=A$p;A.abo([this,this.Abl,this.Acd],0);},AEg:function(E
){if(this.K&&this.K.AEg)return this.K.AEg.apply(this,arguments);else return C.DeviceClass.
Br8.apply(this,arguments);},Br8:function(E){A.ab5("%s",EU);},Acd:function(Ap){this.
AEg(Ap);},Ane:function(Ahm){if(this.K&&this.K.Ane)return this.K.Ane.apply(this,arguments
);else return C.DeviceClass.Bsr.apply(this,arguments);},Bsr:function(Ahm){return A.
_NewObject(C.Ai0,0);},Aqg:function(){if(this.K&&this.K.Aqg)return this.K.Aqg.apply(
this,arguments);else return C.DeviceClass.BqS.apply(this,arguments);},BqS:function(
){return false;},ApI:function(Nb){if(this.K&&this.K.ApI)return this.K.ApI.apply(
this,arguments);else return C.DeviceClass.BqN.apply(this,arguments);},BqN:function(
Nb){},AD4:function(E){if(this.K&&this.K.AD4)return this.K.AD4.apply(this,arguments
);else return C.DeviceClass.BrV.apply(this,arguments);},BrV:function(E){},BsN:function(
Ap){this.AD4(Ap);},UpdateSerialNumber:function(AJ){if(this.AgZ===AJ)return;this.
AgZ=AJ;A.abo([this,this.Bh9,this.BsN],0);},Avf:function(E){if(this.K&&this.K.Avf
)return this.K.Avf.apply(this,arguments);else return C.DeviceClass.Bq0.apply(this
,arguments);},Bq0:function(E){},AXJ:function(Ap){this.Avf(Ap);},UpdateAnimalIdAutoGenerationMethod:
function(A$w){if(this.AfM===A$w)return;this.AfM=A$w;A.abo([this,this.AQh,this.AXJ
],0);},AAQ:function(){return false;},AEK:function(){return false;},AD6:function(
E){if(this.K&&this.K.AD6)return this.K.AD6.apply(this,arguments);else return C.DeviceClass.
BrW.apply(this,arguments);},BrW:function(E){},A_w:function(Ap){this.AD6(Ap);},UpdateShutdownTimer:
function(AJ){if(this.ASx===AJ)return;this.ASx=AJ;A.abo([this,this.A6A,this.A_w],
0);},AqK:function(E){if(this.K&&this.K.AqK)return this.K.AqK.apply(this,arguments
);else return C.DeviceClass.Bq4.apply(this,arguments);},Bq4:function(E){},A_f:function(
Ap){this.AqK(Ap);},UpdateAnimalListInfoItemMode:function(AJ){if(this.AlN===AJ)return;
this.AlN=AJ;A.abo([this,this.A53,this.A_f],0);},Art:function(H){if(this.K&&this.
K.Art)return this.K.Art.apply(this,arguments);else return C.DeviceClass.Bso.apply(
this,arguments);},Bso:function(H){},BCi:function(s){this.Art(s);},Aq9:function(E
){if(this.K&&this.K.Aq9)return this.K.Aq9.apply(this,arguments);else return C.DeviceClass.
Bsc.apply(this,arguments);},Bsc:function(E){},A_E:function(Ap){this.Aq9(Ap);},Aq_:
function(E){if(this.K&&this.K.Aq_)return this.K.Aq_.apply(this,arguments);else return C.
DeviceClass.Bsd.apply(this,arguments);},Bsd:function(E){},A_F:function(Ap){this.
Aq_(Ap);},UpdateWeightGainsLowString:function(AJ){if(this.AFB===AJ)return;this.AFB=
AJ;A.abo([this,this.A6Q,this.A_F],0);},UpdateWeightGainsHighString:function(AJ){
if(this.AFA===AJ)return;this.AFA=AJ;A.abo([this,this.A6P,this.A_E],0);},Avh:function(
E){if(this.K&&this.K.Avh)return this.K.Avh.apply(this,arguments);else return C.DeviceClass.
Bq7.apply(this,arguments);},Bq7:function(E){},A_h:function(Ap){this.Avh(Ap);},UpdateAnimalTypesWeightGainsString:
function(AJ){if(this.AAf===AJ)return;this.AAf=AJ;A.abo([this,this.A56,this.A_h],
0);},Aq8:function(E){if(this.K&&this.K.Aq8)return this.K.Aq8.apply(this,arguments
);else return C.DeviceClass.Bsb.apply(this,arguments);},Bsb:function(E){},A_D:function(
Ap){this.Aq8(Ap);},Aq$:function(E){if(this.K&&this.K.Aq$)return this.K.Aq$.apply(
this,arguments);else return C.DeviceClass.Bsh.apply(this,arguments);},Bsh:function(
E){},A_I:function(Ap){this.Aq$(Ap);},UpdateWeightValueBirthString:function(AJ){if(
this.AFD===AJ)return;this.AFD=AJ;A.abo([this,this.A6T,this.A_I],0);},UpdateWeightGainsAverageString:
function(AJ){if(this.AFz===AJ)return;this.AFz=AJ;A.abo([this,this.A6O,this.A_D],
0);},Avv:function(E){if(this.K&&this.K.Avv)return this.K.Avv.apply(this,arguments
);else return C.DeviceClass.Brm.apply(this,arguments);},Brm:function(E){},BsH:function(
Ap){this.Avv(Ap);},UpdateEvaluationAnimalType:function(Eb){if(this.AA$===Eb)return;
this.AA$=Eb;A.abo([this,this.BhE,this.BsH],0);},UpdateStartScreen:function(AJ){if(
this.Awl===AJ)return;this.Awl=AJ;A.abo([this,this.Bh_,this.BsO],0);},AvO:function(
E){if(this.K&&this.K.AvO)return this.K.AvO.apply(this,arguments);else return C.DeviceClass.
BrX.apply(this,arguments);},BrX:function(E){},BsO:function(Ap){this.AvO(Ap);},ACi:
function(){if(this.K&&this.K.ACi)return this.K.ACi.apply(this,arguments);else return C.
DeviceClass.BqQ.apply(this,arguments);},BqQ:function(){return 1;},ACj:function(){
if(this.K&&this.K.ACj)return this.K.ACj.apply(this,arguments);else return C.DeviceClass.
BqR.apply(this,arguments);},BqR:function(){return 1;},GetCommitCount:function(){
return 1946;},GetCommitEpoch:function(){return 1702997218;},GetCommitHash:function(
){return A.kR.BeB;},GetVersionMajor:function(){return 0;},GetVersionMinor:function(
){return 9;},GetVersionRev:function(){return 9;},ADM:function(E){if(this.K&&this.
K.ADM)return this.K.ADM.apply(this,arguments);else return C.DeviceClass.BrA.apply(
this,arguments);},BrA:function(E){},A_s:function(Ap){this.ADM(Ap);},UpdateMaximumAgeNewOnFarm:
function(AJ){if(this.ACz===AJ)return;this.ACz=AJ;A.abo([this,this.A6p,this.A_s],
0);},AvU:function(E){if(this.K&&this.K.AvU)return this.K.AvU.apply(this,arguments
);else return C.DeviceClass.Br7.apply(this,arguments);},Br7:function(E){},AX2:function(
Ap){this.AvU(Ap);},UpdateTransponderAssignmentIdChangeMethod:function(A$m){if(this.
Ag9===A$m)return;this.Ag9=A$m;A.abo([this,this.AQL,this.AX2],0);},BatchResetPurchasedNoticePending:
function(){var B5=A._NewObject(C.Animal,0);var P;var Aif=0;var AcC=A._GetAutoObject(
C.Device).Aq.Filter;var Bc=A._GetAutoObject(C.Helper).AMV();A._GetAutoObject(C.Device
).Aq.Bm(Bc);for(P=0;P<A._GetAutoObject(C.Device).Aq.Ch();P++){B5.EJ(P,A._GetAutoObject(
C.Device).Aq);B5.Aee(false);B5.Co(A._GetAutoObject(C.Device).Aq);Aif++;}A._GetAutoObject(
C.Device).Aq.Bm(AcC);return Aif;},ADn:function(E){if(this.K&&this.K.ADn)return this.
K.ADn.apply(this,arguments);else return C.DeviceClass.Bre.apply(this,arguments);
},Bre:function(E){},AXL:function(Ap){this.ADn(Ap);},UpdateDataExportDestination:
function(AJ){if(this.Ve===AJ)return;this.Ve=AJ;A.abo([this,this.AQm,this.AXL],0);
},Bj0:function(E){},UpdateMassRecordingAutomatic:function(AJ){if(this.APA===AJ)return;
this.APA=AJ;A.abo([this,this.BhX,this.Bj0],0);},M5:function(E){if(this.K&&this.K.
M5)return this.K.M5.apply(this,arguments);else return C.DeviceClass.Bsi.apply(this
,arguments);},Bsi:function(E){},BsR:function(Ap){this.M5(Ap);},UpdateWhereAbouts:
function(Ae4){if(this.WhereAbouts===Ae4)return;this.WhereAbouts=Ae4;A.abo([this,
this.Avc,this.BsR],0);},AqG:function(E){if(this.K&&this.K.AqG)return this.K.AqG.
apply(this,arguments);else return C.DeviceClass.BqV.apply(this,arguments);},BqV:
function(E){},A_a:function(Ap){this.AqG(Ap);},AqH:function(E){if(this.K&&this.K.
AqH)return this.K.AqH.apply(this,arguments);else return C.DeviceClass.BqW.apply(
this,arguments);},BqW:function(E){},A_b:function(Ap){this.AqH(Ap);},UpdateActiveMassRecordingFields:
function(AJ){if(this.Az$===AJ)return;this.Az$=AJ;A.abo([this,this.A5W,this.A_a],
0);},UpdateActiveMassRecordingFieldsOrder:function(AJ){if(this.AAa===AJ)return;this.
AAa=AJ;A.abo([this,this.A5X,this.A_b],0);},Arp:function(H){if(this.K&&this.K.Arp
)return this.K.Arp.apply(this,arguments);else return C.DeviceClass.Bsl.apply(this
,arguments);},Bsl:function(H){},BCf:function(s){this.Arp(s);},ADK:function(E){if(
this.K&&this.K.ADK)return this.K.ADK.apply(this,arguments);else return C.DeviceClass.
Bry.apply(this,arguments);},Bry:function(E){},AG7:function(Ap){this.ADK(Ap);},UpdateMassRecordingDateOfBirthMandatory:
function(AJ){if(this.Ad3===AJ)return;this.Ad3=AJ;A.abo([this,this.ACZ,this.AG7],
0);},ADJ:function(E){this.UpdateMassRecordingCounter(E);},UpdateMassRecordingCounter:
function(AJ){if(this.AuS===AJ)return;this.AuS=AJ;A.abo([this,this.A6o,this.ADJ],
0);},Bei:function(){return false;},Beh:function(){return false;},Beg:function(){
return false;},Bej:function(){return false;},ACT:function(){return this.Kv;},AuZ:
function(){return this.Aak;},Au2:function(){return this.AlW;},AQF:function(){return this.
ScanState;},AC0:function(){return this.MeasureState;},AC3:function(){return this.
Ki;},A6k:function(){return this.Language;},AqA:function(){return this.TemperatureUnit;
},A5$:function(){return this.AK6;},AQv:function(){return this.ACF;},Avb:function(
){return this.OverlayMenu;},A6I:function(){return this.Zj;},AQH:function(){return this.
SyncState;},A6J:function(){return this.ArQ;},AC4:function(){return this.ATf;},AQE:
function(){return this.RatingMode;},Aqx:function(){return this.Al9;},AQJ:function(
){return this.AS0;},Bh3:function(){return this.ARS;},Bhs:function(){return this.
AutoRegistrationMode;},AQG:function(){return this.Oz;},Abj:function(){return this.
FM;},Abk:function(){return this.Fv;},AC5:function(){return this.IH;},AQu:function(
){return this.MassUnit;},A5V:function(){return this.O2;},AQg:function(){return this.
Atw;},A57:function(){return this.AutoActions;},Px:function(){return this.AnimalType;
},A6R:function(){return this.WeightRecordingMode;},AQB:function(){return this.AEw;
},ACX:function(){return this.Hv;},A50:function(){return this.AiH;},A6S:function(
){return this.WeightRecordingScope;},V0:function(){return this.Gender;},Au7:function(
){return this.Ap6;},Au6:function(){return this.Ap5;},ACU:function(){return this.
Jz;},A52:function(){return this.AKf;},A6c:function(){return this.Al8;},AQi:function(
){return this.D1;},A6N:function(){return this.ATh;},A6e:function(){return this.AME;
},A55:function(){return this.AAe;},A6D:function(){return this.AFe;},A6E:function(
){return this.AFf;},AQy:function(){return this.AP6;},BhL:function(){return this.
Ama;},A6r:function(){return this.ACH;},A6q:function(){return this.ACG;},Au_:function(
){return this.APO;},Au9:function(){return this.APN;},A5_:function(){return this.
ApA;},A5U:function(){return this.Az_;},Bho:function(){return this.AlH;},AmI:function(
){return this.H9;},AQn:function(){return this.AA3;},AQo:function(){return this.AA4;
},ACY:function(){return this.At0;},AmL:function(){return this.Aji;},AQw:function(
){return this.AuW;},Au$:function(){return this.APP;},Au5:function(){return this.
EartagNrAssignmentMode;},Au1:function(){return this.Breed;},BhY:function(){return this.
R$;},BhW:function(){return this.QC;},Bii:function(){return this.Su;},Bhu:function(
){return this.Rz;},A6a:function(){return this.AL0;},A6s:function(){return this.AP1;
},ACV:function(){return this.Apy;},AQK:function(){return this.Aws;},A6H:function(
){return this.AeG;},AQC:function(){return this.YV;},AC2:function(){return this.Abd;
},A6f:function(){return this.ApV;},Abl:function(){return this.Akq;},Bh9:function(
){return this.AgZ;},AQh:function(){return this.AfM;},A6A:function(){return this.
ASx;},A53:function(){return this.AlN;},A6P:function(){return this.AFA;},A6Q:function(
){return this.AFB;},A56:function(){return this.AAf;},A6O:function(){return this.
AFz;},A6T:function(){return this.AFD;},BhE:function(){return this.AA$;},Bh_:function(
){return this.Awl;},A6p:function(){return this.ACz;},AQL:function(){return this.
Ag9;},AQm:function(){return this.Ve;},BhX:function(){return this.APA;},Avc:function(
){return this.WhereAbouts;},A5W:function(){return this.Az$;},A5X:function(){return this.
AAa;},ACZ:function(){return this.Ad3;},A6o:function(){return this.AuS;},_Init:function(
aArg){C.Table._Init.call(this.Aq={I:this},0);C.Table._Init.call(this.Bq={I:this}
,0);C.Table._Init.call(this.AfK={I:this},0);A.Core.A8U._Init.call(this.Am7={I:this
},0);C.Table._Init.call(this.O7={I:this},0);this.__proto__=C.DeviceClass;this.Aq.
OnSetId(0);this.Bq.OnSetId(1);this.AfK.OnSetId(3);this.O7.OnSetId(4);this.Oz=A._NewObject(
C.Transponder,0);this.R$=A._NewObject(C.Awj,0);this.QC=A._NewObject(C.Auq,0);this.
Su=A._NewObject(C.Auq,0);this.Rz=A._NewObject(C.Awj,0);var Lk=this._variants();if(
Lk){this.K={};Lk._Init.call(this,aArg);}A.h7++;},_Done:function(){if(this.K)this.
K._Done.call(this);this.__proto__=null;this.Aq._Done();this.Bq._Done();this.AfK.
_Done();this.Am7._Done();this.O7._Done();A.h7--;},_ReInit:function(){this.Aq._ReInit(
);this.Bq._ReInit();this.AfK._ReInit();this.Am7._ReInit();this.O7._ReInit();if(this.
K)this.K._ReInit.call(this);},_Mark:function(D){var B;if((B=this.Oz)&&(B._cycle!=
D))B._Mark(B._cycle=D);if((B=this.R$)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.
QC)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Su)&&(B._cycle!=D))B._Mark(B._cycle=
D);if((B=this.Rz)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Aq)._cycle!=D)B.
_Mark(B._cycle=D);if((B=this.Bq)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AfK)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.Am7)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
O7)._cycle!=D)B._Mark(B._cycle=D);if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=
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
102,TextInput:103,LAST:104};C.Operator={Equal:0,None:1,Greater:2,Less:3,Contains:
4,Unequal:5};C.MeasureState={Idle:0,Progress:1,Prediction:2,Ready:3,Error:4,LAST:
5};C.StringFilterCriterion={A4:A.jV,Adz:function(){var Ay=A._NewObject(C.StringFilterCriterion
,0);Ay.Gu(this);return Ay;},Gu:function(AM){C.FilterCriterion.Gu.call(this,AM);var
Ay=(C.StringFilterCriterion.isPrototypeOf(AM)?AM:null);if(!!Ay)this.A4=Ay.A4;},_Init:
function(aArg){C.FilterCriterion._Init.call(this,aArg);this.__proto__=C.StringFilterCriterion;
},_className:"Device::StringFilterCriterion"};C.Table={CA:function(Ac,AX){if(this.
K&&this.K.CA)return this.K.CA.apply(this,arguments);else return C.ITable.CA.apply(
this,arguments);},Vo:function(Ac,AX){if(this.K&&this.K.Vo)return this.K.Vo.apply(
this,arguments);else return C.ITable.Vo.apply(this,arguments);},HT:function(Ac,AX
){if(this.K&&this.K.HT)return this.K.HT.apply(this,arguments);else return C.ITable.
HT.apply(this,arguments);},OnSetId:function(E){if(this.K&&this.K.OnSetId)return this.
K.OnSetId.apply(this,arguments);else return C.ITable.OnSetId.apply(this,arguments
);},Ch:function(){if(this.K&&this.K.Ch)return this.K.Ch.apply(this,arguments);else
return C.ITable.Ch.apply(this,arguments);},Bm:function(E){if(this.K&&this.K.Bm)return this.
K.Bm.apply(this,arguments);else return C.ITable.Bm.apply(this,arguments);},Vp:function(
Ac,AX){if(this.K&&this.K.Vp)return this.K.Vp.apply(this,arguments);else return C.
ITable.Vp.apply(this,arguments);},RW:function(Ac,AX){if(this.K&&this.K.RW)return this.
K.RW.apply(this,arguments);else return C.ITable.RW.apply(this,arguments);},Oi:function(
){if(this.K&&this.K.Oi)return this.K.Oi.apply(this,arguments);else return C.ITable.
Oi.apply(this,arguments);},Ol:function(An3){if(this.K&&this.K.Ol)return this.K.Ol.
apply(this,arguments);else return C.ITable.Ol.apply(this,arguments);},X7:function(
){if(this.K&&this.K.X7)return this.K.X7.apply(this,arguments);else return C.ITable.
X7.apply(this,arguments);},Y5:function(Ac,AX,CV){if(this.K&&this.K.Y5)return this.
K.Y5.apply(this,arguments);else return C.ITable.Y5.apply(this,arguments);},Ha:function(
Ac,AX,CV){if(this.K&&this.K.Ha)return this.K.Ha.apply(this,arguments);else return C.
ITable.Ha.apply(this,arguments);},Y4:function(Ac,AX,CV){if(this.K&&this.K.Y4)return this.
K.Y4.apply(this,arguments);else return C.ITable.Y4.apply(this,arguments);},M8:function(
Ac,AX,CV){if(this.K&&this.K.M8)return this.K.M8.apply(this,arguments);else return C.
ITable.M8.apply(this,arguments);},Y3:function(Ac,AX,CV){if(this.K&&this.K.Y3)return this.
K.Y3.apply(this,arguments);else return C.ITable.Y3.apply(this,arguments);},K3:function(
aColumn,A1){if(this.K&&this.K.K3)return this.K.K3.apply(this,arguments);else return C.
ITable.K3.apply(this,arguments);},LE:function(Ac,AX){if(this.K&&this.K.LE)return this.
K.LE.apply(this,arguments);else return C.ITable.LE.apply(this,arguments);},T3:function(
Ac,AX,CV){if(this.K&&this.K.T3)return this.K.T3.apply(this,arguments);else return C.
ITable.T3.apply(this,arguments);},Ai_:function(aColumn,A1){if(this.K&&this.K.Ai_
)return this.K.Ai_.apply(this,arguments);else return C.ITable.Ai_.apply(this,arguments
);},G$:function(){if(this.K&&this.K.G$)return this.K.G$.apply(this,arguments);else
return C.ITable.G$.apply(this,arguments);},Ai7:function(aColumn,A1){if(this.K&&this.
K.Ai7)return this.K.Ai7.apply(this,arguments);else return C.ITable.Ai7.apply(this
,arguments);},Af8:function(aColumn,A1){if(this.K&&this.K.Af8)return this.K.Af8.apply(
this,arguments);else return C.ITable.Af8.apply(this,arguments);},Hz:function(){if(
this.K&&this.K.Hz)return this.K.Hz.apply(this,arguments);else return C.ITable.Hz.
apply(this,arguments);},AaI:function(){if(this.K&&this.K.AaI)return this.K.AaI.apply(
this,arguments);else return C.ITable.AaI.apply(this,arguments);},Qm:function(){if(
this.K&&this.K.Qm)return this.K.Qm.apply(this,arguments);else return C.ITable.Qm.
apply(this,arguments);},_Init:function(aArg){C.ITable._Init.call(this,aArg);this.
__proto__=C.Table;var Lk=this._variants();if(Lk){this.K={};Lk._Init.call(this,aArg
);}},_Done:function(){if(this.K)this.K._Done.call(this);this.__proto__=C.ITable;
C.ITable._Done.call(this);},_ReInit:function(){C.ITable._ReInit.call(this);if(this.
K)this.K._ReInit.call(this);},_Mark:function(D){C.ITable._Mark.call(this,D);if(this.
K)this.K._Mark(D);},_variants:function(){return A.acr.Table._variants();},K:null
,_className:"Device::Table"};C.TableId={Animal:0,Rating:1,Undefined:2,AnimalGroup:
3,CalfDeregistrations:4};C.ScanState={Idle:0,Progress:1,IdScanned:2,NotFound:3,Error:
4,LAST:5};C.RatedAttribute={None:0,Feed:1,Appearance:2,Respiratory:3,Faeces:4};C.
ConverterClass={MN:null,Akk:function(An1){var A$6;var Atj=this.ASQ(An1/100,0,A._GetAutoObject(
C.Device).TemperatureUnit);A$6=A.abk(Atj,0,1);return A$6;},A82:function(M$){if(M$<=
0)return 0;else if(M$<=1)return 5;else if(M$<=2)return 3;else if(M$<=4)return 2;
else if(M$<=6)return 1;else if(M$<=8)return 4;else return 0;},Adh:function(M$){var
a=0;switch(M$){case 3:a=2;break;case 2:a=4;break;case 1:a=6;break;case 0:a=0;break;
case 4:a=8;break;case 5:a=1;break;default:A.ab5("%s",NV);}return a;},ArJ:function(
Eb,Q8){var Nc=A._GetAutoObject(C.Converter).AiI(Q8,Eb);switch(Nc){case 3:return 1;
case 2:return 2;case 1:return 3;case 0:return 4;default:throw new Error(PP+Nc.toFixed(
));}},Ag7:function(){var B;var D0=A._NewObject(A.Core.Bt,0).Initialize(A._GetAutoObject(
C.Helper).Dx());D0.AmV(0);D0.AmY(0);D0.Am1(0);return((B=(D0.JF()|0))<0)?B+0x100000000:
B;},BeF:function(Asl){var Dg;switch(Asl){case 36:Dg=Mt;break;case 40:Dg=SF;break;
case 56:Dg=Uk;break;case 70:Dg=Zn;break;case 100:Dg=Wr;break;case 124:Dg=IJ;break;
case 156:Dg=Ul;break;case 158:Dg=Zo;break;case 191:Dg=Ws;break;case 196:Dg=Zp;break;
case 203:Dg=Um;break;case 208:Dg=Zq;break;case 233:Dg=Zr;break;case 246:Dg=Un;break;
case 250:Dg=Wt;break;case 276:Dg=QZ;break;case 300:Dg=Zs;break;case 348:Dg=OJ;break;
case 372:Dg=PQ;break;case 380:Dg=Wu;break;case 392:Dg=Wv;break;case 428:Dg=Ww;break;
case 440:Dg=Zt;break;case 442:Dg=Zu;break;case 470:Dg=Wx;break;case 528:Dg=Wy;break;
case 578:Dg=SG;break;case 616:Dg=Zv;break;case 620:Dg=Zw;break;case 642:Dg=Ab7;break;
case 643:Dg=Uo;break;case 703:Dg=Zx;break;case 705:Dg=AeS;break;case 724:Dg=Zy;break;
case 752:Dg=Wz;break;case 756:Dg=WA;break;case 792:Dg=Zz;break;case 804:Dg=AeT;break;
case 826:Dg=JN;break;case 840:Dg=AeU;break;default:Dg=Asl.toFixed();}return Dg;}
,Anu:function(NZ){return this.NU(NZ,1,false);},AwE:function(NZ,Aoh){return this.
NU(NZ,Aoh,false);},NU:function(NZ,Aoh,Bv5){var B;var AkV=A.jV;switch(A._GetAutoObject(
C.Device).MassUnit){case 0:if(Bv5)AkV=A.abl(NZ,0,0);else{var Bbm=NZ<0;if(Aoh<3)NZ=
NZ+(((Bbm?-1:1)*5)*(Math.pow(10,2-Aoh)|0));AkV=(((((B=NZ)>-2147483648)?Math.abs(
B):B)/1000)|0).toFixed();if(Aoh>0)AkV=AkV+(Lj+A.abV(A.abl((((B=NZ)>-2147483648)?
Math.abs(B):B)%1000,3,10),Aoh));if(Bbm)AkV=Aha+AkV;}break;case 1:AkV=A.abk(NZ/453.592
,0,Aoh);break;default:A.ab5("%s%s",Anw,A._GetAutoObject(C.Device).MassUnit.toFixed(
));}return AkV;},Ub:function(LX){var A1S=LX.toFixed();var Bdv=A1S.length;if((Bdv>=
14)&&(Bdv<=15)){var AZT=this.Awu(LX);var BuX=A._GetAutoObject(C.Converter).BeF(AZT
);A1S=(BuX+NW)+A.abm(A._GetAutoObject(C.Helper).Vi(LX,0,12),12,10);}return A1S;}
,Amb:function(LT){switch(LT){case 0:return A.aaL(A.ach.AOy);case 1:return A.aaL(
A.ach.AB4);case 2:return A.aaL(A.ach.AB9);default:{A.ab5("%s%e",WC,LT);return null;
}}},A2y:function(Buu){switch(Buu){case 0:return A.aaL(A.ach.Auz);case 1:return A.
aaL(A.ach.AB0);case 2:return A.aaL(A.ach.AOs);default:throw new Error(Anx);}},AfP:
function(AHC){switch(AHC){case 0:return A.aaL(A.ach.Ajj);case 2:return A.aaL(A.ach.
Amj);case 1:return A.aaL(A.ach.AaU);case 3:switch(A._GetAutoObject(C.Device).MassUnit
){case 0:return A.aaL(A.ach.AuI);case 1:return A.aaL(A.ach.AuJ);default:throw new
Error(Ahb+A._GetAutoObject(C.Device).MassUnit.toFixed());}break;case 4:return A.
aaL(A.ach.ANT);case 5:return A.aaL(A.ach.ANU);case 6:return A.aaL(A.ach.ANY);case
7:return A.aaL(A.ach.ANh);case 8:return A.aaL(A.ach.ANo);case 9:return A.aaL(A.ach.
ABC);case 10:return A.aaL(A.ach.ANn);case 11:return A.aaL(A.ach.ANp);default:throw new
Error(Ahc+AHC.toFixed());}},Bd4:function(AxJ){switch(AxJ){case 0:return A.aaL(A.
ach.AB7);case 3:return A.aaL(A.ach.Amj);case 1:return A.aaL(A.ach.AaU);case 2:return A.
_GetAutoObject(A.acj.DI).Bas();default:throw new Error(Ahc+AxJ.toFixed());}},BeE:
function(Asl){switch(Asl){case 977:return Ab8;case 978:return Uq;case 980:return Any;
case 981:return Anz;case 982:return AwF;case 983:return AwG;case 984:return Akv;
case 985:return AwH;default:return A.aaR(A.acf.Unknown);}},BeX:function(Ack){switch(
Ack){case 1:return 0x278A;case 2:return 0x278B;case 3:return 0x278C;case 4:return 0x278D;
case 5:return 0x278E;case 6:return 0x278F;case 7:return 0x2790;case 8:return 0x2791;
case 9:return 0x2792;case 10:return 0x2793;default:return 0x20;}},Bmz:function(LX
){if(!LX)return-1;return(LX%100000000)|0;},Bfr:function(An0,aFilter){var B;if(!aFilter
)return AeV;var Aos=ArW;var Ay=aFilter.AMN();while(!!Ay){Aos=Aos+A._GetAutoObject(
C.Helper).A4l(An0,Ay);Ay=aFilter.AMS(Ay);if(!!Ay)Aos=Aos+OK;}Aos=Aos+SI;return Aos;
},A42:function(A__){var Mu=0;switch(A__){case 14:Mu=2;break;case 13:Mu=4;break;case
6:Mu=36;break;case 11:Mu=9;break;case 0:Mu=39;break;case 10:Mu=26;break;case 12:
Mu=12;break;case 5:Mu=14;break;case 3:Mu=15;break;case 1:Mu=10;break;case 8:Mu=16;
break;case 4:Mu=20;break;case 15:Mu=27;break;case 9:Mu=31;break;case 2:Mu=13;break;
case 7:Mu=35;break;case 16:Mu=37;break;default:A.ab5("%s%e",AwI,A__);}return Mu;
},Bd3:function(AxJ){switch(AxJ){case 0:return 1;case 3:return 0;case 1:return 2;
case 2:switch(A._GetAutoObject(C.Device).MassUnit){case 0:return 3;case 1:return 4;
default:throw new Error(Ahb+A._GetAutoObject(C.Device).MassUnit.toFixed());}break;
default:throw new Error(Ahc+AxJ.toFixed());}},Bd5:function(An_){switch(An_){case
0:return A.aaL(A.ach.ANQ);case 1:return A.aaL(A.ach.AB7);case 9:return A.aaL(A.ach.
AN0);case 4:return A.aaL(A.ach.AEI);case 6:return A.aaL(A.ach.Arm);case 8:return A.
aaL(A.ach.Auv);case 2:return A.aaL(A.ach.AaU);case 3:return A.aaL(A.ach.Amj);case
10:switch(A._GetAutoObject(C.Device).MassUnit){case 0:return A.aaL(A.ach.AuI);case
1:return A.aaL(A.ach.AuJ);default:throw new Error(Ahb+A._GetAutoObject(C.Device).
MassUnit.toFixed());}break;case 7:case 5:case 11:case 12:case 13:case 14:case 18:
case 15:case 16:case 17:return A.aaL(A.aci.Tl);default:throw new Error(SJ+An_.toFixed(
));}},ALD:function(Asl){switch(Asl){case 40:return 1;case 56:return 3;case 70:return 2;
case 100:return 4;case 124:return 5;case 156:return 7;case 158:return 36;case 191:
return 17;case 196:return 8;case 203:return 9;case 208:return 11;case 233:return 12;
case 246:return 14;case 250:return 15;case 276:return 10;case 300:return 16;case
348:return 18;case 372:return 19;case 380:return 20;case 392:return 21;case 428:
return 24;case 440:return 22;case 442:return 23;case 470:return 25;case 528:return 26;
case 578:return 27;case 616:return 28;case 620:return 29;case 642:return 30;case
643:return 31;case 703:return 34;case 705:return 33;case 724:return 13;case 752:
return 32;case 756:return 6;case 792:return 35;case 804:return 37;case 826:return 38;
case 840:return 39;default:return 0;}},AeJ:function(LX){var AZT=this.Awu(LX);return this.
ALD(AZT);},Awu:function(LX){return A._GetAutoObject(C.Helper).Vi(LX,12,3)|0;},A9g:
function(An5,Eb){if(An5<A._GetAutoObject(C.Helper).ABy(Eb))return 1;else if(An5<
A._GetAutoObject(C.Helper).ABx(Eb))return 2;else return 3;},AMJ:function(Bua){switch(
Bua){case 1:return 1;case 2:return 2;case 3:return 3;case 4:return 4;case 5:return 5;
case 6:return 6;case 7:return 7;case 8:return 8;case 9:return 9;case 10:return 10;
case 11:return 11;case 12:return 12;case 13:return 13;case 14:return 14;case 15:
return 15;case 16:return 16;default:return 0;}},ASQ:function(A1,AHv,AHw){if(AHv===
AHw)return A1;if(!AHv&&(AHw===1)){var result=((A1*9)/5)+32;return result;}if((AHv===
1)&&!AHw){var result=((A1-32)*5)/9;return result;}throw new Error(((ArX+AHv.toFixed(
))+AwJ)+AHw.toFixed());},A38:function(EC){switch(EC){case 0:return AwK;case 1:return A.
jV;case 2:return AwL;case 3:return AnA;case 4:return A.aaR(A.acf.Contains);case 5:
return AwM;default:{A.ab5("%s%e",ArY,EC);return A.jV;}}},A28:function(Acj){return this.
MN.AdC(Acj);},Bf9:function(Acj){return this.MN.AlY(Acj);},Beo:function(Ask){var AyZ=
0;switch(Ask){case 0:AyZ=1;break;case 1:AyZ=2;break;case 2:AyZ=3;break;case 3:AyZ=
4;break;default:A.ab5("%s%e",KL,Ask);}return AyZ;},AiI:function(AYh,Eb){if(AYh>=
A._GetAutoObject(C.Helper).A4h(Eb))return 3;else if(AYh>=A._GetAutoObject(C.Helper
).Aum(Eb))return 2;else if(AYh<A._GetAutoObject(C.Device).Zj)return 0;else return 1;
},AtR:function(Mu){var BJ=-1;switch(Mu){case 0:BJ=0;break;case 1:BJ=40;break;case
2:BJ=70;break;case 3:BJ=56;break;case 4:BJ=100;break;case 5:BJ=124;break;case 6:
BJ=756;break;case 7:BJ=156;break;case 8:BJ=196;break;case 9:BJ=203;break;case 10:
BJ=276;break;case 11:BJ=208;break;case 12:BJ=233;break;case 13:BJ=724;break;case
14:BJ=246;break;case 15:BJ=250;break;case 16:BJ=300;break;case 17:BJ=191;break;case
18:BJ=348;break;case 19:BJ=372;break;case 20:BJ=380;break;case 21:BJ=392;break;case
22:BJ=440;break;case 23:BJ=442;break;case 24:BJ=428;break;case 25:BJ=470;break;case
26:BJ=528;break;case 27:BJ=578;break;case 28:BJ=616;break;case 29:BJ=620;break;case
30:BJ=642;break;case 31:BJ=643;break;case 32:BJ=752;break;case 33:BJ=705;break;case
34:BJ=703;break;case 35:BJ=792;break;case 36:BJ=158;break;case 37:BJ=804;break;case
38:BJ=826;break;case 39:BJ=840;break;default:throw new Error(AwN+Mu.toFixed());}
return BJ;},_Init:function(aArg){C.MN._Init.call(this.MN={I:this},0);this.__proto__=
C.ConverterClass;A.h7++;},_Done:function(){this.__proto__=null;this.MN._Done();A.
h7--;},_ReInit:function(){this.MN._ReInit();},_Mark:function(D){var B;if((B=this.
MN)._cycle!=D)B._Mark(B._cycle=D);if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=
D);},I:null,_cycle:0,_observers:null,_className:"Device::ConverterClass"};C.Converter={
_Init:function(){C.ConverterClass._Init.call(this,0);},_ReInit:function(){},_variants:
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
false,IsAlarm:false,EJ:function(Ac,AG){var Ht=C.Row.EJ.call(this,Ac,AG);if(Ht&&!
!AG){this.OnSetId(AG.CA(Ac,0));this.TU(AG.CA(Ac,1));this.Abr(AG.CA(Ac,2));this.AmX(
AG.CA(Ac,3));this.Sd(AG.Hy(Ac,4));this.JG(AG.AMP(Ac,7));this.AjN(AG.BfK(Ac,6));this.
DS(AG.Amc(Ac,14));this.M4(AG.LE(Ac,22));this.M3(AG.LE(Ac,26));this.AvY(AG.IU(Ac,
13));this.Aec(AG.HT(Ac,8));this.AvR(AG.Hy(Ac,15));this.ARp(AG.Hy(Ac,31));this.Aeh(
AG.A4t(Ac,5));this.AQ6(AG.IU(Ac,17));this.TR(AG.HT(Ac,11));this.ARo(AG.Hy(Ac,16)
);this.ARr(AG.Hy(Ac,30));this.AjV(AG.HT(Ac,9));this.Aef(AG.HT(Ac,12));this.ARq(AG.
Hy(Ac,20));this.AvT(AG.Hy(Ac,21));this.AgK(AG.HT(Ac,10));this.AvA(AG.HT(Ac,27));
this.ADD(AG.ABs(Ac,18));this.AD9(AG.Hy(Ac,19));this.Avy(AG.ABs(Ac,23));this.AvS(
AG.Hy(Ac,24));this.AQY(AG.CA(Ac,25));this.Avp(AG.Hy(Ac,28));this.AvB(AG.CA(Ac,29
));this.AqV(AG.HT(Ac,38));this.NH(AG.BfL(Ac,32));this.AjQ(AG.BfO(Ac,33));this.AmZ(
AG.LE(Ac,35));this.M5(AG.AMZ(Ac,34));this.Aee(AG.HT(Ac,37));this.ADZ(AG.BfX(Ac,36
));}return Ht;},Co:function(AG){var Ht=C.Row.Co.call(this,AG);if(Ht&&!!AG){var Jc=
AG.Oi();if(Jc<=0)A.ab5("%s",Ab9);else{var AyD=this.Amo();if(AyD)this.CE=AG.X7();
else AG.Ha(this.CE,0,this.Id);AG.Ha(this.CE,1,this.VisualId);AG.Ha(this.CE,2,this.
GroupId);AG.Ha(this.CE,3,this.LocationId);AG.AbK(this.CE,4,this.DateOfBirth);AG.
Bls(this.CE,7,this.Gender);AG.Blo(this.CE,6,this.BirthType);AG.Blm(this.CE,14,this.
AnimalType);AG.T3(this.CE,22,this.TransponderId);AG.T3(this.CE,26,this.NaisId);AG.
Akb(this.CE,13,this.WorstAssessment);AG.M8(this.CE,8,this.IsAlarm);AG.AbK(this.CE
,15,this.TimestampAlarm);AG.M8(this.CE,11,this.IsFever);AG.AbK(this.CE,16,this.TimestampExpirationFeverAlarm
);AG.M8(this.CE,9,this.IsControl);AG.M8(this.CE,12,this.IsWatch);AG.AbK(this.CE,
20,this.TimestampLastControl);AG.AbK(this.CE,21,this.TimestampLastWatch);AG.M8(this.
CE,10,this.IsRegistered);AG.M8(this.CE,27,this.IsPerished);AG.AbK(this.CE,28,this.
DateOfLastCalving);AG.Ha(this.CE,29,this.LactationNumber);AG.M8(this.CE,38,this.
IsDry);AG.Blq(this.CE,32,this.Breed);AG.Blr(this.CE,33,this.EaseOfDelivery);AG.T3(
this.CE,35,this.NaisIdMother);AG.Bly(this.CE,34,this.WhereAbouts);AG.M8(this.CE,
37,this.IsRegistrationNoticePending);AG.Blw(this.CE,36,this.ReasonOfLeaving);Ht=
AG.Ol(Jc);if(AyD)this.OnSetId(AG.AaI());}}return Ht;},F$:function(){C.Row.F$.call(
this);this.OnSetId(-1);this.AgK(true);},G$:function(){C.Row.G$.call(this);this.OnSetId(
0);this.TU(0);this.Abr(0);this.AmX(0);this.Sd(0);this.JG(A._GetAutoObject(C.Device
).Gender);this.AjN(0);this.DS(A._GetAutoObject(C.Device).AnimalType);this.M4(0);
this.M3(0);this.AvY(0);this.Aec(false);this.AvR(0);this.ARp(0);this.Aeh(0);this.
AQ6(0);this.TR(false);this.ARr(0);this.ARo(0);this.AjV(false);this.Aef(false);this.
ARq(0);this.AvT(0);this.AgK(false);this.AvA(false);this.ADD(0);this.AD9(0);this.
Avy(0);this.AvS(0);this.AQY(-1);this.Avp(0);this.AvB(0);this.AqV(false);this.NH(
0);this.AjQ(0);this.AmZ(0);this.M5(0);this.Aee(false);this.ADZ(0);},OnSetId:function(
E){if(this.Id===E)return;this.Id=E;A.abo([this,this.QF,this.OnSetId],0);},TU:function(
E){if(this.VisualId===E)return;this.VisualId=E;A.abo([this,this.AqB,this.TU],0);
},Abr:function(E){if(this.GroupId===E)return;this.GroupId=E;A.abo([this,this.BhM
,this.Abr],0);},Sd:function(E){if(this.DateOfBirth===E)return;this.DateOfBirth=E;
A.abo([this,this.Au3,this.Sd],0);},JG:function(E){if(this.Gender===E)return;this.
Gender=E;A.abo([this,this.V0,this.JG],0);},AjN:function(E){if(this.BirthType===E
)return;this.BirthType=E;A.abo([this,this.AQk,this.AjN],0);},AmX:function(E){if(
this.LocationId===E)return;this.LocationId=E;A.abo([this,this.A6n,this.AmX],0);}
,Aeh:function(E){if(this.LastTemperature===E)return;this.LastTemperature=E;A.abo([
this,this.A6m,this.Aeh],0);},Aec:function(E){if(this.IsAlarm===E)return;this.IsAlarm=
E;A.abo([this,this.A6h,this.Aec],0);},AjV:function(E){if(this.IsControl===E)return;
this.IsControl=E;A.abo([this,this.BhP,this.AjV],0);},AgK:function(E){if(this.IsRegistered===
E)return;this.IsRegistered=E;A.abo([this,this.BhS,this.AgK],0);},Aef:function(E){
if(this.IsWatch===E)return;this.IsWatch=E;A.abo([this,this.A6j,this.Aef],0);},AvY:
function(E){if(this.WorstAssessment===E)return;this.WorstAssessment=E;A.abo([this
,this.A6U,this.AvY],0);},TR:function(E){if(this.IsFever===E)return;this.IsFever=
E;A.abo([this,this.A6i,this.TR],0);},ARq:function(E){if(this.TimestampLastControl===
E)return;this.TimestampLastControl=E;A.abo([this,this.Bif,this.ARq],0);},AvT:function(
E){if(this.TimestampLastWatch===E)return;this.TimestampLastWatch=E;A.abo([this,this.
Bih,this.AvT],0);},AQ6:function(E){if(this.LastRatingTemperature===E)return;this.
LastRatingTemperature=E;A.abo([this,this.BhV,this.AQ6],0);},ARo:function(E){if(this.
TimestampExpirationFeverAlarm===E)return;this.TimestampExpirationFeverAlarm=E;A.
abo([this,this.Bid,this.ARo],0);},AvR:function(E){if(this.TimestampAlarm===E)return;
this.TimestampAlarm=E;A.abo([this,this.Bic,this.AvR],0);},DS:function(E){if(this.
AnimalType===E)return;this.AnimalType=E;A.abo([this,this.Px,this.DS],0);},ADD:function(
E){if(this.LastBodyWeight===E)return;this.LastBodyWeight=E;A.abo([this,this.A6l,
this.ADD],0);},AD9:function(E){if(this.TimestampLastWeighing===E)return;this.TimestampLastWeighing=
E;A.abo([this,this.A6G,this.AD9],0);},M4:function(E){if(this.TransponderId===E)return;
this.TransponderId=E;A.abo([this,this.AjK,this.M4],0);},S9:function(){return A._GetAutoObject(
C.Helper).MB(this.DateOfBirth,A._GetAutoObject(C.Helper).Dx());},Avy:function(E){
if(this.FirstBodyWeight===E)return;this.FirstBodyWeight=E;A.abo([this,this.AQq,this.
Avy],0);},AvS:function(E){if(this.TimestampFirstWeighing===E)return;this.TimestampFirstWeighing=
E;A.abo([this,this.AQI,this.AvS],0);},Aqf:function(){var SS=A._NewObject(A.Core.
Bt,0);SS.Initialize(this.DateOfBirth);var AZG=A._NewObject(A.Core.Bt,0);AZG.Initialize(
this.TimestampFirstWeighing);if(((SS.Year===AZG.Year)&&(SS.Abi()===AZG.Abi()))&&(
this.FirstBodyWeight>0))return true;else return false;},Ag$:function(AHp){var W4;
var Apk;if(this.TimestampLastWeighing>0){Apk=this.TimestampLastWeighing;W4=this.
LastBodyWeight;}else if(this.AnimalType===1){Apk=A._GetAutoObject(C.Helper).Dx();
W4=600000;}else{Apk=this.DateOfBirth;W4=A._GetAutoObject(C.Helper).AaH(this.AnimalType
);}return A._GetAutoObject(C.Helper).Ag$(W4,Apk,AHp,this.AnimalType);},AQY:function(
E){if(this.FirstBodyWeightId===E)return;this.FirstBodyWeightId=E;A.abo([this,this.
BhK,this.AQY],0);},Anb:function(A$v){this.Aec(A$v);if(A$v){if(!this.TimestampAlarm
)this.AvR(A._GetAutoObject(C.Helper).Dx());}else this.AvR(0);},M3:function(E){if(
this.NaisId===E)return;this.NaisId=E;A.abo([this,this.AmM,this.M3],0);},AEV:function(
A$r){this.Aef(A$r);if(A$r){if(!this.TimestampLastWatch)this.AvT(A._GetAutoObject(
C.Helper).Dx());}else this.AvT(0);},Avp:function(E){if(this.DateOfLastCalving===
E)return;this.DateOfLastCalving=E;A.abo([this,this.BhA,this.Avp],0);},AvB:function(
E){if(this.LactationNumber===E)return;this.LactationNumber=E;A.abo([this,this.BhU
,this.AvB],0);},AvA:function(E){if(this.IsPerished===E)return;this.IsPerished=E;
A.abo([this,this.BhR,this.AvA],0);},ARr:function(E){if(this.TimestampLastTemperature===
E)return;this.TimestampLastTemperature=E;A.abo([this,this.Big,this.ARr],0);},ARp:
function(E){if(this.TimestampLastAssessment===E)return;this.TimestampLastAssessment=
E;A.abo([this,this.Bie,this.ARp],0);},NH:function(E){if(this.Breed===E)return;this.
Breed=E;A.abo([this,this.Au1,this.NH],0);},AjQ:function(E){if(this.EaseOfDelivery===
E)return;this.EaseOfDelivery=E;A.abo([this,this.AQp,this.AjQ],0);},M5:function(E
){if(this.WhereAbouts===E)return;this.WhereAbouts=E;A.abo([this,this.Avc,this.M5
],0);},AmZ:function(E){if(this.NaisIdMother===E)return;this.NaisIdMother=E;A.abo([
this,this.AQx,this.AmZ],0);},ADZ:function(E){if(this.ReasonOfLeaving===E)return;
this.ReasonOfLeaving=E;A.abo([this,this.Bh5,this.ADZ],0);},Aee:function(E){if(this.
IsRegistrationNoticePending===E)return;this.IsRegistrationNoticePending=E;A.abo([
this,this.BhT,this.Aee],0);},AqV:function(E){if(this.IsDry===E)return;this.IsDry=
E;A.abo([this,this.BhQ,this.AqV],0);},QF:function(){return this.Id;},AqB:function(
){return this.VisualId;},BhM:function(){return this.GroupId;},Au3:function(){return this.
DateOfBirth;},V0:function(){return this.Gender;},AQk:function(){return this.BirthType;
},A6n:function(){return this.LocationId;},A6m:function(){return this.LastTemperature;
},A6h:function(){return this.IsAlarm;},BhP:function(){return this.IsControl;},BhS:
function(){return this.IsRegistered;},A6j:function(){return this.IsWatch;},A6U:function(
){return this.WorstAssessment;},A6i:function(){return this.IsFever;},Bif:function(
){return this.TimestampLastControl;},Bih:function(){return this.TimestampLastWatch;
},BhV:function(){return this.LastRatingTemperature;},Bid:function(){return this.
TimestampExpirationFeverAlarm;},Bic:function(){return this.TimestampAlarm;},Px:function(
){return this.AnimalType;},A6l:function(){return this.LastBodyWeight;},A6G:function(
){return this.TimestampLastWeighing;},AjK:function(){return this.TransponderId;}
,AQq:function(){return this.FirstBodyWeight;},AQI:function(){return this.TimestampFirstWeighing;
},BhK:function(){return this.FirstBodyWeightId;},AmM:function(){return this.NaisId;
},BhA:function(){return this.DateOfLastCalving;},BhU:function(){return this.LactationNumber;
},BhR:function(){return this.IsPerished;},Big:function(){return this.TimestampLastTemperature;
},Bie:function(){return this.TimestampLastAssessment;},Au1:function(){return this.
Breed;},AQp:function(){return this.EaseOfDelivery;},Avc:function(){return this.WhereAbouts;
},AQx:function(){return this.NaisIdMother;},Bh5:function(){return this.ReasonOfLeaving;
},BhT:function(){return this.IsRegistrationNoticePending;},BhQ:function(){return this.
IsDry;},_Init:function(aArg){C.Row._Init.call(this,aArg);this.__proto__=C.Animal;
this.TableId=0;},_className:"Device::Animal"};C.Row={CE:-1,TableId:2,EJ:function(
Ac,AG){if(!AG){A.ab5("%s",(AwO+this.CE.toFixed())+AFF);return false;}else if(AG.
Id!==this.TableId)throw new Error(AFG);else if((Ac<0)||(Ac>=AG.Ch())){A.ab5("%s"
,(((AFH+this.CE.toFixed())+AFI)+AG.Ch().toFixed())+AwP);return false;}this.CE=Ac;
return true;},Co:function(AG){if(!AG){A.ab5("%s",(AwO+this.CE.toFixed())+AFF);return false;
}else if(AG.Id!==this.TableId)throw new Error(AFG);else if(this.Amo()&&AG.K7()){
A.ab5("%s",ATA+AG.Hz().toFixed());return false;}else if(!this.Amo()&&((this.CE<0
)||(this.CE>=AG.Ch()))){A.ab5("%s",(((AFH+this.CE.toFixed())+AFI)+AG.Ch().toFixed(
))+AwP);return false;}return true;},F$:function(){this.G$();this.CE=-1;},Amo:function(
){return this.CE===-1;},G$:function(){this.CE=-2;},Ap0:function(){return this.CE
!==-2;},A6u:function(){return this.CE;},A7L:function(E){this.CE=E;},_Init:function(
aArg){this.__proto__=C.Row;A.h7++;},_Done:function(){this.__proto__=null;A.h7--;
},_ReInit:function(){},_Mark:function(D){var B;if((B=this.I)&&(B._cycle!=D))B._Mark(
B._cycle=D);},I:null,_cycle:0,_observers:null,_className:"Device::Row"};C.Rating={
Temperature:0,Id:0,AnimalId:0,Timestamp:0,BodyWeight:0,RatingTemperature:0,Faeces:
0,Respiratory:0,Appearance:0,Feed:0,EJ:function(Ac,AG){var Ht=C.Row.EJ.call(this
,Ac,AG);if(Ht&&!!AG){this.OnSetId(AG.CA(Ac,0));this.OnSetAnimalId(AG.CA(Ac,1));this.
OnSetTimestamp(AG.Hy(Ac,6));this.OnSetFeed(AG.IU(Ac,2));this.OnSetAppearance(AG.
IU(Ac,3));this.OnSetRespiratory(AG.IU(Ac,4));this.OnSetFaeces(AG.IU(Ac,5));this.
OnSetTemperature(AG.A4t(Ac,7));this.OnSetBodyWeight(AG.ABs(Ac,8));this.OnSetRatingTemperature(
AG.IU(Ac,9));}return Ht;},Co:function(AG){if(this.K&&this.K.Co)return this.K.Co.
apply(this,arguments);else return C.Rating.A93.apply(this,arguments);},A93:function(
AG){var Ht=C.Row.Co.call(this,AG);if((Ht&&!!AG)&&(AG.Id===1)){var Jc=AG.Oi();if(
Jc<=0)A.ab5("%s",Ab9);else{var AyD=this.Amo();if(AyD)this.CE=AG.X7();else AG.Ha(
this.CE,0,this.Id);AG.Ha(this.CE,1,this.AnimalId);AG.AbK(this.CE,6,this.Timestamp
);AG.Akb(this.CE,2,this.Feed);AG.Akb(this.CE,3,this.Appearance);AG.Akb(this.CE,4
,this.Respiratory);AG.Akb(this.CE,5,this.Faeces);AG.A8E(this.CE,7,this.Temperature
);AG.ASi(this.CE,8,this.BodyWeight);AG.Akb(this.CE,9,this.RatingTemperature);AG.
Ol(Jc);if(AyD)this.OnSetId(AG.AaI());var Q_=A._GetAutoObject(C.Device).Aq;var Ac=
A._GetAutoObject(C.Device).Aq.K3(0,this.AnimalId);if(Ac>=0){var B5=A._NewObject(
C.Animal,0);B5.EJ(Ac,Q_);if(this.Temperature>0)B5.TR(A._GetAutoObject(C.Helper).
A4W(this));if((this.Temperature>0)&&A._GetAutoObject(C.Helper).AEC(this)){var N6=
A._GetAutoObject(C.Helper).AO6(this);B5.AjV(N6);B5.Anb(N6);}else if(this.Temperature>
0){var N6=(A._GetAutoObject(C.Helper).AO6(this)||(B5.WorstAssessment===2))||(B5.
WorstAssessment===1);B5.AjV(N6);B5.Anb(N6);}else{var N6=A._GetAutoObject(C.Helper
).AO6(this)||B5.IsFever;B5.AjV(N6);B5.Anb(N6);}B5.Co(Q_);}}}return Ht;},F$:function(
){C.Row.F$.call(this);this.OnSetTimestamp(A._GetAutoObject(C.Helper).Dx());this.
OnSetId(-1);},G$:function(){C.Row.G$.call(this);this.OnSetTimestamp(0);this.OnSetId(
0);this.OnSetAnimalId(0);this.OnSetFeed(0);this.OnSetAppearance(0);this.OnSetRespiratory(
0);this.OnSetFaeces(0);this.OnSetTemperature(0);this.OnSetBodyWeight(0);this.OnSetRatingTemperature(
0);},OnSetTemperature:function(E){if(this.Temperature===E)return;this.Temperature=
E;A.abo([this,this.Bib,this.OnSetTemperature],0);},OnSetId:function(E){if(this.Id===
E)return;this.Id=E;A.abo([this,this.QF,this.OnSetId],0);},OnSetAnimalId:function(
E){if(this.AnimalId===E)return;this.AnimalId=E;A.abo([this,this.Bhp,this.OnSetAnimalId
],0);},OnSetFeed:function(E){if(this.Feed===E)return;this.Feed=E;A.abo([this,this.
BhH,this.OnSetFeed],0);},OnSetAppearance:function(E){if(this.Appearance===E)return;
this.Appearance=E;A.abo([this,this.Bhq,this.OnSetAppearance],0);},OnSetRespiratory:
function(E){if(this.Respiratory===E)return;this.Respiratory=E;A.abo([this,this.Bh6
,this.OnSetRespiratory],0);},OnSetFaeces:function(E){if(this.Faeces===E)return;this.
Faeces=E;A.abo([this,this.BhF,this.OnSetFaeces],0);},OnSetTimestamp:function(E){
if(this.Timestamp===E)return;this.Timestamp=E;A.abo([this,this.A6F,this.OnSetTimestamp
],0);},Bln:function(Na,A1){switch(Na){case 2:this.OnSetAppearance(A1);break;case
1:this.OnSetFeed(A1);break;case 4:this.OnSetFaeces(A1);break;case 3:this.OnSetRespiratory(
A1);break;default:;}},BfI:function(Na){switch(Na){case 2:return this.Appearance;
case 1:return this.Feed;case 4:return this.Faeces;case 3:return this.Respiratory;
default:return 0;}},OnSetRatingTemperature:function(E){if(this.RatingTemperature===
E)return;this.RatingTemperature=E;A.abo([this,this.Bh4,this.OnSetRatingTemperature
],0);},OnSetBodyWeight:function(E){if(this.BodyWeight===E)return;this.BodyWeight=
E;A.abo([this,this.Bht,this.OnSetBodyWeight],0);},Bib:function(){return this.Temperature;
},QF:function(){return this.Id;},Bhp:function(){return this.AnimalId;},BhH:function(
){return this.Feed;},Bhq:function(){return this.Appearance;},Bh6:function(){return this.
Respiratory;},BhF:function(){return this.Faeces;},A6F:function(){return this.Timestamp;
},Bh4:function(){return this.RatingTemperature;},Bht:function(){return this.BodyWeight;
},_Init:function(aArg){C.Row._Init.call(this,aArg);this.__proto__=C.Rating;this.
TableId=1;var Lk=this._variants();if(Lk){this.K={};Lk._Init.call(this,aArg);}},_Done:
function(){if(this.K)this.K._Done.call(this);this.__proto__=C.Row;C.Row._Done.call(
this);},_ReInit:function(){C.Row._ReInit.call(this);if(this.K)this.K._ReInit.call(
this);},_Mark:function(D){C.Row._Mark.call(this,D);if(this.K)this.K._Mark(D);},_variants:
function(){return A.acr.Rating._variants();},K:null,_className:"Device::Rating"};
C.HelperClass={T2:null,AgW:null,ASb:null,ASc:null,X:null,As:null,Kt:null,Sp:null
,Adg:null,T8:null,T7:null,AdE:null,AeP:null,AeO:null,AeN:null,AeQ:null,AfS:null,
AFa:0,Init:function(aArg){A.pe([this,this.ARK],this);},Aj0:function(E){this.T2=E;
A.abo([this,this.Aqz,this.Aj0],0);},AD2:function(E){this.AgW=E;A.abo([this,this.
A6v,this.AD2],0);},Bw6:function(H){switch(A._GetAutoObject(C.Device).ScanState){
case 2:{var Atp=A._GetAutoObject(C.Device).Oz;if(!Atp)throw new Error(ATB);switch(
Atp.TransponderType){case 1:this.Aj0(Atp);break;case 2:this.ARf(Atp);break;case 3:
this.AD2(Atp);break;case 4:this.ARg(Atp);break;case 0:break;default:throw new Error(
ATC);}}break;case 4:A._GetAutoObject(C.Device).A6(11,true,A.jV,2000,null);break;
case 3:A._GetAutoObject(C.Device).A6(12,true,A.jV,2000,null);break;case 0:case 1:
break;default:throw new Error(ATD);}},Aj_:function(){this.Aj0(null);this.ARf(null
);this.AD2(null);this.ARg(null);},AD7:function(E){if(this.K&&this.K.AD7)return this.
K.AD7.apply(this,arguments);else return C.HelperClass.A91.apply(this,arguments);
},A91:function(E){A.abo([this,this.Ur,this.Us],0);A._GetAutoObject(C.Device).SetSystemTime(
E);},Us:function(Ap){this.AD7(Ap);},Dx:function(){if(this.K&&this.K.Dx)return this.
K.Dx.apply(this,arguments);else return C.HelperClass.A9X.apply(this,arguments);}
,A9X:function(){var B;return((B=(this.As.Baq()|0))<0)?B+0x100000000:B;},Ur:function(
){return this.Dx();},Arr:function(){A._GetAutoObject(C.Device).Sm(-1);this.X.G$(
);A.we(this.X,0);},A5a:function(LX){if(!LX){A.ab5("%s%U",ATE,LX);return false;}var
A_=A._GetAutoObject(C.Device).Aq.Ai_(22,LX);return this.HD(A_);},Amd:function(An0
,AHo){switch(An0){case 0:{var Aor=AHo;switch(Aor){case 14:return A.aaR(A.acf.AeK
);case 6:return ArZ;case 4:return A.aaR(A.acf.Adx);case 28:return AwQ;case 7:return A.
aaR(A.acf.AeA);case 2:return A.aaR(A.acf.O);case 0:return A.aaR(A.acf.Gy);case 37:
return Q0;case 8:return A.aaR(A.acf.Alarm);case 9:return A.aaR(A.acf.AAK);case 38:
return A.aaR(A.acf.ALZ);case 11:return A.aaR(A.acf.Fever);case 27:return AwR;case
10:return A.aaR(A.acf.Bk7);case 12:return A.aaR(A.acf.Ara);case 29:return A.aaR(
A.acf.APl);case 18:return A.aaR(A.acf.Weighing);case 17:return ATF;case 5:return A.
aaR(A.acf.Temperature);case 3:return A.aaR(A.acf.BgK);case 26:return A.aaR(A.acf.
YH);case 35:return A.aaR(A.acf.YH)+ATG;case 36:return ATH;case 15:return ATI;case
24:return AFJ;case 20:return AFK;case 30:return AeW;case 21:return AnB;case 19:return ATJ;
case 22:return A.aaR(A.acf.Transponder);case 1:return A.aaR(A.acf.Gr);case 34:return A.
aaR(A.acf.I6);case 13:return AFL;case 31:return Akw;default:{A.ab5("%s",AFM+Aor.
toFixed());return AwS+Aor.toFixed();}}}case 1:{var Aor=AHo;switch(Aor){case 1:return A.
aaR(A.acf.Animal);case 3:return A.aaR(A.acf.AEB);case 8:return A.aaR(A.acf.AeM);
case 5:return A.aaR(A.acf.AED);case 2:return A.aaR(A.acf.Feed);case 4:return A.aaR(
A.acf.AEE);case 7:return A.aaR(A.acf.Temperature);case 6:return A.aaR(A.acf.Bt);
default:{A.ab5("%s",ATK+Aor.toFixed());return AwS+Aor.toFixed();}}}default:A.ab5(
"%s",(ATL+An0.toFixed())+ATM);}return A.jV;},A4l:function(An0,AM){var result=A.jV;
if(!!AM){result=this.Amd(An0,AM.ES);result=((result+NW)+A._GetAutoObject(C.Converter
).A38(AM.Operator))+NW;if(!!(C.Int32FilterCriterion.isPrototypeOf(AM)?AM:null))result=
result+(C.Int32FilterCriterion.isPrototypeOf(AM)?AM:null).A4.toFixed();else if(!
!(C.UInt32FilterCriterion.isPrototypeOf(AM)?AM:null))result=result+(C.UInt32FilterCriterion.
isPrototypeOf(AM)?AM:null).A4.toFixed();else if(!!(C.StringFilterCriterion.isPrototypeOf(
AM)?AM:null))result=result+(C.StringFilterCriterion.isPrototypeOf(AM)?AM:null).A4;
else if(!!(C.BoolFilterCriterion.isPrototypeOf(AM)?AM:null)){if((C.BoolFilterCriterion.
isPrototypeOf(AM)?AM:null).A4)result=this.Amd(An0,AM.ES);else result=A.jV;}else if(
!!(C.GenderFilterCriterion.isPrototypeOf(AM)?AM:null)){var BvB=A._NewObject(C.GenderToString
,0);result=result+BvB.Lh((C.GenderFilterCriterion.isPrototypeOf(AM)?AM:null).A4);
}else if(!!(C.AnimalTypeFilterCriterion.isPrototypeOf(AM)?AM:null)){var Bux=A._NewObject(
C.AnimalTypeToString,0);result=result+Bux.Lh((C.AnimalTypeFilterCriterion.isPrototypeOf(
AM)?AM:null).A4);}else if(!!(C.AssessmentFilterCriterion.isPrototypeOf(AM)?AM:null
)){var Buz=A._NewObject(C.AssesmentToString,0);result=result+Buz.Lh((C.AssessmentFilterCriterion.
isPrototypeOf(AM)?AM:null).A4);}else if(!!(C.UInt64FilterCriterion.isPrototypeOf(
AM)?AM:null))result=result+(C.UInt64FilterCriterion.isPrototypeOf(AM)?AM:null).A4.
toFixed();else if(!!(C.WhereAboutsFilterCriterion.isPrototypeOf(AM)?AM:null)){var
ByI=A._NewObject(C.WhereAboutsToString,0);result=result+ByI.Lh((C.WhereAboutsFilterCriterion.
isPrototypeOf(AM)?AM:null).A4);}else A.ab5("%s",ATN);}return result;},NO:function(
aString,A$e,BtN){var result=A.jV;var BcN=false;var index=0;var BtP=A$e.length;while(
!BcN){var A1h=aString.indexOf(A$e,index);if(A1h!==-1){result=(result+A.abW(aString
,index,A1h-index))+BtN;index=A1h+BtP;}else{var A$i=aString.length;if(index<A$i)result=
result+A.ab2(aString,A$i-index);BcN=true;}}return result;},ARf:function(E){this.
ASb=E;A.abo([this,this.Bh7,this.ARf],0);},ARg:function(E){this.ASc=E;A.abo([this
,this.Bh8,this.ARg],0);},BaQ:function(){return((A._GetAutoObject(C.Device).ScanState===
2)&&!!A._GetAutoObject(C.Device).Oz)&&(A._GetAutoObject(C.Device).Oz.TransponderType===
1);},Afm:function(H){if(!this.X.Amo()&&!!this.X.Id)this.BgJ(this.X.Id);},Aum:function(
Eb){return A._GetAutoObject(C.Helper).T8.Get(Eb);},A4h:function(Eb){return A._GetAutoObject(
C.Helper).T7.Get(Eb);},A4p:function(){var P=0;var min=32767;while(P<A._GetAutoObject(
C.Helper).T8.Mq){if(A._GetAutoObject(C.Helper).T8.Get(P)<min)min=A._GetAutoObject(
C.Helper).T8.Get(P);P=P+1;}return min;},ARK:function(H){A.zV([this,this.Afm],A._GetAutoObject(
C.Device).Aq,0);},AO6:function(DT){if(!DT)return false;var Bgj=(((this.Ayz(DT.Faeces
)||this.Ayz(DT.Feed))||this.Ayz(DT.Appearance))||this.Ayz(DT.Respiratory))||this.
Ayz(DT.RatingTemperature);return Bgj||this.A4W(DT);},Ayz:function(A_T){return(A_T===
2)||(A_T===1);},A4W:function(DT){return!!DT&&(DT.Temperature>A._GetAutoObject(C.
Helper).Aum(A._GetAutoObject(C.Helper).X.AnimalType));},HD:function(LW){var A0i=
false;if(LW>=0){if(LW!==this.X.CE)A._GetAutoObject(C.Device).Sm(LW);A0i=this.X.EJ(
LW,A._GetAutoObject(C.Device).Aq);if(A0i)A.we(this.X,0);}else{A._GetAutoObject(C.
Device).Sm(-1);this.X.G$();A.we(this.X,0);}return A0i;},Ag5:function(Aho){var B;
return(((B=(this.As.Baq()|0))<0)?B+0x100000000:B)-this.AtV(Aho);},ArG:function(){
var B;A.pe([B=this.Kt,B.Awm],this);},Byd:function(H){A._GetAutoObject(C.Device).
A6(16,false,Ab_,0,null);A._GetAutoObject(C.Device).A6(5,true,A.jV,0,null);},BkB:
function(H){var At=(C.PopupContext.isPrototypeOf(H)?H:null);if(!!At&&(At.PopupState===
5))this.ArG();},Bkp:function(E){if(this.AFa===E)return;this.AFa=E;A._GetAutoObject(
C.Device).A6(16,true,this.AFa.toFixed(),0,[this,this.BkB]);},MB:function(Btn,Bt4
){var D0;var Bdi=A._NewObject(A.Core.Anl,0);var Gp=A._NewObject(A.Core.Bt,0);var
KU=A._NewObject(A.Core.Bt,0);Gp.Initialize(Btn);KU.Initialize(Bt4);D0=KU.BeW(Gp);
Bdi.Initialize2(0,D0.ABU,D0.ACE,D0.AEP);if(Gp.J(Bdi).Gv===Gp.Gv)return D0.J3;else
return D0.J3+1;},Byf:function(H){A._GetAutoObject(C.Device).UpdateMeasureState(3
);if((A._GetAutoObject(C.Device).Ki>=A._GetAutoObject(C.Device).Zj)&&(A._GetAutoObject(
C.Device).Ki<=A._GetAutoObject(C.Helper).Aum(A._GetAutoObject(C.Helper).X.AnimalType
))){var Buw=A._GetAutoObject(C.Helper).X.Id;var BxJ=A._GetAutoObject(C.Device).Aq.
K3(0,Buw);A._GetAutoObject(C.Device).Aq.M8(BxJ,9,false);A._GetAutoObject(C.Device
).Aq.Bm(A._GetAutoObject(C.Device).Aq.Filter);}},AJg:function(H){var Bd8=A._GetAutoObject(
C.Helper).Aum(A._GetAutoObject(C.Helper).X.AnimalType);var Bd2=A._GetAutoObject(
C.Helper).A4h(A._GetAutoObject(C.Helper).X.AnimalType);var Ati=A.abz(Bd8-100,Bd2+
100);this.A$7(Ati);},AtV:function(Aho){return Aho*86400;},Ako:function(Kp){var B;
if(!!Kp&&(Kp<(((B=Math.trunc(Math.pow(10,A._GetAutoObject(C.Device).Fv)))<0)?B+0x10000000000000000:
B)))return-1;return A._GetAutoObject(C.Helper).Vi(Kp,A._GetAutoObject(C.Device).
Fv&0xFF,A._GetAutoObject(C.Device).FM&0xFF)|0;},AEC:function(DT){if(!DT)return false;
return((!!DT.Faeces||!!DT.Feed)||!!DT.Appearance)||!!DT.Respiratory;},Ag$:function(
AYt,A$k,AHp,Eb){var B;var Ao6;if((AYt<650000)&&(A$k<this.Dx())){var A$H=this.AfS.
Auo(Eb);var A$G=0;if(A$H>=0)A$G=this.AeN.Get(A$H);Ao6=AYt+(this.MB(A$k,this.Dx()
)*A$G);if(AHp>0){var AZo=this.Azp(AHp);Ao6=(Math.trunc(((((B=Ao6)<0)?B+0x10000000000000000:
B)+Math.trunc(AZo/2))/AZo)*AZo)|0;}if(Ao6>650000)Ao6=650000;}else Ao6=AYt;return Ao6;
},ABz:function(DT){var Apr=A._GetAutoObject(C.Converter).Adh(DT.Faeces);if(Apr<A.
_GetAutoObject(C.Converter).Adh(DT.Feed))Apr=A._GetAutoObject(C.Converter).Adh(DT.
Feed);if(Apr<A._GetAutoObject(C.Converter).Adh(DT.Appearance))Apr=A._GetAutoObject(
C.Converter).Adh(DT.Appearance);if(Apr<A._GetAutoObject(C.Converter).Adh(DT.Respiratory
))Apr=A._GetAutoObject(C.Converter).Adh(DT.Respiratory);return A._GetAutoObject(
C.Converter).A82(Apr);},Awa:function(DT,M$){if(!!DT){DT.OnSetFaeces(M$);DT.OnSetFeed(
M$);DT.OnSetAppearance(M$);DT.OnSetRespiratory(M$);}},BfG:function(AG,AHu,Acq,WQ
,Ae0){if(!AG)throw new Error(Ar0);var Bc=A._NewObject(C.Filter,0);var AoR=AG.Filter;
var N0=A._NewObject(C.Int32FilterCriterion,0);N0.Operator=0;N0.ES=1;N0.A4=Acq;Bc.
CZ(N0);if(WQ>0){var Oc=A._NewObject(C.UInt32FilterCriterion,0);Oc.Operator=2;Oc.
ES=6;Oc.A4=WQ;Bc.CZ(Oc);}if(Ae0>0){var N5=A._NewObject(C.UInt32FilterCriterion,0
);N5.Operator=3;N5.ES=6;N5.A4=Ae0;Bc.CZ(N5);}AG.Bm(Bc);var LY=A._NewObject(C.Int32ArrayWrapper
,0);LY.YU(6);var P;for(P=0;P<LY.Mq;P=P+1)LY.Set(P,0);var UB;for(P=0;P<AG.Ch();P=
P+1){UB=AG.IU(P,AHu);LY.Set(UB,LY.Get(UB)+1);}AG.Bm(AoR);return LY;},Y$:function(
Aho){var B;var Gp=A._NewObject(A.Core.Bt,0);var Bdh=A._NewObject(A.Core.Anl,0);Gp.
Initialize(A._GetAutoObject(C.Converter).Ag7());Bdh.Initialize2(Aho,0,0,0);Gp=Gp.
BlR(Bdh);return((B=(Gp.JF()|0))<0)?B+0x100000000:B;},A4i:function(AG,Acq,Ae0,WQ){
if(!AG)throw new Error(Ar0);var Bc=A._NewObject(C.Filter,0);var AoR=AG.Filter;var
N0=A._NewObject(C.Int32FilterCriterion,0);N0.Operator=0;N0.ES=1;N0.A4=Acq;Bc.CZ(
N0);if(WQ>0){var Oc=A._NewObject(C.UInt32FilterCriterion,0);Oc.Operator=2;Oc.ES=
6;Oc.A4=WQ;Bc.CZ(Oc);}if(Ae0>0){var N5=A._NewObject(C.UInt32FilterCriterion,0);N5.
Operator=3;N5.ES=6;N5.A4=Ae0;Bc.CZ(N5);}AG.Bm(Bc);var LY=A._NewObject(C.Int32ArrayWrapper
,0);LY.YU(6);var P;for(P=0;P<LY.Mq;P=P+1)LY.Set(P,0);var Aof=A._NewObject(C.Rating
,0);var AZg;for(P=0;P<AG.Ch();P=P+1){Aof.EJ(P,AG);if(A._GetAutoObject(C.Helper).
AEC(Aof)){AZg=A._GetAutoObject(C.Helper).ABz(Aof);LY.Set(AZg,LY.Get(AZg)+1);}}AG.
Bm(AoR);return LY;},AZO:function(AG,Acq,Bu8){if(!AG)throw new Error(Ar0);var Bc=
A._NewObject(C.Filter,0);var AoR=AG.Filter;var N0=A._NewObject(C.Int32FilterCriterion
,0);N0.Operator=0;N0.ES=1;N0.A4=Acq;Bc.CZ(N0);var WQ=A._GetAutoObject(C.Converter
).Ag7()+A._GetAutoObject(C.Helper).AtV(Bu8);var Ae0=WQ+A._GetAutoObject(C.Helper
).AtV(1);var Oc=A._NewObject(C.UInt32FilterCriterion,0);Oc.Operator=2;Oc.ES=6;Oc.
A4=WQ;Bc.CZ(Oc);var N5=A._NewObject(C.UInt32FilterCriterion,0);N5.Operator=3;N5.
ES=6;N5.A4=Ae0;Bc.CZ(N5);AG.Bm(Bc);var Aof=A._NewObject(C.Rating,0);var UB;var LC=
0;var P;for(P=0;P<AG.Ch();P=P+1){Aof.EJ(P,AG);if(A._GetAutoObject(C.Helper).AEC(
Aof)){UB=A._GetAutoObject(C.Helper).ABz(Aof);if(A._GetAutoObject(C.Converter).Adh(
UB)>A._GetAutoObject(C.Converter).Adh(LC))LC=UB;}}AG.Bm(AoR);return LC;},Amn:function(
){if((A._GetAutoObject(C.Device).WeightRecordingScope===2)||(A._GetAutoObject(C.
Device).WeightRecordingScope===1))return true;else return false;},A4Z:function(){
if((A._GetAutoObject(C.Device).WeightRecordingScope===2)||!A._GetAutoObject(C.Device
).WeightRecordingScope)return true;else return false;},BfH:function(AG,AHu,Acq,WQ
,Ae0){if(!AG)throw new Error(Ar0);var Bc=A._NewObject(C.Filter,0);var AoR=AG.Filter;
var N0=A._NewObject(C.Int32FilterCriterion,0);N0.Operator=0;N0.ES=1;N0.A4=Acq;Bc.
CZ(N0);if(WQ>0){var Oc=A._NewObject(C.UInt32FilterCriterion,0);Oc.Operator=2;Oc.
ES=6;Oc.A4=WQ;Bc.CZ(Oc);}if(Ae0>0){var N5=A._NewObject(C.UInt32FilterCriterion,0
);N5.Operator=3;N5.ES=6;N5.A4=Ae0;Bc.CZ(N5);}AG.Bm(Bc);var LY=A._NewObject(C.Int32ArrayWrapper
,0);LY.YU(6);var P;for(P=0;P<LY.Mq;P=P+1)LY.Set(P,0);if(AG.Ch()>0){var UB=AG.IU(
0,AHu);var Ao$=AG.Hy(P,6);var Ad=A._NewObject(A.Core.Bt,0);Ad.Initialize(Ao$);var
Apq=UB;var AIm=A._NewObject(A.Core.Bt,0);AIm.Initialize(Ad.JF());for(P=1;P<AG.Ch(
);P=P+1){UB=AG.IU(P,AHu);Ao$=AG.Hy(P,6);Ad.Initialize(Ao$);if((Ad.Abi()!==AIm.Abi(
))||(Ad.Year!==AIm.Year)){LY.Set(Apq,LY.Get(Apq)+1);AIm.Initialize(Ad.JF());Apq=
UB;}else if(!!UB&&(UB<Apq))Apq=UB;}LY.Set(Apq,LY.Get(Apq)+1);}AG.Bm(AoR);return LY;
},Apx:function(LS){var B;var Gp=A._NewObject(A.Core.Bt,0);Gp.Initialize(LS);Gp.AmV(
0);Gp.AmY(0);Gp.Am1(0);return((B=(Gp.JF()|0))<0)?B+0x100000000:B;},AMb:function(
LS){var B;LS=LS+86400;var Gp=A._NewObject(A.Core.Bt,0);Gp.Initialize(LS);Gp.AmV(
0);Gp.AmY(0);Gp.Am1(0);return((B=(Gp.JF()|0))<0)?B+0x100000000:B;},BfJ:function(
Byc,Bvh,Alx,AkW){var A$2=A._GetAutoObject(C.Helper).MB(Byc,Bvh);if(A$2>0)return((
AkW-Alx)/A$2)|0;return 0;},Bmr:function(Bto,Bt5){var Gp=A._NewObject(A.Core.Bt,0
);var KU=A._NewObject(A.Core.Bt,0);Gp.Initialize(Bto);KU.Initialize(Bt5);return(
Gp.Year===KU.Year)&&(Gp.Abi()===KU.Abi());},A4n:function(){var Bc=A._GetAutoObject(
C.Helper).MT();var Ba3=A._NewObject(C.UInt32FilterCriterion,0);var Buc=A._GetAutoObject(
C.Helper).Y$(A._GetAutoObject(C.Device).ApV)-1;Ba3.Initialize(28,2,Buc,true);Bc.
CZ(Ba3);var Ux=A._NewObject(C.AnimalTypeFilterCriterion,0);Ux.Initialize(14,0,1,
true);Bc.CZ(Ux);if(A._GetAutoObject(C.Device).Ama){var AyO=A._NewObject(C.UInt32FilterCriterion
,0);var A0d=A._GetAutoObject(C.Helper).Dx()-21600;AyO.Initialize(30,3,A0d,true);
Bc.CZ(AyO);}return Bc;},Bk_:function(){var Jc=A._GetAutoObject(C.Device).Aq.Oi();
if(Jc<=0)A.ab5("%s",Ab9);else{A._GetAutoObject(C.Device).Aq.G$();A._GetAutoObject(
C.Device).Aq.Ol(Jc);}Jc=A._GetAutoObject(C.Device).AfK.Oi();if(Jc<=0)A.ab5("%s",
Ab9);else{A._GetAutoObject(C.Device).AfK.G$();A._GetAutoObject(C.Device).AfK.Ol(
Jc);}Jc=A._GetAutoObject(C.Device).Bq.Oi();if(Jc<=0)A.ab5("%s",Ab9);else{A._GetAutoObject(
C.Device).Bq.G$();A._GetAutoObject(C.Device).Bq.Ol(Jc);}Jc=A._GetAutoObject(C.Device
).O7.Oi();if(Jc<=0)A.ab5("%s",Ab9);else{A._GetAutoObject(C.Device).O7.G$();A._GetAutoObject(
C.Device).O7.Ol(Jc);}},BgJ:function(Acq){var A_=A._GetAutoObject(C.Device).Aq.K3(
0,Acq);return this.HD(A_);},AO$:function(LX){var AhQ=A._GetAutoObject(C.Device).
Aq.Af8(22,LX);return AhQ;},AMT:function(){var Bc=A._GetAutoObject(C.Helper).MT();
var Aiu=A._NewObject(C.UInt64FilterCriterion,0);Aiu.Initialize(22,0,0,true);Bc.CZ(
Aiu);return Bc;},AMM:function(An_,Bve,SM){var ZJ=-1;switch(An_){case 2:ZJ=30;break;
case 3:ZJ=31;break;case 10:ZJ=19;break;default:A.ab5("%s%e",SJ,An_);}if(ZJ<0)return null;
var AcD=A._NewObject(C.UInt32FilterCriterion,0);AcD.Initialize(ZJ,3,A._GetAutoObject(
C.Helper).Dx()-Bve,SM);return AcD;},Bk9:function(aFilter){var AM=aFilter.DW(30,3
);if(!!AM)aFilter.QM(AM);AM=aFilter.DW(31,3);if(!!AM)aFilter.QM(AM);AM=aFilter.DW(
19,3);if(!!AM)aFilter.QM(AM);},AY9:function(Ae9,Axy,AG){if(AG.K7())return 5;if(Ae9.
VisualId<=0)switch(Axy){case 0:if(!Ae9.NaisId)return 1;break;case 1:if(!Ae9.TransponderId
)return 1;break;case 3:case 2:case 5:case 4:return 1;default:throw new Error(AFN+
Axy.toFixed());}if((!Ae9.NaisId&&!Ae9.TransponderId)&&A._GetAutoObject(C.Device).
Aq.Ai7(1,Ae9.VisualId))return 2;if(!!Ae9.NaisId&&A._GetAutoObject(C.Helper).AO9(
Ae9.NaisId))return 3;if(!!Ae9.TransponderId&&A._GetAutoObject(C.Helper).AO$(Ae9.
TransponderId))return 4;return 0;},Apu:function(EA){EA.DS(A._GetAutoObject(C.Device
).AnimalType);EA.NH(A._GetAutoObject(C.Device).Breed);EA.Sd(A._GetAutoObject(C.Helper
).Dx()-A._GetAutoObject(C.Helper).AtV(A._GetAutoObject(C.Device).AiH));EA.JG(A._GetAutoObject(
C.Device).Gender);EA.M5(A._GetAutoObject(C.Device).WhereAbouts);},AKq:function(Q5
,EA){var GH=0;switch(Q5){case 0:GH=A._GetAutoObject(C.Helper).Ako(EA.NaisId);break;
case 1:GH=A._GetAutoObject(C.Helper).Ako(EA.TransponderId);break;case 3:GH=A._GetAutoObject(
C.Device).Ap5;break;case 2:GH=A._GetAutoObject(C.Device).Ap6;break;case 4:case 5:
GH=A._GetAutoObject(C.Device).Aji;break;default:throw new Error(AFO+Q5.toFixed()
);}return GH;},A88:function(AkC,LT,Bta,A_X,BtI){var B;var P6=null;var W2=null;switch(
AkC){case 0:{P6=[B=A._GetAutoObject(C.Device),B.AQw,B.AXR];W2=[B=A._GetAutoObject(
C.Device),B.Au$,B.Axs];}break;case 1:switch(LT){case 1:{P6=[B=A._GetAutoObject(C.
Device),B.A6q,B.A_t];W2=[B=A._GetAutoObject(C.Device),B.Au9,B.Axq];}break;case 0:{
P6=[B=A._GetAutoObject(C.Device),B.A6r,B.A_u];W2=[B=A._GetAutoObject(C.Device),B.
Au_,B.Axr];}break;case 2:{P6=[B=A._GetAutoObject(C.Device),B.AQw,B.AXR];W2=[B=A.
_GetAutoObject(C.Device),B.Au$,B.Axs];}break;default:throw new Error(AwT+LT.toFixed(
));}break;default:throw new Error(AFP+AkC.toFixed());}if(!!P6&&!!W2){P6[2].call(
P6[0],Bta);if((W2[1].call(W2[0])>0)&&(A_X<BtI))P6[2].call(P6[0],P6[1].call(P6[0]
)+W2[1].call(W2[0]));else if((W2[1].call(W2[0])<0)&&(A_X>0))P6[2].call(P6[0],P6[
1].call(P6[0])+W2[1].call(W2[0]));return P6[1].call(P6[0]);}return 0;},AS9:function(
EA,AkC,Bth){if(!EA||(Bth===true))return;switch(AkC){case 0:EA.M3(A._GetAutoObject(
C.Device).AuW);break;case 1:switch(EA.Gender){case 0:EA.M3(A._GetAutoObject(C.Device
).ACH);break;case 1:EA.M3(A._GetAutoObject(C.Device).ACG);break;case 2:EA.M3(A._GetAutoObject(
C.Device).AuW);break;default:throw new Error(AwT+EA.Gender.toFixed());}break;default:
throw new Error(AFP+AkC.toFixed());}},Bgk:function(Q5,EA){var result=false;switch(
Q5){case 0:result=!!EA.NaisId;break;case 1:result=!!EA.TransponderId;break;case 3:
case 2:case 4:case 5:result=false;break;default:throw new Error(AFO+Q5.toFixed()
);}return result;},AIz:function(EA,A_S,Axy,Asu,Ae3){switch(A_S){case 2:if(Asu<=0
)A._GetAutoObject(C.Device).A6(21,true,EA.VisualId.toFixed(),0,Ae3);else A._GetAutoObject(
C.Device).A6(48,true,(EA.VisualId.toFixed()+AwU)+Asu.toFixed(),0,Ae3);break;case
3:if(Asu<=0)A._GetAutoObject(C.Device).A6(21,true,A._GetAutoObject(C.Converter).
Ub(EA.NaisId),0,Ae3);else A._GetAutoObject(C.Device).A6(48,true,(A._GetAutoObject(
C.Converter).Ub(EA.NaisId)+AwU)+Asu.toFixed(),0,Ae3);break;case 4:if(Asu<=0)A._GetAutoObject(
C.Device).A6(25,true,A._GetAutoObject(C.Converter).Ub(EA.TransponderId),0,Ae3);else
A._GetAutoObject(C.Device).A6(47,true,(A._GetAutoObject(C.Converter).Ub(EA.TransponderId
)+AwU)+Asu.toFixed(),0,Ae3);break;case 1:switch(Axy){case 1:A._GetAutoObject(C.Device
).A6(42,true,A.jV,0,Ae3);break;case 0:A._GetAutoObject(C.Device).A6(43,true,A.jV
,0,Ae3);break;case 3:case 2:case 5:case 4:A._GetAutoObject(C.Device).A6(22,true,
A.jV,0,Ae3);break;default:throw new Error(AFN+Axy.toFixed());}break;case 5:A._GetAutoObject(
C.Device).A6(41,true,A._GetAutoObject(C.Device).Aq.Hz().toFixed(),0,Ae3);break;case
0:break;default:throw new Error(ATO+A_S.toFixed());}},Bau:function(A_5,LT){var B;
var AyS=null;switch(A_5){case 0:AyS=[B=A._GetAutoObject(C.Device),B.Au$,B.Axs];break;
case 1:switch(LT){case 1:AyS=[B=A._GetAutoObject(C.Device),B.Au9,B.Axq];break;case
0:AyS=[B=A._GetAutoObject(C.Device),B.Au_,B.Axr];break;case 2:AyS=[B=A._GetAutoObject(
C.Device),B.Au$,B.Axs];break;default:throw new Error(AwT+LT.toFixed());}break;default:
throw new Error(ATP+A_5.toFixed());}return AyS;},A4x:function(PV,BtV){var Z6=A._NewObject(
A.Core.Bt,0);Z6.Initialize(PV);var Az7=Z6.Year;var A_=A._GetAutoObject(C.Device).
O7.K3(0,Az7);var UA=A._NewObject(C.CalfDeregistrations,0);if(A_<0){if(A._GetAutoObject(
C.Device).O7.K7())A._GetAutoObject(C.Device).A6(51,true,A._GetAutoObject(C.Device
).O7.Hz().toFixed(),0,null);else{UA.F$();UA.Aj2(Az7);}}else UA.EJ(A_,A._GetAutoObject(
C.Device).O7);UA.Avr(UA.Deregistrations+1);if(BtV)UA.Avq(UA.Deaths+1);UA.Co(A._GetAutoObject(
C.Device).O7);},AKo:function(LC,Ak6,AkX){var AIW=0;if((Ak6&&(AkX===1))||(LC===1)
)AIW=1;else if((Ak6&&(AkX===2))||(LC===2))AIW=2;else if(!!LC&&(LC!==5))AIW=LC;return AIW;
},A$7:function(Bub){var B;if(A._GetAutoObject(C.Device).MeasureState===1){this.Sp.
Ct=A._GetAutoObject(C.Device).Zj;this.Sp.B1=Bub;this.Sp.AE7(this);}},ABo:function(
){var Bc=this.AML();var BaS=A._NewObject(C.BoolFilterCriterion,0);BaS.Initialize(
38,0,true,true);Bc.CZ(BaS);return Bc;},A4g:function(JO){var Bc=A._GetAutoObject(
C.Helper).MT();if(A._GetAutoObject(C.Device).AlH){var AZR=A._GetAutoObject(C.Helper
).AMM(JO,21600,true);Bc.CZ(AZR);}return Bc;},A4r:function(){var Bc=A._GetAutoObject(
C.Helper).MT();var Bbg=A._NewObject(C.UInt64FilterCriterion,0);Bbg.Initialize(26
,0,0,true);Bc.CZ(Bbg);return Bc;},A4u:function(){var B;var Bc=A._GetAutoObject(C.
Helper).MT();var AyY=(C.WhereAboutsFilterCriterion.isPrototypeOf(B=Bc.DW(34,3))?
B:null);if(!!AyY)Bc.QM(AyY);var Bcv=A._NewObject(C.BoolFilterCriterion,0);Bcv.Initialize(
37,0,true,true);Bc.CZ(Bcv);return Bc;},Vi:function(A1,BtO,AYu){var B;A1=Math.trunc(
A1/this.Azp(BtO));A1%=this.Azp(AYu);return A1;},Azp:function(A_6){switch(A_6){case
0:return 1;case 1:return 10;case 2:return 100;case 3:return 1000;case 4:return 10000;
case 5:return 100000;case 6:return 1000000;case 7:return 10000000;case 8:return 100000000;
case 9:return 1000000000;case 10:return 10000000000;case 11:return 100000000000;
case 12:return 1000000000000;case 13:return 10000000000000;case 14:return 100000000000000;
case 15:return 1000000000000000;default:throw new Error(ATQ+A_6.toFixed());}},MT:
function(){var Bc=A._NewObject(C.Filter,0);var BcR=A._NewObject(C.BoolFilterCriterion
,0);BcR.Initialize(10,0,true,true);Bc.CZ(BcR);var AyY=A._NewObject(C.WhereAboutsFilterCriterion
,0);AyY.Initialize(34,3,6,true);Bc.CZ(AyY);return Bc;},Aqe:function(aFilter){return!
this.ABr(aFilter);},ABr:function(aFilter){var Jq=0;var Ay=aFilter.AMN();while(!!
Ay){if(Ay.AaZ===false)Jq++;Ay=aFilter.AMS(Ay);}return Jq;},AML:function(){var Bc=
this.MT();var Ux=A._NewObject(C.AnimalTypeFilterCriterion,0);Ux.Initialize(14,0,
1,true);Bc.CZ(Ux);return Bc;},ABw:function(){var B;var A1J;var N2=this.BfY();A1J=(((
B=A._GetAutoObject(C.Converter).AtR(N2))<0)?B+0x10000000000000000:B)*this.Azp(12
);if((N2===10)&&(A._GetAutoObject(C.Device).YV>0)){var BvC=A._GetAutoObject(C.Helper
).Vi(A._GetAutoObject(C.Device).YV,10,2)*this.Azp(8);A1J+=BvC;}return A1J;},BfY:
function(){var N2=0;if(A._GetAutoObject(C.Device).YV>0)N2=A._GetAutoObject(C.Converter
).AeJ(A._GetAutoObject(C.Device).YV);if(!N2)N2=A._GetAutoObject(C.Converter).A42(
A._GetAutoObject(C.Device).Language);return N2;},AO9:function(WO){var AhQ=A._GetAutoObject(
C.Device).Aq.Af8(26,WO);return AhQ;},Ajq:function(Ae4){switch(Ae4){case 0:case 1:
case 2:case 3:case 4:case 5:return false;case 6:case 7:case 8:case 9:case 10:return true;
default:throw new Error(ATR+Ae4.toFixed());}},Bd0:function(Q5,EA){var GH=0;switch(
Q5){case 1:GH=A._GetAutoObject(C.Helper).Ako(EA.TransponderId);break;case 0:if(!
A._GetAutoObject(C.Device).EartagNrAssignmentMode)GH=A._GetAutoObject(C.Device).
Aji;else switch(EA.Gender){case 0:GH=A._GetAutoObject(C.Device).Ap6;break;case 1:
GH=A._GetAutoObject(C.Device).Ap5;break;case 2:GH=A._GetAutoObject(C.Device).Aji;
break;default:throw new Error(AFQ+EA.Gender.toFixed());}break;default:throw new Error(
ATS+Q5.toFixed());}return GH;},Bfv:function(){var B;var Ayx=(((((((A.aaR(A.acf.AgZ
)+A.aaR(A.acf.Colon))+OL)+A._GetAutoObject(C.Device).AgZ)+AwV)+A.aaR(A.acf.BkS))+
A.aaR(A.acf.Colon))+OL)+A._GetAutoObject(A.acj.Ky).Bft(((B=A._GetAutoObject(C.Device
).QC.Timestamp)<0)?B+0x100000000:B);return Ayx;},Bfw:function(){var B;var Ayx=((((((((((((((((((((((((((((
ATT+A._GetAutoObject(C.Device).Rz.ACw.toFixed())+Lj)+A._GetAutoObject(C.Device).
Rz.ACD.toFixed())+Lj)+A._GetAutoObject(C.Device).Rz.AEL.toFixed())+OK)+A._GetAutoObject(
C.Device).Rz.AAR)+OK)+A._GetAutoObject(A.acj.Ky).Ai$(((B=A._GetAutoObject(C.Device
).Rz.Timestamp)<0)?B+0x100000000:B))+OL)+ATU)+A._GetAutoObject(C.Device).R$.ACw.
toFixed())+Lj)+A._GetAutoObject(C.Device).R$.ACD.toFixed())+Lj)+A._GetAutoObject(
C.Device).R$.AEL.toFixed())+OK)+A._GetAutoObject(C.Device).R$.AAR)+OK)+A._GetAutoObject(
A.acj.Ky).Ai$(((B=A._GetAutoObject(C.Device).R$.Timestamp)<0)?B+0x100000000:B))+
OL)+ATV)+A._GetAutoObject(C.Helper).Bf1())+OK)+A._GetAutoObject(C.Device).GetCommitHash(
))+OK)+A._GetAutoObject(C.Device).GetCommitCount().toFixed())+OK)+A._GetAutoObject(
A.acj.Ky).Ai$(A._GetAutoObject(C.Device).GetCommitEpoch());return Ayx;},Bfu:function(
){var B;var Ayx=(((((((((((((((((((((ATW+A._GetAutoObject(C.Device).QC.APw.toFixed(
))+Lj)+A._GetAutoObject(C.Device).QC.APx.toFixed())+Lj)+A._GetAutoObject(C.Device
).QC.APv.toFixed())+OL)+A.aaR(A.acf.A3$))+A.aaR(A.acf.Colon))+NW)+A._GetAutoObject(
A.acj.Ky).Ai$(((B=A._GetAutoObject(C.Device).QC.Timestamp)<0)?B+0x100000000:B))+
AwV)+ATX)+A._GetAutoObject(C.Device).Su.AS2.toFixed())+Lj)+A._GetAutoObject(C.Device
).Su.AS3.toFixed())+Lj)+A._GetAutoObject(C.Device).Su.AS1.toFixed())+OL)+A.aaR(A.
acf.A3$))+A.aaR(A.acf.Colon))+NW)+A._GetAutoObject(A.acj.Ky).Ai$(((B=A._GetAutoObject(
C.Device).Su.Timestamp)<0)?B+0x100000000:B);return Ayx;},A4s:function(AYu){var B;
var P;var Azu=A.jV;for(P=1;P<=AYu;P=P+1)if(!!A.abz(0,2))Azu=Azu+String.fromCharCode(
A.abz(97,104)&0xFFFF);else Azu=Azu+String.fromCharCode(A.abz(48,57)&0xFFFF);return Azu;
},AaH:function(Eb){var AxP=0;if(Eb===1)Eb=0;var A$M=this.AfS.Auo(Eb);if(A$M>=0)AxP=
this.AeQ.Get(A$M);return AxP;},ABy:function(Eb){var FH=0;var Az5=this.AfS.Auo(Eb
);if(Az5>=0)FH=this.AeP.Get(Az5);return FH;},ABx:function(Eb){var FH=0;var Az5=this.
AfS.Auo(Eb);if(Az5>=0)FH=this.AeO.Get(Az5);return FH;},A4k:function(){var Bc=this.
MT();var Ux=A._NewObject(C.AnimalTypeFilterCriterion,0);Ux.Initialize(14,0,A._GetAutoObject(
C.Device).AA$,true);Bc.CZ(Ux);return Bc;},APa:function(Kp){var BJ=Math.trunc(Kp/
1000000000000)|0;if(!BJ)return 0;else if(BJ>=900)return 1;else if(!A._GetAutoObject(
C.Converter).ALD(BJ))return 2;else return 3;},A4w:function(){var Bc=A._GetAutoObject(
C.Helper).AMT();var AkF=A._GetAutoObject(C.Helper).BfF(3,A._GetAutoObject(C.Device
).ACz);AkF.AaZ=true;Bc.CZ(AkF);return Bc;},BfF:function(EC,A_R){var Ay=A._NewObject(
C.UInt32FilterCriterion,0);Ay.ES=4;switch(EC){case 2:{Ay.Operator=3;Ay.A4=A._GetAutoObject(
C.Helper).Y$(A_R);}break;case 3:{Ay.Operator=2;Ay.A4=A._GetAutoObject(C.Helper).
Y$(A_R-1);}break;default:A.ab5("%s%e",ATY,EC);}return Ay;},Bf1:function(){return(((
A._GetAutoObject(C.Device).GetVersionMajor().toFixed()+Lj)+A._GetAutoObject(C.Device
).GetVersionMinor().toFixed())+Lj)+A._GetAutoObject(C.Device).GetVersionRev().toFixed(
);},Bd1:function(Q5,EA){var GH=0;switch(Q5){case 0:GH=EA.VisualId;break;case 2:GH=
A._GetAutoObject(C.Helper).Ako(EA.TransponderId);break;case 1:if(!A._GetAutoObject(
C.Device).EartagNrAssignmentMode)GH=A._GetAutoObject(C.Device).Aji;else switch(EA.
Gender){case 0:GH=A._GetAutoObject(C.Device).Ap6;break;case 1:GH=A._GetAutoObject(
C.Device).Ap5;break;case 2:GH=A._GetAutoObject(C.Device).Aji;break;default:throw new
Error(AFQ+EA.Gender.toFixed());}break;default:throw new Error(ATZ+Q5.toFixed());
}return GH;},A89:function(){var B;var IN=null;var ST=0;if(!A._GetAutoObject(C.Device
).EartagNrAssignmentMode){IN=[B=A._GetAutoObject(C.Device),B.AmL,B.AnP];ST=A._GetAutoObject(
C.Device).At0;}else switch(A._GetAutoObject(C.Helper).X.Gender){case 1:{IN=[B=A.
_GetAutoObject(C.Device),B.Au6,B.Axo];ST=A._GetAutoObject(C.Device).AA3;}break;case
0:{IN=[B=A._GetAutoObject(C.Device),B.Au7,B.Axp];ST=A._GetAutoObject(C.Device).AA4;
}break;case 2:{IN=[B=A._GetAutoObject(C.Device),B.AmL,B.AnP];ST=A._GetAutoObject(
C.Device).At0;}break;default:;}if(!!IN)switch(ST){case 1:IN[2].call(IN[0],A._GetAutoObject(
C.Helper).X.VisualId-1);break;case 0:IN[2].call(IN[0],A._GetAutoObject(C.Helper).
X.VisualId+1);break;default:;}},A40:function(WO,EA){return(EA.NaisId!==WO)&&this.
AO9(WO);},Bgt:function(LX,EA){return(EA.TransponderId!==LX)&&this.AO$(LX);},AMK:
function(){var Bc=A._GetAutoObject(C.Helper).A4u();var AyQ=A._NewObject(C.UInt64FilterCriterion
,0);AyQ.Initialize(35,5,0,true);Bc.CZ(AyQ);return Bc;},AMV:function(){var Bc=A._GetAutoObject(
C.Helper).A4u();var AyQ=A._NewObject(C.UInt64FilterCriterion,0);AyQ.Initialize(35
,0,0,true);Bc.CZ(AyQ);return Bc;},Mp:function(AYl,Ahn){AYl.Aj(Ahn);AYl.Ar(Ahn);AYl.
Y(Ahn);},A3l:function(Ahp){var B;var Aa;var A0u=false;var WW=Ahp.Vj(null,0x1);while(
!!WW&&(((B=WW)?B.__proto__:null)!==A.Core.Z)){Aa=(A.kR.Cd.isPrototypeOf(WW)?WW:null
);if(!!Aa){Aa.Bf(A0u);A0u=!A0u;}WW=Ahp.Vj(WW,0x1);}},Aqz:function(){return this.
T2;},A6v:function(){return this.AgW;},Bh7:function(){return this.ASb;},Bh8:function(
){return this.ASc;},Bh$:function(){return this.AFa;},_Init:function(aArg){C.Al5.
_Init.call(this,aArg);C.Animal._Init.call(this.X={I:this},0);A.Core.Bt._Init.call(
this.As={I:this},0);A.acl.FX._Init.call(this.Kt={I:this},0);A.acl.FX._Init.call(
this.Sp={I:this},0);C.AKK._Init.call(this.Adg={I:this},0);C.ASS._Init.call(this.
T8={I:this},0);C.ASR._Init.call(this.T7={I:this},0);C.U6._Init.call(this.AdE={I:
this},0);C.ATs._Init.call(this.AeP={I:this},0);C.ATr._Init.call(this.AeO={I:this
},0);C.ATq._Init.call(this.AeN={I:this},0);C.ATu._Init.call(this.AeQ={I:this},0);
C.AKL._Init.call(this.AfS={I:this},0);this.__proto__=C.HelperClass;var B;this.Kt.
ID(1);this.Kt.Fy(3000);this.Kt.B1=100;this.Sp.Avw(10);this.Sp.V7(5);this.Sp.ID(1
);this.Sp.Fy(4000);this.AdE.B1=false;this.AdE.Ct=true;this.AdE.ID(1);this.AdE.Fy(
100);this.Kt.Sa=[this,this.Byd];this.Kt.R=[this,this.Bh$,this.Bkp];this.Sp.Sa=[this
,this.Byf];this.Sp.R=[B=A._GetAutoObject(C.Device),B.AC3,B.AG_];this.AdE.R=[B=A.
_GetAutoObject(C.Device),B.AC4,B.AG$];this.Init(aArg);var Lk=this._variants();if(
Lk){this.K={};Lk._Init.call(this,aArg);}},_Done:function(){if(this.K)this.K._Done.
call(this);this.__proto__=C.Al5;this.X._Done();this.As._Done();this.Kt._Done();this.
Sp._Done();this.Adg._Done();this.T8._Done();this.T7._Done();this.AdE._Done();this.
AeP._Done();this.AeO._Done();this.AeN._Done();this.AeQ._Done();this.AfS._Done();
C.Al5._Done.call(this);},_ReInit:function(){C.Al5._ReInit.call(this);this.X._ReInit(
);this.As._ReInit();this.Kt._ReInit();this.Sp._ReInit();this.Adg._ReInit();this.
T8._ReInit();this.T7._ReInit();this.AdE._ReInit();this.AeP._ReInit();this.AeO._ReInit(
);this.AeN._ReInit();this.AeQ._ReInit();this.AfS._ReInit();if(this.K)this.K._ReInit.
call(this);},_Mark:function(D){var B;C.Al5._Mark.call(this,D);if((B=this.T2)&&(B.
_cycle!=D))B._Mark(B._cycle=D);if((B=this.AgW)&&(B._cycle!=D))B._Mark(B._cycle=D
);if((B=this.ASb)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.ASc)&&(B._cycle!=
D))B._Mark(B._cycle=D);if((B=this.X)._cycle!=D)B._Mark(B._cycle=D);if((B=this.As
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Kt)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Sp)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Adg)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.T8)._cycle!=D)B._Mark(B._cycle=D);if((B=this.T7)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.AdE)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AeP)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.AeO)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
AeN)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AeQ)._cycle!=D)B._Mark(B._cycle=D);
if((B=this.AfS)._cycle!=D)B._Mark(B._cycle=D);if(this.K)this.K._Mark(D);},_variants:
function(){return A.acr.HelperClass._variants();},K:null,_className:"Device::HelperClass"
};C.Helper={_Init:function(){C.HelperClass._Init.call(this,0);},_ReInit:function(
){},_variants:function(){return this;},_this:null};C.BoolFilterCriterion={A4:false
,Adz:function(){var Ay=A._NewObject(C.BoolFilterCriterion,0);Ay.Gu(this);return Ay;
},Gu:function(AM){C.FilterCriterion.Gu.call(this,AM);var Ay=(C.BoolFilterCriterion.
isPrototypeOf(AM)?AM:null);if(!!Ay)this.A4=Ay.A4;},Initialize:function(AX,EC,A1,
SM){this.ES=AX;this.Operator=EC;this.A4=A1;this.AaZ=SM;return this;},_Init:function(
aArg){C.FilterCriterion._Init.call(this,aArg);this.__proto__=C.BoolFilterCriterion;
},_className:"Device::BoolFilterCriterion"};C.UInt32FilterCriterion={A4:0,Adz:function(
){var Ay=A._NewObject(C.UInt32FilterCriterion,0);Ay.Gu(this);return Ay;},Gu:function(
AM){C.FilterCriterion.Gu.call(this,AM);var Ay=(C.UInt32FilterCriterion.isPrototypeOf(
AM)?AM:null);if(!!Ay)this.A4=Ay.A4;},Initialize:function(AX,EC,A1,SM){this.ES=AX;
this.Operator=EC;this.A4=A1;this.AaZ=SM;return this;},_Init:function(aArg){C.FilterCriterion.
_Init.call(this,aArg);this.__proto__=C.UInt32FilterCriterion;},_className:"Device::UInt32FilterCriterion"
};C.OverlayMenu={None:0,Home:1,AutoAction:2,MenuItemSettings:3,RatingSettings:4,
WeighingSettings:5,Options:6,AnimalSearch:7,ActionSettings:8,MeasurementReady:9,
AnimalMultiInfoMenu:10,AnimalSearchUnfiltered:11,AnimalSearchDriedOff:12,MassRecordingMenu:
13,MassRecordingDefaults:14,MassRecordingFields:15,PurchasedAnimalsListMenu:16,BirthRegistrationsListMenu:
17,LAST:18};C.EnumToString={B0:function(A7){throw new Error(Ar1+A7.toFixed());},
Lh:function(A7){return this.B0(A7);},_Init:function(aArg){this.__proto__=C.EnumToString;
A.h7++;},_Done:function(){this.__proto__=null;A.h7--;},_ReInit:function(){},_Mark:
function(D){var B;if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:
0,_observers:null,_className:"Device::EnumToString"};C.ScreenTypeToString={B0:function(
A7){var AIb=A7;var Bs;switch(AIb){case 3:Bs=A.aaR(A.acf.Auu);break;case 34:Bs=A.
aaR(A.acf.O1);break;case 35:Bs=A.aaR(A.acf.S7);break;case 47:Bs=A.aaR(A.acf.AMI);
break;default:Bs=this.Bms(A7);}return Bs;},Bms:function(A7){var AIb=A7;var Bs=A.
jV;switch(AIb){case 0:Bs=AwW;break;case 2:Bs=AFR;break;case 4:Bs=AT0;break;case 40:
Bs=AFS;break;case 39:Bs=AT1;break;case 72:Bs=AT2;break;case 73:Bs=AT3;break;case
93:Bs=AT4;break;case 94:Bs=AFT;break;case 74:Bs=AT5;break;case 3:Bs=AwX;break;case
6:Bs=AFU;break;case 16:Bs=AFV;break;case 22:Bs=AT6;break;case 46:Bs=AFW;break;case
100:Bs=AT7;break;case 99:Bs=AT8;break;case 101:Bs=Q1;break;case 17:Bs=WD;break;case
23:Bs=AT9;break;case 18:Bs=AT_;break;case 19:Bs=AT$;break;case 38:Bs=AUa;break;case
87:Bs=AUb;break;case 1:Bs=AUc;break;case 5:Bs=AUd;break;case 7:Bs=Ahd;break;case
92:Bs=AFX;break;case 8:Bs=AUe;break;case 9:Bs=AUf;break;case 41:Bs=AFY;break;case
42:Bs=AFZ;break;case 24:Bs=AwY;break;case 10:Bs=Q2;break;case 68:Bs=AUg;break;case
21:Bs=AUh;break;case 11:Bs=AUi;break;case 29:Bs=Ar2;break;case 54:Bs=AUj;break;case
30:Bs=AUk;break;case 12:Bs=AUl;break;case 13:Bs=AUm;break;case 14:Bs=AUn;break;case
15:Bs=AUo;break;case 78:Bs=Ar3;break;case 79:Bs=AUp;break;case 20:Bs=AUq;break;case
37:Bs=AUr;break;case 43:Bs=AUs;break;case 44:Bs=AUt;break;case 45:Bs=AUu;break;case
25:Bs=AUv;break;case 75:Bs=AUw;break;case 67:Bs=AUx;break;case 66:Bs=AUy;break;case
64:Bs=AF0;break;case 65:Bs=Ar4;break;case 77:Bs=AUz;break;case 76:Bs=AUA;break;case
95:Bs=AUB;break;case 88:Bs=AwZ;break;case 26:Bs=Akx;break;case 28:Bs=Ahe;break;case
27:Bs=Aw0;break;case 31:Bs=AnC;break;case 89:Bs=Ahf;break;case 34:Bs=AUC;break;case
35:Bs=Aw1;break;case 32:Bs=AF1;break;case 50:Bs=AeX;break;case 55:Bs=AF2;break;case
63:Bs=WE;break;case 62:Bs=Aky;break;case 33:Bs=AnD;break;case 36:Bs=AUD;break;case
56:Bs=AUE;break;case 86:Bs=AUF;break;case 57:Bs=AUG;break;case 47:Bs=AUH;break;case
49:Bs=Ar5;break;case 48:Bs=AF3;break;case 69:Bs=AF4;break;case 71:Bs=AUI;break;case
70:Bs=AUJ;break;case 51:Bs=AUK;break;case 53:Bs=AUL;break;case 52:Bs=AUM;break;case
96:Bs=AUN;break;case 98:Bs=AF5;break;case 97:Bs=AUO;break;case 80:Bs=Aw2;break;case
82:Bs=AF6;break;case 81:Bs=AF7;break;case 85:Bs=AF8;break;case 84:Bs=AF9;break;case
83:Bs=AF_;break;case 58:Bs=AF$;break;case 60:Bs=AUP;break;case 59:Bs=AUQ;break;case
61:Bs=AUR;break;case 90:Bs=AUS;break;case 91:Bs=AUT;break;case 102:Bs=AUU;break;
case 103:Bs=AUV;break;default:throw new Error(Aw3+AIb.toFixed());}return Bs;},_Init:
function(aArg){C.EnumToString._Init.call(this,aArg);this.__proto__=C.ScreenTypeToString;
},_className:"Device::ScreenTypeToString"};C.OverlayMenuToString={B0:function(A7
){var Bcr=A7;var N_=A.jV;switch(Bcr){case 0:N_=AGa;break;case 1:N_=AwX;break;case
8:N_=AUW;break;case 2:N_=AGb;break;case 3:N_=Ahg;break;case 4:N_=WF;break;case 5:
N_=AUX;break;case 6:N_=Ab$;break;case 7:N_=AUY;break;case 11:N_=AUZ;break;case 12:
N_=AnE;break;case 9:N_=AeY;break;case 10:N_=AnF;break;case 14:N_=AGc;break;case 15:
N_=AU0;break;case 13:N_=OM;break;case 16:N_=AU1;break;case 17:N_=AU2;break;default:
throw new Error(AU3+Bcr.toFixed());}return N_;},_Init:function(aArg){C.EnumToString.
_Init.call(this,aArg);this.__proto__=C.OverlayMenuToString;},_className:"Device::OverlayMenuToString"
};C.ScanStateToString={B0:function(A7){var BcZ=A7;var Bl=A.jV;switch(BcZ){case 4:
Bl=Aw4;break;case 0:Bl=Ar6;break;case 2:Bl=AGd;break;case 3:Bl=AU4;break;case 1:
Bl=AGe;break;default:throw new Error(AGf+BcZ.toFixed());}return Bl;},_Init:function(
aArg){C.EnumToString._Init.call(this,aArg);this.__proto__=C.ScanStateToString;},
_className:"Device::ScanStateToString"};C.MeasureStateToString={B0:function(A7){
var Bba=A7;var Bl=A.jV;switch(Bba){case 4:Bl=Aw4;break;case 0:Bl=Ar6;break;case 2:
Bl=AU5;break;case 1:Bl=AGe;break;case 3:Bl=AGg;break;default:throw new Error(AU6+
Bba.toFixed());}return Bl;},_Init:function(aArg){C.EnumToString._Init.call(this,
aArg);this.__proto__=C.MeasureStateToString;},_className:"Device::MeasureStateToString"
};C.TemperatureUnit={Celsius:0,Fahrenheit:1,LAST:2};C.TemperatureUnitToString={B0:
function(A7){var Bdm=A7;var Apl=A.jV;switch(Bdm){case 0:Apl=A.aaR(A.acf.BmJ);break;
case 1:Apl=A.aaR(A.acf.BmK);break;default:throw new Error(AU7+Bdm.toFixed());}return Apl;
},_Init:function(aArg){C.EnumToString._Init.call(this,aArg);this.__proto__=C.TemperatureUnitToString;
},_className:"Device::TemperatureUnitToString"};C.AnimalType={DairyCalf:0,DairyCow:
1,SheepLamb:2,LAST:3};C.AnimalTypeToString={B0:function(A7){var Bdd=A7;var type=
A.jV;switch(Bdd){case 0:type=A.aaR(A.acf.Bet);break;case 1:type=A.aaR(A.acf.BeG);
break;case 2:type=A.aaR(A.acf.BgB);break;default:throw new Error(AU8+Bdd.toFixed(
));}return type;},_Init:function(aArg){C.EnumToString._Init.call(this,aArg);this.
__proto__=C.AnimalTypeToString;},_className:"Device::AnimalTypeToString"};C.Language={
Default:0,German:1,Spanish:2,French:3,Italian:4,Finnish:5,Chinese_TW:6,Turkish:7
,Greek:8,Russian:9,Dutch:10,Czech:11,Estonian:12,Bulgarian:13,Bosnian:14,Norwegian:
15,Ukrainian:16,LAST:17};C.LanguageToString={B0:function(A7){var AyJ=A7;var OS=A.
jV;switch(AyJ){case 0:OS=AGh;break;case 10:OS=AU9;break;case 1:OS=AGi;break;case
12:OS=AGj;break;case 5:OS=Aw5;break;case 3:OS=AU_;break;case 8:OS=AU$;break;case
13:OS=AVa;break;case 4:OS=AVb;break;case 9:OS=AVc;break;case 2:OS=AVd;break;case
7:OS=AVe;break;case 6:OS=AVf;break;case 11:OS=Ar7;break;case 14:OS=Ar8;break;case
15:OS=AGk;break;case 16:OS=AVg;break;default:throw new Error(AGl+AyJ.toFixed());
}return OS;},Lh:function(A7){var AyJ=A7;var Dg=A.jV;switch(AyJ){case 0:Dg=AVh;break;
case 10:Dg=Wy;break;case 1:Dg=QZ;break;case 12:Dg=AVi;break;case 5:Dg=Un;break;case
3:Dg=Wt;break;case 8:Dg=AVj;break;case 13:Dg=Wr;break;case 4:Dg=Wu;break;case 9:
Dg=Uo;break;case 2:Dg=Zy;break;case 7:Dg=Zz;break;case 6:Dg=AVk;break;case 11:Dg=
AVl;break;case 14:Dg=AVm;break;case 15:Dg=SG;break;case 16:Dg=JN;break;default:throw new
Error(AGl+AyJ.toFixed());}return Dg;},_Init:function(aArg){C.EnumToString._Init.
call(this,aArg);this.__proto__=C.LanguageToString;},_className:"Device::LanguageToString"
};C.Gender={Male:0,Female:1,Unknown:2,LAST:3};C.BirthType={Single:0,Twins:1,Triplets:
2,Quadruplets:3,LAST:4};C.GenderToString={B0:function(A7){var AsM=A7;var AIt=A.jV;
switch(AsM){case 0:AIt=A.aaR(A.acf.Male);break;case 1:AIt=A.aaR(A.acf.Female);break;
case 2:AIt=A.aaR(A.acf.Unknown);break;default:throw new Error(AVn+AsM.toFixed());
}return AIt;},_Init:function(aArg){C.EnumToString._Init.call(this,aArg);this.__proto__=
C.GenderToString;},_className:"Device::GenderToString"};C.BirthTypeToString={B0:
function(A7){var type=A7;var Afa=A.jV;switch(type){case 0:Afa=A.aaR(A.acf.BlI);break;
case 1:Afa=A.aaR(A.acf.BmF);break;case 2:Afa=A.aaR(A.acf.Triplets);break;case 3:
Afa=A.aaR(A.acf.Quadruplets);break;default:throw new Error(AVo+type.toFixed());}
return Afa;},_Init:function(aArg){C.EnumToString._Init.call(this,aArg);this.__proto__=
C.BirthTypeToString;},_className:"Device::BirthTypeToString"};C.SyncState={Idle:
0,Init:1,Exporting:2,ImportStart:3,Importing:4,ImportFinish:5,Ready:6,Error:7,LAST:
8};C.SyncStateToString={B0:function(A7){var Bdg=A7;var Bl=A.jV;switch(Bdg){case 7:
Bl=Aw4;break;case 0:Bl=Ar6;break;case 6:Bl=AGg;break;case 2:Bl=AVp;break;case 5:
Bl=AVq;break;case 3:Bl=AVr;break;case 4:Bl=AVs;break;case 1:Bl=AVt;break;default:
throw new Error(AVu+Bdg.toFixed());}return Bl;},_Init:function(aArg){C.EnumToString.
_Init.call(this,aArg);this.__proto__=C.SyncStateToString;},_className:"Device::SyncStateToString"
};C.RatedAttributeToString={B0:function(A7){var Azv=A7;switch(Azv){case 0:return A.
jV;case 1:return A.aaR(A.acf.Bk0);case 4:return A.aaR(A.acf.BkZ);case 3:return A.
aaR(A.acf.Bk1);case 2:return A.aaR(A.acf.BkY);default:throw new Error(AGm+Azv.toFixed(
));}},Lh:function(A7){var Azv=A7;switch(Azv){case 0:return A.jV;case 1:return A.
aaR(A.acf.Feed);case 4:return A.aaR(A.acf.AED);case 3:return A.aaR(A.acf.AEE);case
2:return A.aaR(A.acf.AEB);default:throw new Error(AGm+Azv.toFixed());}},_Init:function(
aArg){C.EnumToString._Init.call(this,aArg);this.__proto__=C.RatedAttributeToString;
},_className:"Device::RatedAttributeToString"};C.AssesmentToString={B0:function(
A7){var AkM=A7;var AxW=A.jV;switch(AkM){case 0:case 5:AxW=A.jV;break;case 3:AxW=
A.aaR(A.acj.BlO);break;case 2:AxW=A.aaR(A.acj.BlQ);break;case 1:AxW=A.aaR(A.acj.
BlP);break;default:throw new Error(AVv+AkM.toFixed());}return AxW;},_Init:function(
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
105,LAST:106};C.PopupState={Queued:0,Unknown:1,Displayed:2,ClosedAfterTimeOut:3,
ClosedWithOk:4,ClosedWithCancel:5,ClosedByMiddleware:6,ClosedWithYes:7,ClosedWithNo:
8,Opened:9};C.PopupContext={AEp:null,Aj4:A.jV,Akm:0,PopupState:1,Id:0,Show:false
,Bkb:function(E){var B;if(this.PopupState===E)return;this.PopupState=E;if(!!this.
AEp)(B=this.AEp)?B[1].call(B[0],this):null;},_Init:function(aArg){this.__proto__=
C.PopupContext;A.h7++;},_Done:function(){this.__proto__=null;A.h7--;},_ReInit:function(
){},_Mark:function(D){var B;if((B=this.AEp)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=
D);if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:
null,_className:"Device::PopupContext"};C.Boolean={No:0,Yes:1,LAST:2};C.BooleanToYesNo={
B0:function(A7){switch(A7){case 0:return A.aaR(A.acf.No);case 1:return A.aaR(A.acf.
Yes);default:return Ar9+A7.toFixed();}},_Init:function(aArg){C.EnumToString._Init.
call(this,aArg);this.__proto__=C.BooleanToYesNo;},_className:"Device::BooleanToYesNo"
};C.AnimalGroupTableFields={Id:0,GroupName:1};C.AnimalGroup={GroupName:Ab_,Id:0,
EJ:function(Ac,AG){var Ht=C.Row.EJ.call(this,Ac,AG);if(Ht&&!!AG){this.OnSetId(AG.
CA(Ac,0));this.ADx(AG.Vo(Ac,1));}return Ht;},Co:function(AG){var Ht=C.Row.Co.call(
this,AG);if(Ht&&!!AG){var Jc=AG.Oi();if(Jc<=0)A.ab5("%s",Ab9);else{if(this.Amo()
)this.CE=AG.X7();AG.Ha(this.CE,0,this.Id);AG.Y3(this.CE,1,this.GroupName);AG.Ol(
Jc);}}return Ht;},F$:function(){C.Row.F$.call(this);this.OnSetId(-1);},G$:function(
){C.Row.G$.call(this);this.OnSetId(0);this.ADx(A.jV);},OnSetId:function(E){if(this.
Id===E)return;this.Id=E;A.abo([this,this.QF,this.OnSetId],0);},ADx:function(E){if(
this.GroupName===E)return;this.GroupName=E;A.abo([this,this.BhN,this.ADx],0);},QF:
function(){return this.Id;},BhN:function(){return this.GroupName;},_Init:function(
aArg){C.Row._Init.call(this,aArg);this.__proto__=C.AnimalGroup;this.TableId=3;},
_className:"Device::AnimalGroup"};C.PopupIdToString={B0:function(A7){var AcV=A7;
var Az=A.jV;var AH$;AH$=A.aaR(A.acf.Bm2)+OL;switch(AcV){case 0:Az=A.aaR(A.acf.Unknown
);break;case 1:Az=A.aaR(A.acf.SevereError);break;case 58:Az=A.aaR(A.acf.Bfi);break;
case 2:Az=A.aaR(A.acf.Bfg);break;case 3:Az=A.aaR(A.acf.BmO);break;case 77:Az=A._GetAutoObject(
C.Helper).Bfw();break;case 78:Az=A._GetAutoObject(C.Helper).Bfu();break;case 79:
Az=A._GetAutoObject(C.Helper).Bfv();break;case 9:Az=A.aaR(A.acf.Bna);break;case 5:
Az=A.aaR(A.acf.SuccessDataSync);break;case 8:Az=A.aaR(A.acf.SuccessResetFactorySettings
);break;case 34:Az=A.aaR(A.acf.SuccessResetAnimalData);break;case 10:Az=A._GetAutoObject(
C.Device).ABu();break;case 82:Az=A.aaR(A.acf.Bfk);break;case 83:Az=A.aaR(A.acf.Bfl
);break;case 80:Az=A.aaR(A.acf.BlZ);break;case 81:Az=A.aaR(A.acf.SuccessRestoreBackup
);break;case 92:Az=A.aaR(A.acf.Bef);break;case 93:Az=A.aaR(A.acf.Bla);break;case
4:Az=A.aaR(A.acf.WarningDataSync);break;case 7:Az=A.aaR(A.acf.Bm9);break;case 33:
Az=A.aaR(A.acf.WarningResetAnimalData);break;case 6:Az=A.aaR(A.acf.WarningRestart
);break;case 27:Az=A.aaR(A.acf.WarningNoActionDefined);break;case 64:Az=A.aaR(A.
acf.WarningActionNotApplicable);break;case 28:Az=A.aaR(A.acf.WarningNoMenuItemVisible
);break;case 29:Az=A.aaR(A.acf.WarningEnterPresentationMode);break;case 30:Az=A.
aaR(A.acf.WarningNoAnimalsRegistered);break;case 41:Az=((AH$+A.aaR(A.acf.APE))+OL
)+A.aaR(A.acf.BgQ);break;case 50:Az=((AH$+A.aaR(A.acf.APE))+OL)+A.aaR(A.acf.BgS);
break;case 51:Az=((AH$+A.aaR(A.acf.APE))+OL)+A.aaR(A.acf.BgR);break;case 42:Az=A.
aaR(A.acf.Bm$);break;case 91:Az=A.aaR(A.acf.WarningScanOverwriteNaisId);break;case
45:Az=A.aaR(A.acf.Bm6);break;case 46:Az=A.aaR(A.acf.WarningNoValidCountryCode);break;
case 57:Az=A.aaR(A.acf.WarningOutdatedAnimalWeight);break;case 52:Az=A.aaR(A.acf.
WarningOutdatedAnimalWeights);break;case 53:Az=A.aaR(A.acf.WarningWeightEvaluationSingular
);break;case 56:Az=A.aaR(A.acf.WarningWeightEvaluationPlural);break;case 11:Az=A.
aaR(A.acf.ScanError);break;case 12:Az=A.aaR(A.acf.ScanNotFound);break;case 13:Az=
A.aaR(A.acf.Bd9);break;case 36:Az=A.aaR(A.acf.BmA);break;case 14:Az=A.aaR(A.acf.
AnimalNotFound);break;case 15:Az=A.aaR(A.acf.SuccessUnregister);break;case 35:Az=
A.aaR(A.acf.SuccessUnregisterPerished);break;case 26:Az=A.aaR(A.acf.SuccessCreationNewAnimal
);break;case 23:Az=A.aaR(A.acf.SuccessCreationNewAnimals);break;case 24:Az=A.aaR(
A.acf.BeJ);break;case 49:Az=A.aaR(A.acf.EvaluationInProgress);break;case 16:Az=A.
aaR(A.acf.BeP);break;case 17:Az=A.aaR(A.acf.BlS);break;case 18:Az=A.aaR(A.acf.Bl4
);break;case 19:Az=A.aaR(A.acf.BlT);break;case 20:Az=A.aaR(A.acf.Bl5);break;case
54:Az=A.aaR(A.acf.Bl0);break;case 55:Az=A.aaR(A.acf.Bl3);break;case 21:Az=A.aaR(
A.acf.A2v);break;case 48:Az=(A.aaR(A.acf.A2v)+OL)+A.aaR(A.acf.A3n);break;case 22:
Az=A.aaR(A.acf.BgX);break;case 63:Az=A.aaR(A.acf.Bm7);break;case 85:Az=A.aaR(A.acf.
Bm8);break;case 43:Az=A.aaR(A.acf.BgY);break;case 25:Az=A.aaR(A.acf.A8Z);break;case
47:Az=(A.aaR(A.acf.A8Z)+OL)+A.aaR(A.acf.A3n);break;case 31:{var Bv1=(((((((((((((((((((
A.aaR(A.acf.BeA)+AwV)+A.aaR(A.acf.ALy))+A.aaR(A.acf.Colon))+NW)+A.aaR(A.acf.BeC)
)+OL)+A.aaR(A.acf.AMx))+A.aaR(A.acf.Colon))+NW)+A.aaR(A.acf.Bfq))+OL)+A.aaR(A.acf.
ARY))+A.aaR(A.acf.Colon))+NW)+A.aaR(A.acf.Bk3))+OL)+A.aaR(A.acf.ARX))+A.aaR(A.acf.
Colon))+NW)+A.aaR(A.acf.Bk2);Az=Bv1;}break;case 32:Az=A.aaR(A.acf.BmB);break;case
69:Az=A.aaR(A.acf.Bg5);break;case 44:Az=A.aaR(A.acf.Bm_);break;case 37:Az=A.aaR(
A.acf.WarningResetWeightSettings);break;case 38:Az=A.aaR(A.acf.WarningResetTempThresholds
);break;case 39:Az=A.aaR(A.acf.BkT);break;case 76:Az=(A.aaR(A.acf.A21)+OL)+A.aaR(
A.acf.AR0);break;case 40:Az=A.aaR(A.acf.Bl1);break;case 75:Az=A.aaR(A.acf.BlU);break;
case 59:Az=A.aaR(A.acf.QuestionAddAnotherCalfMultiples);break;case 62:Az=A.aaR(A.
acf.BlV);break;case 97:Az=A.aaR(A.acf.BlW);break;case 60:Az=A.aaR(A.acf.BlX);break;
case 99:Az=A.aaR(A.acf.BlY);break;case 61:Az=A.aaR(A.acf.Bl6);break;case 105:Az=
A.aaR(A.acf.Bl7);break;case 65:Az=A.aaR(A.acf.SuccessClearAnimalLoss);break;case
66:Az=A.aaR(A.acf.WarningNoActionsForAnimalLoss);break;case 67:Az=A.aaR(A.acf.SuccessLinkTransponder
);break;case 86:Az=A.aaR(A.acf.SuccessUnlinkTransponder);break;case 68:Az=A.aaR(
A.acf.Bl2);break;case 70:Az=A.aaR(A.acf.Bfm);break;case 71:Az=A.aaR(A.acf.Bl_);break;
case 72:Az=A.aaR(A.acf.Bl$);break;case 98:Az=A.aaR(A.acf.Bfo);break;case 101:Az=
A.aaR(A.acf.Bma);break;case 100:Az=A.aaR(A.acf.Bmb);break;case 88:Az=A.aaR(A.acf.
Bfn);break;case 89:Az=A.aaR(A.acf.Bl8);break;case 90:Az=A.aaR(A.acf.Bl9);break;case
73:Az=A.aaR(A.acf.WarningNoPremisesID);break;case 74:Az=A.aaR(A.acf.WarningNoFlashDrivePresent
);break;case 95:Az=A.aaR(A.acf.WarningNoBackupPathPresent);break;case 94:Az=A.aaR(
A.acf.WarningNoBackupFilePresent);break;case 84:Az=A.aaR(A.acf.BfD);break;case 87:
Az=A.aaR(A.acf.Bnc);break;case 96:Az=A.aaR(A.acf.Bm5);break;case 103:Az=A.aaR(A.
acf.WarningParsedDateInFutureInvalid);break;case 102:Az=A.aaR(A.acf.WarningParsingDateFailed
);break;case 104:Az=A.aaR(A.acf.WarningParsingNaisIdFailed);break;default:throw new
Error(Aw6+AcV.toFixed());}return Az;},Lh:function(A7){var AcV=A7;var Az=A.jV;switch(
AcV){case 0:Az=AGn;break;case 1:Az=AGo;break;case 58:Az=Aw7;break;case 2:Az=Aw8;
break;case 3:Az=AGp;break;case 77:Az=AVw;break;case 78:Az=AVx;break;case 79:Az=AVy;
break;case 9:Az=AGq;break;case 5:Az=AVz;break;case 8:Az=AVA;break;case 34:Az=AVB;
break;case 80:Az=AVC;break;case 81:Az=AVD;break;case 92:Az=AVE;break;case 93:Az=
AVF;break;case 82:Az=AVG;break;case 83:Az=Aw9;break;case 10:Az=AVH;break;case 4:
Az=AVI;break;case 7:Az=Aw_;break;case 33:Az=Ar_;break;case 6:Az=ZA;break;case 27:
Az=Ar$;break;case 64:Az=AVJ;break;case 28:Az=AVK;break;case 29:Az=AVL;break;case
30:Az=AGr;break;case 41:Az=AVM;break;case 50:Az=AGs;break;case 51:Az=AVN;break;case
42:Az=AVO;break;case 91:Az=AVP;break;case 45:Az=Asa;break;case 46:Az=AVQ;break;case
57:Az=AVR;break;case 52:Az=AGt;break;case 53:Az=AVS;break;case 56:Az=AVT;break;case
11:Az=AVU;break;case 12:Az=AVV;break;case 13:Az=Aca;break;case 36:Az=AVW;break;case
14:Az=AVX;break;case 15:Az=AVY;break;case 35:Az=AVZ;break;case 26:Az=AGu;break;case
23:Az=AV0;break;case 24:Az=AV1;break;case 49:Az=AV2;break;case 16:Az=AV3;break;case
17:Az=AV4;break;case 18:Az=AV5;break;case 19:Az=AGv;break;case 20:Az=AV6;break;case
54:Az=AV7;break;case 55:Az=AV8;break;case 21:Az=AGw;break;case 48:Az=AGx;break;case
22:Az=AV9;break;case 63:Az=AV_;break;case 43:Az=AV$;break;case 85:Az=AWa;break;case
25:Az=Q3;break;case 47:Az=Asb;break;case 31:Az=AGy;break;case 32:Az=AGz;break;case
69:Az=AnG;break;case 44:Az=AnH;break;case 37:Az=Aw$;break;case 38:Az=AWb;break;case
39:Az=AGA;break;case 76:Az=AWc;break;case 40:Az=AWd;break;case 75:Az=AWe;break;case
59:Az=AWf;break;case 62:Az=AWg;break;case 97:Az=AWh;break;case 60:Az=AWi;break;case
99:Az=AWj;break;case 65:Az=AWk;break;case 61:Az=AWl;break;case 105:Az=AWm;break;
case 66:Az=AWn;break;case 67:Az=AWo;break;case 86:Az=AWp;break;case 68:Az=AWq;break;
case 70:Az=AWr;break;case 71:Az=AWs;break;case 72:Az=AnI;break;case 98:Az=AGB;break;
case 101:Az=AWt;break;case 100:Az=AGC;break;case 88:Az=AGD;break;case 89:Az=ZB;break;
case 90:Az=AGE;break;case 73:Az=AWu;break;case 74:Az=AGF;break;case 95:Az=AWv;break;
case 94:Az=Axa;break;case 84:Az=AWw;break;case 87:Az=AWx;break;case 96:Az=Axb;break;
case 103:Az=AWy;break;case 102:Az=AWz;break;case 104:Az=AWA;break;default:throw new
Error(Aw6+AcV.toFixed());}return Az;},_Init:function(aArg){C.EnumToString._Init.
call(this,aArg);this.__proto__=C.PopupIdToString;},_className:"Device::PopupIdToString"
};C.PopupParamSeparator=";";C.RatingMode={Basic:0,Extended:1,LAST:2};C.TransponderType={
UNDEFINED:0,AnimalId:1,FarmId:2,GroupId:3,PersonId:4,LAST:5};C.TransponderProtocol={
UNDEFINED:0,FDX:1,HDX:2,HDX_URBAN:3,LAST:4};C.TransponderTypeToString={B0:function(
A7){var Bdx=A7;var type=A.jV;switch(Bdx){case 1:type=AGG;break;case 2:type=AnJ;break;
case 3:type=AGH;break;case 4:type=AWB;break;case 0:type=AwW;break;default:throw new
Error(AGI+Bdx.toFixed());}return type;},_Init:function(aArg){C.EnumToString._Init.
call(this,aArg);this.__proto__=C.TransponderTypeToString;},_className:"Device::TransponderTypeToString"
};C.TransponderProtocolToString={B0:function(A7){var Bdw=A7;var Azs=A.jV;switch(
Bdw){case 1:Azs=AGJ;break;case 2:Azs=Akz;break;case 3:Azs=AWC;break;case 0:Azs=AwW;
break;default:throw new Error(AnK+Bdw.toFixed());}return Azs;},_Init:function(aArg
){C.EnumToString._Init.call(this,aArg);this.__proto__=C.TransponderProtocolToString;
},_className:"Device::TransponderProtocolToString"};C.Transponder={Id:0,TransponderProtocol:
0,TransponderType:0,ARv:function(E){if(this.TransponderType===E)return;this.TransponderType=
E;A.abo([this,this.Bil,this.ARv],0);},ARu:function(E){if(this.TransponderProtocol===
E)return;this.TransponderProtocol=E;A.abo([this,this.Bik,this.ARu],0);},OnSetId:
function(E){if(this.Id===E)return;this.Id=E;A.abo([this,this.QF,this.OnSetId],0);
},AMX:function(){return A._GetAutoObject(C.Converter).Bmz(this.Id);},BfM:function(
){return A._GetAutoObject(C.Converter).Awu(this.Id);},Bil:function(){return this.
TransponderType;},Bik:function(){return this.TransponderProtocol;},QF:function(){
return this.Id;},_Init:function(aArg){this.__proto__=C.Transponder;A.h7++;},_Done:
function(){this.__proto__=null;A.h7--;},_ReInit:function(){},_Mark:function(D){var
B;if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:
null,_className:"Device::Transponder"};C.RatingModeToString={B0:function(A7){var
UJ=A7;var Ng=A.jV;switch(UJ){case 0:Ng=A.aaR(A.acf.Basic);break;case 1:Ng=A.aaR(
A.acf.Extended);break;default:throw new Error(AWD+UJ.toFixed());}return Ng;},_Init:
function(aArg){C.EnumToString._Init.call(this,aArg);this.__proto__=C.RatingModeToString;
},_className:"Device::RatingModeToString"};C.TableRowsCount={_Init:function(aArg
){this.__proto__=C.TableRowsCount;A.h7++;},_Done:function(){this.__proto__=null;
A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((B=this.I)&&(B._cycle!=
D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:"Device::TableRowsCount"
};C.MassUnit={Kilogramm:0,Pound:1,LAST:2};C.MassUnitToString={B0:function(A7){var
Ba9=A7;var Apl=A.jV;switch(Ba9){case 0:Apl=A.aaR(A.acf.Bgz);break;case 1:Apl=A.aaR(
A.acf.Pound);break;default:throw new Error(AGK+Ba9.toFixed());}return Apl;},_Init:
function(aArg){C.EnumToString._Init.call(this,aArg);this.__proto__=C.MassUnitToString;
},_className:"Device::MassUnitToString"};C.MinWeightGain=20;C.MaxWeightGain=2000;
C.WeightGainStep=10;C.Int32ArrayWrapper={Mq:10,Array:A.abi(10,0,null),YU:function(
E){if(this.Mq===E)return;if(E>10)throw new Error(AGL);this.Mq=E;},Set:function(aIndex
,AJ){if((aIndex<0)||(aIndex>=this.Mq))throw new Error(AGM);this.Array.Set(aIndex
,AJ);},Get:function(aIndex){if((aIndex<0)||(aIndex>=this.Mq))throw new Error(AGM
);return this.Array.Get(aIndex);},Ame:function(){var Qa=0;var P;for(P=0;P<this.Mq;
P=P+1)Qa=Qa+this.Get(P);return Qa;},toString:function(){var A0s=this.Array.Get(0
).toFixed();var P;for(P=1;P<this.Mq;P=P+1)A0s=(A0s+OK)+this.Array.Get(P).toFixed(
);return A0s;},EJ:function(aString){var IK=aString.indexOf(String.fromCharCode(0x2C
),0);var AZf=A.jV;var P=0;while(P<10){if(aString===A.jV)this.Array.Set(P,0);else{
if(IK===-1){AZf=aString;aString=A.jV;}else{AZf=A.abV(aString,IK);aString=A.ab1(aString
,0,IK+1);}this.Array.Set(P,A.wz(AZf,0,10));IK=aString.indexOf(String.fromCharCode(
0x2C),0);}P=P+1;}if(aString!==A.jV)A.ab5("%s",AWE);},Co:function(){},G$:function(
){var P;for(P=0;P<this.Mq;P=P+1)this.Set(P,0);},Auo:function(A1){var P=0;while(P<
this.Mq){if(this.Array.Get(P)===A1)return P;P=P+1;}return-1;},Hj:function(){var P=
0;var max=-1;while(P<this.Mq){if(this.Array.Get(P)>max)max=this.Array.Get(P);P=P+
1;}return max;},_Init:function(aArg){(this.Array=[]).__proto__=C.Int32ArrayWrapper.
Array;this.__proto__=C.Int32ArrayWrapper;A.h7++;},_Done:function(){this.__proto__=
null;A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((B=this.I)&&(B._cycle
!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:"Device::Int32ArrayWrapper"
};C.ActionToString={B0:function(A7){var Ayg=A7;var EW=A.jV;switch(Ayg){case 4:EW=
A.aaR(A.acf.Alarm);break;case 256:EW=A.aaR(A.acf.Weighing);break;case 128:EW=A.aaR(
A.acf.A3X);break;case 16:EW=A.aaR(A.acf.AKr);break;case 1:EW=A.aaR(A.acf.Temperature
);break;case 32:EW=A.aaR(A.acf.AnimalLoss);break;case 2:EW=A.aaR(A.acf.Rating);break;
case 8:EW=A.aaR(A.acf.Ara);break;case 64:EW=A.aaR(A.acf.Unregister);break;case 512:
EW=A.aaR(A.acf.APY);break;case 1024:EW=A.aaR(A.acf.LinkTransponder);break;case 262144:
EW=A.aaR(A.acf.UnlinkTransponder);break;case 2048:EW=A.aaR(A.acf.O1);break;case 4096:
EW=A.aaR(A.acf.Calving);break;case 8192:EW=A.aaR(A.acf.DryOff);break;case 16384:
EW=A.aaR(A.acf.A49);break;case 32768:EW=A.aaR(A.acf.AAE);break;case 524288:EW=A.
aaR(A.acf.AAG);break;case 65536:EW=A.aaR(A.acf.Delete);break;case 131072:EW=A.aaR(
A.acf.A4_);break;case 0:EW=A.aaR(A.acf.A5v);break;default:throw new Error(Axc+Ayg.
toFixed());}return EW;},Lh:function(A7){var Ayg=A7;var EW=A.jV;switch(Ayg){case 4:
EW=A.aaR(A.acf.Alarm);break;case 256:EW=A.aaR(A.acf.Weighing);break;case 128:EW=
A.aaR(A.acf.A3X);break;case 16:EW=A.aaR(A.acf.AKr);break;case 1:EW=A.aaR(A.acf.Temperature
);break;case 32:EW=A.aaR(A.acf.AnimalLoss);break;case 2:EW=A.aaR(A.acf.Rating);break;
case 8:EW=A.aaR(A.acf.Ara);break;case 64:EW=A.aaR(A.acf.Unregister);break;case 512:
EW=A.aaR(A.acf.APY);break;case 1024:EW=A.aaR(A.acf.LinkTransponder);break;case 262144:
EW=A.aaR(A.acf.UnlinkTransponder);break;case 2048:EW=A.aaR(A.acf.O1);break;case 4096:
EW=A.aaR(A.acf.Calving);break;case 8192:EW=A.aaR(A.acf.DryOff);break;case 32768:
EW=A.aaR(A.acf.AAE);break;case 524288:EW=A.aaR(A.acf.AAG);break;case 65536:EW=A.
aaR(A.acf.Delete);break;case 16384:case 131072:EW=A.aaR(A.acf.BgH);break;case 0:
EW=A.aaR(A.acf.A5v);break;default:throw new Error(Axc+Ayg.toFixed());}return EW;
},_Init:function(aArg){C.EnumToString._Init.call(this,aArg);this.__proto__=C.ActionToString;
},_className:"Device::ActionToString"};C.ACTIONS_COUNT=19;C.PopupTimeout=2000;C.
ITable={Filter:null,Id:2,CA:function(Ac,AX){return 0;},Vo:function(Ac,AX){return A.
jV;},AjJ:function(H){A.we(this,0);A.pe([this,this.En],this);},HT:function(Ac,AX){
return false;},Hy:function(Ac,AX){return this.RW(Ac,AX);},OnSetId:function(E){if(
this.Id===E)return;this.Id=E;},Ch:function(){return 0;},Bm:function(E){if(this.Filter===
E)return;this.Filter=E;A.abo([this,this.Fw,this.FB],0);},FB:function(Ap){this.Bm(
Ap);},IU:function(Ac,AX){var Bxw=this.Vp(Ac,AX);return A._GetAutoObject(C.Converter
).A82(Bxw);},Vp:function(Ac,AX){return 0;},RW:function(Ac,AX){return 0;},A4t:function(
Ac,AX){return this.CA(Ac,AX);},Oi:function(){var Jc=0;var Bye=this.Id;return Jc;
},Ol:function(An3){var Ht=0;var Bye=this.Id;return Ht===1;},X7:function(){return-
1;},Y5:function(Ac,AX,CV){return false;},Ha:function(Ac,AX,CV){return false;},Y4:
function(Ac,AX,CV){return false;},M8:function(Ac,AX,CV){return false;},Y3:function(
Ac,AX,CV){return false;},AbK:function(Ac,AX,CV){return this.Y4(Ac,AX,CV);},Akb:function(
Ac,AX,CV){var Bxx=A._GetAutoObject(C.Converter).Adh(CV);return this.Y5(Ac,AX,Bxx
);},A8E:function(Ac,AX,CV){return this.Ha(Ac,AX,CV);},AMP:function(Ac,AX){return this.
CA(Ac,AX);},BfK:function(Ac,AX){return this.CA(Ac,AX);},Bls:function(Ac,AX,CV){return this.
Ha(Ac,AX,CV);},Blo:function(Ac,AX,CV){return this.Ha(Ac,AX,CV);},K3:function(aColumn
,A1){return-1;},Amc:function(Ac,AX){return this.CA(Ac,AX);},Blm:function(Ac,AX,CV
){return this.Ha(Ac,AX,CV);},ABs:function(Ac,AX){return this.CA(Ac,AX);},ASi:function(
Ac,AX,NZ){return this.Ha(Ac,AX,NZ);},En:function(H){this.BuH();},BuH:function(){
return-1;},LE:function(Ac,AX){return 0;},T3:function(Ac,AX,CV){return false;},Ai_:
function(aColumn,A1){return-1;},G$:function(){return false;},BfL:function(Ac,AX){
var Bxy=this.CA(Ac,AX);return A._GetAutoObject(C.Converter).Bf9(Bxy);},BfO:function(
Ac,AX){return this.CA(Ac,AX);},AMZ:function(Ac,AX){return this.CA(Ac,AX);},Blq:function(
Ac,AX,CV){var Bxz=A._GetAutoObject(C.Converter).A28(CV);return this.Ha(Ac,AX,Bxz
);},Blr:function(Ac,AX,CV){return this.Ha(Ac,AX,CV);},Bly:function(Ac,AX,CV){return this.
Ha(Ac,AX,CV);},Ai7:function(aColumn,A1){return false;},Af8:function(aColumn,A1){
return false;},BfX:function(Ac,AX){return this.CA(Ac,AX);},Blw:function(Ac,AX,CV
){return this.Ha(Ac,AX,CV);},K7:function(){return this.Qm()>=this.Hz();},Hz:function(
){return 0;},AaI:function(){return-1;},Qm:function(){return 0;},Fw:function(){return this.
Filter;},_Init:function(aArg){this.__proto__=C.ITable;A.h7++;},_Done:function(){
this.__proto__=null;A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((B=
this.Filter)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.I)&&(B._cycle!=D))B._Mark(
B._cycle=D);},I:null,_cycle:0,_observers:null,_className:"Device::ITable"};C.MaxAutoActionsCount=
4;C.WeightRecordingMode={Automatic:0,Manual:1,LAST:2};C.WeightRecordingModeToString={
B0:function(A7){var UJ=A7;var Ng=A.jV;switch(UJ){case 0:Ng=A.aaR(A.acf.Automatic
);break;case 1:Ng=A.aaR(A.acf.Manual);break;default:throw new Error(AWF+UJ.toFixed(
));}return Ng;},_Init:function(aArg){C.EnumToString._Init.call(this,aArg);this.__proto__=
C.WeightRecordingModeToString;},_className:"Device::WeightRecordingModeToString"
};C.BooleanToAutoOnOff={B0:function(A7){switch(A7){case 0:return A.aaR(A.acf.Off
);case 1:return A.aaR(A.acf.Aai);default:return Ar9+A7.toFixed();}},_Init:function(
aArg){C.EnumToString._Init.call(this,aArg);this.__proto__=C.BooleanToAutoOnOff;}
,_className:"Device::BooleanToAutoOnOff"};C.WeightStep=100;C.WeightRecordingScope={
CurrentWeightOnly:0,BirthWeightOnly:1,BirthAndCurrentWeight:2,NoWeightRecording:
3,LAST:4};C.WeightRecordingScopeToString={B0:function(A7){var Bc0=A7;var AzF=A.jV;
switch(Bc0){case 0:AzF=A.aaR(A.acf.BeL);break;case 1:AzF=A.aaR(A.acf.Bep);break;
case 2:AzF=A.aaR(A.acf.Bem);break;case 3:AzF=A.aaR(A.acf.Bha);break;default:throw new
Error(AWG+Bc0.toFixed());}return AzF;},_Init:function(aArg){C.EnumToString._Init.
call(this,aArg);this.__proto__=C.WeightRecordingScopeToString;},_className:"Device::WeightRecordingScopeToString"
};C.BodyTemperature={Undertemperature:0,Normal:1,Elevated:2,Fever:3,LAST:4};C.Jz={
Adb:0,Temperature:1,Rating:2,AeM:3,ByN:4,Bzr:5,BB_:6,Bz6:7,BAU:8,BzE:9,BAT:10,BBj:
11,LAST:12};C.AnimalListContentToString={B0:function(A7){var A$B=A7;var WS=A.jV;
switch(A$B){case 0:WS=AWH;break;case 2:WS=AWI;break;case 1:WS=AWJ;break;case 3:WS=
AWK;break;case 4:WS=AWL;break;case 5:WS=AWM;break;case 6:WS=AWN;break;case 7:WS=
AWO;break;case 8:WS=AWP;break;case 9:WS=AWQ;break;case 10:WS=AWR;break;case 11:WS=
AWS;break;default:throw new Error(AGN+A$B.toFixed());}return WS;},_Init:function(
aArg){C.EnumToString._Init.call(this,aArg);this.__proto__=C.AnimalListContentToString;
},_className:"Device::AnimalListContentToString"};C.GenderFilterCriterion={A4:0,
Adz:function(){var Ay=A._NewObject(C.GenderFilterCriterion,0);Ay.Gu(this);return Ay;
},Gu:function(AM){C.FilterCriterion.Gu.call(this,AM);var Ay=(C.GenderFilterCriterion.
isPrototypeOf(AM)?AM:null);if(!!Ay)this.A4=Ay.A4;},_Init:function(aArg){C.FilterCriterion.
_Init.call(this,aArg);this.__proto__=C.GenderFilterCriterion;},_className:"Device::GenderFilterCriterion"
};C.AnimalTypeFilterCriterion={A4:0,Adz:function(){var Ay=A._NewObject(C.AnimalTypeFilterCriterion
,0);Ay.Gu(this);return Ay;},Gu:function(AM){C.FilterCriterion.Gu.call(this,AM);var
Ay=(C.AnimalTypeFilterCriterion.isPrototypeOf(AM)?AM:null);if(!!Ay)this.A4=Ay.A4;
},Initialize:function(AX,EC,A1,SM){this.ES=AX;this.Operator=EC;this.A4=A1;this.AaZ=
SM;return this;},_Init:function(aArg){C.FilterCriterion._Init.call(this,aArg);this.
__proto__=C.AnimalTypeFilterCriterion;},_className:"Device::AnimalTypeFilterCriterion"
};C.ByZ={AiB:0,ByY:1,BAF:2,A8l:3,A3e:4,BBT:5,Bzq:6,BBS:7,LinkTransponder:8,O1:9,
Weighing:10,Calving:11,LinkNaisId:12,BBi:13,ClearBirthNoticePending:14,DeleteAnimal:
15,ScanNaisId:16,Edit:17,ClearPurchaseNoticePending:18};C.AutoRegistrationModeToString={
B0:function(A7){var UJ=A7;var Ng=A.jV;switch(UJ){case 0:Ng=A.aaR(A.acf.BeD);break;
case 1:Ng=A.aaR(A.acf.Bgb);break;case 2:Ng=A.aaR(A.acf.Off);break;default:throw new
Error(ZC+UJ.toFixed());}return Ng;},_Init:function(aArg){C.EnumToString._Init.call(
this,aArg);this.__proto__=C.AutoRegistrationModeToString;},_className:"Device::AutoRegistrationModeToString"
};C.AutoRegistrationMode={UserConfirmed:0,Background:1,Off:2,LAST:3};C.AssessmentFilterCriterion={
A4:0,Adz:function(){var Ay=A._NewObject(C.AssessmentFilterCriterion,0);Ay.Gu(this
);return Ay;},Gu:function(AM){C.FilterCriterion.Gu.call(this,AM);var Ay=(C.AssessmentFilterCriterion.
isPrototypeOf(AM)?AM:null);if(!!Ay)this.A4=Ay.A4;},Initialize:function(AX,EC,A1,
SM){this.ES=AX;this.Operator=EC;this.A4=A1;this.AaZ=SM;return this;},_Init:function(
aArg){C.FilterCriterion._Init.call(this,aArg);this.__proto__=C.AssessmentFilterCriterion;
},_className:"Device::AssessmentFilterCriterion"};C.D1={Adb:0,Temperature:1,AeM:
2,Rating:3,LAST:4};C.FactoryResetScope={DeviceAndAnimalData:0,AnimalDataOnly:1,LAST:
2};C.FactoryResetScopeToString={B0:function(A7){switch(A7){case 0:return A.aaR(A.
acf.BdY);case 1:return A.aaR(A.acf.AnimalDataOnly);default:return AWT+A7.toFixed(
);}},_Init:function(aArg){C.EnumToString._Init.call(this,aArg);this.__proto__=C.
FactoryResetScopeToString;},_className:"Device::FactoryResetScopeToString"};C.ASS={
Co:function(){A._GetAutoObject(C.Device).Aq5(this.toString());},Init:function(aArg
){var B;A.zX([this,this.Bcb],[B=A._GetAutoObject(C.Device),B.A6E,B.A_y],0);this.
Bcb(this);},Bcb:function(H){this.EJ(A._GetAutoObject(C.Device).AFf);A.we(this,0);
},_Init:function(aArg){C.Int32ArrayWrapper._Init.call(this,aArg);this.__proto__=
C.ASS;this.YU(3);this.Init(aArg);},_className:"Device::TemperaturesLowClass"};C.
ASR={Init:function(aArg){var B;A.zX([this,this.Bb$],[B=A._GetAutoObject(C.Device
),B.A6D,B.A_x],0);this.Bb$(this);},Co:function(){A._GetAutoObject(C.Device).Aq4(
this.toString());},Bb$:function(H){this.EJ(A._GetAutoObject(C.Device).AFe);A.we(
this,0);},_Init:function(aArg){C.Int32ArrayWrapper._Init.call(this,aArg);this.__proto__=
C.ASR;this.YU(3);this.Init(aArg);},_className:"Device::TemperaturesHighClass"};C.
AKK={Init:function(aArg){var B;A.zX([this,this.BbF],[B=A._GetAutoObject(C.Device
),B.A55,B.A_g],0);this.BbF(this);},BbF:function(H){this.EJ(A._GetAutoObject(C.Device
).AAe);A.we(this,0);},_Init:function(aArg){C.Int32ArrayWrapper._Init.call(this,aArg
);this.__proto__=C.AKK;this.YU(3);this.Init(aArg);},_className:"Device::AnimalTypesClass"
};C.UInt64FilterCriterion={A4:0,Adz:function(){var Ay=A._NewObject(C.UInt64FilterCriterion
,0);Ay.Gu(this);return Ay;},Gu:function(AM){C.FilterCriterion.Gu.call(this,AM);var
Ay=(C.UInt64FilterCriterion.isPrototypeOf(AM)?AM:null);if(!!Ay)this.A4=Ay.A4;},Initialize:
function(AX,EC,A1,SM){this.ES=AX;this.Operator=EC;this.A4=A1;this.AaZ=SM;return this;
},_Init:function(aArg){C.FilterCriterion._Init.call(this,aArg);this.__proto__=C.
UInt64FilterCriterion;},_className:"Device::UInt64FilterCriterion"};C.BooleanToAssignedUnassignedString={
B0:function(A7){switch(A7){case 0:return A.aaR(A.acf.AjI);case 1:return A.aaR(A.
acf.BdZ);default:return Ar9+A7.toFixed();}},_Init:function(aArg){C.EnumToString.
_Init.call(this,aArg);this.__proto__=C.BooleanToAssignedUnassignedString;},_className:
"Device::BooleanToAssignedUnassignedString"};C.C2={UNDEFINED:0,AT:1,BA:2,BE:3,By4:
4,Bzh:5,Bzi:6,Bzj:7,Bzk:8,Bzl:9,Bzv:10,Bzw:11,BzF:12,BzG:13,BzV:14,FR:15,GR:16,Bz8:
17,Bz9:18,BAi:19,BAj:20,BAo:21,BAp:22,BAq:23,BAr:24,BAx:25,BAL:26,BAM:27,BA1:28,
BA2:29,BBg:30,BBh:31,BBw:32,BBx:33,BBy:34,BBM:35,BBN:36,BB3:37,A83:38,BB4:39,LAST:
40};C.CountryToString={B0:function(A7){var N2=A7;var Fq=A.jV;switch(N2){case 1:Fq=
A.aaR(A.acm.Beb);break;case 2:Fq=A.aaR(A.acm.Beq);break;case 3:Fq=A.aaR(A.acm.Bel
);break;case 4:Fq=A.aaR(A.acm.Bes);break;case 5:Fq=A.aaR(A.acm.Beu);break;case 6:
Fq=A.aaR(A.acm.Bmf);break;case 7:Fq=A.aaR(A.acm.Bex);break;case 8:Fq=A.aaR(A.acm.
BeM);break;case 9:Fq=A.aaR(A.acm.BeN);break;case 10:Fq=A.aaR(A.acm.BfE);break;case
11:Fq=A.aaR(A.acm.BeT);break;case 12:Fq=A.aaR(A.acm.Bfj);break;case 13:Fq=A.aaR(
A.acm.BlL);break;case 14:Fq=A.aaR(A.acm.Bfs);break;case 15:Fq=A.aaR(A.acm.BfA);break;
case 16:Fq=A.aaR(A.acm.Bf5);break;case 17:Fq=A.aaR(A.acm.BeK);break;case 18:Fq=A.
aaR(A.acm.Bf_);break;case 19:Fq=A.aaR(A.acm.Bgi);break;case 20:Fq=A.aaR(A.acm.Bgu
);break;case 21:Fq=A.aaR(A.acm.Bgw);break;case 22:Fq=A.aaR(A.acm.BgI);break;case
23:Fq=A.aaR(A.acm.BgM);break;case 24:Fq=A.aaR(A.acm.BgF);break;case 25:Fq=A.acm.
BgO;break;case 26:Fq=A.aaR(A.acm.Bg6);break;case 27:Fq=A.aaR(A.acm.Bhb);break;case
28:Fq=A.aaR(A.acm.BkN);break;case 29:Fq=A.aaR(A.acm.BkO);break;case 30:Fq=A.aaR(
A.acm.Blb);break;case 31:Fq=A.aaR(A.acm.Bld);break;case 32:Fq=A.aaR(A.acm.Bme);break;
case 33:Fq=A.aaR(A.acm.BlK);break;case 34:Fq=A.aaR(A.acm.BlJ);break;case 35:Fq=A.
aaR(A.acm.BmE);break;case 36:Fq=A.aaR(A.acm.Bmo);break;case 37:Fq=A.aaR(A.acm.BmI
);break;case 38:Fq=A.aaR(A.acm.A83);break;case 39:Fq=A.aaR(A.acm.BmH);break;case
0:Fq=Ahh;break;default:throw new Error(AwN+N2.toFixed());}return Fq;},Lh:function(
A7){var N2=A7;var BJ=A.jV;switch(N2){case 1:BJ=SF;break;case 2:BJ=Zn;break;case 3:
BJ=Uk;break;case 4:BJ=Wr;break;case 5:BJ=IJ;break;case 6:BJ=WA;break;case 7:BJ=Ul;
break;case 8:BJ=Zp;break;case 9:BJ=Um;break;case 10:BJ=QZ;break;case 11:BJ=Zq;break;
case 12:BJ=Zr;break;case 13:BJ=Zy;break;case 14:BJ=Un;break;case 15:BJ=Wt;break;
case 16:BJ=Zs;break;case 17:BJ=Ws;break;case 18:BJ=OJ;break;case 19:BJ=PQ;break;
case 20:BJ=Wu;break;case 21:BJ=Wv;break;case 22:BJ=Zt;break;case 23:BJ=Zu;break;
case 24:BJ=Ww;break;case 25:BJ=Wx;break;case 26:BJ=Wy;break;case 27:BJ=SG;break;
case 28:BJ=Zv;break;case 29:BJ=Zw;break;case 30:BJ=Ab7;break;case 31:BJ=Uo;break;
case 32:BJ=Wz;break;case 33:BJ=AeS;break;case 34:BJ=Zx;break;case 35:BJ=Zz;break;
case 36:BJ=Zo;break;case 37:BJ=AeT;break;case 38:BJ=JN;break;case 39:BJ=AeU;break;
case 0:BJ=Ahh;break;default:throw new Error(AwN+N2.toFixed());}return BJ;},_Init:
function(aArg){C.EnumToString._Init.call(this,aArg);this.__proto__=C.CountryToString;
},_className:"Device::CountryToString"};C.EaseOfDelivery={Unspecified:0,Easy:1,Moderate:
2,Difficult:3,Surgery:4,LAST:5};C.EaseOfDeliveryToString={B0:function(A7){var A$_=
A7;var AsF=A.jV;switch(A$_){case 0:AsF=A.aaR(A.acf.Unspecified);break;case 1:AsF=
A.aaR(A.acf.Easy);break;case 2:AsF=A.aaR(A.acf.Moderate);break;case 3:AsF=A.aaR(
A.acf.Difficult);break;case 4:AsF=A.aaR(A.acf.Surgery);break;default:throw new Error(
AWU+A$_.toFixed());}return AsF;},_Init:function(aArg){C.EnumToString._Init.call(
this,aArg);this.__proto__=C.EaseOfDeliveryToString;},_className:"Device::EaseOfDeliveryToString"
};C.WhereAbouts={UNB:0,EZU:1,EMA:2,VZU:3,VMA:4,VIV:5,TOT:6,V48:7,V3T:8,MGE:9,VKB:
10,LAST:11};C.WhereAboutsToString={B0:function(A7){var BdO=A7;var Z9=A.jV;switch(
BdO){case 0:Z9=A.aaR(A.acf.Unknown);break;case 1:Z9=A.aaR(A.acf.BmQ);break;case 2:
Z9=A.aaR(A.acf.BmP);break;case 3:Z9=A.aaR(A.acf.BmY);break;case 4:Z9=A.aaR(A.acf.
BmX);break;case 5:Z9=A.aaR(A.acf.BmV);break;case 6:Z9=A.aaR(A.acf.BmS);break;case
7:Z9=A.aaR(A.acf.BmU);break;case 8:Z9=A.aaR(A.acf.BmT);break;case 9:Z9=A.aaR(A.acf.
BmR);break;case 10:Z9=A.aaR(A.acf.BmW);break;default:throw new Error(AWV+BdO.toFixed(
));}return Z9;},_Init:function(aArg){C.EnumToString._Init.call(this,aArg);this.__proto__=
C.WhereAboutsToString;},_className:"Device::WhereAboutsToString"};C.Breed={UNKNOWN:
0,SBT:1,RBT:2,JER:3,BV:4,RVA:5,RV:6,RDN:7,DSN:8,FL:9,GV:10,PIN:11,HIN:12,MW:13,VW:
14,LMP:15,DBV:16,AS:17,VR:18,CHA:19,LIM:20,WBB:21,BA:22,MA:23,SAL:24,MON:25,AU:26
,PIE:27,CHI:28,ROM:29,MAR:30,WP:31,BB:32,DA:33,AA:34,HE:35,SH:36,HLD:37,WB:38,GAL:
39,LR:40,BGA:41,LG:42,BRA:43,NOR:44,UST:45,ZEB:46,GRV:47,DEX:48,WGA:49,LH:50,SD:
51,FR:52,TUX:53,TLM:54,FLF:55,UCK:56,BLA:57,WIT:58,LAK:59,RHV:60,AT:61,GR:62,PIF:
63,PS:64,GVF:65,BVF:66,RBF:67,HWF:68,MWF:69,VWF:70,LPF:71,BRN:72,BAZ:73,AO:74,BE:
75,WL:76,BIS:77,YAK:78,SON:79,TAU:80,IND:81,TIN:82,WAG:83,XFF:84,XFM:85,XMM:86,EVO:
87,BLH:88,TLH:89,MGR:90,WSH:91,MUR:92,EBS:93,ERI:94,PAR:95,XZF:96,XZM:97,XZZ:98,
LAST:99};C.BreedToString={B0:function(A7){var Bu=A7;var BG=A.jV;switch(Bu){case 0:
BG=A.aaR(A.acf.Unknown);break;case 1:BG=A.aaR(A.ack.SBT);break;case 2:BG=A.aaR(A.
ack.RBT);break;case 3:BG=A.aaR(A.ack.JER);break;case 4:BG=A.aaR(A.ack.BV);break;
case 5:BG=A.aaR(A.ack.RVA);break;case 6:BG=A.aaR(A.ack.RV);break;case 7:BG=A.aaR(
A.ack.RDN);break;case 8:BG=A.aaR(A.ack.DSN);break;case 9:BG=A.aaR(A.ack.FL);break;
case 10:BG=A.aaR(A.ack.GV);break;case 11:BG=A.aaR(A.ack.PIN);break;case 12:BG=A.
aaR(A.ack.HIN);break;case 13:BG=A.aaR(A.ack.MW);break;case 14:BG=A.aaR(A.ack.VW);
break;case 15:BG=A.aaR(A.ack.LMP);break;case 16:BG=A.aaR(A.ack.DBV);break;case 17:
BG=A.aaR(A.ack.AS);break;case 18:BG=A.aaR(A.ack.VR);break;case 19:BG=A.aaR(A.ack.
CHA);break;case 20:BG=A.aaR(A.ack.LIM);break;case 21:BG=A.aaR(A.ack.WBB);break;case
22:BG=A.aaR(A.ack.BA);break;case 23:BG=A.aaR(A.ack.MA);break;case 24:BG=A.aaR(A.
ack.SAL);break;case 25:BG=A.aaR(A.ack.MON);break;case 26:BG=A.aaR(A.ack.AU);break;
case 27:BG=A.aaR(A.ack.PIE);break;case 28:BG=A.aaR(A.ack.CHI);break;case 29:BG=A.
aaR(A.ack.ROM);break;case 30:BG=A.aaR(A.ack.MAR);break;case 31:BG=A.aaR(A.ack.WP
);break;case 32:BG=A.aaR(A.ack.BB);break;case 33:BG=A.aaR(A.ack.DA);break;case 34:
BG=A.aaR(A.ack.AA);break;case 35:BG=A.aaR(A.ack.HE);break;case 36:BG=A.aaR(A.ack.
SH);break;case 37:BG=A.aaR(A.ack.HLD);break;case 38:BG=A.aaR(A.ack.WB);break;case
39:BG=A.aaR(A.ack.GAL);break;case 40:BG=A.aaR(A.ack.LR);break;case 41:BG=A.aaR(A.
ack.BGA);break;case 42:BG=A.aaR(A.ack.LG);break;case 43:BG=A.aaR(A.ack.BRA);break;
case 44:BG=A.aaR(A.ack.NOR);break;case 45:BG=A.aaR(A.ack.UST);break;case 46:BG=A.
aaR(A.ack.ZEB);break;case 47:BG=A.aaR(A.ack.GRV);break;case 48:BG=A.aaR(A.ack.DEX
);break;case 49:BG=A.aaR(A.ack.WGA);break;case 50:BG=A.aaR(A.ack.LH);break;case 51:
BG=A.aaR(A.ack.SD);break;case 52:BG=A.aaR(A.ack.FR);break;case 53:BG=A.aaR(A.ack.
TUX);break;case 54:BG=A.aaR(A.ack.TLM);break;case 55:BG=A.aaR(A.ack.FLF);break;case
56:BG=A.aaR(A.ack.UCK);break;case 57:BG=A.aaR(A.ack.BLA);break;case 58:BG=A.aaR(
A.ack.WIT);break;case 59:BG=A.aaR(A.ack.LAK);break;case 60:BG=A.aaR(A.ack.RHV);break;
case 61:BG=A.aaR(A.ack.AT);break;case 62:BG=A.aaR(A.ack.GR);break;case 63:BG=A.aaR(
A.ack.PIF);break;case 64:BG=A.aaR(A.ack.PS);break;case 65:BG=A.aaR(A.ack.GVF);break;
case 66:BG=A.aaR(A.ack.BVF);break;case 67:BG=A.aaR(A.ack.RBF);break;case 68:BG=A.
aaR(A.ack.HWF);break;case 69:BG=A.aaR(A.ack.MWF);break;case 70:BG=A.aaR(A.ack.VWF
);break;case 71:BG=A.aaR(A.ack.LPF);break;case 72:BG=A.aaR(A.ack.BRN);break;case
73:BG=A.aaR(A.ack.BAZ);break;case 74:BG=A.aaR(A.ack.AO);break;case 75:BG=A.aaR(A.
ack.BE);break;case 76:BG=A.aaR(A.ack.WL);break;case 77:BG=A.aaR(A.ack.BIS);break;
case 78:BG=A.aaR(A.ack.YAK);break;case 79:BG=A.aaR(A.ack.SON);break;case 80:BG=A.
aaR(A.ack.TAU);break;case 81:BG=A.aaR(A.ack.IND);break;case 82:BG=A.aaR(A.ack.TIN
);break;case 83:BG=A.aaR(A.ack.WAG);break;case 84:BG=A.aaR(A.ack.XFF);break;case
85:BG=A.aaR(A.ack.XFM);break;case 86:BG=A.aaR(A.ack.XMM);break;case 87:BG=A.aaR(
A.ack.EVO);break;case 88:BG=A.ack.BLH;break;case 89:BG=A.ack.TLH;break;case 90:BG=
A.ack.MGR;break;case 91:BG=A.ack.WSH;break;case 92:BG=A.ack.MUR;break;case 93:BG=
A.aaR(A.ack.EBS);break;case 94:BG=A.aaR(A.ack.ERI);break;case 95:BG=A.ack.PAR;break;
case 96:BG=A.aaR(A.ack.XZF);break;case 97:BG=A.aaR(A.ack.XZM);break;case 98:BG=A.
aaR(A.ack.XZZ);break;default:throw new Error(AWW+Bu.toFixed());}return BG;},_Init:
function(aArg){C.EnumToString._Init.call(this,aArg);this.__proto__=C.BreedToString;
},_className:"Device::BreedToString"};C.U6={timer:null,R:null,D5:0,Dl:0,Mi:0,O$:
1000,Pi:1000,Bw:false,Ct:false,B1:true,L5:function(H){var F;if(!this.timer)return;
if(this.D5<0){this.Dl=this.timer.Bt;this.D5=0;}var As=(this.timer.Bt-this.Dl)|0;
var Oa=this.O$;var G2=this.Pi+this.O$;var Lr=0;var Jq=this.D5;if(!Jq&&(As>=Oa)){
Jq=1;As=As-Oa;}if((Jq>0)&&(As>=G2)){var H6=(As/G2)|0;As=As-(H6*G2);Jq=Jq+H6;}if((
Jq>2)&&!this.Mi)Jq=1;if(Jq!==this.D5){this.Dl=this.timer.Bt-(((B=As)<0)?B+0x100000000:
B);this.D5=Jq;}if(Jq>0)Lr=this.Pi;var MC=(Jq>=this.Mi)&&(this.Mi>0);if(!!this.R){
if((!MC&&(As>=Lr))&&((F=this.R,F[1].call(F[0]))!==this.Ct))(F=this.R,F[2].call(F[
0],this.Ct));if((MC||((As<Lr)&&(Jq>0)))&&((F=this.R,F[1].call(F[0]))!==this.B1))(
F=this.R,F[2].call(F[0],this.B1));}if(MC)this.Ar(false);},ID:function(E){if(E<0)
E=0;this.Mi=E;},Fy:function(E){if(E<100)E=100;this.O$=E;},V5:function(E){if(E<0)
E=0;this.Pi=E;},Ar:function(E){if(this.Bw===E)return;this.Bw=E;if(!E&&!!this.timer
){A.z9([this,this.L5],this.timer,0);this.timer=null;}if(E){this.timer=A._GetAutoObject(
A.acl.AdA);A.zV([this,this.L5],this.timer,0);this.D5=-1;}},_Init:function(aArg){
this.__proto__=C.U6;A.h7++;},_Done:function(){this.__proto__=null;A.h7--;},_ReInit:
function(){},_Mark:function(D){var B;if((B=this.timer)&&(B._cycle!=D))B._Mark(B.
_cycle=D);if((B=this.R)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.I)&&(
B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:"Device::BoolEffect"
};C.H9={AnimalId:0,TransponderId:1,BAA:2,BAz:3,BAD:4,BAC:5};C.AtZ={By2:0,Bzy:1};
C.AnimalIdGenerationMethodToString={B0:function(A7){var AkK=A7;var An$=A.jV;switch(
AkK){case 0:An$=A.aaR(A.acf.YH);break;case 1:An$=A.aaR(A.acf.Transponder);break;
case 3:An$=(A.aaR(A.acf.Manual)+NW)+A.aaR(A.acf.Male);break;case 2:An$=(A.aaR(A.
acf.Manual)+NW)+A.aaR(A.acf.Female);break;case 4:An$=(A.aaR(A.acf.Manual)+NW)+A.
aaR(A.acf.Unknown);break;case 5:An$=(A.aaR(A.acf.Manual)+NW)+AWX;break;default:throw new
Error(AWY+AkK.toFixed());}return An$;},_Init:function(aArg){C.EnumToString._Init.
call(this,aArg);this.__proto__=C.AnimalIdGenerationMethodToString;},_className:"Device::AnimalIdGenerationMethodToString"
};C.DirectionOfCountingToString={B0:function(A7){var Ayf=A7;var AZm=A.jV;switch(
Ayf){case 0:AZm=AWZ;break;case 1:AZm=Asc;break;default:throw new Error(Asd+Ayf.toFixed(
));}return AZm;},_Init:function(aArg){C.EnumToString._Init.call(this,aArg);this.
__proto__=C.DirectionOfCountingToString;},_className:"Device::DirectionOfCountingToString"
};C.EnumToIcon={ArL:function(A7){throw new Error(Ar1+A7.toFixed());},ArM:function(
A7){throw new Error(Ar1+A7.toFixed());},_Init:function(aArg){this.__proto__=C.EnumToIcon;
A.h7++;},_Done:function(){this.__proto__=null;A.h7--;},_ReInit:function(){},_Mark:
function(D){var B;if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:
0,_observers:null,_className:"Device::EnumToIcon"};C.Ady={ArL:function(A7){return A.
aaL(A.ach.ASF);},ArM:function(A7){var Ayf=A7;var Rg=-1;switch(Ayf){case 0:Rg=3;break;
case 1:Rg=2;break;default:throw new Error(AnL+Ayf.toFixed());}return Rg;},_Init:
function(aArg){C.EnumToIcon._Init.call(this,aArg);this.__proto__=C.Ady;},_className:
"Device::DirectionOfCountingToIcon"};C.Adf={ArL:function(A7){return A.aaL(A.ach.
ASD);},ArM:function(A7){var AkK=A7;var Rg=-1;switch(AkK){case 0:Rg=0;break;case 1:
Rg=6;break;case 3:Rg=4;break;case 2:Rg=5;break;case 4:Rg=2;break;case 5:Rg=3;break;
default:throw new Error(AnL+AkK.toFixed());}return Rg;},_Init:function(aArg){C.EnumToIcon.
_Init.call(this,aArg);this.__proto__=C.Adf;},_className:"Device::AnimalIdGenerationMethodToIcon"
};C.Pe={UNDEFINED:0,SH:1,AM2:2,API:3,AM1:4,A5p:5,HE:6,A8j:7,A2L:8,AKV:9,AR_:10,BE:
11,BB:12,A5d:13,AR$:14,ASa:15,ASK:16};C.GermanStateToString={B0:function(A7){var
Bl=A7;var Go=A.jV;switch(Bl){case 1:Go=A.aaR(A.aco.SH);break;case 2:Go=A.aaR(A.aco.
AM2);break;case 3:Go=A.aaR(A.aco.API);break;case 4:Go=A.aaR(A.aco.AM1);break;case
5:Go=A.aaR(A.aco.A5p);break;case 6:Go=A.aaR(A.aco.HE);break;case 7:Go=A.aaR(A.aco.
A8j);break;case 8:Go=A.aaR(A.aco.A2L);break;case 9:Go=A.aaR(A.aco.AKV);break;case
10:Go=A.aaR(A.aco.AR_);break;case 11:Go=A.aaR(A.aco.BE);break;case 12:Go=A.aaR(A.
aco.BB);break;case 13:Go=A.aaR(A.aco.A5d);break;case 14:Go=A.aaR(A.aco.AR$);break;
case 15:Go=A.aaR(A.aco.ASa);break;case 16:Go=A.aaR(A.aco.ASK);break;case 0:Go=Ahh;
break;default:throw new Error(Ahi+Bl.toFixed());}return Go;},Lh:function(A7){var
Bl=A7;var Go=A.jV;switch(Bl){case 1:Go=A.aaR(A.aco.Ble);break;case 2:Go=A.aaR(A.
aco.AM2);break;case 3:Go=A.aaR(A.aco.API);break;case 4:Go=A.aaR(A.aco.AM1);break;
case 5:Go=A.aaR(A.aco.Bg3);break;case 6:Go=A.aaR(A.aco.HE);break;case 7:Go=A.aaR(
A.aco.BkX);break;case 8:Go=A.aaR(A.aco.Bee);break;case 9:Go=A.aaR(A.aco.AKV);break;
case 10:Go=A.aaR(A.aco.AR_);break;case 11:Go=A.aaR(A.aco.BE);break;case 12:Go=A.
aaR(A.aco.BB);break;case 13:Go=A.aaR(A.aco.BgN);break;case 14:Go=A.aaR(A.aco.AR$
);break;case 15:Go=A.aaR(A.aco.ASa);break;case 16:Go=A.aaR(A.aco.ASK);break;case
0:Go=Ahh;break;default:throw new Error(Ahi+Bl.toFixed());}return Go;},Bmt:function(
A7){var Bl=A7;var FT=-1;switch(Bl){case 0:FT=0;break;case 1:FT=1;break;case 2:FT=
2;break;case 3:FT=3;break;case 4:FT=4;break;case 5:FT=5;break;case 6:FT=6;break;
case 7:FT=7;break;case 8:FT=8;break;case 9:FT=9;break;case 10:FT=10;break;case 11:
FT=11;break;case 12:FT=12;break;case 13:FT=13;break;case 14:FT=14;break;case 15:
FT=15;break;case 16:FT=16;break;default:throw new Error(Ahi+Bl.toFixed());}return FT;
},Bmu:function(A7){var Bl=A7;var FT=A.jV;switch(Bl){case 1:FT=Axd;break;case 2:FT=
AnM;break;case 3:FT=AW0;break;case 4:FT=AW1;break;case 5:FT=AW2;break;case 6:FT=
AW3;break;case 7:FT=AW4;break;case 8:FT=AW5;break;case 9:FT=AW6;break;case 10:FT=
AW7;break;case 11:FT=Uk;break;case 12:FT=AW8;break;case 13:FT=AW9;break;case 14:
FT=AW_;break;case 15:FT=AW$;break;case 16:FT=AXa;break;case 0:FT=Ahh;break;default:
throw new Error(Ahi+Bl.toFixed());}return FT;},_Init:function(aArg){C.EnumToString.
_Init.call(this,aArg);this.__proto__=C.GermanStateToString;},_className:"Device::GermanStateToString"
};C.EartagNrAssignmentMode={OneSingleRange:0,TwoNumberRanges:1,LAST:2};C.EartagNrAssignmentModeToString={
Lh:function(A7){var UJ=A7;var Ng=A.jV;switch(UJ){case 0:Ng=AXb;break;case 1:Ng=Axe;
break;default:throw new Error(AGO+UJ.toFixed());}return Ng;},B0:function(A7){var
UJ=A7;var Ng=A.jV;switch(UJ){case 0:Ng=A.aaR(A.acf.BkG);break;case 1:Ng=A.aaR(A.
acf.BmG);break;default:throw new Error(AGO+UJ.toFixed());}return Ng;},_Init:function(
aArg){C.EnumToString._Init.call(this,aArg);this.__proto__=C.EartagNrAssignmentModeToString;
},_className:"Device::EartagNrAssignmentModeToString"};C.ByW={BAR:0,BAH:1,BzP:2,
BzQ:3,BzR:4,BBO:5};C.EnumToCodeset={AlY:function(Ahl){throw new Error(Axf+Ahl.toFixed(
));},AdC:function(A7){throw new Error(Ar1+A7.toFixed());},ApX:function(){A.ab5("%s"
,Ase);return 0;},Hj:function(){A.ab5("%s",Ase);return 0;},_Init:function(aArg){this.
__proto__=C.EnumToCodeset;A.h7++;},_Done:function(){this.__proto__=null;A.h7--;}
,_ReInit:function(){},_Mark:function(D){var B;if((B=this.I)&&(B._cycle!=D))B._Mark(
B._cycle=D);},I:null,_cycle:0,_observers:null,_className:"Device::EnumToCodeset"
};C.MN={AlY:function(Ahl){var Bu;switch(Ahl){case 1:Bu=1;break;case 2:Bu=2;break;
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
Bu=0;}return Bu;},AdC:function(A7){var Bu=A7;var BI=0;switch(Bu){case 0:BI=0;break;
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
case 98:BI=111;break;default:throw new Error(AXc+Bu.toFixed());}return BI;},ApX:
function(){return 0;},Hj:function(){return 111;},_Init:function(aArg){C.EnumToCodeset.
_Init.call(this,aArg);this.__proto__=C.MN;},_className:"Device::BreedToHitCodeset"
};C.ReasonOfLeaving={Unknown:0,A8Q:1,S9:2,A8d:3,A4Q:4,BA0:5,A84:6,A5l:7,A3d:8,A7$:
9,A5j:10,A3h:11,BBe:12,BBf:13,LAST:14};C.ReasonOfLeavingToString={B0:function(A7
){var AcW=A7;var S1=A.jV;switch(AcW){case 0:S1=A.aaR(A.acf.Unknown);break;case 1:
S1=A.aaR(A.acf.A8Q);break;case 2:S1=A.aaR(A.acf.S9);break;case 3:S1=A.aaR(A.acf.
A8d);break;case 4:S1=A.aaR(A.acf.A4Q);break;case 5:S1=A.aaR(A.acf.BkH);break;case
6:S1=A.aaR(A.acf.A84);break;case 7:S1=A.aaR(A.acf.A5l);break;case 8:S1=A.aaR(A.acf.
A3d);break;case 9:S1=A.aaR(A.acf.A7$);break;case 10:S1=A.aaR(A.acf.A5j);break;case
11:S1=A.aaR(A.acf.A3h);break;case 12:S1=A.aaR(A.acf.BkR);break;case 13:S1=A.aaR(
A.acf.BkQ);break;default:throw new Error(AXd+AcW.toFixed());}return S1;},_Init:function(
aArg){C.EnumToString._Init.call(this,aArg);this.__proto__=C.ReasonOfLeavingToString;
},_className:"Device::ReasonOfLeavingToString"};C.AgT={AlY:function(Ahl){var OW;
switch(Ahl){case 1:OW=1;break;case 2:OW=2;break;case 3:OW=3;break;case 4:OW=4;break;
case 5:OW=5;break;case 6:OW=6;break;case 7:OW=7;break;case 8:OW=8;break;case 9:OW=
9;break;case 10:OW=10;break;case 11:OW=11;break;case 12:OW=12;break;case 13:OW=13;
break;default:OW=0;}return OW;},AdC:function(A7){var OW=A7;var I9=0;switch(OW){case
0:I9=0;break;case 2:I9=2;break;case 8:I9=8;break;case 11:I9=11;break;case 4:I9=4;
break;case 10:I9=10;break;case 7:I9=7;break;case 5:I9=5;break;case 9:I9=9;break;
case 3:I9=3;break;case 12:I9=12;break;case 13:I9=13;break;case 1:I9=1;break;case
6:I9=6;break;default:throw new Error(AGP+OW.toFixed());}return I9;},ApX:function(
){return 0;},Hj:function(){return 13;},_Init:function(aArg){C.EnumToCodeset._Init.
call(this,aArg);this.__proto__=C.AgT;},_className:"Device::ReasonOfLeavingToCodeset"
};C.KK={AlY:function(Ahl){var KX;switch(Ahl){case 1:KX=1;break;case 2:KX=2;break;
case 3:KX=3;break;case 4:KX=4;break;case 5:KX=5;break;case 6:KX=6;break;case 7:KX=
7;break;case 8:KX=8;break;case 9:KX=9;break;case 10:KX=10;break;default:KX=0;}return KX;
},AdC:function(A7){var KX=A7;var I9=0;switch(KX){case 0:I9=0;break;case 2:I9=2;break;
case 1:I9=1;break;case 9:I9=9;break;case 6:I9=6;break;case 8:I9=8;break;case 7:I9=
7;break;case 5:I9=5;break;case 10:I9=10;break;case 4:I9=4;break;case 3:I9=3;break;
default:throw new Error(AGP+KX.toFixed());}return I9;},ApX:function(){return 0;}
,Hj:function(){return 10;},_Init:function(aArg){C.EnumToCodeset._Init.call(this,
aArg);this.__proto__=C.KK;},_className:"Device::WhereAboutsToCodeset"};C.Al5={_Init:
function(aArg){this.__proto__=C.Al5;A.h7++;},_Done:function(){this.__proto__=null;
A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((B=this.I)&&(B._cycle!=
D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:"Device::EmptyClass"
};C.CalfDeregistrationsTableFields={Year:0,Deregistrations:1,Deaths:2};C.CalfDeregistrations={
Deregistrations:0,Deaths:0,Year:0,EJ:function(Ac,AG){var Ht=C.Row.EJ.call(this,Ac
,AG);if(Ht&&!!AG){this.Aj2(AG.CA(Ac,0));this.Avr(AG.CA(Ac,1));this.Avq(AG.CA(Ac,
2));}return Ht;},Co:function(AG){var Ht=C.Row.Co.call(this,AG);if(Ht&&!!AG){var Jc=
AG.Oi();if(Jc<=0)A.ab5("%s",Ab9);else{if(this.Amo())this.CE=AG.X7();AG.Ha(this.CE
,0,this.Year);AG.Ha(this.CE,1,this.Deregistrations);AG.Ha(this.CE,2,this.Deaths);
AG.Ol(Jc);}}return Ht;},F$:function(){C.Row.F$.call(this);this.Aj2(-1);},G$:function(
){C.Row.G$.call(this);this.Aj2(0);this.Avr(0);this.Avq(0);},Avr:function(E){if(this.
Deregistrations===E)return;this.Deregistrations=E;A.abo([this,this.BhD,this.Avr]
,0);},Avq:function(E){if(this.Deaths===E)return;this.Deaths=E;A.abo([this,this.BhB
,this.Avq],0);},Aj2:function(E){if(this.Year===E)return;this.Year=E;A.abo([this,
this.AqC,this.Aj2],0);},BhD:function(){return this.Deregistrations;},BhB:function(
){return this.Deaths;},AqC:function(){return this.Year;},_Init:function(aArg){C.
Row._Init.call(this,aArg);this.__proto__=C.CalfDeregistrations;this.TableId=4;},
_className:"Device::CalfDeregistrations"};C.AtX={Undefined:0,Display:1,A8i:2,A8u:
3,A9i:4,Bz_:5,BBo:6,BBZ:7,BAy:8,Bzm:9,ByL:10,A4f:11,A8k:12,BB6:13,A5o:14,BB9:15};
C.DeviceComponentToString={B0:function(A7){var A$4=A7;var P0=A.jV;switch(A$4){case
0:P0=AGQ;break;case 10:P0=A.aaR(A.acf.BdP);break;case 9:P0=A.aaR(A.acf.Bew);break;
case 1:P0=A.aaR(A.acf.Be$);break;case 11:P0=A.aaR(A.acf.A4f);break;case 5:P0=A.aaR(
A.acf.BmZ);break;case 8:P0=A.aaR(A.acf.Bfb);break;case 14:P0=A.aaR(A.acf.A5o);break;
case 2:P0=A.aaR(A.acf.A8i);break;case 12:P0=A.aaR(A.acf.A8k);break;case 6:P0=A.aaR(
A.acf.BkW);break;case 3:P0=A.aaR(A.acf.A8u);break;case 7:P0=A.aaR(A.acf.Bfc);break;
case 13:P0=A.aaR(A.acf.BeV);break;case 15:P0=A.aaR(A.acf.Bm3);break;case 4:P0=A.
aaR(A.acf.A9i);break;default:throw new Error(AXe+A$4.toFixed());}return P0;},_Init:
function(aArg){C.EnumToString._Init.call(this,aArg);this.__proto__=C.DeviceComponentToString;
},_className:"Device::DeviceComponentToString"};C.Af4={AlY:function(Ahl){return Ahl;
},AdC:function(A7){return A7;},ApX:function(){return 0;},Hj:function(){return 4;
},_Init:function(aArg){C.EnumToCodeset._Init.call(this,aArg);this.__proto__=C.Af4;
},_className:"Device::EaseOfDeliveryToCodeset"};C.Ad8={ArL:function(A7){return A.
aaL(A.ach.AN9);},ArM:function(A7){var Bac=A7;var Rg=-1;switch(Bac){case 0:Rg=0;break;
case 1:Rg=1;break;case 2:Rg=2;break;default:throw new Error(AXf+Bac.toFixed());}
return Rg;},_Init:function(aArg){C.EnumToIcon._Init.call(this,aArg);this.__proto__=
C.Ad8;},_className:"Device::MotherSelectionFilterModeToIcon"};C.WhereAboutsFilterCriterion={
A4:0,Adz:function(){var Ay=A._NewObject(C.WhereAboutsFilterCriterion,0);Ay.Gu(this
);return Ay;},Gu:function(AM){C.FilterCriterion.Gu.call(this,AM);var Ay=(C.WhereAboutsFilterCriterion.
isPrototypeOf(AM)?AM:null);if(!!Ay)this.A4=Ay.A4;},Initialize:function(AX,EC,A1,
SM){this.ES=AX;this.Operator=EC;this.A4=A1;this.AaZ=SM;return this;},_Init:function(
aArg){C.FilterCriterion._Init.call(this,aArg);this.__proto__=C.WhereAboutsFilterCriterion;
},_className:"Device::WhereAboutsFilterCriterion"};C.BAK={ALZ:0,Bzt:1,ANL:2,LAST:
3};C.BBQ={Gv:0,ATl:1,G7:2,Year:3,LAST:4};C.TimespanDaysToString={B0:function(A7){
var Bdp=A7;var AzT=A.jV;switch(Bdp){case 0:AzT=A.aaR(A.acf.A3w);break;case 1:AzT=
A.aaR(A.acf.ATl);break;case 2:AzT=A.aaR(A.acf.G7);break;case 3:AzT=A.aaR(A.acf.Year
);break;default:throw new Error(AXg+Bdp.toFixed());}return AzT;},_Init:function(
aArg){C.EnumToString._Init.call(this,aArg);this.__proto__=C.TimespanDaysToString;
},_className:"Device::TimespanDaysToString"};C.Akq={BAW:0,Bzz:1,BAe:2,BAh:3,BAg:
4,BzA:5,BAf:6,LAST:7};C.USBStateToString={B0:function(A7){var BdJ=A7;var Bl=A.jV;
switch(BdJ){case 0:Bl=AXh;break;case 2:Bl=AXi;break;case 1:Bl=AXj;break;case 5:Bl=
AXk;break;case 3:Bl=AXl;break;case 4:Bl=AGR;break;case 6:Bl=AXm;break;default:throw new
Error(AGf+BdJ.toFixed());}return Bl;},_Init:function(aArg){C.EnumToString._Init.
call(this,aArg);this.__proto__=C.USBStateToString;},_className:"Device::USBStateToString"
};C.AAW={BAc:0,ByX:1,BAd:2,BAa:3};C.Awj={AAR:A.jV,Timestamp:0,ACw:0,ACD:0,AEL:0,
OnSetTimestamp:function(E){if(this.Timestamp===E)return;this.Timestamp=E;},ADI:function(
E){if(this.ACw===E)return;this.ACw=E;},ADP:function(E){if(this.ACD===E)return;this.
ACD=E;},AD1:function(E){if(this.AEL===E)return;this.AEL=E;},ADm:function(E){if(this.
AAR===E)return;this.AAR=E;},_Init:function(aArg){this.__proto__=C.Awj;A.h7++;},_Done:
function(){this.__proto__=null;A.h7--;},_ReInit:function(){},_Mark:function(D){var
B;if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:
null,_className:"Device::SoftwareVersionInformation"};C.Auq={Timestamp:0,APw:0,APx:
0,AS2:0,AS3:0,AS1:0,APv:0,OnSetTimestamp:function(E){if(this.Timestamp===E)return;
this.Timestamp=E;},ADF:function(E){if(this.APw===E)return;this.APw=E;},ADG:function(
E){if(this.APx===E)return;this.APx=E;},AEc:function(E){if(this.AS2===E)return;this.
AS2=E;},AEd:function(E){if(this.AS3===E)return;this.AS3=E;},AEb:function(E){if(this.
AS1===E)return;this.AS1=E;},ADE:function(E){if(this.APv===E)return;this.APv=E;},
_Init:function(aArg){this.__proto__=C.Auq;A.h7++;},_Done:function(){this.__proto__=
null;A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((B=this.I)&&(B._cycle
!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:"Device::HardwareVersionInformation"
};C.ApA={Undefined:0,Bz0:1,By_:2};C.AfM={Manual:0,TransponderId:1,LAST:2};C.AnimalIdAutoGenerationMethodToString={
B0:function(A7){var A$z=A7;var AYR=A.jV;switch(A$z){case 0:AYR=A.aaR(A.acf.A3m);
break;case 1:AYR=A.aaR(A.acf.A3C);break;default:throw new Error(AXn+A$z.toFixed(
));}return AYR;},_Init:function(aArg){C.EnumToString._Init.call(this,aArg);this.
__proto__=C.AnimalIdAutoGenerationMethodToString;},_className:"Device::AnimalIdAutoGenerationMethodToString"
};C.G7={A26:0,ACl:1,ABd:2,ACx:3,AAg:4,ACA:5,ACn:6,ACm:7,AAo:8,AES:9,ACN:10,ACL:11
,AAZ:12,LAST:13};C.MonthToString={B0:function(A7){var Bbc=A7;var W6=A.jV;switch(
Bbc){case 1:W6=A.aaR(A.acs.ACl);break;case 2:W6=A.aaR(A.acs.ABd);break;case 3:W6=
A.aaR(A.acs.ACx);break;case 4:W6=A.aaR(A.acs.AAg);break;case 5:W6=A.aaR(A.acs.ACA
);break;case 6:W6=A.aaR(A.acs.ACn);break;case 7:W6=A.aaR(A.acs.ACm);break;case 8:
W6=A.aaR(A.acs.AAo);break;case 9:W6=A.aaR(A.acs.AES);break;case 10:W6=A.aaR(A.acs.
ACN);break;case 11:W6=A.aaR(A.acs.ACL);break;case 12:W6=A.aaR(A.acs.AAZ);break;default:
throw new Error(AXo+Bbc.toFixed());}return W6;},_Init:function(aArg){C.EnumToString.
_Init.call(this,aArg);this.__proto__=C.MonthToString;},_className:"Device::MonthToString"
};C.Ai0={FileName:A.jV,AEN:0,AAW:0,Anh:false,_Init:function(aArg){this.__proto__=
C.Ai0;A.h7++;},_Done:function(){this.__proto__=null;A.h7--;},_ReInit:function(){
},_Mark:function(D){var B;if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null
,_cycle:0,_observers:null,_className:"Device::DataExportContext"};C.AlN={Bz7:0,BBF:
1};C.ATs={Init:function(aArg){var B;A.zX([this,this.Bcl],[B=A._GetAutoObject(C.Device
),B.A6Q,B.A_F],0);this.Bcl(this);},Co:function(){A._GetAutoObject(C.Device).Aq_(
this.toString());},Bcl:function(H){this.EJ(A._GetAutoObject(C.Device).AFB);A.we(
this,0);},_Init:function(aArg){C.Int32ArrayWrapper._Init.call(this,aArg);this.__proto__=
C.ATs;this.YU(2);this.Init(aArg);},_className:"Device::WeightGainsLowClass"};C.ATr={
Init:function(aArg){var B;A.zX([this,this.Bcj],[B=A._GetAutoObject(C.Device),B.A6P
,B.A_E],0);this.Bcj(this);},Co:function(){A._GetAutoObject(C.Device).Aq9(this.toString(
));},Bcj:function(H){this.EJ(A._GetAutoObject(C.Device).AFA);A.we(this,0);},_Init:
function(aArg){C.Int32ArrayWrapper._Init.call(this,aArg);this.__proto__=C.ATr;this.
YU(2);this.Init(aArg);},_className:"Device::WeightGainsHighClass"};C.ATu={Init:function(
aArg){var B;A.zX([this,this.Bcn],[B=A._GetAutoObject(C.Device),B.A6T,B.A_I],0);this.
Bcn(this);},Co:function(){A._GetAutoObject(C.Device).Aq$(this.toString());},Bcn:
function(H){this.EJ(A._GetAutoObject(C.Device).AFD);A.we(this,0);},_Init:function(
aArg){C.Int32ArrayWrapper._Init.call(this,aArg);this.__proto__=C.ATu;this.YU(2);
this.Init(aArg);},_className:"Device::WeightValuesBirthClass"};C.ATq={Init:function(
aArg){var B;A.zX([this,this.Bch],[B=A._GetAutoObject(C.Device),B.A6O,B.A_D],0);this.
Bch(this);},Co:function(){A._GetAutoObject(C.Device).Aq8(this.toString());},Bch:
function(H){this.EJ(A._GetAutoObject(C.Device).AFz);A.we(this,0);},_Init:function(
aArg){C.Int32ArrayWrapper._Init.call(this,aArg);this.__proto__=C.ATq;this.YU(2);
this.Init(aArg);},_className:"Device::WeightGainsAverageClass"};C.AKL={Init:function(
aArg){var B;A.zX([this,this.BbG],[B=A._GetAutoObject(C.Device),B.A56,B.A_h],0);this.
BbG(this);},BbG:function(H){this.EJ(A._GetAutoObject(C.Device).AAf);A.we(this,0);
},_Init:function(aArg){C.Int32ArrayWrapper._Init.call(this,aArg);this.__proto__=
C.AKL;this.YU(2);this.Init(aArg);},_className:"Device::AnimalTypesWeightGainsClass"
};C.BAN={BAQ:0,BAE:1,Bzs:2,BB7:3,Unknown:4};C.By8={None:0,BAX:1,BAS:2,BAO:3,BAP:
4};C.Ag9={A5E:0,Manual:1,TransponderId:2,LAST:3};C.TransponderAssignmentIdChangeMethodToString={
B0:function(A7){var Bdt=A7;var AJs=A.jV;switch(Bdt){case 0:AJs=A.aaR(A.acf.A5E);
break;case 1:AJs=A.aaR(A.acf.A3m);break;case 2:AJs=A.aaR(A.acf.A3C);break;default:
throw new Error(AXp+Bdt.toFixed());}return AJs;},_Init:function(aArg){C.EnumToString.
_Init.call(this,aArg);this.__proto__=C.TransponderAssignmentIdChangeMethodToString;
},_className:"Device::TransponderAssignmentIdChangeMethodToString"};C.A8a={Bxp:function(
A$b){var Nh=A.ab0(A.abV(A$b,15),0,10);if(!A._GetAutoObject(C.Converter).AeJ(Nh))
return 0;return A.ab0(A.abV(A$b,15),0,10);},Bxo:function(AH5){if(AH5.length<8)return 0;
var Azl=A._NewObject(A.Core.Bt,0);var BxQ=A.abW(AH5,4,4);var AZW=A.wz(BxQ,0,10);
if((AZW<2000)||(AZW>2100))return 0;Azl.Year=AZW;var BxP=A.abW(AH5,2,2);var AZV=A.
wz(BxP,0,10);if((AZV<1)||(AZV>12))return 0;Azl.TS(AZV);var BxO=A.abV(AH5,2);var AZU=
A.wz(BxO,0,10);if((AZU<1)||(AZU>Azl.YM()))return 0;Azl.Ld(AZU);return Azl.JF();}
,_Init:function(aArg){this.__proto__=C.A8a;A.h7++;},_Done:function(){this.__proto__=
null;A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((B=this.I)&&(B._cycle
!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:"Device::ParserClass"
};C.Arb={_Init:function(){C.A8a._Init.call(this,0);},_ReInit:function(){},_variants:
function(){return this;},_this:null};C.AnimalTableFieldsToString={B0:function(A7
){var ZJ=A7;var My=A.jV;switch(ZJ){case 14:My=A.aaR(A.acf.AeK);break;case 32:My=
A.aaR(A.acf.Breed);break;case 4:My=A.aaR(A.acf.Adx);break;case 28:My=A.aaR(A.acf.
A2$);break;case 33:My=A.aaR(A.acf.AfW);break;case 23:My=A.aaR(A.acf.Kw);break;case
7:My=A.aaR(A.acf.AeA);break;case 2:My=A.aaR(A.acf.O);break;case 0:My=A.aaR(A.acf.
Gy);break;case 8:My=A.aaR(A.acf.Alarm);break;case 9:My=A.aaR(A.acf.AAK);break;case
38:My=A.aaR(A.acf.Bfa);break;case 11:My=A.aaR(A.acf.Fever);break;case 29:My=A.aaR(
A.acf.APl);break;case 18:My=A.aaR(A.acf.MP);break;case 26:My=A.aaR(A.acf.YH);break;
case 22:My=A.aaR(A.acf.Transponder);break;case 1:My=A.aaR(A.acf.Gr);break;case 34:
My=A.aaR(A.acf.I6);break;case 6:case 25:case 27:case 10:case 37:case 12:case 17:
case 5:case 3:case 35:case 36:case 15:case 16:case 24:case 31:case 20:case 30:case
21:case 19:case 13:My=A.jV;break;default:throw new Error(AXq+A7.toFixed());}return My;
},_Init:function(aArg){C.EnumToString._Init.call(this,aArg);this.__proto__=C.AnimalTableFieldsToString;
},_className:"Device::AnimalTableFieldsToString"};C.Ve={BAb:0,Bz$:1,LAST:2};C.DataExportDestinationToString={
B0:function(A7){var Bu6=A7;var AZh=A.jV;switch(Bu6){case 0:AZh=A.acf.Bf6;break;case
1:AZh=A.acf.BeO;break;default:throw new Error(AXr+A7.toFixed());}return AZh;},_Init:
function(aArg){C.EnumToString._Init.call(this,aArg);this.__proto__=C.DataExportDestinationToString;
},_className:"Device::DataExportDestinationToString"};C.ACu={Be:0,BBJ:1,LAST:2};
C.ListViewScopeToString={B0:function(A7){var Bwa=A7;var A0h=A.jV;switch(Bwa){case
0:A0h=A.aaR(A.acf.Be);break;case 1:A0h=A.aaR(A.acf.BlH);break;default:throw new Error(
AXs+A7.toFixed());}return A0h;},_Init:function(aArg){C.EnumToString._Init.call(this
,aArg);this.__proto__=C.ListViewScopeToString;},_className:"Device::ListViewScopeToString"
};
C._Init=function(){C.Int32FilterCriterion.__proto__=C.FilterCriterion;C.StringFilterCriterion.
__proto__=C.FilterCriterion;C.Table.__proto__=C.ITable;C.Animal.__proto__=C.Row;
C.Rating.__proto__=C.Row;C.HelperClass.__proto__=C.Al5;C.BoolFilterCriterion.__proto__=
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
C.ASS.__proto__=C.Int32ArrayWrapper;C.ASR.__proto__=C.Int32ArrayWrapper;C.AKK.__proto__=
C.Int32ArrayWrapper;C.UInt64FilterCriterion.__proto__=C.FilterCriterion;C.BooleanToAssignedUnassignedString.
__proto__=C.EnumToString;C.CountryToString.__proto__=C.EnumToString;C.EaseOfDeliveryToString.
__proto__=C.EnumToString;C.WhereAboutsToString.__proto__=C.EnumToString;C.BreedToString.
__proto__=C.EnumToString;C.AnimalIdGenerationMethodToString.__proto__=C.EnumToString;
C.DirectionOfCountingToString.__proto__=C.EnumToString;C.Ady.__proto__=C.EnumToIcon;
C.Adf.__proto__=C.EnumToIcon;C.GermanStateToString.__proto__=C.EnumToString;C.EartagNrAssignmentModeToString.
__proto__=C.EnumToString;C.MN.__proto__=C.EnumToCodeset;C.ReasonOfLeavingToString.
__proto__=C.EnumToString;C.AgT.__proto__=C.EnumToCodeset;C.KK.__proto__=C.EnumToCodeset;
C.CalfDeregistrations.__proto__=C.Row;C.DeviceComponentToString.__proto__=C.EnumToString;
C.Af4.__proto__=C.EnumToCodeset;C.Ad8.__proto__=C.EnumToIcon;C.WhereAboutsFilterCriterion.
__proto__=C.FilterCriterion;C.TimespanDaysToString.__proto__=C.EnumToString;C.USBStateToString.
__proto__=C.EnumToString;C.AnimalIdAutoGenerationMethodToString.__proto__=C.EnumToString;
C.MonthToString.__proto__=C.EnumToString;C.ATs.__proto__=C.Int32ArrayWrapper;C.ATr.
__proto__=C.Int32ArrayWrapper;C.ATu.__proto__=C.Int32ArrayWrapper;C.ATq.__proto__=
C.Int32ArrayWrapper;C.AKL.__proto__=C.Int32ArrayWrapper;C.TransponderAssignmentIdChangeMethodToString.
__proto__=C.EnumToString;C.AnimalTableFieldsToString.__proto__=C.EnumToString;C.
DataExportDestinationToString.__proto__=C.EnumToString;C.ListViewScopeToString.__proto__=
C.EnumToString;};C._ReInit=function(){var B;if((B=C.Device._this))B._ReInit(),C.
Device._ReInit.call(B);if((B=C.Converter._this))B._ReInit(),C.Converter._ReInit.
call(B);if((B=C.Helper._this))B._ReInit(),C.Helper._ReInit.call(B);if((B=C.Arb._this
))B._ReInit(),C.Arb._ReInit.call(B);};C.DB=function(D){var B;if((B=C.Device._this
)&&(B._cycle!=D))B._Done(C.Device._this=null);if((B=C.Converter._this)&&(B._cycle
!=D))B._Done(C.Converter._this=null);if((B=C.Helper._this)&&(B._cycle!=D))B._Done(
C.Helper._this=null);if((B=C.Arb._this)&&(B._cycle!=D))B._Done(C.Arb._this=null);
};return C;})();

/* VitalControl demonstration application, © Urban GmbH & Co.KG 2023 */