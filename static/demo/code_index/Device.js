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
var Cd="ERROR: Cannot add criterion, it is already in the list.";var BF="ERROR: BatteryChargeState is read only";
var E4="ERROR: UpdateChargeActive is read only";var Hm="ERROR: ScanState is read only.";
var IQ="ERROR: MeasureState is read only.";var Ip="ERROR: Temperature value is read only";
var O1="ERROR: UpdateDataTable called for Undefined data table.";var P1="ERROR: UpdateDataTable called for unknown data table id=";
var P2="ERROR: SyncState is read only.";var CQ="ERROR: ScanTransponder is read only.";
var E$="ERROR: Body weight value is read only";var Lu="ERROR: Predicted temperature value is read only";
var P3="ERROR: TransferProgress is read only";var JY="ERROR: TransferTarget is read only";
var N_="ERROR: unhandled assessment.";var P4="Unhandled enum BodyTemperature: ";
var MF="AU";var S5="AT";var UO="BE";var Z5="BA";var W1="BG";var Iq="CA";var UP="CN";
var Z6="TW";var W2="HR";var Z7="CY";var W3="CZ";var Z8="DK";var Z9="EE";var UQ="FI";
var W4="FR";var P5="DE";var Z_="GR";var O2="HU";var Ri="IE";var W5="IT";var W6="JP";
var W7="LV";var W8="LT";var Z$="LU";var W9="MT";var W_="NL";var S6="NO";var UR="PL";
var US="PT";var AcL="RO";var S7="RU";var Aaa="SK";var Afv="SI";var Aab="ES";var W$=
"SE";var Aac="CH";var Aad="TR";var AhO="UA";var JZ="UK";var Aae="US";var Lv=".";
var AhP="-";var Aob="ERROR: Unhandled mass unit: ";var N$=" ";var Xa="Unhandled gender";
var Aoc="Unhandled animal type";var AhQ="Unhandled Device::MassUnit.";var AhR="Unhandled Device::AnimalListContent.";
var AcM="Avid";var UT="Ordicam / IER SA";var Aod="Agrident";var Aoe="Datamars";var
Aof="Allflex";var Aog="Texas Instruments";var Afw="Nedap";var Ak$="Digital Angel";
var AxW="null";var AxX="[ ";var O3=", ";var Rj=" ]";var AxY="Unhandled language";
var UU="Unhandled Device::AnimalListAction.";var AsS="Temperature unit conversion not supported: ";
var AxZ="->";var Ax0="=";var Ax1=">";var Aoh="<";var Afx="!=";var Aoi="WARNING: Unhandled operator.";
var IR="Unknown birth type";var Aoj="Unhandled country: ";var Xb="ERROR: Cannot start transaction";
var Aok="ERROR: Table is null, cannot load row (";var AsT=")";var AsU="Table Id mismatch!";
var AsV="ERROR: Row index (";var Aol=") out of bounds [0,";var Aom="]";var AsW="ERROR: Table is full. Item limit: ";
var Ax2="Device::ScanTransponder not set";var Ax3="Unhandled TransponderType.";var
Ax4="Unhandled ScanState.";var AsX="Could not load animal with transponder";var Ax5=
"Birth type";var P6="Time calving";var Ax6="Pend. reg. notice";var AVP="Perished";
var AVQ="Rating temp.";var AVR="Location";var AVS=" mother";var AHe="Reason leaving";
var AHf="Time alarm";var Afy="Time first weighing";var Aon="Time control";var AVT=
"Time temp.";var AHg="Time watch";var Ala="Time weighing";var AHh="Assessment";var
AHi="Time rating";var AVU="ERROR: Unhandled AnimalTable filter field:";var AHj="Field ";
var AVV="ERROR: Unhandled RatingTable filter field:";var AVW="ERROR: Unhandled table ";
var AcN=" filter fields.";var AVX=" [";var AVY="WARNING: Unhandled filter criterion type.";
var AHk="0";var AsY="No table specified";var AHl="Invalid animal id generation method: ";
var AHm="Unhandled AnimalIdGenerationMethod: ";var Ax7="Invalid gender: ";var AHn=
"Invalid ear tag number assignment mode: ";var Ax8=";";var AVZ="Invalid animal creation error code: ";
var AV0="Invalid EartagNrAssignmentMode: ";var AV1="Unsupported exponent: ";var AV2=
"Unknown whereabouts type: ";var AHo="Unhandled Gender: ";var AV3="Unhandled AnimalIdAutoGenerationMethod: ";
var O4="\n";var Ax9="\n\n";var AV4="Bootloader:\nV\xA0";var AV5="Middleware:\nV\xA0";
var AV6="GUI:\nV\xA0";var AV7="Mainboard: ";var AV8="Torchboard: ";var AV9="Operator not supported.";
var AHp="Unhandled Device::TransponderAssignmentIdChangeMethod: ";var AHq="Unhandled mass deregistration criterion: ";
var Aoo="Unhandled enum value ";var Ax_="UNDEFINED";var AV_="Boot";var AV$="Charge";
var AWa="ChargeWarning";var AHr="ControlledPowerOff";var AWb="DeviceMain";var AHs=
"DeviceService";var AHt="DeviceInfo";var AHu="DeviceDataManagement";var AWc="DeviceAnimalDataMenu";
var AHv="DeviceDeviceDataMenu";var AWd="DeviceCheck";var AHw="Home";var Rk="Settings";
var Xc="DateTimeSettings";var AWe="UnitsSettings";var AWf="DataAcquisitionSettings";
var AWg="RegistrationAutomaticSettings";var AWh="RegistrationPresettingsSettings";
var AWi="TransponderAssignmentSettings";var AWj="TransponderUnlinkSettings";var AWk=
"TemperatureSettings";var AhS="WeightGainSettings";var AHx="DeviceSettings";var AWl=
"RegistrationSettings";var AWm="InitializationSettings";var AHy="PremisesSettings";
var AHz="Sleep";var Ax$="Sync";var P7="EditAnimalData";var AWn="EditAnimalDataNaisId";
var AWo="AnimalList";var AWp="AnimalListFilter";var AsZ="AlarmListFilter";var AWq=
"WatchListFilter";var AWr="AnimalActionActions";var AWs="AnimalActionTemperature";
var AWt="TemperatureMeasurement";var AWu="AnimalActionWeighing";var AWv="AnimalActionRate";
var As0="AnimalActionUnregister";var AWw="AnimalActionPerished";var AWx="AnimalActionNewBornCare";
var AWy="AlarmList";var AWz="ControlMeasure";var AWA="ControlList";var AWB="RangeTest";
var AWC="ListsMain";var AWD="ListsIdManagement";var AWE="WatchList";var AWF="EvaluationMenuMain";
var AHA="EvaluationMenuWeights";var Alb="EvaluationLosses";var AWG="EvaluationRatings";
var AWH="EvaluationTemperatures";var AWI="EvaluationWeights";var Aya="EvaluationWeightsRecent";
var Alc="EvaluationBirthWeights";var AhT="AnimalEvaluationFilter";var Ayb="NewMenu";
var Aop="NewAnimals";var AhU="NewAnimalManualData";var AWJ="MassRecording";var Ayc=
"NewAnimalTransponderData";var AHB="NewAnimalLoss";var Afz="AutoActionScanScreen";
var AHC="ManualActionScanScreen";var Aaf="SetTransponderScreen";var Ald="SetSaveTransponderScreen";
var Aoq="NewAnimalSetTransponderScreen";var AWK="NewAnimalsSetTransponderScreen";
var AWL="NewAnimalCalvingDataScreen";var AWM="WeightListScreen";var AWN="AnimalSingleInfoScreen";
var AWO="AnimalMultiInfoScreen";var As1="AnimalRegistrationDetails";var AHD="FreshCowListScreen";
var AHE="FreshCowListFilterScreen";var AWP="DryCowListScreen";var AWQ="DryCowListFilterScreen";
var AWR="NoTransponderListScreen";var AWS="NoTransponderListFilterScreen";var AWT=
"YoungNoTransponderListScreen";var AWU="YoungNoTransponderListFilterScreen";var AWV=
"NoNaisIdListScreen";var AWW="NoNaisIdListFilterScreen";var AWX="RegistrationsListScreen";
var AWY="RegistrationsListFilterScreen";var AWZ="ActionListScreen";var Ayd="ActionListFilterScreen";
var AHF="UpdateScreen";var AHG="MotherScanScreen";var AHH="SetSaveNaisIdScreen";
var AHI="PurchasedAnimalsList";var AHJ="TextInput";var AHK="AnimalActions";var AW0=
"Unhandled display mode: ";var AW1="None";var AW2="Actions Settings";var AW3="Auto Action";
var AW4="Menu Item Settings";var AW5="Rating Type";var AW6="Weighing settings";var
Aye="Options";var AHL="AnimalSearch";var AW7="AnimalSearchUnfiltered";var AHM="AnimalSearchDriedOff";
var AhV="MeasurementReady";var UV="AnimalMultiInfoMenu";var AW8="MassRecordingDefaults";
var Aag="MassRecordingFields";var AW9="MassRecordingMenu";var AW_="PurchasedAnimalsListMenu";
var Ale="BirthRegistrationsListMenu";var AfA="Unhandled overlay menu: ";var AcO=
"Error";var Aor="Idle";var AW$="IdScanned";var O5="NotFound";var AHN="Progress";
var AHO="Unhandled scan state: ";var AXa="Prediction";var AHP="Ready";var AHQ="Unhandled measure state: ";
var AHR="Unhandled temperature unit: ";var AXb="Unhandled species: ";var AXc="English";
var AXd="Nederlands";var AXe="Deutsch";var AXf="Eesti";var AXg="Suomalainen";var
AXh="Fran\xE7ais";var AXi="\u0395\u03BB\u03BB\u03B7\u03BD\u03B9\u03BA\u03AC";var
AHS="\u0411\u044A\u043B\u0433\u0430\u0440\u0441\u043A\u0438";var AXj="Italiano";
var AHT="\u0420\u0443\u0441\u0441\u043A\u0438\u0439";var AHU="Espa\xF1ol";var Ayf=
"T\xFCrk\xE7e";var AXk="\u6B63\u9AD4\u5B57/\u7E41\u9AD4\u5B57";var AXl="\u010Ce\u0161tina";
var AXm="Bosanski";var AXn="Norsk";var AXo="\u0423\u043A\u0440\u0430\u0457\u043D\u0441\u044C\u043A\u0438\u0439";
var AHV="Unhandled language: ";var AXp="EN";var AXq="ET";var As2="EL";var As3="ZH";
var AHW="CS";var AXr="BS";var AXs="Unhandled gender: ";var AXt="Unhandled birth type: ";
var AXu="Exporting";var AXv="ImportFinish";var AXw="ImportStart";var AXx="Importing";
var AXy="Init";var AXz="Unhandled sync state: ";var AHX="Unhandled rating attribute: ";
var AXA="Unhandled assessment: ";var Ayg="Illegal boolean value: ";var AHY="Unhandled popup ID:";
var AXB="Unknown";var AXC="Severe Error";var AXD="ErrorsDeviceDriverCheck";var AXE=
"Enter Sleep";var AXF="About";var AHZ="InfoSoftwareVersions";var AH0="InfoHardwareVersions";
var AH1="InfoSerial";var AH2="ShutDown";var Ayh="SuccessDataSync";var Ayi="SuccessResetFactory";
var AH3="SuccessResetAnimalData";var AXG="SuccessCreateBackup";var AH4="SuccessRestoreBackup";
var AXH="CreateBackupInProgress";var AH5="RestoreBackupInProgress";var AXI="FailedCreateBackup";
var AXJ="FailedRestoreBackup";var AXK="TechnicalDetails";var AXL="WarningDataSync";
var AXM="WarningFactory";var AXN="WarningResetAnimalData";var AXO="WarningRestart";
var AXP="WarningAutoAction";var AXQ="WarningAutoActionNotApplicable";var AXR="WarningNoMenuItem";
var AXS="WarningEnterDemoMode";var AXT="NoAnimalsRegistered";var Ayj="MaxNumAnimalsReached";
var AXU="MaxNumRatingsReached";var AXV="MaxNumCalfDeregistrationsReached";var Ayk=
"MissingTransponder";var As4="EarTagNumberTooShort";var UW="NoValidCountryCode";
var As5="WarningOutdatedAnimalWeight";var AXW="WarningOutdatedAnimalWeights";var
AXX="WarningWeightEvaluationSingular";var AXY="WarningWeightEvaluationPlural";var
AH6="ScanError";var AXZ="ScanNotFound";var AH7="ScannedAnimalNotFound";var AX0="ScannedTransponderNotFound";
var AX1="AnimalNotFound";var AX2="SuccessUnregister";var As6="SuccessUnregisterPerished";
var AX3="SuccessCreationNewAnimal";var AX4="SuccessCreationNewAnimals";var AH8="AnimalCreationInProgress";
var AX5="EvaluationInProgress";var AX6="DataSyncInProgress";var AX7="AddedToAlarm";
var AX8="RemovedFromAlarm";var AcP="AddedToWatch";var AX9="RemovedFromWatch";var
AX_="AddedToDryOff";var AX$="RemovedFromDryOff";var AYa="AnimalIdAlreadyExists";
var AH9="AnimalIdAlreadyExistsContinuable";var AYb="MissingAnimalId";var AYc="MissingAnimalIdMother";
var AYd="MissingEartagNumber";var AYe="MissingTransponderId";var AYf="TransponderAlreadyRegistered";
var AYg="TransponderAlreadyRegisteredContinuable";var AH_="TransponderAlreadyRegisteredCapturable";
var AYh="HelpAnimalInfoRating";var AYi="WarningReassignTransponder";var AYj="CannotReassignNaisId";
var AH$="WarningResetToDefaultValue";var AIa="WarningResetThresholds";var AYk="WarningResetTempThresholds";
var AYl="UpdateFirmware";var AYm="UpdateFirmwareBatteryLow";var AYn="ConfirmFirmwareUpdated";
var Rl="ConfirmBootloaderUpdated";var As7="QuestionAddAnotherCalfMultiples";var AIb=
"RemovedAllBirthNoticesPending";var AIc="RemovedAllPurchasedNoticePending";var Aos=
"RemovedFromBirthNoticePending";var Aot="RemovedFromPurchasedNoticePending";var Ayl=
"SuccessClearAnimalLoss";var AYo="RemovedAnimalBirth";var AId="RemovedAnimalPurchased";
var AYp="WarningNoActionsForAnimalLoss";var AYq="SuccessLinkTransponder";var AYr=
"SuccessChangeTransponder";var AYs="SuccessUnlinkTransponder";var AYt="SuccessLinkNaisId";
var AYu="WarningDataExportHitBirthFailed";var AYv="SuccessDataExportHitBirth";var
AYw="SuccessDataExportHitBirthDownload";var AYx="WarningDataExportHitPurchasedFailed";
var AYy="SuccessDataExportHitPurchased";var AYz="SuccessDataExportHitPurchasedDownload";
var AYA="WarningDataExportAnimalsFailed";var AYB="SuccessDataExportAnimalsRatings";
var AYC="SuccessDataExportAnimalsDownload";var AYD="WarningNoPremisesID";var AYE=
"WarningNoFlashDrivePresent";var AYF="WarningNoBackupPathPresent";var Aou="WarningNoBackupFilePresent";
var AIe="DemoFunctionNotAvailable";var AYG="WarningImpreciseTimeSetting";var AIf=
"ConfirmationRestoreBackup";var AIg="ConfirmationMassDeregistration";var Aah="SuccessMassDeregistration";
var AIh="WarningParsedDateInFutureInvalid";var AYH="WarningParsingDateFailed";var
AIi="WarningParsingNaisIdFailed";var AYI="WarningParsingShortNaisIdWithoutPremisesId";
var Aym="AnimalId";var AYJ="FarmId";var AYK="GroupId";var Ayn="PersonId";var AYL=
"Unhandled transponder type: ";var AYM="FDX";var AYN="HDX";var AIj="HDX (Urban)";
var Aov="Unhandled transponder protocol: ";var AIk="Illegal RatingMode: ";var AYO=
"Unhandled mass unit: ";var AIl="Max array size is 10";var Ayo="Index out of bounds";
var Alf="ERROR: Received more integers than expected!";var AIm="Unhandled double scan action :";
var Aow="Illegal WeightRecordingMode: ";var AYP="Illegal WeightRecordingScope: ";
var AIn="AnimalDataGenderType";var AIo="AnimalDataShortNaisId";var AYQ="Rating";
var AYR="Temperature";var AIp="Weight";var AYS="Alarm infos";var AYT="Control infos";
var AYU="Watch infos";var AYV="Fresh cow infos";var AYW="No transponder infos";var
AYX="Dry cow info";var AYY="No nais id infos";var AYZ="Birth registrations infos";
var AY0="Purchased registrations infos";var AY1="Young no transponder infos";var
AY2="Unhandled animal list content:";var AY3="Illegal AutoRegistrationMode: ";var
AY4="Illegal FactoryResetScope: ";var Aox="??";var AIq="Illegal EaseOfDelivery: ";
var Aai="Illegal Whereabouts: ";var AY5="Illegal breed: ";var Ayp="Unisex";var AY6=
"Illegal animalIdGenerationMethod: ";var AY7="Ascending";var AY8="Descending";var
AY9="Illegal directionOfCountingName: ";var AIr="Unhandled direction of counting: ";
var As8="Unhandled German state: ";var As9="SH";var As_="HH";var As$="NI";var Ata=
"HB";var Ayq="NW";var Aoy="HE";var AY_="RP";var AY$="BW";var AZa="BY";var AZb="SL";
var AZc="BB";var AZd="MV";var AZe="SN";var AZf="ST";var AZg="TH";var AZh="One Range Male Female";
var AZi="Two Ranges Male Female";var AIs="Illegal EartagAssignmentMode: ";var AZj=
"Unhandled code set value ";var AIt="Implement in derived class";var AZk="Illegal HIT-Code: ";
var Ayr="Illegal ReasonOfLeaving: ";var AIu="Illegal code: ";var Ays="Undefined";
var Ayt="Illegal DeviceComponent: ";var AZl="Unhandled Device::MotherSelectionFilterMode: ";
var AZm="Illegal Device::TimespanDays: ";var AZn="Not connected";var AIv="Host";
var AZo="Device";var AZp="Device CDC";var AZq="Host MSC";var AZr="Host HID";var AZs=
"Host CDC";var AZt="Illegal animalIdAutoGenerationMethod: ";var AZu="Unhandled month: ";
var AZv="Illegal transponderAssignmentIdChangeMethod: ";var AIw="Unhandled animal table field: ";
var AZw="Unhandled data export destination: ";var AZx="Unhandled list view scope: ";
var AZy="1 ";var AZz="100 ";var AZA="10 ";var AZB="Unhandled weight value precision: ";
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
AH)throw new Error(Cd);Av=Av.Ah;}AH.AJ=this.B_;if(!!this.B_)this.B_.Ah=AH;this.B_=
AH;if(!this.B9)this.B9=AH;},AOJ:function(){return this.B9;},AOO:function(Bbr){if(
!!Bbr)return Bbr.Ah;return null;},DQ:function(AI4,Eb){var Av=this.B9;while(!!Av){
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
AEb:0,AEa:0,AvX:0,Ut:0,OQ:null,Sv:null,QV:null,SU:null,RW:null,Am:null,Bt:null,Ago:
null,AnK:null,Pl:null,Auw:A.jV,AutoActions:A.jV,ABB:A.jV,AGP:A.jV,AGQ:A.jV,AhB:A.
jV,AG_:A.jV,AG$:A.jV,ABC:A.jV,AG9:A.jV,AHc:A.jV,ABv:A.jV,ABw:A.jV,ARZ:A.jV,AR4:A.
jV,AVM:A.jV,Aa4:100,Kv:0,AM0:75,Z1:3600,ATZ:0,A1:5,AF:0,KX:50000,Ph:0,AF5:0,AdO:
0,Aq4:0,Aq3:0,ARM:1,ARL:1,AjT:0,ARN:1,AxH:0,Afl:0,AqQ:10,AUJ:5,AD6:60,AvR:0,An3:
0,OJ:1,WhereAbouts:0,VM:0,Ak2:0,Axz:3,ACy:0,Agq:1,AhL:0,AbV:0,Aqp:0,ANY:11,Breed:
0,EartagNrAssignmentMode:0,AuW:0,ACr:0,ACq:0,Ig:5,ABu:2,Aqr:0,AOB:2,AVx:0,D9:0,AL_:
0,Kg:0,Gender:2,WeightRecordingScope:1,WeightRecordingMode:1,AnimalType:0,MassUnit:
0,AutoRegistrationMode:0,RatingMode:0,SyncState:0,OverlayMenu:0,TemperatureUnit:
0,Language:0,MeasureState:0,ScanState:0,KH:3,AeJ:true,ARy:false,Aqd:true,AqR:false
,AmL:true,HB:false,AVb:false,AmM:false,AVv:false,AsM:false,AD$:false,Amy:false,UpdateActiveScreen:
function(AL){if(this.KH===AL)return;this.KH=AL;A.abo([this,this.AEm,this.BaD],0);
},Zp:function(E){if(this.K&&this.K.Zp)return this.K.Zp.apply(this,arguments);else
return C.DeviceClass.Bt$.apply(this,arguments);},Bt$:function(E){},BaD:function(
Aq){this.Zp(Aq);},UpdateBatteryChargeState:function(AL){if(this.Aa4===AL)return;
this.Aa4=AL;A.abo([this,this.Av2,this.Ayz],0);},Awn:function(E){if(this.K&&this.
K.Awn)return this.K.Awn.apply(this,arguments);else return C.DeviceClass.Buk.apply(
this,arguments);},Buk:function(E){A.ab5("%s",BF);},Ayz:function(Aq){this.Awn(Aq);
},UpdateChargeActive:function(AL){if(this.Amy===AL)return;this.Amy=AL;A.abo([this
,this.Av5,this.AyA],0);},AET:function(E){if(this.K&&this.K.AET)return this.K.AET.
apply(this,arguments);else return C.DeviceClass.Buq.apply(this,arguments);},Buq:
function(E){A.ab5("%s",E4);},AyA:function(Aq){this.AET(Aq);},UpdateScanState:function(
AL){var B;if(this.ScanState===AL)return;this.ScanState=AL;A.abo([this,this.ASC,this.
AZ8],0);A._GetAutoObject(C.Helper).BAu(this);},Ar1:function(E){if(this.K&&this.K.
Ar1)return this.K.Ar1.apply(this,arguments);else return C.DeviceClass.Bu7.apply(
this,arguments);},Bu7:function(E){A.ab5("%s",Hm);},AZ8:function(Aq){this.Ar1(Aq);
},UpdateMeasureState:function(AL){if(this.MeasureState===AL)return;this.MeasureState=
AL;A.abo([this,this.AEu,this.AIN],0);},AwM:function(E){if(this.K&&this.K.AwM)return this.
K.AwM.apply(this,arguments);else return C.DeviceClass.BuP.apply(this,arguments);
},BuP:function(E){A.ab5("%s",IQ);},AIN:function(Aq){this.AwM(Aq);},UpdateTempValue:
function(AL){if(this.Kv===AL)return;this.Kv=AL;A.abo([this,this.AEy,this.AIP],0);
},Aw0:function(E){if(this.K&&this.K.Aw0)return this.K.Aw0.apply(this,arguments);
else return C.DeviceClass.Bvb.apply(this,arguments);},Bvb:function(E){A.ab5("%s"
,Ip);},AIP:function(Aq){this.Aw0(Aq);},Any:function(E){if(this.K&&this.K.Any)return this.
K.Any.apply(this,arguments);else return C.DeviceClass.BuJ.apply(this,arguments);
},BuJ:function(E){},BaS:function(Aq){this.Any(Aq);},Aw1:function(E){if(this.K&&this.
K.Aw1)return this.K.Aw1.apply(this,arguments);else return C.DeviceClass.Bvc.apply(
this,arguments);},Bvc:function(E){},Ate:function(Aq){this.Aw1(Aq);},AER:function(
E){if(this.K&&this.K.AER)return this.K.AER.apply(this,arguments);else return C.DeviceClass.
Bup.apply(this,arguments);},Bup:function(E){},BaK:function(Aq){this.AER(Aq);},AFo:
function(E){if(this.K&&this.K.AFo)return this.K.AFo.apply(this,arguments);else return C.
DeviceClass.BuR.apply(this,arguments);},BuR:function(E){},AZ2:function(Aq){this.
AFo(Aq);},UpdateMonitoring:function(AL){if(this.AD$===AL)return;this.AD$=AL;A.abo([
this,this.ASt,this.AZ2],0);},UpdateDataTable:function(Bbt){var B;switch(Bbt){case
0:A.pe([B=this.Am,B.Akm],this);break;case 1:A.pe([B=this.Bt,B.Akm],this);break;case
3:A.pe([B=this.Ago,B.Akm],this);break;case 4:A.pe([B=this.Pl,B.Akm],this);break;
case 2:A.ab5("%s",O1);break;default:A.ab5("%s%e",P1,Bbt);}},Axy:function(){if(this.
K&&this.K.Axy)return this.K.Axy.apply(this,arguments);else return C.DeviceClass.
BvL.apply(this,arguments);},BvL:function(){},AhF:function(){if(this.K&&this.K.AhF
)return this.K.AhF.apply(this,arguments);else return C.DeviceClass.BvO.apply(this
,arguments);},BvO:function(){},AhC:function(){if(this.K&&this.K.AhC)return this.
K.AhC.apply(this,arguments);else return C.DeviceClass.BvM.apply(this,arguments);
},BvM:function(){},AnW:function(){if(this.K&&this.K.AnW)return this.K.AnW.apply(
this,arguments);else return C.DeviceClass.BvP.apply(this,arguments);},BvP:function(
){},UpdateLanguage:function(AL){if(this.Language===AL)return;this.Language=AL;switch(
AL){case 14:A._SetLanguage(1);break;case 13:A._SetLanguage(2);break;case 6:A._SetLanguage(
3);break;case 11:A._SetLanguage(4);break;case 10:A._SetLanguage(5);break;case 12:
A._SetLanguage(6);break;case 5:A._SetLanguage(7);break;case 3:A._SetLanguage(8);
break;case 1:A._SetLanguage(9);break;case 8:A._SetLanguage(10);break;case 4:A._SetLanguage(
11);break;case 15:A._SetLanguage(13);break;case 9:A._SetLanguage(15);break;case 2:
A._SetLanguage(16);break;case 7:A._SetLanguage(17);break;case 16:A._SetLanguage(
18);break;default:A._SetLanguage(0);}A.abo([this,this.A8u,this.BaS],0);},UpdateTemperatureUnit:
function(AL){if(this.TemperatureUnit===AL)return;this.TemperatureUnit=AL;A.abo([
this,this.Arx,this.Ate],0);},UpdateBrightness:function(AL){if(this.AM0===AL)return;
this.AM0=AL;A.abo([this,this.A8f,this.BaK],0);},SetSystemTime:function(Ah4){if(this.
K&&this.K.SetSystemTime)return this.K.SetSystemTime.apply(this,arguments);else return C.
DeviceClass.BvJ.apply(this,arguments);},BvJ:function(Ah4){},Axs:function(){if(this.
K&&this.K.Axs)return this.K.Axs.apply(this,arguments);else return C.DeviceClass.
Bar.apply(this,arguments);},Bar:function(){},AGh:function(){if(this.K&&this.K.AGh
)return this.K.AGh.apply(this,arguments);else return C.DeviceClass.Bap.apply(this
,arguments);},Bap:function(){},Bn0:function(){},UpdateOverlayMenu:function(AL){if(
this.OverlayMenu===AL)return;this.OverlayMenu=AL;A.abo([this,this.Awf,this.AyH],
0);},Ds:function(E){if(this.K&&this.K.Ds)return this.K.Ds.apply(this,arguments);
else return C.DeviceClass.Bu2.apply(this,arguments);},Bu2:function(E){},AyH:function(
Aq){this.Ds(Aq);},Aw7:function(E){if(this.K&&this.K.Aw7)return this.K.Aw7.apply(
this,arguments);else return C.DeviceClass.Bvm.apply(this,arguments);},Bvm:function(
E){},Ba3:function(Aq){this.Aw7(Aq);},UpdateUnderTemp:function(AL){if(this.Z1===AL
)return;this.Z1=AL;A.abo([this,this.A8Y,this.Ba3],0);},UpdateSyncState:function(
AL){if(this.SyncState===AL)return;this.SyncState=AL;A.abo([this,this.ASE,this.AZ_
],0);},Ab9:function(E){if(this.K&&this.K.Ab9)return this.K.Ab9.apply(this,arguments
);else return C.DeviceClass.Bva.apply(this,arguments);},Bva:function(E){A.ab5("%s"
,P2);},AZ_:function(Aq){this.Ab9(Aq);},ACW:function(){if(this.K&&this.K.ACW)return this.
K.ACW.apply(this,arguments);else return C.DeviceClass.Bt3.apply(this,arguments);
},Bt3:function(){return A.jV;},UpdatePopup:function(J1,A0S,A0O,A0V){this.A9(J1,A0S
,A0O,A0V,[this,this.BAc]);},PopupStateChanged:function(J1,Ae){if(this.K&&this.K.
PopupStateChanged)return this.K.PopupStateChanged.apply(this,arguments);else return C.
DeviceClass.Bvz.apply(this,arguments);},Bvz:function(J1,Ae){},AFQ:function(E){if(
this.K&&this.K.AFQ)return this.K.AFQ.apply(this,arguments);else return C.DeviceClass.
Bvo.apply(this,arguments);},Bvo:function(E){},Ba4:function(Aq){this.AFQ(Aq);},UpdateVibrationOnKeypressEnabled:
function(AL){if(this.AsM===AL)return;this.AsM=AL;A.abo([this,this.A8Z,this.Ba4],
0);},Ae6:function(E){if(this.K&&this.K.Ae6)return this.K.Ae6.apply(this,arguments
);else return C.DeviceClass.Bvn.apply(this,arguments);},Bvn:function(E){},AIQ:function(
Aq){this.Ae6(Aq);},UpdateVibrationOn:function(BbV){if(this.AVv===BbV)return;this.
AVv=BbV;A.abo([this,this.AEz,this.AIQ],0);},A9:function(J1,A0S,A0O,A0V,Bxe){var Agg=
A._NewObject(C.PopupContext,0);Agg.Id=J1;Agg.Show=A0S;Agg.AkH=A0O;Agg.Ak1=A0V;Agg.
AFY=Bxe;this.AnK.Trigger(Agg,false);},BAc:function(G){var At=(C.PopupContext.isPrototypeOf(
G)?G:null);if(!!At)this.PopupStateChanged(At.Id,At.PopupState);},AwW:function(E){
if(this.K&&this.K.AwW)return this.K.AwW.apply(this,arguments);else return C.DeviceClass.
Bu6.apply(this,arguments);},Bu6:function(E){},AZ7:function(Aq){this.AwW(Aq);},UpdateRatingMode:
function(AL){if(this.RatingMode===AL)return;this.RatingMode=AL;A.abo([this,this.
ASB,this.AZ7],0);},AeX:function(E){if(this.K&&this.K.AeX)return this.K.AeX.apply(
this,arguments);else return C.DeviceClass.BuB.apply(this,arguments);},BuB:function(
E){},Atd:function(Aq){this.AeX(Aq);},UpdateFlashLightOn:function(BbC){if(this.AmM===
BbC)return;this.AmM=BbC;A.abo([this,this.Aru,this.Atd],0);},Un:function(E){if(this.
K&&this.K.Un)return this.K.Un.apply(this,arguments);else return C.DeviceClass.Bvf.
apply(this,arguments);},Bvf:function(E){},AZ$:function(Aq){this.Un(Aq);},UpdateTopLightOn:
function(BbR){if(this.AVb===BbR)return;this.AVb=BbR;A.abo([this,this.ASG,this.AZ$
],0);},WA:function(E){if(this.K&&this.K.WA)return this.K.WA.apply(this,arguments
);else return C.DeviceClass.Bu5.apply(this,arguments);},Bu5:function(E){},Bv2:function(
Aq){this.WA(Aq);},UpdateRGBTopLight:function(BbM){if(this.ATZ===BbM)return;this.
ATZ=BbM;A.abo([this,this.BkJ,this.Bv2],0);},Awm:function(E){if(this.K&&this.K.Awm
)return this.K.Awm.apply(this,arguments);else return C.DeviceClass.Buj.apply(this
,arguments);},Buj:function(E){},BvV:function(Aq){this.Awm(Aq);},UpdateAutoRegistrationMode:
function(Bbp){if(this.AutoRegistrationMode===Bbp)return;this.AutoRegistrationMode=
Bbp;A.abo([this,this.Bj9,this.BvV],0);},Ar2:function(E){if(this.K&&this.K.Ar2)return this.
K.Ar2.apply(this,arguments);else return C.DeviceClass.Bu8.apply(this,arguments);
},Bu8:function(E){A.ab5("%s",CQ);},AZ9:function(Aq){this.Ar2(Aq);},UpdateScanTransponder:
function(J1,BbT,BbS){if(((this.OQ.Id===J1)&&(this.OQ.TransponderType===BbT))&&(this.
OQ.TransponderProtocol===BbS))return;this.OQ.OnSetId(J1);this.OQ.ATD(BbT);this.OQ.
ATC(BbS);A.abo([this,this.ASD,this.AZ9],0);},OL:function(E){if(this.K&&this.K.OL
)return this.K.OL.apply(this,arguments);else return C.DeviceClass.But.apply(this
,arguments);},But:function(E){},UY:function(Aq){this.OL(Aq);},UpdateDigitsID:function(
Bbx){if(this.A1===Bbx)return;this.A1=Bbx;A.abo([this,this.Uf,this.UY],0);},PN:function(
E){if(this.K&&this.K.PN)return this.K.PN.apply(this,arguments);else return C.DeviceClass.
Bu1.apply(this,arguments);},Bu1:function(E){},UZ:function(Aq){this.PN(Aq);},UpdateOffsetID:
function(BbJ){if(this.AF===BbJ)return;this.AF=BbJ;A.abo([this,this.Ug,this.UZ],0
);},AFU:function(E){if(this.K&&this.K.AFU)return this.K.AFU.apply(this,arguments
);else return C.DeviceClass.Bvv.apply(this,arguments);},Bvv:function(E){A.ab5("%s"
,E$);},AIR:function(Aq){this.AFU(Aq);},UpdateWeightValue:function(AL){if(this.KX===
AL)return;this.KX=AL;A.abo([this,this.AEA,this.AIR],0);},AwJ:function(E){if(this.
K&&this.K.AwJ)return this.K.AwJ.apply(this,arguments);else return C.DeviceClass.
BuM.apply(this,arguments);},BuM:function(E){},AZ1:function(Aq){this.AwJ(Aq);},UpdateMassUnit:
function(AL){if(this.MassUnit===AL)return;this.MassUnit=AL;A.abo([this,this.ASs,
this.AZ1],0);},ArB:function(E){if(this.K&&this.K.ArB)return this.K.ArB.apply(this
,arguments);else return C.DeviceClass.Bal.apply(this,arguments);},Bal:function(E
){},BaA:function(Aq){this.ArB(Aq);},ArC:function(E){if(this.K&&this.K.ArC)return this.
K.ArC.apply(this,arguments);else return C.DeviceClass.Bam.apply(this,arguments);
},Bam:function(E){},AZV:function(Aq){this.ArC(Aq);},UpdateActiveActions:function(
AL){if(this.Ph===AL)return;this.Ph=AL;A.abo([this,this.A72,this.BaA],0);},UpdateActiveActionsOrder:
function(AL){if(this.Auw===AL)return;this.Auw=AL;A.abo([this,this.ASe,this.AZV],
0);},Akt:function(E){if(this.K&&this.K.Akt)return this.K.Akt.apply(this,arguments
);else return C.DeviceClass.Ban.apply(this,arguments);},Ban:function(E){},BaI:function(
Aq){this.Akt(Aq);},UpdateAutoActions:function(AL){if(this.AutoActions===AL)return;
this.AutoActions=AL;A.abo([this,this.A8b,this.BaI],0);},AGI:function(){if(this.K&&
this.K.AGI)return this.K.AGI.apply(this,arguments);else return C.DeviceClass.BvN.
apply(this,arguments);},BvN:function(){},AsD:function(){if(this.K&&this.K.AsD)return this.
K.AsD.apply(this,arguments);else return C.DeviceClass.BvR.apply(this,arguments);
},BvR:function(){},EB:function(E){if(this.K&&this.K.EB)return this.K.EB.apply(this
,arguments);else return C.DeviceClass.Bug.apply(this,arguments);},Bug:function(E
){},BvU:function(Aq){this.EB(Aq);},UpdateAnimalType:function(Em){if(this.AnimalType===
Em)return;this.AnimalType=Em;A.abo([this,this.PM,this.BvU],0);},Aw8:function(E){
if(this.K&&this.K.Aw8)return this.K.Aw8.apply(this,arguments);else return C.DeviceClass.
Bvt.apply(this,arguments);},Bvt:function(E){},Ba9:function(Aq){this.Aw8(Aq);},UpdateWeightRecordingMode:
function(BbX){if(this.WeightRecordingMode===BbX)return;this.WeightRecordingMode=
BbX;A.abo([this,this.A87,this.Ba9],0);},AFt:function(E){if(this.K&&this.K.AFt)return this.
K.AFt.apply(this,arguments);else return C.DeviceClass.Bu3.apply(this,arguments);
},Bu3:function(E){A.ab5("%s",Lu);},AZ5:function(Aq){this.AFt(Aq);},UpdatePredictedTempValue:
function(AL){if(this.AF5===AL)return;this.AF5=AL;A.abo([this,this.ASy,this.AZ5],
0);},SK:function(L6){if(this.K&&this.K.SK)return this.K.SK.apply(this,arguments);
else return C.DeviceClass.BvI.apply(this,arguments);},BvI:function(L6){},AEZ:function(
E){if(this.K&&this.K.AEZ)return this.K.AEZ.apply(this,arguments);else return C.DeviceClass.
Bus.apply(this,arguments);},Bus:function(E){},AIK:function(Aq){this.AEZ(Aq);},UpdateDemoMode:
function(AL){if(this.HB===AL)return;this.HB=AL;A.abo([this,this.AEr,this.AIK],0);
},AEG:function(E){if(this.K&&this.K.AEG)return this.K.AEG.apply(this,arguments);
else return C.DeviceClass.Bua.apply(this,arguments);},Bua:function(E){},BaE:function(
Aq){this.AEG(Aq);},UpdateAgeRegistration:function(BbI){if(this.AdO===BbI)return;
this.AdO=BbI;A.abo([this,this.A77,this.BaE],0);},Aw9:function(E){if(this.K&&this.
K.Aw9)return this.K.Aw9.apply(this,arguments);else return C.DeviceClass.Bvu.apply(
this,arguments);},Bvu:function(E){},Ba_:function(Aq){this.Aw9(Aq);},UpdateWeightRecordingScope:
function(BbN){if(this.WeightRecordingScope===BbN)return;this.WeightRecordingScope=
BbN;A.abo([this,this.A88,this.Ba_],0);},JP:function(E){if(this.K&&this.K.JP)return this.
K.JP.apply(this,arguments);else return C.DeviceClass.BuF.apply(this,arguments);}
,BuF:function(E){},AZ0:function(Aq){this.JP(Aq);},UpdateGender:function(L3){if(this.
Gender===L3)return;this.Gender=L3;A.abo([this,this.Wt,this.AZ0],0);},ArR:function(
E){if(this.K&&this.K.ArR)return this.K.ArR.apply(this,arguments);else return C.DeviceClass.
BuH.apply(this,arguments);},BuH:function(E){},AyD:function(Aq){this.ArR(Aq);},UpdateIDLastUsedMale:
function(Rm){if(this.Aq4===Rm)return;this.Aq4=Rm;A.abo([this,this.Av_,this.AyD],
0);},ArQ:function(E){if(this.K&&this.K.ArQ)return this.K.ArQ.apply(this,arguments
);else return C.DeviceClass.BuG.apply(this,arguments);},BuG:function(E){},AyC:function(
Aq){this.ArQ(Aq);},UpdateIDLastUsedFemale:function(Rm){if(this.Aq3===Rm)return;this.
Aq3=Rm;A.abo([this,this.Av9,this.AyC],0);},Zq:function(E){if(this.K&&this.K.Zq)return this.
K.Zq.apply(this,arguments);else return C.DeviceClass.Buf.apply(this,arguments);}
,Buf:function(E){},AII:function(Aq){this.Zq(Aq);},UpdateAnimalListContent:function(
AL){if(this.Kg===AL)return;this.Kg=AL;A.abo([this,this.AEo,this.AII],0);},AEI:function(
E){if(this.K&&this.K.AEI)return this.K.AEI.apply(this,arguments);else return C.DeviceClass.
Bub.apply(this,arguments);},Bub:function(E){},BaF:function(Aq){this.AEI(Aq);},UpdateAlarmListAction:
function(AL){if(this.AL_===AL)return;this.AL_=AL;A.abo([this,this.A79,this.BaF],
0);},AE2:function(E){if(this.K&&this.K.AE2)return this.K.AE2.apply(this,arguments
);else return C.DeviceClass.BuA.apply(this,arguments);},BuA:function(E){},BaN:function(
Aq){this.AE2(Aq);},UpdateFlashLightInMeasureState:function(BbD){if(this.AmL===BbD
)return;this.AmL=BbD;A.abo([this,this.A8i,this.BaN],0);},AeS:function(E){if(this.
K&&this.K.AeS)return this.K.AeS.apply(this,arguments);else return C.DeviceClass.
Bue.apply(this,arguments);},Bue:function(E){},AIH:function(Aq){this.AeS(Aq);},UpdateAnimalInfoContent:
function(AL){if(this.D9===AL)return;this.D9=AL;A.abo([this,this.AEn,this.AIH],0);
},AFT:function(E){if(this.K&&this.K.AFT)return this.K.AFT.apply(this,arguments);
else return C.DeviceClass.Bvp.apply(this,arguments);},Bvp:function(E){},Ba5:function(
Aq){this.AFT(Aq);},UpdateWatchListAction:function(AL){if(this.AVx===AL)return;this.
AVx=AL;A.abo([this,this.A83,this.Ba5],0);},AE4:function(E){if(this.K&&this.K.AE4
)return this.K.AE4.apply(this,arguments);else return C.DeviceClass.BuC.apply(this
,arguments);},BuC:function(E){},BaP:function(Aq){this.AE4(Aq);},UpdateFreshCowListAction:
function(AL){if(this.AOB===AL)return;this.AOB=AL;A.abo([this,this.A8k,this.BaP],
0);},ResetActiveActions:function(G){if(this.K&&this.K.ResetActiveActions)return this.
K.ResetActiveActions.apply(this,arguments);else return C.DeviceClass.BvA.apply(this
,arguments);},BvA:function(G){},BFS:function(s){this.ResetActiveActions(s);},ResetAutoActions:
function(G){if(this.K&&this.K.ResetAutoActions)return this.K.ResetAutoActions.apply(
this,arguments);else return C.DeviceClass.BvC.apply(this,arguments);},BvC:function(
G){},BFU:function(s){this.ResetAutoActions(s);},Awk:function(E){if(this.K&&this.
K.Awk)return this.K.Awk.apply(this,arguments);else return C.DeviceClass.Buh.apply(
this,arguments);},Buh:function(E){},BaG:function(Aq){this.Awk(Aq);},Ar4:function(
E){if(this.K&&this.K.Ar4)return this.K.Ar4.apply(this,arguments);else return C.DeviceClass.
Bvd.apply(this,arguments);},Bvd:function(E){},Ba0:function(Aq){this.Ar4(Aq);},Ar5:
function(E){if(this.K&&this.K.Ar5)return this.K.Ar5.apply(this,arguments);else return C.
DeviceClass.Bve.apply(this,arguments);},Bve:function(E){},Ba1:function(Aq){this.
Ar5(Aq);},Aso:function(G){if(this.K&&this.K.Aso)return this.K.Aso.apply(this,arguments
);else return C.DeviceClass.BvF.apply(this,arguments);},BvF:function(G){},BFX:function(
s){this.Aso(s);},UpdateTemperaturesLowString:function(AL){if(this.AGQ===AL)return;
this.AGQ=AL;A.abo([this,this.A8U,this.Ba1],0);},UpdateTemperaturesHighString:function(
AL){if(this.AGP===AL)return;this.AGP=AL;A.abo([this,this.A8T,this.Ba0],0);},UpdateAnimalTypesString:
function(AL){if(this.ABB===AL)return;this.ABB=AL;A.abo([this,this.A7$,this.BaG],
0);},AwD:function(E){if(this.K&&this.K.AwD)return this.K.AwD.apply(this,arguments
);else return C.DeviceClass.BuE.apply(this,arguments);},BuE:function(E){},BaR:function(
Aq){this.AwD(Aq);},UpdateFreshCowsHideMeasured:function(AL){if(this.AqR===AL)return;
this.AqR=AL;A.abo([this,this.A8m,this.BaR],0);},ArX:function(E){if(this.K&&this.
K.ArX)return this.K.ArX.apply(this,arguments);else return C.DeviceClass.BuX.apply(
this,arguments);},BuX:function(E){},BaW:function(Aq){this.ArX(Aq);},UpdateNaisIdLastUsedMale:
function(Xk){if(this.AEb===Xk)return;this.AEb=Xk;A.abo([this,this.A8C,this.BaW],
0);},ArW:function(E){if(this.K&&this.K.ArW)return this.K.ArW.apply(this,arguments
);else return C.DeviceClass.BuW.apply(this,arguments);},BuW:function(E){},BaV:function(
Aq){this.ArW(Aq);},UpdateNaisIdLastUsedFemale:function(Xk){if(this.AEa===Xk)return;
this.AEa=Xk;A.abo([this,this.A8B,this.BaV],0);},AwQ:function(E){if(this.K&&this.
K.AwQ)return this.K.AwQ.apply(this,arguments);else return C.DeviceClass.BuU.apply(
this,arguments);},BuU:function(E){},AyF:function(Aq){this.AwQ(Aq);},UpdateNaisIdIncrementMale:
function(Aln){if(this.ARM===Aln)return;this.ARM=Aln;A.abo([this,this.Awc,this.AyF
],0);},AwP:function(E){if(this.K&&this.K.AwP)return this.K.AwP.apply(this,arguments
);else return C.DeviceClass.BuT.apply(this,arguments);},BuT:function(E){},AyE:function(
Aq){this.AwP(Aq);},UpdateNaisIdIncrementFemale:function(Aln){if(this.ARL===Aln)return;
this.ARL=Aln;A.abo([this,this.Awb,this.AyE],0);},UpdateFirmware:function(){if(this.
K&&this.K.UpdateFirmware)return this.K.UpdateFirmware.apply(this,arguments);else
return C.DeviceClass.Bas.apply(this,arguments);},Bas:function(){},Ant:function(E
){if(this.K&&this.K.Ant)return this.K.Ant.apply(this,arguments);else return C.DeviceClass.
Bum.apply(this,arguments);},Bum:function(E){},BaJ:function(Aq){this.Ant(Aq);},UpdateBootloaderMessage:
function(AL){if(this.Aqr===AL)return;this.Aqr=AL;A.abo([this,this.A8e,this.BaJ],
0);},AED:function(E){if(this.K&&this.K.AED)return this.K.AED.apply(this,arguments
);else return C.DeviceClass.Bt7.apply(this,arguments);},Bt7:function(E){},Bay:function(
Aq){this.AED(Aq);},UpdateActionListAction:function(AL){if(this.ABu===AL)return;this.
ABu=AL;A.abo([this,this.A70,this.Bay],0);},Awi:function(E){if(this.K&&this.K.Awi
)return this.K.Awi.apply(this,arguments);else return C.DeviceClass.Bt8.apply(this
,arguments);},Bt8:function(E){},Baz:function(Aq){this.Awi(Aq);},UpdateActionListHideMeasured:
function(AL){if(this.Aqd===AL)return;this.Aqd=AL;A.abo([this,this.A71,this.Baz],
0);},Uh:function(E){if(this.K&&this.K.Uh)return this.K.Uh.apply(this,arguments);
else return C.DeviceClass.Bud.apply(this,arguments);},Bud:function(E){},AoA:function(
Aq){this.Uh(Aq);},UpdateAnimalIdGenerationMethod:function(Bb2){if(this.Ig===Bb2)
return;this.Ig=Bb2;A.abo([this,this.Anl,this.AoA],0);},Awv:function(E){if(this.K&&
this.K.Awv)return this.K.Awv.apply(this,arguments);else return C.DeviceClass.Buu.
apply(this,arguments);},Buu:function(E){},AZY:function(Aq){this.Awv(Aq);},UpdateDirectionOfCountingFemale:
function(Alh){if(this.ACq===Alh)return;this.ACq=Alh;A.abo([this,this.ASl,this.AZY
],0);},Aww:function(E){if(this.K&&this.K.Aww)return this.K.Aww.apply(this,arguments
);else return C.DeviceClass.Buv.apply(this,arguments);},Buv:function(E){},AZZ:function(
Aq){this.Aww(Aq);},UpdateDirectionOfCountingMale:function(Alh){if(this.ACr===Alh
)return;this.ACr=Alh;A.abo([this,this.ASm,this.AZZ],0);},Awx:function(E){if(this.
K&&this.K.Awx)return this.K.Awx.apply(this,arguments);else return C.DeviceClass.
Buw.apply(this,arguments);},Buw:function(E){},AIL:function(Aq){this.Awx(Aq);},UpdateDirectionOfCountingUnisex:
function(Alh){if(this.AuW===Alh)return;this.AuW=Alh;A.abo([this,this.AEs,this.AIL
],0);},ArS:function(E){if(this.K&&this.K.ArS)return this.K.ArS.apply(this,arguments
);else return C.DeviceClass.BuI.apply(this,arguments);},BuI:function(E){},AoB:function(
Aq){this.ArS(Aq);},UpdateIDLastUsedUnisex:function(Rm){if(this.AjT===Rm)return;this.
AjT=Rm;A.abo([this,this.Ano,this.AoB],0);},ArY:function(E){if(this.K&&this.K.ArY
)return this.K.ArY.apply(this,arguments);else return C.DeviceClass.BuY.apply(this
,arguments);},BuY:function(E){},AZ3:function(Aq){this.ArY(Aq);},UpdateNaisIdLastUsedUnisex:
function(Xk){if(this.AvX===Xk)return;this.AvX=Xk;A.abo([this,this.ASu,this.AZ3],
0);},AwR:function(E){if(this.K&&this.K.AwR)return this.K.AwR.apply(this,arguments
);else return C.DeviceClass.BuV.apply(this,arguments);},BuV:function(E){},AyG:function(
Aq){this.AwR(Aq);},UpdateNaisIdIncrementUnisex:function(Aln){if(this.ARN===Aln)return;
this.ARN=Aln;A.abo([this,this.Awd,this.AyG],0);},Akv:function(E){if(this.K&&this.
K.Akv)return this.K.Akv.apply(this,arguments);else return C.DeviceClass.Buy.apply(
this,arguments);},Buy:function(E){},AyB:function(Aq){this.Akv(Aq);},UpdateEartagNrAssignmentMode:
function(Ali){if(this.EartagNrAssignmentMode===Ali)return;this.EartagNrAssignmentMode=
Ali;A.abo([this,this.Av8,this.AyB],0);},NY:function(E){if(this.K&&this.K.NY)return this.
K.NY.apply(this,arguments);else return C.DeviceClass.Buo.apply(this,arguments);}
,Buo:function(E){},BvX:function(Aq){this.NY(Aq);},UpdateBreed:function(AcW){if(this.
Breed===AcW)return;this.Breed=AcW;A.abo([this,this.Av4,this.BvX],0);},AFm:function(
E){if(this.K&&this.K.AFm)return this.K.AFm.apply(this,arguments);else return C.DeviceClass.
BuQ.apply(this,arguments);},BuQ:function(E){},Bv0:function(Aq){this.AFm(Aq);},UpdateMiddlewareVersions:
function(Qa,A0K,A0L,A0R,A0z){this.Sv.OnSetTimestamp(Qa);this.Sv.AFh(A0K);this.Sv.
AFn(A0L);this.Sv.AFw(A0R);this.Sv.AEX(A0z);A.abo([this,this.BkE,this.Bv0],0);},AFg:
function(E){if(this.K&&this.K.AFg)return this.K.AFg.apply(this,arguments);else return C.
DeviceClass.BuK.apply(this,arguments);},BuK:function(E){},BvZ:function(Aq){this.
AFg(Aq);},UpdateMainboardVersions:function(Qa,A0I,A0J,A0H,A0X,A0Y,A0W){this.QV.OnSetTimestamp(
Qa);this.QV.AFe(A0I);this.QV.AFf(A0J);this.QV.AFd(A0H);this.QV.AFL(A0X);this.QV.
AFM(A0Y);this.QV.AFK(A0W);A.abo([this,this.BkC,this.BvZ],0);},AFN:function(E){if(
this.K&&this.K.AFN)return this.K.AFN.apply(this,arguments);else return C.DeviceClass.
Bvg.apply(this,arguments);},Bvg:function(E){},Bv6:function(Aq){this.AFN(Aq);},UpdateTorchboardVersions:
function(Qa,A0I,A0J,A0H,A0X,A0Y,A0W){this.SU.OnSetTimestamp(Qa);this.SU.AFe(A0I);
this.SU.AFf(A0J);this.SU.AFd(A0H);this.SU.AFL(A0X);this.SU.AFM(A0Y);this.SU.AFK(
A0W);A.abo([this,this.Bk1,this.Bv6],0);},AEN:function(E){if(this.K&&this.K.AEN)return this.
K.AEN.apply(this,arguments);else return C.DeviceClass.Bun.apply(this,arguments);
},Bun:function(E){},BvW:function(Aq){this.AEN(Aq);},UpdateBootloaderVersions:function(
Qa,A0K,A0L,A0R,A0z){this.RW.OnSetTimestamp(Qa);this.RW.AFh(A0K);this.RW.AFn(A0L);
this.RW.AFw(A0R);this.RW.AEX(A0z);A.abo([this,this.Bka,this.BvW],0);},AE0:function(
E){if(this.K&&this.K.AE0)return this.K.AE0.apply(this,arguments);else return C.DeviceClass.
Bux.apply(this,arguments);},Bux:function(E){},BaM:function(Aq){this.AE0(Aq);},UpdateDryCowListAction:
function(AL){if(this.ANY===AL)return;this.ANY=AL;A.abo([this,this.A8g,this.BaM],
0);},AJC:function(A0A){if(this.K&&this.K.AJC)return this.K.AJC.apply(this,arguments
);else return C.DeviceClass.Bwg.apply(this,arguments);},Bwg:function(A0A){return false;
},AEM:function(E){if(this.K&&this.K.AEM)return this.K.AEM.apply(this,arguments);
else return C.DeviceClass.Bul.apply(this,arguments);},Bul:function(E){},AIJ:function(
Aq){this.AEM(Aq);},UpdateBirthListView:function(AL){if(this.Aqp===AL)return;this.
Aqp=AL;A.abo([this,this.AEp,this.AIJ],0);},BatchResetBirthNoticePending:function(
){var B$=A._NewObject(C.Animal,0);var O;var AiV=0;var Ade=A._GetAutoObject(C.Device
).Am.Filter;var Be=A._GetAutoObject(C.Helper).AOF();A._GetAutoObject(C.Device).Am.
Bl(Be);for(O=0;O<A._GetAutoObject(C.Device).Am.Ca();O++){B$.EM(O,A._GetAutoObject(
C.Device).Am);B$.Ae0(false);B$.Cq(A._GetAutoObject(C.Device).Am);AiV++;}A._GetAutoObject(
C.Device).Am.Bl(Ade);return AiV;},UpdateTransferProgress:function(AL){if(this.AxH===
AL)return;this.AxH=AL;A.abo([this,this.ASH,this.A0a],0);},AFO:function(E){if(this.
K&&this.K.AFO)return this.K.AFO.apply(this,arguments);else return C.DeviceClass.
Bvh.apply(this,arguments);},Bvh:function(E){A.ab5("%s",P3);},A0a:function(Aq){this.
AFO(Aq);},UpdateTransferTarget:function(AL){if(this.Afl===AL)return;this.Afl=AL;
A.abo([this,this.A8X,this.Ba2],0);},Ar6:function(E){if(this.K&&this.K.Ar6)return this.
K.Ar6.apply(this,arguments);else return C.DeviceClass.Bvi.apply(this,arguments);
},Bvi:function(E){A.ab5("%s",JY);},Ba2:function(Aq){this.Ar6(Aq);},AsC:function(
){if(this.K&&this.K.AsC)return this.K.AsC.apply(this,arguments);else return C.DeviceClass.
BvQ.apply(this,arguments);},BvQ:function(){},AwV:function(E){if(this.K&&this.K.AwV
)return this.K.AwV.apply(this,arguments);else return C.DeviceClass.Bu4.apply(this
,arguments);},Bu4:function(E){},AZ6:function(Aq){this.AwV(Aq);},UpdatePremisesID:
function(Rm){if(this.Ut===Rm)return;this.Ut=Rm;A.abo([this,this.ASz,this.AZ6],0);
},AwO:function(E){if(this.K&&this.K.AwO)return this.K.AwO.apply(this,arguments);
else return C.DeviceClass.BuS.apply(this,arguments);},BuS:function(E){},AIO:function(
Aq){this.AwO(Aq);},UpdateMotherSelectionDriedOffFilter:function(AL){if(this.AbV===
AL)return;this.AbV=AL;A.abo([this,this.AEw,this.AIO],0);},AE5:function(E){if(this.
K&&this.K.AE5)return this.K.AE5.apply(this,arguments);else return C.DeviceClass.
BuD.apply(this,arguments);},BuD:function(E){},BaQ:function(Aq){this.AE5(Aq);},UpdateFreshCowSpan:
function(AL){if(this.AqQ===AL)return;this.AqQ=AL;A.abo([this,this.A8l,this.BaQ],
0);},UpdateUSBState:function(BbU){if(this.AhL===BbU)return;this.AhL=BbU;A.abo([this
,this.Wu,this.Xd],0);},AFP:function(E){if(this.K&&this.K.AFP)return this.K.AFP.apply(
this,arguments);else return C.DeviceClass.Bvl.apply(this,arguments);},Bvl:function(
E){A.ab5("%s",E4);},Xd:function(Aq){this.AFP(Aq);},AnS:function(AhZ){if(this.K&&
this.K.AnS)return this.K.AnS.apply(this,arguments);else return C.DeviceClass.BvK.
apply(this,arguments);},BvK:function(AhZ){return A._NewObject(C.AjD,0);},Are:function(
){if(this.K&&this.K.Are)return this.K.Are.apply(this,arguments);else return C.DeviceClass.
Bt6.apply(this,arguments);},Bt6:function(){return false;},AqB:function(Np){if(this.
K&&this.K.AqB)return this.K.AqB.apply(this,arguments);else return C.DeviceClass.
Bt1.apply(this,arguments);},Bt1:function(Np){},AFA:function(E){if(this.K&&this.K.
AFA)return this.K.AFA.apply(this,arguments);else return C.DeviceClass.Bu9.apply(
this,arguments);},Bu9:function(E){},Bv3:function(Aq){this.AFA(Aq);},UpdateSerialNumber:
function(AL){if(this.AhB===AL)return;this.AhB=AL;A.abo([this,this.BkQ,this.Bv3],
0);},Awj:function(E){if(this.K&&this.K.Awj)return this.K.Awj.apply(this,arguments
);else return C.DeviceClass.Buc.apply(this,arguments);},Buc:function(E){},AZW:function(
Aq){this.Awj(Aq);},UpdateAnimalIdAutoGenerationMethod:function(Bb1){if(this.Agq===
Bb1)return;this.Agq=Bb1;A.abo([this,this.ASf,this.AZW],0);},ACd:function(){return false;
},AGi:function(){return false;},AFC:function(E){if(this.K&&this.K.AFC)return this.
K.AFC.apply(this,arguments);else return C.DeviceClass.Bu_.apply(this,arguments);
},Bu_:function(E){},BaZ:function(Aq){this.AFC(Aq);},UpdateShutdownTimer:function(
AL){if(this.AUJ===AL)return;this.AUJ=AL;A.abo([this,this.A8Q,this.BaZ],0);},Asp:
function(G){if(this.K&&this.K.Asp)return this.K.Asp.apply(this,arguments);else return C.
DeviceClass.BvG.apply(this,arguments);},BvG:function(G){},BFY:function(s){this.Asp(
s);},Ar9:function(E){if(this.K&&this.K.Ar9)return this.K.Ar9.apply(this,arguments
);else return C.DeviceClass.Bvr.apply(this,arguments);},Bvr:function(E){},Ba7:function(
Aq){this.Ar9(Aq);},Ar_:function(E){if(this.K&&this.K.Ar_)return this.K.Ar_.apply(
this,arguments);else return C.DeviceClass.Bvs.apply(this,arguments);},Bvs:function(
E){},Ba8:function(Aq){this.Ar_(Aq);},UpdateWeightGainsLowString:function(AL){if(
this.AG$===AL)return;this.AG$=AL;A.abo([this,this.A86,this.Ba8],0);},UpdateWeightGainsHighString:
function(AL){if(this.AG_===AL)return;this.AG_=AL;A.abo([this,this.A85,this.Ba7],
0);},Awl:function(E){if(this.K&&this.K.Awl)return this.K.Awl.apply(this,arguments
);else return C.DeviceClass.Bui.apply(this,arguments);},Bui:function(E){},BaH:function(
Aq){this.Awl(Aq);},UpdateAnimalTypesWeightGainsString:function(AL){if(this.ABC===
AL)return;this.ABC=AL;A.abo([this,this.A8a,this.BaH],0);},Ar8:function(E){if(this.
K&&this.K.Ar8)return this.K.Ar8.apply(this,arguments);else return C.DeviceClass.
Bvq.apply(this,arguments);},Bvq:function(E){},Ba6:function(Aq){this.Ar8(Aq);},Ar$:
function(E){if(this.K&&this.K.Ar$)return this.K.Ar$.apply(this,arguments);else return C.
DeviceClass.Bvw.apply(this,arguments);},Bvw:function(E){},Ba$:function(Aq){this.
Ar$(Aq);},UpdateWeightValueBirthString:function(AL){if(this.AHc===AL)return;this.
AHc=AL;A.abo([this,this.A89,this.Ba$],0);},UpdateWeightGainsAverageString:function(
AL){if(this.AG9===AL)return;this.AG9=AL;A.abo([this,this.A84,this.Ba6],0);},Awy:
function(E){if(this.K&&this.K.Awy)return this.K.Awy.apply(this,arguments);else return C.
DeviceClass.Buz.apply(this,arguments);},Buz:function(E){},BvY:function(Aq){this.
Awy(Aq);},UpdateEvaluationAnimalType:function(Em){if(this.ACy===Em)return;this.ACy=
Em;A.abo([this,this.Bkl,this.BvY],0);},UpdateStartScreen:function(AL){if(this.Axz===
AL)return;this.Axz=AL;A.abo([this,this.BkR,this.Bv4],0);},AwZ:function(E){if(this.
K&&this.K.AwZ)return this.K.AwZ.apply(this,arguments);else return C.DeviceClass.
Bu$.apply(this,arguments);},Bu$:function(E){},Bv4:function(Aq){this.AwZ(Aq);},ADN:
function(){if(this.K&&this.K.ADN)return this.K.ADN.apply(this,arguments);else return C.
DeviceClass.Bt4.apply(this,arguments);},Bt4:function(){return 1;},ADO:function(){
if(this.K&&this.K.ADO)return this.K.ADO.apply(this,arguments);else return C.DeviceClass.
Bt5.apply(this,arguments);},Bt5:function(){return 1;},GetCommitCount:function(){
return 1895;},GetCommitEpoch:function(){return 1710328383;},GetCommitHash:function(
){return A.kR.Bhi;},GetVersionMajor:function(){return 0;},GetVersionMinor:function(
){return 9;},GetVersionRev:function(){return 9;},AFl:function(E){if(this.K&&this.
K.AFl)return this.K.AFl.apply(this,arguments);else return C.DeviceClass.BuO.apply(
this,arguments);},BuO:function(E){},BaU:function(Aq){this.AFl(Aq);},UpdateMaximumAgeNewOnFarm:
function(AL){if(this.AD6===AL)return;this.AD6=AL;A.abo([this,this.A8A,this.BaU],
0);},Aw5:function(E){if(this.K&&this.K.Aw5)return this.K.Aw5.apply(this,arguments
);else return C.DeviceClass.Bvj.apply(this,arguments);},Bvj:function(E){},A0b:function(
Aq){this.Aw5(Aq);},UpdateTransponderAssignmentIdChangeMethod:function(AyV){if(this.
Ak2===AyV)return;this.Ak2=AyV;A.abo([this,this.ASI,this.A0b],0);},BatchResetPurchasedNoticePending:
function(){var B$=A._NewObject(C.Animal,0);var O;var AiV=0;var Ade=A._GetAutoObject(
C.Device).Am.Filter;var Be=A._GetAutoObject(C.Helper).ACT();A._GetAutoObject(C.Device
).Am.Bl(Be);for(O=0;O<A._GetAutoObject(C.Device).Am.Ca();O++){B$.EM(O,A._GetAutoObject(
C.Device).Am);B$.Ae0(false);B$.Cq(A._GetAutoObject(C.Device).Am);AiV++;}A._GetAutoObject(
C.Device).Am.Bl(Ade);return AiV;},AEY:function(E){if(this.K&&this.K.AEY)return this.
K.AEY.apply(this,arguments);else return C.DeviceClass.Bur.apply(this,arguments);
},Bur:function(E){},AZX:function(Aq){this.AEY(Aq);},UpdateDataExportDestination:
function(AL){if(this.VM===AL)return;this.VM=AL;A.abo([this,this.ASk,this.AZX],0);
},BmE:function(E){},UpdateMassRecordingAutomatic:function(AL){if(this.ARy===AL)return;
this.ARy=AL;A.abo([this,this.BkD,this.BmE],0);},Nf:function(E){if(this.K&&this.K.
Nf)return this.K.Nf.apply(this,arguments);else return C.DeviceClass.Bvx.apply(this
,arguments);},Bvx:function(E){},Bv7:function(Aq){this.Nf(Aq);},UpdateWhereAbouts:
function(AfH){if(this.WhereAbouts===AfH)return;this.WhereAbouts=AfH;A.abo([this,
this.Awg,this.Bv7],0);},ArE:function(E){if(this.K&&this.K.ArE)return this.K.ArE.
apply(this,arguments);else return C.DeviceClass.Bt9.apply(this,arguments);},Bt9:
function(E){},BaB:function(Aq){this.ArE(Aq);},ArF:function(E){if(this.K&&this.K.
ArF)return this.K.ArF.apply(this,arguments);else return C.DeviceClass.Bt_.apply(
this,arguments);},Bt_:function(E){},BaC:function(Aq){this.ArF(Aq);},UpdateActiveMassRecordingFields:
function(AL){if(this.ABv===AL)return;this.ABv=AL;A.abo([this,this.A73,this.BaB],
0);},UpdateActiveMassRecordingFieldsOrder:function(AL){if(this.ABw===AL)return;this.
ABw=AL;A.abo([this,this.A74,this.BaC],0);},Asm:function(G){if(this.K&&this.K.Asm
)return this.K.Asm.apply(this,arguments);else return C.DeviceClass.BvB.apply(this
,arguments);},BvB:function(G){},BFT:function(s){this.Asm(s);},AFj:function(E){if(
this.K&&this.K.AFj)return this.K.AFj.apply(this,arguments);else return C.DeviceClass.
BuL.apply(this,arguments);},BuL:function(E){},AIM:function(Aq){this.AFj(Aq);},UpdateMassRecordingDateOfBirthMandatory:
function(AL){if(this.AeJ===AL)return;this.AeJ=AL;A.abo([this,this.AEt,this.AIM],
0);},AFi:function(E){this.UpdateMassRecordingCounter(E);},UpdateMassRecordingCounter:
function(AL){if(this.AvR===AL)return;this.AvR=AL;A.abo([this,this.A8y,this.AFi],
0);},Ajy:function(){if(this.K&&this.K.Ajy)return this.K.Ajy.apply(this,arguments
);else return C.DeviceClass.BtZ.apply(this,arguments);},BtZ:function(){return false;
},Aqn:function(){if(this.K&&this.K.Aqn)return this.K.Aqn.apply(this,arguments);else
return C.DeviceClass.BtY.apply(this,arguments);},BtY:function(){return false;},Aqm:
function(){if(this.K&&this.K.Aqm)return this.K.Aqm.apply(this,arguments);else return C.
DeviceClass.BtX.apply(this,arguments);},BtX:function(){return false;},AuK:function(
){if(this.K&&this.K.AuK)return this.K.AuK.apply(this,arguments);else return C.DeviceClass.
Bt0.apply(this,arguments);},Bt0:function(){return false;},AwL:function(E){if(this.
K&&this.K.AwL)return this.K.AwL.apply(this,arguments);else return C.DeviceClass.
BuN.apply(this,arguments);},BuN:function(E){},BaT:function(Aq){this.AwL(Aq);},UpdateMaxWeightValuePrecision:
function(AL){if(this.OJ===AL)return;this.OJ=AL;A.abo([this,this.A8z,this.BaT],0);
},AwS:function(E){if(this.K&&this.K.AwS)return this.K.AwS.apply(this,arguments);
else return C.DeviceClass.BuZ.apply(this,arguments);},BuZ:function(E){},BaX:function(
Aq){this.AwS(Aq);},UpdateNoNaisIdListActions:function(AL){if(this.ARZ===AL)return;
this.ARZ=AL;A.abo([this,this.A8D,this.BaX],0);},ResetNoNaisIdListActions:function(
G){if(this.K&&this.K.ResetNoNaisIdListActions)return this.K.ResetNoNaisIdListActions.
apply(this,arguments);else return C.DeviceClass.BvD.apply(this,arguments);},BvD:
function(G){},BFV:function(s){this.ResetNoNaisIdListActions(s);},AwT:function(E){
if(this.K&&this.K.AwT)return this.K.AwT.apply(this,arguments);else return C.DeviceClass.
Bu0.apply(this,arguments);},Bu0:function(E){},BaY:function(Aq){this.AwT(Aq);},UpdateNoTransponderListActions:
function(AL){if(this.AR4===AL)return;this.AR4=AL;A.abo([this,this.A8E,this.BaY],
0);},ResetNoTransponderListActions:function(G){if(this.K&&this.K.ResetNoTransponderListActions
)return this.K.ResetNoTransponderListActions.apply(this,arguments);else return C.
DeviceClass.BvE.apply(this,arguments);},BvE:function(G){},BFW:function(s){this.ResetNoTransponderListActions(
s);},Aw$:function(E){if(this.K&&this.K.Aw$)return this.K.Aw$.apply(this,arguments
);else return C.DeviceClass.Bvy.apply(this,arguments);},Bvy:function(E){},Bba:function(
Aq){this.Aw$(Aq);},UpdateYoungNoTransponderListActions:function(AL){if(this.AVM===
AL)return;this.AVM=AL;A.abo([this,this.A8$,this.Bba],0);},ResetYoungNoTransponderListActions:
function(G){if(this.K&&this.K.ResetYoungNoTransponderListActions)return this.K.ResetYoungNoTransponderListActions.
apply(this,arguments);else return C.DeviceClass.BvH.apply(this,arguments);},BvH:
function(G){},BFZ:function(s){this.ResetYoungNoTransponderListActions(s);},Aw6:function(
E){if(this.K&&this.K.Aw6)return this.K.Aw6.apply(this,arguments);else return C.DeviceClass.
Bvk.apply(this,arguments);},Bvk:function(E){},A0c:function(Aq){this.Aw6(Aq);},UpdateTransponderUnlinkIdChangeMethod:
function(AyV){if(this.An3===AyV)return;this.An3=AyV;A.abo([this,this.ASJ,this.A0c
],0);},AEm:function(){return this.KH;},Av2:function(){return this.Aa4;},Av5:function(
){return this.Amy;},ASC:function(){return this.ScanState;},AEu:function(){return this.
MeasureState;},AEy:function(){return this.Kv;},A8u:function(){return this.Language;
},Arx:function(){return this.TemperatureUnit;},A8f:function(){return this.AM0;},
ASt:function(){return this.AD$;},Awf:function(){return this.OverlayMenu;},A8Y:function(
){return this.Z1;},ASE:function(){return this.SyncState;},A8Z:function(){return this.
AsM;},AEz:function(){return this.AVv;},ASB:function(){return this.RatingMode;},Aru:
function(){return this.AmM;},ASG:function(){return this.AVb;},BkJ:function(){return this.
ATZ;},Bj9:function(){return this.AutoRegistrationMode;},ASD:function(){return this.
OQ;},Uf:function(){return this.A1;},Ug:function(){return this.AF;},AEA:function(
){return this.KX;},ASs:function(){return this.MassUnit;},A72:function(){return this.
Ph;},ASe:function(){return this.Auw;},A8b:function(){return this.AutoActions;},PM:
function(){return this.AnimalType;},A87:function(){return this.WeightRecordingMode;
},ASy:function(){return this.AF5;},AEr:function(){return this.HB;},A77:function(
){return this.AdO;},A88:function(){return this.WeightRecordingScope;},Wt:function(
){return this.Gender;},Av_:function(){return this.Aq4;},Av9:function(){return this.
Aq3;},AEo:function(){return this.Kg;},A79:function(){return this.AL_;},A8i:function(
){return this.AmL;},AEn:function(){return this.D9;},A83:function(){return this.AVx;
},A8k:function(){return this.AOB;},A7$:function(){return this.ABB;},A8T:function(
){return this.AGP;},A8U:function(){return this.AGQ;},A8m:function(){return this.
AqR;},A8C:function(){return this.AEb;},A8B:function(){return this.AEa;},Awc:function(
){return this.ARM;},Awb:function(){return this.ARL;},A8e:function(){return this.
Aqr;},A70:function(){return this.ABu;},A71:function(){return this.Aqd;},Anl:function(
){return this.Ig;},ASl:function(){return this.ACq;},ASm:function(){return this.ACr;
},AEs:function(){return this.AuW;},Ano:function(){return this.AjT;},ASu:function(
){return this.AvX;},Awd:function(){return this.ARN;},Av8:function(){return this.
EartagNrAssignmentMode;},Av4:function(){return this.Breed;},BkE:function(){return this.
Sv;},BkC:function(){return this.QV;},Bk1:function(){return this.SU;},Bka:function(
){return this.RW;},A8g:function(){return this.ANY;},AEp:function(){return this.Aqp;
},ASH:function(){return this.AxH;},A8X:function(){return this.Afl;},ASz:function(
){return this.Ut;},AEw:function(){return this.AbV;},A8l:function(){return this.AqQ;
},Wu:function(){return this.AhL;},BkQ:function(){return this.AhB;},ASf:function(
){return this.Agq;},A8Q:function(){return this.AUJ;},A85:function(){return this.
AG_;},A86:function(){return this.AG$;},A8a:function(){return this.ABC;},A84:function(
){return this.AG9;},A89:function(){return this.AHc;},Bkl:function(){return this.
ACy;},BkR:function(){return this.Axz;},A8A:function(){return this.AD6;},ASI:function(
){return this.Ak2;},ASk:function(){return this.VM;},BkD:function(){return this.ARy;
},Awg:function(){return this.WhereAbouts;},A73:function(){return this.ABv;},A74:
function(){return this.ABw;},AEt:function(){return this.AeJ;},A8y:function(){return this.
AvR;},A8z:function(){return this.OJ;},A8D:function(){return this.ARZ;},A8E:function(
){return this.AR4;},A8$:function(){return this.AVM;},ASJ:function(){return this.
An3;},_Init:function(aArg){C.Table._Init.call(this.Am={I:this},0);C.Table._Init.
call(this.Bt={I:this},0);C.Table._Init.call(this.Ago={I:this},0);A.Core.A$g._Init.
call(this.AnK={I:this},0);C.Table._Init.call(this.Pl={I:this},0);this.__proto__=
C.DeviceClass;this.Am.OnSetId(0);this.Bt.OnSetId(1);this.Ago.OnSetId(3);this.Pl.
OnSetId(4);this.OQ=A._NewObject(C.Transponder,0);this.Sv=A._NewObject(C.Axx,0);this.
QV=A._NewObject(C.Avn,0);this.SU=A._NewObject(C.Avn,0);this.RW=A._NewObject(C.Axx
,0);var Lw=this._variants();if(Lw){this.K={};Lw._Init.call(this,aArg);}A.h7++;},
_Done:function(){if(this.K)this.K._Done.call(this);this.__proto__=null;this.Am._Done(
);this.Bt._Done();this.Ago._Done();this.AnK._Done();this.Pl._Done();A.h7--;},_ReInit:
function(){this.Am._ReInit();this.Bt._ReInit();this.Ago._ReInit();this.AnK._ReInit(
);this.Pl._ReInit();if(this.K)this.K._ReInit.call(this);},_Mark:function(D){var B;
if((B=this.OQ)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Sv)&&(B._cycle!=D))
B._Mark(B._cycle=D);if((B=this.QV)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.
SU)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.RW)&&(B._cycle!=D))B._Mark(B._cycle=
D);if((B=this.Am)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Bt)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Ago)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AnK)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.Pl)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
I)&&(B._cycle!=D))B._Mark(B._cycle=D);if(this.K)this.K._Mark(D);},_variants:function(
){return A.acs.DeviceClass._variants();},K:null,I:null,_cycle:0,_observers:null,
_className:"Device::DeviceClass"};C.Device={_Init:function(){C.DeviceClass._Init.
call(this,0);},_ReInit:function(){},_variants:function(){return this;},_this:null
};C.ScreenType={UNDEFINED:0,Sleep:1,Boot:2,Home:3,Charge:4,Sync:5,Settings:6,EditAnimalData:
7,AnimalList:8,AnimalListFilter:9,AnimalActionTemperature:10,AnimalActionRate:11
,AlarmList:12,ControlMeasure:13,ControlList:14,RangeTest:15,DateTimeSettings:16,
TemperatureSettings:17,DeviceSettings:18,RegistrationSettings:19,WatchList:20,AnimalActionWeighing:
21,UnitsSettings:22,WeightGainSettings:23,AnimalActionActions:24,EvaluationMenuMain:
25,NewAnimals:26,MassRecordingScreen:27,NewAnimalManualData:28,AnimalActionUnregister:
29,AnimalActionNewbornCare:30,NewAnimalTransponderData:31,SetTransponderScreen:32
,WeightListScreen:33,AutoActionScanScreen:34,ManualActionScanScreen:35,AnimalSingleInfoScreen:
36,InitializationSettings:37,ControlledPowerOff:38,ChargeWarning:39,AlarmListFilter:
40,WatchListFilter:41,DataAcquisitionSettings:42,FreshCowList:43,FreshCowListFilter:
44,SetSaveTransponderScreen:45,NoTransponderList:46,NoTransponderListFilter:47,AnimalActionPerished:
48,NewAnimalSetTransponderScreen:49,AnimalMultiInfoScreen:50,ActionList:51,ActionListFilter:
52,Update:53,NewAnimalCalvingData:54,NewAnimalsSetTransponderScreen:55,EvaluationTemperatures:
56,EvaluationWeights:57,EvaluationRatings:58,EvaluationLosses:59,TemperatureMeasurement:
60,DryCowList:61,DryCowListFilter:62,DeviceMain:63,DeviceService:64,DeviceCheck:
65,EvaluationMenuWeights:66,EvaluationBirthWeights:67,EvaluationWeightsRecent:68
,ListsMain:69,ListsIdManagement:70,NoNaisIdList:71,NoNaisIdListFilter:72,RegistrationsListFilter:
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
VV.apply(this,arguments);else return C.ITable.VV.apply(this,arguments);},Sg:function(
Ad,A3){if(this.K&&this.K.Sg)return this.K.Sg.apply(this,arguments);else return C.
ITable.Sg.apply(this,arguments);},Ox:function(){if(this.K&&this.K.Ox)return this.
K.Ox.apply(this,arguments);else return C.ITable.Ox.apply(this,arguments);},Oz:function(
AoP){if(this.K&&this.K.Oz)return this.K.Oz.apply(this,arguments);else return C.ITable.
Oz.apply(this,arguments);},YE:function(){if(this.K&&this.K.YE)return this.K.YE.apply(
this,arguments);else return C.ITable.YE.apply(this,arguments);},ZK:function(Ad,A3
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
ITable.KN.apply(this,arguments);},SL:function(Ad,A3,C0){if(this.K&&this.K.SL)return this.
K.SL.apply(this,arguments);else return C.ITable.SL.apply(this,arguments);},AgO:function(
aColumn,A7){if(this.K&&this.K.AgO)return this.K.AgO.apply(this,arguments);else return C.
ITable.AgO.apply(this,arguments);},Hi:function(){if(this.K&&this.K.Hi)return this.
K.Hi.apply(this,arguments);else return C.ITable.Hi.apply(this,arguments);},AjI:function(
aColumn,A7){if(this.K&&this.K.AjI)return this.K.AjI.apply(this,arguments);else return C.
ITable.AjI.apply(this,arguments);},Aeh:function(aColumn,A7){if(this.K&&this.K.Aeh
)return this.K.Aeh.apply(this,arguments);else return C.ITable.Aeh.apply(this,arguments
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
3,Faeces:4};C.ConverterClass={M0:null,AkZ:function(AoN){var Bcy;var Aui=this.AU2(
AoN/100,0,A._GetAutoObject(C.Device).TemperatureUnit);Bcy=A.abk(Aui,0,1);return Bcy;
},A$o:function(Nm){if(Nm<=0)return 0;else if(Nm<=1)return 5;else if(Nm<=2)return 3;
else if(Nm<=4)return 2;else if(Nm<=6)return 1;else if(Nm<=8)return 4;else return 0;
},AdX:function(Nm){var a=0;switch(Nm){case 3:a=2;break;case 2:a=4;break;case 1:a=
6;break;case 0:a=0;break;case 4:a=8;break;case 5:a=1;break;default:A.ab5("%s",N_
);}return a;},AsE:function(Em,Rq){var Nq=A._GetAutoObject(C.Converter).Ajk(Rq,Em
);switch(Nq){case 3:return 1;case 2:return 2;case 1:return 3;case 0:return 4;default:
throw new Error(P4+Nq.toFixed());}},AhJ:function(){var B;var D8=A._NewObject(A.Core.
Bs,0).Initialize(A._GetAutoObject(C.Helper).Dv());D8.Anx(0);D8.AnA(0);D8.AnD(0);
return((B=(D8.JN()|0))<0)?B+0x100000000:B;},Bhm:function(Ath){var Dm;switch(Ath){
case 36:Dm=MF;break;case 40:Dm=S5;break;case 56:Dm=UO;break;case 70:Dm=Z5;break;
case 100:Dm=W1;break;case 124:Dm=Iq;break;case 156:Dm=UP;break;case 158:Dm=Z6;break;
case 191:Dm=W2;break;case 196:Dm=Z7;break;case 203:Dm=W3;break;case 208:Dm=Z8;break;
case 233:Dm=Z9;break;case 246:Dm=UQ;break;case 250:Dm=W4;break;case 276:Dm=P5;break;
case 300:Dm=Z_;break;case 348:Dm=O2;break;case 372:Dm=Ri;break;case 380:Dm=W5;break;
case 392:Dm=W6;break;case 428:Dm=W7;break;case 440:Dm=W8;break;case 442:Dm=Z$;break;
case 470:Dm=W9;break;case 528:Dm=W_;break;case 578:Dm=S6;break;case 616:Dm=UR;break;
case 620:Dm=US;break;case 642:Dm=AcL;break;case 643:Dm=S7;break;case 703:Dm=Aaa;
break;case 705:Dm=Afv;break;case 724:Dm=Aab;break;case 752:Dm=W$;break;case 756:
Dm=Aac;break;case 792:Dm=Aad;break;case 804:Dm=AhO;break;case 826:Dm=JZ;break;case
840:Dm=Aae;break;default:Dm=Ath.toFixed();}return Dm;},Ak8:function(MK){var Aat;
if((MK<10000)&&(A._GetAutoObject(C.Device).OJ===2))Aat=2;else if((MK<100000)&&!!
A._GetAutoObject(C.Device).OJ)Aat=1;else Aat=0;return this.S3(MK,Aat,false);},AxU:
function(MK,Aat){return this.S3(MK,Aat,false);},S3:function(MK,Aat,Bzs){var B;var
AlA=A.jV;switch(A._GetAutoObject(C.Device).MassUnit){case 0:if(Bzs)AlA=A.abl(MK,
0,0);else{var BdV=MK<0;if(Aat<3)MK=MK+(((BdV?-1:1)*5)*(Math.pow(10,2-Aat)|0));AlA=(((((
B=MK)>-2147483648)?Math.abs(B):B)/1000)|0).toFixed();if(Aat>0)AlA=AlA+(Lv+A.abV(
A.abl((((B=MK)>-2147483648)?Math.abs(B):B)%1000,3,10),Aat));if(BdV)AlA=AhP+AlA;}
break;case 1:AlA=A.abk(MK/453.592,0,Aat);break;default:A.ab5("%s%s",Aob,A._GetAutoObject(
C.Device).MassUnit.toFixed());}return AlA;},Rf:function(Jf){var A3$=Jf.toFixed();
var Bgb=A3$.length;if((Bgb>=14)&&(Bgb<=15)){var A15=this.AxK(Jf);var Byh=A._GetAutoObject(
C.Converter).Bhm(A15);A3$=(Byh+N$)+A.abm(A._GetAutoObject(C.Helper).Se(Jf,0,12),
12,10);}return A3$;},AmP:function(L3){switch(L3){case 0:return A.aaL(A.ach.AQt);
case 1:return A.aaL(A.ach.ADv);case 2:return A.aaL(A.ach.ADA);default:{A.ab5("%s%e"
,Xa,L3);return null;}}},A4N:function(BxP){switch(BxP){case 0:return A.aaL(A.ach.
Avx);case 1:return A.aaL(A.ach.ADr);case 2:return A.aaL(A.ach.AQn);default:throw new
Error(Aoc);}},AdV:function(AJh){switch(AJh){case 0:case 14:return A.aaL(A.ach.AjU
);case 2:return A.aaL(A.ach.AmX);case 1:return A.aaL(A.ach.AbD);case 3:switch(A.
_GetAutoObject(C.Device).MassUnit){case 0:return A.aaL(A.ach.AvG);case 1:return A.
aaL(A.ach.AvH);default:throw new Error(AhQ+A._GetAutoObject(C.Device).MassUnit.toFixed(
));}break;case 4:return A.aaL(A.ach.APP);case 5:return A.aaL(A.ach.APQ);case 6:return A.
aaL(A.ach.APV);case 7:return A.aaL(A.ach.APd);case 8:case 13:return A.aaL(A.ach.
APk);case 9:return A.aaL(A.ach.AC3);case 10:return A.aaL(A.ach.APj);case 12:return A.
aaL(A.ach.APl);case 11:return A.aaL(A.ach.ADp);default:throw new Error(AhR+AJh.toFixed(
));}},BgO:function(AyZ){switch(AyZ){case 0:return A.aaL(A.ach.ADy);case 3:return A.
aaL(A.ach.AmX);case 1:return A.aaL(A.ach.AbD);case 2:return A._GetAutoObject(A.acj.
DV).BcX();default:throw new Error(AhR+AyZ.toFixed());}},Bhl:function(Ath){switch(
Ath){case 977:return AcM;case 978:return UT;case 980:return Aod;case 981:return Aoe;
case 982:return Aof;case 983:return Aog;case 984:return Afw;case 985:return Ak$;
default:return A.aaR(A.acf.Unknown);}},BhF:function(AcX){switch(AcX){case 1:return 0x278A;
case 2:return 0x278B;case 3:return 0x278C;case 4:return 0x278D;case 5:return 0x278E;
case 6:return 0x278F;case 7:return 0x2790;case 8:return 0x2791;case 9:return 0x2792;
case 10:return 0x2793;default:return 0x20;}},Bpr:function(Jf){if(!Jf)return-1;return(
Jf%100000000)|0;},Bib:function(AoM,aFilter){var B;if(!aFilter)return AxW;var Ape=
AxX;var Av=aFilter.AOJ();while(!!Av){Ape=Ape+A._GetAutoObject(C.Helper).A6s(AoM,
Av);Av=aFilter.AOO(Av);if(!!Av)Ape=Ape+O3;}Ape=Ape+Rj;return Ape;},A69:function(
BbE){var MH=0;switch(BbE){case 14:MH=2;break;case 13:MH=4;break;case 6:MH=36;break;
case 11:MH=9;break;case 0:MH=39;break;case 10:MH=26;break;case 12:MH=12;break;case
5:MH=14;break;case 3:MH=15;break;case 1:MH=10;break;case 8:MH=16;break;case 4:MH=
20;break;case 15:MH=27;break;case 9:MH=31;break;case 2:MH=13;break;case 7:MH=35;
break;case 16:MH=37;break;default:A.ab5("%s%e",AxY,BbE);}return MH;},BgN:function(
AyZ){switch(AyZ){case 0:return 1;case 3:return 0;case 1:return 2;case 2:switch(A.
_GetAutoObject(C.Device).MassUnit){case 0:return 3;case 1:return 4;default:throw new
Error(AhQ+A._GetAutoObject(C.Device).MassUnit.toFixed());}break;default:throw new
Error(AhR+AyZ.toFixed());}},BgP:function(AoX){switch(AoX){case 0:return A.aaL(A.
ach.APM);case 1:return A.aaL(A.ach.ADy);case 9:return A.aaL(A.ach.APX);case 4:return A.
aaL(A.ach.AGg);case 6:return A.aaL(A.ach.Ask);case 8:return A.aaL(A.ach.Avr);case
2:return A.aaL(A.ach.AbD);case 3:return A.aaL(A.ach.AmX);case 10:switch(A._GetAutoObject(
C.Device).MassUnit){case 0:return A.aaL(A.ach.AvG);case 1:return A.aaL(A.ach.AvH
);default:throw new Error(AhQ+A._GetAutoObject(C.Device).MassUnit.toFixed());}break;
case 7:case 5:case 11:case 12:case 13:case 14:case 18:case 15:case 16:case 17:return A.
aaL(A.aci.TJ);default:throw new Error(UU+AoX.toFixed());}},ANx:function(Ath){switch(
Ath){case 40:return 1;case 56:return 3;case 70:return 2;case 100:return 4;case 124:
return 5;case 156:return 7;case 158:return 36;case 191:return 17;case 196:return 8;
case 203:return 9;case 208:return 11;case 233:return 12;case 246:return 14;case 250:
return 15;case 276:return 10;case 300:return 16;case 348:return 18;case 372:return 19;
case 380:return 20;case 392:return 21;case 428:return 24;case 440:return 22;case
442:return 23;case 470:return 25;case 528:return 26;case 578:return 27;case 616:
return 28;case 620:return 29;case 642:return 30;case 643:return 31;case 703:return 34;
case 705:return 33;case 724:return 13;case 752:return 32;case 756:return 6;case 792:
return 35;case 804:return 37;case 826:return 38;case 840:return 39;default:return 0;
}},ZZ:function(Jf){var A15=this.AxK(Jf);return this.ANx(A15);},AxK:function(Jf){
return A._GetAutoObject(C.Helper).Se(Jf,12,3)|0;},A$H:function(AoR,Em){if(AoR<A.
_GetAutoObject(C.Helper).ACZ(Em))return 1;else if(AoR<A._GetAutoObject(C.Helper).
ACY(Em))return 2;else return 3;},ACM:function(Bxt){switch(Bxt){case 1:return 1;case
2:return 2;case 3:return 3;case 4:return 4;case 5:return 5;case 6:return 6;case 7:
return 7;case 8:return 8;case 9:return 9;case 10:return 10;case 11:return 11;case
12:return 12;case 13:return 13;case 14:return 14;case 15:return 15;case 16:return 16;
default:return 0;}},AU2:function(A7,AI$,AJa){if(AI$===AJa)return A7;if(!AI$&&(AJa===
1)){var result=((A7*9)/5)+32;return result;}if((AI$===1)&&!AJa){var result=((A7-
32)*5)/9;return result;}throw new Error(((AsS+AI$.toFixed())+AxZ)+AJa.toFixed());
},A6b:function(Eb){switch(Eb){case 0:return Ax0;case 1:return A.jV;case 2:return Ax1;
case 3:return Aoh;case 4:return A.aaR(A.acf.Contains);case 5:return Afx;default:{
A.ab5("%s%e",Aoi,Eb);return A.jV;}}},A5a:function(AcW){return this.M0.Aeg(AcW);}
,BiV:function(AcW){return this.M0.AmA(AcW);},Bg6:function(Atg){var AAi=0;switch(
Atg){case 0:AAi=1;break;case 1:AAi=2;break;case 2:AAi=3;break;case 3:AAi=4;break;
default:A.ab5("%s%e",IR,Atg);}return AAi;},Ajk:function(A0t,Em){if(A0t>=A._GetAutoObject(
C.Helper).A6n(Em))return 3;else if(A0t>=A._GetAutoObject(C.Helper).Avi(Em))return 2;
else if(A0t<A._GetAutoObject(C.Device).Z1)return 0;else return 1;},Aqy:function(
MH){var BO=-1;switch(MH){case 0:BO=0;break;case 1:BO=40;break;case 2:BO=70;break;
case 3:BO=56;break;case 4:BO=100;break;case 5:BO=124;break;case 6:BO=756;break;case
7:BO=156;break;case 8:BO=196;break;case 9:BO=203;break;case 10:BO=276;break;case
11:BO=208;break;case 12:BO=233;break;case 13:BO=724;break;case 14:BO=246;break;case
15:BO=250;break;case 16:BO=300;break;case 17:BO=191;break;case 18:BO=348;break;case
19:BO=372;break;case 20:BO=380;break;case 21:BO=392;break;case 22:BO=440;break;case
23:BO=442;break;case 24:BO=428;break;case 25:BO=470;break;case 26:BO=528;break;case
27:BO=578;break;case 28:BO=616;break;case 29:BO=620;break;case 30:BO=642;break;case
31:BO=643;break;case 32:BO=752;break;case 33:BO=705;break;case 34:BO=703;break;case
35:BO=792;break;case 36:BO=158;break;case 37:BO=804;break;case 38:BO=826;break;case
39:BO=840;break;default:throw new Error(Aoj+MH.toFixed());}return BO;},Bpv:function(
Jf){return A._GetAutoObject(C.Helper).Se(Jf,8,2)|0;},Bpu:function(Jf){var Bzo=this.
Bpv(Jf);return this.ACM(Bzo);},_Init:function(aArg){C.M0._Init.call(this.M0={I:this
},0);this.__proto__=C.ConverterClass;A.h7++;},_Done:function(){this.__proto__=null;
this.M0._Done();A.h7--;},_ReInit:function(){this.M0._ReInit();},_Mark:function(D
){var B;if((B=this.M0)._cycle!=D)B._Mark(B._cycle=D);if((B=this.I)&&(B._cycle!=D
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
!AI){this.OnSetId(AI.CE(Ad,0));this.SB(AI.CE(Ad,1));this.Ab4(AI.CE(Ad,2));this.Anz(
AI.CE(Ad,3));this.Q0(AI.HF(Ad,4));this.JP(AI.AOL(Ad,7));this.Aku(AI.Bit(Ad,6));this.
EB(AI.AmQ(Ad,14));this.Q2(AI.KN(Ad,22));this.Nd(AI.KN(Ad,26));this.Aw_(AI.I2(Ad,
13));this.AeY(AI.H1(Ad,8));this.Aw2(AI.HF(Ad,15));this.ATx(AI.HF(Ad,31));this.Ae3(
AI.A6B(Ad,5));this.AS7(AI.I2(Ad,17));this.Ul(AI.H1(Ad,11));this.ATw(AI.HF(Ad,16)
);this.ATz(AI.HF(Ad,30));this.AkA(AI.H1(Ad,9));this.Ae1(AI.H1(Ad,12));this.ATy(AI.
HF(Ad,20));this.Aw4(AI.HF(Ad,21));this.Ahj(AI.H1(Ad,10));this.AwG(AI.H1(Ad,27));
this.AFc(AI.ACU(Ad,18));this.AFG(AI.HF(Ad,19));this.AwB(AI.ACU(Ad,23));this.Aw3(
AI.HF(Ad,24));this.ASZ(AI.CE(Ad,25));this.Aws(AI.HF(Ad,28));this.AwH(AI.CE(Ad,29
));this.ArT(AI.H1(Ad,38));this.NY(AI.Biu(Ad,32));this.Akw(AI.Biz(Ad,33));this.AnB(
AI.KN(Ad,35));this.Nf(AI.AOT(Ad,34));this.Ae0(AI.H1(Ad,37));this.AFu(AI.BiI(Ad,36
));}return HA;},Cq:function(AI){var HA=C.Row.Cq.call(this,AI);if(HA&&!!AI){var Jk=
AI.Ox();if(Jk<=0)A.ab5("%s",Xb);else{var AzX=this.Am2();if(AzX)this.CL=AI.YE();else
AI.Hj(this.CL,0,this.Id);AI.Hj(this.CL,1,this.VisualId);AI.Hj(this.CL,2,this.GroupId
);AI.Hj(this.CL,3,this.LocationId);AI.Acm(this.CL,4,this.DateOfBirth);AI.Boj(this.
CL,7,this.Gender);AI.Bof(this.CL,6,this.BirthType);AI.Bod(this.CL,14,this.AnimalType
);AI.SL(this.CL,22,this.TransponderId);AI.SL(this.CL,26,this.NaisId);AI.AkQ(this.
CL,13,this.WorstAssessment);AI.MB(this.CL,8,this.IsAlarm);AI.Acm(this.CL,15,this.
TimestampAlarm);AI.MB(this.CL,11,this.IsFever);AI.Acm(this.CL,16,this.TimestampExpirationFeverAlarm
);AI.MB(this.CL,9,this.IsControl);AI.MB(this.CL,12,this.IsWatch);AI.Acm(this.CL,
20,this.TimestampLastControl);AI.Acm(this.CL,21,this.TimestampLastWatch);AI.MB(this.
CL,10,this.IsRegistered);AI.MB(this.CL,27,this.IsPerished);AI.Acm(this.CL,28,this.
DateOfLastCalving);AI.Hj(this.CL,29,this.LactationNumber);AI.MB(this.CL,38,this.
IsDry);AI.Boh(this.CL,32,this.Breed);AI.Boi(this.CL,33,this.EaseOfDelivery);AI.SL(
this.CL,35,this.NaisIdMother);AI.Bop(this.CL,34,this.WhereAbouts);AI.MB(this.CL,
37,this.IsRegistrationNoticePending);AI.Bon(this.CL,36,this.ReasonOfLeaving);HA=
AI.Oz(Jk);if(AzX)this.OnSetId(AI.Abr());}}return HA;},Gm:function(){C.Row.Gm.call(
this);this.OnSetId(-1);this.Ahj(true);},Hi:function(){C.Row.Hi.call(this);this.OnSetId(
0);this.SB(0);this.Ab4(0);this.Anz(0);this.Q0(0);this.JP(A._GetAutoObject(C.Device
).Gender);this.Aku(0);this.EB(A._GetAutoObject(C.Device).AnimalType);this.Q2(0);
this.Nd(0);this.Aw_(0);this.AeY(false);this.Aw2(0);this.ATx(0);this.Ae3(0);this.
AS7(0);this.Ul(false);this.ATz(0);this.ATw(0);this.AkA(false);this.Ae1(false);this.
ATy(0);this.Aw4(0);this.Ahj(false);this.AwG(false);this.AFc(0);this.AFG(0);this.
AwB(0);this.Aw3(0);this.ASZ(-1);this.Aws(0);this.AwH(0);this.ArT(false);this.NY(
0);this.Akw(0);this.AnB(0);this.Nf(0);this.Ae0(false);this.AFu(0);},OnSetId:function(
E){if(this.Id===E)return;this.Id=E;A.abo([this,this.QY,this.OnSetId],0);},SB:function(
E){if(this.VisualId===E)return;this.VisualId=E;A.abo([this,this.Arz,this.SB],0);
},Ab4:function(E){if(this.GroupId===E)return;this.GroupId=E;A.abo([this,this.Bks
,this.Ab4],0);},Q0:function(E){if(this.DateOfBirth===E)return;this.DateOfBirth=E;
A.abo([this,this.Av6,this.Q0],0);},JP:function(E){if(this.Gender===E)return;this.
Gender=E;A.abo([this,this.Wt,this.JP],0);},Aku:function(E){if(this.BirthType===E
)return;this.BirthType=E;A.abo([this,this.ASi,this.Aku],0);},Anz:function(E){if(
this.LocationId===E)return;this.LocationId=E;A.abo([this,this.A8x,this.Anz],0);}
,Ae3:function(E){if(this.LastTemperature===E)return;this.LastTemperature=E;A.abo([
this,this.A8w,this.Ae3],0);},AeY:function(E){if(this.IsAlarm===E)return;this.IsAlarm=
E;A.abo([this,this.A8o,this.AeY],0);},AkA:function(E){if(this.IsControl===E)return;
this.IsControl=E;A.abo([this,this.Bkv,this.AkA],0);},Ahj:function(E){if(this.IsRegistered===
E)return;this.IsRegistered=E;A.abo([this,this.Bky,this.Ahj],0);},Ae1:function(E){
if(this.IsWatch===E)return;this.IsWatch=E;A.abo([this,this.A8s,this.Ae1],0);},Aw_:
function(E){if(this.WorstAssessment===E)return;this.WorstAssessment=E;A.abo([this
,this.A8_,this.Aw_],0);},Ul:function(E){if(this.IsFever===E)return;this.IsFever=
E;A.abo([this,this.A8p,this.Ul],0);},ATy:function(E){if(this.TimestampLastControl===
E)return;this.TimestampLastControl=E;A.abo([this,this.BkY,this.ATy],0);},Aw4:function(
E){if(this.TimestampLastWatch===E)return;this.TimestampLastWatch=E;A.abo([this,this.
Bk0,this.Aw4],0);},AS7:function(E){if(this.LastRatingTemperature===E)return;this.
LastRatingTemperature=E;A.abo([this,this.BkB,this.AS7],0);},ATw:function(E){if(this.
TimestampExpirationFeverAlarm===E)return;this.TimestampExpirationFeverAlarm=E;A.
abo([this,this.BkW,this.ATw],0);},Aw2:function(E){if(this.TimestampAlarm===E)return;
this.TimestampAlarm=E;A.abo([this,this.BkV,this.Aw2],0);},EB:function(E){if(this.
AnimalType===E)return;this.AnimalType=E;A.abo([this,this.PM,this.EB],0);},AFc:function(
E){if(this.LastBodyWeight===E)return;this.LastBodyWeight=E;A.abo([this,this.A8v,
this.AFc],0);},AFG:function(E){if(this.TimestampLastWeighing===E)return;this.TimestampLastWeighing=
E;A.abo([this,this.A8W,this.AFG],0);},Q2:function(E){if(this.TransponderId===E)return;
this.TransponderId=E;A.abo([this,this.Ary,this.Q2],0);},RK:function(){return A._GetAutoObject(
C.Helper).MN(this.DateOfBirth,A._GetAutoObject(C.Helper).Dv());},AwB:function(E){
if(this.FirstBodyWeight===E)return;this.FirstBodyWeight=E;A.abo([this,this.ASo,this.
AwB],0);},Aw3:function(E){if(this.TimestampFirstWeighing===E)return;this.TimestampFirstWeighing=
E;A.abo([this,this.ASF,this.Aw3],0);},Ard:function(){var Td=A._NewObject(A.Core.
Bs,0);Td.Initialize(this.DateOfBirth);var A1S=A._NewObject(A.Core.Bs,0);A1S.Initialize(
this.TimestampFirstWeighing);if(((Td.Year===A1S.Year)&&(Td.Ab0()===A1S.Ab0()))&&(
this.FirstBodyWeight>0))return true;else return false;},AhN:function(AI5){var AaD;
var Aun;if(this.TimestampLastWeighing>0){Aun=this.TimestampLastWeighing;AaD=this.
LastBodyWeight;}else{Aun=this.DateOfBirth;AaD=A._GetAutoObject(C.Helper).Abq(this.
AnimalType);}return A._GetAutoObject(C.Helper).AhN(AaD,Aun,AI5,this.AnimalType);
},ASZ:function(E){if(this.FirstBodyWeightId===E)return;this.FirstBodyWeightId=E;
A.abo([this,this.Bkr,this.ASZ],0);},AnQ:function(Bb0){this.AeY(Bb0);if(Bb0){if(!
this.TimestampAlarm)this.Aw2(A._GetAutoObject(C.Helper).Dv());}else this.Aw2(0);
},Nd:function(E){if(this.NaisId===E)return;this.NaisId=E;A.abo([this,this.Anp,this.
Nd],0);},AGw:function(BbW){this.Ae1(BbW);if(BbW){if(!this.TimestampLastWatch)this.
Aw4(A._GetAutoObject(C.Helper).Dv());}else this.Aw4(0);},Aws:function(E){if(this.
DateOfLastCalving===E)return;this.DateOfLastCalving=E;A.abo([this,this.Bkh,this.
Aws],0);},AwH:function(E){if(this.LactationNumber===E)return;this.LactationNumber=
E;A.abo([this,this.BkA,this.AwH],0);},AwG:function(E){if(this.IsPerished===E)return;
this.IsPerished=E;A.abo([this,this.Bkx,this.AwG],0);},ATz:function(E){if(this.TimestampLastTemperature===
E)return;this.TimestampLastTemperature=E;A.abo([this,this.BkZ,this.ATz],0);},ATx:
function(E){if(this.TimestampLastAssessment===E)return;this.TimestampLastAssessment=
E;A.abo([this,this.BkX,this.ATx],0);},NY:function(E){if(this.Breed===E)return;this.
Breed=E;A.abo([this,this.Av4,this.NY],0);},Akw:function(E){if(this.EaseOfDelivery===
E)return;this.EaseOfDelivery=E;A.abo([this,this.ASn,this.Akw],0);},Nf:function(E
){if(this.WhereAbouts===E)return;this.WhereAbouts=E;A.abo([this,this.Awg,this.Nf
],0);},AnB:function(E){if(this.NaisIdMother===E)return;this.NaisIdMother=E;A.abo([
this,this.ASv,this.AnB],0);},AFu:function(E){if(this.ReasonOfLeaving===E)return;
this.ReasonOfLeaving=E;A.abo([this,this.BkL,this.AFu],0);},Ae0:function(E){if(this.
IsRegistrationNoticePending===E)return;this.IsRegistrationNoticePending=E;A.abo([
this,this.Bkz,this.Ae0],0);},ArT:function(E){if(this.IsDry===E)return;this.IsDry=
E;A.abo([this,this.Bkw,this.ArT],0);},QY:function(){return this.Id;},Arz:function(
){return this.VisualId;},Bks:function(){return this.GroupId;},Av6:function(){return this.
DateOfBirth;},Wt:function(){return this.Gender;},ASi:function(){return this.BirthType;
},A8x:function(){return this.LocationId;},A8w:function(){return this.LastTemperature;
},A8o:function(){return this.IsAlarm;},Bkv:function(){return this.IsControl;},Bky:
function(){return this.IsRegistered;},A8s:function(){return this.IsWatch;},A8_:function(
){return this.WorstAssessment;},A8p:function(){return this.IsFever;},BkY:function(
){return this.TimestampLastControl;},Bk0:function(){return this.TimestampLastWatch;
},BkB:function(){return this.LastRatingTemperature;},BkW:function(){return this.
TimestampExpirationFeverAlarm;},BkV:function(){return this.TimestampAlarm;},PM:function(
){return this.AnimalType;},A8v:function(){return this.LastBodyWeight;},A8W:function(
){return this.TimestampLastWeighing;},Ary:function(){return this.TransponderId;}
,ASo:function(){return this.FirstBodyWeight;},ASF:function(){return this.TimestampFirstWeighing;
},Bkr:function(){return this.FirstBodyWeightId;},Anp:function(){return this.NaisId;
},Bkh:function(){return this.DateOfLastCalving;},BkA:function(){return this.LactationNumber;
},Bkx:function(){return this.IsPerished;},BkZ:function(){return this.TimestampLastTemperature;
},BkX:function(){return this.TimestampLastAssessment;},Av4:function(){return this.
Breed;},ASn:function(){return this.EaseOfDelivery;},Awg:function(){return this.WhereAbouts;
},ASv:function(){return this.NaisIdMother;},BkL:function(){return this.ReasonOfLeaving;
},Bkz:function(){return this.IsRegistrationNoticePending;},Bkw:function(){return this.
IsDry;},_Init:function(aArg){C.Row._Init.call(this,aArg);this.__proto__=C.Animal;
this.TableId=0;},_className:"Device::Animal"};C.Row={CL:-1,TableId:2,EM:function(
Ad,AI){if(!AI){A.ab5("%s",(Aok+this.CL.toFixed())+AsT);return false;}else if(AI.
Id!==this.TableId)throw new Error(AsU);else if((Ad<0)||(Ad>=AI.Ca())){A.ab5("%s"
,(((AsV+this.CL.toFixed())+Aol)+AI.Ca().toFixed())+Aom);return false;}this.CL=Ad;
return true;},Cq:function(AI){if(!AI){A.ab5("%s",(Aok+this.CL.toFixed())+AsT);return false;
}else if(AI.Id!==this.TableId)throw new Error(AsU);else if(this.Am2()&&AI.Lh()){
A.ab5("%s",AsW+AI.HG().toFixed());return false;}else if(!this.Am2()&&((this.CL<0
)||(this.CL>=AI.Ca()))){A.ab5("%s",(((AsV+this.CL.toFixed())+Aol)+AI.Ca().toFixed(
))+Aom);return false;}return true;},Gm:function(){this.Hi();this.CL=-1;},Am2:function(
){return this.CL===-1;},Hi:function(){this.CL=-2;},AqX:function(){return this.CL
!==-2;},A8K:function(){return this.CL;},A97:function(E){this.CL=E;},_Init:function(
aArg){this.__proto__=C.Row;A.h7++;},_Done:function(){this.__proto__=null;A.h7--;
},_ReInit:function(){},_Mark:function(D){var B;if((B=this.I)&&(B._cycle!=D))B._Mark(
B._cycle=D);},I:null,_cycle:0,_observers:null,_className:"Device::Row"};C.Rating={
Temperature:0,Id:0,AnimalId:0,Timestamp:0,BodyWeight:0,RatingTemperature:0,Faeces:
0,Respiratory:0,Appearance:0,Feed:0,EM:function(Ad,AI){var HA=C.Row.EM.call(this
,Ad,AI);if(HA&&!!AI){this.OnSetId(AI.CE(Ad,0));this.OnSetAnimalId(AI.CE(Ad,1));this.
OnSetTimestamp(AI.HF(Ad,6));this.OnSetFeed(AI.I2(Ad,2));this.OnSetAppearance(AI.
I2(Ad,3));this.OnSetRespiratory(AI.I2(Ad,4));this.OnSetFaeces(AI.I2(Ad,5));this.
OnSetTemperature(AI.A6B(Ad,7));this.OnSetBodyWeight(AI.ACU(Ad,8));this.OnSetRatingTemperature(
AI.I2(Ad,9));}return HA;},Cq:function(AI){if(this.K&&this.K.Cq)return this.K.Cq.
apply(this,arguments);else return C.Rating.Baq.apply(this,arguments);},Baq:function(
AI){var HA=C.Row.Cq.call(this,AI);if((HA&&!!AI)&&(AI.Id===1)){var Jk=AI.Ox();if(
Jk<=0)A.ab5("%s",Xb);else{var AzX=this.Am2();if(AzX)this.CL=AI.YE();else AI.Hj(this.
CL,0,this.Id);AI.Hj(this.CL,1,this.AnimalId);AI.Acm(this.CL,6,this.Timestamp);AI.
AkQ(this.CL,2,this.Feed);AI.AkQ(this.CL,3,this.Appearance);AI.AkQ(this.CL,4,this.
Respiratory);AI.AkQ(this.CL,5,this.Faeces);AI.A_2(this.CL,7,this.Temperature);AI.
AUt(this.CL,8,this.BodyWeight);AI.AkQ(this.CL,9,this.RatingTemperature);AI.Oz(Jk
);if(AzX)this.OnSetId(AI.Abr());var Rt=A._GetAutoObject(C.Device).Am;var Ad=A._GetAutoObject(
C.Device).Am.Lc(0,this.AnimalId);if(Ad>=0){var B$=A._NewObject(C.Animal,0);B$.EM(
Ad,Rt);if(this.Temperature>0)B$.Ul(A._GetAutoObject(C.Helper).A63(this));if((this.
Temperature>0)&&A._GetAutoObject(C.Helper).AGa(this)){var Oh=A._GetAutoObject(C.
Helper).AQ1(this);B$.AkA(Oh);B$.AnQ(Oh);}else if(this.Temperature>0){var Oh=(A._GetAutoObject(
C.Helper).AQ1(this)||(B$.WorstAssessment===2))||(B$.WorstAssessment===1);B$.AkA(
Oh);B$.AnQ(Oh);}else{var Oh=A._GetAutoObject(C.Helper).AQ1(this)||B$.IsFever;B$.
AkA(Oh);B$.AnQ(Oh);}B$.Cq(Rt);}}}return HA;},Gm:function(){C.Row.Gm.call(this);this.
OnSetTimestamp(A._GetAutoObject(C.Helper).Dv());this.OnSetId(-1);},Hi:function(){
C.Row.Hi.call(this);this.OnSetTimestamp(0);this.OnSetId(0);this.OnSetAnimalId(0);
this.OnSetFeed(0);this.OnSetAppearance(0);this.OnSetRespiratory(0);this.OnSetFaeces(
0);this.OnSetTemperature(0);this.OnSetBodyWeight(0);this.OnSetRatingTemperature(
0);},OnSetTemperature:function(E){if(this.Temperature===E)return;this.Temperature=
E;A.abo([this,this.BkU,this.OnSetTemperature],0);},OnSetId:function(E){if(this.Id===
E)return;this.Id=E;A.abo([this,this.QY,this.OnSetId],0);},OnSetAnimalId:function(
E){if(this.AnimalId===E)return;this.AnimalId=E;A.abo([this,this.Bj6,this.OnSetAnimalId
],0);},OnSetFeed:function(E){if(this.Feed===E)return;this.Feed=E;A.abo([this,this.
Bko,this.OnSetFeed],0);},OnSetAppearance:function(E){if(this.Appearance===E)return;
this.Appearance=E;A.abo([this,this.Bj7,this.OnSetAppearance],0);},OnSetRespiratory:
function(E){if(this.Respiratory===E)return;this.Respiratory=E;A.abo([this,this.BkM
,this.OnSetRespiratory],0);},OnSetFaeces:function(E){if(this.Faeces===E)return;this.
Faeces=E;A.abo([this,this.Bkm,this.OnSetFaeces],0);},OnSetTimestamp:function(E){
if(this.Timestamp===E)return;this.Timestamp=E;A.abo([this,this.A8V,this.OnSetTimestamp
],0);},Boe:function(Nn,A7){switch(Nn){case 2:this.OnSetAppearance(A7);break;case
1:this.OnSetFeed(A7);break;case 4:this.OnSetFaeces(A7);break;case 3:this.OnSetRespiratory(
A7);break;default:;}},Bir:function(Nn){switch(Nn){case 2:return this.Appearance;
case 1:return this.Feed;case 4:return this.Faeces;case 3:return this.Respiratory;
default:return 0;}},OnSetRatingTemperature:function(E){if(this.RatingTemperature===
E)return;this.RatingTemperature=E;A.abo([this,this.BkK,this.OnSetRatingTemperature
],0);},OnSetBodyWeight:function(E){if(this.BodyWeight===E)return;this.BodyWeight=
E;A.abo([this,this.Bj$,this.OnSetBodyWeight],0);},BkU:function(){return this.Temperature;
},QY:function(){return this.Id;},Bj6:function(){return this.AnimalId;},Bko:function(
){return this.Feed;},Bj7:function(){return this.Appearance;},BkM:function(){return this.
Respiratory;},Bkm:function(){return this.Faeces;},A8V:function(){return this.Timestamp;
},BkK:function(){return this.RatingTemperature;},Bj$:function(){return this.BodyWeight;
},_Init:function(aArg){C.Row._Init.call(this,aArg);this.__proto__=C.Rating;this.
TableId=1;var Lw=this._variants();if(Lw){this.K={};Lw._Init.call(this,aArg);}},_Done:
function(){if(this.K)this.K._Done.call(this);this.__proto__=C.Row;C.Row._Done.call(
this);},_ReInit:function(){C.Row._ReInit.call(this);if(this.K)this.K._ReInit.call(
this);},_Mark:function(D){C.Row._Mark.call(this,D);if(this.K)this.K._Mark(D);},_variants:
function(){return A.acs.Rating._variants();},K:null,_className:"Device::Rating"};
C.HelperClass={Uw:null,Ahy:null,AUm:null,AUn:null,W:null,Au:null,KF:null,SO:null
,AdW:null,UC:null,UB:null,Aej:null,Afs:null,Afr:null,Afq:null,Aft:null,Agw:null,
AGL:0,Init:function(aArg){A.pe([this,this.ATR],this);},AkD:function(E){this.Uw=E;
A.abo([this,this.Arw,this.AkD],0);},AFy:function(E){this.Ahy=E;A.abo([this,this.
A8L,this.AFy],0);},BAu:function(G){switch(A._GetAutoObject(C.Device).ScanState){
case 2:{var Aup=A._GetAutoObject(C.Device).OQ;if(!Aup)throw new Error(Ax2);switch(
Aup.TransponderType){case 1:this.AkD(Aup);break;case 2:this.ATn(Aup);break;case 3:
this.AFy(Aup);break;case 4:this.ATo(Aup);break;case 0:break;default:throw new Error(
Ax3);}}break;case 4:A._GetAutoObject(C.Device).A9(11,true,A.jV,2000,null);break;
case 3:A._GetAutoObject(C.Device).A9(12,true,A.jV,2000,null);break;case 0:case 1:
break;default:throw new Error(Ax4);}},AkN:function(){this.AkD(null);this.ATn(null
);this.AFy(null);this.ATo(null);},AFD:function(E){if(this.K&&this.K.AFD)return this.
K.AFD.apply(this,arguments);else return C.HelperClass.Bao.apply(this,arguments);
},Bao:function(E){A.abo([this,this.UX,this.U0],0);A._GetAutoObject(C.Device).SetSystemTime(
E);},U0:function(Aq){this.AFD(Aq);},Dv:function(){if(this.K&&this.K.Dv)return this.
K.Dv.apply(this,arguments);else return C.HelperClass.Bak.apply(this,arguments);}
,Bak:function(){var B;return((B=(this.Au.BcV()|0))<0)?B+0x100000000:B;},UX:function(
){return this.Dv();},Asn:function(){A._GetAutoObject(C.Device).SK(-1);this.W.Hi(
);A.we(this.W,0);},A7h:function(Jf){if(!Jf){A.ab5("%s%U",AsX,Jf);return false;}var
Bf=A._GetAutoObject(C.Device).Am.AgO(22,Jf);return this.HL(Bf);},AmR:function(AoM
,AI4){switch(AoM){case 0:{var Apd=AI4;switch(Apd){case 14:return A.aaR(A.acf.Afn
);case 6:return Ax5;case 4:return A.aaR(A.acf.Aeb);case 28:return P6;case 7:return A.
aaR(A.acf.Afi);case 2:return A.aaR(A.acf.P);case 0:return A.aaR(A.acf.GJ);case 37:
return Ax6;case 8:return A.aaR(A.acf.Alarm);case 9:return A.aaR(A.acf.AB9);case 38:
return A.aaR(A.acf.ANX);case 11:return A.aaR(A.acf.Fever);case 27:return AVP;case
10:return A.aaR(A.acf.BnU);case 12:return A.aaR(A.acf.Asa);case 29:return A.aaR(
A.acf.ARi);case 18:return A.aaR(A.acf.Weighing);case 17:return AVQ;case 5:return A.
aaR(A.acf.Temperature);case 3:return AVR;case 26:return A.aaR(A.acf.Ud);case 35:
return A.aaR(A.acf.Ud)+AVS;case 36:return AHe;case 15:return AHf;case 24:return Afy;
case 20:return Aon;case 30:return AVT;case 21:return AHg;case 19:return Ala;case
22:return A.aaR(A.acf.Transponder);case 1:return A.aaR(A.acf.GF);case 34:return A.
aaR(A.acf.Jd);case 13:return AHh;case 31:return AHi;default:{A.ab5("%s",AVU+Apd.
toFixed());return AHj+Apd.toFixed();}}}case 1:{var Apd=AI4;switch(Apd){case 1:return A.
aaR(A.acf.Animal);case 3:return A.aaR(A.acf.AF$);case 8:return A.aaR(A.acf.Afp);
case 5:return A.aaR(A.acf.AGb);case 2:return A.aaR(A.acf.Feed);case 4:return A.aaR(
A.acf.AGc);case 7:return A.aaR(A.acf.Temperature);case 6:return A.aaR(A.acf.Bs);
default:{A.ab5("%s",AVV+Apd.toFixed());return AHj+Apd.toFixed();}}}default:A.ab5(
"%s",(AVW+AoM.toFixed())+AcN);}return A.jV;},A6s:function(AoM,AH){var result=A.jV;
if(!!AH){result=this.AmR(AoM,AH.EJ);result=((result+N$)+A._GetAutoObject(C.Converter
).A6b(AH.Operator))+N$;if(!!(C.Int32FilterCriterion.isPrototypeOf(AH)?AH:null))result=
result+(C.Int32FilterCriterion.isPrototypeOf(AH)?AH:null).A4.toFixed();else if(!
!(C.UInt32FilterCriterion.isPrototypeOf(AH)?AH:null))result=result+(C.UInt32FilterCriterion.
isPrototypeOf(AH)?AH:null).A4.toFixed();else if(!!(C.StringFilterCriterion.isPrototypeOf(
AH)?AH:null))result=result+(C.StringFilterCriterion.isPrototypeOf(AH)?AH:null).A4;
else if(!!(C.BoolFilterCriterion.isPrototypeOf(AH)?AH:null)){if((C.BoolFilterCriterion.
isPrototypeOf(AH)?AH:null).A4)result=this.AmR(AoM,AH.EJ);else result=A.jV;}else if(
!!(C.GenderFilterCriterion.isPrototypeOf(AH)?AH:null)){var ByX=A._NewObject(C.GenderToString
,0);result=result+ByX.Lt((C.GenderFilterCriterion.isPrototypeOf(AH)?AH:null).A4);
}else if(!!(C.AnimalTypeFilterCriterion.isPrototypeOf(AH)?AH:null)){var BxR=A._NewObject(
C.AnimalTypeToString,0);result=result+BxR.Lt((C.AnimalTypeFilterCriterion.isPrototypeOf(
AH)?AH:null).A4);}else if(!!(C.AssessmentFilterCriterion.isPrototypeOf(AH)?AH:null
)){var BxU=A._NewObject(C.AssesmentToString,0);result=result+BxU.Lt((C.AssessmentFilterCriterion.
isPrototypeOf(AH)?AH:null).A4);}else if(!!(C.UInt64FilterCriterion.isPrototypeOf(
AH)?AH:null))result=result+(C.UInt64FilterCriterion.isPrototypeOf(AH)?AH:null).A4.
toFixed();else if(!!(C.UInt64PartialFilterCriterion.isPrototypeOf(AH)?AH:null)){
var Av=(C.UInt64PartialFilterCriterion.isPrototypeOf(AH)?AH:null);result=(((((result+
Av.A4)+AVX)+Av.OA.toFixed())+O3)+Av.Zm.toFixed())+Aom;}else if(!!(C.WhereAboutsFilterCriterion.
isPrototypeOf(AH)?AH:null)){var BCg=A._NewObject(C.WhereAboutsToString,0);result=
result+BCg.Lt((C.WhereAboutsFilterCriterion.isPrototypeOf(AH)?AH:null).A4);}else
A.ab5("%s",AVY);}return result;},Nj:function(aString,BbK,Bw6){var result=A.jV;var
Bfs=false;var index=0;var Bw8=BbK.length;while(!Bfs){var A3v=aString.indexOf(BbK
,index);if(A3v!==-1){result=(result+A.abW(aString,index,A3v-index))+Bw6;index=A3v+
Bw8;}else{var BbO=aString.length;if(index<BbO)result=result+A.ab2(aString,BbO-index
);Bfs=true;}}return result;},ATn:function(E){this.AUm=E;A.abo([this,this.BkO,this.
ATn],0);},ATo:function(E){this.AUn=E;A.abo([this,this.BkP,this.ATo],0);},Bdj:function(
){return((A._GetAutoObject(C.Device).ScanState===2)&&!!A._GetAutoObject(C.Device
).OQ)&&(A._GetAutoObject(C.Device).OQ.TransponderType===1);},Af5:function(G){if(
!this.W.Am2()&&!!this.W.Id)this.Bjt(this.W.Id);},Avi:function(Em){return A._GetAutoObject(
C.Helper).UC.Get(Em);},A6n:function(Em){return A._GetAutoObject(C.Helper).UB.Get(
Em);},A6x:function(){var O=0;var min=32767;while(O<A._GetAutoObject(C.Helper).UC.
MC){if(A._GetAutoObject(C.Helper).UC.Get(O)<min)min=A._GetAutoObject(C.Helper).UC.
Get(O);O=O+1;}return min;},ATR:function(G){A.zV([this,this.Af5],A._GetAutoObject(
C.Device).Am,0);},AQ1:function(D3){if(!D3)return false;var Bi6=(((this.AzT(D3.Faeces
)||this.AzT(D3.Feed))||this.AzT(D3.Appearance))||this.AzT(D3.Respiratory))||this.
AzT(D3.RatingTemperature);return Bi6||this.A63(D3);},AzT:function(Bbn){return(Bbn===
2)||(Bbn===1);},A63:function(D3){return!!D3&&(D3.Temperature>A._GetAutoObject(C.
Helper).Avi(A._GetAutoObject(C.Helper).W.AnimalType));},HL:function(L6){var A2p=
false;if(L6>=0){if(L6!==this.W.CL)A._GetAutoObject(C.Device).SK(L6);A2p=this.W.EM(
L6,A._GetAutoObject(C.Device).Am);if(A2p)A.we(this.W,0);}else{A._GetAutoObject(C.
Device).SK(-1);this.W.Hi();A.we(this.W,0);}return A2p;},AhH:function(Ah1){var B;
return(((B=(this.Au.BcV()|0))<0)?B+0x100000000:B)-this.AmD(Ah1);},AsC:function(){
var B;A.pe([B=this.KF,B.AnV],this);},BBH:function(G){A._GetAutoObject(C.Device).
A9(16,false,AHk,0,null);A._GetAutoObject(C.Device).A9(5,true,A.jV,0,null);},Bnn:
function(G){var At=(C.PopupContext.isPrototypeOf(G)?G:null);if(!!At&&(At.PopupState===
5))this.AsC();},Bm_:function(E){if(this.AGL===E)return;this.AGL=E;A._GetAutoObject(
C.Device).A9(16,true,this.AGL.toFixed(),0,[this,this.Bnn]);},MN:function(BwG,Bxl
){var D8;var Bf0=A._NewObject(A.Core.An2,0);var GD=A._NewObject(A.Core.Bs,0);var
K6=A._NewObject(A.Core.Bs,0);GD.Initialize(BwG);K6.Initialize(Bxl);D8=K6.BhE(GD);
Bf0.Initialize2(0,D8.ADl,D8.AD_,D8.AGp);if(GD.J(Bf0).GH===GD.GH)return D8.Ki;else
return D8.Ki+1;},BBJ:function(G){A._GetAutoObject(C.Device).UpdateMeasureState(3
);if((A._GetAutoObject(C.Device).Kv>=A._GetAutoObject(C.Device).Z1)&&(A._GetAutoObject(
C.Device).Kv<=A._GetAutoObject(C.Helper).Avi(A._GetAutoObject(C.Helper).W.AnimalType
))){var AJl=A._GetAutoObject(C.Helper).W.Id;var BA9=A._GetAutoObject(C.Device).Am.
Lc(0,AJl);A._GetAutoObject(C.Device).Am.MB(BA9,9,false);A._GetAutoObject(C.Device
).Am.Bl(A._GetAutoObject(C.Device).Am.Filter);}},AK4:function(G){var BgQ=A._GetAutoObject(
C.Helper).Avi(A._GetAutoObject(C.Helper).W.AnimalType);var BgM=A._GetAutoObject(
C.Helper).A6n(A._GetAutoObject(C.Helper).W.AnimalType);var Agh=A.abz(BgQ-100,BgM+
100);this.Bcz(Agh);},AmD:function(Ah1){return Ah1*86400;},Ak4:function(J1){var B;
if(!!J1&&(J1<(((B=Math.trunc(Math.pow(10,A._GetAutoObject(C.Device).AF)))<0)?B+0x10000000000000000:
B)))return-1;return A._GetAutoObject(C.Helper).Se(J1,A._GetAutoObject(C.Device).
AF&0xFF,A._GetAutoObject(C.Device).A1&0xFF)|0;},AGa:function(D3){if(!D3)return false;
return((!!D3.Faeces||!!D3.Feed)||!!D3.Appearance)||!!D3.Respiratory;},AhN:function(
A0F,BbQ,AI5,Em){var B;var ApR;if((A0F<650000)&&(BbQ<this.Dv())){var Bca=this.Agw.
Avk(Em);var Bb$=0;if(Bca>=0)Bb$=this.Afq.Get(Bca);ApR=A0F+(this.MN(BbQ,this.Dv()
)*Bb$);if(AI5>0){var A1A=this.ApQ(AI5);ApR=(Math.trunc(((((B=ApR)<0)?B+0x10000000000000000:
B)+Math.trunc(A1A/2))/A1A)*A1A)|0;}if(ApR>650000)ApR=650000;}else ApR=A0F;return ApR;
},AC0:function(D3){var Aqc=A._GetAutoObject(C.Converter).AdX(D3.Faeces);if(Aqc<A.
_GetAutoObject(C.Converter).AdX(D3.Feed))Aqc=A._GetAutoObject(C.Converter).AdX(D3.
Feed);if(Aqc<A._GetAutoObject(C.Converter).AdX(D3.Appearance))Aqc=A._GetAutoObject(
C.Converter).AdX(D3.Appearance);if(Aqc<A._GetAutoObject(C.Converter).AdX(D3.Respiratory
))Aqc=A._GetAutoObject(C.Converter).AdX(D3.Respiratory);return A._GetAutoObject(
C.Converter).A$o(Aqc);},Axn:function(D3,Nm){if(!!D3){D3.OnSetFaeces(Nm);D3.OnSetFeed(
Nm);D3.OnSetAppearance(Nm);D3.OnSetRespiratory(Nm);}},Bip:function(AI,AI_,Ac3,Xl
,AfD){if(!AI)throw new Error(AsY);var Be=A._NewObject(C.Filter,0);var ApD=AI.Filter;
var Oc=A._NewObject(C.Int32FilterCriterion,0);Oc.Operator=0;Oc.EJ=1;Oc.A4=Ac3;Be.
CW(Oc);if(Xl>0){var Oq=A._NewObject(C.UInt32FilterCriterion,0);Oq.Operator=2;Oq.
EJ=6;Oq.A4=Xl;Be.CW(Oq);}if(AfD>0){var Og=A._NewObject(C.UInt32FilterCriterion,0
);Og.Operator=3;Og.EJ=6;Og.A4=AfD;Be.CW(Og);}AI.Bl(Be);var L7=A._NewObject(C.Int32ArrayWrapper
,0);L7.Zy(6);var O;for(O=0;O<L7.MC;O=O+1)L7.Set(O,0);var U6;for(O=0;O<AI.Ca();O=
O+1){U6=AI.I2(O,AI_);L7.Set(U6,L7.Get(U6)+1);}AI.Bl(ApD);return L7;},ZQ:function(
Ah1){var B;var GD=A._NewObject(A.Core.Bs,0);var BfZ=A._NewObject(A.Core.An2,0);GD.
Initialize(A._GetAutoObject(C.Converter).AhJ());BfZ.Initialize2(Ah1,0,0,0);GD=GD.
BoH(BfZ);return((B=(GD.JN()|0))<0)?B+0x100000000:B;},A6o:function(AI,Ac3,AfD,Xl){
if(!AI)throw new Error(AsY);var Be=A._NewObject(C.Filter,0);var ApD=AI.Filter;var
Oc=A._NewObject(C.Int32FilterCriterion,0);Oc.Operator=0;Oc.EJ=1;Oc.A4=Ac3;Be.CW(
Oc);if(Xl>0){var Oq=A._NewObject(C.UInt32FilterCriterion,0);Oq.Operator=2;Oq.EJ=
6;Oq.A4=Xl;Be.CW(Oq);}if(AfD>0){var Og=A._NewObject(C.UInt32FilterCriterion,0);Og.
Operator=3;Og.EJ=6;Og.A4=AfD;Be.CW(Og);}AI.Bl(Be);var L7=A._NewObject(C.Int32ArrayWrapper
,0);L7.Zy(6);var O;for(O=0;O<L7.MC;O=O+1)L7.Set(O,0);var Ao4=A._NewObject(C.Rating
,0);var A1r;for(O=0;O<AI.Ca();O=O+1){Ao4.EM(O,AI);if(A._GetAutoObject(C.Helper).
AGa(Ao4)){A1r=A._GetAutoObject(C.Helper).AC0(Ao4);L7.Set(A1r,L7.Get(A1r)+1);}}AI.
Bl(ApD);return L7;},A10:function(AI,Ac3,Bys){if(!AI)throw new Error(AsY);var Be=
A._NewObject(C.Filter,0);var ApD=AI.Filter;var Oc=A._NewObject(C.Int32FilterCriterion
,0);Oc.Operator=0;Oc.EJ=1;Oc.A4=Ac3;Be.CW(Oc);var Xl=A._GetAutoObject(C.Converter
).AhJ()+A._GetAutoObject(C.Helper).AmD(Bys);var AfD=Xl+A._GetAutoObject(C.Helper
).AmD(1);var Oq=A._NewObject(C.UInt32FilterCriterion,0);Oq.Operator=2;Oq.EJ=6;Oq.
A4=Xl;Be.CW(Oq);var Og=A._NewObject(C.UInt32FilterCriterion,0);Og.Operator=3;Og.
EJ=6;Og.A4=AfD;Be.CW(Og);AI.Bl(Be);var Ao4=A._NewObject(C.Rating,0);var U6;var LQ=
0;var O;for(O=0;O<AI.Ca();O=O+1){Ao4.EM(O,AI);if(A._GetAutoObject(C.Helper).AGa(
Ao4)){U6=A._GetAutoObject(C.Helper).AC0(Ao4);if(A._GetAutoObject(C.Converter).AdX(
U6)>A._GetAutoObject(C.Converter).AdX(LQ))LQ=U6;}}AI.Bl(ApD);return LQ;},Am1:function(
){if((A._GetAutoObject(C.Device).WeightRecordingScope===2)||(A._GetAutoObject(C.
Device).WeightRecordingScope===1))return true;else return false;},A66:function(){
if((A._GetAutoObject(C.Device).WeightRecordingScope===2)||!A._GetAutoObject(C.Device
).WeightRecordingScope)return true;else return false;},Biq:function(AI,AI_,Ac3,Xl
,AfD){if(!AI)throw new Error(AsY);var Be=A._NewObject(C.Filter,0);var ApD=AI.Filter;
var Oc=A._NewObject(C.Int32FilterCriterion,0);Oc.Operator=0;Oc.EJ=1;Oc.A4=Ac3;Be.
CW(Oc);if(Xl>0){var Oq=A._NewObject(C.UInt32FilterCriterion,0);Oq.Operator=2;Oq.
EJ=6;Oq.A4=Xl;Be.CW(Oq);}if(AfD>0){var Og=A._NewObject(C.UInt32FilterCriterion,0
);Og.Operator=3;Og.EJ=6;Og.A4=AfD;Be.CW(Og);}AI.Bl(Be);var L7=A._NewObject(C.Int32ArrayWrapper
,0);L7.Zy(6);var O;for(O=0;O<L7.MC;O=O+1)L7.Set(O,0);if(AI.Ca()>0){var U6=AI.I2(
0,AI_);var ApW=AI.HF(O,6);var Ac=A._NewObject(A.Core.Bs,0);Ac.Initialize(ApW);var
Aqb=U6;var AJ4=A._NewObject(A.Core.Bs,0);AJ4.Initialize(Ac.JN());for(O=1;O<AI.Ca(
);O=O+1){U6=AI.I2(O,AI_);ApW=AI.HF(O,6);Ac.Initialize(ApW);if((Ac.Ab0()!==AJ4.Ab0(
))||(Ac.Year!==AJ4.Year)){L7.Set(Aqb,L7.Get(Aqb)+1);AJ4.Initialize(Ac.JN());Aqb=
U6;}else if(!!U6&&(U6<Aqb))Aqb=U6;}L7.Set(Aqb,L7.Get(Aqb)+1);}AI.Bl(ApD);return L7;
},Aqo:function(L2){var B;var GD=A._NewObject(A.Core.Bs,0);GD.Initialize(L2);GD.Anx(
0);GD.AnA(0);GD.AnD(0);return((B=(GD.JN()|0))<0)?B+0x100000000:B;},AN_:function(
L2){var B;L2=L2+86400;var GD=A._NewObject(A.Core.Bs,0);GD.Initialize(L2);GD.Anx(
0);GD.AnA(0);GD.AnD(0);return((B=(GD.JN()|0))<0)?B+0x100000000:B;},Bis:function(
BBF,ByD,Amb,AlB){var Bcu=A._GetAutoObject(C.Helper).MN(BBF,ByD);if(Bcu>0)return((
AlB-Amb)/Bcu)|0;return 0;},Bpj:function(BwH,Bxm){var GD=A._NewObject(A.Core.Bs,0
);var K6=A._NewObject(A.Core.Bs,0);GD.Initialize(BwH);K6.Initialize(Bxm);return(
GD.Year===K6.Year)&&(GD.Ab0()===K6.Ab0());},A6u:function(){var Be=A._GetAutoObject(
C.Helper).Mo();var Bdx=A._NewObject(C.UInt32FilterCriterion,0);var Bxv=A._GetAutoObject(
C.Helper).ZQ(A._GetAutoObject(C.Device).AqQ)-1;Bdx.Initialize(28,2,Bxv,true);Be.
CW(Bdx);var U2=A._NewObject(C.AnimalTypeFilterCriterion,0);U2.Initialize(14,0,1,
true);Be.CW(U2);if(A._GetAutoObject(C.Device).AqR){var Az9=A._NewObject(C.UInt32FilterCriterion
,0);var A2k=A._GetAutoObject(C.Helper).Dv()-21600;Az9.Initialize(30,3,A2k,true);
Be.CW(Az9);}return Be;},BnZ:function(){var Jk=A._GetAutoObject(C.Device).Am.Ox();
if(Jk<=0)A.ab5("%s",Xb);else{A._GetAutoObject(C.Device).Am.Hi();A._GetAutoObject(
C.Device).Am.Oz(Jk);}Jk=A._GetAutoObject(C.Device).Ago.Ox();if(Jk<=0)A.ab5("%s",
Xb);else{A._GetAutoObject(C.Device).Ago.Hi();A._GetAutoObject(C.Device).Ago.Oz(Jk
);}Jk=A._GetAutoObject(C.Device).Bt.Ox();if(Jk<=0)A.ab5("%s",Xb);else{A._GetAutoObject(
C.Device).Bt.Hi();A._GetAutoObject(C.Device).Bt.Oz(Jk);}Jk=A._GetAutoObject(C.Device
).Pl.Ox();if(Jk<=0)A.ab5("%s",Xb);else{A._GetAutoObject(C.Device).Pl.Hi();A._GetAutoObject(
C.Device).Pl.Oz(Jk);}},Bjt:function(Ac3){var Bf=A._GetAutoObject(C.Device).Am.Lc(
0,Ac3);return this.HL(Bf);},AQ8:function(Jf){var Aiu=A._GetAutoObject(C.Device).
Am.Aeh(22,Jf);return Aiu;},ACR:function(){var Be=A._GetAutoObject(C.Helper).Mo();
var Ai$=A._NewObject(C.UInt64FilterCriterion,0);Ai$.Initialize(22,0,0,true);Be.CW(
Ai$);return Be;},AOI:function(AoX,ByA,P_){var Aap=-1;switch(AoX){case 2:Aap=30;break;
case 3:Aap=31;break;case 10:Aap=19;break;default:A.ab5("%s%e",UU,AoX);}if(Aap<0)
return null;var Adf=A._NewObject(C.UInt32FilterCriterion,0);Adf.Initialize(Aap,3
,A._GetAutoObject(C.Helper).Dv()-ByA,P_);return Adf;},BnX:function(aFilter){var AH=
aFilter.DQ(30,3);if(!!AH)aFilter.N3(AH);AH=aFilter.DQ(31,3);if(!!AH)aFilter.N3(AH
);AH=aFilter.DQ(19,3);if(!!AH)aFilter.N3(AH);},A1i:function(AfN,AyN,AI){if(AI.Lh(
))return 5;if(AfN.VisualId<=0)switch(AyN){case 0:if(!AfN.NaisId)return 1;break;case
1:if(!AfN.TransponderId)return 1;break;case 3:case 2:case 5:case 4:return 1;default:
throw new Error(AHl+AyN.toFixed());}if((!AfN.NaisId&&!AfN.TransponderId)&&A._GetAutoObject(
C.Device).Am.AjI(1,AfN.VisualId))return 2;if(!!AfN.NaisId&&A._GetAutoObject(C.Helper
).AQ6(AfN.NaisId))return 3;if(!!AfN.TransponderId&&A._GetAutoObject(C.Helper).AQ8(
AfN.TransponderId))return 4;return 0;},Aqh:function(Et){Et.EB(A._GetAutoObject(C.
Device).AnimalType);Et.NY(A._GetAutoObject(C.Device).Breed);Et.Q0(A._GetAutoObject(
C.Helper).Dv()-A._GetAutoObject(C.Helper).AmD(A._GetAutoObject(C.Device).AdO));Et.
JP(A._GetAutoObject(C.Device).Gender);Et.Nf(A._GetAutoObject(C.Device).WhereAbouts
);},AMi:function(Rn,Et){var GB=0;switch(Rn){case 0:GB=A._GetAutoObject(C.Helper).
Ak4(Et.NaisId);break;case 1:GB=A._GetAutoObject(C.Helper).Ak4(Et.TransponderId);
break;case 3:GB=A._GetAutoObject(C.Device).Aq3;break;case 2:GB=A._GetAutoObject(
C.Device).Aq4;break;case 4:case 5:GB=A._GetAutoObject(C.Device).AjT;break;default:
throw new Error(AHm+Rn.toFixed());}return GB;},A$v:function(Ali,L3,Bbs,Bws,Bw1){
var B;var Ql=null;var Xw=null;switch(Ali){case 0:{Ql=[B=A._GetAutoObject(C.Device
),B.ASu,B.AZ3];Xw=[B=A._GetAutoObject(C.Device),B.Awd,B.AyG];}break;case 1:switch(
L3){case 1:{Ql=[B=A._GetAutoObject(C.Device),B.A8B,B.BaV];Xw=[B=A._GetAutoObject(
C.Device),B.Awb,B.AyE];}break;case 0:{Ql=[B=A._GetAutoObject(C.Device),B.A8C,B.BaW
];Xw=[B=A._GetAutoObject(C.Device),B.Awc,B.AyF];}break;case 2:{Ql=[B=A._GetAutoObject(
C.Device),B.ASu,B.AZ3];Xw=[B=A._GetAutoObject(C.Device),B.Awd,B.AyG];}break;default:
throw new Error(Ax7+L3.toFixed());}break;default:throw new Error(AHn+Ali.toFixed(
));}if(!!Ql&&!!Xw){Ql[2].call(Ql[0],Bbs);if(Bbs>0){if((Xw[1].call(Xw[0])>0)&&(Bws<
Bw1))Ql[2].call(Ql[0],Ql[1].call(Ql[0])+Xw[1].call(Xw[0]));else if(Xw[1].call(Xw[
0])<0)Ql[2].call(Ql[0],Ql[1].call(Ql[0])+Xw[1].call(Xw[0]));}return Ql[1].call(Ql[
0]);}return 0;},AVm:function(Et,Ali,BwA){if(!Et||(BwA===true))return;switch(Ali){
case 0:Et.Nd(A._GetAutoObject(C.Device).AvX);break;case 1:switch(Et.Gender){case
0:Et.Nd(A._GetAutoObject(C.Device).AEb);break;case 1:Et.Nd(A._GetAutoObject(C.Device
).AEa);break;case 2:Et.Nd(A._GetAutoObject(C.Device).AvX);break;default:throw new
Error(Ax7+Et.Gender.toFixed());}break;default:throw new Error(AHn+Ali.toFixed());
}},Bi7:function(Rn,Et){var result=false;switch(Rn){case 0:result=!!Et.NaisId;break;
case 1:result=!!Et.TransponderId;break;case 3:case 2:case 4:case 5:result=false;
break;default:throw new Error(AHm+Rn.toFixed());}return result;},AKg:function(Et
,Bbl,AyN,Atu,AfG){switch(Bbl){case 2:if(Atu<=0)A._GetAutoObject(C.Device).A9(21,
true,Et.VisualId.toFixed(),0,AfG);else A._GetAutoObject(C.Device).A9(48,true,(Et.
VisualId.toFixed()+Ax8)+Atu.toFixed(),0,AfG);break;case 3:if(Atu<=0)A._GetAutoObject(
C.Device).A9(21,true,A._GetAutoObject(C.Converter).Rf(Et.NaisId),0,AfG);else A._GetAutoObject(
C.Device).A9(48,true,(A._GetAutoObject(C.Converter).Rf(Et.NaisId)+Ax8)+Atu.toFixed(
),0,AfG);break;case 4:if(Atu<=0)A._GetAutoObject(C.Device).A9(25,true,A._GetAutoObject(
C.Converter).Rf(Et.TransponderId),0,AfG);else A._GetAutoObject(C.Device).A9(47,true
,(A._GetAutoObject(C.Converter).Rf(Et.TransponderId)+Ax8)+Atu.toFixed(),0,AfG);break;
case 1:switch(AyN){case 1:A._GetAutoObject(C.Device).A9(42,true,A.jV,0,AfG);break;
case 0:A._GetAutoObject(C.Device).A9(43,true,A.jV,0,AfG);break;case 3:case 2:case
5:case 4:A._GetAutoObject(C.Device).A9(22,true,A.jV,0,AfG);break;default:throw new
Error(AHl+AyN.toFixed());}break;case 5:A._GetAutoObject(C.Device).A9(41,true,A._GetAutoObject(
C.Device).Am.HG().toFixed(),0,AfG);break;case 0:break;default:throw new Error(AVZ+
Bbl.toFixed());}},BcZ:function(Bbz,L3){var B;var AAb=null;switch(Bbz){case 0:AAb=[
B=A._GetAutoObject(C.Device),B.Awd,B.AyG];break;case 1:switch(L3){case 1:AAb=[B=
A._GetAutoObject(C.Device),B.Awb,B.AyE];break;case 0:AAb=[B=A._GetAutoObject(C.Device
),B.Awc,B.AyF];break;case 2:AAb=[B=A._GetAutoObject(C.Device),B.Awd,B.AyG];break;
default:throw new Error(Ax7+L3.toFixed());}break;default:throw new Error(AV0+Bbz.
toFixed());}return AAb;},A6F:function(Qa,Bxc){var AaP=A._NewObject(A.Core.Bs,0);
AaP.Initialize(Qa);var ABr=AaP.Year;var Bf=A._GetAutoObject(C.Device).Pl.Lc(0,ABr
);var U5=A._NewObject(C.CalfDeregistrations,0);if(Bf<0){if(A._GetAutoObject(C.Device
).Pl.Lh())A._GetAutoObject(C.Device).A9(51,true,A._GetAutoObject(C.Device).Pl.HG(
).toFixed(),0,null);else{U5.Gm();U5.AkF(ABr);}}else U5.EM(Bf,A._GetAutoObject(C.
Device).Pl);U5.Awu(U5.Deregistrations+1);if(Bxc)U5.Awt(U5.Deaths+1);U5.Cq(A._GetAutoObject(
C.Device).Pl);},AMg:function(LQ,AlL,AlC){var AKE=0;if((AlL&&(AlC===1))||(LQ===1)
)AKE=1;else if((AlL&&(AlC===2))||(LQ===2))AKE=2;else if(!!LQ&&(LQ!==5))AKE=LQ;return AKE;
},Bcz:function(Bxu){var B;if(A._GetAutoObject(C.Device).MeasureState===1){this.SO.
Cw=A._GetAutoObject(C.Device).Z1;this.SO.B2=Bxu;this.SO.AnT(this);}},ACO:function(
){var Be=this.AOH();var Bdm=A._NewObject(C.BoolFilterCriterion,0);Bdm.Initialize(
38,0,true,true);Be.CW(Bdm);return Be;},A6l:function(ED){var Be=A._GetAutoObject(
C.Helper).Mo();if(A._GetAutoObject(C.Device).Aqd){var A13=A._GetAutoObject(C.Helper
).AOI(ED,21600,true);Be.CW(A13);}return Be;},A6z:function(){var Be=A._GetAutoObject(
C.Helper).Mo();var BdO=A._NewObject(C.UInt64FilterCriterion,0);BdO.Initialize(26
,0,0,true);Be.CW(BdO);return Be;},A6C:function(){var B;var Be=A._GetAutoObject(C.
Helper).Mo();var AAh=(C.WhereAboutsFilterCriterion.isPrototypeOf(B=Be.DQ(34,3))?
B:null);if(!!AAh)Be.N3(AAh);var Be$=A._NewObject(C.BoolFilterCriterion,0);Be$.Initialize(
37,0,true,true);Be.CW(Be$);return Be;},Se:function(A7,Atn,A0G){var B;A7=Math.trunc(
A7/this.ApQ(Atn));A7%=this.ApQ(A0G);return A7;},ApQ:function(BbA){switch(BbA){case
0:return 1;case 1:return 10;case 2:return 100;case 3:return 1000;case 4:return 10000;
case 5:return 100000;case 6:return 1000000;case 7:return 10000000;case 8:return 100000000;
case 9:return 1000000000;case 10:return 10000000000;case 11:return 100000000000;
case 12:return 1000000000000;case 13:return 10000000000000;case 14:return 100000000000000;
case 15:return 1000000000000000;default:throw new Error(AV1+BbA.toFixed());}},Mo:
function(){var Be=A._NewObject(C.Filter,0);var Bfw=A._NewObject(C.BoolFilterCriterion
,0);Bfw.Initialize(10,0,true,true);Be.CW(Bfw);var AAh=A._NewObject(C.WhereAboutsFilterCriterion
,0);AAh.Initialize(34,3,6,true);Be.CW(AAh);return Be;},Arc:function(aFilter){return!
this.ACS(aFilter);},ACS:function(aFilter){var Jh=0;var Av=aFilter.AOJ();while(!!
Av){if(Av.YH===false)Jh++;Av=aFilter.AOO(Av);}return Jh;},AOH:function(){var Be=
this.Mo();var U2=A._NewObject(C.AnimalTypeFilterCriterion,0);U2.Initialize(14,0,
1,true);Be.CW(U2);return Be;},ACX:function(){var B;var A32;var J3=this.BiJ();A32=(((
B=A._GetAutoObject(C.Converter).Aqy(J3))<0)?B+0x10000000000000000:B)*this.ApQ(12
);if((J3===10)&&(A._GetAutoObject(C.Device).Ut>0)){var ByY=A._GetAutoObject(C.Helper
).Se(A._GetAutoObject(C.Device).Ut,10,2)*this.ApQ(8);A32+=ByY;}return A32;},BiJ:
function(){var J3=0;if(A._GetAutoObject(C.Device).Ut>0)J3=A._GetAutoObject(C.Converter
).ZZ(A._GetAutoObject(C.Device).Ut);if(!J3)J3=A._GetAutoObject(C.Converter).A69(
A._GetAutoObject(C.Device).Language);return J3;},AQ6:function(Xk){var Aiu=A._GetAutoObject(
C.Device).Am.Aeh(26,Xk);return Aiu;},Aj5:function(AfH){switch(AfH){case 0:case 1:
case 2:case 3:case 4:case 5:return false;case 6:case 7:case 8:case 9:case 10:return true;
default:throw new Error(AV2+AfH.toFixed());}},BgL:function(Rn,Et){var GB=0;switch(
Rn){case 1:GB=A._GetAutoObject(C.Helper).Ak4(Et.TransponderId);break;case 0:if(!
A._GetAutoObject(C.Device).EartagNrAssignmentMode)GB=A._GetAutoObject(C.Device).
AjT;else switch(Et.Gender){case 0:GB=A._GetAutoObject(C.Device).Aq4;break;case 1:
GB=A._GetAutoObject(C.Device).Aq3;break;case 2:GB=A._GetAutoObject(C.Device).AjT;
break;default:throw new Error(AHo+Et.Gender.toFixed());}break;default:throw new Error(
AV3+Rn.toFixed());}return GB;},Bif:function(){var B;var AzQ=(((((((A.aaR(A.acf.AhB
)+A.aaR(A.acf.Colon))+O4)+A._GetAutoObject(C.Device).AhB)+Ax9)+A.aaR(A.acf.BnF))+
A.aaR(A.acf.Colon))+O4)+A._GetAutoObject(A.acj.KK).Bid(((B=A._GetAutoObject(C.Device
).QV.Timestamp)<0)?B+0x100000000:B);return AzQ;},Big:function(){var B;var AzQ=((((((((((((((((((((((((((((
AV4+A._GetAutoObject(C.Device).RW.AD3.toFixed())+Lv)+A._GetAutoObject(C.Device).
RW.AD9.toFixed())+Lv)+A._GetAutoObject(C.Device).RW.AGj.toFixed())+O3)+A._GetAutoObject(
C.Device).RW.ACe)+O3)+A._GetAutoObject(A.acj.KK).AjL(((B=A._GetAutoObject(C.Device
).RW.Timestamp)<0)?B+0x100000000:B))+O4)+AV5)+A._GetAutoObject(C.Device).Sv.AD3.
toFixed())+Lv)+A._GetAutoObject(C.Device).Sv.AD9.toFixed())+Lv)+A._GetAutoObject(
C.Device).Sv.AGj.toFixed())+O3)+A._GetAutoObject(C.Device).Sv.ACe)+O3)+A._GetAutoObject(
A.acj.KK).AjL(((B=A._GetAutoObject(C.Device).Sv.Timestamp)<0)?B+0x100000000:B))+
O4)+AV6)+A._GetAutoObject(C.Helper).BiM())+O3)+A._GetAutoObject(C.Device).GetCommitHash(
))+O3)+A._GetAutoObject(C.Device).GetCommitCount().toFixed())+O3)+A._GetAutoObject(
A.acj.KK).AjL(A._GetAutoObject(C.Device).GetCommitEpoch());return AzQ;},Bie:function(
){var B;var AzQ=(((((((((((((((((((((AV7+A._GetAutoObject(C.Device).QV.ARu.toFixed(
))+Lv)+A._GetAutoObject(C.Device).QV.ARv.toFixed())+Lv)+A._GetAutoObject(C.Device
).QV.ARt.toFixed())+O4)+A.aaR(A.acf.A6e))+A.aaR(A.acf.Colon))+N$)+A._GetAutoObject(
A.acj.KK).AjL(((B=A._GetAutoObject(C.Device).QV.Timestamp)<0)?B+0x100000000:B))+
Ax9)+AV8)+A._GetAutoObject(C.Device).SU.AVd.toFixed())+Lv)+A._GetAutoObject(C.Device
).SU.AVe.toFixed())+Lv)+A._GetAutoObject(C.Device).SU.AVc.toFixed())+O4)+A.aaR(A.
acf.A6e))+A.aaR(A.acf.Colon))+N$)+A._GetAutoObject(A.acj.KK).AjL(((B=A._GetAutoObject(
C.Device).SU.Timestamp)<0)?B+0x100000000:B);return AzQ;},A6A:function(A0G){var B;
var O;var AAO=A.jV;for(O=1;O<=A0G;O=O+1)if(!!A.abz(0,2))AAO=AAO+String.fromCharCode(
A.abz(97,104)&0xFFFF);else AAO=AAO+String.fromCharCode(A.abz(48,57)&0xFFFF);return AAO;
},Abq:function(Em){var Ay6=0;if(Em===1)Em=0;var Bce=this.Agw.Avk(Em);if(Bce>=0)Ay6=
this.Aft.Get(Bce);return Ay6;},ACZ:function(Em){var FQ=0;var ABp=this.Agw.Avk(Em
);if(ABp>=0)FQ=this.Afs.Get(ABp);return FQ;},ACY:function(Em){var FQ=0;var ABp=this.
Agw.Avk(Em);if(ABp>=0)FQ=this.Afr.Get(ABp);return FQ;},A6r:function(){var Be=this.
Mo();var U2=A._NewObject(C.AnimalTypeFilterCriterion,0);U2.Initialize(14,0,A._GetAutoObject(
C.Device).ACy,true);Be.CW(U2);return Be;},AQ9:function(J1){var BO=Math.trunc(J1/
1000000000000)|0;if(!BO)return 0;else if(BO>=900)return 1;else if(!A._GetAutoObject(
C.Converter).ANx(BO))return 2;else return 3;},A6E:function(){var Be=A._GetAutoObject(
C.Helper).ACR();var AfM=A._GetAutoObject(C.Helper).A6m(3,A._GetAutoObject(C.Device
).AD6);AfM.YH=true;Be.CW(AfM);return Be;},A6m:function(Eb,Bbk){var Av=A._NewObject(
C.UInt32FilterCriterion,0);Av.EJ=4;switch(Eb){case 2:{Av.Operator=3;Av.A4=A._GetAutoObject(
C.Helper).ZQ(Bbk);}break;case 3:{Av.Operator=2;Av.A4=A._GetAutoObject(C.Helper).
ZQ(Bbk-1);}break;default:A.ab5("%s%e",AV9,Eb);}return Av;},BiM:function(){return(((
A._GetAutoObject(C.Device).GetVersionMajor().toFixed()+Lv)+A._GetAutoObject(C.Device
).GetVersionMinor().toFixed())+Lv)+A._GetAutoObject(C.Device).GetVersionRev().toFixed(
);},A4K:function(Rn,Et){var GB=0;switch(Rn){case 0:GB=Et.VisualId;break;case 2:GB=
A._GetAutoObject(C.Helper).Ak4(Et.TransponderId);break;case 3:if(Et.NaisId>0)GB=
A._GetAutoObject(C.Helper).Ak4(Et.NaisId);break;case 1:if(!A._GetAutoObject(C.Device
).EartagNrAssignmentMode)GB=A._GetAutoObject(C.Device).AjT;else switch(Et.Gender
){case 0:GB=A._GetAutoObject(C.Device).Aq4;break;case 1:GB=A._GetAutoObject(C.Device
).Aq3;break;case 2:GB=A._GetAutoObject(C.Device).AjT;break;default:throw new Error(
AHo+Et.Gender.toFixed());}break;default:throw new Error(AHp+Rn.toFixed());}return GB;
},A$w:function(){var B;var IT=null;var Te=0;if(!A._GetAutoObject(C.Device).EartagNrAssignmentMode
){IT=[B=A._GetAutoObject(C.Device),B.Ano,B.AoB];Te=A._GetAutoObject(C.Device).AuW;
}else switch(A._GetAutoObject(C.Helper).W.Gender){case 1:{IT=[B=A._GetAutoObject(
C.Device),B.Av9,B.AyC];Te=A._GetAutoObject(C.Device).ACq;}break;case 0:{IT=[B=A.
_GetAutoObject(C.Device),B.Av_,B.AyD];Te=A._GetAutoObject(C.Device).ACr;}break;case
2:{IT=[B=A._GetAutoObject(C.Device),B.Ano,B.AoB];Te=A._GetAutoObject(C.Device).AuW;
}break;default:;}if(!!IT)switch(Te){case 1:IT[2].call(IT[0],A._GetAutoObject(C.Helper
).W.VisualId-1);break;case 0:IT[2].call(IT[0],A._GetAutoObject(C.Helper).W.VisualId+
1);break;default:;}},A67:function(Xk,Et){return(Et.NaisId!==Xk)&&this.AQ6(Xk);},
Bje:function(Jf,Et){return(Et.TransponderId!==Jf)&&this.AQ8(Jf);},AOF:function(){
var Be=A._GetAutoObject(C.Helper).A6C();var Az$=A._NewObject(C.UInt64FilterCriterion
,0);Az$.Initialize(35,5,0,true);Be.CW(Az$);return Be;},ACT:function(){var Be=A._GetAutoObject(
C.Helper).A6C();var Az$=A._NewObject(C.UInt64FilterCriterion,0);Az$.Initialize(35
,0,0,true);Be.CW(Az$);return Be;},JV:function(A0x,Ah0){A0x.Aj(Ah0);A0x.Ar(Ah0);A0x.
Z(Ah0);},ANr:function(Ah2){var B;var Aa;var A2D=false;var Xq=Ah2.TL(null,0x1);while(
!!Xq&&(((B=Xq)?B.__proto__:null)!==A.Core.Y)){Aa=(A.kR.Co.isPrototypeOf(Xq)?Xq:null
);if(!!Aa){Aa.Bg(A2D);A2D=!A2D;}Xq=Ah2.TL(Xq,0x1);}},BnY:function(Jf){var Ac5=A.
_GetAutoObject(C.Device).Am.Filter;A._GetAutoObject(C.Device).Am.Bl(null);var A3K=
A._GetAutoObject(C.Device).Am.AgO(22,Jf);A._GetAutoObject(C.Device).Am.SL(A3K,22
,0);A._GetAutoObject(C.Device).Am.Bl(Ac5);},A6p:function(Atm){var Be=null;switch(
Atm){case 0:Be=this.Bix();break;case 1:Be=this.ACR();break;default:throw new Error(
AHq+Atm.toFixed());}return Be;},Bix:function(){var Be=A._GetAutoObject(C.Helper).
Mo();var AfM=this.A6m(2,100);Be.CW(AfM);return Be;},BxT:function(Atm){var Ac5=A.
_GetAutoObject(C.Device).Am.Filter;A._GetAutoObject(C.Device).Am.Bl(this.A6p(Atm
));var O;for(O=0;O<A._GetAutoObject(C.Device).Am.Ca();O++)A._GetAutoObject(C.Device
).Am.MB(O,10,false);A._GetAutoObject(C.Device).Am.Bl(Ac5);},Biy:function(Atm){var
Ac5=A._GetAutoObject(C.Device).Am.Filter;A._GetAutoObject(C.Device).Am.Bl(this.A6p(
Atm));var Gd=A._GetAutoObject(C.Device).Am.Ca();A._GetAutoObject(C.Device).Am.Bl(
Ac5);return Gd;},Arw:function(){return this.Uw;},A8L:function(){return this.Ahy;
},BkO:function(){return this.AUm;},BkP:function(){return this.AUn;},BkS:function(
){return this.AGL;},_Init:function(aArg){C.AmI._Init.call(this,aArg);C.Animal._Init.
call(this.W={I:this},0);A.Core.Bs._Init.call(this.Au={I:this},0);A.acl.Gh._Init.
call(this.KF={I:this},0);A.acl.Gh._Init.call(this.SO={I:this},0);C.AMC._Init.call(
this.AdW={I:this},0);C.AU4._Init.call(this.UC={I:this},0);C.AU3._Init.call(this.
UB={I:this},0);C.TE._Init.call(this.Aej={I:this},0);C.AVH._Init.call(this.Afs={I:
this},0);C.AVG._Init.call(this.Afr={I:this},0);C.AVF._Init.call(this.Afq={I:this
},0);C.AVJ._Init.call(this.Aft={I:this},0);C.AMD._Init.call(this.Agw={I:this},0);
this.__proto__=C.HelperClass;var B;this.KF.HM(1);this.KF.Fl(3000);this.KF.B2=100;
this.SO.Awz(10);this.SO.WC(5);this.SO.HM(1);this.SO.Fl(4000);this.Aej.B2=false;this.
Aej.Cw=true;this.Aej.HM(1);this.Aej.Fl(100);this.KF.Sw=[this,this.BBH];this.KF.Q=[
this,this.BkS,this.Bm_];this.SO.Sw=[this,this.BBJ];this.SO.Q=[B=A._GetAutoObject(
C.Device),B.AEy,B.AIP];this.Aej.Q=[B=A._GetAutoObject(C.Device),B.AEz,B.AIQ];this.
Init(aArg);var Lw=this._variants();if(Lw){this.K={};Lw._Init.call(this,aArg);}},
_Done:function(){if(this.K)this.K._Done.call(this);this.__proto__=C.AmI;this.W._Done(
);this.Au._Done();this.KF._Done();this.SO._Done();this.AdW._Done();this.UC._Done(
);this.UB._Done();this.Aej._Done();this.Afs._Done();this.Afr._Done();this.Afq._Done(
);this.Aft._Done();this.Agw._Done();C.AmI._Done.call(this);},_ReInit:function(){
C.AmI._ReInit.call(this);this.W._ReInit();this.Au._ReInit();this.KF._ReInit();this.
SO._ReInit();this.AdW._ReInit();this.UC._ReInit();this.UB._ReInit();this.Aej._ReInit(
);this.Afs._ReInit();this.Afr._ReInit();this.Afq._ReInit();this.Aft._ReInit();this.
Agw._ReInit();if(this.K)this.K._ReInit.call(this);},_Mark:function(D){var B;C.AmI.
_Mark.call(this,D);if((B=this.Uw)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.
Ahy)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.AUm)&&(B._cycle!=D))B._Mark(B.
_cycle=D);if((B=this.AUn)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.W)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.Au)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
KF)._cycle!=D)B._Mark(B._cycle=D);if((B=this.SO)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.AdW)._cycle!=D)B._Mark(B._cycle=D);if((B=this.UC)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.UB)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Aej)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Afs)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Afr)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.Afq)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
Aft)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Agw)._cycle!=D)B._Mark(B._cycle=D);
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
BH:function(A5){throw new Error(Aoo+A5.toFixed());},Lt:function(A5){return this.
BH(A5);},_Init:function(aArg){this.__proto__=C.EnumToString;A.h7++;},_Done:function(
){this.__proto__=null;A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((
B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:
"Device::EnumToString"};C.ScreenTypeToString={BH:function(A5){var AJT=A5;var BD;
switch(AJT){case 3:BD=A.aaR(A.acf.Avq);break;case 34:BD=A.aaR(A.acf.Tt);break;case
35:BD=A.aaR(A.acf.Vq);break;case 43:BD=A.aaR(A.acf.AOE);break;default:BD=this.Bpk(
A5);}return BD;},Bpk:function(A5){var AJT=A5;var BD=A.jV;switch(AJT){case 0:BD=Ax_;
break;case 2:BD=AV_;break;case 4:BD=AV$;break;case 39:BD=AWa;break;case 38:BD=AHr;
break;case 63:BD=AWb;break;case 64:BD=AHs;break;case 82:BD=AHt;break;case 83:BD=
AHu;break;case 92:BD=AWc;break;case 93:BD=AHv;break;case 65:BD=AWd;break;case 3:
BD=AHw;break;case 6:BD=Rk;break;case 16:BD=Xc;break;case 22:BD=AWe;break;case 42:
BD=AWf;break;case 88:BD=AWg;break;case 87:BD=AWh;break;case 89:BD=AWi;break;case
95:BD=AWj;break;case 17:BD=AWk;break;case 23:BD=AhS;break;case 18:BD=AHx;break;case
19:BD=AWl;break;case 37:BD=AWm;break;case 76:BD=AHy;break;case 1:BD=AHz;break;case
5:BD=Ax$;break;case 7:BD=P7;break;case 81:BD=AWn;break;case 8:BD=AWo;break;case 9:
BD=AWp;break;case 40:BD=AsZ;break;case 41:BD=AWq;break;case 24:BD=AWr;break;case
10:BD=AWs;break;case 60:BD=AWt;break;case 21:BD=AWu;break;case 11:BD=AWv;break;case
29:BD=As0;break;case 48:BD=AWw;break;case 30:BD=AWx;break;case 12:BD=AWy;break;case
13:BD=AWz;break;case 14:BD=AWA;break;case 15:BD=AWB;break;case 69:BD=AWC;break;case
70:BD=AWD;break;case 20:BD=AWE;break;case 25:BD=AWF;break;case 66:BD=AHA;break;case
59:BD=Alb;break;case 58:BD=AWG;break;case 56:BD=AWH;break;case 57:BD=AWI;break;case
68:BD=Aya;break;case 67:BD=Alc;break;case 84:BD=AhT;break;case 77:BD=Ayb;break;case
26:BD=Aop;break;case 28:BD=AhU;break;case 27:BD=AWJ;break;case 31:BD=Ayc;break;case
78:BD=AHB;break;case 34:BD=Afz;break;case 35:BD=AHC;break;case 32:BD=Aaf;break;case
45:BD=Ald;break;case 49:BD=Aoq;break;case 55:BD=AWK;break;case 54:BD=AWL;break;case
33:BD=AWM;break;case 36:BD=AWN;break;case 50:BD=AWO;break;case 75:BD=As1;break;case
43:BD=AHD;break;case 44:BD=AHE;break;case 61:BD=AWP;break;case 62:BD=AWQ;break;case
46:BD=AWR;break;case 47:BD=AWS;break;case 85:BD=AWT;break;case 86:BD=AWU;break;case
71:BD=AWV;break;case 72:BD=AWW;break;case 74:BD=AWX;break;case 73:BD=AWY;break;case
51:BD=AWZ;break;case 52:BD=Ayd;break;case 53:BD=AHF;break;case 79:BD=AHG;break;case
80:BD=AHH;break;case 90:BD=AHI;break;case 91:BD=AHJ;break;case 94:BD=AHK;break;default:
throw new Error(AW0+AJT.toFixed());}return BD;},_Init:function(aArg){C.EnumToString.
_Init.call(this,aArg);this.__proto__=C.ScreenTypeToString;},_className:"Device::ScreenTypeToString"
};C.OverlayMenuToString={BH:function(A5){var Be6=A5;var Om=A.jV;switch(Be6){case
0:Om=AW1;break;case 1:Om=AHw;break;case 8:Om=AW2;break;case 2:Om=AW3;break;case 3:
Om=AW4;break;case 4:Om=AW5;break;case 5:Om=AW6;break;case 6:Om=Aye;break;case 7:
Om=AHL;break;case 11:Om=AW7;break;case 12:Om=AHM;break;case 9:Om=AhV;break;case 10:
Om=UV;break;case 14:Om=AW8;break;case 15:Om=Aag;break;case 13:Om=AW9;break;case 16:
Om=AW_;break;case 17:Om=Ale;break;default:throw new Error(AfA+Be6.toFixed());}return Om;
},_Init:function(aArg){C.EnumToString._Init.call(this,aArg);this.__proto__=C.OverlayMenuToString;
},_className:"Device::OverlayMenuToString"};C.ScanStateToString={BH:function(A5){
var BfF=A5;var Bp=A.jV;switch(BfF){case 4:Bp=AcO;break;case 0:Bp=Aor;break;case 2:
Bp=AW$;break;case 3:Bp=O5;break;case 1:Bp=AHN;break;default:throw new Error(AHO+
BfF.toFixed());}return Bp;},_Init:function(aArg){C.EnumToString._Init.call(this,
aArg);this.__proto__=C.ScanStateToString;},_className:"Device::ScanStateToString"
};C.MeasureStateToString={BH:function(A5){var BdI=A5;var Bp=A.jV;switch(BdI){case
4:Bp=AcO;break;case 0:Bp=Aor;break;case 2:Bp=AXa;break;case 1:Bp=AHN;break;case 3:
Bp=AHP;break;default:throw new Error(AHQ+BdI.toFixed());}return Bp;},_Init:function(
aArg){C.EnumToString._Init.call(this,aArg);this.__proto__=C.MeasureStateToString;
},_className:"Device::MeasureStateToString"};C.TemperatureUnit={Celsius:0,Fahrenheit:
1,LAST:2};C.TemperatureUnitToString={BH:function(A5){var Bf4=A5;var Ap7=A.jV;switch(
Bf4){case 0:Ap7=A.aaR(A.acf.BpD);break;case 1:Ap7=A.aaR(A.acf.BpE);break;default:
throw new Error(AHR+Bf4.toFixed());}return Ap7;},_Init:function(aArg){C.EnumToString.
_Init.call(this,aArg);this.__proto__=C.TemperatureUnitToString;},_className:"Device::TemperatureUnitToString"
};C.AnimalType={DairyCalf:0,DairyCow:1,SheepLamb:2,LAST:3};C.AnimalTypeToString={
BH:function(A5){var AK5=A5;var type=A.jV;switch(AK5){case 0:type=A.aaR(A.acf.Bg$
);break;case 1:type=A.aaR(A.acf.Bhn);break;case 2:type=A.aaR(A.acf.Bjm);break;default:
throw new Error(AXb+AK5.toFixed());}return type;},_Init:function(aArg){C.EnumToString.
_Init.call(this,aArg);this.__proto__=C.AnimalTypeToString;},_className:"Device::AnimalTypeToString"
};C.Language={Default:0,German:1,Spanish:2,French:3,Italian:4,Finnish:5,Chinese_TW:
6,Turkish:7,Greek:8,Russian:9,Dutch:10,Czech:11,Estonian:12,Bulgarian:13,Bosnian:
14,Norwegian:15,Ukrainian:16,LAST:17};C.LanguageToString={BH:function(A5){var Az4=
A5;var O$=A.jV;switch(Az4){case 0:O$=AXc;break;case 10:O$=AXd;break;case 1:O$=AXe;
break;case 12:O$=AXf;break;case 5:O$=AXg;break;case 3:O$=AXh;break;case 8:O$=AXi;
break;case 13:O$=AHS;break;case 4:O$=AXj;break;case 9:O$=AHT;break;case 2:O$=AHU;
break;case 7:O$=Ayf;break;case 6:O$=AXk;break;case 11:O$=AXl;break;case 14:O$=AXm;
break;case 15:O$=AXn;break;case 16:O$=AXo;break;default:throw new Error(AHV+Az4.
toFixed());}return O$;},Lt:function(A5){var Az4=A5;var Dm=A.jV;switch(Az4){case 0:
Dm=AXp;break;case 10:Dm=W_;break;case 1:Dm=P5;break;case 12:Dm=AXq;break;case 5:
Dm=UQ;break;case 3:Dm=W4;break;case 8:Dm=As2;break;case 13:Dm=W1;break;case 4:Dm=
W5;break;case 9:Dm=S7;break;case 2:Dm=Aab;break;case 7:Dm=Aad;break;case 6:Dm=As3;
break;case 11:Dm=AHW;break;case 14:Dm=AXr;break;case 15:Dm=S6;break;case 16:Dm=JZ;
break;default:throw new Error(AHV+Az4.toFixed());}return Dm;},_Init:function(aArg
){C.EnumToString._Init.call(this,aArg);this.__proto__=C.LanguageToString;},_className:
"Device::LanguageToString"};C.Gender={Male:0,Female:1,Unknown:2,LAST:3};C.BirthType={
Single:0,Twins:1,Triplets:2,Quadruplets:3,LAST:4};C.GenderToString={BH:function(
A5){var AtL=A5;var AJ$=A.jV;switch(AtL){case 0:AJ$=A.aaR(A.acf.Male);break;case 1:
AJ$=A.aaR(A.acf.Female);break;case 2:AJ$=A.aaR(A.acf.Unknown);break;default:throw new
Error(AXs+AtL.toFixed());}return AJ$;},_Init:function(aArg){C.EnumToString._Init.
call(this,aArg);this.__proto__=C.GenderToString;},_className:"Device::GenderToString"
};C.BirthTypeToString={BH:function(A5){var type=A5;var AfQ=A.jV;switch(type){case
0:AfQ=A.aaR(A.acf.Boy);break;case 1:AfQ=A.aaR(A.acf.Bpz);break;case 2:AfQ=A.aaR(
A.acf.Triplets);break;case 3:AfQ=A.aaR(A.acf.Quadruplets);break;default:throw new
Error(AXt+type.toFixed());}return AfQ;},_Init:function(aArg){C.EnumToString._Init.
call(this,aArg);this.__proto__=C.BirthTypeToString;},_className:"Device::BirthTypeToString"
};C.SyncState={Idle:0,Init:1,Exporting:2,ImportStart:3,Importing:4,ImportFinish:
5,Ready:6,Error:7,LAST:8};C.SyncStateToString={BH:function(A5){var BfY=A5;var Bp=
A.jV;switch(BfY){case 7:Bp=AcO;break;case 0:Bp=Aor;break;case 6:Bp=AHP;break;case
2:Bp=AXu;break;case 5:Bp=AXv;break;case 3:Bp=AXw;break;case 4:Bp=AXx;break;case 1:
Bp=AXy;break;default:throw new Error(AXz+BfY.toFixed());}return Bp;},_Init:function(
aArg){C.EnumToString._Init.call(this,aArg);this.__proto__=C.SyncStateToString;},
_className:"Device::SyncStateToString"};C.RatedAttributeToString={BH:function(A5
){var AAP=A5;switch(AAP){case 0:return A.jV;case 1:return A.aaR(A.acf.BnN);case 4:
return A.aaR(A.acf.BnM);case 3:return A.aaR(A.acf.BnO);case 2:return A.aaR(A.acf.
BnL);default:throw new Error(AHX+AAP.toFixed());}},Lt:function(A5){var AAP=A5;switch(
AAP){case 0:return A.jV;case 1:return A.aaR(A.acf.Feed);case 4:return A.aaR(A.acf.
AGb);case 3:return A.aaR(A.acf.AGc);case 2:return A.aaR(A.acf.AF$);default:throw new
Error(AHX+AAP.toFixed());}},_Init:function(aArg){C.EnumToString._Init.call(this,
aArg);this.__proto__=C.RatedAttributeToString;},_className:"Device::RatedAttributeToString"
};C.AssesmentToString={BH:function(A5){var Alr=A5;var Azb=A.jV;switch(Alr){case 0:
case 5:Azb=A.jV;break;case 3:Azb=A.aaR(A.acj.BoE);break;case 2:Azb=A.aaR(A.acj.BoG
);break;case 1:Azb=A.aaR(A.acj.BoF);break;default:throw new Error(AXA+Alr.toFixed(
));}return Azb;},_Init:function(aArg){C.EnumToString._Init.call(this,aArg);this.
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
7,ClosedWithNo:8,Opened:9};C.PopupContext={AFY:null,AkH:A.jV,Ak1:0,PopupState:1,
Id:0,Show:false,BmT:function(E){var B;if(this.PopupState===E)return;this.PopupState=
E;if(!!this.AFY)(B=this.AFY)?B[1].call(B[0],this):null;},_Init:function(aArg){this.
__proto__=C.PopupContext;A.h7++;},_Done:function(){this.__proto__=null;A.h7--;},
_ReInit:function(){},_Mark:function(D){var B;if((B=this.AFY)&&((B=B[0])._cycle!=
D))B._Mark(B._cycle=D);if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null
,_cycle:0,_observers:null,_className:"Device::PopupContext"};C.Boolean={No:0,Yes:
1,LAST:2};C.BooleanToYesNo={BH:function(A5){switch(A5){case 0:return A.aaR(A.acf.
No);case 1:return A.aaR(A.acf.Yes);default:return Ayg+A5.toFixed();}},_Init:function(
aArg){C.EnumToString._Init.call(this,aArg);this.__proto__=C.BooleanToYesNo;},_className:
"Device::BooleanToYesNo"};C.AnimalGroupTableFields={Id:0,GroupName:1};C.AnimalGroup={
GroupName:AHk,Id:0,EM:function(Ad,AI){var HA=C.Row.EM.call(this,Ad,AI);if(HA&&!!
AI){this.OnSetId(AI.CE(Ad,0));this.AE7(AI.VU(Ad,1));}return HA;},Cq:function(AI){
var HA=C.Row.Cq.call(this,AI);if(HA&&!!AI){var Jk=AI.Ox();if(Jk<=0)A.ab5("%s",Xb
);else{if(this.Am2())this.CL=AI.YE();AI.Hj(this.CL,0,this.Id);AI.ZI(this.CL,1,this.
GroupName);AI.Oz(Jk);}}return HA;},Gm:function(){C.Row.Gm.call(this);this.OnSetId(-
1);},Hi:function(){C.Row.Hi.call(this);this.OnSetId(0);this.AE7(A.jV);},OnSetId:
function(E){if(this.Id===E)return;this.Id=E;A.abo([this,this.QY,this.OnSetId],0);
},AE7:function(E){if(this.GroupName===E)return;this.GroupName=E;A.abo([this,this.
Bkt,this.AE7],0);},QY:function(){return this.Id;},Bkt:function(){return this.GroupName;
},_Init:function(aArg){C.Row._Init.call(this,aArg);this.__proto__=C.AnimalGroup;
this.TableId=3;},_className:"Device::AnimalGroup"};C.PopupIdToString={BH:function(
A5){var Ady=A5;var Ax=A.jV;var AJR;AJR=A.aaR(A.acf.BpX)+O4;switch(Ady){case 0:Ax=
A.aaR(A.acf.Unknown);break;case 1:Ax=A.aaR(A.acf.SevereError);break;case 58:Ax=A.
aaR(A.acf.Bh4);break;case 2:Ax=A.aaR(A.acf.Bh2);break;case 3:Ax=A.aaR(A.acf.BpJ);
break;case 77:Ax=A._GetAutoObject(C.Helper).Big();break;case 78:Ax=A._GetAutoObject(
C.Helper).Bie();break;case 79:Ax=A._GetAutoObject(C.Helper).Bif();break;case 9:Ax=
A.aaR(A.acf.Bp$);break;case 5:Ax=A.aaR(A.acf.SuccessDataSync);break;case 8:Ax=A.
aaR(A.acf.SuccessResetFactorySettings);break;case 34:Ax=A.aaR(A.acf.SuccessResetAnimalData
);break;case 10:Ax=A._GetAutoObject(C.Device).ACW();break;case 82:Ax=A.aaR(A.acf.
Bh6);break;case 83:Ax=A.aaR(A.acf.Bh7);break;case 80:Ax=A.aaR(A.acf.BoQ);break;case
81:Ax=A.aaR(A.acf.SuccessRestoreBackup);break;case 91:Ax=A.aaR(A.acf.BgZ);break;
case 92:Ax=A.aaR(A.acf.Bn1);break;case 4:Ax=A.aaR(A.acf.WarningDataSync);break;case
7:Ax=A.aaR(A.acf.Bp9);break;case 33:Ax=A.aaR(A.acf.WarningResetAnimalData);break;
case 6:Ax=A.aaR(A.acf.WarningRestart);break;case 27:Ax=A.aaR(A.acf.WarningNoActionDefined
);break;case 64:Ax=A.aaR(A.acf.WarningActionNotApplicable);break;case 28:Ax=A.aaR(
A.acf.WarningNoMenuItemVisible);break;case 29:Ax=A.aaR(A.acf.WarningEnterPresentationMode
);break;case 30:Ax=A.aaR(A.acf.WarningNoAnimalsRegistered);break;case 41:Ax=((AJR+
A.aaR(A.acf.ARC))+O4)+A.aaR(A.acf.Bjz);break;case 50:Ax=((AJR+A.aaR(A.acf.ARC))+
O4)+A.aaR(A.acf.BjB);break;case 51:Ax=((AJR+A.aaR(A.acf.ARC))+O4)+A.aaR(A.acf.BjA
);break;case 42:Ax=A.aaR(A.acf.Bp7);break;case 45:Ax=A.aaR(A.acf.Bp1);break;case
46:Ax=A.aaR(A.acf.WarningNoValidCountryCode);break;case 57:Ax=A.aaR(A.acf.WarningOutdatedAnimalWeight
);break;case 52:Ax=A.aaR(A.acf.WarningOutdatedAnimalWeights);break;case 53:Ax=A.
aaR(A.acf.WarningWeightEvaluationSingular);break;case 56:Ax=A.aaR(A.acf.WarningWeightEvaluationPlural
);break;case 11:Ax=A.aaR(A.acf.ScanError);break;case 12:Ax=A.aaR(A.acf.ScanNotFound
);break;case 13:Ax=A.aaR(A.acf.BgR);break;case 36:Ax=A.aaR(A.acf.Bps);break;case
14:Ax=A.aaR(A.acf.AnimalNotFound);break;case 15:Ax=A.aaR(A.acf.SuccessUnregister
);break;case 35:Ax=A.aaR(A.acf.SuccessUnregisterPerished);break;case 26:Ax=A.aaR(
A.acf.SuccessCreationNewAnimal);break;case 23:Ax=A.aaR(A.acf.SuccessCreationNewAnimals
);break;case 24:Ax=A.aaR(A.acf.Bhq);break;case 49:Ax=A.aaR(A.acf.EvaluationInProgress
);break;case 16:Ax=A.aaR(A.acf.Bhw);break;case 17:Ax=A.aaR(A.acf.BoI);break;case
18:Ax=A.aaR(A.acf.BoW);break;case 19:Ax=A.aaR(A.acf.BoJ);break;case 20:Ax=A.aaR(
A.acf.BoX);break;case 54:Ax=A.aaR(A.acf.BoR);break;case 55:Ax=A.aaR(A.acf.BoU);break;
case 21:Ax=A.aaR(A.acf.A$A);break;case 48:Ax=(A.aaR(A.acf.A$A)+O4)+A.aaR(A.acf.A5q
);break;case 22:Ax=A.aaR(A.acf.Bp3);break;case 63:Ax=A.aaR(A.acf.Bp4);break;case
85:Ax=A.aaR(A.acf.Bp6);break;case 43:Ax=A.aaR(A.acf.Bp5);break;case 25:Ax=A.aaR(
A.acf.A$l);break;case 47:Ax=(A.aaR(A.acf.A$l)+O4)+A.aaR(A.acf.A5q);break;case 107:
Ax=A.aaR(A.acf.BpF);break;case 31:{var Bzn=(((((((((((((((((((A.aaR(A.acf.Bhh)+Ax9
)+A.aaR(A.acf.ANt))+A.aaR(A.acf.Colon))+N$)+A.aaR(A.acf.Bhj))+O4)+A.aaR(A.acf.AOu
))+A.aaR(A.acf.Colon))+N$)+A.aaR(A.acf.Bia))+O4)+A.aaR(A.acf.AT9))+A.aaR(A.acf.Colon
))+N$)+A.aaR(A.acf.BnQ))+O4)+A.aaR(A.acf.AT8))+A.aaR(A.acf.Colon))+N$)+A.aaR(A.acf.
BnP);Ax=Bzn;}break;case 32:Ax=A.aaR(A.acf.Bpt);break;case 69:Ax=A.aaR(A.acf.BjM);
break;case 44:Ax=A.aaR(A.acf.Bp_);break;case 37:Ax=A.aaR(A.acf.WarningResetWeightSettings
);break;case 38:Ax=A.aaR(A.acf.WarningResetTempThresholds);break;case 39:Ax=A.aaR(
A.acf.BnG);break;case 76:Ax=(A.aaR(A.acf.A45)+O4)+A.aaR(A.acf.AT$);break;case 40:
Ax=A.aaR(A.acf.BoS);break;case 75:Ax=A.aaR(A.acf.BoK);break;case 59:Ax=A.aaR(A.acf.
QuestionAddAnotherCalfMultiples);break;case 62:Ax=A.aaR(A.acf.BoM);break;case 96:
Ax=A.aaR(A.acf.BoN);break;case 60:Ax=A.aaR(A.acf.BoO);break;case 98:Ax=A.aaR(A.acf.
BoP);break;case 61:Ax=A.aaR(A.acf.BoY);break;case 104:Ax=A.aaR(A.acf.BoZ);break;
case 65:Ax=A.aaR(A.acf.SuccessClearAnimalLoss);break;case 66:Ax=A.aaR(A.acf.WarningNoActionsForAnimalLoss
);break;case 67:Ax=A.aaR(A.acf.SuccessLinkTransponder);break;case 106:Ax=A.aaR(A.
acf.BoL);break;case 86:Ax=A.aaR(A.acf.SuccessUnlinkTransponder);break;case 68:Ax=
A.aaR(A.acf.BoT);break;case 70:Ax=A.aaR(A.acf.Bh8);break;case 71:Ax=A.aaR(A.acf.
Bo2);break;case 72:Ax=A.aaR(A.acf.Bo3);break;case 97:Ax=A.aaR(A.acf.Bh_);break;case
100:Ax=A.aaR(A.acf.Bo4);break;case 99:Ax=A.aaR(A.acf.Bo5);break;case 88:Ax=A.aaR(
A.acf.Bh9);break;case 89:Ax=A.aaR(A.acf.Bo0);break;case 90:Ax=A.aaR(A.acf.Bo1);break;
case 73:Ax=A.aaR(A.acf.WarningNoPremisesID);break;case 74:Ax=A.aaR(A.acf.WarningNoFlashDrivePresent
);break;case 94:Ax=A.aaR(A.acf.WarningNoBackupPathPresent);break;case 93:Ax=A.aaR(
A.acf.WarningNoBackupFilePresent);break;case 84:Ax=A.aaR(A.acf.Bin);break;case 87:
Ax=A.aaR(A.acf.Bqb);break;case 95:Ax=A.aaR(A.acf.Bp0);break;case 108:Ax=A.aaR(A.
acf.Bp2);break;case 109:Ax=A.aaR(A.acf.SuccessMassDeregistration);break;case 102:
Ax=A.aaR(A.acf.WarningParsedDateInFutureInvalid);break;case 101:Ax=A.aaR(A.acf.WarningParsingDateFailed
);break;case 103:Ax=A.aaR(A.acf.WarningParsingNaisIdFailed);break;case 105:Ax=A.
aaR(A.acf.Bp8);break;default:throw new Error(AHY+Ady.toFixed());}return Ax;},Lt:
function(A5){var Ady=A5;var Ax=A.jV;switch(Ady){case 0:Ax=AXB;break;case 1:Ax=AXC;
break;case 58:Ax=AXD;break;case 2:Ax=AXE;break;case 3:Ax=AXF;break;case 77:Ax=AHZ;
break;case 78:Ax=AH0;break;case 79:Ax=AH1;break;case 9:Ax=AH2;break;case 5:Ax=Ayh;
break;case 8:Ax=Ayi;break;case 34:Ax=AH3;break;case 80:Ax=AXG;break;case 81:Ax=AH4;
break;case 91:Ax=AXH;break;case 92:Ax=AH5;break;case 82:Ax=AXI;break;case 83:Ax=
AXJ;break;case 10:Ax=AXK;break;case 4:Ax=AXL;break;case 7:Ax=AXM;break;case 33:Ax=
AXN;break;case 6:Ax=AXO;break;case 27:Ax=AXP;break;case 64:Ax=AXQ;break;case 28:
Ax=AXR;break;case 29:Ax=AXS;break;case 30:Ax=AXT;break;case 41:Ax=Ayj;break;case
50:Ax=AXU;break;case 51:Ax=AXV;break;case 42:Ax=Ayk;break;case 45:Ax=As4;break;case
46:Ax=UW;break;case 57:Ax=As5;break;case 52:Ax=AXW;break;case 53:Ax=AXX;break;case
56:Ax=AXY;break;case 11:Ax=AH6;break;case 12:Ax=AXZ;break;case 13:Ax=AH7;break;case
36:Ax=AX0;break;case 14:Ax=AX1;break;case 15:Ax=AX2;break;case 35:Ax=As6;break;case
26:Ax=AX3;break;case 23:Ax=AX4;break;case 24:Ax=AH8;break;case 49:Ax=AX5;break;case
16:Ax=AX6;break;case 17:Ax=AX7;break;case 18:Ax=AX8;break;case 19:Ax=AcP;break;case
20:Ax=AX9;break;case 54:Ax=AX_;break;case 55:Ax=AX$;break;case 21:Ax=AYa;break;case
48:Ax=AH9;break;case 22:Ax=AYb;break;case 63:Ax=AYc;break;case 43:Ax=AYd;break;case
85:Ax=AYe;break;case 25:Ax=AYf;break;case 47:Ax=AYg;break;case 107:Ax=AH_;break;
case 31:Ax=AYh;break;case 32:Ax=AYi;break;case 69:Ax=AYj;break;case 44:Ax=AH$;break;
case 37:Ax=AIa;break;case 38:Ax=AYk;break;case 39:Ax=AYl;break;case 76:Ax=AYm;break;
case 40:Ax=AYn;break;case 75:Ax=Rl;break;case 59:Ax=As7;break;case 62:Ax=AIb;break;
case 96:Ax=AIc;break;case 60:Ax=Aos;break;case 98:Ax=Aot;break;case 65:Ax=Ayl;break;
case 61:Ax=AYo;break;case 104:Ax=AId;break;case 66:Ax=AYp;break;case 67:Ax=AYq;break;
case 106:Ax=AYr;break;case 86:Ax=AYs;break;case 68:Ax=AYt;break;case 70:Ax=AYu;break;
case 71:Ax=AYv;break;case 72:Ax=AYw;break;case 97:Ax=AYx;break;case 100:Ax=AYy;break;
case 99:Ax=AYz;break;case 88:Ax=AYA;break;case 89:Ax=AYB;break;case 90:Ax=AYC;break;
case 73:Ax=AYD;break;case 74:Ax=AYE;break;case 94:Ax=AYF;break;case 93:Ax=Aou;break;
case 84:Ax=AIe;break;case 87:Ax=AYG;break;case 95:Ax=AIf;break;case 108:Ax=AIg;break;
case 109:Ax=Aah;break;case 102:Ax=AIh;break;case 101:Ax=AYH;break;case 103:Ax=AIi;
break;case 105:Ax=AYI;break;default:throw new Error(AHY+Ady.toFixed());}return Ax;
},_Init:function(aArg){C.EnumToString._Init.call(this,aArg);this.__proto__=C.PopupIdToString;
},_className:"Device::PopupIdToString"};C.PopupParamSeparator=";";C.RatingMode={
Basic:0,Extended:1,LAST:2};C.TransponderType={UNDEFINED:0,AnimalId:1,FarmId:2,GroupId:
3,PersonId:4,LAST:5};C.TransponderProtocol={UNDEFINED:0,FDX:1,HDX:2,HDX_URBAN:3,
LAST:4};C.TransponderTypeToString={BH:function(A5){var Bge=A5;var type=A.jV;switch(
Bge){case 1:type=Aym;break;case 2:type=AYJ;break;case 3:type=AYK;break;case 4:type=
Ayn;break;case 0:type=Ax_;break;default:throw new Error(AYL+Bge.toFixed());}return type;
},_Init:function(aArg){C.EnumToString._Init.call(this,aArg);this.__proto__=C.TransponderTypeToString;
},_className:"Device::TransponderTypeToString"};C.TransponderProtocolToString={BH:
function(A5){var Bgc=A5;var AAM=A.jV;switch(Bgc){case 1:AAM=AYM;break;case 2:AAM=
AYN;break;case 3:AAM=AIj;break;case 0:AAM=Ax_;break;default:throw new Error(Aov+
Bgc.toFixed());}return AAM;},_Init:function(aArg){C.EnumToString._Init.call(this
,aArg);this.__proto__=C.TransponderProtocolToString;},_className:"Device::TransponderProtocolToString"
};C.Transponder={Id:0,TransponderProtocol:0,TransponderType:0,ATD:function(E){if(
this.TransponderType===E)return;this.TransponderType=E;A.abo([this,this.Bk4,this.
ATD],0);},ATC:function(E){if(this.TransponderProtocol===E)return;this.TransponderProtocol=
E;A.abo([this,this.Bk3,this.ATC],0);},OnSetId:function(E){if(this.Id===E)return;
this.Id=E;A.abo([this,this.QY,this.OnSetId],0);},AOR:function(){return A._GetAutoObject(
C.Converter).Bpr(this.Id);},Biv:function(){return A._GetAutoObject(C.Converter).
AxK(this.Id);},Bk4:function(){return this.TransponderType;},Bk3:function(){return this.
TransponderProtocol;},QY:function(){return this.Id;},_Init:function(aArg){this.__proto__=
C.Transponder;A.h7++;},_Done:function(){this.__proto__=null;A.h7--;},_ReInit:function(
){},_Mark:function(D){var B;if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:
null,_cycle:0,_observers:null,_className:"Device::Transponder"};C.RatingModeToString={
BH:function(A5){var Vb=A5;var Nt=A.jV;switch(Vb){case 0:Nt=A.aaR(A.acf.Basic);break;
case 1:Nt=A.aaR(A.acf.Extended);break;default:throw new Error(AIk+Vb.toFixed());
}return Nt;},_Init:function(aArg){C.EnumToString._Init.call(this,aArg);this.__proto__=
C.RatingModeToString;},_className:"Device::RatingModeToString"};C.TableRowsCount={
_Init:function(aArg){this.__proto__=C.TableRowsCount;A.h7++;},_Done:function(){this.
__proto__=null;A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((B=this.
I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:
"Device::TableRowsCount"};C.MassUnit={Kilogramm:0,Pound:1,LAST:2};C.MassUnitToString={
BH:function(A5){var BdE=A5;var Ap7=A.jV;switch(BdE){case 0:Ap7=A.aaR(A.acf.Bjk);
break;case 1:Ap7=A.aaR(A.acf.Pound);break;default:throw new Error(AYO+BdE.toFixed(
));}return Ap7;},_Init:function(aArg){C.EnumToString._Init.call(this,aArg);this.
__proto__=C.MassUnitToString;},_className:"Device::MassUnitToString"};C.MinWeightGain=
20;C.MaxWeightGain=2000;C.WeightGainStep=10;C.Int32ArrayWrapper={MC:10,Array:A.abi(
10,0,null),Zy:function(E){if(this.MC===E)return;if(E>10)throw new Error(AIl);this.
MC=E;},Set:function(aIndex,AL){if((aIndex<0)||(aIndex>=this.MC))throw new Error(
Ayo);this.Array.Set(aIndex,AL);},Get:function(aIndex){if((aIndex<0)||(aIndex>=this.
MC))throw new Error(Ayo);return this.Array.Get(aIndex);},AmS:function(){var Qr=0;
var O;for(O=0;O<this.MC;O=O+1)Qr=Qr+this.Get(O);return Qr;},toString:function(){
var A2B=this.Array.Get(0).toFixed();var O;for(O=1;O<this.MC;O=O+1)A2B=(A2B+O3)+this.
Array.Get(O).toFixed();return A2B;},EM:function(aString){var Hw=aString.indexOf(
String.fromCharCode(0x2C),0);var A1q=A.jV;var O=0;while(O<10){if(aString===A.jV)
this.Array.Set(O,0);else{if(Hw===-1){A1q=aString;aString=A.jV;}else{A1q=A.abV(aString
,Hw);aString=A.ab1(aString,0,Hw+1);}this.Array.Set(O,A.wz(A1q,0,10));Hw=aString.
indexOf(String.fromCharCode(0x2C),0);}O=O+1;}if(aString!==A.jV)A.ab5("%s",Alf);}
,Cq:function(){},Hi:function(){var O;for(O=0;O<this.MC;O=O+1)this.Set(O,0);},Avk:
function(A7){var O=0;while(O<this.MC){if(this.Array.Get(O)===A7)return O;O=O+1;}
return-1;},HH:function(){var O=0;var max=-1;while(O<this.MC){if(this.Array.Get(O
)>max)max=this.Array.Get(O);O=O+1;}return max;},_Init:function(aArg){(this.Array=[
]).__proto__=C.Int32ArrayWrapper.Array;this.__proto__=C.Int32ArrayWrapper;A.h7++;
},_Done:function(){this.__proto__=null;A.h7--;},_ReInit:function(){},_Mark:function(
D){var B;if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:
null,_className:"Device::Int32ArrayWrapper"};C.ActionToString={BH:function(A5){var
Azx=A5;var E6=A.jV;switch(Azx){case 4:E6=A.aaR(A.acf.Alarm);break;case 256:E6=A.
aaR(A.acf.Weighing);break;case 128:E6=A.aaR(A.acf.A52);break;case 16:E6=A.aaR(A.
acf.AMj);break;case 1:E6=A.aaR(A.acf.Temperature);break;case 32:E6=A.aaR(A.acf.AnimalLoss
);break;case 2:E6=A.aaR(A.acf.Rating);break;case 8:E6=A.aaR(A.acf.Asa);break;case
64:E6=A.aaR(A.acf.Unregister);break;case 512:E6=A.aaR(A.acf.ARW);break;case 1024:
E6=A.aaR(A.acf.LinkTransponder);break;case 262144:E6=A.aaR(A.acf.UnlinkTransponder
);break;case 2048:E6=A.aaR(A.acf.Tt);break;case 4096:E6=A.aaR(A.acf.Calving);break;
case 8192:E6=A.aaR(A.acf.DryOff);break;case 16384:E6=A.aaR(A.acf.A7e);break;case
32768:E6=A.aaR(A.acf.AB1);break;case 524288:E6=A.aaR(A.acf.AB3);break;case 65536:
E6=A.aaR(A.acf.Delete);break;case 131072:E6=A.aaR(A.acf.A7f);break;case 0:E6=A.aaR(
A.acf.A7C);break;default:throw new Error(AIm+Azx.toFixed());}return E6;},Lt:function(
A5){var Azx=A5;var E6=A.jV;switch(Azx){case 4:E6=A.aaR(A.acf.Alarm);break;case 256:
E6=A.aaR(A.acf.Weighing);break;case 128:E6=A.aaR(A.acf.A52);break;case 16:E6=A.aaR(
A.acf.AMj);break;case 1:E6=A.aaR(A.acf.Temperature);break;case 32:E6=A.aaR(A.acf.
AnimalLoss);break;case 2:E6=A.aaR(A.acf.Rating);break;case 8:E6=A.aaR(A.acf.Asa);
break;case 64:E6=A.aaR(A.acf.Unregister);break;case 512:E6=A.aaR(A.acf.ARW);break;
case 1024:E6=A.aaR(A.acf.LinkTransponder);break;case 262144:E6=A.aaR(A.acf.UnlinkTransponder
);break;case 2048:E6=A.aaR(A.acf.Tt);break;case 4096:E6=A.aaR(A.acf.Calving);break;
case 8192:E6=A.aaR(A.acf.DryOff);break;case 32768:E6=A.aaR(A.acf.AB1);break;case
524288:E6=A.aaR(A.acf.AB3);break;case 65536:E6=A.aaR(A.acf.Delete);break;case 16384:
case 131072:E6=A.aaR(A.acf.Bjr);break;case 0:E6=A.aaR(A.acf.A7C);break;default:throw new
Error(AIm+Azx.toFixed());}return E6;},_Init:function(aArg){C.EnumToString._Init.
call(this,aArg);this.__proto__=C.ActionToString;},_className:"Device::ActionToString"
};C.ACTIONS_COUNT=19;C.PopupTimeout=2000;C.ITable={Filter:null,Id:2,CE:function(
Ad,A3){return 0;},VU:function(Ad,A3){return A.jV;},Akm:function(G){A.we(this,0);
A.pe([this,this.DY],this);},H1:function(Ad,A3){return false;},HF:function(Ad,A3){
return this.Sg(Ad,A3);},OnSetId:function(E){if(this.Id===E)return;this.Id=E;},Ca:
function(){return 0;},Bl:function(E){if(this.Filter===E)return;this.Filter=E;A.abo([
this,this.Fj,this.Fn],0);},Fn:function(Aq){this.Bl(Aq);},I2:function(Ad,A3){var BAW=
this.VV(Ad,A3);return A._GetAutoObject(C.Converter).A$o(BAW);},VV:function(Ad,A3
){return 0;},Sg:function(Ad,A3){return 0;},A6B:function(Ad,A3){return this.CE(Ad
,A3);},Ox:function(){var Jk=0;var BBI=this.Id;return Jk;},Oz:function(AoP){var HA=
0;var BBI=this.Id;return HA===1;},YE:function(){return-1;},ZK:function(Ad,A3,C0){
return false;},Hj:function(Ad,A3,C0){return false;},ZJ:function(Ad,A3,C0){return false;
},MB:function(Ad,A3,C0){return false;},ZI:function(Ad,A3,C0){return false;},Acm:
function(Ad,A3,C0){return this.ZJ(Ad,A3,C0);},AkQ:function(Ad,A3,C0){var BAX=A._GetAutoObject(
C.Converter).AdX(C0);return this.ZK(Ad,A3,BAX);},A_2:function(Ad,A3,C0){return this.
Hj(Ad,A3,C0);},AOL:function(Ad,A3){return this.CE(Ad,A3);},Bit:function(Ad,A3){return this.
CE(Ad,A3);},Boj:function(Ad,A3,C0){return this.Hj(Ad,A3,C0);},Bof:function(Ad,A3
,C0){return this.Hj(Ad,A3,C0);},Lc:function(aColumn,A7){return-1;},AmQ:function(
Ad,A3){return this.CE(Ad,A3);},Bod:function(Ad,A3,C0){return this.Hj(Ad,A3,C0);}
,ACU:function(Ad,A3){return this.CE(Ad,A3);},AUt:function(Ad,A3,MK){return this.
Hj(Ad,A3,MK);},DY:function(G){this.Bx2();},Bx2:function(){return-1;},KN:function(
Ad,A3){return 0;},SL:function(Ad,A3,C0){return false;},AgO:function(aColumn,A7){
return-1;},Hi:function(){return false;},Biu:function(Ad,A3){var BAY=this.CE(Ad,A3
);return A._GetAutoObject(C.Converter).BiV(BAY);},Biz:function(Ad,A3){return this.
CE(Ad,A3);},AOT:function(Ad,A3){return this.CE(Ad,A3);},Boh:function(Ad,A3,C0){var
BA0=A._GetAutoObject(C.Converter).A5a(C0);return this.Hj(Ad,A3,BA0);},Boi:function(
Ad,A3,C0){return this.Hj(Ad,A3,C0);},Bop:function(Ad,A3,C0){return this.Hj(Ad,A3
,C0);},AjI:function(aColumn,A7){return false;},Aeh:function(aColumn,A7){return false;
},BiI:function(Ad,A3){return this.CE(Ad,A3);},Bon:function(Ad,A3,C0){return this.
Hj(Ad,A3,C0);},Lh:function(){return this.QE()>=this.HG();},HG:function(){return 0;
},Abr:function(){return-1;},QE:function(){return 0;},Fj:function(){return this.Filter;
},_Init:function(aArg){this.__proto__=C.ITable;A.h7++;},_Done:function(){this.__proto__=
null;A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((B=this.Filter)&&(
B._cycle!=D))B._Mark(B._cycle=D);if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D
);},I:null,_cycle:0,_observers:null,_className:"Device::ITable"};C.MaxAutoActionsCount=
4;C.WeightRecordingMode={Automatic:0,Manual:1,LAST:2};C.WeightRecordingModeToString={
BH:function(A5){var Vb=A5;var Nt=A.jV;switch(Vb){case 0:Nt=A.aaR(A.acf.Automatic
);break;case 1:Nt=A.aaR(A.acf.Manual);break;default:throw new Error(Aow+Vb.toFixed(
));}return Nt;},_Init:function(aArg){C.EnumToString._Init.call(this,aArg);this.__proto__=
C.WeightRecordingModeToString;},_className:"Device::WeightRecordingModeToString"
};C.BooleanToAutoOnOff={BH:function(A5){switch(A5){case 0:return A.aaR(A.acf.Off
);case 1:return A.aaR(A.acf.Aa2);default:return Ayg+A5.toFixed();}},_Init:function(
aArg){C.EnumToString._Init.call(this,aArg);this.__proto__=C.BooleanToAutoOnOff;}
,_className:"Device::BooleanToAutoOnOff"};C.WeightStep=100;C.WeightRecordingScope={
CurrentWeightOnly:0,BirthWeightOnly:1,BirthAndCurrentWeight:2,NoWeightRecording:
3,LAST:4};C.WeightRecordingScopeToString={BH:function(A5){var BfG=A5;var AA0=A.jV;
switch(BfG){case 0:AA0=A.aaR(A.acf.Bhs);break;case 1:AA0=A.aaR(A.acf.Bg7);break;
case 2:AA0=A.aaR(A.acf.Bg3);break;case 3:AA0=A.aaR(A.acf.BjT);break;default:throw new
Error(AYP+BfG.toFixed());}return AA0;},_Init:function(aArg){C.EnumToString._Init.
call(this,aArg);this.__proto__=C.WeightRecordingScopeToString;},_className:"Device::WeightRecordingScopeToString"
};C.BodyTemperature={Undertemperature:0,Normal:1,Elevated:2,Fever:3,LAST:4};C.Kg={
A4J:0,Temperature:1,Rating:2,Afp:3,BCl:4,BC2:5,BFL:6,BDF:7,BEt:8,BDd:9,BEr:10,BET:
11,BEU:12,BFQ:13,BCw:14,LAST:15};C.AnimalListContentToString={BH:function(A5){var
Bb6=A5;var Rs=A.jV;switch(Bb6){case 0:Rs=AIn;break;case 14:Rs=AIo;break;case 2:Rs=
AYQ;break;case 1:Rs=AYR;break;case 3:Rs=AIp;break;case 4:Rs=AYS;break;case 5:Rs=
AYT;break;case 6:Rs=AYU;break;case 7:Rs=AYV;break;case 8:Rs=AYW;break;case 9:Rs=
AYX;break;case 10:Rs=AYY;break;case 11:Rs=AYZ;break;case 12:Rs=AY0;break;case 13:
Rs=AY1;break;default:throw new Error(AY2+Bb6.toFixed());}return Rs;},_Init:function(
aArg){C.EnumToString._Init.call(this,aArg);this.__proto__=C.AnimalListContentToString;
},_className:"Device::AnimalListContentToString"};C.GenderFilterCriterion={A4:0,
Abj:function(){var Av=A._NewObject(C.GenderFilterCriterion,0);Av.Fg(this);return Av;
},Fg:function(AH){C.FilterCriterion.Fg.call(this,AH);var Av=(C.GenderFilterCriterion.
isPrototypeOf(AH)?AH:null);if(!!Av)this.A4=Av.A4;},_Init:function(aArg){C.FilterCriterion.
_Init.call(this,aArg);this.__proto__=C.GenderFilterCriterion;},_className:"Device::GenderFilterCriterion"
};C.AnimalTypeFilterCriterion={A4:0,Abj:function(){var Av=A._NewObject(C.AnimalTypeFilterCriterion
,0);Av.Fg(this);return Av;},Fg:function(AH){C.FilterCriterion.Fg.call(this,AH);var
Av=(C.AnimalTypeFilterCriterion.isPrototypeOf(AH)?AH:null);if(!!Av)this.A4=Av.A4;
},Initialize:function(A3,Eb,A7,P_){this.EJ=A3;this.Operator=Eb;this.A4=A7;this.YH=
P_;return this;},_Init:function(aArg){C.FilterCriterion._Init.call(this,aArg);this.
__proto__=C.AnimalTypeFilterCriterion;},_className:"Device::AnimalTypeFilterCriterion"
};C.BCy={Auv:0,BCx:1,BEd:2,A_I:3,A5i:4,BFr:5,BC1:6,BFq:7,LinkTransponder:8,Tt:9,
Weighing:10,Calving:11,LinkNaisId:12,BES:13,ClearBirthNoticePending:14,DeleteAnimal:
15,ScanNaisId:16,Edit:17,ClearPurchaseNoticePending:18};C.AutoRegistrationModeToString={
BH:function(A5){var Vb=A5;var Nt=A.jV;switch(Vb){case 0:Nt=A.aaR(A.acf.Bhk);break;
case 1:Nt=A.aaR(A.acf.BiZ);break;case 2:Nt=A.aaR(A.acf.Off);break;default:throw new
Error(AY3+Vb.toFixed());}return Nt;},_Init:function(aArg){C.EnumToString._Init.call(
this,aArg);this.__proto__=C.AutoRegistrationModeToString;},_className:"Device::AutoRegistrationModeToString"
};C.AutoRegistrationMode={UserConfirmed:0,Background:1,Off:2,LAST:3};C.AssessmentFilterCriterion={
A4:0,Abj:function(){var Av=A._NewObject(C.AssessmentFilterCriterion,0);Av.Fg(this
);return Av;},Fg:function(AH){C.FilterCriterion.Fg.call(this,AH);var Av=(C.AssessmentFilterCriterion.
isPrototypeOf(AH)?AH:null);if(!!Av)this.A4=Av.A4;},Initialize:function(A3,Eb,A7,
P_){this.EJ=A3;this.Operator=Eb;this.A4=A7;this.YH=P_;return this;},_Init:function(
aArg){C.FilterCriterion._Init.call(this,aArg);this.__proto__=C.AssessmentFilterCriterion;
},_className:"Device::AssessmentFilterCriterion"};C.D9={AdQ:0,Temperature:1,Afp:
2,Rating:3,LAST:4};C.FactoryResetScope={DeviceAndAnimalData:0,AnimalDataOnly:1,LAST:
2};C.FactoryResetScopeToString={BH:function(A5){switch(A5){case 0:return A.aaR(A.
acf.DeviceAndAnimalData);case 1:return A.aaR(A.acf.AnimalDataOnly);default:return AY4+
A5.toFixed();}},_Init:function(aArg){C.EnumToString._Init.call(this,aArg);this.__proto__=
C.FactoryResetScopeToString;},_className:"Device::FactoryResetScopeToString"};C.
AU4={Cq:function(){A._GetAutoObject(C.Device).Ar5(this.toString());},Init:function(
aArg){var B;A.zX([this,this.BeN],[B=A._GetAutoObject(C.Device),B.A8U,B.Ba1],0);this.
BeN(this);},BeN:function(G){this.EM(A._GetAutoObject(C.Device).AGQ);A.we(this,0);
},_Init:function(aArg){C.Int32ArrayWrapper._Init.call(this,aArg);this.__proto__=
C.AU4;this.Zy(3);this.Init(aArg);},_className:"Device::TemperaturesLowClass"};C.
AU3={Init:function(aArg){var B;A.zX([this,this.BeL],[B=A._GetAutoObject(C.Device
),B.A8T,B.Ba0],0);this.BeL(this);},Cq:function(){A._GetAutoObject(C.Device).Ar4(
this.toString());},BeL:function(G){this.EM(A._GetAutoObject(C.Device).AGP);A.we(
this,0);},_Init:function(aArg){C.Int32ArrayWrapper._Init.call(this,aArg);this.__proto__=
C.AU3;this.Zy(3);this.Init(aArg);},_className:"Device::TemperaturesHighClass"};C.
AMC={Init:function(aArg){var B;A.zX([this,this.Bee],[B=A._GetAutoObject(C.Device
),B.A7$,B.BaG],0);this.Bee(this);},Bee:function(G){this.EM(A._GetAutoObject(C.Device
).ABB);A.we(this,0);},_Init:function(aArg){C.Int32ArrayWrapper._Init.call(this,aArg
);this.__proto__=C.AMC;this.Zy(3);this.Init(aArg);},_className:"Device::AnimalTypesClass"
};C.UInt64FilterCriterion={A4:0,Abj:function(){var Av=A._NewObject(C.UInt64FilterCriterion
,0);Av.Fg(this);return Av;},Fg:function(AH){C.FilterCriterion.Fg.call(this,AH);var
Av=(C.UInt64FilterCriterion.isPrototypeOf(AH)?AH:null);if(!!Av)this.A4=Av.A4;},Initialize:
function(A3,Eb,A7,P_){this.EJ=A3;this.Operator=Eb;this.A4=A7;this.YH=P_;return this;
},_Init:function(aArg){C.FilterCriterion._Init.call(this,aArg);this.__proto__=C.
UInt64FilterCriterion;},_className:"Device::UInt64FilterCriterion"};C.BooleanToAssignedUnassignedString={
BH:function(A5){switch(A5){case 0:return A.aaR(A.acf.Akl);case 1:return A.aaR(A.
acf.BgJ);default:return Ayg+A5.toFixed();}},_Init:function(aArg){C.EnumToString.
_Init.call(this,aArg);this.__proto__=C.BooleanToAssignedUnassignedString;},_className:
"Device::BooleanToAssignedUnassignedString"};C.C7={UNDEFINED:0,AT:1,BA:2,BE:3,BCD:
4,BCS:5,BCT:6,BCU:7,BCV:8,BCW:9,BC6:10,BC7:11,BDe:12,BDf:13,BDu:14,FR:15,GR:16,BDG:
17,BDH:18,BDS:19,BDT:20,BDY:21,BDZ:22,BD0:23,BD1:24,BD7:25,BEj:26,BEk:27,BEz:28,
BEA:29,BEQ:30,BER:31,BE7:32,BE8:33,BE9:34,BFk:35,BFl:36,BFE:37,A$p:38,BFF:39,LAST:
40};C.CountryToString={BH:function(A5){var J3=A5;var FA=A.jV;switch(J3){case 1:FA=
A.aaR(A.acm.BgV);break;case 2:FA=A.aaR(A.acm.Bg8);break;case 3:FA=A.aaR(A.acm.Bg2
);break;case 4:FA=A.aaR(A.acm.Bg_);break;case 5:FA=A.aaR(A.acm.Bha);break;case 6:
FA=A.aaR(A.acm.Bo9);break;case 7:FA=A.aaR(A.acm.Bhd);break;case 8:FA=A.aaR(A.acm.
Bht);break;case 9:FA=A.aaR(A.acm.Bhu);break;case 10:FA=A.aaR(A.acm.Bio);break;case
11:FA=A.aaR(A.acm.BhA);break;case 12:FA=A.aaR(A.acm.Bh5);break;case 13:FA=A.aaR(
A.acm.BoB);break;case 14:FA=A.aaR(A.acm.Bic);break;case 15:FA=A.aaR(A.acm.Bik);break;
case 16:FA=A.aaR(A.acm.BiQ);break;case 17:FA=A.aaR(A.acm.Bhr);break;case 18:FA=A.
aaR(A.acm.BiW);break;case 19:FA=A.aaR(A.acm.Bi5);break;case 20:FA=A.aaR(A.acm.Bjf
);break;case 21:FA=A.aaR(A.acm.Bjh);break;case 22:FA=A.aaR(A.acm.Bjs);break;case
23:FA=A.aaR(A.acm.Bjv);break;case 24:FA=A.aaR(A.acm.Bjp);break;case 25:FA=A.acm.
Bjx;break;case 26:FA=A.aaR(A.acm.BjN);break;case 27:FA=A.aaR(A.acm.BjU);break;case
28:FA=A.aaR(A.acm.Bnz);break;case 29:FA=A.aaR(A.acm.BnA);break;case 30:FA=A.aaR(
A.acm.Bn2);break;case 31:FA=A.aaR(A.acm.Bn4);break;case 32:FA=A.aaR(A.acm.Bo8);break;
case 33:FA=A.aaR(A.acm.BoA);break;case 34:FA=A.aaR(A.acm.Boz);break;case 35:FA=A.
aaR(A.acm.Bpy);break;case 36:FA=A.aaR(A.acm.Bpg);break;case 37:FA=A.aaR(A.acm.BpC
);break;case 38:FA=A.aaR(A.acm.A$p);break;case 39:FA=A.aaR(A.acm.BpB);break;case
0:FA=Aox;break;default:throw new Error(Aoj+J3.toFixed());}return FA;},Lt:function(
A5){var J3=A5;var BO=A.jV;switch(J3){case 1:BO=S5;break;case 2:BO=Z5;break;case 3:
BO=UO;break;case 4:BO=W1;break;case 5:BO=Iq;break;case 6:BO=Aac;break;case 7:BO=
UP;break;case 8:BO=Z7;break;case 9:BO=W3;break;case 10:BO=P5;break;case 11:BO=Z8;
break;case 12:BO=Z9;break;case 13:BO=Aab;break;case 14:BO=UQ;break;case 15:BO=W4;
break;case 16:BO=Z_;break;case 17:BO=W2;break;case 18:BO=O2;break;case 19:BO=Ri;
break;case 20:BO=W5;break;case 21:BO=W6;break;case 22:BO=W8;break;case 23:BO=Z$;
break;case 24:BO=W7;break;case 25:BO=W9;break;case 26:BO=W_;break;case 27:BO=S6;
break;case 28:BO=UR;break;case 29:BO=US;break;case 30:BO=AcL;break;case 31:BO=S7;
break;case 32:BO=W$;break;case 33:BO=Afv;break;case 34:BO=Aaa;break;case 35:BO=Aad;
break;case 36:BO=Z6;break;case 37:BO=AhO;break;case 38:BO=JZ;break;case 39:BO=Aae;
break;case 0:BO=Aox;break;default:throw new Error(Aoj+J3.toFixed());}return BO;}
,_Init:function(aArg){C.EnumToString._Init.call(this,aArg);this.__proto__=C.CountryToString;
},_className:"Device::CountryToString"};C.EaseOfDelivery={Unspecified:0,Easy:1,Moderate:
2,Difficult:3,Surgery:4,LAST:5};C.EaseOfDeliveryToString={BH:function(A5){var BcD=
A5;var AtF=A.jV;switch(BcD){case 0:AtF=A.aaR(A.acf.Unspecified);break;case 1:AtF=
A.aaR(A.acf.Easy);break;case 2:AtF=A.aaR(A.acf.Moderate);break;case 3:AtF=A.aaR(
A.acf.Difficult);break;case 4:AtF=A.aaR(A.acf.Surgery);break;default:throw new Error(
AIq+BcD.toFixed());}return AtF;},_Init:function(aArg){C.EnumToString._Init.call(
this,aArg);this.__proto__=C.EaseOfDeliveryToString;},_className:"Device::EaseOfDeliveryToString"
};C.WhereAbouts={UNB:0,EZU:1,EMA:2,VZU:3,VMA:4,VIV:5,TOT:6,V48:7,V3T:8,MGE:9,VKB:
10,LAST:11};C.WhereAboutsToString={BH:function(A5){var Bgx=A5;var AaS=A.jV;switch(
Bgx){case 0:AaS=A.aaR(A.acf.Unknown);break;case 1:AaS=A.aaR(A.acf.BpL);break;case
2:AaS=A.aaR(A.acf.BpK);break;case 3:AaS=A.aaR(A.acf.BpT);break;case 4:AaS=A.aaR(
A.acf.BpS);break;case 5:AaS=A.aaR(A.acf.BpQ);break;case 6:AaS=A.aaR(A.acf.BpN);break;
case 7:AaS=A.aaR(A.acf.BpP);break;case 8:AaS=A.aaR(A.acf.BpO);break;case 9:AaS=A.
aaR(A.acf.BpM);break;case 10:AaS=A.aaR(A.acf.BpR);break;default:throw new Error(
Aai+Bgx.toFixed());}return AaS;},_Init:function(aArg){C.EnumToString._Init.call(
this,aArg);this.__proto__=C.WhereAboutsToString;},_className:"Device::WhereAboutsToString"
};C.Breed={UNKNOWN:0,SBT:1,RBT:2,JER:3,BV:4,RVA:5,RV:6,RDN:7,DSN:8,FL:9,GV:10,PIN:
11,HIN:12,MW:13,VW:14,LMP:15,DBV:16,AS:17,VR:18,CHA:19,LIM:20,WBB:21,BA:22,MA:23
,SAL:24,MON:25,AU:26,PIE:27,CHI:28,ROM:29,MAR:30,WP:31,BB:32,DA:33,AA:34,HE:35,SH:
36,HLD:37,WB:38,GAL:39,LR:40,BGA:41,LG:42,BRA:43,NOR:44,UST:45,ZEB:46,GRV:47,DEX:
48,WGA:49,LH:50,SD:51,FR:52,TUX:53,TLM:54,FLF:55,UCK:56,BLA:57,WIT:58,LAK:59,RHV:
60,AT:61,GR:62,PIF:63,PS:64,GVF:65,BVF:66,RBF:67,HWF:68,MWF:69,VWF:70,LPF:71,BRN:
72,BAZ:73,AO:74,BE:75,WL:76,BIS:77,YAK:78,SON:79,TAU:80,IND:81,TIN:82,WAG:83,XFF:
84,XFM:85,XMM:86,EVO:87,BLH:88,TLH:89,MGR:90,WSH:91,MUR:92,EBS:93,ERI:94,PAR:95,
XZF:96,XZM:97,XZZ:98,LAST:99};C.BreedToString={BH:function(A5){var Bv=A5;var BJ=
A.jV;switch(Bv){case 0:BJ=A.aaR(A.acf.Unknown);break;case 1:BJ=A.aaR(A.ack.SBT);
break;case 2:BJ=A.aaR(A.ack.RBT);break;case 3:BJ=A.aaR(A.ack.JER);break;case 4:BJ=
A.aaR(A.ack.BV);break;case 5:BJ=A.aaR(A.ack.RVA);break;case 6:BJ=A.aaR(A.ack.RV);
break;case 7:BJ=A.aaR(A.ack.RDN);break;case 8:BJ=A.aaR(A.ack.DSN);break;case 9:BJ=
A.aaR(A.ack.FL);break;case 10:BJ=A.aaR(A.ack.GV);break;case 11:BJ=A.aaR(A.ack.PIN
);break;case 12:BJ=A.aaR(A.ack.HIN);break;case 13:BJ=A.aaR(A.ack.MW);break;case 14:
BJ=A.aaR(A.ack.VW);break;case 15:BJ=A.aaR(A.ack.LMP);break;case 16:BJ=A.aaR(A.ack.
DBV);break;case 17:BJ=A.aaR(A.ack.AS);break;case 18:BJ=A.aaR(A.ack.VR);break;case
19:BJ=A.aaR(A.ack.CHA);break;case 20:BJ=A.aaR(A.ack.LIM);break;case 21:BJ=A.aaR(
A.ack.WBB);break;case 22:BJ=A.aaR(A.ack.BA);break;case 23:BJ=A.aaR(A.ack.MA);break;
case 24:BJ=A.aaR(A.ack.SAL);break;case 25:BJ=A.aaR(A.ack.MON);break;case 26:BJ=A.
aaR(A.ack.AU);break;case 27:BJ=A.aaR(A.ack.PIE);break;case 28:BJ=A.aaR(A.ack.CHI
);break;case 29:BJ=A.aaR(A.ack.ROM);break;case 30:BJ=A.aaR(A.ack.MAR);break;case
31:BJ=A.aaR(A.ack.WP);break;case 32:BJ=A.aaR(A.ack.BB);break;case 33:BJ=A.aaR(A.
ack.DA);break;case 34:BJ=A.aaR(A.ack.AA);break;case 35:BJ=A.aaR(A.ack.HE);break;
case 36:BJ=A.aaR(A.ack.SH);break;case 37:BJ=A.aaR(A.ack.HLD);break;case 38:BJ=A.
aaR(A.ack.WB);break;case 39:BJ=A.aaR(A.ack.GAL);break;case 40:BJ=A.aaR(A.ack.LR);
break;case 41:BJ=A.aaR(A.ack.BGA);break;case 42:BJ=A.aaR(A.ack.LG);break;case 43:
BJ=A.aaR(A.ack.BRA);break;case 44:BJ=A.aaR(A.ack.NOR);break;case 45:BJ=A.aaR(A.ack.
UST);break;case 46:BJ=A.aaR(A.ack.ZEB);break;case 47:BJ=A.aaR(A.ack.GRV);break;case
48:BJ=A.aaR(A.ack.DEX);break;case 49:BJ=A.aaR(A.ack.WGA);break;case 50:BJ=A.aaR(
A.ack.LH);break;case 51:BJ=A.aaR(A.ack.SD);break;case 52:BJ=A.aaR(A.ack.FR);break;
case 53:BJ=A.aaR(A.ack.TUX);break;case 54:BJ=A.aaR(A.ack.TLM);break;case 55:BJ=A.
aaR(A.ack.FLF);break;case 56:BJ=A.aaR(A.ack.UCK);break;case 57:BJ=A.aaR(A.ack.BLA
);break;case 58:BJ=A.aaR(A.ack.WIT);break;case 59:BJ=A.aaR(A.ack.LAK);break;case
60:BJ=A.aaR(A.ack.RHV);break;case 61:BJ=A.aaR(A.ack.AT);break;case 62:BJ=A.aaR(A.
ack.GR);break;case 63:BJ=A.aaR(A.ack.PIF);break;case 64:BJ=A.aaR(A.ack.PS);break;
case 65:BJ=A.aaR(A.ack.GVF);break;case 66:BJ=A.aaR(A.ack.BVF);break;case 67:BJ=A.
aaR(A.ack.RBF);break;case 68:BJ=A.aaR(A.ack.HWF);break;case 69:BJ=A.aaR(A.ack.MWF
);break;case 70:BJ=A.aaR(A.ack.VWF);break;case 71:BJ=A.aaR(A.ack.LPF);break;case
72:BJ=A.aaR(A.ack.BRN);break;case 73:BJ=A.aaR(A.ack.BAZ);break;case 74:BJ=A.aaR(
A.ack.AO);break;case 75:BJ=A.aaR(A.ack.BE);break;case 76:BJ=A.aaR(A.ack.WL);break;
case 77:BJ=A.aaR(A.ack.BIS);break;case 78:BJ=A.aaR(A.ack.YAK);break;case 79:BJ=A.
aaR(A.ack.SON);break;case 80:BJ=A.aaR(A.ack.TAU);break;case 81:BJ=A.aaR(A.ack.IND
);break;case 82:BJ=A.aaR(A.ack.TIN);break;case 83:BJ=A.aaR(A.ack.WAG);break;case
84:BJ=A.aaR(A.ack.XFF);break;case 85:BJ=A.aaR(A.ack.XFM);break;case 86:BJ=A.aaR(
A.ack.XMM);break;case 87:BJ=A.aaR(A.ack.EVO);break;case 88:BJ=A.ack.BLH;break;case
89:BJ=A.ack.TLH;break;case 90:BJ=A.ack.MGR;break;case 91:BJ=A.ack.WSH;break;case
92:BJ=A.ack.MUR;break;case 93:BJ=A.aaR(A.ack.EBS);break;case 94:BJ=A.aaR(A.ack.ERI
);break;case 95:BJ=A.ack.PAR;break;case 96:BJ=A.aaR(A.ack.XZF);break;case 97:BJ=
A.aaR(A.ack.XZM);break;case 98:BJ=A.aaR(A.ack.XZZ);break;default:throw new Error(
AY5+Bv.toFixed());}return BJ;},_Init:function(aArg){C.EnumToString._Init.call(this
,aArg);this.__proto__=C.BreedToString;},_className:"Device::BreedToString"};C.TE={
timer:null,Q:null,Ec:0,Dw:0,JM:0,Po:1000,Px:1000,Bw:false,Cw:false,B2:true,Mc:function(
G){var F;if(!this.timer)return;if(this.Ec<0){this.Dw=this.timer.Bs;this.Ec=0;}var
Au=(this.timer.Bs-this.Dw)|0;var Oo=this.Po;var Ha=this.Px+this.Po;var LE=0;var Jh=
this.Ec;if(!Jh&&(Au>=Oo)){Jh=1;Au=Au-Oo;}if((Jh>0)&&(Au>=Ha)){var Ib=(Au/Ha)|0;Au=
Au-(Ib*Ha);Jh=Jh+Ib;}if((Jh>2)&&!this.JM)Jh=1;if(Jh!==this.Ec){this.Dw=this.timer.
Bs-(((B=Au)<0)?B+0x100000000:B);this.Ec=Jh;}if(Jh>0)LE=this.Px;var KC=(Jh>=this.
JM)&&(this.JM>0);if(!!this.Q){if((!KC&&(Au>=LE))&&((F=this.Q,F[1].call(F[0]))!==
this.Cw))(F=this.Q,F[2].call(F[0],this.Cw));if((KC||((Au<LE)&&(Jh>0)))&&((F=this.
Q,F[1].call(F[0]))!==this.B2))(F=this.Q,F[2].call(F[0],this.B2));}if(KC)this.Ar(
false);},HM:function(E){if(E<0)E=0;this.JM=E;},Fl:function(E){if(E<100)E=100;this.
Po=E;},Uk:function(E){if(E<0)E=0;this.Px=E;},Ar:function(E){if(this.Bw===E)return;
this.Bw=E;if(!E&&!!this.timer){A.z9([this,this.Mc],this.timer,0);this.timer=null;
}if(E){this.timer=A._GetAutoObject(A.acl.Aee);A.zV([this,this.Mc],this.timer,0);
this.Ec=-1;}},_Init:function(aArg){this.__proto__=C.TE;A.h7++;},_Done:function(){
this.__proto__=null;A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((B=
this.timer)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Q)&&((B=B[0])._cycle!=
D))B._Mark(B._cycle=D);if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null
,_cycle:0,_observers:null,_className:"Device::BoolEffect"};C.Ig={AnimalId:0,TransponderId:
1,BD_:2,BD9:3,BEb:4,BEa:5};C.AuV={BCB:0,BC9:1};C.AnimalIdGenerationMethodToString={
BH:function(A5){var Alp=A5;var AoY=A.jV;switch(Alp){case 0:AoY=A.aaR(A.acf.Ud);break;
case 1:AoY=A.aaR(A.acf.Transponder);break;case 3:AoY=(A.aaR(A.acf.Manual)+N$)+A.
aaR(A.acf.Male);break;case 2:AoY=(A.aaR(A.acf.Manual)+N$)+A.aaR(A.acf.Female);break;
case 4:AoY=(A.aaR(A.acf.Manual)+N$)+A.aaR(A.acf.Unknown);break;case 5:AoY=(A.aaR(
A.acf.Manual)+N$)+Ayp;break;default:throw new Error(AY6+Alp.toFixed());}return AoY;
},_Init:function(aArg){C.EnumToString._Init.call(this,aArg);this.__proto__=C.AnimalIdGenerationMethodToString;
},_className:"Device::AnimalIdGenerationMethodToString"};C.DirectionOfCountingToString={
BH:function(A5){var Azw=A5;var A1y=A.jV;switch(Azw){case 0:A1y=AY7;break;case 1:
A1y=AY8;break;default:throw new Error(AY9+Azw.toFixed());}return A1y;},_Init:function(
aArg){C.EnumToString._Init.call(this,aArg);this.__proto__=C.DirectionOfCountingToString;
},_className:"Device::DirectionOfCountingToString"};C.EnumToIcon={AsG:function(A5
){throw new Error(Aoo+A5.toFixed());},AsH:function(A5){throw new Error(Aoo+A5.toFixed(
));},_Init:function(aArg){this.__proto__=C.EnumToIcon;A.h7++;},_Done:function(){
this.__proto__=null;A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((B=
this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:
"Device::EnumToIcon"};C.Aed={AsG:function(A5){return A.aaL(A.ach.AUR);},AsH:function(
A5){var Azw=A5;var RB=-1;switch(Azw){case 0:RB=3;break;case 1:RB=2;break;default:
throw new Error(AIr+Azw.toFixed());}return RB;},_Init:function(aArg){C.EnumToIcon.
_Init.call(this,aArg);this.__proto__=C.Aed;},_className:"Device::DirectionOfCountingToIcon"
};C.AdU={AsG:function(A5){return A.aaL(A.ach.AUP);},AsH:function(A5){var Alp=A5;
var RB=-1;switch(Alp){case 0:RB=0;break;case 1:RB=6;break;case 3:RB=4;break;case
2:RB=5;break;case 4:RB=2;break;case 5:RB=3;break;default:throw new Error(AIr+Alp.
toFixed());}return RB;},_Init:function(aArg){C.EnumToIcon._Init.call(this,aArg);
this.__proto__=C.AdU;},_className:"Device::AnimalIdGenerationMethodToIcon"};C.Pt={
UNDEFINED:0,SH:1,AOW:2,ARG:3,AOV:4,A7x:5,HE:6,A_G:7,A40:8,AMN:9,AUj:10,BE:11,BB:
12,A7k:13,AUk:14,AUl:15,AUW:16};C.GermanStateToString={BH:function(A5){var Bp=A5;
var GC=A.jV;switch(Bp){case 1:GC=A.aaR(A.acp.SH);break;case 2:GC=A.aaR(A.acp.AOW
);break;case 3:GC=A.aaR(A.acp.ARG);break;case 4:GC=A.aaR(A.acp.AOV);break;case 5:
GC=A.aaR(A.acp.A7x);break;case 6:GC=A.aaR(A.acp.HE);break;case 7:GC=A.aaR(A.acp.
A_G);break;case 8:GC=A.aaR(A.acp.A40);break;case 9:GC=A.aaR(A.acp.AMN);break;case
10:GC=A.aaR(A.acp.AUj);break;case 11:GC=A.aaR(A.acp.BE);break;case 12:GC=A.aaR(A.
acp.BB);break;case 13:GC=A.aaR(A.acp.A7k);break;case 14:GC=A.aaR(A.acp.AUk);break;
case 15:GC=A.aaR(A.acp.AUl);break;case 16:GC=A.aaR(A.acp.AUW);break;case 0:GC=Aox;
break;default:throw new Error(As8+Bp.toFixed());}return GC;},Lt:function(A5){var
Bp=A5;var GC=A.jV;switch(Bp){case 1:GC=A.aaR(A.acp.Bn5);break;case 2:GC=A.aaR(A.
acp.AOW);break;case 3:GC=A.aaR(A.acp.ARG);break;case 4:GC=A.aaR(A.acp.AOV);break;
case 5:GC=A.aaR(A.acp.BjK);break;case 6:GC=A.aaR(A.acp.HE);break;case 7:GC=A.aaR(
A.acp.BnK);break;case 8:GC=A.aaR(A.acp.BgY);break;case 9:GC=A.aaR(A.acp.AMN);break;
case 10:GC=A.aaR(A.acp.AUj);break;case 11:GC=A.aaR(A.acp.BE);break;case 12:GC=A.
aaR(A.acp.BB);break;case 13:GC=A.aaR(A.acp.Bjw);break;case 14:GC=A.aaR(A.acp.AUk
);break;case 15:GC=A.aaR(A.acp.AUl);break;case 16:GC=A.aaR(A.acp.AUW);break;case
0:GC=Aox;break;default:throw new Error(As8+Bp.toFixed());}return GC;},Bpl:function(
A5){var Bp=A5;var Ge=-1;switch(Bp){case 0:Ge=0;break;case 1:Ge=1;break;case 2:Ge=
2;break;case 3:Ge=3;break;case 4:Ge=4;break;case 5:Ge=5;break;case 6:Ge=6;break;
case 7:Ge=7;break;case 8:Ge=8;break;case 9:Ge=9;break;case 10:Ge=10;break;case 11:
Ge=11;break;case 12:Ge=12;break;case 13:Ge=13;break;case 14:Ge=14;break;case 15:
Ge=15;break;case 16:Ge=16;break;default:throw new Error(As8+Bp.toFixed());}return Ge;
},Bpm:function(A5){var Bp=A5;var Ge=A.jV;switch(Bp){case 1:Ge=As9;break;case 2:Ge=
As_;break;case 3:Ge=As$;break;case 4:Ge=Ata;break;case 5:Ge=Ayq;break;case 6:Ge=
Aoy;break;case 7:Ge=AY_;break;case 8:Ge=AY$;break;case 9:Ge=AZa;break;case 10:Ge=
AZb;break;case 11:Ge=UO;break;case 12:Ge=AZc;break;case 13:Ge=AZd;break;case 14:
Ge=AZe;break;case 15:Ge=AZf;break;case 16:Ge=AZg;break;case 0:Ge=Aox;break;default:
throw new Error(As8+Bp.toFixed());}return Ge;},_Init:function(aArg){C.EnumToString.
_Init.call(this,aArg);this.__proto__=C.GermanStateToString;},_className:"Device::GermanStateToString"
};C.EartagNrAssignmentMode={OneSingleRange:0,TwoNumberRanges:1,LAST:2};C.EartagNrAssignmentModeToString={
Lt:function(A5){var Vb=A5;var Nt=A.jV;switch(Vb){case 0:Nt=AZh;break;case 1:Nt=AZi;
break;default:throw new Error(AIs+Vb.toFixed());}return Nt;},BH:function(A5){var
Vb=A5;var Nt=A.jV;switch(Vb){case 0:Nt=A.aaR(A.acf.Bns);break;case 1:Nt=A.aaR(A.
acf.BpA);break;default:throw new Error(AIs+Vb.toFixed());}return Nt;},_Init:function(
aArg){C.EnumToString._Init.call(this,aArg);this.__proto__=C.EartagNrAssignmentModeToString;
},_className:"Device::EartagNrAssignmentModeToString"};C.BCu={BEp:0,BEf:1,BDo:2,
BDp:3,BDq:4,BFm:5};C.EnumToCodeset={AmA:function(AhY){throw new Error(AZj+AhY.toFixed(
));},Aeg:function(A5){throw new Error(Aoo+A5.toFixed());},AqT:function(){A.ab5("%s"
,AIt);return 0;},HH:function(){A.ab5("%s",AIt);return 0;},_Init:function(aArg){this.
__proto__=C.EnumToCodeset;A.h7++;},_Done:function(){this.__proto__=null;A.h7--;}
,_ReInit:function(){},_Mark:function(D){var B;if((B=this.I)&&(B._cycle!=D))B._Mark(
B._cycle=D);},I:null,_cycle:0,_observers:null,_className:"Device::EnumToCodeset"
};C.M0={AmA:function(AhY){var Bv;switch(AhY){case 1:Bv=1;break;case 2:Bv=2;break;
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
Bv=0;}return Bv;},Aeg:function(A5){var Bv=A5;var BL=0;switch(Bv){case 0:BL=0;break;
case 1:BL=1;break;case 2:BL=2;break;case 3:BL=3;break;case 4:BL=4;break;case 5:BL=
5;break;case 6:BL=6;break;case 7:BL=9;break;case 8:BL=10;break;case 9:BL=11;break;
case 10:BL=12;break;case 11:BL=13;break;case 12:BL=14;break;case 13:BL=15;break;
case 14:BL=16;break;case 15:BL=17;break;case 16:BL=18;break;case 17:BL=19;break;
case 18:BL=20;break;case 19:BL=21;break;case 20:BL=22;break;case 21:BL=23;break;
case 22:BL=24;break;case 23:BL=25;break;case 24:BL=26;break;case 25:BL=27;break;
case 26:BL=28;break;case 27:BL=31;break;case 28:BL=32;break;case 29:BL=33;break;
case 30:BL=34;break;case 31:BL=35;break;case 32:BL=36;break;case 33:BL=41;break;
case 34:BL=42;break;case 35:BL=43;break;case 36:BL=44;break;case 37:BL=45;break;
case 38:BL=46;break;case 39:BL=47;break;case 40:BL=48;break;case 41:BL=49;break;
case 42:BL=50;break;case 43:BL=51;break;case 44:BL=52;break;case 45:BL=53;break;
case 46:BL=54;break;case 47:BL=55;break;case 48:BL=56;break;case 49:BL=57;break;
case 50:BL=58;break;case 51:BL=59;break;case 52:BL=60;break;case 53:BL=61;break;
case 54:BL=65;break;case 55:BL=66;break;case 56:BL=67;break;case 57:BL=68;break;
case 58:BL=69;break;case 59:BL=70;break;case 60:BL=71;break;case 61:BL=72;break;
case 62:BL=73;break;case 63:BL=74;break;case 64:BL=75;break;case 65:BL=76;break;
case 66:BL=77;break;case 67:BL=78;break;case 68:BL=79;break;case 69:BL=80;break;
case 70:BL=81;break;case 71:BL=82;break;case 72:BL=83;break;case 73:BL=84;break;
case 74:BL=85;break;case 75:BL=86;break;case 76:BL=87;break;case 77:BL=88;break;
case 78:BL=89;break;case 79:BL=90;break;case 80:BL=91;break;case 81:BL=92;break;
case 82:BL=93;break;case 83:BL=94;break;case 84:BL=97;break;case 85:BL=98;break;
case 86:BL=99;break;case 87:BL=100;break;case 88:BL=101;break;case 89:BL=102;break;
case 90:BL=103;break;case 91:BL=104;break;case 92:BL=105;break;case 93:BL=106;break;
case 94:BL=107;break;case 95:BL=108;break;case 96:BL=109;break;case 97:BL=110;break;
case 98:BL=111;break;default:throw new Error(AZk+Bv.toFixed());}return BL;},AqT:
function(){return 0;},HH:function(){return 111;},_Init:function(aArg){C.EnumToCodeset.
_Init.call(this,aArg);this.__proto__=C.M0;},_className:"Device::BreedToHitCodeset"
};C.ReasonOfLeaving={Unknown:0,A$b:1,RK:2,A_A:3,A6Y:4,BEy:5,A$q:6,A7t:7,A5h:8,A_w:
9,A7r:10,A5l:11,BEO:12,BEP:13,LAST:14};C.ReasonOfLeavingToString={BH:function(A5
){var Adz=A5;var Tn=A.jV;switch(Adz){case 0:Tn=A.aaR(A.acf.Unknown);break;case 1:
Tn=A.aaR(A.acf.A$b);break;case 2:Tn=A.aaR(A.acf.RK);break;case 3:Tn=A.aaR(A.acf.
A_A);break;case 4:Tn=A.aaR(A.acf.A6Y);break;case 5:Tn=A.aaR(A.acf.Bnt);break;case
6:Tn=A.aaR(A.acf.A$q);break;case 7:Tn=A.aaR(A.acf.A7t);break;case 8:Tn=A.aaR(A.acf.
A5h);break;case 9:Tn=A.aaR(A.acf.A_w);break;case 10:Tn=A.aaR(A.acf.A7r);break;case
11:Tn=A.aaR(A.acf.A5l);break;case 12:Tn=A.aaR(A.acf.BnE);break;case 13:Tn=A.aaR(
A.acf.BnD);break;default:throw new Error(Ayr+Adz.toFixed());}return Tn;},_Init:function(
aArg){C.EnumToString._Init.call(this,aArg);this.__proto__=C.ReasonOfLeavingToString;
},_className:"Device::ReasonOfLeavingToString"};C.Ahs={AmA:function(AhY){var Pc;
switch(AhY){case 1:Pc=1;break;case 2:Pc=2;break;case 3:Pc=3;break;case 4:Pc=4;break;
case 5:Pc=5;break;case 6:Pc=6;break;case 7:Pc=7;break;case 8:Pc=8;break;case 9:Pc=
9;break;case 10:Pc=10;break;case 11:Pc=11;break;case 12:Pc=12;break;case 13:Pc=13;
break;default:Pc=0;}return Pc;},Aeg:function(A5){var Pc=A5;var Jg=0;switch(Pc){case
0:Jg=0;break;case 2:Jg=2;break;case 8:Jg=8;break;case 11:Jg=11;break;case 4:Jg=4;
break;case 10:Jg=10;break;case 7:Jg=7;break;case 5:Jg=5;break;case 9:Jg=9;break;
case 3:Jg=3;break;case 12:Jg=12;break;case 13:Jg=13;break;case 1:Jg=1;break;case
6:Jg=6;break;default:throw new Error(AIu+Pc.toFixed());}return Jg;},AqT:function(
){return 0;},HH:function(){return 13;},_Init:function(aArg){C.EnumToCodeset._Init.
call(this,aArg);this.__proto__=C.Ahs;},_className:"Device::ReasonOfLeavingToCodeset"
};C.KY={AmA:function(AhY){var K9;switch(AhY){case 1:K9=1;break;case 2:K9=2;break;
case 3:K9=3;break;case 4:K9=4;break;case 5:K9=5;break;case 6:K9=6;break;case 7:K9=
7;break;case 8:K9=8;break;case 9:K9=9;break;case 10:K9=10;break;default:K9=0;}return K9;
},Aeg:function(A5){var K9=A5;var Jg=0;switch(K9){case 0:Jg=0;break;case 2:Jg=2;break;
case 1:Jg=1;break;case 9:Jg=9;break;case 6:Jg=6;break;case 8:Jg=8;break;case 7:Jg=
7;break;case 5:Jg=5;break;case 10:Jg=10;break;case 4:Jg=4;break;case 3:Jg=3;break;
default:throw new Error(AIu+K9.toFixed());}return Jg;},AqT:function(){return 0;}
,HH:function(){return 10;},_Init:function(aArg){C.EnumToCodeset._Init.call(this,
aArg);this.__proto__=C.KY;},_className:"Device::WhereAboutsToCodeset"};C.AmI={_Init:
function(aArg){this.__proto__=C.AmI;A.h7++;},_Done:function(){this.__proto__=null;
A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((B=this.I)&&(B._cycle!=
D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:"Device::EmptyClass"
};C.CalfDeregistrationsTableFields={Year:0,Deregistrations:1,Deaths:2};C.CalfDeregistrations={
Deregistrations:0,Deaths:0,Year:0,EM:function(Ad,AI){var HA=C.Row.EM.call(this,Ad
,AI);if(HA&&!!AI){this.AkF(AI.CE(Ad,0));this.Awu(AI.CE(Ad,1));this.Awt(AI.CE(Ad,
2));}return HA;},Cq:function(AI){var HA=C.Row.Cq.call(this,AI);if(HA&&!!AI){var Jk=
AI.Ox();if(Jk<=0)A.ab5("%s",Xb);else{if(this.Am2())this.CL=AI.YE();AI.Hj(this.CL
,0,this.Year);AI.Hj(this.CL,1,this.Deregistrations);AI.Hj(this.CL,2,this.Deaths);
AI.Oz(Jk);}}return HA;},Gm:function(){C.Row.Gm.call(this);this.AkF(-1);},Hi:function(
){C.Row.Hi.call(this);this.AkF(0);this.Awu(0);this.Awt(0);},Awu:function(E){if(this.
Deregistrations===E)return;this.Deregistrations=E;A.abo([this,this.Bkk,this.Awu]
,0);},Awt:function(E){if(this.Deaths===E)return;this.Deaths=E;A.abo([this,this.Bki
,this.Awt],0);},AkF:function(E){if(this.Year===E)return;this.Year=E;A.abo([this,
this.ArA,this.AkF],0);},Bkk:function(){return this.Deregistrations;},Bki:function(
){return this.Deaths;},ArA:function(){return this.Year;},_Init:function(aArg){C.
Row._Init.call(this,aArg);this.__proto__=C.CalfDeregistrations;this.TableId=4;},
_className:"Device::CalfDeregistrations"};C.AuT={Undefined:0,Display:1,A_F:2,A_S:
3,A$J:4,BDI:5,BEZ:6,BFx:7,BD8:8,BCX:9,BCj:10,A6k:11,A_H:12,BFH:13,A7w:14,BFK:15};
C.DeviceComponentToString={BH:function(A5){var Bcw=A5;var Qf=A.jV;switch(Bcw){case
0:Qf=Ays;break;case 10:Qf=A.aaR(A.acf.Bgy);break;case 9:Qf=A.aaR(A.acf.Bhc);break;
case 1:Qf=A.aaR(A.acf.BhU);break;case 11:Qf=A.aaR(A.acf.A6k);break;case 5:Qf=A.aaR(
A.acf.BpU);break;case 8:Qf=A.aaR(A.acf.BhW);break;case 14:Qf=A.aaR(A.acf.A7w);break;
case 2:Qf=A.aaR(A.acf.A_F);break;case 12:Qf=A.aaR(A.acf.A_H);break;case 6:Qf=A.aaR(
A.acf.BnJ);break;case 3:Qf=A.aaR(A.acf.A_S);break;case 7:Qf=A.aaR(A.acf.BhX);break;
case 13:Qf=A.aaR(A.acf.BhD);break;case 15:Qf=A.aaR(A.acf.BpY);break;case 4:Qf=A.
aaR(A.acf.A$J);break;default:throw new Error(Ayt+Bcw.toFixed());}return Qf;},_Init:
function(aArg){C.EnumToString._Init.call(this,aArg);this.__proto__=C.DeviceComponentToString;
},_className:"Device::DeviceComponentToString"};C.AgI={AmA:function(AhY){return AhY;
},Aeg:function(A5){return A5;},AqT:function(){return 0;},HH:function(){return 4;
},_Init:function(aArg){C.EnumToCodeset._Init.call(this,aArg);this.__proto__=C.AgI;
},_className:"Device::EaseOfDeliveryToCodeset"};C.AeO={AsG:function(A5){return A.
aaL(A.ach.AP4);},AsH:function(A5){var BcI=A5;var RB=-1;switch(BcI){case 0:RB=0;break;
case 1:RB=1;break;case 2:RB=2;break;default:throw new Error(AZl+BcI.toFixed());}
return RB;},_Init:function(aArg){C.EnumToIcon._Init.call(this,aArg);this.__proto__=
C.AeO;},_className:"Device::MotherSelectionFilterModeToIcon"};C.WhereAboutsFilterCriterion={
A4:0,Abj:function(){var Av=A._NewObject(C.WhereAboutsFilterCriterion,0);Av.Fg(this
);return Av;},Fg:function(AH){C.FilterCriterion.Fg.call(this,AH);var Av=(C.WhereAboutsFilterCriterion.
isPrototypeOf(AH)?AH:null);if(!!Av)this.A4=Av.A4;},Initialize:function(A3,Eb,A7,
P_){this.EJ=A3;this.Operator=Eb;this.A4=A7;this.YH=P_;return this;},_Init:function(
aArg){C.FilterCriterion._Init.call(this,aArg);this.__proto__=C.WhereAboutsFilterCriterion;
},_className:"Device::WhereAboutsFilterCriterion"};C.BEi={ANX:0,BC4:1,APH:2,LAST:
3};C.BFo={GH:0,AVA:1,He:2,Year:3,LAST:4};C.TimespanDaysToString={BH:function(A5){
var Bf7=A5;var ABb=A.jV;switch(Bf7){case 0:ABb=A.aaR(A.acf.A5z);break;case 1:ABb=
A.aaR(A.acf.AVA);break;case 2:ABb=A.aaR(A.acf.He);break;case 3:ABb=A.aaR(A.acf.Year
);break;default:throw new Error(AZm+Bf7.toFixed());}return ABb;},_Init:function(
aArg){C.EnumToString._Init.call(this,aArg);this.__proto__=C.TimespanDaysToString;
},_className:"Device::TimespanDaysToString"};C.AhL={BEv:0,BC_:1,BDO:2,BDR:3,BDQ:
4,BC$:5,BDP:6,LAST:7};C.USBStateToString={BH:function(A5){var Bgs=A5;var Bp=A.jV;
switch(Bgs){case 0:Bp=AZn;break;case 2:Bp=AIv;break;case 1:Bp=AZo;break;case 5:Bp=
AZp;break;case 3:Bp=AZq;break;case 4:Bp=AZr;break;case 6:Bp=AZs;break;default:throw new
Error(AHO+Bgs.toFixed());}return Bp;},_Init:function(aArg){C.EnumToString._Init.
call(this,aArg);this.__proto__=C.USBStateToString;},_className:"Device::USBStateToString"
};C.ACk={BDM:0,BCv:1,BDN:2,BDK:3};C.Axx={ACe:A.jV,Timestamp:0,AD3:0,AD9:0,AGj:0,
OnSetTimestamp:function(E){if(this.Timestamp===E)return;this.Timestamp=E;},AFh:function(
E){if(this.AD3===E)return;this.AD3=E;},AFn:function(E){if(this.AD9===E)return;this.
AD9=E;},AFw:function(E){if(this.AGj===E)return;this.AGj=E;},AEX:function(E){if(this.
ACe===E)return;this.ACe=E;},_Init:function(aArg){this.__proto__=C.Axx;A.h7++;},_Done:
function(){this.__proto__=null;A.h7--;},_ReInit:function(){},_Mark:function(D){var
B;if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:
null,_className:"Device::SoftwareVersionInformation"};C.Avn={Timestamp:0,ARu:0,ARv:
0,AVd:0,AVe:0,AVc:0,ARt:0,OnSetTimestamp:function(E){if(this.Timestamp===E)return;
this.Timestamp=E;},AFe:function(E){if(this.ARu===E)return;this.ARu=E;},AFf:function(
E){if(this.ARv===E)return;this.ARv=E;},AFL:function(E){if(this.AVd===E)return;this.
AVd=E;},AFM:function(E){if(this.AVe===E)return;this.AVe=E;},AFK:function(E){if(this.
AVc===E)return;this.AVc=E;},AFd:function(E){if(this.ARt===E)return;this.ARt=E;},
_Init:function(aArg){this.__proto__=C.Avn;A.h7++;},_Done:function(){this.__proto__=
null;A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((B=this.I)&&(B._cycle
!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:"Device::HardwareVersionInformation"
};C.Aqr={Undefined:0,BDz:1,BCJ:2};C.Agq={Manual:0,TransponderId:1,LAST:2};C.AnimalIdAutoGenerationMethodToString={
BH:function(A5){var Bb4=A5;var A03=A.jV;switch(Bb4){case 0:A03=A.aaR(A.acf.A5p);
break;case 1:A03=A.aaR(A.acf.A5F);break;default:throw new Error(AZt+Bb4.toFixed(
));}return A03;},_Init:function(aArg){C.EnumToString._Init.call(this,aArg);this.
__proto__=C.AnimalIdAutoGenerationMethodToString;},_className:"Device::AnimalIdAutoGenerationMethodToString"
};C.He={A4_:0,ADS:1,ACC:2,AD4:3,ABD:4,AD7:5,ADU:6,ADT:7,ABK:8,AGs:9,AEh:10,AEf:11
,ACn:12,LAST:13};C.MonthToString={BH:function(A5){var BdK=A5;var Xz=A.jV;switch(
BdK){case 1:Xz=A.aaR(A.act.ADS);break;case 2:Xz=A.aaR(A.act.ACC);break;case 3:Xz=
A.aaR(A.act.AD4);break;case 4:Xz=A.aaR(A.act.ABD);break;case 5:Xz=A.aaR(A.act.AD7
);break;case 6:Xz=A.aaR(A.act.ADU);break;case 7:Xz=A.aaR(A.act.ADT);break;case 8:
Xz=A.aaR(A.act.ABK);break;case 9:Xz=A.aaR(A.act.AGs);break;case 10:Xz=A.aaR(A.act.
AEh);break;case 11:Xz=A.aaR(A.act.AEf);break;case 12:Xz=A.aaR(A.act.ACn);break;default:
throw new Error(AZu+BdK.toFixed());}return Xz;},_Init:function(aArg){C.EnumToString.
_Init.call(this,aArg);this.__proto__=C.MonthToString;},_className:"Device::MonthToString"
};C.AjD={FileName:A.jV,AGl:0,ACk:0,AnX:false,_Init:function(aArg){this.__proto__=
C.AjD;A.h7++;},_Done:function(){this.__proto__=null;A.h7--;},_ReInit:function(){
},_Mark:function(D){var B;if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null
,_cycle:0,_observers:null,_className:"Device::DataExportContext"};C.AVH={Init:function(
aArg){var B;A.zX([this,this.Be0],[B=A._GetAutoObject(C.Device),B.A86,B.Ba8],0);this.
Be0(this);},Cq:function(){A._GetAutoObject(C.Device).Ar_(this.toString());},Be0:
function(G){this.EM(A._GetAutoObject(C.Device).AG$);A.we(this,0);},_Init:function(
aArg){C.Int32ArrayWrapper._Init.call(this,aArg);this.__proto__=C.AVH;this.Zy(3);
this.Init(aArg);},_className:"Device::WeightGainsLowClass"};C.AVG={Init:function(
aArg){var B;A.zX([this,this.BeY],[B=A._GetAutoObject(C.Device),B.A85,B.Ba7],0);this.
BeY(this);},Cq:function(){A._GetAutoObject(C.Device).Ar9(this.toString());},BeY:
function(G){this.EM(A._GetAutoObject(C.Device).AG_);A.we(this,0);},_Init:function(
aArg){C.Int32ArrayWrapper._Init.call(this,aArg);this.__proto__=C.AVG;this.Zy(3);
this.Init(aArg);},_className:"Device::WeightGainsHighClass"};C.AVJ={Init:function(
aArg){var B;A.zX([this,this.Be2],[B=A._GetAutoObject(C.Device),B.A89,B.Ba$],0);this.
Be2(this);},Cq:function(){A._GetAutoObject(C.Device).Ar$(this.toString());},Be2:
function(G){this.EM(A._GetAutoObject(C.Device).AHc);A.we(this,0);},_Init:function(
aArg){C.Int32ArrayWrapper._Init.call(this,aArg);this.__proto__=C.AVJ;this.Zy(3);
this.Init(aArg);},_className:"Device::WeightValuesBirthClass"};C.AVF={Init:function(
aArg){var B;A.zX([this,this.BeW],[B=A._GetAutoObject(C.Device),B.A84,B.Ba6],0);this.
BeW(this);},Cq:function(){A._GetAutoObject(C.Device).Ar8(this.toString());},BeW:
function(G){this.EM(A._GetAutoObject(C.Device).AG9);A.we(this,0);},_Init:function(
aArg){C.Int32ArrayWrapper._Init.call(this,aArg);this.__proto__=C.AVF;this.Zy(3);
this.Init(aArg);},_className:"Device::WeightGainsAverageClass"};C.AMD={Init:function(
aArg){var B;A.zX([this,this.Bef],[B=A._GetAutoObject(C.Device),B.A8a,B.BaH],0);this.
Bef(this);},Bef:function(G){this.EM(A._GetAutoObject(C.Device).ABC);A.we(this,0);
},_Init:function(aArg){C.Int32ArrayWrapper._Init.call(this,aArg);this.__proto__=
C.AMD;this.Zy(3);this.Init(aArg);},_className:"Device::AnimalTypesWeightGainsClass"
};C.BEl={BEo:0,BEc:1,BC3:2,BFI:3,Unknown:4};C.BCH={None:0,BEw:1,BEq:2,BEm:3,BEn:
4};C.BFC={A7L:0,Manual:1,TransponderId:2,NaisId:3,LAST:4};C.TransponderLinkageIdChangeMethodToString={
BH:function(A5){var Bf$=A5;var ABd=A.jV;switch(Bf$){case 0:ABd=A.aaR(A.acf.A7L);
break;case 1:ABd=A.aaR(A.acf.A5p);break;case 2:ABd=A.aaR(A.acf.A5F);break;case 3:
ABd=A.aaR(A.acf.BhB);break;default:throw new Error(AZv+Bf$.toFixed());}return ABd;
},_Init:function(aArg){C.EnumToString._Init.call(this,aArg);this.__proto__=C.TransponderLinkageIdChangeMethodToString;
},_className:"Device::TransponderLinkageIdChangeMethodToString"};C.A_x={BAP:function(
AoJ){var J$=A.ab0(A.abV(AoJ,15),0,10);var J3=A._GetAutoObject(C.Converter).ZZ(J$
);if(!!J3){if(J3===10){if((AoJ.length!==16)||!A._GetAutoObject(A.acj.VA).AVr(AoJ
))return 0;else return J$;}else return J$;}else{J3=A._GetAutoObject(C.Converter).
ZZ(A._GetAutoObject(C.Device).Ut);if(!!J3&&(J3===10)){if(!A._GetAutoObject(A.acj.
VA).AVr(AoJ))return 0;if(AoJ.length===12){var AJl=A.ab0(A.abV(AoJ,10),0,10);var AKa=
A._GetAutoObject(C.Converter).Bpu(AJl);if((AJl>0)&&!!AKa)return(A._GetAutoObject(
C.Converter).Aqy(J3)*1000000000000)+A.ab0(A.abV(AoJ,10),0,10);}}}return 0;},Be_:
function(J4){if((J4.length!==10)||!A._GetAutoObject(A.acj.VA).AVr(J4))return 0;var
AAG=A._NewObject(A.Core.Bs,0);var A3G=false;var A3L=A.abW(J4,4,4);var AtM=A.wz(A3L
,0,10);if((AtM<2000)||(AtM>2100)){A3L=A.abV(J4,4);AtM=A.wz(A3L,0,10);A3G=true;}if((
AtM<2000)||(AtM>2100))return 0;AAG.Year=AtM;var AKX;var AzP;if(A3G){AKX=A.abW(J4
,4,2);AzP=A.wz(AKX,0,10);}else{AKX=A.abW(J4,2,2);AzP=A.wz(AKX,0,10);}if((AzP<1)||(
AzP>12))return 0;AAG.Um(AzP);var AKW;var AzO;if(A3G){AKW=A.abW(J4,6,2);AzO=A.wz(
AKW,0,10);}else{AKW=A.abV(J4,2);AzO=A.wz(AKW,0,10);}if((AzO<1)||(AzO>AAG.Zo()))return 0;
AAG.Lp(AzO);return AAG.JN();},_Init:function(aArg){this.__proto__=C.A_x;A.h7++;}
,_Done:function(){this.__proto__=null;A.h7--;},_ReInit:function(){},_Mark:function(
D){var B;if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:
null,_className:"Device::ParserClass"};C.AnI={_Init:function(){C.A_x._Init.call(
this,0);},_ReInit:function(){},_variants:function(){return this;},_this:null};C.
AnimalTableFieldsToString={BH:function(A5){var Aap=A5;var MM=A.jV;switch(Aap){case
14:MM=A.aaR(A.acf.Afn);break;case 32:MM=A.aaR(A.acf.Breed);break;case 4:MM=A.aaR(
A.acf.Aeb);break;case 28:MM=A.aaR(A.acf.A5d);break;case 33:MM=A.aaR(A.acf.AgA);break;
case 23:MM=A.aaR(A.acf.KI);break;case 7:MM=A.aaR(A.acf.Afi);break;case 2:MM=A.aaR(
A.acf.P);break;case 0:MM=A.aaR(A.acf.GJ);break;case 8:MM=A.aaR(A.acf.Alarm);break;
case 9:MM=A.aaR(A.acf.AB9);break;case 38:MM=A.aaR(A.acf.BhV);break;case 11:MM=A.
aaR(A.acf.Fever);break;case 29:MM=A.aaR(A.acf.ARi);break;case 18:MM=A.aaR(A.acf.
M2);break;case 26:MM=A.aaR(A.acf.Ud);break;case 22:MM=A.aaR(A.acf.Transponder);break;
case 1:MM=A.aaR(A.acf.GF);break;case 34:MM=A.aaR(A.acf.Jd);break;case 6:case 25:
case 27:case 10:case 37:case 12:case 17:case 5:case 3:case 35:case 36:case 15:case
16:case 24:case 31:case 20:case 30:case 21:case 19:case 13:MM=A.jV;break;default:
throw new Error(AIw+A5.toFixed());}return MM;},_Init:function(aArg){C.EnumToString.
_Init.call(this,aArg);this.__proto__=C.AnimalTableFieldsToString;},_className:"Device::AnimalTableFieldsToString"
};C.VM={BDL:0,BDJ:1,LAST:2};C.DataExportDestinationToString={BH:function(A5){var
Byq=A5;var A1s=A.jV;switch(Byq){case 0:A1s=A.acf.BiR;break;case 1:A1s=A.acf.Bhv;
break;default:throw new Error(AZw+A5.toFixed());}return A1s;},_Init:function(aArg
){C.EnumToString._Init.call(this,aArg);this.__proto__=C.DataExportDestinationToString;
},_className:"Device::DataExportDestinationToString"};C.AD1={Bj:0,BFh:1,LAST:2};
C.ListViewScopeToString={BH:function(A5){var Bzz=A5;var A2o=A.jV;switch(Bzz){case
0:A2o=A.aaR(A.acf.Bj);break;case 1:A2o=A.aaR(A.acf.Box);break;default:throw new Error(
AZx+A5.toFixed());}return A2o;},_Init:function(aArg){C.EnumToString._Init.call(this
,aArg);this.__proto__=C.ListViewScopeToString;},_className:"Device::ListViewScopeToString"
};C.AHb={BF_:0,BF9:1,BF8:2,LAST:3};C.WeightValuePrecisionToString={BH:function(A5
){var BCf=A5;var ALy=A.jV;switch(BCf){case 0:ALy=AZy+A.aaR(A.acf.Az2);break;case
1:ALy=AZz+A.acf.AiA;break;case 2:ALy=AZA+A.acf.AiA;break;default:throw new Error(
AZB+A5.toFixed());}return ALy;},_Init:function(aArg){C.EnumToString._Init.call(this
,aArg);this.__proto__=C.WeightValuePrecisionToString;},_className:"Device::WeightValuePrecisionToString"
};C.Agv={BH:function(A5){var AK5=A5;if(AK5===1)return A.aaR(A.acf.BiT);else return C.
AnimalTypeToString.BH.call(this,A5);},_Init:function(aArg){C.AnimalTypeToString.
_Init.call(this,aArg);this.__proto__=C.Agv;},_className:"Device::AnimalTypeToStringHeifer"
};C.Y6={RK:0,BEs:1,LAST:2};C.MassDeregistrationCriterionToString={BH:function(A5
){var BzC=A5;var A2t=A.jV;switch(BzC){case 0:A2t=A.aaR(A.acf.BjX);break;case 1:A2t=
A.aaR(A.acf.AR3);break;default:throw new Error(AHq+A5.toFixed());}return A2t;},_Init:
function(aArg){C.EnumToString._Init.call(this,aArg);this.__proto__=C.MassDeregistrationCriterionToString;
},_className:"Device::MassDeregistrationCriterionToString"};C.UInt64PartialFilterCriterion={
A4:A.jV,Zm:0,OA:0,Abj:function(){var Av=A._NewObject(C.UInt64PartialFilterCriterion
,0);Av.Fg(this);return Av;},Fg:function(AH){C.FilterCriterion.Fg.call(this,AH);var
Av=(C.UInt64PartialFilterCriterion.isPrototypeOf(AH)?AH:null);if(!!Av){this.A4=Av.
A4;this.Zm=Av.Zm;this.OA=Av.OA;}},Initialize:function(A3,Eb,A7,Atn,AI2,P_){this.
EJ=A3;this.Operator=Eb;this.A4=A7;this.YH=P_;this.Zm=Atn;this.OA=AI2;return this;
},_Init:function(aArg){C.FilterCriterion._Init.call(this,aArg);this.__proto__=C.
UInt64PartialFilterCriterion;},_className:"Device::UInt64PartialFilterCriterion"
};
C._Init=function(){C.Int32FilterCriterion.__proto__=C.FilterCriterion;C.StringFilterCriterion.
__proto__=C.FilterCriterion;C.Table.__proto__=C.ITable;C.Animal.__proto__=C.Row;
C.Rating.__proto__=C.Row;C.HelperClass.__proto__=C.AmI;C.BoolFilterCriterion.__proto__=
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
C.AU4.__proto__=C.Int32ArrayWrapper;C.AU3.__proto__=C.Int32ArrayWrapper;C.AMC.__proto__=
C.Int32ArrayWrapper;C.UInt64FilterCriterion.__proto__=C.FilterCriterion;C.BooleanToAssignedUnassignedString.
__proto__=C.EnumToString;C.CountryToString.__proto__=C.EnumToString;C.EaseOfDeliveryToString.
__proto__=C.EnumToString;C.WhereAboutsToString.__proto__=C.EnumToString;C.BreedToString.
__proto__=C.EnumToString;C.AnimalIdGenerationMethodToString.__proto__=C.EnumToString;
C.DirectionOfCountingToString.__proto__=C.EnumToString;C.Aed.__proto__=C.EnumToIcon;
C.AdU.__proto__=C.EnumToIcon;C.GermanStateToString.__proto__=C.EnumToString;C.EartagNrAssignmentModeToString.
__proto__=C.EnumToString;C.M0.__proto__=C.EnumToCodeset;C.ReasonOfLeavingToString.
__proto__=C.EnumToString;C.Ahs.__proto__=C.EnumToCodeset;C.KY.__proto__=C.EnumToCodeset;
C.CalfDeregistrations.__proto__=C.Row;C.DeviceComponentToString.__proto__=C.EnumToString;
C.AgI.__proto__=C.EnumToCodeset;C.AeO.__proto__=C.EnumToIcon;C.WhereAboutsFilterCriterion.
__proto__=C.FilterCriterion;C.TimespanDaysToString.__proto__=C.EnumToString;C.USBStateToString.
__proto__=C.EnumToString;C.AnimalIdAutoGenerationMethodToString.__proto__=C.EnumToString;
C.MonthToString.__proto__=C.EnumToString;C.AVH.__proto__=C.Int32ArrayWrapper;C.AVG.
__proto__=C.Int32ArrayWrapper;C.AVJ.__proto__=C.Int32ArrayWrapper;C.AVF.__proto__=
C.Int32ArrayWrapper;C.AMD.__proto__=C.Int32ArrayWrapper;C.TransponderLinkageIdChangeMethodToString.
__proto__=C.EnumToString;C.AnimalTableFieldsToString.__proto__=C.EnumToString;C.
DataExportDestinationToString.__proto__=C.EnumToString;C.ListViewScopeToString.__proto__=
C.EnumToString;C.WeightValuePrecisionToString.__proto__=C.EnumToString;C.Agv.__proto__=
C.AnimalTypeToString;C.MassDeregistrationCriterionToString.__proto__=C.EnumToString;
C.UInt64PartialFilterCriterion.__proto__=C.FilterCriterion;};C._ReInit=function(
){var B;if((B=C.Device._this))B._ReInit(),C.Device._ReInit.call(B);if((B=C.Converter.
_this))B._ReInit(),C.Converter._ReInit.call(B);if((B=C.Helper._this))B._ReInit()
,C.Helper._ReInit.call(B);if((B=C.AnI._this))B._ReInit(),C.AnI._ReInit.call(B);};
C.DH=function(D){var B;if((B=C.Device._this)&&(B._cycle!=D))B._Done(C.Device._this=
null);if((B=C.Converter._this)&&(B._cycle!=D))B._Done(C.Converter._this=null);if((
B=C.Helper._this)&&(B._cycle!=D))B._Done(C.Helper._this=null);if((B=C.AnI._this)&&(
B._cycle!=D))B._Done(C.AnI._this=null);};return C;})();

/* VitalControl demonstration application, © Urban GmbH & Co.KG 2023 */