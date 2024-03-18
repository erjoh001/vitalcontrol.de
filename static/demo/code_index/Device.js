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
var O1="ERROR: UpdateDataTable called for Undefined data table.";var P2="ERROR: UpdateDataTable called for unknown data table id=";
var P3="ERROR: SyncState is read only.";var CQ="ERROR: ScanTransponder is read only.";
var Fb="ERROR: Body weight value is read only";var Lt="ERROR: Predicted temperature value is read only";
var P4="ERROR: TransferProgress is read only";var JY="ERROR: TransferTarget is read only";
var N_="ERROR: unhandled assessment.";var P5="Unhandled enum BodyTemperature: ";
var ME="AU";var S5="AT";var UP="BE";var Z4="BA";var W2="BG";var Iq="CA";var UQ="CN";
var Z5="TW";var W3="HR";var Z6="CY";var W4="CZ";var Z7="DK";var Z8="EE";var UR="FI";
var W5="FR";var P6="DE";var Z9="GR";var O2="HU";var Ri="IE";var W6="IT";var W7="JP";
var W8="LV";var W9="LT";var Z_="LU";var W_="MT";var W$="NL";var S6="NO";var US="PL";
var UT="PT";var AcM="RO";var S7="RU";var Z$="SK";var Afw="SI";var Aaa="ES";var Xa=
"SE";var Aab="CH";var Aac="TR";var AhP="UA";var JZ="UK";var Aad="US";var Lu=".";
var AhQ="-";var Aoc="ERROR: Unhandled mass unit: ";var N$=" ";var Xb="Unhandled gender";
var Aod="Unhandled animal type";var AhR="Unhandled Device::MassUnit.";var AhS="Unhandled Device::AnimalListContent.";
var Rj="Avid";var UU="Ordicam / IER SA";var Aoe="Agrident";var Aof="Datamars";var
Aog="Allflex";var Aoh="Texas Instruments";var Afx="Nedap";var Ala="Digital Angel";
var Aoi="null";var AxX="[ ";var O3=", ";var Rk=" ]";var AxY="Unhandled language";
var UV="Unhandled Device::AnimalListAction.";var AsU="Temperature unit conversion not supported: ";
var AxZ="->";var Ax0="=";var Ax1=">";var Aoj="<";var Afy="!=";var Aok="WARNING: Unhandled operator.";
var IR="Unknown birth type";var Aol="Unhandled country: ";var Xc="ERROR: Cannot start transaction";
var Aom="ERROR: Table is null, cannot load row (";var AsV=")";var AsW="Table Id mismatch!";
var AsX="ERROR: Row index (";var Aon=") out of bounds [0,";var Aoo="]";var AsY="ERROR: Table is full. Item limit: ";
var Ax2="Device::ScanTransponder not set";var Ax3="Unhandled TransponderType.";var
Ax4="Unhandled ScanState.";var AsZ="Could not load animal with transponder";var Ax5=
"Birth type";var P7="Time calving";var Ax6="Pend. reg. notice";var AVQ="Perished";
var AVR="Rating temp.";var AVS="Location";var AVT=" mother";var AHh="Reason leaving";
var AHi="Time alarm";var Afz="Time first weighing";var Aop="Time control";var AVU=
"Time temp.";var AHj="Time watch";var Alb="Time weighing";var AHk="Assessment";var
AHl="Time rating";var AVV="ERROR: Unhandled AnimalTable filter field:";var AHm="Field ";
var AVW="ERROR: Unhandled RatingTable filter field:";var AVX="ERROR: Unhandled table ";
var AcN=" filter fields.";var AVY=" [";var AVZ="WARNING: Unhandled filter criterion type.";
var AHn="0";var As0="No table specified";var AHo="Invalid animal id generation method: ";
var AHp="Unhandled AnimalIdGenerationMethod: ";var Ax7="Invalid gender: ";var AHq=
"Invalid ear tag number assignment mode: ";var Ax8=";";var AV0="Invalid animal creation error code: ";
var AV1="Invalid EartagNrAssignmentMode: ";var AV2="Unsupported exponent: ";var AV3=
"Unknown whereabouts type: ";var AHr="Unhandled Gender: ";var AV4="Unhandled AnimalIdAutoGenerationMethod: ";
var O4="\n";var Ax9="\n\n";var AV5="Bootloader:\nV\xA0";var AV6="Middleware:\nV\xA0";
var AV7="GUI:\nV\xA0";var AV8="Mainboard: ";var AV9="Torchboard: ";var AV_="Operator not supported.";
var AHs="Unhandled Device::TransponderAssignmentIdChangeMethod: ";var AHt="Unhandled mass deregistration criterion: ";
var Aoq="Unhandled enum value ";var Ax_="UNDEFINED";var AV$="Boot";var AWa="Charge";
var AWb="ChargeWarning";var AHu="ControlledPowerOff";var AWc="DeviceMain";var AHv=
"DeviceService";var AHw="DeviceInfo";var AHx="DeviceDataManagement";var AWd="DeviceAnimalDataMenu";
var AHy="DeviceDeviceDataMenu";var AWe="DeviceCheck";var AHz="Home";var Rl="Settings";
var Xd="DateTimeSettings";var AWf="UnitsSettings";var AWg="DataAcquisitionSettings";
var AWh="RegistrationAutomaticSettings";var AWi="RegistrationPresettingsSettings";
var AWj="TransponderAssignmentSettings";var AWk="TransponderUnlinkSettings";var AWl=
"TemperatureSettings";var AhT="WeightGainSettings";var AHA="DeviceSettings";var AWm=
"RegistrationSettings";var AWn="InitializationSettings";var AHB="PremisesSettings";
var AHC="Sleep";var Ax$="Sync";var P8="EditAnimalData";var AWo="EditAnimalDataNaisId";
var AWp="AnimalList";var AWq="AnimalListFilter";var As1="AlarmListFilter";var AWr=
"WatchListFilter";var AWs="AnimalActionActions";var AWt="AnimalActionTemperature";
var AWu="TemperatureMeasurement";var AWv="AnimalActionWeighing";var AWw="AnimalActionRate";
var As2="AnimalActionUnregister";var AWx="AnimalActionPerished";var AWy="AnimalActionNewBornCare";
var AWz="AlarmList";var AWA="ControlMeasure";var AWB="ControlList";var AWC="RangeTest";
var AWD="ListsMain";var AWE="ListsIdManagement";var AWF="WatchList";var AWG="EvaluationMenuMain";
var AHD="EvaluationMenuWeights";var Alc="EvaluationLosses";var AWH="EvaluationRatings";
var AWI="EvaluationTemperatures";var AWJ="EvaluationWeights";var Aya="EvaluationWeightsRecent";
var Ald="EvaluationBirthWeights";var AhU="AnimalEvaluationFilter";var Ayb="NewMenu";
var Aor="NewAnimals";var AhV="NewAnimalManualData";var AWK="MassRecording";var Ayc=
"NewAnimalTransponderData";var AHE="NewAnimalLoss";var AfA="AutoActionScanScreen";
var AHF="ManualActionScanScreen";var Aae="SetTransponderScreen";var Ale="SetSaveTransponderScreen";
var Aos="NewAnimalSetTransponderScreen";var AWL="NewAnimalsSetTransponderScreen";
var AWM="NewAnimalCalvingDataScreen";var AWN="WeightListScreen";var AWO="AnimalSingleInfoScreen";
var AWP="AnimalMultiInfoScreen";var As3="AnimalRegistrationDetails";var AHG="FreshCowListScreen";
var AHH="FreshCowListFilterScreen";var AWQ="DryCowListScreen";var AWR="DryCowListFilterScreen";
var AWS="NoTransponderListScreen";var AWT="NoTransponderListFilterScreen";var AWU=
"YoungNoTransponderListScreen";var AWV="YoungNoTransponderListFilterScreen";var AWW=
"NoNaisIdListScreen";var AWX="NoNaisIdListFilterScreen";var AWY="RegistrationsListScreen";
var AWZ="RegistrationsListFilterScreen";var AW0="ActionListScreen";var Ayd="ActionListFilterScreen";
var AHI="UpdateScreen";var AHJ="MotherScanScreen";var AHK="SetSaveNaisIdScreen";
var AHL="PurchasedAnimalsList";var AHM="TextInput";var AHN="AnimalActions";var AW1=
"Unhandled display mode: ";var AW2="None";var AW3="Actions Settings";var AW4="Auto Action";
var AW5="Menu Item Settings";var AW6="Rating Type";var AW7="Weighing settings";var
Aye="Options";var AHO="AnimalSearch";var AW8="AnimalSearchUnfiltered";var AHP="AnimalSearchDriedOff";
var AhW="MeasurementReady";var UW="AnimalMultiInfoMenu";var AW9="MassRecordingDefaults";
var Aaf="MassRecordingFields";var AW_="MassRecordingMenu";var AW$="PurchasedAnimalsListMenu";
var Alf="BirthRegistrationsListMenu";var AfB="Unhandled overlay menu: ";var AcO=
"Error";var Aot="Idle";var AXa="IdScanned";var O5="NotFound";var AHQ="Progress";
var AHR="Unhandled scan state: ";var AXb="Prediction";var AHS="Ready";var AHT="Unhandled measure state: ";
var AHU="Unhandled temperature unit: ";var AXc="Unhandled species: ";var AXd="English";
var AXe="Nederlands";var AXf="Deutsch";var AXg="Eesti";var AXh="Suomalainen";var
AXi="Fran\xE7ais";var AXj="\u0395\u03BB\u03BB\u03B7\u03BD\u03B9\u03BA\u03AC";var
AHV="\u0411\u044A\u043B\u0433\u0430\u0440\u0441\u043A\u0438";var AXk="Italiano";
var AHW="\u0420\u0443\u0441\u0441\u043A\u0438\u0439";var AHX="Espa\xF1ol";var Ayf=
"T\xFCrk\xE7e";var AXl="\u6B63\u9AD4\u5B57/\u7E41\u9AD4\u5B57";var AXm="\u010Ce\u0161tina";
var AXn="Bosanski";var AXo="Norsk";var AXp="\u0423\u043A\u0440\u0430\u0457\u043D\u0441\u044C\u043A\u0438\u0439";
var AHY="Unhandled language: ";var AXq="EN";var AXr="ET";var As4="EL";var As5="ZH";
var AHZ="CS";var AXs="BS";var AXt="Unhandled gender: ";var AXu="Unhandled birth type: ";
var AXv="Exporting";var AXw="ImportFinish";var AXx="ImportStart";var AXy="Importing";
var AXz="Init";var AXA="Unhandled sync state: ";var AH0="Unhandled rating attribute: ";
var AXB="Unhandled assessment: ";var Ayg="Illegal boolean value: ";var AH1="Unhandled popup ID:";
var AXC="Unknown";var AXD="Severe Error";var AXE="ErrorsDeviceDriverCheck";var AXF=
"Enter Sleep";var AXG="About";var AH2="InfoSoftwareVersions";var AH3="InfoHardwareVersions";
var AH4="InfoSerial";var AH5="ShutDown";var Ayh="SuccessDataSync";var Ayi="SuccessResetFactory";
var AH6="SuccessResetAnimalData";var AXH="SuccessCreateBackup";var AH7="SuccessRestoreBackup";
var AXI="CreateBackupInProgress";var AH8="RestoreBackupInProgress";var AXJ="FailedCreateBackup";
var AXK="FailedRestoreBackup";var AXL="TechnicalDetails";var AXM="WarningDataSync";
var AXN="WarningFactory";var AXO="WarningResetAnimalData";var AXP="WarningRestart";
var AXQ="WarningAutoAction";var AXR="WarningAutoActionNotApplicable";var AXS="WarningNoMenuItem";
var AXT="WarningEnterDemoMode";var AXU="NoAnimalsRegistered";var Ayj="MaxNumAnimalsReached";
var AXV="MaxNumRatingsReached";var AXW="MaxNumCalfDeregistrationsReached";var Ayk=
"MissingTransponder";var As6="EarTagNumberTooShort";var UX="NoValidCountryCode";
var As7="WarningOutdatedAnimalWeight";var AXX="WarningOutdatedAnimalWeights";var
AXY="WarningWeightEvaluationSingular";var AXZ="WarningWeightEvaluationPlural";var
AH9="ScanError";var AX0="ScanNotFound";var AH_="ScannedAnimalNotFound";var AX1="ScannedTransponderNotFound";
var AX2="AnimalNotFound";var AX3="SuccessUnregister";var As8="SuccessUnregisterPerished";
var AX4="SuccessCreationNewAnimal";var AX5="SuccessCreationNewAnimals";var AH$="AnimalCreationInProgress";
var AX6="EvaluationInProgress";var AX7="DataSyncInProgress";var AX8="AddedToAlarm";
var AX9="RemovedFromAlarm";var AcP="AddedToWatch";var AX_="RemovedFromWatch";var
AX$="AddedToDryOff";var AYa="RemovedFromDryOff";var AYb="AnimalIdAlreadyExists";
var AIa="AnimalIdAlreadyExistsContinuable";var AYc="MissingAnimalId";var AYd="MissingAnimalIdMother";
var AYe="MissingEartagNumber";var AYf="MissingTransponderId";var AYg="TransponderAlreadyRegistered";
var AYh="TransponderAlreadyRegisteredContinuable";var AIb="TransponderAlreadyRegisteredCapturable";
var AYi="HelpAnimalInfoRating";var AYj="WarningReassignTransponder";var AYk="CannotReassignNaisId";
var AIc="WarningResetToDefaultValue";var AId="WarningResetThresholds";var AYl="WarningResetTempThresholds";
var AYm="UpdateFirmware";var AYn="UpdateFirmwareBatteryLow";var AYo="ConfirmFirmwareUpdated";
var Rm="ConfirmBootloaderUpdated";var As9="QuestionAddAnotherCalfMultiples";var AIe=
"RemovedAllBirthNoticesPending";var AIf="RemovedAllPurchasedNoticePending";var Aou=
"RemovedFromBirthNoticePending";var Aov="RemovedFromPurchasedNoticePending";var Ayl=
"SuccessClearAnimalLoss";var AYp="RemovedAnimalBirth";var AIg="RemovedAnimalPurchased";
var AYq="WarningNoActionsForAnimalLoss";var AYr="SuccessLinkTransponder";var AYs=
"SuccessChangeTransponder";var AYt="SuccessUnlinkTransponder";var AYu="SuccessLinkNaisId";
var AYv="WarningDataExportHitBirthFailed";var AYw="SuccessDataExportHitBirth";var
AYx="SuccessDataExportHitBirthDownload";var AYy="WarningDataExportHitPurchasedFailed";
var AYz="SuccessDataExportHitPurchased";var AYA="SuccessDataExportHitPurchasedDownload";
var AYB="WarningDataExportAnimalsFailed";var AYC="SuccessDataExportAnimalsRatings";
var AYD="SuccessDataExportAnimalsDownload";var AYE="WarningNoPremisesID";var AYF=
"WarningNoFlashDrivePresent";var AYG="WarningNoBackupPathPresent";var Aow="WarningNoBackupFilePresent";
var AIh="DemoFunctionNotAvailable";var AYH="WarningImpreciseTimeSetting";var AIi=
"ConfirmationRestoreBackup";var AIj="ConfirmationMassDeregistration";var Aag="SuccessMassDeregistration";
var AIk="WarningParsedDateInFutureInvalid";var AYI="WarningParsingDateFailed";var
AIl="WarningParsingNaisIdFailed";var AYJ="WarningParsingShortNaisIdWithoutPremisesId";
var Aym="AnimalId";var AYK="FarmId";var AYL="GroupId";var Ayn="PersonId";var AYM=
"Unhandled transponder type: ";var AYN="FDX";var AYO="HDX";var AIm="HDX (Urban)";
var Aox="Unhandled transponder protocol: ";var AIn="Illegal RatingMode: ";var AYP=
"Unhandled mass unit: ";var AIo="Max array size is 10";var Ayo="Index out of bounds";
var Alg="ERROR: Received more integers than expected!";var AIp="Unhandled double scan action :";
var Aoy="Illegal WeightRecordingMode: ";var AYQ="Illegal WeightRecordingScope: ";
var AIq="AnimalDataGenderType";var AIr="AnimalDataShortNaisId";var AYR="Rating";
var AYS="Temperature";var AIs="Weight";var AYT="Alarm infos";var AYU="Control infos";
var AYV="Watch infos";var AYW="Fresh cow infos";var AYX="No transponder infos";var
AYY="Dry cow info";var AYZ="No nais id infos";var AY0="Birth registrations infos";
var AY1="Purchased registrations infos";var AY2="Young no transponder infos";var
AY3="Unhandled animal list content:";var AY4="Illegal AutoRegistrationMode: ";var
AY5="Illegal FactoryResetScope: ";var Aoz="??";var AIt="Illegal EaseOfDelivery: ";
var Aah="Illegal Whereabouts: ";var AY6="Illegal breed: ";var Ayp="Unisex";var AY7=
"Illegal animalIdGenerationMethod: ";var AY8="Ascending";var AY9="Descending";var
AY_="Illegal directionOfCountingName: ";var AIu="Unhandled direction of counting: ";
var As_="Unhandled German state: ";var As$="SH";var Ata="HH";var Atb="NI";var Atc=
"HB";var Ayq="NW";var AoA="HE";var AY$="RP";var AZa="BW";var AZb="BY";var AZc="SL";
var AZd="BB";var AZe="MV";var AZf="SN";var AZg="ST";var AZh="TH";var AZi="One Range Male Female";
var AZj="Two Ranges Male Female";var AIv="Illegal EartagAssignmentMode: ";var AZk=
"Unhandled code set value ";var AIw="Implement in derived class";var AZl="Illegal HIT-Code: ";
var Ayr="Illegal ReasonOfLeaving: ";var AIx="Illegal code: ";var Ays="Undefined";
var Ayt="Illegal DeviceComponent: ";var AZm="Unhandled Device::MotherSelectionFilterMode: ";
var AZn="Illegal Device::TimespanDays: ";var AZo="Not connected";var AIy="Host";
var AZp="Device";var AZq="Device CDC";var AZr="Host MSC";var AZs="Host HID";var AZt=
"Host CDC";var AZu="Illegal animalIdAutoGenerationMethod: ";var AZv="Unhandled month: ";
var AZw="Illegal transponderAssignmentIdChangeMethod: ";var AIz="Unhandled animal table field: ";
var AZx="Unhandled data export destination: ";var AZy="Unhandled list view scope: ";
var AZz="1 ";var AZA="100 ";var AZB="10 ";var AZC="Unhandled weight value precision: ";
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
B_:null,B$:null,CW:function(AH){if(!AH)return;var Av=this.B_;while(!!Av){if(Av===
AH)throw new Error(Cd);Av=Av.Ah;}AH.AJ=this.B$;if(!!this.B$)this.B$.Ah=AH;this.B$=
AH;if(!this.B_)this.B_=AH;},AOK:function(){return this.B_;},AOP:function(Bbq){if(
!!Bbq)return Bbq.Ah;return null;},DL:function(AI7,Eb){var Av=this.B_;while(!!Av){
if(Av.EK===AI7){if(Eb===1)return Av;else if(Av.Operator===Eb)return Av;}Av=Av.Ah;
}return null;},Nh:function(AH){var Av=this.B_;while(!!Av){if(Av===AH){if(!!Av.AJ
)Av.AJ.Ah=Av.Ah;if(!!Av.Ah)Av.Ah.AJ=Av.AJ;if(this.B_===Av)this.B_=Av.Ah;if(this.
B$===Av)this.B$=Av.AJ;Av.Ah=null;Av.AJ=null;return;}Av=Av.Ah;}},E8:function(){var
Be=A._NewObject(C.Filter,0);var Av=this.B_;while(!!Av){Be.CW(Av.Abi());Av=Av.Ah;
}return Be;},_Init:function(aArg){this.__proto__=C.Filter;A.h7++;},_Done:function(
){this.__proto__=null;A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((
B=this.B_)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.B$)&&(B._cycle!=D))B._Mark(
B._cycle=D);if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:
null,_className:"Device::Filter"};C.FilterCriterion={Ah:null,AJ:null,EK:-1,Operator:
1,YI:false,Abi:function(){return null;},E8:function(AH){if(!AH)return;this.EK=AH.
EK;this.Operator=AH.Operator;this.YI=AH.YI;},_Init:function(aArg){this.__proto__=
C.FilterCriterion;A.h7++;},_Done:function(){this.__proto__=null;A.h7--;},_ReInit:
function(){},_Mark:function(D){var B;if((B=this.Ah)&&(B._cycle!=D))B._Mark(B._cycle=
D);if((B=this.AJ)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.I)&&(B._cycle!=D
))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:"Device::FilterCriterion"
};C.Int32FilterCriterion={A4:0,Abi:function(){var Av=A._NewObject(C.Int32FilterCriterion
,0);Av.E8(this);return Av;},E8:function(AH){C.FilterCriterion.E8.call(this,AH);var
Av=(C.Int32FilterCriterion.isPrototypeOf(AH)?AH:null);if(!!Av)this.A4=Av.A4;},Initialize:
function(A3,Eb,A7,P$){this.EK=A3;this.Operator=Eb;this.A4=A7;this.YI=P$;return this;
},_Init:function(aArg){C.FilterCriterion._Init.call(this,aArg);this.__proto__=C.
Int32FilterCriterion;},_className:"Device::Int32FilterCriterion"};C.DeviceClass={
AEe:0,AEd:0,AvY:0,Ut:0,OQ:null,Sw:null,QW:null,SU:null,RX:null,Am:null,Bt:null,Agq:
null,AnL:null,Pl:null,Auy:A.jV,AutoActions:A.jV,ABD:A.jV,AGS:A.jV,AGT:A.jV,AhC:A.
jV,AHb:A.jV,AHc:A.jV,ABE:A.jV,AHa:A.jV,AHf:A.jV,ABx:A.jV,ABy:A.jV,AR0:A.jV,AR5:A.
jV,AVN:A.jV,Aa3:100,Lr:0,AM1:75,AcF:3600,AT0:0,A1:5,AF:0,KW:50000,Ph:0,AF8:0,AdO:
0,Aq6:0,Aq5:0,ARN:1,ARM:1,AjU:0,ARO:1,AxI:0,Afm:0,AqS:10,AUK:5,AD9:60,AvS:0,An4:
0,OJ:1,WhereAbouts:0,VN:0,Ak3:0,AxA:3,ACA:0,Ags:1,AhM:0,AbV:0,Aqr:0,ANZ:11,Breed:
0,EartagNrAssignmentMode:0,AuY:0,ACt:0,ACs:0,Ig:5,ABw:2,Aqt:0,AOC:2,AVy:0,D9:0,AL$:
0,Kg:0,Gender:2,WeightRecordingScope:1,WeightRecordingMode:1,AnimalType:0,MassUnit:
0,AutoRegistrationMode:0,RatingMode:0,SyncState:0,OverlayMenu:0,TemperatureUnit:
0,Language:0,MeasureState:0,ScanState:0,KG:3,AeJ:true,ARz:false,Aqf:true,AqT:false
,AmM:true,HB:false,AVc:false,AmN:false,AVw:false,AsO:false,AEc:false,Amz:false,UpdateActiveScreen:
function(AL){if(this.KG===AL)return;this.KG=AL;A.abo([this,this.AEp,this.BaC],0);
},Zp:function(E){if(this.K&&this.K.Zp)return this.K.Zp.apply(this,arguments);else
return C.DeviceClass.Bt$.apply(this,arguments);},Bt$:function(E){},BaC:function(
Aq){this.Zp(Aq);},UpdateBatteryChargeState:function(AL){if(this.Aa3===AL)return;
this.Aa3=AL;A.abo([this,this.Av3,this.Ayz],0);},Awo:function(E){if(this.K&&this.
K.Awo)return this.K.Awo.apply(this,arguments);else return C.DeviceClass.Buk.apply(
this,arguments);},Buk:function(E){A.ab5("%s",BF);},Ayz:function(Aq){this.Awo(Aq);
},UpdateChargeActive:function(AL){if(this.Amz===AL)return;this.Amz=AL;A.abo([this
,this.Av6,this.AyA],0);},AEW:function(E){if(this.K&&this.K.AEW)return this.K.AEW.
apply(this,arguments);else return C.DeviceClass.Buq.apply(this,arguments);},Buq:
function(E){A.ab5("%s",E4);},AyA:function(Aq){this.AEW(Aq);},UpdateScanState:function(
AL){var B;if(this.ScanState===AL)return;this.ScanState=AL;A.abo([this,this.ASD,this.
AZ9],0);A._GetAutoObject(C.Helper).BAu(this);},Ar3:function(E){if(this.K&&this.K.
Ar3)return this.K.Ar3.apply(this,arguments);else return C.DeviceClass.Bu7.apply(
this,arguments);},Bu7:function(E){A.ab5("%s",Hm);},AZ9:function(Aq){this.Ar3(Aq);
},UpdateMeasureState:function(AL){if(this.MeasureState===AL)return;this.MeasureState=
AL;A.abo([this,this.AEx,this.AIQ],0);},AwN:function(E){if(this.K&&this.K.AwN)return this.
K.AwN.apply(this,arguments);else return C.DeviceClass.BuP.apply(this,arguments);
},BuP:function(E){A.ab5("%s",IQ);},AIQ:function(Aq){this.AwN(Aq);},UpdateTempValue:
function(AL){if(this.Lr===AL)return;this.Lr=AL;A.abo([this,this.AEB,this.AIS],0);
},Aw1:function(E){if(this.K&&this.K.Aw1)return this.K.Aw1.apply(this,arguments);
else return C.DeviceClass.Bvb.apply(this,arguments);},Bvb:function(E){A.ab5("%s"
,Ip);},AIS:function(Aq){this.Aw1(Aq);},Anz:function(E){if(this.K&&this.K.Anz)return this.
K.Anz.apply(this,arguments);else return C.DeviceClass.BuJ.apply(this,arguments);
},BuJ:function(E){},BaR:function(Aq){this.Anz(Aq);},Aw2:function(E){if(this.K&&this.
K.Aw2)return this.K.Aw2.apply(this,arguments);else return C.DeviceClass.Bvc.apply(
this,arguments);},Bvc:function(E){},Atg:function(Aq){this.Aw2(Aq);},AEU:function(
E){if(this.K&&this.K.AEU)return this.K.AEU.apply(this,arguments);else return C.DeviceClass.
Bup.apply(this,arguments);},Bup:function(E){},BaJ:function(Aq){this.AEU(Aq);},AFr:
function(E){if(this.K&&this.K.AFr)return this.K.AFr.apply(this,arguments);else return C.
DeviceClass.BuR.apply(this,arguments);},BuR:function(E){},AZ3:function(Aq){this.
AFr(Aq);},UpdateMonitoring:function(AL){if(this.AEc===AL)return;this.AEc=AL;A.abo([
this,this.ASu,this.AZ3],0);},UpdateDataTable:function(Bbs){var B;switch(Bbs){case
0:A.pe([B=this.Am,B.Akn],this);break;case 1:A.pe([B=this.Bt,B.Akn],this);break;case
3:A.pe([B=this.Agq,B.Akn],this);break;case 4:A.pe([B=this.Pl,B.Akn],this);break;
case 2:A.ab5("%s",O1);break;default:A.ab5("%s%e",P2,Bbs);}},Axz:function(){if(this.
K&&this.K.Axz)return this.K.Axz.apply(this,arguments);else return C.DeviceClass.
BvL.apply(this,arguments);},BvL:function(){},AhG:function(){if(this.K&&this.K.AhG
)return this.K.AhG.apply(this,arguments);else return C.DeviceClass.BvO.apply(this
,arguments);},BvO:function(){},AhD:function(){if(this.K&&this.K.AhD)return this.
K.AhD.apply(this,arguments);else return C.DeviceClass.BvM.apply(this,arguments);
},BvM:function(){},AnX:function(){if(this.K&&this.K.AnX)return this.K.AnX.apply(
this,arguments);else return C.DeviceClass.BvP.apply(this,arguments);},BvP:function(
){},UpdateLanguage:function(AL){if(this.Language===AL)return;this.Language=AL;switch(
AL){case 14:A._SetLanguage(1);break;case 13:A._SetLanguage(2);break;case 6:A._SetLanguage(
3);break;case 11:A._SetLanguage(4);break;case 10:A._SetLanguage(5);break;case 12:
A._SetLanguage(6);break;case 5:A._SetLanguage(7);break;case 3:A._SetLanguage(8);
break;case 1:A._SetLanguage(9);break;case 8:A._SetLanguage(10);break;case 4:A._SetLanguage(
11);break;case 15:A._SetLanguage(13);break;case 9:A._SetLanguage(15);break;case 2:
A._SetLanguage(16);break;case 7:A._SetLanguage(17);break;case 16:A._SetLanguage(
18);break;default:A._SetLanguage(0);}A.abo([this,this.A8t,this.BaR],0);},UpdateTemperatureUnit:
function(AL){if(this.TemperatureUnit===AL)return;this.TemperatureUnit=AL;A.abo([
this,this.Arz,this.Atg],0);},UpdateBrightness:function(AL){if(this.AM1===AL)return;
this.AM1=AL;A.abo([this,this.A8e,this.BaJ],0);},SetSystemTime:function(Ah5){if(this.
K&&this.K.SetSystemTime)return this.K.SetSystemTime.apply(this,arguments);else return C.
DeviceClass.BvJ.apply(this,arguments);},BvJ:function(Ah5){},Axt:function(){if(this.
K&&this.K.Axt)return this.K.Axt.apply(this,arguments);else return C.DeviceClass.
Baq.apply(this,arguments);},Baq:function(){},AGk:function(){if(this.K&&this.K.AGk
)return this.K.AGk.apply(this,arguments);else return C.DeviceClass.Bao.apply(this
,arguments);},Bao:function(){},Bn0:function(){},UpdateOverlayMenu:function(AL){if(
this.OverlayMenu===AL)return;this.OverlayMenu=AL;A.abo([this,this.Awg,this.AyH],
0);},Ds:function(E){if(this.K&&this.K.Ds)return this.K.Ds.apply(this,arguments);
else return C.DeviceClass.Bu2.apply(this,arguments);},Bu2:function(E){},AyH:function(
Aq){this.Ds(Aq);},Aw8:function(E){if(this.K&&this.K.Aw8)return this.K.Aw8.apply(
this,arguments);else return C.DeviceClass.Bvm.apply(this,arguments);},Bvm:function(
E){},Ba2:function(Aq){this.Aw8(Aq);},UpdateUnderTemp:function(AL){if(this.AcF===
AL)return;this.AcF=AL;A.abo([this,this.A8X,this.Ba2],0);},UpdateSyncState:function(
AL){if(this.SyncState===AL)return;this.SyncState=AL;A.abo([this,this.ASF,this.AZ$
],0);},Ab9:function(E){if(this.K&&this.K.Ab9)return this.K.Ab9.apply(this,arguments
);else return C.DeviceClass.Bva.apply(this,arguments);},Bva:function(E){A.ab5("%s"
,P3);},AZ$:function(Aq){this.Ab9(Aq);},ACZ:function(){if(this.K&&this.K.ACZ)return this.
K.ACZ.apply(this,arguments);else return C.DeviceClass.Bt3.apply(this,arguments);
},Bt3:function(){return A.jV;},UpdatePopup:function(J1,A0T,A0P,A0W){this.A9(J1,A0T
,A0P,A0W,[this,this.BAc]);},PopupStateChanged:function(J1,Ae){if(this.K&&this.K.
PopupStateChanged)return this.K.PopupStateChanged.apply(this,arguments);else return C.
DeviceClass.Bvz.apply(this,arguments);},Bvz:function(J1,Ae){},AFT:function(E){if(
this.K&&this.K.AFT)return this.K.AFT.apply(this,arguments);else return C.DeviceClass.
Bvo.apply(this,arguments);},Bvo:function(E){},Ba3:function(Aq){this.AFT(Aq);},UpdateVibrationOnKeypressEnabled:
function(AL){if(this.AsO===AL)return;this.AsO=AL;A.abo([this,this.A8Y,this.Ba3],
0);},Ae7:function(E){if(this.K&&this.K.Ae7)return this.K.Ae7.apply(this,arguments
);else return C.DeviceClass.Bvn.apply(this,arguments);},Bvn:function(E){},AIT:function(
Aq){this.Ae7(Aq);},UpdateVibrationOn:function(BbT){if(this.AVw===BbT)return;this.
AVw=BbT;A.abo([this,this.AEC,this.AIT],0);},A9:function(J1,A0T,A0P,A0W,Bxe){var Agi=
A._NewObject(C.PopupContext,0);Agi.Id=J1;Agi.Show=A0T;Agi.AkI=A0P;Agi.Ak2=A0W;Agi.
AF1=Bxe;this.AnL.Trigger(Agi,false);},BAc:function(G){var At=(C.PopupContext.isPrototypeOf(
G)?G:null);if(!!At)this.PopupStateChanged(At.Id,At.PopupState);},AwX:function(E){
if(this.K&&this.K.AwX)return this.K.AwX.apply(this,arguments);else return C.DeviceClass.
Bu6.apply(this,arguments);},Bu6:function(E){},AZ8:function(Aq){this.AwX(Aq);},UpdateRatingMode:
function(AL){if(this.RatingMode===AL)return;this.RatingMode=AL;A.abo([this,this.
ASC,this.AZ8],0);},AeX:function(E){if(this.K&&this.K.AeX)return this.K.AeX.apply(
this,arguments);else return C.DeviceClass.BuB.apply(this,arguments);},BuB:function(
E){},Atf:function(Aq){this.AeX(Aq);},UpdateFlashLightOn:function(BbB){if(this.AmN===
BbB)return;this.AmN=BbB;A.abo([this,this.Arw,this.Atf],0);},Un:function(E){if(this.
K&&this.K.Un)return this.K.Un.apply(this,arguments);else return C.DeviceClass.Bvf.
apply(this,arguments);},Bvf:function(E){},A0a:function(Aq){this.Un(Aq);},UpdateTopLightOn:
function(BbP){if(this.AVc===BbP)return;this.AVc=BbP;A.abo([this,this.ASH,this.A0a
],0);},WC:function(E){if(this.K&&this.K.WC)return this.K.WC.apply(this,arguments
);else return C.DeviceClass.Bu5.apply(this,arguments);},Bu5:function(E){},Bv2:function(
Aq){this.WC(Aq);},UpdateRGBTopLight:function(BbK){if(this.AT0===BbK)return;this.
AT0=BbK;A.abo([this,this.BkJ,this.Bv2],0);},Awn:function(E){if(this.K&&this.K.Awn
)return this.K.Awn.apply(this,arguments);else return C.DeviceClass.Buj.apply(this
,arguments);},Buj:function(E){},BvV:function(Aq){this.Awn(Aq);},UpdateAutoRegistrationMode:
function(Bbo){if(this.AutoRegistrationMode===Bbo)return;this.AutoRegistrationMode=
Bbo;A.abo([this,this.Bj9,this.BvV],0);},Ar4:function(E){if(this.K&&this.K.Ar4)return this.
K.Ar4.apply(this,arguments);else return C.DeviceClass.Bu8.apply(this,arguments);
},Bu8:function(E){A.ab5("%s",CQ);},AZ_:function(Aq){this.Ar4(Aq);},UpdateScanTransponder:
function(J1,BbR,BbQ){if(((this.OQ.Id===J1)&&(this.OQ.TransponderType===BbR))&&(this.
OQ.TransponderProtocol===BbQ))return;this.OQ.OnSetId(J1);this.OQ.ATE(BbR);this.OQ.
ATD(BbQ);A.abo([this,this.ASE,this.AZ_],0);},OL:function(E){if(this.K&&this.K.OL
)return this.K.OL.apply(this,arguments);else return C.DeviceClass.But.apply(this
,arguments);},But:function(E){},UZ:function(Aq){this.OL(Aq);},UpdateDigitsID:function(
Bbw){if(this.A1===Bbw)return;this.A1=Bbw;A.abo([this,this.Uf,this.UZ],0);},PN:function(
E){if(this.K&&this.K.PN)return this.K.PN.apply(this,arguments);else return C.DeviceClass.
Bu1.apply(this,arguments);},Bu1:function(E){},U0:function(Aq){this.PN(Aq);},UpdateOffsetID:
function(BbH){if(this.AF===BbH)return;this.AF=BbH;A.abo([this,this.Ug,this.U0],0
);},AFX:function(E){if(this.K&&this.K.AFX)return this.K.AFX.apply(this,arguments
);else return C.DeviceClass.Bvv.apply(this,arguments);},Bvv:function(E){A.ab5("%s"
,Fb);},AIU:function(Aq){this.AFX(Aq);},UpdateWeightValue:function(AL){if(this.KW===
AL)return;this.KW=AL;A.abo([this,this.AED,this.AIU],0);},AwK:function(E){if(this.
K&&this.K.AwK)return this.K.AwK.apply(this,arguments);else return C.DeviceClass.
BuM.apply(this,arguments);},BuM:function(E){},AZ2:function(Aq){this.AwK(Aq);},UpdateMassUnit:
function(AL){if(this.MassUnit===AL)return;this.MassUnit=AL;A.abo([this,this.ASt,
this.AZ2],0);},ArD:function(E){if(this.K&&this.K.ArD)return this.K.ArD.apply(this
,arguments);else return C.DeviceClass.Bak.apply(this,arguments);},Bak:function(E
){},Baz:function(Aq){this.ArD(Aq);},ArE:function(E){if(this.K&&this.K.ArE)return this.
K.ArE.apply(this,arguments);else return C.DeviceClass.Bal.apply(this,arguments);
},Bal:function(E){},AZW:function(Aq){this.ArE(Aq);},UpdateActiveActions:function(
AL){if(this.Ph===AL)return;this.Ph=AL;A.abo([this,this.A71,this.Baz],0);},UpdateActiveActionsOrder:
function(AL){if(this.Auy===AL)return;this.Auy=AL;A.abo([this,this.ASf,this.AZW],
0);},Aku:function(E){if(this.K&&this.K.Aku)return this.K.Aku.apply(this,arguments
);else return C.DeviceClass.Bam.apply(this,arguments);},Bam:function(E){},BaH:function(
Aq){this.Aku(Aq);},UpdateAutoActions:function(AL){if(this.AutoActions===AL)return;
this.AutoActions=AL;A.abo([this,this.A8a,this.BaH],0);},AGL:function(){if(this.K&&
this.K.AGL)return this.K.AGL.apply(this,arguments);else return C.DeviceClass.BvN.
apply(this,arguments);},BvN:function(){},AsF:function(){if(this.K&&this.K.AsF)return this.
K.AsF.apply(this,arguments);else return C.DeviceClass.BvR.apply(this,arguments);
},BvR:function(){},EC:function(E){if(this.K&&this.K.EC)return this.K.EC.apply(this
,arguments);else return C.DeviceClass.Bug.apply(this,arguments);},Bug:function(E
){},BvU:function(Aq){this.EC(Aq);},UpdateAnimalType:function(Em){if(this.AnimalType===
Em)return;this.AnimalType=Em;A.abo([this,this.PM,this.BvU],0);},Aw9:function(E){
if(this.K&&this.K.Aw9)return this.K.Aw9.apply(this,arguments);else return C.DeviceClass.
Bvt.apply(this,arguments);},Bvt:function(E){},Ba8:function(Aq){this.Aw9(Aq);},UpdateWeightRecordingMode:
function(BbV){if(this.WeightRecordingMode===BbV)return;this.WeightRecordingMode=
BbV;A.abo([this,this.A86,this.Ba8],0);},AFw:function(E){if(this.K&&this.K.AFw)return this.
K.AFw.apply(this,arguments);else return C.DeviceClass.Bu3.apply(this,arguments);
},Bu3:function(E){A.ab5("%s",Lt);},AZ6:function(Aq){this.AFw(Aq);},UpdatePredictedTempValue:
function(AL){if(this.AF8===AL)return;this.AF8=AL;A.abo([this,this.ASz,this.AZ6],
0);},SL:function(L6){if(this.K&&this.K.SL)return this.K.SL.apply(this,arguments);
else return C.DeviceClass.BvI.apply(this,arguments);},BvI:function(L6){},AE2:function(
E){if(this.K&&this.K.AE2)return this.K.AE2.apply(this,arguments);else return C.DeviceClass.
Bus.apply(this,arguments);},Bus:function(E){},AIN:function(Aq){this.AE2(Aq);},UpdateDemoMode:
function(AL){if(this.HB===AL)return;this.HB=AL;A.abo([this,this.AEu,this.AIN],0);
},AEJ:function(E){if(this.K&&this.K.AEJ)return this.K.AEJ.apply(this,arguments);
else return C.DeviceClass.Bua.apply(this,arguments);},Bua:function(E){},BaD:function(
Aq){this.AEJ(Aq);},UpdateAgeRegistration:function(BbG){if(this.AdO===BbG)return;
this.AdO=BbG;A.abo([this,this.A76,this.BaD],0);},Aw_:function(E){if(this.K&&this.
K.Aw_)return this.K.Aw_.apply(this,arguments);else return C.DeviceClass.Bvu.apply(
this,arguments);},Bvu:function(E){},Ba9:function(Aq){this.Aw_(Aq);},UpdateWeightRecordingScope:
function(BbL){if(this.WeightRecordingScope===BbL)return;this.WeightRecordingScope=
BbL;A.abo([this,this.A87,this.Ba9],0);},JP:function(E){if(this.K&&this.K.JP)return this.
K.JP.apply(this,arguments);else return C.DeviceClass.BuF.apply(this,arguments);}
,BuF:function(E){},AZ1:function(Aq){this.JP(Aq);},UpdateGender:function(L3){if(this.
Gender===L3)return;this.Gender=L3;A.abo([this,this.Wu,this.AZ1],0);},ArT:function(
E){if(this.K&&this.K.ArT)return this.K.ArT.apply(this,arguments);else return C.DeviceClass.
BuH.apply(this,arguments);},BuH:function(E){},AyD:function(Aq){this.ArT(Aq);},UpdateIDLastUsedMale:
function(Rn){if(this.Aq6===Rn)return;this.Aq6=Rn;A.abo([this,this.Av$,this.AyD],
0);},ArS:function(E){if(this.K&&this.K.ArS)return this.K.ArS.apply(this,arguments
);else return C.DeviceClass.BuG.apply(this,arguments);},BuG:function(E){},AyC:function(
Aq){this.ArS(Aq);},UpdateIDLastUsedFemale:function(Rn){if(this.Aq5===Rn)return;this.
Aq5=Rn;A.abo([this,this.Av_,this.AyC],0);},Zq:function(E){if(this.K&&this.K.Zq)return this.
K.Zq.apply(this,arguments);else return C.DeviceClass.Buf.apply(this,arguments);}
,Buf:function(E){},AIL:function(Aq){this.Zq(Aq);},UpdateAnimalListContent:function(
AL){if(this.Kg===AL)return;this.Kg=AL;A.abo([this,this.AEr,this.AIL],0);},AEL:function(
E){if(this.K&&this.K.AEL)return this.K.AEL.apply(this,arguments);else return C.DeviceClass.
Bub.apply(this,arguments);},Bub:function(E){},BaE:function(Aq){this.AEL(Aq);},UpdateAlarmListAction:
function(AL){if(this.AL$===AL)return;this.AL$=AL;A.abo([this,this.A78,this.BaE],
0);},AE5:function(E){if(this.K&&this.K.AE5)return this.K.AE5.apply(this,arguments
);else return C.DeviceClass.BuA.apply(this,arguments);},BuA:function(E){},BaM:function(
Aq){this.AE5(Aq);},UpdateFlashLightInMeasureState:function(BbC){if(this.AmM===BbC
)return;this.AmM=BbC;A.abo([this,this.A8h,this.BaM],0);},AeS:function(E){if(this.
K&&this.K.AeS)return this.K.AeS.apply(this,arguments);else return C.DeviceClass.
Bue.apply(this,arguments);},Bue:function(E){},AIK:function(Aq){this.AeS(Aq);},UpdateAnimalInfoContent:
function(AL){if(this.D9===AL)return;this.D9=AL;A.abo([this,this.AEq,this.AIK],0);
},AFW:function(E){if(this.K&&this.K.AFW)return this.K.AFW.apply(this,arguments);
else return C.DeviceClass.Bvp.apply(this,arguments);},Bvp:function(E){},Ba4:function(
Aq){this.AFW(Aq);},UpdateWatchListAction:function(AL){if(this.AVy===AL)return;this.
AVy=AL;A.abo([this,this.A82,this.Ba4],0);},AE7:function(E){if(this.K&&this.K.AE7
)return this.K.AE7.apply(this,arguments);else return C.DeviceClass.BuC.apply(this
,arguments);},BuC:function(E){},BaO:function(Aq){this.AE7(Aq);},UpdateFreshCowListAction:
function(AL){if(this.AOC===AL)return;this.AOC=AL;A.abo([this,this.A8j,this.BaO],
0);},ResetActiveActions:function(G){if(this.K&&this.K.ResetActiveActions)return this.
K.ResetActiveActions.apply(this,arguments);else return C.DeviceClass.BvA.apply(this
,arguments);},BvA:function(G){},BFR:function(s){this.ResetActiveActions(s);},ResetAutoActions:
function(G){if(this.K&&this.K.ResetAutoActions)return this.K.ResetAutoActions.apply(
this,arguments);else return C.DeviceClass.BvC.apply(this,arguments);},BvC:function(
G){},BFT:function(s){this.ResetAutoActions(s);},Awl:function(E){if(this.K&&this.
K.Awl)return this.K.Awl.apply(this,arguments);else return C.DeviceClass.Buh.apply(
this,arguments);},Buh:function(E){},BaF:function(Aq){this.Awl(Aq);},Ar6:function(
E){if(this.K&&this.K.Ar6)return this.K.Ar6.apply(this,arguments);else return C.DeviceClass.
Bvd.apply(this,arguments);},Bvd:function(E){},BaZ:function(Aq){this.Ar6(Aq);},Ar7:
function(E){if(this.K&&this.K.Ar7)return this.K.Ar7.apply(this,arguments);else return C.
DeviceClass.Bve.apply(this,arguments);},Bve:function(E){},Ba0:function(Aq){this.
Ar7(Aq);},Asq:function(G){if(this.K&&this.K.Asq)return this.K.Asq.apply(this,arguments
);else return C.DeviceClass.BvF.apply(this,arguments);},BvF:function(G){},BFW:function(
s){this.Asq(s);},UpdateTemperaturesLowString:function(AL){if(this.AGT===AL)return;
this.AGT=AL;A.abo([this,this.A8T,this.Ba0],0);},UpdateTemperaturesHighString:function(
AL){if(this.AGS===AL)return;this.AGS=AL;A.abo([this,this.A8S,this.BaZ],0);},UpdateAnimalTypesString:
function(AL){if(this.ABD===AL)return;this.ABD=AL;A.abo([this,this.A7_,this.BaF],
0);},AwE:function(E){if(this.K&&this.K.AwE)return this.K.AwE.apply(this,arguments
);else return C.DeviceClass.BuE.apply(this,arguments);},BuE:function(E){},BaQ:function(
Aq){this.AwE(Aq);},UpdateFreshCowsHideMeasured:function(AL){if(this.AqT===AL)return;
this.AqT=AL;A.abo([this,this.A8l,this.BaQ],0);},ArZ:function(E){if(this.K&&this.
K.ArZ)return this.K.ArZ.apply(this,arguments);else return C.DeviceClass.BuX.apply(
this,arguments);},BuX:function(E){},BaV:function(Aq){this.ArZ(Aq);},UpdateNaisIdLastUsedMale:
function(Xl){if(this.AEe===Xl)return;this.AEe=Xl;A.abo([this,this.A8B,this.BaV],
0);},ArY:function(E){if(this.K&&this.K.ArY)return this.K.ArY.apply(this,arguments
);else return C.DeviceClass.BuW.apply(this,arguments);},BuW:function(E){},BaU:function(
Aq){this.ArY(Aq);},UpdateNaisIdLastUsedFemale:function(Xl){if(this.AEd===Xl)return;
this.AEd=Xl;A.abo([this,this.A8A,this.BaU],0);},AwR:function(E){if(this.K&&this.
K.AwR)return this.K.AwR.apply(this,arguments);else return C.DeviceClass.BuU.apply(
this,arguments);},BuU:function(E){},AyF:function(Aq){this.AwR(Aq);},UpdateNaisIdIncrementMale:
function(Alo){if(this.ARN===Alo)return;this.ARN=Alo;A.abo([this,this.Awd,this.AyF
],0);},AwQ:function(E){if(this.K&&this.K.AwQ)return this.K.AwQ.apply(this,arguments
);else return C.DeviceClass.BuT.apply(this,arguments);},BuT:function(E){},AyE:function(
Aq){this.AwQ(Aq);},UpdateNaisIdIncrementFemale:function(Alo){if(this.ARM===Alo)return;
this.ARM=Alo;A.abo([this,this.Awc,this.AyE],0);},UpdateFirmware:function(){if(this.
K&&this.K.UpdateFirmware)return this.K.UpdateFirmware.apply(this,arguments);else
return C.DeviceClass.Bar.apply(this,arguments);},Bar:function(){},Anu:function(E
){if(this.K&&this.K.Anu)return this.K.Anu.apply(this,arguments);else return C.DeviceClass.
Bum.apply(this,arguments);},Bum:function(E){},BaI:function(Aq){this.Anu(Aq);},UpdateBootloaderMessage:
function(AL){if(this.Aqt===AL)return;this.Aqt=AL;A.abo([this,this.A8d,this.BaI],
0);},AEG:function(E){if(this.K&&this.K.AEG)return this.K.AEG.apply(this,arguments
);else return C.DeviceClass.Bt7.apply(this,arguments);},Bt7:function(E){},Bax:function(
Aq){this.AEG(Aq);},UpdateActionListAction:function(AL){if(this.ABw===AL)return;this.
ABw=AL;A.abo([this,this.A7Z,this.Bax],0);},Awj:function(E){if(this.K&&this.K.Awj
)return this.K.Awj.apply(this,arguments);else return C.DeviceClass.Bt8.apply(this
,arguments);},Bt8:function(E){},Bay:function(Aq){this.Awj(Aq);},UpdateActionListHideMeasured:
function(AL){if(this.Aqf===AL)return;this.Aqf=AL;A.abo([this,this.A70,this.Bay],
0);},Uh:function(E){if(this.K&&this.K.Uh)return this.K.Uh.apply(this,arguments);
else return C.DeviceClass.Bud.apply(this,arguments);},Bud:function(E){},AoC:function(
Aq){this.Uh(Aq);},UpdateAnimalIdGenerationMethod:function(Bb0){if(this.Ig===Bb0)
return;this.Ig=Bb0;A.abo([this,this.Anm,this.AoC],0);},Aww:function(E){if(this.K&&
this.K.Aww)return this.K.Aww.apply(this,arguments);else return C.DeviceClass.Buu.
apply(this,arguments);},Buu:function(E){},AZZ:function(Aq){this.Aww(Aq);},UpdateDirectionOfCountingFemale:
function(Ali){if(this.ACs===Ali)return;this.ACs=Ali;A.abo([this,this.ASm,this.AZZ
],0);},Awx:function(E){if(this.K&&this.K.Awx)return this.K.Awx.apply(this,arguments
);else return C.DeviceClass.Buv.apply(this,arguments);},Buv:function(E){},AZ0:function(
Aq){this.Awx(Aq);},UpdateDirectionOfCountingMale:function(Ali){if(this.ACt===Ali
)return;this.ACt=Ali;A.abo([this,this.ASn,this.AZ0],0);},Awy:function(E){if(this.
K&&this.K.Awy)return this.K.Awy.apply(this,arguments);else return C.DeviceClass.
Buw.apply(this,arguments);},Buw:function(E){},AIO:function(Aq){this.Awy(Aq);},UpdateDirectionOfCountingUnisex:
function(Ali){if(this.AuY===Ali)return;this.AuY=Ali;A.abo([this,this.AEv,this.AIO
],0);},ArU:function(E){if(this.K&&this.K.ArU)return this.K.ArU.apply(this,arguments
);else return C.DeviceClass.BuI.apply(this,arguments);},BuI:function(E){},AoD:function(
Aq){this.ArU(Aq);},UpdateIDLastUsedUnisex:function(Rn){if(this.AjU===Rn)return;this.
AjU=Rn;A.abo([this,this.Anp,this.AoD],0);},Ar0:function(E){if(this.K&&this.K.Ar0
)return this.K.Ar0.apply(this,arguments);else return C.DeviceClass.BuY.apply(this
,arguments);},BuY:function(E){},AZ4:function(Aq){this.Ar0(Aq);},UpdateNaisIdLastUsedUnisex:
function(Xl){if(this.AvY===Xl)return;this.AvY=Xl;A.abo([this,this.ASv,this.AZ4],
0);},AwS:function(E){if(this.K&&this.K.AwS)return this.K.AwS.apply(this,arguments
);else return C.DeviceClass.BuV.apply(this,arguments);},BuV:function(E){},AyG:function(
Aq){this.AwS(Aq);},UpdateNaisIdIncrementUnisex:function(Alo){if(this.ARO===Alo)return;
this.ARO=Alo;A.abo([this,this.Awe,this.AyG],0);},Akw:function(E){if(this.K&&this.
K.Akw)return this.K.Akw.apply(this,arguments);else return C.DeviceClass.Buy.apply(
this,arguments);},Buy:function(E){},AyB:function(Aq){this.Akw(Aq);},UpdateEartagNrAssignmentMode:
function(Alj){if(this.EartagNrAssignmentMode===Alj)return;this.EartagNrAssignmentMode=
Alj;A.abo([this,this.Av9,this.AyB],0);},NY:function(E){if(this.K&&this.K.NY)return this.
K.NY.apply(this,arguments);else return C.DeviceClass.Buo.apply(this,arguments);}
,Buo:function(E){},BvX:function(Aq){this.NY(Aq);},UpdateBreed:function(AcW){if(this.
Breed===AcW)return;this.Breed=AcW;A.abo([this,this.Av5,this.BvX],0);},AFp:function(
E){if(this.K&&this.K.AFp)return this.K.AFp.apply(this,arguments);else return C.DeviceClass.
BuQ.apply(this,arguments);},BuQ:function(E){},Bv0:function(Aq){this.AFp(Aq);},UpdateMiddlewareVersions:
function(Qb,A0L,A0M,A0S,A0A){this.Sw.OnSetTimestamp(Qb);this.Sw.AFk(A0L);this.Sw.
AFq(A0M);this.Sw.AFz(A0S);this.Sw.AE0(A0A);A.abo([this,this.BkE,this.Bv0],0);},AFj:
function(E){if(this.K&&this.K.AFj)return this.K.AFj.apply(this,arguments);else return C.
DeviceClass.BuK.apply(this,arguments);},BuK:function(E){},BvZ:function(Aq){this.
AFj(Aq);},UpdateMainboardVersions:function(Qb,A0J,A0K,A0I,A0Y,A0Z,A0X){this.QW.OnSetTimestamp(
Qb);this.QW.AFh(A0J);this.QW.AFi(A0K);this.QW.AFg(A0I);this.QW.AFO(A0Y);this.QW.
AFP(A0Z);this.QW.AFN(A0X);A.abo([this,this.BkC,this.BvZ],0);},AFQ:function(E){if(
this.K&&this.K.AFQ)return this.K.AFQ.apply(this,arguments);else return C.DeviceClass.
Bvg.apply(this,arguments);},Bvg:function(E){},Bv6:function(Aq){this.AFQ(Aq);},UpdateTorchboardVersions:
function(Qb,A0J,A0K,A0I,A0Y,A0Z,A0X){this.SU.OnSetTimestamp(Qb);this.SU.AFh(A0J);
this.SU.AFi(A0K);this.SU.AFg(A0I);this.SU.AFO(A0Y);this.SU.AFP(A0Z);this.SU.AFN(
A0X);A.abo([this,this.Bk1,this.Bv6],0);},AEQ:function(E){if(this.K&&this.K.AEQ)return this.
K.AEQ.apply(this,arguments);else return C.DeviceClass.Bun.apply(this,arguments);
},Bun:function(E){},BvW:function(Aq){this.AEQ(Aq);},UpdateBootloaderVersions:function(
Qb,A0L,A0M,A0S,A0A){this.RX.OnSetTimestamp(Qb);this.RX.AFk(A0L);this.RX.AFq(A0M);
this.RX.AFz(A0S);this.RX.AE0(A0A);A.abo([this,this.Bka,this.BvW],0);},AE3:function(
E){if(this.K&&this.K.AE3)return this.K.AE3.apply(this,arguments);else return C.DeviceClass.
Bux.apply(this,arguments);},Bux:function(E){},BaL:function(Aq){this.AE3(Aq);},UpdateDryCowListAction:
function(AL){if(this.ANZ===AL)return;this.ANZ=AL;A.abo([this,this.A8f,this.BaL],
0);},AJE:function(A0B){if(this.K&&this.K.AJE)return this.K.AJE.apply(this,arguments
);else return C.DeviceClass.Bwg.apply(this,arguments);},Bwg:function(A0B){return false;
},AEP:function(E){if(this.K&&this.K.AEP)return this.K.AEP.apply(this,arguments);
else return C.DeviceClass.Bul.apply(this,arguments);},Bul:function(E){},AIM:function(
Aq){this.AEP(Aq);},UpdateBirthListView:function(AL){if(this.Aqr===AL)return;this.
Aqr=AL;A.abo([this,this.AEs,this.AIM],0);},BatchResetBirthNoticePending:function(
){var B3=A._NewObject(C.Animal,0);var O;var AiW=0;var Ade=A._GetAutoObject(C.Device
).Am.Filter;var Be=A._GetAutoObject(C.Helper).AOG();A._GetAutoObject(C.Device).Am.
Bl(Be);for(O=0;O<A._GetAutoObject(C.Device).Am.Ca();O++){B3.Er(O,A._GetAutoObject(
C.Device).Am);B3.Ae1(false);B3.Ch(A._GetAutoObject(C.Device).Am);AiW++;}A._GetAutoObject(
C.Device).Am.Bl(Ade);return AiW;},UpdateTransferProgress:function(AL){if(this.AxI===
AL)return;this.AxI=AL;A.abo([this,this.ASI,this.A0b],0);},AFR:function(E){if(this.
K&&this.K.AFR)return this.K.AFR.apply(this,arguments);else return C.DeviceClass.
Bvh.apply(this,arguments);},Bvh:function(E){A.ab5("%s",P4);},A0b:function(Aq){this.
AFR(Aq);},UpdateTransferTarget:function(AL){if(this.Afm===AL)return;this.Afm=AL;
A.abo([this,this.A8W,this.Ba1],0);},Ar8:function(E){if(this.K&&this.K.Ar8)return this.
K.Ar8.apply(this,arguments);else return C.DeviceClass.Bvi.apply(this,arguments);
},Bvi:function(E){A.ab5("%s",JY);},Ba1:function(Aq){this.Ar8(Aq);},AsE:function(
){if(this.K&&this.K.AsE)return this.K.AsE.apply(this,arguments);else return C.DeviceClass.
BvQ.apply(this,arguments);},BvQ:function(){},AwW:function(E){if(this.K&&this.K.AwW
)return this.K.AwW.apply(this,arguments);else return C.DeviceClass.Bu4.apply(this
,arguments);},Bu4:function(E){},AZ7:function(Aq){this.AwW(Aq);},UpdatePremisesID:
function(Rn){if(this.Ut===Rn)return;this.Ut=Rn;A.abo([this,this.ASA,this.AZ7],0);
},AwP:function(E){if(this.K&&this.K.AwP)return this.K.AwP.apply(this,arguments);
else return C.DeviceClass.BuS.apply(this,arguments);},BuS:function(E){},AIR:function(
Aq){this.AwP(Aq);},UpdateMotherSelectionDriedOffFilter:function(AL){if(this.AbV===
AL)return;this.AbV=AL;A.abo([this,this.AEz,this.AIR],0);},AE8:function(E){if(this.
K&&this.K.AE8)return this.K.AE8.apply(this,arguments);else return C.DeviceClass.
BuD.apply(this,arguments);},BuD:function(E){},BaP:function(Aq){this.AE8(Aq);},UpdateFreshCowSpan:
function(AL){if(this.AqS===AL)return;this.AqS=AL;A.abo([this,this.A8k,this.BaP],
0);},UpdateUSBState:function(BbS){if(this.AhM===BbS)return;this.AhM=BbS;A.abo([this
,this.Wv,this.Xe],0);},AFS:function(E){if(this.K&&this.K.AFS)return this.K.AFS.apply(
this,arguments);else return C.DeviceClass.Bvl.apply(this,arguments);},Bvl:function(
E){A.ab5("%s",E4);},Xe:function(Aq){this.AFS(Aq);},AnT:function(Ah0){if(this.K&&
this.K.AnT)return this.K.AnT.apply(this,arguments);else return C.DeviceClass.BvK.
apply(this,arguments);},BvK:function(Ah0){return A._NewObject(C.AjE,0);},Arg:function(
){if(this.K&&this.K.Arg)return this.K.Arg.apply(this,arguments);else return C.DeviceClass.
Bt6.apply(this,arguments);},Bt6:function(){return false;},AqD:function(Np){if(this.
K&&this.K.AqD)return this.K.AqD.apply(this,arguments);else return C.DeviceClass.
Bt1.apply(this,arguments);},Bt1:function(Np){},AFD:function(E){if(this.K&&this.K.
AFD)return this.K.AFD.apply(this,arguments);else return C.DeviceClass.Bu9.apply(
this,arguments);},Bu9:function(E){},Bv3:function(Aq){this.AFD(Aq);},UpdateSerialNumber:
function(AL){if(this.AhC===AL)return;this.AhC=AL;A.abo([this,this.BkQ,this.Bv3],
0);},Awk:function(E){if(this.K&&this.K.Awk)return this.K.Awk.apply(this,arguments
);else return C.DeviceClass.Buc.apply(this,arguments);},Buc:function(E){},AZX:function(
Aq){this.Awk(Aq);},UpdateAnimalIdAutoGenerationMethod:function(BbZ){if(this.Ags===
BbZ)return;this.Ags=BbZ;A.abo([this,this.ASg,this.AZX],0);},ACf:function(){return false;
},AGl:function(){return false;},AFF:function(E){if(this.K&&this.K.AFF)return this.
K.AFF.apply(this,arguments);else return C.DeviceClass.Bu_.apply(this,arguments);
},Bu_:function(E){},BaY:function(Aq){this.AFF(Aq);},UpdateShutdownTimer:function(
AL){if(this.AUK===AL)return;this.AUK=AL;A.abo([this,this.A8P,this.BaY],0);},Asr:
function(G){if(this.K&&this.K.Asr)return this.K.Asr.apply(this,arguments);else return C.
DeviceClass.BvG.apply(this,arguments);},BvG:function(G){},BFX:function(s){this.Asr(
s);},Ar$:function(E){if(this.K&&this.K.Ar$)return this.K.Ar$.apply(this,arguments
);else return C.DeviceClass.Bvr.apply(this,arguments);},Bvr:function(E){},Ba6:function(
Aq){this.Ar$(Aq);},Asa:function(E){if(this.K&&this.K.Asa)return this.K.Asa.apply(
this,arguments);else return C.DeviceClass.Bvs.apply(this,arguments);},Bvs:function(
E){},Ba7:function(Aq){this.Asa(Aq);},UpdateWeightGainsLowString:function(AL){if(
this.AHc===AL)return;this.AHc=AL;A.abo([this,this.A85,this.Ba7],0);},UpdateWeightGainsHighString:
function(AL){if(this.AHb===AL)return;this.AHb=AL;A.abo([this,this.A84,this.Ba6],
0);},Awm:function(E){if(this.K&&this.K.Awm)return this.K.Awm.apply(this,arguments
);else return C.DeviceClass.Bui.apply(this,arguments);},Bui:function(E){},BaG:function(
Aq){this.Awm(Aq);},UpdateAnimalTypesWeightGainsString:function(AL){if(this.ABE===
AL)return;this.ABE=AL;A.abo([this,this.A7$,this.BaG],0);},Ar_:function(E){if(this.
K&&this.K.Ar_)return this.K.Ar_.apply(this,arguments);else return C.DeviceClass.
Bvq.apply(this,arguments);},Bvq:function(E){},Ba5:function(Aq){this.Ar_(Aq);},Asb:
function(E){if(this.K&&this.K.Asb)return this.K.Asb.apply(this,arguments);else return C.
DeviceClass.Bvw.apply(this,arguments);},Bvw:function(E){},Ba_:function(Aq){this.
Asb(Aq);},UpdateWeightValueBirthString:function(AL){if(this.AHf===AL)return;this.
AHf=AL;A.abo([this,this.A88,this.Ba_],0);},UpdateWeightGainsAverageString:function(
AL){if(this.AHa===AL)return;this.AHa=AL;A.abo([this,this.A83,this.Ba5],0);},Awz:
function(E){if(this.K&&this.K.Awz)return this.K.Awz.apply(this,arguments);else return C.
DeviceClass.Buz.apply(this,arguments);},Buz:function(E){},BvY:function(Aq){this.
Awz(Aq);},UpdateEvaluationAnimalType:function(Em){if(this.ACA===Em)return;this.ACA=
Em;A.abo([this,this.Bkl,this.BvY],0);},UpdateStartScreen:function(AL){if(this.AxA===
AL)return;this.AxA=AL;A.abo([this,this.BkR,this.Bv4],0);},Aw0:function(E){if(this.
K&&this.K.Aw0)return this.K.Aw0.apply(this,arguments);else return C.DeviceClass.
Bu$.apply(this,arguments);},Bu$:function(E){},Bv4:function(Aq){this.Aw0(Aq);},ADQ:
function(){if(this.K&&this.K.ADQ)return this.K.ADQ.apply(this,arguments);else return C.
DeviceClass.Bt4.apply(this,arguments);},Bt4:function(){return 1;},ADR:function(){
if(this.K&&this.K.ADR)return this.K.ADR.apply(this,arguments);else return C.DeviceClass.
Bt5.apply(this,arguments);},Bt5:function(){return 1;},GetCommitCount:function(){
return 1895;},GetCommitEpoch:function(){return 1710328383;},GetCommitHash:function(
){return A.kR.Bhh;},GetVersionMajor:function(){return 0;},GetVersionMinor:function(
){return 9;},GetVersionRev:function(){return 9;},AFo:function(E){if(this.K&&this.
K.AFo)return this.K.AFo.apply(this,arguments);else return C.DeviceClass.BuO.apply(
this,arguments);},BuO:function(E){},BaT:function(Aq){this.AFo(Aq);},UpdateMaximumAgeNewOnFarm:
function(AL){if(this.AD9===AL)return;this.AD9=AL;A.abo([this,this.A8z,this.BaT],
0);},Aw6:function(E){if(this.K&&this.K.Aw6)return this.K.Aw6.apply(this,arguments
);else return C.DeviceClass.Bvj.apply(this,arguments);},Bvj:function(E){},A0c:function(
Aq){this.Aw6(Aq);},UpdateTransponderAssignmentIdChangeMethod:function(AyW){if(this.
Ak3===AyW)return;this.Ak3=AyW;A.abo([this,this.ASJ,this.A0c],0);},BatchResetPurchasedNoticePending:
function(){var B3=A._NewObject(C.Animal,0);var O;var AiW=0;var Ade=A._GetAutoObject(
C.Device).Am.Filter;var Be=A._GetAutoObject(C.Helper).ACW();A._GetAutoObject(C.Device
).Am.Bl(Be);for(O=0;O<A._GetAutoObject(C.Device).Am.Ca();O++){B3.Er(O,A._GetAutoObject(
C.Device).Am);B3.Ae1(false);B3.Ch(A._GetAutoObject(C.Device).Am);AiW++;}A._GetAutoObject(
C.Device).Am.Bl(Ade);return AiW;},AE1:function(E){if(this.K&&this.K.AE1)return this.
K.AE1.apply(this,arguments);else return C.DeviceClass.Bur.apply(this,arguments);
},Bur:function(E){},AZY:function(Aq){this.AE1(Aq);},UpdateDataExportDestination:
function(AL){if(this.VN===AL)return;this.VN=AL;A.abo([this,this.ASl,this.AZY],0);
},BmE:function(E){},UpdateMassRecordingAutomatic:function(AL){if(this.ARz===AL)return;
this.ARz=AL;A.abo([this,this.BkD,this.BmE],0);},Ne:function(E){if(this.K&&this.K.
Ne)return this.K.Ne.apply(this,arguments);else return C.DeviceClass.Bvx.apply(this
,arguments);},Bvx:function(E){},Bv7:function(Aq){this.Ne(Aq);},UpdateWhereAbouts:
function(AfI){if(this.WhereAbouts===AfI)return;this.WhereAbouts=AfI;A.abo([this,
this.Awh,this.Bv7],0);},ArG:function(E){if(this.K&&this.K.ArG)return this.K.ArG.
apply(this,arguments);else return C.DeviceClass.Bt9.apply(this,arguments);},Bt9:
function(E){},BaA:function(Aq){this.ArG(Aq);},ArH:function(E){if(this.K&&this.K.
ArH)return this.K.ArH.apply(this,arguments);else return C.DeviceClass.Bt_.apply(
this,arguments);},Bt_:function(E){},BaB:function(Aq){this.ArH(Aq);},UpdateActiveMassRecordingFields:
function(AL){if(this.ABx===AL)return;this.ABx=AL;A.abo([this,this.A72,this.BaA],
0);},UpdateActiveMassRecordingFieldsOrder:function(AL){if(this.ABy===AL)return;this.
ABy=AL;A.abo([this,this.A73,this.BaB],0);},Aso:function(G){if(this.K&&this.K.Aso
)return this.K.Aso.apply(this,arguments);else return C.DeviceClass.BvB.apply(this
,arguments);},BvB:function(G){},BFS:function(s){this.Aso(s);},AFm:function(E){if(
this.K&&this.K.AFm)return this.K.AFm.apply(this,arguments);else return C.DeviceClass.
BuL.apply(this,arguments);},BuL:function(E){},AIP:function(Aq){this.AFm(Aq);},UpdateMassRecordingDateOfBirthMandatory:
function(AL){if(this.AeJ===AL)return;this.AeJ=AL;A.abo([this,this.AEw,this.AIP],
0);},AFl:function(E){this.UpdateMassRecordingCounter(E);},UpdateMassRecordingCounter:
function(AL){if(this.AvS===AL)return;this.AvS=AL;A.abo([this,this.A8x,this.AFl],
0);},Ajz:function(){if(this.K&&this.K.Ajz)return this.K.Ajz.apply(this,arguments
);else return C.DeviceClass.BtZ.apply(this,arguments);},BtZ:function(){return false;
},Aqp:function(){if(this.K&&this.K.Aqp)return this.K.Aqp.apply(this,arguments);else
return C.DeviceClass.BtY.apply(this,arguments);},BtY:function(){return false;},Aqo:
function(){if(this.K&&this.K.Aqo)return this.K.Aqo.apply(this,arguments);else return C.
DeviceClass.BtX.apply(this,arguments);},BtX:function(){return false;},AuM:function(
){if(this.K&&this.K.AuM)return this.K.AuM.apply(this,arguments);else return C.DeviceClass.
Bt0.apply(this,arguments);},Bt0:function(){return false;},AwM:function(E){if(this.
K&&this.K.AwM)return this.K.AwM.apply(this,arguments);else return C.DeviceClass.
BuN.apply(this,arguments);},BuN:function(E){},BaS:function(Aq){this.AwM(Aq);},UpdateMaxWeightValuePrecision:
function(AL){if(this.OJ===AL)return;this.OJ=AL;A.abo([this,this.A8y,this.BaS],0);
},AwT:function(E){if(this.K&&this.K.AwT)return this.K.AwT.apply(this,arguments);
else return C.DeviceClass.BuZ.apply(this,arguments);},BuZ:function(E){},BaW:function(
Aq){this.AwT(Aq);},UpdateNoNaisIdListActions:function(AL){if(this.AR0===AL)return;
this.AR0=AL;A.abo([this,this.A8C,this.BaW],0);},ResetNoNaisIdListActions:function(
G){if(this.K&&this.K.ResetNoNaisIdListActions)return this.K.ResetNoNaisIdListActions.
apply(this,arguments);else return C.DeviceClass.BvD.apply(this,arguments);},BvD:
function(G){},BFU:function(s){this.ResetNoNaisIdListActions(s);},AwU:function(E){
if(this.K&&this.K.AwU)return this.K.AwU.apply(this,arguments);else return C.DeviceClass.
Bu0.apply(this,arguments);},Bu0:function(E){},BaX:function(Aq){this.AwU(Aq);},UpdateNoTransponderListActions:
function(AL){if(this.AR5===AL)return;this.AR5=AL;A.abo([this,this.A8D,this.BaX],
0);},ResetNoTransponderListActions:function(G){if(this.K&&this.K.ResetNoTransponderListActions
)return this.K.ResetNoTransponderListActions.apply(this,arguments);else return C.
DeviceClass.BvE.apply(this,arguments);},BvE:function(G){},BFV:function(s){this.ResetNoTransponderListActions(
s);},Axa:function(E){if(this.K&&this.K.Axa)return this.K.Axa.apply(this,arguments
);else return C.DeviceClass.Bvy.apply(this,arguments);},Bvy:function(E){},Ba$:function(
Aq){this.Axa(Aq);},UpdateYoungNoTransponderListActions:function(AL){if(this.AVN===
AL)return;this.AVN=AL;A.abo([this,this.A8_,this.Ba$],0);},ResetYoungNoTransponderListActions:
function(G){if(this.K&&this.K.ResetYoungNoTransponderListActions)return this.K.ResetYoungNoTransponderListActions.
apply(this,arguments);else return C.DeviceClass.BvH.apply(this,arguments);},BvH:
function(G){},BFY:function(s){this.ResetYoungNoTransponderListActions(s);},Aw7:function(
E){if(this.K&&this.K.Aw7)return this.K.Aw7.apply(this,arguments);else return C.DeviceClass.
Bvk.apply(this,arguments);},Bvk:function(E){},A0d:function(Aq){this.Aw7(Aq);},UpdateTransponderUnlinkIdChangeMethod:
function(AyW){if(this.An4===AyW)return;this.An4=AyW;A.abo([this,this.ASK,this.A0d
],0);},AEp:function(){return this.KG;},Av3:function(){return this.Aa3;},Av6:function(
){return this.Amz;},ASD:function(){return this.ScanState;},AEx:function(){return this.
MeasureState;},AEB:function(){return this.Lr;},A8t:function(){return this.Language;
},Arz:function(){return this.TemperatureUnit;},A8e:function(){return this.AM1;},
ASu:function(){return this.AEc;},Awg:function(){return this.OverlayMenu;},A8X:function(
){return this.AcF;},ASF:function(){return this.SyncState;},A8Y:function(){return this.
AsO;},AEC:function(){return this.AVw;},ASC:function(){return this.RatingMode;},Arw:
function(){return this.AmN;},ASH:function(){return this.AVc;},BkJ:function(){return this.
AT0;},Bj9:function(){return this.AutoRegistrationMode;},ASE:function(){return this.
OQ;},Uf:function(){return this.A1;},Ug:function(){return this.AF;},AED:function(
){return this.KW;},ASt:function(){return this.MassUnit;},A71:function(){return this.
Ph;},ASf:function(){return this.Auy;},A8a:function(){return this.AutoActions;},PM:
function(){return this.AnimalType;},A86:function(){return this.WeightRecordingMode;
},ASz:function(){return this.AF8;},AEu:function(){return this.HB;},A76:function(
){return this.AdO;},A87:function(){return this.WeightRecordingScope;},Wu:function(
){return this.Gender;},Av$:function(){return this.Aq6;},Av_:function(){return this.
Aq5;},AEr:function(){return this.Kg;},A78:function(){return this.AL$;},A8h:function(
){return this.AmM;},AEq:function(){return this.D9;},A82:function(){return this.AVy;
},A8j:function(){return this.AOC;},A7_:function(){return this.ABD;},A8S:function(
){return this.AGS;},A8T:function(){return this.AGT;},A8l:function(){return this.
AqT;},A8B:function(){return this.AEe;},A8A:function(){return this.AEd;},Awd:function(
){return this.ARN;},Awc:function(){return this.ARM;},A8d:function(){return this.
Aqt;},A7Z:function(){return this.ABw;},A70:function(){return this.Aqf;},Anm:function(
){return this.Ig;},ASm:function(){return this.ACs;},ASn:function(){return this.ACt;
},AEv:function(){return this.AuY;},Anp:function(){return this.AjU;},ASv:function(
){return this.AvY;},Awe:function(){return this.ARO;},Av9:function(){return this.
EartagNrAssignmentMode;},Av5:function(){return this.Breed;},BkE:function(){return this.
Sw;},BkC:function(){return this.QW;},Bk1:function(){return this.SU;},Bka:function(
){return this.RX;},A8f:function(){return this.ANZ;},AEs:function(){return this.Aqr;
},ASI:function(){return this.AxI;},A8W:function(){return this.Afm;},ASA:function(
){return this.Ut;},AEz:function(){return this.AbV;},A8k:function(){return this.AqS;
},Wv:function(){return this.AhM;},BkQ:function(){return this.AhC;},ASg:function(
){return this.Ags;},A8P:function(){return this.AUK;},A84:function(){return this.
AHb;},A85:function(){return this.AHc;},A7$:function(){return this.ABE;},A83:function(
){return this.AHa;},A88:function(){return this.AHf;},Bkl:function(){return this.
ACA;},BkR:function(){return this.AxA;},A8z:function(){return this.AD9;},ASJ:function(
){return this.Ak3;},ASl:function(){return this.VN;},BkD:function(){return this.ARz;
},Awh:function(){return this.WhereAbouts;},A72:function(){return this.ABx;},A73:
function(){return this.ABy;},AEw:function(){return this.AeJ;},A8x:function(){return this.
AvS;},A8y:function(){return this.OJ;},A8C:function(){return this.AR0;},A8D:function(
){return this.AR5;},A8_:function(){return this.AVN;},ASK:function(){return this.
An4;},_Init:function(aArg){C.Table._Init.call(this.Am={I:this},0);C.Table._Init.
call(this.Bt={I:this},0);C.Table._Init.call(this.Agq={I:this},0);A.Core.A$f._Init.
call(this.AnL={I:this},0);C.Table._Init.call(this.Pl={I:this},0);this.__proto__=
C.DeviceClass;this.Am.OnSetId(0);this.Bt.OnSetId(1);this.Agq.OnSetId(3);this.Pl.
OnSetId(4);this.OQ=A._NewObject(C.Transponder,0);this.Sw=A._NewObject(C.Axy,0);this.
QW=A._NewObject(C.Avo,0);this.SU=A._NewObject(C.Avo,0);this.RX=A._NewObject(C.Axy
,0);var Lv=this._variants();if(Lv){this.K={};Lv._Init.call(this,aArg);}A.h7++;},
_Done:function(){if(this.K)this.K._Done.call(this);this.__proto__=null;this.Am._Done(
);this.Bt._Done();this.Agq._Done();this.AnL._Done();this.Pl._Done();A.h7--;},_ReInit:
function(){this.Am._ReInit();this.Bt._ReInit();this.Agq._ReInit();this.AnL._ReInit(
);this.Pl._ReInit();if(this.K)this.K._ReInit.call(this);},_Mark:function(D){var B;
if((B=this.OQ)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Sw)&&(B._cycle!=D))
B._Mark(B._cycle=D);if((B=this.QW)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.
SU)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.RX)&&(B._cycle!=D))B._Mark(B._cycle=
D);if((B=this.Am)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Bt)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Agq)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AnL)._cycle
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
A4:A.jV,Abi:function(){var Av=A._NewObject(C.StringFilterCriterion,0);Av.E8(this
);return Av;},E8:function(AH){C.FilterCriterion.E8.call(this,AH);var Av=(C.StringFilterCriterion.
isPrototypeOf(AH)?AH:null);if(!!Av)this.A4=Av.A4;},_Init:function(aArg){C.FilterCriterion.
_Init.call(this,aArg);this.__proto__=C.StringFilterCriterion;},_className:"Device::StringFilterCriterion"
};C.Table={CE:function(Ad,A3){if(this.K&&this.K.CE)return this.K.CE.apply(this,arguments
);else return C.ITable.CE.apply(this,arguments);},VV:function(Ad,A3){if(this.K&&
this.K.VV)return this.K.VV.apply(this,arguments);else return C.ITable.VV.apply(this
,arguments);},H1:function(Ad,A3){if(this.K&&this.K.H1)return this.K.H1.apply(this
,arguments);else return C.ITable.H1.apply(this,arguments);},OnSetId:function(E){
if(this.K&&this.K.OnSetId)return this.K.OnSetId.apply(this,arguments);else return C.
ITable.OnSetId.apply(this,arguments);},Ca:function(){if(this.K&&this.K.Ca)return this.
K.Ca.apply(this,arguments);else return C.ITable.Ca.apply(this,arguments);},Bl:function(
E){if(this.K&&this.K.Bl)return this.K.Bl.apply(this,arguments);else return C.ITable.
Bl.apply(this,arguments);},VX:function(Ad,A3){if(this.K&&this.K.VX)return this.K.
VX.apply(this,arguments);else return C.ITable.VX.apply(this,arguments);},Sh:function(
Ad,A3){if(this.K&&this.K.Sh)return this.K.Sh.apply(this,arguments);else return C.
ITable.Sh.apply(this,arguments);},Ox:function(){if(this.K&&this.K.Ox)return this.
K.Ox.apply(this,arguments);else return C.ITable.Ox.apply(this,arguments);},Oz:function(
AoR){if(this.K&&this.K.Oz)return this.K.Oz.apply(this,arguments);else return C.ITable.
Oz.apply(this,arguments);},YF:function(){if(this.K&&this.K.YF)return this.K.YF.apply(
this,arguments);else return C.ITable.YF.apply(this,arguments);},ZK:function(Ad,A3
,C0){if(this.K&&this.K.ZK)return this.K.ZK.apply(this,arguments);else return C.ITable.
ZK.apply(this,arguments);},Hj:function(Ad,A3,C0){if(this.K&&this.K.Hj)return this.
K.Hj.apply(this,arguments);else return C.ITable.Hj.apply(this,arguments);},ZJ:function(
Ad,A3,C0){if(this.K&&this.K.ZJ)return this.K.ZJ.apply(this,arguments);else return C.
ITable.ZJ.apply(this,arguments);},N4:function(Ad,A3,C0){if(this.K&&this.K.N4)return this.
K.N4.apply(this,arguments);else return C.ITable.N4.apply(this,arguments);},ZI:function(
Ad,A3,C0){if(this.K&&this.K.ZI)return this.K.ZI.apply(this,arguments);else return C.
ITable.ZI.apply(this,arguments);},LS:function(aColumn,A7){if(this.K&&this.K.LS)return this.
K.LS.apply(this,arguments);else return C.ITable.LS.apply(this,arguments);},KM:function(
Ad,A3){if(this.K&&this.K.KM)return this.K.KM.apply(this,arguments);else return C.
ITable.KM.apply(this,arguments);},Ux:function(Ad,A3,C0){if(this.K&&this.K.Ux)return this.
K.Ux.apply(this,arguments);else return C.ITable.Ux.apply(this,arguments);},AgQ:function(
aColumn,A7){if(this.K&&this.K.AgQ)return this.K.AgQ.apply(this,arguments);else return C.
ITable.AgQ.apply(this,arguments);},Hi:function(){if(this.K&&this.K.Hi)return this.
K.Hi.apply(this,arguments);else return C.ITable.Hi.apply(this,arguments);},AjJ:function(
aColumn,A7){if(this.K&&this.K.AjJ)return this.K.AjJ.apply(this,arguments);else return C.
ITable.AjJ.apply(this,arguments);},Aeh:function(aColumn,A7){if(this.K&&this.K.Aeh
)return this.K.Aeh.apply(this,arguments);else return C.ITable.Aeh.apply(this,arguments
);},HG:function(){if(this.K&&this.K.HG)return this.K.HG.apply(this,arguments);else
return C.ITable.HG.apply(this,arguments);},Abq:function(){if(this.K&&this.K.Abq)
return this.K.Abq.apply(this,arguments);else return C.ITable.Abq.apply(this,arguments
);},QF:function(){if(this.K&&this.K.QF)return this.K.QF.apply(this,arguments);else
return C.ITable.QF.apply(this,arguments);},_Init:function(aArg){C.ITable._Init.call(
this,aArg);this.__proto__=C.Table;var Lv=this._variants();if(Lv){this.K={};Lv._Init.
call(this,aArg);}},_Done:function(){if(this.K)this.K._Done.call(this);this.__proto__=
C.ITable;C.ITable._Done.call(this);},_ReInit:function(){C.ITable._ReInit.call(this
);if(this.K)this.K._ReInit.call(this);},_Mark:function(D){C.ITable._Mark.call(this
,D);if(this.K)this.K._Mark(D);},_variants:function(){return A.acs.Table._variants(
);},K:null,_className:"Device::Table"};C.TableId={Animal:0,Rating:1,Undefined:2,
AnimalGroup:3,CalfDeregistrations:4};C.ScanState={Idle:0,Progress:1,IdScanned:2,
NotFound:3,Error:4,LAST:5};C.RatedAttribute={None:0,Feed:1,Appearance:2,Respiratory:
3,Faeces:4};C.ConverterClass={MZ:null,Ak0:function(AoP){var Bcx;var Auk=this.AU3(
AoP/100,0,A._GetAutoObject(C.Device).TemperatureUnit);Bcx=A.abk(Auk,0,1);return Bcx;
},A$n:function(Nm){if(Nm<=0)return 0;else if(Nm<=1)return 5;else if(Nm<=2)return 3;
else if(Nm<=4)return 2;else if(Nm<=6)return 1;else if(Nm<=8)return 4;else return 0;
},AdX:function(Nm){var a=0;switch(Nm){case 3:a=2;break;case 2:a=4;break;case 1:a=
6;break;case 0:a=0;break;case 4:a=8;break;case 5:a=1;break;default:A.ab5("%s",N_
);}return a;},AsG:function(Em,Rr){var Nq=A._GetAutoObject(C.Converter).Ajl(Rr,Em
);switch(Nq){case 3:return 1;case 2:return 2;case 1:return 3;case 0:return 4;default:
throw new Error(P5+Nq.toFixed());}},AhK:function(){var B;var D8=A._NewObject(A.Core.
Bs,0).Initialize(A._GetAutoObject(C.Helper).Dv());D8.Any(0);D8.AnB(0);D8.AnE(0);
return((B=(D8.JN()|0))<0)?B+0x100000000:B;},Bhl:function(Atj){var Dm;switch(Atj){
case 36:Dm=ME;break;case 40:Dm=S5;break;case 56:Dm=UP;break;case 70:Dm=Z4;break;
case 100:Dm=W2;break;case 124:Dm=Iq;break;case 156:Dm=UQ;break;case 158:Dm=Z5;break;
case 191:Dm=W3;break;case 196:Dm=Z6;break;case 203:Dm=W4;break;case 208:Dm=Z7;break;
case 233:Dm=Z8;break;case 246:Dm=UR;break;case 250:Dm=W5;break;case 276:Dm=P6;break;
case 300:Dm=Z9;break;case 348:Dm=O2;break;case 372:Dm=Ri;break;case 380:Dm=W6;break;
case 392:Dm=W7;break;case 428:Dm=W8;break;case 440:Dm=W9;break;case 442:Dm=Z_;break;
case 470:Dm=W_;break;case 528:Dm=W$;break;case 578:Dm=S6;break;case 616:Dm=US;break;
case 620:Dm=UT;break;case 642:Dm=AcM;break;case 643:Dm=S7;break;case 703:Dm=Z$;break;
case 705:Dm=Afw;break;case 724:Dm=Aaa;break;case 752:Dm=Xa;break;case 756:Dm=Aab;
break;case 792:Dm=Aac;break;case 804:Dm=AhP;break;case 826:Dm=JZ;break;case 840:
Dm=Aad;break;default:Dm=Atj.toFixed();}return Dm;},Ak9:function(MJ){var Aas;if((
MJ<10000)&&(A._GetAutoObject(C.Device).OJ===2))Aas=2;else if((MJ<100000)&&!!A._GetAutoObject(
C.Device).OJ)Aas=1;else Aas=0;return this.S3(MJ,Aas,false);},AxV:function(MJ,Aas
){return this.S3(MJ,Aas,false);},S3:function(MJ,Aas,Bzs){var B;var AlB=A.jV;switch(
A._GetAutoObject(C.Device).MassUnit){case 0:if(Bzs)AlB=A.abl(MJ,0,0);else{var BdU=
MJ<0;if(Aas<3)MJ=MJ+(((BdU?-1:1)*5)*(Math.pow(10,2-Aas)|0));AlB=(((((B=MJ)>-2147483648
)?Math.abs(B):B)/1000)|0).toFixed();if(Aas>0)AlB=AlB+(Lu+A.abV(A.abl((((B=MJ)>-2147483648
)?Math.abs(B):B)%1000,3,10),Aas));if(BdU)AlB=AhQ+AlB;}break;case 1:AlB=A.abk(MJ/
453.592,0,Aas);break;default:A.ab5("%s%s",Aoc,A._GetAutoObject(C.Device).MassUnit.
toFixed());}return AlB;},Rf:function(Jf){var A3$=Jf.toFixed();var Bga=A3$.length;
if((Bga>=14)&&(Bga<=15)){var A16=this.AxL(Jf);var Byh=A._GetAutoObject(C.Converter
).Bhl(A16);A3$=(Byh+N$)+A.abm(A._GetAutoObject(C.Helper).Sf(Jf,0,12),12,10);}return A3$;
},AmQ:function(L3){switch(L3){case 0:return A.aaL(A.ach.AQu);case 1:return A.aaL(
A.ach.ADy);case 2:return A.aaL(A.ach.ADD);default:{A.ab5("%s%e",Xb,L3);return null;
}}},A4N:function(BxP){switch(BxP){case 0:return A.aaL(A.ach.Avy);case 1:return A.
aaL(A.ach.ADu);case 2:return A.aaL(A.ach.AQo);default:throw new Error(Aod);}},AdV:
function(AJk){switch(AJk){case 0:case 14:return A.aaL(A.ach.AjV);case 2:return A.
aaL(A.ach.AmY);case 1:return A.aaL(A.ach.AbC);case 3:switch(A._GetAutoObject(C.Device
).MassUnit){case 0:return A.aaL(A.ach.AvH);case 1:return A.aaL(A.ach.AvI);default:
throw new Error(AhR+A._GetAutoObject(C.Device).MassUnit.toFixed());}break;case 4:
return A.aaL(A.ach.APQ);case 5:return A.aaL(A.ach.APR);case 6:return A.aaL(A.ach.
APW);case 7:return A.aaL(A.ach.APe);case 8:case 13:return A.aaL(A.ach.APl);case 9:
return A.aaL(A.ach.AC6);case 10:return A.aaL(A.ach.APk);case 12:return A.aaL(A.ach.
APm);case 11:return A.aaL(A.ach.ADs);default:throw new Error(AhS+AJk.toFixed());
}},BgN:function(Ay0){switch(Ay0){case 0:return A.aaL(A.ach.ADB);case 3:return A.
aaL(A.ach.AmY);case 1:return A.aaL(A.ach.AbC);case 2:return A._GetAutoObject(A.acj.
DV).BcW();default:throw new Error(AhS+Ay0.toFixed());}},Bhk:function(Atj){switch(
Atj){case 977:return Rj;case 978:return UU;case 980:return Aoe;case 981:return Aof;
case 982:return Aog;case 983:return Aoh;case 984:return Afx;case 985:return Ala;
default:return A.aaR(A.acf.Unknown);}},BhE:function(AcX){switch(AcX){case 1:return 0x278A;
case 2:return 0x278B;case 3:return 0x278C;case 4:return 0x278D;case 5:return 0x278E;
case 6:return 0x278F;case 7:return 0x2790;case 8:return 0x2791;case 9:return 0x2792;
case 10:return 0x2793;default:return 0x20;}},Bpr:function(Jf){if(!Jf)return-1;return(
Jf%100000000)|0;},Bia:function(AoO,aFilter){var B;if(!aFilter)return Aoi;var Apg=
AxX;var Av=aFilter.AOK();while(!!Av){Apg=Apg+A._GetAutoObject(C.Helper).A6s(AoO,
Av);Av=aFilter.AOP(Av);if(!!Av)Apg=Apg+O3;}Apg=Apg+Rk;return Apg;},A68:function(
BbD){var MG=0;switch(BbD){case 14:MG=2;break;case 13:MG=4;break;case 6:MG=36;break;
case 11:MG=9;break;case 0:MG=39;break;case 10:MG=26;break;case 12:MG=12;break;case
5:MG=14;break;case 3:MG=15;break;case 1:MG=10;break;case 8:MG=16;break;case 4:MG=
20;break;case 15:MG=27;break;case 9:MG=31;break;case 2:MG=13;break;case 7:MG=35;
break;case 16:MG=37;break;default:A.ab5("%s%e",AxY,BbD);}return MG;},BgM:function(
Ay0){switch(Ay0){case 0:return 1;case 3:return 0;case 1:return 2;case 2:switch(A.
_GetAutoObject(C.Device).MassUnit){case 0:return 3;case 1:return 4;default:throw new
Error(AhR+A._GetAutoObject(C.Device).MassUnit.toFixed());}break;default:throw new
Error(AhS+Ay0.toFixed());}},BgO:function(AoZ){switch(AoZ){case 0:return A.aaL(A.
ach.APN);case 1:return A.aaL(A.ach.ADB);case 9:return A.aaL(A.ach.APY);case 4:return A.
aaL(A.ach.AGj);case 6:return A.aaL(A.ach.Asm);case 8:return A.aaL(A.ach.Avs);case
2:return A.aaL(A.ach.AbC);case 3:return A.aaL(A.ach.AmY);case 10:switch(A._GetAutoObject(
C.Device).MassUnit){case 0:return A.aaL(A.ach.AvH);case 1:return A.aaL(A.ach.AvI
);default:throw new Error(AhR+A._GetAutoObject(C.Device).MassUnit.toFixed());}break;
case 7:case 5:case 11:case 12:case 13:case 14:case 18:case 15:case 16:case 17:return A.
aaL(A.aci.TJ);default:throw new Error(UV+AoZ.toFixed());}},ANy:function(Atj){switch(
Atj){case 40:return 1;case 56:return 3;case 70:return 2;case 100:return 4;case 124:
return 5;case 156:return 7;case 158:return 36;case 191:return 17;case 196:return 8;
case 203:return 9;case 208:return 11;case 233:return 12;case 246:return 14;case 250:
return 15;case 276:return 10;case 300:return 16;case 348:return 18;case 372:return 19;
case 380:return 20;case 392:return 21;case 428:return 24;case 440:return 22;case
442:return 23;case 470:return 25;case 528:return 26;case 578:return 27;case 616:
return 28;case 620:return 29;case 642:return 30;case 643:return 31;case 703:return 34;
case 705:return 33;case 724:return 13;case 752:return 32;case 756:return 6;case 792:
return 35;case 804:return 37;case 826:return 38;case 840:return 39;default:return 0;
}},ZZ:function(Jf){var A16=this.AxL(Jf);return this.ANy(A16);},AxL:function(Jf){
return A._GetAutoObject(C.Helper).Sf(Jf,12,3)|0;},A$G:function(AoT,Em){if(AoT<A.
_GetAutoObject(C.Helper).AC2(Em))return 1;else if(AoT<A._GetAutoObject(C.Helper).
AC1(Em))return 2;else return 3;},ACO:function(Bxt){switch(Bxt){case 1:return 1;case
2:return 2;case 3:return 3;case 4:return 4;case 5:return 5;case 6:return 6;case 7:
return 7;case 8:return 8;case 9:return 9;case 10:return 10;case 11:return 11;case
12:return 12;case 13:return 13;case 14:return 14;case 15:return 15;case 16:return 16;
default:return 0;}},AU3:function(A7,AJc,AJd){if(AJc===AJd)return A7;if(!AJc&&(AJd===
1)){var result=((A7*9)/5)+32;return result;}if((AJc===1)&&!AJd){var result=((A7-
32)*5)/9;return result;}throw new Error(((AsU+AJc.toFixed())+AxZ)+AJd.toFixed());
},A6b:function(Eb){switch(Eb){case 0:return Ax0;case 1:return A.jV;case 2:return Ax1;
case 3:return Aoj;case 4:return A.aaR(A.acf.Contains);case 5:return Afy;default:{
A.ab5("%s%e",Aok,Eb);return A.jV;}}},A5a:function(AcW){return this.MZ.Aeg(AcW);}
,BiV:function(AcW){return this.MZ.AmB(AcW);},Bg5:function(Ati){var AAj=0;switch(
Ati){case 0:AAj=1;break;case 1:AAj=2;break;case 2:AAj=3;break;case 3:AAj=4;break;
default:A.ab5("%s%e",IR,Ati);}return AAj;},Ajl:function(A0u,Em){if(A0u>=A._GetAutoObject(
C.Helper).A6n(Em))return 3;else if(A0u>=A._GetAutoObject(C.Helper).ACP(Em))return 2;
else if(A0u<A._GetAutoObject(C.Device).AcF)return 0;else return 1;},AqA:function(
MG){var BO=-1;switch(MG){case 0:BO=0;break;case 1:BO=40;break;case 2:BO=70;break;
case 3:BO=56;break;case 4:BO=100;break;case 5:BO=124;break;case 6:BO=756;break;case
7:BO=156;break;case 8:BO=196;break;case 9:BO=203;break;case 10:BO=276;break;case
11:BO=208;break;case 12:BO=233;break;case 13:BO=724;break;case 14:BO=246;break;case
15:BO=250;break;case 16:BO=300;break;case 17:BO=191;break;case 18:BO=348;break;case
19:BO=372;break;case 20:BO=380;break;case 21:BO=392;break;case 22:BO=440;break;case
23:BO=442;break;case 24:BO=428;break;case 25:BO=470;break;case 26:BO=528;break;case
27:BO=578;break;case 28:BO=616;break;case 29:BO=620;break;case 30:BO=642;break;case
31:BO=643;break;case 32:BO=752;break;case 33:BO=705;break;case 34:BO=703;break;case
35:BO=792;break;case 36:BO=158;break;case 37:BO=804;break;case 38:BO=826;break;case
39:BO=840;break;default:throw new Error(Aol+MG.toFixed());}return BO;},Bpv:function(
Jf){return A._GetAutoObject(C.Helper).Sf(Jf,8,2)|0;},Bpu:function(Jf){var Bzo=this.
Bpv(Jf);return this.ACO(Bzo);},_Init:function(aArg){C.MZ._Init.call(this.MZ={I:this
},0);this.__proto__=C.ConverterClass;A.h7++;},_Done:function(){this.__proto__=null;
this.MZ._Done();A.h7--;},_ReInit:function(){this.MZ._ReInit();},_Mark:function(D
){var B;if((B=this.MZ)._cycle!=D)B._Mark(B._cycle=D);if((B=this.I)&&(B._cycle!=D
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
false,IsAlarm:false,Er:function(Ad,AI){var HA=C.Row.Er.call(this,Ad,AI);if(HA&&!
!AI){this.OnSetId(AI.CE(Ad,0));this.SC(AI.CE(Ad,1));this.Ab4(AI.CE(Ad,2));this.AnA(
AI.CE(Ad,3));this.Q1(AI.HF(Ad,4));this.JP(AI.AOM(Ad,7));this.Akv(AI.Bis(Ad,6));this.
EC(AI.AmR(Ad,14));this.PP(AI.KM(Ad,22));this.Nc(AI.KM(Ad,26));this.Aw$(AI.I2(Ad,
13));this.AeY(AI.H1(Ad,8));this.Aw3(AI.HF(Ad,15));this.ATy(AI.HF(Ad,31));this.Ae4(
AI.A6B(Ad,5));this.AS8(AI.I2(Ad,17));this.Ul(AI.H1(Ad,11));this.ATx(AI.HF(Ad,16)
);this.ATA(AI.HF(Ad,30));this.AkB(AI.H1(Ad,9));this.Ae2(AI.H1(Ad,12));this.ATz(AI.
HF(Ad,20));this.Aw5(AI.HF(Ad,21));this.Ae0(AI.H1(Ad,10));this.AwH(AI.H1(Ad,27));
this.AFf(AI.ACX(Ad,18));this.AFJ(AI.HF(Ad,19));this.AwC(AI.ACX(Ad,23));this.Aw4(
AI.HF(Ad,24));this.AS0(AI.CE(Ad,25));this.Awt(AI.HF(Ad,28));this.AwI(AI.CE(Ad,29
));this.ArV(AI.H1(Ad,38));this.NY(AI.Bit(Ad,32));this.Akx(AI.Biy(Ad,33));this.AnC(
AI.KM(Ad,35));this.Ne(AI.AOU(Ad,34));this.Ae1(AI.H1(Ad,37));this.AFx(AI.BiH(Ad,36
));}return HA;},Ch:function(AI){var HA=C.Row.Ch.call(this,AI);if(HA&&!!AI){var Jk=
AI.Ox();if(Jk<=0)A.ab5("%s",Xc);else{var AzY=this.Am3();if(AzY)this.CL=AI.YF();else
AI.Hj(this.CL,0,this.Id);AI.Hj(this.CL,1,this.VisualId);AI.Hj(this.CL,2,this.GroupId
);AI.Hj(this.CL,3,this.LocationId);AI.Acm(this.CL,4,this.DateOfBirth);AI.Boj(this.
CL,7,this.Gender);AI.Bof(this.CL,6,this.BirthType);AI.Bod(this.CL,14,this.AnimalType
);AI.Ux(this.CL,22,this.TransponderId);AI.Ux(this.CL,26,this.NaisId);AI.AkR(this.
CL,13,this.WorstAssessment);AI.N4(this.CL,8,this.IsAlarm);AI.Acm(this.CL,15,this.
TimestampAlarm);AI.N4(this.CL,11,this.IsFever);AI.Acm(this.CL,16,this.TimestampExpirationFeverAlarm
);AI.N4(this.CL,9,this.IsControl);AI.N4(this.CL,12,this.IsWatch);AI.Acm(this.CL,
20,this.TimestampLastControl);AI.Acm(this.CL,21,this.TimestampLastWatch);AI.N4(this.
CL,10,this.IsRegistered);AI.N4(this.CL,27,this.IsPerished);AI.Acm(this.CL,28,this.
DateOfLastCalving);AI.Hj(this.CL,29,this.LactationNumber);AI.N4(this.CL,38,this.
IsDry);AI.Boh(this.CL,32,this.Breed);AI.Boi(this.CL,33,this.EaseOfDelivery);AI.Ux(
this.CL,35,this.NaisIdMother);AI.Bop(this.CL,34,this.WhereAbouts);AI.N4(this.CL,
37,this.IsRegistrationNoticePending);AI.Bon(this.CL,36,this.ReasonOfLeaving);HA=
AI.Oz(Jk);if(AzY)this.OnSetId(AI.Abq());}}return HA;},Gn:function(){C.Row.Gn.call(
this);this.OnSetId(-1);this.Ae0(true);},Hi:function(){C.Row.Hi.call(this);this.OnSetId(
0);this.SC(0);this.Ab4(0);this.AnA(0);this.Q1(0);this.JP(A._GetAutoObject(C.Device
).Gender);this.Akv(0);this.EC(A._GetAutoObject(C.Device).AnimalType);this.PP(0);
this.Nc(0);this.Aw$(0);this.AeY(false);this.Aw3(0);this.ATy(0);this.Ae4(0);this.
AS8(0);this.Ul(false);this.ATA(0);this.ATx(0);this.AkB(false);this.Ae2(false);this.
ATz(0);this.Aw5(0);this.Ae0(false);this.AwH(false);this.AFf(0);this.AFJ(0);this.
AwC(0);this.Aw4(0);this.AS0(-1);this.Awt(0);this.AwI(0);this.ArV(false);this.NY(
0);this.Akx(0);this.AnC(0);this.Ne(0);this.Ae1(false);this.AFx(0);},OnSetId:function(
E){if(this.Id===E)return;this.Id=E;A.abo([this,this.QZ,this.OnSetId],0);},SC:function(
E){if(this.VisualId===E)return;this.VisualId=E;A.abo([this,this.ArB,this.SC],0);
},Ab4:function(E){if(this.GroupId===E)return;this.GroupId=E;A.abo([this,this.Bks
,this.Ab4],0);},Q1:function(E){if(this.DateOfBirth===E)return;this.DateOfBirth=E;
A.abo([this,this.Av7,this.Q1],0);},JP:function(E){if(this.Gender===E)return;this.
Gender=E;A.abo([this,this.Wu,this.JP],0);},Akv:function(E){if(this.BirthType===E
)return;this.BirthType=E;A.abo([this,this.ASj,this.Akv],0);},AnA:function(E){if(
this.LocationId===E)return;this.LocationId=E;A.abo([this,this.A8w,this.AnA],0);}
,Ae4:function(E){if(this.LastTemperature===E)return;this.LastTemperature=E;A.abo([
this,this.A8v,this.Ae4],0);},AeY:function(E){if(this.IsAlarm===E)return;this.IsAlarm=
E;A.abo([this,this.A8n,this.AeY],0);},AkB:function(E){if(this.IsControl===E)return;
this.IsControl=E;A.abo([this,this.Bkv,this.AkB],0);},Ae0:function(E){if(this.IsRegistered===
E)return;this.IsRegistered=E;A.abo([this,this.Bky,this.Ae0],0);},Ae2:function(E){
if(this.IsWatch===E)return;this.IsWatch=E;A.abo([this,this.A8r,this.Ae2],0);},Aw$:
function(E){if(this.WorstAssessment===E)return;this.WorstAssessment=E;A.abo([this
,this.A89,this.Aw$],0);},Ul:function(E){if(this.IsFever===E)return;this.IsFever=
E;A.abo([this,this.A8o,this.Ul],0);},ATz:function(E){if(this.TimestampLastControl===
E)return;this.TimestampLastControl=E;A.abo([this,this.BkY,this.ATz],0);},Aw5:function(
E){if(this.TimestampLastWatch===E)return;this.TimestampLastWatch=E;A.abo([this,this.
Bk0,this.Aw5],0);},AS8:function(E){if(this.LastRatingTemperature===E)return;this.
LastRatingTemperature=E;A.abo([this,this.BkB,this.AS8],0);},ATx:function(E){if(this.
TimestampExpirationFeverAlarm===E)return;this.TimestampExpirationFeverAlarm=E;A.
abo([this,this.BkW,this.ATx],0);},Aw3:function(E){if(this.TimestampAlarm===E)return;
this.TimestampAlarm=E;A.abo([this,this.BkV,this.Aw3],0);},EC:function(E){if(this.
AnimalType===E)return;this.AnimalType=E;A.abo([this,this.PM,this.EC],0);},AFf:function(
E){if(this.LastBodyWeight===E)return;this.LastBodyWeight=E;A.abo([this,this.A8u,
this.AFf],0);},AFJ:function(E){if(this.TimestampLastWeighing===E)return;this.TimestampLastWeighing=
E;A.abo([this,this.A8V,this.AFJ],0);},PP:function(E){if(this.TransponderId===E)return;
this.TransponderId=E;A.abo([this,this.ArA,this.PP],0);},RL:function(){return A._GetAutoObject(
C.Helper).MM(this.DateOfBirth,A._GetAutoObject(C.Helper).Dv());},AwC:function(E){
if(this.FirstBodyWeight===E)return;this.FirstBodyWeight=E;A.abo([this,this.ASp,this.
AwC],0);},Aw4:function(E){if(this.TimestampFirstWeighing===E)return;this.TimestampFirstWeighing=
E;A.abo([this,this.ASG,this.Aw4],0);},Arf:function(){var Td=A._NewObject(A.Core.
Bs,0);Td.Initialize(this.DateOfBirth);var A1T=A._NewObject(A.Core.Bs,0);A1T.Initialize(
this.TimestampFirstWeighing);if(((Td.Year===A1T.Year)&&(Td.Ab0()===A1T.Ab0()))&&(
this.FirstBodyWeight>0))return true;else return false;},AhO:function(AI8){var AaC;
var Aup;if(this.TimestampLastWeighing>0){Aup=this.TimestampLastWeighing;AaC=this.
LastBodyWeight;}else{Aup=this.DateOfBirth;AaC=A._GetAutoObject(C.Helper).Abp(this.
AnimalType);}return A._GetAutoObject(C.Helper).AhO(AaC,Aup,AI8,this.AnimalType);
},AS0:function(E){if(this.FirstBodyWeightId===E)return;this.FirstBodyWeightId=E;
A.abo([this,this.Bkr,this.AS0],0);},AnR:function(BbY){this.AeY(BbY);if(BbY){if(!
this.TimestampAlarm)this.Aw3(A._GetAutoObject(C.Helper).Dv());}else this.Aw3(0);
},Nc:function(E){if(this.NaisId===E)return;this.NaisId=E;A.abo([this,this.Anq,this.
Nc],0);},AGz:function(BbU){this.Ae2(BbU);if(BbU){if(!this.TimestampLastWatch)this.
Aw5(A._GetAutoObject(C.Helper).Dv());}else this.Aw5(0);},Awt:function(E){if(this.
DateOfLastCalving===E)return;this.DateOfLastCalving=E;A.abo([this,this.Bkh,this.
Awt],0);},AwI:function(E){if(this.LactationNumber===E)return;this.LactationNumber=
E;A.abo([this,this.BkA,this.AwI],0);},AwH:function(E){if(this.IsPerished===E)return;
this.IsPerished=E;A.abo([this,this.Bkx,this.AwH],0);},ATA:function(E){if(this.TimestampLastTemperature===
E)return;this.TimestampLastTemperature=E;A.abo([this,this.BkZ,this.ATA],0);},ATy:
function(E){if(this.TimestampLastAssessment===E)return;this.TimestampLastAssessment=
E;A.abo([this,this.BkX,this.ATy],0);},NY:function(E){if(this.Breed===E)return;this.
Breed=E;A.abo([this,this.Av5,this.NY],0);},Akx:function(E){if(this.EaseOfDelivery===
E)return;this.EaseOfDelivery=E;A.abo([this,this.ASo,this.Akx],0);},Ne:function(E
){if(this.WhereAbouts===E)return;this.WhereAbouts=E;A.abo([this,this.Awh,this.Ne
],0);},AnC:function(E){if(this.NaisIdMother===E)return;this.NaisIdMother=E;A.abo([
this,this.ASw,this.AnC],0);},AFx:function(E){if(this.ReasonOfLeaving===E)return;
this.ReasonOfLeaving=E;A.abo([this,this.BkL,this.AFx],0);},Ae1:function(E){if(this.
IsRegistrationNoticePending===E)return;this.IsRegistrationNoticePending=E;A.abo([
this,this.Bkz,this.Ae1],0);},ArV:function(E){if(this.IsDry===E)return;this.IsDry=
E;A.abo([this,this.Bkw,this.ArV],0);},QZ:function(){return this.Id;},ArB:function(
){return this.VisualId;},Bks:function(){return this.GroupId;},Av7:function(){return this.
DateOfBirth;},Wu:function(){return this.Gender;},ASj:function(){return this.BirthType;
},A8w:function(){return this.LocationId;},A8v:function(){return this.LastTemperature;
},A8n:function(){return this.IsAlarm;},Bkv:function(){return this.IsControl;},Bky:
function(){return this.IsRegistered;},A8r:function(){return this.IsWatch;},A89:function(
){return this.WorstAssessment;},A8o:function(){return this.IsFever;},BkY:function(
){return this.TimestampLastControl;},Bk0:function(){return this.TimestampLastWatch;
},BkB:function(){return this.LastRatingTemperature;},BkW:function(){return this.
TimestampExpirationFeverAlarm;},BkV:function(){return this.TimestampAlarm;},PM:function(
){return this.AnimalType;},A8u:function(){return this.LastBodyWeight;},A8V:function(
){return this.TimestampLastWeighing;},ArA:function(){return this.TransponderId;}
,ASp:function(){return this.FirstBodyWeight;},ASG:function(){return this.TimestampFirstWeighing;
},Bkr:function(){return this.FirstBodyWeightId;},Anq:function(){return this.NaisId;
},Bkh:function(){return this.DateOfLastCalving;},BkA:function(){return this.LactationNumber;
},Bkx:function(){return this.IsPerished;},BkZ:function(){return this.TimestampLastTemperature;
},BkX:function(){return this.TimestampLastAssessment;},Av5:function(){return this.
Breed;},ASo:function(){return this.EaseOfDelivery;},Awh:function(){return this.WhereAbouts;
},ASw:function(){return this.NaisIdMother;},BkL:function(){return this.ReasonOfLeaving;
},Bkz:function(){return this.IsRegistrationNoticePending;},Bkw:function(){return this.
IsDry;},_Init:function(aArg){C.Row._Init.call(this,aArg);this.__proto__=C.Animal;
this.TableId=0;},_className:"Device::Animal"};C.Row={CL:-1,TableId:2,Er:function(
Ad,AI){if(!AI){A.ab5("%s",(Aom+this.CL.toFixed())+AsV);return false;}else if(AI.
Id!==this.TableId)throw new Error(AsW);else if((Ad<0)||(Ad>=AI.Ca())){A.ab5("%s"
,(((AsX+this.CL.toFixed())+Aon)+AI.Ca().toFixed())+Aoo);return false;}this.CL=Ad;
return true;},Ch:function(AI){if(!AI){A.ab5("%s",(Aom+this.CL.toFixed())+AsV);return false;
}else if(AI.Id!==this.TableId)throw new Error(AsW);else if(this.Am3()&&AI.Lf()){
A.ab5("%s",AsY+AI.HG().toFixed());return false;}else if(!this.Am3()&&((this.CL<0
)||(this.CL>=AI.Ca()))){A.ab5("%s",(((AsX+this.CL.toFixed())+Aon)+AI.Ca().toFixed(
))+Aoo);return false;}return true;},Gn:function(){this.Hi();this.CL=-1;},Am3:function(
){return this.CL===-1;},Hi:function(){this.CL=-2;},AqZ:function(){return this.CL
!==-2;},A8J:function(){return this.CL;},A96:function(E){this.CL=E;},_Init:function(
aArg){this.__proto__=C.Row;A.h7++;},_Done:function(){this.__proto__=null;A.h7--;
},_ReInit:function(){},_Mark:function(D){var B;if((B=this.I)&&(B._cycle!=D))B._Mark(
B._cycle=D);},I:null,_cycle:0,_observers:null,_className:"Device::Row"};C.Rating={
Temperature:0,Id:0,AnimalId:0,Timestamp:0,BodyWeight:0,RatingTemperature:0,Faeces:
0,Respiratory:0,Appearance:0,Feed:0,Er:function(Ad,AI){var HA=C.Row.Er.call(this
,Ad,AI);if(HA&&!!AI){this.OnSetId(AI.CE(Ad,0));this.OnSetAnimalId(AI.CE(Ad,1));this.
OnSetTimestamp(AI.HF(Ad,6));this.OnSetFeed(AI.I2(Ad,2));this.OnSetAppearance(AI.
I2(Ad,3));this.OnSetRespiratory(AI.I2(Ad,4));this.OnSetFaeces(AI.I2(Ad,5));this.
OnSetTemperature(AI.A6B(Ad,7));this.OnSetBodyWeight(AI.ACX(Ad,8));this.OnSetRatingTemperature(
AI.I2(Ad,9));}return HA;},Ch:function(AI){if(this.K&&this.K.Ch)return this.K.Ch.
apply(this,arguments);else return C.Rating.Bap.apply(this,arguments);},Bap:function(
AI){var HA=C.Row.Ch.call(this,AI);if((HA&&!!AI)&&(AI.Id===1)){var Jk=AI.Ox();if(
Jk<=0)A.ab5("%s",Xc);else{var AzY=this.Am3();if(AzY)this.CL=AI.YF();else AI.Hj(this.
CL,0,this.Id);AI.Hj(this.CL,1,this.AnimalId);AI.Acm(this.CL,6,this.Timestamp);AI.
AkR(this.CL,2,this.Feed);AI.AkR(this.CL,3,this.Appearance);AI.AkR(this.CL,4,this.
Respiratory);AI.AkR(this.CL,5,this.Faeces);AI.A_1(this.CL,7,this.Temperature);AI.
AUu(this.CL,8,this.BodyWeight);AI.AkR(this.CL,9,this.RatingTemperature);AI.Oz(Jk
);if(AzY)this.OnSetId(AI.Abq());var Ru=A._GetAutoObject(C.Device).Am;var Ad=A._GetAutoObject(
C.Device).Am.LS(0,this.AnimalId);if(Ad>=0){var B3=A._NewObject(C.Animal,0);B3.Er(
Ad,Ru);if(this.Temperature>0)B3.Ul(A._GetAutoObject(C.Helper).A62(this));if((this.
Temperature>0)&&A._GetAutoObject(C.Helper).AGd(this)){var Oh=A._GetAutoObject(C.
Helper).AQ2(this);B3.AkB(Oh);B3.AnR(Oh);}else if(this.Temperature>0){var Oh=(A._GetAutoObject(
C.Helper).AQ2(this)||(B3.WorstAssessment===2))||(B3.WorstAssessment===1);B3.AkB(
Oh);B3.AnR(Oh);}else{var Oh=A._GetAutoObject(C.Helper).AQ2(this)||B3.IsFever;B3.
AkB(Oh);B3.AnR(Oh);}B3.Ch(Ru);}}}return HA;},Gn:function(){C.Row.Gn.call(this);this.
OnSetTimestamp(A._GetAutoObject(C.Helper).Dv());this.OnSetId(-1);},Hi:function(){
C.Row.Hi.call(this);this.OnSetTimestamp(0);this.OnSetId(0);this.OnSetAnimalId(0);
this.OnSetFeed(0);this.OnSetAppearance(0);this.OnSetRespiratory(0);this.OnSetFaeces(
0);this.OnSetTemperature(0);this.OnSetBodyWeight(0);this.OnSetRatingTemperature(
0);},OnSetTemperature:function(E){if(this.Temperature===E)return;this.Temperature=
E;A.abo([this,this.BkU,this.OnSetTemperature],0);},OnSetId:function(E){if(this.Id===
E)return;this.Id=E;A.abo([this,this.QZ,this.OnSetId],0);},OnSetAnimalId:function(
E){if(this.AnimalId===E)return;this.AnimalId=E;A.abo([this,this.Bj6,this.OnSetAnimalId
],0);},OnSetFeed:function(E){if(this.Feed===E)return;this.Feed=E;A.abo([this,this.
Bko,this.OnSetFeed],0);},OnSetAppearance:function(E){if(this.Appearance===E)return;
this.Appearance=E;A.abo([this,this.Bj7,this.OnSetAppearance],0);},OnSetRespiratory:
function(E){if(this.Respiratory===E)return;this.Respiratory=E;A.abo([this,this.BkM
,this.OnSetRespiratory],0);},OnSetFaeces:function(E){if(this.Faeces===E)return;this.
Faeces=E;A.abo([this,this.Bkm,this.OnSetFaeces],0);},OnSetTimestamp:function(E){
if(this.Timestamp===E)return;this.Timestamp=E;A.abo([this,this.A8U,this.OnSetTimestamp
],0);},Boe:function(Nn,A7){switch(Nn){case 2:this.OnSetAppearance(A7);break;case
1:this.OnSetFeed(A7);break;case 4:this.OnSetFaeces(A7);break;case 3:this.OnSetRespiratory(
A7);break;default:;}},Biq:function(Nn){switch(Nn){case 2:return this.Appearance;
case 1:return this.Feed;case 4:return this.Faeces;case 3:return this.Respiratory;
default:return 0;}},OnSetRatingTemperature:function(E){if(this.RatingTemperature===
E)return;this.RatingTemperature=E;A.abo([this,this.BkK,this.OnSetRatingTemperature
],0);},OnSetBodyWeight:function(E){if(this.BodyWeight===E)return;this.BodyWeight=
E;A.abo([this,this.Bj$,this.OnSetBodyWeight],0);},BkU:function(){return this.Temperature;
},QZ:function(){return this.Id;},Bj6:function(){return this.AnimalId;},Bko:function(
){return this.Feed;},Bj7:function(){return this.Appearance;},BkM:function(){return this.
Respiratory;},Bkm:function(){return this.Faeces;},A8U:function(){return this.Timestamp;
},BkK:function(){return this.RatingTemperature;},Bj$:function(){return this.BodyWeight;
},_Init:function(aArg){C.Row._Init.call(this,aArg);this.__proto__=C.Rating;this.
TableId=1;var Lv=this._variants();if(Lv){this.K={};Lv._Init.call(this,aArg);}},_Done:
function(){if(this.K)this.K._Done.call(this);this.__proto__=C.Row;C.Row._Done.call(
this);},_ReInit:function(){C.Row._ReInit.call(this);if(this.K)this.K._ReInit.call(
this);},_Mark:function(D){C.Row._Mark.call(this,D);if(this.K)this.K._Mark(D);},_variants:
function(){return A.acs.Rating._variants();},K:null,_className:"Device::Rating"};
C.HelperClass={Uw:null,Ahz:null,AUn:null,AUo:null,W:null,Au:null,KE:null,SO:null
,AdW:null,UD:null,UC:null,Aej:null,Aft:null,Afs:null,Afr:null,Afu:null,Agy:null,
AGO:0,Init:function(aArg){A.pe([this,this.ATS],this);},AkE:function(E){this.Uw=E;
A.abo([this,this.Ary,this.AkE],0);},AFB:function(E){this.Ahz=E;A.abo([this,this.
A8K,this.AFB],0);},BAu:function(G){switch(A._GetAutoObject(C.Device).ScanState){
case 2:{var Aur=A._GetAutoObject(C.Device).OQ;if(!Aur)throw new Error(Ax2);switch(
Aur.TransponderType){case 1:this.AkE(Aur);break;case 2:this.ATo(Aur);break;case 3:
this.AFB(Aur);break;case 4:this.ATp(Aur);break;case 0:break;default:throw new Error(
Ax3);}}break;case 4:A._GetAutoObject(C.Device).A9(11,true,A.jV,2000,null);break;
case 3:A._GetAutoObject(C.Device).A9(12,true,A.jV,2000,null);break;case 0:case 1:
break;default:throw new Error(Ax4);}},AkO:function(){this.AkE(null);this.ATo(null
);this.AFB(null);this.ATp(null);},AFG:function(E){if(this.K&&this.K.AFG)return this.
K.AFG.apply(this,arguments);else return C.HelperClass.Ban.apply(this,arguments);
},Ban:function(E){A.abo([this,this.UY,this.U1],0);A._GetAutoObject(C.Device).SetSystemTime(
E);},U1:function(Aq){this.AFG(Aq);},Dv:function(){if(this.K&&this.K.Dv)return this.
K.Dv.apply(this,arguments);else return C.HelperClass.Baj.apply(this,arguments);}
,Baj:function(){var B;return((B=(this.Au.BcU()|0))<0)?B+0x100000000:B;},UY:function(
){return this.Dv();},Asp:function(){A._GetAutoObject(C.Device).SL(-1);this.W.Hi(
);A.we(this.W,0);},A7g:function(Jf){if(!Jf){A.ab5("%s%U",AsZ,Jf);return false;}var
Bf=A._GetAutoObject(C.Device).Am.AgQ(22,Jf);return this.HL(Bf);},AmS:function(AoO
,AI7){switch(AoO){case 0:{var Apf=AI7;switch(Apf){case 14:return A.aaR(A.acf.Afo
);case 6:return Ax5;case 4:return A.aaR(A.acf.Aeb);case 28:return P7;case 7:return A.
aaR(A.acf.Afj);case 2:return A.aaR(A.acf.P);case 0:return A.aaR(A.acf.GJ);case 37:
return Ax6;case 8:return A.aaR(A.acf.Alarm);case 9:return A.aaR(A.acf.AB$);case 38:
return A.aaR(A.acf.ANY);case 11:return A.aaR(A.acf.Fever);case 27:return AVQ;case
10:return A.aaR(A.acf.BnU);case 12:return A.aaR(A.acf.Asc);case 29:return A.aaR(
A.acf.ARj);case 18:return A.aaR(A.acf.Weighing);case 17:return AVR;case 5:return A.
aaR(A.acf.Temperature);case 3:return AVS;case 26:return A.aaR(A.acf.Ud);case 35:
return A.aaR(A.acf.Ud)+AVT;case 36:return AHh;case 15:return AHi;case 24:return Afz;
case 20:return Aop;case 30:return AVU;case 21:return AHj;case 19:return Alb;case
22:return A.aaR(A.acf.Transponder);case 1:return A.aaR(A.acf.GF);case 34:return A.
aaR(A.acf.Jd);case 13:return AHk;case 31:return AHl;default:{A.ab5("%s",AVV+Apf.
toFixed());return AHm+Apf.toFixed();}}}case 1:{var Apf=AI7;switch(Apf){case 1:return A.
aaR(A.acf.Animal);case 3:return A.aaR(A.acf.AGc);case 8:return A.aaR(A.acf.Afq);
case 5:return A.aaR(A.acf.AGe);case 2:return A.aaR(A.acf.Feed);case 4:return A.aaR(
A.acf.AGf);case 7:return A.aaR(A.acf.Temperature);case 6:return A.aaR(A.acf.Bs);
default:{A.ab5("%s",AVW+Apf.toFixed());return AHm+Apf.toFixed();}}}default:A.ab5(
"%s",(AVX+AoO.toFixed())+AcN);}return A.jV;},A6s:function(AoO,AH){var result=A.jV;
if(!!AH){result=this.AmS(AoO,AH.EK);result=((result+N$)+A._GetAutoObject(C.Converter
).A6b(AH.Operator))+N$;if(!!(C.Int32FilterCriterion.isPrototypeOf(AH)?AH:null))result=
result+(C.Int32FilterCriterion.isPrototypeOf(AH)?AH:null).A4.toFixed();else if(!
!(C.UInt32FilterCriterion.isPrototypeOf(AH)?AH:null))result=result+(C.UInt32FilterCriterion.
isPrototypeOf(AH)?AH:null).A4.toFixed();else if(!!(C.StringFilterCriterion.isPrototypeOf(
AH)?AH:null))result=result+(C.StringFilterCriterion.isPrototypeOf(AH)?AH:null).A4;
else if(!!(C.BoolFilterCriterion.isPrototypeOf(AH)?AH:null)){if((C.BoolFilterCriterion.
isPrototypeOf(AH)?AH:null).A4)result=this.AmS(AoO,AH.EK);else result=A.jV;}else if(
!!(C.GenderFilterCriterion.isPrototypeOf(AH)?AH:null)){var ByX=A._NewObject(C.GenderToString
,0);result=result+ByX.Ls((C.GenderFilterCriterion.isPrototypeOf(AH)?AH:null).A4);
}else if(!!(C.AnimalTypeFilterCriterion.isPrototypeOf(AH)?AH:null)){var BxR=A._NewObject(
C.AnimalTypeToString,0);result=result+BxR.Ls((C.AnimalTypeFilterCriterion.isPrototypeOf(
AH)?AH:null).A4);}else if(!!(C.AssessmentFilterCriterion.isPrototypeOf(AH)?AH:null
)){var BxU=A._NewObject(C.AssesmentToString,0);result=result+BxU.Ls((C.AssessmentFilterCriterion.
isPrototypeOf(AH)?AH:null).A4);}else if(!!(C.UInt64FilterCriterion.isPrototypeOf(
AH)?AH:null))result=result+(C.UInt64FilterCriterion.isPrototypeOf(AH)?AH:null).A4.
toFixed();else if(!!(C.UInt64PartialFilterCriterion.isPrototypeOf(AH)?AH:null)){
var Av=(C.UInt64PartialFilterCriterion.isPrototypeOf(AH)?AH:null);result=(((((result+
Av.A4)+AVY)+Av.OA.toFixed())+O3)+Av.Zm.toFixed())+Aoo;}else if(!!(C.WhereAboutsFilterCriterion.
isPrototypeOf(AH)?AH:null)){var BCf=A._NewObject(C.WhereAboutsToString,0);result=
result+BCf.Ls((C.WhereAboutsFilterCriterion.isPrototypeOf(AH)?AH:null).A4);}else
A.ab5("%s",AVZ);}return result;},Nj:function(aString,BbI,Bw6){var result=A.jV;var
Bfr=false;var index=0;var Bw8=BbI.length;while(!Bfr){var A3w=aString.indexOf(BbI
,index);if(A3w!==-1){result=(result+A.abW(aString,index,A3w-index))+Bw6;index=A3w+
Bw8;}else{var BbM=aString.length;if(index<BbM)result=result+A.ab2(aString,BbM-index
);Bfr=true;}}return result;},ATo:function(E){this.AUn=E;A.abo([this,this.BkO,this.
ATo],0);},ATp:function(E){this.AUo=E;A.abo([this,this.BkP,this.ATp],0);},Bdi:function(
){return((A._GetAutoObject(C.Device).ScanState===2)&&!!A._GetAutoObject(C.Device
).OQ)&&(A._GetAutoObject(C.Device).OQ.TransponderType===1);},Af7:function(G){if(
!this.W.Am3()&&!!this.W.Id)this.Bjt(this.W.Id);},ACP:function(Em){return A._GetAutoObject(
C.Helper).UD.Get(Em);},A6n:function(Em){return A._GetAutoObject(C.Helper).UC.Get(
Em);},A6x:function(){var O=0;var min=32767;while(O<A._GetAutoObject(C.Helper).UD.
MB){if(A._GetAutoObject(C.Helper).UD.Get(O)<min)min=A._GetAutoObject(C.Helper).UD.
Get(O);O=O+1;}return min;},ATS:function(G){A.zV([this,this.Af7],A._GetAutoObject(
C.Device).Am,0);},AQ2:function(D3){if(!D3)return false;var Bi6=(((this.AzU(D3.Faeces
)||this.AzU(D3.Feed))||this.AzU(D3.Appearance))||this.AzU(D3.Respiratory))||this.
AzU(D3.RatingTemperature);return Bi6||this.A62(D3);},AzU:function(Bbm){return(Bbm===
2)||(Bbm===1);},A62:function(D3){return!!D3&&(D3.Temperature>A._GetAutoObject(C.
Helper).ACP(A._GetAutoObject(C.Helper).W.AnimalType));},HL:function(L6){var A2q=
false;if(L6>=0){if(L6!==this.W.CL)A._GetAutoObject(C.Device).SL(L6);A2q=this.W.Er(
L6,A._GetAutoObject(C.Device).Am);if(A2q)A.we(this.W,0);}else{A._GetAutoObject(C.
Device).SL(-1);this.W.Hi();A.we(this.W,0);}return A2q;},AhI:function(Ah2){var B;
return(((B=(this.Au.BcU()|0))<0)?B+0x100000000:B)-this.AmE(Ah2);},AsE:function(){
var B;A.pe([B=this.KE,B.AnW],this);},BBG:function(G){A._GetAutoObject(C.Device).
A9(16,false,AHn,0,null);A._GetAutoObject(C.Device).A9(5,true,A.jV,0,null);},Bnn:
function(G){var At=(C.PopupContext.isPrototypeOf(G)?G:null);if(!!At&&(At.PopupState===
5))this.AsE();},Bm_:function(E){if(this.AGO===E)return;this.AGO=E;A._GetAutoObject(
C.Device).A9(16,true,this.AGO.toFixed(),0,[this,this.Bnn]);},MM:function(BwG,Bxl
){var D8;var BfZ=A._NewObject(A.Core.An3,0);var GD=A._NewObject(A.Core.Bs,0);var
K5=A._NewObject(A.Core.Bs,0);GD.Initialize(BwG);K5.Initialize(Bxl);D8=K5.BhD(GD);
BfZ.Initialize2(0,D8.ADo,D8.AEb,D8.AGs);if(GD.J(BfZ).GH===GD.GH)return D8.Ki;else
return D8.Ki+1;},BBI:function(G){A._GetAutoObject(C.Device).UpdateMeasureState(3
);},AK5:function(G){var BgP=A._GetAutoObject(C.Helper).ACP(A._GetAutoObject(C.Helper
).W.AnimalType);var BgL=A._GetAutoObject(C.Helper).A6n(A._GetAutoObject(C.Helper
).W.AnimalType);var Agj=A.abz(BgP-100,BgL+100);this.Bcy(Agj);},AmE:function(Ah2){
return Ah2*86400;},Ak5:function(J1){var B;if(!!J1&&(J1<(((B=Math.trunc(Math.pow(
10,A._GetAutoObject(C.Device).AF)))<0)?B+0x10000000000000000:B)))return-1;return A.
_GetAutoObject(C.Helper).Sf(J1,A._GetAutoObject(C.Device).AF&0xFF,A._GetAutoObject(
C.Device).A1&0xFF)|0;},AGd:function(D3){if(!D3)return false;return((!!D3.Faeces||
!!D3.Feed)||!!D3.Appearance)||!!D3.Respiratory;},AhO:function(A0G,BbO,AI8,Em){var
B;var ApT;if((A0G<650000)&&(BbO<this.Dv())){var Bb$=this.Agy.Avl(Em);var Bb_=0;if(
Bb$>=0)Bb_=this.Afr.Get(Bb$);ApT=A0G+(this.MM(BbO,this.Dv())*Bb_);if(AI8>0){var A1B=
this.ApS(AI8);ApT=(Math.trunc(((((B=ApT)<0)?B+0x10000000000000000:B)+Math.trunc(
A1B/2))/A1B)*A1B)|0;}if(ApT>650000)ApT=650000;}else ApT=A0G;return ApT;},AC3:function(
D3){var Aqe=A._GetAutoObject(C.Converter).AdX(D3.Faeces);if(Aqe<A._GetAutoObject(
C.Converter).AdX(D3.Feed))Aqe=A._GetAutoObject(C.Converter).AdX(D3.Feed);if(Aqe<
A._GetAutoObject(C.Converter).AdX(D3.Appearance))Aqe=A._GetAutoObject(C.Converter
).AdX(D3.Appearance);if(Aqe<A._GetAutoObject(C.Converter).AdX(D3.Respiratory))Aqe=
A._GetAutoObject(C.Converter).AdX(D3.Respiratory);return A._GetAutoObject(C.Converter
).A$n(Aqe);},Axo:function(D3,Nm){if(!!D3){D3.OnSetFaeces(Nm);D3.OnSetFeed(Nm);D3.
OnSetAppearance(Nm);D3.OnSetRespiratory(Nm);}},Bio:function(AI,AJb,Ac3,Xm,AfE){if(
!AI)throw new Error(As0);var Be=A._NewObject(C.Filter,0);var ApF=AI.Filter;var Oc=
A._NewObject(C.Int32FilterCriterion,0);Oc.Operator=0;Oc.EK=1;Oc.A4=Ac3;Be.CW(Oc);
if(Xm>0){var Oq=A._NewObject(C.UInt32FilterCriterion,0);Oq.Operator=2;Oq.EK=6;Oq.
A4=Xm;Be.CW(Oq);}if(AfE>0){var Og=A._NewObject(C.UInt32FilterCriterion,0);Og.Operator=
3;Og.EK=6;Og.A4=AfE;Be.CW(Og);}AI.Bl(Be);var L7=A._NewObject(C.Int32ArrayWrapper
,0);L7.Zy(6);var O;for(O=0;O<L7.MB;O=O+1)L7.Set(O,0);var U7;for(O=0;O<AI.Ca();O=
O+1){U7=AI.I2(O,AJb);L7.Set(U7,L7.Get(U7)+1);}AI.Bl(ApF);return L7;},ZQ:function(
Ah2){var B;var GD=A._NewObject(A.Core.Bs,0);var BfY=A._NewObject(A.Core.An3,0);GD.
Initialize(A._GetAutoObject(C.Converter).AhK());BfY.Initialize2(Ah2,0,0,0);GD=GD.
BoH(BfY);return((B=(GD.JN()|0))<0)?B+0x100000000:B;},A6o:function(AI,Ac3,AfE,Xm){
if(!AI)throw new Error(As0);var Be=A._NewObject(C.Filter,0);var ApF=AI.Filter;var
Oc=A._NewObject(C.Int32FilterCriterion,0);Oc.Operator=0;Oc.EK=1;Oc.A4=Ac3;Be.CW(
Oc);if(Xm>0){var Oq=A._NewObject(C.UInt32FilterCriterion,0);Oq.Operator=2;Oq.EK=
6;Oq.A4=Xm;Be.CW(Oq);}if(AfE>0){var Og=A._NewObject(C.UInt32FilterCriterion,0);Og.
Operator=3;Og.EK=6;Og.A4=AfE;Be.CW(Og);}AI.Bl(Be);var L7=A._NewObject(C.Int32ArrayWrapper
,0);L7.Zy(6);var O;for(O=0;O<L7.MB;O=O+1)L7.Set(O,0);var Ao6=A._NewObject(C.Rating
,0);var A1s;for(O=0;O<AI.Ca();O=O+1){Ao6.Er(O,AI);if(A._GetAutoObject(C.Helper).
AGd(Ao6)){A1s=A._GetAutoObject(C.Helper).AC3(Ao6);L7.Set(A1s,L7.Get(A1s)+1);}}AI.
Bl(ApF);return L7;},A11:function(AI,Ac3,Bys){if(!AI)throw new Error(As0);var Be=
A._NewObject(C.Filter,0);var ApF=AI.Filter;var Oc=A._NewObject(C.Int32FilterCriterion
,0);Oc.Operator=0;Oc.EK=1;Oc.A4=Ac3;Be.CW(Oc);var Xm=A._GetAutoObject(C.Converter
).AhK()+A._GetAutoObject(C.Helper).AmE(Bys);var AfE=Xm+A._GetAutoObject(C.Helper
).AmE(1);var Oq=A._NewObject(C.UInt32FilterCriterion,0);Oq.Operator=2;Oq.EK=6;Oq.
A4=Xm;Be.CW(Oq);var Og=A._NewObject(C.UInt32FilterCriterion,0);Og.Operator=3;Og.
EK=6;Og.A4=AfE;Be.CW(Og);AI.Bl(Be);var Ao6=A._NewObject(C.Rating,0);var U7;var LP=
0;var O;for(O=0;O<AI.Ca();O=O+1){Ao6.Er(O,AI);if(A._GetAutoObject(C.Helper).AGd(
Ao6)){U7=A._GetAutoObject(C.Helper).AC3(Ao6);if(A._GetAutoObject(C.Converter).AdX(
U7)>A._GetAutoObject(C.Converter).AdX(LP))LP=U7;}}AI.Bl(ApF);return LP;},Am2:function(
){if((A._GetAutoObject(C.Device).WeightRecordingScope===2)||(A._GetAutoObject(C.
Device).WeightRecordingScope===1))return true;else return false;},A65:function(){
if((A._GetAutoObject(C.Device).WeightRecordingScope===2)||!A._GetAutoObject(C.Device
).WeightRecordingScope)return true;else return false;},Bip:function(AI,AJb,Ac3,Xm
,AfE){if(!AI)throw new Error(As0);var Be=A._NewObject(C.Filter,0);var ApF=AI.Filter;
var Oc=A._NewObject(C.Int32FilterCriterion,0);Oc.Operator=0;Oc.EK=1;Oc.A4=Ac3;Be.
CW(Oc);if(Xm>0){var Oq=A._NewObject(C.UInt32FilterCriterion,0);Oq.Operator=2;Oq.
EK=6;Oq.A4=Xm;Be.CW(Oq);}if(AfE>0){var Og=A._NewObject(C.UInt32FilterCriterion,0
);Og.Operator=3;Og.EK=6;Og.A4=AfE;Be.CW(Og);}AI.Bl(Be);var L7=A._NewObject(C.Int32ArrayWrapper
,0);L7.Zy(6);var O;for(O=0;O<L7.MB;O=O+1)L7.Set(O,0);if(AI.Ca()>0){var U7=AI.I2(
0,AJb);var ApY=AI.HF(O,6);var Ac=A._NewObject(A.Core.Bs,0);Ac.Initialize(ApY);var
Aqd=U7;var AJ6=A._NewObject(A.Core.Bs,0);AJ6.Initialize(Ac.JN());for(O=1;O<AI.Ca(
);O=O+1){U7=AI.I2(O,AJb);ApY=AI.HF(O,6);Ac.Initialize(ApY);if((Ac.Ab0()!==AJ6.Ab0(
))||(Ac.Year!==AJ6.Year)){L7.Set(Aqd,L7.Get(Aqd)+1);AJ6.Initialize(Ac.JN());Aqd=
U7;}else if(!!U7&&(U7<Aqd))Aqd=U7;}L7.Set(Aqd,L7.Get(Aqd)+1);}AI.Bl(ApF);return L7;
},Aqq:function(L2){var B;var GD=A._NewObject(A.Core.Bs,0);GD.Initialize(L2);GD.Any(
0);GD.AnB(0);GD.AnE(0);return((B=(GD.JN()|0))<0)?B+0x100000000:B;},AN$:function(
L2){var B;L2=L2+86400;var GD=A._NewObject(A.Core.Bs,0);GD.Initialize(L2);GD.Any(
0);GD.AnB(0);GD.AnE(0);return((B=(GD.JN()|0))<0)?B+0x100000000:B;},Bir:function(
BBE,ByD,Amc,AlC){var Bct=A._GetAutoObject(C.Helper).MM(BBE,ByD);if(Bct>0)return((
AlC-Amc)/Bct)|0;return 0;},Bpj:function(BwH,Bxm){var GD=A._NewObject(A.Core.Bs,0
);var K5=A._NewObject(A.Core.Bs,0);GD.Initialize(BwH);K5.Initialize(Bxm);return(
GD.Year===K5.Year)&&(GD.Ab0()===K5.Ab0());},A6u:function(){var Be=A._GetAutoObject(
C.Helper).Mo();var Bdw=A._NewObject(C.UInt32FilterCriterion,0);var Bxv=A._GetAutoObject(
C.Helper).ZQ(A._GetAutoObject(C.Device).AqS)-1;Bdw.Initialize(28,2,Bxv,true);Be.
CW(Bdw);var U3=A._NewObject(C.AnimalTypeFilterCriterion,0);U3.Initialize(14,0,1,
true);Be.CW(U3);if(A._GetAutoObject(C.Device).AqT){var Az_=A._NewObject(C.UInt32FilterCriterion
,0);var A2l=A._GetAutoObject(C.Helper).Dv()-21600;Az_.Initialize(30,3,A2l,true);
Be.CW(Az_);}return Be;},BnZ:function(){var Jk=A._GetAutoObject(C.Device).Am.Ox();
if(Jk<=0)A.ab5("%s",Xc);else{A._GetAutoObject(C.Device).Am.Hi();A._GetAutoObject(
C.Device).Am.Oz(Jk);}Jk=A._GetAutoObject(C.Device).Agq.Ox();if(Jk<=0)A.ab5("%s",
Xc);else{A._GetAutoObject(C.Device).Agq.Hi();A._GetAutoObject(C.Device).Agq.Oz(Jk
);}Jk=A._GetAutoObject(C.Device).Bt.Ox();if(Jk<=0)A.ab5("%s",Xc);else{A._GetAutoObject(
C.Device).Bt.Hi();A._GetAutoObject(C.Device).Bt.Oz(Jk);}Jk=A._GetAutoObject(C.Device
).Pl.Ox();if(Jk<=0)A.ab5("%s",Xc);else{A._GetAutoObject(C.Device).Pl.Hi();A._GetAutoObject(
C.Device).Pl.Oz(Jk);}},Bjt:function(Ac3){var Bf=A._GetAutoObject(C.Device).Am.LS(
0,Ac3);return this.HL(Bf);},AQ9:function(Jf){var Aiv=A._GetAutoObject(C.Device).
Am.Aeh(22,Jf);return Aiv;},ACU:function(){var Be=A._GetAutoObject(C.Helper).Mo();
var Aja=A._NewObject(C.UInt64FilterCriterion,0);Aja.Initialize(22,0,0,true);Be.CW(
Aja);return Be;},AOJ:function(AoZ,ByA,P$){var Aao=-1;switch(AoZ){case 2:Aao=30;break;
case 3:Aao=31;break;case 10:Aao=19;break;default:A.ab5("%s%e",UV,AoZ);}if(Aao<0)
return null;var Adf=A._NewObject(C.UInt32FilterCriterion,0);Adf.Initialize(Aao,3
,A._GetAutoObject(C.Helper).Dv()-ByA,P$);return Adf;},BnX:function(aFilter){var AH=
aFilter.DL(30,3);if(!!AH)aFilter.Nh(AH);AH=aFilter.DL(31,3);if(!!AH)aFilter.Nh(AH
);AH=aFilter.DL(19,3);if(!!AH)aFilter.Nh(AH);},A1j:function(AfO,AyN,AI){if(AI.Lf(
))return 5;if(AfO.VisualId<=0)switch(AyN){case 0:if(!AfO.NaisId)return 1;break;case
1:if(!AfO.TransponderId)return 1;break;case 3:case 2:case 5:case 4:return 1;default:
throw new Error(AHo+AyN.toFixed());}if((!AfO.NaisId&&!AfO.TransponderId)&&A._GetAutoObject(
C.Device).Am.AjJ(1,AfO.VisualId))return 2;if(!!AfO.NaisId&&A._GetAutoObject(C.Helper
).AQ7(AfO.NaisId))return 3;if(!!AfO.TransponderId&&A._GetAutoObject(C.Helper).AQ9(
AfO.TransponderId))return 4;return 0;},Aqj:function(Eu){Eu.EC(A._GetAutoObject(C.
Device).AnimalType);Eu.NY(A._GetAutoObject(C.Device).Breed);Eu.Q1(A._GetAutoObject(
C.Helper).Dv()-A._GetAutoObject(C.Helper).AmE(A._GetAutoObject(C.Device).AdO));Eu.
JP(A._GetAutoObject(C.Device).Gender);Eu.Ne(A._GetAutoObject(C.Device).WhereAbouts
);},AMj:function(Ro,Eu){var GB=0;switch(Ro){case 0:GB=A._GetAutoObject(C.Helper).
Ak5(Eu.NaisId);break;case 1:GB=A._GetAutoObject(C.Helper).Ak5(Eu.TransponderId);
break;case 3:GB=A._GetAutoObject(C.Device).Aq5;break;case 2:GB=A._GetAutoObject(
C.Device).Aq6;break;case 4:case 5:GB=A._GetAutoObject(C.Device).AjU;break;default:
throw new Error(AHp+Ro.toFixed());}return GB;},A$u:function(Alj,L3,Bbr,Bws,Bw1){
var B;var Qm=null;var Xx=null;switch(Alj){case 0:{Qm=[B=A._GetAutoObject(C.Device
),B.ASv,B.AZ4];Xx=[B=A._GetAutoObject(C.Device),B.Awe,B.AyG];}break;case 1:switch(
L3){case 1:{Qm=[B=A._GetAutoObject(C.Device),B.A8A,B.BaU];Xx=[B=A._GetAutoObject(
C.Device),B.Awc,B.AyE];}break;case 0:{Qm=[B=A._GetAutoObject(C.Device),B.A8B,B.BaV
];Xx=[B=A._GetAutoObject(C.Device),B.Awd,B.AyF];}break;case 2:{Qm=[B=A._GetAutoObject(
C.Device),B.ASv,B.AZ4];Xx=[B=A._GetAutoObject(C.Device),B.Awe,B.AyG];}break;default:
throw new Error(Ax7+L3.toFixed());}break;default:throw new Error(AHq+Alj.toFixed(
));}if(!!Qm&&!!Xx){Qm[2].call(Qm[0],Bbr);if(Bbr>0){if((Xx[1].call(Xx[0])>0)&&(Bws<
Bw1))Qm[2].call(Qm[0],Qm[1].call(Qm[0])+Xx[1].call(Xx[0]));else if(Xx[1].call(Xx[
0])<0)Qm[2].call(Qm[0],Qm[1].call(Qm[0])+Xx[1].call(Xx[0]));}return Qm[1].call(Qm[
0]);}return 0;},AVn:function(Eu,Alj,BwA){if(!Eu||(BwA===true))return;switch(Alj){
case 0:Eu.Nc(A._GetAutoObject(C.Device).AvY);break;case 1:switch(Eu.Gender){case
0:Eu.Nc(A._GetAutoObject(C.Device).AEe);break;case 1:Eu.Nc(A._GetAutoObject(C.Device
).AEd);break;case 2:Eu.Nc(A._GetAutoObject(C.Device).AvY);break;default:throw new
Error(Ax7+Eu.Gender.toFixed());}break;default:throw new Error(AHq+Alj.toFixed());
}},Bi7:function(Ro,Eu){var result=false;switch(Ro){case 0:result=!!Eu.NaisId;break;
case 1:result=!!Eu.TransponderId;break;case 3:case 2:case 4:case 5:result=false;
break;default:throw new Error(AHp+Ro.toFixed());}return result;},AKi:function(Eu
,Bbk,AyN,Atw,AfH){switch(Bbk){case 2:if(Atw<=0)A._GetAutoObject(C.Device).A9(21,
true,Eu.VisualId.toFixed(),0,AfH);else A._GetAutoObject(C.Device).A9(48,true,(Eu.
VisualId.toFixed()+Ax8)+Atw.toFixed(),0,AfH);break;case 3:if(Atw<=0)A._GetAutoObject(
C.Device).A9(21,true,A._GetAutoObject(C.Converter).Rf(Eu.NaisId),0,AfH);else A._GetAutoObject(
C.Device).A9(48,true,(A._GetAutoObject(C.Converter).Rf(Eu.NaisId)+Ax8)+Atw.toFixed(
),0,AfH);break;case 4:if(Atw<=0)A._GetAutoObject(C.Device).A9(25,true,A._GetAutoObject(
C.Converter).Rf(Eu.TransponderId),0,AfH);else A._GetAutoObject(C.Device).A9(47,true
,(A._GetAutoObject(C.Converter).Rf(Eu.TransponderId)+Ax8)+Atw.toFixed(),0,AfH);break;
case 1:switch(AyN){case 1:A._GetAutoObject(C.Device).A9(42,true,A.jV,0,AfH);break;
case 0:A._GetAutoObject(C.Device).A9(43,true,A.jV,0,AfH);break;case 3:case 2:case
5:case 4:A._GetAutoObject(C.Device).A9(22,true,A.jV,0,AfH);break;default:throw new
Error(AHo+AyN.toFixed());}break;case 5:A._GetAutoObject(C.Device).A9(41,true,A._GetAutoObject(
C.Device).Am.HG().toFixed(),0,AfH);break;case 0:break;default:throw new Error(AV0+
Bbk.toFixed());}},BcY:function(Bby,L3){var B;var AAc=null;switch(Bby){case 0:AAc=[
B=A._GetAutoObject(C.Device),B.Awe,B.AyG];break;case 1:switch(L3){case 1:AAc=[B=
A._GetAutoObject(C.Device),B.Awc,B.AyE];break;case 0:AAc=[B=A._GetAutoObject(C.Device
),B.Awd,B.AyF];break;case 2:AAc=[B=A._GetAutoObject(C.Device),B.Awe,B.AyG];break;
default:throw new Error(Ax7+L3.toFixed());}break;default:throw new Error(AV1+Bby.
toFixed());}return AAc;},A6F:function(Qb,Bxc){var AaO=A._NewObject(A.Core.Bs,0);
AaO.Initialize(Qb);var ABt=AaO.Year;var Bf=A._GetAutoObject(C.Device).Pl.LS(0,ABt
);var U6=A._NewObject(C.CalfDeregistrations,0);if(Bf<0){if(A._GetAutoObject(C.Device
).Pl.Lf())A._GetAutoObject(C.Device).A9(51,true,A._GetAutoObject(C.Device).Pl.HG(
).toFixed(),0,null);else{U6.Gn();U6.AkG(ABt);}}else U6.Er(Bf,A._GetAutoObject(C.
Device).Pl);U6.Awv(U6.Deregistrations+1);if(Bxc)U6.Awu(U6.Deaths+1);U6.Ch(A._GetAutoObject(
C.Device).Pl);},AMh:function(LP,AlM,AlD){var AKF=0;if((AlM&&(AlD===1))||(LP===1)
)AKF=1;else if((AlM&&(AlD===2))||(LP===2))AKF=2;else if(!!LP&&(LP!==5))AKF=LP;return AKF;
},Bcy:function(Bxu){var B;if(A._GetAutoObject(C.Device).MeasureState===1){this.SO.
Cw=A._GetAutoObject(C.Device).AcF;this.SO.B2=Bxu;this.SO.AnU(this);}},ACR:function(
){var Be=this.AOI();var Bdl=A._NewObject(C.BoolFilterCriterion,0);Bdl.Initialize(
38,0,true,true);Be.CW(Bdl);return Be;},A6l:function(EE){var Be=A._GetAutoObject(
C.Helper).Mo();if(A._GetAutoObject(C.Device).Aqf){var A14=A._GetAutoObject(C.Helper
).AOJ(EE,21600,true);Be.CW(A14);}return Be;},A6z:function(){var Be=A._GetAutoObject(
C.Helper).Mo();var BdN=A._NewObject(C.UInt64FilterCriterion,0);BdN.Initialize(26
,0,0,true);Be.CW(BdN);return Be;},A6C:function(){var B;var Be=A._GetAutoObject(C.
Helper).Mo();var AAi=(C.WhereAboutsFilterCriterion.isPrototypeOf(B=Be.DL(34,3))?
B:null);if(!!AAi)Be.Nh(AAi);var Be_=A._NewObject(C.BoolFilterCriterion,0);Be_.Initialize(
37,0,true,true);Be.CW(Be_);return Be;},Sf:function(A7,Atp,A0H){var B;A7=Math.trunc(
A7/this.ApS(Atp));A7%=this.ApS(A0H);return A7;},ApS:function(Bbz){switch(Bbz){case
0:return 1;case 1:return 10;case 2:return 100;case 3:return 1000;case 4:return 10000;
case 5:return 100000;case 6:return 1000000;case 7:return 10000000;case 8:return 100000000;
case 9:return 1000000000;case 10:return 10000000000;case 11:return 100000000000;
case 12:return 1000000000000;case 13:return 10000000000000;case 14:return 100000000000000;
case 15:return 1000000000000000;default:throw new Error(AV2+Bbz.toFixed());}},Mo:
function(){var Be=A._NewObject(C.Filter,0);var Bfv=A._NewObject(C.BoolFilterCriterion
,0);Bfv.Initialize(10,0,true,true);Be.CW(Bfv);var AAi=A._NewObject(C.WhereAboutsFilterCriterion
,0);AAi.Initialize(34,3,6,true);Be.CW(AAi);return Be;},Are:function(aFilter){return!
this.ACV(aFilter);},ACV:function(aFilter){var Jh=0;var Av=aFilter.AOK();while(!!
Av){if(Av.YI===false)Jh++;Av=aFilter.AOP(Av);}return Jh;},AOI:function(){var Be=
this.Mo();var U3=A._NewObject(C.AnimalTypeFilterCriterion,0);U3.Initialize(14,0,
1,true);Be.CW(U3);return Be;},AC0:function(){var B;var A32;var J3=this.BiI();A32=(((
B=A._GetAutoObject(C.Converter).AqA(J3))<0)?B+0x10000000000000000:B)*this.ApS(12
);if((J3===10)&&(A._GetAutoObject(C.Device).Ut>0)){var ByY=A._GetAutoObject(C.Helper
).Sf(A._GetAutoObject(C.Device).Ut,10,2)*this.ApS(8);A32+=ByY;}return A32;},BiI:
function(){var J3=0;if(A._GetAutoObject(C.Device).Ut>0)J3=A._GetAutoObject(C.Converter
).ZZ(A._GetAutoObject(C.Device).Ut);if(!J3)J3=A._GetAutoObject(C.Converter).A68(
A._GetAutoObject(C.Device).Language);return J3;},AQ7:function(Xl){var Aiv=A._GetAutoObject(
C.Device).Am.Aeh(26,Xl);return Aiv;},Aj6:function(AfI){switch(AfI){case 0:case 1:
case 2:case 3:case 4:case 5:return false;case 6:case 7:case 8:case 9:case 10:return true;
default:throw new Error(AV3+AfI.toFixed());}},BgK:function(Ro,Eu){var GB=0;switch(
Ro){case 1:GB=A._GetAutoObject(C.Helper).Ak5(Eu.TransponderId);break;case 0:if(!
A._GetAutoObject(C.Device).EartagNrAssignmentMode)GB=A._GetAutoObject(C.Device).
AjU;else switch(Eu.Gender){case 0:GB=A._GetAutoObject(C.Device).Aq6;break;case 1:
GB=A._GetAutoObject(C.Device).Aq5;break;case 2:GB=A._GetAutoObject(C.Device).AjU;
break;default:throw new Error(AHr+Eu.Gender.toFixed());}break;default:throw new Error(
AV4+Ro.toFixed());}return GB;},Bie:function(){var B;var AzR=(((((((A.aaR(A.acf.AhC
)+A.aaR(A.acf.Colon))+O4)+A._GetAutoObject(C.Device).AhC)+Ax9)+A.aaR(A.acf.BnF))+
A.aaR(A.acf.Colon))+O4)+A._GetAutoObject(A.acj.KJ).Bic(((B=A._GetAutoObject(C.Device
).QW.Timestamp)<0)?B+0x100000000:B);return AzR;},Bif:function(){var B;var AzR=((((((((((((((((((((((((((((
AV5+A._GetAutoObject(C.Device).RX.AD6.toFixed())+Lu)+A._GetAutoObject(C.Device).
RX.AEa.toFixed())+Lu)+A._GetAutoObject(C.Device).RX.AGm.toFixed())+O3)+A._GetAutoObject(
C.Device).RX.ACg)+O3)+A._GetAutoObject(A.acj.KJ).AjM(((B=A._GetAutoObject(C.Device
).RX.Timestamp)<0)?B+0x100000000:B))+O4)+AV6)+A._GetAutoObject(C.Device).Sw.AD6.
toFixed())+Lu)+A._GetAutoObject(C.Device).Sw.AEa.toFixed())+Lu)+A._GetAutoObject(
C.Device).Sw.AGm.toFixed())+O3)+A._GetAutoObject(C.Device).Sw.ACg)+O3)+A._GetAutoObject(
A.acj.KJ).AjM(((B=A._GetAutoObject(C.Device).Sw.Timestamp)<0)?B+0x100000000:B))+
O4)+AV7)+A._GetAutoObject(C.Helper).BiL())+O3)+A._GetAutoObject(C.Device).GetCommitHash(
))+O3)+A._GetAutoObject(C.Device).GetCommitCount().toFixed())+O3)+A._GetAutoObject(
A.acj.KJ).AjM(A._GetAutoObject(C.Device).GetCommitEpoch());return AzR;},Bid:function(
){var B;var AzR=(((((((((((((((((((((AV8+A._GetAutoObject(C.Device).QW.ARv.toFixed(
))+Lu)+A._GetAutoObject(C.Device).QW.ARw.toFixed())+Lu)+A._GetAutoObject(C.Device
).QW.ARu.toFixed())+O4)+A.aaR(A.acf.A6e))+A.aaR(A.acf.Colon))+N$)+A._GetAutoObject(
A.acj.KJ).AjM(((B=A._GetAutoObject(C.Device).QW.Timestamp)<0)?B+0x100000000:B))+
Ax9)+AV9)+A._GetAutoObject(C.Device).SU.AVe.toFixed())+Lu)+A._GetAutoObject(C.Device
).SU.AVf.toFixed())+Lu)+A._GetAutoObject(C.Device).SU.AVd.toFixed())+O4)+A.aaR(A.
acf.A6e))+A.aaR(A.acf.Colon))+N$)+A._GetAutoObject(A.acj.KJ).AjM(((B=A._GetAutoObject(
C.Device).SU.Timestamp)<0)?B+0x100000000:B);return AzR;},A6A:function(A0H){var B;
var O;var AAP=A.jV;for(O=1;O<=A0H;O=O+1)if(!!A.abz(0,2))AAP=AAP+String.fromCharCode(
A.abz(97,104)&0xFFFF);else AAP=AAP+String.fromCharCode(A.abz(48,57)&0xFFFF);return AAP;
},Abp:function(Em){var Ay7=0;if(Em===1)Em=0;var Bcd=this.Agy.Avl(Em);if(Bcd>=0)Ay7=
this.Afu.Get(Bcd);return Ay7;},AC2:function(Em){var FS=0;var ABr=this.Agy.Avl(Em
);if(ABr>=0)FS=this.Aft.Get(ABr);return FS;},AC1:function(Em){var FS=0;var ABr=this.
Agy.Avl(Em);if(ABr>=0)FS=this.Afs.Get(ABr);return FS;},A6r:function(){var Be=this.
Mo();var U3=A._NewObject(C.AnimalTypeFilterCriterion,0);U3.Initialize(14,0,A._GetAutoObject(
C.Device).ACA,true);Be.CW(U3);return Be;},AQ_:function(J1){var BO=Math.trunc(J1/
1000000000000)|0;if(!BO)return 0;else if(BO>=900)return 1;else if(!A._GetAutoObject(
C.Converter).ANy(BO))return 2;else return 3;},A6E:function(){var Be=A._GetAutoObject(
C.Helper).ACU();var AfN=A._GetAutoObject(C.Helper).A6m(3,A._GetAutoObject(C.Device
).AD9);AfN.YI=true;Be.CW(AfN);return Be;},A6m:function(Eb,Bbj){var Av=A._NewObject(
C.UInt32FilterCriterion,0);Av.EK=4;switch(Eb){case 2:{Av.Operator=3;Av.A4=A._GetAutoObject(
C.Helper).ZQ(Bbj);}break;case 3:{Av.Operator=2;Av.A4=A._GetAutoObject(C.Helper).
ZQ(Bbj-1);}break;default:A.ab5("%s%e",AV_,Eb);}return Av;},BiL:function(){return(((
A._GetAutoObject(C.Device).GetVersionMajor().toFixed()+Lu)+A._GetAutoObject(C.Device
).GetVersionMinor().toFixed())+Lu)+A._GetAutoObject(C.Device).GetVersionRev().toFixed(
);},A4K:function(Ro,Eu){var GB=0;switch(Ro){case 0:GB=Eu.VisualId;break;case 2:GB=
A._GetAutoObject(C.Helper).Ak5(Eu.TransponderId);break;case 3:if(Eu.NaisId>0)GB=
A._GetAutoObject(C.Helper).Ak5(Eu.NaisId);break;case 1:if(!A._GetAutoObject(C.Device
).EartagNrAssignmentMode)GB=A._GetAutoObject(C.Device).AjU;else switch(Eu.Gender
){case 0:GB=A._GetAutoObject(C.Device).Aq6;break;case 1:GB=A._GetAutoObject(C.Device
).Aq5;break;case 2:GB=A._GetAutoObject(C.Device).AjU;break;default:throw new Error(
AHr+Eu.Gender.toFixed());}break;default:throw new Error(AHs+Ro.toFixed());}return GB;
},A$v:function(){var B;var IT=null;var Te=0;if(!A._GetAutoObject(C.Device).EartagNrAssignmentMode
){IT=[B=A._GetAutoObject(C.Device),B.Anp,B.AoD];Te=A._GetAutoObject(C.Device).AuY;
}else switch(A._GetAutoObject(C.Helper).W.Gender){case 1:{IT=[B=A._GetAutoObject(
C.Device),B.Av_,B.AyC];Te=A._GetAutoObject(C.Device).ACs;}break;case 0:{IT=[B=A.
_GetAutoObject(C.Device),B.Av$,B.AyD];Te=A._GetAutoObject(C.Device).ACt;}break;case
2:{IT=[B=A._GetAutoObject(C.Device),B.Anp,B.AoD];Te=A._GetAutoObject(C.Device).AuY;
}break;default:;}if(!!IT)switch(Te){case 1:IT[2].call(IT[0],A._GetAutoObject(C.Helper
).W.VisualId-1);break;case 0:IT[2].call(IT[0],A._GetAutoObject(C.Helper).W.VisualId+
1);break;default:;}},A66:function(Xl,Eu){return(Eu.NaisId!==Xl)&&this.AQ7(Xl);},
Bje:function(Jf,Eu){return(Eu.TransponderId!==Jf)&&this.AQ9(Jf);},AOG:function(){
var Be=A._GetAutoObject(C.Helper).A6C();var AAa=A._NewObject(C.UInt64FilterCriterion
,0);AAa.Initialize(35,5,0,true);Be.CW(AAa);return Be;},ACW:function(){var Be=A._GetAutoObject(
C.Helper).A6C();var AAa=A._NewObject(C.UInt64FilterCriterion,0);AAa.Initialize(35
,0,0,true);Be.CW(AAa);return Be;},JV:function(A0y,Ah1){A0y.Aj(Ah1);A0y.Ar(Ah1);A0y.
Z(Ah1);},ANs:function(Ah3){var B;var Aa;var A2E=false;var Xr=Ah3.TL(null,0x1);while(
!!Xr&&(((B=Xr)?B.__proto__:null)!==A.Core.Y)){Aa=(A.kR.Cp.isPrototypeOf(Xr)?Xr:null
);if(!!Aa){Aa.Bh(A2E);A2E=!A2E;}Xr=Ah3.TL(Xr,0x1);}},BnY:function(Jf){var Ac5=A.
_GetAutoObject(C.Device).Am.Filter;A._GetAutoObject(C.Device).Am.Bl(null);var A3K=
A._GetAutoObject(C.Device).Am.AgQ(22,Jf);var B3=A._NewObject(C.Animal,0);B3.Er(A3K
,A._GetAutoObject(C.Device).Am);B3.PP(0);B3.Ch(A._GetAutoObject(C.Device).Am);A.
_GetAutoObject(C.Device).Am.Bl(Ac5);},A6p:function(Ato){var Be=null;switch(Ato){
case 0:Be=this.Biw();break;case 1:Be=this.ACU();break;default:throw new Error(AHt+
Ato.toFixed());}return Be;},Biw:function(){var Be=A._GetAutoObject(C.Helper).Mo(
);var AfN=this.A6m(2,100);Be.CW(AfN);return Be;},BxT:function(Ato){var Ac5=A._GetAutoObject(
C.Device).Am.Filter;A._GetAutoObject(C.Device).Am.Bl(this.A6p(Ato));var CB=A._GetAutoObject(
C.Device).Am.Ca();var O;for(O=CB-1;O>=0;O--){A._GetAutoObject(C.Helper).W.Er(O,A.
_GetAutoObject(C.Device).Am);A._GetAutoObject(C.Helper).W.Ae0(false);A._GetAutoObject(
C.Helper).W.Ch(A._GetAutoObject(C.Device).Am);}A._GetAutoObject(C.Device).Am.Bl(
Ac5);},Bix:function(Ato){var Ac5=A._GetAutoObject(C.Device).Am.Filter;A._GetAutoObject(
C.Device).Am.Bl(this.A6p(Ato));var Ge=A._GetAutoObject(C.Device).Am.Ca();A._GetAutoObject(
C.Device).Am.Bl(Ac5);return Ge;},Ary:function(){return this.Uw;},A8K:function(){
return this.Ahz;},BkO:function(){return this.AUn;},BkP:function(){return this.AUo;
},BkS:function(){return this.AGO;},_Init:function(aArg){C.AmJ._Init.call(this,aArg
);C.Animal._Init.call(this.W={I:this},0);A.Core.Bs._Init.call(this.Au={I:this},0
);A.acl.Gi._Init.call(this.KE={I:this},0);A.acl.Gi._Init.call(this.SO={I:this},0
);C.AMD._Init.call(this.AdW={I:this},0);C.AU5._Init.call(this.UD={I:this},0);C.AU4.
_Init.call(this.UC={I:this},0);C.TE._Init.call(this.Aej={I:this},0);C.AVI._Init.
call(this.Aft={I:this},0);C.AVH._Init.call(this.Afs={I:this},0);C.AVG._Init.call(
this.Afr={I:this},0);C.AVK._Init.call(this.Afu={I:this},0);C.AME._Init.call(this.
Agy={I:this},0);this.__proto__=C.HelperClass;var B;this.KE.HM(1);this.KE.Fm(3000
);this.KE.B2=100;this.SO.AwA(10);this.SO.WD(5);this.SO.HM(1);this.SO.Fm(4000);this.
Aej.B2=false;this.Aej.Cw=true;this.Aej.HM(1);this.Aej.Fm(100);this.KE.Sx=[this,this.
BBG];this.KE.Q=[this,this.BkS,this.Bm_];this.SO.Sx=[this,this.BBI];this.SO.Q=[B=
A._GetAutoObject(C.Device),B.AEB,B.AIS];this.Aej.Q=[B=A._GetAutoObject(C.Device)
,B.AEC,B.AIT];this.Init(aArg);var Lv=this._variants();if(Lv){this.K={};Lv._Init.
call(this,aArg);}},_Done:function(){if(this.K)this.K._Done.call(this);this.__proto__=
C.AmJ;this.W._Done();this.Au._Done();this.KE._Done();this.SO._Done();this.AdW._Done(
);this.UD._Done();this.UC._Done();this.Aej._Done();this.Aft._Done();this.Afs._Done(
);this.Afr._Done();this.Afu._Done();this.Agy._Done();C.AmJ._Done.call(this);},_ReInit:
function(){C.AmJ._ReInit.call(this);this.W._ReInit();this.Au._ReInit();this.KE._ReInit(
);this.SO._ReInit();this.AdW._ReInit();this.UD._ReInit();this.UC._ReInit();this.
Aej._ReInit();this.Aft._ReInit();this.Afs._ReInit();this.Afr._ReInit();this.Afu.
_ReInit();this.Agy._ReInit();if(this.K)this.K._ReInit.call(this);},_Mark:function(
D){var B;C.AmJ._Mark.call(this,D);if((B=this.Uw)&&(B._cycle!=D))B._Mark(B._cycle=
D);if((B=this.Ahz)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.AUn)&&(B._cycle
!=D))B._Mark(B._cycle=D);if((B=this.AUo)&&(B._cycle!=D))B._Mark(B._cycle=D);if((
B=this.W)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Au)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.KE)._cycle!=D)B._Mark(B._cycle=D);if((B=this.SO)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.AdW)._cycle!=D)B._Mark(B._cycle=D);if((B=this.UD)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.UC)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Aej
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Aft)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Afs)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Afr)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Afu)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Agy)._cycle!=D)B._Mark(
B._cycle=D);if(this.K)this.K._Mark(D);},_variants:function(){return A.acs.HelperClass.
_variants();},K:null,_className:"Device::HelperClass"};C.Helper={_Init:function(
){C.HelperClass._Init.call(this,0);},_ReInit:function(){},_variants:function(){return this;
},_this:null};C.BoolFilterCriterion={A4:false,Abi:function(){var Av=A._NewObject(
C.BoolFilterCriterion,0);Av.E8(this);return Av;},E8:function(AH){C.FilterCriterion.
E8.call(this,AH);var Av=(C.BoolFilterCriterion.isPrototypeOf(AH)?AH:null);if(!!Av
)this.A4=Av.A4;},Initialize:function(A3,Eb,A7,P$){this.EK=A3;this.Operator=Eb;this.
A4=A7;this.YI=P$;return this;},_Init:function(aArg){C.FilterCriterion._Init.call(
this,aArg);this.__proto__=C.BoolFilterCriterion;},_className:"Device::BoolFilterCriterion"
};C.UInt32FilterCriterion={A4:0,Abi:function(){var Av=A._NewObject(C.UInt32FilterCriterion
,0);Av.E8(this);return Av;},E8:function(AH){C.FilterCriterion.E8.call(this,AH);var
Av=(C.UInt32FilterCriterion.isPrototypeOf(AH)?AH:null);if(!!Av)this.A4=Av.A4;},Initialize:
function(A3,Eb,A7,P$){this.EK=A3;this.Operator=Eb;this.A4=A7;this.YI=P$;return this;
},_Init:function(aArg){C.FilterCriterion._Init.call(this,aArg);this.__proto__=C.
UInt32FilterCriterion;},_className:"Device::UInt32FilterCriterion"};C.OverlayMenu={
None:0,Home:1,AutoAction:2,MenuItemSettings:3,RatingSettings:4,WeighingSettings:
5,Options:6,AnimalSearch:7,ActionSettings:8,MeasurementReady:9,AnimalMultiInfoMenu:
10,AnimalSearchUnfiltered:11,AnimalSearchDriedOff:12,MassRecordingMenu:13,MassRecordingDefaults:
14,MassRecordingFields:15,PurchasedAnimalsListMenu:16,BirthRegistrationsListMenu:
17,LAST:18};C.EnumToString={BH:function(A5){throw new Error(Aoq+A5.toFixed());},
Ls:function(A5){return this.BH(A5);},_Init:function(aArg){this.__proto__=C.EnumToString;
A.h7++;},_Done:function(){this.__proto__=null;A.h7--;},_ReInit:function(){},_Mark:
function(D){var B;if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:
0,_observers:null,_className:"Device::EnumToString"};C.ScreenTypeToString={BH:function(
A5){var AJV=A5;var BD;switch(AJV){case 3:BD=A.aaR(A.acf.Avr);break;case 34:BD=A.
aaR(A.acf.Tt);break;case 35:BD=A.aaR(A.acf.Vr);break;case 43:BD=A.aaR(A.acf.AOF);
break;default:BD=this.Bpk(A5);}return BD;},Bpk:function(A5){var AJV=A5;var BD=A.
jV;switch(AJV){case 0:BD=Ax_;break;case 2:BD=AV$;break;case 4:BD=AWa;break;case 39:
BD=AWb;break;case 38:BD=AHu;break;case 63:BD=AWc;break;case 64:BD=AHv;break;case
82:BD=AHw;break;case 83:BD=AHx;break;case 92:BD=AWd;break;case 93:BD=AHy;break;case
65:BD=AWe;break;case 3:BD=AHz;break;case 6:BD=Rl;break;case 16:BD=Xd;break;case 22:
BD=AWf;break;case 42:BD=AWg;break;case 88:BD=AWh;break;case 87:BD=AWi;break;case
89:BD=AWj;break;case 95:BD=AWk;break;case 17:BD=AWl;break;case 23:BD=AhT;break;case
18:BD=AHA;break;case 19:BD=AWm;break;case 37:BD=AWn;break;case 76:BD=AHB;break;case
1:BD=AHC;break;case 5:BD=Ax$;break;case 7:BD=P8;break;case 81:BD=AWo;break;case 8:
BD=AWp;break;case 9:BD=AWq;break;case 40:BD=As1;break;case 41:BD=AWr;break;case 24:
BD=AWs;break;case 10:BD=AWt;break;case 60:BD=AWu;break;case 21:BD=AWv;break;case
11:BD=AWw;break;case 29:BD=As2;break;case 48:BD=AWx;break;case 30:BD=AWy;break;case
12:BD=AWz;break;case 13:BD=AWA;break;case 14:BD=AWB;break;case 15:BD=AWC;break;case
69:BD=AWD;break;case 70:BD=AWE;break;case 20:BD=AWF;break;case 25:BD=AWG;break;case
66:BD=AHD;break;case 59:BD=Alc;break;case 58:BD=AWH;break;case 56:BD=AWI;break;case
57:BD=AWJ;break;case 68:BD=Aya;break;case 67:BD=Ald;break;case 84:BD=AhU;break;case
77:BD=Ayb;break;case 26:BD=Aor;break;case 28:BD=AhV;break;case 27:BD=AWK;break;case
31:BD=Ayc;break;case 78:BD=AHE;break;case 34:BD=AfA;break;case 35:BD=AHF;break;case
32:BD=Aae;break;case 45:BD=Ale;break;case 49:BD=Aos;break;case 55:BD=AWL;break;case
54:BD=AWM;break;case 33:BD=AWN;break;case 36:BD=AWO;break;case 50:BD=AWP;break;case
75:BD=As3;break;case 43:BD=AHG;break;case 44:BD=AHH;break;case 61:BD=AWQ;break;case
62:BD=AWR;break;case 46:BD=AWS;break;case 47:BD=AWT;break;case 85:BD=AWU;break;case
86:BD=AWV;break;case 71:BD=AWW;break;case 72:BD=AWX;break;case 74:BD=AWY;break;case
73:BD=AWZ;break;case 51:BD=AW0;break;case 52:BD=Ayd;break;case 53:BD=AHI;break;case
79:BD=AHJ;break;case 80:BD=AHK;break;case 90:BD=AHL;break;case 91:BD=AHM;break;case
94:BD=AHN;break;default:throw new Error(AW1+AJV.toFixed());}return BD;},_Init:function(
aArg){C.EnumToString._Init.call(this,aArg);this.__proto__=C.ScreenTypeToString;}
,_className:"Device::ScreenTypeToString"};C.OverlayMenuToString={BH:function(A5){
var Be5=A5;var Om=A.jV;switch(Be5){case 0:Om=AW2;break;case 1:Om=AHz;break;case 8:
Om=AW3;break;case 2:Om=AW4;break;case 3:Om=AW5;break;case 4:Om=AW6;break;case 5:
Om=AW7;break;case 6:Om=Aye;break;case 7:Om=AHO;break;case 11:Om=AW8;break;case 12:
Om=AHP;break;case 9:Om=AhW;break;case 10:Om=UW;break;case 14:Om=AW9;break;case 15:
Om=Aaf;break;case 13:Om=AW_;break;case 16:Om=AW$;break;case 17:Om=Alf;break;default:
throw new Error(AfB+Be5.toFixed());}return Om;},_Init:function(aArg){C.EnumToString.
_Init.call(this,aArg);this.__proto__=C.OverlayMenuToString;},_className:"Device::OverlayMenuToString"
};C.ScanStateToString={BH:function(A5){var BfE=A5;var Bp=A.jV;switch(BfE){case 4:
Bp=AcO;break;case 0:Bp=Aot;break;case 2:Bp=AXa;break;case 3:Bp=O5;break;case 1:Bp=
AHQ;break;default:throw new Error(AHR+BfE.toFixed());}return Bp;},_Init:function(
aArg){C.EnumToString._Init.call(this,aArg);this.__proto__=C.ScanStateToString;},
_className:"Device::ScanStateToString"};C.MeasureStateToString={BH:function(A5){
var BdH=A5;var Bp=A.jV;switch(BdH){case 4:Bp=AcO;break;case 0:Bp=Aot;break;case 2:
Bp=AXb;break;case 1:Bp=AHQ;break;case 3:Bp=AHS;break;default:throw new Error(AHT+
BdH.toFixed());}return Bp;},_Init:function(aArg){C.EnumToString._Init.call(this,
aArg);this.__proto__=C.MeasureStateToString;},_className:"Device::MeasureStateToString"
};C.TemperatureUnit={Celsius:0,Fahrenheit:1,LAST:2};C.TemperatureUnitToString={BH:
function(A5){var Bf3=A5;var Ap9=A.jV;switch(Bf3){case 0:Ap9=A.aaR(A.acf.BpD);break;
case 1:Ap9=A.aaR(A.acf.BpE);break;default:throw new Error(AHU+Bf3.toFixed());}return Ap9;
},_Init:function(aArg){C.EnumToString._Init.call(this,aArg);this.__proto__=C.TemperatureUnitToString;
},_className:"Device::TemperatureUnitToString"};C.AnimalType={DairyCalf:0,DairyCow:
1,SheepLamb:2,LAST:3};C.AnimalTypeToString={BH:function(A5){var AK6=A5;var type=
A.jV;switch(AK6){case 0:type=A.aaR(A.acf.Bg_);break;case 1:type=A.aaR(A.acf.Bhm);
break;case 2:type=A.aaR(A.acf.Bjm);break;default:throw new Error(AXc+AK6.toFixed(
));}return type;},_Init:function(aArg){C.EnumToString._Init.call(this,aArg);this.
__proto__=C.AnimalTypeToString;},_className:"Device::AnimalTypeToString"};C.Language={
Default:0,German:1,Spanish:2,French:3,Italian:4,Finnish:5,Chinese_TW:6,Turkish:7
,Greek:8,Russian:9,Dutch:10,Czech:11,Estonian:12,Bulgarian:13,Bosnian:14,Norwegian:
15,Ukrainian:16,LAST:17};C.LanguageToString={BH:function(A5){var Az5=A5;var O$=A.
jV;switch(Az5){case 0:O$=AXd;break;case 10:O$=AXe;break;case 1:O$=AXf;break;case
12:O$=AXg;break;case 5:O$=AXh;break;case 3:O$=AXi;break;case 8:O$=AXj;break;case
13:O$=AHV;break;case 4:O$=AXk;break;case 9:O$=AHW;break;case 2:O$=AHX;break;case
7:O$=Ayf;break;case 6:O$=AXl;break;case 11:O$=AXm;break;case 14:O$=AXn;break;case
15:O$=AXo;break;case 16:O$=AXp;break;default:throw new Error(AHY+Az5.toFixed());
}return O$;},Ls:function(A5){var Az5=A5;var Dm=A.jV;switch(Az5){case 0:Dm=AXq;break;
case 10:Dm=W$;break;case 1:Dm=P6;break;case 12:Dm=AXr;break;case 5:Dm=UR;break;case
3:Dm=W5;break;case 8:Dm=As4;break;case 13:Dm=W2;break;case 4:Dm=W6;break;case 9:
Dm=S7;break;case 2:Dm=Aaa;break;case 7:Dm=Aac;break;case 6:Dm=As5;break;case 11:
Dm=AHZ;break;case 14:Dm=AXs;break;case 15:Dm=S6;break;case 16:Dm=JZ;break;default:
throw new Error(AHY+Az5.toFixed());}return Dm;},_Init:function(aArg){C.EnumToString.
_Init.call(this,aArg);this.__proto__=C.LanguageToString;},_className:"Device::LanguageToString"
};C.Gender={Male:0,Female:1,Unknown:2,LAST:3};C.BirthType={Single:0,Twins:1,Triplets:
2,Quadruplets:3,LAST:4};C.GenderToString={BH:function(A5){var AtN=A5;var AKb=A.jV;
switch(AtN){case 0:AKb=A.aaR(A.acf.Male);break;case 1:AKb=A.aaR(A.acf.Female);break;
case 2:AKb=A.aaR(A.acf.Unknown);break;default:throw new Error(AXt+AtN.toFixed());
}return AKb;},_Init:function(aArg){C.EnumToString._Init.call(this,aArg);this.__proto__=
C.GenderToString;},_className:"Device::GenderToString"};C.BirthTypeToString={BH:
function(A5){var type=A5;var AfR=A.jV;switch(type){case 0:AfR=A.aaR(A.acf.Boy);break;
case 1:AfR=A.aaR(A.acf.Bpz);break;case 2:AfR=A.aaR(A.acf.Triplets);break;case 3:
AfR=A.aaR(A.acf.Quadruplets);break;default:throw new Error(AXu+type.toFixed());}
return AfR;},_Init:function(aArg){C.EnumToString._Init.call(this,aArg);this.__proto__=
C.BirthTypeToString;},_className:"Device::BirthTypeToString"};C.SyncState={Idle:
0,Init:1,Exporting:2,ImportStart:3,Importing:4,ImportFinish:5,Ready:6,Error:7,LAST:
8};C.SyncStateToString={BH:function(A5){var BfX=A5;var Bp=A.jV;switch(BfX){case 7:
Bp=AcO;break;case 0:Bp=Aot;break;case 6:Bp=AHS;break;case 2:Bp=AXv;break;case 5:
Bp=AXw;break;case 3:Bp=AXx;break;case 4:Bp=AXy;break;case 1:Bp=AXz;break;default:
throw new Error(AXA+BfX.toFixed());}return Bp;},_Init:function(aArg){C.EnumToString.
_Init.call(this,aArg);this.__proto__=C.SyncStateToString;},_className:"Device::SyncStateToString"
};C.RatedAttributeToString={BH:function(A5){var AAQ=A5;switch(AAQ){case 0:return A.
jV;case 1:return A.aaR(A.acf.BnN);case 4:return A.aaR(A.acf.BnM);case 3:return A.
aaR(A.acf.BnO);case 2:return A.aaR(A.acf.BnL);default:throw new Error(AH0+AAQ.toFixed(
));}},Ls:function(A5){var AAQ=A5;switch(AAQ){case 0:return A.jV;case 1:return A.
aaR(A.acf.Feed);case 4:return A.aaR(A.acf.AGe);case 3:return A.aaR(A.acf.AGf);case
2:return A.aaR(A.acf.AGc);default:throw new Error(AH0+AAQ.toFixed());}},_Init:function(
aArg){C.EnumToString._Init.call(this,aArg);this.__proto__=C.RatedAttributeToString;
},_className:"Device::RatedAttributeToString"};C.AssesmentToString={BH:function(
A5){var Als=A5;var Azc=A.jV;switch(Als){case 0:case 5:Azc=A.jV;break;case 3:Azc=
A.aaR(A.acj.BoE);break;case 2:Azc=A.aaR(A.acj.BoG);break;case 1:Azc=A.aaR(A.acj.
BoF);break;default:throw new Error(AXB+Als.toFixed());}return Azc;},_Init:function(
aArg){C.EnumToString._Init.call(this,aArg);this.__proto__=C.AssesmentToString;},
_className:"Device::AssesmentToString"};C.PopupId={Unknown:0,SevereError:1,EnterSleep:
2,About:3,WarningDataSync:4,SuccessDataSync:5,WarningRestart:6,WarningFactorySettings:
7,SuccessResetFactorySettings:8,ShutDown:9,TechnicalDetails:10,ScanError:11,ScanNotFound:
12,ScannedAnimalNotFound:13,AnimalNotFound:14,SuccessUnregister:15,DataSynchInProgress:
16,AddedToAlarm:17,RemovedFromAlarm:18,AddedToWatch:19,RemovedFromWatch:20,AnimalIdAlreadyExists:
21,MissingAnimalId:22,SuccessCreationNewAnimals:23,AnimalCreationInProgress:24,TransponderAlreadyRegistered:
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
Id:0,Show:false,BmT:function(E){var B;if(this.PopupState===E)return;this.PopupState=
E;if(!!this.AF1)(B=this.AF1)?B[1].call(B[0],this):null;},_Init:function(aArg){this.
__proto__=C.PopupContext;A.h7++;},_Done:function(){this.__proto__=null;A.h7--;},
_ReInit:function(){},_Mark:function(D){var B;if((B=this.AF1)&&((B=B[0])._cycle!=
D))B._Mark(B._cycle=D);if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null
,_cycle:0,_observers:null,_className:"Device::PopupContext"};C.Boolean={No:0,Yes:
1,LAST:2};C.BooleanToYesNo={BH:function(A5){switch(A5){case 0:return A.aaR(A.acf.
No);case 1:return A.aaR(A.acf.Yes);default:return Ayg+A5.toFixed();}},_Init:function(
aArg){C.EnumToString._Init.call(this,aArg);this.__proto__=C.BooleanToYesNo;},_className:
"Device::BooleanToYesNo"};C.AnimalGroupTableFields={Id:0,GroupName:1};C.AnimalGroup={
GroupName:AHn,Id:0,Er:function(Ad,AI){var HA=C.Row.Er.call(this,Ad,AI);if(HA&&!!
AI){this.OnSetId(AI.CE(Ad,0));this.AE_(AI.VV(Ad,1));}return HA;},Ch:function(AI){
var HA=C.Row.Ch.call(this,AI);if(HA&&!!AI){var Jk=AI.Ox();if(Jk<=0)A.ab5("%s",Xc
);else{if(this.Am3())this.CL=AI.YF();AI.Hj(this.CL,0,this.Id);AI.ZI(this.CL,1,this.
GroupName);AI.Oz(Jk);}}return HA;},Gn:function(){C.Row.Gn.call(this);this.OnSetId(-
1);},Hi:function(){C.Row.Hi.call(this);this.OnSetId(0);this.AE_(A.jV);},OnSetId:
function(E){if(this.Id===E)return;this.Id=E;A.abo([this,this.QZ,this.OnSetId],0);
},AE_:function(E){if(this.GroupName===E)return;this.GroupName=E;A.abo([this,this.
Bkt,this.AE_],0);},QZ:function(){return this.Id;},Bkt:function(){return this.GroupName;
},_Init:function(aArg){C.Row._Init.call(this,aArg);this.__proto__=C.AnimalGroup;
this.TableId=3;},_className:"Device::AnimalGroup"};C.PopupIdToString={BH:function(
A5){var Ady=A5;var Ax=A.jV;var AJT;AJT=A.aaR(A.acf.BpX)+O4;switch(Ady){case 0:Ax=
A.aaR(A.acf.Unknown);break;case 1:Ax=A.aaR(A.acf.SevereError);break;case 58:Ax=A.
aaR(A.acf.Bh3);break;case 2:Ax=A.aaR(A.acf.Bh1);break;case 3:Ax=A.aaR(A.acf.BpJ);
break;case 77:Ax=A._GetAutoObject(C.Helper).Bif();break;case 78:Ax=A._GetAutoObject(
C.Helper).Bid();break;case 79:Ax=A._GetAutoObject(C.Helper).Bie();break;case 9:Ax=
A.aaR(A.acf.Bp$);break;case 5:Ax=A.aaR(A.acf.SuccessDataSync);break;case 8:Ax=A.
aaR(A.acf.SuccessResetFactorySettings);break;case 34:Ax=A.aaR(A.acf.SuccessResetAnimalData
);break;case 10:Ax=A._GetAutoObject(C.Device).ACZ();break;case 82:Ax=A.aaR(A.acf.
Bh5);break;case 83:Ax=A.aaR(A.acf.Bh6);break;case 80:Ax=A.aaR(A.acf.BoQ);break;case
81:Ax=A.aaR(A.acf.SuccessRestoreBackup);break;case 91:Ax=A.aaR(A.acf.BgY);break;
case 92:Ax=A.aaR(A.acf.Bn1);break;case 4:Ax=A.aaR(A.acf.WarningDataSync);break;case
7:Ax=A.aaR(A.acf.Bp9);break;case 33:Ax=A.aaR(A.acf.WarningResetAnimalData);break;
case 6:Ax=A.aaR(A.acf.WarningRestart);break;case 27:Ax=A.aaR(A.acf.WarningNoActionDefined
);break;case 64:Ax=A.aaR(A.acf.WarningActionNotApplicable);break;case 28:Ax=A.aaR(
A.acf.WarningNoMenuItemVisible);break;case 29:Ax=A.aaR(A.acf.WarningEnterPresentationMode
);break;case 30:Ax=A.aaR(A.acf.WarningNoAnimalsRegistered);break;case 41:Ax=((AJT+
A.aaR(A.acf.ARD))+O4)+A.aaR(A.acf.Bjz);break;case 50:Ax=((AJT+A.aaR(A.acf.ARD))+
O4)+A.aaR(A.acf.BjB);break;case 51:Ax=((AJT+A.aaR(A.acf.ARD))+O4)+A.aaR(A.acf.BjA
);break;case 42:Ax=A.aaR(A.acf.Bp7);break;case 45:Ax=A.aaR(A.acf.Bp1);break;case
46:Ax=A.aaR(A.acf.WarningNoValidCountryCode);break;case 57:Ax=A.aaR(A.acf.WarningOutdatedAnimalWeight
);break;case 52:Ax=A.aaR(A.acf.WarningOutdatedAnimalWeights);break;case 53:Ax=A.
aaR(A.acf.WarningWeightEvaluationSingular);break;case 56:Ax=A.aaR(A.acf.WarningWeightEvaluationPlural
);break;case 11:Ax=A.aaR(A.acf.ScanError);break;case 12:Ax=A.aaR(A.acf.ScanNotFound
);break;case 13:Ax=A.aaR(A.acf.BgQ);break;case 36:Ax=A.aaR(A.acf.Bps);break;case
14:Ax=A.aaR(A.acf.AnimalNotFound);break;case 15:Ax=A.aaR(A.acf.SuccessUnregister
);break;case 35:Ax=A.aaR(A.acf.SuccessUnregisterPerished);break;case 26:Ax=A.aaR(
A.acf.SuccessCreationNewAnimal);break;case 23:Ax=A.aaR(A.acf.SuccessCreationNewAnimals
);break;case 24:Ax=A.aaR(A.acf.Bhp);break;case 49:Ax=A.aaR(A.acf.EvaluationInProgress
);break;case 16:Ax=A.aaR(A.acf.Bhv);break;case 17:Ax=A.aaR(A.acf.BoI);break;case
18:Ax=A.aaR(A.acf.BoW);break;case 19:Ax=A.aaR(A.acf.BoJ);break;case 20:Ax=A.aaR(
A.acf.BoX);break;case 54:Ax=A.aaR(A.acf.BoR);break;case 55:Ax=A.aaR(A.acf.BoU);break;
case 21:Ax=A.aaR(A.acf.A$z);break;case 48:Ax=(A.aaR(A.acf.A$z)+O4)+A.aaR(A.acf.A5q
);break;case 22:Ax=A.aaR(A.acf.Bp3);break;case 63:Ax=A.aaR(A.acf.Bp4);break;case
85:Ax=A.aaR(A.acf.Bp6);break;case 43:Ax=A.aaR(A.acf.Bp5);break;case 25:Ax=A.aaR(
A.acf.A$k);break;case 47:Ax=(A.aaR(A.acf.A$k)+O4)+A.aaR(A.acf.A5q);break;case 107:
Ax=A.aaR(A.acf.BpF);break;case 31:{var Bzn=(((((((((((((((((((A.aaR(A.acf.Bhg)+Ax9
)+A.aaR(A.acf.ANu))+A.aaR(A.acf.Colon))+N$)+A.aaR(A.acf.Bhi))+O4)+A.aaR(A.acf.AOv
))+A.aaR(A.acf.Colon))+N$)+A.aaR(A.acf.Bh$))+O4)+A.aaR(A.acf.AT_))+A.aaR(A.acf.Colon
))+N$)+A.aaR(A.acf.BnQ))+O4)+A.aaR(A.acf.AT9))+A.aaR(A.acf.Colon))+N$)+A.aaR(A.acf.
BnP);Ax=Bzn;}break;case 32:Ax=A.aaR(A.acf.Bpt);break;case 69:Ax=A.aaR(A.acf.BjM);
break;case 44:Ax=A.aaR(A.acf.Bp_);break;case 37:Ax=A.aaR(A.acf.WarningResetWeightSettings
);break;case 38:Ax=A.aaR(A.acf.WarningResetTempThresholds);break;case 39:Ax=A.aaR(
A.acf.BnG);break;case 76:Ax=(A.aaR(A.acf.A45)+O4)+A.aaR(A.acf.AUa);break;case 40:
Ax=A.aaR(A.acf.BoS);break;case 75:Ax=A.aaR(A.acf.BoK);break;case 59:Ax=A.aaR(A.acf.
QuestionAddAnotherCalfMultiples);break;case 62:Ax=A.aaR(A.acf.BoM);break;case 96:
Ax=A.aaR(A.acf.BoN);break;case 60:Ax=A.aaR(A.acf.BoO);break;case 98:Ax=A.aaR(A.acf.
BoP);break;case 61:Ax=A.aaR(A.acf.BoY);break;case 104:Ax=A.aaR(A.acf.BoZ);break;
case 65:Ax=A.aaR(A.acf.SuccessClearAnimalLoss);break;case 66:Ax=A.aaR(A.acf.WarningNoActionsForAnimalLoss
);break;case 67:Ax=A.aaR(A.acf.SuccessLinkTransponder);break;case 106:Ax=A.aaR(A.
acf.BoL);break;case 86:Ax=A.aaR(A.acf.SuccessUnlinkTransponder);break;case 68:Ax=
A.aaR(A.acf.BoT);break;case 70:Ax=A.aaR(A.acf.Bh7);break;case 71:Ax=A.aaR(A.acf.
Bo2);break;case 72:Ax=A.aaR(A.acf.Bo3);break;case 97:Ax=A.aaR(A.acf.Bh9);break;case
100:Ax=A.aaR(A.acf.Bo4);break;case 99:Ax=A.aaR(A.acf.Bo5);break;case 88:Ax=A.aaR(
A.acf.Bh8);break;case 89:Ax=A.aaR(A.acf.Bo0);break;case 90:Ax=A.aaR(A.acf.Bo1);break;
case 73:Ax=A.aaR(A.acf.WarningNoPremisesID);break;case 74:Ax=A.aaR(A.acf.WarningNoFlashDrivePresent
);break;case 94:Ax=A.aaR(A.acf.WarningNoBackupPathPresent);break;case 93:Ax=A.aaR(
A.acf.WarningNoBackupFilePresent);break;case 84:Ax=A.aaR(A.acf.Bim);break;case 87:
Ax=A.aaR(A.acf.Bqb);break;case 95:Ax=A.aaR(A.acf.Bp0);break;case 108:Ax=A.aaR(A.
acf.Bp2);break;case 109:Ax=A.aaR(A.acf.SuccessMassDeregistration);break;case 102:
Ax=A.aaR(A.acf.WarningParsedDateInFutureInvalid);break;case 101:Ax=A.aaR(A.acf.WarningParsingDateFailed
);break;case 103:Ax=A.aaR(A.acf.WarningParsingNaisIdFailed);break;case 105:Ax=A.
aaR(A.acf.Bp8);break;default:throw new Error(AH1+Ady.toFixed());}return Ax;},Ls:
function(A5){var Ady=A5;var Ax=A.jV;switch(Ady){case 0:Ax=AXC;break;case 1:Ax=AXD;
break;case 58:Ax=AXE;break;case 2:Ax=AXF;break;case 3:Ax=AXG;break;case 77:Ax=AH2;
break;case 78:Ax=AH3;break;case 79:Ax=AH4;break;case 9:Ax=AH5;break;case 5:Ax=Ayh;
break;case 8:Ax=Ayi;break;case 34:Ax=AH6;break;case 80:Ax=AXH;break;case 81:Ax=AH7;
break;case 91:Ax=AXI;break;case 92:Ax=AH8;break;case 82:Ax=AXJ;break;case 83:Ax=
AXK;break;case 10:Ax=AXL;break;case 4:Ax=AXM;break;case 7:Ax=AXN;break;case 33:Ax=
AXO;break;case 6:Ax=AXP;break;case 27:Ax=AXQ;break;case 64:Ax=AXR;break;case 28:
Ax=AXS;break;case 29:Ax=AXT;break;case 30:Ax=AXU;break;case 41:Ax=Ayj;break;case
50:Ax=AXV;break;case 51:Ax=AXW;break;case 42:Ax=Ayk;break;case 45:Ax=As6;break;case
46:Ax=UX;break;case 57:Ax=As7;break;case 52:Ax=AXX;break;case 53:Ax=AXY;break;case
56:Ax=AXZ;break;case 11:Ax=AH9;break;case 12:Ax=AX0;break;case 13:Ax=AH_;break;case
36:Ax=AX1;break;case 14:Ax=AX2;break;case 15:Ax=AX3;break;case 35:Ax=As8;break;case
26:Ax=AX4;break;case 23:Ax=AX5;break;case 24:Ax=AH$;break;case 49:Ax=AX6;break;case
16:Ax=AX7;break;case 17:Ax=AX8;break;case 18:Ax=AX9;break;case 19:Ax=AcP;break;case
20:Ax=AX_;break;case 54:Ax=AX$;break;case 55:Ax=AYa;break;case 21:Ax=AYb;break;case
48:Ax=AIa;break;case 22:Ax=AYc;break;case 63:Ax=AYd;break;case 43:Ax=AYe;break;case
85:Ax=AYf;break;case 25:Ax=AYg;break;case 47:Ax=AYh;break;case 107:Ax=AIb;break;
case 31:Ax=AYi;break;case 32:Ax=AYj;break;case 69:Ax=AYk;break;case 44:Ax=AIc;break;
case 37:Ax=AId;break;case 38:Ax=AYl;break;case 39:Ax=AYm;break;case 76:Ax=AYn;break;
case 40:Ax=AYo;break;case 75:Ax=Rm;break;case 59:Ax=As9;break;case 62:Ax=AIe;break;
case 96:Ax=AIf;break;case 60:Ax=Aou;break;case 98:Ax=Aov;break;case 65:Ax=Ayl;break;
case 61:Ax=AYp;break;case 104:Ax=AIg;break;case 66:Ax=AYq;break;case 67:Ax=AYr;break;
case 106:Ax=AYs;break;case 86:Ax=AYt;break;case 68:Ax=AYu;break;case 70:Ax=AYv;break;
case 71:Ax=AYw;break;case 72:Ax=AYx;break;case 97:Ax=AYy;break;case 100:Ax=AYz;break;
case 99:Ax=AYA;break;case 88:Ax=AYB;break;case 89:Ax=AYC;break;case 90:Ax=AYD;break;
case 73:Ax=AYE;break;case 74:Ax=AYF;break;case 94:Ax=AYG;break;case 93:Ax=Aow;break;
case 84:Ax=AIh;break;case 87:Ax=AYH;break;case 95:Ax=AIi;break;case 108:Ax=AIj;break;
case 109:Ax=Aag;break;case 102:Ax=AIk;break;case 101:Ax=AYI;break;case 103:Ax=AIl;
break;case 105:Ax=AYJ;break;default:throw new Error(AH1+Ady.toFixed());}return Ax;
},_Init:function(aArg){C.EnumToString._Init.call(this,aArg);this.__proto__=C.PopupIdToString;
},_className:"Device::PopupIdToString"};C.PopupParamSeparator=";";C.RatingMode={
Basic:0,Extended:1,LAST:2};C.TransponderType={UNDEFINED:0,AnimalId:1,FarmId:2,GroupId:
3,PersonId:4,LAST:5};C.TransponderProtocol={UNDEFINED:0,FDX:1,HDX:2,HDX_URBAN:3,
LAST:4};C.TransponderTypeToString={BH:function(A5){var Bgd=A5;var type=A.jV;switch(
Bgd){case 1:type=Aym;break;case 2:type=AYK;break;case 3:type=AYL;break;case 4:type=
Ayn;break;case 0:type=Ax_;break;default:throw new Error(AYM+Bgd.toFixed());}return type;
},_Init:function(aArg){C.EnumToString._Init.call(this,aArg);this.__proto__=C.TransponderTypeToString;
},_className:"Device::TransponderTypeToString"};C.TransponderProtocolToString={BH:
function(A5){var Bgb=A5;var AAN=A.jV;switch(Bgb){case 1:AAN=AYN;break;case 2:AAN=
AYO;break;case 3:AAN=AIm;break;case 0:AAN=Ax_;break;default:throw new Error(Aox+
Bgb.toFixed());}return AAN;},_Init:function(aArg){C.EnumToString._Init.call(this
,aArg);this.__proto__=C.TransponderProtocolToString;},_className:"Device::TransponderProtocolToString"
};C.Transponder={Id:0,TransponderProtocol:0,TransponderType:0,ATE:function(E){if(
this.TransponderType===E)return;this.TransponderType=E;A.abo([this,this.Bk4,this.
ATE],0);},ATD:function(E){if(this.TransponderProtocol===E)return;this.TransponderProtocol=
E;A.abo([this,this.Bk3,this.ATD],0);},OnSetId:function(E){if(this.Id===E)return;
this.Id=E;A.abo([this,this.QZ,this.OnSetId],0);},AOS:function(){return A._GetAutoObject(
C.Converter).Bpr(this.Id);},Biu:function(){return A._GetAutoObject(C.Converter).
AxL(this.Id);},Bk4:function(){return this.TransponderType;},Bk3:function(){return this.
TransponderProtocol;},QZ:function(){return this.Id;},_Init:function(aArg){this.__proto__=
C.Transponder;A.h7++;},_Done:function(){this.__proto__=null;A.h7--;},_ReInit:function(
){},_Mark:function(D){var B;if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:
null,_cycle:0,_observers:null,_className:"Device::Transponder"};C.RatingModeToString={
BH:function(A5){var Vc=A5;var Nt=A.jV;switch(Vc){case 0:Nt=A.aaR(A.acf.Basic);break;
case 1:Nt=A.aaR(A.acf.Extended);break;default:throw new Error(AIn+Vc.toFixed());
}return Nt;},_Init:function(aArg){C.EnumToString._Init.call(this,aArg);this.__proto__=
C.RatingModeToString;},_className:"Device::RatingModeToString"};C.TableRowsCount={
_Init:function(aArg){this.__proto__=C.TableRowsCount;A.h7++;},_Done:function(){this.
__proto__=null;A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((B=this.
I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:
"Device::TableRowsCount"};C.MassUnit={Kilogramm:0,Pound:1,LAST:2};C.MassUnitToString={
BH:function(A5){var BdD=A5;var Ap9=A.jV;switch(BdD){case 0:Ap9=A.aaR(A.acf.Bjk);
break;case 1:Ap9=A.aaR(A.acf.Pound);break;default:throw new Error(AYP+BdD.toFixed(
));}return Ap9;},_Init:function(aArg){C.EnumToString._Init.call(this,aArg);this.
__proto__=C.MassUnitToString;},_className:"Device::MassUnitToString"};C.MinWeightGain=
20;C.MaxWeightGain=2000;C.WeightGainStep=10;C.Int32ArrayWrapper={MB:10,Array:A.abi(
10,0,null),Zy:function(E){if(this.MB===E)return;if(E>10)throw new Error(AIo);this.
MB=E;},Set:function(aIndex,AL){if((aIndex<0)||(aIndex>=this.MB))throw new Error(
Ayo);this.Array.Set(aIndex,AL);},Get:function(aIndex){if((aIndex<0)||(aIndex>=this.
MB))throw new Error(Ayo);return this.Array.Get(aIndex);},AmT:function(){var Qs=0;
var O;for(O=0;O<this.MB;O=O+1)Qs=Qs+this.Get(O);return Qs;},toString:function(){
var A2C=this.Array.Get(0).toFixed();var O;for(O=1;O<this.MB;O=O+1)A2C=(A2C+O3)+this.
Array.Get(O).toFixed();return A2C;},Er:function(aString){var Hw=aString.indexOf(
String.fromCharCode(0x2C),0);var A1r=A.jV;var O=0;while(O<10){if(aString===A.jV)
this.Array.Set(O,0);else{if(Hw===-1){A1r=aString;aString=A.jV;}else{A1r=A.abV(aString
,Hw);aString=A.ab1(aString,0,Hw+1);}this.Array.Set(O,A.wz(A1r,0,10));Hw=aString.
indexOf(String.fromCharCode(0x2C),0);}O=O+1;}if(aString!==A.jV)A.ab5("%s",Alg);}
,Ch:function(){},Hi:function(){var O;for(O=0;O<this.MB;O=O+1)this.Set(O,0);},Avl:
function(A7){var O=0;while(O<this.MB){if(this.Array.Get(O)===A7)return O;O=O+1;}
return-1;},HH:function(){var O=0;var max=-1;while(O<this.MB){if(this.Array.Get(O
)>max)max=this.Array.Get(O);O=O+1;}return max;},_Init:function(aArg){(this.Array=[
]).__proto__=C.Int32ArrayWrapper.Array;this.__proto__=C.Int32ArrayWrapper;A.h7++;
},_Done:function(){this.__proto__=null;A.h7--;},_ReInit:function(){},_Mark:function(
D){var B;if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:
null,_className:"Device::Int32ArrayWrapper"};C.ActionToString={BH:function(A5){var
Azy=A5;var E6=A.jV;switch(Azy){case 4:E6=A.aaR(A.acf.Alarm);break;case 256:E6=A.
aaR(A.acf.Weighing);break;case 128:E6=A.aaR(A.acf.A52);break;case 16:E6=A.aaR(A.
acf.AMk);break;case 1:E6=A.aaR(A.acf.Temperature);break;case 32:E6=A.aaR(A.acf.AnimalLoss
);break;case 2:E6=A.aaR(A.acf.Rating);break;case 8:E6=A.aaR(A.acf.Asc);break;case
64:E6=A.aaR(A.acf.Unregister);break;case 512:E6=A.aaR(A.acf.ARX);break;case 1024:
E6=A.aaR(A.acf.LinkTransponder);break;case 262144:E6=A.aaR(A.acf.UnlinkTransponder
);break;case 2048:E6=A.aaR(A.acf.Tt);break;case 4096:E6=A.aaR(A.acf.Calving);break;
case 8192:E6=A.aaR(A.acf.DryOff);break;case 16384:E6=A.aaR(A.acf.A7d);break;case
32768:E6=A.aaR(A.acf.AB3);break;case 524288:E6=A.aaR(A.acf.AB5);break;case 65536:
E6=A.aaR(A.acf.Delete);break;case 131072:E6=A.aaR(A.acf.A7e);break;case 0:E6=A.aaR(
A.acf.A7B);break;default:throw new Error(AIp+Azy.toFixed());}return E6;},Ls:function(
A5){var Azy=A5;var E6=A.jV;switch(Azy){case 4:E6=A.aaR(A.acf.Alarm);break;case 256:
E6=A.aaR(A.acf.Weighing);break;case 128:E6=A.aaR(A.acf.A52);break;case 16:E6=A.aaR(
A.acf.AMk);break;case 1:E6=A.aaR(A.acf.Temperature);break;case 32:E6=A.aaR(A.acf.
AnimalLoss);break;case 2:E6=A.aaR(A.acf.Rating);break;case 8:E6=A.aaR(A.acf.Asc);
break;case 64:E6=A.aaR(A.acf.Unregister);break;case 512:E6=A.aaR(A.acf.ARX);break;
case 1024:E6=A.aaR(A.acf.LinkTransponder);break;case 262144:E6=A.aaR(A.acf.UnlinkTransponder
);break;case 2048:E6=A.aaR(A.acf.Tt);break;case 4096:E6=A.aaR(A.acf.Calving);break;
case 8192:E6=A.aaR(A.acf.DryOff);break;case 32768:E6=A.aaR(A.acf.AB3);break;case
524288:E6=A.aaR(A.acf.AB5);break;case 65536:E6=A.aaR(A.acf.Delete);break;case 16384:
case 131072:E6=A.aaR(A.acf.Bjr);break;case 0:E6=A.aaR(A.acf.A7B);break;default:throw new
Error(AIp+Azy.toFixed());}return E6;},_Init:function(aArg){C.EnumToString._Init.
call(this,aArg);this.__proto__=C.ActionToString;},_className:"Device::ActionToString"
};C.ACTIONS_COUNT=19;C.PopupTimeout=2000;C.ITable={Filter:null,Id:2,CE:function(
Ad,A3){return 0;},VV:function(Ad,A3){return A.jV;},Akn:function(G){A.we(this,0);
A.pe([this,this.DY],this);},H1:function(Ad,A3){return false;},HF:function(Ad,A3){
return this.Sh(Ad,A3);},OnSetId:function(E){if(this.Id===E)return;this.Id=E;},Ca:
function(){return 0;},Bl:function(E){if(this.Filter===E)return;this.Filter=E;A.abo([
this,this.Fk,this.Fo],0);},Fo:function(Aq){this.Bl(Aq);},I2:function(Ad,A3){var BAW=
this.VX(Ad,A3);return A._GetAutoObject(C.Converter).A$n(BAW);},VX:function(Ad,A3
){return 0;},Sh:function(Ad,A3){return 0;},A6B:function(Ad,A3){return this.CE(Ad
,A3);},Ox:function(){var Jk=0;var BBH=this.Id;return Jk;},Oz:function(AoR){var HA=
0;var BBH=this.Id;return HA===1;},YF:function(){return-1;},ZK:function(Ad,A3,C0){
return false;},Hj:function(Ad,A3,C0){return false;},ZJ:function(Ad,A3,C0){return false;
},N4:function(Ad,A3,C0){return false;},ZI:function(Ad,A3,C0){return false;},Acm:
function(Ad,A3,C0){return this.ZJ(Ad,A3,C0);},AkR:function(Ad,A3,C0){var BAX=A._GetAutoObject(
C.Converter).AdX(C0);return this.ZK(Ad,A3,BAX);},A_1:function(Ad,A3,C0){return this.
Hj(Ad,A3,C0);},AOM:function(Ad,A3){return this.CE(Ad,A3);},Bis:function(Ad,A3){return this.
CE(Ad,A3);},Boj:function(Ad,A3,C0){return this.Hj(Ad,A3,C0);},Bof:function(Ad,A3
,C0){return this.Hj(Ad,A3,C0);},LS:function(aColumn,A7){return-1;},AmR:function(
Ad,A3){return this.CE(Ad,A3);},Bod:function(Ad,A3,C0){return this.Hj(Ad,A3,C0);}
,ACX:function(Ad,A3){return this.CE(Ad,A3);},AUu:function(Ad,A3,MJ){return this.
Hj(Ad,A3,MJ);},DY:function(G){this.Bx2();},Bx2:function(){return-1;},KM:function(
Ad,A3){return 0;},Ux:function(Ad,A3,C0){return false;},AgQ:function(aColumn,A7){
return-1;},Hi:function(){return false;},Bit:function(Ad,A3){var BAY=this.CE(Ad,A3
);return A._GetAutoObject(C.Converter).BiV(BAY);},Biy:function(Ad,A3){return this.
CE(Ad,A3);},AOU:function(Ad,A3){return this.CE(Ad,A3);},Boh:function(Ad,A3,C0){var
BA0=A._GetAutoObject(C.Converter).A5a(C0);return this.Hj(Ad,A3,BA0);},Boi:function(
Ad,A3,C0){return this.Hj(Ad,A3,C0);},Bop:function(Ad,A3,C0){return this.Hj(Ad,A3
,C0);},AjJ:function(aColumn,A7){return false;},Aeh:function(aColumn,A7){return false;
},BiH:function(Ad,A3){return this.CE(Ad,A3);},Bon:function(Ad,A3,C0){return this.
Hj(Ad,A3,C0);},Lf:function(){return this.QF()>=this.HG();},HG:function(){return 0;
},Abq:function(){return-1;},QF:function(){return 0;},Fk:function(){return this.Filter;
},_Init:function(aArg){this.__proto__=C.ITable;A.h7++;},_Done:function(){this.__proto__=
null;A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((B=this.Filter)&&(
B._cycle!=D))B._Mark(B._cycle=D);if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D
);},I:null,_cycle:0,_observers:null,_className:"Device::ITable"};C.MaxAutoActionsCount=
4;C.WeightRecordingMode={Automatic:0,Manual:1,LAST:2};C.WeightRecordingModeToString={
BH:function(A5){var Vc=A5;var Nt=A.jV;switch(Vc){case 0:Nt=A.aaR(A.acf.Automatic
);break;case 1:Nt=A.aaR(A.acf.Manual);break;default:throw new Error(Aoy+Vc.toFixed(
));}return Nt;},_Init:function(aArg){C.EnumToString._Init.call(this,aArg);this.__proto__=
C.WeightRecordingModeToString;},_className:"Device::WeightRecordingModeToString"
};C.BooleanToAutoOnOff={BH:function(A5){switch(A5){case 0:return A.aaR(A.acf.Off
);case 1:return A.aaR(A.acf.Aa1);default:return Ayg+A5.toFixed();}},_Init:function(
aArg){C.EnumToString._Init.call(this,aArg);this.__proto__=C.BooleanToAutoOnOff;}
,_className:"Device::BooleanToAutoOnOff"};C.WeightStep=100;C.WeightRecordingScope={
CurrentWeightOnly:0,BirthWeightOnly:1,BirthAndCurrentWeight:2,NoWeightRecording:
3,LAST:4};C.WeightRecordingScopeToString={BH:function(A5){var BfF=A5;var AA2=A.jV;
switch(BfF){case 0:AA2=A.aaR(A.acf.Bhr);break;case 1:AA2=A.aaR(A.acf.Bg6);break;
case 2:AA2=A.aaR(A.acf.Bg2);break;case 3:AA2=A.aaR(A.acf.BjT);break;default:throw new
Error(AYQ+BfF.toFixed());}return AA2;},_Init:function(aArg){C.EnumToString._Init.
call(this,aArg);this.__proto__=C.WeightRecordingScopeToString;},_className:"Device::WeightRecordingScopeToString"
};C.BodyTemperature={Undertemperature:0,Normal:1,Elevated:2,Fever:3,LAST:4};C.Kg={
A4J:0,Temperature:1,Rating:2,Afq:3,BCk:4,BC1:5,BFK:6,BDE:7,BEs:8,BDc:9,BEq:10,BES:
11,BET:12,BFP:13,BCv:14,LAST:15};C.AnimalListContentToString={BH:function(A5){var
Bb5=A5;var Rt=A.jV;switch(Bb5){case 0:Rt=AIq;break;case 14:Rt=AIr;break;case 2:Rt=
AYR;break;case 1:Rt=AYS;break;case 3:Rt=AIs;break;case 4:Rt=AYT;break;case 5:Rt=
AYU;break;case 6:Rt=AYV;break;case 7:Rt=AYW;break;case 8:Rt=AYX;break;case 9:Rt=
AYY;break;case 10:Rt=AYZ;break;case 11:Rt=AY0;break;case 12:Rt=AY1;break;case 13:
Rt=AY2;break;default:throw new Error(AY3+Bb5.toFixed());}return Rt;},_Init:function(
aArg){C.EnumToString._Init.call(this,aArg);this.__proto__=C.AnimalListContentToString;
},_className:"Device::AnimalListContentToString"};C.GenderFilterCriterion={A4:0,
Abi:function(){var Av=A._NewObject(C.GenderFilterCriterion,0);Av.E8(this);return Av;
},E8:function(AH){C.FilterCriterion.E8.call(this,AH);var Av=(C.GenderFilterCriterion.
isPrototypeOf(AH)?AH:null);if(!!Av)this.A4=Av.A4;},_Init:function(aArg){C.FilterCriterion.
_Init.call(this,aArg);this.__proto__=C.GenderFilterCriterion;},_className:"Device::GenderFilterCriterion"
};C.AnimalTypeFilterCriterion={A4:0,Abi:function(){var Av=A._NewObject(C.AnimalTypeFilterCriterion
,0);Av.E8(this);return Av;},E8:function(AH){C.FilterCriterion.E8.call(this,AH);var
Av=(C.AnimalTypeFilterCriterion.isPrototypeOf(AH)?AH:null);if(!!Av)this.A4=Av.A4;
},Initialize:function(A3,Eb,A7,P$){this.EK=A3;this.Operator=Eb;this.A4=A7;this.YI=
P$;return this;},_Init:function(aArg){C.FilterCriterion._Init.call(this,aArg);this.
__proto__=C.AnimalTypeFilterCriterion;},_className:"Device::AnimalTypeFilterCriterion"
};C.BCx={Aux:0,BCw:1,BEc:2,A_H:3,A5i:4,BFq:5,BC0:6,BFp:7,LinkTransponder:8,Tt:9,
Weighing:10,Calving:11,LinkNaisId:12,BER:13,ClearBirthNoticePending:14,DeleteAnimal:
15,ScanNaisId:16,Edit:17,ClearPurchaseNoticePending:18};C.AutoRegistrationModeToString={
BH:function(A5){var Vc=A5;var Nt=A.jV;switch(Vc){case 0:Nt=A.aaR(A.acf.Bhj);break;
case 1:Nt=A.aaR(A.acf.BiZ);break;case 2:Nt=A.aaR(A.acf.Off);break;default:throw new
Error(AY4+Vc.toFixed());}return Nt;},_Init:function(aArg){C.EnumToString._Init.call(
this,aArg);this.__proto__=C.AutoRegistrationModeToString;},_className:"Device::AutoRegistrationModeToString"
};C.AutoRegistrationMode={UserConfirmed:0,Background:1,Off:2,LAST:3};C.AssessmentFilterCriterion={
A4:0,Abi:function(){var Av=A._NewObject(C.AssessmentFilterCriterion,0);Av.E8(this
);return Av;},E8:function(AH){C.FilterCriterion.E8.call(this,AH);var Av=(C.AssessmentFilterCriterion.
isPrototypeOf(AH)?AH:null);if(!!Av)this.A4=Av.A4;},Initialize:function(A3,Eb,A7,
P$){this.EK=A3;this.Operator=Eb;this.A4=A7;this.YI=P$;return this;},_Init:function(
aArg){C.FilterCriterion._Init.call(this,aArg);this.__proto__=C.AssessmentFilterCriterion;
},_className:"Device::AssessmentFilterCriterion"};C.D9={AdQ:0,Temperature:1,Afq:
2,Rating:3,LAST:4};C.FactoryResetScope={DeviceAndAnimalData:0,AnimalDataOnly:1,LAST:
2};C.FactoryResetScopeToString={BH:function(A5){switch(A5){case 0:return A.aaR(A.
acf.DeviceAndAnimalData);case 1:return A.aaR(A.acf.AnimalDataOnly);default:return AY5+
A5.toFixed();}},_Init:function(aArg){C.EnumToString._Init.call(this,aArg);this.__proto__=
C.FactoryResetScopeToString;},_className:"Device::FactoryResetScopeToString"};C.
AU5={Ch:function(){A._GetAutoObject(C.Device).Ar7(this.toString());},Init:function(
aArg){var B;A.zX([this,this.BeM],[B=A._GetAutoObject(C.Device),B.A8T,B.Ba0],0);this.
BeM(this);},BeM:function(G){this.Er(A._GetAutoObject(C.Device).AGT);A.we(this,0);
},_Init:function(aArg){C.Int32ArrayWrapper._Init.call(this,aArg);this.__proto__=
C.AU5;this.Zy(3);this.Init(aArg);},_className:"Device::TemperaturesLowClass"};C.
AU4={Init:function(aArg){var B;A.zX([this,this.BeK],[B=A._GetAutoObject(C.Device
),B.A8S,B.BaZ],0);this.BeK(this);},Ch:function(){A._GetAutoObject(C.Device).Ar6(
this.toString());},BeK:function(G){this.Er(A._GetAutoObject(C.Device).AGS);A.we(
this,0);},_Init:function(aArg){C.Int32ArrayWrapper._Init.call(this,aArg);this.__proto__=
C.AU4;this.Zy(3);this.Init(aArg);},_className:"Device::TemperaturesHighClass"};C.
AMD={Init:function(aArg){var B;A.zX([this,this.Bed],[B=A._GetAutoObject(C.Device
),B.A7_,B.BaF],0);this.Bed(this);},Bed:function(G){this.Er(A._GetAutoObject(C.Device
).ABD);A.we(this,0);},_Init:function(aArg){C.Int32ArrayWrapper._Init.call(this,aArg
);this.__proto__=C.AMD;this.Zy(3);this.Init(aArg);},_className:"Device::AnimalTypesClass"
};C.UInt64FilterCriterion={A4:0,Abi:function(){var Av=A._NewObject(C.UInt64FilterCriterion
,0);Av.E8(this);return Av;},E8:function(AH){C.FilterCriterion.E8.call(this,AH);var
Av=(C.UInt64FilterCriterion.isPrototypeOf(AH)?AH:null);if(!!Av)this.A4=Av.A4;},Initialize:
function(A3,Eb,A7,P$){this.EK=A3;this.Operator=Eb;this.A4=A7;this.YI=P$;return this;
},_Init:function(aArg){C.FilterCriterion._Init.call(this,aArg);this.__proto__=C.
UInt64FilterCriterion;},_className:"Device::UInt64FilterCriterion"};C.BooleanToAssignedUnassignedString={
BH:function(A5){switch(A5){case 0:return A.aaR(A.acf.Akm);case 1:return A.aaR(A.
acf.BgI);default:return Ayg+A5.toFixed();}},_Init:function(aArg){C.EnumToString.
_Init.call(this,aArg);this.__proto__=C.BooleanToAssignedUnassignedString;},_className:
"Device::BooleanToAssignedUnassignedString"};C.C7={UNDEFINED:0,AT:1,BA:2,BE:3,BCC:
4,BCR:5,BCS:6,BCT:7,BCU:8,BCV:9,BC5:10,BC6:11,BDd:12,BDe:13,BDt:14,FR:15,GR:16,BDF:
17,BDG:18,BDR:19,BDS:20,BDX:21,BDY:22,BDZ:23,BD0:24,BD6:25,BEi:26,BEj:27,BEy:28,
BEz:29,BEP:30,BEQ:31,BE6:32,BE7:33,BE8:34,BFj:35,BFk:36,BFD:37,A$o:38,BFE:39,LAST:
40};C.CountryToString={BH:function(A5){var J3=A5;var FB=A.jV;switch(J3){case 1:FB=
A.aaR(A.acm.BgU);break;case 2:FB=A.aaR(A.acm.Bg7);break;case 3:FB=A.aaR(A.acm.Bg1
);break;case 4:FB=A.aaR(A.acm.Bg9);break;case 5:FB=A.aaR(A.acm.Bg$);break;case 6:
FB=A.aaR(A.acm.Bo9);break;case 7:FB=A.aaR(A.acm.Bhc);break;case 8:FB=A.aaR(A.acm.
Bhs);break;case 9:FB=A.aaR(A.acm.Bht);break;case 10:FB=A.aaR(A.acm.Bin);break;case
11:FB=A.aaR(A.acm.Bhz);break;case 12:FB=A.aaR(A.acm.Bh4);break;case 13:FB=A.aaR(
A.acm.BoB);break;case 14:FB=A.aaR(A.acm.Bib);break;case 15:FB=A.aaR(A.acm.Bij);break;
case 16:FB=A.aaR(A.acm.BiP);break;case 17:FB=A.aaR(A.acm.Bhq);break;case 18:FB=A.
aaR(A.acm.BiW);break;case 19:FB=A.aaR(A.acm.Bi5);break;case 20:FB=A.aaR(A.acm.Bjf
);break;case 21:FB=A.aaR(A.acm.Bjh);break;case 22:FB=A.aaR(A.acm.Bjs);break;case
23:FB=A.aaR(A.acm.Bjv);break;case 24:FB=A.aaR(A.acm.Bjp);break;case 25:FB=A.acm.
Bjx;break;case 26:FB=A.aaR(A.acm.BjN);break;case 27:FB=A.aaR(A.acm.BjU);break;case
28:FB=A.aaR(A.acm.Bnz);break;case 29:FB=A.aaR(A.acm.BnA);break;case 30:FB=A.aaR(
A.acm.Bn2);break;case 31:FB=A.aaR(A.acm.Bn4);break;case 32:FB=A.aaR(A.acm.Bo8);break;
case 33:FB=A.aaR(A.acm.BoA);break;case 34:FB=A.aaR(A.acm.Boz);break;case 35:FB=A.
aaR(A.acm.Bpy);break;case 36:FB=A.aaR(A.acm.Bpg);break;case 37:FB=A.aaR(A.acm.BpC
);break;case 38:FB=A.aaR(A.acm.A$o);break;case 39:FB=A.aaR(A.acm.BpB);break;case
0:FB=Aoz;break;default:throw new Error(Aol+J3.toFixed());}return FB;},Ls:function(
A5){var J3=A5;var BO=A.jV;switch(J3){case 1:BO=S5;break;case 2:BO=Z4;break;case 3:
BO=UP;break;case 4:BO=W2;break;case 5:BO=Iq;break;case 6:BO=Aab;break;case 7:BO=
UQ;break;case 8:BO=Z6;break;case 9:BO=W4;break;case 10:BO=P6;break;case 11:BO=Z7;
break;case 12:BO=Z8;break;case 13:BO=Aaa;break;case 14:BO=UR;break;case 15:BO=W5;
break;case 16:BO=Z9;break;case 17:BO=W3;break;case 18:BO=O2;break;case 19:BO=Ri;
break;case 20:BO=W6;break;case 21:BO=W7;break;case 22:BO=W9;break;case 23:BO=Z_;
break;case 24:BO=W8;break;case 25:BO=W_;break;case 26:BO=W$;break;case 27:BO=S6;
break;case 28:BO=US;break;case 29:BO=UT;break;case 30:BO=AcM;break;case 31:BO=S7;
break;case 32:BO=Xa;break;case 33:BO=Afw;break;case 34:BO=Z$;break;case 35:BO=Aac;
break;case 36:BO=Z5;break;case 37:BO=AhP;break;case 38:BO=JZ;break;case 39:BO=Aad;
break;case 0:BO=Aoz;break;default:throw new Error(Aol+J3.toFixed());}return BO;}
,_Init:function(aArg){C.EnumToString._Init.call(this,aArg);this.__proto__=C.CountryToString;
},_className:"Device::CountryToString"};C.EaseOfDelivery={Unspecified:0,Easy:1,Moderate:
2,Difficult:3,Surgery:4,LAST:5};C.EaseOfDeliveryToString={BH:function(A5){var BcC=
A5;var AtH=A.jV;switch(BcC){case 0:AtH=A.aaR(A.acf.Unspecified);break;case 1:AtH=
A.aaR(A.acf.Easy);break;case 2:AtH=A.aaR(A.acf.Moderate);break;case 3:AtH=A.aaR(
A.acf.Difficult);break;case 4:AtH=A.aaR(A.acf.Surgery);break;default:throw new Error(
AIt+BcC.toFixed());}return AtH;},_Init:function(aArg){C.EnumToString._Init.call(
this,aArg);this.__proto__=C.EaseOfDeliveryToString;},_className:"Device::EaseOfDeliveryToString"
};C.WhereAbouts={UNB:0,EZU:1,EMA:2,VZU:3,VMA:4,VIV:5,TOT:6,V48:7,V3T:8,MGE:9,VKB:
10,LAST:11};C.WhereAboutsToString={BH:function(A5){var Bgw=A5;var AaR=A.jV;switch(
Bgw){case 0:AaR=A.aaR(A.acf.Unknown);break;case 1:AaR=A.aaR(A.acf.BpL);break;case
2:AaR=A.aaR(A.acf.BpK);break;case 3:AaR=A.aaR(A.acf.BpT);break;case 4:AaR=A.aaR(
A.acf.BpS);break;case 5:AaR=A.aaR(A.acf.BpQ);break;case 6:AaR=A.aaR(A.acf.BpN);break;
case 7:AaR=A.aaR(A.acf.BpP);break;case 8:AaR=A.aaR(A.acf.BpO);break;case 9:AaR=A.
aaR(A.acf.BpM);break;case 10:AaR=A.aaR(A.acf.BpR);break;default:throw new Error(
Aah+Bgw.toFixed());}return AaR;},_Init:function(aArg){C.EnumToString._Init.call(
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
AY6+Bv.toFixed());}return BJ;},_Init:function(aArg){C.EnumToString._Init.call(this
,aArg);this.__proto__=C.BreedToString;},_className:"Device::BreedToString"};C.TE={
timer:null,Q:null,Ec:0,Dw:0,JM:0,Po:1000,Px:1000,Bw:false,Cw:false,B2:true,Mc:function(
G){var F;if(!this.timer)return;if(this.Ec<0){this.Dw=this.timer.Bs;this.Ec=0;}var
Au=(this.timer.Bs-this.Dw)|0;var Oo=this.Po;var Ha=this.Px+this.Po;var LD=0;var Jh=
this.Ec;if(!Jh&&(Au>=Oo)){Jh=1;Au=Au-Oo;}if((Jh>0)&&(Au>=Ha)){var Ib=(Au/Ha)|0;Au=
Au-(Ib*Ha);Jh=Jh+Ib;}if((Jh>2)&&!this.JM)Jh=1;if(Jh!==this.Ec){this.Dw=this.timer.
Bs-(((B=Au)<0)?B+0x100000000:B);this.Ec=Jh;}if(Jh>0)LD=this.Px;var KB=(Jh>=this.
JM)&&(this.JM>0);if(!!this.Q){if((!KB&&(Au>=LD))&&((F=this.Q,F[1].call(F[0]))!==
this.Cw))(F=this.Q,F[2].call(F[0],this.Cw));if((KB||((Au<LD)&&(Jh>0)))&&((F=this.
Q,F[1].call(F[0]))!==this.B2))(F=this.Q,F[2].call(F[0],this.B2));}if(KB)this.Ar(
false);},HM:function(E){if(E<0)E=0;this.JM=E;},Fm:function(E){if(E<100)E=100;this.
Po=E;},Uk:function(E){if(E<0)E=0;this.Px=E;},Ar:function(E){if(this.Bw===E)return;
this.Bw=E;if(!E&&!!this.timer){A.z9([this,this.Mc],this.timer,0);this.timer=null;
}if(E){this.timer=A._GetAutoObject(A.acl.Aee);A.zV([this,this.Mc],this.timer,0);
this.Ec=-1;}},_Init:function(aArg){this.__proto__=C.TE;A.h7++;},_Done:function(){
this.__proto__=null;A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((B=
this.timer)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Q)&&((B=B[0])._cycle!=
D))B._Mark(B._cycle=D);if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null
,_cycle:0,_observers:null,_className:"Device::BoolEffect"};C.Ig={AnimalId:0,TransponderId:
1,BD9:2,BD8:3,BEa:4,BD$:5};C.AuX={BCA:0,BC8:1};C.AnimalIdGenerationMethodToString={
BH:function(A5){var Alq=A5;var Ao0=A.jV;switch(Alq){case 0:Ao0=A.aaR(A.acf.Ud);break;
case 1:Ao0=A.aaR(A.acf.Transponder);break;case 3:Ao0=(A.aaR(A.acf.Manual)+N$)+A.
aaR(A.acf.Male);break;case 2:Ao0=(A.aaR(A.acf.Manual)+N$)+A.aaR(A.acf.Female);break;
case 4:Ao0=(A.aaR(A.acf.Manual)+N$)+A.aaR(A.acf.Unknown);break;case 5:Ao0=(A.aaR(
A.acf.Manual)+N$)+Ayp;break;default:throw new Error(AY7+Alq.toFixed());}return Ao0;
},_Init:function(aArg){C.EnumToString._Init.call(this,aArg);this.__proto__=C.AnimalIdGenerationMethodToString;
},_className:"Device::AnimalIdGenerationMethodToString"};C.DirectionOfCountingToString={
BH:function(A5){var Azx=A5;var A1z=A.jV;switch(Azx){case 0:A1z=AY8;break;case 1:
A1z=AY9;break;default:throw new Error(AY_+Azx.toFixed());}return A1z;},_Init:function(
aArg){C.EnumToString._Init.call(this,aArg);this.__proto__=C.DirectionOfCountingToString;
},_className:"Device::DirectionOfCountingToString"};C.EnumToIcon={AsI:function(A5
){throw new Error(Aoq+A5.toFixed());},AsJ:function(A5){throw new Error(Aoq+A5.toFixed(
));},_Init:function(aArg){this.__proto__=C.EnumToIcon;A.h7++;},_Done:function(){
this.__proto__=null;A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((B=
this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:
"Device::EnumToIcon"};C.Aed={AsI:function(A5){return A.aaL(A.ach.AUS);},AsJ:function(
A5){var Azx=A5;var RC=-1;switch(Azx){case 0:RC=3;break;case 1:RC=2;break;default:
throw new Error(AIu+Azx.toFixed());}return RC;},_Init:function(aArg){C.EnumToIcon.
_Init.call(this,aArg);this.__proto__=C.Aed;},_className:"Device::DirectionOfCountingToIcon"
};C.AdU={AsI:function(A5){return A.aaL(A.ach.AUQ);},AsJ:function(A5){var Alq=A5;
var RC=-1;switch(Alq){case 0:RC=0;break;case 1:RC=6;break;case 3:RC=4;break;case
2:RC=5;break;case 4:RC=2;break;case 5:RC=3;break;default:throw new Error(AIu+Alq.
toFixed());}return RC;},_Init:function(aArg){C.EnumToIcon._Init.call(this,aArg);
this.__proto__=C.AdU;},_className:"Device::AnimalIdGenerationMethodToIcon"};C.Pt={
UNDEFINED:0,SH:1,AOX:2,ARH:3,AOW:4,A7w:5,HE:6,A_F:7,A40:8,AMO:9,AUk:10,BE:11,BB:
12,A7j:13,AUl:14,AUm:15,AUX:16};C.GermanStateToString={BH:function(A5){var Bp=A5;
var GC=A.jV;switch(Bp){case 1:GC=A.aaR(A.acp.SH);break;case 2:GC=A.aaR(A.acp.AOX
);break;case 3:GC=A.aaR(A.acp.ARH);break;case 4:GC=A.aaR(A.acp.AOW);break;case 5:
GC=A.aaR(A.acp.A7w);break;case 6:GC=A.aaR(A.acp.HE);break;case 7:GC=A.aaR(A.acp.
A_F);break;case 8:GC=A.aaR(A.acp.A40);break;case 9:GC=A.aaR(A.acp.AMO);break;case
10:GC=A.aaR(A.acp.AUk);break;case 11:GC=A.aaR(A.acp.BE);break;case 12:GC=A.aaR(A.
acp.BB);break;case 13:GC=A.aaR(A.acp.A7j);break;case 14:GC=A.aaR(A.acp.AUl);break;
case 15:GC=A.aaR(A.acp.AUm);break;case 16:GC=A.aaR(A.acp.AUX);break;case 0:GC=Aoz;
break;default:throw new Error(As_+Bp.toFixed());}return GC;},Ls:function(A5){var
Bp=A5;var GC=A.jV;switch(Bp){case 1:GC=A.aaR(A.acp.Bn5);break;case 2:GC=A.aaR(A.
acp.AOX);break;case 3:GC=A.aaR(A.acp.ARH);break;case 4:GC=A.aaR(A.acp.AOW);break;
case 5:GC=A.aaR(A.acp.BjK);break;case 6:GC=A.aaR(A.acp.HE);break;case 7:GC=A.aaR(
A.acp.BnK);break;case 8:GC=A.aaR(A.acp.BgX);break;case 9:GC=A.aaR(A.acp.AMO);break;
case 10:GC=A.aaR(A.acp.AUk);break;case 11:GC=A.aaR(A.acp.BE);break;case 12:GC=A.
aaR(A.acp.BB);break;case 13:GC=A.aaR(A.acp.Bjw);break;case 14:GC=A.aaR(A.acp.AUl
);break;case 15:GC=A.aaR(A.acp.AUm);break;case 16:GC=A.aaR(A.acp.AUX);break;case
0:GC=Aoz;break;default:throw new Error(As_+Bp.toFixed());}return GC;},Bpl:function(
A5){var Bp=A5;var Gf=-1;switch(Bp){case 0:Gf=0;break;case 1:Gf=1;break;case 2:Gf=
2;break;case 3:Gf=3;break;case 4:Gf=4;break;case 5:Gf=5;break;case 6:Gf=6;break;
case 7:Gf=7;break;case 8:Gf=8;break;case 9:Gf=9;break;case 10:Gf=10;break;case 11:
Gf=11;break;case 12:Gf=12;break;case 13:Gf=13;break;case 14:Gf=14;break;case 15:
Gf=15;break;case 16:Gf=16;break;default:throw new Error(As_+Bp.toFixed());}return Gf;
},Bpm:function(A5){var Bp=A5;var Gf=A.jV;switch(Bp){case 1:Gf=As$;break;case 2:Gf=
Ata;break;case 3:Gf=Atb;break;case 4:Gf=Atc;break;case 5:Gf=Ayq;break;case 6:Gf=
AoA;break;case 7:Gf=AY$;break;case 8:Gf=AZa;break;case 9:Gf=AZb;break;case 10:Gf=
AZc;break;case 11:Gf=UP;break;case 12:Gf=AZd;break;case 13:Gf=AZe;break;case 14:
Gf=AZf;break;case 15:Gf=AZg;break;case 16:Gf=AZh;break;case 0:Gf=Aoz;break;default:
throw new Error(As_+Bp.toFixed());}return Gf;},_Init:function(aArg){C.EnumToString.
_Init.call(this,aArg);this.__proto__=C.GermanStateToString;},_className:"Device::GermanStateToString"
};C.EartagNrAssignmentMode={OneSingleRange:0,TwoNumberRanges:1,LAST:2};C.EartagNrAssignmentModeToString={
Ls:function(A5){var Vc=A5;var Nt=A.jV;switch(Vc){case 0:Nt=AZi;break;case 1:Nt=AZj;
break;default:throw new Error(AIv+Vc.toFixed());}return Nt;},BH:function(A5){var
Vc=A5;var Nt=A.jV;switch(Vc){case 0:Nt=A.aaR(A.acf.Bns);break;case 1:Nt=A.aaR(A.
acf.BpA);break;default:throw new Error(AIv+Vc.toFixed());}return Nt;},_Init:function(
aArg){C.EnumToString._Init.call(this,aArg);this.__proto__=C.EartagNrAssignmentModeToString;
},_className:"Device::EartagNrAssignmentModeToString"};C.BCt={BEo:0,BEe:1,BDn:2,
BDo:3,BDp:4,BFl:5};C.EnumToCodeset={AmB:function(AhZ){throw new Error(AZk+AhZ.toFixed(
));},Aeg:function(A5){throw new Error(Aoq+A5.toFixed());},AqV:function(){A.ab5("%s"
,AIw);return 0;},HH:function(){A.ab5("%s",AIw);return 0;},_Init:function(aArg){this.
__proto__=C.EnumToCodeset;A.h7++;},_Done:function(){this.__proto__=null;A.h7--;}
,_ReInit:function(){},_Mark:function(D){var B;if((B=this.I)&&(B._cycle!=D))B._Mark(
B._cycle=D);},I:null,_cycle:0,_observers:null,_className:"Device::EnumToCodeset"
};C.MZ={AmB:function(AhZ){var Bv;switch(AhZ){case 1:Bv=1;break;case 2:Bv=2;break;
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
case 98:BL=111;break;default:throw new Error(AZl+Bv.toFixed());}return BL;},AqV:
function(){return 0;},HH:function(){return 111;},_Init:function(aArg){C.EnumToCodeset.
_Init.call(this,aArg);this.__proto__=C.MZ;},_className:"Device::BreedToHitCodeset"
};C.ReasonOfLeaving={Unknown:0,A$a:1,RL:2,A_z:3,A6X:4,BEx:5,A$p:6,A7s:7,A5h:8,A_v:
9,A7q:10,A5l:11,BEN:12,BEO:13,LAST:14};C.ReasonOfLeavingToString={BH:function(A5
){var Adz=A5;var Tn=A.jV;switch(Adz){case 0:Tn=A.aaR(A.acf.Unknown);break;case 1:
Tn=A.aaR(A.acf.A$a);break;case 2:Tn=A.aaR(A.acf.RL);break;case 3:Tn=A.aaR(A.acf.
A_z);break;case 4:Tn=A.aaR(A.acf.A6X);break;case 5:Tn=A.aaR(A.acf.Bnt);break;case
6:Tn=A.aaR(A.acf.A$p);break;case 7:Tn=A.aaR(A.acf.A7s);break;case 8:Tn=A.aaR(A.acf.
A5h);break;case 9:Tn=A.aaR(A.acf.A_v);break;case 10:Tn=A.aaR(A.acf.A7q);break;case
11:Tn=A.aaR(A.acf.A5l);break;case 12:Tn=A.aaR(A.acf.BnE);break;case 13:Tn=A.aaR(
A.acf.BnD);break;default:throw new Error(Ayr+Adz.toFixed());}return Tn;},_Init:function(
aArg){C.EnumToString._Init.call(this,aArg);this.__proto__=C.ReasonOfLeavingToString;
},_className:"Device::ReasonOfLeavingToString"};C.Aht={AmB:function(AhZ){var Pc;
switch(AhZ){case 1:Pc=1;break;case 2:Pc=2;break;case 3:Pc=3;break;case 4:Pc=4;break;
case 5:Pc=5;break;case 6:Pc=6;break;case 7:Pc=7;break;case 8:Pc=8;break;case 9:Pc=
9;break;case 10:Pc=10;break;case 11:Pc=11;break;case 12:Pc=12;break;case 13:Pc=13;
break;default:Pc=0;}return Pc;},Aeg:function(A5){var Pc=A5;var Jg=0;switch(Pc){case
0:Jg=0;break;case 2:Jg=2;break;case 8:Jg=8;break;case 11:Jg=11;break;case 4:Jg=4;
break;case 10:Jg=10;break;case 7:Jg=7;break;case 5:Jg=5;break;case 9:Jg=9;break;
case 3:Jg=3;break;case 12:Jg=12;break;case 13:Jg=13;break;case 1:Jg=1;break;case
6:Jg=6;break;default:throw new Error(AIx+Pc.toFixed());}return Jg;},AqV:function(
){return 0;},HH:function(){return 13;},_Init:function(aArg){C.EnumToCodeset._Init.
call(this,aArg);this.__proto__=C.Aht;},_className:"Device::ReasonOfLeavingToCodeset"
};C.KX={AmB:function(AhZ){var K8;switch(AhZ){case 1:K8=1;break;case 2:K8=2;break;
case 3:K8=3;break;case 4:K8=4;break;case 5:K8=5;break;case 6:K8=6;break;case 7:K8=
7;break;case 8:K8=8;break;case 9:K8=9;break;case 10:K8=10;break;default:K8=0;}return K8;
},Aeg:function(A5){var K8=A5;var Jg=0;switch(K8){case 0:Jg=0;break;case 2:Jg=2;break;
case 1:Jg=1;break;case 9:Jg=9;break;case 6:Jg=6;break;case 8:Jg=8;break;case 7:Jg=
7;break;case 5:Jg=5;break;case 10:Jg=10;break;case 4:Jg=4;break;case 3:Jg=3;break;
default:throw new Error(AIx+K8.toFixed());}return Jg;},AqV:function(){return 0;}
,HH:function(){return 10;},_Init:function(aArg){C.EnumToCodeset._Init.call(this,
aArg);this.__proto__=C.KX;},_className:"Device::WhereAboutsToCodeset"};C.AmJ={_Init:
function(aArg){this.__proto__=C.AmJ;A.h7++;},_Done:function(){this.__proto__=null;
A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((B=this.I)&&(B._cycle!=
D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:"Device::EmptyClass"
};C.CalfDeregistrationsTableFields={Year:0,Deregistrations:1,Deaths:2};C.CalfDeregistrations={
Deregistrations:0,Deaths:0,Year:0,Er:function(Ad,AI){var HA=C.Row.Er.call(this,Ad
,AI);if(HA&&!!AI){this.AkG(AI.CE(Ad,0));this.Awv(AI.CE(Ad,1));this.Awu(AI.CE(Ad,
2));}return HA;},Ch:function(AI){var HA=C.Row.Ch.call(this,AI);if(HA&&!!AI){var Jk=
AI.Ox();if(Jk<=0)A.ab5("%s",Xc);else{if(this.Am3())this.CL=AI.YF();AI.Hj(this.CL
,0,this.Year);AI.Hj(this.CL,1,this.Deregistrations);AI.Hj(this.CL,2,this.Deaths);
AI.Oz(Jk);}}return HA;},Gn:function(){C.Row.Gn.call(this);this.AkG(-1);},Hi:function(
){C.Row.Hi.call(this);this.AkG(0);this.Awv(0);this.Awu(0);},Awv:function(E){if(this.
Deregistrations===E)return;this.Deregistrations=E;A.abo([this,this.Bkk,this.Awv]
,0);},Awu:function(E){if(this.Deaths===E)return;this.Deaths=E;A.abo([this,this.Bki
,this.Awu],0);},AkG:function(E){if(this.Year===E)return;this.Year=E;A.abo([this,
this.ArC,this.AkG],0);},Bkk:function(){return this.Deregistrations;},Bki:function(
){return this.Deaths;},ArC:function(){return this.Year;},_Init:function(aArg){C.
Row._Init.call(this,aArg);this.__proto__=C.CalfDeregistrations;this.TableId=4;},
_className:"Device::CalfDeregistrations"};C.AuV={Undefined:0,Display:1,A_E:2,A_R:
3,A$I:4,BDH:5,BEY:6,BFw:7,BD7:8,BCW:9,BCi:10,A6k:11,A_G:12,BFG:13,A7v:14,BFJ:15};
C.DeviceComponentToString={BH:function(A5){var Bcv=A5;var Qg=A.jV;switch(Bcv){case
0:Qg=Ays;break;case 10:Qg=A.aaR(A.acf.Bgx);break;case 9:Qg=A.aaR(A.acf.Bhb);break;
case 1:Qg=A.aaR(A.acf.BhT);break;case 11:Qg=A.aaR(A.acf.A6k);break;case 5:Qg=A.aaR(
A.acf.BpU);break;case 8:Qg=A.aaR(A.acf.BhV);break;case 14:Qg=A.aaR(A.acf.A7v);break;
case 2:Qg=A.aaR(A.acf.A_E);break;case 12:Qg=A.aaR(A.acf.A_G);break;case 6:Qg=A.aaR(
A.acf.BnJ);break;case 3:Qg=A.aaR(A.acf.A_R);break;case 7:Qg=A.aaR(A.acf.BhW);break;
case 13:Qg=A.aaR(A.acf.BhC);break;case 15:Qg=A.aaR(A.acf.BpY);break;case 4:Qg=A.
aaR(A.acf.A$I);break;default:throw new Error(Ayt+Bcv.toFixed());}return Qg;},_Init:
function(aArg){C.EnumToString._Init.call(this,aArg);this.__proto__=C.DeviceComponentToString;
},_className:"Device::DeviceComponentToString"};C.AgK={AmB:function(AhZ){return AhZ;
},Aeg:function(A5){return A5;},AqV:function(){return 0;},HH:function(){return 4;
},_Init:function(aArg){C.EnumToCodeset._Init.call(this,aArg);this.__proto__=C.AgK;
},_className:"Device::EaseOfDeliveryToCodeset"};C.AeO={AsI:function(A5){return A.
aaL(A.ach.AP5);},AsJ:function(A5){var BcH=A5;var RC=-1;switch(BcH){case 0:RC=0;break;
case 1:RC=1;break;case 2:RC=2;break;default:throw new Error(AZm+BcH.toFixed());}
return RC;},_Init:function(aArg){C.EnumToIcon._Init.call(this,aArg);this.__proto__=
C.AeO;},_className:"Device::MotherSelectionFilterModeToIcon"};C.WhereAboutsFilterCriterion={
A4:0,Abi:function(){var Av=A._NewObject(C.WhereAboutsFilterCriterion,0);Av.E8(this
);return Av;},E8:function(AH){C.FilterCriterion.E8.call(this,AH);var Av=(C.WhereAboutsFilterCriterion.
isPrototypeOf(AH)?AH:null);if(!!Av)this.A4=Av.A4;},Initialize:function(A3,Eb,A7,
P$){this.EK=A3;this.Operator=Eb;this.A4=A7;this.YI=P$;return this;},_Init:function(
aArg){C.FilterCriterion._Init.call(this,aArg);this.__proto__=C.WhereAboutsFilterCriterion;
},_className:"Device::WhereAboutsFilterCriterion"};C.BEh={ANY:0,BC3:1,API:2,LAST:
3};C.BFn={GH:0,AVB:1,He:2,Year:3,LAST:4};C.TimespanDaysToString={BH:function(A5){
var Bf6=A5;var ABd=A.jV;switch(Bf6){case 0:ABd=A.aaR(A.acf.A5z);break;case 1:ABd=
A.aaR(A.acf.AVB);break;case 2:ABd=A.aaR(A.acf.He);break;case 3:ABd=A.aaR(A.acf.Year
);break;default:throw new Error(AZn+Bf6.toFixed());}return ABd;},_Init:function(
aArg){C.EnumToString._Init.call(this,aArg);this.__proto__=C.TimespanDaysToString;
},_className:"Device::TimespanDaysToString"};C.AhM={BEu:0,BC9:1,BDN:2,BDQ:3,BDP:
4,BC_:5,BDO:6,LAST:7};C.USBStateToString={BH:function(A5){var Bgr=A5;var Bp=A.jV;
switch(Bgr){case 0:Bp=AZo;break;case 2:Bp=AIy;break;case 1:Bp=AZp;break;case 5:Bp=
AZq;break;case 3:Bp=AZr;break;case 4:Bp=AZs;break;case 6:Bp=AZt;break;default:throw new
Error(AHR+Bgr.toFixed());}return Bp;},_Init:function(aArg){C.EnumToString._Init.
call(this,aArg);this.__proto__=C.USBStateToString;},_className:"Device::USBStateToString"
};C.ACm={BDL:0,BCu:1,BDM:2,BDJ:3};C.Axy={ACg:A.jV,Timestamp:0,AD6:0,AEa:0,AGm:0,
OnSetTimestamp:function(E){if(this.Timestamp===E)return;this.Timestamp=E;},AFk:function(
E){if(this.AD6===E)return;this.AD6=E;},AFq:function(E){if(this.AEa===E)return;this.
AEa=E;},AFz:function(E){if(this.AGm===E)return;this.AGm=E;},AE0:function(E){if(this.
ACg===E)return;this.ACg=E;},_Init:function(aArg){this.__proto__=C.Axy;A.h7++;},_Done:
function(){this.__proto__=null;A.h7--;},_ReInit:function(){},_Mark:function(D){var
B;if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:
null,_className:"Device::SoftwareVersionInformation"};C.Avo={Timestamp:0,ARv:0,ARw:
0,AVe:0,AVf:0,AVd:0,ARu:0,OnSetTimestamp:function(E){if(this.Timestamp===E)return;
this.Timestamp=E;},AFh:function(E){if(this.ARv===E)return;this.ARv=E;},AFi:function(
E){if(this.ARw===E)return;this.ARw=E;},AFO:function(E){if(this.AVe===E)return;this.
AVe=E;},AFP:function(E){if(this.AVf===E)return;this.AVf=E;},AFN:function(E){if(this.
AVd===E)return;this.AVd=E;},AFg:function(E){if(this.ARu===E)return;this.ARu=E;},
_Init:function(aArg){this.__proto__=C.Avo;A.h7++;},_Done:function(){this.__proto__=
null;A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((B=this.I)&&(B._cycle
!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:"Device::HardwareVersionInformation"
};C.Aqt={Undefined:0,BDy:1,BCI:2};C.Ags={Manual:0,TransponderId:1,LAST:2};C.AnimalIdAutoGenerationMethodToString={
BH:function(A5){var Bb3=A5;var A04=A.jV;switch(Bb3){case 0:A04=A.aaR(A.acf.A5p);
break;case 1:A04=A.aaR(A.acf.A5F);break;default:throw new Error(AZu+Bb3.toFixed(
));}return A04;},_Init:function(aArg){C.EnumToString._Init.call(this,aArg);this.
__proto__=C.AnimalIdAutoGenerationMethodToString;},_className:"Device::AnimalIdAutoGenerationMethodToString"
};C.He={A4_:0,ADV:1,ACE:2,AD7:3,ABF:4,AD_:5,ADX:6,ADW:7,ABM:8,AGv:9,AEk:10,AEi:11
,ACp:12,LAST:13};C.MonthToString={BH:function(A5){var BdJ=A5;var XA=A.jV;switch(
BdJ){case 1:XA=A.aaR(A.act.ADV);break;case 2:XA=A.aaR(A.act.ACE);break;case 3:XA=
A.aaR(A.act.AD7);break;case 4:XA=A.aaR(A.act.ABF);break;case 5:XA=A.aaR(A.act.AD_
);break;case 6:XA=A.aaR(A.act.ADX);break;case 7:XA=A.aaR(A.act.ADW);break;case 8:
XA=A.aaR(A.act.ABM);break;case 9:XA=A.aaR(A.act.AGv);break;case 10:XA=A.aaR(A.act.
AEk);break;case 11:XA=A.aaR(A.act.AEi);break;case 12:XA=A.aaR(A.act.ACp);break;default:
throw new Error(AZv+BdJ.toFixed());}return XA;},_Init:function(aArg){C.EnumToString.
_Init.call(this,aArg);this.__proto__=C.MonthToString;},_className:"Device::MonthToString"
};C.AjE={FileName:A.jV,AGo:0,ACm:0,AnY:false,_Init:function(aArg){this.__proto__=
C.AjE;A.h7++;},_Done:function(){this.__proto__=null;A.h7--;},_ReInit:function(){
},_Mark:function(D){var B;if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null
,_cycle:0,_observers:null,_className:"Device::DataExportContext"};C.AVI={Init:function(
aArg){var B;A.zX([this,this.BeZ],[B=A._GetAutoObject(C.Device),B.A85,B.Ba7],0);this.
BeZ(this);},Ch:function(){A._GetAutoObject(C.Device).Asa(this.toString());},BeZ:
function(G){this.Er(A._GetAutoObject(C.Device).AHc);A.we(this,0);},_Init:function(
aArg){C.Int32ArrayWrapper._Init.call(this,aArg);this.__proto__=C.AVI;this.Zy(3);
this.Init(aArg);},_className:"Device::WeightGainsLowClass"};C.AVH={Init:function(
aArg){var B;A.zX([this,this.BeX],[B=A._GetAutoObject(C.Device),B.A84,B.Ba6],0);this.
BeX(this);},Ch:function(){A._GetAutoObject(C.Device).Ar$(this.toString());},BeX:
function(G){this.Er(A._GetAutoObject(C.Device).AHb);A.we(this,0);},_Init:function(
aArg){C.Int32ArrayWrapper._Init.call(this,aArg);this.__proto__=C.AVH;this.Zy(3);
this.Init(aArg);},_className:"Device::WeightGainsHighClass"};C.AVK={Init:function(
aArg){var B;A.zX([this,this.Be1],[B=A._GetAutoObject(C.Device),B.A88,B.Ba_],0);this.
Be1(this);},Ch:function(){A._GetAutoObject(C.Device).Asb(this.toString());},Be1:
function(G){this.Er(A._GetAutoObject(C.Device).AHf);A.we(this,0);},_Init:function(
aArg){C.Int32ArrayWrapper._Init.call(this,aArg);this.__proto__=C.AVK;this.Zy(3);
this.Init(aArg);},_className:"Device::WeightValuesBirthClass"};C.AVG={Init:function(
aArg){var B;A.zX([this,this.BeV],[B=A._GetAutoObject(C.Device),B.A83,B.Ba5],0);this.
BeV(this);},Ch:function(){A._GetAutoObject(C.Device).Ar_(this.toString());},BeV:
function(G){this.Er(A._GetAutoObject(C.Device).AHa);A.we(this,0);},_Init:function(
aArg){C.Int32ArrayWrapper._Init.call(this,aArg);this.__proto__=C.AVG;this.Zy(3);
this.Init(aArg);},_className:"Device::WeightGainsAverageClass"};C.AME={Init:function(
aArg){var B;A.zX([this,this.Bee],[B=A._GetAutoObject(C.Device),B.A7$,B.BaG],0);this.
Bee(this);},Bee:function(G){this.Er(A._GetAutoObject(C.Device).ABE);A.we(this,0);
},_Init:function(aArg){C.Int32ArrayWrapper._Init.call(this,aArg);this.__proto__=
C.AME;this.Zy(3);this.Init(aArg);},_className:"Device::AnimalTypesWeightGainsClass"
};C.BEk={BEn:0,BEb:1,BC2:2,BFH:3,Unknown:4};C.BCG={None:0,BEv:1,BEp:2,BEl:3,BEm:
4};C.BFB={A7K:0,Manual:1,TransponderId:2,NaisId:3,LAST:4};C.TransponderLinkageIdChangeMethodToString={
BH:function(A5){var Bf_=A5;var ABf=A.jV;switch(Bf_){case 0:ABf=A.aaR(A.acf.A7K);
break;case 1:ABf=A.aaR(A.acf.A5p);break;case 2:ABf=A.aaR(A.acf.A5F);break;case 3:
ABf=A.aaR(A.acf.BhA);break;default:throw new Error(AZw+Bf_.toFixed());}return ABf;
},_Init:function(aArg){C.EnumToString._Init.call(this,aArg);this.__proto__=C.TransponderLinkageIdChangeMethodToString;
},_className:"Device::TransponderLinkageIdChangeMethodToString"};C.A_w={BAP:function(
AoL){var J$=A.ab0(A.abV(AoL,15),0,10);var J3=A._GetAutoObject(C.Converter).ZZ(J$
);if(!!J3){if(J3===10){if((AoL.length!==16)||!A._GetAutoObject(A.acj.VB).AVs(AoL
))return 0;else return J$;}else return J$;}else{J3=A._GetAutoObject(C.Converter).
ZZ(A._GetAutoObject(C.Device).Ut);if(!!J3&&(J3===10)){if(!A._GetAutoObject(A.acj.
VB).AVs(AoL))return 0;if(AoL.length===12){var Bb2=A.ab0(A.abV(AoL,10),0,10);var AKc=
A._GetAutoObject(C.Converter).Bpu(Bb2);if((Bb2>0)&&!!AKc)return(A._GetAutoObject(
C.Converter).AqA(J3)*1000000000000)+A.ab0(A.abV(AoL,10),0,10);}}}return 0;},Be9:
function(J4){if((J4.length!==10)||!A._GetAutoObject(A.acj.VB).AVs(J4))return 0;var
AAH=A._NewObject(A.Core.Bs,0);var A3G=false;var A3L=A.abW(J4,4,4);var AtO=A.wz(A3L
,0,10);if((AtO<2000)||(AtO>2100)){A3L=A.abV(J4,4);AtO=A.wz(A3L,0,10);A3G=true;}if((
AtO<2000)||(AtO>2100))return 0;AAH.Year=AtO;var AKY;var AzQ;if(A3G){AKY=A.abW(J4
,4,2);AzQ=A.wz(AKY,0,10);}else{AKY=A.abW(J4,2,2);AzQ=A.wz(AKY,0,10);}if((AzQ<1)||(
AzQ>12))return 0;AAH.Um(AzQ);var AKX;var AzP;if(A3G){AKX=A.abW(J4,6,2);AzP=A.wz(
AKX,0,10);}else{AKX=A.abV(J4,2);AzP=A.wz(AKX,0,10);}if((AzP<1)||(AzP>AAH.Zo()))return 0;
AAH.Ln(AzP);return AAH.JN();},_Init:function(aArg){this.__proto__=C.A_w;A.h7++;}
,_Done:function(){this.__proto__=null;A.h7--;},_ReInit:function(){},_Mark:function(
D){var B;if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:
null,_className:"Device::ParserClass"};C.AnJ={_Init:function(){C.A_w._Init.call(
this,0);},_ReInit:function(){},_variants:function(){return this;},_this:null};C.
AnimalTableFieldsToString={BH:function(A5){var Aao=A5;var ML=A.jV;switch(Aao){case
14:ML=A.aaR(A.acf.Afo);break;case 32:ML=A.aaR(A.acf.Breed);break;case 4:ML=A.aaR(
A.acf.Aeb);break;case 28:ML=A.aaR(A.acf.A5d);break;case 33:ML=A.aaR(A.acf.AgC);break;
case 23:ML=A.aaR(A.acf.KH);break;case 7:ML=A.aaR(A.acf.Afj);break;case 2:ML=A.aaR(
A.acf.P);break;case 0:ML=A.aaR(A.acf.GJ);break;case 8:ML=A.aaR(A.acf.Alarm);break;
case 9:ML=A.aaR(A.acf.AB$);break;case 38:ML=A.aaR(A.acf.BhU);break;case 11:ML=A.
aaR(A.acf.Fever);break;case 29:ML=A.aaR(A.acf.ARj);break;case 18:ML=A.aaR(A.acf.
M1);break;case 26:ML=A.aaR(A.acf.Ud);break;case 22:ML=A.aaR(A.acf.Transponder);break;
case 1:ML=A.aaR(A.acf.GF);break;case 34:ML=A.aaR(A.acf.Jd);break;case 6:case 25:
case 27:case 10:case 37:case 12:case 17:case 5:case 3:case 35:case 36:case 15:case
16:case 24:case 31:case 20:case 30:case 21:case 19:case 13:ML=A.jV;break;default:
throw new Error(AIz+A5.toFixed());}return ML;},_Init:function(aArg){C.EnumToString.
_Init.call(this,aArg);this.__proto__=C.AnimalTableFieldsToString;},_className:"Device::AnimalTableFieldsToString"
};C.VN={BDK:0,BDI:1,LAST:2};C.DataExportDestinationToString={BH:function(A5){var
Byq=A5;var A1t=A.jV;switch(Byq){case 0:A1t=A.acf.BiQ;break;case 1:A1t=A.acf.Bhu;
break;default:throw new Error(AZx+A5.toFixed());}return A1t;},_Init:function(aArg
){C.EnumToString._Init.call(this,aArg);this.__proto__=C.DataExportDestinationToString;
},_className:"Device::DataExportDestinationToString"};C.AD4={Bg:0,BFg:1,LAST:2};
C.ListViewScopeToString={BH:function(A5){var Bzz=A5;var A2p=A.jV;switch(Bzz){case
0:A2p=A.aaR(A.acf.Bg);break;case 1:A2p=A.aaR(A.acf.Box);break;default:throw new Error(
AZy+A5.toFixed());}return A2p;},_Init:function(aArg){C.EnumToString._Init.call(this
,aArg);this.__proto__=C.ListViewScopeToString;},_className:"Device::ListViewScopeToString"
};C.AHe={BF_:0,BF9:1,BF8:2,LAST:3};C.WeightValuePrecisionToString={BH:function(A5
){var BCe=A5;var ALz=A.jV;switch(BCe){case 0:ALz=AZz+A.aaR(A.acf.Az3);break;case
1:ALz=AZA+A.acf.AiB;break;case 2:ALz=AZB+A.acf.AiB;break;default:throw new Error(
AZC+A5.toFixed());}return ALz;},_Init:function(aArg){C.EnumToString._Init.call(this
,aArg);this.__proto__=C.WeightValuePrecisionToString;},_className:"Device::WeightValuePrecisionToString"
};C.Agx={BH:function(A5){var AK6=A5;if(AK6===1)return A.aaR(A.acf.BiT);else return C.
AnimalTypeToString.BH.call(this,A5);},_Init:function(aArg){C.AnimalTypeToString.
_Init.call(this,aArg);this.__proto__=C.Agx;},_className:"Device::AnimalTypeToStringHeifer"
};C.Y7={RL:0,BEr:1,LAST:2};C.MassDeregistrationCriterionToString={BH:function(A5
){var BzC=A5;var A2u=A.jV;switch(BzC){case 0:A2u=A.aaR(A.acf.BjX);break;case 1:A2u=
A.aaR(A.acf.AR4);break;default:throw new Error(AHt+A5.toFixed());}return A2u;},_Init:
function(aArg){C.EnumToString._Init.call(this,aArg);this.__proto__=C.MassDeregistrationCriterionToString;
},_className:"Device::MassDeregistrationCriterionToString"};C.UInt64PartialFilterCriterion={
A4:A.jV,Zm:0,OA:0,Abi:function(){var Av=A._NewObject(C.UInt64PartialFilterCriterion
,0);Av.E8(this);return Av;},E8:function(AH){C.FilterCriterion.E8.call(this,AH);var
Av=(C.UInt64PartialFilterCriterion.isPrototypeOf(AH)?AH:null);if(!!Av){this.A4=Av.
A4;this.Zm=Av.Zm;this.OA=Av.OA;}},Initialize:function(A3,Eb,A7,Atp,AI5,P$){this.
EK=A3;this.Operator=Eb;this.A4=A7;this.YI=P$;this.Zm=Atp;this.OA=AI5;return this;
},_Init:function(aArg){C.FilterCriterion._Init.call(this,aArg);this.__proto__=C.
UInt64PartialFilterCriterion;},_className:"Device::UInt64PartialFilterCriterion"
};
C._Init=function(){C.Int32FilterCriterion.__proto__=C.FilterCriterion;C.StringFilterCriterion.
__proto__=C.FilterCriterion;C.Table.__proto__=C.ITable;C.Animal.__proto__=C.Row;
C.Rating.__proto__=C.Row;C.HelperClass.__proto__=C.AmJ;C.BoolFilterCriterion.__proto__=
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
C.AU5.__proto__=C.Int32ArrayWrapper;C.AU4.__proto__=C.Int32ArrayWrapper;C.AMD.__proto__=
C.Int32ArrayWrapper;C.UInt64FilterCriterion.__proto__=C.FilterCriterion;C.BooleanToAssignedUnassignedString.
__proto__=C.EnumToString;C.CountryToString.__proto__=C.EnumToString;C.EaseOfDeliveryToString.
__proto__=C.EnumToString;C.WhereAboutsToString.__proto__=C.EnumToString;C.BreedToString.
__proto__=C.EnumToString;C.AnimalIdGenerationMethodToString.__proto__=C.EnumToString;
C.DirectionOfCountingToString.__proto__=C.EnumToString;C.Aed.__proto__=C.EnumToIcon;
C.AdU.__proto__=C.EnumToIcon;C.GermanStateToString.__proto__=C.EnumToString;C.EartagNrAssignmentModeToString.
__proto__=C.EnumToString;C.MZ.__proto__=C.EnumToCodeset;C.ReasonOfLeavingToString.
__proto__=C.EnumToString;C.Aht.__proto__=C.EnumToCodeset;C.KX.__proto__=C.EnumToCodeset;
C.CalfDeregistrations.__proto__=C.Row;C.DeviceComponentToString.__proto__=C.EnumToString;
C.AgK.__proto__=C.EnumToCodeset;C.AeO.__proto__=C.EnumToIcon;C.WhereAboutsFilterCriterion.
__proto__=C.FilterCriterion;C.TimespanDaysToString.__proto__=C.EnumToString;C.USBStateToString.
__proto__=C.EnumToString;C.AnimalIdAutoGenerationMethodToString.__proto__=C.EnumToString;
C.MonthToString.__proto__=C.EnumToString;C.AVI.__proto__=C.Int32ArrayWrapper;C.AVH.
__proto__=C.Int32ArrayWrapper;C.AVK.__proto__=C.Int32ArrayWrapper;C.AVG.__proto__=
C.Int32ArrayWrapper;C.AME.__proto__=C.Int32ArrayWrapper;C.TransponderLinkageIdChangeMethodToString.
__proto__=C.EnumToString;C.AnimalTableFieldsToString.__proto__=C.EnumToString;C.
DataExportDestinationToString.__proto__=C.EnumToString;C.ListViewScopeToString.__proto__=
C.EnumToString;C.WeightValuePrecisionToString.__proto__=C.EnumToString;C.Agx.__proto__=
C.AnimalTypeToString;C.MassDeregistrationCriterionToString.__proto__=C.EnumToString;
C.UInt64PartialFilterCriterion.__proto__=C.FilterCriterion;};C._ReInit=function(
){var B;if((B=C.Device._this))B._ReInit(),C.Device._ReInit.call(B);if((B=C.Converter.
_this))B._ReInit(),C.Converter._ReInit.call(B);if((B=C.Helper._this))B._ReInit()
,C.Helper._ReInit.call(B);if((B=C.AnJ._this))B._ReInit(),C.AnJ._ReInit.call(B);};
C.DH=function(D){var B;if((B=C.Device._this)&&(B._cycle!=D))B._Done(C.Device._this=
null);if((B=C.Converter._this)&&(B._cycle!=D))B._Done(C.Converter._this=null);if((
B=C.Helper._this)&&(B._cycle!=D))B._Done(C.Helper._this=null);if((B=C.AnJ._this)&&(
B._cycle!=D))B._Done(C.AnJ._this=null);};return C;})();

/* VitalControl demonstration application, © Urban GmbH & Co.KG 2023 */