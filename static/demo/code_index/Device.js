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
var E4="ERROR: UpdateChargeActive is read only";var Hm="ERROR: ScanState is read only.";
var IQ="ERROR: MeasureState is read only.";var Ip="ERROR: Temperature value is read only";
var O2="ERROR: UpdateDataTable called for Undefined data table.";var P1="ERROR: UpdateDataTable called for unknown data table id=";
var P2="ERROR: SyncState is read only.";var CQ="ERROR: ScanTransponder is read only.";
var E$="ERROR: Body weight value is read only";var Lu="ERROR: Predicted temperature value is read only";
var P3="ERROR: TransferProgress is read only";var JZ="ERROR: TransferTarget is read only";
var N_="ERROR: unhandled assessment.";var P4="Unhandled enum BodyTemperature: ";
var MF="AU";var S4="AT";var UO="BE";var Z5="BA";var W1="BG";var Iq="CA";var UP="CN";
var Z6="TW";var W2="HR";var Z7="CY";var W3="CZ";var Z8="DK";var Z9="EE";var UQ="FI";
var W4="FR";var P5="DE";var Z_="GR";var O3="HU";var Ri="IE";var W5="IT";var W6="JP";
var W7="LV";var W8="LT";var Z$="LU";var W9="MT";var W_="NL";var S5="NO";var UR="PL";
var US="PT";var AcN="RO";var S6="RU";var Aaa="SK";var Afx="SI";var Aab="ES";var W$=
"SE";var Aac="CH";var Aad="TR";var AhQ="UA";var J0="UK";var Aae="US";var Lv=".";
var AhR="-";var Aog="ERROR: Unhandled mass unit: ";var N$=" ";var Xa="Unhandled gender";
var Aoh="Unhandled animal type";var AhS="Unhandled Device::MassUnit.";var AhT="Unhandled Device::AnimalListContent.";
var AcO="Avid";var UT="Ordicam / IER SA";var Aoi="Agrident";var Aoj="Datamars";var
Aok="Allflex";var Aol="Texas Instruments";var Afy="Nedap";var Ala="Digital Angel";
var Ax0="null";var Ax1="[ ";var O4=", ";var Rj=" ]";var Ax2="Unhandled language";
var UU="Unhandled Device::AnimalListAction.";var AsS="Temperature unit conversion not supported: ";
var Ax3="->";var Ax4="=";var Ax5=">";var Aom="<";var Afz="!=";var Aon="WARNING: Unhandled operator.";
var IR="Unknown birth type";var Aoo="Unhandled country: ";var Xb="ERROR: Cannot start transaction";
var Alb="ERROR: Table is null, cannot load row (";var AsT=")";var AsU="Table Id mismatch!";
var AsV="ERROR: Row index (";var AsW=") out of bounds [0,";var Alc="]";var AsX="ERROR: Table is full. Item limit: ";
var Ax6="Device::ScanTransponder not set";var Ax7="Unhandled TransponderType.";var
Ax8="Unhandled ScanState.";var AVS="Could not load animal with transponder";var AsY=
"Birth type";var Ax9="Time calving";var P6="Pend. reg. notice";var Ax_="Perished";
var AVT="Rating temp.";var AVU="Location";var AVV=" mother";var AVW="Reason leaving";
var AHi="Time alarm";var AHj="Time first weighing";var AfA="Time control";var Aop=
"Time temp.";var AVX="Time watch";var AHk="Time weighing";var Ald="Assessment";var
AHl="Time rating";var AHm="ERROR: Unhandled AnimalTable filter field:";var AHn="Field ";
var AVY="ERROR: Unhandled RatingTable filter field:";var AVZ="ERROR: Unhandled table ";
var AV0=" filter fields.";var AcP=" [";var AV1="WARNING: Unhandled filter criterion type.";
var AHo="0";var AsZ="No table specified";var AHp="Invalid animal id generation method: ";
var AHq="Unhandled AnimalIdGenerationMethod: ";var Ax$="Invalid gender: ";var AHr=
"Invalid ear tag number assignment mode: ";var Aya=";";var AV2="Invalid animal creation error code: ";
var AV3="Invalid EartagNrAssignmentMode: ";var AV4="Unsupported exponent: ";var AV5=
"Unknown whereabouts type: ";var AHs="Unhandled Gender: ";var AV6="Unhandled AnimalIdAutoGenerationMethod: ";
var O5="\n";var Ayb="\n\n";var AV7="Bootloader:\nV\xA0";var AV8="Middleware:\nV\xA0";
var AV9="GUI:\nV\xA0";var AV_="Mainboard: ";var AV$="Torchboard: ";var AWa="Operator not supported.";
var AWb="Unhandled Device::TransponderAssignmentIdChangeMethod: ";var Ayc="Unhandled mass deregistration criterion: ";
var As0="Unhandled enum value ";var As1="UNDEFINED";var AWc="Boot";var AWd="Charge";
var AWe="ChargeWarning";var AWf="ControlledPowerOff";var AHt="DeviceMain";var AWg=
"DeviceService";var AHu="DeviceInfo";var AHv="DeviceDataManagement";var AHw="DeviceAnimalDataMenu";
var AWh="DeviceDeviceDataMenu";var AHx="DeviceCheck";var AHy="Home";var AWi="Settings";
var Rk="DateTimeSettings";var Xc="UnitsSettings";var AWj="DataAcquisitionSettings";
var AWk="RegistrationAutomaticSettings";var AWl="RegistrationPresettingsSettings";
var AWm="TransponderAssignmentSettings";var AWn="TransponderUnlinkSettings";var AWo=
"TemperatureSettings";var AWp="WeightGainSettings";var AhU="DeviceSettings";var AHz=
"RegistrationSettings";var AWq="InitializationSettings";var AWr="PremisesSettings";
var AHA="Sleep";var AHB="Sync";var Ayd="EditAnimalData";var P7="EditAnimalDataNaisId";
var AWs="AnimalList";var AWt="AnimalListFilter";var AWu="AlarmListFilter";var As2=
"WatchListFilter";var AWv="AnimalActionActions";var AWw="AnimalActionTemperature";
var AWx="TemperatureMeasurement";var AWy="AnimalActionWeighing";var AWz="AnimalActionRate";
var AWA="AnimalActionUnregister";var As3="AnimalActionPerished";var AWB="AnimalActionNewBornCare";
var AWC="AlarmList";var AWD="ControlMeasure";var AWE="ControlList";var AWF="RangeTest";
var AWG="ListsMain";var AWH="ListsIdManagement";var AWI="WatchList";var AWJ="EvaluationMenuMain";
var AWK="EvaluationMenuWeights";var AHC="EvaluationLosses";var Ale="EvaluationRatings";
var AWL="EvaluationTemperatures";var AWM="EvaluationWeights";var AWN="EvaluationWeightsRecent";
var Aye="EvaluationBirthWeights";var Alf="AnimalEvaluationFilter";var AhV="NewMenu";
var Ayf="NewAnimals";var Aoq="NewAnimalManualData";var AhW="MassRecording";var AWO=
"NewAnimalTransponderData";var Ayg="NewAnimalLoss";var AHD="AutoActionScanScreen";
var AfB="ManualActionScanScreen";var AHE="SetTransponderScreen";var Aaf="SetSaveTransponderScreen";
var Alg="NewAnimalSetTransponderScreen";var Aor="NewAnimalsSetTransponderScreen";
var AWP="NewAnimalCalvingDataScreen";var AWQ="WeightListScreen";var AWR="AnimalSingleInfoScreen";
var AWS="AnimalMultiInfoScreen";var AWT="AnimalRegistrationDetails";var As4="FreshCowListScreen";
var AHF="FreshCowListFilterScreen";var AHG="DryCowListScreen";var AWU="DryCowListFilterScreen";
var AWV="NoTransponderListScreen";var AWW="NoTransponderListFilterScreen";var AWX=
"YoungNoTransponderListScreen";var AWY="YoungNoTransponderListFilterScreen";var AWZ=
"NoNaisIdListScreen";var AW0="NoNaisIdListFilterScreen";var AW1="RegistrationsListScreen";
var AW2="RegistrationsListFilterScreen";var AW3="ActionListScreen";var AW4="ActionListFilterScreen";
var Ayh="UpdateScreen";var AHH="MotherScanScreen";var AHI="SetSaveNaisIdScreen";
var AHJ="PurchasedAnimalsList";var AHK="TextInput";var AHL="AnimalActions";var AHM=
"Unhandled display mode: ";var AW5="None";var AW6="Actions Settings";var AW7="Auto Action";
var AW8="Menu Item Settings";var AW9="Rating Type";var AW_="Weighing settings";var
AW$="Options";var Ayi="AnimalSearch";var AHN="AnimalSearchUnfiltered";var AXa="AnimalSearchDriedOff";
var AHO="MeasurementReady";var AhX="AnimalMultiInfoMenu";var UV="MassRecordingDefaults";
var AXb="MassRecordingFields";var Aag="MassRecordingMenu";var AXc="PurchasedAnimalsListMenu";
var AXd="BirthRegistrationsListMenu";var Alh="Unhandled overlay menu: ";var Aah=
"Error";var AcQ="Idle";var Ayj="IdScanned";var AXe="NotFound";var Oa="Progress";
var AHP="Unhandled scan state: ";var AXf="Prediction";var AHQ="Ready";var AXg="Unhandled measure state: ";
var AHR="Unhandled temperature unit: ";var AHS="Unhandled species: ";var AXh="English";
var AXi="Nederlands";var AXj="Deutsch";var AXk="Eesti";var AXl="Suomalainen";var
AXm="Fran\xE7ais";var AXn="\u0395\u03BB\u03BB\u03B7\u03BD\u03B9\u03BA\u03AC";var
AXo="\u0411\u044A\u043B\u0433\u0430\u0440\u0441\u043A\u0438";var AHT="Italiano";
var AXp="\u0420\u0443\u0441\u0441\u043A\u0438\u0439";var AHU="Espa\xF1ol";var AHV=
"T\xFCrk\xE7e";var Ayk="\u6B63\u9AD4\u5B57/\u7E41\u9AD4\u5B57";var AXq="\u010Ce\u0161tina";
var AXr="Bosanski";var AXs="Norsk";var AXt="\u0423\u043A\u0440\u0430\u0457\u043D\u0441\u044C\u043A\u0438\u0439";
var AHW="Unhandled language: ";var AXu="EN";var AXv="ET";var AXw="EL";var As5="ZH";
var As6="CS";var AHX="BS";var AXx="Unhandled gender: ";var AXy="Unhandled birth type: ";
var AXz="Exporting";var AXA="ImportFinish";var AXB="ImportStart";var AXC="Importing";
var AXD="Init";var AXE="Unhandled sync state: ";var AHY="Unhandled rating attribute: ";
var AXF="Unhandled assessment: ";var Ayl="Illegal boolean value: ";var AHZ="Unhandled popup ID:";
var AXG="Unknown";var AXH="Severe Error";var AXI="ErrorsDeviceDriverCheck";var AXJ=
"Enter Sleep";var AXK="About";var AXL="InfoSoftwareVersions";var AH0="InfoHardwareVersions";
var AH1="InfoSerial";var AH2="ShutDown";var AH3="SuccessDataSync";var Aym="SuccessResetFactory";
var Ayn="SuccessResetAnimalData";var AH4="SuccessCreateBackup";var AXM="SuccessRestoreBackup";
var AH5="CreateBackupInProgress";var AXN="RestoreBackupInProgress";var AH6="FailedCreateBackup";
var AXO="FailedRestoreBackup";var AXP="TechnicalDetails";var AXQ="WarningDataSync";
var AXR="WarningFactory";var AXS="WarningResetAnimalData";var AXT="WarningRestart";
var AXU="WarningAutoAction";var AXV="WarningAutoActionNotApplicable";var AXW="WarningNoMenuItem";
var AXX="WarningEnterDemoMode";var AXY="NoAnimalsRegistered";var AXZ="MaxNumAnimalsReached";
var Ayo="MaxNumRatingsReached";var AX0="MaxNumCalfDeregistrationsReached";var AX1=
"MissingTransponder";var Ayp="EarTagNumberTooShort";var As7="NoValidCountryCode";
var UW="WarningOutdatedAnimalWeight";var As8="WarningOutdatedAnimalWeights";var AX2=
"WarningWeightEvaluationSingular";var AX3="WarningWeightEvaluationPlural";var AX4=
"ScanError";var AH7="ScanNotFound";var AX5="ScannedAnimalNotFound";var AH8="ScannedTransponderNotFound";
var AX6="AnimalNotFound";var AX7="SuccessUnregister";var AX8="SuccessUnregisterPerished";
var As9="SuccessCreationNewAnimal";var AX9="SuccessCreationNewAnimals";var AX_="AnimalCreationInProgress";
var AH9="EvaluationInProgress";var AX$="DataSyncInProgress";var AYa="AddedToAlarm";
var AYb="RemovedFromAlarm";var AYc="AddedToWatch";var AcR="RemovedFromWatch";var
AYd="AddedToDryOff";var AYe="RemovedFromDryOff";var AYf="AnimalIdAlreadyExists";
var AYg="AnimalIdAlreadyExistsContinuable";var AH_="MissingAnimalId";var AYh="MissingAnimalIdMother";
var AYi="MissingEartagNumber";var AYj="MissingTransponderId";var AYk="TransponderAlreadyRegistered";
var AYl="TransponderAlreadyRegisteredContinuable";var AYm="TransponderAlreadyRegisteredCapturable";
var AH$="HelpAnimalInfoRating";var AYn="WarningReassignTransponder";var AYo="CannotReassignNaisId";
var AYp="WarningResetToDefaultValue";var AIa="WarningResetThresholds";var AIb="WarningResetTempThresholds";
var AYq="UpdateFirmware";var AYr="UpdateFirmwareBatteryLow";var AYs="ConfirmFirmwareUpdated";
var AYt="ConfirmBootloaderUpdated";var Rl="QuestionAddAnotherCalfMultiples";var As_=
"RemovedAllBirthNoticesPending";var AIc="RemovedAllPurchasedNoticePending";var AId=
"RemovedFromBirthNoticePending";var Aos="RemovedFromPurchasedNoticePending";var Aot=
"SuccessClearAnimalLoss";var Ayq="RemovedAnimalBirth";var AYu="RemovedAnimalPurchased";
var AIe="WarningNoActionsForAnimalLoss";var AYv="SuccessLinkTransponder";var AYw=
"SuccessChangeTransponder";var AYx="SuccessUnlinkTransponder";var AYy="SuccessLinkNaisId";
var AYz="WarningDataExportHitBirthFailed";var AYA="SuccessDataExportHitBirth";var
AYB="SuccessDataExportHitBirthDownload";var AYC="WarningDataExportHitPurchasedFailed";
var AYD="SuccessDataExportHitPurchased";var AYE="SuccessDataExportHitPurchasedDownload";
var AYF="WarningDataExportAnimalsFailed";var AYG="SuccessDataExportAnimalsRatings";
var AYH="SuccessDataExportAnimalsDownload";var AYI="WarningNoPremisesID";var AYJ=
"WarningNoFlashDrivePresent";var AYK="WarningNoBackupPathPresent";var AYL="WarningNoBackupFilePresent";
var Aou="DemoFunctionNotAvailable";var AIf="WarningImpreciseTimeSetting";var AYM=
"ConfirmationRestoreBackup";var AIg="ConfirmationMassDeregistration";var AIh="SuccessMassDeregistration";
var Aai="WarningParsedDateInFutureInvalid";var AIi="WarningParsingDateFailed";var
AYN="WarningParsingNaisIdFailed";var AIj="WarningParsingShortNaisIdWithoutPremisesId";
var AYO="AnimalId";var Ayr="FarmId";var AYP="GroupId";var AYQ="PersonId";var Ays=
"Unhandled transponder type: ";var AYR="FDX";var AYS="HDX";var AYT="HDX (Urban)";
var AIk="Unhandled transponder protocol: ";var Aov="Illegal RatingMode: ";var AIl=
"Unhandled mass unit: ";var AYU="Max array size is 10";var Ayt="Index out of bounds";
var AIm="ERROR: Received more integers than expected!";var AhY="Unhandled double scan action :";
var AYV="Illegal WeightRecordingMode: ";var Aow="Illegal WeightRecordingScope: ";
var AYW="AnimalData";var AIn="Rating";var AIo="Temperature";var AYX="Weight";var
AYY="Alarm infos";var AIp="Control infos";var AYZ="Watch infos";var AY0="Fresh cow infos";
var AY1="No transponder infos";var AY2="Dry cow info";var AY3="No nais id infos";
var AY4="Birth registrations infos";var AY5="Purchased registrations infos";var AY6=
"Young no transponder infos";var AY7="Unhandled animal list content:";var AY8="Illegal AutoRegistrationMode: ";
var AY9="Illegal FactoryResetScope: ";var Aox="??";var AY_="Illegal EaseOfDelivery: ";
var AY$="Illegal Whereabouts: ";var AIq="Illegal breed: ";var Aaj="Unisex";var AZa=
"Illegal animalIdGenerationMethod: ";var Ayu="Ascending";var AZb="Descending";var
AZc="Illegal directionOfCountingName: ";var AIr="Unhandled direction of counting: ";
var As$="Unhandled German state: ";var AZd="SH";var AZe="HH";var Ata="NI";var Atb=
"HB";var Atc="NW";var Atd="HE";var Ayv="RP";var Aoy="BW";var AZf="BY";var AZg="SL";
var AZh="BB";var AZi="MV";var AZj="SN";var AZk="ST";var AZl="TH";var AZm="One Range Male Female";
var AZn="Two Ranges Male Female";var AIs="Illegal EartagAssignmentMode: ";var AZo=
"Unhandled code set value ";var AIt="Implement in derived class";var AZp="Illegal HIT-Code: ";
var AZq="Illegal ReasonOfLeaving: ";var AIu="Illegal code: ";var Ayw="Undefined";
var AZr="Illegal DeviceComponent: ";var Ayx="Unhandled Device::MotherSelectionFilterMode: ";
var Ayy="Illegal Device::TimespanDays: ";var AZs="Not connected";var AZt="Host";
var AZu="Device";var AIv="Device CDC";var AZv="Host MSC";var AZw="Host HID";var AZx=
"Host CDC";var AZy="Illegal animalIdAutoGenerationMethod: ";var AZz="Unhandled month: ";
var AZA="Illegal transponderAssignmentIdChangeMethod: ";var AZB="Unhandled animal table field: ";
var AZC="Unhandled data export destination: ";var AIw="Unhandled list view scope: ";
var AZD="1 ";var AZE="100 ";var AZF="10 ";var AZG="Unhandled weight value precision: ";
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
B9:null,B_:null,CW:function(AH){if(!AH)return;var Av=this.B9;while(!!Av){if(Av===
AH)throw new Error(Cc);Av=Av.Ah;}AH.AJ=this.B_;if(!!this.B_)this.B_.Ah=AH;this.B_=
AH;if(!this.B9)this.B9=AH;},AOJ:function(){return this.B9;},AOO:function(BbC){if(
!!BbC)return BbC.Ah;return null;},DQ:function(AI4,Eb){var Av=this.B9;while(!!Av){
if(Av.EJ===AI4){if(Eb===1)return Av;else if(Av.Operator===Eb)return Av;}Av=Av.Ah;
}return null;},N3:function(AH){var Av=this.B9;while(!!Av){if(Av===AH){if(!!Av.AJ
)Av.AJ.Ah=Av.Ah;if(!!Av.Ah)Av.Ah.AJ=Av.AJ;if(this.B9===Av)this.B9=Av.Ah;if(this.
B_===Av)this.B_=Av.AJ;Av.Ah=null;Av.AJ=null;return;}Av=Av.Ah;}},Fg:function(){var
Be=A._NewObject(C.Filter,0);var Av=this.B9;while(!!Av){Be.CW(Av.Abk());Av=Av.Ah;
}return Be;},_Init:function(aArg){this.__proto__=C.Filter;A.h7++;},_Done:function(
){this.__proto__=null;A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((
B=this.B9)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.B_)&&(B._cycle!=D))B._Mark(
B._cycle=D);if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:
null,_className:"Device::Filter"};C.FilterCriterion={Ah:null,AJ:null,EJ:-1,Operator:
1,YI:false,Abk:function(){return null;},Fg:function(AH){if(!AH)return;this.EJ=AH.
EJ;this.Operator=AH.Operator;this.YI=AH.YI;},_Init:function(aArg){this.__proto__=
C.FilterCriterion;A.h7++;},_Done:function(){this.__proto__=null;A.h7--;},_ReInit:
function(){},_Mark:function(D){var B;if((B=this.Ah)&&(B._cycle!=D))B._Mark(B._cycle=
D);if((B=this.AJ)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.I)&&(B._cycle!=D
))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:"Device::FilterCriterion"
};C.Int32FilterCriterion={A4:0,Abk:function(){var Av=A._NewObject(C.Int32FilterCriterion
,0);Av.Fg(this);return Av;},Fg:function(AH){C.FilterCriterion.Fg.call(this,AH);var
Av=(C.Int32FilterCriterion.isPrototypeOf(AH)?AH:null);if(!!Av)this.A4=Av.A4;},Initialize:
function(A3,Eb,A7,P_){this.EJ=A3;this.Operator=Eb;this.A4=A7;this.YI=P_;return this;
},_Init:function(aArg){C.FilterCriterion._Init.call(this,aArg);this.__proto__=C.
Int32FilterCriterion;},_className:"Device::Int32FilterCriterion"};C.DeviceClass={
AEf:0,AEe:0,Av1:0,Ut:0,OR:null,Su:null,QV:null,ST:null,RU:null,Am:null,Bt:null,Agq:
null,AnP:null,Pl:null,Auz:A.jV,AutoActions:A.jV,ABF:A.jV,AGT:A.jV,AGU:A.jV,AhD:A.
jV,AHc:A.jV,AHd:A.jV,ABG:A.jV,AHb:A.jV,AHg:A.jV,ABA:A.jV,ABB:A.jV,ARZ:A.jV,AR4:A.
jV,AVP:A.jV,Aa5:100,Kv:0,AM0:75,Z1:3600,AT1:0,A1:5,AF:0,KX:50000,Ph:0,AF9:0,AdR:
0,Aq3:0,Aq2:0,ARM:1,ARL:1,AjU:0,ARN:1,AxL:0,Afn:0,AqQ:10,AUM:5,AD_:60,AvV:0,An8:
0,OK:1,WhereAbouts:0,VM:0,Ak3:0,AxD:3,ACC:0,Amt:0,Ags:1,AhN:0,AbW:0,Aqq:0,ANY:11
,Breed:0,EartagNrAssignmentMode:0,Au0:0,ACv:0,ACu:0,Ig:5,ABz:2,Aqs:0,AOB:2,AVA:0
,D9:0,AL_:0,JH:0,Gender:2,WeightRecordingScope:1,WeightRecordingMode:1,AnimalType:
0,MassUnit:0,AutoRegistrationMode:0,RatingMode:0,SyncState:0,OverlayMenu:0,TemperatureUnit:
0,Language:0,MeasureState:0,ScanState:0,KH:3,AeL:true,ARy:false,Aqe:true,AqR:false
,AmP:true,HB:false,AVe:false,AmQ:false,AVy:false,AsM:false,AEd:false,AmC:false,UpdateActiveScreen:
function(AK){if(this.KH===AK)return;this.KH=AK;A.abo([this,this.AEq,this.BaM],0);
},Zq:function(E){if(this.K&&this.K.Zq)return this.K.Zq.apply(this,arguments);else
return C.DeviceClass.Bul.apply(this,arguments);},Bul:function(E){},BaM:function(
Aq){this.Zq(Aq);},UpdateBatteryChargeState:function(AK){if(this.Aa5===AK)return;
this.Aa5=AK;A.abo([this,this.Av6,this.AyE],0);},Awr:function(E){if(this.K&&this.
K.Awr)return this.K.Awr.apply(this,arguments);else return C.DeviceClass.Bux.apply(
this,arguments);},Bux:function(E){A.ab5("%s",BF);},AyE:function(Aq){this.Awr(Aq);
},UpdateChargeActive:function(AK){if(this.AmC===AK)return;this.AmC=AK;A.abo([this
,this.Av9,this.AyF],0);},AEX:function(E){if(this.K&&this.K.AEX)return this.K.AEX.
apply(this,arguments);else return C.DeviceClass.BuD.apply(this,arguments);},BuD:
function(E){A.ab5("%s",E4);},AyF:function(Aq){this.AEX(Aq);},UpdateScanState:function(
AK){var B;if(this.ScanState===AK)return;this.ScanState=AK;A.abo([this,this.ASC,this.
A0b],0);A._GetAutoObject(C.Helper).BAH(this);},Ar1:function(E){if(this.K&&this.K.
Ar1)return this.K.Ar1.apply(this,arguments);else return C.DeviceClass.Bvi.apply(
this,arguments);},Bvi:function(E){A.ab5("%s",Hm);},A0b:function(Aq){this.Ar1(Aq);
},UpdateMeasureState:function(AK){if(this.MeasureState===AK)return;this.MeasureState=
AK;A.abo([this,this.AEy,this.AIN],0);},AwQ:function(E){if(this.K&&this.K.AwQ)return this.
K.AwQ.apply(this,arguments);else return C.DeviceClass.Bu2.apply(this,arguments);
},Bu2:function(E){A.ab5("%s",IQ);},AIN:function(Aq){this.AwQ(Aq);},UpdateTempValue:
function(AK){if(this.Kv===AK)return;this.Kv=AK;A.abo([this,this.AEC,this.AIP],0);
},Aw4:function(E){if(this.K&&this.K.Aw4)return this.K.Aw4.apply(this,arguments);
else return C.DeviceClass.Bvo.apply(this,arguments);},Bvo:function(E){A.ab5("%s"
,Ip);},AIP:function(Aq){this.Aw4(Aq);},AnD:function(E){if(this.K&&this.K.AnD)return this.
K.AnD.apply(this,arguments);else return C.DeviceClass.BuW.apply(this,arguments);
},BuW:function(E){},Ba2:function(Aq){this.AnD(Aq);},Aw5:function(E){if(this.K&&this.
K.Aw5)return this.K.Aw5.apply(this,arguments);else return C.DeviceClass.Bvp.apply(
this,arguments);},Bvp:function(E){},Ath:function(Aq){this.Aw5(Aq);},AEV:function(
E){if(this.K&&this.K.AEV)return this.K.AEV.apply(this,arguments);else return C.DeviceClass.
BuC.apply(this,arguments);},BuC:function(E){},BaU:function(Aq){this.AEV(Aq);},AFs:
function(E){if(this.K&&this.K.AFs)return this.K.AFs.apply(this,arguments);else return C.
DeviceClass.Bu4.apply(this,arguments);},Bu4:function(E){},AZ7:function(Aq){this.
AFs(Aq);},UpdateMonitoring:function(AK){if(this.AEd===AK)return;this.AEd=AK;A.abo([
this,this.ASt,this.AZ7],0);},UpdateDataTable:function(BbD){var B;switch(BbD){case
0:A.pe([B=this.Am,B.Akn],this);break;case 1:A.pe([B=this.Bt,B.Akn],this);break;case
3:A.pe([B=this.Agq,B.Akn],this);break;case 4:A.pe([B=this.Pl,B.Akn],this);break;
case 2:A.ab5("%s",O2);break;default:A.ab5("%s%e",P1,BbD);}},AxC:function(){if(this.
K&&this.K.AxC)return this.K.AxC.apply(this,arguments);else return C.DeviceClass.
BvY.apply(this,arguments);},BvY:function(){},AhH:function(){if(this.K&&this.K.AhH
)return this.K.AhH.apply(this,arguments);else return C.DeviceClass.Bv1.apply(this
,arguments);},Bv1:function(){},AhE:function(){if(this.K&&this.K.AhE)return this.
K.AhE.apply(this,arguments);else return C.DeviceClass.BvZ.apply(this,arguments);
},BvZ:function(){},An1:function(){if(this.K&&this.K.An1)return this.K.An1.apply(
this,arguments);else return C.DeviceClass.Bv2.apply(this,arguments);},Bv2:function(
){},UpdateLanguage:function(AK){if(this.Language===AK)return;this.Language=AK;switch(
AK){case 14:A._SetLanguage(1);break;case 13:A._SetLanguage(2);break;case 6:A._SetLanguage(
3);break;case 11:A._SetLanguage(4);break;case 10:A._SetLanguage(5);break;case 12:
A._SetLanguage(6);break;case 5:A._SetLanguage(7);break;case 3:A._SetLanguage(8);
break;case 1:A._SetLanguage(9);break;case 8:A._SetLanguage(10);break;case 4:A._SetLanguage(
11);break;case 15:A._SetLanguage(13);break;case 9:A._SetLanguage(15);break;case 2:
A._SetLanguage(16);break;case 7:A._SetLanguage(17);break;case 16:A._SetLanguage(
18);break;default:A._SetLanguage(0);}A.abo([this,this.A8C,this.Ba2],0);},UpdateTemperatureUnit:
function(AK){if(this.TemperatureUnit===AK)return;this.TemperatureUnit=AK;A.abo([
this,this.Arw,this.Ath],0);},UpdateBrightness:function(AK){if(this.AM0===AK)return;
this.AM0=AK;A.abo([this,this.A8n,this.BaU],0);},SetSystemTime:function(Ah7){if(this.
K&&this.K.SetSystemTime)return this.K.SetSystemTime.apply(this,arguments);else return C.
DeviceClass.BvW.apply(this,arguments);},BvW:function(Ah7){},Axw:function(){if(this.
K&&this.K.Axw)return this.K.Axw.apply(this,arguments);else return C.DeviceClass.
BaA.apply(this,arguments);},BaA:function(){},AGl:function(){if(this.K&&this.K.AGl
)return this.K.AGl.apply(this,arguments);else return C.DeviceClass.Bay.apply(this
,arguments);},Bay:function(){},Bn9:function(){},UpdateOverlayMenu:function(AK){if(
this.OverlayMenu===AK)return;this.OverlayMenu=AK;A.abo([this,this.Awj,this.AyM],
0);},Ds:function(E){if(this.K&&this.K.Ds)return this.K.Ds.apply(this,arguments);
else return C.DeviceClass.Bvd.apply(this,arguments);},Bvd:function(E){},AyM:function(
Aq){this.Ds(Aq);},Aw$:function(E){if(this.K&&this.K.Aw$)return this.K.Aw$.apply(
this,arguments);else return C.DeviceClass.Bvz.apply(this,arguments);},Bvz:function(
E){},Bbb:function(Aq){this.Aw$(Aq);},UpdateUnderTemp:function(AK){if(this.Z1===AK
)return;this.Z1=AK;A.abo([this,this.A87,this.Bbb],0);},UpdateSyncState:function(
AK){if(this.SyncState===AK)return;this.SyncState=AK;A.abo([this,this.ASE,this.A0d
],0);},Ab$:function(E){if(this.K&&this.K.Ab$)return this.K.Ab$.apply(this,arguments
);else return C.DeviceClass.Bvn.apply(this,arguments);},Bvn:function(E){A.ab5("%s"
,P2);},A0d:function(Aq){this.Ab$(Aq);},AC0:function(){if(this.K&&this.K.AC0)return this.
K.AC0.apply(this,arguments);else return C.DeviceClass.Bud.apply(this,arguments);
},Bud:function(){return A.jV;},UpdatePopup:function(J2,A0X,A0T,A00){this.A9(J2,A0X
,A0T,A00,[this,this.BAp]);},PopupStateChanged:function(J2,Ae){if(this.K&&this.K.
PopupStateChanged)return this.K.PopupStateChanged.apply(this,arguments);else return C.
DeviceClass.BvM.apply(this,arguments);},BvM:function(J2,Ae){},AFU:function(E){if(
this.K&&this.K.AFU)return this.K.AFU.apply(this,arguments);else return C.DeviceClass.
BvB.apply(this,arguments);},BvB:function(E){},Bbc:function(Aq){this.AFU(Aq);},UpdateVibrationOnKeypressEnabled:
function(AK){if(this.AsM===AK)return;this.AsM=AK;A.abo([this,this.A88,this.Bbc],
0);},Ae8:function(E){if(this.K&&this.K.Ae8)return this.K.Ae8.apply(this,arguments
);else return C.DeviceClass.BvA.apply(this,arguments);},BvA:function(E){},AIQ:function(
Aq){this.Ae8(Aq);},UpdateVibrationOn:function(Bb5){if(this.AVy===Bb5)return;this.
AVy=Bb5;A.abo([this,this.AED,this.AIQ],0);},A9:function(J2,A0X,A0T,A00,Bxr){var Agh=
A._NewObject(C.PopupContext,0);Agh.Id=J2;Agh.Show=A0X;Agh.AkI=A0T;Agh.Ak2=A00;Agh.
AF2=Bxr;this.AnP.Trigger(Agh,false);},BAp:function(G){var At=(C.PopupContext.isPrototypeOf(
G)?G:null);if(!!At)this.PopupStateChanged(At.Id,At.PopupState);},Aw0:function(E){
if(this.K&&this.K.Aw0)return this.K.Aw0.apply(this,arguments);else return C.DeviceClass.
Bvh.apply(this,arguments);},Bvh:function(E){},A0a:function(Aq){this.Aw0(Aq);},UpdateRatingMode:
function(AK){if(this.RatingMode===AK)return;this.RatingMode=AK;A.abo([this,this.
ASB,this.A0a],0);},AeZ:function(E){if(this.K&&this.K.AeZ)return this.K.AeZ.apply(
this,arguments);else return C.DeviceClass.BuO.apply(this,arguments);},BuO:function(
E){},Atg:function(Aq){this.AeZ(Aq);},UpdateFlashLightOn:function(BbM){if(this.AmQ===
BbM)return;this.AmQ=BbM;A.abo([this,this.Art,this.Atg],0);},Un:function(E){if(this.
K&&this.K.Un)return this.K.Un.apply(this,arguments);else return C.DeviceClass.Bvs.
apply(this,arguments);},Bvs:function(E){},A0e:function(Aq){this.Un(Aq);},UpdateTopLightOn:
function(Bb1){if(this.AVe===Bb1)return;this.AVe=Bb1;A.abo([this,this.ASG,this.A0e
],0);},WA:function(E){if(this.K&&this.K.WA)return this.K.WA.apply(this,arguments
);else return C.DeviceClass.Bvg.apply(this,arguments);},Bvg:function(E){},Bwd:function(
Aq){this.WA(Aq);},UpdateRGBTopLight:function(BbW){if(this.AT1===BbW)return;this.
AT1=BbW;A.abo([this,this.BkV,this.Bwd],0);},Awq:function(E){if(this.K&&this.K.Awq
)return this.K.Awq.apply(this,arguments);else return C.DeviceClass.Buw.apply(this
,arguments);},Buw:function(E){},Bv8:function(Aq){this.Awq(Aq);},UpdateAutoRegistrationMode:
function(Bbz){if(this.AutoRegistrationMode===Bbz)return;this.AutoRegistrationMode=
Bbz;A.abo([this,this.Bkj,this.Bv8],0);},Ar2:function(E){if(this.K&&this.K.Ar2)return this.
K.Ar2.apply(this,arguments);else return C.DeviceClass.Bvj.apply(this,arguments);
},Bvj:function(E){A.ab5("%s",CQ);},A0c:function(Aq){this.Ar2(Aq);},UpdateScanTransponder:
function(J2,Bb3,Bb2){if(((this.OR.Id===J2)&&(this.OR.TransponderType===Bb3))&&(this.
OR.TransponderProtocol===Bb2))return;this.OR.OnSetId(J2);this.OR.ATE(Bb3);this.OR.
ATD(Bb2);A.abo([this,this.ASD,this.A0c],0);},OM:function(E){if(this.K&&this.K.OM
)return this.K.OM.apply(this,arguments);else return C.DeviceClass.BuG.apply(this
,arguments);},BuG:function(E){},UY:function(Aq){this.OM(Aq);},UpdateDigitsID:function(
BbH){if(this.A1===BbH)return;this.A1=BbH;A.abo([this,this.Uf,this.UY],0);},PN:function(
E){if(this.K&&this.K.PN)return this.K.PN.apply(this,arguments);else return C.DeviceClass.
Bvc.apply(this,arguments);},Bvc:function(E){},UZ:function(Aq){this.PN(Aq);},UpdateOffsetID:
function(BbT){if(this.AF===BbT)return;this.AF=BbT;A.abo([this,this.Ug,this.UZ],0
);},AFY:function(E){if(this.K&&this.K.AFY)return this.K.AFY.apply(this,arguments
);else return C.DeviceClass.BvI.apply(this,arguments);},BvI:function(E){A.ab5("%s"
,E$);},AIR:function(Aq){this.AFY(Aq);},UpdateWeightValue:function(AK){if(this.KX===
AK)return;this.KX=AK;A.abo([this,this.AEE,this.AIR],0);},AwN:function(E){if(this.
K&&this.K.AwN)return this.K.AwN.apply(this,arguments);else return C.DeviceClass.
BuZ.apply(this,arguments);},BuZ:function(E){},AZ6:function(Aq){this.AwN(Aq);},UpdateMassUnit:
function(AK){if(this.MassUnit===AK)return;this.MassUnit=AK;A.abo([this,this.ASs,
this.AZ6],0);},ArA:function(E){if(this.K&&this.K.ArA)return this.K.ArA.apply(this
,arguments);else return C.DeviceClass.Bau.apply(this,arguments);},Bau:function(E
){},BaJ:function(Aq){this.ArA(Aq);},ArB:function(E){if(this.K&&this.K.ArB)return this.
K.ArB.apply(this,arguments);else return C.DeviceClass.Bav.apply(this,arguments);
},Bav:function(E){},AZ0:function(Aq){this.ArB(Aq);},UpdateActiveActions:function(
AK){if(this.Ph===AK)return;this.Ph=AK;A.abo([this,this.A79,this.BaJ],0);},UpdateActiveActionsOrder:
function(AK){if(this.Auz===AK)return;this.Auz=AK;A.abo([this,this.ASe,this.AZ0],
0);},Aku:function(E){if(this.K&&this.K.Aku)return this.K.Aku.apply(this,arguments
);else return C.DeviceClass.Baw.apply(this,arguments);},Baw:function(E){},BaS:function(
Aq){this.Aku(Aq);},UpdateAutoActions:function(AK){if(this.AutoActions===AK)return;
this.AutoActions=AK;A.abo([this,this.A8j,this.BaS],0);},AGM:function(){if(this.K&&
this.K.AGM)return this.K.AGM.apply(this,arguments);else return C.DeviceClass.Bv0.
apply(this,arguments);},Bv0:function(){},AsD:function(){if(this.K&&this.K.AsD)return this.
K.AsD.apply(this,arguments);else return C.DeviceClass.Bv4.apply(this,arguments);
},Bv4:function(){},EB:function(E){if(this.K&&this.K.EB)return this.K.EB.apply(this
,arguments);else return C.DeviceClass.But.apply(this,arguments);},But:function(E
){},Bv7:function(Aq){this.EB(Aq);},UpdateAnimalType:function(Em){if(this.AnimalType===
Em)return;this.AnimalType=Em;A.abo([this,this.PM,this.Bv7],0);},Axa:function(E){
if(this.K&&this.K.Axa)return this.K.Axa.apply(this,arguments);else return C.DeviceClass.
BvG.apply(this,arguments);},BvG:function(E){},Bbh:function(Aq){this.Axa(Aq);},UpdateWeightRecordingMode:
function(Bb7){if(this.WeightRecordingMode===Bb7)return;this.WeightRecordingMode=
Bb7;A.abo([this,this.A9e,this.Bbh],0);},AFx:function(E){if(this.K&&this.K.AFx)return this.
K.AFx.apply(this,arguments);else return C.DeviceClass.Bve.apply(this,arguments);
},Bve:function(E){A.ab5("%s",Lu);},AZ_:function(Aq){this.AFx(Aq);},UpdatePredictedTempValue:
function(AK){if(this.AF9===AK)return;this.AF9=AK;A.abo([this,this.ASy,this.AZ_],
0);},SJ:function(L6){if(this.K&&this.K.SJ)return this.K.SJ.apply(this,arguments);
else return C.DeviceClass.BvV.apply(this,arguments);},BvV:function(L6){},AE3:function(
E){if(this.K&&this.K.AE3)return this.K.AE3.apply(this,arguments);else return C.DeviceClass.
BuF.apply(this,arguments);},BuF:function(E){},AIK:function(Aq){this.AE3(Aq);},UpdateDemoMode:
function(AK){if(this.HB===AK)return;this.HB=AK;A.abo([this,this.AEv,this.AIK],0);
},AEK:function(E){if(this.K&&this.K.AEK)return this.K.AEK.apply(this,arguments);
else return C.DeviceClass.Bum.apply(this,arguments);},Bum:function(E){},BaN:function(
Aq){this.AEK(Aq);},UpdateAgeRegistration:function(BbS){if(this.AdR===BbS)return;
this.AdR=BbS;A.abo([this,this.A8c,this.BaN],0);},Axb:function(E){if(this.K&&this.
K.Axb)return this.K.Axb.apply(this,arguments);else return C.DeviceClass.BvH.apply(
this,arguments);},BvH:function(E){},Bbi:function(Aq){this.Axb(Aq);},UpdateWeightRecordingScope:
function(BbX){if(this.WeightRecordingScope===BbX)return;this.WeightRecordingScope=
BbX;A.abo([this,this.A9f,this.Bbi],0);},JQ:function(E){if(this.K&&this.K.JQ)return this.
K.JQ.apply(this,arguments);else return C.DeviceClass.BuS.apply(this,arguments);}
,BuS:function(E){},AZ5:function(Aq){this.JQ(Aq);},UpdateGender:function(L3){if(this.
Gender===L3)return;this.Gender=L3;A.abo([this,this.Wt,this.AZ5],0);},ArR:function(
E){if(this.K&&this.K.ArR)return this.K.ArR.apply(this,arguments);else return C.DeviceClass.
BuU.apply(this,arguments);},BuU:function(E){},AyI:function(Aq){this.ArR(Aq);},UpdateIDLastUsedMale:
function(Rm){if(this.Aq3===Rm)return;this.Aq3=Rm;A.abo([this,this.Awc,this.AyI],
0);},ArQ:function(E){if(this.K&&this.K.ArQ)return this.K.ArQ.apply(this,arguments
);else return C.DeviceClass.BuT.apply(this,arguments);},BuT:function(E){},AyH:function(
Aq){this.ArQ(Aq);},UpdateIDLastUsedFemale:function(Rm){if(this.Aq2===Rm)return;this.
Aq2=Rm;A.abo([this,this.Awb,this.AyH],0);},Ab3:function(E){if(this.K&&this.K.Ab3
)return this.K.Ab3.apply(this,arguments);else return C.DeviceClass.Bur.apply(this
,arguments);},Bur:function(E){},AII:function(Aq){this.Ab3(Aq);},UpdateAnimalListContent:
function(AK){if(this.JH===AK)return;this.JH=AK;A.abo([this,this.AEs,this.AII],0);
},AEM:function(E){if(this.K&&this.K.AEM)return this.K.AEM.apply(this,arguments);
else return C.DeviceClass.Bun.apply(this,arguments);},Bun:function(E){},BaO:function(
Aq){this.AEM(Aq);},UpdateAlarmListAction:function(AK){if(this.AL_===AK)return;this.
AL_=AK;A.abo([this,this.A8e,this.BaO],0);},AE6:function(E){if(this.K&&this.K.AE6
)return this.K.AE6.apply(this,arguments);else return C.DeviceClass.BuN.apply(this
,arguments);},BuN:function(E){},BaX:function(Aq){this.AE6(Aq);},UpdateFlashLightInMeasureState:
function(BbN){if(this.AmP===BbN)return;this.AmP=BbN;A.abo([this,this.A8q,this.BaX
],0);},AeU:function(E){if(this.K&&this.K.AeU)return this.K.AeU.apply(this,arguments
);else return C.DeviceClass.Buq.apply(this,arguments);},Buq:function(E){},AIH:function(
Aq){this.AeU(Aq);},UpdateAnimalInfoContent:function(AK){if(this.D9===AK)return;this.
D9=AK;A.abo([this,this.AEr,this.AIH],0);},AFX:function(E){if(this.K&&this.K.AFX)
return this.K.AFX.apply(this,arguments);else return C.DeviceClass.BvC.apply(this
,arguments);},BvC:function(E){},Bbd:function(Aq){this.AFX(Aq);},UpdateWatchListAction:
function(AK){if(this.AVA===AK)return;this.AVA=AK;A.abo([this,this.A9a,this.Bbd],
0);},AE8:function(E){if(this.K&&this.K.AE8)return this.K.AE8.apply(this,arguments
);else return C.DeviceClass.BuP.apply(this,arguments);},BuP:function(E){},BaZ:function(
Aq){this.AE8(Aq);},UpdateFreshCowListAction:function(AK){if(this.AOB===AK)return;
this.AOB=AK;A.abo([this,this.A8s,this.BaZ],0);},ResetActiveActions:function(G){if(
this.K&&this.K.ResetActiveActions)return this.K.ResetActiveActions.apply(this,arguments
);else return C.DeviceClass.BvN.apply(this,arguments);},BvN:function(G){},BF6:function(
s){this.ResetActiveActions(s);},ResetAutoActions:function(G){if(this.K&&this.K.ResetAutoActions
)return this.K.ResetAutoActions.apply(this,arguments);else return C.DeviceClass.
BvP.apply(this,arguments);},BvP:function(G){},BF8:function(s){this.ResetAutoActions(
s);},Awo:function(E){if(this.K&&this.K.Awo)return this.K.Awo.apply(this,arguments
);else return C.DeviceClass.Buu.apply(this,arguments);},Buu:function(E){},BaQ:function(
Aq){this.Awo(Aq);},Ar4:function(E){if(this.K&&this.K.Ar4)return this.K.Ar4.apply(
this,arguments);else return C.DeviceClass.Bvq.apply(this,arguments);},Bvq:function(
E){},Ba_:function(Aq){this.Ar4(Aq);},Ar5:function(E){if(this.K&&this.K.Ar5)return this.
K.Ar5.apply(this,arguments);else return C.DeviceClass.Bvr.apply(this,arguments);
},Bvr:function(E){},Ba$:function(Aq){this.Ar5(Aq);},Aso:function(G){if(this.K&&this.
K.Aso)return this.K.Aso.apply(this,arguments);else return C.DeviceClass.BvS.apply(
this,arguments);},BvS:function(G){},BF$:function(s){this.Aso(s);},UpdateTemperaturesLowString:
function(AK){if(this.AGU===AK)return;this.AGU=AK;A.abo([this,this.A83,this.Ba$],
0);},UpdateTemperaturesHighString:function(AK){if(this.AGT===AK)return;this.AGT=
AK;A.abo([this,this.A82,this.Ba_],0);},UpdateAnimalTypesString:function(AK){if(this.
ABF===AK)return;this.ABF=AK;A.abo([this,this.A8h,this.BaQ],0);},AwH:function(E){
if(this.K&&this.K.AwH)return this.K.AwH.apply(this,arguments);else return C.DeviceClass.
BuR.apply(this,arguments);},BuR:function(E){},Ba1:function(Aq){this.AwH(Aq);},UpdateFreshCowsHideMeasured:
function(AK){if(this.AqR===AK)return;this.AqR=AK;A.abo([this,this.A8u,this.Ba1],
0);},ArX:function(E){if(this.K&&this.K.ArX)return this.K.ArX.apply(this,arguments
);else return C.DeviceClass.Bu_.apply(this,arguments);},Bu_:function(E){},Ba6:function(
Aq){this.ArX(Aq);},UpdateNaisIdLastUsedMale:function(Xk){if(this.AEf===Xk)return;
this.AEf=Xk;A.abo([this,this.A8K,this.Ba6],0);},ArW:function(E){if(this.K&&this.
K.ArW)return this.K.ArW.apply(this,arguments);else return C.DeviceClass.Bu9.apply(
this,arguments);},Bu9:function(E){},Ba5:function(Aq){this.ArW(Aq);},UpdateNaisIdLastUsedFemale:
function(Xk){if(this.AEe===Xk)return;this.AEe=Xk;A.abo([this,this.A8J,this.Ba5],
0);},AwU:function(E){if(this.K&&this.K.AwU)return this.K.AwU.apply(this,arguments
);else return C.DeviceClass.Bu7.apply(this,arguments);},Bu7:function(E){},AyK:function(
Aq){this.AwU(Aq);},UpdateNaisIdIncrementMale:function(Alp){if(this.ARM===Alp)return;
this.ARM=Alp;A.abo([this,this.Awg,this.AyK],0);},AwT:function(E){if(this.K&&this.
K.AwT)return this.K.AwT.apply(this,arguments);else return C.DeviceClass.Bu6.apply(
this,arguments);},Bu6:function(E){},AyJ:function(Aq){this.AwT(Aq);},UpdateNaisIdIncrementFemale:
function(Alp){if(this.ARL===Alp)return;this.ARL=Alp;A.abo([this,this.Awf,this.AyJ
],0);},UpdateFirmware:function(){if(this.K&&this.K.UpdateFirmware)return this.K.
UpdateFirmware.apply(this,arguments);else return C.DeviceClass.BaB.apply(this,arguments
);},BaB:function(){},Any:function(E){if(this.K&&this.K.Any)return this.K.Any.apply(
this,arguments);else return C.DeviceClass.Buz.apply(this,arguments);},Buz:function(
E){},BaT:function(Aq){this.Any(Aq);},UpdateBootloaderMessage:function(AK){if(this.
Aqs===AK)return;this.Aqs=AK;A.abo([this,this.A8m,this.BaT],0);},AEH:function(E){
if(this.K&&this.K.AEH)return this.K.AEH.apply(this,arguments);else return C.DeviceClass.
Buh.apply(this,arguments);},Buh:function(E){},BaH:function(Aq){this.AEH(Aq);},UpdateActionListAction:
function(AK){if(this.ABz===AK)return;this.ABz=AK;A.abo([this,this.A77,this.BaH],
0);},Awm:function(E){if(this.K&&this.K.Awm)return this.K.Awm.apply(this,arguments
);else return C.DeviceClass.Bui.apply(this,arguments);},Bui:function(E){},BaI:function(
Aq){this.Awm(Aq);},UpdateActionListHideMeasured:function(AK){if(this.Aqe===AK)return;
this.Aqe=AK;A.abo([this,this.A78,this.BaI],0);},Uh:function(E){if(this.K&&this.K.
Uh)return this.K.Uh.apply(this,arguments);else return C.DeviceClass.Bup.apply(this
,arguments);},Bup:function(E){},AoA:function(Aq){this.Uh(Aq);},UpdateAnimalIdGenerationMethod:
function(Bca){if(this.Ig===Bca)return;this.Ig=Bca;A.abo([this,this.Anq,this.AoA]
,0);},Awz:function(E){if(this.K&&this.K.Awz)return this.K.Awz.apply(this,arguments
);else return C.DeviceClass.BuH.apply(this,arguments);},BuH:function(E){},AZ3:function(
Aq){this.Awz(Aq);},UpdateDirectionOfCountingFemale:function(Alj){if(this.ACu===Alj
)return;this.ACu=Alj;A.abo([this,this.ASl,this.AZ3],0);},AwA:function(E){if(this.
K&&this.K.AwA)return this.K.AwA.apply(this,arguments);else return C.DeviceClass.
BuI.apply(this,arguments);},BuI:function(E){},AZ4:function(Aq){this.AwA(Aq);},UpdateDirectionOfCountingMale:
function(Alj){if(this.ACv===Alj)return;this.ACv=Alj;A.abo([this,this.ASm,this.AZ4
],0);},AwB:function(E){if(this.K&&this.K.AwB)return this.K.AwB.apply(this,arguments
);else return C.DeviceClass.BuJ.apply(this,arguments);},BuJ:function(E){},AIL:function(
Aq){this.AwB(Aq);},UpdateDirectionOfCountingUnisex:function(Alj){if(this.Au0===Alj
)return;this.Au0=Alj;A.abo([this,this.AEw,this.AIL],0);},ArS:function(E){if(this.
K&&this.K.ArS)return this.K.ArS.apply(this,arguments);else return C.DeviceClass.
BuV.apply(this,arguments);},BuV:function(E){},AoB:function(Aq){this.ArS(Aq);},UpdateIDLastUsedUnisex:
function(Rm){if(this.AjU===Rm)return;this.AjU=Rm;A.abo([this,this.Ant,this.AoB],
0);},ArY:function(E){if(this.K&&this.K.ArY)return this.K.ArY.apply(this,arguments
);else return C.DeviceClass.Bu$.apply(this,arguments);},Bu$:function(E){},AZ8:function(
Aq){this.ArY(Aq);},UpdateNaisIdLastUsedUnisex:function(Xk){if(this.Av1===Xk)return;
this.Av1=Xk;A.abo([this,this.ASu,this.AZ8],0);},AwV:function(E){if(this.K&&this.
K.AwV)return this.K.AwV.apply(this,arguments);else return C.DeviceClass.Bu8.apply(
this,arguments);},Bu8:function(E){},AyL:function(Aq){this.AwV(Aq);},UpdateNaisIdIncrementUnisex:
function(Alp){if(this.ARN===Alp)return;this.ARN=Alp;A.abo([this,this.Awh,this.AyL
],0);},Akw:function(E){if(this.K&&this.K.Akw)return this.K.Akw.apply(this,arguments
);else return C.DeviceClass.BuL.apply(this,arguments);},BuL:function(E){},AyG:function(
Aq){this.Akw(Aq);},UpdateEartagNrAssignmentMode:function(Alk){if(this.EartagNrAssignmentMode===
Alk)return;this.EartagNrAssignmentMode=Alk;A.abo([this,this.Awa,this.AyG],0);},NY:
function(E){if(this.K&&this.K.NY)return this.K.NY.apply(this,arguments);else return C.
DeviceClass.BuB.apply(this,arguments);},BuB:function(E){},Bv_:function(Aq){this.
NY(Aq);},UpdateBreed:function(AcY){if(this.Breed===AcY)return;this.Breed=AcY;A.abo([
this,this.Av8,this.Bv_],0);},AFq:function(E){if(this.K&&this.K.AFq)return this.K.
AFq.apply(this,arguments);else return C.DeviceClass.Bu3.apply(this,arguments);},
Bu3:function(E){},Bwb:function(Aq){this.AFq(Aq);},UpdateMiddlewareVersions:function(
Qa,A0P,A0Q,A0W,A0E){this.Su.OnSetTimestamp(Qa);this.Su.AFl(A0P);this.Su.AFr(A0Q);
this.Su.AFA(A0W);this.Su.AE1(A0E);A.abo([this,this.BkQ,this.Bwb],0);},AFk:function(
E){if(this.K&&this.K.AFk)return this.K.AFk.apply(this,arguments);else return C.DeviceClass.
BuX.apply(this,arguments);},BuX:function(E){},Bwa:function(Aq){this.AFk(Aq);},UpdateMainboardVersions:
function(Qa,A0N,A0O,A0M,A02,A03,A01){this.QV.OnSetTimestamp(Qa);this.QV.AFi(A0N);
this.QV.AFj(A0O);this.QV.AFh(A0M);this.QV.AFP(A02);this.QV.AFQ(A03);this.QV.AFO(
A01);A.abo([this,this.BkO,this.Bwa],0);},AFR:function(E){if(this.K&&this.K.AFR)return this.
K.AFR.apply(this,arguments);else return C.DeviceClass.Bvt.apply(this,arguments);
},Bvt:function(E){},Bwh:function(Aq){this.AFR(Aq);},UpdateTorchboardVersions:function(
Qa,A0N,A0O,A0M,A02,A03,A01){this.ST.OnSetTimestamp(Qa);this.ST.AFi(A0N);this.ST.
AFj(A0O);this.ST.AFh(A0M);this.ST.AFP(A02);this.ST.AFQ(A03);this.ST.AFO(A01);A.abo([
this,this.Blb,this.Bwh],0);},AER:function(E){if(this.K&&this.K.AER)return this.K.
AER.apply(this,arguments);else return C.DeviceClass.BuA.apply(this,arguments);},
BuA:function(E){},Bv9:function(Aq){this.AER(Aq);},UpdateBootloaderVersions:function(
Qa,A0P,A0Q,A0W,A0E){this.RU.OnSetTimestamp(Qa);this.RU.AFl(A0P);this.RU.AFr(A0Q);
this.RU.AFA(A0W);this.RU.AE1(A0E);A.abo([this,this.Bkm,this.Bv9],0);},AE4:function(
E){if(this.K&&this.K.AE4)return this.K.AE4.apply(this,arguments);else return C.DeviceClass.
BuK.apply(this,arguments);},BuK:function(E){},BaW:function(Aq){this.AE4(Aq);},UpdateDryCowListAction:
function(AK){if(this.ANY===AK)return;this.ANY=AK;A.abo([this,this.A8o,this.BaW],
0);},AJC:function(A0F){if(this.K&&this.K.AJC)return this.K.AJC.apply(this,arguments
);else return C.DeviceClass.Bwt.apply(this,arguments);},Bwt:function(A0F){return false;
},AEQ:function(E){if(this.K&&this.K.AEQ)return this.K.AEQ.apply(this,arguments);
else return C.DeviceClass.Buy.apply(this,arguments);},Buy:function(E){},AIJ:function(
Aq){this.AEQ(Aq);},UpdateBirthListView:function(AK){if(this.Aqq===AK)return;this.
Aqq=AK;A.abo([this,this.AEt,this.AIJ],0);},BatchResetBirthNoticePending:function(
){var B$=A._NewObject(C.Animal,0);var O;var AiW=0;var Adi=A._GetAutoObject(C.Device
).Am.Filter;var Be=A._GetAutoObject(C.Helper).AOF();A._GetAutoObject(C.Device).Am.
Bl(Be);for(O=0;O<A._GetAutoObject(C.Device).Am.Ca();O++){B$.EM(O,A._GetAutoObject(
C.Device).Am);B$.Ae2(false);B$.Cq(A._GetAutoObject(C.Device).Am);AiW++;}A._GetAutoObject(
C.Device).Am.Bl(Adi);return AiW;},UpdateTransferProgress:function(AK){if(this.AxL===
AK)return;this.AxL=AK;A.abo([this,this.ASH,this.A0f],0);},AFS:function(E){if(this.
K&&this.K.AFS)return this.K.AFS.apply(this,arguments);else return C.DeviceClass.
Bvu.apply(this,arguments);},Bvu:function(E){A.ab5("%s",P3);},A0f:function(Aq){this.
AFS(Aq);},UpdateTransferTarget:function(AK){if(this.Afn===AK)return;this.Afn=AK;
A.abo([this,this.A86,this.Bba],0);},Ar6:function(E){if(this.K&&this.K.Ar6)return this.
K.Ar6.apply(this,arguments);else return C.DeviceClass.Bvv.apply(this,arguments);
},Bvv:function(E){A.ab5("%s",JZ);},Bba:function(Aq){this.Ar6(Aq);},AsC:function(
){if(this.K&&this.K.AsC)return this.K.AsC.apply(this,arguments);else return C.DeviceClass.
Bv3.apply(this,arguments);},Bv3:function(){},AwZ:function(E){if(this.K&&this.K.AwZ
)return this.K.AwZ.apply(this,arguments);else return C.DeviceClass.Bvf.apply(this
,arguments);},Bvf:function(E){},AZ$:function(Aq){this.AwZ(Aq);},UpdatePremisesID:
function(Rm){if(this.Ut===Rm)return;this.Ut=Rm;A.abo([this,this.ASz,this.AZ$],0);
},AwS:function(E){if(this.K&&this.K.AwS)return this.K.AwS.apply(this,arguments);
else return C.DeviceClass.Bu5.apply(this,arguments);},Bu5:function(E){},AIO:function(
Aq){this.AwS(Aq);},UpdateMotherSelectionDriedOffFilter:function(AK){if(this.AbW===
AK)return;this.AbW=AK;A.abo([this,this.AEA,this.AIO],0);},AE9:function(E){if(this.
K&&this.K.AE9)return this.K.AE9.apply(this,arguments);else return C.DeviceClass.
BuQ.apply(this,arguments);},BuQ:function(E){},Ba0:function(Aq){this.AE9(Aq);},UpdateFreshCowSpan:
function(AK){if(this.AqQ===AK)return;this.AqQ=AK;A.abo([this,this.A8t,this.Ba0],
0);},UpdateUSBState:function(Bb4){if(this.AhN===Bb4)return;this.AhN=Bb4;A.abo([this
,this.Wu,this.Xd],0);},AFT:function(E){if(this.K&&this.K.AFT)return this.K.AFT.apply(
this,arguments);else return C.DeviceClass.Bvy.apply(this,arguments);},Bvy:function(
E){A.ab5("%s",E4);},Xd:function(Aq){this.AFT(Aq);},AnX:function(Ah2){if(this.K&&
this.K.AnX)return this.K.AnX.apply(this,arguments);else return C.DeviceClass.BvX.
apply(this,arguments);},BvX:function(Ah2){return A._NewObject(C.AjE,0);},Ard:function(
){if(this.K&&this.K.Ard)return this.K.Ard.apply(this,arguments);else return C.DeviceClass.
Bug.apply(this,arguments);},Bug:function(){return false;},AqB:function(Nq){if(this.
K&&this.K.AqB)return this.K.AqB.apply(this,arguments);else return C.DeviceClass.
Bub.apply(this,arguments);},Bub:function(Nq){},AFE:function(E){if(this.K&&this.K.
AFE)return this.K.AFE.apply(this,arguments);else return C.DeviceClass.Bvk.apply(
this,arguments);},Bvk:function(E){},Bwe:function(Aq){this.AFE(Aq);},UpdateSerialNumber:
function(AK){if(this.AhD===AK)return;this.AhD=AK;A.abo([this,this.Bk2,this.Bwe],
0);},Awn:function(E){if(this.K&&this.K.Awn)return this.K.Awn.apply(this,arguments
);else return C.DeviceClass.Buo.apply(this,arguments);},Buo:function(E){},AZ1:function(
Aq){this.Awn(Aq);},UpdateAnimalIdAutoGenerationMethod:function(Bb$){if(this.Ags===
Bb$)return;this.Ags=Bb$;A.abo([this,this.ASf,this.AZ1],0);},ACh:function(){return false;
},AGm:function(){return false;},AFG:function(E){if(this.K&&this.K.AFG)return this.
K.AFG.apply(this,arguments);else return C.DeviceClass.Bvl.apply(this,arguments);
},Bvl:function(E){},Ba9:function(Aq){this.AFG(Aq);},UpdateShutdownTimer:function(
AK){if(this.AUM===AK)return;this.AUM=AK;A.abo([this,this.A8Z,this.Ba9],0);},ArG:
function(E){if(this.K&&this.K.ArG)return this.K.ArG.apply(this,arguments);else return C.
DeviceClass.Bus.apply(this,arguments);},Bus:function(E){},BaP:function(Aq){this.
ArG(Aq);},UpdateAnimalListInfoItemMode:function(AK){if(this.Amt===AK)return;this.
Amt=AK;A.abo([this,this.A8f,this.BaP],0);},Asp:function(G){if(this.K&&this.K.Asp
)return this.K.Asp.apply(this,arguments);else return C.DeviceClass.BvT.apply(this
,arguments);},BvT:function(G){},BGa:function(s){this.Asp(s);},Ar9:function(E){if(
this.K&&this.K.Ar9)return this.K.Ar9.apply(this,arguments);else return C.DeviceClass.
BvE.apply(this,arguments);},BvE:function(E){},Bbf:function(Aq){this.Ar9(Aq);},Ar_:
function(E){if(this.K&&this.K.Ar_)return this.K.Ar_.apply(this,arguments);else return C.
DeviceClass.BvF.apply(this,arguments);},BvF:function(E){},Bbg:function(Aq){this.
Ar_(Aq);},UpdateWeightGainsLowString:function(AK){if(this.AHd===AK)return;this.AHd=
AK;A.abo([this,this.A9d,this.Bbg],0);},UpdateWeightGainsHighString:function(AK){
if(this.AHc===AK)return;this.AHc=AK;A.abo([this,this.A9c,this.Bbf],0);},Awp:function(
E){if(this.K&&this.K.Awp)return this.K.Awp.apply(this,arguments);else return C.DeviceClass.
Buv.apply(this,arguments);},Buv:function(E){},BaR:function(Aq){this.Awp(Aq);},UpdateAnimalTypesWeightGainsString:
function(AK){if(this.ABG===AK)return;this.ABG=AK;A.abo([this,this.A8i,this.BaR],
0);},Ar8:function(E){if(this.K&&this.K.Ar8)return this.K.Ar8.apply(this,arguments
);else return C.DeviceClass.BvD.apply(this,arguments);},BvD:function(E){},Bbe:function(
Aq){this.Ar8(Aq);},Ar$:function(E){if(this.K&&this.K.Ar$)return this.K.Ar$.apply(
this,arguments);else return C.DeviceClass.BvJ.apply(this,arguments);},BvJ:function(
E){},Bbj:function(Aq){this.Ar$(Aq);},UpdateWeightValueBirthString:function(AK){if(
this.AHg===AK)return;this.AHg=AK;A.abo([this,this.A9g,this.Bbj],0);},UpdateWeightGainsAverageString:
function(AK){if(this.AHb===AK)return;this.AHb=AK;A.abo([this,this.A9b,this.Bbe],
0);},AwC:function(E){if(this.K&&this.K.AwC)return this.K.AwC.apply(this,arguments
);else return C.DeviceClass.BuM.apply(this,arguments);},BuM:function(E){},Bv$:function(
Aq){this.AwC(Aq);},UpdateEvaluationAnimalType:function(Em){if(this.ACC===Em)return;
this.ACC=Em;A.abo([this,this.Bkx,this.Bv$],0);},UpdateStartScreen:function(AK){if(
this.AxD===AK)return;this.AxD=AK;A.abo([this,this.Bk3,this.Bwf],0);},Aw3:function(
E){if(this.K&&this.K.Aw3)return this.K.Aw3.apply(this,arguments);else return C.DeviceClass.
Bvm.apply(this,arguments);},Bvm:function(E){},Bwf:function(Aq){this.Aw3(Aq);},ADR:
function(){if(this.K&&this.K.ADR)return this.K.ADR.apply(this,arguments);else return C.
DeviceClass.Bue.apply(this,arguments);},Bue:function(){return 1;},ADS:function(){
if(this.K&&this.K.ADS)return this.K.ADS.apply(this,arguments);else return C.DeviceClass.
Buf.apply(this,arguments);},Buf:function(){return 1;},GetCommitCount:function(){
return 1895;},GetCommitEpoch:function(){return 1710328383;},GetCommitHash:function(
){return A.kR.Bhs;},GetVersionMajor:function(){return 0;},GetVersionMinor:function(
){return 9;},GetVersionRev:function(){return 9;},AFp:function(E){if(this.K&&this.
K.AFp)return this.K.AFp.apply(this,arguments);else return C.DeviceClass.Bu1.apply(
this,arguments);},Bu1:function(E){},Ba4:function(Aq){this.AFp(Aq);},UpdateMaximumAgeNewOnFarm:
function(AK){if(this.AD_===AK)return;this.AD_=AK;A.abo([this,this.A8I,this.Ba4],
0);},Aw9:function(E){if(this.K&&this.K.Aw9)return this.K.Aw9.apply(this,arguments
);else return C.DeviceClass.Bvw.apply(this,arguments);},Bvw:function(E){},A0g:function(
Aq){this.Aw9(Aq);},UpdateTransponderAssignmentIdChangeMethod:function(Ay0){if(this.
Ak3===Ay0)return;this.Ak3=Ay0;A.abo([this,this.ASI,this.A0g],0);},BatchResetPurchasedNoticePending:
function(){var B$=A._NewObject(C.Animal,0);var O;var AiW=0;var Adi=A._GetAutoObject(
C.Device).Am.Filter;var Be=A._GetAutoObject(C.Helper).ACX();A._GetAutoObject(C.Device
).Am.Bl(Be);for(O=0;O<A._GetAutoObject(C.Device).Am.Ca();O++){B$.EM(O,A._GetAutoObject(
C.Device).Am);B$.Ae2(false);B$.Cq(A._GetAutoObject(C.Device).Am);AiW++;}A._GetAutoObject(
C.Device).Am.Bl(Adi);return AiW;},AE2:function(E){if(this.K&&this.K.AE2)return this.
K.AE2.apply(this,arguments);else return C.DeviceClass.BuE.apply(this,arguments);
},BuE:function(E){},AZ2:function(Aq){this.AE2(Aq);},UpdateDataExportDestination:
function(AK){if(this.VM===AK)return;this.VM=AK;A.abo([this,this.ASk,this.AZ2],0);
},BmQ:function(E){},UpdateMassRecordingAutomatic:function(AK){if(this.ARy===AK)return;
this.ARy=AK;A.abo([this,this.BkP,this.BmQ],0);},Ng:function(E){if(this.K&&this.K.
Ng)return this.K.Ng.apply(this,arguments);else return C.DeviceClass.BvK.apply(this
,arguments);},BvK:function(E){},Bwi:function(Aq){this.Ng(Aq);},UpdateWhereAbouts:
function(AfI){if(this.WhereAbouts===AfI)return;this.WhereAbouts=AfI;A.abo([this,
this.Awk,this.Bwi],0);},ArD:function(E){if(this.K&&this.K.ArD)return this.K.ArD.
apply(this,arguments);else return C.DeviceClass.Buj.apply(this,arguments);},Buj:
function(E){},BaK:function(Aq){this.ArD(Aq);},ArE:function(E){if(this.K&&this.K.
ArE)return this.K.ArE.apply(this,arguments);else return C.DeviceClass.Buk.apply(
this,arguments);},Buk:function(E){},BaL:function(Aq){this.ArE(Aq);},UpdateActiveMassRecordingFields:
function(AK){if(this.ABA===AK)return;this.ABA=AK;A.abo([this,this.A7_,this.BaK],
0);},UpdateActiveMassRecordingFieldsOrder:function(AK){if(this.ABB===AK)return;this.
ABB=AK;A.abo([this,this.A7$,this.BaL],0);},Asm:function(G){if(this.K&&this.K.Asm
)return this.K.Asm.apply(this,arguments);else return C.DeviceClass.BvO.apply(this
,arguments);},BvO:function(G){},BF7:function(s){this.Asm(s);},AFn:function(E){if(
this.K&&this.K.AFn)return this.K.AFn.apply(this,arguments);else return C.DeviceClass.
BuY.apply(this,arguments);},BuY:function(E){},AIM:function(Aq){this.AFn(Aq);},UpdateMassRecordingDateOfBirthMandatory:
function(AK){if(this.AeL===AK)return;this.AeL=AK;A.abo([this,this.AEx,this.AIM],
0);},AFm:function(E){this.UpdateMassRecordingCounter(E);},UpdateMassRecordingCounter:
function(AK){if(this.AvV===AK)return;this.AvV=AK;A.abo([this,this.A8G,this.AFm],
0);},Ajz:function(){if(this.K&&this.K.Ajz)return this.K.Ajz.apply(this,arguments
);else return C.DeviceClass.Bt$.apply(this,arguments);},Bt$:function(){return false;
},Aqo:function(){if(this.K&&this.K.Aqo)return this.K.Aqo.apply(this,arguments);else
return C.DeviceClass.Bt_.apply(this,arguments);},Bt_:function(){return false;},Aqn:
function(){if(this.K&&this.K.Aqn)return this.K.Aqn.apply(this,arguments);else return C.
DeviceClass.Bt9.apply(this,arguments);},Bt9:function(){return false;},AuO:function(
){if(this.K&&this.K.AuO)return this.K.AuO.apply(this,arguments);else return C.DeviceClass.
Bua.apply(this,arguments);},Bua:function(){return false;},AwP:function(E){if(this.
K&&this.K.AwP)return this.K.AwP.apply(this,arguments);else return C.DeviceClass.
Bu0.apply(this,arguments);},Bu0:function(E){},Ba3:function(Aq){this.AwP(Aq);},UpdateMaxWeightValuePrecision:
function(AK){if(this.OK===AK)return;this.OK=AK;A.abo([this,this.A8H,this.Ba3],0);
},AwW:function(E){if(this.K&&this.K.AwW)return this.K.AwW.apply(this,arguments);
else return C.DeviceClass.Bva.apply(this,arguments);},Bva:function(E){},Ba7:function(
Aq){this.AwW(Aq);},UpdateNoNaisIdListActions:function(AK){if(this.ARZ===AK)return;
this.ARZ=AK;A.abo([this,this.A8L,this.Ba7],0);},ResetNoNaisIdListActions:function(
G){if(this.K&&this.K.ResetNoNaisIdListActions)return this.K.ResetNoNaisIdListActions.
apply(this,arguments);else return C.DeviceClass.BvQ.apply(this,arguments);},BvQ:
function(G){},BF9:function(s){this.ResetNoNaisIdListActions(s);},AwX:function(E){
if(this.K&&this.K.AwX)return this.K.AwX.apply(this,arguments);else return C.DeviceClass.
Bvb.apply(this,arguments);},Bvb:function(E){},Ba8:function(Aq){this.AwX(Aq);},UpdateNoTransponderListActions:
function(AK){if(this.AR4===AK)return;this.AR4=AK;A.abo([this,this.A8M,this.Ba8],
0);},ResetNoTransponderListActions:function(G){if(this.K&&this.K.ResetNoTransponderListActions
)return this.K.ResetNoTransponderListActions.apply(this,arguments);else return C.
DeviceClass.BvR.apply(this,arguments);},BvR:function(G){},BF_:function(s){this.ResetNoTransponderListActions(
s);},Axd:function(E){if(this.K&&this.K.Axd)return this.K.Axd.apply(this,arguments
);else return C.DeviceClass.BvL.apply(this,arguments);},BvL:function(E){},Bbk:function(
Aq){this.Axd(Aq);},UpdateYoungNoTransponderListActions:function(AK){if(this.AVP===
AK)return;this.AVP=AK;A.abo([this,this.A9i,this.Bbk],0);},ResetYoungNoTransponderListActions:
function(G){if(this.K&&this.K.ResetYoungNoTransponderListActions)return this.K.ResetYoungNoTransponderListActions.
apply(this,arguments);else return C.DeviceClass.BvU.apply(this,arguments);},BvU:
function(G){},BGb:function(s){this.ResetYoungNoTransponderListActions(s);},Aw_:function(
E){if(this.K&&this.K.Aw_)return this.K.Aw_.apply(this,arguments);else return C.DeviceClass.
Bvx.apply(this,arguments);},Bvx:function(E){},A0h:function(Aq){this.Aw_(Aq);},UpdateTransponderUnlinkIdChangeMethod:
function(Ay0){if(this.An8===Ay0)return;this.An8=Ay0;A.abo([this,this.ASJ,this.A0h
],0);},AEq:function(){return this.KH;},Av6:function(){return this.Aa5;},Av9:function(
){return this.AmC;},ASC:function(){return this.ScanState;},AEy:function(){return this.
MeasureState;},AEC:function(){return this.Kv;},A8C:function(){return this.Language;
},Arw:function(){return this.TemperatureUnit;},A8n:function(){return this.AM0;},
ASt:function(){return this.AEd;},Awj:function(){return this.OverlayMenu;},A87:function(
){return this.Z1;},ASE:function(){return this.SyncState;},A88:function(){return this.
AsM;},AED:function(){return this.AVy;},ASB:function(){return this.RatingMode;},Art:
function(){return this.AmQ;},ASG:function(){return this.AVe;},BkV:function(){return this.
AT1;},Bkj:function(){return this.AutoRegistrationMode;},ASD:function(){return this.
OR;},Uf:function(){return this.A1;},Ug:function(){return this.AF;},AEE:function(
){return this.KX;},ASs:function(){return this.MassUnit;},A79:function(){return this.
Ph;},ASe:function(){return this.Auz;},A8j:function(){return this.AutoActions;},PM:
function(){return this.AnimalType;},A9e:function(){return this.WeightRecordingMode;
},ASy:function(){return this.AF9;},AEv:function(){return this.HB;},A8c:function(
){return this.AdR;},A9f:function(){return this.WeightRecordingScope;},Wt:function(
){return this.Gender;},Awc:function(){return this.Aq3;},Awb:function(){return this.
Aq2;},AEs:function(){return this.JH;},A8e:function(){return this.AL_;},A8q:function(
){return this.AmP;},AEr:function(){return this.D9;},A9a:function(){return this.AVA;
},A8s:function(){return this.AOB;},A8h:function(){return this.ABF;},A82:function(
){return this.AGT;},A83:function(){return this.AGU;},A8u:function(){return this.
AqR;},A8K:function(){return this.AEf;},A8J:function(){return this.AEe;},Awg:function(
){return this.ARM;},Awf:function(){return this.ARL;},A8m:function(){return this.
Aqs;},A77:function(){return this.ABz;},A78:function(){return this.Aqe;},Anq:function(
){return this.Ig;},ASl:function(){return this.ACu;},ASm:function(){return this.ACv;
},AEw:function(){return this.Au0;},Ant:function(){return this.AjU;},ASu:function(
){return this.Av1;},Awh:function(){return this.ARN;},Awa:function(){return this.
EartagNrAssignmentMode;},Av8:function(){return this.Breed;},BkQ:function(){return this.
Su;},BkO:function(){return this.QV;},Blb:function(){return this.ST;},Bkm:function(
){return this.RU;},A8o:function(){return this.ANY;},AEt:function(){return this.Aqq;
},ASH:function(){return this.AxL;},A86:function(){return this.Afn;},ASz:function(
){return this.Ut;},AEA:function(){return this.AbW;},A8t:function(){return this.AqQ;
},Wu:function(){return this.AhN;},Bk2:function(){return this.AhD;},ASf:function(
){return this.Ags;},A8Z:function(){return this.AUM;},A8f:function(){return this.
Amt;},A9c:function(){return this.AHc;},A9d:function(){return this.AHd;},A8i:function(
){return this.ABG;},A9b:function(){return this.AHb;},A9g:function(){return this.
AHg;},Bkx:function(){return this.ACC;},Bk3:function(){return this.AxD;},A8I:function(
){return this.AD_;},ASI:function(){return this.Ak3;},ASk:function(){return this.
VM;},BkP:function(){return this.ARy;},Awk:function(){return this.WhereAbouts;},A7_:
function(){return this.ABA;},A7$:function(){return this.ABB;},AEx:function(){return this.
AeL;},A8G:function(){return this.AvV;},A8H:function(){return this.OK;},A8L:function(
){return this.ARZ;},A8M:function(){return this.AR4;},A9i:function(){return this.
AVP;},ASJ:function(){return this.An8;},_Init:function(aArg){C.Table._Init.call(this.
Am={I:this},0);C.Table._Init.call(this.Bt={I:this},0);C.Table._Init.call(this.Agq={
I:this},0);A.Core.A$p._Init.call(this.AnP={I:this},0);C.Table._Init.call(this.Pl={
I:this},0);this.__proto__=C.DeviceClass;this.Am.OnSetId(0);this.Bt.OnSetId(1);this.
Agq.OnSetId(3);this.Pl.OnSetId(4);this.OR=A._NewObject(C.Transponder,0);this.Su=
A._NewObject(C.AxB,0);this.QV=A._NewObject(C.Avr,0);this.ST=A._NewObject(C.Avr,0
);this.RU=A._NewObject(C.AxB,0);var Lw=this._variants();if(Lw){this.K={};Lw._Init.
call(this,aArg);}A.h7++;},_Done:function(){if(this.K)this.K._Done.call(this);this.
__proto__=null;this.Am._Done();this.Bt._Done();this.Agq._Done();this.AnP._Done();
this.Pl._Done();A.h7--;},_ReInit:function(){this.Am._ReInit();this.Bt._ReInit();
this.Agq._ReInit();this.AnP._ReInit();this.Pl._ReInit();if(this.K)this.K._ReInit.
call(this);},_Mark:function(D){var B;if((B=this.OR)&&(B._cycle!=D))B._Mark(B._cycle=
D);if((B=this.Su)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.QV)&&(B._cycle!=
D))B._Mark(B._cycle=D);if((B=this.ST)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.
RU)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Am)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Bt)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Agq)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.AnP)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Pl)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);if(this.K
)this.K._Mark(D);},_variants:function(){return A.acs.DeviceClass._variants();},K:
null,I:null,_cycle:0,_observers:null,_className:"Device::DeviceClass"};C.Device={
_Init:function(){C.DeviceClass._Init.call(this,0);},_ReInit:function(){},_variants:
function(){return this;},_this:null};C.ScreenType={UNDEFINED:0,Sleep:1,Boot:2,Home:
3,Charge:4,Sync:5,Settings:6,EditAnimalData:7,AnimalList:8,AnimalListFilter:9,AnimalActionTemperature:
10,AnimalActionRate:11,AlarmList:12,ControlMeasure:13,ControlList:14,RangeTest:15
,DateTimeSettings:16,TemperatureSettings:17,DeviceSettings:18,RegistrationSettings:
19,WatchList:20,AnimalActionWeighing:21,UnitsSettings:22,WeightGainSettings:23,AnimalActionActions:
24,EvaluationMenuMain:25,NewAnimals:26,MassRecordingScreen:27,NewAnimalManualData:
28,AnimalActionUnregister:29,AnimalActionNewbornCare:30,NewAnimalTransponderData:
31,SetTransponderScreen:32,WeightListScreen:33,AutoActionScanScreen:34,ManualActionScanScreen:
35,AnimalSingleInfoScreen:36,InitializationSettings:37,ControlledPowerOff:38,ChargeWarning:
39,AlarmListFilter:40,WatchListFilter:41,DataAcquisitionSettings:42,FreshCowList:
43,FreshCowListFilter:44,SetSaveTransponderScreen:45,NoTransponderList:46,NoTransponderListFilter:
47,AnimalActionPerished:48,NewAnimalSetTransponderScreen:49,AnimalMultiInfoScreen:
50,ActionList:51,ActionListFilter:52,Update:53,NewAnimalCalvingData:54,NewAnimalsSetTransponderScreen:
55,EvaluationTemperatures:56,EvaluationWeights:57,EvaluationRatings:58,EvaluationLosses:
59,TemperatureMeasurement:60,DryCowList:61,DryCowListFilter:62,DeviceMain:63,DeviceService:
64,DeviceCheck:65,EvaluationMenuWeights:66,EvaluationBirthWeights:67,EvaluationWeightsRecent:
68,ListsMain:69,ListsIdManagement:70,NoNaisIdList:71,NoNaisIdListFilter:72,RegistrationsListFilter:
73,BirthRegistrationsList:74,AnimalRegistrationDetails:75,PremisesSettings:76,NewMenu:
77,NewAnimalLoss:78,MotherScanScreen:79,SetSaveNaisIdScreen:80,EditAnimalDataNaisId:
81,DeviceInfo:82,DeviceDatamanagement:83,AnimalEvaluationFilter:84,YoungNoTransponderList:
85,YoungNoTransponderListFilter:86,RegistrationPresettingsSettings:87,RegistrationAutomaticSettings:
88,TransponderAssignmentSettings:89,PurchasedAnimalsList:90,TextInput:91,DeviceAnimalDataMenu:
92,DeviceDeviceDataMenu:93,AnimalActions:94,TransponderUnlinkSettings:95,LAST:96
};C.Operator={Equal:0,None:1,Greater:2,Less:3,Contains:4,Unequal:5};C.MeasureState={
Idle:0,Progress:1,Prediction:2,Ready:3,Error:4,LAST:5};C.StringFilterCriterion={
A4:A.jV,Abk:function(){var Av=A._NewObject(C.StringFilterCriterion,0);Av.Fg(this
);return Av;},Fg:function(AH){C.FilterCriterion.Fg.call(this,AH);var Av=(C.StringFilterCriterion.
isPrototypeOf(AH)?AH:null);if(!!Av)this.A4=Av.A4;},_Init:function(aArg){C.FilterCriterion.
_Init.call(this,aArg);this.__proto__=C.StringFilterCriterion;},_className:"Device::StringFilterCriterion"
};C.Table={CE:function(Ad,A3){if(this.K&&this.K.CE)return this.K.CE.apply(this,arguments
);else return C.ITable.CE.apply(this,arguments);},VU:function(Ad,A3){if(this.K&&
this.K.VU)return this.K.VU.apply(this,arguments);else return C.ITable.VU.apply(this
,arguments);},H1:function(Ad,A3){if(this.K&&this.K.H1)return this.K.H1.apply(this
,arguments);else return C.ITable.H1.apply(this,arguments);},OnSetId:function(E){
if(this.K&&this.K.OnSetId)return this.K.OnSetId.apply(this,arguments);else return C.
ITable.OnSetId.apply(this,arguments);},Ca:function(){if(this.K&&this.K.Ca)return this.
K.Ca.apply(this,arguments);else return C.ITable.Ca.apply(this,arguments);},Bl:function(
E){if(this.K&&this.K.Bl)return this.K.Bl.apply(this,arguments);else return C.ITable.
Bl.apply(this,arguments);},VV:function(Ad,A3){if(this.K&&this.K.VV)return this.K.
VV.apply(this,arguments);else return C.ITable.VV.apply(this,arguments);},Sf:function(
Ad,A3){if(this.K&&this.K.Sf)return this.K.Sf.apply(this,arguments);else return C.
ITable.Sf.apply(this,arguments);},Oy:function(){if(this.K&&this.K.Oy)return this.
K.Oy.apply(this,arguments);else return C.ITable.Oy.apply(this,arguments);},OA:function(
AoQ){if(this.K&&this.K.OA)return this.K.OA.apply(this,arguments);else return C.ITable.
OA.apply(this,arguments);},YF:function(){if(this.K&&this.K.YF)return this.K.YF.apply(
this,arguments);else return C.ITable.YF.apply(this,arguments);},ZK:function(Ad,A3
,C0){if(this.K&&this.K.ZK)return this.K.ZK.apply(this,arguments);else return C.ITable.
ZK.apply(this,arguments);},Hj:function(Ad,A3,C0){if(this.K&&this.K.Hj)return this.
K.Hj.apply(this,arguments);else return C.ITable.Hj.apply(this,arguments);},ZJ:function(
Ad,A3,C0){if(this.K&&this.K.ZJ)return this.K.ZJ.apply(this,arguments);else return C.
ITable.ZJ.apply(this,arguments);},MB:function(Ad,A3,C0){if(this.K&&this.K.MB)return this.
K.MB.apply(this,arguments);else return C.ITable.MB.apply(this,arguments);},ZI:function(
Ad,A3,C0){if(this.K&&this.K.ZI)return this.K.ZI.apply(this,arguments);else return C.
ITable.ZI.apply(this,arguments);},Lc:function(aColumn,A7){if(this.K&&this.K.Lc)return this.
K.Lc.apply(this,arguments);else return C.ITable.Lc.apply(this,arguments);},KN:function(
Ad,A3){if(this.K&&this.K.KN)return this.K.KN.apply(this,arguments);else return C.
ITable.KN.apply(this,arguments);},SK:function(Ad,A3,C0){if(this.K&&this.K.SK)return this.
K.SK.apply(this,arguments);else return C.ITable.SK.apply(this,arguments);},AgQ:function(
aColumn,A7){if(this.K&&this.K.AgQ)return this.K.AgQ.apply(this,arguments);else return C.
ITable.AgQ.apply(this,arguments);},Hi:function(){if(this.K&&this.K.Hi)return this.
K.Hi.apply(this,arguments);else return C.ITable.Hi.apply(this,arguments);},AjJ:function(
aColumn,A7){if(this.K&&this.K.AjJ)return this.K.AjJ.apply(this,arguments);else return C.
ITable.AjJ.apply(this,arguments);},Aej:function(aColumn,A7){if(this.K&&this.K.Aej
)return this.K.Aej.apply(this,arguments);else return C.ITable.Aej.apply(this,arguments
);},HG:function(){if(this.K&&this.K.HG)return this.K.HG.apply(this,arguments);else
return C.ITable.HG.apply(this,arguments);},Abs:function(){if(this.K&&this.K.Abs)
return this.K.Abs.apply(this,arguments);else return C.ITable.Abs.apply(this,arguments
);},QE:function(){if(this.K&&this.K.QE)return this.K.QE.apply(this,arguments);else
return C.ITable.QE.apply(this,arguments);},_Init:function(aArg){C.ITable._Init.call(
this,aArg);this.__proto__=C.Table;var Lw=this._variants();if(Lw){this.K={};Lw._Init.
call(this,aArg);}},_Done:function(){if(this.K)this.K._Done.call(this);this.__proto__=
C.ITable;C.ITable._Done.call(this);},_ReInit:function(){C.ITable._ReInit.call(this
);if(this.K)this.K._ReInit.call(this);},_Mark:function(D){C.ITable._Mark.call(this
,D);if(this.K)this.K._Mark(D);},_variants:function(){return A.acs.Table._variants(
);},K:null,_className:"Device::Table"};C.TableId={Animal:0,Rating:1,Undefined:2,
AnimalGroup:3,CalfDeregistrations:4};C.ScanState={Idle:0,Progress:1,IdScanned:2,
NotFound:3,Error:4,LAST:5};C.RatedAttribute={None:0,Feed:1,Appearance:2,Respiratory:
3,Faeces:4};C.ConverterClass={M1:null,Ak0:function(AoO){var BcI;var Aul=this.AU5(
AoO/100,0,A._GetAutoObject(C.Device).TemperatureUnit);BcI=A.abk(Aul,0,1);return BcI;
},A$x:function(Nn){if(Nn<=0)return 0;else if(Nn<=1)return 5;else if(Nn<=2)return 3;
else if(Nn<=4)return 2;else if(Nn<=6)return 1;else if(Nn<=8)return 4;else return 0;
},AdZ:function(Nn){var a=0;switch(Nn){case 3:a=2;break;case 2:a=4;break;case 1:a=
6;break;case 0:a=0;break;case 4:a=8;break;case 5:a=1;break;default:A.ab5("%s",N_
);}return a;},AsE:function(Em,Rq){var Nr=A._GetAutoObject(C.Converter).Ajl(Rq,Em
);switch(Nr){case 3:return 1;case 2:return 2;case 1:return 3;case 0:return 4;default:
throw new Error(P4+Nr.toFixed());}},AhL:function(){var B;var D8=A._NewObject(A.Core.
Bs,0).Initialize(A._GetAutoObject(C.Helper).Dv());D8.AnC(0);D8.AnF(0);D8.AnI(0);
return((B=(D8.JO()|0))<0)?B+0x100000000:B;},Bhw:function(Atk){var Dn;switch(Atk){
case 36:Dn=MF;break;case 40:Dn=S4;break;case 56:Dn=UO;break;case 70:Dn=Z5;break;
case 100:Dn=W1;break;case 124:Dn=Iq;break;case 156:Dn=UP;break;case 158:Dn=Z6;break;
case 191:Dn=W2;break;case 196:Dn=Z7;break;case 203:Dn=W3;break;case 208:Dn=Z8;break;
case 233:Dn=Z9;break;case 246:Dn=UQ;break;case 250:Dn=W4;break;case 276:Dn=P5;break;
case 300:Dn=Z_;break;case 348:Dn=O3;break;case 372:Dn=Ri;break;case 380:Dn=W5;break;
case 392:Dn=W6;break;case 428:Dn=W7;break;case 440:Dn=W8;break;case 442:Dn=Z$;break;
case 470:Dn=W9;break;case 528:Dn=W_;break;case 578:Dn=S5;break;case 616:Dn=UR;break;
case 620:Dn=US;break;case 642:Dn=AcN;break;case 643:Dn=S6;break;case 703:Dn=Aaa;
break;case 705:Dn=Afx;break;case 724:Dn=Aab;break;case 752:Dn=W$;break;case 756:
Dn=Aac;break;case 792:Dn=Aad;break;case 804:Dn=AhQ;break;case 826:Dn=J0;break;case
840:Dn=Aae;break;default:Dn=Atk.toFixed();}return Dn;},Ak9:function(MK){var Aau;
if((MK<10000)&&(A._GetAutoObject(C.Device).OK===2))Aau=2;else if((MK<100000)&&!!
A._GetAutoObject(C.Device).OK)Aau=1;else Aau=0;return this.S2(MK,Aau,false);},AxY:
function(MK,Aau){return this.S2(MK,Aau,false);},S2:function(MK,Aau,BzF){var B;var
AlC=A.jV;switch(A._GetAutoObject(C.Device).MassUnit){case 0:if(BzF)AlC=A.abl(MK,
0,0);else{var Bd5=MK<0;if(Aau<3)MK=MK+(((Bd5?-1:1)*5)*(Math.pow(10,2-Aau)|0));AlC=(((((
B=MK)>-2147483648)?Math.abs(B):B)/1000)|0).toFixed();if(Aau>0)AlC=AlC+(Lv+A.abV(
A.abl((((B=MK)>-2147483648)?Math.abs(B):B)%1000,3,10),Aau));if(Bd5)AlC=AhR+AlC;}
break;case 1:AlC=A.abk(MK/453.592,0,Aau);break;default:A.ab5("%s%s",Aog,A._GetAutoObject(
C.Device).MassUnit.toFixed());}return AlC;},Rf:function(Jf){var A4f=Jf.toFixed();
var Bgk=A4f.length;if((Bgk>=14)&&(Bgk<=15)){var A1_=this.AxO(Jf);var Byu=A._GetAutoObject(
C.Converter).Bhw(A1_);A4f=(Byu+N$)+A.abm(A._GetAutoObject(C.Helper).Sd(Jf,0,12),
12,10);}return A4f;},AmT:function(L3){switch(L3){case 0:return A.aaL(A.ach.AQt);
case 1:return A.aaL(A.ach.ADz);case 2:return A.aaL(A.ach.ADE);default:{A.ab5("%s%e"
,Xa,L3);return null;}}},A4T:function(Bx2){switch(Bx2){case 0:return A.aaL(A.ach.
AvB);case 1:return A.aaL(A.ach.ADv);case 2:return A.aaL(A.ach.AQn);default:throw new
Error(Aoh);}},AdX:function(AJh){switch(AJh){case 0:return A.aaL(A.ach.AjV);case 2:
return A.aaL(A.ach.Am2);case 1:return A.aaL(A.ach.AbE);case 3:switch(A._GetAutoObject(
C.Device).MassUnit){case 0:return A.aaL(A.ach.AvK);case 1:return A.aaL(A.ach.AvL
);default:throw new Error(AhS+A._GetAutoObject(C.Device).MassUnit.toFixed());}break;
case 4:return A.aaL(A.ach.APP);case 5:return A.aaL(A.ach.APQ);case 6:return A.aaL(
A.ach.APV);case 7:return A.aaL(A.ach.APd);case 8:case 13:return A.aaL(A.ach.APk);
case 9:return A.aaL(A.ach.AC7);case 10:return A.aaL(A.ach.APj);case 12:return A.
aaL(A.ach.APl);case 11:return A.aaL(A.ach.ADt);default:throw new Error(AhT+AJh.toFixed(
));}},BgW:function(Ay4){switch(Ay4){case 0:return A.aaL(A.ach.ADC);case 3:return A.
aaL(A.ach.Am2);case 1:return A.aaL(A.ach.AbE);case 2:return A._GetAutoObject(A.acj.
DV).Bc7();default:throw new Error(AhT+Ay4.toFixed());}},Bhv:function(Atk){switch(
Atk){case 977:return AcO;case 978:return UT;case 980:return Aoi;case 981:return Aoj;
case 982:return Aok;case 983:return Aol;case 984:return Afy;case 985:return Ala;
default:return A.aaR(A.acf.Unknown);}},BhP:function(AcZ){switch(AcZ){case 1:return 0x278A;
case 2:return 0x278B;case 3:return 0x278C;case 4:return 0x278D;case 5:return 0x278E;
case 6:return 0x278F;case 7:return 0x2790;case 8:return 0x2791;case 9:return 0x2792;
case 10:return 0x2793;default:return 0x20;}},BpB:function(Jf){if(!Jf)return-1;return(
Jf%100000000)|0;},Bij:function(AoN,aFilter){var B;if(!aFilter)return Ax0;var Apf=
Ax1;var Av=aFilter.AOJ();while(!!Av){Apf=Apf+A._GetAutoObject(C.Helper).A6z(AoN,
Av);Av=aFilter.AOO(Av);if(!!Av)Apf=Apf+O4;}Apf=Apf+Rj;return Apf;},A7e:function(
BbO){var MH=0;switch(BbO){case 14:MH=2;break;case 13:MH=4;break;case 6:MH=36;break;
case 11:MH=9;break;case 0:MH=39;break;case 10:MH=26;break;case 12:MH=12;break;case
5:MH=14;break;case 3:MH=15;break;case 1:MH=10;break;case 8:MH=16;break;case 4:MH=
20;break;case 15:MH=27;break;case 9:MH=31;break;case 2:MH=13;break;case 7:MH=35;
break;case 16:MH=37;break;default:A.ab5("%s%e",Ax2,BbO);}return MH;},BgV:function(
Ay4){switch(Ay4){case 0:return 1;case 3:return 0;case 1:return 2;case 2:switch(A.
_GetAutoObject(C.Device).MassUnit){case 0:return 3;case 1:return 4;default:throw new
Error(AhS+A._GetAutoObject(C.Device).MassUnit.toFixed());}break;default:throw new
Error(AhT+Ay4.toFixed());}},BgX:function(AoY){switch(AoY){case 0:return A.aaL(A.
ach.APM);case 1:return A.aaL(A.ach.ADC);case 9:return A.aaL(A.ach.APX);case 4:return A.
aaL(A.ach.AGk);case 6:return A.aaL(A.ach.Ask);case 8:return A.aaL(A.ach.Avv);case
2:return A.aaL(A.ach.AbE);case 3:return A.aaL(A.ach.Am2);case 10:switch(A._GetAutoObject(
C.Device).MassUnit){case 0:return A.aaL(A.ach.AvK);case 1:return A.aaL(A.ach.AvL
);default:throw new Error(AhS+A._GetAutoObject(C.Device).MassUnit.toFixed());}break;
case 7:case 5:case 11:case 12:case 13:case 14:case 18:case 15:case 16:case 17:return A.
aaL(A.aci.TJ);default:throw new Error(UU+AoY.toFixed());}},ANx:function(Atk){switch(
Atk){case 40:return 1;case 56:return 3;case 70:return 2;case 100:return 4;case 124:
return 5;case 156:return 7;case 158:return 36;case 191:return 17;case 196:return 8;
case 203:return 9;case 208:return 11;case 233:return 12;case 246:return 14;case 250:
return 15;case 276:return 10;case 300:return 16;case 348:return 18;case 372:return 19;
case 380:return 20;case 392:return 21;case 428:return 24;case 440:return 22;case
442:return 23;case 470:return 25;case 528:return 26;case 578:return 27;case 616:
return 28;case 620:return 29;case 642:return 30;case 643:return 31;case 703:return 34;
case 705:return 33;case 724:return 13;case 752:return 32;case 756:return 6;case 792:
return 35;case 804:return 37;case 826:return 38;case 840:return 39;default:return 0;
}},ZZ:function(Jf){var A1_=this.AxO(Jf);return this.ANx(A1_);},AxO:function(Jf){
return A._GetAutoObject(C.Helper).Sd(Jf,12,3)|0;},A$Q:function(AoS,Em){if(AoS<A.
_GetAutoObject(C.Helper).AC3(Em))return 1;else if(AoS<A._GetAutoObject(C.Helper).
AC2(Em))return 2;else return 3;},ACQ:function(BxG){switch(BxG){case 1:return 1;case
2:return 2;case 3:return 3;case 4:return 4;case 5:return 5;case 6:return 6;case 7:
return 7;case 8:return 8;case 9:return 9;case 10:return 10;case 11:return 11;case
12:return 12;case 13:return 13;case 14:return 14;case 15:return 15;case 16:return 16;
default:return 0;}},AU5:function(A7,AI$,AJa){if(AI$===AJa)return A7;if(!AI$&&(AJa===
1)){var result=((A7*9)/5)+32;return result;}if((AI$===1)&&!AJa){var result=((A7-
32)*5)/9;return result;}throw new Error(((AsS+AI$.toFixed())+Ax3)+AJa.toFixed());
},A6i:function(Eb){switch(Eb){case 0:return Ax4;case 1:return A.jV;case 2:return Ax5;
case 3:return Aom;case 4:return A.aaR(A.acf.Contains);case 5:return Afz;default:{
A.ab5("%s%e",Aon,Eb);return A.jV;}}},A5g:function(AcY){return this.M1.Aei(AcY);}
,Bi3:function(AcY){return this.M1.AmE(AcY);},Bhe:function(Atj){var AAn=0;switch(
Atj){case 0:AAn=1;break;case 1:AAn=2;break;case 2:AAn=3;break;case 3:AAn=4;break;
default:A.ab5("%s%e",IR,Atj);}return AAn;},Ajl:function(A0y,Em){if(A0y>=A._GetAutoObject(
C.Helper).A6u(Em))return 3;else if(A0y>=A._GetAutoObject(C.Helper).Avm(Em))return 2;
else if(A0y<A._GetAutoObject(C.Device).Z1)return 0;else return 1;},Aqy:function(
MH){var BP=-1;switch(MH){case 0:BP=0;break;case 1:BP=40;break;case 2:BP=70;break;
case 3:BP=56;break;case 4:BP=100;break;case 5:BP=124;break;case 6:BP=756;break;case
7:BP=156;break;case 8:BP=196;break;case 9:BP=203;break;case 10:BP=276;break;case
11:BP=208;break;case 12:BP=233;break;case 13:BP=724;break;case 14:BP=246;break;case
15:BP=250;break;case 16:BP=300;break;case 17:BP=191;break;case 18:BP=348;break;case
19:BP=372;break;case 20:BP=380;break;case 21:BP=392;break;case 22:BP=440;break;case
23:BP=442;break;case 24:BP=428;break;case 25:BP=470;break;case 26:BP=528;break;case
27:BP=578;break;case 28:BP=616;break;case 29:BP=620;break;case 30:BP=642;break;case
31:BP=643;break;case 32:BP=752;break;case 33:BP=705;break;case 34:BP=703;break;case
35:BP=792;break;case 36:BP=158;break;case 37:BP=804;break;case 38:BP=826;break;case
39:BP=840;break;default:throw new Error(Aoo+MH.toFixed());}return BP;},BpF:function(
Jf){return A._GetAutoObject(C.Helper).Sd(Jf,8,2)|0;},BpE:function(Jf){var BzB=this.
BpF(Jf);return this.ACQ(BzB);},_Init:function(aArg){C.M1._Init.call(this.M1={I:this
},0);this.__proto__=C.ConverterClass;A.h7++;},_Done:function(){this.__proto__=null;
this.M1._Done();A.h7--;},_ReInit:function(){this.M1._ReInit();},_Mark:function(D
){var B;if((B=this.M1)._cycle!=D)B._Mark(B._cycle=D);if((B=this.I)&&(B._cycle!=D
))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:"Device::ConverterClass"
};C.Converter={_Init:function(){C.ConverterClass._Init.call(this,0);},_ReInit:function(
){},_variants:function(){return this;},_this:null};C.MinLowTemperature=3000;C.MaxHighTemperature=
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
false,IsAlarm:false,EM:function(Ad,AI){var HA=C.Row.EM.call(this,Ad,AI);if(HA&&!
!AI){this.OnSetId(AI.CE(Ad,0));this.SA(AI.CE(Ad,1));this.Ab6(AI.CE(Ad,2));this.AnE(
AI.CE(Ad,3));this.Q0(AI.HF(Ad,4));this.JQ(AI.AOL(Ad,7));this.Akv(AI.BiB(Ad,6));this.
EB(AI.AmU(Ad,14));this.Q2(AI.KN(Ad,22));this.Ne(AI.KN(Ad,26));this.Axc(AI.I2(Ad,
13));this.Ae0(AI.H1(Ad,8));this.Aw6(AI.HF(Ad,15));this.ATy(AI.HF(Ad,31));this.Ae5(
AI.A6I(Ad,5));this.AS7(AI.I2(Ad,17));this.Ul(AI.H1(Ad,11));this.ATx(AI.HF(Ad,16)
);this.ATA(AI.HF(Ad,30));this.AkB(AI.H1(Ad,9));this.Ae3(AI.H1(Ad,12));this.ATz(AI.
HF(Ad,20));this.Aw8(AI.HF(Ad,21));this.Ahl(AI.H1(Ad,10));this.AwK(AI.H1(Ad,27));
this.AFg(AI.ACY(Ad,18));this.AFK(AI.HF(Ad,19));this.AwF(AI.ACY(Ad,23));this.Aw7(
AI.HF(Ad,24));this.ASZ(AI.CE(Ad,25));this.Aww(AI.HF(Ad,28));this.AwL(AI.CE(Ad,29
));this.ArT(AI.H1(Ad,38));this.NY(AI.BiC(Ad,32));this.Akx(AI.BiH(Ad,33));this.AnG(
AI.KN(Ad,35));this.Ng(AI.AOT(Ad,34));this.Ae2(AI.H1(Ad,37));this.AFy(AI.BiQ(Ad,36
));}return HA;},Cq:function(AI){var HA=C.Row.Cq.call(this,AI);if(HA&&!!AI){var Jk=
AI.Oy();if(Jk<=0)A.ab5("%s",Xb);else{var Az2=this.Am7();if(Az2)this.CL=AI.YF();else
AI.Hj(this.CL,0,this.Id);AI.Hj(this.CL,1,this.VisualId);AI.Hj(this.CL,2,this.GroupId
);AI.Hj(this.CL,3,this.LocationId);AI.Aco(this.CL,4,this.DateOfBirth);AI.Bos(this.
CL,7,this.Gender);AI.Boo(this.CL,6,this.BirthType);AI.Bom(this.CL,14,this.AnimalType
);AI.SK(this.CL,22,this.TransponderId);AI.SK(this.CL,26,this.NaisId);AI.AkR(this.
CL,13,this.WorstAssessment);AI.MB(this.CL,8,this.IsAlarm);AI.Aco(this.CL,15,this.
TimestampAlarm);AI.MB(this.CL,11,this.IsFever);AI.Aco(this.CL,16,this.TimestampExpirationFeverAlarm
);AI.MB(this.CL,9,this.IsControl);AI.MB(this.CL,12,this.IsWatch);AI.Aco(this.CL,
20,this.TimestampLastControl);AI.Aco(this.CL,21,this.TimestampLastWatch);AI.MB(this.
CL,10,this.IsRegistered);AI.MB(this.CL,27,this.IsPerished);AI.Aco(this.CL,28,this.
DateOfLastCalving);AI.Hj(this.CL,29,this.LactationNumber);AI.MB(this.CL,38,this.
IsDry);AI.Boq(this.CL,32,this.Breed);AI.Bor(this.CL,33,this.EaseOfDelivery);AI.SK(
this.CL,35,this.NaisIdMother);AI.Boy(this.CL,34,this.WhereAbouts);AI.MB(this.CL,
37,this.IsRegistrationNoticePending);AI.Bow(this.CL,36,this.ReasonOfLeaving);HA=
AI.OA(Jk);if(Az2)this.OnSetId(AI.Abs());}}return HA;},Gm:function(){C.Row.Gm.call(
this);this.OnSetId(-1);this.Ahl(true);},Hi:function(){C.Row.Hi.call(this);this.OnSetId(
0);this.SA(0);this.Ab6(0);this.AnE(0);this.Q0(0);this.JQ(A._GetAutoObject(C.Device
).Gender);this.Akv(0);this.EB(A._GetAutoObject(C.Device).AnimalType);this.Q2(0);
this.Ne(0);this.Axc(0);this.Ae0(false);this.Aw6(0);this.ATy(0);this.Ae5(0);this.
AS7(0);this.Ul(false);this.ATA(0);this.ATx(0);this.AkB(false);this.Ae3(false);this.
ATz(0);this.Aw8(0);this.Ahl(false);this.AwK(false);this.AFg(0);this.AFK(0);this.
AwF(0);this.Aw7(0);this.ASZ(-1);this.Aww(0);this.AwL(0);this.ArT(false);this.NY(
0);this.Akx(0);this.AnG(0);this.Ng(0);this.Ae2(false);this.AFy(0);},OnSetId:function(
E){if(this.Id===E)return;this.Id=E;A.abo([this,this.QY,this.OnSetId],0);},SA:function(
E){if(this.VisualId===E)return;this.VisualId=E;A.abo([this,this.Ary,this.SA],0);
},Ab6:function(E){if(this.GroupId===E)return;this.GroupId=E;A.abo([this,this.BkE
,this.Ab6],0);},Q0:function(E){if(this.DateOfBirth===E)return;this.DateOfBirth=E;
A.abo([this,this.Av_,this.Q0],0);},JQ:function(E){if(this.Gender===E)return;this.
Gender=E;A.abo([this,this.Wt,this.JQ],0);},Akv:function(E){if(this.BirthType===E
)return;this.BirthType=E;A.abo([this,this.ASi,this.Akv],0);},AnE:function(E){if(
this.LocationId===E)return;this.LocationId=E;A.abo([this,this.A8F,this.AnE],0);}
,Ae5:function(E){if(this.LastTemperature===E)return;this.LastTemperature=E;A.abo([
this,this.A8E,this.Ae5],0);},Ae0:function(E){if(this.IsAlarm===E)return;this.IsAlarm=
E;A.abo([this,this.A8w,this.Ae0],0);},AkB:function(E){if(this.IsControl===E)return;
this.IsControl=E;A.abo([this,this.BkH,this.AkB],0);},Ahl:function(E){if(this.IsRegistered===
E)return;this.IsRegistered=E;A.abo([this,this.BkK,this.Ahl],0);},Ae3:function(E){
if(this.IsWatch===E)return;this.IsWatch=E;A.abo([this,this.A8A,this.Ae3],0);},Axc:
function(E){if(this.WorstAssessment===E)return;this.WorstAssessment=E;A.abo([this
,this.A9h,this.Axc],0);},Ul:function(E){if(this.IsFever===E)return;this.IsFever=
E;A.abo([this,this.A8x,this.Ul],0);},ATz:function(E){if(this.TimestampLastControl===
E)return;this.TimestampLastControl=E;A.abo([this,this.Bk_,this.ATz],0);},Aw8:function(
E){if(this.TimestampLastWatch===E)return;this.TimestampLastWatch=E;A.abo([this,this.
Bla,this.Aw8],0);},AS7:function(E){if(this.LastRatingTemperature===E)return;this.
LastRatingTemperature=E;A.abo([this,this.BkN,this.AS7],0);},ATx:function(E){if(this.
TimestampExpirationFeverAlarm===E)return;this.TimestampExpirationFeverAlarm=E;A.
abo([this,this.Bk8,this.ATx],0);},Aw6:function(E){if(this.TimestampAlarm===E)return;
this.TimestampAlarm=E;A.abo([this,this.Bk7,this.Aw6],0);},EB:function(E){if(this.
AnimalType===E)return;this.AnimalType=E;A.abo([this,this.PM,this.EB],0);},AFg:function(
E){if(this.LastBodyWeight===E)return;this.LastBodyWeight=E;A.abo([this,this.A8D,
this.AFg],0);},AFK:function(E){if(this.TimestampLastWeighing===E)return;this.TimestampLastWeighing=
E;A.abo([this,this.A85,this.AFK],0);},Q2:function(E){if(this.TransponderId===E)return;
this.TransponderId=E;A.abo([this,this.Arx,this.Q2],0);},RJ:function(){return A._GetAutoObject(
C.Helper).MN(this.DateOfBirth,A._GetAutoObject(C.Helper).Dv());},AwF:function(E){
if(this.FirstBodyWeight===E)return;this.FirstBodyWeight=E;A.abo([this,this.ASo,this.
AwF],0);},Aw7:function(E){if(this.TimestampFirstWeighing===E)return;this.TimestampFirstWeighing=
E;A.abo([this,this.ASF,this.Aw7],0);},Arc:function(){var Td=A._NewObject(A.Core.
Bs,0);Td.Initialize(this.DateOfBirth);var A1X=A._NewObject(A.Core.Bs,0);A1X.Initialize(
this.TimestampFirstWeighing);if(((Td.Year===A1X.Year)&&(Td.Ab1()===A1X.Ab1()))&&(
this.FirstBodyWeight>0))return true;else return false;},AhP:function(AI5){var AaE;
var Auq;if(this.TimestampLastWeighing>0){Auq=this.TimestampLastWeighing;AaE=this.
LastBodyWeight;}else{Auq=this.DateOfBirth;AaE=A._GetAutoObject(C.Helper).Abr(this.
AnimalType);}return A._GetAutoObject(C.Helper).AhP(AaE,Auq,AI5,this.AnimalType);
},ASZ:function(E){if(this.FirstBodyWeightId===E)return;this.FirstBodyWeightId=E;
A.abo([this,this.BkD,this.ASZ],0);},AnV:function(Bb_){this.Ae0(Bb_);if(Bb_){if(!
this.TimestampAlarm)this.Aw6(A._GetAutoObject(C.Helper).Dv());}else this.Aw6(0);
},Ne:function(E){if(this.NaisId===E)return;this.NaisId=E;A.abo([this,this.Anu,this.
Ne],0);},AGA:function(Bb6){this.Ae3(Bb6);if(Bb6){if(!this.TimestampLastWatch)this.
Aw8(A._GetAutoObject(C.Helper).Dv());}else this.Aw8(0);},Aww:function(E){if(this.
DateOfLastCalving===E)return;this.DateOfLastCalving=E;A.abo([this,this.Bkt,this.
Aww],0);},AwL:function(E){if(this.LactationNumber===E)return;this.LactationNumber=
E;A.abo([this,this.BkM,this.AwL],0);},AwK:function(E){if(this.IsPerished===E)return;
this.IsPerished=E;A.abo([this,this.BkJ,this.AwK],0);},ATA:function(E){if(this.TimestampLastTemperature===
E)return;this.TimestampLastTemperature=E;A.abo([this,this.Bk$,this.ATA],0);},ATy:
function(E){if(this.TimestampLastAssessment===E)return;this.TimestampLastAssessment=
E;A.abo([this,this.Bk9,this.ATy],0);},NY:function(E){if(this.Breed===E)return;this.
Breed=E;A.abo([this,this.Av8,this.NY],0);},Akx:function(E){if(this.EaseOfDelivery===
E)return;this.EaseOfDelivery=E;A.abo([this,this.ASn,this.Akx],0);},Ng:function(E
){if(this.WhereAbouts===E)return;this.WhereAbouts=E;A.abo([this,this.Awk,this.Ng
],0);},AnG:function(E){if(this.NaisIdMother===E)return;this.NaisIdMother=E;A.abo([
this,this.ASv,this.AnG],0);},AFy:function(E){if(this.ReasonOfLeaving===E)return;
this.ReasonOfLeaving=E;A.abo([this,this.BkX,this.AFy],0);},Ae2:function(E){if(this.
IsRegistrationNoticePending===E)return;this.IsRegistrationNoticePending=E;A.abo([
this,this.BkL,this.Ae2],0);},ArT:function(E){if(this.IsDry===E)return;this.IsDry=
E;A.abo([this,this.BkI,this.ArT],0);},QY:function(){return this.Id;},Ary:function(
){return this.VisualId;},BkE:function(){return this.GroupId;},Av_:function(){return this.
DateOfBirth;},Wt:function(){return this.Gender;},ASi:function(){return this.BirthType;
},A8F:function(){return this.LocationId;},A8E:function(){return this.LastTemperature;
},A8w:function(){return this.IsAlarm;},BkH:function(){return this.IsControl;},BkK:
function(){return this.IsRegistered;},A8A:function(){return this.IsWatch;},A9h:function(
){return this.WorstAssessment;},A8x:function(){return this.IsFever;},Bk_:function(
){return this.TimestampLastControl;},Bla:function(){return this.TimestampLastWatch;
},BkN:function(){return this.LastRatingTemperature;},Bk8:function(){return this.
TimestampExpirationFeverAlarm;},Bk7:function(){return this.TimestampAlarm;},PM:function(
){return this.AnimalType;},A8D:function(){return this.LastBodyWeight;},A85:function(
){return this.TimestampLastWeighing;},Arx:function(){return this.TransponderId;}
,ASo:function(){return this.FirstBodyWeight;},ASF:function(){return this.TimestampFirstWeighing;
},BkD:function(){return this.FirstBodyWeightId;},Anu:function(){return this.NaisId;
},Bkt:function(){return this.DateOfLastCalving;},BkM:function(){return this.LactationNumber;
},BkJ:function(){return this.IsPerished;},Bk$:function(){return this.TimestampLastTemperature;
},Bk9:function(){return this.TimestampLastAssessment;},Av8:function(){return this.
Breed;},ASn:function(){return this.EaseOfDelivery;},Awk:function(){return this.WhereAbouts;
},ASv:function(){return this.NaisIdMother;},BkX:function(){return this.ReasonOfLeaving;
},BkL:function(){return this.IsRegistrationNoticePending;},BkI:function(){return this.
IsDry;},_Init:function(aArg){C.Row._Init.call(this,aArg);this.__proto__=C.Animal;
this.TableId=0;},_className:"Device::Animal"};C.Row={CL:-1,TableId:2,EM:function(
Ad,AI){if(!AI){A.ab5("%s",(Alb+this.CL.toFixed())+AsT);return false;}else if(AI.
Id!==this.TableId)throw new Error(AsU);else if((Ad<0)||(Ad>=AI.Ca())){A.ab5("%s"
,(((AsV+this.CL.toFixed())+AsW)+AI.Ca().toFixed())+Alc);return false;}this.CL=Ad;
return true;},Cq:function(AI){if(!AI){A.ab5("%s",(Alb+this.CL.toFixed())+AsT);return false;
}else if(AI.Id!==this.TableId)throw new Error(AsU);else if(this.Am7()&&AI.Lh()){
A.ab5("%s",AsX+AI.HG().toFixed());return false;}else if(!this.Am7()&&((this.CL<0
)||(this.CL>=AI.Ca()))){A.ab5("%s",(((AsV+this.CL.toFixed())+AsW)+AI.Ca().toFixed(
))+Alc);return false;}return true;},Gm:function(){this.Hi();this.CL=-1;},Am7:function(
){return this.CL===-1;},Hi:function(){this.CL=-2;},AqX:function(){return this.CL
!==-2;},A8T:function(){return this.CL;},A_e:function(E){this.CL=E;},_Init:function(
aArg){this.__proto__=C.Row;A.h7++;},_Done:function(){this.__proto__=null;A.h7--;
},_ReInit:function(){},_Mark:function(D){var B;if((B=this.I)&&(B._cycle!=D))B._Mark(
B._cycle=D);},I:null,_cycle:0,_observers:null,_className:"Device::Row"};C.Rating={
Temperature:0,Id:0,AnimalId:0,Timestamp:0,BodyWeight:0,RatingTemperature:0,Faeces:
0,Respiratory:0,Appearance:0,Feed:0,EM:function(Ad,AI){var HA=C.Row.EM.call(this
,Ad,AI);if(HA&&!!AI){this.OnSetId(AI.CE(Ad,0));this.OnSetAnimalId(AI.CE(Ad,1));this.
OnSetTimestamp(AI.HF(Ad,6));this.OnSetFeed(AI.I2(Ad,2));this.OnSetAppearance(AI.
I2(Ad,3));this.OnSetRespiratory(AI.I2(Ad,4));this.OnSetFaeces(AI.I2(Ad,5));this.
OnSetTemperature(AI.A6I(Ad,7));this.OnSetBodyWeight(AI.ACY(Ad,8));this.OnSetRatingTemperature(
AI.I2(Ad,9));}return HA;},Cq:function(AI){if(this.K&&this.K.Cq)return this.K.Cq.
apply(this,arguments);else return C.Rating.Baz.apply(this,arguments);},Baz:function(
AI){var HA=C.Row.Cq.call(this,AI);if((HA&&!!AI)&&(AI.Id===1)){var Jk=AI.Oy();if(
Jk<=0)A.ab5("%s",Xb);else{var Az2=this.Am7();if(Az2)this.CL=AI.YF();else AI.Hj(this.
CL,0,this.Id);AI.Hj(this.CL,1,this.AnimalId);AI.Aco(this.CL,6,this.Timestamp);AI.
AkR(this.CL,2,this.Feed);AI.AkR(this.CL,3,this.Appearance);AI.AkR(this.CL,4,this.
Respiratory);AI.AkR(this.CL,5,this.Faeces);AI.A_$(this.CL,7,this.Temperature);AI.
AUw(this.CL,8,this.BodyWeight);AI.AkR(this.CL,9,this.RatingTemperature);AI.OA(Jk
);if(Az2)this.OnSetId(AI.Abs());var Rs=A._GetAutoObject(C.Device).Am;var Ad=A._GetAutoObject(
C.Device).Am.Lc(0,this.AnimalId);if(Ad>=0){var B$=A._NewObject(C.Animal,0);B$.EM(
Ad,Rs);if(this.Temperature>0)B$.Ul(A._GetAutoObject(C.Helper).A6_(this));if((this.
Temperature>0)&&A._GetAutoObject(C.Helper).AGe(this)){var Oi=A._GetAutoObject(C.
Helper).AQ1(this);B$.AkB(Oi);B$.AnV(Oi);}else if(this.Temperature>0){var Oi=(A._GetAutoObject(
C.Helper).AQ1(this)||(B$.WorstAssessment===2))||(B$.WorstAssessment===1);B$.AkB(
Oi);B$.AnV(Oi);}else{var Oi=A._GetAutoObject(C.Helper).AQ1(this)||B$.IsFever;B$.
AkB(Oi);B$.AnV(Oi);}B$.Cq(Rs);}}}return HA;},Gm:function(){C.Row.Gm.call(this);this.
OnSetTimestamp(A._GetAutoObject(C.Helper).Dv());this.OnSetId(-1);},Hi:function(){
C.Row.Hi.call(this);this.OnSetTimestamp(0);this.OnSetId(0);this.OnSetAnimalId(0);
this.OnSetFeed(0);this.OnSetAppearance(0);this.OnSetRespiratory(0);this.OnSetFaeces(
0);this.OnSetTemperature(0);this.OnSetBodyWeight(0);this.OnSetRatingTemperature(
0);},OnSetTemperature:function(E){if(this.Temperature===E)return;this.Temperature=
E;A.abo([this,this.Bk6,this.OnSetTemperature],0);},OnSetId:function(E){if(this.Id===
E)return;this.Id=E;A.abo([this,this.QY,this.OnSetId],0);},OnSetAnimalId:function(
E){if(this.AnimalId===E)return;this.AnimalId=E;A.abo([this,this.Bkg,this.OnSetAnimalId
],0);},OnSetFeed:function(E){if(this.Feed===E)return;this.Feed=E;A.abo([this,this.
BkA,this.OnSetFeed],0);},OnSetAppearance:function(E){if(this.Appearance===E)return;
this.Appearance=E;A.abo([this,this.Bkh,this.OnSetAppearance],0);},OnSetRespiratory:
function(E){if(this.Respiratory===E)return;this.Respiratory=E;A.abo([this,this.BkY
,this.OnSetRespiratory],0);},OnSetFaeces:function(E){if(this.Faeces===E)return;this.
Faeces=E;A.abo([this,this.Bky,this.OnSetFaeces],0);},OnSetTimestamp:function(E){
if(this.Timestamp===E)return;this.Timestamp=E;A.abo([this,this.A84,this.OnSetTimestamp
],0);},Bon:function(Np,A7){switch(Np){case 2:this.OnSetAppearance(A7);break;case
1:this.OnSetFeed(A7);break;case 4:this.OnSetFaeces(A7);break;case 3:this.OnSetRespiratory(
A7);break;default:;}},Biz:function(Np){switch(Np){case 2:return this.Appearance;
case 1:return this.Feed;case 4:return this.Faeces;case 3:return this.Respiratory;
default:return 0;}},OnSetRatingTemperature:function(E){if(this.RatingTemperature===
E)return;this.RatingTemperature=E;A.abo([this,this.BkW,this.OnSetRatingTemperature
],0);},OnSetBodyWeight:function(E){if(this.BodyWeight===E)return;this.BodyWeight=
E;A.abo([this,this.Bkl,this.OnSetBodyWeight],0);},Bk6:function(){return this.Temperature;
},QY:function(){return this.Id;},Bkg:function(){return this.AnimalId;},BkA:function(
){return this.Feed;},Bkh:function(){return this.Appearance;},BkY:function(){return this.
Respiratory;},Bky:function(){return this.Faeces;},A84:function(){return this.Timestamp;
},BkW:function(){return this.RatingTemperature;},Bkl:function(){return this.BodyWeight;
},_Init:function(aArg){C.Row._Init.call(this,aArg);this.__proto__=C.Rating;this.
TableId=1;var Lw=this._variants();if(Lw){this.K={};Lw._Init.call(this,aArg);}},_Done:
function(){if(this.K)this.K._Done.call(this);this.__proto__=C.Row;C.Row._Done.call(
this);},_ReInit:function(){C.Row._ReInit.call(this);if(this.K)this.K._ReInit.call(
this);},_Mark:function(D){C.Row._Mark.call(this,D);if(this.K)this.K._Mark(D);},_variants:
function(){return A.acs.Rating._variants();},K:null,_className:"Device::Rating"};
C.HelperClass={Uw:null,AhA:null,AUp:null,AUq:null,W:null,Au:null,KF:null,SN:null
,AdY:null,UC:null,UB:null,Ael:null,Afu:null,Aft:null,Afs:null,Afv:null,Agy:null,
AGP:0,Init:function(aArg){A.pe([this,this.ATT],this);},AkE:function(E){this.Uw=E;
A.abo([this,this.Arv,this.AkE],0);},AFC:function(E){this.AhA=E;A.abo([this,this.
A8U,this.AFC],0);},BAH:function(G){switch(A._GetAutoObject(C.Device).ScanState){
case 2:{var Aus=A._GetAutoObject(C.Device).OR;if(!Aus)throw new Error(Ax6);switch(
Aus.TransponderType){case 1:this.AkE(Aus);break;case 2:this.ATo(Aus);break;case 3:
this.AFC(Aus);break;case 4:this.ATp(Aus);break;case 0:break;default:throw new Error(
Ax7);}}break;case 4:A._GetAutoObject(C.Device).A9(11,true,A.jV,2000,null);break;
case 3:A._GetAutoObject(C.Device).A9(12,true,A.jV,2000,null);break;case 0:case 1:
break;default:throw new Error(Ax8);}},AkO:function(){this.AkE(null);this.ATo(null
);this.AFC(null);this.ATp(null);},AFH:function(E){if(this.K&&this.K.AFH)return this.
K.AFH.apply(this,arguments);else return C.HelperClass.Bax.apply(this,arguments);
},Bax:function(E){A.abo([this,this.UX,this.U0],0);A._GetAutoObject(C.Device).SetSystemTime(
E);},U0:function(Aq){this.AFH(Aq);},Dv:function(){if(this.K&&this.K.Dv)return this.
K.Dv.apply(this,arguments);else return C.HelperClass.Bat.apply(this,arguments);}
,Bat:function(){var B;return((B=(this.Au.Bc5()|0))<0)?B+0x100000000:B;},UX:function(
){return this.Dv();},Asn:function(){A._GetAutoObject(C.Device).SJ(-1);this.W.Hi(
);A.we(this.W,0);},A7o:function(Jf){if(!Jf){A.ab5("%s%U",AVS,Jf);return false;}var
Bf=A._GetAutoObject(C.Device).Am.AgQ(22,Jf);return this.HL(Bf);},AmV:function(AoN
,AI4){switch(AoN){case 0:{var Ape=AI4;switch(Ape){case 14:return A.aaR(A.acf.Afp
);case 6:return AsY;case 4:return A.aaR(A.acf.Aed);case 28:return Ax9;case 7:return A.
aaR(A.acf.Afk);case 2:return A.aaR(A.acf.P);case 0:return A.aaR(A.acf.GJ);case 37:
return P6;case 8:return A.aaR(A.acf.Alarm);case 9:return A.aaR(A.acf.ACb);case 38:
return A.aaR(A.acf.ANX);case 11:return A.aaR(A.acf.Fever);case 27:return Ax_;case
10:return A.aaR(A.acf.Bn3);case 12:return A.aaR(A.acf.Asa);case 29:return A.aaR(
A.acf.ARi);case 18:return A.aaR(A.acf.Weighing);case 17:return AVT;case 5:return A.
aaR(A.acf.Temperature);case 3:return AVU;case 26:return A.aaR(A.acf.Ud);case 35:
return A.aaR(A.acf.Ud)+AVV;case 36:return AVW;case 15:return AHi;case 24:return AHj;
case 20:return AfA;case 30:return Aop;case 21:return AVX;case 19:return AHk;case
22:return A.aaR(A.acf.Transponder);case 1:return A.aaR(A.acf.GF);case 34:return A.
aaR(A.acf.Jd);case 13:return Ald;case 31:return AHl;default:{A.ab5("%s",AHm+Ape.
toFixed());return AHn+Ape.toFixed();}}}case 1:{var Ape=AI4;switch(Ape){case 1:return A.
aaR(A.acf.Animal);case 3:return A.aaR(A.acf.AGd);case 8:return A.aaR(A.acf.Afr);
case 5:return A.aaR(A.acf.AGf);case 2:return A.aaR(A.acf.Feed);case 4:return A.aaR(
A.acf.AGg);case 7:return A.aaR(A.acf.Temperature);case 6:return A.aaR(A.acf.Bs);
default:{A.ab5("%s",AVY+Ape.toFixed());return AHn+Ape.toFixed();}}}default:A.ab5(
"%s",(AVZ+AoN.toFixed())+AV0);}return A.jV;},A6z:function(AoN,AH){var result=A.jV;
if(!!AH){result=this.AmV(AoN,AH.EJ);result=((result+N$)+A._GetAutoObject(C.Converter
).A6i(AH.Operator))+N$;if(!!(C.Int32FilterCriterion.isPrototypeOf(AH)?AH:null))result=
result+(C.Int32FilterCriterion.isPrototypeOf(AH)?AH:null).A4.toFixed();else if(!
!(C.UInt32FilterCriterion.isPrototypeOf(AH)?AH:null))result=result+(C.UInt32FilterCriterion.
isPrototypeOf(AH)?AH:null).A4.toFixed();else if(!!(C.StringFilterCriterion.isPrototypeOf(
AH)?AH:null))result=result+(C.StringFilterCriterion.isPrototypeOf(AH)?AH:null).A4;
else if(!!(C.BoolFilterCriterion.isPrototypeOf(AH)?AH:null)){if((C.BoolFilterCriterion.
isPrototypeOf(AH)?AH:null).A4)result=this.AmV(AoN,AH.EJ);else result=A.jV;}else if(
!!(C.GenderFilterCriterion.isPrototypeOf(AH)?AH:null)){var By_=A._NewObject(C.GenderToString
,0);result=result+By_.Lt((C.GenderFilterCriterion.isPrototypeOf(AH)?AH:null).A4);
}else if(!!(C.AnimalTypeFilterCriterion.isPrototypeOf(AH)?AH:null)){var Bx4=A._NewObject(
C.AnimalTypeToString,0);result=result+Bx4.Lt((C.AnimalTypeFilterCriterion.isPrototypeOf(
AH)?AH:null).A4);}else if(!!(C.AssessmentFilterCriterion.isPrototypeOf(AH)?AH:null
)){var Bx7=A._NewObject(C.AssesmentToString,0);result=result+Bx7.Lt((C.AssessmentFilterCriterion.
isPrototypeOf(AH)?AH:null).A4);}else if(!!(C.UInt64FilterCriterion.isPrototypeOf(
AH)?AH:null))result=result+(C.UInt64FilterCriterion.isPrototypeOf(AH)?AH:null).A4.
toFixed();else if(!!(C.UInt64PartialFilterCriterion.isPrototypeOf(AH)?AH:null)){
var Av=(C.UInt64PartialFilterCriterion.isPrototypeOf(AH)?AH:null);result=(((((result+
Av.A4)+AcP)+Av.OB.toFixed())+O4)+Av.Zn.toFixed())+Alc;}else if(!!(C.WhereAboutsFilterCriterion.
isPrototypeOf(AH)?AH:null)){var BCt=A._NewObject(C.WhereAboutsToString,0);result=
result+BCt.Lt((C.WhereAboutsFilterCriterion.isPrototypeOf(AH)?AH:null).A4);}else
A.ab5("%s",AV1);}return result;},Nk:function(aString,BbU,Bxh){var result=A.jV;var
BfB=false;var index=0;var Bxj=BbU.length;while(!BfB){var A3B=aString.indexOf(BbU
,index);if(A3B!==-1){result=(result+A.abW(aString,index,A3B-index))+Bxh;index=A3B+
Bxj;}else{var BbY=aString.length;if(index<BbY)result=result+A.ab2(aString,BbY-index
);BfB=true;}}return result;},ATo:function(E){this.AUp=E;A.abo([this,this.Bk0,this.
ATo],0);},ATp:function(E){this.AUq=E;A.abo([this,this.Bk1,this.ATp],0);},Bdt:function(
){return((A._GetAutoObject(C.Device).ScanState===2)&&!!A._GetAutoObject(C.Device
).OR)&&(A._GetAutoObject(C.Device).OR.TransponderType===1);},Af6:function(G){if(
!this.W.Am7()&&!!this.W.Id)this.BjD(this.W.Id);},Avm:function(Em){return A._GetAutoObject(
C.Helper).UC.Get(Em);},A6u:function(Em){return A._GetAutoObject(C.Helper).UB.Get(
Em);},A6E:function(){var O=0;var min=32767;while(O<A._GetAutoObject(C.Helper).UC.
MC){if(A._GetAutoObject(C.Helper).UC.Get(O)<min)min=A._GetAutoObject(C.Helper).UC.
Get(O);O=O+1;}return min;},ATT:function(G){A.zV([this,this.Af6],A._GetAutoObject(
C.Device).Am,0);},AQ1:function(D3){if(!D3)return false;var Bjd=(((this.AzY(D3.Faeces
)||this.AzY(D3.Feed))||this.AzY(D3.Appearance))||this.AzY(D3.Respiratory))||this.
AzY(D3.RatingTemperature);return Bjd||this.A6_(D3);},AzY:function(Bbx){return(Bbx===
2)||(Bbx===1);},A6_:function(D3){return!!D3&&(D3.Temperature>A._GetAutoObject(C.
Helper).Avm(A._GetAutoObject(C.Helper).W.AnimalType));},HL:function(L6){var A2u=
false;if(L6>=0){if(L6!==this.W.CL)A._GetAutoObject(C.Device).SJ(L6);A2u=this.W.EM(
L6,A._GetAutoObject(C.Device).Am);if(A2u)A.we(this.W,0);}else{A._GetAutoObject(C.
Device).SJ(-1);this.W.Hi();A.we(this.W,0);}return A2u;},AhJ:function(Ah4){var B;
return(((B=(this.Au.Bc5()|0))<0)?B+0x100000000:B)-this.AmH(Ah4);},AsC:function(){
var B;A.pe([B=this.KF,B.An0],this);},BBU:function(G){A._GetAutoObject(C.Device).
A9(16,false,AHo,0,null);A._GetAutoObject(C.Device).A9(5,true,A.jV,0,null);},Bnw:
function(G){var At=(C.PopupContext.isPrototypeOf(G)?G:null);if(!!At&&(At.PopupState===
5))this.AsC();},Bnk:function(E){if(this.AGP===E)return;this.AGP=E;A._GetAutoObject(
C.Device).A9(16,true,this.AGP.toFixed(),0,[this,this.Bnw]);},MN:function(BwT,Bxy
){var D8;var Bf9=A._NewObject(A.Core.An7,0);var GD=A._NewObject(A.Core.Bs,0);var
K6=A._NewObject(A.Core.Bs,0);GD.Initialize(BwT);K6.Initialize(Bxy);D8=K6.BhO(GD);
Bf9.Initialize2(0,D8.ADp,D8.AEc,D8.AGt);if(GD.J(Bf9).GH===GD.GH)return D8.Ki;else
return D8.Ki+1;},BBW:function(G){A._GetAutoObject(C.Device).UpdateMeasureState(3
);if((A._GetAutoObject(C.Device).Kv>=A._GetAutoObject(C.Device).Z1)&&(A._GetAutoObject(
C.Device).Kv<=A._GetAutoObject(C.Helper).Avm(A._GetAutoObject(C.Helper).W.AnimalType
))){var AJl=A._GetAutoObject(C.Helper).W.Id;var BBk=A._GetAutoObject(C.Device).Am.
Lc(0,AJl);A._GetAutoObject(C.Device).Am.MB(BBk,9,false);A._GetAutoObject(C.Device
).Am.Bl(A._GetAutoObject(C.Device).Am.Filter);}},AK4:function(G){var Bg0=A._GetAutoObject(
C.Helper).Avm(A._GetAutoObject(C.Helper).W.AnimalType);var BgU=A._GetAutoObject(
C.Helper).A6u(A._GetAutoObject(C.Helper).W.AnimalType);var Agi=A.abz(Bg0-100,BgU+
100);this.BcJ(Agi);},AmH:function(Ah4){return Ah4*86400;},Ak5:function(J2){var B;
if(!!J2&&(J2<(((B=Math.trunc(Math.pow(10,A._GetAutoObject(C.Device).AF)))<0)?B+0x10000000000000000:
B)))return-1;return A._GetAutoObject(C.Helper).Sd(J2,A._GetAutoObject(C.Device).
AF&0xFF,A._GetAutoObject(C.Device).A1&0xFF)|0;},AGe:function(D3){if(!D3)return false;
return((!!D3.Faeces||!!D3.Feed)||!!D3.Appearance)||!!D3.Respiratory;},AhP:function(
A0K,Bb0,AI5,Em){var B;var ApS;if((A0K<650000)&&(Bb0<this.Dv())){var Bck=this.Agy.
Avo(Em);var Bcj=0;if(Bck>=0)Bcj=this.Afs.Get(Bck);ApS=A0K+(this.MN(Bb0,this.Dv()
)*Bcj);if(AI5>0){var A1F=this.ApR(AI5);ApS=(Math.trunc(((((B=ApS)<0)?B+0x10000000000000000:
B)+Math.trunc(A1F/2))/A1F)*A1F)|0;}if(ApS>650000)ApS=650000;}else ApS=A0K;return ApS;
},AC4:function(D3){var Aqd=A._GetAutoObject(C.Converter).AdZ(D3.Faeces);if(Aqd<A.
_GetAutoObject(C.Converter).AdZ(D3.Feed))Aqd=A._GetAutoObject(C.Converter).AdZ(D3.
Feed);if(Aqd<A._GetAutoObject(C.Converter).AdZ(D3.Appearance))Aqd=A._GetAutoObject(
C.Converter).AdZ(D3.Appearance);if(Aqd<A._GetAutoObject(C.Converter).AdZ(D3.Respiratory
))Aqd=A._GetAutoObject(C.Converter).AdZ(D3.Respiratory);return A._GetAutoObject(
C.Converter).A$x(Aqd);},Axr:function(D3,Nn){if(!!D3){D3.OnSetFaeces(Nn);D3.OnSetFeed(
Nn);D3.OnSetAppearance(Nn);D3.OnSetRespiratory(Nn);}},Bix:function(AI,AI_,Ac5,Xl
,AfE){if(!AI)throw new Error(AsZ);var Be=A._NewObject(C.Filter,0);var ApE=AI.Filter;
var Od=A._NewObject(C.Int32FilterCriterion,0);Od.Operator=0;Od.EJ=1;Od.A4=Ac5;Be.
CW(Od);if(Xl>0){var Or=A._NewObject(C.UInt32FilterCriterion,0);Or.Operator=2;Or.
EJ=6;Or.A4=Xl;Be.CW(Or);}if(AfE>0){var Oh=A._NewObject(C.UInt32FilterCriterion,0
);Oh.Operator=3;Oh.EJ=6;Oh.A4=AfE;Be.CW(Oh);}AI.Bl(Be);var L7=A._NewObject(C.Int32ArrayWrapper
,0);L7.Zy(6);var O;for(O=0;O<L7.MC;O=O+1)L7.Set(O,0);var U6;for(O=0;O<AI.Ca();O=
O+1){U6=AI.I2(O,AI_);L7.Set(U6,L7.Get(U6)+1);}AI.Bl(ApE);return L7;},ZQ:function(
Ah4){var B;var GD=A._NewObject(A.Core.Bs,0);var Bf8=A._NewObject(A.Core.An7,0);GD.
Initialize(A._GetAutoObject(C.Converter).AhL());Bf8.Initialize2(Ah4,0,0,0);GD=GD.
BoR(Bf8);return((B=(GD.JO()|0))<0)?B+0x100000000:B;},A6v:function(AI,Ac5,AfE,Xl){
if(!AI)throw new Error(AsZ);var Be=A._NewObject(C.Filter,0);var ApE=AI.Filter;var
Od=A._NewObject(C.Int32FilterCriterion,0);Od.Operator=0;Od.EJ=1;Od.A4=Ac5;Be.CW(
Od);if(Xl>0){var Or=A._NewObject(C.UInt32FilterCriterion,0);Or.Operator=2;Or.EJ=
6;Or.A4=Xl;Be.CW(Or);}if(AfE>0){var Oh=A._NewObject(C.UInt32FilterCriterion,0);Oh.
Operator=3;Oh.EJ=6;Oh.A4=AfE;Be.CW(Oh);}AI.Bl(Be);var L7=A._NewObject(C.Int32ArrayWrapper
,0);L7.Zy(6);var O;for(O=0;O<L7.MC;O=O+1)L7.Set(O,0);var Ao5=A._NewObject(C.Rating
,0);var A1w;for(O=0;O<AI.Ca();O=O+1){Ao5.EM(O,AI);if(A._GetAutoObject(C.Helper).
AGe(Ao5)){A1w=A._GetAutoObject(C.Helper).AC4(Ao5);L7.Set(A1w,L7.Get(A1w)+1);}}AI.
Bl(ApE);return L7;},A15:function(AI,Ac5,ByF){if(!AI)throw new Error(AsZ);var Be=
A._NewObject(C.Filter,0);var ApE=AI.Filter;var Od=A._NewObject(C.Int32FilterCriterion
,0);Od.Operator=0;Od.EJ=1;Od.A4=Ac5;Be.CW(Od);var Xl=A._GetAutoObject(C.Converter
).AhL()+A._GetAutoObject(C.Helper).AmH(ByF);var AfE=Xl+A._GetAutoObject(C.Helper
).AmH(1);var Or=A._NewObject(C.UInt32FilterCriterion,0);Or.Operator=2;Or.EJ=6;Or.
A4=Xl;Be.CW(Or);var Oh=A._NewObject(C.UInt32FilterCriterion,0);Oh.Operator=3;Oh.
EJ=6;Oh.A4=AfE;Be.CW(Oh);AI.Bl(Be);var Ao5=A._NewObject(C.Rating,0);var U6;var LQ=
0;var O;for(O=0;O<AI.Ca();O=O+1){Ao5.EM(O,AI);if(A._GetAutoObject(C.Helper).AGe(
Ao5)){U6=A._GetAutoObject(C.Helper).AC4(Ao5);if(A._GetAutoObject(C.Converter).AdZ(
U6)>A._GetAutoObject(C.Converter).AdZ(LQ))LQ=U6;}}AI.Bl(ApE);return LQ;},Am6:function(
){if((A._GetAutoObject(C.Device).WeightRecordingScope===2)||(A._GetAutoObject(C.
Device).WeightRecordingScope===1))return true;else return false;},A7b:function(){
if((A._GetAutoObject(C.Device).WeightRecordingScope===2)||!A._GetAutoObject(C.Device
).WeightRecordingScope)return true;else return false;},Biy:function(AI,AI_,Ac5,Xl
,AfE){if(!AI)throw new Error(AsZ);var Be=A._NewObject(C.Filter,0);var ApE=AI.Filter;
var Od=A._NewObject(C.Int32FilterCriterion,0);Od.Operator=0;Od.EJ=1;Od.A4=Ac5;Be.
CW(Od);if(Xl>0){var Or=A._NewObject(C.UInt32FilterCriterion,0);Or.Operator=2;Or.
EJ=6;Or.A4=Xl;Be.CW(Or);}if(AfE>0){var Oh=A._NewObject(C.UInt32FilterCriterion,0
);Oh.Operator=3;Oh.EJ=6;Oh.A4=AfE;Be.CW(Oh);}AI.Bl(Be);var L7=A._NewObject(C.Int32ArrayWrapper
,0);L7.Zy(6);var O;for(O=0;O<L7.MC;O=O+1)L7.Set(O,0);if(AI.Ca()>0){var U6=AI.I2(
0,AI_);var ApX=AI.HF(O,6);var Ac=A._NewObject(A.Core.Bs,0);Ac.Initialize(ApX);var
Aqc=U6;var AJ4=A._NewObject(A.Core.Bs,0);AJ4.Initialize(Ac.JO());for(O=1;O<AI.Ca(
);O=O+1){U6=AI.I2(O,AI_);ApX=AI.HF(O,6);Ac.Initialize(ApX);if((Ac.Ab1()!==AJ4.Ab1(
))||(Ac.Year!==AJ4.Year)){L7.Set(Aqc,L7.Get(Aqc)+1);AJ4.Initialize(Ac.JO());Aqc=
U6;}else if(!!U6&&(U6<Aqc))Aqc=U6;}L7.Set(Aqc,L7.Get(Aqc)+1);}AI.Bl(ApE);return L7;
},Aqp:function(L2){var B;var GD=A._NewObject(A.Core.Bs,0);GD.Initialize(L2);GD.AnC(
0);GD.AnF(0);GD.AnI(0);return((B=(GD.JO()|0))<0)?B+0x100000000:B;},AN_:function(
L2){var B;L2=L2+86400;var GD=A._NewObject(A.Core.Bs,0);GD.Initialize(L2);GD.AnC(
0);GD.AnF(0);GD.AnI(0);return((B=(GD.JO()|0))<0)?B+0x100000000:B;},BiA:function(
BBS,ByQ,Amd,AlD){var BcE=A._GetAutoObject(C.Helper).MN(BBS,ByQ);if(BcE>0)return((
AlD-Amd)/BcE)|0;return 0;},Bpt:function(BwU,Bxz){var GD=A._NewObject(A.Core.Bs,0
);var K6=A._NewObject(A.Core.Bs,0);GD.Initialize(BwU);K6.Initialize(Bxz);return(
GD.Year===K6.Year)&&(GD.Ab1()===K6.Ab1());},A6B:function(){var Be=A._GetAutoObject(
C.Helper).Mo();var BdH=A._NewObject(C.UInt32FilterCriterion,0);var BxI=A._GetAutoObject(
C.Helper).ZQ(A._GetAutoObject(C.Device).AqQ)-1;BdH.Initialize(28,2,BxI,true);Be.
CW(BdH);var U2=A._NewObject(C.AnimalTypeFilterCriterion,0);U2.Initialize(14,0,1,
true);Be.CW(U2);if(A._GetAutoObject(C.Device).AqR){var AAc=A._NewObject(C.UInt32FilterCriterion
,0);var A2p=A._GetAutoObject(C.Helper).Dv()-21600;AAc.Initialize(30,3,A2p,true);
Be.CW(AAc);}return Be;},Bn8:function(){var Jk=A._GetAutoObject(C.Device).Am.Oy();
if(Jk<=0)A.ab5("%s",Xb);else{A._GetAutoObject(C.Device).Am.Hi();A._GetAutoObject(
C.Device).Am.OA(Jk);}Jk=A._GetAutoObject(C.Device).Agq.Oy();if(Jk<=0)A.ab5("%s",
Xb);else{A._GetAutoObject(C.Device).Agq.Hi();A._GetAutoObject(C.Device).Agq.OA(Jk
);}Jk=A._GetAutoObject(C.Device).Bt.Oy();if(Jk<=0)A.ab5("%s",Xb);else{A._GetAutoObject(
C.Device).Bt.Hi();A._GetAutoObject(C.Device).Bt.OA(Jk);}Jk=A._GetAutoObject(C.Device
).Pl.Oy();if(Jk<=0)A.ab5("%s",Xb);else{A._GetAutoObject(C.Device).Pl.Hi();A._GetAutoObject(
C.Device).Pl.OA(Jk);}},BjD:function(Ac5){var Bf=A._GetAutoObject(C.Device).Am.Lc(
0,Ac5);return this.HL(Bf);},AQ8:function(Jf){var Aiv=A._GetAutoObject(C.Device).
Am.Aej(22,Jf);return Aiv;},ACV:function(){var Be=A._GetAutoObject(C.Helper).Mo();
var Aja=A._NewObject(C.UInt64FilterCriterion,0);Aja.Initialize(22,0,0,true);Be.CW(
Aja);return Be;},AOI:function(AoY,ByN,P_){var Aaq=-1;switch(AoY){case 2:Aaq=30;break;
case 3:Aaq=31;break;case 10:Aaq=19;break;default:A.ab5("%s%e",UU,AoY);}if(Aaq<0)
return null;var Adj=A._NewObject(C.UInt32FilterCriterion,0);Adj.Initialize(Aaq,3
,A._GetAutoObject(C.Helper).Dv()-ByN,P_);return Adj;},Bn6:function(aFilter){var AH=
aFilter.DQ(30,3);if(!!AH)aFilter.N3(AH);AH=aFilter.DQ(31,3);if(!!AH)aFilter.N3(AH
);AH=aFilter.DQ(19,3);if(!!AH)aFilter.N3(AH);},A1n:function(AfO,AyS,AI){if(AI.Lh(
))return 5;if(AfO.VisualId<=0)switch(AyS){case 0:if(!AfO.NaisId)return 1;break;case
1:if(!AfO.TransponderId)return 1;break;case 3:case 2:case 5:case 4:return 1;default:
throw new Error(AHp+AyS.toFixed());}if((!AfO.NaisId&&!AfO.TransponderId)&&A._GetAutoObject(
C.Device).Am.AjJ(1,AfO.VisualId))return 2;if(!!AfO.NaisId&&A._GetAutoObject(C.Helper
).AQ6(AfO.NaisId))return 3;if(!!AfO.TransponderId&&A._GetAutoObject(C.Helper).AQ8(
AfO.TransponderId))return 4;return 0;},Aqi:function(Et){Et.EB(A._GetAutoObject(C.
Device).AnimalType);Et.NY(A._GetAutoObject(C.Device).Breed);Et.Q0(A._GetAutoObject(
C.Helper).Dv()-A._GetAutoObject(C.Helper).AmH(A._GetAutoObject(C.Device).AdR));Et.
JQ(A._GetAutoObject(C.Device).Gender);Et.Ng(A._GetAutoObject(C.Device).WhereAbouts
);},AMi:function(Rn,Et){var GB=0;switch(Rn){case 0:GB=A._GetAutoObject(C.Helper).
Ak5(Et.NaisId);break;case 1:GB=A._GetAutoObject(C.Helper).Ak5(Et.TransponderId);
break;case 3:GB=A._GetAutoObject(C.Device).Aq2;break;case 2:GB=A._GetAutoObject(
C.Device).Aq3;break;case 4:case 5:GB=A._GetAutoObject(C.Device).AjU;break;default:
throw new Error(AHq+Rn.toFixed());}return GB;},A$E:function(Alk,L3,BwF,BbB,Bxc){
var B;var Ql=null;var Xw=null;switch(Alk){case 0:{Ql=[B=A._GetAutoObject(C.Device
),B.ASu,B.AZ8];Xw=[B=A._GetAutoObject(C.Device),B.Awh,B.AyL];}break;case 1:switch(
L3){case 1:{Ql=[B=A._GetAutoObject(C.Device),B.A8J,B.Ba5];Xw=[B=A._GetAutoObject(
C.Device),B.Awf,B.AyJ];}break;case 0:{Ql=[B=A._GetAutoObject(C.Device),B.A8K,B.Ba6
];Xw=[B=A._GetAutoObject(C.Device),B.Awg,B.AyK];}break;case 2:{Ql=[B=A._GetAutoObject(
C.Device),B.ASu,B.AZ8];Xw=[B=A._GetAutoObject(C.Device),B.Awh,B.AyL];}break;default:
throw new Error(Ax$+L3.toFixed());}break;default:throw new Error(AHr+Alk.toFixed(
));}if(!!Ql&&!!Xw){Ql[2].call(Ql[0],BwF);if((Xw[1].call(Xw[0])>0)&&(BbB<Bxc))Ql[
2].call(Ql[0],Ql[1].call(Ql[0])+Xw[1].call(Xw[0]));else if((Xw[1].call(Xw[0])<0)&&(
BbB>0))Ql[2].call(Ql[0],Ql[1].call(Ql[0])+Xw[1].call(Xw[0]));return Ql[1].call(Ql[
0]);}return 0;},AVp:function(Et,Alk,BwN){if(!Et||(BwN===true))return;switch(Alk){
case 0:Et.Ne(A._GetAutoObject(C.Device).Av1);break;case 1:switch(Et.Gender){case
0:Et.Ne(A._GetAutoObject(C.Device).AEf);break;case 1:Et.Ne(A._GetAutoObject(C.Device
).AEe);break;case 2:Et.Ne(A._GetAutoObject(C.Device).Av1);break;default:throw new
Error(Ax$+Et.Gender.toFixed());}break;default:throw new Error(AHr+Alk.toFixed());
}},Bje:function(Rn,Et){var result=false;switch(Rn){case 0:result=!!Et.NaisId;break;
case 1:result=!!Et.TransponderId;break;case 3:case 2:case 4:case 5:result=false;
break;default:throw new Error(AHq+Rn.toFixed());}return result;},AKg:function(Et
,Bbv,AyS,Atx,AfH){switch(Bbv){case 2:if(Atx<=0)A._GetAutoObject(C.Device).A9(21,
true,Et.VisualId.toFixed(),0,AfH);else A._GetAutoObject(C.Device).A9(48,true,(Et.
VisualId.toFixed()+Aya)+Atx.toFixed(),0,AfH);break;case 3:if(Atx<=0)A._GetAutoObject(
C.Device).A9(21,true,A._GetAutoObject(C.Converter).Rf(Et.NaisId),0,AfH);else A._GetAutoObject(
C.Device).A9(48,true,(A._GetAutoObject(C.Converter).Rf(Et.NaisId)+Aya)+Atx.toFixed(
),0,AfH);break;case 4:if(Atx<=0)A._GetAutoObject(C.Device).A9(25,true,A._GetAutoObject(
C.Converter).Rf(Et.TransponderId),0,AfH);else A._GetAutoObject(C.Device).A9(47,true
,(A._GetAutoObject(C.Converter).Rf(Et.TransponderId)+Aya)+Atx.toFixed(),0,AfH);break;
case 1:switch(AyS){case 1:A._GetAutoObject(C.Device).A9(42,true,A.jV,0,AfH);break;
case 0:A._GetAutoObject(C.Device).A9(43,true,A.jV,0,AfH);break;case 3:case 2:case
5:case 4:A._GetAutoObject(C.Device).A9(22,true,A.jV,0,AfH);break;default:throw new
Error(AHp+AyS.toFixed());}break;case 5:A._GetAutoObject(C.Device).A9(41,true,A._GetAutoObject(
C.Device).Am.HG().toFixed(),0,AfH);break;case 0:break;default:throw new Error(AV2+
Bbv.toFixed());}},Bc9:function(BbJ,L3){var B;var AAg=null;switch(BbJ){case 0:AAg=[
B=A._GetAutoObject(C.Device),B.Awh,B.AyL];break;case 1:switch(L3){case 1:AAg=[B=
A._GetAutoObject(C.Device),B.Awf,B.AyJ];break;case 0:AAg=[B=A._GetAutoObject(C.Device
),B.Awg,B.AyK];break;case 2:AAg=[B=A._GetAutoObject(C.Device),B.Awh,B.AyL];break;
default:throw new Error(Ax$+L3.toFixed());}break;default:throw new Error(AV3+BbJ.
toFixed());}return AAg;},A6M:function(Qa,Bxp){var AaQ=A._NewObject(A.Core.Bs,0);
AaQ.Initialize(Qa);var ABw=AaQ.Year;var Bf=A._GetAutoObject(C.Device).Pl.Lc(0,ABw
);var U5=A._NewObject(C.CalfDeregistrations,0);if(Bf<0){if(A._GetAutoObject(C.Device
).Pl.Lh())A._GetAutoObject(C.Device).A9(51,true,A._GetAutoObject(C.Device).Pl.HG(
).toFixed(),0,null);else{U5.Gm();U5.AkG(ABw);}}else U5.EM(Bf,A._GetAutoObject(C.
Device).Pl);U5.Awy(U5.Deregistrations+1);if(Bxp)U5.Awx(U5.Deaths+1);U5.Cq(A._GetAutoObject(
C.Device).Pl);},AMg:function(LQ,AlN,AlE){var AKE=0;if((AlN&&(AlE===1))||(LQ===1)
)AKE=1;else if((AlN&&(AlE===2))||(LQ===2))AKE=2;else if(!!LQ&&(LQ!==5))AKE=LQ;return AKE;
},BcJ:function(BxH){var B;if(A._GetAutoObject(C.Device).MeasureState===1){this.SN.
Cw=A._GetAutoObject(C.Device).Z1;this.SN.B2=BxH;this.SN.AnY(this);}},ACS:function(
){var Be=this.AOH();var Bdw=A._NewObject(C.BoolFilterCriterion,0);Bdw.Initialize(
38,0,true,true);Be.CW(Bdw);return Be;},A6s:function(ED){var Be=A._GetAutoObject(
C.Helper).Mo();if(A._GetAutoObject(C.Device).Aqe){var A18=A._GetAutoObject(C.Helper
).AOI(ED,21600,true);Be.CW(A18);}return Be;},A6G:function(){var Be=A._GetAutoObject(
C.Helper).Mo();var BdY=A._NewObject(C.UInt64FilterCriterion,0);BdY.Initialize(26
,0,0,true);Be.CW(BdY);return Be;},A6J:function(){var B;var Be=A._GetAutoObject(C.
Helper).Mo();var AAm=(C.WhereAboutsFilterCriterion.isPrototypeOf(B=Be.DQ(34,3))?
B:null);if(!!AAm)Be.N3(AAm);var Bfi=A._NewObject(C.BoolFilterCriterion,0);Bfi.Initialize(
37,0,true,true);Be.CW(Bfi);return Be;},Sd:function(A7,Atq,A0L){var B;A7=Math.trunc(
A7/this.ApR(Atq));A7%=this.ApR(A0L);return A7;},ApR:function(BbK){switch(BbK){case
0:return 1;case 1:return 10;case 2:return 100;case 3:return 1000;case 4:return 10000;
case 5:return 100000;case 6:return 1000000;case 7:return 10000000;case 8:return 100000000;
case 9:return 1000000000;case 10:return 10000000000;case 11:return 100000000000;
case 12:return 1000000000000;case 13:return 10000000000000;case 14:return 100000000000000;
case 15:return 1000000000000000;default:throw new Error(AV4+BbK.toFixed());}},Mo:
function(){var Be=A._NewObject(C.Filter,0);var BfF=A._NewObject(C.BoolFilterCriterion
,0);BfF.Initialize(10,0,true,true);Be.CW(BfF);var AAm=A._NewObject(C.WhereAboutsFilterCriterion
,0);AAm.Initialize(34,3,6,true);Be.CW(AAm);return Be;},Arb:function(aFilter){return!
this.ACW(aFilter);},ACW:function(aFilter){var Jh=0;var Av=aFilter.AOJ();while(!!
Av){if(Av.YI===false)Jh++;Av=aFilter.AOO(Av);}return Jh;},AOH:function(){var Be=
this.Mo();var U2=A._NewObject(C.AnimalTypeFilterCriterion,0);U2.Initialize(14,0,
1,true);Be.CW(U2);return Be;},AC1:function(){var B;var A38;var J4=this.BiR();A38=(((
B=A._GetAutoObject(C.Converter).Aqy(J4))<0)?B+0x10000000000000000:B)*this.ApR(12
);if((J4===10)&&(A._GetAutoObject(C.Device).Ut>0)){var By$=A._GetAutoObject(C.Helper
).Sd(A._GetAutoObject(C.Device).Ut,10,2)*this.ApR(8);A38+=By$;}return A38;},BiR:
function(){var J4=0;if(A._GetAutoObject(C.Device).Ut>0)J4=A._GetAutoObject(C.Converter
).ZZ(A._GetAutoObject(C.Device).Ut);if(!J4)J4=A._GetAutoObject(C.Converter).A7e(
A._GetAutoObject(C.Device).Language);return J4;},AQ6:function(Xk){var Aiv=A._GetAutoObject(
C.Device).Am.Aej(26,Xk);return Aiv;},Aj6:function(AfI){switch(AfI){case 0:case 1:
case 2:case 3:case 4:case 5:return false;case 6:case 7:case 8:case 9:case 10:return true;
default:throw new Error(AV5+AfI.toFixed());}},BgT:function(Rn,Et){var GB=0;switch(
Rn){case 1:GB=A._GetAutoObject(C.Helper).Ak5(Et.TransponderId);break;case 0:if(!
A._GetAutoObject(C.Device).EartagNrAssignmentMode)GB=A._GetAutoObject(C.Device).
AjU;else switch(Et.Gender){case 0:GB=A._GetAutoObject(C.Device).Aq3;break;case 1:
GB=A._GetAutoObject(C.Device).Aq2;break;case 2:GB=A._GetAutoObject(C.Device).AjU;
break;default:throw new Error(AHs+Et.Gender.toFixed());}break;default:throw new Error(
AV6+Rn.toFixed());}return GB;},Bin:function(){var B;var AzV=(((((((A.aaR(A.acf.AhD
)+A.aaR(A.acf.Colon))+O5)+A._GetAutoObject(C.Device).AhD)+Ayb)+A.aaR(A.acf.BnO))+
A.aaR(A.acf.Colon))+O5)+A._GetAutoObject(A.acj.KK).Bil(((B=A._GetAutoObject(C.Device
).QV.Timestamp)<0)?B+0x100000000:B);return AzV;},Bio:function(){var B;var AzV=((((((((((((((((((((((((((((
AV7+A._GetAutoObject(C.Device).RU.AD7.toFixed())+Lv)+A._GetAutoObject(C.Device).
RU.AEb.toFixed())+Lv)+A._GetAutoObject(C.Device).RU.AGn.toFixed())+O4)+A._GetAutoObject(
C.Device).RU.ACi)+O4)+A._GetAutoObject(A.acj.KK).AjM(((B=A._GetAutoObject(C.Device
).RU.Timestamp)<0)?B+0x100000000:B))+O5)+AV8)+A._GetAutoObject(C.Device).Su.AD7.
toFixed())+Lv)+A._GetAutoObject(C.Device).Su.AEb.toFixed())+Lv)+A._GetAutoObject(
C.Device).Su.AGn.toFixed())+O4)+A._GetAutoObject(C.Device).Su.ACi)+O4)+A._GetAutoObject(
A.acj.KK).AjM(((B=A._GetAutoObject(C.Device).Su.Timestamp)<0)?B+0x100000000:B))+
O5)+AV9)+A._GetAutoObject(C.Helper).BiU())+O4)+A._GetAutoObject(C.Device).GetCommitHash(
))+O4)+A._GetAutoObject(C.Device).GetCommitCount().toFixed())+O4)+A._GetAutoObject(
A.acj.KK).AjM(A._GetAutoObject(C.Device).GetCommitEpoch());return AzV;},Bim:function(
){var B;var AzV=(((((((((((((((((((((AV_+A._GetAutoObject(C.Device).QV.ARu.toFixed(
))+Lv)+A._GetAutoObject(C.Device).QV.ARv.toFixed())+Lv)+A._GetAutoObject(C.Device
).QV.ARt.toFixed())+O5)+A.aaR(A.acf.A6l))+A.aaR(A.acf.Colon))+N$)+A._GetAutoObject(
A.acj.KK).AjM(((B=A._GetAutoObject(C.Device).QV.Timestamp)<0)?B+0x100000000:B))+
Ayb)+AV$)+A._GetAutoObject(C.Device).ST.AVg.toFixed())+Lv)+A._GetAutoObject(C.Device
).ST.AVh.toFixed())+Lv)+A._GetAutoObject(C.Device).ST.AVf.toFixed())+O5)+A.aaR(A.
acf.A6l))+A.aaR(A.acf.Colon))+N$)+A._GetAutoObject(A.acj.KK).AjM(((B=A._GetAutoObject(
C.Device).ST.Timestamp)<0)?B+0x100000000:B);return AzV;},A6H:function(A0L){var B;
var O;var AAT=A.jV;for(O=1;O<=A0L;O=O+1)if(!!A.abz(0,2))AAT=AAT+String.fromCharCode(
A.abz(97,104)&0xFFFF);else AAT=AAT+String.fromCharCode(A.abz(48,57)&0xFFFF);return AAT;
},Abr:function(Em){var Ay$=0;if(Em===1)Em=0;var Bco=this.Agy.Avo(Em);if(Bco>=0)Ay$=
this.Afv.Get(Bco);return Ay$;},AC3:function(Em){var FS=0;var ABu=this.Agy.Avo(Em
);if(ABu>=0)FS=this.Afu.Get(ABu);return FS;},AC2:function(Em){var FS=0;var ABu=this.
Agy.Avo(Em);if(ABu>=0)FS=this.Aft.Get(ABu);return FS;},A6y:function(){var Be=this.
Mo();var U2=A._NewObject(C.AnimalTypeFilterCriterion,0);U2.Initialize(14,0,A._GetAutoObject(
C.Device).ACC,true);Be.CW(U2);return Be;},AQ9:function(J2){var BP=Math.trunc(J2/
1000000000000)|0;if(!BP)return 0;else if(BP>=900)return 1;else if(!A._GetAutoObject(
C.Converter).ANx(BP))return 2;else return 3;},A6L:function(){var Be=A._GetAutoObject(
C.Helper).ACV();var AfN=A._GetAutoObject(C.Helper).A6t(3,A._GetAutoObject(C.Device
).AD_);AfN.YI=true;Be.CW(AfN);return Be;},A6t:function(Eb,Bbu){var Av=A._NewObject(
C.UInt32FilterCriterion,0);Av.EJ=4;switch(Eb){case 2:{Av.Operator=3;Av.A4=A._GetAutoObject(
C.Helper).ZQ(Bbu);}break;case 3:{Av.Operator=2;Av.A4=A._GetAutoObject(C.Helper).
ZQ(Bbu-1);}break;default:A.ab5("%s%e",AWa,Eb);}return Av;},BiU:function(){return(((
A._GetAutoObject(C.Device).GetVersionMajor().toFixed()+Lv)+A._GetAutoObject(C.Device
).GetVersionMinor().toFixed())+Lv)+A._GetAutoObject(C.Device).GetVersionRev().toFixed(
);},A4Q:function(Rn,Et){var GB=0;switch(Rn){case 0:GB=Et.VisualId;break;case 2:GB=
A._GetAutoObject(C.Helper).Ak5(Et.TransponderId);break;case 3:if(Et.NaisId>0)GB=
A._GetAutoObject(C.Helper).Ak5(Et.NaisId);break;case 1:if(!A._GetAutoObject(C.Device
).EartagNrAssignmentMode)GB=A._GetAutoObject(C.Device).AjU;else switch(Et.Gender
){case 0:GB=A._GetAutoObject(C.Device).Aq3;break;case 1:GB=A._GetAutoObject(C.Device
).Aq2;break;case 2:GB=A._GetAutoObject(C.Device).AjU;break;default:throw new Error(
AHs+Et.Gender.toFixed());}break;default:throw new Error(AWb+Rn.toFixed());}return GB;
},A$F:function(){var B;var IT=null;var Te=0;if(!A._GetAutoObject(C.Device).EartagNrAssignmentMode
){IT=[B=A._GetAutoObject(C.Device),B.Ant,B.AoB];Te=A._GetAutoObject(C.Device).Au0;
}else switch(A._GetAutoObject(C.Helper).W.Gender){case 1:{IT=[B=A._GetAutoObject(
C.Device),B.Awb,B.AyH];Te=A._GetAutoObject(C.Device).ACu;}break;case 0:{IT=[B=A.
_GetAutoObject(C.Device),B.Awc,B.AyI];Te=A._GetAutoObject(C.Device).ACv;}break;case
2:{IT=[B=A._GetAutoObject(C.Device),B.Ant,B.AoB];Te=A._GetAutoObject(C.Device).Au0;
}break;default:;}if(!!IT)switch(Te){case 1:IT[2].call(IT[0],A._GetAutoObject(C.Helper
).W.VisualId-1);break;case 0:IT[2].call(IT[0],A._GetAutoObject(C.Helper).W.VisualId+
1);break;default:;}},A7c:function(Xk,Et){return(Et.NaisId!==Xk)&&this.AQ6(Xk);},
Bjn:function(Jf,Et){return(Et.TransponderId!==Jf)&&this.AQ8(Jf);},AOF:function(){
var Be=A._GetAutoObject(C.Helper).A6J();var AAe=A._NewObject(C.UInt64FilterCriterion
,0);AAe.Initialize(35,5,0,true);Be.CW(AAe);return Be;},ACX:function(){var Be=A._GetAutoObject(
C.Helper).A6J();var AAe=A._NewObject(C.UInt64FilterCriterion,0);AAe.Initialize(35
,0,0,true);Be.CW(AAe);return Be;},JW:function(A0C,Ah3){A0C.Aj(Ah3);A0C.Ar(Ah3);A0C.
Z(Ah3);},ANr:function(Ah5){var B;var Aa;var A2I=false;var Xq=Ah5.TL(null,0x1);while(
!!Xq&&(((B=Xq)?B.__proto__:null)!==A.Core.Y)){Aa=(A.kR.Co.isPrototypeOf(Xq)?Xq:null
);if(!!Aa){Aa.Bg(A2I);A2I=!A2I;}Xq=Ah5.TL(Xq,0x1);}},Bn7:function(Jf){var Ac9=A.
_GetAutoObject(C.Device).Am.Filter;A._GetAutoObject(C.Device).Am.Bl(null);var A3Q=
A._GetAutoObject(C.Device).Am.AgQ(22,Jf);A._GetAutoObject(C.Device).Am.SK(A3Q,22
,0);A._GetAutoObject(C.Device).Am.Bl(Ac9);},A6w:function(Atp){var Be=null;switch(
Atp){case 0:Be=this.BiF();break;case 1:Be=this.ACV();break;default:throw new Error(
Ayc+Atp.toFixed());}return Be;},BiF:function(){var Be=A._GetAutoObject(C.Helper).
Mo();var AfN=this.A6t(2,100);Be.CW(AfN);return Be;},Bx6:function(Atp){var Ac9=A.
_GetAutoObject(C.Device).Am.Filter;A._GetAutoObject(C.Device).Am.Bl(this.A6w(Atp
));var O;for(O=0;O<A._GetAutoObject(C.Device).Am.Ca();O++)A._GetAutoObject(C.Device
).Am.MB(O,10,false);A._GetAutoObject(C.Device).Am.Bl(Ac9);},BiG:function(Atp){var
Ac9=A._GetAutoObject(C.Device).Am.Filter;A._GetAutoObject(C.Device).Am.Bl(this.A6w(
Atp));var Gd=A._GetAutoObject(C.Device).Am.Ca();A._GetAutoObject(C.Device).Am.Bl(
Ac9);return Gd;},Arv:function(){return this.Uw;},A8U:function(){return this.AhA;
},Bk0:function(){return this.AUp;},Bk1:function(){return this.AUq;},Bk4:function(
){return this.AGP;},_Init:function(aArg){C.AmM._Init.call(this,aArg);C.Animal._Init.
call(this.W={I:this},0);A.Core.Bs._Init.call(this.Au={I:this},0);A.acl.Gh._Init.
call(this.KF={I:this},0);A.acl.Gh._Init.call(this.SN={I:this},0);C.AMC._Init.call(
this.AdY={I:this},0);C.AU7._Init.call(this.UC={I:this},0);C.AU6._Init.call(this.
UB={I:this},0);C.TE._Init.call(this.Ael={I:this},0);C.AVK._Init.call(this.Afu={I:
this},0);C.AVJ._Init.call(this.Aft={I:this},0);C.AVI._Init.call(this.Afs={I:this
},0);C.AVM._Init.call(this.Afv={I:this},0);C.AMD._Init.call(this.Agy={I:this},0);
this.__proto__=C.HelperClass;var B;this.KF.HM(1);this.KF.Fl(3000);this.KF.B2=100;
this.SN.AwD(10);this.SN.WC(5);this.SN.HM(1);this.SN.Fl(4000);this.Ael.B2=false;this.
Ael.Cw=true;this.Ael.HM(1);this.Ael.Fl(100);this.KF.Sv=[this,this.BBU];this.KF.Q=[
this,this.Bk4,this.Bnk];this.SN.Sv=[this,this.BBW];this.SN.Q=[B=A._GetAutoObject(
C.Device),B.AEC,B.AIP];this.Ael.Q=[B=A._GetAutoObject(C.Device),B.AED,B.AIQ];this.
Init(aArg);var Lw=this._variants();if(Lw){this.K={};Lw._Init.call(this,aArg);}},
_Done:function(){if(this.K)this.K._Done.call(this);this.__proto__=C.AmM;this.W._Done(
);this.Au._Done();this.KF._Done();this.SN._Done();this.AdY._Done();this.UC._Done(
);this.UB._Done();this.Ael._Done();this.Afu._Done();this.Aft._Done();this.Afs._Done(
);this.Afv._Done();this.Agy._Done();C.AmM._Done.call(this);},_ReInit:function(){
C.AmM._ReInit.call(this);this.W._ReInit();this.Au._ReInit();this.KF._ReInit();this.
SN._ReInit();this.AdY._ReInit();this.UC._ReInit();this.UB._ReInit();this.Ael._ReInit(
);this.Afu._ReInit();this.Aft._ReInit();this.Afs._ReInit();this.Afv._ReInit();this.
Agy._ReInit();if(this.K)this.K._ReInit.call(this);},_Mark:function(D){var B;C.AmM.
_Mark.call(this,D);if((B=this.Uw)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.
AhA)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.AUp)&&(B._cycle!=D))B._Mark(B.
_cycle=D);if((B=this.AUq)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.W)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.Au)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
KF)._cycle!=D)B._Mark(B._cycle=D);if((B=this.SN)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.AdY)._cycle!=D)B._Mark(B._cycle=D);if((B=this.UC)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.UB)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ael)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Afu)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Aft)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.Afs)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
Afv)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Agy)._cycle!=D)B._Mark(B._cycle=D);
if(this.K)this.K._Mark(D);},_variants:function(){return A.acs.HelperClass._variants(
);},K:null,_className:"Device::HelperClass"};C.Helper={_Init:function(){C.HelperClass.
_Init.call(this,0);},_ReInit:function(){},_variants:function(){return this;},_this:
null};C.BoolFilterCriterion={A4:false,Abk:function(){var Av=A._NewObject(C.BoolFilterCriterion
,0);Av.Fg(this);return Av;},Fg:function(AH){C.FilterCriterion.Fg.call(this,AH);var
Av=(C.BoolFilterCriterion.isPrototypeOf(AH)?AH:null);if(!!Av)this.A4=Av.A4;},Initialize:
function(A3,Eb,A7,P_){this.EJ=A3;this.Operator=Eb;this.A4=A7;this.YI=P_;return this;
},_Init:function(aArg){C.FilterCriterion._Init.call(this,aArg);this.__proto__=C.
BoolFilterCriterion;},_className:"Device::BoolFilterCriterion"};C.UInt32FilterCriterion={
A4:0,Abk:function(){var Av=A._NewObject(C.UInt32FilterCriterion,0);Av.Fg(this);return Av;
},Fg:function(AH){C.FilterCriterion.Fg.call(this,AH);var Av=(C.UInt32FilterCriterion.
isPrototypeOf(AH)?AH:null);if(!!Av)this.A4=Av.A4;},Initialize:function(A3,Eb,A7,
P_){this.EJ=A3;this.Operator=Eb;this.A4=A7;this.YI=P_;return this;},_Init:function(
aArg){C.FilterCriterion._Init.call(this,aArg);this.__proto__=C.UInt32FilterCriterion;
},_className:"Device::UInt32FilterCriterion"};C.OverlayMenu={None:0,Home:1,AutoAction:
2,MenuItemSettings:3,RatingSettings:4,WeighingSettings:5,Options:6,AnimalSearch:
7,ActionSettings:8,MeasurementReady:9,AnimalMultiInfoMenu:10,AnimalSearchUnfiltered:
11,AnimalSearchDriedOff:12,MassRecordingMenu:13,MassRecordingDefaults:14,MassRecordingFields:
15,PurchasedAnimalsListMenu:16,BirthRegistrationsListMenu:17,LAST:18};C.EnumToString={
BI:function(A5){throw new Error(As0+A5.toFixed());},Lt:function(A5){return this.
BI(A5);},_Init:function(aArg){this.__proto__=C.EnumToString;A.h7++;},_Done:function(
){this.__proto__=null;A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((
B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:
"Device::EnumToString"};C.ScreenTypeToString={BI:function(A5){var AJT=A5;var BD;
switch(AJT){case 3:BD=A.aaR(A.acf.Avu);break;case 34:BD=A.aaR(A.acf.Tt);break;case
35:BD=A.aaR(A.acf.Vq);break;case 43:BD=A.aaR(A.acf.AOE);break;default:BD=this.Bpu(
A5);}return BD;},Bpu:function(A5){var AJT=A5;var BD=A.jV;switch(AJT){case 0:BD=As1;
break;case 2:BD=AWc;break;case 4:BD=AWd;break;case 39:BD=AWe;break;case 38:BD=AWf;
break;case 63:BD=AHt;break;case 64:BD=AWg;break;case 82:BD=AHu;break;case 83:BD=
AHv;break;case 92:BD=AHw;break;case 93:BD=AWh;break;case 65:BD=AHx;break;case 3:
BD=AHy;break;case 6:BD=AWi;break;case 16:BD=Rk;break;case 22:BD=Xc;break;case 42:
BD=AWj;break;case 88:BD=AWk;break;case 87:BD=AWl;break;case 89:BD=AWm;break;case
95:BD=AWn;break;case 17:BD=AWo;break;case 23:BD=AWp;break;case 18:BD=AhU;break;case
19:BD=AHz;break;case 37:BD=AWq;break;case 76:BD=AWr;break;case 1:BD=AHA;break;case
5:BD=AHB;break;case 7:BD=Ayd;break;case 81:BD=P7;break;case 8:BD=AWs;break;case 9:
BD=AWt;break;case 40:BD=AWu;break;case 41:BD=As2;break;case 24:BD=AWv;break;case
10:BD=AWw;break;case 60:BD=AWx;break;case 21:BD=AWy;break;case 11:BD=AWz;break;case
29:BD=AWA;break;case 48:BD=As3;break;case 30:BD=AWB;break;case 12:BD=AWC;break;case
13:BD=AWD;break;case 14:BD=AWE;break;case 15:BD=AWF;break;case 69:BD=AWG;break;case
70:BD=AWH;break;case 20:BD=AWI;break;case 25:BD=AWJ;break;case 66:BD=AWK;break;case
59:BD=AHC;break;case 58:BD=Ale;break;case 56:BD=AWL;break;case 57:BD=AWM;break;case
68:BD=AWN;break;case 67:BD=Aye;break;case 84:BD=Alf;break;case 77:BD=AhV;break;case
26:BD=Ayf;break;case 28:BD=Aoq;break;case 27:BD=AhW;break;case 31:BD=AWO;break;case
78:BD=Ayg;break;case 34:BD=AHD;break;case 35:BD=AfB;break;case 32:BD=AHE;break;case
45:BD=Aaf;break;case 49:BD=Alg;break;case 55:BD=Aor;break;case 54:BD=AWP;break;case
33:BD=AWQ;break;case 36:BD=AWR;break;case 50:BD=AWS;break;case 75:BD=AWT;break;case
43:BD=As4;break;case 44:BD=AHF;break;case 61:BD=AHG;break;case 62:BD=AWU;break;case
46:BD=AWV;break;case 47:BD=AWW;break;case 85:BD=AWX;break;case 86:BD=AWY;break;case
71:BD=AWZ;break;case 72:BD=AW0;break;case 74:BD=AW1;break;case 73:BD=AW2;break;case
51:BD=AW3;break;case 52:BD=AW4;break;case 53:BD=Ayh;break;case 79:BD=AHH;break;case
80:BD=AHI;break;case 90:BD=AHJ;break;case 91:BD=AHK;break;case 94:BD=AHL;break;default:
throw new Error(AHM+AJT.toFixed());}return BD;},_Init:function(aArg){C.EnumToString.
_Init.call(this,aArg);this.__proto__=C.ScreenTypeToString;},_className:"Device::ScreenTypeToString"
};C.OverlayMenuToString={BI:function(A5){var Bfd=A5;var On=A.jV;switch(Bfd){case
0:On=AW5;break;case 1:On=AHy;break;case 8:On=AW6;break;case 2:On=AW7;break;case 3:
On=AW8;break;case 4:On=AW9;break;case 5:On=AW_;break;case 6:On=AW$;break;case 7:
On=Ayi;break;case 11:On=AHN;break;case 12:On=AXa;break;case 9:On=AHO;break;case 10:
On=AhX;break;case 14:On=UV;break;case 15:On=AXb;break;case 13:On=Aag;break;case 16:
On=AXc;break;case 17:On=AXd;break;default:throw new Error(Alh+Bfd.toFixed());}return On;
},_Init:function(aArg){C.EnumToString._Init.call(this,aArg);this.__proto__=C.OverlayMenuToString;
},_className:"Device::OverlayMenuToString"};C.ScanStateToString={BI:function(A5){
var BfO=A5;var Bp=A.jV;switch(BfO){case 4:Bp=Aah;break;case 0:Bp=AcQ;break;case 2:
Bp=Ayj;break;case 3:Bp=AXe;break;case 1:Bp=Oa;break;default:throw new Error(AHP+
BfO.toFixed());}return Bp;},_Init:function(aArg){C.EnumToString._Init.call(this,
aArg);this.__proto__=C.ScanStateToString;},_className:"Device::ScanStateToString"
};C.MeasureStateToString={BI:function(A5){var BdS=A5;var Bp=A.jV;switch(BdS){case
4:Bp=Aah;break;case 0:Bp=AcQ;break;case 2:Bp=AXf;break;case 1:Bp=Oa;break;case 3:
Bp=AHQ;break;default:throw new Error(AXg+BdS.toFixed());}return Bp;},_Init:function(
aArg){C.EnumToString._Init.call(this,aArg);this.__proto__=C.MeasureStateToString;
},_className:"Device::MeasureStateToString"};C.TemperatureUnit={Celsius:0,Fahrenheit:
1,LAST:2};C.TemperatureUnitToString={BI:function(A5){var Bgb=A5;var Ap8=A.jV;switch(
Bgb){case 0:Ap8=A.aaR(A.acf.BpN);break;case 1:Ap8=A.aaR(A.acf.BpO);break;default:
throw new Error(AHR+Bgb.toFixed());}return Ap8;},_Init:function(aArg){C.EnumToString.
_Init.call(this,aArg);this.__proto__=C.TemperatureUnitToString;},_className:"Device::TemperatureUnitToString"
};C.AnimalType={DairyCalf:0,DairyCow:1,SheepLamb:2,LAST:3};C.AnimalTypeToString={
BI:function(A5){var AK5=A5;var type=A.jV;switch(AK5){case 0:type=A.aaR(A.acf.Bhj
);break;case 1:type=A.aaR(A.acf.Bhx);break;case 2:type=A.aaR(A.acf.Bjv);break;default:
throw new Error(AHS+AK5.toFixed());}return type;},_Init:function(aArg){C.EnumToString.
_Init.call(this,aArg);this.__proto__=C.AnimalTypeToString;},_className:"Device::AnimalTypeToString"
};C.Language={Default:0,German:1,Spanish:2,French:3,Italian:4,Finnish:5,Chinese_TW:
6,Turkish:7,Greek:8,Russian:9,Dutch:10,Czech:11,Estonian:12,Bulgarian:13,Bosnian:
14,Norwegian:15,Ukrainian:16,LAST:17};C.LanguageToString={BI:function(A5){var Az9=
A5;var O$=A.jV;switch(Az9){case 0:O$=AXh;break;case 10:O$=AXi;break;case 1:O$=AXj;
break;case 12:O$=AXk;break;case 5:O$=AXl;break;case 3:O$=AXm;break;case 8:O$=AXn;
break;case 13:O$=AXo;break;case 4:O$=AHT;break;case 9:O$=AXp;break;case 2:O$=AHU;
break;case 7:O$=AHV;break;case 6:O$=Ayk;break;case 11:O$=AXq;break;case 14:O$=AXr;
break;case 15:O$=AXs;break;case 16:O$=AXt;break;default:throw new Error(AHW+Az9.
toFixed());}return O$;},Lt:function(A5){var Az9=A5;var Dn=A.jV;switch(Az9){case 0:
Dn=AXu;break;case 10:Dn=W_;break;case 1:Dn=P5;break;case 12:Dn=AXv;break;case 5:
Dn=UQ;break;case 3:Dn=W4;break;case 8:Dn=AXw;break;case 13:Dn=W1;break;case 4:Dn=
W5;break;case 9:Dn=S6;break;case 2:Dn=Aab;break;case 7:Dn=Aad;break;case 6:Dn=As5;
break;case 11:Dn=As6;break;case 14:Dn=AHX;break;case 15:Dn=S5;break;case 16:Dn=J0;
break;default:throw new Error(AHW+Az9.toFixed());}return Dn;},_Init:function(aArg
){C.EnumToString._Init.call(this,aArg);this.__proto__=C.LanguageToString;},_className:
"Device::LanguageToString"};C.Gender={Male:0,Female:1,Unknown:2,LAST:3};C.BirthType={
Single:0,Twins:1,Triplets:2,Quadruplets:3,LAST:4};C.GenderToString={BI:function(
A5){var AtO=A5;var AJ$=A.jV;switch(AtO){case 0:AJ$=A.aaR(A.acf.Male);break;case 1:
AJ$=A.aaR(A.acf.Female);break;case 2:AJ$=A.aaR(A.acf.Unknown);break;default:throw new
Error(AXx+AtO.toFixed());}return AJ$;},_Init:function(aArg){C.EnumToString._Init.
call(this,aArg);this.__proto__=C.GenderToString;},_className:"Device::GenderToString"
};C.BirthTypeToString={BI:function(A5){var type=A5;var AfR=A.jV;switch(type){case
0:AfR=A.aaR(A.acf.BoI);break;case 1:AfR=A.aaR(A.acf.BpJ);break;case 2:AfR=A.aaR(
A.acf.Triplets);break;case 3:AfR=A.aaR(A.acf.Quadruplets);break;default:throw new
Error(AXy+type.toFixed());}return AfR;},_Init:function(aArg){C.EnumToString._Init.
call(this,aArg);this.__proto__=C.BirthTypeToString;},_className:"Device::BirthTypeToString"
};C.SyncState={Idle:0,Init:1,Exporting:2,ImportStart:3,Importing:4,ImportFinish:
5,Ready:6,Error:7,LAST:8};C.SyncStateToString={BI:function(A5){var Bf7=A5;var Bp=
A.jV;switch(Bf7){case 7:Bp=Aah;break;case 0:Bp=AcQ;break;case 6:Bp=AHQ;break;case
2:Bp=AXz;break;case 5:Bp=AXA;break;case 3:Bp=AXB;break;case 4:Bp=AXC;break;case 1:
Bp=AXD;break;default:throw new Error(AXE+Bf7.toFixed());}return Bp;},_Init:function(
aArg){C.EnumToString._Init.call(this,aArg);this.__proto__=C.SyncStateToString;},
_className:"Device::SyncStateToString"};C.RatedAttributeToString={BI:function(A5
){var AAU=A5;switch(AAU){case 0:return A.jV;case 1:return A.aaR(A.acf.BnW);case 4:
return A.aaR(A.acf.BnV);case 3:return A.aaR(A.acf.BnX);case 2:return A.aaR(A.acf.
BnU);default:throw new Error(AHY+AAU.toFixed());}},Lt:function(A5){var AAU=A5;switch(
AAU){case 0:return A.jV;case 1:return A.aaR(A.acf.Feed);case 4:return A.aaR(A.acf.
AGf);case 3:return A.aaR(A.acf.AGg);case 2:return A.aaR(A.acf.AGd);default:throw new
Error(AHY+AAU.toFixed());}},_Init:function(aArg){C.EnumToString._Init.call(this,
aArg);this.__proto__=C.RatedAttributeToString;},_className:"Device::RatedAttributeToString"
};C.AssesmentToString={BI:function(A5){var Alt=A5;var Azg=A.jV;switch(Alt){case 0:
case 5:Azg=A.jV;break;case 3:Azg=A.aaR(A.acj.BoO);break;case 2:Azg=A.aaR(A.acj.BoQ
);break;case 1:Azg=A.aaR(A.acj.BoP);break;default:throw new Error(AXF+Alt.toFixed(
));}return Azg;},_Init:function(aArg){C.EnumToString._Init.call(this,aArg);this.
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
7,ClosedWithNo:8,Opened:9};C.PopupContext={AF2:null,AkI:A.jV,Ak2:0,PopupState:1,
Id:0,Show:false,Bm5:function(E){var B;if(this.PopupState===E)return;this.PopupState=
E;if(!!this.AF2)(B=this.AF2)?B[1].call(B[0],this):null;},_Init:function(aArg){this.
__proto__=C.PopupContext;A.h7++;},_Done:function(){this.__proto__=null;A.h7--;},
_ReInit:function(){},_Mark:function(D){var B;if((B=this.AF2)&&((B=B[0])._cycle!=
D))B._Mark(B._cycle=D);if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null
,_cycle:0,_observers:null,_className:"Device::PopupContext"};C.Boolean={No:0,Yes:
1,LAST:2};C.BooleanToYesNo={BI:function(A5){switch(A5){case 0:return A.aaR(A.acf.
No);case 1:return A.aaR(A.acf.Yes);default:return Ayl+A5.toFixed();}},_Init:function(
aArg){C.EnumToString._Init.call(this,aArg);this.__proto__=C.BooleanToYesNo;},_className:
"Device::BooleanToYesNo"};C.AnimalGroupTableFields={Id:0,GroupName:1};C.AnimalGroup={
GroupName:AHo,Id:0,EM:function(Ad,AI){var HA=C.Row.EM.call(this,Ad,AI);if(HA&&!!
AI){this.OnSetId(AI.CE(Ad,0));this.AE$(AI.VU(Ad,1));}return HA;},Cq:function(AI){
var HA=C.Row.Cq.call(this,AI);if(HA&&!!AI){var Jk=AI.Oy();if(Jk<=0)A.ab5("%s",Xb
);else{if(this.Am7())this.CL=AI.YF();AI.Hj(this.CL,0,this.Id);AI.ZI(this.CL,1,this.
GroupName);AI.OA(Jk);}}return HA;},Gm:function(){C.Row.Gm.call(this);this.OnSetId(-
1);},Hi:function(){C.Row.Hi.call(this);this.OnSetId(0);this.AE$(A.jV);},OnSetId:
function(E){if(this.Id===E)return;this.Id=E;A.abo([this,this.QY,this.OnSetId],0);
},AE$:function(E){if(this.GroupName===E)return;this.GroupName=E;A.abo([this,this.
BkF,this.AE$],0);},QY:function(){return this.Id;},BkF:function(){return this.GroupName;
},_Init:function(aArg){C.Row._Init.call(this,aArg);this.__proto__=C.AnimalGroup;
this.TableId=3;},_className:"Device::AnimalGroup"};C.PopupIdToString={BI:function(
A5){var AdC=A5;var Ax=A.jV;var AJR;AJR=A.aaR(A.acf.Bp7)+O5;switch(AdC){case 0:Ax=
A.aaR(A.acf.Unknown);break;case 1:Ax=A.aaR(A.acf.SevereError);break;case 58:Ax=A.
aaR(A.acf.Bia);break;case 2:Ax=A.aaR(A.acf.Bh_);break;case 3:Ax=A.aaR(A.acf.BpT);
break;case 77:Ax=A._GetAutoObject(C.Helper).Bio();break;case 78:Ax=A._GetAutoObject(
C.Helper).Bim();break;case 79:Ax=A._GetAutoObject(C.Helper).Bin();break;case 9:Ax=
A.aaR(A.acf.Bqj);break;case 5:Ax=A.aaR(A.acf.SuccessDataSync);break;case 8:Ax=A.
aaR(A.acf.SuccessResetFactorySettings);break;case 34:Ax=A.aaR(A.acf.SuccessResetAnimalData
);break;case 10:Ax=A._GetAutoObject(C.Device).AC0();break;case 82:Ax=A.aaR(A.acf.
Bic);break;case 83:Ax=A.aaR(A.acf.Bid);break;case 80:Ax=A.aaR(A.acf.Bo0);break;case
81:Ax=A.aaR(A.acf.SuccessRestoreBackup);break;case 91:Ax=A.aaR(A.acf.Bg9);break;
case 92:Ax=A.aaR(A.acf.Bn_);break;case 4:Ax=A.aaR(A.acf.WarningDataSync);break;case
7:Ax=A.aaR(A.acf.Bqh);break;case 33:Ax=A.aaR(A.acf.WarningResetAnimalData);break;
case 6:Ax=A.aaR(A.acf.WarningRestart);break;case 27:Ax=A.aaR(A.acf.WarningNoActionDefined
);break;case 64:Ax=A.aaR(A.acf.WarningActionNotApplicable);break;case 28:Ax=A.aaR(
A.acf.WarningNoMenuItemVisible);break;case 29:Ax=A.aaR(A.acf.WarningEnterPresentationMode
);break;case 30:Ax=A.aaR(A.acf.WarningNoAnimalsRegistered);break;case 41:Ax=((AJR+
A.aaR(A.acf.ARC))+O5)+A.aaR(A.acf.BjJ);break;case 50:Ax=((AJR+A.aaR(A.acf.ARC))+
O5)+A.aaR(A.acf.BjL);break;case 51:Ax=((AJR+A.aaR(A.acf.ARC))+O5)+A.aaR(A.acf.BjK
);break;case 42:Ax=A.aaR(A.acf.Bqf);break;case 45:Ax=A.aaR(A.acf.Bp$);break;case
46:Ax=A.aaR(A.acf.WarningNoValidCountryCode);break;case 57:Ax=A.aaR(A.acf.WarningOutdatedAnimalWeight
);break;case 52:Ax=A.aaR(A.acf.WarningOutdatedAnimalWeights);break;case 53:Ax=A.
aaR(A.acf.WarningWeightEvaluationSingular);break;case 56:Ax=A.aaR(A.acf.WarningWeightEvaluationPlural
);break;case 11:Ax=A.aaR(A.acf.ScanError);break;case 12:Ax=A.aaR(A.acf.ScanNotFound
);break;case 13:Ax=A.aaR(A.acf.Bg1);break;case 36:Ax=A.aaR(A.acf.BpC);break;case
14:Ax=A.aaR(A.acf.AnimalNotFound);break;case 15:Ax=A.aaR(A.acf.SuccessUnregister
);break;case 35:Ax=A.aaR(A.acf.SuccessUnregisterPerished);break;case 26:Ax=A.aaR(
A.acf.SuccessCreationNewAnimal);break;case 23:Ax=A.aaR(A.acf.SuccessCreationNewAnimals
);break;case 24:Ax=A.aaR(A.acf.BhA);break;case 49:Ax=A.aaR(A.acf.EvaluationInProgress
);break;case 16:Ax=A.aaR(A.acf.BhG);break;case 17:Ax=A.aaR(A.acf.BoS);break;case
18:Ax=A.aaR(A.acf.Bo6);break;case 19:Ax=A.aaR(A.acf.BoT);break;case 20:Ax=A.aaR(
A.acf.Bo7);break;case 54:Ax=A.aaR(A.acf.Bo1);break;case 55:Ax=A.aaR(A.acf.Bo4);break;
case 21:Ax=A.aaR(A.acf.A$J);break;case 48:Ax=(A.aaR(A.acf.A$J)+O5)+A.aaR(A.acf.A5w
);break;case 22:Ax=A.aaR(A.acf.Bqb);break;case 63:Ax=A.aaR(A.acf.Bqc);break;case
85:Ax=A.aaR(A.acf.Bqe);break;case 43:Ax=A.aaR(A.acf.Bqd);break;case 25:Ax=A.aaR(
A.acf.A$u);break;case 47:Ax=(A.aaR(A.acf.A$u)+O5)+A.aaR(A.acf.A5w);break;case 107:
Ax=A.aaR(A.acf.BpP);break;case 31:{var BzA=(((((((((((((((((((A.aaR(A.acf.Bhr)+Ayb
)+A.aaR(A.acf.ANt))+A.aaR(A.acf.Colon))+N$)+A.aaR(A.acf.Bht))+O5)+A.aaR(A.acf.AOu
))+A.aaR(A.acf.Colon))+N$)+A.aaR(A.acf.Bii))+O5)+A.aaR(A.acf.AUa))+A.aaR(A.acf.Colon
))+N$)+A.aaR(A.acf.BnZ))+O5)+A.aaR(A.acf.AT$))+A.aaR(A.acf.Colon))+N$)+A.aaR(A.acf.
BnY);Ax=BzA;}break;case 32:Ax=A.aaR(A.acf.BpD);break;case 69:Ax=A.aaR(A.acf.BjW);
break;case 44:Ax=A.aaR(A.acf.Bqi);break;case 37:Ax=A.aaR(A.acf.WarningResetWeightSettings
);break;case 38:Ax=A.aaR(A.acf.WarningResetTempThresholds);break;case 39:Ax=A.aaR(
A.acf.BnP);break;case 76:Ax=(A.aaR(A.acf.A4$)+O5)+A.aaR(A.acf.AUc);break;case 40:
Ax=A.aaR(A.acf.Bo2);break;case 75:Ax=A.aaR(A.acf.BoU);break;case 59:Ax=A.aaR(A.acf.
QuestionAddAnotherCalfMultiples);break;case 62:Ax=A.aaR(A.acf.BoW);break;case 96:
Ax=A.aaR(A.acf.BoX);break;case 60:Ax=A.aaR(A.acf.BoY);break;case 98:Ax=A.aaR(A.acf.
BoZ);break;case 61:Ax=A.aaR(A.acf.Bo8);break;case 104:Ax=A.aaR(A.acf.Bo9);break;
case 65:Ax=A.aaR(A.acf.SuccessClearAnimalLoss);break;case 66:Ax=A.aaR(A.acf.WarningNoActionsForAnimalLoss
);break;case 67:Ax=A.aaR(A.acf.SuccessLinkTransponder);break;case 106:Ax=A.aaR(A.
acf.BoV);break;case 86:Ax=A.aaR(A.acf.SuccessUnlinkTransponder);break;case 68:Ax=
A.aaR(A.acf.Bo3);break;case 70:Ax=A.aaR(A.acf.Bie);break;case 71:Ax=A.aaR(A.acf.
Bpa);break;case 72:Ax=A.aaR(A.acf.Bpb);break;case 97:Ax=A.aaR(A.acf.Big);break;case
100:Ax=A.aaR(A.acf.Bpc);break;case 99:Ax=A.aaR(A.acf.Bpd);break;case 88:Ax=A.aaR(
A.acf.Bif);break;case 89:Ax=A.aaR(A.acf.Bo_);break;case 90:Ax=A.aaR(A.acf.Bo$);break;
case 73:Ax=A.aaR(A.acf.WarningNoPremisesID);break;case 74:Ax=A.aaR(A.acf.WarningNoFlashDrivePresent
);break;case 94:Ax=A.aaR(A.acf.WarningNoBackupPathPresent);break;case 93:Ax=A.aaR(
A.acf.WarningNoBackupFilePresent);break;case 84:Ax=A.aaR(A.acf.Biv);break;case 87:
Ax=A.aaR(A.acf.Bql);break;case 95:Ax=A.aaR(A.acf.Bp_);break;case 108:Ax=A.aaR(A.
acf.Bqa);break;case 109:Ax=A.aaR(A.acf.SuccessMassDeregistration);break;case 102:
Ax=A.aaR(A.acf.WarningParsedDateInFutureInvalid);break;case 101:Ax=A.aaR(A.acf.WarningParsingDateFailed
);break;case 103:Ax=A.aaR(A.acf.WarningParsingNaisIdFailed);break;case 105:Ax=A.
aaR(A.acf.Bqg);break;default:throw new Error(AHZ+AdC.toFixed());}return Ax;},Lt:
function(A5){var AdC=A5;var Ax=A.jV;switch(AdC){case 0:Ax=AXG;break;case 1:Ax=AXH;
break;case 58:Ax=AXI;break;case 2:Ax=AXJ;break;case 3:Ax=AXK;break;case 77:Ax=AXL;
break;case 78:Ax=AH0;break;case 79:Ax=AH1;break;case 9:Ax=AH2;break;case 5:Ax=AH3;
break;case 8:Ax=Aym;break;case 34:Ax=Ayn;break;case 80:Ax=AH4;break;case 81:Ax=AXM;
break;case 91:Ax=AH5;break;case 92:Ax=AXN;break;case 82:Ax=AH6;break;case 83:Ax=
AXO;break;case 10:Ax=AXP;break;case 4:Ax=AXQ;break;case 7:Ax=AXR;break;case 33:Ax=
AXS;break;case 6:Ax=AXT;break;case 27:Ax=AXU;break;case 64:Ax=AXV;break;case 28:
Ax=AXW;break;case 29:Ax=AXX;break;case 30:Ax=AXY;break;case 41:Ax=AXZ;break;case
50:Ax=Ayo;break;case 51:Ax=AX0;break;case 42:Ax=AX1;break;case 45:Ax=Ayp;break;case
46:Ax=As7;break;case 57:Ax=UW;break;case 52:Ax=As8;break;case 53:Ax=AX2;break;case
56:Ax=AX3;break;case 11:Ax=AX4;break;case 12:Ax=AH7;break;case 13:Ax=AX5;break;case
36:Ax=AH8;break;case 14:Ax=AX6;break;case 15:Ax=AX7;break;case 35:Ax=AX8;break;case
26:Ax=As9;break;case 23:Ax=AX9;break;case 24:Ax=AX_;break;case 49:Ax=AH9;break;case
16:Ax=AX$;break;case 17:Ax=AYa;break;case 18:Ax=AYb;break;case 19:Ax=AYc;break;case
20:Ax=AcR;break;case 54:Ax=AYd;break;case 55:Ax=AYe;break;case 21:Ax=AYf;break;case
48:Ax=AYg;break;case 22:Ax=AH_;break;case 63:Ax=AYh;break;case 43:Ax=AYi;break;case
85:Ax=AYj;break;case 25:Ax=AYk;break;case 47:Ax=AYl;break;case 107:Ax=AYm;break;
case 31:Ax=AH$;break;case 32:Ax=AYn;break;case 69:Ax=AYo;break;case 44:Ax=AYp;break;
case 37:Ax=AIa;break;case 38:Ax=AIb;break;case 39:Ax=AYq;break;case 76:Ax=AYr;break;
case 40:Ax=AYs;break;case 75:Ax=AYt;break;case 59:Ax=Rl;break;case 62:Ax=As_;break;
case 96:Ax=AIc;break;case 60:Ax=AId;break;case 98:Ax=Aos;break;case 65:Ax=Aot;break;
case 61:Ax=Ayq;break;case 104:Ax=AYu;break;case 66:Ax=AIe;break;case 67:Ax=AYv;break;
case 106:Ax=AYw;break;case 86:Ax=AYx;break;case 68:Ax=AYy;break;case 70:Ax=AYz;break;
case 71:Ax=AYA;break;case 72:Ax=AYB;break;case 97:Ax=AYC;break;case 100:Ax=AYD;break;
case 99:Ax=AYE;break;case 88:Ax=AYF;break;case 89:Ax=AYG;break;case 90:Ax=AYH;break;
case 73:Ax=AYI;break;case 74:Ax=AYJ;break;case 94:Ax=AYK;break;case 93:Ax=AYL;break;
case 84:Ax=Aou;break;case 87:Ax=AIf;break;case 95:Ax=AYM;break;case 108:Ax=AIg;break;
case 109:Ax=AIh;break;case 102:Ax=Aai;break;case 101:Ax=AIi;break;case 103:Ax=AYN;
break;case 105:Ax=AIj;break;default:throw new Error(AHZ+AdC.toFixed());}return Ax;
},_Init:function(aArg){C.EnumToString._Init.call(this,aArg);this.__proto__=C.PopupIdToString;
},_className:"Device::PopupIdToString"};C.PopupParamSeparator=";";C.RatingMode={
Basic:0,Extended:1,LAST:2};C.TransponderType={UNDEFINED:0,AnimalId:1,FarmId:2,GroupId:
3,PersonId:4,LAST:5};C.TransponderProtocol={UNDEFINED:0,FDX:1,HDX:2,HDX_URBAN:3,
LAST:4};C.TransponderTypeToString={BI:function(A5){var Bgn=A5;var type=A.jV;switch(
Bgn){case 1:type=AYO;break;case 2:type=Ayr;break;case 3:type=AYP;break;case 4:type=
AYQ;break;case 0:type=As1;break;default:throw new Error(Ays+Bgn.toFixed());}return type;
},_Init:function(aArg){C.EnumToString._Init.call(this,aArg);this.__proto__=C.TransponderTypeToString;
},_className:"Device::TransponderTypeToString"};C.TransponderProtocolToString={BI:
function(A5){var Bgl=A5;var AAR=A.jV;switch(Bgl){case 1:AAR=AYR;break;case 2:AAR=
AYS;break;case 3:AAR=AYT;break;case 0:AAR=As1;break;default:throw new Error(AIk+
Bgl.toFixed());}return AAR;},_Init:function(aArg){C.EnumToString._Init.call(this
,aArg);this.__proto__=C.TransponderProtocolToString;},_className:"Device::TransponderProtocolToString"
};C.Transponder={Id:0,TransponderProtocol:0,TransponderType:0,ATE:function(E){if(
this.TransponderType===E)return;this.TransponderType=E;A.abo([this,this.Ble,this.
ATE],0);},ATD:function(E){if(this.TransponderProtocol===E)return;this.TransponderProtocol=
E;A.abo([this,this.Bld,this.ATD],0);},OnSetId:function(E){if(this.Id===E)return;
this.Id=E;A.abo([this,this.QY,this.OnSetId],0);},AOR:function(){return A._GetAutoObject(
C.Converter).BpB(this.Id);},BiD:function(){return A._GetAutoObject(C.Converter).
AxO(this.Id);},Ble:function(){return this.TransponderType;},Bld:function(){return this.
TransponderProtocol;},QY:function(){return this.Id;},_Init:function(aArg){this.__proto__=
C.Transponder;A.h7++;},_Done:function(){this.__proto__=null;A.h7--;},_ReInit:function(
){},_Mark:function(D){var B;if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:
null,_cycle:0,_observers:null,_className:"Device::Transponder"};C.RatingModeToString={
BI:function(A5){var Vb=A5;var Nu=A.jV;switch(Vb){case 0:Nu=A.aaR(A.acf.Basic);break;
case 1:Nu=A.aaR(A.acf.Extended);break;default:throw new Error(Aov+Vb.toFixed());
}return Nu;},_Init:function(aArg){C.EnumToString._Init.call(this,aArg);this.__proto__=
C.RatingModeToString;},_className:"Device::RatingModeToString"};C.TableRowsCount={
_Init:function(aArg){this.__proto__=C.TableRowsCount;A.h7++;},_Done:function(){this.
__proto__=null;A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((B=this.
I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:
"Device::TableRowsCount"};C.MassUnit={Kilogramm:0,Pound:1,LAST:2};C.MassUnitToString={
BI:function(A5){var BdO=A5;var Ap8=A.jV;switch(BdO){case 0:Ap8=A.aaR(A.acf.Bjt);
break;case 1:Ap8=A.aaR(A.acf.Pound);break;default:throw new Error(AIl+BdO.toFixed(
));}return Ap8;},_Init:function(aArg){C.EnumToString._Init.call(this,aArg);this.
__proto__=C.MassUnitToString;},_className:"Device::MassUnitToString"};C.MinWeightGain=
20;C.MaxWeightGain=2000;C.WeightGainStep=10;C.Int32ArrayWrapper={MC:10,Array:A.abi(
10,0,null),Zy:function(E){if(this.MC===E)return;if(E>10)throw new Error(AYU);this.
MC=E;},Set:function(aIndex,AK){if((aIndex<0)||(aIndex>=this.MC))throw new Error(
Ayt);this.Array.Set(aIndex,AK);},Get:function(aIndex){if((aIndex<0)||(aIndex>=this.
MC))throw new Error(Ayt);return this.Array.Get(aIndex);},AmW:function(){var Qr=0;
var O;for(O=0;O<this.MC;O=O+1)Qr=Qr+this.Get(O);return Qr;},toString:function(){
var A2G=this.Array.Get(0).toFixed();var O;for(O=1;O<this.MC;O=O+1)A2G=(A2G+O4)+this.
Array.Get(O).toFixed();return A2G;},EM:function(aString){var Hw=aString.indexOf(
String.fromCharCode(0x2C),0);var A1v=A.jV;var O=0;while(O<10){if(aString===A.jV)
this.Array.Set(O,0);else{if(Hw===-1){A1v=aString;aString=A.jV;}else{A1v=A.abV(aString
,Hw);aString=A.ab1(aString,0,Hw+1);}this.Array.Set(O,A.wz(A1v,0,10));Hw=aString.
indexOf(String.fromCharCode(0x2C),0);}O=O+1;}if(aString!==A.jV)A.ab5("%s",AIm);}
,Cq:function(){},Hi:function(){var O;for(O=0;O<this.MC;O=O+1)this.Set(O,0);},Avo:
function(A7){var O=0;while(O<this.MC){if(this.Array.Get(O)===A7)return O;O=O+1;}
return-1;},HH:function(){var O=0;var max=-1;while(O<this.MC){if(this.Array.Get(O
)>max)max=this.Array.Get(O);O=O+1;}return max;},_Init:function(aArg){(this.Array=[
]).__proto__=C.Int32ArrayWrapper.Array;this.__proto__=C.Int32ArrayWrapper;A.h7++;
},_Done:function(){this.__proto__=null;A.h7--;},_ReInit:function(){},_Mark:function(
D){var B;if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:
null,_className:"Device::Int32ArrayWrapper"};C.ActionToString={BI:function(A5){var
AzC=A5;var E6=A.jV;switch(AzC){case 4:E6=A.aaR(A.acf.Alarm);break;case 256:E6=A.
aaR(A.acf.Weighing);break;case 128:E6=A.aaR(A.acf.A59);break;case 16:E6=A.aaR(A.
acf.AMj);break;case 1:E6=A.aaR(A.acf.Temperature);break;case 32:E6=A.aaR(A.acf.AnimalLoss
);break;case 2:E6=A.aaR(A.acf.Rating);break;case 8:E6=A.aaR(A.acf.Asa);break;case
64:E6=A.aaR(A.acf.Unregister);break;case 512:E6=A.aaR(A.acf.ARW);break;case 1024:
E6=A.aaR(A.acf.LinkTransponder);break;case 262144:E6=A.aaR(A.acf.UnlinkTransponder
);break;case 2048:E6=A.aaR(A.acf.Tt);break;case 4096:E6=A.aaR(A.acf.Calving);break;
case 8192:E6=A.aaR(A.acf.DryOff);break;case 16384:E6=A.aaR(A.acf.A7l);break;case
32768:E6=A.aaR(A.acf.AB5);break;case 524288:E6=A.aaR(A.acf.AB7);break;case 65536:
E6=A.aaR(A.acf.Delete);break;case 131072:E6=A.aaR(A.acf.A7m);break;case 0:E6=A.aaR(
A.acf.A7J);break;default:throw new Error(AhY+AzC.toFixed());}return E6;},Lt:function(
A5){var AzC=A5;var E6=A.jV;switch(AzC){case 4:E6=A.aaR(A.acf.Alarm);break;case 256:
E6=A.aaR(A.acf.Weighing);break;case 128:E6=A.aaR(A.acf.A59);break;case 16:E6=A.aaR(
A.acf.AMj);break;case 1:E6=A.aaR(A.acf.Temperature);break;case 32:E6=A.aaR(A.acf.
AnimalLoss);break;case 2:E6=A.aaR(A.acf.Rating);break;case 8:E6=A.aaR(A.acf.Asa);
break;case 64:E6=A.aaR(A.acf.Unregister);break;case 512:E6=A.aaR(A.acf.ARW);break;
case 1024:E6=A.aaR(A.acf.LinkTransponder);break;case 262144:E6=A.aaR(A.acf.UnlinkTransponder
);break;case 2048:E6=A.aaR(A.acf.Tt);break;case 4096:E6=A.aaR(A.acf.Calving);break;
case 8192:E6=A.aaR(A.acf.DryOff);break;case 32768:E6=A.aaR(A.acf.AB5);break;case
524288:E6=A.aaR(A.acf.AB7);break;case 65536:E6=A.aaR(A.acf.Delete);break;case 16384:
case 131072:E6=A.aaR(A.acf.BjB);break;case 0:E6=A.aaR(A.acf.A7J);break;default:throw new
Error(AhY+AzC.toFixed());}return E6;},_Init:function(aArg){C.EnumToString._Init.
call(this,aArg);this.__proto__=C.ActionToString;},_className:"Device::ActionToString"
};C.ACTIONS_COUNT=19;C.PopupTimeout=2000;C.ITable={Filter:null,Id:2,CE:function(
Ad,A3){return 0;},VU:function(Ad,A3){return A.jV;},Akn:function(G){A.we(this,0);
A.pe([this,this.DY],this);},H1:function(Ad,A3){return false;},HF:function(Ad,A3){
return this.Sf(Ad,A3);},OnSetId:function(E){if(this.Id===E)return;this.Id=E;},Ca:
function(){return 0;},Bl:function(E){if(this.Filter===E)return;this.Filter=E;A.abo([
this,this.Fj,this.Fn],0);},Fn:function(Aq){this.Bl(Aq);},I2:function(Ad,A3){var BA_=
this.VV(Ad,A3);return A._GetAutoObject(C.Converter).A$x(BA_);},VV:function(Ad,A3
){return 0;},Sf:function(Ad,A3){return 0;},A6I:function(Ad,A3){return this.CE(Ad
,A3);},Oy:function(){var Jk=0;var BBV=this.Id;return Jk;},OA:function(AoQ){var HA=
0;var BBV=this.Id;return HA===1;},YF:function(){return-1;},ZK:function(Ad,A3,C0){
return false;},Hj:function(Ad,A3,C0){return false;},ZJ:function(Ad,A3,C0){return false;
},MB:function(Ad,A3,C0){return false;},ZI:function(Ad,A3,C0){return false;},Aco:
function(Ad,A3,C0){return this.ZJ(Ad,A3,C0);},AkR:function(Ad,A3,C0){var BA$=A._GetAutoObject(
C.Converter).AdZ(C0);return this.ZK(Ad,A3,BA$);},A_$:function(Ad,A3,C0){return this.
Hj(Ad,A3,C0);},AOL:function(Ad,A3){return this.CE(Ad,A3);},BiB:function(Ad,A3){return this.
CE(Ad,A3);},Bos:function(Ad,A3,C0){return this.Hj(Ad,A3,C0);},Boo:function(Ad,A3
,C0){return this.Hj(Ad,A3,C0);},Lc:function(aColumn,A7){return-1;},AmU:function(
Ad,A3){return this.CE(Ad,A3);},Bom:function(Ad,A3,C0){return this.Hj(Ad,A3,C0);}
,ACY:function(Ad,A3){return this.CE(Ad,A3);},AUw:function(Ad,A3,MK){return this.
Hj(Ad,A3,MK);},DY:function(G){this.Byd();},Byd:function(){return-1;},KN:function(
Ad,A3){return 0;},SK:function(Ad,A3,C0){return false;},AgQ:function(aColumn,A7){
return-1;},Hi:function(){return false;},BiC:function(Ad,A3){var BBa=this.CE(Ad,A3
);return A._GetAutoObject(C.Converter).Bi3(BBa);},BiH:function(Ad,A3){return this.
CE(Ad,A3);},AOT:function(Ad,A3){return this.CE(Ad,A3);},Boq:function(Ad,A3,C0){var
BBb=A._GetAutoObject(C.Converter).A5g(C0);return this.Hj(Ad,A3,BBb);},Bor:function(
Ad,A3,C0){return this.Hj(Ad,A3,C0);},Boy:function(Ad,A3,C0){return this.Hj(Ad,A3
,C0);},AjJ:function(aColumn,A7){return false;},Aej:function(aColumn,A7){return false;
},BiQ:function(Ad,A3){return this.CE(Ad,A3);},Bow:function(Ad,A3,C0){return this.
Hj(Ad,A3,C0);},Lh:function(){return this.QE()>=this.HG();},HG:function(){return 0;
},Abs:function(){return-1;},QE:function(){return 0;},Fj:function(){return this.Filter;
},_Init:function(aArg){this.__proto__=C.ITable;A.h7++;},_Done:function(){this.__proto__=
null;A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((B=this.Filter)&&(
B._cycle!=D))B._Mark(B._cycle=D);if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D
);},I:null,_cycle:0,_observers:null,_className:"Device::ITable"};C.MaxAutoActionsCount=
4;C.WeightRecordingMode={Automatic:0,Manual:1,LAST:2};C.WeightRecordingModeToString={
BI:function(A5){var Vb=A5;var Nu=A.jV;switch(Vb){case 0:Nu=A.aaR(A.acf.Automatic
);break;case 1:Nu=A.aaR(A.acf.Manual);break;default:throw new Error(AYV+Vb.toFixed(
));}return Nu;},_Init:function(aArg){C.EnumToString._Init.call(this,aArg);this.__proto__=
C.WeightRecordingModeToString;},_className:"Device::WeightRecordingModeToString"
};C.BooleanToAutoOnOff={BI:function(A5){switch(A5){case 0:return A.aaR(A.acf.Off
);case 1:return A.aaR(A.acf.Aa3);default:return Ayl+A5.toFixed();}},_Init:function(
aArg){C.EnumToString._Init.call(this,aArg);this.__proto__=C.BooleanToAutoOnOff;}
,_className:"Device::BooleanToAutoOnOff"};C.WeightStep=100;C.WeightRecordingScope={
CurrentWeightOnly:0,BirthWeightOnly:1,BirthAndCurrentWeight:2,NoWeightRecording:
3,LAST:4};C.WeightRecordingScopeToString={BI:function(A5){var BfP=A5;var AA5=A.jV;
switch(BfP){case 0:AA5=A.aaR(A.acf.BhC);break;case 1:AA5=A.aaR(A.acf.Bhf);break;
case 2:AA5=A.aaR(A.acf.Bhb);break;case 3:AA5=A.aaR(A.acf.Bj3);break;default:throw new
Error(Aow+BfP.toFixed());}return AA5;},_Init:function(aArg){C.EnumToString._Init.
call(this,aArg);this.__proto__=C.WeightRecordingScopeToString;},_className:"Device::WeightRecordingScopeToString"
};C.BodyTemperature={Undertemperature:0,Normal:1,Elevated:2,Fever:3,LAST:4};C.JH={
XP:0,Temperature:1,Rating:2,Afr:3,BCy:4,BDc:5,BFZ:6,BDR:7,BEG:8,BDp:9,BEE:10,BE6:
11,BE7:12,BF4:13,LAST:14};C.AnimalListContentToString={BI:function(A5){var Bce=A5;
var S$=A.jV;switch(Bce){case 0:S$=AYW;break;case 2:S$=AIn;break;case 1:S$=AIo;break;
case 3:S$=AYX;break;case 4:S$=AYY;break;case 5:S$=AIp;break;case 6:S$=AYZ;break;
case 7:S$=AY0;break;case 8:S$=AY1;break;case 9:S$=AY2;break;case 10:S$=AY3;break;
case 11:S$=AY4;break;case 12:S$=AY5;break;case 13:S$=AY6;break;default:throw new
Error(AY7+Bce.toFixed());}return S$;},_Init:function(aArg){C.EnumToString._Init.
call(this,aArg);this.__proto__=C.AnimalListContentToString;},_className:"Device::AnimalListContentToString"
};C.GenderFilterCriterion={A4:0,Abk:function(){var Av=A._NewObject(C.GenderFilterCriterion
,0);Av.Fg(this);return Av;},Fg:function(AH){C.FilterCriterion.Fg.call(this,AH);var
Av=(C.GenderFilterCriterion.isPrototypeOf(AH)?AH:null);if(!!Av)this.A4=Av.A4;},_Init:
function(aArg){C.FilterCriterion._Init.call(this,aArg);this.__proto__=C.GenderFilterCriterion;
},_className:"Device::GenderFilterCriterion"};C.AnimalTypeFilterCriterion={A4:0,
Abk:function(){var Av=A._NewObject(C.AnimalTypeFilterCriterion,0);Av.Fg(this);return Av;
},Fg:function(AH){C.FilterCriterion.Fg.call(this,AH);var Av=(C.AnimalTypeFilterCriterion.
isPrototypeOf(AH)?AH:null);if(!!Av)this.A4=Av.A4;},Initialize:function(A3,Eb,A7,
P_){this.EJ=A3;this.Operator=Eb;this.A4=A7;this.YI=P_;return this;},_Init:function(
aArg){C.FilterCriterion._Init.call(this,aArg);this.__proto__=C.AnimalTypeFilterCriterion;
},_className:"Device::AnimalTypeFilterCriterion"};C.BCK={Auy:0,BCJ:1,BEq:2,A_R:3
,A5o:4,BFF:5,BDb:6,BFE:7,LinkTransponder:8,Tt:9,Weighing:10,Calving:11,LinkNaisId:
12,BE5:13,ClearBirthNoticePending:14,DeleteAnimal:15,ScanNaisId:16,Edit:17,ClearPurchaseNoticePending:
18};C.AutoRegistrationModeToString={BI:function(A5){var Vb=A5;var Nu=A.jV;switch(
Vb){case 0:Nu=A.aaR(A.acf.Bhu);break;case 1:Nu=A.aaR(A.acf.Bi7);break;case 2:Nu=
A.aaR(A.acf.Off);break;default:throw new Error(AY8+Vb.toFixed());}return Nu;},_Init:
function(aArg){C.EnumToString._Init.call(this,aArg);this.__proto__=C.AutoRegistrationModeToString;
},_className:"Device::AutoRegistrationModeToString"};C.AutoRegistrationMode={UserConfirmed:
0,Background:1,Off:2,LAST:3};C.AssessmentFilterCriterion={A4:0,Abk:function(){var
Av=A._NewObject(C.AssessmentFilterCriterion,0);Av.Fg(this);return Av;},Fg:function(
AH){C.FilterCriterion.Fg.call(this,AH);var Av=(C.AssessmentFilterCriterion.isPrototypeOf(
AH)?AH:null);if(!!Av)this.A4=Av.A4;},Initialize:function(A3,Eb,A7,P_){this.EJ=A3;
this.Operator=Eb;this.A4=A7;this.YI=P_;return this;},_Init:function(aArg){C.FilterCriterion.
_Init.call(this,aArg);this.__proto__=C.AssessmentFilterCriterion;},_className:"Device::AssessmentFilterCriterion"
};C.D9={XP:0,Temperature:1,Afr:2,Rating:3,LAST:4};C.FactoryResetScope={DeviceAndAnimalData:
0,AnimalDataOnly:1,LAST:2};C.FactoryResetScopeToString={BI:function(A5){switch(A5
){case 0:return A.aaR(A.acf.DeviceAndAnimalData);case 1:return A.aaR(A.acf.AnimalDataOnly
);default:return AY9+A5.toFixed();}},_Init:function(aArg){C.EnumToString._Init.call(
this,aArg);this.__proto__=C.FactoryResetScopeToString;},_className:"Device::FactoryResetScopeToString"
};C.AU7={Cq:function(){A._GetAutoObject(C.Device).Ar5(this.toString());},Init:function(
aArg){var B;A.zX([this,this.BeW],[B=A._GetAutoObject(C.Device),B.A83,B.Ba$],0);this.
BeW(this);},BeW:function(G){this.EM(A._GetAutoObject(C.Device).AGU);A.we(this,0);
},_Init:function(aArg){C.Int32ArrayWrapper._Init.call(this,aArg);this.__proto__=
C.AU7;this.Zy(3);this.Init(aArg);},_className:"Device::TemperaturesLowClass"};C.
AU6={Init:function(aArg){var B;A.zX([this,this.BeU],[B=A._GetAutoObject(C.Device
),B.A82,B.Ba_],0);this.BeU(this);},Cq:function(){A._GetAutoObject(C.Device).Ar4(
this.toString());},BeU:function(G){this.EM(A._GetAutoObject(C.Device).AGT);A.we(
this,0);},_Init:function(aArg){C.Int32ArrayWrapper._Init.call(this,aArg);this.__proto__=
C.AU6;this.Zy(3);this.Init(aArg);},_className:"Device::TemperaturesHighClass"};C.
AMC={Init:function(aArg){var B;A.zX([this,this.Ben],[B=A._GetAutoObject(C.Device
),B.A8h,B.BaQ],0);this.Ben(this);},Ben:function(G){this.EM(A._GetAutoObject(C.Device
).ABF);A.we(this,0);},_Init:function(aArg){C.Int32ArrayWrapper._Init.call(this,aArg
);this.__proto__=C.AMC;this.Zy(3);this.Init(aArg);},_className:"Device::AnimalTypesClass"
};C.UInt64FilterCriterion={A4:0,Abk:function(){var Av=A._NewObject(C.UInt64FilterCriterion
,0);Av.Fg(this);return Av;},Fg:function(AH){C.FilterCriterion.Fg.call(this,AH);var
Av=(C.UInt64FilterCriterion.isPrototypeOf(AH)?AH:null);if(!!Av)this.A4=Av.A4;},Initialize:
function(A3,Eb,A7,P_){this.EJ=A3;this.Operator=Eb;this.A4=A7;this.YI=P_;return this;
},_Init:function(aArg){C.FilterCriterion._Init.call(this,aArg);this.__proto__=C.
UInt64FilterCriterion;},_className:"Device::UInt64FilterCriterion"};C.BooleanToAssignedUnassignedString={
BI:function(A5){switch(A5){case 0:return A.aaR(A.acf.Akm);case 1:return A.aaR(A.
acf.BgS);default:return Ayl+A5.toFixed();}},_Init:function(aArg){C.EnumToString.
_Init.call(this,aArg);this.__proto__=C.BooleanToAssignedUnassignedString;},_className:
"Device::BooleanToAssignedUnassignedString"};C.C7={UNDEFINED:0,AT:1,BA:2,BE:3,BCP:
4,BC4:5,BC5:6,BC6:7,BC7:8,BC8:9,BDg:10,BDh:11,BDq:12,BDr:13,BDG:14,FR:15,GR:16,BDT:
17,BDU:18,BD5:19,BD6:20,BD$:21,BEa:22,BEb:23,BEc:24,BEi:25,BEw:26,BEx:27,BEM:28,
BEN:29,BE3:30,BE4:31,BFi:32,BFj:33,BFk:34,BFy:35,BFz:36,BFS:37,A$y:38,BFT:39,LAST:
40};C.CountryToString={BI:function(A5){var J4=A5;var FB=A.jV;switch(J4){case 1:FB=
A.aaR(A.acm.Bg5);break;case 2:FB=A.aaR(A.acm.Bhg);break;case 3:FB=A.aaR(A.acm.Bha
);break;case 4:FB=A.aaR(A.acm.Bhi);break;case 5:FB=A.aaR(A.acm.Bhk);break;case 6:
FB=A.aaR(A.acm.Bph);break;case 7:FB=A.aaR(A.acm.Bhn);break;case 8:FB=A.aaR(A.acm.
BhD);break;case 9:FB=A.aaR(A.acm.BhE);break;case 10:FB=A.aaR(A.acm.Biw);break;case
11:FB=A.aaR(A.acm.BhK);break;case 12:FB=A.aaR(A.acm.Bib);break;case 13:FB=A.aaR(
A.acm.BoL);break;case 14:FB=A.aaR(A.acm.Bik);break;case 15:FB=A.aaR(A.acm.Bis);break;
case 16:FB=A.aaR(A.acm.BiY);break;case 17:FB=A.aaR(A.acm.BhB);break;case 18:FB=A.
aaR(A.acm.Bi4);break;case 19:FB=A.aaR(A.acm.Bjc);break;case 20:FB=A.aaR(A.acm.Bjo
);break;case 21:FB=A.aaR(A.acm.Bjq);break;case 22:FB=A.aaR(A.acm.BjC);break;case
23:FB=A.aaR(A.acm.BjF);break;case 24:FB=A.aaR(A.acm.Bjz);break;case 25:FB=A.acm.
BjH;break;case 26:FB=A.aaR(A.acm.BjX);break;case 27:FB=A.aaR(A.acm.Bj4);break;case
28:FB=A.aaR(A.acm.BnI);break;case 29:FB=A.aaR(A.acm.BnJ);break;case 30:FB=A.aaR(
A.acm.Bn$);break;case 31:FB=A.aaR(A.acm.Bob);break;case 32:FB=A.aaR(A.acm.Bpg);break;
case 33:FB=A.aaR(A.acm.BoK);break;case 34:FB=A.aaR(A.acm.BoJ);break;case 35:FB=A.
aaR(A.acm.BpI);break;case 36:FB=A.aaR(A.acm.Bpq);break;case 37:FB=A.aaR(A.acm.BpM
);break;case 38:FB=A.aaR(A.acm.A$y);break;case 39:FB=A.aaR(A.acm.BpL);break;case
0:FB=Aox;break;default:throw new Error(Aoo+J4.toFixed());}return FB;},Lt:function(
A5){var J4=A5;var BP=A.jV;switch(J4){case 1:BP=S4;break;case 2:BP=Z5;break;case 3:
BP=UO;break;case 4:BP=W1;break;case 5:BP=Iq;break;case 6:BP=Aac;break;case 7:BP=
UP;break;case 8:BP=Z7;break;case 9:BP=W3;break;case 10:BP=P5;break;case 11:BP=Z8;
break;case 12:BP=Z9;break;case 13:BP=Aab;break;case 14:BP=UQ;break;case 15:BP=W4;
break;case 16:BP=Z_;break;case 17:BP=W2;break;case 18:BP=O3;break;case 19:BP=Ri;
break;case 20:BP=W5;break;case 21:BP=W6;break;case 22:BP=W8;break;case 23:BP=Z$;
break;case 24:BP=W7;break;case 25:BP=W9;break;case 26:BP=W_;break;case 27:BP=S5;
break;case 28:BP=UR;break;case 29:BP=US;break;case 30:BP=AcN;break;case 31:BP=S6;
break;case 32:BP=W$;break;case 33:BP=Afx;break;case 34:BP=Aaa;break;case 35:BP=Aad;
break;case 36:BP=Z6;break;case 37:BP=AhQ;break;case 38:BP=J0;break;case 39:BP=Aae;
break;case 0:BP=Aox;break;default:throw new Error(Aoo+J4.toFixed());}return BP;}
,_Init:function(aArg){C.EnumToString._Init.call(this,aArg);this.__proto__=C.CountryToString;
},_className:"Device::CountryToString"};C.EaseOfDelivery={Unspecified:0,Easy:1,Moderate:
2,Difficult:3,Surgery:4,LAST:5};C.EaseOfDeliveryToString={BI:function(A5){var BcN=
A5;var AtI=A.jV;switch(BcN){case 0:AtI=A.aaR(A.acf.Unspecified);break;case 1:AtI=
A.aaR(A.acf.Easy);break;case 2:AtI=A.aaR(A.acf.Moderate);break;case 3:AtI=A.aaR(
A.acf.Difficult);break;case 4:AtI=A.aaR(A.acf.Surgery);break;default:throw new Error(
AY_+BcN.toFixed());}return AtI;},_Init:function(aArg){C.EnumToString._Init.call(
this,aArg);this.__proto__=C.EaseOfDeliveryToString;},_className:"Device::EaseOfDeliveryToString"
};C.WhereAbouts={UNB:0,EZU:1,EMA:2,VZU:3,VMA:4,VIV:5,TOT:6,V48:7,V3T:8,MGE:9,VKB:
10,LAST:11};C.WhereAboutsToString={BI:function(A5){var BgG=A5;var AaT=A.jV;switch(
BgG){case 0:AaT=A.aaR(A.acf.Unknown);break;case 1:AaT=A.aaR(A.acf.BpV);break;case
2:AaT=A.aaR(A.acf.BpU);break;case 3:AaT=A.aaR(A.acf.Bp3);break;case 4:AaT=A.aaR(
A.acf.Bp2);break;case 5:AaT=A.aaR(A.acf.Bp0);break;case 6:AaT=A.aaR(A.acf.BpX);break;
case 7:AaT=A.aaR(A.acf.BpZ);break;case 8:AaT=A.aaR(A.acf.BpY);break;case 9:AaT=A.
aaR(A.acf.BpW);break;case 10:AaT=A.aaR(A.acf.Bp1);break;default:throw new Error(
AY$+BgG.toFixed());}return AaT;},_Init:function(aArg){C.EnumToString._Init.call(
this,aArg);this.__proto__=C.WhereAboutsToString;},_className:"Device::WhereAboutsToString"
};C.Breed={UNKNOWN:0,SBT:1,RBT:2,JER:3,BV:4,RVA:5,RV:6,RDN:7,DSN:8,FL:9,GV:10,PIN:
11,HIN:12,MW:13,VW:14,LMP:15,DBV:16,AS:17,VR:18,CHA:19,LIM:20,WBB:21,BA:22,MA:23
,SAL:24,MON:25,AU:26,PIE:27,CHI:28,ROM:29,MAR:30,WP:31,BB:32,DA:33,AA:34,HE:35,SH:
36,HLD:37,WB:38,GAL:39,LR:40,BGA:41,LG:42,BRA:43,NOR:44,UST:45,ZEB:46,GRV:47,DEX:
48,WGA:49,LH:50,SD:51,FR:52,TUX:53,TLM:54,FLF:55,UCK:56,BLA:57,WIT:58,LAK:59,RHV:
60,AT:61,GR:62,PIF:63,PS:64,GVF:65,BVF:66,RBF:67,HWF:68,MWF:69,VWF:70,LPF:71,BRN:
72,BAZ:73,AO:74,BE:75,WL:76,BIS:77,YAK:78,SON:79,TAU:80,IND:81,TIN:82,WAG:83,XFF:
84,XFM:85,XMM:86,EVO:87,BLH:88,TLH:89,MGR:90,WSH:91,MUR:92,EBS:93,ERI:94,PAR:95,
XZF:96,XZM:97,XZZ:98,LAST:99};C.BreedToString={BI:function(A5){var Bv=A5;var BK=
A.jV;switch(Bv){case 0:BK=A.aaR(A.acf.Unknown);break;case 1:BK=A.aaR(A.ack.SBT);
break;case 2:BK=A.aaR(A.ack.RBT);break;case 3:BK=A.aaR(A.ack.JER);break;case 4:BK=
A.aaR(A.ack.BV);break;case 5:BK=A.aaR(A.ack.RVA);break;case 6:BK=A.aaR(A.ack.RV);
break;case 7:BK=A.aaR(A.ack.RDN);break;case 8:BK=A.aaR(A.ack.DSN);break;case 9:BK=
A.aaR(A.ack.FL);break;case 10:BK=A.aaR(A.ack.GV);break;case 11:BK=A.aaR(A.ack.PIN
);break;case 12:BK=A.aaR(A.ack.HIN);break;case 13:BK=A.aaR(A.ack.MW);break;case 14:
BK=A.aaR(A.ack.VW);break;case 15:BK=A.aaR(A.ack.LMP);break;case 16:BK=A.aaR(A.ack.
DBV);break;case 17:BK=A.aaR(A.ack.AS);break;case 18:BK=A.aaR(A.ack.VR);break;case
19:BK=A.aaR(A.ack.CHA);break;case 20:BK=A.aaR(A.ack.LIM);break;case 21:BK=A.aaR(
A.ack.WBB);break;case 22:BK=A.aaR(A.ack.BA);break;case 23:BK=A.aaR(A.ack.MA);break;
case 24:BK=A.aaR(A.ack.SAL);break;case 25:BK=A.aaR(A.ack.MON);break;case 26:BK=A.
aaR(A.ack.AU);break;case 27:BK=A.aaR(A.ack.PIE);break;case 28:BK=A.aaR(A.ack.CHI
);break;case 29:BK=A.aaR(A.ack.ROM);break;case 30:BK=A.aaR(A.ack.MAR);break;case
31:BK=A.aaR(A.ack.WP);break;case 32:BK=A.aaR(A.ack.BB);break;case 33:BK=A.aaR(A.
ack.DA);break;case 34:BK=A.aaR(A.ack.AA);break;case 35:BK=A.aaR(A.ack.HE);break;
case 36:BK=A.aaR(A.ack.SH);break;case 37:BK=A.aaR(A.ack.HLD);break;case 38:BK=A.
aaR(A.ack.WB);break;case 39:BK=A.aaR(A.ack.GAL);break;case 40:BK=A.aaR(A.ack.LR);
break;case 41:BK=A.aaR(A.ack.BGA);break;case 42:BK=A.aaR(A.ack.LG);break;case 43:
BK=A.aaR(A.ack.BRA);break;case 44:BK=A.aaR(A.ack.NOR);break;case 45:BK=A.aaR(A.ack.
UST);break;case 46:BK=A.aaR(A.ack.ZEB);break;case 47:BK=A.aaR(A.ack.GRV);break;case
48:BK=A.aaR(A.ack.DEX);break;case 49:BK=A.aaR(A.ack.WGA);break;case 50:BK=A.aaR(
A.ack.LH);break;case 51:BK=A.aaR(A.ack.SD);break;case 52:BK=A.aaR(A.ack.FR);break;
case 53:BK=A.aaR(A.ack.TUX);break;case 54:BK=A.aaR(A.ack.TLM);break;case 55:BK=A.
aaR(A.ack.FLF);break;case 56:BK=A.aaR(A.ack.UCK);break;case 57:BK=A.aaR(A.ack.BLA
);break;case 58:BK=A.aaR(A.ack.WIT);break;case 59:BK=A.aaR(A.ack.LAK);break;case
60:BK=A.aaR(A.ack.RHV);break;case 61:BK=A.aaR(A.ack.AT);break;case 62:BK=A.aaR(A.
ack.GR);break;case 63:BK=A.aaR(A.ack.PIF);break;case 64:BK=A.aaR(A.ack.PS);break;
case 65:BK=A.aaR(A.ack.GVF);break;case 66:BK=A.aaR(A.ack.BVF);break;case 67:BK=A.
aaR(A.ack.RBF);break;case 68:BK=A.aaR(A.ack.HWF);break;case 69:BK=A.aaR(A.ack.MWF
);break;case 70:BK=A.aaR(A.ack.VWF);break;case 71:BK=A.aaR(A.ack.LPF);break;case
72:BK=A.aaR(A.ack.BRN);break;case 73:BK=A.aaR(A.ack.BAZ);break;case 74:BK=A.aaR(
A.ack.AO);break;case 75:BK=A.aaR(A.ack.BE);break;case 76:BK=A.aaR(A.ack.WL);break;
case 77:BK=A.aaR(A.ack.BIS);break;case 78:BK=A.aaR(A.ack.YAK);break;case 79:BK=A.
aaR(A.ack.SON);break;case 80:BK=A.aaR(A.ack.TAU);break;case 81:BK=A.aaR(A.ack.IND
);break;case 82:BK=A.aaR(A.ack.TIN);break;case 83:BK=A.aaR(A.ack.WAG);break;case
84:BK=A.aaR(A.ack.XFF);break;case 85:BK=A.aaR(A.ack.XFM);break;case 86:BK=A.aaR(
A.ack.XMM);break;case 87:BK=A.aaR(A.ack.EVO);break;case 88:BK=A.ack.BLH;break;case
89:BK=A.ack.TLH;break;case 90:BK=A.ack.MGR;break;case 91:BK=A.ack.WSH;break;case
92:BK=A.ack.MUR;break;case 93:BK=A.aaR(A.ack.EBS);break;case 94:BK=A.aaR(A.ack.ERI
);break;case 95:BK=A.ack.PAR;break;case 96:BK=A.aaR(A.ack.XZF);break;case 97:BK=
A.aaR(A.ack.XZM);break;case 98:BK=A.aaR(A.ack.XZZ);break;default:throw new Error(
AIq+Bv.toFixed());}return BK;},_Init:function(aArg){C.EnumToString._Init.call(this
,aArg);this.__proto__=C.BreedToString;},_className:"Device::BreedToString"};C.TE={
timer:null,Q:null,Ec:0,Dw:0,JN:0,Po:1000,Px:1000,Bw:false,Cw:false,B2:true,Mc:function(
G){var F;if(!this.timer)return;if(this.Ec<0){this.Dw=this.timer.Bs;this.Ec=0;}var
Au=(this.timer.Bs-this.Dw)|0;var Op=this.Po;var Ha=this.Px+this.Po;var LE=0;var Jh=
this.Ec;if(!Jh&&(Au>=Op)){Jh=1;Au=Au-Op;}if((Jh>0)&&(Au>=Ha)){var Ib=(Au/Ha)|0;Au=
Au-(Ib*Ha);Jh=Jh+Ib;}if((Jh>2)&&!this.JN)Jh=1;if(Jh!==this.Ec){this.Dw=this.timer.
Bs-(((B=Au)<0)?B+0x100000000:B);this.Ec=Jh;}if(Jh>0)LE=this.Px;var KC=(Jh>=this.
JN)&&(this.JN>0);if(!!this.Q){if((!KC&&(Au>=LE))&&((F=this.Q,F[1].call(F[0]))!==
this.Cw))(F=this.Q,F[2].call(F[0],this.Cw));if((KC||((Au<LE)&&(Jh>0)))&&((F=this.
Q,F[1].call(F[0]))!==this.B2))(F=this.Q,F[2].call(F[0],this.B2));}if(KC)this.Ar(
false);},HM:function(E){if(E<0)E=0;this.JN=E;},Fl:function(E){if(E<100)E=100;this.
Po=E;},Uk:function(E){if(E<0)E=0;this.Px=E;},Ar:function(E){if(this.Bw===E)return;
this.Bw=E;if(!E&&!!this.timer){A.z9([this,this.Mc],this.timer,0);this.timer=null;
}if(E){this.timer=A._GetAutoObject(A.acl.Aeg);A.zV([this,this.Mc],this.timer,0);
this.Ec=-1;}},_Init:function(aArg){this.__proto__=C.TE;A.h7++;},_Done:function(){
this.__proto__=null;A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((B=
this.timer)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Q)&&((B=B[0])._cycle!=
D))B._Mark(B._cycle=D);if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null
,_cycle:0,_observers:null,_className:"Device::BoolEffect"};C.Ig={AnimalId:0,TransponderId:
1,BEl:2,BEk:3,BEo:4,BEn:5};C.AuZ={BCN:0,BDj:1};C.AnimalIdGenerationMethodToString={
BI:function(A5){var Alr=A5;var AoZ=A.jV;switch(Alr){case 0:AoZ=A.aaR(A.acf.Ud);break;
case 1:AoZ=A.aaR(A.acf.Transponder);break;case 3:AoZ=(A.aaR(A.acf.Manual)+N$)+A.
aaR(A.acf.Male);break;case 2:AoZ=(A.aaR(A.acf.Manual)+N$)+A.aaR(A.acf.Female);break;
case 4:AoZ=(A.aaR(A.acf.Manual)+N$)+A.aaR(A.acf.Unknown);break;case 5:AoZ=(A.aaR(
A.acf.Manual)+N$)+Aaj;break;default:throw new Error(AZa+Alr.toFixed());}return AoZ;
},_Init:function(aArg){C.EnumToString._Init.call(this,aArg);this.__proto__=C.AnimalIdGenerationMethodToString;
},_className:"Device::AnimalIdGenerationMethodToString"};C.DirectionOfCountingToString={
BI:function(A5){var AzB=A5;var A1D=A.jV;switch(AzB){case 0:A1D=Ayu;break;case 1:
A1D=AZb;break;default:throw new Error(AZc+AzB.toFixed());}return A1D;},_Init:function(
aArg){C.EnumToString._Init.call(this,aArg);this.__proto__=C.DirectionOfCountingToString;
},_className:"Device::DirectionOfCountingToString"};C.EnumToIcon={AsG:function(A5
){throw new Error(As0+A5.toFixed());},AsH:function(A5){throw new Error(As0+A5.toFixed(
));},_Init:function(aArg){this.__proto__=C.EnumToIcon;A.h7++;},_Done:function(){
this.__proto__=null;A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((B=
this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:
"Device::EnumToIcon"};C.Aef={AsG:function(A5){return A.aaL(A.ach.AUU);},AsH:function(
A5){var AzB=A5;var RA=-1;switch(AzB){case 0:RA=3;break;case 1:RA=2;break;default:
throw new Error(AIr+AzB.toFixed());}return RA;},_Init:function(aArg){C.EnumToIcon.
_Init.call(this,aArg);this.__proto__=C.Aef;},_className:"Device::DirectionOfCountingToIcon"
};C.AdW={AsG:function(A5){return A.aaL(A.ach.AUS);},AsH:function(A5){var Alr=A5;
var RA=-1;switch(Alr){case 0:RA=0;break;case 1:RA=6;break;case 3:RA=4;break;case
2:RA=5;break;case 4:RA=2;break;case 5:RA=3;break;default:throw new Error(AIr+Alr.
toFixed());}return RA;},_Init:function(aArg){C.EnumToIcon._Init.call(this,aArg);
this.__proto__=C.AdW;},_className:"Device::AnimalIdGenerationMethodToIcon"};C.Pt={
UNDEFINED:0,SH:1,AOW:2,ARG:3,AOV:4,A7E:5,HE:6,A_P:7,A46:8,AMN:9,AUm:10,BE:11,BB:
12,A7r:13,AUn:14,AUo:15,AUZ:16};C.GermanStateToString={BI:function(A5){var Bp=A5;
var GC=A.jV;switch(Bp){case 1:GC=A.aaR(A.acp.SH);break;case 2:GC=A.aaR(A.acp.AOW
);break;case 3:GC=A.aaR(A.acp.ARG);break;case 4:GC=A.aaR(A.acp.AOV);break;case 5:
GC=A.aaR(A.acp.A7E);break;case 6:GC=A.aaR(A.acp.HE);break;case 7:GC=A.aaR(A.acp.
A_P);break;case 8:GC=A.aaR(A.acp.A46);break;case 9:GC=A.aaR(A.acp.AMN);break;case
10:GC=A.aaR(A.acp.AUm);break;case 11:GC=A.aaR(A.acp.BE);break;case 12:GC=A.aaR(A.
acp.BB);break;case 13:GC=A.aaR(A.acp.A7r);break;case 14:GC=A.aaR(A.acp.AUn);break;
case 15:GC=A.aaR(A.acp.AUo);break;case 16:GC=A.aaR(A.acp.AUZ);break;case 0:GC=Aox;
break;default:throw new Error(As$+Bp.toFixed());}return GC;},Lt:function(A5){var
Bp=A5;var GC=A.jV;switch(Bp){case 1:GC=A.aaR(A.acp.Boc);break;case 2:GC=A.aaR(A.
acp.AOW);break;case 3:GC=A.aaR(A.acp.ARG);break;case 4:GC=A.aaR(A.acp.AOV);break;
case 5:GC=A.aaR(A.acp.BjU);break;case 6:GC=A.aaR(A.acp.HE);break;case 7:GC=A.aaR(
A.acp.BnT);break;case 8:GC=A.aaR(A.acp.Bg8);break;case 9:GC=A.aaR(A.acp.AMN);break;
case 10:GC=A.aaR(A.acp.AUm);break;case 11:GC=A.aaR(A.acp.BE);break;case 12:GC=A.
aaR(A.acp.BB);break;case 13:GC=A.aaR(A.acp.BjG);break;case 14:GC=A.aaR(A.acp.AUn
);break;case 15:GC=A.aaR(A.acp.AUo);break;case 16:GC=A.aaR(A.acp.AUZ);break;case
0:GC=Aox;break;default:throw new Error(As$+Bp.toFixed());}return GC;},Bpv:function(
A5){var Bp=A5;var Ge=-1;switch(Bp){case 0:Ge=0;break;case 1:Ge=1;break;case 2:Ge=
2;break;case 3:Ge=3;break;case 4:Ge=4;break;case 5:Ge=5;break;case 6:Ge=6;break;
case 7:Ge=7;break;case 8:Ge=8;break;case 9:Ge=9;break;case 10:Ge=10;break;case 11:
Ge=11;break;case 12:Ge=12;break;case 13:Ge=13;break;case 14:Ge=14;break;case 15:
Ge=15;break;case 16:Ge=16;break;default:throw new Error(As$+Bp.toFixed());}return Ge;
},Bpw:function(A5){var Bp=A5;var Ge=A.jV;switch(Bp){case 1:Ge=AZd;break;case 2:Ge=
AZe;break;case 3:Ge=Ata;break;case 4:Ge=Atb;break;case 5:Ge=Atc;break;case 6:Ge=
Atd;break;case 7:Ge=Ayv;break;case 8:Ge=Aoy;break;case 9:Ge=AZf;break;case 10:Ge=
AZg;break;case 11:Ge=UO;break;case 12:Ge=AZh;break;case 13:Ge=AZi;break;case 14:
Ge=AZj;break;case 15:Ge=AZk;break;case 16:Ge=AZl;break;case 0:Ge=Aox;break;default:
throw new Error(As$+Bp.toFixed());}return Ge;},_Init:function(aArg){C.EnumToString.
_Init.call(this,aArg);this.__proto__=C.GermanStateToString;},_className:"Device::GermanStateToString"
};C.EartagNrAssignmentMode={OneSingleRange:0,TwoNumberRanges:1,LAST:2};C.EartagNrAssignmentModeToString={
Lt:function(A5){var Vb=A5;var Nu=A.jV;switch(Vb){case 0:Nu=AZm;break;case 1:Nu=AZn;
break;default:throw new Error(AIs+Vb.toFixed());}return Nu;},BI:function(A5){var
Vb=A5;var Nu=A.jV;switch(Vb){case 0:Nu=A.aaR(A.acf.BnB);break;case 1:Nu=A.aaR(A.
acf.BpK);break;default:throw new Error(AIs+Vb.toFixed());}return Nu;},_Init:function(
aArg){C.EnumToString._Init.call(this,aArg);this.__proto__=C.EartagNrAssignmentModeToString;
},_className:"Device::EartagNrAssignmentModeToString"};C.BCH={BEC:0,BEs:1,BDA:2,
BDB:3,BDC:4,BFA:5};C.EnumToCodeset={AmE:function(Ah1){throw new Error(AZo+Ah1.toFixed(
));},Aei:function(A5){throw new Error(As0+A5.toFixed());},AqT:function(){A.ab5("%s"
,AIt);return 0;},HH:function(){A.ab5("%s",AIt);return 0;},_Init:function(aArg){this.
__proto__=C.EnumToCodeset;A.h7++;},_Done:function(){this.__proto__=null;A.h7--;}
,_ReInit:function(){},_Mark:function(D){var B;if((B=this.I)&&(B._cycle!=D))B._Mark(
B._cycle=D);},I:null,_cycle:0,_observers:null,_className:"Device::EnumToCodeset"
};C.M1={AmE:function(Ah1){var Bv;switch(Ah1){case 1:Bv=1;break;case 2:Bv=2;break;
case 3:Bv=3;break;case 4:Bv=4;break;case 5:Bv=5;break;case 6:Bv=6;break;case 9:Bv=
7;break;case 10:Bv=8;break;case 11:Bv=9;break;case 12:Bv=10;break;case 13:Bv=11;
break;case 14:Bv=12;break;case 15:Bv=13;break;case 16:Bv=14;break;case 17:Bv=15;
break;case 18:Bv=16;break;case 19:Bv=17;break;case 20:Bv=18;break;case 21:Bv=19;
break;case 22:Bv=20;break;case 23:Bv=21;break;case 24:Bv=22;break;case 25:Bv=23;
break;case 26:Bv=24;break;case 27:Bv=25;break;case 28:Bv=26;break;case 31:Bv=27;
break;case 32:Bv=28;break;case 33:Bv=29;break;case 34:Bv=30;break;case 35:Bv=31;
break;case 36:Bv=32;break;case 41:Bv=33;break;case 42:Bv=34;break;case 43:Bv=35;
break;case 44:Bv=36;break;case 45:Bv=37;break;case 46:Bv=38;break;case 47:Bv=39;
break;case 48:Bv=40;break;case 49:Bv=41;break;case 50:Bv=42;break;case 51:Bv=43;
break;case 52:Bv=44;break;case 53:Bv=45;break;case 54:Bv=46;break;case 55:Bv=47;
break;case 56:Bv=48;break;case 57:Bv=49;break;case 58:Bv=50;break;case 59:Bv=51;
break;case 60:Bv=52;break;case 61:Bv=53;break;case 65:Bv=54;break;case 66:Bv=55;
break;case 67:Bv=56;break;case 68:Bv=57;break;case 69:Bv=58;break;case 70:Bv=59;
break;case 71:Bv=60;break;case 72:Bv=61;break;case 73:Bv=62;break;case 74:Bv=63;
break;case 75:Bv=64;break;case 76:Bv=65;break;case 77:Bv=66;break;case 78:Bv=67;
break;case 79:Bv=68;break;case 80:Bv=69;break;case 81:Bv=70;break;case 82:Bv=71;
break;case 83:Bv=72;break;case 84:Bv=73;break;case 85:Bv=74;break;case 86:Bv=75;
break;case 87:Bv=76;break;case 88:Bv=77;break;case 89:Bv=78;break;case 90:Bv=79;
break;case 91:Bv=80;break;case 92:Bv=81;break;case 93:Bv=82;break;case 94:Bv=83;
break;case 97:Bv=84;break;case 98:Bv=85;break;case 99:Bv=86;break;case 100:Bv=87;
break;case 101:Bv=88;break;case 102:Bv=89;break;case 103:Bv=90;break;case 104:Bv=
91;break;case 105:Bv=92;break;case 106:Bv=93;break;case 107:Bv=94;break;case 108:
Bv=95;break;case 109:Bv=96;break;case 110:Bv=97;break;case 111:Bv=98;break;default:
Bv=0;}return Bv;},Aei:function(A5){var Bv=A5;var BM=0;switch(Bv){case 0:BM=0;break;
case 1:BM=1;break;case 2:BM=2;break;case 3:BM=3;break;case 4:BM=4;break;case 5:BM=
5;break;case 6:BM=6;break;case 7:BM=9;break;case 8:BM=10;break;case 9:BM=11;break;
case 10:BM=12;break;case 11:BM=13;break;case 12:BM=14;break;case 13:BM=15;break;
case 14:BM=16;break;case 15:BM=17;break;case 16:BM=18;break;case 17:BM=19;break;
case 18:BM=20;break;case 19:BM=21;break;case 20:BM=22;break;case 21:BM=23;break;
case 22:BM=24;break;case 23:BM=25;break;case 24:BM=26;break;case 25:BM=27;break;
case 26:BM=28;break;case 27:BM=31;break;case 28:BM=32;break;case 29:BM=33;break;
case 30:BM=34;break;case 31:BM=35;break;case 32:BM=36;break;case 33:BM=41;break;
case 34:BM=42;break;case 35:BM=43;break;case 36:BM=44;break;case 37:BM=45;break;
case 38:BM=46;break;case 39:BM=47;break;case 40:BM=48;break;case 41:BM=49;break;
case 42:BM=50;break;case 43:BM=51;break;case 44:BM=52;break;case 45:BM=53;break;
case 46:BM=54;break;case 47:BM=55;break;case 48:BM=56;break;case 49:BM=57;break;
case 50:BM=58;break;case 51:BM=59;break;case 52:BM=60;break;case 53:BM=61;break;
case 54:BM=65;break;case 55:BM=66;break;case 56:BM=67;break;case 57:BM=68;break;
case 58:BM=69;break;case 59:BM=70;break;case 60:BM=71;break;case 61:BM=72;break;
case 62:BM=73;break;case 63:BM=74;break;case 64:BM=75;break;case 65:BM=76;break;
case 66:BM=77;break;case 67:BM=78;break;case 68:BM=79;break;case 69:BM=80;break;
case 70:BM=81;break;case 71:BM=82;break;case 72:BM=83;break;case 73:BM=84;break;
case 74:BM=85;break;case 75:BM=86;break;case 76:BM=87;break;case 77:BM=88;break;
case 78:BM=89;break;case 79:BM=90;break;case 80:BM=91;break;case 81:BM=92;break;
case 82:BM=93;break;case 83:BM=94;break;case 84:BM=97;break;case 85:BM=98;break;
case 86:BM=99;break;case 87:BM=100;break;case 88:BM=101;break;case 89:BM=102;break;
case 90:BM=103;break;case 91:BM=104;break;case 92:BM=105;break;case 93:BM=106;break;
case 94:BM=107;break;case 95:BM=108;break;case 96:BM=109;break;case 97:BM=110;break;
case 98:BM=111;break;default:throw new Error(AZp+Bv.toFixed());}return BM;},AqT:
function(){return 0;},HH:function(){return 111;},_Init:function(aArg){C.EnumToCodeset.
_Init.call(this,aArg);this.__proto__=C.M1;},_className:"Device::BreedToHitCodeset"
};C.ReasonOfLeaving={Unknown:0,A$k:1,RJ:2,A_J:3,A65:4,BEL:5,A$z:6,A7A:7,A5n:8,A_F:
9,A7y:10,A5r:11,BE1:12,BE2:13,LAST:14};C.ReasonOfLeavingToString={BI:function(A5
){var AdD=A5;var Tn=A.jV;switch(AdD){case 0:Tn=A.aaR(A.acf.Unknown);break;case 1:
Tn=A.aaR(A.acf.A$k);break;case 2:Tn=A.aaR(A.acf.RJ);break;case 3:Tn=A.aaR(A.acf.
A_J);break;case 4:Tn=A.aaR(A.acf.A65);break;case 5:Tn=A.aaR(A.acf.BnC);break;case
6:Tn=A.aaR(A.acf.A$z);break;case 7:Tn=A.aaR(A.acf.A7A);break;case 8:Tn=A.aaR(A.acf.
A5n);break;case 9:Tn=A.aaR(A.acf.A_F);break;case 10:Tn=A.aaR(A.acf.A7y);break;case
11:Tn=A.aaR(A.acf.A5r);break;case 12:Tn=A.aaR(A.acf.BnN);break;case 13:Tn=A.aaR(
A.acf.BnM);break;default:throw new Error(AZq+AdD.toFixed());}return Tn;},_Init:function(
aArg){C.EnumToString._Init.call(this,aArg);this.__proto__=C.ReasonOfLeavingToString;
},_className:"Device::ReasonOfLeavingToString"};C.Ahu={AmE:function(Ah1){var Pc;
switch(Ah1){case 1:Pc=1;break;case 2:Pc=2;break;case 3:Pc=3;break;case 4:Pc=4;break;
case 5:Pc=5;break;case 6:Pc=6;break;case 7:Pc=7;break;case 8:Pc=8;break;case 9:Pc=
9;break;case 10:Pc=10;break;case 11:Pc=11;break;case 12:Pc=12;break;case 13:Pc=13;
break;default:Pc=0;}return Pc;},Aei:function(A5){var Pc=A5;var Jg=0;switch(Pc){case
0:Jg=0;break;case 2:Jg=2;break;case 8:Jg=8;break;case 11:Jg=11;break;case 4:Jg=4;
break;case 10:Jg=10;break;case 7:Jg=7;break;case 5:Jg=5;break;case 9:Jg=9;break;
case 3:Jg=3;break;case 12:Jg=12;break;case 13:Jg=13;break;case 1:Jg=1;break;case
6:Jg=6;break;default:throw new Error(AIu+Pc.toFixed());}return Jg;},AqT:function(
){return 0;},HH:function(){return 13;},_Init:function(aArg){C.EnumToCodeset._Init.
call(this,aArg);this.__proto__=C.Ahu;},_className:"Device::ReasonOfLeavingToCodeset"
};C.KY={AmE:function(Ah1){var K9;switch(Ah1){case 1:K9=1;break;case 2:K9=2;break;
case 3:K9=3;break;case 4:K9=4;break;case 5:K9=5;break;case 6:K9=6;break;case 7:K9=
7;break;case 8:K9=8;break;case 9:K9=9;break;case 10:K9=10;break;default:K9=0;}return K9;
},Aei:function(A5){var K9=A5;var Jg=0;switch(K9){case 0:Jg=0;break;case 2:Jg=2;break;
case 1:Jg=1;break;case 9:Jg=9;break;case 6:Jg=6;break;case 8:Jg=8;break;case 7:Jg=
7;break;case 5:Jg=5;break;case 10:Jg=10;break;case 4:Jg=4;break;case 3:Jg=3;break;
default:throw new Error(AIu+K9.toFixed());}return Jg;},AqT:function(){return 0;}
,HH:function(){return 10;},_Init:function(aArg){C.EnumToCodeset._Init.call(this,
aArg);this.__proto__=C.KY;},_className:"Device::WhereAboutsToCodeset"};C.AmM={_Init:
function(aArg){this.__proto__=C.AmM;A.h7++;},_Done:function(){this.__proto__=null;
A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((B=this.I)&&(B._cycle!=
D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:"Device::EmptyClass"
};C.CalfDeregistrationsTableFields={Year:0,Deregistrations:1,Deaths:2};C.CalfDeregistrations={
Deregistrations:0,Deaths:0,Year:0,EM:function(Ad,AI){var HA=C.Row.EM.call(this,Ad
,AI);if(HA&&!!AI){this.AkG(AI.CE(Ad,0));this.Awy(AI.CE(Ad,1));this.Awx(AI.CE(Ad,
2));}return HA;},Cq:function(AI){var HA=C.Row.Cq.call(this,AI);if(HA&&!!AI){var Jk=
AI.Oy();if(Jk<=0)A.ab5("%s",Xb);else{if(this.Am7())this.CL=AI.YF();AI.Hj(this.CL
,0,this.Year);AI.Hj(this.CL,1,this.Deregistrations);AI.Hj(this.CL,2,this.Deaths);
AI.OA(Jk);}}return HA;},Gm:function(){C.Row.Gm.call(this);this.AkG(-1);},Hi:function(
){C.Row.Hi.call(this);this.AkG(0);this.Awy(0);this.Awx(0);},Awy:function(E){if(this.
Deregistrations===E)return;this.Deregistrations=E;A.abo([this,this.Bkw,this.Awy]
,0);},Awx:function(E){if(this.Deaths===E)return;this.Deaths=E;A.abo([this,this.Bku
,this.Awx],0);},AkG:function(E){if(this.Year===E)return;this.Year=E;A.abo([this,
this.Arz,this.AkG],0);},Bkw:function(){return this.Deregistrations;},Bku:function(
){return this.Deaths;},Arz:function(){return this.Year;},_Init:function(aArg){C.
Row._Init.call(this,aArg);this.__proto__=C.CalfDeregistrations;this.TableId=4;},
_className:"Device::CalfDeregistrations"};C.AuX={Undefined:0,Display:1,A_O:2,A_1:
3,A$S:4,BDV:5,BFa:6,BFL:7,BEj:8,BC9:9,BCw:10,A6r:11,A_Q:12,BFV:13,A7D:14,BFY:15};
C.DeviceComponentToString={BI:function(A5){var BcG=A5;var Qf=A.jV;switch(BcG){case
0:Qf=Ayw;break;case 10:Qf=A.aaR(A.acf.BgH);break;case 9:Qf=A.aaR(A.acf.Bhm);break;
case 1:Qf=A.aaR(A.acf.Bh2);break;case 11:Qf=A.aaR(A.acf.A6r);break;case 5:Qf=A.aaR(
A.acf.Bp4);break;case 8:Qf=A.aaR(A.acf.Bh4);break;case 14:Qf=A.aaR(A.acf.A7D);break;
case 2:Qf=A.aaR(A.acf.A_O);break;case 12:Qf=A.aaR(A.acf.A_Q);break;case 6:Qf=A.aaR(
A.acf.BnS);break;case 3:Qf=A.aaR(A.acf.A_1);break;case 7:Qf=A.aaR(A.acf.Bh5);break;
case 13:Qf=A.aaR(A.acf.BhN);break;case 15:Qf=A.aaR(A.acf.Bp8);break;case 4:Qf=A.
aaR(A.acf.A$S);break;default:throw new Error(AZr+BcG.toFixed());}return Qf;},_Init:
function(aArg){C.EnumToString._Init.call(this,aArg);this.__proto__=C.DeviceComponentToString;
},_className:"Device::DeviceComponentToString"};C.AgK={AmE:function(Ah1){return Ah1;
},Aei:function(A5){return A5;},AqT:function(){return 0;},HH:function(){return 4;
},_Init:function(aArg){C.EnumToCodeset._Init.call(this,aArg);this.__proto__=C.AgK;
},_className:"Device::EaseOfDeliveryToCodeset"};C.AeQ={AsG:function(A5){return A.
aaL(A.ach.AP4);},AsH:function(A5){var BcS=A5;var RA=-1;switch(BcS){case 0:RA=0;break;
case 1:RA=1;break;case 2:RA=2;break;default:throw new Error(Ayx+BcS.toFixed());}
return RA;},_Init:function(aArg){C.EnumToIcon._Init.call(this,aArg);this.__proto__=
C.AeQ;},_className:"Device::MotherSelectionFilterModeToIcon"};C.WhereAboutsFilterCriterion={
A4:0,Abk:function(){var Av=A._NewObject(C.WhereAboutsFilterCriterion,0);Av.Fg(this
);return Av;},Fg:function(AH){C.FilterCriterion.Fg.call(this,AH);var Av=(C.WhereAboutsFilterCriterion.
isPrototypeOf(AH)?AH:null);if(!!Av)this.A4=Av.A4;},Initialize:function(A3,Eb,A7,
P_){this.EJ=A3;this.Operator=Eb;this.A4=A7;this.YI=P_;return this;},_Init:function(
aArg){C.FilterCriterion._Init.call(this,aArg);this.__proto__=C.WhereAboutsFilterCriterion;
},_className:"Device::WhereAboutsFilterCriterion"};C.BEv={ANX:0,BDe:1,APH:2,LAST:
3};C.BFC={GH:0,AVD:1,He:2,Year:3,LAST:4};C.TimespanDaysToString={BI:function(A5){
var Bge=A5;var ABg=A.jV;switch(Bge){case 0:ABg=A.aaR(A.acf.A5F);break;case 1:ABg=
A.aaR(A.acf.AVD);break;case 2:ABg=A.aaR(A.acf.He);break;case 3:ABg=A.aaR(A.acf.Year
);break;default:throw new Error(Ayy+Bge.toFixed());}return ABg;},_Init:function(
aArg){C.EnumToString._Init.call(this,aArg);this.__proto__=C.TimespanDaysToString;
},_className:"Device::TimespanDaysToString"};C.AhN={BEI:0,BDk:1,BD1:2,BD4:3,BD3:
4,BDl:5,BD2:6,LAST:7};C.USBStateToString={BI:function(A5){var BgB=A5;var Bp=A.jV;
switch(BgB){case 0:Bp=AZs;break;case 2:Bp=AZt;break;case 1:Bp=AZu;break;case 5:Bp=
AIv;break;case 3:Bp=AZv;break;case 4:Bp=AZw;break;case 6:Bp=AZx;break;default:throw new
Error(AHP+BgB.toFixed());}return Bp;},_Init:function(aArg){C.EnumToString._Init.
call(this,aArg);this.__proto__=C.USBStateToString;},_className:"Device::USBStateToString"
};C.ACo={BDZ:0,BCI:1,BD0:2,BDX:3};C.AxB={ACi:A.jV,Timestamp:0,AD7:0,AEb:0,AGn:0,
OnSetTimestamp:function(E){if(this.Timestamp===E)return;this.Timestamp=E;},AFl:function(
E){if(this.AD7===E)return;this.AD7=E;},AFr:function(E){if(this.AEb===E)return;this.
AEb=E;},AFA:function(E){if(this.AGn===E)return;this.AGn=E;},AE1:function(E){if(this.
ACi===E)return;this.ACi=E;},_Init:function(aArg){this.__proto__=C.AxB;A.h7++;},_Done:
function(){this.__proto__=null;A.h7--;},_ReInit:function(){},_Mark:function(D){var
B;if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:
null,_className:"Device::SoftwareVersionInformation"};C.Avr={Timestamp:0,ARu:0,ARv:
0,AVg:0,AVh:0,AVf:0,ARt:0,OnSetTimestamp:function(E){if(this.Timestamp===E)return;
this.Timestamp=E;},AFi:function(E){if(this.ARu===E)return;this.ARu=E;},AFj:function(
E){if(this.ARv===E)return;this.ARv=E;},AFP:function(E){if(this.AVg===E)return;this.
AVg=E;},AFQ:function(E){if(this.AVh===E)return;this.AVh=E;},AFO:function(E){if(this.
AVf===E)return;this.AVf=E;},AFh:function(E){if(this.ARt===E)return;this.ARt=E;},
_Init:function(aArg){this.__proto__=C.Avr;A.h7++;},_Done:function(){this.__proto__=
null;A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((B=this.I)&&(B._cycle
!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:"Device::HardwareVersionInformation"
};C.Aqs={Undefined:0,BDL:1,BCV:2};C.Ags={Manual:0,TransponderId:1,LAST:2};C.AnimalIdAutoGenerationMethodToString={
BI:function(A5){var Bcc=A5;var A08=A.jV;switch(Bcc){case 0:A08=A.aaR(A.acf.A5v);
break;case 1:A08=A.aaR(A.acf.A5L);break;default:throw new Error(AZy+Bcc.toFixed(
));}return A08;},_Init:function(aArg){C.EnumToString._Init.call(this,aArg);this.
__proto__=C.AnimalIdAutoGenerationMethodToString;},_className:"Device::AnimalIdAutoGenerationMethodToString"
};C.He={A5e:0,ADW:1,ACG:2,AD8:3,ABH:4,AD$:5,ADY:6,ADX:7,ABO:8,AGw:9,AEl:10,AEj:11
,ACr:12,LAST:13};C.MonthToString={BI:function(A5){var BdU=A5;var Xz=A.jV;switch(
BdU){case 1:Xz=A.aaR(A.act.ADW);break;case 2:Xz=A.aaR(A.act.ACG);break;case 3:Xz=
A.aaR(A.act.AD8);break;case 4:Xz=A.aaR(A.act.ABH);break;case 5:Xz=A.aaR(A.act.AD$
);break;case 6:Xz=A.aaR(A.act.ADY);break;case 7:Xz=A.aaR(A.act.ADX);break;case 8:
Xz=A.aaR(A.act.ABO);break;case 9:Xz=A.aaR(A.act.AGw);break;case 10:Xz=A.aaR(A.act.
AEl);break;case 11:Xz=A.aaR(A.act.AEj);break;case 12:Xz=A.aaR(A.act.ACr);break;default:
throw new Error(AZz+BdU.toFixed());}return Xz;},_Init:function(aArg){C.EnumToString.
_Init.call(this,aArg);this.__proto__=C.MonthToString;},_className:"Device::MonthToString"
};C.AjE={FileName:A.jV,AGp:0,ACo:0,An2:false,_Init:function(aArg){this.__proto__=
C.AjE;A.h7++;},_Done:function(){this.__proto__=null;A.h7--;},_ReInit:function(){
},_Mark:function(D){var B;if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null
,_cycle:0,_observers:null,_className:"Device::DataExportContext"};C.Amt={BDS:0,BFr:
1};C.AVK={Init:function(aArg){var B;A.zX([this,this.Be9],[B=A._GetAutoObject(C.Device
),B.A9d,B.Bbg],0);this.Be9(this);},Cq:function(){A._GetAutoObject(C.Device).Ar_(
this.toString());},Be9:function(G){this.EM(A._GetAutoObject(C.Device).AHd);A.we(
this,0);},_Init:function(aArg){C.Int32ArrayWrapper._Init.call(this,aArg);this.__proto__=
C.AVK;this.Zy(3);this.Init(aArg);},_className:"Device::WeightGainsLowClass"};C.AVJ={
Init:function(aArg){var B;A.zX([this,this.Be7],[B=A._GetAutoObject(C.Device),B.A9c
,B.Bbf],0);this.Be7(this);},Cq:function(){A._GetAutoObject(C.Device).Ar9(this.toString(
));},Be7:function(G){this.EM(A._GetAutoObject(C.Device).AHc);A.we(this,0);},_Init:
function(aArg){C.Int32ArrayWrapper._Init.call(this,aArg);this.__proto__=C.AVJ;this.
Zy(3);this.Init(aArg);},_className:"Device::WeightGainsHighClass"};C.AVM={Init:function(
aArg){var B;A.zX([this,this.Be$],[B=A._GetAutoObject(C.Device),B.A9g,B.Bbj],0);this.
Be$(this);},Cq:function(){A._GetAutoObject(C.Device).Ar$(this.toString());},Be$:
function(G){this.EM(A._GetAutoObject(C.Device).AHg);A.we(this,0);},_Init:function(
aArg){C.Int32ArrayWrapper._Init.call(this,aArg);this.__proto__=C.AVM;this.Zy(3);
this.Init(aArg);},_className:"Device::WeightValuesBirthClass"};C.AVI={Init:function(
aArg){var B;A.zX([this,this.Be5],[B=A._GetAutoObject(C.Device),B.A9b,B.Bbe],0);this.
Be5(this);},Cq:function(){A._GetAutoObject(C.Device).Ar8(this.toString());},Be5:
function(G){this.EM(A._GetAutoObject(C.Device).AHb);A.we(this,0);},_Init:function(
aArg){C.Int32ArrayWrapper._Init.call(this,aArg);this.__proto__=C.AVI;this.Zy(3);
this.Init(aArg);},_className:"Device::WeightGainsAverageClass"};C.AMD={Init:function(
aArg){var B;A.zX([this,this.Beo],[B=A._GetAutoObject(C.Device),B.A8i,B.BaR],0);this.
Beo(this);},Beo:function(G){this.EM(A._GetAutoObject(C.Device).ABG);A.we(this,0);
},_Init:function(aArg){C.Int32ArrayWrapper._Init.call(this,aArg);this.__proto__=
C.AMD;this.Zy(3);this.Init(aArg);},_className:"Device::AnimalTypesWeightGainsClass"
};C.BEy={BEB:0,BEp:1,BDd:2,BFW:3,Unknown:4};C.BCT={None:0,BEJ:1,BED:2,BEz:3,BEA:
4};C.BFQ={A7S:0,Manual:1,TransponderId:2,NaisId:3,LAST:4};C.TransponderLinkageIdChangeMethodToString={
BI:function(A5){var Bgi=A5;var ABi=A.jV;switch(Bgi){case 0:ABi=A.aaR(A.acf.A7S);
break;case 1:ABi=A.aaR(A.acf.A5v);break;case 2:ABi=A.aaR(A.acf.A5L);break;case 3:
ABi=A.aaR(A.acf.BhL);break;default:throw new Error(AZA+Bgi.toFixed());}return ABi;
},_Init:function(aArg){C.EnumToString._Init.call(this,aArg);this.__proto__=C.TransponderLinkageIdChangeMethodToString;
},_className:"Device::TransponderLinkageIdChangeMethodToString"};C.A_G={BA3:function(
AoK){var Ka=A.ab0(A.abV(AoK,15),0,10);var J4=A._GetAutoObject(C.Converter).ZZ(Ka
);if(!!J4){if(J4===10){if((AoK.length!==16)||!A._GetAutoObject(A.acj.VA).AVu(AoK
))return 0;else return Ka;}else return Ka;}else{J4=A._GetAutoObject(C.Converter).
ZZ(A._GetAutoObject(C.Device).Ut);if(!!J4&&(J4===10)){if(!A._GetAutoObject(A.acj.
VA).AVu(AoK))return 0;if(AoK.length===12){var AJl=A.ab0(A.abV(AoK,10),0,10);var AKa=
A._GetAutoObject(C.Converter).BpE(AJl);if((AJl>0)&&!!AKa)return(A._GetAutoObject(
C.Converter).Aqy(J4)*1000000000000)+A.ab0(A.abV(AoK,10),0,10);}}}return 0;},Bfh:
function(J5){if((J5.length!==10)||!A._GetAutoObject(A.acj.VA).AVu(J5))return 0;var
AAL=A._NewObject(A.Core.Bs,0);var A3M=false;var A3R=A.abW(J5,4,4);var AtP=A.wz(A3R
,0,10);if((AtP<2000)||(AtP>2100)){A3R=A.abV(J5,4);AtP=A.wz(A3R,0,10);A3M=true;}if((
AtP<2000)||(AtP>2100))return 0;AAL.Year=AtP;var AKX;var AzU;if(A3M){AKX=A.abW(J5
,4,2);AzU=A.wz(AKX,0,10);}else{AKX=A.abW(J5,2,2);AzU=A.wz(AKX,0,10);}if((AzU<1)||(
AzU>12))return 0;AAL.Um(AzU);var AKW;var AzT;if(A3M){AKW=A.abW(J5,6,2);AzT=A.wz(
AKW,0,10);}else{AKW=A.abV(J5,2);AzT=A.wz(AKW,0,10);}if((AzT<1)||(AzT>AAL.Zp()))return 0;
AAL.Lp(AzT);return AAL.JO();},_Init:function(aArg){this.__proto__=C.A_G;A.h7++;}
,_Done:function(){this.__proto__=null;A.h7--;},_ReInit:function(){},_Mark:function(
D){var B;if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:
null,_className:"Device::ParserClass"};C.AnN={_Init:function(){C.A_G._Init.call(
this,0);},_ReInit:function(){},_variants:function(){return this;},_this:null};C.
AnimalTableFieldsToString={BI:function(A5){var Aaq=A5;var MM=A.jV;switch(Aaq){case
14:MM=A.aaR(A.acf.Afp);break;case 32:MM=A.aaR(A.acf.Breed);break;case 4:MM=A.aaR(
A.acf.Aed);break;case 28:MM=A.aaR(A.acf.A5j);break;case 33:MM=A.aaR(A.acf.AgC);break;
case 23:MM=A.aaR(A.acf.KI);break;case 7:MM=A.aaR(A.acf.Afk);break;case 2:MM=A.aaR(
A.acf.P);break;case 0:MM=A.aaR(A.acf.GJ);break;case 8:MM=A.aaR(A.acf.Alarm);break;
case 9:MM=A.aaR(A.acf.ACb);break;case 38:MM=A.aaR(A.acf.Bh3);break;case 11:MM=A.
aaR(A.acf.Fever);break;case 29:MM=A.aaR(A.acf.ARi);break;case 18:MM=A.aaR(A.acf.
M3);break;case 26:MM=A.aaR(A.acf.Ud);break;case 22:MM=A.aaR(A.acf.Transponder);break;
case 1:MM=A.aaR(A.acf.GF);break;case 34:MM=A.aaR(A.acf.Jd);break;case 6:case 25:
case 27:case 10:case 37:case 12:case 17:case 5:case 3:case 35:case 36:case 15:case
16:case 24:case 31:case 20:case 30:case 21:case 19:case 13:MM=A.jV;break;default:
throw new Error(AZB+A5.toFixed());}return MM;},_Init:function(aArg){C.EnumToString.
_Init.call(this,aArg);this.__proto__=C.AnimalTableFieldsToString;},_className:"Device::AnimalTableFieldsToString"
};C.VM={BDY:0,BDW:1,LAST:2};C.DataExportDestinationToString={BI:function(A5){var
ByD=A5;var A1x=A.jV;switch(ByD){case 0:A1x=A.acf.BiZ;break;case 1:A1x=A.acf.BhF;
break;default:throw new Error(AZC+A5.toFixed());}return A1x;},_Init:function(aArg
){C.EnumToString._Init.call(this,aArg);this.__proto__=C.DataExportDestinationToString;
},_className:"Device::DataExportDestinationToString"};C.AD5={Bj:0,BFv:1,LAST:2};
C.ListViewScopeToString={BI:function(A5){var BzM=A5;var A2t=A.jV;switch(BzM){case
0:A2t=A.aaR(A.acf.Bj);break;case 1:A2t=A.aaR(A.acf.BoH);break;default:throw new Error(
AIw+A5.toFixed());}return A2t;},_Init:function(aArg){C.EnumToString._Init.call(this
,aArg);this.__proto__=C.ListViewScopeToString;},_className:"Device::ListViewScopeToString"
};C.AHf={BGm:0,BGl:1,BGk:2,LAST:3};C.WeightValuePrecisionToString={BI:function(A5
){var BCs=A5;var ALy=A.jV;switch(BCs){case 0:ALy=AZD+A.aaR(A.acf.Az7);break;case
1:ALy=AZE+A.acf.AiB;break;case 2:ALy=AZF+A.acf.AiB;break;default:throw new Error(
AZG+A5.toFixed());}return ALy;},_Init:function(aArg){C.EnumToString._Init.call(this
,aArg);this.__proto__=C.WeightValuePrecisionToString;},_className:"Device::WeightValuePrecisionToString"
};C.Agx={BI:function(A5){var AK5=A5;if(AK5===1)return A.aaR(A.acf.Bi1);else return C.
AnimalTypeToString.BI.call(this,A5);},_Init:function(aArg){C.AnimalTypeToString.
_Init.call(this,aArg);this.__proto__=C.Agx;},_className:"Device::AnimalTypeToStringHeifer"
};C.Y7={RJ:0,BEF:1,LAST:2};C.MassDeregistrationCriterionToString={BI:function(A5
){var BzP=A5;var A2y=A.jV;switch(BzP){case 0:A2y=A.aaR(A.acf.Bj7);break;case 1:A2y=
A.aaR(A.acf.AR3);break;default:throw new Error(Ayc+A5.toFixed());}return A2y;},_Init:
function(aArg){C.EnumToString._Init.call(this,aArg);this.__proto__=C.MassDeregistrationCriterionToString;
},_className:"Device::MassDeregistrationCriterionToString"};C.UInt64PartialFilterCriterion={
A4:A.jV,Zn:0,OB:0,Abk:function(){var Av=A._NewObject(C.UInt64PartialFilterCriterion
,0);Av.Fg(this);return Av;},Fg:function(AH){C.FilterCriterion.Fg.call(this,AH);var
Av=(C.UInt64PartialFilterCriterion.isPrototypeOf(AH)?AH:null);if(!!Av){this.A4=Av.
A4;this.Zn=Av.Zn;this.OB=Av.OB;}},Initialize:function(A3,Eb,A7,Atq,AI2,P_){this.
EJ=A3;this.Operator=Eb;this.A4=A7;this.YI=P_;this.Zn=Atq;this.OB=AI2;return this;
},_Init:function(aArg){C.FilterCriterion._Init.call(this,aArg);this.__proto__=C.
UInt64PartialFilterCriterion;},_className:"Device::UInt64PartialFilterCriterion"
};
C._Init=function(){C.Int32FilterCriterion.__proto__=C.FilterCriterion;C.StringFilterCriterion.
__proto__=C.FilterCriterion;C.Table.__proto__=C.ITable;C.Animal.__proto__=C.Row;
C.Rating.__proto__=C.Row;C.HelperClass.__proto__=C.AmM;C.BoolFilterCriterion.__proto__=
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
C.AU7.__proto__=C.Int32ArrayWrapper;C.AU6.__proto__=C.Int32ArrayWrapper;C.AMC.__proto__=
C.Int32ArrayWrapper;C.UInt64FilterCriterion.__proto__=C.FilterCriterion;C.BooleanToAssignedUnassignedString.
__proto__=C.EnumToString;C.CountryToString.__proto__=C.EnumToString;C.EaseOfDeliveryToString.
__proto__=C.EnumToString;C.WhereAboutsToString.__proto__=C.EnumToString;C.BreedToString.
__proto__=C.EnumToString;C.AnimalIdGenerationMethodToString.__proto__=C.EnumToString;
C.DirectionOfCountingToString.__proto__=C.EnumToString;C.Aef.__proto__=C.EnumToIcon;
C.AdW.__proto__=C.EnumToIcon;C.GermanStateToString.__proto__=C.EnumToString;C.EartagNrAssignmentModeToString.
__proto__=C.EnumToString;C.M1.__proto__=C.EnumToCodeset;C.ReasonOfLeavingToString.
__proto__=C.EnumToString;C.Ahu.__proto__=C.EnumToCodeset;C.KY.__proto__=C.EnumToCodeset;
C.CalfDeregistrations.__proto__=C.Row;C.DeviceComponentToString.__proto__=C.EnumToString;
C.AgK.__proto__=C.EnumToCodeset;C.AeQ.__proto__=C.EnumToIcon;C.WhereAboutsFilterCriterion.
__proto__=C.FilterCriterion;C.TimespanDaysToString.__proto__=C.EnumToString;C.USBStateToString.
__proto__=C.EnumToString;C.AnimalIdAutoGenerationMethodToString.__proto__=C.EnumToString;
C.MonthToString.__proto__=C.EnumToString;C.AVK.__proto__=C.Int32ArrayWrapper;C.AVJ.
__proto__=C.Int32ArrayWrapper;C.AVM.__proto__=C.Int32ArrayWrapper;C.AVI.__proto__=
C.Int32ArrayWrapper;C.AMD.__proto__=C.Int32ArrayWrapper;C.TransponderLinkageIdChangeMethodToString.
__proto__=C.EnumToString;C.AnimalTableFieldsToString.__proto__=C.EnumToString;C.
DataExportDestinationToString.__proto__=C.EnumToString;C.ListViewScopeToString.__proto__=
C.EnumToString;C.WeightValuePrecisionToString.__proto__=C.EnumToString;C.Agx.__proto__=
C.AnimalTypeToString;C.MassDeregistrationCriterionToString.__proto__=C.EnumToString;
C.UInt64PartialFilterCriterion.__proto__=C.FilterCriterion;};C._ReInit=function(
){var B;if((B=C.Device._this))B._ReInit(),C.Device._ReInit.call(B);if((B=C.Converter.
_this))B._ReInit(),C.Converter._ReInit.call(B);if((B=C.Helper._this))B._ReInit()
,C.Helper._ReInit.call(B);if((B=C.AnN._this))B._ReInit(),C.AnN._ReInit.call(B);};
C.DH=function(D){var B;if((B=C.Device._this)&&(B._cycle!=D))B._Done(C.Device._this=
null);if((B=C.Converter._this)&&(B._cycle!=D))B._Done(C.Converter._this=null);if((
B=C.Helper._this)&&(B._cycle!=D))B._Done(C.Helper._this=null);if((B=C.AnN._this)&&(
B._cycle!=D))B._Done(C.AnN._this=null);};return C;})();

/* VitalControl demonstration application, © Urban GmbH & Co.KG 2023 */