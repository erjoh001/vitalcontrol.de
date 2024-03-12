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
var IQ="ERROR: MeasureState is read only.";var Iq="ERROR: Temperature value is read only";
var O2="ERROR: UpdateDataTable called for Undefined data table.";var P1="ERROR: UpdateDataTable called for unknown data table id=";
var P2="ERROR: SyncState is read only.";var CQ="ERROR: ScanTransponder is read only.";
var E$="ERROR: Body weight value is read only";var Lu="ERROR: Predicted temperature value is read only";
var P3="ERROR: TransferProgress is read only";var JZ="ERROR: TransferTarget is read only";
var N_="ERROR: unhandled assessment.";var P4="Unhandled enum BodyTemperature: ";
var MF="AU";var S4="AT";var UO="BE";var Z4="BA";var W1="BG";var Ir="CA";var UP="CN";
var Z5="TW";var W2="HR";var Z6="CY";var W3="CZ";var Z7="DK";var Z8="EE";var UQ="FI";
var W4="FR";var P5="DE";var Z9="GR";var O3="HU";var Ri="IE";var W5="IT";var W6="JP";
var W7="LV";var W8="LT";var Z_="LU";var W9="MT";var W_="NL";var S5="NO";var UR="PL";
var US="PT";var AcM="RO";var S6="RU";var Z$="SK";var Afx="SI";var Aaa="ES";var W$=
"SE";var Aab="CH";var Aac="TR";var AhQ="UA";var J0="UK";var Aad="US";var Lv=".";
var AhR="-";var Aog="ERROR: Unhandled mass unit: ";var N$=" ";var Xa="Unhandled gender";
var Aoh="Unhandled animal type";var AhS="Unhandled Device::MassUnit.";var AhT="Unhandled Device::AnimalListContent.";
var AcN="Avid";var UT="Ordicam / IER SA";var Aoi="Agrident";var Aoj="Datamars";var
Aok="Allflex";var Aol="Texas Instruments";var Afy="Nedap";var Ala="Digital Angel";
var AxZ="null";var Ax0="[ ";var O4=", ";var Rj=" ]";var Ax1="Unhandled language";
var UU="Unhandled Device::AnimalListAction.";var AsS="Temperature unit conversion not supported: ";
var Ax2="->";var Ax3="=";var Ax4=">";var Aom="<";var Afz="!=";var Aon="WARNING: Unhandled operator.";
var IR="Unknown birth type";var Aoo="Unhandled country: ";var Xb="ERROR: Cannot start transaction";
var Alb="ERROR: Table is null, cannot load row (";var AsT=")";var AsU="Table Id mismatch!";
var AsV="ERROR: Row index (";var AsW=") out of bounds [0,";var Alc="]";var AsX="ERROR: Table is full. Item limit: ";
var Ax5="Device::ScanTransponder not set";var Ax6="Unhandled TransponderType.";var
Ax7="Unhandled ScanState.";var AVP="Could not load animal with transponder";var AsY=
"Birth type";var Ax8="Time calving";var P6="Pend. reg. notice";var Ax9="Perished";
var AVQ="Rating temp.";var AVR="Location";var AVS=" mother";var AVT="Reason leaving";
var AHi="Time alarm";var AHj="Time first weighing";var AfA="Time control";var Aop=
"Time temp.";var AVU="Time watch";var AHk="Time weighing";var Ald="Assessment";var
AHl="Time rating";var AHm="ERROR: Unhandled AnimalTable filter field:";var AHn="Field ";
var AVV="ERROR: Unhandled RatingTable filter field:";var AVW="ERROR: Unhandled table ";
var AVX=" filter fields.";var AcO=" [";var AVY="WARNING: Unhandled filter criterion type.";
var AHo="0";var AsZ="No table specified";var AHp="Invalid animal id generation method: ";
var AHq="Unhandled AnimalIdGenerationMethod: ";var Ax_="Invalid gender: ";var AHr=
"Invalid ear tag number assignment mode: ";var Ax$=";";var AVZ="Invalid animal creation error code: ";
var AV0="Invalid EartagNrAssignmentMode: ";var AV1="Unsupported exponent: ";var AV2=
"Unknown whereabouts type: ";var AHs="Unhandled Gender: ";var AV3="Unhandled AnimalIdAutoGenerationMethod: ";
var O5="\n";var Aya="\n\n";var AV4="Bootloader:\nV\xA0";var AV5="Middleware:\nV\xA0";
var AV6="GUI:\nV\xA0";var AV7="Mainboard: ";var AV8="Torchboard: ";var AV9="Operator not supported.";
var AV_="Unhandled Device::TransponderAssignmentIdChangeMethod: ";var Ayb="Unhandled mass deregistration criterion: ";
var As0="Unhandled enum value ";var As1="UNDEFINED";var AV$="Boot";var AWa="Charge";
var AWb="ChargeWarning";var AWc="ControlledPowerOff";var AHt="DeviceMain";var AWd=
"DeviceService";var AHu="DeviceInfo";var AHv="DeviceDataManagement";var AHw="DeviceAnimalDataMenu";
var AWe="DeviceDeviceDataMenu";var AHx="DeviceCheck";var AHy="Home";var AWf="Settings";
var Rk="DateTimeSettings";var Xc="UnitsSettings";var AWg="DataAcquisitionSettings";
var AWh="RegistrationAutomaticSettings";var AWi="RegistrationPresettingsSettings";
var AWj="TransponderAssignmentSettings";var AWk="TransponderUnlinkSettings";var AWl=
"TemperatureSettings";var AWm="WeightGainSettings";var AhU="DeviceSettings";var AHz=
"RegistrationSettings";var AWn="InitializationSettings";var AWo="PremisesSettings";
var AHA="Sleep";var AHB="Sync";var Ayc="EditAnimalData";var P7="EditAnimalDataNaisId";
var AWp="AnimalList";var AWq="AnimalListFilter";var AWr="AlarmListFilter";var As2=
"WatchListFilter";var AWs="AnimalActionActions";var AWt="AnimalActionTemperature";
var AWu="TemperatureMeasurement";var AWv="AnimalActionWeighing";var AWw="AnimalActionRate";
var AWx="AnimalActionUnregister";var As3="AnimalActionPerished";var AWy="AnimalActionNewBornCare";
var AWz="AlarmList";var AWA="ControlMeasure";var AWB="ControlList";var AWC="RangeTest";
var AWD="ListsMain";var AWE="ListsIdManagement";var AWF="WatchList";var AWG="EvaluationMenuMain";
var AWH="EvaluationMenuWeights";var AHC="EvaluationLosses";var Ale="EvaluationRatings";
var AWI="EvaluationTemperatures";var AWJ="EvaluationWeights";var AWK="EvaluationWeightsRecent";
var Ayd="EvaluationBirthWeights";var Alf="AnimalEvaluationFilter";var AhV="NewMenu";
var Aye="NewAnimals";var Aoq="NewAnimalManualData";var AhW="MassRecording";var AWL=
"NewAnimalTransponderData";var Ayf="NewAnimalLoss";var AHD="AutoActionScanScreen";
var AfB="ManualActionScanScreen";var AHE="SetTransponderScreen";var Aae="SetSaveTransponderScreen";
var Alg="NewAnimalSetTransponderScreen";var Aor="NewAnimalsSetTransponderScreen";
var AWM="NewAnimalCalvingDataScreen";var AWN="WeightListScreen";var AWO="AnimalSingleInfoScreen";
var AWP="AnimalMultiInfoScreen";var AWQ="AnimalRegistrationDetails";var As4="FreshCowListScreen";
var AHF="FreshCowListFilterScreen";var AHG="DryCowListScreen";var AWR="DryCowListFilterScreen";
var AWS="NoTransponderListScreen";var AWT="NoTransponderListFilterScreen";var AWU=
"YoungNoTransponderListScreen";var AWV="YoungNoTransponderListFilterScreen";var AWW=
"NoNaisIdListScreen";var AWX="NoNaisIdListFilterScreen";var AWY="RegistrationsListScreen";
var AWZ="RegistrationsListFilterScreen";var AW0="ActionListScreen";var AW1="ActionListFilterScreen";
var Ayg="UpdateScreen";var AHH="MotherScanScreen";var AHI="SetSaveNaisIdScreen";
var AHJ="PurchasedAnimalsList";var AHK="TextInput";var AHL="AnimalActions";var AHM=
"Unhandled display mode: ";var AW2="None";var AW3="Actions Settings";var AW4="Auto Action";
var AW5="Menu Item Settings";var AW6="Rating Type";var AW7="Weighing settings";var
AW8="Options";var Ayh="AnimalSearch";var AHN="AnimalSearchUnfiltered";var AW9="AnimalSearchDriedOff";
var AHO="MeasurementReady";var AhX="AnimalMultiInfoMenu";var UV="MassRecordingDefaults";
var AW_="MassRecordingFields";var Aaf="MassRecordingMenu";var AW$="PurchasedAnimalsListMenu";
var AXa="BirthRegistrationsListMenu";var Alh="Unhandled overlay menu: ";var Aag=
"Error";var AcP="Idle";var Ayi="IdScanned";var AXb="NotFound";var Oa="Progress";
var AHP="Unhandled scan state: ";var AXc="Prediction";var AHQ="Ready";var AXd="Unhandled measure state: ";
var AHR="Unhandled temperature unit: ";var AHS="Unhandled species: ";var AXe="English";
var AXf="Nederlands";var AXg="Deutsch";var AXh="Eesti";var AXi="Suomalainen";var
AXj="Fran\xE7ais";var AXk="\u0395\u03BB\u03BB\u03B7\u03BD\u03B9\u03BA\u03AC";var
AXl="\u0411\u044A\u043B\u0433\u0430\u0440\u0441\u043A\u0438";var AHT="Italiano";
var AXm="\u0420\u0443\u0441\u0441\u043A\u0438\u0439";var AHU="Espa\xF1ol";var AHV=
"T\xFCrk\xE7e";var Ayj="\u6B63\u9AD4\u5B57/\u7E41\u9AD4\u5B57";var AXn="\u010Ce\u0161tina";
var AXo="Bosanski";var AXp="Norsk";var AXq="\u0423\u043A\u0440\u0430\u0457\u043D\u0441\u044C\u043A\u0438\u0439";
var AHW="Unhandled language: ";var AXr="EN";var AXs="ET";var AXt="EL";var As5="ZH";
var As6="CS";var AHX="BS";var AXu="Unhandled gender: ";var AXv="Unhandled birth type: ";
var AXw="Exporting";var AXx="ImportFinish";var AXy="ImportStart";var AXz="Importing";
var AXA="Init";var AXB="Unhandled sync state: ";var AHY="Unhandled rating attribute: ";
var AXC="Unhandled assessment: ";var Ayk="Illegal boolean value: ";var AHZ="Unhandled popup ID:";
var AXD="Unknown";var AXE="Severe Error";var AXF="ErrorsDeviceDriverCheck";var AXG=
"Enter Sleep";var AXH="About";var AXI="InfoSoftwareVersions";var AH0="InfoHardwareVersions";
var AH1="InfoSerial";var AH2="ShutDown";var AH3="SuccessDataSync";var Ayl="SuccessResetFactory";
var Aym="SuccessResetAnimalData";var AH4="SuccessCreateBackup";var AXJ="SuccessRestoreBackup";
var AH5="CreateBackupInProgress";var AXK="RestoreBackupInProgress";var AH6="FailedCreateBackup";
var AXL="FailedRestoreBackup";var AXM="TechnicalDetails";var AXN="WarningDataSync";
var AXO="WarningFactory";var AXP="WarningResetAnimalData";var AXQ="WarningRestart";
var AXR="WarningAutoAction";var AXS="WarningAutoActionNotApplicable";var AXT="WarningNoMenuItem";
var AXU="WarningEnterDemoMode";var AXV="NoAnimalsRegistered";var AXW="MaxNumAnimalsReached";
var Ayn="MaxNumRatingsReached";var AXX="MaxNumCalfDeregistrationsReached";var AXY=
"MissingTransponder";var Ayo="EarTagNumberTooShort";var As7="NoValidCountryCode";
var UW="WarningOutdatedAnimalWeight";var As8="WarningOutdatedAnimalWeights";var AXZ=
"WarningWeightEvaluationSingular";var AX0="WarningWeightEvaluationPlural";var AX1=
"ScanError";var AH7="ScanNotFound";var AX2="ScannedAnimalNotFound";var AH8="ScannedTransponderNotFound";
var AX3="AnimalNotFound";var AX4="SuccessUnregister";var AX5="SuccessUnregisterPerished";
var As9="SuccessCreationNewAnimal";var AX6="SuccessCreationNewAnimals";var AX7="AnimalCreationInProgress";
var AH9="EvaluationInProgress";var AX8="DataSyncInProgress";var AX9="AddedToAlarm";
var AX_="RemovedFromAlarm";var AX$="AddedToWatch";var AcQ="RemovedFromWatch";var
AYa="AddedToDryOff";var AYb="RemovedFromDryOff";var AYc="AnimalIdAlreadyExists";
var AYd="AnimalIdAlreadyExistsContinuable";var AH_="MissingAnimalId";var AYe="MissingAnimalIdMother";
var AYf="MissingEartagNumber";var AYg="MissingTransponderId";var AYh="TransponderAlreadyRegistered";
var AYi="TransponderAlreadyRegisteredContinuable";var AYj="TransponderAlreadyRegisteredCapturable";
var AH$="HelpAnimalInfoRating";var AYk="WarningReassignTransponder";var AYl="CannotReassignNaisId";
var AYm="WarningResetToDefaultValue";var AIa="WarningResetThresholds";var AIb="WarningResetTempThresholds";
var AYn="UpdateFirmware";var AYo="UpdateFirmwareBatteryLow";var AYp="ConfirmFirmwareUpdated";
var AYq="ConfirmBootloaderUpdated";var Rl="QuestionAddAnotherCalfMultiples";var As_=
"RemovedAllBirthNoticesPending";var AIc="RemovedAllPurchasedNoticePending";var AId=
"RemovedFromBirthNoticePending";var Aos="RemovedFromPurchasedNoticePending";var Aot=
"SuccessClearAnimalLoss";var Ayp="RemovedAnimalBirth";var AYr="RemovedAnimalPurchased";
var AIe="WarningNoActionsForAnimalLoss";var AYs="SuccessLinkTransponder";var AYt=
"SuccessChangeTransponder";var AYu="SuccessUnlinkTransponder";var AYv="SuccessLinkNaisId";
var AYw="WarningDataExportHitBirthFailed";var AYx="SuccessDataExportHitBirth";var
AYy="SuccessDataExportHitBirthDownload";var AYz="WarningDataExportHitPurchasedFailed";
var AYA="SuccessDataExportHitPurchased";var AYB="SuccessDataExportHitPurchasedDownload";
var AYC="WarningDataExportAnimalsFailed";var AYD="SuccessDataExportAnimalsRatings";
var AYE="SuccessDataExportAnimalsDownload";var AYF="WarningNoPremisesID";var AYG=
"WarningNoFlashDrivePresent";var AYH="WarningNoBackupPathPresent";var AYI="WarningNoBackupFilePresent";
var Aou="DemoFunctionNotAvailable";var AIf="WarningImpreciseTimeSetting";var AYJ=
"ConfirmationRestoreBackup";var AIg="ConfirmationMassDeregistration";var AIh="SuccessMassDeregistration";
var Aah="WarningParsedDateInFutureInvalid";var AIi="WarningParsingDateFailed";var
AYK="WarningParsingNaisIdFailed";var AIj="WarningParsingShortNaisIdWithoutPremisesId";
var AYL="AnimalId";var Ayq="FarmId";var AYM="GroupId";var AYN="PersonId";var Ayr=
"Unhandled transponder type: ";var AYO="FDX";var AYP="HDX";var AYQ="HDX (Urban)";
var AIk="Unhandled transponder protocol: ";var Aov="Illegal RatingMode: ";var AIl=
"Unhandled mass unit: ";var AYR="Max array size is 10";var Ays="Index out of bounds";
var AIm="ERROR: Received more integers than expected!";var AhY="Unhandled double scan action :";
var AYS="Illegal WeightRecordingMode: ";var Aow="Illegal WeightRecordingScope: ";
var AYT="AnimalData";var AIn="Rating";var AIo="Temperature";var AYU="Weight";var
AYV="Alarm infos";var AIp="Control infos";var AYW="Watch infos";var AYX="Fresh cow infos";
var AYY="No transponder infos";var AYZ="Dry cow info";var AY0="No nais id infos";
var AY1="Birth registrations infos";var AY2="Purchased registrations infos";var AY3=
"Young no transponder infos";var AY4="Unhandled animal list content:";var AY5="Illegal AutoRegistrationMode: ";
var AY6="Illegal FactoryResetScope: ";var Aox="??";var AY7="Illegal EaseOfDelivery: ";
var AY8="Illegal Whereabouts: ";var AIq="Illegal breed: ";var Aai="Unisex";var AY9=
"Illegal animalIdGenerationMethod: ";var Ayt="Ascending";var AY_="Descending";var
AY$="Illegal directionOfCountingName: ";var AIr="Unhandled direction of counting: ";
var As$="Unhandled German state: ";var AZa="SH";var AZb="HH";var Ata="NI";var Atb=
"HB";var Atc="NW";var Atd="HE";var Ayu="RP";var Aoy="BW";var AZc="BY";var AZd="SL";
var AZe="BB";var AZf="MV";var AZg="SN";var AZh="ST";var AZi="TH";var AZj="One Range Male Female";
var AZk="Two Ranges Male Female";var AIs="Illegal EartagAssignmentMode: ";var AZl=
"Unhandled code set value ";var AIt="Implement in derived class";var AZm="Illegal HIT-Code: ";
var AZn="Illegal ReasonOfLeaving: ";var AIu="Illegal code: ";var Ayv="Undefined";
var AZo="Illegal DeviceComponent: ";var Ayw="Unhandled Device::MotherSelectionFilterMode: ";
var Ayx="Illegal Device::TimespanDays: ";var AZp="Not connected";var AZq="Host";
var AZr="Device";var AIv="Device CDC";var AZs="Host MSC";var AZt="Host HID";var AZu=
"Host CDC";var AZv="Illegal animalIdAutoGenerationMethod: ";var AZw="Unhandled month: ";
var AZx="##Strings::DerivationNaisId";var AZy="Illegal transponderAssignmentIdChangeMethod: ";
var AZz="Unhandled animal table field: ";var AIw="Unhandled data export destination: ";
var AZA="Unhandled list view scope: ";var AZB="1 ";var AZC="100 ";var AZD="10 ";
var AZE="Unhandled weight value precision: ";
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
AH;if(!this.B9)this.B9=AH;},AOG:function(){return this.B9;},AOL:function(BbC){if(
!!BbC)return BbC.Ah;return null;},DQ:function(AI4,Eb){var Av=this.B9;while(!!Av){
if(Av.EJ===AI4){if(Eb===1)return Av;else if(Av.Operator===Eb)return Av;}Av=Av.Ah;
}return null;},N3:function(AH){var Av=this.B9;while(!!Av){if(Av===AH){if(!!Av.AJ
)Av.AJ.Ah=Av.Ah;if(!!Av.Ah)Av.Ah.AJ=Av.AJ;if(this.B9===Av)this.B9=Av.Ah;if(this.
B_===Av)this.B_=Av.AJ;Av.Ah=null;Av.AJ=null;return;}Av=Av.Ah;}},Fg:function(){var
Be=A._NewObject(C.Filter,0);var Av=this.B9;while(!!Av){Be.CW(Av.Abj());Av=Av.Ah;
}return Be;},_Init:function(aArg){this.__proto__=C.Filter;A.h7++;},_Done:function(
){this.__proto__=null;A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((
B=this.B9)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.B_)&&(B._cycle!=D))B._Mark(
B._cycle=D);if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:
null,_className:"Device::Filter"};C.FilterCriterion={Ah:null,AJ:null,EJ:-1,Operator:
1,YH:false,Abj:function(){return null;},Fg:function(AH){if(!AH)return;this.EJ=AH.
EJ;this.Operator=AH.Operator;this.YH=AH.YH;},_Init:function(aArg){this.__proto__=
C.FilterCriterion;A.h7++;},_Done:function(){this.__proto__=null;A.h7--;},_ReInit:
function(){},_Mark:function(D){var B;if((B=this.Ah)&&(B._cycle!=D))B._Mark(B._cycle=
D);if((B=this.AJ)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.I)&&(B._cycle!=D
))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:"Device::FilterCriterion"
};C.Int32FilterCriterion={A4:0,Abj:function(){var Av=A._NewObject(C.Int32FilterCriterion
,0);Av.Fg(this);return Av;},Fg:function(AH){C.FilterCriterion.Fg.call(this,AH);var
Av=(C.Int32FilterCriterion.isPrototypeOf(AH)?AH:null);if(!!Av)this.A4=Av.A4;},Initialize:
function(A3,Eb,A7,P_){this.EJ=A3;this.Operator=Eb;this.A4=A7;this.YH=P_;return this;
},_Init:function(aArg){C.FilterCriterion._Init.call(this,aArg);this.__proto__=C.
Int32FilterCriterion;},_className:"Device::Int32FilterCriterion"};C.DeviceClass={
AEe:0,AEd:0,Av1:0,Ut:0,OR:null,Su:null,QV:null,ST:null,RU:null,An:null,Bt:null,Agq:
null,AnP:null,Pl:null,Auz:A.jV,AutoActions:A.jV,ABE:A.jV,AGS:A.jV,AGT:A.jV,AhD:A.
jV,AHc:A.jV,AHd:A.jV,ABF:A.jV,AHb:A.jV,AHg:A.jV,ABz:A.jV,ABA:A.jV,ARW:A.jV,AR1:A.
jV,AVM:A.jV,Aa4:100,Kv:0,AMX:75,Z0:3600,ATY:0,A1:5,AF:0,KX:50000,Ph:0,AF8:0,AdQ:
0,Aq3:0,Aq2:0,ARJ:1,ARI:1,AjU:0,ARK:1,AxL:0,Afn:0,AqQ:10,AUJ:5,AD9:60,AvV:0,An8:
0,OK:1,WhereAbouts:0,VM:0,Ak3:0,AxD:3,ACB:0,Amt:0,Ags:1,AhN:0,AbV:0,Aqq:0,ANV:11
,Breed:0,EartagNrAssignmentMode:0,Au0:0,ACu:0,ACt:0,Ih:5,ABy:2,Aqs:0,AOy:2,AVx:0
,D9:0,AL7:0,JH:0,Gender:2,WeightRecordingScope:1,WeightRecordingMode:1,AnimalType:
0,MassUnit:0,AutoRegistrationMode:0,RatingMode:0,SyncState:0,OverlayMenu:0,TemperatureUnit:
0,Language:0,MeasureState:0,ScanState:0,KH:3,AeL:true,ARv:false,Aqe:true,AqR:false
,AmP:true,HB:false,AVb:false,AmQ:false,AVv:false,AsM:false,AEc:false,AmC:false,UpdateActiveScreen:
function(AK){if(this.KH===AK)return;this.KH=AK;A.abo([this,this.AEp,this.BaM],0);
},Zp:function(E){if(this.K&&this.K.Zp)return this.K.Zp.apply(this,arguments);else
return C.DeviceClass.Bui.apply(this,arguments);},Bui:function(E){},BaM:function(
Aq){this.Zp(Aq);},UpdateBatteryChargeState:function(AK){if(this.Aa4===AK)return;
this.Aa4=AK;A.abo([this,this.Av6,this.AyD],0);},Awr:function(E){if(this.K&&this.
K.Awr)return this.K.Awr.apply(this,arguments);else return C.DeviceClass.Buu.apply(
this,arguments);},Buu:function(E){A.ab5("%s",BF);},AyD:function(Aq){this.Awr(Aq);
},UpdateChargeActive:function(AK){if(this.AmC===AK)return;this.AmC=AK;A.abo([this
,this.Av9,this.AyE],0);},AEW:function(E){if(this.K&&this.K.AEW)return this.K.AEW.
apply(this,arguments);else return C.DeviceClass.BuA.apply(this,arguments);},BuA:
function(E){A.ab5("%s",E4);},AyE:function(Aq){this.AEW(Aq);},UpdateScanState:function(
AK){var B;if(this.ScanState===AK)return;this.ScanState=AK;A.abo([this,this.ASz,this.
AZ$],0);A._GetAutoObject(C.Helper).BAE(this);},Ar1:function(E){if(this.K&&this.K.
Ar1)return this.K.Ar1.apply(this,arguments);else return C.DeviceClass.Bvf.apply(
this,arguments);},Bvf:function(E){A.ab5("%s",Hm);},AZ$:function(Aq){this.Ar1(Aq);
},UpdateMeasureState:function(AK){if(this.MeasureState===AK)return;this.MeasureState=
AK;A.abo([this,this.AEx,this.AIN],0);},AwQ:function(E){if(this.K&&this.K.AwQ)return this.
K.AwQ.apply(this,arguments);else return C.DeviceClass.BuZ.apply(this,arguments);
},BuZ:function(E){A.ab5("%s",IQ);},AIN:function(Aq){this.AwQ(Aq);},UpdateTempValue:
function(AK){if(this.Kv===AK)return;this.Kv=AK;A.abo([this,this.AEB,this.AIP],0);
},Aw4:function(E){if(this.K&&this.K.Aw4)return this.K.Aw4.apply(this,arguments);
else return C.DeviceClass.Bvl.apply(this,arguments);},Bvl:function(E){A.ab5("%s"
,Iq);},AIP:function(Aq){this.Aw4(Aq);},AnD:function(E){if(this.K&&this.K.AnD)return this.
K.AnD.apply(this,arguments);else return C.DeviceClass.BuT.apply(this,arguments);
},BuT:function(E){},Ba2:function(Aq){this.AnD(Aq);},Aw5:function(E){if(this.K&&this.
K.Aw5)return this.K.Aw5.apply(this,arguments);else return C.DeviceClass.Bvm.apply(
this,arguments);},Bvm:function(E){},Ath:function(Aq){this.Aw5(Aq);},AEU:function(
E){if(this.K&&this.K.AEU)return this.K.AEU.apply(this,arguments);else return C.DeviceClass.
Buz.apply(this,arguments);},Buz:function(E){},BaU:function(Aq){this.AEU(Aq);},AFr:
function(E){if(this.K&&this.K.AFr)return this.K.AFr.apply(this,arguments);else return C.
DeviceClass.Bu1.apply(this,arguments);},Bu1:function(E){},AZ5:function(Aq){this.
AFr(Aq);},UpdateMonitoring:function(AK){if(this.AEc===AK)return;this.AEc=AK;A.abo([
this,this.ASq,this.AZ5],0);},UpdateDataTable:function(BbD){var B;switch(BbD){case
0:A.pe([B=this.An,B.Akn],this);break;case 1:A.pe([B=this.Bt,B.Akn],this);break;case
3:A.pe([B=this.Agq,B.Akn],this);break;case 4:A.pe([B=this.Pl,B.Akn],this);break;
case 2:A.ab5("%s",O2);break;default:A.ab5("%s%e",P1,BbD);}},AxC:function(){if(this.
K&&this.K.AxC)return this.K.AxC.apply(this,arguments);else return C.DeviceClass.
BvV.apply(this,arguments);},BvV:function(){},AhH:function(){if(this.K&&this.K.AhH
)return this.K.AhH.apply(this,arguments);else return C.DeviceClass.BvY.apply(this
,arguments);},BvY:function(){},AhE:function(){if(this.K&&this.K.AhE)return this.
K.AhE.apply(this,arguments);else return C.DeviceClass.BvW.apply(this,arguments);
},BvW:function(){},An1:function(){if(this.K&&this.K.An1)return this.K.An1.apply(
this,arguments);else return C.DeviceClass.BvZ.apply(this,arguments);},BvZ:function(
){},UpdateLanguage:function(AK){if(this.Language===AK)return;this.Language=AK;switch(
AK){case 14:A._SetLanguage(1);break;case 13:A._SetLanguage(2);break;case 6:A._SetLanguage(
3);break;case 11:A._SetLanguage(4);break;case 10:A._SetLanguage(5);break;case 12:
A._SetLanguage(6);break;case 5:A._SetLanguage(7);break;case 3:A._SetLanguage(8);
break;case 1:A._SetLanguage(9);break;case 8:A._SetLanguage(10);break;case 4:A._SetLanguage(
11);break;case 15:A._SetLanguage(13);break;case 9:A._SetLanguage(15);break;case 2:
A._SetLanguage(16);break;case 7:A._SetLanguage(17);break;case 16:A._SetLanguage(
18);break;default:A._SetLanguage(0);}A.abo([this,this.A8C,this.Ba2],0);},UpdateTemperatureUnit:
function(AK){if(this.TemperatureUnit===AK)return;this.TemperatureUnit=AK;A.abo([
this,this.Arw,this.Ath],0);},UpdateBrightness:function(AK){if(this.AMX===AK)return;
this.AMX=AK;A.abo([this,this.A8n,this.BaU],0);},SetSystemTime:function(Ah7){if(this.
K&&this.K.SetSystemTime)return this.K.SetSystemTime.apply(this,arguments);else return C.
DeviceClass.BvT.apply(this,arguments);},BvT:function(Ah7){},Axw:function(){if(this.
K&&this.K.Axw)return this.K.Axw.apply(this,arguments);else return C.DeviceClass.
BaA.apply(this,arguments);},BaA:function(){},AGk:function(){if(this.K&&this.K.AGk
)return this.K.AGk.apply(this,arguments);else return C.DeviceClass.Bay.apply(this
,arguments);},Bay:function(){},Bn7:function(){},UpdateOverlayMenu:function(AK){if(
this.OverlayMenu===AK)return;this.OverlayMenu=AK;A.abo([this,this.Awj,this.AyL],
0);},Ds:function(E){if(this.K&&this.K.Ds)return this.K.Ds.apply(this,arguments);
else return C.DeviceClass.Bva.apply(this,arguments);},Bva:function(E){},AyL:function(
Aq){this.Ds(Aq);},Aw$:function(E){if(this.K&&this.K.Aw$)return this.K.Aw$.apply(
this,arguments);else return C.DeviceClass.Bvw.apply(this,arguments);},Bvw:function(
E){},Bbb:function(Aq){this.Aw$(Aq);},UpdateUnderTemp:function(AK){if(this.Z0===AK
)return;this.Z0=AK;A.abo([this,this.A87,this.Bbb],0);},UpdateSyncState:function(
AK){if(this.SyncState===AK)return;this.SyncState=AK;A.abo([this,this.ASB,this.A0b
],0);},Ab_:function(E){if(this.K&&this.K.Ab_)return this.K.Ab_.apply(this,arguments
);else return C.DeviceClass.Bvk.apply(this,arguments);},Bvk:function(E){A.ab5("%s"
,P2);},A0b:function(Aq){this.Ab_(Aq);},ACZ:function(){if(this.K&&this.K.ACZ)return this.
K.ACZ.apply(this,arguments);else return C.DeviceClass.Bua.apply(this,arguments);
},Bua:function(){return A.jV;},UpdatePopup:function(J2,A0V,A0R,A0Y){this.A9(J2,A0V
,A0R,A0Y,[this,this.BAm]);},PopupStateChanged:function(J2,Ae){if(this.K&&this.K.
PopupStateChanged)return this.K.PopupStateChanged.apply(this,arguments);else return C.
DeviceClass.BvJ.apply(this,arguments);},BvJ:function(J2,Ae){},AFT:function(E){if(
this.K&&this.K.AFT)return this.K.AFT.apply(this,arguments);else return C.DeviceClass.
Bvy.apply(this,arguments);},Bvy:function(E){},Bbc:function(Aq){this.AFT(Aq);},UpdateVibrationOnKeypressEnabled:
function(AK){if(this.AsM===AK)return;this.AsM=AK;A.abo([this,this.A88,this.Bbc],
0);},Ae8:function(E){if(this.K&&this.K.Ae8)return this.K.Ae8.apply(this,arguments
);else return C.DeviceClass.Bvx.apply(this,arguments);},Bvx:function(E){},AIQ:function(
Aq){this.Ae8(Aq);},UpdateVibrationOn:function(Bb5){if(this.AVv===Bb5)return;this.
AVv=Bb5;A.abo([this,this.AEC,this.AIQ],0);},A9:function(J2,A0V,A0R,A0Y,Bxo){var Agh=
A._NewObject(C.PopupContext,0);Agh.Id=J2;Agh.Show=A0V;Agh.AkI=A0R;Agh.Ak2=A0Y;Agh.
AF1=Bxo;this.AnP.Trigger(Agh,false);},BAm:function(G){var At=(C.PopupContext.isPrototypeOf(
G)?G:null);if(!!At)this.PopupStateChanged(At.Id,At.PopupState);},Aw0:function(E){
if(this.K&&this.K.Aw0)return this.K.Aw0.apply(this,arguments);else return C.DeviceClass.
Bve.apply(this,arguments);},Bve:function(E){},AZ_:function(Aq){this.Aw0(Aq);},UpdateRatingMode:
function(AK){if(this.RatingMode===AK)return;this.RatingMode=AK;A.abo([this,this.
ASy,this.AZ_],0);},AeZ:function(E){if(this.K&&this.K.AeZ)return this.K.AeZ.apply(
this,arguments);else return C.DeviceClass.BuL.apply(this,arguments);},BuL:function(
E){},Atg:function(Aq){this.AeZ(Aq);},UpdateFlashLightOn:function(BbM){if(this.AmQ===
BbM)return;this.AmQ=BbM;A.abo([this,this.Art,this.Atg],0);},Un:function(E){if(this.
K&&this.K.Un)return this.K.Un.apply(this,arguments);else return C.DeviceClass.Bvp.
apply(this,arguments);},Bvp:function(E){},A0c:function(Aq){this.Un(Aq);},UpdateTopLightOn:
function(Bb1){if(this.AVb===Bb1)return;this.AVb=Bb1;A.abo([this,this.ASD,this.A0c
],0);},WA:function(E){if(this.K&&this.K.WA)return this.K.WA.apply(this,arguments
);else return C.DeviceClass.Bvd.apply(this,arguments);},Bvd:function(E){},Bwa:function(
Aq){this.WA(Aq);},UpdateRGBTopLight:function(BbW){if(this.ATY===BbW)return;this.
ATY=BbW;A.abo([this,this.BkT,this.Bwa],0);},Awq:function(E){if(this.K&&this.K.Awq
)return this.K.Awq.apply(this,arguments);else return C.DeviceClass.But.apply(this
,arguments);},But:function(E){},Bv5:function(Aq){this.Awq(Aq);},UpdateAutoRegistrationMode:
function(Bbz){if(this.AutoRegistrationMode===Bbz)return;this.AutoRegistrationMode=
Bbz;A.abo([this,this.Bkh,this.Bv5],0);},Ar2:function(E){if(this.K&&this.K.Ar2)return this.
K.Ar2.apply(this,arguments);else return C.DeviceClass.Bvg.apply(this,arguments);
},Bvg:function(E){A.ab5("%s",CQ);},A0a:function(Aq){this.Ar2(Aq);},UpdateScanTransponder:
function(J2,Bb3,Bb2){if(((this.OR.Id===J2)&&(this.OR.TransponderType===Bb3))&&(this.
OR.TransponderProtocol===Bb2))return;this.OR.OnSetId(J2);this.OR.ATB(Bb3);this.OR.
ATA(Bb2);A.abo([this,this.ASA,this.A0a],0);},OM:function(E){if(this.K&&this.K.OM
)return this.K.OM.apply(this,arguments);else return C.DeviceClass.BuD.apply(this
,arguments);},BuD:function(E){},UY:function(Aq){this.OM(Aq);},UpdateDigitsID:function(
BbH){if(this.A1===BbH)return;this.A1=BbH;A.abo([this,this.Uf,this.UY],0);},PN:function(
E){if(this.K&&this.K.PN)return this.K.PN.apply(this,arguments);else return C.DeviceClass.
Bu$.apply(this,arguments);},Bu$:function(E){},UZ:function(Aq){this.PN(Aq);},UpdateOffsetID:
function(BbT){if(this.AF===BbT)return;this.AF=BbT;A.abo([this,this.Ug,this.UZ],0
);},AFX:function(E){if(this.K&&this.K.AFX)return this.K.AFX.apply(this,arguments
);else return C.DeviceClass.BvF.apply(this,arguments);},BvF:function(E){A.ab5("%s"
,E$);},AIR:function(Aq){this.AFX(Aq);},UpdateWeightValue:function(AK){if(this.KX===
AK)return;this.KX=AK;A.abo([this,this.AED,this.AIR],0);},AwN:function(E){if(this.
K&&this.K.AwN)return this.K.AwN.apply(this,arguments);else return C.DeviceClass.
BuW.apply(this,arguments);},BuW:function(E){},AZ4:function(Aq){this.AwN(Aq);},UpdateMassUnit:
function(AK){if(this.MassUnit===AK)return;this.MassUnit=AK;A.abo([this,this.ASp,
this.AZ4],0);},ArA:function(E){if(this.K&&this.K.ArA)return this.K.ArA.apply(this
,arguments);else return C.DeviceClass.Bau.apply(this,arguments);},Bau:function(E
){},BaJ:function(Aq){this.ArA(Aq);},ArB:function(E){if(this.K&&this.K.ArB)return this.
K.ArB.apply(this,arguments);else return C.DeviceClass.Bav.apply(this,arguments);
},Bav:function(E){},AZY:function(Aq){this.ArB(Aq);},UpdateActiveActions:function(
AK){if(this.Ph===AK)return;this.Ph=AK;A.abo([this,this.A79,this.BaJ],0);},UpdateActiveActionsOrder:
function(AK){if(this.Auz===AK)return;this.Auz=AK;A.abo([this,this.ASb,this.AZY],
0);},Aku:function(E){if(this.K&&this.K.Aku)return this.K.Aku.apply(this,arguments
);else return C.DeviceClass.Baw.apply(this,arguments);},Baw:function(E){},BaS:function(
Aq){this.Aku(Aq);},UpdateAutoActions:function(AK){if(this.AutoActions===AK)return;
this.AutoActions=AK;A.abo([this,this.A8j,this.BaS],0);},AGL:function(){if(this.K&&
this.K.AGL)return this.K.AGL.apply(this,arguments);else return C.DeviceClass.BvX.
apply(this,arguments);},BvX:function(){},AsD:function(){if(this.K&&this.K.AsD)return this.
K.AsD.apply(this,arguments);else return C.DeviceClass.Bv1.apply(this,arguments);
},Bv1:function(){},EB:function(E){if(this.K&&this.K.EB)return this.K.EB.apply(this
,arguments);else return C.DeviceClass.Buq.apply(this,arguments);},Buq:function(E
){},Bv4:function(Aq){this.EB(Aq);},UpdateAnimalType:function(Em){if(this.AnimalType===
Em)return;this.AnimalType=Em;A.abo([this,this.PM,this.Bv4],0);},Axa:function(E){
if(this.K&&this.K.Axa)return this.K.Axa.apply(this,arguments);else return C.DeviceClass.
BvD.apply(this,arguments);},BvD:function(E){},Bbh:function(Aq){this.Axa(Aq);},UpdateWeightRecordingMode:
function(Bb7){if(this.WeightRecordingMode===Bb7)return;this.WeightRecordingMode=
Bb7;A.abo([this,this.A9e,this.Bbh],0);},AFw:function(E){if(this.K&&this.K.AFw)return this.
K.AFw.apply(this,arguments);else return C.DeviceClass.Bvb.apply(this,arguments);
},Bvb:function(E){A.ab5("%s",Lu);},AZ8:function(Aq){this.AFw(Aq);},UpdatePredictedTempValue:
function(AK){if(this.AF8===AK)return;this.AF8=AK;A.abo([this,this.ASv,this.AZ8],
0);},SJ:function(L6){if(this.K&&this.K.SJ)return this.K.SJ.apply(this,arguments);
else return C.DeviceClass.BvS.apply(this,arguments);},BvS:function(L6){},AE2:function(
E){if(this.K&&this.K.AE2)return this.K.AE2.apply(this,arguments);else return C.DeviceClass.
BuC.apply(this,arguments);},BuC:function(E){},AIK:function(Aq){this.AE2(Aq);},UpdateDemoMode:
function(AK){if(this.HB===AK)return;this.HB=AK;A.abo([this,this.AEu,this.AIK],0);
},AEJ:function(E){if(this.K&&this.K.AEJ)return this.K.AEJ.apply(this,arguments);
else return C.DeviceClass.Buj.apply(this,arguments);},Buj:function(E){},BaN:function(
Aq){this.AEJ(Aq);},UpdateAgeRegistration:function(BbS){if(this.AdQ===BbS)return;
this.AdQ=BbS;A.abo([this,this.A8c,this.BaN],0);},Axb:function(E){if(this.K&&this.
K.Axb)return this.K.Axb.apply(this,arguments);else return C.DeviceClass.BvE.apply(
this,arguments);},BvE:function(E){},Bbi:function(Aq){this.Axb(Aq);},UpdateWeightRecordingScope:
function(BbX){if(this.WeightRecordingScope===BbX)return;this.WeightRecordingScope=
BbX;A.abo([this,this.A9f,this.Bbi],0);},JQ:function(E){if(this.K&&this.K.JQ)return this.
K.JQ.apply(this,arguments);else return C.DeviceClass.BuP.apply(this,arguments);}
,BuP:function(E){},AZ3:function(Aq){this.JQ(Aq);},UpdateGender:function(L3){if(this.
Gender===L3)return;this.Gender=L3;A.abo([this,this.Wt,this.AZ3],0);},ArR:function(
E){if(this.K&&this.K.ArR)return this.K.ArR.apply(this,arguments);else return C.DeviceClass.
BuR.apply(this,arguments);},BuR:function(E){},AyH:function(Aq){this.ArR(Aq);},UpdateIDLastUsedMale:
function(Rm){if(this.Aq3===Rm)return;this.Aq3=Rm;A.abo([this,this.Awc,this.AyH],
0);},ArQ:function(E){if(this.K&&this.K.ArQ)return this.K.ArQ.apply(this,arguments
);else return C.DeviceClass.BuQ.apply(this,arguments);},BuQ:function(E){},AyG:function(
Aq){this.ArQ(Aq);},UpdateIDLastUsedFemale:function(Rm){if(this.Aq2===Rm)return;this.
Aq2=Rm;A.abo([this,this.Awb,this.AyG],0);},Ab2:function(E){if(this.K&&this.K.Ab2
)return this.K.Ab2.apply(this,arguments);else return C.DeviceClass.Buo.apply(this
,arguments);},Buo:function(E){},AII:function(Aq){this.Ab2(Aq);},UpdateAnimalListContent:
function(AK){if(this.JH===AK)return;this.JH=AK;A.abo([this,this.AEr,this.AII],0);
},AEL:function(E){if(this.K&&this.K.AEL)return this.K.AEL.apply(this,arguments);
else return C.DeviceClass.Buk.apply(this,arguments);},Buk:function(E){},BaO:function(
Aq){this.AEL(Aq);},UpdateAlarmListAction:function(AK){if(this.AL7===AK)return;this.
AL7=AK;A.abo([this,this.A8e,this.BaO],0);},AE5:function(E){if(this.K&&this.K.AE5
)return this.K.AE5.apply(this,arguments);else return C.DeviceClass.BuK.apply(this
,arguments);},BuK:function(E){},BaX:function(Aq){this.AE5(Aq);},UpdateFlashLightInMeasureState:
function(BbN){if(this.AmP===BbN)return;this.AmP=BbN;A.abo([this,this.A8q,this.BaX
],0);},AeU:function(E){if(this.K&&this.K.AeU)return this.K.AeU.apply(this,arguments
);else return C.DeviceClass.Bun.apply(this,arguments);},Bun:function(E){},AIH:function(
Aq){this.AeU(Aq);},UpdateAnimalInfoContent:function(AK){if(this.D9===AK)return;this.
D9=AK;A.abo([this,this.AEq,this.AIH],0);},AFW:function(E){if(this.K&&this.K.AFW)
return this.K.AFW.apply(this,arguments);else return C.DeviceClass.Bvz.apply(this
,arguments);},Bvz:function(E){},Bbd:function(Aq){this.AFW(Aq);},UpdateWatchListAction:
function(AK){if(this.AVx===AK)return;this.AVx=AK;A.abo([this,this.A9a,this.Bbd],
0);},AE7:function(E){if(this.K&&this.K.AE7)return this.K.AE7.apply(this,arguments
);else return C.DeviceClass.BuM.apply(this,arguments);},BuM:function(E){},BaZ:function(
Aq){this.AE7(Aq);},UpdateFreshCowListAction:function(AK){if(this.AOy===AK)return;
this.AOy=AK;A.abo([this,this.A8s,this.BaZ],0);},ResetActiveActions:function(G){if(
this.K&&this.K.ResetActiveActions)return this.K.ResetActiveActions.apply(this,arguments
);else return C.DeviceClass.BvK.apply(this,arguments);},BvK:function(G){},BF1:function(
s){this.ResetActiveActions(s);},ResetAutoActions:function(G){if(this.K&&this.K.ResetAutoActions
)return this.K.ResetAutoActions.apply(this,arguments);else return C.DeviceClass.
BvM.apply(this,arguments);},BvM:function(G){},BF3:function(s){this.ResetAutoActions(
s);},Awo:function(E){if(this.K&&this.K.Awo)return this.K.Awo.apply(this,arguments
);else return C.DeviceClass.Bur.apply(this,arguments);},Bur:function(E){},BaQ:function(
Aq){this.Awo(Aq);},Ar4:function(E){if(this.K&&this.K.Ar4)return this.K.Ar4.apply(
this,arguments);else return C.DeviceClass.Bvn.apply(this,arguments);},Bvn:function(
E){},Ba_:function(Aq){this.Ar4(Aq);},Ar5:function(E){if(this.K&&this.K.Ar5)return this.
K.Ar5.apply(this,arguments);else return C.DeviceClass.Bvo.apply(this,arguments);
},Bvo:function(E){},Ba$:function(Aq){this.Ar5(Aq);},Aso:function(G){if(this.K&&this.
K.Aso)return this.K.Aso.apply(this,arguments);else return C.DeviceClass.BvP.apply(
this,arguments);},BvP:function(G){},BF6:function(s){this.Aso(s);},UpdateTemperaturesLowString:
function(AK){if(this.AGT===AK)return;this.AGT=AK;A.abo([this,this.A83,this.Ba$],
0);},UpdateTemperaturesHighString:function(AK){if(this.AGS===AK)return;this.AGS=
AK;A.abo([this,this.A82,this.Ba_],0);},UpdateAnimalTypesString:function(AK){if(this.
ABE===AK)return;this.ABE=AK;A.abo([this,this.A8h,this.BaQ],0);},AwH:function(E){
if(this.K&&this.K.AwH)return this.K.AwH.apply(this,arguments);else return C.DeviceClass.
BuO.apply(this,arguments);},BuO:function(E){},Ba1:function(Aq){this.AwH(Aq);},UpdateFreshCowsHideMeasured:
function(AK){if(this.AqR===AK)return;this.AqR=AK;A.abo([this,this.A8u,this.Ba1],
0);},ArX:function(E){if(this.K&&this.K.ArX)return this.K.ArX.apply(this,arguments
);else return C.DeviceClass.Bu7.apply(this,arguments);},Bu7:function(E){},Ba6:function(
Aq){this.ArX(Aq);},UpdateNaisIdLastUsedMale:function(Xk){if(this.AEe===Xk)return;
this.AEe=Xk;A.abo([this,this.A8K,this.Ba6],0);},ArW:function(E){if(this.K&&this.
K.ArW)return this.K.ArW.apply(this,arguments);else return C.DeviceClass.Bu6.apply(
this,arguments);},Bu6:function(E){},Ba5:function(Aq){this.ArW(Aq);},UpdateNaisIdLastUsedFemale:
function(Xk){if(this.AEd===Xk)return;this.AEd=Xk;A.abo([this,this.A8J,this.Ba5],
0);},AwU:function(E){if(this.K&&this.K.AwU)return this.K.AwU.apply(this,arguments
);else return C.DeviceClass.Bu4.apply(this,arguments);},Bu4:function(E){},AyJ:function(
Aq){this.AwU(Aq);},UpdateNaisIdIncrementMale:function(Alp){if(this.ARJ===Alp)return;
this.ARJ=Alp;A.abo([this,this.Awg,this.AyJ],0);},AwT:function(E){if(this.K&&this.
K.AwT)return this.K.AwT.apply(this,arguments);else return C.DeviceClass.Bu3.apply(
this,arguments);},Bu3:function(E){},AyI:function(Aq){this.AwT(Aq);},UpdateNaisIdIncrementFemale:
function(Alp){if(this.ARI===Alp)return;this.ARI=Alp;A.abo([this,this.Awf,this.AyI
],0);},UpdateFirmware:function(){if(this.K&&this.K.UpdateFirmware)return this.K.
UpdateFirmware.apply(this,arguments);else return C.DeviceClass.BaB.apply(this,arguments
);},BaB:function(){},Any:function(E){if(this.K&&this.K.Any)return this.K.Any.apply(
this,arguments);else return C.DeviceClass.Buw.apply(this,arguments);},Buw:function(
E){},BaT:function(Aq){this.Any(Aq);},UpdateBootloaderMessage:function(AK){if(this.
Aqs===AK)return;this.Aqs=AK;A.abo([this,this.A8m,this.BaT],0);},AEG:function(E){
if(this.K&&this.K.AEG)return this.K.AEG.apply(this,arguments);else return C.DeviceClass.
Bue.apply(this,arguments);},Bue:function(E){},BaH:function(Aq){this.AEG(Aq);},UpdateActionListAction:
function(AK){if(this.ABy===AK)return;this.ABy=AK;A.abo([this,this.A77,this.BaH],
0);},Awm:function(E){if(this.K&&this.K.Awm)return this.K.Awm.apply(this,arguments
);else return C.DeviceClass.Buf.apply(this,arguments);},Buf:function(E){},BaI:function(
Aq){this.Awm(Aq);},UpdateActionListHideMeasured:function(AK){if(this.Aqe===AK)return;
this.Aqe=AK;A.abo([this,this.A78,this.BaI],0);},Uh:function(E){if(this.K&&this.K.
Uh)return this.K.Uh.apply(this,arguments);else return C.DeviceClass.Bum.apply(this
,arguments);},Bum:function(E){},AoA:function(Aq){this.Uh(Aq);},UpdateAnimalIdGenerationMethod:
function(Bca){if(this.Ih===Bca)return;this.Ih=Bca;A.abo([this,this.Anq,this.AoA]
,0);},Awz:function(E){if(this.K&&this.K.Awz)return this.K.Awz.apply(this,arguments
);else return C.DeviceClass.BuE.apply(this,arguments);},BuE:function(E){},AZ1:function(
Aq){this.Awz(Aq);},UpdateDirectionOfCountingFemale:function(Alj){if(this.ACt===Alj
)return;this.ACt=Alj;A.abo([this,this.ASi,this.AZ1],0);},AwA:function(E){if(this.
K&&this.K.AwA)return this.K.AwA.apply(this,arguments);else return C.DeviceClass.
BuF.apply(this,arguments);},BuF:function(E){},AZ2:function(Aq){this.AwA(Aq);},UpdateDirectionOfCountingMale:
function(Alj){if(this.ACu===Alj)return;this.ACu=Alj;A.abo([this,this.ASj,this.AZ2
],0);},AwB:function(E){if(this.K&&this.K.AwB)return this.K.AwB.apply(this,arguments
);else return C.DeviceClass.BuG.apply(this,arguments);},BuG:function(E){},AIL:function(
Aq){this.AwB(Aq);},UpdateDirectionOfCountingUnisex:function(Alj){if(this.Au0===Alj
)return;this.Au0=Alj;A.abo([this,this.AEv,this.AIL],0);},ArS:function(E){if(this.
K&&this.K.ArS)return this.K.ArS.apply(this,arguments);else return C.DeviceClass.
BuS.apply(this,arguments);},BuS:function(E){},AoB:function(Aq){this.ArS(Aq);},UpdateIDLastUsedUnisex:
function(Rm){if(this.AjU===Rm)return;this.AjU=Rm;A.abo([this,this.Ant,this.AoB],
0);},ArY:function(E){if(this.K&&this.K.ArY)return this.K.ArY.apply(this,arguments
);else return C.DeviceClass.Bu8.apply(this,arguments);},Bu8:function(E){},AZ6:function(
Aq){this.ArY(Aq);},UpdateNaisIdLastUsedUnisex:function(Xk){if(this.Av1===Xk)return;
this.Av1=Xk;A.abo([this,this.ASr,this.AZ6],0);},AwV:function(E){if(this.K&&this.
K.AwV)return this.K.AwV.apply(this,arguments);else return C.DeviceClass.Bu5.apply(
this,arguments);},Bu5:function(E){},AyK:function(Aq){this.AwV(Aq);},UpdateNaisIdIncrementUnisex:
function(Alp){if(this.ARK===Alp)return;this.ARK=Alp;A.abo([this,this.Awh,this.AyK
],0);},Akw:function(E){if(this.K&&this.K.Akw)return this.K.Akw.apply(this,arguments
);else return C.DeviceClass.BuI.apply(this,arguments);},BuI:function(E){},AyF:function(
Aq){this.Akw(Aq);},UpdateEartagNrAssignmentMode:function(Alk){if(this.EartagNrAssignmentMode===
Alk)return;this.EartagNrAssignmentMode=Alk;A.abo([this,this.Awa,this.AyF],0);},NY:
function(E){if(this.K&&this.K.NY)return this.K.NY.apply(this,arguments);else return C.
DeviceClass.Buy.apply(this,arguments);},Buy:function(E){},Bv7:function(Aq){this.
NY(Aq);},UpdateBreed:function(AcX){if(this.Breed===AcX)return;this.Breed=AcX;A.abo([
this,this.Av8,this.Bv7],0);},AFp:function(E){if(this.K&&this.K.AFp)return this.K.
AFp.apply(this,arguments);else return C.DeviceClass.Bu0.apply(this,arguments);},
Bu0:function(E){},Bv_:function(Aq){this.AFp(Aq);},UpdateMiddlewareVersions:function(
Qa,A0N,A0O,A0U,A0C){this.Su.OnSetTimestamp(Qa);this.Su.AFk(A0N);this.Su.AFq(A0O);
this.Su.AFz(A0U);this.Su.AE0(A0C);A.abo([this,this.BkO,this.Bv_],0);},AFj:function(
E){if(this.K&&this.K.AFj)return this.K.AFj.apply(this,arguments);else return C.DeviceClass.
BuU.apply(this,arguments);},BuU:function(E){},Bv9:function(Aq){this.AFj(Aq);},UpdateMainboardVersions:
function(Qa,A0L,A0M,A0K,A00,A01,A0Z){this.QV.OnSetTimestamp(Qa);this.QV.AFh(A0L);
this.QV.AFi(A0M);this.QV.AFg(A0K);this.QV.AFO(A00);this.QV.AFP(A01);this.QV.AFN(
A0Z);A.abo([this,this.BkM,this.Bv9],0);},AFQ:function(E){if(this.K&&this.K.AFQ)return this.
K.AFQ.apply(this,arguments);else return C.DeviceClass.Bvq.apply(this,arguments);
},Bvq:function(E){},Bwe:function(Aq){this.AFQ(Aq);},UpdateTorchboardVersions:function(
Qa,A0L,A0M,A0K,A00,A01,A0Z){this.ST.OnSetTimestamp(Qa);this.ST.AFh(A0L);this.ST.
AFi(A0M);this.ST.AFg(A0K);this.ST.AFO(A00);this.ST.AFP(A01);this.ST.AFN(A0Z);A.abo([
this,this.Bk$,this.Bwe],0);},AEQ:function(E){if(this.K&&this.K.AEQ)return this.K.
AEQ.apply(this,arguments);else return C.DeviceClass.Bux.apply(this,arguments);},
Bux:function(E){},Bv6:function(Aq){this.AEQ(Aq);},UpdateBootloaderVersions:function(
Qa,A0N,A0O,A0U,A0C){this.RU.OnSetTimestamp(Qa);this.RU.AFk(A0N);this.RU.AFq(A0O);
this.RU.AFz(A0U);this.RU.AE0(A0C);A.abo([this,this.Bkk,this.Bv6],0);},AE3:function(
E){if(this.K&&this.K.AE3)return this.K.AE3.apply(this,arguments);else return C.DeviceClass.
BuH.apply(this,arguments);},BuH:function(E){},BaW:function(Aq){this.AE3(Aq);},UpdateDryCowListAction:
function(AK){if(this.ANV===AK)return;this.ANV=AK;A.abo([this,this.A8o,this.BaW],
0);},AJB:function(A0D){if(this.K&&this.K.AJB)return this.K.AJB.apply(this,arguments
);else return C.DeviceClass.Bwq.apply(this,arguments);},Bwq:function(A0D){return false;
},AEP:function(E){if(this.K&&this.K.AEP)return this.K.AEP.apply(this,arguments);
else return C.DeviceClass.Buv.apply(this,arguments);},Buv:function(E){},AIJ:function(
Aq){this.AEP(Aq);},UpdateBirthListView:function(AK){if(this.Aqq===AK)return;this.
Aqq=AK;A.abo([this,this.AEs,this.AIJ],0);},BatchResetBirthNoticePending:function(
){var B$=A._NewObject(C.Animal,0);var O;var AiW=0;var Adh=A._GetAutoObject(C.Device
).An.Filter;var Be=A._GetAutoObject(C.Helper).AOC();A._GetAutoObject(C.Device).An.
Bl(Be);for(O=0;O<A._GetAutoObject(C.Device).An.Ca();O++){B$.EM(O,A._GetAutoObject(
C.Device).An);B$.Ae2(false);B$.Cq(A._GetAutoObject(C.Device).An);AiW++;}A._GetAutoObject(
C.Device).An.Bl(Adh);return AiW;},UpdateTransferProgress:function(AK){if(this.AxL===
AK)return;this.AxL=AK;A.abo([this,this.ASE,this.A0d],0);},AFR:function(E){if(this.
K&&this.K.AFR)return this.K.AFR.apply(this,arguments);else return C.DeviceClass.
Bvr.apply(this,arguments);},Bvr:function(E){A.ab5("%s",P3);},A0d:function(Aq){this.
AFR(Aq);},UpdateTransferTarget:function(AK){if(this.Afn===AK)return;this.Afn=AK;
A.abo([this,this.A86,this.Bba],0);},Ar6:function(E){if(this.K&&this.K.Ar6)return this.
K.Ar6.apply(this,arguments);else return C.DeviceClass.Bvs.apply(this,arguments);
},Bvs:function(E){A.ab5("%s",JZ);},Bba:function(Aq){this.Ar6(Aq);},AsC:function(
){if(this.K&&this.K.AsC)return this.K.AsC.apply(this,arguments);else return C.DeviceClass.
Bv0.apply(this,arguments);},Bv0:function(){},AwZ:function(E){if(this.K&&this.K.AwZ
)return this.K.AwZ.apply(this,arguments);else return C.DeviceClass.Bvc.apply(this
,arguments);},Bvc:function(E){},AZ9:function(Aq){this.AwZ(Aq);},UpdatePremisesID:
function(Rm){if(this.Ut===Rm)return;this.Ut=Rm;A.abo([this,this.ASw,this.AZ9],0);
},AwS:function(E){if(this.K&&this.K.AwS)return this.K.AwS.apply(this,arguments);
else return C.DeviceClass.Bu2.apply(this,arguments);},Bu2:function(E){},AIO:function(
Aq){this.AwS(Aq);},UpdateMotherSelectionDriedOffFilter:function(AK){if(this.AbV===
AK)return;this.AbV=AK;A.abo([this,this.AEz,this.AIO],0);},AE8:function(E){if(this.
K&&this.K.AE8)return this.K.AE8.apply(this,arguments);else return C.DeviceClass.
BuN.apply(this,arguments);},BuN:function(E){},Ba0:function(Aq){this.AE8(Aq);},UpdateFreshCowSpan:
function(AK){if(this.AqQ===AK)return;this.AqQ=AK;A.abo([this,this.A8t,this.Ba0],
0);},UpdateUSBState:function(Bb4){if(this.AhN===Bb4)return;this.AhN=Bb4;A.abo([this
,this.Wu,this.Xd],0);},AFS:function(E){if(this.K&&this.K.AFS)return this.K.AFS.apply(
this,arguments);else return C.DeviceClass.Bvv.apply(this,arguments);},Bvv:function(
E){A.ab5("%s",E4);},Xd:function(Aq){this.AFS(Aq);},AnX:function(Ah2){if(this.K&&
this.K.AnX)return this.K.AnX.apply(this,arguments);else return C.DeviceClass.BvU.
apply(this,arguments);},BvU:function(Ah2){return A._NewObject(C.AjE,0);},Ard:function(
){if(this.K&&this.K.Ard)return this.K.Ard.apply(this,arguments);else return C.DeviceClass.
Bud.apply(this,arguments);},Bud:function(){return false;},AqB:function(Nq){if(this.
K&&this.K.AqB)return this.K.AqB.apply(this,arguments);else return C.DeviceClass.
Bt_.apply(this,arguments);},Bt_:function(Nq){},AFD:function(E){if(this.K&&this.K.
AFD)return this.K.AFD.apply(this,arguments);else return C.DeviceClass.Bvh.apply(
this,arguments);},Bvh:function(E){},Bwb:function(Aq){this.AFD(Aq);},UpdateSerialNumber:
function(AK){if(this.AhD===AK)return;this.AhD=AK;A.abo([this,this.Bk0,this.Bwb],
0);},Awn:function(E){if(this.K&&this.K.Awn)return this.K.Awn.apply(this,arguments
);else return C.DeviceClass.Bul.apply(this,arguments);},Bul:function(E){},AZZ:function(
Aq){this.Awn(Aq);},UpdateAnimalIdAutoGenerationMethod:function(Bb$){if(this.Ags===
Bb$)return;this.Ags=Bb$;A.abo([this,this.ASc,this.AZZ],0);},ACg:function(){return false;
},AGl:function(){return false;},AFF:function(E){if(this.K&&this.K.AFF)return this.
K.AFF.apply(this,arguments);else return C.DeviceClass.Bvi.apply(this,arguments);
},Bvi:function(E){},Ba9:function(Aq){this.AFF(Aq);},UpdateShutdownTimer:function(
AK){if(this.AUJ===AK)return;this.AUJ=AK;A.abo([this,this.A8Z,this.Ba9],0);},ArG:
function(E){if(this.K&&this.K.ArG)return this.K.ArG.apply(this,arguments);else return C.
DeviceClass.Bup.apply(this,arguments);},Bup:function(E){},BaP:function(Aq){this.
ArG(Aq);},UpdateAnimalListInfoItemMode:function(AK){if(this.Amt===AK)return;this.
Amt=AK;A.abo([this,this.A8f,this.BaP],0);},Asp:function(G){if(this.K&&this.K.Asp
)return this.K.Asp.apply(this,arguments);else return C.DeviceClass.BvQ.apply(this
,arguments);},BvQ:function(G){},BF7:function(s){this.Asp(s);},Ar9:function(E){if(
this.K&&this.K.Ar9)return this.K.Ar9.apply(this,arguments);else return C.DeviceClass.
BvB.apply(this,arguments);},BvB:function(E){},Bbf:function(Aq){this.Ar9(Aq);},Ar_:
function(E){if(this.K&&this.K.Ar_)return this.K.Ar_.apply(this,arguments);else return C.
DeviceClass.BvC.apply(this,arguments);},BvC:function(E){},Bbg:function(Aq){this.
Ar_(Aq);},UpdateWeightGainsLowString:function(AK){if(this.AHd===AK)return;this.AHd=
AK;A.abo([this,this.A9d,this.Bbg],0);},UpdateWeightGainsHighString:function(AK){
if(this.AHc===AK)return;this.AHc=AK;A.abo([this,this.A9c,this.Bbf],0);},Awp:function(
E){if(this.K&&this.K.Awp)return this.K.Awp.apply(this,arguments);else return C.DeviceClass.
Bus.apply(this,arguments);},Bus:function(E){},BaR:function(Aq){this.Awp(Aq);},UpdateAnimalTypesWeightGainsString:
function(AK){if(this.ABF===AK)return;this.ABF=AK;A.abo([this,this.A8i,this.BaR],
0);},Ar8:function(E){if(this.K&&this.K.Ar8)return this.K.Ar8.apply(this,arguments
);else return C.DeviceClass.BvA.apply(this,arguments);},BvA:function(E){},Bbe:function(
Aq){this.Ar8(Aq);},Ar$:function(E){if(this.K&&this.K.Ar$)return this.K.Ar$.apply(
this,arguments);else return C.DeviceClass.BvG.apply(this,arguments);},BvG:function(
E){},Bbj:function(Aq){this.Ar$(Aq);},UpdateWeightValueBirthString:function(AK){if(
this.AHg===AK)return;this.AHg=AK;A.abo([this,this.A9g,this.Bbj],0);},UpdateWeightGainsAverageString:
function(AK){if(this.AHb===AK)return;this.AHb=AK;A.abo([this,this.A9b,this.Bbe],
0);},AwC:function(E){if(this.K&&this.K.AwC)return this.K.AwC.apply(this,arguments
);else return C.DeviceClass.BuJ.apply(this,arguments);},BuJ:function(E){},Bv8:function(
Aq){this.AwC(Aq);},UpdateEvaluationAnimalType:function(Em){if(this.ACB===Em)return;
this.ACB=Em;A.abo([this,this.Bkv,this.Bv8],0);},UpdateStartScreen:function(AK){if(
this.AxD===AK)return;this.AxD=AK;A.abo([this,this.Bk1,this.Bwc],0);},Aw3:function(
E){if(this.K&&this.K.Aw3)return this.K.Aw3.apply(this,arguments);else return C.DeviceClass.
Bvj.apply(this,arguments);},Bvj:function(E){},Bwc:function(Aq){this.Aw3(Aq);},ADQ:
function(){if(this.K&&this.K.ADQ)return this.K.ADQ.apply(this,arguments);else return C.
DeviceClass.Bub.apply(this,arguments);},Bub:function(){return 1;},ADR:function(){
if(this.K&&this.K.ADR)return this.K.ADR.apply(this,arguments);else return C.DeviceClass.
Buc.apply(this,arguments);},Buc:function(){return 1;},GetCommitCount:function(){
return 2042;},GetCommitEpoch:function(){return 1710244816;},GetCommitHash:function(
){return A.kR.Bhs;},GetVersionMajor:function(){return 0;},GetVersionMinor:function(
){return 9;},GetVersionRev:function(){return 9;},AFo:function(E){if(this.K&&this.
K.AFo)return this.K.AFo.apply(this,arguments);else return C.DeviceClass.BuY.apply(
this,arguments);},BuY:function(E){},Ba4:function(Aq){this.AFo(Aq);},UpdateMaximumAgeNewOnFarm:
function(AK){if(this.AD9===AK)return;this.AD9=AK;A.abo([this,this.A8I,this.Ba4],
0);},Aw9:function(E){if(this.K&&this.K.Aw9)return this.K.Aw9.apply(this,arguments
);else return C.DeviceClass.Bvt.apply(this,arguments);},Bvt:function(E){},A0e:function(
Aq){this.Aw9(Aq);},UpdateTransponderAssignmentIdChangeMethod:function(AyZ){if(this.
Ak3===AyZ)return;this.Ak3=AyZ;A.abo([this,this.ASF,this.A0e],0);},BatchResetPurchasedNoticePending:
function(){var B$=A._NewObject(C.Animal,0);var O;var AiW=0;var Adh=A._GetAutoObject(
C.Device).An.Filter;var Be=A._GetAutoObject(C.Helper).ACW();A._GetAutoObject(C.Device
).An.Bl(Be);for(O=0;O<A._GetAutoObject(C.Device).An.Ca();O++){B$.EM(O,A._GetAutoObject(
C.Device).An);B$.Ae2(false);B$.Cq(A._GetAutoObject(C.Device).An);AiW++;}A._GetAutoObject(
C.Device).An.Bl(Adh);return AiW;},AE1:function(E){if(this.K&&this.K.AE1)return this.
K.AE1.apply(this,arguments);else return C.DeviceClass.BuB.apply(this,arguments);
},BuB:function(E){},AZ0:function(Aq){this.AE1(Aq);},UpdateDataExportDestination:
function(AK){if(this.VM===AK)return;this.VM=AK;A.abo([this,this.ASh,this.AZ0],0);
},BmO:function(E){},UpdateMassRecordingAutomatic:function(AK){if(this.ARv===AK)return;
this.ARv=AK;A.abo([this,this.BkN,this.BmO],0);},Ng:function(E){if(this.K&&this.K.
Ng)return this.K.Ng.apply(this,arguments);else return C.DeviceClass.BvH.apply(this
,arguments);},BvH:function(E){},Bwf:function(Aq){this.Ng(Aq);},UpdateWhereAbouts:
function(AfI){if(this.WhereAbouts===AfI)return;this.WhereAbouts=AfI;A.abo([this,
this.Awk,this.Bwf],0);},ArD:function(E){if(this.K&&this.K.ArD)return this.K.ArD.
apply(this,arguments);else return C.DeviceClass.Bug.apply(this,arguments);},Bug:
function(E){},BaK:function(Aq){this.ArD(Aq);},ArE:function(E){if(this.K&&this.K.
ArE)return this.K.ArE.apply(this,arguments);else return C.DeviceClass.Buh.apply(
this,arguments);},Buh:function(E){},BaL:function(Aq){this.ArE(Aq);},UpdateActiveMassRecordingFields:
function(AK){if(this.ABz===AK)return;this.ABz=AK;A.abo([this,this.A7_,this.BaK],
0);},UpdateActiveMassRecordingFieldsOrder:function(AK){if(this.ABA===AK)return;this.
ABA=AK;A.abo([this,this.A7$,this.BaL],0);},Asm:function(G){if(this.K&&this.K.Asm
)return this.K.Asm.apply(this,arguments);else return C.DeviceClass.BvL.apply(this
,arguments);},BvL:function(G){},BF2:function(s){this.Asm(s);},AFm:function(E){if(
this.K&&this.K.AFm)return this.K.AFm.apply(this,arguments);else return C.DeviceClass.
BuV.apply(this,arguments);},BuV:function(E){},AIM:function(Aq){this.AFm(Aq);},UpdateMassRecordingDateOfBirthMandatory:
function(AK){if(this.AeL===AK)return;this.AeL=AK;A.abo([this,this.AEw,this.AIM],
0);},AFl:function(E){this.UpdateMassRecordingCounter(E);},UpdateMassRecordingCounter:
function(AK){if(this.AvV===AK)return;this.AvV=AK;A.abo([this,this.A8G,this.AFl],
0);},Ajz:function(){if(this.K&&this.K.Ajz)return this.K.Ajz.apply(this,arguments
);else return C.DeviceClass.Bt8.apply(this,arguments);},Bt8:function(){return false;
},Aqo:function(){if(this.K&&this.K.Aqo)return this.K.Aqo.apply(this,arguments);else
return C.DeviceClass.Bt7.apply(this,arguments);},Bt7:function(){return false;},Aqn:
function(){if(this.K&&this.K.Aqn)return this.K.Aqn.apply(this,arguments);else return C.
DeviceClass.Bt6.apply(this,arguments);},Bt6:function(){return false;},AuO:function(
){if(this.K&&this.K.AuO)return this.K.AuO.apply(this,arguments);else return C.DeviceClass.
Bt9.apply(this,arguments);},Bt9:function(){return false;},AwP:function(E){if(this.
K&&this.K.AwP)return this.K.AwP.apply(this,arguments);else return C.DeviceClass.
BuX.apply(this,arguments);},BuX:function(E){},Ba3:function(Aq){this.AwP(Aq);},UpdateMaxWeightValuePrecision:
function(AK){if(this.OK===AK)return;this.OK=AK;A.abo([this,this.A8H,this.Ba3],0);
},AwW:function(E){if(this.K&&this.K.AwW)return this.K.AwW.apply(this,arguments);
else return C.DeviceClass.Bu9.apply(this,arguments);},Bu9:function(E){},Ba7:function(
Aq){this.AwW(Aq);},UpdateNoNaisIdListActions:function(AK){if(this.ARW===AK)return;
this.ARW=AK;A.abo([this,this.A8L,this.Ba7],0);},ResetNoNaisIdListActions:function(
G){if(this.K&&this.K.ResetNoNaisIdListActions)return this.K.ResetNoNaisIdListActions.
apply(this,arguments);else return C.DeviceClass.BvN.apply(this,arguments);},BvN:
function(G){},BF4:function(s){this.ResetNoNaisIdListActions(s);},AwX:function(E){
if(this.K&&this.K.AwX)return this.K.AwX.apply(this,arguments);else return C.DeviceClass.
Bu_.apply(this,arguments);},Bu_:function(E){},Ba8:function(Aq){this.AwX(Aq);},UpdateNoTransponderListActions:
function(AK){if(this.AR1===AK)return;this.AR1=AK;A.abo([this,this.A8M,this.Ba8],
0);},ResetNoTransponderListActions:function(G){if(this.K&&this.K.ResetNoTransponderListActions
)return this.K.ResetNoTransponderListActions.apply(this,arguments);else return C.
DeviceClass.BvO.apply(this,arguments);},BvO:function(G){},BF5:function(s){this.ResetNoTransponderListActions(
s);},Axd:function(E){if(this.K&&this.K.Axd)return this.K.Axd.apply(this,arguments
);else return C.DeviceClass.BvI.apply(this,arguments);},BvI:function(E){},Bbk:function(
Aq){this.Axd(Aq);},UpdateYoungNoTransponderListActions:function(AK){if(this.AVM===
AK)return;this.AVM=AK;A.abo([this,this.A9i,this.Bbk],0);},ResetYoungNoTransponderListActions:
function(G){if(this.K&&this.K.ResetYoungNoTransponderListActions)return this.K.ResetYoungNoTransponderListActions.
apply(this,arguments);else return C.DeviceClass.BvR.apply(this,arguments);},BvR:
function(G){},BF8:function(s){this.ResetYoungNoTransponderListActions(s);},Aw_:function(
E){if(this.K&&this.K.Aw_)return this.K.Aw_.apply(this,arguments);else return C.DeviceClass.
Bvu.apply(this,arguments);},Bvu:function(E){},A0f:function(Aq){this.Aw_(Aq);},UpdateTransponderUnlinkIdChangeMethod:
function(AyZ){if(this.An8===AyZ)return;this.An8=AyZ;A.abo([this,this.ASG,this.A0f
],0);},AEp:function(){return this.KH;},Av6:function(){return this.Aa4;},Av9:function(
){return this.AmC;},ASz:function(){return this.ScanState;},AEx:function(){return this.
MeasureState;},AEB:function(){return this.Kv;},A8C:function(){return this.Language;
},Arw:function(){return this.TemperatureUnit;},A8n:function(){return this.AMX;},
ASq:function(){return this.AEc;},Awj:function(){return this.OverlayMenu;},A87:function(
){return this.Z0;},ASB:function(){return this.SyncState;},A88:function(){return this.
AsM;},AEC:function(){return this.AVv;},ASy:function(){return this.RatingMode;},Art:
function(){return this.AmQ;},ASD:function(){return this.AVb;},BkT:function(){return this.
ATY;},Bkh:function(){return this.AutoRegistrationMode;},ASA:function(){return this.
OR;},Uf:function(){return this.A1;},Ug:function(){return this.AF;},AED:function(
){return this.KX;},ASp:function(){return this.MassUnit;},A79:function(){return this.
Ph;},ASb:function(){return this.Auz;},A8j:function(){return this.AutoActions;},PM:
function(){return this.AnimalType;},A9e:function(){return this.WeightRecordingMode;
},ASv:function(){return this.AF8;},AEu:function(){return this.HB;},A8c:function(
){return this.AdQ;},A9f:function(){return this.WeightRecordingScope;},Wt:function(
){return this.Gender;},Awc:function(){return this.Aq3;},Awb:function(){return this.
Aq2;},AEr:function(){return this.JH;},A8e:function(){return this.AL7;},A8q:function(
){return this.AmP;},AEq:function(){return this.D9;},A9a:function(){return this.AVx;
},A8s:function(){return this.AOy;},A8h:function(){return this.ABE;},A82:function(
){return this.AGS;},A83:function(){return this.AGT;},A8u:function(){return this.
AqR;},A8K:function(){return this.AEe;},A8J:function(){return this.AEd;},Awg:function(
){return this.ARJ;},Awf:function(){return this.ARI;},A8m:function(){return this.
Aqs;},A77:function(){return this.ABy;},A78:function(){return this.Aqe;},Anq:function(
){return this.Ih;},ASi:function(){return this.ACt;},ASj:function(){return this.ACu;
},AEv:function(){return this.Au0;},Ant:function(){return this.AjU;},ASr:function(
){return this.Av1;},Awh:function(){return this.ARK;},Awa:function(){return this.
EartagNrAssignmentMode;},Av8:function(){return this.Breed;},BkO:function(){return this.
Su;},BkM:function(){return this.QV;},Bk$:function(){return this.ST;},Bkk:function(
){return this.RU;},A8o:function(){return this.ANV;},AEs:function(){return this.Aqq;
},ASE:function(){return this.AxL;},A86:function(){return this.Afn;},ASw:function(
){return this.Ut;},AEz:function(){return this.AbV;},A8t:function(){return this.AqQ;
},Wu:function(){return this.AhN;},Bk0:function(){return this.AhD;},ASc:function(
){return this.Ags;},A8Z:function(){return this.AUJ;},A8f:function(){return this.
Amt;},A9c:function(){return this.AHc;},A9d:function(){return this.AHd;},A8i:function(
){return this.ABF;},A9b:function(){return this.AHb;},A9g:function(){return this.
AHg;},Bkv:function(){return this.ACB;},Bk1:function(){return this.AxD;},A8I:function(
){return this.AD9;},ASF:function(){return this.Ak3;},ASh:function(){return this.
VM;},BkN:function(){return this.ARv;},Awk:function(){return this.WhereAbouts;},A7_:
function(){return this.ABz;},A7$:function(){return this.ABA;},AEw:function(){return this.
AeL;},A8G:function(){return this.AvV;},A8H:function(){return this.OK;},A8L:function(
){return this.ARW;},A8M:function(){return this.AR1;},A9i:function(){return this.
AVM;},ASG:function(){return this.An8;},_Init:function(aArg){C.Table._Init.call(this.
An={I:this},0);C.Table._Init.call(this.Bt={I:this},0);C.Table._Init.call(this.Agq={
I:this},0);A.Core.A$p._Init.call(this.AnP={I:this},0);C.Table._Init.call(this.Pl={
I:this},0);this.__proto__=C.DeviceClass;this.An.OnSetId(0);this.Bt.OnSetId(1);this.
Agq.OnSetId(3);this.Pl.OnSetId(4);this.OR=A._NewObject(C.Transponder,0);this.Su=
A._NewObject(C.AxB,0);this.QV=A._NewObject(C.Avr,0);this.ST=A._NewObject(C.Avr,0
);this.RU=A._NewObject(C.AxB,0);var Lw=this._variants();if(Lw){this.K={};Lw._Init.
call(this,aArg);}A.h7++;},_Done:function(){if(this.K)this.K._Done.call(this);this.
__proto__=null;this.An._Done();this.Bt._Done();this.Agq._Done();this.AnP._Done();
this.Pl._Done();A.h7--;},_ReInit:function(){this.An._ReInit();this.Bt._ReInit();
this.Agq._ReInit();this.AnP._ReInit();this.Pl._ReInit();if(this.K)this.K._ReInit.
call(this);},_Mark:function(D){var B;if((B=this.OR)&&(B._cycle!=D))B._Mark(B._cycle=
D);if((B=this.Su)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.QV)&&(B._cycle!=
D))B._Mark(B._cycle=D);if((B=this.ST)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.
RU)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.An)._cycle!=D)B._Mark(B._cycle=
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
A4:A.jV,Abj:function(){var Av=A._NewObject(C.StringFilterCriterion,0);Av.Fg(this
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
OA.apply(this,arguments);},YE:function(){if(this.K&&this.K.YE)return this.K.YE.apply(
this,arguments);else return C.ITable.YE.apply(this,arguments);},ZJ:function(Ad,A3
,C0){if(this.K&&this.K.ZJ)return this.K.ZJ.apply(this,arguments);else return C.ITable.
ZJ.apply(this,arguments);},Hj:function(Ad,A3,C0){if(this.K&&this.K.Hj)return this.
K.Hj.apply(this,arguments);else return C.ITable.Hj.apply(this,arguments);},ZI:function(
Ad,A3,C0){if(this.K&&this.K.ZI)return this.K.ZI.apply(this,arguments);else return C.
ITable.ZI.apply(this,arguments);},MB:function(Ad,A3,C0){if(this.K&&this.K.MB)return this.
K.MB.apply(this,arguments);else return C.ITable.MB.apply(this,arguments);},ZH:function(
Ad,A3,C0){if(this.K&&this.K.ZH)return this.K.ZH.apply(this,arguments);else return C.
ITable.ZH.apply(this,arguments);},Lc:function(aColumn,A7){if(this.K&&this.K.Lc)return this.
K.Lc.apply(this,arguments);else return C.ITable.Lc.apply(this,arguments);},KN:function(
Ad,A3){if(this.K&&this.K.KN)return this.K.KN.apply(this,arguments);else return C.
ITable.KN.apply(this,arguments);},SK:function(Ad,A3,C0){if(this.K&&this.K.SK)return this.
K.SK.apply(this,arguments);else return C.ITable.SK.apply(this,arguments);},AgQ:function(
aColumn,A7){if(this.K&&this.K.AgQ)return this.K.AgQ.apply(this,arguments);else return C.
ITable.AgQ.apply(this,arguments);},Hi:function(){if(this.K&&this.K.Hi)return this.
K.Hi.apply(this,arguments);else return C.ITable.Hi.apply(this,arguments);},AjJ:function(
aColumn,A7){if(this.K&&this.K.AjJ)return this.K.AjJ.apply(this,arguments);else return C.
ITable.AjJ.apply(this,arguments);},Aei:function(aColumn,A7){if(this.K&&this.K.Aei
)return this.K.Aei.apply(this,arguments);else return C.ITable.Aei.apply(this,arguments
);},HG:function(){if(this.K&&this.K.HG)return this.K.HG.apply(this,arguments);else
return C.ITable.HG.apply(this,arguments);},Abr:function(){if(this.K&&this.K.Abr)
return this.K.Abr.apply(this,arguments);else return C.ITable.Abr.apply(this,arguments
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
3,Faeces:4};C.ConverterClass={M1:null,Ak0:function(AoO){var BcI;var Aul=this.AU2(
AoO/100,0,A._GetAutoObject(C.Device).TemperatureUnit);BcI=A.abk(Aul,0,1);return BcI;
},A$x:function(Nn){if(Nn<=0)return 0;else if(Nn<=1)return 5;else if(Nn<=2)return 3;
else if(Nn<=4)return 2;else if(Nn<=6)return 1;else if(Nn<=8)return 4;else return 0;
},AdY:function(Nn){var a=0;switch(Nn){case 3:a=2;break;case 2:a=4;break;case 1:a=
6;break;case 0:a=0;break;case 4:a=8;break;case 5:a=1;break;default:A.ab5("%s",N_
);}return a;},AsE:function(Em,Rq){var Nr=A._GetAutoObject(C.Converter).Ajl(Rq,Em
);switch(Nr){case 3:return 1;case 2:return 2;case 1:return 3;case 0:return 4;default:
throw new Error(P4+Nr.toFixed());}},AhL:function(){var B;var D8=A._NewObject(A.Core.
Bs,0).Initialize(A._GetAutoObject(C.Helper).Dv());D8.AnC(0);D8.AnF(0);D8.AnI(0);
return((B=(D8.JO()|0))<0)?B+0x100000000:B;},Bhw:function(Atk){var Dn;switch(Atk){
case 36:Dn=MF;break;case 40:Dn=S4;break;case 56:Dn=UO;break;case 70:Dn=Z4;break;
case 100:Dn=W1;break;case 124:Dn=Ir;break;case 156:Dn=UP;break;case 158:Dn=Z5;break;
case 191:Dn=W2;break;case 196:Dn=Z6;break;case 203:Dn=W3;break;case 208:Dn=Z7;break;
case 233:Dn=Z8;break;case 246:Dn=UQ;break;case 250:Dn=W4;break;case 276:Dn=P5;break;
case 300:Dn=Z9;break;case 348:Dn=O3;break;case 372:Dn=Ri;break;case 380:Dn=W5;break;
case 392:Dn=W6;break;case 428:Dn=W7;break;case 440:Dn=W8;break;case 442:Dn=Z_;break;
case 470:Dn=W9;break;case 528:Dn=W_;break;case 578:Dn=S5;break;case 616:Dn=UR;break;
case 620:Dn=US;break;case 642:Dn=AcM;break;case 643:Dn=S6;break;case 703:Dn=Z$;break;
case 705:Dn=Afx;break;case 724:Dn=Aaa;break;case 752:Dn=W$;break;case 756:Dn=Aab;
break;case 792:Dn=Aac;break;case 804:Dn=AhQ;break;case 826:Dn=J0;break;case 840:
Dn=Aad;break;default:Dn=Atk.toFixed();}return Dn;},Ak9:function(MK){var Aat;if((
MK<10000)&&(A._GetAutoObject(C.Device).OK===2))Aat=2;else if((MK<100000)&&!!A._GetAutoObject(
C.Device).OK)Aat=1;else Aat=0;return this.S2(MK,Aat,false);},AxX:function(MK,Aat
){return this.S2(MK,Aat,false);},S2:function(MK,Aat,BzC){var B;var AlC=A.jV;switch(
A._GetAutoObject(C.Device).MassUnit){case 0:if(BzC)AlC=A.abl(MK,0,0);else{var Bd5=
MK<0;if(Aat<3)MK=MK+(((Bd5?-1:1)*5)*(Math.pow(10,2-Aat)|0));AlC=(((((B=MK)>-2147483648
)?Math.abs(B):B)/1000)|0).toFixed();if(Aat>0)AlC=AlC+(Lv+A.abV(A.abl((((B=MK)>-2147483648
)?Math.abs(B):B)%1000,3,10),Aat));if(Bd5)AlC=AhR+AlC;}break;case 1:AlC=A.abk(MK/
453.592,0,Aat);break;default:A.ab5("%s%s",Aog,A._GetAutoObject(C.Device).MassUnit.
toFixed());}return AlC;},Rf:function(Jf){var A4f=Jf.toFixed();var Bgk=A4f.length;
if((Bgk>=14)&&(Bgk<=15)){var A19=this.AxN(Jf);var Byr=A._GetAutoObject(C.Converter
).Bhw(A19);A4f=(Byr+N$)+A.abm(A._GetAutoObject(C.Helper).Sd(Jf,0,12),12,10);}return A4f;
},AmT:function(L3){switch(L3){case 0:return A.aaL(A.ach.AQq);case 1:return A.aaL(
A.ach.ADy);case 2:return A.aaL(A.ach.ADD);default:{A.ab5("%s%e",Xa,L3);return null;
}}},A4T:function(BxZ){switch(BxZ){case 0:return A.aaL(A.ach.AvB);case 1:return A.
aaL(A.ach.ADu);case 2:return A.aaL(A.ach.AQk);default:throw new Error(Aoh);}},AdW:
function(AJg){switch(AJg){case 0:return A.aaL(A.ach.AjV);case 2:return A.aaL(A.ach.
Am2);case 1:return A.aaL(A.ach.AbD);case 3:switch(A._GetAutoObject(C.Device).MassUnit
){case 0:return A.aaL(A.ach.AvK);case 1:return A.aaL(A.ach.AvL);default:throw new
Error(AhS+A._GetAutoObject(C.Device).MassUnit.toFixed());}break;case 4:return A.
aaL(A.ach.APM);case 5:return A.aaL(A.ach.APN);case 6:return A.aaL(A.ach.APS);case
7:return A.aaL(A.ach.APa);case 8:case 13:return A.aaL(A.ach.APh);case 9:return A.
aaL(A.ach.AC6);case 10:return A.aaL(A.ach.APg);case 12:return A.aaL(A.ach.APi);case
11:return A.aaL(A.ach.ADs);default:throw new Error(AhT+AJg.toFixed());}},BgW:function(
Ay3){switch(Ay3){case 0:return A.aaL(A.ach.ADB);case 3:return A.aaL(A.ach.Am2);case
1:return A.aaL(A.ach.AbD);case 2:return A._GetAutoObject(A.acj.DV).Bc7();default:
throw new Error(AhT+Ay3.toFixed());}},Bhv:function(Atk){switch(Atk){case 977:return AcN;
case 978:return UT;case 980:return Aoi;case 981:return Aoj;case 982:return Aok;case
983:return Aol;case 984:return Afy;case 985:return Ala;default:return A.aaR(A.acf.
Unknown);}},BhO:function(AcY){switch(AcY){case 1:return 0x278A;case 2:return 0x278B;
case 3:return 0x278C;case 4:return 0x278D;case 5:return 0x278E;case 6:return 0x278F;
case 7:return 0x2790;case 8:return 0x2791;case 9:return 0x2792;case 10:return 0x2793;
default:return 0x20;}},Bpz:function(Jf){if(!Jf)return-1;return(Jf%100000000)|0;}
,Bih:function(AoN,aFilter){var B;if(!aFilter)return AxZ;var Apf=Ax0;var Av=aFilter.
AOG();while(!!Av){Apf=Apf+A._GetAutoObject(C.Helper).A6z(AoN,Av);Av=aFilter.AOL(
Av);if(!!Av)Apf=Apf+O4;}Apf=Apf+Rj;return Apf;},A7e:function(BbO){var MH=0;switch(
BbO){case 14:MH=2;break;case 13:MH=4;break;case 6:MH=36;break;case 11:MH=9;break;
case 0:MH=39;break;case 10:MH=26;break;case 12:MH=12;break;case 5:MH=14;break;case
3:MH=15;break;case 1:MH=10;break;case 8:MH=16;break;case 4:MH=20;break;case 15:MH=
27;break;case 9:MH=31;break;case 2:MH=13;break;case 7:MH=35;break;case 16:MH=37;
break;default:A.ab5("%s%e",Ax1,BbO);}return MH;},BgV:function(Ay3){switch(Ay3){case
0:return 1;case 3:return 0;case 1:return 2;case 2:switch(A._GetAutoObject(C.Device
).MassUnit){case 0:return 3;case 1:return 4;default:throw new Error(AhS+A._GetAutoObject(
C.Device).MassUnit.toFixed());}break;default:throw new Error(AhT+Ay3.toFixed());
}},BgX:function(AoY){switch(AoY){case 0:return A.aaL(A.ach.APJ);case 1:return A.
aaL(A.ach.ADB);case 9:return A.aaL(A.ach.APU);case 4:return A.aaL(A.ach.AGj);case
6:return A.aaL(A.ach.Ask);case 8:return A.aaL(A.ach.Avv);case 2:return A.aaL(A.ach.
AbD);case 3:return A.aaL(A.ach.Am2);case 10:switch(A._GetAutoObject(C.Device).MassUnit
){case 0:return A.aaL(A.ach.AvK);case 1:return A.aaL(A.ach.AvL);default:throw new
Error(AhS+A._GetAutoObject(C.Device).MassUnit.toFixed());}break;case 7:case 5:case
11:case 12:case 13:case 14:case 18:case 15:case 16:case 17:return A.aaL(A.aci.TJ
);default:throw new Error(UU+AoY.toFixed());}},ANu:function(Atk){switch(Atk){case
40:return 1;case 56:return 3;case 70:return 2;case 100:return 4;case 124:return 5;
case 156:return 7;case 158:return 36;case 191:return 17;case 196:return 8;case 203:
return 9;case 208:return 11;case 233:return 12;case 246:return 14;case 250:return 15;
case 276:return 10;case 300:return 16;case 348:return 18;case 372:return 19;case
380:return 20;case 392:return 21;case 428:return 24;case 440:return 22;case 442:
return 23;case 470:return 25;case 528:return 26;case 578:return 27;case 616:return 28;
case 620:return 29;case 642:return 30;case 643:return 31;case 703:return 34;case
705:return 33;case 724:return 13;case 752:return 32;case 756:return 6;case 792:return 35;
case 804:return 37;case 826:return 38;case 840:return 39;default:return 0;}},ZY:
function(Jf){var A19=this.AxN(Jf);return this.ANu(A19);},AxN:function(Jf){return A.
_GetAutoObject(C.Helper).Sd(Jf,12,3)|0;},A$Q:function(AoS,Em){if(AoS<A._GetAutoObject(
C.Helper).AC2(Em))return 1;else if(AoS<A._GetAutoObject(C.Helper).AC1(Em))return 2;
else return 3;},ACP:function(BxD){switch(BxD){case 1:return 1;case 2:return 2;case
3:return 3;case 4:return 4;case 5:return 5;case 6:return 6;case 7:return 7;case 8:
return 8;case 9:return 9;case 10:return 10;case 11:return 11;case 12:return 12;case
13:return 13;case 14:return 14;case 15:return 15;case 16:return 16;default:return 0;
}},AU2:function(A7,AI$,AJa){if(AI$===AJa)return A7;if(!AI$&&(AJa===1)){var result=((
A7*9)/5)+32;return result;}if((AI$===1)&&!AJa){var result=((A7-32)*5)/9;return result;
}throw new Error(((AsS+AI$.toFixed())+Ax2)+AJa.toFixed());},A6i:function(Eb){switch(
Eb){case 0:return Ax3;case 1:return A.jV;case 2:return Ax4;case 3:return Aom;case
4:return A.aaR(A.acf.Contains);case 5:return Afz;default:{A.ab5("%s%e",Aon,Eb);return A.
jV;}}},A5g:function(AcX){return this.M1.Aeh(AcX);},Bi1:function(AcX){return this.
M1.AmE(AcX);},Bhe:function(Atj){var AAm=0;switch(Atj){case 0:AAm=1;break;case 1:
AAm=2;break;case 2:AAm=3;break;case 3:AAm=4;break;default:A.ab5("%s%e",IR,Atj);}
return AAm;},Ajl:function(A0w,Em){if(A0w>=A._GetAutoObject(C.Helper).A6u(Em))return 3;
else if(A0w>=A._GetAutoObject(C.Helper).Avm(Em))return 2;else if(A0w<A._GetAutoObject(
C.Device).Z0)return 0;else return 1;},Aqy:function(MH){var BP=-1;switch(MH){case
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
throw new Error(Aoo+MH.toFixed());}return BP;},BpD:function(Jf){return A._GetAutoObject(
C.Helper).Sd(Jf,8,2)|0;},BpC:function(Jf){var Bzy=this.BpD(Jf);return this.ACP(Bzy
);},_Init:function(aArg){C.M1._Init.call(this.M1={I:this},0);this.__proto__=C.ConverterClass;
A.h7++;},_Done:function(){this.__proto__=null;this.M1._Done();A.h7--;},_ReInit:function(
){this.M1._ReInit();},_Mark:function(D){var B;if((B=this.M1)._cycle!=D)B._Mark(B.
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
,IsRegistered:false,IsControl:false,IsAlarm:false,EM:function(Ad,AI){var HA=C.Row.
EM.call(this,Ad,AI);if(HA&&!!AI){this.OnSetId(AI.CE(Ad,0));this.SA(AI.CE(Ad,1));
this.Ab5(AI.CE(Ad,2));this.AnE(AI.CE(Ad,3));this.Q0(AI.HF(Ad,4));this.JQ(AI.AOI(
Ad,7));this.Akv(AI.Biz(Ad,6));this.EB(AI.AmU(Ad,14));this.Q2(AI.KN(Ad,22));this.
Ne(AI.KN(Ad,26));this.Axc(AI.I2(Ad,13));this.Ae0(AI.H1(Ad,8));this.Aw6(AI.HF(Ad,
15));this.ATv(AI.HF(Ad,31));this.Ae5(AI.A6I(Ad,5));this.AS4(AI.I2(Ad,17));this.Ul(
AI.H1(Ad,11));this.ATu(AI.HF(Ad,16));this.ATx(AI.HF(Ad,30));this.AkB(AI.H1(Ad,9)
);this.Ae3(AI.H1(Ad,12));this.ATw(AI.HF(Ad,20));this.Aw8(AI.HF(Ad,21));this.Ahl(
AI.H1(Ad,10));this.AwK(AI.H1(Ad,27));this.AFf(AI.ACX(Ad,18));this.AFJ(AI.HF(Ad,19
));this.AwF(AI.ACX(Ad,23));this.Aw7(AI.HF(Ad,24));this.ASW(AI.CE(Ad,25));this.Aww(
AI.HF(Ad,28));this.AwL(AI.CE(Ad,29));this.ArT(AI.H1(Ad,38));this.NY(AI.BiA(Ad,32
));this.Akx(AI.BiF(Ad,33));this.AnG(AI.KN(Ad,35));this.Ng(AI.AOQ(Ad,34));this.Ae2(
AI.H1(Ad,37));this.AFx(AI.BiO(Ad,36));}return HA;},Cq:function(AI){var HA=C.Row.
Cq.call(this,AI);if(HA&&!!AI){var Jk=AI.Oy();if(Jk<=0)A.ab5("%s",Xb);else{var Az1=
this.Am7();if(Az1)this.CL=AI.YE();else AI.Hj(this.CL,0,this.Id);AI.Hj(this.CL,1,
this.VisualId);AI.Hj(this.CL,2,this.GroupId);AI.Hj(this.CL,3,this.LocationId);AI.
Acn(this.CL,4,this.DateOfBirth);AI.Boq(this.CL,7,this.Gender);AI.Bom(this.CL,6,this.
BirthType);AI.Bok(this.CL,14,this.AnimalType);AI.SK(this.CL,22,this.TransponderId
);AI.SK(this.CL,26,this.NaisId);AI.AkR(this.CL,13,this.WorstAssessment);AI.MB(this.
CL,8,this.IsAlarm);AI.Acn(this.CL,15,this.TimestampAlarm);AI.MB(this.CL,11,this.
IsFever);AI.Acn(this.CL,16,this.TimestampExpirationFeverAlarm);AI.MB(this.CL,9,this.
IsControl);AI.MB(this.CL,12,this.IsWatch);AI.Acn(this.CL,20,this.TimestampLastControl
);AI.Acn(this.CL,21,this.TimestampLastWatch);AI.MB(this.CL,10,this.IsRegistered);
AI.MB(this.CL,27,this.IsPerished);AI.Acn(this.CL,28,this.DateOfLastCalving);AI.Hj(
this.CL,29,this.LactationNumber);AI.MB(this.CL,38,this.IsDry);AI.Boo(this.CL,32,
this.Breed);AI.Bop(this.CL,33,this.EaseOfDelivery);AI.SK(this.CL,35,this.NaisIdMother
);AI.Bow(this.CL,34,this.WhereAbouts);AI.MB(this.CL,37,this.IsRegistrationNoticePending
);AI.Bou(this.CL,36,this.ReasonOfLeaving);HA=AI.OA(Jk);if(Az1)this.OnSetId(AI.Abr(
));}}return HA;},Gm:function(){C.Row.Gm.call(this);this.OnSetId(-1);this.Ahl(true
);},Hi:function(){C.Row.Hi.call(this);this.OnSetId(0);this.SA(0);this.Ab5(0);this.
AnE(0);this.Q0(0);this.JQ(A._GetAutoObject(C.Device).Gender);this.Akv(0);this.EB(
A._GetAutoObject(C.Device).AnimalType);this.Q2(0);this.Ne(0);this.Axc(0);this.Ae0(
false);this.Aw6(0);this.ATv(0);this.Ae5(0);this.AS4(0);this.Ul(false);this.ATx(0
);this.ATu(0);this.AkB(false);this.Ae3(false);this.ATw(0);this.Aw8(0);this.Ahl(false
);this.AwK(false);this.AFf(0);this.AFJ(0);this.AwF(0);this.Aw7(0);this.ASW(-1);this.
Aww(0);this.AwL(0);this.ArT(false);this.NY(0);this.Akx(0);this.AnG(0);this.Ng(0);
this.Ae2(false);this.AFx(0);},OnSetId:function(E){if(this.Id===E)return;this.Id=
E;A.abo([this,this.QY,this.OnSetId],0);},SA:function(E){if(this.VisualId===E)return;
this.VisualId=E;A.abo([this,this.Ary,this.SA],0);},Ab5:function(E){if(this.GroupId===
E)return;this.GroupId=E;A.abo([this,this.BkC,this.Ab5],0);},Q0:function(E){if(this.
DateOfBirth===E)return;this.DateOfBirth=E;A.abo([this,this.Av_,this.Q0],0);},JQ:
function(E){if(this.Gender===E)return;this.Gender=E;A.abo([this,this.Wt,this.JQ]
,0);},Akv:function(E){if(this.BirthType===E)return;this.BirthType=E;A.abo([this,
this.ASf,this.Akv],0);},AnE:function(E){if(this.LocationId===E)return;this.LocationId=
E;A.abo([this,this.A8F,this.AnE],0);},Ae5:function(E){if(this.LastTemperature===
E)return;this.LastTemperature=E;A.abo([this,this.A8E,this.Ae5],0);},Ae0:function(
E){if(this.IsAlarm===E)return;this.IsAlarm=E;A.abo([this,this.A8w,this.Ae0],0);}
,AkB:function(E){if(this.IsControl===E)return;this.IsControl=E;A.abo([this,this.
BkF,this.AkB],0);},Ahl:function(E){if(this.IsRegistered===E)return;this.IsRegistered=
E;A.abo([this,this.BkI,this.Ahl],0);},Ae3:function(E){if(this.IsWatch===E)return;
this.IsWatch=E;A.abo([this,this.A8A,this.Ae3],0);},Axc:function(E){if(this.WorstAssessment===
E)return;this.WorstAssessment=E;A.abo([this,this.A9h,this.Axc],0);},Ul:function(
E){if(this.IsFever===E)return;this.IsFever=E;A.abo([this,this.A8x,this.Ul],0);},
ATw:function(E){if(this.TimestampLastControl===E)return;this.TimestampLastControl=
E;A.abo([this,this.Bk8,this.ATw],0);},Aw8:function(E){if(this.TimestampLastWatch===
E)return;this.TimestampLastWatch=E;A.abo([this,this.Bk_,this.Aw8],0);},AS4:function(
E){if(this.LastRatingTemperature===E)return;this.LastRatingTemperature=E;A.abo([
this,this.BkL,this.AS4],0);},ATu:function(E){if(this.TimestampExpirationFeverAlarm===
E)return;this.TimestampExpirationFeverAlarm=E;A.abo([this,this.Bk6,this.ATu],0);
},Aw6:function(E){if(this.TimestampAlarm===E)return;this.TimestampAlarm=E;A.abo([
this,this.Bk5,this.Aw6],0);},EB:function(E){if(this.AnimalType===E)return;this.AnimalType=
E;A.abo([this,this.PM,this.EB],0);},AFf:function(E){if(this.LastBodyWeight===E)return;
this.LastBodyWeight=E;A.abo([this,this.A8D,this.AFf],0);},AFJ:function(E){if(this.
TimestampLastWeighing===E)return;this.TimestampLastWeighing=E;A.abo([this,this.A85
,this.AFJ],0);},Q2:function(E){if(this.TransponderId===E)return;this.TransponderId=
E;A.abo([this,this.Arx,this.Q2],0);},RJ:function(){return A._GetAutoObject(C.Helper
).MN(this.DateOfBirth,A._GetAutoObject(C.Helper).Dv());},AwF:function(E){if(this.
FirstBodyWeight===E)return;this.FirstBodyWeight=E;A.abo([this,this.ASl,this.AwF]
,0);},Aw7:function(E){if(this.TimestampFirstWeighing===E)return;this.TimestampFirstWeighing=
E;A.abo([this,this.ASC,this.Aw7],0);},Arc:function(){var Td=A._NewObject(A.Core.
Bs,0);Td.Initialize(this.DateOfBirth);var A1W=A._NewObject(A.Core.Bs,0);A1W.Initialize(
this.TimestampFirstWeighing);if(((Td.Year===A1W.Year)&&(Td.Ab0()===A1W.Ab0()))&&(
this.FirstBodyWeight>0))return true;else return false;},AhP:function(AI5){var AaD;
var Auq;if(this.TimestampLastWeighing>0){Auq=this.TimestampLastWeighing;AaD=this.
LastBodyWeight;}else{Auq=this.DateOfBirth;AaD=A._GetAutoObject(C.Helper).Abq(this.
AnimalType);}return A._GetAutoObject(C.Helper).AhP(AaD,Auq,AI5,this.AnimalType);
},ASW:function(E){if(this.FirstBodyWeightId===E)return;this.FirstBodyWeightId=E;
A.abo([this,this.BkB,this.ASW],0);},AnV:function(Bb_){this.Ae0(Bb_);if(Bb_){if(!
this.TimestampAlarm)this.Aw6(A._GetAutoObject(C.Helper).Dv());}else this.Aw6(0);
},Ne:function(E){if(this.NaisId===E)return;this.NaisId=E;A.abo([this,this.Anu,this.
Ne],0);},AGz:function(Bb6){this.Ae3(Bb6);if(Bb6){if(!this.TimestampLastWatch)this.
Aw8(A._GetAutoObject(C.Helper).Dv());}else this.Aw8(0);},Aww:function(E){if(this.
DateOfLastCalving===E)return;this.DateOfLastCalving=E;A.abo([this,this.Bkr,this.
Aww],0);},AwL:function(E){if(this.LactationNumber===E)return;this.LactationNumber=
E;A.abo([this,this.BkK,this.AwL],0);},AwK:function(E){if(this.IsPerished===E)return;
this.IsPerished=E;A.abo([this,this.BkH,this.AwK],0);},ATx:function(E){if(this.TimestampLastTemperature===
E)return;this.TimestampLastTemperature=E;A.abo([this,this.Bk9,this.ATx],0);},ATv:
function(E){if(this.TimestampLastAssessment===E)return;this.TimestampLastAssessment=
E;A.abo([this,this.Bk7,this.ATv],0);},NY:function(E){if(this.Breed===E)return;this.
Breed=E;A.abo([this,this.Av8,this.NY],0);},Akx:function(E){if(this.EaseOfDelivery===
E)return;this.EaseOfDelivery=E;A.abo([this,this.ASk,this.Akx],0);},Ng:function(E
){if(this.WhereAbouts===E)return;this.WhereAbouts=E;A.abo([this,this.Awk,this.Ng
],0);},AnG:function(E){if(this.NaisIdMother===E)return;this.NaisIdMother=E;A.abo([
this,this.ASs,this.AnG],0);},AFx:function(E){if(this.ReasonOfLeaving===E)return;
this.ReasonOfLeaving=E;A.abo([this,this.BkV,this.AFx],0);},Ae2:function(E){if(this.
IsRegistrationNoticePending===E)return;this.IsRegistrationNoticePending=E;A.abo([
this,this.BkJ,this.Ae2],0);},ArT:function(E){if(this.IsDry===E)return;this.IsDry=
E;A.abo([this,this.BkG,this.ArT],0);},QY:function(){return this.Id;},Ary:function(
){return this.VisualId;},BkC:function(){return this.GroupId;},Av_:function(){return this.
DateOfBirth;},Wt:function(){return this.Gender;},ASf:function(){return this.BirthType;
},A8F:function(){return this.LocationId;},A8E:function(){return this.LastTemperature;
},A8w:function(){return this.IsAlarm;},BkF:function(){return this.IsControl;},BkI:
function(){return this.IsRegistered;},A8A:function(){return this.IsWatch;},A9h:function(
){return this.WorstAssessment;},A8x:function(){return this.IsFever;},Bk8:function(
){return this.TimestampLastControl;},Bk_:function(){return this.TimestampLastWatch;
},BkL:function(){return this.LastRatingTemperature;},Bk6:function(){return this.
TimestampExpirationFeverAlarm;},Bk5:function(){return this.TimestampAlarm;},PM:function(
){return this.AnimalType;},A8D:function(){return this.LastBodyWeight;},A85:function(
){return this.TimestampLastWeighing;},Arx:function(){return this.TransponderId;}
,ASl:function(){return this.FirstBodyWeight;},ASC:function(){return this.TimestampFirstWeighing;
},BkB:function(){return this.FirstBodyWeightId;},Anu:function(){return this.NaisId;
},Bkr:function(){return this.DateOfLastCalving;},BkK:function(){return this.LactationNumber;
},BkH:function(){return this.IsPerished;},Bk9:function(){return this.TimestampLastTemperature;
},Bk7:function(){return this.TimestampLastAssessment;},Av8:function(){return this.
Breed;},ASk:function(){return this.EaseOfDelivery;},Awk:function(){return this.WhereAbouts;
},ASs:function(){return this.NaisIdMother;},BkV:function(){return this.ReasonOfLeaving;
},BkJ:function(){return this.IsRegistrationNoticePending;},BkG:function(){return this.
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
OnSetTemperature(AI.A6I(Ad,7));this.OnSetBodyWeight(AI.ACX(Ad,8));this.OnSetRatingTemperature(
AI.I2(Ad,9));}return HA;},Cq:function(AI){if(this.K&&this.K.Cq)return this.K.Cq.
apply(this,arguments);else return C.Rating.Baz.apply(this,arguments);},Baz:function(
AI){var HA=C.Row.Cq.call(this,AI);if((HA&&!!AI)&&(AI.Id===1)){var Jk=AI.Oy();if(
Jk<=0)A.ab5("%s",Xb);else{var Az1=this.Am7();if(Az1)this.CL=AI.YE();else AI.Hj(this.
CL,0,this.Id);AI.Hj(this.CL,1,this.AnimalId);AI.Acn(this.CL,6,this.Timestamp);AI.
AkR(this.CL,2,this.Feed);AI.AkR(this.CL,3,this.Appearance);AI.AkR(this.CL,4,this.
Respiratory);AI.AkR(this.CL,5,this.Faeces);AI.A_$(this.CL,7,this.Temperature);AI.
AUt(this.CL,8,this.BodyWeight);AI.AkR(this.CL,9,this.RatingTemperature);AI.OA(Jk
);if(Az1)this.OnSetId(AI.Abr());var Rs=A._GetAutoObject(C.Device).An;var Ad=A._GetAutoObject(
C.Device).An.Lc(0,this.AnimalId);if(Ad>=0){var B$=A._NewObject(C.Animal,0);B$.EM(
Ad,Rs);if(this.Temperature>0)B$.Ul(A._GetAutoObject(C.Helper).A6_(this));if((this.
Temperature>0)&&A._GetAutoObject(C.Helper).AGd(this)){var Oi=A._GetAutoObject(C.
Helper).AQY(this);B$.AkB(Oi);B$.AnV(Oi);}else if(this.Temperature>0){var Oi=(A._GetAutoObject(
C.Helper).AQY(this)||(B$.WorstAssessment===2))||(B$.WorstAssessment===1);B$.AkB(
Oi);B$.AnV(Oi);}else{var Oi=A._GetAutoObject(C.Helper).AQY(this)||B$.IsFever;B$.
AkB(Oi);B$.AnV(Oi);}B$.Cq(Rs);}}}return HA;},Gm:function(){C.Row.Gm.call(this);this.
OnSetTimestamp(A._GetAutoObject(C.Helper).Dv());this.OnSetId(-1);},Hi:function(){
C.Row.Hi.call(this);this.OnSetTimestamp(0);this.OnSetId(0);this.OnSetAnimalId(0);
this.OnSetFeed(0);this.OnSetAppearance(0);this.OnSetRespiratory(0);this.OnSetFaeces(
0);this.OnSetTemperature(0);this.OnSetBodyWeight(0);this.OnSetRatingTemperature(
0);},OnSetTemperature:function(E){if(this.Temperature===E)return;this.Temperature=
E;A.abo([this,this.Bk4,this.OnSetTemperature],0);},OnSetId:function(E){if(this.Id===
E)return;this.Id=E;A.abo([this,this.QY,this.OnSetId],0);},OnSetAnimalId:function(
E){if(this.AnimalId===E)return;this.AnimalId=E;A.abo([this,this.Bke,this.OnSetAnimalId
],0);},OnSetFeed:function(E){if(this.Feed===E)return;this.Feed=E;A.abo([this,this.
Bky,this.OnSetFeed],0);},OnSetAppearance:function(E){if(this.Appearance===E)return;
this.Appearance=E;A.abo([this,this.Bkf,this.OnSetAppearance],0);},OnSetRespiratory:
function(E){if(this.Respiratory===E)return;this.Respiratory=E;A.abo([this,this.BkW
,this.OnSetRespiratory],0);},OnSetFaeces:function(E){if(this.Faeces===E)return;this.
Faeces=E;A.abo([this,this.Bkw,this.OnSetFaeces],0);},OnSetTimestamp:function(E){
if(this.Timestamp===E)return;this.Timestamp=E;A.abo([this,this.A84,this.OnSetTimestamp
],0);},Bol:function(Np,A7){switch(Np){case 2:this.OnSetAppearance(A7);break;case
1:this.OnSetFeed(A7);break;case 4:this.OnSetFaeces(A7);break;case 3:this.OnSetRespiratory(
A7);break;default:;}},Bix:function(Np){switch(Np){case 2:return this.Appearance;
case 1:return this.Feed;case 4:return this.Faeces;case 3:return this.Respiratory;
default:return 0;}},OnSetRatingTemperature:function(E){if(this.RatingTemperature===
E)return;this.RatingTemperature=E;A.abo([this,this.BkU,this.OnSetRatingTemperature
],0);},OnSetBodyWeight:function(E){if(this.BodyWeight===E)return;this.BodyWeight=
E;A.abo([this,this.Bkj,this.OnSetBodyWeight],0);},Bk4:function(){return this.Temperature;
},QY:function(){return this.Id;},Bke:function(){return this.AnimalId;},Bky:function(
){return this.Feed;},Bkf:function(){return this.Appearance;},BkW:function(){return this.
Respiratory;},Bkw:function(){return this.Faeces;},A84:function(){return this.Timestamp;
},BkU:function(){return this.RatingTemperature;},Bkj:function(){return this.BodyWeight;
},_Init:function(aArg){C.Row._Init.call(this,aArg);this.__proto__=C.Rating;this.
TableId=1;var Lw=this._variants();if(Lw){this.K={};Lw._Init.call(this,aArg);}},_Done:
function(){if(this.K)this.K._Done.call(this);this.__proto__=C.Row;C.Row._Done.call(
this);},_ReInit:function(){C.Row._ReInit.call(this);if(this.K)this.K._ReInit.call(
this);},_Mark:function(D){C.Row._Mark.call(this,D);if(this.K)this.K._Mark(D);},_variants:
function(){return A.acs.Rating._variants();},K:null,_className:"Device::Rating"};
C.HelperClass={Uw:null,AhA:null,AUm:null,AUn:null,W:null,Au:null,KF:null,SN:null
,AdX:null,UC:null,UB:null,Aek:null,Afu:null,Aft:null,Afs:null,Afv:null,Agy:null,
AGO:0,Init:function(aArg){A.pe([this,this.ATQ],this);},AkE:function(E){this.Uw=E;
A.abo([this,this.Arv,this.AkE],0);},AFB:function(E){this.AhA=E;A.abo([this,this.
A8U,this.AFB],0);},BAE:function(G){switch(A._GetAutoObject(C.Device).ScanState){
case 2:{var Aus=A._GetAutoObject(C.Device).OR;if(!Aus)throw new Error(Ax5);switch(
Aus.TransponderType){case 1:this.AkE(Aus);break;case 2:this.ATl(Aus);break;case 3:
this.AFB(Aus);break;case 4:this.ATm(Aus);break;case 0:break;default:throw new Error(
Ax6);}}break;case 4:A._GetAutoObject(C.Device).A9(11,true,A.jV,2000,null);break;
case 3:A._GetAutoObject(C.Device).A9(12,true,A.jV,2000,null);break;case 0:case 1:
break;default:throw new Error(Ax7);}},AkO:function(){this.AkE(null);this.ATl(null
);this.AFB(null);this.ATm(null);},AFG:function(E){if(this.K&&this.K.AFG)return this.
K.AFG.apply(this,arguments);else return C.HelperClass.Bax.apply(this,arguments);
},Bax:function(E){A.abo([this,this.UX,this.U0],0);A._GetAutoObject(C.Device).SetSystemTime(
E);},U0:function(Aq){this.AFG(Aq);},Dv:function(){if(this.K&&this.K.Dv)return this.
K.Dv.apply(this,arguments);else return C.HelperClass.Bat.apply(this,arguments);}
,Bat:function(){var B;return((B=(this.Au.Bc5()|0))<0)?B+0x100000000:B;},UX:function(
){return this.Dv();},Asn:function(){A._GetAutoObject(C.Device).SJ(-1);this.W.Hi(
);A.we(this.W,0);},A7o:function(Jf){if(!Jf){A.ab5("%s%U",AVP,Jf);return false;}var
Bf=A._GetAutoObject(C.Device).An.AgQ(22,Jf);return this.HL(Bf);},AmV:function(AoN
,AI4){switch(AoN){case 0:{var Ape=AI4;switch(Ape){case 14:return A.aaR(A.acf.Afp
);case 6:return AsY;case 4:return A.aaR(A.acf.Aec);case 28:return Ax8;case 7:return A.
aaR(A.acf.Afk);case 2:return A.aaR(A.acf.P);case 0:return A.aaR(A.acf.GJ);case 37:
return P6;case 8:return A.aaR(A.acf.Alarm);case 9:return A.aaR(A.acf.ACa);case 38:
return A.aaR(A.acf.ANU);case 11:return A.aaR(A.acf.Fever);case 27:return Ax9;case
10:return A.aaR(A.acf.Bn1);case 12:return A.aaR(A.acf.Asa);case 29:return A.aaR(
A.acf.ARf);case 18:return A.aaR(A.acf.Weighing);case 17:return AVQ;case 5:return A.
aaR(A.acf.Temperature);case 3:return AVR;case 26:return A.aaR(A.acf.Ud);case 35:
return A.aaR(A.acf.Ud)+AVS;case 36:return AVT;case 15:return AHi;case 24:return AHj;
case 20:return AfA;case 30:return Aop;case 21:return AVU;case 19:return AHk;case
22:return A.aaR(A.acf.Transponder);case 1:return A.aaR(A.acf.GF);case 34:return A.
aaR(A.acf.Jd);case 13:return Ald;case 31:return AHl;default:{A.ab5("%s",AHm+Ape.
toFixed());return AHn+Ape.toFixed();}}}case 1:{var Ape=AI4;switch(Ape){case 1:return A.
aaR(A.acf.Animal);case 3:return A.aaR(A.acf.AGc);case 8:return A.aaR(A.acf.Afr);
case 5:return A.aaR(A.acf.AGe);case 2:return A.aaR(A.acf.Feed);case 4:return A.aaR(
A.acf.AGf);case 7:return A.aaR(A.acf.Temperature);case 6:return A.aaR(A.acf.Bs);
default:{A.ab5("%s",AVV+Ape.toFixed());return AHn+Ape.toFixed();}}}default:A.ab5(
"%s",(AVW+AoN.toFixed())+AVX);}return A.jV;},A6z:function(AoN,AH){var result=A.jV;
if(!!AH){result=this.AmV(AoN,AH.EJ);result=((result+N$)+A._GetAutoObject(C.Converter
).A6i(AH.Operator))+N$;if(!!(C.Int32FilterCriterion.isPrototypeOf(AH)?AH:null))result=
result+(C.Int32FilterCriterion.isPrototypeOf(AH)?AH:null).A4.toFixed();else if(!
!(C.UInt32FilterCriterion.isPrototypeOf(AH)?AH:null))result=result+(C.UInt32FilterCriterion.
isPrototypeOf(AH)?AH:null).A4.toFixed();else if(!!(C.StringFilterCriterion.isPrototypeOf(
AH)?AH:null))result=result+(C.StringFilterCriterion.isPrototypeOf(AH)?AH:null).A4;
else if(!!(C.BoolFilterCriterion.isPrototypeOf(AH)?AH:null)){if((C.BoolFilterCriterion.
isPrototypeOf(AH)?AH:null).A4)result=this.AmV(AoN,AH.EJ);else result=A.jV;}else if(
!!(C.GenderFilterCriterion.isPrototypeOf(AH)?AH:null)){var By7=A._NewObject(C.GenderToString
,0);result=result+By7.Lt((C.GenderFilterCriterion.isPrototypeOf(AH)?AH:null).A4);
}else if(!!(C.AnimalTypeFilterCriterion.isPrototypeOf(AH)?AH:null)){var Bx1=A._NewObject(
C.AnimalTypeToString,0);result=result+Bx1.Lt((C.AnimalTypeFilterCriterion.isPrototypeOf(
AH)?AH:null).A4);}else if(!!(C.AssessmentFilterCriterion.isPrototypeOf(AH)?AH:null
)){var Bx4=A._NewObject(C.AssesmentToString,0);result=result+Bx4.Lt((C.AssessmentFilterCriterion.
isPrototypeOf(AH)?AH:null).A4);}else if(!!(C.UInt64FilterCriterion.isPrototypeOf(
AH)?AH:null))result=result+(C.UInt64FilterCriterion.isPrototypeOf(AH)?AH:null).A4.
toFixed();else if(!!(C.UInt64PartialFilterCriterion.isPrototypeOf(AH)?AH:null)){
var Av=(C.UInt64PartialFilterCriterion.isPrototypeOf(AH)?AH:null);result=(((((result+
Av.A4)+AcO)+Av.OB.toFixed())+O4)+Av.Zm.toFixed())+Alc;}else if(!!(C.WhereAboutsFilterCriterion.
isPrototypeOf(AH)?AH:null)){var BCq=A._NewObject(C.WhereAboutsToString,0);result=
result+BCq.Lt((C.WhereAboutsFilterCriterion.isPrototypeOf(AH)?AH:null).A4);}else
A.ab5("%s",AVY);}return result;},Nk:function(aString,BbU,Bxe){var result=A.jV;var
BfB=false;var index=0;var Bxg=BbU.length;while(!BfB){var A3A=aString.indexOf(BbU
,index);if(A3A!==-1){result=(result+A.abW(aString,index,A3A-index))+Bxe;index=A3A+
Bxg;}else{var BbY=aString.length;if(index<BbY)result=result+A.ab2(aString,BbY-index
);BfB=true;}}return result;},ATl:function(E){this.AUm=E;A.abo([this,this.BkY,this.
ATl],0);},ATm:function(E){this.AUn=E;A.abo([this,this.BkZ,this.ATm],0);},Bdt:function(
){return((A._GetAutoObject(C.Device).ScanState===2)&&!!A._GetAutoObject(C.Device
).OR)&&(A._GetAutoObject(C.Device).OR.TransponderType===1);},Af6:function(G){if(
!this.W.Am7()&&!!this.W.Id)this.BjB(this.W.Id);},Avm:function(Em){return A._GetAutoObject(
C.Helper).UC.Get(Em);},A6u:function(Em){return A._GetAutoObject(C.Helper).UB.Get(
Em);},A6E:function(){var O=0;var min=32767;while(O<A._GetAutoObject(C.Helper).UC.
MC){if(A._GetAutoObject(C.Helper).UC.Get(O)<min)min=A._GetAutoObject(C.Helper).UC.
Get(O);O=O+1;}return min;},ATQ:function(G){A.zV([this,this.Af6],A._GetAutoObject(
C.Device).An,0);},AQY:function(D2){if(!D2)return false;var Bjb=(((this.AzX(D2.Faeces
)||this.AzX(D2.Feed))||this.AzX(D2.Appearance))||this.AzX(D2.Respiratory))||this.
AzX(D2.RatingTemperature);return Bjb||this.A6_(D2);},AzX:function(Bbx){return(Bbx===
2)||(Bbx===1);},A6_:function(D2){return!!D2&&(D2.Temperature>A._GetAutoObject(C.
Helper).Avm(A._GetAutoObject(C.Helper).W.AnimalType));},HL:function(L6){var A2t=
false;if(L6>=0){if(L6!==this.W.CL)A._GetAutoObject(C.Device).SJ(L6);A2t=this.W.EM(
L6,A._GetAutoObject(C.Device).An);if(A2t)A.we(this.W,0);}else{A._GetAutoObject(C.
Device).SJ(-1);this.W.Hi();A.we(this.W,0);}return A2t;},AhJ:function(Ah4){var B;
return(((B=(this.Au.Bc5()|0))<0)?B+0x100000000:B)-this.AmH(Ah4);},AsC:function(){
var B;A.pe([B=this.KF,B.An0],this);},BBR:function(G){A._GetAutoObject(C.Device).
A9(16,false,AHo,0,null);A._GetAutoObject(C.Device).A9(5,true,A.jV,0,null);},Bnu:
function(G){var At=(C.PopupContext.isPrototypeOf(G)?G:null);if(!!At&&(At.PopupState===
5))this.AsC();},Bni:function(E){if(this.AGO===E)return;this.AGO=E;A._GetAutoObject(
C.Device).A9(16,true,this.AGO.toFixed(),0,[this,this.Bnu]);},MN:function(BwQ,Bxv
){var D8;var Bf9=A._NewObject(A.Core.An7,0);var GD=A._NewObject(A.Core.Bs,0);var
K6=A._NewObject(A.Core.Bs,0);GD.Initialize(BwQ);K6.Initialize(Bxv);D8=K6.BhN(GD);
Bf9.Initialize2(0,D8.ADo,D8.AEb,D8.AGs);if(GD.J(Bf9).GH===GD.GH)return D8.Ki;else
return D8.Ki+1;},BBT:function(G){A._GetAutoObject(C.Device).UpdateMeasureState(3
);if((A._GetAutoObject(C.Device).Kv>=A._GetAutoObject(C.Device).Z0)&&(A._GetAutoObject(
C.Device).Kv<=A._GetAutoObject(C.Helper).Avm(A._GetAutoObject(C.Helper).W.AnimalType
))){var AJk=A._GetAutoObject(C.Helper).W.Id;var BBh=A._GetAutoObject(C.Device).An.
Lc(0,AJk);A._GetAutoObject(C.Device).An.MB(BBh,9,false);A._GetAutoObject(C.Device
).An.Bl(A._GetAutoObject(C.Device).An.Filter);}},AK1:function(G){var Bg0=A._GetAutoObject(
C.Helper).Avm(A._GetAutoObject(C.Helper).W.AnimalType);var BgU=A._GetAutoObject(
C.Helper).A6u(A._GetAutoObject(C.Helper).W.AnimalType);var Agi=A.abz(Bg0-100,BgU+
100);this.BcJ(Agi);},AmH:function(Ah4){return Ah4*86400;},Ak5:function(J2){var B;
if(!!J2&&(J2<(((B=Math.trunc(Math.pow(10,A._GetAutoObject(C.Device).AF)))<0)?B+0x10000000000000000:
B)))return-1;return A._GetAutoObject(C.Helper).Sd(J2,A._GetAutoObject(C.Device).
AF&0xFF,A._GetAutoObject(C.Device).A1&0xFF)|0;},AGd:function(D2){if(!D2)return false;
return((!!D2.Faeces||!!D2.Feed)||!!D2.Appearance)||!!D2.Respiratory;},AhP:function(
A0I,Bb0,AI5,Em){var B;var ApS;if((A0I<650000)&&(Bb0<this.Dv())){var Bck=this.Agy.
Avo(Em);var Bcj=0;if(Bck>=0)Bcj=this.Afs.Get(Bck);ApS=A0I+(this.MN(Bb0,this.Dv()
)*Bcj);if(AI5>0){var A1E=this.ApR(AI5);ApS=(Math.trunc(((((B=ApS)<0)?B+0x10000000000000000:
B)+Math.trunc(A1E/2))/A1E)*A1E)|0;}if(ApS>650000)ApS=650000;}else ApS=A0I;return ApS;
},AC3:function(D2){var Aqd=A._GetAutoObject(C.Converter).AdY(D2.Faeces);if(Aqd<A.
_GetAutoObject(C.Converter).AdY(D2.Feed))Aqd=A._GetAutoObject(C.Converter).AdY(D2.
Feed);if(Aqd<A._GetAutoObject(C.Converter).AdY(D2.Appearance))Aqd=A._GetAutoObject(
C.Converter).AdY(D2.Appearance);if(Aqd<A._GetAutoObject(C.Converter).AdY(D2.Respiratory
))Aqd=A._GetAutoObject(C.Converter).AdY(D2.Respiratory);return A._GetAutoObject(
C.Converter).A$x(Aqd);},Axr:function(D2,Nn){if(!!D2){D2.OnSetFaeces(Nn);D2.OnSetFeed(
Nn);D2.OnSetAppearance(Nn);D2.OnSetRespiratory(Nn);}},Biv:function(AI,AI_,Ac4,Xl
,AfE){if(!AI)throw new Error(AsZ);var Be=A._NewObject(C.Filter,0);var ApE=AI.Filter;
var Od=A._NewObject(C.Int32FilterCriterion,0);Od.Operator=0;Od.EJ=1;Od.A4=Ac4;Be.
CW(Od);if(Xl>0){var Or=A._NewObject(C.UInt32FilterCriterion,0);Or.Operator=2;Or.
EJ=6;Or.A4=Xl;Be.CW(Or);}if(AfE>0){var Oh=A._NewObject(C.UInt32FilterCriterion,0
);Oh.Operator=3;Oh.EJ=6;Oh.A4=AfE;Be.CW(Oh);}AI.Bl(Be);var L7=A._NewObject(C.Int32ArrayWrapper
,0);L7.Zx(6);var O;for(O=0;O<L7.MC;O=O+1)L7.Set(O,0);var U6;for(O=0;O<AI.Ca();O=
O+1){U6=AI.I2(O,AI_);L7.Set(U6,L7.Get(U6)+1);}AI.Bl(ApE);return L7;},ZP:function(
Ah4){var B;var GD=A._NewObject(A.Core.Bs,0);var Bf8=A._NewObject(A.Core.An7,0);GD.
Initialize(A._GetAutoObject(C.Converter).AhL());Bf8.Initialize2(Ah4,0,0,0);GD=GD.
BoP(Bf8);return((B=(GD.JO()|0))<0)?B+0x100000000:B;},A6v:function(AI,Ac4,AfE,Xl){
if(!AI)throw new Error(AsZ);var Be=A._NewObject(C.Filter,0);var ApE=AI.Filter;var
Od=A._NewObject(C.Int32FilterCriterion,0);Od.Operator=0;Od.EJ=1;Od.A4=Ac4;Be.CW(
Od);if(Xl>0){var Or=A._NewObject(C.UInt32FilterCriterion,0);Or.Operator=2;Or.EJ=
6;Or.A4=Xl;Be.CW(Or);}if(AfE>0){var Oh=A._NewObject(C.UInt32FilterCriterion,0);Oh.
Operator=3;Oh.EJ=6;Oh.A4=AfE;Be.CW(Oh);}AI.Bl(Be);var L7=A._NewObject(C.Int32ArrayWrapper
,0);L7.Zx(6);var O;for(O=0;O<L7.MC;O=O+1)L7.Set(O,0);var Ao5=A._NewObject(C.Rating
,0);var A1v;for(O=0;O<AI.Ca();O=O+1){Ao5.EM(O,AI);if(A._GetAutoObject(C.Helper).
AGd(Ao5)){A1v=A._GetAutoObject(C.Helper).AC3(Ao5);L7.Set(A1v,L7.Get(A1v)+1);}}AI.
Bl(ApE);return L7;},A14:function(AI,Ac4,ByC){if(!AI)throw new Error(AsZ);var Be=
A._NewObject(C.Filter,0);var ApE=AI.Filter;var Od=A._NewObject(C.Int32FilterCriterion
,0);Od.Operator=0;Od.EJ=1;Od.A4=Ac4;Be.CW(Od);var Xl=A._GetAutoObject(C.Converter
).AhL()+A._GetAutoObject(C.Helper).AmH(ByC);var AfE=Xl+A._GetAutoObject(C.Helper
).AmH(1);var Or=A._NewObject(C.UInt32FilterCriterion,0);Or.Operator=2;Or.EJ=6;Or.
A4=Xl;Be.CW(Or);var Oh=A._NewObject(C.UInt32FilterCriterion,0);Oh.Operator=3;Oh.
EJ=6;Oh.A4=AfE;Be.CW(Oh);AI.Bl(Be);var Ao5=A._NewObject(C.Rating,0);var U6;var LQ=
0;var O;for(O=0;O<AI.Ca();O=O+1){Ao5.EM(O,AI);if(A._GetAutoObject(C.Helper).AGd(
Ao5)){U6=A._GetAutoObject(C.Helper).AC3(Ao5);if(A._GetAutoObject(C.Converter).AdY(
U6)>A._GetAutoObject(C.Converter).AdY(LQ))LQ=U6;}}AI.Bl(ApE);return LQ;},Am6:function(
){if((A._GetAutoObject(C.Device).WeightRecordingScope===2)||(A._GetAutoObject(C.
Device).WeightRecordingScope===1))return true;else return false;},A7b:function(){
if((A._GetAutoObject(C.Device).WeightRecordingScope===2)||!A._GetAutoObject(C.Device
).WeightRecordingScope)return true;else return false;},Biw:function(AI,AI_,Ac4,Xl
,AfE){if(!AI)throw new Error(AsZ);var Be=A._NewObject(C.Filter,0);var ApE=AI.Filter;
var Od=A._NewObject(C.Int32FilterCriterion,0);Od.Operator=0;Od.EJ=1;Od.A4=Ac4;Be.
CW(Od);if(Xl>0){var Or=A._NewObject(C.UInt32FilterCriterion,0);Or.Operator=2;Or.
EJ=6;Or.A4=Xl;Be.CW(Or);}if(AfE>0){var Oh=A._NewObject(C.UInt32FilterCriterion,0
);Oh.Operator=3;Oh.EJ=6;Oh.A4=AfE;Be.CW(Oh);}AI.Bl(Be);var L7=A._NewObject(C.Int32ArrayWrapper
,0);L7.Zx(6);var O;for(O=0;O<L7.MC;O=O+1)L7.Set(O,0);if(AI.Ca()>0){var U6=AI.I2(
0,AI_);var ApX=AI.HF(O,6);var Ac=A._NewObject(A.Core.Bs,0);Ac.Initialize(ApX);var
Aqc=U6;var AJ3=A._NewObject(A.Core.Bs,0);AJ3.Initialize(Ac.JO());for(O=1;O<AI.Ca(
);O=O+1){U6=AI.I2(O,AI_);ApX=AI.HF(O,6);Ac.Initialize(ApX);if((Ac.Ab0()!==AJ3.Ab0(
))||(Ac.Year!==AJ3.Year)){L7.Set(Aqc,L7.Get(Aqc)+1);AJ3.Initialize(Ac.JO());Aqc=
U6;}else if(!!U6&&(U6<Aqc))Aqc=U6;}L7.Set(Aqc,L7.Get(Aqc)+1);}AI.Bl(ApE);return L7;
},Aqp:function(L2){var B;var GD=A._NewObject(A.Core.Bs,0);GD.Initialize(L2);GD.AnC(
0);GD.AnF(0);GD.AnI(0);return((B=(GD.JO()|0))<0)?B+0x100000000:B;},AN7:function(
L2){var B;L2=L2+86400;var GD=A._NewObject(A.Core.Bs,0);GD.Initialize(L2);GD.AnC(
0);GD.AnF(0);GD.AnI(0);return((B=(GD.JO()|0))<0)?B+0x100000000:B;},Biy:function(
BBP,ByN,Amd,AlD){var BcE=A._GetAutoObject(C.Helper).MN(BBP,ByN);if(BcE>0)return((
AlD-Amd)/BcE)|0;return 0;},Bpr:function(BwR,Bxw){var GD=A._NewObject(A.Core.Bs,0
);var K6=A._NewObject(A.Core.Bs,0);GD.Initialize(BwR);K6.Initialize(Bxw);return(
GD.Year===K6.Year)&&(GD.Ab0()===K6.Ab0());},A6B:function(){var Be=A._GetAutoObject(
C.Helper).Mo();var BdH=A._NewObject(C.UInt32FilterCriterion,0);var BxF=A._GetAutoObject(
C.Helper).ZP(A._GetAutoObject(C.Device).AqQ)-1;BdH.Initialize(28,2,BxF,true);Be.
CW(BdH);var U2=A._NewObject(C.AnimalTypeFilterCriterion,0);U2.Initialize(14,0,1,
true);Be.CW(U2);if(A._GetAutoObject(C.Device).AqR){var AAb=A._NewObject(C.UInt32FilterCriterion
,0);var A2o=A._GetAutoObject(C.Helper).Dv()-21600;AAb.Initialize(30,3,A2o,true);
Be.CW(AAb);}return Be;},Bn6:function(){var Jk=A._GetAutoObject(C.Device).An.Oy();
if(Jk<=0)A.ab5("%s",Xb);else{A._GetAutoObject(C.Device).An.Hi();A._GetAutoObject(
C.Device).An.OA(Jk);}Jk=A._GetAutoObject(C.Device).Agq.Oy();if(Jk<=0)A.ab5("%s",
Xb);else{A._GetAutoObject(C.Device).Agq.Hi();A._GetAutoObject(C.Device).Agq.OA(Jk
);}Jk=A._GetAutoObject(C.Device).Bt.Oy();if(Jk<=0)A.ab5("%s",Xb);else{A._GetAutoObject(
C.Device).Bt.Hi();A._GetAutoObject(C.Device).Bt.OA(Jk);}Jk=A._GetAutoObject(C.Device
).Pl.Oy();if(Jk<=0)A.ab5("%s",Xb);else{A._GetAutoObject(C.Device).Pl.Hi();A._GetAutoObject(
C.Device).Pl.OA(Jk);}},BjB:function(Ac4){var Bf=A._GetAutoObject(C.Device).An.Lc(
0,Ac4);return this.HL(Bf);},AQ5:function(Jf){var Aiv=A._GetAutoObject(C.Device).
An.Aei(22,Jf);return Aiv;},ACU:function(){var Be=A._GetAutoObject(C.Helper).Mo();
var Aja=A._NewObject(C.UInt64FilterCriterion,0);Aja.Initialize(22,0,0,true);Be.CW(
Aja);return Be;},AOF:function(AoY,ByK,P_){var Aap=-1;switch(AoY){case 2:Aap=30;break;
case 3:Aap=31;break;case 10:Aap=19;break;default:A.ab5("%s%e",UU,AoY);}if(Aap<0)
return null;var Adi=A._NewObject(C.UInt32FilterCriterion,0);Adi.Initialize(Aap,3
,A._GetAutoObject(C.Helper).Dv()-ByK,P_);return Adi;},Bn4:function(aFilter){var AH=
aFilter.DQ(30,3);if(!!AH)aFilter.N3(AH);AH=aFilter.DQ(31,3);if(!!AH)aFilter.N3(AH
);AH=aFilter.DQ(19,3);if(!!AH)aFilter.N3(AH);},A1m:function(AfO,AyR,AI){if(AI.Lh(
))return 5;if(AfO.VisualId<=0)switch(AyR){case 0:if(!AfO.NaisId)return 1;break;case
1:if(!AfO.TransponderId)return 1;break;case 3:case 2:case 5:case 4:return 1;default:
throw new Error(AHp+AyR.toFixed());}if((!AfO.NaisId&&!AfO.TransponderId)&&A._GetAutoObject(
C.Device).An.AjJ(1,AfO.VisualId))return 2;if(!!AfO.NaisId&&A._GetAutoObject(C.Helper
).AQ3(AfO.NaisId))return 3;if(!!AfO.TransponderId&&A._GetAutoObject(C.Helper).AQ5(
AfO.TransponderId))return 4;return 0;},Aqi:function(Et){Et.EB(A._GetAutoObject(C.
Device).AnimalType);Et.NY(A._GetAutoObject(C.Device).Breed);Et.Q0(A._GetAutoObject(
C.Helper).Dv()-A._GetAutoObject(C.Helper).AmH(A._GetAutoObject(C.Device).AdQ));Et.
JQ(A._GetAutoObject(C.Device).Gender);Et.Ng(A._GetAutoObject(C.Device).WhereAbouts
);},AMf:function(Rn,Et){var GB=0;switch(Rn){case 0:GB=A._GetAutoObject(C.Helper).
Ak5(Et.NaisId);break;case 1:GB=A._GetAutoObject(C.Helper).Ak5(Et.TransponderId);
break;case 3:GB=A._GetAutoObject(C.Device).Aq2;break;case 2:GB=A._GetAutoObject(
C.Device).Aq3;break;case 4:case 5:GB=A._GetAutoObject(C.Device).AjU;break;default:
throw new Error(AHq+Rn.toFixed());}return GB;},A$E:function(Alk,L3,BwC,BbB,Bw$){
var B;var Ql=null;var Xw=null;switch(Alk){case 0:{Ql=[B=A._GetAutoObject(C.Device
),B.ASr,B.AZ6];Xw=[B=A._GetAutoObject(C.Device),B.Awh,B.AyK];}break;case 1:switch(
L3){case 1:{Ql=[B=A._GetAutoObject(C.Device),B.A8J,B.Ba5];Xw=[B=A._GetAutoObject(
C.Device),B.Awf,B.AyI];}break;case 0:{Ql=[B=A._GetAutoObject(C.Device),B.A8K,B.Ba6
];Xw=[B=A._GetAutoObject(C.Device),B.Awg,B.AyJ];}break;case 2:{Ql=[B=A._GetAutoObject(
C.Device),B.ASr,B.AZ6];Xw=[B=A._GetAutoObject(C.Device),B.Awh,B.AyK];}break;default:
throw new Error(Ax_+L3.toFixed());}break;default:throw new Error(AHr+Alk.toFixed(
));}if(!!Ql&&!!Xw){Ql[2].call(Ql[0],BwC);if((Xw[1].call(Xw[0])>0)&&(BbB<Bw$))Ql[
2].call(Ql[0],Ql[1].call(Ql[0])+Xw[1].call(Xw[0]));else if((Xw[1].call(Xw[0])<0)&&(
BbB>0))Ql[2].call(Ql[0],Ql[1].call(Ql[0])+Xw[1].call(Xw[0]));return Ql[1].call(Ql[
0]);}return 0;},AVm:function(Et,Alk,BwK){if(!Et||(BwK===true))return;switch(Alk){
case 0:Et.Ne(A._GetAutoObject(C.Device).Av1);break;case 1:switch(Et.Gender){case
0:Et.Ne(A._GetAutoObject(C.Device).AEe);break;case 1:Et.Ne(A._GetAutoObject(C.Device
).AEd);break;case 2:Et.Ne(A._GetAutoObject(C.Device).Av1);break;default:throw new
Error(Ax_+Et.Gender.toFixed());}break;default:throw new Error(AHr+Alk.toFixed());
}},Bjc:function(Rn,Et){var result=false;switch(Rn){case 0:result=!!Et.NaisId;break;
case 1:result=!!Et.TransponderId;break;case 3:case 2:case 4:case 5:result=false;
break;default:throw new Error(AHq+Rn.toFixed());}return result;},AKf:function(Et
,Bbv,AyR,Atx,AfH){switch(Bbv){case 2:if(Atx<=0)A._GetAutoObject(C.Device).A9(21,
true,Et.VisualId.toFixed(),0,AfH);else A._GetAutoObject(C.Device).A9(48,true,(Et.
VisualId.toFixed()+Ax$)+Atx.toFixed(),0,AfH);break;case 3:if(Atx<=0)A._GetAutoObject(
C.Device).A9(21,true,A._GetAutoObject(C.Converter).Rf(Et.NaisId),0,AfH);else A._GetAutoObject(
C.Device).A9(48,true,(A._GetAutoObject(C.Converter).Rf(Et.NaisId)+Ax$)+Atx.toFixed(
),0,AfH);break;case 4:if(Atx<=0)A._GetAutoObject(C.Device).A9(25,true,A._GetAutoObject(
C.Converter).Rf(Et.TransponderId),0,AfH);else A._GetAutoObject(C.Device).A9(47,true
,(A._GetAutoObject(C.Converter).Rf(Et.TransponderId)+Ax$)+Atx.toFixed(),0,AfH);break;
case 1:switch(AyR){case 1:A._GetAutoObject(C.Device).A9(42,true,A.jV,0,AfH);break;
case 0:A._GetAutoObject(C.Device).A9(43,true,A.jV,0,AfH);break;case 3:case 2:case
5:case 4:A._GetAutoObject(C.Device).A9(22,true,A.jV,0,AfH);break;default:throw new
Error(AHp+AyR.toFixed());}break;case 5:A._GetAutoObject(C.Device).A9(41,true,A._GetAutoObject(
C.Device).An.HG().toFixed(),0,AfH);break;case 0:break;default:throw new Error(AVZ+
Bbv.toFixed());}},Bc9:function(BbJ,L3){var B;var AAf=null;switch(BbJ){case 0:AAf=[
B=A._GetAutoObject(C.Device),B.Awh,B.AyK];break;case 1:switch(L3){case 1:AAf=[B=
A._GetAutoObject(C.Device),B.Awf,B.AyI];break;case 0:AAf=[B=A._GetAutoObject(C.Device
),B.Awg,B.AyJ];break;case 2:AAf=[B=A._GetAutoObject(C.Device),B.Awh,B.AyK];break;
default:throw new Error(Ax_+L3.toFixed());}break;default:throw new Error(AV0+BbJ.
toFixed());}return AAf;},A6M:function(Qa,Bxm){var AaP=A._NewObject(A.Core.Bs,0);
AaP.Initialize(Qa);var ABv=AaP.Year;var Bf=A._GetAutoObject(C.Device).Pl.Lc(0,ABv
);var U5=A._NewObject(C.CalfDeregistrations,0);if(Bf<0){if(A._GetAutoObject(C.Device
).Pl.Lh())A._GetAutoObject(C.Device).A9(51,true,A._GetAutoObject(C.Device).Pl.HG(
).toFixed(),0,null);else{U5.Gm();U5.AkG(ABv);}}else U5.EM(Bf,A._GetAutoObject(C.
Device).Pl);U5.Awy(U5.Deregistrations+1);if(Bxm)U5.Awx(U5.Deaths+1);U5.Cq(A._GetAutoObject(
C.Device).Pl);},AMd:function(LQ,AlN,AlE){var AKC=0;if((AlN&&(AlE===1))||(LQ===1)
)AKC=1;else if((AlN&&(AlE===2))||(LQ===2))AKC=2;else if(!!LQ&&(LQ!==5))AKC=LQ;return AKC;
},BcJ:function(BxE){var B;if(A._GetAutoObject(C.Device).MeasureState===1){this.SN.
Cw=A._GetAutoObject(C.Device).Z0;this.SN.B2=BxE;this.SN.AnY(this);}},ACR:function(
){var Be=this.AOE();var Bdw=A._NewObject(C.BoolFilterCriterion,0);Bdw.Initialize(
38,0,true,true);Be.CW(Bdw);return Be;},A6s:function(ED){var Be=A._GetAutoObject(
C.Helper).Mo();if(A._GetAutoObject(C.Device).Aqe){var A17=A._GetAutoObject(C.Helper
).AOF(ED,21600,true);Be.CW(A17);}return Be;},A6G:function(){var Be=A._GetAutoObject(
C.Helper).Mo();var BdY=A._NewObject(C.UInt64FilterCriterion,0);BdY.Initialize(26
,0,0,true);Be.CW(BdY);return Be;},A6J:function(){var B;var Be=A._GetAutoObject(C.
Helper).Mo();var AAl=(C.WhereAboutsFilterCriterion.isPrototypeOf(B=Be.DQ(34,3))?
B:null);if(!!AAl)Be.N3(AAl);var Bfi=A._NewObject(C.BoolFilterCriterion,0);Bfi.Initialize(
37,0,true,true);Be.CW(Bfi);return Be;},Sd:function(A7,Atq,A0J){var B;A7=Math.trunc(
A7/this.ApR(Atq));A7%=this.ApR(A0J);return A7;},ApR:function(BbK){switch(BbK){case
0:return 1;case 1:return 10;case 2:return 100;case 3:return 1000;case 4:return 10000;
case 5:return 100000;case 6:return 1000000;case 7:return 10000000;case 8:return 100000000;
case 9:return 1000000000;case 10:return 10000000000;case 11:return 100000000000;
case 12:return 1000000000000;case 13:return 10000000000000;case 14:return 100000000000000;
case 15:return 1000000000000000;default:throw new Error(AV1+BbK.toFixed());}},Mo:
function(){var Be=A._NewObject(C.Filter,0);var BfF=A._NewObject(C.BoolFilterCriterion
,0);BfF.Initialize(10,0,true,true);Be.CW(BfF);var AAl=A._NewObject(C.WhereAboutsFilterCriterion
,0);AAl.Initialize(34,3,6,true);Be.CW(AAl);return Be;},Arb:function(aFilter){return!
this.ACV(aFilter);},ACV:function(aFilter){var Jh=0;var Av=aFilter.AOG();while(!!
Av){if(Av.YH===false)Jh++;Av=aFilter.AOL(Av);}return Jh;},AOE:function(){var Be=
this.Mo();var U2=A._NewObject(C.AnimalTypeFilterCriterion,0);U2.Initialize(14,0,
1,true);Be.CW(U2);return Be;},AC0:function(){var B;var A38;var J4=this.BiP();A38=(((
B=A._GetAutoObject(C.Converter).Aqy(J4))<0)?B+0x10000000000000000:B)*this.ApR(12
);if((J4===10)&&(A._GetAutoObject(C.Device).Ut>0)){var By8=A._GetAutoObject(C.Helper
).Sd(A._GetAutoObject(C.Device).Ut,10,2)*this.ApR(8);A38+=By8;}return A38;},BiP:
function(){var J4=0;if(A._GetAutoObject(C.Device).Ut>0)J4=A._GetAutoObject(C.Converter
).ZY(A._GetAutoObject(C.Device).Ut);if(!J4)J4=A._GetAutoObject(C.Converter).A7e(
A._GetAutoObject(C.Device).Language);return J4;},AQ3:function(Xk){var Aiv=A._GetAutoObject(
C.Device).An.Aei(26,Xk);return Aiv;},Aj6:function(AfI){switch(AfI){case 0:case 1:
case 2:case 3:case 4:case 5:return false;case 6:case 7:case 8:case 9:case 10:return true;
default:throw new Error(AV2+AfI.toFixed());}},BgT:function(Rn,Et){var GB=0;switch(
Rn){case 1:GB=A._GetAutoObject(C.Helper).Ak5(Et.TransponderId);break;case 0:if(!
A._GetAutoObject(C.Device).EartagNrAssignmentMode)GB=A._GetAutoObject(C.Device).
AjU;else switch(Et.Gender){case 0:GB=A._GetAutoObject(C.Device).Aq3;break;case 1:
GB=A._GetAutoObject(C.Device).Aq2;break;case 2:GB=A._GetAutoObject(C.Device).AjU;
break;default:throw new Error(AHs+Et.Gender.toFixed());}break;default:throw new Error(
AV3+Rn.toFixed());}return GB;},Bil:function(){var B;var AzU=(((((((A.aaR(A.acf.AhD
)+A.aaR(A.acf.Colon))+O5)+A._GetAutoObject(C.Device).AhD)+Aya)+A.aaR(A.acf.BnM))+
A.aaR(A.acf.Colon))+O5)+A._GetAutoObject(A.acj.KK).Bij(((B=A._GetAutoObject(C.Device
).QV.Timestamp)<0)?B+0x100000000:B);return AzU;},Bim:function(){var B;var AzU=((((((((((((((((((((((((((((
AV4+A._GetAutoObject(C.Device).RU.AD6.toFixed())+Lv)+A._GetAutoObject(C.Device).
RU.AEa.toFixed())+Lv)+A._GetAutoObject(C.Device).RU.AGm.toFixed())+O4)+A._GetAutoObject(
C.Device).RU.ACh)+O4)+A._GetAutoObject(A.acj.KK).AjM(((B=A._GetAutoObject(C.Device
).RU.Timestamp)<0)?B+0x100000000:B))+O5)+AV5)+A._GetAutoObject(C.Device).Su.AD6.
toFixed())+Lv)+A._GetAutoObject(C.Device).Su.AEa.toFixed())+Lv)+A._GetAutoObject(
C.Device).Su.AGm.toFixed())+O4)+A._GetAutoObject(C.Device).Su.ACh)+O4)+A._GetAutoObject(
A.acj.KK).AjM(((B=A._GetAutoObject(C.Device).Su.Timestamp)<0)?B+0x100000000:B))+
O5)+AV6)+A._GetAutoObject(C.Helper).BiS())+O4)+A._GetAutoObject(C.Device).GetCommitHash(
))+O4)+A._GetAutoObject(C.Device).GetCommitCount().toFixed())+O4)+A._GetAutoObject(
A.acj.KK).AjM(A._GetAutoObject(C.Device).GetCommitEpoch());return AzU;},Bik:function(
){var B;var AzU=(((((((((((((((((((((AV7+A._GetAutoObject(C.Device).QV.ARr.toFixed(
))+Lv)+A._GetAutoObject(C.Device).QV.ARs.toFixed())+Lv)+A._GetAutoObject(C.Device
).QV.ARq.toFixed())+O5)+A.aaR(A.acf.A6l))+A.aaR(A.acf.Colon))+N$)+A._GetAutoObject(
A.acj.KK).AjM(((B=A._GetAutoObject(C.Device).QV.Timestamp)<0)?B+0x100000000:B))+
Aya)+AV8)+A._GetAutoObject(C.Device).ST.AVd.toFixed())+Lv)+A._GetAutoObject(C.Device
).ST.AVe.toFixed())+Lv)+A._GetAutoObject(C.Device).ST.AVc.toFixed())+O5)+A.aaR(A.
acf.A6l))+A.aaR(A.acf.Colon))+N$)+A._GetAutoObject(A.acj.KK).AjM(((B=A._GetAutoObject(
C.Device).ST.Timestamp)<0)?B+0x100000000:B);return AzU;},A6H:function(A0J){var B;
var O;var AAS=A.jV;for(O=1;O<=A0J;O=O+1)if(!!A.abz(0,2))AAS=AAS+String.fromCharCode(
A.abz(97,104)&0xFFFF);else AAS=AAS+String.fromCharCode(A.abz(48,57)&0xFFFF);return AAS;
},Abq:function(Em){var Ay_=0;if(Em===1)Em=0;var Bco=this.Agy.Avo(Em);if(Bco>=0)Ay_=
this.Afv.Get(Bco);return Ay_;},AC2:function(Em){var FS=0;var ABt=this.Agy.Avo(Em
);if(ABt>=0)FS=this.Afu.Get(ABt);return FS;},AC1:function(Em){var FS=0;var ABt=this.
Agy.Avo(Em);if(ABt>=0)FS=this.Aft.Get(ABt);return FS;},A6y:function(){var Be=this.
Mo();var U2=A._NewObject(C.AnimalTypeFilterCriterion,0);U2.Initialize(14,0,A._GetAutoObject(
C.Device).ACB,true);Be.CW(U2);return Be;},AQ6:function(J2){var BP=Math.trunc(J2/
1000000000000)|0;if(!BP)return 0;else if(BP>=900)return 1;else if(!A._GetAutoObject(
C.Converter).ANu(BP))return 2;else return 3;},A6L:function(){var Be=A._GetAutoObject(
C.Helper).ACU();var AfN=A._GetAutoObject(C.Helper).A6t(3,A._GetAutoObject(C.Device
).AD9);AfN.YH=true;Be.CW(AfN);return Be;},A6t:function(Eb,Bbu){var Av=A._NewObject(
C.UInt32FilterCriterion,0);Av.EJ=4;switch(Eb){case 2:{Av.Operator=3;Av.A4=A._GetAutoObject(
C.Helper).ZP(Bbu);}break;case 3:{Av.Operator=2;Av.A4=A._GetAutoObject(C.Helper).
ZP(Bbu-1);}break;default:A.ab5("%s%e",AV9,Eb);}return Av;},BiS:function(){return(((
A._GetAutoObject(C.Device).GetVersionMajor().toFixed()+Lv)+A._GetAutoObject(C.Device
).GetVersionMinor().toFixed())+Lv)+A._GetAutoObject(C.Device).GetVersionRev().toFixed(
);},A4Q:function(Rn,Et){var GB=0;switch(Rn){case 0:GB=Et.VisualId;break;case 2:GB=
A._GetAutoObject(C.Helper).Ak5(Et.TransponderId);break;case 3:if(Et.NaisId>0)GB=
A._GetAutoObject(C.Helper).Ak5(Et.NaisId);break;case 1:if(!A._GetAutoObject(C.Device
).EartagNrAssignmentMode)GB=A._GetAutoObject(C.Device).AjU;else switch(Et.Gender
){case 0:GB=A._GetAutoObject(C.Device).Aq3;break;case 1:GB=A._GetAutoObject(C.Device
).Aq2;break;case 2:GB=A._GetAutoObject(C.Device).AjU;break;default:throw new Error(
AHs+Et.Gender.toFixed());}break;default:throw new Error(AV_+Rn.toFixed());}return GB;
},A$F:function(){var B;var IT=null;var Te=0;if(!A._GetAutoObject(C.Device).EartagNrAssignmentMode
){IT=[B=A._GetAutoObject(C.Device),B.Ant,B.AoB];Te=A._GetAutoObject(C.Device).Au0;
}else switch(A._GetAutoObject(C.Helper).W.Gender){case 1:{IT=[B=A._GetAutoObject(
C.Device),B.Awb,B.AyG];Te=A._GetAutoObject(C.Device).ACt;}break;case 0:{IT=[B=A.
_GetAutoObject(C.Device),B.Awc,B.AyH];Te=A._GetAutoObject(C.Device).ACu;}break;case
2:{IT=[B=A._GetAutoObject(C.Device),B.Ant,B.AoB];Te=A._GetAutoObject(C.Device).Au0;
}break;default:;}if(!!IT)switch(Te){case 1:IT[2].call(IT[0],A._GetAutoObject(C.Helper
).W.VisualId-1);break;case 0:IT[2].call(IT[0],A._GetAutoObject(C.Helper).W.VisualId+
1);break;default:;}},A7c:function(Xk,Et){return(Et.NaisId!==Xk)&&this.AQ3(Xk);},
Bjl:function(Jf,Et){return(Et.TransponderId!==Jf)&&this.AQ5(Jf);},AOC:function(){
var Be=A._GetAutoObject(C.Helper).A6J();var AAd=A._NewObject(C.UInt64FilterCriterion
,0);AAd.Initialize(35,5,0,true);Be.CW(AAd);return Be;},ACW:function(){var Be=A._GetAutoObject(
C.Helper).A6J();var AAd=A._NewObject(C.UInt64FilterCriterion,0);AAd.Initialize(35
,0,0,true);Be.CW(AAd);return Be;},JW:function(A0A,Ah3){A0A.Aj(Ah3);A0A.Ar(Ah3);A0A.
Z(Ah3);},ANo:function(Ah5){var B;var Aa;var A2H=false;var Xq=Ah5.TL(null,0x1);while(
!!Xq&&(((B=Xq)?B.__proto__:null)!==A.Core.Y)){Aa=(A.kR.Co.isPrototypeOf(Xq)?Xq:null
);if(!!Aa){Aa.Bg(A2H);A2H=!A2H;}Xq=Ah5.TL(Xq,0x1);}},Bn5:function(Jf){var Ac8=A.
_GetAutoObject(C.Device).An.Filter;A._GetAutoObject(C.Device).An.Bl(null);var A3P=
A._GetAutoObject(C.Device).An.AgQ(22,Jf);A._GetAutoObject(C.Device).An.SK(A3P,22
,0);A._GetAutoObject(C.Device).An.Bl(Ac8);},A6w:function(Atp){var Be=null;switch(
Atp){case 0:Be=this.BiD();break;case 1:Be=this.ACU();break;default:throw new Error(
Ayb+Atp.toFixed());}return Be;},BiD:function(){var Be=A._GetAutoObject(C.Helper).
Mo();var AfN=this.A6t(2,100);Be.CW(AfN);return Be;},Bx3:function(Atp){var Ac8=A.
_GetAutoObject(C.Device).An.Filter;A._GetAutoObject(C.Device).An.Bl(this.A6w(Atp
));var O;for(O=0;O<A._GetAutoObject(C.Device).An.Ca();O++)A._GetAutoObject(C.Device
).An.MB(O,10,false);A._GetAutoObject(C.Device).An.Bl(Ac8);},BiE:function(Atp){var
Ac8=A._GetAutoObject(C.Device).An.Filter;A._GetAutoObject(C.Device).An.Bl(this.A6w(
Atp));var Gd=A._GetAutoObject(C.Device).An.Ca();A._GetAutoObject(C.Device).An.Bl(
Ac8);return Gd;},Arv:function(){return this.Uw;},A8U:function(){return this.AhA;
},BkY:function(){return this.AUm;},BkZ:function(){return this.AUn;},Bk2:function(
){return this.AGO;},_Init:function(aArg){C.AmM._Init.call(this,aArg);C.Animal._Init.
call(this.W={I:this},0);A.Core.Bs._Init.call(this.Au={I:this},0);A.acl.Gh._Init.
call(this.KF={I:this},0);A.acl.Gh._Init.call(this.SN={I:this},0);C.AMz._Init.call(
this.AdX={I:this},0);C.AU4._Init.call(this.UC={I:this},0);C.AU3._Init.call(this.
UB={I:this},0);C.TE._Init.call(this.Aek={I:this},0);C.AVH._Init.call(this.Afu={I:
this},0);C.AVG._Init.call(this.Aft={I:this},0);C.AVF._Init.call(this.Afs={I:this
},0);C.AVJ._Init.call(this.Afv={I:this},0);C.AMA._Init.call(this.Agy={I:this},0);
this.__proto__=C.HelperClass;var B;this.KF.HM(1);this.KF.Fl(3000);this.KF.B2=100;
this.SN.AwD(10);this.SN.WC(5);this.SN.HM(1);this.SN.Fl(4000);this.Aek.B2=false;this.
Aek.Cw=true;this.Aek.HM(1);this.Aek.Fl(100);this.KF.Sv=[this,this.BBR];this.KF.Q=[
this,this.Bk2,this.Bni];this.SN.Sv=[this,this.BBT];this.SN.Q=[B=A._GetAutoObject(
C.Device),B.AEB,B.AIP];this.Aek.Q=[B=A._GetAutoObject(C.Device),B.AEC,B.AIQ];this.
Init(aArg);var Lw=this._variants();if(Lw){this.K={};Lw._Init.call(this,aArg);}},
_Done:function(){if(this.K)this.K._Done.call(this);this.__proto__=C.AmM;this.W._Done(
);this.Au._Done();this.KF._Done();this.SN._Done();this.AdX._Done();this.UC._Done(
);this.UB._Done();this.Aek._Done();this.Afu._Done();this.Aft._Done();this.Afs._Done(
);this.Afv._Done();this.Agy._Done();C.AmM._Done.call(this);},_ReInit:function(){
C.AmM._ReInit.call(this);this.W._ReInit();this.Au._ReInit();this.KF._ReInit();this.
SN._ReInit();this.AdX._ReInit();this.UC._ReInit();this.UB._ReInit();this.Aek._ReInit(
);this.Afu._ReInit();this.Aft._ReInit();this.Afs._ReInit();this.Afv._ReInit();this.
Agy._ReInit();if(this.K)this.K._ReInit.call(this);},_Mark:function(D){var B;C.AmM.
_Mark.call(this,D);if((B=this.Uw)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.
AhA)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.AUm)&&(B._cycle!=D))B._Mark(B.
_cycle=D);if((B=this.AUn)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.W)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.Au)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
KF)._cycle!=D)B._Mark(B._cycle=D);if((B=this.SN)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.AdX)._cycle!=D)B._Mark(B._cycle=D);if((B=this.UC)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.UB)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Aek)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Afu)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Aft)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.Afs)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
Afv)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Agy)._cycle!=D)B._Mark(B._cycle=D);
if(this.K)this.K._Mark(D);},_variants:function(){return A.acs.HelperClass._variants(
);},K:null,_className:"Device::HelperClass"};C.Helper={_Init:function(){C.HelperClass.
_Init.call(this,0);},_ReInit:function(){},_variants:function(){return this;},_this:
null};C.BoolFilterCriterion={A4:false,Abj:function(){var Av=A._NewObject(C.BoolFilterCriterion
,0);Av.Fg(this);return Av;},Fg:function(AH){C.FilterCriterion.Fg.call(this,AH);var
Av=(C.BoolFilterCriterion.isPrototypeOf(AH)?AH:null);if(!!Av)this.A4=Av.A4;},Initialize:
function(A3,Eb,A7,P_){this.EJ=A3;this.Operator=Eb;this.A4=A7;this.YH=P_;return this;
},_Init:function(aArg){C.FilterCriterion._Init.call(this,aArg);this.__proto__=C.
BoolFilterCriterion;},_className:"Device::BoolFilterCriterion"};C.UInt32FilterCriterion={
A4:0,Abj:function(){var Av=A._NewObject(C.UInt32FilterCriterion,0);Av.Fg(this);return Av;
},Fg:function(AH){C.FilterCriterion.Fg.call(this,AH);var Av=(C.UInt32FilterCriterion.
isPrototypeOf(AH)?AH:null);if(!!Av)this.A4=Av.A4;},Initialize:function(A3,Eb,A7,
P_){this.EJ=A3;this.Operator=Eb;this.A4=A7;this.YH=P_;return this;},_Init:function(
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
"Device::EnumToString"};C.ScreenTypeToString={BI:function(A5){var AJS=A5;var BD;
switch(AJS){case 3:BD=A.aaR(A.acf.Avu);break;case 34:BD=A.aaR(A.acf.Tt);break;case
35:BD=A.aaR(A.acf.Vq);break;case 43:BD=A.aaR(A.acf.AOB);break;default:BD=this.Bps(
A5);}return BD;},Bps:function(A5){var AJS=A5;var BD=A.jV;switch(AJS){case 0:BD=As1;
break;case 2:BD=AV$;break;case 4:BD=AWa;break;case 39:BD=AWb;break;case 38:BD=AWc;
break;case 63:BD=AHt;break;case 64:BD=AWd;break;case 82:BD=AHu;break;case 83:BD=
AHv;break;case 92:BD=AHw;break;case 93:BD=AWe;break;case 65:BD=AHx;break;case 3:
BD=AHy;break;case 6:BD=AWf;break;case 16:BD=Rk;break;case 22:BD=Xc;break;case 42:
BD=AWg;break;case 88:BD=AWh;break;case 87:BD=AWi;break;case 89:BD=AWj;break;case
95:BD=AWk;break;case 17:BD=AWl;break;case 23:BD=AWm;break;case 18:BD=AhU;break;case
19:BD=AHz;break;case 37:BD=AWn;break;case 76:BD=AWo;break;case 1:BD=AHA;break;case
5:BD=AHB;break;case 7:BD=Ayc;break;case 81:BD=P7;break;case 8:BD=AWp;break;case 9:
BD=AWq;break;case 40:BD=AWr;break;case 41:BD=As2;break;case 24:BD=AWs;break;case
10:BD=AWt;break;case 60:BD=AWu;break;case 21:BD=AWv;break;case 11:BD=AWw;break;case
29:BD=AWx;break;case 48:BD=As3;break;case 30:BD=AWy;break;case 12:BD=AWz;break;case
13:BD=AWA;break;case 14:BD=AWB;break;case 15:BD=AWC;break;case 69:BD=AWD;break;case
70:BD=AWE;break;case 20:BD=AWF;break;case 25:BD=AWG;break;case 66:BD=AWH;break;case
59:BD=AHC;break;case 58:BD=Ale;break;case 56:BD=AWI;break;case 57:BD=AWJ;break;case
68:BD=AWK;break;case 67:BD=Ayd;break;case 84:BD=Alf;break;case 77:BD=AhV;break;case
26:BD=Aye;break;case 28:BD=Aoq;break;case 27:BD=AhW;break;case 31:BD=AWL;break;case
78:BD=Ayf;break;case 34:BD=AHD;break;case 35:BD=AfB;break;case 32:BD=AHE;break;case
45:BD=Aae;break;case 49:BD=Alg;break;case 55:BD=Aor;break;case 54:BD=AWM;break;case
33:BD=AWN;break;case 36:BD=AWO;break;case 50:BD=AWP;break;case 75:BD=AWQ;break;case
43:BD=As4;break;case 44:BD=AHF;break;case 61:BD=AHG;break;case 62:BD=AWR;break;case
46:BD=AWS;break;case 47:BD=AWT;break;case 85:BD=AWU;break;case 86:BD=AWV;break;case
71:BD=AWW;break;case 72:BD=AWX;break;case 74:BD=AWY;break;case 73:BD=AWZ;break;case
51:BD=AW0;break;case 52:BD=AW1;break;case 53:BD=Ayg;break;case 79:BD=AHH;break;case
80:BD=AHI;break;case 90:BD=AHJ;break;case 91:BD=AHK;break;case 94:BD=AHL;break;default:
throw new Error(AHM+AJS.toFixed());}return BD;},_Init:function(aArg){C.EnumToString.
_Init.call(this,aArg);this.__proto__=C.ScreenTypeToString;},_className:"Device::ScreenTypeToString"
};C.OverlayMenuToString={BI:function(A5){var Bfd=A5;var On=A.jV;switch(Bfd){case
0:On=AW2;break;case 1:On=AHy;break;case 8:On=AW3;break;case 2:On=AW4;break;case 3:
On=AW5;break;case 4:On=AW6;break;case 5:On=AW7;break;case 6:On=AW8;break;case 7:
On=Ayh;break;case 11:On=AHN;break;case 12:On=AW9;break;case 9:On=AHO;break;case 10:
On=AhX;break;case 14:On=UV;break;case 15:On=AW_;break;case 13:On=Aaf;break;case 16:
On=AW$;break;case 17:On=AXa;break;default:throw new Error(Alh+Bfd.toFixed());}return On;
},_Init:function(aArg){C.EnumToString._Init.call(this,aArg);this.__proto__=C.OverlayMenuToString;
},_className:"Device::OverlayMenuToString"};C.ScanStateToString={BI:function(A5){
var BfO=A5;var Bp=A.jV;switch(BfO){case 4:Bp=Aag;break;case 0:Bp=AcP;break;case 2:
Bp=Ayi;break;case 3:Bp=AXb;break;case 1:Bp=Oa;break;default:throw new Error(AHP+
BfO.toFixed());}return Bp;},_Init:function(aArg){C.EnumToString._Init.call(this,
aArg);this.__proto__=C.ScanStateToString;},_className:"Device::ScanStateToString"
};C.MeasureStateToString={BI:function(A5){var BdS=A5;var Bp=A.jV;switch(BdS){case
4:Bp=Aag;break;case 0:Bp=AcP;break;case 2:Bp=AXc;break;case 1:Bp=Oa;break;case 3:
Bp=AHQ;break;default:throw new Error(AXd+BdS.toFixed());}return Bp;},_Init:function(
aArg){C.EnumToString._Init.call(this,aArg);this.__proto__=C.MeasureStateToString;
},_className:"Device::MeasureStateToString"};C.TemperatureUnit={Celsius:0,Fahrenheit:
1,LAST:2};C.TemperatureUnitToString={BI:function(A5){var Bgb=A5;var Ap8=A.jV;switch(
Bgb){case 0:Ap8=A.aaR(A.acf.BpL);break;case 1:Ap8=A.aaR(A.acf.BpM);break;default:
throw new Error(AHR+Bgb.toFixed());}return Ap8;},_Init:function(aArg){C.EnumToString.
_Init.call(this,aArg);this.__proto__=C.TemperatureUnitToString;},_className:"Device::TemperatureUnitToString"
};C.AnimalType={DairyCalf:0,DairyCow:1,SheepLamb:2,LAST:3};C.AnimalTypeToString={
BI:function(A5){var AK2=A5;var type=A.jV;switch(AK2){case 0:type=A.aaR(A.acf.Bhj
);break;case 1:type=A.aaR(A.acf.Bhx);break;case 2:type=A.aaR(A.acf.Bjt);break;default:
throw new Error(AHS+AK2.toFixed());}return type;},_Init:function(aArg){C.EnumToString.
_Init.call(this,aArg);this.__proto__=C.AnimalTypeToString;},_className:"Device::AnimalTypeToString"
};C.Language={Default:0,German:1,Spanish:2,French:3,Italian:4,Finnish:5,Chinese_TW:
6,Turkish:7,Greek:8,Russian:9,Dutch:10,Czech:11,Estonian:12,Bulgarian:13,Bosnian:
14,Norwegian:15,Ukrainian:16,LAST:17};C.LanguageToString={BI:function(A5){var Az8=
A5;var O$=A.jV;switch(Az8){case 0:O$=AXe;break;case 10:O$=AXf;break;case 1:O$=AXg;
break;case 12:O$=AXh;break;case 5:O$=AXi;break;case 3:O$=AXj;break;case 8:O$=AXk;
break;case 13:O$=AXl;break;case 4:O$=AHT;break;case 9:O$=AXm;break;case 2:O$=AHU;
break;case 7:O$=AHV;break;case 6:O$=Ayj;break;case 11:O$=AXn;break;case 14:O$=AXo;
break;case 15:O$=AXp;break;case 16:O$=AXq;break;default:throw new Error(AHW+Az8.
toFixed());}return O$;},Lt:function(A5){var Az8=A5;var Dn=A.jV;switch(Az8){case 0:
Dn=AXr;break;case 10:Dn=W_;break;case 1:Dn=P5;break;case 12:Dn=AXs;break;case 5:
Dn=UQ;break;case 3:Dn=W4;break;case 8:Dn=AXt;break;case 13:Dn=W1;break;case 4:Dn=
W5;break;case 9:Dn=S6;break;case 2:Dn=Aaa;break;case 7:Dn=Aac;break;case 6:Dn=As5;
break;case 11:Dn=As6;break;case 14:Dn=AHX;break;case 15:Dn=S5;break;case 16:Dn=J0;
break;default:throw new Error(AHW+Az8.toFixed());}return Dn;},_Init:function(aArg
){C.EnumToString._Init.call(this,aArg);this.__proto__=C.LanguageToString;},_className:
"Device::LanguageToString"};C.Gender={Male:0,Female:1,Unknown:2,LAST:3};C.BirthType={
Single:0,Twins:1,Triplets:2,Quadruplets:3,LAST:4};C.GenderToString={BI:function(
A5){var AtO=A5;var AJ_=A.jV;switch(AtO){case 0:AJ_=A.aaR(A.acf.Male);break;case 1:
AJ_=A.aaR(A.acf.Female);break;case 2:AJ_=A.aaR(A.acf.Unknown);break;default:throw new
Error(AXu+AtO.toFixed());}return AJ_;},_Init:function(aArg){C.EnumToString._Init.
call(this,aArg);this.__proto__=C.GenderToString;},_className:"Device::GenderToString"
};C.BirthTypeToString={BI:function(A5){var type=A5;var AfR=A.jV;switch(type){case
0:AfR=A.aaR(A.acf.BoG);break;case 1:AfR=A.aaR(A.acf.BpH);break;case 2:AfR=A.aaR(
A.acf.Triplets);break;case 3:AfR=A.aaR(A.acf.Quadruplets);break;default:throw new
Error(AXv+type.toFixed());}return AfR;},_Init:function(aArg){C.EnumToString._Init.
call(this,aArg);this.__proto__=C.BirthTypeToString;},_className:"Device::BirthTypeToString"
};C.SyncState={Idle:0,Init:1,Exporting:2,ImportStart:3,Importing:4,ImportFinish:
5,Ready:6,Error:7,LAST:8};C.SyncStateToString={BI:function(A5){var Bf7=A5;var Bp=
A.jV;switch(Bf7){case 7:Bp=Aag;break;case 0:Bp=AcP;break;case 6:Bp=AHQ;break;case
2:Bp=AXw;break;case 5:Bp=AXx;break;case 3:Bp=AXy;break;case 4:Bp=AXz;break;case 1:
Bp=AXA;break;default:throw new Error(AXB+Bf7.toFixed());}return Bp;},_Init:function(
aArg){C.EnumToString._Init.call(this,aArg);this.__proto__=C.SyncStateToString;},
_className:"Device::SyncStateToString"};C.RatedAttributeToString={BI:function(A5
){var AAT=A5;switch(AAT){case 0:return A.jV;case 1:return A.aaR(A.acf.BnU);case 4:
return A.aaR(A.acf.BnT);case 3:return A.aaR(A.acf.BnV);case 2:return A.aaR(A.acf.
BnS);default:throw new Error(AHY+AAT.toFixed());}},Lt:function(A5){var AAT=A5;switch(
AAT){case 0:return A.jV;case 1:return A.aaR(A.acf.Feed);case 4:return A.aaR(A.acf.
AGe);case 3:return A.aaR(A.acf.AGf);case 2:return A.aaR(A.acf.AGc);default:throw new
Error(AHY+AAT.toFixed());}},_Init:function(aArg){C.EnumToString._Init.call(this,
aArg);this.__proto__=C.RatedAttributeToString;},_className:"Device::RatedAttributeToString"
};C.AssesmentToString={BI:function(A5){var Alt=A5;var Azf=A.jV;switch(Alt){case 0:
case 5:Azf=A.jV;break;case 3:Azf=A.aaR(A.acj.BoM);break;case 2:Azf=A.aaR(A.acj.BoO
);break;case 1:Azf=A.aaR(A.acj.BoN);break;default:throw new Error(AXC+Alt.toFixed(
));}return Azf;},_Init:function(aArg){C.EnumToString._Init.call(this,aArg);this.
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
7,ClosedWithNo:8,Opened:9};C.PopupContext={AF1:null,AkI:A.jV,Ak2:0,PopupState:1,
Id:0,Show:false,Bm3:function(E){var B;if(this.PopupState===E)return;this.PopupState=
E;if(!!this.AF1)(B=this.AF1)?B[1].call(B[0],this):null;},_Init:function(aArg){this.
__proto__=C.PopupContext;A.h7++;},_Done:function(){this.__proto__=null;A.h7--;},
_ReInit:function(){},_Mark:function(D){var B;if((B=this.AF1)&&((B=B[0])._cycle!=
D))B._Mark(B._cycle=D);if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null
,_cycle:0,_observers:null,_className:"Device::PopupContext"};C.Boolean={No:0,Yes:
1,LAST:2};C.BooleanToYesNo={BI:function(A5){switch(A5){case 0:return A.aaR(A.acf.
No);case 1:return A.aaR(A.acf.Yes);default:return Ayk+A5.toFixed();}},_Init:function(
aArg){C.EnumToString._Init.call(this,aArg);this.__proto__=C.BooleanToYesNo;},_className:
"Device::BooleanToYesNo"};C.AnimalGroupTableFields={Id:0,GroupName:1};C.AnimalGroup={
GroupName:AHo,Id:0,EM:function(Ad,AI){var HA=C.Row.EM.call(this,Ad,AI);if(HA&&!!
AI){this.OnSetId(AI.CE(Ad,0));this.AE_(AI.VU(Ad,1));}return HA;},Cq:function(AI){
var HA=C.Row.Cq.call(this,AI);if(HA&&!!AI){var Jk=AI.Oy();if(Jk<=0)A.ab5("%s",Xb
);else{if(this.Am7())this.CL=AI.YE();AI.Hj(this.CL,0,this.Id);AI.ZH(this.CL,1,this.
GroupName);AI.OA(Jk);}}return HA;},Gm:function(){C.Row.Gm.call(this);this.OnSetId(-
1);},Hi:function(){C.Row.Hi.call(this);this.OnSetId(0);this.AE_(A.jV);},OnSetId:
function(E){if(this.Id===E)return;this.Id=E;A.abo([this,this.QY,this.OnSetId],0);
},AE_:function(E){if(this.GroupName===E)return;this.GroupName=E;A.abo([this,this.
BkD,this.AE_],0);},QY:function(){return this.Id;},BkD:function(){return this.GroupName;
},_Init:function(aArg){C.Row._Init.call(this,aArg);this.__proto__=C.AnimalGroup;
this.TableId=3;},_className:"Device::AnimalGroup"};C.PopupIdToString={BI:function(
A5){var AdB=A5;var Ax=A.jV;var AJQ;AJQ=A.aaR(A.acf.Bp5)+O5;switch(AdB){case 0:Ax=
A.aaR(A.acf.Unknown);break;case 1:Ax=A.aaR(A.acf.SevereError);break;case 58:Ax=A.
aaR(A.acf.Bh_);break;case 2:Ax=A.aaR(A.acf.Bh8);break;case 3:Ax=A.aaR(A.acf.BpR);
break;case 77:Ax=A._GetAutoObject(C.Helper).Bim();break;case 78:Ax=A._GetAutoObject(
C.Helper).Bik();break;case 79:Ax=A._GetAutoObject(C.Helper).Bil();break;case 9:Ax=
A.aaR(A.acf.Bqh);break;case 5:Ax=A.aaR(A.acf.SuccessDataSync);break;case 8:Ax=A.
aaR(A.acf.SuccessResetFactorySettings);break;case 34:Ax=A.aaR(A.acf.SuccessResetAnimalData
);break;case 10:Ax=A._GetAutoObject(C.Device).ACZ();break;case 82:Ax=A.aaR(A.acf.
Bia);break;case 83:Ax=A.aaR(A.acf.Bib);break;case 80:Ax=A.aaR(A.acf.BoY);break;case
81:Ax=A.aaR(A.acf.SuccessRestoreBackup);break;case 91:Ax=A.aaR(A.acf.Bg9);break;
case 92:Ax=A.aaR(A.acf.Bn8);break;case 4:Ax=A.aaR(A.acf.WarningDataSync);break;case
7:Ax=A.aaR(A.acf.Bqf);break;case 33:Ax=A.aaR(A.acf.WarningResetAnimalData);break;
case 6:Ax=A.aaR(A.acf.WarningRestart);break;case 27:Ax=A.aaR(A.acf.WarningNoActionDefined
);break;case 64:Ax=A.aaR(A.acf.WarningActionNotApplicable);break;case 28:Ax=A.aaR(
A.acf.WarningNoMenuItemVisible);break;case 29:Ax=A.aaR(A.acf.WarningEnterPresentationMode
);break;case 30:Ax=A.aaR(A.acf.WarningNoAnimalsRegistered);break;case 41:Ax=((AJQ+
A.aaR(A.acf.ARz))+O5)+A.aaR(A.acf.BjH);break;case 50:Ax=((AJQ+A.aaR(A.acf.ARz))+
O5)+A.aaR(A.acf.BjJ);break;case 51:Ax=((AJQ+A.aaR(A.acf.ARz))+O5)+A.aaR(A.acf.BjI
);break;case 42:Ax=A.aaR(A.acf.Bqd);break;case 45:Ax=A.aaR(A.acf.Bp9);break;case
46:Ax=A.aaR(A.acf.WarningNoValidCountryCode);break;case 57:Ax=A.aaR(A.acf.WarningOutdatedAnimalWeight
);break;case 52:Ax=A.aaR(A.acf.WarningOutdatedAnimalWeights);break;case 53:Ax=A.
aaR(A.acf.WarningWeightEvaluationSingular);break;case 56:Ax=A.aaR(A.acf.WarningWeightEvaluationPlural
);break;case 11:Ax=A.aaR(A.acf.ScanError);break;case 12:Ax=A.aaR(A.acf.ScanNotFound
);break;case 13:Ax=A.aaR(A.acf.Bg1);break;case 36:Ax=A.aaR(A.acf.BpA);break;case
14:Ax=A.aaR(A.acf.AnimalNotFound);break;case 15:Ax=A.aaR(A.acf.SuccessUnregister
);break;case 35:Ax=A.aaR(A.acf.SuccessUnregisterPerished);break;case 26:Ax=A.aaR(
A.acf.SuccessCreationNewAnimal);break;case 23:Ax=A.aaR(A.acf.SuccessCreationNewAnimals
);break;case 24:Ax=A.aaR(A.acf.BhA);break;case 49:Ax=A.aaR(A.acf.EvaluationInProgress
);break;case 16:Ax=A.aaR(A.acf.BhG);break;case 17:Ax=A.aaR(A.acf.BoQ);break;case
18:Ax=A.aaR(A.acf.Bo4);break;case 19:Ax=A.aaR(A.acf.BoR);break;case 20:Ax=A.aaR(
A.acf.Bo5);break;case 54:Ax=A.aaR(A.acf.BoZ);break;case 55:Ax=A.aaR(A.acf.Bo2);break;
case 21:Ax=A.aaR(A.acf.A$J);break;case 48:Ax=(A.aaR(A.acf.A$J)+O5)+A.aaR(A.acf.A5w
);break;case 22:Ax=A.aaR(A.acf.Bp$);break;case 63:Ax=A.aaR(A.acf.Bqa);break;case
85:Ax=A.aaR(A.acf.Bqc);break;case 43:Ax=A.aaR(A.acf.Bqb);break;case 25:Ax=A.aaR(
A.acf.A$u);break;case 47:Ax=(A.aaR(A.acf.A$u)+O5)+A.aaR(A.acf.A5w);break;case 107:
Ax=A.aaR(A.acf.BpN);break;case 31:{var Bzx=(((((((((((((((((((A.aaR(A.acf.Bhr)+Aya
)+A.aaR(A.acf.ANq))+A.aaR(A.acf.Colon))+N$)+A.aaR(A.acf.Bht))+O5)+A.aaR(A.acf.AOr
))+A.aaR(A.acf.Colon))+N$)+A.aaR(A.acf.Big))+O5)+A.aaR(A.acf.AT9))+A.aaR(A.acf.Colon
))+N$)+A.aaR(A.acf.BnX))+O5)+A.aaR(A.acf.AT8))+A.aaR(A.acf.Colon))+N$)+A.aaR(A.acf.
BnW);Ax=Bzx;}break;case 32:Ax=A.aaR(A.acf.BpB);break;case 69:Ax=A.aaR(A.acf.BjU);
break;case 44:Ax=A.aaR(A.acf.Bqg);break;case 37:Ax=A.aaR(A.acf.WarningResetWeightSettings
);break;case 38:Ax=A.aaR(A.acf.WarningResetTempThresholds);break;case 39:Ax=A.aaR(
A.acf.BnN);break;case 76:Ax=(A.aaR(A.acf.A4$)+O5)+A.aaR(A.acf.AT$);break;case 40:
Ax=A.aaR(A.acf.Bo0);break;case 75:Ax=A.aaR(A.acf.BoS);break;case 59:Ax=A.aaR(A.acf.
QuestionAddAnotherCalfMultiples);break;case 62:Ax=A.aaR(A.acf.BoU);break;case 96:
Ax=A.aaR(A.acf.BoV);break;case 60:Ax=A.aaR(A.acf.BoW);break;case 98:Ax=A.aaR(A.acf.
BoX);break;case 61:Ax=A.aaR(A.acf.Bo6);break;case 104:Ax=A.aaR(A.acf.Bo7);break;
case 65:Ax=A.aaR(A.acf.SuccessClearAnimalLoss);break;case 66:Ax=A.aaR(A.acf.WarningNoActionsForAnimalLoss
);break;case 67:Ax=A.aaR(A.acf.SuccessLinkTransponder);break;case 106:Ax=A.aaR(A.
acf.BoT);break;case 86:Ax=A.aaR(A.acf.SuccessUnlinkTransponder);break;case 68:Ax=
A.aaR(A.acf.Bo1);break;case 70:Ax=A.aaR(A.acf.Bic);break;case 71:Ax=A.aaR(A.acf.
Bo_);break;case 72:Ax=A.aaR(A.acf.Bo$);break;case 97:Ax=A.aaR(A.acf.Bie);break;case
100:Ax=A.aaR(A.acf.Bpa);break;case 99:Ax=A.aaR(A.acf.Bpb);break;case 88:Ax=A.aaR(
A.acf.Bid);break;case 89:Ax=A.aaR(A.acf.Bo8);break;case 90:Ax=A.aaR(A.acf.Bo9);break;
case 73:Ax=A.aaR(A.acf.WarningNoPremisesID);break;case 74:Ax=A.aaR(A.acf.WarningNoFlashDrivePresent
);break;case 94:Ax=A.aaR(A.acf.WarningNoBackupPathPresent);break;case 93:Ax=A.aaR(
A.acf.WarningNoBackupFilePresent);break;case 84:Ax=A.aaR(A.acf.Bit);break;case 87:
Ax=A.aaR(A.acf.Bqj);break;case 95:Ax=A.aaR(A.acf.Bp8);break;case 108:Ax=A.aaR(A.
acf.Bp_);break;case 109:Ax=A.aaR(A.acf.SuccessMassDeregistration);break;case 102:
Ax=A.aaR(A.acf.WarningParsedDateInFutureInvalid);break;case 101:Ax=A.aaR(A.acf.WarningParsingDateFailed
);break;case 103:Ax=A.aaR(A.acf.WarningParsingNaisIdFailed);break;case 105:Ax=A.
aaR(A.acf.Bqe);break;default:throw new Error(AHZ+AdB.toFixed());}return Ax;},Lt:
function(A5){var AdB=A5;var Ax=A.jV;switch(AdB){case 0:Ax=AXD;break;case 1:Ax=AXE;
break;case 58:Ax=AXF;break;case 2:Ax=AXG;break;case 3:Ax=AXH;break;case 77:Ax=AXI;
break;case 78:Ax=AH0;break;case 79:Ax=AH1;break;case 9:Ax=AH2;break;case 5:Ax=AH3;
break;case 8:Ax=Ayl;break;case 34:Ax=Aym;break;case 80:Ax=AH4;break;case 81:Ax=AXJ;
break;case 91:Ax=AH5;break;case 92:Ax=AXK;break;case 82:Ax=AH6;break;case 83:Ax=
AXL;break;case 10:Ax=AXM;break;case 4:Ax=AXN;break;case 7:Ax=AXO;break;case 33:Ax=
AXP;break;case 6:Ax=AXQ;break;case 27:Ax=AXR;break;case 64:Ax=AXS;break;case 28:
Ax=AXT;break;case 29:Ax=AXU;break;case 30:Ax=AXV;break;case 41:Ax=AXW;break;case
50:Ax=Ayn;break;case 51:Ax=AXX;break;case 42:Ax=AXY;break;case 45:Ax=Ayo;break;case
46:Ax=As7;break;case 57:Ax=UW;break;case 52:Ax=As8;break;case 53:Ax=AXZ;break;case
56:Ax=AX0;break;case 11:Ax=AX1;break;case 12:Ax=AH7;break;case 13:Ax=AX2;break;case
36:Ax=AH8;break;case 14:Ax=AX3;break;case 15:Ax=AX4;break;case 35:Ax=AX5;break;case
26:Ax=As9;break;case 23:Ax=AX6;break;case 24:Ax=AX7;break;case 49:Ax=AH9;break;case
16:Ax=AX8;break;case 17:Ax=AX9;break;case 18:Ax=AX_;break;case 19:Ax=AX$;break;case
20:Ax=AcQ;break;case 54:Ax=AYa;break;case 55:Ax=AYb;break;case 21:Ax=AYc;break;case
48:Ax=AYd;break;case 22:Ax=AH_;break;case 63:Ax=AYe;break;case 43:Ax=AYf;break;case
85:Ax=AYg;break;case 25:Ax=AYh;break;case 47:Ax=AYi;break;case 107:Ax=AYj;break;
case 31:Ax=AH$;break;case 32:Ax=AYk;break;case 69:Ax=AYl;break;case 44:Ax=AYm;break;
case 37:Ax=AIa;break;case 38:Ax=AIb;break;case 39:Ax=AYn;break;case 76:Ax=AYo;break;
case 40:Ax=AYp;break;case 75:Ax=AYq;break;case 59:Ax=Rl;break;case 62:Ax=As_;break;
case 96:Ax=AIc;break;case 60:Ax=AId;break;case 98:Ax=Aos;break;case 65:Ax=Aot;break;
case 61:Ax=Ayp;break;case 104:Ax=AYr;break;case 66:Ax=AIe;break;case 67:Ax=AYs;break;
case 106:Ax=AYt;break;case 86:Ax=AYu;break;case 68:Ax=AYv;break;case 70:Ax=AYw;break;
case 71:Ax=AYx;break;case 72:Ax=AYy;break;case 97:Ax=AYz;break;case 100:Ax=AYA;break;
case 99:Ax=AYB;break;case 88:Ax=AYC;break;case 89:Ax=AYD;break;case 90:Ax=AYE;break;
case 73:Ax=AYF;break;case 74:Ax=AYG;break;case 94:Ax=AYH;break;case 93:Ax=AYI;break;
case 84:Ax=Aou;break;case 87:Ax=AIf;break;case 95:Ax=AYJ;break;case 108:Ax=AIg;break;
case 109:Ax=AIh;break;case 102:Ax=Aah;break;case 101:Ax=AIi;break;case 103:Ax=AYK;
break;case 105:Ax=AIj;break;default:throw new Error(AHZ+AdB.toFixed());}return Ax;
},_Init:function(aArg){C.EnumToString._Init.call(this,aArg);this.__proto__=C.PopupIdToString;
},_className:"Device::PopupIdToString"};C.PopupParamSeparator=";";C.RatingMode={
Basic:0,Extended:1,LAST:2};C.TransponderType={UNDEFINED:0,AnimalId:1,FarmId:2,GroupId:
3,PersonId:4,LAST:5};C.TransponderProtocol={UNDEFINED:0,FDX:1,HDX:2,HDX_URBAN:3,
LAST:4};C.TransponderTypeToString={BI:function(A5){var Bgn=A5;var type=A.jV;switch(
Bgn){case 1:type=AYL;break;case 2:type=Ayq;break;case 3:type=AYM;break;case 4:type=
AYN;break;case 0:type=As1;break;default:throw new Error(Ayr+Bgn.toFixed());}return type;
},_Init:function(aArg){C.EnumToString._Init.call(this,aArg);this.__proto__=C.TransponderTypeToString;
},_className:"Device::TransponderTypeToString"};C.TransponderProtocolToString={BI:
function(A5){var Bgl=A5;var AAQ=A.jV;switch(Bgl){case 1:AAQ=AYO;break;case 2:AAQ=
AYP;break;case 3:AAQ=AYQ;break;case 0:AAQ=As1;break;default:throw new Error(AIk+
Bgl.toFixed());}return AAQ;},_Init:function(aArg){C.EnumToString._Init.call(this
,aArg);this.__proto__=C.TransponderProtocolToString;},_className:"Device::TransponderProtocolToString"
};C.Transponder={Id:0,TransponderProtocol:0,TransponderType:0,ATB:function(E){if(
this.TransponderType===E)return;this.TransponderType=E;A.abo([this,this.Blc,this.
ATB],0);},ATA:function(E){if(this.TransponderProtocol===E)return;this.TransponderProtocol=
E;A.abo([this,this.Blb,this.ATA],0);},OnSetId:function(E){if(this.Id===E)return;
this.Id=E;A.abo([this,this.QY,this.OnSetId],0);},AOO:function(){return A._GetAutoObject(
C.Converter).Bpz(this.Id);},BiB:function(){return A._GetAutoObject(C.Converter).
AxN(this.Id);},Blc:function(){return this.TransponderType;},Blb:function(){return this.
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
BI:function(A5){var BdO=A5;var Ap8=A.jV;switch(BdO){case 0:Ap8=A.aaR(A.acf.Bjr);
break;case 1:Ap8=A.aaR(A.acf.Pound);break;default:throw new Error(AIl+BdO.toFixed(
));}return Ap8;},_Init:function(aArg){C.EnumToString._Init.call(this,aArg);this.
__proto__=C.MassUnitToString;},_className:"Device::MassUnitToString"};C.MinWeightGain=
20;C.MaxWeightGain=2000;C.WeightGainStep=10;C.Int32ArrayWrapper={MC:10,Array:A.abi(
10,0,null),Zx:function(E){if(this.MC===E)return;if(E>10)throw new Error(AYR);this.
MC=E;},Set:function(aIndex,AK){if((aIndex<0)||(aIndex>=this.MC))throw new Error(
Ays);this.Array.Set(aIndex,AK);},Get:function(aIndex){if((aIndex<0)||(aIndex>=this.
MC))throw new Error(Ays);return this.Array.Get(aIndex);},AmW:function(){var Qr=0;
var O;for(O=0;O<this.MC;O=O+1)Qr=Qr+this.Get(O);return Qr;},toString:function(){
var A2F=this.Array.Get(0).toFixed();var O;for(O=1;O<this.MC;O=O+1)A2F=(A2F+O4)+this.
Array.Get(O).toFixed();return A2F;},EM:function(aString){var Hw=aString.indexOf(
String.fromCharCode(0x2C),0);var A1u=A.jV;var O=0;while(O<10){if(aString===A.jV)
this.Array.Set(O,0);else{if(Hw===-1){A1u=aString;aString=A.jV;}else{A1u=A.abV(aString
,Hw);aString=A.ab1(aString,0,Hw+1);}this.Array.Set(O,A.wz(A1u,0,10));Hw=aString.
indexOf(String.fromCharCode(0x2C),0);}O=O+1;}if(aString!==A.jV)A.ab5("%s",AIm);}
,Cq:function(){},Hi:function(){var O;for(O=0;O<this.MC;O=O+1)this.Set(O,0);},Avo:
function(A7){var O=0;while(O<this.MC){if(this.Array.Get(O)===A7)return O;O=O+1;}
return-1;},HH:function(){var O=0;var max=-1;while(O<this.MC){if(this.Array.Get(O
)>max)max=this.Array.Get(O);O=O+1;}return max;},_Init:function(aArg){(this.Array=[
]).__proto__=C.Int32ArrayWrapper.Array;this.__proto__=C.Int32ArrayWrapper;A.h7++;
},_Done:function(){this.__proto__=null;A.h7--;},_ReInit:function(){},_Mark:function(
D){var B;if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:
null,_className:"Device::Int32ArrayWrapper"};C.ActionToString={BI:function(A5){var
AzB=A5;var E6=A.jV;switch(AzB){case 4:E6=A.aaR(A.acf.Alarm);break;case 256:E6=A.
aaR(A.acf.Weighing);break;case 128:E6=A.aaR(A.acf.A59);break;case 16:E6=A.aaR(A.
acf.AMg);break;case 1:E6=A.aaR(A.acf.Temperature);break;case 32:E6=A.aaR(A.acf.AnimalLoss
);break;case 2:E6=A.aaR(A.acf.Rating);break;case 8:E6=A.aaR(A.acf.Asa);break;case
64:E6=A.aaR(A.acf.Unregister);break;case 512:E6=A.aaR(A.acf.ART);break;case 1024:
E6=A.aaR(A.acf.LinkTransponder);break;case 262144:E6=A.aaR(A.acf.UnlinkTransponder
);break;case 2048:E6=A.aaR(A.acf.Tt);break;case 4096:E6=A.aaR(A.acf.Calving);break;
case 8192:E6=A.aaR(A.acf.DryOff);break;case 16384:E6=A.aaR(A.acf.A7l);break;case
32768:E6=A.aaR(A.acf.AB4);break;case 524288:E6=A.aaR(A.acf.AB6);break;case 65536:
E6=A.aaR(A.acf.Delete);break;case 131072:E6=A.aaR(A.acf.A7m);break;case 0:E6=A.aaR(
A.acf.A7J);break;default:throw new Error(AhY+AzB.toFixed());}return E6;},Lt:function(
A5){var AzB=A5;var E6=A.jV;switch(AzB){case 4:E6=A.aaR(A.acf.Alarm);break;case 256:
E6=A.aaR(A.acf.Weighing);break;case 128:E6=A.aaR(A.acf.A59);break;case 16:E6=A.aaR(
A.acf.AMg);break;case 1:E6=A.aaR(A.acf.Temperature);break;case 32:E6=A.aaR(A.acf.
AnimalLoss);break;case 2:E6=A.aaR(A.acf.Rating);break;case 8:E6=A.aaR(A.acf.Asa);
break;case 64:E6=A.aaR(A.acf.Unregister);break;case 512:E6=A.aaR(A.acf.ART);break;
case 1024:E6=A.aaR(A.acf.LinkTransponder);break;case 262144:E6=A.aaR(A.acf.UnlinkTransponder
);break;case 2048:E6=A.aaR(A.acf.Tt);break;case 4096:E6=A.aaR(A.acf.Calving);break;
case 8192:E6=A.aaR(A.acf.DryOff);break;case 32768:E6=A.aaR(A.acf.AB4);break;case
524288:E6=A.aaR(A.acf.AB6);break;case 65536:E6=A.aaR(A.acf.Delete);break;case 16384:
case 131072:E6=A.aaR(A.acf.Bjz);break;case 0:E6=A.aaR(A.acf.A7J);break;default:throw new
Error(AhY+AzB.toFixed());}return E6;},_Init:function(aArg){C.EnumToString._Init.
call(this,aArg);this.__proto__=C.ActionToString;},_className:"Device::ActionToString"
};C.ACTIONS_COUNT=19;C.PopupTimeout=2000;C.ITable={Filter:null,Id:2,CE:function(
Ad,A3){return 0;},VU:function(Ad,A3){return A.jV;},Akn:function(G){A.we(this,0);
A.pe([this,this.D5],this);},H1:function(Ad,A3){return false;},HF:function(Ad,A3){
return this.Sf(Ad,A3);},OnSetId:function(E){if(this.Id===E)return;this.Id=E;},Ca:
function(){return 0;},Bl:function(E){if(this.Filter===E)return;this.Filter=E;A.abo([
this,this.Fj,this.Fn],0);},Fn:function(Aq){this.Bl(Aq);},I2:function(Ad,A3){var BA7=
this.VV(Ad,A3);return A._GetAutoObject(C.Converter).A$x(BA7);},VV:function(Ad,A3
){return 0;},Sf:function(Ad,A3){return 0;},A6I:function(Ad,A3){return this.CE(Ad
,A3);},Oy:function(){var Jk=0;var BBS=this.Id;return Jk;},OA:function(AoQ){var HA=
0;var BBS=this.Id;return HA===1;},YE:function(){return-1;},ZJ:function(Ad,A3,C0){
return false;},Hj:function(Ad,A3,C0){return false;},ZI:function(Ad,A3,C0){return false;
},MB:function(Ad,A3,C0){return false;},ZH:function(Ad,A3,C0){return false;},Acn:
function(Ad,A3,C0){return this.ZI(Ad,A3,C0);},AkR:function(Ad,A3,C0){var BA8=A._GetAutoObject(
C.Converter).AdY(C0);return this.ZJ(Ad,A3,BA8);},A_$:function(Ad,A3,C0){return this.
Hj(Ad,A3,C0);},AOI:function(Ad,A3){return this.CE(Ad,A3);},Biz:function(Ad,A3){return this.
CE(Ad,A3);},Boq:function(Ad,A3,C0){return this.Hj(Ad,A3,C0);},Bom:function(Ad,A3
,C0){return this.Hj(Ad,A3,C0);},Lc:function(aColumn,A7){return-1;},AmU:function(
Ad,A3){return this.CE(Ad,A3);},Bok:function(Ad,A3,C0){return this.Hj(Ad,A3,C0);}
,ACX:function(Ad,A3){return this.CE(Ad,A3);},AUt:function(Ad,A3,MK){return this.
Hj(Ad,A3,MK);},D5:function(G){this.Bya();},Bya:function(){return-1;},KN:function(
Ad,A3){return 0;},SK:function(Ad,A3,C0){return false;},AgQ:function(aColumn,A7){
return-1;},Hi:function(){return false;},BiA:function(Ad,A3){var BA9=this.CE(Ad,A3
);return A._GetAutoObject(C.Converter).Bi1(BA9);},BiF:function(Ad,A3){return this.
CE(Ad,A3);},AOQ:function(Ad,A3){return this.CE(Ad,A3);},Boo:function(Ad,A3,C0){var
BA_=A._GetAutoObject(C.Converter).A5g(C0);return this.Hj(Ad,A3,BA_);},Bop:function(
Ad,A3,C0){return this.Hj(Ad,A3,C0);},Bow:function(Ad,A3,C0){return this.Hj(Ad,A3
,C0);},AjJ:function(aColumn,A7){return false;},Aei:function(aColumn,A7){return false;
},BiO:function(Ad,A3){return this.CE(Ad,A3);},Bou:function(Ad,A3,C0){return this.
Hj(Ad,A3,C0);},Lh:function(){return this.QE()>=this.HG();},HG:function(){return 0;
},Abr:function(){return-1;},QE:function(){return 0;},Fj:function(){return this.Filter;
},_Init:function(aArg){this.__proto__=C.ITable;A.h7++;},_Done:function(){this.__proto__=
null;A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((B=this.Filter)&&(
B._cycle!=D))B._Mark(B._cycle=D);if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D
);},I:null,_cycle:0,_observers:null,_className:"Device::ITable"};C.MaxAutoActionsCount=
4;C.WeightRecordingMode={Automatic:0,Manual:1,LAST:2};C.WeightRecordingModeToString={
BI:function(A5){var Vb=A5;var Nu=A.jV;switch(Vb){case 0:Nu=A.aaR(A.acf.Automatic
);break;case 1:Nu=A.aaR(A.acf.Manual);break;default:throw new Error(AYS+Vb.toFixed(
));}return Nu;},_Init:function(aArg){C.EnumToString._Init.call(this,aArg);this.__proto__=
C.WeightRecordingModeToString;},_className:"Device::WeightRecordingModeToString"
};C.BooleanToAutoOnOff={BI:function(A5){switch(A5){case 0:return A.aaR(A.acf.Off
);case 1:return A.aaR(A.acf.Aa2);default:return Ayk+A5.toFixed();}},_Init:function(
aArg){C.EnumToString._Init.call(this,aArg);this.__proto__=C.BooleanToAutoOnOff;}
,_className:"Device::BooleanToAutoOnOff"};C.WeightStep=100;C.WeightRecordingScope={
CurrentWeightOnly:0,BirthWeightOnly:1,BirthAndCurrentWeight:2,NoWeightRecording:
3,LAST:4};C.WeightRecordingScopeToString={BI:function(A5){var BfP=A5;var AA4=A.jV;
switch(BfP){case 0:AA4=A.aaR(A.acf.BhC);break;case 1:AA4=A.aaR(A.acf.Bhf);break;
case 2:AA4=A.aaR(A.acf.Bhb);break;case 3:AA4=A.aaR(A.acf.Bj1);break;default:throw new
Error(Aow+BfP.toFixed());}return AA4;},_Init:function(aArg){C.EnumToString._Init.
call(this,aArg);this.__proto__=C.WeightRecordingScopeToString;},_className:"Device::WeightRecordingScopeToString"
};C.BodyTemperature={Undertemperature:0,Normal:1,Elevated:2,Fever:3,LAST:4};C.JH={
XP:0,Temperature:1,Rating:2,Afr:3,BCv:4,BC$:5,BFU:6,BDO:7,BED:8,BDm:9,BEB:10,BE3:
11,BE4:12,BFZ:13,LAST:14};C.AnimalListContentToString={BI:function(A5){var Bce=A5;
var S$=A.jV;switch(Bce){case 0:S$=AYT;break;case 2:S$=AIn;break;case 1:S$=AIo;break;
case 3:S$=AYU;break;case 4:S$=AYV;break;case 5:S$=AIp;break;case 6:S$=AYW;break;
case 7:S$=AYX;break;case 8:S$=AYY;break;case 9:S$=AYZ;break;case 10:S$=AY0;break;
case 11:S$=AY1;break;case 12:S$=AY2;break;case 13:S$=AY3;break;default:throw new
Error(AY4+Bce.toFixed());}return S$;},_Init:function(aArg){C.EnumToString._Init.
call(this,aArg);this.__proto__=C.AnimalListContentToString;},_className:"Device::AnimalListContentToString"
};C.GenderFilterCriterion={A4:0,Abj:function(){var Av=A._NewObject(C.GenderFilterCriterion
,0);Av.Fg(this);return Av;},Fg:function(AH){C.FilterCriterion.Fg.call(this,AH);var
Av=(C.GenderFilterCriterion.isPrototypeOf(AH)?AH:null);if(!!Av)this.A4=Av.A4;},_Init:
function(aArg){C.FilterCriterion._Init.call(this,aArg);this.__proto__=C.GenderFilterCriterion;
},_className:"Device::GenderFilterCriterion"};C.AnimalTypeFilterCriterion={A4:0,
Abj:function(){var Av=A._NewObject(C.AnimalTypeFilterCriterion,0);Av.Fg(this);return Av;
},Fg:function(AH){C.FilterCriterion.Fg.call(this,AH);var Av=(C.AnimalTypeFilterCriterion.
isPrototypeOf(AH)?AH:null);if(!!Av)this.A4=Av.A4;},Initialize:function(A3,Eb,A7,
P_){this.EJ=A3;this.Operator=Eb;this.A4=A7;this.YH=P_;return this;},_Init:function(
aArg){C.FilterCriterion._Init.call(this,aArg);this.__proto__=C.AnimalTypeFilterCriterion;
},_className:"Device::AnimalTypeFilterCriterion"};C.BCH={Auy:0,BCG:1,BEn:2,A_R:3
,A5o:4,BFC:5,BC_:6,BFB:7,LinkTransponder:8,Tt:9,Weighing:10,Calving:11,LinkNaisId:
12,BE2:13,ClearBirthNoticePending:14,DeleteAnimal:15,ScanNaisId:16,Edit:17,ClearPurchaseNoticePending:
18};C.AutoRegistrationModeToString={BI:function(A5){var Vb=A5;var Nu=A.jV;switch(
Vb){case 0:Nu=A.aaR(A.acf.Bhu);break;case 1:Nu=A.aaR(A.acf.Bi5);break;case 2:Nu=
A.aaR(A.acf.Off);break;default:throw new Error(AY5+Vb.toFixed());}return Nu;},_Init:
function(aArg){C.EnumToString._Init.call(this,aArg);this.__proto__=C.AutoRegistrationModeToString;
},_className:"Device::AutoRegistrationModeToString"};C.AutoRegistrationMode={UserConfirmed:
0,Background:1,Off:2,LAST:3};C.AssessmentFilterCriterion={A4:0,Abj:function(){var
Av=A._NewObject(C.AssessmentFilterCriterion,0);Av.Fg(this);return Av;},Fg:function(
AH){C.FilterCriterion.Fg.call(this,AH);var Av=(C.AssessmentFilterCriterion.isPrototypeOf(
AH)?AH:null);if(!!Av)this.A4=Av.A4;},Initialize:function(A3,Eb,A7,P_){this.EJ=A3;
this.Operator=Eb;this.A4=A7;this.YH=P_;return this;},_Init:function(aArg){C.FilterCriterion.
_Init.call(this,aArg);this.__proto__=C.AssessmentFilterCriterion;},_className:"Device::AssessmentFilterCriterion"
};C.D9={XP:0,Temperature:1,Afr:2,Rating:3,LAST:4};C.FactoryResetScope={DeviceAndAnimalData:
0,AnimalDataOnly:1,LAST:2};C.FactoryResetScopeToString={BI:function(A5){switch(A5
){case 0:return A.aaR(A.acf.DeviceAndAnimalData);case 1:return A.aaR(A.acf.AnimalDataOnly
);default:return AY6+A5.toFixed();}},_Init:function(aArg){C.EnumToString._Init.call(
this,aArg);this.__proto__=C.FactoryResetScopeToString;},_className:"Device::FactoryResetScopeToString"
};C.AU4={Cq:function(){A._GetAutoObject(C.Device).Ar5(this.toString());},Init:function(
aArg){var B;A.zX([this,this.BeW],[B=A._GetAutoObject(C.Device),B.A83,B.Ba$],0);this.
BeW(this);},BeW:function(G){this.EM(A._GetAutoObject(C.Device).AGT);A.we(this,0);
},_Init:function(aArg){C.Int32ArrayWrapper._Init.call(this,aArg);this.__proto__=
C.AU4;this.Zx(3);this.Init(aArg);},_className:"Device::TemperaturesLowClass"};C.
AU3={Init:function(aArg){var B;A.zX([this,this.BeU],[B=A._GetAutoObject(C.Device
),B.A82,B.Ba_],0);this.BeU(this);},Cq:function(){A._GetAutoObject(C.Device).Ar4(
this.toString());},BeU:function(G){this.EM(A._GetAutoObject(C.Device).AGS);A.we(
this,0);},_Init:function(aArg){C.Int32ArrayWrapper._Init.call(this,aArg);this.__proto__=
C.AU3;this.Zx(3);this.Init(aArg);},_className:"Device::TemperaturesHighClass"};C.
AMz={Init:function(aArg){var B;A.zX([this,this.Ben],[B=A._GetAutoObject(C.Device
),B.A8h,B.BaQ],0);this.Ben(this);},Ben:function(G){this.EM(A._GetAutoObject(C.Device
).ABE);A.we(this,0);},_Init:function(aArg){C.Int32ArrayWrapper._Init.call(this,aArg
);this.__proto__=C.AMz;this.Zx(3);this.Init(aArg);},_className:"Device::AnimalTypesClass"
};C.UInt64FilterCriterion={A4:0,Abj:function(){var Av=A._NewObject(C.UInt64FilterCriterion
,0);Av.Fg(this);return Av;},Fg:function(AH){C.FilterCriterion.Fg.call(this,AH);var
Av=(C.UInt64FilterCriterion.isPrototypeOf(AH)?AH:null);if(!!Av)this.A4=Av.A4;},Initialize:
function(A3,Eb,A7,P_){this.EJ=A3;this.Operator=Eb;this.A4=A7;this.YH=P_;return this;
},_Init:function(aArg){C.FilterCriterion._Init.call(this,aArg);this.__proto__=C.
UInt64FilterCriterion;},_className:"Device::UInt64FilterCriterion"};C.BooleanToAssignedUnassignedString={
BI:function(A5){switch(A5){case 0:return A.aaR(A.acf.Akm);case 1:return A.aaR(A.
acf.BgS);default:return Ayk+A5.toFixed();}},_Init:function(aArg){C.EnumToString.
_Init.call(this,aArg);this.__proto__=C.BooleanToAssignedUnassignedString;},_className:
"Device::BooleanToAssignedUnassignedString"};C.C7={UNDEFINED:0,AT:1,BA:2,BE:3,BCM:
4,BC1:5,BC2:6,BC3:7,BC4:8,BC5:9,BDd:10,BDe:11,BDn:12,BDo:13,BDD:14,FR:15,GR:16,BDQ:
17,BDR:18,BD2:19,BD3:20,BD8:21,BD9:22,BD_:23,BD$:24,BEf:25,BEt:26,BEu:27,BEJ:28,
BEK:29,BE0:30,BE1:31,BFf:32,BFg:33,BFh:34,BFv:35,BFw:36,BFN:37,A$y:38,BFO:39,LAST:
40};C.CountryToString={BI:function(A5){var J4=A5;var FB=A.jV;switch(J4){case 1:FB=
A.aaR(A.acm.Bg5);break;case 2:FB=A.aaR(A.acm.Bhg);break;case 3:FB=A.aaR(A.acm.Bha
);break;case 4:FB=A.aaR(A.acm.Bhi);break;case 5:FB=A.aaR(A.acm.Bhk);break;case 6:
FB=A.aaR(A.acm.Bpf);break;case 7:FB=A.aaR(A.acm.Bhn);break;case 8:FB=A.aaR(A.acm.
BhD);break;case 9:FB=A.aaR(A.acm.BhE);break;case 10:FB=A.aaR(A.acm.Biu);break;case
11:FB=A.aaR(A.acm.BhK);break;case 12:FB=A.aaR(A.acm.Bh$);break;case 13:FB=A.aaR(
A.acm.BoJ);break;case 14:FB=A.aaR(A.acm.Bii);break;case 15:FB=A.aaR(A.acm.Biq);break;
case 16:FB=A.aaR(A.acm.BiW);break;case 17:FB=A.aaR(A.acm.BhB);break;case 18:FB=A.
aaR(A.acm.Bi2);break;case 19:FB=A.aaR(A.acm.Bja);break;case 20:FB=A.aaR(A.acm.Bjm
);break;case 21:FB=A.aaR(A.acm.Bjo);break;case 22:FB=A.aaR(A.acm.BjA);break;case
23:FB=A.aaR(A.acm.BjD);break;case 24:FB=A.aaR(A.acm.Bjx);break;case 25:FB=A.acm.
BjF;break;case 26:FB=A.aaR(A.acm.BjV);break;case 27:FB=A.aaR(A.acm.Bj2);break;case
28:FB=A.aaR(A.acm.BnG);break;case 29:FB=A.aaR(A.acm.BnH);break;case 30:FB=A.aaR(
A.acm.Bn9);break;case 31:FB=A.aaR(A.acm.Bn$);break;case 32:FB=A.aaR(A.acm.Bpe);break;
case 33:FB=A.aaR(A.acm.BoI);break;case 34:FB=A.aaR(A.acm.BoH);break;case 35:FB=A.
aaR(A.acm.BpG);break;case 36:FB=A.aaR(A.acm.Bpo);break;case 37:FB=A.aaR(A.acm.BpK
);break;case 38:FB=A.aaR(A.acm.A$y);break;case 39:FB=A.aaR(A.acm.BpJ);break;case
0:FB=Aox;break;default:throw new Error(Aoo+J4.toFixed());}return FB;},Lt:function(
A5){var J4=A5;var BP=A.jV;switch(J4){case 1:BP=S4;break;case 2:BP=Z4;break;case 3:
BP=UO;break;case 4:BP=W1;break;case 5:BP=Ir;break;case 6:BP=Aab;break;case 7:BP=
UP;break;case 8:BP=Z6;break;case 9:BP=W3;break;case 10:BP=P5;break;case 11:BP=Z7;
break;case 12:BP=Z8;break;case 13:BP=Aaa;break;case 14:BP=UQ;break;case 15:BP=W4;
break;case 16:BP=Z9;break;case 17:BP=W2;break;case 18:BP=O3;break;case 19:BP=Ri;
break;case 20:BP=W5;break;case 21:BP=W6;break;case 22:BP=W8;break;case 23:BP=Z_;
break;case 24:BP=W7;break;case 25:BP=W9;break;case 26:BP=W_;break;case 27:BP=S5;
break;case 28:BP=UR;break;case 29:BP=US;break;case 30:BP=AcM;break;case 31:BP=S6;
break;case 32:BP=W$;break;case 33:BP=Afx;break;case 34:BP=Z$;break;case 35:BP=Aac;
break;case 36:BP=Z5;break;case 37:BP=AhQ;break;case 38:BP=J0;break;case 39:BP=Aad;
break;case 0:BP=Aox;break;default:throw new Error(Aoo+J4.toFixed());}return BP;}
,_Init:function(aArg){C.EnumToString._Init.call(this,aArg);this.__proto__=C.CountryToString;
},_className:"Device::CountryToString"};C.EaseOfDelivery={Unspecified:0,Easy:1,Moderate:
2,Difficult:3,Surgery:4,LAST:5};C.EaseOfDeliveryToString={BI:function(A5){var BcN=
A5;var AtI=A.jV;switch(BcN){case 0:AtI=A.aaR(A.acf.Unspecified);break;case 1:AtI=
A.aaR(A.acf.Easy);break;case 2:AtI=A.aaR(A.acf.Moderate);break;case 3:AtI=A.aaR(
A.acf.Difficult);break;case 4:AtI=A.aaR(A.acf.Surgery);break;default:throw new Error(
AY7+BcN.toFixed());}return AtI;},_Init:function(aArg){C.EnumToString._Init.call(
this,aArg);this.__proto__=C.EaseOfDeliveryToString;},_className:"Device::EaseOfDeliveryToString"
};C.WhereAbouts={UNB:0,EZU:1,EMA:2,VZU:3,VMA:4,VIV:5,TOT:6,V48:7,V3T:8,MGE:9,VKB:
10,LAST:11};C.WhereAboutsToString={BI:function(A5){var BgG=A5;var AaS=A.jV;switch(
BgG){case 0:AaS=A.aaR(A.acf.Unknown);break;case 1:AaS=A.aaR(A.acf.BpT);break;case
2:AaS=A.aaR(A.acf.BpS);break;case 3:AaS=A.aaR(A.acf.Bp1);break;case 4:AaS=A.aaR(
A.acf.Bp0);break;case 5:AaS=A.aaR(A.acf.BpY);break;case 6:AaS=A.aaR(A.acf.BpV);break;
case 7:AaS=A.aaR(A.acf.BpX);break;case 8:AaS=A.aaR(A.acf.BpW);break;case 9:AaS=A.
aaR(A.acf.BpU);break;case 10:AaS=A.aaR(A.acf.BpZ);break;default:throw new Error(
AY8+BgG.toFixed());}return AaS;},_Init:function(aArg){C.EnumToString._Init.call(
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
}if(E){this.timer=A._GetAutoObject(A.acl.Aef);A.zV([this,this.Mc],this.timer,0);
this.Ec=-1;}},_Init:function(aArg){this.__proto__=C.TE;A.h7++;},_Done:function(){
this.__proto__=null;A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((B=
this.timer)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Q)&&((B=B[0])._cycle!=
D))B._Mark(B._cycle=D);if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null
,_cycle:0,_observers:null,_className:"Device::BoolEffect"};C.Ih={AnimalId:0,TransponderId:
1,BEi:2,BEh:3,BEl:4,BEk:5};C.AuZ={BCK:0,BDg:1};C.AnimalIdGenerationMethodToString={
BI:function(A5){var Alr=A5;var AoZ=A.jV;switch(Alr){case 0:AoZ=A.aaR(A.acf.Ud);break;
case 1:AoZ=A.aaR(A.acf.Transponder);break;case 3:AoZ=(A.aaR(A.acf.Manual)+N$)+A.
aaR(A.acf.Male);break;case 2:AoZ=(A.aaR(A.acf.Manual)+N$)+A.aaR(A.acf.Female);break;
case 4:AoZ=(A.aaR(A.acf.Manual)+N$)+A.aaR(A.acf.Unknown);break;case 5:AoZ=(A.aaR(
A.acf.Manual)+N$)+Aai;break;default:throw new Error(AY9+Alr.toFixed());}return AoZ;
},_Init:function(aArg){C.EnumToString._Init.call(this,aArg);this.__proto__=C.AnimalIdGenerationMethodToString;
},_className:"Device::AnimalIdGenerationMethodToString"};C.DirectionOfCountingToString={
BI:function(A5){var AzA=A5;var A1C=A.jV;switch(AzA){case 0:A1C=Ayt;break;case 1:
A1C=AY_;break;default:throw new Error(AY$+AzA.toFixed());}return A1C;},_Init:function(
aArg){C.EnumToString._Init.call(this,aArg);this.__proto__=C.DirectionOfCountingToString;
},_className:"Device::DirectionOfCountingToString"};C.EnumToIcon={AsG:function(A5
){throw new Error(As0+A5.toFixed());},AsH:function(A5){throw new Error(As0+A5.toFixed(
));},_Init:function(aArg){this.__proto__=C.EnumToIcon;A.h7++;},_Done:function(){
this.__proto__=null;A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((B=
this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:
"Device::EnumToIcon"};C.Aee={AsG:function(A5){return A.aaL(A.ach.AUR);},AsH:function(
A5){var AzA=A5;var RA=-1;switch(AzA){case 0:RA=3;break;case 1:RA=2;break;default:
throw new Error(AIr+AzA.toFixed());}return RA;},_Init:function(aArg){C.EnumToIcon.
_Init.call(this,aArg);this.__proto__=C.Aee;},_className:"Device::DirectionOfCountingToIcon"
};C.AdV={AsG:function(A5){return A.aaL(A.ach.AUP);},AsH:function(A5){var Alr=A5;
var RA=-1;switch(Alr){case 0:RA=0;break;case 1:RA=6;break;case 3:RA=4;break;case
2:RA=5;break;case 4:RA=2;break;case 5:RA=3;break;default:throw new Error(AIr+Alr.
toFixed());}return RA;},_Init:function(aArg){C.EnumToIcon._Init.call(this,aArg);
this.__proto__=C.AdV;},_className:"Device::AnimalIdGenerationMethodToIcon"};C.Pt={
UNDEFINED:0,SH:1,AOT:2,ARD:3,AOS:4,A7E:5,HE:6,A_P:7,A46:8,AMK:9,AUj:10,BE:11,BB:
12,A7r:13,AUk:14,AUl:15,AUW:16};C.GermanStateToString={BI:function(A5){var Bp=A5;
var GC=A.jV;switch(Bp){case 1:GC=A.aaR(A.acp.SH);break;case 2:GC=A.aaR(A.acp.AOT
);break;case 3:GC=A.aaR(A.acp.ARD);break;case 4:GC=A.aaR(A.acp.AOS);break;case 5:
GC=A.aaR(A.acp.A7E);break;case 6:GC=A.aaR(A.acp.HE);break;case 7:GC=A.aaR(A.acp.
A_P);break;case 8:GC=A.aaR(A.acp.A46);break;case 9:GC=A.aaR(A.acp.AMK);break;case
10:GC=A.aaR(A.acp.AUj);break;case 11:GC=A.aaR(A.acp.BE);break;case 12:GC=A.aaR(A.
acp.BB);break;case 13:GC=A.aaR(A.acp.A7r);break;case 14:GC=A.aaR(A.acp.AUk);break;
case 15:GC=A.aaR(A.acp.AUl);break;case 16:GC=A.aaR(A.acp.AUW);break;case 0:GC=Aox;
break;default:throw new Error(As$+Bp.toFixed());}return GC;},Lt:function(A5){var
Bp=A5;var GC=A.jV;switch(Bp){case 1:GC=A.aaR(A.acp.Boa);break;case 2:GC=A.aaR(A.
acp.AOT);break;case 3:GC=A.aaR(A.acp.ARD);break;case 4:GC=A.aaR(A.acp.AOS);break;
case 5:GC=A.aaR(A.acp.BjS);break;case 6:GC=A.aaR(A.acp.HE);break;case 7:GC=A.aaR(
A.acp.BnR);break;case 8:GC=A.aaR(A.acp.Bg8);break;case 9:GC=A.aaR(A.acp.AMK);break;
case 10:GC=A.aaR(A.acp.AUj);break;case 11:GC=A.aaR(A.acp.BE);break;case 12:GC=A.
aaR(A.acp.BB);break;case 13:GC=A.aaR(A.acp.BjE);break;case 14:GC=A.aaR(A.acp.AUk
);break;case 15:GC=A.aaR(A.acp.AUl);break;case 16:GC=A.aaR(A.acp.AUW);break;case
0:GC=Aox;break;default:throw new Error(As$+Bp.toFixed());}return GC;},Bpt:function(
A5){var Bp=A5;var Ge=-1;switch(Bp){case 0:Ge=0;break;case 1:Ge=1;break;case 2:Ge=
2;break;case 3:Ge=3;break;case 4:Ge=4;break;case 5:Ge=5;break;case 6:Ge=6;break;
case 7:Ge=7;break;case 8:Ge=8;break;case 9:Ge=9;break;case 10:Ge=10;break;case 11:
Ge=11;break;case 12:Ge=12;break;case 13:Ge=13;break;case 14:Ge=14;break;case 15:
Ge=15;break;case 16:Ge=16;break;default:throw new Error(As$+Bp.toFixed());}return Ge;
},Bpu:function(A5){var Bp=A5;var Ge=A.jV;switch(Bp){case 1:Ge=AZa;break;case 2:Ge=
AZb;break;case 3:Ge=Ata;break;case 4:Ge=Atb;break;case 5:Ge=Atc;break;case 6:Ge=
Atd;break;case 7:Ge=Ayu;break;case 8:Ge=Aoy;break;case 9:Ge=AZc;break;case 10:Ge=
AZd;break;case 11:Ge=UO;break;case 12:Ge=AZe;break;case 13:Ge=AZf;break;case 14:
Ge=AZg;break;case 15:Ge=AZh;break;case 16:Ge=AZi;break;case 0:Ge=Aox;break;default:
throw new Error(As$+Bp.toFixed());}return Ge;},_Init:function(aArg){C.EnumToString.
_Init.call(this,aArg);this.__proto__=C.GermanStateToString;},_className:"Device::GermanStateToString"
};C.EartagNrAssignmentMode={OneSingleRange:0,TwoNumberRanges:1,LAST:2};C.EartagNrAssignmentModeToString={
Lt:function(A5){var Vb=A5;var Nu=A.jV;switch(Vb){case 0:Nu=AZj;break;case 1:Nu=AZk;
break;default:throw new Error(AIs+Vb.toFixed());}return Nu;},BI:function(A5){var
Vb=A5;var Nu=A.jV;switch(Vb){case 0:Nu=A.aaR(A.acf.Bnz);break;case 1:Nu=A.aaR(A.
acf.BpI);break;default:throw new Error(AIs+Vb.toFixed());}return Nu;},_Init:function(
aArg){C.EnumToString._Init.call(this,aArg);this.__proto__=C.EartagNrAssignmentModeToString;
},_className:"Device::EartagNrAssignmentModeToString"};C.BCE={BEz:0,BEp:1,BDx:2,
BDy:3,BDz:4,BFx:5};C.EnumToCodeset={AmE:function(Ah1){throw new Error(AZl+Ah1.toFixed(
));},Aeh:function(A5){throw new Error(As0+A5.toFixed());},AqT:function(){A.ab5("%s"
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
Bv=0;}return Bv;},Aeh:function(A5){var Bv=A5;var BM=0;switch(Bv){case 0:BM=0;break;
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
case 98:BM=111;break;default:throw new Error(AZm+Bv.toFixed());}return BM;},AqT:
function(){return 0;},HH:function(){return 111;},_Init:function(aArg){C.EnumToCodeset.
_Init.call(this,aArg);this.__proto__=C.M1;},_className:"Device::BreedToHitCodeset"
};C.ReasonOfLeaving={Unknown:0,A$k:1,RJ:2,A_J:3,A65:4,BEI:5,A$z:6,A7A:7,A5n:8,A_F:
9,A7y:10,A5r:11,BEY:12,BEZ:13,LAST:14};C.ReasonOfLeavingToString={BI:function(A5
){var AdC=A5;var Tn=A.jV;switch(AdC){case 0:Tn=A.aaR(A.acf.Unknown);break;case 1:
Tn=A.aaR(A.acf.A$k);break;case 2:Tn=A.aaR(A.acf.RJ);break;case 3:Tn=A.aaR(A.acf.
A_J);break;case 4:Tn=A.aaR(A.acf.A65);break;case 5:Tn=A.aaR(A.acf.BnA);break;case
6:Tn=A.aaR(A.acf.A$z);break;case 7:Tn=A.aaR(A.acf.A7A);break;case 8:Tn=A.aaR(A.acf.
A5n);break;case 9:Tn=A.aaR(A.acf.A_F);break;case 10:Tn=A.aaR(A.acf.A7y);break;case
11:Tn=A.aaR(A.acf.A5r);break;case 12:Tn=A.aaR(A.acf.BnL);break;case 13:Tn=A.aaR(
A.acf.BnK);break;default:throw new Error(AZn+AdC.toFixed());}return Tn;},_Init:function(
aArg){C.EnumToString._Init.call(this,aArg);this.__proto__=C.ReasonOfLeavingToString;
},_className:"Device::ReasonOfLeavingToString"};C.Ahu={AmE:function(Ah1){var Pc;
switch(Ah1){case 1:Pc=1;break;case 2:Pc=2;break;case 3:Pc=3;break;case 4:Pc=4;break;
case 5:Pc=5;break;case 6:Pc=6;break;case 7:Pc=7;break;case 8:Pc=8;break;case 9:Pc=
9;break;case 10:Pc=10;break;case 11:Pc=11;break;case 12:Pc=12;break;case 13:Pc=13;
break;default:Pc=0;}return Pc;},Aeh:function(A5){var Pc=A5;var Jg=0;switch(Pc){case
0:Jg=0;break;case 2:Jg=2;break;case 8:Jg=8;break;case 11:Jg=11;break;case 4:Jg=4;
break;case 10:Jg=10;break;case 7:Jg=7;break;case 5:Jg=5;break;case 9:Jg=9;break;
case 3:Jg=3;break;case 12:Jg=12;break;case 13:Jg=13;break;case 1:Jg=1;break;case
6:Jg=6;break;default:throw new Error(AIu+Pc.toFixed());}return Jg;},AqT:function(
){return 0;},HH:function(){return 13;},_Init:function(aArg){C.EnumToCodeset._Init.
call(this,aArg);this.__proto__=C.Ahu;},_className:"Device::ReasonOfLeavingToCodeset"
};C.KY={AmE:function(Ah1){var K9;switch(Ah1){case 1:K9=1;break;case 2:K9=2;break;
case 3:K9=3;break;case 4:K9=4;break;case 5:K9=5;break;case 6:K9=6;break;case 7:K9=
7;break;case 8:K9=8;break;case 9:K9=9;break;case 10:K9=10;break;default:K9=0;}return K9;
},Aeh:function(A5){var K9=A5;var Jg=0;switch(K9){case 0:Jg=0;break;case 2:Jg=2;break;
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
AI.Oy();if(Jk<=0)A.ab5("%s",Xb);else{if(this.Am7())this.CL=AI.YE();AI.Hj(this.CL
,0,this.Year);AI.Hj(this.CL,1,this.Deregistrations);AI.Hj(this.CL,2,this.Deaths);
AI.OA(Jk);}}return HA;},Gm:function(){C.Row.Gm.call(this);this.AkG(-1);},Hi:function(
){C.Row.Hi.call(this);this.AkG(0);this.Awy(0);this.Awx(0);},Awy:function(E){if(this.
Deregistrations===E)return;this.Deregistrations=E;A.abo([this,this.Bku,this.Awy]
,0);},Awx:function(E){if(this.Deaths===E)return;this.Deaths=E;A.abo([this,this.Bks
,this.Awx],0);},AkG:function(E){if(this.Year===E)return;this.Year=E;A.abo([this,
this.Arz,this.AkG],0);},Bku:function(){return this.Deregistrations;},Bks:function(
){return this.Deaths;},Arz:function(){return this.Year;},_Init:function(aArg){C.
Row._Init.call(this,aArg);this.__proto__=C.CalfDeregistrations;this.TableId=4;},
_className:"Device::CalfDeregistrations"};C.AuX={Undefined:0,Display:1,A_O:2,A_1:
3,A$S:4,BDS:5,BE9:6,BFI:7,BEg:8,BC6:9,BCt:10,A6r:11,A_Q:12,BFQ:13,A7D:14,BFT:15};
C.DeviceComponentToString={BI:function(A5){var BcG=A5;var Qf=A.jV;switch(BcG){case
0:Qf=Ayv;break;case 10:Qf=A.aaR(A.acf.BgH);break;case 9:Qf=A.aaR(A.acf.Bhm);break;
case 1:Qf=A.aaR(A.acf.Bh1);break;case 11:Qf=A.aaR(A.acf.A6r);break;case 5:Qf=A.aaR(
A.acf.Bp2);break;case 8:Qf=A.aaR(A.acf.Bh3);break;case 14:Qf=A.aaR(A.acf.A7D);break;
case 2:Qf=A.aaR(A.acf.A_O);break;case 12:Qf=A.aaR(A.acf.A_Q);break;case 6:Qf=A.aaR(
A.acf.BnQ);break;case 3:Qf=A.aaR(A.acf.A_1);break;case 7:Qf=A.aaR(A.acf.Bh4);break;
case 13:Qf=A.aaR(A.acf.BhM);break;case 15:Qf=A.aaR(A.acf.Bp6);break;case 4:Qf=A.
aaR(A.acf.A$S);break;default:throw new Error(AZo+BcG.toFixed());}return Qf;},_Init:
function(aArg){C.EnumToString._Init.call(this,aArg);this.__proto__=C.DeviceComponentToString;
},_className:"Device::DeviceComponentToString"};C.AgK={AmE:function(Ah1){return Ah1;
},Aeh:function(A5){return A5;},AqT:function(){return 0;},HH:function(){return 4;
},_Init:function(aArg){C.EnumToCodeset._Init.call(this,aArg);this.__proto__=C.AgK;
},_className:"Device::EaseOfDeliveryToCodeset"};C.AeQ={AsG:function(A5){return A.
aaL(A.ach.AP1);},AsH:function(A5){var BcS=A5;var RA=-1;switch(BcS){case 0:RA=0;break;
case 1:RA=1;break;case 2:RA=2;break;default:throw new Error(Ayw+BcS.toFixed());}
return RA;},_Init:function(aArg){C.EnumToIcon._Init.call(this,aArg);this.__proto__=
C.AeQ;},_className:"Device::MotherSelectionFilterModeToIcon"};C.WhereAboutsFilterCriterion={
A4:0,Abj:function(){var Av=A._NewObject(C.WhereAboutsFilterCriterion,0);Av.Fg(this
);return Av;},Fg:function(AH){C.FilterCriterion.Fg.call(this,AH);var Av=(C.WhereAboutsFilterCriterion.
isPrototypeOf(AH)?AH:null);if(!!Av)this.A4=Av.A4;},Initialize:function(A3,Eb,A7,
P_){this.EJ=A3;this.Operator=Eb;this.A4=A7;this.YH=P_;return this;},_Init:function(
aArg){C.FilterCriterion._Init.call(this,aArg);this.__proto__=C.WhereAboutsFilterCriterion;
},_className:"Device::WhereAboutsFilterCriterion"};C.BEs={ANU:0,BDb:1,APE:2,LAST:
3};C.BFz={GH:0,AVA:1,He:2,Year:3,LAST:4};C.TimespanDaysToString={BI:function(A5){
var Bge=A5;var ABf=A.jV;switch(Bge){case 0:ABf=A.aaR(A.acf.A5F);break;case 1:ABf=
A.aaR(A.acf.AVA);break;case 2:ABf=A.aaR(A.acf.He);break;case 3:ABf=A.aaR(A.acf.Year
);break;default:throw new Error(Ayx+Bge.toFixed());}return ABf;},_Init:function(
aArg){C.EnumToString._Init.call(this,aArg);this.__proto__=C.TimespanDaysToString;
},_className:"Device::TimespanDaysToString"};C.AhN={BEF:0,BDh:1,BDY:2,BD1:3,BD0:
4,BDi:5,BDZ:6,LAST:7};C.USBStateToString={BI:function(A5){var BgB=A5;var Bp=A.jV;
switch(BgB){case 0:Bp=AZp;break;case 2:Bp=AZq;break;case 1:Bp=AZr;break;case 5:Bp=
AIv;break;case 3:Bp=AZs;break;case 4:Bp=AZt;break;case 6:Bp=AZu;break;default:throw new
Error(AHP+BgB.toFixed());}return Bp;},_Init:function(aArg){C.EnumToString._Init.
call(this,aArg);this.__proto__=C.USBStateToString;},_className:"Device::USBStateToString"
};C.ACn={BDW:0,BCF:1,BDX:2,BDU:3};C.AxB={ACh:A.jV,Timestamp:0,AD6:0,AEa:0,AGm:0,
OnSetTimestamp:function(E){if(this.Timestamp===E)return;this.Timestamp=E;},AFk:function(
E){if(this.AD6===E)return;this.AD6=E;},AFq:function(E){if(this.AEa===E)return;this.
AEa=E;},AFz:function(E){if(this.AGm===E)return;this.AGm=E;},AE0:function(E){if(this.
ACh===E)return;this.ACh=E;},_Init:function(aArg){this.__proto__=C.AxB;A.h7++;},_Done:
function(){this.__proto__=null;A.h7--;},_ReInit:function(){},_Mark:function(D){var
B;if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:
null,_className:"Device::SoftwareVersionInformation"};C.Avr={Timestamp:0,ARr:0,ARs:
0,AVd:0,AVe:0,AVc:0,ARq:0,OnSetTimestamp:function(E){if(this.Timestamp===E)return;
this.Timestamp=E;},AFh:function(E){if(this.ARr===E)return;this.ARr=E;},AFi:function(
E){if(this.ARs===E)return;this.ARs=E;},AFO:function(E){if(this.AVd===E)return;this.
AVd=E;},AFP:function(E){if(this.AVe===E)return;this.AVe=E;},AFN:function(E){if(this.
AVc===E)return;this.AVc=E;},AFg:function(E){if(this.ARq===E)return;this.ARq=E;},
_Init:function(aArg){this.__proto__=C.Avr;A.h7++;},_Done:function(){this.__proto__=
null;A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((B=this.I)&&(B._cycle
!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:"Device::HardwareVersionInformation"
};C.Aqs={Undefined:0,BDI:1,BCS:2};C.Ags={Manual:0,TransponderId:1,LAST:2};C.AnimalIdAutoGenerationMethodToString={
BI:function(A5){var Bcc=A5;var A07=A.jV;switch(Bcc){case 0:A07=A.aaR(A.acf.A5v);
break;case 1:A07=A.aaR(A.acf.A5L);break;default:throw new Error(AZv+Bcc.toFixed(
));}return A07;},_Init:function(aArg){C.EnumToString._Init.call(this,aArg);this.
__proto__=C.AnimalIdAutoGenerationMethodToString;},_className:"Device::AnimalIdAutoGenerationMethodToString"
};C.He={A5e:0,ADV:1,ACF:2,AD7:3,ABG:4,AD_:5,ADX:6,ADW:7,ABN:8,AGv:9,AEk:10,AEi:11
,ACq:12,LAST:13};C.MonthToString={BI:function(A5){var BdU=A5;var Xz=A.jV;switch(
BdU){case 1:Xz=A.aaR(A.act.ADV);break;case 2:Xz=A.aaR(A.act.ACF);break;case 3:Xz=
A.aaR(A.act.AD7);break;case 4:Xz=A.aaR(A.act.ABG);break;case 5:Xz=A.aaR(A.act.AD_
);break;case 6:Xz=A.aaR(A.act.ADX);break;case 7:Xz=A.aaR(A.act.ADW);break;case 8:
Xz=A.aaR(A.act.ABN);break;case 9:Xz=A.aaR(A.act.AGv);break;case 10:Xz=A.aaR(A.act.
AEk);break;case 11:Xz=A.aaR(A.act.AEi);break;case 12:Xz=A.aaR(A.act.ACq);break;default:
throw new Error(AZw+BdU.toFixed());}return Xz;},_Init:function(aArg){C.EnumToString.
_Init.call(this,aArg);this.__proto__=C.MonthToString;},_className:"Device::MonthToString"
};C.AjE={FileName:A.jV,AGo:0,ACn:0,An2:false,_Init:function(aArg){this.__proto__=
C.AjE;A.h7++;},_Done:function(){this.__proto__=null;A.h7--;},_ReInit:function(){
},_Mark:function(D){var B;if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null
,_cycle:0,_observers:null,_className:"Device::DataExportContext"};C.Amt={BDP:0,BFo:
1};C.AVH={Init:function(aArg){var B;A.zX([this,this.Be9],[B=A._GetAutoObject(C.Device
),B.A9d,B.Bbg],0);this.Be9(this);},Cq:function(){A._GetAutoObject(C.Device).Ar_(
this.toString());},Be9:function(G){this.EM(A._GetAutoObject(C.Device).AHd);A.we(
this,0);},_Init:function(aArg){C.Int32ArrayWrapper._Init.call(this,aArg);this.__proto__=
C.AVH;this.Zx(3);this.Init(aArg);},_className:"Device::WeightGainsLowClass"};C.AVG={
Init:function(aArg){var B;A.zX([this,this.Be7],[B=A._GetAutoObject(C.Device),B.A9c
,B.Bbf],0);this.Be7(this);},Cq:function(){A._GetAutoObject(C.Device).Ar9(this.toString(
));},Be7:function(G){this.EM(A._GetAutoObject(C.Device).AHc);A.we(this,0);},_Init:
function(aArg){C.Int32ArrayWrapper._Init.call(this,aArg);this.__proto__=C.AVG;this.
Zx(3);this.Init(aArg);},_className:"Device::WeightGainsHighClass"};C.AVJ={Init:function(
aArg){var B;A.zX([this,this.Be$],[B=A._GetAutoObject(C.Device),B.A9g,B.Bbj],0);this.
Be$(this);},Cq:function(){A._GetAutoObject(C.Device).Ar$(this.toString());},Be$:
function(G){this.EM(A._GetAutoObject(C.Device).AHg);A.we(this,0);},_Init:function(
aArg){C.Int32ArrayWrapper._Init.call(this,aArg);this.__proto__=C.AVJ;this.Zx(3);
this.Init(aArg);},_className:"Device::WeightValuesBirthClass"};C.AVF={Init:function(
aArg){var B;A.zX([this,this.Be5],[B=A._GetAutoObject(C.Device),B.A9b,B.Bbe],0);this.
Be5(this);},Cq:function(){A._GetAutoObject(C.Device).Ar8(this.toString());},Be5:
function(G){this.EM(A._GetAutoObject(C.Device).AHb);A.we(this,0);},_Init:function(
aArg){C.Int32ArrayWrapper._Init.call(this,aArg);this.__proto__=C.AVF;this.Zx(3);
this.Init(aArg);},_className:"Device::WeightGainsAverageClass"};C.AMA={Init:function(
aArg){var B;A.zX([this,this.Beo],[B=A._GetAutoObject(C.Device),B.A8i,B.BaR],0);this.
Beo(this);},Beo:function(G){this.EM(A._GetAutoObject(C.Device).ABF);A.we(this,0);
},_Init:function(aArg){C.Int32ArrayWrapper._Init.call(this,aArg);this.__proto__=
C.AMA;this.Zx(3);this.Init(aArg);},_className:"Device::AnimalTypesWeightGainsClass"
};C.BEv={BEy:0,BEm:1,BDa:2,BFR:3,Unknown:4};C.BCQ={None:0,BEG:1,BEA:2,BEw:3,BEx:
4};C.BFM={A7S:0,Manual:1,TransponderId:2,NaisId:3,LAST:4};C.TransponderLinkageIdChangeMethodToString={
BI:function(A5){var Bgi=A5;var ABh=A.jV;switch(Bgi){case 0:ABh=A.aaR(A.acf.A7S);
break;case 1:ABh=A.aaR(A.acf.A5v);break;case 2:ABh=A.aaR(A.acf.A5L);break;case 3:
ABh=AZx;break;default:throw new Error(AZy+Bgi.toFixed());}return ABh;},_Init:function(
aArg){C.EnumToString._Init.call(this,aArg);this.__proto__=C.TransponderLinkageIdChangeMethodToString;
},_className:"Device::TransponderLinkageIdChangeMethodToString"};C.A_G={BA0:function(
AoK){var Ka=A.ab0(A.abV(AoK,15),0,10);var J4=A._GetAutoObject(C.Converter).ZY(Ka
);if(!!J4){if(J4===10){if((AoK.length!==16)||!A._GetAutoObject(A.acj.VA).AVr(AoK
))return 0;else return Ka;}else return Ka;}else{J4=A._GetAutoObject(C.Converter).
ZY(A._GetAutoObject(C.Device).Ut);if(!!J4&&(J4===10)){if(!A._GetAutoObject(A.acj.
VA).AVr(AoK))return 0;if(AoK.length===12){var AJk=A.ab0(A.abV(AoK,10),0,10);var AJ$=
A._GetAutoObject(C.Converter).BpC(AJk);if((AJk>0)&&!!AJ$)return(A._GetAutoObject(
C.Converter).Aqy(J4)*1000000000000)+A.ab0(A.abV(AoK,10),0,10);}}}return 0;},Bfh:
function(J5){if((J5.length!==10)||!A._GetAutoObject(A.acj.VA).AVr(J5))return 0;var
AAK=A._NewObject(A.Core.Bs,0);var A3L=false;var A3Q=A.abW(J5,4,4);var AtP=A.wz(A3Q
,0,10);if((AtP<2000)||(AtP>2100)){A3Q=A.abV(J5,4);AtP=A.wz(A3Q,0,10);A3L=true;}if((
AtP<2000)||(AtP>2100))return 0;AAK.Year=AtP;var AKV;var AzT;if(A3L){AKV=A.abW(J5
,4,2);AzT=A.wz(AKV,0,10);}else{AKV=A.abW(J5,2,2);AzT=A.wz(AKV,0,10);}if((AzT<1)||(
AzT>12))return 0;AAK.Um(AzT);var AKU;var AzS;if(A3L){AKU=A.abW(J5,6,2);AzS=A.wz(
AKU,0,10);}else{AKU=A.abV(J5,2);AzS=A.wz(AKU,0,10);}if((AzS<1)||(AzS>AAK.Zo()))return 0;
AAK.Lp(AzS);return AAK.JO();},_Init:function(aArg){this.__proto__=C.A_G;A.h7++;}
,_Done:function(){this.__proto__=null;A.h7--;},_ReInit:function(){},_Mark:function(
D){var B;if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:
null,_className:"Device::ParserClass"};C.AnN={_Init:function(){C.A_G._Init.call(
this,0);},_ReInit:function(){},_variants:function(){return this;},_this:null};C.
AnimalTableFieldsToString={BI:function(A5){var Aap=A5;var MM=A.jV;switch(Aap){case
14:MM=A.aaR(A.acf.Afp);break;case 32:MM=A.aaR(A.acf.Breed);break;case 4:MM=A.aaR(
A.acf.Aec);break;case 28:MM=A.aaR(A.acf.A5j);break;case 33:MM=A.aaR(A.acf.AgC);break;
case 23:MM=A.aaR(A.acf.KI);break;case 7:MM=A.aaR(A.acf.Afk);break;case 2:MM=A.aaR(
A.acf.P);break;case 0:MM=A.aaR(A.acf.GJ);break;case 8:MM=A.aaR(A.acf.Alarm);break;
case 9:MM=A.aaR(A.acf.ACa);break;case 38:MM=A.aaR(A.acf.Bh2);break;case 11:MM=A.
aaR(A.acf.Fever);break;case 29:MM=A.aaR(A.acf.ARf);break;case 18:MM=A.aaR(A.acf.
M3);break;case 26:MM=A.aaR(A.acf.Ud);break;case 22:MM=A.aaR(A.acf.Transponder);break;
case 1:MM=A.aaR(A.acf.GF);break;case 34:MM=A.aaR(A.acf.Jd);break;case 6:case 25:
case 27:case 10:case 37:case 12:case 17:case 5:case 3:case 35:case 36:case 15:case
16:case 24:case 31:case 20:case 30:case 21:case 19:case 13:MM=A.jV;break;default:
throw new Error(AZz+A5.toFixed());}return MM;},_Init:function(aArg){C.EnumToString.
_Init.call(this,aArg);this.__proto__=C.AnimalTableFieldsToString;},_className:"Device::AnimalTableFieldsToString"
};C.VM={BDV:0,BDT:1,LAST:2};C.DataExportDestinationToString={BI:function(A5){var
ByA=A5;var A1w=A.jV;switch(ByA){case 0:A1w=A.acf.BiX;break;case 1:A1w=A.acf.BhF;
break;default:throw new Error(AIw+A5.toFixed());}return A1w;},_Init:function(aArg
){C.EnumToString._Init.call(this,aArg);this.__proto__=C.DataExportDestinationToString;
},_className:"Device::DataExportDestinationToString"};C.AD4={Bj:0,BFs:1,LAST:2};
C.ListViewScopeToString={BI:function(A5){var BzJ=A5;var A2s=A.jV;switch(BzJ){case
0:A2s=A.aaR(A.acf.Bj);break;case 1:A2s=A.aaR(A.acf.BoF);break;default:throw new Error(
AZA+A5.toFixed());}return A2s;},_Init:function(aArg){C.EnumToString._Init.call(this
,aArg);this.__proto__=C.ListViewScopeToString;},_className:"Device::ListViewScopeToString"
};C.AHf={BGh:0,BGg:1,BGf:2,LAST:3};C.WeightValuePrecisionToString={BI:function(A5
){var BCp=A5;var ALv=A.jV;switch(BCp){case 0:ALv=AZB+A.aaR(A.acf.Az6);break;case
1:ALv=AZC+A.acf.AiB;break;case 2:ALv=AZD+A.acf.AiB;break;default:throw new Error(
AZE+A5.toFixed());}return ALv;},_Init:function(aArg){C.EnumToString._Init.call(this
,aArg);this.__proto__=C.WeightValuePrecisionToString;},_className:"Device::WeightValuePrecisionToString"
};C.Agx={BI:function(A5){var AK2=A5;if(AK2===1)return A.aaR(A.acf.BiZ);else return C.
AnimalTypeToString.BI.call(this,A5);},_Init:function(aArg){C.AnimalTypeToString.
_Init.call(this,aArg);this.__proto__=C.Agx;},_className:"Device::AnimalTypeToStringHeifer"
};C.Y6={RJ:0,BEC:1,LAST:2};C.MassDeregistrationCriterionToString={BI:function(A5
){var BzM=A5;var A2x=A.jV;switch(BzM){case 0:A2x=A.aaR(A.acf.Bj5);break;case 1:A2x=
A.aaR(A.acf.AR0);break;default:throw new Error(Ayb+A5.toFixed());}return A2x;},_Init:
function(aArg){C.EnumToString._Init.call(this,aArg);this.__proto__=C.MassDeregistrationCriterionToString;
},_className:"Device::MassDeregistrationCriterionToString"};C.UInt64PartialFilterCriterion={
A4:A.jV,Zm:0,OB:0,Abj:function(){var Av=A._NewObject(C.UInt64PartialFilterCriterion
,0);Av.Fg(this);return Av;},Fg:function(AH){C.FilterCriterion.Fg.call(this,AH);var
Av=(C.UInt64PartialFilterCriterion.isPrototypeOf(AH)?AH:null);if(!!Av){this.A4=Av.
A4;this.Zm=Av.Zm;this.OB=Av.OB;}},Initialize:function(A3,Eb,A7,Atq,AI2,P_){this.
EJ=A3;this.Operator=Eb;this.A4=A7;this.YH=P_;this.Zm=Atq;this.OB=AI2;return this;
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
C.AU4.__proto__=C.Int32ArrayWrapper;C.AU3.__proto__=C.Int32ArrayWrapper;C.AMz.__proto__=
C.Int32ArrayWrapper;C.UInt64FilterCriterion.__proto__=C.FilterCriterion;C.BooleanToAssignedUnassignedString.
__proto__=C.EnumToString;C.CountryToString.__proto__=C.EnumToString;C.EaseOfDeliveryToString.
__proto__=C.EnumToString;C.WhereAboutsToString.__proto__=C.EnumToString;C.BreedToString.
__proto__=C.EnumToString;C.AnimalIdGenerationMethodToString.__proto__=C.EnumToString;
C.DirectionOfCountingToString.__proto__=C.EnumToString;C.Aee.__proto__=C.EnumToIcon;
C.AdV.__proto__=C.EnumToIcon;C.GermanStateToString.__proto__=C.EnumToString;C.EartagNrAssignmentModeToString.
__proto__=C.EnumToString;C.M1.__proto__=C.EnumToCodeset;C.ReasonOfLeavingToString.
__proto__=C.EnumToString;C.Ahu.__proto__=C.EnumToCodeset;C.KY.__proto__=C.EnumToCodeset;
C.CalfDeregistrations.__proto__=C.Row;C.DeviceComponentToString.__proto__=C.EnumToString;
C.AgK.__proto__=C.EnumToCodeset;C.AeQ.__proto__=C.EnumToIcon;C.WhereAboutsFilterCriterion.
__proto__=C.FilterCriterion;C.TimespanDaysToString.__proto__=C.EnumToString;C.USBStateToString.
__proto__=C.EnumToString;C.AnimalIdAutoGenerationMethodToString.__proto__=C.EnumToString;
C.MonthToString.__proto__=C.EnumToString;C.AVH.__proto__=C.Int32ArrayWrapper;C.AVG.
__proto__=C.Int32ArrayWrapper;C.AVJ.__proto__=C.Int32ArrayWrapper;C.AVF.__proto__=
C.Int32ArrayWrapper;C.AMA.__proto__=C.Int32ArrayWrapper;C.TransponderLinkageIdChangeMethodToString.
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