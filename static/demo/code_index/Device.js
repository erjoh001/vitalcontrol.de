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
var Ce="ERROR: Cannot add criterion, it is already in the list.";var BD="ERROR: BatteryChargeState is read only";
var E7="ERROR: UpdateChargeActive is read only";var Hr="ERROR: ScanState is read only.";
var IW="ERROR: MeasureState is read only.";var It="ERROR: Temperature value is read only";
var O6="ERROR: UpdateDataTable called for Undefined data table.";var P_="ERROR: UpdateDataTable called for unknown data table id=";
var P$="ERROR: SyncState is read only.";var CR="ERROR: ScanTransponder is read only.";
var Ff="ERROR: Body weight value is read only";var L5="ERROR: Predicted temperature value is read only";
var Qa="ERROR: TransferProgress is read only";var J7="ERROR: TransferTarget is read only";
var Od="ERROR: unhandled assessment.";var Qb="Unhandled enum BodyTemperature: ";
var ML="AU";var S$="AT";var UW="BE";var Z6="BA";var W9="BG";var Iu="CA";var UX="CN";
var Z7="TW";var UY="HR";var Z8="CY";var W_="CZ";var Z9="DK";var Z_="EE";var UZ="FI";
var W$="FR";var O7="DE";var Z$="GR";var Oe="HU";var Rn="IE";var Xa="IT";var Xb="JP";
var Ta="LV";var Xc="LT";var Aaa="LU";var Xd="MT";var Xe="NL";var Tb="NO";var Tc=
"PL";var Td="PT";var Aab="RO";var Te="RU";var Aac="SK";var AfB="SI";var Aad="ES";
var Xf="SE";var Aae="CH";var Xg="TR";var AhX="UA";var K1="UK";var AcN="US";var Ly=
".";var AhY="-";var Aof="ERROR: Unhandled mass unit: ";var Of=" ";var Xh="Unhandled gender";
var Aaf="Unhandled animal type";var AfC="Unhandled Device::MassUnit.";var AhZ="Unhandled Device::AnimalListContent.";
var AcO="Avid";var U0="Ordicam / IER SA";var Aog="Agrident";var Aoh="Datamars";var
Aoi="Allflex";var Aoj="Texas Instruments";var Alc="Nedap";var AsZ="Digital Angel";
var Ax8="null";var Ax9="[ ";var O8=", ";var Ro=" ]";var Ax_="Unhandled language";
var U1="Unhandled Device::AnimalListAction.";var As0="Temperature unit conversion not supported: ";
var Ax$="->";var Aya="=";var Ayb=">";var Aok="<";var AfD="!=";var Aol="WARNING: Unhandled operator.";
var IX="Unknown birth type";var Aom="Unhandled country: ";var As1="Unhandled Device::Action: ";
var Xi="ERROR: Cannot start transaction";var As2="ERROR: Table is null, cannot load row (";
var As3=")";var As4="Table Id mismatch!";var Aon="ERROR: Row index (";var As5=") out of bounds [0,";
var Ald="]";var Ayc="ERROR: Table is full. Item limit: ";var Ayd="Device::ScanTransponder not set";
var Aye="Unhandled TransponderType.";var As6="Unhandled ScanState.";var Ayf="Could not load animal with transponder";
var O9="Birth type";var Ayg="Time calving";var AWc="Pend. reg. notice";var AWd="Perished";
var AWe="Rating temp.";var AWf="Location";var AHv=" mother";var AHw="Reason leaving";
var AfE="Time alarm";var Aoo="Time first weighing";var AWg="Time control";var AHx=
"Time temp.";var Ale="Time watch";var AHy="Time weighing";var AHz="Assessment";var
AWh="Time rating";var AWi="ERROR: Unhandled AnimalTable filter field:";var AHA="Field ";
var AWj="ERROR: Unhandled RatingTable filter field:";var AcP="ERROR: Unhandled table ";
var AWk=" filter fields.";var AWl=" [";var AWm="WARNING: Unhandled filter criterion type.";
var AHB="0";var As7="No table specified";var AHC="Invalid animal id generation method: ";
var AHD="Unhandled AnimalIdGenerationMethod: ";var Ayh="Invalid gender: ";var AHE=
"Invalid ear tag number assignment mode: ";var Ayi=";";var AWn="Invalid animal creation error code: ";
var AWo="Invalid EartagNrAssignmentMode: ";var AWp="Unsupported exponent: ";var AWq=
"Unknown whereabouts type: ";var AHF="Unhandled Gender: ";var AWr="Unhandled AnimalIdAutoGenerationMethod: ";
var MM="\n";var Ayj="\n\n";var AWs="Bootloader:\nV\xA0";var AWt="Middleware:\nV\xA0";
var AWu="GUI:\nV\xA0";var AWv="Mainboard: ";var AWw="Torchboard: ";var AHG="Operator not supported.";
var AWx="Unhandled Device::TransponderAssignmentIdChangeMethod: ";var Ayk="Unhandled mass deregistration criterion: ";
var As8="Unhandled enum value ";var Ayl="UNDEFINED";var AWy="Boot";var AWz="Charge";
var AHH="ChargeWarning";var AWA="ControlledPowerOff";var AHI="DeviceMain";var AHJ=
"DeviceService";var AHK="DeviceInfo";var AWB="DeviceDataManagement";var AHL="DeviceAnimalDataMenu";
var AWC="DeviceDeviceDataMenu";var AWD="DeviceCheck";var Qc="Home";var Xj="Settings";
var AWE="DateTimeSettings";var AWF="UnitsSettings";var AWG="DataAcquisitionSettings";
var AWH="RegistrationAutomaticSettings";var AWI="RegistrationPresettingsSettings";
var AWJ="TransponderAssignmentSettings";var AWK="TransponderUnlinkSettings";var Ah0=
"TemperatureSettings";var AHM="WeightGainSettings";var AWL="DeviceSettings";var AWM=
"RegistrationSettings";var AHN="InitializationSettings";var AHO="PremisesSettings";
var Aym="Sleep";var Qd="Sync";var AWN="EditAnimalData";var AWO="EditAnimalDataNaisId";
var AWP="AnimalList";var As9="AnimalListFilter";var AWQ="AlarmListFilter";var AWR=
"WatchListFilter";var AWS="AnimalActionActions";var AWT="AnimalActionTemperature";
var AWU="TemperatureMeasurement";var AWV="AnimalActionWeighing";var As_="AnimalActionRate";
var AWW="AnimalActionUnregister";var AWX="AnimalActionPerished";var AWY="AnimalActionNewBornCare";
var AWZ="AlarmList";var AW0="ControlMeasure";var AW1="ControlList";var AW2="RangeTest";
var AW3="ListsMain";var AW4="ListsIdManagement";var AW5="WatchList";var AHP="EvaluationMenuMain";
var Alf="EvaluationMenuWeights";var AW6="EvaluationLosses";var AW7="EvaluationRatings";
var AW8="EvaluationTemperatures";var Ayn="EvaluationWeights";var Alg="EvaluationWeightsRecent";
var Ah1="EvaluationBirthWeights";var Ayo="AnimalEvaluationFilter";var Aop="NewMenu";
var Ah2="NewAnimals";var AW9="NewAnimalManualData";var Ayp="MassRecording";var AHQ=
"NewAnimalTransponderData";var AfF="NewAnimalLoss";var AHR="AutoActionScanScreen";
var Aag="ManualActionScanScreen";var Alh="SetTransponderScreen";var Aoq="SetSaveTransponderScreen";
var AW_="NewAnimalSetTransponderScreen";var AW$="NewAnimalsSetTransponderScreen";
var AXa="NewAnimalCalvingDataScreen";var AXb="WeightListScreen";var AXc="AnimalSingleInfoScreen";
var As$="AnimalMultiInfoScreen";var AHS="AnimalRegistrationDetails";var AHT="FreshCowListScreen";
var AXd="FreshCowListFilterScreen";var AXe="DryCowListScreen";var AXf="DryCowListFilterScreen";
var AXg="NoTransponderListScreen";var AXh="NoTransponderListFilterScreen";var AXi=
"YoungNoTransponderListScreen";var AXj="YoungNoTransponderListFilterScreen";var AXk=
"NoNaisIdListScreen";var AXl="NoNaisIdListFilterScreen";var AXm="RegistrationsListScreen";
var AXn="RegistrationsListFilterScreen";var Ayq="ActionListScreen";var AHU="ActionListFilterScreen";
var AHV="UpdateScreen";var AHW="MotherScanScreen";var AHX="SetSaveNaisIdScreen";
var AHY="PurchasedAnimalsList";var AHZ="TextInput";var AXo="AnimalActions";var AXp=
"Unhandled display mode: ";var AXq="None";var AXr="Actions Settings";var AXs="Auto Action";
var AXt="Menu Item Settings";var AXu="Rating Type";var Ayr="Weighing settings";var
AH0="Options";var AXv="AnimalSearch";var AH1="AnimalSearchUnfiltered";var Ah3="AnimalSearchDriedOff";
var U2="MeasurementReady";var AXw="AnimalMultiInfoMenu";var Aah="MassRecordingDefaults";
var AXx="MassRecordingFields";var AXy="MassRecordingMenu";var Ali="BirthRegistrationsListMenu";
var AfG="Unhandled overlay menu: ";var AcQ="Error";var Aor="Idle";var AXz="IdScanned";
var O_="NotFound";var AH2="Progress";var AH3="Unhandled scan state: ";var AXA="Prediction";
var AH4="Ready";var AH5="Unhandled measure state: ";var AH6="Unhandled temperature unit: ";
var AXB="Unhandled species: ";var AXC="Bosanski";var AXD="\u0411\u044A\u043B\u0433\u0430\u0440\u0441\u043A\u0438";
var AXE="\u6B63\u9AD4\u5B57/\u7E41\u9AD4\u5B57";var AXF="Hrvatski";var AXG="\u010Ce\u0161tina";
var AXH="Dansk";var AXI="English";var AH7="Nederlands";var AXJ="Eesti";var AH8="Suomalainen";
var AH9="Fran\xE7ais";var Ays="Deutsch";var AXK="\u0395\u03BB\u03BB\u03B7\u03BD\u03B9\u03BA\u03AC";
var AXL="Magyar";var AXM="Italiano";var AXN="\u65E5\u672C\u8A9E";var AXO="Latvie\u0161u";
var AXP="Lietuvi\u0161kas";var AXQ="Norsk";var AXR="Polski";var Ata="Portugu\xEAs";
var Atb="Rom\xE2n\u0103";var AH_="\u0420\u0443\u0441\u0441\u043A\u0438\u0439";var
AXS="Sloven\u0161\u010Dina";var AXT="Espa\xF1ol";var AXU="Svenska";var AXV="T\xFCrk\xE7e";
var AXW="\u0423\u043A\u0440\u0430\u0457\u043D\u0441\u044C\u043A\u0438\u0439";var
AH$="Unhandled language: ";var AXX="BS";var AXY="ZH";var AXZ="CS";var AX0="DA";var
AX1="EN";var AX2="ET";var AX3="EL";var AX4="JA";var AIa="SL";var AX5="SV";var AX6=
"Unhandled gender: ";var AX7="Unhandled birth type: ";var AIb="Exporting";var AIc=
"ImportFinish";var AId="ImportStart";var AIe="Importing";var Ayt="Init";var Ayu=
"Unhandled sync state: ";var Ayv="Unhandled rating attribute: ";var AX8="Unhandled assessment: ";
var Atc="Illegal boolean value: ";var AIf="Unhandled popup ID:";var AIg="Unknown";
var AX9="Severe Error";var AX_="ErrorsDeviceDriverCheck";var AX$="Enter Sleep";var
AYa="About";var AYb="InfoSoftwareVersions";var AYc="InfoHardwareVersions";var AYd=
"InfoSerial";var AYe="ShutDown";var AYf="SuccessDataSync";var AYg="SuccessResetFactory";
var AYh="SuccessResetSettings";var AYi="SuccessResetAnimalData";var Ayw="SuccessCreateBackup";
var AYj="SuccessRestoreBackup";var AYk="CreateBackupInProgress";var Ayx="RestoreBackupInProgress";
var Atd="FailedCreateBackup";var U3="FailedRestoreBackup";var Ate="TechnicalDetails";
var AYl="WarningDataSync";var AYm="WarningFactory";var AYn="WarningResetAnimalData";
var AIh="WarningResetDeviceData";var AYo="WarningRestart";var AIi="WarningAutoAction";
var AYp="WarningAutoActionNotApplicable";var AYq="WarningNoMenuItem";var AYr="WarningEnterDemoMode";
var Atf="NoAnimalsRegistered";var AYs="MaxNumAnimalsReached";var AYt="MaxNumRatingsReached";
var AIj="MaxNumCalfDeregistrationsReached";var AYu="MissingTransponder";var AYv=
"EarTagNumberTooShort";var AYw="NoValidCountryCode";var AYx="WarningOutdatedAnimalWeight";
var AcR="WarningOutdatedAnimalWeights";var AYy="WarningWeightEvaluationSingular";
var AYz="WarningWeightEvaluationPlural";var AYA="ScanError";var AYB="ScanNotFound";
var AIk="ScannedAnimalNotFound";var AYC="ScannedTransponderNotFound";var AYD="AnimalNotFound";
var AYE="SuccessUnregister";var AYF="SuccessUnregisterPerished";var AYG="SuccessCreationNewAnimal";
var AYH="SuccessCreationNewAnimals";var AIl="AnimalCreationInProgress";var AYI="EvaluationInProgress";
var AYJ="DataSyncInProgress";var AYK="AddedToAlarm";var AIm="RemovedFromAlarm";var
AIn="AddedToWatch";var AYL="RemovedFromWatch";var AYM="AddedToDryOff";var AYN="RemovedFromDryOff";
var AYO="AnimalIdAlreadyExists";var Rp="AnimalIdAlreadyExistsContinuable";var Atg=
"MissingAnimalId";var AIo="MissingAnimalIdMother";var AIp="MissingEartagNumber";
var Aos="MissingTransponderId";var Aot="TransponderAlreadyRegistered";var Ayy="TransponderAlreadyRegisteredContinuable";
var AYP="TransponderAlreadyRegisteredCapturable";var AIq="HelpAnimalInfoRating";
var AYQ="WarningReassignTransponder";var AYR="CannotReassignNaisId";var AYS="WarningResetToDefaultValue";
var AYT="WarningResetThresholds";var AYU="WarningResetTempThresholds";var AYV="UpdateFirmware";
var AYW="UpdateFirmwareBatteryLow";var AYX="ConfirmFirmwareUpdated";var AYY="ConfirmBootloaderUpdated";
var AYZ="QuestionAddAnotherCalfMultiples";var AY0="RemovedAllBirthNoticesPending";
var AY1="RemovedAllPurchasedNoticePending";var AY2="RemovedFromBirthNoticePending";
var AY3="RemovedFromPurchasedNoticePending";var AY4="SuccessClearAnimalLoss";var
AY5="RemovedAnimalBirth";var AY6="RemovedAnimalPurchased";var Aou="WarningNoActionsForAnimalLoss";
var AIr="SuccessLinkTransponder";var AY7="SuccessChangeTransponder";var AIs="SuccessUnlinkTransponder";
var AIt="SuccessLinkNaisId";var AcS="WarningDataExportHitBirthFailed";var AIu="SuccessDataExportHitBirth";
var AY8="SuccessDataExportHitBirthDownload";var AIv="SuccessDataExportHitBirthResetAdvice";
var AY9="WarningDataExportPurchasedFailed";var Ayz="SuccessDataExportPurchased";
var AY_="SuccessDataExportPurchasedDownload";var AY$="SuccessDataExportPurchasedResetAdvice";
var AyA="WarningDataExportAnimalsFailed";var AZa="SuccessDataExportAnimalsRatings";
var AZb="SuccessDataExportAnimalsDownload";var AZc="WarningNoPremisesID";var AIw=
"WarningNoFlashDrivePresent";var Aov="WarningNoBackupPathPresent";var AIx="WarningNoBackupFilePresent";
var AZd="DemoFunctionNotAvailable";var AIy="WarningImpreciseTimeSetting";var AIz=
"ConfirmationRestoreBackup";var Alj="ConfirmationMassDeregistration";var AZe="SuccessMassDeregistration";
var Aow="WarningParsedDateInFutureInvalid";var AZf="WarningParsingDateFailed";var
AIA="WarningParsingNaisIdFailed";var AIB="WarningParsingShortNaisIdWithoutPremisesId";
var AZg="DataExportInProgress";var AZh="BarcodeScannerConnectedSwitchScreen";var
AIC="BarcodeScannerDisconnectedSwitchScreen";var AZi="AnimalId";var AZj="FarmId";
var AZk="GroupId";var AZl="PersonId";var AZm="Unhandled transponder type: ";var AZn=
"FDX";var AZo="HDX";var AZp="HDX (Urban)";var AZq="Unhandled transponder protocol: ";
var AZr="Illegal RatingMode: ";var AZs="Unhandled mass unit: ";var AZt="Max array size is 10";
var AID="Index out of bounds";var AZu="ERROR: Received more integers than expected!";
var AyB="Unhandled double scan action :";var Aai="Illegal WeightRecordingMode: ";
var AZv="Illegal WeightRecordingScope: ";var AyC="AnimalDataGenderType";var AZw=
"AnimalDataShortNaisId";var AZx="Rating";var AZy="Temperature";var AZz="Weight";
var AZA="Alarm infos";var AZB="Control infos";var Ath="Watch infos";var Ati="Fresh cow infos";
var Atj="No transponder infos";var Atk="Dry cow info";var AyD="No nais id infos";
var Aox="Birth registrations infos";var AZC="Purchased registrations infos";var AZD=
"Young no transponder infos";var AZE="Unhandled animal list content:";var AZF="Illegal AutoRegistrationMode: ";
var AZG="Illegal FactoryResetScope: ";var Aoy="??";var AZH="Illegal EaseOfDelivery: ";
var AZI="Illegal Whereabouts: ";var AZJ="Illegal breed: ";var AZK="Unisex";var AZL=
"Illegal animalIdGenerationMethod: ";var AZM="Ascending";var AZN="Descending";var
AZO="Illegal directionOfCountingName: ";var AIE="Unhandled direction of counting: ";
var Alk="Unhandled German state: ";var AZP="SH";var AyE="HH";var AyF="NI";var AZQ=
"HB";var AZR="NW";var AZS="HE";var AIF="RP";var AZT="BW";var AZU="BY";var AZV="BB";
var AZW="MV";var AZX="SN";var AZY="ST";var AZZ="TH";var AZ0="One Range Male Female";
var AIG="Two Ranges Male Female";var AIH="Illegal EartagAssignmentMode: ";var AZ1=
"Unhandled code set value ";var AII="Implement in derived class";var AZ2="Illegal HIT-Code: ";
var AZ3="Illegal ReasonOfLeaving: ";var AIJ="Illegal code: ";var AZ4="Undefined";
var AIK="Illegal DeviceComponent: ";var AZ5="Unhandled Device::MotherSelectionFilterMode: ";
var Atl="Illegal Device::TimespanDays: ";var AZ6="Not connected";var AZ7="Host";
var Atm="Device";var AyG="Device CDC";var AyH="Host MSC";var AZ8="Host HID";var AZ9=
"Host CDC";var AZ_="Illegal animalIdAutoGenerationMethod: ";var AIL="Unhandled month: ";
var AIM="Illegal transponderAssignmentIdChangeMethod: ";var All="Unhandled animal table field: ";
var AZ$="Unhandled list view scope: ";var A0a="1 ";var A0b="100 ";var A0c="10 ";
var AyI="Unhandled weight value precision: ";
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
B8:null,B9:null,CX:function(AI){if(!AI)return;var Aw=this.B8;while(!!Aw){if(Aw===
AI)throw new Error(Ce);Aw=Aw.Ah;}AI.AJ=this.B9;if(!!this.B9)this.B9.Ah=AI;this.B9=
AI;if(!this.B8)this.B8=AI;},AOS:function(){return this.B8;},AOX:function(Bce){if(
!!Bce)return Bce.Ah;return null;},DL:function(AJf,Eb){var Aw=this.B8;while(!!Aw){
if(Aw.EJ===AJf){if(Eb===1)return Aw;else if(Aw.Operator===Eb)return Aw;}Aw=Aw.Ah;
}return null;},Nq:function(AI){var Aw=this.B8;while(!!Aw){if(Aw===AI){if(!!Aw.AJ
)Aw.AJ.Ah=Aw.Ah;if(!!Aw.Ah)Aw.Ah.AJ=Aw.AJ;if(this.B8===Aw)this.B8=Aw.Ah;if(this.
B9===Aw)this.B9=Aw.AJ;Aw.Ah=null;Aw.AJ=null;return;}Aw=Aw.Ah;}},E$:function(){var
Be=A._NewObject(C.Filter,0);var Aw=this.B8;while(!!Aw){Be.CX(Aw.Abk());Aw=Aw.Ah;
}return Be;},_Init:function(aArg){this.__proto__=C.Filter;A.h7++;},_Done:function(
){this.__proto__=null;A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((
B=this.B8)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.B9)&&(B._cycle!=D))B._Mark(
B._cycle=D);if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:
null,_className:"Device::Filter"};C.FilterCriterion={Ah:null,AJ:null,EJ:-1,Operator:
1,YL:false,Abk:function(){return null;},E$:function(AI){if(!AI)return;this.EJ=AI.
EJ;this.Operator=AI.Operator;this.YL=AI.YL;},_Init:function(aArg){this.__proto__=
C.FilterCriterion;A.h7++;},_Done:function(){this.__proto__=null;A.h7--;},_ReInit:
function(){},_Mark:function(D){var B;if((B=this.Ah)&&(B._cycle!=D))B._Mark(B._cycle=
D);if((B=this.AJ)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.I)&&(B._cycle!=D
))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:"Device::FilterCriterion"
};C.Int32FilterCriterion={A5:0,Abk:function(){var Aw=A._NewObject(C.Int32FilterCriterion
,0);Aw.E$(this);return Aw;},E$:function(AI){C.FilterCriterion.E$.call(this,AI);var
Aw=(C.Int32FilterCriterion.isPrototypeOf(AI)?AI:null);if(!!Aw)this.A5=Aw.A5;},Initialize:
function(A4,Eb,A7,Qg){this.EJ=A4;this.Operator=Eb;this.A5=A7;this.YL=Qg;return this;
},_Init:function(aArg){C.FilterCriterion._Init.call(this,aArg);this.__proto__=C.
Int32FilterCriterion;},_className:"Device::Int32FilterCriterion"};C.DeviceClass={
AEs:0,AEr:0,Av8:0,PY:0,OV:null,SB:null,Q1:null,S0:null,R3:null,P4:null,Gf:null,An:
null,Bt:null,Agy:null,AnP:null,Pr:null,AuI:A.jV,AutoActions:A.jV,ABT:A.jV,AG6:A.
jV,AG7:A.jV,AhL:A.jV,AHp:A.jV,AHq:A.jV,ABU:A.jV,AHo:A.jV,AHt:A.jV,ABM:A.jV,ABN:A.
jV,ASk:A.jV,ASp:A.jV,AV$:A.jV,Aa6:100,Lw:0,AM$:75,AcG:3600,AUk:0,A2:5,AF:0,KZ:50000
,Pn:0,AGl:0,AdT:0,Aq7:0,Aq6:0,AR9:1,AR8:1,AjV:0,AR_:1,AxT:0,Afr:0,AqT:10,AU7:5,Av3:
60,Av1:0,An7:0,OP:1,WhereAbouts:0,Ak5:0,AxL:3,ACP:0,AgA:1,AbU:0,Aqs:0,AN8:11,Breed:
0,EartagNrAssignmentMode:0,Au9:0,ACI:0,ACH:0,Il:5,ABL:2,Aqu:0,AOK:2,AVW:0,D9:0,AMi:
0,Km:0,Gender:2,WeightRecordingScope:1,WeightRecordingMode:1,AnimalType:0,MassUnit:
0,AutoRegistrationMode:0,RatingMode:0,SyncState:0,OverlayMenu:0,TemperatureUnit:
0,Language:0,MeasureState:0,ScanState:0,Ik:3,AUj:false,AM4:false,AeP:true,ARV:false
,Aqg:true,AqU:false,AmS:true,HG:false,AVz:false,AmT:false,AVU:false,AsT:false,AEq:
false,AmF:false,UpdateActiveScreen:function(AK){if(this.Ik===AK)return;this.Ik=AK;
A.abo([this,this.AEE,this.Bbn],0);},Zq:function(E){if(this.K&&this.K.Zq)return this.
K.Zq.apply(this,arguments);else return C.DeviceClass.Bu3.apply(this,arguments);}
,Bu3:function(E){},Bbn:function(Aq){this.Zq(Aq);},UpdateBatteryChargeState:function(
AK){if(this.Aa6===AK)return;this.Aa6=AK;A.abo([this,this.Awb,this.AyO],0);},Awy:
function(E){if(this.K&&this.K.Awy)return this.K.Awy.apply(this,arguments);else return C.
DeviceClass.Bvc.apply(this,arguments);},Bvc:function(E){A.ab5("%s",BD);},AyO:function(
Aq){this.Awy(Aq);},UpdateChargeActive:function(AK){if(this.AmF===AK)return;this.
AmF=AK;A.abo([this,this.Awe,this.AyP],0);},AFa:function(E){if(this.K&&this.K.AFa
)return this.K.AFa.apply(this,arguments);else return C.DeviceClass.Bvj.apply(this
,arguments);},Bvj:function(E){A.ab5("%s",E7);},AyP:function(Aq){this.AFa(Aq);},UpdateScanState:
function(AK){var B;if(this.ScanState===AK)return;this.ScanState=AK;A.abo([this,this.
ASY,this.A0F],0);A._GetAutoObject(C.Helper).BBs(this);},Ar5:function(E){if(this.
K&&this.K.Ar5)return this.K.Ar5.apply(this,arguments);else return C.DeviceClass.
Bv0.apply(this,arguments);},Bv0:function(E){A.ab5("%s",Hr);},A0F:function(Aq){this.
Ar5(Aq);},UpdateMeasureState:function(AK){if(this.MeasureState===AK)return;this.
MeasureState=AK;A.abo([this,this.AEM,this.AI1],0);},AwX:function(E){if(this.K&&this.
K.AwX)return this.K.AwX.apply(this,arguments);else return C.DeviceClass.BvH.apply(
this,arguments);},BvH:function(E){A.ab5("%s",IW);},AI1:function(Aq){this.AwX(Aq);
},UpdateTempValue:function(AK){if(this.Lw===AK)return;this.Lw=AK;A.abo([this,this.
AEQ,this.AI3],0);},Aw$:function(E){if(this.K&&this.K.Aw$)return this.K.Aw$.apply(
this,arguments);else return C.DeviceClass.Bv6.apply(this,arguments);},Bv6:function(
E){A.ab5("%s",It);},AI3:function(Aq){this.Aw$(Aq);},AnD:function(E){if(this.K&&this.
K.AnD)return this.K.AnD.apply(this,arguments);else return C.DeviceClass.BvB.apply(
this,arguments);},BvB:function(E){},BbD:function(Aq){this.AnD(Aq);},Axa:function(
E){if(this.K&&this.K.Axa)return this.K.Axa.apply(this,arguments);else return C.DeviceClass.
Bv7.apply(this,arguments);},Bv7:function(E){},Atp:function(Aq){this.Axa(Aq);},AE_:
function(E){if(this.K&&this.K.AE_)return this.K.AE_.apply(this,arguments);else return C.
DeviceClass.Bvi.apply(this,arguments);},Bvi:function(E){},Bbv:function(Aq){this.
AE_(Aq);},AFG:function(E){if(this.K&&this.K.AFG)return this.K.AFG.apply(this,arguments
);else return C.DeviceClass.BvJ.apply(this,arguments);},BvJ:function(E){},A0z:function(
Aq){this.AFG(Aq);},UpdateMonitoring:function(AK){if(this.AEq===AK)return;this.AEq=
AK;A.abo([this,this.ASP,this.A0z],0);},UpdateDataTable:function(Bcg){var B;switch(
Bcg){case 0:A.pe([B=this.An,B.Ako],this);break;case 1:A.pe([B=this.Bt,B.Ako],this
);break;case 3:A.pe([B=this.Agy,B.Ako],this);break;case 4:A.pe([B=this.Pr,B.Ako]
,this);break;case 2:A.ab5("%s",O6);break;default:A.ab5("%s%e",P_,Bcg);}},AxK:function(
){if(this.K&&this.K.AxK)return this.K.AxK.apply(this,arguments);else return C.DeviceClass.
BwF.apply(this,arguments);},BwF:function(){},AhP:function(){if(this.K&&this.K.AhP
)return this.K.AhP.apply(this,arguments);else return C.DeviceClass.BwI.apply(this
,arguments);},BwI:function(){},AhM:function(){if(this.K&&this.K.AhM)return this.
K.AhM.apply(this,arguments);else return C.DeviceClass.BwG.apply(this,arguments);
},BwG:function(){},An1:function(){if(this.K&&this.K.An1)return this.K.An1.apply(
this,arguments);else return C.DeviceClass.BwJ.apply(this,arguments);},BwJ:function(
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
,this.A88,this.BbD],0);},UpdateTemperatureUnit:function(AK){if(this.TemperatureUnit===
AK)return;this.TemperatureUnit=AK;A.abo([this,this.ArB,this.Atp],0);},UpdateBrightness:
function(AK){if(this.AM$===AK)return;this.AM$=AK;A.abo([this,this.A8T,this.Bbv],
0);},SetSystemTime:function(Ah$){if(this.K&&this.K.SetSystemTime)return this.K.SetSystemTime.
apply(this,arguments);else return C.DeviceClass.BwD.apply(this,arguments);},BwD:
function(Ah$){},AxD:function(){if(this.K&&this.K.AxD)return this.K.AxD.apply(this
,arguments);else return C.DeviceClass.Bbb.apply(this,arguments);},Bbb:function(){
},AGy:function(){if(this.K&&this.K.AGy)return this.K.AGy.apply(this,arguments);else
return C.DeviceClass.Ba$.apply(this,arguments);},Ba$:function(){},Bo4:function(){
},UpdateOverlayMenu:function(AK){if(this.OverlayMenu===AK)return;this.OverlayMenu=
AK;A.abo([this,this.Awq,this.AyW],0);},Dw:function(E){if(this.K&&this.K.Dw)return this.
K.Dw.apply(this,arguments);else return C.DeviceClass.BvU.apply(this,arguments);}
,BvU:function(E){},AyW:function(Aq){this.Dw(Aq);},Axg:function(E){if(this.K&&this.
K.Axg)return this.K.Axg.apply(this,arguments);else return C.DeviceClass.Bwf.apply(
this,arguments);},Bwf:function(E){},BbP:function(Aq){this.Axg(Aq);},UpdateUnderTemp:
function(AK){if(this.AcG===AK)return;this.AcG=AK;A.abo([this,this.A9B,this.BbP],
0);},UpdateSyncState:function(AK){if(this.SyncState===AK)return;this.SyncState=AK;
A.abo([this,this.AS0,this.A0H],0);},Ab9:function(E){if(this.K&&this.K.Ab9)return this.
K.Ab9.apply(this,arguments);else return C.DeviceClass.Bv5.apply(this,arguments);
},Bv5:function(E){A.ab5("%s",P$);},A0H:function(Aq){this.Ab9(Aq);},ADc:function(
){if(this.K&&this.K.ADc)return this.K.ADc.apply(this,arguments);else return C.DeviceClass.
BuV.apply(this,arguments);},BuV:function(){return A.jV;},UpdatePopup:function(J_
,A1r,A1m,A1u){this.A3(J_,A1r,A1m,A1u,[this,this.BA_]);},PopupStateChanged:function(
J_,Ae){if(this.K&&this.K.PopupStateChanged)return this.K.PopupStateChanged.apply(
this,arguments);else return C.DeviceClass.Bws.apply(this,arguments);},Bws:function(
J_,Ae){},AF8:function(E){if(this.K&&this.K.AF8)return this.K.AF8.apply(this,arguments
);else return C.DeviceClass.Bwh.apply(this,arguments);},Bwh:function(E){},BbQ:function(
Aq){this.AF8(Aq);},UpdateVibrationOnKeypressEnabled:function(AK){if(this.AsT===AK
)return;this.AsT=AK;A.abo([this,this.A9C,this.BbQ],0);},Afa:function(E){if(this.
K&&this.K.Afa)return this.K.Afa.apply(this,arguments);else return C.DeviceClass.
Bwg.apply(this,arguments);},Bwg:function(E){},AI4:function(Aq){this.Afa(Aq);},UpdateVibrationOn:
function(BcJ){if(this.AVU===BcJ)return;this.AVU=BcJ;A.abo([this,this.AER,this.AI4
],0);},A3:function(J_,A1r,A1m,A1u,A1n){var Agp=A._NewObject(C.PopupContext,0);Agp.
Id=J_;Agp.Show=A1r;Agp.AkJ=A1m;Agp.Ak4=A1u;Agp.AGe=A1n;this.AnP.Trigger(Agp,false
);},BA_:function(G){var As=(C.PopupContext.isPrototypeOf(G)?G:null);if(!!As)this.
PopupStateChanged(As.Id,As.PopupState);},Aw7:function(E){if(this.K&&this.K.Aw7)return this.
K.Aw7.apply(this,arguments);else return C.DeviceClass.BvZ.apply(this,arguments);
},BvZ:function(E){},A0E:function(Aq){this.Aw7(Aq);},UpdateRatingMode:function(AK
){if(this.RatingMode===AK)return;this.RatingMode=AK;A.abo([this,this.ASX,this.A0E
],0);},Ae2:function(E){if(this.K&&this.K.Ae2)return this.K.Ae2.apply(this,arguments
);else return C.DeviceClass.Bvt.apply(this,arguments);},Bvt:function(E){},Ato:function(
Aq){this.Ae2(Aq);},UpdateFlashLightOn:function(Bcp){if(this.AmT===Bcp)return;this.
AmT=Bcp;A.abo([this,this.Ary,this.Ato],0);},Uw:function(E){if(this.K&&this.K.Uw)
return this.K.Uw.apply(this,arguments);else return C.DeviceClass.Bv_.apply(this,
arguments);},Bv_:function(E){},A0I:function(Aq){this.Uw(Aq);},UpdateTopLightOn:function(
BcE){if(this.AVz===BcE)return;this.AVz=BcE;A.abo([this,this.AS2,this.A0I],0);},WI:
function(E){if(this.K&&this.K.WI)return this.K.WI.apply(this,arguments);else return C.
DeviceClass.BvY.apply(this,arguments);},BvY:function(E){},BwW:function(Aq){this.
WI(Aq);},UpdateRGBTopLight:function(Bcz){if(this.AUk===Bcz)return;this.AUk=Bcz;A.
abo([this,this.BlJ,this.BwW],0);},Awx:function(E){if(this.K&&this.K.Awx)return this.
K.Awx.apply(this,arguments);else return C.DeviceClass.Bvb.apply(this,arguments);
},Bvb:function(E){},BwP:function(Aq){this.Awx(Aq);},UpdateAutoRegistrationMode:function(
Bcc){if(this.AutoRegistrationMode===Bcc)return;this.AutoRegistrationMode=Bcc;A.abo([
this,this.Bk8,this.BwP],0);},Ar6:function(E){if(this.K&&this.K.Ar6)return this.K.
Ar6.apply(this,arguments);else return C.DeviceClass.Bv1.apply(this,arguments);},
Bv1:function(E){A.ab5("%s",CR);},A0G:function(Aq){this.Ar6(Aq);},UpdateScanTransponder:
function(J_,BcG,BcF){if(((this.OV.Id===J_)&&(this.OV.TransponderType===BcG))&&(this.
OV.TransponderProtocol===BcF))return;this.OV.OnSetId(J_);this.OV.AT0(BcG);this.OV.
ATZ(BcF);A.abo([this,this.ASZ,this.A0G],0);},OQ:function(E){if(this.K&&this.K.OQ
)return this.K.OQ.apply(this,arguments);else return C.DeviceClass.Bvl.apply(this
,arguments);},Bvl:function(E){},U5:function(Aq){this.OQ(Aq);},UpdateDigitsID:function(
Bck){if(this.A2===Bck)return;this.A2=Bck;A.abo([this,this.Un,this.U5],0);},PU:function(
E){if(this.K&&this.K.PU)return this.K.PU.apply(this,arguments);else return C.DeviceClass.
BvT.apply(this,arguments);},BvT:function(E){},U6:function(Aq){this.PU(Aq);},UpdateOffsetID:
function(Bcv){if(this.AF===Bcv)return;this.AF=Bcv;A.abo([this,this.Uo,this.U6],0
);},AGa:function(E){if(this.K&&this.K.AGa)return this.K.AGa.apply(this,arguments
);else return C.DeviceClass.Bwo.apply(this,arguments);},Bwo:function(E){A.ab5("%s"
,Ff);},AI5:function(Aq){this.AGa(Aq);},UpdateWeightValue:function(AK){if(this.KZ===
AK)return;this.KZ=AK;A.abo([this,this.AES,this.AI5],0);},AwU:function(E){if(this.
K&&this.K.AwU)return this.K.AwU.apply(this,arguments);else return C.DeviceClass.
BvE.apply(this,arguments);},BvE:function(E){},A0y:function(Aq){this.AwU(Aq);},UpdateMassUnit:
function(AK){if(this.MassUnit===AK)return;this.MassUnit=AK;A.abo([this,this.ASO,
this.A0y],0);},ArF:function(E){if(this.K&&this.K.ArF)return this.K.ArF.apply(this
,arguments);else return C.DeviceClass.Ba7.apply(this,arguments);},Ba7:function(E
){},Bbk:function(Aq){this.ArF(Aq);},ArG:function(E){if(this.K&&this.K.ArG)return this.
K.ArG.apply(this,arguments);else return C.DeviceClass.Ba8.apply(this,arguments);
},Ba8:function(E){},A0t:function(Aq){this.ArG(Aq);},UpdateActiveActions:function(
AK){if(this.Pn===AK)return;this.Pn=AK;A.abo([this,this.A8D,this.Bbk],0);},UpdateActiveActionsOrder:
function(AK){if(this.AuI===AK)return;this.AuI=AK;A.abo([this,this.ASB,this.A0t],
0);},Akv:function(E){if(this.K&&this.K.Akv)return this.K.Akv.apply(this,arguments
);else return C.DeviceClass.Ba9.apply(this,arguments);},Ba9:function(E){},Bbs:function(
Aq){this.Akv(Aq);},UpdateAutoActions:function(AK){if(this.AutoActions===AK)return;
this.AutoActions=AK;A.abo([this,this.A8O,this.Bbs],0);},AGZ:function(){if(this.K&&
this.K.AGZ)return this.K.AGZ.apply(this,arguments);else return C.DeviceClass.BwH.
apply(this,arguments);},BwH:function(){},AsJ:function(){if(this.K&&this.K.AsJ)return this.
K.AsJ.apply(this,arguments);else return C.DeviceClass.BwL.apply(this,arguments);
},BwL:function(){},EC:function(E){if(this.K&&this.K.EC)return this.K.EC.apply(this
,arguments);else return C.DeviceClass.Bu_.apply(this,arguments);},Bu_:function(E
){},BwO:function(Aq){this.EC(Aq);},UpdateAnimalType:function(Eo){if(this.AnimalType===
Eo)return;this.AnimalType=Eo;A.abo([this,this.PT,this.BwO],0);},Axh:function(E){
if(this.K&&this.K.Axh)return this.K.Axh.apply(this,arguments);else return C.DeviceClass.
Bwm.apply(this,arguments);},Bwm:function(E){},BbV:function(Aq){this.Axh(Aq);},UpdateWeightRecordingMode:
function(BcL){if(this.WeightRecordingMode===BcL)return;this.WeightRecordingMode=
BcL;A.abo([this,this.A9K,this.BbV],0);},AFL:function(E){if(this.K&&this.K.AFL)return this.
K.AFL.apply(this,arguments);else return C.DeviceClass.BvV.apply(this,arguments);
},BvV:function(E){A.ab5("%s",L5);},A0C:function(Aq){this.AFL(Aq);},UpdatePredictedTempValue:
function(AK){if(this.AGl===AK)return;this.AGl=AK;A.abo([this,this.ASU,this.A0C],
0);},SR:function(L$){if(this.K&&this.K.SR)return this.K.SR.apply(this,arguments);
else return C.DeviceClass.BwC.apply(this,arguments);},BwC:function(L$){},AFf:function(
E){if(this.K&&this.K.AFf)return this.K.AFf.apply(this,arguments);else return C.DeviceClass.
Bvk.apply(this,arguments);},Bvk:function(E){},AIY:function(Aq){this.AFf(Aq);},UpdateDemoMode:
function(AK){if(this.HG===AK)return;this.HG=AK;A.abo([this,this.AEJ,this.AIY],0);
},AEY:function(E){if(this.K&&this.K.AEY)return this.K.AEY.apply(this,arguments);
else return C.DeviceClass.Bu4.apply(this,arguments);},Bu4:function(E){},Bbo:function(
Aq){this.AEY(Aq);},UpdateAgeRegistration:function(Bcu){if(this.AdT===Bcu)return;
this.AdT=Bcu;A.abo([this,this.A8I,this.Bbo],0);},Axi:function(E){if(this.K&&this.
K.Axi)return this.K.Axi.apply(this,arguments);else return C.DeviceClass.Bwn.apply(
this,arguments);},Bwn:function(E){},BbW:function(Aq){this.Axi(Aq);},UpdateWeightRecordingScope:
function(BcA){if(this.WeightRecordingScope===BcA)return;this.WeightRecordingScope=
BcA;A.abo([this,this.A9L,this.BbW],0);},JY:function(E){if(this.K&&this.K.JY)return this.
K.JY.apply(this,arguments);else return C.DeviceClass.Bvx.apply(this,arguments);}
,Bvx:function(E){},A0x:function(Aq){this.JY(Aq);},UpdateGender:function(L8){if(this.
Gender===L8)return;this.Gender=L8;A.abo([this,this.WD,this.A0x],0);},ArV:function(
E){if(this.K&&this.K.ArV)return this.K.ArV.apply(this,arguments);else return C.DeviceClass.
Bvz.apply(this,arguments);},Bvz:function(E){},AyS:function(Aq){this.ArV(Aq);},UpdateIDLastUsedMale:
function(Rq){if(this.Aq7===Rq)return;this.Aq7=Rq;A.abo([this,this.Awj,this.AyS],
0);},ArU:function(E){if(this.K&&this.K.ArU)return this.K.ArU.apply(this,arguments
);else return C.DeviceClass.Bvy.apply(this,arguments);},Bvy:function(E){},AyR:function(
Aq){this.ArU(Aq);},UpdateIDLastUsedFemale:function(Rq){if(this.Aq6===Rq)return;this.
Aq6=Rq;A.abo([this,this.Awi,this.AyR],0);},Zr:function(E){if(this.K&&this.K.Zr)return this.
K.Zr.apply(this,arguments);else return C.DeviceClass.Bu9.apply(this,arguments);}
,Bu9:function(E){},AIW:function(Aq){this.Zr(Aq);},UpdateAnimalListContent:function(
AK){if(this.Km===AK)return;this.Km=AK;A.abo([this,this.AEG,this.AIW],0);},AE0:function(
E){if(this.K&&this.K.AE0)return this.K.AE0.apply(this,arguments);else return C.DeviceClass.
Bu5.apply(this,arguments);},Bu5:function(E){},Bbp:function(Aq){this.AE0(Aq);},UpdateAlarmListAction:
function(AK){if(this.AMi===AK)return;this.AMi=AK;A.abo([this,this.A8K,this.Bbp],
0);},AFi:function(E){if(this.K&&this.K.AFi)return this.K.AFi.apply(this,arguments
);else return C.DeviceClass.Bvs.apply(this,arguments);},Bvs:function(E){},Bby:function(
Aq){this.AFi(Aq);},UpdateFlashLightInMeasureState:function(Bcq){if(this.AmS===Bcq
)return;this.AmS=Bcq;A.abo([this,this.A8W,this.Bby],0);},AeX:function(E){if(this.
K&&this.K.AeX)return this.K.AeX.apply(this,arguments);else return C.DeviceClass.
Bu8.apply(this,arguments);},Bu8:function(E){},AIV:function(Aq){this.AeX(Aq);},UpdateAnimalInfoContent:
function(AK){if(this.D9===AK)return;this.D9=AK;A.abo([this,this.AEF,this.AIV],0);
},AF$:function(E){if(this.K&&this.K.AF$)return this.K.AF$.apply(this,arguments);
else return C.DeviceClass.Bwi.apply(this,arguments);},Bwi:function(E){},BbR:function(
Aq){this.AF$(Aq);},UpdateWatchListAction:function(AK){if(this.AVW===AK)return;this.
AVW=AK;A.abo([this,this.A9G,this.BbR],0);},AFk:function(E){if(this.K&&this.K.AFk
)return this.K.AFk.apply(this,arguments);else return C.DeviceClass.Bvu.apply(this
,arguments);},Bvu:function(E){},BbA:function(Aq){this.AFk(Aq);},UpdateFreshCowListAction:
function(AK){if(this.AOK===AK)return;this.AOK=AK;A.abo([this,this.A8Y,this.BbA],
0);},ResetActiveActions:function(G){if(this.K&&this.K.ResetActiveActions)return this.
K.ResetActiveActions.apply(this,arguments);else return C.DeviceClass.Bwu.apply(this
,arguments);},Bwu:function(G){},BGQ:function(s){this.ResetActiveActions(s);},ResetAutoActions:
function(G){if(this.K&&this.K.ResetAutoActions)return this.K.ResetAutoActions.apply(
this,arguments);else return C.DeviceClass.Bww.apply(this,arguments);},Bww:function(
G){},BGS:function(s){this.ResetAutoActions(s);},Awv:function(E){if(this.K&&this.
K.Awv)return this.K.Awv.apply(this,arguments);else return C.DeviceClass.Bu$.apply(
this,arguments);},Bu$:function(E){},Bbq:function(Aq){this.Awv(Aq);},Ar9:function(
E){if(this.K&&this.K.Ar9)return this.K.Ar9.apply(this,arguments);else return C.DeviceClass.
Bv8.apply(this,arguments);},Bv8:function(E){},BbM:function(Aq){this.Ar9(Aq);},Ar_:
function(E){if(this.K&&this.K.Ar_)return this.K.Ar_.apply(this,arguments);else return C.
DeviceClass.Bv9.apply(this,arguments);},Bv9:function(E){},BbN:function(Aq){this.
Ar_(Aq);},Asu:function(G){if(this.K&&this.K.Asu)return this.K.Asu.apply(this,arguments
);else return C.DeviceClass.Bwz.apply(this,arguments);},Bwz:function(G){},BGV:function(
s){this.Asu(s);},UpdateTemperaturesLowString:function(AK){if(this.AG7===AK)return;
this.AG7=AK;A.abo([this,this.A9x,this.BbN],0);},UpdateTemperaturesHighString:function(
AK){if(this.AG6===AK)return;this.AG6=AK;A.abo([this,this.A9w,this.BbM],0);},UpdateAnimalTypesString:
function(AK){if(this.ABT===AK)return;this.ABT=AK;A.abo([this,this.A8M,this.Bbq],
0);},AwO:function(E){if(this.K&&this.K.AwO)return this.K.AwO.apply(this,arguments
);else return C.DeviceClass.Bvw.apply(this,arguments);},Bvw:function(E){},BbC:function(
Aq){this.AwO(Aq);},UpdateFreshCowsHideMeasured:function(AK){if(this.AqU===AK)return;
this.AqU=AK;A.abo([this,this.A80,this.BbC],0);},Ar1:function(E){if(this.K&&this.
K.Ar1)return this.K.Ar1.apply(this,arguments);else return C.DeviceClass.BvP.apply(
this,arguments);},BvP:function(E){},BbH:function(Aq){this.Ar1(Aq);},UpdateNaisIdLastUsedMale:
function(Xr){if(this.AEs===Xr)return;this.AEs=Xr;A.abo([this,this.A9e,this.BbH],
0);},Ar0:function(E){if(this.K&&this.K.Ar0)return this.K.Ar0.apply(this,arguments
);else return C.DeviceClass.BvO.apply(this,arguments);},BvO:function(E){},BbG:function(
Aq){this.Ar0(Aq);},UpdateNaisIdLastUsedFemale:function(Xr){if(this.AEr===Xr)return;
this.AEr=Xr;A.abo([this,this.A9d,this.BbG],0);},Aw1:function(E){if(this.K&&this.
K.Aw1)return this.K.Aw1.apply(this,arguments);else return C.DeviceClass.BvM.apply(
this,arguments);},BvM:function(E){},AyU:function(Aq){this.Aw1(Aq);},UpdateNaisIdIncrementMale:
function(Alt){if(this.AR9===Alt)return;this.AR9=Alt;A.abo([this,this.Awn,this.AyU
],0);},Aw0:function(E){if(this.K&&this.K.Aw0)return this.K.Aw0.apply(this,arguments
);else return C.DeviceClass.BvL.apply(this,arguments);},BvL:function(E){},AyT:function(
Aq){this.Aw0(Aq);},UpdateNaisIdIncrementFemale:function(Alt){if(this.AR8===Alt)return;
this.AR8=Alt;A.abo([this,this.Awm,this.AyT],0);},UpdateFirmware:function(){if(this.
K&&this.K.UpdateFirmware)return this.K.UpdateFirmware.apply(this,arguments);else
return C.DeviceClass.Bbc.apply(this,arguments);},Bbc:function(){},Any:function(E
){if(this.K&&this.K.Any)return this.K.Any.apply(this,arguments);else return C.DeviceClass.
Bvf.apply(this,arguments);},Bvf:function(E){},Bbu:function(Aq){this.Any(Aq);},UpdateBootloaderMessage:
function(AK){if(this.Aqu===AK)return;this.Aqu=AK;A.abo([this,this.A8S,this.Bbu],
0);},AEV:function(E){if(this.K&&this.K.AEV)return this.K.AEV.apply(this,arguments
);else return C.DeviceClass.BuZ.apply(this,arguments);},BuZ:function(E){},Bbi:function(
Aq){this.AEV(Aq);},UpdateActionListAction:function(AK){if(this.ABL===AK)return;this.
ABL=AK;A.abo([this,this.A8B,this.Bbi],0);},Awt:function(E){if(this.K&&this.K.Awt
)return this.K.Awt.apply(this,arguments);else return C.DeviceClass.Bu0.apply(this
,arguments);},Bu0:function(E){},Bbj:function(Aq){this.Awt(Aq);},UpdateActionListHideMeasured:
function(AK){if(this.Aqg===AK)return;this.Aqg=AK;A.abo([this,this.A8C,this.Bbj],
0);},Uq:function(E){if(this.K&&this.K.Uq)return this.K.Uq.apply(this,arguments);
else return C.DeviceClass.Bu7.apply(this,arguments);},Bu7:function(E){},AoA:function(
Aq){this.Uq(Aq);},UpdateAnimalIdGenerationMethod:function(BcQ){if(this.Il===BcQ)
return;this.Il=BcQ;A.abo([this,this.Anr,this.AoA],0);},AwG:function(E){if(this.K&&
this.K.AwG)return this.K.AwG.apply(this,arguments);else return C.DeviceClass.Bvm.
apply(this,arguments);},Bvm:function(E){},A0v:function(Aq){this.AwG(Aq);},UpdateDirectionOfCountingFemale:
function(Aln){if(this.ACH===Aln)return;this.ACH=Aln;A.abo([this,this.ASH,this.A0v
],0);},AwH:function(E){if(this.K&&this.K.AwH)return this.K.AwH.apply(this,arguments
);else return C.DeviceClass.Bvn.apply(this,arguments);},Bvn:function(E){},A0w:function(
Aq){this.AwH(Aq);},UpdateDirectionOfCountingMale:function(Aln){if(this.ACI===Aln
)return;this.ACI=Aln;A.abo([this,this.ASI,this.A0w],0);},AwI:function(E){if(this.
K&&this.K.AwI)return this.K.AwI.apply(this,arguments);else return C.DeviceClass.
Bvo.apply(this,arguments);},Bvo:function(E){},AIZ:function(Aq){this.AwI(Aq);},UpdateDirectionOfCountingUnisex:
function(Aln){if(this.Au9===Aln)return;this.Au9=Aln;A.abo([this,this.AEK,this.AIZ
],0);},ArW:function(E){if(this.K&&this.K.ArW)return this.K.ArW.apply(this,arguments
);else return C.DeviceClass.BvA.apply(this,arguments);},BvA:function(E){},AoB:function(
Aq){this.ArW(Aq);},UpdateIDLastUsedUnisex:function(Rq){if(this.AjV===Rq)return;this.
AjV=Rq;A.abo([this,this.Anu,this.AoB],0);},Ar2:function(E){if(this.K&&this.K.Ar2
)return this.K.Ar2.apply(this,arguments);else return C.DeviceClass.BvQ.apply(this
,arguments);},BvQ:function(E){},A0A:function(Aq){this.Ar2(Aq);},UpdateNaisIdLastUsedUnisex:
function(Xr){if(this.Av8===Xr)return;this.Av8=Xr;A.abo([this,this.ASQ,this.A0A],
0);},Aw2:function(E){if(this.K&&this.K.Aw2)return this.K.Aw2.apply(this,arguments
);else return C.DeviceClass.BvN.apply(this,arguments);},BvN:function(E){},AyV:function(
Aq){this.Aw2(Aq);},UpdateNaisIdIncrementUnisex:function(Alt){if(this.AR_===Alt)return;
this.AR_=Alt;A.abo([this,this.Awo,this.AyV],0);},Akx:function(E){if(this.K&&this.
K.Akx)return this.K.Akx.apply(this,arguments);else return C.DeviceClass.Bvq.apply(
this,arguments);},Bvq:function(E){},AyQ:function(Aq){this.Akx(Aq);},UpdateEartagNrAssignmentMode:
function(Alo){if(this.EartagNrAssignmentMode===Alo)return;this.EartagNrAssignmentMode=
Alo;A.abo([this,this.Awh,this.AyQ],0);},N3:function(E){if(this.K&&this.K.N3)return this.
K.N3.apply(this,arguments);else return C.DeviceClass.Bvh.apply(this,arguments);}
,Bvh:function(E){},BwR:function(Aq){this.N3(Aq);},UpdateBreed:function(Ac0){if(this.
Breed===Ac0)return;this.Breed=Ac0;A.abo([this,this.Awd,this.BwR],0);},AFE:function(
E){if(this.K&&this.K.AFE)return this.K.AFE.apply(this,arguments);else return C.DeviceClass.
BvI.apply(this,arguments);},BvI:function(E){},BwU:function(Aq){this.AFE(Aq);},UpdateMiddlewareVersions:
function(Qi,A1i,A1j,A1q,A09){this.SB.OnSetTimestamp(Qi);this.SB.AFz(A1i);this.SB.
AFF(A1j);this.SB.AFP(A1q);this.SB.AFe(A09);A.abo([this,this.BlD,this.BwU],0);},AFy:
function(E){if(this.K&&this.K.AFy)return this.K.AFy.apply(this,arguments);else return C.
DeviceClass.BvC.apply(this,arguments);},BvC:function(E){},BwT:function(Aq){this.
AFy(Aq);},UpdateMainboardVersions:function(Qi,A1g,A1h,A1f,A1w,A1x,A1v){this.Q1.OnSetTimestamp(
Qi);this.Q1.AFw(A1g);this.Q1.AFx(A1h);this.Q1.AFv(A1f);this.Q1.AF3(A1w);this.Q1.
AF4(A1x);this.Q1.AF2(A1v);A.abo([this,this.BlB,this.BwT],0);},AF5:function(E){if(
this.K&&this.K.AF5)return this.K.AF5.apply(this,arguments);else return C.DeviceClass.
Bv$.apply(this,arguments);},Bv$:function(E){},Bw0:function(Aq){this.AF5(Aq);},UpdateTorchboardVersions:
function(Qi,A1g,A1h,A1f,A1w,A1x,A1v){this.S0.OnSetTimestamp(Qi);this.S0.AFw(A1g);
this.S0.AFx(A1h);this.S0.AFv(A1f);this.S0.AF3(A1w);this.S0.AF4(A1x);this.S0.AF2(
A1v);A.abo([this,this.Bl1,this.Bw0],0);},AE6:function(E){if(this.K&&this.K.AE6)return this.
K.AE6.apply(this,arguments);else return C.DeviceClass.Bvg.apply(this,arguments);
},Bvg:function(E){},BwQ:function(Aq){this.AE6(Aq);},UpdateBootloaderVersions:function(
Qi,A1i,A1j,A1q,A09){this.R3.OnSetTimestamp(Qi);this.R3.AFz(A1i);this.R3.AFF(A1j);
this.R3.AFP(A1q);this.R3.AFe(A09);A.abo([this,this.Bk$,this.BwQ],0);},AFg:function(
E){if(this.K&&this.K.AFg)return this.K.AFg.apply(this,arguments);else return C.DeviceClass.
Bvp.apply(this,arguments);},Bvp:function(E){},Bbx:function(Aq){this.AFg(Aq);},UpdateDryCowListAction:
function(AK){if(this.AN8===AK)return;this.AN8=AK;A.abo([this,this.A8U,this.Bbx],
0);},AJP:function(A0_){if(this.K&&this.K.AJP)return this.K.AJP.apply(this,arguments
);else return C.DeviceClass.Bxa.apply(this,arguments);},Bxa:function(A0_){return false;
},AE4:function(E){if(this.K&&this.K.AE4)return this.K.AE4.apply(this,arguments);
else return C.DeviceClass.Bvd.apply(this,arguments);},Bvd:function(E){},AIX:function(
Aq){this.AE4(Aq);},UpdateBirthListView:function(AK){if(this.Aqs===AK)return;this.
Aqs=AK;A.abo([this,this.AEH,this.AIX],0);},BatchResetBirthNoticePending:function(
){var O;var AiY=0;var Adj=A._GetAutoObject(C.Device).An.Filter;var Be=A._GetAutoObject(
C.Helper).AOO();A._GetAutoObject(C.Device).An.Bk(Be);for(O=0;O<A._GetAutoObject(
C.Device).An.B_();O++){A._GetAutoObject(C.Helper).G8(O);A._GetAutoObject(C.Helper
).W.Ae6(false);A._GetAutoObject(C.Helper).W.Ci(A._GetAutoObject(C.Device).An);AiY++;
}A._GetAutoObject(C.Device).An.Bk(Adj);return AiY;},UpdateTransferProgress:function(
AK){if(this.AxT===AK)return;this.AxT=AK;A.abo([this,this.AS3,this.A0J],0);},AF6:
function(E){if(this.K&&this.K.AF6)return this.K.AF6.apply(this,arguments);else return C.
DeviceClass.Bwa.apply(this,arguments);},Bwa:function(E){A.ab5("%s",Qa);},A0J:function(
Aq){this.AF6(Aq);},UpdateTransferTarget:function(AK){if(this.Afr===AK)return;this.
Afr=AK;A.abo([this,this.A9A,this.BbO],0);},Ar$:function(E){if(this.K&&this.K.Ar$
)return this.K.Ar$.apply(this,arguments);else return C.DeviceClass.Bwb.apply(this
,arguments);},Bwb:function(E){A.ab5("%s",J7);},BbO:function(Aq){this.Ar$(Aq);},AsI:
function(){if(this.K&&this.K.AsI)return this.K.AsI.apply(this,arguments);else return C.
DeviceClass.BwK.apply(this,arguments);},BwK:function(){},Aw6:function(E){if(this.
K&&this.K.Aw6)return this.K.Aw6.apply(this,arguments);else return C.DeviceClass.
BvW.apply(this,arguments);},BvW:function(E){},A0D:function(Aq){this.Aw6(Aq);},UpdatePremisesID:
function(Rq){if(this.PY===Rq)return;this.PY=Rq;A.abo([this,this.ASV,this.A0D],0);
},AwZ:function(E){if(this.K&&this.K.AwZ)return this.K.AwZ.apply(this,arguments);
else return C.DeviceClass.BvK.apply(this,arguments);},BvK:function(E){},AI2:function(
Aq){this.AwZ(Aq);},UpdateMotherSelectionDriedOffFilter:function(AK){if(this.AbU===
AK)return;this.AbU=AK;A.abo([this,this.AEO,this.AI2],0);},AFl:function(E){if(this.
K&&this.K.AFl)return this.K.AFl.apply(this,arguments);else return C.DeviceClass.
Bvv.apply(this,arguments);},Bvv:function(E){},BbB:function(Aq){this.AFl(Aq);},UpdateFreshCowSpan:
function(AK){if(this.AqT===AK)return;this.AqT=AK;A.abo([this,this.A8Z,this.BbB],
0);},UpdateUSBDevice:function(BcH,BcI,Bcy){if(((this.P4.Z2===BcH)&&(this.P4.AsS===
BcI))&&(this.P4.Asl===Bcy))return;this.P4.A_3(BcH);this.P4.A_5(BcI);this.P4.A_J(
Bcy);A.abo([this,this.WE,this.Xk],0);},AF7:function(E){if(this.K&&this.K.AF7)return this.
K.AF7.apply(this,arguments);else return C.DeviceClass.Bwe.apply(this,arguments);
},Bwe:function(E){A.ab5("%s",E7);},Xk:function(Aq){this.AF7(Aq);},AxJ:function(){
if(this.K&&this.K.AxJ)return this.K.AxJ.apply(this,arguments);else return C.DeviceClass.
BwE.apply(this,arguments);},BwE:function(){},Ari:function(){if(this.K&&this.K.Ari
)return this.K.Ari.apply(this,arguments);else return C.DeviceClass.BuY.apply(this
,arguments);},BuY:function(){return false;},AqE:function(){if(this.K&&this.K.AqE
)return this.K.AqE.apply(this,arguments);else return C.DeviceClass.BuT.apply(this
,arguments);},BuT:function(){},AFS:function(E){if(this.K&&this.K.AFS)return this.
K.AFS.apply(this,arguments);else return C.DeviceClass.Bv2.apply(this,arguments);
},Bv2:function(E){},BwX:function(Aq){this.AFS(Aq);},UpdateSerialNumber:function(
AK){if(this.AhL===AK)return;this.AhL=AK;A.abo([this,this.BlQ,this.BwX],0);},Awu:
function(E){if(this.K&&this.K.Awu)return this.K.Awu.apply(this,arguments);else return C.
DeviceClass.Bu6.apply(this,arguments);},Bu6:function(E){},A0u:function(Aq){this.
Awu(Aq);},UpdateAnimalIdAutoGenerationMethod:function(BcP){if(this.AgA===BcP)return;
this.AgA=BcP;A.abo([this,this.ASC,this.A0u],0);},ACv:function(){return false;},AGz:
function(){return false;},AFU:function(E){if(this.K&&this.K.AFU)return this.K.AFU.
apply(this,arguments);else return C.DeviceClass.Bv3.apply(this,arguments);},Bv3:
function(E){},BbL:function(Aq){this.AFU(Aq);},UpdateShutdownTimer:function(AK){if(
this.AU7===AK)return;this.AU7=AK;A.abo([this,this.A9t,this.BbL],0);},Asv:function(
G){if(this.K&&this.K.Asv)return this.K.Asv.apply(this,arguments);else return C.DeviceClass.
BwA.apply(this,arguments);},BwA:function(G){},BGW:function(s){this.Asv(s);},Asc:
function(E){if(this.K&&this.K.Asc)return this.K.Asc.apply(this,arguments);else return C.
DeviceClass.Bwk.apply(this,arguments);},Bwk:function(E){},BbT:function(Aq){this.
Asc(Aq);},Asd:function(E){if(this.K&&this.K.Asd)return this.K.Asd.apply(this,arguments
);else return C.DeviceClass.Bwl.apply(this,arguments);},Bwl:function(E){},BbU:function(
Aq){this.Asd(Aq);},UpdateWeightGainsLowString:function(AK){if(this.AHq===AK)return;
this.AHq=AK;A.abo([this,this.A9J,this.BbU],0);},UpdateWeightGainsHighString:function(
AK){if(this.AHp===AK)return;this.AHp=AK;A.abo([this,this.A9I,this.BbT],0);},Aww:
function(E){if(this.K&&this.K.Aww)return this.K.Aww.apply(this,arguments);else return C.
DeviceClass.Bva.apply(this,arguments);},Bva:function(E){},Bbr:function(Aq){this.
Aww(Aq);},UpdateAnimalTypesWeightGainsString:function(AK){if(this.ABU===AK)return;
this.ABU=AK;A.abo([this,this.A8N,this.Bbr],0);},Asb:function(E){if(this.K&&this.
K.Asb)return this.K.Asb.apply(this,arguments);else return C.DeviceClass.Bwj.apply(
this,arguments);},Bwj:function(E){},BbS:function(Aq){this.Asb(Aq);},Ase:function(
E){if(this.K&&this.K.Ase)return this.K.Ase.apply(this,arguments);else return C.DeviceClass.
Bwp.apply(this,arguments);},Bwp:function(E){},BbX:function(Aq){this.Ase(Aq);},UpdateWeightValueBirthString:
function(AK){if(this.AHt===AK)return;this.AHt=AK;A.abo([this,this.A9M,this.BbX],
0);},UpdateWeightGainsAverageString:function(AK){if(this.AHo===AK)return;this.AHo=
AK;A.abo([this,this.A9H,this.BbS],0);},AwJ:function(E){if(this.K&&this.K.AwJ)return this.
K.AwJ.apply(this,arguments);else return C.DeviceClass.Bvr.apply(this,arguments);
},Bvr:function(E){},BwS:function(Aq){this.AwJ(Aq);},UpdateEvaluationAnimalType:function(
Eo){if(this.ACP===Eo)return;this.ACP=Eo;A.abo([this,this.Blk,this.BwS],0);},UpdateStartScreen:
function(AK){if(this.AxL===AK)return;this.AxL=AK;A.abo([this,this.BlR,this.BwY],
0);},Aw_:function(E){if(this.K&&this.K.Aw_)return this.K.Aw_.apply(this,arguments
);else return C.DeviceClass.Bv4.apply(this,arguments);},Bv4:function(E){},BwY:function(
Aq){this.Aw_(Aq);},AD5:function(){if(this.K&&this.K.AD5)return this.K.AD5.apply(
this,arguments);else return C.DeviceClass.BuW.apply(this,arguments);},BuW:function(
){return 1;},AD6:function(){if(this.K&&this.K.AD6)return this.K.AD6.apply(this,arguments
);else return C.DeviceClass.BuX.apply(this,arguments);},BuX:function(){return 1;
},GetCommitCount:function(){return 2188;},GetCommitEpoch:function(){return 1715958201;
},GetCommitHash:function(){return A.kR.Bh_;},GetVersionMajor:function(){return 0;
},GetVersionMinor:function(){return 9;},GetVersionRev:function(){return 11;},AFD:
function(E){if(this.K&&this.K.AFD)return this.K.AFD.apply(this,arguments);else return C.
DeviceClass.BvG.apply(this,arguments);},BvG:function(E){},BbF:function(Aq){this.
AFD(Aq);},UpdateMaximumAgeNewOnFarm:function(AK){if(this.Av3===AK)return;this.Av3=
AK;A.abo([this,this.A9c,this.BbF],0);},Axe:function(E){if(this.K&&this.K.Axe)return this.
K.Axe.apply(this,arguments);else return C.DeviceClass.Bwc.apply(this,arguments);
},Bwc:function(E){},A0K:function(Aq){this.Axe(Aq);},UpdateTransponderAssignmentIdChangeMethod:
function(Ay_){if(this.Ak5===Ay_)return;this.Ak5=Ay_;A.abo([this,this.AS4,this.A0K
],0);},BatchResetPurchasedNoticePending:function(){var O;var AiY=0;var Adj=A._GetAutoObject(
C.Device).An.Filter;var Be=A._GetAutoObject(C.Helper).Avx();A._GetAutoObject(C.Device
).An.Bk(Be);for(O=0;O<A._GetAutoObject(C.Device).An.B_();O++){A._GetAutoObject(C.
Helper).G8(O);A._GetAutoObject(C.Helper).W.Ae6(false);A._GetAutoObject(C.Helper).
W.Ci(A._GetAutoObject(C.Device).An);AiY++;}A._GetAutoObject(C.Device).An.Bk(Adj);
return AiY;},BnF:function(E){},UpdateMassRecordingAutomatic:function(AK){if(this.
ARV===AK)return;this.ARV=AK;A.abo([this,this.BlC,this.BnF],0);},Nm:function(E){if(
this.K&&this.K.Nm)return this.K.Nm.apply(this,arguments);else return C.DeviceClass.
Bwq.apply(this,arguments);},Bwq:function(E){},Bw1:function(Aq){this.Nm(Aq);},UpdateWhereAbouts:
function(AfN){if(this.WhereAbouts===AfN)return;this.WhereAbouts=AfN;A.abo([this,
this.Awr,this.Bw1],0);},ArI:function(E){if(this.K&&this.K.ArI)return this.K.ArI.
apply(this,arguments);else return C.DeviceClass.Bu1.apply(this,arguments);},Bu1:
function(E){},Bbl:function(Aq){this.ArI(Aq);},ArJ:function(E){if(this.K&&this.K.
ArJ)return this.K.ArJ.apply(this,arguments);else return C.DeviceClass.Bu2.apply(
this,arguments);},Bu2:function(E){},Bbm:function(Aq){this.ArJ(Aq);},UpdateActiveMassRecordingFields:
function(AK){if(this.ABM===AK)return;this.ABM=AK;A.abo([this,this.A8E,this.Bbl],
0);},UpdateActiveMassRecordingFieldsOrder:function(AK){if(this.ABN===AK)return;this.
ABN=AK;A.abo([this,this.A8F,this.Bbm],0);},Ass:function(G){if(this.K&&this.K.Ass
)return this.K.Ass.apply(this,arguments);else return C.DeviceClass.Bwv.apply(this
,arguments);},Bwv:function(G){},BGR:function(s){this.Ass(s);},AFB:function(E){if(
this.K&&this.K.AFB)return this.K.AFB.apply(this,arguments);else return C.DeviceClass.
BvD.apply(this,arguments);},BvD:function(E){},AI0:function(Aq){this.AFB(Aq);},UpdateMassRecordingDateOfBirthMandatory:
function(AK){if(this.AeP===AK)return;this.AeP=AK;A.abo([this,this.AEL,this.AI0],
0);},AFA:function(E){this.UpdateMassRecordingCounter(E);},UpdateMassRecordingCounter:
function(AK){if(this.Av1===AK)return;this.Av1=AK;A.abo([this,this.A9a,this.AFA],
0);},AjC:function(){if(this.K&&this.K.AjC)return this.K.AjC.apply(this,arguments
);else return C.DeviceClass.BuR.apply(this,arguments);},BuR:function(){return false;
},Aqq:function(){if(this.K&&this.K.Aqq)return this.K.Aqq.apply(this,arguments);else
return C.DeviceClass.BuQ.apply(this,arguments);},BuQ:function(){return false;},Aqp:
function(){if(this.K&&this.K.Aqp)return this.K.Aqp.apply(this,arguments);else return C.
DeviceClass.BuP.apply(this,arguments);},BuP:function(){return false;},AuX:function(
){if(this.K&&this.K.AuX)return this.K.AuX.apply(this,arguments);else return C.DeviceClass.
BuS.apply(this,arguments);},BuS:function(){return false;},AwW:function(E){if(this.
K&&this.K.AwW)return this.K.AwW.apply(this,arguments);else return C.DeviceClass.
BvF.apply(this,arguments);},BvF:function(E){},BbE:function(Aq){this.AwW(Aq);},UpdateMaxWeightValuePrecision:
function(AK){if(this.OP===AK)return;this.OP=AK;A.abo([this,this.A9b,this.BbE],0);
},Aw3:function(E){if(this.K&&this.K.Aw3)return this.K.Aw3.apply(this,arguments);
else return C.DeviceClass.BvR.apply(this,arguments);},BvR:function(E){},BbI:function(
Aq){this.Aw3(Aq);},UpdateNoNaisIdListActions:function(AK){if(this.ASk===AK)return;
this.ASk=AK;A.abo([this,this.A9f,this.BbI],0);},ResetNoNaisIdListActions:function(
G){if(this.K&&this.K.ResetNoNaisIdListActions)return this.K.ResetNoNaisIdListActions.
apply(this,arguments);else return C.DeviceClass.Bwx.apply(this,arguments);},Bwx:
function(G){},BGT:function(s){this.ResetNoNaisIdListActions(s);},Aw4:function(E){
if(this.K&&this.K.Aw4)return this.K.Aw4.apply(this,arguments);else return C.DeviceClass.
BvS.apply(this,arguments);},BvS:function(E){},BbJ:function(Aq){this.Aw4(Aq);},UpdateNoTransponderListActions:
function(AK){if(this.ASp===AK)return;this.ASp=AK;A.abo([this,this.A9g,this.BbJ],
0);},ResetNoTransponderListActions:function(G){if(this.K&&this.K.ResetNoTransponderListActions
)return this.K.ResetNoTransponderListActions.apply(this,arguments);else return C.
DeviceClass.Bwy.apply(this,arguments);},Bwy:function(G){},BGU:function(s){this.ResetNoTransponderListActions(
s);},Axk:function(E){if(this.K&&this.K.Axk)return this.K.Axk.apply(this,arguments
);else return C.DeviceClass.Bwr.apply(this,arguments);},Bwr:function(E){},BbY:function(
Aq){this.Axk(Aq);},UpdateYoungNoTransponderListActions:function(AK){if(this.AV$===
AK)return;this.AV$=AK;A.abo([this,this.A9O,this.BbY],0);},ResetYoungNoTransponderListActions:
function(G){if(this.K&&this.K.ResetYoungNoTransponderListActions)return this.K.ResetYoungNoTransponderListActions.
apply(this,arguments);else return C.DeviceClass.BwB.apply(this,arguments);},BwB:
function(G){},BGX:function(s){this.ResetYoungNoTransponderListActions(s);},Axf:function(
E){if(this.K&&this.K.Axf)return this.K.Axf.apply(this,arguments);else return C.DeviceClass.
Bwd.apply(this,arguments);},Bwd:function(E){},A0L:function(Aq){this.Axf(Aq);},UpdateTransponderUnlinkIdChangeMethod:
function(Ay_){if(this.An7===Ay_)return;this.An7=Ay_;A.abo([this,this.AS5,this.A0L
],0);},Asr:function(AoG,AJl){if(this.K&&this.K.Asr)return this.K.Asr.apply(this,
arguments);else return C.DeviceClass.Bwt.apply(this,arguments);},Bwt:function(AoG
,AJl){this.Gf.E6();this.Gf.AgN=AoG;this.Gf.AU6=AJl;this.Gf.E5(1);A._GetAutoObject(
C.Device).A3(110,true,A.jV,0,[this,this.BAS]);},BAS:function(G){var As=(C.PopupContext.
isPrototypeOf(G)?G:null);if(!!As&&(As.PopupState===9))A.aaS([this,this.BCw],this
);},BCw:function(G){this.Gf.E5(2);this.AxJ();A._GetAutoObject(C.Device).A3(110,false
,A.jV,0,null);},AE5:function(E){if(this.K&&this.K.AE5)return this.K.AE5.apply(this
,arguments);else return C.DeviceClass.Bve.apply(this,arguments);},Bve:function(E
){},Bbt:function(Aq){this.AE5(Aq);},UpdateBirthRegistrationsListResetOnExport:function(
AK){if(this.AM4===AK)return;this.AM4=AK;A.abo([this,this.A8Q,this.Bbt],0);},AFM:
function(E){if(this.K&&this.K.AFM)return this.K.AFM.apply(this,arguments);else return C.
DeviceClass.BvX.apply(this,arguments);},BvX:function(E){},BbK:function(Aq){this.
AFM(Aq);},UpdatePurchasedListResetOnExport:function(AK){if(this.AUj===AK)return;
this.AUj=AK;A.abo([this,this.A9i,this.BbK],0);},Bo2:function(){},AEE:function(){
return this.Ik;},Awb:function(){return this.Aa6;},Awe:function(){return this.AmF;
},ASY:function(){return this.ScanState;},AEM:function(){return this.MeasureState;
},AEQ:function(){return this.Lw;},A88:function(){return this.Language;},ArB:function(
){return this.TemperatureUnit;},A8T:function(){return this.AM$;},ASP:function(){
return this.AEq;},Awq:function(){return this.OverlayMenu;},A9B:function(){return this.
AcG;},AS0:function(){return this.SyncState;},A9C:function(){return this.AsT;},AER:
function(){return this.AVU;},ASX:function(){return this.RatingMode;},Ary:function(
){return this.AmT;},AS2:function(){return this.AVz;},BlJ:function(){return this.
AUk;},Bk8:function(){return this.AutoRegistrationMode;},ASZ:function(){return this.
OV;},Un:function(){return this.A2;},Uo:function(){return this.AF;},AES:function(
){return this.KZ;},ASO:function(){return this.MassUnit;},A8D:function(){return this.
Pn;},ASB:function(){return this.AuI;},A8O:function(){return this.AutoActions;},PT:
function(){return this.AnimalType;},A9K:function(){return this.WeightRecordingMode;
},ASU:function(){return this.AGl;},AEJ:function(){return this.HG;},A8I:function(
){return this.AdT;},A9L:function(){return this.WeightRecordingScope;},WD:function(
){return this.Gender;},Awj:function(){return this.Aq7;},Awi:function(){return this.
Aq6;},AEG:function(){return this.Km;},A8K:function(){return this.AMi;},A8W:function(
){return this.AmS;},AEF:function(){return this.D9;},A9G:function(){return this.AVW;
},A8Y:function(){return this.AOK;},A8M:function(){return this.ABT;},A9w:function(
){return this.AG6;},A9x:function(){return this.AG7;},A80:function(){return this.
AqU;},A9e:function(){return this.AEs;},A9d:function(){return this.AEr;},Awn:function(
){return this.AR9;},Awm:function(){return this.AR8;},A8S:function(){return this.
Aqu;},A8B:function(){return this.ABL;},A8C:function(){return this.Aqg;},Anr:function(
){return this.Il;},ASH:function(){return this.ACH;},ASI:function(){return this.ACI;
},AEK:function(){return this.Au9;},Anu:function(){return this.AjV;},ASQ:function(
){return this.Av8;},Awo:function(){return this.AR_;},Awh:function(){return this.
EartagNrAssignmentMode;},Awd:function(){return this.Breed;},BlD:function(){return this.
SB;},BlB:function(){return this.Q1;},Bl1:function(){return this.S0;},Bk$:function(
){return this.R3;},A8U:function(){return this.AN8;},AEH:function(){return this.Aqs;
},AS3:function(){return this.AxT;},A9A:function(){return this.Afr;},ASV:function(
){return this.PY;},AEO:function(){return this.AbU;},A8Z:function(){return this.AqT;
},WE:function(){return this.P4;},BlQ:function(){return this.AhL;},ASC:function(){
return this.AgA;},A9t:function(){return this.AU7;},A9I:function(){return this.AHp;
},A9J:function(){return this.AHq;},A8N:function(){return this.ABU;},A9H:function(
){return this.AHo;},A9M:function(){return this.AHt;},Blk:function(){return this.
ACP;},BlR:function(){return this.AxL;},A9c:function(){return this.Av3;},AS4:function(
){return this.Ak5;},BlC:function(){return this.ARV;},Awr:function(){return this.
WhereAbouts;},A8E:function(){return this.ABM;},A8F:function(){return this.ABN;},
AEL:function(){return this.AeP;},A9a:function(){return this.Av1;},A9b:function(){
return this.OP;},A9f:function(){return this.ASk;},A9g:function(){return this.ASp;
},A9O:function(){return this.AV$;},AS5:function(){return this.An7;},A8Q:function(
){return this.AM4;},A9i:function(){return this.AUj;},_Init:function(aArg){C.Table.
_Init.call(this.An={I:this},0);C.Table._Init.call(this.Bt={I:this},0);C.Table._Init.
call(this.Agy={I:this},0);A.Core.A$2._Init.call(this.AnP={I:this},0);C.Table._Init.
call(this.Pr={I:this},0);this.__proto__=C.DeviceClass;this.An.OnSetId(0);this.Bt.
OnSetId(1);this.Agy.OnSetId(3);this.Pr.OnSetId(4);this.OV=A._NewObject(C.Transponder
,0);this.SB=A._NewObject(C.AxI,0);this.Q1=A._NewObject(C.AvA,0);this.S0=A._NewObject(
C.AvA,0);this.R3=A._NewObject(C.AxI,0);this.P4=A._NewObject(C.Baj,0);this.Gf=A._NewObject(
C.VU,0);var J8=this._variants();if(J8){this.K={};J8._Init.call(this,aArg);}A.h7++;
},_Done:function(){if(this.K)this.K._Done.call(this);this.__proto__=null;this.An.
_Done();this.Bt._Done();this.Agy._Done();this.AnP._Done();this.Pr._Done();A.h7--;
},_ReInit:function(){this.An._ReInit();this.Bt._ReInit();this.Agy._ReInit();this.
AnP._ReInit();this.Pr._ReInit();if(this.K)this.K._ReInit.call(this);},_Mark:function(
D){var B;if((B=this.OV)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.SB)&&(B._cycle
!=D))B._Mark(B._cycle=D);if((B=this.Q1)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=
this.S0)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.R3)&&(B._cycle!=D))B._Mark(
B._cycle=D);if((B=this.P4)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Gf)&&(B.
_cycle!=D))B._Mark(B._cycle=D);if((B=this.An)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Bt)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Agy)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.AnP)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Pr)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);if(this.K)this.K._Mark(
D);},_variants:function(){return A.acs.DeviceClass._variants();},K:null,I:null,_cycle:
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
A5:A.jV,Abk:function(){var Aw=A._NewObject(C.StringFilterCriterion,0);Aw.E$(this
);return Aw;},E$:function(AI){C.FilterCriterion.E$.call(this,AI);var Aw=(C.StringFilterCriterion.
isPrototypeOf(AI)?AI:null);if(!!Aw)this.A5=Aw.A5;},_Init:function(aArg){C.FilterCriterion.
_Init.call(this,aArg);this.__proto__=C.StringFilterCriterion;},_className:"Device::StringFilterCriterion"
};C.Table={CF:function(Ad,A4){if(this.K&&this.K.CF)return this.K.CF.apply(this,arguments
);else return C.ITable.CF.apply(this,arguments);},V3:function(Ad,A4){if(this.K&&
this.K.V3)return this.K.V3.apply(this,arguments);else return C.ITable.V3.apply(this
,arguments);},H4:function(Ad,A4){if(this.K&&this.K.H4)return this.K.H4.apply(this
,arguments);else return C.ITable.H4.apply(this,arguments);},OnSetId:function(E){
if(this.K&&this.K.OnSetId)return this.K.OnSetId.apply(this,arguments);else return C.
ITable.OnSetId.apply(this,arguments);},B_:function(){if(this.K&&this.K.B_)return this.
K.B_.apply(this,arguments);else return C.ITable.B_.apply(this,arguments);},Bk:function(
E){if(this.K&&this.K.Bk)return this.K.Bk.apply(this,arguments);else return C.ITable.
Bk.apply(this,arguments);},V4:function(Ad,A4){if(this.K&&this.K.V4)return this.K.
V4.apply(this,arguments);else return C.ITable.V4.apply(this,arguments);},Sm:function(
Ad,A4){if(this.K&&this.K.Sm)return this.K.Sm.apply(this,arguments);else return C.
ITable.Sm.apply(this,arguments);},OC:function(){if(this.K&&this.K.OC)return this.
K.OC.apply(this,arguments);else return C.ITable.OC.apply(this,arguments);},OE:function(
AoS){if(this.K&&this.K.OE)return this.K.OE.apply(this,arguments);else return C.ITable.
OE.apply(this,arguments);},YI:function(){if(this.K&&this.K.YI)return this.K.YI.apply(
this,arguments);else return C.ITable.YI.apply(this,arguments);},ZM:function(Ad,A4
,C0){if(this.K&&this.K.ZM)return this.K.ZM.apply(this,arguments);else return C.ITable.
ZM.apply(this,arguments);},Ho:function(Ad,A4,C0){if(this.K&&this.K.Ho)return this.
K.Ho.apply(this,arguments);else return C.ITable.Ho.apply(this,arguments);},ZL:function(
Ad,A4,C0){if(this.K&&this.K.ZL)return this.K.ZL.apply(this,arguments);else return C.
ITable.ZL.apply(this,arguments);},N9:function(Ad,A4,C0){if(this.K&&this.K.N9)return this.
K.N9.apply(this,arguments);else return C.ITable.N9.apply(this,arguments);},ZK:function(
Ad,A4,C0){if(this.K&&this.K.ZK)return this.K.ZK.apply(this,arguments);else return C.
ITable.ZK.apply(this,arguments);},LV:function(aColumn,A7){if(this.K&&this.K.LV)return this.
K.LV.apply(this,arguments);else return C.ITable.LV.apply(this,arguments);},KR:function(
Ad,A4){if(this.K&&this.K.KR)return this.K.KR.apply(this,arguments);else return C.
ITable.KR.apply(this,arguments);},UE:function(Ad,A4,C0){if(this.K&&this.K.UE)return this.
K.UE.apply(this,arguments);else return C.ITable.UE.apply(this,arguments);},AgZ:function(
aColumn,A7){if(this.K&&this.K.AgZ)return this.K.AgZ.apply(this,arguments);else return C.
ITable.AgZ.apply(this,arguments);},E6:function(){if(this.K&&this.K.E6)return this.
K.E6.apply(this,arguments);else return C.ITable.E6.apply(this,arguments);},AjL:function(
aColumn,A7){if(this.K&&this.K.AjL)return this.K.AjL.apply(this,arguments);else return C.
ITable.AjL.apply(this,arguments);},Aem:function(aColumn,A7){if(this.K&&this.K.Aem
)return this.K.Aem.apply(this,arguments);else return C.ITable.Aem.apply(this,arguments
);},HK:function(){if(this.K&&this.K.HK)return this.K.HK.apply(this,arguments);else
return C.ITable.HK.apply(this,arguments);},Abs:function(){if(this.K&&this.K.Abs)
return this.K.Abs.apply(this,arguments);else return C.ITable.Abs.apply(this,arguments
);},QK:function(){if(this.K&&this.K.QK)return this.K.QK.apply(this,arguments);else
return C.ITable.QK.apply(this,arguments);},_Init:function(aArg){C.ITable._Init.call(
this,aArg);this.__proto__=C.Table;var J8=this._variants();if(J8){this.K={};J8._Init.
call(this,aArg);}},_Done:function(){if(this.K)this.K._Done.call(this);this.__proto__=
C.ITable;C.ITable._Done.call(this);},_ReInit:function(){C.ITable._ReInit.call(this
);if(this.K)this.K._ReInit.call(this);},_Mark:function(D){C.ITable._Mark.call(this
,D);if(this.K)this.K._Mark(D);},_variants:function(){return A.acs.Table._variants(
);},K:null,_className:"Device::Table"};C.TableId={Animal:0,Rating:1,Undefined:2,
AnimalGroup:3,CalfDeregistrations:4};C.ScanState={Idle:0,Progress:1,IdScanned:2,
NotFound:3,Error:4,LAST:5};C.RatedAttribute={None:0,Feed:1,Appearance:2,Respiratory:
3,Faeces:4};C.ConverterClass={M6:null,Ak2:function(AoQ){var Bdo;var Auu=this.AVo(
AoQ/100,0,A._GetAutoObject(C.Device).TemperatureUnit);Bdo=A.abk(Auu,0,1);return Bdo;
},Baa:function(Nu){if(Nu<=0)return 0;else if(Nu<=1)return 5;else if(Nu<=2)return 3;
else if(Nu<=4)return 2;else if(Nu<=6)return 1;else if(Nu<=8)return 4;else return 0;
},Ad2:function(Nu){var a=0;switch(Nu){case 3:a=2;break;case 2:a=4;break;case 1:a=
6;break;case 0:a=0;break;case 4:a=8;break;case 5:a=1;break;default:A.ab5("%s",Od
);}return a;},AsK:function(Eo,Ru){var Nw=A._GetAutoObject(C.Converter).Ajn(Ru,Eo
);switch(Nw){case 3:return 1;case 2:return 2;case 1:return 3;case 0:return 4;default:
throw new Error(Qb+Nw.toFixed());}},AhT:function(){var B;var D8=A._NewObject(A.Core.
Bs,0).Initialize(A._GetAutoObject(C.Helper).Dv());D8.AnC(0);D8.AnF(0);D8.AnI(0);
return((B=(D8.JW()|0))<0)?B+0x100000000:B;},Bic:function(Ats){var CO;switch(Ats){
case 36:CO=ML;break;case 40:CO=S$;break;case 56:CO=UW;break;case 70:CO=Z6;break;
case 100:CO=W9;break;case 124:CO=Iu;break;case 156:CO=UX;break;case 158:CO=Z7;break;
case 191:CO=UY;break;case 196:CO=Z8;break;case 203:CO=W_;break;case 208:CO=Z9;break;
case 233:CO=Z_;break;case 246:CO=UZ;break;case 250:CO=W$;break;case 276:CO=O7;break;
case 300:CO=Z$;break;case 348:CO=Oe;break;case 372:CO=Rn;break;case 380:CO=Xa;break;
case 392:CO=Xb;break;case 428:CO=Ta;break;case 440:CO=Xc;break;case 442:CO=Aaa;break;
case 470:CO=Xd;break;case 528:CO=Xe;break;case 578:CO=Tb;break;case 616:CO=Tc;break;
case 620:CO=Td;break;case 642:CO=Aab;break;case 643:CO=Te;break;case 703:CO=Aac;
break;case 705:CO=AfB;break;case 724:CO=Aad;break;case 752:CO=Xf;break;case 756:
CO=Aae;break;case 792:CO=Xg;break;case 804:CO=AhX;break;case 826:CO=K1;break;case
840:CO=AcN;break;default:CO=Ats.toFixed();}return CO;},Ak$:function(MQ){var Aas;
if((MQ<10000)&&(A._GetAutoObject(C.Device).OP===2))Aas=2;else if((MQ<100000)&&!!
A._GetAutoObject(C.Device).OP)Aas=1;else Aas=0;return this.S_(MQ,Aas,false);},Ax6:
function(MQ,Aas){return this.S_(MQ,Aas,false);},S_:function(MQ,Aas,BAl){var B;var
AlG=A.jV;switch(A._GetAutoObject(C.Device).MassUnit){case 0:if(BAl)AlG=A.abl(MQ,
0,0);else{var BeM=MQ<0;if(Aas<3)MQ=MQ+(((BeM?-1:1)*5)*(Math.pow(10,2-Aas)|0));AlG=(((((
B=MQ)>-2147483648)?Math.abs(B):B)/1000)|0).toFixed();if(Aas>0)AlG=AlG+(Ly+A.abV(
A.abl((((B=MQ)>-2147483648)?Math.abs(B):B)%1000,3,10),Aas));if(BeM)AlG=AhY+AlG;}
break;case 1:AlG=A.abk(MQ/453.592,0,Aas);break;default:A.ab5("%s%s",Aof,A._GetAutoObject(
C.Device).MassUnit.toFixed());}return AlG;},Rj:function(Ix){var A4Q=Ix.toFixed();
var Bg4=A4Q.length;if((Bg4>=14)&&(Bg4<=15)){var A2E=this.AxW(Ix);var Bza=A._GetAutoObject(
C.Converter).Bic(A2E);A4Q=(Bza+Of)+A.abm(A._GetAutoObject(C.Helper).VZ(Ix,0,12),
12,10);}return A4Q;},AmW:function(L8){switch(L8){case 0:return A.aaL(A.ach.AQJ);
case 1:return A.aaL(A.ach.ADM);case 2:return A.aaL(A.ach.ADQ);default:{A.ab5("%s%e"
,Xh,L8);return null;}}},A5s:function(ByI){switch(ByI){case 0:return A.aaL(A.ach.
AvJ);case 1:return A.aaL(A.ach.ADI);case 2:return A.aaL(A.ach.AQC);default:throw new
Error(Aaf);}},Ad0:function(AJv){switch(AJv){case 0:case 14:return A.aaL(A.ach.AjW
);case 2:return A.aaL(A.ach.Arc);case 1:return A.aaL(A.ach.Ag7);case 3:switch(A.
_GetAutoObject(C.Device).MassUnit){case 0:return A.aaL(A.ach.ADW);case 1:return A.
aaL(A.ach.ADX);default:throw new Error(AfC+A._GetAutoObject(C.Device).MassUnit.toFixed(
));}break;case 4:return A.aaL(A.ach.AP0);case 5:return A.aaL(A.ach.AP1);case 6:return A.
aaL(A.ach.AP6);case 7:return A.aaL(A.ach.APm);case 8:case 13:return A.aaL(A.ach.
APt);case 9:return A.aaL(A.ach.ADj);case 10:return A.aaL(A.ach.APs);case 12:return A.
aaL(A.ach.APu);case 11:return A.aaL(A.ach.AQa);default:throw new Error(AhZ+AJv.toFixed(
));}},BhE:function(Azc){switch(Azc){case 0:return A.aaL(A.ach.AQB);case 3:return A.
aaL(A.ach.Arc);case 1:return A.aaL(A.ach.Ag7);case 2:return A._GetAutoObject(A.acj.
DU).BdN();default:throw new Error(AhZ+Azc.toFixed());}},Bib:function(Ats){switch(
Ats){case 977:return AcO;case 978:return U0;case 980:return Aog;case 981:return Aoh;
case 982:return Aoi;case 983:return Aoj;case 984:return Alc;case 985:return AsZ;
default:return A.aaR(A.acf.Unknown);}},Biw:function(Ac2){switch(Ac2){case 1:return 0x278A;
case 2:return 0x278B;case 3:return 0x278C;case 4:return 0x278D;case 5:return 0x278E;
case 6:return 0x278F;case 7:return 0x2790;case 8:return 0x2791;case 9:return 0x2792;
case 10:return 0x2793;default:return 0x20;}},Bqw:function(Ix){if(!Ix)return-1;return(
Ix%100000000)|0;},Bi_:function(AoP,aFilter){var B;if(!aFilter)return Ax8;var Aph=
Ax9;var Aw=aFilter.AOS();while(!!Aw){Aph=Aph+A._GetAutoObject(C.Helper).A64(AoP,
Aw);Aw=aFilter.AOX(Aw);if(!!Aw)Aph=Aph+O8;}Aph=Aph+Ro;return Aph;},A7K:function(
Bcr){var HS=0;switch(Bcr){case 14:HS=2;break;case 13:HS=4;break;case 6:HS=36;break;
case 25:HS=17;break;case 11:HS=9;break;case 17:HS=11;break;case 0:HS=39;break;case
10:HS=26;break;case 12:HS=12;break;case 5:HS=14;break;case 3:HS=15;break;case 1:
HS=10;break;case 8:HS=16;break;case 18:HS=18;break;case 4:HS=20;break;case 19:HS=
21;break;case 20:HS=24;break;case 26:HS=22;break;case 15:HS=27;break;case 21:HS=
28;break;case 22:HS=29;break;case 23:HS=30;break;case 9:HS=31;break;case 27:HS=33;
break;case 2:HS=13;break;case 24:HS=32;break;case 7:HS=35;break;case 16:HS=37;break;
default:A.ab5("%s%e",Ax_,Bcr);}return HS;},BhD:function(Azc){switch(Azc){case 0:
return 1;case 3:return 0;case 1:return 2;case 2:switch(A._GetAutoObject(C.Device
).MassUnit){case 0:return 3;case 1:return 4;default:throw new Error(AfC+A._GetAutoObject(
C.Device).MassUnit.toFixed());}break;default:throw new Error(AhZ+Azc.toFixed());
}},Ajr:function(Ao0){switch(Ao0){case 0:switch(A._GetAutoObject(C.Device).MassUnit
){case 0:return A.aaL(A.ach.APX);case 1:return A.aaL(A.ach.APW);default:throw new
Error(AfC+A._GetAutoObject(C.Device).MassUnit.toFixed());}break;case 1:return A.
aaL(A.ach.AQz);case 9:return A.aaL(A.ach.APT);case 4:return A.aaL(A.ach.AQW);case
6:return A.aaL(A.ach.AQX);case 8:return A.aaL(A.ach.AP7);case 2:return A.aaL(A.ach.
AQ1);case 3:return A.aaL(A.ach.AQV);case 7:return A.aaL(A.ach.AQ2);case 5:return A.
aaL(A.ach.AQ3);case 10:switch(A._GetAutoObject(C.Device).MassUnit){case 0:return A.
aaL(A.ach.AQ_);case 1:return A.aaL(A.ach.AQ9);default:throw new Error(AfC+A._GetAutoObject(
C.Device).MassUnit.toFixed());}break;case 11:return A.aaL(A.ach.AQb);case 12:return A.
aaL(A.ach.AQD);case 16:return A.aaL(A.ach.AQE);case 19:case 13:case 14:case 18:case
15:case 17:return A.aaL(A.aci.TR);default:throw new Error(U1+Ao0.toFixed());}},ANI:
function(Ats){switch(Ats){case 40:return 1;case 56:return 3;case 70:return 2;case
100:return 4;case 124:return 5;case 156:return 7;case 158:return 36;case 191:return 17;
case 196:return 8;case 203:return 9;case 208:return 11;case 233:return 12;case 246:
return 14;case 250:return 15;case 276:return 10;case 300:return 16;case 348:return 18;
case 372:return 19;case 380:return 20;case 392:return 21;case 428:return 24;case
440:return 22;case 442:return 23;case 470:return 25;case 528:return 26;case 578:
return 27;case 616:return 28;case 620:return 29;case 642:return 30;case 643:return 31;
case 703:return 34;case 705:return 33;case 724:return 13;case 752:return 32;case
756:return 6;case 792:return 35;case 804:return 37;case 826:return 38;case 840:return 39;
default:return 0;}},S3:function(Ix){var A2E=this.AxW(Ix);return this.ANI(A2E);},
AxW:function(Ix){return A._GetAutoObject(C.Helper).VZ(Ix,12,3)|0;},Bau:function(
AoU,Eo){if(AoU<A._GetAutoObject(C.Helper).ADf(Eo))return 1;else if(AoU<A._GetAutoObject(
C.Helper).ADe(Eo))return 2;else return 3;},AC3:function(Bym){switch(Bym){case 1:
return 1;case 2:return 2;case 3:return 3;case 4:return 4;case 5:return 5;case 6:
return 6;case 7:return 7;case 8:return 8;case 9:return 9;case 10:return 10;case 11:
return 11;case 12:return 12;case 13:return 13;case 14:return 14;case 15:return 15;
case 16:return 16;default:return 0;}},AVo:function(A7,AJn,AJo){if(AJn===AJo)return A7;
if(!AJn&&(AJo===1)){var result=((A7*9)/5)+32;return result;}if((AJn===1)&&!AJo){
var result=((A7-32)*5)/9;return result;}throw new Error(((As0+AJn.toFixed())+Ax$
)+AJo.toFixed());},A6N:function(Eb){switch(Eb){case 0:return Aya;case 1:return A.
jV;case 2:return Ayb;case 3:return Aok;case 4:return A.aaR(A.acf.Contains);case 5:
return AfD;default:{A.ab5("%s%e",Aol,Eb);return A.jV;}}},A5R:function(Ac0){return this.
M6.Ael(Ac0);},BjS:function(Ac0){return this.M6.AmH(Ac0);},BhV:function(Atr){var AAw=
0;switch(Atr){case 0:AAw=1;break;case 1:AAw=2;break;case 2:AAw=3;break;case 3:AAw=
4;break;default:A.ab5("%s%e",IX,Atr);}return AAw;},Ajn:function(A03,Eo){if(A03>=
A._GetAutoObject(C.Helper).A6Z(Eo))return 3;else if(A03>=A._GetAutoObject(C.Helper
).AC4(Eo))return 2;else if(A03<A._GetAutoObject(C.Device).AcG)return 0;else return 1;
},AqB:function(HS){var BN=-1;switch(HS){case 0:BN=0;break;case 1:BN=40;break;case
2:BN=70;break;case 3:BN=56;break;case 4:BN=100;break;case 5:BN=124;break;case 6:
BN=756;break;case 7:BN=156;break;case 8:BN=196;break;case 9:BN=203;break;case 10:
BN=276;break;case 11:BN=208;break;case 12:BN=233;break;case 13:BN=724;break;case
14:BN=246;break;case 15:BN=250;break;case 16:BN=300;break;case 17:BN=191;break;case
18:BN=348;break;case 19:BN=372;break;case 20:BN=380;break;case 21:BN=392;break;case
22:BN=440;break;case 23:BN=442;break;case 24:BN=428;break;case 25:BN=470;break;case
26:BN=528;break;case 27:BN=578;break;case 28:BN=616;break;case 29:BN=620;break;case
30:BN=642;break;case 31:BN=643;break;case 32:BN=752;break;case 33:BN=705;break;case
34:BN=703;break;case 35:BN=792;break;case 36:BN=158;break;case 37:BN=804;break;case
38:BN=826;break;case 39:BN=840;break;default:throw new Error(Aom+HS.toFixed());}
return BN;},A$_:function(Ix){return A._GetAutoObject(C.Helper).VZ(Ix,8,2)|0;},AVF:
function(Ix){var BAg=this.A$_(Ix);return this.AC3(BAg);},AMa:function(Eh){var Rw=
19;switch(Eh){case 0:break;case 4:Rw=7;break;case 32:case 2048:Rw=9;break;case 4096:
Rw=11;break;case 32768:Rw=14;break;case 524288:Rw=18;break;case 65536:Rw=15;break;
case 128:Rw=17;break;case 16:Rw=1;break;case 16384:Rw=12;break;case 1024:Rw=8;break;
case 2:Rw=3;break;case 131072:Rw=16;break;case 1:Rw=2;break;case 8:Rw=5;break;case
256:Rw=10;break;default:throw new Error(As1+Eh.toFixed());}return Rw;},A$9:function(
Ix){return A._GetAutoObject(C.Helper).VZ(Ix,10,2)|0;},_Init:function(aArg){C.M6.
_Init.call(this.M6={I:this},0);this.__proto__=C.ConverterClass;A.h7++;},_Done:function(
){this.__proto__=null;this.M6._Done();A.h7--;},_ReInit:function(){this.M6._ReInit(
);},_Mark:function(D){var B;if((B=this.M6)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:
"Device::ConverterClass"};C.Converter={_Init:function(){C.ConverterClass._Init.call(
this,0);},_ReInit:function(){},_variants:function(){return this;},_this:null};C.
MinLowTemperature=3000;C.MaxHighTemperature=5000;C.TemperatureStep=10;C.RatingTableFields={
Id:0,AnimalId:1,FeedAssessment:2,AppearanceAssessment:3,RespiratoryAssessment:4,
FaecesAssessment:5,Timestamp:6,Temperature:7,BodyWeight:8,RatingTemperature:9};C.
Animal={TransponderId:0,NaisId:0,NaisIdMother:0,Id:0,VisualId:0,GroupId:0,DateOfBirth:
0,LocationId:0,LastTemperature:0,TimestampLastControl:0,TimestampLastWatch:0,TimestampExpirationFeverAlarm:
0,TimestampAlarm:0,LastBodyWeight:0,TimestampLastWeighing:0,FirstBodyWeight:0,TimestampFirstWeighing:
0,FirstBodyWeightId:0,DateOfLastCalving:0,LactationNumber:0,TimestampLastTemperature:
0,TimestampLastAssessment:0,ReasonOfLeaving:0,WhereAbouts:0,EaseOfDelivery:0,Breed:
0,AnimalType:0,LastRatingTemperature:0,WorstAssessment:0,BirthType:0,Gender:2,IsDry:
false,IsRegistrationNoticePending:false,IsPerished:false,IsFever:false,IsWatch:false
,IsRegistered:false,IsControl:false,IsAlarm:false,E3:function(Ad,AH){var HF=C.Row.
E3.call(this,Ad,AH);if(HF&&!!AH){this.OnSetId(AH.CF(Ad,0));this.SK(AH.CF(Ad,1));
this.Ab4(AH.CF(Ad,2));this.AnE(AH.CF(Ad,3));this.Q6(AH.Hv(Ad,4));this.JY(AH.AOU(
Ad,7));this.Akw(AH.Bjq(Ad,6));this.EC(AH.AmX(Ad,14));this.PW(AH.KR(Ad,22));this.
Nk(AH.KR(Ad,26));this.Axj(AH.I9(Ad,13));this.Ae3(AH.H4(Ad,8));this.Axb(AH.Hv(Ad,
15));this.ATU(AH.Hv(Ad,31));this.Ae9(AH.A7c(Ad,5));this.ATs(AH.I9(Ad,17));this.Uu(
AH.H4(Ad,11));this.ATT(AH.Hv(Ad,16));this.ATW(AH.Hv(Ad,30));this.AkC(AH.H4(Ad,9)
);this.Ae7(AH.H4(Ad,12));this.ATV(AH.Hv(Ad,20));this.Axd(AH.Hv(Ad,21));this.Ae5(
AH.H4(Ad,10));this.AwR(AH.H4(Ad,27));this.AFu(AH.ADa(Ad,18));this.AFY(AH.Hv(Ad,19
));this.AwM(AH.ADa(Ad,23));this.Axc(AH.Hv(Ad,24));this.ATk(AH.CF(Ad,25));this.AwD(
AH.Hv(Ad,28));this.AwS(AH.CF(Ad,29));this.ArX(AH.H4(Ad,38));this.N3(AH.Bjr(Ad,32
));this.Aky(AH.Bjw(Ad,33));this.AnG(AH.KR(Ad,35));this.Nm(AH.AO2(Ad,34));this.Ae6(
AH.H4(Ad,37));this.AFN(AH.BjF(Ad,36));}return HF;},Ci:function(AH){var HF=C.Row.
Ci.call(this,AH);if(HF&&!!AH){var Jr=AH.OC();if(Jr<=0)A.ab5("%s",Xi);else{var Az$=
this.Am8();if(Az$)this.CL=AH.YI();else AH.Ho(this.CL,0,this.Id);AH.Ho(this.CL,1,
this.VisualId);AH.Ho(this.CL,2,this.GroupId);AH.Ho(this.CL,3,this.LocationId);AH.
Acn(this.CL,4,this.DateOfBirth);AH.Bpp(this.CL,7,this.Gender);AH.Bpl(this.CL,6,this.
BirthType);AH.Bpj(this.CL,14,this.AnimalType);AH.UE(this.CL,22,this.TransponderId
);AH.UE(this.CL,26,this.NaisId);AH.AkT(this.CL,13,this.WorstAssessment);AH.N9(this.
CL,8,this.IsAlarm);AH.Acn(this.CL,15,this.TimestampAlarm);AH.N9(this.CL,11,this.
IsFever);AH.Acn(this.CL,16,this.TimestampExpirationFeverAlarm);AH.N9(this.CL,9,this.
IsControl);AH.N9(this.CL,12,this.IsWatch);AH.Acn(this.CL,20,this.TimestampLastControl
);AH.Acn(this.CL,21,this.TimestampLastWatch);AH.N9(this.CL,10,this.IsRegistered);
AH.N9(this.CL,27,this.IsPerished);AH.Acn(this.CL,28,this.DateOfLastCalving);AH.Ho(
this.CL,29,this.LactationNumber);AH.N9(this.CL,38,this.IsDry);AH.Bpn(this.CL,32,
this.Breed);AH.Bpo(this.CL,33,this.EaseOfDelivery);AH.UE(this.CL,35,this.NaisIdMother
);AH.Bpv(this.CL,34,this.WhereAbouts);AH.N9(this.CL,37,this.IsRegistrationNoticePending
);AH.Bpt(this.CL,36,this.ReasonOfLeaving);HF=AH.OE(Jr);if(Az$)this.OnSetId(AH.Abs(
));}}return HF;},Gr:function(){C.Row.Gr.call(this);this.OnSetId(-1);this.Ae5(true
);},E6:function(){C.Row.E6.call(this);this.OnSetId(0);this.SK(0);this.Ab4(0);this.
AnE(0);this.Q6(0);this.JY(A._GetAutoObject(C.Device).Gender);this.Akw(0);this.EC(
A._GetAutoObject(C.Device).AnimalType);this.PW(0);this.Nk(0);this.Axj(0);this.Ae3(
false);this.Axb(0);this.ATU(0);this.Ae9(0);this.ATs(0);this.Uu(false);this.ATW(0
);this.ATT(0);this.AkC(false);this.Ae7(false);this.ATV(0);this.Axd(0);this.Ae5(false
);this.AwR(false);this.AFu(0);this.AFY(0);this.AwM(0);this.Axc(0);this.ATk(-1);this.
AwD(0);this.AwS(0);this.ArX(false);this.N3(0);this.Aky(0);this.AnG(0);this.Nm(0);
this.Ae6(false);this.AFN(0);},OnSetId:function(E){if(this.Id===E)return;this.Id=
E;A.abo([this,this.Q4,this.OnSetId],0);},SK:function(E){if(this.VisualId===E)return;
this.VisualId=E;A.abo([this,this.ArD,this.SK],0);},Ab4:function(E){if(this.GroupId===
E)return;this.GroupId=E;A.abo([this,this.Blr,this.Ab4],0);},Q6:function(E){if(this.
DateOfBirth===E)return;this.DateOfBirth=E;A.abo([this,this.Awf,this.Q6],0);},JY:
function(E){if(this.Gender===E)return;this.Gender=E;A.abo([this,this.WD,this.JY]
,0);},Akw:function(E){if(this.BirthType===E)return;this.BirthType=E;A.abo([this,
this.ASF,this.Akw],0);},AnE:function(E){if(this.LocationId===E)return;this.LocationId=
E;A.abo([this,this.A8$,this.AnE],0);},Ae9:function(E){if(this.LastTemperature===
E)return;this.LastTemperature=E;A.abo([this,this.A8_,this.Ae9],0);},Ae3:function(
E){if(this.IsAlarm===E)return;this.IsAlarm=E;A.abo([this,this.A82,this.Ae3],0);}
,AkC:function(E){if(this.IsControl===E)return;this.IsControl=E;A.abo([this,this.
Blu,this.AkC],0);},Ae5:function(E){if(this.IsRegistered===E)return;this.IsRegistered=
E;A.abo([this,this.Blx,this.Ae5],0);},Ae7:function(E){if(this.IsWatch===E)return;
this.IsWatch=E;A.abo([this,this.A86,this.Ae7],0);},Axj:function(E){if(this.WorstAssessment===
E)return;this.WorstAssessment=E;A.abo([this,this.A9N,this.Axj],0);},Uu:function(
E){if(this.IsFever===E)return;this.IsFever=E;A.abo([this,this.A83,this.Uu],0);},
ATV:function(E){if(this.TimestampLastControl===E)return;this.TimestampLastControl=
E;A.abo([this,this.BlY,this.ATV],0);},Axd:function(E){if(this.TimestampLastWatch===
E)return;this.TimestampLastWatch=E;A.abo([this,this.Bl0,this.Axd],0);},ATs:function(
E){if(this.LastRatingTemperature===E)return;this.LastRatingTemperature=E;A.abo([
this,this.BlA,this.ATs],0);},ATT:function(E){if(this.TimestampExpirationFeverAlarm===
E)return;this.TimestampExpirationFeverAlarm=E;A.abo([this,this.BlW,this.ATT],0);
},Axb:function(E){if(this.TimestampAlarm===E)return;this.TimestampAlarm=E;A.abo([
this,this.BlV,this.Axb],0);},EC:function(E){if(this.AnimalType===E)return;this.AnimalType=
E;A.abo([this,this.PT,this.EC],0);},AFu:function(E){if(this.LastBodyWeight===E)return;
this.LastBodyWeight=E;A.abo([this,this.A89,this.AFu],0);},AFY:function(E){if(this.
TimestampLastWeighing===E)return;this.TimestampLastWeighing=E;A.abo([this,this.A9z
,this.AFY],0);},PW:function(E){if(this.TransponderId===E)return;this.TransponderId=
E;A.abo([this,this.ArC,this.PW],0);},RQ:function(){return A._GetAutoObject(C.Helper
).Mb(this.DateOfBirth,A._GetAutoObject(C.Helper).Dv());},AwM:function(E){if(this.
FirstBodyWeight===E)return;this.FirstBodyWeight=E;A.abo([this,this.ASK,this.AwM]
,0);},Axc:function(E){if(this.TimestampFirstWeighing===E)return;this.TimestampFirstWeighing=
E;A.abo([this,this.AS1,this.Axc],0);},Arh:function(){var Pc=A._NewObject(A.Core.
Bs,0);Pc.Initialize(this.DateOfBirth);var A2q=A._NewObject(A.Core.Bs,0);A2q.Initialize(
this.TimestampFirstWeighing);if(((Pc.Year===A2q.Year)&&(Pc.AbZ()===A2q.AbZ()))&&(
this.FirstBodyWeight>0))return true;else return false;},AhW:function(AJg){var AaC;
var Auz;if(this.TimestampLastWeighing>0){Auz=this.TimestampLastWeighing;AaC=this.
LastBodyWeight;}else{Auz=this.DateOfBirth;AaC=A._GetAutoObject(C.Helper).Abr(this.
AnimalType);}return A._GetAutoObject(C.Helper).AhW(AaC,Auz,AJg,this.AnimalType);
},ATk:function(E){if(this.FirstBodyWeightId===E)return;this.FirstBodyWeightId=E;
A.abo([this,this.Blq,this.ATk],0);},AnW:function(BcO){this.Ae3(BcO);if(BcO){if(!
this.TimestampAlarm)this.Axb(A._GetAutoObject(C.Helper).Dv());}else this.Axb(0);
},Nk:function(E){if(this.NaisId===E)return;this.NaisId=E;A.abo([this,this.Anv,this.
Nk],0);},AGN:function(BcK){this.Ae7(BcK);if(BcK){if(!this.TimestampLastWatch)this.
Axd(A._GetAutoObject(C.Helper).Dv());}else this.Axd(0);},AwD:function(E){if(this.
DateOfLastCalving===E)return;this.DateOfLastCalving=E;A.abo([this,this.Blg,this.
AwD],0);},AwS:function(E){if(this.LactationNumber===E)return;this.LactationNumber=
E;A.abo([this,this.Blz,this.AwS],0);},AwR:function(E){if(this.IsPerished===E)return;
this.IsPerished=E;A.abo([this,this.Blw,this.AwR],0);},ATW:function(E){if(this.TimestampLastTemperature===
E)return;this.TimestampLastTemperature=E;A.abo([this,this.BlZ,this.ATW],0);},ATU:
function(E){if(this.TimestampLastAssessment===E)return;this.TimestampLastAssessment=
E;A.abo([this,this.BlX,this.ATU],0);},N3:function(E){if(this.Breed===E)return;this.
Breed=E;A.abo([this,this.Awd,this.N3],0);},Aky:function(E){if(this.EaseOfDelivery===
E)return;this.EaseOfDelivery=E;A.abo([this,this.ASJ,this.Aky],0);},Nm:function(E
){if(this.WhereAbouts===E)return;this.WhereAbouts=E;A.abo([this,this.Awr,this.Nm
],0);},AnG:function(E){if(this.NaisIdMother===E)return;this.NaisIdMother=E;A.abo([
this,this.ASR,this.AnG],0);},AFN:function(E){if(this.ReasonOfLeaving===E)return;
this.ReasonOfLeaving=E;A.abo([this,this.BlL,this.AFN],0);},Ae6:function(E){if(this.
IsRegistrationNoticePending===E)return;this.IsRegistrationNoticePending=E;A.abo([
this,this.Bly,this.Ae6],0);},ArX:function(E){if(this.IsDry===E)return;this.IsDry=
E;A.abo([this,this.Blv,this.ArX],0);},Q4:function(){return this.Id;},ArD:function(
){return this.VisualId;},Blr:function(){return this.GroupId;},Awf:function(){return this.
DateOfBirth;},WD:function(){return this.Gender;},ASF:function(){return this.BirthType;
},A8$:function(){return this.LocationId;},A8_:function(){return this.LastTemperature;
},A82:function(){return this.IsAlarm;},Blu:function(){return this.IsControl;},Blx:
function(){return this.IsRegistered;},A86:function(){return this.IsWatch;},A9N:function(
){return this.WorstAssessment;},A83:function(){return this.IsFever;},BlY:function(
){return this.TimestampLastControl;},Bl0:function(){return this.TimestampLastWatch;
},BlA:function(){return this.LastRatingTemperature;},BlW:function(){return this.
TimestampExpirationFeverAlarm;},BlV:function(){return this.TimestampAlarm;},PT:function(
){return this.AnimalType;},A89:function(){return this.LastBodyWeight;},A9z:function(
){return this.TimestampLastWeighing;},ArC:function(){return this.TransponderId;}
,ASK:function(){return this.FirstBodyWeight;},AS1:function(){return this.TimestampFirstWeighing;
},Blq:function(){return this.FirstBodyWeightId;},Anv:function(){return this.NaisId;
},Blg:function(){return this.DateOfLastCalving;},Blz:function(){return this.LactationNumber;
},Blw:function(){return this.IsPerished;},BlZ:function(){return this.TimestampLastTemperature;
},BlX:function(){return this.TimestampLastAssessment;},Awd:function(){return this.
Breed;},ASJ:function(){return this.EaseOfDelivery;},Awr:function(){return this.WhereAbouts;
},ASR:function(){return this.NaisIdMother;},BlL:function(){return this.ReasonOfLeaving;
},Bly:function(){return this.IsRegistrationNoticePending;},Blv:function(){return this.
IsDry;},_Init:function(aArg){C.Row._Init.call(this,aArg);this.__proto__=C.Animal;
this.TableId=0;},_className:"Device::Animal"};C.Row={CL:-1,TableId:2,E3:function(
Ad,AH){if(!AH){A.ab5("%s",(As2+this.CL.toFixed())+As3);return false;}else if(AH.
Id!==this.TableId)throw new Error(As4);else if((Ad<0)||(Ad>=AH.B_())){A.ab5("%s"
,(((Aon+this.CL.toFixed())+As5)+AH.B_().toFixed())+Ald);return false;}this.CL=Ad;
return true;},Ci:function(AH){if(!AH){A.ab5("%s",(As2+this.CL.toFixed())+As3);return false;
}else if(AH.Id!==this.TableId)throw new Error(As4);else if(this.Am8()&&AH.Lj()){
A.ab5("%s",Ayc+AH.HK().toFixed());return false;}else if(!this.Am8()&&((this.CL<0
)||(this.CL>=AH.B_()))){A.ab5("%s",(((Aon+this.CL.toFixed())+As5)+AH.B_().toFixed(
))+Ald);return false;}return true;},Gr:function(){this.E6();this.CL=-1;},Am8:function(
){return this.CL===-1;},E6:function(){this.CL=-2;},Aq0:function(){return this.CL
!==-2;},A9n:function(){return this.CL;},A_M:function(E){this.CL=E;},_Init:function(
aArg){this.__proto__=C.Row;A.h7++;},_Done:function(){this.__proto__=null;A.h7--;
},_ReInit:function(){},_Mark:function(D){var B;if((B=this.I)&&(B._cycle!=D))B._Mark(
B._cycle=D);},I:null,_cycle:0,_observers:null,_className:"Device::Row"};C.Rating={
Temperature:0,Id:0,AnimalId:0,Timestamp:0,BodyWeight:0,RatingTemperature:0,Faeces:
0,Respiratory:0,Appearance:0,Feed:0,E3:function(Ad,AH){var HF=C.Row.E3.call(this
,Ad,AH);if(HF&&!!AH){this.OnSetId(AH.CF(Ad,0));this.OnSetAnimalId(AH.CF(Ad,1));this.
OnSetTimestamp(AH.Hv(Ad,6));this.OnSetFeed(AH.I9(Ad,2));this.OnSetAppearance(AH.
I9(Ad,3));this.OnSetRespiratory(AH.I9(Ad,4));this.OnSetFaeces(AH.I9(Ad,5));this.
OnSetTemperature(AH.A7c(Ad,7));this.OnSetBodyWeight(AH.ADa(Ad,8));this.OnSetRatingTemperature(
AH.I9(Ad,9));}return HF;},Ci:function(AH){if(this.K&&this.K.Ci)return this.K.Ci.
apply(this,arguments);else return C.Rating.Bba.apply(this,arguments);},Bba:function(
AH){var HF=C.Row.Ci.call(this,AH);if((HF&&!!AH)&&(AH.Id===1)){var Jr=AH.OC();if(
Jr<=0)A.ab5("%s",Xi);else{var Az$=this.Am8();if(Az$)this.CL=AH.YI();else AH.Ho(this.
CL,0,this.Id);AH.Ho(this.CL,1,this.AnimalId);AH.Acn(this.CL,6,this.Timestamp);AH.
AkT(this.CL,2,this.Feed);AH.AkT(this.CL,3,this.Appearance);AH.AkT(this.CL,4,this.
Respiratory);AH.AkT(this.CL,5,this.Faeces);AH.A$K(this.CL,7,this.Temperature);AH.
AUQ(this.CL,8,this.BodyWeight);AH.AkT(this.CL,9,this.RatingTemperature);AH.OE(Jr
);if(Az$)this.OnSetId(AH.Abs());var Ry=A._GetAutoObject(C.Device).An;var Ad=A._GetAutoObject(
C.Device).An.LV(0,this.AnimalId);if(Ad>=0){var Cz=A._NewObject(C.Animal,0);Cz.E3(
Ad,Ry);if(this.Temperature>0)Cz.Uu(A._GetAutoObject(C.Helper).A7E(this));if((this.
Temperature>0)&&A._GetAutoObject(C.Helper).AGs(this)){var Oo=A._GetAutoObject(C.
Helper).ARm(this);Cz.AkC(Oo);Cz.AnW(Oo);}else if(this.Temperature>0){var Oo=(A._GetAutoObject(
C.Helper).ARm(this)||(Cz.WorstAssessment===2))||(Cz.WorstAssessment===1);Cz.AkC(
Oo);Cz.AnW(Oo);}else{var Oo=A._GetAutoObject(C.Helper).ARm(this)||Cz.IsFever;Cz.
AkC(Oo);Cz.AnW(Oo);}Cz.Ci(Ry);}}}return HF;},Gr:function(){C.Row.Gr.call(this);this.
OnSetTimestamp(A._GetAutoObject(C.Helper).Dv());this.OnSetId(-1);},E6:function(){
C.Row.E6.call(this);this.OnSetTimestamp(0);this.OnSetId(0);this.OnSetAnimalId(0);
this.OnSetFeed(0);this.OnSetAppearance(0);this.OnSetRespiratory(0);this.OnSetFaeces(
0);this.OnSetTemperature(0);this.OnSetBodyWeight(0);this.OnSetRatingTemperature(
0);},OnSetTemperature:function(E){if(this.Temperature===E)return;this.Temperature=
E;A.abo([this,this.BlU,this.OnSetTemperature],0);},OnSetId:function(E){if(this.Id===
E)return;this.Id=E;A.abo([this,this.Q4,this.OnSetId],0);},OnSetAnimalId:function(
E){if(this.AnimalId===E)return;this.AnimalId=E;A.abo([this,this.Bk5,this.OnSetAnimalId
],0);},OnSetFeed:function(E){if(this.Feed===E)return;this.Feed=E;A.abo([this,this.
Bln,this.OnSetFeed],0);},OnSetAppearance:function(E){if(this.Appearance===E)return;
this.Appearance=E;A.abo([this,this.Bk6,this.OnSetAppearance],0);},OnSetRespiratory:
function(E){if(this.Respiratory===E)return;this.Respiratory=E;A.abo([this,this.BlM
,this.OnSetRespiratory],0);},OnSetFaeces:function(E){if(this.Faeces===E)return;this.
Faeces=E;A.abo([this,this.Bll,this.OnSetFaeces],0);},OnSetTimestamp:function(E){
if(this.Timestamp===E)return;this.Timestamp=E;A.abo([this,this.A9y,this.OnSetTimestamp
],0);},Bpk:function(Nv,A7){switch(Nv){case 2:this.OnSetAppearance(A7);break;case
1:this.OnSetFeed(A7);break;case 4:this.OnSetFaeces(A7);break;case 3:this.OnSetRespiratory(
A7);break;default:;}},Bjo:function(Nv){switch(Nv){case 2:return this.Appearance;
case 1:return this.Feed;case 4:return this.Faeces;case 3:return this.Respiratory;
default:return 0;}},OnSetRatingTemperature:function(E){if(this.RatingTemperature===
E)return;this.RatingTemperature=E;A.abo([this,this.BlK,this.OnSetRatingTemperature
],0);},OnSetBodyWeight:function(E){if(this.BodyWeight===E)return;this.BodyWeight=
E;A.abo([this,this.Bk_,this.OnSetBodyWeight],0);},BlU:function(){return this.Temperature;
},Q4:function(){return this.Id;},Bk5:function(){return this.AnimalId;},Bln:function(
){return this.Feed;},Bk6:function(){return this.Appearance;},BlM:function(){return this.
Respiratory;},Bll:function(){return this.Faeces;},A9y:function(){return this.Timestamp;
},BlK:function(){return this.RatingTemperature;},Bk_:function(){return this.BodyWeight;
},_Init:function(aArg){C.Row._Init.call(this,aArg);this.__proto__=C.Rating;this.
TableId=1;var J8=this._variants();if(J8){this.K={};J8._Init.call(this,aArg);}},_Done:
function(){if(this.K)this.K._Done.call(this);this.__proto__=C.Row;C.Row._Done.call(
this);},_ReInit:function(){C.Row._ReInit.call(this);if(this.K)this.K._ReInit.call(
this);},_Mark:function(D){C.Row._Mark.call(this,D);if(this.K)this.K._Mark(D);},_variants:
function(){return A.acs.Rating._variants();},K:null,_className:"Device::Rating"};
C.HelperClass={UD:null,AhI:null,AUJ:null,AUK:null,W:null,Av:null,KK:null,SU:null
,Ad1:null,UK:null,UJ:null,Aeo:null,Afy:null,Afx:null,Afw:null,Afz:null,AgG:null,
AG2:0,Init:function(aArg){A.pe([this,this.AUc],this);},AkF:function(E){this.UD=E;
A.abo([this,this.ArA,this.AkF],0);},AFQ:function(E){this.AhI=E;A.abo([this,this.
A9o,this.AFQ],0);},BBs:function(G){switch(A._GetAutoObject(C.Device).ScanState){
case 2:{var AuB=A._GetAutoObject(C.Device).OV;if(!AuB)throw new Error(Ayd);switch(
AuB.TransponderType){case 1:this.AkF(AuB);break;case 2:this.ATK(AuB);break;case 3:
this.AFQ(AuB);break;case 4:this.ATL(AuB);break;case 0:break;default:throw new Error(
Aye);}}break;case 4:A._GetAutoObject(C.Device).A3(11,true,A.jV,2000,null);break;
case 3:A._GetAutoObject(C.Device).A3(12,true,A.jV,2000,null);break;case 0:case 1:
break;default:throw new Error(As6);}},AkQ:function(){this.AkF(null);this.ATK(null
);this.AFQ(null);this.ATL(null);},AFV:function(E){if(this.K&&this.K.AFV)return this.
K.AFV.apply(this,arguments);else return C.HelperClass.Ba_.apply(this,arguments);
},Ba_:function(E){A.abo([this,this.U4,this.U7],0);A._GetAutoObject(C.Device).SetSystemTime(
E);},U7:function(Aq){this.AFV(Aq);},Dv:function(){if(this.K&&this.K.Dv)return this.
K.Dv.apply(this,arguments);else return C.HelperClass.Ba6.apply(this,arguments);}
,Ba6:function(){var B;return((B=(this.Av.BdL()|0))<0)?B+0x100000000:B;},U4:function(
){return this.Dv();},Ast:function(){A._GetAutoObject(C.Device).SR(-1);this.W.E6(
);A.we(this.W,0);},A7U:function(Ix){if(!Ix){A.ab5("%s%U",Ayf,Ix);return false;}var
Bf=A._GetAutoObject(C.Device).An.AgZ(22,Ix);return this.G8(Bf);},AmY:function(AoP
,AJf){switch(AoP){case 0:{var Apg=AJf;switch(Apg){case 14:return A.aaR(A.acf.Aft
);case 6:return O9;case 4:return A.aaR(A.acf.Aeg);case 28:return Ayg;case 7:return A.
aaR(A.acf.Afo);case 2:return A.aaR(A.acf.P);case 0:return A.aaR(A.acf.GN);case 37:
return AWc;case 8:return A.aaR(A.acf.Alarm);case 9:return A.aaR(A.acf.ACp);case 38:
return A.aaR(A.acf.AN7);case 11:return A.aaR(A.acf.Fever);case 27:return AWd;case
10:return A.aaR(A.acf.BoW);case 12:return A.aaR(A.acf.Asf);case 29:return A.aaR(
A.acf.ARF);case 18:return A.aaR(A.acf.Weighing);case 17:return AWe;case 5:return A.
aaR(A.acf.Temperature);case 3:return AWf;case 26:return A.aaR(A.acf.Ul);case 35:
return A.aaR(A.acf.Ul)+AHv;case 36:return AHw;case 15:return AfE;case 24:return Aoo;
case 20:return AWg;case 30:return AHx;case 21:return Ale;case 19:return AHy;case
22:return A.aaR(A.acf.Transponder);case 1:return A.aaR(A.acf.GI);case 34:return A.
aaR(A.acf.Jk);case 13:return AHz;case 31:return AWh;default:{A.ab5("%s",AWi+Apg.
toFixed());return AHA+Apg.toFixed();}}}case 1:{var Apg=AJf;switch(Apg){case 1:return A.
aaR(A.acf.Animal);case 3:return A.aaR(A.acf.AGr);case 8:return A.aaR(A.acf.Afv);
case 5:return A.aaR(A.acf.AGt);case 2:return A.aaR(A.acf.Feed);case 4:return A.aaR(
A.acf.AGu);case 7:return A.aaR(A.acf.Temperature);case 6:return A.aaR(A.acf.Bs);
default:{A.ab5("%s",AWj+Apg.toFixed());return AHA+Apg.toFixed();}}}default:A.ab5(
"%s",(AcP+AoP.toFixed())+AWk);}return A.jV;},A64:function(AoP,AI){var result=A.jV;
if(!!AI){result=this.AmY(AoP,AI.EJ);result=((result+Of)+A._GetAutoObject(C.Converter
).A6N(AI.Operator))+Of;if(!!(C.Int32FilterCriterion.isPrototypeOf(AI)?AI:null))result=
result+(C.Int32FilterCriterion.isPrototypeOf(AI)?AI:null).A5.toFixed();else if(!
!(C.UInt32FilterCriterion.isPrototypeOf(AI)?AI:null))result=result+(C.UInt32FilterCriterion.
isPrototypeOf(AI)?AI:null).A5.toFixed();else if(!!(C.StringFilterCriterion.isPrototypeOf(
AI)?AI:null))result=result+(C.StringFilterCriterion.isPrototypeOf(AI)?AI:null).A5;
else if(!!(C.BoolFilterCriterion.isPrototypeOf(AI)?AI:null)){if((C.BoolFilterCriterion.
isPrototypeOf(AI)?AI:null).A5)result=this.AmY(AoP,AI.EJ);else result=A.jV;}else if(
!!(C.GenderFilterCriterion.isPrototypeOf(AI)?AI:null)){var BzP=A._NewObject(C.GenderToString
,0);result=result+BzP.Lx((C.GenderFilterCriterion.isPrototypeOf(AI)?AI:null).A5);
}else if(!!(C.AnimalTypeFilterCriterion.isPrototypeOf(AI)?AI:null)){var ByK=A._NewObject(
C.AnimalTypeToString,0);result=result+ByK.Lx((C.AnimalTypeFilterCriterion.isPrototypeOf(
AI)?AI:null).A5);}else if(!!(C.AssessmentFilterCriterion.isPrototypeOf(AI)?AI:null
)){var ByN=A._NewObject(C.AssesmentToString,0);result=result+ByN.Lx((C.AssessmentFilterCriterion.
isPrototypeOf(AI)?AI:null).A5);}else if(!!(C.UInt64FilterCriterion.isPrototypeOf(
AI)?AI:null))result=result+(C.UInt64FilterCriterion.isPrototypeOf(AI)?AI:null).A5.
toFixed();else if(!!(C.UInt64PartialFilterCriterion.isPrototypeOf(AI)?AI:null)){
var Aw=(C.UInt64PartialFilterCriterion.isPrototypeOf(AI)?AI:null);result=(((((result+
Aw.A5)+AWl)+Aw.OG.toFixed())+O8)+Aw.Zn.toFixed())+Ald;}else if(!!(C.WhereAboutsFilterCriterion.
isPrototypeOf(AI)?AI:null)){var BDc=A._NewObject(C.WhereAboutsToString,0);result=
result+BDc.Lx((C.WhereAboutsFilterCriterion.isPrototypeOf(AI)?AI:null).A5);}else
A.ab5("%s",AWm);}return result;},MI:function(aString,Bcw,Bx0){var result=A.jV;var
Bgi=false;var index=0;var Bx2=Bcw.length;while(!Bgi){var A3_=aString.indexOf(Bcw
,index);if(A3_!==-1){result=(result+A.abW(aString,index,A3_-index))+Bx0;index=A3_+
Bx2;}else{var BcB=aString.length;if(index<BcB)result=result+A.ab2(aString,BcB-index
);Bgi=true;}}return result;},ATK:function(E){this.AUJ=E;A.abo([this,this.BlO,this.
ATK],0);},ATL:function(E){this.AUK=E;A.abo([this,this.BlP,this.ATL],0);},Bd$:function(
){return((A._GetAutoObject(C.Device).ScanState===2)&&!!A._GetAutoObject(C.Device
).OV)&&(A._GetAutoObject(C.Device).OV.TransponderType===1);},Aga:function(G){if(
!this.W.Am8()&&!!this.W.Id)this.Bkr(this.W.Id);},AC4:function(Eo){return A._GetAutoObject(
C.Helper).UK.Get(Eo);},A6Z:function(Eo){return A._GetAutoObject(C.Helper).UJ.Get(
Eo);},A6_:function(){var O=0;var min=32767;while(O<A._GetAutoObject(C.Helper).UK.
MH){if(A._GetAutoObject(C.Helper).UK.Get(O)<min)min=A._GetAutoObject(C.Helper).UK.
Get(O);O=O+1;}return min;},AUc:function(G){A.zV([this,this.Aga],A._GetAutoObject(
C.Device).An,0);},ARm:function(D3){if(!D3)return false;var Bj3=(((this.Az7(D3.Faeces
)||this.Az7(D3.Feed))||this.Az7(D3.Appearance))||this.Az7(D3.Respiratory))||this.
Az7(D3.RatingTemperature);return Bj3||this.A7E(D3);},Az7:function(Bca){return(Bca===
2)||(Bca===1);},A7E:function(D3){return!!D3&&(D3.Temperature>A._GetAutoObject(C.
Helper).AC4(A._GetAutoObject(C.Helper).W.AnimalType));},G8:function(L$){var A22=
false;if(L$>=0){if(L$!==this.W.CL)A._GetAutoObject(C.Device).SR(L$);A22=this.W.E3(
L$,A._GetAutoObject(C.Device).An);if(A22)A.we(this.W,0);}else{A._GetAutoObject(C.
Device).SR(-1);this.W.E6();A.we(this.W,0);}return A22;},AhR:function(Ah8){var B;
return(((B=(this.Av.BdL()|0))<0)?B+0x100000000:B)-this.AmK(Ah8);},AsI:function(){
var B;A.pe([B=this.KK,B.An0],this);},BCD:function(G){A._GetAutoObject(C.Device).
A3(16,false,AHB,0,null);A._GetAutoObject(C.Device).A3(5,true,A.jV,0,null);},Bop:
function(G){var As=(C.PopupContext.isPrototypeOf(G)?G:null);if(!!As&&(As.PopupState===
5))this.AsI();},Bn$:function(E){if(this.AG2===E)return;this.AG2=E;A._GetAutoObject(
C.Device).A3(16,true,this.AG2.toFixed(),0,[this,this.Bop]);},Mb:function(BxA,Bye
){var D8;var BgQ=A._NewObject(A.Core.An6,0);var GG=A._NewObject(A.Core.Bs,0);var
K9=A._NewObject(A.Core.Bs,0);GG.Initialize(BxA);K9.Initialize(Bye);D8=K9.Biv(GG);
BgQ.Initialize2(0,D8.ADD,D8.AEp,D8.AGG);if(GG.J(BgQ).GL===GG.GL)return D8.Ko;else
return D8.Ko+1;},BCF:function(G){A._GetAutoObject(C.Device).UpdateMeasureState(3
);},ALc:function(G){var BhF=A._GetAutoObject(C.Helper).AC4(A._GetAutoObject(C.Helper
).W.AnimalType);var BhC=A._GetAutoObject(C.Helper).A6Z(A._GetAutoObject(C.Helper
).W.AnimalType);var Agr=A.abz(BhF-100,BhC+100);this.Bdp(Agr);},AmK:function(Ah8){
return Ah8*86400;},Ak7:function(J_){var B;if(!!J_&&(J_<(((B=Math.trunc(Math.pow(
10,A._GetAutoObject(C.Device).AF)))<0)?B+0x10000000000000000:B)))return-1;return A.
_GetAutoObject(C.Helper).VZ(J_,A._GetAutoObject(C.Device).AF&0xFF,A._GetAutoObject(
C.Device).A2&0xFF)|0;},AGs:function(D3){if(!D3)return false;return((!!D3.Faeces||
!!D3.Feed)||!!D3.Appearance)||!!D3.Respiratory;},AhW:function(A1d,BcD,AJg,Eo){var
B;var ApU;if((A1d<650000)&&(BcD<this.Dv())){var Bc1=this.AgG.Avw(Eo);var Bc0=0;if(
Bc1>=0)Bc0=this.Afw.Get(Bc1);ApU=A1d+(this.Mb(BcD,this.Dv())*Bc0);if(AJg>0){var A1_=
this.ApT(AJg);ApU=(Math.trunc(((((B=ApU)<0)?B+0x10000000000000000:B)+Math.trunc(
A1_/2))/A1_)*A1_)|0;}if(ApU>650000)ApU=650000;}else ApU=A1d;return ApU;},ADg:function(
D3){var Aqf=A._GetAutoObject(C.Converter).Ad2(D3.Faeces);if(Aqf<A._GetAutoObject(
C.Converter).Ad2(D3.Feed))Aqf=A._GetAutoObject(C.Converter).Ad2(D3.Feed);if(Aqf<
A._GetAutoObject(C.Converter).Ad2(D3.Appearance))Aqf=A._GetAutoObject(C.Converter
).Ad2(D3.Appearance);if(Aqf<A._GetAutoObject(C.Converter).Ad2(D3.Respiratory))Aqf=
A._GetAutoObject(C.Converter).Ad2(D3.Respiratory);return A._GetAutoObject(C.Converter
).Baa(Aqf);},Axy:function(D3,Nu){if(!!D3){D3.OnSetFaeces(Nu);D3.OnSetFeed(Nu);D3.
OnSetAppearance(Nu);D3.OnSetRespiratory(Nu);}},Bjm:function(AH,AJm,Ac8,Xs,AfJ){if(
!AH)throw new Error(As7);var Be=A._NewObject(C.Filter,0);var ApH=AH.Filter;var Oi=
A._NewObject(C.Int32FilterCriterion,0);Oi.Operator=0;Oi.EJ=1;Oi.A5=Ac8;Be.CX(Oi);
if(Xs>0){var Ov=A._NewObject(C.UInt32FilterCriterion,0);Ov.Operator=2;Ov.EJ=6;Ov.
A5=Xs;Be.CX(Ov);}if(AfJ>0){var On=A._NewObject(C.UInt32FilterCriterion,0);On.Operator=
3;On.EJ=6;On.A5=AfJ;Be.CX(On);}AH.Bk(Be);var Ma=A._NewObject(C.Int32ArrayWrapper
,0);Ma.ZB(6);var O;for(O=0;O<Ma.MH;O=O+1)Ma.Set(O,0);var Vb;for(O=0;O<AH.B_();O=
O+1){Vb=AH.I9(O,AJm);Ma.Set(Vb,Ma.Get(Vb)+1);}AH.Bk(ApH);return Ma;},ZS:function(
Ah8){var B;var GG=A._NewObject(A.Core.Bs,0);var BgP=A._NewObject(A.Core.An6,0);GG.
Initialize(A._GetAutoObject(C.Converter).AhT());BgP.Initialize2(Ah8,0,0,0);GG=GG.
BpN(BgP);return((B=(GG.JW()|0))<0)?B+0x100000000:B;},A60:function(AH,Ac8,AfJ,Xs){
if(!AH)throw new Error(As7);var Be=A._NewObject(C.Filter,0);var ApH=AH.Filter;var
Oi=A._NewObject(C.Int32FilterCriterion,0);Oi.Operator=0;Oi.EJ=1;Oi.A5=Ac8;Be.CX(
Oi);if(Xs>0){var Ov=A._NewObject(C.UInt32FilterCriterion,0);Ov.Operator=2;Ov.EJ=
6;Ov.A5=Xs;Be.CX(Ov);}if(AfJ>0){var On=A._NewObject(C.UInt32FilterCriterion,0);On.
Operator=3;On.EJ=6;On.A5=AfJ;Be.CX(On);}AH.Bk(Be);var Ma=A._NewObject(C.Int32ArrayWrapper
,0);Ma.ZB(6);var O;for(O=0;O<Ma.MH;O=O+1)Ma.Set(O,0);var Ao7=A._NewObject(C.Rating
,0);var A12;for(O=0;O<AH.B_();O=O+1){Ao7.E3(O,AH);if(A._GetAutoObject(C.Helper).
AGs(Ao7)){A12=A._GetAutoObject(C.Helper).ADg(Ao7);Ma.Set(A12,Ma.Get(A12)+1);}}AH.
Bk(ApH);return Ma;},A2z:function(AH,Ac8,Bzj){if(!AH)throw new Error(As7);var Be=
A._NewObject(C.Filter,0);var ApH=AH.Filter;var Oi=A._NewObject(C.Int32FilterCriterion
,0);Oi.Operator=0;Oi.EJ=1;Oi.A5=Ac8;Be.CX(Oi);var Xs=A._GetAutoObject(C.Converter
).AhT()+A._GetAutoObject(C.Helper).AmK(Bzj);var AfJ=Xs+A._GetAutoObject(C.Helper
).AmK(1);var Ov=A._NewObject(C.UInt32FilterCriterion,0);Ov.Operator=2;Ov.EJ=6;Ov.
A5=Xs;Be.CX(Ov);var On=A._NewObject(C.UInt32FilterCriterion,0);On.Operator=3;On.
EJ=6;On.A5=AfJ;Be.CX(On);AH.Bk(Be);var Ao7=A._NewObject(C.Rating,0);var Vb;var LT=
0;var O;for(O=0;O<AH.B_();O=O+1){Ao7.E3(O,AH);if(A._GetAutoObject(C.Helper).AGs(
Ao7)){Vb=A._GetAutoObject(C.Helper).ADg(Ao7);if(A._GetAutoObject(C.Converter).Ad2(
Vb)>A._GetAutoObject(C.Converter).Ad2(LT))LT=Vb;}}AH.Bk(ApH);return LT;},Am7:function(
){if((A._GetAutoObject(C.Device).WeightRecordingScope===2)||(A._GetAutoObject(C.
Device).WeightRecordingScope===1))return true;else return false;},A7H:function(){
if((A._GetAutoObject(C.Device).WeightRecordingScope===2)||!A._GetAutoObject(C.Device
).WeightRecordingScope)return true;else return false;},Bjn:function(AH,AJm,Ac8,Xs
,AfJ){if(!AH)throw new Error(As7);var Be=A._NewObject(C.Filter,0);var ApH=AH.Filter;
var Oi=A._NewObject(C.Int32FilterCriterion,0);Oi.Operator=0;Oi.EJ=1;Oi.A5=Ac8;Be.
CX(Oi);if(Xs>0){var Ov=A._NewObject(C.UInt32FilterCriterion,0);Ov.Operator=2;Ov.
EJ=6;Ov.A5=Xs;Be.CX(Ov);}if(AfJ>0){var On=A._NewObject(C.UInt32FilterCriterion,0
);On.Operator=3;On.EJ=6;On.A5=AfJ;Be.CX(On);}AH.Bk(Be);var Ma=A._NewObject(C.Int32ArrayWrapper
,0);Ma.ZB(6);var O;for(O=0;O<Ma.MH;O=O+1)Ma.Set(O,0);if(AH.B_()>0){var Vb=AH.I9(
0,AJm);var ApZ=AH.Hv(O,6);var Ac=A._NewObject(A.Core.Bs,0);Ac.Initialize(ApZ);var
Aqe=Vb;var AKf=A._NewObject(A.Core.Bs,0);AKf.Initialize(Ac.JW());for(O=1;O<AH.B_(
);O=O+1){Vb=AH.I9(O,AJm);ApZ=AH.Hv(O,6);Ac.Initialize(ApZ);if((Ac.AbZ()!==AKf.AbZ(
))||(Ac.Year!==AKf.Year)){Ma.Set(Aqe,Ma.Get(Aqe)+1);AKf.Initialize(Ac.JW());Aqe=
Vb;}else if(!!Vb&&(Vb<Aqe))Aqe=Vb;}Ma.Set(Aqe,Ma.Get(Aqe)+1);}AH.Bk(ApH);return Ma;
},Aqr:function(L7){var B;var GG=A._NewObject(A.Core.Bs,0);GG.Initialize(L7);GG.AnC(
0);GG.AnF(0);GG.AnI(0);return((B=(GG.JW()|0))<0)?B+0x100000000:B;},AOi:function(
L7){var B;L7=L7+86400;var GG=A._NewObject(A.Core.Bs,0);GG.Initialize(L7);GG.AnC(
0);GG.AnF(0);GG.AnI(0);return((B=(GG.JW()|0))<0)?B+0x100000000:B;},Bjp:function(
BCB,Bzv,Ami,AlH){var Bdk=A._GetAutoObject(C.Helper).Mb(BCB,Bzv);if(Bdk>0)return((
AlH-Ami)/Bdk)|0;return 0;},Bqo:function(BxB,Byf){var GG=A._NewObject(A.Core.Bs,0
);var K9=A._NewObject(A.Core.Bs,0);GG.Initialize(BxB);K9.Initialize(Byf);return(
GG.Year===K9.Year)&&(GG.AbZ()===K9.AbZ());},A66:function(){var Be=A._GetAutoObject(
C.Helper).Mv();var Beo=A._NewObject(C.UInt32FilterCriterion,0);var Byo=A._GetAutoObject(
C.Helper).ZS(A._GetAutoObject(C.Device).AqT)-1;Beo.Initialize(28,2,Byo,true);Be.
CX(Beo);var U9=A._NewObject(C.AnimalTypeFilterCriterion,0);U9.Initialize(14,0,1,
true);Be.CX(U9);if(A._GetAutoObject(C.Device).AqU){var AAl=A._NewObject(C.UInt32FilterCriterion
,0);var A2W=A._GetAutoObject(C.Helper).Dv()-21600;AAl.Initialize(30,3,A2W,true);
Be.CX(AAl);}return Be;},Bo3:function(){var Jr=A._GetAutoObject(C.Device).An.OC();
if(Jr<=0)A.ab5("%s",Xi);else{A._GetAutoObject(C.Device).An.E6();A._GetAutoObject(
C.Device).An.OE(Jr);}Jr=A._GetAutoObject(C.Device).Agy.OC();if(Jr<=0)A.ab5("%s",
Xi);else{A._GetAutoObject(C.Device).Agy.E6();A._GetAutoObject(C.Device).Agy.OE(Jr
);}Jr=A._GetAutoObject(C.Device).Bt.OC();if(Jr<=0)A.ab5("%s",Xi);else{A._GetAutoObject(
C.Device).Bt.E6();A._GetAutoObject(C.Device).Bt.OE(Jr);}Jr=A._GetAutoObject(C.Device
).Pr.OC();if(Jr<=0)A.ab5("%s",Xi);else{A._GetAutoObject(C.Device).Pr.E6();A._GetAutoObject(
C.Device).Pr.OE(Jr);}},Bkr:function(Ac8){var Bf=A._GetAutoObject(C.Device).An.LV(
0,Ac8);return this.G8(Bf);},ARt:function(Ix){var AiA=A._GetAutoObject(C.Device).
An.Aem(22,Ix);return AiA;},AC9:function(){var Be=A._GetAutoObject(C.Helper).Mv();
var Ajc=A._NewObject(C.UInt64FilterCriterion,0);Ajc.Initialize(22,0,0,true);Be.CX(
Ajc);return Be;},AOR:function(Ao0,Bzs,Qg){var Aao=-1;switch(Ao0){case 2:Aao=30;break;
case 3:Aao=31;break;case 10:Aao=19;break;default:A.ab5("%s%e",U1,Ao0);}if(Aao<0)
return null;var Adk=A._NewObject(C.UInt32FilterCriterion,0);Adk.Initialize(Aao,3
,A._GetAutoObject(C.Helper).Dv()-Bzs,Qg);return Adk;},BoZ:function(aFilter){var AI=
aFilter.DL(30,3);if(!!AI)aFilter.Nq(AI);AI=aFilter.DL(31,3);if(!!AI)aFilter.Nq(AI
);AI=aFilter.DL(19,3);if(!!AI)aFilter.Nq(AI);},A1T:function(AfT,Ay1,AH){if(AH.Lj(
))return 5;if(AfT.VisualId<=0)switch(Ay1){case 0:if(!AfT.NaisId)return 1;break;case
1:if(!AfT.TransponderId)return 1;break;case 3:case 2:case 5:case 4:return 1;default:
throw new Error(AHC+Ay1.toFixed());}if((!AfT.NaisId&&!AfT.TransponderId)&&A._GetAutoObject(
C.Device).An.AjL(1,AfT.VisualId))return 2;if(!!AfT.NaisId&&A._GetAutoObject(C.Helper
).ARr(AfT.NaisId))return 3;if(!!AfT.TransponderId&&A._GetAutoObject(C.Helper).ARt(
AfT.TransponderId))return 4;return 0;},Aqk:function(En){En.EC(A._GetAutoObject(C.
Device).AnimalType);En.N3(A._GetAutoObject(C.Device).Breed);En.Q6(A._GetAutoObject(
C.Helper).Dv()-A._GetAutoObject(C.Helper).AmK(A._GetAutoObject(C.Device).AdT));En.
JY(A._GetAutoObject(C.Device).Gender);En.Nm(A._GetAutoObject(C.Device).WhereAbouts
);},AMs:function(Rr,En){var Gv=0;switch(Rr){case 0:Gv=A._GetAutoObject(C.Helper).
Ak7(En.NaisId);break;case 1:Gv=A._GetAutoObject(C.Helper).Ak7(En.TransponderId);
break;case 3:Gv=A._GetAutoObject(C.Device).Aq6;break;case 2:Gv=A._GetAutoObject(
C.Device).Aq7;break;case 4:case 5:Gv=A._GetAutoObject(C.Device).AjV;break;default:
throw new Error(AHD+Rr.toFixed());}return Gv;},Bah:function(Alo,L8,Bcf,Bxm,BxV){
var B;var Qt=null;var XD=null;switch(Alo){case 0:{Qt=[B=A._GetAutoObject(C.Device
),B.ASQ,B.A0A];XD=[B=A._GetAutoObject(C.Device),B.Awo,B.AyV];}break;case 1:switch(
L8){case 1:{Qt=[B=A._GetAutoObject(C.Device),B.A9d,B.BbG];XD=[B=A._GetAutoObject(
C.Device),B.Awm,B.AyT];}break;case 0:{Qt=[B=A._GetAutoObject(C.Device),B.A9e,B.BbH
];XD=[B=A._GetAutoObject(C.Device),B.Awn,B.AyU];}break;case 2:{Qt=[B=A._GetAutoObject(
C.Device),B.ASQ,B.A0A];XD=[B=A._GetAutoObject(C.Device),B.Awo,B.AyV];}break;default:
throw new Error(Ayh+L8.toFixed());}break;default:throw new Error(AHE+Alo.toFixed(
));}if(!!Qt&&!!XD){Qt[2].call(Qt[0],Bcf);if(Bcf>0){if((XD[1].call(XD[0])>0)&&(Bxm<
BxV))Qt[2].call(Qt[0],Qt[1].call(Qt[0])+XD[1].call(XD[0]));else if(XD[1].call(XD[
0])<0)Qt[2].call(Qt[0],Qt[1].call(Qt[0])+XD[1].call(XD[0]));}return Qt[1].call(Qt[
0]);}return 0;},AVL:function(En,Alo,Bxu){if(!En||(Bxu===true))return;switch(Alo){
case 0:En.Nk(A._GetAutoObject(C.Device).Av8);break;case 1:switch(En.Gender){case
0:En.Nk(A._GetAutoObject(C.Device).AEs);break;case 1:En.Nk(A._GetAutoObject(C.Device
).AEr);break;case 2:En.Nk(A._GetAutoObject(C.Device).Av8);break;default:throw new
Error(Ayh+En.Gender.toFixed());}break;default:throw new Error(AHE+Alo.toFixed());
}},Bj4:function(Rr,En){var result=false;switch(Rr){case 0:result=!!En.NaisId;break;
case 1:result=!!En.TransponderId;break;case 3:case 2:case 4:case 5:result=false;
break;default:throw new Error(AHD+Rr.toFixed());}return result;},AKs:function(En
,Bb_,Ay1,AtF,AfM){switch(Bb_){case 2:if(AtF<=0)A._GetAutoObject(C.Device).A3(21,
true,En.VisualId.toFixed(),0,AfM);else A._GetAutoObject(C.Device).A3(48,true,(En.
VisualId.toFixed()+Ayi)+AtF.toFixed(),0,AfM);break;case 3:if(AtF<=0)A._GetAutoObject(
C.Device).A3(21,true,A._GetAutoObject(C.Converter).Rj(En.NaisId),0,AfM);else A._GetAutoObject(
C.Device).A3(48,true,(A._GetAutoObject(C.Converter).Rj(En.NaisId)+Ayi)+AtF.toFixed(
),0,AfM);break;case 4:if(AtF<=0)A._GetAutoObject(C.Device).A3(25,true,A._GetAutoObject(
C.Converter).Rj(En.TransponderId),0,AfM);else A._GetAutoObject(C.Device).A3(47,true
,(A._GetAutoObject(C.Converter).Rj(En.TransponderId)+Ayi)+AtF.toFixed(),0,AfM);break;
case 1:switch(Ay1){case 1:A._GetAutoObject(C.Device).A3(42,true,A.jV,0,AfM);break;
case 0:A._GetAutoObject(C.Device).A3(43,true,A.jV,0,AfM);break;case 3:case 2:case
5:case 4:A._GetAutoObject(C.Device).A3(22,true,A.jV,0,AfM);break;default:throw new
Error(AHC+Ay1.toFixed());}break;case 5:A._GetAutoObject(C.Device).A3(41,true,A._GetAutoObject(
C.Device).An.HK().toFixed(),0,AfM);break;case 0:break;default:throw new Error(AWn+
Bb_.toFixed());}},BdP:function(Bcm,L8){var B;var AAp=null;switch(Bcm){case 0:AAp=[
B=A._GetAutoObject(C.Device),B.Awo,B.AyV];break;case 1:switch(L8){case 1:AAp=[B=
A._GetAutoObject(C.Device),B.Awm,B.AyT];break;case 0:AAp=[B=A._GetAutoObject(C.Device
),B.Awn,B.AyU];break;case 2:AAp=[B=A._GetAutoObject(C.Device),B.Awo,B.AyV];break;
default:throw new Error(Ayh+L8.toFixed());}break;default:throw new Error(AWo+Bcm.
toFixed());}return AAp;},A7g:function(Qi,Bx8){var AaP=A._NewObject(A.Core.Bs,0);
AaP.Initialize(Qi);var ABI=AaP.Year;var Bf=A._GetAutoObject(C.Device).Pr.LV(0,ABI
);var Va=A._NewObject(C.CalfDeregistrations,0);if(Bf<0){if(A._GetAutoObject(C.Device
).Pr.Lj())A._GetAutoObject(C.Device).A3(51,true,A._GetAutoObject(C.Device).Pr.HK(
).toFixed(),0,null);else{Va.Gr();Va.AkH(ABI);}}else Va.E3(Bf,A._GetAutoObject(C.
Device).Pr);Va.AwF(Va.Deregistrations+1);if(Bx8)Va.AwE(Va.Deaths+1);Va.Ci(A._GetAutoObject(
C.Device).Pr);},AMq:function(LT,AlR,AlI){var AKO=0;if((AlR&&(AlI===1))||(LT===1)
)AKO=1;else if((AlR&&(AlI===2))||(LT===2))AKO=2;else if(!!LT&&(LT!==5))AKO=LT;return AKO;
},Bdp:function(Byn){var B;if(A._GetAutoObject(C.Device).MeasureState===1){this.SU.
Cx=A._GetAutoObject(C.Device).AcG;this.SU.B3=Byn;this.SU.AnY(this);}},AC6:function(
){var Be=this.AOQ();var Bed=A._NewObject(C.BoolFilterCriterion,0);Bed.Initialize(
38,0,true,true);Be.CX(Bed);return Be;},A6X:function(Eh){var Be=A._GetAutoObject(
C.Helper).Mv();if(A._GetAutoObject(C.Device).Aqg){var A2C=A._GetAutoObject(C.Helper
).AOR(Eh,21600,true);Be.CX(A2C);}return Be;},A7a:function(){var Be=A._GetAutoObject(
C.Helper).Mv();var BeF=A._NewObject(C.UInt64FilterCriterion,0);BeF.Initialize(26
,0,0,true);Be.CX(BeF);return Be;},A7d:function(){var B;var Be=A._GetAutoObject(C.
Helper).Mv();var AAv=(C.WhereAboutsFilterCriterion.isPrototypeOf(B=Be.DL(34,3))?
B:null);if(!!AAv)Be.Nq(AAv);var Bf1=A._NewObject(C.BoolFilterCriterion,0);Bf1.Initialize(
37,0,true,true);Be.CX(Bf1);return Be;},VZ:function(A7,Aty,A1e){var B;A7=Math.trunc(
A7/this.ApT(Aty));A7%=this.ApT(A1e);return A7;},ApT:function(Bcn){switch(Bcn){case
0:return 1;case 1:return 10;case 2:return 100;case 3:return 1000;case 4:return 10000;
case 5:return 100000;case 6:return 1000000;case 7:return 10000000;case 8:return 100000000;
case 9:return 1000000000;case 10:return 10000000000;case 11:return 100000000000;
case 12:return 1000000000000;case 13:return 10000000000000;case 14:return 100000000000000;
case 15:return 1000000000000000;default:throw new Error(AWp+Bcn.toFixed());}},Mv:
function(){var Be=A._NewObject(C.Filter,0);var Bgm=A._NewObject(C.BoolFilterCriterion
,0);Bgm.Initialize(10,0,true,true);Be.CX(Bgm);var AAv=A._NewObject(C.WhereAboutsFilterCriterion
,0);AAv.Initialize(34,3,6,true);Be.CX(AAv);return Be;},Arg:function(aFilter){return!
this.AC_(aFilter);},AC_:function(aFilter){var Jn=0;var Aw=aFilter.AOS();while(!!
Aw){if(Aw.YL===false)Jn++;Aw=aFilter.AOX(Aw);}return Jn;},AOQ:function(){var Be=
this.Mv();var U9=A._NewObject(C.AnimalTypeFilterCriterion,0);U9.Initialize(14,0,
1,true);Be.CX(U9);return Be;},ADd:function(){var B;var A4H;var Ka=this.BjG();A4H=(((
B=A._GetAutoObject(C.Converter).AqB(Ka))<0)?B+0x10000000000000000:B)*this.ApT(12
);if((Ka===10)&&(A._GetAutoObject(C.Device).PY>0)){var BzQ=A._GetAutoObject(C.Helper
).VZ(A._GetAutoObject(C.Device).PY,10,2)*this.ApT(8);A4H+=BzQ;}return A4H;},BjG:
function(){var Ka=0;if(A._GetAutoObject(C.Device).PY>0)Ka=A._GetAutoObject(C.Converter
).S3(A._GetAutoObject(C.Device).PY);if(!Ka)Ka=A._GetAutoObject(C.Converter).A7K(
A._GetAutoObject(C.Device).Language);return Ka;},ARr:function(Xr){var AiA=A._GetAutoObject(
C.Device).An.Aem(26,Xr);return AiA;},Aj7:function(AfN){switch(AfN){case 0:case 1:
case 2:case 3:case 4:case 5:return false;case 6:case 7:case 8:case 9:case 10:return true;
default:throw new Error(AWq+AfN.toFixed());}},BhB:function(Rr,En){var Gv=0;switch(
Rr){case 1:Gv=A._GetAutoObject(C.Helper).Ak7(En.TransponderId);break;case 0:if(!
A._GetAutoObject(C.Device).EartagNrAssignmentMode)Gv=A._GetAutoObject(C.Device).
AjV;else switch(En.Gender){case 0:Gv=A._GetAutoObject(C.Device).Aq7;break;case 1:
Gv=A._GetAutoObject(C.Device).Aq6;break;case 2:Gv=A._GetAutoObject(C.Device).AjV;
break;default:throw new Error(AHF+En.Gender.toFixed());}break;default:throw new Error(
AWr+Rr.toFixed());}return Gv;},Bjc:function(){var B;var Az3=(((((((A.aaR(A.acf.AhL
)+A.aaR(A.acf.Colon))+MM)+A._GetAutoObject(C.Device).AhL)+Ayj)+A.aaR(A.acf.BoH))+
A.aaR(A.acf.Colon))+MM)+A._GetAutoObject(A.acj.KO).Bja(((B=A._GetAutoObject(C.Device
).Q1.Timestamp)<0)?B+0x100000000:B);return Az3;},Bjd:function(){var B;var Az3=((((((((((((((((((((((((((((
AWs+A._GetAutoObject(C.Device).R3.AEj.toFixed())+Ly)+A._GetAutoObject(C.Device).
R3.AEo.toFixed())+Ly)+A._GetAutoObject(C.Device).R3.AGA.toFixed())+O8)+A._GetAutoObject(
C.Device).R3.ACw)+O8)+A._GetAutoObject(A.acj.KO).AjN(((B=A._GetAutoObject(C.Device
).R3.Timestamp)<0)?B+0x100000000:B))+MM)+AWt)+A._GetAutoObject(C.Device).SB.AEj.
toFixed())+Ly)+A._GetAutoObject(C.Device).SB.AEo.toFixed())+Ly)+A._GetAutoObject(
C.Device).SB.AGA.toFixed())+O8)+A._GetAutoObject(C.Device).SB.ACw)+O8)+A._GetAutoObject(
A.acj.KO).AjN(((B=A._GetAutoObject(C.Device).SB.Timestamp)<0)?B+0x100000000:B))+
MM)+AWu)+A._GetAutoObject(C.Helper).BjJ())+O8)+A._GetAutoObject(C.Device).GetCommitHash(
))+O8)+A._GetAutoObject(C.Device).GetCommitCount().toFixed())+O8)+A._GetAutoObject(
A.acj.KO).AjN(A._GetAutoObject(C.Device).GetCommitEpoch());return Az3;},Bjb:function(
){var B;var Az3=(((((((((((((((((((((AWv+A._GetAutoObject(C.Device).Q1.ARR.toFixed(
))+Ly)+A._GetAutoObject(C.Device).Q1.ARS.toFixed())+Ly)+A._GetAutoObject(C.Device
).Q1.ARQ.toFixed())+MM)+A.aaR(A.acf.A6Q))+A.aaR(A.acf.Colon))+Of)+A._GetAutoObject(
A.acj.KO).AjN(((B=A._GetAutoObject(C.Device).Q1.Timestamp)<0)?B+0x100000000:B))+
Ayj)+AWw)+A._GetAutoObject(C.Device).S0.AVB.toFixed())+Ly)+A._GetAutoObject(C.Device
).S0.AVC.toFixed())+Ly)+A._GetAutoObject(C.Device).S0.AVA.toFixed())+MM)+A.aaR(A.
acf.A6Q))+A.aaR(A.acf.Colon))+Of)+A._GetAutoObject(A.acj.KO).AjN(((B=A._GetAutoObject(
C.Device).S0.Timestamp)<0)?B+0x100000000:B);return Az3;},A7b:function(A1e){var B;
var O;var AA3=A.jV;for(O=1;O<=A1e;O=O+1)if(!!A.abz(0,2))AA3=AA3+String.fromCharCode(
A.abz(97,104)&0xFFFF);else AA3=AA3+String.fromCharCode(A.abz(48,57)&0xFFFF);return AA3;
},Abr:function(Eo){var Azj=0;if(Eo===1)Eo=0;var Bc6=this.AgG.Avw(Eo);if(Bc6>=0)Azj=
this.Afz.Get(Bc6);return Azj;},ADf:function(Eo){var FW=0;var ABG=this.AgG.Avw(Eo
);if(ABG>=0)FW=this.Afy.Get(ABG);return FW;},ADe:function(Eo){var FW=0;var ABG=this.
AgG.Avw(Eo);if(ABG>=0)FW=this.Afx.Get(ABG);return FW;},A63:function(){var Be=this.
Mv();var U9=A._NewObject(C.AnimalTypeFilterCriterion,0);U9.Initialize(14,0,A._GetAutoObject(
C.Device).ACP,true);Be.CX(U9);return Be;},ARu:function(J_){var BN=Math.trunc(J_/
1000000000000)|0;if(!BN)return 0;else if(BN>=900)return 1;else if(!A._GetAutoObject(
C.Converter).ANI(BN))return 2;else return 3;},A7f:function(BAw){var Be=A._GetAutoObject(
C.Helper).AC9();var AfS=A._GetAutoObject(C.Helper).A6Y(3,BAw);AfS.YL=true;Be.CX(
AfS);return Be;},A6Y:function(Eb,Bb9){var Aw=A._NewObject(C.UInt32FilterCriterion
,0);Aw.EJ=4;switch(Eb){case 2:{Aw.Operator=3;Aw.A5=A._GetAutoObject(C.Helper).ZS(
Bb9);}break;case 3:{Aw.Operator=2;Aw.A5=A._GetAutoObject(C.Helper).ZS(Bb9-1);}break;
default:A.ab5("%s%e",AHG,Eb);}return Aw;},BjJ:function(){return(((A._GetAutoObject(
C.Device).GetVersionMajor().toFixed()+Ly)+A._GetAutoObject(C.Device).GetVersionMinor(
).toFixed())+Ly)+A._GetAutoObject(C.Device).GetVersionRev().toFixed();},A5p:function(
Rr,En){var Gv=0;switch(Rr){case 0:Gv=En.VisualId;break;case 2:Gv=A._GetAutoObject(
C.Helper).Ak7(En.TransponderId);break;case 3:if(En.NaisId>0)Gv=A._GetAutoObject(
C.Helper).Ak7(En.NaisId);else Gv=En.VisualId;break;case 1:if(!A._GetAutoObject(C.
Device).EartagNrAssignmentMode)Gv=A._GetAutoObject(C.Device).AjV;else switch(En.
Gender){case 0:Gv=A._GetAutoObject(C.Device).Aq7;break;case 1:Gv=A._GetAutoObject(
C.Device).Aq6;break;case 2:Gv=A._GetAutoObject(C.Device).AjV;break;default:throw new
Error(AHF+En.Gender.toFixed());}break;default:throw new Error(AWx+Rr.toFixed());
}return Gv;},Bai:function(){var B;var IZ=null;var Tm=0;if(!A._GetAutoObject(C.Device
).EartagNrAssignmentMode){IZ=[B=A._GetAutoObject(C.Device),B.Anu,B.AoB];Tm=A._GetAutoObject(
C.Device).Au9;}else switch(A._GetAutoObject(C.Helper).W.Gender){case 1:{IZ=[B=A.
_GetAutoObject(C.Device),B.Awi,B.AyR];Tm=A._GetAutoObject(C.Device).ACH;}break;case
0:{IZ=[B=A._GetAutoObject(C.Device),B.Awj,B.AyS];Tm=A._GetAutoObject(C.Device).ACI;
}break;case 2:{IZ=[B=A._GetAutoObject(C.Device),B.Anu,B.AoB];Tm=A._GetAutoObject(
C.Device).Au9;}break;default:;}if(!!IZ)switch(Tm){case 1:IZ[2].call(IZ[0],A._GetAutoObject(
C.Helper).W.VisualId-1);break;case 0:IZ[2].call(IZ[0],A._GetAutoObject(C.Helper).
W.VisualId+1);break;default:;}},A7I:function(Xr,En){return(En.NaisId!==Xr)&&this.
ARr(Xr);},Bkc:function(Ix,En){return(En.TransponderId!==Ix)&&this.ARt(Ix);},AOO:
function(){var Be=A._GetAutoObject(C.Helper).A7d();var AAn=A._NewObject(C.UInt64FilterCriterion
,0);AAn.Initialize(35,5,0,true);Be.CX(AAn);return Be;},Avx:function(){var Be=A._GetAutoObject(
C.Helper).A7d();var AAn=A._NewObject(C.UInt64FilterCriterion,0);AAn.Initialize(35
,0,0,true);Be.CX(AAn);return Be;},J4:function(A07,Ah7){A07.Aj(Ah7);A07.Ar(Ah7);A07.
Z(Ah7);},ANC:function(Ah9){var B;var Aa;var A3f=false;var Xx=Ah9.TT(null,0x1);while(
!!Xx&&(((B=Xx)?B.__proto__:null)!==A.Core.Y)){Aa=(A.kR.Co.isPrototypeOf(Xx)?Xx:null
);if(!!Aa){Aa.Bi(A3f);A3f=!A3f;}Xx=Ah9.TT(Xx,0x1);}},Bo1:function(Ix){var Xu=A._GetAutoObject(
C.Device).An.Filter;A._GetAutoObject(C.Device).An.Bk(null);var A4n=A._GetAutoObject(
C.Device).An.AgZ(22,Ix);var Cz=A._NewObject(C.Animal,0);Cz.E3(A4n,A._GetAutoObject(
C.Device).An);Cz.PW(0);Cz.Ci(A._GetAutoObject(C.Device).An);A._GetAutoObject(C.Device
).An.Bk(Xu);},A61:function(Atx,AoF){var Be=null;switch(Atx){case 0:Be=this.Bju(AoF
);break;case 1:Be=this.AC9();break;default:throw new Error(Ayk+Atx.toFixed());}return Be;
},Bju:function(Bxg){var Be=A._GetAutoObject(C.Helper).Mv();var AfS=this.A6Y(2,Bxg
);Be.CX(AfS);return Be;},ByM:function(Atx,AoF){var Xu=A._GetAutoObject(C.Device).
An.Filter;A._GetAutoObject(C.Device).An.Bk(this.A61(Atx,AoF));var CB=A._GetAutoObject(
C.Device).An.B_();var O;for(O=CB-1;O>=0;O--){A._GetAutoObject(C.Helper).G8(O);A.
_GetAutoObject(C.Helper).W.Ae5(false);A._GetAutoObject(C.Helper).W.Ci(A._GetAutoObject(
C.Device).An);}A._GetAutoObject(C.Device).An.Bk(Xu);},Bjv:function(Atx,AoF){var Xu=
A._GetAutoObject(C.Device).An.Filter;A._GetAutoObject(C.Device).An.Bk(this.A61(Atx
,AoF));var Gh=A._GetAutoObject(C.Device).An.B_();A._GetAutoObject(C.Device).An.Bk(
Xu);return Gh;},A69:function(AH){var Xu=AH.Filter;AH.Bk(this.Avx());var O;var A27=
4294967295;for(O=0;O<AH.B_();O++){var Pc=AH.Hv(O,4);if(Pc<A27)A27=Pc;}AH.Bk(Xu);
return A._GetAutoObject(C.Helper).Mb(A27,A._GetAutoObject(C.Helper).Dv());},Bj$:
function(){if(A._GetAutoObject(C.Device).P4.Z2!==6)return false;if((A._GetAutoObject(
C.Device).P4.AsS===1529)&&(A._GetAutoObject(C.Device).P4.Asl===16900))return true;
return false;},ArA:function(){return this.UD;},A9o:function(){return this.AhI;},
BlO:function(){return this.AUJ;},BlP:function(){return this.AUK;},BlS:function(){
return this.AG2;},_Init:function(aArg){C.AmP._Init.call(this,aArg);C.Animal._Init.
call(this.W={I:this},0);A.Core.Bs._Init.call(this.Av={I:this},0);A.acl.Gm._Init.
call(this.KK={I:this},0);A.acl.Gm._Init.call(this.SU={I:this},0);C.AMM._Init.call(
this.Ad1={I:this},0);C.AVq._Init.call(this.UK={I:this},0);C.AVp._Init.call(this.
UJ={I:this},0);C.TM._Init.call(this.Aeo={I:this},0);C.AV6._Init.call(this.Afy={I:
this},0);C.AV5._Init.call(this.Afx={I:this},0);C.AV4._Init.call(this.Afw={I:this
},0);C.AV8._Init.call(this.Afz={I:this},0);C.AMN._Init.call(this.AgG={I:this},0);
this.__proto__=C.HelperClass;var B;this.KK.HO(1);this.KK.Fr(3000);this.KK.B3=100;
this.SU.AwK(10);this.SU.WJ(5);this.SU.HO(1);this.SU.Fr(4000);this.Aeo.B3=false;this.
Aeo.Cx=true;this.Aeo.HO(1);this.Aeo.Fr(100);this.KK.SC=[this,this.BCD];this.KK.Q=[
this,this.BlS,this.Bn$];this.SU.SC=[this,this.BCF];this.SU.Q=[B=A._GetAutoObject(
C.Device),B.AEQ,B.AI3];this.Aeo.Q=[B=A._GetAutoObject(C.Device),B.AER,B.AI4];this.
Init(aArg);var J8=this._variants();if(J8){this.K={};J8._Init.call(this,aArg);}},
_Done:function(){if(this.K)this.K._Done.call(this);this.__proto__=C.AmP;this.W._Done(
);this.Av._Done();this.KK._Done();this.SU._Done();this.Ad1._Done();this.UK._Done(
);this.UJ._Done();this.Aeo._Done();this.Afy._Done();this.Afx._Done();this.Afw._Done(
);this.Afz._Done();this.AgG._Done();C.AmP._Done.call(this);},_ReInit:function(){
C.AmP._ReInit.call(this);this.W._ReInit();this.Av._ReInit();this.KK._ReInit();this.
SU._ReInit();this.Ad1._ReInit();this.UK._ReInit();this.UJ._ReInit();this.Aeo._ReInit(
);this.Afy._ReInit();this.Afx._ReInit();this.Afw._ReInit();this.Afz._ReInit();this.
AgG._ReInit();if(this.K)this.K._ReInit.call(this);},_Mark:function(D){var B;C.AmP.
_Mark.call(this,D);if((B=this.UD)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.
AhI)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.AUJ)&&(B._cycle!=D))B._Mark(B.
_cycle=D);if((B=this.AUK)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.W)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.Av)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
KK)._cycle!=D)B._Mark(B._cycle=D);if((B=this.SU)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Ad1)._cycle!=D)B._Mark(B._cycle=D);if((B=this.UK)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.UJ)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Aeo)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Afy)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Afx)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.Afw)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
Afz)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AgG)._cycle!=D)B._Mark(B._cycle=D);
if(this.K)this.K._Mark(D);},_variants:function(){return A.acs.HelperClass._variants(
);},K:null,_className:"Device::HelperClass"};C.Helper={_Init:function(){C.HelperClass.
_Init.call(this,0);},_ReInit:function(){},_variants:function(){return this;},_this:
null};C.BoolFilterCriterion={A5:false,Abk:function(){var Aw=A._NewObject(C.BoolFilterCriterion
,0);Aw.E$(this);return Aw;},E$:function(AI){C.FilterCriterion.E$.call(this,AI);var
Aw=(C.BoolFilterCriterion.isPrototypeOf(AI)?AI:null);if(!!Aw)this.A5=Aw.A5;},Initialize:
function(A4,Eb,A7,Qg){this.EJ=A4;this.Operator=Eb;this.A5=A7;this.YL=Qg;return this;
},_Init:function(aArg){C.FilterCriterion._Init.call(this,aArg);this.__proto__=C.
BoolFilterCriterion;},_className:"Device::BoolFilterCriterion"};C.UInt32FilterCriterion={
A5:0,Abk:function(){var Aw=A._NewObject(C.UInt32FilterCriterion,0);Aw.E$(this);return Aw;
},E$:function(AI){C.FilterCriterion.E$.call(this,AI);var Aw=(C.UInt32FilterCriterion.
isPrototypeOf(AI)?AI:null);if(!!Aw)this.A5=Aw.A5;},Initialize:function(A4,Eb,A7,
Qg){this.EJ=A4;this.Operator=Eb;this.A5=A7;this.YL=Qg;return this;},_Init:function(
aArg){C.FilterCriterion._Init.call(this,aArg);this.__proto__=C.UInt32FilterCriterion;
},_className:"Device::UInt32FilterCriterion"};C.OverlayMenu={None:0,Home:1,AutoAction:
2,MenuItemSettings:3,RatingSettings:4,WeighingSettings:5,Options:6,AnimalSearch:
7,ActionSettings:8,MeasurementReady:9,AnimalMultiInfoMenu:10,AnimalSearchUnfiltered:
11,AnimalSearchDriedOff:12,MassRecordingMenu:13,MassRecordingDefaults:14,MassRecordingFields:
15,BirthRegistrationsListMenu:16,LAST:17};C.EnumToString={BT:function(A9){throw new
Error(As8+A9.toFixed());},Lx:function(A9){return this.BT(A9);},_Init:function(aArg
){this.__proto__=C.EnumToString;A.h7++;},_Done:function(){this.__proto__=null;A.
h7--;},_ReInit:function(){},_Mark:function(D){var B;if((B=this.I)&&(B._cycle!=D)
)B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:"Device::EnumToString"
};C.ScreenTypeToString={BT:function(A9){var AJ5=A9;var BC;switch(AJ5){case 3:BC=
A.aaR(A.acf.AvD);break;case 34:BC=A.aaR(A.acf.TB);break;case 35:BC=A.aaR(A.acf.Vx
);break;case 43:BC=A.aaR(A.acf.AON);break;default:BC=this.Bqp(A9);}return BC;},Bqp:
function(A9){var AJ5=A9;var BC=A.jV;switch(AJ5){case 0:BC=Ayl;break;case 2:BC=AWy;
break;case 4:BC=AWz;break;case 39:BC=AHH;break;case 38:BC=AWA;break;case 63:BC=AHI;
break;case 64:BC=AHJ;break;case 82:BC=AHK;break;case 83:BC=AWB;break;case 92:BC=
AHL;break;case 93:BC=AWC;break;case 65:BC=AWD;break;case 3:BC=Qc;break;case 6:BC=
Xj;break;case 16:BC=AWE;break;case 22:BC=AWF;break;case 42:BC=AWG;break;case 88:
BC=AWH;break;case 87:BC=AWI;break;case 89:BC=AWJ;break;case 95:BC=AWK;break;case
17:BC=Ah0;break;case 23:BC=AHM;break;case 18:BC=AWL;break;case 19:BC=AWM;break;case
37:BC=AHN;break;case 76:BC=AHO;break;case 1:BC=Aym;break;case 5:BC=Qd;break;case
7:BC=AWN;break;case 81:BC=AWO;break;case 8:BC=AWP;break;case 9:BC=As9;break;case
40:BC=AWQ;break;case 41:BC=AWR;break;case 24:BC=AWS;break;case 10:BC=AWT;break;case
60:BC=AWU;break;case 21:BC=AWV;break;case 11:BC=As_;break;case 29:BC=AWW;break;case
48:BC=AWX;break;case 30:BC=AWY;break;case 12:BC=AWZ;break;case 13:BC=AW0;break;case
14:BC=AW1;break;case 15:BC=AW2;break;case 69:BC=AW3;break;case 70:BC=AW4;break;case
20:BC=AW5;break;case 25:BC=AHP;break;case 66:BC=Alf;break;case 59:BC=AW6;break;case
58:BC=AW7;break;case 56:BC=AW8;break;case 57:BC=Ayn;break;case 68:BC=Alg;break;case
67:BC=Ah1;break;case 84:BC=Ayo;break;case 77:BC=Aop;break;case 26:BC=Ah2;break;case
28:BC=AW9;break;case 27:BC=Ayp;break;case 31:BC=AHQ;break;case 78:BC=AfF;break;case
34:BC=AHR;break;case 35:BC=Aag;break;case 32:BC=Alh;break;case 45:BC=Aoq;break;case
49:BC=AW_;break;case 55:BC=AW$;break;case 54:BC=AXa;break;case 33:BC=AXb;break;case
36:BC=AXc;break;case 50:BC=As$;break;case 75:BC=AHS;break;case 43:BC=AHT;break;case
44:BC=AXd;break;case 61:BC=AXe;break;case 62:BC=AXf;break;case 46:BC=AXg;break;case
47:BC=AXh;break;case 85:BC=AXi;break;case 86:BC=AXj;break;case 71:BC=AXk;break;case
72:BC=AXl;break;case 74:BC=AXm;break;case 73:BC=AXn;break;case 51:BC=Ayq;break;case
52:BC=AHU;break;case 53:BC=AHV;break;case 79:BC=AHW;break;case 80:BC=AHX;break;case
90:BC=AHY;break;case 91:BC=AHZ;break;case 94:BC=AXo;break;default:throw new Error(
AXp+AJ5.toFixed());}return BC;},_Init:function(aArg){C.EnumToString._Init.call(this
,aArg);this.__proto__=C.ScreenTypeToString;},_className:"Device::ScreenTypeToString"
};C.OverlayMenuToString={BT:function(A9){var BfW=A9;var Pf=A.jV;switch(BfW){case
0:Pf=AXq;break;case 1:Pf=Qc;break;case 8:Pf=AXr;break;case 2:Pf=AXs;break;case 3:
Pf=AXt;break;case 4:Pf=AXu;break;case 5:Pf=Ayr;break;case 6:Pf=AH0;break;case 7:
Pf=AXv;break;case 11:Pf=AH1;break;case 12:Pf=Ah3;break;case 9:Pf=U2;break;case 10:
Pf=AXw;break;case 14:Pf=Aah;break;case 15:Pf=AXx;break;case 13:Pf=AXy;break;case
16:Pf=Ali;break;default:throw new Error(AfG+BfW.toFixed());}return Pf;},_Init:function(
aArg){C.EnumToString._Init.call(this,aArg);this.__proto__=C.OverlayMenuToString;
},_className:"Device::OverlayMenuToString"};C.ScanStateToString={BT:function(A9){
var Bgu=A9;var Bp=A.jV;switch(Bgu){case 4:Bp=AcQ;break;case 0:Bp=Aor;break;case 2:
Bp=AXz;break;case 3:Bp=O_;break;case 1:Bp=AH2;break;default:throw new Error(AH3+
Bgu.toFixed());}return Bp;},_Init:function(aArg){C.EnumToString._Init.call(this,
aArg);this.__proto__=C.ScanStateToString;},_className:"Device::ScanStateToString"
};C.MeasureStateToString={BT:function(A9){var Bez=A9;var Bp=A.jV;switch(Bez){case
4:Bp=AcQ;break;case 0:Bp=Aor;break;case 2:Bp=AXA;break;case 1:Bp=AH2;break;case 3:
Bp=AH4;break;default:throw new Error(AH5+Bez.toFixed());}return Bp;},_Init:function(
aArg){C.EnumToString._Init.call(this,aArg);this.__proto__=C.MeasureStateToString;
},_className:"Device::MeasureStateToString"};C.TemperatureUnit={Celsius:0,Fahrenheit:
1,LAST:2};C.TemperatureUnitToString={BT:function(A9){var BgU=A9;var Ap_=A.jV;switch(
BgU){case 0:Ap_=A.aaR(A.acf.BqG);break;case 1:Ap_=A.aaR(A.acf.BqH);break;default:
throw new Error(AH6+BgU.toFixed());}return Ap_;},_Init:function(aArg){C.EnumToString.
_Init.call(this,aArg);this.__proto__=C.TemperatureUnitToString;},_className:"Device::TemperatureUnitToString"
};C.AnimalType={DairyCalf:0,DairyCow:1,SheepLamb:2,LAST:3};C.AnimalTypeToString={
BT:function(A9){var ALd=A9;var type=A.jV;switch(ALd){case 0:type=A.aaR(A.acf.Bh1
);break;case 1:type=A.aaR(A.acf.Bid);break;case 2:type=A.aaR(A.acf.Bkk);break;default:
throw new Error(AXB+ALd.toFixed());}return type;},_Init:function(aArg){C.EnumToString.
_Init.call(this,aArg);this.__proto__=C.AnimalTypeToString;},_className:"Device::AnimalTypeToString"
};C.Language={Default:0,German:1,Spanish:2,French:3,Italian:4,Finnish:5,Chinese_TW:
6,Turkish:7,Greek:8,Russian:9,Dutch:10,Czech:11,Estonian:12,Bulgarian:13,Bosnian:
14,Norwegian:15,Ukrainian:16,Danish:17,Hungarian:18,Japanese:19,Latvian:20,Polish:
21,Portuguese:22,Romanian:23,Swedish:24,Croatian:25,Lithuanian:26,Slovenian:27,LAST:
28};C.LanguageToString={BT:function(A9){var AAg=A9;var I0=A.jV;switch(AAg){case 14:
I0=AXC;break;case 13:I0=AXD;break;case 6:I0=AXE;break;case 25:I0=AXF;break;case 11:
I0=AXG;break;case 17:I0=AXH;break;case 0:I0=AXI;break;case 10:I0=AH7;break;case 12:
I0=AXJ;break;case 5:I0=AH8;break;case 3:I0=AH9;break;case 1:I0=Ays;break;case 8:
I0=AXK;break;case 18:I0=AXL;break;case 4:I0=AXM;break;case 19:I0=AXN;break;case 20:
I0=AXO;break;case 26:I0=AXP;break;case 15:I0=AXQ;break;case 21:I0=AXR;break;case
22:I0=Ata;break;case 23:I0=Atb;break;case 9:I0=AH_;break;case 27:I0=AXS;break;case
2:I0=AXT;break;case 24:I0=AXU;break;case 7:I0=AXV;break;case 16:I0=AXW;break;default:
throw new Error(AH$+AAg.toFixed());}return I0;},Lx:function(A9){var AAg=A9;var CO=
A.jV;switch(AAg){case 14:CO=AXX;break;case 13:CO=W9;break;case 6:CO=AXY;break;case
25:CO=UY;break;case 11:CO=AXZ;break;case 17:CO=AX0;break;case 0:CO=AX1;break;case
10:CO=Xe;break;case 12:CO=AX2;break;case 5:CO=UZ;break;case 3:CO=W$;break;case 1:
CO=O7;break;case 8:CO=AX3;break;case 18:CO=Oe;break;case 4:CO=Xa;break;case 19:CO=
AX4;break;case 20:CO=Ta;break;case 26:CO=Xc;break;case 15:CO=Tb;break;case 21:CO=
Tc;break;case 22:CO=Td;break;case 23:CO=Aab;break;case 9:CO=Te;break;case 27:CO=
AIa;break;case 2:CO=Aad;break;case 24:CO=AX5;break;case 7:CO=Xg;break;case 16:CO=
K1;break;default:throw new Error(AH$+AAg.toFixed());}return CO;},_Init:function(
aArg){C.EnumToString._Init.call(this,aArg);this.__proto__=C.LanguageToString;},_className:
"Device::LanguageToString"};C.Gender={Male:0,Female:1,Unknown:2,LAST:3};C.BirthType={
Single:0,Twins:1,Triplets:2,Quadruplets:3,LAST:4};C.GenderToString={BT:function(
A9){var AtX=A9;var AKl=A.jV;switch(AtX){case 0:AKl=A.aaR(A.acf.Male);break;case 1:
AKl=A.aaR(A.acf.Female);break;case 2:AKl=A.aaR(A.acf.Unknown);break;default:throw new
Error(AX6+AtX.toFixed());}return AKl;},_Init:function(aArg){C.EnumToString._Init.
call(this,aArg);this.__proto__=C.GenderToString;},_className:"Device::GenderToString"
};C.BirthTypeToString={BT:function(A9){var type=A9;var AfW=A.jV;switch(type){case
0:AfW=A.aaR(A.acf.BpE);break;case 1:AfW=A.aaR(A.acf.BqC);break;case 2:AfW=A.aaR(
A.acf.Triplets);break;case 3:AfW=A.aaR(A.acf.Quadruplets);break;default:throw new
Error(AX7+type.toFixed());}return AfW;},_Init:function(aArg){C.EnumToString._Init.
call(this,aArg);this.__proto__=C.BirthTypeToString;},_className:"Device::BirthTypeToString"
};C.SyncState={Idle:0,Init:1,Exporting:2,ImportStart:3,Importing:4,ImportFinish:
5,Ready:6,Error:7,LAST:8};C.SyncStateToString={BT:function(A9){var BgO=A9;var Bp=
A.jV;switch(BgO){case 7:Bp=AcQ;break;case 0:Bp=Aor;break;case 6:Bp=AH4;break;case
2:Bp=AIb;break;case 5:Bp=AIc;break;case 3:Bp=AId;break;case 4:Bp=AIe;break;case 1:
Bp=Ayt;break;default:throw new Error(Ayu+BgO.toFixed());}return Bp;},_Init:function(
aArg){C.EnumToString._Init.call(this,aArg);this.__proto__=C.SyncStateToString;},
_className:"Device::SyncStateToString"};C.RatedAttributeToString={BT:function(A9
){var AA4=A9;switch(AA4){case 0:return A.jV;case 1:return A.aaR(A.acf.BoO);case 4:
return A.aaR(A.acf.BoN);case 3:return A.aaR(A.acf.BoP);case 2:return A.aaR(A.acf.
BoM);default:throw new Error(Ayv+AA4.toFixed());}},Lx:function(A9){var AA4=A9;switch(
AA4){case 0:return A.jV;case 1:return A.aaR(A.acf.Feed);case 4:return A.aaR(A.acf.
AGt);case 3:return A.aaR(A.acf.AGu);case 2:return A.aaR(A.acf.AGr);default:throw new
Error(Ayv+AA4.toFixed());}},_Init:function(aArg){C.EnumToString._Init.call(this,
aArg);this.__proto__=C.RatedAttributeToString;},_className:"Device::RatedAttributeToString"
};C.AssesmentToString={BT:function(A9){var Alx=A9;var Azq=A.jV;switch(Alx){case 0:
case 5:Azq=A.jV;break;case 3:Azq=A.aaR(A.acj.BpK);break;case 2:Azq=A.aaR(A.acj.BpM
);break;case 1:Azq=A.aaR(A.acj.BpL);break;default:throw new Error(AX8+Alx.toFixed(
));}return Azq;},_Init:function(aArg){C.EnumToString._Init.call(this,aArg);this.
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
96,WarningDataExportPurchasedFailed:97,RemovedFromPurchasedNoticePending:98,SuccessDataExportPurchasedDownload:
99,SuccessDataExportPurchased:100,WarningParsingDateFailed:101,WarningParsedDateInFutureInvalid:
102,WarningParsingNaisIdFailed:103,RemovedAnimalPurchased:104,WarningParsingShortNaisIdWithoutPremisesId:
105,SuccessChangeTransponder:106,TransponderAlreadyRegisteredCapturable:107,ConfirmationMassDeregistration:
108,SuccessMassDeregistration:109,DataExportInProgress:110,BarcodeScannerConnectedSwitchScreen:
111,BarcodeScannerDisconnectedSwitchScreen:112,SuccessDataExportHitBirthResetAdvice:
113,SuccessDataExportPurchasedResetAdvice:114,WarningResetDeviceData:115,SuccessResetSettings:
116,LAST:117};C.PopupState={Queued:0,Unknown:1,Displayed:2,ClosedAfterTimeOut:3,
ClosedWithOk:4,ClosedWithCancel:5,ClosedByMiddleware:6,ClosedWithYes:7,ClosedWithNo:
8,Opened:9};C.PopupContext={AGe:null,AkJ:A.jV,Ak4:0,PopupState:1,Id:0,Show:false
,BnU:function(E){var B;if(this.PopupState===E)return;this.PopupState=E;if(!!this.
AGe)(B=this.AGe)?B[1].call(B[0],this):null;},_Init:function(aArg){this.__proto__=
C.PopupContext;A.h7++;},_Done:function(){this.__proto__=null;A.h7--;},_ReInit:function(
){},_Mark:function(D){var B;if((B=this.AGe)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=
D);if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:
null,_className:"Device::PopupContext"};C.Boolean={No:0,Yes:1,LAST:2};C.BooleanToYesNo={
BT:function(A9){switch(A9){case 0:return A.aaR(A.acf.No);case 1:return A.aaR(A.acf.
Yes);default:return Atc+A9.toFixed();}},_Init:function(aArg){C.EnumToString._Init.
call(this,aArg);this.__proto__=C.BooleanToYesNo;},_className:"Device::BooleanToYesNo"
};C.AnimalGroupTableFields={Id:0,GroupName:1};C.AnimalGroup={GroupName:AHB,Id:0,
E3:function(Ad,AH){var HF=C.Row.E3.call(this,Ad,AH);if(HF&&!!AH){this.OnSetId(AH.
CF(Ad,0));this.AFn(AH.V3(Ad,1));}return HF;},Ci:function(AH){var HF=C.Row.Ci.call(
this,AH);if(HF&&!!AH){var Jr=AH.OC();if(Jr<=0)A.ab5("%s",Xi);else{if(this.Am8())
this.CL=AH.YI();AH.Ho(this.CL,0,this.Id);AH.ZK(this.CL,1,this.GroupName);AH.OE(Jr
);}}return HF;},Gr:function(){C.Row.Gr.call(this);this.OnSetId(-1);},E6:function(
){C.Row.E6.call(this);this.OnSetId(0);this.AFn(A.jV);},OnSetId:function(E){if(this.
Id===E)return;this.Id=E;A.abo([this,this.Q4,this.OnSetId],0);},AFn:function(E){if(
this.GroupName===E)return;this.GroupName=E;A.abo([this,this.Bls,this.AFn],0);},Q4:
function(){return this.Id;},Bls:function(){return this.GroupName;},_Init:function(
aArg){C.Row._Init.call(this,aArg);this.__proto__=C.AnimalGroup;this.TableId=3;},
_className:"Device::AnimalGroup"};C.PopupIdToString={BT:function(A9){var AdE=A9;
var At=A.jV;var AJ3;AJ3=A.aaR(A.acf.Bq0)+MM;switch(AdE){case 0:At=A.aaR(A.acf.Unknown
);break;case 1:At=A.aaR(A.acf.SevereError);break;case 58:At=A.aaR(A.acf.Bi1);break;
case 2:At=A.aaR(A.acf.BiZ);break;case 3:At=A.aaR(A.acf.BqM);break;case 77:At=A._GetAutoObject(
C.Helper).Bjd();break;case 78:At=A._GetAutoObject(C.Helper).Bjb();break;case 79:
At=A._GetAutoObject(C.Helper).Bjc();break;case 9:At=A.aaR(A.acf.Brc);break;case 5:
At=A.aaR(A.acf.SuccessDataSync);break;case 8:At=A.aaR(A.acf.SuccessResetFactorySettings
);break;case 116:At=A.aaR(A.acf.Bp4);break;case 34:At=A.aaR(A.acf.SuccessResetAnimalData
);break;case 10:At=A._GetAutoObject(C.Device).ADc();break;case 82:At=A.aaR(A.acf.
Bi3);break;case 83:At=A.aaR(A.acf.Bi4);break;case 80:At=A.aaR(A.acf.BpW);break;case
81:At=A.aaR(A.acf.SuccessRestoreBackup);break;case 91:At=A.aaR(A.acf.BhO);break;
case 92:At=A.aaR(A.acf.Bo5);break;case 4:At=A.aaR(A.acf.WarningDataSync);break;case
7:At=A.aaR(A.acf.Bra);break;case 33:At=A.aaR(A.acf.WarningResetAnimalData);break;
case 115:At=A.aaR(A.acf.WarningResetDeviceData);break;case 6:At=A.aaR(A.acf.WarningRestart
);break;case 27:At=A.aaR(A.acf.WarningNoActionDefined);break;case 64:At=A.aaR(A.
acf.WarningActionNotApplicable);break;case 28:At=A.aaR(A.acf.WarningNoMenuItemVisible
);break;case 29:At=A.aaR(A.acf.WarningEnterPresentationMode);break;case 30:At=A.
aaR(A.acf.WarningNoAnimalsRegistered);break;case 41:At=((AJ3+A.aaR(A.acf.ARZ))+MM
)+A.aaR(A.acf.Bkx);break;case 50:At=((AJ3+A.aaR(A.acf.ARZ))+MM)+A.aaR(A.acf.Bkz);
break;case 51:At=((AJ3+A.aaR(A.acf.ARZ))+MM)+A.aaR(A.acf.Bky);break;case 42:At=A.
aaR(A.acf.Bq_);break;case 45:At=A.aaR(A.acf.Bq4);break;case 46:At=A.aaR(A.acf.WarningNoValidCountryCode
);break;case 57:At=A.aaR(A.acf.WarningOutdatedAnimalWeight);break;case 52:At=A.aaR(
A.acf.WarningOutdatedAnimalWeights);break;case 53:At=A.aaR(A.acf.WarningWeightEvaluationSingular
);break;case 56:At=A.aaR(A.acf.WarningWeightEvaluationPlural);break;case 11:At=A.
aaR(A.acf.ScanError);break;case 12:At=A.aaR(A.acf.ScanNotFound);break;case 13:At=
A.aaR(A.acf.BhG);break;case 36:At=A.aaR(A.acf.Bqx);break;case 14:At=A.aaR(A.acf.
AnimalNotFound);break;case 15:At=A.aaR(A.acf.SuccessUnregister);break;case 35:At=
A.aaR(A.acf.SuccessUnregisterPerished);break;case 26:At=A.aaR(A.acf.SuccessCreationNewAnimal
);break;case 23:At=A.aaR(A.acf.SuccessCreationNewAnimals);break;case 24:At=A.aaR(
A.acf.Big);break;case 49:At=A.aaR(A.acf.EvaluationInProgress);break;case 16:At=A.
aaR(A.acf.Bil);break;case 17:At=A.aaR(A.acf.BpO);break;case 18:At=A.aaR(A.acf.Bp2
);break;case 19:At=A.aaR(A.acf.BpP);break;case 20:At=A.aaR(A.acf.Bp3);break;case
54:At=A.aaR(A.acf.BpX);break;case 55:At=A.aaR(A.acf.Bp0);break;case 21:At=A.aaR(
A.acf.Ban);break;case 48:At=(A.aaR(A.acf.Ban)+MM)+A.aaR(A.acf.A57);break;case 22:
At=A.aaR(A.acf.Bq6);break;case 63:At=A.aaR(A.acf.Bq7);break;case 85:At=A.aaR(A.acf.
Bq9);break;case 43:At=A.aaR(A.acf.Bq8);break;case 25:At=A.aaR(A.acf.A$7);break;case
47:At=(A.aaR(A.acf.A$7)+MM)+A.aaR(A.acf.A57);break;case 107:At=A.aaR(A.acf.BqI);
break;case 31:{var BAf=(((((((((((((((((((A.aaR(A.acf.Bh9)+Ayj)+A.aaR(A.acf.ANE)
)+A.aaR(A.acf.Colon))+Of)+A.aaR(A.acf.Bh$))+MM)+A.aaR(A.acf.AOD))+A.aaR(A.acf.Colon
))+Of)+A.aaR(A.acf.Bi9))+MM)+A.aaR(A.acf.AUu))+A.aaR(A.acf.Colon))+Of)+A.aaR(A.acf.
BoR))+MM)+A.aaR(A.acf.AUt))+A.aaR(A.acf.Colon))+Of)+A.aaR(A.acf.BoQ);At=BAf;}break;
case 32:At=A.aaR(A.acf.Bqy);break;case 69:At=A.aaR(A.acf.BkK);break;case 44:At=A.
aaR(A.acf.Brb);break;case 37:At=A.aaR(A.acf.WarningResetWeightSettings);break;case
38:At=A.aaR(A.acf.WarningResetTempThresholds);break;case 39:At=A.aaR(A.acf.BoI);
break;case 76:At=(A.aaR(A.acf.A5K)+MM)+A.aaR(A.acf.AUw);break;case 40:At=A.aaR(A.
acf.BpY);break;case 75:At=A.aaR(A.acf.BpQ);break;case 59:At=A.aaR(A.acf.QuestionAddAnotherCalfMultiples
);break;case 62:At=A.aaR(A.acf.BpS);break;case 96:At=A.aaR(A.acf.BpT);break;case
60:At=A.aaR(A.acf.BpU);break;case 98:At=A.aaR(A.acf.BpV);break;case 61:At=A.aaR(
A.acf.Bp5);break;case 104:At=A.aaR(A.acf.Bp6);break;case 65:At=A.aaR(A.acf.SuccessClearAnimalLoss
);break;case 66:At=A.aaR(A.acf.WarningNoActionsForAnimalLoss);break;case 67:At=A.
aaR(A.acf.SuccessLinkTransponder);break;case 106:At=A.aaR(A.acf.BpR);break;case 86:
At=A.aaR(A.acf.SuccessUnlinkTransponder);break;case 68:At=A.aaR(A.acf.BpZ);break;
case 70:At=A.aaR(A.acf.Bi5);break;case 71:At=A.aaR(A.acf.A$Z);break;case 72:At=A.
aaR(A.acf.Bp9);break;case 113:At=(A.aaR(A.acf.A$Z)+MM)+A.aaR(A.acf.A7Y);break;case
97:At=A.aaR(A.acf.Bi7);break;case 100:At=(A.aaR(A.acf.A$0)+MM)+A.aaR(A.acf.A$m);
break;case 114:At=(A.aaR(A.acf.A$0)+MM)+A.aaR(A.acf.A7Y);break;case 99:At=A.aaR(
A.acf.Bp_);break;case 88:At=A.aaR(A.acf.Bi6);break;case 89:At=A.aaR(A.acf.Bp7);break;
case 90:At=A.aaR(A.acf.Bp8);break;case 73:At=A.aaR(A.acf.WarningNoPremisesID);break;
case 74:At=A.aaR(A.acf.WarningNoFlashDrivePresent);break;case 94:At=A.aaR(A.acf.
WarningNoBackupPathPresent);break;case 93:At=A.aaR(A.acf.WarningNoBackupFilePresent
);break;case 84:At=A.aaR(A.acf.Bjk);break;case 87:At=A.aaR(A.acf.Bre);break;case
95:At=A.aaR(A.acf.Bq3);break;case 108:At=A.aaR(A.acf.Bq5);break;case 109:At=A.aaR(
A.acf.SuccessMassDeregistration);break;case 102:At=A.aaR(A.acf.WarningParsedDateInFutureInvalid
);break;case 101:At=A.aaR(A.acf.WarningParsingDateFailed);break;case 103:At=A.aaR(
A.acf.WarningParsingNaisIdFailed);break;case 105:At=A.aaR(A.acf.Bq$);break;case 110:
At=A.aaR(A.acf.Bh0);break;case 111:At=A.aaR(A.acf.Bpf);break;case 112:At=A.aaR(A.
acf.Bpg);break;default:throw new Error(AIf+AdE.toFixed());}return At;},Lx:function(
A9){var AdE=A9;var At=A.jV;switch(AdE){case 0:At=AIg;break;case 1:At=AX9;break;case
58:At=AX_;break;case 2:At=AX$;break;case 3:At=AYa;break;case 77:At=AYb;break;case
78:At=AYc;break;case 79:At=AYd;break;case 9:At=AYe;break;case 5:At=AYf;break;case
8:At=AYg;break;case 116:At=AYh;break;case 34:At=AYi;break;case 80:At=Ayw;break;case
81:At=AYj;break;case 91:At=AYk;break;case 92:At=Ayx;break;case 82:At=Atd;break;case
83:At=U3;break;case 10:At=Ate;break;case 4:At=AYl;break;case 7:At=AYm;break;case
33:At=AYn;break;case 115:At=AIh;break;case 6:At=AYo;break;case 27:At=AIi;break;case
64:At=AYp;break;case 28:At=AYq;break;case 29:At=AYr;break;case 30:At=Atf;break;case
41:At=AYs;break;case 50:At=AYt;break;case 51:At=AIj;break;case 42:At=AYu;break;case
45:At=AYv;break;case 46:At=AYw;break;case 57:At=AYx;break;case 52:At=AcR;break;case
53:At=AYy;break;case 56:At=AYz;break;case 11:At=AYA;break;case 12:At=AYB;break;case
13:At=AIk;break;case 36:At=AYC;break;case 14:At=AYD;break;case 15:At=AYE;break;case
35:At=AYF;break;case 26:At=AYG;break;case 23:At=AYH;break;case 24:At=AIl;break;case
49:At=AYI;break;case 16:At=AYJ;break;case 17:At=AYK;break;case 18:At=AIm;break;case
19:At=AIn;break;case 20:At=AYL;break;case 54:At=AYM;break;case 55:At=AYN;break;case
21:At=AYO;break;case 48:At=Rp;break;case 22:At=Atg;break;case 63:At=AIo;break;case
43:At=AIp;break;case 85:At=Aos;break;case 25:At=Aot;break;case 47:At=Ayy;break;case
107:At=AYP;break;case 31:At=AIq;break;case 32:At=AYQ;break;case 69:At=AYR;break;
case 44:At=AYS;break;case 37:At=AYT;break;case 38:At=AYU;break;case 39:At=AYV;break;
case 76:At=AYW;break;case 40:At=AYX;break;case 75:At=AYY;break;case 59:At=AYZ;break;
case 62:At=AY0;break;case 96:At=AY1;break;case 60:At=AY2;break;case 98:At=AY3;break;
case 65:At=AY4;break;case 61:At=AY5;break;case 104:At=AY6;break;case 66:At=Aou;break;
case 67:At=AIr;break;case 106:At=AY7;break;case 86:At=AIs;break;case 68:At=AIt;break;
case 70:At=AcS;break;case 71:At=AIu;break;case 72:At=AY8;break;case 113:At=AIv;break;
case 97:At=AY9;break;case 100:At=Ayz;break;case 99:At=AY_;break;case 114:At=AY$;
break;case 88:At=AyA;break;case 89:At=AZa;break;case 90:At=AZb;break;case 73:At=
AZc;break;case 74:At=AIw;break;case 94:At=Aov;break;case 93:At=AIx;break;case 84:
At=AZd;break;case 87:At=AIy;break;case 95:At=AIz;break;case 108:At=Alj;break;case
109:At=AZe;break;case 102:At=Aow;break;case 101:At=AZf;break;case 103:At=AIA;break;
case 105:At=AIB;break;case 110:At=AZg;break;case 111:At=AZh;break;case 112:At=AIC;
break;default:throw new Error(AIf+AdE.toFixed());}return At;},_Init:function(aArg
){C.EnumToString._Init.call(this,aArg);this.__proto__=C.PopupIdToString;},_className:
"Device::PopupIdToString"};C.PopupParamSeparator=";";C.RatingMode={Basic:0,Extended:
1,LAST:2};C.TransponderType={UNDEFINED:0,AnimalId:1,FarmId:2,GroupId:3,PersonId:
4,LAST:5};C.TransponderProtocol={UNDEFINED:0,FDX:1,HDX:2,HDX_URBAN:3,LAST:4};C.TransponderTypeToString={
BT:function(A9){var Bg7=A9;var type=A.jV;switch(Bg7){case 1:type=AZi;break;case 2:
type=AZj;break;case 3:type=AZk;break;case 4:type=AZl;break;case 0:type=Ayl;break;
default:throw new Error(AZm+Bg7.toFixed());}return type;},_Init:function(aArg){C.
EnumToString._Init.call(this,aArg);this.__proto__=C.TransponderTypeToString;},_className:
"Device::TransponderTypeToString"};C.TransponderProtocolToString={BT:function(A9
){var Bg5=A9;var AA1=A.jV;switch(Bg5){case 1:AA1=AZn;break;case 2:AA1=AZo;break;
case 3:AA1=AZp;break;case 0:AA1=Ayl;break;default:throw new Error(AZq+Bg5.toFixed(
));}return AA1;},_Init:function(aArg){C.EnumToString._Init.call(this,aArg);this.
__proto__=C.TransponderProtocolToString;},_className:"Device::TransponderProtocolToString"
};C.Transponder={Id:0,TransponderProtocol:0,TransponderType:0,AT0:function(E){if(
this.TransponderType===E)return;this.TransponderType=E;A.abo([this,this.Bl4,this.
AT0],0);},ATZ:function(E){if(this.TransponderProtocol===E)return;this.TransponderProtocol=
E;A.abo([this,this.Bl3,this.ATZ],0);},OnSetId:function(E){if(this.Id===E)return;
this.Id=E;A.abo([this,this.Q4,this.OnSetId],0);},AO0:function(){return A._GetAutoObject(
C.Converter).Bqw(this.Id);},Bjs:function(){return A._GetAutoObject(C.Converter).
AxW(this.Id);},Bl4:function(){return this.TransponderType;},Bl3:function(){return this.
TransponderProtocol;},Q4:function(){return this.Id;},_Init:function(aArg){this.__proto__=
C.Transponder;A.h7++;},_Done:function(){this.__proto__=null;A.h7--;},_ReInit:function(
){},_Mark:function(D){var B;if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:
null,_cycle:0,_observers:null,_className:"Device::Transponder"};C.RatingModeToString={
BT:function(A9){var Vi=A9;var Nz=A.jV;switch(Vi){case 0:Nz=A.aaR(A.acf.Basic);break;
case 1:Nz=A.aaR(A.acf.Extended);break;default:throw new Error(AZr+Vi.toFixed());
}return Nz;},_Init:function(aArg){C.EnumToString._Init.call(this,aArg);this.__proto__=
C.RatingModeToString;},_className:"Device::RatingModeToString"};C.TableRowsCount={
_Init:function(aArg){this.__proto__=C.TableRowsCount;A.h7++;},_Done:function(){this.
__proto__=null;A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((B=this.
I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:
"Device::TableRowsCount"};C.MassUnit={Kilogramm:0,Pound:1,LAST:2};C.MassUnitToString={
BT:function(A9){var Bev=A9;var Ap_=A.jV;switch(Bev){case 0:Ap_=A.aaR(A.acf.Bki);
break;case 1:Ap_=A.aaR(A.acf.Pound);break;default:throw new Error(AZs+Bev.toFixed(
));}return Ap_;},_Init:function(aArg){C.EnumToString._Init.call(this,aArg);this.
__proto__=C.MassUnitToString;},_className:"Device::MassUnitToString"};C.MinWeightGain=
20;C.MaxWeightGain=2000;C.WeightGainStep=10;C.Int32ArrayWrapper={MH:10,Array:A.abi(
10,0,null),ZB:function(E){if(this.MH===E)return;if(E>10)throw new Error(AZt);this.
MH=E;},Set:function(aIndex,AK){if((aIndex<0)||(aIndex>=this.MH))throw new Error(
AID);this.Array.Set(aIndex,AK);},Get:function(aIndex){if((aIndex<0)||(aIndex>=this.
MH))throw new Error(AID);return this.Array.Get(aIndex);},AmZ:function(){var Qz=0;
var O;for(O=0;O<this.MH;O=O+1)Qz=Qz+this.Get(O);return Qz;},toString:function(){
var A3d=this.Array.Get(0).toFixed();var O;for(O=1;O<this.MH;O=O+1)A3d=(A3d+O8)+this.
Array.Get(O).toFixed();return A3d;},E3:function(aString){var HA=aString.indexOf(
String.fromCharCode(0x2C),0);var A11=A.jV;var O=0;while(O<10){if(aString===A.jV)
this.Array.Set(O,0);else{if(HA===-1){A11=aString;aString=A.jV;}else{A11=A.abV(aString
,HA);aString=A.ab1(aString,0,HA+1);}this.Array.Set(O,A.wz(A11,0,10));HA=aString.
indexOf(String.fromCharCode(0x2C),0);}O=O+1;}if(aString!==A.jV)A.ab5("%s",AZu);}
,Ci:function(){},E6:function(){var O;for(O=0;O<this.MH;O=O+1)this.Set(O,0);},Avw:
function(A7){var O=0;while(O<this.MH){if(this.Array.Get(O)===A7)return O;O=O+1;}
return-1;},H5:function(){var O=0;var max=-1;while(O<this.MH){if(this.Array.Get(O
)>max)max=this.Array.Get(O);O=O+1;}return max;},_Init:function(aArg){(this.Array=[
]).__proto__=C.Int32ArrayWrapper.Array;this.__proto__=C.Int32ArrayWrapper;A.h7++;
},_Done:function(){this.__proto__=null;A.h7--;},_ReInit:function(){},_Mark:function(
D){var B;if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:
null,_className:"Device::Int32ArrayWrapper"};C.ActionToString={BT:function(A9){var
AzL=A9;var E9=A.jV;switch(AzL){case 4:E9=A.aaR(A.acf.Alarm);break;case 256:E9=A.
aaR(A.acf.Weighing);break;case 128:E9=A.aaR(A.acf.A6C);break;case 16:E9=A.aaR(A.
acf.AMt);break;case 1:E9=A.aaR(A.acf.Temperature);break;case 32:E9=A.aaR(A.acf.AnimalLoss
);break;case 2:E9=A.aaR(A.acf.Rating);break;case 8:E9=A.aaR(A.acf.Asf);break;case
64:E9=A.aaR(A.acf.Unregister);break;case 512:E9=A.aaR(A.acf.ASh);break;case 1024:
E9=A.aaR(A.acf.LinkTransponder);break;case 262144:E9=A.aaR(A.acf.UnlinkTransponder
);break;case 2048:E9=A.aaR(A.acf.TB);break;case 4096:E9=A.aaR(A.acf.Calving);break;
case 8192:E9=A.aaR(A.acf.DryOff);break;case 16384:E9=A.aaR(A.acf.A7R);break;case
32768:E9=A.aaR(A.acf.ACh);break;case 524288:E9=A.aaR(A.acf.ACj);break;case 65536:
E9=A.aaR(A.acf.Delete);break;case 131072:E9=A.aaR(A.acf.A7S);break;case 0:E9=A.aaR(
A.acf.A8e);break;default:throw new Error(AyB+AzL.toFixed());}return E9;},Lx:function(
A9){var AzL=A9;var E9=A.jV;switch(AzL){case 4:E9=A.aaR(A.acf.Alarm);break;case 256:
E9=A.aaR(A.acf.Weighing);break;case 128:E9=A.aaR(A.acf.A6C);break;case 16:E9=A.aaR(
A.acf.AMt);break;case 1:E9=A.aaR(A.acf.Temperature);break;case 32:E9=A.aaR(A.acf.
AnimalLoss);break;case 2:E9=A.aaR(A.acf.Rating);break;case 8:E9=A.aaR(A.acf.Asf);
break;case 64:E9=A.aaR(A.acf.Unregister);break;case 512:E9=A.aaR(A.acf.ASh);break;
case 1024:E9=A.aaR(A.acf.LinkTransponder);break;case 262144:E9=A.aaR(A.acf.UnlinkTransponder
);break;case 2048:E9=A.aaR(A.acf.TB);break;case 4096:E9=A.aaR(A.acf.Calving);break;
case 8192:E9=A.aaR(A.acf.DryOff);break;case 32768:E9=A.aaR(A.acf.ACh);break;case
524288:E9=A.aaR(A.acf.ACj);break;case 65536:E9=A.aaR(A.acf.Delete);break;case 16384:
case 131072:E9=A.aaR(A.acf.Bkp);break;case 0:E9=A.aaR(A.acf.A8e);break;default:throw new
Error(AyB+AzL.toFixed());}return E9;},_Init:function(aArg){C.EnumToString._Init.
call(this,aArg);this.__proto__=C.ActionToString;},_className:"Device::ActionToString"
};C.ACTIONS_COUNT=19;C.PopupTimeout=2000;C.ITable={Filter:null,Id:2,CF:function(
Ad,A4){return 0;},V3:function(Ad,A4){return A.jV;},Ako:function(G){A.we(this,0);
A.pe([this,this.DX],this);},H4:function(Ad,A4){return false;},Hv:function(Ad,A4){
return this.Sm(Ad,A4);},OnSetId:function(E){if(this.Id===E)return;this.Id=E;},B_:
function(){return 0;},Bk:function(E){if(this.Filter===E)return;this.Filter=E;A.abo([
this,this.Fp,this.Ft],0);},Ft:function(Aq){this.Bk(Aq);},I9:function(Ad,A4){var BBU=
this.V4(Ad,A4);return A._GetAutoObject(C.Converter).Baa(BBU);},V4:function(Ad,A4
){return 0;},Sm:function(Ad,A4){return 0;},A7c:function(Ad,A4){return this.CF(Ad
,A4);},OC:function(){var Jr=0;var BCE=this.Id;return Jr;},OE:function(AoS){var HF=
0;var BCE=this.Id;return HF===1;},YI:function(){return-1;},ZM:function(Ad,A4,C0){
return false;},Ho:function(Ad,A4,C0){return false;},ZL:function(Ad,A4,C0){return false;
},N9:function(Ad,A4,C0){return false;},ZK:function(Ad,A4,C0){return false;},Acn:
function(Ad,A4,C0){return this.ZL(Ad,A4,C0);},AkT:function(Ad,A4,C0){var BBV=A._GetAutoObject(
C.Converter).Ad2(C0);return this.ZM(Ad,A4,BBV);},A$K:function(Ad,A4,C0){return this.
Ho(Ad,A4,C0);},AOU:function(Ad,A4){return this.CF(Ad,A4);},Bjq:function(Ad,A4){return this.
CF(Ad,A4);},Bpp:function(Ad,A4,C0){return this.Ho(Ad,A4,C0);},Bpl:function(Ad,A4
,C0){return this.Ho(Ad,A4,C0);},LV:function(aColumn,A7){return-1;},AmX:function(
Ad,A4){return this.CF(Ad,A4);},Bpj:function(Ad,A4,C0){return this.Ho(Ad,A4,C0);}
,ADa:function(Ad,A4){return this.CF(Ad,A4);},AUQ:function(Ad,A4,MQ){return this.
Ho(Ad,A4,MQ);},DX:function(G){this.ByV();},ByV:function(){return-1;},KR:function(
Ad,A4){return 0;},UE:function(Ad,A4,C0){return false;},AgZ:function(aColumn,A7){
return-1;},E6:function(){return false;},Bjr:function(Ad,A4){var BBW=this.CF(Ad,A4
);return A._GetAutoObject(C.Converter).BjS(BBW);},Bjw:function(Ad,A4){return this.
CF(Ad,A4);},AO2:function(Ad,A4){return this.CF(Ad,A4);},Bpn:function(Ad,A4,C0){var
BBX=A._GetAutoObject(C.Converter).A5R(C0);return this.Ho(Ad,A4,BBX);},Bpo:function(
Ad,A4,C0){return this.Ho(Ad,A4,C0);},Bpv:function(Ad,A4,C0){return this.Ho(Ad,A4
,C0);},AjL:function(aColumn,A7){return false;},Aem:function(aColumn,A7){return false;
},BjF:function(Ad,A4){return this.CF(Ad,A4);},Bpt:function(Ad,A4,C0){return this.
Ho(Ad,A4,C0);},Lj:function(){return this.QK()>=this.HK();},HK:function(){return 0;
},Abs:function(){return-1;},QK:function(){return 0;},Fp:function(){return this.Filter;
},_Init:function(aArg){this.__proto__=C.ITable;A.h7++;},_Done:function(){this.__proto__=
null;A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((B=this.Filter)&&(
B._cycle!=D))B._Mark(B._cycle=D);if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D
);},I:null,_cycle:0,_observers:null,_className:"Device::ITable"};C.MaxAutoActionsCount=
4;C.WeightRecordingMode={Automatic:0,Manual:1,LAST:2};C.WeightRecordingModeToString={
BT:function(A9){var Vi=A9;var Nz=A.jV;switch(Vi){case 0:Nz=A.aaR(A.acf.Automatic
);break;case 1:Nz=A.aaR(A.acf.Manual);break;default:throw new Error(Aai+Vi.toFixed(
));}return Nz;},_Init:function(aArg){C.EnumToString._Init.call(this,aArg);this.__proto__=
C.WeightRecordingModeToString;},_className:"Device::WeightRecordingModeToString"
};C.BooleanToAutoOnOff={BT:function(A9){switch(A9){case 0:return A.aaR(A.acf.Off
);case 1:return A.aaR(A.acf.Aa4);default:return Atc+A9.toFixed();}},_Init:function(
aArg){C.EnumToString._Init.call(this,aArg);this.__proto__=C.BooleanToAutoOnOff;}
,_className:"Device::BooleanToAutoOnOff"};C.WeightStep=100;C.WeightRecordingScope={
CurrentWeightOnly:0,BirthWeightOnly:1,BirthAndCurrentWeight:2,NoWeightRecording:
3,LAST:4};C.WeightRecordingScopeToString={BT:function(A9){var Bgv=A9;var ABe=A.jV;
switch(Bgv){case 0:ABe=A.aaR(A.acf.Bii);break;case 1:ABe=A.aaR(A.acf.BhW);break;
case 2:ABe=A.aaR(A.acf.BhS);break;case 3:ABe=A.aaR(A.acf.BkR);break;default:throw new
Error(AZv+Bgv.toFixed());}return ABe;},_Init:function(aArg){C.EnumToString._Init.
call(this,aArg);this.__proto__=C.WeightRecordingScopeToString;},_className:"Device::WeightRecordingScopeToString"
};C.BodyTemperature={Undertemperature:0,Normal:1,Elevated:2,Fever:3,LAST:4};C.Km={
A5o:0,Temperature:1,Rating:2,Afv:3,BDh:4,BDY:5,BGJ:6,BEC:7,BFm:8,BEa:9,BFk:10,BFN:
11,BFO:12,BGO:13,BDs:14,LAST:15};C.AnimalListContentToString={BT:function(A9){var
BcV=A9;var Rx=A.jV;switch(BcV){case 0:Rx=AyC;break;case 14:Rx=AZw;break;case 2:Rx=
AZx;break;case 1:Rx=AZy;break;case 3:Rx=AZz;break;case 4:Rx=AZA;break;case 5:Rx=
AZB;break;case 6:Rx=Ath;break;case 7:Rx=Ati;break;case 8:Rx=Atj;break;case 9:Rx=
Atk;break;case 10:Rx=AyD;break;case 11:Rx=Aox;break;case 12:Rx=AZC;break;case 13:
Rx=AZD;break;default:throw new Error(AZE+BcV.toFixed());}return Rx;},_Init:function(
aArg){C.EnumToString._Init.call(this,aArg);this.__proto__=C.AnimalListContentToString;
},_className:"Device::AnimalListContentToString"};C.GenderFilterCriterion={A5:0,
Abk:function(){var Aw=A._NewObject(C.GenderFilterCriterion,0);Aw.E$(this);return Aw;
},E$:function(AI){C.FilterCriterion.E$.call(this,AI);var Aw=(C.GenderFilterCriterion.
isPrototypeOf(AI)?AI:null);if(!!Aw)this.A5=Aw.A5;},_Init:function(aArg){C.FilterCriterion.
_Init.call(this,aArg);this.__proto__=C.GenderFilterCriterion;},_className:"Device::GenderFilterCriterion"
};C.AnimalTypeFilterCriterion={A5:0,Abk:function(){var Aw=A._NewObject(C.AnimalTypeFilterCriterion
,0);Aw.E$(this);return Aw;},E$:function(AI){C.FilterCriterion.E$.call(this,AI);var
Aw=(C.AnimalTypeFilterCriterion.isPrototypeOf(AI)?AI:null);if(!!Aw)this.A5=Aw.A5;
},Initialize:function(A4,Eb,A7,Qg){this.EJ=A4;this.Operator=Eb;this.A5=A7;this.YL=
Qg;return this;},_Init:function(aArg){C.FilterCriterion._Init.call(this,aArg);this.
__proto__=C.AnimalTypeFilterCriterion;},_className:"Device::AnimalTypeFilterCriterion"
};C.BDu={AuH:0,BDt:1,BE8:2,A$r:3,A5Z:4,BGo:5,BDX:6,BGn:7,LinkTransponder:8,TB:9,
Weighing:10,Calving:11,LinkNaisId:12,BFM:13,ClearBirthNoticePending:14,DeleteAnimal:
15,ScanNaisId:16,Edit:17,ClearPurchaseNoticePending:18,UNDEFINED:19};C.AutoRegistrationModeToString={
BT:function(A9){var Vi=A9;var Nz=A.jV;switch(Vi){case 0:Nz=A.aaR(A.acf.Bia);break;
case 1:Nz=A.aaR(A.acf.BjW);break;case 2:Nz=A.aaR(A.acf.Off);break;default:throw new
Error(AZF+Vi.toFixed());}return Nz;},_Init:function(aArg){C.EnumToString._Init.call(
this,aArg);this.__proto__=C.AutoRegistrationModeToString;},_className:"Device::AutoRegistrationModeToString"
};C.AutoRegistrationMode={UserConfirmed:0,Background:1,Off:2,LAST:3};C.AssessmentFilterCriterion={
A5:0,Abk:function(){var Aw=A._NewObject(C.AssessmentFilterCriterion,0);Aw.E$(this
);return Aw;},E$:function(AI){C.FilterCriterion.E$.call(this,AI);var Aw=(C.AssessmentFilterCriterion.
isPrototypeOf(AI)?AI:null);if(!!Aw)this.A5=Aw.A5;},Initialize:function(A4,Eb,A7,
Qg){this.EJ=A4;this.Operator=Eb;this.A5=A7;this.YL=Qg;return this;},_Init:function(
aArg){C.FilterCriterion._Init.call(this,aArg);this.__proto__=C.AssessmentFilterCriterion;
},_className:"Device::AssessmentFilterCriterion"};C.D9={AdV:0,Temperature:1,Afv:
2,Rating:3,LAST:4};C.FactoryResetScope={DeviceAndAnimalData:0,AnimalDataOnly:1,DeviceDataOnly:
2,LAST:3};C.FactoryResetScopeToString={BT:function(A9){switch(A9){case 0:return A.
aaR(A.acf.DeviceAndAnimalData);case 1:return A.aaR(A.acf.AnimalDataOnly);case 2:
return A.aaR(A.acf.DeviceDataOnly);default:return AZG+A9.toFixed();}},_Init:function(
aArg){C.EnumToString._Init.call(this,aArg);this.__proto__=C.FactoryResetScopeToString;
},_className:"Device::FactoryResetScopeToString"};C.AVq={Ci:function(){A._GetAutoObject(
C.Device).Ar_(this.toString());},Init:function(aArg){var B;A.zX([this,this.BfD],[
B=A._GetAutoObject(C.Device),B.A9x,B.BbN],0);this.BfD(this);},BfD:function(G){this.
E3(A._GetAutoObject(C.Device).AG7);A.we(this,0);},_Init:function(aArg){C.Int32ArrayWrapper.
_Init.call(this,aArg);this.__proto__=C.AVq;this.ZB(3);this.Init(aArg);},_className:
"Device::TemperaturesLowClass"};C.AVp={Init:function(aArg){var B;A.zX([this,this.
BfB],[B=A._GetAutoObject(C.Device),B.A9w,B.BbM],0);this.BfB(this);},Ci:function(
){A._GetAutoObject(C.Device).Ar9(this.toString());},BfB:function(G){this.E3(A._GetAutoObject(
C.Device).AG6);A.we(this,0);},_Init:function(aArg){C.Int32ArrayWrapper._Init.call(
this,aArg);this.__proto__=C.AVp;this.ZB(3);this.Init(aArg);},_className:"Device::TemperaturesHighClass"
};C.AMM={Init:function(aArg){var B;A.zX([this,this.Be6],[B=A._GetAutoObject(C.Device
),B.A8M,B.Bbq],0);this.Be6(this);},Be6:function(G){this.E3(A._GetAutoObject(C.Device
).ABT);A.we(this,0);},_Init:function(aArg){C.Int32ArrayWrapper._Init.call(this,aArg
);this.__proto__=C.AMM;this.ZB(3);this.Init(aArg);},_className:"Device::AnimalTypesClass"
};C.UInt64FilterCriterion={A5:0,Abk:function(){var Aw=A._NewObject(C.UInt64FilterCriterion
,0);Aw.E$(this);return Aw;},E$:function(AI){C.FilterCriterion.E$.call(this,AI);var
Aw=(C.UInt64FilterCriterion.isPrototypeOf(AI)?AI:null);if(!!Aw)this.A5=Aw.A5;},Initialize:
function(A4,Eb,A7,Qg){this.EJ=A4;this.Operator=Eb;this.A5=A7;this.YL=Qg;return this;
},_Init:function(aArg){C.FilterCriterion._Init.call(this,aArg);this.__proto__=C.
UInt64FilterCriterion;},_className:"Device::UInt64FilterCriterion"};C.BooleanToAssignedUnassignedString={
BT:function(A9){switch(A9){case 0:return A.aaR(A.acf.Akn);case 1:return A.aaR(A.
acf.Bhz);default:return Atc+A9.toFixed();}},_Init:function(aArg){C.EnumToString.
_Init.call(this,aArg);this.__proto__=C.BooleanToAssignedUnassignedString;},_className:
"Device::BooleanToAssignedUnassignedString"};C.C9={UNDEFINED:0,AT:1,BA:2,BE:3,BDz:
4,BDO:5,BDP:6,BDQ:7,BDR:8,BDS:9,BD2:10,BD3:11,BEb:12,BEc:13,BEr:14,FR:15,GR:16,BED:
17,BEE:18,BEL:19,BEM:20,BER:21,BES:22,BET:23,BEU:24,BE0:25,BFc:26,BFd:27,BFs:28,
BFt:29,BFK:30,BFL:31,BF3:32,BF4:33,BF5:34,BGh:35,BGi:36,BGC:37,Bab:38,BGD:39,LAST:
40};C.CountryToString={BT:function(A9){var Ka=A9;var FH=A.jV;switch(Ka){case 1:FH=
A.aaR(A.acm.BhK);break;case 2:FH=A.aaR(A.acm.BhX);break;case 3:FH=A.aaR(A.acm.BhR
);break;case 4:FH=A.aaR(A.acm.BhZ);break;case 5:FH=A.aaR(A.acm.Bh2);break;case 6:
FH=A.aaR(A.acm.Bqc);break;case 7:FH=A.aaR(A.acm.Bh5);break;case 8:FH=A.aaR(A.acm.
Bij);break;case 9:FH=A.aaR(A.acm.Bik);break;case 10:FH=A.aaR(A.acm.Bjl);break;case
11:FH=A.aaR(A.acm.Bir);break;case 12:FH=A.aaR(A.acm.Bi2);break;case 13:FH=A.aaR(
A.acm.BpH);break;case 14:FH=A.aaR(A.acm.Bi$);break;case 15:FH=A.aaR(A.acm.Bjh);break;
case 16:FH=A.aaR(A.acm.BjN);break;case 17:FH=A.aaR(A.acm.Bih);break;case 18:FH=A.
aaR(A.acm.BjT);break;case 19:FH=A.aaR(A.acm.Bj2);break;case 20:FH=A.aaR(A.acm.Bkd
);break;case 21:FH=A.aaR(A.acm.Bkf);break;case 22:FH=A.aaR(A.acm.Bkq);break;case
23:FH=A.aaR(A.acm.Bkt);break;case 24:FH=A.aaR(A.acm.Bkn);break;case 25:FH=A.aaR(
A.acm.Bkv);break;case 26:FH=A.aaR(A.acm.BkL);break;case 27:FH=A.aaR(A.acm.BkS);break;
case 28:FH=A.aaR(A.acm.BoB);break;case 29:FH=A.aaR(A.acm.BoC);break;case 30:FH=A.
aaR(A.acm.Bo6);break;case 31:FH=A.aaR(A.acm.Bo8);break;case 32:FH=A.aaR(A.acm.Bqb
);break;case 33:FH=A.aaR(A.acm.BpG);break;case 34:FH=A.aaR(A.acm.BpF);break;case
35:FH=A.aaR(A.acm.BqB);break;case 36:FH=A.aaR(A.acm.Bql);break;case 37:FH=A.aaR(
A.acm.BqF);break;case 38:FH=A.aaR(A.acm.Bab);break;case 39:FH=A.aaR(A.acm.BqE);break;
case 0:FH=Aoy;break;default:throw new Error(Aom+Ka.toFixed());}return FH;},Lx:function(
A9){var Ka=A9;var BN=A.jV;switch(Ka){case 1:BN=S$;break;case 2:BN=Z6;break;case 3:
BN=UW;break;case 4:BN=W9;break;case 5:BN=Iu;break;case 6:BN=Aae;break;case 7:BN=
UX;break;case 8:BN=Z8;break;case 9:BN=W_;break;case 10:BN=O7;break;case 11:BN=Z9;
break;case 12:BN=Z_;break;case 13:BN=Aad;break;case 14:BN=UZ;break;case 15:BN=W$;
break;case 16:BN=Z$;break;case 17:BN=UY;break;case 18:BN=Oe;break;case 19:BN=Rn;
break;case 20:BN=Xa;break;case 21:BN=Xb;break;case 22:BN=Xc;break;case 23:BN=Aaa;
break;case 24:BN=Ta;break;case 25:BN=Xd;break;case 26:BN=Xe;break;case 27:BN=Tb;
break;case 28:BN=Tc;break;case 29:BN=Td;break;case 30:BN=Aab;break;case 31:BN=Te;
break;case 32:BN=Xf;break;case 33:BN=AfB;break;case 34:BN=Aac;break;case 35:BN=Xg;
break;case 36:BN=Z7;break;case 37:BN=AhX;break;case 38:BN=K1;break;case 39:BN=AcN;
break;case 0:BN=Aoy;break;default:throw new Error(Aom+Ka.toFixed());}return BN;}
,_Init:function(aArg){C.EnumToString._Init.call(this,aArg);this.__proto__=C.CountryToString;
},_className:"Device::CountryToString"};C.EaseOfDelivery={Unspecified:0,Easy:1,Moderate:
2,Difficult:3,Surgery:4,LAST:5};C.EaseOfDeliveryToString={BT:function(A9){var Bdt=
A9;var AtR=A.jV;switch(Bdt){case 0:AtR=A.aaR(A.acf.Unspecified);break;case 1:AtR=
A.aaR(A.acf.Easy);break;case 2:AtR=A.aaR(A.acf.Moderate);break;case 3:AtR=A.aaR(
A.acf.Difficult);break;case 4:AtR=A.aaR(A.acf.Surgery);break;default:throw new Error(
AZH+Bdt.toFixed());}return AtR;},_Init:function(aArg){C.EnumToString._Init.call(
this,aArg);this.__proto__=C.EaseOfDeliveryToString;},_className:"Device::EaseOfDeliveryToString"
};C.WhereAbouts={UNB:0,EZU:1,EMA:2,VZU:3,VMA:4,VIV:5,TOT:6,V48:7,V3T:8,MGE:9,VKB:
10,LAST:11};C.WhereAboutsToString={BT:function(A9){var Bhn=A9;var AaS=A.jV;switch(
Bhn){case 0:AaS=A.aaR(A.acf.Unknown);break;case 1:AaS=A.aaR(A.acf.BqO);break;case
2:AaS=A.aaR(A.acf.BqN);break;case 3:AaS=A.aaR(A.acf.BqW);break;case 4:AaS=A.aaR(
A.acf.BqV);break;case 5:AaS=A.aaR(A.acf.BqT);break;case 6:AaS=A.aaR(A.acf.BqQ);break;
case 7:AaS=A.aaR(A.acf.BqS);break;case 8:AaS=A.aaR(A.acf.BqR);break;case 9:AaS=A.
aaR(A.acf.BqP);break;case 10:AaS=A.aaR(A.acf.BqU);break;default:throw new Error(
AZI+Bhn.toFixed());}return AaS;},_Init:function(aArg){C.EnumToString._Init.call(
this,aArg);this.__proto__=C.WhereAboutsToString;},_className:"Device::WhereAboutsToString"
};C.Breed={UNKNOWN:0,SBT:1,RBT:2,JER:3,BV:4,RVA:5,RV:6,RDN:7,DSN:8,FL:9,GV:10,PIN:
11,HIN:12,MW:13,VW:14,LMP:15,DBV:16,AS:17,VR:18,CHA:19,LIM:20,WBB:21,BA:22,MA:23
,SAL:24,MON:25,AU:26,PIE:27,CHI:28,ROM:29,MAR:30,WP:31,BB:32,DA:33,AA:34,HE:35,SH:
36,HLD:37,WB:38,GAL:39,LR:40,BGA:41,LG:42,BRA:43,NOR:44,UST:45,ZEB:46,GRV:47,DEX:
48,WGA:49,LH:50,SD:51,FR:52,TUX:53,TLM:54,FLF:55,UCK:56,BLA:57,WIT:58,LAK:59,RHV:
60,AT:61,GR:62,PIF:63,PS:64,GVF:65,BVF:66,RBF:67,HWF:68,MWF:69,VWF:70,LPF:71,BRN:
72,BAZ:73,AO:74,BE:75,WL:76,BIS:77,YAK:78,SON:79,TAU:80,IND:81,TIN:82,WAG:83,XFF:
84,XFM:85,XMM:86,EVO:87,BLH:88,TLH:89,MGR:90,WSH:91,MUR:92,EBS:93,ERI:94,PAR:95,
XZF:96,XZM:97,XZZ:98,LAST:99};C.BreedToString={BT:function(A9){var Bv=A9;var BI=
A.jV;switch(Bv){case 0:BI=A.aaR(A.acf.Unknown);break;case 1:BI=A.aaR(A.ack.SBT);
break;case 2:BI=A.aaR(A.ack.RBT);break;case 3:BI=A.aaR(A.ack.JER);break;case 4:BI=
A.aaR(A.ack.BV);break;case 5:BI=A.aaR(A.ack.RVA);break;case 6:BI=A.aaR(A.ack.RV);
break;case 7:BI=A.aaR(A.ack.RDN);break;case 8:BI=A.aaR(A.ack.DSN);break;case 9:BI=
A.aaR(A.ack.FL);break;case 10:BI=A.aaR(A.ack.GV);break;case 11:BI=A.aaR(A.ack.PIN
);break;case 12:BI=A.aaR(A.ack.HIN);break;case 13:BI=A.aaR(A.ack.MW);break;case 14:
BI=A.aaR(A.ack.VW);break;case 15:BI=A.aaR(A.ack.LMP);break;case 16:BI=A.aaR(A.ack.
DBV);break;case 17:BI=A.aaR(A.ack.AS);break;case 18:BI=A.aaR(A.ack.VR);break;case
19:BI=A.aaR(A.ack.CHA);break;case 20:BI=A.aaR(A.ack.LIM);break;case 21:BI=A.aaR(
A.ack.WBB);break;case 22:BI=A.aaR(A.ack.BA);break;case 23:BI=A.aaR(A.ack.MA);break;
case 24:BI=A.aaR(A.ack.SAL);break;case 25:BI=A.aaR(A.ack.MON);break;case 26:BI=A.
aaR(A.ack.AU);break;case 27:BI=A.aaR(A.ack.PIE);break;case 28:BI=A.aaR(A.ack.CHI
);break;case 29:BI=A.aaR(A.ack.ROM);break;case 30:BI=A.aaR(A.ack.MAR);break;case
31:BI=A.aaR(A.ack.WP);break;case 32:BI=A.aaR(A.ack.BB);break;case 33:BI=A.aaR(A.
ack.DA);break;case 34:BI=A.aaR(A.ack.AA);break;case 35:BI=A.aaR(A.ack.HE);break;
case 36:BI=A.aaR(A.ack.SH);break;case 37:BI=A.aaR(A.ack.HLD);break;case 38:BI=A.
aaR(A.ack.WB);break;case 39:BI=A.aaR(A.ack.GAL);break;case 40:BI=A.aaR(A.ack.LR);
break;case 41:BI=A.aaR(A.ack.BGA);break;case 42:BI=A.aaR(A.ack.LG);break;case 43:
BI=A.aaR(A.ack.BRA);break;case 44:BI=A.aaR(A.ack.NOR);break;case 45:BI=A.aaR(A.ack.
UST);break;case 46:BI=A.aaR(A.ack.ZEB);break;case 47:BI=A.aaR(A.ack.GRV);break;case
48:BI=A.aaR(A.ack.DEX);break;case 49:BI=A.aaR(A.ack.WGA);break;case 50:BI=A.aaR(
A.ack.LH);break;case 51:BI=A.aaR(A.ack.SD);break;case 52:BI=A.aaR(A.ack.FR);break;
case 53:BI=A.aaR(A.ack.TUX);break;case 54:BI=A.aaR(A.ack.TLM);break;case 55:BI=A.
aaR(A.ack.FLF);break;case 56:BI=A.aaR(A.ack.UCK);break;case 57:BI=A.aaR(A.ack.BLA
);break;case 58:BI=A.aaR(A.ack.WIT);break;case 59:BI=A.aaR(A.ack.LAK);break;case
60:BI=A.aaR(A.ack.RHV);break;case 61:BI=A.aaR(A.ack.AT);break;case 62:BI=A.aaR(A.
ack.GR);break;case 63:BI=A.aaR(A.ack.PIF);break;case 64:BI=A.aaR(A.ack.PS);break;
case 65:BI=A.aaR(A.ack.GVF);break;case 66:BI=A.aaR(A.ack.BVF);break;case 67:BI=A.
aaR(A.ack.RBF);break;case 68:BI=A.aaR(A.ack.HWF);break;case 69:BI=A.aaR(A.ack.MWF
);break;case 70:BI=A.aaR(A.ack.VWF);break;case 71:BI=A.aaR(A.ack.LPF);break;case
72:BI=A.aaR(A.ack.BRN);break;case 73:BI=A.aaR(A.ack.BAZ);break;case 74:BI=A.aaR(
A.ack.AO);break;case 75:BI=A.aaR(A.ack.BE);break;case 76:BI=A.aaR(A.ack.WL);break;
case 77:BI=A.aaR(A.ack.BIS);break;case 78:BI=A.aaR(A.ack.YAK);break;case 79:BI=A.
aaR(A.ack.SON);break;case 80:BI=A.aaR(A.ack.TAU);break;case 81:BI=A.aaR(A.ack.IND
);break;case 82:BI=A.aaR(A.ack.TIN);break;case 83:BI=A.aaR(A.ack.WAG);break;case
84:BI=A.aaR(A.ack.XFF);break;case 85:BI=A.aaR(A.ack.XFM);break;case 86:BI=A.aaR(
A.ack.XMM);break;case 87:BI=A.aaR(A.ack.EVO);break;case 88:BI=A.aaR(A.ack.BLH);break;
case 89:BI=A.aaR(A.ack.TLH);break;case 90:BI=A.aaR(A.ack.MGR);break;case 91:BI=A.
aaR(A.ack.WSH);break;case 92:BI=A.aaR(A.ack.MUR);break;case 93:BI=A.aaR(A.ack.EBS
);break;case 94:BI=A.aaR(A.ack.ERI);break;case 95:BI=A.aaR(A.ack.PAR);break;case
96:BI=A.aaR(A.ack.XZF);break;case 97:BI=A.aaR(A.ack.XZM);break;case 98:BI=A.aaR(
A.ack.XZZ);break;default:throw new Error(AZJ+Bv.toFixed());}return BI;},_Init:function(
aArg){C.EnumToString._Init.call(this,aArg);this.__proto__=C.BreedToString;},_className:
"Device::BreedToString"};C.TM={timer:null,Q:null,Ec:0,Dx:0,JV:0,Pu:1000,PD:1000,
Bw:false,Cx:false,B3:true,Mi:function(G){var F;if(!this.timer)return;if(this.Ec<
0){this.Dx=this.timer.Bs;this.Ec=0;}var Av=(this.timer.Bs-this.Dx)|0;var Ot=this.
Pu;var Hg=this.PD+this.Pu;var LI=0;var Jn=this.Ec;if(!Jn&&(Av>=Ot)){Jn=1;Av=Av-Ot;
}if((Jn>0)&&(Av>=Hg)){var Ig=(Av/Hg)|0;Av=Av-(Ig*Hg);Jn=Jn+Ig;}if((Jn>2)&&!this.
JV)Jn=1;if(Jn!==this.Ec){this.Dx=this.timer.Bs-(((B=Av)<0)?B+0x100000000:B);this.
Ec=Jn;}if(Jn>0)LI=this.PD;var KH=(Jn>=this.JV)&&(this.JV>0);if(!!this.Q){if((!KH&&(
Av>=LI))&&((F=this.Q,F[1].call(F[0]))!==this.Cx))(F=this.Q,F[2].call(F[0],this.Cx
));if((KH||((Av<LI)&&(Jn>0)))&&((F=this.Q,F[1].call(F[0]))!==this.B3))(F=this.Q,
F[2].call(F[0],this.B3));}if(KH)this.Ar(false);},HO:function(E){if(E<0)E=0;this.
JV=E;},Fr:function(E){if(E<100)E=100;this.Pu=E;},Ut:function(E){if(E<0)E=0;this.
PD=E;},Ar:function(E){if(this.Bw===E)return;this.Bw=E;if(!E&&!!this.timer){A.z9([
this,this.Mi],this.timer,0);this.timer=null;}if(E){this.timer=A._GetAutoObject(A.
acl.Aej);A.zV([this,this.Mi],this.timer,0);this.Ec=-1;}},_Init:function(aArg){this.
__proto__=C.TM;A.h7++;},_Done:function(){this.__proto__=null;A.h7--;},_ReInit:function(
){},_Mark:function(D){var B;if((B=this.timer)&&(B._cycle!=D))B._Mark(B._cycle=D);
if((B=this.Q)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.I)&&(B._cycle
!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:"Device::BoolEffect"
};C.Il={AnimalId:0,TransponderId:1,BE3:2,BE2:3,BE6:4,BE5:5};C.Au8={BDx:0,BD6:1};
C.AnimalIdGenerationMethodToString={BT:function(A9){var Alv=A9;var Ao1=A.jV;switch(
Alv){case 0:Ao1=A.aaR(A.acf.Ul);break;case 1:Ao1=A.aaR(A.acf.Transponder);break;
case 3:Ao1=(A.aaR(A.acf.Manual)+Of)+A.aaR(A.acf.Male);break;case 2:Ao1=(A.aaR(A.
acf.Manual)+Of)+A.aaR(A.acf.Female);break;case 4:Ao1=(A.aaR(A.acf.Manual)+Of)+A.
aaR(A.acf.Unknown);break;case 5:Ao1=(A.aaR(A.acf.Manual)+Of)+AZK;break;default:throw new
Error(AZL+Alv.toFixed());}return Ao1;},_Init:function(aArg){C.EnumToString._Init.
call(this,aArg);this.__proto__=C.AnimalIdGenerationMethodToString;},_className:"Device::AnimalIdGenerationMethodToString"
};C.DirectionOfCountingToString={BT:function(A9){var AzK=A9;var A18=A.jV;switch(
AzK){case 0:A18=AZM;break;case 1:A18=AZN;break;default:throw new Error(AZO+AzK.toFixed(
));}return A18;},_Init:function(aArg){C.EnumToString._Init.call(this,aArg);this.
__proto__=C.DirectionOfCountingToString;},_className:"Device::DirectionOfCountingToString"
};C.EnumToIcon={AsM:function(A9){throw new Error(As8+A9.toFixed());},AsN:function(
A9){throw new Error(As8+A9.toFixed());},_Init:function(aArg){this.__proto__=C.EnumToIcon;
A.h7++;},_Done:function(){this.__proto__=null;A.h7--;},_ReInit:function(){},_Mark:
function(D){var B;if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:
0,_observers:null,_className:"Device::EnumToIcon"};C.Aei={AsM:function(A9){return A.
aaL(A.ach.AVd);},AsN:function(A9){var AzK=A9;var RH=-1;switch(AzK){case 0:RH=3;break;
case 1:RH=2;break;default:throw new Error(AIE+AzK.toFixed());}return RH;},_Init:
function(aArg){C.EnumToIcon._Init.call(this,aArg);this.__proto__=C.Aei;},_className:
"Device::DirectionOfCountingToIcon"};C.AdZ={AsM:function(A9){return A.aaL(A.ach.
AVb);},AsN:function(A9){var Alv=A9;var RH=-1;switch(Alv){case 0:RH=0;break;case 1:
RH=6;break;case 3:RH=4;break;case 2:RH=5;break;case 4:RH=2;break;case 5:RH=3;break;
default:throw new Error(AIE+Alv.toFixed());}return RH;},_Init:function(aArg){C.EnumToIcon.
_Init.call(this,aArg);this.__proto__=C.AdZ;},_className:"Device::AnimalIdGenerationMethodToIcon"
};C.Pz={UNDEFINED:0,SH:1,AO5:2,AR3:3,AO4:4,A7$:5,HE:6,A$p:7,A5F:8,AMX:9,AUG:10,BE:
11,BB:12,A7X:13,AUH:14,AUI:15,AVi:16};C.GermanStateToString={BT:function(A9){var
Bp=A9;var GF=A.jV;switch(Bp){case 1:GF=A.aaR(A.acp.SH);break;case 2:GF=A.aaR(A.acp.
AO5);break;case 3:GF=A.aaR(A.acp.AR3);break;case 4:GF=A.aaR(A.acp.AO4);break;case
5:GF=A.aaR(A.acp.A7$);break;case 6:GF=A.aaR(A.acp.HE);break;case 7:GF=A.aaR(A.acp.
A$p);break;case 8:GF=A.aaR(A.acp.A5F);break;case 9:GF=A.aaR(A.acp.AMX);break;case
10:GF=A.aaR(A.acp.AUG);break;case 11:GF=A.aaR(A.acp.BE);break;case 12:GF=A.aaR(A.
acp.BB);break;case 13:GF=A.aaR(A.acp.A7X);break;case 14:GF=A.aaR(A.acp.AUH);break;
case 15:GF=A.aaR(A.acp.AUI);break;case 16:GF=A.aaR(A.acp.AVi);break;case 0:GF=Aoy;
break;default:throw new Error(Alk+Bp.toFixed());}return GF;},Lx:function(A9){var
Bp=A9;var GF=A.jV;switch(Bp){case 1:GF=A.aaR(A.acp.Bo9);break;case 2:GF=A.aaR(A.
acp.AO5);break;case 3:GF=A.aaR(A.acp.AR3);break;case 4:GF=A.aaR(A.acp.AO4);break;
case 5:GF=A.aaR(A.acp.BkI);break;case 6:GF=A.aaR(A.acp.HE);break;case 7:GF=A.aaR(
A.acp.BoL);break;case 8:GF=A.aaR(A.acp.BhN);break;case 9:GF=A.aaR(A.acp.AMX);break;
case 10:GF=A.aaR(A.acp.AUG);break;case 11:GF=A.aaR(A.acp.BE);break;case 12:GF=A.
aaR(A.acp.BB);break;case 13:GF=A.aaR(A.acp.Bku);break;case 14:GF=A.aaR(A.acp.AUH
);break;case 15:GF=A.aaR(A.acp.AUI);break;case 16:GF=A.aaR(A.acp.AVi);break;case
0:GF=Aoy;break;default:throw new Error(Alk+Bp.toFixed());}return GF;},Bqq:function(
A9){var Bp=A9;var Gi=-1;switch(Bp){case 0:Gi=0;break;case 1:Gi=1;break;case 2:Gi=
2;break;case 3:Gi=3;break;case 4:Gi=4;break;case 5:Gi=5;break;case 6:Gi=6;break;
case 7:Gi=7;break;case 8:Gi=8;break;case 9:Gi=9;break;case 10:Gi=10;break;case 11:
Gi=11;break;case 12:Gi=12;break;case 13:Gi=13;break;case 14:Gi=14;break;case 15:
Gi=15;break;case 16:Gi=16;break;default:throw new Error(Alk+Bp.toFixed());}return Gi;
},Bqr:function(A9){var Bp=A9;var Gi=A.jV;switch(Bp){case 1:Gi=AZP;break;case 2:Gi=
AyE;break;case 3:Gi=AyF;break;case 4:Gi=AZQ;break;case 5:Gi=AZR;break;case 6:Gi=
AZS;break;case 7:Gi=AIF;break;case 8:Gi=AZT;break;case 9:Gi=AZU;break;case 10:Gi=
AIa;break;case 11:Gi=UW;break;case 12:Gi=AZV;break;case 13:Gi=AZW;break;case 14:
Gi=AZX;break;case 15:Gi=AZY;break;case 16:Gi=AZZ;break;case 0:Gi=Aoy;break;default:
throw new Error(Alk+Bp.toFixed());}return Gi;},_Init:function(aArg){C.EnumToString.
_Init.call(this,aArg);this.__proto__=C.GermanStateToString;},_className:"Device::GermanStateToString"
};C.EartagNrAssignmentMode={OneSingleRange:0,TwoNumberRanges:1,LAST:2};C.EartagNrAssignmentModeToString={
Lx:function(A9){var Vi=A9;var Nz=A.jV;switch(Vi){case 0:Nz=AZ0;break;case 1:Nz=AIG;
break;default:throw new Error(AIH+Vi.toFixed());}return Nz;},BT:function(A9){var
Vi=A9;var Nz=A.jV;switch(Vi){case 0:Nz=A.aaR(A.acf.Bou);break;case 1:Nz=A.aaR(A.
acf.BqD);break;default:throw new Error(AIH+Vi.toFixed());}return Nz;},_Init:function(
aArg){C.EnumToString._Init.call(this,aArg);this.__proto__=C.EartagNrAssignmentModeToString;
},_className:"Device::EartagNrAssignmentModeToString"};C.BDq={BFi:0,BE_:1,BEl:2,
BEm:3,BEn:4,BGj:5};C.EnumToCodeset={AmH:function(Ah6){throw new Error(AZ1+Ah6.toFixed(
));},Ael:function(A9){throw new Error(As8+A9.toFixed());},AqW:function(){A.ab5("%s"
,AII);return 0;},H5:function(){A.ab5("%s",AII);return 0;},_Init:function(aArg){this.
__proto__=C.EnumToCodeset;A.h7++;},_Done:function(){this.__proto__=null;A.h7--;}
,_ReInit:function(){},_Mark:function(D){var B;if((B=this.I)&&(B._cycle!=D))B._Mark(
B._cycle=D);},I:null,_cycle:0,_observers:null,_className:"Device::EnumToCodeset"
};C.M6={AmH:function(Ah6){var Bv;switch(Ah6){case 1:Bv=1;break;case 2:Bv=2;break;
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
Bv=0;}return Bv;},Ael:function(A9){var Bv=A9;var BK=0;switch(Bv){case 0:BK=0;break;
case 1:BK=1;break;case 2:BK=2;break;case 3:BK=3;break;case 4:BK=4;break;case 5:BK=
5;break;case 6:BK=6;break;case 7:BK=9;break;case 8:BK=10;break;case 9:BK=11;break;
case 10:BK=12;break;case 11:BK=13;break;case 12:BK=14;break;case 13:BK=15;break;
case 14:BK=16;break;case 15:BK=17;break;case 16:BK=18;break;case 17:BK=19;break;
case 18:BK=20;break;case 19:BK=21;break;case 20:BK=22;break;case 21:BK=23;break;
case 22:BK=24;break;case 23:BK=25;break;case 24:BK=26;break;case 25:BK=27;break;
case 26:BK=28;break;case 27:BK=31;break;case 28:BK=32;break;case 29:BK=33;break;
case 30:BK=34;break;case 31:BK=35;break;case 32:BK=36;break;case 33:BK=41;break;
case 34:BK=42;break;case 35:BK=43;break;case 36:BK=44;break;case 37:BK=45;break;
case 38:BK=46;break;case 39:BK=47;break;case 40:BK=48;break;case 41:BK=49;break;
case 42:BK=50;break;case 43:BK=51;break;case 44:BK=52;break;case 45:BK=53;break;
case 46:BK=54;break;case 47:BK=55;break;case 48:BK=56;break;case 49:BK=57;break;
case 50:BK=58;break;case 51:BK=59;break;case 52:BK=60;break;case 53:BK=61;break;
case 54:BK=65;break;case 55:BK=66;break;case 56:BK=67;break;case 57:BK=68;break;
case 58:BK=69;break;case 59:BK=70;break;case 60:BK=71;break;case 61:BK=72;break;
case 62:BK=73;break;case 63:BK=74;break;case 64:BK=75;break;case 65:BK=76;break;
case 66:BK=77;break;case 67:BK=78;break;case 68:BK=79;break;case 69:BK=80;break;
case 70:BK=81;break;case 71:BK=82;break;case 72:BK=83;break;case 73:BK=84;break;
case 74:BK=85;break;case 75:BK=86;break;case 76:BK=87;break;case 77:BK=88;break;
case 78:BK=89;break;case 79:BK=90;break;case 80:BK=91;break;case 81:BK=92;break;
case 82:BK=93;break;case 83:BK=94;break;case 84:BK=97;break;case 85:BK=98;break;
case 86:BK=99;break;case 87:BK=100;break;case 88:BK=101;break;case 89:BK=102;break;
case 90:BK=103;break;case 91:BK=104;break;case 92:BK=105;break;case 93:BK=106;break;
case 94:BK=107;break;case 95:BK=108;break;case 96:BK=109;break;case 97:BK=110;break;
case 98:BK=111;break;default:throw new Error(AZ2+Bv.toFixed());}return BK;},AqW:
function(){return 0;},H5:function(){return 111;},_Init:function(aArg){C.EnumToCodeset.
_Init.call(this,aArg);this.__proto__=C.M6;},_className:"Device::BreedToHitCodeset"
};C.ReasonOfLeaving={Unknown:0,A$V:1,RQ:2,A$i:3,A7z:4,BFr:5,Bac:6,A77:7,A5Y:8,A$e:
9,A75:10,A52:11,BFH:12,BFI:13,LAST:14};C.ReasonOfLeavingToString={BT:function(A9
){var AdF=A9;var Tv=A.jV;switch(AdF){case 0:Tv=A.aaR(A.acf.Unknown);break;case 1:
Tv=A.aaR(A.acf.A$V);break;case 2:Tv=A.aaR(A.acf.RQ);break;case 3:Tv=A.aaR(A.acf.
A$i);break;case 4:Tv=A.aaR(A.acf.A7z);break;case 5:Tv=A.aaR(A.acf.Bov);break;case
6:Tv=A.aaR(A.acf.Bac);break;case 7:Tv=A.aaR(A.acf.A77);break;case 8:Tv=A.aaR(A.acf.
A5Y);break;case 9:Tv=A.aaR(A.acf.A$e);break;case 10:Tv=A.aaR(A.acf.A75);break;case
11:Tv=A.aaR(A.acf.A52);break;case 12:Tv=A.aaR(A.acf.BoG);break;case 13:Tv=A.aaR(
A.acf.BoF);break;default:throw new Error(AZ3+AdF.toFixed());}return Tv;},_Init:function(
aArg){C.EnumToString._Init.call(this,aArg);this.__proto__=C.ReasonOfLeavingToString;
},_className:"Device::ReasonOfLeavingToString"};C.AhC={AmH:function(Ah6){var Pi;
switch(Ah6){case 1:Pi=1;break;case 2:Pi=2;break;case 3:Pi=3;break;case 4:Pi=4;break;
case 5:Pi=5;break;case 6:Pi=6;break;case 7:Pi=7;break;case 8:Pi=8;break;case 9:Pi=
9;break;case 10:Pi=10;break;case 11:Pi=11;break;case 12:Pi=12;break;case 13:Pi=13;
break;default:Pi=0;}return Pi;},Ael:function(A9){var Pi=A9;var Jm=0;switch(Pi){case
0:Jm=0;break;case 2:Jm=2;break;case 8:Jm=8;break;case 11:Jm=11;break;case 4:Jm=4;
break;case 10:Jm=10;break;case 7:Jm=7;break;case 5:Jm=5;break;case 9:Jm=9;break;
case 3:Jm=3;break;case 12:Jm=12;break;case 13:Jm=13;break;case 1:Jm=1;break;case
6:Jm=6;break;default:throw new Error(AIJ+Pi.toFixed());}return Jm;},AqW:function(
){return 0;},H5:function(){return 13;},_Init:function(aArg){C.EnumToCodeset._Init.
call(this,aArg);this.__proto__=C.AhC;},_className:"Device::ReasonOfLeavingToCodeset"
};C.K0={AmH:function(Ah6){var La;switch(Ah6){case 1:La=1;break;case 2:La=2;break;
case 3:La=3;break;case 4:La=4;break;case 5:La=5;break;case 6:La=6;break;case 7:La=
7;break;case 8:La=8;break;case 9:La=9;break;case 10:La=10;break;default:La=0;}return La;
},Ael:function(A9){var La=A9;var Jm=0;switch(La){case 0:Jm=0;break;case 2:Jm=2;break;
case 1:Jm=1;break;case 9:Jm=9;break;case 6:Jm=6;break;case 8:Jm=8;break;case 7:Jm=
7;break;case 5:Jm=5;break;case 10:Jm=10;break;case 4:Jm=4;break;case 3:Jm=3;break;
default:throw new Error(AIJ+La.toFixed());}return Jm;},AqW:function(){return 0;}
,H5:function(){return 10;},_Init:function(aArg){C.EnumToCodeset._Init.call(this,
aArg);this.__proto__=C.K0;},_className:"Device::WhereAboutsToCodeset"};C.AmP={_Init:
function(aArg){this.__proto__=C.AmP;A.h7++;},_Done:function(){this.__proto__=null;
A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((B=this.I)&&(B._cycle!=
D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:"Device::EmptyClass"
};C.CalfDeregistrationsTableFields={Year:0,Deregistrations:1,Deaths:2};C.CalfDeregistrations={
Deregistrations:0,Deaths:0,Year:0,E3:function(Ad,AH){var HF=C.Row.E3.call(this,Ad
,AH);if(HF&&!!AH){this.AkH(AH.CF(Ad,0));this.AwF(AH.CF(Ad,1));this.AwE(AH.CF(Ad,
2));}return HF;},Ci:function(AH){var HF=C.Row.Ci.call(this,AH);if(HF&&!!AH){var Jr=
AH.OC();if(Jr<=0)A.ab5("%s",Xi);else{if(this.Am8())this.CL=AH.YI();AH.Ho(this.CL
,0,this.Year);AH.Ho(this.CL,1,this.Deregistrations);AH.Ho(this.CL,2,this.Deaths);
AH.OE(Jr);}}return HF;},Gr:function(){C.Row.Gr.call(this);this.AkH(-1);},E6:function(
){C.Row.E6.call(this);this.AkH(0);this.AwF(0);this.AwE(0);},AwF:function(E){if(this.
Deregistrations===E)return;this.Deregistrations=E;A.abo([this,this.Blj,this.AwF]
,0);},AwE:function(E){if(this.Deaths===E)return;this.Deaths=E;A.abo([this,this.Blh
,this.AwE],0);},AkH:function(E){if(this.Year===E)return;this.Year=E;A.abo([this,
this.ArE,this.AkH],0);},Blj:function(){return this.Deregistrations;},Blh:function(
){return this.Deaths;},ArE:function(){return this.Year;},_Init:function(aArg){C.
Row._Init.call(this,aArg);this.__proto__=C.CalfDeregistrations;this.TableId=4;},
_className:"Device::CalfDeregistrations"};C.Au6={Undefined:0,Display:1,A$o:2,A$B:
3,Baw:4,BEF:5,BFU:6,BGu:7,BE1:8,BDT:9,BDf:10,A6W:11,A$q:12,BGF:13,A7_:14,BGI:15};
C.DeviceComponentToString={BT:function(A9){var Bdm=A9;var Qn=A.jV;switch(Bdm){case
0:Qn=AZ4;break;case 10:Qn=A.aaR(A.acf.Bho);break;case 9:Qn=A.aaR(A.acf.Bh4);break;
case 1:Qn=A.aaR(A.acf.BiS);break;case 11:Qn=A.aaR(A.acf.A6W);break;case 5:Qn=A.aaR(
A.acf.BqX);break;case 8:Qn=A.aaR(A.acf.BiU);break;case 14:Qn=A.aaR(A.acf.A7_);break;
case 2:Qn=A.aaR(A.acf.A$o);break;case 12:Qn=A.aaR(A.acf.A$q);break;case 6:Qn=A.aaR(
A.acf.BoK);break;case 3:Qn=A.aaR(A.acf.A$B);break;case 7:Qn=A.aaR(A.acf.BiV);break;
case 13:Qn=A.aaR(A.acf.Biu);break;case 15:Qn=A.aaR(A.acf.Bq1);break;case 4:Qn=A.
aaR(A.acf.Baw);break;default:throw new Error(AIK+Bdm.toFixed());}return Qn;},_Init:
function(aArg){C.EnumToString._Init.call(this,aArg);this.__proto__=C.DeviceComponentToString;
},_className:"Device::DeviceComponentToString"};C.AgT={AmH:function(Ah6){return Ah6;
},Ael:function(A9){return A9;},AqW:function(){return 0;},H5:function(){return 4;
},_Init:function(aArg){C.EnumToCodeset._Init.call(this,aArg);this.__proto__=C.AgT;
},_className:"Device::EaseOfDeliveryToCodeset"};C.AeU={AsM:function(A9){return A.
aaL(A.ach.AQf);},AsN:function(A9){var Bdy=A9;var RH=-1;switch(Bdy){case 0:RH=0;break;
case 1:RH=1;break;case 2:RH=2;break;default:throw new Error(AZ5+Bdy.toFixed());}
return RH;},_Init:function(aArg){C.EnumToIcon._Init.call(this,aArg);this.__proto__=
C.AeU;},_className:"Device::MotherSelectionFilterModeToIcon"};C.WhereAboutsFilterCriterion={
A5:0,Abk:function(){var Aw=A._NewObject(C.WhereAboutsFilterCriterion,0);Aw.E$(this
);return Aw;},E$:function(AI){C.FilterCriterion.E$.call(this,AI);var Aw=(C.WhereAboutsFilterCriterion.
isPrototypeOf(AI)?AI:null);if(!!Aw)this.A5=Aw.A5;},Initialize:function(A4,Eb,A7,
Qg){this.EJ=A4;this.Operator=Eb;this.A5=A7;this.YL=Qg;return this;},_Init:function(
aArg){C.FilterCriterion._Init.call(this,aArg);this.__proto__=C.WhereAboutsFilterCriterion;
},_className:"Device::WhereAboutsFilterCriterion"};C.BFb={AN7:0,BD0:1,APQ:2,LAST:
3};C.BGl={GL:0,AVZ:1,Hk:2,Year:3,LAST:4};C.TimespanDaysToString={BT:function(A9){
var BgX=A9;var ABr=A.jV;switch(BgX){case 0:ABr=A.aaR(A.acf.A6d);break;case 1:ABr=
A.aaR(A.acf.AVZ);break;case 2:ABr=A.aaR(A.acf.Hk);break;case 3:ABr=A.aaR(A.acf.Year
);break;default:throw new Error(Atl+BgX.toFixed());}return ABr;},_Init:function(
aArg){C.EnumToString._Init.call(this,aArg);this.__proto__=C.TimespanDaysToString;
},_className:"Device::TimespanDaysToString"};C.Z2={BFo:0,BD7:1,BEH:2,BEK:3,BEJ:4
,BD8:5,BEI:6,LAST:7};C.USBStateToString={BT:function(A9){var Bhi=A9;var Bp=A.jV;
switch(Bhi){case 0:Bp=AZ6;break;case 2:Bp=AZ7;break;case 1:Bp=Atm;break;case 5:Bp=
AyG;break;case 3:Bp=AyH;break;case 4:Bp=AZ8;break;case 6:Bp=AZ9;break;default:throw new
Error(AH3+Bhi.toFixed());}return Bp;},_Init:function(aArg){C.EnumToString._Init.
call(this,aArg);this.__proto__=C.USBStateToString;},_className:"Device::USBStateToString"
};C.AgN={BEG:0,BDr:1,BFJ:2};C.AxI={ACw:A.jV,Timestamp:0,AEj:0,AEo:0,AGA:0,OnSetTimestamp:
function(E){if(this.Timestamp===E)return;this.Timestamp=E;},AFz:function(E){if(this.
AEj===E)return;this.AEj=E;},AFF:function(E){if(this.AEo===E)return;this.AEo=E;},
AFP:function(E){if(this.AGA===E)return;this.AGA=E;},AFe:function(E){if(this.ACw===
E)return;this.ACw=E;},_Init:function(aArg){this.__proto__=C.AxI;A.h7++;},_Done:function(
){this.__proto__=null;A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((
B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:
"Device::SoftwareVersionInformation"};C.AvA={Timestamp:0,ARR:0,ARS:0,AVB:0,AVC:0
,AVA:0,ARQ:0,OnSetTimestamp:function(E){if(this.Timestamp===E)return;this.Timestamp=
E;},AFw:function(E){if(this.ARR===E)return;this.ARR=E;},AFx:function(E){if(this.
ARS===E)return;this.ARS=E;},AF3:function(E){if(this.AVB===E)return;this.AVB=E;},
AF4:function(E){if(this.AVC===E)return;this.AVC=E;},AF2:function(E){if(this.AVA===
E)return;this.AVA=E;},AFv:function(E){if(this.ARQ===E)return;this.ARQ=E;},_Init:
function(aArg){this.__proto__=C.AvA;A.h7++;},_Done:function(){this.__proto__=null;
A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((B=this.I)&&(B._cycle!=
D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:"Device::HardwareVersionInformation"
};C.Aqu={Undefined:0,BEw:1,BDF:2};C.AgA={Manual:0,TransponderId:1,LAST:2};C.AnimalIdAutoGenerationMethodToString={
BT:function(A9){var BcT=A9;var A1C=A.jV;switch(BcT){case 0:A1C=A.aaR(A.acf.A56);
break;case 1:A1C=A.aaR(A.acf.A6k);break;default:throw new Error(AZ_+BcT.toFixed(
));}return A1C;},_Init:function(aArg){C.EnumToString._Init.call(this,aArg);this.
__proto__=C.AnimalIdAutoGenerationMethodToString;},_className:"Device::AnimalIdAutoGenerationMethodToString"
};C.Hk={A5P:0,AD_:1,ACT:2,AEk:3,ABV:4,AEm:5,AEa:6,AD$:7,AB2:8,AGJ:9,AEz:10,AEx:11
,ACE:12,LAST:13};C.MonthToString={BT:function(A9){var BeB=A9;var XG=A.jV;switch(
BeB){case 1:XG=A.aaR(A.act.AD_);break;case 2:XG=A.aaR(A.act.ACT);break;case 3:XG=
A.aaR(A.act.AEk);break;case 4:XG=A.aaR(A.act.ABV);break;case 5:XG=A.aaR(A.act.AEm
);break;case 6:XG=A.aaR(A.act.AEa);break;case 7:XG=A.aaR(A.act.AD$);break;case 8:
XG=A.aaR(A.act.AB2);break;case 9:XG=A.aaR(A.act.AGJ);break;case 10:XG=A.aaR(A.act.
AEz);break;case 11:XG=A.aaR(A.act.AEx);break;case 12:XG=A.aaR(A.act.ACE);break;default:
throw new Error(AIL+BeB.toFixed());}return XG;},_Init:function(aArg){C.EnumToString.
_Init.call(this,aArg);this.__proto__=C.MonthToString;},_className:"Device::MonthToString"
};C.VU={FileName:A.jV,AGC:0,EN:0,AgN:0,AU6:false,E6:function(){this.E5(0);this.AgN=
1;this.FileName=A.jV;this.AGC=0;this.AU6=false;},E5:function(E){if(this.EN===E)return;
this.EN=E;A.abo([this,this.SF,this.E5],0);},SF:function(){return this.EN;},_Init:
function(aArg){this.__proto__=C.VU;A.h7++;},_Done:function(){this.__proto__=null;
A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((B=this.I)&&(B._cycle!=
D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:"Device::DataExportContext"
};C.AV6={Init:function(aArg){var B;A.zX([this,this.BfQ],[B=A._GetAutoObject(C.Device
),B.A9J,B.BbU],0);this.BfQ(this);},Ci:function(){A._GetAutoObject(C.Device).Asd(
this.toString());},BfQ:function(G){this.E3(A._GetAutoObject(C.Device).AHq);A.we(
this,0);},_Init:function(aArg){C.Int32ArrayWrapper._Init.call(this,aArg);this.__proto__=
C.AV6;this.ZB(3);this.Init(aArg);},_className:"Device::WeightGainsLowClass"};C.AV5={
Init:function(aArg){var B;A.zX([this,this.BfO],[B=A._GetAutoObject(C.Device),B.A9I
,B.BbT],0);this.BfO(this);},Ci:function(){A._GetAutoObject(C.Device).Asc(this.toString(
));},BfO:function(G){this.E3(A._GetAutoObject(C.Device).AHp);A.we(this,0);},_Init:
function(aArg){C.Int32ArrayWrapper._Init.call(this,aArg);this.__proto__=C.AV5;this.
ZB(3);this.Init(aArg);},_className:"Device::WeightGainsHighClass"};C.AV8={Init:function(
aArg){var B;A.zX([this,this.BfS],[B=A._GetAutoObject(C.Device),B.A9M,B.BbX],0);this.
BfS(this);},Ci:function(){A._GetAutoObject(C.Device).Ase(this.toString());},BfS:
function(G){this.E3(A._GetAutoObject(C.Device).AHt);A.we(this,0);},_Init:function(
aArg){C.Int32ArrayWrapper._Init.call(this,aArg);this.__proto__=C.AV8;this.ZB(3);
this.Init(aArg);},_className:"Device::WeightValuesBirthClass"};C.AV4={Init:function(
aArg){var B;A.zX([this,this.BfM],[B=A._GetAutoObject(C.Device),B.A9H,B.BbS],0);this.
BfM(this);},Ci:function(){A._GetAutoObject(C.Device).Asb(this.toString());},BfM:
function(G){this.E3(A._GetAutoObject(C.Device).AHo);A.we(this,0);},_Init:function(
aArg){C.Int32ArrayWrapper._Init.call(this,aArg);this.__proto__=C.AV4;this.ZB(3);
this.Init(aArg);},_className:"Device::WeightGainsAverageClass"};C.AMN={Init:function(
aArg){var B;A.zX([this,this.Be7],[B=A._GetAutoObject(C.Device),B.A8N,B.Bbr],0);this.
Be7(this);},Be7:function(G){this.E3(A._GetAutoObject(C.Device).ABU);A.we(this,0);
},_Init:function(aArg){C.Int32ArrayWrapper._Init.call(this,aArg);this.__proto__=
C.AMN;this.ZB(3);this.Init(aArg);},_className:"Device::AnimalTypesWeightGainsClass"
};C.BFe={BFh:0,BE7:1,BDZ:2,BGG:3,Unknown:4};C.BDD={None:0,BFp:1,BFj:2,BFf:3,BFg:
4};C.BGz={A8n:0,Manual:1,TransponderId:2,NaisId:3,LAST:4};C.TransponderLinkageIdChangeMethodToString={
BT:function(A9){var Bg2=A9;var ABt=A.jV;switch(Bg2){case 0:ABt=A.aaR(A.acf.A8n);
break;case 1:ABt=A.aaR(A.acf.A56);break;case 2:ABt=A.aaR(A.acf.A6k);break;case 3:
ABt=A.aaR(A.acf.Bis);break;default:throw new Error(AIM+Bg2.toFixed());}return ABt;
},_Init:function(aArg){C.EnumToString._Init.call(this,aArg);this.__proto__=C.TransponderLinkageIdChangeMethodToString;
},_className:"Device::TransponderLinkageIdChangeMethodToString"};C.A$f={BBN:function(
AoM){var Jq=A.ab0(A.abV(AoM,15),0,10);var Ka=A._GetAutoObject(C.Converter).S3(Jq
);if(!!Ka){if(Ka===10){if((((AoM.length!==16)||!A._GetAutoObject(A.acj.VH).AVQ(AoM
))||!!A._GetAutoObject(C.Converter).A$9(Jq))||!A._GetAutoObject(C.Converter).AVF(
Jq))return 0;else return Jq;}else return Jq;}else{Ka=A._GetAutoObject(C.Converter
).S3(A._GetAutoObject(C.Device).PY);if(!!Ka&&(Ka===10)){if(!A._GetAutoObject(A.acj.
VH).AVQ(AoM))return 0;if(AoM.length===12){var BcS=A.ab0(A.abV(AoM,10),0,10);var AKm=
A._GetAutoObject(C.Converter).AVF(BcS);if((BcS>0)&&!!AKm)return(A._GetAutoObject(
C.Converter).AqB(Ka)*1000000000000)+A.ab0(A.abV(AoM,10),0,10);}}}return 0;},Bf0:
function(JG){if(!((JG.length===8)||((JG.length===10)&&A._GetAutoObject(A.acj.VH).
AVQ(JG))))return 0;var AAV=A._NewObject(A.Core.Bs,0);var A4j=false;var A4o=A.abW(
JG,4,4);var AtY=A.wz(A4o,0,10);if((AtY<2000)||(AtY>2100)){A4o=A.abV(JG,4);AtY=A.
wz(A4o,0,10);A4j=true;}if((AtY<2000)||(AtY>2100))return 0;AAV.Year=AtY;var AK7;var
Az2;if(A4j){AK7=A.abW(JG,4,2);Az2=A.wz(AK7,0,10);}else{AK7=A.abW(JG,2,2);Az2=A.wz(
AK7,0,10);}if((Az2<1)||(Az2>12))return 0;AAV.Uv(Az2);var AK6;var Az1;if(A4j){AK6=
A.abW(JG,6,2);Az1=A.wz(AK6,0,10);}else{AK6=A.abV(JG,2);Az1=A.wz(AK6,0,10);}if((Az1<
1)||(Az1>AAV.Zp()))return 0;AAV.Ls(Az1);return AAV.JW();},_Init:function(aArg){this.
__proto__=C.A$f;A.h7++;},_Done:function(){this.__proto__=null;A.h7--;},_ReInit:function(
){},_Mark:function(D){var B;if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:
null,_cycle:0,_observers:null,_className:"Device::ParserClass"};C.AnN={_Init:function(
){C.A$f._Init.call(this,0);},_ReInit:function(){},_variants:function(){return this;
},_this:null};C.AnimalTableFieldsToString={BT:function(A9){var Aao=A9;var MS=A.jV;
switch(Aao){case 14:MS=A.aaR(A.acf.Aft);break;case 32:MS=A.aaR(A.acf.Breed);break;
case 4:MS=A.aaR(A.acf.Aeg);break;case 28:MS=A.aaR(A.acf.A5U);break;case 33:MS=A.
aaR(A.acf.AgK);break;case 23:MS=A.aaR(A.acf.KM);break;case 7:MS=A.aaR(A.acf.Afo);
break;case 2:MS=A.aaR(A.acf.P);break;case 0:MS=A.aaR(A.acf.GN);break;case 8:MS=A.
aaR(A.acf.Alarm);break;case 9:MS=A.aaR(A.acf.ACp);break;case 38:MS=A.aaR(A.acf.BiT
);break;case 11:MS=A.aaR(A.acf.Fever);break;case 29:MS=A.aaR(A.acf.ARF);break;case
18:MS=A.aaR(A.acf.M8);break;case 26:MS=A.aaR(A.acf.Ul);break;case 22:MS=A.aaR(A.
acf.Transponder);break;case 1:MS=A.aaR(A.acf.GI);break;case 34:MS=A.aaR(A.acf.Jk
);break;case 6:case 25:case 27:case 10:case 37:case 12:case 17:case 5:case 3:case
35:case 36:case 15:case 16:case 24:case 31:case 20:case 30:case 21:case 19:case 13:
MS=A.jV;break;default:throw new Error(All+A9.toFixed());}return MS;},_Init:function(
aArg){C.EnumToString._Init.call(this,aArg);this.__proto__=C.AnimalTableFieldsToString;
},_className:"Device::AnimalTableFieldsToString"};C.AEh={Bg:0,BGd:1,LAST:2};C.ListViewScopeToString={
BT:function(A9){var BAs=A9;var A21=A.jV;switch(BAs){case 0:A21=A.aaR(A.acf.Bg);break;
case 1:A21=A.aaR(A.acf.BpD);break;default:throw new Error(AZ$+A9.toFixed());}return A21;
},_Init:function(aArg){C.EnumToString._Init.call(this,aArg);this.__proto__=C.ListViewScopeToString;
},_className:"Device::ListViewScopeToString"};C.AHs={BG9:0,BG8:1,BG7:2,LAST:3};C.
WeightValuePrecisionToString={BT:function(A9){var BDb=A9;var ALI=A.jV;switch(BDb
){case 0:ALI=A0a+A.aaR(A.acf.AAe);break;case 1:ALI=A0b+A.aaR(A.acf.AiF);break;case
2:ALI=A0c+A.aaR(A.acf.AiF);break;default:throw new Error(AyI+A9.toFixed());}return ALI;
},_Init:function(aArg){C.EnumToString._Init.call(this,aArg);this.__proto__=C.WeightValuePrecisionToString;
},_className:"Device::WeightValuePrecisionToString"};C.AgF={BT:function(A9){var ALd=
A9;if(ALd===1)return A.aaR(A.acf.BjP);else return C.AnimalTypeToString.BT.call(this
,A9);},_Init:function(aArg){C.AnimalTypeToString._Init.call(this,aArg);this.__proto__=
C.AgF;},_className:"Device::AnimalTypeToStringHeifer"};C.Wn={RQ:0,BFl:1,LAST:2};
C.MassDeregistrationCriterionToString={BT:function(A9){var BAv=A9;var A26=A.jV;switch(
BAv){case 0:A26=A.aaR(A.acf.BkV);break;case 1:A26=A.aaR(A.acf.ASo);break;default:
throw new Error(Ayk+A9.toFixed());}return A26;},_Init:function(aArg){C.EnumToString.
_Init.call(this,aArg);this.__proto__=C.MassDeregistrationCriterionToString;},_className:
"Device::MassDeregistrationCriterionToString"};C.UInt64PartialFilterCriterion={A5:
A.jV,Zn:0,OG:0,Abk:function(){var Aw=A._NewObject(C.UInt64PartialFilterCriterion
,0);Aw.E$(this);return Aw;},E$:function(AI){C.FilterCriterion.E$.call(this,AI);var
Aw=(C.UInt64PartialFilterCriterion.isPrototypeOf(AI)?AI:null);if(!!Aw){this.A5=Aw.
A5;this.Zn=Aw.Zn;this.OG=Aw.OG;}},Initialize:function(A4,Eb,A7,Aty,AJd,Qg){this.
EJ=A4;this.Operator=Eb;this.A5=A7;this.YL=Qg;this.Zn=Aty;this.OG=AJd;return this;
},_Init:function(aArg){C.FilterCriterion._Init.call(this,aArg);this.__proto__=C.
UInt64PartialFilterCriterion;},_className:"Device::UInt64PartialFilterCriterion"
};C.BD4={Idle:0,BFQ:1,BF1:2,BGg:3,Error:4};C.Baj={Asl:0,AsS:0,Z2:0,A_3:function(
E){if(this.Z2===E)return;this.Z2=E;A.abo([this,this.Bl5,this.A_3],0);},A_5:function(
E){if(this.AsS===E)return;this.AsS=E;A.abo([this,this.Bl7,this.A_5],0);},A_J:function(
E){if(this.Asl===E)return;this.Asl=E;A.abo([this,this.BlH,this.A_J],0);},Bl5:function(
){return this.Z2;},Bl7:function(){return this.AsS;},BlH:function(){return this.Asl;
},_Init:function(aArg){this.__proto__=C.Baj;A.h7++;},_Done:function(){this.__proto__=
null;A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((B=this.I)&&(B._cycle
!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:"Device::UsbDevice"
};
C._Init=function(){C.Int32FilterCriterion.__proto__=C.FilterCriterion;C.StringFilterCriterion.
__proto__=C.FilterCriterion;C.Table.__proto__=C.ITable;C.Animal.__proto__=C.Row;
C.Rating.__proto__=C.Row;C.HelperClass.__proto__=C.AmP;C.BoolFilterCriterion.__proto__=
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
C.AVq.__proto__=C.Int32ArrayWrapper;C.AVp.__proto__=C.Int32ArrayWrapper;C.AMM.__proto__=
C.Int32ArrayWrapper;C.UInt64FilterCriterion.__proto__=C.FilterCriterion;C.BooleanToAssignedUnassignedString.
__proto__=C.EnumToString;C.CountryToString.__proto__=C.EnumToString;C.EaseOfDeliveryToString.
__proto__=C.EnumToString;C.WhereAboutsToString.__proto__=C.EnumToString;C.BreedToString.
__proto__=C.EnumToString;C.AnimalIdGenerationMethodToString.__proto__=C.EnumToString;
C.DirectionOfCountingToString.__proto__=C.EnumToString;C.Aei.__proto__=C.EnumToIcon;
C.AdZ.__proto__=C.EnumToIcon;C.GermanStateToString.__proto__=C.EnumToString;C.EartagNrAssignmentModeToString.
__proto__=C.EnumToString;C.M6.__proto__=C.EnumToCodeset;C.ReasonOfLeavingToString.
__proto__=C.EnumToString;C.AhC.__proto__=C.EnumToCodeset;C.K0.__proto__=C.EnumToCodeset;
C.CalfDeregistrations.__proto__=C.Row;C.DeviceComponentToString.__proto__=C.EnumToString;
C.AgT.__proto__=C.EnumToCodeset;C.AeU.__proto__=C.EnumToIcon;C.WhereAboutsFilterCriterion.
__proto__=C.FilterCriterion;C.TimespanDaysToString.__proto__=C.EnumToString;C.USBStateToString.
__proto__=C.EnumToString;C.AnimalIdAutoGenerationMethodToString.__proto__=C.EnumToString;
C.MonthToString.__proto__=C.EnumToString;C.AV6.__proto__=C.Int32ArrayWrapper;C.AV5.
__proto__=C.Int32ArrayWrapper;C.AV8.__proto__=C.Int32ArrayWrapper;C.AV4.__proto__=
C.Int32ArrayWrapper;C.AMN.__proto__=C.Int32ArrayWrapper;C.TransponderLinkageIdChangeMethodToString.
__proto__=C.EnumToString;C.AnimalTableFieldsToString.__proto__=C.EnumToString;C.
ListViewScopeToString.__proto__=C.EnumToString;C.WeightValuePrecisionToString.__proto__=
C.EnumToString;C.AgF.__proto__=C.AnimalTypeToString;C.MassDeregistrationCriterionToString.
__proto__=C.EnumToString;C.UInt64PartialFilterCriterion.__proto__=C.FilterCriterion;
};C._ReInit=function(){var B;if((B=C.Device._this))B._ReInit(),C.Device._ReInit.
call(B);if((B=C.Converter._this))B._ReInit(),C.Converter._ReInit.call(B);if((B=C.
Helper._this))B._ReInit(),C.Helper._ReInit.call(B);if((B=C.AnN._this))B._ReInit(
),C.AnN._ReInit.call(B);};C.DH=function(D){var B;if((B=C.Device._this)&&(B._cycle
!=D))B._Done(C.Device._this=null);if((B=C.Converter._this)&&(B._cycle!=D))B._Done(
C.Converter._this=null);if((B=C.Helper._this)&&(B._cycle!=D))B._Done(C.Helper._this=
null);if((B=C.AnN._this)&&(B._cycle!=D))B._Done(C.AnN._this=null);};return C;})(
);

/* VitalControl demonstration application, © Urban GmbH & Co.KG 2023 */