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
* Version  : 13.03
* Profile  : WebGLDemonstrator
* Platform : Web.WebGL.RGBA8888
*
*******************************************************************************/

var index;if(!index)throw new Error("The application file '_project.js' isn't yet loaded!"
);if(index.Device)throw new Error("The unit file 'Device.js' included twice!");index.
Device=(function(){var A=index;var C={};
var Cf="ERROR: Cannot add criterion, it is already in the list.";var BD="ERROR: BatteryChargeState is read only";
var E8="ERROR: UpdateChargeActive is read only";var Hs="ERROR: ScanState is read only.";
var I0="ERROR: MeasureState is read only.";var Iw="ERROR: Temperature value is read only";
var O$="ERROR: UpdateDataTable called for Undefined data table.";var Qc="ERROR: UpdateDataTable called for unknown data table id=";
var Qd="ERROR: SyncState is read only.";var CR="ERROR: ScanTransponder is read only.";
var Ff="ERROR: Body weight value is read only";var L9="ERROR: Predicted temperature value is read only";
var Qe="ERROR: TransferProgress is read only";var J9="ERROR: TransferTarget is read only";
var Oh="ERROR: unhandled assessment.";var Qf="Unhandled enum BodyTemperature: ";
var MR="AU";var Tf="AT";var U1="BE";var Aab="BA";var Xf="BG";var Ix="CA";var U2=
"CN";var Aac="TW";var U3="HR";var Aad="CY";var Xg="CZ";var Aae="DK";var Aaf="EE";
var U4="FI";var Xh="FR";var Pa="DE";var Aag="GR";var Oi="HU";var Rq="IE";var Xi=
"IT";var Xj="JP";var Tg="LV";var Xk="LT";var Aah="LU";var Xl="MT";var Xm="NL";var
Th="NO";var Ti="PL";var Tj="PT";var Aai="RO";var Tk="RU";var Aaj="SK";var AfG="SI";
var Aak="ES";var Xn="SE";var Aal="CH";var Xo="TR";var AhY="UA";var K3="UK";var AcS=
"US";var LB=".";var AhZ="-";var Aoj="ERROR: Unhandled mass unit: ";var Oj=" ";var
Xp="Unhandled gender";var Aam="Unhandled animal type";var AfH="Unhandled Device::MassUnit.";
var Ah0="Unhandled Device::AnimalListContent.";var AcT="Avid";var U5="Ordicam / IER SA";
var Aok="Agrident";var Aol="Datamars";var Aom="Allflex";var Aon="Texas Instruments";
var Ale="Nedap";var As6="Digital Angel";var Ayc="null";var Ayd="[ ";var Pb=", ";
var Rr=" ]";var Aye="Unhandled language";var U6="Unhandled Device::AnimalListAction.";
var As7="Temperature unit conversion not supported: ";var Ayf="->";var Ayg="=";var
Alf=">";var Ayh="<";var AfI="!=";var Aoo="WARNING: Unhandled operator.";var I1="Unknown birth type";
var Aop="Unhandled country: ";var As8="Unhandled Device::Action: ";var Xq="ERROR: Cannot start transaction";
var As9="ERROR: Table is null, cannot load row (";var As_=")";var As$="Table Id mismatch!";
var Aoq="ERROR: Row index (";var Ata=") out of bounds [0,";var Alg="]";var Ayi="ERROR: Table is full. Item limit: ";
var Ayj="Device::ScanTransponder not set";var Ayk="Unhandled TransponderType.";var
Atb="Unhandled ScanState.";var Ayl="Could not load animal with transponder";var Pc=
"Birth type";var Aym="Time calving";var AWp="Pend. reg. notice";var AWq="Perished";
var AWr="Rating temp.";var AWs="Location";var AHF=" mother";var AHG="Reason leaving";
var AfJ="Time alarm";var Aor="Time first weighing";var AWt="Time control";var AHH=
"Time temp.";var Alh="Time watch";var AHI="Time weighing";var AHJ="Assessment";var
AWu="Time rating";var AWv="ERROR: Unhandled AnimalTable filter field:";var AHK="Field ";
var AWw="ERROR: Unhandled RatingTable filter field:";var AcU="ERROR: Unhandled table ";
var AWx=" filter fields.";var AWy=" [";var AWz="WARNING: Unhandled filter criterion type.";
var AHL="0";var Atc="No table specified";var AHM="Invalid animal id generation method: ";
var AHN="Unhandled AnimalIdGenerationMethod: ";var Ayn="Invalid gender: ";var AHO=
"Invalid ear tag number assignment mode: ";var Ayo=";";var AWA="Invalid animal creation error code: ";
var AWB="Invalid EartagNrAssignmentMode: ";var AWC="Unsupported exponent: ";var AWD=
"Unknown whereabouts type: ";var AHP="Unhandled Gender: ";var AWE="Unhandled AnimalIdAutoGenerationMethod: ";
var MS="\n";var Ayp="\n\n";var AWF="Bootloader:\nV\xA0";var AWG="Middleware:\nV\xA0";
var AWH="GUI:\nV\xA0";var AWI="Mainboard: ";var AWJ="Torchboard: ";var AHQ="Operator not supported.";
var AWK="Unhandled Device::TransponderAssignmentIdChangeMethod: ";var Ayq="Unhandled mass deregistration criterion: ";
var AWL="Could not load animal with naisId";var Atd="Unhandled enum value ";var Ayr=
"UNDEFINED";var AWM="Boot";var AHR="Charge";var AWN="ChargeWarning";var AHS="ControlledPowerOff";
var AHT="DeviceMain";var AHU="DeviceService";var AWO="DeviceInfo";var AHV="DeviceDataManagement";
var AWP="DeviceAnimalDataMenu";var AWQ="DeviceDeviceDataMenu";var Rs="DeviceCheck";
var U7="Home";var AWR="Settings";var AWS="DateTimeSettings";var AWT="UnitsSettings";
var AWU="DataAcquisitionSettings";var AWV="RegistrationAutomaticSettings";var AWW=
"RegistrationPresettingsSettings";var AWX="TransponderAssignmentSettings";var Ah1=
"TransponderUnlinkSettings";var AHW="TemperatureSettings";var AWY="WeightGainSettings";
var AWZ="DeviceSettings";var AHX="RegistrationSettings";var AHY="InitializationSettings";
var Ays="PremisesSettings";var Qg="Sleep";var AW0="Sync";var AW1="EditAnimalData";
var AW2="EditAnimalDataNaisId";var Ate="AnimalList";var AW3="AnimalListFilter";var
AW4="AlarmListFilter";var AW5="WatchListFilter";var AW6="AnimalActionActions";var
AW7="AnimalActionTemperature";var AW8="TemperatureMeasurement";var Atf="AnimalActionWeighing";
var AW9="AnimalActionRate";var AW_="AnimalActionUnregister";var AW$="AnimalActionPerished";
var AXa="AnimalActionNewBornCare";var AXb="AlarmList";var AXc="ControlMeasure";var
AXd="ControlList";var AXe="RangeTest";var AXf="ListsMain";var AXg="ListsIdManagement";
var AHZ="WatchList";var Ali="EvaluationMenuMain";var AXh="EvaluationMenuWeights";
var AXi="EvaluationLosses";var AXj="EvaluationRatings";var Ayt="EvaluationTemperatures";
var Alj="EvaluationWeights";var Ah2="EvaluationWeightsRecent";var Ayu="EvaluationBirthWeights";
var Aos="AnimalEvaluationFilter";var Ah3="NewMenu";var AXk="NewAnimals";var Ayv=
"NewAnimalManualData";var AH0="MassRecording";var AfK="NewAnimalTransponderData";
var AH1="NewAnimalLoss";var Aan="AutoActionScanScreen";var Alk="ManualActionScanScreen";
var Aot="SetTransponderScreen";var AXl="SetSaveTransponderScreen";var AXm="NewAnimalSetTransponderScreen";
var AXn="NewAnimalsSetTransponderScreen";var AXo="NewAnimalCalvingDataScreen";var
AXp="WeightListScreen";var Atg="AnimalSingleInfoScreen";var AH2="AnimalMultiInfoScreen";
var AH3="AnimalRegistrationDetails";var AXq="FreshCowListScreen";var AXr="FreshCowListFilterScreen";
var AXs="DryCowListScreen";var AXt="DryCowListFilterScreen";var AXu="NoTransponderListScreen";
var AXv="NoTransponderListFilterScreen";var AXw="YoungNoTransponderListScreen";var
AXx="YoungNoTransponderListFilterScreen";var AXy="NoNaisIdListScreen";var AXz="NoNaisIdListFilterScreen";
var AXA="RegistrationsListScreen";var Ayw="RegistrationsListFilterScreen";var AH4=
"ActionListScreen";var AH5="ActionListFilterScreen";var AH6="UpdateScreen";var AH7=
"MotherScanScreen";var AH8="SetSaveNaisIdScreen";var AH9="PurchasedAnimalsList";
var AXB="TextInput";var AXC="AnimalActions";var AXD="Unhandled display mode: ";var
AXE="None";var AXF="Actions Settings";var AXG="Auto Action";var AXH="Menu Item Settings";
var Ayx="Rating Type";var AH_="Weighing settings";var AXI="Options";var AH$="AnimalSearch";
var Ah4="AnimalSearchUnfiltered";var U8="AnimalSearchDriedOff";var AXJ="MeasurementReady";
var Aao="AnimalMultiInfoMenu";var AXK="MassRecordingDefaults";var AXL="MassRecordingFields";
var All="MassRecordingMenu";var AfL="BirthRegistrationsListMenu";var Ah5="Unhandled overlay menu: ";
var Aou="Error";var Ayy="Idle";var Pd="IdScanned";var AXM="NotFound";var AIa="Progress";
var AIb="Unhandled scan state: ";var AXN="Prediction";var Ayz="Ready";var AIc="Unhandled measure state: ";
var AXO="Unhandled temperature unit: ";var AXP="Unhandled species: ";var AXQ="Bosanski";
var AXR="\u0411\u044A\u043B\u0433\u0430\u0440\u0441\u043A\u0438";var AXS="\u6B63\u9AD4\u5B57/\u7E41\u9AD4\u5B57";
var AXT="Hrvatski";var AXU="\u010Ce\u0161tina";var AXV="Dansk";var AId="English";
var AXW="Nederlands";var AIe="Eesti";var AIf="Suomalainen";var AyA="Fran\xE7ais";
var AXX="Deutsch";var AXY="\u0395\u03BB\u03BB\u03B7\u03BD\u03B9\u03BA\u03AC";var
AXZ="Magyar";var AX0="Italiano";var AX1="\u65E5\u672C\u8A9E";var AX2="Latvie\u0161u";
var AX3="Lietuvi\u0161kas";var AX4="Norsk";var Aov="Polski";var Ath="Portugu\xEAs";
var AIg="Rom\xE2n\u0103";var AX5="\u0420\u0443\u0441\u0441\u043A\u0438\u0439";var
AX6="Sloven\u0161\u010Dina";var AX7="Espa\xF1ol";var AX8="Svenska";var AX9="T\xFCrk\xE7e";
var AX_="\u0423\u043A\u0440\u0430\u0457\u043D\u0441\u044C\u043A\u0438\u0439";var
AIh="Unhandled language: ";var AX$="BS";var AYa="ZH";var AYb="CS";var AYc="DA";var
AYd="EN";var AYe="ET";var AYf="EL";var AYg="JA";var AIi="SL";var AYh="SV";var AYi=
"Unhandled gender: ";var AIj="Unhandled birth type: ";var AIk="Exporting";var AIl=
"ImportFinish";var AIm="ImportStart";var AyB="Importing";var AyC="Init";var AIn=
"Unhandled sync state: ";var AIo="Unhandled rating attribute: ";var AIp="Unhandled assessment: ";
var AyD="Illegal boolean value: ";var AyE="Unhandled popup ID:";var AYj="Unknown";
var AYk="Severe Error";var AYl="ErrorsDeviceDriverCheck";var AYm="Enter Sleep";var
AYn="About";var AYo="InfoSoftwareVersions";var AYp="InfoHardwareVersions";var AYq=
"InfoSerial";var AYr="ShutDown";var AYs="SuccessDataSync";var AYt="SuccessResetFactory";
var AYu="SuccessResetSettings";var AyF="SuccessResetAnimalData";var AYv="SuccessCreateBackup";
var AYw="SuccessRestoreBackup";var AyG="CreateBackupInProgress";var Ati="RestoreBackupInProgress";
var U9="FailedCreateBackup";var Atj="FailedRestoreBackup";var AYx="TechnicalDetails";
var AYy="WarningDataSync";var AYz="WarningFactory";var AIq="WarningResetAnimalData";
var AYA="WarningResetDeviceData";var AIr="WarningRestart";var AYB="WarningAutoAction";
var AYC="WarningAutoActionNotApplicable";var AYD="WarningNoMenuItem";var Atk="WarningEnterDemoMode";
var AYE="NoAnimalsRegistered";var AYF="MaxNumAnimalsReached";var AIs="MaxNumRatingsReached";
var AYG="MaxNumCalfDeregistrationsReached";var AYH="MissingTransponder";var AYI=
"EarTagNumberTooShort";var AYJ="NoValidCountryCode";var AcV="WarningOutdatedAnimalWeight";
var AYK="WarningOutdatedAnimalWeights";var AYL="WarningWeightEvaluationSingular";
var AYM="WarningWeightEvaluationPlural";var AYN="ScanError";var AIt="ScanNotFound";
var AYO="ScannedAnimalNotFound";var AYP="ScannedTransponderNotFound";var AYQ="ScannedNaisIdNotFound";
var AYR="AnimalNotFound";var AYS="SuccessUnregister";var AYT="SuccessUnregisterPerished";
var AIu="SuccessCreationNewAnimal";var AYU="SuccessCreationNewAnimals";var AYV="AnimalCreationInProgress";
var AYW="EvaluationInProgress";var AIv="DataSyncInProgress";var AIw="AddedToAlarm";
var AYX="RemovedFromAlarm";var AYY="AddedToWatch";var AYZ="RemovedFromWatch";var
AY0="AddedToDryOff";var Rt="RemovedFromDryOff";var Atl="AnimalIdAlreadyExists";var
AIx="AnimalIdAlreadyExistsContinuable";var AIy="MissingAnimalId";var Aow="MissingAnimalIdMother";
var Aox="MissingEartagNumber";var AyH="MissingTransponderId";var AY1="TransponderAlreadyRegistered";
var AIz="TransponderAlreadyRegisteredContinuable";var AY2="TransponderAlreadyRegisteredCapturable";
var AY3="HelpAnimalInfoRating";var AY4="WarningReassignTransponder";var AY5="CannotReassignNaisId";
var AY6="WarningResetToDefaultValue";var AY7="WarningResetThresholds";var AY8="WarningResetTempThresholds";
var AY9="UpdateFirmware";var AY_="UpdateFirmwareBatteryLow";var AY$="ConfirmFirmwareUpdated";
var AZa="ConfirmBootloaderUpdated";var AZb="QuestionAddAnotherCalfMultiples";var
AZc="RemovedAllBirthNoticesPending";var AZd="RemovedAllPurchasedNoticePending";var
AZe="RemovedFromBirthNoticePending";var AZf="RemovedFromPurchasedNoticePending";
var AZg="SuccessClearAnimalLoss";var Aoy="RemovedAnimalBirth";var AIA="RemovedAnimalPurchased";
var AZh="WarningNoActionsForAnimalLoss";var AIB="SuccessLinkTransponder";var AIC=
"SuccessChangeTransponder";var AcW="SuccessUnlinkTransponder";var AID="SuccessLinkNaisId";
var AZi="WarningDataExportHitBirthFailed";var AIE="SuccessDataExportHitBirth";var
AZj="SuccessDataExportHitBirthDownload";var AyI="SuccessDataExportHitBirthResetAdvice";
var AZk="WarningDataExportPurchasedFailed";var AZl="SuccessDataExportPurchased";
var AyJ="SuccessDataExportPurchasedDownload";var AZm="SuccessDataExportPurchasedResetAdvice";
var AZn="WarningDataExportAnimalsFailed";var AZo="SuccessDataExportAnimalsRatings";
var AIF="SuccessDataExportAnimalsDownload";var Aoz="WarningNoPremisesID";var AIG=
"WarningNoFlashDrivePresent";var AZp="WarningNoBackupPathPresent";var AIH="WarningNoBackupFilePresent";
var AII="DemoFunctionNotAvailable";var Alm="WarningImpreciseTimeSetting";var AZq=
"ConfirmationRestoreBackup";var AoA="ConfirmationMassDeregistration";var AZr="SuccessMassDeregistration";
var AIJ="WarningParsedDateInFutureInvalid";var AIK="WarningParsingDateFailed";var
AZs="WarningParsingNaisIdFailed";var AZt="WarningParsingShortNaisIdWithoutPremisesId";
var AIL="DataExportInProgress";var AZu="BarcodeScannerConnectedSwitchScreen";var
AZv="BarcodeScannerDisconnectedSwitchScreen";var AZw="AnimalId";var AZx="FarmId";
var AZy="GroupId";var AZz="PersonId";var AZA="Unhandled transponder type: ";var AZB=
"FDX";var AZC="HDX";var AZD="HDX (Urban)";var AZE="Unhandled transponder protocol: ";
var AZF="Illegal RatingMode: ";var AZG="Unhandled mass unit: ";var AZH="Max array size is 10";
var AyK="Index out of bounds";var Aap="ERROR: Received more integers than expected!";
var AIM="Unhandled double scan action :";var AyL="Illegal WeightRecordingMode: ";
var AZI="Illegal WeightRecordingScope: ";var AZJ="AnimalDataGenderType";var AZK=
"AnimalDataShortNaisId";var AZL="Rating";var AZM="Temperature";var AZN="Weight";
var Atm="Alarm infos";var Atn="Control infos";var Ato="Watch infos";var Atp="Fresh cow infos";
var AyM="No transponder infos";var AoB="Dry cow info";var AZO="No nais id infos";
var AZP="Birth registrations infos";var AZQ="Purchased registrations infos";var AZR=
"Young no transponder infos";var AZS="Unhandled animal list content:";var AZT="Illegal AutoRegistrationMode: ";
var AZU="Illegal FactoryResetScope: ";var AoC="??";var AZV="Illegal EaseOfDelivery: ";
var AZW="Illegal Whereabouts: ";var AZX="Illegal breed: ";var AZY="Unisex";var AZZ=
"Illegal animalIdGenerationMethod: ";var AZ0="Ascending";var AZ1="Descending";var
AyN="Illegal directionOfCountingName: ";var AIN="Unhandled direction of counting: ";
var Aln="Unhandled German state: ";var AyO="SH";var AZ2="HH";var AZ3="NI";var AZ4=
"HB";var AIO="NW";var AZ5="HE";var AZ6="RP";var AZ7="BW";var AZ8="BY";var AZ9="BB";
var AZ_="MV";var AZ$="SN";var A0a="ST";var AIP="TH";var A0b="One Range Male Female";
var A0c="Two Ranges Male Female";var AIQ="Illegal EartagAssignmentMode: ";var A0d=
"Unhandled code set value ";var AIR="Implement in derived class";var A0e="Illegal HIT-Code: ";
var A0f="Illegal ReasonOfLeaving: ";var AyP="Illegal code: ";var A0g="Undefined";
var Atq="Illegal DeviceComponent: ";var A0h="Unhandled Device::MotherSelectionFilterMode: ";
var A0i="Illegal Device::TimespanDays: ";var Atr="Not connected";var AyQ="Host";
var AyR="Device";var A0j="Device CDC";var A0k="Host MSC";var A0l="Host HID";var AIS=
"Host CDC";var AIT="Illegal animalIdAutoGenerationMethod: ";var Alo="Unhandled month: ";
var A0m="Illegal transponderAssignmentIdChangeMethod: ";var A0n="Unhandled animal table field: ";
var A0o="Unhandled list view scope: ";var A0p="1 ";var AyS="100 ";var Ats="10 ";
var AIU="Unhandled weight value precision: ";
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
B9:null,B_:null,CX:function(AI){if(!AI)return;var Aw=this.B9;while(!!Aw){if(Aw===
AI)throw new Error(Cf);Aw=Aw.Ah;}AI.AJ=this.B_;if(!!this.B_)this.B_.Ah=AI;this.B_=
AI;if(!this.B9)this.B9=AI;},AOZ:function(){return this.B9;},AO4:function(Bcq){if(
!!Bcq)return Bcq.Ah;return null;},DM:function(AJm,Eb){var Aw=this.B9;while(!!Aw){
if(Aw.EJ===AJm){if(Eb===1)return Aw;else if(Aw.Operator===Eb)return Aw;}Aw=Aw.Ah;
}return null;},Nw:function(AI){var Aw=this.B9;while(!!Aw){if(Aw===AI){if(!!Aw.AJ
)Aw.AJ.Ah=Aw.Ah;if(!!Aw.Ah)Aw.Ah.AJ=Aw.AJ;if(this.B9===Aw)this.B9=Aw.Ah;if(this.
B_===Aw)this.B_=Aw.AJ;Aw.Ah=null;Aw.AJ=null;return;}Aw=Aw.Ah;}},Fa:function(){var
Bf=A._NewObject(C.Filter,0);var Aw=this.B9;while(!!Aw){Bf.CX(Aw.Abt());Aw=Aw.Ah;
}return Bf;},_Init:function(aArg){this.__proto__=C.Filter;A.h7++;},_Done:function(
){this.__proto__=null;A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((
B=this.B9)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.B_)&&(B._cycle!=D))B._Mark(
B._cycle=D);if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:
null,_className:"Device::Filter"};C.FilterCriterion={Ah:null,AJ:null,EJ:-1,Operator:
1,YR:false,Abt:function(){return null;},Fa:function(AI){if(!AI)return;this.EJ=AI.
EJ;this.Operator=AI.Operator;this.YR=AI.YR;},_Init:function(aArg){this.__proto__=
C.FilterCriterion;A.h7++;},_Done:function(){this.__proto__=null;A.h7--;},_ReInit:
function(){},_Mark:function(D){var B;if((B=this.Ah)&&(B._cycle!=D))B._Mark(B._cycle=
D);if((B=this.AJ)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.I)&&(B._cycle!=D
))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:"Device::FilterCriterion"
};C.Int32FilterCriterion={A5:0,Abt:function(){var Aw=A._NewObject(C.Int32FilterCriterion
,0);Aw.Fa(this);return Aw;},Fa:function(AI){C.FilterCriterion.Fa.call(this,AI);var
Aw=(C.Int32FilterCriterion.isPrototypeOf(AI)?AI:null);if(!!Aw)this.A5=Aw.A5;},Initialize:
function(A4,Eb,A8,Qj){this.EJ=A4;this.Operator=Eb;this.A5=A8;this.YR=Qj;return this;
},_Init:function(aArg){C.FilterCriterion._Init.call(this,aArg);this.__proto__=C.
Int32FilterCriterion;},_className:"Device::Int32FilterCriterion"};C.DeviceClass={
AEE:0,AED:0,Av$:0,OZ:0,O0:null,SG:null,Q4:null,S6:null,R7:null,P8:null,Gg:null,An:
null,Bt:null,AgB:null,AnT:null,Pw:null,AuN:A.jV,AutoActions:A.jV,AB4:A.jV,AHd:A.
jV,AHe:A.jV,AhM:A.jV,AHz:A.jV,AHA:A.jV,AB5:A.jV,AHy:A.jV,AHD:A.jV,ABX:A.jV,ABY:A.
jV,ASt:A.jV,ASy:A.jV,AWm:A.jV,Abd:100,Lz:0,ANg:75,AcM:3600,AUw:0,A3:5,AF:0,K1:50000
,Ps:0,AGv:0,AdW:0,Arc:0,Arb:0,ASg:1,ASf:1,AjW:0,ASh:1,AxZ:0,Afw:0,Aq0:10,AVi:5,Av6:
60,Av4:0,An$:0,OT:1,WhereAbouts:0,Ak7:0,AxR:3,AC1:0,AgD:1,Ab3:0,Aqz:0,AOd:11,Breed:
0,EartagNrAssignmentMode:0,Avb:0,ACU:0,ACT:0,Io:5,ABW:2,AqB:0,AOR:2,AV9:0,D9:0,AMq:
0,Ko:0,Gender:2,WeightRecordingScope:1,WeightRecordingMode:1,AnimalType:0,MassUnit:
0,AutoRegistrationMode:0,RatingMode:0,SyncState:0,OverlayMenu:0,TemperatureUnit:
0,Language:0,MeasureState:0,ScanState:0,In:3,AUv:false,AM$:false,AeT:true,AR4:false
,Aql:true,Aq1:false,AmW:true,HH:false,AVL:false,AmX:false,AV7:false,As0:false,AEC:
false,AmJ:false,UpdateActiveScreen:function(AK){if(this.In===AK)return;this.In=AK;
A.abo([this,this.AEQ,this.Bbz],0);},Zv:function(E){if(this.K&&this.K.Zv)return this.
K.Zv.apply(this,arguments);else return C.DeviceClass.Bvc.apply(this,arguments);}
,Bvc:function(E){},Bbz:function(Aq){this.Zv(Aq);},UpdateBatteryChargeState:function(
AK){if(this.Abd===AK)return;this.Abd=AK;A.abo([this,this.Awf,this.AyY],0);},AwD:
function(E){if(this.K&&this.K.AwD)return this.K.AwD.apply(this,arguments);else return C.
DeviceClass.Bvn.apply(this,arguments);},Bvn:function(E){A.ab5("%s",BD);},AyY:function(
Aq){this.AwD(Aq);},UpdateChargeActive:function(AK){if(this.AmJ===AK)return;this.
AmJ=AK;A.abo([this,this.Awi,this.AyZ],0);},AFl:function(E){if(this.K&&this.K.AFl
)return this.K.AFl.apply(this,arguments);else return C.DeviceClass.Bvu.apply(this
,arguments);},Bvu:function(E){A.ab5("%s",E8);},AyZ:function(Aq){this.AFl(Aq);},UpdateScanState:
function(AK){var B;if(this.ScanState===AK)return;this.ScanState=AK;A.abo([this,this.
AS6,this.A0S],0);A._GetAutoObject(C.Helper).BBF(this);},Asa:function(E){if(this.
K&&this.K.Asa)return this.K.Asa.apply(this,arguments);else return C.DeviceClass.
Bv$.apply(this,arguments);},Bv$:function(E){A.ab5("%s",Hs);},A0S:function(Aq){this.
Asa(Aq);},UpdateMeasureState:function(AK){if(this.MeasureState===AK)return;this.
MeasureState=AK;A.abo([this,this.AEY,this.AI8],0);},Aw2:function(E){if(this.K&&this.
K.Aw2)return this.K.Aw2.apply(this,arguments);else return C.DeviceClass.BvS.apply(
this,arguments);},BvS:function(E){A.ab5("%s",I0);},AI8:function(Aq){this.Aw2(Aq);
},UpdateTempValue:function(AK){if(this.Lz===AK)return;this.Lz=AK;A.abo([this,this.
AE2,this.AI_],0);},Axe:function(E){if(this.K&&this.K.Axe)return this.K.Axe.apply(
this,arguments);else return C.DeviceClass.Bwf.apply(this,arguments);},Bwf:function(
E){A.ab5("%s",Iw);},AI_:function(Aq){this.Axe(Aq);},AnI:function(E){if(this.K&&this.
K.AnI)return this.K.AnI.apply(this,arguments);else return C.DeviceClass.BvM.apply(
this,arguments);},BvM:function(E){},BbP:function(Aq){this.AnI(Aq);},Axf:function(
E){if(this.K&&this.K.Axf)return this.K.Axf.apply(this,arguments);else return C.DeviceClass.
Bwg.apply(this,arguments);},Bwg:function(E){},Atv:function(Aq){this.Axf(Aq);},AFj:
function(E){if(this.K&&this.K.AFj)return this.K.AFj.apply(this,arguments);else return C.
DeviceClass.Bvt.apply(this,arguments);},Bvt:function(E){},BbH:function(Aq){this.
AFj(Aq);},AFR:function(E){if(this.K&&this.K.AFR)return this.K.AFR.apply(this,arguments
);else return C.DeviceClass.BvU.apply(this,arguments);},BvU:function(E){},A0M:function(
Aq){this.AFR(Aq);},UpdateMonitoring:function(AK){if(this.AEC===AK)return;this.AEC=
AK;A.abo([this,this.ASX,this.A0M],0);},UpdateDataTable:function(Bcs){var B;switch(
Bcs){case 0:A.pe([B=this.An,B.Akp],this);break;case 1:A.pe([B=this.Bt,B.Akp],this
);break;case 3:A.pe([B=this.AgB,B.Akp],this);break;case 4:A.pe([B=this.Pw,B.Akp]
,this);break;case 2:A.ab5("%s",O$);break;default:A.ab5("%s%e",Qc,Bcs);}},AxQ:function(
){if(this.K&&this.K.AxQ)return this.K.AxQ.apply(this,arguments);else return C.DeviceClass.
BwQ.apply(this,arguments);},BwQ:function(){},AhQ:function(){if(this.K&&this.K.AhQ
)return this.K.AhQ.apply(this,arguments);else return C.DeviceClass.BwT.apply(this
,arguments);},BwT:function(){},AhN:function(){if(this.K&&this.K.AhN)return this.
K.AhN.apply(this,arguments);else return C.DeviceClass.BwR.apply(this,arguments);
},BwR:function(){},An5:function(){if(this.K&&this.K.An5)return this.K.An5.apply(
this,arguments);else return C.DeviceClass.BwU.apply(this,arguments);},BwU:function(
){},UpdateLanguage:function(AK){if(this.Language===AK)return;this.Language=AK;switch(
AK){case 14:A._SetLanguage(1);break;case 13:A._SetLanguage(2);break;case 6:A._SetLanguage(
3);break;case 25:A._SetLanguage(25);break;case 11:A._SetLanguage(4);break;case 17:
A._SetLanguage(5);break;case 10:A._SetLanguage(6);break;case 12:A._SetLanguage(7
);break;case 5:A._SetLanguage(8);break;case 3:A._SetLanguage(9);break;case 1:A._SetLanguage(
10);break;case 8:A._SetLanguage(11);break;case 18:A._SetLanguage(12);break;case 4:
A._SetLanguage(13);break;case 19:A._SetLanguage(14);break;case 20:A._SetLanguage(
15);break;case 26:A._SetLanguage(26);break;case 15:A._SetLanguage(16);break;case
21:A._SetLanguage(17);break;case 22:A._SetLanguage(18);break;case 23:A._SetLanguage(
19);break;case 9:A._SetLanguage(20);break;case 27:A._SetLanguage(27);break;case 2:
A._SetLanguage(21);break;case 24:A._SetLanguage(22);break;case 7:A._SetLanguage(
23);break;case 16:A._SetLanguage(24);break;default:A._SetLanguage(0);}A.abo([this
,this.A9j,this.BbP],0);},UpdateTemperatureUnit:function(AK){if(this.TemperatureUnit===
AK)return;this.TemperatureUnit=AK;A.abo([this,this.ArJ,this.Atv],0);},UpdateBrightness:
function(AK){if(this.ANg===AK)return;this.ANg=AK;A.abo([this,this.A85,this.BbH],
0);},SetSystemTime:function(Aib){if(this.K&&this.K.SetSystemTime)return this.K.SetSystemTime.
apply(this,arguments);else return C.DeviceClass.BwO.apply(this,arguments);},BwO:
function(Aib){},AxJ:function(){if(this.K&&this.K.AxJ)return this.K.AxJ.apply(this
,arguments);else return C.DeviceClass.Bbn.apply(this,arguments);},Bbn:function(){
},AGI:function(){if(this.K&&this.K.AGI)return this.K.AGI.apply(this,arguments);else
return C.DeviceClass.Bbl.apply(this,arguments);},Bbl:function(){},Bpe:function(){
},UpdateOverlayMenu:function(AK){if(this.OverlayMenu===AK)return;this.OverlayMenu=
AK;A.abo([this,this.Awu,this.Ay6],0);},Dw:function(E){if(this.K&&this.K.Dw)return this.
K.Dw.apply(this,arguments);else return C.DeviceClass.Bv5.apply(this,arguments);}
,Bv5:function(E){},Ay6:function(Aq){this.Dw(Aq);},Axm:function(E){if(this.K&&this.
K.Axm)return this.K.Axm.apply(this,arguments);else return C.DeviceClass.Bwq.apply(
this,arguments);},Bwq:function(E){},Bb1:function(Aq){this.Axm(Aq);},UpdateUnderTemp:
function(AK){if(this.AcM===AK)return;this.AcM=AK;A.abo([this,this.A9O,this.Bb1],
0);},UpdateSyncState:function(AK){if(this.SyncState===AK)return;this.SyncState=AK;
A.abo([this,this.AS8,this.A0U],0);},Acf:function(E){if(this.K&&this.K.Acf)return this.
K.Acf.apply(this,arguments);else return C.DeviceClass.Bwe.apply(this,arguments);
},Bwe:function(E){A.ab5("%s",Qd);},A0U:function(Aq){this.Acf(Aq);},ADo:function(
){if(this.K&&this.K.ADo)return this.K.ADo.apply(this,arguments);else return C.DeviceClass.
Bu6.apply(this,arguments);},Bu6:function(){return A.jV;},UpdatePopup:function(Ka
,A1E,A1z,A1H){this.AZ(Ka,A1E,A1z,A1H,[this,this.BBl]);},PopupStateChanged:function(
Ka,Ae){if(this.K&&this.K.PopupStateChanged)return this.K.PopupStateChanged.apply(
this,arguments);else return C.DeviceClass.BwD.apply(this,arguments);},BwD:function(
Ka,Ae){},AGg:function(E){if(this.K&&this.K.AGg)return this.K.AGg.apply(this,arguments
);else return C.DeviceClass.Bws.apply(this,arguments);},Bws:function(E){},Bb2:function(
Aq){this.AGg(Aq);},UpdateVibrationOnKeypressEnabled:function(AK){if(this.As0===AK
)return;this.As0=AK;A.abo([this,this.A9P,this.Bb2],0);},Afd:function(E){if(this.
K&&this.K.Afd)return this.K.Afd.apply(this,arguments);else return C.DeviceClass.
Bwr.apply(this,arguments);},Bwr:function(E){},AI$:function(Aq){this.Afd(Aq);},UpdateVibrationOn:
function(BcV){if(this.AV7===BcV)return;this.AV7=BcV;A.abo([this,this.AE3,this.AI$
],0);},AZ:function(Ka,A1E,A1z,A1H,A1A){var Ags=A._NewObject(C.PopupContext,0);Ags.
Id=Ka;Ags.Show=A1E;Ags.AkK=A1z;Ags.Ak6=A1H;Ags.AGo=A1A;this.AnT.Trigger(Ags,false
);},BBl:function(G){var Ar=(C.PopupContext.isPrototypeOf(G)?G:null);if(!!Ar)this.
PopupStateChanged(Ar.Id,Ar.PopupState);},Axa:function(E){if(this.K&&this.K.Axa)return this.
K.Axa.apply(this,arguments);else return C.DeviceClass.Bv_.apply(this,arguments);
},Bv_:function(E){},A0R:function(Aq){this.Axa(Aq);},UpdateRatingMode:function(AK
){if(this.RatingMode===AK)return;this.RatingMode=AK;A.abo([this,this.AS5,this.A0R
],0);},Ae5:function(E){if(this.K&&this.K.Ae5)return this.K.Ae5.apply(this,arguments
);else return C.DeviceClass.BvE.apply(this,arguments);},BvE:function(E){},Atu:function(
Aq){this.Ae5(Aq);},UpdateFlashLightOn:function(BcB){if(this.AmX===BcB)return;this.
AmX=BcB;A.abo([this,this.ArG,this.Atu],0);},UB:function(E){if(this.K&&this.K.UB)
return this.K.UB.apply(this,arguments);else return C.DeviceClass.Bwj.apply(this,
arguments);},Bwj:function(E){},A0V:function(Aq){this.UB(Aq);},UpdateTopLightOn:function(
BcQ){if(this.AVL===BcQ)return;this.AVL=BcQ;A.abo([this,this.AS_,this.A0V],0);},WR:
function(E){if(this.K&&this.K.WR)return this.K.WR.apply(this,arguments);else return C.
DeviceClass.Bv9.apply(this,arguments);},Bv9:function(E){},Bw7:function(Aq){this.
WR(Aq);},UpdateRGBTopLight:function(BcL){if(this.AUw===BcL)return;this.AUw=BcL;A.
abo([this,this.BlV,this.Bw7],0);},AwB:function(E){if(this.K&&this.K.AwB)return this.
K.AwB.apply(this,arguments);else return C.DeviceClass.Bvm.apply(this,arguments);
},Bvm:function(E){},Bw0:function(Aq){this.AwB(Aq);},UpdateAutoRegistrationMode:function(
Bco){if(this.AutoRegistrationMode===Bco)return;this.AutoRegistrationMode=Bco;A.abo([
this,this.Blj,this.Bw0],0);},Asb:function(E){if(this.K&&this.K.Asb)return this.K.
Asb.apply(this,arguments);else return C.DeviceClass.Bwa.apply(this,arguments);},
Bwa:function(E){A.ab5("%s",CR);},A0T:function(Aq){this.Asb(Aq);},UpdateScanTransponder:
function(Ka,BcS,BcR){if(((this.O0.Id===Ka)&&(this.O0.TransponderType===BcS))&&(this.
O0.TransponderProtocol===BcR))return;this.O0.OnSetId(Ka);this.O0.AT_(BcS);this.O0.
AT9(BcR);A.abo([this,this.AS7,this.A0T],0);},OU:function(E){if(this.K&&this.K.OU
)return this.K.OU.apply(this,arguments);else return C.DeviceClass.Bvw.apply(this
,arguments);},Bvw:function(E){},U$:function(Aq){this.OU(Aq);},UpdateDigitsID:function(
Bcw){if(this.A3===Bcw)return;this.A3=Bcw;A.abo([this,this.Us,this.U$],0);},PZ:function(
E){if(this.K&&this.K.PZ)return this.K.PZ.apply(this,arguments);else return C.DeviceClass.
Bv4.apply(this,arguments);},Bv4:function(E){},Va:function(Aq){this.PZ(Aq);},UpdateOffsetID:
function(BcH){if(this.AF===BcH)return;this.AF=BcH;A.abo([this,this.Ut,this.Va],0
);},AGk:function(E){if(this.K&&this.K.AGk)return this.K.AGk.apply(this,arguments
);else return C.DeviceClass.Bwz.apply(this,arguments);},Bwz:function(E){A.ab5("%s"
,Ff);},AJa:function(Aq){this.AGk(Aq);},UpdateWeightValue:function(AK){if(this.K1===
AK)return;this.K1=AK;A.abo([this,this.AE4,this.AJa],0);},AwZ:function(E){if(this.
K&&this.K.AwZ)return this.K.AwZ.apply(this,arguments);else return C.DeviceClass.
BvP.apply(this,arguments);},BvP:function(E){},A0L:function(Aq){this.AwZ(Aq);},UpdateMassUnit:
function(AK){if(this.MassUnit===AK)return;this.MassUnit=AK;A.abo([this,this.ASW,
this.A0L],0);},ArN:function(E){if(this.K&&this.K.ArN)return this.K.ArN.apply(this
,arguments);else return C.DeviceClass.Bbh.apply(this,arguments);},Bbh:function(E
){},Bbw:function(Aq){this.ArN(Aq);},ArO:function(E){if(this.K&&this.K.ArO)return this.
K.ArO.apply(this,arguments);else return C.DeviceClass.Bbi.apply(this,arguments);
},Bbi:function(E){},A0G:function(Aq){this.ArO(Aq);},UpdateActiveActions:function(
AK){if(this.Ps===AK)return;this.Ps=AK;A.abo([this,this.A8P,this.Bbw],0);},UpdateActiveActionsOrder:
function(AK){if(this.AuN===AK)return;this.AuN=AK;A.abo([this,this.ASJ,this.A0G],
0);},Akw:function(E){if(this.K&&this.K.Akw)return this.K.Akw.apply(this,arguments
);else return C.DeviceClass.Bbj.apply(this,arguments);},Bbj:function(E){},BbE:function(
Aq){this.Akw(Aq);},UpdateAutoActions:function(AK){if(this.AutoActions===AK)return;
this.AutoActions=AK;A.abo([this,this.A80,this.BbE],0);},AG8:function(){if(this.K&&
this.K.AG8)return this.K.AG8.apply(this,arguments);else return C.DeviceClass.BwS.
apply(this,arguments);},BwS:function(){},AsQ:function(){if(this.K&&this.K.AsQ)return this.
K.AsQ.apply(this,arguments);else return C.DeviceClass.BwW.apply(this,arguments);
},BwW:function(){},EC:function(E){if(this.K&&this.K.EC)return this.K.EC.apply(this
,arguments);else return C.DeviceClass.Bvj.apply(this,arguments);},Bvj:function(E
){},BwZ:function(Aq){this.EC(Aq);},UpdateAnimalType:function(Eo){if(this.AnimalType===
Eo)return;this.AnimalType=Eo;A.abo([this,this.PY,this.BwZ],0);},Axn:function(E){
if(this.K&&this.K.Axn)return this.K.Axn.apply(this,arguments);else return C.DeviceClass.
Bwx.apply(this,arguments);},Bwx:function(E){},Bb7:function(Aq){this.Axn(Aq);},UpdateWeightRecordingMode:
function(BcX){if(this.WeightRecordingMode===BcX)return;this.WeightRecordingMode=
BcX;A.abo([this,this.A9X,this.Bb7],0);},AFW:function(E){if(this.K&&this.K.AFW)return this.
K.AFW.apply(this,arguments);else return C.DeviceClass.Bv6.apply(this,arguments);
},Bv6:function(E){A.ab5("%s",L9);},A0P:function(Aq){this.AFW(Aq);},UpdatePredictedTempValue:
function(AK){if(this.AGv===AK)return;this.AGv=AK;A.abo([this,this.AS2,this.A0P],
0);},SX:function(Md){if(this.K&&this.K.SX)return this.K.SX.apply(this,arguments);
else return C.DeviceClass.BwN.apply(this,arguments);},BwN:function(Md){},AFq:function(
E){if(this.K&&this.K.AFq)return this.K.AFq.apply(this,arguments);else return C.DeviceClass.
Bvv.apply(this,arguments);},Bvv:function(E){},AI5:function(Aq){this.AFq(Aq);},UpdateDemoMode:
function(AK){if(this.HH===AK)return;this.HH=AK;A.abo([this,this.AEV,this.AI5],0);
},AE_:function(E){if(this.K&&this.K.AE_)return this.K.AE_.apply(this,arguments);
else return C.DeviceClass.Bvd.apply(this,arguments);},Bvd:function(E){},BbA:function(
Aq){this.AE_(Aq);},UpdateAgeRegistration:function(BcG){if(this.AdW===BcG)return;
this.AdW=BcG;A.abo([this,this.A8U,this.BbA],0);},Axo:function(E){if(this.K&&this.
K.Axo)return this.K.Axo.apply(this,arguments);else return C.DeviceClass.Bwy.apply(
this,arguments);},Bwy:function(E){},Bb8:function(Aq){this.Axo(Aq);},UpdateWeightRecordingScope:
function(BcM){if(this.WeightRecordingScope===BcM)return;this.WeightRecordingScope=
BcM;A.abo([this,this.A9Y,this.Bb8],0);},J0:function(E){if(this.K&&this.K.J0)return this.
K.J0.apply(this,arguments);else return C.DeviceClass.BvI.apply(this,arguments);}
,BvI:function(E){},A0K:function(Aq){this.J0(Aq);},UpdateGender:function(Ma){if(this.
Gender===Ma)return;this.Gender=Ma;A.abo([this,this.WK,this.A0K],0);},Ar2:function(
E){if(this.K&&this.K.Ar2)return this.K.Ar2.apply(this,arguments);else return C.DeviceClass.
BvK.apply(this,arguments);},BvK:function(E){},Ay2:function(Aq){this.Ar2(Aq);},UpdateIDLastUsedMale:
function(Ru){if(this.Arc===Ru)return;this.Arc=Ru;A.abo([this,this.Awn,this.Ay2],
0);},Ar1:function(E){if(this.K&&this.K.Ar1)return this.K.Ar1.apply(this,arguments
);else return C.DeviceClass.BvJ.apply(this,arguments);},BvJ:function(E){},Ay1:function(
Aq){this.Ar1(Aq);},UpdateIDLastUsedFemale:function(Ru){if(this.Arb===Ru)return;this.
Arb=Ru;A.abo([this,this.Awm,this.Ay1],0);},Zw:function(E){if(this.K&&this.K.Zw)return this.
K.Zw.apply(this,arguments);else return C.DeviceClass.Bvi.apply(this,arguments);}
,Bvi:function(E){},AI3:function(Aq){this.Zw(Aq);},UpdateAnimalListContent:function(
AK){if(this.Ko===AK)return;this.Ko=AK;A.abo([this,this.AES,this.AI3],0);},AFa:function(
E){if(this.K&&this.K.AFa)return this.K.AFa.apply(this,arguments);else return C.DeviceClass.
Bve.apply(this,arguments);},Bve:function(E){},BbB:function(Aq){this.AFa(Aq);},UpdateAlarmListAction:
function(AK){if(this.AMq===AK)return;this.AMq=AK;A.abo([this,this.A8W,this.BbB],
0);},AFt:function(E){if(this.K&&this.K.AFt)return this.K.AFt.apply(this,arguments
);else return C.DeviceClass.BvD.apply(this,arguments);},BvD:function(E){},BbK:function(
Aq){this.AFt(Aq);},UpdateFlashLightInMeasureState:function(BcC){if(this.AmW===BcC
)return;this.AmW=BcC;A.abo([this,this.A89,this.BbK],0);},Ae0:function(E){if(this.
K&&this.K.Ae0)return this.K.Ae0.apply(this,arguments);else return C.DeviceClass.
Bvh.apply(this,arguments);},Bvh:function(E){},AI2:function(Aq){this.Ae0(Aq);},UpdateAnimalInfoContent:
function(AK){if(this.D9===AK)return;this.D9=AK;A.abo([this,this.AER,this.AI2],0);
},AGj:function(E){if(this.K&&this.K.AGj)return this.K.AGj.apply(this,arguments);
else return C.DeviceClass.Bwt.apply(this,arguments);},Bwt:function(E){},Bb3:function(
Aq){this.AGj(Aq);},UpdateWatchListAction:function(AK){if(this.AV9===AK)return;this.
AV9=AK;A.abo([this,this.A9T,this.Bb3],0);},AFv:function(E){if(this.K&&this.K.AFv
)return this.K.AFv.apply(this,arguments);else return C.DeviceClass.BvF.apply(this
,arguments);},BvF:function(E){},BbM:function(Aq){this.AFv(Aq);},UpdateFreshCowListAction:
function(AK){if(this.AOR===AK)return;this.AOR=AK;A.abo([this,this.A8$,this.BbM],
0);},ResetActiveActions:function(G){if(this.K&&this.K.ResetActiveActions)return this.
K.ResetActiveActions.apply(this,arguments);else return C.DeviceClass.BwF.apply(this
,arguments);},BwF:function(G){},BG3:function(s){this.ResetActiveActions(s);},ResetAutoActions:
function(G){if(this.K&&this.K.ResetAutoActions)return this.K.ResetAutoActions.apply(
this,arguments);else return C.DeviceClass.BwH.apply(this,arguments);},BwH:function(
G){},BG5:function(s){this.ResetAutoActions(s);},Awz:function(E){if(this.K&&this.
K.Awz)return this.K.Awz.apply(this,arguments);else return C.DeviceClass.Bvk.apply(
this,arguments);},Bvk:function(E){},BbC:function(Aq){this.Awz(Aq);},Ase:function(
E){if(this.K&&this.K.Ase)return this.K.Ase.apply(this,arguments);else return C.DeviceClass.
Bwh.apply(this,arguments);},Bwh:function(E){},BbY:function(Aq){this.Ase(Aq);},Asf:
function(E){if(this.K&&this.K.Asf)return this.K.Asf.apply(this,arguments);else return C.
DeviceClass.Bwi.apply(this,arguments);},Bwi:function(E){},BbZ:function(Aq){this.
Asf(Aq);},AsB:function(G){if(this.K&&this.K.AsB)return this.K.AsB.apply(this,arguments
);else return C.DeviceClass.BwK.apply(this,arguments);},BwK:function(G){},BG8:function(
s){this.AsB(s);},UpdateTemperaturesLowString:function(AK){if(this.AHe===AK)return;
this.AHe=AK;A.abo([this,this.A9K,this.BbZ],0);},UpdateTemperaturesHighString:function(
AK){if(this.AHd===AK)return;this.AHd=AK;A.abo([this,this.A9J,this.BbY],0);},UpdateAnimalTypesString:
function(AK){if(this.AB4===AK)return;this.AB4=AK;A.abo([this,this.A8Y,this.BbC],
0);},AwT:function(E){if(this.K&&this.K.AwT)return this.K.AwT.apply(this,arguments
);else return C.DeviceClass.BvH.apply(this,arguments);},BvH:function(E){},BbO:function(
Aq){this.AwT(Aq);},UpdateFreshCowsHideMeasured:function(AK){if(this.Aq1===AK)return;
this.Aq1=AK;A.abo([this,this.A9b,this.BbO],0);},Ar8:function(E){if(this.K&&this.
K.Ar8)return this.K.Ar8.apply(this,arguments);else return C.DeviceClass.Bv0.apply(
this,arguments);},Bv0:function(E){},BbT:function(Aq){this.Ar8(Aq);},UpdateNaisIdLastUsedMale:
function(Qk){if(this.AEE===Qk)return;this.AEE=Qk;A.abo([this,this.A9r,this.BbT],
0);},Ar7:function(E){if(this.K&&this.K.Ar7)return this.K.Ar7.apply(this,arguments
);else return C.DeviceClass.BvZ.apply(this,arguments);},BvZ:function(E){},BbS:function(
Aq){this.Ar7(Aq);},UpdateNaisIdLastUsedFemale:function(Qk){if(this.AED===Qk)return;
this.AED=Qk;A.abo([this,this.A9q,this.BbS],0);},Aw6:function(E){if(this.K&&this.
K.Aw6)return this.K.Aw6.apply(this,arguments);else return C.DeviceClass.BvX.apply(
this,arguments);},BvX:function(E){},Ay4:function(Aq){this.Aw6(Aq);},UpdateNaisIdIncrementMale:
function(Alx){if(this.ASg===Alx)return;this.ASg=Alx;A.abo([this,this.Awr,this.Ay4
],0);},Aw5:function(E){if(this.K&&this.K.Aw5)return this.K.Aw5.apply(this,arguments
);else return C.DeviceClass.BvW.apply(this,arguments);},BvW:function(E){},Ay3:function(
Aq){this.Aw5(Aq);},UpdateNaisIdIncrementFemale:function(Alx){if(this.ASf===Alx)return;
this.ASf=Alx;A.abo([this,this.Awq,this.Ay3],0);},UpdateFirmware:function(){if(this.
K&&this.K.UpdateFirmware)return this.K.UpdateFirmware.apply(this,arguments);else
return C.DeviceClass.Bbo.apply(this,arguments);},Bbo:function(){},AnC:function(E
){if(this.K&&this.K.AnC)return this.K.AnC.apply(this,arguments);else return C.DeviceClass.
Bvq.apply(this,arguments);},Bvq:function(E){},BbG:function(Aq){this.AnC(Aq);},UpdateBootloaderMessage:
function(AK){if(this.AqB===AK)return;this.AqB=AK;A.abo([this,this.A84,this.BbG],
0);},AE7:function(E){if(this.K&&this.K.AE7)return this.K.AE7.apply(this,arguments
);else return C.DeviceClass.Bu_.apply(this,arguments);},Bu_:function(E){},Bbu:function(
Aq){this.AE7(Aq);},UpdateActionListAction:function(AK){if(this.ABW===AK)return;this.
ABW=AK;A.abo([this,this.A8N,this.Bbu],0);},Awx:function(E){if(this.K&&this.K.Awx
)return this.K.Awx.apply(this,arguments);else return C.DeviceClass.Bu$.apply(this
,arguments);},Bu$:function(E){},Bbv:function(Aq){this.Awx(Aq);},UpdateActionListHideMeasured:
function(AK){if(this.Aql===AK)return;this.Aql=AK;A.abo([this,this.A8O,this.Bbv],
0);},Uv:function(E){if(this.K&&this.K.Uv)return this.K.Uv.apply(this,arguments);
else return C.DeviceClass.Bvg.apply(this,arguments);},Bvg:function(E){},AoE:function(
Aq){this.Uv(Aq);},UpdateAnimalIdGenerationMethod:function(Bc2){if(this.Io===Bc2)
return;this.Io=Bc2;A.abo([this,this.Anv,this.AoE],0);},AwL:function(E){if(this.K&&
this.K.AwL)return this.K.AwL.apply(this,arguments);else return C.DeviceClass.Bvx.
apply(this,arguments);},Bvx:function(E){},A0I:function(Aq){this.AwL(Aq);},UpdateDirectionOfCountingFemale:
function(Alr){if(this.ACT===Alr)return;this.ACT=Alr;A.abo([this,this.ASP,this.A0I
],0);},AwM:function(E){if(this.K&&this.K.AwM)return this.K.AwM.apply(this,arguments
);else return C.DeviceClass.Bvy.apply(this,arguments);},Bvy:function(E){},A0J:function(
Aq){this.AwM(Aq);},UpdateDirectionOfCountingMale:function(Alr){if(this.ACU===Alr
)return;this.ACU=Alr;A.abo([this,this.ASQ,this.A0J],0);},AwN:function(E){if(this.
K&&this.K.AwN)return this.K.AwN.apply(this,arguments);else return C.DeviceClass.
Bvz.apply(this,arguments);},Bvz:function(E){},AI6:function(Aq){this.AwN(Aq);},UpdateDirectionOfCountingUnisex:
function(Alr){if(this.Avb===Alr)return;this.Avb=Alr;A.abo([this,this.AEW,this.AI6
],0);},Ar3:function(E){if(this.K&&this.K.Ar3)return this.K.Ar3.apply(this,arguments
);else return C.DeviceClass.BvL.apply(this,arguments);},BvL:function(E){},AoF:function(
Aq){this.Ar3(Aq);},UpdateIDLastUsedUnisex:function(Ru){if(this.AjW===Ru)return;this.
AjW=Ru;A.abo([this,this.Any,this.AoF],0);},Ar9:function(E){if(this.K&&this.K.Ar9
)return this.K.Ar9.apply(this,arguments);else return C.DeviceClass.Bv1.apply(this
,arguments);},Bv1:function(E){},A0N:function(Aq){this.Ar9(Aq);},UpdateNaisIdLastUsedUnisex:
function(Qk){if(this.Av$===Qk)return;this.Av$=Qk;A.abo([this,this.ASY,this.A0N],
0);},Aw7:function(E){if(this.K&&this.K.Aw7)return this.K.Aw7.apply(this,arguments
);else return C.DeviceClass.BvY.apply(this,arguments);},BvY:function(E){},Ay5:function(
Aq){this.Aw7(Aq);},UpdateNaisIdIncrementUnisex:function(Alx){if(this.ASh===Alx)return;
this.ASh=Alx;A.abo([this,this.Aws,this.Ay5],0);},Aky:function(E){if(this.K&&this.
K.Aky)return this.K.Aky.apply(this,arguments);else return C.DeviceClass.BvB.apply(
this,arguments);},BvB:function(E){},Ay0:function(Aq){this.Aky(Aq);},UpdateEartagNrAssignmentMode:
function(Als){if(this.EartagNrAssignmentMode===Als)return;this.EartagNrAssignmentMode=
Als;A.abo([this,this.Awl,this.Ay0],0);},N7:function(E){if(this.K&&this.K.N7)return this.
K.N7.apply(this,arguments);else return C.DeviceClass.Bvs.apply(this,arguments);}
,Bvs:function(E){},Bw2:function(Aq){this.N7(Aq);},UpdateBreed:function(Ac3){if(this.
Breed===Ac3)return;this.Breed=Ac3;A.abo([this,this.Awh,this.Bw2],0);},AFP:function(
E){if(this.K&&this.K.AFP)return this.K.AFP.apply(this,arguments);else return C.DeviceClass.
BvT.apply(this,arguments);},BvT:function(E){},Bw5:function(Aq){this.AFP(Aq);},UpdateMiddlewareVersions:
function(Qm,A1v,A1w,A1D,A1k){this.SG.OnSetTimestamp(Qm);this.SG.AFK(A1v);this.SG.
AFQ(A1w);this.SG.AF0(A1D);this.SG.AFp(A1k);A.abo([this,this.BlP,this.Bw5],0);},AFJ:
function(E){if(this.K&&this.K.AFJ)return this.K.AFJ.apply(this,arguments);else return C.
DeviceClass.BvN.apply(this,arguments);},BvN:function(E){},Bw4:function(Aq){this.
AFJ(Aq);},UpdateMainboardVersions:function(Qm,A1t,A1u,A1s,A1J,A1K,A1I){this.Q4.OnSetTimestamp(
Qm);this.Q4.AFH(A1t);this.Q4.AFI(A1u);this.Q4.AFG(A1s);this.Q4.AGc(A1J);this.Q4.
AGd(A1K);this.Q4.AGb(A1I);A.abo([this,this.BlN,this.Bw4],0);},AGe:function(E){if(
this.K&&this.K.AGe)return this.K.AGe.apply(this,arguments);else return C.DeviceClass.
Bwk.apply(this,arguments);},Bwk:function(E){},Bw$:function(Aq){this.AGe(Aq);},UpdateTorchboardVersions:
function(Qm,A1t,A1u,A1s,A1J,A1K,A1I){this.S6.OnSetTimestamp(Qm);this.S6.AFH(A1t);
this.S6.AFI(A1u);this.S6.AFG(A1s);this.S6.AGc(A1J);this.S6.AGd(A1K);this.S6.AGb(
A1I);A.abo([this,this.Bmb,this.Bw$],0);},AFf:function(E){if(this.K&&this.K.AFf)return this.
K.AFf.apply(this,arguments);else return C.DeviceClass.Bvr.apply(this,arguments);
},Bvr:function(E){},Bw1:function(Aq){this.AFf(Aq);},UpdateBootloaderVersions:function(
Qm,A1v,A1w,A1D,A1k){this.R7.OnSetTimestamp(Qm);this.R7.AFK(A1v);this.R7.AFQ(A1w);
this.R7.AF0(A1D);this.R7.AFp(A1k);A.abo([this,this.Blm,this.Bw1],0);},AFr:function(
E){if(this.K&&this.K.AFr)return this.K.AFr.apply(this,arguments);else return C.DeviceClass.
BvA.apply(this,arguments);},BvA:function(E){},BbJ:function(Aq){this.AFr(Aq);},UpdateDryCowListAction:
function(AK){if(this.AOd===AK)return;this.AOd=AK;A.abo([this,this.A87,this.BbJ],
0);},AJW:function(A1l){if(this.K&&this.K.AJW)return this.K.AJW.apply(this,arguments
);else return C.DeviceClass.Bxm.apply(this,arguments);},Bxm:function(A1l){return false;
},AFd:function(E){if(this.K&&this.K.AFd)return this.K.AFd.apply(this,arguments);
else return C.DeviceClass.Bvo.apply(this,arguments);},Bvo:function(E){},AI4:function(
Aq){this.AFd(Aq);},UpdateBirthListView:function(AK){if(this.Aqz===AK)return;this.
Aqz=AK;A.abo([this,this.AET,this.AI4],0);},BatchResetBirthNoticePending:function(
){var O;var Ai0=0;var Adm=A._GetAutoObject(C.Device).An.Filter;var Bf=A._GetAutoObject(
C.Helper).AOV();A._GetAutoObject(C.Device).An.Bk(Bf);for(O=0;O<A._GetAutoObject(
C.Device).An.B8();O++){A._GetAutoObject(C.Helper).GT(O);A._GetAutoObject(C.Helper
).W.Ae9(false);A._GetAutoObject(C.Helper).W.Ci(A._GetAutoObject(C.Device).An);Ai0++;
}A._GetAutoObject(C.Device).An.Bk(Adm);return Ai0;},UpdateTransferProgress:function(
AK){if(this.AxZ===AK)return;this.AxZ=AK;A.abo([this,this.AS$,this.A0W],0);},AGf:
function(E){if(this.K&&this.K.AGf)return this.K.AGf.apply(this,arguments);else return C.
DeviceClass.Bwl.apply(this,arguments);},Bwl:function(E){A.ab5("%s",Qe);},A0W:function(
Aq){this.AGf(Aq);},UpdateTransferTarget:function(AK){if(this.Afw===AK)return;this.
Afw=AK;A.abo([this,this.A9N,this.Bb0],0);},Asg:function(E){if(this.K&&this.K.Asg
)return this.K.Asg.apply(this,arguments);else return C.DeviceClass.Bwm.apply(this
,arguments);},Bwm:function(E){A.ab5("%s",J9);},Bb0:function(Aq){this.Asg(Aq);},AsP:
function(){if(this.K&&this.K.AsP)return this.K.AsP.apply(this,arguments);else return C.
DeviceClass.BwV.apply(this,arguments);},BwV:function(){},Aw$:function(E){if(this.
K&&this.K.Aw$)return this.K.Aw$.apply(this,arguments);else return C.DeviceClass.
Bv7.apply(this,arguments);},Bv7:function(E){},A0Q:function(Aq){this.Aw$(Aq);},UpdatePremisesID:
function(Ru){if(this.OZ===Ru)return;this.OZ=Ru;A.abo([this,this.AS3,this.A0Q],0);
},Aw4:function(E){if(this.K&&this.K.Aw4)return this.K.Aw4.apply(this,arguments);
else return C.DeviceClass.BvV.apply(this,arguments);},BvV:function(E){},AI9:function(
Aq){this.Aw4(Aq);},UpdateMotherSelectionDriedOffFilter:function(AK){if(this.Ab3===
AK)return;this.Ab3=AK;A.abo([this,this.AE0,this.AI9],0);},AFw:function(E){if(this.
K&&this.K.AFw)return this.K.AFw.apply(this,arguments);else return C.DeviceClass.
BvG.apply(this,arguments);},BvG:function(E){},BbN:function(Aq){this.AFw(Aq);},UpdateFreshCowSpan:
function(AK){if(this.Aq0===AK)return;this.Aq0=AK;A.abo([this,this.A9a,this.BbN],
0);},UpdateUSBDevice:function(BcT,BcU,BcK){if(((this.P8.Z8===BcT)&&(this.P8.AsZ===
BcU))&&(this.P8.Ass===BcK))return;this.P8.AT$(BcT);this.P8.AUb(BcU);this.P8.ATN(
BcK);A.abo([this,this.Uu,this.Vc],0);},Axl:function(E){if(this.K&&this.K.Axl)return this.
K.Axl.apply(this,arguments);else return C.DeviceClass.Bwp.apply(this,arguments);
},Bwp:function(E){A.ab5("%s",E8);},Vc:function(Aq){this.Axl(Aq);},AxP:function(){
if(this.K&&this.K.AxP)return this.K.AxP.apply(this,arguments);else return C.DeviceClass.
BwP.apply(this,arguments);},BwP:function(){},Arq:function(){if(this.K&&this.K.Arq
)return this.K.Arq.apply(this,arguments);else return C.DeviceClass.Bu9.apply(this
,arguments);},Bu9:function(){return false;},AqL:function(){if(this.K&&this.K.AqL
)return this.K.AqL.apply(this,arguments);else return C.DeviceClass.Bu4.apply(this
,arguments);},Bu4:function(){},AF3:function(E){if(this.K&&this.K.AF3)return this.
K.AF3.apply(this,arguments);else return C.DeviceClass.Bwb.apply(this,arguments);
},Bwb:function(E){},Bw8:function(Aq){this.AF3(Aq);},UpdateSerialNumber:function(
AK){if(this.AhM===AK)return;this.AhM=AK;A.abo([this,this.Bl2,this.Bw8],0);},Awy:
function(E){if(this.K&&this.K.Awy)return this.K.Awy.apply(this,arguments);else return C.
DeviceClass.Bvf.apply(this,arguments);},Bvf:function(E){},A0H:function(Aq){this.
Awy(Aq);},UpdateAnimalIdAutoGenerationMethod:function(Bc1){if(this.AgD===Bc1)return;
this.AgD=Bc1;A.abo([this,this.ASK,this.A0H],0);},ACH:function(){return false;},AGJ:
function(){return false;},AF5:function(E){if(this.K&&this.K.AF5)return this.K.AF5.
apply(this,arguments);else return C.DeviceClass.Bwc.apply(this,arguments);},Bwc:
function(E){},BbX:function(Aq){this.AF5(Aq);},UpdateShutdownTimer:function(AK){if(
this.AVi===AK)return;this.AVi=AK;A.abo([this,this.A9G,this.BbX],0);},AsC:function(
G){if(this.K&&this.K.AsC)return this.K.AsC.apply(this,arguments);else return C.DeviceClass.
BwL.apply(this,arguments);},BwL:function(G){},BG9:function(s){this.AsC(s);},Asj:
function(E){if(this.K&&this.K.Asj)return this.K.Asj.apply(this,arguments);else return C.
DeviceClass.Bwv.apply(this,arguments);},Bwv:function(E){},Bb5:function(Aq){this.
Asj(Aq);},Ask:function(E){if(this.K&&this.K.Ask)return this.K.Ask.apply(this,arguments
);else return C.DeviceClass.Bww.apply(this,arguments);},Bww:function(E){},Bb6:function(
Aq){this.Ask(Aq);},UpdateWeightGainsLowString:function(AK){if(this.AHA===AK)return;
this.AHA=AK;A.abo([this,this.A9W,this.Bb6],0);},UpdateWeightGainsHighString:function(
AK){if(this.AHz===AK)return;this.AHz=AK;A.abo([this,this.A9V,this.Bb5],0);},AwA:
function(E){if(this.K&&this.K.AwA)return this.K.AwA.apply(this,arguments);else return C.
DeviceClass.Bvl.apply(this,arguments);},Bvl:function(E){},BbD:function(Aq){this.
AwA(Aq);},UpdateAnimalTypesWeightGainsString:function(AK){if(this.AB5===AK)return;
this.AB5=AK;A.abo([this,this.A8Z,this.BbD],0);},Asi:function(E){if(this.K&&this.
K.Asi)return this.K.Asi.apply(this,arguments);else return C.DeviceClass.Bwu.apply(
this,arguments);},Bwu:function(E){},Bb4:function(Aq){this.Asi(Aq);},Asl:function(
E){if(this.K&&this.K.Asl)return this.K.Asl.apply(this,arguments);else return C.DeviceClass.
BwA.apply(this,arguments);},BwA:function(E){},Bb9:function(Aq){this.Asl(Aq);},UpdateWeightValueBirthString:
function(AK){if(this.AHD===AK)return;this.AHD=AK;A.abo([this,this.A9Z,this.Bb9],
0);},UpdateWeightGainsAverageString:function(AK){if(this.AHy===AK)return;this.AHy=
AK;A.abo([this,this.A9U,this.Bb4],0);},AwO:function(E){if(this.K&&this.K.AwO)return this.
K.AwO.apply(this,arguments);else return C.DeviceClass.BvC.apply(this,arguments);
},BvC:function(E){},Bw3:function(Aq){this.AwO(Aq);},UpdateEvaluationAnimalType:function(
Eo){if(this.AC1===Eo)return;this.AC1=Eo;A.abo([this,this.Blw,this.Bw3],0);},UpdateStartScreen:
function(AK){if(this.AxR===AK)return;this.AxR=AK;A.abo([this,this.Bl3,this.Bw9],
0);},Axd:function(E){if(this.K&&this.K.Axd)return this.K.Axd.apply(this,arguments
);else return C.DeviceClass.Bwd.apply(this,arguments);},Bwd:function(E){},Bw9:function(
Aq){this.Axd(Aq);},AEf:function(){if(this.K&&this.K.AEf)return this.K.AEf.apply(
this,arguments);else return C.DeviceClass.Bu7.apply(this,arguments);},Bu7:function(
){return 1;},AEg:function(){if(this.K&&this.K.AEg)return this.K.AEg.apply(this,arguments
);else return C.DeviceClass.Bu8.apply(this,arguments);},Bu8:function(){return 1;
},GetCommitCount:function(){return 2218;},GetCommitEpoch:function(){return 1747383260;
},GetCommitHash:function(){return A.kR.Bil;},GetVersionMajor:function(){return 0;
},GetVersionMinor:function(){return 9;},GetVersionRev:function(){return 13;},AFO:
function(E){if(this.K&&this.K.AFO)return this.K.AFO.apply(this,arguments);else return C.
DeviceClass.BvR.apply(this,arguments);},BvR:function(E){},BbR:function(Aq){this.
AFO(Aq);},UpdateMaximumAgeNewOnFarm:function(AK){if(this.Av6===AK)return;this.Av6=
AK;A.abo([this,this.A9p,this.BbR],0);},Axj:function(E){if(this.K&&this.K.Axj)return this.
K.Axj.apply(this,arguments);else return C.DeviceClass.Bwn.apply(this,arguments);
},Bwn:function(E){},A0X:function(Aq){this.Axj(Aq);},UpdateTransponderAssignmentIdChangeMethod:
function(Azi){if(this.Ak7===Azi)return;this.Ak7=Azi;A.abo([this,this.ATa,this.A0X
],0);},BatchResetPurchasedNoticePending:function(){var O;var Ai0=0;var Adm=A._GetAutoObject(
C.Device).An.Filter;var Bf=A._GetAutoObject(C.Helper).AvB();A._GetAutoObject(C.Device
).An.Bk(Bf);for(O=0;O<A._GetAutoObject(C.Device).An.B8();O++){A._GetAutoObject(C.
Helper).GT(O);A._GetAutoObject(C.Helper).W.Ae9(false);A._GetAutoObject(C.Helper).
W.Ci(A._GetAutoObject(C.Device).An);Ai0++;}A._GetAutoObject(C.Device).An.Bk(Adm);
return Ai0;},BnQ:function(E){},UpdateMassRecordingAutomatic:function(AK){if(this.
AR4===AK)return;this.AR4=AK;A.abo([this,this.BlO,this.BnQ],0);},Nt:function(E){if(
this.K&&this.K.Nt)return this.K.Nt.apply(this,arguments);else return C.DeviceClass.
BwB.apply(this,arguments);},BwB:function(E){},Bxa:function(Aq){this.Nt(Aq);},UpdateWhereAbouts:
function(AfS){if(this.WhereAbouts===AfS)return;this.WhereAbouts=AfS;A.abo([this,
this.Awv,this.Bxa],0);},ArQ:function(E){if(this.K&&this.K.ArQ)return this.K.ArQ.
apply(this,arguments);else return C.DeviceClass.Bva.apply(this,arguments);},Bva:
function(E){},Bbx:function(Aq){this.ArQ(Aq);},ArR:function(E){if(this.K&&this.K.
ArR)return this.K.ArR.apply(this,arguments);else return C.DeviceClass.Bvb.apply(
this,arguments);},Bvb:function(E){},Bby:function(Aq){this.ArR(Aq);},UpdateActiveMassRecordingFields:
function(AK){if(this.ABX===AK)return;this.ABX=AK;A.abo([this,this.A8Q,this.Bbx],
0);},UpdateActiveMassRecordingFieldsOrder:function(AK){if(this.ABY===AK)return;this.
ABY=AK;A.abo([this,this.A8R,this.Bby],0);},Asz:function(G){if(this.K&&this.K.Asz
)return this.K.Asz.apply(this,arguments);else return C.DeviceClass.BwG.apply(this
,arguments);},BwG:function(G){},BG4:function(s){this.Asz(s);},AFM:function(E){if(
this.K&&this.K.AFM)return this.K.AFM.apply(this,arguments);else return C.DeviceClass.
BvO.apply(this,arguments);},BvO:function(E){},AI7:function(Aq){this.AFM(Aq);},UpdateMassRecordingDateOfBirthMandatory:
function(AK){if(this.AeT===AK)return;this.AeT=AK;A.abo([this,this.AEX,this.AI7],
0);},AFL:function(E){this.UpdateMassRecordingCounter(E);},UpdateMassRecordingCounter:
function(AK){if(this.Av4===AK)return;this.Av4=AK;A.abo([this,this.A9n,this.AFL],
0);},X9:function(){if(this.K&&this.K.X9)return this.K.X9.apply(this,arguments);else
return C.DeviceClass.Bu2.apply(this,arguments);},Bu2:function(){return false;},Aqw:
function(){if(this.K&&this.K.Aqw)return this.K.Aqw.apply(this,arguments);else return C.
DeviceClass.Bu1.apply(this,arguments);},Bu1:function(){return false;},Aqv:function(
){if(this.K&&this.K.Aqv)return this.K.Aqv.apply(this,arguments);else return C.DeviceClass.
Bu0.apply(this,arguments);},Bu0:function(){return false;},Aqx:function(){if(this.
K&&this.K.Aqx)return this.K.Aqx.apply(this,arguments);else return C.DeviceClass.
Bu3.apply(this,arguments);},Bu3:function(){return false;},Aw1:function(E){if(this.
K&&this.K.Aw1)return this.K.Aw1.apply(this,arguments);else return C.DeviceClass.
BvQ.apply(this,arguments);},BvQ:function(E){},BbQ:function(Aq){this.Aw1(Aq);},UpdateMaxWeightValuePrecision:
function(AK){if(this.OT===AK)return;this.OT=AK;A.abo([this,this.A9o,this.BbQ],0);
},Aw8:function(E){if(this.K&&this.K.Aw8)return this.K.Aw8.apply(this,arguments);
else return C.DeviceClass.Bv2.apply(this,arguments);},Bv2:function(E){},BbU:function(
Aq){this.Aw8(Aq);},UpdateNoNaisIdListActions:function(AK){if(this.ASt===AK)return;
this.ASt=AK;A.abo([this,this.A9s,this.BbU],0);},ResetNoNaisIdListActions:function(
G){if(this.K&&this.K.ResetNoNaisIdListActions)return this.K.ResetNoNaisIdListActions.
apply(this,arguments);else return C.DeviceClass.BwI.apply(this,arguments);},BwI:
function(G){},BG6:function(s){this.ResetNoNaisIdListActions(s);},Aw9:function(E){
if(this.K&&this.K.Aw9)return this.K.Aw9.apply(this,arguments);else return C.DeviceClass.
Bv3.apply(this,arguments);},Bv3:function(E){},BbV:function(Aq){this.Aw9(Aq);},UpdateNoTransponderListActions:
function(AK){if(this.ASy===AK)return;this.ASy=AK;A.abo([this,this.A9t,this.BbV],
0);},ResetNoTransponderListActions:function(G){if(this.K&&this.K.ResetNoTransponderListActions
)return this.K.ResetNoTransponderListActions.apply(this,arguments);else return C.
DeviceClass.BwJ.apply(this,arguments);},BwJ:function(G){},BG7:function(s){this.ResetNoTransponderListActions(
s);},Axq:function(E){if(this.K&&this.K.Axq)return this.K.Axq.apply(this,arguments
);else return C.DeviceClass.BwC.apply(this,arguments);},BwC:function(E){},Bb_:function(
Aq){this.Axq(Aq);},UpdateYoungNoTransponderListActions:function(AK){if(this.AWm===
AK)return;this.AWm=AK;A.abo([this,this.A91,this.Bb_],0);},ResetYoungNoTransponderListActions:
function(G){if(this.K&&this.K.ResetYoungNoTransponderListActions)return this.K.ResetYoungNoTransponderListActions.
apply(this,arguments);else return C.DeviceClass.BwM.apply(this,arguments);},BwM:
function(G){},BG_:function(s){this.ResetYoungNoTransponderListActions(s);},Axk:function(
E){if(this.K&&this.K.Axk)return this.K.Axk.apply(this,arguments);else return C.DeviceClass.
Bwo.apply(this,arguments);},Bwo:function(E){},A0Y:function(Aq){this.Axk(Aq);},UpdateTransponderUnlinkIdChangeMethod:
function(Azi){if(this.An$===Azi)return;this.An$=Azi;A.abo([this,this.ATb,this.A0Y
],0);},Asy:function(AoK,AJs){if(this.K&&this.K.Asy)return this.K.Asy.apply(this,
arguments);else return C.DeviceClass.BwE.apply(this,arguments);},BwE:function(AoK
,AJs){this.Gg.E7();this.Gg.AgQ=AoK;this.Gg.AVh=AJs;this.Gg.E5(1);A._GetAutoObject(
C.Device).AZ(110,true,A.jV,0,[this,this.BA6]);},BA6:function(G){var Ar=(C.PopupContext.
isPrototypeOf(G)?G:null);if(!!Ar&&(Ar.PopupState===9))A.aaS([this,this.BCJ],this
);},BCJ:function(G){this.Gg.E5(2);this.AxP();A._GetAutoObject(C.Device).AZ(110,false
,A.jV,0,null);},AFe:function(E){if(this.K&&this.K.AFe)return this.K.AFe.apply(this
,arguments);else return C.DeviceClass.Bvp.apply(this,arguments);},Bvp:function(E
){},BbF:function(Aq){this.AFe(Aq);},UpdateBirthRegistrationsListResetOnExport:function(
AK){if(this.AM$===AK)return;this.AM$=AK;A.abo([this,this.A82,this.BbF],0);},AFX:
function(E){if(this.K&&this.K.AFX)return this.K.AFX.apply(this,arguments);else return C.
DeviceClass.Bv8.apply(this,arguments);},Bv8:function(E){},BbW:function(Aq){this.
AFX(Aq);},UpdatePurchasedListResetOnExport:function(AK){if(this.AUv===AK)return;
this.AUv=AK;A.abo([this,this.A9v,this.BbW],0);},Bpc:function(){},AEQ:function(){
return this.In;},Awf:function(){return this.Abd;},Awi:function(){return this.AmJ;
},AS6:function(){return this.ScanState;},AEY:function(){return this.MeasureState;
},AE2:function(){return this.Lz;},A9j:function(){return this.Language;},ArJ:function(
){return this.TemperatureUnit;},A85:function(){return this.ANg;},ASX:function(){
return this.AEC;},Awu:function(){return this.OverlayMenu;},A9O:function(){return this.
AcM;},AS8:function(){return this.SyncState;},A9P:function(){return this.As0;},AE3:
function(){return this.AV7;},AS5:function(){return this.RatingMode;},ArG:function(
){return this.AmX;},AS_:function(){return this.AVL;},BlV:function(){return this.
AUw;},Blj:function(){return this.AutoRegistrationMode;},AS7:function(){return this.
O0;},Us:function(){return this.A3;},Ut:function(){return this.AF;},AE4:function(
){return this.K1;},ASW:function(){return this.MassUnit;},A8P:function(){return this.
Ps;},ASJ:function(){return this.AuN;},A80:function(){return this.AutoActions;},PY:
function(){return this.AnimalType;},A9X:function(){return this.WeightRecordingMode;
},AS2:function(){return this.AGv;},AEV:function(){return this.HH;},A8U:function(
){return this.AdW;},A9Y:function(){return this.WeightRecordingScope;},WK:function(
){return this.Gender;},Awn:function(){return this.Arc;},Awm:function(){return this.
Arb;},AES:function(){return this.Ko;},A8W:function(){return this.AMq;},A89:function(
){return this.AmW;},AER:function(){return this.D9;},A9T:function(){return this.AV9;
},A8$:function(){return this.AOR;},A8Y:function(){return this.AB4;},A9J:function(
){return this.AHd;},A9K:function(){return this.AHe;},A9b:function(){return this.
Aq1;},A9r:function(){return this.AEE;},A9q:function(){return this.AED;},Awr:function(
){return this.ASg;},Awq:function(){return this.ASf;},A84:function(){return this.
AqB;},A8N:function(){return this.ABW;},A8O:function(){return this.Aql;},Anv:function(
){return this.Io;},ASP:function(){return this.ACT;},ASQ:function(){return this.ACU;
},AEW:function(){return this.Avb;},Any:function(){return this.AjW;},ASY:function(
){return this.Av$;},Aws:function(){return this.ASh;},Awl:function(){return this.
EartagNrAssignmentMode;},Awh:function(){return this.Breed;},BlP:function(){return this.
SG;},BlN:function(){return this.Q4;},Bmb:function(){return this.S6;},Blm:function(
){return this.R7;},A87:function(){return this.AOd;},AET:function(){return this.Aqz;
},AS$:function(){return this.AxZ;},A9N:function(){return this.Afw;},AS3:function(
){return this.OZ;},AE0:function(){return this.Ab3;},A9a:function(){return this.Aq0;
},Uu:function(){return this.P8;},Bl2:function(){return this.AhM;},ASK:function(){
return this.AgD;},A9G:function(){return this.AVi;},A9V:function(){return this.AHz;
},A9W:function(){return this.AHA;},A8Z:function(){return this.AB5;},A9U:function(
){return this.AHy;},A9Z:function(){return this.AHD;},Blw:function(){return this.
AC1;},Bl3:function(){return this.AxR;},A9p:function(){return this.Av6;},ATa:function(
){return this.Ak7;},BlO:function(){return this.AR4;},Awv:function(){return this.
WhereAbouts;},A8Q:function(){return this.ABX;},A8R:function(){return this.ABY;},
AEX:function(){return this.AeT;},A9n:function(){return this.Av4;},A9o:function(){
return this.OT;},A9s:function(){return this.ASt;},A9t:function(){return this.ASy;
},A91:function(){return this.AWm;},ATb:function(){return this.An$;},A82:function(
){return this.AM$;},A9v:function(){return this.AUv;},_Init:function(aArg){C.Table.
_Init.call(this.An={I:this},0);C.Table._Init.call(this.Bt={I:this},0);C.Table._Init.
call(this.AgB={I:this},0);A.Core.Bad._Init.call(this.AnT={I:this},0);C.Table._Init.
call(this.Pw={I:this},0);this.__proto__=C.DeviceClass;this.An.OnSetId(0);this.Bt.
OnSetId(1);this.AgB.OnSetId(3);this.Pw.OnSetId(4);this.O0=A._NewObject(C.Transponder
,0);this.SG=A._NewObject(C.AxO,0);this.Q4=A._NewObject(C.AvE,0);this.S6=A._NewObject(
C.AvE,0);this.R7=A._NewObject(C.AxO,0);this.P8=A._NewObject(C.AV2,0);this.Gg=A._NewObject(
C.V2,0);var J_=this._variants();if(J_){this.K={};J_._Init.call(this,aArg);}A.h7++;
},_Done:function(){if(this.K)this.K._Done.call(this);this.__proto__=null;this.An.
_Done();this.Bt._Done();this.AgB._Done();this.AnT._Done();this.Pw._Done();A.h7--;
},_ReInit:function(){this.An._ReInit();this.Bt._ReInit();this.AgB._ReInit();this.
AnT._ReInit();this.Pw._ReInit();if(this.K)this.K._ReInit.call(this);},_Mark:function(
D){var B;if((B=this.O0)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.SG)&&(B._cycle
!=D))B._Mark(B._cycle=D);if((B=this.Q4)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=
this.S6)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.R7)&&(B._cycle!=D))B._Mark(
B._cycle=D);if((B=this.P8)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Gg)&&(B.
_cycle!=D))B._Mark(B._cycle=D);if((B=this.An)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Bt)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AgB)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.AnT)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Pw)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);if(this.K)this.K._Mark(
D);},_variants:function(){return A.acq.DeviceClass._variants();},K:null,I:null,_cycle:
0,_observers:null,_className:"Device::DeviceClass"};C.Device={_Init:function(){C.
DeviceClass._Init.call(this,0);},_ReInit:function(){},_variants:function(){return this;
},_this:null};C.ScreenType={UNDEFINED:0,Sleep:1,Boot:2,Home:3,Charge:4,Sync:5,Settings:
6,EditAnimalData:7,AnimalList:8,AnimalListFilter:9,AnimalActionTemperature:10,AnimalActionRate:
11,AlarmList:12,ControlMeasure:13,ControlList:14,RangeTest:15,DateTimeSettings:16
,TemperatureSettings:17,DeviceSettings:18,RegistrationSettings:19,WatchList:20,AnimalActionWeighing:
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
A5:A.jV,Abt:function(){var Aw=A._NewObject(C.StringFilterCriterion,0);Aw.Fa(this
);return Aw;},Fa:function(AI){C.FilterCriterion.Fa.call(this,AI);var Aw=(C.StringFilterCriterion.
isPrototypeOf(AI)?AI:null);if(!!Aw)this.A5=Aw.A5;},_Init:function(aArg){C.FilterCriterion.
_Init.call(this,aArg);this.__proto__=C.StringFilterCriterion;},_className:"Device::StringFilterCriterion"
};C.Table={CG:function(Ad,A4){if(this.K&&this.K.CG)return this.K.CG.apply(this,arguments
);else return C.ITable.CG.apply(this,arguments);},V_:function(Ad,A4){if(this.K&&
this.K.V_)return this.K.V_.apply(this,arguments);else return C.ITable.V_.apply(this
,arguments);},H7:function(Ad,A4){if(this.K&&this.K.H7)return this.K.H7.apply(this
,arguments);else return C.ITable.H7.apply(this,arguments);},OnSetId:function(E){
if(this.K&&this.K.OnSetId)return this.K.OnSetId.apply(this,arguments);else return C.
ITable.OnSetId.apply(this,arguments);},B8:function(){if(this.K&&this.K.B8)return this.
K.B8.apply(this,arguments);else return C.ITable.B8.apply(this,arguments);},Bk:function(
E){if(this.K&&this.K.Bk)return this.K.Bk.apply(this,arguments);else return C.ITable.
Bk.apply(this,arguments);},V$:function(Ad,A4){if(this.K&&this.K.V$)return this.K.
V$.apply(this,arguments);else return C.ITable.V$.apply(this,arguments);},Sq:function(
Ad,A4){if(this.K&&this.K.Sq)return this.K.Sq.apply(this,arguments);else return C.
ITable.Sq.apply(this,arguments);},OG:function(){if(this.K&&this.K.OG)return this.
K.OG.apply(this,arguments);else return C.ITable.OG.apply(this,arguments);},OI:function(
AoW){if(this.K&&this.K.OI)return this.K.OI.apply(this,arguments);else return C.ITable.
OI.apply(this,arguments);},YP:function(){if(this.K&&this.K.YP)return this.K.YP.apply(
this,arguments);else return C.ITable.YP.apply(this,arguments);},ZS:function(Ad,A4
,C1){if(this.K&&this.K.ZS)return this.K.ZS.apply(this,arguments);else return C.ITable.
ZS.apply(this,arguments);},Hp:function(Ad,A4,C1){if(this.K&&this.K.Hp)return this.
K.Hp.apply(this,arguments);else return C.ITable.Hp.apply(this,arguments);},ZR:function(
Ad,A4,C1){if(this.K&&this.K.ZR)return this.K.ZR.apply(this,arguments);else return C.
ITable.ZR.apply(this,arguments);},Ob:function(Ad,A4,C1){if(this.K&&this.K.Ob)return this.
K.Ob.apply(this,arguments);else return C.ITable.Ob.apply(this,arguments);},ZQ:function(
Ad,A4,C1){if(this.K&&this.K.ZQ)return this.K.ZQ.apply(this,arguments);else return C.
ITable.ZQ.apply(this,arguments);},LZ:function(aColumn,A8){if(this.K&&this.K.LZ)return this.
K.LZ.apply(this,arguments);else return C.ITable.LZ.apply(this,arguments);},KT:function(
Ad,A4){if(this.K&&this.K.KT)return this.K.KT.apply(this,arguments);else return C.
ITable.KT.apply(this,arguments);},UJ:function(Ad,A4,C1){if(this.K&&this.K.UJ)return this.
K.UJ.apply(this,arguments);else return C.ITable.UJ.apply(this,arguments);},Aew:function(
aColumn,A8){if(this.K&&this.K.Aew)return this.K.Aew.apply(this,arguments);else return C.
ITable.Aew.apply(this,arguments);},E7:function(){if(this.K&&this.K.E7)return this.
K.E7.apply(this,arguments);else return C.ITable.E7.apply(this,arguments);},AjM:function(
aColumn,A8){if(this.K&&this.K.AjM)return this.K.AjM.apply(this,arguments);else return C.
ITable.AjM.apply(this,arguments);},Aep:function(aColumn,A8){if(this.K&&this.K.Aep
)return this.K.Aep.apply(this,arguments);else return C.ITable.Aep.apply(this,arguments
);},HM:function(){if(this.K&&this.K.HM)return this.K.HM.apply(this,arguments);else
return C.ITable.HM.apply(this,arguments);},AbB:function(){if(this.K&&this.K.AbB)
return this.K.AbB.apply(this,arguments);else return C.ITable.AbB.apply(this,arguments
);},QN:function(){if(this.K&&this.K.QN)return this.K.QN.apply(this,arguments);else
return C.ITable.QN.apply(this,arguments);},_Init:function(aArg){C.ITable._Init.call(
this,aArg);this.__proto__=C.Table;var J_=this._variants();if(J_){this.K={};J_._Init.
call(this,aArg);}},_Done:function(){if(this.K)this.K._Done.call(this);this.__proto__=
C.ITable;C.ITable._Done.call(this);},_ReInit:function(){C.ITable._ReInit.call(this
);if(this.K)this.K._ReInit.call(this);},_Mark:function(D){C.ITable._Mark.call(this
,D);if(this.K)this.K._Mark(D);},_variants:function(){return A.acq.Table._variants(
);},K:null,_className:"Device::Table"};C.TableId={Animal:0,Rating:1,Undefined:2,
AnimalGroup:3,CalfDeregistrations:4};C.ScanState={Idle:0,Progress:1,IdScanned:2,
NotFound:3,Error:4,LAST:5};C.RatedAttribute={None:0,Feed:1,Appearance:2,Respiratory:
3,Faeces:4};C.ConverterClass={Na:null,Ak4:function(AoU){var BdA;var Auz=this.AVB(
AoU/100,0,A._GetAutoObject(C.Device).TemperatureUnit);BdA=A.abk(Auz,0,1);return BdA;
},Ban:function(NA){if(NA<=0)return 0;else if(NA<=1)return 5;else if(NA<=2)return 3;
else if(NA<=4)return 2;else if(NA<=6)return 1;else if(NA<=8)return 4;else return 0;
},Ad5:function(NA){var a=0;switch(NA){case 3:a=2;break;case 2:a=4;break;case 1:a=
6;break;case 0:a=0;break;case 4:a=8;break;case 5:a=1;break;default:A.ab5("%s",Oh
);}return a;},AsR:function(Eo,Ry){var NC=A._GetAutoObject(C.Converter).Ajp(Ry,Eo
);switch(NC){case 3:return 1;case 2:return 2;case 1:return 3;case 0:return 4;default:
throw new Error(Qf+NC.toFixed());}},AhU:function(){var B;var D8=A._NewObject(A.Core.
Bs,0).Initialize(A._GetAutoObject(C.Helper).Dv());D8.AnH(0);D8.AnK(0);D8.AnN(0);
return((B=(D8.JY()|0))<0)?B+0x100000000:B;},Bip:function(Atx){var CO;switch(Atx){
case 36:CO=MR;break;case 40:CO=Tf;break;case 56:CO=U1;break;case 70:CO=Aab;break;
case 100:CO=Xf;break;case 124:CO=Ix;break;case 156:CO=U2;break;case 158:CO=Aac;break;
case 191:CO=U3;break;case 196:CO=Aad;break;case 203:CO=Xg;break;case 208:CO=Aae;
break;case 233:CO=Aaf;break;case 246:CO=U4;break;case 250:CO=Xh;break;case 276:CO=
Pa;break;case 300:CO=Aag;break;case 348:CO=Oi;break;case 372:CO=Rq;break;case 380:
CO=Xi;break;case 392:CO=Xj;break;case 428:CO=Tg;break;case 440:CO=Xk;break;case 442:
CO=Aah;break;case 470:CO=Xl;break;case 528:CO=Xm;break;case 578:CO=Th;break;case
616:CO=Ti;break;case 620:CO=Tj;break;case 642:CO=Aai;break;case 643:CO=Tk;break;
case 703:CO=Aaj;break;case 705:CO=AfG;break;case 724:CO=Aak;break;case 752:CO=Xn;
break;case 756:CO=Aal;break;case 792:CO=Xo;break;case 804:CO=AhY;break;case 826:
CO=K3;break;case 840:CO=AcS;break;default:CO=Atx.toFixed();}return CO;},Alb:function(
MX){var AaA;if((MX<10000)&&(A._GetAutoObject(C.Device).OT===2))AaA=2;else if((MX<
100000)&&!!A._GetAutoObject(C.Device).OT)AaA=1;else AaA=0;return this.Te(MX,AaA,
false);},Aya:function(MX,AaA){return this.Te(MX,AaA,false);},Te:function(MX,AaA,
BAy){var B;var AlK=A.jV;switch(A._GetAutoObject(C.Device).MassUnit){case 0:if(BAy
)AlK=A.abl(MX,0,0);else{var BeY=MX<0;if(AaA<3)MX=MX+(((BeY?-1:1)*5)*(Math.pow(10
,2-AaA)|0));AlK=(((((B=MX)>-2147483648)?Math.abs(B):B)/1000)|0).toFixed();if(AaA>
0)AlK=AlK+(LB+A.abV(A.abl((((B=MX)>-2147483648)?Math.abs(B):B)%1000,3,10),AaA));
if(BeY)AlK=AhZ+AlK;}break;case 1:AlK=A.abk(MX/453.592,0,AaA);break;default:A.ab5(
"%s%s",Aoj,A._GetAutoObject(C.Device).MassUnit.toFixed());}return AlK;},Rm:function(
IA){var A42=IA.toFixed();var Bhe=A42.length;if((Bhe>=14)&&(Bhe<=15)){var A2R=this.
Ax2(IA);var Bzn=A._GetAutoObject(C.Converter).Bip(A2R);A42=(Bzn+Oj)+A.abm(A._GetAutoObject(
C.Helper).V6(IA,0,12),12,10);}return A42;},Am0:function(Ma){switch(Ma){case 0:return A.
aaL(A.ach.AQQ);case 1:return A.aaL(A.ach.ADY);case 2:return A.aaL(A.ach.AD2);default:{
A.ab5("%s%e",Xp,Ma);return null;}}},A5E:function(ByV){switch(ByV){case 0:return A.
aaL(A.ach.AvM);case 1:return A.aaL(A.ach.ADU);case 2:return A.aaL(A.ach.AQJ);default:
throw new Error(Aam);}},Ad3:function(AJC){switch(AJC){case 0:case 14:return A.aaL(
A.ach.AjX);case 2:return A.aaL(A.ach.Ark);case 1:return A.aaL(A.ach.Ag9);case 3:
switch(A._GetAutoObject(C.Device).MassUnit){case 0:return A.aaL(A.ach.AD8);case 1:
return A.aaL(A.ach.AD9);default:throw new Error(AfH+A._GetAutoObject(C.Device).MassUnit.
toFixed());}break;case 4:return A.aaL(A.ach.AP7);case 5:return A.aaL(A.ach.AP8);
case 6:return A.aaL(A.ach.AQb);case 7:return A.aaL(A.ach.APt);case 8:case 13:return A.
aaL(A.ach.APA);case 9:return A.aaL(A.ach.ADv);case 10:return A.aaL(A.ach.APz);case
12:return A.aaL(A.ach.APB);case 11:return A.aaL(A.ach.AQh);default:throw new Error(
Ah0+AJC.toFixed());}},BhR:function(Azm){switch(Azm){case 0:return A.aaL(A.ach.AQI
);case 3:return A.aaL(A.ach.Ark);case 1:return A.aaL(A.ach.Ag9);case 2:return A.
_GetAutoObject(A.acj.DU).BdZ();default:throw new Error(Ah0+Azm.toFixed());}},Bio:
function(Atx){switch(Atx){case 977:return AcT;case 978:return U5;case 980:return Aok;
case 981:return Aol;case 982:return Aom;case 983:return Aon;case 984:return Ale;
case 985:return As6;default:return A.aaR(A.acf.Unknown);}},BiJ:function(Ac5){switch(
Ac5){case 1:return 0x278A;case 2:return 0x278B;case 3:return 0x278C;case 4:return 0x278D;
case 5:return 0x278E;case 6:return 0x278F;case 7:return 0x2790;case 8:return 0x2791;
case 9:return 0x2792;case 10:return 0x2793;default:return 0x20;}},BqG:function(IA
){if(!IA)return-1;return(IA%100000000)|0;},Bjl:function(AoT,aFilter){var B;if(!aFilter
)return Ayc;var Apl=Ayd;var Aw=aFilter.AOZ();while(!!Aw){Apl=Apl+A._GetAutoObject(
C.Helper).A7e(AoT,Aw);Aw=aFilter.AO4(Aw);if(!!Aw)Apl=Apl+Pb;}Apl=Apl+Rr;return Apl;
},A7W:function(BcD){var HU=0;switch(BcD){case 14:HU=2;break;case 13:HU=4;break;case
6:HU=36;break;case 25:HU=17;break;case 11:HU=9;break;case 17:HU=11;break;case 0:
HU=39;break;case 10:HU=26;break;case 12:HU=12;break;case 5:HU=14;break;case 3:HU=
15;break;case 1:HU=10;break;case 8:HU=16;break;case 18:HU=18;break;case 4:HU=20;
break;case 19:HU=21;break;case 20:HU=24;break;case 26:HU=22;break;case 15:HU=27;
break;case 21:HU=28;break;case 22:HU=29;break;case 23:HU=30;break;case 9:HU=31;break;
case 27:HU=33;break;case 2:HU=13;break;case 24:HU=32;break;case 7:HU=35;break;case
16:HU=37;break;default:A.ab5("%s%e",Aye,BcD);}return HU;},BhQ:function(Azm){switch(
Azm){case 0:return 1;case 3:return 0;case 1:return 2;case 2:switch(A._GetAutoObject(
C.Device).MassUnit){case 0:return 3;case 1:return 4;default:throw new Error(AfH+
A._GetAutoObject(C.Device).MassUnit.toFixed());}break;default:throw new Error(Ah0+
Azm.toFixed());}},Ajt:function(Ao4){switch(Ao4){case 0:switch(A._GetAutoObject(C.
Device).MassUnit){case 0:return A.aaL(A.ach.AP4);case 1:return A.aaL(A.ach.AP3);
default:throw new Error(AfH+A._GetAutoObject(C.Device).MassUnit.toFixed());}break;
case 1:return A.aaL(A.ach.AQG);case 9:return A.aaL(A.ach.AP0);case 4:return A.aaL(
A.ach.AQ3);case 6:return A.aaL(A.ach.AQ4);case 8:return A.aaL(A.ach.AQc);case 2:
return A.aaL(A.ach.AQ8);case 3:return A.aaL(A.ach.AQ2);case 7:return A.aaL(A.ach.
AQ9);case 5:return A.aaL(A.ach.AQ_);case 10:switch(A._GetAutoObject(C.Device).MassUnit
){case 0:return A.aaL(A.ach.ARf);case 1:return A.aaL(A.ach.ARe);default:throw new
Error(AfH+A._GetAutoObject(C.Device).MassUnit.toFixed());}break;case 11:return A.
aaL(A.ach.AQi);case 12:return A.aaL(A.ach.AQK);case 16:return A.aaL(A.ach.AQL);case
19:case 13:case 14:case 18:case 15:case 17:return A.aaL(A.aci.TX);default:throw new
Error(U6+Ao4.toFixed());}},ANP:function(Atx){switch(Atx){case 40:return 1;case 56:
return 3;case 70:return 2;case 100:return 4;case 124:return 5;case 156:return 7;
case 158:return 36;case 191:return 17;case 196:return 8;case 203:return 9;case 208:
return 11;case 233:return 12;case 246:return 14;case 250:return 15;case 276:return 10;
case 300:return 16;case 348:return 18;case 372:return 19;case 380:return 20;case
392:return 21;case 428:return 24;case 440:return 22;case 442:return 23;case 470:
return 25;case 528:return 26;case 578:return 27;case 616:return 28;case 620:return 29;
case 642:return 30;case 643:return 31;case 703:return 34;case 705:return 33;case
724:return 13;case 752:return 32;case 756:return 6;case 792:return 35;case 804:return 37;
case 826:return 38;case 840:return 39;default:return 0;}},S9:function(IA){var A2R=
this.Ax2(IA);return this.ANP(A2R);},Ax2:function(IA){return A._GetAutoObject(C.Helper
).V6(IA,12,3)|0;},BaG:function(AoY,Eo){if(AoY<A._GetAutoObject(C.Helper).ADr(Eo)
)return 1;else if(AoY<A._GetAutoObject(C.Helper).ADq(Eo))return 2;else return 3;
},ADd:function(Byy){switch(Byy){case 1:return 1;case 2:return 2;case 3:return 3;
case 4:return 4;case 5:return 5;case 6:return 6;case 7:return 7;case 8:return 8;
case 9:return 9;case 10:return 10;case 11:return 11;case 12:return 12;case 13:return 13;
case 14:return 14;case 15:return 15;case 16:return 16;default:return 0;}},AVB:function(
A8,AJu,AJv){if(AJu===AJv)return A8;if(!AJu&&(AJv===1)){var result=((A8*9)/5)+32;
return result;}if((AJu===1)&&!AJv){var result=((A8-32)*5)/9;return result;}throw new
Error(((As7+AJu.toFixed())+Ayf)+AJv.toFixed());},A6Z:function(Eb){switch(Eb){case
0:return Ayg;case 1:return A.jV;case 2:return Alf;case 3:return Ayh;case 4:return A.
aaR(A.acf.Contains);case 5:return AfI;default:{A.ab5("%s%e",Aoo,Eb);return A.jV;
}}},A53:function(Ac3){return this.Na.Aeo(Ac3);},Bj5:function(Ac3){return this.Na.
AmL(Ac3);},Bh8:function(Atw){var AAG=0;switch(Atw){case 0:AAG=1;break;case 1:AAG=
2;break;case 2:AAG=3;break;case 3:AAG=4;break;default:A.ab5("%s%e",I1,Atw);}return AAG;
},Ajp:function(A1e,Eo){if(A1e>=A._GetAutoObject(C.Helper).A6$(Eo))return 3;else if(
A1e>=A._GetAutoObject(C.Helper).ADe(Eo))return 2;else if(A1e<A._GetAutoObject(C.
Device).AcM)return 0;else return 1;},AqI:function(HU){var BN=-1;switch(HU){case 0:
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
throw new Error(Aop+HU.toFixed());}return BN;},Bal:function(IA){return A._GetAutoObject(
C.Helper).V6(IA,8,2)|0;},AVR:function(IA){var BAt=this.Bal(IA);return this.ADd(BAt
);},AMi:function(Eh){var RA=19;switch(Eh){case 0:break;case 4:RA=7;break;case 32:
case 2048:RA=9;break;case 4096:RA=11;break;case 32768:RA=14;break;case 524288:RA=
18;break;case 65536:RA=15;break;case 128:RA=17;break;case 16:RA=1;break;case 16384:
RA=12;break;case 1024:RA=8;break;case 2:RA=3;break;case 131072:RA=16;break;case 1:
RA=2;break;case 8:RA=5;break;case 256:RA=10;break;default:throw new Error(As8+Eh.
toFixed());}return RA;},Bak:function(IA){return A._GetAutoObject(C.Helper).V6(IA
,10,2)|0;},_Init:function(aArg){C.Na._Init.call(this.Na={I:this},0);this.__proto__=
C.ConverterClass;A.h7++;},_Done:function(){this.__proto__=null;this.Na._Done();A.
h7--;},_ReInit:function(){this.Na._ReInit();},_Mark:function(D){var B;if((B=this.
Na)._cycle!=D)B._Mark(B._cycle=D);if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=
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
false,IsAlarm:false,E3:function(Ad,AH){var HG=C.Row.E3.call(this,Ad,AH);if(HG&&!
!AH){this.OnSetId(AH.CG(Ad,0));this.SQ(AH.CG(Ad,1));this.Aca(AH.CG(Ad,2));this.AnJ(
AH.CG(Ad,3));this.Q9(AH.Hw(Ad,4));this.J0(AH.AO1(Ad,7));this.Akx(AH.BjD(Ad,6));this.
EC(AH.Am1(Ad,14));this.P1(AH.KT(Ad,22));this.Nr(AH.KT(Ad,26));this.Axp(AH.Ja(Ad,
13));this.Ae6(AH.H7(Ad,8));this.Axg(AH.Hw(Ad,15));this.AT4(AH.Hw(Ad,31));this.Afa(
AH.A7o(Ad,5));this.ATB(AH.Ja(Ad,17));this.Uz(AH.H7(Ad,11));this.AT3(AH.Hw(Ad,16)
);this.AT6(AH.Hw(Ad,30));this.AkD(AH.H7(Ad,9));this.Ae_(AH.H7(Ad,12));this.AT5(AH.
Hw(Ad,20));this.Axi(AH.Hw(Ad,21));this.Ae8(AH.H7(Ad,10));this.AwW(AH.H7(Ad,27));
this.AFF(AH.ADm(Ad,18));this.AF9(AH.Hw(Ad,19));this.AwR(AH.ADm(Ad,23));this.Axh(
AH.Hw(Ad,24));this.ATt(AH.CG(Ad,25));this.AwI(AH.Hw(Ad,28));this.AwX(AH.CG(Ad,29
));this.Ar4(AH.H7(Ad,38));this.N7(AH.BjE(Ad,32));this.Akz(AH.BjJ(Ad,33));this.AnL(
AH.KT(Ad,35));this.Nt(AH.AO9(Ad,34));this.Ae9(AH.H7(Ad,37));this.AFY(AH.BjS(Ad,36
));}return HG;},Ci:function(AH){var HG=C.Row.Ci.call(this,AH);if(HG&&!!AH){var Jt=
AH.OG();if(Jt<=0)A.ab5("%s",Xq);else{var AAj=this.Ana();if(AAj)this.CL=AH.YP();else
AH.Hp(this.CL,0,this.Id);AH.Hp(this.CL,1,this.VisualId);AH.Hp(this.CL,2,this.GroupId
);AH.Hp(this.CL,3,this.LocationId);AH.Acu(this.CL,4,this.DateOfBirth);AH.BpA(this.
CL,7,this.Gender);AH.Bpw(this.CL,6,this.BirthType);AH.Bpu(this.CL,14,this.AnimalType
);AH.UJ(this.CL,22,this.TransponderId);AH.UJ(this.CL,26,this.NaisId);AH.AkV(this.
CL,13,this.WorstAssessment);AH.Ob(this.CL,8,this.IsAlarm);AH.Acu(this.CL,15,this.
TimestampAlarm);AH.Ob(this.CL,11,this.IsFever);AH.Acu(this.CL,16,this.TimestampExpirationFeverAlarm
);AH.Ob(this.CL,9,this.IsControl);AH.Ob(this.CL,12,this.IsWatch);AH.Acu(this.CL,
20,this.TimestampLastControl);AH.Acu(this.CL,21,this.TimestampLastWatch);AH.Ob(this.
CL,10,this.IsRegistered);AH.Ob(this.CL,27,this.IsPerished);AH.Acu(this.CL,28,this.
DateOfLastCalving);AH.Hp(this.CL,29,this.LactationNumber);AH.Ob(this.CL,38,this.
IsDry);AH.Bpy(this.CL,32,this.Breed);AH.Bpz(this.CL,33,this.EaseOfDelivery);AH.UJ(
this.CL,35,this.NaisIdMother);AH.BpF(this.CL,34,this.WhereAbouts);AH.Ob(this.CL,
37,this.IsRegistrationNoticePending);AH.BpE(this.CL,36,this.ReasonOfLeaving);HG=
AH.OI(Jt);if(AAj)this.OnSetId(AH.AbB());}}return HG;},Gs:function(){C.Row.Gs.call(
this);this.OnSetId(-1);this.Ae8(true);},E7:function(){C.Row.E7.call(this);this.OnSetId(
0);this.SQ(0);this.Aca(0);this.AnJ(0);this.Q9(0);this.J0(A._GetAutoObject(C.Device
).Gender);this.Akx(0);this.EC(A._GetAutoObject(C.Device).AnimalType);this.P1(0);
this.Nr(0);this.Axp(0);this.Ae6(false);this.Axg(0);this.AT4(0);this.Afa(0);this.
ATB(0);this.Uz(false);this.AT6(0);this.AT3(0);this.AkD(false);this.Ae_(false);this.
AT5(0);this.Axi(0);this.Ae8(false);this.AwW(false);this.AFF(0);this.AF9(0);this.
AwR(0);this.Axh(0);this.ATt(-1);this.AwI(0);this.AwX(0);this.Ar4(false);this.N7(
0);this.Akz(0);this.AnL(0);this.Nt(0);this.Ae9(false);this.AFY(0);},OnSetId:function(
E){if(this.Id===E)return;this.Id=E;A.abo([this,this.Q7,this.OnSetId],0);},SQ:function(
E){if(this.VisualId===E)return;this.VisualId=E;A.abo([this,this.ArL,this.SQ],0);
},Aca:function(E){if(this.GroupId===E)return;this.GroupId=E;A.abo([this,this.BlD
,this.Aca],0);},Q9:function(E){if(this.DateOfBirth===E)return;this.DateOfBirth=E;
A.abo([this,this.Awj,this.Q9],0);},J0:function(E){if(this.Gender===E)return;this.
Gender=E;A.abo([this,this.WK,this.J0],0);},Akx:function(E){if(this.BirthType===E
)return;this.BirthType=E;A.abo([this,this.ASN,this.Akx],0);},AnJ:function(E){if(
this.LocationId===E)return;this.LocationId=E;A.abo([this,this.A9m,this.AnJ],0);}
,Afa:function(E){if(this.LastTemperature===E)return;this.LastTemperature=E;A.abo([
this,this.A9l,this.Afa],0);},Ae6:function(E){if(this.IsAlarm===E)return;this.IsAlarm=
E;A.abo([this,this.A9d,this.Ae6],0);},AkD:function(E){if(this.IsControl===E)return;
this.IsControl=E;A.abo([this,this.BlG,this.AkD],0);},Ae8:function(E){if(this.IsRegistered===
E)return;this.IsRegistered=E;A.abo([this,this.BlJ,this.Ae8],0);},Ae_:function(E){
if(this.IsWatch===E)return;this.IsWatch=E;A.abo([this,this.A9h,this.Ae_],0);},Axp:
function(E){if(this.WorstAssessment===E)return;this.WorstAssessment=E;A.abo([this
,this.A90,this.Axp],0);},Uz:function(E){if(this.IsFever===E)return;this.IsFever=
E;A.abo([this,this.A9e,this.Uz],0);},AT5:function(E){if(this.TimestampLastControl===
E)return;this.TimestampLastControl=E;A.abo([this,this.Bl_,this.AT5],0);},Axi:function(
E){if(this.TimestampLastWatch===E)return;this.TimestampLastWatch=E;A.abo([this,this.
Bma,this.Axi],0);},ATB:function(E){if(this.LastRatingTemperature===E)return;this.
LastRatingTemperature=E;A.abo([this,this.BlM,this.ATB],0);},AT3:function(E){if(this.
TimestampExpirationFeverAlarm===E)return;this.TimestampExpirationFeverAlarm=E;A.
abo([this,this.Bl8,this.AT3],0);},Axg:function(E){if(this.TimestampAlarm===E)return;
this.TimestampAlarm=E;A.abo([this,this.Bl7,this.Axg],0);},EC:function(E){if(this.
AnimalType===E)return;this.AnimalType=E;A.abo([this,this.PY,this.EC],0);},AFF:function(
E){if(this.LastBodyWeight===E)return;this.LastBodyWeight=E;A.abo([this,this.A9k,
this.AFF],0);},AF9:function(E){if(this.TimestampLastWeighing===E)return;this.TimestampLastWeighing=
E;A.abo([this,this.A9M,this.AF9],0);},P1:function(E){if(this.TransponderId===E)return;
this.TransponderId=E;A.abo([this,this.ArK,this.P1],0);},RU:function(){return A._GetAutoObject(
C.Helper).Mf(this.DateOfBirth,A._GetAutoObject(C.Helper).Dv());},AwR:function(E){
if(this.FirstBodyWeight===E)return;this.FirstBodyWeight=E;A.abo([this,this.ASS,this.
AwR],0);},Axh:function(E){if(this.TimestampFirstWeighing===E)return;this.TimestampFirstWeighing=
E;A.abo([this,this.AS9,this.Axh],0);},Arp:function(){var Ph=A._NewObject(A.Core.
Bs,0);Ph.Initialize(this.DateOfBirth);var A2D=A._NewObject(A.Core.Bs,0);A2D.Initialize(
this.TimestampFirstWeighing);if(((Ph.Year===A2D.Year)&&(Ph.Ab8()===A2D.Ab8()))&&(
this.FirstBodyWeight>0))return true;else return false;},AhX:function(AJn){var AaK;
var AuE;if(this.TimestampLastWeighing>0){AuE=this.TimestampLastWeighing;AaK=this.
LastBodyWeight;}else{AuE=this.DateOfBirth;AaK=A._GetAutoObject(C.Helper).AbA(this.
AnimalType);}return A._GetAutoObject(C.Helper).AhX(AaK,AuE,AJn,this.AnimalType);
},ATt:function(E){if(this.FirstBodyWeightId===E)return;this.FirstBodyWeightId=E;
A.abo([this,this.BlC,this.ATt],0);},An0:function(Bc0){this.Ae6(Bc0);if(Bc0){if(!
this.TimestampAlarm)this.Axg(A._GetAutoObject(C.Helper).Dv());}else this.Axg(0);
},Nr:function(E){if(this.NaisId===E)return;this.NaisId=E;A.abo([this,this.Anz,this.
Nr],0);},AGW:function(BcW){this.Ae_(BcW);if(BcW){if(!this.TimestampLastWatch)this.
Axi(A._GetAutoObject(C.Helper).Dv());}else this.Axi(0);},AwI:function(E){if(this.
DateOfLastCalving===E)return;this.DateOfLastCalving=E;A.abo([this,this.Bls,this.
AwI],0);},AwX:function(E){if(this.LactationNumber===E)return;this.LactationNumber=
E;A.abo([this,this.BlL,this.AwX],0);},AwW:function(E){if(this.IsPerished===E)return;
this.IsPerished=E;A.abo([this,this.BlI,this.AwW],0);},AT6:function(E){if(this.TimestampLastTemperature===
E)return;this.TimestampLastTemperature=E;A.abo([this,this.Bl$,this.AT6],0);},AT4:
function(E){if(this.TimestampLastAssessment===E)return;this.TimestampLastAssessment=
E;A.abo([this,this.Bl9,this.AT4],0);},N7:function(E){if(this.Breed===E)return;this.
Breed=E;A.abo([this,this.Awh,this.N7],0);},Akz:function(E){if(this.EaseOfDelivery===
E)return;this.EaseOfDelivery=E;A.abo([this,this.ASR,this.Akz],0);},Nt:function(E
){if(this.WhereAbouts===E)return;this.WhereAbouts=E;A.abo([this,this.Awv,this.Nt
],0);},AnL:function(E){if(this.NaisIdMother===E)return;this.NaisIdMother=E;A.abo([
this,this.ASZ,this.AnL],0);},AFY:function(E){if(this.ReasonOfLeaving===E)return;
this.ReasonOfLeaving=E;A.abo([this,this.BlX,this.AFY],0);},Ae9:function(E){if(this.
IsRegistrationNoticePending===E)return;this.IsRegistrationNoticePending=E;A.abo([
this,this.BlK,this.Ae9],0);},Ar4:function(E){if(this.IsDry===E)return;this.IsDry=
E;A.abo([this,this.BlH,this.Ar4],0);},Q7:function(){return this.Id;},ArL:function(
){return this.VisualId;},BlD:function(){return this.GroupId;},Awj:function(){return this.
DateOfBirth;},WK:function(){return this.Gender;},ASN:function(){return this.BirthType;
},A9m:function(){return this.LocationId;},A9l:function(){return this.LastTemperature;
},A9d:function(){return this.IsAlarm;},BlG:function(){return this.IsControl;},BlJ:
function(){return this.IsRegistered;},A9h:function(){return this.IsWatch;},A90:function(
){return this.WorstAssessment;},A9e:function(){return this.IsFever;},Bl_:function(
){return this.TimestampLastControl;},Bma:function(){return this.TimestampLastWatch;
},BlM:function(){return this.LastRatingTemperature;},Bl8:function(){return this.
TimestampExpirationFeverAlarm;},Bl7:function(){return this.TimestampAlarm;},PY:function(
){return this.AnimalType;},A9k:function(){return this.LastBodyWeight;},A9M:function(
){return this.TimestampLastWeighing;},ArK:function(){return this.TransponderId;}
,ASS:function(){return this.FirstBodyWeight;},AS9:function(){return this.TimestampFirstWeighing;
},BlC:function(){return this.FirstBodyWeightId;},Anz:function(){return this.NaisId;
},Bls:function(){return this.DateOfLastCalving;},BlL:function(){return this.LactationNumber;
},BlI:function(){return this.IsPerished;},Bl$:function(){return this.TimestampLastTemperature;
},Bl9:function(){return this.TimestampLastAssessment;},Awh:function(){return this.
Breed;},ASR:function(){return this.EaseOfDelivery;},Awv:function(){return this.WhereAbouts;
},ASZ:function(){return this.NaisIdMother;},BlX:function(){return this.ReasonOfLeaving;
},BlK:function(){return this.IsRegistrationNoticePending;},BlH:function(){return this.
IsDry;},_Init:function(aArg){C.Row._Init.call(this,aArg);this.__proto__=C.Animal;
this.TableId=0;},_className:"Device::Animal"};C.Row={CL:-1,TableId:2,E3:function(
Ad,AH){if(!AH){A.ab5("%s",(As9+this.CL.toFixed())+As_);return false;}else if(AH.
Id!==this.TableId)throw new Error(As$);else if((Ad<0)||(Ad>=AH.B8())){A.ab5("%s"
,(((Aoq+this.CL.toFixed())+Ata)+AH.B8().toFixed())+Alg);return false;}this.CL=Ad;
return true;},Ci:function(AH){if(!AH){A.ab5("%s",(As9+this.CL.toFixed())+As_);return false;
}else if(AH.Id!==this.TableId)throw new Error(As$);else if(this.Ana()&&AH.Ll()){
A.ab5("%s",Ayi+AH.HM().toFixed());return false;}else if(!this.Ana()&&((this.CL<0
)||(this.CL>=AH.B8()))){A.ab5("%s",(((Aoq+this.CL.toFixed())+Ata)+AH.B8().toFixed(
))+Alg);return false;}return true;},Gs:function(){this.E7();this.CL=-1;},Ana:function(
){return this.CL===-1;},E7:function(){this.CL=-2;},Aq7:function(){return this.CL
!==-2;},A9A:function(){return this.CL;},A_0:function(E){this.CL=E;},_Init:function(
aArg){this.__proto__=C.Row;A.h7++;},_Done:function(){this.__proto__=null;A.h7--;
},_ReInit:function(){},_Mark:function(D){var B;if((B=this.I)&&(B._cycle!=D))B._Mark(
B._cycle=D);},I:null,_cycle:0,_observers:null,_className:"Device::Row"};C.Rating={
Temperature:0,Id:0,AnimalId:0,Timestamp:0,BodyWeight:0,RatingTemperature:0,Faeces:
0,Respiratory:0,Appearance:0,Feed:0,E3:function(Ad,AH){var HG=C.Row.E3.call(this
,Ad,AH);if(HG&&!!AH){this.OnSetId(AH.CG(Ad,0));this.OnSetAnimalId(AH.CG(Ad,1));this.
OnSetTimestamp(AH.Hw(Ad,6));this.OnSetFeed(AH.Ja(Ad,2));this.OnSetAppearance(AH.
Ja(Ad,3));this.OnSetRespiratory(AH.Ja(Ad,4));this.OnSetFaeces(AH.Ja(Ad,5));this.
OnSetTemperature(AH.A7o(Ad,7));this.OnSetBodyWeight(AH.ADm(Ad,8));this.OnSetRatingTemperature(
AH.Ja(Ad,9));}return HG;},Ci:function(AH){if(this.K&&this.K.Ci)return this.K.Ci.
apply(this,arguments);else return C.Rating.Bbm.apply(this,arguments);},Bbm:function(
AH){var HG=C.Row.Ci.call(this,AH);if((HG&&!!AH)&&(AH.Id===1)){var Jt=AH.OG();if(
Jt<=0)A.ab5("%s",Xq);else{var AAj=this.Ana();if(AAj)this.CL=AH.YP();else AH.Hp(this.
CL,0,this.Id);AH.Hp(this.CL,1,this.AnimalId);AH.Acu(this.CL,6,this.Timestamp);AH.
AkV(this.CL,2,this.Feed);AH.AkV(this.CL,3,this.Appearance);AH.AkV(this.CL,4,this.
Respiratory);AH.AkV(this.CL,5,this.Faeces);AH.A$W(this.CL,7,this.Temperature);AH.
AU3(this.CL,8,this.BodyWeight);AH.AkV(this.CL,9,this.RatingTemperature);AH.OI(Jt
);if(AAj)this.OnSetId(AH.AbB());var RC=A._GetAutoObject(C.Device).An;var Ad=A._GetAutoObject(
C.Device).An.LZ(0,this.AnimalId);if(Ad>=0){var Cz=A._NewObject(C.Animal,0);Cz.E3(
Ad,RC);if(this.Temperature>0)Cz.Uz(A._GetAutoObject(C.Helper).A7Q(this));if((this.
Temperature>0)&&A._GetAutoObject(C.Helper).AGC(this)){var Os=A._GetAutoObject(C.
Helper).ARt(this);Cz.AkD(Os);Cz.An0(Os);}else if(this.Temperature>0){var Os=(A._GetAutoObject(
C.Helper).ARt(this)||(Cz.WorstAssessment===2))||(Cz.WorstAssessment===1);Cz.AkD(
Os);Cz.An0(Os);}else{var Os=A._GetAutoObject(C.Helper).ARt(this)||Cz.IsFever;Cz.
AkD(Os);Cz.An0(Os);}Cz.Ci(RC);}}}return HG;},Gs:function(){C.Row.Gs.call(this);this.
OnSetTimestamp(A._GetAutoObject(C.Helper).Dv());this.OnSetId(-1);},E7:function(){
C.Row.E7.call(this);this.OnSetTimestamp(0);this.OnSetId(0);this.OnSetAnimalId(0);
this.OnSetFeed(0);this.OnSetAppearance(0);this.OnSetRespiratory(0);this.OnSetFaeces(
0);this.OnSetTemperature(0);this.OnSetBodyWeight(0);this.OnSetRatingTemperature(
0);},OnSetTemperature:function(E){if(this.Temperature===E)return;this.Temperature=
E;A.abo([this,this.Bl6,this.OnSetTemperature],0);},OnSetId:function(E){if(this.Id===
E)return;this.Id=E;A.abo([this,this.Q7,this.OnSetId],0);},OnSetAnimalId:function(
E){if(this.AnimalId===E)return;this.AnimalId=E;A.abo([this,this.Blg,this.OnSetAnimalId
],0);},OnSetFeed:function(E){if(this.Feed===E)return;this.Feed=E;A.abo([this,this.
Blz,this.OnSetFeed],0);},OnSetAppearance:function(E){if(this.Appearance===E)return;
this.Appearance=E;A.abo([this,this.Blh,this.OnSetAppearance],0);},OnSetRespiratory:
function(E){if(this.Respiratory===E)return;this.Respiratory=E;A.abo([this,this.BlY
,this.OnSetRespiratory],0);},OnSetFaeces:function(E){if(this.Faeces===E)return;this.
Faeces=E;A.abo([this,this.Blx,this.OnSetFaeces],0);},OnSetTimestamp:function(E){
if(this.Timestamp===E)return;this.Timestamp=E;A.abo([this,this.A9L,this.OnSetTimestamp
],0);},Bpv:function(NB,A8){switch(NB){case 2:this.OnSetAppearance(A8);break;case
1:this.OnSetFeed(A8);break;case 4:this.OnSetFaeces(A8);break;case 3:this.OnSetRespiratory(
A8);break;default:;}},BjB:function(NB){switch(NB){case 2:return this.Appearance;
case 1:return this.Feed;case 4:return this.Faeces;case 3:return this.Respiratory;
default:return 0;}},OnSetRatingTemperature:function(E){if(this.RatingTemperature===
E)return;this.RatingTemperature=E;A.abo([this,this.BlW,this.OnSetRatingTemperature
],0);},OnSetBodyWeight:function(E){if(this.BodyWeight===E)return;this.BodyWeight=
E;A.abo([this,this.Bll,this.OnSetBodyWeight],0);},Bl6:function(){return this.Temperature;
},Q7:function(){return this.Id;},Blg:function(){return this.AnimalId;},Blz:function(
){return this.Feed;},Blh:function(){return this.Appearance;},BlY:function(){return this.
Respiratory;},Blx:function(){return this.Faeces;},A9L:function(){return this.Timestamp;
},BlW:function(){return this.RatingTemperature;},Bll:function(){return this.BodyWeight;
},_Init:function(aArg){C.Row._Init.call(this,aArg);this.__proto__=C.Rating;this.
TableId=1;var J_=this._variants();if(J_){this.K={};J_._Init.call(this,aArg);}},_Done:
function(){if(this.K)this.K._Done.call(this);this.__proto__=C.Row;C.Row._Done.call(
this);},_ReInit:function(){C.Row._ReInit.call(this);if(this.K)this.K._ReInit.call(
this);},_Mark:function(D){C.Row._Mark.call(this,D);if(this.K)this.K._Mark(D);},_variants:
function(){return A.acq.Rating._variants();},K:null,_className:"Device::Rating"};
C.HelperClass={UI:null,AhJ:null,AUW:null,AUX:null,W:null,Av:null,KN:null,S0:null
,Ad4:null,UP:null,UO:null,Aer:null,AfD:null,AfC:null,AfB:null,AfE:null,AgJ:null,
AG$:0,Init:function(aArg){A.pe([this,this.AUo],this);},AkG:function(E){this.UI=E;
A.abo([this,this.ArI,this.AkG],0);},AF1:function(E){this.AhJ=E;A.abo([this,this.
A9B,this.AF1],0);},BBF:function(G){switch(A._GetAutoObject(C.Device).ScanState){
case 2:{var AuG=A._GetAutoObject(C.Device).O0;if(!AuG)throw new Error(Ayj);switch(
AuG.TransponderType){case 1:this.AkG(AuG);break;case 2:this.ATU(AuG);break;case 3:
this.AF1(AuG);break;case 4:this.ATV(AuG);break;case 0:break;default:throw new Error(
Ayk);}}break;case 4:A._GetAutoObject(C.Device).AZ(11,true,A.jV,2000,null);break;
case 3:A._GetAutoObject(C.Device).AZ(12,true,A.jV,2000,null);break;case 0:case 1:
break;default:throw new Error(Atb);}},AkS:function(){this.AkG(null);this.ATU(null
);this.AF1(null);this.ATV(null);},AF6:function(E){if(this.K&&this.K.AF6)return this.
K.AF6.apply(this,arguments);else return C.HelperClass.Bbk.apply(this,arguments);
},Bbk:function(E){A.abo([this,this.U_,this.Vb],0);A._GetAutoObject(C.Device).SetSystemTime(
E);},Vb:function(Aq){this.AF6(Aq);},Dv:function(){if(this.K&&this.K.Dv)return this.
K.Dv.apply(this,arguments);else return C.HelperClass.Bbg.apply(this,arguments);}
,Bbg:function(){var B;return((B=(this.Av.BdX()|0))<0)?B+0x100000000:B;},U_:function(
){return this.Dv();},AsA:function(){A._GetAutoObject(C.Device).SX(-1);this.W.E7(
);A.we(this.W,0);},A76:function(IA){if(!IA){A.ab5("%s%U",Ayl,IA);return false;}var
Bd=A._GetAutoObject(C.Device).An.Aew(22,IA);return this.GT(Bd);},Am2:function(AoT
,AJm){switch(AoT){case 0:{var Apk=AJm;switch(Apk){case 14:return A.aaR(A.acf.Afy
);case 6:return Pc;case 4:return A.aaR(A.acf.Aej);case 28:return Aym;case 7:return A.
aaR(A.acf.Aft);case 2:return A.aaR(A.acf.P);case 0:return A.aaR(A.acf.GO);case 37:
return AWp;case 8:return A.aaR(A.acf.Alarm);case 9:return A.aaR(A.acf.ACB);case 38:
return A.aaR(A.acf.AOc);case 11:return A.aaR(A.acf.Fever);case 27:return AWq;case
10:return A.aaR(A.acf.Bo8);case 12:return A.aaR(A.acf.Asm);case 29:return A.aaR(
A.acf.ARN);case 18:return A.aaR(A.acf.Weighing);case 17:return AWr;case 5:return A.
aaR(A.acf.Temperature);case 3:return AWs;case 26:return A.aaR(A.acf.Uq);case 35:
return A.aaR(A.acf.Uq)+AHF;case 36:return AHG;case 15:return AfJ;case 24:return Aor;
case 20:return AWt;case 30:return AHH;case 21:return Alh;case 19:return AHI;case
22:return A.aaR(A.acf.Transponder);case 1:return A.aaR(A.acf.GI);case 34:return A.
aaR(A.acf.Jm);case 13:return AHJ;case 31:return AWu;default:{A.ab5("%s",AWv+Apk.
toFixed());return AHK+Apk.toFixed();}}}case 1:{var Apk=AJm;switch(Apk){case 1:return A.
aaR(A.acf.Animal);case 3:return A.aaR(A.acf.AGB);case 8:return A.aaR(A.acf.AfA);
case 5:return A.aaR(A.acf.AGD);case 2:return A.aaR(A.acf.Feed);case 4:return A.aaR(
A.acf.AGE);case 7:return A.aaR(A.acf.Temperature);case 6:return A.aaR(A.acf.Bs);
default:{A.ab5("%s",AWw+Apk.toFixed());return AHK+Apk.toFixed();}}}default:A.ab5(
"%s",(AcU+AoT.toFixed())+AWx);}return A.jV;},A7e:function(AoT,AI){var result=A.jV;
if(!!AI){result=this.Am2(AoT,AI.EJ);result=((result+Oj)+A._GetAutoObject(C.Converter
).A6Z(AI.Operator))+Oj;if(!!(C.Int32FilterCriterion.isPrototypeOf(AI)?AI:null))result=
result+(C.Int32FilterCriterion.isPrototypeOf(AI)?AI:null).A5.toFixed();else if(!
!(C.UInt32FilterCriterion.isPrototypeOf(AI)?AI:null))result=result+(C.UInt32FilterCriterion.
isPrototypeOf(AI)?AI:null).A5.toFixed();else if(!!(C.StringFilterCriterion.isPrototypeOf(
AI)?AI:null))result=result+(C.StringFilterCriterion.isPrototypeOf(AI)?AI:null).A5;
else if(!!(C.BoolFilterCriterion.isPrototypeOf(AI)?AI:null)){if((C.BoolFilterCriterion.
isPrototypeOf(AI)?AI:null).A5)result=this.Am2(AoT,AI.EJ);else result=A.jV;}else if(
!!(C.GenderFilterCriterion.isPrototypeOf(AI)?AI:null)){var Bz2=A._NewObject(C.GenderToString
,0);result=result+Bz2.LA((C.GenderFilterCriterion.isPrototypeOf(AI)?AI:null).A5);
}else if(!!(C.AnimalTypeFilterCriterion.isPrototypeOf(AI)?AI:null)){var ByX=A._NewObject(
C.AnimalTypeToString,0);result=result+ByX.LA((C.AnimalTypeFilterCriterion.isPrototypeOf(
AI)?AI:null).A5);}else if(!!(C.AssessmentFilterCriterion.isPrototypeOf(AI)?AI:null
)){var By0=A._NewObject(C.AssesmentToString,0);result=result+By0.LA((C.AssessmentFilterCriterion.
isPrototypeOf(AI)?AI:null).A5);}else if(!!(C.UInt64FilterCriterion.isPrototypeOf(
AI)?AI:null))result=result+(C.UInt64FilterCriterion.isPrototypeOf(AI)?AI:null).A5.
toFixed();else if(!!(C.UInt64PartialFilterCriterion.isPrototypeOf(AI)?AI:null)){
var Aw=(C.UInt64PartialFilterCriterion.isPrototypeOf(AI)?AI:null);result=(((((result+
Aw.A5)+AWy)+Aw.OK.toFixed())+Pb)+Aw.Zs.toFixed())+Alg;}else if(!!(C.WhereAboutsFilterCriterion.
isPrototypeOf(AI)?AI:null)){var BDp=A._NewObject(C.WhereAboutsToString,0);result=
result+BDp.LA((C.WhereAboutsFilterCriterion.isPrototypeOf(AI)?AI:null).A5);}else
A.ab5("%s",AWz);}return result;},MO:function(aString,BcI,Bya){var result=A.jV;var
Bgu=false;var index=0;var Byc=BcI.length;while(!Bgu){var A4k=aString.indexOf(BcI
,index);if(A4k!==-1){result=(result+A.abW(aString,index,A4k-index))+Bya;index=A4k+
Byc;}else{var BcN=aString.length;if(index<BcN)result=result+A.ab2(aString,BcN-index
);Bgu=true;}}return result;},ATU:function(E){this.AUW=E;A.abo([this,this.Bl0,this.
ATU],0);},ATV:function(E){this.AUX=E;A.abo([this,this.Bl1,this.ATV],0);},Bel:function(
){return((A._GetAutoObject(C.Device).ScanState===2)&&!!A._GetAutoObject(C.Device
).O0)&&(A._GetAutoObject(C.Device).O0.TransponderType===1);},AaO:function(G){if(
!this.W.Ana()&&!!this.W.Id)this.BkD(this.W.Id);},ADe:function(Eo){return A._GetAutoObject(
C.Helper).UP.Get(Eo);},A6$:function(Eo){return A._GetAutoObject(C.Helper).UO.Get(
Eo);},A7k:function(){var O=0;var min=32767;while(O<A._GetAutoObject(C.Helper).UP.
MN){if(A._GetAutoObject(C.Helper).UP.Get(O)<min)min=A._GetAutoObject(C.Helper).UP.
Get(O);O=O+1;}return min;},AUo:function(G){A.zV([this,this.AaO],A._GetAutoObject(
C.Device).An,0);},ARt:function(D3){if(!D3)return false;var Bke=(((this.AAf(D3.Faeces
)||this.AAf(D3.Feed))||this.AAf(D3.Appearance))||this.AAf(D3.Respiratory))||this.
AAf(D3.RatingTemperature);return Bke||this.A7Q(D3);},AAf:function(Bcm){return(Bcm===
2)||(Bcm===1);},A7Q:function(D3){return!!D3&&(D3.Temperature>A._GetAutoObject(C.
Helper).ADe(A._GetAutoObject(C.Helper).W.AnimalType));},GT:function(Md){var A3d=
false;if(Md>=0){if(Md!==this.W.CL)A._GetAutoObject(C.Device).SX(Md);A3d=this.W.E3(
Md,A._GetAutoObject(C.Device).An);if(A3d)A.we(this.W,0);}else{A._GetAutoObject(C.
Device).SX(-1);this.W.E7();A.we(this.W,0);}return A3d;},AhS:function(Ah_){var B;
return(((B=(this.Av.BdX()|0))<0)?B+0x100000000:B)-this.AmO(Ah_);},AsP:function(){
var B;A.pe([B=this.KN,B.An4],this);},BCQ:function(G){A._GetAutoObject(C.Device).
AZ(16,false,AHL,0,null);A._GetAutoObject(C.Device).AZ(5,true,A.jV,0,null);},BoB:
function(G){var Ar=(C.PopupContext.isPrototypeOf(G)?G:null);if(!!Ar&&(Ar.PopupState===
5))this.AsP();},Bol:function(E){if(this.AG$===E)return;this.AG$=E;A._GetAutoObject(
C.Device).AZ(16,true,this.AG$.toFixed(),0,[this,this.BoB]);},Mf:function(BxM,Byq
){var D8;var Bg2=A._NewObject(A.Core.An_,0);var GG=A._NewObject(A.Core.Bs,0);var
K$=A._NewObject(A.Core.Bs,0);GG.Initialize(BxM);K$.Initialize(Byq);D8=K$.BiI(GG);
Bg2.Initialize2(0,D8.ADP,D8.AEB,D8.AGP);if(GG.J(Bg2).GL===GG.GL)return D8.Kq;else
return D8.Kq+1;},BCS:function(G){A._GetAutoObject(C.Device).UpdateMeasureState(3
);},ALk:function(G){var BhS=A._GetAutoObject(C.Helper).ADe(A._GetAutoObject(C.Helper
).W.AnimalType);var BhP=A._GetAutoObject(C.Helper).A6$(A._GetAutoObject(C.Helper
).W.AnimalType);var Agu=A.abz(BhS-100,BhP+100);this.BdB(Agu);},AmO:function(Ah_){
return Ah_*86400;},Ak9:function(Ka){var B;if(!!Ka&&(Ka<(((B=Math.trunc(Math.pow(
10,A._GetAutoObject(C.Device).AF)))<0)?B+0x10000000000000000:B)))return-1;return A.
_GetAutoObject(C.Helper).V6(Ka,A._GetAutoObject(C.Device).AF&0xFF,A._GetAutoObject(
C.Device).A3&0xFF)|0;},AGC:function(D3){if(!D3)return false;return((!!D3.Faeces||
!!D3.Feed)||!!D3.Appearance)||!!D3.Respiratory;},AhX:function(A1q,BcP,AJn,Eo){var
B;var ApY;if((A1q<650000)&&(BcP<this.Dv())){var Bdb=this.AgJ.AvA(Eo);var Bda=0;if(
Bdb>=0)Bda=this.AfB.Get(Bdb);ApY=A1q+(this.Mf(BcP,this.Dv())*Bda);if(AJn>0){var A2l=
this.ApX(AJn);ApY=(Math.trunc(((((B=ApY)<0)?B+0x10000000000000000:B)+Math.trunc(
A2l/2))/A2l)*A2l)|0;}if(ApY>650000)ApY=650000;}else ApY=A1q;return ApY;},ADs:function(
D3){var Aqk=A._GetAutoObject(C.Converter).Ad5(D3.Faeces);if(Aqk<A._GetAutoObject(
C.Converter).Ad5(D3.Feed))Aqk=A._GetAutoObject(C.Converter).Ad5(D3.Feed);if(Aqk<
A._GetAutoObject(C.Converter).Ad5(D3.Appearance))Aqk=A._GetAutoObject(C.Converter
).Ad5(D3.Appearance);if(Aqk<A._GetAutoObject(C.Converter).Ad5(D3.Respiratory))Aqk=
A._GetAutoObject(C.Converter).Ad5(D3.Respiratory);return A._GetAutoObject(C.Converter
).Ban(Aqk);},AxE:function(D3,NA){if(!!D3){D3.OnSetFaeces(NA);D3.OnSetFeed(NA);D3.
OnSetAppearance(NA);D3.OnSetRespiratory(NA);}},Bjz:function(AH,AJt,Ac$,Xx,AfO){if(
!AH)throw new Error(Atc);var Bf=A._NewObject(C.Filter,0);var ApL=AH.Filter;var On=
A._NewObject(C.Int32FilterCriterion,0);On.Operator=0;On.EJ=1;On.A5=Ac$;Bf.CX(On);
if(Xx>0){var Oz=A._NewObject(C.UInt32FilterCriterion,0);Oz.Operator=2;Oz.EJ=6;Oz.
A5=Xx;Bf.CX(Oz);}if(AfO>0){var Or=A._NewObject(C.UInt32FilterCriterion,0);Or.Operator=
3;Or.EJ=6;Or.A5=AfO;Bf.CX(Or);}AH.Bk(Bf);var Me=A._NewObject(C.Int32ArrayWrapper
,0);Me.ZG(6);var O;for(O=0;O<Me.MN;O=O+1)Me.Set(O,0);var Vi;for(O=0;O<AH.B8();O=
O+1){Vi=AH.Ja(O,AJt);Me.Set(Vi,Me.Get(Vi)+1);}AH.Bk(ApL);return Me;},ZY:function(
Ah_){var B;var GG=A._NewObject(A.Core.Bs,0);var Bg1=A._NewObject(A.Core.An_,0);GG.
Initialize(A._GetAutoObject(C.Converter).AhU());Bg1.Initialize2(Ah_,0,0,0);GG=GG.
BpX(Bg1);return((B=(GG.JY()|0))<0)?B+0x100000000:B;},A7a:function(AH,Ac$,AfO,Xx){
if(!AH)throw new Error(Atc);var Bf=A._NewObject(C.Filter,0);var ApL=AH.Filter;var
On=A._NewObject(C.Int32FilterCriterion,0);On.Operator=0;On.EJ=1;On.A5=Ac$;Bf.CX(
On);if(Xx>0){var Oz=A._NewObject(C.UInt32FilterCriterion,0);Oz.Operator=2;Oz.EJ=
6;Oz.A5=Xx;Bf.CX(Oz);}if(AfO>0){var Or=A._NewObject(C.UInt32FilterCriterion,0);Or.
Operator=3;Or.EJ=6;Or.A5=AfO;Bf.CX(Or);}AH.Bk(Bf);var Me=A._NewObject(C.Int32ArrayWrapper
,0);Me.ZG(6);var O;for(O=0;O<Me.MN;O=O+1)Me.Set(O,0);var Ao$=A._NewObject(C.Rating
,0);var A2d;for(O=0;O<AH.B8();O=O+1){Ao$.E3(O,AH);if(A._GetAutoObject(C.Helper).
AGC(Ao$)){A2d=A._GetAutoObject(C.Helper).ADs(Ao$);Me.Set(A2d,Me.Get(A2d)+1);}}AH.
Bk(ApL);return Me;},A2M:function(AH,Ac$,Bzw){if(!AH)throw new Error(Atc);var Bf=
A._NewObject(C.Filter,0);var ApL=AH.Filter;var On=A._NewObject(C.Int32FilterCriterion
,0);On.Operator=0;On.EJ=1;On.A5=Ac$;Bf.CX(On);var Xx=A._GetAutoObject(C.Converter
).AhU()+A._GetAutoObject(C.Helper).AmO(Bzw);var AfO=Xx+A._GetAutoObject(C.Helper
).AmO(1);var Oz=A._NewObject(C.UInt32FilterCriterion,0);Oz.Operator=2;Oz.EJ=6;Oz.
A5=Xx;Bf.CX(Oz);var Or=A._NewObject(C.UInt32FilterCriterion,0);Or.Operator=3;Or.
EJ=6;Or.A5=AfO;Bf.CX(Or);AH.Bk(Bf);var Ao$=A._NewObject(C.Rating,0);var Vi;var LW=
0;var O;for(O=0;O<AH.B8();O=O+1){Ao$.E3(O,AH);if(A._GetAutoObject(C.Helper).AGC(
Ao$)){Vi=A._GetAutoObject(C.Helper).ADs(Ao$);if(A._GetAutoObject(C.Converter).Ad5(
Vi)>A._GetAutoObject(C.Converter).Ad5(LW))LW=Vi;}}AH.Bk(ApL);return LW;},Am$:function(
){if((A._GetAutoObject(C.Device).WeightRecordingScope===2)||(A._GetAutoObject(C.
Device).WeightRecordingScope===1))return true;else return false;},A7T:function(){
if((A._GetAutoObject(C.Device).WeightRecordingScope===2)||!A._GetAutoObject(C.Device
).WeightRecordingScope)return true;else return false;},BjA:function(AH,AJt,Ac$,Xx
,AfO){if(!AH)throw new Error(Atc);var Bf=A._NewObject(C.Filter,0);var ApL=AH.Filter;
var On=A._NewObject(C.Int32FilterCriterion,0);On.Operator=0;On.EJ=1;On.A5=Ac$;Bf.
CX(On);if(Xx>0){var Oz=A._NewObject(C.UInt32FilterCriterion,0);Oz.Operator=2;Oz.
EJ=6;Oz.A5=Xx;Bf.CX(Oz);}if(AfO>0){var Or=A._NewObject(C.UInt32FilterCriterion,0
);Or.Operator=3;Or.EJ=6;Or.A5=AfO;Bf.CX(Or);}AH.Bk(Bf);var Me=A._NewObject(C.Int32ArrayWrapper
,0);Me.ZG(6);var O;for(O=0;O<Me.MN;O=O+1)Me.Set(O,0);if(AH.B8()>0){var Vi=AH.Ja(
0,AJt);var Ap3=AH.Hw(O,6);var Ac=A._NewObject(A.Core.Bs,0);Ac.Initialize(Ap3);var
Aqj=Vi;var AKm=A._NewObject(A.Core.Bs,0);AKm.Initialize(Ac.JY());for(O=1;O<AH.B8(
);O=O+1){Vi=AH.Ja(O,AJt);Ap3=AH.Hw(O,6);Ac.Initialize(Ap3);if((Ac.Ab8()!==AKm.Ab8(
))||(Ac.Year!==AKm.Year)){Me.Set(Aqj,Me.Get(Aqj)+1);AKm.Initialize(Ac.JY());Aqj=
Vi;}else if(!!Vi&&(Vi<Aqj))Aqj=Vi;}Me.Set(Aqj,Me.Get(Aqj)+1);}AH.Bk(ApL);return Me;
},Aqy:function(L$){var B;var GG=A._NewObject(A.Core.Bs,0);GG.Initialize(L$);GG.AnH(
0);GG.AnK(0);GG.AnN(0);return((B=(GG.JY()|0))<0)?B+0x100000000:B;},AOp:function(
L$){var B;L$=L$+86400;var GG=A._NewObject(A.Core.Bs,0);GG.Initialize(L$);GG.AnH(
0);GG.AnK(0);GG.AnN(0);return((B=(GG.JY()|0))<0)?B+0x100000000:B;},BjC:function(
BCO,BzI,Amm,AlL){var Bdw=A._GetAutoObject(C.Helper).Mf(BCO,BzI);if(Bdw>0)return((
AlL-Amm)/Bdw)|0;return 0;},Bqy:function(BxN,Byr){var GG=A._NewObject(A.Core.Bs,0
);var K$=A._NewObject(A.Core.Bs,0);GG.Initialize(BxN);K$.Initialize(Byr);return(
GG.Year===K$.Year)&&(GG.Ab8()===K$.Ab8());},A7g:function(){var Bf=A._GetAutoObject(
C.Helper).MC();var BeA=A._NewObject(C.UInt32FilterCriterion,0);var ByA=A._GetAutoObject(
C.Helper).ZY(A._GetAutoObject(C.Device).Aq0)-1;BeA.Initialize(28,2,ByA,true);Bf.
CX(BeA);var Ve=A._NewObject(C.AnimalTypeFilterCriterion,0);Ve.Initialize(14,0,1,
true);Bf.CX(Ve);if(A._GetAutoObject(C.Device).Aq1){var AAv=A._NewObject(C.UInt32FilterCriterion
,0);var A29=A._GetAutoObject(C.Helper).Dv()-21600;AAv.Initialize(30,3,A29,true);
Bf.CX(AAv);}return Bf;},Bpd:function(){var Jt=A._GetAutoObject(C.Device).An.OG();
if(Jt<=0)A.ab5("%s",Xq);else{A._GetAutoObject(C.Device).An.E7();A._GetAutoObject(
C.Device).An.OI(Jt);}Jt=A._GetAutoObject(C.Device).AgB.OG();if(Jt<=0)A.ab5("%s",
Xq);else{A._GetAutoObject(C.Device).AgB.E7();A._GetAutoObject(C.Device).AgB.OI(Jt
);}Jt=A._GetAutoObject(C.Device).Bt.OG();if(Jt<=0)A.ab5("%s",Xq);else{A._GetAutoObject(
C.Device).Bt.E7();A._GetAutoObject(C.Device).Bt.OI(Jt);}Jt=A._GetAutoObject(C.Device
).Pw.OG();if(Jt<=0)A.ab5("%s",Xq);else{A._GetAutoObject(C.Device).Pw.E7();A._GetAutoObject(
C.Device).Pw.OI(Jt);}},BkD:function(Ac$){var Bd=A._GetAutoObject(C.Device).An.LZ(
0,Ac$);return this.GT(Bd);},ARB:function(IA){var AiC=A._GetAutoObject(C.Device).
An.Aep(22,IA);return AiC;},ADj:function(){var Bf=A._GetAutoObject(C.Helper).MC();
var Aje=A._NewObject(C.UInt64FilterCriterion,0);Aje.Initialize(22,0,0,true);Bf.CX(
Aje);return Bf;},AOY:function(Ao4,BzF,Qj){var Aaw=-1;switch(Ao4){case 2:Aaw=30;break;
case 3:Aaw=31;break;case 10:Aaw=19;break;default:A.ab5("%s%e",U6,Ao4);}if(Aaw<0)
return null;var Adn=A._NewObject(C.UInt32FilterCriterion,0);Adn.Initialize(Aaw,3
,A._GetAutoObject(C.Helper).Dv()-BzF,Qj);return Adn;},Bo$:function(aFilter){var AI=
aFilter.DM(30,3);if(!!AI)aFilter.Nw(AI);AI=aFilter.DM(31,3);if(!!AI)aFilter.Nw(AI
);AI=aFilter.DM(19,3);if(!!AI)aFilter.Nw(AI);},A16:function(AfY,Ay$,AH){if(AH.Ll(
))return 5;if(AfY.VisualId<=0)switch(Ay$){case 0:if(!AfY.NaisId)return 1;break;case
1:if(!AfY.TransponderId)return 1;break;case 3:case 2:case 5:case 4:return 1;default:
throw new Error(AHM+Ay$.toFixed());}if((!AfY.NaisId&&!AfY.TransponderId)&&A._GetAutoObject(
C.Device).An.AjM(1,AfY.VisualId))return 2;if(!!AfY.NaisId&&A._GetAutoObject(C.Helper
).ARy(AfY.NaisId))return 3;if(!!AfY.TransponderId&&A._GetAutoObject(C.Helper).ARB(
AfY.TransponderId))return 4;return 0;},Aqp:function(En){En.EC(A._GetAutoObject(C.
Device).AnimalType);En.N7(A._GetAutoObject(C.Device).Breed);En.Q9(A._GetAutoObject(
C.Helper).Dv()-A._GetAutoObject(C.Helper).AmO(A._GetAutoObject(C.Device).AdW));En.
J0(A._GetAutoObject(C.Device).Gender);En.Nt(A._GetAutoObject(C.Device).WhereAbouts
);},AMA:function(Rv,En){var FK=0;switch(Rv){case 0:FK=A._GetAutoObject(C.Helper).
Ak9(En.NaisId);break;case 1:FK=A._GetAutoObject(C.Helper).Ak9(En.TransponderId);
break;case 3:FK=A._GetAutoObject(C.Device).Arb;break;case 2:FK=A._GetAutoObject(
C.Device).Arc;break;case 4:case 5:FK=A._GetAutoObject(C.Device).AjW;break;default:
throw new Error(AHN+Rv.toFixed());}return FK;},Bau:function(Als,Ma,Bcr,Bxy,Bx7){
var B;var Qx=null;var XI=null;switch(Als){case 0:{Qx=[B=A._GetAutoObject(C.Device
),B.ASY,B.A0N];XI=[B=A._GetAutoObject(C.Device),B.Aws,B.Ay5];}break;case 1:switch(
Ma){case 1:{Qx=[B=A._GetAutoObject(C.Device),B.A9q,B.BbS];XI=[B=A._GetAutoObject(
C.Device),B.Awq,B.Ay3];}break;case 0:{Qx=[B=A._GetAutoObject(C.Device),B.A9r,B.BbT
];XI=[B=A._GetAutoObject(C.Device),B.Awr,B.Ay4];}break;case 2:{Qx=[B=A._GetAutoObject(
C.Device),B.ASY,B.A0N];XI=[B=A._GetAutoObject(C.Device),B.Aws,B.Ay5];}break;default:
throw new Error(Ayn+Ma.toFixed());}break;default:throw new Error(AHO+Als.toFixed(
));}if(!!Qx&&!!XI){Qx[2].call(Qx[0],Bcr);if(Bcr>0){if((XI[1].call(XI[0])>0)&&(Bxy<
Bx7))Qx[2].call(Qx[0],Qx[1].call(Qx[0])+XI[1].call(XI[0]));else if(XI[1].call(XI[
0])<0)Qx[2].call(Qx[0],Qx[1].call(Qx[0])+XI[1].call(XI[0]));}return Qx[1].call(Qx[
0]);}return 0;},AVX:function(En,Als,BxG){if(!En||(BxG===true))return;switch(Als){
case 0:En.Nr(A._GetAutoObject(C.Device).Av$);break;case 1:switch(En.Gender){case
0:En.Nr(A._GetAutoObject(C.Device).AEE);break;case 1:En.Nr(A._GetAutoObject(C.Device
).AED);break;case 2:En.Nr(A._GetAutoObject(C.Device).Av$);break;default:throw new
Error(Ayn+En.Gender.toFixed());}break;default:throw new Error(AHO+Als.toFixed());
}},Bkf:function(Rv,En){var result=false;switch(Rv){case 0:result=!!En.NaisId;break;
case 1:result=!!En.TransponderId;break;case 3:case 2:case 4:case 5:result=false;
break;default:throw new Error(AHN+Rv.toFixed());}return result;},AKz:function(En
,Bck,Ay$,AtK,AfR){switch(Bck){case 2:if(AtK<=0)A._GetAutoObject(C.Device).AZ(21,
true,En.VisualId.toFixed(),0,AfR);else A._GetAutoObject(C.Device).AZ(48,true,(En.
VisualId.toFixed()+Ayo)+AtK.toFixed(),0,AfR);break;case 3:if(AtK<=0)A._GetAutoObject(
C.Device).AZ(21,true,A._GetAutoObject(C.Converter).Rm(En.NaisId),0,AfR);else A._GetAutoObject(
C.Device).AZ(48,true,(A._GetAutoObject(C.Converter).Rm(En.NaisId)+Ayo)+AtK.toFixed(
),0,AfR);break;case 4:if(AtK<=0)A._GetAutoObject(C.Device).AZ(25,true,A._GetAutoObject(
C.Converter).Rm(En.TransponderId),0,AfR);else A._GetAutoObject(C.Device).AZ(47,true
,(A._GetAutoObject(C.Converter).Rm(En.TransponderId)+Ayo)+AtK.toFixed(),0,AfR);break;
case 1:switch(Ay$){case 1:A._GetAutoObject(C.Device).AZ(42,true,A.jV,0,AfR);break;
case 0:A._GetAutoObject(C.Device).AZ(43,true,A.jV,0,AfR);break;case 3:case 2:case
5:case 4:A._GetAutoObject(C.Device).AZ(22,true,A.jV,0,AfR);break;default:throw new
Error(AHM+Ay$.toFixed());}break;case 5:A._GetAutoObject(C.Device).AZ(41,true,A._GetAutoObject(
C.Device).An.HM().toFixed(),0,AfR);break;case 0:break;default:throw new Error(AWA+
Bck.toFixed());}},Bd1:function(Bcy,Ma){var B;var AAz=null;switch(Bcy){case 0:AAz=[
B=A._GetAutoObject(C.Device),B.Aws,B.Ay5];break;case 1:switch(Ma){case 1:AAz=[B=
A._GetAutoObject(C.Device),B.Awq,B.Ay3];break;case 0:AAz=[B=A._GetAutoObject(C.Device
),B.Awr,B.Ay4];break;case 2:AAz=[B=A._GetAutoObject(C.Device),B.Aws,B.Ay5];break;
default:throw new Error(Ayn+Ma.toFixed());}break;default:throw new Error(AWB+Bcy.
toFixed());}return AAz;},A7s:function(Qm,Byi){var AaY=A._NewObject(A.Core.Bs,0);
AaY.Initialize(Qm);var ABT=AaY.Year;var Bd=A._GetAutoObject(C.Device).Pw.LZ(0,ABT
);var Vh=A._NewObject(C.CalfDeregistrations,0);if(Bd<0){if(A._GetAutoObject(C.Device
).Pw.Ll())A._GetAutoObject(C.Device).AZ(51,true,A._GetAutoObject(C.Device).Pw.HM(
).toFixed(),0,null);else{Vh.Gs();Vh.AkI(ABT);}}else Vh.E3(Bd,A._GetAutoObject(C.
Device).Pw);Vh.AwK(Vh.Deregistrations+1);if(Byi)Vh.AwJ(Vh.Deaths+1);Vh.Ci(A._GetAutoObject(
C.Device).Pw);},AMy:function(LW,AlV,AlM){var AKW=0;if((AlV&&(AlM===1))||(LW===1)
)AKW=1;else if((AlV&&(AlM===2))||(LW===2))AKW=2;else if(!!LW&&(LW!==5))AKW=LW;return AKW;
},BdB:function(Byz){var B;if(A._GetAutoObject(C.Device).MeasureState===1){this.S0.
Cx=A._GetAutoObject(C.Device).AcM;this.S0.B3=Byz;this.S0.An2(this);}},ADg:function(
){var Bf=this.AOX();var Bep=A._NewObject(C.BoolFilterCriterion,0);Bep.Initialize(
38,0,true,true);Bf.CX(Bep);return Bf;},A69:function(Eh){var Bf=A._GetAutoObject(
C.Helper).MC();if(A._GetAutoObject(C.Device).Aql){var A2P=A._GetAutoObject(C.Helper
).AOY(Eh,21600,true);Bf.CX(A2P);}return Bf;},A7m:function(){var Bf=A._GetAutoObject(
C.Helper).MC();var BeR=A._NewObject(C.UInt64FilterCriterion,0);BeR.Initialize(26
,0,0,true);Bf.CX(BeR);return Bf;},A7p:function(){var B;var Bf=A._GetAutoObject(C.
Helper).MC();var AAF=(C.WhereAboutsFilterCriterion.isPrototypeOf(B=Bf.DM(34,3))?
B:null);if(!!AAF)Bf.Nw(AAF);var Bgb=A._NewObject(C.BoolFilterCriterion,0);Bgb.Initialize(
37,0,true,true);Bf.CX(Bgb);return Bf;},V6:function(A8,AtD,A1r){var B;A8=Math.trunc(
A8/this.ApX(AtD));A8%=this.ApX(A1r);return A8;},ApX:function(Bcz){switch(Bcz){case
0:return 1;case 1:return 10;case 2:return 100;case 3:return 1000;case 4:return 10000;
case 5:return 100000;case 6:return 1000000;case 7:return 10000000;case 8:return 100000000;
case 9:return 1000000000;case 10:return 10000000000;case 11:return 100000000000;
case 12:return 1000000000000;case 13:return 10000000000000;case 14:return 100000000000000;
case 15:return 1000000000000000;default:throw new Error(AWC+Bcz.toFixed());}},MC:
function(){var Bf=A._NewObject(C.Filter,0);var Bgy=A._NewObject(C.BoolFilterCriterion
,0);Bgy.Initialize(10,0,true,true);Bf.CX(Bgy);var AAF=A._NewObject(C.WhereAboutsFilterCriterion
,0);AAF.Initialize(34,3,6,true);Bf.CX(AAF);return Bf;},Aro:function(aFilter){return!
this.ADk(aFilter);},ADk:function(aFilter){var Jp=0;var Aw=aFilter.AOZ();while(!!
Aw){if(Aw.YR===false)Jp++;Aw=aFilter.AO4(Aw);}return Jp;},AOX:function(){var Bf=
this.MC();var Ve=A._NewObject(C.AnimalTypeFilterCriterion,0);Ve.Initialize(14,0,
1,true);Bf.CX(Ve);return Bf;},ADp:function(){var B;var A4T;var Kc=this.BjT();A4T=(((
B=A._GetAutoObject(C.Converter).AqI(Kc))<0)?B+0x10000000000000000:B)*this.ApX(12
);if((Kc===10)&&(A._GetAutoObject(C.Device).OZ>0)){var Bz3=A._GetAutoObject(C.Helper
).V6(A._GetAutoObject(C.Device).OZ,10,2)*this.ApX(8);A4T+=Bz3;}return A4T;},BjT:
function(){var Kc=0;if(A._GetAutoObject(C.Device).OZ>0)Kc=A._GetAutoObject(C.Converter
).S9(A._GetAutoObject(C.Device).OZ);if(!Kc)Kc=A._GetAutoObject(C.Converter).A7W(
A._GetAutoObject(C.Device).Language);return Kc;},ARy:function(Qk){var AiC=A._GetAutoObject(
C.Device).An.Aep(26,Qk);return AiC;},Aj8:function(AfS){switch(AfS){case 0:case 1:
case 2:case 3:case 4:case 5:return false;case 6:case 7:case 8:case 9:case 10:return true;
default:throw new Error(AWD+AfS.toFixed());}},BhO:function(Rv,En){var FK=0;switch(
Rv){case 1:FK=A._GetAutoObject(C.Helper).Ak9(En.TransponderId);break;case 0:if(!
A._GetAutoObject(C.Device).EartagNrAssignmentMode)FK=A._GetAutoObject(C.Device).
AjW;else switch(En.Gender){case 0:FK=A._GetAutoObject(C.Device).Arc;break;case 1:
FK=A._GetAutoObject(C.Device).Arb;break;case 2:FK=A._GetAutoObject(C.Device).AjW;
break;default:throw new Error(AHP+En.Gender.toFixed());}break;default:throw new Error(
AWE+Rv.toFixed());}return FK;},Bjp:function(){var B;var AAb=(((((((A.aaR(A.acf.AhM
)+A.aaR(A.acf.Colon))+MS)+A._GetAutoObject(C.Device).AhM)+Ayp)+A.aaR(A.acf.BoT))+
A.aaR(A.acf.Colon))+MS)+A._GetAutoObject(A.acj.KR).Bjn(((B=A._GetAutoObject(C.Device
).Q4.Timestamp)<0)?B+0x100000000:B);return AAb;},Bjq:function(){var B;var AAb=((((((((((((((((((((((((((((
AWF+A._GetAutoObject(C.Device).R7.AEv.toFixed())+LB)+A._GetAutoObject(C.Device).
R7.AEA.toFixed())+LB)+A._GetAutoObject(C.Device).R7.AGK.toFixed())+Pb)+A._GetAutoObject(
C.Device).R7.ACI)+Pb)+A._GetAutoObject(A.acj.KR).AjO(((B=A._GetAutoObject(C.Device
).R7.Timestamp)<0)?B+0x100000000:B))+MS)+AWG)+A._GetAutoObject(C.Device).SG.AEv.
toFixed())+LB)+A._GetAutoObject(C.Device).SG.AEA.toFixed())+LB)+A._GetAutoObject(
C.Device).SG.AGK.toFixed())+Pb)+A._GetAutoObject(C.Device).SG.ACI)+Pb)+A._GetAutoObject(
A.acj.KR).AjO(((B=A._GetAutoObject(C.Device).SG.Timestamp)<0)?B+0x100000000:B))+
MS)+AWH)+A._GetAutoObject(C.Helper).BjW())+Pb)+A._GetAutoObject(C.Device).GetCommitHash(
))+Pb)+A._GetAutoObject(C.Device).GetCommitCount().toFixed())+Pb)+A._GetAutoObject(
A.acj.KR).AjO(A._GetAutoObject(C.Device).GetCommitEpoch());return AAb;},Bjo:function(
){var B;var AAb=(((((((((((((((((((((AWI+A._GetAutoObject(C.Device).Q4.AR0.toFixed(
))+LB)+A._GetAutoObject(C.Device).Q4.AR1.toFixed())+LB)+A._GetAutoObject(C.Device
).Q4.ARZ.toFixed())+MS)+A.aaR(A.acf.A62))+A.aaR(A.acf.Colon))+Oj)+A._GetAutoObject(
A.acj.KR).AjO(((B=A._GetAutoObject(C.Device).Q4.Timestamp)<0)?B+0x100000000:B))+
Ayp)+AWJ)+A._GetAutoObject(C.Device).S6.AVN.toFixed())+LB)+A._GetAutoObject(C.Device
).S6.AVO.toFixed())+LB)+A._GetAutoObject(C.Device).S6.AVM.toFixed())+MS)+A.aaR(A.
acf.A62))+A.aaR(A.acf.Colon))+Oj)+A._GetAutoObject(A.acj.KR).AjO(((B=A._GetAutoObject(
C.Device).S6.Timestamp)<0)?B+0x100000000:B);return AAb;},A7n:function(A1r){var B;
var O;var ABc=A.jV;for(O=1;O<=A1r;O=O+1)if(!!A.abz(0,2))ABc=ABc+String.fromCharCode(
A.abz(97,104)&0xFFFF);else ABc=ABc+String.fromCharCode(A.abz(48,57)&0xFFFF);return ABc;
},AbA:function(Eo){var Azt=0;if(Eo===1)Eo=0;var Bdg=this.AgJ.AvA(Eo);if(Bdg>=0)Azt=
this.AfE.Get(Bdg);return Azt;},ADr:function(Eo){var FX=0;var ABR=this.AgJ.AvA(Eo
);if(ABR>=0)FX=this.AfD.Get(ABR);return FX;},ADq:function(Eo){var FX=0;var ABR=this.
AgJ.AvA(Eo);if(ABR>=0)FX=this.AfC.Get(ABR);return FX;},A7d:function(){var Bf=this.
MC();var Ve=A._NewObject(C.AnimalTypeFilterCriterion,0);Ve.Initialize(14,0,A._GetAutoObject(
C.Device).AC1,true);Bf.CX(Ve);return Bf;},ARC:function(Ka){var BN=Math.trunc(Ka/
1000000000000)|0;if(!BN)return 0;else if(BN>=900)return 1;else if(!A._GetAutoObject(
C.Converter).ANP(BN))return 2;else return 3;},A7r:function(BAJ){var Bf=A._GetAutoObject(
C.Helper).ADj();var AfX=A._GetAutoObject(C.Helper).A6_(3,BAJ);AfX.YR=true;Bf.CX(
AfX);return Bf;},A6_:function(Eb,Bcj){var Aw=A._NewObject(C.UInt32FilterCriterion
,0);Aw.EJ=4;switch(Eb){case 2:{Aw.Operator=3;Aw.A5=A._GetAutoObject(C.Helper).ZY(
Bcj);}break;case 3:{Aw.Operator=2;Aw.A5=A._GetAutoObject(C.Helper).ZY(Bcj-1);}break;
default:A.ab5("%s%e",AHQ,Eb);}return Aw;},BjW:function(){return(((A._GetAutoObject(
C.Device).GetVersionMajor().toFixed()+LB)+A._GetAutoObject(C.Device).GetVersionMinor(
).toFixed())+LB)+A._GetAutoObject(C.Device).GetVersionRev().toFixed();},A5B:function(
Rv,En){var FK=0;switch(Rv){case 0:FK=En.VisualId;break;case 2:FK=A._GetAutoObject(
C.Helper).Ak9(En.TransponderId);break;case 3:if(En.NaisId>0)FK=A._GetAutoObject(
C.Helper).Ak9(En.NaisId);else FK=En.VisualId;break;case 1:if(!A._GetAutoObject(C.
Device).EartagNrAssignmentMode)FK=A._GetAutoObject(C.Device).AjW;else switch(En.
Gender){case 0:FK=A._GetAutoObject(C.Device).Arc;break;case 1:FK=A._GetAutoObject(
C.Device).Arb;break;case 2:FK=A._GetAutoObject(C.Device).AjW;break;default:throw new
Error(AHP+En.Gender.toFixed());}break;default:throw new Error(AWK+Rv.toFixed());
}return FK;},Bav:function(){var B;var I3=null;var Ts=0;if(!A._GetAutoObject(C.Device
).EartagNrAssignmentMode){I3=[B=A._GetAutoObject(C.Device),B.Any,B.AoF];Ts=A._GetAutoObject(
C.Device).Avb;}else switch(A._GetAutoObject(C.Helper).W.Gender){case 1:{I3=[B=A.
_GetAutoObject(C.Device),B.Awm,B.Ay1];Ts=A._GetAutoObject(C.Device).ACT;}break;case
0:{I3=[B=A._GetAutoObject(C.Device),B.Awn,B.Ay2];Ts=A._GetAutoObject(C.Device).ACU;
}break;case 2:{I3=[B=A._GetAutoObject(C.Device),B.Any,B.AoF];Ts=A._GetAutoObject(
C.Device).Avb;}break;default:;}if(!!I3)switch(Ts){case 1:I3[2].call(I3[0],A._GetAutoObject(
C.Helper).W.VisualId-1);break;case 0:I3[2].call(I3[0],A._GetAutoObject(C.Helper).
W.VisualId+1);break;default:;}},A7U:function(Qk,En){return(En.NaisId!==Qk)&&this.
ARy(Qk);},Bko:function(IA,En){return(En.TransponderId!==IA)&&this.ARB(IA);},AOV:
function(){var Bf=A._GetAutoObject(C.Helper).A7p();var AAx=A._NewObject(C.UInt64FilterCriterion
,0);AAx.Initialize(35,5,0,true);Bf.CX(AAx);return Bf;},AvB:function(){var Bf=A._GetAutoObject(
C.Helper).A7p();var AAx=A._NewObject(C.UInt64FilterCriterion,0);AAx.Initialize(35
,0,0,true);Bf.CX(AAx);return Bf;},J6:function(A1i,Ah9){A1i.Aj(Ah9);A1i.As(Ah9);A1i.
Z(Ah9);},ANJ:function(Ah$){var B;var Aa;var A3s=false;var XC=Ah$.TY(null,0x1);while(
!!XC&&(((B=XC)?B.__proto__:null)!==A.Core.Y)){Aa=(A.kR.Cp.isPrototypeOf(XC)?XC:null
);if(!!Aa){Aa.Bi(A3s);A3s=!A3s;}XC=Ah$.TY(XC,0x1);}},Bpb:function(IA){var Xz=A._GetAutoObject(
C.Device).An.Filter;A._GetAutoObject(C.Device).An.Bk(null);var A4z=A._GetAutoObject(
C.Device).An.Aew(22,IA);var Cz=A._NewObject(C.Animal,0);Cz.E3(A4z,A._GetAutoObject(
C.Device).An);Cz.P1(0);Cz.Ci(A._GetAutoObject(C.Device).An);A._GetAutoObject(C.Device
).An.Bk(Xz);},A7b:function(AtC,AoJ){var Bf=null;switch(AtC){case 0:Bf=this.BjH(AoJ
);break;case 1:Bf=this.ADj();break;default:throw new Error(Ayq+AtC.toFixed());}return Bf;
},BjH:function(Bxs){var Bf=A._GetAutoObject(C.Helper).MC();var AfX=this.A6_(2,Bxs
);Bf.CX(AfX);return Bf;},ByZ:function(AtC,AoJ){var Xz=A._GetAutoObject(C.Device).
An.Filter;A._GetAutoObject(C.Device).An.Bk(this.A7b(AtC,AoJ));var CB=A._GetAutoObject(
C.Device).An.B8();var O;for(O=CB-1;O>=0;O--){A._GetAutoObject(C.Helper).GT(O);A.
_GetAutoObject(C.Helper).W.Ae8(false);A._GetAutoObject(C.Helper).W.Ci(A._GetAutoObject(
C.Device).An);}A._GetAutoObject(C.Device).An.Bk(Xz);},BjI:function(AtC,AoJ){var Xz=
A._GetAutoObject(C.Device).An.Filter;A._GetAutoObject(C.Device).An.Bk(this.A7b(AtC
,AoJ));var Gi=A._GetAutoObject(C.Device).An.B8();A._GetAutoObject(C.Device).An.Bk(
Xz);return Gi;},A7j:function(AH){var Xz=AH.Filter;AH.Bk(this.AvB());var O;var A3i=
4294967295;for(O=0;O<AH.B8();O++){var Ph=AH.Hw(O,4);if(Ph<A3i)A3i=Ph;}AH.Bk(Xz);
return A._GetAutoObject(C.Helper).Mf(A3i,A._GetAutoObject(C.Helper).Dv());},ARA:
function(){if(A._GetAutoObject(C.Device).P8.Z8!==6)return false;if((A._GetAutoObject(
C.Device).P8.AsZ===1529)&&(A._GetAutoObject(C.Device).P8.Ass===16900))return true;
return false;},BkE:function(Qk){if(!Qk){A.ab5("%s%U",AWL,Qk);return false;}var Bd=
A._GetAutoObject(C.Device).An.Aew(26,Qk);return this.GT(Bd);},ArI:function(){return this.
UI;},A9B:function(){return this.AhJ;},Bl0:function(){return this.AUW;},Bl1:function(
){return this.AUX;},Bl4:function(){return this.AG$;},_Init:function(aArg){C.AmT.
_Init.call(this,aArg);C.Animal._Init.call(this.W={I:this},0);A.Core.Bs._Init.call(
this.Av={I:this},0);A.acl.Gn._Init.call(this.KN={I:this},0);A.acl.Gn._Init.call(
this.S0={I:this},0);C.AMU._Init.call(this.Ad4={I:this},0);C.AVD._Init.call(this.
UP={I:this},0);C.AVC._Init.call(this.UO={I:this},0);C.TR._Init.call(this.Aer={I:
this},0);C.AWh._Init.call(this.AfD={I:this},0);C.AWg._Init.call(this.AfC={I:this
},0);C.AWf._Init.call(this.AfB={I:this},0);C.AWj._Init.call(this.AfE={I:this},0);
C.AMV._Init.call(this.AgJ={I:this},0);this.__proto__=C.HelperClass;var B;this.KN.
HQ(1);this.KN.Fr(3000);this.KN.B3=100;this.S0.AwP(10);this.S0.WS(5);this.S0.HQ(1
);this.S0.Fr(4000);this.Aer.B3=false;this.Aer.Cx=true;this.Aer.HQ(1);this.Aer.Fr(
100);this.KN.SJ=[this,this.BCQ];this.KN.Q=[this,this.Bl4,this.Bol];this.S0.SJ=[this
,this.BCS];this.S0.Q=[B=A._GetAutoObject(C.Device),B.AE2,B.AI_];this.Aer.Q=[B=A.
_GetAutoObject(C.Device),B.AE3,B.AI$];this.Init(aArg);var J_=this._variants();if(
J_){this.K={};J_._Init.call(this,aArg);}},_Done:function(){if(this.K)this.K._Done.
call(this);this.__proto__=C.AmT;this.W._Done();this.Av._Done();this.KN._Done();this.
S0._Done();this.Ad4._Done();this.UP._Done();this.UO._Done();this.Aer._Done();this.
AfD._Done();this.AfC._Done();this.AfB._Done();this.AfE._Done();this.AgJ._Done();
C.AmT._Done.call(this);},_ReInit:function(){C.AmT._ReInit.call(this);this.W._ReInit(
);this.Av._ReInit();this.KN._ReInit();this.S0._ReInit();this.Ad4._ReInit();this.
UP._ReInit();this.UO._ReInit();this.Aer._ReInit();this.AfD._ReInit();this.AfC._ReInit(
);this.AfB._ReInit();this.AfE._ReInit();this.AgJ._ReInit();if(this.K)this.K._ReInit.
call(this);},_Mark:function(D){var B;C.AmT._Mark.call(this,D);if((B=this.UI)&&(B.
_cycle!=D))B._Mark(B._cycle=D);if((B=this.AhJ)&&(B._cycle!=D))B._Mark(B._cycle=D
);if((B=this.AUW)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.AUX)&&(B._cycle!=
D))B._Mark(B._cycle=D);if((B=this.W)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Av
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.KN)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.S0)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ad4)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.UP)._cycle!=D)B._Mark(B._cycle=D);if((B=this.UO)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Aer)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AfD)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.AfC)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
AfB)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AfE)._cycle!=D)B._Mark(B._cycle=D);
if((B=this.AgJ)._cycle!=D)B._Mark(B._cycle=D);if(this.K)this.K._Mark(D);},_variants:
function(){return A.acq.HelperClass._variants();},K:null,_className:"Device::HelperClass"
};C.Helper={_Init:function(){C.HelperClass._Init.call(this,0);},_ReInit:function(
){},_variants:function(){return this;},_this:null};C.BoolFilterCriterion={A5:false
,Abt:function(){var Aw=A._NewObject(C.BoolFilterCriterion,0);Aw.Fa(this);return Aw;
},Fa:function(AI){C.FilterCriterion.Fa.call(this,AI);var Aw=(C.BoolFilterCriterion.
isPrototypeOf(AI)?AI:null);if(!!Aw)this.A5=Aw.A5;},Initialize:function(A4,Eb,A8,
Qj){this.EJ=A4;this.Operator=Eb;this.A5=A8;this.YR=Qj;return this;},_Init:function(
aArg){C.FilterCriterion._Init.call(this,aArg);this.__proto__=C.BoolFilterCriterion;
},_className:"Device::BoolFilterCriterion"};C.UInt32FilterCriterion={A5:0,Abt:function(
){var Aw=A._NewObject(C.UInt32FilterCriterion,0);Aw.Fa(this);return Aw;},Fa:function(
AI){C.FilterCriterion.Fa.call(this,AI);var Aw=(C.UInt32FilterCriterion.isPrototypeOf(
AI)?AI:null);if(!!Aw)this.A5=Aw.A5;},Initialize:function(A4,Eb,A8,Qj){this.EJ=A4;
this.Operator=Eb;this.A5=A8;this.YR=Qj;return this;},_Init:function(aArg){C.FilterCriterion.
_Init.call(this,aArg);this.__proto__=C.UInt32FilterCriterion;},_className:"Device::UInt32FilterCriterion"
};C.OverlayMenu={None:0,Home:1,AutoAction:2,MenuItemSettings:3,RatingSettings:4,
WeighingSettings:5,Options:6,AnimalSearch:7,ActionSettings:8,MeasurementReady:9,
AnimalMultiInfoMenu:10,AnimalSearchUnfiltered:11,AnimalSearchDriedOff:12,MassRecordingMenu:
13,MassRecordingDefaults:14,MassRecordingFields:15,BirthRegistrationsListMenu:16
,LAST:17};C.EnumToString={BT:function(A9){throw new Error(Atd+A9.toFixed());},LA:
function(A9){return this.BT(A9);},_Init:function(aArg){this.__proto__=C.EnumToString;
A.h7++;},_Done:function(){this.__proto__=null;A.h7--;},_ReInit:function(){},_Mark:
function(D){var B;if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:
0,_observers:null,_className:"Device::EnumToString"};C.ScreenTypeToString={BT:function(
A9){var AKa=A9;var BC;switch(AKa){case 3:BC=A.aaR(A.acf.AvH);break;case 34:BC=A.
aaR(A.acf.TG);break;case 35:BC=A.aaR(A.acf.VE);break;case 43:BC=A.aaR(A.acf.AOU);
break;default:BC=this.Bqz(A9);}return BC;},Bqz:function(A9){var AKa=A9;var BC=A.
jV;switch(AKa){case 0:BC=Ayr;break;case 2:BC=AWM;break;case 4:BC=AHR;break;case 39:
BC=AWN;break;case 38:BC=AHS;break;case 63:BC=AHT;break;case 64:BC=AHU;break;case
82:BC=AWO;break;case 83:BC=AHV;break;case 92:BC=AWP;break;case 93:BC=AWQ;break;case
65:BC=Rs;break;case 3:BC=U7;break;case 6:BC=AWR;break;case 16:BC=AWS;break;case 22:
BC=AWT;break;case 42:BC=AWU;break;case 88:BC=AWV;break;case 87:BC=AWW;break;case
89:BC=AWX;break;case 95:BC=Ah1;break;case 17:BC=AHW;break;case 23:BC=AWY;break;case
18:BC=AWZ;break;case 19:BC=AHX;break;case 37:BC=AHY;break;case 76:BC=Ays;break;case
1:BC=Qg;break;case 5:BC=AW0;break;case 7:BC=AW1;break;case 81:BC=AW2;break;case 8:
BC=Ate;break;case 9:BC=AW3;break;case 40:BC=AW4;break;case 41:BC=AW5;break;case 24:
BC=AW6;break;case 10:BC=AW7;break;case 60:BC=AW8;break;case 21:BC=Atf;break;case
11:BC=AW9;break;case 29:BC=AW_;break;case 48:BC=AW$;break;case 30:BC=AXa;break;case
12:BC=AXb;break;case 13:BC=AXc;break;case 14:BC=AXd;break;case 15:BC=AXe;break;case
69:BC=AXf;break;case 70:BC=AXg;break;case 20:BC=AHZ;break;case 25:BC=Ali;break;case
66:BC=AXh;break;case 59:BC=AXi;break;case 58:BC=AXj;break;case 56:BC=Ayt;break;case
57:BC=Alj;break;case 68:BC=Ah2;break;case 67:BC=Ayu;break;case 84:BC=Aos;break;case
77:BC=Ah3;break;case 26:BC=AXk;break;case 28:BC=Ayv;break;case 27:BC=AH0;break;case
31:BC=AfK;break;case 78:BC=AH1;break;case 34:BC=Aan;break;case 35:BC=Alk;break;case
32:BC=Aot;break;case 45:BC=AXl;break;case 49:BC=AXm;break;case 55:BC=AXn;break;case
54:BC=AXo;break;case 33:BC=AXp;break;case 36:BC=Atg;break;case 50:BC=AH2;break;case
75:BC=AH3;break;case 43:BC=AXq;break;case 44:BC=AXr;break;case 61:BC=AXs;break;case
62:BC=AXt;break;case 46:BC=AXu;break;case 47:BC=AXv;break;case 85:BC=AXw;break;case
86:BC=AXx;break;case 71:BC=AXy;break;case 72:BC=AXz;break;case 74:BC=AXA;break;case
73:BC=Ayw;break;case 51:BC=AH4;break;case 52:BC=AH5;break;case 53:BC=AH6;break;case
79:BC=AH7;break;case 80:BC=AH8;break;case 90:BC=AH9;break;case 91:BC=AXB;break;case
94:BC=AXC;break;default:throw new Error(AXD+AKa.toFixed());}return BC;},_Init:function(
aArg){C.EnumToString._Init.call(this,aArg);this.__proto__=C.ScreenTypeToString;}
,_className:"Device::ScreenTypeToString"};C.OverlayMenuToString={BT:function(A9){
var Bf7=A9;var Pk=A.jV;switch(Bf7){case 0:Pk=AXE;break;case 1:Pk=U7;break;case 8:
Pk=AXF;break;case 2:Pk=AXG;break;case 3:Pk=AXH;break;case 4:Pk=Ayx;break;case 5:
Pk=AH_;break;case 6:Pk=AXI;break;case 7:Pk=AH$;break;case 11:Pk=Ah4;break;case 12:
Pk=U8;break;case 9:Pk=AXJ;break;case 10:Pk=Aao;break;case 14:Pk=AXK;break;case 15:
Pk=AXL;break;case 13:Pk=All;break;case 16:Pk=AfL;break;default:throw new Error(Ah5+
Bf7.toFixed());}return Pk;},_Init:function(aArg){C.EnumToString._Init.call(this,
aArg);this.__proto__=C.OverlayMenuToString;},_className:"Device::OverlayMenuToString"
};C.ScanStateToString={BT:function(A9){var BgG=A9;var Bp=A.jV;switch(BgG){case 4:
Bp=Aou;break;case 0:Bp=Ayy;break;case 2:Bp=Pd;break;case 3:Bp=AXM;break;case 1:Bp=
AIa;break;default:throw new Error(AIb+BgG.toFixed());}return Bp;},_Init:function(
aArg){C.EnumToString._Init.call(this,aArg);this.__proto__=C.ScanStateToString;},
_className:"Device::ScanStateToString"};C.MeasureStateToString={BT:function(A9){
var BeL=A9;var Bp=A.jV;switch(BeL){case 4:Bp=Aou;break;case 0:Bp=Ayy;break;case 2:
Bp=AXN;break;case 1:Bp=AIa;break;case 3:Bp=Ayz;break;default:throw new Error(AIc+
BeL.toFixed());}return Bp;},_Init:function(aArg){C.EnumToString._Init.call(this,
aArg);this.__proto__=C.MeasureStateToString;},_className:"Device::MeasureStateToString"
};C.TemperatureUnit={Celsius:0,Fahrenheit:1,LAST:2};C.TemperatureUnitToString={BT:
function(A9){var Bg6=A9;var Aqc=A.jV;switch(Bg6){case 0:Aqc=A.aaR(A.acf.BqQ);break;
case 1:Aqc=A.aaR(A.acf.BqR);break;default:throw new Error(AXO+Bg6.toFixed());}return Aqc;
},_Init:function(aArg){C.EnumToString._Init.call(this,aArg);this.__proto__=C.TemperatureUnitToString;
},_className:"Device::TemperatureUnitToString"};C.AnimalType={DairyCalf:0,DairyCow:
1,SheepLamb:2,LAST:3};C.AnimalTypeToString={BT:function(A9){var ALl=A9;var type=
A.jV;switch(ALl){case 0:type=A.aaR(A.acf.Bic);break;case 1:type=A.aaR(A.acf.Biq);
break;case 2:type=A.aaR(A.acf.Bkw);break;default:throw new Error(AXP+ALl.toFixed(
));}return type;},_Init:function(aArg){C.EnumToString._Init.call(this,aArg);this.
__proto__=C.AnimalTypeToString;},_className:"Device::AnimalTypeToString"};C.Language={
Default:0,German:1,Spanish:2,French:3,Italian:4,Finnish:5,Chinese_TW:6,Turkish:7
,Greek:8,Russian:9,Dutch:10,Czech:11,Estonian:12,Bulgarian:13,Bosnian:14,Norwegian:
15,Ukrainian:16,Danish:17,Hungarian:18,Japanese:19,Latvian:20,Polish:21,Portuguese:
22,Romanian:23,Swedish:24,Croatian:25,Lithuanian:26,Slovenian:27,LAST:28};C.LanguageToString={
BT:function(A9){var AAq=A9;var I4=A.jV;switch(AAq){case 14:I4=AXQ;break;case 13:
I4=AXR;break;case 6:I4=AXS;break;case 25:I4=AXT;break;case 11:I4=AXU;break;case 17:
I4=AXV;break;case 0:I4=AId;break;case 10:I4=AXW;break;case 12:I4=AIe;break;case 5:
I4=AIf;break;case 3:I4=AyA;break;case 1:I4=AXX;break;case 8:I4=AXY;break;case 18:
I4=AXZ;break;case 4:I4=AX0;break;case 19:I4=AX1;break;case 20:I4=AX2;break;case 26:
I4=AX3;break;case 15:I4=AX4;break;case 21:I4=Aov;break;case 22:I4=Ath;break;case
23:I4=AIg;break;case 9:I4=AX5;break;case 27:I4=AX6;break;case 2:I4=AX7;break;case
24:I4=AX8;break;case 7:I4=AX9;break;case 16:I4=AX_;break;default:throw new Error(
AIh+AAq.toFixed());}return I4;},LA:function(A9){var AAq=A9;var CO=A.jV;switch(AAq
){case 14:CO=AX$;break;case 13:CO=Xf;break;case 6:CO=AYa;break;case 25:CO=U3;break;
case 11:CO=AYb;break;case 17:CO=AYc;break;case 0:CO=AYd;break;case 10:CO=Xm;break;
case 12:CO=AYe;break;case 5:CO=U4;break;case 3:CO=Xh;break;case 1:CO=Pa;break;case
8:CO=AYf;break;case 18:CO=Oi;break;case 4:CO=Xi;break;case 19:CO=AYg;break;case 20:
CO=Tg;break;case 26:CO=Xk;break;case 15:CO=Th;break;case 21:CO=Ti;break;case 22:
CO=Tj;break;case 23:CO=Aai;break;case 9:CO=Tk;break;case 27:CO=AIi;break;case 2:
CO=Aak;break;case 24:CO=AYh;break;case 7:CO=Xo;break;case 16:CO=K3;break;default:
throw new Error(AIh+AAq.toFixed());}return CO;},_Init:function(aArg){C.EnumToString.
_Init.call(this,aArg);this.__proto__=C.LanguageToString;},_className:"Device::LanguageToString"
};C.Gender={Male:0,Female:1,Unknown:2,LAST:3};C.BirthType={Single:0,Twins:1,Triplets:
2,Quadruplets:3,LAST:4};C.GenderToString={BT:function(A9){var At2=A9;var AKs=A.jV;
switch(At2){case 0:AKs=A.aaR(A.acf.Male);break;case 1:AKs=A.aaR(A.acf.Female);break;
case 2:AKs=A.aaR(A.acf.Unknown);break;default:throw new Error(AYi+At2.toFixed());
}return AKs;},_Init:function(aArg){C.EnumToString._Init.call(this,aArg);this.__proto__=
C.GenderToString;},_className:"Device::GenderToString"};C.BirthTypeToString={BT:
function(A9){var type=A9;var Af1=A.jV;switch(type){case 0:Af1=A.aaR(A.acf.BpO);break;
case 1:Af1=A.aaR(A.acf.BqM);break;case 2:Af1=A.aaR(A.acf.Triplets);break;case 3:
Af1=A.aaR(A.acf.Quadruplets);break;default:throw new Error(AIj+type.toFixed());}
return Af1;},_Init:function(aArg){C.EnumToString._Init.call(this,aArg);this.__proto__=
C.BirthTypeToString;},_className:"Device::BirthTypeToString"};C.SyncState={Idle:
0,Init:1,Exporting:2,ImportStart:3,Importing:4,ImportFinish:5,Ready:6,Error:7,LAST:
8};C.SyncStateToString={BT:function(A9){var Bg0=A9;var Bp=A.jV;switch(Bg0){case 7:
Bp=Aou;break;case 0:Bp=Ayy;break;case 6:Bp=Ayz;break;case 2:Bp=AIk;break;case 5:
Bp=AIl;break;case 3:Bp=AIm;break;case 4:Bp=AyB;break;case 1:Bp=AyC;break;default:
throw new Error(AIn+Bg0.toFixed());}return Bp;},_Init:function(aArg){C.EnumToString.
_Init.call(this,aArg);this.__proto__=C.SyncStateToString;},_className:"Device::SyncStateToString"
};C.RatedAttributeToString={BT:function(A9){var ABd=A9;switch(ABd){case 0:return A.
jV;case 1:return A.aaR(A.acf.Bo0);case 4:return A.aaR(A.acf.BoZ);case 3:return A.
aaR(A.acf.Bo1);case 2:return A.aaR(A.acf.BoY);default:throw new Error(AIo+ABd.toFixed(
));}},LA:function(A9){var ABd=A9;switch(ABd){case 0:return A.jV;case 1:return A.
aaR(A.acf.Feed);case 4:return A.aaR(A.acf.AGD);case 3:return A.aaR(A.acf.AGE);case
2:return A.aaR(A.acf.AGB);default:throw new Error(AIo+ABd.toFixed());}},_Init:function(
aArg){C.EnumToString._Init.call(this,aArg);this.__proto__=C.RatedAttributeToString;
},_className:"Device::RatedAttributeToString"};C.AssesmentToString={BT:function(
A9){var AlB=A9;var AzA=A.jV;switch(AlB){case 0:case 5:AzA=A.jV;break;case 3:AzA=
A.aaR(A.acj.BpU);break;case 2:AzA=A.aaR(A.acj.BpW);break;case 1:AzA=A.aaR(A.acj.
BpV);break;default:throw new Error(AIp+AlB.toFixed());}return AzA;},_Init:function(
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
96,WarningDataExportPurchasedFailed:97,RemovedFromPurchasedNoticePending:98,SuccessDataExportPurchasedDownload:
99,SuccessDataExportPurchased:100,WarningParsingDateFailed:101,WarningParsedDateInFutureInvalid:
102,WarningParsingNaisIdFailed:103,RemovedAnimalPurchased:104,WarningParsingShortNaisIdWithoutPremisesId:
105,SuccessChangeTransponder:106,TransponderAlreadyRegisteredCapturable:107,ConfirmationMassDeregistration:
108,SuccessMassDeregistration:109,DataExportInProgress:110,BarcodeScannerConnectedSwitchScreen:
111,BarcodeScannerDisconnectedSwitchScreen:112,SuccessDataExportHitBirthResetAdvice:
113,SuccessDataExportPurchasedResetAdvice:114,WarningResetDeviceData:115,SuccessResetSettings:
116,ScannedNaisIdNotFound:117,LAST:118};C.PopupState={Queued:0,Unknown:1,Displayed:
2,ClosedAfterTimeOut:3,ClosedWithOk:4,ClosedWithCancel:5,ClosedByMiddleware:6,ClosedWithYes:
7,ClosedWithNo:8,Opened:9};C.PopupContext={AGo:null,AkK:A.jV,Ak6:0,PopupState:1,
Id:0,Show:false,Bn5:function(E){var B;if(this.PopupState===E)return;this.PopupState=
E;if(!!this.AGo)(B=this.AGo)?B[1].call(B[0],this):null;},_Init:function(aArg){this.
__proto__=C.PopupContext;A.h7++;},_Done:function(){this.__proto__=null;A.h7--;},
_ReInit:function(){},_Mark:function(D){var B;if((B=this.AGo)&&((B=B[0])._cycle!=
D))B._Mark(B._cycle=D);if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null
,_cycle:0,_observers:null,_className:"Device::PopupContext"};C.Boolean={No:0,Yes:
1,LAST:2};C.BooleanToYesNo={BT:function(A9){switch(A9){case 0:return A.aaR(A.acf.
No);case 1:return A.aaR(A.acf.Yes);default:return AyD+A9.toFixed();}},_Init:function(
aArg){C.EnumToString._Init.call(this,aArg);this.__proto__=C.BooleanToYesNo;},_className:
"Device::BooleanToYesNo"};C.AnimalGroupTableFields={Id:0,GroupName:1};C.AnimalGroup={
GroupName:AHL,Id:0,E3:function(Ad,AH){var HG=C.Row.E3.call(this,Ad,AH);if(HG&&!!
AH){this.OnSetId(AH.CG(Ad,0));this.AFy(AH.V_(Ad,1));}return HG;},Ci:function(AH){
var HG=C.Row.Ci.call(this,AH);if(HG&&!!AH){var Jt=AH.OG();if(Jt<=0)A.ab5("%s",Xq
);else{if(this.Ana())this.CL=AH.YP();AH.Hp(this.CL,0,this.Id);AH.ZQ(this.CL,1,this.
GroupName);AH.OI(Jt);}}return HG;},Gs:function(){C.Row.Gs.call(this);this.OnSetId(-
1);},E7:function(){C.Row.E7.call(this);this.OnSetId(0);this.AFy(A.jV);},OnSetId:
function(E){if(this.Id===E)return;this.Id=E;A.abo([this,this.Q7,this.OnSetId],0);
},AFy:function(E){if(this.GroupName===E)return;this.GroupName=E;A.abo([this,this.
BlE,this.AFy],0);},Q7:function(){return this.Id;},BlE:function(){return this.GroupName;
},_Init:function(aArg){C.Row._Init.call(this,aArg);this.__proto__=C.AnimalGroup;
this.TableId=3;},_className:"Device::AnimalGroup"};C.PopupIdToString={BT:function(
A9){var AdH=A9;var At=A.jV;var AJ_;AJ_=A.aaR(A.acf.Bq_)+MS;switch(AdH){case 0:At=
A.aaR(A.acf.Unknown);break;case 1:At=A.aaR(A.acf.SevereError);break;case 58:At=A.
aaR(A.acf.Bjc);break;case 2:At=A.aaR(A.acf.Bja);break;case 3:At=A.aaR(A.acf.BqW);
break;case 77:At=A._GetAutoObject(C.Helper).Bjq();break;case 78:At=A._GetAutoObject(
C.Helper).Bjo();break;case 79:At=A._GetAutoObject(C.Helper).Bjp();break;case 9:At=
A.aaR(A.acf.Brm);break;case 5:At=A.aaR(A.acf.SuccessDataSync);break;case 8:At=A.
aaR(A.acf.SuccessResetFactorySettings);break;case 116:At=A.aaR(A.acf.Bqc);break;
case 34:At=A.aaR(A.acf.SuccessResetAnimalData);break;case 10:At=A._GetAutoObject(
C.Device).ADo();break;case 82:At=A.aaR(A.acf.Bje);break;case 83:At=A.aaR(A.acf.Bjf
);break;case 80:At=A.aaR(A.acf.Bp6);break;case 81:At=A.aaR(A.acf.SuccessRestoreBackup
);break;case 91:At=A.aaR(A.acf.Bh1);break;case 92:At=A.aaR(A.acf.Bpf);break;case
4:At=A.aaR(A.acf.WarningDataSync);break;case 7:At=A.aaR(A.acf.Brk);break;case 33:
At=A.aaR(A.acf.WarningResetAnimalData);break;case 115:At=A.aaR(A.acf.WarningResetDeviceData
);break;case 6:At=A.aaR(A.acf.WarningRestart);break;case 27:At=A.aaR(A.acf.WarningNoActionDefined
);break;case 64:At=A.aaR(A.acf.WarningActionNotApplicable);break;case 28:At=A.aaR(
A.acf.WarningNoMenuItemVisible);break;case 29:At=A.aaR(A.acf.WarningEnterPresentationMode
);break;case 30:At=A.aaR(A.acf.WarningNoAnimalsRegistered);break;case 41:At=((AJ_+
A.aaR(A.acf.AR8))+MS)+A.aaR(A.acf.BkK);break;case 50:At=((AJ_+A.aaR(A.acf.AR8))+
MS)+A.aaR(A.acf.BkM);break;case 51:At=((AJ_+A.aaR(A.acf.AR8))+MS)+A.aaR(A.acf.BkL
);break;case 42:At=A.aaR(A.acf.Bri);break;case 45:At=A.aaR(A.acf.Brc);break;case
46:At=A.aaR(A.acf.WarningNoValidCountryCode);break;case 57:At=A.aaR(A.acf.WarningOutdatedAnimalWeight
);break;case 52:At=A.aaR(A.acf.WarningOutdatedAnimalWeights);break;case 53:At=A.
aaR(A.acf.WarningWeightEvaluationSingular);break;case 56:At=A.aaR(A.acf.WarningWeightEvaluationPlural
);break;case 11:At=A.aaR(A.acf.ScanError);break;case 12:At=A.aaR(A.acf.ScanNotFound
);break;case 13:At=A.aaR(A.acf.BhT);break;case 36:At=A.aaR(A.acf.BqH);break;case
117:At=A.aaR(A.acf.Bro);break;case 14:At=A.aaR(A.acf.AnimalNotFound);break;case 15:
At=A.aaR(A.acf.SuccessUnregister);break;case 35:At=A.aaR(A.acf.SuccessUnregisterPerished
);break;case 26:At=A.aaR(A.acf.SuccessCreationNewAnimal);break;case 23:At=A.aaR(
A.acf.SuccessCreationNewAnimals);break;case 24:At=A.aaR(A.acf.Bit);break;case 49:
At=A.aaR(A.acf.EvaluationInProgress);break;case 16:At=A.aaR(A.acf.Biy);break;case
17:At=A.aaR(A.acf.BpY);break;case 18:At=A.aaR(A.acf.Bqa);break;case 19:At=A.aaR(
A.acf.BpZ);break;case 20:At=A.aaR(A.acf.Bqb);break;case 54:At=A.aaR(A.acf.Bp7);break;
case 55:At=A.aaR(A.acf.Bp_);break;case 21:At=A.aaR(A.acf.Baz);break;case 48:At=(
A.aaR(A.acf.Baz)+MS)+A.aaR(A.acf.A6h);break;case 22:At=A.aaR(A.acf.Bre);break;case
63:At=A.aaR(A.acf.Brf);break;case 85:At=A.aaR(A.acf.Brh);break;case 43:At=A.aaR(
A.acf.Brg);break;case 25:At=A.aaR(A.acf.Bai);break;case 47:At=(A.aaR(A.acf.Bai)+
MS)+A.aaR(A.acf.A6h);break;case 107:At=A.aaR(A.acf.BqS);break;case 31:{var BAs=(((((((((((((((((((
A.aaR(A.acf.Bik)+Ayp)+A.aaR(A.acf.ANL))+A.aaR(A.acf.Colon))+Oj)+A.aaR(A.acf.Bim)
)+MS)+A.aaR(A.acf.AOK))+A.aaR(A.acf.Colon))+Oj)+A.aaR(A.acf.Bjk))+MS)+A.aaR(A.acf.
AUG))+A.aaR(A.acf.Colon))+Oj)+A.aaR(A.acf.Bo3))+MS)+A.aaR(A.acf.AUF))+A.aaR(A.acf.
Colon))+Oj)+A.aaR(A.acf.Bo2);At=BAs;}break;case 32:At=A.aaR(A.acf.BqI);break;case
69:At=A.aaR(A.acf.BkX);break;case 44:At=A.aaR(A.acf.Brl);break;case 37:At=A.aaR(
A.acf.WarningResetWeightSettings);break;case 38:At=A.aaR(A.acf.WarningResetTempThresholds
);break;case 39:At=A.aaR(A.acf.BoU);break;case 76:At=(A.aaR(A.acf.A5W)+MS)+A.aaR(
A.acf.AUI);break;case 40:At=A.aaR(A.acf.Bp8);break;case 75:At=A.aaR(A.acf.Bp0);break;
case 59:At=A.aaR(A.acf.QuestionAddAnotherCalfMultiples);break;case 62:At=A.aaR(A.
acf.Bp2);break;case 96:At=A.aaR(A.acf.Bp3);break;case 60:At=A.aaR(A.acf.Bp4);break;
case 98:At=A.aaR(A.acf.Bp5);break;case 61:At=A.aaR(A.acf.Bqd);break;case 104:At=
A.aaR(A.acf.Bqe);break;case 65:At=A.aaR(A.acf.SuccessClearAnimalLoss);break;case
66:At=A.aaR(A.acf.WarningNoActionsForAnimalLoss);break;case 67:At=A.aaR(A.acf.SuccessLinkTransponder
);break;case 106:At=A.aaR(A.acf.Bp1);break;case 86:At=A.aaR(A.acf.SuccessUnlinkTransponder
);break;case 68:At=A.aaR(A.acf.Bp9);break;case 70:At=A.aaR(A.acf.Bjg);break;case
71:At=A.aaR(A.acf.Baa);break;case 72:At=A.aaR(A.acf.Bqh);break;case 113:At=(A.aaR(
A.acf.Baa)+MS)+A.aaR(A.acf.A7_);break;case 97:At=A.aaR(A.acf.Bji);break;case 100:
At=(A.aaR(A.acf.Bab)+MS)+A.aaR(A.acf.A$y);break;case 114:At=(A.aaR(A.acf.Bab)+MS
)+A.aaR(A.acf.A7_);break;case 99:At=A.aaR(A.acf.Bqi);break;case 88:At=A.aaR(A.acf.
Bjh);break;case 89:At=A.aaR(A.acf.Bqf);break;case 90:At=A.aaR(A.acf.Bqg);break;case
73:At=A.aaR(A.acf.WarningNoPremisesID);break;case 74:At=A.aaR(A.acf.WarningNoFlashDrivePresent
);break;case 94:At=A.aaR(A.acf.WarningNoBackupPathPresent);break;case 93:At=A.aaR(
A.acf.WarningNoBackupFilePresent);break;case 84:At=A.aaR(A.acf.Bjx);break;case 87:
At=A.aaR(A.acf.Brp);break;case 95:At=A.aaR(A.acf.Brb);break;case 108:At=A.aaR(A.
acf.Brd);break;case 109:At=A.aaR(A.acf.SuccessMassDeregistration);break;case 102:
At=A.aaR(A.acf.WarningParsedDateInFutureInvalid);break;case 101:At=A.aaR(A.acf.WarningParsingDateFailed
);break;case 103:At=A.aaR(A.acf.WarningParsingNaisIdFailed);break;case 105:At=A.
aaR(A.acf.Brj);break;case 110:At=A.aaR(A.acf.Bib);break;case 111:At=A.aaR(A.acf.
Bpq);break;case 112:At=A.aaR(A.acf.Bpr);break;default:throw new Error(AyE+AdH.toFixed(
));}return At;},LA:function(A9){var AdH=A9;var At=A.jV;switch(AdH){case 0:At=AYj;
break;case 1:At=AYk;break;case 58:At=AYl;break;case 2:At=AYm;break;case 3:At=AYn;
break;case 77:At=AYo;break;case 78:At=AYp;break;case 79:At=AYq;break;case 9:At=AYr;
break;case 5:At=AYs;break;case 8:At=AYt;break;case 116:At=AYu;break;case 34:At=AyF;
break;case 80:At=AYv;break;case 81:At=AYw;break;case 91:At=AyG;break;case 92:At=
Ati;break;case 82:At=U9;break;case 83:At=Atj;break;case 10:At=AYx;break;case 4:At=
AYy;break;case 7:At=AYz;break;case 33:At=AIq;break;case 115:At=AYA;break;case 6:
At=AIr;break;case 27:At=AYB;break;case 64:At=AYC;break;case 28:At=AYD;break;case
29:At=Atk;break;case 30:At=AYE;break;case 41:At=AYF;break;case 50:At=AIs;break;case
51:At=AYG;break;case 42:At=AYH;break;case 45:At=AYI;break;case 46:At=AYJ;break;case
57:At=AcV;break;case 52:At=AYK;break;case 53:At=AYL;break;case 56:At=AYM;break;case
11:At=AYN;break;case 12:At=AIt;break;case 13:At=AYO;break;case 36:At=AYP;break;case
117:At=AYQ;break;case 14:At=AYR;break;case 15:At=AYS;break;case 35:At=AYT;break;
case 26:At=AIu;break;case 23:At=AYU;break;case 24:At=AYV;break;case 49:At=AYW;break;
case 16:At=AIv;break;case 17:At=AIw;break;case 18:At=AYX;break;case 19:At=AYY;break;
case 20:At=AYZ;break;case 54:At=AY0;break;case 55:At=Rt;break;case 21:At=Atl;break;
case 48:At=AIx;break;case 22:At=AIy;break;case 63:At=Aow;break;case 43:At=Aox;break;
case 85:At=AyH;break;case 25:At=AY1;break;case 47:At=AIz;break;case 107:At=AY2;break;
case 31:At=AY3;break;case 32:At=AY4;break;case 69:At=AY5;break;case 44:At=AY6;break;
case 37:At=AY7;break;case 38:At=AY8;break;case 39:At=AY9;break;case 76:At=AY_;break;
case 40:At=AY$;break;case 75:At=AZa;break;case 59:At=AZb;break;case 62:At=AZc;break;
case 96:At=AZd;break;case 60:At=AZe;break;case 98:At=AZf;break;case 65:At=AZg;break;
case 61:At=Aoy;break;case 104:At=AIA;break;case 66:At=AZh;break;case 67:At=AIB;break;
case 106:At=AIC;break;case 86:At=AcW;break;case 68:At=AID;break;case 70:At=AZi;break;
case 71:At=AIE;break;case 72:At=AZj;break;case 113:At=AyI;break;case 97:At=AZk;break;
case 100:At=AZl;break;case 99:At=AyJ;break;case 114:At=AZm;break;case 88:At=AZn;
break;case 89:At=AZo;break;case 90:At=AIF;break;case 73:At=Aoz;break;case 74:At=
AIG;break;case 94:At=AZp;break;case 93:At=AIH;break;case 84:At=AII;break;case 87:
At=Alm;break;case 95:At=AZq;break;case 108:At=AoA;break;case 109:At=AZr;break;case
102:At=AIJ;break;case 101:At=AIK;break;case 103:At=AZs;break;case 105:At=AZt;break;
case 110:At=AIL;break;case 111:At=AZu;break;case 112:At=AZv;break;default:throw new
Error(AyE+AdH.toFixed());}return At;},_Init:function(aArg){C.EnumToString._Init.
call(this,aArg);this.__proto__=C.PopupIdToString;},_className:"Device::PopupIdToString"
};C.PopupParamSeparator=";";C.RatingMode={Basic:0,Extended:1,LAST:2};C.TransponderType={
UNDEFINED:0,AnimalId:1,FarmId:2,GroupId:3,PersonId:4,LAST:5};C.TransponderProtocol={
UNDEFINED:0,FDX:1,HDX:2,HDX_URBAN:3,LAST:4};C.TransponderTypeToString={BT:function(
A9){var Bhh=A9;var type=A.jV;switch(Bhh){case 1:type=AZw;break;case 2:type=AZx;break;
case 3:type=AZy;break;case 4:type=AZz;break;case 0:type=Ayr;break;default:throw new
Error(AZA+Bhh.toFixed());}return type;},_Init:function(aArg){C.EnumToString._Init.
call(this,aArg);this.__proto__=C.TransponderTypeToString;},_className:"Device::TransponderTypeToString"
};C.TransponderProtocolToString={BT:function(A9){var Bhf=A9;var ABa=A.jV;switch(
Bhf){case 1:ABa=AZB;break;case 2:ABa=AZC;break;case 3:ABa=AZD;break;case 0:ABa=Ayr;
break;default:throw new Error(AZE+Bhf.toFixed());}return ABa;},_Init:function(aArg
){C.EnumToString._Init.call(this,aArg);this.__proto__=C.TransponderProtocolToString;
},_className:"Device::TransponderProtocolToString"};C.Transponder={Id:0,TransponderProtocol:
0,TransponderType:0,AT_:function(E){if(this.TransponderType===E)return;this.TransponderType=
E;A.abo([this,this.Bme,this.AT_],0);},AT9:function(E){if(this.TransponderProtocol===
E)return;this.TransponderProtocol=E;A.abo([this,this.Bmd,this.AT9],0);},OnSetId:
function(E){if(this.Id===E)return;this.Id=E;A.abo([this,this.Q7,this.OnSetId],0);
},AO7:function(){return A._GetAutoObject(C.Converter).BqG(this.Id);},BjF:function(
){return A._GetAutoObject(C.Converter).Ax2(this.Id);},Bme:function(){return this.
TransponderType;},Bmd:function(){return this.TransponderProtocol;},Q7:function(){
return this.Id;},_Init:function(aArg){this.__proto__=C.Transponder;A.h7++;},_Done:
function(){this.__proto__=null;A.h7--;},_ReInit:function(){},_Mark:function(D){var
B;if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:
null,_className:"Device::Transponder"};C.RatingModeToString={BT:function(A9){var
Vp=A9;var NF=A.jV;switch(Vp){case 0:NF=A.aaR(A.acf.Basic);break;case 1:NF=A.aaR(
A.acf.Extended);break;default:throw new Error(AZF+Vp.toFixed());}return NF;},_Init:
function(aArg){C.EnumToString._Init.call(this,aArg);this.__proto__=C.RatingModeToString;
},_className:"Device::RatingModeToString"};C.TableRowsCount={_Init:function(aArg
){this.__proto__=C.TableRowsCount;A.h7++;},_Done:function(){this.__proto__=null;
A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((B=this.I)&&(B._cycle!=
D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:"Device::TableRowsCount"
};C.MassUnit={Kilogramm:0,Pound:1,LAST:2};C.MassUnitToString={BT:function(A9){var
BeH=A9;var Aqc=A.jV;switch(BeH){case 0:Aqc=A.aaR(A.acf.Bku);break;case 1:Aqc=A.aaR(
A.acf.Pound);break;default:throw new Error(AZG+BeH.toFixed());}return Aqc;},_Init:
function(aArg){C.EnumToString._Init.call(this,aArg);this.__proto__=C.MassUnitToString;
},_className:"Device::MassUnitToString"};C.MinWeightGain=20;C.MaxWeightGain=2000;
C.WeightGainStep=10;C.Int32ArrayWrapper={MN:10,Array:A.abi(10,0,null),ZG:function(
E){if(this.MN===E)return;if(E>10)throw new Error(AZH);this.MN=E;},Set:function(aIndex
,AK){if((aIndex<0)||(aIndex>=this.MN))throw new Error(AyK);this.Array.Set(aIndex
,AK);},Get:function(aIndex){if((aIndex<0)||(aIndex>=this.MN))throw new Error(AyK
);return this.Array.Get(aIndex);},Am3:function(){var QD=0;var O;for(O=0;O<this.MN;
O=O+1)QD=QD+this.Get(O);return QD;},toString:function(){var A3q=this.Array.Get(0
).toFixed();var O;for(O=1;O<this.MN;O=O+1)A3q=(A3q+Pb)+this.Array.Get(O).toFixed(
);return A3q;},E3:function(aString){var HB=aString.indexOf(String.fromCharCode(0x2C
),0);var A2c=A.jV;var O=0;while(O<10){if(aString===A.jV)this.Array.Set(O,0);else{
if(HB===-1){A2c=aString;aString=A.jV;}else{A2c=A.abV(aString,HB);aString=A.ab1(aString
,0,HB+1);}this.Array.Set(O,A.wz(A2c,0,10));HB=aString.indexOf(String.fromCharCode(
0x2C),0);}O=O+1;}if(aString!==A.jV)A.ab5("%s",Aap);},Ci:function(){},E7:function(
){var O;for(O=0;O<this.MN;O=O+1)this.Set(O,0);},AvA:function(A8){var O=0;while(O<
this.MN){if(this.Array.Get(O)===A8)return O;O=O+1;}return-1;},H8:function(){var O=
0;var max=-1;while(O<this.MN){if(this.Array.Get(O)>max)max=this.Array.Get(O);O=O+
1;}return max;},_Init:function(aArg){(this.Array=[]).__proto__=C.Int32ArrayWrapper.
Array;this.__proto__=C.Int32ArrayWrapper;A.h7++;},_Done:function(){this.__proto__=
null;A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((B=this.I)&&(B._cycle
!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:"Device::Int32ArrayWrapper"
};C.ActionToString={BT:function(A9){var AzV=A9;var E_=A.jV;switch(AzV){case 4:E_=
A.aaR(A.acf.Alarm);break;case 256:E_=A.aaR(A.acf.Weighing);break;case 128:E_=A.aaR(
A.acf.A6O);break;case 16:E_=A.aaR(A.acf.AMB);break;case 1:E_=A.aaR(A.acf.Temperature
);break;case 32:E_=A.aaR(A.acf.AnimalLoss);break;case 2:E_=A.aaR(A.acf.Rating);break;
case 8:E_=A.aaR(A.acf.Asm);break;case 64:E_=A.aaR(A.acf.Unregister);break;case 512:
E_=A.aaR(A.acf.ASq);break;case 1024:E_=A.aaR(A.acf.LinkTransponder);break;case 262144:
E_=A.aaR(A.acf.UnlinkTransponder);break;case 2048:E_=A.aaR(A.acf.TG);break;case 4096:
E_=A.aaR(A.acf.Calving);break;case 8192:E_=A.aaR(A.acf.DryOff);break;case 16384:
E_=A.aaR(A.acf.A73);break;case 32768:E_=A.aaR(A.acf.ACt);break;case 524288:E_=A.
aaR(A.acf.ACv);break;case 65536:E_=A.aaR(A.acf.Delete);break;case 131072:E_=A.aaR(
A.acf.A74);break;case 0:E_=A.aaR(A.acf.A8q);break;default:throw new Error(AIM+AzV.
toFixed());}return E_;},LA:function(A9){var AzV=A9;var E_=A.jV;switch(AzV){case 4:
E_=A.aaR(A.acf.Alarm);break;case 256:E_=A.aaR(A.acf.Weighing);break;case 128:E_=
A.aaR(A.acf.A6O);break;case 16:E_=A.aaR(A.acf.AMB);break;case 1:E_=A.aaR(A.acf.Temperature
);break;case 32:E_=A.aaR(A.acf.AnimalLoss);break;case 2:E_=A.aaR(A.acf.Rating);break;
case 8:E_=A.aaR(A.acf.Asm);break;case 64:E_=A.aaR(A.acf.Unregister);break;case 512:
E_=A.aaR(A.acf.ASq);break;case 1024:E_=A.aaR(A.acf.LinkTransponder);break;case 262144:
E_=A.aaR(A.acf.UnlinkTransponder);break;case 2048:E_=A.aaR(A.acf.TG);break;case 4096:
E_=A.aaR(A.acf.Calving);break;case 8192:E_=A.aaR(A.acf.DryOff);break;case 32768:
E_=A.aaR(A.acf.ACt);break;case 524288:E_=A.aaR(A.acf.ACv);break;case 65536:E_=A.
aaR(A.acf.Delete);break;case 16384:case 131072:E_=A.aaR(A.acf.BkB);break;case 0:
E_=A.aaR(A.acf.A8q);break;default:throw new Error(AIM+AzV.toFixed());}return E_;
},_Init:function(aArg){C.EnumToString._Init.call(this,aArg);this.__proto__=C.ActionToString;
},_className:"Device::ActionToString"};C.ACTIONS_COUNT=19;C.PopupTimeout=2000;C.
ITable={Filter:null,Id:2,CG:function(Ad,A4){return 0;},V_:function(Ad,A4){return A.
jV;},Akp:function(G){A.we(this,0);A.pe([this,this.DX],this);},H7:function(Ad,A4){
return false;},Hw:function(Ad,A4){return this.Sq(Ad,A4);},OnSetId:function(E){if(
this.Id===E)return;this.Id=E;},B8:function(){return 0;},Bk:function(E){if(this.Filter===
E)return;this.Filter=E;A.abo([this,this.Fp,this.Ft],0);},Ft:function(Aq){this.Bk(
Aq);},Ja:function(Ad,A4){var BB7=this.V$(Ad,A4);return A._GetAutoObject(C.Converter
).Ban(BB7);},V$:function(Ad,A4){return 0;},Sq:function(Ad,A4){return 0;},A7o:function(
Ad,A4){return this.CG(Ad,A4);},OG:function(){var Jt=0;var BCR=this.Id;return Jt;
},OI:function(AoW){var HG=0;var BCR=this.Id;return HG===1;},YP:function(){return-
1;},ZS:function(Ad,A4,C1){return false;},Hp:function(Ad,A4,C1){return false;},ZR:
function(Ad,A4,C1){return false;},Ob:function(Ad,A4,C1){return false;},ZQ:function(
Ad,A4,C1){return false;},Acu:function(Ad,A4,C1){return this.ZR(Ad,A4,C1);},AkV:function(
Ad,A4,C1){var BB8=A._GetAutoObject(C.Converter).Ad5(C1);return this.ZS(Ad,A4,BB8
);},A$W:function(Ad,A4,C1){return this.Hp(Ad,A4,C1);},AO1:function(Ad,A4){return this.
CG(Ad,A4);},BjD:function(Ad,A4){return this.CG(Ad,A4);},BpA:function(Ad,A4,C1){return this.
Hp(Ad,A4,C1);},Bpw:function(Ad,A4,C1){return this.Hp(Ad,A4,C1);},LZ:function(aColumn
,A8){return-1;},Am1:function(Ad,A4){return this.CG(Ad,A4);},Bpu:function(Ad,A4,C1
){return this.Hp(Ad,A4,C1);},ADm:function(Ad,A4){return this.CG(Ad,A4);},AU3:function(
Ad,A4,MX){return this.Hp(Ad,A4,MX);},DX:function(G){this.By8();},By8:function(){
return-1;},KT:function(Ad,A4){return 0;},UJ:function(Ad,A4,C1){return false;},Aew:
function(aColumn,A8){return-1;},E7:function(){return false;},BjE:function(Ad,A4){
var BB9=this.CG(Ad,A4);return A._GetAutoObject(C.Converter).Bj5(BB9);},BjJ:function(
Ad,A4){return this.CG(Ad,A4);},AO9:function(Ad,A4){return this.CG(Ad,A4);},Bpy:function(
Ad,A4,C1){var BB_=A._GetAutoObject(C.Converter).A53(C1);return this.Hp(Ad,A4,BB_
);},Bpz:function(Ad,A4,C1){return this.Hp(Ad,A4,C1);},BpF:function(Ad,A4,C1){return this.
Hp(Ad,A4,C1);},AjM:function(aColumn,A8){return false;},Aep:function(aColumn,A8){
return false;},BjS:function(Ad,A4){return this.CG(Ad,A4);},BpE:function(Ad,A4,C1
){return this.Hp(Ad,A4,C1);},Ll:function(){return this.QN()>=this.HM();},HM:function(
){return 0;},AbB:function(){return-1;},QN:function(){return 0;},Fp:function(){return this.
Filter;},_Init:function(aArg){this.__proto__=C.ITable;A.h7++;},_Done:function(){
this.__proto__=null;A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((B=
this.Filter)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.I)&&(B._cycle!=D))B._Mark(
B._cycle=D);},I:null,_cycle:0,_observers:null,_className:"Device::ITable"};C.MaxAutoActionsCount=
4;C.WeightRecordingMode={Automatic:0,Manual:1,LAST:2};C.WeightRecordingModeToString={
BT:function(A9){var Vp=A9;var NF=A.jV;switch(Vp){case 0:NF=A.aaR(A.acf.Automatic
);break;case 1:NF=A.aaR(A.acf.Manual);break;default:throw new Error(AyL+Vp.toFixed(
));}return NF;},_Init:function(aArg){C.EnumToString._Init.call(this,aArg);this.__proto__=
C.WeightRecordingModeToString;},_className:"Device::WeightRecordingModeToString"
};C.BooleanToAutoOnOff={BT:function(A9){switch(A9){case 0:return A.aaR(A.acf.Off
);case 1:return A.aaR(A.acf.Abb);default:return AyD+A9.toFixed();}},_Init:function(
aArg){C.EnumToString._Init.call(this,aArg);this.__proto__=C.BooleanToAutoOnOff;}
,_className:"Device::BooleanToAutoOnOff"};C.WeightStep=100;C.WeightRecordingScope={
CurrentWeightOnly:0,BirthWeightOnly:1,BirthAndCurrentWeight:2,NoWeightRecording:
3,LAST:4};C.WeightRecordingScopeToString={BT:function(A9){var BgH=A9;var ABp=A.jV;
switch(BgH){case 0:ABp=A.aaR(A.acf.Biv);break;case 1:ABp=A.aaR(A.acf.Bh9);break;
case 2:ABp=A.aaR(A.acf.Bh5);break;case 3:ABp=A.aaR(A.acf.Bk4);break;default:throw new
Error(AZI+BgH.toFixed());}return ABp;},_Init:function(aArg){C.EnumToString._Init.
call(this,aArg);this.__proto__=C.WeightRecordingScopeToString;},_className:"Device::WeightRecordingScopeToString"
};C.BodyTemperature={Undertemperature:0,Normal:1,Elevated:2,Fever:3,LAST:4};C.Ko={
A5A:0,Temperature:1,Rating:2,AfA:3,BDu:4,BD$:5,BGW:6,BEP:7,BFz:8,BEn:9,BFx:10,BF0:
11,BF1:12,BG1:13,BDF:14,LAST:15};C.AnimalListContentToString={BT:function(A9){var
Bc7=A9;var RB=A.jV;switch(Bc7){case 0:RB=AZJ;break;case 14:RB=AZK;break;case 2:RB=
AZL;break;case 1:RB=AZM;break;case 3:RB=AZN;break;case 4:RB=Atm;break;case 5:RB=
Atn;break;case 6:RB=Ato;break;case 7:RB=Atp;break;case 8:RB=AyM;break;case 9:RB=
AoB;break;case 10:RB=AZO;break;case 11:RB=AZP;break;case 12:RB=AZQ;break;case 13:
RB=AZR;break;default:throw new Error(AZS+Bc7.toFixed());}return RB;},_Init:function(
aArg){C.EnumToString._Init.call(this,aArg);this.__proto__=C.AnimalListContentToString;
},_className:"Device::AnimalListContentToString"};C.GenderFilterCriterion={A5:0,
Abt:function(){var Aw=A._NewObject(C.GenderFilterCriterion,0);Aw.Fa(this);return Aw;
},Fa:function(AI){C.FilterCriterion.Fa.call(this,AI);var Aw=(C.GenderFilterCriterion.
isPrototypeOf(AI)?AI:null);if(!!Aw)this.A5=Aw.A5;},_Init:function(aArg){C.FilterCriterion.
_Init.call(this,aArg);this.__proto__=C.GenderFilterCriterion;},_className:"Device::GenderFilterCriterion"
};C.AnimalTypeFilterCriterion={A5:0,Abt:function(){var Aw=A._NewObject(C.AnimalTypeFilterCriterion
,0);Aw.Fa(this);return Aw;},Fa:function(AI){C.FilterCriterion.Fa.call(this,AI);var
Aw=(C.AnimalTypeFilterCriterion.isPrototypeOf(AI)?AI:null);if(!!Aw)this.A5=Aw.A5;
},Initialize:function(A4,Eb,A8,Qj){this.EJ=A4;this.Operator=Eb;this.A5=A8;this.YR=
Qj;return this;},_Init:function(aArg){C.FilterCriterion._Init.call(this,aArg);this.
__proto__=C.AnimalTypeFilterCriterion;},_className:"Device::AnimalTypeFilterCriterion"
};C.BDH={AuM:0,BDG:1,BFj:2,A$D:3,A5$:4,BGC:5,BD_:6,BGB:7,LinkTransponder:8,TG:9,
Weighing:10,Calving:11,LinkNaisId:12,BFZ:13,ClearBirthNoticePending:14,DeleteAnimal:
15,ScanNaisId:16,Edit:17,ClearPurchaseNoticePending:18,UNDEFINED:19};C.AutoRegistrationModeToString={
BT:function(A9){var Vp=A9;var NF=A.jV;switch(Vp){case 0:NF=A.aaR(A.acf.Bin);break;
case 1:NF=A.aaR(A.acf.Bj9);break;case 2:NF=A.aaR(A.acf.Off);break;default:throw new
Error(AZT+Vp.toFixed());}return NF;},_Init:function(aArg){C.EnumToString._Init.call(
this,aArg);this.__proto__=C.AutoRegistrationModeToString;},_className:"Device::AutoRegistrationModeToString"
};C.AutoRegistrationMode={UserConfirmed:0,Background:1,Off:2,LAST:3};C.AssessmentFilterCriterion={
A5:0,Abt:function(){var Aw=A._NewObject(C.AssessmentFilterCriterion,0);Aw.Fa(this
);return Aw;},Fa:function(AI){C.FilterCriterion.Fa.call(this,AI);var Aw=(C.AssessmentFilterCriterion.
isPrototypeOf(AI)?AI:null);if(!!Aw)this.A5=Aw.A5;},Initialize:function(A4,Eb,A8,
Qj){this.EJ=A4;this.Operator=Eb;this.A5=A8;this.YR=Qj;return this;},_Init:function(
aArg){C.FilterCriterion._Init.call(this,aArg);this.__proto__=C.AssessmentFilterCriterion;
},_className:"Device::AssessmentFilterCriterion"};C.D9={AdY:0,Temperature:1,AfA:
2,Rating:3,LAST:4};C.FactoryResetScope={DeviceAndAnimalData:0,AnimalDataOnly:1,DeviceDataOnly:
2,LAST:3};C.FactoryResetScopeToString={BT:function(A9){switch(A9){case 0:return A.
aaR(A.acf.DeviceAndAnimalData);case 1:return A.aaR(A.acf.AnimalDataOnly);case 2:
return A.aaR(A.acf.DeviceDataOnly);default:return AZU+A9.toFixed();}},_Init:function(
aArg){C.EnumToString._Init.call(this,aArg);this.__proto__=C.FactoryResetScopeToString;
},_className:"Device::FactoryResetScopeToString"};C.AVD={Ci:function(){A._GetAutoObject(
C.Device).Asf(this.toString());},Init:function(aArg){var B;A.zX([this,this.BfO],[
B=A._GetAutoObject(C.Device),B.A9K,B.BbZ],0);this.BfO(this);},BfO:function(G){this.
E3(A._GetAutoObject(C.Device).AHe);A.we(this,0);},_Init:function(aArg){C.Int32ArrayWrapper.
_Init.call(this,aArg);this.__proto__=C.AVD;this.ZG(3);this.Init(aArg);},_className:
"Device::TemperaturesLowClass"};C.AVC={Init:function(aArg){var B;A.zX([this,this.
BfM],[B=A._GetAutoObject(C.Device),B.A9J,B.BbY],0);this.BfM(this);},Ci:function(
){A._GetAutoObject(C.Device).Ase(this.toString());},BfM:function(G){this.E3(A._GetAutoObject(
C.Device).AHd);A.we(this,0);},_Init:function(aArg){C.Int32ArrayWrapper._Init.call(
this,aArg);this.__proto__=C.AVC;this.ZG(3);this.Init(aArg);},_className:"Device::TemperaturesHighClass"
};C.AMU={Init:function(aArg){var B;A.zX([this,this.Bfg],[B=A._GetAutoObject(C.Device
),B.A8Y,B.BbC],0);this.Bfg(this);},Bfg:function(G){this.E3(A._GetAutoObject(C.Device
).AB4);A.we(this,0);},_Init:function(aArg){C.Int32ArrayWrapper._Init.call(this,aArg
);this.__proto__=C.AMU;this.ZG(3);this.Init(aArg);},_className:"Device::AnimalTypesClass"
};C.UInt64FilterCriterion={A5:0,Abt:function(){var Aw=A._NewObject(C.UInt64FilterCriterion
,0);Aw.Fa(this);return Aw;},Fa:function(AI){C.FilterCriterion.Fa.call(this,AI);var
Aw=(C.UInt64FilterCriterion.isPrototypeOf(AI)?AI:null);if(!!Aw)this.A5=Aw.A5;},Initialize:
function(A4,Eb,A8,Qj){this.EJ=A4;this.Operator=Eb;this.A5=A8;this.YR=Qj;return this;
},_Init:function(aArg){C.FilterCriterion._Init.call(this,aArg);this.__proto__=C.
UInt64FilterCriterion;},_className:"Device::UInt64FilterCriterion"};C.BooleanToAssignedUnassignedString={
BT:function(A9){switch(A9){case 0:return A.aaR(A.acf.Ako);case 1:return A.aaR(A.
acf.BhM);default:return AyD+A9.toFixed();}},_Init:function(aArg){C.EnumToString.
_Init.call(this,aArg);this.__proto__=C.BooleanToAssignedUnassignedString;},_className:
"Device::BooleanToAssignedUnassignedString"};C.C9={UNDEFINED:0,AT:1,BA:2,BE:3,BDM:
4,BD1:5,BD2:6,BD3:7,BD4:8,BD5:9,BEd:10,BEe:11,BEo:12,BEp:13,BEE:14,FR:15,GR:16,BEQ:
17,BER:18,BEY:19,BEZ:20,BE4:21,BE5:22,BE6:23,BE7:24,BFb:25,BFp:26,BFq:27,BFF:28,
BFG:29,BFX:30,BFY:31,BGe:32,BGf:33,BGg:34,BGu:35,BGv:36,BGP:37,Bao:38,BGQ:39,LAST:
40};C.CountryToString={BT:function(A9){var Kc=A9;var FH=A.jV;switch(Kc){case 1:FH=
A.aaR(A.acm.BhX);break;case 2:FH=A.aaR(A.acm.Bh_);break;case 3:FH=A.aaR(A.acm.Bh4
);break;case 4:FH=A.aaR(A.acm.Bia);break;case 5:FH=A.aaR(A.acm.Bid);break;case 6:
FH=A.aaR(A.acm.Bqm);break;case 7:FH=A.aaR(A.acm.Big);break;case 8:FH=A.aaR(A.acm.
Biw);break;case 9:FH=A.aaR(A.acm.Bix);break;case 10:FH=A.aaR(A.acm.Bjy);break;case
11:FH=A.aaR(A.acm.BiE);break;case 12:FH=A.aaR(A.acm.Bjd);break;case 13:FH=A.aaR(
A.acm.BpR);break;case 14:FH=A.aaR(A.acm.Bjm);break;case 15:FH=A.aaR(A.acm.Bju);break;
case 16:FH=A.aaR(A.acm.Bj0);break;case 17:FH=A.aaR(A.acm.Biu);break;case 18:FH=A.
aaR(A.acm.Bj6);break;case 19:FH=A.aaR(A.acm.Bkd);break;case 20:FH=A.aaR(A.acm.Bkp
);break;case 21:FH=A.aaR(A.acm.Bkr);break;case 22:FH=A.aaR(A.acm.BkC);break;case
23:FH=A.aaR(A.acm.BkG);break;case 24:FH=A.aaR(A.acm.Bkz);break;case 25:FH=A.aaR(
A.acm.BkI);break;case 26:FH=A.aaR(A.acm.BkY);break;case 27:FH=A.aaR(A.acm.Bk5);break;
case 28:FH=A.aaR(A.acm.BoN);break;case 29:FH=A.aaR(A.acm.BoO);break;case 30:FH=A.
aaR(A.acm.Bpg);break;case 31:FH=A.aaR(A.acm.Bpi);break;case 32:FH=A.aaR(A.acm.Bql
);break;case 33:FH=A.aaR(A.acm.BpQ);break;case 34:FH=A.aaR(A.acm.BpP);break;case
35:FH=A.aaR(A.acm.BqL);break;case 36:FH=A.aaR(A.acm.Bqv);break;case 37:FH=A.aaR(
A.acm.BqP);break;case 38:FH=A.aaR(A.acm.Bao);break;case 39:FH=A.aaR(A.acm.BqO);break;
case 0:FH=AoC;break;default:throw new Error(Aop+Kc.toFixed());}return FH;},LA:function(
A9){var Kc=A9;var BN=A.jV;switch(Kc){case 1:BN=Tf;break;case 2:BN=Aab;break;case
3:BN=U1;break;case 4:BN=Xf;break;case 5:BN=Ix;break;case 6:BN=Aal;break;case 7:BN=
U2;break;case 8:BN=Aad;break;case 9:BN=Xg;break;case 10:BN=Pa;break;case 11:BN=Aae;
break;case 12:BN=Aaf;break;case 13:BN=Aak;break;case 14:BN=U4;break;case 15:BN=Xh;
break;case 16:BN=Aag;break;case 17:BN=U3;break;case 18:BN=Oi;break;case 19:BN=Rq;
break;case 20:BN=Xi;break;case 21:BN=Xj;break;case 22:BN=Xk;break;case 23:BN=Aah;
break;case 24:BN=Tg;break;case 25:BN=Xl;break;case 26:BN=Xm;break;case 27:BN=Th;
break;case 28:BN=Ti;break;case 29:BN=Tj;break;case 30:BN=Aai;break;case 31:BN=Tk;
break;case 32:BN=Xn;break;case 33:BN=AfG;break;case 34:BN=Aaj;break;case 35:BN=Xo;
break;case 36:BN=Aac;break;case 37:BN=AhY;break;case 38:BN=K3;break;case 39:BN=AcS;
break;case 0:BN=AoC;break;default:throw new Error(Aop+Kc.toFixed());}return BN;}
,_Init:function(aArg){C.EnumToString._Init.call(this,aArg);this.__proto__=C.CountryToString;
},_className:"Device::CountryToString"};C.EaseOfDelivery={Unspecified:0,Easy:1,Moderate:
2,Difficult:3,Surgery:4,LAST:5};C.EaseOfDeliveryToString={BT:function(A9){var BdF=
A9;var AtW=A.jV;switch(BdF){case 0:AtW=A.aaR(A.acf.Unspecified);break;case 1:AtW=
A.aaR(A.acf.Easy);break;case 2:AtW=A.aaR(A.acf.Moderate);break;case 3:AtW=A.aaR(
A.acf.Difficult);break;case 4:AtW=A.aaR(A.acf.Surgery);break;default:throw new Error(
AZV+BdF.toFixed());}return AtW;},_Init:function(aArg){C.EnumToString._Init.call(
this,aArg);this.__proto__=C.EaseOfDeliveryToString;},_className:"Device::EaseOfDeliveryToString"
};C.WhereAbouts={UNB:0,EZU:1,EMA:2,VZU:3,VMA:4,VIV:5,TOT:6,V48:7,V3T:8,MGE:9,VKB:
10,LAST:11};C.WhereAboutsToString={BT:function(A9){var BhA=A9;var Aa1=A.jV;switch(
BhA){case 0:Aa1=A.aaR(A.acf.Unknown);break;case 1:Aa1=A.aaR(A.acf.BqY);break;case
2:Aa1=A.aaR(A.acf.BqX);break;case 3:Aa1=A.aaR(A.acf.Bq6);break;case 4:Aa1=A.aaR(
A.acf.Bq5);break;case 5:Aa1=A.aaR(A.acf.Bq3);break;case 6:Aa1=A.aaR(A.acf.Bq0);break;
case 7:Aa1=A.aaR(A.acf.Bq2);break;case 8:Aa1=A.aaR(A.acf.Bq1);break;case 9:Aa1=A.
aaR(A.acf.BqZ);break;case 10:Aa1=A.aaR(A.acf.Bq4);break;default:throw new Error(
AZW+BhA.toFixed());}return Aa1;},_Init:function(aArg){C.EnumToString._Init.call(
this,aArg);this.__proto__=C.WhereAboutsToString;},_className:"Device::WhereAboutsToString"
};C.Breed={UNKNOWN:0,SBT:1,RBT:2,JER:3,BV:4,RVA:5,RV:6,RDN:7,DSN:8,FL:9,GV:10,PIN:
11,HIN:12,MW:13,VW:14,LMP:15,DBV:16,AS:17,VR:18,CHA:19,LIM:20,WBB:21,BA:22,MA:23
,SAL:24,MON:25,AU:26,PIE:27,CHI:28,ROM:29,MAR:30,WP:31,BB:32,DA:33,AA:34,HE:35,SH:
36,HLD:37,WB:38,GAL:39,LR:40,BGA:41,LG:42,BRA:43,NOR:44,UST:45,ZEB:46,GRV:47,DEX:
48,WGA:49,LH:50,SD:51,FR:52,TUX:53,TLM:54,FLF:55,UCK:56,BLA:57,WIT:58,LAK:59,RHV:
60,AT:61,GR:62,PIF:63,PS:64,GVF:65,BVF:66,RBF:67,HWF:68,MWF:69,VWF:70,LPF:71,BRN:
72,BAZ:73,AO:74,BE:75,WL:76,BIS:77,YAK:78,SON:79,TAU:80,IND:81,TIN:82,WAG:83,XFF:
84,XFM:85,XMM:86,EVO:87,BLH:88,TLH:89,MGR:90,WSH:91,MUR:92,EBS:93,ERI:94,PAR:95,
XZF:96,XZM:97,XZZ:98,LAST:99};C.BreedToString={BT:function(A9){var Bv=A9;var BK=
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
A.ack.XMM);break;case 87:BK=A.aaR(A.ack.EVO);break;case 88:BK=A.aaR(A.ack.BLH);break;
case 89:BK=A.aaR(A.ack.TLH);break;case 90:BK=A.aaR(A.ack.MGR);break;case 91:BK=A.
aaR(A.ack.WSH);break;case 92:BK=A.aaR(A.ack.MUR);break;case 93:BK=A.aaR(A.ack.EBS
);break;case 94:BK=A.aaR(A.ack.ERI);break;case 95:BK=A.aaR(A.ack.PAR);break;case
96:BK=A.aaR(A.ack.XZF);break;case 97:BK=A.aaR(A.ack.XZM);break;case 98:BK=A.aaR(
A.ack.XZZ);break;default:throw new Error(AZX+Bv.toFixed());}return BK;},_Init:function(
aArg){C.EnumToString._Init.call(this,aArg);this.__proto__=C.BreedToString;},_className:
"Device::BreedToString"};C.TR={timer:null,Q:null,Ec:0,Dx:0,JX:0,Pz:1000,PJ:1000,
Bw:false,Cx:false,B3:true,Mm:function(G){var F;if(!this.timer)return;if(this.Ec<
0){this.Dx=this.timer.Bs;this.Ec=0;}var Av=(this.timer.Bs-this.Dx)|0;var Ox=this.
Pz;var Hh=this.PJ+this.Pz;var LL=0;var Jp=this.Ec;if(!Jp&&(Av>=Ox)){Jp=1;Av=Av-Ox;
}if((Jp>0)&&(Av>=Hh)){var Ij=(Av/Hh)|0;Av=Av-(Ij*Hh);Jp=Jp+Ij;}if((Jp>2)&&!this.
JX)Jp=1;if(Jp!==this.Ec){this.Dx=this.timer.Bs-(((B=Av)<0)?B+0x100000000:B);this.
Ec=Jp;}if(Jp>0)LL=this.PJ;var KJ=(Jp>=this.JX)&&(this.JX>0);if(!!this.Q){if((!KJ&&(
Av>=LL))&&((F=this.Q,F[1].call(F[0]))!==this.Cx))(F=this.Q,F[2].call(F[0],this.Cx
));if((KJ||((Av<LL)&&(Jp>0)))&&((F=this.Q,F[1].call(F[0]))!==this.B3))(F=this.Q,
F[2].call(F[0],this.B3));}if(KJ)this.As(false);},HQ:function(E){if(E<0)E=0;this.
JX=E;},Fr:function(E){if(E<100)E=100;this.Pz=E;},Uy:function(E){if(E<0)E=0;this.
PJ=E;},As:function(E){if(this.Bw===E)return;this.Bw=E;if(!E&&!!this.timer){A.z9([
this,this.Mm],this.timer,0);this.timer=null;}if(E){this.timer=A._GetAutoObject(A.
acl.Aem);A.zV([this,this.Mm],this.timer,0);this.Ec=-1;}},_Init:function(aArg){this.
__proto__=C.TR;A.h7++;},_Done:function(){this.__proto__=null;A.h7--;},_ReInit:function(
){},_Mark:function(D){var B;if((B=this.timer)&&(B._cycle!=D))B._Mark(B._cycle=D);
if((B=this.Q)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.I)&&(B._cycle
!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:"Device::BoolEffect"
};C.Io={AnimalId:0,TransponderId:1,BFe:2,BFd:3,BFh:4,BFg:5};C.Ava={BDK:0,BEh:1};
C.AnimalIdGenerationMethodToString={BT:function(A9){var Alz=A9;var Ao5=A.jV;switch(
Alz){case 0:Ao5=A.aaR(A.acf.Uq);break;case 1:Ao5=A.aaR(A.acf.Transponder);break;
case 3:Ao5=(A.aaR(A.acf.Manual)+Oj)+A.aaR(A.acf.Male);break;case 2:Ao5=(A.aaR(A.
acf.Manual)+Oj)+A.aaR(A.acf.Female);break;case 4:Ao5=(A.aaR(A.acf.Manual)+Oj)+A.
aaR(A.acf.Unknown);break;case 5:Ao5=(A.aaR(A.acf.Manual)+Oj)+AZY;break;default:throw new
Error(AZZ+Alz.toFixed());}return Ao5;},_Init:function(aArg){C.EnumToString._Init.
call(this,aArg);this.__proto__=C.AnimalIdGenerationMethodToString;},_className:"Device::AnimalIdGenerationMethodToString"
};C.DirectionOfCountingToString={BT:function(A9){var AzU=A9;var A2j=A.jV;switch(
AzU){case 0:A2j=AZ0;break;case 1:A2j=AZ1;break;default:throw new Error(AyN+AzU.toFixed(
));}return A2j;},_Init:function(aArg){C.EnumToString._Init.call(this,aArg);this.
__proto__=C.DirectionOfCountingToString;},_className:"Device::DirectionOfCountingToString"
};C.EnumToIcon={AsT:function(A9){throw new Error(Atd+A9.toFixed());},AsU:function(
A9){throw new Error(Atd+A9.toFixed());},_Init:function(aArg){this.__proto__=C.EnumToIcon;
A.h7++;},_Done:function(){this.__proto__=null;A.h7--;},_ReInit:function(){},_Mark:
function(D){var B;if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:
0,_observers:null,_className:"Device::EnumToIcon"};C.Ael={AsT:function(A9){return A.
aaL(A.ach.AVq);},AsU:function(A9){var AzU=A9;var RL=-1;switch(AzU){case 0:RL=3;break;
case 1:RL=2;break;default:throw new Error(AIN+AzU.toFixed());}return RL;},_Init:
function(aArg){C.EnumToIcon._Init.call(this,aArg);this.__proto__=C.Ael;},_className:
"Device::DirectionOfCountingToIcon"};C.Ad2={AsT:function(A9){return A.aaL(A.ach.
AVo);},AsU:function(A9){var Alz=A9;var RL=-1;switch(Alz){case 0:RL=0;break;case 1:
RL=6;break;case 3:RL=4;break;case 2:RL=5;break;case 4:RL=2;break;case 5:RL=3;break;
default:throw new Error(AIN+Alz.toFixed());}return RL;},_Init:function(aArg){C.EnumToIcon.
_Init.call(this,aArg);this.__proto__=C.Ad2;},_className:"Device::AnimalIdGenerationMethodToIcon"
};C.PE={UNDEFINED:0,SH:1,APa:2,ASa:3,AO$:4,A8l:5,HE:6,A$B:7,A5R:8,AM5:9,AUS:10,BE:
11,BB:12,A79:13,AUT:14,AUU:15,AVv:16};C.GermanStateToString={BT:function(A9){var
Bp=A9;var GF=A.jV;switch(Bp){case 1:GF=A.aaR(A.acp.SH);break;case 2:GF=A.aaR(A.acp.
APa);break;case 3:GF=A.aaR(A.acp.ASa);break;case 4:GF=A.aaR(A.acp.AO$);break;case
5:GF=A.aaR(A.acp.A8l);break;case 6:GF=A.aaR(A.acp.HE);break;case 7:GF=A.aaR(A.acp.
A$B);break;case 8:GF=A.aaR(A.acp.A5R);break;case 9:GF=A.aaR(A.acp.AM5);break;case
10:GF=A.aaR(A.acp.AUS);break;case 11:GF=A.aaR(A.acp.BE);break;case 12:GF=A.aaR(A.
acp.BB);break;case 13:GF=A.aaR(A.acp.A79);break;case 14:GF=A.aaR(A.acp.AUT);break;
case 15:GF=A.aaR(A.acp.AUU);break;case 16:GF=A.aaR(A.acp.AVv);break;case 0:GF=AoC;
break;default:throw new Error(Aln+Bp.toFixed());}return GF;},LA:function(A9){var
Bp=A9;var GF=A.jV;switch(Bp){case 1:GF=A.aaR(A.acp.Bpj);break;case 2:GF=A.aaR(A.
acp.APa);break;case 3:GF=A.aaR(A.acp.ASa);break;case 4:GF=A.aaR(A.acp.AO$);break;
case 5:GF=A.aaR(A.acp.BkV);break;case 6:GF=A.aaR(A.acp.HE);break;case 7:GF=A.aaR(
A.acp.BoX);break;case 8:GF=A.aaR(A.acp.Bh0);break;case 9:GF=A.aaR(A.acp.AM5);break;
case 10:GF=A.aaR(A.acp.AUS);break;case 11:GF=A.aaR(A.acp.BE);break;case 12:GF=A.
aaR(A.acp.BB);break;case 13:GF=A.aaR(A.acp.BkH);break;case 14:GF=A.aaR(A.acp.AUT
);break;case 15:GF=A.aaR(A.acp.AUU);break;case 16:GF=A.aaR(A.acp.AVv);break;case
0:GF=AoC;break;default:throw new Error(Aln+Bp.toFixed());}return GF;},BqA:function(
A9){var Bp=A9;var Gj=-1;switch(Bp){case 0:Gj=0;break;case 1:Gj=1;break;case 2:Gj=
2;break;case 3:Gj=3;break;case 4:Gj=4;break;case 5:Gj=5;break;case 6:Gj=6;break;
case 7:Gj=7;break;case 8:Gj=8;break;case 9:Gj=9;break;case 10:Gj=10;break;case 11:
Gj=11;break;case 12:Gj=12;break;case 13:Gj=13;break;case 14:Gj=14;break;case 15:
Gj=15;break;case 16:Gj=16;break;default:throw new Error(Aln+Bp.toFixed());}return Gj;
},BqB:function(A9){var Bp=A9;var Gj=A.jV;switch(Bp){case 1:Gj=AyO;break;case 2:Gj=
AZ2;break;case 3:Gj=AZ3;break;case 4:Gj=AZ4;break;case 5:Gj=AIO;break;case 6:Gj=
AZ5;break;case 7:Gj=AZ6;break;case 8:Gj=AZ7;break;case 9:Gj=AZ8;break;case 10:Gj=
AIi;break;case 11:Gj=U1;break;case 12:Gj=AZ9;break;case 13:Gj=AZ_;break;case 14:
Gj=AZ$;break;case 15:Gj=A0a;break;case 16:Gj=AIP;break;case 0:Gj=AoC;break;default:
throw new Error(Aln+Bp.toFixed());}return Gj;},_Init:function(aArg){C.EnumToString.
_Init.call(this,aArg);this.__proto__=C.GermanStateToString;},_className:"Device::GermanStateToString"
};C.EartagNrAssignmentMode={OneSingleRange:0,TwoNumberRanges:1,LAST:2};C.EartagNrAssignmentModeToString={
LA:function(A9){var Vp=A9;var NF=A.jV;switch(Vp){case 0:NF=A0b;break;case 1:NF=A0c;
break;default:throw new Error(AIQ+Vp.toFixed());}return NF;},BT:function(A9){var
Vp=A9;var NF=A.jV;switch(Vp){case 0:NF=A.aaR(A.acf.BoG);break;case 1:NF=A.aaR(A.
acf.BqN);break;default:throw new Error(AIQ+Vp.toFixed());}return NF;},_Init:function(
aArg){C.EnumToString._Init.call(this,aArg);this.__proto__=C.EartagNrAssignmentModeToString;
},_className:"Device::EartagNrAssignmentModeToString"};C.BDD={BFv:0,BFl:1,BEy:2,
BEz:3,BEA:4,BGw:5};C.EnumToCodeset={AmL:function(Ah8){throw new Error(A0d+Ah8.toFixed(
));},Aeo:function(A9){throw new Error(Atd+A9.toFixed());},Aq3:function(){A.ab5("%s"
,AIR);return 0;},H8:function(){A.ab5("%s",AIR);return 0;},_Init:function(aArg){this.
__proto__=C.EnumToCodeset;A.h7++;},_Done:function(){this.__proto__=null;A.h7--;}
,_ReInit:function(){},_Mark:function(D){var B;if((B=this.I)&&(B._cycle!=D))B._Mark(
B._cycle=D);},I:null,_cycle:0,_observers:null,_className:"Device::EnumToCodeset"
};C.Na={AmL:function(Ah8){var Bv;switch(Ah8){case 1:Bv=1;break;case 2:Bv=2;break;
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
Bv=0;}return Bv;},Aeo:function(A9){var Bv=A9;var BM=0;switch(Bv){case 0:BM=0;break;
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
case 98:BM=111;break;default:throw new Error(A0e+Bv.toFixed());}return BM;},Aq3:
function(){return 0;},H8:function(){return 111;},_Init:function(aArg){C.EnumToCodeset.
_Init.call(this,aArg);this.__proto__=C.Na;},_className:"Device::BreedToHitCodeset"
};C.ReasonOfLeaving={Unknown:0,A$8:1,RU:2,A$u:3,A7L:4,BFE:5,Bap:6,A8h:7,A5_:8,A$q:
9,A8f:10,A6c:11,BFU:12,BFV:13,LAST:14};C.ReasonOfLeavingToString={BT:function(A9
){var AdI=A9;var TA=A.jV;switch(AdI){case 0:TA=A.aaR(A.acf.Unknown);break;case 1:
TA=A.aaR(A.acf.A$8);break;case 2:TA=A.aaR(A.acf.RU);break;case 3:TA=A.aaR(A.acf.
A$u);break;case 4:TA=A.aaR(A.acf.A7L);break;case 5:TA=A.aaR(A.acf.BoH);break;case
6:TA=A.aaR(A.acf.Bap);break;case 7:TA=A.aaR(A.acf.A8h);break;case 8:TA=A.aaR(A.acf.
A5_);break;case 9:TA=A.aaR(A.acf.A$q);break;case 10:TA=A.aaR(A.acf.A8f);break;case
11:TA=A.aaR(A.acf.A6c);break;case 12:TA=A.aaR(A.acf.BoS);break;case 13:TA=A.aaR(
A.acf.BoR);break;default:throw new Error(A0f+AdI.toFixed());}return TA;},_Init:function(
aArg){C.EnumToString._Init.call(this,aArg);this.__proto__=C.ReasonOfLeavingToString;
},_className:"Device::ReasonOfLeavingToString"};C.AhE={AmL:function(Ah8){var Pn;
switch(Ah8){case 1:Pn=1;break;case 2:Pn=2;break;case 3:Pn=3;break;case 4:Pn=4;break;
case 5:Pn=5;break;case 6:Pn=6;break;case 7:Pn=7;break;case 8:Pn=8;break;case 9:Pn=
9;break;case 10:Pn=10;break;case 11:Pn=11;break;case 12:Pn=12;break;case 13:Pn=13;
break;default:Pn=0;}return Pn;},Aeo:function(A9){var Pn=A9;var Jo=0;switch(Pn){case
0:Jo=0;break;case 2:Jo=2;break;case 8:Jo=8;break;case 11:Jo=11;break;case 4:Jo=4;
break;case 10:Jo=10;break;case 7:Jo=7;break;case 5:Jo=5;break;case 9:Jo=9;break;
case 3:Jo=3;break;case 12:Jo=12;break;case 13:Jo=13;break;case 1:Jo=1;break;case
6:Jo=6;break;default:throw new Error(AyP+Pn.toFixed());}return Jo;},Aq3:function(
){return 0;},H8:function(){return 13;},_Init:function(aArg){C.EnumToCodeset._Init.
call(this,aArg);this.__proto__=C.AhE;},_className:"Device::ReasonOfLeavingToCodeset"
};C.K2={AmL:function(Ah8){var Lc;switch(Ah8){case 1:Lc=1;break;case 2:Lc=2;break;
case 3:Lc=3;break;case 4:Lc=4;break;case 5:Lc=5;break;case 6:Lc=6;break;case 7:Lc=
7;break;case 8:Lc=8;break;case 9:Lc=9;break;case 10:Lc=10;break;default:Lc=0;}return Lc;
},Aeo:function(A9){var Lc=A9;var Jo=0;switch(Lc){case 0:Jo=0;break;case 2:Jo=2;break;
case 1:Jo=1;break;case 9:Jo=9;break;case 6:Jo=6;break;case 8:Jo=8;break;case 7:Jo=
7;break;case 5:Jo=5;break;case 10:Jo=10;break;case 4:Jo=4;break;case 3:Jo=3;break;
default:throw new Error(AyP+Lc.toFixed());}return Jo;},Aq3:function(){return 0;}
,H8:function(){return 10;},_Init:function(aArg){C.EnumToCodeset._Init.call(this,
aArg);this.__proto__=C.K2;},_className:"Device::WhereAboutsToCodeset"};C.AmT={_Init:
function(aArg){this.__proto__=C.AmT;A.h7++;},_Done:function(){this.__proto__=null;
A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((B=this.I)&&(B._cycle!=
D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:"Device::EmptyClass"
};C.CalfDeregistrationsTableFields={Year:0,Deregistrations:1,Deaths:2};C.CalfDeregistrations={
Deregistrations:0,Deaths:0,Year:0,E3:function(Ad,AH){var HG=C.Row.E3.call(this,Ad
,AH);if(HG&&!!AH){this.AkI(AH.CG(Ad,0));this.AwK(AH.CG(Ad,1));this.AwJ(AH.CG(Ad,
2));}return HG;},Ci:function(AH){var HG=C.Row.Ci.call(this,AH);if(HG&&!!AH){var Jt=
AH.OG();if(Jt<=0)A.ab5("%s",Xq);else{if(this.Ana())this.CL=AH.YP();AH.Hp(this.CL
,0,this.Year);AH.Hp(this.CL,1,this.Deregistrations);AH.Hp(this.CL,2,this.Deaths);
AH.OI(Jt);}}return HG;},Gs:function(){C.Row.Gs.call(this);this.AkI(-1);},E7:function(
){C.Row.E7.call(this);this.AkI(0);this.AwK(0);this.AwJ(0);},AwK:function(E){if(this.
Deregistrations===E)return;this.Deregistrations=E;A.abo([this,this.Blv,this.AwK]
,0);},AwJ:function(E){if(this.Deaths===E)return;this.Deaths=E;A.abo([this,this.Blt
,this.AwJ],0);},AkI:function(E){if(this.Year===E)return;this.Year=E;A.abo([this,
this.ArM,this.AkI],0);},Blv:function(){return this.Deregistrations;},Blt:function(
){return this.Deaths;},ArM:function(){return this.Year;},_Init:function(aArg){C.
Row._Init.call(this,aArg);this.__proto__=C.CalfDeregistrations;this.TableId=4;},
_className:"Device::CalfDeregistrations"};C.Au_={Undefined:0,Display:1,A$A:2,A$N:
3,BaI:4,BES:5,BF7:6,BGI:7,BFc:8,BD6:9,BDs:10,A68:11,A$C:12,BGS:13,A8k:14,BGV:15};
C.DeviceComponentToString={BT:function(A9){var Bdy=A9;var Qr=A.jV;switch(Bdy){case
0:Qr=A0g;break;case 10:Qr=A.aaR(A.acf.BhB);break;case 9:Qr=A.aaR(A.acf.Bif);break;
case 1:Qr=A.aaR(A.acf.Bi5);break;case 11:Qr=A.aaR(A.acf.A68);break;case 5:Qr=A.aaR(
A.acf.Bq7);break;case 8:Qr=A.aaR(A.acf.Bi7);break;case 14:Qr=A.aaR(A.acf.A8k);break;
case 2:Qr=A.aaR(A.acf.A$A);break;case 12:Qr=A.aaR(A.acf.A$C);break;case 6:Qr=A.aaR(
A.acf.BoW);break;case 3:Qr=A.aaR(A.acf.A$N);break;case 7:Qr=A.aaR(A.acf.Bi8);break;
case 13:Qr=A.aaR(A.acf.BiH);break;case 15:Qr=A.aaR(A.acf.Bq$);break;case 4:Qr=A.
aaR(A.acf.BaI);break;default:throw new Error(Atq+Bdy.toFixed());}return Qr;},_Init:
function(aArg){C.EnumToString._Init.call(this,aArg);this.__proto__=C.DeviceComponentToString;
},_className:"Device::DeviceComponentToString"};C.AgW={AmL:function(Ah8){return Ah8;
},Aeo:function(A9){return A9;},Aq3:function(){return 0;},H8:function(){return 4;
},_Init:function(aArg){C.EnumToCodeset._Init.call(this,aArg);this.__proto__=C.AgW;
},_className:"Device::EaseOfDeliveryToCodeset"};C.AeY={AsT:function(A9){return A.
aaL(A.ach.AQm);},AsU:function(A9){var BdK=A9;var RL=-1;switch(BdK){case 0:RL=0;break;
case 1:RL=1;break;case 2:RL=2;break;default:throw new Error(A0h+BdK.toFixed());}
return RL;},_Init:function(aArg){C.EnumToIcon._Init.call(this,aArg);this.__proto__=
C.AeY;},_className:"Device::MotherSelectionFilterModeToIcon"};C.WhereAboutsFilterCriterion={
A5:0,Abt:function(){var Aw=A._NewObject(C.WhereAboutsFilterCriterion,0);Aw.Fa(this
);return Aw;},Fa:function(AI){C.FilterCriterion.Fa.call(this,AI);var Aw=(C.WhereAboutsFilterCriterion.
isPrototypeOf(AI)?AI:null);if(!!Aw)this.A5=Aw.A5;},Initialize:function(A4,Eb,A8,
Qj){this.EJ=A4;this.Operator=Eb;this.A5=A8;this.YR=Qj;return this;},_Init:function(
aArg){C.FilterCriterion._Init.call(this,aArg);this.__proto__=C.WhereAboutsFilterCriterion;
},_className:"Device::WhereAboutsFilterCriterion"};C.BFo={AOc:0,BEb:1,APX:2,LAST:
3};C.BGy={GL:0,AWa:1,Hl:2,Year:3,LAST:4};C.TimespanDaysToString={BT:function(A9){
var Bg9=A9;var ABC=A.jV;switch(Bg9){case 0:ABC=A.aaR(A.acf.A6p);break;case 1:ABC=
A.aaR(A.acf.AWa);break;case 2:ABC=A.aaR(A.acf.Hl);break;case 3:ABC=A.aaR(A.acf.Year
);break;default:throw new Error(A0i+Bg9.toFixed());}return ABC;},_Init:function(
aArg){C.EnumToString._Init.call(this,aArg);this.__proto__=C.TimespanDaysToString;
},_className:"Device::TimespanDaysToString"};C.Z8={BFB:0,BEi:1,BEU:2,BEX:3,BEW:4
,BEj:5,BEV:6,LAST:7};C.USBStateToString={BT:function(A9){var Bhv=A9;var Bp=A.jV;
switch(Bhv){case 0:Bp=Atr;break;case 2:Bp=AyQ;break;case 1:Bp=AyR;break;case 5:Bp=
A0j;break;case 3:Bp=A0k;break;case 4:Bp=A0l;break;case 6:Bp=AIS;break;default:throw new
Error(AIb+Bhv.toFixed());}return Bp;},_Init:function(aArg){C.EnumToString._Init.
call(this,aArg);this.__proto__=C.USBStateToString;},_className:"Device::USBStateToString"
};C.AgQ={BET:0,BDE:1,BFW:2};C.AxO={ACI:A.jV,Timestamp:0,AEv:0,AEA:0,AGK:0,OnSetTimestamp:
function(E){if(this.Timestamp===E)return;this.Timestamp=E;},AFK:function(E){if(this.
AEv===E)return;this.AEv=E;},AFQ:function(E){if(this.AEA===E)return;this.AEA=E;},
AF0:function(E){if(this.AGK===E)return;this.AGK=E;},AFp:function(E){if(this.ACI===
E)return;this.ACI=E;},_Init:function(aArg){this.__proto__=C.AxO;A.h7++;},_Done:function(
){this.__proto__=null;A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((
B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:
"Device::SoftwareVersionInformation"};C.AvE={Timestamp:0,AR0:0,AR1:0,AVN:0,AVO:0
,AVM:0,ARZ:0,OnSetTimestamp:function(E){if(this.Timestamp===E)return;this.Timestamp=
E;},AFH:function(E){if(this.AR0===E)return;this.AR0=E;},AFI:function(E){if(this.
AR1===E)return;this.AR1=E;},AGc:function(E){if(this.AVN===E)return;this.AVN=E;},
AGd:function(E){if(this.AVO===E)return;this.AVO=E;},AGb:function(E){if(this.AVM===
E)return;this.AVM=E;},AFG:function(E){if(this.ARZ===E)return;this.ARZ=E;},_Init:
function(aArg){this.__proto__=C.AvE;A.h7++;},_Done:function(){this.__proto__=null;
A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((B=this.I)&&(B._cycle!=
D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:"Device::HardwareVersionInformation"
};C.AqB={Undefined:0,BEJ:1,BDS:2};C.AgD={Manual:0,TransponderId:1,LAST:2};C.AnimalIdAutoGenerationMethodToString={
BT:function(A9){var Bc5=A9;var A1P=A.jV;switch(Bc5){case 0:A1P=A.aaR(A.acf.A6g);
break;case 1:A1P=A.aaR(A.acf.A6w);break;default:throw new Error(AIT+Bc5.toFixed(
));}return A1P;},_Init:function(aArg){C.EnumToString._Init.call(this,aArg);this.
__proto__=C.AnimalIdAutoGenerationMethodToString;},_className:"Device::AnimalIdAutoGenerationMethodToString"
};C.Hl={A51:0,AEk:1,AC5:2,AEw:3,AB6:4,AEy:5,AEm:6,AEl:7,ACb:8,AGS:9,AEL:10,AEJ:11
,ACQ:12,LAST:13};C.MonthToString={BT:function(A9){var BeN=A9;var XM=A.jV;switch(
BeN){case 1:XM=A.aaR(A.act.AEk);break;case 2:XM=A.aaR(A.act.AC5);break;case 3:XM=
A.aaR(A.act.AEw);break;case 4:XM=A.aaR(A.act.AB6);break;case 5:XM=A.aaR(A.act.AEy
);break;case 6:XM=A.aaR(A.act.AEm);break;case 7:XM=A.aaR(A.act.AEl);break;case 8:
XM=A.aaR(A.act.ACb);break;case 9:XM=A.aaR(A.act.AGS);break;case 10:XM=A.aaR(A.act.
AEL);break;case 11:XM=A.aaR(A.act.AEJ);break;case 12:XM=A.aaR(A.act.ACQ);break;default:
throw new Error(Alo+BeN.toFixed());}return XM;},_Init:function(aArg){C.EnumToString.
_Init.call(this,aArg);this.__proto__=C.MonthToString;},_className:"Device::MonthToString"
};C.V2={FileName:A.jV,AGM:0,EN:0,AgQ:0,AVh:false,E7:function(){this.E5(0);this.AgQ=
1;this.FileName=A.jV;this.AGM=0;this.AVh=false;},E5:function(E){if(this.EN===E)return;
this.EN=E;A.abo([this,this.SL,this.E5],0);},SL:function(){return this.EN;},_Init:
function(aArg){this.__proto__=C.V2;A.h7++;},_Done:function(){this.__proto__=null;
A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((B=this.I)&&(B._cycle!=
D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:"Device::DataExportContext"
};C.AWh={Init:function(aArg){var B;A.zX([this,this.Bf1],[B=A._GetAutoObject(C.Device
),B.A9W,B.Bb6],0);this.Bf1(this);},Ci:function(){A._GetAutoObject(C.Device).Ask(
this.toString());},Bf1:function(G){this.E3(A._GetAutoObject(C.Device).AHA);A.we(
this,0);},_Init:function(aArg){C.Int32ArrayWrapper._Init.call(this,aArg);this.__proto__=
C.AWh;this.ZG(3);this.Init(aArg);},_className:"Device::WeightGainsLowClass"};C.AWg={
Init:function(aArg){var B;A.zX([this,this.BfZ],[B=A._GetAutoObject(C.Device),B.A9V
,B.Bb5],0);this.BfZ(this);},Ci:function(){A._GetAutoObject(C.Device).Asj(this.toString(
));},BfZ:function(G){this.E3(A._GetAutoObject(C.Device).AHz);A.we(this,0);},_Init:
function(aArg){C.Int32ArrayWrapper._Init.call(this,aArg);this.__proto__=C.AWg;this.
ZG(3);this.Init(aArg);},_className:"Device::WeightGainsHighClass"};C.AWj={Init:function(
aArg){var B;A.zX([this,this.Bf3],[B=A._GetAutoObject(C.Device),B.A9Z,B.Bb9],0);this.
Bf3(this);},Ci:function(){A._GetAutoObject(C.Device).Asl(this.toString());},Bf3:
function(G){this.E3(A._GetAutoObject(C.Device).AHD);A.we(this,0);},_Init:function(
aArg){C.Int32ArrayWrapper._Init.call(this,aArg);this.__proto__=C.AWj;this.ZG(3);
this.Init(aArg);},_className:"Device::WeightValuesBirthClass"};C.AWf={Init:function(
aArg){var B;A.zX([this,this.BfX],[B=A._GetAutoObject(C.Device),B.A9U,B.Bb4],0);this.
BfX(this);},Ci:function(){A._GetAutoObject(C.Device).Asi(this.toString());},BfX:
function(G){this.E3(A._GetAutoObject(C.Device).AHy);A.we(this,0);},_Init:function(
aArg){C.Int32ArrayWrapper._Init.call(this,aArg);this.__proto__=C.AWf;this.ZG(3);
this.Init(aArg);},_className:"Device::WeightGainsAverageClass"};C.AMV={Init:function(
aArg){var B;A.zX([this,this.Bfh],[B=A._GetAutoObject(C.Device),B.A8Z,B.BbD],0);this.
Bfh(this);},Bfh:function(G){this.E3(A._GetAutoObject(C.Device).AB5);A.we(this,0);
},_Init:function(aArg){C.Int32ArrayWrapper._Init.call(this,aArg);this.__proto__=
C.AMV;this.ZG(3);this.Init(aArg);},_className:"Device::AnimalTypesWeightGainsClass"
};C.BFr={BFu:0,BFi:1,BEa:2,BGT:3,Unknown:4};C.BDQ={None:0,BFC:1,BFw:2,BFs:3,BFt:
4};C.BGN={A8z:0,Manual:1,TransponderId:2,NaisId:3,LAST:4};C.TransponderLinkageIdChangeMethodToString={
BT:function(A9){var Bhc=A9;var ABE=A.jV;switch(Bhc){case 0:ABE=A.aaR(A.acf.A8z);
break;case 1:ABE=A.aaR(A.acf.A6g);break;case 2:ABE=A.aaR(A.acf.A6w);break;case 3:
ABE=A.aaR(A.acf.BiF);break;default:throw new Error(A0m+Bhc.toFixed());}return ABE;
},_Init:function(aArg){C.EnumToString._Init.call(this,aArg);this.__proto__=C.TransponderLinkageIdChangeMethodToString;
},_className:"Device::TransponderLinkageIdChangeMethodToString"};C.A$r={Bga:function(
AoQ){var Js=A.ab0(A.abV(AoQ,15),0,10);var Kc=A._GetAutoObject(C.Converter).S9(Js
);if(!!Kc){if(Kc===10){if((((AoQ.length!==16)||!A._GetAutoObject(A.acj.VO).AV3(AoQ
))||!!A._GetAutoObject(C.Converter).Bak(Js))||!A._GetAutoObject(C.Converter).AVR(
Js))return 0;else return Js;}else return Js;}else{Kc=A._GetAutoObject(C.Converter
).S9(A._GetAutoObject(C.Device).OZ);if(!!Kc&&(Kc===10)){if(!A._GetAutoObject(A.acj.
VO).AV3(AoQ))return 0;if(AoQ.length===12){var Bc4=A.ab0(A.abV(AoQ,10),0,10);var AKt=
A._GetAutoObject(C.Converter).AVR(Bc4);if((Bc4>0)&&!!AKt)return(A._GetAutoObject(
C.Converter).AqI(Kc)*1000000000000)+A.ab0(A.abV(AoQ,10),0,10);}}}return 0;},Bf$:
function(JI){if(!((JI.length===8)||((JI.length===10)&&A._GetAutoObject(A.acj.VO).
AV3(JI))))return 0;var AA6=A._NewObject(A.Core.Bs,0);var A4v=false;var A4A=A.abW(
JI,4,4);var At3=A.wz(A4A,0,10);if((At3<2000)||(At3>2100)){A4A=A.abV(JI,4);At3=A.
wz(A4A,0,10);A4v=true;}if((At3<2000)||(At3>2100))return 0;AA6.Year=At3;var ALd;var
AAa;if(A4v){ALd=A.abW(JI,4,2);AAa=A.wz(ALd,0,10);}else{ALd=A.abW(JI,2,2);AAa=A.wz(
ALd,0,10);}if((AAa<1)||(AAa>12))return 0;AA6.UA(AAa);var ALc;var Az$;if(A4v){ALc=
A.abW(JI,6,2);Az$=A.wz(ALc,0,10);}else{ALc=A.abV(JI,2);Az$=A.wz(ALc,0,10);}if((Az$<
1)||(Az$>AA6.Zu()))return 0;AA6.Lu(Az$);return AA6.JY();},_Init:function(aArg){this.
__proto__=C.A$r;A.h7++;},_Done:function(){this.__proto__=null;A.h7--;},_ReInit:function(
){},_Mark:function(D){var B;if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:
null,_cycle:0,_observers:null,_className:"Device::ParserClass"};C.AkL={_Init:function(
){C.A$r._Init.call(this,0);},_ReInit:function(){},_variants:function(){return this;
},_this:null};C.AnimalTableFieldsToString={BT:function(A9){var Aaw=A9;var MZ=A.jV;
switch(Aaw){case 14:MZ=A.aaR(A.acf.Afy);break;case 32:MZ=A.aaR(A.acf.Breed);break;
case 4:MZ=A.aaR(A.acf.Aej);break;case 28:MZ=A.aaR(A.acf.A56);break;case 33:MZ=A.
aaR(A.acf.AgN);break;case 23:MZ=A.aaR(A.acf.KP);break;case 7:MZ=A.aaR(A.acf.Aft);
break;case 2:MZ=A.aaR(A.acf.P);break;case 0:MZ=A.aaR(A.acf.GO);break;case 8:MZ=A.
aaR(A.acf.Alarm);break;case 9:MZ=A.aaR(A.acf.ACB);break;case 38:MZ=A.aaR(A.acf.Bi6
);break;case 11:MZ=A.aaR(A.acf.Fever);break;case 29:MZ=A.aaR(A.acf.ARN);break;case
18:MZ=A.aaR(A.acf.Nc);break;case 26:MZ=A.aaR(A.acf.Uq);break;case 22:MZ=A.aaR(A.
acf.Transponder);break;case 1:MZ=A.aaR(A.acf.GI);break;case 34:MZ=A.aaR(A.acf.Jm
);break;case 6:case 25:case 27:case 10:case 37:case 12:case 17:case 5:case 3:case
35:case 36:case 15:case 16:case 24:case 31:case 20:case 30:case 21:case 19:case 13:
MZ=A.jV;break;default:throw new Error(A0n+A9.toFixed());}return MZ;},_Init:function(
aArg){C.EnumToString._Init.call(this,aArg);this.__proto__=C.AnimalTableFieldsToString;
},_className:"Device::AnimalTableFieldsToString"};C.AEt={Bg:0,BGq:1,LAST:2};C.ListViewScopeToString={
BT:function(A9){var BAF=A9;var A3c=A.jV;switch(BAF){case 0:A3c=A.aaR(A.acf.Bg);break;
case 1:A3c=A.aaR(A.acf.BpN);break;default:throw new Error(A0o+A9.toFixed());}return A3c;
},_Init:function(aArg){C.EnumToString._Init.call(this,aArg);this.__proto__=C.ListViewScopeToString;
},_className:"Device::ListViewScopeToString"};C.AHC={BHk:0,BHj:1,BHi:2,LAST:3};C.
WeightValuePrecisionToString={BT:function(A9){var BDo=A9;var ALQ=A.jV;switch(BDo
){case 0:ALQ=A0p+A.aaR(A.acf.AAo);break;case 1:ALQ=AyS+A.aaR(A.acf.AiH);break;case
2:ALQ=Ats+A.aaR(A.acf.AiH);break;default:throw new Error(AIU+A9.toFixed());}return ALQ;
},_Init:function(aArg){C.EnumToString._Init.call(this,aArg);this.__proto__=C.WeightValuePrecisionToString;
},_className:"Device::WeightValuePrecisionToString"};C.AgI={BT:function(A9){var ALl=
A9;if(ALl===1)return A.aaR(A.acf.Bj2);else return C.AnimalTypeToString.BT.call(this
,A9);},_Init:function(aArg){C.AnimalTypeToString._Init.call(this,aArg);this.__proto__=
C.AgI;},_className:"Device::AnimalTypeToStringHeifer"};C.Wu={RU:0,BFy:1,LAST:2};
C.MassDeregistrationCriterionToString={BT:function(A9){var BAI=A9;var A3h=A.jV;switch(
BAI){case 0:A3h=A.aaR(A.acf.Bk8);break;case 1:A3h=A.aaR(A.acf.ASx);break;default:
throw new Error(Ayq+A9.toFixed());}return A3h;},_Init:function(aArg){C.EnumToString.
_Init.call(this,aArg);this.__proto__=C.MassDeregistrationCriterionToString;},_className:
"Device::MassDeregistrationCriterionToString"};C.UInt64PartialFilterCriterion={A5:
A.jV,Zs:0,OK:0,Abt:function(){var Aw=A._NewObject(C.UInt64PartialFilterCriterion
,0);Aw.Fa(this);return Aw;},Fa:function(AI){C.FilterCriterion.Fa.call(this,AI);var
Aw=(C.UInt64PartialFilterCriterion.isPrototypeOf(AI)?AI:null);if(!!Aw){this.A5=Aw.
A5;this.Zs=Aw.Zs;this.OK=Aw.OK;}},Initialize:function(A4,Eb,A8,AtD,AJk,Qj){this.
EJ=A4;this.Operator=Eb;this.A5=A8;this.YR=Qj;this.Zs=AtD;this.OK=AJk;return this;
},_Init:function(aArg){C.FilterCriterion._Init.call(this,aArg);this.__proto__=C.
UInt64PartialFilterCriterion;},_className:"Device::UInt64PartialFilterCriterion"
};C.BEf={Idle:0,BF3:1,BGc:2,BGt:3,Error:4};C.AV2={Ass:0,AsZ:0,Z8:0,AT$:function(
E){if(this.Z8===E)return;this.Z8=E;A.abo([this,this.Bmf,this.AT$],0);},AUb:function(
E){if(this.AsZ===E)return;this.AsZ=E;A.abo([this,this.Bmh,this.AUb],0);},ATN:function(
E){if(this.Ass===E)return;this.Ass=E;A.abo([this,this.BlT,this.ATN],0);},Bmf:function(
){return this.Z8;},Bmh:function(){return this.AsZ;},BlT:function(){return this.Ass;
},_Init:function(aArg){this.__proto__=C.AV2;A.h7++;},_Done:function(){this.__proto__=
null;A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((B=this.I)&&(B._cycle
!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:"Device::UsbDevice"
};
C._Init=function(){C.Int32FilterCriterion.__proto__=C.FilterCriterion;C.StringFilterCriterion.
__proto__=C.FilterCriterion;C.Table.__proto__=C.ITable;C.Animal.__proto__=C.Row;
C.Rating.__proto__=C.Row;C.HelperClass.__proto__=C.AmT;C.BoolFilterCriterion.__proto__=
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
C.AVD.__proto__=C.Int32ArrayWrapper;C.AVC.__proto__=C.Int32ArrayWrapper;C.AMU.__proto__=
C.Int32ArrayWrapper;C.UInt64FilterCriterion.__proto__=C.FilterCriterion;C.BooleanToAssignedUnassignedString.
__proto__=C.EnumToString;C.CountryToString.__proto__=C.EnumToString;C.EaseOfDeliveryToString.
__proto__=C.EnumToString;C.WhereAboutsToString.__proto__=C.EnumToString;C.BreedToString.
__proto__=C.EnumToString;C.AnimalIdGenerationMethodToString.__proto__=C.EnumToString;
C.DirectionOfCountingToString.__proto__=C.EnumToString;C.Ael.__proto__=C.EnumToIcon;
C.Ad2.__proto__=C.EnumToIcon;C.GermanStateToString.__proto__=C.EnumToString;C.EartagNrAssignmentModeToString.
__proto__=C.EnumToString;C.Na.__proto__=C.EnumToCodeset;C.ReasonOfLeavingToString.
__proto__=C.EnumToString;C.AhE.__proto__=C.EnumToCodeset;C.K2.__proto__=C.EnumToCodeset;
C.CalfDeregistrations.__proto__=C.Row;C.DeviceComponentToString.__proto__=C.EnumToString;
C.AgW.__proto__=C.EnumToCodeset;C.AeY.__proto__=C.EnumToIcon;C.WhereAboutsFilterCriterion.
__proto__=C.FilterCriterion;C.TimespanDaysToString.__proto__=C.EnumToString;C.USBStateToString.
__proto__=C.EnumToString;C.AnimalIdAutoGenerationMethodToString.__proto__=C.EnumToString;
C.MonthToString.__proto__=C.EnumToString;C.AWh.__proto__=C.Int32ArrayWrapper;C.AWg.
__proto__=C.Int32ArrayWrapper;C.AWj.__proto__=C.Int32ArrayWrapper;C.AWf.__proto__=
C.Int32ArrayWrapper;C.AMV.__proto__=C.Int32ArrayWrapper;C.TransponderLinkageIdChangeMethodToString.
__proto__=C.EnumToString;C.AnimalTableFieldsToString.__proto__=C.EnumToString;C.
ListViewScopeToString.__proto__=C.EnumToString;C.WeightValuePrecisionToString.__proto__=
C.EnumToString;C.AgI.__proto__=C.AnimalTypeToString;C.MassDeregistrationCriterionToString.
__proto__=C.EnumToString;C.UInt64PartialFilterCriterion.__proto__=C.FilterCriterion;
};C._ReInit=function(){var B;if((B=C.Device._this))B._ReInit(),C.Device._ReInit.
call(B);if((B=C.Converter._this))B._ReInit(),C.Converter._ReInit.call(B);if((B=C.
Helper._this))B._ReInit(),C.Helper._ReInit.call(B);if((B=C.AkL._this))B._ReInit(
),C.AkL._ReInit.call(B);};C.DI=function(D){var B;if((B=C.Device._this)&&(B._cycle
!=D))B._Done(C.Device._this=null);if((B=C.Converter._this)&&(B._cycle!=D))B._Done(
C.Converter._this=null);if((B=C.Helper._this)&&(B._cycle!=D))B._Done(C.Helper._this=
null);if((B=C.AkL._this)&&(B._cycle!=D))B._Done(C.AkL._this=null);};return C;})(
);

/* VitalControl demonstration application, © Urban GmbH & Co.KG 2025 */