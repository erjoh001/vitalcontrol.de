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
var O$="ERROR: UpdateDataTable called for Undefined data table.";var Qb="ERROR: UpdateDataTable called for unknown data table id=";
var Qc="ERROR: SyncState is read only.";var CR="ERROR: ScanTransponder is read only.";
var Fe="ERROR: Body weight value is read only";var L9="ERROR: Predicted temperature value is read only";
var Qd="ERROR: TransferProgress is read only";var J9="ERROR: TransferTarget is read only";
var Oh="ERROR: unhandled assessment.";var Qe="Unhandled enum BodyTemperature: ";
var MR="AU";var Tf="AT";var U1="BE";var Aab="BA";var Xf="BG";var Ix="CA";var U2=
"CN";var Aac="TW";var U3="HR";var Aad="CY";var Xg="CZ";var Aae="DK";var Aaf="EE";
var U4="FI";var Xh="FR";var Pa="DE";var Aag="GR";var Oi="HU";var Rp="IE";var Xi=
"IT";var Xj="JP";var Tg="LV";var Xk="LT";var Aah="LU";var Xl="MT";var Xm="NL";var
Th="NO";var Ti="PL";var Tj="PT";var Aai="RO";var Tk="RU";var Aaj="SK";var AfF="SI";
var Aak="ES";var Xn="SE";var Aal="CH";var Xo="TR";var AhX="UA";var K3="UK";var AcR=
"US";var LB=".";var AhY="-";var Aoi="ERROR: Unhandled mass unit: ";var Oj=" ";var
Xp="Unhandled gender";var Aam="Unhandled animal type";var AfG="Unhandled Device::MassUnit.";
var AhZ="Unhandled Device::AnimalListContent.";var AcS="Avid";var U5="Ordicam / IER SA";
var Aoj="Agrident";var Aok="Datamars";var Aol="Allflex";var Aom="Texas Instruments";
var Ald="Nedap";var As5="Digital Angel";var Ayb="null";var Ayc="[ ";var Pb=", ";
var Rq=" ]";var Ayd="Unhandled language";var U6="Unhandled Device::AnimalListAction.";
var As6="Temperature unit conversion not supported: ";var Aye="->";var Ayf="=";var
Ale=">";var Ayg="<";var AfH="!=";var Aon="WARNING: Unhandled operator.";var I1="Unknown birth type";
var Aoo="Unhandled country: ";var As7="Unhandled Device::Action: ";var Xq="ERROR: Cannot start transaction";
var As8="ERROR: Table is null, cannot load row (";var As9=")";var As_="Table Id mismatch!";
var Aop="ERROR: Row index (";var As$=") out of bounds [0,";var Alf="]";var Ayh="ERROR: Table is full. Item limit: ";
var Ayi="Device::ScanTransponder not set";var Ayj="Unhandled TransponderType.";var
Ata="Unhandled ScanState.";var Ayk="Could not load animal with transponder";var Pc=
"Birth type";var Ayl="Time calving";var AWn="Pend. reg. notice";var AWo="Perished";
var AWp="Rating temp.";var AWq="Location";var AHD=" mother";var AHE="Reason leaving";
var AfI="Time alarm";var Aoq="Time first weighing";var AWr="Time control";var AHF=
"Time temp.";var Alg="Time watch";var AHG="Time weighing";var AHH="Assessment";var
AWs="Time rating";var AWt="ERROR: Unhandled AnimalTable filter field:";var AHI="Field ";
var AWu="ERROR: Unhandled RatingTable filter field:";var AcT="ERROR: Unhandled table ";
var AWv=" filter fields.";var AWw=" [";var AWx="WARNING: Unhandled filter criterion type.";
var AHJ="0";var Atb="No table specified";var AHK="Invalid animal id generation method: ";
var AHL="Unhandled AnimalIdGenerationMethod: ";var Aym="Invalid gender: ";var AHM=
"Invalid ear tag number assignment mode: ";var Ayn=";";var AWy="Invalid animal creation error code: ";
var AWz="Invalid EartagNrAssignmentMode: ";var AWA="Unsupported exponent: ";var AWB=
"Unknown whereabouts type: ";var AHN="Unhandled Gender: ";var AWC="Unhandled AnimalIdAutoGenerationMethod: ";
var MS="\n";var Ayo="\n\n";var AWD="Bootloader:\nV\xA0";var AWE="Middleware:\nV\xA0";
var AWF="GUI:\nV\xA0";var AWG="Mainboard: ";var AWH="Torchboard: ";var AHO="Operator not supported.";
var AWI="Unhandled Device::TransponderAssignmentIdChangeMethod: ";var Ayp="Unhandled mass deregistration criterion: ";
var AWJ="Could not load animal with naisId";var Atc="Unhandled enum value ";var Ayq=
"UNDEFINED";var AWK="Boot";var AHP="Charge";var AWL="ChargeWarning";var AHQ="ControlledPowerOff";
var AHR="DeviceMain";var AHS="DeviceService";var AWM="DeviceInfo";var AHT="DeviceDataManagement";
var AWN="DeviceAnimalDataMenu";var AWO="DeviceDeviceDataMenu";var Rr="DeviceCheck";
var U7="Home";var AWP="Settings";var AWQ="DateTimeSettings";var AWR="UnitsSettings";
var AWS="DataAcquisitionSettings";var AWT="RegistrationAutomaticSettings";var AWU=
"RegistrationPresettingsSettings";var AWV="TransponderAssignmentSettings";var Ah0=
"TransponderUnlinkSettings";var AHU="TemperatureSettings";var AWW="WeightGainSettings";
var AWX="DeviceSettings";var AHV="RegistrationSettings";var AHW="InitializationSettings";
var Ayr="PremisesSettings";var Qf="Sleep";var AWY="Sync";var AWZ="EditAnimalData";
var AW0="EditAnimalDataNaisId";var Atd="AnimalList";var AW1="AnimalListFilter";var
AW2="AlarmListFilter";var AW3="WatchListFilter";var AW4="AnimalActionActions";var
AW5="AnimalActionTemperature";var AW6="TemperatureMeasurement";var Ate="AnimalActionWeighing";
var AW7="AnimalActionRate";var AW8="AnimalActionUnregister";var AW9="AnimalActionPerished";
var AW_="AnimalActionNewBornCare";var AW$="AlarmList";var AXa="ControlMeasure";var
AXb="ControlList";var AXc="RangeTest";var AXd="ListsMain";var AXe="ListsIdManagement";
var AHX="WatchList";var Alh="EvaluationMenuMain";var AXf="EvaluationMenuWeights";
var AXg="EvaluationLosses";var AXh="EvaluationRatings";var Ays="EvaluationTemperatures";
var Ali="EvaluationWeights";var Ah1="EvaluationWeightsRecent";var Ayt="EvaluationBirthWeights";
var Aor="AnimalEvaluationFilter";var Ah2="NewMenu";var AXi="NewAnimals";var Ayu=
"NewAnimalManualData";var AHY="MassRecording";var AfJ="NewAnimalTransponderData";
var AHZ="NewAnimalLoss";var Aan="AutoActionScanScreen";var Alj="ManualActionScanScreen";
var Aos="SetTransponderScreen";var AXj="SetSaveTransponderScreen";var AXk="NewAnimalSetTransponderScreen";
var AXl="NewAnimalsSetTransponderScreen";var AXm="NewAnimalCalvingDataScreen";var
AXn="WeightListScreen";var Atf="AnimalSingleInfoScreen";var AH0="AnimalMultiInfoScreen";
var AH1="AnimalRegistrationDetails";var AXo="FreshCowListScreen";var AXp="FreshCowListFilterScreen";
var AXq="DryCowListScreen";var AXr="DryCowListFilterScreen";var AXs="NoTransponderListScreen";
var AXt="NoTransponderListFilterScreen";var AXu="YoungNoTransponderListScreen";var
AXv="YoungNoTransponderListFilterScreen";var AXw="NoNaisIdListScreen";var AXx="NoNaisIdListFilterScreen";
var AXy="RegistrationsListScreen";var Ayv="RegistrationsListFilterScreen";var AH2=
"ActionListScreen";var AH3="ActionListFilterScreen";var AH4="UpdateScreen";var AH5=
"MotherScanScreen";var AH6="SetSaveNaisIdScreen";var AH7="PurchasedAnimalsList";
var AXz="TextInput";var AXA="AnimalActions";var AXB="Unhandled display mode: ";var
AXC="None";var AXD="Actions Settings";var AXE="Auto Action";var AXF="Menu Item Settings";
var Ayw="Rating Type";var AH8="Weighing settings";var AXG="Options";var AH9="AnimalSearch";
var Ah3="AnimalSearchUnfiltered";var U8="AnimalSearchDriedOff";var AXH="MeasurementReady";
var Aao="AnimalMultiInfoMenu";var AXI="MassRecordingDefaults";var AXJ="MassRecordingFields";
var Alk="MassRecordingMenu";var AfK="BirthRegistrationsListMenu";var Ah4="Unhandled overlay menu: ";
var Aot="Error";var Ayx="Idle";var Pd="IdScanned";var AXK="NotFound";var AH_="Progress";
var AH$="Unhandled scan state: ";var AXL="Prediction";var Ayy="Ready";var AIa="Unhandled measure state: ";
var AXM="Unhandled temperature unit: ";var AXN="Unhandled species: ";var AXO="Bosanski";
var AXP="\u0411\u044A\u043B\u0433\u0430\u0440\u0441\u043A\u0438";var AXQ="\u6B63\u9AD4\u5B57/\u7E41\u9AD4\u5B57";
var AXR="Hrvatski";var AXS="\u010Ce\u0161tina";var AXT="Dansk";var AIb="English";
var AXU="Nederlands";var AIc="Eesti";var AId="Suomalainen";var Ayz="Fran\xE7ais";
var AXV="Deutsch";var AXW="\u0395\u03BB\u03BB\u03B7\u03BD\u03B9\u03BA\u03AC";var
AXX="Magyar";var AXY="Italiano";var AXZ="\u65E5\u672C\u8A9E";var AX0="Latvie\u0161u";
var AX1="Lietuvi\u0161kas";var AX2="Norsk";var Aou="Polski";var Atg="Portugu\xEAs";
var AIe="Rom\xE2n\u0103";var AX3="\u0420\u0443\u0441\u0441\u043A\u0438\u0439";var
AX4="Sloven\u0161\u010Dina";var AX5="Espa\xF1ol";var AX6="Svenska";var AX7="T\xFCrk\xE7e";
var AX8="\u0423\u043A\u0440\u0430\u0457\u043D\u0441\u044C\u043A\u0438\u0439";var
AIf="Unhandled language: ";var AX9="BS";var AX_="ZH";var AX$="CS";var AYa="DA";var
AYb="EN";var AYc="ET";var AYd="EL";var AYe="JA";var AIg="SL";var AYf="SV";var AYg=
"Unhandled gender: ";var AIh="Unhandled birth type: ";var AIi="Exporting";var AIj=
"ImportFinish";var AIk="ImportStart";var AyA="Importing";var AyB="Init";var AIl=
"Unhandled sync state: ";var AIm="Unhandled rating attribute: ";var AIn="Unhandled assessment: ";
var AyC="Illegal boolean value: ";var AyD="Unhandled popup ID:";var AYh="Unknown";
var AYi="Severe Error";var AYj="ErrorsDeviceDriverCheck";var AYk="Enter Sleep";var
AYl="About";var AYm="InfoSoftwareVersions";var AYn="InfoHardwareVersions";var AYo=
"InfoSerial";var AYp="ShutDown";var AYq="SuccessDataSync";var AYr="SuccessResetFactory";
var AYs="SuccessResetSettings";var AyE="SuccessResetAnimalData";var AYt="SuccessCreateBackup";
var AYu="SuccessRestoreBackup";var AyF="CreateBackupInProgress";var Ath="RestoreBackupInProgress";
var U9="FailedCreateBackup";var Ati="FailedRestoreBackup";var AYv="TechnicalDetails";
var AYw="WarningDataSync";var AYx="WarningFactory";var AIo="WarningResetAnimalData";
var AYy="WarningResetDeviceData";var AIp="WarningRestart";var AYz="WarningAutoAction";
var AYA="WarningAutoActionNotApplicable";var AYB="WarningNoMenuItem";var Atj="WarningEnterDemoMode";
var AYC="NoAnimalsRegistered";var AYD="MaxNumAnimalsReached";var AIq="MaxNumRatingsReached";
var AYE="MaxNumCalfDeregistrationsReached";var AYF="MissingTransponder";var AYG=
"EarTagNumberTooShort";var AYH="NoValidCountryCode";var AcU="WarningOutdatedAnimalWeight";
var AYI="WarningOutdatedAnimalWeights";var AYJ="WarningWeightEvaluationSingular";
var AYK="WarningWeightEvaluationPlural";var AYL="ScanError";var AIr="ScanNotFound";
var AYM="ScannedAnimalNotFound";var AYN="ScannedTransponderNotFound";var AYO="ScannedNaisIdNotFound";
var AYP="AnimalNotFound";var AYQ="SuccessUnregister";var AYR="SuccessUnregisterPerished";
var AIs="SuccessCreationNewAnimal";var AYS="SuccessCreationNewAnimals";var AYT="AnimalCreationInProgress";
var AYU="EvaluationInProgress";var AIt="DataSyncInProgress";var AIu="AddedToAlarm";
var AYV="RemovedFromAlarm";var AYW="AddedToWatch";var AYX="RemovedFromWatch";var
AYY="AddedToDryOff";var Rs="RemovedFromDryOff";var Atk="AnimalIdAlreadyExists";var
AIv="AnimalIdAlreadyExistsContinuable";var AIw="MissingAnimalId";var Aov="MissingAnimalIdMother";
var Aow="MissingEartagNumber";var AyG="MissingTransponderId";var AYZ="TransponderAlreadyRegistered";
var AIx="TransponderAlreadyRegisteredContinuable";var AY0="TransponderAlreadyRegisteredCapturable";
var AY1="HelpAnimalInfoRating";var AY2="WarningReassignTransponder";var AY3="CannotReassignNaisId";
var AY4="WarningResetToDefaultValue";var AY5="WarningResetThresholds";var AY6="WarningResetTempThresholds";
var AY7="UpdateFirmware";var AY8="UpdateFirmwareBatteryLow";var AY9="ConfirmFirmwareUpdated";
var AY_="ConfirmBootloaderUpdated";var AY$="QuestionAddAnotherCalfMultiples";var
AZa="RemovedAllBirthNoticesPending";var AZb="RemovedAllPurchasedNoticePending";var
AZc="RemovedFromBirthNoticePending";var AZd="RemovedFromPurchasedNoticePending";
var AZe="SuccessClearAnimalLoss";var Aox="RemovedAnimalBirth";var AIy="RemovedAnimalPurchased";
var AZf="WarningNoActionsForAnimalLoss";var AIz="SuccessLinkTransponder";var AIA=
"SuccessChangeTransponder";var AcV="SuccessUnlinkTransponder";var AIB="SuccessLinkNaisId";
var AZg="WarningDataExportHitBirthFailed";var AIC="SuccessDataExportHitBirth";var
AZh="SuccessDataExportHitBirthDownload";var AyH="SuccessDataExportHitBirthResetAdvice";
var AZi="WarningDataExportPurchasedFailed";var AZj="SuccessDataExportPurchased";
var AyI="SuccessDataExportPurchasedDownload";var AZk="SuccessDataExportPurchasedResetAdvice";
var AZl="WarningDataExportAnimalsFailed";var AZm="SuccessDataExportAnimalsRatings";
var AID="SuccessDataExportAnimalsDownload";var Aoy="WarningNoPremisesID";var AIE=
"WarningNoFlashDrivePresent";var AZn="WarningNoBackupPathPresent";var AIF="WarningNoBackupFilePresent";
var AIG="DemoFunctionNotAvailable";var All="WarningImpreciseTimeSetting";var AZo=
"ConfirmationRestoreBackup";var Aoz="ConfirmationMassDeregistration";var AZp="SuccessMassDeregistration";
var AIH="WarningParsedDateInFutureInvalid";var AII="WarningParsingDateFailed";var
AZq="WarningParsingNaisIdFailed";var AZr="WarningParsingShortNaisIdWithoutPremisesId";
var AIJ="DataExportInProgress";var AZs="BarcodeScannerConnectedSwitchScreen";var
AZt="BarcodeScannerDisconnectedSwitchScreen";var AZu="AnimalId";var AZv="FarmId";
var AZw="GroupId";var AZx="PersonId";var AZy="Unhandled transponder type: ";var AZz=
"FDX";var AZA="HDX";var AZB="HDX (Urban)";var AZC="Unhandled transponder protocol: ";
var AZD="Illegal RatingMode: ";var AZE="Unhandled mass unit: ";var AZF="Max array size is 10";
var AyJ="Index out of bounds";var Aap="ERROR: Received more integers than expected!";
var AIK="Unhandled double scan action :";var AyK="Illegal WeightRecordingMode: ";
var AZG="Illegal WeightRecordingScope: ";var AZH="AnimalDataGenderType";var AZI=
"AnimalDataShortNaisId";var AZJ="Rating";var AZK="Temperature";var AZL="Weight";
var Atl="Alarm infos";var Atm="Control infos";var Atn="Watch infos";var Ato="Fresh cow infos";
var AyL="No transponder infos";var AoA="Dry cow info";var AZM="No nais id infos";
var AZN="Birth registrations infos";var AZO="Purchased registrations infos";var AZP=
"Young no transponder infos";var AZQ="Unhandled animal list content:";var AZR="Illegal AutoRegistrationMode: ";
var AZS="Illegal FactoryResetScope: ";var AoB="??";var AZT="Illegal EaseOfDelivery: ";
var AZU="Illegal Whereabouts: ";var AZV="Illegal breed: ";var AZW="Unisex";var AZX=
"Illegal animalIdGenerationMethod: ";var AZY="Ascending";var AZZ="Descending";var
AyM="Illegal directionOfCountingName: ";var AIL="Unhandled direction of counting: ";
var Alm="Unhandled German state: ";var AyN="SH";var AZ0="HH";var AZ1="NI";var AZ2=
"HB";var AIM="NW";var AZ3="HE";var AZ4="RP";var AZ5="BW";var AZ6="BY";var AZ7="BB";
var AZ8="MV";var AZ9="SN";var AZ_="ST";var AIN="TH";var AZ$="One Range Male Female";
var A0a="Two Ranges Male Female";var AIO="Illegal EartagAssignmentMode: ";var A0b=
"Unhandled code set value ";var AIP="Implement in derived class";var A0c="Illegal HIT-Code: ";
var A0d="Illegal ReasonOfLeaving: ";var AyO="Illegal code: ";var A0e="Undefined";
var Atp="Illegal DeviceComponent: ";var A0f="Unhandled Device::MotherSelectionFilterMode: ";
var A0g="Illegal Device::TimespanDays: ";var Atq="Not connected";var AyP="Host";
var AyQ="Device";var A0h="Device CDC";var A0i="Host MSC";var A0j="Host HID";var AIQ=
"Host CDC";var AIR="Illegal animalIdAutoGenerationMethod: ";var Aln="Unhandled month: ";
var A0k="Illegal transponderAssignmentIdChangeMethod: ";var A0l="Unhandled animal table field: ";
var A0m="Unhandled list view scope: ";var A0n="1 ";var AyR="100 ";var Atr="10 ";
var AIS="Unhandled weight value precision: ";
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
AI;if(!this.B9)this.B9=AI;},AOX:function(){return this.B9;},AO2:function(Bco){if(
!!Bco)return Bco.Ah;return null;},DM:function(AJk,Eb){var Aw=this.B9;while(!!Aw){
if(Aw.EJ===AJk){if(Eb===1)return Aw;else if(Aw.Operator===Eb)return Aw;}Aw=Aw.Ah;
}return null;},Nw:function(AI){var Aw=this.B9;while(!!Aw){if(Aw===AI){if(!!Aw.AJ
)Aw.AJ.Ah=Aw.Ah;if(!!Aw.Ah)Aw.Ah.AJ=Aw.AJ;if(this.B9===Aw)this.B9=Aw.Ah;if(this.
B_===Aw)this.B_=Aw.AJ;Aw.Ah=null;Aw.AJ=null;return;}Aw=Aw.Ah;}},E$:function(){var
Bf=A._NewObject(C.Filter,0);var Aw=this.B9;while(!!Aw){Bf.CX(Aw.Abt());Aw=Aw.Ah;
}return Bf;},_Init:function(aArg){this.__proto__=C.Filter;A.h7++;},_Done:function(
){this.__proto__=null;A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((
B=this.B9)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.B_)&&(B._cycle!=D))B._Mark(
B._cycle=D);if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:
null,_className:"Device::Filter"};C.FilterCriterion={Ah:null,AJ:null,EJ:-1,Operator:
1,YR:false,Abt:function(){return null;},E$:function(AI){if(!AI)return;this.EJ=AI.
EJ;this.Operator=AI.Operator;this.YR=AI.YR;},_Init:function(aArg){this.__proto__=
C.FilterCriterion;A.h7++;},_Done:function(){this.__proto__=null;A.h7--;},_ReInit:
function(){},_Mark:function(D){var B;if((B=this.Ah)&&(B._cycle!=D))B._Mark(B._cycle=
D);if((B=this.AJ)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.I)&&(B._cycle!=D
))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:"Device::FilterCriterion"
};C.Int32FilterCriterion={A5:0,Abt:function(){var Aw=A._NewObject(C.Int32FilterCriterion
,0);Aw.E$(this);return Aw;},E$:function(AI){C.FilterCriterion.E$.call(this,AI);var
Aw=(C.Int32FilterCriterion.isPrototypeOf(AI)?AI:null);if(!!Aw)this.A5=Aw.A5;},Initialize:
function(A4,Eb,A8,Qi){this.EJ=A4;this.Operator=Eb;this.A5=A8;this.YR=Qi;return this;
},_Init:function(aArg){C.FilterCriterion._Init.call(this,aArg);this.__proto__=C.
Int32FilterCriterion;},_className:"Device::Int32FilterCriterion"};C.DeviceClass={
AEC:0,AEB:0,Av_:0,OZ:0,O0:null,SG:null,Q3:null,S6:null,R7:null,P7:null,Gg:null,An:
null,Bt:null,AgA:null,AnS:null,Pv:null,AuM:A.jV,AutoActions:A.jV,AB2:A.jV,AHb:A.
jV,AHc:A.jV,AhL:A.jV,AHx:A.jV,AHy:A.jV,AB3:A.jV,AHw:A.jV,AHB:A.jV,ABV:A.jV,ABW:A.
jV,ASr:A.jV,ASw:A.jV,AWk:A.jV,Abd:100,Lz:0,ANe:75,AcL:3600,AUu:0,A3:5,AF:0,K1:50000
,Pr:0,AGt:0,AdV:0,Arb:0,Ara:0,ASe:1,ASd:1,AjV:0,ASf:1,AxY:0,Afv:0,AqZ:10,AVg:5,Av5:
60,Av3:0,An_:0,OT:1,WhereAbouts:0,Ak6:0,AxQ:3,ACZ:0,AgC:1,Ab2:0,Aqy:0,AOb:11,Breed:
0,EartagNrAssignmentMode:0,Ava:0,ACS:0,ACR:0,Io:5,ABU:2,AqA:0,AOP:2,AV7:0,D9:0,AMo:
0,Ko:0,Gender:2,WeightRecordingScope:1,WeightRecordingMode:1,AnimalType:0,MassUnit:
0,AutoRegistrationMode:0,RatingMode:0,SyncState:0,OverlayMenu:0,TemperatureUnit:
0,Language:0,MeasureState:0,ScanState:0,In:3,AUt:false,AM9:false,AeS:true,AR2:false
,Aqk:true,Aq0:false,AmV:true,HH:false,AVJ:false,AmW:false,AV5:false,AsZ:false,AEA:
false,AmI:false,UpdateActiveScreen:function(AK){if(this.In===AK)return;this.In=AK;
A.abo([this,this.AEO,this.Bbx],0);},Zv:function(E){if(this.K&&this.K.Zv)return this.
K.Zv.apply(this,arguments);else return C.DeviceClass.Bva.apply(this,arguments);}
,Bva:function(E){},Bbx:function(Aq){this.Zv(Aq);},UpdateBatteryChargeState:function(
AK){if(this.Abd===AK)return;this.Abd=AK;A.abo([this,this.Awe,this.AyX],0);},AwC:
function(E){if(this.K&&this.K.AwC)return this.K.AwC.apply(this,arguments);else return C.
DeviceClass.Bvl.apply(this,arguments);},Bvl:function(E){A.ab5("%s",BD);},AyX:function(
Aq){this.AwC(Aq);},UpdateChargeActive:function(AK){if(this.AmI===AK)return;this.
AmI=AK;A.abo([this,this.Awh,this.AyY],0);},AFj:function(E){if(this.K&&this.K.AFj
)return this.K.AFj.apply(this,arguments);else return C.DeviceClass.Bvs.apply(this
,arguments);},Bvs:function(E){A.ab5("%s",E8);},AyY:function(Aq){this.AFj(Aq);},UpdateScanState:
function(AK){var B;if(this.ScanState===AK)return;this.ScanState=AK;A.abo([this,this.
AS4,this.A0Q],0);A._GetAutoObject(C.Helper).BBD(this);},Ar$:function(E){if(this.
K&&this.K.Ar$)return this.K.Ar$.apply(this,arguments);else return C.DeviceClass.
Bv9.apply(this,arguments);},Bv9:function(E){A.ab5("%s",Hs);},A0Q:function(Aq){this.
Ar$(Aq);},UpdateMeasureState:function(AK){if(this.MeasureState===AK)return;this.
MeasureState=AK;A.abo([this,this.AEW,this.AI6],0);},Aw1:function(E){if(this.K&&this.
K.Aw1)return this.K.Aw1.apply(this,arguments);else return C.DeviceClass.BvQ.apply(
this,arguments);},BvQ:function(E){A.ab5("%s",I0);},AI6:function(Aq){this.Aw1(Aq);
},UpdateTempValue:function(AK){if(this.Lz===AK)return;this.Lz=AK;A.abo([this,this.
AE0,this.AI8],0);},Axd:function(E){if(this.K&&this.K.Axd)return this.K.Axd.apply(
this,arguments);else return C.DeviceClass.Bwd.apply(this,arguments);},Bwd:function(
E){A.ab5("%s",Iw);},AI8:function(Aq){this.Axd(Aq);},AnH:function(E){if(this.K&&this.
K.AnH)return this.K.AnH.apply(this,arguments);else return C.DeviceClass.BvK.apply(
this,arguments);},BvK:function(E){},BbN:function(Aq){this.AnH(Aq);},Axe:function(
E){if(this.K&&this.K.Axe)return this.K.Axe.apply(this,arguments);else return C.DeviceClass.
Bwe.apply(this,arguments);},Bwe:function(E){},Atu:function(Aq){this.Axe(Aq);},AFh:
function(E){if(this.K&&this.K.AFh)return this.K.AFh.apply(this,arguments);else return C.
DeviceClass.Bvr.apply(this,arguments);},Bvr:function(E){},BbF:function(Aq){this.
AFh(Aq);},AFP:function(E){if(this.K&&this.K.AFP)return this.K.AFP.apply(this,arguments
);else return C.DeviceClass.BvS.apply(this,arguments);},BvS:function(E){},A0K:function(
Aq){this.AFP(Aq);},UpdateMonitoring:function(AK){if(this.AEA===AK)return;this.AEA=
AK;A.abo([this,this.ASV,this.A0K],0);},UpdateDataTable:function(Bcq){var B;switch(
Bcq){case 0:A.pe([B=this.An,B.Ako],this);break;case 1:A.pe([B=this.Bt,B.Ako],this
);break;case 3:A.pe([B=this.AgA,B.Ako],this);break;case 4:A.pe([B=this.Pv,B.Ako]
,this);break;case 2:A.ab5("%s",O$);break;default:A.ab5("%s%e",Qb,Bcq);}},AxP:function(
){if(this.K&&this.K.AxP)return this.K.AxP.apply(this,arguments);else return C.DeviceClass.
BwO.apply(this,arguments);},BwO:function(){},AhP:function(){if(this.K&&this.K.AhP
)return this.K.AhP.apply(this,arguments);else return C.DeviceClass.BwR.apply(this
,arguments);},BwR:function(){},AhM:function(){if(this.K&&this.K.AhM)return this.
K.AhM.apply(this,arguments);else return C.DeviceClass.BwP.apply(this,arguments);
},BwP:function(){},An4:function(){if(this.K&&this.K.An4)return this.K.An4.apply(
this,arguments);else return C.DeviceClass.BwS.apply(this,arguments);},BwS:function(
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
,this.A9h,this.BbN],0);},UpdateTemperatureUnit:function(AK){if(this.TemperatureUnit===
AK)return;this.TemperatureUnit=AK;A.abo([this,this.ArI,this.Atu],0);},UpdateBrightness:
function(AK){if(this.ANe===AK)return;this.ANe=AK;A.abo([this,this.A83,this.BbF],
0);},SetSystemTime:function(Aia){if(this.K&&this.K.SetSystemTime)return this.K.SetSystemTime.
apply(this,arguments);else return C.DeviceClass.BwM.apply(this,arguments);},BwM:
function(Aia){},AxI:function(){if(this.K&&this.K.AxI)return this.K.AxI.apply(this
,arguments);else return C.DeviceClass.Bbl.apply(this,arguments);},Bbl:function(){
},AGG:function(){if(this.K&&this.K.AGG)return this.K.AGG.apply(this,arguments);else
return C.DeviceClass.Bbj.apply(this,arguments);},Bbj:function(){},Bpc:function(){
},UpdateOverlayMenu:function(AK){if(this.OverlayMenu===AK)return;this.OverlayMenu=
AK;A.abo([this,this.Awt,this.Ay5],0);},Dw:function(E){if(this.K&&this.K.Dw)return this.
K.Dw.apply(this,arguments);else return C.DeviceClass.Bv3.apply(this,arguments);}
,Bv3:function(E){},Ay5:function(Aq){this.Dw(Aq);},Axl:function(E){if(this.K&&this.
K.Axl)return this.K.Axl.apply(this,arguments);else return C.DeviceClass.Bwo.apply(
this,arguments);},Bwo:function(E){},BbZ:function(Aq){this.Axl(Aq);},UpdateUnderTemp:
function(AK){if(this.AcL===AK)return;this.AcL=AK;A.abo([this,this.A9M,this.BbZ],
0);},UpdateSyncState:function(AK){if(this.SyncState===AK)return;this.SyncState=AK;
A.abo([this,this.AS6,this.A0S],0);},Ace:function(E){if(this.K&&this.K.Ace)return this.
K.Ace.apply(this,arguments);else return C.DeviceClass.Bwc.apply(this,arguments);
},Bwc:function(E){A.ab5("%s",Qc);},A0S:function(Aq){this.Ace(Aq);},ADm:function(
){if(this.K&&this.K.ADm)return this.K.ADm.apply(this,arguments);else return C.DeviceClass.
Bu4.apply(this,arguments);},Bu4:function(){return A.jV;},UpdatePopup:function(Ka
,A1C,A1x,A1F){this.AZ(Ka,A1C,A1x,A1F,[this,this.BBj]);},PopupStateChanged:function(
Ka,Ae){if(this.K&&this.K.PopupStateChanged)return this.K.PopupStateChanged.apply(
this,arguments);else return C.DeviceClass.BwB.apply(this,arguments);},BwB:function(
Ka,Ae){},AGe:function(E){if(this.K&&this.K.AGe)return this.K.AGe.apply(this,arguments
);else return C.DeviceClass.Bwq.apply(this,arguments);},Bwq:function(E){},Bb0:function(
Aq){this.AGe(Aq);},UpdateVibrationOnKeypressEnabled:function(AK){if(this.AsZ===AK
)return;this.AsZ=AK;A.abo([this,this.A9N,this.Bb0],0);},Afc:function(E){if(this.
K&&this.K.Afc)return this.K.Afc.apply(this,arguments);else return C.DeviceClass.
Bwp.apply(this,arguments);},Bwp:function(E){},AI9:function(Aq){this.Afc(Aq);},UpdateVibrationOn:
function(BcT){if(this.AV5===BcT)return;this.AV5=BcT;A.abo([this,this.AE1,this.AI9
],0);},AZ:function(Ka,A1C,A1x,A1F,A1y){var Agr=A._NewObject(C.PopupContext,0);Agr.
Id=Ka;Agr.Show=A1C;Agr.AkJ=A1x;Agr.Ak5=A1F;Agr.AGm=A1y;this.AnS.Trigger(Agr,false
);},BBj:function(G){var Ar=(C.PopupContext.isPrototypeOf(G)?G:null);if(!!Ar)this.
PopupStateChanged(Ar.Id,Ar.PopupState);},Aw$:function(E){if(this.K&&this.K.Aw$)return this.
K.Aw$.apply(this,arguments);else return C.DeviceClass.Bv8.apply(this,arguments);
},Bv8:function(E){},A0P:function(Aq){this.Aw$(Aq);},UpdateRatingMode:function(AK
){if(this.RatingMode===AK)return;this.RatingMode=AK;A.abo([this,this.AS3,this.A0P
],0);},Ae4:function(E){if(this.K&&this.K.Ae4)return this.K.Ae4.apply(this,arguments
);else return C.DeviceClass.BvC.apply(this,arguments);},BvC:function(E){},Att:function(
Aq){this.Ae4(Aq);},UpdateFlashLightOn:function(Bcz){if(this.AmW===Bcz)return;this.
AmW=Bcz;A.abo([this,this.ArF,this.Att],0);},UB:function(E){if(this.K&&this.K.UB)
return this.K.UB.apply(this,arguments);else return C.DeviceClass.Bwh.apply(this,
arguments);},Bwh:function(E){},A0T:function(Aq){this.UB(Aq);},UpdateTopLightOn:function(
BcO){if(this.AVJ===BcO)return;this.AVJ=BcO;A.abo([this,this.AS8,this.A0T],0);},WR:
function(E){if(this.K&&this.K.WR)return this.K.WR.apply(this,arguments);else return C.
DeviceClass.Bv7.apply(this,arguments);},Bv7:function(E){},Bw5:function(Aq){this.
WR(Aq);},UpdateRGBTopLight:function(BcJ){if(this.AUu===BcJ)return;this.AUu=BcJ;A.
abo([this,this.BlT,this.Bw5],0);},AwA:function(E){if(this.K&&this.K.AwA)return this.
K.AwA.apply(this,arguments);else return C.DeviceClass.Bvk.apply(this,arguments);
},Bvk:function(E){},BwY:function(Aq){this.AwA(Aq);},UpdateAutoRegistrationMode:function(
Bcm){if(this.AutoRegistrationMode===Bcm)return;this.AutoRegistrationMode=Bcm;A.abo([
this,this.Blh,this.BwY],0);},Asa:function(E){if(this.K&&this.K.Asa)return this.K.
Asa.apply(this,arguments);else return C.DeviceClass.Bv_.apply(this,arguments);},
Bv_:function(E){A.ab5("%s",CR);},A0R:function(Aq){this.Asa(Aq);},UpdateScanTransponder:
function(Ka,BcQ,BcP){if(((this.O0.Id===Ka)&&(this.O0.TransponderType===BcQ))&&(this.
O0.TransponderProtocol===BcP))return;this.O0.OnSetId(Ka);this.O0.AT8(BcQ);this.O0.
AT7(BcP);A.abo([this,this.AS5,this.A0R],0);},OU:function(E){if(this.K&&this.K.OU
)return this.K.OU.apply(this,arguments);else return C.DeviceClass.Bvu.apply(this
,arguments);},Bvu:function(E){},U$:function(Aq){this.OU(Aq);},UpdateDigitsID:function(
Bcu){if(this.A3===Bcu)return;this.A3=Bcu;A.abo([this,this.Us,this.U$],0);},PY:function(
E){if(this.K&&this.K.PY)return this.K.PY.apply(this,arguments);else return C.DeviceClass.
Bv2.apply(this,arguments);},Bv2:function(E){},Va:function(Aq){this.PY(Aq);},UpdateOffsetID:
function(BcF){if(this.AF===BcF)return;this.AF=BcF;A.abo([this,this.Ut,this.Va],0
);},AGi:function(E){if(this.K&&this.K.AGi)return this.K.AGi.apply(this,arguments
);else return C.DeviceClass.Bwx.apply(this,arguments);},Bwx:function(E){A.ab5("%s"
,Fe);},AI_:function(Aq){this.AGi(Aq);},UpdateWeightValue:function(AK){if(this.K1===
AK)return;this.K1=AK;A.abo([this,this.AE2,this.AI_],0);},AwY:function(E){if(this.
K&&this.K.AwY)return this.K.AwY.apply(this,arguments);else return C.DeviceClass.
BvN.apply(this,arguments);},BvN:function(E){},A0J:function(Aq){this.AwY(Aq);},UpdateMassUnit:
function(AK){if(this.MassUnit===AK)return;this.MassUnit=AK;A.abo([this,this.ASU,
this.A0J],0);},ArM:function(E){if(this.K&&this.K.ArM)return this.K.ArM.apply(this
,arguments);else return C.DeviceClass.Bbf.apply(this,arguments);},Bbf:function(E
){},Bbu:function(Aq){this.ArM(Aq);},ArN:function(E){if(this.K&&this.K.ArN)return this.
K.ArN.apply(this,arguments);else return C.DeviceClass.Bbg.apply(this,arguments);
},Bbg:function(E){},A0E:function(Aq){this.ArN(Aq);},UpdateActiveActions:function(
AK){if(this.Pr===AK)return;this.Pr=AK;A.abo([this,this.A8N,this.Bbu],0);},UpdateActiveActionsOrder:
function(AK){if(this.AuM===AK)return;this.AuM=AK;A.abo([this,this.ASH,this.A0E],
0);},Akv:function(E){if(this.K&&this.K.Akv)return this.K.Akv.apply(this,arguments
);else return C.DeviceClass.Bbh.apply(this,arguments);},Bbh:function(E){},BbC:function(
Aq){this.Akv(Aq);},UpdateAutoActions:function(AK){if(this.AutoActions===AK)return;
this.AutoActions=AK;A.abo([this,this.A8Y,this.BbC],0);},AG6:function(){if(this.K&&
this.K.AG6)return this.K.AG6.apply(this,arguments);else return C.DeviceClass.BwQ.
apply(this,arguments);},BwQ:function(){},AsP:function(){if(this.K&&this.K.AsP)return this.
K.AsP.apply(this,arguments);else return C.DeviceClass.BwU.apply(this,arguments);
},BwU:function(){},EC:function(E){if(this.K&&this.K.EC)return this.K.EC.apply(this
,arguments);else return C.DeviceClass.Bvh.apply(this,arguments);},Bvh:function(E
){},BwX:function(Aq){this.EC(Aq);},UpdateAnimalType:function(Eo){if(this.AnimalType===
Eo)return;this.AnimalType=Eo;A.abo([this,this.PX,this.BwX],0);},Axm:function(E){
if(this.K&&this.K.Axm)return this.K.Axm.apply(this,arguments);else return C.DeviceClass.
Bwv.apply(this,arguments);},Bwv:function(E){},Bb5:function(Aq){this.Axm(Aq);},UpdateWeightRecordingMode:
function(BcV){if(this.WeightRecordingMode===BcV)return;this.WeightRecordingMode=
BcV;A.abo([this,this.A9V,this.Bb5],0);},AFU:function(E){if(this.K&&this.K.AFU)return this.
K.AFU.apply(this,arguments);else return C.DeviceClass.Bv4.apply(this,arguments);
},Bv4:function(E){A.ab5("%s",L9);},A0N:function(Aq){this.AFU(Aq);},UpdatePredictedTempValue:
function(AK){if(this.AGt===AK)return;this.AGt=AK;A.abo([this,this.AS0,this.A0N],
0);},SX:function(Md){if(this.K&&this.K.SX)return this.K.SX.apply(this,arguments);
else return C.DeviceClass.BwL.apply(this,arguments);},BwL:function(Md){},AFo:function(
E){if(this.K&&this.K.AFo)return this.K.AFo.apply(this,arguments);else return C.DeviceClass.
Bvt.apply(this,arguments);},Bvt:function(E){},AI3:function(Aq){this.AFo(Aq);},UpdateDemoMode:
function(AK){if(this.HH===AK)return;this.HH=AK;A.abo([this,this.AET,this.AI3],0);
},AE8:function(E){if(this.K&&this.K.AE8)return this.K.AE8.apply(this,arguments);
else return C.DeviceClass.Bvb.apply(this,arguments);},Bvb:function(E){},Bby:function(
Aq){this.AE8(Aq);},UpdateAgeRegistration:function(BcE){if(this.AdV===BcE)return;
this.AdV=BcE;A.abo([this,this.A8S,this.Bby],0);},Axn:function(E){if(this.K&&this.
K.Axn)return this.K.Axn.apply(this,arguments);else return C.DeviceClass.Bww.apply(
this,arguments);},Bww:function(E){},Bb6:function(Aq){this.Axn(Aq);},UpdateWeightRecordingScope:
function(BcK){if(this.WeightRecordingScope===BcK)return;this.WeightRecordingScope=
BcK;A.abo([this,this.A9W,this.Bb6],0);},J0:function(E){if(this.K&&this.K.J0)return this.
K.J0.apply(this,arguments);else return C.DeviceClass.BvG.apply(this,arguments);}
,BvG:function(E){},A0I:function(Aq){this.J0(Aq);},UpdateGender:function(Ma){if(this.
Gender===Ma)return;this.Gender=Ma;A.abo([this,this.WK,this.A0I],0);},Ar1:function(
E){if(this.K&&this.K.Ar1)return this.K.Ar1.apply(this,arguments);else return C.DeviceClass.
BvI.apply(this,arguments);},BvI:function(E){},Ay1:function(Aq){this.Ar1(Aq);},UpdateIDLastUsedMale:
function(Rt){if(this.Arb===Rt)return;this.Arb=Rt;A.abo([this,this.Awm,this.Ay1],
0);},Ar0:function(E){if(this.K&&this.K.Ar0)return this.K.Ar0.apply(this,arguments
);else return C.DeviceClass.BvH.apply(this,arguments);},BvH:function(E){},Ay0:function(
Aq){this.Ar0(Aq);},UpdateIDLastUsedFemale:function(Rt){if(this.Ara===Rt)return;this.
Ara=Rt;A.abo([this,this.Awl,this.Ay0],0);},Zw:function(E){if(this.K&&this.K.Zw)return this.
K.Zw.apply(this,arguments);else return C.DeviceClass.Bvg.apply(this,arguments);}
,Bvg:function(E){},AI1:function(Aq){this.Zw(Aq);},UpdateAnimalListContent:function(
AK){if(this.Ko===AK)return;this.Ko=AK;A.abo([this,this.AEQ,this.AI1],0);},AE_:function(
E){if(this.K&&this.K.AE_)return this.K.AE_.apply(this,arguments);else return C.DeviceClass.
Bvc.apply(this,arguments);},Bvc:function(E){},Bbz:function(Aq){this.AE_(Aq);},UpdateAlarmListAction:
function(AK){if(this.AMo===AK)return;this.AMo=AK;A.abo([this,this.A8U,this.Bbz],
0);},AFr:function(E){if(this.K&&this.K.AFr)return this.K.AFr.apply(this,arguments
);else return C.DeviceClass.BvB.apply(this,arguments);},BvB:function(E){},BbI:function(
Aq){this.AFr(Aq);},UpdateFlashLightInMeasureState:function(BcA){if(this.AmV===BcA
)return;this.AmV=BcA;A.abo([this,this.A87,this.BbI],0);},AeZ:function(E){if(this.
K&&this.K.AeZ)return this.K.AeZ.apply(this,arguments);else return C.DeviceClass.
Bvf.apply(this,arguments);},Bvf:function(E){},AI0:function(Aq){this.AeZ(Aq);},UpdateAnimalInfoContent:
function(AK){if(this.D9===AK)return;this.D9=AK;A.abo([this,this.AEP,this.AI0],0);
},AGh:function(E){if(this.K&&this.K.AGh)return this.K.AGh.apply(this,arguments);
else return C.DeviceClass.Bwr.apply(this,arguments);},Bwr:function(E){},Bb1:function(
Aq){this.AGh(Aq);},UpdateWatchListAction:function(AK){if(this.AV7===AK)return;this.
AV7=AK;A.abo([this,this.A9R,this.Bb1],0);},AFt:function(E){if(this.K&&this.K.AFt
)return this.K.AFt.apply(this,arguments);else return C.DeviceClass.BvD.apply(this
,arguments);},BvD:function(E){},BbK:function(Aq){this.AFt(Aq);},UpdateFreshCowListAction:
function(AK){if(this.AOP===AK)return;this.AOP=AK;A.abo([this,this.A89,this.BbK],
0);},ResetActiveActions:function(G){if(this.K&&this.K.ResetActiveActions)return this.
K.ResetActiveActions.apply(this,arguments);else return C.DeviceClass.BwD.apply(this
,arguments);},BwD:function(G){},BG1:function(s){this.ResetActiveActions(s);},ResetAutoActions:
function(G){if(this.K&&this.K.ResetAutoActions)return this.K.ResetAutoActions.apply(
this,arguments);else return C.DeviceClass.BwF.apply(this,arguments);},BwF:function(
G){},BG3:function(s){this.ResetAutoActions(s);},Awy:function(E){if(this.K&&this.
K.Awy)return this.K.Awy.apply(this,arguments);else return C.DeviceClass.Bvi.apply(
this,arguments);},Bvi:function(E){},BbA:function(Aq){this.Awy(Aq);},Asd:function(
E){if(this.K&&this.K.Asd)return this.K.Asd.apply(this,arguments);else return C.DeviceClass.
Bwf.apply(this,arguments);},Bwf:function(E){},BbW:function(Aq){this.Asd(Aq);},Ase:
function(E){if(this.K&&this.K.Ase)return this.K.Ase.apply(this,arguments);else return C.
DeviceClass.Bwg.apply(this,arguments);},Bwg:function(E){},BbX:function(Aq){this.
Ase(Aq);},AsA:function(G){if(this.K&&this.K.AsA)return this.K.AsA.apply(this,arguments
);else return C.DeviceClass.BwI.apply(this,arguments);},BwI:function(G){},BG6:function(
s){this.AsA(s);},UpdateTemperaturesLowString:function(AK){if(this.AHc===AK)return;
this.AHc=AK;A.abo([this,this.A9I,this.BbX],0);},UpdateTemperaturesHighString:function(
AK){if(this.AHb===AK)return;this.AHb=AK;A.abo([this,this.A9H,this.BbW],0);},UpdateAnimalTypesString:
function(AK){if(this.AB2===AK)return;this.AB2=AK;A.abo([this,this.A8W,this.BbA],
0);},AwS:function(E){if(this.K&&this.K.AwS)return this.K.AwS.apply(this,arguments
);else return C.DeviceClass.BvF.apply(this,arguments);},BvF:function(E){},BbM:function(
Aq){this.AwS(Aq);},UpdateFreshCowsHideMeasured:function(AK){if(this.Aq0===AK)return;
this.Aq0=AK;A.abo([this,this.A8$,this.BbM],0);},Ar7:function(E){if(this.K&&this.
K.Ar7)return this.K.Ar7.apply(this,arguments);else return C.DeviceClass.BvY.apply(
this,arguments);},BvY:function(E){},BbR:function(Aq){this.Ar7(Aq);},UpdateNaisIdLastUsedMale:
function(Qj){if(this.AEC===Qj)return;this.AEC=Qj;A.abo([this,this.A9p,this.BbR],
0);},Ar6:function(E){if(this.K&&this.K.Ar6)return this.K.Ar6.apply(this,arguments
);else return C.DeviceClass.BvX.apply(this,arguments);},BvX:function(E){},BbQ:function(
Aq){this.Ar6(Aq);},UpdateNaisIdLastUsedFemale:function(Qj){if(this.AEB===Qj)return;
this.AEB=Qj;A.abo([this,this.A9o,this.BbQ],0);},Aw5:function(E){if(this.K&&this.
K.Aw5)return this.K.Aw5.apply(this,arguments);else return C.DeviceClass.BvV.apply(
this,arguments);},BvV:function(E){},Ay3:function(Aq){this.Aw5(Aq);},UpdateNaisIdIncrementMale:
function(Alw){if(this.ASe===Alw)return;this.ASe=Alw;A.abo([this,this.Awq,this.Ay3
],0);},Aw4:function(E){if(this.K&&this.K.Aw4)return this.K.Aw4.apply(this,arguments
);else return C.DeviceClass.BvU.apply(this,arguments);},BvU:function(E){},Ay2:function(
Aq){this.Aw4(Aq);},UpdateNaisIdIncrementFemale:function(Alw){if(this.ASd===Alw)return;
this.ASd=Alw;A.abo([this,this.Awp,this.Ay2],0);},UpdateFirmware:function(){if(this.
K&&this.K.UpdateFirmware)return this.K.UpdateFirmware.apply(this,arguments);else
return C.DeviceClass.Bbm.apply(this,arguments);},Bbm:function(){},AnB:function(E
){if(this.K&&this.K.AnB)return this.K.AnB.apply(this,arguments);else return C.DeviceClass.
Bvo.apply(this,arguments);},Bvo:function(E){},BbE:function(Aq){this.AnB(Aq);},UpdateBootloaderMessage:
function(AK){if(this.AqA===AK)return;this.AqA=AK;A.abo([this,this.A82,this.BbE],
0);},AE5:function(E){if(this.K&&this.K.AE5)return this.K.AE5.apply(this,arguments
);else return C.DeviceClass.Bu8.apply(this,arguments);},Bu8:function(E){},Bbs:function(
Aq){this.AE5(Aq);},UpdateActionListAction:function(AK){if(this.ABU===AK)return;this.
ABU=AK;A.abo([this,this.A8L,this.Bbs],0);},Aww:function(E){if(this.K&&this.K.Aww
)return this.K.Aww.apply(this,arguments);else return C.DeviceClass.Bu9.apply(this
,arguments);},Bu9:function(E){},Bbt:function(Aq){this.Aww(Aq);},UpdateActionListHideMeasured:
function(AK){if(this.Aqk===AK)return;this.Aqk=AK;A.abo([this,this.A8M,this.Bbt],
0);},Uv:function(E){if(this.K&&this.K.Uv)return this.K.Uv.apply(this,arguments);
else return C.DeviceClass.Bve.apply(this,arguments);},Bve:function(E){},AoD:function(
Aq){this.Uv(Aq);},UpdateAnimalIdGenerationMethod:function(Bc0){if(this.Io===Bc0)
return;this.Io=Bc0;A.abo([this,this.Anu,this.AoD],0);},AwK:function(E){if(this.K&&
this.K.AwK)return this.K.AwK.apply(this,arguments);else return C.DeviceClass.Bvv.
apply(this,arguments);},Bvv:function(E){},A0G:function(Aq){this.AwK(Aq);},UpdateDirectionOfCountingFemale:
function(Alq){if(this.ACR===Alq)return;this.ACR=Alq;A.abo([this,this.ASN,this.A0G
],0);},AwL:function(E){if(this.K&&this.K.AwL)return this.K.AwL.apply(this,arguments
);else return C.DeviceClass.Bvw.apply(this,arguments);},Bvw:function(E){},A0H:function(
Aq){this.AwL(Aq);},UpdateDirectionOfCountingMale:function(Alq){if(this.ACS===Alq
)return;this.ACS=Alq;A.abo([this,this.ASO,this.A0H],0);},AwM:function(E){if(this.
K&&this.K.AwM)return this.K.AwM.apply(this,arguments);else return C.DeviceClass.
Bvx.apply(this,arguments);},Bvx:function(E){},AI4:function(Aq){this.AwM(Aq);},UpdateDirectionOfCountingUnisex:
function(Alq){if(this.Ava===Alq)return;this.Ava=Alq;A.abo([this,this.AEU,this.AI4
],0);},Ar2:function(E){if(this.K&&this.K.Ar2)return this.K.Ar2.apply(this,arguments
);else return C.DeviceClass.BvJ.apply(this,arguments);},BvJ:function(E){},AoE:function(
Aq){this.Ar2(Aq);},UpdateIDLastUsedUnisex:function(Rt){if(this.AjV===Rt)return;this.
AjV=Rt;A.abo([this,this.Anx,this.AoE],0);},Ar8:function(E){if(this.K&&this.K.Ar8
)return this.K.Ar8.apply(this,arguments);else return C.DeviceClass.BvZ.apply(this
,arguments);},BvZ:function(E){},A0L:function(Aq){this.Ar8(Aq);},UpdateNaisIdLastUsedUnisex:
function(Qj){if(this.Av_===Qj)return;this.Av_=Qj;A.abo([this,this.ASW,this.A0L],
0);},Aw6:function(E){if(this.K&&this.K.Aw6)return this.K.Aw6.apply(this,arguments
);else return C.DeviceClass.BvW.apply(this,arguments);},BvW:function(E){},Ay4:function(
Aq){this.Aw6(Aq);},UpdateNaisIdIncrementUnisex:function(Alw){if(this.ASf===Alw)return;
this.ASf=Alw;A.abo([this,this.Awr,this.Ay4],0);},Akx:function(E){if(this.K&&this.
K.Akx)return this.K.Akx.apply(this,arguments);else return C.DeviceClass.Bvz.apply(
this,arguments);},Bvz:function(E){},AyZ:function(Aq){this.Akx(Aq);},UpdateEartagNrAssignmentMode:
function(Alr){if(this.EartagNrAssignmentMode===Alr)return;this.EartagNrAssignmentMode=
Alr;A.abo([this,this.Awk,this.AyZ],0);},N7:function(E){if(this.K&&this.K.N7)return this.
K.N7.apply(this,arguments);else return C.DeviceClass.Bvq.apply(this,arguments);}
,Bvq:function(E){},Bw0:function(Aq){this.N7(Aq);},UpdateBreed:function(Ac2){if(this.
Breed===Ac2)return;this.Breed=Ac2;A.abo([this,this.Awg,this.Bw0],0);},AFN:function(
E){if(this.K&&this.K.AFN)return this.K.AFN.apply(this,arguments);else return C.DeviceClass.
BvR.apply(this,arguments);},BvR:function(E){},Bw3:function(Aq){this.AFN(Aq);},UpdateMiddlewareVersions:
function(Ql,A1t,A1u,A1B,A1i){this.SG.OnSetTimestamp(Ql);this.SG.AFI(A1t);this.SG.
AFO(A1u);this.SG.AFY(A1B);this.SG.AFn(A1i);A.abo([this,this.BlN,this.Bw3],0);},AFH:
function(E){if(this.K&&this.K.AFH)return this.K.AFH.apply(this,arguments);else return C.
DeviceClass.BvL.apply(this,arguments);},BvL:function(E){},Bw2:function(Aq){this.
AFH(Aq);},UpdateMainboardVersions:function(Ql,A1r,A1s,A1q,A1H,A1I,A1G){this.Q3.OnSetTimestamp(
Ql);this.Q3.AFF(A1r);this.Q3.AFG(A1s);this.Q3.AFE(A1q);this.Q3.AGa(A1H);this.Q3.
AGb(A1I);this.Q3.AF$(A1G);A.abo([this,this.BlL,this.Bw2],0);},AGc:function(E){if(
this.K&&this.K.AGc)return this.K.AGc.apply(this,arguments);else return C.DeviceClass.
Bwi.apply(this,arguments);},Bwi:function(E){},Bw9:function(Aq){this.AGc(Aq);},UpdateTorchboardVersions:
function(Ql,A1r,A1s,A1q,A1H,A1I,A1G){this.S6.OnSetTimestamp(Ql);this.S6.AFF(A1r);
this.S6.AFG(A1s);this.S6.AFE(A1q);this.S6.AGa(A1H);this.S6.AGb(A1I);this.S6.AF$(
A1G);A.abo([this,this.Bl$,this.Bw9],0);},AFd:function(E){if(this.K&&this.K.AFd)return this.
K.AFd.apply(this,arguments);else return C.DeviceClass.Bvp.apply(this,arguments);
},Bvp:function(E){},BwZ:function(Aq){this.AFd(Aq);},UpdateBootloaderVersions:function(
Ql,A1t,A1u,A1B,A1i){this.R7.OnSetTimestamp(Ql);this.R7.AFI(A1t);this.R7.AFO(A1u);
this.R7.AFY(A1B);this.R7.AFn(A1i);A.abo([this,this.Blk,this.BwZ],0);},AFp:function(
E){if(this.K&&this.K.AFp)return this.K.AFp.apply(this,arguments);else return C.DeviceClass.
Bvy.apply(this,arguments);},Bvy:function(E){},BbH:function(Aq){this.AFp(Aq);},UpdateDryCowListAction:
function(AK){if(this.AOb===AK)return;this.AOb=AK;A.abo([this,this.A85,this.BbH],
0);},AJU:function(A1j){if(this.K&&this.K.AJU)return this.K.AJU.apply(this,arguments
);else return C.DeviceClass.Bxk.apply(this,arguments);},Bxk:function(A1j){return false;
},AFb:function(E){if(this.K&&this.K.AFb)return this.K.AFb.apply(this,arguments);
else return C.DeviceClass.Bvm.apply(this,arguments);},Bvm:function(E){},AI2:function(
Aq){this.AFb(Aq);},UpdateBirthListView:function(AK){if(this.Aqy===AK)return;this.
Aqy=AK;A.abo([this,this.AER,this.AI2],0);},BatchResetBirthNoticePending:function(
){var O;var AiZ=0;var Adl=A._GetAutoObject(C.Device).An.Filter;var Bf=A._GetAutoObject(
C.Helper).AOT();A._GetAutoObject(C.Device).An.Bk(Bf);for(O=0;O<A._GetAutoObject(
C.Device).An.B8();O++){A._GetAutoObject(C.Helper).GS(O);A._GetAutoObject(C.Helper
).W.Ae8(false);A._GetAutoObject(C.Helper).W.Ci(A._GetAutoObject(C.Device).An);AiZ++;
}A._GetAutoObject(C.Device).An.Bk(Adl);return AiZ;},UpdateTransferProgress:function(
AK){if(this.AxY===AK)return;this.AxY=AK;A.abo([this,this.AS9,this.A0U],0);},AGd:
function(E){if(this.K&&this.K.AGd)return this.K.AGd.apply(this,arguments);else return C.
DeviceClass.Bwj.apply(this,arguments);},Bwj:function(E){A.ab5("%s",Qd);},A0U:function(
Aq){this.AGd(Aq);},UpdateTransferTarget:function(AK){if(this.Afv===AK)return;this.
Afv=AK;A.abo([this,this.A9L,this.BbY],0);},Asf:function(E){if(this.K&&this.K.Asf
)return this.K.Asf.apply(this,arguments);else return C.DeviceClass.Bwk.apply(this
,arguments);},Bwk:function(E){A.ab5("%s",J9);},BbY:function(Aq){this.Asf(Aq);},AsO:
function(){if(this.K&&this.K.AsO)return this.K.AsO.apply(this,arguments);else return C.
DeviceClass.BwT.apply(this,arguments);},BwT:function(){},Aw_:function(E){if(this.
K&&this.K.Aw_)return this.K.Aw_.apply(this,arguments);else return C.DeviceClass.
Bv5.apply(this,arguments);},Bv5:function(E){},A0O:function(Aq){this.Aw_(Aq);},UpdatePremisesID:
function(Rt){if(this.OZ===Rt)return;this.OZ=Rt;A.abo([this,this.AS1,this.A0O],0);
},Aw3:function(E){if(this.K&&this.K.Aw3)return this.K.Aw3.apply(this,arguments);
else return C.DeviceClass.BvT.apply(this,arguments);},BvT:function(E){},AI7:function(
Aq){this.Aw3(Aq);},UpdateMotherSelectionDriedOffFilter:function(AK){if(this.Ab2===
AK)return;this.Ab2=AK;A.abo([this,this.AEY,this.AI7],0);},AFu:function(E){if(this.
K&&this.K.AFu)return this.K.AFu.apply(this,arguments);else return C.DeviceClass.
BvE.apply(this,arguments);},BvE:function(E){},BbL:function(Aq){this.AFu(Aq);},UpdateFreshCowSpan:
function(AK){if(this.AqZ===AK)return;this.AqZ=AK;A.abo([this,this.A8_,this.BbL],
0);},UpdateUSBDevice:function(BcR,BcS,BcI){if(((this.P7.Z8===BcR)&&(this.P7.AsY===
BcS))&&(this.P7.Asr===BcI))return;this.P7.AT9(BcR);this.P7.AT$(BcS);this.P7.ATL(
BcI);A.abo([this,this.Uu,this.Vc],0);},Axk:function(E){if(this.K&&this.K.Axk)return this.
K.Axk.apply(this,arguments);else return C.DeviceClass.Bwn.apply(this,arguments);
},Bwn:function(E){A.ab5("%s",E8);},Vc:function(Aq){this.Axk(Aq);},AxO:function(){
if(this.K&&this.K.AxO)return this.K.AxO.apply(this,arguments);else return C.DeviceClass.
BwN.apply(this,arguments);},BwN:function(){},Arp:function(){if(this.K&&this.K.Arp
)return this.K.Arp.apply(this,arguments);else return C.DeviceClass.Bu7.apply(this
,arguments);},Bu7:function(){return false;},AqK:function(){if(this.K&&this.K.AqK
)return this.K.AqK.apply(this,arguments);else return C.DeviceClass.Bu2.apply(this
,arguments);},Bu2:function(){},AF1:function(E){if(this.K&&this.K.AF1)return this.
K.AF1.apply(this,arguments);else return C.DeviceClass.Bv$.apply(this,arguments);
},Bv$:function(E){},Bw6:function(Aq){this.AF1(Aq);},UpdateSerialNumber:function(
AK){if(this.AhL===AK)return;this.AhL=AK;A.abo([this,this.Bl0,this.Bw6],0);},Awx:
function(E){if(this.K&&this.K.Awx)return this.K.Awx.apply(this,arguments);else return C.
DeviceClass.Bvd.apply(this,arguments);},Bvd:function(E){},A0F:function(Aq){this.
Awx(Aq);},UpdateAnimalIdAutoGenerationMethod:function(BcZ){if(this.AgC===BcZ)return;
this.AgC=BcZ;A.abo([this,this.ASI,this.A0F],0);},ACF:function(){return false;},AGH:
function(){return false;},AF3:function(E){if(this.K&&this.K.AF3)return this.K.AF3.
apply(this,arguments);else return C.DeviceClass.Bwa.apply(this,arguments);},Bwa:
function(E){},BbV:function(Aq){this.AF3(Aq);},UpdateShutdownTimer:function(AK){if(
this.AVg===AK)return;this.AVg=AK;A.abo([this,this.A9E,this.BbV],0);},AsB:function(
G){if(this.K&&this.K.AsB)return this.K.AsB.apply(this,arguments);else return C.DeviceClass.
BwJ.apply(this,arguments);},BwJ:function(G){},BG7:function(s){this.AsB(s);},Asi:
function(E){if(this.K&&this.K.Asi)return this.K.Asi.apply(this,arguments);else return C.
DeviceClass.Bwt.apply(this,arguments);},Bwt:function(E){},Bb3:function(Aq){this.
Asi(Aq);},Asj:function(E){if(this.K&&this.K.Asj)return this.K.Asj.apply(this,arguments
);else return C.DeviceClass.Bwu.apply(this,arguments);},Bwu:function(E){},Bb4:function(
Aq){this.Asj(Aq);},UpdateWeightGainsLowString:function(AK){if(this.AHy===AK)return;
this.AHy=AK;A.abo([this,this.A9U,this.Bb4],0);},UpdateWeightGainsHighString:function(
AK){if(this.AHx===AK)return;this.AHx=AK;A.abo([this,this.A9T,this.Bb3],0);},Awz:
function(E){if(this.K&&this.K.Awz)return this.K.Awz.apply(this,arguments);else return C.
DeviceClass.Bvj.apply(this,arguments);},Bvj:function(E){},BbB:function(Aq){this.
Awz(Aq);},UpdateAnimalTypesWeightGainsString:function(AK){if(this.AB3===AK)return;
this.AB3=AK;A.abo([this,this.A8X,this.BbB],0);},Ash:function(E){if(this.K&&this.
K.Ash)return this.K.Ash.apply(this,arguments);else return C.DeviceClass.Bws.apply(
this,arguments);},Bws:function(E){},Bb2:function(Aq){this.Ash(Aq);},Ask:function(
E){if(this.K&&this.K.Ask)return this.K.Ask.apply(this,arguments);else return C.DeviceClass.
Bwy.apply(this,arguments);},Bwy:function(E){},Bb7:function(Aq){this.Ask(Aq);},UpdateWeightValueBirthString:
function(AK){if(this.AHB===AK)return;this.AHB=AK;A.abo([this,this.A9X,this.Bb7],
0);},UpdateWeightGainsAverageString:function(AK){if(this.AHw===AK)return;this.AHw=
AK;A.abo([this,this.A9S,this.Bb2],0);},AwN:function(E){if(this.K&&this.K.AwN)return this.
K.AwN.apply(this,arguments);else return C.DeviceClass.BvA.apply(this,arguments);
},BvA:function(E){},Bw1:function(Aq){this.AwN(Aq);},UpdateEvaluationAnimalType:function(
Eo){if(this.ACZ===Eo)return;this.ACZ=Eo;A.abo([this,this.Blu,this.Bw1],0);},UpdateStartScreen:
function(AK){if(this.AxQ===AK)return;this.AxQ=AK;A.abo([this,this.Bl1,this.Bw7],
0);},Axc:function(E){if(this.K&&this.K.Axc)return this.K.Axc.apply(this,arguments
);else return C.DeviceClass.Bwb.apply(this,arguments);},Bwb:function(E){},Bw7:function(
Aq){this.Axc(Aq);},AEd:function(){if(this.K&&this.K.AEd)return this.K.AEd.apply(
this,arguments);else return C.DeviceClass.Bu5.apply(this,arguments);},Bu5:function(
){return 1;},AEe:function(){if(this.K&&this.K.AEe)return this.K.AEe.apply(this,arguments
);else return C.DeviceClass.Bu6.apply(this,arguments);},Bu6:function(){return 1;
},GetCommitCount:function(){return 2218;},GetCommitEpoch:function(){return 1747383260;
},GetCommitHash:function(){return A.kR.Bij;},GetVersionMajor:function(){return 0;
},GetVersionMinor:function(){return 9;},GetVersionRev:function(){return 13;},AFM:
function(E){if(this.K&&this.K.AFM)return this.K.AFM.apply(this,arguments);else return C.
DeviceClass.BvP.apply(this,arguments);},BvP:function(E){},BbP:function(Aq){this.
AFM(Aq);},UpdateMaximumAgeNewOnFarm:function(AK){if(this.Av5===AK)return;this.Av5=
AK;A.abo([this,this.A9n,this.BbP],0);},Axi:function(E){if(this.K&&this.K.Axi)return this.
K.Axi.apply(this,arguments);else return C.DeviceClass.Bwl.apply(this,arguments);
},Bwl:function(E){},A0V:function(Aq){this.Axi(Aq);},UpdateTransponderAssignmentIdChangeMethod:
function(Azh){if(this.Ak6===Azh)return;this.Ak6=Azh;A.abo([this,this.AS_,this.A0V
],0);},BatchResetPurchasedNoticePending:function(){var O;var AiZ=0;var Adl=A._GetAutoObject(
C.Device).An.Filter;var Bf=A._GetAutoObject(C.Helper).AvA();A._GetAutoObject(C.Device
).An.Bk(Bf);for(O=0;O<A._GetAutoObject(C.Device).An.B8();O++){A._GetAutoObject(C.
Helper).GS(O);A._GetAutoObject(C.Helper).W.Ae8(false);A._GetAutoObject(C.Helper).
W.Ci(A._GetAutoObject(C.Device).An);AiZ++;}A._GetAutoObject(C.Device).An.Bk(Adl);
return AiZ;},BnO:function(E){},UpdateMassRecordingAutomatic:function(AK){if(this.
AR2===AK)return;this.AR2=AK;A.abo([this,this.BlM,this.BnO],0);},Nt:function(E){if(
this.K&&this.K.Nt)return this.K.Nt.apply(this,arguments);else return C.DeviceClass.
Bwz.apply(this,arguments);},Bwz:function(E){},Bw_:function(Aq){this.Nt(Aq);},UpdateWhereAbouts:
function(AfR){if(this.WhereAbouts===AfR)return;this.WhereAbouts=AfR;A.abo([this,
this.Awu,this.Bw_],0);},ArP:function(E){if(this.K&&this.K.ArP)return this.K.ArP.
apply(this,arguments);else return C.DeviceClass.Bu_.apply(this,arguments);},Bu_:
function(E){},Bbv:function(Aq){this.ArP(Aq);},ArQ:function(E){if(this.K&&this.K.
ArQ)return this.K.ArQ.apply(this,arguments);else return C.DeviceClass.Bu$.apply(
this,arguments);},Bu$:function(E){},Bbw:function(Aq){this.ArQ(Aq);},UpdateActiveMassRecordingFields:
function(AK){if(this.ABV===AK)return;this.ABV=AK;A.abo([this,this.A8O,this.Bbv],
0);},UpdateActiveMassRecordingFieldsOrder:function(AK){if(this.ABW===AK)return;this.
ABW=AK;A.abo([this,this.A8P,this.Bbw],0);},Asy:function(G){if(this.K&&this.K.Asy
)return this.K.Asy.apply(this,arguments);else return C.DeviceClass.BwE.apply(this
,arguments);},BwE:function(G){},BG2:function(s){this.Asy(s);},AFK:function(E){if(
this.K&&this.K.AFK)return this.K.AFK.apply(this,arguments);else return C.DeviceClass.
BvM.apply(this,arguments);},BvM:function(E){},AI5:function(Aq){this.AFK(Aq);},UpdateMassRecordingDateOfBirthMandatory:
function(AK){if(this.AeS===AK)return;this.AeS=AK;A.abo([this,this.AEV,this.AI5],
0);},AFJ:function(E){this.UpdateMassRecordingCounter(E);},UpdateMassRecordingCounter:
function(AK){if(this.Av3===AK)return;this.Av3=AK;A.abo([this,this.A9l,this.AFJ],
0);},X9:function(){if(this.K&&this.K.X9)return this.K.X9.apply(this,arguments);else
return C.DeviceClass.Bu0.apply(this,arguments);},Bu0:function(){return false;},Aqv:
function(){if(this.K&&this.K.Aqv)return this.K.Aqv.apply(this,arguments);else return C.
DeviceClass.BuZ.apply(this,arguments);},BuZ:function(){return false;},Aqu:function(
){if(this.K&&this.K.Aqu)return this.K.Aqu.apply(this,arguments);else return C.DeviceClass.
BuY.apply(this,arguments);},BuY:function(){return false;},Aqw:function(){if(this.
K&&this.K.Aqw)return this.K.Aqw.apply(this,arguments);else return C.DeviceClass.
Bu1.apply(this,arguments);},Bu1:function(){return false;},Aw0:function(E){if(this.
K&&this.K.Aw0)return this.K.Aw0.apply(this,arguments);else return C.DeviceClass.
BvO.apply(this,arguments);},BvO:function(E){},BbO:function(Aq){this.Aw0(Aq);},UpdateMaxWeightValuePrecision:
function(AK){if(this.OT===AK)return;this.OT=AK;A.abo([this,this.A9m,this.BbO],0);
},Aw7:function(E){if(this.K&&this.K.Aw7)return this.K.Aw7.apply(this,arguments);
else return C.DeviceClass.Bv0.apply(this,arguments);},Bv0:function(E){},BbS:function(
Aq){this.Aw7(Aq);},UpdateNoNaisIdListActions:function(AK){if(this.ASr===AK)return;
this.ASr=AK;A.abo([this,this.A9q,this.BbS],0);},ResetNoNaisIdListActions:function(
G){if(this.K&&this.K.ResetNoNaisIdListActions)return this.K.ResetNoNaisIdListActions.
apply(this,arguments);else return C.DeviceClass.BwG.apply(this,arguments);},BwG:
function(G){},BG4:function(s){this.ResetNoNaisIdListActions(s);},Aw8:function(E){
if(this.K&&this.K.Aw8)return this.K.Aw8.apply(this,arguments);else return C.DeviceClass.
Bv1.apply(this,arguments);},Bv1:function(E){},BbT:function(Aq){this.Aw8(Aq);},UpdateNoTransponderListActions:
function(AK){if(this.ASw===AK)return;this.ASw=AK;A.abo([this,this.A9r,this.BbT],
0);},ResetNoTransponderListActions:function(G){if(this.K&&this.K.ResetNoTransponderListActions
)return this.K.ResetNoTransponderListActions.apply(this,arguments);else return C.
DeviceClass.BwH.apply(this,arguments);},BwH:function(G){},BG5:function(s){this.ResetNoTransponderListActions(
s);},Axp:function(E){if(this.K&&this.K.Axp)return this.K.Axp.apply(this,arguments
);else return C.DeviceClass.BwA.apply(this,arguments);},BwA:function(E){},Bb8:function(
Aq){this.Axp(Aq);},UpdateYoungNoTransponderListActions:function(AK){if(this.AWk===
AK)return;this.AWk=AK;A.abo([this,this.A9Z,this.Bb8],0);},ResetYoungNoTransponderListActions:
function(G){if(this.K&&this.K.ResetYoungNoTransponderListActions)return this.K.ResetYoungNoTransponderListActions.
apply(this,arguments);else return C.DeviceClass.BwK.apply(this,arguments);},BwK:
function(G){},BG8:function(s){this.ResetYoungNoTransponderListActions(s);},Axj:function(
E){if(this.K&&this.K.Axj)return this.K.Axj.apply(this,arguments);else return C.DeviceClass.
Bwm.apply(this,arguments);},Bwm:function(E){},A0W:function(Aq){this.Axj(Aq);},UpdateTransponderUnlinkIdChangeMethod:
function(Azh){if(this.An_===Azh)return;this.An_=Azh;A.abo([this,this.AS$,this.A0W
],0);},Asx:function(AoJ,AJq){if(this.K&&this.K.Asx)return this.K.Asx.apply(this,
arguments);else return C.DeviceClass.BwC.apply(this,arguments);},BwC:function(AoJ
,AJq){this.Gg.E7();this.Gg.AgP=AoJ;this.Gg.AVf=AJq;this.Gg.E5(1);A._GetAutoObject(
C.Device).AZ(110,true,A.jV,0,[this,this.BA4]);},BA4:function(G){var Ar=(C.PopupContext.
isPrototypeOf(G)?G:null);if(!!Ar&&(Ar.PopupState===9))A.aaS([this,this.BCH],this
);},BCH:function(G){this.Gg.E5(2);this.AxO();A._GetAutoObject(C.Device).AZ(110,false
,A.jV,0,null);},AFc:function(E){if(this.K&&this.K.AFc)return this.K.AFc.apply(this
,arguments);else return C.DeviceClass.Bvn.apply(this,arguments);},Bvn:function(E
){},BbD:function(Aq){this.AFc(Aq);},UpdateBirthRegistrationsListResetOnExport:function(
AK){if(this.AM9===AK)return;this.AM9=AK;A.abo([this,this.A80,this.BbD],0);},AFV:
function(E){if(this.K&&this.K.AFV)return this.K.AFV.apply(this,arguments);else return C.
DeviceClass.Bv6.apply(this,arguments);},Bv6:function(E){},BbU:function(Aq){this.
AFV(Aq);},UpdatePurchasedListResetOnExport:function(AK){if(this.AUt===AK)return;
this.AUt=AK;A.abo([this,this.A9t,this.BbU],0);},Bpa:function(){},AEO:function(){
return this.In;},Awe:function(){return this.Abd;},Awh:function(){return this.AmI;
},AS4:function(){return this.ScanState;},AEW:function(){return this.MeasureState;
},AE0:function(){return this.Lz;},A9h:function(){return this.Language;},ArI:function(
){return this.TemperatureUnit;},A83:function(){return this.ANe;},ASV:function(){
return this.AEA;},Awt:function(){return this.OverlayMenu;},A9M:function(){return this.
AcL;},AS6:function(){return this.SyncState;},A9N:function(){return this.AsZ;},AE1:
function(){return this.AV5;},AS3:function(){return this.RatingMode;},ArF:function(
){return this.AmW;},AS8:function(){return this.AVJ;},BlT:function(){return this.
AUu;},Blh:function(){return this.AutoRegistrationMode;},AS5:function(){return this.
O0;},Us:function(){return this.A3;},Ut:function(){return this.AF;},AE2:function(
){return this.K1;},ASU:function(){return this.MassUnit;},A8N:function(){return this.
Pr;},ASH:function(){return this.AuM;},A8Y:function(){return this.AutoActions;},PX:
function(){return this.AnimalType;},A9V:function(){return this.WeightRecordingMode;
},AS0:function(){return this.AGt;},AET:function(){return this.HH;},A8S:function(
){return this.AdV;},A9W:function(){return this.WeightRecordingScope;},WK:function(
){return this.Gender;},Awm:function(){return this.Arb;},Awl:function(){return this.
Ara;},AEQ:function(){return this.Ko;},A8U:function(){return this.AMo;},A87:function(
){return this.AmV;},AEP:function(){return this.D9;},A9R:function(){return this.AV7;
},A89:function(){return this.AOP;},A8W:function(){return this.AB2;},A9H:function(
){return this.AHb;},A9I:function(){return this.AHc;},A8$:function(){return this.
Aq0;},A9p:function(){return this.AEC;},A9o:function(){return this.AEB;},Awq:function(
){return this.ASe;},Awp:function(){return this.ASd;},A82:function(){return this.
AqA;},A8L:function(){return this.ABU;},A8M:function(){return this.Aqk;},Anu:function(
){return this.Io;},ASN:function(){return this.ACR;},ASO:function(){return this.ACS;
},AEU:function(){return this.Ava;},Anx:function(){return this.AjV;},ASW:function(
){return this.Av_;},Awr:function(){return this.ASf;},Awk:function(){return this.
EartagNrAssignmentMode;},Awg:function(){return this.Breed;},BlN:function(){return this.
SG;},BlL:function(){return this.Q3;},Bl$:function(){return this.S6;},Blk:function(
){return this.R7;},A85:function(){return this.AOb;},AER:function(){return this.Aqy;
},AS9:function(){return this.AxY;},A9L:function(){return this.Afv;},AS1:function(
){return this.OZ;},AEY:function(){return this.Ab2;},A8_:function(){return this.AqZ;
},Uu:function(){return this.P7;},Bl0:function(){return this.AhL;},ASI:function(){
return this.AgC;},A9E:function(){return this.AVg;},A9T:function(){return this.AHx;
},A9U:function(){return this.AHy;},A8X:function(){return this.AB3;},A9S:function(
){return this.AHw;},A9X:function(){return this.AHB;},Blu:function(){return this.
ACZ;},Bl1:function(){return this.AxQ;},A9n:function(){return this.Av5;},AS_:function(
){return this.Ak6;},BlM:function(){return this.AR2;},Awu:function(){return this.
WhereAbouts;},A8O:function(){return this.ABV;},A8P:function(){return this.ABW;},
AEV:function(){return this.AeS;},A9l:function(){return this.Av3;},A9m:function(){
return this.OT;},A9q:function(){return this.ASr;},A9r:function(){return this.ASw;
},A9Z:function(){return this.AWk;},AS$:function(){return this.An_;},A80:function(
){return this.AM9;},A9t:function(){return this.AUt;},_Init:function(aArg){C.Table.
_Init.call(this.An={I:this},0);C.Table._Init.call(this.Bt={I:this},0);C.Table._Init.
call(this.AgA={I:this},0);A.Core.Bab._Init.call(this.AnS={I:this},0);C.Table._Init.
call(this.Pv={I:this},0);this.__proto__=C.DeviceClass;this.An.OnSetId(0);this.Bt.
OnSetId(1);this.AgA.OnSetId(3);this.Pv.OnSetId(4);this.O0=A._NewObject(C.Transponder
,0);this.SG=A._NewObject(C.AxN,0);this.Q3=A._NewObject(C.AvD,0);this.S6=A._NewObject(
C.AvD,0);this.R7=A._NewObject(C.AxN,0);this.P7=A._NewObject(C.AV0,0);this.Gg=A._NewObject(
C.V2,0);var J_=this._variants();if(J_){this.K={};J_._Init.call(this,aArg);}A.h7++;
},_Done:function(){if(this.K)this.K._Done.call(this);this.__proto__=null;this.An.
_Done();this.Bt._Done();this.AgA._Done();this.AnS._Done();this.Pv._Done();A.h7--;
},_ReInit:function(){this.An._ReInit();this.Bt._ReInit();this.AgA._ReInit();this.
AnS._ReInit();this.Pv._ReInit();if(this.K)this.K._ReInit.call(this);},_Mark:function(
D){var B;if((B=this.O0)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.SG)&&(B._cycle
!=D))B._Mark(B._cycle=D);if((B=this.Q3)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=
this.S6)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.R7)&&(B._cycle!=D))B._Mark(
B._cycle=D);if((B=this.P7)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Gg)&&(B.
_cycle!=D))B._Mark(B._cycle=D);if((B=this.An)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Bt)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AgA)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.AnS)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Pv)._cycle!=D)B._Mark(
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
A5:A.jV,Abt:function(){var Aw=A._NewObject(C.StringFilterCriterion,0);Aw.E$(this
);return Aw;},E$:function(AI){C.FilterCriterion.E$.call(this,AI);var Aw=(C.StringFilterCriterion.
isPrototypeOf(AI)?AI:null);if(!!Aw)this.A5=Aw.A5;},_Init:function(aArg){C.FilterCriterion.
_Init.call(this,aArg);this.__proto__=C.StringFilterCriterion;},_className:"Device::StringFilterCriterion"
};C.Table={CC:function(Ad,A4){if(this.K&&this.K.CC)return this.K.CC.apply(this,arguments
);else return C.ITable.CC.apply(this,arguments);},V_:function(Ad,A4){if(this.K&&
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
AoV){if(this.K&&this.K.OI)return this.K.OI.apply(this,arguments);else return C.ITable.
OI.apply(this,arguments);},YP:function(){if(this.K&&this.K.YP)return this.K.YP.apply(
this,arguments);else return C.ITable.YP.apply(this,arguments);},ZS:function(Ad,A4
,C1){if(this.K&&this.K.ZS)return this.K.ZS.apply(this,arguments);else return C.ITable.
ZS.apply(this,arguments);},HB:function(Ad,A4,C1){if(this.K&&this.K.HB)return this.
K.HB.apply(this,arguments);else return C.ITable.HB.apply(this,arguments);},ZR:function(
Ad,A4,C1){if(this.K&&this.K.ZR)return this.K.ZR.apply(this,arguments);else return C.
ITable.ZR.apply(this,arguments);},Ob:function(Ad,A4,C1){if(this.K&&this.K.Ob)return this.
K.Ob.apply(this,arguments);else return C.ITable.Ob.apply(this,arguments);},ZQ:function(
Ad,A4,C1){if(this.K&&this.K.ZQ)return this.K.ZQ.apply(this,arguments);else return C.
ITable.ZQ.apply(this,arguments);},LZ:function(aColumn,A8){if(this.K&&this.K.LZ)return this.
K.LZ.apply(this,arguments);else return C.ITable.LZ.apply(this,arguments);},KT:function(
Ad,A4){if(this.K&&this.K.KT)return this.K.KT.apply(this,arguments);else return C.
ITable.KT.apply(this,arguments);},UJ:function(Ad,A4,C1){if(this.K&&this.K.UJ)return this.
K.UJ.apply(this,arguments);else return C.ITable.UJ.apply(this,arguments);},Aev:function(
aColumn,A8){if(this.K&&this.K.Aev)return this.K.Aev.apply(this,arguments);else return C.
ITable.Aev.apply(this,arguments);},E7:function(){if(this.K&&this.K.E7)return this.
K.E7.apply(this,arguments);else return C.ITable.E7.apply(this,arguments);},AjL:function(
aColumn,A8){if(this.K&&this.K.AjL)return this.K.AjL.apply(this,arguments);else return C.
ITable.AjL.apply(this,arguments);},Aeo:function(aColumn,A8){if(this.K&&this.K.Aeo
)return this.K.Aeo.apply(this,arguments);else return C.ITable.Aeo.apply(this,arguments
);},HM:function(){if(this.K&&this.K.HM)return this.K.HM.apply(this,arguments);else
return C.ITable.HM.apply(this,arguments);},QM:function(){if(this.K&&this.K.QM)return this.
K.QM.apply(this,arguments);else return C.ITable.QM.apply(this,arguments);},_Init:
function(aArg){C.ITable._Init.call(this,aArg);this.__proto__=C.Table;var J_=this.
_variants();if(J_){this.K={};J_._Init.call(this,aArg);}},_Done:function(){if(this.
K)this.K._Done.call(this);this.__proto__=C.ITable;C.ITable._Done.call(this);},_ReInit:
function(){C.ITable._ReInit.call(this);if(this.K)this.K._ReInit.call(this);},_Mark:
function(D){C.ITable._Mark.call(this,D);if(this.K)this.K._Mark(D);},_variants:function(
){return A.acq.Table._variants();},K:null,_className:"Device::Table"};C.TableId={
Animal:0,Rating:1,Undefined:2,AnimalGroup:3,CalfDeregistrations:4};C.ScanState={
Idle:0,Progress:1,IdScanned:2,NotFound:3,Error:4,LAST:5};C.RatedAttribute={None:
0,Feed:1,Appearance:2,Respiratory:3,Faeces:4};C.ConverterClass={Na:null,Ak3:function(
AoT){var Bdy;var Auy=this.AVz(AoT/100,0,A._GetAutoObject(C.Device).TemperatureUnit
);Bdy=A.abk(Auy,0,1);return Bdy;},Bal:function(NA){if(NA<=0)return 0;else if(NA<=
1)return 5;else if(NA<=2)return 3;else if(NA<=4)return 2;else if(NA<=6)return 1;
else if(NA<=8)return 4;else return 0;},Ad4:function(NA){var a=0;switch(NA){case 3:
a=2;break;case 2:a=4;break;case 1:a=6;break;case 0:a=0;break;case 4:a=8;break;case
5:a=1;break;default:A.ab5("%s",Oh);}return a;},AsQ:function(Eo,Rx){var NC=A._GetAutoObject(
C.Converter).Ajo(Rx,Eo);switch(NC){case 3:return 1;case 2:return 2;case 1:return 3;
case 0:return 4;default:throw new Error(Qe+NC.toFixed());}},AhT:function(){var B;
var D8=A._NewObject(A.Core.Bs,0).Initialize(A._GetAutoObject(C.Helper).Dv());D8.
AnG(0);D8.AnJ(0);D8.AnM(0);return((B=(D8.JY()|0))<0)?B+0x100000000:B;},Bin:function(
Atw){var CO;switch(Atw){case 36:CO=MR;break;case 40:CO=Tf;break;case 56:CO=U1;break;
case 70:CO=Aab;break;case 100:CO=Xf;break;case 124:CO=Ix;break;case 156:CO=U2;break;
case 158:CO=Aac;break;case 191:CO=U3;break;case 196:CO=Aad;break;case 203:CO=Xg;
break;case 208:CO=Aae;break;case 233:CO=Aaf;break;case 246:CO=U4;break;case 250:
CO=Xh;break;case 276:CO=Pa;break;case 300:CO=Aag;break;case 348:CO=Oi;break;case
372:CO=Rp;break;case 380:CO=Xi;break;case 392:CO=Xj;break;case 428:CO=Tg;break;case
440:CO=Xk;break;case 442:CO=Aah;break;case 470:CO=Xl;break;case 528:CO=Xm;break;
case 578:CO=Th;break;case 616:CO=Ti;break;case 620:CO=Tj;break;case 642:CO=Aai;break;
case 643:CO=Tk;break;case 703:CO=Aaj;break;case 705:CO=AfF;break;case 724:CO=Aak;
break;case 752:CO=Xn;break;case 756:CO=Aal;break;case 792:CO=Xo;break;case 804:CO=
AhX;break;case 826:CO=K3;break;case 840:CO=AcR;break;default:CO=Atw.toFixed();}return CO;
},Ala:function(MX){var AaA;if((MX<10000)&&(A._GetAutoObject(C.Device).OT===2))AaA=
2;else if((MX<100000)&&!!A._GetAutoObject(C.Device).OT)AaA=1;else AaA=0;return this.
Te(MX,AaA,false);},Ax$:function(MX,AaA){return this.Te(MX,AaA,false);},Te:function(
MX,AaA,BAw){var B;var AlJ=A.jV;switch(A._GetAutoObject(C.Device).MassUnit){case 0:
if(BAw)AlJ=A.abl(MX,0,0);else{var BeW=MX<0;if(AaA<3)MX=MX+(((BeW?-1:1)*5)*(Math.
pow(10,2-AaA)|0));AlJ=(((((B=MX)>-2147483648)?Math.abs(B):B)/1000)|0).toFixed();
if(AaA>0)AlJ=AlJ+(LB+A.abV(A.abl((((B=MX)>-2147483648)?Math.abs(B):B)%1000,3,10)
,AaA));if(BeW)AlJ=AhY+AlJ;}break;case 1:AlJ=A.abk(MX/453.592,0,AaA);break;default:
A.ab5("%s%s",Aoi,A._GetAutoObject(C.Device).MassUnit.toFixed());}return AlJ;},Rl:
function(IA){var A40=IA.toFixed();var Bhc=A40.length;if((Bhc>=14)&&(Bhc<=15)){var
A2P=this.Ax1(IA);var Bzl=A._GetAutoObject(C.Converter).Bin(A2P);A40=(Bzl+Oj)+A.abm(
A._GetAutoObject(C.Helper).V6(IA,0,12),12,10);}return A40;},AmZ:function(Ma){switch(
Ma){case 0:return A.aaL(A.ach.AQO);case 1:return A.aaL(A.ach.ADW);case 2:return A.
aaL(A.ach.AD0);default:{A.ab5("%s%e",Xp,Ma);return null;}}},A5C:function(ByT){switch(
ByT){case 0:return A.aaL(A.ach.AvL);case 1:return A.aaL(A.ach.ADS);case 2:return A.
aaL(A.ach.AQH);default:throw new Error(Aam);}},Ad2:function(AJA){switch(AJA){case
0:case 14:return A.aaL(A.ach.AjW);case 2:return A.aaL(A.ach.Arj);case 1:return A.
aaL(A.ach.Ag8);case 3:switch(A._GetAutoObject(C.Device).MassUnit){case 0:return A.
aaL(A.ach.AD6);case 1:return A.aaL(A.ach.AD7);default:throw new Error(AfG+A._GetAutoObject(
C.Device).MassUnit.toFixed());}break;case 4:return A.aaL(A.ach.AP5);case 5:return A.
aaL(A.ach.AP6);case 6:return A.aaL(A.ach.AP$);case 7:return A.aaL(A.ach.APr);case
8:case 13:return A.aaL(A.ach.APy);case 9:return A.aaL(A.ach.ADt);case 10:return A.
aaL(A.ach.APx);case 12:return A.aaL(A.ach.APz);case 11:return A.aaL(A.ach.AQf);default:
throw new Error(AhZ+AJA.toFixed());}},BhP:function(Azl){switch(Azl){case 0:return A.
aaL(A.ach.AQG);case 3:return A.aaL(A.ach.Arj);case 1:return A.aaL(A.ach.Ag8);case
2:return A._GetAutoObject(A.acj.DU).BdX();default:throw new Error(AhZ+Azl.toFixed(
));}},Bim:function(Atw){switch(Atw){case 977:return AcS;case 978:return U5;case 980:
return Aoj;case 981:return Aok;case 982:return Aol;case 983:return Aom;case 984:
return Ald;case 985:return As5;default:return A.aaR(A.acf.Unknown);}},BiH:function(
Ac4){switch(Ac4){case 1:return 0x278A;case 2:return 0x278B;case 3:return 0x278C;
case 4:return 0x278D;case 5:return 0x278E;case 6:return 0x278F;case 7:return 0x2790;
case 8:return 0x2791;case 9:return 0x2792;case 10:return 0x2793;default:return 0x20;
}},BqE:function(IA){if(!IA)return-1;return(IA%100000000)|0;},Bjj:function(AoS,aFilter
){var B;if(!aFilter)return Ayb;var Apk=Ayc;var Aw=aFilter.AOX();while(!!Aw){Apk=
Apk+A._GetAutoObject(C.Helper).A7c(AoS,Aw);Aw=aFilter.AO2(Aw);if(!!Aw)Apk=Apk+Pb;
}Apk=Apk+Rq;return Apk;},A7U:function(BcB){var HU=0;switch(BcB){case 14:HU=2;break;
case 13:HU=4;break;case 6:HU=36;break;case 25:HU=17;break;case 11:HU=9;break;case
17:HU=11;break;case 0:HU=39;break;case 10:HU=26;break;case 12:HU=12;break;case 5:
HU=14;break;case 3:HU=15;break;case 1:HU=10;break;case 8:HU=16;break;case 18:HU=
18;break;case 4:HU=20;break;case 19:HU=21;break;case 20:HU=24;break;case 26:HU=22;
break;case 15:HU=27;break;case 21:HU=28;break;case 22:HU=29;break;case 23:HU=30;
break;case 9:HU=31;break;case 27:HU=33;break;case 2:HU=13;break;case 24:HU=32;break;
case 7:HU=35;break;case 16:HU=37;break;default:A.ab5("%s%e",Ayd,BcB);}return HU;
},BhO:function(Azl){switch(Azl){case 0:return 1;case 3:return 0;case 1:return 2;
case 2:switch(A._GetAutoObject(C.Device).MassUnit){case 0:return 3;case 1:return 4;
default:throw new Error(AfG+A._GetAutoObject(C.Device).MassUnit.toFixed());}break;
default:throw new Error(AhZ+Azl.toFixed());}},Ajs:function(Ao3){switch(Ao3){case
0:switch(A._GetAutoObject(C.Device).MassUnit){case 0:return A.aaL(A.ach.AP2);case
1:return A.aaL(A.ach.AP1);default:throw new Error(AfG+A._GetAutoObject(C.Device).
MassUnit.toFixed());}break;case 1:return A.aaL(A.ach.AQE);case 9:return A.aaL(A.
ach.APY);case 4:return A.aaL(A.ach.AQ1);case 6:return A.aaL(A.ach.AQ2);case 8:return A.
aaL(A.ach.AQa);case 2:return A.aaL(A.ach.AQ6);case 3:return A.aaL(A.ach.AQ0);case
7:return A.aaL(A.ach.AQ7);case 5:return A.aaL(A.ach.AQ8);case 10:switch(A._GetAutoObject(
C.Device).MassUnit){case 0:return A.aaL(A.ach.ARd);case 1:return A.aaL(A.ach.ARc
);default:throw new Error(AfG+A._GetAutoObject(C.Device).MassUnit.toFixed());}break;
case 11:return A.aaL(A.ach.AQg);case 12:return A.aaL(A.ach.AQI);case 16:return A.
aaL(A.ach.AQJ);case 19:case 13:case 14:case 18:case 15:case 17:return A.aaL(A.aci.
TX);default:throw new Error(U6+Ao3.toFixed());}},ANN:function(Atw){switch(Atw){case
40:return 1;case 56:return 3;case 70:return 2;case 100:return 4;case 124:return 5;
case 156:return 7;case 158:return 36;case 191:return 17;case 196:return 8;case 203:
return 9;case 208:return 11;case 233:return 12;case 246:return 14;case 250:return 15;
case 276:return 10;case 300:return 16;case 348:return 18;case 372:return 19;case
380:return 20;case 392:return 21;case 428:return 24;case 440:return 22;case 442:
return 23;case 470:return 25;case 528:return 26;case 578:return 27;case 616:return 28;
case 620:return 29;case 642:return 30;case 643:return 31;case 703:return 34;case
705:return 33;case 724:return 13;case 752:return 32;case 756:return 6;case 792:return 35;
case 804:return 37;case 826:return 38;case 840:return 39;default:return 0;}},S9:
function(IA){var A2P=this.Ax1(IA);return this.ANN(A2P);},Ax1:function(IA){return A.
_GetAutoObject(C.Helper).V6(IA,12,3)|0;},BaE:function(AoX,Eo){if(AoX<A._GetAutoObject(
C.Helper).ADp(Eo))return 1;else if(AoX<A._GetAutoObject(C.Helper).ADo(Eo))return 2;
else return 3;},ADb:function(Byw){switch(Byw){case 1:return 1;case 2:return 2;case
3:return 3;case 4:return 4;case 5:return 5;case 6:return 6;case 7:return 7;case 8:
return 8;case 9:return 9;case 10:return 10;case 11:return 11;case 12:return 12;case
13:return 13;case 14:return 14;case 15:return 15;case 16:return 16;default:return 0;
}},AVz:function(A8,AJs,AJt){if(AJs===AJt)return A8;if(!AJs&&(AJt===1)){var result=((
A8*9)/5)+32;return result;}if((AJs===1)&&!AJt){var result=((A8-32)*5)/9;return result;
}throw new Error(((As6+AJs.toFixed())+Aye)+AJt.toFixed());},A6X:function(Eb){switch(
Eb){case 0:return Ayf;case 1:return A.jV;case 2:return Ale;case 3:return Ayg;case
4:return A.aaR(A.acf.Contains);case 5:return AfH;default:{A.ab5("%s%e",Aon,Eb);return A.
jV;}}},A51:function(Ac2){return this.Na.Aen(Ac2);},Bj3:function(Ac2){return this.
Na.AmK(Ac2);},Bh6:function(Atv){var AAE=0;switch(Atv){case 0:AAE=1;break;case 1:
AAE=2;break;case 2:AAE=3;break;case 3:AAE=4;break;default:A.ab5("%s%e",I1,Atv);}
return AAE;},Ajo:function(A1c,Eo){if(A1c>=A._GetAutoObject(C.Helper).A69(Eo))return 3;
else if(A1c>=A._GetAutoObject(C.Helper).ADc(Eo))return 2;else if(A1c<A._GetAutoObject(
C.Device).AcL)return 0;else return 1;},AqH:function(HU){var BN=-1;switch(HU){case
0:BN=0;break;case 1:BN=40;break;case 2:BN=70;break;case 3:BN=56;break;case 4:BN=
100;break;case 5:BN=124;break;case 6:BN=756;break;case 7:BN=156;break;case 8:BN=
196;break;case 9:BN=203;break;case 10:BN=276;break;case 11:BN=208;break;case 12:
BN=233;break;case 13:BN=724;break;case 14:BN=246;break;case 15:BN=250;break;case
16:BN=300;break;case 17:BN=191;break;case 18:BN=348;break;case 19:BN=372;break;case
20:BN=380;break;case 21:BN=392;break;case 22:BN=440;break;case 23:BN=442;break;case
24:BN=428;break;case 25:BN=470;break;case 26:BN=528;break;case 27:BN=578;break;case
28:BN=616;break;case 29:BN=620;break;case 30:BN=642;break;case 31:BN=643;break;case
32:BN=752;break;case 33:BN=705;break;case 34:BN=703;break;case 35:BN=792;break;case
36:BN=158;break;case 37:BN=804;break;case 38:BN=826;break;case 39:BN=840;break;default:
throw new Error(Aoo+HU.toFixed());}return BN;},Baj:function(IA){return A._GetAutoObject(
C.Helper).V6(IA,8,2)|0;},AVP:function(IA){var BAr=this.Baj(IA);return this.ADb(BAr
);},AMg:function(Eh){var Rz=19;switch(Eh){case 0:break;case 4:Rz=7;break;case 32:
case 2048:Rz=9;break;case 4096:Rz=11;break;case 32768:Rz=14;break;case 524288:Rz=
18;break;case 65536:Rz=15;break;case 128:Rz=17;break;case 16:Rz=1;break;case 16384:
Rz=12;break;case 1024:Rz=8;break;case 2:Rz=3;break;case 131072:Rz=16;break;case 1:
Rz=2;break;case 8:Rz=5;break;case 256:Rz=10;break;default:throw new Error(As7+Eh.
toFixed());}return Rz;},Bai:function(IA){return A._GetAutoObject(C.Helper).V6(IA
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
0,Id:-1,VisualId:0,GroupId:0,DateOfBirth:0,LocationId:0,LastTemperature:0,TimestampLastControl:
0,TimestampLastWatch:0,TimestampExpirationFeverAlarm:0,TimestampAlarm:0,LastBodyWeight:
0,TimestampLastWeighing:0,FirstBodyWeight:0,TimestampFirstWeighing:0,FirstBodyWeightId:
0,DateOfLastCalving:0,LactationNumber:0,TimestampLastTemperature:0,TimestampLastAssessment:
0,ReasonOfLeaving:0,WhereAbouts:0,EaseOfDelivery:0,Breed:0,AnimalType:0,LastRatingTemperature:
0,WorstAssessment:0,BirthType:0,Gender:2,IsDry:false,IsRegistrationNoticePending:
false,IsPerished:false,IsFever:false,IsWatch:false,IsRegistered:false,IsControl:
false,IsAlarm:false,E3:function(Ad,AH){var G1=C.Row.E3.call(this,Ad,AH);if(G1&&!
!AH){this.OnSetId(AH.CC(Ad,0));this.SQ(AH.CC(Ad,1));this.Ab$(AH.CC(Ad,2));this.AnI(
AH.CC(Ad,3));this.Q8(AH.Hw(Ad,4));this.J0(AH.AOZ(Ad,7));this.Akw(AH.BjB(Ad,6));this.
EC(AH.Am0(Ad,14));this.P0(AH.KT(Ad,22));this.Nr(AH.KT(Ad,26));this.Axo(AH.Ja(Ad,
13));this.Ae5(AH.H7(Ad,8));this.Axf(AH.Hw(Ad,15));this.AT2(AH.Hw(Ad,31));this.Ae$(
AH.A7m(Ad,5));this.ATz(AH.Ja(Ad,17));this.Uz(AH.H7(Ad,11));this.AT1(AH.Hw(Ad,16)
);this.AT4(AH.Hw(Ad,30));this.AkC(AH.H7(Ad,9));this.Ae9(AH.H7(Ad,12));this.AT3(AH.
Hw(Ad,20));this.Axh(AH.Hw(Ad,21));this.Ae7(AH.H7(Ad,10));this.AwV(AH.H7(Ad,27));
this.AFD(AH.ADk(Ad,18));this.AF7(AH.Hw(Ad,19));this.AwQ(AH.ADk(Ad,23));this.Axg(
AH.Hw(Ad,24));this.ATr(AH.CC(Ad,25));this.AwH(AH.Hw(Ad,28));this.AwW(AH.CC(Ad,29
));this.Ar3(AH.H7(Ad,38));this.N7(AH.BjC(Ad,32));this.Aky(AH.BjH(Ad,33));this.AnK(
AH.KT(Ad,35));this.Nt(AH.AO7(Ad,34));this.Ae8(AH.H7(Ad,37));this.AFW(AH.BjQ(Ad,36
));}return G1;},Ci:function(AH){var G1=C.Row.Ci.call(this,AH);if(G1&&!!AH){var Jt=
AH.OG();if(Jt<0)A.ab5("%s",Xq);else{var AAi=this.Am$();if(AAi)this.CI=AH.YP();else
AH.HB(this.CI,0,this.Id);AH.HB(this.CI,1,this.VisualId);AH.HB(this.CI,2,this.GroupId
);AH.HB(this.CI,3,this.LocationId);AH.Act(this.CI,4,this.DateOfBirth);AH.Bpy(this.
CI,7,this.Gender);AH.Bpu(this.CI,6,this.BirthType);AH.Bps(this.CI,14,this.AnimalType
);AH.UJ(this.CI,22,this.TransponderId);AH.UJ(this.CI,26,this.NaisId);AH.AkU(this.
CI,13,this.WorstAssessment);AH.Ob(this.CI,8,this.IsAlarm);AH.Act(this.CI,15,this.
TimestampAlarm);AH.Ob(this.CI,11,this.IsFever);AH.Act(this.CI,16,this.TimestampExpirationFeverAlarm
);AH.Ob(this.CI,9,this.IsControl);AH.Ob(this.CI,12,this.IsWatch);AH.Act(this.CI,
20,this.TimestampLastControl);AH.Act(this.CI,21,this.TimestampLastWatch);AH.Ob(this.
CI,10,this.IsRegistered);AH.Ob(this.CI,27,this.IsPerished);AH.Act(this.CI,28,this.
DateOfLastCalving);AH.HB(this.CI,29,this.LactationNumber);AH.Ob(this.CI,38,this.
IsDry);AH.Bpw(this.CI,32,this.Breed);AH.Bpx(this.CI,33,this.EaseOfDelivery);AH.UJ(
this.CI,35,this.NaisIdMother);AH.BpD(this.CI,34,this.WhereAbouts);AH.Ob(this.CI,
37,this.IsRegistrationNoticePending);AH.BpC(this.CI,36,this.ReasonOfLeaving);G1=
AH.OI(Jt);if(AAi&&G1)this.OnSetId(AH.CC(this.CI,0));}}return G1;},Gs:function(){
C.Row.Gs.call(this);this.OnSetId(-2);this.Ae7(true);},E7:function(){C.Row.E7.call(
this);this.OnSetId(-1);this.SQ(0);this.Ab$(0);this.AnI(0);this.Q8(0);this.J0(A._GetAutoObject(
C.Device).Gender);this.Akw(0);this.EC(A._GetAutoObject(C.Device).AnimalType);this.
P0(0);this.Nr(0);this.Axo(0);this.Ae5(false);this.Axf(0);this.AT2(0);this.Ae$(0);
this.ATz(0);this.Uz(false);this.AT4(0);this.AT1(0);this.AkC(false);this.Ae9(false
);this.AT3(0);this.Axh(0);this.Ae7(false);this.AwV(false);this.AFD(0);this.AF7(0
);this.AwQ(0);this.Axg(0);this.ATr(-1);this.AwH(0);this.AwW(0);this.Ar3(false);this.
N7(0);this.Aky(0);this.AnK(0);this.Nt(0);this.Ae8(false);this.AFW(0);},OnSetId:function(
E){if(this.Id===E)return;this.Id=E;A.abo([this,this.Q6,this.OnSetId],0);},SQ:function(
E){if(this.VisualId===E)return;this.VisualId=E;A.abo([this,this.ArK,this.SQ],0);
},Ab$:function(E){if(this.GroupId===E)return;this.GroupId=E;A.abo([this,this.BlB
,this.Ab$],0);},Q8:function(E){if(this.DateOfBirth===E)return;this.DateOfBirth=E;
A.abo([this,this.Awi,this.Q8],0);},J0:function(E){if(this.Gender===E)return;this.
Gender=E;A.abo([this,this.WK,this.J0],0);},Akw:function(E){if(this.BirthType===E
)return;this.BirthType=E;A.abo([this,this.ASL,this.Akw],0);},AnI:function(E){if(
this.LocationId===E)return;this.LocationId=E;A.abo([this,this.A9k,this.AnI],0);}
,Ae$:function(E){if(this.LastTemperature===E)return;this.LastTemperature=E;A.abo([
this,this.A9j,this.Ae$],0);},Ae5:function(E){if(this.IsAlarm===E)return;this.IsAlarm=
E;A.abo([this,this.A9b,this.Ae5],0);},AkC:function(E){if(this.IsControl===E)return;
this.IsControl=E;A.abo([this,this.BlE,this.AkC],0);},Ae7:function(E){if(this.IsRegistered===
E)return;this.IsRegistered=E;A.abo([this,this.BlH,this.Ae7],0);},Ae9:function(E){
if(this.IsWatch===E)return;this.IsWatch=E;A.abo([this,this.A9f,this.Ae9],0);},Axo:
function(E){if(this.WorstAssessment===E)return;this.WorstAssessment=E;A.abo([this
,this.A9Y,this.Axo],0);},Uz:function(E){if(this.IsFever===E)return;this.IsFever=
E;A.abo([this,this.A9c,this.Uz],0);},AT3:function(E){if(this.TimestampLastControl===
E)return;this.TimestampLastControl=E;A.abo([this,this.Bl8,this.AT3],0);},Axh:function(
E){if(this.TimestampLastWatch===E)return;this.TimestampLastWatch=E;A.abo([this,this.
Bl_,this.Axh],0);},ATz:function(E){if(this.LastRatingTemperature===E)return;this.
LastRatingTemperature=E;A.abo([this,this.BlK,this.ATz],0);},AT1:function(E){if(this.
TimestampExpirationFeverAlarm===E)return;this.TimestampExpirationFeverAlarm=E;A.
abo([this,this.Bl6,this.AT1],0);},Axf:function(E){if(this.TimestampAlarm===E)return;
this.TimestampAlarm=E;A.abo([this,this.Bl5,this.Axf],0);},EC:function(E){if(this.
AnimalType===E)return;this.AnimalType=E;A.abo([this,this.PX,this.EC],0);},AFD:function(
E){if(this.LastBodyWeight===E)return;this.LastBodyWeight=E;A.abo([this,this.A9i,
this.AFD],0);},AF7:function(E){if(this.TimestampLastWeighing===E)return;this.TimestampLastWeighing=
E;A.abo([this,this.A9K,this.AF7],0);},P0:function(E){if(this.TransponderId===E)return;
this.TransponderId=E;A.abo([this,this.ArJ,this.P0],0);},RU:function(){return A._GetAutoObject(
C.Helper).Mf(this.DateOfBirth,A._GetAutoObject(C.Helper).Dv());},AwQ:function(E){
if(this.FirstBodyWeight===E)return;this.FirstBodyWeight=E;A.abo([this,this.ASQ,this.
AwQ],0);},Axg:function(E){if(this.TimestampFirstWeighing===E)return;this.TimestampFirstWeighing=
E;A.abo([this,this.AS7,this.Axg],0);},Aro:function(){var Ph=A._NewObject(A.Core.
Bs,0);Ph.Initialize(this.DateOfBirth);var A2B=A._NewObject(A.Core.Bs,0);A2B.Initialize(
this.TimestampFirstWeighing);if(((Ph.Year===A2B.Year)&&(Ph.Ab7()===A2B.Ab7()))&&(
this.FirstBodyWeight>0))return true;else return false;},AhW:function(AJl){var AaK;
var AuD;if(this.TimestampLastWeighing>0){AuD=this.TimestampLastWeighing;AaK=this.
LastBodyWeight;}else{AuD=this.DateOfBirth;AaK=A._GetAutoObject(C.Helper).AbA(this.
AnimalType);}return A._GetAutoObject(C.Helper).AhW(AaK,AuD,AJl,this.AnimalType);
},ATr:function(E){if(this.FirstBodyWeightId===E)return;this.FirstBodyWeightId=E;
A.abo([this,this.BlA,this.ATr],0);},AnZ:function(BcY){this.Ae5(BcY);if(BcY){if(!
this.TimestampAlarm)this.Axf(A._GetAutoObject(C.Helper).Dv());}else this.Axf(0);
},Nr:function(E){if(this.NaisId===E)return;this.NaisId=E;A.abo([this,this.Any,this.
Nr],0);},AGU:function(BcU){this.Ae9(BcU);if(BcU){if(!this.TimestampLastWatch)this.
Axh(A._GetAutoObject(C.Helper).Dv());}else this.Axh(0);},AwH:function(E){if(this.
DateOfLastCalving===E)return;this.DateOfLastCalving=E;A.abo([this,this.Blq,this.
AwH],0);},AwW:function(E){if(this.LactationNumber===E)return;this.LactationNumber=
E;A.abo([this,this.BlJ,this.AwW],0);},AwV:function(E){if(this.IsPerished===E)return;
this.IsPerished=E;A.abo([this,this.BlG,this.AwV],0);},AT4:function(E){if(this.TimestampLastTemperature===
E)return;this.TimestampLastTemperature=E;A.abo([this,this.Bl9,this.AT4],0);},AT2:
function(E){if(this.TimestampLastAssessment===E)return;this.TimestampLastAssessment=
E;A.abo([this,this.Bl7,this.AT2],0);},N7:function(E){if(this.Breed===E)return;this.
Breed=E;A.abo([this,this.Awg,this.N7],0);},Aky:function(E){if(this.EaseOfDelivery===
E)return;this.EaseOfDelivery=E;A.abo([this,this.ASP,this.Aky],0);},Nt:function(E
){if(this.WhereAbouts===E)return;this.WhereAbouts=E;A.abo([this,this.Awu,this.Nt
],0);},AnK:function(E){if(this.NaisIdMother===E)return;this.NaisIdMother=E;A.abo([
this,this.ASX,this.AnK],0);},AFW:function(E){if(this.ReasonOfLeaving===E)return;
this.ReasonOfLeaving=E;A.abo([this,this.BlV,this.AFW],0);},Ae8:function(E){if(this.
IsRegistrationNoticePending===E)return;this.IsRegistrationNoticePending=E;A.abo([
this,this.BlI,this.Ae8],0);},Ar3:function(E){if(this.IsDry===E)return;this.IsDry=
E;A.abo([this,this.BlF,this.Ar3],0);},Q6:function(){return this.Id;},ArK:function(
){return this.VisualId;},BlB:function(){return this.GroupId;},Awi:function(){return this.
DateOfBirth;},WK:function(){return this.Gender;},ASL:function(){return this.BirthType;
},A9k:function(){return this.LocationId;},A9j:function(){return this.LastTemperature;
},A9b:function(){return this.IsAlarm;},BlE:function(){return this.IsControl;},BlH:
function(){return this.IsRegistered;},A9f:function(){return this.IsWatch;},A9Y:function(
){return this.WorstAssessment;},A9c:function(){return this.IsFever;},Bl8:function(
){return this.TimestampLastControl;},Bl_:function(){return this.TimestampLastWatch;
},BlK:function(){return this.LastRatingTemperature;},Bl6:function(){return this.
TimestampExpirationFeverAlarm;},Bl5:function(){return this.TimestampAlarm;},PX:function(
){return this.AnimalType;},A9i:function(){return this.LastBodyWeight;},A9K:function(
){return this.TimestampLastWeighing;},ArJ:function(){return this.TransponderId;}
,ASQ:function(){return this.FirstBodyWeight;},AS7:function(){return this.TimestampFirstWeighing;
},BlA:function(){return this.FirstBodyWeightId;},Any:function(){return this.NaisId;
},Blq:function(){return this.DateOfLastCalving;},BlJ:function(){return this.LactationNumber;
},BlG:function(){return this.IsPerished;},Bl9:function(){return this.TimestampLastTemperature;
},Bl7:function(){return this.TimestampLastAssessment;},Awg:function(){return this.
Breed;},ASP:function(){return this.EaseOfDelivery;},Awu:function(){return this.WhereAbouts;
},ASX:function(){return this.NaisIdMother;},BlV:function(){return this.ReasonOfLeaving;
},BlI:function(){return this.IsRegistrationNoticePending;},BlF:function(){return this.
IsDry;},_Init:function(aArg){C.Row._Init.call(this,aArg);this.__proto__=C.Animal;
this.TableId=0;},_className:"Device::Animal"};C.Row={CI:-1,TableId:2,E3:function(
Ad,AH){if(!AH){A.ab5("%s",(As8+this.CI.toFixed())+As9);return false;}else if(AH.
Id!==this.TableId)throw new Error(As_);else if((Ad<0)||(Ad>=AH.B8())){A.ab5("%s"
,(((Aop+this.CI.toFixed())+As$)+AH.B8().toFixed())+Alf);return false;}this.CI=Ad;
return true;},Ci:function(AH){if(!AH){A.ab5("%s",(As8+this.CI.toFixed())+As9);return false;
}else if(AH.Id!==this.TableId)throw new Error(As_);else if(this.Am$()&&AH.Ll()){
A.ab5("%s",Ayh+AH.HM().toFixed());return false;}else if(!this.Am$()&&((this.CI<0
)||(this.CI>=AH.B8()))){A.ab5("%s",(((Aop+this.CI.toFixed())+As$)+AH.B8().toFixed(
))+Alf);return false;}return true;},Gs:function(){this.E7();this.CI=-1;},Am$:function(
){return this.CI===-1;},E7:function(){this.CI=-2;},Aq6:function(){return this.CI
!==-2;},A9y:function(){return this.CI;},A_Y:function(E){this.CI=E;},_Init:function(
aArg){this.__proto__=C.Row;A.h7++;},_Done:function(){this.__proto__=null;A.h7--;
},_ReInit:function(){},_Mark:function(D){var B;if((B=this.I)&&(B._cycle!=D))B._Mark(
B._cycle=D);},I:null,_cycle:0,_observers:null,_className:"Device::Row"};C.Rating={
Temperature:0,Id:-1,AnimalId:-1,Timestamp:0,BodyWeight:0,RatingTemperature:0,Faeces:
0,Respiratory:0,Appearance:0,Feed:0,E3:function(Ad,AH){var G1=C.Row.E3.call(this
,Ad,AH);if(G1&&!!AH){this.OnSetId(AH.CC(Ad,0));this.OnSetAnimalId(AH.CC(Ad,1));this.
OnSetTimestamp(AH.Hw(Ad,6));this.OnSetFeed(AH.Ja(Ad,2));this.OnSetAppearance(AH.
Ja(Ad,3));this.OnSetRespiratory(AH.Ja(Ad,4));this.OnSetFaeces(AH.Ja(Ad,5));this.
OnSetTemperature(AH.A7m(Ad,7));this.OnSetBodyWeight(AH.ADk(Ad,8));this.OnSetRatingTemperature(
AH.Ja(Ad,9));}return G1;},Ci:function(AH){if(this.K&&this.K.Ci)return this.K.Ci.
apply(this,arguments);else return C.Rating.Bbk.apply(this,arguments);},Bbk:function(
AH){var G1=C.Row.Ci.call(this,AH);if((G1&&!!AH)&&(AH.Id===1)){var Jt=AH.OG();if(
Jt<0)A.ab5("%s",Xq);else{var AAi=this.Am$();if(AAi)this.CI=AH.YP();else AH.HB(this.
CI,0,this.Id);AH.HB(this.CI,1,this.AnimalId);AH.Act(this.CI,6,this.Timestamp);AH.
AkU(this.CI,2,this.Feed);AH.AkU(this.CI,3,this.Appearance);AH.AkU(this.CI,4,this.
Respiratory);AH.AkU(this.CI,5,this.Faeces);AH.A$U(this.CI,7,this.Temperature);AH.
AU1(this.CI,8,this.BodyWeight);AH.AkU(this.CI,9,this.RatingTemperature);G1=AH.OI(
Jt);if(AAi&&G1)this.OnSetId(AH.CC(this.CI,0));var RB=A._GetAutoObject(C.Device).
An;var Ad=A._GetAutoObject(C.Device).An.LZ(0,this.AnimalId);if(Ad>=0){var Cz=A._NewObject(
C.Animal,0);Cz.E3(Ad,RB);if(this.Temperature>0)Cz.Uz(A._GetAutoObject(C.Helper).
A7O(this));if((this.Temperature>0)&&A._GetAutoObject(C.Helper).AGA(this)){var Os=
A._GetAutoObject(C.Helper).ARr(this);Cz.AkC(Os);Cz.AnZ(Os);}else if(this.Temperature>
0){var Os=(A._GetAutoObject(C.Helper).ARr(this)||(Cz.WorstAssessment===2))||(Cz.
WorstAssessment===1);Cz.AkC(Os);Cz.AnZ(Os);}else{var Os=A._GetAutoObject(C.Helper
).ARr(this)||Cz.IsFever;Cz.AkC(Os);Cz.AnZ(Os);}Cz.Ci(RB);}}}return G1;},Gs:function(
){C.Row.Gs.call(this);this.OnSetTimestamp(A._GetAutoObject(C.Helper).Dv());this.
OnSetId(-2);},E7:function(){C.Row.E7.call(this);this.OnSetTimestamp(0);this.OnSetId(-
1);this.OnSetAnimalId(-1);this.OnSetFeed(0);this.OnSetAppearance(0);this.OnSetRespiratory(
0);this.OnSetFaeces(0);this.OnSetTemperature(0);this.OnSetBodyWeight(0);this.OnSetRatingTemperature(
0);},OnSetTemperature:function(E){if(this.Temperature===E)return;this.Temperature=
E;A.abo([this,this.Bl4,this.OnSetTemperature],0);},OnSetId:function(E){if(this.Id===
E)return;this.Id=E;A.abo([this,this.Q6,this.OnSetId],0);},OnSetAnimalId:function(
E){if(this.AnimalId===E)return;this.AnimalId=E;A.abo([this,this.Ble,this.OnSetAnimalId
],0);},OnSetFeed:function(E){if(this.Feed===E)return;this.Feed=E;A.abo([this,this.
Blx,this.OnSetFeed],0);},OnSetAppearance:function(E){if(this.Appearance===E)return;
this.Appearance=E;A.abo([this,this.Blf,this.OnSetAppearance],0);},OnSetRespiratory:
function(E){if(this.Respiratory===E)return;this.Respiratory=E;A.abo([this,this.BlW
,this.OnSetRespiratory],0);},OnSetFaeces:function(E){if(this.Faeces===E)return;this.
Faeces=E;A.abo([this,this.Blv,this.OnSetFaeces],0);},OnSetTimestamp:function(E){
if(this.Timestamp===E)return;this.Timestamp=E;A.abo([this,this.A9J,this.OnSetTimestamp
],0);},Bpt:function(NB,A8){switch(NB){case 2:this.OnSetAppearance(A8);break;case
1:this.OnSetFeed(A8);break;case 4:this.OnSetFaeces(A8);break;case 3:this.OnSetRespiratory(
A8);break;default:;}},Bjz:function(NB){switch(NB){case 2:return this.Appearance;
case 1:return this.Feed;case 4:return this.Faeces;case 3:return this.Respiratory;
default:return 0;}},OnSetRatingTemperature:function(E){if(this.RatingTemperature===
E)return;this.RatingTemperature=E;A.abo([this,this.BlU,this.OnSetRatingTemperature
],0);},OnSetBodyWeight:function(E){if(this.BodyWeight===E)return;this.BodyWeight=
E;A.abo([this,this.Blj,this.OnSetBodyWeight],0);},Bl4:function(){return this.Temperature;
},Q6:function(){return this.Id;},Ble:function(){return this.AnimalId;},Blx:function(
){return this.Feed;},Blf:function(){return this.Appearance;},BlW:function(){return this.
Respiratory;},Blv:function(){return this.Faeces;},A9J:function(){return this.Timestamp;
},BlU:function(){return this.RatingTemperature;},Blj:function(){return this.BodyWeight;
},_Init:function(aArg){C.Row._Init.call(this,aArg);this.__proto__=C.Rating;this.
TableId=1;var J_=this._variants();if(J_){this.K={};J_._Init.call(this,aArg);}},_Done:
function(){if(this.K)this.K._Done.call(this);this.__proto__=C.Row;C.Row._Done.call(
this);},_ReInit:function(){C.Row._ReInit.call(this);if(this.K)this.K._ReInit.call(
this);},_Mark:function(D){C.Row._Mark.call(this,D);if(this.K)this.K._Mark(D);},_variants:
function(){return A.acq.Rating._variants();},K:null,_className:"Device::Rating"};
C.HelperClass={UI:null,AhI:null,AUU:null,AUV:null,W:null,Av:null,KN:null,S0:null
,Ad3:null,UP:null,UO:null,Aeq:null,AfC:null,AfB:null,AfA:null,AfD:null,AgI:null,
AG9:0,Init:function(aArg){A.pe([this,this.AUm],this);},AkF:function(E){this.UI=E;
A.abo([this,this.ArH,this.AkF],0);},AFZ:function(E){this.AhI=E;A.abo([this,this.
A9z,this.AFZ],0);},BBD:function(G){switch(A._GetAutoObject(C.Device).ScanState){
case 2:{var AuF=A._GetAutoObject(C.Device).O0;if(!AuF)throw new Error(Ayi);switch(
AuF.TransponderType){case 1:this.AkF(AuF);break;case 2:this.ATS(AuF);break;case 3:
this.AFZ(AuF);break;case 4:this.ATT(AuF);break;case 0:break;default:throw new Error(
Ayj);}}break;case 4:A._GetAutoObject(C.Device).AZ(11,true,A.jV,2000,null);break;
case 3:A._GetAutoObject(C.Device).AZ(12,true,A.jV,2000,null);break;case 0:case 1:
break;default:throw new Error(Ata);}},AkR:function(){this.AkF(null);this.ATS(null
);this.AFZ(null);this.ATT(null);},AF4:function(E){if(this.K&&this.K.AF4)return this.
K.AF4.apply(this,arguments);else return C.HelperClass.Bbi.apply(this,arguments);
},Bbi:function(E){A.abo([this,this.U_,this.Vb],0);A._GetAutoObject(C.Device).SetSystemTime(
E);},Vb:function(Aq){this.AF4(Aq);},Dv:function(){if(this.K&&this.K.Dv)return this.
K.Dv.apply(this,arguments);else return C.HelperClass.Bbe.apply(this,arguments);}
,Bbe:function(){var B;return((B=(this.Av.BdV()|0))<0)?B+0x100000000:B;},U_:function(
){return this.Dv();},Asz:function(){A._GetAutoObject(C.Device).SX(-1);this.W.E7(
);A.we(this.W,0);},A74:function(IA){if(!IA){A.ab5("%s%U",Ayk,IA);return false;}var
Bd=A._GetAutoObject(C.Device).An.Aev(22,IA);return this.GS(Bd);},Am1:function(AoS
,AJk){switch(AoS){case 0:{var Apj=AJk;switch(Apj){case 14:return A.aaR(A.acf.Afx
);case 6:return Pc;case 4:return A.aaR(A.acf.Aei);case 28:return Ayl;case 7:return A.
aaR(A.acf.Afs);case 2:return A.aaR(A.acf.P);case 0:return A.aaR(A.acf.GN);case 37:
return AWn;case 8:return A.aaR(A.acf.Alarm);case 9:return A.aaR(A.acf.ACz);case 38:
return A.aaR(A.acf.AOa);case 11:return A.aaR(A.acf.Fever);case 27:return AWo;case
10:return A.aaR(A.acf.Bo6);case 12:return A.aaR(A.acf.Asl);case 29:return A.aaR(
A.acf.ARL);case 18:return A.aaR(A.acf.Weighing);case 17:return AWp;case 5:return A.
aaR(A.acf.Temperature);case 3:return AWq;case 26:return A.aaR(A.acf.Uq);case 35:
return A.aaR(A.acf.Uq)+AHD;case 36:return AHE;case 15:return AfI;case 24:return Aoq;
case 20:return AWr;case 30:return AHF;case 21:return Alg;case 19:return AHG;case
22:return A.aaR(A.acf.Transponder);case 1:return A.aaR(A.acf.GI);case 34:return A.
aaR(A.acf.Jm);case 13:return AHH;case 31:return AWs;default:{A.ab5("%s",AWt+Apj.
toFixed());return AHI+Apj.toFixed();}}}case 1:{var Apj=AJk;switch(Apj){case 1:return A.
aaR(A.acf.Animal);case 3:return A.aaR(A.acf.AGz);case 8:return A.aaR(A.acf.Afz);
case 5:return A.aaR(A.acf.AGB);case 2:return A.aaR(A.acf.Feed);case 4:return A.aaR(
A.acf.AGC);case 7:return A.aaR(A.acf.Temperature);case 6:return A.aaR(A.acf.Bs);
default:{A.ab5("%s",AWu+Apj.toFixed());return AHI+Apj.toFixed();}}}default:A.ab5(
"%s",(AcT+AoS.toFixed())+AWv);}return A.jV;},A7c:function(AoS,AI){var result=A.jV;
if(!!AI){result=this.Am1(AoS,AI.EJ);result=((result+Oj)+A._GetAutoObject(C.Converter
).A6X(AI.Operator))+Oj;if(!!(C.Int32FilterCriterion.isPrototypeOf(AI)?AI:null))result=
result+(C.Int32FilterCriterion.isPrototypeOf(AI)?AI:null).A5.toFixed();else if(!
!(C.UInt32FilterCriterion.isPrototypeOf(AI)?AI:null))result=result+(C.UInt32FilterCriterion.
isPrototypeOf(AI)?AI:null).A5.toFixed();else if(!!(C.StringFilterCriterion.isPrototypeOf(
AI)?AI:null))result=result+(C.StringFilterCriterion.isPrototypeOf(AI)?AI:null).A5;
else if(!!(C.BoolFilterCriterion.isPrototypeOf(AI)?AI:null)){if((C.BoolFilterCriterion.
isPrototypeOf(AI)?AI:null).A5)result=this.Am1(AoS,AI.EJ);else result=A.jV;}else if(
!!(C.GenderFilterCriterion.isPrototypeOf(AI)?AI:null)){var Bz0=A._NewObject(C.GenderToString
,0);result=result+Bz0.LA((C.GenderFilterCriterion.isPrototypeOf(AI)?AI:null).A5);
}else if(!!(C.AnimalTypeFilterCriterion.isPrototypeOf(AI)?AI:null)){var ByV=A._NewObject(
C.AnimalTypeToString,0);result=result+ByV.LA((C.AnimalTypeFilterCriterion.isPrototypeOf(
AI)?AI:null).A5);}else if(!!(C.AssessmentFilterCriterion.isPrototypeOf(AI)?AI:null
)){var ByY=A._NewObject(C.AssesmentToString,0);result=result+ByY.LA((C.AssessmentFilterCriterion.
isPrototypeOf(AI)?AI:null).A5);}else if(!!(C.UInt64FilterCriterion.isPrototypeOf(
AI)?AI:null))result=result+(C.UInt64FilterCriterion.isPrototypeOf(AI)?AI:null).A5.
toFixed();else if(!!(C.UInt64PartialFilterCriterion.isPrototypeOf(AI)?AI:null)){
var Aw=(C.UInt64PartialFilterCriterion.isPrototypeOf(AI)?AI:null);result=(((((result+
Aw.A5)+AWw)+Aw.OK.toFixed())+Pb)+Aw.Zs.toFixed())+Alf;}else if(!!(C.WhereAboutsFilterCriterion.
isPrototypeOf(AI)?AI:null)){var BDn=A._NewObject(C.WhereAboutsToString,0);result=
result+BDn.LA((C.WhereAboutsFilterCriterion.isPrototypeOf(AI)?AI:null).A5);}else
A.ab5("%s",AWx);}return result;},MO:function(aString,BcG,Bx_){var result=A.jV;var
Bgs=false;var index=0;var Bya=BcG.length;while(!Bgs){var A4i=aString.indexOf(BcG
,index);if(A4i!==-1){result=(result+A.abW(aString,index,A4i-index))+Bx_;index=A4i+
Bya;}else{var BcL=aString.length;if(index<BcL)result=result+A.ab2(aString,BcL-index
);Bgs=true;}}return result;},ATS:function(E){this.AUU=E;A.abo([this,this.BlY,this.
ATS],0);},ATT:function(E){this.AUV=E;A.abo([this,this.BlZ,this.ATT],0);},Bej:function(
){return((A._GetAutoObject(C.Device).ScanState===2)&&!!A._GetAutoObject(C.Device
).O0)&&(A._GetAutoObject(C.Device).O0.TransponderType===1);},AaO:function(G){if(
!this.W.Am$()&&(this.W.Id>=0))this.BkB(this.W.Id);},ADc:function(Eo){return A._GetAutoObject(
C.Helper).UP.Get(Eo);},A69:function(Eo){return A._GetAutoObject(C.Helper).UO.Get(
Eo);},A7i:function(){var O=0;var min=32767;while(O<A._GetAutoObject(C.Helper).UP.
MN){if(A._GetAutoObject(C.Helper).UP.Get(O)<min)min=A._GetAutoObject(C.Helper).UP.
Get(O);O=O+1;}return min;},AUm:function(G){A.zV([this,this.AaO],A._GetAutoObject(
C.Device).An,0);},ARr:function(D3){if(!D3)return false;var Bkc=(((this.AAe(D3.Faeces
)||this.AAe(D3.Feed))||this.AAe(D3.Appearance))||this.AAe(D3.Respiratory))||this.
AAe(D3.RatingTemperature);return Bkc||this.A7O(D3);},AAe:function(Bck){return(Bck===
2)||(Bck===1);},A7O:function(D3){return!!D3&&(D3.Temperature>A._GetAutoObject(C.
Helper).ADc(A._GetAutoObject(C.Helper).W.AnimalType));},GS:function(Md){var A3b=
false;if(Md>=0){if(Md!==this.W.CI)A._GetAutoObject(C.Device).SX(Md);A3b=this.W.E3(
Md,A._GetAutoObject(C.Device).An);if(A3b)A.we(this.W,0);}else{A._GetAutoObject(C.
Device).SX(-1);this.W.E7();A.we(this.W,0);}return A3b;},AhR:function(Ah9){var B;
return(((B=(this.Av.BdV()|0))<0)?B+0x100000000:B)-this.AmN(Ah9);},AsO:function(){
var B;A.pe([B=this.KN,B.An3],this);},BCO:function(G){A._GetAutoObject(C.Device).
AZ(16,false,AHJ,0,null);A._GetAutoObject(C.Device).AZ(5,true,A.jV,0,null);},Boz:
function(G){var Ar=(C.PopupContext.isPrototypeOf(G)?G:null);if(!!Ar&&(Ar.PopupState===
5))this.AsO();},Boj:function(E){if(this.AG9===E)return;this.AG9=E;A._GetAutoObject(
C.Device).AZ(16,true,this.AG9.toFixed(),0,[this,this.Boz]);},Mf:function(BxK,Byo
){var D8;var Bg0=A._NewObject(A.Core.An9,0);var GG=A._NewObject(A.Core.Bs,0);var
K$=A._NewObject(A.Core.Bs,0);GG.Initialize(BxK);K$.Initialize(Byo);D8=K$.BiG(GG);
Bg0.Initialize2(0,D8.ADN,D8.AEz,D8.AGN);if(GG.J(Bg0).GL===GG.GL)return D8.Kq;else
return D8.Kq+1;},BCQ:function(G){A._GetAutoObject(C.Device).UpdateMeasureState(3
);},ALi:function(G){var BhQ=A._GetAutoObject(C.Helper).ADc(A._GetAutoObject(C.Helper
).W.AnimalType);var BhN=A._GetAutoObject(C.Helper).A69(A._GetAutoObject(C.Helper
).W.AnimalType);var Agt=A.abz(BhQ-100,BhN+100);this.Bdz(Agt);},AmN:function(Ah9){
return Ah9*86400;},Ak8:function(Ka){var B;if(!!Ka&&(Ka<(((B=Math.trunc(Math.pow(
10,A._GetAutoObject(C.Device).AF)))<0)?B+0x10000000000000000:B)))return-1;return A.
_GetAutoObject(C.Helper).V6(Ka,A._GetAutoObject(C.Device).AF&0xFF,A._GetAutoObject(
C.Device).A3&0xFF)|0;},AGA:function(D3){if(!D3)return false;return((!!D3.Faeces||
!!D3.Feed)||!!D3.Appearance)||!!D3.Respiratory;},AhW:function(A1o,BcN,AJl,Eo){var
B;var ApX;if((A1o<650000)&&(BcN<this.Dv())){var Bc$=this.AgI.Avz(Eo);var Bc_=0;if(
Bc$>=0)Bc_=this.AfA.Get(Bc$);ApX=A1o+(this.Mf(BcN,this.Dv())*Bc_);if(AJl>0){var A2j=
this.ApW(AJl);ApX=(Math.trunc(((((B=ApX)<0)?B+0x10000000000000000:B)+Math.trunc(
A2j/2))/A2j)*A2j)|0;}if(ApX>650000)ApX=650000;}else ApX=A1o;return ApX;},ADq:function(
D3){var Aqj=A._GetAutoObject(C.Converter).Ad4(D3.Faeces);if(Aqj<A._GetAutoObject(
C.Converter).Ad4(D3.Feed))Aqj=A._GetAutoObject(C.Converter).Ad4(D3.Feed);if(Aqj<
A._GetAutoObject(C.Converter).Ad4(D3.Appearance))Aqj=A._GetAutoObject(C.Converter
).Ad4(D3.Appearance);if(Aqj<A._GetAutoObject(C.Converter).Ad4(D3.Respiratory))Aqj=
A._GetAutoObject(C.Converter).Ad4(D3.Respiratory);return A._GetAutoObject(C.Converter
).Bal(Aqj);},AxD:function(D3,NA){if(!!D3){D3.OnSetFaeces(NA);D3.OnSetFeed(NA);D3.
OnSetAppearance(NA);D3.OnSetRespiratory(NA);}},Bjx:function(AH,AJr,Ac_,Xx,AfN){if(
!AH)throw new Error(Atb);var Bf=A._NewObject(C.Filter,0);var ApK=AH.Filter;var On=
A._NewObject(C.Int32FilterCriterion,0);On.Operator=0;On.EJ=1;On.A5=Ac_;Bf.CX(On);
if(Xx>0){var Oz=A._NewObject(C.UInt32FilterCriterion,0);Oz.Operator=2;Oz.EJ=6;Oz.
A5=Xx;Bf.CX(Oz);}if(AfN>0){var Or=A._NewObject(C.UInt32FilterCriterion,0);Or.Operator=
3;Or.EJ=6;Or.A5=AfN;Bf.CX(Or);}AH.Bk(Bf);var Me=A._NewObject(C.Int32ArrayWrapper
,0);Me.ZG(6);var O;for(O=0;O<Me.MN;O=O+1)Me.Set(O,0);var Vi;for(O=0;O<AH.B8();O=
O+1){Vi=AH.Ja(O,AJr);Me.Set(Vi,Me.Get(Vi)+1);}AH.Bk(ApK);return Me;},ZY:function(
Ah9){var B;var GG=A._NewObject(A.Core.Bs,0);var BgZ=A._NewObject(A.Core.An9,0);GG.
Initialize(A._GetAutoObject(C.Converter).AhT());BgZ.Initialize2(Ah9,0,0,0);GG=GG.
BpV(BgZ);return((B=(GG.JY()|0))<0)?B+0x100000000:B;},A6_:function(AH,Ac_,AfN,Xx){
if(!AH)throw new Error(Atb);var Bf=A._NewObject(C.Filter,0);var ApK=AH.Filter;var
On=A._NewObject(C.Int32FilterCriterion,0);On.Operator=0;On.EJ=1;On.A5=Ac_;Bf.CX(
On);if(Xx>0){var Oz=A._NewObject(C.UInt32FilterCriterion,0);Oz.Operator=2;Oz.EJ=
6;Oz.A5=Xx;Bf.CX(Oz);}if(AfN>0){var Or=A._NewObject(C.UInt32FilterCriterion,0);Or.
Operator=3;Or.EJ=6;Or.A5=AfN;Bf.CX(Or);}AH.Bk(Bf);var Me=A._NewObject(C.Int32ArrayWrapper
,0);Me.ZG(6);var O;for(O=0;O<Me.MN;O=O+1)Me.Set(O,0);var Ao_=A._NewObject(C.Rating
,0);var A2b;for(O=0;O<AH.B8();O=O+1){Ao_.E3(O,AH);if(A._GetAutoObject(C.Helper).
AGA(Ao_)){A2b=A._GetAutoObject(C.Helper).ADq(Ao_);Me.Set(A2b,Me.Get(A2b)+1);}}AH.
Bk(ApK);return Me;},A2K:function(AH,Ac_,Bzu){if(!AH)throw new Error(Atb);var Bf=
A._NewObject(C.Filter,0);var ApK=AH.Filter;var On=A._NewObject(C.Int32FilterCriterion
,0);On.Operator=0;On.EJ=1;On.A5=Ac_;Bf.CX(On);var Xx=A._GetAutoObject(C.Converter
).AhT()+A._GetAutoObject(C.Helper).AmN(Bzu);var AfN=Xx+A._GetAutoObject(C.Helper
).AmN(1);var Oz=A._NewObject(C.UInt32FilterCriterion,0);Oz.Operator=2;Oz.EJ=6;Oz.
A5=Xx;Bf.CX(Oz);var Or=A._NewObject(C.UInt32FilterCriterion,0);Or.Operator=3;Or.
EJ=6;Or.A5=AfN;Bf.CX(Or);AH.Bk(Bf);var Ao_=A._NewObject(C.Rating,0);var Vi;var LW=
0;var O;for(O=0;O<AH.B8();O=O+1){Ao_.E3(O,AH);if(A._GetAutoObject(C.Helper).AGA(
Ao_)){Vi=A._GetAutoObject(C.Helper).ADq(Ao_);if(A._GetAutoObject(C.Converter).Ad4(
Vi)>A._GetAutoObject(C.Converter).Ad4(LW))LW=Vi;}}AH.Bk(ApK);return LW;},Am_:function(
){if((A._GetAutoObject(C.Device).WeightRecordingScope===2)||(A._GetAutoObject(C.
Device).WeightRecordingScope===1))return true;else return false;},A7R:function(){
if((A._GetAutoObject(C.Device).WeightRecordingScope===2)||!A._GetAutoObject(C.Device
).WeightRecordingScope)return true;else return false;},Bjy:function(AH,AJr,Ac_,Xx
,AfN){if(!AH)throw new Error(Atb);var Bf=A._NewObject(C.Filter,0);var ApK=AH.Filter;
var On=A._NewObject(C.Int32FilterCriterion,0);On.Operator=0;On.EJ=1;On.A5=Ac_;Bf.
CX(On);if(Xx>0){var Oz=A._NewObject(C.UInt32FilterCriterion,0);Oz.Operator=2;Oz.
EJ=6;Oz.A5=Xx;Bf.CX(Oz);}if(AfN>0){var Or=A._NewObject(C.UInt32FilterCriterion,0
);Or.Operator=3;Or.EJ=6;Or.A5=AfN;Bf.CX(Or);}AH.Bk(Bf);var Me=A._NewObject(C.Int32ArrayWrapper
,0);Me.ZG(6);var O;for(O=0;O<Me.MN;O=O+1)Me.Set(O,0);if(AH.B8()>0){var Vi=AH.Ja(
0,AJr);var Ap2=AH.Hw(O,6);var Ac=A._NewObject(A.Core.Bs,0);Ac.Initialize(Ap2);var
Aqi=Vi;var AKk=A._NewObject(A.Core.Bs,0);AKk.Initialize(Ac.JY());for(O=1;O<AH.B8(
);O=O+1){Vi=AH.Ja(O,AJr);Ap2=AH.Hw(O,6);Ac.Initialize(Ap2);if((Ac.Ab7()!==AKk.Ab7(
))||(Ac.Year!==AKk.Year)){Me.Set(Aqi,Me.Get(Aqi)+1);AKk.Initialize(Ac.JY());Aqi=
Vi;}else if(!!Vi&&(Vi<Aqi))Aqi=Vi;}Me.Set(Aqi,Me.Get(Aqi)+1);}AH.Bk(ApK);return Me;
},Aqx:function(L$){var B;var GG=A._NewObject(A.Core.Bs,0);GG.Initialize(L$);GG.AnG(
0);GG.AnJ(0);GG.AnM(0);return((B=(GG.JY()|0))<0)?B+0x100000000:B;},AOn:function(
L$){var B;L$=L$+86400;var GG=A._NewObject(A.Core.Bs,0);GG.Initialize(L$);GG.AnG(
0);GG.AnJ(0);GG.AnM(0);return((B=(GG.JY()|0))<0)?B+0x100000000:B;},BjA:function(
BCM,BzG,Aml,AlK){var Bdu=A._GetAutoObject(C.Helper).Mf(BCM,BzG);if(Bdu>0)return((
AlK-Aml)/Bdu)|0;return 0;},Bqw:function(BxL,Byp){var GG=A._NewObject(A.Core.Bs,0
);var K$=A._NewObject(A.Core.Bs,0);GG.Initialize(BxL);K$.Initialize(Byp);return(
GG.Year===K$.Year)&&(GG.Ab7()===K$.Ab7());},A7e:function(){var Bf=A._GetAutoObject(
C.Helper).MC();var Bey=A._NewObject(C.UInt32FilterCriterion,0);var Byy=A._GetAutoObject(
C.Helper).ZY(A._GetAutoObject(C.Device).AqZ)-1;Bey.Initialize(28,2,Byy,true);Bf.
CX(Bey);var Ve=A._NewObject(C.AnimalTypeFilterCriterion,0);Ve.Initialize(14,0,1,
true);Bf.CX(Ve);if(A._GetAutoObject(C.Device).Aq0){var AAt=A._NewObject(C.UInt32FilterCriterion
,0);var A27=A._GetAutoObject(C.Helper).Dv()-21600;AAt.Initialize(30,3,A27,true);
Bf.CX(AAt);}return Bf;},Bpb:function(){var Jt=A._GetAutoObject(C.Device).An.OG();
if(Jt<=0)A.ab5("%s",Xq);else{A._GetAutoObject(C.Device).An.E7();A._GetAutoObject(
C.Device).An.OI(Jt);}Jt=A._GetAutoObject(C.Device).AgA.OG();if(Jt<=0)A.ab5("%s",
Xq);else{A._GetAutoObject(C.Device).AgA.E7();A._GetAutoObject(C.Device).AgA.OI(Jt
);}Jt=A._GetAutoObject(C.Device).Bt.OG();if(Jt<=0)A.ab5("%s",Xq);else{A._GetAutoObject(
C.Device).Bt.E7();A._GetAutoObject(C.Device).Bt.OI(Jt);}Jt=A._GetAutoObject(C.Device
).Pv.OG();if(Jt<=0)A.ab5("%s",Xq);else{A._GetAutoObject(C.Device).Pv.E7();A._GetAutoObject(
C.Device).Pv.OI(Jt);}},BkB:function(Ac_){var Bd=A._GetAutoObject(C.Device).An.LZ(
0,Ac_);return this.GS(Bd);},ARz:function(IA){var AiB=A._GetAutoObject(C.Device).
An.Aeo(22,IA);return AiB;},ADh:function(){var Bf=A._GetAutoObject(C.Helper).MC();
var Ajd=A._NewObject(C.UInt64FilterCriterion,0);Ajd.Initialize(22,0,0,true);Bf.CX(
Ajd);return Bf;},AOW:function(Ao3,BzD,Qi){var Aaw=-1;switch(Ao3){case 2:Aaw=30;break;
case 3:Aaw=31;break;case 10:Aaw=19;break;default:A.ab5("%s%e",U6,Ao3);}if(Aaw<0)
return null;var Adm=A._NewObject(C.UInt32FilterCriterion,0);Adm.Initialize(Aaw,3
,A._GetAutoObject(C.Helper).Dv()-BzD,Qi);return Adm;},Bo9:function(aFilter){var AI=
aFilter.DM(30,3);if(!!AI)aFilter.Nw(AI);AI=aFilter.DM(31,3);if(!!AI)aFilter.Nw(AI
);AI=aFilter.DM(19,3);if(!!AI)aFilter.Nw(AI);},A14:function(AfX,Ay_,AH){if(AH.Ll(
))return 5;if(AfX.VisualId<=0)switch(Ay_){case 0:if(!AfX.NaisId)return 1;break;case
1:if(!AfX.TransponderId)return 1;break;case 3:case 2:case 5:case 4:return 1;default:
throw new Error(AHK+Ay_.toFixed());}if((!AfX.NaisId&&!AfX.TransponderId)&&A._GetAutoObject(
C.Device).An.AjL(1,AfX.VisualId))return 2;if(!!AfX.NaisId&&A._GetAutoObject(C.Helper
).ARw(AfX.NaisId))return 3;if(!!AfX.TransponderId&&A._GetAutoObject(C.Helper).ARz(
AfX.TransponderId))return 4;return 0;},Aqo:function(En){En.EC(A._GetAutoObject(C.
Device).AnimalType);En.N7(A._GetAutoObject(C.Device).Breed);En.Q8(A._GetAutoObject(
C.Helper).Dv()-A._GetAutoObject(C.Helper).AmN(A._GetAutoObject(C.Device).AdV));En.
J0(A._GetAutoObject(C.Device).Gender);En.Nt(A._GetAutoObject(C.Device).WhereAbouts
);},AMy:function(Ru,En){var FK=0;switch(Ru){case 0:FK=A._GetAutoObject(C.Helper).
Ak8(En.NaisId);break;case 1:FK=A._GetAutoObject(C.Helper).Ak8(En.TransponderId);
break;case 3:FK=A._GetAutoObject(C.Device).Ara;break;case 2:FK=A._GetAutoObject(
C.Device).Arb;break;case 4:case 5:FK=A._GetAutoObject(C.Device).AjV;break;default:
throw new Error(AHL+Ru.toFixed());}return FK;},Bas:function(Alr,Ma,Bcp,Bxw,Bx5){
var B;var Qw=null;var XI=null;switch(Alr){case 0:{Qw=[B=A._GetAutoObject(C.Device
),B.ASW,B.A0L];XI=[B=A._GetAutoObject(C.Device),B.Awr,B.Ay4];}break;case 1:switch(
Ma){case 1:{Qw=[B=A._GetAutoObject(C.Device),B.A9o,B.BbQ];XI=[B=A._GetAutoObject(
C.Device),B.Awp,B.Ay2];}break;case 0:{Qw=[B=A._GetAutoObject(C.Device),B.A9p,B.BbR
];XI=[B=A._GetAutoObject(C.Device),B.Awq,B.Ay3];}break;case 2:{Qw=[B=A._GetAutoObject(
C.Device),B.ASW,B.A0L];XI=[B=A._GetAutoObject(C.Device),B.Awr,B.Ay4];}break;default:
throw new Error(Aym+Ma.toFixed());}break;default:throw new Error(AHM+Alr.toFixed(
));}if(!!Qw&&!!XI){Qw[2].call(Qw[0],Bcp);if(Bcp>0){if((XI[1].call(XI[0])>0)&&(Bxw<
Bx5))Qw[2].call(Qw[0],Qw[1].call(Qw[0])+XI[1].call(XI[0]));else if(XI[1].call(XI[
0])<0)Qw[2].call(Qw[0],Qw[1].call(Qw[0])+XI[1].call(XI[0]));}return Qw[1].call(Qw[
0]);}return 0;},AVV:function(En,Alr,BxE){if(!En||(BxE===true))return;switch(Alr){
case 0:En.Nr(A._GetAutoObject(C.Device).Av_);break;case 1:switch(En.Gender){case
0:En.Nr(A._GetAutoObject(C.Device).AEC);break;case 1:En.Nr(A._GetAutoObject(C.Device
).AEB);break;case 2:En.Nr(A._GetAutoObject(C.Device).Av_);break;default:throw new
Error(Aym+En.Gender.toFixed());}break;default:throw new Error(AHM+Alr.toFixed());
}},Bkd:function(Ru,En){var result=false;switch(Ru){case 0:result=!!En.NaisId;break;
case 1:result=!!En.TransponderId;break;case 3:case 2:case 4:case 5:result=false;
break;default:throw new Error(AHL+Ru.toFixed());}return result;},AKx:function(En
,Bci,Ay_,AtJ,AfQ){switch(Bci){case 2:if(AtJ<=0)A._GetAutoObject(C.Device).AZ(21,
true,En.VisualId.toFixed(),0,AfQ);else A._GetAutoObject(C.Device).AZ(48,true,(En.
VisualId.toFixed()+Ayn)+AtJ.toFixed(),0,AfQ);break;case 3:if(AtJ<=0)A._GetAutoObject(
C.Device).AZ(21,true,A._GetAutoObject(C.Converter).Rl(En.NaisId),0,AfQ);else A._GetAutoObject(
C.Device).AZ(48,true,(A._GetAutoObject(C.Converter).Rl(En.NaisId)+Ayn)+AtJ.toFixed(
),0,AfQ);break;case 4:if(AtJ<=0)A._GetAutoObject(C.Device).AZ(25,true,A._GetAutoObject(
C.Converter).Rl(En.TransponderId),0,AfQ);else A._GetAutoObject(C.Device).AZ(47,true
,(A._GetAutoObject(C.Converter).Rl(En.TransponderId)+Ayn)+AtJ.toFixed(),0,AfQ);break;
case 1:switch(Ay_){case 1:A._GetAutoObject(C.Device).AZ(42,true,A.jV,0,AfQ);break;
case 0:A._GetAutoObject(C.Device).AZ(43,true,A.jV,0,AfQ);break;case 3:case 2:case
5:case 4:A._GetAutoObject(C.Device).AZ(22,true,A.jV,0,AfQ);break;default:throw new
Error(AHK+Ay_.toFixed());}break;case 5:A._GetAutoObject(C.Device).AZ(41,true,A._GetAutoObject(
C.Device).An.HM().toFixed(),0,AfQ);break;case 0:break;default:throw new Error(AWy+
Bci.toFixed());}},BdZ:function(Bcw,Ma){var B;var AAx=null;switch(Bcw){case 0:AAx=[
B=A._GetAutoObject(C.Device),B.Awr,B.Ay4];break;case 1:switch(Ma){case 1:AAx=[B=
A._GetAutoObject(C.Device),B.Awp,B.Ay2];break;case 0:AAx=[B=A._GetAutoObject(C.Device
),B.Awq,B.Ay3];break;case 2:AAx=[B=A._GetAutoObject(C.Device),B.Awr,B.Ay4];break;
default:throw new Error(Aym+Ma.toFixed());}break;default:throw new Error(AWz+Bcw.
toFixed());}return AAx;},A7q:function(Ql,Byg){var AaY=A._NewObject(A.Core.Bs,0);
AaY.Initialize(Ql);var ABR=AaY.Year;var Bd=A._GetAutoObject(C.Device).Pv.LZ(0,ABR
);var Vh=A._NewObject(C.CalfDeregistrations,0);if(Bd<0){if(A._GetAutoObject(C.Device
).Pv.Ll())A._GetAutoObject(C.Device).AZ(51,true,A._GetAutoObject(C.Device).Pv.HM(
).toFixed(),0,null);else{Vh.Gs();Vh.AkH(ABR);}}else Vh.E3(Bd,A._GetAutoObject(C.
Device).Pv);Vh.AwJ(Vh.Deregistrations+1);if(Byg)Vh.AwI(Vh.Deaths+1);Vh.Ci(A._GetAutoObject(
C.Device).Pv);},AMw:function(LW,AlU,AlL){var AKU=0;if((AlU&&(AlL===1))||(LW===1)
)AKU=1;else if((AlU&&(AlL===2))||(LW===2))AKU=2;else if(!!LW&&(LW!==5))AKU=LW;return AKU;
},Bdz:function(Byx){var B;if(A._GetAutoObject(C.Device).MeasureState===1){this.S0.
Cx=A._GetAutoObject(C.Device).AcL;this.S0.B3=Byx;this.S0.An1(this);}},ADe:function(
){var Bf=this.AOV();var Ben=A._NewObject(C.BoolFilterCriterion,0);Ben.Initialize(
38,0,true,true);Bf.CX(Ben);return Bf;},A67:function(Eh){var Bf=A._GetAutoObject(
C.Helper).MC();if(A._GetAutoObject(C.Device).Aqk){var A2N=A._GetAutoObject(C.Helper
).AOW(Eh,21600,true);Bf.CX(A2N);}return Bf;},A7k:function(){var Bf=A._GetAutoObject(
C.Helper).MC();var BeP=A._NewObject(C.UInt64FilterCriterion,0);BeP.Initialize(26
,0,0,true);Bf.CX(BeP);return Bf;},A7n:function(){var B;var Bf=A._GetAutoObject(C.
Helper).MC();var AAD=(C.WhereAboutsFilterCriterion.isPrototypeOf(B=Bf.DM(34,3))?
B:null);if(!!AAD)Bf.Nw(AAD);var Bf$=A._NewObject(C.BoolFilterCriterion,0);Bf$.Initialize(
37,0,true,true);Bf.CX(Bf$);return Bf;},V6:function(A8,AtC,A1p){var B;A8=Math.trunc(
A8/this.ApW(AtC));A8%=this.ApW(A1p);return A8;},ApW:function(Bcx){switch(Bcx){case
0:return 1;case 1:return 10;case 2:return 100;case 3:return 1000;case 4:return 10000;
case 5:return 100000;case 6:return 1000000;case 7:return 10000000;case 8:return 100000000;
case 9:return 1000000000;case 10:return 10000000000;case 11:return 100000000000;
case 12:return 1000000000000;case 13:return 10000000000000;case 14:return 100000000000000;
case 15:return 1000000000000000;default:throw new Error(AWA+Bcx.toFixed());}},MC:
function(){var Bf=A._NewObject(C.Filter,0);var Bgw=A._NewObject(C.BoolFilterCriterion
,0);Bgw.Initialize(10,0,true,true);Bf.CX(Bgw);var AAD=A._NewObject(C.WhereAboutsFilterCriterion
,0);AAD.Initialize(34,3,6,true);Bf.CX(AAD);return Bf;},Arn:function(aFilter){return!
this.ADi(aFilter);},ADi:function(aFilter){var Jp=0;var Aw=aFilter.AOX();while(!!
Aw){if(Aw.YR===false)Jp++;Aw=aFilter.AO2(Aw);}return Jp;},AOV:function(){var Bf=
this.MC();var Ve=A._NewObject(C.AnimalTypeFilterCriterion,0);Ve.Initialize(14,0,
1,true);Bf.CX(Ve);return Bf;},ADn:function(){var B;var A4R;var Kc=this.BjR();A4R=(((
B=A._GetAutoObject(C.Converter).AqH(Kc))<0)?B+0x10000000000000000:B)*this.ApW(12
);if((Kc===10)&&(A._GetAutoObject(C.Device).OZ>0)){var Bz1=A._GetAutoObject(C.Helper
).V6(A._GetAutoObject(C.Device).OZ,10,2)*this.ApW(8);A4R+=Bz1;}return A4R;},BjR:
function(){var Kc=0;if(A._GetAutoObject(C.Device).OZ>0)Kc=A._GetAutoObject(C.Converter
).S9(A._GetAutoObject(C.Device).OZ);if(!Kc)Kc=A._GetAutoObject(C.Converter).A7U(
A._GetAutoObject(C.Device).Language);return Kc;},ARw:function(Qj){var AiB=A._GetAutoObject(
C.Device).An.Aeo(26,Qj);return AiB;},Aj7:function(AfR){switch(AfR){case 0:case 1:
case 2:case 3:case 4:case 5:return false;case 6:case 7:case 8:case 9:case 10:return true;
default:throw new Error(AWB+AfR.toFixed());}},BhM:function(Ru,En){var FK=0;switch(
Ru){case 1:FK=A._GetAutoObject(C.Helper).Ak8(En.TransponderId);break;case 0:if(!
A._GetAutoObject(C.Device).EartagNrAssignmentMode)FK=A._GetAutoObject(C.Device).
AjV;else switch(En.Gender){case 0:FK=A._GetAutoObject(C.Device).Arb;break;case 1:
FK=A._GetAutoObject(C.Device).Ara;break;case 2:FK=A._GetAutoObject(C.Device).AjV;
break;default:throw new Error(AHN+En.Gender.toFixed());}break;default:throw new Error(
AWC+Ru.toFixed());}return FK;},Bjn:function(){var B;var AAa=(((((((A.aaR(A.acf.AhL
)+A.aaR(A.acf.Colon))+MS)+A._GetAutoObject(C.Device).AhL)+Ayo)+A.aaR(A.acf.BoR))+
A.aaR(A.acf.Colon))+MS)+A._GetAutoObject(A.acj.KR).Bjl(((B=A._GetAutoObject(C.Device
).Q3.Timestamp)<0)?B+0x100000000:B);return AAa;},Bjo:function(){var B;var AAa=((((((((((((((((((((((((((((
AWD+A._GetAutoObject(C.Device).R7.AEt.toFixed())+LB)+A._GetAutoObject(C.Device).
R7.AEy.toFixed())+LB)+A._GetAutoObject(C.Device).R7.AGI.toFixed())+Pb)+A._GetAutoObject(
C.Device).R7.ACG)+Pb)+A._GetAutoObject(A.acj.KR).AjN(((B=A._GetAutoObject(C.Device
).R7.Timestamp)<0)?B+0x100000000:B))+MS)+AWE)+A._GetAutoObject(C.Device).SG.AEt.
toFixed())+LB)+A._GetAutoObject(C.Device).SG.AEy.toFixed())+LB)+A._GetAutoObject(
C.Device).SG.AGI.toFixed())+Pb)+A._GetAutoObject(C.Device).SG.ACG)+Pb)+A._GetAutoObject(
A.acj.KR).AjN(((B=A._GetAutoObject(C.Device).SG.Timestamp)<0)?B+0x100000000:B))+
MS)+AWF)+A._GetAutoObject(C.Helper).BjU())+Pb)+A._GetAutoObject(C.Device).GetCommitHash(
))+Pb)+A._GetAutoObject(C.Device).GetCommitCount().toFixed())+Pb)+A._GetAutoObject(
A.acj.KR).AjN(A._GetAutoObject(C.Device).GetCommitEpoch());return AAa;},Bjm:function(
){var B;var AAa=(((((((((((((((((((((AWG+A._GetAutoObject(C.Device).Q3.ARY.toFixed(
))+LB)+A._GetAutoObject(C.Device).Q3.ARZ.toFixed())+LB)+A._GetAutoObject(C.Device
).Q3.ARX.toFixed())+MS)+A.aaR(A.acf.A60))+A.aaR(A.acf.Colon))+Oj)+A._GetAutoObject(
A.acj.KR).AjN(((B=A._GetAutoObject(C.Device).Q3.Timestamp)<0)?B+0x100000000:B))+
Ayo)+AWH)+A._GetAutoObject(C.Device).S6.AVL.toFixed())+LB)+A._GetAutoObject(C.Device
).S6.AVM.toFixed())+LB)+A._GetAutoObject(C.Device).S6.AVK.toFixed())+MS)+A.aaR(A.
acf.A60))+A.aaR(A.acf.Colon))+Oj)+A._GetAutoObject(A.acj.KR).AjN(((B=A._GetAutoObject(
C.Device).S6.Timestamp)<0)?B+0x100000000:B);return AAa;},A7l:function(A1p){var B;
var O;var ABa=A.jV;for(O=1;O<=A1p;O=O+1)if(!!A.abz(0,2))ABa=ABa+String.fromCharCode(
A.abz(97,104)&0xFFFF);else ABa=ABa+String.fromCharCode(A.abz(48,57)&0xFFFF);return ABa;
},AbA:function(Eo){var Azs=0;if(Eo===1)Eo=0;var Bde=this.AgI.Avz(Eo);if(Bde>=0)Azs=
this.AfD.Get(Bde);return Azs;},ADp:function(Eo){var FX=0;var ABP=this.AgI.Avz(Eo
);if(ABP>=0)FX=this.AfC.Get(ABP);return FX;},ADo:function(Eo){var FX=0;var ABP=this.
AgI.Avz(Eo);if(ABP>=0)FX=this.AfB.Get(ABP);return FX;},A7b:function(){var Bf=this.
MC();var Ve=A._NewObject(C.AnimalTypeFilterCriterion,0);Ve.Initialize(14,0,A._GetAutoObject(
C.Device).ACZ,true);Bf.CX(Ve);return Bf;},ARA:function(Ka){var BN=Math.trunc(Ka/
1000000000000)|0;if(!BN)return 0;else if(BN>=900)return 1;else if(!A._GetAutoObject(
C.Converter).ANN(BN))return 2;else return 3;},A7p:function(BAH){var Bf=A._GetAutoObject(
C.Helper).ADh();var AfW=A._GetAutoObject(C.Helper).A68(3,BAH);AfW.YR=true;Bf.CX(
AfW);return Bf;},A68:function(Eb,Bch){var Aw=A._NewObject(C.UInt32FilterCriterion
,0);Aw.EJ=4;switch(Eb){case 2:{Aw.Operator=3;Aw.A5=A._GetAutoObject(C.Helper).ZY(
Bch);}break;case 3:{Aw.Operator=2;Aw.A5=A._GetAutoObject(C.Helper).ZY(Bch-1);}break;
default:A.ab5("%s%e",AHO,Eb);}return Aw;},BjU:function(){return(((A._GetAutoObject(
C.Device).GetVersionMajor().toFixed()+LB)+A._GetAutoObject(C.Device).GetVersionMinor(
).toFixed())+LB)+A._GetAutoObject(C.Device).GetVersionRev().toFixed();},A5z:function(
Ru,En){var FK=0;switch(Ru){case 0:FK=En.VisualId;break;case 2:FK=A._GetAutoObject(
C.Helper).Ak8(En.TransponderId);break;case 3:if(En.NaisId>0)FK=A._GetAutoObject(
C.Helper).Ak8(En.NaisId);else FK=En.VisualId;break;case 1:if(!A._GetAutoObject(C.
Device).EartagNrAssignmentMode)FK=A._GetAutoObject(C.Device).AjV;else switch(En.
Gender){case 0:FK=A._GetAutoObject(C.Device).Arb;break;case 1:FK=A._GetAutoObject(
C.Device).Ara;break;case 2:FK=A._GetAutoObject(C.Device).AjV;break;default:throw new
Error(AHN+En.Gender.toFixed());}break;default:throw new Error(AWI+Ru.toFixed());
}return FK;},Bat:function(){var B;var I3=null;var Ts=0;if(!A._GetAutoObject(C.Device
).EartagNrAssignmentMode){I3=[B=A._GetAutoObject(C.Device),B.Anx,B.AoE];Ts=A._GetAutoObject(
C.Device).Ava;}else switch(A._GetAutoObject(C.Helper).W.Gender){case 1:{I3=[B=A.
_GetAutoObject(C.Device),B.Awl,B.Ay0];Ts=A._GetAutoObject(C.Device).ACR;}break;case
0:{I3=[B=A._GetAutoObject(C.Device),B.Awm,B.Ay1];Ts=A._GetAutoObject(C.Device).ACS;
}break;case 2:{I3=[B=A._GetAutoObject(C.Device),B.Anx,B.AoE];Ts=A._GetAutoObject(
C.Device).Ava;}break;default:;}if(!!I3)switch(Ts){case 1:I3[2].call(I3[0],A._GetAutoObject(
C.Helper).W.VisualId-1);break;case 0:I3[2].call(I3[0],A._GetAutoObject(C.Helper).
W.VisualId+1);break;default:;}},A7S:function(Qj,En){return(En.NaisId!==Qj)&&this.
ARw(Qj);},Bkm:function(IA,En){return(En.TransponderId!==IA)&&this.ARz(IA);},AOT:
function(){var Bf=A._GetAutoObject(C.Helper).A7n();var AAv=A._NewObject(C.UInt64FilterCriterion
,0);AAv.Initialize(35,5,0,true);Bf.CX(AAv);return Bf;},AvA:function(){var Bf=A._GetAutoObject(
C.Helper).A7n();var AAv=A._NewObject(C.UInt64FilterCriterion,0);AAv.Initialize(35
,0,0,true);Bf.CX(AAv);return Bf;},J6:function(A1g,Ah8){A1g.Aj(Ah8);A1g.As(Ah8);A1g.
Z(Ah8);},ANH:function(Ah_){var B;var Aa;var A3q=false;var XC=Ah_.TY(null,0x1);while(
!!XC&&(((B=XC)?B.__proto__:null)!==A.Core.Y)){Aa=(A.kR.Cp.isPrototypeOf(XC)?XC:null
);if(!!Aa){Aa.Bi(A3q);A3q=!A3q;}XC=Ah_.TY(XC,0x1);}},Bo$:function(IA){var Xz=A._GetAutoObject(
C.Device).An.Filter;A._GetAutoObject(C.Device).An.Bk(null);var A4x=A._GetAutoObject(
C.Device).An.Aev(22,IA);var Cz=A._NewObject(C.Animal,0);Cz.E3(A4x,A._GetAutoObject(
C.Device).An);Cz.P0(0);Cz.Ci(A._GetAutoObject(C.Device).An);A._GetAutoObject(C.Device
).An.Bk(Xz);},A6$:function(AtB,AoI){var Bf=null;switch(AtB){case 0:Bf=this.BjF(AoI
);break;case 1:Bf=this.ADh();break;default:throw new Error(Ayp+AtB.toFixed());}return Bf;
},BjF:function(Bxq){var Bf=A._GetAutoObject(C.Helper).MC();var AfW=this.A68(2,Bxq
);Bf.CX(AfW);return Bf;},ByX:function(AtB,AoI){var Xz=A._GetAutoObject(C.Device).
An.Filter;A._GetAutoObject(C.Device).An.Bk(this.A6$(AtB,AoI));var CB=A._GetAutoObject(
C.Device).An.B8();var O;for(O=CB-1;O>=0;O--){A._GetAutoObject(C.Helper).GS(O);A.
_GetAutoObject(C.Helper).W.Ae7(false);A._GetAutoObject(C.Helper).W.Ci(A._GetAutoObject(
C.Device).An);}A._GetAutoObject(C.Device).An.Bk(Xz);},BjG:function(AtB,AoI){var Xz=
A._GetAutoObject(C.Device).An.Filter;A._GetAutoObject(C.Device).An.Bk(this.A6$(AtB
,AoI));var Gi=A._GetAutoObject(C.Device).An.B8();A._GetAutoObject(C.Device).An.Bk(
Xz);return Gi;},A7h:function(AH){var Xz=AH.Filter;AH.Bk(this.AvA());var O;var A3g=
4294967295;for(O=0;O<AH.B8();O++){var Ph=AH.Hw(O,4);if(Ph<A3g)A3g=Ph;}AH.Bk(Xz);
return A._GetAutoObject(C.Helper).Mf(A3g,A._GetAutoObject(C.Helper).Dv());},ARy:
function(){if(A._GetAutoObject(C.Device).P7.Z8!==6)return false;if((A._GetAutoObject(
C.Device).P7.AsY===1529)&&(A._GetAutoObject(C.Device).P7.Asr===16900))return true;
return false;},BkC:function(Qj){if(!Qj){A.ab5("%s%U",AWJ,Qj);return false;}var Bd=
A._GetAutoObject(C.Device).An.Aev(26,Qj);return this.GS(Bd);},ArH:function(){return this.
UI;},A9z:function(){return this.AhI;},BlY:function(){return this.AUU;},BlZ:function(
){return this.AUV;},Bl2:function(){return this.AG9;},_Init:function(aArg){C.AmS.
_Init.call(this,aArg);C.Animal._Init.call(this.W={I:this},0);A.Core.Bs._Init.call(
this.Av={I:this},0);A.acl.Gn._Init.call(this.KN={I:this},0);A.acl.Gn._Init.call(
this.S0={I:this},0);C.AMS._Init.call(this.Ad3={I:this},0);C.AVB._Init.call(this.
UP={I:this},0);C.AVA._Init.call(this.UO={I:this},0);C.TR._Init.call(this.Aeq={I:
this},0);C.AWf._Init.call(this.AfC={I:this},0);C.AWe._Init.call(this.AfB={I:this
},0);C.AWd._Init.call(this.AfA={I:this},0);C.AWh._Init.call(this.AfD={I:this},0);
C.AMT._Init.call(this.AgI={I:this},0);this.__proto__=C.HelperClass;var B;this.KN.
HQ(1);this.KN.Fq(3000);this.KN.B3=100;this.S0.AwO(10);this.S0.WS(5);this.S0.HQ(1
);this.S0.Fq(4000);this.Aeq.B3=false;this.Aeq.Cx=true;this.Aeq.HQ(1);this.Aeq.Fq(
100);this.KN.SJ=[this,this.BCO];this.KN.Q=[this,this.Bl2,this.Boj];this.S0.SJ=[this
,this.BCQ];this.S0.Q=[B=A._GetAutoObject(C.Device),B.AE0,B.AI8];this.Aeq.Q=[B=A.
_GetAutoObject(C.Device),B.AE1,B.AI9];this.Init(aArg);var J_=this._variants();if(
J_){this.K={};J_._Init.call(this,aArg);}},_Done:function(){if(this.K)this.K._Done.
call(this);this.__proto__=C.AmS;this.W._Done();this.Av._Done();this.KN._Done();this.
S0._Done();this.Ad3._Done();this.UP._Done();this.UO._Done();this.Aeq._Done();this.
AfC._Done();this.AfB._Done();this.AfA._Done();this.AfD._Done();this.AgI._Done();
C.AmS._Done.call(this);},_ReInit:function(){C.AmS._ReInit.call(this);this.W._ReInit(
);this.Av._ReInit();this.KN._ReInit();this.S0._ReInit();this.Ad3._ReInit();this.
UP._ReInit();this.UO._ReInit();this.Aeq._ReInit();this.AfC._ReInit();this.AfB._ReInit(
);this.AfA._ReInit();this.AfD._ReInit();this.AgI._ReInit();if(this.K)this.K._ReInit.
call(this);},_Mark:function(D){var B;C.AmS._Mark.call(this,D);if((B=this.UI)&&(B.
_cycle!=D))B._Mark(B._cycle=D);if((B=this.AhI)&&(B._cycle!=D))B._Mark(B._cycle=D
);if((B=this.AUU)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.AUV)&&(B._cycle!=
D))B._Mark(B._cycle=D);if((B=this.W)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Av
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.KN)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.S0)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ad3)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.UP)._cycle!=D)B._Mark(B._cycle=D);if((B=this.UO)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Aeq)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AfC)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.AfB)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
AfA)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AfD)._cycle!=D)B._Mark(B._cycle=D);
if((B=this.AgI)._cycle!=D)B._Mark(B._cycle=D);if(this.K)this.K._Mark(D);},_variants:
function(){return A.acq.HelperClass._variants();},K:null,_className:"Device::HelperClass"
};C.Helper={_Init:function(){C.HelperClass._Init.call(this,0);},_ReInit:function(
){},_variants:function(){return this;},_this:null};C.BoolFilterCriterion={A5:false
,Abt:function(){var Aw=A._NewObject(C.BoolFilterCriterion,0);Aw.E$(this);return Aw;
},E$:function(AI){C.FilterCriterion.E$.call(this,AI);var Aw=(C.BoolFilterCriterion.
isPrototypeOf(AI)?AI:null);if(!!Aw)this.A5=Aw.A5;},Initialize:function(A4,Eb,A8,
Qi){this.EJ=A4;this.Operator=Eb;this.A5=A8;this.YR=Qi;return this;},_Init:function(
aArg){C.FilterCriterion._Init.call(this,aArg);this.__proto__=C.BoolFilterCriterion;
},_className:"Device::BoolFilterCriterion"};C.UInt32FilterCriterion={A5:0,Abt:function(
){var Aw=A._NewObject(C.UInt32FilterCriterion,0);Aw.E$(this);return Aw;},E$:function(
AI){C.FilterCriterion.E$.call(this,AI);var Aw=(C.UInt32FilterCriterion.isPrototypeOf(
AI)?AI:null);if(!!Aw)this.A5=Aw.A5;},Initialize:function(A4,Eb,A8,Qi){this.EJ=A4;
this.Operator=Eb;this.A5=A8;this.YR=Qi;return this;},_Init:function(aArg){C.FilterCriterion.
_Init.call(this,aArg);this.__proto__=C.UInt32FilterCriterion;},_className:"Device::UInt32FilterCriterion"
};C.OverlayMenu={None:0,Home:1,AutoAction:2,MenuItemSettings:3,RatingSettings:4,
WeighingSettings:5,Options:6,AnimalSearch:7,ActionSettings:8,MeasurementReady:9,
AnimalMultiInfoMenu:10,AnimalSearchUnfiltered:11,AnimalSearchDriedOff:12,MassRecordingMenu:
13,MassRecordingDefaults:14,MassRecordingFields:15,BirthRegistrationsListMenu:16
,LAST:17};C.EnumToString={BT:function(A9){throw new Error(Atc+A9.toFixed());},LA:
function(A9){return this.BT(A9);},_Init:function(aArg){this.__proto__=C.EnumToString;
A.h7++;},_Done:function(){this.__proto__=null;A.h7--;},_ReInit:function(){},_Mark:
function(D){var B;if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:
0,_observers:null,_className:"Device::EnumToString"};C.ScreenTypeToString={BT:function(
A9){var AJ_=A9;var BC;switch(AJ_){case 3:BC=A.aaR(A.acf.AvG);break;case 34:BC=A.
aaR(A.acf.TG);break;case 35:BC=A.aaR(A.acf.VE);break;case 43:BC=A.aaR(A.acf.AOS);
break;default:BC=this.Bqx(A9);}return BC;},Bqx:function(A9){var AJ_=A9;var BC=A.
jV;switch(AJ_){case 0:BC=Ayq;break;case 2:BC=AWK;break;case 4:BC=AHP;break;case 39:
BC=AWL;break;case 38:BC=AHQ;break;case 63:BC=AHR;break;case 64:BC=AHS;break;case
82:BC=AWM;break;case 83:BC=AHT;break;case 92:BC=AWN;break;case 93:BC=AWO;break;case
65:BC=Rr;break;case 3:BC=U7;break;case 6:BC=AWP;break;case 16:BC=AWQ;break;case 22:
BC=AWR;break;case 42:BC=AWS;break;case 88:BC=AWT;break;case 87:BC=AWU;break;case
89:BC=AWV;break;case 95:BC=Ah0;break;case 17:BC=AHU;break;case 23:BC=AWW;break;case
18:BC=AWX;break;case 19:BC=AHV;break;case 37:BC=AHW;break;case 76:BC=Ayr;break;case
1:BC=Qf;break;case 5:BC=AWY;break;case 7:BC=AWZ;break;case 81:BC=AW0;break;case 8:
BC=Atd;break;case 9:BC=AW1;break;case 40:BC=AW2;break;case 41:BC=AW3;break;case 24:
BC=AW4;break;case 10:BC=AW5;break;case 60:BC=AW6;break;case 21:BC=Ate;break;case
11:BC=AW7;break;case 29:BC=AW8;break;case 48:BC=AW9;break;case 30:BC=AW_;break;case
12:BC=AW$;break;case 13:BC=AXa;break;case 14:BC=AXb;break;case 15:BC=AXc;break;case
69:BC=AXd;break;case 70:BC=AXe;break;case 20:BC=AHX;break;case 25:BC=Alh;break;case
66:BC=AXf;break;case 59:BC=AXg;break;case 58:BC=AXh;break;case 56:BC=Ays;break;case
57:BC=Ali;break;case 68:BC=Ah1;break;case 67:BC=Ayt;break;case 84:BC=Aor;break;case
77:BC=Ah2;break;case 26:BC=AXi;break;case 28:BC=Ayu;break;case 27:BC=AHY;break;case
31:BC=AfJ;break;case 78:BC=AHZ;break;case 34:BC=Aan;break;case 35:BC=Alj;break;case
32:BC=Aos;break;case 45:BC=AXj;break;case 49:BC=AXk;break;case 55:BC=AXl;break;case
54:BC=AXm;break;case 33:BC=AXn;break;case 36:BC=Atf;break;case 50:BC=AH0;break;case
75:BC=AH1;break;case 43:BC=AXo;break;case 44:BC=AXp;break;case 61:BC=AXq;break;case
62:BC=AXr;break;case 46:BC=AXs;break;case 47:BC=AXt;break;case 85:BC=AXu;break;case
86:BC=AXv;break;case 71:BC=AXw;break;case 72:BC=AXx;break;case 74:BC=AXy;break;case
73:BC=Ayv;break;case 51:BC=AH2;break;case 52:BC=AH3;break;case 53:BC=AH4;break;case
79:BC=AH5;break;case 80:BC=AH6;break;case 90:BC=AH7;break;case 91:BC=AXz;break;case
94:BC=AXA;break;default:throw new Error(AXB+AJ_.toFixed());}return BC;},_Init:function(
aArg){C.EnumToString._Init.call(this,aArg);this.__proto__=C.ScreenTypeToString;}
,_className:"Device::ScreenTypeToString"};C.OverlayMenuToString={BT:function(A9){
var Bf5=A9;var Pk=A.jV;switch(Bf5){case 0:Pk=AXC;break;case 1:Pk=U7;break;case 8:
Pk=AXD;break;case 2:Pk=AXE;break;case 3:Pk=AXF;break;case 4:Pk=Ayw;break;case 5:
Pk=AH8;break;case 6:Pk=AXG;break;case 7:Pk=AH9;break;case 11:Pk=Ah3;break;case 12:
Pk=U8;break;case 9:Pk=AXH;break;case 10:Pk=Aao;break;case 14:Pk=AXI;break;case 15:
Pk=AXJ;break;case 13:Pk=Alk;break;case 16:Pk=AfK;break;default:throw new Error(Ah4+
Bf5.toFixed());}return Pk;},_Init:function(aArg){C.EnumToString._Init.call(this,
aArg);this.__proto__=C.OverlayMenuToString;},_className:"Device::OverlayMenuToString"
};C.ScanStateToString={BT:function(A9){var BgE=A9;var Bp=A.jV;switch(BgE){case 4:
Bp=Aot;break;case 0:Bp=Ayx;break;case 2:Bp=Pd;break;case 3:Bp=AXK;break;case 1:Bp=
AH_;break;default:throw new Error(AH$+BgE.toFixed());}return Bp;},_Init:function(
aArg){C.EnumToString._Init.call(this,aArg);this.__proto__=C.ScanStateToString;},
_className:"Device::ScanStateToString"};C.MeasureStateToString={BT:function(A9){
var BeJ=A9;var Bp=A.jV;switch(BeJ){case 4:Bp=Aot;break;case 0:Bp=Ayx;break;case 2:
Bp=AXL;break;case 1:Bp=AH_;break;case 3:Bp=Ayy;break;default:throw new Error(AIa+
BeJ.toFixed());}return Bp;},_Init:function(aArg){C.EnumToString._Init.call(this,
aArg);this.__proto__=C.MeasureStateToString;},_className:"Device::MeasureStateToString"
};C.TemperatureUnit={Celsius:0,Fahrenheit:1,LAST:2};C.TemperatureUnitToString={BT:
function(A9){var Bg4=A9;var Aqb=A.jV;switch(Bg4){case 0:Aqb=A.aaR(A.acf.BqO);break;
case 1:Aqb=A.aaR(A.acf.BqP);break;default:throw new Error(AXM+Bg4.toFixed());}return Aqb;
},_Init:function(aArg){C.EnumToString._Init.call(this,aArg);this.__proto__=C.TemperatureUnitToString;
},_className:"Device::TemperatureUnitToString"};C.AnimalType={DairyCalf:0,DairyCow:
1,SheepLamb:2,LAST:3};C.AnimalTypeToString={BT:function(A9){var ALj=A9;var type=
A.jV;switch(ALj){case 0:type=A.aaR(A.acf.Bia);break;case 1:type=A.aaR(A.acf.Bio);
break;case 2:type=A.aaR(A.acf.Bku);break;default:throw new Error(AXN+ALj.toFixed(
));}return type;},_Init:function(aArg){C.EnumToString._Init.call(this,aArg);this.
__proto__=C.AnimalTypeToString;},_className:"Device::AnimalTypeToString"};C.Language={
Default:0,German:1,Spanish:2,French:3,Italian:4,Finnish:5,Chinese_TW:6,Turkish:7
,Greek:8,Russian:9,Dutch:10,Czech:11,Estonian:12,Bulgarian:13,Bosnian:14,Norwegian:
15,Ukrainian:16,Danish:17,Hungarian:18,Japanese:19,Latvian:20,Polish:21,Portuguese:
22,Romanian:23,Swedish:24,Croatian:25,Lithuanian:26,Slovenian:27,LAST:28};C.LanguageToString={
BT:function(A9){var AAp=A9;var I4=A.jV;switch(AAp){case 14:I4=AXO;break;case 13:
I4=AXP;break;case 6:I4=AXQ;break;case 25:I4=AXR;break;case 11:I4=AXS;break;case 17:
I4=AXT;break;case 0:I4=AIb;break;case 10:I4=AXU;break;case 12:I4=AIc;break;case 5:
I4=AId;break;case 3:I4=Ayz;break;case 1:I4=AXV;break;case 8:I4=AXW;break;case 18:
I4=AXX;break;case 4:I4=AXY;break;case 19:I4=AXZ;break;case 20:I4=AX0;break;case 26:
I4=AX1;break;case 15:I4=AX2;break;case 21:I4=Aou;break;case 22:I4=Atg;break;case
23:I4=AIe;break;case 9:I4=AX3;break;case 27:I4=AX4;break;case 2:I4=AX5;break;case
24:I4=AX6;break;case 7:I4=AX7;break;case 16:I4=AX8;break;default:throw new Error(
AIf+AAp.toFixed());}return I4;},LA:function(A9){var AAp=A9;var CO=A.jV;switch(AAp
){case 14:CO=AX9;break;case 13:CO=Xf;break;case 6:CO=AX_;break;case 25:CO=U3;break;
case 11:CO=AX$;break;case 17:CO=AYa;break;case 0:CO=AYb;break;case 10:CO=Xm;break;
case 12:CO=AYc;break;case 5:CO=U4;break;case 3:CO=Xh;break;case 1:CO=Pa;break;case
8:CO=AYd;break;case 18:CO=Oi;break;case 4:CO=Xi;break;case 19:CO=AYe;break;case 20:
CO=Tg;break;case 26:CO=Xk;break;case 15:CO=Th;break;case 21:CO=Ti;break;case 22:
CO=Tj;break;case 23:CO=Aai;break;case 9:CO=Tk;break;case 27:CO=AIg;break;case 2:
CO=Aak;break;case 24:CO=AYf;break;case 7:CO=Xo;break;case 16:CO=K3;break;default:
throw new Error(AIf+AAp.toFixed());}return CO;},_Init:function(aArg){C.EnumToString.
_Init.call(this,aArg);this.__proto__=C.LanguageToString;},_className:"Device::LanguageToString"
};C.Gender={Male:0,Female:1,Unknown:2,LAST:3};C.BirthType={Single:0,Twins:1,Triplets:
2,Quadruplets:3,LAST:4};C.GenderToString={BT:function(A9){var At1=A9;var AKq=A.jV;
switch(At1){case 0:AKq=A.aaR(A.acf.Male);break;case 1:AKq=A.aaR(A.acf.Female);break;
case 2:AKq=A.aaR(A.acf.Unknown);break;default:throw new Error(AYg+At1.toFixed());
}return AKq;},_Init:function(aArg){C.EnumToString._Init.call(this,aArg);this.__proto__=
C.GenderToString;},_className:"Device::GenderToString"};C.BirthTypeToString={BT:
function(A9){var type=A9;var Af0=A.jV;switch(type){case 0:Af0=A.aaR(A.acf.BpM);break;
case 1:Af0=A.aaR(A.acf.BqK);break;case 2:Af0=A.aaR(A.acf.Triplets);break;case 3:
Af0=A.aaR(A.acf.Quadruplets);break;default:throw new Error(AIh+type.toFixed());}
return Af0;},_Init:function(aArg){C.EnumToString._Init.call(this,aArg);this.__proto__=
C.BirthTypeToString;},_className:"Device::BirthTypeToString"};C.SyncState={Idle:
0,Init:1,Exporting:2,ImportStart:3,Importing:4,ImportFinish:5,Ready:6,Error:7,LAST:
8};C.SyncStateToString={BT:function(A9){var BgY=A9;var Bp=A.jV;switch(BgY){case 7:
Bp=Aot;break;case 0:Bp=Ayx;break;case 6:Bp=Ayy;break;case 2:Bp=AIi;break;case 5:
Bp=AIj;break;case 3:Bp=AIk;break;case 4:Bp=AyA;break;case 1:Bp=AyB;break;default:
throw new Error(AIl+BgY.toFixed());}return Bp;},_Init:function(aArg){C.EnumToString.
_Init.call(this,aArg);this.__proto__=C.SyncStateToString;},_className:"Device::SyncStateToString"
};C.RatedAttributeToString={BT:function(A9){var ABb=A9;switch(ABb){case 0:return A.
jV;case 1:return A.aaR(A.acf.BoY);case 4:return A.aaR(A.acf.BoX);case 3:return A.
aaR(A.acf.BoZ);case 2:return A.aaR(A.acf.BoW);default:throw new Error(AIm+ABb.toFixed(
));}},LA:function(A9){var ABb=A9;switch(ABb){case 0:return A.jV;case 1:return A.
aaR(A.acf.Feed);case 4:return A.aaR(A.acf.AGB);case 3:return A.aaR(A.acf.AGC);case
2:return A.aaR(A.acf.AGz);default:throw new Error(AIm+ABb.toFixed());}},_Init:function(
aArg){C.EnumToString._Init.call(this,aArg);this.__proto__=C.RatedAttributeToString;
},_className:"Device::RatedAttributeToString"};C.AssesmentToString={BT:function(
A9){var AlA=A9;var Azz=A.jV;switch(AlA){case 0:case 5:Azz=A.jV;break;case 3:Azz=
A.aaR(A.acj.BpS);break;case 2:Azz=A.aaR(A.acj.BpU);break;case 1:Azz=A.aaR(A.acj.
BpT);break;default:throw new Error(AIn+AlA.toFixed());}return Azz;},_Init:function(
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
7,ClosedWithNo:8,Opened:9};C.PopupContext={AGm:null,AkJ:A.jV,Ak5:0,PopupState:1,
Id:0,Show:false,Bn3:function(E){var B;if(this.PopupState===E)return;this.PopupState=
E;if(!!this.AGm)(B=this.AGm)?B[1].call(B[0],this):null;},_Init:function(aArg){this.
__proto__=C.PopupContext;A.h7++;},_Done:function(){this.__proto__=null;A.h7--;},
_ReInit:function(){},_Mark:function(D){var B;if((B=this.AGm)&&((B=B[0])._cycle!=
D))B._Mark(B._cycle=D);if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null
,_cycle:0,_observers:null,_className:"Device::PopupContext"};C.Boolean={No:0,Yes:
1,LAST:2};C.BooleanToYesNo={BT:function(A9){switch(A9){case 0:return A.aaR(A.acf.
No);case 1:return A.aaR(A.acf.Yes);default:return AyC+A9.toFixed();}},_Init:function(
aArg){C.EnumToString._Init.call(this,aArg);this.__proto__=C.BooleanToYesNo;},_className:
"Device::BooleanToYesNo"};C.AnimalGroupTableFields={Id:0,GroupName:1};C.AnimalGroup={
GroupName:AHJ,Id:-1,E3:function(Ad,AH){var G1=C.Row.E3.call(this,Ad,AH);if(G1&&!
!AH){this.OnSetId(AH.CC(Ad,0));this.AFw(AH.V_(Ad,1));}return G1;},Ci:function(AH
){var G1=C.Row.Ci.call(this,AH);if(G1&&!!AH){var Jt=AH.OG();if(Jt<0)A.ab5("%s",Xq
);else{if(this.Am$())this.CI=AH.YP();AH.HB(this.CI,0,this.Id);AH.ZQ(this.CI,1,this.
GroupName);AH.OI(Jt);}}return G1;},Gs:function(){C.Row.Gs.call(this);this.OnSetId(-
2);},E7:function(){C.Row.E7.call(this);this.OnSetId(-1);this.AFw(A.jV);},OnSetId:
function(E){if(this.Id===E)return;this.Id=E;A.abo([this,this.Q6,this.OnSetId],0);
},AFw:function(E){if(this.GroupName===E)return;this.GroupName=E;A.abo([this,this.
BlC,this.AFw],0);},Q6:function(){return this.Id;},BlC:function(){return this.GroupName;
},_Init:function(aArg){C.Row._Init.call(this,aArg);this.__proto__=C.AnimalGroup;
this.TableId=3;},_className:"Device::AnimalGroup"};C.PopupIdToString={BT:function(
A9){var AdG=A9;var At=A.jV;var AJ8;AJ8=A.aaR(A.acf.Bq8)+MS;switch(AdG){case 0:At=
A.aaR(A.acf.Unknown);break;case 1:At=A.aaR(A.acf.SevereError);break;case 58:At=A.
aaR(A.acf.Bja);break;case 2:At=A.aaR(A.acf.Bi_);break;case 3:At=A.aaR(A.acf.BqU);
break;case 77:At=A._GetAutoObject(C.Helper).Bjo();break;case 78:At=A._GetAutoObject(
C.Helper).Bjm();break;case 79:At=A._GetAutoObject(C.Helper).Bjn();break;case 9:At=
A.aaR(A.acf.Brk);break;case 5:At=A.aaR(A.acf.SuccessDataSync);break;case 8:At=A.
aaR(A.acf.SuccessResetFactorySettings);break;case 116:At=A.aaR(A.acf.Bqa);break;
case 34:At=A.aaR(A.acf.SuccessResetAnimalData);break;case 10:At=A._GetAutoObject(
C.Device).ADm();break;case 82:At=A.aaR(A.acf.Bjc);break;case 83:At=A.aaR(A.acf.Bjd
);break;case 80:At=A.aaR(A.acf.Bp4);break;case 81:At=A.aaR(A.acf.SuccessRestoreBackup
);break;case 91:At=A.aaR(A.acf.BhZ);break;case 92:At=A.aaR(A.acf.Bpd);break;case
4:At=A.aaR(A.acf.WarningDataSync);break;case 7:At=A.aaR(A.acf.Bri);break;case 33:
At=A.aaR(A.acf.WarningResetAnimalData);break;case 115:At=A.aaR(A.acf.WarningResetDeviceData
);break;case 6:At=A.aaR(A.acf.WarningRestart);break;case 27:At=A.aaR(A.acf.WarningNoActionDefined
);break;case 64:At=A.aaR(A.acf.WarningActionNotApplicable);break;case 28:At=A.aaR(
A.acf.WarningNoMenuItemVisible);break;case 29:At=A.aaR(A.acf.WarningEnterPresentationMode
);break;case 30:At=A.aaR(A.acf.WarningNoAnimalsRegistered);break;case 41:At=((AJ8+
A.aaR(A.acf.AR6))+MS)+A.aaR(A.acf.BkI);break;case 50:At=((AJ8+A.aaR(A.acf.AR6))+
MS)+A.aaR(A.acf.BkK);break;case 51:At=((AJ8+A.aaR(A.acf.AR6))+MS)+A.aaR(A.acf.BkJ
);break;case 42:At=A.aaR(A.acf.Brg);break;case 45:At=A.aaR(A.acf.Bra);break;case
46:At=A.aaR(A.acf.WarningNoValidCountryCode);break;case 57:At=A.aaR(A.acf.WarningOutdatedAnimalWeight
);break;case 52:At=A.aaR(A.acf.WarningOutdatedAnimalWeights);break;case 53:At=A.
aaR(A.acf.WarningWeightEvaluationSingular);break;case 56:At=A.aaR(A.acf.WarningWeightEvaluationPlural
);break;case 11:At=A.aaR(A.acf.ScanError);break;case 12:At=A.aaR(A.acf.ScanNotFound
);break;case 13:At=A.aaR(A.acf.BhR);break;case 36:At=A.aaR(A.acf.BqF);break;case
117:At=A.aaR(A.acf.Brm);break;case 14:At=A.aaR(A.acf.AnimalNotFound);break;case 15:
At=A.aaR(A.acf.SuccessUnregister);break;case 35:At=A.aaR(A.acf.SuccessUnregisterPerished
);break;case 26:At=A.aaR(A.acf.SuccessCreationNewAnimal);break;case 23:At=A.aaR(
A.acf.SuccessCreationNewAnimals);break;case 24:At=A.aaR(A.acf.Bir);break;case 49:
At=A.aaR(A.acf.EvaluationInProgress);break;case 16:At=A.aaR(A.acf.Biw);break;case
17:At=A.aaR(A.acf.BpW);break;case 18:At=A.aaR(A.acf.Bp_);break;case 19:At=A.aaR(
A.acf.BpX);break;case 20:At=A.aaR(A.acf.Bp$);break;case 54:At=A.aaR(A.acf.Bp5);break;
case 55:At=A.aaR(A.acf.Bp8);break;case 21:At=A.aaR(A.acf.Bax);break;case 48:At=(
A.aaR(A.acf.Bax)+MS)+A.aaR(A.acf.A6f);break;case 22:At=A.aaR(A.acf.Brc);break;case
63:At=A.aaR(A.acf.Brd);break;case 85:At=A.aaR(A.acf.Brf);break;case 43:At=A.aaR(
A.acf.Bre);break;case 25:At=A.aaR(A.acf.Bag);break;case 47:At=(A.aaR(A.acf.Bag)+
MS)+A.aaR(A.acf.A6f);break;case 107:At=A.aaR(A.acf.BqQ);break;case 31:{var BAq=(((((((((((((((((((
A.aaR(A.acf.Bii)+Ayo)+A.aaR(A.acf.ANJ))+A.aaR(A.acf.Colon))+Oj)+A.aaR(A.acf.Bik)
)+MS)+A.aaR(A.acf.AOI))+A.aaR(A.acf.Colon))+Oj)+A.aaR(A.acf.Bji))+MS)+A.aaR(A.acf.
AUE))+A.aaR(A.acf.Colon))+Oj)+A.aaR(A.acf.Bo1))+MS)+A.aaR(A.acf.AUD))+A.aaR(A.acf.
Colon))+Oj)+A.aaR(A.acf.Bo0);At=BAq;}break;case 32:At=A.aaR(A.acf.BqG);break;case
69:At=A.aaR(A.acf.BkV);break;case 44:At=A.aaR(A.acf.Brj);break;case 37:At=A.aaR(
A.acf.WarningResetWeightSettings);break;case 38:At=A.aaR(A.acf.WarningResetTempThresholds
);break;case 39:At=A.aaR(A.acf.BoS);break;case 76:At=(A.aaR(A.acf.A5U)+MS)+A.aaR(
A.acf.AUG);break;case 40:At=A.aaR(A.acf.Bp6);break;case 75:At=A.aaR(A.acf.BpY);break;
case 59:At=A.aaR(A.acf.QuestionAddAnotherCalfMultiples);break;case 62:At=A.aaR(A.
acf.Bp0);break;case 96:At=A.aaR(A.acf.Bp1);break;case 60:At=A.aaR(A.acf.Bp2);break;
case 98:At=A.aaR(A.acf.Bp3);break;case 61:At=A.aaR(A.acf.Bqb);break;case 104:At=
A.aaR(A.acf.Bqc);break;case 65:At=A.aaR(A.acf.SuccessClearAnimalLoss);break;case
66:At=A.aaR(A.acf.WarningNoActionsForAnimalLoss);break;case 67:At=A.aaR(A.acf.SuccessLinkTransponder
);break;case 106:At=A.aaR(A.acf.BpZ);break;case 86:At=A.aaR(A.acf.SuccessUnlinkTransponder
);break;case 68:At=A.aaR(A.acf.Bp7);break;case 70:At=A.aaR(A.acf.Bje);break;case
71:At=A.aaR(A.acf.A$_);break;case 72:At=A.aaR(A.acf.Bqf);break;case 113:At=(A.aaR(
A.acf.A$_)+MS)+A.aaR(A.acf.A78);break;case 97:At=A.aaR(A.acf.Bjg);break;case 100:
At=(A.aaR(A.acf.A$$)+MS)+A.aaR(A.acf.A$w);break;case 114:At=(A.aaR(A.acf.A$$)+MS
)+A.aaR(A.acf.A78);break;case 99:At=A.aaR(A.acf.Bqg);break;case 88:At=A.aaR(A.acf.
Bjf);break;case 89:At=A.aaR(A.acf.Bqd);break;case 90:At=A.aaR(A.acf.Bqe);break;case
73:At=A.aaR(A.acf.WarningNoPremisesID);break;case 74:At=A.aaR(A.acf.WarningNoFlashDrivePresent
);break;case 94:At=A.aaR(A.acf.WarningNoBackupPathPresent);break;case 93:At=A.aaR(
A.acf.WarningNoBackupFilePresent);break;case 84:At=A.aaR(A.acf.Bjv);break;case 87:
At=A.aaR(A.acf.Brn);break;case 95:At=A.aaR(A.acf.Bq$);break;case 108:At=A.aaR(A.
acf.Brb);break;case 109:At=A.aaR(A.acf.SuccessMassDeregistration);break;case 102:
At=A.aaR(A.acf.WarningParsedDateInFutureInvalid);break;case 101:At=A.aaR(A.acf.WarningParsingDateFailed
);break;case 103:At=A.aaR(A.acf.WarningParsingNaisIdFailed);break;case 105:At=A.
aaR(A.acf.Brh);break;case 110:At=A.aaR(A.acf.Bh$);break;case 111:At=A.aaR(A.acf.
Bpo);break;case 112:At=A.aaR(A.acf.Bpp);break;default:throw new Error(AyD+AdG.toFixed(
));}return At;},LA:function(A9){var AdG=A9;var At=A.jV;switch(AdG){case 0:At=AYh;
break;case 1:At=AYi;break;case 58:At=AYj;break;case 2:At=AYk;break;case 3:At=AYl;
break;case 77:At=AYm;break;case 78:At=AYn;break;case 79:At=AYo;break;case 9:At=AYp;
break;case 5:At=AYq;break;case 8:At=AYr;break;case 116:At=AYs;break;case 34:At=AyE;
break;case 80:At=AYt;break;case 81:At=AYu;break;case 91:At=AyF;break;case 92:At=
Ath;break;case 82:At=U9;break;case 83:At=Ati;break;case 10:At=AYv;break;case 4:At=
AYw;break;case 7:At=AYx;break;case 33:At=AIo;break;case 115:At=AYy;break;case 6:
At=AIp;break;case 27:At=AYz;break;case 64:At=AYA;break;case 28:At=AYB;break;case
29:At=Atj;break;case 30:At=AYC;break;case 41:At=AYD;break;case 50:At=AIq;break;case
51:At=AYE;break;case 42:At=AYF;break;case 45:At=AYG;break;case 46:At=AYH;break;case
57:At=AcU;break;case 52:At=AYI;break;case 53:At=AYJ;break;case 56:At=AYK;break;case
11:At=AYL;break;case 12:At=AIr;break;case 13:At=AYM;break;case 36:At=AYN;break;case
117:At=AYO;break;case 14:At=AYP;break;case 15:At=AYQ;break;case 35:At=AYR;break;
case 26:At=AIs;break;case 23:At=AYS;break;case 24:At=AYT;break;case 49:At=AYU;break;
case 16:At=AIt;break;case 17:At=AIu;break;case 18:At=AYV;break;case 19:At=AYW;break;
case 20:At=AYX;break;case 54:At=AYY;break;case 55:At=Rs;break;case 21:At=Atk;break;
case 48:At=AIv;break;case 22:At=AIw;break;case 63:At=Aov;break;case 43:At=Aow;break;
case 85:At=AyG;break;case 25:At=AYZ;break;case 47:At=AIx;break;case 107:At=AY0;break;
case 31:At=AY1;break;case 32:At=AY2;break;case 69:At=AY3;break;case 44:At=AY4;break;
case 37:At=AY5;break;case 38:At=AY6;break;case 39:At=AY7;break;case 76:At=AY8;break;
case 40:At=AY9;break;case 75:At=AY_;break;case 59:At=AY$;break;case 62:At=AZa;break;
case 96:At=AZb;break;case 60:At=AZc;break;case 98:At=AZd;break;case 65:At=AZe;break;
case 61:At=Aox;break;case 104:At=AIy;break;case 66:At=AZf;break;case 67:At=AIz;break;
case 106:At=AIA;break;case 86:At=AcV;break;case 68:At=AIB;break;case 70:At=AZg;break;
case 71:At=AIC;break;case 72:At=AZh;break;case 113:At=AyH;break;case 97:At=AZi;break;
case 100:At=AZj;break;case 99:At=AyI;break;case 114:At=AZk;break;case 88:At=AZl;
break;case 89:At=AZm;break;case 90:At=AID;break;case 73:At=Aoy;break;case 74:At=
AIE;break;case 94:At=AZn;break;case 93:At=AIF;break;case 84:At=AIG;break;case 87:
At=All;break;case 95:At=AZo;break;case 108:At=Aoz;break;case 109:At=AZp;break;case
102:At=AIH;break;case 101:At=AII;break;case 103:At=AZq;break;case 105:At=AZr;break;
case 110:At=AIJ;break;case 111:At=AZs;break;case 112:At=AZt;break;default:throw new
Error(AyD+AdG.toFixed());}return At;},_Init:function(aArg){C.EnumToString._Init.
call(this,aArg);this.__proto__=C.PopupIdToString;},_className:"Device::PopupIdToString"
};C.PopupParamSeparator=";";C.RatingMode={Basic:0,Extended:1,LAST:2};C.TransponderType={
UNDEFINED:0,AnimalId:1,FarmId:2,GroupId:3,PersonId:4,LAST:5};C.TransponderProtocol={
UNDEFINED:0,FDX:1,HDX:2,HDX_URBAN:3,LAST:4};C.TransponderTypeToString={BT:function(
A9){var Bhf=A9;var type=A.jV;switch(Bhf){case 1:type=AZu;break;case 2:type=AZv;break;
case 3:type=AZw;break;case 4:type=AZx;break;case 0:type=Ayq;break;default:throw new
Error(AZy+Bhf.toFixed());}return type;},_Init:function(aArg){C.EnumToString._Init.
call(this,aArg);this.__proto__=C.TransponderTypeToString;},_className:"Device::TransponderTypeToString"
};C.TransponderProtocolToString={BT:function(A9){var Bhd=A9;var AA_=A.jV;switch(
Bhd){case 1:AA_=AZz;break;case 2:AA_=AZA;break;case 3:AA_=AZB;break;case 0:AA_=Ayq;
break;default:throw new Error(AZC+Bhd.toFixed());}return AA_;},_Init:function(aArg
){C.EnumToString._Init.call(this,aArg);this.__proto__=C.TransponderProtocolToString;
},_className:"Device::TransponderProtocolToString"};C.Transponder={Id:0,TransponderProtocol:
0,TransponderType:0,AT8:function(E){if(this.TransponderType===E)return;this.TransponderType=
E;A.abo([this,this.Bmc,this.AT8],0);},AT7:function(E){if(this.TransponderProtocol===
E)return;this.TransponderProtocol=E;A.abo([this,this.Bmb,this.AT7],0);},OnSetId:
function(E){if(this.Id===E)return;this.Id=E;A.abo([this,this.Q6,this.OnSetId],0);
},AO5:function(){return A._GetAutoObject(C.Converter).BqE(this.Id);},BjD:function(
){return A._GetAutoObject(C.Converter).Ax1(this.Id);},Bmc:function(){return this.
TransponderType;},Bmb:function(){return this.TransponderProtocol;},Q6:function(){
return this.Id;},_Init:function(aArg){this.__proto__=C.Transponder;A.h7++;},_Done:
function(){this.__proto__=null;A.h7--;},_ReInit:function(){},_Mark:function(D){var
B;if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:
null,_className:"Device::Transponder"};C.RatingModeToString={BT:function(A9){var
Vp=A9;var NF=A.jV;switch(Vp){case 0:NF=A.aaR(A.acf.Basic);break;case 1:NF=A.aaR(
A.acf.Extended);break;default:throw new Error(AZD+Vp.toFixed());}return NF;},_Init:
function(aArg){C.EnumToString._Init.call(this,aArg);this.__proto__=C.RatingModeToString;
},_className:"Device::RatingModeToString"};C.TableRowsCount={_Init:function(aArg
){this.__proto__=C.TableRowsCount;A.h7++;},_Done:function(){this.__proto__=null;
A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((B=this.I)&&(B._cycle!=
D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:"Device::TableRowsCount"
};C.MassUnit={Kilogramm:0,Pound:1,LAST:2};C.MassUnitToString={BT:function(A9){var
BeF=A9;var Aqb=A.jV;switch(BeF){case 0:Aqb=A.aaR(A.acf.Bks);break;case 1:Aqb=A.aaR(
A.acf.Pound);break;default:throw new Error(AZE+BeF.toFixed());}return Aqb;},_Init:
function(aArg){C.EnumToString._Init.call(this,aArg);this.__proto__=C.MassUnitToString;
},_className:"Device::MassUnitToString"};C.MinWeightGain=20;C.MaxWeightGain=2000;
C.WeightGainStep=10;C.Int32ArrayWrapper={MN:10,Array:A.abi(10,0,null),ZG:function(
E){if(this.MN===E)return;if(E>10)throw new Error(AZF);this.MN=E;},Set:function(aIndex
,AK){if((aIndex<0)||(aIndex>=this.MN))throw new Error(AyJ);this.Array.Set(aIndex
,AK);},Get:function(aIndex){if((aIndex<0)||(aIndex>=this.MN))throw new Error(AyJ
);return this.Array.Get(aIndex);},Am2:function(){var QC=0;var O;for(O=0;O<this.MN;
O=O+1)QC=QC+this.Get(O);return QC;},toString:function(){var A3o=this.Array.Get(0
).toFixed();var O;for(O=1;O<this.MN;O=O+1)A3o=(A3o+Pb)+this.Array.Get(O).toFixed(
);return A3o;},E3:function(aString){var HC=aString.indexOf(String.fromCharCode(0x2C
),0);var A2a=A.jV;var O=0;while(O<10){if(aString===A.jV)this.Array.Set(O,0);else{
if(HC===-1){A2a=aString;aString=A.jV;}else{A2a=A.abV(aString,HC);aString=A.ab1(aString
,0,HC+1);}this.Array.Set(O,A.wz(A2a,0,10));HC=aString.indexOf(String.fromCharCode(
0x2C),0);}O=O+1;}if(aString!==A.jV)A.ab5("%s",Aap);},Ci:function(){},E7:function(
){var O;for(O=0;O<this.MN;O=O+1)this.Set(O,0);},Avz:function(A8){var O=0;while(O<
this.MN){if(this.Array.Get(O)===A8)return O;O=O+1;}return-1;},H8:function(){var O=
0;var max=-1;while(O<this.MN){if(this.Array.Get(O)>max)max=this.Array.Get(O);O=O+
1;}return max;},_Init:function(aArg){(this.Array=[]).__proto__=C.Int32ArrayWrapper.
Array;this.__proto__=C.Int32ArrayWrapper;A.h7++;},_Done:function(){this.__proto__=
null;A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((B=this.I)&&(B._cycle
!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:"Device::Int32ArrayWrapper"
};C.ActionToString={BT:function(A9){var AzU=A9;var E_=A.jV;switch(AzU){case 4:E_=
A.aaR(A.acf.Alarm);break;case 256:E_=A.aaR(A.acf.Weighing);break;case 128:E_=A.aaR(
A.acf.A6M);break;case 16:E_=A.aaR(A.acf.AMz);break;case 1:E_=A.aaR(A.acf.Temperature
);break;case 32:E_=A.aaR(A.acf.AnimalLoss);break;case 2:E_=A.aaR(A.acf.Rating);break;
case 8:E_=A.aaR(A.acf.Asl);break;case 64:E_=A.aaR(A.acf.Unregister);break;case 512:
E_=A.aaR(A.acf.ASo);break;case 1024:E_=A.aaR(A.acf.LinkTransponder);break;case 262144:
E_=A.aaR(A.acf.UnlinkTransponder);break;case 2048:E_=A.aaR(A.acf.TG);break;case 4096:
E_=A.aaR(A.acf.Calving);break;case 8192:E_=A.aaR(A.acf.DryOff);break;case 16384:
E_=A.aaR(A.acf.A71);break;case 32768:E_=A.aaR(A.acf.ACr);break;case 524288:E_=A.
aaR(A.acf.ACt);break;case 65536:E_=A.aaR(A.acf.Delete);break;case 131072:E_=A.aaR(
A.acf.A72);break;case 0:E_=A.aaR(A.acf.A8o);break;default:throw new Error(AIK+AzU.
toFixed());}return E_;},LA:function(A9){var AzU=A9;var E_=A.jV;switch(AzU){case 4:
E_=A.aaR(A.acf.Alarm);break;case 256:E_=A.aaR(A.acf.Weighing);break;case 128:E_=
A.aaR(A.acf.A6M);break;case 16:E_=A.aaR(A.acf.AMz);break;case 1:E_=A.aaR(A.acf.Temperature
);break;case 32:E_=A.aaR(A.acf.AnimalLoss);break;case 2:E_=A.aaR(A.acf.Rating);break;
case 8:E_=A.aaR(A.acf.Asl);break;case 64:E_=A.aaR(A.acf.Unregister);break;case 512:
E_=A.aaR(A.acf.ASo);break;case 1024:E_=A.aaR(A.acf.LinkTransponder);break;case 262144:
E_=A.aaR(A.acf.UnlinkTransponder);break;case 2048:E_=A.aaR(A.acf.TG);break;case 4096:
E_=A.aaR(A.acf.Calving);break;case 8192:E_=A.aaR(A.acf.DryOff);break;case 32768:
E_=A.aaR(A.acf.ACr);break;case 524288:E_=A.aaR(A.acf.ACt);break;case 65536:E_=A.
aaR(A.acf.Delete);break;case 16384:case 131072:E_=A.aaR(A.acf.Bkz);break;case 0:
E_=A.aaR(A.acf.A8o);break;default:throw new Error(AIK+AzU.toFixed());}return E_;
},_Init:function(aArg){C.EnumToString._Init.call(this,aArg);this.__proto__=C.ActionToString;
},_className:"Device::ActionToString"};C.ACTIONS_COUNT=19;C.PopupTimeout=2000;C.
ITable={Filter:null,Id:2,CC:function(Ad,A4){return 0;},V_:function(Ad,A4){return A.
jV;},Ako:function(G){A.we(this,0);A.pe([this,this.DX],this);},H7:function(Ad,A4){
return false;},Hw:function(Ad,A4){return this.Sq(Ad,A4);},OnSetId:function(E){if(
this.Id===E)return;this.Id=E;},B8:function(){return 0;},Bk:function(E){if(this.Filter===
E)return;this.Filter=E;A.abo([this,this.Fo,this.Fs],0);},Fs:function(Aq){this.Bk(
Aq);},Ja:function(Ad,A4){var BB5=this.V$(Ad,A4);return A._GetAutoObject(C.Converter
).Bal(BB5);},V$:function(Ad,A4){return 0;},Sq:function(Ad,A4){return 0;},A7m:function(
Ad,A4){return this.CC(Ad,A4);},OG:function(){var Jt=0;var BCP=this.Id;return Jt;
},OI:function(AoV){var G1=0;var BCP=this.Id;return G1===1;},YP:function(){return-
1;},ZS:function(Ad,A4,C1){return false;},HB:function(Ad,A4,C1){return false;},ZR:
function(Ad,A4,C1){return false;},Ob:function(Ad,A4,C1){return false;},ZQ:function(
Ad,A4,C1){return false;},Act:function(Ad,A4,C1){return this.ZR(Ad,A4,C1);},AkU:function(
Ad,A4,C1){var BB6=A._GetAutoObject(C.Converter).Ad4(C1);return this.ZS(Ad,A4,BB6
);},A$U:function(Ad,A4,C1){return this.HB(Ad,A4,C1);},AOZ:function(Ad,A4){return this.
CC(Ad,A4);},BjB:function(Ad,A4){return this.CC(Ad,A4);},Bpy:function(Ad,A4,C1){return this.
HB(Ad,A4,C1);},Bpu:function(Ad,A4,C1){return this.HB(Ad,A4,C1);},LZ:function(aColumn
,A8){return-1;},Am0:function(Ad,A4){return this.CC(Ad,A4);},Bps:function(Ad,A4,C1
){return this.HB(Ad,A4,C1);},ADk:function(Ad,A4){return this.CC(Ad,A4);},AU1:function(
Ad,A4,MX){return this.HB(Ad,A4,MX);},DX:function(G){this.By6();},By6:function(){
return-1;},KT:function(Ad,A4){return 0;},UJ:function(Ad,A4,C1){return false;},Aev:
function(aColumn,A8){return-1;},E7:function(){return false;},BjC:function(Ad,A4){
var BB7=this.CC(Ad,A4);return A._GetAutoObject(C.Converter).Bj3(BB7);},BjH:function(
Ad,A4){return this.CC(Ad,A4);},AO7:function(Ad,A4){return this.CC(Ad,A4);},Bpw:function(
Ad,A4,C1){var BB8=A._GetAutoObject(C.Converter).A51(C1);return this.HB(Ad,A4,BB8
);},Bpx:function(Ad,A4,C1){return this.HB(Ad,A4,C1);},BpD:function(Ad,A4,C1){return this.
HB(Ad,A4,C1);},AjL:function(aColumn,A8){return false;},Aeo:function(aColumn,A8){
return false;},BjQ:function(Ad,A4){return this.CC(Ad,A4);},BpC:function(Ad,A4,C1
){return this.HB(Ad,A4,C1);},Ll:function(){return this.QM()>=this.HM();},HM:function(
){return 0;},QM:function(){return 0;},Fo:function(){return this.Filter;},_Init:function(
aArg){this.__proto__=C.ITable;A.h7++;},_Done:function(){this.__proto__=null;A.h7--;
},_ReInit:function(){},_Mark:function(D){var B;if((B=this.Filter)&&(B._cycle!=D)
)B._Mark(B._cycle=D);if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:
0,_observers:null,_className:"Device::ITable"};C.MaxAutoActionsCount=4;C.WeightRecordingMode={
Automatic:0,Manual:1,LAST:2};C.WeightRecordingModeToString={BT:function(A9){var Vp=
A9;var NF=A.jV;switch(Vp){case 0:NF=A.aaR(A.acf.Automatic);break;case 1:NF=A.aaR(
A.acf.Manual);break;default:throw new Error(AyK+Vp.toFixed());}return NF;},_Init:
function(aArg){C.EnumToString._Init.call(this,aArg);this.__proto__=C.WeightRecordingModeToString;
},_className:"Device::WeightRecordingModeToString"};C.BooleanToAutoOnOff={BT:function(
A9){switch(A9){case 0:return A.aaR(A.acf.Off);case 1:return A.aaR(A.acf.Abb);default:
return AyC+A9.toFixed();}},_Init:function(aArg){C.EnumToString._Init.call(this,aArg
);this.__proto__=C.BooleanToAutoOnOff;},_className:"Device::BooleanToAutoOnOff"};
C.WeightStep=100;C.WeightRecordingScope={CurrentWeightOnly:0,BirthWeightOnly:1,BirthAndCurrentWeight:
2,NoWeightRecording:3,LAST:4};C.WeightRecordingScopeToString={BT:function(A9){var
BgF=A9;var ABn=A.jV;switch(BgF){case 0:ABn=A.aaR(A.acf.Bit);break;case 1:ABn=A.aaR(
A.acf.Bh7);break;case 2:ABn=A.aaR(A.acf.Bh3);break;case 3:ABn=A.aaR(A.acf.Bk2);break;
default:throw new Error(AZG+BgF.toFixed());}return ABn;},_Init:function(aArg){C.
EnumToString._Init.call(this,aArg);this.__proto__=C.WeightRecordingScopeToString;
},_className:"Device::WeightRecordingScopeToString"};C.BodyTemperature={Undertemperature:
0,Normal:1,Elevated:2,Fever:3,LAST:4};C.Ko={A5y:0,Temperature:1,Rating:2,Afz:3,BDs:
4,BD9:5,BGU:6,BEN:7,BFx:8,BEl:9,BFv:10,BFY:11,BFZ:12,BGZ:13,BDD:14,LAST:15};C.AnimalListContentToString={
BT:function(A9){var Bc5=A9;var RA=A.jV;switch(Bc5){case 0:RA=AZH;break;case 14:RA=
AZI;break;case 2:RA=AZJ;break;case 1:RA=AZK;break;case 3:RA=AZL;break;case 4:RA=
Atl;break;case 5:RA=Atm;break;case 6:RA=Atn;break;case 7:RA=Ato;break;case 8:RA=
AyL;break;case 9:RA=AoA;break;case 10:RA=AZM;break;case 11:RA=AZN;break;case 12:
RA=AZO;break;case 13:RA=AZP;break;default:throw new Error(AZQ+Bc5.toFixed());}return RA;
},_Init:function(aArg){C.EnumToString._Init.call(this,aArg);this.__proto__=C.AnimalListContentToString;
},_className:"Device::AnimalListContentToString"};C.GenderFilterCriterion={A5:0,
Abt:function(){var Aw=A._NewObject(C.GenderFilterCriterion,0);Aw.E$(this);return Aw;
},E$:function(AI){C.FilterCriterion.E$.call(this,AI);var Aw=(C.GenderFilterCriterion.
isPrototypeOf(AI)?AI:null);if(!!Aw)this.A5=Aw.A5;},_Init:function(aArg){C.FilterCriterion.
_Init.call(this,aArg);this.__proto__=C.GenderFilterCriterion;},_className:"Device::GenderFilterCriterion"
};C.AnimalTypeFilterCriterion={A5:0,Abt:function(){var Aw=A._NewObject(C.AnimalTypeFilterCriterion
,0);Aw.E$(this);return Aw;},E$:function(AI){C.FilterCriterion.E$.call(this,AI);var
Aw=(C.AnimalTypeFilterCriterion.isPrototypeOf(AI)?AI:null);if(!!Aw)this.A5=Aw.A5;
},Initialize:function(A4,Eb,A8,Qi){this.EJ=A4;this.Operator=Eb;this.A5=A8;this.YR=
Qi;return this;},_Init:function(aArg){C.FilterCriterion._Init.call(this,aArg);this.
__proto__=C.AnimalTypeFilterCriterion;},_className:"Device::AnimalTypeFilterCriterion"
};C.BDF={AuL:0,BDE:1,BFh:2,A$B:3,A59:4,BGz:5,BD8:6,BGy:7,LinkTransponder:8,TG:9,
Weighing:10,Calving:11,LinkNaisId:12,BFX:13,ClearBirthNoticePending:14,DeleteAnimal:
15,ScanNaisId:16,Edit:17,ClearPurchaseNoticePending:18,UNDEFINED:19};C.AutoRegistrationModeToString={
BT:function(A9){var Vp=A9;var NF=A.jV;switch(Vp){case 0:NF=A.aaR(A.acf.Bil);break;
case 1:NF=A.aaR(A.acf.Bj7);break;case 2:NF=A.aaR(A.acf.Off);break;default:throw new
Error(AZR+Vp.toFixed());}return NF;},_Init:function(aArg){C.EnumToString._Init.call(
this,aArg);this.__proto__=C.AutoRegistrationModeToString;},_className:"Device::AutoRegistrationModeToString"
};C.AutoRegistrationMode={UserConfirmed:0,Background:1,Off:2,LAST:3};C.AssessmentFilterCriterion={
A5:0,Abt:function(){var Aw=A._NewObject(C.AssessmentFilterCriterion,0);Aw.E$(this
);return Aw;},E$:function(AI){C.FilterCriterion.E$.call(this,AI);var Aw=(C.AssessmentFilterCriterion.
isPrototypeOf(AI)?AI:null);if(!!Aw)this.A5=Aw.A5;},Initialize:function(A4,Eb,A8,
Qi){this.EJ=A4;this.Operator=Eb;this.A5=A8;this.YR=Qi;return this;},_Init:function(
aArg){C.FilterCriterion._Init.call(this,aArg);this.__proto__=C.AssessmentFilterCriterion;
},_className:"Device::AssessmentFilterCriterion"};C.D9={AdX:0,Temperature:1,Afz:
2,Rating:3,LAST:4};C.FactoryResetScope={DeviceAndAnimalData:0,AnimalDataOnly:1,DeviceDataOnly:
2,LAST:3};C.FactoryResetScopeToString={BT:function(A9){switch(A9){case 0:return A.
aaR(A.acf.DeviceAndAnimalData);case 1:return A.aaR(A.acf.AnimalDataOnly);case 2:
return A.aaR(A.acf.DeviceDataOnly);default:return AZS+A9.toFixed();}},_Init:function(
aArg){C.EnumToString._Init.call(this,aArg);this.__proto__=C.FactoryResetScopeToString;
},_className:"Device::FactoryResetScopeToString"};C.AVB={Ci:function(){A._GetAutoObject(
C.Device).Ase(this.toString());},Init:function(aArg){var B;A.zX([this,this.BfM],[
B=A._GetAutoObject(C.Device),B.A9I,B.BbX],0);this.BfM(this);},BfM:function(G){this.
E3(A._GetAutoObject(C.Device).AHc);A.we(this,0);},_Init:function(aArg){C.Int32ArrayWrapper.
_Init.call(this,aArg);this.__proto__=C.AVB;this.ZG(3);this.Init(aArg);},_className:
"Device::TemperaturesLowClass"};C.AVA={Init:function(aArg){var B;A.zX([this,this.
BfK],[B=A._GetAutoObject(C.Device),B.A9H,B.BbW],0);this.BfK(this);},Ci:function(
){A._GetAutoObject(C.Device).Asd(this.toString());},BfK:function(G){this.E3(A._GetAutoObject(
C.Device).AHb);A.we(this,0);},_Init:function(aArg){C.Int32ArrayWrapper._Init.call(
this,aArg);this.__proto__=C.AVA;this.ZG(3);this.Init(aArg);},_className:"Device::TemperaturesHighClass"
};C.AMS={Init:function(aArg){var B;A.zX([this,this.Bfe],[B=A._GetAutoObject(C.Device
),B.A8W,B.BbA],0);this.Bfe(this);},Bfe:function(G){this.E3(A._GetAutoObject(C.Device
).AB2);A.we(this,0);},_Init:function(aArg){C.Int32ArrayWrapper._Init.call(this,aArg
);this.__proto__=C.AMS;this.ZG(3);this.Init(aArg);},_className:"Device::AnimalTypesClass"
};C.UInt64FilterCriterion={A5:0,Abt:function(){var Aw=A._NewObject(C.UInt64FilterCriterion
,0);Aw.E$(this);return Aw;},E$:function(AI){C.FilterCriterion.E$.call(this,AI);var
Aw=(C.UInt64FilterCriterion.isPrototypeOf(AI)?AI:null);if(!!Aw)this.A5=Aw.A5;},Initialize:
function(A4,Eb,A8,Qi){this.EJ=A4;this.Operator=Eb;this.A5=A8;this.YR=Qi;return this;
},_Init:function(aArg){C.FilterCriterion._Init.call(this,aArg);this.__proto__=C.
UInt64FilterCriterion;},_className:"Device::UInt64FilterCriterion"};C.BooleanToAssignedUnassignedString={
BT:function(A9){switch(A9){case 0:return A.aaR(A.acf.Akn);case 1:return A.aaR(A.
acf.BhK);default:return AyC+A9.toFixed();}},_Init:function(aArg){C.EnumToString.
_Init.call(this,aArg);this.__proto__=C.BooleanToAssignedUnassignedString;},_className:
"Device::BooleanToAssignedUnassignedString"};C.C9={UNDEFINED:0,AT:1,BA:2,BE:3,BDK:
4,BDZ:5,BD0:6,BD1:7,BD2:8,BD3:9,BEb:10,BEc:11,BEm:12,BEn:13,BEC:14,FR:15,GR:16,BEO:
17,BEP:18,BEW:19,BEX:20,BE2:21,BE3:22,BE4:23,BE5:24,BE$:25,BFn:26,BFo:27,BFD:28,
BFE:29,BFV:30,BFW:31,BGc:32,BGd:33,BGe:34,BGs:35,BGt:36,BGN:37,Bam:38,BGO:39,LAST:
40};C.CountryToString={BT:function(A9){var Kc=A9;var FH=A.jV;switch(Kc){case 1:FH=
A.aaR(A.acm.BhV);break;case 2:FH=A.aaR(A.acm.Bh8);break;case 3:FH=A.aaR(A.acm.Bh2
);break;case 4:FH=A.aaR(A.acm.Bh_);break;case 5:FH=A.aaR(A.acm.Bib);break;case 6:
FH=A.aaR(A.acm.Bqk);break;case 7:FH=A.aaR(A.acm.Bie);break;case 8:FH=A.aaR(A.acm.
Biu);break;case 9:FH=A.aaR(A.acm.Biv);break;case 10:FH=A.aaR(A.acm.Bjw);break;case
11:FH=A.aaR(A.acm.BiC);break;case 12:FH=A.aaR(A.acm.Bjb);break;case 13:FH=A.aaR(
A.acm.BpP);break;case 14:FH=A.aaR(A.acm.Bjk);break;case 15:FH=A.aaR(A.acm.Bjs);break;
case 16:FH=A.aaR(A.acm.BjY);break;case 17:FH=A.aaR(A.acm.Bis);break;case 18:FH=A.
aaR(A.acm.Bj4);break;case 19:FH=A.aaR(A.acm.Bkb);break;case 20:FH=A.aaR(A.acm.Bkn
);break;case 21:FH=A.aaR(A.acm.Bkp);break;case 22:FH=A.aaR(A.acm.BkA);break;case
23:FH=A.aaR(A.acm.BkE);break;case 24:FH=A.aaR(A.acm.Bkx);break;case 25:FH=A.aaR(
A.acm.BkG);break;case 26:FH=A.aaR(A.acm.BkW);break;case 27:FH=A.aaR(A.acm.Bk3);break;
case 28:FH=A.aaR(A.acm.BoL);break;case 29:FH=A.aaR(A.acm.BoM);break;case 30:FH=A.
aaR(A.acm.Bpe);break;case 31:FH=A.aaR(A.acm.Bpg);break;case 32:FH=A.aaR(A.acm.Bqj
);break;case 33:FH=A.aaR(A.acm.BpO);break;case 34:FH=A.aaR(A.acm.BpN);break;case
35:FH=A.aaR(A.acm.BqJ);break;case 36:FH=A.aaR(A.acm.Bqt);break;case 37:FH=A.aaR(
A.acm.BqN);break;case 38:FH=A.aaR(A.acm.Bam);break;case 39:FH=A.aaR(A.acm.BqM);break;
case 0:FH=AoB;break;default:throw new Error(Aoo+Kc.toFixed());}return FH;},LA:function(
A9){var Kc=A9;var BN=A.jV;switch(Kc){case 1:BN=Tf;break;case 2:BN=Aab;break;case
3:BN=U1;break;case 4:BN=Xf;break;case 5:BN=Ix;break;case 6:BN=Aal;break;case 7:BN=
U2;break;case 8:BN=Aad;break;case 9:BN=Xg;break;case 10:BN=Pa;break;case 11:BN=Aae;
break;case 12:BN=Aaf;break;case 13:BN=Aak;break;case 14:BN=U4;break;case 15:BN=Xh;
break;case 16:BN=Aag;break;case 17:BN=U3;break;case 18:BN=Oi;break;case 19:BN=Rp;
break;case 20:BN=Xi;break;case 21:BN=Xj;break;case 22:BN=Xk;break;case 23:BN=Aah;
break;case 24:BN=Tg;break;case 25:BN=Xl;break;case 26:BN=Xm;break;case 27:BN=Th;
break;case 28:BN=Ti;break;case 29:BN=Tj;break;case 30:BN=Aai;break;case 31:BN=Tk;
break;case 32:BN=Xn;break;case 33:BN=AfF;break;case 34:BN=Aaj;break;case 35:BN=Xo;
break;case 36:BN=Aac;break;case 37:BN=AhX;break;case 38:BN=K3;break;case 39:BN=AcR;
break;case 0:BN=AoB;break;default:throw new Error(Aoo+Kc.toFixed());}return BN;}
,_Init:function(aArg){C.EnumToString._Init.call(this,aArg);this.__proto__=C.CountryToString;
},_className:"Device::CountryToString"};C.EaseOfDelivery={Unspecified:0,Easy:1,Moderate:
2,Difficult:3,Surgery:4,LAST:5};C.EaseOfDeliveryToString={BT:function(A9){var BdD=
A9;var AtV=A.jV;switch(BdD){case 0:AtV=A.aaR(A.acf.Unspecified);break;case 1:AtV=
A.aaR(A.acf.Easy);break;case 2:AtV=A.aaR(A.acf.Moderate);break;case 3:AtV=A.aaR(
A.acf.Difficult);break;case 4:AtV=A.aaR(A.acf.Surgery);break;default:throw new Error(
AZT+BdD.toFixed());}return AtV;},_Init:function(aArg){C.EnumToString._Init.call(
this,aArg);this.__proto__=C.EaseOfDeliveryToString;},_className:"Device::EaseOfDeliveryToString"
};C.WhereAbouts={UNB:0,EZU:1,EMA:2,VZU:3,VMA:4,VIV:5,TOT:6,V48:7,V3T:8,MGE:9,VKB:
10,LAST:11};C.WhereAboutsToString={BT:function(A9){var Bhy=A9;var Aa1=A.jV;switch(
Bhy){case 0:Aa1=A.aaR(A.acf.Unknown);break;case 1:Aa1=A.aaR(A.acf.BqW);break;case
2:Aa1=A.aaR(A.acf.BqV);break;case 3:Aa1=A.aaR(A.acf.Bq4);break;case 4:Aa1=A.aaR(
A.acf.Bq3);break;case 5:Aa1=A.aaR(A.acf.Bq1);break;case 6:Aa1=A.aaR(A.acf.BqY);break;
case 7:Aa1=A.aaR(A.acf.Bq0);break;case 8:Aa1=A.aaR(A.acf.BqZ);break;case 9:Aa1=A.
aaR(A.acf.BqX);break;case 10:Aa1=A.aaR(A.acf.Bq2);break;default:throw new Error(
AZU+Bhy.toFixed());}return Aa1;},_Init:function(aArg){C.EnumToString._Init.call(
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
A.ack.XZZ);break;default:throw new Error(AZV+Bv.toFixed());}return BK;},_Init:function(
aArg){C.EnumToString._Init.call(this,aArg);this.__proto__=C.BreedToString;},_className:
"Device::BreedToString"};C.TR={timer:null,Q:null,Ec:0,Dx:0,JX:0,Py:1000,PH:1000,
Bw:false,Cx:false,B3:true,Mm:function(G){var F;if(!this.timer)return;if(this.Ec<
0){this.Dx=this.timer.Bs;this.Ec=0;}var Av=(this.timer.Bs-this.Dx)|0;var Ox=this.
Py;var Hi=this.PH+this.Py;var LL=0;var Jp=this.Ec;if(!Jp&&(Av>=Ox)){Jp=1;Av=Av-Ox;
}if((Jp>0)&&(Av>=Hi)){var Ij=(Av/Hi)|0;Av=Av-(Ij*Hi);Jp=Jp+Ij;}if((Jp>2)&&!this.
JX)Jp=1;if(Jp!==this.Ec){this.Dx=this.timer.Bs-(((B=Av)<0)?B+0x100000000:B);this.
Ec=Jp;}if(Jp>0)LL=this.PH;var KJ=(Jp>=this.JX)&&(this.JX>0);if(!!this.Q){if((!KJ&&(
Av>=LL))&&((F=this.Q,F[1].call(F[0]))!==this.Cx))(F=this.Q,F[2].call(F[0],this.Cx
));if((KJ||((Av<LL)&&(Jp>0)))&&((F=this.Q,F[1].call(F[0]))!==this.B3))(F=this.Q,
F[2].call(F[0],this.B3));}if(KJ)this.As(false);},HQ:function(E){if(E<0)E=0;this.
JX=E;},Fq:function(E){if(E<100)E=100;this.Py=E;},Uy:function(E){if(E<0)E=0;this.
PH=E;},As:function(E){if(this.Bw===E)return;this.Bw=E;if(!E&&!!this.timer){A.z9([
this,this.Mm],this.timer,0);this.timer=null;}if(E){this.timer=A._GetAutoObject(A.
acl.Ael);A.zV([this,this.Mm],this.timer,0);this.Ec=-1;}},_Init:function(aArg){this.
__proto__=C.TR;A.h7++;},_Done:function(){this.__proto__=null;A.h7--;},_ReInit:function(
){},_Mark:function(D){var B;if((B=this.timer)&&(B._cycle!=D))B._Mark(B._cycle=D);
if((B=this.Q)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.I)&&(B._cycle
!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:"Device::BoolEffect"
};C.Io={AnimalId:0,TransponderId:1,BFc:2,BFb:3,BFf:4,BFe:5};C.Au$={BDI:0,BEf:1};
C.AnimalIdGenerationMethodToString={BT:function(A9){var Aly=A9;var Ao4=A.jV;switch(
Aly){case 0:Ao4=A.aaR(A.acf.Uq);break;case 1:Ao4=A.aaR(A.acf.Transponder);break;
case 3:Ao4=(A.aaR(A.acf.Manual)+Oj)+A.aaR(A.acf.Male);break;case 2:Ao4=(A.aaR(A.
acf.Manual)+Oj)+A.aaR(A.acf.Female);break;case 4:Ao4=(A.aaR(A.acf.Manual)+Oj)+A.
aaR(A.acf.Unknown);break;case 5:Ao4=(A.aaR(A.acf.Manual)+Oj)+AZW;break;default:throw new
Error(AZX+Aly.toFixed());}return Ao4;},_Init:function(aArg){C.EnumToString._Init.
call(this,aArg);this.__proto__=C.AnimalIdGenerationMethodToString;},_className:"Device::AnimalIdGenerationMethodToString"
};C.DirectionOfCountingToString={BT:function(A9){var AzT=A9;var A2h=A.jV;switch(
AzT){case 0:A2h=AZY;break;case 1:A2h=AZZ;break;default:throw new Error(AyM+AzT.toFixed(
));}return A2h;},_Init:function(aArg){C.EnumToString._Init.call(this,aArg);this.
__proto__=C.DirectionOfCountingToString;},_className:"Device::DirectionOfCountingToString"
};C.EnumToIcon={AsS:function(A9){throw new Error(Atc+A9.toFixed());},AsT:function(
A9){throw new Error(Atc+A9.toFixed());},_Init:function(aArg){this.__proto__=C.EnumToIcon;
A.h7++;},_Done:function(){this.__proto__=null;A.h7--;},_ReInit:function(){},_Mark:
function(D){var B;if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:
0,_observers:null,_className:"Device::EnumToIcon"};C.Aek={AsS:function(A9){return A.
aaL(A.ach.AVo);},AsT:function(A9){var AzT=A9;var RK=-1;switch(AzT){case 0:RK=3;break;
case 1:RK=2;break;default:throw new Error(AIL+AzT.toFixed());}return RK;},_Init:
function(aArg){C.EnumToIcon._Init.call(this,aArg);this.__proto__=C.Aek;},_className:
"Device::DirectionOfCountingToIcon"};C.Ad1={AsS:function(A9){return A.aaL(A.ach.
AVm);},AsT:function(A9){var Aly=A9;var RK=-1;switch(Aly){case 0:RK=0;break;case 1:
RK=6;break;case 3:RK=4;break;case 2:RK=5;break;case 4:RK=2;break;case 5:RK=3;break;
default:throw new Error(AIL+Aly.toFixed());}return RK;},_Init:function(aArg){C.EnumToIcon.
_Init.call(this,aArg);this.__proto__=C.Ad1;},_className:"Device::AnimalIdGenerationMethodToIcon"
};C.PD={UNDEFINED:0,SH:1,AO_:2,AR_:3,AO9:4,A8j:5,HE:6,A$z:7,A5P:8,AM3:9,AUQ:10,BE:
11,BB:12,A77:13,AUR:14,AUS:15,AVt:16};C.GermanStateToString={BT:function(A9){var
Bp=A9;var GF=A.jV;switch(Bp){case 1:GF=A.aaR(A.acp.SH);break;case 2:GF=A.aaR(A.acp.
AO_);break;case 3:GF=A.aaR(A.acp.AR_);break;case 4:GF=A.aaR(A.acp.AO9);break;case
5:GF=A.aaR(A.acp.A8j);break;case 6:GF=A.aaR(A.acp.HE);break;case 7:GF=A.aaR(A.acp.
A$z);break;case 8:GF=A.aaR(A.acp.A5P);break;case 9:GF=A.aaR(A.acp.AM3);break;case
10:GF=A.aaR(A.acp.AUQ);break;case 11:GF=A.aaR(A.acp.BE);break;case 12:GF=A.aaR(A.
acp.BB);break;case 13:GF=A.aaR(A.acp.A77);break;case 14:GF=A.aaR(A.acp.AUR);break;
case 15:GF=A.aaR(A.acp.AUS);break;case 16:GF=A.aaR(A.acp.AVt);break;case 0:GF=AoB;
break;default:throw new Error(Alm+Bp.toFixed());}return GF;},LA:function(A9){var
Bp=A9;var GF=A.jV;switch(Bp){case 1:GF=A.aaR(A.acp.Bph);break;case 2:GF=A.aaR(A.
acp.AO_);break;case 3:GF=A.aaR(A.acp.AR_);break;case 4:GF=A.aaR(A.acp.AO9);break;
case 5:GF=A.aaR(A.acp.BkT);break;case 6:GF=A.aaR(A.acp.HE);break;case 7:GF=A.aaR(
A.acp.BoV);break;case 8:GF=A.aaR(A.acp.BhY);break;case 9:GF=A.aaR(A.acp.AM3);break;
case 10:GF=A.aaR(A.acp.AUQ);break;case 11:GF=A.aaR(A.acp.BE);break;case 12:GF=A.
aaR(A.acp.BB);break;case 13:GF=A.aaR(A.acp.BkF);break;case 14:GF=A.aaR(A.acp.AUR
);break;case 15:GF=A.aaR(A.acp.AUS);break;case 16:GF=A.aaR(A.acp.AVt);break;case
0:GF=AoB;break;default:throw new Error(Alm+Bp.toFixed());}return GF;},Bqy:function(
A9){var Bp=A9;var Gj=-1;switch(Bp){case 0:Gj=0;break;case 1:Gj=1;break;case 2:Gj=
2;break;case 3:Gj=3;break;case 4:Gj=4;break;case 5:Gj=5;break;case 6:Gj=6;break;
case 7:Gj=7;break;case 8:Gj=8;break;case 9:Gj=9;break;case 10:Gj=10;break;case 11:
Gj=11;break;case 12:Gj=12;break;case 13:Gj=13;break;case 14:Gj=14;break;case 15:
Gj=15;break;case 16:Gj=16;break;default:throw new Error(Alm+Bp.toFixed());}return Gj;
},Bqz:function(A9){var Bp=A9;var Gj=A.jV;switch(Bp){case 1:Gj=AyN;break;case 2:Gj=
AZ0;break;case 3:Gj=AZ1;break;case 4:Gj=AZ2;break;case 5:Gj=AIM;break;case 6:Gj=
AZ3;break;case 7:Gj=AZ4;break;case 8:Gj=AZ5;break;case 9:Gj=AZ6;break;case 10:Gj=
AIg;break;case 11:Gj=U1;break;case 12:Gj=AZ7;break;case 13:Gj=AZ8;break;case 14:
Gj=AZ9;break;case 15:Gj=AZ_;break;case 16:Gj=AIN;break;case 0:Gj=AoB;break;default:
throw new Error(Alm+Bp.toFixed());}return Gj;},_Init:function(aArg){C.EnumToString.
_Init.call(this,aArg);this.__proto__=C.GermanStateToString;},_className:"Device::GermanStateToString"
};C.EartagNrAssignmentMode={OneSingleRange:0,TwoNumberRanges:1,LAST:2};C.EartagNrAssignmentModeToString={
LA:function(A9){var Vp=A9;var NF=A.jV;switch(Vp){case 0:NF=AZ$;break;case 1:NF=A0a;
break;default:throw new Error(AIO+Vp.toFixed());}return NF;},BT:function(A9){var
Vp=A9;var NF=A.jV;switch(Vp){case 0:NF=A.aaR(A.acf.BoE);break;case 1:NF=A.aaR(A.
acf.BqL);break;default:throw new Error(AIO+Vp.toFixed());}return NF;},_Init:function(
aArg){C.EnumToString._Init.call(this,aArg);this.__proto__=C.EartagNrAssignmentModeToString;
},_className:"Device::EartagNrAssignmentModeToString"};C.BDB={BFt:0,BFj:1,BEw:2,
BEx:3,BEy:4,BGu:5};C.EnumToCodeset={AmK:function(Ah7){throw new Error(A0b+Ah7.toFixed(
));},Aen:function(A9){throw new Error(Atc+A9.toFixed());},Aq2:function(){A.ab5("%s"
,AIP);return 0;},H8:function(){A.ab5("%s",AIP);return 0;},_Init:function(aArg){this.
__proto__=C.EnumToCodeset;A.h7++;},_Done:function(){this.__proto__=null;A.h7--;}
,_ReInit:function(){},_Mark:function(D){var B;if((B=this.I)&&(B._cycle!=D))B._Mark(
B._cycle=D);},I:null,_cycle:0,_observers:null,_className:"Device::EnumToCodeset"
};C.Na={AmK:function(Ah7){var Bv;switch(Ah7){case 1:Bv=1;break;case 2:Bv=2;break;
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
Bv=0;}return Bv;},Aen:function(A9){var Bv=A9;var BM=0;switch(Bv){case 0:BM=0;break;
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
case 98:BM=111;break;default:throw new Error(A0c+Bv.toFixed());}return BM;},Aq2:
function(){return 0;},H8:function(){return 111;},_Init:function(aArg){C.EnumToCodeset.
_Init.call(this,aArg);this.__proto__=C.Na;},_className:"Device::BreedToHitCodeset"
};C.ReasonOfLeaving={Unknown:0,A$6:1,RU:2,A$s:3,A7J:4,BFC:5,Ban:6,A8f:7,A58:8,A$o:
9,A8d:10,A6a:11,BFS:12,BFT:13,LAST:14};C.ReasonOfLeavingToString={BT:function(A9
){var AdH=A9;var TA=A.jV;switch(AdH){case 0:TA=A.aaR(A.acf.Unknown);break;case 1:
TA=A.aaR(A.acf.A$6);break;case 2:TA=A.aaR(A.acf.RU);break;case 3:TA=A.aaR(A.acf.
A$s);break;case 4:TA=A.aaR(A.acf.A7J);break;case 5:TA=A.aaR(A.acf.BoF);break;case
6:TA=A.aaR(A.acf.Ban);break;case 7:TA=A.aaR(A.acf.A8f);break;case 8:TA=A.aaR(A.acf.
A58);break;case 9:TA=A.aaR(A.acf.A$o);break;case 10:TA=A.aaR(A.acf.A8d);break;case
11:TA=A.aaR(A.acf.A6a);break;case 12:TA=A.aaR(A.acf.BoQ);break;case 13:TA=A.aaR(
A.acf.BoP);break;default:throw new Error(A0d+AdH.toFixed());}return TA;},_Init:function(
aArg){C.EnumToString._Init.call(this,aArg);this.__proto__=C.ReasonOfLeavingToString;
},_className:"Device::ReasonOfLeavingToString"};C.AhD={AmK:function(Ah7){var Pn;
switch(Ah7){case 1:Pn=1;break;case 2:Pn=2;break;case 3:Pn=3;break;case 4:Pn=4;break;
case 5:Pn=5;break;case 6:Pn=6;break;case 7:Pn=7;break;case 8:Pn=8;break;case 9:Pn=
9;break;case 10:Pn=10;break;case 11:Pn=11;break;case 12:Pn=12;break;case 13:Pn=13;
break;default:Pn=0;}return Pn;},Aen:function(A9){var Pn=A9;var Jo=0;switch(Pn){case
0:Jo=0;break;case 2:Jo=2;break;case 8:Jo=8;break;case 11:Jo=11;break;case 4:Jo=4;
break;case 10:Jo=10;break;case 7:Jo=7;break;case 5:Jo=5;break;case 9:Jo=9;break;
case 3:Jo=3;break;case 12:Jo=12;break;case 13:Jo=13;break;case 1:Jo=1;break;case
6:Jo=6;break;default:throw new Error(AyO+Pn.toFixed());}return Jo;},Aq2:function(
){return 0;},H8:function(){return 13;},_Init:function(aArg){C.EnumToCodeset._Init.
call(this,aArg);this.__proto__=C.AhD;},_className:"Device::ReasonOfLeavingToCodeset"
};C.K2={AmK:function(Ah7){var Lc;switch(Ah7){case 1:Lc=1;break;case 2:Lc=2;break;
case 3:Lc=3;break;case 4:Lc=4;break;case 5:Lc=5;break;case 6:Lc=6;break;case 7:Lc=
7;break;case 8:Lc=8;break;case 9:Lc=9;break;case 10:Lc=10;break;default:Lc=0;}return Lc;
},Aen:function(A9){var Lc=A9;var Jo=0;switch(Lc){case 0:Jo=0;break;case 2:Jo=2;break;
case 1:Jo=1;break;case 9:Jo=9;break;case 6:Jo=6;break;case 8:Jo=8;break;case 7:Jo=
7;break;case 5:Jo=5;break;case 10:Jo=10;break;case 4:Jo=4;break;case 3:Jo=3;break;
default:throw new Error(AyO+Lc.toFixed());}return Jo;},Aq2:function(){return 0;}
,H8:function(){return 10;},_Init:function(aArg){C.EnumToCodeset._Init.call(this,
aArg);this.__proto__=C.K2;},_className:"Device::WhereAboutsToCodeset"};C.AmS={_Init:
function(aArg){this.__proto__=C.AmS;A.h7++;},_Done:function(){this.__proto__=null;
A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((B=this.I)&&(B._cycle!=
D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:"Device::EmptyClass"
};C.CalfDeregistrationsTableFields={Year:0,Deregistrations:1,Deaths:2};C.CalfDeregistrations={
Deregistrations:0,Deaths:0,Year:-1,E3:function(Ad,AH){var G1=C.Row.E3.call(this,
Ad,AH);if(G1&&!!AH){this.AkH(AH.CC(Ad,0));this.AwJ(AH.CC(Ad,1));this.AwI(AH.CC(Ad
,2));}return G1;},Ci:function(AH){var G1=C.Row.Ci.call(this,AH);if(G1&&!!AH){var
Jt=AH.OG();if(Jt<0)A.ab5("%s",Xq);else{if(this.Am$())this.CI=AH.YP();AH.HB(this.
CI,0,this.Year);AH.HB(this.CI,1,this.Deregistrations);AH.HB(this.CI,2,this.Deaths
);AH.OI(Jt);}}return G1;},Gs:function(){C.Row.Gs.call(this);this.AkH(-2);},E7:function(
){C.Row.E7.call(this);this.AkH(-1);this.AwJ(0);this.AwI(0);},AwJ:function(E){if(
this.Deregistrations===E)return;this.Deregistrations=E;A.abo([this,this.Blt,this.
AwJ],0);},AwI:function(E){if(this.Deaths===E)return;this.Deaths=E;A.abo([this,this.
Blr,this.AwI],0);},AkH:function(E){if(this.Year===E)return;this.Year=E;A.abo([this
,this.ArL,this.AkH],0);},Blt:function(){return this.Deregistrations;},Blr:function(
){return this.Deaths;},ArL:function(){return this.Year;},_Init:function(aArg){C.
Row._Init.call(this,aArg);this.__proto__=C.CalfDeregistrations;this.TableId=4;},
_className:"Device::CalfDeregistrations"};C.Au9={Undefined:0,Display:1,A$y:2,A$L:
3,BaG:4,BEQ:5,BF5:6,BGG:7,BFa:8,BD4:9,BDq:10,A66:11,A$A:12,BGQ:13,A8i:14,BGT:15};
C.DeviceComponentToString={BT:function(A9){var Bdw=A9;var Qq=A.jV;switch(Bdw){case
0:Qq=A0e;break;case 10:Qq=A.aaR(A.acf.Bhz);break;case 9:Qq=A.aaR(A.acf.Bid);break;
case 1:Qq=A.aaR(A.acf.Bi3);break;case 11:Qq=A.aaR(A.acf.A66);break;case 5:Qq=A.aaR(
A.acf.Bq5);break;case 8:Qq=A.aaR(A.acf.Bi5);break;case 14:Qq=A.aaR(A.acf.A8i);break;
case 2:Qq=A.aaR(A.acf.A$y);break;case 12:Qq=A.aaR(A.acf.A$A);break;case 6:Qq=A.aaR(
A.acf.BoU);break;case 3:Qq=A.aaR(A.acf.A$L);break;case 7:Qq=A.aaR(A.acf.Bi6);break;
case 13:Qq=A.aaR(A.acf.BiF);break;case 15:Qq=A.aaR(A.acf.Bq9);break;case 4:Qq=A.
aaR(A.acf.BaG);break;default:throw new Error(Atp+Bdw.toFixed());}return Qq;},_Init:
function(aArg){C.EnumToString._Init.call(this,aArg);this.__proto__=C.DeviceComponentToString;
},_className:"Device::DeviceComponentToString"};C.AgV={AmK:function(Ah7){return Ah7;
},Aen:function(A9){return A9;},Aq2:function(){return 0;},H8:function(){return 4;
},_Init:function(aArg){C.EnumToCodeset._Init.call(this,aArg);this.__proto__=C.AgV;
},_className:"Device::EaseOfDeliveryToCodeset"};C.AeX={AsS:function(A9){return A.
aaL(A.ach.AQk);},AsT:function(A9){var BdI=A9;var RK=-1;switch(BdI){case 0:RK=0;break;
case 1:RK=1;break;case 2:RK=2;break;default:throw new Error(A0f+BdI.toFixed());}
return RK;},_Init:function(aArg){C.EnumToIcon._Init.call(this,aArg);this.__proto__=
C.AeX;},_className:"Device::MotherSelectionFilterModeToIcon"};C.WhereAboutsFilterCriterion={
A5:0,Abt:function(){var Aw=A._NewObject(C.WhereAboutsFilterCriterion,0);Aw.E$(this
);return Aw;},E$:function(AI){C.FilterCriterion.E$.call(this,AI);var Aw=(C.WhereAboutsFilterCriterion.
isPrototypeOf(AI)?AI:null);if(!!Aw)this.A5=Aw.A5;},Initialize:function(A4,Eb,A8,
Qi){this.EJ=A4;this.Operator=Eb;this.A5=A8;this.YR=Qi;return this;},_Init:function(
aArg){C.FilterCriterion._Init.call(this,aArg);this.__proto__=C.WhereAboutsFilterCriterion;
},_className:"Device::WhereAboutsFilterCriterion"};C.BFm={AOa:0,BD$:1,APV:2,LAST:
3};C.BGw={GL:0,AV_:1,Hm:2,Year:3,LAST:4};C.TimespanDaysToString={BT:function(A9){
var Bg7=A9;var ABA=A.jV;switch(Bg7){case 0:ABA=A.aaR(A.acf.A6n);break;case 1:ABA=
A.aaR(A.acf.AV_);break;case 2:ABA=A.aaR(A.acf.Hm);break;case 3:ABA=A.aaR(A.acf.Year
);break;default:throw new Error(A0g+Bg7.toFixed());}return ABA;},_Init:function(
aArg){C.EnumToString._Init.call(this,aArg);this.__proto__=C.TimespanDaysToString;
},_className:"Device::TimespanDaysToString"};C.Z8={BFz:0,BEg:1,BES:2,BEV:3,BEU:4
,BEh:5,BET:6,LAST:7};C.USBStateToString={BT:function(A9){var Bht=A9;var Bp=A.jV;
switch(Bht){case 0:Bp=Atq;break;case 2:Bp=AyP;break;case 1:Bp=AyQ;break;case 5:Bp=
A0h;break;case 3:Bp=A0i;break;case 4:Bp=A0j;break;case 6:Bp=AIQ;break;default:throw new
Error(AH$+Bht.toFixed());}return Bp;},_Init:function(aArg){C.EnumToString._Init.
call(this,aArg);this.__proto__=C.USBStateToString;},_className:"Device::USBStateToString"
};C.AgP={BER:0,BDC:1,BFU:2};C.AxN={ACG:A.jV,Timestamp:0,AEt:0,AEy:0,AGI:0,OnSetTimestamp:
function(E){if(this.Timestamp===E)return;this.Timestamp=E;},AFI:function(E){if(this.
AEt===E)return;this.AEt=E;},AFO:function(E){if(this.AEy===E)return;this.AEy=E;},
AFY:function(E){if(this.AGI===E)return;this.AGI=E;},AFn:function(E){if(this.ACG===
E)return;this.ACG=E;},_Init:function(aArg){this.__proto__=C.AxN;A.h7++;},_Done:function(
){this.__proto__=null;A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((
B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:
"Device::SoftwareVersionInformation"};C.AvD={Timestamp:0,ARY:0,ARZ:0,AVL:0,AVM:0
,AVK:0,ARX:0,OnSetTimestamp:function(E){if(this.Timestamp===E)return;this.Timestamp=
E;},AFF:function(E){if(this.ARY===E)return;this.ARY=E;},AFG:function(E){if(this.
ARZ===E)return;this.ARZ=E;},AGa:function(E){if(this.AVL===E)return;this.AVL=E;},
AGb:function(E){if(this.AVM===E)return;this.AVM=E;},AF$:function(E){if(this.AVK===
E)return;this.AVK=E;},AFE:function(E){if(this.ARX===E)return;this.ARX=E;},_Init:
function(aArg){this.__proto__=C.AvD;A.h7++;},_Done:function(){this.__proto__=null;
A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((B=this.I)&&(B._cycle!=
D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:"Device::HardwareVersionInformation"
};C.AqA={Undefined:0,BEH:1,BDQ:2};C.AgC={Manual:0,TransponderId:1,LAST:2};C.AnimalIdAutoGenerationMethodToString={
BT:function(A9){var Bc3=A9;var A1N=A.jV;switch(Bc3){case 0:A1N=A.aaR(A.acf.A6e);
break;case 1:A1N=A.aaR(A.acf.A6u);break;default:throw new Error(AIR+Bc3.toFixed(
));}return A1N;},_Init:function(aArg){C.EnumToString._Init.call(this,aArg);this.
__proto__=C.AnimalIdAutoGenerationMethodToString;},_className:"Device::AnimalIdAutoGenerationMethodToString"
};C.Hm={A5Z:0,AEi:1,AC3:2,AEu:3,AB4:4,AEw:5,AEk:6,AEj:7,AB$:8,AGQ:9,AEJ:10,AEH:11
,ACO:12,LAST:13};C.MonthToString={BT:function(A9){var BeL=A9;var XM=A.jV;switch(
BeL){case 1:XM=A.aaR(A.act.AEi);break;case 2:XM=A.aaR(A.act.AC3);break;case 3:XM=
A.aaR(A.act.AEu);break;case 4:XM=A.aaR(A.act.AB4);break;case 5:XM=A.aaR(A.act.AEw
);break;case 6:XM=A.aaR(A.act.AEk);break;case 7:XM=A.aaR(A.act.AEj);break;case 8:
XM=A.aaR(A.act.AB$);break;case 9:XM=A.aaR(A.act.AGQ);break;case 10:XM=A.aaR(A.act.
AEJ);break;case 11:XM=A.aaR(A.act.AEH);break;case 12:XM=A.aaR(A.act.ACO);break;default:
throw new Error(Aln+BeL.toFixed());}return XM;},_Init:function(aArg){C.EnumToString.
_Init.call(this,aArg);this.__proto__=C.MonthToString;},_className:"Device::MonthToString"
};C.V2={FileName:A.jV,AGK:0,EN:0,AgP:0,AVf:false,E7:function(){this.E5(0);this.AgP=
1;this.FileName=A.jV;this.AGK=0;this.AVf=false;},E5:function(E){if(this.EN===E)return;
this.EN=E;A.abo([this,this.SL,this.E5],0);},SL:function(){return this.EN;},_Init:
function(aArg){this.__proto__=C.V2;A.h7++;},_Done:function(){this.__proto__=null;
A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((B=this.I)&&(B._cycle!=
D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:"Device::DataExportContext"
};C.AWf={Init:function(aArg){var B;A.zX([this,this.BfZ],[B=A._GetAutoObject(C.Device
),B.A9U,B.Bb4],0);this.BfZ(this);},Ci:function(){A._GetAutoObject(C.Device).Asj(
this.toString());},BfZ:function(G){this.E3(A._GetAutoObject(C.Device).AHy);A.we(
this,0);},_Init:function(aArg){C.Int32ArrayWrapper._Init.call(this,aArg);this.__proto__=
C.AWf;this.ZG(3);this.Init(aArg);},_className:"Device::WeightGainsLowClass"};C.AWe={
Init:function(aArg){var B;A.zX([this,this.BfX],[B=A._GetAutoObject(C.Device),B.A9T
,B.Bb3],0);this.BfX(this);},Ci:function(){A._GetAutoObject(C.Device).Asi(this.toString(
));},BfX:function(G){this.E3(A._GetAutoObject(C.Device).AHx);A.we(this,0);},_Init:
function(aArg){C.Int32ArrayWrapper._Init.call(this,aArg);this.__proto__=C.AWe;this.
ZG(3);this.Init(aArg);},_className:"Device::WeightGainsHighClass"};C.AWh={Init:function(
aArg){var B;A.zX([this,this.Bf1],[B=A._GetAutoObject(C.Device),B.A9X,B.Bb7],0);this.
Bf1(this);},Ci:function(){A._GetAutoObject(C.Device).Ask(this.toString());},Bf1:
function(G){this.E3(A._GetAutoObject(C.Device).AHB);A.we(this,0);},_Init:function(
aArg){C.Int32ArrayWrapper._Init.call(this,aArg);this.__proto__=C.AWh;this.ZG(3);
this.Init(aArg);},_className:"Device::WeightValuesBirthClass"};C.AWd={Init:function(
aArg){var B;A.zX([this,this.BfV],[B=A._GetAutoObject(C.Device),B.A9S,B.Bb2],0);this.
BfV(this);},Ci:function(){A._GetAutoObject(C.Device).Ash(this.toString());},BfV:
function(G){this.E3(A._GetAutoObject(C.Device).AHw);A.we(this,0);},_Init:function(
aArg){C.Int32ArrayWrapper._Init.call(this,aArg);this.__proto__=C.AWd;this.ZG(3);
this.Init(aArg);},_className:"Device::WeightGainsAverageClass"};C.AMT={Init:function(
aArg){var B;A.zX([this,this.Bff],[B=A._GetAutoObject(C.Device),B.A8X,B.BbB],0);this.
Bff(this);},Bff:function(G){this.E3(A._GetAutoObject(C.Device).AB3);A.we(this,0);
},_Init:function(aArg){C.Int32ArrayWrapper._Init.call(this,aArg);this.__proto__=
C.AMT;this.ZG(3);this.Init(aArg);},_className:"Device::AnimalTypesWeightGainsClass"
};C.BFp={BFs:0,BFg:1,BD_:2,BGR:3,Unknown:4};C.BDO={None:0,BFA:1,BFu:2,BFq:3,BFr:
4};C.BGL={A8x:0,Manual:1,TransponderId:2,NaisId:3,LAST:4};C.TransponderLinkageIdChangeMethodToString={
BT:function(A9){var Bha=A9;var ABC=A.jV;switch(Bha){case 0:ABC=A.aaR(A.acf.A8x);
break;case 1:ABC=A.aaR(A.acf.A6e);break;case 2:ABC=A.aaR(A.acf.A6u);break;case 3:
ABC=A.aaR(A.acf.BiD);break;default:throw new Error(A0k+Bha.toFixed());}return ABC;
},_Init:function(aArg){C.EnumToString._Init.call(this,aArg);this.__proto__=C.TransponderLinkageIdChangeMethodToString;
},_className:"Device::TransponderLinkageIdChangeMethodToString"};C.A$p={Bf_:function(
AoP){var Js=A.ab0(A.abV(AoP,15),0,10);var Kc=A._GetAutoObject(C.Converter).S9(Js
);if(!!Kc){if(Kc===10){if((((AoP.length!==16)||!A._GetAutoObject(A.acj.VO).AV1(AoP
))||!!A._GetAutoObject(C.Converter).Bai(Js))||!A._GetAutoObject(C.Converter).AVP(
Js))return 0;else return Js;}else return Js;}else{Kc=A._GetAutoObject(C.Converter
).S9(A._GetAutoObject(C.Device).OZ);if(!!Kc&&(Kc===10)){if(!A._GetAutoObject(A.acj.
VO).AV1(AoP))return 0;if(AoP.length===12){var Bc2=A.ab0(A.abV(AoP,10),0,10);var AKr=
A._GetAutoObject(C.Converter).AVP(Bc2);if((Bc2>0)&&!!AKr)return(A._GetAutoObject(
C.Converter).AqH(Kc)*1000000000000)+A.ab0(A.abV(AoP,10),0,10);}}}return 0;},Bf9:
function(JI){if(!((JI.length===8)||((JI.length===10)&&A._GetAutoObject(A.acj.VO).
AV1(JI))))return 0;var AA4=A._NewObject(A.Core.Bs,0);var A4t=false;var A4y=A.abW(
JI,4,4);var At2=A.wz(A4y,0,10);if((At2<2000)||(At2>2100)){A4y=A.abV(JI,4);At2=A.
wz(A4y,0,10);A4t=true;}if((At2<2000)||(At2>2100))return 0;AA4.Year=At2;var ALb;var
Az$;if(A4t){ALb=A.abW(JI,4,2);Az$=A.wz(ALb,0,10);}else{ALb=A.abW(JI,2,2);Az$=A.wz(
ALb,0,10);}if((Az$<1)||(Az$>12))return 0;AA4.UA(Az$);var ALa;var Az_;if(A4t){ALa=
A.abW(JI,6,2);Az_=A.wz(ALa,0,10);}else{ALa=A.abV(JI,2);Az_=A.wz(ALa,0,10);}if((Az_<
1)||(Az_>AA4.Zu()))return 0;AA4.Lu(Az_);return AA4.JY();},_Init:function(aArg){this.
__proto__=C.A$p;A.h7++;},_Done:function(){this.__proto__=null;A.h7--;},_ReInit:function(
){},_Mark:function(D){var B;if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:
null,_cycle:0,_observers:null,_className:"Device::ParserClass"};C.AkK={_Init:function(
){C.A$p._Init.call(this,0);},_ReInit:function(){},_variants:function(){return this;
},_this:null};C.AnimalTableFieldsToString={BT:function(A9){var Aaw=A9;var MZ=A.jV;
switch(Aaw){case 14:MZ=A.aaR(A.acf.Afx);break;case 32:MZ=A.aaR(A.acf.Breed);break;
case 4:MZ=A.aaR(A.acf.Aei);break;case 28:MZ=A.aaR(A.acf.A54);break;case 33:MZ=A.
aaR(A.acf.AgM);break;case 23:MZ=A.aaR(A.acf.KP);break;case 7:MZ=A.aaR(A.acf.Afs);
break;case 2:MZ=A.aaR(A.acf.P);break;case 0:MZ=A.aaR(A.acf.GN);break;case 8:MZ=A.
aaR(A.acf.Alarm);break;case 9:MZ=A.aaR(A.acf.ACz);break;case 38:MZ=A.aaR(A.acf.Bi4
);break;case 11:MZ=A.aaR(A.acf.Fever);break;case 29:MZ=A.aaR(A.acf.ARL);break;case
18:MZ=A.aaR(A.acf.Nc);break;case 26:MZ=A.aaR(A.acf.Uq);break;case 22:MZ=A.aaR(A.
acf.Transponder);break;case 1:MZ=A.aaR(A.acf.GI);break;case 34:MZ=A.aaR(A.acf.Jm
);break;case 6:case 25:case 27:case 10:case 37:case 12:case 17:case 5:case 3:case
35:case 36:case 15:case 16:case 24:case 31:case 20:case 30:case 21:case 19:case 13:
MZ=A.jV;break;default:throw new Error(A0l+A9.toFixed());}return MZ;},_Init:function(
aArg){C.EnumToString._Init.call(this,aArg);this.__proto__=C.AnimalTableFieldsToString;
},_className:"Device::AnimalTableFieldsToString"};C.AEr={Bg:0,BGo:1,LAST:2};C.ListViewScopeToString={
BT:function(A9){var BAD=A9;var A3a=A.jV;switch(BAD){case 0:A3a=A.aaR(A.acf.Bg);break;
case 1:A3a=A.aaR(A.acf.BpL);break;default:throw new Error(A0m+A9.toFixed());}return A3a;
},_Init:function(aArg){C.EnumToString._Init.call(this,aArg);this.__proto__=C.ListViewScopeToString;
},_className:"Device::ListViewScopeToString"};C.AHA={BHi:0,BHh:1,BHg:2,LAST:3};C.
WeightValuePrecisionToString={BT:function(A9){var BDm=A9;var ALO=A.jV;switch(BDm
){case 0:ALO=A0n+A.aaR(A.acf.AAn);break;case 1:ALO=AyR+A.aaR(A.acf.AiG);break;case
2:ALO=Atr+A.aaR(A.acf.AiG);break;default:throw new Error(AIS+A9.toFixed());}return ALO;
},_Init:function(aArg){C.EnumToString._Init.call(this,aArg);this.__proto__=C.WeightValuePrecisionToString;
},_className:"Device::WeightValuePrecisionToString"};C.AgH={BT:function(A9){var ALj=
A9;if(ALj===1)return A.aaR(A.acf.Bj0);else return C.AnimalTypeToString.BT.call(this
,A9);},_Init:function(aArg){C.AnimalTypeToString._Init.call(this,aArg);this.__proto__=
C.AgH;},_className:"Device::AnimalTypeToStringHeifer"};C.Wu={RU:0,BFw:1,LAST:2};
C.MassDeregistrationCriterionToString={BT:function(A9){var BAG=A9;var A3f=A.jV;switch(
BAG){case 0:A3f=A.aaR(A.acf.Bk6);break;case 1:A3f=A.aaR(A.acf.ASv);break;default:
throw new Error(Ayp+A9.toFixed());}return A3f;},_Init:function(aArg){C.EnumToString.
_Init.call(this,aArg);this.__proto__=C.MassDeregistrationCriterionToString;},_className:
"Device::MassDeregistrationCriterionToString"};C.UInt64PartialFilterCriterion={A5:
A.jV,Zs:0,OK:0,Abt:function(){var Aw=A._NewObject(C.UInt64PartialFilterCriterion
,0);Aw.E$(this);return Aw;},E$:function(AI){C.FilterCriterion.E$.call(this,AI);var
Aw=(C.UInt64PartialFilterCriterion.isPrototypeOf(AI)?AI:null);if(!!Aw){this.A5=Aw.
A5;this.Zs=Aw.Zs;this.OK=Aw.OK;}},Initialize:function(A4,Eb,A8,AtC,AJi,Qi){this.
EJ=A4;this.Operator=Eb;this.A5=A8;this.YR=Qi;this.Zs=AtC;this.OK=AJi;return this;
},_Init:function(aArg){C.FilterCriterion._Init.call(this,aArg);this.__proto__=C.
UInt64PartialFilterCriterion;},_className:"Device::UInt64PartialFilterCriterion"
};C.BEd={Idle:0,BF1:1,BGa:2,BGr:3,Error:4};C.AV0={Asr:0,AsY:0,Z8:0,AT9:function(
E){if(this.Z8===E)return;this.Z8=E;A.abo([this,this.Bmd,this.AT9],0);},AT$:function(
E){if(this.AsY===E)return;this.AsY=E;A.abo([this,this.Bmf,this.AT$],0);},ATL:function(
E){if(this.Asr===E)return;this.Asr=E;A.abo([this,this.BlR,this.ATL],0);},Bmd:function(
){return this.Z8;},Bmf:function(){return this.AsY;},BlR:function(){return this.Asr;
},_Init:function(aArg){this.__proto__=C.AV0;A.h7++;},_Done:function(){this.__proto__=
null;A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((B=this.I)&&(B._cycle
!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:"Device::UsbDevice"
};
C._Init=function(){C.Int32FilterCriterion.__proto__=C.FilterCriterion;C.StringFilterCriterion.
__proto__=C.FilterCriterion;C.Table.__proto__=C.ITable;C.Animal.__proto__=C.Row;
C.Rating.__proto__=C.Row;C.HelperClass.__proto__=C.AmS;C.BoolFilterCriterion.__proto__=
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
C.AVB.__proto__=C.Int32ArrayWrapper;C.AVA.__proto__=C.Int32ArrayWrapper;C.AMS.__proto__=
C.Int32ArrayWrapper;C.UInt64FilterCriterion.__proto__=C.FilterCriterion;C.BooleanToAssignedUnassignedString.
__proto__=C.EnumToString;C.CountryToString.__proto__=C.EnumToString;C.EaseOfDeliveryToString.
__proto__=C.EnumToString;C.WhereAboutsToString.__proto__=C.EnumToString;C.BreedToString.
__proto__=C.EnumToString;C.AnimalIdGenerationMethodToString.__proto__=C.EnumToString;
C.DirectionOfCountingToString.__proto__=C.EnumToString;C.Aek.__proto__=C.EnumToIcon;
C.Ad1.__proto__=C.EnumToIcon;C.GermanStateToString.__proto__=C.EnumToString;C.EartagNrAssignmentModeToString.
__proto__=C.EnumToString;C.Na.__proto__=C.EnumToCodeset;C.ReasonOfLeavingToString.
__proto__=C.EnumToString;C.AhD.__proto__=C.EnumToCodeset;C.K2.__proto__=C.EnumToCodeset;
C.CalfDeregistrations.__proto__=C.Row;C.DeviceComponentToString.__proto__=C.EnumToString;
C.AgV.__proto__=C.EnumToCodeset;C.AeX.__proto__=C.EnumToIcon;C.WhereAboutsFilterCriterion.
__proto__=C.FilterCriterion;C.TimespanDaysToString.__proto__=C.EnumToString;C.USBStateToString.
__proto__=C.EnumToString;C.AnimalIdAutoGenerationMethodToString.__proto__=C.EnumToString;
C.MonthToString.__proto__=C.EnumToString;C.AWf.__proto__=C.Int32ArrayWrapper;C.AWe.
__proto__=C.Int32ArrayWrapper;C.AWh.__proto__=C.Int32ArrayWrapper;C.AWd.__proto__=
C.Int32ArrayWrapper;C.AMT.__proto__=C.Int32ArrayWrapper;C.TransponderLinkageIdChangeMethodToString.
__proto__=C.EnumToString;C.AnimalTableFieldsToString.__proto__=C.EnumToString;C.
ListViewScopeToString.__proto__=C.EnumToString;C.WeightValuePrecisionToString.__proto__=
C.EnumToString;C.AgH.__proto__=C.AnimalTypeToString;C.MassDeregistrationCriterionToString.
__proto__=C.EnumToString;C.UInt64PartialFilterCriterion.__proto__=C.FilterCriterion;
};C._ReInit=function(){var B;if((B=C.Device._this))B._ReInit(),C.Device._ReInit.
call(B);if((B=C.Converter._this))B._ReInit(),C.Converter._ReInit.call(B);if((B=C.
Helper._this))B._ReInit(),C.Helper._ReInit.call(B);if((B=C.AkK._this))B._ReInit(
),C.AkK._ReInit.call(B);};C.DI=function(D){var B;if((B=C.Device._this)&&(B._cycle
!=D))B._Done(C.Device._this=null);if((B=C.Converter._this)&&(B._cycle!=D))B._Done(
C.Converter._this=null);if((B=C.Helper._this)&&(B._cycle!=D))B._Done(C.Helper._this=
null);if((B=C.AkK._this)&&(B._cycle!=D))B._Done(C.AkK._this=null);};return C;})(
);

/* VitalControl demonstration application, © Urban GmbH & Co.KG 2025 */